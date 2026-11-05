// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerWIPSection.js range:39080176..39081747
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, pi, vo
// wrapper-init: gaC
// hoisted-owner: ConversationDensityPreviewGallery.react.js (app-out-vs-workbench-workbench-glass-main-js:7733); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: vaC -> ConversationDensityPreviewGallery (apply-map AST equivalent)

gaC = L({
  "ComposerWIPSection.js"() {
    "use strict";

    E(), at(), at(), pi(), vo(), Jzv = wt("<div>hi");
  }
}), faC = L({
  "ConversationDensityPreviewGallery.css"() {}
});
import { jsx as lPt, jsxs as eBi } from "./react-runtime/react/esm-jsx-runtime-production.js";
function ConversationDensityPreviewGallery() {
  return eBi("div", {
    className: "conversation-density-preview-gallery",
    children: [eBi("header", {
      className: "conversation-density-preview-gallery__header",
      children: [lPt("h2", {
        className: "conversation-density-preview-gallery__title",
        children: "Conversation Density Preview"
      }), lPt("p", {
        className: "conversation-density-preview-gallery__description",
        children: "Static previews for each tool-call density preset (no hover required)."
      })]
    }), lPt("div", {
      className: "conversation-density-preview-gallery__grid",
      children: bsc.map(t => eBi("article", {
        className: "conversation-density-preview-gallery__card",
        "data-density-mode": t.value,
        children: [eBi("header", {
          className: "conversation-density-preview-gallery__card-header",
          children: [eBi("div", {
            className: "conversation-density-preview-gallery__card-title-row",
            children: [lPt("h3", {
              className: "conversation-density-preview-gallery__card-title",
              children: t.label
            }), lPt("code", {
              className: "conversation-density-preview-gallery__mode",
              children: t.value
            })]
          }), lPt("p", {
            className: "conversation-density-preview-gallery__card-description",
            children: t.ariaLabel
          })]
        }), lPt("div", {
          className: "conversation-density-preview-gallery__preview-frame",
          children: lPt(j5v, {
            option: t
          })
        })]
      }, t.value))
    })]
  });
}
