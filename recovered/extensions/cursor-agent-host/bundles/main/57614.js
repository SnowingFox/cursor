// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 57614 range:8731181..8735466
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
57614: (e, t, r) => {
    "use strict";
    r.d(t, { AO: () => f, An: () => U, Au: () => h, Bo: () => Q, C$: () => s, Jk: () => O, MP: () => L, Mj: () => d, OF: () => m, Qm: () => l, VE: () => o, VH: () => n, We: () => T, YI: () => E, YN: () => _, Zp: () => g, b: () => I, c9: () => a, du: () => G, eS: () => N, eX: () => C, ey: () => c, fv: () => y, gt: () => i, gz: () => B, iq: () => D, j9: () => k, jC: () => M, k: () => R, l1: () => P, lE: () => w, mH: () => q, q: () => J, qy: () => p, sP: () => u, uG: () => F, uu: () => j, uz: () => $, x$: () => x, y1: () => b });
    const n = 100, s = 5e7, o = Math.floor(3 * (s - 2097152) / 4), i = "claude-4.6-opus-high-thinking", a = "env-setup", c = "env-setup", l = `/.cursor/skills-cursor/${c}/`, u = `${l}SKILL.md`, d = "cloud-onboarding", p = `/.cursor/skills-cursor/${d}/SKILL.md`, m = "change-monitor-onboarding", h = `/.cursor/skills-cursor/${m}/SKILL.md`, f = "Report deployments to Cursor Rollouts", g = ["Skip changes that cannot affect what runs in any deployed environment:", "- documentation-only changes (Markdown, docs sites, code comments, changelogs)", "- formatting, lint, or typo fixes with no behavior change", "- test-only changes (test files, fixtures, snapshots)", "Monitor everything else, including dependency bumps, configuration, and infrastructure changes."].join("\n"), y = "walkthrough-artifacts", w = "resolve-pr-merge-conflicts", v = /computer[-_ ]use|\bcua\b/i;
    function _(e2) {
      return v.test(`${e2.fullPath ?? ""}
${e2.description ?? ""}`);
    }
    const A = { create: { base: "Set up a new development environment for this codebase. Run the relevant applications and demonstrate that the environment works end to end.", withSkill: "Set up a new development environment for this codebase. Follow the “Set up a new environment” workflow in the env-setup skill. Run the relevant applications and demonstrate that the environment works end to end." }, "update-db-managed": { base: "Update the existing dashboard-managed development environment. Preserve working behavior and validate the updated environment end to end.", withSkill: "Update the existing dashboard-managed development environment. Follow the “Update a DB-managed environment” workflow in the env-setup skill. Preserve working behavior and validate the updated environment end to end." }, "update-repository-managed": { base: "Update the repository-managed development environment. Treat the repository configuration as authoritative.", withSkill: "Update the repository-managed development environment. Follow the “Update a repository-managed environment” workflow in the env-setup skill, and treat the repository configuration as authoritative." } }, S = ["create", "update-db-managed", "update-repository-managed"];
    function b(e2, t2) {
      const r2 = A[e2];
      return t2.includeSkill ? r2.withSkill : r2.base;
    }
    function E(e2) {
      return `Set up ${e2} environment`;
    }
    const I = "Development environment setup";
    function C(e2) {
      const t2 = k(e2);
      return void 0 === t2 ? I : E(t2);
    }
    function k(e2) {
      const t2 = e2?.trim();
      if (void 0 !== t2 && 0 !== t2.length) try {
        const e3 = /^https?:\/\//i.test(t2) ? t2 : `https://${t2}`;
        let r2 = new URL(e3).pathname;
        r2.endsWith("/") && (r2 = r2.slice(0, -1)), r2.endsWith(".git") && (r2 = r2.slice(0, -4));
        const n2 = r2.split("/").filter(Boolean), s2 = n2[n2.length - 1];
        return void 0 !== s2 && s2.length > 0 ? s2 : void 0;
      } catch {
        return;
      }
    }
    function x(e2) {
      for (const t2 of S) {
        const r2 = A[t2];
        if (e2 === r2.base || e2 === r2.withSkill) return t2;
      }
    }
    const T = "0d1cbb47-6f2e-4f0e-9c2a-58c0a1f6f0d4", R = "getcursor/universal", B = "CLOUD_AGENT_ALL_SECRET_NAMES", P = "CLOUD_AGENT_INJECTED_SECRET_NAMES", J = "CURSOR_CLOUD_AGENT_USER_EMAIL_ADDRESS", M = "EXEC_DAEMON_STARTUP_TRACEPARENT", q = "x-cursor-agent-exclude-tools", D = "x-cursor-agent-allowed-tools", O = "/workspace", N = "/opt/cursor/artifacts/", F = ".cursor-session-owner", U = "cloud_agent_desktop_lease", L = 3e4, $ = "cloud_agent_machine_resources", Q = "cloud_agent_fuse_liveness_kill", j = "GH_TELEMETRY", G = "CURSOR_AUTH_TOKEN";
  }