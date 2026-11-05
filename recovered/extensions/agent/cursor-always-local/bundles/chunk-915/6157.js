// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/915.js sha256:a047de6a109482b317cdb9ce470b0c1903b3caa8ebca06fe5218a9e9c369a526
// module: 6157 range:36073..36537
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6157: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.AgentWebSocketLeaseManager = t.AgentWebSocketLifecycleError = void 0;
  const r = n(637), o = n(3192);
  class i extends Error {
    constructor(e2, t2) {
      super(t2), this.name = "AgentWebSocketLifecycleError", this.code = e2;
    }
  }
  t.AgentWebSocketLifecycleError = i;
  const s = { setTimeout: (e2, t2) => setTimeout(e2, t2), clearTimeout(e2) {
    clearTimeout(e2);
  }