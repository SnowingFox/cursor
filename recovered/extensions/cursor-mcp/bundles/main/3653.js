// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3653 range:282558..283259
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3653: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.BehaviorSubject = void 0;
    const n2 = r2(3043);
    class o2 extends n2.Subject {
      _value;
      constructor(e3) {
        super(), this._value = e3;
      }
      get value() {
        return this.getValue();
      }
      _subscribe(e3) {
        const t3 = super._subscribe(e3);
        return !t3.closed && e3.next(this._value), t3;
      }
      getValue() {
        const { hasError: e3, thrownError: t3, _value: r3 } = this;
        if (e3) throw t3;
        return r3;
      }
      next(e3) {
        super.next(this._value = e3);
      }
    }
    t2.BehaviorSubject = o2;
  }