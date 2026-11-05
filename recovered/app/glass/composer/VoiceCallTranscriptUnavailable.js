// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceCallTranscriptUnavailable.js range:17764495..17766403
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Skp
// wrapper-init: Zg1 -> voiceCallTranscriptUnavailableModuleInit
// hoisted-owner: WarningConfirmTray.js (app-out-vs-workbench-workbench-glass-main-js:3029); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: Zg1 -> voiceCallTranscriptUnavailableModuleInit; aRa -> WarningConfirmTray (apply-map AST equivalent)

var voiceCallTranscriptUnavailableModuleInit = L({
  "VoiceCallTranscriptUnavailable.js"() {
    "use strict";

    E(), Skp();
  }
});
import { jsx as xwt, jsxs as oRa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Qg1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as Jg1 } from "./react-runtime/react/esm-index-production.js";
function WarningConfirmTray(t) {
  const e = Qg1(21),
    {
      visible: n,
      title: i,
      body: r,
      confirmLabel: s,
      dontShowAgainLabel: o,
      onConfirm: a,
      onDismissForever: l
    } = t,
    c = s === void 0 ? "Got It" : s,
    u = o === void 0 ? "Don't show again" : o,
    [d, h] = Jg1(false);
  let p;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (p = xwt(fi.HeaderLeading, {
    children: xwt(fi.HeaderIcon, {
      children: xwt(zt, {
        color: "secondary",
        name: "info",
        size: "base"
      })
    })
  }), e[0] = p) : p = e[0];
  let g;
  e[1] !== i ? (g = xwt(fi.HeaderTitle, {
    children: i
  }), e[1] = i, e[2] = g) : g = e[2];
  let f;
  e[3] !== r ? (f = r ? xwt(fi.HeaderDescription, {
    children: r
  }) : null, e[3] = r, e[4] = f) : f = e[4];
  let _;
  e[5] !== g || e[6] !== f ? (_ = oRa(fi.Header, {
    children: [p, oRa(fi.HeaderContent, {
      children: [g, f]
    })]
  }), e[5] = g, e[6] = f, e[7] = _) : _ = e[7];
  const b = d ? l : a;
  let y;
  e[8] !== c || e[9] !== b ? (y = xwt(An, {
    onClick: b,
    variant: "primary",
    children: c
  }), e[8] = c, e[9] = b, e[10] = y) : y = e[10];
  let S;
  e[11] !== d || e[12] !== u ? (S = xwt(fi.FooterCheckbox, {
    checked: d,
    onCheckedChange: h,
    children: u
  }), e[11] = d, e[12] = u, e[13] = S) : S = e[13];
  let k;
  e[14] !== y || e[15] !== S ? (k = xwt(fi.Footer, {
    primaryAction: y,
    tertiaryAction: S
  }), e[14] = y, e[15] = S, e[16] = k) : k = e[16];
  let C;
  return e[17] !== k || e[18] !== _ || e[19] !== n ? (C = oRa(fi.Root, {
    enableKeyboardNavigation: false,
    visible: n,
    children: [_, k]
  }), e[17] = k, e[18] = _, e[19] = n, e[20] = C) : C = e[20], C;
}
