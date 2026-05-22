import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertTriangle, Clock, Shield, FileCheck } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diagnostic Assainissement Paris | Meilleur Diag',
  description:
    'Diagnostic assainissement à Paris et Île-de-France. Contrôle de conformité des installations d\'évacuation avant vente. Diagnostiqueurs certifiés — rapport en 24h.',
  keywords:
    'diagnostic assainissement Paris, diagnostic assainissement obligatoire, assainissement non collectif, conformité assainissement vente, diagnostiqueur assainissement Paris',
  alternates: { canonical: 'https://meilleur-diag.com/services/diagnostic-assainissement' },
  openGraph: {
    title: 'Diagnostic Assainissement Paris | Meilleur Diag',
    description: 'Diagnostic assainissement certifié à Paris & Île-de-France. Conformité des installations, rapport conforme DDT en 24h.',
    url: 'https://meilleur-diag.com/services/diagnostic-assainissement',
    type: 'article',
    locale: 'fr_FR',
    images: [{ url: '/images/services/diagnostic-assainissement.jpg', alt: 'Diagnostic Assainissement Paris' }],
  },
}

const toc = [
  { id: 'pourquoi', label: 'Pourquoi réaliser un diagnostic assainissement ?' },
  { id: 'types', label: 'Assainissement collectif ou individuel ?' },
  { id: 'comment', label: 'Comment Meilleur Diag réalise ce diagnostic ?' },
  { id: 'rapport', label: 'Que contient le rapport ?' },
  { id: 'obligatoire', label: 'Est-il obligatoire ?' },
  { id: 'conclusion', label: 'Conclusion' },
]

const rapportItems = [
  { icon: '🏠', label: 'Identification précise du bien et de ses annexes (caves, garages, dépendances)' },
  { icon: '📋', label: 'Conclusions claires sur la conformité ou non-conformité du système' },
  { icon: '📐', label: 'Schéma explicatif du réseau d\'assainissement inspecté' },
  { icon: '🔍', label: 'Rapport détaillé des points de contrôle et anomalies constatées' },
  { icon: '💧', label: 'Type d\'assainissement (collectif ou individuel) et ses caractéristiques' },
  { icon: '🌍', label: 'Caractéristiques du bien et de son environnement (sol, nappe phréatique…)' },
]

