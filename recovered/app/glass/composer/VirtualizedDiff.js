// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VirtualizedDiff.js range:15121067..15124776
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, joe, mf, RFe, JLr, $hi, b5h, Xha, nOr, D5h, O5h, VLr
// wrapper-init: jHh
// hoisted-owner: EditToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2329); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

jHh = L({ "VirtualizedDiff.js"() {
  "use strict";
  E(), Va(), joe(), mf(), RFe(), JLr(), $hi(), b5h(), Xha(), nOr(), D5h(), O5h(), VLr(), BHh = 200, UHh = 64, kFr = ZAS(JAS);
} });
import { jsx as mL, jsxs as yjt, Fragment as Gva } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as eRS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { lazy as qva, memo as tRS, useMemo as art, useRef as nRS, useCallback as ykt, useLayoutEffect as iRS, Suspense as zva } from "./react-runtime/react/esm-index-production.js";
function Vva(t) {
  return [WD.root, t.minimal ? WD.minimal : null, t.minimal && t.deleteKind ? WD.deleteMinimal : null];
}
function $Hh() {
  return [rWh, WD.minimalHeader];
}
function HHh() {
  return WD.planIcon;
}
function wFr(t) {
  return [WD.filename, t.minimal ? WD.filenameMinimal : null, t.minimal && !t.deleteKind ? WD.filenameMinimalHoverHighlight : null, t.deleteKind ? WD.filenameDelete : null];
}
function WHh() {
  return WD.filenameButton;
}
function GHh(t) {
  return [WD.stats, t.minimal ? WD.statsMinimal : null];
}
function qHh() {
  return WD.additions;
}
function zHh() {
  return WD.deletions;
}
function VHh(t) {
  return [WD.minimalExpandButton, t.expanded ? WD.minimalExpandButtonExpanded : null];
}
function KHh(t) {
  return [WD.minimalExpandIcon, t.expanded ? WD.minimalExpandIconExpanded : null];
}
function YHh() {
  return WD.minimalContent;
}
function XHh() {
  return WD.content;
}
function ZHh() {
  return WD.preview;
}
function QHh(t) {
  return [WD.scrollArea, t.expanded ? WD.expandedScrollArea : null];
}
function Kva(t) {
  const e = eRS(3), { content: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = { className: "ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-uve7l6 ui-16b7oty ui-1rgtt3y ui-o7x2bt ui-1heor9g ui-13r5tfd ui-1sdyfia" }, e[0] = i) : i = e[0];
  const r = i;
  let s;
  return e[1] !== n ? (s = mL("pre", { className: r.className, style: r.style, children: n }), e[1] = n, e[2] = s) : s = e[2], s;
}
function rRS(t) {
  const e = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
  return e === -1 ? t : t.slice(e + 1);
}
function JHh(t) {
  const e = eWh(t);
  if (e === 0) return 0;
  let n = 0;
  for (let i = 0; i < e; i++) {
    const r = t.charCodeAt(i);
    (r === 10 || r === 13 && t.charCodeAt(i + 1) !== 10) && n++;
  }
  return n + 1;
}
function sRS(t) {
  return t.toLowerCase().endsWith(".plan.md");
}
function oRS(t) {
  return CFr || (CFr = document.createElement("canvas"), rmi = CFr.getContext("2d")), rmi ? (rmi.font = getComputedStyle(t).font, rmi.measureText("x").width) : 0;
}
function aRS(t, e) {
  let n = 0;
  for (const i of t) if (i === " ") n++;
  else if (i === "	") n += e;
  else break;
  return n;
}
function lRS(t, e) {
  if (e <= 0 || t.length === 0) return "";
  let n = t.length;
  for (; n > 0; ) {
    const r = t.charCodeAt(n - 1);
    if (r !== 10 && r !== 13) break;
    n--;
  }
  if (n === 0) return "";
  let i = 0;
  for (let r = n - 1; r >= 0; r--) {
    const s = t.charCodeAt(r), o = s === 10, a = s === 13 && t.charCodeAt(r + 1) !== 10;
    if ((o || a) && (i++, i === e)) return t.slice(r + 1, n);
  }
  return t.slice(0, n);
}
function eWh(t) {
  let e = t.length;
  for (; e > 0; ) {
    const n = t.charCodeAt(e - 1);
    if (n !== 10 && n !== 13) break;
    e--;
  }
  return e;
}
function cRS(t, e) {
  const n = rSn(t, e);
  let i = 0;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (M0(s)) {
      r === 0 || r === n.length - 1 || i++;
      continue;
    }
    i++;
  }
  return i;
}
var tWh, nWh, iWh, rWh, WD, sWh, oWh, aWh, lWh, Yva, cWh, uWh, dWh, hWh, CFr, rmi, TFr, 