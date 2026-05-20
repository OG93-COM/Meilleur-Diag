import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertTriangle, Clock, Shield, FileCheck } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diagnostic Amiante Paris | Meilleur Diag',
  description:
    'Diagnostic amiante à Paris et Île-de-France. Détection certifiée avant vente, location ou travaux pour tout bien construit avant 1997. Diagnostiqueurs certifiés — rapport en 24h.',
  keywords:
    'diagnostic amiante Paris, diagnostic amiante obligatoire, amiante immeuble, diagnostic amiante vente, diagnostiqueur amiante Paris, amiante maison Paris, DTA, DAPP, RAAT',
  alternates: { canonical: 'https://meilleur-diag.com/services/diagnostic-amiante' },
  openGraph: {
    title: 'Diagnostic Amiante Paris | Meilleur Diag',
    description:
      'Diagnostic amiante certifié à Paris & Île-de-France. Détection des matériaux amiantés, rapport conforme DDT en 24h.',
    url: 'https://meilleur-diag.com/services/diagnostic-amiante',
    type: 'article',
    locale: 'fr_FR',
    images: [{ url: '/images/services/diagnostic-amiante.jpg', alt: 'Diagnostic Amiante Paris' }],
  },
}

const toc = [
  { id: 'comprendre', label: 'Comprendre les risques de l\'amiante' },
  { id: 'pourquoi', label: 'Pourquoi faire un diagnostic amiante ?' },
  { id: 'comment', label: 'Comment Meilleur Diag réalise le diagnostic ?' },
  { id: 'types', label: 'Les différents diagnostics amiante' },
  { id: 'deroulement', label: 'Comment se déroule l\'inspection ?' },
  { id: 'obligatoire', label: 'Le diagnostic amiante est-il obligatoire ?' },
  { id: 'signes', label: 'Quels matériaux peuvent contenir de l\'amiante ?' },
  { id: 'conclusion', label: 'Conclusion' },
]

const materiaux = [
  { icon: '🏗️', label: 'Toitures et plaques ondulées en fibrociment (amiante-ciment)' },
  { icon: '🧱', label: 'Faux plafonds, dalles de sol en vinyle-amiante des années 70-90' },
  { icon: '🔧', label: 'Conduits de ventilation, gaines et canalisations isolées' },
  { icon: '🪣', label: 'Colles et enduits de jointoiement sous carrelage ou parquet' },
  { icon: '🏠', label: 'Peintures texturées et enduits de façade sur bâtiments anciens' },
  { icon: '🔌', label: 'Tableaux électriques et coffrets techniques dans les immeubles' },
]

