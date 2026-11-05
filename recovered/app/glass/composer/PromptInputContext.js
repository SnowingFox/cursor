// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputContext.js range:17259830..17261356
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E
// wrapper-init: zrt
// hoisted-owner: PlusButtonTrigger.js (app-out-vs-workbench-workbench-glass-main-js:2914); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

zrt = L({ "PromptInputContext.js"() {
  "use strict";
  E(), Pvi = zo1(null);
} });
import { jsx as CIa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Vo1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Ifp(t) {
  const e = Vo1(14), { buttonProps: n, disabled: i, isOpen: r, iconName: s } = t, o = i === void 0 ? false : i, a = s === void 0 ? "plus" : s, { isExpanded: l, variant: c } = TGe("PromptInput.PlusButton"), u = c !== "expanded";
  let d;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = CIa(ao, { title: "Modes, skills, MCPs and more", shortcut: "/" }), e[0] = d) : d = e[0];
  const h = r || void 0, p = r && Mvi.open, g = u && Mvi.compact, f = u && l && Mvi.compactExpanded;
  let _;
  e[1] !== p || e[2] !== g || e[3] !== f ? (_ = [Mvi.foreground, p, g, f], e[1] = p, e[2] = g, e[3] = f, e[4] = _) : _ = e[4];
  let b;
  e[5] !== n || e[6] !== o || e[7] !== a || e[8] !== h || e[9] !== _ ? (b = CIa(ho, { ...n, "aria-label": "Add agents, context, tools", "data-compact-visible": true, "data-open": h, "data-prompt-input-compact-visible-slot": true, disabled: o, icon: a, iconSize: "base", rootStyle: _, rounded: true, size: "md", variant: "secondary" }), e[5] = n, e[6] = o, e[7] = a, e[8] = h, e[9] = _, e[10] = b) : b = e[10];
  let y;
  return e[11] !== o || e[12] !== b ? (y = CIa(xs, { disabled: o, content: d, placement: "top", sameAxisOnly: true, children: b }), e[11] = o, e[12] = b, e[13] = y) : y = e[13], y;
}
var Mvi, 