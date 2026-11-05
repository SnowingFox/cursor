// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 71 range:14969..16835
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
71: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.DiagAPI = void 0;
    const n2 = r2(4982), o2 = r2(4975), s2 = r2(9340), i2 = r2(7976);
    class a2 {
      constructor() {
        function e3(e4) {
          return function(...t4) {
            const r3 = (0, i2.getGlobal)("diag");
            if (r3) return r3[e4](...t4);
          };
        }
        const t3 = this;
        t3.setLogger = (e4, r3 = { logLevel: s2.DiagLogLevel.INFO }) => {
          var n3, a3, c;
          if (e4 === t3) {
            const e5 = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
            return t3.error(null !== (n3 = e5.stack) && void 0 !== n3 ? n3 : e5.message), false;
          }
          "number" == typeof r3 && (r3 = { logLevel: r3 });
          const u = (0, i2.getGlobal)("diag"), l = (0, o2.createLogLevelDiagLogger)(null !== (a3 = r3.logLevel) && void 0 !== a3 ? a3 : s2.DiagLogLevel.INFO, e4);
          if (u && !r3.suppressOverrideMessage) {
            const e5 = null !== (c = new Error().stack) && void 0 !== c ? c : "<failed to generate stacktrace>";
            u.warn(`Current logger will be overwritten from ${e5}`), l.warn(`Current logger will overwrite one already registered from ${e5}`);
          }
          return (0, i2.registerGlobal)("diag", l, t3, true);
        }, t3.disable = () => {
          (0, i2.unregisterGlobal)("diag", t3);
        }, t3.createComponentLogger = (e4) => new n2.DiagComponentLogger(e4), t3.verbose = e3("verbose"), t3.debug = e3("debug"), t3.info = e3("info"), t3.warn = e3("warn"), t3.error = e3("error");
      }
      static instance() {
        return this._instance || (this._instance = new a2()), this._instance;
      }
    }
    t2.DiagAPI = a2;
  }