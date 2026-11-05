// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 13807 range:883027..884279
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13807: (e, t, r) => {
    "use strict";
    r.d(t, { Fm: () => n, Pu: () => o, v5: () => a, wt: () => i });
    const n = (0, r(33002).cF)(/* @__PURE__ */ Symbol("metricsBackend"), { record: () => {
    }, increment: () => {
    }, gauge: () => {
    }, histogram: () => {
    } });
    function s(e2) {
      return e2.get(n);
    }
    function o(e2, t2) {
      const r2 = { name: e2, type: "counter", description: t2?.description, labelNames: t2?.labelNames };
      return { increment: (e3, t3, n2) => {
        s(e3).increment(e3, r2, t3 ?? 1, n2);
      }, record: (e3, t3, n2) => {
        s(e3).record(e3, r2, t3, n2);
      } };
    }
    function i(e2, t2) {
      const r2 = { name: e2, type: "gauge", description: t2?.description, labelNames: t2?.labelNames };
      return { gauge: (e3, t3, n2) => {
        s(e3).gauge(e3, r2, t3, n2);
      }, record: (e3, t3, n2) => {
        s(e3).record(e3, r2, t3, n2);
      } };
    }
    function a(e2, t2) {
      const r2 = { name: e2, type: "histogram", description: t2?.description, labelNames: t2?.labelNames };
      return { histogram: (e3, t3, n2) => {
        s(e3).histogram(e3, r2, t3, n2);
      }, record: (e3, t3, n2) => {
        s(e3).record(e3, r2, t3, n2);
      } };
    }
  }