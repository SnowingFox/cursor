// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuCheckboxItemContext.js range:14532516..14533769
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.791Z
DyS = L({ "MenuCheckboxItemContext.js"() {
  E(), Upa = MyS.createContext(void 0), process.env.NODE_ENV !== "production" && (Upa.displayName = "MenuCheckboxItemContext");
} });
import * as NyS from "./react-runtime/react/esm-index-production.js";
function VFh(t) {
  const { closeOnClick: e, highlighted: n, id: i, nodeId: r, store: s, typingRef: o, itemRef: a, itemMetadata: l } = t, { events: c } = s.useState("floatingTreeRoot"), u = s.useState("open"), d = mSn(true), h = d !== void 0;
  return NyS.useMemo(() => ({ id: i, role: "menuitem", tabIndex: u && n ? 0 : -1, onKeyDown(p) {
    p.key === " " && o?.current && p.preventDefault();
  }, onMouseMove(p) {
    r && c.emit("itemhover", { nodeId: r, target: p.currentTarget });
  }, onClick(p) {
    e && c.emit("close", { domEvent: p, reason: qnt });
  }, onMouseUp(p) {
    if (d) {
      const g = d.initialCursorPointRef.current;
      if (d.initialCursorPointRef.current = null, h && g && Math.abs(p.clientX - g.x) <= 1 && Math.abs(p.clientY - g.y) <= 1 || h && !oRr && p.button === 2) return;
    }
    a.current && s.context.allowMouseUpTriggerRef.current && (!h || p.button === 2) && (!l || l.type === "regular-item") && a.current.click();
  } }), [e, n, i, c, r, u, s, o, a, d, h, l]);
}
