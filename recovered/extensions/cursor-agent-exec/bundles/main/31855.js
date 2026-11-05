// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 31855 range:2904099..2904420
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31855: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduleObservable = void 0;
    const n = r(51078), s = r(36448), o = r(54464);
    t.scheduleObservable = function(e2, t2) {
      return (0, n.from)(e2).pipe((0, o.subscribeOn)(t2), (0, s.observeOn)(t2));
    };
  }