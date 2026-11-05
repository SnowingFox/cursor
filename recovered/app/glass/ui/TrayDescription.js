// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayDescription.js range:16256505..16257719
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.091Z
frp = L({ "TrayDescription.js"() {
  "use strict";
  E(), dy(), hrp(), grp = { root: { "--markdown-foreground": "ui-ue2tf0", $$css: true } };
} });
import { jsx as Cwa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as _HS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function vrp(t) {
  const e = _HS(15), { icon: n, onClick: i, "aria-label": r, shortcut: s, tooltip: o, dataAttributes: a, disabled: l, component: c, leading: u, rootStyle: d } = t, p = (u === void 0 ? false : u) ? _rp.leading : null;
  let g;
  e[0] !== d || e[1] !== p ? (g = [p, d], e[0] = d, e[1] = p, e[2] = g) : g = e[2];
  let f;
  e[3] !== r || e[4] !== c || e[5] !== a || e[6] !== l || e[7] !== n || e[8] !== i || e[9] !== g ? (f = Cwa(ho, { ...a, "aria-label": r, "data-component": c, disabled: l, icon: n, rootStyle: g, rounded: true, size: "sm", onClick: i }), e[3] = r, e[4] = c, e[5] = a, e[6] = l, e[7] = n, e[8] = i, e[9] = g, e[10] = f) : f = e[10];
  const _ = f;
  let b;
  return e[11] !== _ || e[12] !== s || e[13] !== o ? (b = o ? Cwa(xs, { content: Cwa(ao, { shortcut: s, title: o }), children: _ }) : _, e[11] = _, e[12] = s, e[13] = o, e[14] = b) : b = e[14], b;
}
var _rp, 