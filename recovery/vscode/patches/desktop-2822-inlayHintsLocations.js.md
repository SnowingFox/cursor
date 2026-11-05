# Patch evidence: inlayHintsLocations.js

- module: app-out-vs-workbench-workbench-desktop-main-js:2822
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 16927798..16929214
- upstream: src/vs/editor/contrib/inlayHints/browser/inlayHintsLocations.ts sha256:e5a7457bf1d1d09d6d743082ac94d96377a5ed83cf0990187bbe9792cc614455
- basis: import-graph confidence: B classification: upstream-modified
- dependency overlap: 0.929; shared rare anchors: 1
- bundle-only anchors: 6; upstream anchors absent from bundle: 28

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Symbol. | 16927999..16928006 | yes | (), Ze(), ji(), W$s = (e, t) => (t = Symbol[e]) ? t : /* @__PURE__ */ Symbol.for("Symbol." + e), G$s = (e) => { throw TypeError(e); }, Lku = |
| Object expected | 16928173..16928188 | yes | null) { typeof t != "object" && typeof t != "function" && G$s("Object expected"); var i, r; n && (i = t[W$s("asyncDispose")]), i === voi |
| asyncDispose | 16928231..16928243 | yes | on" && G$s("Object expected"); var i, r; n && (i = t[W$s("asyncDispose")]), i === void 0 && (i = t[W$s("dispose")], n && (r = i)), typeof i |
| Object not disposable | 16928335..16928356 | yes | (i = t[W$s("dispose")], n && (r = i)), typeof i != "function" && G$s("Object not disposable"), r && (i = function() { try { r.call(this); |
| SuppressedError | 16928606..16928621 | yes | push([n]); return t; }, Nku = (e, t, n) => { var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) { return |
| An error was suppressed during disposal | 16928807..16928846 | yes | rror = o, l.suppressed = a, l; }, r = (o) => t = n ? new i(o, t, "An error was suppressed during disposal") : (n = true, o), s = (o) => { for (; o = e.pop(); ) try { |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| , original:  | 110 |

