import Head from "next/head";

import {Navbar} from "/components/Navbar";
import {getAllPosts} from "@lib/api";

// noinspection JSUnusedGlobalSymbols
export default function Home({posts}) {
    return (
        <div>
            <HtmlHead/>
            <Navbar/>
            <div className="container mx-auto mt-6">
                <h1 className="text-2xl text-[50px] font-bold font-sans leading-normal">My Blog Posts</h1>
                <p className="leading-normal">Welcome to Blog! This is where I post content on tech and coding topics I
                    find interesting.</p>
                <div className="space-y-2">
                    {posts.map((post, index) => <Post post={post} key={index}/>)}
                </div>
            </div>
        </div>
    );
}

function Post({post}) {
    return (
        <div>
            <a href="#">Testing</a>
            <h1><a href={"/blog/posts/" + post.slug}>{post.title}</a></h1>
        </div>
    );
}

function HtmlHead() {
    return (
        <Head>
            <title>Matt D'Agostino Portfolio</title>
            <meta
                property="og:title"
                content="Matt D'Agostino Portfolio Website"
                key="title"
            />
            <meta
                property="og:description"
                content="Hi! I'm Matt D'Agostino and this is my portfolio website."
                key="description"
            />
        </Head>
    );
}

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps(context) {
    return {
        props: {posts: getAllPosts()}
    }
}
