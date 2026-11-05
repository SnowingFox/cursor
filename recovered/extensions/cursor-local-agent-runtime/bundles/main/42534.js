// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 42534 range:1277681..1278314
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42534: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduleAsyncIterable = void 0;
    const n = r(51078), o = r(55830);
    t.scheduleAsyncIterable = function(e2, t2) {
      if (!e2) throw new Error("Iterable cannot be null");
      return new n.Observable((r2) => {
        (0, o.executeSchedule)(r2, t2, () => {
          const n2 = e2[Symbol.asyncIterator]();
          (0, o.executeSchedule)(r2, t2, () => {
            n2.next().then((e3) => {
              e3.done ? r2.complete() : r2.next(e3.value);
            });
          }, 0, true);
        });
      });
    };
  }