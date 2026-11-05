// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PortalLayeringContext.js range:6212151..6215131
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.886Z
Ooe = L({ "PortalLayeringContext.js"() {
  "use strict";
  E(), tuh = 1e4, nuh = 10, iuh = ["dropdown", "tooltip", "modal", "popover"], tPr = { dropdown: "--ui-portal-layer-z-index-dropdown", tooltip: "--ui-portal-layer-z-index-tooltip", modal: "--ui-portal-layer-z-index-modal", popover: "--ui-portal-layer-z-index-popover" }, ruh = {}, suh = 3e3, ouh = 10, eta = suh, tta = W$y(null);
} });
function V$y(t, e = false) {
  return [gci, wci.base, kz.root, t === "md" && wci.sizeMd, e && wci.hasAttachment];
}
function K$y(t = false) {
  return t && wci.dropIndicator;
}
function Y$y() {
  return cuh.base;
}
function X$y() {
  return Gwe.inner;
}
function Z$y() {
  return Gwe.dropIndicatorSlot;
}
function Q$y(t = false) {
  return [Gwe.layout, t && Gwe.layoutCard, t && lit.border];
}
function J$y() {
  return [Gwe.attachment, lit.border];
}
function auh() {
  return Gwe.bodyScroll;
}
function eHy() {
  return Gwe.header;
}
function tHy() {
  return Gwe.footer;
}
function nHy(t = false) {
  return [Gwe.list, t && Gwe.virtualizedList];
}
function iHy() {
  return Gwe.virtualizedRow;
}
function rHy() {
  return Gwe.virtualizedScroller;
}
function nta(t = {}) {
  return [nFe.base, t.selected && nFe.selected, t.inSubmenu && !t.disabled && nFe.submenuHover, t.focused && nFe.focused, t.expanded && nFe.expanded, t.disabled && nFe.disabled, t.disabled && t.focused && nFe.disabledFocused, t.variant === "muted" && nFe.muted, t.variant === "muted" && t.focused && nFe.mutedFocused, t.indent && nFe.indent];
}
function sHy() {
  return huh.disabled;
}
function oHy(t = {}) {
  return [iFe.left, t.wideLeft && iFe.leftWide];
}
function aHy() {
  return iFe.content;
}
function lHy(t = {}) {
  return [iFe.right, t.disabled && iFe.rightDisabled, t.trailingHidden && iFe.rightHidden];
}
function cHy() {
  return iFe.submenuRight;
}
function uHy() {
  return iFe.wrapper;
}
function dHy() {
  return [n8t.root, iFe.title];
}
function hHy() {
  return [Gj.root, n8t.root, iFe.description];
}
function pHy(t) {
  return [GSt.wrapper, t && GSt.wrapperInline];
}
function mHy(t) {
  return [n8t.root, GSt.title, t && GSt.titleInline];
}
function gHy({ inline: t, wrap: e }) {
  return [Gj.root, n8t.root, GSt.subtitle, t && GSt.subtitleInline, e && GSt.subtitleWrap];
}
function fHy() {
  return duh.row;
}
function vHy() {
  return Cci.wrapper;
}
function _Hy(t) {
  return [Gj.root, Cci.title, t && Cci.titleAction];
}
function bHy() {
  return Cci.textAction;
}
function yHy() {
  return uuh.divider;
}
function ita() {
  return nPr.surface;
}
function luh(t) {
  switch (t) {
    case "default":
      return;
    case "medium":
      return nPr.surfaceMedium;
    case "wide":
      return nPr.surfaceWide;
    default:
      return t;
  }
}
function SHy(t) {
  return [Gj.root, Tci.empty, t && Tci.emptyIndent];
}
function kHy() {
  return [kz.root, Tci.loading];
}
function wHy() {
  return Tci.loadingSpinner;
}
var wci, cuh, Gwe, nFe, iFe, GSt, Cci, uuh, duh, nPr, Tci, huh, 