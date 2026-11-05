// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EnvironmentSetupSecretLevelSelect.js range:22995663..23009342
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.205Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, env-setup-secret.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, env-setup-secret.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
IGm = L({ "EnvironmentSetupSecretLevelSelect.js"() {
  "use strict";
  E(), Mt(), sts(), EGm = { previewCardSurface: { ks0D6T: "cursor-ui-w5ewwj", $$css: true } };
} });
import { jsxs as uze, jsx as RE, Fragment as vQa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as _Qa } from "./react-runtime/react/esm-compiler-runtime-production.js";
function xGm(t) {
  const e = _Qa(109), { allowSaveWithoutEntries: n, applyToRepos: i, environmentName: r, errorMessage: s, existingSecretNames: o, hasTeam: a, isOpen: l, isSaveDisabled: c, isSaving: u, isTeamPermissionRestricted: d, onApplyToReposChange: h, onClose: p, onOpenDocs: g, onPermissionChange: f, onRowsChange: _, onSave: b, parsedEntriesCount: y, permission: S, presentation: k, repoOptions: C, rows: T, showBuildSecret: I } = t, A = n === void 0 ? false : n, P = c === void 0 ? false : c, M = d === void 0 ? false : d, O = k === void 0 ? "dialog" : k, N = S === "environment", U = !N && i !== null && i.length === 0, j = !P && !u && !U && (y > 0 || A);
  let $;
  e[0] !== a || e[1] !== M ? ($ = a && !M ? [{ label: "Team", value: "team" }] : [], e[0] = a, e[1] = M, e[2] = $) : $ = e[2];
  let H;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (H = { label: "Personal", value: "personal" }, e[3] = H) : H = e[3];
  let G;
  e[4] !== r ? (G = r !== void 0 ? [{ label: "Environment", value: "environment" }] : [], e[4] = r, e[5] = G) : G = e[5];
  let q;
  e[6] !== $ || e[7] !== G ? (q = [...$, H, ...G], e[6] = $, e[7] = G, e[8] = q) : q = e[8];
  const K = q;
  let V;
  e[9] !== _ || e[10] !== T ? (V = (lt, He) => {
    const gt = T.map((ht) => ht.id === lt ? { ...ht, ...He } : ht);
    _(gt);
  }, e[9] = _, e[10] = T, e[11] = V) : V = e[11];
  const Y = V;
  let J;
  e[12] !== _ || e[13] !== T ? (J = (lt) => {
    _(T.filter((He) => He.id !== lt));
  }, e[12] = _, e[13] = T, e[14] = J) : J = e[14];
  const Q = J;
  let te;
  e[15] !== _ || e[16] !== T ? (te = (lt, He) => {
    const gt = He.clipboardData.getData("text");
    if (!gt.includes("=")) return;
    const ht = QJ1(gt);
    ht.length !== 0 && (He.preventDefault(), _(VJ1(T, lt, ht)));
  }, e[15] = _, e[16] = T, e[17] = te) : te = e[17];
  const ee = te;
  let re;
  e[18] !== j || e[19] !== b ? (re = (lt) => {
    lt.key !== "Enter" || lt.shiftKey || lt.altKey || lt.ctrlKey || lt.metaKey || lt.nativeEvent.isComposing || !j || (lt.preventDefault(), b());
  }, e[18] = j, e[19] = b, e[20] = re) : re = e[20];
  const ie = re;
  let oe;
  e[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (oe = RE(nn, { className: "cursor-ui-1xlntvz", color: "secondary", size: "sm", children: "Name" }), e[21] = oe) : oe = e[21];
  let se;
  e[22] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (se = RE(nn, { className: "cursor-ui-1xlntvz", color: "secondary", size: "sm", children: "Value" }), e[22] = se) : se = e[22];
  let le, ce;
  e[23] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (le = RE(nn, { className: "cursor-ui-1xlntvz", color: "secondary", size: "sm", children: "Type" }), ce = RE("span", { className: "cursor-ui-1xlntvz" }), e[23] = le, e[24] = ce) : (le = e[23], ce = e[24]);
  let ae;
  if (e[25] !== o || e[26] !== ee || e[27] !== ie || e[28] !== u || e[29] !== Q || e[30] !== T || e[31] !== I || e[32] !== Y) {
    let lt;
    e[34] !== o || e[35] !== ee || e[36] !== ie || e[37] !== u || e[38] !== Q || e[39] !== I || e[40] !== Y ? (lt = (He) => {
      const gt = !u && o.has(He.name.trim());
      return RE(xek, { isDuplicate: gt, isSaving: u, onDelete: () => Q(He.id), onInputKeyDown: ie, onLevelChange: (ht) => Y(He.id, { level: ht }), onNameChange: (ht) => Y(He.id, { name: ht }), onNamePaste: (ht) => ee(He.id, ht), onValueChange: (ht) => Y(He.id, { value: ht }), row: He, showBuildSecret: I }, He.id);
    }, e[34] = o, e[35] = ee, e[36] = ie, e[37] = u, e[38] = Q, e[39] = I, e[40] = Y, e[41] = lt) : lt = e[41], ae = T.map(lt), e[25] = o, e[26] = ee, e[27] = ie, e[28] = u, e[29] = Q, e[30] = T, e[31] = I, e[32] = Y, e[33] = ae;
  } else ae = e[33];
  let de;
  e[42] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (de = RE(nn, { className: "cursor-ui-427cgg cursor-ui-13ly8rp cursor-ui-1xpa7k cursor-ui-1xlntvz cursor-ui-1uhho1l", color: "tertiary", size: "sm", children: "Tip: you can paste your .env into the name input" }), e[42] = de) : de = e[42];
  let he;
  e[43] !== ae ? (he = uze("div", { className: "cursor-ui-rvj5dj cursor-ui-o7z09w cursor-ui-7a106z cursor-ui-4r3nzd cursor-ui-xs79tx", children: [oe, se, le, ce, ae, de] }), e[43] = ae, e[44] = he) : he = e[44];
  let ge;
  e[45] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ge = RE(nn, { color: "primary", size: "md", children: "Permission" }), e[45] = ge) : ge = e[45];
  let pe;
  e[46] !== u || e[47] !== f || e[48] !== S || e[49] !== K ? (pe = uze("div", { className: "cursor-ui-rvj5dj cursor-ui-97mirn cursor-ui-6s0dn4 cursor-ui-1oot3zn", children: [ge, K.length > 1 ? RE(b1, { disabled: u, hug: false, onValueChange: (lt) => {
    lt !== null && f(lt);
  }, options: K, size: "lg", value: S }) : RE(nn, { color: "secondary", size: "md", children: K[0]?.label ?? "Personal" })] }), e[46] = u, e[47] = f, e[48] = S, e[49] = K, e[50] = pe) : pe = e[50];
  const ve = U ? "Select at least one repository." : void 0;
  let fe;
  e[51] !== i || e[52] !== N || e[53] !== u || e[54] !== h || e[55] !== C || e[56] !== ve ? (fe = RE(Aek, { applyToRepos: i, disabled: u, errorMessage: ve, isEnvironmentScoped: N, onChange: h, repoOptions: C }), e[51] = i, e[52] = N, e[53] = u, e[54] = h, e[55] = C, e[56] = ve, e[57] = fe) : fe = e[57];
  let Te;
  e[58] !== s ? (Te = s !== void 0 ? RE(nn, { color: "red", size: "sm", children: s }) : null, e[58] = s, e[59] = Te) : Te = e[59];
  let _e;
  e[60] !== he || e[61] !== pe || e[62] !== fe || e[63] !== Te ? (_e = uze(vQa, { children: [he, pe, fe, Te] }), e[60] = he, e[61] = pe, e[62] = fe, e[63] = Te, e[64] = _e) : _e = e[64];
  const Ce = _e;
  let Se;
  e[65] !== g ? (Se = RE(An, { onClick: g, size: "sm", variant: "text", children: "View docs" }), e[65] = g, e[66] = Se) : Se = e[66];
  const Pe = Se;
  let we;
  e[67] !== u || e[68] !== p ? (we = RE(An, { disabled: u, onClick: p, size: "md", variant: "secondary", children: "Cancel" }), e[67] = u, e[68] = p, e[69] = we) : we = e[69];
  const Ie = we, Me = !j, De = u ? "Saving..." : "Save";
  let Ne;
  e[70] !== b || e[71] !== Me || e[72] !== De ? (Ne = RE(An, { disabled: Me, onClick: b, size: "md", variant: "primary", children: De }), e[70] = b, e[71] = Me, e[72] = De, e[73] = Ne) : Ne = e[73];
  const be = Ne;
  let je;
  e[74] !== Ie || e[75] !== be || e[76] !== Pe ? (je = uze(vQa, { children: [Pe, Ie, be] }), e[74] = Ie, e[75] = be, e[76] = Pe, e[77] = je) : je = e[77];
  const $e = je;
  if (O === "tray") {
    if (!l) return null;
    let lt;
    e[78] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (lt = RE(fi.HeaderContent, { children: RE(fi.HeaderTitle, { tone: "muted", children: "Add Secrets" }) }), e[78] = lt) : lt = e[78];
    let He;
    e[79] !== u || e[80] !== p ? (He = uze(fi.Header, { children: [lt, RE(fi.HeaderTrailing, { children: RE(fi.HeaderCloseButton, { "aria-label": "Close add secrets", disabled: u, onClick: p }) })] }), e[79] = u, e[80] = p, e[81] = He) : He = e[81];
    let gt;
    e[82] !== Ce ? (gt = RE(fi.Body, { children: RE("div", { className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-1oot3zn cursor-ui-13ly8rp cursor-ui-1xlntvz", children: Ce }) }), e[82] = Ce, e[83] = gt) : gt = e[83];
    let ht;
    e[84] !== Ie || e[85] !== be || e[86] !== Pe ? (ht = RE(fi.Footer, { showBorder: true, primaryAction: be, secondaryAction: Ie, tertiaryAction: Pe }), e[84] = Ie, e[85] = be, e[86] = Pe, e[87] = ht) : ht = e[87];
    let Ae;
    return e[88] !== l || e[89] !== He || e[90] !== gt || e[91] !== ht ? (Ae = uze(fi.Root, { enableKeyboardNavigation: false, maxHeight: 520, size: "content", visible: l, children: [He, gt, ht] }), e[88] = l, e[89] = He, e[90] = gt, e[91] = ht, e[92] = Ae) : Ae = e[92], Ae;
  }
  const Je = !u, Ge = !u;
  let xe;
  e[93] !== u || e[94] !== p ? (xe = (lt) => {
    !lt && !u && p();
  }, e[93] = u, e[94] = p, e[95] = xe) : xe = e[95];
  let Oe;
  e[96] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Oe = RE(Xr.Header, { title: "Add Secrets", children: RE(Xr.Close, {}) }), e[96] = Oe) : Oe = e[96];
  let ct;
  e[97] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ct = { className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-1oot3zn" }, e[97] = ct) : ct = e[97];
  let Ye;
  e[98] !== Ce ? (Ye = RE(Xr.Content, { className: ct.className, children: Ce }), e[98] = Ce, e[99] = Ye) : Ye = e[99];
  let Ve;
  e[100] !== $e ? (Ve = RE(Xr.Footer, { children: $e }), e[100] = $e, e[101] = Ve) : Ve = e[101];
  let Xe;
  return e[102] !== l || e[103] !== Je || e[104] !== Ge || e[105] !== xe || e[106] !== Ye || e[107] !== Ve ? (Xe = uze(Xr, { closeOnBackdropClick: Je, closeOnEscape: Ge, onOpenChange: xe, open: l, size: "xxl", children: [Oe, Ye, Ve] }), e[102] = l, e[103] = Je, e[104] = Ge, e[105] = xe, e[106] = Ye, e[107] = Ve, e[108] = Xe) : Xe = e[108], Xe;
}
function xek(t) {
  const e = _Qa(45), { isDuplicate: n, isSaving: i, onDelete: r, onInputKeyDown: s, onLevelChange: o, onNameChange: a, onNamePaste: l, onValueChange: c, row: u, showBuildSecret: d } = t;
  let h;
  e[0] !== u ? (h = rts(u), e[0] = u, e[1] = h) : h = e[1];
  const p = h;
  let g;
  e[2] !== u.level || e[3] !== d ? (g = iGm({ level: u.level, showBuildSecret: d }), e[2] = u.level, e[3] = d, e[4] = g) : g = e[4];
  const f = g;
  let _;
  e[5] !== a ? (_ = (N) => a(N.currentTarget.value), e[5] = a, e[6] = _) : _ = e[6];
  let b;
  e[7] !== s || e[8] !== l || e[9] !== u.name || e[10] !== _ ? (b = RE(_d.Input, { "aria-label": "Secret name", "data-1p-ignore": true, "data-form-type": "other", "data-lpignore": "true", onChange: _, onKeyDown: s, onPaste: l, placeholder: "SECRET_NAME", spellCheck: false, value: u.name }), e[7] = s, e[8] = l, e[9] = u.name, e[10] = _, e[11] = b) : b = e[11];
  let y;
  e[12] !== i || e[13] !== b ? (y = RE(_d.Root, { disabled: i, mono: true, size: "md", variant: "unfilled", children: b }), e[12] = i, e[13] = b, e[14] = y) : y = e[14];
  let S;
  e[15] !== n ? (S = n ? RE(xs, { content: "A secret with this name already exists in this scope.", placement: "top", children: RE("span", { "aria-label": "A secret with this name already exists in this scope.", role: "img", children: RE(zt, { color: "yellow", name: "info", size: "sm" }) }) }) : null, e[15] = n, e[16] = S) : S = e[16];
  let k;
  e[17] !== y || e[18] !== S ? (k = uze("div", { className: "cursor-ui-78zum5 cursor-ui-euugli cursor-ui-e0p6wg cursor-ui-6s0dn4 cursor-ui-kh2ocl cursor-ui-11twubx cursor-ui-13ly8rp cursor-ui-1xlntvz", children: [y, S] }), e[17] = y, e[18] = S, e[19] = k) : k = e[19];
  let C;
  e[20] !== c ? (C = (N) => c(N.currentTarget.value), e[20] = c, e[21] = C) : C = e[21];
  let T;
  e[22] !== s || e[23] !== u.value || e[24] !== C ? (T = RE(_d.Input, { "aria-label": "Secret value", autoComplete: "one-time-code", "data-1p-ignore": true, "data-form-type": "other", "data-lpignore": "true", onChange: C, onKeyDown: s, placeholder: "Secret value", type: "password", value: u.value }), e[22] = s, e[23] = u.value, e[24] = C, e[25] = T) : T = e[25];
  let I;
  e[26] !== i || e[27] !== T ? (I = RE("div", { className: "cursor-ui-78zum5 cursor-ui-euugli cursor-ui-e0p6wg cursor-ui-6s0dn4 cursor-ui-kh2ocl cursor-ui-11twubx cursor-ui-13ly8rp cursor-ui-1xlntvz", children: RE(_d.Root, { disabled: i, size: "md", variant: "unfilled", children: T }) }), e[26] = i, e[27] = T, e[28] = I) : I = e[28];
  let A;
  e[29] !== i || e[30] !== o || e[31] !== d || e[32] !== f ? (A = RE("div", { className: "cursor-ui-78zum5 cursor-ui-euugli cursor-ui-e0p6wg cursor-ui-6s0dn4 cursor-ui-kh2ocl cursor-ui-11twubx cursor-ui-13ly8rp cursor-ui-1xlntvz", children: RE(CGm, { disabled: i, frame: "content", hug: true, onChange: o, showBuildSecret: d, size: "md", value: f, variant: "text" }) }), e[29] = i, e[30] = o, e[31] = d, e[32] = f, e[33] = A) : A = e[33];
  let P;
  e[34] !== p || e[35] !== i || e[36] !== r ? (P = p ? null : RE(ho, { "aria-label": "Delete row", disabled: i, frame: "content", icon: "minus", onClick: r, size: "md", iconSize: "base", variant: "ghost" }), e[34] = p, e[35] = i, e[36] = r, e[37] = P) : P = e[37];
  let M;
  e[38] !== P ? (M = RE("div", { className: "cursor-ui-euugli cursor-ui-kh2ocl cursor-ui-11twubx cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-78zum5 cursor-ui-l56j7k cursor-ui-6s0dn4 cursor-ui-e0p6wg", children: P }), e[38] = P, e[39] = M) : M = e[39];
  let O;
  return e[40] !== I || e[41] !== A || e[42] !== M || e[43] !== k ? (O = uze(vQa, { children: [k, I, A, M] }), e[40] = I, e[41] = A, e[42] = M, e[43] = k, e[44] = O) : O = e[44], O;
}
function Aek(t) {
  const e = _Qa(8), { applyToRepos: n, disabled: i, errorMessage: r, isEnvironmentScoped: s, onChange: o, repoOptions: a } = t;
  let l;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = RE(nn, { color: "primary", size: "md", children: "Apply to" }), e[0] = l) : l = e[0];
  let c;
  return e[1] !== n || e[2] !== i || e[3] !== r || e[4] !== s || e[5] !== o || e[6] !== a ? (c = uze("div", { className: "cursor-ui-rvj5dj cursor-ui-97mirn cursor-ui-6s0dn4 cursor-ui-1oot3zn", children: [l, s ? RE(uGm, {}) : RE(dGm, { disabled: i, errorMessage: r, onChange: o, repoOptions: a, selectedRepos: n })] }), e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = c) : c = e[7], c;
}
