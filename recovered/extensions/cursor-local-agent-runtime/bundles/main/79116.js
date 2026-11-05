// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 79116 range:7349402..7350114
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79116: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.DiagConsoleLogger = void 0;
    const r = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }];
    t.DiagConsoleLogger = class {
      constructor() {
        function e2(e3) {
          return function(...t2) {
            if (console) {
              let r2 = console[e3];
              if ("function" != typeof r2 && (r2 = console.log), "function" == typeof r2) return r2.apply(console, t2);
            }
          };
        }
        for (let t2 = 0; t2 < r.length; t2++) this[r[t2].n] = e2(r[t2].c);
      }
    };
  }