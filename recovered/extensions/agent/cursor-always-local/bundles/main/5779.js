// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5779 range:1290707..1292015
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5779: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.safeToString = e2.objectToString = void 0, e2.createPromiseCallback = function(t3) {
      let e3, r3, n2;
      const s2 = new Promise((t4, e4) => {
        r3 = t4, n2 = e4;
      });
      e3 = "function" == typeof t3 ? (e4, r4) => {
        try {
          e4 ? t3(e4) : t3(null, r4);
        } catch (t4) {
          n2(t4 instanceof Error ? t4 : new Error());
        }
      } : (t4, e4) => {
        try {
          t4 ? n2(t4) : r3(e4);
        } catch (t5) {
          n2(t5 instanceof Error ? t5 : new Error());
        }
      };
      return { promise: s2, callback: e3, resolve: (t4) => (e3(null, t4), s2), reject: (t4) => (e3(t4), s2) };
    }, e2.inOperator = function(t3, e3) {
      return t3 in e3;
    };
    e2.objectToString = (t3) => Object.prototype.toString.call(t3);
    const r2 = (t3, n2 = /* @__PURE__ */ new WeakSet()) => "object" != typeof t3 || null === t3 ? String(t3) : "function" == typeof t3.toString ? Array.isArray(t3) ? ((t4, n3) => "function" != typeof t4.join ? (0, e2.objectToString)(t4) : (n3.add(t4), t4.map((t5) => null == t5 || n3.has(t5) ? "" : r2(t5, n3)).join()))(t3, n2) : String(t3) : (0, e2.objectToString)(t3);
    e2.safeToString = (t3) => r2(t3);
  }