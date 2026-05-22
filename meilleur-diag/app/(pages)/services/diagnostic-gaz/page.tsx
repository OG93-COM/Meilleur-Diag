import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertTriangle, Clock, Shield, FileCheck } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diagnostic Gaz Paris | Meilleur Diag',
  description:
    'Diagnostic gaz obligatoire à Paris et Île-de-France. Contrôle de sécurité des installations gaz de plus de 15 ans avant vente ou location. Diagnostiqueurs certifiés — rapport en 24h.',
  keywords:
    'diagnostic gaz Paris, diagnostic gaz obligatoire, installation gaz vente, diagnostiqueur gaz Paris, état installation intérieure gaz, diagnostic gaz location, monoxyde carbone Paris',
  alternates: { canonical: 'https://meilleur-diag.com/services/diagnostic-gaz' },
  openGraph: {
    title: 'Diagnostic Gaz Paris | Meilleur Diag',
    description: 'Diagnostic gaz certifié à Paris & Île-de-France. Sécurité des installations, prévention risques intoxication CO, rapport DDT en 24h.',
    url: 'https://meilleur-diag.com/services/diagnostic-gaz',
    type: 'article',
    locale: 'fr_FR',
    images: [{ url: '/images/services/diagnostic-GAZ.jpg', alt: 'Diagnostic Gaz Paris' }],
  },
}

const toc = [
  { id: 'quoi', label: 'Qu\'est-ce que le diagnostic gaz ?' },
  { id: 'pourquoi', label: 'Pourquoi est-il important ?' },
  { id: 'risques', label: 'Les risques d\'une installation défectueuse' },
  { id: 'comment', label: 'Comment Meilleur Diag réalise ce diagnostic ?' },
  { id: 'points', label: 'Les points de contrôle' },
  { id: 'obligatoire', label: 'Est-il obligatoire ?' },
  { id: 'conclusion', label: 'Conclusion' },
]

const pointsControle = [
  { icon: '🔥', label: 'Chaudières, chauffe-bains et appareils de cuisson raccordés à l\'installation fixe' },
  { icon: '🔧', label: 'Raccordements en gaz, tuyauteries fixes et flexibles, robinets d\'arrêt' },
  { icon: '💨', label: 'Ventilation des locaux et évacuation des produits de combustion' },
  { icon: '🌡️', label: 'Stabilité des flammes et combustion des appareils alimentés en gaz' },
  { icon: '📋', label: 'État général de l\'installation et présence de dispositifs de sécurité' },
  { icon: '🚨', label: 'Détection des fuites potentielles et anomalies à risque immédiat' },
]

