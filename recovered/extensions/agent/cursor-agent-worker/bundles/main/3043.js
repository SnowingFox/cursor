// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3043 range:111039..113388
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3043: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.Subject = void 0;
    const s10 = n10(1078);
    class o10 extends s10.Observable {
      _closed = false;
      get closed() {
        return this._closed;
      }
      _observerCounter = 0;
      currentObservers = /* @__PURE__ */ new Map();
      observerSnapshot;
      get observers() {
        return this.observerSnapshot ??= Array.from(this.currentObservers.values());
      }
      hasError = false;
      thrownError = null;
      constructor() {
        super();
      }
      _clearObservers() {
        this.currentObservers.clear(), this.observerSnapshot = void 0;
      }
      next(e11) {
        if (!this._closed) {
          const { observers: a11 } = this, n11 = a11.length;
          for (let s11 = 0; s11 < n11; s11++) a11[s11].next(e11);
        }
      }
      error(e11) {
        if (!this._closed) {
          this.hasError = this._closed = true, this.thrownError = e11;
          const { observers: a11 } = this, n11 = a11.length;
          for (let s11 = 0; s11 < n11; s11++) a11[s11].error(e11);
          this._clearObservers();
        }
      }
      complete() {
        if (!this._closed) {
          this._closed = true;
          const { observers: e11 } = this, a11 = e11.length;
          for (let n11 = 0; n11 < a11; n11++) e11[n11].complete();
          this._clearObservers();
        }
      }
      unsubscribe() {
        this._closed = true, this._clearObservers();
      }
      get observed() {
        return this.currentObservers.size > 0;
      }
      _subscribe(e11) {
        return this._checkFinalizedStatuses(e11), this._innerSubscribe(e11);
      }
      _innerSubscribe(e11) {
        if (this.hasError || this._closed) return s10.Subscription.EMPTY;
        const { currentObservers: a11 } = this, n11 = this._observerCounter++;
        return a11.set(n11, e11), this.observerSnapshot = void 0, e11.add(() => {
          a11.delete(n11), this.observerSnapshot = void 0;
        }), e11;
      }
      _checkFinalizedStatuses(e11) {
        const { hasError: a11, thrownError: n11, _closed: s11 } = this;
        a11 ? e11.error(n11) : s11 && e11.complete();
      }
      asObservable() {
        return new s10.Observable((e11) => this.subscribe(e11));
      }
    }
    a10.Subject = o10;
  }