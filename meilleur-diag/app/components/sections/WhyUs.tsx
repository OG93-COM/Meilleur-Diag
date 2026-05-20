'use client'
import { useEffect, useRef } from 'react'
import { Award, Clock, FileCheck, MapPin, Euro, Users } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Diagnostiqueurs certifiés',
    desc: 'Tous nos experts sont certifiés par des organismes accrédités COFRAC. Formations régulières pour rester à jour sur la réglementation.',
    accent: '#ffaa17',
  },
  {
    icon: Clock,
    title: 'Rapport en moins de 24h',
    desc: 'Votre rapport complet et conforme à la réglementation vous est transmis par email dans les 24 heures suivant l\'intervention.',
    accent: '#3b82f6',
  },
  {
    icon: FileCheck,
    title: 'Conformité garantie',
    desc: 'Rapports 100% conformes aux exigences légales en vigueur. Nos diagnostics sont acceptés par tous les notaires et agences immobilières.',
    accent: '#10b981',
  },
  {
    icon: MapPin,
    title: 'Toute l\'Île-de-France',
    desc: 'Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Yvelines et au-delà. Nous intervenons dans toute la région, 7j/7.',
    accent: '#f97316',
  },
  {
    icon: Euro,
    title: 'Tarifs transparents',
    desc: 'Prix clairs, sans surprise. Devis gratuit en ligne en quelques clics. Pack vente et pack location disponibles pour faire des économies.',
    accent: '#8b5cf6',
  },
  {
    icon: Users,
    title: '+ de 1 500 clients satisfaits',
    desc: 'Particuliers, agences immobilières, notaires, promoteurs — nous travaillons avec l\'ensemble des acteurs du marché immobilier parisien.',
    accent: '#ec4899',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll('.why-card').forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 80)
            })
            obs.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-24" style={{ background: 'var(--color-light)' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6" style={{ background: 'rgba(255,170,23,0.1)', color: 'var(--color-secondary)' }}>
              Pourquoi nous choisir
            </span>
            <h2 className="section-title mb-6">
              Pourquoi choisir<br />
              <span style={{ color: 'var(--color-primary)' }}>Meilleur Diag ?</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-mygray)' }}>
              Depuis notre création, nous accompagnons les propriétaires, acheteurs et professionnels de l'immobilier parisien avec un service de diagnostic rigoureux, rapide et transparent.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '1 500+', label: 'Diagnostics' },
                { val: '4.9/5', label: 'Note moyenne' },
                { val: '24h', label: 'Délai rapport' },
                { val: '7j/7', label: 'Disponible' },
              ].map(({ val, label }) => (
                <div key={label} className="bg-white rounded-2xl p-4" style={{ border: '1px solid #ebebeb' }}>
                  <p className="stat-number text-2xl font-bold">{val}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-mygray)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — reasons grid */}
          <div ref={ref} className="space-y-4">
            {reasons.map(({ icon: Icon, title, desc, accent }) => (
              <div
                key={title}
                className="why-card animate-on-scroll bg-white rounded-2xl p-5 flex gap-4"
                style={{ border: '1px solid #ebebeb' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${accent}18` }}
                >
                  <Icon size={20} style={{ color: accent }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1.5" style={{ fontFamily: 'Syne, system-ui', color: 'var(--color-black)' }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-mygray)' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}