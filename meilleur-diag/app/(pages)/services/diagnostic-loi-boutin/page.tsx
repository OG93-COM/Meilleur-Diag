import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertTriangle, Clock, Shield, FileCheck } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diagnostic Loi Boutin Paris — Surface Habitable Location | Meilleur Diag',
  description:
    'Mesurage Loi Boutin à Paris et Île-de-France. Surface habitable certifiée obligatoire pour tout contrat de location. Diagnostiqueurs certifiés — rapport en 24h.',
  keywords:
    'loi boutin Paris, diagnostic loi boutin, surface habitable location Paris, mesurage boutin obligatoire, diagnostiqueur loi boutin Paris, superficie habitable bail, contrat location surface Paris',
  alternates: { canonical: 'https://meilleur-diag.com/services/diagnostic-loi-boutin' },
  openGraph: {
    title: 'Diagnostic Loi Boutin Paris | Meilleur Diag',
    description: 'Mesurage Loi Boutin certifié à Paris. Surface habitable obligatoire dans le bail de location, rapport conforme en 24h.',
    url: 'https://meilleur-diag.com/services/diagnostic-loi-boutin',
    type: 'article',
    locale: 'fr_FR',
    images: [{ url: '/images/services/diagnostic-loi-boutin.jpg', alt: 'Diagnostic Loi Boutin Paris' }],
  },
}

const toc = [
  { id: 'quoi', label: 'Qu\'est-ce que la Loi Boutin ?' },
  { id: 'difference', label: 'Loi Boutin vs Loi Carrez : les différences' },
  { id: 'pourquoi', label: 'Pourquoi c\'est important pour le bailleur ?' },
  { id: 'comment', label: 'Comment Meilleur Diag réalise ce mesurage ?' },
  { id: 'exclusions', label: 'Quelles surfaces sont exclues ?' },
  { id: 'choisir', label: 'Pourquoi choisir Meilleur Diag ?' },
  { id: 'conclusion', label: 'Conclusion' },
]

const exclusions = [
  { icon: '🚗', label: 'Caves, sous-sols, garages et emplacements de parking' },
  { icon: '🌿', label: 'Balcons, terrasses, loggias et jardins privatifs' },
  { icon: '🏚️', label: 'Combles non aménagés et greniers' },
  { icon: '📐', label: 'Surfaces sous plafond inférieur à 1,80 mètre' },
  { icon: '🛖', label: 'Vérandas non chauffées et dépendances extérieures' },
  { icon: '🧹', label: 'Locaux communs de l\'immeuble et parties non privatives' },
]

export default function DiagnosticLoiBoutinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Mesurage Loi Boutin Paris',
            description: 'Surface habitable certifiée obligatoire pour tout contrat de location. Protège bailleur et locataire.',
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
          title="Mesurage Loi Boutin à Paris"
          subtitle="La surface habitable de votre bien doit obligatoirement figurer dans le contrat de location. Un mesurage professionnel vous protège de tout recours locataire."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Nos Services', href: '/services' },
            { label: 'Loi Boutin' },
          ]}
        />

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="w-full rounded-lg overflow-hidden mb-10 bg-[#f8f8f8] aspect-16/7">
              <Image src="/images/services/diagnostic-loi-boutin.jpg" alt="Mesurage Loi Boutin Paris"
                width={1216} height={395} className="object-cover" draggable={false}/>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
              <article>

                {/* Quoi */}
                <div id="quoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Qu'est-ce que la Loi Boutin ?
                  </h2>
                  <div className="rounded-lg shadow-sm overflow-hidden mb-6 bg-[#f8f8f8]">
                    <Image src="/images/services/diagnostic-immobilier-loi-boutin.jpg" alt="Mesurage surface habitable Loi Boutin"
                      width={868} height={288} className="w-full object-cover max-h-72"/>
                  </div>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Promulguée le 25 mars 2009 sous l'égide de Christine Boutin, alors ministre du Logement, la Loi Boutin a introduit une obligation claire pour tous les propriétaires bailleurs : <strong className="text-black">mentionner la surface habitable du logement dans tout contrat de location</strong>, qu'il s'agisse d'une location vide ou meublée.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Cette obligation vise à protéger le locataire contre des annonces trompeuses et à garantir une information transparente sur l'espace réel dont il disposera. À Paris, où le marché locatif est tendu et les prix élevés, une surface erronée peut représenter un enjeu financier considérable pour toutes les parties.
                  </p>
                </div>

                {/* Différence */}
                <div id="difference" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Loi Boutin vs Loi Carrez : quelles différences ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Les deux lois mesurent des surfaces différentes selon des règles distinctes. Il est essentiel de ne pas les confondre :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        title: 'Loi Boutin',
                        usage: 'Location',
                        mesure: 'Surface habitable',
                        desc: 'Mesure la surface des pièces à usage d\'habitation réelles. Exclut les espaces non habitables (caves, garages, balcons). S\'applique à tous les logements, en copropriété ou non.',
                        color: 'border-primary',
                        badge: 'bg-primary text-black',
                      },
                      {
                        title: 'Loi Carrez',
                        usage: 'Vente',
                        mesure: 'Surface privative',
                        desc: 'Mesure la superficie des parties privatives d\'un lot en copropriété. Exclut les murs, cloisons, marches. S\'applique uniquement aux biens en copropriété lors d\'une vente.',
                        color: 'border-[#ebebeb]',
                        badge: 'bg-black text-white',
                      },
                    ].map(({ title, usage, mesure, desc, color, badge }) => (
                      <div key={title} className={`rounded-2xl p-5 border-2 ${color}`}>
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badge}`}>{usage}</span>
                          <h3 className="font-bold text-sm text-black" style={{ fontFamily: 'Syne, system-ui' }}>{title}</h3>
                        </div>
                        <p className="text-xs font-semibold text-primary mb-2">{mesure}</p>
                        <p className="text-sm text-mygray leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-mygray leading-relaxed">
                      Un bailleur ne peut pas utiliser son mesurage Loi Carrez à la place du mesurage Loi Boutin — les règles de calcul sont différentes et le résultat peut varier de plusieurs mètres carrés selon le bien.
                    </p>
                  </div>
                </div>

                {/* Pourquoi */}
                <div id="pourquoi" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Pourquoi c'est important pour le bailleur ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Si la surface habitable mentionnée dans le bail est supérieure de plus de <strong className="text-black">5 % à la surface réelle</strong>, le locataire peut exiger une diminution du loyer proportionnelle à l'écart constaté. Cette action peut être intentée dans un délai d'un an après la signature du bail.
                  </p>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    À Paris, avec des loyers souvent supérieurs à 30 €/m²/mois en zone tendue, une erreur de 3 m² peut entraîner une réclamation de plusieurs centaines d'euros par mois — soit des milliers d'euros sur la durée du bail.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Un mesurage professionnel Loi Boutin est donc à la fois une <strong className="text-black">obligation légale et une protection financière</strong> pour tout propriétaire qui met son bien en location.
                  </p>
                </div>

                {/* Comment */}
                <div id="comment" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Comment Meilleur Diag réalise ce mesurage ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Notre intervention se déroule en trois étapes précises et documentées :
                  </p>
                  <div className="space-y-4 mb-6">
                    {[
                      {
                        num: '01',
                        title: 'Mesurage de la surface habitable',
                        desc: 'Nos diagnostiqueurs mesurent avec précision l\'intégralité des pièces habitables à l\'aide d\'un télémètre laser, en appliquant strictement les règles de déduction définies par l\'article R. 111-2 du Code de la construction et de l\'habitation.',
                      },
                      {
                        num: '02',
                        title: 'Vérification de la conformité',
                        desc: 'La surface calculée est comparée à celle qui figure dans les documents existants (titre de propriété, précédents baux, annonces). En cas d\'écart significatif, nous vous alertons immédiatement.',
                      },
                      {
                        num: '03',
                        title: 'Certificat de diagnostic',
                        desc: 'Un certificat officiel est émis avec la surface habitable exacte, le plan annoté par pièce, et les exclusions détaillées. Ce document doit être annexé au contrat de bail.',
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

                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { icon: Shield, title: 'Télémètre laser', desc: 'Mesures précises au centimètre, conformes au décret n°2002-120.' },
                      { icon: FileCheck, title: 'Certificat officiel', desc: 'Document certifié prêt à annexer au contrat de bail.' },
                      { icon: Clock, title: 'Rapport en 24h', desc: 'Transmis par email le lendemain pour ne pas retarder votre mise en location.' },
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

                {/* Exclusions */}
                <div id="exclusions" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Quelles surfaces sont exclues du calcul Boutin ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-6">
                    Contrairement à ce que l'on pourrait penser, la surface habitable Boutin n'est pas la superficie totale du logement. Les surfaces suivantes ne sont pas comptabilisées :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {exclusions.map(({ icon, label }) => (
                      <div key={label} className="flex items-start gap-3 bg-[#f8f8f8] rounded-xl p-4">
                        <span className="text-xl shrink-0">{icon}</span>
                        <p className="text-sm text-mygray leading-relaxed">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Choisir */}
                <div id="choisir" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Pourquoi choisir Meilleur Diag ?
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Bien que la loi n'impose pas formellement de recourir à un diagnostiqueur certifié pour le mesurage Boutin (contrairement au Carrez), faire appel à un professionnel offre une garantie que l'auto-mesurage ne peut pas fournir : en cas de contestation du locataire, un rapport professionnel constitue une <strong className="text-black">preuve opposable</strong> devant un tribunal.
                  </p>
                  <p className="text-mygray text-base leading-relaxed">
                    Nos diagnostiqueurs maîtrisent parfaitement les règles de calcul définies par le décret n°2002-120 du 30 janvier 2002. Ils interviennent rapidement sur l'ensemble de Paris et de l'Île-de-France, du lundi au dimanche, avec remise du rapport dans les 24 heures.
                  </p>
                </div>

                {/* Conclusion */}
                <div id="conclusion" className="mb-6">
                  <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Conclusion
                  </h2>
                  <p className="text-mygray text-base leading-relaxed mb-4">
                    Que vous soyez propriétaire d'un studio ou d'un grand appartement à Paris, un diagnostic Loi Boutin précis est la garantie d'une location sereine, respectueuse des droits et des obligations de chacun. Chez Meilleur Diag, nous faisons de la rigueur et de la transparence notre priorité — pour que vous puissiez louer en toute confiance.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-mygray leading-relaxed">
                        <strong className="text-black">Validité illimitée</strong> : le certificat Loi Boutin n'a pas de durée de validité légale. Il reste valable tant qu'aucun travaux modifiant la surface habitable n'est réalisé dans le logement. Un seul diagnostic pour des années de location !
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-black p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, system-ui' }}>Besoin d'un mesurage Loi Boutin ?</h3>
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
                    { label: 'Obligatoire', value: 'Location' },
                    { label: 'Type bien', value: 'Tous logements' },
                    { label: 'Validité', value: 'Illimitée*' },
                    { label: 'Rapport', value: 'Sous 24h' },
                    { label: 'Intervention', value: '7j/7' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-[#f0f0f0] last:border-0">
                      <span className="text-xs text-[#aaa] font-medium">{label}</span>
                      <span className="text-xs font-bold text-black">{value}</span>
                    </div>
                  ))}
                  <p className="text-[10px] text-[#bbb] mt-3 leading-relaxed">* Sauf travaux modifiant la surface</p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}