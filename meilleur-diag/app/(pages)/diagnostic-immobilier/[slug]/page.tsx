import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, CheckCircle, MapPin, Clock, Shield, Award, AlertTriangle } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import { villesData } from './data'

type Props = { params: Promise<{ slug: string }> }
export async function generateStaticParams() {
  return Object.keys(villesData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const data = villesData[slug]
    if (!data) return {}
return {
      title: data.metaTitle,
      description: data.metaDescription,
      keywords: data.metaKeywords,
      alternates: { canonical: data.canonical },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: data.canonical,
        type: 'article',
        locale: 'fr_FR',
        images: [{ url: data.ogImage, alt: `Diagnostic immobilier ${data.name}` }],
      },
}
}

export default async function VillePage({ params }: Props) {
    const { slug } = await params
    const data = villesData[slug]
  if (!data) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Diagnostic Immobilier ${data.name} (${data.dept})`,
            description: data.schemaDescription,
            provider: {
              '@type': 'LocalBusiness',
              name: 'Meilleur Diag',
              telephone: '+33782326451',
              url: 'https://www.meilleur-diag.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: data.name,
              containedInPlace: { '@type': 'Place', name: 'Île-de-France' },
            },
            serviceType: 'Diagnostic Immobilier',
          }),
        }}
      />

      <main>
        <PageHeader
          title={data.headerTitle}
          subtitle={data.headerSubtitle}
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Diagnostic Immobilier', href: '/diagnostic-immobilier' },
            { label: `${data.name} (${data.dept})` },
          ]}
        />

        {/* Intro + image */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 bg-primary/10 text-secondary">
                  Département {data.dept} — {data.region}
                </span>
                <h2 className="text-2xl font-bold text-black mb-5" style={{ fontFamily: 'Syne, system-ui' }}>
                  Diagnostic immobilier obligatoire<br />
                  <span className="text-primary">en {data.name}</span>
                </h2>
                {data.intro.map((p, i) => (
                  <p key={i} className="text-mygray text-base leading-relaxed mb-4">{p}</p>
                ))}
                <div className="flex flex-wrap gap-3 mt-6">
                  <Link href="/devis-diagnostic-immobilier" className="btn-primary px-6 py-3 rounded-xl">
                    Devis gratuit <ArrowRight size={16} />
                  </Link>
                  <a href="tel:+33782326451" className="inline-flex items-center gap-2 border-2 border-[#ebebeb] text-black font-semibold px-6 py-3 rounded-xl hover:border-primary transition-colors text-sm">
                    <Phone size={15} className="text-primary" /> 07 82 32 64 51
                  </a>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-4/3 bg-[#f8f8f8]">
                <Image
                  src={data.ogImage}
                  alt={`Diagnostic immobilier ${data.name}`}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Spécificités locales */}
            <div className="bg-[#f8f8f8] rounded-3xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                  <MapPin size={17} className="text-primary" />
                </div>
                <h2 className="font-bold text-lg text-black" style={{ fontFamily: 'Syne, system-ui' }}>
                  Spécificités du parc immobilier en {data.name}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {data.specificites.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#ebebeb]">
                    <CheckCircle size={15} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-mygray leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ce que dit la loi */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-5" style={{ fontFamily: 'Syne, system-ui' }}>
                {data.loi}
              </h2>
              <div className="space-y-3">
                {data.loiDetails.map((item, i) => (
                  <div key={i} className="flex gap-4 bg-[#f8f8f8] rounded-2xl p-5">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-secondary shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-sm text-mygray leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostics requis */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-5" style={{ fontFamily: 'Syne, system-ui' }}>
                Quels diagnostics prévoir en {data.name} ?
              </h2>
              <p className="text-mygray text-base leading-relaxed mb-6">
                Selon le type de bien, son année de construction et la nature de la transaction (vente ou location), voici les diagnostics obligatoires à prévoir :
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {data.diagList.map(({ label, href, note }) => (
                  <Link
                    key={label}
                    href={href}
                    className="group flex items-start justify-between bg-[#f8f8f8] rounded-xl p-4 border border-transparent hover:border-primary/30 hover:bg-white transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-black group-hover:text-primary transition-colors">{label}</p>
                        {note && <p className="text-[11px] text-[#aaa] mt-0.5">{note}</p>}
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-[#aaa] group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </Link>
                ))}
              </div>

              <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-mygray leading-relaxed">
                  La liste des diagnostics obligatoires dépend de l'année de construction du bien, du type de transaction et de la localisation précise. Nos diagnostiqueurs vous conseillent gratuitement sur les diagnostics nécessaires pour votre situation.
                </p>
              </div>
            </div>

            {/* Pourquoi Meilleur Diag */}
            <div className="rounded-3xl bg-[#f8f8f8] p-8 mb-12">
              <h2 className="text-xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                Meilleur Diag, votre expert local en {data.name}
              </h2>
              <p className="text-mygray text-base leading-relaxed mb-6">{data.pourquoiNous}</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Shield, title: 'Diagnostiqueurs certifiés', desc: 'Certification COFRAC, formation continue aux évolutions réglementaires.' },
                  { icon: Clock, title: 'Rapport en 24h', desc: 'Document complet transmis par email le lendemain de l\'intervention.' },
                  { icon: Award, title: 'Devis gratuit', desc: 'Sans engagement, en ligne en 2 minutes ou par téléphone 7j/7.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-2xl p-5 border border-[#ebebeb]">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon size={17} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-sm text-black mb-1" style={{ fontFamily: 'Syne, system-ui' }}>{title}</h3>
                    <p className="text-xs text-mygray leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                Conclusion
              </h2>
              <p className="text-mygray text-base leading-relaxed">{data.conclusion}</p>
            </div>

            {/* CTA inline */}
            <div className="rounded-2xl bg-black p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, system-ui' }}>
                  Diagnostic immobilier en {data.name} ?
                </h3>
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
          </div>
        </section>

        {/* Zones voisines */}
        {data.voisines.length > 0 && (
          <section className="py-12 bg-[#f8f8f8] border-t border-[#ebebeb]">
            <div className="container-custom">
              <h2 className="text-base font-bold text-black mb-5 uppercase tracking-wide" style={{ fontFamily: 'Syne, system-ui' }}>
                Nous intervenons aussi dans ces zones
              </h2>
              <div className="flex flex-wrap gap-3">
                {data.voisines.map(({ name, slug }) => (
                  <Link
                    key={slug}
                    href={`/diagnostic-immobilier/${slug}`}
                    className="inline-flex items-center gap-2 bg-white border border-[#ebebeb] rounded-xl px-4 py-2.5 text-sm font-semibold text-mygray hover:border-primary hover:text-black transition-all duration-200"
                  >
                    <MapPin size={13} className="text-primary" />
                    {name}
                  </Link>
                ))}
                <Link
                  href="/diagnostic-immobilier"
                  className="inline-flex items-center gap-2 bg-white border border-[#ebebeb] rounded-xl px-4 py-2.5 text-sm font-semibold text-mygray hover:border-primary hover:text-black transition-all duration-200"
                >
                  Voir toutes les zones <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}