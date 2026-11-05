// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 90066 range:7711439..7712873
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90066: (e, t, r) => {
    "use strict";
    function n(e2) {
      return !!e2.startsWith("/") || (!!/^[a-zA-Z]:[\\/]/.test(e2) || !!e2.startsWith("\\\\"));
    }
    function o(e2) {
      return e2.split(/[/\\]/).filter((e3) => e3);
    }
    function s(e2, t2) {
      const r2 = o(e2);
      for (let e3 = 0; e3 < r2.length - 2; e3++) if (".cursor" === r2[e3] && "projects" === r2[e3 + 1] && r2[e3 + 3] === t2) return { workspaceId: r2[e3 + 2], remainingPath: r2.slice(e3 + 4) };
      return null;
    }
    function i(e2) {
      const t2 = s(e2, "terminals");
      return null !== t2 && 0 === t2.remainingPath.length;
    }
    function a(e2) {
      return null !== s(e2, "agent-transcripts");
    }
    function l(e2) {
      const t2 = s(e2, "agent-tools");
      return null !== t2 && 1 === t2.remainingPath.length && t2.remainingPath[0].endsWith(".txt");
    }
    function c(e2) {
      return null !== u(e2);
    }
    function u(e2) {
      const t2 = s(e2, "terminals");
      if (!t2 || 1 !== t2.remainingPath.length) return null;
      const r2 = t2.remainingPath[0], n2 = /^(\d+)\.txt$/.exec(r2);
      if (!n2) return null;
      const o2 = Number.parseInt(n2[1], 10);
      return Number.isNaN(o2) ? null : { id: o2 };
    }
    function d(e2) {
      return e2.replace(/[^a-zA-Z0-9._-]/g, "_");
    }
    r.d(t, { CM: () => c, JD: () => l, Nz: () => d, XG: () => a, Z1: () => n, fg: () => u, jq: () => i });
  }