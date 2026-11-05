// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 9909 range:712895..713564
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9909: (e2, A2, t2) => {
    const { addAbortListener: n2 } = t2(9361), { RequestAbortedError: r2 } = t2(7902), o2 = /* @__PURE__ */ Symbol("kListener"), s = /* @__PURE__ */ Symbol("kSignal");
    function a(e3) {
      e3.abort ? e3.abort() : e3.onError(new r2());
    }
    e2.exports = { addSignal: function(e3, A3) {
      e3[s] = null, e3[o2] = null, A3 && (A3.aborted ? a(e3) : (e3[s] = A3, e3[o2] = () => {
        a(e3);
      }, n2(e3[s], e3[o2])));
    }, removeSignal: function(e3) {
      e3[s] && ("removeEventListener" in e3[s] ? e3[s].removeEventListener("abort", e3[o2]) : e3[s].removeListener("abort", e3[o2]), e3[s] = null, e3[o2] = null);
    } };
  }