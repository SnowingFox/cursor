// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerToolbarFileList.js range:30060906..30062119
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, pi, Hn, Pie, vo, $Rn, I$k, D$k, L$k, Tms
// wrapper-init: F$k
// hoisted-owner: SteerQueueNuxNotice.react.js (app-out-vs-workbench-workbench-glass-main-js:5345); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: qcf -> SteerQueueNuxNotice (apply-map AST equivalent)

F$k = L({
  "ComposerToolbarFileList.js"() {
    "use strict";

    E(), at(), at(), at(), at(), pi(), Hn(), Pie(), vo(), $Rn(), I$k(), D$k(), L$k(), Tms(), Wcf = wt("<div>"), Gcf = wt("<div class=composer-file-list>");
  }
});
import { jsx as MPi, jsxs as OIl } from "./react-runtime/react/esm-jsx-runtime-production.js";
function SteerQueueNuxNotice({
  onKeepQueuing: t,
  onOpenSettings: e
}) {
  return MPi(fi.Root, {
    className: "ui-tray--steer-nux",
    "data-queue-steer-nux": "true",
    enableKeyboardNavigation: false,
    visible: true,
    children: OIl(fi.Banner, {
      inlineActions: true,
      children: [OIl(fi.BannerContent, {
        children: [MPi(fi.BannerTitle, {
          children: "Steer New Messages?"
        }), MPi(fi.BannerDescription, {
          children: "Steering sends new messages to Agent while it works, without stopping it. Open Settings to turn it on."
        })]
      }), OIl(fi.BannerActions, {
        children: [MPi(An, {
          "aria-label": "Keep Queuing New Messages",
          className: "queue-tray__steer-nux-dismiss",
          onClick: t,
          variant: "text",
          children: "Keep Queuing"
        }), MPi(An, {
          "aria-label": "Open New Message Settings",
          className: "queue-tray__steer-nux-open-settings",
          onClick: e,
          rounded: true,
          tone: "monochrome",
          variant: "primary",
          children: "Open Settings"
        })]
      })]
    })
  });
}
