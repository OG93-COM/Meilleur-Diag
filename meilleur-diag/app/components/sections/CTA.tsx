import Link from 'next/link'
import { Phone, ArrowRight, MapPin } from 'lucide-react'

const zones = [
  { label: 'Paris (75)',               href: '/diagnostic-immobilier' },
  { label: 'Hauts-de-Seine (92)',      href: '/diagnostic-immobilier/diagnostic-immobilier-hauts-de-seine' },
  { label: 'Seine-Saint-Denis (93)',   href: '/diagnostic-immobilier/diagnostic-immobilier-seine-saint-denis' },
  { label: 'Val-de-Marne (94)',        href: '/diagnostic-immobilier/diagnostic-immobilier-val-de-marne' },
  { label: 'Yvelines (78)',            href: '/diagnostic-immobilier/diagnostic-immobilier-yvelines' },
  { label: 'Essonne (91)',             href: '/diagnostic-immobilier/diagnostic-immobilier-essonne' },
  { label: "Val-d'Oise (95)",          href: '/diagnostic-immobilier/diagnostic-immobilier-val-doise' },
  { label: 'Seine-et-Marne (77)',      href: '/diagnostic-immobilier/diagnostic-immobilier-seine-et-marne' },
]

export default function CTA() {
  return (
    <section className="py-24" style={{ background: 'var(--color-black)' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6" style={{ background: 'rgba(255,170,23,0.15)', color: 'var(--color-primary)' }}>
              Intervention rapide
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Syne, system-ui' }}>
              Besoin d'un diagnostic<br />
              <span style={{ color: 'var(--color-primary)' }}>maintenant ?</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Nos diagnostiqueurs certifiés interviennent 7 jours sur 7 dans toute l'Île-de-France. Rapport complet transmis en moins de 24 heures après l'intervention.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="tel:+33782326451"
                className="btn-primary text-base px-7 py-4 rounded-xl justify-center"
                style={{ boxShadow: '0 8px 24px rgba(255,170,23,0.3)' }}
              >
                <Phone size={18} />
                07 82 32 64 51
              </Link>
              <Link
                href="/devis-diagnostic-immobilier"
                className="inline-flex items-center gap-2 justify-center font-semibold px-7 py-4 rounded-xl border transition-all duration-200 text-base"
                style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'white' }}
              >
                Devis en ligne
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-6">
              <div>
                <p className="stat-number text-2xl font-bold">100%</p>
                <p className="text-white/40 text-xs">Rapports conformes</p>
              </div>
              <div className="w-px h-10" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <p className="stat-number text-2xl font-bold">500+</p>
                <p className="text-white/40 text-xs">clients satisfaits</p>
              </div>
              <div className="w-px h-10" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <p className="stat-number text-2xl font-bold">24h</p>
                <p className="text-white/40 text-xs">délai rapport</p>
              </div>
            </div>
          </div>

          {/* Right — zones card */}
          <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,170,23,0.15)' }}>
                <MapPin size={16} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="font-bold text-white text-base" style={{ fontFamily: 'Syne, system-ui' }}>
                Zones d'intervention
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {zones.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-150 group"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                  
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors" style={{ background: 'var(--color-primary)' }} />
                  <span className="text-white/60 text-sm group-hover:text-white/90 transition-colors">{label}</span>
                </Link>
              ))}
            </div>

            <div
              className="rounded-2xl p-5"
              style={{ background: 'rgba(255,170,23,0.08)', border: '1px solid rgba(255,170,23,0.15)' }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-white font-semibold text-sm mb-1" style={{ fontFamily: 'Syne, system-ui' }}>
                    Préférez l'email ?
                  </p>
                  <p className="text-white/40 text-xs mb-2">
                    Envoyez-nous votre demande et nous vous répondons dans l'heure.
                  </p>
                  <Link
                    href="mailto:contact@meilleur-diag.com"
                    className="text-sm font-semibold transition-colors"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    contact@meilleur-diag.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}