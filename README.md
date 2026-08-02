Personal portfolio and blog built with the Next.js Pages Router, MDX, and Tailwind CSS. The site is statically exported for deployment to DigitalOcean App Platform.

## Requirements

- Node.js >= 20.19.0
- Corepack, which provides the pnpm version pinned in `package.json`

## Getting Started

Enable Corepack once, then install dependencies and start the development server:

```bash
corepack enable
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Pages live in `pages/`; blog posts live in `mdx_posts/`. The development server reloads changes automatically.

## Production and deployment

Create the static production output with:

```bash
pnpm run build
```

For reproducible deployment installs, use:

```bash
corepack enable && pnpm install --frozen-lockfile && pnpm run build
```

Deploy the generated `out/` directory. Static hosting must preserve the trailing-slash route structure used by the application.

## SEO and blog content

The canonical site identity, HTTPS origin, default descriptions, social profiles, locale, and default social card are defined in `config/site.json`. Update this file before deploying to a different canonical host.

Every `.mdx` post requires this front matter:

```mdx
---
title: A unique post title
date: 08/08/2023
excerpt: A concise, accurate description of the post.
---
```

Posts can also include:

```mdx
updated: 09/08/2023
image: /static/representative-post-image.png
```

`date` and `updated` must use `dd/MM/yyyy`. Add `updated` only after a meaningful content change. `image` must be a representative asset under `public/static/`; it is used in article schema and social metadata when supplied.

The production build writes `out/sitemap.xml` after Next.js completes its static export. `public/robots.txt` advertises that sitemap. Before release, configure DigitalOcean to redirect every HTTP, `www`, and other non-canonical host variant to the HTTPS origin in `config/site.json`; canonical tags cannot prevent duplicate HTML by themselves.

After deployment, verify the canonical redirects, `robots.txt`, `sitemap.xml`, rendered source metadata, social preview, and Google Search Console sitemap processing.
