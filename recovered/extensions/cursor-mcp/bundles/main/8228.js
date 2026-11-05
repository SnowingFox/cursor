// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8228 range:755042..756165
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8228: (e2, t2, r2) => {
    "use strict";
    function n2(e3) {
      if (!(e3 instanceof Error)) return false;
      const t3 = e3, r3 = e3.cause?.code;
      return "ECONNREFUSED" === t3.code || "ECONNREFUSED" === r3 || e3.message.includes("ECONNREFUSED");
    }
    function o2(e3) {
      const t3 = (function(e4) {
        if (!e4 || "object" != typeof e4) return;
        const t4 = e4.code;
        if ("number" == typeof t4 && t4 >= 100 && t4 <= 599) return t4;
        if ("string" == typeof t4 && /^\d{3}$/.test(t4) && Number(t4) >= 100 && Number(t4) <= 599) return Number(t4);
        const r3 = e4 instanceof Error || "string" == typeof e4.message ? e4.message : void 0;
        if (!r3) return;
        const n3 = r3.match(/\bHTTP\s+(\d{3})\b/i);
        if (!n3?.[1]) return;
        const o3 = Number.parseInt(n3[1], 10);
        return Number.isNaN(o3) ? void 0 : o3;
      })(e3);
      return void 0 !== t3 ? 400 === t3 || 404 === t3 || 405 === t3 : !!(e3 instanceof Error && e3.message.toLowerCase().includes("sessionid must be provided")) || n2(e3);
    }
    r2.d(t2, { P: () => o2, X: () => n2 });
  }