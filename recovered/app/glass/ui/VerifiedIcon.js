// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VerifiedIcon.js range:17116330..17133856
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.141Z
var Lmp = L({ "VerifiedIcon.js"() {
  "use strict";
  E();
} });
import { jsx as PM, jsxs as n$, Fragment as Fi1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Omp } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as X7r, useState as Z7r, useEffect as fwt } from "./react-runtime/react/esm-index-production.js";
function NT(t, ...e) {
  const n = gn(...e);
  return { className: ri(t, n.className), style: n.style };
}
function Bi1() {
  return YQ() ? "⌘⏎" : "^⏎";
}
function Ui1(t) {
  const e = Omp(21), { options: n, value: i, onChange: r, workspaceName: s, teamName: o, userEmail: a, location: l, scopeOptionRefsRef: c, localProjects: u, selectedProjectId: d, onProjectChange: h } = t, p = u != null && u.length > 0;
  let g;
  if (e[0] !== p || e[1] !== u || e[2] !== n || e[3] !== o || e[4] !== a || e[5] !== s) {
    g = [];
    for (const k of n) if (k === "project" && p) for (const C of u) g.push({ kind: "project", project: C });
    else {
      const C = k === "user" ? a : k === "project" ? s : k === "team" ? o : void 0;
      g.push({ kind: "scope", scope: k, subtitle: C });
    }
    e[0] = p, e[1] = u, e[2] = n, e[3] = o, e[4] = a, e[5] = s, e[6] = g;
  } else g = e[6];
  let f;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = NT(void 0, yS.scopeSelector), e[7] = f) : f = e[7];
  const _ = l === "modal" && yS.addPluginModalScopeOptionsModal;
  let b;
  e[8] !== _ ? (b = NT("ui-add-plugin-modal__scope-options", yS.addPluginModalScopeOptions, _), e[8] = _, e[9] = b) : b = e[9];
  let y;
  e[10] !== l || e[11] !== r || e[12] !== h || e[13] !== g || e[14] !== c || e[15] !== d || e[16] !== i ? (y = g.map((k, C) => {
    const T = k.kind === "project" ? `project:${k.project.id}` : k.scope, I = k.kind === "project" ? "Add to Project" : k.kind === "scope" && k.scope === "user" ? "Add for Myself" : k.kind === "scope" && k.scope === "team" ? "Add to Team" : "Add to Project", A = k.kind === "project" ? k.project.displayName : k.subtitle, P = k.kind === "project" ? i === "project" && d === k.project.id : i === k.scope;
    return PM("button", { type: "button", "aria-pressed": P, ...NT("ui-add-plugin-modal__scope-option", { "ui--default-marker": "ui--default-marker", $$css: true }, yS.addPluginModalScopeOption), "data-location": l, "data-selected": P || void 0, onClick: () => {
      k.kind === "project" ? (r("project"), h?.(k.project.id)) : r(k.scope);
    }, ref: c ? (M) => {
      c.current && (c.current[C] = M);
    } : void 0, children: n$("span", { ...NT(void 0, yS.addPluginModalScopeText), children: [n$("span", { ...NT(void 0, yS.scopeTextTitleRow), children: [l === "toolbar" ? PM("span", { ...NT(void 0, yS.addPluginModalScopeBadge), children: C + 1 }) : PM(fpi, { checked: P }), PM("span", { ...NT(void 0, yS.addPluginModalScopeTextTitle), children: I })] }), A && PM("span", { ...NT(void 0, yS.addPluginModalScopeTextSubtitle), children: A })] }) }, T);
  }), e[10] = l, e[11] = r, e[12] = h, e[13] = g, e[14] = c, e[15] = d, e[16] = i, e[17] = y) : y = e[17];
  let S;
  return e[18] !== b || e[19] !== y ? (S = PM("div", { ...f, children: PM("div", { ...b, children: y }) }), e[18] = b, e[19] = y, e[20] = S) : S = e[20], S;
}
function ji1({ action: t, isLoading: e, primaryButtonLabel: n, primaryButtonLoadingLabel: i }) {
  return e ? i || (t === "remove" ? "Removing..." : "Installing...") : n || (t === "remove" ? "Remove" : "Add Plugin");
}
function $i1(t) {
  const e = Omp(127), { plugin: n, variant: i, variablesContent: r, showScopeSelector: s, scopeOptions: o, selectedScope: a, onScopeChange: l, workspaceName: c, teamName: u, userEmail: d, scopeOptionRefsRef: h, location: p, onConfirm: g, onDetailsClick: f, onCancel: _, isLoading: b, error: y, action: S, primaryActionKeybinding: k, primaryButtonLabel: C, primaryButtonLoadingLabel: T, cancelButtonLabel: I, loadingVisualResetKey: A, primaryButtonRef: P, teamMarketplaces: M, selectedMarketplaceIds: O, onMarketplaceSelectionChange: N, selectedInstallMode: U, onInstallModeChange: j, localProjects: $, selectedProjectId: H, onProjectChange: G, hideChrome: q } = t, K = i === void 0 ? "default" : i, V = s === void 0 ? true : s, Y = b === void 0 ? false : b, J = y === void 0 ? null : y, Q = S === void 0 ? "add" : S, te = I === void 0 ? "Cancel" : I, ee = q === void 0 ? false : q, re = K === "compact", ie = X7r(null), oe = n.publisher?.isVerified === true, [se, le] = Z7r(false), [ce, ae] = Z7r(false), de = X7r(null), [he, ge] = Z7r("idle"), [pe, ve] = Z7r(0), fe = X7r(null), Te = X7r(Y), _e = p === "toolbar" ? Bmp : Fmp, Ce = p === "toolbar" ? jmp : Ump;
  let Se, Pe;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Se = () => {
    le(false), ae(false);
  }, Pe = [], e[0] = Se, e[1] = Pe) : (Se = e[0], Pe = e[1]), fwt(Se, Pe);
  let we, Ie;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (we = () => () => {
    fe.current !== null && (window.clearInterval(fe.current), fe.current = null);
  }, Ie = [], e[2] = we, e[3] = Ie) : (we = e[2], Ie = e[3]), fwt(we, Ie);
  let Me, De;
  e[4] !== Y || e[5] !== Ce || e[6] !== _e ? (Me = () => {
    const pn = Te.current;
    if (Te.current = Y, Y) {
      fe.current !== null && (window.clearInterval(fe.current), fe.current = null), ge("loading"), ve(_e), fe.current = window.setInterval(() => {
        ve((yn) => {
          if (yn >= Ce) return yn;
          const Ln = Ce - yn, xi = Math.max(0.7, Ln * 0.12);
          return Math.min(Ce, yn + xi);
        });
      }, $mp);
      return;
    }
    pn && (fe.current !== null && (window.clearInterval(fe.current), fe.current = null), ge("completing"), ve(100));
  }, De = [Y, Ce, _e], e[4] = Y, e[5] = Ce, e[6] = _e, e[7] = Me, e[8] = De) : (Me = e[7], De = e[8]), fwt(Me, De);
  let Ne, be;
  e[9] !== J || e[10] !== Y ? (Ne = () => {
    Y || J == null || J === "" || (ge("idle"), ve(0));
  }, be = [J, Y], e[9] = J, e[10] = Y, e[11] = Ne, e[12] = be) : (Ne = e[11], be = e[12]), fwt(Ne, be);
  let je, $e;
  e[13] !== A ? (je = () => {
    A !== void 0 && (ge("idle"), ve(0));
  }, $e = [A], e[13] = A, e[14] = je, e[15] = $e) : (je = e[14], $e = e[15]), fwt(je, $e);
  let Je, Ge;
  e[16] !== se || e[17] !== p || e[18] !== n.description ? (Je = () => {
    if (p !== "modal" || !n.description || se) {
      ae(false);
      return;
    }
    const pn = de.current;
    if (!pn) return;
    const yn = () => {
      ae(pn.scrollHeight > pn.clientHeight + 1);
    };
    yn();
    const Ln = new ResizeObserver(yn);
    return Ln.observe(pn), () => Ln.disconnect();
  }, Ge = [se, p, n.description], e[16] = se, e[17] = p, e[18] = n.description, e[19] = Je, e[20] = Ge) : (Je = e[19], Ge = e[20]), fwt(Je, Ge);
  const xe = p === "toolbar" ? "View Details" : "Show More", Oe = Y || he === "completing", ct = a === "team" && M != null && M.length > 0 && (O == null || O.length === 0), Ye = `${pe}`;
  let Ve;
  e[21] !== Ye ? (Ve = { "--ui-add-plugin-progress": Ye }, e[21] = Ye, e[22] = Ve) : Ve = e[22];
  const Xe = Ve;
  let lt;
  e[23] !== k ? (lt = k === void 0 ? Bi1() : k.label, e[23] = k, e[24] = lt) : lt = e[24];
  const He = lt;
  let gt, ht;
  e[25] !== Oe || e[26] !== p || e[27] !== _ || e[28] !== l || e[29] !== h || e[30] !== o ? (gt = () => {
    if (p !== "toolbar") return;
    const pn = Hi1, yn = (Ln) => {
      if (!Oe && !(Ln.target instanceof HTMLElement && Ln.target.closest("[data-ui-dialog-root]") != null) && !pn(Ln.target)) {
        if (Ln.key === "Escape" && _ != null) {
          Ln.preventDefault(), Ln.stopPropagation(), _();
          return;
        }
        if (o.length > 1 && ["1", "2", "3"].includes(Ln.key)) {
          const xi = parseInt(Ln.key, 10) - 1, Ci = o[xi];
          Ci && (Ln.preventDefault(), Ln.stopPropagation(), l(Ci), h?.current?.[xi]?.focus());
        }
      }
    };
    return document.addEventListener("keydown", yn, { capture: true }), () => document.removeEventListener("keydown", yn, { capture: true });
  }, ht = [Oe, p, _, l, o, h], e[25] = Oe, e[26] = p, e[27] = _, e[28] = l, e[29] = h, e[30] = o, e[31] = gt, e[32] = ht) : (gt = e[31], ht = e[32]), fwt(gt, ht);
  let Ae, ot;
  e[33] !== p ? (Ae = () => {
    if (p !== "toolbar") return;
    const pn = requestAnimationFrame(() => {
      ie.current?.focus();
    });
    return () => cancelAnimationFrame(pn);
  }, ot = [p], e[33] = p, e[34] = Ae, e[35] = ot) : (Ae = e[34], ot = e[35]), fwt(Ae, ot);
  const Be = J != null && J !== "", it = (he === "loading" || he === "completing") && yS.primaryButtonLoading;
  let qe;
  e[36] !== it ? (qe = NT("ui-add-plugin-modal__primary-button", yS.primaryButton, it), e[36] = it, e[37] = qe) : qe = e[37];
  const pt = qe, dt = re && yS.footerActionsCompact;
  let ft;
  e[38] !== dt ? (ft = NT("ui-add-plugin-modal__footer-actions", yS.addPluginModalFooterActions, dt), e[38] = dt, e[39] = ft) : ft = e[39];
  let bt;
  e[40] !== te || e[41] !== Oe || e[42] !== p || e[43] !== _ ? (bt = _ != null && PM(An, { variant: "text", size: p === "toolbar" ? "sm" : "md", onClick: _, disabled: Oe, kbs: p === "toolbar" ? "Esc" : void 0, children: te }), e[40] = te, e[41] = Oe, e[42] = p, e[43] = _, e[44] = bt) : bt = e[44];
  const St = p === "toolbar" ? "sm" : "md", Et = pt.className;
  let kt;
  e[45] !== Xe || e[46] !== pt.style ? (kt = { ...Xe, ...pt.style }, e[45] = Xe, e[46] = pt.style, e[47] = kt) : kt = e[47];
  const xt = Oe || ct, Pt = he !== "idle" ? he : void 0, Dt = Oe ? void 0 : He;
  let Vt;
  e[48] !== Q || e[49] !== Oe || e[50] !== C || e[51] !== T ? (Vt = ji1({ action: Q, isLoading: Oe, primaryButtonLabel: C, primaryButtonLoadingLabel: T }), e[48] = Q, e[49] = Oe, e[50] = C, e[51] = T, e[52] = Vt) : Vt = e[52];
  let tn;
  e[53] !== g || e[54] !== pt.className || e[55] !== P || e[56] !== St || e[57] !== kt || e[58] !== xt || e[59] !== Pt || e[60] !== Dt || e[61] !== Vt ? (tn = PM(An, { ref: P, variant: "primary", size: St, className: Et, style: kt, onClick: g, disabled: xt, "data-loading-visual-phase": Pt, kbs: Dt, children: Vt }), e[53] = g, e[54] = pt.className, e[55] = P, e[56] = St, e[57] = kt, e[58] = xt, e[59] = Pt, e[60] = Dt, e[61] = Vt, e[62] = tn) : tn = e[62];
  let un;
  e[63] !== ft || e[64] !== bt || e[65] !== tn ? (un = n$("div", { ...ft, children: [bt, tn] }), e[63] = ft, e[64] = bt, e[65] = tn, e[66] = un) : un = e[66];
  const kn = un;
  let oi, Fn, Qt;
  e[67] !== xe || e[68] !== se || e[69] !== ee || e[70] !== re || e[71] !== ce || e[72] !== p || e[73] !== f || e[74] !== n.description ? (oi = { className: "ui-1ham5me" }, Fn = !re && n.description ? PM("div", { children: n$("div", { ...NT(void 0, yS.contentHeaderDescriptionWrapper), children: [PM("span", { ref: de, ...NT(void 0, yS.addPluginModalContentHeaderDescription, !se && yS.addPluginModalContentHeaderDescriptionClamped), children: n.description }), !se && !ee && (p === "toolbar" || p === "modal" && ce) && PM("button", { type: "button", ...NT(void 0, yS.descriptionMore, yS.descriptionMoreOverlay), onClick: () => {
    if (p === "toolbar" && f != null) {
      f();
      return;
    }
    le(true);
  }, children: xe })] }) }) : null, Qt = ri(`ui-add-plugin-content--${p}`, oi.className), e[67] = xe, e[68] = se, e[69] = ee, e[70] = re, e[71] = ce, e[72] = p, e[73] = f, e[74] = n.description, e[75] = oi, e[76] = Fn, e[77] = Qt) : (oi = e[75], Fn = e[76], Qt = e[77]);
  const Sn = p === "toolbar" ? ie : void 0, $n = p === "toolbar" ? -1 : void 0;
  let Mn;
  e[78] !== kn || e[79] !== ee || e[80] !== re || e[81] !== n || e[82] !== Fn || e[83] !== oe ? (Mn = !ee && PM("div", { ...NT(void 0, yS.sections), children: PM("div", { ...NT(void 0, yS.pluginInfo, re && yS.pluginInfoCompact), children: n$("div", { ...NT(void 0, yS.addPluginModalContentHeader, re && yS.contentHeaderCompact), children: [n$("div", { ...NT("ui-add-plugin-modal__content-header-row", yS.addPluginModalContentHeaderRow), children: [n$("div", { ...NT(void 0, yS.addPluginModalContentHeaderIconRow, re && yS.contentHeaderIconRowCompact), children: [W7(n), n$("div", { ...NT(void 0, yS.addPluginModalContentHeaderText, re && yS.contentHeaderTextCompact), children: [PM("p", { ...NT(void 0, yS.addPluginModalContentHeaderTitle), children: n.displayName }), n$("p", { ...NT(void 0, yS.addPluginModalContentHeaderSubtitle), children: [n.publisher?.displayName && n$(Fi1, { children: [PM("span", { ...NT(void 0, yS.publisherName), children: n.publisher.displayName }), oe && PM("span", { "aria-hidden": true, children: "·" })] }), oe && n$("span", { ...NT(void 0, yS.verifiedByCursor), children: [PM(WEa, { size: 12, title: "Verified", color: "currentColor", className: "ui-1lliihq ui-2lah0s" }), "Verified by Cursor"] })] })] })] }), re && kn] }), Fn] }) }) }), e[78] = kn, e[79] = ee, e[80] = re, e[81] = n, e[82] = Fn, e[83] = oe, e[84] = Mn) : Mn = e[84];
  const Un = ee ? Fn : null;
  let Xn;
  e[85] !== $ || e[86] !== p || e[87] !== G || e[88] !== l || e[89] !== h || e[90] !== o || e[91] !== H || e[92] !== a || e[93] !== V || e[94] !== u || e[95] !== d || e[96] !== c ? (Xn = V && o.length > 1 && PM(Ui1, { options: o, value: a, onChange: l, workspaceName: c, teamName: u, userEmail: d, location: p, scopeOptionRefsRef: h, localProjects: $, selectedProjectId: H, onProjectChange: G }), e[85] = $, e[86] = p, e[87] = G, e[88] = l, e[89] = h, e[90] = o, e[91] = H, e[92] = a, e[93] = V, e[94] = u, e[95] = d, e[96] = c, e[97] = Xn) : Xn = e[97];
  let Ti;
  e[98] !== N || e[99] !== O || e[100] !== a || e[101] !== M ? (Ti = a === "team" && M != null && M.length > 0 && N != null && n$("div", { ...NT(void 0, yS.marketplaceSection), children: [PM("p", { ...NT(void 0, yS.marketplaceHeading), children: "Available Marketplaces" }), PM(xg, { maxHeight: "150px", bottomFadeSize: 24, scrollbarVisibility: "hover", children: PM("div", { ...NT(void 0, yS.marketplaceList), children: M.map((pn) => {
    const yn = O?.includes(pn.id) ?? false, Ln = () => {
      const xi = O ?? [], Ci = yn ? xi.filter((En) => En !== pn.id) : [...xi, pn.id];
      N(Ci);
    };
    return n$("button", { type: "button", "aria-pressed": yn, ...NT(void 0, yS.marketplaceRow), "data-selected": yn || void 0, onClick: Ln, children: [PM(r2e, { checked: yn }), n$("span", { ...NT(void 0, yS.marketplaceRowText), children: [PM("span", { ...NT(void 0, yS.marketplaceRowName), children: pn.displayName ?? pn.name }), n$("span", { ...NT(void 0, yS.marketplaceRowMeta), children: [PM("span", { ...NT(void 0, yS.marketplaceRowGroups), children: pn.groupNames != null && pn.groupNames.length > 0 ? pn.groupNames.join(", ") : "All members" }), pn.totalMemberCount != null && n$("span", { ...NT(void 0, yS.marketplaceRowMembers), children: [pn.totalMemberCount, " ", pn.totalMemberCount === 1 ? "member" : "members"] })] })] }), pn.pluginCount != null && n$("span", { ...NT(void 0, yS.marketplaceRowCount), children: [pn.pluginCount, " ", pn.pluginCount === 1 ? "Plugin" : "Plugins"] })] }, pn.id);
  }) }) })] }), e[98] = N, e[99] = O, e[100] = a, e[101] = M, e[102] = Ti) : Ti = e[102];
  let bi;
  e[103] !== ct || e[104] !== j || e[105] !== U || e[106] !== a || e[107] !== M ? (bi = a === "team" && M != null && M.length > 0 && j != null && n$("div", { ...NT(void 0, yS.accessSettings), children: [PM("p", { ...NT(void 0, yS.marketplaceHeading), children: "Access Settings" }), n$("div", { ...NT(void 0, yS.accessSettingsRow), children: [PM("span", { ...NT(void 0, yS.accessSettingsLabel), children: "Plugin Installation" }), n$("div", { ...NT(void 0, yS.accessSettingsButtons), children: [PM(An, { variant: "outline", size: "md", disabled: ct, rootStyle: yS.accessModeButton, "aria-pressed": (U ?? "available") === "available", onClick: () => j("available"), children: "Default Off" }), PM(An, { variant: "outline", size: "md", disabled: ct, rootStyle: yS.accessModeButton, "aria-pressed": U === "default", onClick: () => j("default"), children: "Default On" }), PM(An, { variant: "outline", size: "md", disabled: ct, rootStyle: yS.accessModeButton, "aria-pressed": U === "required", onClick: () => j("required"), children: "Required" })] })] })] }), e[103] = ct, e[104] = j, e[105] = U, e[106] = a, e[107] = M, e[108] = bi) : bi = e[108];
  let Qn;
  e[109] !== J || e[110] !== kn || e[111] !== Be || e[112] !== ee || e[113] !== re ? (Qn = ee ? Be && PM("p", { ...NT(void 0, yS.error), children: J }) : (!re || Be) && n$("div", { ...NT("ui-add-plugin-modal__footer", yS.addPluginModalFooter, re && Be && yS.footerErrorOnly), children: [Be && PM("p", { ...NT(void 0, yS.error), children: J }), !re && kn] }), e[109] = J, e[110] = kn, e[111] = Be, e[112] = ee, e[113] = re, e[114] = Qn) : Qn = e[114];
  let ni;
  return e[115] !== oi.style || e[116] !== Qt || e[117] !== Sn || e[118] !== $n || e[119] !== Mn || e[120] !== Un || e[121] !== Xn || e[122] !== Ti || e[123] !== bi || e[124] !== Qn || e[125] !== r ? (ni = n$("div", { className: Qt, style: oi.style, ref: Sn, tabIndex: $n, children: [Mn, Un, Xn, r, Ti, bi, Qn] }), e[115] = oi.style, e[116] = Qt, e[117] = Sn, e[118] = $n, e[119] = Mn, e[120] = Un, e[121] = Xn, e[122] = Ti, e[123] = bi, e[124] = Qn, e[125] = r, e[126] = ni) : ni = e[126], ni;
}
function Hi1(t) {
  if (!(t instanceof HTMLElement)) return false;
  if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return true;
  const e = document.querySelector(".ai-input-full-input-box.full-input-box");
  return e != null && (t === e || e.contains(t));
}
var yS, Fmp, Bmp, Ump, jmp, $mp, 