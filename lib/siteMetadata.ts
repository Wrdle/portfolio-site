import siteConfig from "../config/site.json";

interface SiteConfig {
    origin: string;
    siteName: string;
    language: string;
    locale: string;
    author: {
        name: string;
        sameAs: string[];
    };
    descriptions: {
        home: string;
        blog: string;
    };
    defaultSocialImage: {
        path: string;
        width: number;
        height: number;
        alt: string;
    };
}

export const site = siteConfig as SiteConfig;

const origin = site.origin.replace(/\/$/, "");

function normaliseRoute(path = "/"): string {
    const pathname = path.startsWith("/") ? path : `/${path}`;

    if (pathname === "/") {
        return pathname;
    }

    return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function canonicalUrl(path = "/"): string {
    return new URL(normaliseRoute(path), `${origin}/`).toString();
}

export function absoluteAssetUrl(path: string): string {
    if (/^https:\/\//.test(path)) {
        return path;
    }

    return new URL(path.startsWith("/") ? path : `/${path}`, `${origin}/`).toString();
}

export function postPath(slug: string): string {
    return `/blog/posts/${slug}/`;
}

export function postUrl(slug: string): string {
    return canonicalUrl(postPath(slug));
}

export const personSchemaId = `${canonicalUrl()}#person`;

export function personSchema() {
    return {
        "@type": "Person",
        "@id": personSchemaId,
        name: site.author.name,
        url: canonicalUrl(),
        sameAs: site.author.sameAs,
    };
}

export const defaultSocialImage = {
    ...site.defaultSocialImage,
    url: absoluteAssetUrl(site.defaultSocialImage.path),
};
