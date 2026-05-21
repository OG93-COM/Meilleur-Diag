import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, MapPin, CheckCircle, Shield, Clock, Award } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'

export const metadata: Metadata = {
  title: 'Diagnostic Immobilier Paris & Île-de-France | Meilleur Diag',
  description:
    'Meilleur Diag réalise vos diagnostics immobiliers obligatoires à Paris et en Île-de-France. DPE, Amiante, Plomb, Gaz, Électricité — diagnostiqueurs certifiés, rapport en 24h, devis gratuit.',
  keywords:
    'diagnostic immobilier Paris, diagnostic immobilier île de france, diagnostic immo paris, diagnostiqueur certifié paris, diagnostic vente location paris, DPE paris, diagnostic amiante ile de france',
  alternates: { canonical: 'https://meilleur-diag.com/diagnostic-immobilier' },
  openGraph: {
    title: 'Diagnostic Immobilier Paris & Île-de-France | Meilleur Diag',
    description: 'Diagnostics obligatoires pour vendre ou louer en Île-de-France. Experts certifiés, rapport en 24h.',
    url: 'https://meilleur-diag.com/diagnostic-immobilier',
    type: 'website',
    locale: 'fr_FR',
  },
}

const villes = [
  {
    name: 'Seine-Saint-Denis',
    dept: '93',
    slug: 'diagnostic-immobilier-seine-saint-denis',
    desc: 'Saint-Denis, Aulnay-sous-Bois, Montreuil, Bobigny et toutes les communes du 93.',
    highlight: 'Zone à forte demande',
    color: 'bg-blue-50 border-blue-100',
    dot: 'bg-blue-400',
  },
  {
    name: 'Aulnay-sous-Bois',
    dept: '93',
    slug: 'diagnostic-immobilier-aulnay-sous-bois',
    desc: 'Expert local à Aulnay-sous-Bois. Intervention rapide, diagnostics complets pour vente et location.',
    highlight: 'Expert local',
    color: 'bg-amber-50 border-amber-100',
    dot: 'bg-amber-400',
  },
  {
    name: 'Hauts-de-Seine',
    dept: '92',
    slug: 'diagnostic-immobilier-hauts-de-seine',
    desc: 'Neuilly, Boulogne, Levallois, Nanterre — toutes les communes des Hauts-de-Seine.',
    highlight: 'Marché premium',
    color: 'bg-emerald-50 border-emerald-100',
    dot: 'bg-emerald-400',
  },
  {
    name: 'Val-de-Marne',
    dept: '94',
    slug: 'diagnostic-immobilier-val-de-marne',
    desc: 'Créteil, Vincennes, Vitry, Ivry — couverture complète du Val-de-Marne.',
    highlight: 'Intervention 24h',
    color: 'bg-violet-50 border-violet-100',
    dot: 'bg-violet-400',
  },
  {
    name: 'Yvelines',
    dept: '78',
    slug: 'diagnostic-immobilier-yvelines',
    desc: 'Versailles, Saint-Germain-en-Laye, Mantes-la-Jolie et toutes les villes des Yvelines.',
    highlight: 'Grande couronne',
    color: 'bg-teal-50 border-teal-100',
    dot: 'bg-teal-400',
  },
  {
    name: 'Essonne',
    dept: '91',
    slug: 'diagnostic-immobilier-essonne',
    desc: 'Évry, Massy, Gif-sur-Yvette, Corbeil-Essonnes — toute l\'Essonne couverte.',
    highlight: 'Grande couronne',
    color: 'bg-orange-50 border-orange-100',
    dot: 'bg-orange-400',
  },
  {
    name: "Val-d'Oise",
    dept: '95',
    slug: 'diagnostic-immobilier-val-doise',
    desc: "Cergy, Argenteuil, Pontoise — nous intervenons dans tout le Val-d'Oise.",
    highlight: 'Grande couronne',
    color: 'bg-cyan-50 border-cyan-100',
    dot: 'bg-cyan-400',
  },
  {
    name: 'Seine-et-Marne',
    dept: '77',
    slug: 'diagnostic-immobilier-seine-et-marne',
    desc: 'Melun, Meaux, Fontainebleau, Chelles — toute la Seine-et-Marne.',
    highlight: 'Grande couronne',
    color: 'bg-pink-50 border-pink-100',
    dot: 'bg-pink-400',
  },
]

