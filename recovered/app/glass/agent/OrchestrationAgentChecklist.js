// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: OrchestrationAgentChecklist.js range:17217288..17219751
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.250Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, ProjectAgentStatusGlyph.js, ProjectTone.js, projectAgentRole.js, Text.js, Markdown.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, ProjectAgentStatusGlyph.js, ProjectTone.js, projectAgentRole.js, Text.js, Markdown.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
var Hs1 = L({ "OrchestrationAgentChecklist.js"() {
  "use strict";
  E(), Tgp(), git(), Agp(), dy(), Lz();
} });
import { jsx as fwn, jsxs as iIa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Ws1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Gs1(t) {
  const e = Ws1(23), { card: n, agents: i, onLinkClick: r } = t, s = i.length > 0;
  let o;
  e[0] !== n ? (o = Nph(n), e[0] = n, e[1] = o) : o = e[1];
  const a = o;
  let l;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = { 0: { className: "ui-1n2onr6 ui-78zum5 ui-euugli ui-dt5ytf ui-195vfkc ui-oyc9vk ui-1jkygx ui-2lprc ui-1o7kk3e" }, 1: { className: "ui-1n2onr6 ui-78zum5 ui-euugli ui-dt5ytf ui-195vfkc ui-oyc9vk ui-1jkygx ui-1o7kk3e ui-1xlntvz" } }, e[2] = l) : l = e[2];
  const c = l[!!s << 0];
  let u;
  e[3] !== n.title || e[4] !== r ? (u = fwn(nn, { as: "div", size: "md", weight: "regular", className: "ui-euugli ui-1wd3ewq", children: fwn(dT, { size: "sm", normalized: true, onLinkClick: r, children: n.title }) }), e[3] = n.title, e[4] = r, e[5] = u) : u = e[5];
  let d;
  e[6] !== s || e[7] !== a || e[8] !== r ? (d = a !== null && !s ? iIa("div", { className: "ui-78zum5 ui-euugli ui-6s0dn4 ui-11twubx ui-4b2ntj", children: [fwn(zt, { name: "circle", size: 12, "aria-hidden": true }), fwn(dT, { size: "sm", normalized: true, onLinkClick: r, className: "ui-euugli ui-6ikm8r ui-10wlt62 ui-lyipyv ui-uxw1ft", children: a })] }) : null, e[6] = s, e[7] = a, e[8] = r, e[9] = d) : d = e[9];
  let h;
  e[10] !== c || e[11] !== u || e[12] !== d ? (h = iIa("div", { ...c, children: [u, d] }), e[10] = c, e[11] = u, e[12] = d, e[13] = h) : h = e[13];
  let p;
  e[14] !== i || e[15] !== n || e[16] !== s || e[17] !== r ? (p = s ? fwn("div", { className: "ui-493x5y ui-1jkygx ui-1xlntvz ui-1o7kk3e", children: fwn(Us1, { agents: i, card: n, onLinkClick: r }) }) : null, e[14] = i, e[15] = n, e[16] = s, e[17] = r, e[18] = p) : p = e[18];
  let g;
  return e[19] !== n.id || e[20] !== h || e[21] !== p ? (g = iIa("article", { "data-project-card-id": n.id, className: "ui-1n2onr6 ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-1m7fhj7 ui-cq4si4 ui-1gnnqk1 ui-mp3vqe ui-1okb17s ui-g3p6pi ui-6tor67 ui-h8yej3 ui-euugli ui-6ikm8r ui-10wlt62 ui-1wd3ewq", children: [h, p] }), e[19] = n.id, e[20] = h, e[21] = p, e[22] = g) : g = e[22], g;
}
