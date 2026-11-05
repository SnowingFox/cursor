// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9206 range:882508..883213
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9206: (e2, t2, r2) => {
    "use strict";
    function n2(e3) {
      const t3 = new TextEncoder().encode(e3);
      let r3 = "";
      for (const e4 of t3) r3 += String.fromCharCode(e4);
      return ("function" == typeof btoa ? btoa(r3) : Buffer.from(t3).toString("base64")).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/u, "");
    }
    function o2(e3) {
      const t3 = e3.padEnd(4 * Math.ceil(e3.length / 4), "=").replace(/-/g, "+").replace(/_/g, "/"), r3 = "function" == typeof atob ? atob(t3) : Buffer.from(t3, "base64").toString("binary"), n3 = Uint8Array.from(r3, (e4) => e4.charCodeAt(0));
      return new TextDecoder().decode(n3);
    }
    r2.d(t2, { $: () => n2, Z: () => o2 });
  }