// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: IconColorPickerGlyphs.js range:15698582..15709888
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.725Z
var DSa = L({ "IconColorPickerGlyphs.js"() {
  "use strict";
  E(), OHe();
} });
import { jsx as y6S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as NSa, useLayoutEffect as fZh, useEffect as vZh, useMemo as Jjt, useRef as _Zh, useCallback as k4r, memo as S6S, useImperativeHandle as k6S, createElement as bZh } from "./react-runtime/react/esm-index-production.js";
function yZh(t) {
  if (t !== void 0) switch (typeof t) {
    case "number":
      return t;
    case "string": {
      if (t.endsWith("px")) return parseFloat(t);
      break;
    }
  }
}
function w6S({ box: t, defaultHeight: e, defaultWidth: n, disabled: i, element: r, mode: s, style: o }) {
  const { styleHeight: a, styleWidth: l } = Jjt(() => ({ styleHeight: yZh(o?.height), styleWidth: yZh(o?.width) }), [o?.height, o?.width]), [c, u] = NSa({ height: e, width: n }), d = i || s === "only-height" && a !== void 0 || s === "only-width" && l !== void 0 || a !== void 0 && l !== void 0;
  return M1n(() => {
    if (r === null || d) return;
    const h = new ResizeObserver((p) => {
      for (const g of p) {
        const { contentRect: f, target: _ } = g;
        r === _ && u((b) => b.height === f.height && b.width === f.width ? b : { height: f.height, width: f.width });
      }
    });
    return h.observe(r, { box: t }), () => {
      h?.unobserve(r);
    };
  }, [t, d, r, a, l]), Jjt(() => ({ height: a ?? c.height, width: l ?? c.width }), [c, a, l]);
}
function C6S(t) {
  const e = _Zh(() => {
    throw new Error("Cannot call during render.");
  });
  return M1n(() => {
    e.current = t;
  }, [t]), k4r((n) => e.current?.(n), [e]);
}
function T6S(t = false) {
  if (e$t === null || t) {
    const e = document.createElement("div"), n = e.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
    const i = document.createElement("div"), r = i.style;
    return r.width = "100px", r.height = "100px", e.appendChild(i), document.body.appendChild(e), e.scrollLeft > 0 ? e$t = "positive-descending" : (e.scrollLeft = 1, e.scrollLeft === 0 ? e$t = "negative" : e$t = "positive-ascending"), document.body.removeChild(e), e$t;
  }
  return e$t;
}
function LSa({ containerElement: t, direction: e, isRtl: n, scrollOffset: i }) {
  if (e === "horizontal" && n) switch (T6S()) {
    case "negative":
      return -i;
    case "positive-descending": {
      if (t) {
        const { clientWidth: r, scrollLeft: s, scrollWidth: o } = t;
        return o - r - s;
      }
      break;
    }
  }
  return i;
}
function Nkt(t, e = "Assertion error") {
  if (!t) throw console.error(e), Error(e);
}
function Xmi(t, e) {
  if (t === e) return true;
  if (!!t != !!e || (Nkt(t !== void 0), Nkt(e !== void 0), Object.keys(t).length !== Object.keys(e).length)) return false;
  for (const n in t) if (!Object.is(e[n], t[n])) return false;
  return true;
}
function SZh({ cachedBounds: t, itemCount: e, itemSize: n }) {
  if (e === 0) return 0;
  if (typeof n == "number") return e * n;
  {
    const i = t.get(t.size === 0 ? 0 : t.size - 1);
    Nkt(i !== void 0, "Unexpected bounds cache miss");
    const r = (i.scrollOffset + i.size) / t.size;
    return e * r;
  }
}
function E6S({ align: t, cachedBounds: e, index: n, itemCount: i, itemSize: r, containerScrollOffset: s, containerSize: o }) {
  if (n < 0 || n >= i) throw RangeError(`Invalid index specified: ${n}`, { cause: `Index ${n} is not within the range of 0 - ${i - 1}` });
  const a = SZh({ cachedBounds: e, itemCount: i, itemSize: r }), l = e.get(n), c = Math.max(0, Math.min(a - o, l.scrollOffset)), u = Math.max(0, l.scrollOffset - o + l.size);
  switch (t === "smart" && (s >= u && s <= c ? t = "auto" : t = "center"), t) {
    case "start":
      return c;
    case "end":
      return u;
    case "center":
      return l.scrollOffset <= o / 2 ? 0 : l.scrollOffset + l.size / 2 >= a - o / 2 ? a - o : l.scrollOffset + l.size / 2 - o / 2;
    case "auto":
    default:
      return s >= u && s <= c ? s : s < u ? u : c;
  }
}
function kZh({ cachedBounds: t, containerScrollOffset: e, containerSize: n, itemCount: i, overscanCount: r }) {
  const s = i - 1;
  let o = 0, a = -1, l = 0, c = -1, u = 0;
  for (; u < s; ) {
    const d = t.get(u);
    if (d.scrollOffset + d.size > e) break;
    u++;
  }
  for (o = u, l = Math.max(0, o - r); u < s; ) {
    const d = t.get(u);
    if (d.scrollOffset + d.size >= e + n) break;
    u++;
  }
  return a = Math.min(s, u), c = Math.min(i - 1, a + r), o < 0 && (o = 0, a = -1, l = 0, c = -1), { startIndexVisible: o, stopIndexVisible: a, startIndexOverscan: l, stopIndexOverscan: c };
}
function I6S({ itemCount: t, itemProps: e, itemSize: n }) {
  const i = /* @__PURE__ */ new Map();
  return { get(r) {
    for (Nkt(r < t, `Invalid index ${r}`); i.size - 1 < r; ) {
      const o = i.size;
      let a;
      switch (typeof n) {
        case "function": {
          a = n(o, e);
          break;
        }
        case "number": {
          a = n;
          break;
        }
      }
      if (o === 0) i.set(o, { size: a, scrollOffset: 0 });
      else {
        const l = i.get(o - 1);
        Nkt(l !== void 0, `Unexpected bounds cache miss for index ${r}`), i.set(o, { scrollOffset: l.scrollOffset + l.size, size: a });
      }
    }
    const s = i.get(r);
    return Nkt(s !== void 0, `Unexpected bounds cache miss for index ${r}`), s;
  }, set(r, s) {
    i.set(r, s);
  }, get size() {
    return i.size;
  } };
}
function x6S({ itemCount: t, itemProps: e, itemSize: n }) {
  return Jjt(() => I6S({ itemCount: t, itemProps: e, itemSize: n }), [t, e, n]);
}
function A6S({ containerSize: t, itemSize: e }) {
  let n;
  switch (typeof e) {
    case "string": {
      Nkt(e.endsWith("%"), `Invalid item size: "${e}"; string values must be percentages (e.g. "100%")`), Nkt(t !== void 0, "Container size must be defined if a percentage item size is specified"), n = t * parseInt(e) / 100;
      break;
    }
    default: {
      n = e;
      break;
    }
  }
  return n;
}
function R6S({ containerElement: t, containerStyle: e, defaultContainerSize: n = 0, direction: i, isRtl: r = false, itemCount: s, itemProps: o, itemSize: a, onResize: l, overscanCount: c }) {
  const [u, d] = NSa({ startIndexVisible: 0, startIndexOverscan: 0, stopIndexVisible: -1, stopIndexOverscan: -1 }), { startIndexVisible: h, startIndexOverscan: p, stopIndexVisible: g, stopIndexOverscan: f } = { startIndexVisible: Math.min(s - 1, u.startIndexVisible), startIndexOverscan: Math.min(s - 1, u.startIndexOverscan), stopIndexVisible: Math.min(s - 1, u.stopIndexVisible), stopIndexOverscan: Math.min(s - 1, u.stopIndexOverscan) }, { height: _ = n, width: b = n } = w6S({ defaultHeight: i === "vertical" ? n : void 0, defaultWidth: i === "horizontal" ? n : void 0, element: t, mode: i === "vertical" ? "only-height" : "only-width", style: e }), y = _Zh({ height: 0, width: 0 }), S = i === "vertical" ? _ : b, k = A6S({ containerSize: S, itemSize: a });
  fZh(() => {
    if (typeof l == "function") {
      const M = y.current;
      (M.height !== _ || M.width !== b) && (l({ height: _, width: b }, { ...M }), M.height = _, M.width = b);
    }
  }, [_, l, b]);
  const C = x6S({ itemCount: s, itemProps: o, itemSize: k }), T = k4r((M) => C.get(M), [C]), I = k4r(() => SZh({ cachedBounds: C, itemCount: s, itemSize: k }), [C, s, k]), A = k4r((M) => {
    const O = LSa({ containerElement: t, direction: i, isRtl: r, scrollOffset: M });
    return kZh({ cachedBounds: C, containerScrollOffset: O, containerSize: S, itemCount: s, overscanCount: c });
  }, [C, t, S, i, r, s, c]);
  M1n(() => {
    const M = (i === "vertical" ? t?.scrollTop : t?.scrollLeft) ?? 0;
    d(A(M));
  }, [t, i, A]), M1n(() => {
    if (!t) return;
    const M = () => {
      d((O) => {
        const { scrollLeft: N, scrollTop: U } = t, j = LSa({ containerElement: t, direction: i, isRtl: r, scrollOffset: i === "vertical" ? U : N }), $ = kZh({ cachedBounds: C, containerScrollOffset: j, containerSize: S, itemCount: s, overscanCount: c });
        return Xmi($, O) ? O : $;
      });
    };
    return t.addEventListener("scroll", M), () => {
      t.removeEventListener("scroll", M);
    };
  }, [C, t, S, i, s, c]);
  const P = C6S(({ align: M = "auto", containerScrollOffset: O, index: N }) => {
    let U = E6S({ align: M, cachedBounds: C, containerScrollOffset: O, containerSize: S, index: N, itemCount: s, itemSize: k });
    if (t) {
      if (U = LSa({ containerElement: t, direction: i, isRtl: r, scrollOffset: U }), typeof t.scrollTo != "function") {
        const j = A(U);
        Xmi(u, j) || d(j);
      }
      return U;
    }
  });
  return { getCellBounds: T, getEstimatedSize: I, scrollToIndex: P, startIndexOverscan: p, startIndexVisible: h, stopIndexOverscan: f, stopIndexVisible: g };
}
function P6S(t) {
  return Jjt(() => t, Object.values(t));
}
function M6S(t, e) {
  const { ariaAttributes: n, style: i, ...r } = t, { ariaAttributes: s, style: o, ...a } = e;
  return Xmi(n, s) && Xmi(i, o) && Xmi(r, a);
}
function D6S(t) {
  return t != null && typeof t == "object" && "getAverageRowHeight" in t && typeof t.getAverageRowHeight == "function";
}
function wZh({ children: t, className: e, defaultHeight: n = 0, listRef: i, onResize: r, onRowsRendered: s, overscanCount: o = 3, rowComponent: a, rowCount: l, rowHeight: c, rowProps: u, tagName: d = "div", style: h, ...p }) {
  const g = P6S(u), f = Jjt(() => S6S(a, M6S), [a]), [_, b] = NSa(null), y = D6S(c), S = Jjt(() => y ? (U) => c.getRowHeight(U) ?? c.getAverageRowHeight() : c, [y, c]), { getCellBounds: k, getEstimatedSize: C, scrollToIndex: T, startIndexOverscan: I, startIndexVisible: A, stopIndexOverscan: P, stopIndexVisible: M } = R6S({ containerElement: _, containerStyle: h, defaultContainerSize: n, direction: "vertical", itemCount: l, itemProps: g, itemSize: S, onResize: r, overscanCount: o });
  k6S(i, () => ({ get element() {
    return _;
  }, scrollToRow({ align: U = "auto", behavior: j = "auto", index: $ }) {
    const H = T({ align: U, containerScrollOffset: _?.scrollTop ?? 0, index: $ });
    typeof _?.scrollTo == "function" && _.scrollTo({ behavior: j, top: H });
  } }), [_, T]), M1n(() => {
    if (!_) return;
    const U = Array.from(_.children).filter((j, $) => {
      if (j.hasAttribute("aria-hidden")) return false;
      const H = `${I + $}`;
      return j.setAttribute(CZh, H), true;
    });
    if (y) return c.observeRowElements(U);
  }, [_, y, c, I, P]), vZh(() => {
    I >= 0 && P >= 0 && s && s({ startIndex: A, stopIndex: M }, { startIndex: I, stopIndex: P });
  }, [s, I, A, P, M]);
  const O = Jjt(() => {
    const U = [];
    if (l > 0) for (let j = I; j <= P; j++) {
      const $ = k(j);
      U.push(bZh(f, { ...g, ariaAttributes: { "aria-posinset": j + 1, "aria-setsize": l, role: "listitem" }, key: j, index: j, style: { position: "absolute", left: 0, transform: `translateY(${$.scrollOffset}px)`, height: y ? void 0 : $.size, width: "100%" } }));
    }
    return U;
  }, [f, k, y, l, g, I, P]), N = y6S("div", { "aria-hidden": true, style: { height: C(), width: "100%", zIndex: -1 } });
  return bZh(d, { role: "list", ...p, className: e, ref: b, style: { position: "relative", maxHeight: "100%", flexGrow: 1, overflowY: "auto", ...h } }, O, t, N);
}
var M1n, e$t, CZh, 