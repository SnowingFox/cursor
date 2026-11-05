// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 109 range:19442..19985
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
109: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.shareReplay = void 0;
    const n2 = r2(9482), o2 = r2(3054);
    t2.shareReplay = function(e3, t3, r3) {
      let s2, i2 = false;
      return e3 && "object" == typeof e3 ? { bufferSize: s2 = 1 / 0, windowTime: t3 = 1 / 0, refCount: i2 = false, scheduler: r3 } = e3 : s2 = e3 ?? 1 / 0, (0, o2.share)({ connector: () => new n2.ReplaySubject(s2, t3, r3), resetOnError: true, resetOnComplete: false, resetOnRefCountZero: i2 });
    };
  }