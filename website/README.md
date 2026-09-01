# react-blur website

The demo site for [react-blur](https://javier.xyz/react-blur), built with Next.js
and JBX.

The demo installs `react-blur` from npm rather than building the package next to
it, so it always exercises what users actually get.

```sh
pnpm install
pnpm dev
```

Then open http://localhost:3006/react-blur.

`pnpm build` writes a fully static export to `out/`. The `Deploy` workflow in
`.github/workflows/deploy.yml` builds it on every push to `main` and pushes the
result to the `gh-pages` branch, which `javier.xyz/react-blur` serves through a
vercel rewrite to `javierbyte.github.io/react-blur`.

The site is served under the `/react-blur` base path, defined once in
[`src/lib/basePath.js`](src/lib/basePath.js).