export default function DiagnosticGazPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Diagnostic Gaz Paris',
            description: 'Diagnostic gaz obligatoire pour installations de plus de 15 ans. Sécurité, prévention intoxication CO, rapport DDT conforme.',
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
          title="Diagnostic Gaz à Paris"
          subtitle="Vérifiez la sécurité de votre installation gaz avant toute transaction. Diagnostic certifié, 120+ points de contrôle, rapport livré en 24h."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Nos Services', href: '/services' },
            { label: 'Diagnostic Gaz' },
          ]}
        />

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="w-full rounded-2xl overflow-hidden mb-10 bg-[#f8f8f8] aspect-16/7">
              <Image src="/images/services/diagnostic-GAZ.jpg" alt="Diagnostic gaz Paris" width={1216} height={395} className="object-cover" draggable={false}/>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
              <article>

                {/* Quoi */}
                <div id="quoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Qu'est-ce que le diagnostic gaz ?</h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le diagnostic gaz — officiellement <strong className="text-black">état de l'installation intérieure de gaz</strong> — est un contrôle technique qui évalue la sécurité de l'ensemble de l'installation gaz d'un logement. Il couvre les équipements alimentés en gaz naturel ou en propane : chaudières, chauffe-bains, cuisinières, tuyauteries et raccordements.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Ce diagnostic est obligatoire dès lors que l'installation de gaz a été réalisée il y a <strong className="text-black">plus de 15 ans</strong>. Les anomalies détectées sont classées selon leur niveau de gravité (anomalie 1, 2 ou 3), ce qui permet de prioriser les interventions nécessaires.
                  </p>
                </div>

                {/* Pourquoi */}
                <div id="pourquoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Pourquoi est-il important ?</h2>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/diagnostic-immobilier-gaz-paris.jpg" alt="Inspection installation gaz" width={868} height={288} className="w-full object-cover max-h-72" draggable={false}/>
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Les installations gaz vieillissent et peuvent se dégrader silencieusement. Une fuite de gaz non détectée, un appareil de chauffage mal entretenu ou une ventilation insuffisante peuvent avoir des conséquences dramatiques. Le diagnostic gaz permet d'identifier ces risques avant qu'ils ne se manifestent.
                  </p>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Pour un propriétaire vendeur, fournir un diagnostic gaz récent rassure l'acquéreur et limite la responsabilité en cas de vice caché. Pour un bailleur, c'est une obligation légale et une protection en cas d'incident locatif.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-black mb-1">Anomalie de niveau 3 — danger immédiat</p>
                      <p className="text-sm text-mygray leading-relaxed">
                        En cas d'anomalie classée niveau 3 (danger grave et immédiat), le diagnostiqueur est tenu d'interrompre l'alimentation en gaz du logement et d'en informer immédiatement le distributeur de gaz. La transaction ne peut pas se poursuivre tant que les travaux de mise en sécurité n'ont pas été réalisés.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Risques */}
                <div id="risques" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Les risques d'une installation défectueuse</h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Chaque année en France, environ <strong className="text-black">3 000 intoxications au monoxyde de carbone (CO)</strong> sont recensées, causant une centaine de décès. Le CO est un gaz incolore et inodore produit par une combustion incomplète — dans un appareil de chauffage ou de cuisson mal entretenu ou mal ventilé.
                  </p>
                  <div className="space-y-3 mb-4">
                    {[
                      { label: 'Intoxication faible ou chronique', desc: 'Maux de tête persistants, nausées, fatigue inexpliquée, souvent attribués à tort à d\'autres causes.' },
                      { label: 'Intoxication aiguë grave', desc: 'Vertiges, troubles de la conscience, malaises, convulsions — pouvant conduire au coma ou au décès en cas d\'exposition prolongée.' },
                    ].map(({ label, desc }) => (
                      <div key={label} className="bg-red-50 border border-red-100 rounded-2xl p-4">
                        <p className="font-semibold text-sm text-black mb-1">{label}</p>
                        <p className="text-sm text-mygray leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-mygray text-base leading-relaxed">
                    Au-delà des intoxications, une fuite de gaz peut provoquer une explosion aux conséquences catastrophiques. Le diagnostic gaz est donc la première ligne de défense pour prévenir ces risques.
                  </p>
                </div>

                {/* Comment */}
                <div id="comment" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Comment Meilleur Diag réalise ce diagnostic ?</h2>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/meilleur-diagnostic-immobilier-gaz.jpg" alt="Inspection installation gaz" width={868} height={288} className="w-full object-cover max-h-72" draggable={false}/>
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Nos diagnostiqueurs certifiés effectuent une inspection complète selon la norme NF P45-500. L'intervention dure généralement entre 1 et 2 heures selon la complexité de l'installation.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: Shield, title: 'Inspection complète', desc: 'Vérification de tous les appareils gaz, tuyauteries, raccordements et dispositifs de sécurité.' },
                      { icon: FileCheck, title: '120+ points contrôlés', desc: 'Chaque anomalie est identifiée, documentée et classée selon son niveau de gravité réglementaire.' },
                      { icon: Clock, title: 'Rapport sous 24h', desc: 'Document officiel conforme au DDT transmis par email le lendemain de l\'intervention.' },
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

                {/* Points */}
                <div id="points" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Les points de contrôle</h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">Voici les principaux éléments inspectés lors du diagnostic gaz :</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {pointsControle.map(({ icon, label }) => (
                      <div key={label} className="flex items-start gap-3 bg-[#f8f8f8] rounded-xl p-4">
                        <span className="text-xl shrink-0">{icon}</span>
                        <p className="text-sm text-mygray leading-relaxed">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Obligatoire */}
                <div id="obligatoire" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Est-il obligatoire ?</h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Oui, pour toute <strong className="text-black">vente ou location</strong> d'un logement dont l'installation gaz a plus de 15 ans. Le diagnostic est valable <strong className="text-black">3 ans pour une vente</strong> et <strong className="text-black">6 ans pour une location</strong>.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-mygray leading-relaxed">
                        <strong className="text-black">Bon à savoir :</strong> même si votre installation est récente ou vient d'être rénovée, il est conseillé de le faire vérifier tous les 10 ans à titre préventif. Pour un logement équipé d'une chaudière, un entretien annuel par un professionnel est recommandé (et obligatoire en location).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div id="conclusion" className="mb-6">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>Conclusion</h2>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/diagnostic-gaz-paris.jpg" alt="Inspection installation gaz" width={868} height={288} className="w-full object-cover max-h-72" draggable={false}/>
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le diagnostic gaz est une obligation légale, mais surtout une mesure de sécurité vitale. En France, les accidents liés au gaz — intoxications au CO et explosions — causent chaque année plusieurs centaines de victimes, souvent dans des logements dont l'installation n'avait pas été contrôlée depuis des années.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Ne laissez pas la sécurité au hasard. Faites appel à Meilleur Diag pour un diagnostic gaz précis, rapide et conforme aux exigences réglementaires. Nous intervenons 7j/7 à Paris et en Île-de-France.
                  </p>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-black p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, system-ui' }}>Besoin d'un diagnostic gaz ?</h3>
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
                    { label: 'Points contrôlés', value: '120+' },
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