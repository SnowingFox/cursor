// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: HelloWorldSection.js range:39157250..39158042
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.713Z
olC = L({ "HelloWorldSection.js"() {
  "use strict";
  E(), at(), at(), at(), mk(), pi(), aS(), rlC(), PKv = wt("<div><div><h2>Simple React Hello World</h2><p>Below counter is implemented in React and renders a signal from SolidJS</p><button>Increment SolidJS count");
} });
function alC() {
  const t = Gr();
  return Ee(pk, { title: "Hidden States", get children() {
    var e = MKv(), n = e.firstChild, i = n.firstChild;
    return e.style.setProperty("display", "flex"), e.style.setProperty("flex-direction", "column"), e.style.setProperty("gap", "20px"), i.style.setProperty("margin-bottom", "10px"), Le(n, Ee(hp, { get codicon() {
      return yt.play;
    }, title: "Trigger popup", onClick: () => {
      t.cppService.setShowingCppUpsell(true);
    } }), null), e;
  } });
}
var MKv, 