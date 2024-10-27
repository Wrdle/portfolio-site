import Head from "next/head";
import {getAllPosts} from "@lib/Articles";
import ArticleList from "@components/ArticleList";
import {Navbar} from "@components/Navbar";
import {GetStaticProps} from 'next'
import {ArticleDTO} from "@lib/model/ArticleDTO";
import React from "react";
import RainbowDivider from "@components/RainbowDivider";

export default function BlogPage({posts}) {
  return (
    <div className="bg-[#10101a] min-h-[100vh]">
      <HtmlHead/>
      <Navbar/>
      <RainbowDivider/>
      <div className="container px-5 mx-auto mt-6">
        <h1 className="text-2xl text-[50px] font-extrabold font-sans leading-normal">All Posts</h1>
        <p className="leading-normal">I may write something interesting, no promises though. I
          just write about what interests me at the time 🎓💡</p>
        <ArticleList posts={posts}/>
      </div>
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

export const getStaticProps: GetStaticProps<{ posts: ArticleDTO[] }> = async () => {
  let posts: ArticleDTO[] = getAllPosts()
    .map(article => article.getArticleDTO())

  return {
    props: {
      posts,
    },
  }
}
