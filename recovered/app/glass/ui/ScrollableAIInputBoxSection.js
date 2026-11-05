// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ScrollableAIInputBoxSection.js range:39310988..39313268
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.965Z
var NcC = L({ "ScrollableAIInputBoxSection.js"() {
  "use strict";
  E(), at(), at(), nIt(), Sz(), L2i(), mk();
} });
function LcC() {
  const t = f9e(), e = jp(), [n, i] = Wt(e.get(uBi)), [r, s] = Wt(e.get(dBi));
  On(e.sub(uBi, () => i(e.get(uBi)))), On(e.sub(dBi, () => s(e.get(dBi))));
  const o = (u) => e.set(uBi, u), a = (u) => e.set(dBi, u), [l, c] = Wt([]);
  return On(() => {
    t.dispose();
  }), Ee(pk, { title: "Scrollable Div", get children() {
    return [(() => {
      var u = cBi();
      return u.style.setProperty("display", "flex"), u.style.setProperty("flex-direction", "row"), u.style.setProperty("gap", "6px"), u.style.setProperty("align-items", "center"), Le(u, Ee(hp, { onClick: () => o(n() + 1), children: "Scroll to bottom" }), null), Le(u, Ee(hp, { onClick: () => a(!r()), get children() {
        return r() ? "Expand" : "Shrink";
      } }), null), Le(u, Ee(hp, { onClick: () => c(l().concat(Math.floor(Math.random() * 300))), children: "Add new stuff" }), null), u;
    })(), (() => {
      var u = cBi();
      return u.style.setProperty("height", "800px"), u.style.setProperty("width", "400px"), u.style.setProperty("background-color", "red"), u.style.setProperty("overflow", "hidden"), Le(u, Ee(ME, { scrollable: t, scrollingDirection: "vertical", style: { height: "100%", width: "100%" }, get scrollToBottomTrigger() {
        return n();
      }, autoScrollToBottom: true, get children() {
        return [(() => {
          var d = cBi();
          return d.style.setProperty("width", "100%"), d.style.setProperty("background-image", "linear-gradient(to bottom, #000000, #ffffff)"), xn((h) => (h = r() ? "2000px" : "1000px") != null ? d.style.setProperty("height", h) : d.style.removeProperty("height")), d;
        })(), Ee(Su, { get each() {
          return l();
        }, children: (d, h) => (() => {
          var p = cBi();
          return `${d}px` != null ? p.style.setProperty("height", `${d}px`) : p.style.removeProperty("height"), p.style.setProperty("width", "100%"), Le(p, h), xn((g) => (g = `hsl(${h() * 360 / l().length}, 100%, 50%)`) != null ? p.style.setProperty("background-color", g) : p.style.removeProperty("background-color")), p;
        })() }), qXv()];
      } })), u;
    })()];
  } });
}
var cBi, qXv, uBi, dBi, 