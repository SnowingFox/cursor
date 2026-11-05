// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6454 range:476118..476955
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6454: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.animationFrames = void 0;
    const n2 = r2(1078), o2 = r2(9034), s2 = r2(8019);
    function i2(e3) {
      return new n2.Observable((t3) => {
        const r3 = e3 || o2.performanceTimestampProvider, n3 = r3.now();
        let i3 = 0;
        const a3 = () => {
          t3.closed || (i3 = s2.animationFrameProvider.requestAnimationFrame((o3) => {
            i3 = 0;
            const s3 = r3.now();
            t3.next({ timestamp: e3 ? s3 : o3, elapsed: s3 - n3 }), a3();
          }));
        };
        return a3(), () => {
          i3 && s2.animationFrameProvider.cancelAnimationFrame(i3);
        };
      });
    }
    t2.animationFrames = function(e3) {
      return e3 ? i2(e3) : a2;
    };
    const a2 = i2();
  }