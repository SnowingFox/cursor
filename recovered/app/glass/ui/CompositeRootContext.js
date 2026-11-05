// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CompositeRootContext.js range:5325281..5326036
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.564Z
qIr = L({ "CompositeRootContext.js"() {
  E(), zS(), GIr = _Zd.createContext(void 0), process.env.NODE_ENV !== "production" && (GIr.displayName = "CompositeRootContext");
} });
import * as NFy from "./react-runtime/react/esm-index-production.js";
function LFy(t) {
  const { focusableWhenDisabled: e, disabled: n, composite: i = false, tabIndex: r = 0, isNativeButton: s } = t, o = i && e !== false, a = i && e === false;
  return { props: NFy.useMemo(() => {
    const c = { onKeyDown(u) {
      n && e && u.key !== "Tab" && u.preventDefault();
    } };
    return i || (c.tabIndex = r, !s && n && (c.tabIndex = e ? r : -1)), (s && (e || o) || !s && n) && (c["aria-disabled"] = n), s && (!e || a) && (c.disabled = n), c;
  }, [i, n, e, o, a, s, r]) };
}
