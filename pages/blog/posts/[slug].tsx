import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";
import ErrorPage from "next/error";

import {Navbar} from "@components/Navbar";
import serialize from "@lib/serializeMdx";
import BlogArticle from "@components/BlogArticle";
import RainbowDivider from "@components/RainbowDivider";
import {getAllPosts, getPostBySlug} from "@lib/Articles";
import {ArticleDTO} from "@lib/model/ArticleDTO";
import {MDXRemoteSerializeResult} from "next-mdx-remote";
import Comments from "@components/Comments";
import Seo from "@components/Seo";
import {absoluteAssetUrl, personSchemaId, postPath, postUrl, site} from "@lib/siteMetadata";

// Extended DTO for page props (content is serialized MDX)
export interface SerializedArticleDTO extends ArticleDTO {
    serializedMdx: MDXRemoteSerializeResult
}

interface PostPageProps {
    post: SerializedArticleDTO;
}

export default function Post({post}: PostPageProps) {
    const router = useRouter();

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404}/>;
    }

    const url = postUrl(post.slug);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        url,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
        author: {"@id": personSchemaId},
        publisher: {"@id": personSchemaId},
        datePublished: post.publishedDate,
        ...(post.modifiedDate ? {dateModified: post.modifiedDate} : {}),
        ...(post.image ? {image: absoluteAssetUrl(post.image)} : {}),
    };

    return (
        <div className="bg-[#10101a] min-h-screen">
            <Seo
                title={`${post.title} | ${site.siteName}`}
                description={post.excerpt}
                path={postPath(post.slug)}
                type="article"
                image={post.image}
                imageAlt={post.image ? post.title : undefined}
                article={{
                    publishedDate: post.publishedDate,
                    modifiedDate: post.modifiedDate,
                }}
                jsonLd={jsonLd}
            />
            <Navbar/>
            <RainbowDivider/>
            <main className="container mx-auto pb-5 px-5">
                <BlogArticle article={post}/>
                <Comments/>
            </main>
        </div>
    );
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({params}) => {
    if (!params?.slug || typeof params.slug !== "string") {
        return {notFound: true};
    }

    const post = getPostBySlug(params.slug).getArticleDTO();
    const mdxSource = await serialize(post.content || "");

    return {
        props: {
            post: {
                ...post,
                serializedMdx: mdxSource,
            },
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();

    return {
        paths: posts.map((post) => ({
            params: {slug: post.slug},
        })),
        fallback: false,
    };
};
