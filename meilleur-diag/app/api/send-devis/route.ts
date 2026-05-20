import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()

  const {
    pack, typeBien, anneeConstruction, surface, gaz,
    nom, email, tel, adresse, ville, codePostal,
  } = body

  try {
    await resend.emails.send({
      from: 'Meilleur Diag <devis@meilleur-diag.com>',
      to: ['contact@meilleur-diag.com'],
      replyTo: email,
      subject: `📋 Nouvelle demande de devis — ${pack}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #eee">
          <div style="background:#222429;padding:32px 40px">
            <h1 style="color:#ffaa17;font-size:22px;margin:0;font-weight:700">Nouvelle demande de devis</h1>
            <p style="color:#ffffff80;margin:6px 0 0;font-size:14px">Meilleur Diag — Diagnostic Immobilier Paris</p>
          </div>
          <div style="padding:32px 40px">
            <div style="background:#f8f8f8;border-radius:10px;padding:20px;margin-bottom:24px;border-left:4px solid #ffaa17">
              <p style="margin:0 0 4px;font-size:12px;color:#686a6f;text-transform:uppercase;letter-spacing:.05em;font-weight:600">Type de demande</p>
              <p style="margin:0;font-size:20px;font-weight:700;color:#222429">${pack}</p>
            </div>
            <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:.08em;color:#686a6f;margin:0 0 16px;font-weight:600">Informations du bien</h3>
            <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
              ${[
                ['Type de bien', typeBien],
                ['Année de construction', anneeConstruction],
                ['Surface habitable', surface],
                ['Installation gaz', gaz || 'Non précisé'],
              ].map(([label, val], i) => `
                <tr style="background:${i % 2 === 0 ? '#fff' : '#fafafa'}">
                  <td style="padding:10px 14px;font-size:13px;color:#686a6f;font-weight:500;width:50%;border-bottom:1px solid #f0f0f0">${label}</td>
                  <td style="padding:10px 14px;font-size:13px;color:#222429;font-weight:600;border-bottom:1px solid #f0f0f0">${val}</td>
                </tr>
              `).join('')}
            </table>
            <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:.08em;color:#686a6f;margin:0 0 16px;font-weight:600">Informations du client</h3>
            <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
              ${[
                ['Nom complet', nom],
                ['Email', email],
                ['Téléphone', tel || 'Non renseigné'],
                ['Adresse du bien', adresse || 'Non renseignée'],
                ['Ville', ville || 'Non renseignée'],
                ['Code postal', codePostal || 'Non renseigné'],
              ].map(([label, val], i) => `
                <tr style="background:${i % 2 === 0 ? '#fff' : '#fafafa'}">
                  <td style="padding:10px 14px;font-size:13px;color:#686a6f;font-weight:500;width:50%;border-bottom:1px solid #f0f0f0">${label}</td>
                  <td style="padding:10px 14px;font-size:13px;color:#222429;font-weight:600;border-bottom:1px solid #f0f0f0">${val}</td>
                </tr>
              `).join('')}
            </table>
            <div style="background:#fff8ed;border-radius:10px;padding:16px 20px;border:1px solid #ffaa1740">
              <p style="margin:0;font-size:13px;color:#222429">
                💡 <strong>Répondre directement</strong> à cet email pour contacter <strong>${nom}</strong> à l'adresse <strong>${email}</strong>
              </p>
            </div>
          </div>
          <div style="background:#f8f8f8;padding:20px 40px;border-top:1px solid #eee">
            <p style="margin:0;font-size:12px;color:#aaa;text-align:center">Meilleur Diag · Diagnostic Immobilier Paris & Île-de-France · contact@meilleur-diag.com</p>
          </div>
        </div>
      `,
    })

    // Confirmation email to client
    await resend.emails.send({
      from: 'Meilleur Diag <devis@meilleur-diag.com>',
      to: [email],
      subject: '✅ Votre demande de devis a bien été reçue — Meilleur Diag',
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #eee">
          <div style="background:#222429;padding:32px 40px">
            <h1 style="color:#ffaa17;font-size:22px;margin:0;font-weight:700">Demande bien reçue ✓</h1>
            <p style="color:#ffffff80;margin:6px 0 0;font-size:14px">Meilleur Diag — Diagnostic Immobilier Paris</p>
          </div>
          <div style="padding:32px 40px">
            <p style="font-size:15px;color:#222429;line-height:1.6;margin:0 0 20px">Bonjour <strong>${nom}</strong>,</p>
            <p style="font-size:14px;color:#686a6f;line-height:1.7;margin:0 0 24px">
              Nous avons bien reçu votre demande de devis pour un <strong style="color:#222429">${pack}</strong>. 
              Notre équipe va l'étudier et vous recontactera dans les plus brefs délais — généralement dans l'heure pendant nos horaires d'ouverture.
            </p>
            <div style="background:#f8f8f8;border-radius:10px;padding:20px;margin-bottom:24px">
              <p style="margin:0 0 12px;font-size:13px;font-weight:600;color:#222429">Récapitulatif de votre demande :</p>
              ${[
                ['Pack demandé', pack],
                ['Type de bien', typeBien],
                ['Surface', surface],
              ].map(([label, val]) => `
                <p style="margin:6px 0;font-size:13px;color:#686a6f"><span style="color:#222429;font-weight:500">${label} :</span> ${val}</p>
              `).join('')}
            </div>
            <div style="border-left:3px solid #ffaa17;padding-left:16px;margin-bottom:28px">
              <p style="margin:0;font-size:13px;color:#686a6f;line-height:1.6">
                En cas d'urgence, appelez-nous directement au <strong style="color:#222429">07 82 32 64 51</strong>.<br>
                Nous intervenons <strong style="color:#222429">7j/7</strong> sur Paris et toute l'Île-de-France.
              </p>
            </div>
          </div>
          <div style="background:#f8f8f8;padding:20px 40px;border-top:1px solid #eee">
            <p style="margin:0;font-size:12px;color:#aaa;text-align:center">Meilleur Diag · contact@meilleur-diag.com · 07 82 32 64 51</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}