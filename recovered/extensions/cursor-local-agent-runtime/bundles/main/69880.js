// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 69880 range:2254664..2255648
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69880: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduled = void 0;
    const n = r(31855), o = r(79205), s = r(48553), i = r(17096), a = r(42534), l = r(51078), c = r(57081);
    t.scheduled = function(e2, t2) {
      switch ((0, l.getObservableInputType)(e2)) {
        case l.ObservableInputType.Own:
        case l.ObservableInputType.InteropObservable:
          return (0, n.scheduleObservable)(e2, t2);
        case l.ObservableInputType.Promise:
          return (0, o.schedulePromise)(e2, t2);
        case l.ObservableInputType.ArrayLike:
          return (0, s.scheduleArray)(e2, t2);
        case l.ObservableInputType.Iterable:
          return (0, i.scheduleIterable)(e2, t2);
        case l.ObservableInputType.AsyncIterable:
          return (0, a.scheduleAsyncIterable)(e2, t2);
        case l.ObservableInputType.ReadableStreamLike:
          return (0, c.scheduleReadableStreamLike)(e2, t2);
      }
    };
  }