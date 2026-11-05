// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ClassicModelNudgeNotice.react.js range:29234711..29236083
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.067Z
// wrapper: i6k deps:3 [E, Mt, S9e]
// declarations: mJg, G0l (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
i6k = L({ "ClassicModelNudgeNotice.react.js"() {
  "use strict";
  E(), Mt(), S9e(), pJg = 8;
} });
import { jsx as Hlt, jsxs as cgs } from "./react-runtime/react/esm-jsx-runtime-production.js";
function mJg({ title: t, description: e, leadingIcon: n, truncate: i = false, primaryActionLabel: r, primaryActionPending: s = false, secondaryActionLabel: o, onPrimaryAction: a, onSecondaryAction: l, onDismiss: c, dismissLabel: u, position: d, "data-banner-type": h }) {
  return Hlt(fi.Root, { "data-banner-type": h, enableKeyboardNavigation: false, style: gJg(d), visible: true, children: cgs(fi.Header, { children: [n ? Hlt(fi.HeaderLeading, { children: Hlt(fi.HeaderIcon, { children: Hlt(zt, { "aria-hidden": true, name: n, size: "base" }) }) }) : null, cgs(fi.HeaderContent, { children: [Hlt(fi.HeaderTitle, { truncate: i, children: t }), e ? Hlt(fi.HeaderDescription, { truncate: i, children: e }) : null] }), cgs(fi.HeaderTrailing, { children: [o && l ? Hlt(An, { onClick: (p) => {
    p.stopPropagation(), l();
  }, variant: "text", children: o }) : null, r && a ? cgs(An, { disabled: s, onClick: (p) => {
    p.stopPropagation(), a();
  }, variant: "primary", children: [s ? Hlt(Yg, { "aria-hidden": true, indeterminate: true, size: "xs", variant: "ring" }) : null, r] }) : null, Hlt(fi.HeaderCloseButton, { "aria-label": u, onClick: c })] })] }) });
}
var G0l, gJg,
