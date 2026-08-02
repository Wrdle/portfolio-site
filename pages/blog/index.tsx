import {getAllPosts} from "@lib/Articles";
import ArticleList from "@components/ArticleList";
import {Navbar} from "@components/Navbar";
import {GetStaticProps} from 'next'
import {ArticleDTO} from "@lib/model/ArticleDTO";
import React from "react";
import RainbowDivider from "@components/RainbowDivider";
import Seo from "@components/Seo";
import {canonicalUrl, personSchemaId, postUrl, site} from "@lib/siteMetadata";

interface BlogPageProps {
  posts: ArticleDTO[];
}

export default function BlogPage({posts}: BlogPageProps) {
  const blogUrl = canonicalUrl("/blog/");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${blogUrl}#blog`,
        url: blogUrl,
        name: `${site.siteName} Blog`,
        description: site.descriptions.blog,
        author: {"@id": personSchemaId},
        publisher: {"@id": personSchemaId},
      },
      {
        "@type": "ItemList",
        "@id": `${blogUrl}#posts`,
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: postUrl(post.slug),
          name: post.title,
        })),
      },
    ],
  };

  return (
    <div className="bg-[#10101a] min-h-screen">
      <Navbar/>
      <RainbowDivider/>
      <Seo
        title={`Blog | ${site.siteName}`}
        description={site.descriptions.blog}
        path="/blog/"
        jsonLd={jsonLd}
      />
      <main className="container px-5 mx-auto mt-6">
        <h1 className="text-2xl text-[50px] font-extrabold font-sans leading-normal">All Posts</h1>
        <p className="leading-normal">I may write something interesting, no promises though. I
          just write about what interests me at the time 🎓💡</p>
        <ArticleList posts={posts}/>
      </main>
    </div>
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
