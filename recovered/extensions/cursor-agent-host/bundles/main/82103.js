// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 82103 range:11853778..11854532
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
82103: (e, t, r) => {
    "use strict";
    r.d(t, { _: () => o });
    const n = { dispose: () => {
    } };
    class s {
      async getClients(e2) {
        return {};
      }
      async getClient(e2, t2) {
      }
      async getInstructions(e2) {
        return [];
      }
      async getTools(e2) {
        return [];
      }
      async getToolsForServers(e2, t2) {
        return [];
      }
      async getToolSet(e2) {
        return { execute: async (e3) => {
          throw new Error(`MCP tool ${e3} is unavailable: this host has no MCP provider configured`);
        } };
      }
      onDidChange(e2) {
        return n;
      }
      dispose() {
      }
    }
    function o(e2 = {}) {
      return e2.mcpProvider ?? new s();
    }
  }