import {join} from "path";
import matter from "@11ty/gray-matter";
import {Article} from "./model/Article";
import * as fs from "fs";
import {format, isValid, parse} from "date-fns";

const postsDirectory = join(process.cwd(), "mdx_posts");

export function getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory).filter((slug) => slug.endsWith(".mdx"));
}

export function getPostBySlug(slug: string): Article {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const {data, content} = matter(fileContents);
    const date = parseDate(data.date, "date");
    const updated = data.updated ? parseDate(data.updated, "updated") : undefined;
    const image = parseImage(data.image);

    return new Article(
        requiredString(data.title, "title"),
        date,
        content,
        requiredString(data.excerpt, "excerpt"),
        realSlug,
        updated,
        image
    );
}

export function getAllPosts(): Article[] {
    const slugs = getPostSlugs();
    return slugs
        .map((slug) => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((a, b) => b.date.getTime() - a.date.getTime());
}

function requiredString(value: unknown, field: string): string {
    if (typeof value !== "string" || value.trim() === "") {
        throw new Error(`Post front matter requires a non-empty ${field} string.`);
    }

    return value;
}

function parseDate(value: unknown, field: "date" | "updated"): Date {
    const dateString = requiredString(value, field);
    const parsedDate = parse(dateString, "dd/MM/yyyy", new Date());

    if (!isValid(parsedDate) || format(parsedDate, "dd/MM/yyyy") !== dateString) {
        throw new Error(`Post front matter ${field} must use the dd/MM/yyyy format.`);
    }

    return parsedDate;
}

function parseImage(value: unknown): string | undefined {
    if (value === undefined || value === null) {
        return undefined;
    }

    const image = requiredString(value, "image");
    if (!image.startsWith("/static/")) {
        throw new Error("Post front matter image must reference an asset under /static/.");
    }

    return image;
}
