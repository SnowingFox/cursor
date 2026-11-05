// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 37988 range:7398325..7399208
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37988: (e, t, r) => {
    "use strict";
    function n(e2) {
      return null != e2 && void 0 === e2.subagent && void 0 === e2.sideChat;
    }
    function s(e2) {
      const t2 = void 0 !== e2.projectDetails?.subagent || void 0 !== e2.projectDetails?.sideChat;
      return !e2.hasCloudSubagentParent && !t2 && (n(e2.projectDetails) || true === e2.isRootProjectConversation);
    }
    r.d(t, { DG: () => c, OG: () => o, Qt: () => n, YW: () => s, or: () => i, uv: () => a });
    const o = /* @__PURE__ */ new Set(["default", "green", "cyan", "blue", "purple", "magenta", "orange", "yellow", "red", "brand"]), i = ["code", "terminal", "bug", "git-branch", "chip", "folder", "book-open", "file-text", "globe", "browser", "chat-bubbles", "briefcase", "board-kanban", "database", "chart-bars", "beaker", "cloud", "server", "shield", "rocket"], a = 600, c = "Start this Project.";
  }