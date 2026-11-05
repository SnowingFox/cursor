// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuPositioner.js range:14543579..14548967
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.803Z
s6h = L({ "MenuPositioner.js"() {
  E(), cbn(), jv(), M7(), WUt(), F_e(), pbn(), dbn(), cci(), n6h(), k_e(), HUt(), VS(), lci(), QRr(), gbn(), E2r(), Zb(), vhe(), AOr = GUt.forwardRef(function(e, n) {
    const { anchor: i, positionMethod: r = "absolute", className: s, render: o, side: a, align: l, sideOffset: c = 0, alignOffset: u = 0, collisionBoundary: d = "clipping-ancestors", collisionPadding: h = 5, arrowPadding: p = 5, sticky: g = false, disableAnchorTracking: f = false, collisionAvoidance: _ = DRr, style: b, ...y } = e, { store: S } = O_e(), k = KyS(), C = mSn(true), T = S.useState("parent"), I = S.useState("floatingRootContext"), A = S.useState("floatingTreeRoot"), P = S.useState("mounted"), M = S.useState("open"), O = S.useState("modal"), N = S.useState("openMethod"), U = S.useState("activeTriggerElement"), j = S.useState("transitionStatus"), $ = S.useState("positionerElement"), H = S.useState("instantType"), G = S.useState("hasViewport"), q = S.useState("lastOpenChangeReason"), K = S.useState("floatingNodeId"), V = S.useState("floatingParentNodeId"), Y = I.useState("domReferenceElement"), J = GUt.useRef(null), Q = ZRr($, false, false);
    let te = i, ee = c, re = u, ie = l, oe = _;
    T.type === "context-menu" && (te = i ?? T.context?.anchor, ie = ie ?? "start", !a && ie !== "center" && (re = e.alignOffset ?? 2, ee = e.sideOffset ?? -5));
    let se = a, le = ie;
    T.type === "menu" ? (se = se ?? "inline-end", le = le ?? "start", oe = e.collisionAvoidance ?? Rli) : T.type === "menubar" && (se = se ?? (T.context.orientation === "vertical" ? "inline-end" : "bottom"), le = le ?? "start");
    const ce = T.type === "context-menu", ae = hbn({ anchor: te, floatingRootContext: I, positionMethod: C ? "fixed" : r, mounted: P, side: se, sideOffset: ee, align: le, alignOffset: re, arrowPadding: ce ? 0 : p, collisionBoundary: d, collisionPadding: h, sticky: g, nodeId: K, keepMounted: k, disableAnchorTracking: f, collisionAvoidance: oe, shiftCrossAxis: ce && !("side" in oe && oe.side === "flip"), externalTree: A, adaptiveOrigin: G ? aci : void 0 });
    GUt.useEffect(() => {
      function _e(Ce) {
        Ce.open && (Ce.parentNodeId === K && S.set("hoverEnabled", false), Ce.nodeId !== K && Ce.parentNodeId === S.select("floatingParentNodeId") && S.setOpen(false, zd(J_n)));
      }
      return A.events.on("menuopenchange", _e), () => {
        A.events.off("menuopenchange", _e);
      };
    }, [S, A.events, K]), GUt.useEffect(() => {
      if (S.select("floatingParentNodeId") == null) return;
      function _e(Ce) {
        if (Ce.open || Ce.nodeId !== S.select("floatingParentNodeId")) return;
        const Se = Ce.reason ?? J_n;
        S.setOpen(false, zd(Se));
      }
      return A.events.on("menuopenchange", _e), () => {
        A.events.off("menuopenchange", _e);
      };
    }, [A.events, S]);
    const de = a6();
    GUt.useEffect(() => {
      M || de.clear();
    }, [M, de]), GUt.useEffect(() => {
      function _e(Ce) {
        if (!(!M || Ce.nodeId !== S.select("floatingParentNodeId"))) if (Ce.target && U && U !== Ce.target) {
          const Se = S.select("closeDelay");
          Se > 0 ? de.isStarted() || de.start(Se, () => {
            S.setOpen(false, zd(J_n));
          }) : S.setOpen(false, zd(J_n));
        } else de.clear();
      }
      return A.events.on("itemhover", _e), () => {
        A.events.off("itemhover", _e);
      };
    }, [A.events, M, U, S, de]), GUt.useEffect(() => {
      const _e = { open: M, nodeId: K, parentNodeId: V, reason: S.select("lastOpenChangeReason") };
      A.events.emit("menuopenchange", _e);
    }, [A.events, M, S, K, V]), su(() => {
      const _e = Y, Ce = J.current;
      if (_e && (J.current = _e), Ce && _e && _e !== Ce) {
        S.set("instantType", void 0);
        const Se = new AbortController();
        return Q(() => {
          S.set("instantType", "trigger-change");
        }, Se.signal), () => {
          Se.abort();
        };
      }
    }, [Y, Q, S]);
    const he = { open: M, side: ae.side, align: ae.align, anchorHidden: ae.anchorHidden, nested: T.type === "menu", instant: H }, ge = T.type === "menubar" && T.context.modal;
    T2r(M && (ge || O && q !== E4), N === "touch", $, U);
    const ve = mbn(e, he, { styles: ae.positionerStyles, transitionStatus: j, props: y, refs: [n, S.useStateSetter("positionerElement")], hidden: !P, inert: !M }), fe = P && T.type !== "menu" && (T.type !== "menubar" && O && q !== E4 || T.type === "menubar" && T.context.modal);
    let Te = null;
    return T.type === "menubar" ? Te = T.context.contentElement : T.type === void 0 && (Te = U), XyS(wOr.Provider, { value: ae, children: [fe && Zpa(l7t, { ref: T.type === "context-menu" || T.type === "nested-context-menu" ? T.context.internalBackdropRef : null, inert: lbn(!M), cutout: Te }), Zpa(zQo, { id: K, children: Zpa(ubn, { elementsRef: S.context.itemDomElements, labelsRef: S.context.itemLabels, children: ve }) })] });
  }), process.env.NODE_ENV !== "production" && (AOr.displayName = "MenuPositioner");
} });
import * as o6h from "./react-runtime/react/esm-index-production.js";
function ZyS() {
  const t = o6h.useContext(ROr);
  if (t === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: MenuRadioGroupContext is missing. MenuRadioGroup parts must be placed within <Menu.RadioGroup>." : Oy(34));
  return t;
}
var ROr, 