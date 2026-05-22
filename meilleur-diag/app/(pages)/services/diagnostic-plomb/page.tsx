import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertTriangle, Clock, Shield, FileCheck } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diagnostic Plomb Paris — CREP | Meilleur Diag',
  description:
    'Diagnostic plomb (CREP) à Paris et Île-de-France. Détection du plomb dans les peintures avant vente ou location pour tout bien construit avant 1949. Rapport certifié en 24h.',
  keywords:
    'diagnostic plomb Paris, CREP Paris, constat risque exposition plomb, diagnostic plomb obligatoire, saturnisme prévention, diagnostic plomb vente Paris, diagnostic plomb location Paris, diagnostiqueur plomb certifié',
  alternates: { canonical: 'https://meilleur-diag.com/services/diagnostic-plomb' },
  openGraph: {
    title: 'Diagnostic Plomb Paris — CREP | Meilleur Diag',
    description: 'CREP certifié à Paris & Île-de-France. Détection plomb dans les peintures, rapport conforme DDT en 24h.',
    url: 'https://meilleur-diag.com/services/diagnostic-plomb',
    type: 'article',
    locale: 'fr_FR',
    images: [{ url: '/images/services/diagnostic-plomb.jpg', alt: 'Diagnostic Plomb Paris' }],
  },
}

const toc = [
  { id: 'pourquoi', label: 'Pourquoi faire un diagnostic plomb ?' },
  { id: 'saturnisme', label: 'Le saturnisme : un danger invisible' },
  { id: 'quand', label: 'Quand faut-il réaliser ce diagnostic ?' },
  { id: 'comment', label: 'Comment Meilleur Diag réalise le CREP ?' },
  { id: 'rapport', label: 'Que contient le rapport ?' },
  { id: 'transaction', label: 'Impact sur les transactions immobilières' },
  { id: 'conclusion', label: 'Conclusion' },
]

const zonesInspectees = [
  { icon: '🚪', label: 'Portes, fenêtres, volets et leurs encadrements peints' },
  { icon: '🪟', label: 'Plinthes, moulures, boiseries et éléments décoratifs peints' },
  { icon: '🏠', label: 'Murs, plafonds et cloisons des pièces principales et annexes' },
  { icon: '🛁', label: 'Salles de bain, cuisines et pièces humides — zones à risque élevé' },
  { icon: '🏚️', label: 'Caves, garages, combles et espaces de service accessibles' },
  { icon: '🔧', label: 'Radiateurs, canalisations et tout support métallique peint' },
]

