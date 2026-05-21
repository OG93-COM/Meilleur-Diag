import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertTriangle, Clock, Shield, FileCheck } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diagnostic DPE Paris — Performance Énergétique | Meilleur Diag',
  description:
    'Diagnostic de Performance Énergétique (DPE) à Paris et Île-de-France. Étiquette énergie A à G, obligatoire pour vente et location. Diagnostiqueurs certifiés — rapport en 24h.',
  keywords:
    'DPE Paris, diagnostic performance énergétique Paris, diagnostic énergétique obligatoire, étiquette énergie logement, DPE vente Paris, DPE location Paris, classe énergie appartement Paris, diagnostiqueur DPE certifié',
  alternates: { canonical: 'https://meilleur-diag.com/services/diagnostic-performance-energetique' },
  openGraph: {
    title: 'Diagnostic DPE Paris — Performance Énergétique | Meilleur Diag',
    description: 'DPE certifié à Paris & Île-de-France. Étiquette énergie et climat, rapport conforme en 24h.',
    url: 'https://meilleur-diag.com/services/diagnostic-performance-energetique',
    type: 'article',
    locale: 'fr_FR',
    images: [{ url: '/images/services/diagnostic-DPE.jpg', alt: 'Diagnostic DPE Paris' }],
  },
}

const toc = [
  { id: 'quoi', label: 'Qu\'est-ce que le DPE ?' },
  { id: 'etiquettes', label: 'Les étiquettes énergie et climat' },
  { id: 'pourquoi', label: 'Pourquoi faire un DPE ?' },
  { id: 'comment', label: 'Comment Meilleur Diag réalise le DPE ?' },
  { id: 'reforme', label: 'La réforme DPE 2021 : ce qui a changé' },
  { id: 'passoirethermique', label: 'DPE et passoires thermiques' },
  { id: 'conclusion', label: 'Conclusion' },
]

const classes = [
  { label: 'A', desc: 'Très performant — ≤ 70 kWh/m²/an', color: 'bg-emerald-100 text-emerald-700' },
  { label: 'B', desc: '71 à 110 kWh/m²/an', color: 'bg-green-100 text-green-700' },
  { label: 'C', desc: '111 à 180 kWh/m²/an', color: 'bg-lime-100 text-lime-700' },
  { label: 'D', desc: '181 à 250 kWh/m²/an', color: 'bg-yellow-100 text-yellow-700' },
  { label: 'E', desc: '251 à 330 kWh/m²/an', color: 'bg-orange-100 text-orange-700' },
  { label: 'F', desc: '331 à 420 kWh/m²/an — Passoire', color: 'bg-red-100 text-red-700' },
  { label: 'G', desc: '> 420 kWh/m²/an — Passoire', color: 'bg-red-200 text-red-800' },
]

