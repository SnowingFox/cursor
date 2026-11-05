// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 58878 range:9183166..9183733
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
58878: (e, t, r) => {
    "use strict";
    r.d(t, { K0: () => o, Nh: () => i, V2: () => a });
    const n = /* @__PURE__ */ Symbol.for("anysphere.agent-store-sync.cloud-subagent-store-preparers.v1");
    function s() {
      const e2 = Reflect.get(globalThis, n);
      if (e2 instanceof Set) return e2;
      const t2 = /* @__PURE__ */ new Set();
      return Reflect.set(globalThis, n, t2), t2;
    }
    function o(e2) {
      s().add(e2);
    }
    function i(e2) {
      s().delete(e2);
    }
    function a() {
      return s().values().next().value;
    }
  }