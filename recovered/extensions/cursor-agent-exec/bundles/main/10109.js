// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 10109 range:708196..708724
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
10109: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.shareReplay = void 0;
    const n = r(89482), s = r(33054);
    t.shareReplay = function(e2, t2, r2) {
      let o, i = false;
      return e2 && "object" == typeof e2 ? { bufferSize: o = 1 / 0, windowTime: t2 = 1 / 0, refCount: i = false, scheduler: r2 } = e2 : o = e2 ?? 1 / 0, (0, s.share)({ connector: () => new n.ReplaySubject(o, t2, r2), resetOnError: true, resetOnComplete: false, resetOnRefCountZero: i });
    };
  }