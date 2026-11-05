// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelPickerContext.js range:16491980..16494039
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.135Z
// wrapper: JY deps:6 [E, R0a, Dfi, nVS, rVS, VFe]
// declarations: getRoutedModelViewConfig, pVS, qop, L0a, zop, Vop, u8r, mVS, Kop, O0a, d8r, Yop, gVS, F0a, fVS, Xop
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
JY = L({
  "ModelPickerContext.js"() {
    "use strict";

    E(), R0a(), Dfi(), nVS(), rVS(), VFe(), c8r = oVS(null), jop = {
      selections: [],
      selectionWhenAutoIsUnselected: void 0,
      viewWhileOpened: "named-model",
      maxMode: false,
      multiModelMode: false
    }, $op = Object.freeze([]), N0a = Object.freeze([]), Hop = () => {}, Wop = {
      rowMode: "legacy"
    }, Gop = {
      searchPlaceholder: "Search models",
      noModelsFound: "No models found",
      modelSelection: "Model selection",
      countOptions: "Count options",
      restoreDefaultParameters: "Restore default parameters",
      editParameters: "Edit"
    };
  }
});
function getRoutedModelViewConfig(t) {
  return t?.routedModelViewConfig;
}
function pVS(t) {
  const e = getRoutedModelViewConfig(t)?.title?.trim();
  return e || void 0;
}
function qop(t) {
  const n = getRoutedModelViewConfig(t)?.routedModelViewToNamedViewToggle?.subtitle?.trim();
  if (n !== void 0 && n !== "") return n;
}
function L0a(t) {
  return getRoutedModelViewConfig(t)?.routedModelViewToNamedViewToggle?.setToLastNamedModel;
}
function zop(t) {
  const n = getRoutedModelViewConfig(t)?.routedModelViewToNamedViewToggle?.titleMarkdown?.trim();
  return n || void 0;
}
function Vop(t) {
  return getRoutedModelViewConfig(t)?.routedModelViewToNamedViewButton !== void 0;
}
function u8r(t) {
  return getRoutedModelViewConfig(t)?.routedModelViewToNamedViewToggle !== void 0;
}
function mVS(t) {
  return getRoutedModelViewConfig(t)?.hideSearchBar === true;
}
function Kop(t) {
  return t?.hideSearchBar === true;
}
function O0a(t) {
  return t?.hideAddModels === true;
}
function d8r(t) {
  const e = t?.modelSelectionRestrictionMessage?.trim();
  return e || void 0;
}
function Yop(t) {
  return getRoutedModelViewConfig(t)?.hideRoutedModelView === true;
}
function gVS(t) {
  const n = getRoutedModelViewConfig(t)?.routedModelViewToNamedViewButton?.markdown?.trim();
  return n || void 0;
}
function F0a(t) {
  return t?.namedModelsViewConfig;
}
function fVS(t) {
  return F0a(t)?.namedViewToRoutedModelViewButton !== void 0;
}
function Xop(t, e) {
  return e !== true && fVS(t);
}
function vVS(t) {
  return F0a(t)?.namedViewToRoutedModelViewToggle !== void 0;
}
function _VS(t) {
  const n = F0a(t)?.namedViewToRoutedModelViewButton?.markdown?.trim();
  return n || void 0;
}
