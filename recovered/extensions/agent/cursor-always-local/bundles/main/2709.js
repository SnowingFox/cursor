// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2709 range:778159..779167
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2709: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.createFailureSimulatorInterceptor = function(t3 = {}) {
      const { failureCount: e3 = 2, errorCode: r3 = n2.Code.Unavailable, errorMessage: s2 = "Simulated connection failure", methodFilter: i2 = [], delayMs: o2 } = t3, a = /* @__PURE__ */ new Map();
      return (t4) => async (u) => {
        const c = u.method.name;
        if ("true" !== u.header.get("X-Cursor-RetryInterceptor-Enabled")) return t4(u);
        if (i2.length > 0 && !i2.includes(c)) return t4(u);
        const l = a.get(c) ?? 0;
        if (a.set(c, l + 1), l < e3) throw void 0 !== o2 && o2 > 0 && await new Promise((t5) => setTimeout(t5, o2)), console.error(`=== FAILURE SIMULATOR: REQUEST IS BEING REJECTED ===
Method: ${c}
Attempt: ${l + 1}/${e3 + 1}
Error Code: ${r3}
Error Message: ${s2}`), new n2.ConnectError(`${s2} (attempt ${l + 1}/${e3 + 1})`, r3);
        return t4(u);
      };
    };
    const n2 = r2(8394);
  }