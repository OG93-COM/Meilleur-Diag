import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Award, MapPin, Clock, Shield, FileCheck, Star, Users, CheckCircle } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'

export const metadata: Metadata = {
  title: 'À Propos — Qui est Meilleur Diag ? | Diagnostic Immobilier Paris',
  description:
    'Meilleur Diag, société de diagnostic immobilier à Paris fondée par M. Mohamed Amine Kalai. Diagnostiqueurs certifiés, expertise reconnue, intervention 7j/7 en Île-de-France.',
  keywords:
    'meilleur diag avis, meilleur diag paris, diagnostiqueur immobilier paris certifié, diagnostic immobilier ile de france, Mohamed Amine Kalai, société diagnostic immobilier paris',
  alternates: { canonical: 'https://meilleur-diag.com/diagnostic-immobilier-paris' },
  openGraph: {
    title: 'À Propos — Qui est Meilleur Diag ?',
    description: 'Meilleur Diag, expert en diagnostic immobilier à Paris et Île-de-France. Fondée par M. Mohamed Amine Kalai. Diagnostiqueurs certifiés, 1500+ diagnostics réalisés.',
    url: 'https://meilleur-diag.com/diagnostic-immobilier-paris',
    type: 'website',
    locale: 'fr_FR',
  },
}

const valeurs = [
  {
    icon: Award,
    title: 'Expertise certifiée',
    desc: 'Tous nos diagnostiqueurs sont certifiés par des organismes accrédités COFRAC et se forment régulièrement aux évolutions réglementaires. Leur expertise technique est au service de la précision et de la fiabilité de chaque rapport.',
  },
  {
    icon: FileCheck,
    title: 'Évaluations précises',
    desc: 'Nous sommes conscients de l\'importance de ces évaluations — que ce soit pour acheter, vendre ou louer. Nos diagnostiqueurs sont parfaitement informés des normes en vigueur et équipés des dernières technologies pour diagnostiquer votre bien avec précision.',
  },
  {
    icon: Shield,
    title: 'Services complets',
    desc: 'DPE, Amiante, Plomb, Électricité, Gaz, Termites, Loi Carrez, Loi Boutin, ERP, Assainissement — nous couvrons l\'intégralité des diagnostics obligatoires pour la vente et la location, en une ou plusieurs interventions selon vos besoins.',
  },
  {
    icon: MapPin,
    title: 'Couverture géographique',
    desc: 'Nous intervenons sur l\'ensemble de Paris intramuros et de l\'Île-de-France : Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Yvelines, Essonne, Val-d\'Oise et Seine-et-Marne. Aucun frais de déplacement supplémentaire.',
  },
  {
    icon: Clock,
    title: 'Rapports transparents',
    desc: 'Votre satisfaction est au cœur de nos priorités. Chaque rapport de diagnostic est complet, clair et conforme aux exigences réglementaires. Vous recevez votre document par email dans les 24 heures suivant l\'intervention.',
  },
  {
    icon: Star,
    title: 'Tarifs compétitifs',
    desc: 'Nos prix sont transparents, sans surprise, et parmi les plus compétitifs du marché parisien. Devis gratuit en ligne en 2 minutes. Packs vente et location disponibles pour regrouper vos diagnostics et réduire les coûts.',
  },
]

const chiffres = [
  { val: '1 500+', label: 'Diagnostics réalisés', sub: 'en Île-de-France' },
  { val: '4.9/5', label: 'Note moyenne clients', sub: 'sur Trustpilot' },
  { val: '< 24h', label: 'Délai de livraison', sub: 'du rapport certifié' },
  { val: '7j/7', label: 'Disponibilité', sub: 'Paris & Île-de-France' },
]

