// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BillingStatusBanner.js range:29233595..29234711
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.063Z
// wrapper: t6k deps:6 [E, at, pi, vo, aS, JFk]
// declarations: n6k, pJg (segment truncated)
// anchors: (none)
// group: usage-billing
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
t6k = L({ "BillingStatusBanner.js"() {
  "use strict";
  E(), at(), pi(), vo(), aS(), JFk(), hJg = Ok(QFk);
} });
import { jsx as $lt, jsxs as W0l } from "./react-runtime/react/esm-jsx-runtime-production.js";
function n6k({ message: t, description: e, leadingIcon: n, primaryActionLabel: i, onPrimaryAction: r, onDismiss: s, onOpenLink: o }) {
  const a = e?.trim(), l = a !== void 0 && a.length > 0;
  return $lt(fi.Root, { enableKeyboardNavigation: false, style: { marginTop: pJg }, visible: true, children: W0l(fi.Header, { children: [n ? $lt(fi.HeaderLeading, { children: $lt(fi.HeaderIcon, { children: $lt(zt, { "aria-hidden": true, name: n, size: "base" }) }) }) : null, W0l(fi.HeaderContent, { children: [$lt(fi.HeaderTitle, { children: $lt(_Me, { finished: true, rawText: t, services: { openLink: o } }) }), l ? $lt(fi.HeaderDescription, { children: a }) : null] }), W0l(fi.HeaderTrailing, { children: [i && r ? $lt(An, { onClick: (c) => {
    c.stopPropagation(), r();
  }, variant: "primary", children: i }) : null, $lt(fi.HeaderCloseButton, { "aria-label": "Dismiss", onClick: s })] })] }) });
}
var pJg,
