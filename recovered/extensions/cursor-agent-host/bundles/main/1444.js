// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 1444 range:85709..86323
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1444: (e, t, r) => {
    "use strict";
    r.d(t, { UD: () => o, YR: () => s });
    const n = "agent_host.remote_agent_service_route", s = "none";
    function o(e2) {
      let t2 = false;
      return { emit(r2) {
        if (t2) return;
        t2 = true;
        const s2 = (function(e3) {
          return { kind: e3.kind, source: e3.source, reason: e3.reason };
        })(r2);
        if (e2.metricsIncrement(n, s2), "builtin" === r2.kind) {
          const t3 = `agent host: AgentService stays on the remote (${r2.source})`;
          e2.info(t3), e2.structuredInfo(t3, s2);
        }
      } };
    }
  }