import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import {serialize as serializeMdx} from "next-mdx-remote/serialize";

const serializeOptions = {
    scope: {},
    mdxOptions: {
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [remarkFrontmatter],
        rehypePlugins: [rehypeHighlight],
        format: "mdx",
    },
    parseFrontmatter: true,
};

export default async function serialize(content) {
    return await serializeMdx(content || "", serializeOptions);
}