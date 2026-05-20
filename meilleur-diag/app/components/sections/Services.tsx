'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: '/images/services/dpe.png',
    title: 'DPE',
    fullTitle: 'Diagnostic de Performance Énergétique',
    desc: "Évaluation de la consommation d'énergie de votre logement. Obligatoire pour toute vente ou location.",
    href: '/services/diagnostic-performance-energetique',
    tags: ['Vente', 'Location'],
    iconBg: 'bg-blue-100',
    border: 'hover:border-blue-300',
    dot: 'bg-blue-400',
  },
  {
    icon: '/images/services/amiante.png',
    title: 'Amiante',
    fullTitle: 'Diagnostic Amiante',
    desc: "Détection des matériaux contenant de l'amiante. Obligatoire pour les biens construits avant 1997.",
    href: '/services/diagnostic-amiante',
    tags: ['Vente', 'Avant 1997'],
    iconBg: 'bg-amber-100',
    border: 'hover:border-amber-300',
    dot: 'bg-amber-400',
  },
  {
    icon: '/images/services/plomb.png',
    title: 'Plomb',
    fullTitle: 'Diagnostic Plomb (CREP)',
    desc: "Constat de Risque d'Exposition au Plomb. Indispensable pour les biens construits avant 1949.",
    href: '/services/diagnostic-plomb',
    tags: ['Vente', 'Location'],
    iconBg: 'bg-red-100',
    border: 'hover:border-red-300',
    dot: 'bg-red-400',
  },
  {
    icon: '/images/services/electricite.png',
    title: 'Électricité',
    fullTitle: 'Diagnostic Électrique',
    desc: "Contrôle de la sécurité et conformité de l'installation électrique de plus de 15 ans.",
    href: '/services/diagnostic-electricite',
    tags: ['Vente', 'Location'],
    iconBg: 'bg-violet-100',
    border: 'hover:border-violet-300',
    dot: 'bg-violet-400',
  },
  {
    icon: '/images/services/gaz.png',
    title: 'Gaz',
    fullTitle: 'Diagnostic Gaz',
    desc: 'Vérification de la sécurité de votre installation de gaz naturel de plus de 15 ans.',
    href: '/services/diagnostic-gaz',
    tags: ['Vente', 'Location'],
    iconBg: 'bg-orange-100',
    border: 'hover:border-orange-300',
    dot: 'bg-orange-400',
  },
  {
    icon: '/images/services/termites.png',
    title: 'Termites',
    fullTitle: 'Diagnostic Termites',
    desc: 'Détection des termites et insectes xylophages dans la structure du bâtiment.',
    href: '/services/diagnostic-termites',
    tags: ['Vente', 'Zones à risque'],
    iconBg: 'bg-emerald-100',
    border: 'hover:border-emerald-300',
    dot: 'bg-emerald-400',
  },
  {
    icon: '/images/services/loi-carrez.png',
    title: 'Loi Carrez',
    fullTitle: 'Mesurage Loi Carrez',
    desc: 'Mesure précise de la superficie privative en copropriété pour la vente.',
    href: '/services/diagnostic-loi-carrez',
    tags: ['Vente', 'Copropriété'],
    iconBg: 'bg-cyan-100',
    border: 'hover:border-cyan-300',
    dot: 'bg-cyan-400',
  },
  {
    icon: '/images/services/loi-boutin.png',
    title: 'Loi Boutin',
    fullTitle: 'Mesurage Loi Boutin',
    desc: 'Surface habitable obligatoire dans le contrat de location pour tout bailleur.',
    href: '/services/diagnostic-loi-boutin',
    tags: ['Location'],
    iconBg: 'bg-pink-100',
    border: 'hover:border-pink-300',
    dot: 'bg-pink-400',
  },
  {
    icon: '/images/services/risques-naturels.png',
    title: 'Risques Naturels',
    fullTitle: 'ERP — État des Risques et Pollutions',
    desc: 'Évaluation des risques naturels et technologiques du bien. Obligatoire vente et location.',
    href: '/services/diagnostic-risques-naturels',
    tags: ['Vente', 'Location'],
    iconBg: 'bg-teal-100',
    border: 'hover:border-teal-300',
    dot: 'bg-teal-400',
  },
  {
    icon: '/images/services/assainissement.png',
    title: 'Assainissement',
    fullTitle: 'Diagnostic Assainissement',
    desc: "Contrôle des systèmes d'évacuation des eaux usées pour les maisons individuelles.",
    href: '/services/diagnostic-assainissement',
    tags: ['Vente', 'Maison'],
    iconBg: 'bg-sky-100',
    border: 'hover:border-sky-300',
    dot: 'bg-sky-400',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll('.svc-card').forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 60)
            })
            obs.disconnect()
          }
        })
      },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="services" className="py-24 bg-[#f8f8f8]">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-[#ffaa17]/10 text-[#e09200]">
            Nos prestations
          </span>
          <h2 className="section-title mb-4">
            Tous vos diagnostics<br />
            <span className="text-[#ffaa17]">en un seul endroit</span>
          </h2>
          <p className="text-base leading-relaxed text-mygray">
            Nos diagnostiqueurs certifiés prennent en charge l'ensemble des diagnostics
            obligatoires pour la vente et la location de votre bien à Paris et en Île-de-France.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`svc-card animate-on-scroll group flex flex-col justify-center items-center bg-white rounded-2xl p-5 border border-transparent ${service.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm`}
            >
              {/* Top row — circle icon + arrow */}
            
                {/* Circle logo 60x60 */}
                  <Image src={service.icon} width={100} height={100} className="object-cover mb-1" alt={service.title}/>


              {/* Title */}
              <h3 className="font-bold text-[15px] text-[#222429] mb-0.5 group-hover:text-primary transition-colors duration-200"
                style={{ fontFamily: 'Syne, system-ui' }} >
                {service.title}
              </h3>

              {/* Full title */}
              <p className="text-[11px] font-medium text-mygray mb-3 leading-snug">
                {service.fullTitle}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-[#e8e8e8] mb-3 group-hover:w-12 group-hover:bg-[#ffaa17] transition-all duration-300" />

              {/* Desc */}
              <p className="text-[13px] leading-relaxed text-mygray flex-1 mb-4">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 text-[10px] font-semibold text-[#444] uppercase tracking-wide"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${service.dot}`} />
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}

          {/* CTA Card — Pack complet */}
          <div className="svc-card animate-on-scroll rounded-2xl p-5 flex flex-col bg-[#222429] border border-[#2e3139]">
            {/* Top */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-[60px] h-[60px] rounded-full bg-[#ffaa17]/15 flex items-center justify-center text-3xl flex-shrink-0">
                📋
              </div>
            </div>

            <h3
              className="font-bold text-[15px] text-white mb-0.5"
              style={{ fontFamily: 'Syne, system-ui' }}
            >
              Pack Complet
            </h3>
            <p className="text-[11px] font-medium text-white/40 mb-3 leading-snug">
              Vente & Location — Tous diagnostics
            </p>

            <div className="w-8 h-px bg-white/10 mb-3" />

            <p className="text-[13px] leading-relaxed text-white/50 flex-1 mb-6">
              Tous vos diagnostics regroupés en une seule intervention. Pratique, économique, et livré en moins de 24h.
            </p>

            <Link href="/devis-diagnostic-immobilier" className="w-full inline-flex items-center justify-center gap-2 bg-[#ffaa17] text-[#222429] font-bold text-sm px-4 py-3 rounded-xl hover:bg-[#e09200] transition-colors duration-200"
              style={{ fontFamily: 'Syne, system-ui' }} >
                Obtenir un devis
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}