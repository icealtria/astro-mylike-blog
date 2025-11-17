import {
  hexFromArgb,
  argbFromHex,
  MaterialDynamicColors,
  Hct,
  SchemeContent,
  SchemeExpressive,
  SchemeFidelity,
  SchemeMonochrome,
  SchemeNeutral,
  SchemeTonalSpot,
  SchemeVibrant,
  DynamicScheme,
} from "@material/material-color-utilities";
import type { Preset } from "@unocss/core";

export interface MaterialOptions {
  primary: string;
  scheme: SchemeName;
}

const AllMaterialDynamicColors = {
  // background: MaterialDynamicColors.background,
  // "on-background": MaterialDynamicColors.onBackground,

  surface: MaterialDynamicColors.surface,
  "surface-dim": MaterialDynamicColors.surfaceDim,
  "surface-bright": MaterialDynamicColors.surfaceBright,
  "surface-container-lowest": MaterialDynamicColors.surfaceContainerLowest,
  // "surface-container-low": MaterialDynamicColors.surfaceContainerLow,
  "surface-container": MaterialDynamicColors.surfaceContainer,
  // "surface-container-high": MaterialDynamicColors.surfaceContainerHigh,
  "surface-container-highest": MaterialDynamicColors.surfaceContainerHighest,
  "on-surface": MaterialDynamicColors.onSurface,
  "on-surface-dim": MaterialDynamicColors.onSurface,
  "on-surface-bright": MaterialDynamicColors.onSurface,
  "on-surface-container-lowest": MaterialDynamicColors.onSurface,
  // "on-surface-container-low": MaterialDynamicColors.onSurface,
  // "on-surface-container": MaterialDynamicColors.onSurface,
  // "on-surface-container-high": MaterialDynamicColors.onSurface,
  "on-surface-container-highest": MaterialDynamicColors.onSurface,

  "surface-variant": MaterialDynamicColors.surfaceVariant,
  "on-surface-variant": MaterialDynamicColors.onSurfaceVariant,

  // "inverse-surface": MaterialDynamicColors.inverseSurface,
  // "on-inverse-surface": MaterialDynamicColors.inverseOnSurface,

  // outline: MaterialDynamicColors.outline,
  // "outline-variant": MaterialDynamicColors.outlineVariant,

  // "surface-tint": MaterialDynamicColors.surfaceTint,
  // "on-surface-tint": MaterialDynamicColors.onSurface,

  primary: MaterialDynamicColors.primary,
  "on-primary": MaterialDynamicColors.onPrimary,

  "primary-container": MaterialDynamicColors.primaryContainer,
  "on-primary-container": MaterialDynamicColors.onPrimaryContainer,

  // "inverse-primary": MaterialDynamicColors.inversePrimary,

  secondary: MaterialDynamicColors.secondary,
  "on-secondary": MaterialDynamicColors.onSecondary,

  "secondary-container": MaterialDynamicColors.secondaryContainer,
  "on-secondary-container": MaterialDynamicColors.onSecondaryContainer,

  tertiary: MaterialDynamicColors.tertiary,
  "on-tertiary": MaterialDynamicColors.onTertiary,

  "tertiary-container": MaterialDynamicColors.tertiaryContainer,
  "on-tertiary-container": MaterialDynamicColors.onTertiaryContainer,

  // error: MaterialDynamicColors.error,
  // "on-error": MaterialDynamicColors.onError,

  // "error-container": MaterialDynamicColors.errorContainer,
  // "on-error-container": MaterialDynamicColors.onErrorContainer,

  // scrim: MaterialDynamicColors.scrim,
  // shadow: MaterialDynamicColors.shadow,
};

const schemes = {
  content: SchemeContent,
  expressive: SchemeExpressive,
  fidelity: SchemeFidelity,
  monochrome: SchemeMonochrome,
  neutral: SchemeNeutral,
  tonalSpot: SchemeTonalSpot,
  vibrant: SchemeVibrant,
};

type SchemeName = keyof typeof schemes;
// type ColorName = keyof typeof AllMaterialDynamicColors; // 不再需要

function genScheme(source: number, dark: boolean, schemeName: SchemeName): DynamicScheme {
  const SchemeClass = schemes[schemeName] || SchemeTonalSpot;
  return new SchemeClass(Hct.fromInt(source), dark, 0);
}

function genHoverVar(name: string) {
  const bg = `var(--${name})`;
  const on = `var(--on-${name})`;

  // MD3 hover = background + onBackground * 8%
  return `--${name}-hover: color-mix(in srgb, ${on} 8%, ${bg});`;
}

export const presetMaterialColor = (opts: MaterialOptions): Preset => {
  const { primary, scheme } = opts;
  const source = argbFromHex(primary);
  const lightScheme = genScheme(source, false, scheme);
  const darkScheme = genScheme(source, true, scheme);

  // light/dark vars
  const lightVars = Object.entries(AllMaterialDynamicColors)
    .map(([name, dyn]) => {
      const base = `--${name}: ${hexFromArgb(dyn.getArgb(lightScheme))};`;

      // ❗ 不为 on-* 生成 hover
      if (name.startsWith("on-")) {
        return base;
      }

      const hover = genHoverVar(name);
      return `${base}\n${hover}`;
    })
    .join("\n");

  const darkVars = Object.entries(AllMaterialDynamicColors)
    .map(([name, dyn]) => {
      const base = `--${name}: ${hexFromArgb(dyn.getArgb(darkScheme))};`;

      // ❗ 不为 on-* 生成 hover
      if (name.startsWith("on-")) {
        return base;
      }

      const hover = genHoverVar(name);
      return `${base}\n${hover}`;
    })
    .join("\n");


  // theme.colors -> var(--xxx)
  const themeColors = Object.fromEntries(
    Object.keys(AllMaterialDynamicColors).flatMap((name) => {
      const entries: [string, string][] = [];

      // base color
      entries.push([name, `var(--${name})`]);

      // ❗ 不为 on-* 注册 hover token
      if (!name.startsWith("on-")) {
        entries.push([`${name}-hover`, `var(--${name}-hover)`]);
      }

      return entries;
    })
  );

  return {
    name: "preset-material-color",
    theme: {
      colors: themeColors,
    },
    preflights: [
      {
        getCSS: () => `
:root {
${lightVars}
}
@media (prefers-color-scheme: dark) {
  :root {
${darkVars}
  }
}
        `,
      },
    ],
  };
};