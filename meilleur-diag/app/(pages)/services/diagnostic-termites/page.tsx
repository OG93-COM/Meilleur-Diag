import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertTriangle, Clock, Shield, FileCheck } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diagnostic Termites Paris | Meilleur Diag',
  description:
    'Diagnostic termites obligatoire à Paris et Île-de-France. Détection professionnelle des infestations avant vente ou location. Diagnostiqueurs certifiés — rapport en 24h.',
  keywords:
    'diagnostic termites Paris, diagnostic termites obligatoire, termites immeuble, diagnostic termites vente, diagnostiqueur termites Paris, termites maison Paris',
  alternates: { canonical: 'https://meilleur-diag.com/services/diagnostic-termites' },
  openGraph: {
    title: 'Diagnostic Termites Obligatoire Paris | Meilleur Diag',
    description:
      'Diagnostic termites certifié à Paris & Île-de-France. Détection des infestations, rapport conforme DDT en 24h.',
    url: 'https://meilleur-diag.com/services/diagnostic-termites',
    type: 'article',
    locale: 'fr_FR',
    images: [{ url: '/images/services/diagnostic-termites.jpg', alt: 'Diagnostic Termites Paris' }],
  },
}

const toc = [
  { id: 'comprendre', label: 'Comprendre les termites' },
  { id: 'pourquoi', label: 'Pourquoi faire un diagnostic termites ?' },
  { id: 'comment', label: 'Comment Meilleur Diag réalise le diagnostic ?' },
  { id: 'obligatoire', label: 'Le diagnostic termites est-il obligatoire ?' },
  { id: 'quand', label: 'Quand faire un diagnostic termites ?' },
  { id: 'signes', label: 'Comment détecter la présence de termites ?' },
  { id: 'conclusion', label: 'Conclusion' },
]

const signes = [
  { icon: '🪵', label: 'Bois creux au toucher ou qui sonne creux quand on le frappe' },
  { icon: '💧', label: 'Peintures ou enduits qui cloquent sans trace d\'humidité évidente' },
  { icon: '🐜', label: 'Ailes transparentes abandonnées près des fenêtres au printemps' },
  { icon: '🟤', label: 'Petites galeries de terre visibles sur les murs ou fondations' },
  { icon: '📦', label: 'Parquet qui s\'affaisse légèrement sans raison apparente' },
  { icon: '🔦', label: 'Excréments de termites (petits granules brun clair) près du bois' },
]

export default function DiagnosticTermitesPage() {
  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Diagnostic Termites Paris',
            description: 'Diagnostic termites réalisé par des experts certifiés à Paris et Île-de-France.',
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
        <PageHeader title="Diagnostic Termites à Paris"
          subtitle="Protégez votre bien contre les insectes xylophages. Diagnostic certifié, rapport conforme au DDT, livré en moins de 24h."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Nos Services', href: '/services' },
            { label: 'Diagnostic Termites' },
          ]}/>

        {/* Main content */}
        <section className="py-16 bg-white">
          <div className="container-custom ">
            <div className="w-full h-full rounded-lg shadow-lg overflow-hidden mb-10 bg-light">
                  <Image src="/images/services/diagnostic-termites.jpg" alt="Diagnostic immobilier termites Paris" width={1216} height={395} className="object-cover" draggable={false}/>
            </div>
            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start ">

              {/* Article */}
              <article className="max-w-none">

                {/* Hero image */}
                

                {/* Comprendre */}
                <div id="comprendre" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Comprendre les termites
                  </h2>
                  
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Les termites sont des insectes sociaux qui vivent en colonies souterraines et se nourrissent de cellulose — autrement dit, de bois. En France, on recense principalement six espèces, dont <strong className="text-black">Reticulitermes flavipes</strong>, particulièrement répandue en Île-de-France. Leur discrétion est leur principale force : ils progressent à l'intérieur même du bois, ne laissant qu'une fine paroi en surface, ce qui rend les dégâts invisibles jusqu'au stade avancé.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Contrairement aux fourmis, les termites ne se déplacent pas à l'air libre. Ils empruntent des galeries qu'ils construisent dans le sol ou à travers les matériaux, ce qui complique leur détection sans l'intervention d'un professionnel équipé. Une colonie peut compter plusieurs centaines de milliers d'individus et ronger les structures porteuses d'un bâtiment pendant des années sans se signaler.
                  </p>
                </div>

                {/* Pourquoi */}
                <div id="pourquoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Pourquoi faire un diagnostic termites ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Les termites s'attaquent aux éléments en bois de votre logement — parquet, planchers, poutres, charpentes, encadrements de portes et fenêtres. Au fil du temps, la structure porteuse elle-même peut être fragilisée, entraînant un risque d'effondrement partiel ou total. Le coût des réparations peut atteindre plusieurs dizaines de milliers d'euros si l'infestation n'est pas détectée à temps.
                  </p>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Par ailleurs, les galeries creusées dans le bois longent souvent les canalisations électriques, augmentant considérablement le <strong className="text-black">risque d'incendie par court-circuit</strong>. Faire réaliser un diagnostic termites, c'est donc protéger à la fois l'intégrité de votre bien et la sécurité de ses occupants.
                  </p>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/diagnostic-termites-paris.jpg" alt="Les termites et leur impact sur les bâtiments"
                      width={868} height={288} className="w-full object-cover max-h-72" draggable={false}/>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-black mb-1">À savoir</p>
                      <p className="text-sm text-mygray leading-relaxed">
                        En cas de vente sans diagnostic termites dans une zone à risque, le vendeur peut être tenu responsable des vices cachés et condamné à indemniser l'acheteur, voire à annuler la vente.
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
                    Nos diagnostiqueurs certifiés utilisent des techniques de sondage spécialisées pour inspecter l'ensemble des éléments en bois accessibles du bâtiment — des caves aux combles. L'inspection porte sur les parquets, les charpentes, les menuiseries, mais aussi les abords du bien (souches d'arbres, bois en contact avec le sol, etc.).
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: Shield, title: 'Inspection complète', desc: 'De la cave aux combles, chaque élément en bois est sondé méthodiquement.' },
                      { icon: FileCheck, title: 'Rapport officiel', desc: 'Document certifié conforme au Dossier de Diagnostic Technique (DDT).' },
                      { icon: Clock, title: 'Livraison en 24h', desc: 'Rapport transmis par email le lendemain de l\'intervention.' },
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
                    À l'issue de l'inspection, un <strong className="text-black">rapport officiel</strong> vous est remis, indiquant les zones inspectées, la présence ou l'absence de termites, et les recommandations éventuelles. Ce rapport fait partie intégrante du DDT.
                  </p>
                </div>

                {/* Obligatoire */}
                <div id="obligatoire" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Le diagnostic termites est-il obligatoire ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Oui, dans les <strong className="text-black">zones délimitées par arrêté préfectoral</strong> comme zones à risque termites. En Île-de-France, plusieurs communes — dont certaines en Seine-Saint-Denis, Val-de-Marne et Essonne — sont concernées. Le diagnostic est alors <strong className="text-black">obligatoire lors de la vente</strong> de tout immeuble bâti situé dans ces zones.
                  </p>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Ce diagnostic est valable <strong className="text-black">6 mois</strong> à compter de sa réalisation. Il doit être annexé à la promesse de vente ou, à défaut, à l'acte authentique de vente.
                  </p>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-mygray leading-relaxed">
                        <strong className="text-black">Bon à savoir :</strong> même hors zone à risque, il est fortement recommandé de réaliser un diagnostic termites pour tout bien de plus de 25 ans, particulièrement en zone urbaine dense. Une infestation non détectée peut faire chuter significativement la valeur du bien.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quand */}
                <div id="quand" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Quand faire un diagnostic termites ?
                  </h2>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/diagnostic-termites-france.jpg" alt="Les termites et leur impact sur les bâtiments"
                      width={868} height={288} className="w-full object-cover max-h-72" draggable={false}/>
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Le diagnostic termites est à réaliser <strong className="text-black">avant la mise en vente du bien</strong> dans les zones concernées. Mais il est conseillé de ne pas attendre la transaction pour agir : un contrôle préventif tous les 3 à 5 ans est recommandé pour les maisons individuelles, en particulier si le jardin comporte des souches ou du bois en décomposition.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Renseignez-vous auprès de votre mairie ou préfecture pour savoir si votre commune est classée en zone à risque. Meilleur Diag peut également vous conseiller lors de votre prise de rendez-vous.
                  </p>
                </div>

                {/* Signes */}
                <div id="signes" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Comment détecter la présence de termites ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Plusieurs signes doivent éveiller votre vigilance. Ils ne signifient pas forcément une infestation active, mais méritent une inspection professionnelle :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {signes.map(({ icon, label }) => (
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
                    Le diagnostic termites est bien plus qu'une simple obligation légale : c'est une garantie de transparence pour l'acheteur, et une protection réelle pour le vendeur. En confiant cette mission à Meilleur Diag, vous bénéficiez de l'expertise de diagnostiqueurs certifiés, d'un rapport conforme aux exigences légales, et d'une intervention rapide partout à Paris et en Île-de-France.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    N'attendez pas que les termites causent des dégâts irréparables — une détection précoce peut vous faire économiser des milliers d'euros et garantir une transaction sereine.
                  </p>
                </div>

                {/* CTA inline */}
                <div className="rounded-2xl bg-black p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, system-ui' }}>
                      Besoin d'un diagnostic termites ?
                    </h3>
                    <p className="text-white/50 text-sm">Intervention 7j/7 — Rapport en 24h — Devis gratuit</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <Link href="/devis-diagnostic-immobilier" className="btn-primary px-5 py-3 rounded-xl text-sm">
                      Devis gratuit
                      <ArrowRight size={15} />
                    </Link>
                    <Link href="tel:+33782326451" className="inline-flex items-center gap-2 border border-white/15 text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-white/5 transition-colors">
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
                  <Link href="tel:+33782326451" className="flex items-center justify-center gap-2 w-full border border-white/10 text-white/70 hover:text-white text-sm font-medium py-3 rounded-xl hover:bg-white/5 transition-colors">
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
                    { label: 'Validité', value: '6 mois' },
                    { label: 'Obligatoire', value: 'Zones à risque' },
                    { label: 'Pour', value: 'Vente uniquement' },
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