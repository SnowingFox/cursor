// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: RadioIndicator.js range:14685558..14689375
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.946Z
_kS = L({ "RadioIndicator.js"() {
  E(), Om(), Z4h(), V4h(), qQ(), LRe(), aga = J4h.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, keepMounted: o = false, ...a } = e, l = gkS(), c = l.checked, { mounted: u, transitionStatus: d, setMounted: h } = NRe(c), p = { ...l, transitionStatus: d }, g = J4h.useRef(null), f = o || u, _ = Lm("span", e, { ref: [n, g], state: p, props: a, stateAttributesMapping: r5r });
    return GQ({ open: c, ref: g, onComplete() {
      c || h(false);
    } }), f ? _ : null;
  }), process.env.NODE_ENV !== "production" && (aga.displayName = "RadioIndicator");
} });
import * as c5r from "./react-runtime/react/esm-index-production.js";
function bkS(t) {
  const { loopFocus: e = true, orientation: n = "both", grid: i, onLoop: r, direction: s, highlightedIndex: o, onHighlightedIndexChange: a, rootRef: l, enableHomeAndEndKeys: c = false, stopEventPropagation: u = false, disabledIndices: d, modifierKeys: h = e9h } = t, [p, g] = c5r.useState(0), f = i != null, _ = c5r.useRef(null), b = Ioe(_, l), y = c5r.useRef([]), S = c5r.useRef(false), k = o ?? p, C = pu((M, O = false) => {
    if ((a ?? g)(M), O) {
      const N = y.current[M];
      jlh(_.current, N, s, n);
    }
  }), T = pu((M) => {
    if (M.size === 0 || S.current) return;
    S.current = true;
    const O = Array.from(M.keys()), N = O.find((j) => j?.hasAttribute(s5r)) ?? null, U = N ? O.indexOf(N) : -1;
    if (U !== -1) C(U);
    else if (ebn(O, k, d)) {
      const j = WQ(O, { disabledIndices: d });
      LSt(O, j) || C(j);
    }
    jlh(_.current, N, s, n);
  });
  su(() => {
    if (d == null || o != null || !S.current) return;
    const M = y.current;
    if (ebn(M, k, d)) {
      const O = WQ(M, { disabledIndices: d });
      LSt(M, O) || C(O);
    }
  }, [d, o, k, y, C]);
  const I = pu((M, O, N) => r ? r(M, O, N, y) : N), A = pu((M) => {
    const O = c ? $St : eea;
    if (!O.has(M.key) || ykS(M, h) || !_.current) return;
    const U = s === "rtl", j = U ? fbn : vbn, $ = { horizontal: j, vertical: m7t, both: j }[n], H = U ? vbn : fbn, G = { horizontal: H, vertical: p7t, both: H }[n], q = B5(M.nativeEvent);
    if (q != null && Ulh(q) && !tQo(q)) {
      const ee = q.selectionStart, re = q.selectionEnd, ie = q.value ?? "";
      if (ee == null || M.shiftKey || ee !== re || M.key !== G && ee < ie.length || M.key !== $ && ee > 0) return;
    }
    let K = k;
    const V = CRr(y, d), Y = AQo(y, d);
    i != null && (K = i({ disabledIndices: d, elementsRef: y, event: M, highlightedIndex: k, loopFocus: e, maxIndex: Y, minIndex: V, onLoop: I, orientation: n, rtl: U }));
    const J = { horizontal: [j], vertical: [m7t], both: [j, m7t] }[n], Q = { horizontal: [H], vertical: [p7t], both: [H, p7t] }[n], te = f ? O : { horizontal: c ? Hlh : QJo, vertical: c ? Wlh : JJo, both: O }[n];
    c && (M.key === _bn ? K = V : M.key === bbn && (K = Y)), K === k && (J.includes(M.key) || Q.includes(M.key)) && (e && K === Y && J.includes(M.key) ? (K = V, r && (K = r(M, k, K, y))) : e && K === V && Q.includes(M.key) ? (K = Y, r && (K = r(M, k, K, y))) : K = WQ(y.current, { startingIndex: K, decrement: Q.includes(M.key), disabledIndices: d })), K !== k && !LSt(y.current, K) && (u && M.stopPropagation(), te.has(M.key) && M.preventDefault(), C(K, true), queueMicrotask(() => {
      y.current[K]?.focus();
    }));
  });
  return { props: { ref: b, onFocus(M) {
    const O = _.current, N = B5(M.nativeEvent);
    !O || N == null || !Ulh(N) || N.setSelectionRange(0, N.value.length ?? 0);
  }, onKeyDown: A }, highlightedIndex: k, onHighlightedIndexChange: C, elementsRef: y, disabledIndices: d, onMapChange: T, relayKeyboardEvent: A };
}
function ykS(t, e) {
  for (const n of Vlh.values()) if (!e.includes(n) && t.getModifierState(n)) return true;
  return false;
}
var e9h, 