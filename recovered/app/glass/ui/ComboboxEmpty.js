// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxEmpty.js range:16765639..16766180
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.542Z
Jcp = L({ "ComboboxEmpty.js"() {
  E(), Om(), Y_e(), Mcp(), l7r = HZS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, ...a } = e, { filteredItems: l } = bGe(), c = x0e(), u = Acp(), d = l.length === 0 ? o : null;
    return Lm("div", e, { ref: [n, c.state.emptyRef, u], props: [{ children: d, role: "status", "aria-live": "polite", "aria-atomic": true }, a] });
  }), process.env.NODE_ENV !== "production" && (l7r.displayName = "ComboboxEmpty");
} });
function O$t() {
  return bGe().filteredItems;
}
