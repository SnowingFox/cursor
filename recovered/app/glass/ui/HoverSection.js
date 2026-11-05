// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: HoverSection.js range:39159561..39160185
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.717Z
ulC = L({ "HoverSection.js"() {
  "use strict";
  E(), at(), at(), Iw(), O6(), mk(), DKv = wt("<div>Hover Me"), NKv = wt("<div>Hover NotGoingAway");
} });
function dlC(t, e) {
  const n = document.createElement("div");
  n.style.display = "flex", n.style.height = e ? "100%" : "fit-content", n.style.width = "100%", n.style.boxSizing = "border-box";
  let i, r = false;
  const s = () => {
    i && i.dispose(), i = t(n), r = false;
  };
  return { getDom: () => ((r || !i) && s(), n), disposable: { dispose: () => {
    if (r = true, i) try {
      i.dispose();
    } catch {
    }
    n.remove();
  } }, domHeight: e };
}
