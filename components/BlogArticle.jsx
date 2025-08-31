import React from "react";
import {MDXRemote} from "next-mdx-remote";
import Meta from "@components/Meta";

const components = {Meta};

export default function BlogArticle({article}) {
  return (
    <>
      <article
        className="pt-8 pb-3 prose prose-invert prose-a:decoration-sky-500 prose-a:hover:decoration-2 mx-auto min-w-[90%] md:min-w-[80%] xl:min-w-[60%]">
        <h1 className="my-1.5 text-4xl mt-0">{article.title}</h1>
        <p className="my-1 text-[#999CA1]">Matt D'Agostino – {article.formattedDate} – ☕ {article.readingTimeText}</p>
        <div>
          <MDXRemote {...article.serializedMdx} components={components}/>
        </div>
      </article>
    </>
  );
}
