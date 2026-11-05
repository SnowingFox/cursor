// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: (footer) range:172375..174069
// basis: webpack-container confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
}, r = {};
  function e(n2) {
    var o2 = r[n2];
    if (void 0 !== o2) return o2.exports;
    var i2 = r[n2] = { exports: {} };
    return t[n2].call(i2.exports, i2, i2.exports, e), i2.exports;
  }
  e.d = (t2, r2) => {
    for (var n2 in r2) e.o(r2, n2) && !e.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: r2[n2] });
  }, e.o = (t2, r2) => Object.prototype.hasOwnProperty.call(t2, r2), e.r = (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  };
  var n = {};
  e.r(n), e.d(n, { activate: () => i, deactivate: () => a });
  e(2916), e(3261), e(7157), e(112), e(5263), e(2861), e(3825), e(789), e(6878), e(3007), e(254), e(5767), e(3277), e(2502), e(6247), e(7037), e(3486), e(1789), e(116), e(3749), e(985), e(7496);
  const o = require("os");
  if (void 0 === globalThis.navigator) {
    const t2 = process.version.match(/^v(\d+)/)?.[1] || "0", r2 = "function" == typeof o.availableParallelism ? o.availableParallelism() : o.cpus().length;
    let e2 = "en-US";
    try {
      const t3 = Intl.DateTimeFormat().resolvedOptions().locale;
      t3 && (e2 = t3);
    } catch {
    }
    const n2 = process.platform, i2 = `Node.js/${t2}`;
    Object.defineProperty(globalThis, "navigator", { value: { hardwareConcurrency: r2, language: e2, languages: [e2], platform: n2, userAgent: i2 }, writable: false, configurable: false, enumerable: true });
  }
  function i(t2) {
  }
  function a() {
  }
  var u = exports;
  for (var s in n) u[s] = n[s];
  n.__esModule && Object.defineProperty(u, "__esModule", { value: true });
})();
