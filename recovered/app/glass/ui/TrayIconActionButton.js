// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayIconActionButton.js range:16257719..16259076
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.114Z
brp = L({ "TrayIconActionButton.js"() {
  "use strict";
  E(), Q3(), hL(), _rp = { leading: { k71WvV: "ui-tu8e0r", $$css: true } };
} });
import { jsx as bHS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as yHS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function yrp(t) {
  const e = yHS(14), { children: n, component: i, size: r, tone: s, truncate: o, title: a } = t, l = r === void 0 ? "default" : r, c = s === void 0 ? "default" : s, u = o === void 0 ? false : o, d = c === "muted" ? "secondary" : void 0, h = u ? "clamp" : void 0, p = c === "muted" ? d$t.toneMuted : d$t.toneDefault, g = l === "default" ? d$t.railLineHeight : null, f = u ? d$t.truncateClamp : null;
  let _;
  e[0] !== p || e[1] !== g || e[2] !== f ? (_ = [d$t.root, d$t.cluster, p, g, f], e[0] = p, e[1] = g, e[2] = f, e[3] = _) : _ = e[3];
  const b = l === "lg" ? "lg" : "md";
  let y;
  return e[4] !== n || e[5] !== i || e[6] !== l || e[7] !== b || e[8] !== d || e[9] !== h || e[10] !== _ || e[11] !== a || e[12] !== c ? (y = bHS(nn, { as: "div", color: d, "data-component": i, "data-size": l, "data-tone": c, "data-truncate": h, rootStyle: _, size: b, title: a, weight: "regular", children: n }), e[4] = n, e[5] = i, e[6] = l, e[7] = b, e[8] = d, e[9] = h, e[10] = _, e[11] = a, e[12] = c, e[13] = y) : y = e[13], y;
}
var d$t, 