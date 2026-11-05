// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8644 range:780102..781334
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8644: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { F: () => i2 });
    var n2 = r2(768);
    const o2 = ["0.0.0.0/0", "::/0"];
    function s2(e3) {
      const t3 = (e3 ?? []).filter((e4) => e4.trim().length > 0), r3 = t3.flatMap((e4) => {
        const t4 = (0, n2.bi)(e4);
        return void 0 === t4 ? [] : [t4];
      });
      return { hasInvalidEntries: r3.length !== t3.length, entries: r3 };
    }
    function i2(e3) {
      const t3 = true === e3.enabled, r3 = s2(e3.mcpNetworkDenylist), i3 = "deny_all" === e3.mcpNetworkMode || r3.entries.includes("*") || r3.hasInvalidEntries, a2 = t3 ? (function(e4) {
        if ("allow_all" === e4.mcpNetworkMode) return [...o2];
        const t4 = s2(e4.mcpNetworkAllowlist);
        if ("allowlist" === e4.mcpNetworkMode) return t4.entries.includes("*") ? [...o2] : t4.entries;
        if (!(function(e5) {
          return (e5.mcpNetworkAllowlist ?? []).some((e6) => e6.trim().length > 0);
        })(e4)) return [...o2];
        const r4 = (0, n2.b6)(e4);
        return r4.includes("*") ? [...o2] : r4;
      })(e3) : [], c = t3 ? i3 ? ["*"] : r3.entries : [];
      return JSON.stringify({ enabled: t3, mode: e3.mcpNetworkMode, allow: i3 ? [] : a2, deny: c });
    }
  }