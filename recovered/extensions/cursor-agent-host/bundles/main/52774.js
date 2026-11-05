// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 52774 range:8554627..8556292
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
52774: (e, t, r) => {
    "use strict";
    r.d(t, { F: () => s });
    var n = r(17392);
    class s extends n.SK {
      constructor(e2, t2) {
        super(`Local loop cannot construct prompts for the resolved model: ${e2}`, { displayInfo: { title: "Local loop can't run this model", detail: o(e2, t2), isRetryable: false } }), this.reason = e2, this.resolvedModelId = t2;
      }
    }
    function o(e2, t2) {
      const r2 = void 0 === t2 ? "the resolved model" : `"${t2}"`;
      switch (e2) {
        case "metadata-unavailable":
          return `The server sent no prompt metadata for ${r2}. The backend may predate prompt-metadata delivery; retry later or disable agent_host_local_loop.`;
        case "unrecognized-model-family":
          return `This build does not recognize the model family of ${r2}. Update Cursor or disable agent_host_local_loop.`;
        case "dsv3-harness-not-supported":
          return `${r2} uses the Composer (DSV3) prompt path, which the local loop does not construct yet. Pick a non-Composer model or disable agent_host_local_loop.`;
        case "dsv3-persona-unavailable":
          return `The server sent no self-identification persona for ${r2}. The backend may predate persona delivery, or this build does not recognize the persona; update Cursor, retry later, or disable agent_host_local_loop.`;
        case "mode-config-unavailable":
          return `The server sent no per-mode tool decisions for ${r2}, which Plan, Ask and Debug turns need. The backend may predate their delivery; switch to Agent mode, retry later, or disable agent_host_local_loop.`;
        default:
          return e2;
      }
    }
  }