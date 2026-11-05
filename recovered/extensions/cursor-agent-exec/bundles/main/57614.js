// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 57614 range:4633967..4634852
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
57614: (e, t, r) => {
    "use strict";
    r.d(t, { MP: () => d, VE: () => n, YN: () => i, c9: () => s, eS: () => u, gz: () => c, k: () => a, l1: () => l });
    const n = Math.floor(35927136), s = "env-setup", o = (["Skip changes that cannot affect what runs in any deployed environment:", "- documentation-only changes (Markdown, docs sites, code comments, changelogs)", "- formatting, lint, or typo fixes with no behavior change", "- test-only changes (test files, fixtures, snapshots)", "Monitor everything else, including dependency bumps, configuration, and infrastructure changes."].join("\n"), /computer[-_ ]use|\bcua\b/i);
    function i(e2) {
      return o.test(`${e2.fullPath ?? ""}
${e2.description ?? ""}`);
    }
    const a = "getcursor/universal", c = "CLOUD_AGENT_ALL_SECRET_NAMES", l = "CLOUD_AGENT_INJECTED_SECRET_NAMES", u = "/opt/cursor/artifacts/", d = 3e4;
  }