// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 16074 range:4156349..4157685
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
16074: (e, t, r) => {
    "use strict";
    r.d(t, { Ox: () => a, Qj: () => o, YE: () => s, r6: () => i, wi: () => c });
    const n = 200;
    class s extends Error {
      constructor() {
        super("This computer cannot list workspaces yet"), this.code = "WORKSPACE_LIST_UNSUPPORTED", this.name = "AgentHostWorkspaceListUnsupportedError";
      }
    }
    function o(e2) {
      const t2 = [];
      for (const r2 of e2) {
        const e3 = i(r2);
        if (void 0 !== e3 && (t2.push(e3), t2.length >= n)) break;
      }
      return t2;
    }
    function i(e2) {
      const t2 = e2.workspacePaths.filter((e3) => e3.length > 0);
      if (0 === t2.length) return;
      const r2 = l(e2.worktreeMainPath), n2 = l(e2.displayPath);
      return { workspacePaths: t2, ...void 0 === r2 ? {} : { worktreeMainPath: r2 }, ...void 0 === n2 ? {} : { displayPath: n2 } };
    }
    function a(e2) {
      const t2 = void 0 === e2 ? void 0 : i(e2);
      return void 0 === t2 ? {} : { workspace: t2 };
    }
    function c(e2, t2) {
      const r2 = 1 === e2.length ? e2[0] : void 0, n2 = l(t2)?.replace(/\/+$/, "");
      if (void 0 !== r2 && void 0 !== n2) return n2.length > 0 && r2.startsWith(`${n2}/`) ? `~${r2.slice(n2.length)}` : r2;
    }
    function l(e2) {
      return void 0 !== e2 && e2.length > 0 ? e2 : void 0;
    }
  }