// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: IanDevSection.js range:39167043..39169864
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.719Z
_lC = L({ "IanDevSection.js"() {
  "use strict";
  E(), at(), at(), mk(), FKv = wt("<div><h1>Ian Dev");
} });
function blC() {
  const t = Gr(), e = jp(), [n, i] = Wt(e.get(iBi));
  On(e.sub(iBi, () => i(e.get(iBi))));
  const r = (u) => e.set(iBi, u), s = Object.entries(yt), { showHover: o, hideHover: a } = L6(), l = () => {
    const u = n().toLowerCase();
    return s.filter(([d]) => d.toLowerCase().includes(u));
  }, c = (u) => {
    t.clipboardService.writeText(u);
  };
  return Ee(pk, { title: "Icon Gallery", style: { padding: "8px" }, get children() {
    var u = UKv(), d = u.firstChild, h = d.nextSibling;
    return u.style.setProperty("display", "flex"), u.style.setProperty("flex-direction", "column"), u.style.setProperty("gap", "8px"), u.style.setProperty("width", "100%"), u.style.setProperty("height", "100%"), u.style.setProperty("overflow", "hidden"), d.addEventListener("input", (p) => r(p.currentTarget.value)), d.style.setProperty("padding", "4px 6px"), d.style.setProperty("font-size", "13px"), d.style.setProperty("background-color", "var(--vscode-input-background)"), d.style.setProperty("color", "var(--vscode-input-foreground)"), d.style.setProperty("border", "1px solid var(--vscode-input-border)"), d.style.setProperty("border-radius", "2px"), h.style.setProperty("flex", "1"), h.style.setProperty("overflow", "hidden"), Le(h, Ee(ME, { scrollingDirection: "vertical", style: { height: "100%", width: "100%" }, get children() {
      var p = BKv();
      return p.style.setProperty("display", "grid"), p.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(40px, 1fr))"), p.style.setProperty("gap", "4px"), p.style.setProperty("padding", "4px"), Le(p, Ee(Su, { get each() {
        return l();
      }, children: ([g, f]) => (() => {
        var _ = jKv(), b = _.firstChild, y = b.nextSibling;
        return _.addEventListener("click", () => c(g)), BM(_, "mouseleave", a), _.addEventListener("mouseenter", (S) => o({ content: g, target: S.currentTarget })), _.style.setProperty("display", "flex"), _.style.setProperty("flex-direction", "column"), _.style.setProperty("align-items", "center"), _.style.setProperty("justify-content", "center"), _.style.setProperty("text-align", "center"), _.style.setProperty("padding", "4px"), _.style.setProperty("border-radius", "2px"), _.style.setProperty("height", "40px"), _.style.setProperty("font-size", "12px"), _.style.setProperty("cursor", "pointer"), b.style.setProperty("font-size", "16px"), y.style.setProperty("font-size", "7px"), y.style.setProperty("margin-top", "2px"), y.style.setProperty("overflow", "hidden"), y.style.setProperty("text-overflow", "ellipsis"), y.style.setProperty("max-width", "100%"), Le(y, g), xn(() => Er(b, Gn.asClassName(f))), _;
      })() })), p;
    } })), u;
  } });
}
var BKv, UKv, jKv, iBi, 