const zones = [
  { name: 'Seine-Saint-Denis (93)', href: '/diagnostic-immo/diagnostic-immobilier-Seine-Saint-Denis' },
  { name: 'Aulnay-sous-Bois', href: '/diagnostic-immo/diagnostic-immobilier-aulnay-sous-bois' },
  { name: 'Hauts-de-Seine (92)', href: null },
  { name: 'Val-de-Marne (94)', href: null },
  { name: 'Yvelines (78)', href: null },
  { name: 'Essonne (91)', href: null },
  { name: 'Val-d\'Oise (95)', href: null },
  { name: 'Seine-et-Marne (77)', href: null },
]

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Meilleur Diag',
            description: 'Société de diagnostic immobilier à Paris et Île-de-France, fondée par M. Mohamed Amine Kalai.',
            url: 'https://www.meilleur-diag.com',
            logo: 'https://www.meilleur-diag.com/images/logo.png',
            telephone: '+33782326451',
            email: 'contact@meilleur-diag.com',
            founder: {
              '@type': 'Person',
              name: 'Mohamed Amine Kalai',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Paris',
              addressCountry: 'FR',
            },
            areaServed: { '@type': 'Place', name: 'Île-de-France' },
            sameAs: [
              'https://www.facebook.com/MeilleurDiagParis',
              'https://www.linkedin.com/company/meilleur-diag',
            ],
          }),
        }}
      />

      <main>
        <PageHeader
          title="Qui est Meilleur Diag ?"
          subtitle="Expert en diagnostic immobilier à Paris depuis plusieurs années. Une équipe certifiée, une exigence de précision, et un engagement simple : votre transaction ne doit jamais être bloquée par un diagnostic."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Meilleur Diag ?' },
          ]}
        />

        {/* Section dirigeant */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Text */}
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-primary/10 text-secondary">
                  Notre histoire
                </span>
                <h2 className="section-title mb-6">
                  Un diagnostic immobilier,<br />
                  <span className="text-primary">c'est une décision.</span>
                </h2>
                <p className="text-mygray text-base leading-relaxed mb-5">
                  Meilleur Diag a été fondé avec une conviction simple : dans une transaction immobilière, le diagnostic n'est pas une formalité — c'est une information critique qui protège l'acheteur, le vendeur, le locataire et le bailleur. Une information mal évaluée peut coûter des dizaines de milliers d'euros ou faire capoter une vente.
                </p>
                <p className="text-mygray text-base leading-relaxed mb-5">
                  Sous la direction de <strong className="text-black">M. Mohamed Amine Kalai</strong>, notre équipe de diagnostiqueurs certifiés s'est construite autour d'une exigence commune : la précision technique, la rapidité d'intervention et la clarté des rapports. Pas de jargon inutile, pas de délai injustifié — juste un travail sérieux, bien fait, livré en 24 heures.
                </p>
                <p className="text-mygray text-base leading-relaxed mb-8">
                  Aujourd'hui, Meilleur Diag accompagne des particuliers, des agences immobilières, des notaires et des promoteurs dans toute l'Île-de-France, avec plus de 1 500 diagnostics réalisés et une note client de 4,9/5 sur Trustpilot.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href="/devis" className="btn-primary px-6 py-3 rounded-xl">
                    Demander un devis
                    <ArrowRight size={16} />
                  </Link>
                  <a href="tel:+33782326451" className="inline-flex items-center gap-2 border-2 border-[#ebebeb] text-black font-semibold px-6 py-3 rounded-xl hover:border-primary transition-colors text-sm">
                    <Phone size={16} className="text-primary" />
                    07 82 32 64 51
                  </a>
                </div>
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-4/5 bg-[#f8f8f8]">
                    <Image
                      src="/images/services/diagnostic-immobilier-plomb.jpg"
                      alt="Diagnostiqueur Meilleur Diag en intervention à Paris"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl bg-black p-5 text-center">
                    <p className="stat-number text-3xl font-bold">1 500+</p>
                    <p className="text-white/50 text-xs mt-1">Diagnostics réalisés</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl bg-primary p-5 text-center">
                    <p className="text-black text-3xl font-bold" style={{ fontFamily: 'Syne, system-ui' }}>4.9/5</p>
                    <p className="text-black/60 text-xs mt-1">Note Trustpilot</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-4/5 bg-[#f8f8f8]">
                    <Image
                      src="/images/services/diagnostic-immobilier-electrique.jpg"
                      alt="Équipe Meilleur Diag — diagnostiqueurs certifiés"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chiffres */}
        <section className="py-16 bg-[#f8f8f8] border-y border-[#ebebeb]">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {chiffres.map(({ val, label, sub }) => (
                <div key={label} className="text-center">
                  <p className="stat-number text-4xl md:text-5xl font-bold mb-1">{val}</p>
                  <p className="font-semibold text-sm text-black mb-0.5" style={{ fontFamily: 'Syne, system-ui' }}>{label}</p>
                  <p className="text-xs text-mygray">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-primary/10 text-secondary">
                Nos engagements
              </span>
              <h2 className="section-title mb-4">
                Pourquoi choisir<br />
                <span className="text-primary">Meilleur Diag ?</span>
              </h2>
              <p className="text-mygray text-base leading-relaxed">
                Six raisons concrètes pour lesquelles nos clients nous font confiance — et continuent de nous recommander.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {valeurs.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 border border-[#ebebeb] hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-base text-black mb-2" style={{ fontFamily: 'Syne, system-ui' }}>{title}</h3>
                  <p className="text-sm text-mygray leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zones géographiques */}
        <section className="py-20 bg-[#f8f8f8]">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-4/3 bg-[#e8e8e8]">
                  <Image
                    src="/images/meilleur-diag-paris-og.jpg"
                    alt="Zones d'intervention Meilleur Diag — Île-de-France"
                    width={600}
                    height={450}
                    className="w-full h-full object-fit"
                  />
                </div>
                {/* Floating badge */}
                {/* <div className="absolute -top-4 -right-4 bg-black rounded-2xl p-5 shadow-xl">
                  <p className="text-primary font-bold text-lg leading-none" style={{ fontFamily: 'Syne, system-ui' }}>7j/7</p>
                  <p className="text-white/50 text-xs mt-1">Intervention</p>
                </div> */}
              </div>

              {/* Text */}
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-primary/10 text-secondary">
                  Couverture géographique
                </span>
                <h2 className="section-title mb-4">
                  Partout en<br />
                  <span className="text-primary">Île-de-France</span>
                </h2>
                <p className="text-mygray text-base leading-relaxed mb-6">
                  Meilleur Diag intervient sur l'ensemble de la région parisienne, sans frais de déplacement supplémentaires. Du diagnostic en Seine-Saint-Denis à celui des Yvelines, nos diagnostiqueurs se déplacent chez vous selon vos disponibilités, 7 jours sur 7.
                </p>
                <p className="text-mygray text-base leading-relaxed mb-8">
                  Nous sommes particulièrement présents dans les départements de la petite et grande couronne, avec une connaissance fine des spécificités locales — zones à risque termites, communes classées zone inondable, secteurs à forte concentration de bâti ancien avec amiante ou plomb.
                </p>

                {/* Zone grid */}
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {zones.map(({ name, href }) => (
                    <div key={name} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      {href ? (
                        <Link href={href} className="text-sm text-mygray hover:text-primary transition-colors font-medium">
                          {name}
                        </Link>
                      ) : (
                        <span className="text-sm text-mygray">{name}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA zones */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/diagnostic-immo/diagnostic-immobilier-Seine-Saint-Denis"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black border-2 border-[#ebebeb] px-5 py-3 rounded-xl hover:border-primary transition-colors"
                  >
                    <MapPin size={15} className="text-primary" />
                    Diagnostic Seine-Saint-Denis
                  </Link>
                  <Link
                    href="/diagnostic-immo/diagnostic-immobilier-aulnay-sous-bois"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black border-2 border-[#ebebeb] px-5 py-3 rounded-xl hover:border-primary transition-colors"
                  >
                    <MapPin size={15} className="text-primary" />
                    Diagnostic Aulnay-sous-Bois
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial / confiance */}
        <section className="py-20 bg-black">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#ffaa17">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8" style={{ fontFamily: 'Syne, system-ui' }}>
                "Intervention rapide, diagnostiqueur sérieux et professionnel. Le rapport était complet et clair — mon notaire n'a eu aucune remarque. Je recommande sans hésiter."
              </blockquote>
              <p className="text-white/40 text-sm">Client Meilleur Diag — Paris 11e</p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
                <Link href="/devis" className="btn-primary px-7 py-4 rounded-xl text-base shadow-lg shadow-primary/20">
                  Demander un devis gratuit
                  <ArrowRight size={17} />
                </Link>
                <a href="tel:+33782326451" className="inline-flex items-center gap-2 justify-center font-semibold px-7 py-4 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-all text-base">
                  <Phone size={17} />
                  07 82 32 64 51
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}