export default function DiagnosticAmiantePage() {
  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Diagnostic Amiante Paris',
            description: 'Diagnostic amiante réalisé par des experts certifiés à Paris et Île-de-France.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Meilleur Diag',
              telephone: '+33782326451',
              address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
            },
            areaServed: 'Île-de-France',
            serviceType: 'Diagnostic Immobilier',
          }),
        }}
      />

      <main>
        <PageHeader
          title="Diagnostic Amiante à Paris"
          subtitle="Protégez votre bien et ses occupants contre les fibres d'amiante. Diagnostic certifié, rapport conforme au DDT, livré en moins de 24h."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Nos Services', href: '/services' },
            { label: 'Diagnostic Amiante' },
          ]}
        />

        {/* Main content */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="w-full h-full rounded-2xl overflow-hidden mb-10 bg-light">
              <Image
                src="/images/services/diagnostic-amiante.jpg"
                alt="Diagnostic immobilier amiante Paris"
                width={580}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

              {/* Article */}
              <article className="max-w-none">

                {/* Comprendre */}
                <div id="comprendre" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Comprendre les risques de l'amiante
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    L'amiante est un minéral fibreux autrefois largement utilisé dans la construction pour ses propriétés isolantes, ignifuges et mécaniques. Bien que son utilisation soit interdite en France depuis le <strong className="text-black">1er juillet 1997</strong>, il est encore présent dans de nombreux bâtiments construits avant cette date — habitations, bureaux, écoles, hôpitaux.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Le danger vient de ses fibres microscopiques : lorsqu'un matériau amianté est dégradé ou manipulé sans précaution, ces fibres se dispersent dans l'air et peuvent être inhalées. Une exposition, même ponctuelle, peut provoquer des pathologies graves des décennies plus tard : <strong className="text-black">mésothéliome, cancer bronchique, asbestose</strong>. L'amiante est la première cause de maladies professionnelles mortelles en France.
                  </p>
                </div>

                {/* Pourquoi */}
                <div id="pourquoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Pourquoi faire un diagnostic amiante ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Tout bien immobilier dont le <strong className="text-black">permis de construire a été délivré avant le 1er juillet 1997</strong> doit faire l'objet d'un diagnostic amiante avant sa vente, sa location ou la réalisation de travaux. Ce diagnostic permet de repérer précisément les matériaux susceptibles de contenir de l'amiante, d'évaluer leur état de conservation et de déterminer les mesures à prendre.
                  </p>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Les matériaux contenant de l'amiante sont classés selon une <strong className="text-black">grille de notation de 1 à 3</strong> : une note de 1 indique un bon état de conservation ne nécessitant qu'une surveillance périodique, tandis qu'une note de 3 impose des travaux de retrait ou de confinement dans un délai de trois ans maximum.
                  </p>

                  <div className="rounded-2xl overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image
                      src="/images/services/diagnostic-immobilier-amiante.jpg"
                      alt="Les matériaux amiantés et leur évaluation"
                      width={400}
                      height={200}
                      className="w-full object-cover max-h-72"
                    />
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-black mb-1">À savoir</p>
                      <p className="text-sm text-mygray leading-relaxed">
                        En l'absence de diagnostic amiante lors d'une vente, le vendeur engage sa responsabilité pour vice caché. L'acheteur peut exiger une réduction du prix ou l'annulation de la vente, en plus des éventuelles poursuites pénales.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <div id="comment" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Comment Meilleur Diag réalise ce diagnostic ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Nos diagnostiqueurs certifiés inspectent sans destruction l'ensemble des matériaux et produits susceptibles de contenir de l'amiante : cloisons, murs, planchers, plafonds, canalisations, gaines, toitures. En cas de doute sur un matériau, des <strong className="text-black">prélèvements sont effectués et analysés en laboratoire accrédité</strong>. Ils interviennent avec les Équipements de Protection Individuelle (EPI) requis, garantissant une sécurité totale pour eux-mêmes et pour les occupants.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {[
                      {
                        icon: Shield,
                        title: 'Inspection certifiée',
                        desc: 'Diagnostiqueurs certifiés et équipés d\'EPI pour une inspection sans risque et sans destruction.',
                      },
                      {
                        icon: FileCheck,
                        title: 'Rapport officiel',
                        desc: 'Document certifié conforme, intégré au Dossier de Diagnostic Technique (DDT).',
                      },
                      {
                        icon: Clock,
                        title: 'Livraison en 24h',
                        desc: 'Rapport transmis par email le lendemain de l\'intervention pour ne pas bloquer votre projet.',
                      },
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
                    À l'issue de l'inspection, un <strong className="text-black">rapport officiel</strong> vous est remis, indiquant la liste des matériaux inspectés, leur état de conservation, les risques identifiés et les recommandations (surveillance, travaux, confinement). Ce document fait partie intégrante du DDT annexé à l'acte de vente.
                  </p>
                </div>

                {/* Types */}
                <div id="types" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Les différents diagnostics amiante
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Selon la nature du bien et l'opération envisagée, le type de diagnostic amiante requis varie. Voici les quatre principaux :
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        num: '01',
                        title: 'Diagnostic amiante avant-vente',
                        desc: 'Obligatoire pour tout bien construit avant le 1er juillet 1997. Il doit être annexé à la promesse de vente et à l\'acte authentique. Sa durée de validité est illimitée si aucun matériau amianté n\'est détecté ; en cas de présence constatée, une mise à jour peut être exigée.',
                      },
                      {
                        num: '02',
                        title: 'Diagnostic amiante avant travaux (RAAT)',
                        desc: 'Le Repérage Amiante Avant Travaux est obligatoire pour tout chantier de rénovation ou démolition sur un bâtiment construit avant 1997. Il protège les artisans et ouvriers contre une exposition accidentelle aux fibres d\'amiante.',
                      },
                      {
                        num: '03',
                        title: 'Dossier Technique Amiante (DTA)',
                        desc: 'Obligatoire pour les immeubles à usage autre qu\'habitation (bureaux, commerces, établissements recevant du public). Ce dossier recense tous les matériaux amiantés et doit être tenu à jour. Il est communiqué aux entreprises intervenant dans le bâtiment.',
                      },
                      {
                        num: '04',
                        title: 'Dossier Amiante Parties Privatives (DAPP)',
                        desc: 'Obligatoire pour les parties privatives des immeubles collectifs d\'habitation. Tenu à jour par le propriétaire bailleur, il doit être communiqué aux occupants et mis à disposition des entreprises réalisant des travaux.',
                      },
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

                {/* Déroulement */}
                <div id="deroulement" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Comment se déroule l'inspection amiante ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    L'intervention d'un diagnostiqueur amiante se déroule en trois étapes principales. D'abord, une <strong className="text-black">visite visuelle complète</strong> du bien pour identifier tous les matériaux et produits susceptibles de contenir de l'amiante listés dans les annexes réglementaires (listes A, B et C). Ensuite, si nécessaire, des <strong className="text-black">prélèvements d'échantillons</strong> sont effectués avec précaution et envoyés dans un laboratoire accrédité COFRAC pour analyse. Enfin, le diagnostiqueur rédige son rapport et évalue chaque matériau selon les grilles réglementaires.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    La durée de l'inspection varie de 1 à 3 heures selon la superficie et la complexité du bien. Il n'est pas nécessaire que le logement soit vide, mais l'accès à tous les locaux — caves, combles, locaux techniques — est indispensable.
                  </p>
                </div>

                {/* Obligatoire */}
                <div id="obligatoire" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Le diagnostic amiante est-il obligatoire ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Oui, dès lors que le permis de construire du bien a été délivré <strong className="text-black">avant le 1er juillet 1997</strong>. Cette obligation concerne tous les types de biens : appartements, maisons individuelles, immeubles de bureaux, locaux commerciaux, entrepôts. En Île-de-France, compte tenu du parc immobilier ancien, la grande majorité des biens est concernée.
                  </p>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-mygray leading-relaxed">
                        <strong className="text-black">Bon à savoir :</strong> si le bien a déjà fait l'objet d'un diagnostic amiante avec résultat négatif (absence d'amiante), ce diagnostic reste valable sans limite de durée. En revanche, un diagnostic réalisé avant le 1er avril 2013 doit être renouvelé car la réglementation a évolué et les listes de matériaux à inspecter ont été élargies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Matériaux / Signes */}
                <div id="signes" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Quels matériaux peuvent contenir de l'amiante ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    L'amiante a été incorporé dans des centaines de produits de construction entre les années 1950 et 1997. Voici les matériaux les plus courants à surveiller dans un bien ancien :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {materiaux.map(({ icon, label }) => (
                      <div key={label} className="flex items-start gap-3 bg-[#f8f8f8] rounded-xl p-4">
                        <span className="text-xl shrink-0">{icon}</span>
                        <p className="text-sm text-mygray leading-relaxed">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion */}
                <div id="conclusion" className="mb-6">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Conclusion
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le diagnostic amiante est une obligation légale incontournable pour tout bien construit avant 1997, mais c'est avant tout une démarche de <strong className="text-black">protection sanitaire</strong> pour les occupants, les acheteurs et les professionnels du bâtiment. En confiant ce diagnostic à Meilleur Diag, vous bénéficiez de l'expertise de diagnostiqueurs certifiés, d'un rapport conforme aux exigences réglementaires, et d'une intervention rapide dans toute l'Île-de-France.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Ne prenez pas de risque avec la santé de vos proches ou la légalité de votre transaction — faites appel à nos experts pour un diagnostic précis, fiable et remis en 24h.
                  </p>
                </div>

                {/* CTA inline */}
                <div className="rounded-2xl bg-black p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, system-ui' }}>
                      Besoin d'un diagnostic amiante ?
                    </h3>
                    <p className="text-white/50 text-sm">Intervention 7j/7 — Rapport en 24h — Devis gratuit</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <Link href="/devis-diagnostic-immobilier" className="btn-primary px-5 py-3 rounded-xl text-sm">
                      Devis gratuit
                      <ArrowRight size={15} />
                    </Link>
                    <Link
                      href="tel:+33782326451"
                      className="inline-flex items-center gap-2 border border-white/15 text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-white/5 transition-colors"
                    >
                      <Phone size={15} />
                      07 82 32 64 51
                    </Link>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-28 space-y-4">

                {/* Table of contents */}
                <div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#ebebeb]">
                  <h3 className="font-bold text-sm text-black uppercase tracking-wide mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Sommaire
                  </h3>
                  <nav className="space-y-1">
                    {toc.map(({ id, label }) => (
                      <Link
                        key={id}
                        href={`#${id}`}
                        className="flex items-center gap-2 text-sm text-mygray hover:text-primary transition-colors py-1.5 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#ddd] group-hover:bg-primary transition-colors shrink-0" />
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Quick contact */}
                <div className="bg-black rounded-2xl p-6">
                  <h3 className="font-bold text-white text-sm mb-1" style={{ fontFamily: 'Syne, system-ui' }}>
                    Intervention rapide
                  </h3>
                  <p className="text-white/40 text-xs mb-5">Paris & Île-de-France — 7j/7</p>
                  <Link href="/devis-diagnostic-immobilier" className="btn-primary w-full justify-center rounded-xl py-3 text-sm mb-3">
                    Devis gratuit en ligne
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="tel:+33782326451"
                    className="flex items-center justify-center gap-2 w-full border border-white/10 text-white/70 hover:text-white text-sm font-medium py-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <Phone size={14} />
                    07 82 32 64 51
                  </Link>
                </div>

                {/* Key facts */}
                <div className="bg-white rounded-2xl p-6 border border-[#ebebeb]">
                  <h3 className="font-bold text-sm text-black uppercase tracking-wide mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    En résumé
                  </h3>
                  {[
                    { label: 'Concerne', value: 'Avant 1997' },
                    { label: 'Validité', value: 'Illimitée*' },
                    { label: 'Obligatoire', value: 'Vente & travaux' },
                    { label: 'Rapport', value: 'Sous 24h' },
                    { label: 'Intervention', value: '7j/7' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-[#f0f0f0] last:border-0">
                      <span className="text-xs text-[#aaa] font-medium">{label}</span>
                      <span className="text-xs font-bold text-black">{value}</span>
                    </div>
                  ))}
                  <p className="text-[10px] text-[#bbb] mt-3 leading-relaxed">* Si résultat négatif et réalisé après le 1er avril 2013</p>
                </div>

              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}