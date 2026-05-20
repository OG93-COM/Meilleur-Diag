import type { Metadata } from 'next'

import { ArrowRight, Phone, Shield, Clock, Award } from 'lucide-react'
import Link from 'next/link'
import Services from '@/app/components/sections/Services'
import PageHeader from '@/app/components/PageHeader'

export const metadata: Metadata = {
  title: 'Nos Services de Diagnostic Immobilier Paris | Meilleur Diag',
  description:
    'Tous vos diagnostics immobiliers obligatoires à Paris et Île-de-France : DPE, Amiante, Plomb, Gaz, Électricité, Termites, Loi Carrez, ERP. Diagnostiqueurs certifiés, rapport en 24h.',
  keywords:
    'diagnostic immobilier Paris, DPE Paris, diagnostic amiante Paris, diagnostic plomb, diagnostic gaz, diagnostic électricité, diagnostic termites, loi carrez, ERP, diagnostiqueur certifié',
  alternates: { canonical: 'https://meilleur-diag.com/services' },
  openGraph: {
    title: 'Nos Services de Diagnostic Immobilier Paris | Meilleur Diag',
    description:
      'DPE, Amiante, Plomb, Gaz, Électricité, Termites, Loi Carrez, ERP — Diagnostiqueurs certifiés à Paris & Île-de-France.',
    url: 'https://meilleur-diag.com/services',
    type: 'website',
    locale: 'fr_FR',
  },
}

const packVente = [
  'DPE (Diagnostic de Performance Énergétique)',
  'Diagnostic Amiante',
  'Constat de Risque d\'Exposition au Plomb (CREP)',
  'Diagnostic Électricité (si +15 ans)',
  'Diagnostic Gaz (si +15 ans)',
  'État des Risques et Pollutions (ERP)',
  'Mesurage Loi Carrez (copropriété)',
  'Diagnostic Termites (zones à risque)',
]

const packLocation = [
  'DPE (Diagnostic de Performance Énergétique)',
  'Diagnostic Amiante',
  'Diagnostic Assainissement',
  'Constat de Risque d\'Exposition au Plomb (CREP)',
  'Diagnostic Électricité (si +15 ans)',
  'Diagnostic Gaz (si +15 ans)',
  'État des Risques et Pollutions (ERP)',
  'Mesurage Loi Boutin',
]

export default function ServicesPage() {
  return (
    <>
      <main>
        <PageHeader
          title="Nos Services de Diagnostic Immobilier"
          subtitle="Tous les diagnostics obligatoires pour la vente et la location, réalisés par nos experts certifiés à Paris et en Île-de-France."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Nos Services' },
          ]}
        />

        {/* Services grid */}
        <Services />

        {/* Packs section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-5xl mx-auto mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-primary/10 text-secondary">
                Packs diagnostics
              </span>
              <h2 className="section-title mb-4">
                Un seul rendez-vous pour{' '}
                <span className="text-primary">tous vos diagnostics</span>
              </h2>
              <p className="text-mygray text-base leading-relaxed">
                Regroupez vos diagnostics en une seule intervention pour gagner du temps et réduire les coûts. Nos packs vente et location incluent tous les diagnostics obligatoires selon la réglementation en vigueur.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Pack Vente */}
              <div className="rounded-4xl border border-[#ebebeb] overflow-hidden">
                <div className="bg-black px-7 py-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-xl">🏠</div>
                    <div>
                      <h3 className="font-bold text-white text-lg" style={{ fontFamily: 'Syne, system-ui' }}>Pack Vente</h3>
                      <p className="text-white/40 text-xs">Diagnostics obligatoires pour vendre</p>
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <ul className="space-y-3 mb-7">
                    {packVente.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-mygray">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2.5 2.5L8 3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/devis-diagnostic-immobilier" className="btn-primary w-full justify-center rounded-xl py-3 text-sm">
                    Devis Pack Vente
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Pack Location */}
              <div className="rounded-3xl border-2 border-primary overflow-hidden relative">
                <div className="absolute top-4 right-4 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Le + demandé
                </div>
                <div className="bg-black px-7 py-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-xl">🏢</div>
                    <div>
                      <h3 className="font-bold text-white text-lg" style={{ fontFamily: 'Syne, system-ui' }}>Pack Location</h3>
                      <p className="text-white/40 text-xs">Diagnostics obligatoires pour louer</p>
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <ul className="space-y-3 mb-7">
                    {packLocation.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-mygray">
                        <span className="w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2.5 2.5L8 3" stroke="#ffaa17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/devis-diagnostic-immobilier" className="btn-primary w-full justify-center rounded-xl py-3 text-sm">
                    Devis Pack Location
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO text block */}
        <section className="py-16 bg-[#f8f8f8]">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-black mb-5" style={{ fontFamily: 'Syne, system-ui' }}>
                Le diagnostic immobilier à Paris : ce que dit la loi
              </h2>
              <div className="space-y-4 text-[15px] text-mygray leading-relaxed">
                <p>
                  En France, la réglementation impose au vendeur ou au bailleur de remettre un <strong className="text-black">Dossier de Diagnostic Technique (DDT)</strong> à l'acquéreur ou au locataire lors de toute transaction immobilière. Ce dossier regroupe l'ensemble des diagnostics obligatoires selon la nature du bien, son année de construction et sa localisation géographique.
                </p>
                <p>
                  À Paris et en Île-de-France, les diagnostics les plus fréquemment exigés sont le <strong className="text-black">DPE</strong> (obligatoire depuis 2006 pour toute vente ou location), le <strong className="text-black">diagnostic amiante</strong> pour les biens construits avant 1997, et le <strong className="text-black">diagnostic plomb</strong> pour les logements antérieurs à 1949. Le diagnostic électricité et gaz est requis dès lors que les installations ont plus de 15 ans.
                </p>
                <p>
                  Meilleur Diag intervient sur l'ensemble de la région parisienne — Paris intramuros, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Yvelines, Essonne, Val-d'Oise et Seine-et-Marne — avec des <strong className="text-black">diagnostiqueurs certifiés et assurés</strong>, du lundi au dimanche, sans frais de déplacement supplémentaires.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                {[
                  { icon: Shield, title: 'Certifiés COFRAC', desc: 'Diagnostiqueurs accrédités par des organismes reconnus par l\'État' },
                  { icon: Clock, title: 'Rapport en 24h', desc: 'Rapport complet et conforme transmis le lendemain de l\'intervention' },
                  { icon: Award, title: 'Conformité légale', desc: 'Diagnostics acceptés par tous les notaires et agences immobilières' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-2xl p-5 border border-[#ebebeb]">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon size={17} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-sm text-black mb-1" style={{ fontFamily: 'Syne, system-ui' }}>{title}</h3>
                    <p className="text-xs text-mygray leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-black">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
              Prêt à planifier votre diagnostic ?
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto text-base">
              Obtenez un devis gratuit en 2 minutes. Nos diagnostiqueurs interviennent 7j/7 sur Paris et l'Île-de-France.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/devis-diagnostic-immobilier" className="btn-primary px-7 py-4 rounded-xl text-base shadow-lg shadow-primary/20">
                Demander un devis gratuit
                <ArrowRight size={17} />
              </Link>
              <a href="tel:+33782326451" className="inline-flex items-center gap-2 justify-center font-semibold px-7 py-4 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-all text-base">
                <Phone size={17} />
                07 82 32 64 51
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}