// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 33103 range:200902..201433
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33103: (A, e, t) => {
  const { kFree: r, kConnected: s, kPending: o, kQueued: n, kRunning: i, kSize: a } = t(76992), Q = /* @__PURE__ */ Symbol("pool");
  A.exports = class {
    constructor(A2) {
      this[Q] = A2;
    }
    get connected() {
      return this[Q][s];
    }
    get free() {
      return this[Q][r];
    }
    get pending() {
      return this[Q][o];
    }
    get queued() {
      return this[Q][n];
    }
    get running() {
      return this[Q][i];
    }
    get size() {
      return this[Q][a];
    }
  };
}