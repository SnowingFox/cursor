// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 3355 range:128598..129723
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3355: (e, t, r) => {
    "use strict";
    r.d(t, { F: () => o, u: () => i });
    var n = r(90991), s = r(15718);
    function o(e2, t2) {
      return { async sendUpdate(r2, s2) {
        await e2.sendUpdate(r2, (0, n.btc)(s2, t2));
      }, async query(r2, o2) {
        const i2 = await e2.query(r2, (0, n.uS3)(o2, t2));
        return (0, n.ig9)(i2, s.P$.UNSAFE_ALWAYS_ALLOWED);
      }, enqueuePostTurnEndedWork: e2.enqueuePostTurnEndedWork ? (t3) => e2.enqueuePostTurnEndedWork(t3) : void 0, flushPostTurnEndedWork: e2.flushPostTurnEndedWork ? (t3) => e2.flushPostTurnEndedWork(t3) : void 0 };
    }
    function i(e2, t2) {
      return { async sendUpdate(t3, r2) {
        await e2.sendUpdate(t3, (0, n.Au)(r2, s.P$.UNSAFE_ALWAYS_ALLOWED));
      }, async query(r2, o2) {
        const i2 = await e2.query(r2, (0, n.RA0)(o2, s.P$.UNSAFE_ALWAYS_ALLOWED));
        return (0, n.jE$)(i2, t2);
      }, enqueuePostTurnEndedWork: e2.enqueuePostTurnEndedWork ? (t3) => e2.enqueuePostTurnEndedWork(t3) : void 0, flushPostTurnEndedWork: e2.flushPostTurnEndedWork ? (t3) => e2.flushPostTurnEndedWork(t3) : void 0 };
    }
  }