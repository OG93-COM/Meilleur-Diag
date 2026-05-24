import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/devis/confirmation',
          '/admin/',
        ],
      },
    ],
    sitemap: 'https://meilleur-diag.com/sitemap.xml',
    host: 'https://meilleur-diag.com',
  }
}