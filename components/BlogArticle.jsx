import React from "react";
import {MDXRemote} from "next-mdx-remote";
import Meta from "@components/Meta";

const components = {Meta};

export default function BlogArticle({article}) {
    return (
            <article className="py-8 px-3 prose dark:prose-invert prose-code:text-size mx-auto min-w-[50%]">
                <h1 className="my-1.5">{article.title}</h1>
                <p className="my-1.5 text-[#999CA1]">{article.date} • ☕ {article.readingTime}</p>
                {/*<hr className="my-9" style={{borderColor: "#2F3438"}}/>*/}
                <div>
                    <MDXRemote {...article.content} components={components}/>
                </div>
            </article>
    );
}
