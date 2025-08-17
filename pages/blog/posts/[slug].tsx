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
    return <ErrorPage statusCode={404} />;
  }

  return (
      <div className="bg-[#10101a] min-h-screen">
        <Navbar />
        <RainbowDivider />
        <div className="container mx-auto">
          <BlogArticle article={post} />
        </div>
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
