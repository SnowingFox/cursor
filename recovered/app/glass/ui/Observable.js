// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Observable.js range:19697275..19702860
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.837Z
K7 = L({ "Observable.js"() {
  E(), uqr = class extends Error {
    errors;
    constructor(t) {
      super(t ? `${t.length} errors occurred during unsubscription:
${t.map((e, n) => `${n + 1}) ${e.toString()}`).join(`
  `)}` : ""), this.errors = t, this.name = "UnsubscriptionError";
    }
  }, PCn = class V2b {
    initialTeardown;
    static EMPTY = (() => {
      const e = new V2b();
      return e.closed = true, e;
    })();
    closed = false;
    _finalizers = null;
    constructor(e) {
      this.initialTeardown = e;
    }
    unsubscribe() {
      let e;
      if (!this.closed) {
        this.closed = true;
        const { initialTeardown: n } = this;
        if (J0e(n)) try {
          n();
        } catch (r) {
          e = r instanceof uqr ? r.errors : [r];
        }
        const { _finalizers: i } = this;
        if (i) {
          this._finalizers = null;
          for (const r of i) try {
            $5p(r);
          } catch (s) {
            e = e ?? [], s instanceof uqr ? e.push(...s.errors) : e.push(s);
          }
        }
        if (e) throw new uqr(e);
      }
    }
    add(e) {
      e && e !== this && (this.closed ? $5p(e) : (e && "add" in e && e.add(() => {
        this.remove(e);
      }), this._finalizers ??= /* @__PURE__ */ new Set(), this._finalizers.add(e)));
    }
    remove(e) {
      this._finalizers?.delete(e);
    }
  }, typeof Symbol.dispose == "symbol" && (PCn.prototype[Symbol.dispose] = PCn.prototype.unsubscribe), T0t = class K2b extends PCn {
    isStopped = false;
    destination;
    _nextOverride = null;
    _errorOverride = null;
    _completeOverride = null;
    _onFinalize = null;
    constructor(e, n) {
      super(), this.destination = e instanceof K2b ? e : hM1(e), this._nextOverride = n?.next ?? null, this._errorOverride = n?.error ?? null, this._completeOverride = n?.complete ?? null, this._onFinalize = n?.finalize ?? null, this._next = this._nextOverride ? cM1 : this._next, this._error = this._errorOverride ? uM1 : this._error, this._complete = this._completeOverride ? dM1 : this._complete, pM1(e) && e.add(this);
    }
    next(e) {
      this.isStopped ? _Oa(q5p(e), this) : this._next(e);
    }
    error(e) {
      this.isStopped ? _Oa(G5p(e), this) : (this.isStopped = true, this._error(e));
    }
    complete() {
      this.isStopped ? _Oa(SOa, this) : (this.isStopped = true, this._complete());
    }
    unsubscribe() {
      this.closed || (this.isStopped = true, super.unsubscribe(), this._onFinalize?.());
    }
    _next(e) {
      this.destination.next(e);
    }
    _error(e) {
      try {
        this.destination.error(e);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  }, yOa = { onUnhandledError: null, onStoppedNotification: null }, z5p = class {
    partialObserver;
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      const { partialObserver: e } = this;
      if (e.next) try {
        e.next(t);
      } catch (n) {
        hSi(n);
      }
    }
    error(t) {
      const { partialObserver: e } = this;
      if (e.error) try {
        e.error(t);
      } catch (n) {
        hSi(n);
      }
      else hSi(t);
    }
    complete() {
      const { partialObserver: t } = this;
      if (t.complete) try {
        t.complete();
      } catch (e) {
        hSi(e);
      }
    }
  }, F4 = class {
    constructor(t) {
      t && (this._subscribe = t);
    }
    subscribe(t) {
      const e = t instanceof T0t ? t : new T0t(t);
      return e.add(this._trySubscribe(e)), e;
    }
    _trySubscribe(t) {
      try {
        return this._subscribe(t);
      } catch (e) {
        t.error(e);
      }
    }
    forEach(t) {
      return new Promise((e, n) => {
        const i = new T0t({ next: (r) => {
          try {
            t(r);
          } catch (s) {
            n(s), i.unsubscribe();
          }
        }, error: n, complete: e });
        this.subscribe(i);
      });
    }
    _subscribe(t) {
    }
    [Symbol.observable ?? "@@observable"]() {
      return this;
    }
    pipe(...t) {
      return t.reduce(mM1, this);
    }
    [Symbol.asyncIterator]() {
      let t, e = false, n, i = false;
      const r = [], s = [], o = (l) => {
        for (e = true, n = l; s.length; ) {
          const [c, u] = s.shift();
          u(l);
        }
      }, a = () => {
        for (i = true; s.length; ) {
          const [l] = s.shift();
          l({ value: void 0, done: true });
        }
      };
      return { next: () => (t || (t = this.subscribe({ next: (l) => {
        if (s.length) {
          const [c] = s.shift();
          c({ value: l, done: false });
        } else r.push(l);
      }, error: o, complete: a })), r.length ? Promise.resolve({ value: r.shift(), done: false }) : i ? Promise.resolve({ value: void 0, done: true }) : e ? Promise.reject(n) : new Promise((l, c) => {
        s.push([l, c]);
      })), throw: (l) => (t?.unsubscribe(), o(l), Promise.reject(l)), return: () => (t?.unsubscribe(), a(), Promise.resolve({ value: void 0, done: true })), [Symbol.asyncIterator]() {
        return this;
      } };
    }
  }, (function(t) {
    t[t.Own = 0] = "Own", t[t.InteropObservable = 1] = "InteropObservable", t[t.ArrayLike = 2] = "ArrayLike", t[t.Promise = 3] = "Promise", t[t.AsyncIterable = 4] = "AsyncIterable", t[t.Iterable = 5] = "Iterable", t[t.ReadableStreamLike = 6] = "ReadableStreamLike";
  })(Uae || (Uae = {})), SOa = bOa("C", void 0, void 0);
} }), kOa, 