// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SelectList.js range:6151045..6152919
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.981Z
r$y = L({ "SelectList.js"() {
  E(), Jy(), tWe(), jJo(), Om(), Flh(), HJo(), iit(), TW(), aea = i$y.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a, scrollHandlerRef: l } = Qnt(), { alignItemWithTriggerActive: c } = Ilh(), u = Ic(a, _S.hasScrollArrows), d = Ic(a, _S.openMethod), h = Ic(a, _S.multiple), g = { id: `${Ic(a, _S.id)}-list`, role: "listbox", "aria-multiselectable": h || void 0, onScroll(_) {
      l.current?.(_.currentTarget);
    }, ...c && { style: $Jo }, className: u && d !== "touch" ? dci.className : void 0 }, f = pu((_) => {
      a.set("listElement", _);
    });
    return Lm("div", e, { ref: [n, f], props: [g, o] });
  }), process.env.NODE_ENV !== "production" && (aea.displayName = "SelectList");
} });
import * as R2r from "./react-runtime/react/esm-index-production.js";
function iWe(t = {}) {
  const { label: e, metadata: n, textRef: i, indexGuessBehavior: r, index: s } = t, { register: o, unregister: a, subscribeMapChange: l, elementsRef: c, labelsRef: u, nextIndexRef: d } = Ljy(), h = R2r.useRef(-1), [p, g] = R2r.useState(s ?? (r === P2r.GuessFromOrder ? () => {
    if (h.current === -1) {
      const b = d.current;
      d.current += 1, h.current = b;
    }
    return h.current;
  } : -1)), f = R2r.useRef(null), _ = R2r.useCallback((b) => {
    if (f.current = b, p !== -1 && b !== null && (c.current[p] = b, u)) {
      const y = e !== void 0;
      u.current[p] = y ? e : i?.current?.textContent ?? b.textContent;
    }
  }, [p, c, u, e, i]);
  return su(() => {
    if (s != null) return;
    const b = f.current;
    if (b) return o(b, n), () => {
      a(b);
    };
  }, [s, o, a, n]), su(() => {
    if (s == null) return l((b) => {
      const y = f.current ? b.get(f.current)?.index : null;
      y != null && g(y);
    });
  }, [s, l, g]), { ref: _, index: p };
}
var P2r, 