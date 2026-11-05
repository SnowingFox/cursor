// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerHumanRowEditInput.react.js range:31524975..31525661
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, zIt, jB, ZB, hyw, aFl, Xwf, yyw
// wrapper-init: Cyw -> composerHumanRowEditInputModuleInit
// hoisted-owner: GlassHumanMessageStopButton.react.js (app-out-vs-workbench-workbench-glass-main-js:5900); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: Cyw -> composerHumanRowEditInputModuleInit; $3f -> GlassHumanMessageStopButton (apply-map AST equivalent)

var composerHumanRowEditInputModuleInit = L({
  "ComposerHumanRowEditInput.react.js"() {
    "use strict";

    E(), zIt(), jB(), ZB(), hyw(), aFl(), Xwf(), yyw();
  }
});
import { jsx as yFl } from "./react-runtime/react/esm-jsx-runtime-production.js";
function GlassHumanMessageStopButton({
  onClick: t,
  shortcut: e
}) {
  const n = e !== void 0 && e.length > 0;
  return yFl(xs, {
    content: yFl(ao, {
      shortcut: n ? e : void 0,
      title: "Stop"
    }),
    offset: 6,
    children: yFl(ho, {
      "aria-label": n ? `Stop ${e}` : "Stop",
      className: "stop-button",
      icon: "stop-circle",
      iconSize: 24,
      iconVariant: "filled",
      onClick: i => {
        i.stopPropagation(), i.nativeEvent.stopImmediatePropagation(), t();
      },
      rounded: true,
      size: "md",
      tone: "monochrome"
    })
  });
}
