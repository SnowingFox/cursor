// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToolCallRenderer.js range:15502397..15504931
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Ddi, Ldi, irt, AO, fjt, pWh, VGh, nKh, rKh, gya, eNS, CKh, lVh, Cjt, dNS, aya, gmi, JVh, Ekt, uae, YSn, m2e, TNS, xNS, PNS, bya, FNS, jNS, qNS, YNS, Cya, fd, Lz, Fwh, c0e
// wrapper-init: Eya
// hoisted-owner: TurnActions.js (app-out-vs-workbench-workbench-glass-main-js:2424); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Eya = L({ "ToolCallRenderer.js"() {
  "use strict";
  E(), Ddi(), Ldi(), irt(), AO(), fjt(), pWh(), VGh(), nKh(), rKh(), gya(), eNS(), CKh(), lVh(), Cjt(), dNS(), aya(), gmi(), JVh(), Ekt(), uae(), YSn(), m2e(), TNS(), xNS(), PNS(), bya(), FNS(), jNS(), qNS(), YNS(), Cya(), fd(), Lz(), Fwh(), c0e(), NKh = /\[[^\]]*\]\([^)]*\)/, LKh = { markdown: { kGuDYH: "ui-1qlqyl8", kLWn49: "ui-15bjb6t", kMwMTN: "ui-1heor9g", kfSwDN: "ui-5oag5m", $$css: true } };
} });
import { jsx as b1n, jsxs as aLS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as lLS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as cLS, useRef as uLS, useEffect as dLS } from "./react-runtime/react/esm-index-production.js";
function hLS(t) {
  const e = [];
  for (const n of t) switch (n.type) {
    case "thinking":
      e.push(`[Thinking]
${n.thinking}`);
      break;
    case "assistant-message":
      e.push(n.message);
      break;
    case "tool-call": {
      const { action: i, details: r } = LFr(n.toolCallVm);
      e.push(r ? `[${i}] ${r}` : `[${i}]`);
      break;
    }
  }
  return e.join(`

`);
}
function pLS(t) {
  const e = lLS(12), { steps: n } = t, { copyToClipboard: i } = uR(), [r, s] = cLS(false), o = uLS(null);
  let a, l;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = () => () => {
    o.current && clearTimeout(o.current);
  }, l = [], e[0] = a, e[1] = l) : (a = e[0], l = e[1]), dLS(a, l);
  let c;
  e[2] !== i || e[3] !== n ? (c = () => {
    i && (i(hLS(n)), s(true), o.current && clearTimeout(o.current), o.current = setTimeout(() => {
      s(false), o.current = null;
    }, 2e3));
  }, e[2] = i, e[3] = n, e[4] = c) : c = e[4];
  const u = c;
  if (!i) return null;
  let d;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = b1n(hn.Trigger, { children: b1n(ho, { icon: "ellipsis", size: "sm", variant: "ghost", "aria-label": "More actions" }) }), e[5] = d) : d = e[5];
  const h = r ? "check" : "copy";
  let p;
  e[6] !== h ? (p = b1n(zt, { name: h }), e[6] = h, e[7] = p) : p = e[7];
  const g = r ? "Copied!" : "Copy Message";
  let f;
  return e[8] !== u || e[9] !== p || e[10] !== g ? (f = b1n("div", { className: "ui-78zum5 ui-13a6bvl ui-1iorvi4 ui-1xpa7k ui-18d9i69 ui-1uhho1l", children: aLS(hn, { children: [d, b1n(hn.Content, { "aria-label": "Turn actions", children: b1n(hn.Item, { leading: p, onSelect: u, children: g }) })] }) }), e[8] = u, e[9] = p, e[10] = g, e[11] = f) : f = e[11], f;
}
var OKh, 