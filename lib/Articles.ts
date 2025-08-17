import {join} from "path";
import matter from "gray-matter";
import {Article} from "./model/Article";
import * as fs from "fs";
import {parse} from "date-fns";

const postsDirectory = join(process.cwd(), "mdx_posts");

export function getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Article {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const {data, content} = matter(fileContents);
    const date: Date = parseDate(data.date)

    return new Article(data.title, date, content, data.excerpt, realSlug)
}

export function getAllPosts(): Article[] {
    const slugs = getPostSlugs();
    return slugs
        .map((slug) => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((a, b) => b.date.getTime() - a.date.getTime());
}

function parseDate(dateString: string): Date {
    return parse(dateString, "dd/MM/yyyy", new Date())
}