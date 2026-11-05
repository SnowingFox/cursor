// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 26921 range:4745955..4746610
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
26921: (e, t, r) => {
    const { addAbortListener: n } = r(83589), { RequestAbortedError: s } = r(48762), o = /* @__PURE__ */ Symbol("kListener"), i = /* @__PURE__ */ Symbol("kSignal");
    function a(e2) {
      e2.abort ? e2.abort() : e2.onError(new s());
    }
    e.exports = { addSignal: function(e2, t2) {
      e2[i] = null, e2[o] = null, t2 && (t2.aborted ? a(e2) : (e2[i] = t2, e2[o] = () => {
        a(e2);
      }, n(e2[i], e2[o])));
    }, removeSignal: function(e2) {
      e2[i] && ("removeEventListener" in e2[i] ? e2[i].removeEventListener("abort", e2[o]) : e2[i].removeListener("abort", e2[o]), e2[i] = null, e2[o] = null);
    } };
  }