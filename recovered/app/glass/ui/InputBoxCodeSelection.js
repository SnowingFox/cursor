// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InputBoxCodeSelection.js range:27318877..27322434
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.735Z
_gl = L({ "InputBoxCodeSelection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), ta(), vo(), MRn(), REt(), vgl = wt("<span>"), YEg = wt("<div class=input-box-code-selection-collapse-toggle>"), XEg = wt("<div class=input-box-code-selection><div><div>"), ZEg = (t) => {
    const e = Gr();
    let n;
    const i = vt(() => t.selection), r = vt(() => t.minLines ?? 12), s = vt(() => t.maxLines ?? 24), [o, a] = Wt(!t.startExpanded), [l, c] = Wt(false), [u, d] = Wt(null), h = vt(() => i().text), p = vt(() => h().startsWith("```") ? h().split(`
`).length - 2 : h().split(`
`).length), g = vt(() => p() > r());
    Cn(() => {
      const _ = i(), b = e.instantiationService.createInstance(Nle, n, { ...Nle.getEditorOptions(e.configurationService), fontSize: (e.configurationService.getValue("editor.fontSize") ?? 12) * 0.8 }, {});
      f(b), d(b), c(true), On(() => {
        b.getModel()?.dispose(), b.dispose();
      });
    });
    const f = (_) => {
      let b = "";
      const S = /```(\w*)/.exec(h());
      S && (b = S[1]);
      const k = e.languageService.createByLanguageNameOrFilepathOrFirstLine(b, null, void 0);
      let C = rml();
      const T = h().startsWith("```") ? h().split(`
`).slice(1, -1) : h().split(`
`), I = e.modelService.createModel(T.join(`
`), k, C, true, true, true);
      _.setModel(I);
    };
    return Cn(() => {
      const _ = u();
      _ && (!o() || !g() ? _.updateOptions({ hideCursorInOverviewRuler: true, scrollbar: { vertical: "auto", verticalScrollbarSize: 10, horizontal: "auto", handleMouseWheel: true, alwaysConsumeMouseWheel: true, horizontalScrollbarSize: 10 } }) : (_.updateOptions({ hideCursorInOverviewRuler: true, scrollbar: { vertical: "hidden", verticalScrollbarSize: 0, horizontal: "hidden", handleMouseWheel: false, alwaysConsumeMouseWheel: false, horizontalScrollbarSize: 0 } }), _.setScrollTop(0), _.setScrollLeft(0)));
    }), (() => {
      var _ = XEg(), b = _.firstChild, y = b.firstChild;
      b.style.setProperty("white-space", "pre"), b.style.setProperty("padding", "0.5rem"), b.style.setProperty("padding-top", "0.25rem");
      var S = n;
      return typeof S == "function" ? zu(S, y) : n = y, y.style.setProperty("width", "100%"), y.style.setProperty("height", "100%"), y.style.setProperty("box-sizing", "border-box"), Le(b, Ee(Ut, { get when() {
        return zr(() => !!l())() && g();
      }, get children() {
        var k = YEg();
        return k.addEventListener("click", () => {
          a(!o());
        }), Le(k, Ee(e2, { get children() {
          return [Ee(Bp, { get when() {
            return o();
          }, get children() {
            var C = vgl();
            return xn(() => Er(C, Gn.asClassName(yt.chevronDown))), C;
          } }), Ee(Bp, { get when() {
            return !o();
          }, get children() {
            var C = vgl();
            return xn(() => Er(C, Gn.asClassName(yt.chevronUp))), C;
          } })];
        } })), k;
      } }), null), xn((k) => {
        var C = { position: "relative", overflow: "hidden", ...t.style }, T = !g() || !o() ? `${19 * Math.min(p() + 1, s())}px` : `${19 * r()}px`, I = !l() || o() ? "0rem" : "1rem";
        return k.e = Ea(_, C, k.e), T !== k.t && ((k.t = T) != null ? b.style.setProperty("height", T) : b.style.removeProperty("height")), I !== k.a && ((k.a = I) != null ? b.style.setProperty("padding-bottom", I) : b.style.removeProperty("padding-bottom")), k;
      }, { e: void 0, t: void 0, a: void 0 }), _;
    })();
  };
} }), QEg, JEg, eIg, bgl, tIg, 