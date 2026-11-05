// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SidebarContext.js range:14845375..14850258
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.005Z
KBh = L({ "SidebarContext.js"() {
  "use strict";
  E(), yhe(), ufa = sCS(null);
} });
import { jsx as YBh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as cCS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as XBh, useContext as ZBh, useEffect as QBh, useSyncExternalStore as uCS, useState as JBh, useRef as Ppi, useCallback as Ohe, useMemo as $5r, useLayoutEffect as dfa } from "./react-runtime/react/esm-index-production.js";
function e8h() {
  return ZBh(pfa);
}
function dCS() {
}
function hCS(t) {
  const e = cCS(16), { disabled: n, id: i, isHighlightControlled: r, ref: s } = t, o = ZBh(mfa);
  let a, l;
  e[0] !== n || e[1] !== i || e[2] !== o || e[3] !== s ? (a = () => {
    if (!(!o || n)) return o.registerItem(i, s), () => {
      o.unregisterItem(i);
    };
  }, l = [n, i, o, s], e[0] = n, e[1] = i, e[2] = o, e[3] = s, e[4] = a, e[5] = l) : (a = e[4], l = e[5]), QBh(a, l);
  let c;
  e[6] !== n || e[7] !== i || e[8] !== r || e[9] !== o ? (c = (p) => !o || n || r ? dCS : o.subscribeToItem(i, p), e[6] = n, e[7] = i, e[8] = r, e[9] = o, e[10] = c) : c = e[10];
  const u = c;
  let d;
  e[11] !== n || e[12] !== i || e[13] !== r || e[14] !== o ? (d = () => !o || n || r ? false : o.isItemHighlighted(i), e[11] = n, e[12] = i, e[13] = r, e[14] = o, e[15] = d) : d = e[15];
  const h = d;
  return uCS(u, h, h);
}
function pCS(t) {
  if (!t) return false;
  let e = t;
  for (; e; ) {
    if (e.dataset.collapsed === "true") return true;
    e = e.parentElement;
  }
  return false;
}
function hfa({ children: t, onHighlightChange: e, onItemSelect: n }) {
  const [i, r] = JBh(-1), s = Ppi(/* @__PURE__ */ new Map()), o = Ppi(/* @__PURE__ */ new Map()), a = Ppi(null), l = Ppi(0), c = Ohe(() => Array.from(s.current.values()).filter((G) => {
    const q = G.ref.current;
    return q && !pCS(q);
  }).sort((G, q) => G.order - q.order), []), [u, d] = JBh(0), h = Ohe(() => {
    const $ = c().length;
    d($);
  }, [c]), p = Ppi(false), g = $5r(() => tpa(h), [h]), f = Ohe(() => {
    p.current || g.schedule();
  }, [g]);
  QBh(() => (p.current = false, g.schedule(), () => {
    p.current = true, g.cancel();
  }), [g]);
  const _ = Ohe(($, H) => {
    const G = l.current++;
    s.current.set($, { id: $, ref: H, order: G }), f();
  }, [f]), b = Ohe(($) => {
    s.current.delete($), f();
  }, [f]), y = Ohe(($, H) => {
    const G = o.current.get($), q = G ?? /* @__PURE__ */ new Set();
    return G || o.current.set($, q), q.add(H), () => {
      q.delete(H), q.size === 0 && o.current.delete($);
    };
  }, []), S = Ohe(($) => a.current === $, []), k = Ohe(($) => {
    if ($ === null) return;
    const H = o.current.get($);
    if (H) for (const G of H) G();
  }, []), C = Ohe(($) => {
    r((H) => {
      const G = c(), q = G.length - 1, K = typeof $ == "function" ? $(H) : $, V = Math.max(-1, Math.min(q, K));
      if (V !== H && e) {
        const Y = G[V];
        e(V, Y?.id ?? null);
      }
      return V;
    });
  }, [c, e]), T = $5r(() => i < 0 ? null : c()[i]?.id ?? null, [i, c]);
  dfa(() => {
    const $ = a.current;
    $ !== T && (a.current = T, k($), k(T));
  }, [T, k]);
  const I = Ohe(($) => T === $, [T]), A = Ohe(() => {
    C(($) => {
      const H = c();
      return H.length === 0 ? -1 : $ < 0 ? 0 : Math.min($ + 1, H.length - 1);
    });
  }, [C, c]), P = Ohe(() => {
    C(($) => {
      const H = c();
      return H.length === 0 ? -1 : $ < 0 ? H.length - 1 : Math.max($ - 1, 0);
    });
  }, [C, c]), M = Ohe(() => {
    const H = c()[i];
    H?.ref.current && (H.ref.current.click(), n?.(H.id));
  }, [i, c, n]), O = Ohe(() => {
    C(-1);
  }, [C]), N = Ohe(($) => {
    switch ($.key) {
      case "ArrowDown":
        $.preventDefault(), A();
        break;
      case "ArrowUp":
        $.preventDefault(), P();
        break;
      case "Enter":
        i >= 0 && ($.preventDefault(), M());
        break;
      case "Escape":
        i >= 0 && ($.preventDefault(), O());
        break;
    }
  }, [i, A, P, M, O]);
  dfa(() => {
    if (i < 0) return;
    const H = c()[i];
    H?.ref.current && H.ref.current.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [i, c]), dfa(() => {
    const $ = c();
    i >= $.length && r(Math.max(-1, $.length - 1));
  }, [i, c, u]);
  const U = $5r(() => ({ highlightedIndex: i, setHighlightedIndex: C, highlightedId: T, registerItem: _, unregisterItem: b, isItemHighlighted: I, getVisibleItems: c, navigateNext: A, navigatePrevious: P, selectHighlighted: M, clearHighlight: O, visibleItemCount: u, handleNavigationKeyDown: N }), [i, C, T, _, b, I, c, A, P, M, O, u, N]), j = $5r(() => ({ registerItem: _, unregisterItem: b, subscribeToItem: y, isItemHighlighted: S }), [_, b, y, S]);
  return YBh(mfa.Provider, { value: j, children: YBh(pfa.Provider, { value: U, children: t }) });
}
var pfa, mfa, 