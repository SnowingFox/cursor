// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PresenceChild.mjs range:35402114..35403533
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.887Z
zv0 = L({ "PresenceChild.mjs"() {
  "use client";
  E(), NAs(), DAs(), Hv0(), C1v = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: r, presenceAffectsLayout: s, mode: o, anchorX: a, anchorY: l, root: c }) => {
    const u = MAs(qv0), d = Gv0();
    let h = true, p = w1v(() => (h = false, { id: d, initial: e, isPresent: n, custom: r, onExitComplete: (g) => {
      u.set(g, true);
      for (const f of u.values()) if (!f) return;
      i && i();
    }, register: (g) => (u.set(g, false), () => u.delete(g)) }), [n, u, i]);
    return s && h && (p = { ...p }), w1v(() => {
      u.forEach((g, f) => u.set(f, false));
    }, [n]), Wv0.useEffect(() => {
      !n && !u.size && i && i();
    }, [n]), t = k1v($v0, { pop: o === "popLayout", isPresent: n, anchorX: a, anchorY: l, root: c, children: t }), k1v(aOn.Provider, { value: p, children: t });
  };
} });
import { useContext as T1v, useId as Vv0, useEffect as Kv0, useCallback as Yv0 } from "./react-runtime/react/esm-index-production.js";
function Xv0(t = true) {
  const e = T1v(aOn);
  if (e === null) return [true, null];
  const { isPresent: n, onExitComplete: i, register: r } = e, s = Vv0();
  Kv0(() => {
    if (t) return r(s);
  }, [t]);
  const o = Yv0(() => t && i && i(s), [s, i, t]);
  return !n && i ? [false, o] : [true];
}
function bRs() {
  return Zv0(T1v(aOn));
}
function Zv0(t) {
  return t === null ? true : t.isPresent;
}
