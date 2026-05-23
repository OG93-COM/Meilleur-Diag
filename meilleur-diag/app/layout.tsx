import type { Metadata, Viewport } from 'next'
import { Syne, Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

// ─── Viewport ────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffaa17',
}

// ─── Metadata globale ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://meilleur-diag.com'),

  title: {
    default: 'Diagnostic Immobilier Paris & Île-de-France | Meilleur Diag',
    template: '%s',
  },

  description:
    'Diagnostiqueur immobilier certifié à Paris et Île-de-France. Diagnostic DPE, Amiante, Plomb, Gaz, Électricité, Loi Carrez, Termites — devis gratuit, rapport en 24h.',

  keywords: [
    'diagnostic immobilier Paris',
    'DPE Paris',
    'diagnostic amiante Paris',
    'diagnostic plomb Paris',
    'diagnostic gaz Paris',
    'diagnostic électricité Paris',
    'diagnostiqueur certifié Paris',
    'devis diagnostic immobilier',
    'performance énergétique logement',
    'diagnostic obligatoire immobilier',
    'diagnostic immobilier île de France',
    'diagnostic vente Paris',
    'diagnostic location Paris',
  ],

  authors: [{ name: 'Meilleur Diag', url: 'https://meilleur-diag.com' }],
  creator: 'Meilleur Diag',
  publisher: 'Meilleur Diag',
  category: 'Diagnostic Immobilier',
  classification: 'Business',

  alternates: {
    canonical: 'https://meilleur-diag.com',
    languages: { 'fr-FR': 'https://meilleur-diag.com' },
  },

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://meilleur-diag.com',
    title: 'Diagnostic Immobilier Paris | Meilleur Diag',
    description:
      'Diagnostiqueur immobilier certifié à Paris et Île-de-France. DPE, Amiante, Plomb, Gaz, Électricité — devis gratuit, rapport en 24h.',
    siteName: 'Meilleur Diag',
    images: [
      {
        url: '/images/meilleur-diag-paris-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Meilleur Diag — Diagnostic Immobilier Paris & Île-de-France',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostic Immobilier Paris | Meilleur Diag',
    description:
      'Diagnostiqueur immobilier certifié à Paris et Île-de-France — rapport en 24h, devis gratuit.',
    images: ['/images/meilleur-diag-paris-og.jpg'],
    creator: '@MeilleurDiag',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  manifest: '/manifest.webmanifest',

  verification: {
    // Next.js gère la balise <meta> automatiquement — pas besoin de la mettre manuellement dans <head>
    google: 'lebaNbGYROfkzF0JoQGO1WpdkGnv7wG3plzBESHRHJY',
  },

  other: {
    'geo.region': 'FR-75',
    'geo.placename': 'Paris, Île-de-France',
    'geo.position': '48.8566;2.3522',
    'ICBM': '48.8566, 2.3522',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Meilleur Diag',
    'llms': 'https://meilleur-diag.com/llms.txt',
  },
}

// ─── Schema.org ──────────────────────────────────────────────────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://meilleur-diag.com/#business',
  name: 'Meilleur Diag',
  legalName: 'Meilleur Diag',
  description:
    'Diagnostiqueur immobilier certifié à Paris et Île-de-France. DPE, Amiante, Plomb, Gaz, Électricité, Loi Carrez, Termites — rapport en 24h, devis gratuit.',
  url: 'https://meilleur-diag.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://meilleur-diag.com/images/logo.png',
    width: 220,
    height: 80,
  },
  image: 'https://meilleur-diag.com/images/meilleur-diag-paris-og.jpg',
  telephone: '+33782326451',
  email: 'contact@meilleur-diag.com',
  founder: { '@type': 'Person', name: 'Mohamed Amine Kalai' },
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Carte bancaire, Virement',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    postalCode: '75000',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 48.8566, longitude: 2.3522 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+33782326451',
      contactType: 'customer service',
      contactOption: 'TollFree',
      areaServed: 'FR',
      availableLanguage: 'French',
    },
    {
      '@type': 'ContactPoint',
      email: 'contact@meilleur-diag.com',
      contactType: 'customer support',
      availableLanguage: 'French',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Paris' },
    { '@type': 'AdministrativeArea', name: 'Seine-Saint-Denis', identifier: '93' },
    { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine', identifier: '92' },
    { '@type': 'AdministrativeArea', name: 'Val-de-Marne', identifier: '94' },
    { '@type': 'AdministrativeArea', name: 'Yvelines', identifier: '78' },
    { '@type': 'AdministrativeArea', name: 'Essonne', identifier: '91' },
    { '@type': 'AdministrativeArea', name: "Val-d'Oise", identifier: '95' },
    { '@type': 'AdministrativeArea', name: 'Seine-et-Marne', identifier: '77' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Diagnostics Immobiliers Obligatoires',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DPE — Diagnostic de Performance Énergétique Paris', url: 'https://meilleur-diag.com/services/diagnostic-performance-energetique' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diagnostic Amiante Paris', url: 'https://meilleur-diag.com/services/diagnostic-amiante' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diagnostic Plomb (CREP) Paris', url: 'https://meilleur-diag.com/services/diagnostic-plomb' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diagnostic Électricité Paris', url: 'https://meilleur-diag.com/services/diagnostic-electricite' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diagnostic Gaz Paris', url: 'https://meilleur-diag.com/services/diagnostic-gaz' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diagnostic Termites Paris', url: 'https://meilleur-diag.com/services/diagnostic-termites' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mesurage Loi Carrez Paris', url: 'https://meilleur-diag.com/services/diagnostic-loi-carrez' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mesurage Loi Boutin Paris', url: 'https://meilleur-diag.com/services/diagnostic-loi-boutin' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP — État des Risques et Pollutions Paris', url: 'https://meilleur-diag.com/services/diagnostic-risques-naturels' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diagnostic Assainissement Paris', url: 'https://meilleur-diag.com/services/diagnostic-assainissement' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.facebook.com/MeilleurDiagParis',
    'https://www.linkedin.com/company/meilleur-diag',
    'https://maps.app.goo.gl/osMkb3EnE4pghWYt8',
    'https://fr.trustpilot.com/review/meilleur-diag.com',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels diagnostics sont obligatoires pour vendre un bien immobilier à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: "Pour vendre un bien à Paris, le Dossier de Diagnostic Technique (DDT) doit inclure : le DPE, le diagnostic Amiante (avant 1997), le diagnostic Plomb CREP (avant 1949), le diagnostic Électricité (installations +15 ans), le diagnostic Gaz (+15 ans), l'ERP, le diagnostic Termites (zones à risque) et la Loi Carrez pour les biens en copropriété." },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte un diagnostic immobilier à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: "Le prix varie selon le type de diagnostic et la surface du bien. Le DPE seul est compris entre 80 € et 150 €. Un pack vente complet revient moins cher qu'en commandant chaque diagnostic séparément. Demandez un devis gratuit en ligne sur meilleur-diag.com." },
    },
    {
      '@type': 'Question',
      name: 'Sous quel délai est livré le rapport de diagnostic ?',
      acceptedAnswer: { '@type': 'Answer', text: "Meilleur Diag s'engage à livrer votre rapport de diagnostic complet en moins de 24h après l'intervention. Nos diagnostiqueurs certifiés interviennent 7j/7 sur Paris et toute l'Île-de-France." },
    },
    {
      '@type': 'Question',
      name: 'Le diagnostic immobilier est-il obligatoire pour une location à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: "Oui. Pour toute mise en location à Paris, les diagnostics obligatoires sont : le DPE, le diagnostic Amiante, le CREP Plomb, le diagnostic Électricité et Gaz si les installations ont plus de 15 ans, l'ERP et le mesurage Loi Boutin." },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous le week-end pour les diagnostics immobiliers à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: "Oui, Meilleur Diag intervient 7 jours sur 7, y compris les week-ends et les jours fériés, dans tout Paris et en Île-de-France. Aucun supplément n'est appliqué hors heures ouvrées." },
    },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://meilleur-diag.com/#website',
  name: 'Meilleur Diag',
  url: 'https://meilleur-diag.com',
  description: 'Diagnostic immobilier certifié à Paris et Île-de-France',
  inLanguage: 'fr-FR',
  publisher: { '@id': 'https://meilleur-diag.com/#business' },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://meilleur-diag.com/services?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://meilleur-diag.com' }],
}

// ─── Layout ──────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      // Les variables CSS des fonts sont injectées ici — disponibles dans globals.css
      className={`${syne.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* DNS prefetch uniquement — plus de preconnect Google Fonts (self-hosted maintenant) */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Schema.org */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </head>

      <body className={`min-h-screen flex flex-col antialiased`}>
        <Navbar />
        {/* Pas de <main> ici — chaque page déclare son propre <main> */}
        {children}
        <Footer />
      </body>

      {/* GoogleAnalytics DOIT être dans <html> mais après <body> — c'est correct ici */}
      <GoogleAnalytics gaId="G-4RFX5C0L3S" />
    </html>
  )
}