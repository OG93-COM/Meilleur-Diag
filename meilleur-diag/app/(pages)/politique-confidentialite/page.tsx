import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Mail, Phone, Lock, Eye, Trash2, FileText, AlertCircle } from 'lucide-react'
import PageHeader from '@/app/components/PageHeader'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Meilleur Diag',
  description:
    'Politique de confidentialité de Meilleur Diag. Comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.',
  alternates: { canonical: 'https://meilleur-diag.com/politique-confidentialite' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Politique de Confidentialité | Meilleur Diag',
    description: 'Découvrez comment Meilleur Diag protège vos données personnelles.',
    url: 'https://meilleur-diag.com/politique-confidentialite',
    type: 'website',
    locale: 'fr_FR',
  },
}

const sections = [
  {
    id: 'responsable',
    icon: Shield,
    title: 'Qui est responsable de vos données ?',
    content: (
      <div className="space-y-3">
        <p className="text-[#686a6f] text-base leading-relaxed">
          Le responsable du traitement de vos données personnelles est :
        </p>
        <div className="bg-[#f8f8f8] rounded-2xl p-5 space-y-2">
          <p className="text-sm text-[#686a6f]"><strong className="text-[#222429]">Société :</strong> Meilleur Diag</p>
          <p className="text-sm text-[#686a6f]"><strong className="text-[#222429]">Zone d'intervention :</strong> Paris & Île-de-France</p>
          <p className="text-sm text-[#686a6f]"><strong className="text-[#222429]">Email :</strong> <a href="mailto:contact@meilleur-diag.com" className="text-[#ffaa17] hover:underline">contact@meilleur-diag.com</a></p>
          <p className="text-sm text-[#686a6f]"><strong className="text-[#222429]">Téléphone :</strong> <a href="tel:+33782326451" className="text-[#ffaa17] hover:underline">07 82 32 64 51</a></p>
        </div>
        <p className="text-[#686a6f] text-sm leading-relaxed">
          Nous nous engageons à traiter vos données dans le strict respect du <strong className="text-[#222429]">Règlement Général sur la Protection des Données (RGPD)</strong> et de la loi Informatique et Libertés du 6 janvier 1978 modifiée.
        </p>
      </div>
    ),
  },
  {
    id: 'collecte',
    icon: FileText,
    title: 'Quelles données collectons-nous ?',
    content: (
      <div className="space-y-4">
        <p className="text-[#686a6f] text-base leading-relaxed">
          Nous collectons uniquement les données nécessaires à la réalisation de nos services et au traitement de vos demandes.
        </p>
        <div className="space-y-3">
          {[
            {
              title: 'Via le formulaire de devis',
              items: ['Nom et prénom', 'Adresse email', 'Numéro de téléphone', 'Adresse du bien immobilier', 'Type de bien, surface, année de construction', 'Type de diagnostic souhaité'],
            },
            {
              title: 'Via le formulaire de contact',
              items: ['Nom et prénom', 'Adresse email', 'Message et objet de la demande'],
            },
            {
              title: 'Données de navigation (automatiques)',
              items: ['Adresse IP', 'Type de navigateur et appareil', 'Pages visitées et durée de visite', 'Source de la visite (Google, réseaux sociaux…)'],
            },
          ].map(({ title, items }) => (
            <div key={title} className="bg-[#f8f8f8] rounded-2xl p-5">
              <h4 className="font-bold text-sm text-[#222429] mb-3" style={{ fontFamily: 'Syne, system-ui' }}>{title}</h4>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#686a6f]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffaa17] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'utilisation',
    icon: Eye,
    title: 'Pourquoi utilisons-nous vos données ?',
    content: (
      <div className="space-y-4">
        <p className="text-[#686a6f] text-base leading-relaxed">
          Vos données sont utilisées uniquement dans le cadre de nos activités de diagnostic immobilier. Voici les finalités précises :
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { num: '01', title: 'Répondre à votre demande de devis', desc: 'Traiter votre demande, établir un devis personnalisé et organiser l\'intervention.' },
            { num: '02', title: 'Réaliser votre diagnostic', desc: 'Coordonner l\'intervention de nos diagnostiqueurs et vous remettre vos rapports.' },
            { num: '03', title: 'Communication commerciale', desc: 'Vous envoyer des informations sur nos services, uniquement si vous y avez consenti.' },
            { num: '04', title: 'Améliorer notre site', desc: 'Analyser les données de navigation pour améliorer l\'expérience utilisateur.' },
            { num: '05', title: 'Obligations légales', desc: 'Conserver certaines données pour répondre à nos obligations comptables et fiscales.' },
            { num: '06', title: 'Prévenir la fraude', desc: 'Protéger nos services contre les utilisations abusives ou frauduleuses.' },
          ].map(({ num, title, desc }) => (
            <div key={num} className="flex gap-4 bg-[#f8f8f8] rounded-2xl p-4">
              <span className="text-xl font-bold text-[#222429]/10 shrink-0 leading-none" style={{ fontFamily: 'Syne, system-ui' }}>{num}</span>
              <div>
                <h4 className="font-bold text-sm text-[#222429] mb-1" style={{ fontFamily: 'Syne, system-ui' }}>{title}</h4>
                <p className="text-xs text-[#686a6f] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex gap-3">
          <Shield size={18} className="text-emerald-500 shrink-0 mt-0.5" />
          <p className="text-sm text-[#686a6f] leading-relaxed">
            <strong className="text-[#222429]">Engagement fort :</strong> nous ne vendons jamais vos données à des tiers. Vos informations ne sont pas transmises à des partenaires commerciaux à des fins publicitaires.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'duree',
    icon: Lock,
    title: 'Combien de temps conservons-nous vos données ?',
    content: (
      <div className="space-y-4">
        <p className="text-[#686a6f] text-base leading-relaxed">
          Nous appliquons des durées de conservation strictement proportionnelles à la finalité du traitement :
        </p>
        <div className="space-y-2">
          {[
            { label: 'Données de devis et de contact', duree: '3 ans', detail: 'À compter du dernier contact ou de la fin de la relation commerciale.' },
            { label: 'Données de facturation', duree: '10 ans', detail: 'Conformément aux obligations comptables et fiscales françaises.' },
            { label: 'Rapports de diagnostic', duree: 'Durée légale du diagnostic', detail: 'Selon la validité réglementaire de chaque diagnostic (6 mois à illimitée).' },
            { label: 'Données de navigation', duree: '13 mois maximum', detail: 'Conformément aux recommandations de la CNIL pour les cookies analytiques.' },
            { label: 'Consentement marketing', duree: '3 ans', detail: 'À compter de l\'obtention du consentement ou du dernier clic sur nos communications.' },
          ].map(({ label, duree, detail }) => (
            <div key={label} className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#f8f8f8] rounded-xl p-4 gap-2">
              <div className="flex-1">
                <p className="font-semibold text-sm text-[#222429]">{label}</p>
                <p className="text-xs text-[#aaa] mt-0.5">{detail}</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#ffaa17]/10 text-[#e09200] shrink-0">
                {duree}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'droits',
    icon: Trash2,
    title: 'Quels sont vos droits ?',
    content: (
      <div className="space-y-4">
        <p className="text-[#686a6f] text-base leading-relaxed">
          Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles. Pour exercer l'un de ces droits, envoyez-nous un email à <a href="mailto:contact@meilleur-diag.com" className="text-[#ffaa17] hover:underline font-semibold">contact@meilleur-diag.com</a>.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: 'Droit d\'accès', desc: 'Obtenir une copie de toutes les données personnelles que nous détenons sur vous.' },
            { title: 'Droit de rectification', desc: 'Corriger des données inexactes ou incomplètes vous concernant.' },
            { title: 'Droit à l\'effacement', desc: 'Demander la suppression de vos données (sous réserve de nos obligations légales).' },
            { title: 'Droit à la portabilité', desc: 'Recevoir vos données dans un format structuré et lisible par machine.' },
            { title: 'Droit d\'opposition', desc: 'Vous opposer au traitement de vos données à des fins de prospection commerciale.' },
            { title: 'Droit de limitation', desc: 'Demander la suspension temporaire du traitement de vos données.' },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-[#f8f8f8] rounded-xl p-4">
              <h4 className="font-bold text-sm text-[#222429] mb-1" style={{ fontFamily: 'Syne, system-ui' }}>{title}</h4>
              <p className="text-xs text-[#686a6f] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex gap-3">
          <AlertCircle size={18} className="text-blue-500 shrink-0 mt-0.5" />
          <p className="text-sm text-[#686a6f] leading-relaxed">
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la <strong className="text-[#222429]">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) sur <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#ffaa17] hover:underline">www.cnil.fr</a>.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'cookies',
    icon: Eye,
    title: 'Cookies et traceurs',
    content: (
      <div className="space-y-4">
        <p className="text-[#686a6f] text-base leading-relaxed">
          Notre site utilise des cookies — de petits fichiers texte stockés sur votre navigateur — pour améliorer votre expérience et analyser notre audience.
        </p>
        <div className="space-y-3">
          {[
            {
              type: 'Cookies strictement nécessaires',
              required: true,
              desc: 'Indispensables au fonctionnement du site (sécurité, session, préférences de navigation). Ils ne peuvent pas être désactivés.',
            },
            {
              type: 'Cookies analytiques',
              required: false,
              desc: 'Google Analytics — mesure de l\'audience (pages visitées, durée, source du trafic). Anonymisés, ne permettent pas de vous identifier personnellement.',
            },
            {
              type: 'Cookies de performance',
              required: false,
              desc: 'Permettent d\'améliorer la vitesse et la stabilité du site en identifiant les pages lentes ou les erreurs.',
            },
          ].map(({ type, required, desc }) => (
            <div key={type} className="bg-[#f8f8f8] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-sm text-[#222429]" style={{ fontFamily: 'Syne, system-ui' }}>{type}</h4>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${required ? 'bg-[#222429] text-white' : 'bg-[#ebebeb] text-[#686a6f]'}`}>
                  {required ? 'Obligatoire' : 'Optionnel'}
                </span>
              </div>
              <p className="text-sm text-[#686a6f] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#686a6f] leading-relaxed">
          Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur. La désactivation des cookies optionnels n'affecte pas le fonctionnement du site.
        </p>
      </div>
    ),
  },
  {
    id: 'securite',
    icon: Lock,
    title: 'Comment protégeons-nous vos données ?',
    content: (
      <div className="space-y-4">
        <p className="text-[#686a6f] text-base leading-relaxed">
          La sécurité de vos données est une priorité. Nous mettons en œuvre des mesures techniques et organisationnelles adaptées :
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: 'Chiffrement SSL/TLS', desc: 'Toutes les données échangées avec notre site sont chiffrées via le protocole HTTPS.' },
            { label: 'Accès restreint', desc: 'Seuls les collaborateurs ayant besoin d\'accéder à vos données y ont accès, dans le cadre strict de leur mission.' },
            { label: 'Hébergement sécurisé', desc: 'Nos données sont hébergées sur des serveurs situés en Europe, conformes au RGPD.' },
            { label: 'Sauvegardes régulières', desc: 'Des sauvegardes automatiques sont réalisées pour éviter toute perte de données.' },
          ].map(({ label, desc }) => (
            <div key={label} className="flex items-start gap-3 bg-[#f8f8f8] rounded-xl p-4">
              <Shield size={15} className="text-[#ffaa17] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-[#222429] mb-0.5">{label}</p>
                <p className="text-xs text-[#686a6f] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'modification',
    icon: FileText,
    title: 'Modification de cette politique',
    content: (
      <div className="space-y-3">
        <p className="text-[#686a6f] text-base leading-relaxed">
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment, notamment pour nous conformer à de nouvelles obligations légales ou à l'évolution de nos pratiques.
        </p>
        <p className="text-[#686a6f] text-base leading-relaxed">
          En cas de modification substantielle, nous vous en informerons par email (si vous avez un compte ou si vous êtes abonné à nos communications) ou par un avis visible sur notre site.
        </p>
        <p className="text-sm text-[#686a6f]">
          <strong className="text-[#222429]">Dernière mise à jour :</strong> janvier 2026
        </p>
      </div>
    ),
  },
]

const toc = sections.map(({ id, title }) => ({ id, label: title }))

export default function PolitiqueConfidentialitePage() {
  return (
    <main>
      <PageHeader
        title="Politique de Confidentialité"
        subtitle="Comment Meilleur Diag collecte, utilise et protège vos données personnelles — conformément au RGPD et à la loi Informatique et Libertés."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Politique de Confidentialité' },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">

            {/* Content */}
            <div className="space-y-12">
              {sections.map(({ id, icon: Icon, title, content }) => (
                <div key={id} id={id} className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-[#ffaa17]/10 flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-[#ffaa17]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#222429]" style={{ fontFamily: 'Syne, system-ui' }}>
                      {title}
                    </h2>
                  </div>
                  {content}
                </div>
              ))}

              {/* Contact block */}
              <div className="rounded-2xl bg-[#222429] p-7">
                <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Syne, system-ui' }}>
                  Une question sur vos données ?
                </h3>
                <p className="text-white/50 text-sm mb-5 leading-relaxed">
                  Notre équipe répond à toute demande relative à vos données personnelles dans un délai maximum de 30 jours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:contact@meilleur-diag.com" className="btn-primary px-5 py-3 rounded-xl text-sm">
                    <Mail size={15} /> contact@meilleur-diag.com
                  </a>
                  <a href="tel:+33782326451" className="inline-flex items-center gap-2 border border-white/15 text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-white/5 transition-colors">
                    <Phone size={15} /> 07 82 32 64 51
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar TOC */}
            <aside className="lg:sticky lg:top-28 space-y-4">
              <div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#ebebeb]">
                <h3 className="font-bold text-sm text-[#222429] uppercase tracking-wide mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                  Sommaire
                </h3>
                <nav className="space-y-1">
                  {toc.map(({ id, label }) => (
                    <Link
                      key={id}
                      href={`#${id}`}
                      className="flex items-start gap-2 text-sm text-[#686a6f] hover:text-[#ffaa17] transition-colors py-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#ddd] group-hover:bg-[#ffaa17] transition-colors shrink-0 mt-2" />
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="bg-[#ffaa17]/5 border border-[#ffaa17]/20 rounded-2xl p-5">
                <p className="text-xs text-[#686a6f] leading-relaxed">
                  <strong className="text-[#222429]">Vos droits en bref :</strong> accès, rectification, effacement, portabilité, opposition. Contactez-nous à tout moment.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}