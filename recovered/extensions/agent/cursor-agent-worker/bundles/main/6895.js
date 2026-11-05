// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6895 range:199171..199989
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6895: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.AsyncSubject = void 0;
    const s10 = n10(3043);
    class o10 extends s10.Subject {
      _value = null;
      _hasValue = false;
      _isComplete = false;
      _checkFinalizedStatuses(e11) {
        const { hasError: a11, _hasValue: n11, _value: s11, thrownError: o11, _closed: r10, _isComplete: t10 } = this;
        a11 ? e11.error(o11) : (r10 || t10) && (n11 && e11.next(s11), e11.complete());
      }
      next(e11) {
        this._closed || (this._value = e11, this._hasValue = true);
      }
      complete() {
        const { _hasValue: e11, _value: a11, _isComplete: n11 } = this;
        n11 || (this._isComplete = true, e11 && super.next(a11), super.complete());
      }
    }
    a10.AsyncSubject = o10;
  }