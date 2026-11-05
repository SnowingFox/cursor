// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 668 range:343886..345472
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
668: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.resolveHttpTransportMode = function(t3) {
      if (!t3.http2Disabled) return "http2";
      return t3.http1SseDisabled ? "http1_poll" : "http1_sse";
    }, e2.classifyBidiStreamLoop = function(t3, e3) {
      if (t3 === i2.InferenceService.typeName && e3 === i2.InferenceService.methods.runInference.name) return "local_loop";
      if (t3 === n2.AgentService.typeName && e3 === n2.AgentService.methods.run.name) return "nal";
      if (t3 === s2.ChatService.typeName) return "oal";
      return "other";
    }, e2.incrementTransportMetric = function(t3, e3, r3) {
      try {
        t3.metricsIncrement({ stat: e3, value: 1, tags: r3 });
      } catch {
      }
    }, e2.emitTransportStructuredLog = function(t3, e3) {
      try {
        if (void 0 !== t3.logStructured) return void t3.logStructured({ key: "transport", ...e3 });
        switch (e3.level) {
          case "debug":
            o2.StructuredLogProviderImpl.debug("transport", e3.message, e3.metadata);
            break;
          case "info":
            o2.StructuredLogProviderImpl.info("transport", e3.message, e3.metadata);
            break;
          case "warn":
            o2.StructuredLogProviderImpl.warn("transport", e3.message, e3.metadata);
            break;
          case "error":
            o2.StructuredLogProviderImpl.error("transport", e3.message, e3.error, e3.metadata);
        }
      } catch {
      }
    };
    const n2 = r2(7714), s2 = r2(3177), i2 = r2(4410), o2 = r2(7126);
  }