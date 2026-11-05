// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PreviewCardLayer.js range:6328198..6331960
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.894Z
LPr = L({ "PreviewCardLayer.js"() {
  "use strict";
  E(), U5(), Va(), oWe(), E_e(), mf(), She(), gna(), VSt(), MPr(), xWy(), hhh(), bhh(), pB(), Ooe(), _hh(), whh(), Thh(), f2(), bna = vna(null), yna = vna(null), Sna = vna(null), (function(t) {
    t.Trigger = WWy, t.Popup = GWy;
  })(jY || (jY = {}));
} });
import { jsx as Mbn, Fragment as qWy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as OPr } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as zWy, use as Ahh, useState as VWy, useEffect as Rhh } from "./react-runtime/react/esm-index-production.js";
function kna(t) {
  return Math.max(t, lWe);
}
function wna() {
  return Ahh(FPr);
}
function Cna(t) {
  const e = OPr(13), { children: n, layerNodeId: i, placement: r } = t, s = r === void 0 ? "right-start" : r, o = dit();
  let a;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = /* @__PURE__ */ new Set(), e[0] = a) : a = e[0];
  const [l, c] = VWy(a);
  let u, d;
  e[1] !== i || e[2] !== o ? (u = () => {
    if (!o) return;
    const b = (y) => {
      y.parentId === i && c((S) => {
        const k = new Set(S);
        return y.isOpen ? k.add(y.nodeId) : k.delete(y.nodeId), k;
      });
    };
    return o.events.on(Vci, b), () => {
      o.events.off(Vci, b);
    };
  }, d = [o, i], e[1] = i, e[2] = o, e[3] = u, e[4] = d) : (u = e[3], d = e[4]), Rhh(u, d);
  const h = l.size > 0;
  let p;
  e[5] !== h ? (p = { hasOpenChild: h }, e[5] = h, e[6] = p) : p = e[6];
  const g = p;
  let f;
  e[7] !== n || e[8] !== s ? (f = Mbn(jY, { offset: 6, placement: s, sameAxisOnly: true, children: n }), e[7] = n, e[8] = s, e[9] = f) : f = e[9];
  let _;
  return e[10] !== f || e[11] !== g ? (_ = Mbn(FPr.Provider, { value: g, children: f }), e[10] = f, e[11] = g, e[12] = _) : _ = e[12], _;
}
function KWy(t) {
  const e = OPr(8), { content: n, surfaceStyle: i } = t;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = ita(), e[0] = r) : r = e[0];
  let s;
  e[1] !== i ? (s = [r, i], e[1] = i, e[2] = s) : s = e[2];
  let o;
  e[3] !== n ? (o = typeof n == "function" ? n() : n, e[3] = n, e[4] = o) : o = e[4];
  let a;
  return e[5] !== s || e[6] !== o ? (a = Mbn(jY.Popup, { surfaceClassName: Xdh, surfaceStyle: s, children: o }), e[5] = s, e[6] = o, e[7] = a) : a = e[7], a;
}
function Phh(t) {
  const e = OPr(14), { children: n, content: i, contentKey: r, disabled: s, openDelay: o, closeDelay: a, surfaceStyle: l } = t, c = s === void 0 ? false : s, u = o === void 0 ? 0 : o, d = a === void 0 ? 0 : a, h = Ahh(FPr);
  if (h == null) {
    let b;
    return e[0] !== n ? (b = Mbn(qWy, { children: n }), e[0] = n, e[1] = b) : b = e[1], b;
  }
  let p;
  e[2] !== d ? (p = kna(d), e[2] = d, e[3] = p) : p = e[3];
  let g;
  e[4] !== i || e[5] !== l ? (g = Mbn(KWy, { content: i, surfaceStyle: l }), e[4] = i, e[5] = l, e[6] = g) : g = e[6];
  const f = c || h.hasOpenChild;
  let _;
  return e[7] !== n || e[8] !== r || e[9] !== u || e[10] !== p || e[11] !== g || e[12] !== f ? (_ = Mbn(jY.Trigger, { closeDelay: p, content: g, contentKey: r, openDelay: u, disabled: f, children: n }), e[7] = n, e[8] = r, e[9] = u, e[10] = p, e[11] = g, e[12] = f, e[13] = _) : _ = e[13], _;
}
function YWy(t, e) {
  const n = OPr(6), i = dit(), r = uWe();
  let s, o;
  n[0] !== e || n[1] !== t || n[2] !== r || n[3] !== i ? (s = () => {
    if (!i || t === void 0) return;
    const a = { nodeId: t, parentId: r, isOpen: e };
    return i.events.emit(Vci, a), () => {
      e && i.events.emit(Vci, { nodeId: t, parentId: r, isOpen: false });
    };
  }, o = [i, t, r, e], n[0] = e, n[1] = t, n[2] = r, n[3] = i, n[4] = s, n[5] = o) : (s = n[4], o = n[5]), Rhh(s, o);
}
var Vci, FPr, 