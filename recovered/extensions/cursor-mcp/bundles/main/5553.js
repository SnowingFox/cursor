// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5553 range:424698..426326
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5553: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { I: () => a2 });
    var n2 = r2(768);
    const o2 = ["0.0.0.0/0", "::/0"];
    function s2(e3) {
      const t3 = (e3 ?? []).filter((e4) => e4.trim().length > 0), r3 = t3.flatMap((e4) => {
        const t4 = (0, n2.bi)(e4);
        return void 0 === t4 ? [] : [t4];
      });
      return { hasConfiguredEntries: t3.length > 0, hasInvalidEntries: r3.length !== t3.length, entries: r3 };
    }
    function i2(e3) {
      const t3 = s2(e3.mcpNetworkAllowlist), r3 = s2(e3.mcpNetworkDenylist), n3 = e3.mcpNetworkMode;
      if ("deny_all" === n3 || r3.entries.includes("*") || r3.hasInvalidEntries) return { version: 1, default: "deny" };
      if ("allow_all" === n3) return { version: 1, default: "deny", allow: [...o2], ...r3.entries.length > 0 ? { deny: r3.entries } : {} };
      if ("allowlist" === n3 || t3.hasConfiguredEntries) {
        const e4 = (function(e5) {
          return e5.entries.includes("*") ? [...o2] : e5.entries;
        })(t3);
        return e4.length > 0 ? { version: 1, default: "deny", allow: e4, ...r3.entries.length > 0 ? { deny: r3.entries } : {} } : { version: 1, default: "deny" };
      }
      return { version: 1, default: "deny", allow: [...o2], ...r3.entries.length > 0 ? { deny: r3.entries } : {} };
    }
    async function a2(e3, t3) {
      const { resolveSandboxPolicyForWorkspace: n3 } = await Promise.resolve().then(r2.bind(r2, 6702)), o3 = { type: "workspace_readwrite", sandboxWorkspaceRoot: t3, networkPolicy: i2(e3), networkPolicyStrict: true }, { policy: s3 } = await n3(t3, { perUser: o3 });
      return s3;
    }
  }