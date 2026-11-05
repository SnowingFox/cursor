// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Menu.js range:14738051..14740263
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.786Z
BW = L({ "Menu.js"() {
  "use strict";
  E(), QSS(), xma(), J6h(), p1S(), O4h(), OkS(), Jit(), iwS(), Aga(), hwS(), rma(), fSS(), hn = Object.assign(gwS, { Trigger: vwS, Content: _wS, Input: nkS, Item: XSS, LinkItem: ZSS, CheckboxItem: uwS, SwitchItem: dwS, RadioGroup: DkS, RadioItem: LkS, Separator: d1S, EmptyState: twS, LoadingState: nwS, Section: h1S, SubMenu: D9h, SubMenuTrigger: rwS, SubMenuContent: swS });
} });
import { jsx as Mga } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { createContext as bwS, useMemo as F9h, useRef as B9h, useLayoutEffect as ywS, useCallback as U9h, useContext as SwS } from "./react-runtime/react/esm-index-production.js";
function kwS(t, e) {
  t.reason = "outside-press", t.event = e;
}
function wwS({ children: t, open: e, onOpenChange: n, onOpenChangeComplete: i, closeOnSelect: r, returnFocusOnSelect: s = false }) {
  const o = e === void 0 ? void 0 : e !== null, a = e?.x, l = e?.y, c = F9h(() => a === void 0 || l === void 0 ? void 0 : Cch({ x: a, y: l }), [a, l]), u = B9h(c);
  ywS(() => {
    c !== void 0 && (u.current = c);
  }, [c]);
  const d = e === void 0 ? void 0 : c ?? u.current, { actionsRef: h, contextValue: p, handleOpenChange: g } = M6h({ componentName: "ContextMenu", controlledOpen: o, defaultOpen: false, closeOnSelect: r, returnFocusOnSelect: s, onOpenChange: n }), f = B9h(null), _ = U9h((T, I) => {
    const A = f.current;
    f.current = null, !T && I.reason === "imperative-action" && A !== null && kwS(I, A), g(T, I);
  }, [g]), { allowOutsidePress: b, close: y, isOpen: S } = p, k = U9h((T) => (T.stopPropagation(), !S || !b(T.nativeEvent) ? false : (f.current = T.nativeEvent, y(), f.current = null, true)), [b, y, S]), C = F9h(() => ({ close: y, positionerAnchor: d, onBackdropDismiss: k }), [y, k, d]);
  return Mga(BOr.Provider, { value: p, children: Mga(Dga.Provider, { value: C, children: Mga(vSS, { actionsRef: h, loopFocus: false, onOpenChange: _, onOpenChangeComplete: i, open: o, children: t }) }) });
}
function j9h(t) {
  const e = SwS(Dga);
  if (e === null) throw new Error(`ContextMenu.${t} must be used within ContextMenu`);
  return e;
}
function CwS() {
  return j9h("useClose").close;
}
var Dga, 