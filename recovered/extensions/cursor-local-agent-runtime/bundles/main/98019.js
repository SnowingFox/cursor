// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 98019 range:7917148..7918026
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98019: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.animationFrameProvider = void 0;
    const n = r(51078);
    t.animationFrameProvider = { schedule(e2) {
      let r2 = requestAnimationFrame, o = cancelAnimationFrame;
      const { delegate: s } = t.animationFrameProvider;
      s && (r2 = s.requestAnimationFrame, o = s.cancelAnimationFrame);
      const i = r2((t2) => {
        o = void 0, e2(t2);
      });
      return new n.Subscription(() => o?.(i));
    }, requestAnimationFrame(...e2) {
      const { delegate: r2 } = t.animationFrameProvider;
      return (r2?.requestAnimationFrame || requestAnimationFrame)(...e2);
    }, cancelAnimationFrame(...e2) {
      const { delegate: r2 } = t.animationFrameProvider;
      return (r2?.cancelAnimationFrame || cancelAnimationFrame)(...e2);
    }, delegate: void 0 };
  }