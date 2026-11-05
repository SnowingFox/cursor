// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Diagnostics.js range:624585..626386
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.601Z
zTo = L({ "Diagnostics.js"() {
  "use strict";
  E(), IZn = /* @__PURE__ */ new Map(), rgr = "start", sgr = "end", UQu = "statsig::diagnostics", aAe = { _getMarkers: (t) => IZn.get(t), _markInitOverallStart: (t) => {
    Kdn(t, Vdn({}, rgr, "overall"));
  }, _markInitOverallEnd: (t, e, n) => {
    Kdn(t, Vdn({ success: e, error: e ? void 0 : { name: "InitializeError", message: "Failed to initialize" }, evaluationDetails: n }, sgr, "overall"));
  }, _markInitNetworkReqStart: (t, e) => {
    Kdn(t, Vdn(e, rgr, "initialize", "network_request"));
  }, _markInitNetworkReqEnd: (t, e) => {
    Kdn(t, Vdn(e, sgr, "initialize", "network_request"));
  }, _markInitProcessStart: (t) => {
    Kdn(t, Vdn({}, rgr, "initialize", "process"));
  }, _markInitProcessEnd: (t, e) => {
    Kdn(t, Vdn(e, sgr, "initialize", "process"));
  }, _clearMarkers: (t) => {
    IZn.delete(t);
  }, _formatError(t) {
    if (t && typeof t == "object") return { code: qTo(t, "code"), name: qTo(t, "name"), message: qTo(t, "message") };
  }, _getDiagnosticsData(t, e, n, i) {
    return { success: t?.ok === true, statusCode: t?.status, sdkRegion: t?.headers?.get("x-statsig-region"), isDelta: n.includes('"is_delta":true') === true ? true : void 0, attempt: e, error: aAe._formatError(i) };
  }, _enqueueDiagnosticsEvent(t, e, n, i) {
    const r = aAe._getMarkers(n);
    if (r == null || r.length <= 0) return -1;
    const s = r[r.length - 1].timestamp - r[0].timestamp;
    aAe._clearMarkers(n);
    const o = Syy(t, { context: "initialize", markers: r.slice(), statsigOptions: i });
    return e.enqueue(o), s;
  } };
} });
function jQu(t) {
  return Array.isArray(t) ? "array" : typeof t;
}
function $Qu(t, e) {
  const n = (i) => Array.isArray(i) ? "array" : i === null ? "null" : typeof i;
  return n(t) === n(e);
}
