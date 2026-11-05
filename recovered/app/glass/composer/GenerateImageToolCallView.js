// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GenerateImageToolCallView.js range:15522319..15524863
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, nmi, uae, m2e, HFe, DLS, hL
// wrapper-init: VKh
// hoisted-owner: McpServerIconStack.js (app-out-vs-workbench-workbench-glass-main-js:2432); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var VKh = L({ "GenerateImageToolCallView.js"() {
  "use strict";
  E(), nmi(), uae(), m2e(), HFe(), DLS(), hL();
} });
import { jsx as Mmi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as LLS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as KKh, useEffect as OLS } from "./react-runtime/react/esm-index-production.js";
function FLS(t, e, n, i, r) {
  return `M${t + r} ${e}H${n - r}A${r} ${r} 0 0 1 ${n} ${e + r}V${i - r}A${r} ${r} 0 0 1 ${n - r} ${i}H${t + r}A${r} ${r} 0 0 1 ${t} ${i - r}V${e + r}A${r} ${r} 0 0 1 ${t + r} ${e}Z`;
}
function BLS() {
  const t = j6r - qjt - y1n, e = j6r + y1n, n = -y1n, i = qjt + y1n, r = FLS(t, n, e, i, xya + y1n);
  return { clipPath: `path(evenodd, "${`M0 0H${qjt}V${qjt}H0Z`} ${r}")` };
}
function ULS(t) {
  const e = LLS(14), { server: n, index: i, total: r, animate: s } = t;
  let o;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = { 0: { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-2lah0s" }, 1: { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-t45xpk ui-1aquc0h ui-llfotl ui-rmiu4m ui-1u6ievf" } }, e[0] = o) : o = e[0];
  const a = o[!!s << 0], l = i === 0 ? 0 : `-${j6r}px`, c = r - i;
  let u;
  e[1] !== i ? (u = i === 0 ? void 0 : BLS(), e[1] = i, e[2] = u) : u = e[2];
  let d;
  e[3] !== a.style || e[4] !== l || e[5] !== c || e[6] !== u ? (d = { ...a.style, marginLeft: l, zIndex: c, ...u }, e[3] = a.style, e[4] = l, e[5] = c, e[6] = u, e[7] = d) : d = e[7];
  let h;
  e[8] !== n.id ? (h = Mmi(gKh, { size: qjt, radius: xya, children: Mmi(pKh, { serverId: n.id, glyphSize: XKh, faviconSize: YKh }) }), e[8] = n.id, e[9] = h) : h = e[9];
  let p;
  return e[10] !== a.className || e[11] !== d || e[12] !== h ? (p = Mmi("span", { className: a.className, style: d, children: h }), e[10] = a.className, e[11] = d, e[12] = h, e[13] = p) : p = e[13], p;
}
function jLS({ servers: t }) {
  const e = t.slice(0, Iya), n = KKh(/* @__PURE__ */ new Set()), i = KKh(false), r = n.current, s = i.current;
  if (OLS(() => {
    for (const a of t.slice(0, Iya)) n.current.add(a.id);
    i.current = true;
  }, [t]), e.length === 0) return null;
  const o = { className: "ui-3nfvp2 ui-6s0dn4 ui-xymvpz ui-1uqg51p ui-7y29xt" };
  return Mmi("span", { className: o.className, style: o.style, "aria-hidden": true, "data-mcp-server-icon-stack": true, children: e.map((a, l) => Mmi(ULS, { server: a, index: l, total: e.length, animate: s && !r.has(a.id) }, a.id)) });
}
var Iya, qjt, xya, YKh, XKh, j6r, y1n, 