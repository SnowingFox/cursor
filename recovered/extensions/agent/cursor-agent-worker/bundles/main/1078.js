// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1078 range:30099..42049
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1078: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.createNotification = a10.nextNotification = a10.errorNotification = a10.COMPLETE_NOTIFICATION = a10.isObservable = a10.isArrayLike = a10.isPromise = a10.readableStreamLikeToAsyncGenerator = a10.isFunction = a10.getObservableInputType = a10.ObservableInputType = a10.subscribeToArray = a10.fromPromise = a10.fromArrayLike = a10.from = a10.reportUnhandledError = a10.Observable = a10.operate = a10.config = a10.Subscriber = a10.Subscription = a10.UnsubscriptionError = void 0;
    class n10 extends Error {
      errors;
      constructor(e11) {
        super(e11 ? `${e11.length} errors occurred during unsubscription:
${e11.map((e12, a11) => `${a11 + 1}) ${e12.toString()}`).join("\n  ")}` : ""), this.errors = e11, this.name = "UnsubscriptionError";
      }
    }
    a10.UnsubscriptionError = n10;
    class s10 {
      initialTeardown;
      static EMPTY = (() => {
        const e11 = new s10();
        return e11.closed = true, e11;
      })();
      closed = false;
      _finalizers = null;
      constructor(e11) {
        this.initialTeardown = e11;
      }
      unsubscribe() {
        let e11;
        if (!this.closed) {
          this.closed = true;
          const { initialTeardown: a11 } = this;
          if (y10(a11)) try {
            a11();
          } catch (a12) {
            e11 = a12 instanceof n10 ? a12.errors : [a12];
          }
          const { _finalizers: s11 } = this;
          if (s11) {
            this._finalizers = null;
            for (const a12 of s11) try {
              o10(a12);
            } catch (a13) {
              e11 = e11 ?? [], a13 instanceof n10 ? e11.push(...a13.errors) : e11.push(a13);
            }
          }
          if (e11) throw new n10(e11);
        }
      }
      add(e11) {
        e11 && e11 !== this && (this.closed ? o10(e11) : (e11 && "add" in e11 && e11.add(() => {
          this.remove(e11);
        }), this._finalizers ??= /* @__PURE__ */ new Set(), this._finalizers.add(e11)));
      }
      remove(e11) {
        this._finalizers?.delete(e11);
      }
    }
    function o10(e11) {
      y10(e11) ? e11() : e11.unsubscribe();
    }
    a10.Subscription = s10, "symbol" == typeof Symbol.dispose && (s10.prototype[Symbol.dispose] = s10.prototype.unsubscribe);
    class r10 extends s10 {
      isStopped = false;
      destination;
      _nextOverride = null;
      _errorOverride = null;
      _completeOverride = null;
      _onFinalize = null;
      constructor(e11, a11) {
        var n11, s11;
        super(), this.destination = e11 instanceof r10 ? e11 : new l10(!(n11 = e11) || y10(n11) ? { next: n11 ?? void 0 } : n11), this._nextOverride = a11?.next ?? null, this._errorOverride = a11?.error ?? null, this._completeOverride = a11?.complete ?? null, this._onFinalize = a11?.finalize ?? null, this._next = this._nextOverride ? t10 : this._next, this._error = this._errorOverride ? i10 : this._error, this._complete = this._completeOverride ? m10 : this._complete, (s11 = e11) && y10(s11.unsubscribe) && y10(s11.add) && e11.add(this);
      }
      next(e11) {
        this.isStopped ? d10(N10(e11), this) : this._next(e11);
      }
      error(e11) {
        this.isStopped ? d10(f10(e11), this) : (this.isStopped = true, this._error(e11));
      }
      complete() {
        this.isStopped ? d10(a10.COMPLETE_NOTIFICATION, this) : (this.isStopped = true, this._complete());
      }
      unsubscribe() {
        this.closed || (this.isStopped = true, super.unsubscribe(), this._onFinalize?.());
      }
      _next(e11) {
        this.destination.next(e11);
      }
      _error(e11) {
        try {
          this.destination.error(e11);
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
    function t10(e11) {
      try {
        this._nextOverride(e11);
      } catch (e12) {
        this.destination.error(e12);
      }
    }
    function i10(e11) {
      try {
        this._errorOverride(e11);
      } catch (e12) {
        this.destination.error(e12);
      } finally {
        this.unsubscribe();
      }
    }
    function m10() {
      try {
        this._completeOverride();
      } catch (e11) {
        this.destination.error(e11);
      } finally {
        this.unsubscribe();
      }
    }
    a10.Subscriber = r10, a10.config = { onUnhandledError: null, onStoppedNotification: null };
    class l10 {
      partialObserver;
      constructor(e11) {
        this.partialObserver = e11;
      }
      next(e11) {
        const { partialObserver: a11 } = this;
        if (a11.next) try {
          a11.next(e11);
        } catch (e12) {
          p10(e12);
        }
      }
      error(e11) {
        const { partialObserver: a11 } = this;
        if (a11.error) try {
          a11.error(e11);
        } catch (e12) {
          p10(e12);
        }
        else p10(e11);
      }
      complete() {
        const { partialObserver: e11 } = this;
        if (e11.complete) try {
          e11.complete();
        } catch (e12) {
          p10(e12);
        }
      }
    }
    function d10(e11, n11) {
      const { onStoppedNotification: s11 } = a10.config;
      s11 && setTimeout(() => s11(e11, n11));
    }
    a10.operate = function({ destination: e11, ...a11 }) {
      return new r10(e11, a11);
    };
    class c10 {
      constructor(e11) {
        e11 && (this._subscribe = e11);
      }
      subscribe(e11) {
        const a11 = e11 instanceof r10 ? e11 : new r10(e11);
        return a11.add(this._trySubscribe(a11)), a11;
      }
      _trySubscribe(e11) {
        try {
          return this._subscribe(e11);
        } catch (a11) {
          e11.error(a11);
        }
      }
      forEach(e11) {
        return new Promise((a11, n11) => {
          const s11 = new r10({ next: (a12) => {
            try {
              e11(a12);
            } catch (e12) {
              n11(e12), s11.unsubscribe();
            }
          }, error: n11, complete: a11 });
          this.subscribe(s11);
        });
      }
      _subscribe(e11) {
      }
      [Symbol.observable ?? "@@observable"]() {
        return this;
      }
      pipe(...e11) {
        return e11.reduce(T10, this);
      }
      [Symbol.asyncIterator]() {
        let e11, a11, n11 = false, s11 = false;
        const o11 = [], r11 = [], t11 = (e12) => {
          for (n11 = true, a11 = e12; r11.length; ) {
            const [a12, n12] = r11.shift();
            n12(e12);
          }
        }, i11 = () => {
          for (s11 = true; r11.length; ) {
            const [e12] = r11.shift();
            e12({ value: void 0, done: true });
          }
        };
        return { next: () => (e11 || (e11 = this.subscribe({ next: (e12) => {
          if (r11.length) {
            const [a12] = r11.shift();
            a12({ value: e12, done: false });
          } else o11.push(e12);
        }, error: t11, complete: i11 })), o11.length ? Promise.resolve({ value: o11.shift(), done: false }) : s11 ? Promise.resolve({ value: void 0, done: true }) : n11 ? Promise.reject(a11) : new Promise((e12, a12) => {
          r11.push([e12, a12]);
        })), throw: (a12) => (e11?.unsubscribe(), t11(a12), Promise.reject(a12)), return: () => (e11?.unsubscribe(), i11(), Promise.resolve({ value: void 0, done: true })), [Symbol.asyncIterator]() {
          return this;
        } };
      }
    }
    function T10(e11, a11) {
      return a11(e11);
    }
    function p10(e11) {
      setTimeout(() => {
        const { onUnhandledError: n11 } = a10.config;
        if (!n11) throw e11;
        n11(e11);
      });
    }
    function _10(e11) {
      return new c10((a11) => {
        g10(e11, a11);
      });
    }
    function k10(e11) {
      return new c10((a11) => {
        e11.then((e12) => {
          a11.closed || (a11.next(e12), a11.complete());
        }, (e12) => a11.error(e12)).then(null, p10);
      });
    }
    function u10(e11) {
      return new c10((a11) => {
        (async function(e12, a12) {
          for await (const n11 of e12) if (a12.next(n11), a12.closed) return;
          a12.complete();
        })(e11, a11).catch((e12) => a11.error(e12));
      });
    }
    function g10(e11, a11) {
      const n11 = e11.length;
      for (let s11 = 0; s11 < n11; s11++) {
        if (a11.closed) return;
        a11.next(e11[s11]);
      }
      a11.complete();
    }
    var E10;
    function v10(e11) {
      if (e11 instanceof c10) return E10.Own;
      if ((function(e12) {
        return y10(e12[Symbol.observable ?? "@@observable"]);
      })(e11)) return E10.InteropObservable;
      if (I10(e11)) return E10.ArrayLike;
      if (R10(e11)) return E10.Promise;
      if (a11 = e11, Symbol.asyncIterator && y10(a11?.[Symbol.asyncIterator])) return E10.AsyncIterable;
      var a11;
      if ((function(e12) {
        return y10(e12?.[Symbol.iterator]);
      })(e11)) return E10.Iterable;
      if ((function(e12) {
        return y10(e12?.getReader);
      })(e11)) return E10.ReadableStreamLike;
      throw new TypeError(`You provided ${null !== e11 && "object" == typeof e11 ? "an invalid object" : `'${e11}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
    }
    function y10(e11) {
      return "function" == typeof e11;
    }
    async function* S10(e11) {
      const a11 = e11.getReader();
      try {
        for (; ; ) {
          const { value: e12, done: n11 } = await a11.read();
          if (n11) return;
          yield e12;
        }
      } finally {
        a11.releaseLock();
      }
    }
    function R10(e11) {
      return y10(e11?.then);
    }
    function I10(e11) {
      return e11 && "number" == typeof e11.length && !y10(e11);
    }
    function f10(e11) {
      return O10("E", void 0, e11);
    }
    function N10(e11) {
      return O10("N", e11, void 0);
    }
    function O10(e11, a11, n11) {
      return { kind: e11, value: a11, error: n11 };
    }
    a10.Observable = c10, a10.reportUnhandledError = p10, a10.from = function(e11) {
      switch (v10(e11)) {
        case E10.Own:
          return e11;
        case E10.InteropObservable:
          return n11 = e11, new c10((e12) => {
            const a12 = n11[Symbol.observable ?? "@@observable"]();
            if (y10(a12.subscribe)) return a12.subscribe(e12);
            throw new TypeError("Provided object does not correctly implement Symbol.observable");
          });
        case E10.ArrayLike:
          return _10(e11);
        case E10.Promise:
          return k10(e11);
        case E10.AsyncIterable:
          return u10(e11);
        case E10.Iterable:
          return a11 = e11, new c10((e12) => {
            for (const n12 of a11) if (e12.next(n12), e12.closed) return;
            e12.complete();
          });
        case E10.ReadableStreamLike:
          return u10(S10(e11));
      }
      var a11, n11;
    }, a10.fromArrayLike = _10, a10.fromPromise = k10, a10.subscribeToArray = g10, (function(e11) {
      e11[e11.Own = 0] = "Own", e11[e11.InteropObservable = 1] = "InteropObservable", e11[e11.ArrayLike = 2] = "ArrayLike", e11[e11.Promise = 3] = "Promise", e11[e11.AsyncIterable = 4] = "AsyncIterable", e11[e11.Iterable = 5] = "Iterable", e11[e11.ReadableStreamLike = 6] = "ReadableStreamLike";
    })(E10 = a10.ObservableInputType || (a10.ObservableInputType = {})), a10.getObservableInputType = v10, a10.isFunction = y10, a10.readableStreamLikeToAsyncGenerator = S10, a10.isPromise = R10, a10.isArrayLike = I10, a10.isObservable = function(e11) {
      return !!e11 && (e11 instanceof c10 || y10(e11.lift) && y10(e11.subscribe));
    }, a10.COMPLETE_NOTIFICATION = O10("C", void 0, void 0), a10.errorNotification = f10, a10.nextNotification = N10, a10.createNotification = O10;
  }