# Dependency modernization plan

## 1. Goal

Upgrade this statically exported Pages Router portfolio to Next.js 16, Tailwind CSS 4.3, and TypeScript 6 while refreshing every declared direct dependency to a compatible stable release, preserving its static blog and visual behavior.

## 2. Approach

Upgrade the framework/toolchain as one compatibility set: Next 16.2.x with React 19.2.x, Tailwind 4.3.x with its PostCSS integration, and TypeScript constrained to 6.x (not the current TypeScript 7 latest) because TypeScript 6 is the explicitly requested target. Next 16 requires Node 20.9+ and uses Turbopack by default; this project has no custom webpack, middleware, server runtime configuration, or unsupported dynamic static-export APIs, so the upgrade can retain its existing Pages Router and `output: 'export'` design.

Treat the package manifest—not the current `node_modules` directory—as authoritative. The audit found seven installed but undeclared packages; they have no source imports and will not be added to the manifest. A clean dependency installation will remove that environmental residue. Use only stable releases; record the final resolved versions and integrity data in the regenerated lockfile.

Relevant upstream baselines: [Next.js 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16), [Next static export guide](https://nextjs.org/docs/app/guides/static-exports), [Tailwind 4.3 release](https://tailwindcss.com/blog/tailwindcss-v4-3), and [TypeScript 6 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html).

## 3. File Changes

- **Modify** [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F) (lines 1–42): declare the supported Node runtime; align the Next/React/React DOM and type packages; upgrade all retained direct dependencies to stable compatible versions; target Tailwind 4.3 and TypeScript `^6`; remove unused direct packages; and simplify the development command for Next 16’s default Turbopack behavior.
- **Modify** [package-lock.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package-lock.json?type=file&root=%252F) (manifest block at lines 1–42 and generated dependency graph): regenerate with the selected npm version so every resolved package, peer resolution, and integrity entry matches the revised manifest.
- **Modify** [tsconfig.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/tsconfig.json?type=file&root=%252F) (lines 1–40): replace TypeScript 6-deprecated ES5, Node 10-style module resolution, and `baseUrl` usage with modern, explicit settings while retaining the project’s intentional gradual-typing policy.
- **Modify** [pages/index.tsx](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/pages/index.tsx?type=file&root=%252F) (the `Image` usage at lines 72–80): replace Next Image’s deprecated `priority` prop with the Next 16 `preload` prop.
- **Modify** [README.md](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/README.md?type=file&root=%252F) (lines 1–30): replace the outdated create-next-app boilerplate with the real development, build/static-export, and Node-version requirements.

No change is expected in [next.config.js](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/next.config.js?type=file&root=%252F): its `output: 'export'`, `trailingSlash: true`, and `images.unoptimized: true` settings remain valid and necessary. No Tailwind source migration is expected in [globals.css](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/styles/globals.css?type=file&root=%252F): it already uses the Tailwind 4 CSS-first/PostCSS configuration and the typography plugin.

## 4. Implementation Steps

### Task 1: Establish the supported dependency contract

1. In [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F), add an `engines.node` floor of `>=20.9.0`, matching Next 16. The current development host’s Node 24.13.0 satisfies this floor.
2. Update the framework set together: set `next` to the latest 16.2.x stable release (currently 16.2.12), and set `react` and `react-dom` together to the current 19.2.x stable release (currently 19.2.8). Update `@types/react` and `@types/react-dom` to the matching current React 19 declarations and place all `@types/*` packages in `devDependencies`.
3. Set `tailwindcss` and `@tailwindcss/postcss` to the latest 4.3.x releases, then update `@tailwindcss/typography` and `postcss` to their compatible stable releases. Keep the existing PostCSS integration rather than adding the new webpack plugin, because the project has no webpack configuration and Next 16 builds with Turbopack by default.
4. Set `typescript` to `^6.0.0`, deliberately preventing an implicit jump to TypeScript 7, and update `@types/node` within the current Node support line. Do not use `ignoreDeprecations` as a permanent workaround.
5. For every remaining retained direct package—`@giscus/react`, `@mdx-js/react`, `date-fns`, `gray-matter`, `next-mdx-remote`, `react-icons`, `react-typed`, `reading-time`, `rehype-highlight`, and `remark-frontmatter`—select the newest non-prerelease release whose peer ranges accept React 19.2, Next 16, and MDX 3 where applicable. Review changelogs for any major-version migration and apply only code changes required by an observed compatibility break.
6. Remove `@mdx-js/loader`: the code serializes MDX through `next-mdx-remote/serialize` in [serializeMdx.ts](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/lib/serializeMdx.ts?type=file&root=%252F) (lines 1–21), and there is no Next MDX loader configuration or direct import. Remove `eslint-config-next` as unused rather than adding a new linting system: this repository has no lint command or config, and the task is a dependency modernization rather than tooling expansion.
7. Remove the type-package `overrides` only after the selected direct React type versions and all peer dependencies resolve cleanly; do not retain overrides that pin stale declarations. Change `dev` from `next dev --turbopack` to `next dev`, because Turbopack is the Next 16 default. Leave `build` as `next build` to exercise the default production bundler.

### Task 2: Make the TypeScript 6 migration explicit

1. In [tsconfig.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/tsconfig.json?type=file&root=%252F), remove `baseUrl: "."` and rewrite every alias target with an explicit `./` prefix (for example, `"./components/*"`). This preserves the aliases used throughout the pages and components without relying on TypeScript 6’s deprecated `baseUrl` lookup behavior.
2. Replace `target: "es5"` with an evergreen target such as `"es2022"`, replace `moduleResolution: "node"` with `"bundler"` (compatible with the existing `module: "esnext"` and Next build pipeline), and simplify `lib` by removing the now-redundant `dom.iterable` entry.
3. Add `types: ["node"]` so filesystem-backed blog utilities continue to resolve Node types under TypeScript 6’s changed default. Preserve `allowJs`, `noEmit`, `isolatedModules`, and the current explicit `strict: false`; a strictness migration would be a separate, much larger change.
4. Run a full type check after the configuration change and fix only concrete TypeScript 6 or updated declaration errors in the affected source. In particular, verify the MDX result typing in [serializeMdx.ts](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/lib/serializeMdx.ts?type=file&root=%252F) and the static route props in [[slug].tsx](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/pages/blog/posts/%5Bslug%5D.tsx?type=file&root=%252F); they use supported Pages Router static APIs and should not require an App Router migration.

### Task 3: Apply Next 16 compatibility adjustments

1. In [index.tsx](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/pages/index.tsx?type=file&root=%252F), change the above-the-fold local SVG `Image` from `priority` to `preload`. This removes the documented Next 16 deprecation without changing image loading intent.
2. Confirm [next.config.js](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/next.config.js?type=file&root=%252F) remains unchanged: static export does not support the default image optimizer, and `images.unoptimized: true` keeps the existing local-image behavior compatible with export.
3. Confirm the file-backed static generation paths in [index.tsx](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/pages/blog/index.tsx?type=file&root=%252F) and [[slug].tsx](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/pages/blog/posts/%5Bslug%5D.tsx?type=file&root=%252F) still generate the blog index and every MDX route. Do not convert the project to the App Router or enable Cache Components—the current Pages Router APIs and static-export model are supported and already fit the site.

### Task 4: Reconcile the lockfile and validate the upgrade

1. Install from the revised manifest with npm under Node 20.9+ to regenerate [package-lock.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package-lock.json?type=file&root=%252F). Verify the lockfile version produced by the repository’s npm is internally consistent; do not hand-edit resolved versions or integrity hashes.
2. Use a clean `npm ci` install to prove the lockfile is reproducible and that the undeclared packages currently present only in `node_modules` are not required.
3. Update [README.md](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/README.md?type=file&root=%252F) with Node 20.9+, `npm install`, `npm run dev`, and `npm run build`; document that the production output is the generated `out/` static site. Keep deployment-provider guidance generic because no deployment configuration exists in the repository.

## 5. Acceptance Criteria

- [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F) declares Next 16.2.x, React and React DOM 19.2.x, Tailwind and its PostCSS adapter 4.3.x, and TypeScript `^6.0.0`; all other retained direct dependencies resolve to stable releases selected for their compatible peer ranges.
- The manifest declares Node `>=20.9.0`, and a clean `npm ci` completes without missing, invalid, or extraneous packages.
- TypeScript emits no deprecation diagnostics for `target: es5`, `moduleResolution: node`, or `baseUrl`; aliases continue to resolve for imports from `@components/*`, `@lib/*`, `@pages/*`, `@styles/*`, and `@public/*`.
- `npm run build` completes successfully and generates an `out/` static export that contains the home page, blog index, and the MDX post route with trailing-slash output.
- The home page produces no Next Image warning for the renamed preload prop and still displays the programming SVG.
- The blog post renders front matter-driven metadata, highlighted MDX code, the typography styling, and the Giscus component without client or build-time exceptions.
- No App Router migration, server-only runtime feature, change to Giscus identifiers, or generated build output is committed.

## 6. Verification Steps

1. From a clean checkout using Node 20.9+ (preferably the project’s current Node 24 LTS line), run `npm ci` and `npm ls --depth=0`. Confirm the declared tree is valid and no undeclared top-level packages remain.
2. Run `npm exec tsc -- --noEmit`. Confirm it exits 0 and reports no TypeScript 6 deprecation diagnostics.
3. Run `npm run build`. Confirm Next 16 finishes its static export and inspect the generated `out/` tree for `index.html`, `blog/index.html`, and `blog/posts/tracing-kafka-messages-in-jvm-apps-using-opentelemetry/index.html`.
4. Run `npm run dev` and manually visit `/`, `/blog/`, and the post URL. Verify navigation, the mobile navbar, the hero image, syntax highlighting, MDX `Meta` title, and Giscus initialization.
5. In browser developer tools, confirm the hero image is preloaded once, no asset uses a query-string local image, and no Tailwind typography or border-color regression is visible.
6. When registry access is available, run `npm audit --omit=dev` and record any remaining production advisories separately; do not upgrade to prerelease packages solely to clear an advisory.

## 7. Risks & Mitigations

- **TypeScript 6 removes/deprecates three current settings.** The project presently has ES5 target, Node-style module resolution, and `baseUrl`; migrate them explicitly in [tsconfig.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/tsconfig.json?type=file&root=%252F) rather than silencing them, then type-check all aliases and MDX types.
- **Next 16 changes Next Image’s API.** The one local image currently uses `priority`; replace it with `preload` and manually confirm LCP behavior. Retaining `images.unoptimized` avoids incompatible server-side optimization in static export.
- **Refreshing all direct packages can reveal peer or type changes in the MDX and typing stack.** Upgrade the MDX packages as a compatible group, use stable releases only, and fix only compiler-verified breakages in [serializeMdx.ts](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/lib/serializeMdx.ts?type=file&root=%252F) or the static post page.
- **Tailwind is already on the CSS-first v4 setup but its generated CSS can change across minors.** Keep the existing PostCSS and typography wiring, then visually check the homepage/navbar, blog list, prose article, dividers, and default border behavior after the build.
- **The repository has no CI or deployment runtime declaration.** The new `engines` field and README make the Next 16 Node requirement explicit; before deployment, ensure the host honors Node 20.9+ and serves the `out/` directory with trailing-slash paths.