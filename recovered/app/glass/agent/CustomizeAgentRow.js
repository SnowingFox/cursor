// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeAgentRow.js range:17209032..17211715
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.191Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, ProjectAgentStatusGlyph.js, ProjectTone.js, projectAgentRole.js, icon.js, Text.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, ProjectAgentStatusGlyph.js, ProjectTone.js, projectAgentRole.js, icon.js, Text.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
Ts1 = L({ "CustomizeAgentRow.js"() {
  "use strict";
  E(), Tgp(), git(), Agp(), fd(), dy(), Rgp = { explorer: "compass", designer: "brush", reviewer: "check-circle", debugger: "bug" }, Pgp = { avatarShell: { k1xSpc: "ui-3nfvp2", kzqmXN: "ui-gd8bvy", kZKoxP: "ui-1fgtraw", kmuXW: "ui-2lah0s", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kaIpWk: "ui-1i4c3av", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kGVxlE: "ui-cxb6k5", $$css: true } };
} });
import { jsx as gwn, jsxs as Mgp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Es1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Is1(t) {
  const e = Es1(21), { tool: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = { className: "ui--default-marker ui-78zum5 ui-9f619 ui-1wxaq2x ui-6s0dn4 ui-1oot3zn ui-f6zju3 ui-1yxiud8 ui-cnij5n ui-yab65l ui-so031l ui-1q0q8m5 ui-17fyfba ui-1m7fhj7" }, e[0] = i) : i = e[0];
  const r = n.iconName ?? "mcp";
  let s;
  e[1] !== r ? (s = gwn("span", { className: "ui-78zum5 ui-gd8bvy ui-1fgtraw ui-2lah0s ui-6s0dn4 ui-l56j7k ui-1i4c3av ui-flfp0o ui-1mh7f6w", children: gwn(zt, { name: r, size: "base", "aria-hidden": true }) }), e[1] = r, e[2] = s) : s = e[2];
  let o;
  e[3] !== n.name ? (o = gwn(nn, { as: "span", size: "md", weight: "regular", className: "ui-euugli ui-6ikm8r ui-10wlt62 ui-lyipyv ui-uxw1ft ui-1wd3ewq", children: n.name }), e[3] = n.name, e[4] = o) : o = e[4];
  let a;
  e[5] !== n ? (a = xs1(n), e[5] = n, e[6] = a) : a = e[6];
  let l;
  e[7] !== a ? (l = gwn(nn, { as: "span", size: "md", weight: "regular", className: "ui-euugli ui-6ikm8r ui-10wlt62 ui-lyipyv ui-uxw1ft ui-4b2ntj", children: a }), e[7] = a, e[8] = l) : l = e[8];
  let c;
  e[9] !== o || e[10] !== l ? (c = Mgp("span", { className: "ui-78zum5 ui-euugli ui-12lumcd ui-dt5ytf ui-195vfkc", children: [o, l] }), e[9] = o, e[10] = l, e[11] = c) : c = e[11];
  const u = n.enabled;
  let d;
  e[12] !== n ? (d = As1(n), e[12] = n, e[13] = d) : d = e[13];
  let h;
  e[14] !== d || e[15] !== n.enabled ? (h = gwn("span", { className: "ui-78zum5 ui-2lah0s ui-6s0dn4", children: gwn(cv, { checked: u, disabled: true, size: "sm", "aria-label": d }) }), e[14] = d, e[15] = n.enabled, e[16] = h) : h = e[16];
  let p;
  return e[17] !== h || e[18] !== s || e[19] !== c ? (p = Mgp("li", { ...i, children: [s, c, h] }), e[17] = h, e[18] = s, e[19] = c, e[20] = p) : p = e[20], p;
}
function xs1(t) {
  const e = t.serverName ? `${t.serverName} MCP` : "MCP server";
  return t.description ? `${e} - ${t.description}` : e;
}
function As1(t) {
  const e = t.enabled ? "enabled" : "disabled";
  return `${t.name} MCP, ${e}`;
}
