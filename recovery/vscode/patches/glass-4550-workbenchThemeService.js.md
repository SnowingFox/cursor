# Patch evidence: workbenchThemeService.js

- module: app-out-vs-workbench-workbench-glass-main-js:4550
- bundle: app/out/vs/workbench/workbench.glass.main.js range 26571238..26576013
- upstream: src/vs/workbench/services/themes/common/workbenchThemeService.ts sha256:d2426ee09d2c0f30e172b3d0be8ccb1d1750c5c9393c9004d9177c0c03e5aaf5
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.75; shared rare anchors: 60
- bundle-only anchors: 6; upstream anchors absent from bundle: 216

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Cursor Light Colorblind | 26572576..26572599 | yes | ON_THEME = "Default", t))(lI \|\| {}), rhl = /* @__PURE__ */ new Map([["Cursor Light Colorblind (Beta)", "Cursor Light Colorblind"]]), sxi = "glass_custom_theme_supp |
| glass_custom_theme_support | 26572646..26572672 | yes | Cursor Light Colorblind (Beta)", "Cursor Light Colorblind"]]), sxi = "glass_custom_theme_support", oxi = /* @__PURE__ */ new Map([["Cursor Dark Colorblind", "Cursor D |
| Cursor Dark Colorblind | 26572708..26572730 | yes | sxi = "glass_custom_theme_support", oxi = /* @__PURE__ */ new Map([["Cursor Dark Colorblind", "Cursor Dark"], ["Cursor Light High Contrast", "Cursor Light"]]), w |
| Cursor Dark | 26572220..26572231 | yes | systemColorTheme", t))(_h \|\| {}), lI = ((t) => (t.COLOR_THEME_DARK = "Cursor Dark", t.COLOR_THEME_LIGHT = "Cursor Light", t.COLOR_THEME_HC_DARK = "Defa |
| Cursor Light High Contrast | 26572751..26572777 | yes | /* @__PURE__ */ new Map([["Cursor Dark Colorblind", "Cursor Dark"], ["Cursor Light High Contrast", "Cursor Light"]]), wSg = { "activityBar.activeBorder": "#0078d4", " |
| Cursor Light | 26572257..26572269 | yes | = ((t) => (t.COLOR_THEME_DARK = "Cursor Dark", t.COLOR_THEME_LIGHT = "Cursor Light", t.COLOR_THEME_HC_DARK = "Default High Contrast", t.COLOR_THEME_HC_L |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| workbench.colorTheme | 24 |
| workbench.iconTheme | 25 |
| workbench.productIconTheme | 26 |
| workbench.colorCustomizations | 27 |
| editor.tokenColorCustomizations | 28 |
| editor.semanticTokenColorCustomizations | 29 |
| workbench.preferredDarkColorTheme | 31 |
| workbench.preferredLightColorTheme | 32 |
| workbench.preferredHighContrastColorTheme | 33 |
| workbench.preferredHighContrastLightColorTheme | 34 |
| window.autoDetectColorScheme | 35 |
| window.autoDetectHighContrast | 36 |
| window.systemColorTheme | 38 |
| Default | 53 |
| Experimental | 54 |
| Default Dark Modern | 58 |
| Default Light Modern | 59 |
| Default Dark+ | 60 |
| Default Light+ | 61 |
| Experimental Dark | 62 |
| VS Code Dark | 63 |
| Experimental Light | 65 |
| VS Code Light | 66 |
| actionBar.toggledBackground | 73 |
| activityBar.activeBorder | 74 |
| activityBar.background | 75 |
| activityBar.border | 76 |
| activityBar.foreground | 77 |
| activityBar.inactiveForeground | 78 |
| activityBarBadge.background | 79 |
| activityBarBadge.foreground | 80 |
| badge.background | 81 |
| badge.foreground | 82 |
| button.background | 83 |
| button.border | 84 |
| button.foreground | 85 |
| button.hoverBackground | 86 |
| button.secondaryBackground | 87 |
| button.secondaryForeground | 88 |
| button.secondaryHoverBackground | 89 |

