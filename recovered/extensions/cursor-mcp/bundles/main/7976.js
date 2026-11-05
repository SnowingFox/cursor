// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7976 range:729352..730860
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7976: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.unregisterGlobal = t2.getGlobal = t2.registerGlobal = void 0;
    const n2 = r2(7705), o2 = r2(4913), s2 = r2(9899), i2 = o2.VERSION.split(".")[0], a2 = /* @__PURE__ */ Symbol.for(`opentelemetry.js.api.${i2}`), c = n2._globalThis;
    t2.registerGlobal = function(e3, t3, r3, n3 = false) {
      var s3;
      const i3 = c[a2] = null !== (s3 = c[a2]) && void 0 !== s3 ? s3 : { version: o2.VERSION };
      if (!n3 && i3[e3]) {
        const t4 = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e3}`);
        return r3.error(t4.stack || t4.message), false;
      }
      if (i3.version !== o2.VERSION) {
        const t4 = new Error(`@opentelemetry/api: Registration of version v${i3.version} for ${e3} does not match previously registered API v${o2.VERSION}`);
        return r3.error(t4.stack || t4.message), false;
      }
      return i3[e3] = t3, r3.debug(`@opentelemetry/api: Registered a global for ${e3} v${o2.VERSION}.`), true;
    }, t2.getGlobal = function(e3) {
      var t3, r3;
      const n3 = null === (t3 = c[a2]) || void 0 === t3 ? void 0 : t3.version;
      if (n3 && (0, s2.isCompatible)(n3)) return null === (r3 = c[a2]) || void 0 === r3 ? void 0 : r3[e3];
    }, t2.unregisterGlobal = function(e3, t3) {
      t3.debug(`@opentelemetry/api: Unregistering a global for ${e3} v${o2.VERSION}.`);
      const r3 = c[a2];
      r3 && delete r3[e3];
    };
  }