// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EverythingSearchSection.js range:39145386..39147844
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.661Z
VaC = L({ "EverythingSearchSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), fn(), rC(), vo(), $uc(), a_l(), sTg(), Ien(), hKv(), eD(), REt(), mk(), pKv = wt("<div tabindex=0>"), mKv = wt("<div>Loading..."), gKv = wt("<div class=gallery-item><span class=gallery-item-title></span><span class=gallery-item-subtitle>"), Huc = wt("<div>"), fKv = wt("<div><div><input type=text placeholder=Search...></div><div><div>"), vKv = wt("<div><div>"), Wuc = "everythingSearchModes", _Kv = new Set(Object.values(xee).filter((t) => typeof t == "number"));
} });
function KaC() {
  const e = Gr().gitContextService, n = jp(), i = Ca(n, Guc), r = (h) => n.set(Guc, h), s = Ca(n, quc), o = (h) => n.set(quc, h), a = Ca(n, zuc), l = (h) => n.set(zuc, h), [c, u] = Wt(null);
  async function d() {
    const h = i();
    if (!h) {
      l("Please enter a file path");
      return;
    }
    o(true), l(null);
    try {
      const p = await e?.areFilesCheckedInToRemote(h);
      u(p || {});
    } catch (p) {
      l(`Error: ${p instanceof Error ? p.message : String(p)}`), u(null);
    } finally {
      o(false);
    }
  }
  return Ee(pk, { title: "File Checked In Status", get children() {
    var h = SKv(), p = h.firstChild, g = p.firstChild, f = g.nextSibling, _ = f.firstChild;
    return _.addEventListener("keydown", (b) => {
      b.key === "Enter" && d();
    }), _.addEventListener("input", (b) => r(b.currentTarget.value)), Le(f, Ee(ol, { variant: "primary", onClick: d, get isLoading() {
      return s();
    }, get disabled() {
      return s() || !i();
    }, children: "Check Status" }), null), Le(h, Ee(Ut, { get when() {
      return a();
    }, get children() {
      var b = bKv();
      return Le(b, a), b;
    } }), null), Le(h, Ee(Ut, { get when() {
      return zr(() => !!c())() && Object.keys(c() || {}).length > 0;
    }, get children() {
      var b = yKv();
      return Le(b, Ee(Su, { get each() {
        return Object.entries(c() || {});
      }, children: ([y, S]) => (() => {
        var k = kKv(), C = k.firstChild, T = C.firstChild, I = C.nextSibling;
        return Le(C, y, T), Er(I, S ? "text-[var(--vscode-gitDecoration-addedResourceForeground)]" : "text-[var(--vscode-gitDecoration-untrackedResourceForeground)]"), Le(I, S ? "Checked in to remote" : "Not checked in to remote"), k;
      })() })), b;
    } }), null), xn(() => _.value = i()), h;
  } });
}
var bKv, yKv, SKv, kKv, Guc, quc, zuc, 