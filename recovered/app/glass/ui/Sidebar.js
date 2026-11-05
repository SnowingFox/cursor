// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Sidebar.js range:14863955..14905769
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.999Z
V5r = L({ "Sidebar.js"() {
  "use strict";
  E(), U5(), Va(), efa(), Q3(), dy(), eKo(), mf(), ijt(), j5r(), sfa(), zBh(), KBh(), t8h(), r8h(), Wj(), qu(), m2(), f2(), fd(), Sfa(), u8h = { "ui--default-marker": "ui--default-marker", $$css: true }, wfa = TCS(null), z5r = s0e(function(e, n) {
    const i = sae(55);
    let r, s, o, a, l, c, u, d, h, p, g, f;
    i[0] !== e ? ({ children: r, className: s, surface: d, side: h, width: p, collapsedWidth: g, resizable: f, minWidth: a, maxWidth: o, onWidthChange: l, style: u, ...c } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = l, i[6] = c, i[7] = u, i[8] = d, i[9] = h, i[10] = p, i[11] = g, i[12] = f) : (r = i[1], s = i[2], o = i[3], a = i[4], l = i[5], c = i[6], u = i[7], d = i[8], h = i[9], p = i[10], g = i[11], f = i[12]);
    const _ = d === void 0 ? "default" : d, b = h === void 0 ? "left" : h, y = p === void 0 ? 180 : p, S = g === void 0 ? 48 : g, k = f === void 0 ? false : f, { state: C } = cfa("Sidebar.Root"), T = K3(), [I, A] = G5r(null), [P, M] = G5r(false), O = q5r(null), N = q5r(null);
    let U;
    i[13] !== I || i[14] !== y ? (U = I ?? kfa(y, 180), i[13] = I, i[14] = y, i[15] = U) : U = i[15];
    const j = U;
    let $, H;
    i[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? ($ = () => () => {
      N.current?.();
    }, H = [], i[16] = $, i[17] = H) : ($ = i[16], H = i[17]), ICS($, H);
    let G;
    i[18] !== j || i[19] !== T || i[20] !== o || i[21] !== a || i[22] !== l || i[23] !== k || i[24] !== b || i[25] !== C ? (G = (le) => {
      if (!k || C === "collapsed") return;
      le.preventDefault(), M(true);
      const ce = le.clientX, ae = j, de = kfa(a, 100), he = kfa(o, 600), ge = (fe) => {
        const Te = W0S(fe.clientX - ce, T), _e = b === "left" ? Te : -Te;
        let Ce = ae + _e;
        Ce = Math.max(de, Math.min(he, Ce)), A(Ce), l?.(Ce);
      }, pe = () => {
        M(false), document.removeEventListener("mousemove", ge), document.removeEventListener("mouseup", ve), document.body.style.cursor = "", document.body.style.userSelect = "", N.current = null;
      }, ve = () => {
        pe();
      };
      document.addEventListener("mousemove", ge), document.addEventListener("mouseup", ve), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", N.current = pe;
    }, i[18] = j, i[19] = T, i[20] = o, i[21] = a, i[22] = l, i[23] = k, i[24] = b, i[25] = C, i[26] = G) : G = i[26];
    const q = G;
    let K;
    i[27] !== n ? (K = [O, n], i[27] = n, i[28] = K) : K = i[28];
    const V = c6(K), Y = `${j}px`, J = typeof S == "number" ? `${S}px` : S;
    let Q;
    if (i[29] !== s || i[30] !== o || i[31] !== a || i[32] !== u || i[33] !== _ || i[34] !== Y || i[35] !== J) {
      const le = { "--sidebar-width": Y, "--sidebar-width-collapsed": J, ...a !== void 0 && { "--sidebar-min-width": typeof a == "number" ? `${a}px` : a }, ...o !== void 0 && { "--sidebar-max-width": typeof o == "number" ? `${o}px` : o } };
      Q = ar({ rootClass: "ui-sidebar", stylexStyles: G0S({ surface: _ }), className: s, style: { ...le, ...u } }), i[29] = s, i[30] = o, i[31] = a, i[32] = u, i[33] = _, i[34] = Y, i[35] = J, i[36] = Q;
    } else Q = i[36];
    const te = Q, ee = _ === "default" ? void 0 : _, re = k || void 0, ie = P || void 0;
    let oe;
    i[37] !== j || i[38] !== q || i[39] !== k || i[40] !== b || i[41] !== C ? (oe = k && C !== "collapsed" && o0(xCS, { side: b, currentWidth: j, onMouseDown: q }), i[37] = j, i[38] = q, i[39] = k, i[40] = b, i[41] = C, i[42] = oe) : oe = i[42];
    let se;
    return i[43] !== r || i[44] !== V || i[45] !== c || i[46] !== b || i[47] !== te.className || i[48] !== te.style || i[49] !== C || i[50] !== ee || i[51] !== re || i[52] !== ie || i[53] !== oe ? (se = d2e("nav", { ref: V, className: te.className, "data-sidebar-root": "", "data-surface": ee, "data-state": C, "data-side": b, "data-resizable": re, "data-resizing": ie, style: te.style, ...c, children: [r, oe] }), i[43] = r, i[44] = V, i[45] = c, i[46] = b, i[47] = te.className, i[48] = te.style, i[49] = C, i[50] = ee, i[51] = re, i[52] = ie, i[53] = oe, i[54] = se) : se = i[54], se;
  }), Cfa = s0e(function(e, n) {
    const i = sae(36);
    let r, s, o, a, l, c;
    i[0] !== e ? ({ children: r, className: s, layout: a, hasTrafficLights: l, iconButtonsPosition: c, ...o } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = l, i[6] = c) : (r = i[1], s = i[2], o = i[3], a = i[4], l = i[5], c = i[6]);
    const u = a === void 0 ? "default" : a, d = l === void 0 ? false : l, h = c === void 0 ? "left" : c;
    let p;
    i[7] !== s ? (p = ar({ rootClass: "ui-sidebar-top-bar", stylexStyles: lkt.root, className: s }), i[7] = s, i[8] = p) : p = i[8];
    const g = p;
    let f, _, b, y, S, k, C, T, I;
    if (i[9] !== r || i[10] !== d || i[11] !== h || i[12] !== u || i[13] !== o || i[14] !== n || i[15] !== g.className || i[16] !== g.style) {
      const P = gn(lkt.trafficLightsSpacer), M = gn(lkt.icons, u === "fill" ? lkt.iconsFill : null, d && h === "left" ? lkt.iconsLeftWithTrafficLights : null, h === "right" ? lkt.iconsRight : null);
      S = n, k = g.className, C = g.style, T = u === "default" ? void 0 : u, I = d || void 0, f = h, _ = o, b = d && o0("div", { className: ri("ui-sidebar-traffic-lights-spacer", P.className), style: P.style, "aria-hidden": "true" }), y = r && o0("div", { className: ri("ui-sidebar-top-bar-icons", M.className), style: M.style, children: r }), i[9] = r, i[10] = d, i[11] = h, i[12] = u, i[13] = o, i[14] = n, i[15] = g.className, i[16] = g.style, i[17] = f, i[18] = _, i[19] = b, i[20] = y, i[21] = S, i[22] = k, i[23] = C, i[24] = T, i[25] = I;
    } else f = i[17], _ = i[18], b = i[19], y = i[20], S = i[21], k = i[22], C = i[23], T = i[24], I = i[25];
    let A;
    return i[26] !== f || i[27] !== _ || i[28] !== b || i[29] !== y || i[30] !== S || i[31] !== k || i[32] !== C || i[33] !== T || i[34] !== I ? (A = d2e("div", { ref: S, className: k, style: C, "data-layout": T, "data-traffic-lights": I, "data-icons-position": f, ..._, children: [b, y] }), i[26] = f, i[27] = _, i[28] = b, i[29] = y, i[30] = S, i[31] = k, i[32] = C, i[33] = T, i[34] = I, i[35] = A) : A = i[35], A;
  }), Tfa = s0e(function(e, n) {
    const i = sae(31);
    let r, s, o, a, l, c, u, d;
    i[0] !== e ? ({ children: r, className: s, region: l, showScrolledDivider: c, hasTrafficLights: u, iconButtons: o, iconButtonsPosition: d, ...a } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = l, i[6] = c, i[7] = u, i[8] = d) : (r = i[1], s = i[2], o = i[3], a = i[4], l = i[5], c = i[6], u = i[7], d = i[8]);
    const h = l === void 0 ? "default" : l, p = c === void 0 ? true : c, g = u === void 0 ? false : u, f = d === void 0 ? "right" : d, _ = h === "actions", b = g ? ojt.trafficLights : null, y = _ ? ojt.regionActions : null, S = _ && !p ? ojt.regionActionsNoScrolledDivider : null;
    let k;
    i[9] !== s || i[10] !== b || i[11] !== y || i[12] !== S ? (k = ar({ rootClass: "ui-sidebar-header", stylexStyles: [ojt.root, b, y, S], className: s }), i[9] = s, i[10] = b, i[11] = y, i[12] = S, i[13] = k) : k = i[13];
    const C = k;
    let T;
    if (i[14] !== r || i[15] !== g || i[16] !== o || i[17] !== f || i[18] !== _ || i[19] !== a || i[20] !== n || i[21] !== h || i[22] !== C.className || i[23] !== C.style || i[24] !== p) {
      const I = gn(lkt.trafficLightsSpacer), A = gn(ojt.icons), P = gn(ojt.content);
      let M;
      i[26] !== r || i[27] !== _ ? (M = _ ? o0(NC, { buttonFullWidth: true, children: r }) : r, i[26] = r, i[27] = _, i[28] = M) : M = i[28];
      let O;
      i[29] !== M ? (O = o0("div", { className: ri("ui-sidebar-header-content", P.className), style: P.style, children: M }), i[29] = M, i[30] = O) : O = i[30], T = d2e("div", { ref: n, className: C.className, style: C.style, "data-region": h, "data-show-scrolled-divider": p || void 0, "data-traffic-lights": g || void 0, "data-icons-position": f, ...a, children: [g && o0("div", { className: ri("ui-sidebar-traffic-lights-spacer", I.className), style: I.style, "aria-hidden": "true" }), o && f === "left" && o0("div", { className: ri("ui-sidebar-header-icons", A.className), style: A.style, children: o }), O, o && f === "right" && o0("div", { className: ri("ui-sidebar-header-icons", A.className), style: A.style, children: o })] }), i[14] = r, i[15] = g, i[16] = o, i[17] = f, i[18] = _, i[19] = a, i[20] = n, i[21] = h, i[22] = C.className, i[23] = C.style, i[24] = p, i[25] = T;
    } else T = i[25];
    return T;
  }), Efa = s0e(function(e, n) {
    const i = sae(12);
    let r, s, o;
    i[0] !== e ? ({ children: r, className: s, ...o } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o) : (r = i[1], s = i[2], o = i[3]);
    let a;
    i[4] !== s ? (a = ar({ rootClass: "ui-sidebar-footer", stylexStyles: Y0S(), className: s }), i[4] = s, i[5] = a) : a = i[5];
    const l = a;
    let c;
    return i[6] !== r || i[7] !== o || i[8] !== n || i[9] !== l.className || i[10] !== l.style ? (c = o0("div", { ref: n, className: l.className, style: l.style, ...o, children: r }), i[6] = r, i[7] = o, i[8] = n, i[9] = l.className, i[10] = l.style, i[11] = c) : c = i[11], c;
  }), Ifa = s0e(function(e, n) {
    const i = sae(14);
    let r, s, o;
    i[0] !== e ? ({ children: r, className: s, ...o } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o) : (r = i[1], s = i[2], o = i[3]);
    let a;
    i[4] !== s ? (a = ar({ rootClass: "ui-sidebar-actions", stylexStyles: q0S(), className: s }), i[4] = s, i[5] = a) : a = i[5];
    const l = a;
    let c;
    i[6] !== r ? (c = o0(NC, { buttonFullWidth: true, children: r }), i[6] = r, i[7] = c) : c = i[7];
    let u;
    return i[8] !== o || i[9] !== n || i[10] !== l.className || i[11] !== l.style || i[12] !== c ? (u = o0("div", { ref: n, className: l.className, style: l.style, ...o, children: c }), i[8] = o, i[9] = n, i[10] = l.className, i[11] = l.style, i[12] = c, i[13] = u) : u = i[13], u;
  }), xfa = s0e(function(e, n) {
    const i = sae(23), { children: r, className: s, onKeyDown: o, onScrollStateChange: a, topFadeSize: l, bottomFadeSize: c, topFadeStartOpacity: u, bottomFadeStartOpacity: d } = e, h = e8h(), p = q5r(null);
    let g;
    i[0] !== h || i[1] !== o ? (g = (N) => {
      if (o?.(N), !N.defaultPrevented && h) e: switch (N.key) {
        case "ArrowDown": {
          N.preventDefault(), h.navigateNext();
          break e;
        }
        case "ArrowUp": {
          N.preventDefault(), h.navigatePrevious();
          break e;
        }
        case "Enter": {
          h.highlightedIndex >= 0 && (N.preventDefault(), h.selectHighlighted());
          break e;
        }
        case "Escape":
          h.highlightedIndex >= 0 && (N.preventDefault(), h.clearHighlight());
      }
    }, i[0] = h, i[1] = o, i[2] = g) : g = i[2];
    const f = g;
    let _;
    i[3] !== n ? (_ = (N) => {
      p.current = N, typeof n == "function" ? n(N) : n && (n.current = N);
    }, i[3] = n, i[4] = _) : _ = i[4];
    const b = _;
    let y;
    i[5] !== a ? (y = (N) => {
      const U = (p.current?.getScrollPosition().scrollTop ?? 0) > 0, j = p.current?.rootElement?.closest(".ui-sidebar");
      if (j) {
        const $ = j.hasAttribute("data-content-scrolled");
        !U && $ ? j.removeAttribute("data-content-scrolled") : U && !$ && (j.dataset.contentScrolled = "true");
      }
      a?.(N);
    }, i[5] = a, i[6] = y) : y = i[6];
    const S = y;
    let k;
    i[7] !== s ? (k = ar({ rootClass: "ui-sidebar-content", stylexStyles: z0S(), className: s }), i[7] = s, i[8] = k) : k = i[8];
    const C = k, T = C.className;
    let I, A;
    i[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (I = K0S(), A = V0S(), i[9] = I, i[10] = A) : (I = i[9], A = i[10]);
    const P = h ? 0 : void 0, M = h ? f : void 0;
    let O;
    return i[11] !== c || i[12] !== d || i[13] !== r || i[14] !== S || i[15] !== C.className || i[16] !== C.style || i[17] !== b || i[18] !== P || i[19] !== M || i[20] !== l || i[21] !== u ? (O = o0(xg, { ref: b, bottomFadeSize: c, bottomFadeStartOpacity: d, className: T, contentStyle: I, viewportStyle: A, style: C.style, tabIndex: P, topFadeSize: l, topFadeStartOpacity: u, onKeyDown: M, onScrollStateChange: S, children: r }), i[11] = c, i[12] = d, i[13] = r, i[14] = S, i[15] = C.className, i[16] = C.style, i[17] = b, i[18] = P, i[19] = M, i[20] = l, i[21] = u, i[22] = O) : O = i[22], O;
  }), Dpi = s0e(function(e, n) {
    const i = sae(32);
    let r, s, o, a, l, c, u, d;
    i[0] !== e ? ({ children: r, className: s, headerVisibility: c, collapsible: u, collapsed: o, defaultCollapsed: d, onCollapsedChange: a, ...l } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = l, i[6] = c, i[7] = u, i[8] = d) : (r = i[1], s = i[2], o = i[3], a = i[4], l = i[5], c = i[6], u = i[7], d = i[8]);
    const h = c === void 0 ? "visible" : c, p = u === void 0 ? false : u, g = d === void 0 ? false : d, [f, _] = G5r(g), b = o !== void 0, y = b ? o : f;
    let S;
    i[9] !== y || i[10] !== p || i[11] !== b || i[12] !== a ? (S = () => {
      if (!p) return;
      const U = !y;
      b || _(U), a?.(U);
    }, i[9] = y, i[10] = p, i[11] = b, i[12] = a, i[13] = S) : S = i[13];
    const k = S;
    let C;
    i[14] !== y || i[15] !== p || i[16] !== k ? (C = { collapsible: p, collapsed: y, toggleCollapsed: k }, i[14] = y, i[15] = p, i[16] = k, i[17] = C) : C = i[17];
    const T = C;
    let I;
    i[18] !== s ? (I = ar({ rootClass: "ui-sidebar-group", stylexStyles: [ifa.marker, ifa.root], className: s }), i[18] = s, i[19] = I) : I = i[19];
    const A = I, P = p || void 0, M = y || void 0;
    let O;
    i[20] !== r || i[21] !== h || i[22] !== l || i[23] !== n || i[24] !== A.className || i[25] !== A.style || i[26] !== P || i[27] !== M ? (O = o0("div", { ref: n, className: A.className, style: A.style, "data-sidebar-group": "", "data-header-visibility": h, "data-collapsible": P, "data-collapsed": M, ...l, children: r }), i[20] = r, i[21] = h, i[22] = l, i[23] = n, i[24] = A.className, i[25] = A.style, i[26] = P, i[27] = M, i[28] = O) : O = i[28];
    let N;
    return i[29] !== T || i[30] !== O ? (N = o0(wfa.Provider, { value: T, children: O }), i[29] = T, i[30] = O, i[31] = N) : N = i[31], N;
  }), ASn = s0e(function(e, n) {
    const i = sae(50), { children: r, className: s, actions: o, trailingBand: a, subline: l, subtitle: c, onClick: u, onMouseDown: d, onKeyDown: h, ...p } = e, g = a === void 0 ? "default" : a;
    let f;
    i[0] !== l ? (f = l?.trim(), i[0] = l, i[1] = f) : f = i[1];
    const _ = f, b = _ !== void 0 && _.length > 0;
    let y;
    i[2] !== c ? (y = c?.trim(), i[2] = c, i[3] = y) : y = i[3];
    const S = y, k = S !== void 0 && S.length > 0, C = a8h(), T = C?.collapsible ?? false, I = C?.collapsed ?? false, A = K3(), P = djt(), O = p["aria-label"] !== void 0 || p["aria-labelledby"] !== void 0 ? void 0 : P, N = afa(p);
    let U;
    i[4] !== C ? (U = () => {
      C?.toggleCollapsed();
    }, i[4] = C, i[5] = U) : U = i[5];
    const j = U;
    let $;
    i[6] !== C ? ($ = (te) => {
      (te.key === "Enter" || te.key === " ") && (te.preventDefault(), C?.toggleCollapsed());
    }, i[6] = C, i[7] = $) : $ = i[7];
    const H = $;
    let G;
    i[8] !== d ? (G = (te) => {
      d?.(te), !te.defaultPrevented && te.button === 0 && te.preventDefault();
    }, i[8] = d, i[9] = G) : G = i[9];
    const q = G;
    let K;
    i[10] !== O || i[11] !== N.control || i[12] !== n ? (K = { ref: n, "aria-labelledby": O, ...N.control }, i[10] = O, i[11] = N.control, i[12] = n, i[13] = K) : K = i[13];
    const V = K;
    let Y;
    i[14] !== s ? (Y = ar({ rootClass: "ui-sidebar-group-label", stylexStyles: [u2e.marker, u2e.root], className: s }), i[14] = s, i[15] = Y) : Y = i[15];
    const J = Y;
    let Q;
    if (i[16] !== o || i[17] !== r || i[18] !== V || i[19] !== A || i[20] !== j || i[21] !== H || i[22] !== q || i[23] !== b || i[24] !== k || i[25] !== I || i[26] !== T || i[27] !== u || i[28] !== h || i[29] !== N.row || i[30] !== J.className || i[31] !== J.style || i[32] !== P || i[33] !== g || i[34] !== _ || i[35] !== S) {
      const te = gn(u2e.trigger), ee = gn(u2e.main, g === "collection" ? u2e.mainCollection : null), re = gn(ujt.text, u2e.text), ie = gn(ujt.title), oe = gn(ujt.inlineSubtitle), se = gn(u2e.chevron, A === "rtl" && RIr.root), le = gn(u2e.subline), ce = gn(u2e.actions, g === "collection" ? u2e.actionsCollection : null), ae = J.className, de = J.style, he = N.row, ge = ri("ui-sidebar-group-label-main", ee.className), pe = T || void 0;
      let ve;
      i[37] !== r || i[38] !== P ? (ve = o0("span", { id: P, className: ri("ui-sidebar-label-row-title ui-sidebar-group-label-title", ie.className), style: ie.style, children: r }), i[37] = r, i[38] = P, i[39] = ve) : ve = i[39];
      const fe = k ? o0("span", { className: ri("ui-sidebar-label-row-inline-subtitle ui-sidebar-group-label-inline-subtitle", oe.className), style: oe.style, children: S }) : null, Te = T && o0(zt, { name: "chevron-down", color: "tertiary", className: ri("ui-sidebar-group-label-chevron", se.className), style: se.style, "aria-hidden": "true" });
      let _e;
      i[40] !== pe || i[41] !== ve || i[42] !== fe || i[43] !== Te ? (_e = d2e(nn, { size: "sm", weight: "regular", color: "tertiary", className: ri("ui-sidebar-label-row-text ui-sidebar-group-label-text", re.className), style: re.style, "aria-hidden": pe, children: [ve, fe, Te] }), i[40] = pe, i[41] = ve, i[42] = fe, i[43] = Te, i[44] = _e) : _e = i[44];
      const Ce = o && o0("div", { className: ri("ui-sidebar-group-label-actions", ce.className), style: ce.style, role: "presentation", onClick: ACS, onKeyDown: RCS, children: o0(NC, { iconButtonIconSize: O5r, iconButtonRootStyle: u2e.actionButton, iconButtonSize: "sm", children: o }) });
      let Se;
      i[45] !== ee || i[46] !== ge || i[47] !== _e || i[48] !== Ce ? (Se = d2e("div", { className: ge, style: ee.style, children: [_e, Ce] }), i[45] = ee, i[46] = ge, i[47] = _e, i[48] = Ce, i[49] = Se) : Se = i[49], Q = d2e("div", { className: ae, style: de, role: T ? void 0 : "group", onClick: u, onKeyDown: h, onMouseDown: q, "data-sidebar-group-label": "", "data-trailing-band": g === "default" ? void 0 : g, "data-collapsible": T || void 0, "data-has-subline": b ? true : void 0, ...he, ...T ? null : V, children: [T ? o0("div", { className: ri("ui-sidebar-group-label-trigger", te.className), style: te.style, role: "button", tabIndex: 0, "aria-expanded": !I, onClick: j, onKeyDown: H, ...V }) : null, Se, b ? o0("div", { className: ri("ui-sidebar-group-label-subline", le.className), style: le.style, "aria-hidden": T || void 0, children: _ }) : null] }), i[16] = o, i[17] = r, i[18] = V, i[19] = A, i[20] = j, i[21] = H, i[22] = q, i[23] = b, i[24] = k, i[25] = I, i[26] = T, i[27] = u, i[28] = h, i[29] = N.row, i[30] = J.className, i[31] = J.style, i[32] = P, i[33] = g, i[34] = _, i[35] = S, i[36] = Q;
    } else Q = i[36];
    return Q;
  }), Npi = s0e(function(e, n) {
    const i = sae(27);
    let r, s, o, a;
    i[0] !== e ? ({ children: r, className: s, style: a, ...o } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o, i[4] = a) : (r = i[1], s = i[2], o = i[3], a = i[4]);
    const l = a8h();
    if (!l?.collapsible) {
      let g;
      i[5] !== s || i[6] !== a ? (g = ar({ rootClass: "ui-sidebar-group-content", stylexStyles: kBh(), className: s, style: a }), i[5] = s, i[6] = a, i[7] = g) : g = i[7];
      const f = g;
      let _;
      return i[8] !== r || i[9] !== o || i[10] !== n || i[11] !== f.className || i[12] !== f.style ? (_ = o0("div", { ref: n, className: f.className, style: f.style, ...o, children: r }), i[8] = r, i[9] = o, i[10] = n, i[11] = f.className, i[12] = f.style, i[13] = _) : _ = i[13], _;
    }
    let c;
    i[14] !== s ? (c = ri("ui-sidebar-group-content", s), i[14] = s, i[15] = c) : c = i[15];
    const u = !l.collapsed;
    let d;
    i[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = gn(kBh()), i[16] = d) : d = i[16];
    let h;
    i[17] !== r || i[18] !== d ? (h = o0("div", { ...d, children: r }), i[17] = r, i[18] = d, i[19] = h) : h = i[19];
    let p;
    return i[20] !== o || i[21] !== n || i[22] !== a || i[23] !== c || i[24] !== u || i[25] !== h ? (p = o0(ISn, { ...o, ref: n, className: c, expanded: u, style: a, children: h }), i[20] = o, i[21] = n, i[22] = a, i[23] = c, i[24] = u, i[25] = h, i[26] = p) : p = i[26], p;
  }), ukt = s0e(function(e, n) {
    const i = sae(14);
    let r, s, o, a;
    i[0] !== e ? ({ children: r, className: s, rootStyle: a, ...o } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o, i[4] = a) : (r = i[1], s = i[2], o = i[3], a = i[4]);
    let l;
    i[5] !== s || i[6] !== a ? (l = ar({ rootClass: "ui-sidebar-menu", stylexStyles: [wBh(), a], className: s }), i[5] = s, i[6] = a, i[7] = l) : l = i[7];
    const c = l;
    let u;
    return i[8] !== r || i[9] !== o || i[10] !== n || i[11] !== c.className || i[12] !== c.style ? (u = o0("ul", { ref: n, className: c.className, style: c.style, ...o, children: r }), i[8] = r, i[9] = o, i[10] = n, i[11] = c.className, i[12] = c.style, i[13] = u) : u = i[13], u;
  }), qWe = s0e(function(e, n) {
    const i = sae(12);
    let r, s, o;
    i[0] !== e ? ({ children: r, className: s, ...o } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o) : (r = i[1], s = i[2], o = i[3]);
    let a;
    i[4] !== s ? (a = ar({ rootClass: "ui-sidebar-menu-item", stylexStyles: rfa.root, className: s }), i[4] = s, i[5] = a) : a = i[5];
    const l = a;
    let c;
    return i[6] !== r || i[7] !== o || i[8] !== n || i[9] !== l.className || i[10] !== l.style ? (c = o0("li", { ref: n, className: l.className, style: l.style, ...o, children: r }), i[6] = r, i[7] = o, i[8] = n, i[9] = l.className, i[10] = l.style, i[11] = c) : c = i[11], c;
  }), Fhe = s0e(function(e, n) {
    const i = sae(110), { "aria-busy": r, children: s, className: o, stylexStyles: a, interaction: l, trailingBand: c, tilesetState: u, tone: d, icon: h, statusIcon: p, isActive: g, isUnread: f, isLoading: _, isHighlighted: b, description: y, descriptionAdornment: S, beforeEndIcon: k, endIcon: C, endIconColor: T, actions: I, useTextOverflowFade: A, compact: P, hideIcon: M, reserveIconSpace: O, disabled: N, itemId: U, isEditing: j, isRenaming: $, onClick: H, onKeyDown: G, onMouseDown: q, ...K } = e, V = l === void 0 ? "default" : l, Y = c === void 0 ? "default" : c, J = u === void 0 ? "default" : u, Q = d === void 0 ? "default" : d, te = f === void 0 ? false : f, ee = _ === void 0 ? false : _, re = A === void 0 ? false : A, ie = P === void 0 ? false : P, oe = M === void 0 ? false : M, se = O === void 0 ? false : O, le = N === void 0 ? false : N, ce = q5r(null), ae = djt(), de = djt(), he = djt(), ge = djt(), pe = djt(), ve = afa(K), fe = !!y && !ie, Te = fe && !ee && !!S, _e = K["aria-label"] !== void 0 || K["aria-labelledby"] !== void 0;
    let Ce;
    i[0] !== he || i[1] !== de || i[2] !== _e || i[3] !== fe || i[4] !== Te || i[5] !== ae ? (Ce = _e ? void 0 : [ae, fe ? de : null, Te ? he : null].filter(Boolean).join(" "), i[0] = he, i[1] = de, i[2] = _e, i[3] = fe, i[4] = Te, i[5] = ae, i[6] = Ce) : Ce = i[6];
    const Se = Ce, Pe = p ? ge : null, we = k ? pe : null;
    let Ie;
    i[7] !== Pe || i[8] !== we ? (Ie = [Pe, we].filter(Boolean), i[7] = Pe, i[8] = we, i[9] = Ie) : Ie = i[9];
    const De = Ie.join(" ") || void 0, Ne = djt();
    let be;
    i[10] !== Ne || i[11] !== U ? (be = () => U ?? Ne, i[10] = Ne, i[11] = U, i[12] = be) : be = i[12];
    const [je] = G5r(be), $e = b !== void 0;
    let Je;
    i[13] !== le || i[14] !== je || i[15] !== $e ? (Je = { disabled: le, id: je, isHighlightControlled: $e, ref: ce }, i[13] = le, i[14] = je, i[15] = $e, i[16] = Je) : Je = i[16];
    const Ge = hCS(Je), xe = b ?? Ge, Oe = !!I, ct = !oe && (p || h || se), Ye = j ?? $ ?? false, Ve = re && !ee;
    let Xe;
    i[17] !== n ? (Xe = [ce, n], i[17] = n, i[18] = Xe) : Xe = i[18];
    const lt = c6(Xe);
    let He;
    i[19] !== le || i[20] !== H || i[21] !== G ? (He = (ft) => {
      G?.(ft), !ft.defaultPrevented && (le || !lfa(ft, ce) && (ft.key === "Enter" || ft.key === " ") && (ft.preventDefault(), H?.(ft)));
    }, i[19] = le, i[20] = H, i[21] = G, i[22] = He) : He = i[22];
    const gt = He, ht = !le && !Ye;
    let Ae;
    i[23] !== ht || i[24] !== q ? (Ae = (ft) => {
      q?.(ft), ht && qBh(ft, ce);
    }, i[23] = ht, i[24] = q, i[25] = Ae) : Ae = i[25];
    const ot = Ae, Be = V === "static" ? tN.interactionStatic : null, Ue = J === "default" ? null : tN.tilesetHighlight, it = a?.root;
    let qe;
    i[26] !== o || i[27] !== Be || i[28] !== Ue || i[29] !== it ? (qe = ar({ rootClass: "ui-button ui-sidebar-menu-button", stylexStyles: [tN.marker, tN.root, Be, Ue, it], className: o }), i[26] = o, i[27] = Be, i[28] = Ue, i[29] = it, i[30] = qe) : qe = i[30];
    const pt = qe;
    let dt;
    if (i[31] !== I || i[32] !== r || i[33] !== k || i[34] !== s || i[35] !== ie || i[36] !== De || i[37] !== y || i[38] !== S || i[39] !== he || i[40] !== de || i[41] !== le || i[42] !== C || i[43] !== T || i[44] !== pe || i[45] !== gt || i[46] !== ot || i[47] !== Oe || i[48] !== fe || i[49] !== Te || i[50] !== h || i[51] !== ge || i[52] !== V || i[53] !== g || i[54] !== ht || i[55] !== Ye || i[56] !== xe || i[57] !== ee || i[58] !== te || i[59] !== ae || i[60] !== Se || i[61] !== lt || i[62] !== H || i[63] !== ve.control || i[64] !== ve.row || i[65] !== se || i[66] !== pt.className || i[67] !== pt.style || i[68] !== Ve || i[69] !== ct || i[70] !== p || i[71] !== a?.actions || i[72] !== a?.content || i[73] !== a?.end || i[74] !== a?.iconWrapper || i[75] !== a?.label || i[76] !== J || i[77] !== Q || i[78] !== Y) {
      const ft = gn(u8h, tN.trigger), bt = gn(tN.iconWrapper, a?.iconWrapper), St = gn(tN.icon), Et = gn(tN.iconElement), kt = gn(tN.iconPlaceholder), xt = gn(tN.statusIcon), Pt = gn(tN.content, V === "static" && ie ? tN.contentStaticCompact : null, a?.content), Dt = gn(tN.label, ee && tN.loadingText, ee && tN.loadingLabel, a?.label), Vt = gn(tN.description, Te && tN.descriptionWithAdornment, ee && tN.loadingText, ee && tN.loadingDescription);
      let tn;
      i[80] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (tn = gn(tN.descriptionRow), i[80] = tn) : tn = i[80];
      const un = tn;
      let kn;
      i[81] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (kn = gn(tN.descriptionAdornment), i[81] = kn) : kn = i[81];
      const oi = kn, Fn = gn(tN.end, a?.end), Qt = gn(tN.endIcon), Sn = gn(tN.endRest), $n = gn(tN.actions, Y === "collection" ? tN.actionsCollection : null, a?.actions), Mn = fe ? o0(nn, { id: de, size: "sm", color: ee ? void 0 : "tertiary", className: ri("ui-sidebar-menu-button-description", Vt.className), style: Vt.style, children: Ve ? o0(Mpi, { children: y }) : y }) : null, Un = pt.className, Xn = pt.style, Ti = ve.row, bi = le ? "presentation" : ht ? "button" : void 0, Qn = ht ? 0 : void 0, ni = le || void 0, pn = ee ? true : r, yn = ht ? Se : void 0, Ln = ht ? De : void 0, xi = ri("ui-sidebar-menu-button-trigger", ft.className), Ci = ft.style, En = ve.control, Dn = ri("ui-sidebar-menu-button-content", Pt.className), Si = Pt.style, Ui = ri("ui-sidebar-menu-button-label", Dt.className);
      let Nn;
      i[82] !== s || i[83] !== Ve ? (Nn = Ve ? o0(Mpi, { children: s }) : s, i[82] = s, i[83] = Ve, i[84] = Nn) : Nn = i[84];
      let ci;
      i[85] !== Dt || i[86] !== ae || i[87] !== Ui || i[88] !== Nn ? (ci = o0(nn, { id: ae, size: "md", className: Ui, style: Dt.style, children: Nn }), i[85] = Dt, i[86] = ae, i[87] = Ui, i[88] = Nn, i[89] = ci) : ci = i[89];
      let Pi;
      i[90] !== S || i[91] !== he || i[92] !== Mn || i[93] !== Te ? (Pi = Te ? d2e("div", { className: un.className, "data-sidebar-menu-button-description-row": "", style: un.style, children: [Mn, o0("span", { id: he, className: oi.className, "data-sidebar-menu-button-description-adornment": "", style: oi.style, children: S })] }) : Mn, i[90] = S, i[91] = he, i[92] = Mn, i[93] = Te, i[94] = Pi) : Pi = i[94];
      let vi;
      i[95] !== Pt || i[96] !== Dn || i[97] !== ci || i[98] !== Pi ? (vi = d2e("div", { className: Dn, style: Si, children: [ci, Pi] }), i[95] = Pt, i[96] = Dn, i[97] = ci, i[98] = Pi, i[99] = vi) : vi = i[99];
      let Yi;
      i[100] !== lt || i[101] !== ve.control || i[102] !== bi || i[103] !== Qn || i[104] !== ni || i[105] !== pn || i[106] !== yn || i[107] !== Ln || i[108] !== vi ? (Yi = o0("div", { ref: lt, role: bi, tabIndex: Qn, "aria-disabled": ni, "aria-busy": pn, "aria-labelledby": yn, "aria-describedby": Ln, className: xi, style: Ci, "data-sidebar-row-trigger": "", ...En, children: vi }), i[100] = lt, i[101] = ve.control, i[102] = bi, i[103] = Qn, i[104] = ni, i[105] = pn, i[106] = yn, i[107] = Ln, i[108] = vi, i[109] = Yi) : Yi = i[109], dt = d2e("div", { className: Un, style: Xn, "data-sidebar-menu-button": "", "data-variant": "ghost", "data-interaction": V === "default" ? void 0 : V, "data-trailing-band": Y === "default" ? void 0 : Y, "data-tileset-state": J === "default" ? void 0 : J, "data-tone": Q === "default" ? void 0 : Q, "data-active": g || void 0, "data-unread": te || void 0, "data-loading": ee || void 0, "data-highlighted": xe || void 0, "data-has-description": fe || void 0, "data-has-actions": Oe || void 0, "data-compact": ie || void 0, "data-disabled": le || void 0, "data-editing": Ye || void 0, onClick: le ? void 0 : H, onKeyDown: gt, onMouseDown: ot, ...Ti, children: [ct && o0("div", { id: ge, className: ri("ui-sidebar-menu-button-icon-wrapper", bt.className), style: bt.style, children: p ? o0("span", { className: ri("ui-sidebar-menu-button-status-icon", xt.className), style: xt.style, children: p }) : typeof h == "string" ? o0(zt, { name: h, "aria-hidden": "true", className: ri("ui-sidebar-menu-button-icon", St.className), style: St.style }) : h ? o0("span", { "aria-hidden": true, className: ri("ui-sidebar-menu-button-icon", St.className, Et.className), style: { ...St.style, ...Et.style }, children: h }) : se ? o0("span", { "aria-hidden": true, className: ri("ui-sidebar-menu-button-icon-placeholder", kt.className), style: kt.style }) : null }), Yi, (k || C || I) && d2e("div", { className: ri("ui-sidebar-menu-button-end", Fn.className), style: Fn.style, children: [(k || C) && d2e("span", { id: pe, className: ri("ui-sidebar-menu-button-end-rest", Sn.className), style: Sn.style, children: [k, C && o0(zt, { name: C, color: T, "aria-hidden": "true", className: ri("ui-sidebar-menu-button-end-icon", Qt.className), style: Qt.style })] }), I && o0("div", { className: ri("ui-sidebar-menu-button-actions", $n.className), style: $n.style, role: "presentation", onClick: PCS, onKeyDown: MCS, children: o0(NC, { buttonRootStyle: tN.actionsControl, iconButtonIconSize: O5r, iconButtonRootStyle: tN.actionsControl, iconButtonSize: "sm", iconButtonVariant: "text", children: I }) })] })] }), i[31] = I, i[32] = r, i[33] = k, i[34] = s, i[35] = ie, i[36] = De, i[37] = y, i[38] = S, i[39] = he, i[40] = de, i[41] = le, i[42] = C, i[43] = T, i[44] = pe, i[45] = gt, i[46] = ot, i[47] = Oe, i[48] = fe, i[49] = Te, i[50] = h, i[51] = ge, i[52] = V, i[53] = g, i[54] = ht, i[55] = Ye, i[56] = xe, i[57] = ee, i[58] = te, i[59] = ae, i[60] = Se, i[61] = lt, i[62] = H, i[63] = ve.control, i[64] = ve.row, i[65] = se, i[66] = pt.className, i[67] = pt.style, i[68] = Ve, i[69] = ct, i[70] = p, i[71] = a?.actions, i[72] = a?.content, i[73] = a?.end, i[74] = a?.iconWrapper, i[75] = a?.label, i[76] = J, i[77] = Q, i[78] = Y, i[79] = dt;
    } else dt = i[79];
    return dt;
  }), Afa = s0e(function(e, n) {
    const i = sae(12);
    let r, s, o;
    i[0] !== e ? ({ className: r, icon: o, ...s } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o) : (r = i[1], s = i[2], o = i[3]);
    const a = o === void 0 ? "layout-sidebar-left" : o, { toggleSidebar: l } = cfa("Sidebar.Trigger");
    let c;
    i[4] !== r ? (c = ri("ui-sidebar-trigger", r), i[4] = r, i[5] = c) : c = i[5];
    let u;
    return i[6] !== a || i[7] !== s || i[8] !== n || i[9] !== c || i[10] !== l ? (u = o0(ho, { size: "sm", ref: n, icon: a, className: c, onClick: l, "aria-label": "Toggle sidebar", ...s }), i[6] = a, i[7] = s, i[8] = n, i[9] = c, i[10] = l, i[11] = u) : u = i[11], u;
  }), d8h = Object.assign(z5r, { Root: z5r, TopBar: Cfa, Header: Tfa, Footer: Efa, Actions: Ifa, Content: xfa, Group: Dpi, GroupLabel: ASn, GroupContent: Npi, Section: gfa, SectionHead: ffa, SectionContent: vfa, NestedRows: _fa, Menu: ukt, MenuItem: qWe, MenuButton: Fhe, Separator: c8h, Trigger: Afa, EnvironmentIndicator: l8h });
} });
import { jsx as oae, jsxs as K5r, Fragment as DCS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as trt } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as NCS, useContext as LCS, useId as OCS } from "./react-runtime/react/esm-index-production.js";
function h8h(t) {
  const e = LCS(Rfa);
  if (e === null) throw new Error(`CardList.${t} must be used within CardList.Section`);
  return e;
}
function FCS(t) {
  const e = trt(7), { "aria-label": n, children: i, contentInset: r, scrollMode: s } = t, o = r === void 0 ? "page" : r, a = s === void 0 ? "contained" : s;
  let l;
  e[0] !== i || e[1] !== o || e[2] !== a ? (l = a === "contained" ? oae(xg, { contentStyle: [zWe.sectionStack, zWe.content, o === "none" && zWe.contentFlush], "data-card-list-content-inset": o, "data-component": "card-list-scroll", direction: "vertical", rootStyle: zWe.gutter, scrollbarVisibility: "never", children: i }) : oae("div", { "data-card-list-content-inset": o, "data-component": "card-list-content", ...{ 0: { className: "ui-8ky9kg ui-2imrbv ui-1qhopif ui-78zum5 ui-dt5ytf ui-uve7l6 ui-1w8q5y7 ui-1rgtt3y ui-9s6atj" }, 1: { className: "ui-8ky9kg ui-2imrbv ui-1qhopif ui-78zum5 ui-dt5ytf ui-exx8yu ui-13botnq ui-18d9i69 ui-1sudrl5" } }[(o === "none") << 0], children: i }), e[0] = i, e[1] = o, e[2] = a, e[3] = l) : l = e[3];
  const c = l;
  let u;
  return e[4] !== n || e[5] !== c ? (u = oae("section", { "aria-label": n, "data-component": "card-list-root", className: "ui-rvj5dj ui-2lwn1j ui-12lumcd ui-5o4joa ui-1mkdm3x", children: c }), e[4] = n, e[5] = c, e[6] = u) : u = e[6], u;
}
function BCS(t) {
  const e = trt(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = oae("div", { "data-component": "card-list-content-inset", className: "ui-1qhopif ui-78zum5 ui-h8yej3 ui-euugli ui-9f619 ui-dt5ytf ui-t9g0qb ui-1lg90n0 ui-20eq2h ui-1h3bj18", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function UCS(t) {
  const e = trt(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = oae(nn, { as: "div", color: "tertiary", "data-component": "card-list-empty", rootStyle: zWe.empty, size: "md", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function jCS(t) {
  const e = trt(9), { children: n, id: i } = t, r = OCS();
  let s;
  e[0] !== r ? (s = { headingId: r }, e[0] = r, e[1] = s) : s = e[1];
  let o;
  e[2] !== n || e[3] !== r || e[4] !== i ? (o = oae("section", { "aria-labelledby": r, "data-card-list-section-id": i, "data-component": "card-list-section", className: "ui-78zum5 ui-euugli ui-2lah0s ui-dt5ytf ui-137clkk", children: n }), e[2] = n, e[3] = r, e[4] = i, e[5] = o) : o = e[5];
  let a;
  return e[6] !== s || e[7] !== o ? (a = oae(Rfa, { value: s, children: o }), e[6] = s, e[7] = o, e[8] = a) : a = e[8], a;
}
function $CS(t) {
  const e = trt(13), { count: n, emphasis: i, label: r, tone: s } = t, o = i === void 0 ? "default" : i, { headingId: a } = h8h("SectionHeader"), l = o === "muted" ? "secondary" : void 0;
  let c;
  e[0] !== s ? (c = gn(zWe.titleRow, s !== void 0 && p8h[s]), e[0] = s, e[1] = c) : c = e[1];
  let u;
  e[2] !== r || e[3] !== s ? (u = oae("span", { "data-card-list-tone": s, children: r }), e[2] = r, e[3] = s, e[4] = u) : u = e[4];
  let d;
  e[5] !== n ? (d = n === void 0 || n === 0 ? null : K5r(DCS, { children: [" ", oae(nn, { color: "quaternary", numeric: true, rootStyle: zWe.count, size: "sm", weight: "regular", children: n })] }), e[5] = n, e[6] = d) : d = e[6];
  let h;
  return e[7] !== a || e[8] !== l || e[9] !== c || e[10] !== u || e[11] !== d ? (h = oae("header", { "data-component": "card-list-section-header", className: "ui-78zum5 ui-3zvfii ui-6s0dn4 ui-f6zju3 ui-cnij5n", children: K5r(nn, { "aria-level": 2, as: "div", color: l, id: a, role: "heading", size: "sm", weight: "regular", ...c, children: [u, d] }) }), e[7] = a, e[8] = l, e[9] = c, e[10] = u, e[11] = d, e[12] = h) : h = e[12], h;
}
function HCS(t) {
  const e = trt(2), { children: n } = t;
  h8h("Items");
  let i;
  return e[0] !== n ? (i = oae("div", { "data-component": "card-list-items", className: "ui-78zum5 ui-euugli ui-dt5ytf ui-5cdhqx", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function WCS(t) {
  const e = trt(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = oae("div", { "data-component": "card-list-row", className: "ui-1n2onr6 ui-78zum5 ui-euugli ui-2lah0s", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function GCS(t) {
  const e = trt(30), { children: n, id: i, label: r, leading: s, onActivate: o, state: a, trailing: l } = t, c = a === void 0 ? "default" : a;
  let u;
  e[0] !== i || e[1] !== o ? (u = (j) => {
    o?.(i, j);
  }, e[0] = i, e[1] = o, e[2] = u) : u = e[2];
  const d = u;
  let h;
  e[3] !== i || e[4] !== o ? (h = (j) => {
    j.key !== "Enter" && j.key !== " " || (j.preventDefault(), o?.(i, j));
  }, e[3] = i, e[4] = o, e[5] = h) : h = e[5];
  const p = h, g = o !== void 0, f = g ? r : void 0, _ = g ? d : void 0, b = g ? p : void 0, y = g ? "button" : void 0, S = g ? 0 : void 0;
  let k;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = { 0: { className: "ui--default-marker ui-1n2onr6 ui-78zum5 ui-12lumcd ui-euugli ui-phwom3 ui-qr9sye ui-1yywrm5 ui-1f2e1fj ui-1t7xhzw ui-dpxx8g ui-1wd3ewq ui-uxw1ft ui-6ikm8r ui-10wlt62 ui-1m7fhj7 ui-jbqb8w ui-1k57tk5" }, 2: { className: "ui--default-marker ui-1n2onr6 ui-78zum5 ui-12lumcd ui-euugli ui-phwom3 ui-qr9sye ui-1yywrm5 ui-1f2e1fj ui-1t7xhzw ui-dpxx8g ui-1wd3ewq ui-uxw1ft ui-6ikm8r ui-10wlt62 ui-1m7fhj7 ui-1k57tk5 ui-jbqb8w ui-qjnua1 ui-10co6l2 ui-1ypdohk" }, 1: { className: "ui--default-marker ui-1n2onr6 ui-78zum5 ui-12lumcd ui-euugli ui-phwom3 ui-qr9sye ui-1yywrm5 ui-1f2e1fj ui-1t7xhzw ui-dpxx8g ui-1wd3ewq ui-uxw1ft ui-6ikm8r ui-10wlt62 ui-1m7fhj7 ui-1k57tk5 ui-i07v4r ui-1iuyybk ui-19wsfbc" }, 3: { className: "ui--default-marker ui-1n2onr6 ui-78zum5 ui-12lumcd ui-euugli ui-phwom3 ui-qr9sye ui-1yywrm5 ui-1f2e1fj ui-1t7xhzw ui-dpxx8g ui-1wd3ewq ui-uxw1ft ui-6ikm8r ui-10wlt62 ui-1m7fhj7 ui-1k57tk5 ui-1ypdohk ui-i07v4r ui-1iuyybk ui-19wsfbc" } }, e[6] = k) : k = e[6];
  const C = k[!!g << 1 | (c === "selected") << 0], T = s === void 0 ? true : void 0;
  let I;
  e[7] !== s || e[8] !== T ? (I = oae("div", { "aria-hidden": T, "data-component": "card-list-leading", className: "ui-78zum5 ui-y1keyj ui-2lwn1j ui-2lah0s ui-6s0dn4 ui-l56j7k", children: s }), e[7] = s, e[8] = T, e[9] = I) : I = e[9];
  let A;
  e[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (A = { 0: { className: "ui-78zum5 ui-2lwn1j ui-euugli ui-12lumcd ui-6s0dn4 ui-11twubx ui-6ikm8r ui-10wlt62 ui-17v7654 ui-1iusha1" }, 1: { className: "ui-78zum5 ui-2lwn1j ui-euugli ui-12lumcd ui-6s0dn4 ui-11twubx ui-6ikm8r ui-10wlt62 ui-1iusha1 ui-1xpa7k" } }, e[10] = A) : A = e[10];
  const P = A[(l !== void 0) << 0];
  let M;
  e[11] !== n ? (M = oae("div", { "data-component": "card-list-item-main", className: "ui-78zum5 ui-2lwn1j ui-1mkiy5m ui-12lumcd ui-dt5ytf ui-l56j7k ui-137clkk ui-6ikm8r ui-10wlt62 ui-j9uezu ui-pf9j6y ui-ip9h3s ui-1bxrdft", children: n }), e[11] = n, e[12] = M) : M = e[12];
  let O;
  e[13] !== l ? (O = l === void 0 ? null : oae("div", { "data-component": "card-list-trailing", className: "ui-3nfvp2 ui-2lah0s ui-6s0dn4 ui-g01cxk ui-cynye9 ui-aa8gfd ui-47corl ui-slz20d ui-1hdsbzh ui-19991ni ui-7pq1vu ui-6ekqhr", children: l }), e[13] = l, e[14] = O) : O = e[14];
  let N;
  e[15] !== P || e[16] !== M || e[17] !== O ? (N = K5r("div", { "data-component": "card-list-item-content", ...P, children: [M, O] }), e[15] = P, e[16] = M, e[17] = O, e[18] = N) : N = e[18];
  let U;
  return e[19] !== i || e[20] !== g || e[21] !== C || e[22] !== I || e[23] !== N || e[24] !== f || e[25] !== _ || e[26] !== b || e[27] !== y || e[28] !== S ? (U = K5r("article", { "aria-label": f, "data-card-list-item": true, "data-card-list-item-id": i, "data-card-list-item-interactive": g, "data-component": "card-list-item", onClick: _, onKeyDown: b, role: y, tabIndex: S, ...C, children: [I, N] }), e[19] = i, e[20] = g, e[21] = C, e[22] = I, e[23] = N, e[24] = f, e[25] = _, e[26] = b, e[27] = y, e[28] = S, e[29] = U) : U = e[29], U;
}
function qCS(t) {
  const e = trt(8), { collapsedLabel: n, expandedLabel: i, onStateChange: r, state: s } = t, o = n === void 0 ? "More" : n, a = i === void 0 ? "Show less" : i, l = s === "collapsed" ? "expanded" : "collapsed", c = s === "expanded";
  let u;
  e[0] !== l || e[1] !== r ? (u = () => r(l), e[0] = l, e[1] = r, e[2] = u) : u = e[2];
  let d;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = { root: zWe.overflowToggleRoot, iconWrapper: zWe.overflowToggleIcon }, e[3] = d) : d = e[3];
  const h = s === "collapsed" ? o : a;
  let p;
  return e[4] !== c || e[5] !== u || e[6] !== h ? (p = oae(Fhe, { "aria-expanded": c, "data-card-list-item": "", "data-card-list-item-id": "overflow-toggle", "data-project-list-overflow-toggle": "", onClick: u, reserveIconSpace: true, stylexStyles: d, tone: "muted", children: h }), e[4] = c, e[5] = u, e[6] = h, e[7] = p) : p = e[7], p;
}
var zWe, p8h, Rfa, o0e, 