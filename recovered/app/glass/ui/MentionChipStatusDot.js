// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MentionChipStatusDot.js range:15683162..15684018
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.784Z
var VXh = L({ "MentionChipStatusDot.js"() {
  "use strict";
  E(), Va(), Qjt();
} });
import { jsx as KXh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as HFS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function WFS(t) {
  return t.tooltipContent && t.tooltipContent.kind === "quote" ? KXh("span", { ...gn(CP.quoteTooltip), children: t.tooltipContent.text }) : t.tooltipText;
}
function YXh(t) {
  const e = HFS(6), { chip: n, children: i } = t;
  if (!n.tooltipContent) return i;
  const r = n.tooltipText;
  let s;
  e[0] !== n ? (s = WFS(n), e[0] = n, e[1] = s) : s = e[1];
  let o;
  return e[2] !== i || e[3] !== n.tooltipText || e[4] !== s ? (o = KXh(xs, { "aria-label": r, content: s, offset: 6, placement: "top", children: i }), e[2] = i, e[3] = n.tooltipText, e[4] = s, e[5] = o) : o = e[5], o;
}
