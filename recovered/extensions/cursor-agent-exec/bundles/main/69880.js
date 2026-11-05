// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 69880 range:6304232..6305216
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69880: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduled = void 0;
    const n = r(31855), s = r(79205), o = r(48553), i = r(17096), a = r(42534), c = r(51078), l = r(57081);
    t.scheduled = function(e2, t2) {
      switch ((0, c.getObservableInputType)(e2)) {
        case c.ObservableInputType.Own:
        case c.ObservableInputType.InteropObservable:
          return (0, n.scheduleObservable)(e2, t2);
        case c.ObservableInputType.Promise:
          return (0, s.schedulePromise)(e2, t2);
        case c.ObservableInputType.ArrayLike:
          return (0, o.scheduleArray)(e2, t2);
        case c.ObservableInputType.Iterable:
          return (0, i.scheduleIterable)(e2, t2);
        case c.ObservableInputType.AsyncIterable:
          return (0, a.scheduleAsyncIterable)(e2, t2);
        case c.ObservableInputType.ReadableStreamLike:
          return (0, l.scheduleReadableStreamLike)(e2, t2);
      }
    };
  }