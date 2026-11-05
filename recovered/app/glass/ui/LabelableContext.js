// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LabelableContext.js range:6091230..6092427
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.768Z
VQ = L({ "LabelableContext.js"() {
  E(), vA(), v2r = Qah.createContext({ controlId: void 0, registerControlId: Ax, labelId: void 0, setLabelId: Ax, messageIds: [], setMessageIds: Ax, getDescriptionProps: (t) => t }), process.env.NODE_ENV !== "production" && (v2r.displayName = "LabelableContext");
} });
import * as wJo from "./react-runtime/react/esm-index-production.js";
function tit(t = {}) {
  const { id: e, implicit: n = false, controlRef: i } = t, { controlId: r, registerControlId: s } = zQ(), o = $I(e), a = n ? r : void 0, l = CW(() => /* @__PURE__ */ Symbol("labelable-control")), c = wJo.useRef(false), u = wJo.useRef(e != null), d = pu(() => {
    !c.current || s === Ax || (c.current = false, s(l.current, void 0));
  });
  return su(() => {
    if (s === Ax) return;
    let h;
    if (n) {
      const p = i?.current;
      Lb(p) && p.closest("label") != null ? h = e ?? null : h = a ?? o;
    } else if (e != null) u.current = true, h = e;
    else if (u.current) h = o;
    else {
      d();
      return;
    }
    if (h === void 0) {
      d();
      return;
    }
    c.current = true, s(l.current, h);
  }, [e, i, a, s, n, o, l, d]), wJo.useEffect(() => d, [d]), r ?? o;
}
