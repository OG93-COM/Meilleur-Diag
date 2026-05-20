'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Clock, FileText } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full  flex items-center overflow-hidden pt-38 pb-20">
      {/* Background Image */}
      <Image
        src="/images/bg-diagnostic-immobilier.jpg"
        alt="Diagnostic immobilier Paris Île-de-France"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/90 to-black/70" />

      {/* Decorative edges */}
      <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative container-custom z-10 px-6">
        <div className="max-w-5xl text-white">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs tracking-wide mb-6">
            <ShieldCheck size={14} className="text-primary" />
            Diagnostiqueurs certifiés • Paris & Île-de-France
          </div>

          {/* Title */}
          <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold leading-tight font-display">
            Diagnostic immobilier à{' '}
            <span className="text-primary">Paris</span> & Île-de-France
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed">
            DPE, amiante, plomb, gaz, électricité, termites et ERP.
            <br />
            Des diagnostics rapides, conformes et réalisés par des experts certifiés.
          </p>

          {/* Key points */}
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              Intervention rapide
            </div>
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-primary" />
              Rapports conformes
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary" />
              Certifiés & assurés
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/devis-diagnostic-immobilier"
              className="px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primarylight transition-all flex items-center justify-center gap-2"
            >
              Demander un devis gratuit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-all text-white text-center"
            >
              Voir nos diagnostics
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}