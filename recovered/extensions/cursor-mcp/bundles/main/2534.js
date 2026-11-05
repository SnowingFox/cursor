// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2534 range:205586..206229
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2534: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.scheduleAsyncIterable = void 0;
    const n2 = r2(1078), o2 = r2(5830);
    t2.scheduleAsyncIterable = function(e3, t3) {
      if (!e3) throw new Error("Iterable cannot be null");
      return new n2.Observable((r3) => {
        (0, o2.executeSchedule)(r3, t3, () => {
          const n3 = e3[Symbol.asyncIterator]();
          (0, o2.executeSchedule)(r3, t3, () => {
            n3.next().then((e4) => {
              e4.done ? r3.complete() : r3.next(e4.value);
            });
          }, 0, true);
        });
      });
    };
  }