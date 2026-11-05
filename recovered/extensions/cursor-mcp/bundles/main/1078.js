// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1078 range:73611..84960
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1078: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createNotification = t2.nextNotification = t2.errorNotification = t2.COMPLETE_NOTIFICATION = t2.isObservable = t2.isArrayLike = t2.isPromise = t2.readableStreamLikeToAsyncGenerator = t2.isFunction = t2.getObservableInputType = t2.ObservableInputType = t2.subscribeToArray = t2.fromPromise = t2.fromArrayLike = t2.from = t2.reportUnhandledError = t2.Observable = t2.operate = t2.config = t2.Subscriber = t2.Subscription = t2.UnsubscriptionError = void 0;
    class r2 extends Error {
      errors;
      constructor(e3) {
        super(e3 ? `${e3.length} errors occurred during unsubscription:
${e3.map((e4, t3) => `${t3 + 1}) ${e4.toString()}`).join("\n  ")}` : ""), this.errors = e3, this.name = "UnsubscriptionError";
      }
    }
    t2.UnsubscriptionError = r2;
    class n2 {
      initialTeardown;
      static EMPTY = (() => {
        const e3 = new n2();
        return e3.closed = true, e3;
      })();
      closed = false;
      _finalizers = null;
      constructor(e3) {
        this.initialTeardown = e3;
      }
      unsubscribe() {
        let e3;
        if (!this.closed) {
          this.closed = true;
          const { initialTeardown: t3 } = this;
          if (w(t3)) try {
            t3();
          } catch (t4) {
            e3 = t4 instanceof r2 ? t4.errors : [t4];
          }
          const { _finalizers: n3 } = this;
          if (n3) {
            this._finalizers = null;
            for (const t4 of n3) try {
              o2(t4);
            } catch (t5) {
              e3 = e3 ?? [], t5 instanceof r2 ? e3.push(...t5.errors) : e3.push(t5);
            }
          }
          if (e3) throw new r2(e3);
        }
      }
      add(e3) {
        e3 && e3 !== this && (this.closed ? o2(e3) : (e3 && "add" in e3 && e3.add(() => {
          this.remove(e3);
        }), this._finalizers ??= /* @__PURE__ */ new Set(), this._finalizers.add(e3)));
      }
      remove(e3) {
        this._finalizers?.delete(e3);
      }
    }
    function o2(e3) {
      w(e3) ? e3() : e3.unsubscribe();
    }
    t2.Subscription = n2, "symbol" == typeof Symbol.dispose && (n2.prototype[Symbol.dispose] = n2.prototype.unsubscribe);
    class s2 extends n2 {
      isStopped = false;
      destination;
      _nextOverride = null;
      _errorOverride = null;
      _completeOverride = null;
      _onFinalize = null;
      constructor(e3, t3) {
        var r3, n3;
        super(), this.destination = e3 instanceof s2 ? e3 : new u(!(r3 = e3) || w(r3) ? { next: r3 ?? void 0 } : r3), this._nextOverride = t3?.next ?? null, this._errorOverride = t3?.error ?? null, this._completeOverride = t3?.complete ?? null, this._onFinalize = t3?.finalize ?? null, this._next = this._nextOverride ? i2 : this._next, this._error = this._errorOverride ? a2 : this._error, this._complete = this._completeOverride ? c : this._complete, (n3 = e3) && w(n3.unsubscribe) && w(n3.add) && e3.add(this);
      }
      next(e3) {
        this.isStopped ? l(x(e3), this) : this._next(e3);
      }
      error(e3) {
        this.isStopped ? l(E(e3), this) : (this.isStopped = true, this._error(e3));
      }
      complete() {
        this.isStopped ? l(t2.COMPLETE_NOTIFICATION, this) : (this.isStopped = true, this._complete());
      }
      unsubscribe() {
        this.closed || (this.isStopped = true, super.unsubscribe(), this._onFinalize?.());
      }
      _next(e3) {
        this.destination.next(e3);
      }
      _error(e3) {
        try {
          this.destination.error(e3);
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
    function i2(e3) {
      try {
        this._nextOverride(e3);
      } catch (e4) {
        this.destination.error(e4);
      }
    }
    function a2(e3) {
      try {
        this._errorOverride(e3);
      } catch (e4) {
        this.destination.error(e4);
      } finally {
        this.unsubscribe();
      }
    }
    function c() {
      try {
        this._completeOverride();
      } catch (e3) {
        this.destination.error(e3);
      } finally {
        this.unsubscribe();
      }
    }
    t2.Subscriber = s2, t2.config = { onUnhandledError: null, onStoppedNotification: null };
    class u {
      partialObserver;
      constructor(e3) {
        this.partialObserver = e3;
      }
      next(e3) {
        const { partialObserver: t3 } = this;
        if (t3.next) try {
          t3.next(e3);
        } catch (e4) {
          f(e4);
        }
      }
      error(e3) {
        const { partialObserver: t3 } = this;
        if (t3.error) try {
          t3.error(e3);
        } catch (e4) {
          f(e4);
        }
        else f(e3);
      }
      complete() {
        const { partialObserver: e3 } = this;
        if (e3.complete) try {
          e3.complete();
        } catch (e4) {
          f(e4);
        }
      }
    }
    function l(e3, r3) {
      const { onStoppedNotification: n3 } = t2.config;
      n3 && setTimeout(() => n3(e3, r3));
    }
    t2.operate = function({ destination: e3, ...t3 }) {
      return new s2(e3, t3);
    };
    class d {
      constructor(e3) {
        e3 && (this._subscribe = e3);
      }
      subscribe(e3) {
        const t3 = e3 instanceof s2 ? e3 : new s2(e3);
        return t3.add(this._trySubscribe(t3)), t3;
      }
      _trySubscribe(e3) {
        try {
          return this._subscribe(e3);
        } catch (t3) {
          e3.error(t3);
        }
      }
      forEach(e3) {
        return new Promise((t3, r3) => {
          const n3 = new s2({ next: (t4) => {
            try {
              e3(t4);
            } catch (e4) {
              r3(e4), n3.unsubscribe();
            }
          }, error: r3, complete: t3 });
          this.subscribe(n3);
        });
      }
      _subscribe(e3) {
      }
      [Symbol.observable ?? "@@observable"]() {
        return this;
      }
      pipe(...e3) {
        return e3.reduce(p, this);
      }
      [Symbol.asyncIterator]() {
        let e3, t3, r3 = false, n3 = false;
        const o3 = [], s3 = [], i3 = (e4) => {
          for (r3 = true, t3 = e4; s3.length; ) {
            const [t4, r4] = s3.shift();
            r4(e4);
          }
        }, a3 = () => {
          for (n3 = true; s3.length; ) {
            const [e4] = s3.shift();
            e4({ value: void 0, done: true });
          }
        };
        return { next: () => (e3 || (e3 = this.subscribe({ next: (e4) => {
          if (s3.length) {
            const [t4] = s3.shift();
            t4({ value: e4, done: false });
          } else o3.push(e4);
        }, error: i3, complete: a3 })), o3.length ? Promise.resolve({ value: o3.shift(), done: false }) : n3 ? Promise.resolve({ value: void 0, done: true }) : r3 ? Promise.reject(t3) : new Promise((e4, t4) => {
          s3.push([e4, t4]);
        })), throw: (t4) => (e3?.unsubscribe(), i3(t4), Promise.reject(t4)), return: () => (e3?.unsubscribe(), a3(), Promise.resolve({ value: void 0, done: true })), [Symbol.asyncIterator]() {
          return this;
        } };
      }
    }
    function p(e3, t3) {
      return t3(e3);
    }
    function f(e3) {
      setTimeout(() => {
        const { onUnhandledError: r3 } = t2.config;
        if (!r3) throw e3;
        r3(e3);
      });
    }
    function h(e3) {
      return new d((t3) => {
        y(e3, t3);
      });
    }
    function m(e3) {
      return new d((t3) => {
        e3.then((e4) => {
          t3.closed || (t3.next(e4), t3.complete());
        }, (e4) => t3.error(e4)).then(null, f);
      });
    }
    function g(e3) {
      return new d((t3) => {
        (async function(e4, t4) {
          for await (const r3 of e4) if (t4.next(r3), t4.closed) return;
          t4.complete();
        })(e3, t3).catch((e4) => t3.error(e4));
      });
    }
    function y(e3, t3) {
      const r3 = e3.length;
      for (let n3 = 0; n3 < r3; n3++) {
        if (t3.closed) return;
        t3.next(e3[n3]);
      }
      t3.complete();
    }
    var _;
    function v(e3) {
      if (e3 instanceof d) return _.Own;
      if ((function(e4) {
        return w(e4[Symbol.observable ?? "@@observable"]);
      })(e3)) return _.InteropObservable;
      if (k(e3)) return _.ArrayLike;
      if (S(e3)) return _.Promise;
      if (t3 = e3, Symbol.asyncIterator && w(t3?.[Symbol.asyncIterator])) return _.AsyncIterable;
      var t3;
      if ((function(e4) {
        return w(e4?.[Symbol.iterator]);
      })(e3)) return _.Iterable;
      if ((function(e4) {
        return w(e4?.getReader);
      })(e3)) return _.ReadableStreamLike;
      throw new TypeError(`You provided ${null !== e3 && "object" == typeof e3 ? "an invalid object" : `'${e3}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
    }
    function w(e3) {
      return "function" == typeof e3;
    }
    async function* b(e3) {
      const t3 = e3.getReader();
      try {
        for (; ; ) {
          const { value: e4, done: r3 } = await t3.read();
          if (r3) return;
          yield e4;
        }
      } finally {
        t3.releaseLock();
      }
    }
    function S(e3) {
      return w(e3?.then);
    }
    function k(e3) {
      return e3 && "number" == typeof e3.length && !w(e3);
    }
    function E(e3) {
      return T("E", void 0, e3);
    }
    function x(e3) {
      return T("N", e3, void 0);
    }
    function T(e3, t3, r3) {
      return { kind: e3, value: t3, error: r3 };
    }
    t2.Observable = d, t2.reportUnhandledError = f, t2.from = function(e3) {
      switch (v(e3)) {
        case _.Own:
          return e3;
        case _.InteropObservable:
          return r3 = e3, new d((e4) => {
            const t4 = r3[Symbol.observable ?? "@@observable"]();
            if (w(t4.subscribe)) return t4.subscribe(e4);
            throw new TypeError("Provided object does not correctly implement Symbol.observable");
          });
        case _.ArrayLike:
          return h(e3);
        case _.Promise:
          return m(e3);
        case _.AsyncIterable:
          return g(e3);
        case _.Iterable:
          return t3 = e3, new d((e4) => {
            for (const r4 of t3) if (e4.next(r4), e4.closed) return;
            e4.complete();
          });
        case _.ReadableStreamLike:
          return g(b(e3));
      }
      var t3, r3;
    }, t2.fromArrayLike = h, t2.fromPromise = m, t2.subscribeToArray = y, (function(e3) {
      e3[e3.Own = 0] = "Own", e3[e3.InteropObservable = 1] = "InteropObservable", e3[e3.ArrayLike = 2] = "ArrayLike", e3[e3.Promise = 3] = "Promise", e3[e3.AsyncIterable = 4] = "AsyncIterable", e3[e3.Iterable = 5] = "Iterable", e3[e3.ReadableStreamLike = 6] = "ReadableStreamLike";
    })(_ = t2.ObservableInputType || (t2.ObservableInputType = {})), t2.getObservableInputType = v, t2.isFunction = w, t2.readableStreamLikeToAsyncGenerator = b, t2.isPromise = S, t2.isArrayLike = k, t2.isObservable = function(e3) {
      return !!e3 && (e3 instanceof d || w(e3.lift) && w(e3.subscribe));
    }, t2.COMPLETE_NOTIFICATION = T("C", void 0, void 0), t2.errorNotification = E, t2.nextNotification = x, t2.createNotification = T;
  }