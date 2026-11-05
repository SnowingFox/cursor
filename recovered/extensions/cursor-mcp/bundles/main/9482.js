// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9482 range:888907..890523
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9482: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ReplaySubject = void 0;
    const n2 = r2(3043), o2 = r2(6256);
    class s2 extends n2.Subject {
      _bufferSize;
      _windowTime;
      _timestampProvider;
      _buffer = [];
      _infiniteTimeWindow = true;
      constructor(e3 = 1 / 0, t3 = 1 / 0, r3 = o2.dateTimestampProvider) {
        super(), this._bufferSize = e3, this._windowTime = t3, this._timestampProvider = r3, this._infiniteTimeWindow = t3 === 1 / 0, this._bufferSize = Math.max(1, e3), this._windowTime = Math.max(1, t3);
      }
      next(e3) {
        const { _closed: t3, _buffer: r3, _infiniteTimeWindow: n3, _timestampProvider: o3, _windowTime: s3 } = this;
        t3 || (r3.push(e3), !n3 && r3.push(o3.now() + s3)), this._trimBuffer(), super.next(e3);
      }
      _subscribe(e3) {
        this._trimBuffer();
        const t3 = this._innerSubscribe(e3), { _infiniteTimeWindow: r3, _buffer: n3 } = this, o3 = n3.slice();
        for (let t4 = 0; t4 < o3.length && !e3.closed; t4 += r3 ? 1 : 2) e3.next(o3[t4]);
        return this._checkFinalizedStatuses(e3), t3;
      }
      _trimBuffer() {
        const { _bufferSize: e3, _timestampProvider: t3, _buffer: r3, _infiniteTimeWindow: n3 } = this, o3 = (n3 ? 1 : 2) * e3;
        if (e3 < 1 / 0 && o3 < r3.length && r3.splice(0, r3.length - o3), !n3) {
          const e4 = t3.now();
          let n4 = 0;
          for (let t4 = 1; t4 < r3.length && r3[t4] <= e4; t4 += 2) n4 = t4;
          n4 && r3.splice(0, n4 + 1);
        }
      }
    }
    t2.ReplaySubject = s2;
  }