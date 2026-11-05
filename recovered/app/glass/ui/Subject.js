// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Subject.js range:19702860..19704817
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.032Z
V5p = L({ "Subject.js"() {
  E(), K7(), kOa = class extends F4 {
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
    next(t) {
      if (!this._closed) {
        const { observers: e } = this, n = e.length;
        for (let i = 0; i < n; i++) e[i].next(t);
      }
    }
    error(t) {
      if (!this._closed) {
        this.hasError = this._closed = true, this.thrownError = t;
        const { observers: e } = this, n = e.length;
        for (let i = 0; i < n; i++) e[i].error(t);
        this._clearObservers();
      }
    }
    complete() {
      if (!this._closed) {
        this._closed = true;
        const { observers: t } = this, e = t.length;
        for (let n = 0; n < e; n++) t[n].complete();
        this._clearObservers();
      }
    }
    unsubscribe() {
      this._closed = true, this._clearObservers();
    }
    get observed() {
      return this.currentObservers.size > 0;
    }
    _subscribe(t) {
      return this._checkFinalizedStatuses(t), this._innerSubscribe(t);
    }
    _innerSubscribe(t) {
      if (this.hasError || this._closed) return PCn.EMPTY;
      const { currentObservers: e } = this, n = this._observerCounter++;
      return e.set(n, t), this.observerSnapshot = void 0, t.add(() => {
        e.delete(n), this.observerSnapshot = void 0;
      }), t;
    }
    _checkFinalizedStatuses(t) {
      const { hasError: e, thrownError: n, _closed: i } = this;
      e ? t.error(n) : i && t.complete();
    }
    asObservable() {
      return new F4((t) => this.subscribe(t));
    }
  };
} }), wOa, 