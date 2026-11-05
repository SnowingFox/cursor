// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 64472 range:10316407..10316968
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
64472: (e, t, r) => {
    "use strict";
    r.d(t, { b: () => a });
    var n = r(91398);
    const s = "mcp", o = { disableConsoleFallback: true }, i = (async () => {
      try {
        return await n.cursor.checkFeatureGate("mcp_structured_logging");
      } catch {
        return false;
      }
    })();
    function a(e2) {
      var t2;
      t2 = () => {
        n.cursor.logStructuredInfo(s, e2.message, { mcpMeta: { ...e2.metadata, subkey: e2.subkey, mcp_version: "snapshots" } }, o);
      }, i.then((e3) => {
        e3 && t2();
      });
    }
  }