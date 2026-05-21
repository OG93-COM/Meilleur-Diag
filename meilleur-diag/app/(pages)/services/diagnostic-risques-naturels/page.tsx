import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertTriangle, Clock, Shield, FileCheck } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diagnostic ERP Paris — État des Risques et Pollutions | Meilleur Diag',
  description:
    'Diagnostic ERP (État des Risques et Pollutions) à Paris et Île-de-France. Risques naturels, technologiques, miniers et radon. Obligatoire vente et location — rapport en 24h.',
  keywords:
    'diagnostic ERP Paris, état des risques et pollutions Paris, diagnostic risques naturels Paris, diagnostic risques technologiques, radon Paris, ERP vente location obligatoire, diagnostiqueur ERP Paris',
  alternates: { canonical: 'https://meilleur-diag.com/services/diagnostic-risques-naturels' },
  openGraph: {
    title: 'Diagnostic ERP Paris — État des Risques et Pollutions | Meilleur Diag',
    description: 'ERP certifié à Paris & Île-de-France. Risques naturels, technologiques, miniers, radon — rapport conforme DDT en 24h.',
    url: 'https://meilleur-diag.com/services/diagnostic-risques-naturels',
    type: 'article',
    locale: 'fr_FR',
    images: [{ url: '/images/services/diagnostic-ERP.jpg', alt: 'Diagnostic ERP Paris' }],
  },
}

const toc = [
  { id: 'quoi', label: 'Qu\'est-ce que le diagnostic ERP ?' },
  { id: 'risques', label: 'Quels risques sont couverts ?' },
  { id: 'obligatoire', label: 'Est-il obligatoire ?' },
  { id: 'comment', label: 'Comment Meilleur Diag réalise ce diagnostic ?' },
  { id: 'idf', label: 'ERP en Île-de-France : les spécificités' },
  { id: 'validite', label: 'Validité et renouvellement' },
  { id: 'conclusion', label: 'Conclusion' },
]

const risques = [
  {
    category: 'Risques naturels',
    icon: '🌊',
    color: 'bg-blue-50 border-blue-100',
    items: [
      'Inondations et crues (zones de débordement, ruissellement)',
      'Séismes et tremblements de terre',
      'Mouvements de terrain (glissements, effondrements, retrait-gonflement des argiles)',
      'Feux de forêt et incendies de végétation',
      'Avalanches et risques montagnards',
    ],
  },
  {
    category: 'Risques technologiques',
    icon: '🏭',
    color: 'bg-orange-50 border-orange-100',
    items: [
      'Sites industriels classés SEVESO (installations dangereuses)',
      'Transport de matières dangereuses',
      'Rupture de barrage et inondations industrielles',
      'Accidents nucléaires (proximité de centrales)',
    ],
  },
  {
    category: 'Risques miniers et sols',
    icon: '⛏️',
    color: 'bg-amber-50 border-amber-100',
    items: [
      'Anciennes mines et carrières souterraines',
      'Cavités naturelles et affaissements miniers',
      'Pollution des sols (anciens sites industriels)',
      'Sites et sols pollués inscrits en BASIAS ou BASOL',
    ],
  },
  {
    category: 'Gaz radon',
    icon: '☢️',
    color: 'bg-purple-50 border-purple-100',
    items: [
      'Zones à potentiel radon 1, 2 ou 3 (classement national)',
      'Gaz radioactif naturel issu de la désintégration de l\'uranium dans les roches granitiques',
      'Deuxième cause de cancer pulmonaire en France après le tabac',
    ],
  },
]

export default function DiagnosticRisquesNaturelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Diagnostic ERP — État des Risques et Pollutions Paris',
            description: 'Diagnostic ERP obligatoire pour toute vente ou location. Risques naturels, technologiques, miniers et radon en Île-de-France.',
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
          title="Diagnostic ERP à Paris — État des Risques et Pollutions"
          subtitle="Informez vos acheteurs ou locataires des risques naturels, technologiques et de pollution liés à votre bien. Document obligatoire pour toute transaction immobilière."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Nos Services', href: '/services' },
            { label: 'Risques Naturels (ERP)' },
          ]}
        />

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="w-full rounded-2xl overflow-hidden mb-10 bg-[#f8f8f8] aspect-16/7">
              <Image
                src="/images/services/diagnostic-ERP.jpg"
                alt="Diagnostic ERP Paris — État des Risques et Pollutions"
                width={1200}
                height={525}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
              <article>

                {/* Quoi */}
                <div id="quoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Qu'est-ce que le diagnostic ERP ?
                  </h2>
                  <div className="rounded-2xl overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image
                      src="/images/services/diagnostic-immobilier-risques-naturels-ERP.jpg"
                      alt="Risques naturels et technologiques évalués dans l'ERP"
                      width={800}
                      height={300}
                      className="w-full object-cover max-h-72"
                    />
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    L'<strong className="text-black">État des Risques et Pollutions (ERP)</strong> est un document qui recense l'ensemble des risques naturels, technologiques, miniers et de pollution auxquels un bien immobilier peut être exposé en fonction de sa localisation. Il remplace depuis 2018 l'ancien ESRIS (État des Servitudes Risques et d'Information sur les Sols).
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Ce diagnostic est établi à partir des informations mises à disposition par les préfectures et les collectivités locales. Il permet d'informer les futurs acquéreurs ou locataires des risques potentiels liés à l'emplacement du bien — une information qui peut influencer leur décision et qui engage la responsabilité du vendeur ou bailleur s'il est omis.
                  </p>
                </div>

                {/* Risques */}
                <div id="risques" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Quels risques sont couverts par l'ERP ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    L'ERP est un document multidimensionnel qui couvre quatre grandes catégories de risques :
                  </p>
                  <div className="space-y-4">
                    {risques.map(({ category, icon, color, items }) => (
                      <div key={category} className={`rounded-2xl p-5 border ${color}`}>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">{icon}</span>
                          <h3 className="font-bold text-sm text-black" style={{ fontFamily: 'Syne, system-ui' }}>{category}</h3>
                        </div>
                        <ul className="space-y-1.5">
                          {items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-mygray">
                              <span className="w-1 h-1 rounded-full bg-mygray/40 mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Obligatoire */}
                <div id="obligatoire" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    L'ERP est-il obligatoire ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Oui, l'ERP est obligatoire pour <strong className="text-black">toute vente ou location</strong> d'un bien immobilier — bâti ou non bâti — situé dans une zone couverte par un plan de prévention des risques, ou dans une zone à potentiel radon. En pratique, presque toutes les communes d'Île-de-France sont concernées par au moins un des risques répertoriés.
                  </p>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Ce diagnostic doit être joint au <strong className="text-black">Dossier de Diagnostic Technique (DDT)</strong> annexé à la promesse de vente ou au contrat de bail, conformément aux articles L. 125-5 et R. 125-23 à 27 du Code de l'environnement.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-black mb-1">Responsabilité du vendeur ou bailleur</p>
                      <p className="text-sm text-mygray leading-relaxed">
                        En l'absence d'ERP lors d'une transaction, l'acheteur ou locataire peut demander la résolution du contrat ou une réduction du prix de vente / du loyer devant les tribunaux, sans avoir à prouver un préjudice particulier.
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
                    La réalisation de l'ERP ne nécessite pas de visite physique du bien, mais une <strong className="text-black">recherche documentaire approfondie</strong> basée sur l'adresse précise du bien. Nos experts consultent les bases de données officielles :
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: Shield, title: 'Sources officielles', desc: 'Géorisques, BASIAS, BASOL, plans de prévention des risques préfectoraux, zonages sismiques.' },
                      { icon: FileCheck, title: 'Rapport complet', desc: 'Document officiel avec cartographie des risques, textes réglementaires et informations sur les sinistres antérieurs.' },
                      { icon: Clock, title: 'Livraison en 24h', desc: 'ERP transmis par email, prêt à intégrer dans votre DDT, en 24 heures.' },
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
                    Le rapport inclut également la mention des <strong className="text-black">sinistres antérieurs</strong> ayant donné lieu à une reconnaissance de catastrophe naturelle ou technologique sur la commune, ainsi que les informations relatives à la présence de zones d'exposition au radon.
                  </p>
                </div>

                {/* IDF */}
                <div id="idf" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    ERP en Île-de-France : les spécificités à connaître
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    En Île-de-France, les risques les plus fréquemment répertoriés dans les ERP sont :
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      { title: 'Inondations de la Seine et de la Marne', desc: 'Paris et de nombreuses communes sont classées en zone inondable. La crue centennale de 1910 reste la référence. Des zones réglementées par des PPRI (Plan de Prévention du Risque Inondation) couvrent une large partie de l\'agglomération.' },
                      { title: 'Retrait-gonflement des argiles', desc: 'Phénomène très répandu en Île-de-France : le sol argileux se rétracte en période de sécheresse et gonfle lors des réhumectations, ce qui peut provoquer des fissures structurelles dans les bâtiments — notamment les maisons individuelles.' },
                      { title: 'Risques technologiques', desc: 'La présence de zones industrielles, d\'entrepôts logistiques et de sites SEVESO dans la petite et grande couronne parisienne génère des zones de risque technologique documentées dans l\'ERP.' },
                      { title: 'Pollution des sols', desc: 'De nombreuses communes d\'Île-de-France ont accueilli des activités industrielles au 19e et 20e siècles. Les anciens sites sont recensés dans les bases BASIAS et BASOL, et leur proximité est mentionnée dans l\'ERP.' },
                    ].map(({ title, desc }) => (
                      <div key={title} className="flex gap-5 bg-[#f8f8f8] rounded-2xl p-5">
                        <div className="w-2 shrink-0 rounded-full bg-primary/30 mt-1" />
                        <div>
                          <h3 className="font-bold text-sm text-black mb-1" style={{ fontFamily: 'Syne, system-ui' }}>{title}</h3>
                          <p className="text-sm text-mygray leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Validité */}
                <div id="validite" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Validité et renouvellement de l'ERP
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    L'ERP est valable <strong className="text-black">6 mois</strong> à compter de sa date d'établissement. Cette durée relativement courte s'explique par l'évolution possible des plans de prévention des risques et des informations préfectorales.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-mygray leading-relaxed">
                        <strong className="text-black">Bon à savoir :</strong> si votre compromis de vente a été signé avec un ERP valide mais que l'acte authentique intervient après sa date d'expiration, un nouvel ERP doit être établi avant la signature chez le notaire. Pensez à anticiper ce renouvellement pour ne pas retarder votre transaction.
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
                    L'ERP est un diagnostic discret mais essentiel : il informe l'acheteur ou le locataire des risques réels liés à l'emplacement du bien, et protège le vendeur ou bailleur contre tout recours ultérieur. En Île-de-France, où les risques d'inondation, de retrait-gonflement des argiles et de pollution des sols sont particulièrement présents, ce document ne doit jamais être négligé.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Meilleur Diag établit votre ERP rapidement, à partir des sources officielles les plus récentes, et vous le remet sous 24 heures prêt à intégrer dans votre DDT.
                  </p>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-black p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, system-ui' }}>Besoin d'un diagnostic ERP ?</h3>
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
                    { label: 'Obligatoire', value: 'Vente & Location' },
                    { label: 'Bien concerné', value: 'Bâti & non bâti' },
                    { label: 'Validité', value: '6 mois' },
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