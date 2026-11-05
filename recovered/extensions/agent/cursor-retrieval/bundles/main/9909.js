// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9909 range:1068521..1069202
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9909: (e2, a2, n2) => {
    const { addAbortListener: t2 } = n2(9361), { RequestAbortedError: s2 } = n2(7902), o2 = /* @__PURE__ */ Symbol("kListener"), r2 = /* @__PURE__ */ Symbol("kSignal");
    function i2(e3) {
      e3.abort ? e3.abort() : e3.onError(new s2());
    }
    e2.exports = { addSignal: function(e3, a3) {
      e3[r2] = null, e3[o2] = null, a3 && (a3.aborted ? i2(e3) : (e3[r2] = a3, e3[o2] = () => {
        i2(e3);
      }, t2(e3[r2], e3[o2])));
    }, removeSignal: function(e3) {
      e3[r2] && ("removeEventListener" in e3[r2] ? e3[r2].removeEventListener("abort", e3[o2]) : e3[r2].removeListener("abort", e3[o2]), e3[r2] = null, e3[o2] = null);
    } };
  }