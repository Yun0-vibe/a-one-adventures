import type { MetadataRoute } from 'next';
import { PACKAGES } from '@/lib/site';
import { SITE_URL } from './layout';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/packages', '/estimator', '/builder', '/routes', '/contact'];
  const pages: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r || '/'}`,
    lastModified: new Date(),
    changeFrequency: r === '' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
  for (const p of PACKAGES) {
    pages.push({
      url: `${SITE_URL}/packages/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }
  return pages;
}
