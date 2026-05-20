'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Demande de devis en ligne',
    desc: 'Remplissez notre formulaire en 2 minutes : type de bien, surface, localisation et diagnostics souhaités. Devis gratuit et sans engagement.',
    icon: '📋',
  },
  {
    num: '02',
    title: 'Confirmation et prise de rendez-vous',
    desc: 'Nous vous contactons rapidement pour confirmer votre devis et fixer un rendez-vous selon vos disponibilités, 7 jours sur 7.',
    icon: '📅',
  },
  {
    num: '03',
    title: 'Intervention sur site',
    desc: 'Nos diagnostiqueurs certifiés se déplacent à votre adresse et réalisent l\'ensemble des diagnostics avec rigueur et professionnalisme.',
    icon: '🏠',
  },
  {
    num: '04',
    title: 'Rapport certifié en 24h',
    desc: 'Vous recevez votre rapport complet et conforme par email dans les 24 heures. Document immédiatement utilisable pour votre dossier de vente ou de location.',
    icon: '✅',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll('.step-card').forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 120)
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
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{ background: 'rgba(255,170,23,0.1)', color: 'var(--color-secondary)' }}>
            Notre processus
          </span>
          <h2 className="section-title mb-4">
            Simple, rapide,<br />
            <span style={{ color: 'var(--color-primary)' }}>efficace</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-mygray)' }}>
            De la demande de devis à la réception de votre rapport, tout est pensé pour vous simplifier la vie.
          </p>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connector line (desktop) */}
          <div
            className="absolute top-16 left-0 right-0 h-px hidden lg:block"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,170,23,0.3) 10%, rgba(255,170,23,0.3) 90%, transparent)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ num, title, desc, icon }, i) => (
              <div key={num} className="step-card animate-on-scroll relative">
                {/* Number dot */}
                <div className="relative z-10 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto lg:mx-0"
                    style={{ background: i === 0 ? 'var(--color-primary)' : 'var(--color-light)', border: i === 0 ? 'none' : '1px solid #e8e8e8' }}
                  >
                    {icon}
                  </div>
                </div>

                {/* Step number */}
                <div className="mb-3">
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Étape {num}
                  </span>
                </div>

                <h3
                  className="font-bold text-base mb-3 leading-snug"
                  style={{ fontFamily: 'Syne, system-ui', color: 'var(--color-black)' }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-mygray)' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link href="/devis-diagnostic-immobilier" className="btn-primary text-base px-8 py-4 rounded-xl inline-flex" style={{ boxShadow: '0 8px 24px rgba(255,170,23,0.25)' }}>
            Commencer ma demande de devis
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}