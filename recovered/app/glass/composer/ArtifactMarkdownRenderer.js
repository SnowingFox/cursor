// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ArtifactMarkdownRenderer.js range:38870931..38878328
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, pi, d_, ToC, aS, vo, HOf
// wrapper-init: IoC
// hoisted-owner: ArtifactMarkdownSection.js (app-out-vs-workbench-workbench-glass-main-js:7717); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

IoC = L({ "ArtifactMarkdownRenderer.js"() {
  "use strict";
  E(), at(), pi(), d_(), ToC(), aS(), vo(), HOf(), sqv = Ok(CoC);
} });
function xoC() {
  const t = jp(), [e, n] = Wt(t.get(ZFn));
  On(t.sub(ZFn, () => n(t.get(ZFn))));
  const i = (f) => t.set(ZFn, f), [r, s] = Wt(t.get(QFn));
  On(t.sub(QFn, () => s(t.get(QFn))));
  const o = (f) => t.set(QFn, f), [a, l] = Wt(t.get(z9i));
  On(t.sub(z9i, () => l(t.get(z9i))));
  const c = (f) => t.set(z9i, f), [u, d] = Wt(t.get(JFn));
  On(t.sub(JFn, () => d(t.get(JFn))));
  const h = (f) => t.set(JFn, f), p = () => {
    t.set(fqv);
  }, g = (f) => {
    f.key === "Enter" && (f.preventDefault(), p());
  };
  return Ee(pk, { title: "Artifact Markdown Renderer", style: { display: "flex", "flex-direction": "column", gap: "16px", padding: "16px", height: "100%", "box-sizing": "border-box", overflow: "auto" }, get children() {
    return [(() => {
      var f = oqv(), _ = f.firstChild, b = _.nextSibling;
      return f.style.setProperty("margin-bottom", "8px"), _.style.setProperty("margin", "0 0 8px 0"), _.style.setProperty("font-size", "18px"), _.style.setProperty("font-weight", "600"), _.style.setProperty("color", "var(--vscode-foreground)"), b.style.setProperty("margin", "0"), b.style.setProperty("opacity", "0.7"), b.style.setProperty("font-size", "13px"), b.style.setProperty("color", "var(--vscode-descriptionForeground)"), f;
    })(), (() => {
      var f = aqv(), _ = f.firstChild;
      return f.style.setProperty("display", "flex"), f.style.setProperty("gap", "8px"), f.style.setProperty("align-items", "center"), f.style.setProperty("flex-wrap", "wrap"), _.addEventListener("keydown", g), _.addEventListener("input", (b) => i(b.currentTarget.value)), _.style.setProperty("flex", "1"), _.style.setProperty("min-width", "200px"), _.style.setProperty("padding", "8px 12px"), _.style.setProperty("background-color", "var(--vscode-input-background)"), _.style.setProperty("color", "var(--vscode-input-foreground)"), _.style.setProperty("border", "1px solid var(--vscode-input-border)"), _.style.setProperty("border-radius", "4px"), _.style.setProperty("font-size", "13px"), _.style.setProperty("font-family", "var(--vscode-editor-font-family)"), _.style.setProperty("box-sizing", "border-box"), Le(f, Ee(ol, { onClick: p, variant: "primary", get disabled() {
        return !e().trim();
      }, children: "Set bcId" }), null), Le(f, Ee(ol, { onClick: () => h(!t.get(JFn)), variant: "secondary", get children() {
        return u() ? "Hide Comparison" : "Show Comparison";
      } }), null), xn(() => _.value = e()), f;
    })(), Ee(Ut, { get when() {
      return r();
    }, get children() {
      var f = lqv(), _ = f.firstChild, b = _.nextSibling, y = b.nextSibling;
      return f.style.setProperty("padding", "8px 12px"), f.style.setProperty("background-color", "var(--vscode-textBlockQuote-background)"), f.style.setProperty("border-left", "3px solid var(--vscode-textBlockQuote-border)"), f.style.setProperty("font-size", "13px"), f.style.setProperty("color", "var(--vscode-foreground)"), y.style.setProperty("font-family", "var(--vscode-editor-font-family)"), y.style.setProperty("background-color", "var(--vscode-textCodeBlock-background)"), y.style.setProperty("padding", "2px 6px"), y.style.setProperty("border-radius", "3px"), Le(y, r), Le(f, Ee(ol, { onClick: () => o(null), variant: "secondary", style: { "margin-left": "12px" }, children: "Clear" }), null), f;
    } }), (() => {
      var f = cqv(), _ = f.firstChild, b = _.nextSibling, y = b.nextSibling;
      return f.style.setProperty("margin-top", "8px"), _.style.setProperty("margin", "0 0 8px 0"), _.style.setProperty("font-size", "14px"), _.style.setProperty("font-weight", "600"), _.style.setProperty("color", "var(--vscode-foreground)"), b.style.setProperty("display", "flex"), b.style.setProperty("gap", "8px"), b.style.setProperty("margin-bottom", "8px"), Le(b, Ee(ol, { onClick: () => c(xuc), variant: "secondary", children: "Load Sample with Artifacts" }), null), Le(b, Ee(ol, { onClick: () => c(mqv), variant: "secondary", children: "Load Consecutive Images" }), null), Le(b, Ee(ol, { onClick: () => c(gqv), variant: "secondary", children: "Load Plain Markdown" }), null), y.addEventListener("input", (S) => c(S.currentTarget.value)), y.style.setProperty("width", "100%"), y.style.setProperty("height", "200px"), y.style.setProperty("resize", "vertical"), y.style.setProperty("padding", "12px"), y.style.setProperty("background-color", "var(--vscode-input-background)"), y.style.setProperty("color", "var(--vscode-input-foreground)"), y.style.setProperty("border", "1px solid var(--vscode-input-border)"), y.style.setProperty("border-radius", "4px"), y.style.setProperty("font-family", "var(--vscode-editor-font-family)"), y.style.setProperty("font-size", "13px"), y.style.setProperty("box-sizing", "border-box"), xn(() => y.value = a()), f;
    })(), (() => {
      var f = hqv(), _ = f.firstChild, b = _.firstChild, y = b.firstChild;
      return f.style.setProperty("display", "flex"), f.style.setProperty("gap", "16px"), f.style.setProperty("flex-wrap", "wrap"), f.style.setProperty("flex", "1"), f.style.setProperty("min-height", "300px"), _.style.setProperty("flex", "1"), _.style.setProperty("min-width", "300px"), _.style.setProperty("display", "flex"), _.style.setProperty("flex-direction", "column"), b.style.setProperty("margin", "0 0 8px 0"), b.style.setProperty("font-size", "14px"), b.style.setProperty("font-weight", "600"), b.style.setProperty("color", "var(--vscode-foreground)"), Le(b, Ee(Ut, { get when() {
        return !r();
      }, get children() {
        var S = uqv();
        return S.style.setProperty("font-weight", "normal"), S.style.setProperty("color", "var(--vscode-descriptionForeground)"), S.style.setProperty("margin-left", "8px"), S;
      } }), null), Le(_, Ee(ME, { scrollingDirection: "vertical", style: { flex: "1", "background-color": "var(--vscode-editor-background)", border: "1px solid var(--vscode-widget-border)", "border-radius": "4px", padding: "16px" }, get children() {
        return Ee(EoC, { get markdown() {
          return a();
        }, get bcId() {
          return r() ?? "";
        }, finished: true });
      } }), null), Le(f, Ee(Ut, { get when() {
        return u();
      }, get children() {
        var S = dqv(), k = S.firstChild, C = k.firstChild, T = C.nextSibling;
        return S.style.setProperty("flex", "1"), S.style.setProperty("min-width", "300px"), S.style.setProperty("display", "flex"), S.style.setProperty("flex-direction", "column"), k.style.setProperty("margin", "0 0 8px 0"), k.style.setProperty("font-size", "14px"), k.style.setProperty("font-weight", "600"), k.style.setProperty("color", "var(--vscode-foreground)"), T.style.setProperty("font-weight", "normal"), T.style.setProperty("color", "var(--vscode-descriptionForeground)"), T.style.setProperty("margin-left", "8px"), Le(S, Ee(ME, { scrollingDirection: "vertical", style: { flex: "1", "background-color": "var(--vscode-editor-background)", border: "1px solid var(--vscode-widget-border)", "border-radius": "4px", padding: "16px" }, get children() {
          return Ee(pqv, { get rawText() {
            return a();
          }, finished: true });
        } }), null), S;
      } }), null), f;
    })()];
  } });
}
var oqv, aqv, lqv, cqv, uqv, dqv, hqv, pqv, xuc, mqv, gqv, ZFn, QFn, z9i, JFn, fqv, 