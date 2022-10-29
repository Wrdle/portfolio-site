import fs from "fs";
import {join} from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = join(process.cwd(), "mdx_posts");

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const {data, content} = matter(fileContents);
    return {
        ...data,
        content,
        slug: realSlug,
        readingTime: readingTime(content).text
    }
}

export function getAllPosts() {
    const slugs = getPostSlugs();
    return slugs
        .map((slug) => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
