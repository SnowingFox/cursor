// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxStatus.js range:16752570..16753238
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.560Z
IZS = L({ "ComboboxStatus.js"() {
  E(), Om(), Mcp(), rTa = EZS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, ...a } = e, l = Acp();
    return Lm("div", e, { ref: [n, l], props: [{ children: o, role: "status", "aria-live": "polite", "aria-atomic": true }, a] });
  }), process.env.NODE_ENV !== "production" && (rTa.displayName = "ComboboxStatus");
} });
import * as Dcp from "./react-runtime/react/esm-index-production.js";
function xZS() {
  const t = Dcp.useContext(J8r);
  if (t === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Combobox.Portal> is missing." : Oy(20));
  return t;
}
var J8r, 