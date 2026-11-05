// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9909 range:852285..852954
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9909: (e2, t2, A2) => {
    const { addAbortListener: n2 } = A2(9361), { RequestAbortedError: r2 } = A2(7902), o2 = /* @__PURE__ */ Symbol("kListener"), s = /* @__PURE__ */ Symbol("kSignal");
    function i(e3) {
      e3.abort ? e3.abort() : e3.onError(new r2());
    }
    e2.exports = { addSignal: function(e3, t3) {
      e3[s] = null, e3[o2] = null, t3 && (t3.aborted ? i(e3) : (e3[s] = t3, e3[o2] = () => {
        i(e3);
      }, n2(e3[s], e3[o2])));
    }, removeSignal: function(e3) {
      e3[s] && ("removeEventListener" in e3[s] ? e3[s].removeEventListener("abort", e3[o2]) : e3[s].removeListener("abort", e3[o2]), e3[s] = null, e3[o2] = null);
    } };
  }