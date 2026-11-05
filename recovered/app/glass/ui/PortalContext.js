// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PortalContext.js range:6209561..6212151
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.886Z
pB = L({ "PortalContext.js"() {
  "use strict";
  E(), Qea = j$y({ root: null });
} });
import { jsx as H$y } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Qch } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as W$y, useRef as Jea, useLayoutEffect as Jch, useContext as G$y, useState as q$y } from "./react-runtime/react/esm-index-production.js";
function z$y() {
  const t = eta;
  return eta += ouh, { zIndex: t, release: () => {
  } };
}
function Ebn(t) {
  const e = Qch(11), { children: n, startZIndex: i, step: r } = t, s = i === void 0 ? tuh : i, o = r === void 0 ? nuh : r, a = Math.trunc(s), l = Math.max(1, Math.trunc(o)), c = Jea(a), u = Jea(0);
  let d;
  e[0] !== a || e[1] !== l ? (d = { startZIndex: a, step: l }, e[0] = a, e[1] = l, e[2] = d) : d = e[2];
  const h = Jea(d);
  let p, g;
  e[3] !== a || e[4] !== l ? (p = () => {
    h.current = { startZIndex: a, step: l }, u.current === 0 && (c.current = a);
  }, g = [a, l], e[3] = a, e[4] = l, e[5] = p, e[6] = g) : (p = e[5], g = e[6]), Jch(p, g);
  let f;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = () => {
    const k = c.current;
    c.current = c.current + h.current.step, u.current = u.current + 1;
    let C = false;
    return { zIndex: k, release: () => {
      C || (C = true, u.current = Math.max(u.current - 1, 0), u.current === 0 && (c.current = h.current.startZIndex));
    } };
  }, e[7] = f) : f = e[7];
  const _ = f;
  let b;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = { claimZIndex: _ }, e[8] = b) : b = e[8];
  const y = b;
  let S;
  return e[9] !== n ? (S = H$y(tta.Provider, { value: y, children: n }), e[9] = n, e[10] = S) : S = e[10], S;
}
function euh() {
  return G$y(tta);
}
function Yj(t, e) {
  const n = Qch(10), i = euh(), [r, s] = q$y(null);
  let o, a;
  n[0] !== e || n[1] !== i ? (o = () => {
    if (!e) {
      s(null);
      return;
    }
    const d = i?.claimZIndex() ?? z$y();
    return s(d.zIndex), () => {
      d.release();
    };
  }, a = [e, i], n[0] = e, n[1] = i, n[2] = o, n[3] = a) : (o = n[2], a = n[3]), Jch(o, a);
  let l;
  e: {
    if (r === null) {
      l = ruh;
      break e;
    }
    const d = tPr[t], h = String(r);
    let p;
    n[4] !== d || n[5] !== h ? (p = { [d]: h }, n[4] = d, n[5] = h, n[6] = p) : p = n[6], l = p;
  }
  const c = l;
  let u;
  return n[7] !== r || n[8] !== c ? (u = { zIndex: r, portalLayerStyles: c }, n[7] = r, n[8] = c, n[9] = u) : u = n[9], u;
}
var tuh, nuh, iuh, tPr, ruh, suh, ouh, eta, tta, 