// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9880 range:917261..918260
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9880: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.scheduled = void 0;
    const n2 = r2(1855), o2 = r2(9205), s2 = r2(8553), i2 = r2(7096), a2 = r2(2534), c = r2(1078), u = r2(7081);
    t2.scheduled = function(e3, t3) {
      switch ((0, c.getObservableInputType)(e3)) {
        case c.ObservableInputType.Own:
        case c.ObservableInputType.InteropObservable:
          return (0, n2.scheduleObservable)(e3, t3);
        case c.ObservableInputType.Promise:
          return (0, o2.schedulePromise)(e3, t3);
        case c.ObservableInputType.ArrayLike:
          return (0, s2.scheduleArray)(e3, t3);
        case c.ObservableInputType.Iterable:
          return (0, i2.scheduleIterable)(e3, t3);
        case c.ObservableInputType.AsyncIterable:
          return (0, a2.scheduleAsyncIterable)(e3, t3);
        case c.ObservableInputType.ReadableStreamLike:
          return (0, u.scheduleReadableStreamLike)(e3, t3);
      }
    };
  }