import express from 'express';
import { generateSitemap, generateBlogSitemap } from './sitemap-generator';

const router = express.Router();

// Main sitemap
router.get('/sitemap.xml', async (req, res) => {
    try {
        const sitemap = await generateSitemap();
        res.header('Content-Type', 'application/xml');
        res.header('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
        res.send(sitemap);
    } catch (error) {
        console.error('Sitemap generation error:', error);
        res.status(500).send('Error generating sitemap');
    }
});

// Blog sitemap
router.get('/sitemap-blog.xml', async (req, res) => {
    try {
        const sitemap = await generateBlogSitemap();
        res.header('Content-Type', 'application/xml');
        res.header('Cache-Control', 'public, max-age=86400');
        res.send(sitemap);
    } catch (error) {
        console.error('Blog sitemap generation error:', error);
        res.status(500).send('Error generating blog sitemap');
    }
});

// Pages sitemap (alias for main sitemap)
router.get('/sitemap-pages.xml', async (req, res) => {
    try {
        const sitemap = await generateSitemap();
        res.header('Content-Type', 'application/xml');
        res.header('Cache-Control', 'public, max-age=86400');
        res.send(sitemap);
    } catch (error) {
        console.error('Pages sitemap generation error:', error);
        res.status(500).send('Error generating sitemap');
    }
});

// Robots.txt (backup, should normally be static file)
router.get('/robots.txt', (req, res) => {
    const robotsTxt = `
User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/

Sitemap: ${req.protocol}://${req.get('host')}/sitemap.xml
Sitemap: ${req.protocol}://${req.get('host')}/sitemap-blog.xml
  `.trim();

    res.type('text/plain');
    res.header('Cache-Control', 'public, max-age=86400');
    res.send(robotsTxt);
});

export default router;
