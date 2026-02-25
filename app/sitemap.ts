import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date('2026-01-22'),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/ria-compliance-software`,
            lastModified: new Date('2026-01-23'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/fca-compliance-software`,
            lastModified: new Date('2026-01-27'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/pricing`,
            lastModified: new Date('2026-01-27'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/uk`,
            lastModified: new Date('2026-01-27'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/uk/fca-compliance-software`,
            lastModified: new Date('2026-01-27'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/uk/pricing`,
            lastModified: new Date('2026-01-27'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Success page intentionally excluded from sitemap as it's not meant for direct navigation

        {
            url: `${SITE_URL}/features`,
            lastModified: new Date('2026-01-27'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/sample-audit-pack`,
            lastModified: new Date('2026-01-23'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date('2026-01-22'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: new Date('2026-01-22'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/privacy`,
            lastModified: new Date('2026-01-22'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/terms`,
            lastModified: new Date('2026-01-22'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}
