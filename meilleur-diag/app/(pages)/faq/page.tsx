import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'
import FaqAccordion from '@/app/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ Diagnostic Immobilier Paris — Questions Fréquentes | Meilleur Diag',
  description:
    'Toutes les réponses à vos questions sur le diagnostic immobilier : DPE, Amiante, Plomb, Gaz, Électricité, prix, délais, validité. Meilleur Diag répond clairement.',
  keywords:
    'faq diagnostic immobilier, questions diagnostic immobilier paris, prix diagnostic immobilier, validité DPE, diagnostic obligatoire vente location, combien coûte diagnostic immobilier paris',
  alternates: { canonical: 'https://meilleur-diag.com/faq' },
  openGraph: {
    title: 'FAQ Diagnostic Immobilier Paris | Meilleur Diag',
    description: 'Toutes les réponses sur les diagnostics immobiliers obligatoires à Paris : prix, délais, validité, obligations.',
    url: 'https://meilleur-diag.com/faq',
    type: 'website',
    locale: 'fr_FR',
  },
}

export type FaqItem = { question: string; answer: string; links?: { label: string; href: string }[] }
export type FaqCategory = { id: string; title: string; emoji: string; items: FaqItem[] }

export const faqData: FaqCategory[] = [
  {
    id: 'obligations',
    title: 'Obligations légales',
    emoji: '⚖️',
    items: [
      {
        question: 'Quels diagnostics sont obligatoires pour vendre un bien immobilier à Paris ?',
        answer: 'Pour vendre un bien à Paris, vous devez fournir un Dossier de Diagnostic Technique (DDT) complet. Les diagnostics obligatoires dépendent de l\'âge et du type de bien, mais incluent généralement : le DPE (obligatoire depuis 2006), le diagnostic Amiante (biens construits avant 1997), le diagnostic Plomb ou CREP (biens construits avant 1949), le diagnostic Électricité (installations de plus de 15 ans), le diagnostic Gaz (installations de plus de 15 ans), l\'ERP (État des Risques et Pollutions), le diagnostic Termites (zones à risque), et la Loi Carrez pour les biens en copropriété.',
        links: [{ label: 'Voir tous nos diagnostics', href: '/services' }],
      },
      {
        question: 'Quels diagnostics sont obligatoires pour louer un appartement à Paris ?',
        answer: 'Pour une mise en location, les diagnostics obligatoires sont : le DPE (classe énergie obligatoire sur toutes les annonces depuis 2011), le diagnostic Amiante (avant 1997), le CREP plomb (avant 1949), le diagnostic Électricité (installations de plus de 15 ans, depuis juillet 2017), le diagnostic Gaz (installations de plus de 15 ans, depuis juillet 2017), l\'ERP, et le mesurage Loi Boutin (surface habitable à mentionner dans le bail).',
        links: [{ label: 'Pack Location', href: '/services' }],
      },
      {
        question: 'Est-ce que le diagnostic est obligatoire même si mon bien est récent ?',
        answer: 'Oui. Même pour un bien récent (construit après 1997), certains diagnostics restent obligatoires : le DPE, l\'ERP et la Loi Carrez (si copropriété en vente) ou la Loi Boutin (si location). Les diagnostics Amiante et Plomb ne s\'appliquent qu\'aux biens anciens, mais le DPE est universel. De même, si votre installation gaz ou électrique a plus de 15 ans — ce qui est possible même dans un bien récent — ces diagnostics sont également requis.',
      },
      {
        question: 'Que se passe-t-il si je vends sans les diagnostics obligatoires ?',
        answer: 'Vendre sans diagnostics vous expose à des risques juridiques sérieux. L\'acheteur peut invoquer un vice caché et demander la réduction du prix de vente, voire l\'annulation de la vente. Pour certains diagnostics (ERP notamment), l\'acheteur peut obtenir la résolution du contrat sans avoir à prouver un préjudice. Le notaire peut également refuser de procéder à la vente si le DDT est incomplet. En résumé : pas de diagnostics = transaction risquée.',
      },
      {
        question: 'Est-ce que les diagnostics sont à la charge du vendeur ou de l\'acheteur ?',
        answer: 'Les diagnostics immobiliers sont entièrement à la charge du vendeur (ou du bailleur pour la location). C\'est le vendeur qui mandate et paye le diagnostiqueur, et qui remet les rapports à l\'acheteur avant la signature. L\'acheteur n\'a rien à débourser pour les diagnostics lors d\'une acquisition.',
      },
    ],
  },
  {
    id: 'validite',
    title: 'Validité des diagnostics',
    emoji: '📅',
    items: [
      {
        question: 'Quelle est la durée de validité du DPE ?',
        answer: 'Le DPE est valable 10 ans. Cependant, les DPE réalisés avant le 1er janvier 2018 ne sont plus valables depuis le 1er janvier 2023. Ceux réalisés entre le 1er janvier 2018 et le 30 juin 2021 expirent le 31 décembre 2024. Si votre DPE a été réalisé après le 1er juillet 2021 (nouvelle méthode 3CL-DPE 2021), il est valable jusqu\'à 10 ans après sa date d\'établissement.',
        links: [{ label: 'En savoir plus sur le DPE', href: '/services/diagnostic-performance-energetique' }],
      },
      {
        question: 'Quelle est la validité du diagnostic amiante ?',
        answer: 'Si le diagnostic amiante conclut à l\'absence de matériaux amiantés (résultat négatif), il est valable sans limite de durée — pas besoin de le renouveler. En revanche, si de l\'amiante est détecté, une mise à jour peut être demandée, notamment si des travaux ont été réalisés ou si le diagnostic date d\'avant le 1er avril 2013 (ancienne réglementation).',
        links: [{ label: 'Diagnostic Amiante', href: '/services/diagnostic-amiante' }],
      },
      {
        question: 'Combien de temps est valable le diagnostic plomb (CREP) ?',
        answer: 'Le CREP est valable 1 an pour une vente et 6 ans pour une location, si du plomb est détecté au-dessus du seuil légal (1 mg/cm²). Si aucun plomb n\'est détecté, le diagnostic est valable sans limite de durée. Un seul diagnostic suffit donc si votre bien ne contient pas de plomb.',
        links: [{ label: 'Diagnostic Plomb', href: '/services/diagnostic-plomb' }],
      },
      {
        question: 'Quelle est la durée de validité des diagnostics électricité et gaz ?',
        answer: 'Le diagnostic électricité est valable 3 ans pour une vente et 6 ans pour une location. Le diagnostic gaz a la même durée de validité : 3 ans pour une vente et 6 ans pour une location. Si votre diagnostic a été réalisé dans ces délais et sans travaux sur l\'installation, il est toujours valable.',
      },
      {
        question: 'L\'ERP a-t-il une durée de validité ?',
        answer: 'Oui, l\'ERP (État des Risques et Pollutions) est valable seulement 6 mois. C\'est le diagnostic avec la durée de validité la plus courte, car les plans de prévention des risques peuvent évoluer. Si votre compromis de vente a été signé avec un ERP valide mais que l\'acte authentique intervient après 6 mois, un nouvel ERP doit être établi.',
        links: [{ label: 'Diagnostic ERP', href: '/services/diagnostic-risques-naturels' }],
      },
      {
        question: 'Est-ce que la Loi Carrez a une durée de validité ?',
        answer: 'La Loi Carrez n\'a pas de durée de validité légale — elle est valable indéfiniment. Mais attention : si des travaux ont modifié la surface du bien depuis le dernier mesurage (suppression ou ajout de cloisons, aménagement de combles…), un nouveau mesurage est indispensable. Une erreur de plus de 5 % donne à l\'acheteur le droit de demander une réduction du prix.',
        links: [{ label: 'Loi Carrez', href: '/services/diagnostic-loi-carrez' }],
      },
    ],
  },
  {
    id: 'prix',
    title: 'Prix et devis',
    emoji: '💶',
    items: [
      {
        question: 'Combien coûte un diagnostic immobilier à Paris ?',
        answer: 'Le prix d\'un diagnostic varie selon le type de diagnostic, la surface du bien et sa localisation. En moyenne, comptez entre 80 € et 150 € pour un DPE seul, 100 € à 180 € pour un diagnostic amiante, et 150 € à 300 € pour un diagnostic électricité ou gaz. Le pack vente complet (tous diagnostics en une intervention) revient souvent moins cher qu\'en commandant chaque diagnostic séparément. Demandez un devis gratuit pour une estimation précise selon votre bien.',
        links: [{ label: 'Devis gratuit en ligne', href: '/devis-diagnostic-immobilier' }],
      },
      {
        question: 'Est-ce que le devis est vraiment gratuit et sans engagement ?',
        answer: 'Oui, totalement. Notre formulaire de devis en ligne est gratuit et sans engagement. Vous remplissez les informations sur votre bien (type, surface, année de construction), et nous vous répondons avec un prix ferme, sans surprise. Vous n\'êtes pas obligé de confirmer la commande. Aucune carte bancaire n\'est demandée pour obtenir le devis.',
        links: [{ label: 'Demander un devis', href: '/devis-diagnostic-immobilier' }],
      },
      {
        question: 'Y a-t-il des frais de déplacement supplémentaires ?',
        answer: 'Non. Nos tarifs sont affichés toutes charges comprises pour Paris et l\'ensemble de l\'Île-de-France. Pas de frais de déplacement cachés, pas de supplément week-end ou jours fériés. Le prix indiqué dans votre devis est le prix final.',
      },
      {
        question: 'Est-ce moins cher de commander plusieurs diagnostics en même temps ?',
        answer: 'Oui, en général. Regrouper tous vos diagnostics en une seule intervention (pack vente ou pack location) est plus économique qu\'en commander un par un, car le déplacement et la durée d\'intervention sont mutualisés. C\'est aussi plus pratique : une seule visite, un seul rapport groupé remis au notaire.',
        links: [{ label: 'Voir nos packs', href: '/services' }],
      },
      {
        question: 'Peut-on négocier le prix avec votre société ?',
        answer: 'Nos tarifs sont déjà optimisés et parmi les plus compétitifs du marché parisien. Pour les volumes importants (agences immobilières, marchands de biens, gestionnaires de patrimoine), nous proposons des tarifs préférentiels. Contactez-nous directement pour discuter d\'une collaboration régulière.',
      },
    ],
  },
  {
    id: 'intervention',
    title: 'Intervention et délais',
    emoji: '🚀',
    items: [
      {
        question: 'Sous quel délai pouvez-vous intervenir à Paris ?',
        answer: 'En général, nous pouvons intervenir dans les 48 heures suivant votre demande, souvent le lendemain selon notre planning. Pour les urgences (vente rapide, notaire attendant le DDT), nous faisons notre possible pour intervenir le jour même ou sous 24h. Contactez-nous directement par téléphone pour les demandes urgentes.',
      },
      {
        question: 'Combien de temps dure une visite de diagnostic ?',
        answer: 'La durée varie selon le nombre de diagnostics commandés et la superficie du bien. Un DPE seul prend généralement 45 minutes à 1h30. Un pack vente complet (tous diagnostics) peut prendre 2h à 3h pour un appartement de 80 m². Nos diagnostiqueurs s\'adaptent à vos contraintes et peuvent intervenir en votre absence si nécessaire.',
      },
      {
        question: 'Faut-il être présent lors de l\'intervention ?',
        answer: 'Votre présence n\'est pas obligatoire. Vous pouvez confier les clés à quelqu\'un de confiance (agent immobilier, gardien, voisin). En revanche, il est préférable que quelqu\'un sur place puisse donner accès à toutes les pièces — caves, combles, locaux techniques — car l\'inspection doit être la plus complète possible. Si certaines zones sont inaccessibles, cela sera mentionné dans le rapport.',
      },
      {
        question: 'Combien de temps après la visite reçois-je mon rapport ?',
        answer: 'Vous recevez votre rapport complet par email dans les 24 heures suivant l\'intervention, en général le lendemain matin. Pour les diagnostics très simples (Loi Carrez, ERP), la remise peut être encore plus rapide. Le rapport est au format PDF, directement utilisable pour votre notaire ou votre agence.',
      },
      {
        question: 'Intervenez-vous le week-end et les jours fériés ?',
        answer: 'Oui, nous intervenons 7 jours sur 7, y compris les week-ends et les jours fériés. Beaucoup de propriétaires et de locataires ne sont disponibles que le week-end — nous nous adaptons à vos contraintes sans supplément de prix.',
      },
      {
        question: 'Puis-je programmer plusieurs diagnostics en une seule visite ?',
        answer: 'Absolument, et c\'est même ce que nous recommandons. En une seule visite, nos diagnostiqueurs peuvent réaliser l\'ensemble des diagnostics requis pour votre DDT : DPE, amiante, plomb, électricité, gaz, ERP, Loi Carrez ou Boutin. C\'est plus pratique pour vous, moins coûteux, et vous recevez un dossier complet d\'un coup.',
      },
    ],
  },
  {
    id: 'dpe',
    title: 'DPE — Diagnostic de Performance Énergétique',
    emoji: '⚡',
    items: [
      {
        question: 'Que se passe-t-il si mon logement est classé F ou G au DPE ?',
        answer: 'Un logement classé F ou G est officiellement désigné "passoire thermique". Depuis le 1er janvier 2025, les logements classés G (consommation supérieure à 450 kWh/m²/an) ne peuvent plus être mis en location. Les logements F seront concernés à partir du 1er janvier 2028. Pour la vente, il n\'y a pas d\'interdiction, mais la classe DPE impacte directement la valeur du bien et peut freiner les acheteurs. Des travaux de rénovation énergétique peuvent améliorer la classe.',
        links: [{ label: 'En savoir plus sur le DPE', href: '/services/diagnostic-performance-energetique' }],
      },
      {
        question: 'Le DPE est-il fiable ? Peut-on contester les résultats ?',
        answer: 'Depuis la réforme du 1er juillet 2021, le DPE est juridiquement opposable — c\'est-à-dire que si les résultats s\'avèrent erronés, le diagnostiqueur et son assureur peuvent être tenus responsables. Nos diagnostiqueurs certifiés utilisent la méthode 3CL-DPE 2021 agréée par le Ministère du Logement. Si vous contestez un DPE, vous pouvez en commander un second auprès d\'un autre diagnostiqueur certifié. En cas de litige, l\'ADEME dispose d\'un observatoire national des DPE.',
      },
      {
        question: 'Dois-je afficher la classe DPE dans mon annonce immobilière ?',
        answer: 'Oui, c\'est obligatoire depuis le 1er janvier 2011. La classe énergie (A à G) et la classe climat (émissions de CO₂) doivent figurer sur toutes les annonces immobilières, qu\'elles soient publiées sur internet, dans les agences, ou dans la presse. À partir de 2022, les annonces de logements classés F et G doivent également mentionner le montant estimé des charges annuelles d\'énergie.',
      },
      {
        question: 'Peut-on améliorer la classe DPE de son logement ?',
        answer: 'Oui. La classe DPE dépend principalement de l\'isolation et des systèmes de chauffage/ventilation. Les travaux les plus efficaces pour améliorer votre classe sont : l\'isolation des murs, toiture et planchers, le remplacement des fenêtres par du double vitrage, le changement de chaudière pour un système plus efficace (pompe à chaleur, chaudière à condensation), et l\'installation d\'une VMC. Des aides financières existent : MaPrimeRénov\', éco-PTZ, TVA à 5,5 %, CEE.',
      },
    ],
  },
  {
    id: 'diagnostiqueur',
    title: 'Notre société et nos diagnostiqueurs',
    emoji: '🏆',
    items: [
      {
        question: 'Comment vérifier que votre diagnostiqueur est bien certifié ?',
        answer: 'Tous nos diagnostiqueurs sont certifiés par des organismes de certification accrédités par le COFRAC (Comité Français d\'Accréditation). Leurs certificats sont nominatifs, datés et disponibles sur demande. Vous pouvez également vérifier la certification d\'un diagnostiqueur sur le site de l\'un des organismes de certification agréés (Dekra, Bureau Veritas, Certibat…). Un diagnostiqueur non certifié ne peut légalement pas délivrer de rapports valables.',
      },
      {
        question: 'Vos diagnostics sont-ils reconnus par les notaires et les agences immobilières ?',
        answer: 'Oui, nos rapports sont conformes aux normes réglementaires en vigueur et sont acceptés par tous les notaires, agences immobilières et tribunaux en France. Nos diagnostiqueurs sont certifiés, nos rapports portent les mentions légales requises, et les données DPE sont transmises à l\'ADEME conformément à l\'obligation légale.',
      },
      {
        question: 'Que faire si mon rapport de diagnostic contient une erreur ?',
        answer: 'Contactez-nous immédiatement par email ou téléphone. Si une erreur est avérée (erreur de mesure, omission d\'une zone, données incorrectes), nous intervenons pour corriger le rapport sans frais supplémentaires. Nos diagnostiqueurs sont assurés en responsabilité civile professionnelle pour couvrir toute erreur ou omission pouvant causer un préjudice.',
      },
      {
        question: 'Dans quelles zones intervenez-vous ?',
        answer: 'Nous intervenons dans tout Paris intramuros (75) et tous les départements d\'Île-de-France : Seine-Saint-Denis (93), Hauts-de-Seine (92), Val-de-Marne (94), Yvelines (78), Essonne (91), Val-d\'Oise (95) et Seine-et-Marne (77). Aucun frais de déplacement supplémentaire quelle que soit la commune.',
        links: [{ label: 'Voir nos zones d\'intervention', href: '/diagnostic-immobilier' }],
      },
      {
        question: 'Proposez-vous des tarifs spéciaux pour les professionnels ?',
        answer: 'Oui. Les agences immobilières, marchands de biens, gestionnaires de patrimoine et promoteurs qui font appel à nous régulièrement bénéficient de tarifs préférentiels et d\'un service prioritaire. Contactez-nous pour discuter d\'un partenariat adapté à votre volume de diagnostics.',
      },
    ],
  },
]

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.flatMap(({ items }) =>
      items.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      }))
    ),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <PageHeader
          title="Questions Fréquentes sur le Diagnostic Immobilier"
          subtitle="Tout ce que vous devez savoir sur les diagnostics immobiliers obligatoires — prix, délais, validité, obligations légales. Des réponses claires, sans jargon."
          crumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'FAQ' },
          ]}
        />

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">

              {/* FAQ Content */}
              <div className="space-y-12">
                {faqData.map((category) => (
                  <div key={category.id} id={category.id} className="scroll-mt-28">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl">{category.emoji}</span>
                      <h2 className="text-xl font-bold text-[#222429]" style={{ fontFamily: 'Syne, system-ui' }}>
                        {category.title}
                      </h2>
                    </div>
                    <FaqAccordion items={category.items} />
                  </div>
                ))}

                {/* CTA bottom */}
                <div className="rounded-2xl bg-[#222429] p-7">
                  <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Syne, system-ui' }}>
                    Vous n'avez pas trouvé votre réponse ?
                  </h3>
                  <p className="text-white/50 text-sm mb-5 leading-relaxed">
                    Notre équipe répond à toutes vos questions — 7j/7, par téléphone ou email. Nous vous rappelons aussi gratuitement si vous le souhaitez.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/devis-diagnostic-immobilier" className="btn-primary px-5 py-3 rounded-xl text-sm">
                      Demander un devis <ArrowRight size={15} />
                    </Link>
                    <a href="tel:+33782326451" className="inline-flex items-center gap-2 border border-white/15 text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-white/5 transition-colors">
                      <Phone size={15} /> 07 82 32 64 51
                    </a>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-28 space-y-4">
                {/* Nav catégories */}
                <div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#ebebeb]">
                  <h3 className="font-bold text-sm text-[#222429] uppercase tracking-wide mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Catégories
                  </h3>
                  <nav className="space-y-1">
                    {faqData.map(({ id, title, emoji }) => (
                      <Link
                        key={id}
                        href={`#${id}`}
                        className="flex items-center gap-2 text-sm text-[#686a6f] hover:text-[#ffaa17] transition-colors py-1.5 group"
                      >
                        <span className="text-base">{emoji}</span>
                        <span>{title}</span>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Quick contact */}
                <div className="bg-[#222429] rounded-2xl p-6">
                  <h3 className="font-bold text-white text-sm mb-1" style={{ fontFamily: 'Syne, system-ui' }}>Une question précise ?</h3>
                  <p className="text-white/40 text-xs mb-4">Nous répondons 7j/7</p>
                  <a href="tel:+33782326451" className="flex items-center justify-center gap-2 w-full btn-primary rounded-xl py-3 text-sm mb-2">
                    <Phone size={14} /> 07 82 32 64 51
                  </a>
                  <Link href="/devis-diagnostic-immobilier" className="flex items-center justify-center gap-2 w-full border border-white/10 text-white/70 hover:text-white text-sm font-medium py-3 rounded-xl hover:bg-white/5 transition-colors">
                    Devis en ligne <ArrowRight size={13} />
                  </Link>
                </div>

                {/* Liens utiles */}
                <div className="bg-white rounded-2xl p-6 border border-[#ebebeb]">
                  <h3 className="font-bold text-sm text-[#222429] uppercase tracking-wide mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Pages utiles
                  </h3>
                  {[
                    { label: 'Tous nos services', href: '/services' },
                    { label: 'DPE Paris', href: '/services/diagnostic-performance-energetique' },
                    { label: 'Diagnostic Amiante', href: '/services/diagnostic-amiante' },
                    { label: 'Diagnostic Plomb', href: '/services/diagnostic-plomb' },
                    { label: 'Qui est Meilleur Diag ?', href: '/a-propos' },
                    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
                  ].map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center justify-between py-2 border-b border-[#f0f0f0] last:border-0 text-sm text-[#686a6f] hover:text-[#ffaa17] transition-colors group"
                    >
                      {label}
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
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