<h5 align='center'>
<b>Lightweight version of <a href="https://github.com/antfu/vitesse">Vitesse</a></b>
</h5>

<br>

<p align='center'>
<b>English</b> | <a href="https://github.com/antfu/vitesse-lite/blob/main/README.zh-CN.md">简体中文</a>
<!-- Contributors: Thanks for geting interested, however we DON'T accept new transitions to the README, thanks. -->
</p>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- ✅ Use [Vitest](http://vitest.dev/) for unit and components testing

- 🦾 TypeScript, of course

- ☁️ Deploy on Netlify, zero-config


<br>

See [Vitesse](https://github.com/antfu/vitesse) for full featureset.


## Dropped Features from [Vitesse](https://github.com/antfu/vitesse)

- ~~i18n~~
- ~~Layouts~~
- ~~SSG~~
- ~~PWA~~
- ~~Markdown~~

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - file system based routing
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-vue-macros`](https://github.com/sxzz/unplugin-vue-macros) - Explore and extend more macros and syntax sugar to Vue.
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/antfu/vitesse-lite/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit antfu/vitesse-lite my-vitesse-app
cd my-vitesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
