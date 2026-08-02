# Repository Guide

## Overview

This is a personal portfolio and blog built with Next.js 15 (Pages Router), React 19, TypeScript/JavaScript, Tailwind CSS 4, and MDX. The site is statically exported (`output: 'export'` with trailing slashes), so pages must remain compatible with static generation.

## Layout

- `pages/`: route pages, app setup, and static-generation functions.
- `components/`: reusable React UI components, including Giscus comments.
- `lib/`: filesystem-backed blog loading, MDX serialization, and article models.
- `mdx_posts/`: blog posts with front matter; dates use `dd/MM/yyyy`.
- `styles/`: global CSS and CSS modules.
- `public/static/`: images, icons, and other static assets.

## Commands

- `npm run dev` — run the development server with Turbopack.
- `npm run build` — run the production/static-export build; use this to validate changes.
- `npm run start` — serve a production build.

There are currently no dedicated lint, formatting, or test scripts. Do not add dependencies or tooling unless the task requires it.

## Next.js DevTools MCP

The repository configures the `next-devtools` MCP server in `.mcp.json` via `next-devtools-mcp`. With `npm run dev` running, MCP-compatible agents can discover the local Next.js server and inspect runtime errors, logs, routes, and page metadata. Use it for live debugging and verification; it does not replace the static production build check.

## Implementation Conventions

- Preserve the existing Pages Router structure and static-generation pattern (`getStaticProps` / `getStaticPaths`). Do not introduce server-only runtime features that conflict with static export.
- Use the configured import aliases where appropriate: `@components/*`, `@lib/*`, `@pages/*`, `@styles/*`, and `@public/*`.
- The codebase intentionally contains both `.js/.jsx` and `.ts/.tsx` files. Follow the language and formatting convention of the file being edited; avoid unrelated migrations or reformatting.
- Build UI with Tailwind utility classes. Tailwind 4 is configured through the CSS-first setup in `styles/globals.css` and `postcss.config.js`; there is no `tailwind.config.js`.
- Keep component-scoped styles in CSS modules and global rules, Tailwind imports, theme tokens, and typography configuration in `styles/globals.css`.
- Add blog posts as `.mdx` files in `mdx_posts/`, including the front matter consumed by `lib/Articles.ts`: `title`, `date`, and `excerpt`. Dates must use `dd/MM/yyyy`.
- MDX is serialized by `lib/serializeMdx.ts` with front matter and syntax highlighting support. The only custom MDX component currently registered for rendering is `Meta`; register any new MDX component in `components/BlogArticle.jsx`.
- Keep the Giscus repository and category IDs in `components/Comments.tsx` unchanged unless the commenting configuration is intentionally being migrated.
- Place new public assets under `public/static/` and reference them from the site as `/static/<filename>`.

## Change Discipline

- Keep changes narrowly scoped; preserve existing user changes and avoid generated build output.
- For a behavior or content change, run `npm run build` when feasible and report any validation limitation.

## Deployment
This app is built and deployed statically onto DigitalOceans App Platform.
