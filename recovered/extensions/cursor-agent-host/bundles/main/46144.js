// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 46144 range:7902586..7904328
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
46144: (e, t, r) => {
    "use strict";
    function n(e2) {
      const { backend: t2, labels: r2 } = e2;
      function n2(e3) {
        return { ...r2, ...e3 };
      }
      return { record: (e3, r3, s2, o2) => {
        t2.record(e3, r3, s2, n2(o2));
      }, increment: (e3, r3, s2, o2) => {
        t2.increment(e3, r3, s2, n2(o2));
      }, gauge: (e3, r3, s2, o2) => {
        t2.gauge(e3, r3, s2, n2(o2));
      }, histogram: (e3, r3, s2, o2) => {
        t2.histogram(e3, r3, s2, n2(o2));
      } };
    }
    r.d(t, { Pu: () => i, wt: () => a, v5: () => c, ts: () => n, Fm: () => s });
    const s = (0, r(33002).cF)(/* @__PURE__ */ Symbol("metricsBackend"), { record: () => {
    }, increment: () => {
    }, gauge: () => {
    }, histogram: () => {
    } });
    function o(e2) {
      return e2.get(s);
    }
    function i(e2, t2) {
      const r2 = { name: e2, type: "counter", description: t2?.description, labelNames: t2?.labelNames };
      return { increment: (e3, t3, n2) => {
        o(e3).increment(e3, r2, t3 ?? 1, n2);
      }, record: (e3, t3, n2) => {
        o(e3).record(e3, r2, t3, n2);
      } };
    }
    function a(e2, t2) {
      const r2 = { name: e2, type: "gauge", description: t2?.description, labelNames: t2?.labelNames };
      return { gauge: (e3, t3, n2) => {
        o(e3).gauge(e3, r2, t3, n2);
      }, record: (e3, t3, n2) => {
        o(e3).record(e3, r2, t3, n2);
      } };
    }
    function c(e2, t2) {
      const r2 = { name: e2, type: "histogram", description: t2?.description, labelNames: t2?.labelNames };
      return { histogram: (e3, t3, n2) => {
        o(e3).histogram(e3, r2, t3, n2);
      }, record: (e3, t3, n2) => {
        o(e3).record(e3, r2, t3, n2);
      } };
    }
  }