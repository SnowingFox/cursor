// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6735 range:571539..572259
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6735: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.DiagConsoleLogger = void 0;
    const r2 = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }];
    t2.DiagConsoleLogger = class {
      constructor() {
        function e3(e4) {
          return function(...t3) {
            if (console) {
              let r3 = console[e4];
              if ("function" != typeof r3 && (r3 = console.log), "function" == typeof r3) return r3.apply(console, t3);
            }
          };
        }
        for (let t3 = 0; t3 < r2.length; t3++) this[r2[t3].n] = e3(r2[t3].c);
      }
    };
  }