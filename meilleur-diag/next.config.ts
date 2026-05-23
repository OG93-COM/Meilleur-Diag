/** @type {import('next').NextConfig} */

const nextConfig = {
  // Optimisation images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
  },

  // Compression
  compress: true,

  // Suppression des headers inutiles
  poweredByHeader: false,

  // Génération statique maximale
  output: 'standalone',
  
  async redirects() {
    return [
      // Ancien site HTML → nouvelles pages Next.js
      // Pages de services
      {
        source: '/services/diagnostic-performance-energetique-DPE.html',
        destination: '/services/diagnostic-performance-energetique',
        permanent: true,
      },
      {
        source: '/services/diagnostic-amiante.html',
        destination: '/services/diagnostic-amiante',
        permanent: true,
      },
      {
        source: '/services/diagnostic-plomb.html',
        destination: '/services/diagnostic-plomb',
        permanent: true,
      },
      {
        source: '/services/diagnostic-electrique.html',
        destination: '/services/diagnostic-electricite',
        permanent: true,
      },
      {
        source: '/services/diagnostic-GAZ.html',
        destination: '/services/diagnostic-gaz',
        permanent: true,
      },
      {
        source: '/services/diagnostic-termites.html',
        destination: '/services/diagnostic-termites',
        permanent: true,
      },
      {
        source: '/services/diagnostic-loi-carrez.html',
        destination: '/services/diagnostic-loi-carrez',
        permanent: true,
      },
      {
        source: '/services/diagnostic-loi-boutin.html',
        destination: '/services/diagnostic-loi-boutin',
        permanent: true,
      },
      {
        source: '/services/diagnostic-risques-naturels-ERP.html',
        destination: '/services/diagnostic-risques-naturels',
        permanent: true,
      },
      {
        source: '/services/diagnostic-assainissement.html',
        destination: '/services/diagnostic-assainissement',
        permanent: true,
      },
      // Pages diagnostics par ville
      {
        source: '/diagnostic-immo/diagnostic-immobilier-Seine-Saint-Denis.html',
        destination: '/diagnostic-immobilier/diagnostic-immobilier-seine-saint-denis',
        permanent: true,
      },
      {
        source: '/diagnostic-immo/diagnostic-immobilier-aulnay-sous-bois.html',
        destination: '/diagnostic-immobilier/diagnostic-immobilier-aulnay-sous-bois',
        permanent: true,
      },
      {
        source: '/diagnostic-immo/index.html',
        destination: '/diagnostic-immobilier',
        permanent: true,
      },
      {
        source: '/diagnostic-immo/',
        destination: '/diagnostic-immobilier',
        permanent: true,
      },
      // Page location
      {
        source: '/diagnostic-immobilier-location.html',
        destination: '/services',
        permanent: true,
      },
      // Pages contact et autres
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services/',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/index.html',
        destination: '/services',
        permanent: true,
      },
      // Redirection .html générique (catch-all pour les autres pages)
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },

  // Headers de sécurité et SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      // Cache agressif pour les assets statiques
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig