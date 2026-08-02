import {mkdir, readdir, readFile, writeFile} from "node:fs/promises";
import {join} from "node:path";
import matter from "@11ty/gray-matter";

const projectRoot = process.cwd();
const site = JSON.parse(await readFile(join(projectRoot, "config/site.json"), "utf8"));
const postsDirectory = join(projectRoot, "mdx_posts");
const outputDirectory = join(projectRoot, "out");

const origin = site.origin.replace(/\/$/, "");

function canonicalUrl(path = "/") {
    const pathname = path.startsWith("/") ? path : `/${path}`;
    const trailingSlashPath = pathname === "/" || pathname.endsWith("/") ? pathname : `${pathname}/`;

    return new URL(trailingSlashPath, `${origin}/`).toString();
}

function xmlEscape(value) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function isoDateFromFrontMatter(value, slug) {
    if (value === undefined || value === null || value === "") {
        return undefined;
    }

    if (typeof value !== "string") {
        throw new Error(`Post ${slug} has an invalid updated date.`);
    }

    const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
    if (!match) {
        throw new Error(`Post ${slug} updated date must use dd/MM/yyyy.`);
    }

    const [, day, month, year] = match;
    const isoDate = `${year}-${month}-${day}`;
    const parsedDate = new Date(`${isoDate}T00:00:00.000Z`);

    if (
        Number.isNaN(parsedDate.getTime()) ||
        parsedDate.getUTCFullYear() !== Number(year) ||
        parsedDate.getUTCMonth() + 1 !== Number(month) ||
        parsedDate.getUTCDate() !== Number(day)
    ) {
        throw new Error(`Post ${slug} has an invalid updated date.`);
    }

    return isoDate;
}

async function getPostEntries() {
    const filenames = (await readdir(postsDirectory))
        .filter((filename) => filename.endsWith(".mdx"))
        .sort();

    return Promise.all(filenames.map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const contents = await readFile(join(postsDirectory, filename), "utf8");
        const {data} = matter(contents);

        return {
            loc: canonicalUrl(`/blog/posts/${slug}/`),
            lastmod: isoDateFromFrontMatter(data.updated, slug),
        };
    }));
}

const urls = [
    {loc: canonicalUrl("/")},
    {loc: canonicalUrl("/blog/")},
    ...(await getPostEntries()),
];

const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(({loc, lastmod}) => [
        "  <url>",
        `    <loc>${xmlEscape(loc)}</loc>`,
        ...(lastmod ? [`    <lastmod>${xmlEscape(lastmod)}</lastmod>`] : []),
        "  </url>",
    ].join("\n")),
    "</urlset>",
    "",
].join("\n");

await mkdir(outputDirectory, {recursive: true});
await writeFile(join(outputDirectory, "sitemap.xml"), sitemap, "utf8");
