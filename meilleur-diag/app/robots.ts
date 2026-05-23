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
      {
        // Bloquer les bots IA qui scrapent le contenu
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
          'Google-Extended',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://meilleur-diag.com/sitemap.xml',
    host: 'https://meilleur-diag.com',
  }
}