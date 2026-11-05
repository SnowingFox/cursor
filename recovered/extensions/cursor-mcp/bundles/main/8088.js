// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8088 range:751797..752335
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8088: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { e: () => o2 });
    const n2 = 1e3;
    async function o2(e3) {
      const t3 = [], r3 = /* @__PURE__ */ new Set();
      let o3;
      for (let s2 = 1; ; s2++) {
        const i2 = await e3.fetchPage(o3), a2 = e3.itemsOf(i2);
        t3.push(...a2);
        const c = e3.nextCursorOf(i2);
        if (!c || r3.has(c)) return t3;
        if (s2 >= n2) throw new Error(`MCP list did not end after ${n2} pages; refusing to keep paging`);
        r3.add(c), o3 = c;
      }
    }
  }