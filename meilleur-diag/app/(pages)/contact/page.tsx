import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Meilleur Diag Paris',
  description:
    'Contactez Meilleur Diag pour votre diagnostic immobilier à Paris et Île-de-France. Réponse garantie dans l\'heure, intervention 7j/7.',
  keywords: 'contact diagnostic immobilier Paris, meilleur diag contact, diagnostic immobilier Île-de-France',
  alternates: { canonical: 'https://meilleur-diag.com/contact' },
  openGraph: {
    title: 'Contact — Meilleur Diag Paris',
    description: 'Contactez nos diagnostiqueurs certifiés. Devis gratuit, réponse dans l\'heure.',
    url: 'https://meilleur-diag.com/contact',
    type: 'website',
    locale: 'fr_FR',
  },
}

const infos = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '07 82 32 64 51',
    sub: 'Lun – Sam · 8h – 20h',
    href: 'tel:+33782326451',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@meilleur-diag.com',
    sub: 'Réponse sous 1h en journée',
    href: 'mailto:contact@meilleur-diag.com',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: MapPin,
    label: 'Zone d\'intervention',
    value: 'Paris & Île-de-France',
    sub: 'Tous les départements 75, 77, 78, 91, 92, 93, 94, 95',
    href: null,
    color: 'bg-rose-50 text-rose-500',
  },
  {
    icon: Clock,
    label: 'Disponibilité',
    value: '7j/7 · 8h – 20h',
    sub: 'Interventions le week-end sur RDV',
    href: null,
    color: 'bg-amber-50 text-amber-500',
  },
]

