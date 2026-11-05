// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4982 range:356642..357470
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4982: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.DiagComponentLogger = void 0;
    const n2 = r2(7976);
    function o2(e3, t3, r3) {
      const o3 = (0, n2.getGlobal)("diag");
      if (o3) return r3.unshift(t3), o3[e3](...r3);
    }
    t2.DiagComponentLogger = class {
      constructor(e3) {
        this._namespace = e3.namespace || "DiagComponentLogger";
      }
      debug(...e3) {
        return o2("debug", this._namespace, e3);
      }
      error(...e3) {
        return o2("error", this._namespace, e3);
      }
      info(...e3) {
        return o2("info", this._namespace, e3);
      }
      warn(...e3) {
        return o2("warn", this._namespace, e3);
      }
      verbose(...e3) {
        return o2("verbose", this._namespace, e3);
      }
    };
  }