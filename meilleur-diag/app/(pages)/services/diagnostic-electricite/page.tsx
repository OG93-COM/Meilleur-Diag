import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertTriangle, Clock, Shield, FileCheck } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diagnostic Électrique Paris | Meilleur Diag',
  description:
    'Diagnostic électrique obligatoire à Paris et Île-de-France. Contrôle de sécurité des installations de plus de 15 ans avant vente ou location. Rapport certifié en 24h.',
  keywords:
    'diagnostic électrique Paris, diagnostic électricité obligatoire, installation électrique vente, diagnostiqueur électrique Paris, diagnostic électrique location, état installation intérieure électricité',
  alternates: { canonical: 'https://meilleur-diag.com/services/diagnostic-electricite' },
  openGraph: {
    title: 'Diagnostic Électrique Paris | Meilleur Diag',
    description: 'Diagnostic électrique certifié à Paris & Île-de-France. Sécurité des installations, rapport DDT conforme en 24h.',
    url: 'https://meilleur-diag.com/services/diagnostic-electricite',
    type: 'article',
    locale: 'fr_FR',
    images: [{ url: '/images/services/diagnostic-electrique.jpg', alt: 'Diagnostic Électrique Paris' }],
  },
}

const toc = [
  { id: 'quoi', label: 'Qu\'est-ce que le diagnostic électrique ?' },
  { id: 'obligatoire', label: 'Est-il obligatoire ?' },
  { id: 'pourquoi', label: 'Pourquoi le faire réaliser ?' },
  { id: 'comment', label: 'Comment Meilleur Diag réalise votre diagnostic ?' },
  { id: 'anomalies', label: 'Quelles anomalies sont recherchées ?' },
  { id: 'choisir', label: 'Pourquoi choisir Meilleur Diag ?' },
  { id: 'conclusion', label: 'Conclusion' },
]

const anomalies = [
  { icon: '⚡', label: 'Absence de dispositif de protection différentielle 30 mA en tête d\'installation' },
  { icon: '🔌', label: 'Prises de terre absentes ou défectueuses sur les circuits sensibles (cuisine, salle de bain)' },
  { icon: '🧱', label: 'Conducteurs non protégés mécaniquement ou dénudés accessibles' },
  { icon: '🔴', label: 'Tableau électrique vétuste sans disjoncteurs différentiels ni coupe-circuit' },
  { icon: '💡', label: 'Installations dans les volumes de sécurité des pièces d\'eau non conformes' },
  { icon: '🔧', label: 'Matériels électriques présentant des risques de contact direct (prises cassées, fils à nu)' },
]

