// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EnvironmentSetupExternalActionTray.js range:22980722..22990357
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.200Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
vek = L({ "EnvironmentSetupExternalActionTray.js"() {
  "use strict";
  E(), Mt(), gQa = { externalActionOrderedList: { kE3dHu: "cursor-ui-193t4r6", $$css: true }, externalActionParagraphAfterList: { koQZXg: "cursor-ui-rlij5q", $$css: true } }, fGm = { ol: gQa.externalActionOrderedList, p: gQa.externalActionParagraphAfterList }, vGm = { img: gek };
} });
import { jsx as RJ, jsxs as ZCt, Fragment as _ek } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as bek } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as ats, useRef as _Gm, useEffect as yek } from "./react-runtime/react/esm-index-production.js";
function bGm(t) {
  const e = bek(103), { allowlist: n, disabled: i, errorMessage: r, focusRequestVersion: s, hasTeam: o, inheritedSettingsLabel: a, isLockedByAdmin: l, isSaving: c, mode: u, onClearMode: d, onManageTeamSettings: h, onManageUserSettings: p, onSaveAllowlist: g, onSelectMode: f, suggestedDomains: _, teamMode: b } = t, y = l && b !== void 0 ? b : u, S = y ?? void 0;
  let k;
  e[0] !== S || e[1] !== l ? (k = !l && $J1(S), e[0] = S, e[1] = l, e[2] = k) : k = e[2];
  const C = k, T = i || c || l;
  let I;
  e[3] !== n || e[4] !== _ ? (I = tGm(RPe([...n, ..._])), e[3] = n, e[4] = _, e[5] = I) : I = e[5];
  const A = I, [P, M] = ats(A), [O, N] = ats(false), [U, j] = ats(false), [$, H] = ats(void 0), G = _Gm(null), q = _Gm(null), K = O ? P : A;
  let V;
  e[6] !== K ? (V = jJ1(K), e[6] = K, e[7] = V) : V = e[7];
  const Y = V;
  let J;
  e[8] !== n || e[9] !== Y ? (J = nGm(n, Y), e[8] = n, e[9] = Y, e[10] = J) : J = e[10];
  const Q = !J, te = y ?? lts;
  let ee;
  e[11] !== a ? (ee = { label: a, value: lts }, e[11] = a, e[12] = ee) : ee = e[12];
  let re;
  if (e[13] !== a || e[14] !== ee) {
    let ft;
    e[16] !== a ? (ft = (bt) => ({ label: HJ1(bt, a), value: bt }), e[16] = a, e[17] = ft) : ft = e[17], re = [ee, ...yGm.map(ft)], e[13] = a, e[14] = ee, e[15] = re;
  } else re = e[15];
  const ie = re;
  let oe;
  e[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (oe = (ft) => {
    const bt = ft?.querySelector("button");
    if (!(bt instanceof HTMLButtonElement)) return;
    const St = bt.getBoundingClientRect().width;
    H((Et) => Et === St ? Et : St);
  }, e[18] = oe) : oe = e[18];
  const se = oe;
  let le;
  e[19] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (le = (ft) => {
    q.current = ft, se(ft);
  }, e[19] = le) : le = e[19];
  const ce = le;
  let ae;
  e[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ae = (ft) => {
    ft && se(q.current);
  }, e[20] = ae) : ae = e[20];
  const de = ae;
  let he;
  e[21] !== d || e[22] !== f ? (he = (ft) => {
    if (ft === lts) {
      d();
      return;
    }
    f(ft);
  }, e[21] = d, e[22] = f, e[23] = he) : he = e[23];
  const ge = he;
  let pe, ve;
  e[24] !== s ? (pe = () => {
    if (s === 0) return;
    G.current?.scrollIntoView({ block: "nearest" });
    const ft = q.current?.querySelector("button");
    ft instanceof HTMLButtonElement && ft.focus();
  }, ve = [s], e[24] = s, e[25] = pe, e[26] = ve) : (pe = e[25], ve = e[26]), yek(pe, ve);
  let fe;
  e[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (fe = RJ(nn, { color: "primary", size: "md", children: "Network Access Settings" }), e[27] = fe) : fe = e[27];
  let Te;
  e[28] !== l ? (Te = l ? RJ(nn, { color: "secondary", size: "sm", children: "Locked by admin" }) : null, e[28] = l, e[29] = Te) : Te = e[29];
  let _e;
  e[30] !== Te ? (_e = ZCt("div", { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1qughib cursor-ui-ehausa cursor-ui-4jlmx6", children: [fe, Te] }), e[30] = Te, e[31] = _e) : _e = e[31];
  let Ce;
  e[32] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ce = { className: "cursor-ui-h8yej3 cursor-ui-1fgtraw cursor-ui-exx8yu cursor-ui-18d9i69" }, e[32] = Ce) : Ce = e[32];
  let Se;
  e[33] !== ge ? (Se = (ft) => {
    ft !== null && ge(ft);
  }, e[33] = ge, e[34] = Se) : Se = e[34];
  let Pe;
  e[35] !== T || e[36] !== ie || e[37] !== te || e[38] !== $ || e[39] !== Se ? (Pe = RJ("div", { ref: ce, className: "cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-1t1x2f9 cursor-ui-euugli", children: RJ(b1, { "aria-label": "Network access mode", className: Ce.className, contentWidth: $, disabled: T, hug: false, onValueChange: Se, onOpenChange: de, options: ie, size: "lg", value: te, variant: "outline" }) }), e[35] = T, e[36] = ie, e[37] = te, e[38] = $, e[39] = Se, e[40] = Pe) : Pe = e[40];
  let we;
  e[41] !== T || e[42] !== C ? (we = C ? RJ(An, { className: "cursor-ui-1fgtraw", disabled: T, onClick: () => j(true), size: "md", variant: "outline", children: "Edit Allowlist" }) : null, e[41] = T, e[42] = C, e[43] = we) : we = e[43];
  let Ie;
  e[44] !== Pe || e[45] !== we ? (Ie = ZCt("div", { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-pkkfsy cursor-ui-1nhvcw1 cursor-ui-h8yej3", children: [Pe, we] }), e[44] = Pe, e[45] = we, e[46] = Ie) : Ie = e[46];
  const Me = o ? "Builds on user or team network access. Manage in" : "Builds on user network access. Manage in";
  let De;
  e[47] !== Me ? (De = RJ(nn, { color: "secondary", size: "sm", children: Me }), e[47] = Me, e[48] = De) : De = e[48];
  let Ne;
  e[49] !== p ? (Ne = RJ("button", { onClick: p, type: "button", className: "cursor-ui-1717udv cursor-ui-c342km cursor-ui-ng3xce cursor-ui-1r7ld26 cursor-ui-jbqb8w cursor-ui-1wd3ewq cursor-ui-1ypdohk cursor-ui-1wm8ruf cursor-ui-t0b8zv", children: "user settings" }), e[49] = p, e[50] = Ne) : Ne = e[50];
  let be;
  e[51] !== o || e[52] !== h ? (be = o ? ZCt(_ek, { children: [RJ(nn, { color: "secondary", size: "sm", children: "or" }), RJ("button", { onClick: h, type: "button", className: "cursor-ui-1717udv cursor-ui-c342km cursor-ui-ng3xce cursor-ui-1r7ld26 cursor-ui-jbqb8w cursor-ui-1wd3ewq cursor-ui-1ypdohk cursor-ui-1wm8ruf cursor-ui-t0b8zv", children: "team settings" })] }) : null, e[51] = o, e[52] = h, e[53] = be) : be = e[53];
  let je;
  e[54] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (je = RJ(nn, { color: "secondary", size: "sm", children: "." }), e[54] = je) : je = e[54];
  let $e;
  e[55] !== De || e[56] !== Ne || e[57] !== be ? ($e = ZCt("div", { className: "cursor-ui-78zum5 cursor-ui-1pha0wt cursor-ui-11twubx cursor-ui-1a02dak", children: [De, Ne, be, je] }), e[55] = De, e[56] = Ne, e[57] = be, e[58] = $e) : $e = e[58];
  let Je;
  e[59] !== r ? (Je = r !== void 0 ? RJ(nn, { color: "red", size: "sm", children: r }) : null, e[59] = r, e[60] = Je) : Je = e[60];
  const Ge = !c, xe = !c;
  let Oe;
  e[61] !== A || e[62] !== c ? (Oe = (ft) => {
    !ft && !c && (N(false), M(A), j(false));
  }, e[61] = A, e[62] = c, e[63] = Oe) : Oe = e[63];
  let ct;
  e[64] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ct = RJ(Xr.Header, { title: "Domain Allowlist", children: RJ(Xr.Close, {}) }), e[64] = ct) : ct = e[64];
  let Ye;
  e[65] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ye = { className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-1oot3zn" }, e[65] = Ye) : Ye = e[65];
  let Ve;
  e[66] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ve = (ft) => {
    N(true), M(ft.currentTarget.value);
  }, e[66] = Ve) : Ve = e[66];
  let Xe;
  e[67] !== K ? (Xe = RJ(_d.Textarea, { "aria-label": "Domain allowlist", autoResize: true, maxRows: 4, minRows: 4, onChange: Ve, placeholder: `api.example.com
*.example.com`, spellCheck: false, value: K }), e[67] = K, e[68] = Xe) : Xe = e[68];
  let lt;
  e[69] !== c || e[70] !== Xe ? (lt = RJ(_d.Root, { disabled: c, layout: "textarea", size: "lg", children: Xe }), e[69] = c, e[70] = Xe, e[71] = lt) : lt = e[71];
  let He;
  e[72] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (He = RJ(nn, { color: "secondary", size: "sm", children: "One domain per line. Wildcards are supported." }), e[72] = He) : He = e[72];
  let gt;
  e[73] !== lt ? (gt = ZCt(Xr.Content, { className: Ye.className, children: [lt, He] }), e[73] = lt, e[74] = gt) : gt = e[74];
  let ht;
  e[75] !== A ? (ht = () => {
    N(false), M(A), j(false);
  }, e[75] = A, e[76] = ht) : ht = e[76];
  let Ae;
  e[77] !== c || e[78] !== ht ? (Ae = RJ(An, { disabled: c, onClick: ht, size: "md", variant: "secondary", children: "Cancel" }), e[77] = c, e[78] = ht, e[79] = Ae) : Ae = e[79];
  const ot = c || !Q;
  let Be;
  e[80] !== g || e[81] !== Y ? (Be = () => {
    g(Y), N(false), M(tGm(Y)), j(false);
  }, e[80] = g, e[81] = Y, e[82] = Be) : Be = e[82];
  const Ue = c ? "Saving..." : "Save";
  let it;
  e[83] !== ot || e[84] !== Be || e[85] !== Ue ? (it = RJ(An, { disabled: ot, onClick: Be, size: "md", variant: "primary", children: Ue }), e[83] = ot, e[84] = Be, e[85] = Ue, e[86] = it) : it = e[86];
  let qe;
  e[87] !== Ae || e[88] !== it ? (qe = ZCt(Xr.Footer, { children: [Ae, it] }), e[87] = Ae, e[88] = it, e[89] = qe) : qe = e[89];
  let pt;
  e[90] !== U || e[91] !== Ge || e[92] !== xe || e[93] !== Oe || e[94] !== gt || e[95] !== qe ? (pt = ZCt(Xr, { closeOnBackdropClick: Ge, closeOnEscape: xe, onOpenChange: Oe, open: U, size: "md", children: [ct, gt, qe] }), e[90] = U, e[91] = Ge, e[92] = xe, e[93] = Oe, e[94] = gt, e[95] = qe, e[96] = pt) : pt = e[96];
  let dt;
  return e[97] !== _e || e[98] !== Ie || e[99] !== $e || e[100] !== Je || e[101] !== pt ? (dt = ZCt("section", { ref: G, className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-ehausa cursor-ui-h8yej3", children: [_e, Ie, $e, Je, pt] }), e[97] = _e, e[98] = Ie, e[99] = $e, e[100] = Je, e[101] = pt, e[102] = dt) : dt = e[102], dt;
}
var lts, yGm, 