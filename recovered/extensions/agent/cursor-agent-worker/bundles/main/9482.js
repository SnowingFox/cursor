// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9482 range:355990..357672
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9482: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.ReplaySubject = void 0;
    const s10 = n10(3043), o10 = n10(6256);
    class r10 extends s10.Subject {
      _bufferSize;
      _windowTime;
      _timestampProvider;
      _buffer = [];
      _infiniteTimeWindow = true;
      constructor(e11 = 1 / 0, a11 = 1 / 0, n11 = o10.dateTimestampProvider) {
        super(), this._bufferSize = e11, this._windowTime = a11, this._timestampProvider = n11, this._infiniteTimeWindow = a11 === 1 / 0, this._bufferSize = Math.max(1, e11), this._windowTime = Math.max(1, a11);
      }
      next(e11) {
        const { _closed: a11, _buffer: n11, _infiniteTimeWindow: s11, _timestampProvider: o11, _windowTime: r11 } = this;
        a11 || (n11.push(e11), !s11 && n11.push(o11.now() + r11)), this._trimBuffer(), super.next(e11);
      }
      _subscribe(e11) {
        this._trimBuffer();
        const a11 = this._innerSubscribe(e11), { _infiniteTimeWindow: n11, _buffer: s11 } = this, o11 = s11.slice();
        for (let a12 = 0; a12 < o11.length && !e11.closed; a12 += n11 ? 1 : 2) e11.next(o11[a12]);
        return this._checkFinalizedStatuses(e11), a11;
      }
      _trimBuffer() {
        const { _bufferSize: e11, _timestampProvider: a11, _buffer: n11, _infiniteTimeWindow: s11 } = this, o11 = (s11 ? 1 : 2) * e11;
        if (e11 < 1 / 0 && o11 < n11.length && n11.splice(0, n11.length - o11), !s11) {
          const e12 = a11.now();
          let s12 = 0;
          for (let a12 = 1; a12 < n11.length && n11[a12] <= e12; a12 += 2) s12 = a12;
          s12 && n11.splice(0, s12 + 1);
        }
      }
    }
    a10.ReplaySubject = r10;
  }