// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 51078 range:3802363..3813637
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
51078: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createNotification = t.nextNotification = t.errorNotification = t.COMPLETE_NOTIFICATION = t.isObservable = t.isArrayLike = t.isPromise = t.readableStreamLikeToAsyncGenerator = t.isFunction = t.getObservableInputType = t.ObservableInputType = t.subscribeToArray = t.fromPromise = t.fromArrayLike = t.from = t.reportUnhandledError = t.Observable = t.operate = t.config = t.Subscriber = t.Subscription = t.UnsubscriptionError = void 0;
    class r extends Error {
      errors;
      constructor(e2) {
        super(e2 ? `${e2.length} errors occurred during unsubscription:
${e2.map((e3, t2) => `${t2 + 1}) ${e3.toString()}`).join("\n  ")}` : ""), this.errors = e2, this.name = "UnsubscriptionError";
      }
    }
    t.UnsubscriptionError = r;
    class n {
      initialTeardown;
      static EMPTY = (() => {
        const e2 = new n();
        return e2.closed = true, e2;
      })();
      closed = false;
      _finalizers = null;
      constructor(e2) {
        this.initialTeardown = e2;
      }
      unsubscribe() {
        let e2;
        if (!this.closed) {
          this.closed = true;
          const { initialTeardown: t2 } = this;
          if (_(t2)) try {
            t2();
          } catch (t3) {
            e2 = t3 instanceof r ? t3.errors : [t3];
          }
          const { _finalizers: n2 } = this;
          if (n2) {
            this._finalizers = null;
            for (const t3 of n2) try {
              s(t3);
            } catch (t4) {
              e2 = e2 ?? [], t4 instanceof r ? e2.push(...t4.errors) : e2.push(t4);
            }
          }
          if (e2) throw new r(e2);
        }
      }
      add(e2) {
        e2 && e2 !== this && (this.closed ? s(e2) : (e2 && "add" in e2 && e2.add(() => {
          this.remove(e2);
        }), this._finalizers ??= /* @__PURE__ */ new Set(), this._finalizers.add(e2)));
      }
      remove(e2) {
        this._finalizers?.delete(e2);
      }
    }
    function s(e2) {
      _(e2) ? e2() : e2.unsubscribe();
    }
    t.Subscription = n, "symbol" == typeof Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.unsubscribe);
    class o extends n {
      isStopped = false;
      destination;
      _nextOverride = null;
      _errorOverride = null;
      _completeOverride = null;
      _onFinalize = null;
      constructor(e2, t2) {
        var r2, n2;
        super(), this.destination = e2 instanceof o ? e2 : new l(!(r2 = e2) || _(r2) ? { next: r2 ?? void 0 } : r2), this._nextOverride = t2?.next ?? null, this._errorOverride = t2?.error ?? null, this._completeOverride = t2?.complete ?? null, this._onFinalize = t2?.finalize ?? null, this._next = this._nextOverride ? i : this._next, this._error = this._errorOverride ? a : this._error, this._complete = this._completeOverride ? c : this._complete, (n2 = e2) && _(n2.unsubscribe) && _(n2.add) && e2.add(this);
      }
      next(e2) {
        this.isStopped ? u(E(e2), this) : this._next(e2);
      }
      error(e2) {
        this.isStopped ? u(x(e2), this) : (this.isStopped = true, this._error(e2));
      }
      complete() {
        this.isStopped ? u(t.COMPLETE_NOTIFICATION, this) : (this.isStopped = true, this._complete());
      }
      unsubscribe() {
        this.closed || (this.isStopped = true, super.unsubscribe(), this._onFinalize?.());
      }
      _next(e2) {
        this.destination.next(e2);
      }
      _error(e2) {
        try {
          this.destination.error(e2);
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
    }
    function i(e2) {
      try {
        this._nextOverride(e2);
      } catch (e3) {
        this.destination.error(e3);
      }
    }
    function a(e2) {
      try {
        this._errorOverride(e2);
      } catch (e3) {
        this.destination.error(e3);
      } finally {
        this.unsubscribe();
      }
    }
    function c() {
      try {
        this._completeOverride();
      } catch (e2) {
        this.destination.error(e2);
      } finally {
        this.unsubscribe();
      }
    }
    t.Subscriber = o, t.config = { onUnhandledError: null, onStoppedNotification: null };
    class l {
      partialObserver;
      constructor(e2) {
        this.partialObserver = e2;
      }
      next(e2) {
        const { partialObserver: t2 } = this;
        if (t2.next) try {
          t2.next(e2);
        } catch (e3) {
          m(e3);
        }
      }
      error(e2) {
        const { partialObserver: t2 } = this;
        if (t2.error) try {
          t2.error(e2);
        } catch (e3) {
          m(e3);
        }
        else m(e2);
      }
      complete() {
        const { partialObserver: e2 } = this;
        if (e2.complete) try {
          e2.complete();
        } catch (e3) {
          m(e3);
        }
      }
    }
    function u(e2, r2) {
      const { onStoppedNotification: n2 } = t.config;
      n2 && setTimeout(() => n2(e2, r2));
    }
    t.operate = function({ destination: e2, ...t2 }) {
      return new o(e2, t2);
    };
    class d {
      constructor(e2) {
        e2 && (this._subscribe = e2);
      }
      subscribe(e2) {
        const t2 = e2 instanceof o ? e2 : new o(e2);
        return t2.add(this._trySubscribe(t2)), t2;
      }
      _trySubscribe(e2) {
        try {
          return this._subscribe(e2);
        } catch (t2) {
          e2.error(t2);
        }
      }
      forEach(e2) {
        return new Promise((t2, r2) => {
          const n2 = new o({ next: (t3) => {
            try {
              e2(t3);
            } catch (e3) {
              r2(e3), n2.unsubscribe();
            }
          }, error: r2, complete: t2 });
          this.subscribe(n2);
        });
      }
      _subscribe(e2) {
      }
      [Symbol.observable ?? "@@observable"]() {
        return this;
      }
      pipe(...e2) {
        return e2.reduce(p, this);
      }
      [Symbol.asyncIterator]() {
        let e2, t2, r2 = false, n2 = false;
        const s2 = [], o2 = [], i2 = (e3) => {
          for (r2 = true, t2 = e3; o2.length; ) {
            const [t3, r3] = o2.shift();
            r3(e3);
          }
        }, a2 = () => {
          for (n2 = true; o2.length; ) {
            const [e3] = o2.shift();
            e3({ value: void 0, done: true });
          }
        };
        return { next: () => (e2 || (e2 = this.subscribe({ next: (e3) => {
          if (o2.length) {
            const [t3] = o2.shift();
            t3({ value: e3, done: false });
          } else s2.push(e3);
        }, error: i2, complete: a2 })), s2.length ? Promise.resolve({ value: s2.shift(), done: false }) : n2 ? Promise.resolve({ value: void 0, done: true }) : r2 ? Promise.reject(t2) : new Promise((e3, t3) => {
          o2.push([e3, t3]);
        })), throw: (t3) => (e2?.unsubscribe(), i2(t3), Promise.reject(t3)), return: () => (e2?.unsubscribe(), a2(), Promise.resolve({ value: void 0, done: true })), [Symbol.asyncIterator]() {
          return this;
        } };
      }
    }
    function p(e2, t2) {
      return t2(e2);
    }
    function m(e2) {
      setTimeout(() => {
        const { onUnhandledError: r2 } = t.config;
        if (!r2) throw e2;
        r2(e2);
      });
    }
    function h(e2) {
      return new d((t2) => {
        y(e2, t2);
      });
    }
    function f(e2) {
      return new d((t2) => {
        e2.then((e3) => {
          t2.closed || (t2.next(e3), t2.complete());
        }, (e3) => t2.error(e3)).then(null, m);
      });
    }
    function g(e2) {
      return new d((t2) => {
        (async function(e3, t3) {
          for await (const r2 of e3) if (t3.next(r2), t3.closed) return;
          t3.complete();
        })(e2, t2).catch((e3) => t2.error(e3));
      });
    }
    function y(e2, t2) {
      const r2 = e2.length;
      for (let n2 = 0; n2 < r2; n2++) {
        if (t2.closed) return;
        t2.next(e2[n2]);
      }
      t2.complete();
    }
    var w;
    function v(e2) {
      if (e2 instanceof d) return w.Own;
      if ((function(e3) {
        return _(e3[Symbol.observable ?? "@@observable"]);
      })(e2)) return w.InteropObservable;
      if (k(e2)) return w.ArrayLike;
      if (S(e2)) return w.Promise;
      if (t2 = e2, Symbol.asyncIterator && _(t2?.[Symbol.asyncIterator])) return w.AsyncIterable;
      var t2;
      if ((function(e3) {
        return _(e3?.[Symbol.iterator]);
      })(e2)) return w.Iterable;
      if ((function(e3) {
        return _(e3?.getReader);
      })(e2)) return w.ReadableStreamLike;
      throw new TypeError(`You provided ${null !== e2 && "object" == typeof e2 ? "an invalid object" : `'${e2}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
    }
    function _(e2) {
      return "function" == typeof e2;
    }
    async function* b(e2) {
      const t2 = e2.getReader();
      try {
        for (; ; ) {
          const { value: e3, done: r2 } = await t2.read();
          if (r2) return;
          yield e3;
        }
      } finally {
        t2.releaseLock();
      }
    }
    function S(e2) {
      return _(e2?.then);
    }
    function k(e2) {
      return e2 && "number" == typeof e2.length && !_(e2);
    }
    function x(e2) {
      return I("E", void 0, e2);
    }
    function E(e2) {
      return I("N", e2, void 0);
    }
    function I(e2, t2, r2) {
      return { kind: e2, value: t2, error: r2 };
    }
    t.Observable = d, t.reportUnhandledError = m, t.from = function(e2) {
      switch (v(e2)) {
        case w.Own:
          return e2;
        case w.InteropObservable:
          return r2 = e2, new d((e3) => {
            const t3 = r2[Symbol.observable ?? "@@observable"]();
            if (_(t3.subscribe)) return t3.subscribe(e3);
            throw new TypeError("Provided object does not correctly implement Symbol.observable");
          });
        case w.ArrayLike:
          return h(e2);
        case w.Promise:
          return f(e2);
        case w.AsyncIterable:
          return g(e2);
        case w.Iterable:
          return t2 = e2, new d((e3) => {
            for (const r3 of t2) if (e3.next(r3), e3.closed) return;
            e3.complete();
          });
        case w.ReadableStreamLike:
          return g(b(e2));
      }
      var t2, r2;
    }, t.fromArrayLike = h, t.fromPromise = f, t.subscribeToArray = y, (function(e2) {
      e2[e2.Own = 0] = "Own", e2[e2.InteropObservable = 1] = "InteropObservable", e2[e2.ArrayLike = 2] = "ArrayLike", e2[e2.Promise = 3] = "Promise", e2[e2.AsyncIterable = 4] = "AsyncIterable", e2[e2.Iterable = 5] = "Iterable", e2[e2.ReadableStreamLike = 6] = "ReadableStreamLike";
    })(w = t.ObservableInputType || (t.ObservableInputType = {})), t.getObservableInputType = v, t.isFunction = _, t.readableStreamLikeToAsyncGenerator = b, t.isPromise = S, t.isArrayLike = k, t.isObservable = function(e2) {
      return !!e2 && (e2 instanceof d || _(e2.lift) && _(e2.subscribe));
    }, t.COMPLETE_NOTIFICATION = I("C", void 0, void 0), t.errorNotification = x, t.nextNotification = E, t.createNotification = I;
  }