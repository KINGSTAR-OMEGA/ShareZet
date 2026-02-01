// Schema Markup Generation Utilities for SEO

export interface SoftwareApplicationSchema {
    '@context': string;
    '@type': string;
    name: string;
    applicationCategory: string;
    operatingSystem: string;
    offers: {
        '@type': string;
        price: string;
        priceCurrency: string;
    };
    aggregateRating?: {
        '@type': string;
        ratingValue: string;
        ratingCount: string;
    };
    description: string;
    url: string;
    featureList: string[];
}

export function generateSoftwareApplicationSchema(): SoftwareApplicationSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'ShareZet',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250'
        },
        description: 'Free online file and text sharing platform with no registration required. Secure, fast, and unlimited file transfer through custom rooms.',
        url: 'https://www.sharezet.com',
        featureList: [
            'No registration required',
            'End-to-end encrypted file sharing',
            'Unlimited file transfers',
            'Custom room creation',
            'Real-time text and code sharing',
            'Mobile and desktop compatible'
        ]
    };
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQPageSchema {
    '@context': string;
    '@type': string;
    mainEntity: Array<{
        '@type': string;
        name: string;
        acceptedAnswer: {
            '@type': string;
            text: string;
        };
    }>;
}

export function generateFAQSchema(faqs: FAQItem[]): FAQPageSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    };
}

export interface BreadcrumbItem {
    name: string;
    url: string;
}

export interface BreadcrumbSchema {
    '@context': string;
    '@type': string;
    itemListElement: Array<{
        '@type': string;
        position: number;
        name: string;
        item: string;
    }>;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };
}

export interface OrganizationSchema {
    '@context': string;
    '@type': string;
    name: string;
    url: string;
    logo: string;
    description: string;
    sameAs: string[];
    contactPoint?: {
        '@type': string;
        contactType: string;
        email: string;
    };
}

export function generateOrganizationSchema(): OrganizationSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ShareZet',
        url: 'https://www.sharezet.com',
        logo: 'https://www.sharezet.com/logo.png',
        description: 'A free, secure, and instant file and text sharing platform',
        sameAs: [
            // Add social media links when available
            'https://twitter.com/sharezet',
            'https://github.com/sharezet'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Support',
            email: 'support@sharezet.com'
        }
    };
}

// Helper function to convert schema object to JSON-LD string for script tag
export function schemaToJsonLd(schema: object): string {
    return JSON.stringify(schema);
}
