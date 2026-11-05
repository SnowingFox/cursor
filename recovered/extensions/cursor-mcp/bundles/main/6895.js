// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6895 range:584855..585656
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6895: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.AsyncSubject = void 0;
    const n2 = r2(3043);
    class o2 extends n2.Subject {
      _value = null;
      _hasValue = false;
      _isComplete = false;
      _checkFinalizedStatuses(e3) {
        const { hasError: t3, _hasValue: r3, _value: n3, thrownError: o3, _closed: s2, _isComplete: i2 } = this;
        t3 ? e3.error(o3) : (s2 || i2) && (r3 && e3.next(n3), e3.complete());
      }
      next(e3) {
        this._closed || (this._value = e3, this._hasValue = true);
      }
      complete() {
        const { _hasValue: e3, _value: t3, _isComplete: r3 } = this;
        r3 || (this._isComplete = true, e3 && super.next(t3), super.complete());
      }
    }
    t2.AsyncSubject = o2;
  }