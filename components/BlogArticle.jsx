import React from "react";
import {MDXRemote} from "next-mdx-remote";
import Meta from "@components/Meta";

const components = {Meta};

export default function BlogArticle({article}) {
  return (
    <>
      <article
        className="py-8 px-3 prose dark:prose-invert mx-auto min-w-[90%] md:min-w-[80%] xl:min-w-[60%]">
        <h1 className="my-1.5 text-5xl mt-0">{article.title}</h1>
        <p className="my-1 text-[#999CA1]">Matt D'Agostino – {article.date} – ☕ {article.readingTimeText}</p>
        <div>
          <MDXRemote {...article.content} components={components}/>
        </div>
      </article>
    </>
  );
}
