import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.complyvault.co'

    return [
        {
            url: baseUrl,
            lastModified: new Date('2026-01-22'),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/ria-compliance-software`,
            lastModified: new Date('2026-01-23'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/fca-compliance-software`,
            lastModified: new Date('2026-01-27'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date('2026-01-27'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Success page intentionally excluded from sitemap as it's not meant for direct navigation

        {
            url: `${baseUrl}/sample-audit-pack`,
            lastModified: new Date('2026-01-23'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date('2026-01-22'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date('2026-01-22'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date('2026-01-22'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date('2026-01-22'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}
