// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 50623 range:3623045..3624880
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50623: (e, t, r) => {
    "use strict";
    r.d(t, { BJ: () => c, rh: () => i });
    var n = r(80738);
    r(50768);
    function s(e2) {
      return e2.trim().toLowerCase();
    }
    function o({ mode: e2, tools: t2 }) {
      const r2 = (t2 ?? []).map(s).filter((e3) => e3.length > 0);
      const n2 = void 0 === e2 ? void 0 : s(e2);
      return "all" === n2 ? { mode: "all" } : "reads" === n2 ? { mode: "reads" } : r2.length > 0 ? { mode: "custom", tools: r2 } : { mode: "all" };
    }
    function i(e2, t2) {
      switch (e2.mode) {
        case "all":
          return true;
        case "custom":
          return (function(e3, t3) {
            const r2 = s(e3);
            return 0 !== r2.length && t3.some((e4) => s(e4) === r2);
          })(t2.name, e2.tools);
        case "reads":
          return (0, n.NY)(t2.annotations);
        default:
          return e2;
      }
    }
    function a(e2, t2) {
      switch (t2.mode) {
        case "all":
          return [`${e2}:*`];
        case "custom":
          return t2.tools.map((t3) => `${e2}:${t3}`);
        case "reads":
          return [];
        default:
          return t2;
      }
    }
    function c({ autoRunControls: e2, allowedMcpServers: t2 }) {
      const r2 = true === e2?.enabled ? e2.mcpToolAllowlist ?? [] : [], n2 = (function(e3) {
        return (e3 ?? []).flatMap((e4) => {
          const t3 = void 0 === e4.name ? "" : s(e4.name);
          if (0 === t3.length) return [];
          const r3 = o({ mode: e4.toolAllowlistMode, tools: e4.toolAllowlist });
          return [{ name: t3, policy: r3, flattened: a(t3, r3) }];
        });
      })(t2);
      return { tools: (i2 = [...n2.flatMap((e3) => [...e3.flattened]), ...r2], [...new Set(i2)]), policies: n2.map((e3) => ({ name: e3.name, policy: e3.policy })) };
      var i2;
    }
  }