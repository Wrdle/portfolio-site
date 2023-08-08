import {useRouter} from "next/router";
import ErrorPage from "next/error";

import {Navbar} from "/components/Navbar";

import serialize from "@lib/serializeMdx";
import BlogArticle from "@components/BlogArticle";
import RainbowDivider from "@components/RainbowDivider";
import {getAllPosts, getPostBySlug} from "@lib/Articles";

export default function Post({post}) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404}/>;
  }

  return (
    <div className="bg-[#10101a] min-h-screen">
      <Navbar/>
      <RainbowDivider/>
      <div className="container mx-auto">
        <BlogArticle article={post}></BlogArticle>
      </div>
    </div>
  );
}

export async function getStaticProps({params}) {
  const post = getPostBySlug(params.slug).getArticleDTO()

  const mdxSource = await serialize(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content: mdxSource
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  };
}
