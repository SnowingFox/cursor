// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MarkdownPluginRegistry.js range:11127041..11128259
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E
// wrapper-init: bPh
// hoisted-owner: markdownParagraphAdjacency.js (app-out-vs-workbench-workbench-glass-main-js:1961); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

bPh = L({ "MarkdownPluginRegistry.js"() {
  "use strict";
  E(), Uca = /* @__PURE__ */ new Map();
} });
import { c as EuS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as IuS, useLayoutEffect as xuS } from "./react-runtime/react/esm-index-production.js";
function AuS(t) {
  const e = t.nextElementSibling;
  return e === null ? null : e.localName === "ul" || e.localName === "ol" ? "list" : e.classList.contains("composer-message-codeblock") || e.localName === "div" && e.querySelector(kPh) !== null ? "embedded" : null;
}
function yPh(t) {
  for (const e of t.querySelectorAll(SPh)) {
    const n = AuS(e);
    n === null ? e.removeAttribute("data-md-next") : e.getAttribute("data-md-next") !== n && e.setAttribute("data-md-next", n);
  }
}
function RuS() {
  const t = EuS(2), e = IuS(null);
  let n, i;
  return t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (n = () => {
    const r = e.current;
    if (r === null) return;
    yPh(r);
    const s = new MutationObserver(() => yPh(r));
    return s.observe(r, { childList: true, subtree: true }), () => s.disconnect();
  }, i = [], t[0] = n, t[1] = i) : (n = t[0], i = t[1]), xuS(n, i), e;
}
var SPh, kPh, 