export default function DiagnosticDPEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Diagnostic de Performance Énergétique (DPE) Paris',
            description: 'DPE réalisé par des diagnostiqueurs certifiés à Paris et Île-de-France. Étiquette énergie obligatoire pour vente et location.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Meilleur Diag',
              telephone: '+33782326451',
              url: 'https://www.meilleur-diag.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
            },
            areaServed: { '@type': 'Place', name: 'Île-de-France' },
            serviceType: 'Diagnostic Immobilier',
          }),
        }}
      />

      <main>
        <PageHeader
          title="Diagnostic de Performance Énergétique (DPE) à Paris"
          subtitle="Connaissez la consommation énergétique réelle de votre logement. DPE certifié, étiquette énergie conforme, obligatoire pour toute vente ou location."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Nos Services', href: '/services' },
            { label: 'DPE — Performance Énergétique' },
          ]}
        />

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="w-full rounded-lg shadow-lg overflow-hidden mb-10 bg-[#f8f8f8] aspect-auto">
              <Image src="/images/services/diagnostic-dpe-paris.jpg" alt="Diagnostic DPE Paris" width={1216} height={395} className="object-cover" draggable={false}/>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
              <article>

                {/* Quoi */}
                <div id="quoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Qu'est-ce que le DPE ?</h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le Diagnostic de Performance Énergétique (DPE) est une évaluation standardisée de la consommation d'énergie d'un logement et de ses émissions de gaz à effet de serre. Introduit en France dès 2006, il est devenu un critère central dans les transactions immobilières — tant pour la vente que pour la location.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Le DPE prend en compte de nombreux paramètres : <strong className="text-black">isolation des murs, toiture et planchers, type de vitrage, systèmes de chauffage et de ventilation, production d'eau chaude sanitaire, orientation du bâtiment</strong>. Ces données sont analysées selon une méthode de calcul réglementaire pour attribuer deux étiquettes — énergie et climat — de A (très performant) à G (passoire thermique).
                  </p>
                </div>

                {/* Étiquettes */}
                <div id="etiquettes" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Les étiquettes énergie et climat</h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Le DPE attribue deux étiquettes distinctes. L'<strong className="text-black">étiquette énergie</strong> mesure la consommation annuelle en kWh d'énergie primaire par m². L'<strong className="text-black">étiquette climat</strong> évalue les émissions de CO₂ en kg par m² et par an. La classe finale du logement est déterminée par la moins bonne des deux étiquettes.
                  </p>
                  <div className="space-y-2">
                    {classes.map(({ label, desc, color }) => (
                      <div key={label} className="flex items-center gap-4">
                        <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 ${color}`} style={{ fontFamily: 'Syne, system-ui' }}>{label}</span>
                        <p className="text-sm text-mygray">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pourquoi */}
                <div id="pourquoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Pourquoi faire un DPE ?</h2>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/diagnostic-immobilier-dpe.jpg" alt="Étiquettes énergie DPE"
                        width={868} height={288} className="w-full object-cover max-h-72" draggable={false}/>
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le DPE est <strong className="text-black">obligatoire pour toute mise en vente ou en location</strong> d'un logement, et doit figurer sur toutes les annonces immobilières depuis 2011. Mais au-delà de l'obligation légale, c'est un outil utile pour le propriétaire comme pour le futur occupant.
                  </p>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Pour un vendeur, un bon DPE valorise le bien sur le marché — les logements classés A ou B se vendent en moyenne plus vite et à un prix plus élevé. Pour un acheteur ou locataire, il permet d'anticiper les charges énergétiques et les éventuels travaux de rénovation.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-black mb-1">Depuis 2025 : interdiction de louer les logements G</p>
                      <p className="text-sm text-mygray leading-relaxed">
                        Depuis le 1er janvier 2025, les logements classés G (plus de 450 kWh/m²/an) ne peuvent plus être mis en location. Les logements F seront concernés à partir de 2028, les E à partir de 2034. Faire réaliser un DPE avant d'investir est donc devenu stratégique.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <div id="comment" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Comment Meilleur Diag réalise le DPE ?</h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Nos diagnostiqueurs certifiés utilisent la méthode de calcul 3CL-DPE 2021 (méthode conventionnelle), obligatoire depuis le 1er juillet 2021. Lors de la visite, ils relèvent :
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: Shield, title: 'Enveloppe du bâtiment', desc: 'Épaisseur et nature des isolants, type de vitrage, pont thermiques, orientation.' },
                      { icon: FileCheck, title: 'Systèmes énergétiques', desc: 'Chauffage, eau chaude sanitaire, ventilation, climatisation, énergies renouvelables.' },
                      { icon: Clock, title: 'Rapport DPE en 24h', desc: 'Rapport certifié avec étiquettes énergie et climat, recommandations de travaux.' },
                    ].map(({ icon: Icon, title, desc }) => (
                      <div key={title} className="bg-[#f8f8f8] rounded-2xl p-5">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                          <Icon size={17} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-sm text-black mb-1" style={{ fontFamily: 'Syne, system-ui' }}>{title}</h3>
                        <p className="text-xs text-mygray leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-mygray text-base leading-relaxed">
                    Les données sont ensuite saisies dans un logiciel agréé par le Ministère du Logement. Le rapport final est transmis à l'ADEME via la base de données nationale des DPE, ce qui lui confère sa valeur juridique opposable depuis 2021.
                  </p>
                </div>

                {/* Réforme */}
                <div id="reforme" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>La réforme DPE 2021 : ce qui a changé</h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Depuis le 1er juillet 2021, le DPE a été profondément réformé. Il est désormais <strong className="text-black">juridiquement opposable</strong> : si un DPE se révèle erroné, le diagnostiqueur et son assureur peuvent être tenus responsables. Les anciens DPE réalisés avant le 31 décembre 2017 ne sont plus valables depuis le 1er janvier 2023, et ceux réalisés entre 2018 et 2020 expirent le 31 décembre 2024.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-mygray leading-relaxed">
                        <strong className="text-black">Bon à savoir :</strong> si votre DPE a été réalisé avant 2021, il est fortement recommandé d'en commander un nouveau avant toute transaction. La méthode de calcul et les seuils de classement ayant évolué, la classe de votre logement peut avoir changé.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Passoires */}
                <div id="passoirethermique" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>DPE et passoires thermiques</h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Les logements classés F et G sont officiellement désignés comme <strong className="text-black">passoires thermiques</strong>. À Paris, compte tenu de l'ancienneté du parc immobilier, un grand nombre d'appartements haussmanniens et d'immeubles d'avant-guerre entrent dans cette catégorie. Le gouvernement a mis en place un calendrier d'interdiction progressif de mise en location.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Si votre bien est classé F ou G, plusieurs aides à la rénovation énergétique sont disponibles : MaPrimeRénov', éco-prêt à taux zéro (éco-PTZ), TVA réduite à 5,5 % sur les travaux de rénovation énergétique, CEE (Certificats d'Économies d'Énergie). Nos diagnostiqueurs peuvent vous orienter vers les travaux prioritaires identifiés dans le rapport DPE.
                  </p>
                </div>

                {/* Conclusion */}
                <div id="conclusion" className="mb-6">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Conclusion</h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le DPE est bien plus qu'une formalité administrative : c'est un outil au cœur de la transition énergétique du parc immobilier français. En choisissant Meilleur Diag pour votre DPE à Paris, vous bénéficiez d'un diagnostic précis, réalisé selon la méthode 3CL-DPE 2021, opposable juridiquement et transmis à l'ADEME.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Un DPE bien réalisé, c'est une transaction sécurisée, un logement mieux valorisé, et une contribution concrète à la réduction de l'empreinte carbone de votre patrimoine immobilier.
                  </p>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-black p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, system-ui' }}>Besoin d'un DPE à Paris ?</h3>
                    <p className="text-white/50 text-sm">Intervention 7j/7 — Rapport en 24h — Devis gratuit</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <Link href="/devis-diagnostic-immobilier" className="btn-primary px-5 py-3 rounded-xl text-sm">Devis gratuit <ArrowRight size={15} /></Link>
                    <a href="tel:+33782326451" className="inline-flex items-center gap-2 border border-white/15 text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-white/5 transition-colors">
                      <Phone size={15} /> 07 82 32 64 51
                    </a>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-28 space-y-4">
                <div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#ebebeb]">
                  <h3 className="font-bold text-sm text-black uppercase tracking-wide mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Sommaire</h3>
                  <nav className="space-y-1">
                    {toc.map(({ id, label }) => (
                      <a key={id} href={`#${id}`} className="flex items-center gap-2 text-sm text-mygray hover:text-primary transition-colors py-1.5 group">
                        <span className="w-1 h-1 rounded-full bg-[#ddd] group-hover:bg-primary transition-colors shrink-0" />
                        {label}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="bg-black rounded-2xl p-6">
                  <h3 className="font-bold text-white text-sm mb-1" style={{ fontFamily: 'Syne, system-ui' }}>Intervention rapide</h3>
                  <p className="text-white/40 text-xs mb-5">Paris & Île-de-France — 7j/7</p>
                  <Link href="/devis-diagnostic-immobilier" className="btn-primary w-full justify-center rounded-xl py-3 text-sm mb-3">Devis gratuit en ligne <ArrowRight size={14} /></Link>
                  <a href="tel:+33782326451" className="flex items-center justify-center gap-2 w-full border border-white/10 text-white/70 hover:text-white text-sm font-medium py-3 rounded-xl hover:bg-white/5 transition-colors">
                    <Phone size={14} /> 07 82 32 64 51
                  </a>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-[#ebebeb]">
                  <h3 className="font-bold text-sm text-black uppercase tracking-wide mb-4" style={{ fontFamily: 'Syne, system-ui' }}>En résumé</h3>
                  {[
                    { label: 'Obligatoire', value: 'Vente & Location' },
                    { label: 'Validité', value: '10 ans' },
                    { label: 'Méthode', value: '3CL-DPE 2021' },
                    { label: 'Rapport', value: 'Sous 24h' },
                    { label: 'Intervention', value: '7j/7' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-[#f0f0f0] last:border-0">
                      <span className="text-xs text-[#aaa] font-medium">{label}</span>
                      <span className="text-xs font-bold text-black">{value}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}