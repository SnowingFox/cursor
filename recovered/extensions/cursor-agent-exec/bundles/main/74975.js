// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 74975 range:6411294..6412019
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74975: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createLogLevelDiagLogger = void 0;
    const n = r(89340);
    t.createLogLevelDiagLogger = function(e2, t2) {
      function r2(r3, n2) {
        const s = t2[r3];
        return "function" == typeof s && e2 >= n2 ? s.bind(t2) : function() {
        };
      }
      return e2 < n.DiagLogLevel.NONE ? e2 = n.DiagLogLevel.NONE : e2 > n.DiagLogLevel.ALL && (e2 = n.DiagLogLevel.ALL), t2 = t2 || {}, { error: r2("error", n.DiagLogLevel.ERROR), warn: r2("warn", n.DiagLogLevel.WARN), info: r2("info", n.DiagLogLevel.INFO), debug: r2("debug", n.DiagLogLevel.DEBUG), verbose: r2("verbose", n.DiagLogLevel.VERBOSE) };
    };
  }