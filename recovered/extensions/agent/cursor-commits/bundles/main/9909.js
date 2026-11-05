// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 9909 range:713970..714651
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9909: (e2, n2, a2) => {
    const { addAbortListener: t2 } = a2(9361), { RequestAbortedError: s2 } = a2(7902), o2 = /* @__PURE__ */ Symbol("kListener"), r2 = /* @__PURE__ */ Symbol("kSignal");
    function i2(e3) {
      e3.abort ? e3.abort() : e3.onError(new s2());
    }
    e2.exports = { addSignal: function(e3, n3) {
      e3[r2] = null, e3[o2] = null, n3 && (n3.aborted ? i2(e3) : (e3[r2] = n3, e3[o2] = () => {
        i2(e3);
      }, t2(e3[r2], e3[o2])));
    }, removeSignal: function(e3) {
      e3[r2] && ("removeEventListener" in e3[r2] ? e3[r2].removeEventListener("abort", e3[o2]) : e3[r2].removeListener("abort", e3[o2]), e3[r2] = null, e3[o2] = null);
    } };
  }