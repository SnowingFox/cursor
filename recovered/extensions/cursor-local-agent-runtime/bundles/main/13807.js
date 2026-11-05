// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 13807 range:476180..477432
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13807: (e, t, r) => {
    "use strict";
    r.d(t, { Fm: () => n, Pu: () => s, v5: () => a, wt: () => i });
    const n = (0, r(33002).cF)(/* @__PURE__ */ Symbol("metricsBackend"), { record: () => {
    }, increment: () => {
    }, gauge: () => {
    }, histogram: () => {
    } });
    function o(e2) {
      return e2.get(n);
    }
    function s(e2, t2) {
      const r2 = { name: e2, type: "counter", description: t2?.description, labelNames: t2?.labelNames };
      return { increment: (e3, t3, n2) => {
        o(e3).increment(e3, r2, t3 ?? 1, n2);
      }, record: (e3, t3, n2) => {
        o(e3).record(e3, r2, t3, n2);
      } };
    }
    function i(e2, t2) {
      const r2 = { name: e2, type: "gauge", description: t2?.description, labelNames: t2?.labelNames };
      return { gauge: (e3, t3, n2) => {
        o(e3).gauge(e3, r2, t3, n2);
      }, record: (e3, t3, n2) => {
        o(e3).record(e3, r2, t3, n2);
      } };
    }
    function a(e2, t2) {
      const r2 = { name: e2, type: "histogram", description: t2?.description, labelNames: t2?.labelNames };
      return { histogram: (e3, t3, n2) => {
        o(e3).histogram(e3, r2, t3, n2);
      }, record: (e3, t3, n2) => {
        o(e3).record(e3, r2, t3, n2);
      } };
    }
  }