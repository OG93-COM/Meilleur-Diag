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
      from:    'Meilleur Diag <noreply@meilleur-diag.com>',
      to:      ['contact@meilleur-diag.com'],
      replyTo: email,
      subject: `[Contact] ${sujet} — ${nom}`,
      // Email interne (notification à l'équipe)
      html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Nouveau message — Meilleur Diag</title>
      </head>
      <body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 16px;">
          <tr><td align="center">
            <table width="100%" style="max-width:600px;" cellpadding="0" cellspacing="0">

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

              <!-- BANDEAU SUJET -->
              <tr>
                <td style="background:#ffaa17;padding:14px 40px;">
                  <p style="margin:0;font-size:10px;font-weight:700;color:#222429;letter-spacing:2.5px;text-transform:uppercase;">
                    Nouveau message reçu
                  </p>
                  <p style="margin:5px 0 0;font-size:17px;font-weight:700;color:#222429;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                    ${sujet}
                  </p>
                </td>
              </tr>

              <!-- BODY -->
              <tr>
                <td style="background:#ffffff;padding:36px 40px;">

                  <!-- Expéditeur -->
                  <p style="margin:0 0 12px;font-size:10px;font-weight:700;color:#aaa;letter-spacing:2.5px;text-transform:uppercase;">
                    Expéditeur
                  </p>
                  <table width="100%" cellpadding="0" cellspacing="0"
                    style="border:1px solid #ebebeb;border-radius:12px;overflow:hidden;margin-bottom:28px;">
                    <tr style="background:#f8f8f8;">
                      <td style="padding:11px 16px;font-size:12px;color:#686a6f;font-weight:500;width:90px;border-bottom:1px solid #f0f0f0;">
                        Nom
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
                        <a href="mailto:${email}"
                          style="color:#ffaa17;text-decoration:none;font-weight:600;">${email}</a>
                      </td>
                    </tr>
                    ${tel ? `
                    <tr style="background:#f8f8f8;">
                      <td style="padding:11px 16px;font-size:12px;color:#686a6f;font-weight:500;">
                        Téléphone
                      </td>
                      <td style="padding:11px 16px;font-size:13px;color:#222429;font-weight:600;">
                        <a href="tel:${tel}" style="color:#222429;text-decoration:none;">${tel}</a>
                      </td>
                    </tr>` : ''}
                  </table>

                  <!-- Message -->
                  <p style="margin:0 0 12px;font-size:10px;font-weight:700;color:#aaa;letter-spacing:2.5px;text-transform:uppercase;">
                    Message
                  </p>
                  <div style="border-left:3px solid #ffaa17;padding:16px 20px;background:#fffdf7;border-radius:0 10px 10px 0;">
                    <p style="margin:0;font-size:14px;color:#444;line-height:1.75;white-space:pre-wrap;">${message}</p>
                  </div>

                </td>
              </tr>

              <!-- CTA -->
              <tr>
                <td style="background:#ffffff;padding:0 40px 36px;">
                  <a href="mailto:${email}"
                    style="display:inline-block;background:#222429;color:#ffaa17;font-size:13px;font-weight:700;
                          text-decoration:none;padding:14px 28px;border-radius:10px;letter-spacing:0.3px;">
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
                    Message reçu via le formulaire de contact · meilleur-diag.com
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
      // Auto-reply au client
      html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Message reçu — Meilleur Diag</title>
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

              <!-- CONFIRMATION BANDEAU -->
              <tr>
                <td style="background:#ffaa17;padding:14px 40px;">
                  <p style="margin:0;font-size:10px;font-weight:700;color:#222429;letter-spacing:2.5px;text-transform:uppercase;">
                    Message bien reçu ✓
                  </p>
                  <p style="margin:5px 0 0;font-size:15px;font-weight:700;color:#222429;">
                    Nous reviendrons vers vous très rapidement
                  </p>
                </td>
              </tr>

              <!-- BODY -->
              <tr>
                <td style="background:#ffffff;padding:36px 40px;">

                  <p style="margin:0 0 6px;font-size:19px;font-weight:700;color:#222429;
                            font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                    Bonjour ${nom},
                  </p>
                  <p style="margin:0 0 24px;font-size:14px;color:#686a6f;line-height:1.75;">
                    Nous avons bien reçu votre message concernant
                    <strong style="color:#222429;">${sujet}</strong>.
                    Notre équipe vous répondra dans les plus brefs délais —
                    généralement dans l'heure pendant nos heures d'ouverture
                    <strong style="color:#222429;">(7j/7, 8h–20h)</strong>.
                  </p>

                  <!-- Récap message -->
                  <div style="background:#fffdf7;border:1px solid #ffe0a0;border-radius:12px;
                              padding:18px 20px;margin-bottom:28px;">
                    <p style="margin:0 0 10px;font-size:10px;font-weight:700;color:#e09200;
                              letter-spacing:2.5px;text-transform:uppercase;">
                      Votre message
                    </p>
                    <p style="margin:0;font-size:13px;color:#555;line-height:1.7;white-space:pre-wrap;">
                      ${message.slice(0, 300)}${message.length > 300 ? '…' : ''}
                    </p>
                  </div>

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
                    · contact@meilleur-diag.com
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
    return { success: false, error: 'Erreur lors de l\'envoi. Réessayez ou appelez-nous.' }
  }
}