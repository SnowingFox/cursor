// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DefaultDiff.constants.js range:14309858..14313319
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E
// wrapper-init: VLr
// hoisted-owner: DefaultDiff.stylex.js (app-out-vs-workbench-workbench-glass-main-js:2031); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

VLr = L({ "DefaultDiff.constants.js"() {
  "use strict";
  E(), sSn = 20;
} });
function t5h({ split: t, hideScrollbar: e }) {
  return [wv.root, h5h.selectionGlassModes, t && wv.rootSplit, e && wv.rootHideScrollbar];
}
function n5h({ wordWrap: t, inSplitPane: e }) {
  return [wv.content, e && wv.contentInSplitPane, t && !e && wv.contentWordWrap, t && e && wv.contentInSplitPaneWordWrap];
}
function s_S() {
  return wv.virtualGroupWrapper;
}
function o_S() {
  return wv.interactiveRow;
}
function i5h() {
  return wv.selectionEndSentinel;
}
function KLr() {
  return wv.lineContentInteraction;
}
function r5h() {
  return wv.lineCodeArea;
}
function s5h() {
  return wv.lineCodeColumn;
}
function o5h() {
  return wv.splitCellCodeArea;
}
function a5h() {
  return wv.selectionRail;
}
function a_S({ placement: t, dragActive: e }) {
  return [wv.addLine, t === "gutter" ? wv.addLineInGutter : wv.addLineInLineContentInteraction, e && wv.addLineDragActive];
}
function l_S() {
  return wv.selectionOverlayDock;
}
function l5h({ type: t, rangeSelected: e }) {
  return [wv.line, t === "added" && wv.lineAdded, t === "removed" && wv.lineRemoved, t === "unchanged" && wv.lineUnchanged, e && wv.lineRangeSelected];
}
function YLr({ type: t, rangeSelected: e }) {
  return [wv.indicatorStrip, t === "added" && wv.indicatorStripAdded, t === "removed" && wv.indicatorStripRemoved, t === "unchanged" && wv.indicatorStripUnchanged, e && wv.indicatorStripRangeSelected];
}
function XLr({ type: t, rangeSelected: e, withIndicatorStrip: n }) {
  return [wv.gutter, t === "added" && wv.gutterAdded, t === "removed" && wv.gutterRemoved, e && wv.gutterRangeSelected, n && wv.gutterWithIndicatorStrip];
}
function ZLr({ dataType: t }) {
  return [wv.lineNumber, t === "added" && wv.lineNumberAdded, t === "removed" && wv.lineNumberRemoved];
}
function c5h({ type: t }) {
  return [wv.lineIndicator, t === "added" && wv.lineIndicatorAdded, t === "removed" && wv.lineIndicatorRemoved, t === "unchanged" && wv.lineIndicatorUnchanged];
}
function Lhi() {
  return wv.lineContent;
}
function c_S() {
  return wv.wrapRow;
}
function u_S() {
  return wv.wrapMeasureHost;
}
function QLr({ type: t, runStart: e = false, runEnd: n = false }) {
  return [t === "added" && wv.inlineAdded, t === "removed" && wv.inlineRemoved, e && wv.inlineRunStart, n && wv.inlineRunEnd];
}
function d_S({ noButtons: t, presentation: e = "default" }) {
  return [wv.separator, t && wv.separatorNoButtons, e === "unified-diff" ? d5h : null, e === "unified-diff" ? wv.separatorUnifiedDiff : null];
}
function h_S() {
  return wv.separatorButtons;
}
function p_S(t = "default") {
  return [wv.expandBtn, t === "unified-diff" ? wv.expandBtnUnifiedDiff : null];
}
function m_S() {
  return wv.expandBtnSecondIcon;
}
function g_S({ noButtons: t, presentation: e = "default", clickable: n = false }) {
  return [wv.separatorText, n && wv.separatorTextClickable, t && wv.separatorTextNoButtons, e === "unified-diff" ? wv.separatorTextUnifiedDiff : null];
}
function f_S() {
  return wv.separatorCopyText;
}
function v_S() {
  return wv.splitPanes;
}
function u5h({ second: t }) {
  return [wv.splitPane, t && wv.splitPaneSecond];
}
function Gha({ type: t, rangeSelected: e }) {
  return [wv.splitCell, t === "added" && wv.splitCellAdded, t === "removed" && wv.splitCellRemoved, t === "unchanged" && wv.splitCellUnchanged, t === "empty" && wv.splitCellEmpty, e && wv.splitCellRangeSelected];
}
var d5h, wv, h5h, 