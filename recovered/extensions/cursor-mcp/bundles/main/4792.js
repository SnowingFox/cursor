// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4792 range:320675..321991
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4792: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { EL: () => o2, QD: () => c, Qt: () => u, nT: () => i2, q2: () => a2, zd: () => s2 });
    var n2 = r2(9052);
    function o2(e3) {
      const t3 = (0, n2.KR)(e3.identifier);
      if ("error" === e3.level) {
        const r3 = e3.error instanceof Error ? e3.error : void 0 !== e3.error ? new Error(String(e3.error)) : void 0;
        return void t3.error(e3.message, r3, e3.metadata);
      }
      "warn" !== e3.level ? "debug" !== e3.level ? t3.info(e3.message, e3.metadata) : t3.debug?.(e3.message, e3.metadata) : t3.warn(e3.message, e3.metadata);
    }
    function s2(e3) {
      return Object.fromEntries(Object.entries(e3).filter(([, e4]) => void 0 !== e4));
    }
    function i2(e3, t3) {
      const r3 = (function(e4) {
        try {
          const t4 = new URL(e4);
          return { host: t4.host, origin: t4.origin, pathname: t4.pathname };
        } catch {
          return { host: null, origin: null, pathname: null };
        }
      })(e3), n3 = false !== t3?.includePath;
      return { host: r3.host, origin: r3.origin, path: n3 ? r3.pathname : null };
    }
    function a2(e3, t3) {
      return i2(e3, t3);
    }
    function c(e3, t3) {
      return i2(e3, t3);
    }
    function u(e3) {
      return { mcpAuthMeta: e3 };
    }
  }