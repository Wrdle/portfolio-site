# Migrate the project from npm to pnpm

## 1. Goal

Make pnpm the project’s reproducible package manager while preserving the current dependency versions, Pages Router static-export behavior, and DigitalOcean static deployment output.

## 2. Approach

Use Corepack plus a repository-pinned pnpm 11 release, rather than requiring a globally installed package manager. This host already provides Corepack 0.34.5 (although pnpm itself is not globally installed), and the existing [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F) (lines 1–37) requires Node >=20.9.0, which supports this workflow.

Generate the new lockfile by importing the current npm v2 resolution graph instead of running a dependency upgrade. pnpm officially supports importing package-lock.json, so this preserves the resolved dependency set established by the current working tree, including Next 16.2.12 and React 19.2.8. Do not create a pnpm workspace file: the repository has exactly one package manifest and no workspace packages.

## 3. File Changes

- **Modify** [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F) (lines 1–37): add an exact Corepack-compatible `packageManager` pin for the selected current pnpm 11 patch release (including Corepack’s integrity suffix when generated), and add an `engines.pnpm` range constrained to major 11. Do not change dependencies, devDependencies, Node engine floor, or application scripts.
- **Create** repository-root `pnpm-lock.yaml`: import the resolutions from the current npm lockfile, then normalize it with the pinned pnpm version so every direct and transitive package has reproducible integrity and peer-dependency resolution data.
- **Delete** [package-lock.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package-lock.json?type=file&root=%252F) (lines 1–42 and generated graph): retire the npm lockfile once pnpm-lock.yaml is verified; the repository must commit only one package-manager lockfile.
- **Delete** [.npmrc](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/.npmrc?type=file&root=%252F) (line 1): remove `legacy-peer-deps=true`, an npm-specific peer-resolution bypass. The current direct dependencies’ recorded peer ranges accept the declared React 19 packages, so no pnpm hoisting or peer override should be added pre-emptively.
- **Modify** [README.md](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/README.md?type=file&root=%252F) (lines 6–25): replace npm as the requirement and every install/run command with Corepack/pnpm equivalents; document frozen installs for deployment and retain the static `out/` artifact and trailing-slash hosting guidance.
- **Modify** [.gitignore](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/.gitignore?type=file&root=%252F) (lines 21–23): retain the existing npm/yarn debug patterns and add pnpm’s debug-log pattern. Keep `node_modules`, `.next`, and `out` ignored.
- **No change** [next.config.js](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/next.config.js?type=file&root=%252F) (lines 1–13): `output: 'export'`, trailing slashes, and unoptimized images are package-manager independent and remain required for static export.
- **External configuration (manual)**: update the DigitalOcean App Platform build command, which is not represented by a tracked configuration file, to activate Corepack and run `pnpm install --frozen-lockfile && pnpm run build`; continue publishing `out/`.

## 4. Implementation Steps

### Task 1: Establish the pnpm toolchain contract

1. Preserve all existing user modifications, especially the uncommitted dependency-modernization changes visible in [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F) (lines 5–36), [README.md](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/README.md?type=file&root=%252F) (lines 1–26), and [package-lock.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package-lock.json?type=file&root=%252F) (lines 1–42). Treat their current manifest and lock resolution as migration input; do not reset, update, or otherwise fold a dependency upgrade into this task.
2. Select the latest stable pnpm 11 patch release compatible with Node >=20.9.0 at implementation time. Run Corepack’s package-manager selection command so it writes the exact `pnpm@<version>+sha512-...` pin to [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F), then add `engines.pnpm: ">=11 <12"` adjacent to the existing Node engine.
3. Do not add pnpm as a dependency, add a global installation step, create a pnpm workspace, or rewrite the existing `dev`, `build`, and `start` scripts. This remains a single-package Next application, and pnpm invokes these scripts unchanged.

### Task 2: Replace npm’s resolution and configuration

1. With the pinned pnpm active, use `pnpm import` while [package-lock.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package-lock.json?type=file&root=%252F) is still present to create `pnpm-lock.yaml`. Inspect the generated importer for the root package and confirm its specifiers and resolved direct dependency versions match [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F) (lines 13–36).
2. Run one non-frozen `pnpm install` with the same pinned release only if import leaves the lockfile out of sync, and review the resulting diff. Treat unexpected direct-package version changes, peer-resolution errors, or added overrides as migration defects to resolve before proceeding; do not use `shamefully-hoist`, `auto-install-peers` overrides, or a pnpm equivalent of `legacy-peer-deps` unless a concrete build failure proves it necessary.
3. Remove [.npmrc](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/.npmrc?type=file&root=%252F) because its sole setting disables npm peer validation. Then delete [package-lock.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package-lock.json?type=file&root=%252F) only after pnpm-lock.yaml has passed a frozen install.
4. Update [.gitignore](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/.gitignore?type=file&root=%252F) to ignore `pnpm-debug.log*`, without ignoring pnpm-lock.yaml or the pnpm store; the lockfile must remain committed and the store stays outside the repository by default.

### Task 3: Update developer and deployment operations

