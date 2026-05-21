'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiter (per IP, resets on cold start)
const attempts = new Map<string, { count: number; ts: number }>()
const RATE_LIMIT   = 3    // max submissions
const RATE_WINDOW  = 60_000 * 10  // 10 minutes

type ContactPayload = {
  nom: string
  email: string
  tel?: string
  sujet: string
  message: string
  honeypot?: string  // must be empty
  timestamp?: number // must be > 3s (bot speed check)
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = attempts.get(ip)
  if (!entry || now - entry.ts > RATE_WINDOW) {
    attempts.set(ip, { count: 1, ts: now })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, '').trim().slice(0, 2000)
}

function validate(data: ContactPayload): string | null {
  if (!data.nom?.trim())                          return 'Le nom est requis.'
  if (!data.email?.includes('@'))                 return 'Email invalide.'
  if (!data.sujet?.trim())                        return 'Le sujet est requis.'
  if (!data.message || data.message.trim().length < 10) return 'Message trop court (min. 10 caractères).'
  return null
}

export async function sendContactEmail(
  payload: ContactPayload,
  ip = 'unknown'
): Promise<{ success: boolean; error?: string }> {

  // 1. Honeypot check
  if (payload.honeypot) return { success: false, error: 'Erreur de validation.' }

  // 2. Bot speed check (form must take > 3s to fill)
  if (payload.timestamp && Date.now() - payload.timestamp < 3000) {
    return { success: false, error: 'Erreur de validation.' }
  }

  // 3. Rate limiting
  if (isRateLimited(ip)) {
    return { success: false, error: 'Trop de tentatives. Réessayez dans quelques minutes.' }
  }

  // 4. Validation
  const validationError = validate(payload)
  if (validationError) return { success: false, error: validationError }

  // 5. Sanitize
  const nom     = sanitize(payload.nom)
  const email   = sanitize(payload.email)
  const tel     = payload.tel ? sanitize(payload.tel) : null
  const sujet   = sanitize(payload.sujet)
  const message = sanitize(payload.message)

  // 6. Send via Resend
  try {
    await resend.emails.send({
      from:    'Meilleur Diag <contact@meilleur-diag.com>',
      to:      ['contact@meilleur-diag.com'],
      replyTo: email,
      subject: `[Contact] ${sujet} — ${nom}`,
      html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouveau message — Meilleur Diag</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f0;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:600px;" cellpadding="0" cellspacing="0">

        <!-- Header -->
        <tr>
          <td style="background:#0a0a0a;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
              Meilleur<span style="color:#c8f135;">Diag</span>
            </p>
            <p style="margin:6px 0 0;font-size:12px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;">
              Diagnostic Immobilier
            </p>
          </td>
        </tr>

        <!-- Subject banner -->
        <tr>
          <td style="background:#c8f135;padding:14px 40px;">
            <p style="margin:0;font-size:11px;font-weight:700;color:#0a0a0a;letter-spacing:2px;text-transform:uppercase;">
              Nouveau message reçu
            </p>
            <p style="margin:4px 0 0;font-size:17px;font-weight:700;color:#0a0a0a;">
              ${sujet}
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:36px 40px;">

            <!-- Sender info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="background:#f8f8f8;border-radius:12px;padding:20px 24px;">
                  <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#999;letter-spacing:2px;text-transform:uppercase;">
                    Expéditeur
                  </p>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:4px 0;">
                        <span style="font-size:13px;color:#aaa;min-width:60px;display:inline-block;">Nom</span>
                        <span style="font-size:13px;font-weight:600;color:#0a0a0a;">${nom}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:4px 0;">
                        <span style="font-size:13px;color:#aaa;min-width:60px;display:inline-block;">Email</span>
                        <a href="mailto:${email}" style="font-size:13px;font-weight:600;color:#5b8f00;text-decoration:none;">${email}</a>
                      </td>
                    </tr>
                    ${tel ? `
                    <tr>
                      <td style="padding:4px 0;">
                        <span style="font-size:13px;color:#aaa;min-width:60px;display:inline-block;">Tél</span>
                        <a href="tel:${tel}" style="font-size:13px;font-weight:600;color:#0a0a0a;text-decoration:none;">${tel}</a>
                      </td>
                    </tr>` : ''}
                  </table>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#999;letter-spacing:2px;text-transform:uppercase;">
              Message
            </p>
            <div style="border-left:3px solid #c8f135;padding:16px 20px;background:#fafafa;border-radius:0 8px 8px 0;">
              <p style="margin:0;font-size:14px;color:#333;line-height:1.7;white-space:pre-wrap;">${message}</p>
            </div>

          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="background:#ffffff;padding:0 40px 36px;">
            <a href="mailto:${email}" style="display:inline-block;background:#0a0a0a;color:#c8f135;font-size:13px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:10px;letter-spacing:0.5px;">
              Répondre à ${nom} →
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f4f4f0;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;border-top:1px solid #e8e8e8;">
            <p style="margin:0;font-size:11px;color:#aaa;">
              Meilleur Diag · Paris & Île-de-France · 07 82 32 64 51
            </p>
            <p style="margin:4px 0 0;font-size:11px;color:#ccc;">
              Message envoyé depuis le formulaire de contact sur meilleur-diag.com
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    })

    // Auto-reply to sender
    await resend.emails.send({
      from:    'Meilleur Diag <contact@meilleur-diag.com>',
      to:      [email],
      subject: 'Votre message a bien été reçu — Meilleur Diag',
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
          <td style="background:#ffffff;padding:40px;border-radius:0 0 16px 16px;">
            <p style="margin:0 0 8px;font-size:20px;font-weight:700;color:#0a0a0a;">
              Bonjour ${nom},
            </p>
            <p style="margin:0 0 20px;font-size:14px;color:#666;line-height:1.7;">
              Nous avons bien reçu votre message concernant <strong style="color:#0a0a0a;">${sujet}</strong>.
              Notre équipe vous répondra dans les plus brefs délais, généralement dans l'heure pendant nos heures d'ouverture.
            </p>
            <div style="background:#f8f8f8;border-radius:10px;padding:16px 20px;margin-bottom:24px;">
              <p style="margin:0;font-size:12px;color:#aaa;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;">Votre message</p>
              <p style="margin:0;font-size:13px;color:#555;line-height:1.6;white-space:pre-wrap;">${message.slice(0, 300)}${message.length > 300 ? '…' : ''}</p>
            </div>
            <p style="margin:0 0 6px;font-size:13px;color:#666;">
              En cas d'urgence, n'hésitez pas à nous appeler directement :
            </p>
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
</html>
      `,
    })

    return { success: true }
  } catch (err) {
    console.error('Resend error:', err)
    return { success: false, error: 'Erreur lors de l\'envoi. Réessayez ou appelez-nous.' }
  }
}