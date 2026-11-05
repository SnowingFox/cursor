// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: WarningConfirmTray.js range:17766403..17768611
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.158Z
var ef1 = L({ "WarningConfirmTray.js"() {
  "use strict";
  E(), g$t(), fd(), P0();
} });
import { c as tf1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function nf1(t, e) {
  const n = e.defaultView?.Element;
  return !!(n && t instanceof n);
}
function lRa({ fallbackContextElement: t, range: e }) {
  const n = e.cloneRange(), i = n.getBoundingClientRect(), r = n.getClientRects()[0], s = i.width > 0 || i.height > 0 ? i : r ?? void 0;
  if (!s) return null;
  const o = n.commonAncestorContainer;
  return { contextElement: nf1(o, t.ownerDocument) ? o : o.parentElement ?? t, getBoundingClientRect: () => {
    const l = n.getBoundingClientRect();
    return l.width > 0 || l.height > 0 ? l : n.getClientRects()[0] ?? s;
  } };
}
function b_i(t) {
  const e = tf1(24), { anchor: n, collisionPadding: i, offset: r, placement: s } = t, o = i === void 0 ? 8 : i, a = r === void 0 ? 8 : r, l = s === void 0 ? "top" : s;
  let c;
  e[0] !== a ? (c = Oli(a), e[0] = a, e[1] = c) : c = e[1];
  const u = l === "top" ? "bottom" : "top";
  let d;
  e[2] !== u ? (d = Bli({ fallbackPlacements: [u] }), e[2] = u, e[3] = d) : d = e[3];
  let h;
  e[4] !== o ? (h = Fli({ padding: o }), e[4] = o, e[5] = h) : h = e[5];
  let p;
  e[6] !== c || e[7] !== d || e[8] !== h ? (p = [c, d, h], e[6] = c, e[7] = d, e[8] = h, e[9] = p) : p = e[9];
  const g = n !== null;
  let f;
  e[10] !== l || e[11] !== p || e[12] !== g ? (f = { middleware: p, open: g, placement: l, strategy: "fixed", transform: false, whileElementsMounted: Nli }, e[10] = l, e[11] = p, e[12] = g, e[13] = f) : f = e[13];
  const { refs: _, floatingStyles: b, isPositioned: y } = Lci(f);
  let S, k;
  e[14] !== n || e[15] !== _ ? (S = () => (_.setPositionReference(n), () => _.setPositionReference(null)), k = [n, _], e[14] = n, e[15] = _, e[16] = S, e[17] = k) : (S = e[16], k = e[17]), kSn(S, k);
  const C = y ? "visible" : "hidden";
  let T;
  e[18] !== b || e[19] !== C ? (T = { ...b, visibility: C }, e[18] = b, e[19] = C, e[20] = T) : T = e[20];
  let I;
  return e[21] !== _.setFloating || e[22] !== T ? (I = { floatingRef: _.setFloating, floatingStyle: T }, e[21] = _.setFloating, e[22] = T, e[23] = I) : I = e[23], I;
}
