// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerToolbarNotebookGroup.js range:30059023..30060906
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, pi, gs, Ul, fn, Pie, vo, cVe, xgl, F6, ZRn, yme, ZVt, rC, LIl, Tms
// wrapper-init: L$k
// hoisted-owner: ComposerToolbarFileList.js (app-out-vs-workbench-workbench-glass-main-js:5344); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

L$k = L({ "ComposerToolbarNotebookGroup.js"() {
  "use strict";
  E(), at(), at(), at(), pi(), gs(), Ul(), fn(), Pie(), vo(), cVe(), xgl(), F6(), ZRn(), yme(), ZVt(), rC(), LIl(), Tms(), jcf = wt("<span>"), $cf = wt('<span class="text-[10px] tabular-nums inline-flex gap-0.5">'), Hcf = wt("<div class=composer-file-list-item><div><span>");
} });
function O$k(t) {
  const e = Gr(), n = M$k(t.composerDataHandle), [i, r] = Wt(rl()?.innerHeight ?? 800);
  Xc(() => {
    const u = rl();
    if (!u) return;
    const d = () => r(u.innerHeight);
    u.addEventListener("resize", d), On(() => {
      u.removeEventListener("resize", d);
    });
  });
  const [s] = F9e(e.diffChangeSourceRegistry.descriptorsObservable), o = vt(() => (s(), e.composerCodeBlockService.hasPendingDiffs(t.composerDataHandle()))), a = vt(() => t.groupedFiles.notebookGroups), l = vt(() => t.groupedFiles.standaloneFiles), c = vt(() => fXg(l()));
  return (() => {
    var u = Wcf();
    return u.style.setProperty("padding", "2px 4px 4px 4px"), u.style.setProperty("contain", "paint"), Le(u, Ee(ilt, { useResizeObserver: true, get maxHeight() {
      return i() * 0.5;
    }, contentStyle: { display: "flex", "flex-direction": "column" }, children: (d) => (() => {
      var h = Gcf(), p = d;
      return typeof p == "function" ? zu(p, h) : d = h, Le(h, Ee(Su, { get each() {
        return Object.values(a());
      }, children: (g) => Ee(N$k, { get composerDataHandle() {
        return t.composerDataHandle;
      }, cellUris: g, get hasPendingEdits() {
        return o();
      } }) }), null), Le(h, Ee(Su, { get each() {
        return l();
      }, children: (g) => Ee(T$k, { get composerDataHandle() {
        return t.composerDataHandle;
      }, file: g, getFileChangedInfo: () => n()[g], get displayName() {
        return c()[g];
      } }) }), null), h;
    })() })), u;
  })();
}
var Wcf, Gcf, 