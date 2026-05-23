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
      from:    'Meilleur Diag <noreply@meilleur-diag.com>',
      to:      ['contact@meilleur-diag.com'],
      replyTo: email,
      subject: `📋 Nouvelle demande de devis — ${pack}`,
      // Email interne (notification devis)
      html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Nouvelle demande de devis — Meilleur Diag</title>
      </head>
      <body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 16px;">
          <tr><td align="center">
            <table width="100%" style="max-width:600px;" cellpadding="0" cellspacing="0">

              <!-- HEADER -->
              <tr>
                <td style="background:#222429;border-radius:16px 16px 0 0;padding:28px 40px;">
                  <p style="margin:0;font-size:24px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                    Meilleur<span style="color:#ffaa17;">Diag</span>
                  </p>
                  <p style="margin:6px 0 0;font-size:11px;color:rgba(255,255,255,0.35);letter-spacing:3px;text-transform:uppercase;">
                    Diagnostic Immobilier · Paris & Île-de-France
                  </p>
                </td>
              </tr>

              <!-- BANDEAU PACK -->
              <tr>
                <td style="background:#ffaa17;padding:14px 40px;">
                  <p style="margin:0;font-size:10px;font-weight:700;color:#222429;letter-spacing:2.5px;text-transform:uppercase;">
                    📋 Nouvelle demande de devis
                  </p>
                  <p style="margin:5px 0 0;font-size:18px;font-weight:700;color:#222429;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                    ${pack}
                  </p>
                </td>
              </tr>

              <!-- BODY -->
              <tr>
                <td style="background:#ffffff;padding:36px 40px;">

                  <!-- Informations du bien -->
                  <p style="margin:0 0 12px;font-size:10px;font-weight:700;color:#aaa;letter-spacing:2.5px;text-transform:uppercase;">
                    Informations du bien
                  </p>
                  <table width="100%" cellpadding="0" cellspacing="0"
                    style="border:1px solid #ebebeb;border-radius:12px;overflow:hidden;margin-bottom:28px;">
                    <tr style="background:#f8f8f8;">
                      <td style="padding:11px 16px;font-size:12px;color:#686a6f;font-weight:500;width:45%;border-bottom:1px solid #f0f0f0;">
                        Type de bien
                      </td>
                      <td style="padding:11px 16px;font-size:13px;color:#222429;font-weight:600;border-bottom:1px solid #f0f0f0;">
                        ${typeBien}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:11px 16px;font-size:12px;color:#686a6f;font-weight:500;border-bottom:1px solid #f0f0f0;">
                        Année de construction
                      </td>
                      <td style="padding:11px 16px;font-size:13px;color:#222429;font-weight:600;border-bottom:1px solid #f0f0f0;">
                        ${anneeConstruction}
                      </td>
                    </tr>
                    <tr style="background:#f8f8f8;">
                      <td style="padding:11px 16px;font-size:12px;color:#686a6f;font-weight:500;border-bottom:1px solid #f0f0f0;">
                        Surface habitable
                      </td>
                      <td style="padding:11px 16px;font-size:13px;color:#222429;font-weight:600;border-bottom:1px solid #f0f0f0;">
                        ${surface}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:11px 16px;font-size:12px;color:#686a6f;font-weight:500;">
                        Installation gaz
                      </td>
                      <td style="padding:11px 16px;font-size:13px;color:#222429;font-weight:600;">
                        ${gaz}
                      </td>
                    </tr>
                  </table>

                  <!-- Coordonnées client -->
                  <p style="margin:0 0 12px;font-size:10px;font-weight:700;color:#aaa;letter-spacing:2.5px;text-transform:uppercase;">
                    Coordonnées client
                  </p>
                  <table width="100%" cellpadding="0" cellspacing="0"
                    style="border:1px solid #ebebeb;border-radius:12px;overflow:hidden;margin-bottom:28px;">
                    <tr style="background:#f8f8f8;">
                      <td style="padding:11px 16px;font-size:12px;color:#686a6f;font-weight:500;width:45%;border-bottom:1px solid #f0f0f0;">
                        Nom complet
                      </td>
                      <td style="padding:11px 16px;font-size:13px;color:#222429;font-weight:600;border-bottom:1px solid #f0f0f0;">
                        ${nom}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:11px 16px;font-size:12px;color:#686a6f;font-weight:500;border-bottom:1px solid #f0f0f0;">
                        Email
                      </td>
                      <td style="padding:11px 16px;font-size:13px;border-bottom:1px solid #f0f0f0;">
                        <a href="mailto:${email}" style="color:#ffaa17;text-decoration:none;font-weight:600;">${email}</a>
                      </td>
                    </tr>
                    <tr style="background:#f8f8f8;">
                      <td style="padding:11px 16px;font-size:12px;color:#686a6f;font-weight:500;border-bottom:1px solid #f0f0f0;">
                        Téléphone
                      </td>
                      <td style="padding:11px 16px;font-size:13px;color:#222429;font-weight:600;border-bottom:1px solid #f0f0f0;">
                        <a href="tel:${tel}" style="color:#222429;text-decoration:none;">${tel}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:11px 16px;font-size:12px;color:#686a6f;font-weight:500;">
                        Adresse du bien
                      </td>
                      <td style="padding:11px 16px;font-size:13px;color:#222429;font-weight:600;">
                        ${adresse}
                      </td>
                    </tr>
                  </table>

                  <!-- CTA réponse -->
                  <a href="mailto:${email}"
                    style="display:inline-block;background:#222429;color:#ffaa17;font-size:13px;
                          font-weight:700;text-decoration:none;padding:14px 28px;border-radius:10px;
                          letter-spacing:0.3px;">
                    Répondre à ${nom} →
                  </a>

                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td style="background:#f5f5f5;border-radius:0 0 16px 16px;padding:22px 40px;
                          text-align:center;border-top:1px solid #ebebeb;">
                  <p style="margin:0;font-size:11px;color:#aaa;">
                    Meilleur Diag · Paris & Île-de-France · 07 82 32 64 51
                  </p>
                  <p style="margin:4px 0 0;font-size:11px;color:#ccc;">
                    Devis reçu via meilleur-diag.com
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

    // — Auto-reply to client —
    await resend.emails.send({
      from:    'Meilleur Diag <contact@meilleur-diag.com>',
      to:      [email],
      subject: 'Votre demande de devis a bien été reçue — Meilleur Diag',
      // Auto-reply devis au client
      html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Demande de devis reçue — Meilleur Diag</title>
      </head>
      <body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 16px;">
          <tr><td align="center">
            <table width="100%" style="max-width:560px;" cellpadding="0" cellspacing="0">

              <!-- HEADER -->
              <tr>
                <td style="background:#222429;border-radius:16px 16px 0 0;padding:28px 40px;text-align:center;">
                  <p style="margin:0;font-size:24px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                    Meilleur<span style="color:#ffaa17;">Diag</span>
                  </p>
                  <p style="margin:6px 0 0;font-size:11px;color:rgba(255,255,255,0.35);letter-spacing:3px;text-transform:uppercase;">
                    Diagnostic Immobilier · Paris & Île-de-France
                  </p>
                </td>
              </tr>

              <!-- BANDEAU CONFIRMATION -->
              <tr>
                <td style="background:#ffaa17;padding:14px 40px;">
                  <p style="margin:0;font-size:10px;font-weight:700;color:#222429;letter-spacing:2.5px;text-transform:uppercase;">
                    Demande bien reçue ✓
                  </p>
                  <p style="margin:5px 0 0;font-size:15px;font-weight:700;color:#222429;">
                    Nous vous recontactons dans les plus brefs délais
                  </p>
                </td>
              </tr>

              <!-- BODY -->
              <tr>
                <td style="background:#ffffff;padding:36px 40px;">

                  <p style="margin:0 0 8px;font-size:19px;font-weight:700;color:#222429;
                            font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                    Bonjour ${nom},
                  </p>
                  <p style="margin:0 0 24px;font-size:14px;color:#686a6f;line-height:1.75;">
                    Votre demande de devis pour un
                    <strong style="color:#222429;">${pack}</strong>
                    a bien été reçue. Notre équipe vous recontactera très rapidement —
                    généralement <strong style="color:#222429;">dans l'heure</strong>
                    pendant nos horaires d'ouverture <strong style="color:#222429;">(7j/7, 8h–20h)</strong>.
                  </p>

                  <!-- Récapitulatif -->
                  <div style="background:#fffdf7;border:1px solid #ffe0a0;border-radius:12px;
                              padding:20px;margin-bottom:28px;">
                    <p style="margin:0 0 14px;font-size:10px;font-weight:700;color:#e09200;
                              letter-spacing:2.5px;text-transform:uppercase;">
                      Récapitulatif de votre demande
                    </p>
                    <table cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding:5px 0;font-size:13px;color:#686a6f;width:120px;">Pack demandé</td>
                        <td style="padding:5px 0;font-size:13px;color:#222429;font-weight:600;">${pack}</td>
                      </tr>
                      <tr>
                        <td style="padding:5px 0;font-size:13px;color:#686a6f;">Type de bien</td>
                        <td style="padding:5px 0;font-size:13px;color:#222429;font-weight:600;">${typeBien}</td>
                      </tr>
                      <tr>
                        <td style="padding:5px 0;font-size:13px;color:#686a6f;">Surface</td>
                        <td style="padding:5px 0;font-size:13px;color:#222429;font-weight:600;">${surface}</td>
                      </tr>
                      <tr>
                        <td style="padding:5px 0;font-size:13px;color:#686a6f;">Construction</td>
                        <td style="padding:5px 0;font-size:13px;color:#222429;font-weight:600;">${anneeConstruction}</td>
                      </tr>
                    </table>
                  </div>

                  <!-- Garanties -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                    <tr>
                      <td style="padding:8px 12px;background:#f8f8f8;border-radius:8px;
                                  font-size:12px;color:#686a6f;text-align:center;width:30%;">
                        ⚡ Rapport<br/><strong style="color:#222429;">en 24h</strong>
                      </td>
                      <td style="width:8px;"></td>
                      <td style="padding:8px 12px;background:#f8f8f8;border-radius:8px;
                                  font-size:12px;color:#686a6f;text-align:center;width:30%;">
                        🛡️ Certifiés<br/><strong style="color:#222429;">COFRAC</strong>
                      </td>
                      <td style="width:8px;"></td>
                      <td style="padding:8px 12px;background:#f8f8f8;border-radius:8px;
                                  font-size:12px;color:#686a6f;text-align:center;width:30%;">
                        📅 Intervention<br/><strong style="color:#222429;">7j/7</strong>
                      </td>
                    </tr>
                  </table>

                  <!-- Séparateur -->
                  <div style="height:1px;background:#f0f0f0;margin-bottom:24px;"></div>

                  <p style="margin:0 0 10px;font-size:13px;color:#686a6f;">
                    Besoin d'une réponse urgente ? Appelez-nous directement :
                  </p>
                  <a href="tel:+33782326451"
                    style="display:inline-block;background:#ffaa17;color:#222429;font-size:14px;
                          font-weight:700;text-decoration:none;padding:13px 26px;border-radius:10px;">
                    07 82 32 64 51
                  </a>

                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td style="background:#f5f5f5;border-radius:0 0 16px 16px;padding:22px 40px;
                          text-align:center;border-top:1px solid #ebebeb;">
                  <p style="margin:0;font-size:11px;color:#aaa;">
                    Meilleur Diag · Paris & Île-de-France
                  </p>
                  <p style="margin:4px 0 0;font-size:11px;color:#ccc;">
                    <a href="https://meilleur-diag.com" style="color:#ccc;text-decoration:none;">
                      meilleur-diag.com
                    </a>
                    · contact@meilleur-diag.com · 07 82 32 64 51
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

    return { success: true }
  } catch (err) {
    console.error('Resend error:', err)
    return { success: false, error: "Erreur lors de l'envoi. Réessayez ou appelez-nous." }
  }
}