const faq = [
  {
    q: 'Quel est le délai pour obtenir un rendez-vous ?',
    a: 'Nous intervenons généralement sous 24 à 48h après votre demande, selon les disponibilités.',
  },
  {
    q: 'Le devis est-il vraiment gratuit ?',
    a: 'Oui, entièrement gratuit et sans engagement. Nous vous envoyons un devis personnalisé sous 1h.',
  },
  {
    q: 'Quand recevrai-je mon rapport ?',
    a: 'Le rapport officiel vous est transmis par email dans les 24h suivant l\'intervention.',
  },
  {
    q: 'Intervenez-vous hors Paris intramuros ?',
    a: 'Oui, nous couvrons l\'ensemble de l\'Île-de-France : petite et grande couronne.',
  },
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Meilleur Diag',
            url: 'https://meilleur-diag.com/contact',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'Meilleur Diag',
              telephone: '+33782326451',
              email: 'contact@meilleur-diag.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
              areaServed: 'Île-de-France',
              openingHours: 'Mo-Su 08:00-20:00',
            },
          }),
        }}
      />

      <main>
        <PageHeader
          title="Contactez-nous"
          subtitle="Notre équipe de diagnostiqueurs certifiés vous répond rapidement. Devis gratuit, intervention 7j/7 sur Paris et toute l'Île-de-France."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Contact' },
          ]}
        />

        {/* ── Info cards ──────────────────────────────────────── */}
        <section className="py-12 bg-[#f8f8f8]">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {infos.map(({ icon: Icon, label, value, sub, href, color }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 border border-[#ebebeb] flex flex-col gap-3"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#aaa] mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-bold text-sm text-black hover:text-primary transition-colors break-all"
                        style={{ fontFamily: 'Syne, system-ui' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-bold text-sm text-black" style={{ fontFamily: 'Syne, system-ui' }}>
                        {value}
                      </p>
                    )}
                    <p className="text-xs text-[#aaa] mt-0.5 leading-snug">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form + FAQ ──────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">

              {/* Form card */}
              <div>
                <div className="mb-7">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10 text-secondary mb-4">
                    <MessageCircle size={12} />
                    Formulaire de contact
                  </span>
                  <h2 className="text-2xl font-bold text-black" style={{ fontFamily: 'Syne, system-ui' }}>
                    Envoyez-nous un message
                  </h2>
                  <p className="text-mygray text-sm mt-1">
                    Réponse garantie dans l'heure en journée. Tous les champs marqués <span className="text-primary font-bold">*</span> sont obligatoires.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-[#ebebeb] p-7 md:p-9 shadow-sm">
                  <ContactForm />
                </div>
              </div>

              {/* Sidebar: CTA + FAQ */}
              <aside className="lg:sticky lg:top-28 space-y-5">

                {/* Quick CTA */}
                <div className="bg-black rounded-2xl p-7">
                  <h3 className="font-bold text-white text-base mb-1" style={{ fontFamily: 'Syne, system-ui' }}>
                    Besoin d'un devis rapide ?
                  </h3>
                  <p className="text-white/40 text-xs mb-5 leading-relaxed">
                    Renseignez votre bien en 2 minutes et recevez votre devis dans l'heure.
                  </p>
                  <Link
                    href="/devis"
                    className="btn-primary w-full justify-center rounded-xl py-3 text-sm mb-3"
                  >
                    Devis gratuit en ligne
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href="tel:+33782326451"
                    className="flex items-center justify-center gap-2 w-full border border-white/10 text-white/70 hover:text-white text-sm font-medium py-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <Phone size={14} />
                    07 82 32 64 51
                  </a>
                </div>

                {/* FAQ */}
                <div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#ebebeb]">
                  <h3 className="font-bold text-sm text-black uppercase tracking-wide mb-5" style={{ fontFamily: 'Syne, system-ui' }}>
                    Questions fréquentes
                  </h3>
                  <div className="space-y-4">
                    {faq.map(({ q, a }) => (
                      <div key={q}>
                        <p className="text-xs font-bold text-black mb-1 leading-snug">{q}</p>
                        <p className="text-xs text-mygray leading-relaxed">{a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications badge */}
                <div className="bg-white rounded-2xl p-5 border border-[#ebebeb] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-xl">
                    🏅
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black" style={{ fontFamily: 'Syne, system-ui' }}>Diagnostiqueurs certifiés</p>
                    <p className="text-[11px] text-[#aaa] mt-0.5 leading-snug">
                      Certifiés COFRAC — Accréditation n°3-1521. Assurance RC professionnelle.
                    </p>
                  </div>
                </div>

              </aside>
            </div>
          </div>
        </section>

        {/* ── Google Map ──────────────────────────────────────── */}
        <section className="bg-[#f8f8f8] py-16">
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-1" style={{ fontFamily: 'Syne, system-ui' }}>
                Zone d'intervention
              </h2>
              <p className="text-mygray text-sm">
                Nous intervenons sur l'ensemble de Paris et de l'Île-de-France, 7j/7.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#ebebeb] shadow-sm">
              {/* Google Maps embed — replace YOUR_API_KEY or use embed URL without key */}
              <iframe
                title="Zone d'intervention Meilleur Diag — Paris Île-de-France"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.38451566!2d2.2769952!3d48.8589506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1716000000000!5m2!1sfr!2sfr"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Departments grid */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {[
                { dep: '75', name: 'Paris' },
                { dep: '77', name: 'Seine-et-Marne' },
                { dep: '78', name: 'Yvelines' },
                { dep: '91', name: 'Essonne' },
                { dep: '92', name: 'Hauts-de-Seine' },
                { dep: '93', name: 'Seine-St-Denis' },
                { dep: '94', name: 'Val-de-Marne' },
                { dep: '95', name: "Val-d'Oise" },
              ].map(({ dep, name }) => (
                <div
                  key={dep}
                  className="flex flex-col items-center justify-center bg-white rounded-xl border border-[#ebebeb] py-3 px-2 text-center"
                >
                  <span className="text-sm font-black text-primary" style={{ fontFamily: 'Syne, system-ui' }}>{dep}</span>
                  <span className="text-[10px] text-[#aaa] mt-0.5 leading-tight">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}