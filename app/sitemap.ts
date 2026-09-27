import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://la16casino.vercel.app/',
      lastModified: '2026-09-27',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