const diagnostics = [
  { label: 'DPE — Performance Énergétique', href: '/services/diagnostic-performance-energetique' },
  { label: 'Diagnostic Amiante', href: '/services/diagnostic-amiante' },
  { label: 'Diagnostic Plomb (CREP)', href: '/services/diagnostic-plomb' },
  { label: 'Diagnostic Électricité', href: '/services/diagnostic-electricite' },
  { label: 'Diagnostic Gaz', href: '/services/diagnostic-gaz' },
  { label: 'Diagnostic Termites', href: '/services/diagnostic-termites' },
  { label: 'Loi Carrez', href: '/services/diagnostic-loi-carrez' },
  { label: 'Loi Boutin', href: '/services/diagnostic-loi-boutin' },
  { label: 'ERP — Risques Naturels', href: '/services/diagnostic-risques-naturels' },
  { label: 'Diagnostic Assainissement', href: '/services/diagnostic-assainissement' },
]

export default function DiagnosticImmobilierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Meilleur Diag',
            description: 'Diagnostic immobilier obligatoire à Paris et Île-de-France. DPE, Amiante, Plomb, Gaz, Électricité.',
            url: 'https://www.meilleur-diag.com',
            telephone: '+33782326451',
            email: 'contact@meilleur-diag.com',
            address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
            areaServed: { '@type': 'Place', name: 'Île-de-France' },
            sameAs: ['https://www.facebook.com/MeilleurDiagParis', 'https://www.linkedin.com/company/meilleur-diag'],
          }),
        }}
      />

      <main>
        <PageHeader
          title="Diagnostic Immobilier à Paris & Île-de-France"
          subtitle="Experts certifiés pour tous vos diagnostics obligatoires — vente, location, travaux. Nous intervenons 7j/7 dans tous les départements d'Île-de-France."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Diagnostic Immobilier' },
          ]}
        />

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 bg-[#ffaa17]/10 text-[#e09200]">
                  Obligation légale
                </span>
                <h2 className="section-title mb-5">
                  Le diagnostic immo,<br />
                  <span className="text-[#ffaa17]">une étape incontournable</span>
                </h2>
                <p className="text-[#686a6f] text-base leading-relaxed mb-4">
                  Le diagnostic immobilier est un ensemble de contrôles techniques réalisés par un diagnostiqueur certifié, obligatoires lors de toute vente ou location d'un bien en France. Ces contrôles informent l'acheteur ou le locataire sur l'état réel du logement : performance énergétique, présence d'amiante ou de plomb, état des installations électriques et gaz, risques naturels…
                </p>
                <p className="text-[#686a6f] text-base leading-relaxed mb-6">
                  Tous ces documents sont regroupés dans le <strong className="text-[#222429]">Dossier de Diagnostic Technique (DDT)</strong>, qui doit être remis à l'acquéreur ou au locataire avant la signature du compromis de vente ou du bail. L'absence ou l'inexactitude d'un diagnostic engage la responsabilité du vendeur ou du bailleur.
                </p>
                <div className="space-y-2.5 mb-8">
                  {[
                    'Informer l\'acheteur ou locataire sur l\'état réel du bien',
                    'Évaluer la performance énergétique (DPE obligatoire depuis 2006)',
                    'Prévenir les risques sanitaires (amiante, plomb, gaz)',
                    'Garantir la transparence et réduire les risques juridiques',
                    'Éviter l\'annulation de vente ou de bail pour défaut de diagnostic',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#ffaa17] shrink-0 mt-0.5" />
                      <p className="text-sm text-[#686a6f]">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/devis" className="btn-primary px-6 py-3 rounded-xl">
                    Devis gratuit <ArrowRight size={16} />
                  </Link>
                  <a href="tel:+33782326451" className="inline-flex items-center gap-2 border-2 border-[#ebebeb] text-[#222429] font-semibold px-6 py-3 rounded-xl hover:border-[#ffaa17] transition-colors text-sm">
                    <Phone size={15} className="text-[#ffaa17]" /> 07 82 32 64 51
                  </a>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/3 bg-[#f8f8f8]">
                <Image
                  src="/images/diagnostic-immo-paris.jpg"
                  alt="Diagnostic immobilier Paris Île-de-France"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostics liste */}
        <section className="py-14 bg-[#f8f8f8] border-y border-[#ebebeb]">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#222429]" style={{ fontFamily: 'Syne, system-ui' }}>
                Les diagnostics que nous réalisons
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {diagnostics.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-xs font-semibold text-[#686a6f] border border-[#ebebeb] hover:border-[#ffaa17] hover:text-[#222429] transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffaa17] shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Villes grid */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-[#ffaa17]/10 text-[#e09200]">
                Zones d'intervention
              </span>
              <h2 className="section-title mb-4">
                Nous intervenons partout<br />
                <span className="text-[#ffaa17]">en Île-de-France</span>
              </h2>
              <p className="text-[#686a6f] text-base leading-relaxed">
                Paris intramuros et tous les départements de la région — petite et grande couronne. Aucun frais de déplacement, intervention 7j/7.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {villes.map(({ name, dept, slug, desc, highlight, color, dot }) => (
                <Link
                  key={slug}
                  href={`/diagnostic-immobilier/${slug}`}
                  className={`group rounded-2xl p-5 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${color}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest mb-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                        {highlight}
                      </span>
                      <h3 className="font-bold text-base text-[#222429] group-hover:text-[#ffaa17] transition-colors" style={{ fontFamily: 'Syne, system-ui' }}>
                        {name}
                      </h3>
                      <p className="text-xs text-[#aaa] font-medium">Dép. {dept}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm">
                      <ArrowRight size={14} className="text-[#ffaa17]" />
                    </div>
                  </div>
                  <p className="text-xs text-[#686a6f] leading-relaxed">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi faire appel */}
        <section className="py-16 bg-[#f8f8f8]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#222429] mb-5" style={{ fontFamily: 'Syne, system-ui' }}>
                Pourquoi réaliser un diagnostic immobilier ?
              </h2>
              <p className="text-[#686a6f] text-base leading-relaxed mb-4">
                En France, la loi impose au vendeur ou bailleur de remettre un <strong className="text-[#222429]">Dossier de Diagnostic Technique (DDT)</strong> complet lors de toute transaction immobilière. Ce dossier varie selon l'âge du bien, sa localisation et la nature de l'opération (vente ou location).
              </p>
              <p className="text-[#686a6f] text-base leading-relaxed mb-8">
                Un diagnostic manquant, périmé ou réalisé par un professionnel non certifié peut entraîner l'<strong className="text-[#222429]">annulation de la vente</strong>, une <strong className="text-[#222429]">réduction du prix</strong>, voire des poursuites judiciaires pour vice caché. Faire appel à Meilleur Diag, c'est s'assurer que chaque diagnostic est réalisé dans les règles, livré rapidement, et reconnu par tous les notaires d'Île-de-France.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Shield, title: 'Certifiés COFRAC', desc: 'Tous nos diagnostiqueurs sont certifiés par des organismes accrédités.' },
                  { icon: Clock, title: 'Rapport en 24h', desc: 'Document complet transmis par email le lendemain de l\'intervention.' },
                  { icon: Award, title: '7j/7 en Île-de-France', desc: 'Du lundi au dimanche, sans frais de déplacement supplémentaires.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-2xl p-5 border border-[#ebebeb]">
                    <div className="w-9 h-9 rounded-xl bg-[#ffaa17]/10 flex items-center justify-center mb-3">
                      <Icon size={17} className="text-[#ffaa17]" />
                    </div>
                    <h3 className="font-bold text-sm text-[#222429] mb-1" style={{ fontFamily: 'Syne, system-ui' }}>{title}</h3>
                    <p className="text-xs text-[#686a6f] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#222429]">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
              Prêt à planifier votre diagnostic ?
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Devis gratuit en 2 minutes. Intervention 7j/7 partout en Île-de-France. Rapport certifié en moins de 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/devis" className="btn-primary px-7 py-4 rounded-xl text-base shadow-lg shadow-[#ffaa17]/20">
                Demander un devis gratuit <ArrowRight size={17} />
              </Link>
              <a href="tel:+33782326451" className="inline-flex items-center gap-2 justify-center font-semibold px-7 py-4 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-all text-base">
                <Phone size={17} /> 07 82 32 64 51
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}