1. In [README.md](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/README.md?type=file&root=%252F), replace “npm required” with Node >=20.9.0 plus Corepack/pnpm, provide `corepack enable` as the first-run setup step, use `pnpm install` and `pnpm run dev` for local development, and use `pnpm run build` for production builds.
2. Add a deployment/reproducibility note to [README.md](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/README.md?type=file&root=%252F) specifying `corepack enable && pnpm install --frozen-lockfile && pnpm run build`, followed by deploying the existing `out/` directory. This matches pnpm’s frozen-lockfile behavior in CI and avoids an accidental lockfile rewrite.
3. In DigitalOcean App Platform’s external build settings, apply the same Corepack/pnpm install-and-build command and confirm its Node runtime satisfies the existing >=20.9.0 engine. Do not alter the publish directory, routing rules, or [next.config.js](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/next.config.js?type=file&root=%252F) static-export settings.

### Task 4: Validate from a clean installation

1. Remove only the local dependency installation as part of the planned clean-install validation (never user source or generated committed files), enable Corepack, and run `pnpm install --frozen-lockfile`. Confirm it succeeds without modifying [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F) or pnpm-lock.yaml.
2. Run `pnpm exec tsc --noEmit`, then `pnpm run build`. Confirm the Next build completes and produces the expected static `out/` directory under the configuration in [next.config.js](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/next.config.js?type=file&root=%252F) (lines 5–10).
3. Run `pnpm run dev` and manually test `/`, `/blog/`, and the existing MDX post route. Confirm route rendering, local assets, syntax highlighting, and comments initialization work with pnpm’s default isolated node_modules layout.
4. Inspect the final Git diff: it must contain the package-manager metadata, pnpm lockfile, npm lockfile removal, npm-config removal, documentation/gitignore updates, and no `node_modules`, `.next`, or `out` artifacts.

## 5. Acceptance Criteria

- [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F) declares an exact pnpm 11 `packageManager` pin and an `engines.pnpm` range of >=11 <12, while retaining the existing Node >=20.9.0 requirement and all current application scripts.
- The repository contains a committed pnpm-lock.yaml generated from the current package graph and no [package-lock.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package-lock.json?type=file&root=%252F).
- The npm-only [.npmrc](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/.npmrc?type=file&root=%252F) is absent; pnpm installs with no unaddressed peer-dependency error or unsupported hoisting workaround.
- From a clean dependencies directory, `corepack enable && pnpm install --frozen-lockfile` exits 0 and produces no manifest or lockfile changes.
- `pnpm exec tsc --noEmit` and `pnpm run build` both exit 0; the latter generates static home, blog index, and existing post output in `out/`.
- [README.md](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/README.md?type=file&root=%252F) contains no npm development/build commands and documents Corepack, pnpm, the frozen deployment install, and the `out/` artifact.
- The external DigitalOcean build command uses Corepack and `pnpm install --frozen-lockfile`, and still publishes `out/`.

## 6. Verification Steps

1. On Node >=20.9.0, run `corepack enable` and confirm `pnpm --version` matches the exact major-11 version recorded in [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F).
2. Run `pnpm install --frozen-lockfile`, then `git diff --exit-code -- package.json pnpm-lock.yaml`; it must return 0.
3. Run `pnpm exec tsc --noEmit` and `pnpm run build`; inspect `out/index.html`, `out/blog/index.html`, and the existing post’s trailing-slash `index.html`.
4. Run `pnpm run dev`; manually visit the home page, blog listing, and post page to detect package-resolution failures that a static type check does not cover.
5. In the DigitalOcean build logs after configuration is updated, verify Corepack resolves the pinned pnpm version, the frozen install does not rewrite the lockfile, the build exits 0, and the deployed static site returns the three routes.

## 7. Risks & Mitigations

- **Existing worktree changes overlap the two key migration inputs.** [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F) and [package-lock.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package-lock.json?type=file&root=%252F) are already modified. Preserve them and import their current resolution; do not restore files or resolve unrelated modernization changes as part of this migration.
- **The project currently suppresses npm peer checks.** [.npmrc](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/.npmrc?type=file&root=%252F) (line 1) uses `legacy-peer-deps`. Validate the imported lock through a clean frozen pnpm install and build before deleting the bypass; add a narrowly justified fix only for an observed, reproducible peer failure.
- **pnpm’s isolated layout can expose undeclared imports.** The source relies on direct dependencies declared in [package.json](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/package.json?type=file&root=%252F) (lines 13–36), but the build and route smoke tests catch packages that were accidentally being resolved transitively. Declare any proven source import directly instead of flattening node_modules.
- **No deployment configuration is committed.** The repository cannot itself enforce App Platform’s install command. Record the command in [README.md](air-file://gvuc3b3985uu2b4d0gae/home/mattdag/dev/repos/portfolio-site/README.md?type=file&root=%252F) and verify the external setting/logs before considering the deployment migration complete.
- **pnpm lockfiles are major-version sensitive in CI.** Pin the package manager and use the same Corepack workflow locally and in DigitalOcean; pnpm’s CI behavior intentionally rejects incompatible or stale frozen lockfiles.