# Patch evidence: extensionResourceLoader.js

- module: app-out-vs-workbench-workbench-glass-main-js:4904
- bundle: app/out/vs/workbench/workbench.glass.main.js range 28220766..28224539
- upstream: src/vs/platform/extensionResourceLoader/common/extensionResourceLoader.ts sha256:cfedd77b7bbfa982152eb17a7c871f628abfbc64cee0bb0ec91610c919248458
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.9; shared rare anchors: 33
- bundle-only anchors: 3; upstream anchors absent from bundle: 5

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| ExtensionResourceUriTemplate | 28221699..28221727 | no (exists elsewhere upstream) | ve(t) { this._extensionGalleryResourceUrlTemplate = t ? Clt(t, "ExtensionResourceUriTemplate") : void 0, this._extensionGalleryAuthority = this._extensionGalleryR |
| unknown | 28222404..28222411 | no (exists elsewhere upstream) | her: t, name: e, version: i !== void 0 && i !== "undefined" && i !== "unknown" && i !== "universal" ? `${n}+${i}` : n, path: "extension" })); |
| universal | 28222423..28222432 | no (exists elsewhere upstream) | rsion: i !== void 0 && i !== "undefined" && i !== "unknown" && i !== "universal" ? `${n}+${i}` : n, path: "extension" })); return this._isWeb |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| /web-extension-resource/ | 24 |
| extension | 121 |
| X-Client-Name | 137 |
| X-Client-Version | 138 |
| X-Machine-Id | 141 |
| X-Client-Commit | 144 |

