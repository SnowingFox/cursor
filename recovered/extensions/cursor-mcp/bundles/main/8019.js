// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8019 range:737887..738785
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8019: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.animationFrameProvider = void 0;
    const n2 = r2(1078);
    t2.animationFrameProvider = { schedule(e3) {
      let r3 = requestAnimationFrame, o2 = cancelAnimationFrame;
      const { delegate: s2 } = t2.animationFrameProvider;
      s2 && (r3 = s2.requestAnimationFrame, o2 = s2.cancelAnimationFrame);
      const i2 = r3((t3) => {
        o2 = void 0, e3(t3);
      });
      return new n2.Subscription(() => o2?.(i2));
    }, requestAnimationFrame(...e3) {
      const { delegate: r3 } = t2.animationFrameProvider;
      return (r3?.requestAnimationFrame || requestAnimationFrame)(...e3);
    }, cancelAnimationFrame(...e3) {
      const { delegate: r3 } = t2.animationFrameProvider;
      return (r3?.cancelAnimationFrame || cancelAnimationFrame)(...e3);
    }, delegate: void 0 };
  }