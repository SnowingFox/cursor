// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 27976 range:905260..906740
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27976: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
    const n = r(57705), o = r(14913), s = r(99899), i = o.VERSION.split(".")[0], a = /* @__PURE__ */ Symbol.for(`opentelemetry.js.api.${i}`), l = n._globalThis;
    t.registerGlobal = function(e2, t2, r2, n2 = false) {
      var s2;
      const i2 = l[a] = null !== (s2 = l[a]) && void 0 !== s2 ? s2 : { version: o.VERSION };
      if (!n2 && i2[e2]) {
        const t3 = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e2}`);
        return r2.error(t3.stack || t3.message), false;
      }
      if (i2.version !== o.VERSION) {
        const t3 = new Error(`@opentelemetry/api: Registration of version v${i2.version} for ${e2} does not match previously registered API v${o.VERSION}`);
        return r2.error(t3.stack || t3.message), false;
      }
      return i2[e2] = t2, r2.debug(`@opentelemetry/api: Registered a global for ${e2} v${o.VERSION}.`), true;
    }, t.getGlobal = function(e2) {
      var t2, r2;
      const n2 = null === (t2 = l[a]) || void 0 === t2 ? void 0 : t2.version;
      if (n2 && (0, s.isCompatible)(n2)) return null === (r2 = l[a]) || void 0 === r2 ? void 0 : r2[e2];
    }, t.unregisterGlobal = function(e2, t2) {
      t2.debug(`@opentelemetry/api: Unregistering a global for ${e2} v${o.VERSION}.`);
      const r2 = l[a];
      r2 && delete r2[e2];
    };
  }