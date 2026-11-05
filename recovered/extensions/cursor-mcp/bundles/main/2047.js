// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2047 range:196519..197721
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2047: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { m: () => o2, u: () => s2 });
    var n2 = r2(1771);
    function o2(e3, t3) {
      if (void 0 === t3) return { headers: t3, cursorAuthHeaderValue: void 0, cursorAuthOrigin: void 0 };
      const r3 = Object.entries(t3), o3 = r3.find(([e4]) => e4.toLowerCase() === n2.Qy);
      if (void 0 === o3) return { headers: t3, cursorAuthHeaderValue: void 0, cursorAuthOrigin: void 0 };
      let s3;
      try {
        s3 = new URL(e3).origin;
      } catch {
        s3 = void 0;
      }
      return { headers: Object.fromEntries(r3.filter(([e4]) => e4.toLowerCase() !== n2.Qy)), cursorAuthHeaderValue: o3[1], cursorAuthOrigin: s3 };
    }
    function s2(e3, t3, r3) {
      return async (o3, s3) => {
        let i2;
        try {
          i2 = new URL("string" == typeof o3 ? o3 : o3.toString()).origin;
        } catch {
          return r3(o3, s3);
        }
        if (i2 !== t3) return r3(o3, s3);
        const a2 = await e3();
        if (void 0 === a2 || 0 === a2.length) return r3(o3, s3);
        const c = new Headers(s3?.headers);
        return c.set(n2.Qy, a2), r3(o3, { ...s3, headers: c, redirect: "manual" });
      };
    }
  }