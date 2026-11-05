// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 9909 range:744490..745159
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9909: (e2, n2, t2) => {
    const { addAbortListener: a2 } = t2(9361), { RequestAbortedError: s2 } = t2(7902), o2 = /* @__PURE__ */ Symbol("kListener"), r = /* @__PURE__ */ Symbol("kSignal");
    function i(e3) {
      e3.abort ? e3.abort() : e3.onError(new s2());
    }
    e2.exports = { addSignal: function(e3, n3) {
      e3[r] = null, e3[o2] = null, n3 && (n3.aborted ? i(e3) : (e3[r] = n3, e3[o2] = () => {
        i(e3);
      }, a2(e3[r], e3[o2])));
    }, removeSignal: function(e3) {
      e3[r] && ("removeEventListener" in e3[r] ? e3[r].removeEventListener("abort", e3[o2]) : e3[r].removeListener("abort", e3[o2]), e3[r] = null, e3[o2] = null);
    } };
  }