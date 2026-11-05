// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3653 range:129815..130525
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3653: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.BehaviorSubject = void 0;
    const s10 = n10(3043);
    class o10 extends s10.Subject {
      _value;
      constructor(e11) {
        super(), this._value = e11;
      }
      get value() {
        return this.getValue();
      }
      _subscribe(e11) {
        const a11 = super._subscribe(e11);
        return !a11.closed && e11.next(this._value), a11;
      }
      getValue() {
        const { hasError: e11, thrownError: a11, _value: n11 } = this;
        if (e11) throw a11;
        return n11;
      }
      next(e11) {
        super.next(this._value = e11);
      }
    }
    a10.BehaviorSubject = o10;
  }