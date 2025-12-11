import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import UnoCSS from "unocss/astro";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://kururin.cc",
  integrations: [mdx(), icon(), sitemap(), UnoCSS(), svelte()],
  markdown: {},
  output: "static",
  prefetch: true,
  build: {
    assets: "astro",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name][extname]",
        },
      },
      cssMinify: "lightningcss",
      cssCodeSplit: false,
    },
  },
});
