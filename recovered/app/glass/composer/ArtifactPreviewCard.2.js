// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ArtifactPreviewCard.js range:38889525..38893364
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:20:20.534Z
// deps: E, at, at, at, at, at, at, Am, pi, vo, e_, nXt
// wrapper-init: PoC
// hoisted-owner: ArtifactsTable.js (app-out-vs-workbench-workbench-glass-main-js:7719); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

PoC = L({ "ArtifactPreviewCard.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), Am(), pi(), vo(), e_(), nXt(), vqv = wt("<div>No preview available (unsupported extension: <!>)"), _qv = wt("<div><div></div><span>Loading..."), bqv = wt("<div><div><p>Error: "), yqv = wt("<div><pre>"), Sqv = wt("<div><img>"), kqv = wt("<div><video controls controlslist=nodownload>Your browser does not support the video tag."), wqv = wt("<div>"), Cqv = wt("<div><div><div><span>▶</span><span></span><span></span></div><span> "), iLs = cs({ url: null, content: null, isLoading: true, error: null }), rLs = cs(true), sLs = cs(null), oLs = cs(null), Tqv = `
	@keyframes artifact-spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;
} });
function MoC(t) {
  return (() => {
    var e = Eqv(), n = e.firstChild, i = n.firstChild, r = i.firstChild, s = r.firstChild, o = s.nextSibling, a = o.nextSibling, l = i.nextSibling;
    return e.style.setProperty("background-color", "var(--vscode-editor-background)"), e.style.setProperty("border", "1px solid var(--vscode-widget-border)"), e.style.setProperty("border-radius", "8px"), e.style.setProperty("overflow", "hidden"), n.style.setProperty("width", "100%"), n.style.setProperty("border-collapse", "collapse"), n.style.setProperty("font-size", "13px"), r.style.setProperty("background-color", "var(--vscode-sideBar-background)"), s.style.setProperty("padding", "10px 12px"), s.style.setProperty("text-align", "left"), s.style.setProperty("font-weight", "600"), s.style.setProperty("color", "var(--vscode-foreground)"), s.style.setProperty("border-bottom", "1px solid var(--vscode-widget-border)"), o.style.setProperty("padding", "10px 12px"), o.style.setProperty("text-align", "left"), o.style.setProperty("font-weight", "600"), o.style.setProperty("color", "var(--vscode-foreground)"), o.style.setProperty("border-bottom", "1px solid var(--vscode-widget-border)"), a.style.setProperty("padding", "10px 12px"), a.style.setProperty("text-align", "left"), a.style.setProperty("font-weight", "600"), a.style.setProperty("color", "var(--vscode-foreground)"), a.style.setProperty("border-bottom", "1px solid var(--vscode-widget-border)"), Le(l, Ee(Su, { get each() {
      return t.artifacts;
    }, children: (c, u) => (() => {
      var d = Iqv(), h = d.firstChild, p = h.nextSibling, g = p.nextSibling;
      return h.style.setProperty("padding", "8px 12px"), h.style.setProperty("font-family", "var(--vscode-editor-font-family)"), h.style.setProperty("color", "var(--vscode-foreground)"), Le(h, () => c.absolutePath), p.style.setProperty("padding", "8px 12px"), p.style.setProperty("color", "var(--vscode-descriptionForeground)"), Le(p, () => vbf(c.sizeBytes)), g.style.setProperty("padding", "8px 12px"), g.style.setProperty("color", "var(--vscode-descriptionForeground)"), Le(g, () => KJk(c.updatedAtUnixMs)), xn((f) => {
        var _ = u() % 2 === 0 ? "transparent" : "var(--vscode-list-hoverBackground)", b = u() < t.artifacts.length - 1 ? "1px solid var(--vscode-widget-border)" : "none", y = u() < t.artifacts.length - 1 ? "1px solid var(--vscode-widget-border)" : "none", S = u() < t.artifacts.length - 1 ? "1px solid var(--vscode-widget-border)" : "none";
        return _ !== f.e && ((f.e = _) != null ? d.style.setProperty("background-color", _) : d.style.removeProperty("background-color")), b !== f.t && ((f.t = b) != null ? h.style.setProperty("border-bottom", b) : h.style.removeProperty("border-bottom")), y !== f.a && ((f.a = y) != null ? p.style.setProperty("border-bottom", y) : p.style.removeProperty("border-bottom")), S !== f.o && ((f.o = S) != null ? g.style.setProperty("border-bottom", S) : g.style.removeProperty("border-bottom")), f;
      }, { e: void 0, t: void 0, a: void 0, o: void 0 }), d;
    })() })), e;
  })();
}
var Eqv, Iqv, 