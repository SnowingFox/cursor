// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentConversationContext.js range:15018970..15019751
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.122Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, LinkNavigationContext.js, MarkdownDefaultsContext.js, conversation-density.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, LinkNavigationContext.js, MarkdownDefaultsContext.js, conversation-density.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
AO = L({ "AgentConversationContext.js"() {
  "use strict";
  E(), cNr(), Ddi(), fjt(), cFr = XIS({ conversationDensity: mkt, messageLayout: "default" });
} });
import { c as QIS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as JIS, useRef as exS } from "./react-runtime/react/esm-index-production.js";
function j_e(t) {
  const e = QIS(5), { onBeforeTranscriptDisclosureChange: n } = uR(), i = ro(n), [r, s] = JIS(t), o = exS(t);
  let a;
  e[0] !== i ? (a = (u) => {
    const d = o.current, h = typeof u == "function" ? u(d) : u;
    h !== d && (i.current?.(), o.current = h, s(h));
  }, e[0] = i, e[1] = a) : a = e[1];
  const l = a;
  let c;
  return e[2] !== l || e[3] !== r ? (c = [r, l], e[2] = l, e[3] = r, e[4] = c) : c = e[4], c;
}
