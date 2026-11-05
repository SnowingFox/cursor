// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 28117 range:4853245..4853930
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28117: (e, t, r) => {
    "use strict";
    r.d(t, { an: () => c, qU: () => a, uw: () => l });
    var n = r(33002);
    const s = new (r(68505)).q({ max: 1e5 }), o = "abcdefghijklmnopqrstuvwxyz0123456789";
    function i(e2) {
      const t2 = s.get(e2) ?? 0;
      return s.set(e2, t2 + 1), t2;
    }
    function a(e2) {
      return `${e2}-${i(e2)}-${(function() {
        const e3 = new Uint8Array(4);
        return crypto.getRandomValues(e3), Array.from(e3, (e4) => o.charAt(e4 % o.length)).join("");
      })()}`;
    }
    const c = (0, n.cF)(/* @__PURE__ */ Symbol("invocationIdGenerator"), () => crypto.randomUUID());
    function l(e2) {
      return e2.get(c)();
    }
  }