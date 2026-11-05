// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayRowHoverActions.js range:16300781..16311455
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.119Z
Vrp = L({ "TrayRowHoverActions.js"() {
  "use strict";
  E(), qu(), Wwa = { root: { k1xSpc: "ui-78zum5", kmuXW: "ui-2lah0s", kGNEyG: "ui-6s0dn4", kOIVth: "ui-5cdhqx", k1ekBW: "ui-19991ni", kIyJzY: "ui-7pq1vu", kAMwcw: "ui-6ekqhr", $$css: true }, hiddenUntilRowEngaged: { kSiTet: "ui-g01cxk ui-1fmp72c ui-ygt2mn ui-15gtstu", kfzvcC: "ui-47corl ui-or0epp ui-1dv5hm7", $$css: true } };
} });
import { jsxs as OBr, jsx as jW } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as aGS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as lGS, Fragment as cGS } from "./react-runtime/react/esm-index-production.js";
function uGS(t) {
  const e = aGS(140);
  let n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T, I, A, P, M, O, N, U, j, $, H, G, q, K, V, Y, J, Q, te, ee, re;
  e[0] !== t ? ({ ref: q, leading: T, label: b, labelText: C, labelSuffix: k, description: l, contentLayout: o, animateDescription: i, descriptionShimmer: d, descriptionColor: u, contentStyle: a, labelStyle: S, mainStyle: A, labelClassName: y, descriptionClassName: c, mainClassName: I, trailingIcon: re, onTrailingIconClick: H, actionButton: n, hoverActions: f, actionsVisibility: Q, hoverActionsPlacement: te, hoverActionsStyle: _, meta: P, metaClassName: M, highlighted: g, disabled: h, statusText: V, editable: p, onLabelChange: $, onEditComplete: U, onEditCancel: N, className: s, onClick: O, onKeyDown: j, role: K, tabIndex: ee, "aria-disabled": r, stylexStyles: J, style: Y, ...G } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f, e[15] = _, e[16] = b, e[17] = y, e[18] = S, e[19] = k, e[20] = C, e[21] = T, e[22] = I, e[23] = A, e[24] = P, e[25] = M, e[26] = O, e[27] = N, e[28] = U, e[29] = j, e[30] = $, e[31] = H, e[32] = G, e[33] = q, e[34] = K, e[35] = V, e[36] = Y, e[37] = J, e[38] = Q, e[39] = te, e[40] = ee, e[41] = re) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14], _ = e[15], b = e[16], y = e[17], S = e[18], k = e[19], C = e[20], T = e[21], I = e[22], A = e[23], P = e[24], M = e[25], O = e[26], N = e[27], U = e[28], j = e[29], $ = e[30], H = e[31], G = e[32], q = e[33], K = e[34], V = e[35], Y = e[36], J = e[37], Q = e[38], te = e[39], ee = e[40], re = e[41]);
  const ie = Q === void 0 ? "hover" : Q, oe = te === void 0 ? "separate" : te, se = lGS(false);
  let le;
  e[42] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (le = (dt) => {
    dt !== null && (se.current = false, dt.focus());
  }, e[42] = le) : le = e[42];
  const ce = le;
  let ae;
  e[43] !== N || e[44] !== U ? (ae = (dt) => {
    dt.key === "Enter" ? (dt.preventDefault(), U?.(dt.currentTarget.value)) : dt.key === "Escape" && (dt.preventDefault(), se.current = true, N?.());
  }, e[43] = N, e[44] = U, e[45] = ae) : ae = e[45];
  const de = ae;
  let he;
  e[46] !== U ? (he = (dt) => {
    se.current || U?.(dt.currentTarget.value);
  }, e[46] = U, e[47] = he) : he = e[47];
  const ge = he;
  let pe;
  e[48] !== $ ? (pe = (dt) => {
    $?.(dt.target.value);
  }, e[48] = $, e[49] = pe) : pe = e[49];
  const ve = pe, fe = f !== void 0 && f.length > 0, Te = P != null, _e = fe && oe === "replace-meta", Ce = _e && !Te && ie === "hover", Se = O !== void 0, Pe = Se && !p, we = l !== void 0 && l.trim().length > 0, Me = (o ?? (we || k !== void 0 || I !== void 0 ? "inline-description" : "label")) === "inline-description", De = typeof b == "string" ? b : C, Ne = h === true || p === true;
  let be;
  e[50] !== Se || e[51] !== Ne || e[52] !== O ? (be = Se ? (dt) => {
    if (Ne) {
      dt.preventDefault(), dt.stopPropagation();
      return;
    }
    O(dt);
  } : void 0, e[50] = Se, e[51] = Ne, e[52] = O, e[53] = be) : be = e[53];
  const je = be;
  let $e;
  e[54] !== Se || e[55] !== Ne || e[56] !== j ? ($e = Se || j ? (dt) => {
    j?.(dt), !(dt.defaultPrevented || !Se || Ne || dt.currentTarget !== dt.target) && (dt.key === "Enter" || dt.key === " ") && (dt.preventDefault(), dt.currentTarget.click());
  } : void 0, e[54] = Se, e[55] = Ne, e[56] = j, e[57] = $e) : $e = e[57];
  const Je = $e;
  let Ge;
  e[58] !== h || e[59] !== je || e[60] !== Je || e[61] !== Pe || e[62] !== Se || e[63] !== K || e[64] !== ee ? (Ge = Se ? { onClick: je, onKeyDown: Je, role: K ?? (Pe ? "button" : void 0), tabIndex: ee ?? (Pe && !h ? 0 : void 0) } : { onKeyDown: Je, role: K, tabIndex: ee }, e[58] = h, e[59] = je, e[60] = Je, e[61] = Pe, e[62] = Se, e[63] = K, e[64] = ee, e[65] = Ge) : Ge = e[65];
  const xe = Ge;
  let Oe, ct, Ye, Ve, Xe, lt, He, gt, ht, Ae, ot, Be, Ue, it;
  if (e[66] !== ie || e[67] !== i || e[68] !== r || e[69] !== s || e[70] !== a || e[71] !== l || e[72] !== c || e[73] !== u || e[74] !== d || e[75] !== h || e[76] !== p || e[77] !== ge || e[78] !== ve || e[79] !== de || e[80] !== fe || e[81] !== Te || e[82] !== Pe || e[83] !== g || e[84] !== f || e[85] !== _ || e[86] !== b || e[87] !== y || e[88] !== S || e[89] !== k || e[90] !== T || e[91] !== I || e[92] !== A || e[93] !== P || e[94] !== M || e[95] !== H || e[96] !== G || e[97] !== De || e[98] !== q || e[99] !== _e || e[100] !== Ce || e[101] !== xe || e[102] !== V || e[103] !== Y || e[104] !== J || e[105] !== re || e[106] !== Me) {
    const dt = rrp(), ft = ar({ rootClass: "ui-tray-row", stylexStyles: [dt.root, J ?? null], className: s, style: Y }), bt = gn(dt.content, a), St = gn(dt.leading), Et = gn(dt.label, S), kt = gn(dt.input), xt = gn(dt.trailingIcon), Pt = gn(dt.status), Dt = gn(dt.trailing, _e && Te ? m$t.trailingWithMeta : null, Ce ? m$t.trailingWithoutMeta : null), Vt = gn(dt.meta, _e && ie === "always" ? m$t.hiddenMeta : null, _e && ie === "hover" ? m$t.metaAtRest : null), tn = _e && Te ? m$t.actionsWithMeta : Ce ? m$t.actionsWithoutMeta : null;
    Oe = q, ct = ft.className, Ye = g || void 0, Ve = p || void 0, Xe = Pe || void 0, lt = h || void 0, He = fe || void 0, gt = h ? true : r, ht = xe, Ae = ft.style, ot = G, Be = OBr("div", { className: ri("ui-tray-row__content", bt.className), style: bt.style, children: [T ? jW("span", { className: ri("ui-tray-row__leading", St.className), style: St.style, children: T }) : null, p ? jW("input", { ref: ce, type: "text", className: ri("ui-tray-row__input", kt.className), style: kt.style, value: typeof b == "string" ? b : "", onChange: ve, onKeyDown: de, onBlur: ge }) : Me ? jW(Grp, { animateDescription: i, description: l, descriptionClassName: c, descriptionColor: u, descriptionShimmer: d, label: b, labelClassName: y, labelStyle: S, labelSuffix: k, mainClassName: I, mainStyle: A }) : De !== void 0 ? jW(xs, { content: jW(ao, { title: De }), maxWidth: 360, placement: "top", children: jW("span", { className: ri("ui-tray-row__label", Et.className, y), style: Et.style, children: b }) }) : jW("span", { className: ri("ui-tray-row__label", Et.className, y), style: Et.style, children: b }), re && !p && jW("button", { type: "button", className: ri("ui-tray-row__trailing-icon", xt.className), style: xt.style, onClick: (un) => {
      un.stopPropagation(), H?.();
    }, "aria-label": "More info", children: jW(zt, { name: re, size: "sm" }) })] }), Ue = V && !p && jW("span", { className: ri("ui-tray-row__status", Pt.className), style: Pt.style, children: V }), it = (Te || fe) && !p && OBr("div", { className: ri("ui-tray-row__trailing", Dt.className), "data-component": "tray-row-trailing", style: Dt.style, children: [Te && jW("span", { className: ri("ui-tray-row__meta", Vt.className, M), "data-component": "tray-row-meta", style: Vt.style, children: P }), fe && jW($oe, { children: jW(zrp, { rootStyle: [tn, _], visibility: ie, children: f.map(dGS) }) })] }), e[66] = ie, e[67] = i, e[68] = r, e[69] = s, e[70] = a, e[71] = l, e[72] = c, e[73] = u, e[74] = d, e[75] = h, e[76] = p, e[77] = ge, e[78] = ve, e[79] = de, e[80] = fe, e[81] = Te, e[82] = Pe, e[83] = g, e[84] = f, e[85] = _, e[86] = b, e[87] = y, e[88] = S, e[89] = k, e[90] = T, e[91] = I, e[92] = A, e[93] = P, e[94] = M, e[95] = H, e[96] = G, e[97] = De, e[98] = q, e[99] = _e, e[100] = Ce, e[101] = xe, e[102] = V, e[103] = Y, e[104] = J, e[105] = re, e[106] = Me, e[107] = Oe, e[108] = ct, e[109] = Ye, e[110] = Ve, e[111] = Xe, e[112] = lt, e[113] = He, e[114] = gt, e[115] = ht, e[116] = Ae, e[117] = ot, e[118] = Be, e[119] = Ue, e[120] = it;
  } else Oe = e[107], ct = e[108], Ye = e[109], Ve = e[110], Xe = e[111], lt = e[112], He = e[113], gt = e[114], ht = e[115], Ae = e[116], ot = e[117], Be = e[118], Ue = e[119], it = e[120];
  let qe;
  e[121] !== n || e[122] !== p ? (qe = n && !p && jW(An, { rootStyle: Krp.root, size: n.size ?? "sm", variant: n.variant ?? "text", onClick: (dt) => {
    dt.stopPropagation(), n.onClick();
  }, children: n.label }), e[121] = n, e[122] = p, e[123] = qe) : qe = e[123];
  let pt;
  return e[124] !== Oe || e[125] !== ct || e[126] !== Ye || e[127] !== Ve || e[128] !== Xe || e[129] !== lt || e[130] !== He || e[131] !== gt || e[132] !== ht || e[133] !== Ae || e[134] !== ot || e[135] !== Be || e[136] !== Ue || e[137] !== it || e[138] !== qe ? (pt = OBr("div", { ref: Oe, className: ct, "data-highlighted": Ye, "data-editable": Ve, "data-clickable": Xe, "data-disabled": lt, "data-has-hover-actions": He, "aria-disabled": gt, ...ht, style: Ae, ...ot, children: [Be, Ue, it, qe] }), e[124] = Oe, e[125] = ct, e[126] = Ye, e[127] = Ve, e[128] = Xe, e[129] = lt, e[130] = He, e[131] = gt, e[132] = ht, e[133] = Ae, e[134] = ot, e[135] = Be, e[136] = Ue, e[137] = it, e[138] = qe, e[139] = pt) : pt = e[139], pt;
}
function dGS(t) {
  if ("render" in t) return jW(cGS, { children: t.render }, t.key);
  if ("label" in t) {
    const r = `label-${t.label}-${t["aria-label"] ?? ""}`, s = OBr(An, { size: "sm", variant: t.variant ?? "text", disabled: t.disabled, "aria-label": t["aria-label"], onClick: (o) => {
      o.stopPropagation(), t.onClick();
    }, ...t.dataAttributes, children: [t.icon !== void 0 && jW(zt, { name: t.icon }), t.label] }, r);
    return t.tooltip === void 0 ? s : jW(xs, { content: jW(ao, { title: t.tooltip }), children: s }, r);
  }
  const e = `icon-${t.icon}-${t["aria-label"]}`, n = t.variant === "text" ? { tone: t.tone, variant: "text" } : { tone: t.tone, variant: "ghost" }, i = jW(ho, { icon: t.icon, size: "sm", ...n, onClick: (r) => {
    r.stopPropagation(), t.onClick();
  }, "aria-label": t["aria-label"], ...t.dataAttributes }, e);
  return !t.tooltip && !t.shortcut ? i : jW(xs, { content: jW(ao, { title: t.tooltip ?? t["aria-label"], shortcut: t.shortcut }), children: i }, e);
}
var Krp, m$t, 