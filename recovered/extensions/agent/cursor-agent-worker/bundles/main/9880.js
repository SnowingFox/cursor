// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9880 range:363440..364481
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9880: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.scheduled = void 0;
    const s10 = n10(1855), o10 = n10(9205), r10 = n10(8553), t10 = n10(7096), i10 = n10(2534), m10 = n10(1078), l10 = n10(7081);
    a10.scheduled = function(e11, a11) {
      switch ((0, m10.getObservableInputType)(e11)) {
        case m10.ObservableInputType.Own:
        case m10.ObservableInputType.InteropObservable:
          return (0, s10.scheduleObservable)(e11, a11);
        case m10.ObservableInputType.Promise:
          return (0, o10.schedulePromise)(e11, a11);
        case m10.ObservableInputType.ArrayLike:
          return (0, r10.scheduleArray)(e11, a11);
        case m10.ObservableInputType.Iterable:
          return (0, t10.scheduleIterable)(e11, a11);
        case m10.ObservableInputType.AsyncIterable:
          return (0, i10.scheduleAsyncIterable)(e11, a11);
        case m10.ObservableInputType.ReadableStreamLike:
          return (0, l10.scheduleReadableStreamLike)(e11, a11);
      }
    };
  }