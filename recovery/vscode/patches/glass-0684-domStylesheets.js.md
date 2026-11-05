# Patch evidence: domStylesheets.js

- module: app-out-vs-workbench-workbench-glass-main-js:0684
- bundle: app/out/vs/workbench/workbench.glass.main.js range 2594036..2595889
- upstream: src/vs/base/browser/domStylesheets.ts sha256:7419032aaf4a92e47d017cdcf656c4b1bef9bc11bb6662d4a1cc01842d8f05dc
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.75; shared rare anchors: 5
- bundle-only anchors: 6; upstream anchors absent from bundle: 18

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Symbol. | 2594164..2594171 | yes | (), Hn(), Bs(), x7o = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), A7o = (t) => { throw TypeError(t); }, s5d = |
| Object expected | 2594338..2594353 | yes | null) { typeof e != "object" && typeof e != "function" && A7o("Object expected"); var i, r; n && (i = e[x7o("asyncDispose")]), i === voi |
| asyncDispose | 2594396..2594408 | yes | on" && A7o("Object expected"); var i, r; n && (i = e[x7o("asyncDispose")]), i === void 0 && (i = e[x7o("dispose")], n && (r = i)), typeof i |
| Object not disposable | 2594500..2594521 | yes | (i = e[x7o("dispose")], n && (r = i)), typeof i != "function" && A7o("Object not disposable"), r && (i = function() { try { r.call(this); |
| SuppressedError | 2594771..2594786 | yes | push([n]); return e; }, o5d = (t, e, n) => { var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) { return |
| An error was suppressed during disposal | 2594972..2595011 | yes | rror = o, c.suppressed = a, c; }, r = (o) => e = n ? new i(o, e, "An error was suppressed during disposal") : (n = true, o), s = (o) => { for (; o = t.pop(); ) try { |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| text/css | 44 |
| screen | 45 |
| string | 152 |

