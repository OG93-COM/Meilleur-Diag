import { MetadataRoute } from 'next'

const BASE_URL = 'https://meilleur-diag.com'

const services = [
  'diagnostic-performance-energetique',
  'diagnostic-amiante',
  'diagnostic-plomb',
  'diagnostic-electricite',
  'diagnostic-gaz',
  'diagnostic-termites',
  'diagnostic-loi-carrez',
  'diagnostic-loi-boutin',
  'diagnostic-risques-naturels',
  'diagnostic-assainissement',
]

const villes = [
  'diagnostic-immobilier-seine-saint-denis',
  'diagnostic-immobilier-aulnay-sous-bois',
  'diagnostic-immobilier-hauts-de-seine',
  'diagnostic-immobilier-val-de-marne',
  'diagnostic-immobilier-yvelines',
  'diagnostic-immobilier-essonne',
  'diagnostic-immobilier-val-doise',
  'diagnostic-immobilier-seine-et-marne',
  'diagnostic-immobilier-saint-denis',
  'diagnostic-immobilier-montreuil',
  'diagnostic-immobilier-vincennes',
  'diagnostic-immobilier-boulogne-billancourt',
  'diagnostic-immobilier-versailles',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/devis-diagnostic-immobilier`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/diagnostic-immobilier-paris`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/diagnostic-immobilier`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/politique-confidentialite`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Pages services
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Pages villes
  const villePages: MetadataRoute.Sitemap = villes.map((slug) => ({
    url: `${BASE_URL}/diagnostic-immobilier/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...servicePages, ...villePages]
}