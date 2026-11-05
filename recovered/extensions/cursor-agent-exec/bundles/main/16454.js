// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 16454 range:938773..939593
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
16454: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.animationFrames = void 0;
    const n = r(51078), s = r(19034), o = r(98019);
    function i(e2) {
      return new n.Observable((t2) => {
        const r2 = e2 || s.performanceTimestampProvider, n2 = r2.now();
        let i2 = 0;
        const a2 = () => {
          t2.closed || (i2 = o.animationFrameProvider.requestAnimationFrame((s2) => {
            i2 = 0;
            const o2 = r2.now();
            t2.next({ timestamp: e2 ? o2 : s2, elapsed: o2 - n2 }), a2();
          }));
        };
        return a2(), () => {
          i2 && o.animationFrameProvider.cancelAnimationFrame(i2);
        };
      });
    }
    t.animationFrames = function(e2) {
      return e2 ? i(e2) : a;
    };
    const a = i();
  }