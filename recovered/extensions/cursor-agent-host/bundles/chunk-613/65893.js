// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 65893 range:382888..383580
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
65893: (A, e, t) => {
  const { addAbortListener: r } = t(55201), { RequestAbortedError: s } = t(38238), o = /* @__PURE__ */ Symbol("kListener"), n = /* @__PURE__ */ Symbol("kSignal");
  function i(A2) {
    A2.abort ? A2.abort(A2[n]?.reason) : A2.reason = A2[n]?.reason ?? new s(), a(A2);
  }
  function a(A2) {
    A2[n] && ("removeEventListener" in A2[n] ? A2[n].removeEventListener("abort", A2[o]) : A2[n].removeListener("abort", A2[o]), A2[n] = null, A2[o] = null);
  }
  A.exports = { addSignal: function(A2, e2) {
    A2.reason = null, A2[n] = null, A2[o] = null, e2 && (e2.aborted ? i(A2) : (A2[n] = e2, A2[o] = () => {
      i(A2);
    }, r(A2[n], A2[o])));
  }, removeSignal: a };
}