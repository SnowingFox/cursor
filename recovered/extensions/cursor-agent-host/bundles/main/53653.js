// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 53653 range:8581272..8581964
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53653: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.BehaviorSubject = void 0;
    const n = r(83043);
    class s extends n.Subject {
      _value;
      constructor(e2) {
        super(), this._value = e2;
      }
      get value() {
        return this.getValue();
      }
      _subscribe(e2) {
        const t2 = super._subscribe(e2);
        return !t2.closed && e2.next(this._value), t2;
      }
      getValue() {
        const { hasError: e2, thrownError: t2, _value: r2 } = this;
        if (e2) throw t2;
        return r2;
      }
      next(e2) {
        super.next(this._value = e2);
      }
    }
    t.BehaviorSubject = s;
  }