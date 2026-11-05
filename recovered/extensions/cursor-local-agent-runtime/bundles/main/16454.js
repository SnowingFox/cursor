// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 16454 range:529868..530688
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
16454: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.animationFrames = void 0;
    const n = r(51078), o = r(19034), s = r(98019);
    function i(e2) {
      return new n.Observable((t2) => {
        const r2 = e2 || o.performanceTimestampProvider, n2 = r2.now();
        let i2 = 0;
        const a2 = () => {
          t2.closed || (i2 = s.animationFrameProvider.requestAnimationFrame((o2) => {
            i2 = 0;
            const s2 = r2.now();
            t2.next({ timestamp: e2 ? s2 : o2, elapsed: s2 - n2 }), a2();
          }));
        };
        return a2(), () => {
          i2 && s.animationFrameProvider.cancelAnimationFrame(i2);
        };
      });
    }
    t.animationFrames = function(e2) {
      return e2 ? i(e2) : a;
    };
    const a = i();
  }