export default function DiagnosticPlombPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Diagnostic Plomb (CREP) Paris',
            description: 'Constat de Risque d\'Exposition au Plomb pour tout bien construit avant 1949. Obligatoire pour vente et location.',
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
          title="Diagnostic Plomb (CREP) à Paris"
          subtitle="Le Constat de Risque d'Exposition au Plomb protège les occupants des dangers du saturnisme. Obligatoire pour tout bien construit avant 1949."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Nos Services', href: '/services' },
            { label: 'Diagnostic Plomb' },
          ]}
        />

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="w-full rounded-2xl overflow-hidden mb-10 bg-[#f8f8f8] aspect-auto">
              <Image src="/images/services/diagnostic-plomb-paris.jpg"
                alt="Diagnostic plomb Paris — CREP" width={1216} height={395} className="object-cover"/>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
              <article>

                {/* Pourquoi */}
                <div id="pourquoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Pourquoi faire un diagnostic plomb ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le plomb a été massivement utilisé dans les peintures de bâtiments jusqu'à son interdiction en 1948. Dans les logements anciens, ces peintures se dégradent avec le temps et libèrent des <strong className="text-black">poussières et écailles de plomb</strong> qui peuvent être ingérées ou inhalées par les occupants — en particulier les jeunes enfants qui portent les mains à la bouche.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Le Constat de Risque d'Exposition au Plomb (CREP) est le diagnostic qui permet de détecter la présence de plomb dans les peintures et d'évaluer leur état de conservation. C'est un document obligatoire pour toute vente ou location d'un bien construit avant le <strong className="text-black">1er janvier 1949</strong>.
                  </p>
                </div>

                {/* Saturnisme */}
                <div id="saturnisme" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Le saturnisme : un danger invisible
                  </h2>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/diagnostic-immobilier-plomb.jpg" alt="Détection plomb dans les peintures"
                      width={868} height={288} className="w-full object-cover max-h-72" draggable={false}/>
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le saturnisme est une intoxication au plomb qui se manifeste de façon progressive et souvent silencieuse. Les enfants de moins de 6 ans sont les premières victimes, car leur organisme en développement absorbe le plomb jusqu'à cinq fois plus efficacement que celui d'un adulte.
                  </p>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Les conséquences peuvent être <strong className="text-black">irréversibles</strong> : retards de développement intellectuel, troubles du comportement, anémie, atteintes rénales et neurologiques. Chez la femme enceinte, une exposition au plomb augmente les risques de fausse couche et peut affecter le développement du fœtus.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex gap-4">
                    <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-black mb-1">Population à risque prioritaire</p>
                      <p className="text-sm text-mygray leading-relaxed">
                        Jeunes enfants, femmes enceintes et personnes vivant dans des logements anciens dégradés sont les plus exposés. En France, environ <strong className="text-black">85 000 enfants</strong> présentent une imprégnation au plomb supérieure au seuil d'alerte. Le diagnostic plomb est leur première protection.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quand */}
                <div id="quand" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Quand faut-il réaliser ce diagnostic ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Le CREP est obligatoire pour tout bien immobilier dont le permis de construire a été délivré avant le 1er janvier 1949, dans trois situations :
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      {
                        label: 'Vente',
                        validite: '1 an (si plomb détecté) — Illimitée (si négatif)',
                        desc: 'Doit être annexé à la promesse de vente et à l\'acte authentique. Un CREP positif n\'empêche pas la vente mais informe l\'acheteur.',
                      },
                      {
                        label: 'Location',
                        validite: '6 ans (si plomb détecté) — Illimitée (si négatif)',
                        desc: 'Doit être joint au contrat de bail dès la première mise en location. Le bailleur est responsable de la mise en sécurité si des peintures dégradées contenant du plomb sont constatées.',
                      },
                      {
                        label: 'Travaux',
                        validite: 'Spécifique chantier',
                        desc: 'Avant tout chantier de rénovation sur un bâtiment construit avant 1949, pour protéger les artisans et travailleurs du bâtiment d\'une exposition accidentelle.',
                      },
                    ].map(({ label, validite, desc }) => (
                      <div key={label} className="bg-[#f8f8f8] rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg- text-black">{label}</span>
                          <span className="text-xs text-mygray font-medium">Validité : {validite}</span>
                        </div>
                        <p className="text-sm text-mygray leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-mygray leading-relaxed">
                        <strong className="text-black">Bon à savoir :</strong> si le CREP conclut à l'absence de plomb au-dessus du seuil réglementaire (1 mg/cm²), il reste valable <strong className="text-black">sans limite de durée</strong>. Pas besoin de le renouveler à chaque nouvelle transaction.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <div id="comment" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Comment Meilleur Diag réalise le CREP ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Nos diagnostiqueurs certifiés utilisent un <strong className="text-black">appareil à fluorescence X (XRF)</strong>, une technologie non destructive qui mesure instantanément la concentration en plomb dans les peintures sans avoir à prélever d'échantillon ni à percer les murs. Pour un appartement T3 standard, plus de <strong className="text-black">120 mesures</strong> sont effectuées sur l'ensemble des revêtements peints accessibles.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: Shield, title: 'Technologie XRF', desc: 'Fluorescence X — mesure non destructive, précise, sans prélèvement ni dégât sur les revêtements.' },
                      { icon: FileCheck, title: '120+ mesures', desc: 'Inspection exhaustive de toutes les surfaces peintes accessibles — portes, fenêtres, murs, plafonds.' },
                      { icon: Clock, title: 'Rapport en 24h', desc: 'CREP certifié conforme au DDT, transmis par email le lendemain de l\'intervention.' },
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
                    Les zones inspectées couvrent l'intégralité du bien, de la cave aux combles :
                  </p>
                </div>

                {/* Zones */}
                <div className="grid sm:grid-cols-2 gap-3 mb-12">
                  {zonesInspectees.map(({ icon, label }) => (
                    <div key={label} className="flex items-start gap-3 bg-[#f8f8f8] rounded-xl p-4">
                      <span className="text-xl shrink-0">{icon}</span>
                      <p className="text-sm text-mygray leading-relaxed">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Rapport */}
                <div id="rapport" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Que contient le rapport CREP ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le rapport CREP remis par Meilleur Diag est un document officiel qui recense toutes les mesures effectuées. Pour chaque zone inspectée, il précise :
                  </p>
                  <div className="space-y-3">
                    {[
                      { num: '01', title: 'Résultats des mesures', desc: 'Concentration en plomb (mg/cm²) pour chaque élément inspecté, avec comparaison au seuil réglementaire de 1 mg/cm².' },
                      { num: '02', title: 'État de conservation', desc: 'Évaluation de l\'état de conservation des peintures contenant du plomb : bon état, dégradé ou très dégradé. Seules les peintures dégradées représentent un risque immédiat.' },
                      { num: '03', title: 'Facteurs de risque', desc: 'Identification des situations aggravantes : présence de jeunes enfants, peintures écaillées accessibles, travaux prévus.' },
                      { num: '04', title: 'Recommandations', desc: 'Préconisations de travaux si nécessaire : confinement, recouvrement ou élimination des peintures concernées par des entreprises spécialisées.' },
                    ].map(({ num, title, desc }) => (
                      <div key={num} className="flex gap-5 bg-[#f8f8f8] rounded-2xl p-5">
                        <span className="text-2xl font-bold text-black/10 shrink-0 leading-none" style={{ fontFamily: 'Syne, system-ui' }}>{num}</span>
                        <div>
                          <h3 className="font-bold text-sm text-black mb-1" style={{ fontFamily: 'Syne, system-ui' }}>{title}</h3>
                          <p className="text-sm text-mygray leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transaction */}
                <div id="transaction" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Impact sur les transactions immobilières
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    La présence de plomb dans les peintures <strong className="text-black">n'interdit pas la vente ni la location</strong>. En revanche, le vendeur ou le bailleur doit en informer l'acheteur ou le locataire via le CREP. Si les peintures contenant du plomb sont en bon état de conservation, aucun travaux n'est exigé avant la transaction.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    En revanche, si des peintures dégradées contenant du plomb sont constatées dans un logement en location, le bailleur est tenu de <strong className="text-black">réaliser des travaux de mise en sécurité</strong> dans un délai imposé par la préfecture. L'absence de CREP lors d'une vente engage la responsabilité du vendeur pour vice caché.
                  </p>
                </div>

                {/* Conclusion */}
                <div id="conclusion" className="mb-6">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Conclusion
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le diagnostic plomb (CREP) est bien plus qu'une formalité légale. À Paris, où une grande partie du parc immobilier date d'avant 1949 — immeubles haussmanniens, maisons de ville, appartements anciens — il concerne des centaines de milliers de logements. C'est une mesure de protection réelle pour les familles et les professionnels du bâtiment.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    En confiant votre CREP à Meilleur Diag, vous bénéficiez d'une détection précise grâce à la fluorescence X, d'un rapport complet conforme au DDT, et d'une intervention rapide sur toute l'Île-de-France.
                  </p>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-black p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, system-ui' }}>Besoin d'un diagnostic plomb (CREP) ?</h3>
                    <p className="text-white/50 text-sm">Intervention 7j/7 — Rapport en 24h — Devis gratuit</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <Link href="/devis" className="btn-primary px-5 py-3 rounded-xl text-sm">Devis gratuit <ArrowRight size={15} /></Link>
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
                  <Link href="/devis" className="btn-primary w-full justify-center rounded-xl py-3 text-sm mb-3">Devis gratuit en ligne <ArrowRight size={14} /></Link>
                  <a href="tel:+33782326451" className="flex items-center justify-center gap-2 w-full border border-white/10 text-white/70 hover:text-white text-sm font-medium py-3 rounded-xl hover:bg-white/5 transition-colors">
                    <Phone size={14} /> 07 82 32 64 51
                  </a>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-[#ebebeb]">
                  <h3 className="font-bold text-sm text-black uppercase tracking-wide mb-4" style={{ fontFamily: 'Syne, system-ui' }}>En résumé</h3>
                  {[
                    { label: 'Concerne', value: 'Avant 1949' },
                    { label: 'Validité vente', value: '1 an / illimitée*' },
                    { label: 'Validité location', value: '6 ans / illimitée*' },
                    { label: 'Rapport', value: 'Sous 24h' },
                    { label: 'Intervention', value: '7j/7' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-[#f0f0f0] last:border-0">
                      <span className="text-xs text-[#aaa] font-medium">{label}</span>
                      <span className="text-xs font-bold text-black">{value}</span>
                    </div>
                  ))}
                  <p className="text-[10px] text-[#bbb] mt-3 leading-relaxed">* Illimitée si aucun plomb détecté au-dessus du seuil</p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}