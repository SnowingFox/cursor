// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DefaultDiff.js range:14394193..14455163
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, joe, mf, Qla, Eit, RFe, Fha, e5h, GLr, VLr, JLr, b5h, y5h, Xha, nOr, D5h, O5h, qu, fd
// wrapper-init: $hi
// hoisted-owner: Markdown.js (app-out-vs-workbench-workbench-glass-main-js:2042); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

$hi = L({ "DefaultDiff.js"() {
  "use strict";
  E(), Va(), joe(), mf(), Qla(), Eit(), RFe(), Fha(), e5h(), GLr(), VLr(), JLr(), b5h(), y5h(), Xha(), nOr(), D5h(), O5h(), qu(), fd(), Fhi = 12, Bhi = 11, UUt = 20, Y5h = 33, X5h = 500, Z5h = 4, Q5h = { icon: { kmuXW: "ui-2lah0s", $$css: true } }, J5h = OUt(function(e) {
    const n = tae(22), { tokens: i, type: r, originalLineNumber: s, modifiedLineNumber: o, inlineChanges: a, contentLength: l, showLineNumbers: c, showPlusMinus: u, coloredLineNumbers: d, showAccentStrip: h, interaction: p, rowIndex: g, wrapInfo: f } = e, [_, b] = FUt(false), y = a && a.length > 0 && !(a.length === 1 && a[0].startColumn === 1 && a[0].endColumn >= l + 1);
    let S;
    if (n[0] !== d || n[1] !== _ || n[2] !== a || n[3] !== p || n[4] !== o || n[5] !== s || n[6] !== g || n[7] !== y || n[8] !== h || n[9] !== c || n[10] !== u || n[11] !== i || n[12] !== r || n[13] !== f) {
      const k = $5h(r), C = y && k ? j5h(i, a) : i.map(cbS), T = c !== false, I = c === "partial", A = o ?? s, P = d ? r : void 0, M = p, O = !!M && M.interactionGutter.rail != null && M.interactionGutter.rail !== "single";
      let N;
      n[15] !== _ || n[16] !== M || n[17] !== T ? (N = M && (_ || M.interactionGutter.showPlus) ? H1(G5h, { plusDragActive: M.interactionGutter.plusDragActive, onMouseDown: M.interactionGutter.onPlusMouseDown, placement: T ? "gutter" : "lineContentInteraction" }) : null, n[15] = _, n[16] = M, n[17] = T, n[18] = N) : N = n[18];
      const U = N, j = !!M?.rangeSelected, $ = gn(l5h({ type: r, rangeSelected: j })), H = gn(YLr({ type: r, rangeSelected: j })), G = gn(XLr({ type: r, rangeSelected: j, withIndicatorStrip: h })), q = gn(ZLr({ dataType: P })), K = gn(c5h({ type: r })), V = gn(s5h()), Y = gn(r5h()), J = gn(Lhi()), Q = gn(Lhi(), KLr()), te = gn(a5h()), ee = gn(i5h()), re = y && k ? H5h(r) : null;
      let ie;
      n[19] !== M || n[20] !== g ? (ie = M ? { "data-ui-default-diff-interactive-row": true, ...g !== void 0 && g >= 0 ? { [tOr]: String(g) } : {}, onMouseEnter: () => {
        b(true), M.onLineMouseEnter();
      }, onMouseLeave: (oe) => {
        b(false), M.onLineMouseLeave(oe);
      } } : {}, n[19] = M, n[20] = g, n[21] = ie) : ie = n[21], S = j7("div", { className: ri("ui-default-diff__line", j && "ui-default-diff__line--range-selected", $.className), "data-type": r, style: $.style, ...ie, children: [h && H1("div", { className: ri("ui-default-diff__indicator-strip", H.className), style: H.style }), T && j7("div", { className: ri("ui-default-diff__gutter", G.className), "data-type": r, style: G.style, children: [I ? H1("span", { className: ri("ui-default-diff__line-number", q.className), "data-type": P, style: q.style, children: A ?? "" }) : j7(rpa, { children: [H1("span", { className: ri("ui-default-diff__line-number", q.className), "data-type": P, style: q.style, children: s ?? "" }), H1("span", { className: ri("ui-default-diff__line-number", q.className), "data-type": P, style: q.style, children: o ?? "" })] }), u && j7("span", { className: ri("ui-default-diff__line-indicator", K.className), style: K.style, children: [r === "added" && "+", r === "removed" && "-", r === "unchanged" && " "] }), U] }), M ? H1("div", { className: ri("ui-default-diff__line-code-column", V.className), style: V.style, children: j7("div", { className: ri("ui-default-diff__line-code-area", Y.className), style: Y.style, children: [j7("div", { className: ri("ui-default-diff__line-content", "ui-default-diff__line-content--interaction", Q.className), style: Q.style, children: [T ? null : U, lpa(C, k, re, f), M.selectionEndMarker ? H1("span", { "aria-hidden": true, className: ri("ui-default-diff__selection-end-sentinel", ee.className), "data-ui-default-diff-selection-end": true, style: ee.style }) : null] }), O ? H1("div", { "aria-hidden": true, className: ri("ui-default-diff__selection-rail", te.className), style: te.style }) : null] }) }) : H1("div", { className: ri("ui-default-diff__line-content", J.className), style: J.style, children: lpa(C, k, re, f) })] }), n[0] = d, n[1] = _, n[2] = a, n[3] = p, n[4] = o, n[5] = s, n[6] = g, n[7] = y, n[8] = h, n[9] = c, n[10] = u, n[11] = i, n[12] = r, n[13] = f, n[14] = S;
    } else S = n[14];
    return S;
  }), cOr = OUt(function(e) {
    const n = tae(54), { lineCount: i, unloaded: r, onExpandUp: s, onExpandDown: o, onExpandAll: a } = e, l = r === void 0 ? false : r, c = E_S(), u = w5h(), d = l && u === "unavailable", h = !!s && !d, p = !!o && !d, g = !l && h && p && i <= UUt, f = h || p, _ = g ? 1 : (h ? 1 : 0) + (p ? 1 : 0), b = _ === 0;
    let y;
    n[0] !== a || n[1] !== o || n[2] !== s ? (y = () => {
      if (a) {
        a();
        return;
      }
      s?.(), o?.();
    }, n[0] = a, n[1] = o, n[2] = s, n[3] = y) : y = n[3];
    const S = y;
    let k;
    n[4] !== i || n[5] !== l || n[6] !== u ? (k = l ? rbS(u) : `${i} unmodified ${i === 1 ? "line" : "lines"}`, n[4] = i, n[5] = l, n[6] = u, n[7] = k) : k = n[7];
    const C = k, T = l && u === "failed" ? "Retry loading unmodified lines" : `Expand ${C}`;
    let I, A, P, M, O, N, U, j;
    if (n[8] !== _ || n[9] !== S || n[10] !== f || n[11] !== i || n[12] !== b || n[13] !== o || n[14] !== s || n[15] !== c || n[16] !== p || n[17] !== g || n[18] !== h || n[19] !== l) {
      const G = gn(d_S({ noButtons: b, presentation: c })), q = gn(h_S()), K = gn(p_S(c));
      let V;
      n[28] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (V = gn(m_S()), n[28] = V) : V = n[28];
      const Y = V;
      let J, Q;
      n[29] !== f || n[30] !== b || n[31] !== c ? (J = gn(g_S({ noButtons: b, presentation: c, clickable: f })), Q = ri("ui-default-diff__separator-text", J.className), n[29] = f, n[30] = b, n[31] = c, n[32] = J, n[33] = Q) : (J = n[32], Q = n[33]), I = Q, A = J.style;
      const te = gn(f_S());
      P = ri("ui-default-diff__separator", G.className), M = c === "unified-diff" ? "" : void 0, O = _ === 0 ? "none" : _ === 1 ? "single" : "dual", N = G.style;
      let ee;
      n[34] !== i || n[35] !== l ? (ee = l ? `
[unmodified lines not loaded]

` : q5h(i), n[34] = i, n[35] = l, n[36] = ee) : ee = n[36], n[37] !== ee ? (U = H1("span", { "aria-hidden": true, className: ri("ui-default-diff__separator-copy-text", te.className), style: te.style, children: ee }), n[37] = ee, n[38] = U) : U = n[38], j = f && H1("div", { className: ri("ui-default-diff__separator-buttons", q.className), style: q.style, children: g ? j7("button", { "aria-label": "Expand all", className: ri("ui-default-diff__expand-btn", K.className), onClick: S, style: K.style, type: "button", children: [H1(zt, { "aria-hidden": true, name: "chevron-down", size: "sm" }), H1(zt, { "aria-hidden": true, name: "chevron-up", size: "sm", className: Y.className, style: Y.style })] }) : j7(rpa, { children: [h && H1("button", { "aria-label": "Expand up", className: ri("ui-default-diff__expand-btn", K.className), onClick: s, style: K.style, type: "button", children: H1(zt, { "aria-hidden": true, name: "chevron-down", size: "sm" }) }), p && H1("button", { "aria-label": "Expand down", className: ri("ui-default-diff__expand-btn", K.className), onClick: o, style: K.style, type: "button", children: H1(zt, { "aria-hidden": true, name: "chevron-up", size: "sm" }) })] }) }), n[8] = _, n[9] = S, n[10] = f, n[11] = i, n[12] = b, n[13] = o, n[14] = s, n[15] = c, n[16] = p, n[17] = g, n[18] = h, n[19] = l, n[20] = I, n[21] = A, n[22] = P, n[23] = M, n[24] = O, n[25] = N, n[26] = U, n[27] = j;
    } else I = n[20], A = n[21], P = n[22], M = n[23], O = n[24], N = n[25], U = n[26], j = n[27];
    let $;
    n[39] !== T || n[40] !== S || n[41] !== f || n[42] !== I || n[43] !== A || n[44] !== C ? ($ = f ? H1("button", { "aria-label": T, className: I, onClick: S, style: A, type: "button", children: C }) : H1("span", { className: I, style: A, children: C }), n[39] = T, n[40] = S, n[41] = f, n[42] = I, n[43] = A, n[44] = C, n[45] = $) : $ = n[45];
    let H;
    return n[46] !== $ || n[47] !== P || n[48] !== M || n[49] !== O || n[50] !== N || n[51] !== U || n[52] !== j ? (H = j7("div", { className: P, "data-default-diff-separator": M, "data-buttons": O, style: N, children: [U, j, $] }), n[46] = $, n[47] = P, n[48] = M, n[49] = O, n[50] = N, n[51] = U, n[52] = j, n[53] = H) : H = n[53], H;
  }), uOr = OUt(function(e) {
    const n = tae(65), { line: i, tokens: r, side: s, showLineNumbers: o, coloredLineNumbers: a, showAccentStrip: l, rangeSelected: c, interactionGutter: u, hovered: d, selectionEndMarker: h, wrapInfo: p, pairWrapRowCount: g } = e, f = u, _ = !!f && f.rail != null && f.rail !== "single";
    let b;
    n[0] !== d || n[1] !== f || n[2] !== o ? (b = f && (d || f.showPlus) ? H1(G5h, { plusDragActive: f.plusDragActive, onMouseDown: f.onPlusMouseDown, placement: o !== false ? "gutter" : "lineContentInteraction" }) : null, n[0] = d, n[1] = f, n[2] = o, n[3] = b) : b = n[3];
    const y = b;
    let S, k, C, T, I, A, P, M, O, N, U;
    if (n[4] !== y || n[5] !== a || n[6] !== f || n[7] !== i || n[8] !== g || n[9] !== c || n[10] !== h || n[11] !== l || n[12] !== o || n[13] !== _ || n[14] !== s || n[15] !== r || n[16] !== p) {
      C = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
      e: {
        const H = gn(o5h()), G = gn(a5h()), q = gn(i5h());
        if (!i) {
          const fe = gn(Gha({ type: "empty", rangeSelected: !!c })), Te = gn(XLr({ type: void 0, rangeSelected: !!c, withIndicatorStrip: l })), _e = gn(YLr({ type: "unchanged", rangeSelected: !!c })), Ce = gn(ZLr({ dataType: void 0 })), Se = gn(Lhi(), f && KLr()), Pe = ri("ui-default-diff__split-cell", c && "ui-default-diff__split-cell--range-selected", fe.className), we = fe.style;
          let Ie;
          n[28] !== g ? (Ie = z5h(g), n[28] = g, n[29] = Ie) : Ie = n[29];
          let Me;
          n[30] !== fe || n[31] !== Ie ? (Me = { ...we, ...Ie }, n[30] = fe, n[31] = Ie, n[32] = Me) : Me = n[32];
          let De;
          n[33] !== h ? (De = h ? { "data-ui-default-diff-selection-end": true } : {}, n[33] = h, n[34] = De) : De = n[34];
          const Ne = ri("ui-default-diff__split-cell-code-area", H.className), be = H.style, je = ri("ui-default-diff__line-content", f && "ui-default-diff__line-content--interaction", Se.className), $e = o === false ? y : null;
          let Je;
          n[35] !== Se || n[36] !== je || n[37] !== $e ? (Je = H1("div", { className: je, style: Se.style, children: $e }), n[35] = Se, n[36] = je, n[37] = $e, n[38] = Je) : Je = n[38], C = j7("div", { className: Pe, "data-type": "empty", style: Me, ...De, children: [l && H1("div", { className: ri("ui-default-diff__indicator-strip", _e.className), style: _e.style }), o !== false && j7("div", { className: ri("ui-default-diff__gutter", Te.className), style: Te.style, children: [H1("span", { className: ri("ui-default-diff__line-number", Ce.className), style: Ce.style }), y] }), j7("div", { className: Ne, style: be, children: [Je, _ ? H1("div", { "aria-hidden": true, className: ri("ui-default-diff__selection-rail", G.className), style: G.style }) : null] })] });
          break e;
        }
        const K = i.type === "unchanged" ? "unchanged" : i.type, V = s === "left" ? i.originalLineNumber : i.modifiedLineNumber, Y = i.inlineChanges && i.inlineChanges.length > 0 && !(i.inlineChanges.length === 1 && i.inlineChanges[0].startColumn === 1 && i.inlineChanges[0].endColumn >= i.content.length + 1), J = $5h(K), Q = Y && J ? j5h(r, i.inlineChanges) : r.map(ubS), te = a ? K : void 0, ee = gn(Gha({ type: K, rangeSelected: !!c })), re = gn(YLr({ type: K, rangeSelected: !!c })), ie = gn(XLr({ type: K, rangeSelected: !!c, withIndicatorStrip: l })), oe = gn(ZLr({ dataType: te })), se = gn(Lhi(), f && KLr()), le = Y && J ? H5h(K) : null;
        M = ri("ui-default-diff__split-cell", c && "ui-default-diff__split-cell--range-selected", ee.className), O = K;
        const ce = ee.style;
        let ae;
        n[39] !== g ? (ae = z5h(g), n[39] = g, n[40] = ae) : ae = n[40], n[41] !== ee || n[42] !== ae ? (N = { ...ce, ...ae }, n[41] = ee, n[42] = ae, n[43] = N) : N = n[43], n[44] !== h ? (U = h ? { "data-ui-default-diff-selection-end": true } : {}, n[44] = h, n[45] = U) : U = n[45], S = l && H1("div", { className: ri("ui-default-diff__indicator-strip", re.className), style: re.style }), k = o !== false && j7("div", { className: ri("ui-default-diff__gutter", ie.className), "data-type": K, style: ie.style, children: [H1("span", { className: ri("ui-default-diff__line-number", oe.className), "data-type": te, style: oe.style, children: V ?? "" }), y] }), T = ri("ui-default-diff__split-cell-code-area", H.className), I = H.style;
        const de = ri("ui-default-diff__line-content", f && "ui-default-diff__line-content--interaction", se.className), he = se.style, ge = o === false ? y : null, pe = lpa(Q, J, le, p), ve = h ? H1("span", { "aria-hidden": true, className: ri("ui-default-diff__selection-end-sentinel", q.className), "data-ui-default-diff-selection-end": true, style: q.style }) : null;
        n[46] !== se || n[47] !== de || n[48] !== ge || n[49] !== pe || n[50] !== ve ? (A = j7("div", { className: de, style: he, children: [ge, pe, ve] }), n[46] = se, n[47] = de, n[48] = ge, n[49] = pe, n[50] = ve, n[51] = A) : A = n[51], P = _ ? H1("div", { "aria-hidden": true, className: ri("ui-default-diff__selection-rail", G.className), style: G.style }) : null;
      }
      n[4] = y, n[5] = a, n[6] = f, n[7] = i, n[8] = g, n[9] = c, n[10] = h, n[11] = l, n[12] = o, n[13] = _, n[14] = s, n[15] = r, n[16] = p, n[17] = S, n[18] = k, n[19] = C, n[20] = T, n[21] = I, n[22] = A, n[23] = P, n[24] = M, n[25] = O, n[26] = N, n[27] = U;
    } else S = n[17], k = n[18], C = n[19], T = n[20], I = n[21], A = n[22], P = n[23], M = n[24], O = n[25], N = n[26], U = n[27];
    if (C !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return C;
    let j;
    n[52] !== T || n[53] !== I || n[54] !== A || n[55] !== P ? (j = j7("div", { className: T, style: I, children: [A, P] }), n[52] = T, n[53] = I, n[54] = A, n[55] = P, n[56] = j) : j = n[56];
    let $;
    return n[57] !== S || n[58] !== k || n[59] !== j || n[60] !== M || n[61] !== O || n[62] !== N || n[63] !== U ? ($ = j7("div", { className: M, "data-type": O, style: N, ...U, children: [S, k, j] }), n[57] = S, n[58] = k, n[59] = j, n[60] = M, n[61] = O, n[62] = N, n[63] = U, n[64] = $) : $ = n[64], $;
  }), eFh = OUt(function(e) {
    const n = tae(29), { pair: i, leftTokens: r, rightTokens: s, showLineNumbers: o, coloredLineNumbers: a, showAccentStrip: l, wrapLayout: c } = e;
    let u;
    n[0] !== i.left?.content || n[1] !== i.right?.content || n[2] !== c ? (u = c ? c.rowCountForPair(i.left?.content, i.right?.content) : void 0, n[0] = i.left?.content, n[1] = i.right?.content, n[2] = c, n[3] = u) : u = n[3];
    const d = u;
    let h;
    n[4] !== i.left || n[5] !== c ? (h = i.left ? c?.infoFor(i.left.content) : null, n[4] = i.left, n[5] = c, n[6] = h) : h = n[6];
    let p;
    n[7] !== a || n[8] !== r || n[9] !== i.left || n[10] !== d || n[11] !== l || n[12] !== o || n[13] !== h ? (p = H1(uOr, { line: i.left, tokens: r, side: "left", showLineNumbers: o, coloredLineNumbers: a, showAccentStrip: l, wrapInfo: h, pairWrapRowCount: d }), n[7] = a, n[8] = r, n[9] = i.left, n[10] = d, n[11] = l, n[12] = o, n[13] = h, n[14] = p) : p = n[14];
    let g;
    n[15] !== i.right || n[16] !== c ? (g = i.right ? c?.infoFor(i.right.content) : null, n[15] = i.right, n[16] = c, n[17] = g) : g = n[17];
    let f;
    n[18] !== a || n[19] !== i.right || n[20] !== d || n[21] !== s || n[22] !== l || n[23] !== o || n[24] !== g ? (f = H1(uOr, { line: i.right, tokens: s, side: "right", showLineNumbers: o, coloredLineNumbers: a, showAccentStrip: l, wrapInfo: g, pairWrapRowCount: d }), n[18] = a, n[19] = i.right, n[20] = d, n[21] = s, n[22] = l, n[23] = o, n[24] = g, n[25] = f) : f = n[25];
    let _;
    return n[26] !== p || n[27] !== f ? (_ = j7("div", { className: "ui-default-diff__split-row", children: [p, f] }), n[26] = p, n[27] = f, n[28] = _) : _ = n[28], _;
  }), dOr = [{ content: "", col: 0 }], tFh = OUt(function(e) {
    const n = tae(35), { entry: i, visibleLineTokens: r, precomputedLineTokens: s, asyncLineTokens: o, showLineNumbers: a, coloredLineNumbers: l, showAccentStrip: c, onExpandUp: u, onExpandDown: d, onExpandAll: h, wrapLayout: p } = e, g = i.item;
    if (M0(g)) {
      let C;
      n[0] !== i.key || n[1] !== h ? (C = h ? () => h(i.key) : void 0, n[0] = i.key, n[1] = h, n[2] = C) : C = n[2];
      const T = g.unloadedEdge !== void 0;
      let I;
      n[3] !== i.key || n[4] !== g.unloadedEdge || n[5] !== d ? (I = d && g.unloadedEdge !== "after" ? () => d(i.key) : void 0, n[3] = i.key, n[4] = g.unloadedEdge, n[5] = d, n[6] = I) : I = n[6];
      let A;
      n[7] !== i.key || n[8] !== g.unloadedEdge || n[9] !== u ? (A = u && g.unloadedEdge !== "before" ? () => u(i.key) : void 0, n[7] = i.key, n[8] = g.unloadedEdge, n[9] = u, n[10] = A) : A = n[10];
      let P;
      return n[11] !== g.lineCount || n[12] !== C || n[13] !== T || n[14] !== I || n[15] !== A ? (P = H1(cOr, { lineCount: g.lineCount, onExpandAll: C, unloaded: T, onExpandDown: I, onExpandUp: A }), n[11] = g.lineCount, n[12] = C, n[13] = T, n[14] = I, n[15] = A, n[16] = P) : P = n[16], P;
    }
    const f = g;
    let _;
    n[17] !== o || n[18] !== f.left || n[19] !== s || n[20] !== r ? (_ = f.left ? cpa(f.left, "left", r, o, s) : dOr, n[17] = o, n[18] = f.left, n[19] = s, n[20] = r, n[21] = _) : _ = n[21];
    const b = _;
    let y;
    n[22] !== o || n[23] !== f.right || n[24] !== s || n[25] !== r ? (y = f.right ? cpa(f.right, "right", r, o, s) : dOr, n[22] = o, n[23] = f.right, n[24] = s, n[25] = r, n[26] = y) : y = n[26];
    const S = y;
    let k;
    return n[27] !== l || n[28] !== b || n[29] !== f || n[30] !== S || n[31] !== c || n[32] !== a || n[33] !== p ? (k = H1(eFh, { pair: f, leftTokens: b, rightTokens: S, showLineNumbers: a, coloredLineNumbers: l, showAccentStrip: c, wrapLayout: p }), n[27] = l, n[28] = b, n[29] = f, n[30] = S, n[31] = c, n[32] = a, n[33] = p, n[34] = k) : k = n[34], k;
  }), Uhi = OUt(function(e) {
    const n = tae(61), { entry: i, side: r, visibleLineTokens: s, precomputedLineTokens: o, asyncLineTokens: a, showLineNumbers: l, coloredLineNumbers: c, showAccentStrip: u, onExpandUp: d, onExpandDown: h, onExpandAll: p, splitPaneInteraction: g, wrapLayout: f } = e, [_, b] = FUt(false), y = i.item;
    if (M0(y)) {
      let Q;
      n[0] !== i.key || n[1] !== p ? (Q = p ? () => p(i.key) : void 0, n[0] = i.key, n[1] = p, n[2] = Q) : Q = n[2];
      const te = y.unloadedEdge !== void 0;
      let ee;
      n[3] !== i.key || n[4] !== y.unloadedEdge || n[5] !== h ? (ee = h && y.unloadedEdge !== "after" ? () => h(i.key) : void 0, n[3] = i.key, n[4] = y.unloadedEdge, n[5] = h, n[6] = ee) : ee = n[6];
      let re;
      n[7] !== i.key || n[8] !== y.unloadedEdge || n[9] !== d ? (re = d && y.unloadedEdge !== "before" ? () => d(i.key) : void 0, n[7] = i.key, n[8] = y.unloadedEdge, n[9] = d, n[10] = re) : re = n[10];
      let ie;
      return n[11] !== y.lineCount || n[12] !== Q || n[13] !== te || n[14] !== ee || n[15] !== re ? (ie = H1(cOr, { lineCount: y.lineCount, onExpandAll: Q, unloaded: te, onExpandDown: ee, onExpandUp: re }), n[11] = y.lineCount, n[12] = Q, n[13] = te, n[14] = ee, n[15] = re, n[16] = ie) : ie = n[16], ie;
    }
    const S = y, k = r === "left" ? S.left : S.right;
    let C;
    n[17] !== a || n[18] !== k || n[19] !== o || n[20] !== r || n[21] !== s ? (C = k ? cpa(k, r, s, a, o) : dOr, n[17] = a, n[18] = k, n[19] = o, n[20] = r, n[21] = s, n[22] = C) : C = n[22];
    const T = C;
    let I;
    n[23] !== i || n[24] !== r || n[25] !== g ? (I = g?.(i, r), n[23] = i, n[24] = r, n[25] = g, n[26] = I) : I = n[26];
    const A = I, P = i.rowIndex, M = A?.rangeSelected, O = A?.interactionGutter, N = A?.selectionEndMarker;
    let U;
    n[27] !== k || n[28] !== f ? (U = k ? f?.infoFor(k.content) : null, n[27] = k, n[28] = f, n[29] = U) : U = n[29];
    let j;
    n[30] !== S.left?.content || n[31] !== S.right?.content || n[32] !== f ? (j = f ? f.rowCountForPair(S.left?.content, S.right?.content) : void 0, n[30] = S.left?.content, n[31] = S.right?.content, n[32] = f, n[33] = j) : j = n[33];
    let $;
    n[34] !== c || n[35] !== _ || n[36] !== k || n[37] !== u || n[38] !== l || n[39] !== r || n[40] !== M || n[41] !== O || n[42] !== N || n[43] !== U || n[44] !== j || n[45] !== T ? ($ = H1(uOr, { line: k, tokens: T, side: r, showLineNumbers: l, coloredLineNumbers: c, showAccentStrip: u, rangeSelected: M, interactionGutter: O, hovered: _, selectionEndMarker: N, wrapInfo: U, pairWrapRowCount: j }), n[34] = c, n[35] = _, n[36] = k, n[37] = u, n[38] = l, n[39] = r, n[40] = M, n[41] = O, n[42] = N, n[43] = U, n[44] = j, n[45] = T, n[46] = $) : $ = n[46];
    const H = $;
    if (!A) return H;
    let G, q;
    n[47] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (G = gn(o_S()), q = ri("ui-default-diff__interactive-row", G.className), n[47] = G, n[48] = q) : (G = n[47], q = n[48]);
    let K;
    n[49] !== P ? (K = P !== void 0 && P >= 0 ? { [tOr]: String(P) } : {}, n[49] = P, n[50] = K) : K = n[50];
    let V, Y;
    n[51] !== A ? (V = () => {
      b(true), A.onLineMouseEnter();
    }, Y = (Q) => {
      b(false), A.onLineMouseLeave(Q);
    }, n[51] = A, n[52] = V, n[53] = Y) : (V = n[52], Y = n[53]);
    let J;
    return n[54] !== H || n[55] !== G.style || n[56] !== K || n[57] !== V || n[58] !== Y || n[59] !== q ? (J = H1("fieldset", { className: q, "data-ui-default-diff-interactive-row": true, ...K, onMouseEnter: V, onMouseLeave: Y, style: G.style, children: H }), n[54] = H, n[55] = G.style, n[56] = K, n[57] = V, n[58] = Y, n[59] = q, n[60] = J) : J = n[60], J;
  }), jhi = OUt(function(e) {
    const n = tae(48), { entry: i, visibleLineTokens: r, precomputedLineTokens: s, asyncLineTokens: o, showLineNumbers: a, showPlusMinus: l, coloredLineNumbers: c, showAccentStrip: u, onExpandUp: d, onExpandDown: h, onExpandAll: p, lineInteraction: g, wrapLayout: f } = e, _ = i.item;
    if (M0(_)) {
      let P;
      n[0] !== i.key || n[1] !== p ? (P = p ? () => p(i.key) : void 0, n[0] = i.key, n[1] = p, n[2] = P) : P = n[2];
      const M = _.unloadedEdge !== void 0;
      let O;
      n[3] !== i.key || n[4] !== _.unloadedEdge || n[5] !== h ? (O = h && _.unloadedEdge !== "after" ? () => h(i.key) : void 0, n[3] = i.key, n[4] = _.unloadedEdge, n[5] = h, n[6] = O) : O = n[6];
      let N;
      n[7] !== i.key || n[8] !== _.unloadedEdge || n[9] !== d ? (N = d && _.unloadedEdge !== "before" ? () => d(i.key) : void 0, n[7] = i.key, n[8] = _.unloadedEdge, n[9] = d, n[10] = N) : N = n[10];
      let U;
      return n[11] !== _.lineCount || n[12] !== P || n[13] !== M || n[14] !== O || n[15] !== N ? (U = H1(cOr, { lineCount: _.lineCount, onExpandAll: P, unloaded: M, onExpandDown: O, onExpandUp: N }), n[11] = _.lineCount, n[12] = P, n[13] = M, n[14] = O, n[15] = N, n[16] = U) : U = n[16], U;
    }
    const b = _, y = b.originalTokenLineNumber ?? b.originalLineNumber, S = b.modifiedTokenLineNumber ?? b.modifiedLineNumber, k = b.type === "removed" ? `orig:${y}` : `mod:${S}`;
    let C;
    if (r?.has(k)) {
      let P;
      n[17] !== k || n[18] !== r ? (P = r.get(k), n[17] = k, n[18] = r, n[19] = P) : P = n[19], C = P;
    } else if (s?.has(k)) {
      let P;
      n[20] !== s || n[21] !== k ? (P = s.get(k), n[20] = s, n[21] = k, n[22] = P) : P = n[22], C = P;
    } else if (o?.has(k)) {
      let P;
      n[23] !== o || n[24] !== k ? (P = o.get(k), n[23] = o, n[24] = k, n[25] = P) : P = n[25], C = P;
    } else {
      let P;
      n[26] !== b.content ? (P = [{ content: b.content, col: 0 }], n[26] = b.content, n[27] = P) : P = n[27], C = P;
    }
    let T;
    n[28] !== i || n[29] !== g ? (T = g?.(i), n[28] = i, n[29] = g, n[30] = T) : T = n[30];
    let I;
    n[31] !== b.content || n[32] !== f ? (I = f?.infoFor(b.content), n[31] = b.content, n[32] = f, n[33] = I) : I = n[33];
    let A;
    return n[34] !== c || n[35] !== i.rowIndex || n[36] !== b.content.length || n[37] !== b.inlineChanges || n[38] !== b.modifiedLineNumber || n[39] !== b.originalLineNumber || n[40] !== b.type || n[41] !== C || n[42] !== u || n[43] !== a || n[44] !== l || n[45] !== T || n[46] !== I ? (A = H1(J5h, { tokens: C, type: b.type, originalLineNumber: b.originalLineNumber, modifiedLineNumber: b.modifiedLineNumber, inlineChanges: b.inlineChanges, contentLength: b.content.length, showLineNumbers: a, showPlusMinus: l, coloredLineNumbers: c, showAccentStrip: u, interaction: T, rowIndex: i.rowIndex, wrapInfo: I }), n[34] = c, n[35] = i.rowIndex, n[36] = b.content.length, n[37] = b.inlineChanges, n[38] = b.modifiedLineNumber, n[39] = b.originalLineNumber, n[40] = b.type, n[41] = C, n[42] = u, n[43] = a, n[44] = l, n[45] = T, n[46] = I, n[47] = A) : A = n[47], A;
  });
} });
import { jsx as Ay, Fragment as nFh, jsxs as hOr } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as $7 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useSyncExternalStore as iFh, lazy as rFh, useContext as DFe, Suspense as ppa, useState as pOr, useEffect as Hhi, useRef as Whi, createElement as sFh, useLayoutEffect as mpa, use as dbS, memo as hbS, useMemo as Xit, useDeferredValue as pbS, useCallback as mbS } from "./react-runtime/react/esm-index-production.js";
function gbS(t, e) {
  return Rhe(t, e === "href" ? "href" : "resource") ?? "#";
}
function oFh(t) {
  return iFh(hFh, t ? pFh : gpa, gpa);
}
function fbS(...t) {
  const e = /* @__PURE__ */ new Map();
  for (const n of t) for (const i of n) e.has(i.id) || e.set(i.id, i);
  return Array.from(e.values());
}
function aFh(t, e) {
  const n = t?.position;
  if (!n) return false;
  const i = e.replace(/\n+$/, "").split(`
`).length;
  return n.end.line - n.start.line > i;
}
function nae(t) {
  return DFe(R_e).generatedChildStyles?.[t];
}
function lFh(t) {
  return t === void 0 ? "" : typeof t.value == "string" ? t.value : (t.children ?? []).map(lFh).join("");
}
function vbS(t) {
  const e = $7(9), { display: n, tex: i } = t, r = n && fpa.display;
  let s;
  e[0] !== n || e[1] !== r ? (s = ar({ rootClass: "ui-markdown__math-placeholder", stylexStyles: [fpa.base, r], className: n ? "ui-markdown__math-placeholder--display" : void 0 }), e[0] = n, e[1] = r, e[2] = s) : s = e[2];
  const o = s, a = o.className, l = o.style;
  let c;
  e[3] !== i ? (c = i.trim(), e[3] = i, e[4] = c) : c = e[4];
  let u;
  return e[5] !== o.className || e[6] !== o.style || e[7] !== c ? (u = Ay("span", { className: a, style: l, dir: "ltr", children: c }), e[5] = o.className, e[6] = o.style, e[7] = c, e[8] = u) : u = e[8], u;
}
function _bS(t) {
  const e = $7(65), { children: n, className: i, node: r } = t, { allowMath: s, allowMermaid: o, isStreaming: a, onCodeBlockClick: l, onInlineCodeClick: c, onInlineCodeClickResolved: u, decorateInlineCode: d, resolveInlineCodeTarget: h, onInlineCodeContextMenu: p, onCodeBlockHeaderContextMenu: g, renderCodeBlock: f, copyText: _, codeBlockWordWrap: b, lineTokenizer: y, onRichContentRenderStateChange: S } = DFe(R_e), k = r?.position != null && r.position.start.line !== r.position.end.line, C = i?.startsWith("language-") || k, T = i === "language-mermaid";
  let I;
  if (e[0] !== s || e[1] !== n || e[2] !== i || e[3] !== r) {
    I = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    e: {
      const P = i?.split(/\s+/) ?? [];
      if (s && P.includes("language-math")) {
        let M;
        e[5] !== n || e[6] !== r ? (M = typeof n == "string" ? n : lFh(r), e[5] = n, e[6] = r, e[7] = M) : M = e[7], I = Ay(vbS, { display: P.includes("math-display"), tex: M });
        break e;
      }
    }
    e[0] = s, e[1] = n, e[2] = i, e[3] = r, e[4] = I;
  } else I = e[4];
  if (I !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return I;
  if (T && o && typeof n == "string") {
    let P, M;
    e[8] !== n || e[9] !== a || e[10] !== r ? (P = aFh(r, n), M = jkh(n, a, P), e[8] = n, e[9] = a, e[10] = r, e[11] = P, e[12] = M) : (P = e[11], M = e[12]);
    const O = M, N = a && !P;
    let U;
    e[13] !== b || e[14] !== _ || e[15] !== N || e[16] !== O ? (U = Ay(S1t, { className: "language-mermaid", copyText: _, showIndentGuides: false, streaming: N, wordWrap: b, children: O }), e[13] = b, e[14] = _, e[15] = N, e[16] = O, e[17] = U) : U = e[17];
    const j = b ? "contain" : "scroll";
    let $;
    e[18] !== _ || e[19] !== N || e[20] !== S || e[21] !== j || e[22] !== O ? ($ = Ay(mFh, { content: O, isStreaming: N, copyText: _, fit: j, onRenderStateChange: S }), e[18] = _, e[19] = N, e[20] = S, e[21] = j, e[22] = O, e[23] = $) : $ = e[23];
    let H;
    return e[24] !== U || e[25] !== $ ? (H = Ay(ppa, { fallback: U, children: $ }), e[24] = U, e[25] = $, e[26] = H) : H = e[26], H;
  }
  if (C && typeof n == "string") {
    let P, M, O, N;
    if (e[27] !== n || e[28] !== i || e[29] !== b || e[30] !== _ || e[31] !== a || e[32] !== y || e[33] !== r || e[34] !== g || e[35] !== f) {
      O = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
      e: {
        const q = aFh(r, n);
        N = jkh(n, a, q);
        const K = i ? i.replace("language-", "") : "";
        if (M = bca(K), M.language === "diff") {
          const V = Dkh(N), Y = Lkh(N);
          O = Ay(ybS, { rawDiffText: N, copyText: _, children: Ay(ppa, { fallback: Ay("code", { className: "language-diff", children: N }), children: Ay(gFh, { original: V.original, modified: V.modified, language: Y, lineTokenizer: y, contextLines: 3 }) }) });
          break e;
        }
        if (P = M.filePath && g ? (V) => {
          V.preventDefault(), V.stopPropagation(), g(V, { filePath: M.filePath, startLine: M.startLine, endLine: M.endLine });
        } : void 0, f) {
          const V = { language: M.language || "text", children: N, filePath: M.filePath ?? void 0, startLine: M.startLine, endLine: M.endLine, copyText: _, onHeaderContextMenu: P, wordWrap: b, streaming: a };
          O = Ay(nFh, { children: f(V) });
          break e;
        }
      }
      e[27] = n, e[28] = i, e[29] = b, e[30] = _, e[31] = a, e[32] = y, e[33] = r, e[34] = g, e[35] = f, e[36] = P, e[37] = M, e[38] = O, e[39] = N;
    } else P = e[36], M = e[37], O = e[38], N = e[39];
    if (O !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return O;
    let U;
    e[40] !== l || e[41] !== M.endLine || e[42] !== M.filePath || e[43] !== M.startLine ? (U = M.filePath && l ? () => l({ filePath: M.filePath, startLine: M.startLine, endLine: M.endLine }) : void 0, e[40] = l, e[41] = M.endLine, e[42] = M.filePath, e[43] = M.startLine, e[44] = U) : U = e[44];
    const j = U, $ = `language-${M.language || "text"}`, H = M.filePath ?? void 0;
    let G;
    return e[45] !== b || e[46] !== _ || e[47] !== j || e[48] !== P || e[49] !== a || e[50] !== M.endLine || e[51] !== M.startLine || e[52] !== $ || e[53] !== H || e[54] !== N ? (G = Ay(S1t, { className: $, filePath: H, startLine: M.startLine, endLine: M.endLine, onHeaderClick: j, onHeaderContextMenu: P, copyText: _, showIndentGuides: false, streaming: a, wordWrap: b, children: N }), e[45] = b, e[46] = _, e[47] = j, e[48] = P, e[49] = a, e[50] = M.endLine, e[51] = M.startLine, e[52] = $, e[53] = H, e[54] = N, e[55] = G) : G = e[55], G;
  }
  let A;
  return e[56] !== n || e[57] !== i || e[58] !== d || e[59] !== a || e[60] !== c || e[61] !== u || e[62] !== p || e[63] !== h ? (A = Ay(bbS, { className: i, isStreaming: a, decorateInlineCode: d, onInlineCodeClick: c, onInlineCodeClickResolved: u, onInlineCodeContextMenu: p, resolveInlineCodeTarget: h, children: n }), e[56] = n, e[57] = i, e[58] = d, e[59] = a, e[60] = c, e[61] = u, e[62] = p, e[63] = h, e[64] = A) : A = e[64], A;
}
function bbS(t) {
  const e = $7(57), { className: n, children: i, isStreaming: r, decorateInlineCode: s, onInlineCodeClick: o, onInlineCodeClickResolved: a, onInlineCodeContextMenu: l, resolveInlineCodeTarget: c } = t, u = typeof i == "string" ? i : "", [d, h] = pOr(), p = d?.target;
  let g;
  e[0] !== s || e[1] !== u ? (g = s?.(u), e[0] = s, e[1] = u, e[2] = g) : g = e[2];
  const f = g;
  let _;
  e[3] !== d || e[4] !== f ? (_ = d?.decoration !== void 0 ? { ...f, ...d.decoration } : f, e[3] = d, e[4] = f, e[5] = _) : _ = e[5];
  const b = _, y = b?.displayText ?? u;
  let S;
  e[6] !== r || e[7] !== c || e[8] !== f?.clickable || e[9] !== u ? (S = !!c && !r && !f?.clickable && uNr(u), e[6] = r, e[7] = c, e[8] = f?.clickable, e[9] = u, e[10] = S) : S = e[10];
  const k = S;
  let C;
  e[11] !== y ? (C = BcS(y), e[11] = y, e[12] = C) : C = e[12];
  const T = C, I = !!(b?.clickable && o), A = !!(p && a), P = I || A;
  let M;
  e[13] !== A || e[14] !== I || e[15] !== u ? (M = uNr(u) || A || I, e[13] = A, e[14] = I, e[15] = u, e[16] = M) : M = e[16];
  const O = M, N = nae("code");
  let U;
  e[17] !== n || e[18] !== N || e[19] !== P || e[20] !== u ? (U = ar({ rootClass: "ui-markdown__inline-code", stylexStyles: [B2h(P), N], className: ri(n, P && "md-clickable-code", uNr(u) && "md-inline-path-filename-like", FcS(u) && "md-inline-variable-like") }), e[17] = n, e[18] = N, e[19] = P, e[20] = u, e[21] = U) : U = e[21];
  const j = U;
  let $;
  e[22] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? ($ = ar({ rootClass: "ui-markdown__inline-path-prefix", stylexStyles: nuS(), className: "md-inline-path-prefix" }), e[22] = $) : $ = e[22];
  const H = $;
  let G;
  e[23] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (G = ar({ rootClass: "ui-markdown__inline-path-filename", stylexStyles: iuS(), className: "md-inline-path-filename" }), e[23] = G) : G = e[23];
  const q = G;
  let K, V;
  e[24] !== c || e[25] !== k || e[26] !== u ? (V = () => {
    if (!k || !c) {
      h(void 0);
      return;
    }
    h(void 0);
    const de = new AbortController();
    return c(u, de.signal).then((he) => {
      if (de.signal.aborted) return;
      const ge = typeof he == "string" ? { target: he } : he, pe = ge?.target.trim();
      h(pe ? { target: pe, decoration: ge?.decoration } : void 0);
    }).catch(() => {
      de.signal.aborted || h(void 0);
    }), () => {
      de.abort();
    };
  }, K = [c, k, u], e[24] = c, e[25] = k, e[26] = u, e[27] = K, e[28] = V) : (K = e[27], V = e[28]), Hhi(V, K);
  let Y;
  e[29] !== I || e[30] !== o || e[31] !== a || e[32] !== p || e[33] !== u ? (Y = () => {
    if (p && a) {
      a(p);
      return;
    }
    I && o && o(u);
  }, e[29] = I, e[30] = o, e[31] = a, e[32] = p, e[33] = u, e[34] = Y) : Y = e[34];
  const J = Y;
  let Q;
  e[35] !== O || e[36] !== l || e[37] !== p || e[38] !== u ? (Q = (de) => {
    !l || !O || (de.preventDefault(), de.stopPropagation(), l(de, p ?? u));
  }, e[35] = O, e[36] = l, e[37] = p, e[38] = u, e[39] = Q) : Q = e[39];
  const te = Q, ee = P ? "button" : void 0, re = P ? 0 : void 0, ie = P ? J : void 0, oe = O ? te : void 0;
  let se;
  e[40] !== J || e[41] !== P ? (se = P ? (de) => {
    (de.key === "Enter" || de.key === " ") && (de.preventDefault(), J());
  } : void 0, e[40] = J, e[41] = P, e[42] = se) : se = e[42];
  const le = b?.icon;
  let ce;
  e[43] !== i || e[44] !== b || e[45] !== T ? (ce = T ? hOr(nFh, { children: [T.prefix.length > 0 && Ay("span", { className: H.className, style: H.style, children: T.prefix }), T.filename.length > 0 && Ay("span", { className: q.className, style: q.style, children: T.filename })] }) : b?.displayText !== void 0 ? b.displayText : i, e[43] = i, e[44] = b, e[45] = T, e[46] = ce) : ce = e[46];
  let ae;
  return e[47] !== j.className || e[48] !== j.style || e[49] !== ee || e[50] !== re || e[51] !== ie || e[52] !== oe || e[53] !== se || e[54] !== le || e[55] !== ce ? (ae = hOr("code", { className: j.className, style: j.style, role: ee, tabIndex: re, onClick: ie, onContextMenu: oe, onKeyDown: se, children: [le, ce] }), e[47] = j.className, e[48] = j.style, e[49] = ee, e[50] = re, e[51] = ie, e[52] = oe, e[53] = se, e[54] = le, e[55] = ce, e[56] = ae) : ae = e[56], ae;
}
function ybS(t) {
  const e = $7(21), { rawDiffText: n, copyText: i, children: r } = t, [s, o] = pOr(false), a = Whi(void 0);
  let l, c;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = () => () => clearTimeout(a.current), c = [], e[0] = l, e[1] = c) : (l = e[0], c = e[1]), Hhi(l, c);
  let u;
  e[2] !== i || e[3] !== n ? (u = () => {
    clearTimeout(a.current), o(true), i?.(n), a.current = setTimeout(() => o(false), 2e3);
  }, e[2] = i, e[3] = n, e[4] = u) : u = e[4];
  const d = u;
  let h;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = ar({ rootClass: "ui-code-block ui-code-block--diff", stylexStyles: hca() }), e[5] = h) : h = e[5];
  const p = h;
  let g;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = ar({ rootClass: "ui-code-block-content", stylexStyles: pca() }), e[6] = g) : g = e[6];
  const f = g;
  let _;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = ar({ rootClass: "ui-code-block-copy-overlay", stylexStyles: mca() }), e[7] = _) : _ = e[7];
  const b = _;
  let y;
  e[8] !== s ? (y = ar({ rootClass: "ui-code-block-copy", stylexStyles: gca(s) }), e[8] = s, e[9] = y) : y = e[9];
  const S = y, k = p.className, C = p.style, T = f.className, I = f.style;
  let A;
  e[10] !== s || e[11] !== S || e[12] !== i || e[13] !== d ? (A = i && Ay("div", { className: b.className, style: b.style, children: Ay("div", { className: S.className, "data-copied": s || void 0, style: S.style, children: Ay(YRe, { "aria-label": s ? "Copied" : "Copy code", tone: s ? "success" : void 0, icon: "copy", onPressedChange: (N) => {
    N && d();
  }, pressed: s, pressedIcon: "check", rootStyle: iNr(), size: "sm", variant: "outline" }) }) }), e[10] = s, e[11] = S, e[12] = i, e[13] = d, e[14] = A) : A = e[14];
  let P;
  e[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = d2h(), e[15] = P) : P = e[15];
  let M;
  e[16] !== r ? (M = Ay(xg, { contentStyle: P, direction: "horizontal", scrollbarVisibility: "hover", children: r }), e[16] = r, e[17] = M) : M = e[17];
  let O;
  return e[18] !== A || e[19] !== M ? (O = Ay("div", { className: k, "data-ui-code-block-diff": "", style: C, children: hOr("div", { className: T, style: I, children: [A, M] }) }), e[18] = A, e[19] = M, e[20] = O) : O = e[20], O;
}
function uSn(t) {
  const { children: e, className: n, level: i, node: r, style: s, ...o } = t, { normalized: a, normalizedHeadingSpacing: l, size: c } = DFe(R_e), u = fFh[i], d = nae(u), h = ar({ rootClass: "ui-markdown__heading", stylexStyles: [$cS(i, a, l, c), d], className: n, style: s });
  return sFh(u, { ...o, className: h.className, style: h.style }, e);
}
function mOr(t) {
  const e = $7(19);
  let n, i, r, s;
  if (e[0] !== t) {
    const { children: f, className: _, node: b, style: y, ...S } = t;
    n = f, i = _, s = y, r = S, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s;
  } else n = e[1], i = e[2], r = e[3], s = e[4];
  const { normalized: o, normalizedHeadingSpacing: a, size: l, singleLine: c } = DFe(R_e), u = DFe(Nca), d = nae("p");
  let h;
  e[5] !== i || e[6] !== u || e[7] !== d || e[8] !== o || e[9] !== a || e[10] !== c || e[11] !== l || e[12] !== s ? (h = ar({ rootClass: "ui-markdown__paragraph", stylexStyles: [HcS({ size: l, flush: u, singleLine: c, normalized: o, normalizedHeadingSpacing: a }), d], className: i, style: s }), e[5] = i, e[6] = u, e[7] = d, e[8] = o, e[9] = a, e[10] = c, e[11] = l, e[12] = s, e[13] = h) : h = e[13];
  const p = h;
  let g;
  return e[14] !== p.className || e[15] !== p.style || e[16] !== n || e[17] !== r ? (g = Ay("p", { ...r, className: p.className, style: p.style, children: n }), e[14] = p.className, e[15] = p.style, e[16] = n, e[17] = r, e[18] = g) : g = e[18], g;
}
function cFh(t) {
  const { children: e, className: n, node: i, ordered: r, style: s, ...o } = t, { normalized: a } = DFe(R_e), l = n?.split(/\s+/).includes("contains-task-list") ?? false, c = r ? "ol" : "ul", u = nae(c), d = ar({ rootClass: "ui-markdown__list", stylexStyles: [WcS({ normalized: a, task: l }), u], className: n, style: s });
  return sFh(c, { ...o, className: d.className, style: d.style }, e);
}
function SbS(t) {
  const e = $7(15);
  let n, i, r, s;
  if (e[0] !== t) {
    const { children: d, className: h, node: p, style: g, ...f } = t;
    n = d, i = h, s = g, r = f, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s;
  } else n = e[1], i = e[2], r = e[3], s = e[4];
  const { normalized: o } = DFe(R_e), a = nae("blockquote");
  let l;
  e[5] !== i || e[6] !== a || e[7] !== o || e[8] !== s ? (l = ar({ rootClass: "ui-markdown__blockquote", stylexStyles: [KcS(o), a], className: i, style: s }), e[5] = i, e[6] = a, e[7] = o, e[8] = s, e[9] = l) : l = e[9];
  const c = l;
  let u;
  return e[10] !== c.className || e[11] !== c.style || e[12] !== n || e[13] !== r ? (u = Ay(Nca.Provider, { value: true, children: Ay("blockquote", { ...r, className: c.className, style: c.style, children: n }) }), e[10] = c.className, e[11] = c.style, e[12] = n, e[13] = r, e[14] = u) : u = e[14], u;
}
function kbS(t) {
  const e = $7(12);
  let n, i, r;
  if (e[0] !== t) {
    const { className: c, node: u, style: d, ...h } = t;
    n = c, r = d, i = h, e[0] = t, e[1] = n, e[2] = i, e[3] = r;
  } else n = e[1], i = e[2], r = e[3];
  const s = nae("hr");
  let o;
  e[4] !== n || e[5] !== s || e[6] !== r ? (o = ar({ rootClass: "ui-markdown__hr", stylexStyles: [YcS(), s], className: n, style: r }), e[4] = n, e[5] = s, e[6] = r, e[7] = o) : o = e[7];
  const a = o;
  let l;
  return e[8] !== a.className || e[9] !== a.style || e[10] !== i ? (l = Ay("hr", { ...i, className: a.className, style: a.style }), e[8] = a.className, e[9] = a.style, e[10] = i, e[11] = l) : l = e[11], l;
}
function wbS(t) {
  const e = $7(14);
  let n, i, r, s;
  if (e[0] !== t) {
    const { children: u, className: d, node: h, style: p, ...g } = t;
    n = u, i = d, s = p, r = g, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s;
  } else n = e[1], i = e[2], r = e[3], s = e[4];
  const o = nae("del");
  let a;
  e[5] !== i || e[6] !== o || e[7] !== s ? (a = ar({ rootClass: "ui-markdown__del", stylexStyles: [XcS(), o], className: i, style: s }), e[5] = i, e[6] = o, e[7] = s, e[8] = a) : a = e[8];
  const l = a;
  let c;
  return e[9] !== l.className || e[10] !== l.style || e[11] !== n || e[12] !== r ? (c = Ay("del", { ...r, className: l.className, style: l.style, children: n }), e[9] = l.className, e[10] = l.style, e[11] = n, e[12] = r, e[13] = c) : c = e[13], c;
}
function uFh(t) {
  if (!t) return t;
  const e = t.split(/\s+/).filter((n) => n.length > 0 && n !== "text-sm").join(" ");
  return e.length > 0 ? e : void 0;
}
function CbS(t) {
  const e = $7(14);
  let n, i, r, s;
  if (e[0] !== t) {
    const { children: u, className: d, node: h, style: p, ...g } = t;
    n = u, i = d, s = p, r = g, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s;
  } else n = e[1], i = e[2], r = e[3], s = e[4];
  const o = nae("sup");
  let a;
  e[5] !== i || e[6] !== o || e[7] !== s ? (a = ar({ rootClass: "ui-markdown__sup", stylexStyles: [ZcS(), o], className: uFh(i), style: s }), e[5] = i, e[6] = o, e[7] = s, e[8] = a) : a = e[8];
  const l = a;
  let c;
  return e[9] !== l.className || e[10] !== l.style || e[11] !== n || e[12] !== r ? (c = Ay("sup", { ...r, className: l.className, style: l.style, children: n }), e[9] = l.className, e[10] = l.style, e[11] = n, e[12] = r, e[13] = c) : c = e[13], c;
}
function TbS(t) {
  const e = $7(14);
  let n, i, r, s;
  if (e[0] !== t) {
    const { children: u, className: d, node: h, style: p, ...g } = t;
    n = u, i = d, s = p, r = g, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s;
  } else n = e[1], i = e[2], r = e[3], s = e[4];
  const o = nae("sub");
  let a;
  e[5] !== i || e[6] !== o || e[7] !== s ? (a = ar({ rootClass: "ui-markdown__sub", stylexStyles: [QcS(), o], className: uFh(i), style: s }), e[5] = i, e[6] = o, e[7] = s, e[8] = a) : a = e[8];
  const l = a;
  let c;
  return e[9] !== l.className || e[10] !== l.style || e[11] !== n || e[12] !== r ? (c = Ay("sub", { ...r, className: l.className, style: l.style, children: n }), e[9] = l.className, e[10] = l.style, e[11] = n, e[12] = r, e[13] = c) : c = e[13], c;
}
function EbS(t) {
  const e = $7(15), { type: n, checked: i, disabled: r, ...s } = t, { size: o, taskMarkerIconColor: a } = DFe(R_e);
  if (n === "checkbox") {
    const c = !!i, u = ar({ rootClass: "ui-markdown__task-marker", stylexStyles: qcS(o), className: s.className, style: s.style });
    let d;
    e[0] !== c ? (d = w2h(c), e[0] = c, e[1] = d) : d = e[1];
    const h = a ?? "tertiary", p = c ? "check-circle" : "circle";
    let g;
    e[2] !== h || e[3] !== p ? (g = Ay(zt, { "aria-hidden": true, color: h, name: p, size: "base" }), e[2] = h, e[3] = p, e[4] = g) : g = e[4];
    let f;
    return e[5] !== u.className || e[6] !== u.style || e[7] !== d || e[8] !== g ? (f = Ay("span", { "aria-label": d, className: u.className, role: "img", style: u.style, children: g }), e[5] = u.className, e[6] = u.style, e[7] = d, e[8] = g, e[9] = f) : f = e[9], f;
  }
  let l;
  return e[10] !== i || e[11] !== r || e[12] !== s || e[13] !== n ? (l = Ay("input", { type: n, checked: i, disabled: r, ...s }), e[10] = i, e[11] = r, e[12] = s, e[13] = n, e[14] = l) : l = e[14], l;
}
function IbS(t) {
  const e = $7(14);
  let n, i, r, s;
  if (e[0] !== t) {
    const { children: h, className: p, node: g, style: f, ..._ } = t;
    n = h, i = p, s = f, r = _, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s;
  } else n = e[1], i = e[2], r = e[3], s = e[4];
  const o = i?.split(/\s+/).includes("task-list-item") ?? false, a = nae("li"), l = ar({ rootClass: "ui-markdown__list-item", stylexStyles: [GcS({ task: o }), a], className: i, style: s }), c = o ? "" : void 0;
  let u;
  e[5] !== l.className || e[6] !== l.style || e[7] !== n || e[8] !== r || e[9] !== c ? (u = Ay("li", { ...r, className: l.className, style: l.style, "data-md-list-item": "", "data-md-task-item": c, children: n }), e[5] = l.className, e[6] = l.style, e[7] = n, e[8] = r, e[9] = c, e[10] = u) : u = e[10];
  let d;
  return e[11] !== u || e[12] !== o ? (d = Ay(Lca.Provider, { value: o, children: u }), e[11] = u, e[12] = o, e[13] = d) : d = e[13], d;
}
function dSn({ className: t, style: e, stylexStyles: n }) {
  return ar({ rootClass: "ui-markdown__image", stylexStyles: [JcS(t), n], className: t, style: e });
}
function xbS(t) {
  const e = $7(41);
  let n, i, r, s, o, a, l;
  if (e[0] !== t) {
    const { src: N, alt: U, className: j, style: $, onError: H, onLoad: G, node: q, ...K } = t;
    a = N, n = U, i = j, l = $, r = H, s = G, o = K, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l;
  } else n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7];
  const [c, u] = pOr(null), d = c !== null && c === a, { onRichContentRenderStateChange: h } = DFe(R_e), p = nae("img");
  let g;
  e[8] !== i || e[9] !== p || e[10] !== l ? (g = dSn({ className: i, style: l, stylexStyles: p }), e[8] = i, e[9] = p, e[10] = l, e[11] = g) : g = e[11];
  const f = g;
  let _;
  e[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = ar({ rootClass: "ui-markdown__broken-image", stylexStyles: euS(), className: "md-broken-image" }), e[12] = _) : _ = e[12];
  const b = _;
  let y;
  e[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = ar({ rootClass: "ui-markdown__broken-image-label", stylexStyles: tuS() }), e[13] = y) : y = e[13];
  const S = y;
  let k, C;
  e[14] !== h ? (k = () => {
    h?.({ contentType: "image", state: "attempt" });
  }, C = [h], e[14] = h, e[15] = k, e[16] = C) : (k = e[15], C = e[16]), Hhi(k, C);
  let T;
  e[17] !== r || e[18] !== h || e[19] !== a ? (T = (N) => {
    typeof a != "string" && a != null && console.warn("[Markdown] ImageComponent received a non-string src", a), u(typeof a == "string" ? a : null), h?.({ contentType: "image", state: "error" }), r?.(N);
  }, e[17] = r, e[18] = h, e[19] = a, e[20] = T) : T = e[20];
  const I = T;
  let A;
  e[21] !== s || e[22] !== h ? (A = (N) => {
    h?.({ contentType: "image", state: "success" }), s?.(N);
  }, e[21] = s, e[22] = h, e[23] = A) : A = e[23];
  const P = A;
  if (d) {
    let N;
    e[24] !== n ? (N = n?.trim(), e[24] = n, e[25] = N) : N = e[25];
    const U = N, j = U && U.length > 0 ? U : vFh, $ = typeof a == "string" ? a : void 0;
    let H;
    e[26] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (H = Ay(zt, { name: "image-square", size: "base", color: "tertiary", "aria-hidden": true }), e[26] = H) : H = e[26];
    let G;
    e[27] !== j ? (G = Ay("span", { className: S.className, style: S.style, children: j }), e[27] = j, e[28] = G) : G = e[28];
    let q;
    return e[29] !== j || e[30] !== $ || e[31] !== G ? (q = hOr("span", { className: b.className, style: b.style, role: "img", "aria-label": j, title: $, children: [H, G] }), e[29] = j, e[30] = $, e[31] = G, e[32] = q) : q = e[32], q;
  }
  const M = n ?? "";
  let O;
  return e[33] !== I || e[34] !== P || e[35] !== f.className || e[36] !== f.style || e[37] !== o || e[38] !== a || e[39] !== M ? (O = Ay("img", { src: a, alt: M, onError: I, onLoad: P, ...o, className: f.className, style: f.style }), e[33] = I, e[34] = P, e[35] = f.className, e[36] = f.style, e[37] = o, e[38] = a, e[39] = M, e[40] = O) : O = e[40], O;
}
function AbS(t) {
  const e = $7(31);
  let n, i, r, s, o, a;
  e[0] !== t ? ({ children: n, className: i, node: r, onContextMenu: s, style: a, ...o } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6]);
  const l = Whi(null), { getSourceText: c, isStreaming: u, onRichContentRenderStateChange: d, onTableContextMenu: h } = DFe(R_e);
  let p;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (p = gn(U2h()), e[7] = p) : p = e[7];
  const g = p, f = nae("table");
  let _;
  e[8] !== i || e[9] !== f || e[10] !== a ? (_ = ar({ rootClass: "ui-markdown__table", stylexStyles: [j2h(), f], className: i, style: a }), e[8] = i, e[9] = f, e[10] = a, e[11] = _) : _ = e[11];
  const b = _;
  let y, S;
  e[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = () => {
    const O = l.current;
    if (!O) return;
    const N = O.querySelector("tr");
    if (!N) return;
    const U = N.children.length;
    if (U > 0) {
      const j = Math.max(bFh, Math.min(_Fh, Math.round(yFh / U)));
      O.style.setProperty("--markdown-table-prose-cell-inline-size", `${j}ch`);
    }
  }, S = [], e[12] = y, e[13] = S) : (y = e[12], S = e[13]), mpa(y, S);
  let k, C;
  e[14] !== d ? (k = () => {
    d?.({ contentType: "table", state: "attempt" }), d?.({ contentType: "table", state: "success" });
  }, C = [d], e[14] = d, e[15] = k, e[16] = C) : (k = e[15], C = e[16]), Hhi(k, C);
  let T, I;
  e[17] !== c || e[18] !== u || e[19] !== r ? (T = () => {
    const O = l.current;
    if (O) return QuS(O, () => XuS({ table: O, node: r, sourceText: c(), isStreaming: u }));
  }, I = [c, u, r], e[17] = c, e[18] = u, e[19] = r, e[20] = T, e[21] = I) : (T = e[20], I = e[21]), mpa(T, I);
  let A;
  e[22] !== s || e[23] !== h ? (A = (O) => {
    if (s?.(O), O.defaultPrevented || O.nativeEvent.defaultPrevented || ZuS(O) || !h) return;
    const N = qca(O.currentTarget);
    N && (O.preventDefault(), O.stopPropagation(), h(O, N));
  }, e[22] = s, e[23] = h, e[24] = A) : A = e[24];
  const P = A;
  let M;
  return e[25] !== n || e[26] !== P || e[27] !== o || e[28] !== b.className || e[29] !== b.style ? (M = Ay(xg, { direction: "horizontal", scrollbarVisibility: "hover", className: g.className, style: g.style, children: Ay("table", { ref: l, ...o, className: b.className, onContextMenu: P, style: b.style, children: n }) }), e[25] = n, e[26] = P, e[27] = o, e[28] = b.className, e[29] = b.style, e[30] = M) : M = e[30], M;
}
function RbS(t) {
  const e = $7(14);
  let n, i, r, s;
  if (e[0] !== t) {
    const { children: u, className: d, node: h, style: p, ...g } = t;
    n = u, i = d, s = p, r = g, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s;
  } else n = e[1], i = e[2], r = e[3], s = e[4];
  const o = nae("thead");
  let a;
  e[5] !== i || e[6] !== o || e[7] !== s ? (a = ar({ rootClass: "ui-markdown__thead", stylexStyles: [$2h(), o], className: i, style: s }), e[5] = i, e[6] = o, e[7] = s, e[8] = a) : a = e[8];
  const l = a;
  let c;
  return e[9] !== l.className || e[10] !== l.style || e[11] !== n || e[12] !== r ? (c = Ay("thead", { ...r, className: l.className, style: l.style, children: n }), e[9] = l.className, e[10] = l.style, e[11] = n, e[12] = r, e[13] = c) : c = e[13], c;
}
function PbS(t) {
  const e = $7(14);
  let n, i, r, s;
  if (e[0] !== t) {
    const { children: u, className: d, node: h, style: p, ...g } = t;
    n = u, i = d, s = p, r = g, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s;
  } else n = e[1], i = e[2], r = e[3], s = e[4];
  const o = nae("tr");
  let a;
  e[5] !== i || e[6] !== o || e[7] !== s ? (a = ar({ rootClass: "ui-markdown__tr", stylexStyles: [H2h(), o], className: i, style: s }), e[5] = i, e[6] = o, e[7] = s, e[8] = a) : a = e[8];
  const l = a;
  let c;
  return e[9] !== l.className || e[10] !== l.style || e[11] !== n || e[12] !== r ? (c = Ay("tr", { ...r, className: l.className, style: l.style, children: n }), e[9] = l.className, e[10] = l.style, e[11] = n, e[12] = r, e[13] = c) : c = e[13], c;
}
function MbS(t) {
  const e = $7(14);
  let n, i, r, s;
  if (e[0] !== t) {
    const { children: u, className: d, node: h, style: p, ...g } = t;
    n = u, i = d, s = p, r = g, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s;
  } else n = e[1], i = e[2], r = e[3], s = e[4];
  const o = nae("th");
  let a;
  e[5] !== i || e[6] !== o || e[7] !== s ? (a = ar({ rootClass: "ui-markdown__th", stylexStyles: [dNr(true), o], className: i, style: s }), e[5] = i, e[6] = o, e[7] = s, e[8] = a) : a = e[8];
  const l = a;
  let c;
  return e[9] !== l.className || e[10] !== l.style || e[11] !== n || e[12] !== r ? (c = Ay("th", { ...r, className: l.className, style: l.style, children: n }), e[9] = l.className, e[10] = l.style, e[11] = n, e[12] = r, e[13] = c) : c = e[13], c;
}
function DbS(t) {
  const e = $7(17);
  let n, i, r, s;
  if (e[0] !== t) {
    const { children: p, className: g, node: f, style: _, ...b } = t;
    n = p, i = g, s = _, r = b, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s;
  } else n = e[1], i = e[2], r = e[3], s = e[4];
  const o = nae("td");
  let a;
  e[5] !== i || e[6] !== o || e[7] !== s ? (a = ar({ rootClass: "ui-markdown__td", stylexStyles: [dNr(false), o], className: i, style: s }), e[5] = i, e[6] = o, e[7] = s, e[8] = a) : a = e[8];
  const l = a;
  let c;
  e[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = ar({ rootClass: "ui-markdown__table-cell-content", stylexStyles: W2h(), className: "md-table-cell-content" }), e[9] = c) : c = e[9];
  const u = c;
  let d;
  e[10] !== n ? (d = Ay("div", { className: u.className, style: u.style, children: n }), e[10] = n, e[11] = d) : d = e[11];
  let h;
  return e[12] !== r || e[13] !== d || e[14] !== l.className || e[15] !== l.style ? (h = Ay("td", { ...r, className: l.className, style: l.style, children: d }), e[12] = r, e[13] = d, e[14] = l.className, e[15] = l.style, e[16] = h) : h = e[16], h;
}
function NbS(t) {
  const e = $7(6);
  let n, i;
  if (e[0] !== t) {
    const { children: s, node: o, ...a } = t;
    n = s, i = a, e[0] = t, e[1] = n, e[2] = i;
  } else n = e[1], i = e[2];
  let r;
  return e[3] !== n || e[4] !== i ? (r = Ay("span", { ...i, "data-streamdown": "strong", children: n }), e[3] = n, e[4] = i, e[5] = r) : r = e[5], r;
}
function LbS(t) {
  const e = $7(6);
  let n, i;
  if (e[0] !== t) {
    const { children: s, node: o, ...a } = t;
    n = s, i = a, e[0] = t, e[1] = n, e[2] = i;
  } else n = e[1], i = e[2];
  let r;
  return e[3] !== n || e[4] !== i ? (r = Ay("tbody", { ...i, "data-streamdown": "table-body", children: n }), e[3] = n, e[4] = i, e[5] = r) : r = e[5], r;
}
function ObS(t) {
  const e = $7(6);
  let n, i;
  if (e[0] !== t) {
    const { children: o, node: a, ...l } = t;
    n = o, i = l, e[0] = t, e[1] = n, e[2] = i;
  } else n = e[1], i = e[2];
  const { isStreaming: r } = DFe(R_e);
  if (r && "data-footnotes" in i) return null;
  let s;
  return e[3] !== n || e[4] !== i ? (s = Ay("section", { ...i, children: n }), e[3] = n, e[4] = i, e[5] = s) : s = e[5], s;
}
function FbS(t) {
  const e = $7(1), n = oFh(t), i = iFh(_hS, o3h, o3h);
  if (t) {
    if (!n) {
      let r;
      return e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = aLr(), e[0] = r) : r = e[0], dbS(r);
    }
    return i === void 0 && aLr(), i;
  }
}
function BbS(t) {
  return typeof t != "string" ? t : t.replace(/(^|\n)`{1,2}$/, "$1");
}
function dT({ children: t, size: e, normalized: n = false, normalizedHeadingSpacing: i = "default", singleLine: r = false, gfm: s = true, plugins: o, allowHtml: a = false, sanitizeSchema: l, allowIcons: c = false, dangerouslySkipSanitization: u = false, codeBlockWordWrap: d = false, lineTokenizer: h, allowMermaid: p = false, onRichContentRenderStateChange: g, allowMath: f = false, isStreaming: _ = false, onCodeBlockClick: b, onFinish: y, shouldFade: S, onInlineCodeClick: k, onInlineCodeClickResolved: C, decorateInlineCode: T, resolveInlineCodeTarget: I, getInlineCodeLanguage: A, onLinkClick: P, onLinkIntent: M, onLinkContextMenu: O, onTableContextMenu: N, onInlineCodeContextMenu: U, onCodeBlockHeaderContextMenu: j, onCitationContextMenu: $, renderLinkContent: H, onCitationClick: G, renderCodeBlock: q, copyText: K, customComponents: V, generatedChildStyles: Y, allowColorTokens: J = false, stylexStyles: Q, className: te, ref: ee, ...re }) {
  const ie = k2h(), { size: oe, plugins: se, renderLinkContent: le, onLinkContextMenu: ce, generatedChildStyles: ae, taskMarkerIconColor: de } = Mca(), he = e ?? oe ?? "md", ge = Xit(() => ie ? (Be, Ue) => ie(Be, aNr(Ue)) : void 0, [ie]), pe = P ?? ge, ve = H ?? le, fe = O ?? ce, Te = Y ?? ae, _e = Xit(() => fbS(o ?? [], se ?? [], TuS()), [se, o]), Ce = Xit(() => {
    const Be = V ? Object.keys(V) : [];
    return a && !Be.includes("div") && Be.push("div"), Be;
  }, [V, a]), Se = Xit(() => ({ gfm: s, plugins: _e, allowHtml: a, allowIcons: c, allowMath: f, allowColorTokens: J, dangerouslySkipSanitization: u, allowedHtmlElements: Ce, sanitizeSchema: l }), [s, _e, a, c, f, J, u, Ce, l]), Pe = pbS(t), we = (_ ? BbS(Pe) : t) ?? "", Ie = Xit(() => OdS(we, { isStreaming: _, plugins: _e }), [we, _, _e]), Me = Whi(Ie);
  mpa(() => {
    Me.current = Ie;
  }, [Ie]);
  const De = mbS(() => Me.current, []), Ne = Xit(() => IhS(), []);
  Ne.setFadeTail(_ && S === true);
  const be = _ ? Ne.parseIncompleteMarkdownIntoBlocks : Ne.parseMarkdownIntoBlocks, je = Whi(_);
  _ && (je.current = true);
  const $e = je.current ? "streaming" : "static", Je = Xit(() => ({ allowMath: f, allowMermaid: p, isStreaming: _, normalized: n, normalizedHeadingSpacing: i, singleLine: r, size: he, taskMarkerIconColor: de, generatedChildStyles: Te, onRichContentRenderStateChange: g, codeBlockWordWrap: d, lineTokenizer: h, onCodeBlockClick: b, onInlineCodeClick: k, onInlineCodeClickResolved: C, decorateInlineCode: T, resolveInlineCodeTarget: I, getInlineCodeLanguage: A, onLinkClick: pe, onLinkIntent: M, onLinkContextMenu: fe, onTableContextMenu: N, onInlineCodeContextMenu: U, onCodeBlockHeaderContextMenu: j, onCitationContextMenu: $, renderLinkContent: ve, onCitationClick: G, renderCodeBlock: q, copyText: K, getSourceText: De }), [f, p, _, n, i, r, he, de, Te, g, d, h, b, k, C, T, I, A, pe, M, fe, N, U, j, $, ve, G, q, K, De]), Ge = Xit(() => V ? { ...vpa, ...V } : vpa, [V]), xe = Xit(() => f && bhS(Ie), [f, Ie]), Oe = Whi(_);
  Hhi(() => {
    Oe.current && !_ && y?.(), Oe.current = _;
  }, [_, y]);
  const ct = BDh({ allowHtml: a, allowIcons: c, plugins: _e }), Ye = oFh(ct), [Ve] = pOr(ct && Ye), Xe = Ay(SFh, { components: Ge, isStreaming: _, mode: $e, needsMathRehype: xe, parseMarkdownIntoBlocks: be, pluginOptions: Se, renderedChildren: Ie, streamingBlocks: Ne }), lt = ar({ rootClass: "ui-markdown", stylexStyles: [jcS(he, r), Q], className: ri("markdown-root", n && "markdown-normalized", te), style: re.style }), { style: He, onCopy: gt, ...ht } = re, Ae = RuS(), ot = c6([ee, Ae]);
  return Ay(R_e.Provider, { value: Je, children: Ay(m2h, { value: "markdown-flow", children: Ay("div", { ref: ot, className: lt.className, style: lt.style, "data-size": he, ...ht, onCopy: K7t(gt, TPh), children: Ve ? Ay(ppa, { fallback: null, children: Xe }) : Xe }) }) });
}
var dFh, hFh, pFh, gpa, mFh, gFh, fpa, fFh, vFh, _Fh, bFh, yFh, vpa, SFh, 