export default function DiagnosticElectricitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Diagnostic Électrique Paris',
            description: 'Diagnostic électrique obligatoire pour toute vente ou location d\'un bien avec installation de plus de 15 ans.',
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
          title="Diagnostic Électrique à Paris"
          subtitle="Contrôle de sécurité de votre installation électrique obligatoire pour toute vente ou location d'un bien dont l'installation a plus de 15 ans."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Nos Services', href: '/services' },
            { label: 'Diagnostic Électrique' },
          ]}
        />

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="w-full rounded-lg shadow-lg overflow-hidden mb-10 bg-[#f8f8f8] aspect-16/7">
              <Image src="/images/services/diagnostic-electrique.jpg" alt="Diagnostic électrique Paris"
                width={1216} height={395} className="object-cover" draggable={false}/>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
              <article>

                {/* Quoi */}
                <div id="quoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Qu'est-ce que le diagnostic électrique ?
                  </h2>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/diagnostic-immobilier-electrique.jpg" alt="Inspection installation électrique"
                      width={868} height={288} className="w-full object-cover max-h-72" draggable={false}/>
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le diagnostic électrique — officiellement appelé <strong className="text-black">état de l'installation intérieure d'électricité</strong> — est une évaluation technique qui permet d'identifier les défauts et anomalies susceptibles de compromettre la sécurité des occupants. Il couvre l'ensemble de l'installation électrique depuis le compteur jusqu'aux prises et interrupteurs.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Attention : ce diagnostic ne vise pas à certifier la conformité de l'installation aux normes actuelles (NFC 15-100), mais à repérer les anomalies représentant un <strong className="text-black">risque avéré pour la sécurité</strong> — risque d'électrocution, de court-circuit ou d'incendie. Les anomalies détectées sont classées selon leur niveau de gravité.
                  </p>
                </div>

                {/* Obligatoire */}
                <div id="obligatoire" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Le diagnostic électrique est-il obligatoire ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Oui, il est obligatoire dans deux situations :
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Vente', desc: 'Pour tout bien dont l\'installation électrique a été réalisée il y a plus de 15 ans. Le diagnostic est valable 3 ans et doit être intégré au DDT remis à l\'acheteur.' },
                      { label: 'Location', desc: 'Obligatoire depuis le 1er juillet 2017 pour les logements dont l\'installation a plus de 15 ans. La durée de validité est de 6 ans pour une location.' },
                    ].map(({ label, desc }) => (
                      <div key={label} className="flex gap-4 bg-[#f8f8f8] rounded-2xl p-5">
                        <span className="inline-flex items-center justify-center w-16 h-7 rounded-full text-xs font-bold shrink-0 mt-0.5 bg-primary text-black">{label}</span>
                        <p className="text-sm text-mygray leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-black mb-1">À retenir</p>
                      <p className="text-sm text-mygray leading-relaxed">
                        En l'absence de diagnostic électrique lors d'une vente ou d'une mise en location, la responsabilité du propriétaire peut être engagée en cas d'accident électrique. Le locataire ou l'acquéreur peut également exiger une réduction du loyer ou du prix de vente.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pourquoi */}
                <div id="pourquoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Pourquoi le faire réaliser ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    En France, les installations électriques défectueuses sont à l'origine de <strong className="text-black">plus de 80 000 incendies domestiques par an</strong>, soit un tiers des incendies résidentiels. Une installation vieillissante peut présenter des risques invisibles à l'œil nu : fils endommagés, prises surchargées, tableau électrique obsolète.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Pour un vendeur, fournir un diagnostic électrique récent valorise le bien et rassure l'acquéreur. Pour un bailleur, c'est une protection juridique en cas d'incident. Pour un acheteur, c'est une information précieuse pour négocier et anticiper d'éventuels travaux de mise en sécurité.
                  </p>
                </div>

                {/* Comment */}
                <div id="comment" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Comment Meilleur Diag réalise votre diagnostic ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Nos diagnostiqueurs certifiés effectuent une évaluation complète selon la norme XP C16-600. L'inspection couvre plus de <strong className="text-black">87 points de contrôle</strong> définis réglementairement :
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: Shield, title: 'Contrôles visuels', desc: 'État du tableau, des câbles, prises, interrupteurs et dispositifs de protection.' },
                      { icon: FileCheck, title: 'Tests et mesures', desc: 'Vérification du fonctionnement des dispositifs différentiels, continuité des terres.' },
                      { icon: Clock, title: 'Rapport sous 24h', desc: 'Rapport détaillant toutes les anomalies classées par niveau de gravité (1, 2 ou 3).' },
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

                {/* Anomalies */}
                <div id="anomalies" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Quelles anomalies sont recherchées ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Parmi les anomalies les plus fréquemment constatées dans le parc immobilier parisien ancien :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {anomalies.map(({ icon, label }) => (
                      <div key={label} className="flex items-start gap-3 bg-[#f8f8f8] rounded-xl p-4">
                        <span className="text-xl shrink-0">{icon}</span>
                        <p className="text-sm text-mygray leading-relaxed">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pourquoi choisir */}
                <div id="choisir" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Pourquoi choisir Meilleur Diag ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Nos diagnostiqueurs électricité sont certifiés par des organismes accrédités COFRAC et se forment régulièrement aux évolutions réglementaires. Ils interviennent avec leur propre matériel de mesure homologué pour des résultats précis et incontestables.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Nous intervenons sur l'ensemble de Paris et de l'Île-de-France, 7 jours sur 7, avec des créneaux flexibles pour s'adapter à votre agenda. Le rapport vous est transmis par email dans les 24 heures, avec une explication claire des anomalies détectées et des recommandations pratiques.
                  </p>
                </div>

                {/* Conclusion */}
                <div id="conclusion" className="mb-6">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Conclusion
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le diagnostic électrique est un gage de sécurité pour les futurs occupants et une protection juridique pour le propriétaire. À Paris, où le parc immobilier est souvent ancien, c'est un document incontournable que ce soit pour vendre ou mettre en location.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Faites confiance à Meilleur Diag pour un diagnostic électrique précis, remis rapidement, et conforme aux exigences réglementaires.
                  </p>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-black p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, system-ui' }}>Besoin d'un diagnostic électrique ?</h3>
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
                    { label: 'Concerne', value: '+15 ans' },
                    { label: 'Validité vente', value: '3 ans' },
                    { label: 'Validité location', value: '6 ans' },
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