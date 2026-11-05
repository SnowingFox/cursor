# Patch evidence: inlayHintsLocations.js

- module: app-out-vs-workbench-workbench-glass-main-js:3253
- bundle: app/out/vs/workbench/workbench.glass.main.js range 19074863..19076280
- upstream: src/vs/editor/contrib/inlayHints/browser/inlayHintsLocations.ts sha256:e5a7457bf1d1d09d6d743082ac94d96377a5ed83cf0990187bbe9792cc614455
- basis: import-graph confidence: B classification: upstream-modified
- dependency overlap: 0.929; shared rare anchors: 1
- bundle-only anchors: 6; upstream anchors absent from bundle: 28

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Symbol. | 19075065..19075072 | yes | (), It(), Ks(), e3a = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), t3a = (t) => { throw TypeError(t); }, EPp = |
| Object expected | 19075239..19075254 | yes | null) { typeof e != "object" && typeof e != "function" && t3a("Object expected"); var i, r; n && (i = e[e3a("asyncDispose")]), i === voi |
| asyncDispose | 19075297..19075309 | yes | on" && t3a("Object expected"); var i, r; n && (i = e[e3a("asyncDispose")]), i === void 0 && (i = e[e3a("dispose")], n && (r = i)), typeof i |
| Object not disposable | 19075401..19075422 | yes | (i = e[e3a("dispose")], n && (r = i)), typeof i != "function" && t3a("Object not disposable"), r && (i = function() { try { r.call(this); |
| SuppressedError | 19075672..19075687 | yes | push([n]); return e; }, IPp = (t, e, n) => { var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) { return |
| An error was suppressed during disposal | 19075873..19075912 | yes | rror = o, c.suppressed = a, c; }, r = (o) => e = n ? new i(o, e, "An error was suppressed during disposal") : (n = true, o), s = (o) => { for (; o = t.pop(); ) try { |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| , original:  | 110 |

