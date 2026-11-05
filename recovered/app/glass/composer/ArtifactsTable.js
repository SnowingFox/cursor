// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ArtifactsTable.js range:38893364..38900041
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, pi, nXt
// wrapper-init: DoC
// hoisted-owner: BackgroundComposerArtifactsSection.js (app-out-vs-workbench-workbench-glass-main-js:7720); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

DoC = L({ "ArtifactsTable.js"() {
  "use strict";
  E(), at(), at(), at(), at(), pi(), nXt(), Eqv = wt("<div><table><thead><tr><th>Path</th><th>Size</th><th>Updated</th></tr></thead><tbody>"), Iqv = wt("<tr><td></td><td></td><td>");
} });
function NoC() {
  const t = Gr(), e = jp();
  e.set(aLs, ""), e.set(lLs, null), e.set(cLs, false), e.set(uLs, null);
  const n = Ca(e, aLs), i = (f) => e.set(aLs, f), r = Ca(e, lLs), s = (f) => e.set(lLs, f), [o, a] = Wt([]), l = Ca(e, cLs), c = (f) => e.set(cLs, f), u = Ca(e, uLs), d = (f) => e.set(uLs, f), h = async (f) => {
    const _ = f.trim();
    if (!_) {
      d("Please enter a bcId");
      return;
    }
    c(true), d(null), a([]);
    try {
      const y = await (await t.aiService.backgroundComposerClient()).listBackgroundComposerArtifacts({ bcId: _ });
      a(y.artifacts), s(_);
    } catch (b) {
      d(b instanceof Error ? b.message : "Failed to fetch artifacts"), s(null);
    } finally {
      c(false);
    }
  }, p = (f) => {
    f.preventDefault(), h(n());
  }, g = (f) => {
    f.key === "Enter" && (f.preventDefault(), h(n()));
  };
  return Ee(pk, { title: "Background Composer Artifacts", style: { display: "flex", "flex-direction": "column", gap: "16px", padding: "16px", height: "100%", "box-sizing": "border-box", overflow: "auto" }, get children() {
    return [(() => {
      var f = xqv(), _ = f.firstChild, b = _.nextSibling;
      return f.style.setProperty("margin-bottom", "8px"), _.style.setProperty("margin", "0 0 8px 0"), _.style.setProperty("font-size", "18px"), _.style.setProperty("font-weight", "600"), _.style.setProperty("color", "var(--vscode-foreground)"), b.style.setProperty("margin", "0"), b.style.setProperty("opacity", "0.7"), b.style.setProperty("font-size", "13px"), b.style.setProperty("color", "var(--vscode-descriptionForeground)"), f;
    })(), (() => {
      var f = Aqv(), _ = f.firstChild;
      return f.addEventListener("submit", p), f.style.setProperty("display", "flex"), f.style.setProperty("gap", "8px"), f.style.setProperty("align-items", "center"), _.addEventListener("keydown", g), _.addEventListener("input", (b) => i(b.currentTarget.value)), _.style.setProperty("flex", "1"), _.style.setProperty("padding", "8px 12px"), _.style.setProperty("background-color", "var(--vscode-input-background)"), _.style.setProperty("color", "var(--vscode-input-foreground)"), _.style.setProperty("border", "1px solid var(--vscode-input-border)"), _.style.setProperty("border-radius", "4px"), _.style.setProperty("font-size", "13px"), _.style.setProperty("font-family", "var(--vscode-editor-font-family)"), _.style.setProperty("box-sizing", "border-box"), Le(f, Ee(ol, { onClick: () => h(n()), variant: "primary", get disabled() {
        return l() || !n().trim();
      }, get children() {
        return l() ? "Loading..." : "Fetch Artifacts";
      } }), null), xn(() => _.value = n()), f;
    })(), Ee(Ut, { get when() {
      return u();
    }, get children() {
      var f = Rqv(), _ = f.firstChild, b = _.firstChild;
      return f.style.setProperty("padding", "12px 16px"), f.style.setProperty("background-color", "var(--vscode-inputValidation-errorBackground)"), f.style.setProperty("border", "1px solid var(--vscode-inputValidation-errorBorder)"), f.style.setProperty("border-radius", "4px"), _.style.setProperty("margin", "0"), _.style.setProperty("font-size", "13px"), _.style.setProperty("color", "var(--vscode-errorForeground)"), Le(_, u, null), f;
    } }), Ee(Ut, { get when() {
      return r();
    }, get children() {
      var f = Pqv(), _ = f.firstChild, b = _.nextSibling, y = b.nextSibling;
      return f.style.setProperty("padding", "8px 12px"), f.style.setProperty("background-color", "var(--vscode-textBlockQuote-background)"), f.style.setProperty("border-left", "3px solid var(--vscode-textBlockQuote-border)"), f.style.setProperty("font-size", "13px"), f.style.setProperty("color", "var(--vscode-foreground)"), y.style.setProperty("font-family", "var(--vscode-editor-font-family)"), y.style.setProperty("background-color", "var(--vscode-textCodeBlock-background)"), y.style.setProperty("padding", "2px 6px"), y.style.setProperty("border-radius", "3px"), Le(y, r), f;
    } }), Ee(Ut, { get when() {
      return l();
    }, get children() {
      var f = Mqv(), _ = f.firstChild, b = _.nextSibling;
      return f.style.setProperty("text-align", "center"), f.style.setProperty("padding", "32px"), f.style.setProperty("color", "var(--vscode-descriptionForeground)"), _.style.setProperty("display", "inline-block"), _.style.setProperty("width", "24px"), _.style.setProperty("height", "24px"), _.style.setProperty("border", "3px solid var(--vscode-descriptionForeground)"), _.style.setProperty("border-top-color", "transparent"), _.style.setProperty("border-radius", "50%"), _.style.setProperty("animation", "artifact-spin 1s linear infinite"), _.style.setProperty("margin-bottom", "8px"), b.style.setProperty("margin", "0"), b.style.setProperty("font-size", "13px"), f;
    } }), Ee(Ut, { get when() {
      return zr(() => !!(!l() && !u() && r()))() && o().length === 0;
    }, get children() {
      var f = Dqv(), _ = f.firstChild;
      return f.style.setProperty("text-align", "center"), f.style.setProperty("padding", "32px"), f.style.setProperty("color", "var(--vscode-descriptionForeground)"), _.style.setProperty("margin", "0"), _.style.setProperty("font-size", "13px"), f;
    } }), Ee(Ut, { get when() {
      return zr(() => !l() && !u())() && o().length > 0;
    }, get children() {
      var f = Nqv(), _ = f.firstChild, b = _.firstChild, y = b.nextSibling, S = y.nextSibling, k = _.nextSibling, C = k.nextSibling, T = C.nextSibling;
      return f.style.setProperty("margin-top", "8px"), _.style.setProperty("margin", "0 0 12px 0"), _.style.setProperty("font-size", "14px"), _.style.setProperty("font-weight", "600"), _.style.setProperty("color", "var(--vscode-foreground)"), Le(_, () => o().length, y), k.style.setProperty("margin-bottom", "24px"), Le(k, Ee(MoC, { get artifacts() {
        return o();
      } })), C.style.setProperty("margin", "0 0 12px 0"), C.style.setProperty("font-size", "14px"), C.style.setProperty("font-weight", "600"), C.style.setProperty("color", "var(--vscode-foreground)"), T.style.setProperty("display", "flex"), T.style.setProperty("flex-direction", "column"), T.style.setProperty("gap", "16px"), Le(T, Ee(Su, { get each() {
        return o();
      }, children: (I) => Ee(RoC, { artifact: I, get bcId() {
        return r();
      } }) })), f;
    } }), (() => {
      var f = Lqv();
      return Le(f, Tqv), f;
    })()];
  } });
}
var xqv, Aqv, Rqv, Pqv, Mqv, Dqv, Nqv, Lqv, aLs, lLs, cLs, uLs, 