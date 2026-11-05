// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ChatErrorSection.js range:38944489..38946242
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, Hu, o_l
// wrapper-init: KoC
// hoisted-owner: CheckboxesSection.js (app-out-vs-workbench-workbench-glass-main-js:7726); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

KoC = L({ "ChatErrorSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), Hu(), o_l(), mzv = wt("<div><h2>Chat Error Examples</h2><h3>Default Error</h3><div></div><h3>Error with Retry Button</h3><div></div><h3>Error with Custom Action</h3><div></div><h3>Error with Both Retry and Custom Action</h3><div></div><h3>Outdated Client Error</h3><div></div><h3>Error with Custom Buttons</h3><div></div><h3>Error with Client Action Buttons</h3><div>");
} });
function YoC() {
  const t = jp(), [e, n] = Wt(t.get(Y9i)), [i, r] = Wt(t.get(X9i)), [s, o] = Wt(t.get(Z9i));
  On(t.sub(Y9i, () => n(t.get(Y9i)))), On(t.sub(X9i, () => r(t.get(X9i)))), On(t.sub(Z9i, () => o(t.get(Z9i))));
  const a = (u) => t.set(Y9i, u), l = (u) => t.set(X9i, u), c = (u) => t.set(Z9i, u);
  return Ee(pk, { title: "Checkboxes", get children() {
    return [(() => {
      var u = gzv(), d = u.firstChild;
      return u.style.setProperty("display", "flex"), u.style.setProperty("gap", "10px"), u.style.setProperty("align-items", "center"), Le(u, Ee(tye, { get value() {
        return e();
      }, onChange: a, size: "small" }), d), u;
    })(), (() => {
      var u = fzv(), d = u.firstChild;
      return u.style.setProperty("display", "flex"), u.style.setProperty("gap", "10px"), u.style.setProperty("align-items", "center"), Le(u, Ee(tye, { get value() {
        return i();
      }, onChange: l, size: "medium" }), d), u;
    })(), (() => {
      var u = vzv(), d = u.firstChild;
      return u.style.setProperty("display", "flex"), u.style.setProperty("gap", "10px"), u.style.setProperty("align-items", "center"), Le(u, Ee(tye, { get value() {
        return s();
      }, onChange: c, size: "large" }), d), u;
    })()];
  } });
}
var gzv, fzv, vzv, Y9i, X9i, Z9i, 