// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxList.js range:16749956..16752391
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.555Z
Icp = L({ "ComboboxList.js"() {
  E(), Jy(), Om(), Y_e(), K8r(), yGe(), iTa(), dbn(), TW(), Sne(), Yfi = Tcp.forwardRef(function(e, n) {
    var i;
    const { render: r, className: s, style: o, children: a, ...l } = e, c = x0e(), u = U8r(), d = !!JCa(true), { filteredItems: h, hasItems: p } = bGe(), g = Ic(c, gm.selectionMode), f = Ic(c, gm.grid), _ = Ic(c, gm.popupProps), b = Ic(c, gm.virtualized), y = Ic(c, gm.forceMounted), S = g === "multiple", k = h.length === 0, C = pu((N) => {
      c.set("positionerElement", N);
    }), T = pu((N) => {
      c.set("listElement", N);
    }), I = Tcp.useMemo(() => typeof a == "function" ? i || (i = Ecp(zkn, { children: a })) : a, [a]), A = { empty: k }, P = u.useState("floatingId"), M = Lm("div", e, { state: A, ref: [n, T, d ? null : C], props: [_, { children: I, tabIndex: -1, id: P, role: f ? "grid" : "listbox", "aria-multiselectable": S ? "true" : void 0, onKeyDown(N) {
      if (!(c.state.disabled || c.state.readOnly) && N.key === "Enter") {
        const U = c.state.activeIndex;
        if (U == null) return;
        Ez(N);
        const j = N.nativeEvent, $ = c.state.listRef.current[U];
        $ && (c.state.selectionEventRef.current = j, $.click(), c.state.selectionEventRef.current = null);
      }
    }, onKeyDownCapture() {
      c.state.keyboardActiveRef.current = true;
    }, onPointerMoveCapture() {
      c.state.keyboardActiveRef.current = false;
    } }, l] });
    if (b) return M;
    const O = p && !y ? void 0 : c.state.labelsRef;
    return Ecp(ubn, { elementsRef: c.state.listRef, labelsRef: O, children: M });
  }), process.env.NODE_ENV !== "production" && (Yfi.displayName = "ComboboxList");
} });
import * as xcp from "./react-runtime/react/esm-index-production.js";
function TZS(t) {
  const e = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT);
  let n = null;
  for (; e.nextNode(); ) {
    const i = e.currentNode;
    i.nodeValue !== "" && (n = i);
  }
  return n;
}
function Acp() {
  const t = a6(), e = xcp.useRef(null);
  return xcp.useEffect(() => {
    if ($8t) return;
    const n = e.current;
    if (n == null) return;
    const i = TZS(n);
    if (i == null) return;
    const r = i.nodeValue ?? "", s = `${r}${Rcp}`;
    return i.nodeValue = s, t.start(Pcp, () => {
      i.nodeValue === s && (i.nodeValue = r);
    }), () => {
      t.clear(), i.nodeValue === s && (i.nodeValue = r);
    };
  }, [e, t]), e;
}
var Rcp, Pcp, 