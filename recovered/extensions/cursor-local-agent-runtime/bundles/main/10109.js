// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 10109 range:305234..305762
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
10109: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.shareReplay = void 0;
    const n = r(89482), o = r(33054);
    t.shareReplay = function(e2, t2, r2) {
      let s, i = false;
      return e2 && "object" == typeof e2 ? { bufferSize: s = 1 / 0, windowTime: t2 = 1 / 0, refCount: i = false, scheduler: r2 } = e2 : s = e2 ?? 1 / 0, (0, o.share)({ connector: () => new n.ReplaySubject(s, t2, r2), resetOnError: true, resetOnComplete: false, resetOnRefCountZero: i });
    };
  }