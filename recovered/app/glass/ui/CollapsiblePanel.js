// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CollapsiblePanel.js range:15029218..15032932
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.530Z
mxS = L({ "CollapsiblePanel.js"() {
  E(), jv(), Vvn(), DXd(), Om(), fva(), B$h(), dxS(), hxS(), Sva = pxS.forwardRef(function(e, n) {
    const { className: i, hiddenUntilFound: r, keepMounted: s, render: o, id: a, style: l, ...c } = e;
    process.env.NODE_ENV !== "production" && su(() => {
      r && s === false && zvn("The `keepMounted={false}` prop on `Collapsible.Panel` is ignored when `hiddenUntilFound` is enabled, since the panel must remain mounted while closed.");
    }, [r, s]);
    const { mounted: u, onOpenChange: d, open: h, panelId: p, setMounted: g, setPanelIdState: f, setOpen: _, state: b, transitionStatus: y } = R$h(), S = r ?? false, k = s ?? false;
    su(() => {
      if (a) return f(a), () => {
        f(void 0);
      };
    }, [a, f]);
    const { height: C, props: T, ref: I, shouldPreventOpenAnimation: A, shouldRender: P, transitionStatus: M, width: O } = lxS({ externalRef: n, hiddenUntilFound: S, id: p, keepMounted: k, mounted: u, onOpenChange: d, open: h, setMounted: g, setOpen: _, transitionStatus: y }), N = { ...b, transitionStatus: M }, U = MXd(l, N), j = Lm("div", { ...e, style: void 0 }, { state: N, ref: I, props: [T, { style: { [yva.collapsiblePanelHeight]: C === void 0 ? "auto" : `${C}px`, [yva.collapsiblePanelWidth]: O === void 0 ? "auto" : `${O}px` } }, c, U ? { style: U } : void 0, A ? { style: { animationName: "none" } } : void 0], stateAttributesMapping: vva });
    return P ? j : null;
  }), process.env.NODE_ENV !== "production" && (Sva.displayName = "CollapsiblePanel");
} });
import { jsx as gxS, jsxs as fxS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as vxS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function $$h(t) {
  return [kva.root, wva[t]];
}
function VWe(t) {
  const e = vxS(14), { children: n, color: i, truncation: r } = t, o = (r === void 0 ? "none" : r) === "ellipsis";
  let a;
  e[0] !== i || e[1] !== o ? (a = gn(H$h.root, kva.root, G$h.root, wva[i], o ? W$h.root : null), e[0] = i, e[1] = o, e[2] = a) : a = e[2];
  const l = a;
  let c;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = { 0: { className: "ui-10l6tqk ui-13vifvy ui-3m8u43 ui-a55v55 ui-u96u03 ui-1s85apg ui-9z5f4a ui-kio4u3 ui-101abm8 ui-ryxfnj ui-js5rrx ui-1heor9g ui-ggjnk3 ui-g7jpbn ui-1j33zt9 ui-rae60k ui-c8icb0 ui-1cpjm7i ui-1hmns74 ui-1y3wzot ui-b0dqd5 ui-hq5o37 ui-1wlytlt ui-x3kj9s ui-kk1bqk ui-1s928wv ui-1j6awrg ui-1m1drc7 ui-1xrz1ek ui-17cx49 ui-1egbspo ui-2p1ol6 ui-1gj4gpv ui-1da8gxw ui-2q1x1w ui-1i83b49 ui-1ff24d5 ui-mlyeqh ui-15y3wy1 ui-13ee8us" }, 1: { className: "ui-10l6tqk ui-13vifvy ui-3m8u43 ui-a55v55 ui-u96u03 ui-1s85apg ui-9z5f4a ui-kio4u3 ui-101abm8 ui-ryxfnj ui-js5rrx ui-1heor9g ui-g7jpbn ui-1j33zt9 ui-rae60k ui-c8icb0 ui-1cpjm7i ui-1hmns74 ui-1y3wzot ui-b0dqd5 ui-hq5o37 ui-1wlytlt ui-x3kj9s ui-kk1bqk ui-1s928wv ui-1j6awrg ui-1m1drc7 ui-1xrz1ek ui-17cx49 ui-1egbspo ui-2p1ol6 ui-1gj4gpv ui-1da8gxw ui-2q1x1w ui-1i83b49 ui-1ff24d5 ui-mlyeqh ui-15y3wy1 ui-13ee8us ui-15bjb6t ui-lyipyv ui-jlip5" } }, e[3] = c) : c = e[3];
  const u = c[!!o << 0], d = o ? "ellipsis" : void 0;
  let h;
  e[4] !== n || e[5] !== u.className || e[6] !== u.style ? (h = gxS("span", { inert: true, "aria-hidden": true, className: u.className, style: u.style, children: n }), e[4] = n, e[5] = u.className, e[6] = u.style, e[7] = h) : h = e[7];
  let p;
  return e[8] !== n || e[9] !== l.className || e[10] !== l.style || e[11] !== d || e[12] !== h ? (p = fxS("span", { className: l.className, "data-truncation": d, style: l.style, children: [n, h] }), e[8] = n, e[9] = l.className, e[10] = l.style, e[11] = d, e[12] = h, e[13] = p) : p = e[13], p;
}
var H$h, W$h, kva, G$h, wva, 