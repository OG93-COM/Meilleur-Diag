'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiter
const attempts = new Map<string, { count: number; ts: number }>()
const RATE_LIMIT  = 3
const RATE_WINDOW = 10 * 60_000 // 10 min

function isRateLimited(email: string): boolean {
  const now   = Date.now()
  const entry = attempts.get(email)
  if (!entry || now - entry.ts > RATE_WINDOW) {
    attempts.set(email, { count: 1, ts: now })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

function sanitize(s: string) {
  return s.replace(/[<>]/g, '').trim().slice(0, 1000)
}

export type DevisPayload = {
  pack: string
  typeBien: string
  anneeConstruction: string
  surface: string
  gaz: string
  nom: string
  email: string
  tel: string
  adresse: string
  // anti-bot
  honeypot?: string
  timestamp?: number
}

export async function sendDevisEmail( data: DevisPayload ): Promise<{ success: boolean; error?: string }> {

  // 1. Honeypot
  if (data.honeypot) return { success: false, error: 'Erreur de validation.' }

  // 2. Speed check — bots fill forms in < 2s
  if (data.timestamp && Date.now() - data.timestamp < 2000) {
    return { success: false, error: 'Erreur de validation.' }
  }

  // 3. Basic field validation
  if (!data.pack || !data.typeBien || !data.anneeConstruction || !data.surface)
    return { success: false, error: 'Informations du bien incomplètes.' }
  if (!data.nom?.trim())
    return { success: false, error: 'Le nom est requis.' }
  if (!data.email?.includes('@'))
    return { success: false, error: 'Email invalide.' }

  // 4. Rate limit by email
  if (isRateLimited(data.email))
    return { success: false, error: 'Trop de tentatives. Réessayez dans quelques minutes.' }

  // 5. Sanitize
  const pack              = sanitize(data.pack)
  const typeBien          = sanitize(data.typeBien)
  const anneeConstruction = sanitize(data.anneeConstruction)
  const surface           = sanitize(data.surface)
  const gaz               = sanitize(data.gaz || 'Non précisé')
  const nom               = sanitize(data.nom)
  const email             = sanitize(data.email)
  const tel               = sanitize(data.tel || 'Non renseigné')
  const adresse           = sanitize(data.adresse || 'Non renseignée')

  const row = (label: string, val: string, even: boolean) => `
    <tr style="background:${even ? '#fff' : '#fafafa'}">
      <td style="padding:10px 14px;font-size:13px;color:#686a6f;font-weight:500;width:45%;border-bottom:1px solid #f0f0f0">${label}</td>
      <td style="padding:10px 14px;font-size:13px;color:#222429;font-weight:600;border-bottom:1px solid #f0f0f0">${val}</td>
    </tr>`

  try {
    // — Internal notification —
    await resend.emails.send({
      from:    'Meilleur Diag <contact@meilleur-diag.com>',
      to:      ['contact@meilleur-diag.com'],
      replyTo: email,
      subject: `📋 Nouvelle demande de devis — ${pack}`,
      html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f0;padding:40px 16px;">
  <tr><td align="center">
    <table width="100%" style="max-width:600px;" cellpadding="0" cellspacing="0">

      <!-- Header -->
      <tr>
        <td style="background:#0a0a0a;border-radius:16px 16px 0 0;padding:32px 40px;">
          <p style="margin:0;font-size:22px;font-weight:700;color:#fff;letter-spacing:-0.5px;">
            Meilleur<span style="color:#c8f135;">Diag</span>
          </p>
          <p style="margin:6px 0 0;font-size:12px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;">
            Nouvelle demande de devis
          </p>
        </td>
      </tr>

      <!-- Pack banner -->
      <tr>
        <td style="background:#c8f135;padding:14px 40px;">
          <p style="margin:0;font-size:11px;font-weight:700;color:#0a0a0a;letter-spacing:2px;text-transform:uppercase;">Pack demandé</p>
          <p style="margin:4px 0 0;font-size:18px;font-weight:700;color:#0a0a0a;">${pack}</p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="background:#fff;padding:36px 40px;">

          <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#999;letter-spacing:2px;text-transform:uppercase;">Informations du bien</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;border-radius:10px;overflow:hidden;border:1px solid #f0f0f0;">
            ${row('Type de bien', typeBien, true)}
            ${row('Année de construction', anneeConstruction, false)}
            ${row('Surface habitable', surface, true)}
            ${row('Installation gaz', gaz, false)}
          </table>

          <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#999;letter-spacing:2px;text-transform:uppercase;">Coordonnées client</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;border-radius:10px;overflow:hidden;border:1px solid #f0f0f0;">
            ${row('Nom', nom, true)}
            ${row('Email', email, false)}
            ${row('Téléphone', tel, true)}
            ${row('Adresse du bien', adresse, false)}
          </table>

          <a href="mailto:${email}" style="display:inline-block;background:#0a0a0a;color:#c8f135;font-size:13px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:10px;">
            Répondre à ${nom} →
          </a>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f4f4f0;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;border-top:1px solid #e8e8e8;">
          <p style="margin:0;font-size:11px;color:#aaa;">Meilleur Diag · Paris & Île-de-France · 07 82 32 64 51</p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`,
    })

    // — Auto-reply to client —
    await resend.emails.send({
      from:    'Meilleur Diag <contact@meilleur-diag.com>',
      to:      [email],
      subject: 'Votre demande de devis a bien été reçue — Meilleur Diag',
      html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f0;padding:40px 16px;">
  <tr><td align="center">
    <table width="100%" style="max-width:560px;" cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:#0a0a0a;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
          <p style="margin:0;font-size:22px;font-weight:700;color:#fff;letter-spacing:-0.5px;">
            Meilleur<span style="color:#c8f135;">Diag</span>
          </p>
        </td>
      </tr>
      <tr>
        <td style="background:#fff;padding:40px;border-radius:0 0 16px 16px;">
          <p style="margin:0 0 16px;font-size:18px;font-weight:700;color:#0a0a0a;">Bonjour ${nom},</p>
          <p style="margin:0 0 20px;font-size:14px;color:#666;line-height:1.7;">
            Nous avons bien reçu votre demande de devis pour un <strong style="color:#0a0a0a;">${pack}</strong>.
            Notre équipe vous recontactera dans les plus brefs délais — généralement dans l'heure.
          </p>
          <div style="background:#f8f8f8;border-radius:10px;padding:18px 20px;margin-bottom:24px;">
            <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#aaa;letter-spacing:2px;text-transform:uppercase;">Récapitulatif</p>
            <p style="margin:4px 0;font-size:13px;color:#555;"><span style="color:#0a0a0a;font-weight:600;">Pack :</span> ${pack}</p>
            <p style="margin:4px 0;font-size:13px;color:#555;"><span style="color:#0a0a0a;font-weight:600;">Type :</span> ${typeBien}</p>
            <p style="margin:4px 0;font-size:13px;color:#555;"><span style="color:#0a0a0a;font-weight:600;">Surface :</span> ${surface}</p>
          </div>
          <p style="margin:0 0 6px;font-size:13px;color:#666;">En cas d'urgence, appelez-nous directement :</p>
          <a href="tel:+33782326451" style="display:inline-block;background:#c8f135;color:#0a0a0a;font-size:14px;font-weight:700;text-decoration:none;padding:12px 24px;border-radius:8px;">
            07 82 32 64 51
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 40px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#bbb;">Meilleur Diag · Paris & Île-de-France · meilleur-diag.com</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`,
    })

    return { success: true }
  } catch (err) {
    console.error('Resend error:', err)
    return { success: false, error: "Erreur lors de l'envoi. Réessayez ou appelez-nous." }
  }
}