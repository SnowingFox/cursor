// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeManageGroupShell.js range:22739937..22761775
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.193Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, stylex.js, CustomizeManage.stylex.js, CustomizeManage.utils.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, stylex.js, CustomizeManage.stylex.js, CustomizeManage.utils.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
var Wes = L({ "CustomizeManageGroupShell.js"() {
  "use strict";
  E(), Mt(), J7(), $ot(), Hot();
} });
import { jsx as z1, jsxs as AJ, Fragment as KX1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Dqt } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as oCi } from "./react-runtime/react/esm-index-production.js";
function YX1(t) {
  const e = Dqt(7), { kind: n, pluginLogoUrl: i } = t, [r, s] = oCi(false);
  if (i !== void 0 && i !== "" && !r) {
    let l;
    e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = () => s(true), e[0] = l) : l = e[0];
    let c;
    return e[1] !== i ? (c = z1("img", { src: i, alt: "", draggable: false, className: "cursor-ui-h8yej3 cursor-ui-5yr21d cursor-ui-19kjcj4 cursor-ui-1lliihq", onError: l }), e[1] = i, e[2] = c) : c = e[2], c;
  }
  let o;
  e[3] !== n ? (o = MX1(n), e[3] = n, e[4] = o) : o = e[4];
  let a;
  return e[5] !== o ? (a = z1(zt, { name: o, size: "sm", "aria-hidden": true }), e[5] = o, e[6] = a) : a = e[6], a;
}
function MZa(t) {
  const e = Dqt(3);
  let n;
  if (e[0] !== t) {
    const { visibleLimit: i } = t === void 0 ? {} : t, r = i === void 0 ? jes : i;
    let s;
    e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = Sc(Zh.card), e[2] = s) : s = e[2], n = z1("div", { ...s, role: "status", "aria-busy": "true", "aria-label": "Loading", children: Array.from({ length: r }, XX1) }), e[0] = t, e[1] = n;
  } else n = e[1];
  return n;
}
function XX1(t, e) {
  return AJ("div", { ...Sc(Zh.skeletonRow, e > 0 && Zh.rowDivided), children: [z1("span", { ...Sc(Zh.skeletonIcon) }), AJ("div", { ...Sc(Zh.skeletonLines), children: [z1("span", { ...Sc(Zh.skeletonLine, Zh.skeletonLineName) }), z1("span", { ...Sc(Zh.skeletonLine, Zh.skeletonLineByline) })] })] }, e);
}
function OHm(t) {
  const e = Dqt(27), { label: n, appearance: i, onBrowse: r, onAddPluginFromGitHubRepo: s, onAddPluginFromLocalRepo: o } = t, a = n === void 0 ? "Add" : n, l = i === void 0 ? "outline" : i;
  let c;
  e[0] !== l ? (c = l === "monochrome" ? { variant: "primary", tone: "monochrome", size: "md" } : { variant: "outline", size: "md" }, e[0] = l, e[1] = c) : c = e[1];
  const u = c;
  let d;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = z1(zt, { name: "add", size: "xs", "aria-hidden": true }), e[2] = d) : d = e[2];
  let h;
  e[3] !== a ? (h = AJ(KX1, { children: [d, a] }), e[3] = a, e[4] = h) : h = e[4];
  const p = h;
  if (s === void 0 && o === void 0) {
    let k;
    e[5] !== r ? (k = () => r?.(), e[5] = r, e[6] = k) : k = e[6];
    let C;
    return e[7] !== u || e[8] !== p || e[9] !== k ? (C = z1(An, { ...u, onClick: k, children: p }), e[7] = u, e[8] = p, e[9] = k, e[10] = C) : C = e[10], C;
  }
  let g;
  e[11] !== u || e[12] !== p ? (g = z1(hn.Trigger, { children: z1(An, { ...u, children: p }) }), e[11] = u, e[12] = p, e[13] = g) : g = e[13];
  let f;
  e[14] !== r ? (f = z1(hn.Item, { onSelect: () => r?.(), children: "From Marketplace" }), e[14] = r, e[15] = f) : f = e[15];
  let _;
  e[16] !== s ? (_ = s !== void 0 ? z1(hn.Item, { onSelect: s, children: "From GitHub Repository" }) : null, e[16] = s, e[17] = _) : _ = e[17];
  let b;
  e[18] !== o ? (b = o !== void 0 ? z1(hn.Item, { onSelect: o, children: "From Local Repository" }) : null, e[18] = o, e[19] = b) : b = e[19];
  let y;
  e[20] !== f || e[21] !== _ || e[22] !== b ? (y = AJ(hn.Content, { "aria-label": "Add plugin source", children: [f, _, b] }), e[20] = f, e[21] = _, e[22] = b, e[23] = y) : y = e[23];
  let S;
  return e[24] !== y || e[25] !== g ? (S = AJ(hn, { returnFocusOnSelect: false, children: [g, y] }), e[24] = y, e[25] = g, e[26] = S) : S = e[26], S;
}
function FHm(t) {
  if (t.kind !== "primitive" || t.primitive.filePath === "") return;
  const e = t.primitive.filePath.replace(/\\/g, "/"), n = [...e.matchAll(UHm)], i = n[n.length - 1];
  return i === void 0 ? e : e.slice(i.index + 1);
}
function ZX1(t) {
  const e = /* @__PURE__ */ new Map();
  for (const i of t) {
    const r = FHm(i);
    r !== void 0 && e.set(r, (e.get(r) ?? 0) + 1);
  }
  const n = /* @__PURE__ */ new Map();
  for (const i of t) {
    const r = FHm(i);
    n.set(i.id, r !== void 0 && e.get(r) === 1 ? r : i.id);
  }
  return n;
}
function BHm(t) {
  const e = Dqt(24), { group: n, actions: i, onBrowse: r, onAddPluginFromGitHubRepo: s, onAddPluginFromLocalRepo: o, onCreatePrimitive: a, visibleLimit: l } = t, [c, u] = oCi(false);
  let d;
  e[0] !== n.items ? (d = ZX1(n.items), e[0] = n.items, e[1] = d) : d = e[1];
  const h = d, p = n.removable && i.onUninstallPlugin !== void 0, g = n.addLabel !== void 0, f = n.createKind;
  let _;
  e[2] !== p || e[3] !== f || e[4] !== c || e[5] !== n.addLabel || e[6] !== n.createScope || e[7] !== s || e[8] !== o || e[9] !== r || e[10] !== a || e[11] !== g ? (_ = p || g ? AJ("div", { ...Sc(Zh.groupActions), children: [p && z1(An, { variant: "text", size: "md", onClick: () => u(QX1), children: c ? "Done" : "Edit" }), g && (f !== void 0 ? z1(An, { variant: "outline", size: "md", onClick: () => a(f, n.createScope), leadingIcon: "add", children: n.addLabel }) : z1(OHm, { label: n.addLabel, onBrowse: r, onAddPluginFromGitHubRepo: s, onAddPluginFromLocalRepo: o }))] }) : void 0, e[2] = p, e[3] = f, e[4] = c, e[5] = n.addLabel, e[6] = n.createScope, e[7] = s, e[8] = o, e[9] = r, e[10] = a, e[11] = g, e[12] = _) : _ = e[12];
  const b = _;
  let y;
  e[13] !== i || e[14] !== c || e[15] !== n.removable || e[16] !== h ? (y = (k, C) => z1(nZ1, { item: k, showDivider: C > 0, editing: c && n.removable, actions: i }, h.get(k.id) ?? k.id), e[13] = i, e[14] = c, e[15] = n.removable, e[16] = h, e[17] = y) : y = e[17];
  let S;
  return e[18] !== n.items || e[19] !== n.title || e[20] !== b || e[21] !== y || e[22] !== l ? (S = z1(sCi, { title: n.title, items: n.items, visibleLimit: l, headerActions: b, renderRow: y }), e[18] = n.items, e[19] = n.title, e[20] = b, e[21] = y, e[22] = l, e[23] = S) : S = e[23], S;
}
function QX1(t) {
  return !t;
}
function JX1(t) {
  const e = Dqt(26), { value: n, onSave: i, onCancel: r } = t, [s, o] = oCi(n), a = eZ1;
  let l;
  e[0] !== s || e[1] !== i ? (l = () => {
    s.trim().length !== 0 && i(s.trim());
  }, e[0] = s, e[1] = i, e[2] = l) : l = e[2];
  const c = l;
  let u;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = Sc(Zh.rowEdit), e[3] = u) : u = e[3];
  let d;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = Sc(Zh.rowEditInput), e[4] = d) : d = e[4];
  let h;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = (T) => o(T.target.value), e[5] = h) : h = e[5];
  let p;
  e[6] !== r || e[7] !== c ? (p = (T) => {
    T.key === "Escape" ? r() : (T.metaKey || T.ctrlKey) && T.key === "Enter" && c();
  }, e[6] = r, e[7] = c, e[8] = p) : p = e[8];
  let g;
  e[9] !== s || e[10] !== p ? (g = z1("textarea", { ref: a, ...d, rows: 4, value: s, placeholder: "Style request, response language, tone...", onChange: h, onKeyDown: p }), e[9] = s, e[10] = p, e[11] = g) : g = e[11];
  let f;
  e[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = Sc(Zh.rowEditFooter), e[12] = f) : f = e[12];
  let _;
  e[13] !== r ? (_ = z1(An, { variant: "ghost", size: "sm", onClick: r, children: "Cancel" }), e[13] = r, e[14] = _) : _ = e[14];
  let b;
  e[15] !== s ? (b = s.trim(), e[15] = s, e[16] = b) : b = e[16];
  const y = b.length === 0;
  let S;
  e[17] !== c || e[18] !== y ? (S = z1(An, { variant: "secondary", size: "sm", onClick: c, disabled: y, children: "Save" }), e[17] = c, e[18] = y, e[19] = S) : S = e[19];
  let k;
  e[20] !== S || e[21] !== _ ? (k = AJ("div", { ...f, children: [_, S] }), e[20] = S, e[21] = _, e[22] = k) : k = e[22];
  let C;
  return e[23] !== k || e[24] !== g ? (C = AJ("div", { ...u, children: [g, k] }), e[23] = k, e[24] = g, e[25] = C) : C = e[25], C;
}
function eZ1(t) {
  t !== null && t.focus();
}
function tZ1(t) {
  const e = Dqt(11), { plugin: n, onInstallPlugin: i } = t, [r, s] = oCi(false);
  if (i === void 0) return null;
  const o = `Add ${n.displayName}`;
  let a;
  e[0] !== i || e[1] !== n ? (a = () => {
    s(true), i(n).finally(() => s(false));
  }, e[0] = i, e[1] = n, e[2] = a) : a = e[2];
  let l;
  e[3] !== r ? (l = r && z1(zt, { name: "circle-dashed", modifier: "spin", size: "xs", "aria-hidden": true }), e[3] = r, e[4] = l) : l = e[4];
  const c = r ? "Adding..." : "Add";
  let u;
  return e[5] !== r || e[6] !== o || e[7] !== a || e[8] !== l || e[9] !== c ? (u = AJ(An, { variant: "secondary", size: "sm", rounded: true, disabled: r, "aria-label": o, onClick: a, children: [l, c] }), e[5] = r, e[6] = o, e[7] = a, e[8] = l, e[9] = c, e[10] = u) : u = e[10], u;
}
function nZ1(t) {
  const e = Dqt(178), { item: n, showDivider: i, editing: r, actions: s } = t, { onPluginClick: o, resolvePluginForPrimitive: a, onOpenPrimitiveSource: l, onSaveInlinePrimitive: c, onDeleteInlinePrimitive: u, onDeletePrimitive: d, onPublishSkill: h, onCopySkillLink: p, onSyncSkill: g, onUnpublishSkill: f, onToggleTeamRule: _, onShowTeamRuleInfo: b, onUninstallPlugin: y, onInstallPlugin: S, copyToClipboard: k } = s, C = n.kind === "plugin" || n.kind === "marketplacePlugin", T = n.kind === "marketplacePlugin", I = C ? n.plugin.displayName : n.primitive.name;
  let A;
  e[0] !== C || e[1] !== n.plugin ? (A = C && n.plugin.id.startsWith("user-local:"), e[0] = C, e[1] = n.plugin, e[2] = A) : A = e[2];
  const P = A;
  let M;
  e[3] !== n ? (M = PX1(n), e[3] = n, e[4] = M) : M = e[4];
  const O = M;
  let N;
  e[5] !== C || e[6] !== n.plugin || e[7] !== n.primitive ? (N = C ? DX1(n.plugin) : RX1(n.primitive), e[5] = C, e[6] = n.plugin, e[7] = n.primitive, e[8] = N) : N = e[8];
  const U = N, j = n.kind === "plugin" && y !== void 0, $ = n.kind === "primitive" && n.primitive.editableInline === true, H = $, G = n.kind === "primitive" && n.primitive.kind === "rule" && n.primitive.scope === "team", q = n.kind === "primitive" && !$ && n.primitive.deletable === true && d !== void 0, K = n.kind === "primitive" && n.primitive.kind === "skill" && n.primitive.scope === "user" && n.primitive.publishedByCurrentUser !== true && h !== void 0, V = n.kind === "primitive" && n.primitive.kind === "skill" && n.primitive.publishedByCurrentUser === true && n.primitive.pluginId !== void 0 && g !== void 0, Y = n.kind === "primitive" && n.primitive.kind === "skill" && n.primitive.publishedByCurrentUser === true && n.primitive.pluginId !== void 0 && p !== void 0, J = n.kind === "primitive" && n.primitive.kind === "skill" && n.primitive.publishedByCurrentUser === true && n.primitive.pluginId !== void 0 && f !== void 0;
  let Q, te, ee;
  e[9] !== n.kind || e[10] !== n.primitive || e[11] !== a ? (te = n.kind === "primitive" ? a?.(n.primitive) : void 0, Q = te !== void 0, ee = te !== void 0 ? KTa(te) : void 0, e[9] = n.kind, e[10] = n.primitive, e[11] = a, e[12] = Q, e[13] = te, e[14] = ee) : (Q = e[12], te = e[13], ee = e[14]);
  const re = ee, ie = n.kind === "primitive" && n.primitive.teamRuleEnabled !== false, [oe, se] = oCi(false), le = n.kind === "primitive" ? n.primitive.pendingSkillAction : void 0, ce = le !== void 0, ae = r || ce;
  let de;
  e[15] !== $ || e[16] !== G || e[17] !== n.kind || e[18] !== n.plugin || e[19] !== n.primitive || e[20] !== l || e[21] !== o || e[22] !== b ? (de = () => {
    n.kind === "plugin" || n.kind === "marketplacePlugin" ? o(n.plugin) : $ ? se(true) : G && b !== void 0 ? b() : l?.(n.primitive.id, n.primitive.kind);
  }, e[15] = $, e[16] = G, e[17] = n.kind, e[18] = n.plugin, e[19] = n.primitive, e[20] = l, e[21] = o, e[22] = b, e[23] = de) : de = e[23];
  const he = de;
  let ge;
  e[24] !== n.kind || e[25] !== n.plugin || e[26] !== y ? (ge = () => {
    n.kind === "plugin" && y?.(n.plugin);
  }, e[24] = n.kind, e[25] = n.plugin, e[26] = y, e[27] = ge) : ge = e[27];
  const pe = ge;
  let ve;
  e[28] !== n.kind || e[29] !== n.primitive || e[30] !== u ? (ve = () => {
    n.kind === "primitive" && u(n.primitive.id);
  }, e[28] = n.kind, e[29] = n.primitive, e[30] = u, e[31] = ve) : ve = e[31];
  const fe = ve;
  let Te;
  e[32] !== n.kind || e[33] !== n.primitive || e[34] !== d ? (Te = () => {
    n.kind === "primitive" && d?.(n.primitive.id, n.primitive.kind, n.primitive.name);
  }, e[32] = n.kind, e[33] = n.primitive, e[34] = d, e[35] = Te) : Te = e[35];
  const _e = Te;
  let Ce;
  e[36] !== n.kind || e[37] !== n.primitive || e[38] !== _ || e[39] !== ie ? (Ce = () => {
    n.kind === "primitive" && _?.(n.primitive.id, !ie);
  }, e[36] = n.kind, e[37] = n.primitive, e[38] = _, e[39] = ie, e[40] = Ce) : Ce = e[40];
  const Se = Ce;
  let Pe;
  e[41] !== o || e[42] !== te ? (Pe = () => {
    te !== void 0 && o(te);
  }, e[41] = o, e[42] = te, e[43] = Pe) : Pe = e[43];
  const we = Pe;
  let Ie;
  e[44] !== n.kind || e[45] !== n.primitive || e[46] !== h ? (Ie = () => {
    n.kind !== "primitive" || h === void 0 || h(n.primitive);
  }, e[44] = n.kind, e[45] = n.primitive, e[46] = h, e[47] = Ie) : Ie = e[47];
  const Me = Ie;
  let De;
  e[48] !== n.kind || e[49] !== n.primitive || e[50] !== g ? (De = () => {
    n.kind !== "primitive" || g === void 0 || g(n.primitive);
  }, e[48] = n.kind, e[49] = n.primitive, e[50] = g, e[51] = De) : De = e[51];
  const Ne = De;
  let be;
  e[52] !== n.kind || e[53] !== n.primitive || e[54] !== p ? (be = () => {
    n.kind === "primitive" && p?.(n.primitive);
  }, e[52] = n.kind, e[53] = n.primitive, e[54] = p, e[55] = be) : be = e[55];
  const je = be;
  let $e;
  e[56] !== n.kind || e[57] !== n.primitive || e[58] !== f ? ($e = () => {
    n.kind !== "primitive" || f === void 0 || f(n.primitive);
  }, e[56] = n.kind, e[57] = n.primitive, e[58] = f, e[59] = $e) : $e = e[59];
  const Je = $e, Ge = $ ? "Edit" : G && b !== void 0 ? "Manage in Dashboard" : "Open";
  if (oe && n.kind === "primitive") {
    let un;
    e[60] !== i ? (un = Sc(Zh.row, Zh.rowEditing, i && Zh.rowDivided), e[60] = i, e[61] = un) : un = e[61];
    const kn = n.primitive.editableValue ?? "";
    let oi;
    e[62] !== n.primitive.id || e[63] !== c ? (oi = ($n) => {
      c(n.primitive.id, $n), se(false);
    }, e[62] = n.primitive.id, e[63] = c, e[64] = oi) : oi = e[64];
    let Fn;
    e[65] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Fn = () => se(false), e[65] = Fn) : Fn = e[65];
    let Qt;
    e[66] !== kn || e[67] !== oi ? (Qt = z1(JX1, { value: kn, onSave: oi, onCancel: Fn }), e[66] = kn, e[67] = oi, e[68] = Qt) : Qt = e[68];
    let Sn;
    return e[69] !== un || e[70] !== Qt ? (Sn = z1("div", { ...un, children: Qt }), e[69] = un, e[70] = Qt, e[71] = Sn) : Sn = e[71], Sn;
  }
  let xe;
  e[72] !== i ? (xe = Sc(Zh.row, i && Zh.rowDivided), e[72] = i, e[73] = xe) : xe = e[73];
  const Oe = C ? "plugin" : n.primitive.kind;
  let ct;
  e[74] !== j || e[75] !== r || e[76] !== pe || e[77] !== I ? (ct = r && j && z1(ho, { icon: "trash", variant: "ghost", size: "sm", "aria-label": `Remove ${I}`, onClick: pe, className: Sc(Zh.rowRemove).className }), e[74] = j, e[75] = r, e[76] = pe, e[77] = I, e[78] = ct) : ct = e[78];
  let Ye;
  e[79] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ye = Sc(Zh.rowMain), e[79] = Ye) : Ye = e[79];
  let Ve;
  e[80] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ve = Sc(Zh.rowOpenIcon), e[80] = Ve) : Ve = e[80];
  let Xe;
  e[81] !== C ? (Xe = Sc(Zh.rowIcon, !C && Zh.rowIconPrimitive), e[81] = C, e[82] = Xe) : Xe = e[82];
  let lt;
  e[83] !== C || e[84] !== n.plugin || e[85] !== n.primitive || e[86] !== re ? (lt = C ? W7(n.plugin, 28) : z1(YX1, { kind: n.primitive.kind, pluginLogoUrl: re }, re ?? ""), e[83] = C, e[84] = n.plugin, e[85] = n.primitive, e[86] = re, e[87] = lt) : lt = e[87];
  let He;
  e[88] !== Xe || e[89] !== lt ? (He = z1("div", { ...Xe, children: lt }), e[88] = Xe, e[89] = lt, e[90] = He) : He = e[90];
  let gt;
  e[91] !== he || e[92] !== ae || e[93] !== He ? (gt = z1("button", { type: "button", ...Ve, onClick: he, disabled: ae, tabIndex: -1, "aria-hidden": true, children: He }), e[91] = he, e[92] = ae, e[93] = He, e[94] = gt) : gt = e[94];
  let ht;
  e[95] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ht = Sc(Zh.rowText), e[95] = ht) : ht = e[95];
  let Ae;
  e[96] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ae = Sc(Zh.rowOpenTitle), e[96] = Ae) : Ae = e[96];
  let ot;
  e[97] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ot = Sc(Zh.rowTitle), e[97] = ot) : ot = e[97];
  const Be = ce ? "tertiary" : "primary";
  let Ue;
  e[98] !== I || e[99] !== Be ? (Ue = z1(nn, { size: "md", color: Be, truncate: true, children: I }), e[98] = I, e[99] = Be, e[100] = Ue) : Ue = e[100];
  let it;
  e[101] !== le ? (it = le !== void 0 && z1(zt, { name: "circle-dashed", modifier: "spin", size: "xs", "aria-label": jHm[le] }), e[101] = le, e[102] = it) : it = e[102];
  let qe;
  e[103] !== P ? (qe = P ? ["Local"] : [], e[103] = P, e[104] = qe) : qe = e[104];
  let pt;
  e[105] !== n.kind || e[106] !== n.primitive ? (pt = n.kind === "primitive" && n.primitive.publishedByCurrentUser === true ? ["Published"] : [], e[105] = n.kind, e[106] = n.primitive, e[107] = pt) : pt = e[107];
  let dt;
  e[108] !== qe || e[109] !== pt ? (dt = z1(tUr, { labels: [...qe, ...pt] }), e[108] = qe, e[109] = pt, e[110] = dt) : dt = e[110];
  let ft;
  e[111] !== C || e[112] !== n.plugin ? (ft = C && z1(dwn, { capabilities: n.plugin.capabilities ?? [] }), e[111] = C, e[112] = n.plugin, e[113] = ft) : ft = e[113];
  let bt;
  e[114] !== Ue || e[115] !== it || e[116] !== dt || e[117] !== ft ? (bt = AJ("div", { ...ot, children: [Ue, it, dt, ft] }), e[114] = Ue, e[115] = it, e[116] = dt, e[117] = ft, e[118] = bt) : bt = e[118];
  let St;
  e[119] !== U || e[120] !== O ? (St = O === void 0 && U !== void 0 && U !== "" && z1(nn, { size: "sm", color: "tertiary", truncate: true, children: U }), e[119] = U, e[120] = O, e[121] = St) : St = e[121];
  let Et;
  e[122] !== he || e[123] !== I || e[124] !== ae || e[125] !== bt || e[126] !== St ? (Et = AJ("button", { type: "button", ...Ae, onClick: he, disabled: ae, "aria-label": I, children: [bt, St] }), e[122] = he, e[123] = I, e[124] = ae, e[125] = bt, e[126] = St, e[127] = Et) : Et = e[127];
  let kt;
  e[128] !== k || e[129] !== r || e[130] !== he || e[131] !== ae || e[132] !== O ? (kt = O !== void 0 && AJ("div", { ...Sc(Zh.rowLoadErrorByline), children: [z1(xs, { content: z1("div", { ...Sc(Zh.loadErrorTooltip), children: O.details }), placement: "top", children: z1("button", { type: "button", ...Sc(Zh.loadErrorLabel), "aria-label": "Copy error details", disabled: r, onClick: (un) => {
    un.stopPropagation(), k ? k(O.details) : navigator.clipboard.writeText(O.details);
  }, children: O.label }) }), z1("button", { type: "button", ...Sc(Zh.rowOpenBylineFiller), onClick: he, disabled: ae, tabIndex: -1, "aria-hidden": true })] }), e[128] = k, e[129] = r, e[130] = he, e[131] = ae, e[132] = O, e[133] = kt) : kt = e[133];
  let xt;
  e[134] !== Et || e[135] !== kt ? (xt = AJ("div", { ...ht, children: [Et, kt] }), e[134] = Et, e[135] = kt, e[136] = xt) : xt = e[136];
  let Pt;
  e[137] !== gt || e[138] !== xt ? (Pt = AJ("div", { ...Ye, children: [gt, xt] }), e[137] = gt, e[138] = xt, e[139] = Pt) : Pt = e[139];
  let Dt;
  e[140] !== T || e[141] !== n.plugin || e[142] !== S ? (Dt = T && z1("div", { ...Sc(Zh.rowAction), children: z1(tZ1, { plugin: n.plugin, onInstallPlugin: S }) }), e[140] = T, e[141] = n.plugin, e[142] = S, e[143] = Dt) : Dt = e[143];
  let Vt;
  e[144] !== Y || e[145] !== q || e[146] !== H || e[147] !== Q || e[148] !== K || e[149] !== V || e[150] !== J || e[151] !== Ge || e[152] !== je || e[153] !== _e || e[154] !== fe || e[155] !== he || e[156] !== we || e[157] !== Me || e[158] !== Ne || e[159] !== Se || e[160] !== Je || e[161] !== C || e[162] !== ce || e[163] !== G || e[164] !== n.kind || e[165] !== n.primitive || e[166] !== I || e[167] !== _ || e[168] !== ie ? (Vt = !C && AJ("div", { ...Sc(Zh.rowAction, Zh.rowActionGroup), children: [G && n.kind === "primitive" && (n.primitive.teamRuleRequired === true ? z1(nn, { size: "sm", color: "tertiary", children: "Required" }) : _ !== void 0 ? z1(cv, { size: "sm", checked: ie, onCheckedChange: Se, "aria-label": `${ie ? "Disable" : "Enable"} ${I}` }) : null), AJ(hn, { children: [z1(hn.Trigger, { disabled: ce, children: z1(ho, { icon: "ellipsis", variant: "ghost", size: "sm", disabled: ce, "aria-label": `${I} options` }) }), AJ(hn.Content, { "aria-label": `${I} options`, children: [z1(hn.Item, { onSelect: he, children: Ge }), Q && z1(hn.Item, { onSelect: we, children: "Go to Plugin" }), K && z1(hn.Item, { onSelect: Me, children: "Publish Skill" }), V && z1(hn.Item, { onSelect: Ne, children: "Sync changes" }), Y && z1(hn.Item, { onSelect: je, children: "Copy link" }), J && z1(hn.Item, { onSelect: Je, children: "Unpublish Skill" }), H && z1(hn.Item, { onSelect: fe, children: "Delete" }), q && z1(hn.Item, { onSelect: _e, children: "Delete" })] })] })] }), e[144] = Y, e[145] = q, e[146] = H, e[147] = Q, e[148] = K, e[149] = V, e[150] = J, e[151] = Ge, e[152] = je, e[153] = _e, e[154] = fe, e[155] = he, e[156] = we, e[157] = Me, e[158] = Ne, e[159] = Se, e[160] = Je, e[161] = C, e[162] = ce, e[163] = G, e[164] = n.kind, e[165] = n.primitive, e[166] = I, e[167] = _, e[168] = ie, e[169] = Vt) : Vt = e[169];
  let tn;
  return e[170] !== I || e[171] !== xe || e[172] !== Oe || e[173] !== ct || e[174] !== Pt || e[175] !== Dt || e[176] !== Vt ? (tn = AJ("div", { ...xe, "data-customize-manage-row": I, "data-customize-manage-kind": Oe, children: [ct, Pt, Dt, Vt] }), e[170] = I, e[171] = xe, e[172] = Oe, e[173] = ct, e[174] = Pt, e[175] = Dt, e[176] = Vt, e[177] = tn) : tn = e[177], tn;
}
var UHm, jHm, 