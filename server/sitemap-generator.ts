import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

interface SitemapLink {
    url: string;
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
    lastmod?: string;
}

export async function generateSitemap(): Promise<string> {
    const hostname = 'https://www.sharezet.com';

    const links = [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/about', changefreq: 'monthly', priority: 0.9 },
        { url: '/use-cases', changefreq: 'monthly', priority: 0.9 },
        { url: '/documentation', changefreq: 'monthly', priority: 0.7 },
        { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
        { url: '/terms-of-service', changefreq: 'yearly', priority: 0.3 },
        { url: '/cookies-policy', changefreq: 'yearly', priority: 0.3 },
        { url: '/room', changefreq: 'weekly', priority: 0.8 },
    ];

    try {
        const stream = new SitemapStream({ hostname });
        const xmlString = await streamToPromise(
            Readable.from(links).pipe(stream)
        ).then((data: any) => data.toString());

        return xmlString;
    } catch (error) {
        console.error('Sitemap generation error:', error);
        throw error;
    }
}

// Blog-specific sitemap (for programmatic SEO)
export async function generateBlogSitemap(): Promise<string> {
    const hostname = 'https://www.sharezet.com';

    // In production, fetch from database
    const blogPosts: SitemapLink[] = [
        {
            url: '/blog/temporary-vs-permanent-file-sharing',
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2026-02-01'
        },
        {
            url: '/blog/send-large-files-without-email',
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2026-01-28'
        },
        {
            url: '/blog/end-to-end-encryption-explained',
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2026-01-25'
        },
    ];

    const stream = new SitemapStream({ hostname });

    const xmlString = await streamToPromise(
        Readable.from(blogPosts).pipe(stream)
    ).then((data) => data.toString());

    return xmlString;
}
