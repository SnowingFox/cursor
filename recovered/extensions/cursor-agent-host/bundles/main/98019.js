// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 98019 range:15058422..15059300
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98019: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.animationFrameProvider = void 0;
    const n = r(51078);
    t.animationFrameProvider = { schedule(e2) {
      let r2 = requestAnimationFrame, s = cancelAnimationFrame;
      const { delegate: o } = t.animationFrameProvider;
      o && (r2 = o.requestAnimationFrame, s = o.cancelAnimationFrame);
      const i = r2((t2) => {
        s = void 0, e2(t2);
      });
      return new n.Subscription(() => s?.(i));
    }, requestAnimationFrame(...e2) {
      const { delegate: r2 } = t.animationFrameProvider;
      return (r2?.requestAnimationFrame || requestAnimationFrame)(...e2);
    }, cancelAnimationFrame(...e2) {
      const { delegate: r2 } = t.animationFrameProvider;
      return (r2?.cancelAnimationFrame || cancelAnimationFrame)(...e2);
    }, delegate: void 0 };
  }