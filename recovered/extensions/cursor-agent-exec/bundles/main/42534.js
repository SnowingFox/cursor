// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 42534 range:3213813..3214446
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42534: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduleAsyncIterable = void 0;
    const n = r(51078), s = r(55830);
    t.scheduleAsyncIterable = function(e2, t2) {
      if (!e2) throw new Error("Iterable cannot be null");
      return new n.Observable((r2) => {
        (0, s.executeSchedule)(r2, t2, () => {
          const n2 = e2[Symbol.asyncIterator]();
          (0, s.executeSchedule)(r2, t2, () => {
            n2.next().then((e3) => {
              e3.done ? r2.complete() : r2.next(e3.value);
            });
          }, 0, true);
        });
      });
    };
  }