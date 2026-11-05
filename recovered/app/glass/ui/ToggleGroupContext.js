// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToggleGroupContext.js range:7049957..7050680
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.075Z
InS = L({ "ToggleGroupContext.js"() {
  E(), zS(), aaa = zkh.createContext(void 0), process.env.NODE_ENV !== "production" && (aaa.displayName = "ToggleGroupContext");
} });
import * as xnS from "./react-runtime/react/esm-index-production.js";
function Vkh(t = {}) {
  const { highlightItemOnHover: e, highlightedIndex: n, onHighlightedIndexChange: i } = uKo(), { ref: r, index: s } = iWe(t), o = n === s, a = xnS.useRef(null), l = Ioe(r, a);
  return { compositeProps: { tabIndex: o ? 0 : -1, onFocus() {
    i(s);
  }, onMouseMove() {
    const u = a.current;
    if (!e || !u) return;
    const d = u.hasAttribute("disabled") || u.ariaDisabled === "true";
    !o && !d && u.focus();
  } }, compositeRef: l, index: s };
}
