// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeManageMcp.js range:22785747..22793362
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.193Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, stylex.js, CustomizeManage.stylex.js, CustomizeManage.utils.js, CustomizeManageEmptyState.js, CustomizeManageGroupShell.js, CustomizeManageGroups.js, +2 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, stylex.js, CustomizeManage.stylex.js, CustomizeManage.utils.js, CustomizeManageEmptyState.js, CustomizeManageGroupShell.js, CustomizeManageGroups.js, +2 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
NZa = L({ "CustomizeManageMcp.js"() {
  "use strict";
  E(), Mt(), J7(), $ot(), Hot(), iCi(), Wes(), Ges(), mZ1(), _Z1(), zes = { outer: { k1xSpc: "cursor-ui-78zum5", kXwgrk: "cursor-ui-dt5ytf", k7Eaqz: "cursor-ui-euugli", $$css: true }, rowTextButton: { kkrTdU: "cursor-ui-1ypdohk", k9WMMc: "cursor-ui-dpxx8g", kMwMTN: "cursor-ui-1heor9g", kLWn49: "cursor-ui-15bjb6t", k63SB2: "cursor-ui-1pd3egz", kKX8nH: "cursor-ui-1t35e8", kGuDYH: "cursor-ui-1qlqyl8", kMv6JI: "cursor-ui-jb2p0i", koQZXg: "cursor-ui-j3b58b", k1K539: "cursor-ui-at24cr", km5ZXQ: "cursor-ui-1yf7rl7", keoZOQ: "cursor-ui-dj266r", kE3dHu: "cursor-ui-1uhho1l", kGO01o: "cursor-ui-18d9i69", kpe85a: "cursor-ui-1xpa7k", kLKAdn: "cursor-ui-exx8yu", k4WBpm: "cursor-ui-1b16gh4", kfdmCh: "cursor-ui-1sy0etr", kSWEuD: "cursor-ui-11pwa6s", kPef9Z: "cursor-ui-1ejq31n", kZ1KPB: "cursor-ui-yj58a3", kt9PQ7: "cursor-ui-1qhh985", kWqL5O: "cursor-ui-gfja2r", kEafiO: "cursor-ui-972fbf", kWkggS: "cursor-ui-jbqb8w", k3lkva: "cursor-ui-1lugfcp", kysU6D: "cursor-ui-jyslct", kGNEyG: "cursor-ui-1cy8zhl", kaIpWk: "cursor-ui-1043rbw", kzQI83: "cursor-ui-1iyjqo2", kmuXW: "cursor-ui-s83m0k", kCS8Yb: "cursor-ui-1t1x2f9", k7Eaqz: "cursor-ui-euugli", kXHlph: "cursor-ui-6ikm8r", kORKVm: "cursor-ui-10wlt62", $$css: true }, iconButton: { kkrTdU: "cursor-ui-1ypdohk", k9WMMc: "cursor-ui-dpxx8g", kMwMTN: "cursor-ui-1heor9g", kLWn49: "cursor-ui-15bjb6t", k63SB2: "cursor-ui-1pd3egz", kKX8nH: "cursor-ui-1t35e8", kGuDYH: "cursor-ui-1qlqyl8", kMv6JI: "cursor-ui-jb2p0i", koQZXg: "cursor-ui-j3b58b", k1K539: "cursor-ui-at24cr", km5ZXQ: "cursor-ui-1yf7rl7", keoZOQ: "cursor-ui-dj266r", kE3dHu: "cursor-ui-1uhho1l", kGO01o: "cursor-ui-18d9i69", kpe85a: "cursor-ui-1xpa7k", kLKAdn: "cursor-ui-exx8yu", k4WBpm: "cursor-ui-1b16gh4", kfdmCh: "cursor-ui-1sy0etr", kSWEuD: "cursor-ui-11pwa6s", kPef9Z: "cursor-ui-1ejq31n", kZ1KPB: "cursor-ui-yj58a3", kt9PQ7: "cursor-ui-1qhh985", kWqL5O: "cursor-ui-gfja2r", kEafiO: "cursor-ui-972fbf", kWkggS: "cursor-ui-jbqb8w", k3lkva: "cursor-ui-1lugfcp", kysU6D: "cursor-ui-jyslct", $$css: true } };
} });
import { jsx as MCe, jsxs as Ves, Fragment as wZ1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as LZa } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as CZ1 } from "./react-runtime/react/esm-index-production.js";
function QHm(t) {
  return MCe(zt, { name: t, size: "sm", style: eWm, "aria-hidden": true });
}
function TZ1(t) {
  const e = LZa(3), { leading: n, children: i } = t;
  let r;
  return e[0] !== i || e[1] !== n ? (r = MCe(hn.Trigger, { children: MCe(Cne, { "aria-label": "Manage scope", hug: true, leading: n, rootStyle: Zh.scopeTrigger, shape: "pill", size: "md", variant: "ghost", children: i }) }), e[0] = i, e[1] = n, e[2] = r) : r = e[2], r;
}
function EZ1(t) {
  const e = LZa(56), { multiselect: n, selectedScope: i, onSelectedScopeChange: r, userDisplayName: s, teamDisplayName: o, hasTeam: a, visibleRepoOptions: l, hasWorkspaces: c, moreItem: u } = t;
  let d;
  e[0] !== i ? (d = oze(i), e[0] = i, e[1] = d) : d = e[1];
  const h = d;
  let p;
  e[2] !== i ? (p = Mqt(i), e[2] = i, e[3] = p) : p = e[3];
  const g = p;
  let f;
  e[4] !== i ? (f = new Set($be(i)), e[4] = i, e[5] = f) : f = e[5];
  const _ = f;
  let b;
  e[6] !== c || e[7] !== u ? (b = (M) => c ? Ves(hn.Section, { title: "Workspaces", children: [M, u] }) : null, e[6] = c, e[7] = u, e[8] = b) : b = e[8];
  const y = b;
  if (n) {
    let M;
    e[9] !== r || e[10] !== i ? (M = () => r(TZa({ scope: i, target: { kind: "user" } })), e[9] = r, e[10] = i, e[11] = M) : M = e[11];
    let O;
    e[12] !== h || e[13] !== M || e[14] !== s ? (O = MCe(hn.CheckboxItem, { checked: h, description: s, onChange: M, children: "User" }), e[12] = h, e[13] = M, e[14] = s, e[15] = O) : O = e[15];
    let N;
    e[16] !== a || e[17] !== r || e[18] !== i || e[19] !== g || e[20] !== o ? (N = a ? MCe(hn.CheckboxItem, { checked: g, description: o, onChange: () => r(TZa({ scope: i, target: { kind: "team" } })), children: "Team" }) : null, e[16] = a, e[17] = r, e[18] = i, e[19] = g, e[20] = o, e[21] = N) : N = e[21];
    let U;
    if (e[22] !== r || e[23] !== i || e[24] !== _ || e[25] !== l || e[26] !== y) {
      let $;
      e[28] !== r || e[29] !== i || e[30] !== _ ? ($ = (H) => MCe(hn.CheckboxItem, { checked: _.has(H.id), description: H.subtitle, onChange: () => r(TZa({ scope: i, target: { kind: "workspace", id: H.id } })), children: H.displayName }, H.id), e[28] = r, e[29] = i, e[30] = _, e[31] = $) : $ = e[31], U = y(l.map($)), e[22] = r, e[23] = i, e[24] = _, e[25] = l, e[26] = y, e[27] = U;
    } else U = e[27];
    let j;
    return e[32] !== O || e[33] !== N || e[34] !== U ? (j = Ves(wZ1, { children: [O, N, U] }), e[32] = O, e[33] = N, e[34] = U, e[35] = j) : j = e[35], j;
  }
  let S;
  e[36] !== i ? (S = PCe(i), e[36] = i, e[37] = S) : S = e[37];
  let k;
  e[38] !== r ? (k = (M) => {
    typeof M == "string" && r(yHm(M));
  }, e[38] = r, e[39] = k) : k = e[39];
  let C;
  e[40] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = PCe({ kind: "user" }), e[40] = C) : C = e[40];
  let T;
  e[41] !== C || e[42] !== s ? (T = MCe(hn.RadioItem, { value: C, description: s, closeOnSelect: true, children: "User" }), e[41] = C, e[42] = s, e[43] = T) : T = e[43];
  let I;
  e[44] !== a || e[45] !== o ? (I = a ? MCe(hn.RadioItem, { value: PCe({ kind: "team" }), description: o, closeOnSelect: true, children: "Team" }) : null, e[44] = a, e[45] = o, e[46] = I) : I = e[46];
  let A;
  e[47] !== l || e[48] !== y ? (A = y(l.map(IZ1)), e[47] = l, e[48] = y, e[49] = A) : A = e[49];
  let P;
  return e[50] !== A || e[51] !== S || e[52] !== k || e[53] !== T || e[54] !== I ? (P = Ves(hn.RadioGroup, { "aria-label": "Manage scope", value: S, onValueChange: k, children: [T, I, A] }), e[50] = A, e[51] = S, e[52] = k, e[53] = T, e[54] = I, e[55] = P) : P = e[55], P;
}
function IZ1(t) {
  return MCe(hn.RadioItem, { value: PCe({ kind: "workspace", id: t.id }), description: t.subtitle, closeOnSelect: true, children: t.displayName }, t.id);
}
function xZ1(t) {
  const e = LZa(23), { triggerLabel: n, triggerIconName: i, multiselect: r, selectedScope: s, onSelectedScopeChange: o, userDisplayName: a, teamDisplayName: l, hasTeam: c, repoOptions: u } = t, [d, h] = CZ1(false);
  let p;
  e[0] !== u || e[1] !== d ? (p = d ? u : u.slice(0, JHm), e[0] = u, e[1] = d, e[2] = p) : p = e[2];
  const g = p, f = u.length - g.length;
  let _;
  e[3] !== f ? (_ = f > 0 ? MCe(hn.Item, { priority: "tertiary", leading: QHm("ellipsis"), closeOnSelect: false, onSelect: () => h(true), children: `${f} more` }) : null, e[3] = f, e[4] = _) : _ = e[4];
  const b = _;
  let y;
  e[5] !== i ? (y = QHm(i), e[5] = i, e[6] = y) : y = e[6];
  let S;
  e[7] !== y || e[8] !== n ? (S = MCe(TZ1, { leading: y, children: n }), e[7] = y, e[8] = n, e[9] = S) : S = e[9];
  const k = u.length > 0;
  let C;
  e[10] !== c || e[11] !== b || e[12] !== r || e[13] !== o || e[14] !== s || e[15] !== k || e[16] !== l || e[17] !== a || e[18] !== g ? (C = MCe(hn.Content, { "aria-label": "Manage scope", maxHeight: 360, width: 272, children: MCe(EZ1, { multiselect: r, selectedScope: s, onSelectedScopeChange: o, userDisplayName: a, teamDisplayName: l, hasTeam: c, visibleRepoOptions: g, hasWorkspaces: k, moreItem: b }) }), e[10] = c, e[11] = b, e[12] = r, e[13] = o, e[14] = s, e[15] = k, e[16] = l, e[17] = a, e[18] = g, e[19] = C) : C = e[19];
  let T;
  return e[20] !== S || e[21] !== C ? (T = Ves(hn, { children: [S, C] }), e[20] = S, e[21] = C, e[22] = T) : T = e[22], T;
}
var JHm, eWm, 