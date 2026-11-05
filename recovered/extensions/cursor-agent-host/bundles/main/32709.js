// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 32709 range:6568351..6569342
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
32709: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createFailureSimulatorInterceptor = function(e2 = {}) {
      const { failureCount: t2 = 2, errorCode: r2 = n.Code.Unavailable, errorMessage: s = "Simulated connection failure", methodFilter: o = [], delayMs: i } = e2, a = /* @__PURE__ */ new Map();
      return (e3) => async (c) => {
        const l = c.method.name;
        if ("true" !== c.header.get("X-Cursor-RetryInterceptor-Enabled")) return e3(c);
        if (o.length > 0 && !o.includes(l)) return e3(c);
        const u = a.get(l) ?? 0;
        if (a.set(l, u + 1), u < t2) throw void 0 !== i && i > 0 && await new Promise((e4) => setTimeout(e4, i)), console.error(`=== FAILURE SIMULATOR: REQUEST IS BEING REJECTED ===
Method: ${l}
Attempt: ${u + 1}/${t2 + 1}
Error Code: ${r2}
Error Message: ${s}`), new n.ConnectError(`${s} (attempt ${u + 1}/${t2 + 1})`, r2);
        return e3(c);
      };
    };
    const n = r(22712);
  }