import {useRouter} from "next/router";
import ErrorPage from "next/error";

import {Navbar} from "/components/Navbar";

import {getPostBySlug, getAllPosts} from "@lib/api";
import serialize from "@lib/serializeMdx";
import BlogArticle from "@components/BlogArticle";
import {format} from "date-fns";

export default function Post({post}) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404}/>;
    }

    return (
        <div className="bg-[#23272a] min-h-screen">
            <Navbar />
            <hr style={{borderColor: "#2F3438"}}/>
            <div className="container mx-auto">
                <BlogArticle article={post}></BlogArticle>
            </div>
        </div>
    );
}

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps({params}) {
    const post = getPostBySlug(params.slug);

    const mdxSource = await serialize(post.content || "");

    return {
        props: {
            post: {
                title: post.title,
                slug: post.slug,
                date: getDateString(new Date(post.date)),
                readingTime: post.readingTime,
                content: mdxSource,
            },
        },
    };
}

// noinspection JSUnusedGlobalSymbols
export async function getStaticPaths() {
    const posts = getAllPosts();

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}

function getDateString(date) {
    return format(date, "LLLL e, y")
}

