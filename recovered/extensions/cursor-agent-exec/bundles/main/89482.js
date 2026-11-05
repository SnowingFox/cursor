// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 89482 range:11164590..11166195
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
89482: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ReplaySubject = void 0;
    const n = r(83043), s = r(86256);
    class o extends n.Subject {
      _bufferSize;
      _windowTime;
      _timestampProvider;
      _buffer = [];
      _infiniteTimeWindow = true;
      constructor(e2 = 1 / 0, t2 = 1 / 0, r2 = s.dateTimestampProvider) {
        super(), this._bufferSize = e2, this._windowTime = t2, this._timestampProvider = r2, this._infiniteTimeWindow = t2 === 1 / 0, this._bufferSize = Math.max(1, e2), this._windowTime = Math.max(1, t2);
      }
      next(e2) {
        const { _closed: t2, _buffer: r2, _infiniteTimeWindow: n2, _timestampProvider: s2, _windowTime: o2 } = this;
        t2 || (r2.push(e2), !n2 && r2.push(s2.now() + o2)), this._trimBuffer(), super.next(e2);
      }
      _subscribe(e2) {
        this._trimBuffer();
        const t2 = this._innerSubscribe(e2), { _infiniteTimeWindow: r2, _buffer: n2 } = this, s2 = n2.slice();
        for (let t3 = 0; t3 < s2.length && !e2.closed; t3 += r2 ? 1 : 2) e2.next(s2[t3]);
        return this._checkFinalizedStatuses(e2), t2;
      }
      _trimBuffer() {
        const { _bufferSize: e2, _timestampProvider: t2, _buffer: r2, _infiniteTimeWindow: n2 } = this, s2 = (n2 ? 1 : 2) * e2;
        if (e2 < 1 / 0 && s2 < r2.length && r2.splice(0, r2.length - s2), !n2) {
          const e3 = t2.now();
          let n3 = 0;
          for (let t3 = 1; t3 < r2.length && r2[t3] <= e3; t3 += 2) n3 = t3;
          n3 && r2.splice(0, n3 + 1);
        }
      }
    }
    t.ReplaySubject = o;
  }