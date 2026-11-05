// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 76895 range:6497590..6498378
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76895: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AsyncSubject = void 0;
    const n = r(83043);
    class s extends n.Subject {
      _value = null;
      _hasValue = false;
      _isComplete = false;
      _checkFinalizedStatuses(e2) {
        const { hasError: t2, _hasValue: r2, _value: n2, thrownError: s2, _closed: o, _isComplete: i } = this;
        t2 ? e2.error(s2) : (o || i) && (r2 && e2.next(n2), e2.complete());
      }
      next(e2) {
        this._closed || (this._value = e2, this._hasValue = true);
      }
      complete() {
        const { _hasValue: e2, _value: t2, _isComplete: r2 } = this;
        r2 || (this._isComplete = true, e2 && super.next(t2), super.complete());
      }
    }
    t.AsyncSubject = s;
  }