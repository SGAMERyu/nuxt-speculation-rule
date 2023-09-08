<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# My Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- 🌲 &nbsp;Implement page preloading according to [Speculation Rules API](https://developer.chrome.com/blog/prerender-pages/)

## Quick Setup

1. Add `nuxt-speculation-rule` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-speculation-rule

# Using yarn
yarn add --dev nuxt-speculation-rule

# Using npm
npm install --save-dev nuxt-speculation-rule
```

2. Add `nuxt-speculation-rule` to the `nuxt-speculation-rule` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-speculation-rule'
  ]
})
```

That's it! You can now use nuxt-speculation-rule in your Nuxt app ✨

## Config

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-speculation-rule'
  ],
  speculationRules: {
    prerender: [
      {
        source: "list",
        urls: ["/test1", "/test2"],
      },
    ],
  },
})
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
