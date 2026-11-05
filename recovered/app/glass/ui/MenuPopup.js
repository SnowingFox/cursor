// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuPopup.js range:14540124..14542702
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.798Z
VyS = L({ "MenuPopup.js"() {
  E(), F_e(), WUt(), Om(), I4(), l6(), qQ(), VS(), YJo(), g7t(), u7t(), l2r(), Zb(), Dli(), e6h = { ...T_e, ...D7 }, Xpa = Ypa.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, finalFocus: o, ...a } = e, { store: l } = O_e(), { side: c, align: u } = gSn(), d = VJo(true) != null, h = l.useState("open"), p = l.useState("transitionStatus"), g = l.useState("popupProps"), f = l.useState("mounted"), _ = l.useState("instantType"), b = l.useState("activeTriggerElement"), y = l.useState("parent"), S = l.useState("lastOpenChangeReason"), k = l.useState("rootId"), C = l.useState("floatingRootContext"), T = l.useState("floatingTreeRoot"), I = l.useState("closeDelay"), A = l.useState("activeTriggerElement"), P = l.useState("hoverEnabled"), M = l.useState("disabled"), O = l.useState("openMethod"), N = y.type === "context-menu";
    GQ({ open: h, ref: l.context.popupRef, onComplete() {
      h && l.context.onOpenChangeComplete?.(true);
    } }), Ypa.useEffect(() => {
      function G(q) {
        l.setOpen(false, zd(q.reason, q.domEvent));
      }
      return T.events.on("close", G), () => {
        T.events.off("close", G);
      };
    }, [T.events, l]), a2r(C, { enabled: P && !M && !N && y.type !== "menubar", closeDelay: I });
    const U = Ypa.useCallback((G) => {
      l.set("popupElement", G);
    }, [l]), j = { transitionStatus: p, side: c, align: u, open: h, nested: y.type === "menu", instant: _ }, $ = Lm("div", e, { state: j, ref: [n, l.context.popupRef, U], stateAttributesMapping: e6h, props: [g, { onKeyDown(G) {
      d && $St.has(G.key) && G.stopPropagation();
    } }, c7t(p), a, { "data-rootownerid": k }] });
    let H = y.type === void 0 || N;
    return (b || y.type === "menubar" && S !== Z_n) && (H = true), zyS(Mli, { context: C, openInteractionType: O, modal: N, disabled: !f, returnFocus: o === void 0 ? H : o, initialFocus: y.type !== "menu", restoreFocus: true, externalTree: y.type !== "menubar" ? T : void 0, previousFocusableElement: A, nextFocusableElement: y.type === void 0 ? l.context.triggerFocusTargetRef : void 0, beforeContentFocusGuardRef: y.type === void 0 ? l.context.beforeContentFocusGuardRef : void 0, children: $ });
  }), process.env.NODE_ENV !== "production" && (Xpa.displayName = "MenuPopup");
} });
import * as t6h from "./react-runtime/react/esm-index-production.js";
function KyS() {
  const t = t6h.useContext(IOr);
  if (t === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Menu.Portal> is missing." : Oy(32));
  return t;
}
var IOr, 