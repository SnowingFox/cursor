// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 27976 range:4838830..4840310
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27976: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
    const n = r(57705), s = r(14913), o = r(99899), i = s.VERSION.split(".")[0], a = /* @__PURE__ */ Symbol.for(`opentelemetry.js.api.${i}`), c = n._globalThis;
    t.registerGlobal = function(e2, t2, r2, n2 = false) {
      var o2;
      const i2 = c[a] = null !== (o2 = c[a]) && void 0 !== o2 ? o2 : { version: s.VERSION };
      if (!n2 && i2[e2]) {
        const t3 = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e2}`);
        return r2.error(t3.stack || t3.message), false;
      }
      if (i2.version !== s.VERSION) {
        const t3 = new Error(`@opentelemetry/api: Registration of version v${i2.version} for ${e2} does not match previously registered API v${s.VERSION}`);
        return r2.error(t3.stack || t3.message), false;
      }
      return i2[e2] = t2, r2.debug(`@opentelemetry/api: Registered a global for ${e2} v${s.VERSION}.`), true;
    }, t.getGlobal = function(e2) {
      var t2, r2;
      const n2 = null === (t2 = c[a]) || void 0 === t2 ? void 0 : t2.version;
      if (n2 && (0, o.isCompatible)(n2)) return null === (r2 = c[a]) || void 0 === r2 ? void 0 : r2[e2];
    }, t.unregisterGlobal = function(e2, t2) {
      t2.debug(`@opentelemetry/api: Unregistering a global for ${e2} v${s.VERSION}.`);
      const r2 = c[a];
      r2 && delete r2[e2];
    };
  }