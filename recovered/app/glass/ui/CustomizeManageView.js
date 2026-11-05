// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeManageView.js range:22821181..22824371
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.595Z
tQ1 = L({ "CustomizeManageView.js"() {
  "use strict";
  E(), Mt(), J7(), $ot(), Hot(), NHm(), iCi(), Ges(), HHm(), NZa(), AZ1(), UZ1(), $Z1(), aWm = [], lWm = [], BZa = [], cWm = ["user"], uWm = { display: "inline-flex", flexShrink: 0, opacity: 0.4, cursor: "not-allowed" }, UZa = { pointerEvents: "none" }, dWm = { ...Les, ...UZa };
} });
import { jsx as Nqt, jsxs as aCi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as nQ1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function iQ1() {
  return hWm.root;
}
function rQ1(t) {
  const e = nQ1(24), { plugin: n, installCount: i, onClick: r } = t;
  let s;
  e[0] !== n.publisher?.displayName ? (s = n.publisher?.displayName?.trim(), e[0] = n.publisher?.displayName, e[1] = s) : s = e[1];
  const o = s;
  let a;
  e[2] !== i ? (a = i !== void 0 && i > 0 ? pWm.format(i) : void 0, e[2] = i, e[3] = a) : a = e[3];
  const l = a;
  let c;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = Sc(iQ1()), e[4] = c) : c = e[4];
  const u = c, d = u.className, h = u.style;
  let p;
  e[5] !== n ? (p = W7(n, 40), e[5] = n, e[6] = p) : p = e[6];
  let g;
  e[7] !== p ? (g = Nqt("div", { className: "cursor-ui-78zum5 cursor-ui-2lah0s cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-1niwmkg cursor-ui-f2gx5w cursor-ui-1m7fhj7 cursor-ui-1bhy06v cursor-ui-6ikm8r cursor-ui-10wlt62", children: p }), e[7] = p, e[8] = g) : g = e[8];
  let f;
  e[9] !== n.displayName ? (f = Nqt(nn, { size: "md", weight: "medium", truncate: true, children: n.displayName }), e[9] = n.displayName, e[10] = f) : f = e[10];
  let _;
  e[11] !== n.description ? (_ = n.description && Nqt(nn, { size: "sm", color: "secondary", className: "cursor-ui-6ikm8r cursor-ui-10wlt62 cursor-ui-lyipyv cursor-ui-uxw1ft", children: n.description }), e[11] = n.description, e[12] = _) : _ = e[12];
  let b;
  e[13] !== l || e[14] !== o ? (b = (o || l) && aCi("div", { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-1a02dak cursor-ui-6s0dn4 cursor-ui-1dbef6d cursor-ui-1mdx765 cursor-ui-1e4uaio cursor-ui-y5h43f", children: [o && aCi("span", { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-11twubx", children: [Nqt(zt, { name: "seal-check", size: "sm", className: "cursor-ui-2lah0s", "aria-hidden": true }), Nqt("span", { className: "cursor-ui-uxw1ft", children: o })] }), l && aCi("span", { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-11twubx", children: [Nqt(zt, { name: "arrow-down", size: "sm", className: "cursor-ui-2lah0s", "aria-hidden": true }), Nqt("span", { className: "cursor-ui-uxw1ft", children: l })] })] }), e[13] = l, e[14] = o, e[15] = b) : b = e[15];
  let y;
  e[16] !== b || e[17] !== f || e[18] !== _ ? (y = aCi("div", { className: "cursor-ui-78zum5 cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-dt5ytf cursor-ui-137clkk cursor-ui-euugli", children: [f, _, b] }), e[16] = b, e[17] = f, e[18] = _, e[19] = y) : y = e[19];
  let S;
  return e[20] !== r || e[21] !== y || e[22] !== g ? (S = aCi("button", { type: "button", className: d, style: h, onClick: r, children: [g, y] }), e[20] = r, e[21] = y, e[22] = g, e[23] = S) : S = e[23], S;
}
var hWm, pWm, 