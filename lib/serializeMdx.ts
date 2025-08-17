import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import {serialize as serializeMdx} from "next-mdx-remote/serialize";
import {MDXRemoteSerializeResult} from "next-mdx-remote";

// Explicit type for options
const serializeOptions = {
    scope: {},
    mdxOptions: {
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [remarkFrontmatter],
        rehypePlugins: [rehypeHighlight],
        format: "mdx" as const, // narrow the string literal
    },
    parseFrontmatter: true,
};

export default async function serialize(
    content: string
): Promise<MDXRemoteSerializeResult> {
    return await serializeMdx(content || "", serializeOptions);
}