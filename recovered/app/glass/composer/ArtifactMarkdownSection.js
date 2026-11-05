// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ArtifactMarkdownSection.js range:38878328..38889525
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, pi, Am, IoC, aS, S9e, FS, eD, mk
// wrapper-init: AoC
// hoisted-owner: ArtifactPreviewCard.js (app-out-vs-workbench-workbench-glass-main-js:7718); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

AoC = L({ "ArtifactMarkdownSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), pi(), Am(), IoC(), aS(), S9e(), FS(), eD(), mk(), oqv = wt("<div><h2>Artifact Markdown Renderer Test</h2><p>Tests rendering markdown with embedded artifact references (images and videos from /opt/cursor/artifacts/). Enter a bcId to test with real artifacts, or view the comparison without artifacts."), aqv = wt('<div><input type=text placeholder="Enter bcId (e.g., abc123-def456-...)">'), lqv = wt("<div><strong>Current bcId:</strong> <code>"), cqv = wt("<div><h3>Markdown Input</h3><div></div><textarea>"), uqv = wt("<span>(no bcId - artifacts will show as loading/error)"), dqv = wt("<div><h3>Regular Markdown Output<span>(for comparison)"), hqv = wt("<div><div><h3>ArtifactMarkdownRenderer Output"), pqv = Ok(_Me), xuc = `# Agent Summary

The agent has completed the requested task. Here are the results:

- An *italic* sentence.
- A **bold** sentence.

## A Screenshot I took

Here is a screenshot, isn't it beautiful?
<img src="/opt/cursor/artifacts/logo.svg" alt="Generated Logo" />


Here I am trying to reference it as a file path:
![Logo as File Path](/opt/cursor/artifacts/logo.svg)

## A demo video

I used the screen recording feature to record a video of the agent working.

<video src="/opt/cursor/artifacts/spinning_cursor.mp4" controls></video>

The artifacts above demonstrate the agent's ability to generate visual content.
`, mqv = `Evidence screenshots:

![Screenshot A](/opt/cursor/artifacts/gap_a_missing.png)
![Screenshot B](/opt/cursor/artifacts/gap_b_missing.png)
`, gqv = `# Regular Markdown

This is a sample markdown document **without** any artifact references.

## Features

- Regular markdown rendering
- *Italic* and **bold** text
- Lists and headings

\`\`\`typescript
// Code blocks work too
const hello = "world";
console.log(hello);
\`\`\`

> This is a blockquote
`, ZFn = cs(""), QFn = cs(null), z9i = cs(xuc), JFn = cs(true), fqv = cs(null, (t, e) => {
    const n = t(ZFn).trim();
    n && e(QFn, n);
  });
} });
function RoC(t) {
  const e = Gr(), n = jp();
  n.set(iLs, { url: null, content: null, isLoading: true, error: null }), n.set(rLs, t.initiallyExpanded ?? true), n.set(sLs, null), n.set(oLs, null);
  const i = Ca(n, iLs), r = (C) => n.set(iLs, C), s = Ca(n, rLs), o = (C) => n.set(rLs, C), a = Ca(n, sLs), l = (C) => n.set(sLs, C), c = Ca(n, oLs), u = (C) => n.set(oLs, C), d = () => fbf(t.artifact.absolutePath), h = () => yDn(t.artifact.absolutePath), p = () => E2l(t.artifact.absolutePath), g = () => pbs(t.artifact.absolutePath), f = () => HMi(t.artifact.absolutePath), _ = () => VJk(t.artifact.absolutePath);
  Cn(() => {
    const C = t.bcId, T = t.artifact.absolutePath, I = p(), A = t.maxTextLines ?? 100;
    r({ url: null, content: null, isLoading: true, error: null }), l(null), u(null);
    const P = new AbortController();
    (async () => {
      try {
        const O = await e.artifactCacheService.resolveArtifactUrl(C, T, P.signal);
        if (P.signal.aborted) return;
        if (!I) {
          const N = O.onDidChange((U) => {
            r((j) => ({ ...j, url: U })), l(null), u(null);
          });
          P.signal.addEventListener("abort", () => N.dispose());
        }
        if (I) try {
          const N = await fetch(O.url, { signal: P.signal });
          if (!N.ok) throw new Error(`HTTP error: ${N.status}`);
          const $ = (await N.text()).split(`
`).slice(0, A).join(`
`);
          if (P.signal.aborted) return;
          r({ url: O.url, content: $, isLoading: false, error: null });
        } catch (N) {
          if (P.signal.aborted) return;
          r({ url: O.url, content: null, isLoading: false, error: N instanceof Error ? N.message : "Failed to fetch text content" });
        }
        else r({ url: O.url, content: null, isLoading: false, error: null });
      } catch (O) {
        if (P.signal.aborted) return;
        r({ url: null, content: null, isLoading: false, error: O instanceof Error ? O.message : "Failed to fetch presigned URL" });
      }
    })(), On(() => {
      P.abort();
    });
  });
  const b = () => i().error ?? a() ?? c(), y = () => p() && i().content !== null, S = () => g() && i().url !== null, k = () => f() && i().url !== null;
  return (() => {
    var C = Cqv(), T = C.firstChild, I = T.firstChild, A = I.firstChild, P = A.nextSibling, M = P.nextSibling, O = I.nextSibling, N = O.firstChild;
    return C.style.setProperty("width", "100%"), C.style.setProperty("background-color", "var(--vscode-editor-background)"), C.style.setProperty("border-radius", "8px"), C.style.setProperty("border", "1px solid var(--vscode-widget-border)"), C.style.setProperty("overflow", "hidden"), T.addEventListener("click", () => o(!s())), T.style.setProperty("display", "flex"), T.style.setProperty("align-items", "center"), T.style.setProperty("justify-content", "space-between"), T.style.setProperty("padding", "8px 12px"), T.style.setProperty("background-color", "var(--vscode-sideBar-background)"), T.style.setProperty("cursor", "pointer"), I.style.setProperty("display", "flex"), I.style.setProperty("align-items", "center"), I.style.setProperty("gap", "8px"), I.style.setProperty("min-width", "0"), I.style.setProperty("flex", "1"), A.style.setProperty("color", "var(--vscode-foreground)"), A.style.setProperty("opacity", "0.6"), A.style.setProperty("font-size", "12px"), A.style.setProperty("transition", "transform 0.2s"), P.style.setProperty("font-size", "13px"), P.style.setProperty("color", "var(--vscode-foreground)"), P.style.setProperty("white-space", "nowrap"), P.style.setProperty("overflow", "hidden"), P.style.setProperty("text-overflow", "ellipsis"), Le(P, d), M.style.setProperty("font-size", "11px"), M.style.setProperty("color", "var(--vscode-descriptionForeground)"), M.style.setProperty("flex-shrink", "0"), Le(M, () => vbf(t.artifact.sizeBytes)), O.style.setProperty("font-size", "11px"), O.style.setProperty("color", "var(--vscode-descriptionForeground)"), O.style.setProperty("padding-left", "12px"), O.style.setProperty("white-space", "nowrap"), Le(O, () => YJk(t.artifact.absolutePath), N), Le(O, (() => {
      var U = zr(() => !!g());
      return () => U() ? "Image" : (() => {
        var j = zr(() => !!f());
        return () => j() ? "Video" : p() ? "Text" : "File";
      })();
    })(), null), Le(C, Ee(Ut, { get when() {
      return s();
    }, get children() {
      var U = wqv();
      return U.style.setProperty("min-height", "50px"), Le(U, Ee(Ut, { get when() {
        return !_();
      }, get children() {
        var j = vqv(), $ = j.firstChild, H = $.nextSibling, G = H.nextSibling;
        return j.style.setProperty("padding", "16px"), j.style.setProperty("font-size", "13px"), j.style.setProperty("color", "var(--vscode-descriptionForeground)"), j.style.setProperty("font-style", "italic"), Le(j, () => h() || "unknown", H), j;
      } }), null), Le(U, Ee(Ut, { get when() {
        return _();
      }, get children() {
        return [Ee(Ut, { get when() {
          return i().isLoading;
        }, get children() {
          var j = _qv(), $ = j.firstChild;
          return j.style.setProperty("padding", "16px"), j.style.setProperty("display", "flex"), j.style.setProperty("align-items", "center"), j.style.setProperty("gap", "8px"), j.style.setProperty("font-size", "13px"), j.style.setProperty("color", "var(--vscode-descriptionForeground)"), $.style.setProperty("width", "16px"), $.style.setProperty("height", "16px"), $.style.setProperty("border", "2px solid var(--vscode-descriptionForeground)"), $.style.setProperty("border-top-color", "transparent"), $.style.setProperty("border-radius", "50%"), $.style.setProperty("animation", "artifact-spin 1s linear infinite"), j;
        } }), Ee(Ut, { get when() {
          return zr(() => !!b())() && !i().isLoading;
        }, get children() {
          var j = bqv(), $ = j.firstChild, H = $.firstChild, G = H.firstChild;
          return j.style.setProperty("padding", "16px"), $.style.setProperty("background-color", "var(--vscode-inputValidation-errorBackground)"), $.style.setProperty("border", "1px solid var(--vscode-inputValidation-errorBorder)"), $.style.setProperty("border-radius", "4px"), $.style.setProperty("padding", "8px 12px"), H.style.setProperty("margin", "0"), H.style.setProperty("font-size", "13px"), H.style.setProperty("color", "var(--vscode-errorForeground)"), Le(H, b, null), j;
        } }), Ee(Ut, { get when() {
          return zr(() => !i().isLoading && !b())() && (y() || S() || k());
        }, get children() {
          return [Ee(Ut, { get when() {
            return zr(() => !!y())() && i().content !== null;
          }, get children() {
            var j = yqv(), $ = j.firstChild;
            return j.style.setProperty("max-height", "400px"), j.style.setProperty("overflow", "auto"), j.style.setProperty("background-color", "var(--vscode-textCodeBlock-background)"), $.style.setProperty("margin", "0"), $.style.setProperty("padding", "12px"), $.style.setProperty("font-family", "var(--vscode-editor-font-family)"), $.style.setProperty("font-size", "12px"), $.style.setProperty("line-height", "1.5"), $.style.setProperty("color", "var(--vscode-editor-foreground)"), $.style.setProperty("white-space", "pre-wrap"), $.style.setProperty("word-break", "break-word"), Le($, () => i().content), j;
          } }), Ee(Ut, { get when() {
            return zr(() => !!S())() && i().url !== null;
          }, get children() {
            var j = Sqv(), $ = j.firstChild;
            return j.style.setProperty("background-color", "#ffffff"), j.style.setProperty("overflow", "hidden"), $.addEventListener("error", () => {
              l("Error loading image, please try refreshing");
            }), $.style.setProperty("width", "100%"), $.style.setProperty("height", "auto"), $.style.setProperty("display", "block"), xn((H) => {
              var G = i().url ?? void 0, q = d();
              return G !== H.e && lo($, "src", H.e = G), q !== H.t && lo($, "alt", H.t = q), H;
            }, { e: void 0, t: void 0 }), j;
          } }), Ee(Ut, { get when() {
            return zr(() => !!k())() && i().url !== null;
          }, get children() {
            var j = kqv(), $ = j.firstChild;
            return j.style.setProperty("background-color", "#000000"), j.style.setProperty("overflow", "hidden"), $.addEventListener("error", () => {
              u("Error loading video, please try refreshing");
            }), $.style.setProperty("width", "100%"), $.style.setProperty("height", "auto"), $.style.setProperty("display", "block"), xn(() => lo($, "src", i().url ?? void 0)), j;
          } })];
        } })];
      } }), null), U;
    } }), null), xn((U) => {
      var j = s() ? "1px solid var(--vscode-widget-border)" : "none", $ = s() ? "rotate(90deg)" : "rotate(0deg)";
      return j !== U.e && ((U.e = j) != null ? T.style.setProperty("border-bottom", j) : T.style.removeProperty("border-bottom")), $ !== U.t && ((U.t = $) != null ? A.style.setProperty("transform", $) : A.style.removeProperty("transform")), U;
    }, { e: void 0, t: void 0 }), C;
  })();
}
var vqv, _qv, bqv, yqv, Sqv, kqv, wqv, Cqv, iLs, rLs, sLs, oLs, Tqv, 