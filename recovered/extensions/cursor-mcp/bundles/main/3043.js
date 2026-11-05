// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3043 range:236553..238851
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3043: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Subject = void 0;
    const n2 = r2(1078);
    class o2 extends n2.Observable {
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
      next(e3) {
        if (!this._closed) {
          const { observers: t3 } = this, r3 = t3.length;
          for (let n3 = 0; n3 < r3; n3++) t3[n3].next(e3);
        }
      }
      error(e3) {
        if (!this._closed) {
          this.hasError = this._closed = true, this.thrownError = e3;
          const { observers: t3 } = this, r3 = t3.length;
          for (let n3 = 0; n3 < r3; n3++) t3[n3].error(e3);
          this._clearObservers();
        }
      }
      complete() {
        if (!this._closed) {
          this._closed = true;
          const { observers: e3 } = this, t3 = e3.length;
          for (let r3 = 0; r3 < t3; r3++) e3[r3].complete();
          this._clearObservers();
        }
      }
      unsubscribe() {
        this._closed = true, this._clearObservers();
      }
      get observed() {
        return this.currentObservers.size > 0;
      }
      _subscribe(e3) {
        return this._checkFinalizedStatuses(e3), this._innerSubscribe(e3);
      }
      _innerSubscribe(e3) {
        if (this.hasError || this._closed) return n2.Subscription.EMPTY;
        const { currentObservers: t3 } = this, r3 = this._observerCounter++;
        return t3.set(r3, e3), this.observerSnapshot = void 0, e3.add(() => {
          t3.delete(r3), this.observerSnapshot = void 0;
        }), e3;
      }
      _checkFinalizedStatuses(e3) {
        const { hasError: t3, thrownError: r3, _closed: n3 } = this;
        t3 ? e3.error(r3) : n3 && e3.complete();
      }
      asObservable() {
        return new n2.Observable((e3) => this.subscribe(e3));
      }
    }
    t2.Subject = o2;
  }