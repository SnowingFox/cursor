// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 30668 range:5059029..5060594
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30668: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.resolveHttpTransportMode = function(e2) {
      if (!e2.http2Disabled) return "http2";
      return e2.http1SseDisabled ? "http1_poll" : "http1_sse";
    }, t.classifyBidiStreamLoop = function(e2, t2) {
      if (e2 === o.InferenceService.typeName && t2 === o.InferenceService.methods.runInference.name) return "local_loop";
      if (e2 === n.AgentService.typeName && t2 === n.AgentService.methods.run.name) return "nal";
      if (e2 === s.ChatService.typeName) return "oal";
      return "other";
    }, t.incrementTransportMetric = function(e2, t2, r2) {
      try {
        e2.metricsIncrement({ stat: t2, value: 1, tags: r2 });
      } catch {
      }
    }, t.emitTransportStructuredLog = function(e2, t2) {
      try {
        if (void 0 !== e2.logStructured) return void e2.logStructured({ key: "transport", ...t2 });
        switch (t2.level) {
          case "debug":
            i.StructuredLogProviderImpl.debug("transport", t2.message, t2.metadata);
            break;
          case "info":
            i.StructuredLogProviderImpl.info("transport", t2.message, t2.metadata);
            break;
          case "warn":
            i.StructuredLogProviderImpl.warn("transport", t2.message, t2.metadata);
            break;
          case "error":
            i.StructuredLogProviderImpl.error("transport", t2.message, t2.error, t2.metadata);
        }
      } catch {
      }
    };
    const n = r(17714), s = r(33177), o = r(4410), i = r(7126);
  }