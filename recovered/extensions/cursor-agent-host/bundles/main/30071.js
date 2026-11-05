// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 30071 range:4900877..4902725
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30071: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.DiagAPI = void 0;
    const n = r(14982), s = r(74975), o = r(89340), i = r(27976);
    class a {
      constructor() {
        function e2(e3) {
          return function(...t3) {
            const r2 = (0, i.getGlobal)("diag");
            if (r2) return r2[e3](...t3);
          };
        }
        const t2 = this;
        t2.setLogger = (e3, r2 = { logLevel: o.DiagLogLevel.INFO }) => {
          var n2, a2, c;
          if (e3 === t2) {
            const e4 = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
            return t2.error(null !== (n2 = e4.stack) && void 0 !== n2 ? n2 : e4.message), false;
          }
          "number" == typeof r2 && (r2 = { logLevel: r2 });
          const l = (0, i.getGlobal)("diag"), u = (0, s.createLogLevelDiagLogger)(null !== (a2 = r2.logLevel) && void 0 !== a2 ? a2 : o.DiagLogLevel.INFO, e3);
          if (l && !r2.suppressOverrideMessage) {
            const e4 = null !== (c = new Error().stack) && void 0 !== c ? c : "<failed to generate stacktrace>";
            l.warn(`Current logger will be overwritten from ${e4}`), u.warn(`Current logger will overwrite one already registered from ${e4}`);
          }
          return (0, i.registerGlobal)("diag", u, t2, true);
        }, t2.disable = () => {
          (0, i.unregisterGlobal)("diag", t2);
        }, t2.createComponentLogger = (e3) => new n.DiagComponentLogger(e3), t2.verbose = e2("verbose"), t2.debug = e2("debug"), t2.info = e2("info"), t2.warn = e2("warn"), t2.error = e2("error");
      }
      static instance() {
        return this._instance || (this._instance = new a()), this._instance;
      }
    }
    t.DiagAPI = a;
  }