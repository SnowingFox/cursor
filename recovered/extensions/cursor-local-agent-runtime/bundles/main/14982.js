// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 14982 range:499453..500268
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
14982: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.DiagComponentLogger = void 0;
    const n = r(27976);
    function o(e2, t2, r2) {
      const o2 = (0, n.getGlobal)("diag");
      if (o2) return r2.unshift(t2), o2[e2](...r2);
    }
    t.DiagComponentLogger = class {
      constructor(e2) {
        this._namespace = e2.namespace || "DiagComponentLogger";
      }
      debug(...e2) {
        return o("debug", this._namespace, e2);
      }
      error(...e2) {
        return o("error", this._namespace, e2);
      }
      info(...e2) {
        return o("info", this._namespace, e2);
      }
      warn(...e2) {
        return o("warn", this._namespace, e2);
      }
      verbose(...e2) {
        return o("verbose", this._namespace, e2);
      }
    };
  }