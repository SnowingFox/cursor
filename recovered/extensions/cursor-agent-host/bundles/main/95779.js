// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 95779 range:14558103..14559387
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95779: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.safeToString = t.objectToString = void 0, t.createPromiseCallback = function(e2) {
      let t2, r2, n;
      const s = new Promise((e3, t3) => {
        r2 = e3, n = t3;
      });
      t2 = "function" == typeof e2 ? (t3, r3) => {
        try {
          t3 ? e2(t3) : e2(null, r3);
        } catch (e3) {
          n(e3 instanceof Error ? e3 : new Error());
        }
      } : (e3, t3) => {
        try {
          e3 ? n(e3) : r2(t3);
        } catch (e4) {
          n(e4 instanceof Error ? e4 : new Error());
        }
      };
      return { promise: s, callback: t2, resolve: (e3) => (t2(null, e3), s), reject: (e3) => (t2(e3), s) };
    }, t.inOperator = function(e2, t2) {
      return e2 in t2;
    };
    t.objectToString = (e2) => Object.prototype.toString.call(e2);
    const r = (e2, n = /* @__PURE__ */ new WeakSet()) => "object" != typeof e2 || null === e2 ? String(e2) : "function" == typeof e2.toString ? Array.isArray(e2) ? ((e3, n2) => "function" != typeof e3.join ? (0, t.objectToString)(e3) : (n2.add(e3), e3.map((e4) => null == e4 || n2.has(e4) ? "" : r(e4, n2)).join()))(e2, n) : String(e2) : (0, t.objectToString)(e2);
    t.safeToString = (e2) => r(e2);
  }