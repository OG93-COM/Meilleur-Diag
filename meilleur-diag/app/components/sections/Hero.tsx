'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Shield, Clock, FileText, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

const badges = [
  { icon: Shield, text: 'Certifiés & Assurés' },
  { icon: Clock, text: 'Intervention rapide' },
  { icon: FileText, text: 'Rapports conformes' },
]

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <Image
        src="/images/bg-diacnostic-immobilier-paris.jpg"
        alt="Diagnostic immobilier Paris Île-de-France"
        fill
        priority
        className="object-cover object-center opacity-5"
      />
      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(255,170,23,0.12)_0%,transparent_70%)] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(255,170,23,0.07)_0%,transparent_90%)] animate-pulse" />

      <div className="container-custom relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — text */}
          <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white animate-pulse bg-white/0 border border-white/15 backdrop-blur-md text-xs tracking-wide mb-6">
            <ShieldCheck size={14} className="text-primary" />
            Diagnostiqueurs certifiés • Paris & Île-de-France
          </div>

            <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: 'Syne, system-ui, sans-serif' }} >
              Diagnostic
              <br />
              <span style={{ color: 'var(--color-primary)' }}>Immobilier</span>
              <br />
              à Paris
            </h1>

            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
              Diagnostics obligatoires pour la vente et la location — DPE, Amiante, Plomb, Gaz, Électricité.
              Rapport certifié livré en moins de 24h, intervention 7j/7.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/devis-diagnostic-immobilier" className="btn-primary text-base px-7 py-4 rounded-xl shadow-lg" style={{ boxShadow: '0 8px 24px rgba(255,170,23,0.3)' }}>
                Devis Gratuit
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+33782326451" className="btn-outline text-base px-7 py-4 rounded-xl" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                <Phone size={18} />
                07 82 32 64 51
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              {badges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,170,23,0.15)' }}>
                    <Icon size={14} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <span className="text-white/60 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating card */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main card */}
              <div className="floating rounded-3xl p-8 w-80" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--color-primary)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" fill="#222429"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Syne, system-ui' }}>Pack Vente Complet</p>
                    <p className="text-white/40 text-xs">Paris — Appartement 75m²</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: 'DPE', status: 'Inclus', color: '#22c55e' },
                    { label: 'Amiante', status: 'Inclus', color: '#22c55e' },
                    { label: 'Plomb (CREP)', status: 'Inclus', color: '#22c55e' },
                    { label: 'Électricité', status: 'Inclus', color: '#22c55e' },
                    { label: 'Gaz', status: 'Inclus', color: '#22c55e' },
                    { label: 'ERP', status: 'Inclus', color: '#22c55e' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">{item.label}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.15)', color: item.color }}>
                        ✓ {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-white/40 text-xs mb-1">Rapport disponible en</p>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: 'Syne, system-ui' }}>
                    Moins de <span style={{ color: 'var(--color-primary)' }}>24h</span>
                  </p>
                </div> */}
                <Image src={"/images/diagnostic-immobilier-dpe.png"} width={200} height={200} alt='diagnostic dpe schema' className='absolute -bottom-30 right-14'/>
              </div>

              {/* Floating mini badge */}
              <div
                className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 text-center"
                style={{
                  background: 'var(--color-primary)',
                  animation: 'float 3s ease-in-out infinite 1s',
                }}
              >
                <p className="text-black font-bold text-lg leading-none" style={{ fontFamily: 'Syne, system-ui' }}>7j/7</p>
                <p className="text-black/70 text-[10px] font-medium">Intervention</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #222429)' }} />
    </section>
  )
}