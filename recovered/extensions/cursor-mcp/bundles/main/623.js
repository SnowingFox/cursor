// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 623 range:47960..48872
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
623: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { ht: () => s2, rh: () => i2 });
    var n2 = r2(738);
    r2(768);
    function o2(e3) {
      return e3.trim().toLowerCase();
    }
    function s2({ mode: e3, tools: t3 }) {
      const r3 = (t3 ?? []).map(o2).filter((e4) => e4.length > 0);
      const n3 = void 0 === e3 ? void 0 : o2(e3);
      return "all" === n3 ? { mode: "all" } : "reads" === n3 ? { mode: "reads" } : r3.length > 0 ? { mode: "custom", tools: r3 } : { mode: "all" };
    }
    function i2(e3, t3) {
      switch (e3.mode) {
        case "all":
          return true;
        case "custom":
          return (function(e4, t4) {
            const r3 = o2(e4);
            return 0 !== r3.length && t4.some((e5) => o2(e5) === r3);
          })(t3.name, e3.tools);
        case "reads":
          return (0, n2.NY)(t3.annotations);
        default:
          return e3;
      }
    }
  }