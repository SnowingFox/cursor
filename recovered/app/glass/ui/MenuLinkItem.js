// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuLinkItem.js range:14539113..14540124
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.797Z
qyS = L({ "MenuLinkItem.js"() {
  E(), F_e(), Om(), _A(), rWe(), WUt(), KFh(), Cz(), mne(), Kpa = JFh.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, label: o, closeOnClick: a = false, style: l, ...c } = e, u = JFh.useRef(null), d = iWe({ label: o }), p = gSn(true)?.context.nodeId, g = $I(s), { store: f } = O_e(), _ = f.useState("isActive", d.index), b = f.useState("itemProps"), y = f.context.typingRef, { getButtonProps: S, buttonRef: k } = wz({ native: false, composite: true }), C = VFh({ closeOnClick: a, highlighted: _, id: g, nodeId: p, store: f, typingRef: y, itemRef: u });
    function T(A) {
      return uB(C, A, S);
    }
    return Lm("a", e, { state: { highlighted: _ }, props: [b, c, T], ref: [u, k, n, d.ref] });
  }), process.env.NODE_ENV !== "production" && (Kpa.displayName = "MenuLinkItem");
} });
import * as Ypa from "./react-runtime/react/esm-index-production.js";
import { jsx as zyS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var e6h, Xpa, 