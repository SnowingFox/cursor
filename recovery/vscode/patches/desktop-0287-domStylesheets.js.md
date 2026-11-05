# Patch evidence: domStylesheets.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0287
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 677777..679630
- upstream: src/vs/base/browser/domStylesheets.ts sha256:7419032aaf4a92e47d017cdcf656c4b1bef9bc11bb6662d4a1cc01842d8f05dc
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.75; shared rare anchors: 5
- bundle-only anchors: 6; upstream anchors absent from bundle: 18

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Symbol. | 677905..677912 | yes | (), en(), lo(), gYr = (e, t) => (t = Symbol[e]) ? t : /* @__PURE__ */ Symbol.for("Symbol." + e), fYr = (e) => { throw TypeError(e); }, fDc = |
| Object expected | 678079..678094 | yes | null) { typeof t != "object" && typeof t != "function" && fYr("Object expected"); var i, r; n && (i = t[gYr("asyncDispose")]), i === voi |
| asyncDispose | 678137..678149 | yes | on" && fYr("Object expected"); var i, r; n && (i = t[gYr("asyncDispose")]), i === void 0 && (i = t[gYr("dispose")], n && (r = i)), typeof i |
| Object not disposable | 678241..678262 | yes | (i = t[gYr("dispose")], n && (r = i)), typeof i != "function" && fYr("Object not disposable"), r && (i = function() { try { r.call(this); |
| SuppressedError | 678512..678527 | yes | push([n]); return t; }, vDc = (e, t, n) => { var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) { return |
| An error was suppressed during disposal | 678713..678752 | yes | rror = o, l.suppressed = a, l; }, r = (o) => t = n ? new i(o, t, "An error was suppressed during disposal") : (n = true, o), s = (o) => { for (; o = e.pop(); ) try { |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| text/css | 44 |
| screen | 45 |
| string | 152 |

