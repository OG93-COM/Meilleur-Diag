import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Diagnostic Immobilier Paris | Meilleur Diag',
  description: 'Diagnostiqueur Immobilier certifié à Paris et Île-de-France. DPE, Amiante, Plomb, Gaz, Électricité, Loi-Carrez, Termites. Devis gratuit, intervention 7j/7, rapport en 24h.',
  keywords: 'diagnostic immobilier Paris, DPE Paris, diagnostic amiante Paris, diagnostic plomb Paris, diagnostic gaz Paris, diagnostic électricité Paris, diagnostiqueur certifié Paris, devis diagnostic immobilier, performance énergétique logement, diagnostic obligatoire immobilier, île de France',
  authors: [{ name: 'Meilleur Diag' }],
  creator: 'Meilleur Diag',
  publisher: 'Meilleur Diag',
  metadataBase: new URL('https://meilleur-diag.com'),
  alternates: {
    canonical: 'https://meilleur-diag.com',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://meilleur-diag.com',
    title: 'Diagnostic Immobilier Paris | Meilleur Diag',
    description: 'Diagnostiqueur Immobilier certifié à Paris et Île-de-France. DPE, Amiante, Plomb, Gaz, Électricité. Devis gratuit.',
    siteName: 'Meilleur Diag',
    images: [{ url: '/images/Meilleur-Diag-OG.jpg', alt: 'Diagnostic immobilier à Paris' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostic Immobilier Paris | Meilleur Diag',
    description: 'Diagnostiqueur Immobilier certifié à Paris et Île-de-France.',
    images: ['/images/Meilleur-Diag-OG.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'LocalBusiness',
              name: 'Meilleur Diag',
              description: 'Spécialistes du diagnostic immobilier à Paris et île de France',
              url: 'https://www.meilleur-diag.com/',
              logo: 'https://www.meilleur-diag.com/images/logo.png',
              telephone: '+33782326451',
              email: 'contact@meilleur-diag.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Paris',
                addressRegion: 'Île-de-France',
                addressCountry: 'FR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+33782326451',
                contactType: 'Devis Gratuit',
                email: 'contact@meilleur-diag.com',
                availableLanguage: 'French',
              },
              sameAs: [
                'https://www.facebook.com/MeilleurDiagParis',
                'https://www.linkedin.com/company/meilleur-diag',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Quels diagnostics sont obligatoires pour vendre un bien immobilier à Paris ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Pour la vente d\'un bien immobilier à Paris, les diagnostics obligatoires comprennent : le DPE (Diagnostic de Performance Énergétique), le diagnostic Amiante (pour les biens construits avant 1997), le diagnostic Plomb (pour les biens construits avant 1949), le diagnostic Électricité (installations de plus de 15 ans), le diagnostic Gaz, le diagnostic Termites, l\'ERP (État des Risques et Pollutions) et la Loi Carrez pour les biens en copropriété.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Combien coûte un diagnostic immobilier à Paris ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Le prix d\'un diagnostic immobilier à Paris dépend du type de diagnostic et de la surface du bien. Meilleur Diag propose des tarifs compétitifs avec des packs diagnostics complets pour la vente ou la location. Demandez un devis gratuit en ligne.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Sous quel délai est livré le rapport de diagnostic ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Meilleur Diag s\'engage à vous livrer votre rapport de diagnostic complet en moins de 24h après l\'intervention. Nos diagnostiqueurs certifiés interviennent 7j/7 sur Paris et toute l\'Île-de-France.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}