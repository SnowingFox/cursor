// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxInternalDismissButton.js range:16734886..16735623
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.547Z
ycp = L({ "ComboboxInternalDismissButton.js"() {
  E(), m_e(), WHe(), VS(), Y_e(), Cz(), Zb(), Y8r = pZS.forwardRef(function(e, n) {
    const i = x0e(), { buttonRef: r, getButtonProps: s } = wz({ native: false }), o = Ioe(n, r);
    function a(c) {
      i.state.setOpen(false, zd(Tli, c.nativeEvent, c.currentTarget));
    }
    const l = s({ onClick: a });
    return mZS("span", { ref: o, ...l, "aria-label": "Dismiss", tabIndex: void 0, style: MSt });
  }), process.env.NODE_ENV !== "production" && (Y8r.displayName = "ComboboxInternalDismissButton");
} });
import * as qkn from "./react-runtime/react/esm-index-production.js";
import { jsx as Scp, jsxs as gZS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var X8r, 