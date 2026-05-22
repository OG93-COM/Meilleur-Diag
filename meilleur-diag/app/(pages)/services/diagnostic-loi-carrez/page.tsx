import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertTriangle, Clock, Shield, FileCheck } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diagnostic Loi Carrez Paris — Mesurage Copropriété | Meilleur Diag',
  description:
    'Mesurage Loi Carrez à Paris et Île-de-France. Mesure précise de la superficie privative pour toute vente en copropriété. Diagnostiqueurs certifiés — rapport en 24h.',
  keywords:
    'loi carrez Paris, diagnostic loi carrez, mesurage carrez Paris, superficie privative copropriété, métrage loi carrez obligatoire, diagnostiqueur loi carrez Paris, surface carrez appartement Paris',
  alternates: { canonical: 'https://meilleur-diag.com/services/diagnostic-loi-carrez' },
  openGraph: {
    title: 'Diagnostic Loi Carrez Paris | Meilleur Diag',
    description: 'Mesurage Loi Carrez certifié à Paris. Superficie privative exacte pour vente en copropriété, rapport conforme en 24h.',
    url: 'https://meilleur-diag.com/services/diagnostic-loi-carrez',
    type: 'article',
    locale: 'fr_FR',
    images: [{ url: '/images/services/diagnostic-loi-carrez.jpg', alt: 'Diagnostic Loi Carrez Paris' }],
  },
}

const toc = [
  { id: 'quoi', label: 'Qu\'est-ce que la Loi Carrez ?' },
  { id: 'calcule', label: 'Comment est calculée la surface Carrez ?' },
  { id: 'quand', label: 'Quand réaliser ce mesurage ?' },
  { id: 'pourquoi', label: 'Pourquoi faire appel à un professionnel ?' },
  { id: 'comment', label: 'Comment Meilleur Diag réalise ce mesurage ?' },
  { id: 'refaire', label: 'Quand refaire un diagnostic Loi Carrez ?' },
  { id: 'conclusion', label: 'Conclusion' },
]

const exclusions = [
  { icon: '🧱', label: 'Murs, cloisons, gaines et embrasures de portes et fenêtres' },
  { icon: '📐', label: 'Surfaces sous plafond inférieur à 1,80 mètre de hauteur' },
  { icon: '🏚️', label: 'Caves, garages, emplacements de stationnement et locaux communs' },
  { icon: '🌿', label: 'Terrasses, balcons, loggias et combles non aménagés' },
  { icon: '🏗️', label: 'Surfaces occupées par des escaliers intérieurs et leurs projections' },
  { icon: '⬛', label: 'Placards et rangements intégrés de moins de 1,80 mètre de hauteur' },
]

export default function DiagnosticLoiCarrezPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Mesurage Loi Carrez Paris',
            description: 'Mesure précise de la superficie privative en copropriété. Obligatoire pour toute vente en copropriété à Paris et Île-de-France.',
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
          title="Mesurage Loi Carrez à Paris"
          subtitle="Mesure précise et certifiée de la superficie privative de votre bien en copropriété. Obligatoire avant toute vente — rapport livré en 24h."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Nos Services', href: '/services' },
            { label: 'Loi Carrez' },
          ]}
        />

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="w-full rounded-lg shadow-lg overflow-hidden mb-10 bg-[#f8f8f8] aspect-auto">
              <Image src="/images/services/diagnostic-loi-carrez.jpg" alt="Mesurage Loi Carrez Paris" width={1216} height={395} className="object-cover" draggable={false}/>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
              <article>

                {/* Quoi */}
                <div id="quoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Qu'est-ce que la Loi Carrez ?</h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    La Loi Carrez, entrée en vigueur le 18 décembre 1996, impose la mention de la <strong className="text-black">superficie privative</strong> dans tout acte de vente d'un lot en copropriété. Son objectif est simple : garantir à l'acheteur une information fiable et transparente sur la surface réelle du bien qu'il acquiert.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    À Paris, où les biens en copropriété représentent la grande majorité des transactions, ce mesurage est incontournable. Un écart de surface non détecté peut avoir des répercussions financières importantes — et juridiques en cas de contestation après la vente.
                  </p>
                </div>

                {/* Calcul */}
                <div id="calcule" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Comment est calculée la surface Carrez ?</h2>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/diagnostic-immobilier-loi-carrez.jpg" alt="Mesurage superficie privative Loi Carrez" width={868} height={488} className="w-full object-cover max-h-112"/>
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    La surface privative Carrez est la superficie des planchers des locaux clos et couverts après déduction des surfaces occupées par certains éléments. Seules les surfaces avec une <strong className="text-black">hauteur sous plafond supérieure ou égale à 1,80 mètre</strong> sont comptabilisées.
                  </p>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Les éléments suivants sont <strong className="text-black">exclus du calcul</strong> :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {exclusions.map(({ icon, label }) => (
                      <div key={label} className="flex items-start gap-3 bg-[#f8f8f8] rounded-xl p-4">
                        <span className="text-xl shrink-0">{icon}</span>
                        <p className="text-sm text-mygray leading-relaxed">{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-black mb-1">Le risque d'une erreur de mesure</p>
                      <p className="text-sm text-mygray leading-relaxed">
                        Si la superficie mentionnée dans l'acte de vente est supérieure de plus de <strong className="text-black">5 %</strong> à la surface réelle mesurée, l'acquéreur peut intenter une action en diminution du prix dans l'année qui suit la signature. À Paris, avec des prix au m² souvent supérieurs à 9 000 €, une erreur de 2 m² peut représenter plus de 18 000 € de litige.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quand */}
                <div id="quand" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Quand réaliser ce mesurage ?</h2>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/diagnostic-immobilier-loi-carrez-paris.jpg" alt="Mesurage superficie privative Loi Carrez" width={868} height={288} className="w-full object-cover max-h-112"/>
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le mesurage Loi Carrez doit être réalisé <strong className="text-black">avant la signature du compromis de vente</strong>. Il est intégré au Dossier de Diagnostic Technique (DDT) et doit être annexé à la promesse de vente ainsi qu'à l'acte authentique.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Contrairement à d'autres diagnostics, le mesurage Loi Carrez n'a <strong className="text-black">pas de durée de validité légale</strong> — il reste valable indéfiniment sauf en cas de modifications de la surface du bien (travaux, réaménagement, suppression de cloisons). En pratique, il est toutefois recommandé de le renouveler si le dernier mesurage date de plus de 5 ans ou si des travaux ont été réalisés.
                  </p>
                </div>

                {/* Pourquoi pro */}
                <div id="pourquoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Pourquoi faire appel à un professionnel ?</h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Techniquement, la loi n'impose pas de recourir à un diagnostiqueur certifié pour la Loi Carrez — un propriétaire peut théoriquement mesurer lui-même. Mais en pratique, <strong className="text-black">les erreurs d'auto-mesure sont fréquentes</strong> et souvent défavorables au vendeur.
                  </p>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Les pièges sont nombreux : oubli des niches, surfaces sous pente mal évaluées, déduction incorrecte des murs et cloisons, prise en compte erronée des baies vitrées. Un professionnel utilise un <strong className="text-black">télémètre laser</strong> et connaît précisément les règles de déduction, garantissant un résultat exact et incontestable.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { icon: Shield, title: 'Mesure certifiée', desc: 'Télémètre laser homologué, mesures précises au centimètre près, conformes à la réglementation.' },
                      { icon: FileCheck, title: 'Rapport officiel', desc: 'Document certifié avec plan annoté, intégrable directement dans votre DDT.' },
                      { icon: Clock, title: 'Livraison 24h', desc: 'Rapport transmis par email le lendemain de l\'intervention, pour ne pas ralentir votre projet.' },
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
                </div>

                {/* Comment */}
                <div id="comment" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Comment Meilleur Diag réalise ce mesurage ?</h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Notre diagnostiqueur se déplace à votre adresse avec son télémètre laser. Il mesure l'intégralité des pièces, déduit les éléments exclus par la loi, et calcule la surface privative nette avec une précision au centimètre carré. L'intervention dure généralement entre 45 minutes et 1h30 selon la superficie du bien.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Le rapport final inclut un plan annoté du logement avec les surfaces détaillées par pièce, la surface Carrez totale, et la décomposition des exclusions. Ce document est prêt à être remis au notaire et intégré dans votre dossier de vente.
                  </p>
                </div>

                {/* Refaire */}
                <div id="refaire" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Quand refaire un diagnostic Loi Carrez ?</h2>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/diagnostic-loi-carrez-france.jpg" alt="Mesurage superficie privative Loi Carrez en France" width={868} height={288} className="w-full object-cover max-h-112"/>
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Même si votre précédent mesurage est techniquement valable, il est fortement conseillé d'en commander un nouveau dans plusieurs situations :
                  </p>
                  <div className="space-y-3">
                    {[
                      'Travaux réalisés dans le logement (suppression ou ajout de cloisons, agrandissement, aménagement de combles)',
                      'Mesurage initial réalisé par le propriétaire lui-même, sans garantie professionnelle',
                      'Dernier mesurage trop ancien (plus de 5 ans) ou réalisé avec des outils peu précis',
                      'Doute sur la surface mentionnée dans les anciens documents de propriété',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-[#f8f8f8] rounded-xl p-4">
                        <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary shrink-0 mt-0.5">{i + 1}</span>
                        <p className="text-sm text-mygray leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion */}
                <div id="conclusion" className="mb-6">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Conclusion</h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le mesurage Loi Carrez protège à la fois le vendeur et l'acquéreur. Pour le vendeur, c'est la garantie de fixer un prix juste et de n'avoir aucun recours possible après la vente. Pour l'acheteur, c'est l'assurance d'acquérir exactement la surface pour laquelle il paie.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    En confiant ce mesurage à Meilleur Diag, vous bénéficiez d'un résultat précis, certifié, et remis rapidement. À Paris, où chaque mètre carré compte, ne laissez pas votre transaction reposer sur une estimation approximative.
                  </p>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-black p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, system-ui' }}>Besoin d'un mesurage Loi Carrez ?</h3>
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
                    { label: 'Concerne', value: 'Copropriété' },
                    { label: 'Validité', value: 'Illimitée*' },
                    { label: 'Obligatoire', value: 'Vente' },
                    { label: 'Rapport', value: 'Sous 24h' },
                    { label: 'Intervention', value: '7j/7' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-[#f0f0f0] last:border-0">
                      <span className="text-xs text-[#aaa] font-medium">{label}</span>
                      <span className="text-xs font-bold text-black">{value}</span>
                    </div>
                  ))}
                  <p className="text-[10px] text-[#bbb] mt-3 leading-relaxed">* Sauf en cas de travaux modifiant la surface</p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}