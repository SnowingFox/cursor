// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayOption.js range:16297674..16299560
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.116Z
var nGS = L({ "TrayOption.js"() {
  "use strict";
  E(), Va(), dy(), mf(), Zkt(), bfi(), d5r(), qu();
} });
import { jsxs as iGS, jsx as Hwa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as rGS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Grp(t) {
  const e = rGS(15), { label: n, labelSuffix: i, description: r, animateDescription: s, descriptionShimmer: o, descriptionColor: a, labelClassName: l, descriptionClassName: c, mainClassName: u, labelStyle: d, mainStyle: h } = t, p = s === void 0 ? false : s, g = o === void 0 ? false : o;
  let f;
  e[0] !== r ? (f = r !== void 0 && r.trim().length > 0, e[0] = r, e[1] = f) : f = e[1];
  const _ = f;
  let b;
  if (e[2] !== p || e[3] !== r || e[4] !== c || e[5] !== a || e[6] !== g || e[7] !== _ || e[8] !== n || e[9] !== l || e[10] !== d || e[11] !== i || e[12] !== u || e[13] !== h) {
    const y = rrp(), S = gn(y.label, y.labelInlineDescription, d), k = gn(y.main, h), C = gn(y.description);
    b = iGS("span", { className: ri("ui-tray-row__main", k.className, u), style: k.style, "data-agent-row-content": true, children: [Hwa("span", { className: ri("ui-tray-row__label", S.className, l), style: S.style, "data-agent-row-label": true, children: n }), i, _ && p ? Hwa(GFe, { className: ri("ui-tray-row__description", C.className, c), style: C.style, color: a ?? "secondary", "data-agent-row-description": true, minHoldMs: p6r, shimmer: g, size: "md", text: r, textKey: r, weight: "regular" }) : _ ? Hwa(nn, { className: ri("ui-tray-row__description", C.className, c), style: C.style, color: a ?? "secondary", size: "md", weight: "regular", "data-agent-row-description": true, children: r }) : null] }), e[2] = p, e[3] = r, e[4] = c, e[5] = a, e[6] = g, e[7] = _, e[8] = n, e[9] = l, e[10] = d, e[11] = i, e[12] = u, e[13] = h, e[14] = b;
  } else b = e[14];
  return b;
}
