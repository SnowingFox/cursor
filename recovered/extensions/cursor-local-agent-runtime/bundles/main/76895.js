// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 76895 range:7279594..7280382
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76895: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AsyncSubject = void 0;
    const n = r(83043);
    class o extends n.Subject {
      _value = null;
      _hasValue = false;
      _isComplete = false;
      _checkFinalizedStatuses(e2) {
        const { hasError: t2, _hasValue: r2, _value: n2, thrownError: o2, _closed: s, _isComplete: i } = this;
        t2 ? e2.error(o2) : (s || i) && (r2 && e2.next(n2), e2.complete());
      }
      next(e2) {
        this._closed || (this._value = e2, this._hasValue = true);
      }
      complete() {
        const { _hasValue: e2, _value: t2, _isComplete: r2 } = this;
        r2 || (this._isComplete = true, e2 && super.next(t2), super.complete());
      }
    }
    t.AsyncSubject = o;
  }