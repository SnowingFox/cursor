// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InputBoxDiffSelection.js range:27333838..27338194
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, pi, KVt, gs, ta, oRe, ARk, vW, ab, rAi, vo, MRn
// wrapper-init: RRk
// hoisted-owner: InputBoxDocSelection.js (app-out-vs-workbench-workbench-glass-main-js:4754); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

RRk = L({ "InputBoxDiffSelection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), KVt(), gs(), ta(), oRe(), ARk(), vW(), ab(), rAi(), vo(), MRn(), rIg = wt("<div>"), Cgl = wt("<span>"), sIg = wt("<div class=input-box-code-selection-collapse-toggle>"), oIg = wt("<div class=input-box-code-selection><div>"), aIg = (t, e, n, i, r) => {
    const s = vt(() => i ?? 12), o = vt(() => r ?? 24), [a, l] = Wt(true), c = T_t(() => (() => {
      var C = rIg();
      return C.style.setProperty("width", "100%"), C.style.setProperty("height", "100%"), C.style.setProperty("box-sizing", "border-box"), C;
    })())(), d = e.instantiationService.createChild(new fW([sne, new Sgl(new VVt(c))])).createInstance(BQ, c, { ...Dus.getEditorOptions(e.configurationService), fontSize: (e.configurationService.getValue("editor.fontSize") ?? 12) * 0.8 }, { originalEditor: { isSimpleWidget: true }, modifiedEditor: { isSimpleWidget: true } });
    d.custom = true, d.layout();
    let h = rml(), p = rml(), g = [], f = [];
    for (const C of t.diffs) {
      g.push(`--- a/${C.from}`), g.push(`+++ b/${C.to}`), f.push(`--- a/${C.from}`), f.push(`+++ b/${C.to}`);
      for (const T of C.chunks) {
        g.push(T.content), f.push(T.content);
        for (const I of T.lines) I[0] === "+" ? f.push(I) : (I[0] === "-" || f.push(I), g.push(I));
      }
    }
    const _ = Math.max(g.length, f.length), b = vt(() => _ > s()), y = e.languageService.createById("diff"), S = e.modelService.createModel(g.join(`
`), y, h, true, true, true), k = e.modelService.createModel(f.join(`
`), y, p, true, true, true);
    return d.setModel({ original: S, modified: k }), Xc(() => {
      let C = 0;
      const T = e.window.setInterval(() => {
        d.layout(), C++, C >= 100 && e.window.clearInterval(T);
      }, 10);
    }), Cn(() => {
      !a() || !b() ? d.updateOptions({ scrollbar: { vertical: "auto", verticalScrollbarSize: 10, horizontal: "auto", handleMouseWheel: true, alwaysConsumeMouseWheel: true, horizontalScrollbarSize: 10 } }) : (d.updateOptions({ scrollbar: { vertical: "hidden", verticalScrollbarSize: 0, horizontal: "hidden", handleMouseWheel: false, alwaysConsumeMouseWheel: false, horizontalScrollbarSize: 0 } }), d.getModifiedEditor().setScrollTop(0), d.getModifiedEditor().setScrollLeft(0));
    }), On(() => {
      d.dispose(), S.dispose(), k.dispose(), c.remove();
    }), Ee(Ut, { get when() {
      return g.length > 0 || f.length > 0;
    }, get children() {
      var C = oIg(), T = C.firstChild;
      return T.style.setProperty("white-space", "pre"), T.style.setProperty("padding", "0.5rem"), T.style.setProperty("padding-top", "0.25rem"), T.style.setProperty("padding-right", "0px"), T.style.setProperty("padding-left", "0.25rem"), Le(T, c, null), Le(T, Ee(Ut, { get when() {
        return b();
      }, get children() {
        var I = sIg();
        return I.addEventListener("click", () => {
          l(!a());
        }), Le(I, Ee(e2, { get children() {
          return [Ee(Bp, { get when() {
            return a();
          }, get children() {
            var A = Cgl();
            return xn(() => Er(A, Gn.asClassName(yt.chevronDown))), A;
          } }), Ee(Bp, { get when() {
            return !a();
          }, get children() {
            var A = Cgl();
            return xn(() => Er(A, Gn.asClassName(yt.chevronUp))), A;
          } })];
        } })), I;
      } }), null), xn((I) => {
        var A = { position: "relative", overflow: "hidden", ...n }, P = b() ? a() ? `${19 * s()}px` : `${19 * Math.min(_, o()) + 10}px` : `${19 * _ + 10}px`, M = a() ? "0rem" : "1rem";
        return I.e = Ea(C, A, I.e), P !== I.t && ((I.t = P) != null ? T.style.setProperty("height", P) : T.style.removeProperty("height")), M !== I.a && ((I.a = M) != null ? T.style.setProperty("padding-bottom", M) : T.style.removeProperty("padding-bottom")), I;
      }, { e: void 0, t: void 0, a: void 0 }), C;
    } });
  };
} });
function lIg(t) {
  const e = Gr(), [n, i] = Wt();
  return Cn(() => {
    n() === void 0 && SXd(e.aiService, e.reactiveStorageService, t.selection).then((r) => {
      i(r);
    });
  }), Ee(Ut, { get when() {
    return zr(() => !!(n() && n()?.doc))() && (n()?.doc?.pages?.length ?? 0) > 0;
  }, get children() {
    return Egl(n(), e, t.minHeight, t.maxHeight);
  } });
}
var Tgl, cIg, uIg, Egl, 