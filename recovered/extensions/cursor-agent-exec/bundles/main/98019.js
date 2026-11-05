// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 98019 range:11683801..11684679
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