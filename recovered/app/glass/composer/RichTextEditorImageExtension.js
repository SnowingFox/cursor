// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: RichTextEditorImageExtension.js range:18325882..18327762
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Fy, $C1, SJh
// wrapper-init: HC1
// hoisted-owner: overlay-scrollbar.js (app-out-vs-workbench-workbench-glass-main-js:3200); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var HC1 = L({ "RichTextEditorImageExtension.js"() {
  "use strict";
  E(), Fy(), $C1(), SJh();
} });
import { jsx as mAp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as WC1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as TMa, useLayoutEffect as gAp } from "./react-runtime/react/esm-index-production.js";
function lHr(t) {
  const e = WC1(19), { scroller: n, contentKey: i, style: r, direction: s } = t, o = s === void 0 ? "vertical" : s, a = TMa(null), l = TMa(null), c = TMa(null);
  let u, d;
  e[0] !== o || e[1] !== n ? (u = () => {
    const y = a.current, S = l.current;
    if (n === null || y === null || S === null) return;
    const k = new Y2r({ viewport: n, scrollbar: y, thumb: S, direction: o });
    return k.attach(), c.current = k, () => {
      c.current = null, k.detach(), y.dataset.scrollable = "false";
    };
  }, d = [o, n], e[0] = o, e[1] = n, e[2] = u, e[3] = d) : (u = e[2], d = e[3]), gAp(u, d);
  let h;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = () => {
    c.current?.refresh();
  }, e[4] = h) : h = e[4];
  let p;
  e[5] !== i ? (p = [i], e[5] = i, e[6] = p) : p = e[6], gAp(h, p);
  let g;
  e[7] !== o || e[8] !== r ? (g = gn(Vea({ direction: o, orientation: o, visibility: "always" }), fAp.vars, r), e[7] = o, e[8] = r, e[9] = g) : g = e[9];
  let f;
  e[10] !== o ? (f = gn(Kea(o, false)), e[10] = o, e[11] = f) : f = e[11];
  let _;
  e[12] !== o || e[13] !== f ? (_ = mAp("div", { ref: l, ...f, "data-orientation": o }), e[12] = o, e[13] = f, e[14] = _) : _ = e[14];
  let b;
  return e[15] !== o || e[16] !== g || e[17] !== _ ? (b = mAp("div", { ref: a, ...g, "data-orientation": o, "data-scrollable": "false", role: "presentation", "aria-hidden": "true", children: _ }), e[15] = o, e[16] = g, e[17] = _, e[18] = b) : b = e[18], b;
}
var fAp, 