// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 14982 range:3995610..3996425
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
14982: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.DiagComponentLogger = void 0;
    const n = r(27976);
    function s(e2, t2, r2) {
      const s2 = (0, n.getGlobal)("diag");
      if (s2) return r2.unshift(t2), s2[e2](...r2);
    }
    t.DiagComponentLogger = class {
      constructor(e2) {
        this._namespace = e2.namespace || "DiagComponentLogger";
      }
      debug(...e2) {
        return s("debug", this._namespace, e2);
      }
      error(...e2) {
        return s("error", this._namespace, e2);
      }
      info(...e2) {
        return s("info", this._namespace, e2);
      }
      warn(...e2) {
        return s("warn", this._namespace, e2);
      }
      verbose(...e2) {
        return s("verbose", this._namespace, e2);
      }
    };
  }