// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 59362 range:325737..326493
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
59362: (A, e, t) => {
  "use strict";
  const { kConnected: r, kSize: s } = t(76992);
  class o {
    constructor(A2) {
      this.value = A2;
    }
    deref() {
      return 0 === this.value[r] && 0 === this.value[s] ? void 0 : this.value;
    }
  }
  class n {
    constructor(A2) {
      this.finalizer = A2;
    }
    register(A2, e2) {
      A2.on && A2.on("disconnect", () => {
        0 === A2[r] && 0 === A2[s] && this.finalizer(e2);
      });
    }
    unregister(A2) {
    }
  }
  A.exports = function() {
    return process.env.NODE_V8_COVERAGE && process.version.startsWith("v18") ? (process._rawDebug("Using compatibility WeakRef and FinalizationRegistry"), { WeakRef: o, FinalizationRegistry: n }) : { WeakRef, FinalizationRegistry };
  };
}