export default function DiagnosticAssainissementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Diagnostic Assainissement Paris',
            description: 'Diagnostic assainissement réalisé par des experts certifiés à Paris et Île-de-France. Conformité des systèmes d\'évacuation des eaux usées.',
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
          title="Diagnostic Assainissement à Paris"
          subtitle="Vérifiez la conformité de votre système d'évacuation des eaux usées avant toute transaction immobilière. Rapport certifié livré en 24h."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Nos Services', href: '/services' },
            { label: 'Diagnostic Assainissement' },
          ]}
        />

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="w-full rounded-lg overflow-hidden mb-10 bg-[#f8f8f8] aspect-auto">
              <Image src="/images/services/diagnostic-assainissement-paris.jpg" alt="Diagnostic assainissement Paris" width={1216} height={395} className="object-cover" draggable={false}/>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
              <article>

                {/* Pourquoi */}
                <div id="pourquoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Pourquoi réaliser un diagnostic assainissement ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le diagnostic assainissement évalue l'état et la conformité du système d'évacuation des eaux usées de votre bien — depuis l'arrivée d'eau jusqu'au raccordement au réseau communal ou à l'installation individuelle (fosse septique, micro-station). Lors d'une vente, la loi impose d'informer l'acheteur sur le type de système en place et son état de fonctionnement.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Un système défaillant peut entraîner des risques sanitaires sérieux — contamination des eaux souterraines, nuisances olfactives, pollution du sol — ainsi que des frais de mise aux normes conséquents pour le futur acquéreur. Identifier ces problèmes en amont permet de sécuriser la transaction et d'éviter tout litige après la vente.
                  </p>
                </div>

                {/* Types */}
                <div id="types" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Assainissement collectif ou non collectif ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Il existe deux grandes catégories de systèmes d'assainissement, avec des obligations différentes selon le type :
                  </p>
                  <div className="rounded-2xl overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image  src="/images/services/diagnostic-assainissement.jpg" alt="Système d'assainissement inspecté"
                      width={868} height={288} className="w-full object-cover max-h-72" draggable={false}/>
                  </div>

                  <div className="space-y-4 mb-6">
                    {[
                      {
                        num: '01',
                        title: 'Assainissement collectif (tout-à-l\'égout)',
                        desc: 'Le bien est raccordé au réseau public d\'assainissement de la commune. Le diagnostic vérifie la conformité du raccordement aux parties privatives — canalisations, regards, branchement au réseau public. Dans les zones desservies par le tout-à-l\'égout, le raccordement est obligatoire dans un délai de 2 ans suivant la mise en service du réseau.',
                      },
                      {
                        num: '02',
                        title: 'Assainissement non collectif (ANC)',
                        desc: 'Le bien dispose de son propre système de traitement — fosse septique, fosse toutes-eaux, micro-station d\'épuration, filtre à sable. Ce système est contrôlé par le Service Public d\'Assainissement Non Collectif (SPANC) de la commune. Le diagnostic ANC est obligatoire lors de la vente ; en cas de non-conformité, l\'acquéreur doit réaliser les travaux dans l\'année suivant la transaction.',
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

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-black mb-1">Important</p>
                      <p className="text-sm text-mygray leading-relaxed">
                        Pour les maisons individuelles avec assainissement non collectif, le rapport SPANC doit dater de moins de 3 ans au moment de la vente. Sans ce document, la transaction peut être bloquée chez le notaire.
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
                    Notre intervention se déroule en trois étapes structurées pour garantir un diagnostic complet et fiable :
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {[
                      {
                        icon: FileCheck,
                        title: 'Collecte préliminaire',
                        desc: 'Analyse des documents fournis par le propriétaire : plans, attestations de raccordement, factures de vidange, rapports SPANC existants.',
                      },
                      {
                        icon: Shield,
                        title: 'Inspection sur site',
                        desc: 'Examen visuel et technique de tous les éléments accessibles : regards, canalisations, systèmes de prétraitement, raccordement au réseau.',
                      },
                      {
                        icon: Clock,
                        title: 'Rapport en 24h',
                        desc: 'Rapport détaillé avec conclusions, schéma explicatif et recommandations en cas de non-conformité. Transmis par email sous 24h.',
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
                    Lors de l'inspection sur site, le diagnostiqueur examine l'ensemble du système d'assainissement accessible, <strong className="text-black">sans causer de détérioration</strong>. Si un système de prétraitement (fosse septique, bac dégraisseur) est présent, il est également évalué. L'état du raccordement au réseau public est vérifié dans la mesure du possible.
                  </p>
                </div>

                {/* Rapport */}
                <div id="rapport" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Que contient le rapport de diagnostic ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Le rapport remis par Meilleur Diag est un document officiel complet, conforme aux exigences légales du DDT. Il comprend :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {rapportItems.map(({ icon, label }) => (
                      <div key={label} className="flex items-start gap-3 bg-[#f8f8f8] rounded-xl p-4">
                        <span className="text-xl shrink-0">{icon}</span>
                        <p className="text-sm text-mygray leading-relaxed">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Obligatoire */}
                <div id="obligatoire" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Le diagnostic assainissement est-il obligatoire ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Oui, pour toute vente d'immeuble à usage d'habitation non raccordé au réseau public de collecte des eaux usées (assainissement non collectif). Le contrôle SPANC doit être joint au DDT remis à l'acheteur. Pour les biens en assainissement collectif, une attestation de conformité du branchement peut être demandée selon les communes.
                  </p>
                  <div className="rounded-2xl overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image  src="/images/services/diagnostic-immobilier-assainissement-paris.jpg" alt="Système d'assainissement inspecté"
                      width={868} height={288} className="w-full object-cover max-h-72" draggable={false}/>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-mygray leading-relaxed">
                        <strong className="text-black">Bon à savoir :</strong> en cas de non-conformité de l'assainissement non collectif, l'acquéreur dispose d'<strong className="text-black">un an</strong> après la vente pour effectuer les travaux de mise aux normes. Cette information doit être clairement mentionnée dans l'acte de vente. Des aides financières (éco-prêt à taux zéro, subventions ANAH) peuvent couvrir une partie des travaux.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div id="conclusion" className="mb-6">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Conclusion
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le diagnostic assainissement n'est pas qu'une obligation légale — c'est une démarche de <strong className="text-black">santé publique et de protection de l'environnement</strong>. Un système d'évacuation défaillant peut contaminer les nappes phréatiques, polluer les cours d'eau et représenter un risque sanitaire réel pour les occupants et le voisinage.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    En confiant votre diagnostic assainissement à Meilleur Diag, vous bénéficiez d'une inspection rigoureuse, d'un rapport conforme et d'un accompagnement dans la compréhension des résultats. Notre objectif : vous permettre de vendre ou d'acheter en toute transparence, sans mauvaise surprise.
                  </p>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-black p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, system-ui' }}>Besoin d'un diagnostic assainissement ?</h3>
                    <p className="text-white/50 text-sm">Intervention 7j/7 — Rapport en 24h — Devis gratuit</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <Link href="/devis-diagnostic-immobilier" className="btn-primary px-5 py-3 rounded-xl text-sm">
                      Devis gratuit <ArrowRight size={15} />
                    </Link>
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
                  <Link href="/devis-diagnostic-immobilier" className="btn-primary w-full justify-center rounded-xl py-3 text-sm mb-3">
                    Devis gratuit en ligne <ArrowRight size={14} />
                  </Link>
                  <a href="tel:+33782326451" className="flex items-center justify-center gap-2 w-full border border-white/10 text-white/70 hover:text-white text-sm font-medium py-3 rounded-xl hover:bg-white/5 transition-colors">
                    <Phone size={14} /> 07 82 32 64 51
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#ebebeb]">
                  <h3 className="font-bold text-sm text-black uppercase tracking-wide mb-4" style={{ fontFamily: 'Syne, system-ui' }}>En résumé</h3>
                  {[
                    { label: 'Concerne', value: 'ANC & collectif' },
                    { label: 'Validité ANC', value: '3 ans' },
                    { label: 'Obligatoire', value: 'Vente' },
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