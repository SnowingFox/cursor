// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CommandChipNodeView.js range:15878500..15887878
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.182Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, index.js, prompt-chip.stylex.js, cn.js, prompt-input-command-chip-tooltip.js, SkillCommandBadge.js, command-chip-shared.js, +2 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, index.js, prompt-chip.stylex.js, cn.js, prompt-input-command-chip-tooltip.js, SkillCommandBadge.js, command-chip-shared.js, +2 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
J9S = L({ "CommandChipNodeView.js"() {
  "use strict";
  E(), Va(), v_e(), Qjt(), mf(), Y9S(), pQh(), _rt(), k9r(), igi(), XJh = "ui-prompt-input-command-chip", ZJh = Z9S(function(e) {
    const n = X9S(38), { node: i, editor: r } = e;
    let s, o, a, l, c, u;
    if (n[0] !== r || n[1] !== i.attrs.authorshipLabel || n[2] !== i.attrs.badgeAppearance || n[3] !== i.attrs.content || n[4] !== i.attrs.description || n[5] !== i.attrs.displayName || n[6] !== i.attrs.id || n[7] !== i.attrs.name || n[8] !== i.attrs.sourceUri || n[9] !== i.attrs.tooltipPath || n[10] !== i.attrs.type) {
      const I = KJh(r, jne), { onCommandChipClick: A, isCommandChipClickable: P } = I ?? {};
      s = { id: i.attrs.id ?? "", name: i.attrs.name ?? "", displayName: typeof i.attrs.displayName == "string" ? i.attrs.displayName : void 0, content: i.attrs.content ?? "", type: i.attrs.type ?? void 0, description: i.attrs.description ?? void 0, tooltipPath: i.attrs.tooltipPath ?? void 0, authorshipLabel: i.attrs.authorshipLabel ?? void 0, badgeAppearance: nGe(i.attrs.badgeAppearance), sourceUri: typeof i.attrs.sourceUri == "string" && i.attrs.sourceUri.length > 0 ? i.attrs.sourceUri : void 0 }, a = vQh(s, A, P);
      const M = ri(a ? "ui-prompt-input-command-chip__label ui-prompt-input-command-chip__label--clickable" : "ui-prompt-input-command-chip__label", gn(eGe.label, a && eGe.labelClickable, !s.badgeAppearance && eGe.plainLabelBox).className);
      o = (O) => {
        O.preventDefault(), O.stopPropagation(), A(s);
      }, l = M, c = s.badgeAppearance ? void 0 : "", u = i1a(s), n[0] = r, n[1] = i.attrs.authorshipLabel, n[2] = i.attrs.badgeAppearance, n[3] = i.attrs.content, n[4] = i.attrs.description, n[5] = i.attrs.displayName, n[6] = i.attrs.id, n[7] = i.attrs.name, n[8] = i.attrs.sourceUri, n[9] = i.attrs.tooltipPath, n[10] = i.attrs.type, n[11] = s, n[12] = o, n[13] = a, n[14] = l, n[15] = c, n[16] = u;
    } else s = n[11], o = n[12], a = n[13], l = n[14], c = n[15], u = n[16];
    let d;
    n[17] !== l || n[18] !== c || n[19] !== u ? (d = $gi("span", { className: l, "data-command-chip-plain": c, children: u }), n[17] = l, n[18] = c, n[19] = u, n[20] = d) : d = n[20];
    const h = d;
    let p;
    n[21] !== s.badgeAppearance || n[22] !== h ? (p = s.badgeAppearance ? $gi(dQh, { appearance: s.badgeAppearance, children: h }) : h, n[21] = s.badgeAppearance, n[22] = h, n[23] = p) : p = n[23];
    const g = p;
    let f;
    n[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = ri(XJh, gn(eGe.root).className), n[24] = f) : f = n[24];
    const _ = a ? "button" : void 0, b = a ? o : void 0, y = s.displayName ?? s.name, S = s.type ?? "";
    let k;
    n[25] !== g ? (k = $gi("span", { children: g }), n[25] = g, n[26] = k) : k = n[26];
    let C;
    n[27] !== s.authorshipLabel || n[28] !== s.description || n[29] !== s.tooltipPath || n[30] !== S || n[31] !== k || n[32] !== y ? (C = $gi(K9S, { authorshipLabel: s.authorshipLabel, description: s.description, path: s.tooltipPath, title: y, type: S, children: k }), n[27] = s.authorshipLabel, n[28] = s.description, n[29] = s.tooltipPath, n[30] = S, n[31] = k, n[32] = y, n[33] = C) : C = n[33];
    let T;
    return n[34] !== C || n[35] !== _ || n[36] !== b ? (T = $gi(Unt, { as: "span", className: f, contentEditable: false, "data-type": "command", role: _, onClick: b, children: C }), n[34] = C, n[35] = _, n[36] = b, n[37] = T) : T = n[37], T;
  });
} });
function eBS(t) {
  var e;
  const { char: n, allowSpaces: i, allowToIncludeChar: r, allowedPrefixes: s, startOfLine: o, $position: a } = t, l = i && !r, c = JBy(n), u = new RegExp(`\\s${c}$`), d = o ? "^" : "", h = r ? "" : c, p = l ? new RegExp(`${d}${c}.*?(?=\\s${h}|$)`, "gm") : new RegExp(`${d}(?:^)?${c}[^\\s${h}]*`, "gm"), g = ((e = a.nodeBefore) == null ? void 0 : e.isText) && a.nodeBefore.text;
  if (!g) return null;
  const f = a.pos - g.length, _ = Array.from(g.matchAll(p)).pop();
  if (!_ || _.input === void 0 || _.index === void 0) return null;
  const b = _.input.slice(Math.max(0, _.index - 1), _.index), y = new RegExp(`^[${s?.join("")}\0]?$`).test(b);
  if (s !== null && !y) return null;
  const S = f + _.index;
  let k = S + _[0].length;
  return l && u.test(g.slice(k - 1, k + 1)) && (_[0] += " ", k += 1), S < a.pos && k >= a.pos ? { range: { from: S, to: k }, query: _[0].slice(n.length), text: _[0] } : null;
}
function QJh({ pluginKey: t = JJh, editor: e, char: n = "@", allowSpaces: i = false, allowToIncludeChar: r = false, allowedPrefixes: s = [" "], startOfLine: o = false, decorationTag: a = "span", decorationClass: l = "suggestion", decorationContent: c = "", decorationEmptyClass: u = "is-empty", command: d = () => null, items: h = () => [], render: p = () => ({}), allow: g = () => true, findSuggestionMatch: f = eBS }) {
  let _;
  const b = p?.(), y = () => {
    const T = e.state.selection.$anchor.pos, I = e.view.coordsAtPos(T), { top: A, right: P, bottom: M, left: O } = I;
    try {
      return new DOMRect(O, A, P - O, M - A);
    } catch {
      return null;
    }
  }, S = (T, I) => I ? () => {
    const A = t.getState(e.state), P = A?.decorationId, M = T.dom.querySelector(`[data-decoration-id="${P}"]`);
    return M?.getBoundingClientRect() || null;
  } : y;
  function k(T, I) {
    var A;
    try {
      const M = t.getState(T.state), O = M?.decorationId ? T.dom.querySelector(`[data-decoration-id="${M.decorationId}"]`) : null, N = { editor: e, range: M?.range || { from: 0, to: 0 }, query: M?.query || null, text: M?.text || null, items: [], command: (U) => d({ editor: e, range: M?.range || { from: 0, to: 0 }, props: U }), decorationNode: O, clientRect: S(T, O) };
      (A = b?.onExit) == null || A.call(b, N);
    } catch {
    }
    const P = T.state.tr.setMeta(I, { exit: true });
    T.dispatch(P);
  }
  const C = new MS({ key: t, view() {
    return { update: async (T, I) => {
      var A, P, M, O, N, U, j;
      const $ = (A = this.key) == null ? void 0 : A.getState(I), H = (P = this.key) == null ? void 0 : P.getState(T.state), G = $.active && H.active && $.range.from !== H.range.from, q = !$.active && H.active, K = $.active && !H.active, V = !q && !K && $.query !== H.query, Y = q || G && V, J = V || G, Q = K || G && V;
      if (!Y && !J && !Q) return;
      const te = Q && !Y ? $ : H, ee = T.dom.querySelector(`[data-decoration-id="${te.decorationId}"]`);
      _ = { editor: e, range: te.range, query: te.query, text: te.text, items: [], command: (re) => d({ editor: e, range: te.range, props: re }), decorationNode: ee, clientRect: S(T, ee) }, Y && ((M = b?.onBeforeStart) == null || M.call(b, _)), J && ((O = b?.onBeforeUpdate) == null || O.call(b, _)), (J || Y) && (_.items = await h({ editor: e, query: te.query })), Q && ((N = b?.onExit) == null || N.call(b, _)), J && ((U = b?.onUpdate) == null || U.call(b, _)), Y && ((j = b?.onStart) == null || j.call(b, _));
    }, destroy: () => {
      var T;
      _ && ((T = b?.onExit) == null || T.call(b, _));
    } };
  }, state: { init() {
    return { active: false, range: { from: 0, to: 0 }, query: null, text: null, composing: false };
  }, apply(T, I, A, P) {
    const { isEditable: M } = e, { composing: O } = e.view, { selection: N } = T, { empty: U, from: j } = N, $ = { ...I }, H = T.getMeta(t);
    if (H && H.exit) return $.active = false, $.decorationId = null, $.range = { from: 0, to: 0 }, $.query = null, $.text = null, $;
    if ($.composing = O, M && (U || e.view.composing)) {
      (j < I.range.from || j > I.range.to) && !O && !I.composing && ($.active = false);
      const G = f({ char: n, allowSpaces: i, allowToIncludeChar: r, allowedPrefixes: s, startOfLine: o, $position: N.$from }), q = `id_${Math.floor(Math.random() * 4294967295)}`;
      G && g({ editor: e, state: P, range: G.range, isActive: I.active }) ? ($.active = true, $.decorationId = I.decorationId ? I.decorationId : q, $.range = G.range, $.query = G.query, $.text = G.text) : $.active = false;
    } else $.active = false;
    return $.active || ($.decorationId = null, $.range = { from: 0, to: 0 }, $.query = null, $.text = null), $;
  } }, props: { handleKeyDown(T, I) {
    var A, P, M, O;
    const { active: N, range: U } = C.getState(T.state);
    if (!N) return false;
    if (I.key === "Escape" || I.key === "Esc") {
      const $ = C.getState(T.state), H = (A = _?.decorationNode) != null ? A : null, G = H ?? ($?.decorationId ? T.dom.querySelector(`[data-decoration-id="${$.decorationId}"]`) : null);
      if (((P = b?.onKeyDown) == null ? void 0 : P.call(b, { view: T, event: I, range: $.range })) || false) return true;
      const K = { editor: e, range: $.range, query: $.query, text: $.text, items: [], command: (V) => d({ editor: e, range: $.range, props: V }), decorationNode: G, clientRect: G ? () => G.getBoundingClientRect() || null : null };
      return (M = b?.onExit) == null || M.call(b, K), k(T, t), true;
    }
    return ((O = b?.onKeyDown) == null ? void 0 : O.call(b, { view: T, event: I, range: U })) || false;
  }, decorations(T) {
    const { active: I, range: A, decorationId: P, query: M } = C.getState(T);
    if (!I) return null;
    const O = !M?.length, N = [l];
    return O && N.push(u), wP.create(T.doc, [Rx.inline(A.from, A.to, { nodeName: a, class: N.join(" "), "data-decoration-id": P, "data-decoration-content": c })]);
  } } });
  return C;
}
var JJh, 