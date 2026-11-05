// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 71385 range:10961804..10963871
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
71385: (e, t, r) => {
    "use strict";
    r.d(t, { createLiveExecRuntime: () => c, oD: () => a });
    var n = r(91398), s = r(30306);
    const o = 6e4, i = 10, a = "cursor-agent-exec registered an invalid agent runtime handle";
    async function c(e2 = {}) {
      const t2 = e2.acquire ?? (() => n.cursor.acquireAgentHostRuntime()), r2 = e2.reporting ?? (function() {
        const e3 = void 0 !== n.env.remoteName ? "true" : "false";
        return { onSlowAcquire: (t3, r3) => {
          s.gW.warn(`Still waiting for cursor-agent-exec to register the agent runtime after ${t3}ms (report ${r3})`), n.cursor.logStructuredWarn(s.XX, "Still waiting for cursor-agent-exec to register the agent runtime", (0, s.QE)({ waitedMs: t3, ordinal: r3, remote: e3 }), s.bn);
        }, onAcquired: (t3, r3) => {
          n.cursor.metricsDistribution({ stat: "agent_host.exec_runtime_acquire_ms", value: t3, tags: { slow: r3 ? "true" : "false", remote: e3 } });
        } };
      })(), c2 = e2.slowAcquireReportIntervalMs ?? o, l = Date.now();
      let u = 0;
      const d = setInterval(() => {
        u++, r2.onSlowAcquire(Date.now() - l, u), u >= i && clearInterval(d);
      }, c2);
      let p;
      try {
        p = await t2();
      } finally {
        clearInterval(d);
      }
      if (r2.onAcquired(Date.now() - l, u > 0), !/* @__PURE__ */ (function(e3) {
        return "object" == typeof e3 && null !== e3;
      })(m = p) || "function" != typeof m.activate || "function" != typeof m.deactivate || "function" != typeof m.getGitExecutor || "function" != typeof m.getMcpProvider || "function" != typeof m.createAgentHostResourceProvider || "string" != typeof m.extensionPath) throw new Error(a);
      var m;
      return (function(e3) {
        return { extensionPath: e3.extensionPath, activate: (t3, r3) => e3.activate(t3, r3), deactivate: () => e3.deactivate(), getGitExecutor: () => e3.getGitExecutor(), getMcpProvider: () => e3.getMcpProvider(), createAgentHostResourceProvider: (t3) => e3.createAgentHostResourceProvider(t3) };
      })(p);
    }
  }