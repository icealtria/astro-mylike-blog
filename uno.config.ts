import { defineConfig, presetWind4, presetTypography } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import { presetMaterialColor } from "./theme";
import Inspector from "@unocss/inspector";

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: false,
        theme: 'on-demand',
      },
      dark: "media",
    }),
    presetMaterialColor({
      primary: "#405e0d",
      scheme: "tonalSpot",
    }),
    presetTypography()
  ],
  shortcuts: {
    avatar: "rounded-full w-36 h-36",
    "button-xl": "shadow-md px-6 py-4 rounded-2xl",
    "sidebar-card": "p-3 rounded-2xl bg-surface-container-lowest dark:bg-surface-container-high text-on-surface shadow-md",
    "header-link":
      "px-4 py-2 rounded-3xl transition-colors mx-1 md:mx-4 flex items-center gap-1",
  },
  transformers: [transformerDirectives()],
  tools: [
    Inspector(),
  ],
});
