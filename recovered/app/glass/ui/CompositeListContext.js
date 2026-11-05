// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CompositeListContext.js range:6115207..6117833
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.563Z
_lh = L({ "CompositeListContext.js"() {
  E(), k2r = vlh.createContext({ register: () => {
  }, unregister: () => {
  }, subscribeMapChange: () => () => {
  }, elementsRef: { current: [] }, nextIndexRef: { current: 0 } }), process.env.NODE_ENV !== "production" && (k2r.displayName = "CompositeListContext");
} });
import * as sci from "./react-runtime/react/esm-index-production.js";
import { jsx as Ojy } from "./react-runtime/react/esm-jsx-runtime-production.js";
function ubn(t) {
  const { children: e, elementsRef: n, labelsRef: i, onMapChange: r } = t, s = pu(r), o = sci.useRef(0), a = CW(Bjy).current, l = CW(Fjy).current, [c, u] = sci.useState(0), d = sci.useRef(c), h = pu((b, y) => {
    l.set(b, y ?? null), d.current += 1, u(d.current);
  }), p = pu((b) => {
    l.delete(b), d.current += 1, u(d.current);
  }), g = sci.useMemo(() => {
    const b = /* @__PURE__ */ new Map();
    return Array.from(l.keys()).filter((S) => S.isConnected).sort(Ujy).forEach((S, k) => {
      const C = l.get(S) ?? {};
      b.set(S, { ...C, index: k });
    }), b;
  }, [l, c]);
  su(() => {
    if (typeof MutationObserver != "function" || g.size === 0) return;
    const b = new MutationObserver((y) => {
      const S = /* @__PURE__ */ new Set(), k = (C) => S.has(C) ? S.delete(C) : S.add(C);
      y.forEach((C) => {
        C.removedNodes.forEach(k), C.addedNodes.forEach(k);
      }), S.size === 0 && (d.current += 1, u(d.current));
    });
    return g.forEach((y, S) => {
      S.parentElement && b.observe(S.parentElement, { childList: true });
    }), () => {
      b.disconnect();
    };
  }, [g]), su(() => {
    d.current === c && (n.current.length !== g.size && (n.current.length = g.size), i && i.current.length !== g.size && (i.current.length = g.size), o.current = g.size), s(g);
  }, [s, g, n, i, c]), su(() => () => {
    n.current = [];
  }, [n]), su(() => () => {
    i && (i.current = []);
  }, [i]);
  const f = pu((b) => (a.add(b), () => {
    a.delete(b);
  }));
  su(() => {
    a.forEach((b) => b(g));
  }, [a, g]);
  const _ = sci.useMemo(() => ({ register: h, unregister: p, subscribeMapChange: f, elementsRef: n, labelsRef: i, nextIndexRef: o }), [h, p, f, n, i, o]);
  return Ojy(k2r.Provider, { value: _, children: e });
}
function Fjy() {
  return /* @__PURE__ */ new Map();
}
function Bjy() {
  return /* @__PURE__ */ new Set();
}
function Ujy(t, e) {
  const n = t.compareDocumentPosition(e);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function cEx(t) {
}
