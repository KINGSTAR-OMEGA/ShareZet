import { Request, Response, NextFunction } from 'express';

export function securityHeadersMiddleware(req: Request, res: Response, next: NextFunction) {
    // Basic security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Permissions Policy (restrict features)
    const permissionsPolicy = [
        'camera=()',
        'microphone=()',
        'geolocation=()',
        'interest-cohort=()'
    ].join(', ');
    res.setHeader('Permissions-Policy', permissionsPolicy);

    // Firewall-safe CSP (allows Google Fonts, Font Awesome)
    const csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https://www.google-analytics.com",
        "frame-ancestors 'self'",
    ].join('; ');
    res.setHeader('Content-Security-Policy', csp);

    // HSTS for production (only enable on HTTPS)
    if (process.env.NODE_ENV === 'production') {
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    }

    // Cache-Control headers for performance
    const path = req.path;

    if (path.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/)) {
        // Static assets: cache for 1 year
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (path === '/sitemap.xml' || path === '/robots.txt') {
        // SEO files: cache for 24 hours
        res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (path.startsWith('/api/')) {
        // API responses: no cache
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    } else {
        // HTML pages: cache for 1 hour, revalidate
        res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
    }

    next();
}
