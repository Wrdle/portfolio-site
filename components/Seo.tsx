import Head from "next/head";
import type {ReactNode} from "react";
import {
    absoluteAssetUrl,
    canonicalUrl,
    defaultSocialImage,
    site,
} from "@lib/siteMetadata";

interface ArticleMetadata {
    publishedDate: string;
    modifiedDate?: string;
}

interface SeoProps {
    title: string;
    description: string;
    path?: string;
    type?: "website" | "article";
    image?: string;
    imageAlt?: string;
    article?: ArticleMetadata;
    jsonLd?: Record<string, unknown>;
}

function serialiseJsonLd(value: Record<string, unknown>): string {
    return JSON.stringify(value)
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/&/g, "\\u0026")
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
}

export default function Seo({
    title,
    description,
    path = "/",
    type = "website",
    image,
    imageAlt,
    article,
    jsonLd,
}: SeoProps): ReactNode {
    const url = canonicalUrl(path);
    const socialImage = image ? absoluteAssetUrl(image) : defaultSocialImage.url;
    const socialImageAlt = imageAlt || defaultSocialImage.alt;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="canonical" href={url}/>

            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:type" content={type}/>
            <meta property="og:url" content={url}/>
            <meta property="og:site_name" content={site.siteName}/>
            <meta property="og:locale" content={site.locale}/>
            <meta property="og:image" content={socialImage}/>
            {!image && (
                <>
                    <meta property="og:image:width" content={defaultSocialImage.width.toString()}/>
                    <meta property="og:image:height" content={defaultSocialImage.height.toString()}/>
                </>
            )}
            <meta property="og:image:alt" content={socialImageAlt}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={socialImage}/>
            <meta name="twitter:image:alt" content={socialImageAlt}/>

            {article && <meta property="article:published_time" content={article.publishedDate}/>}
            {article?.modifiedDate && <meta property="article:modified_time" content={article.modifiedDate}/>}
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: serialiseJsonLd(jsonLd)}}
                />
            )}
        </Head>
    );
}
