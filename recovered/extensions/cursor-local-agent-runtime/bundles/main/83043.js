// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 83043 range:7451741..7454028
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83043: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Subject = void 0;
    const n = r(51078);
    class o extends n.Observable {
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
      next(e2) {
        if (!this._closed) {
          const { observers: t2 } = this, r2 = t2.length;
          for (let n2 = 0; n2 < r2; n2++) t2[n2].next(e2);
        }
      }
      error(e2) {
        if (!this._closed) {
          this.hasError = this._closed = true, this.thrownError = e2;
          const { observers: t2 } = this, r2 = t2.length;
          for (let n2 = 0; n2 < r2; n2++) t2[n2].error(e2);
          this._clearObservers();
        }
      }
      complete() {
        if (!this._closed) {
          this._closed = true;
          const { observers: e2 } = this, t2 = e2.length;
          for (let r2 = 0; r2 < t2; r2++) e2[r2].complete();
          this._clearObservers();
        }
      }
      unsubscribe() {
        this._closed = true, this._clearObservers();
      }
      get observed() {
        return this.currentObservers.size > 0;
      }
      _subscribe(e2) {
        return this._checkFinalizedStatuses(e2), this._innerSubscribe(e2);
      }
      _innerSubscribe(e2) {
        if (this.hasError || this._closed) return n.Subscription.EMPTY;
        const { currentObservers: t2 } = this, r2 = this._observerCounter++;
        return t2.set(r2, e2), this.observerSnapshot = void 0, e2.add(() => {
          t2.delete(r2), this.observerSnapshot = void 0;
        }), e2;
      }
      _checkFinalizedStatuses(e2) {
        const { hasError: t2, thrownError: r2, _closed: n2 } = this;
        t2 ? e2.error(r2) : n2 && e2.complete();
      }
      asObservable() {
        return new n.Observable((e2) => this.subscribe(e2));
      }
    }
    t.Subject = o;
  }