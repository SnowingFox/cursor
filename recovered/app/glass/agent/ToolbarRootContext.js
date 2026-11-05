// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToolbarRootContext.js range:6139441..6141952
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.276Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, formatErrorMessage.js
// anchors: displayName=ToolbarRootContext
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, formatErrorMessage.js
// anchors: displayName=ToolbarRootContext
// path-candidate: none (no nls basename match; path inferred, confidence C)
YJo = L({ "ToolbarRootContext.js"() {
  E(), zS(), KJo = Blh.createContext(void 0), process.env.NODE_ENV !== "production" && (KJo.displayName = "ToolbarRootContext");
} });
function Qjy(t) {
  return mE(t) && t.tagName === "INPUT";
}
function Ulh(t) {
  return !!(Qjy(t) && t.selectionStart != null || mE(t) && t.tagName === "TEXTAREA");
}
function jlh(t, e, n, i) {
  if (!t || !e || !e.scrollTo) return;
  let r = t.scrollLeft, s = t.scrollTop;
  const o = t.clientWidth < t.scrollWidth, a = t.clientHeight < t.scrollHeight;
  if (o && i !== "vertical") {
    const l = $lh(t, e, "left"), c = I2r(t), u = I2r(e);
    n === "ltr" && (l + e.offsetWidth + u.scrollMarginRight > t.scrollLeft + t.clientWidth - c.scrollPaddingRight ? r = l + e.offsetWidth + u.scrollMarginRight - t.clientWidth + c.scrollPaddingRight : l - u.scrollMarginLeft < t.scrollLeft + c.scrollPaddingLeft && (r = l - u.scrollMarginLeft - c.scrollPaddingLeft)), n === "rtl" && (l - u.scrollMarginRight < t.scrollLeft + c.scrollPaddingLeft ? r = l - u.scrollMarginLeft - c.scrollPaddingLeft : l + e.offsetWidth + u.scrollMarginRight > t.scrollLeft + t.clientWidth - c.scrollPaddingRight && (r = l + e.offsetWidth + u.scrollMarginRight - t.clientWidth + c.scrollPaddingRight));
  }
  if (a && i !== "horizontal") {
    const l = $lh(t, e, "top"), c = I2r(t), u = I2r(e);
    l - u.scrollMarginTop < t.scrollTop + c.scrollPaddingTop ? s = l - u.scrollMarginTop - c.scrollPaddingTop : l + e.offsetHeight + u.scrollMarginBottom > t.scrollTop + t.clientHeight - c.scrollPaddingBottom && (s = l + e.offsetHeight + u.scrollMarginBottom - t.clientHeight + c.scrollPaddingBottom);
  }
  t.scrollTo({ left: r, top: s, behavior: "auto" });
}
function $lh(t, e, n) {
  const i = n === "left" ? "offsetLeft" : "offsetTop";
  let r = 0;
  for (; e.offsetParent && (r += e[i], e.offsetParent !== t); ) e = e.offsetParent;
  return r;
}
function I2r(t) {
  const e = getComputedStyle(t);
  return { scrollMarginTop: parseFloat(e.scrollMarginTop) || 0, scrollMarginRight: parseFloat(e.scrollMarginRight) || 0, scrollMarginBottom: parseFloat(e.scrollMarginBottom) || 0, scrollMarginLeft: parseFloat(e.scrollMarginLeft) || 0, scrollPaddingTop: parseFloat(e.scrollPaddingTop) || 0, scrollPaddingRight: parseFloat(e.scrollPaddingRight) || 0, scrollPaddingBottom: parseFloat(e.scrollPaddingBottom) || 0, scrollPaddingLeft: parseFloat(e.scrollPaddingLeft) || 0 };
}
var p7t, m7t, fbn, vbn, _bn, bbn, XJo, ZJo, QJo, Hlh, JJo, Wlh, eea, $St, tea, Glh, qlh, zlh, Vlh, 