// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6921 range:3768046..3768724
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6921: (t2, e2, r2) => {
    const { addAbortListener: n2 } = r2(3589), { RequestAbortedError: s2 } = r2(8762), i2 = /* @__PURE__ */ Symbol("kListener"), o2 = /* @__PURE__ */ Symbol("kSignal");
    function a(t3) {
      t3.abort ? t3.abort() : t3.onError(new s2());
    }
    t2.exports = { addSignal: function(t3, e3) {
      t3[o2] = null, t3[i2] = null, e3 && (e3.aborted ? a(t3) : (t3[o2] = e3, t3[i2] = () => {
        a(t3);
      }, n2(t3[o2], t3[i2])));
    }, removeSignal: function(t3) {
      t3[o2] && ("removeEventListener" in t3[o2] ? t3[o2].removeEventListener("abort", t3[i2]) : t3[o2].removeListener("abort", t3[i2]), t3[o2] = null, t3[i2] = null);
    } };
  }