(() => {
  "use strict";
  var e = { 3: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ValueWithChangeEvent = t2.Relay = t2.EventBufferer = t2.DynamicListEventMultiplexer = t2.EventMultiplexer = t2.MicrotaskEmitter = t2.DebounceEmitter = t2.PauseableEmitter = t2.AsyncEmitter = t2.createEventDeliveryQueue = t2.Emitter = t2.ListenerRefusalError = t2.ListenerLeakError = t2.EventProfiling = t2.Event = void 0, t2.setGlobalLeakWarningThreshold = function(e3) {
      const t3 = c;
      return c = e3, { dispose() {
        c = t3;
      } };
    }, t2.trackSetChanges = function(e3, t3, n3) {
      const r3 = new o.DisposableMap();
      let s3 = new Set(e3());
      for (const e4 of s3) r3.set(e4, n3(e4));
      const a2 = new o.DisposableStore();
      return a2.add(t3(() => {
        const t4 = e3(), o2 = (0, i2.diffSets)(s3, t4);
        for (const e4 of o2.removed) r3.deleteAndDispose(e4);
        for (const e4 of o2.added) r3.set(e4, n3(e4));
        s3 = new Set(t4);
      })), a2.add(r3), a2;
    };
    const i2 = n2(846), r2 = n2(976), s2 = n2(46), o = n2(147), a = n2(118), u = n2(252);
    var l;
    !(function(e3) {
      function t3(e4) {
        false;
      }
      function n3(e4) {
        return (t4, n4 = null, i4) => {
          let r4, s4 = false;
          return r4 = e4((e5) => {
            if (!s4) return r4 ? r4.dispose() : s4 = true, t4.call(n4, e5);
          }, null, i4), s4 && r4.dispose(), r4;
        };
      }
      function i3(e4, t4, n4) {
        return s3((n5, i4 = null, r4) => e4((e5) => n5.call(i4, t4(e5)), null, r4), n4);
      }
      function r3(e4, t4, n4) {
        return s3((n5, i4 = null, r4) => e4((e5) => t4(e5) && n5.call(i4, e5), null, r4), n4);
      }
      function s3(e4, n4) {
        let i4;
        const r4 = { onWillAddFirstListener() {
          i4 = e4(s4.fire, s4);
        }, onDidRemoveLastListener() {
          i4?.dispose();
        } };
        n4 || t3();
        const s4 = new v(r4);
        return n4?.add(s4), s4.event;
      }
      function a2(e4, n4, i4 = 100, r4 = false, s4 = false, o2, a3) {
        let u3, l3, h3, c2, f2 = 0;
        const d2 = { leakWarningThreshold: o2, onWillAddFirstListener() {
          u3 = e4((e5) => {
            f2++, l3 = n4(l3, e5), r4 && !h3 && (g2.fire(l3), l3 = void 0), c2 ??= () => {
              const e6 = l3;
              l3 = void 0, h3 = void 0, (!r4 || f2 > 1) && g2.fire(e6), f2 = 0;
            }, "number" == typeof i4 ? (clearTimeout(h3), h3 = setTimeout(c2, i4)) : void 0 === h3 && (h3 = 0, queueMicrotask(c2));
          });
        }, onWillRemoveListener() {
          s4 && f2 > 0 && c2?.();
        }, onDidRemoveLastListener() {
          c2 = void 0, u3.dispose();
        } };
        a3 || t3();
        const g2 = new v(d2);
        return a3?.add(g2), g2.event;
      }
      e3.None = () => o.Disposable.None, e3.defer = function(e4, t4) {
        return a2(e4, () => {
        }, 0, void 0, true, void 0, t4);
      }, e3.once = n3, e3.onceIf = function(t4, n4) {
        return e3.once(e3.filter(t4, n4));
      }, e3.map = i3, e3.forEach = function(e4, t4, n4) {
        return s3((n5, i4 = null, r4) => e4((e5) => {
          t4(e5), n5.call(i4, e5);
        }, null, r4), n4);
      }, e3.filter = r3, e3.signal = function(e4) {
        return e4;
      }, e3.any = function(...e4) {
        return (t4, n4 = null, i4) => (function(e5, t5) {
          t5 instanceof Array ? t5.push(e5) : t5 && t5.add(e5);
          return e5;
        })((0, o.combinedDisposable)(...e4.map((e5) => e5((e6) => t4.call(n4, e6)))), i4);
      }, e3.reduce = function(e4, t4, n4, r4) {
        let s4 = n4;
        return i3(e4, (e5) => (s4 = t4(s4, e5), s4), r4);
      }, e3.debounce = a2, e3.accumulate = function(t4, n4 = 0, i4) {
        return e3.debounce(t4, (e4, t5) => e4 ? (e4.push(t5), e4) : [t5], n4, void 0, true, void 0, i4);
      }, e3.latch = function(e4, t4 = (e5, t5) => e5 === t5, n4) {
        let i4, s4 = true;
        return r3(e4, (e5) => {
          const n5 = s4 || !t4(e5, i4);
          return s4 = false, i4 = e5, n5;
        }, n4);
      }, e3.split = function(t4, n4, i4) {
        return [e3.filter(t4, n4, i4), e3.filter(t4, (e4) => !n4(e4), i4)];
      }, e3.buffer = function(e4, t4 = false, n4 = [], i4) {
        let r4 = n4.slice(), s4 = e4((e5) => {
          r4 ? r4.push(e5) : a3.fire(e5);
        });
        i4 && i4.add(s4);
        const o2 = () => {
          r4?.forEach((e5) => a3.fire(e5)), r4 = null;
        }, a3 = new v({ onWillAddFirstListener() {
          s4 || (s4 = e4((e5) => a3.fire(e5)), i4 && i4.add(s4));
        }, onDidAddFirstListener() {
          r4 && (t4 ? setTimeout(o2) : o2());
        }, onDidRemoveLastListener() {
          s4 && s4.dispose(), s4 = null;
        } });
        return i4 && i4.add(a3), a3.event;
      }, e3.chain = function(e4, t4) {
        return (n4, i4, r4) => {
          const s4 = t4(new l2());
          return e4(function(e5) {
            const t5 = s4.evaluate(e5);
            t5 !== u2 && n4.call(i4, t5);
          }, void 0, r4);
        };
      };
      const u2 = /* @__PURE__ */ Symbol("HaltChainable");
      class l2 {
        constructor() {
          this.steps = [];
        }
        map(e4) {
          return this.steps.push(e4), this;
        }
        forEach(e4) {
          return this.steps.push((t4) => (e4(t4), t4)), this;
        }
        filter(e4) {
          return this.steps.push((t4) => e4(t4) ? t4 : u2), this;
        }
        reduce(e4, t4) {
          let n4 = t4;
          return this.steps.push((t5) => (n4 = e4(n4, t5), n4)), this;
        }
        latch(e4 = (e5, t4) => e5 === t4) {
          let t4, n4 = true;
          return this.steps.push((i4) => {
            const r4 = n4 || !e4(i4, t4);
            return n4 = false, t4 = i4, r4 ? i4 : u2;
          }), this;
        }
        evaluate(e4) {
          for (const t4 of this.steps) if ((e4 = t4(e4)) === u2) break;
          return e4;
        }
      }
      e3.fromNodeEventEmitter = function(e4, t4, n4 = (e5) => e5) {
        const i4 = (...e5) => r4.fire(n4(...e5)), r4 = new v({ onWillAddFirstListener: () => e4.on(t4, i4), onDidRemoveLastListener: () => e4.removeListener(t4, i4) });
        return r4.event;
      }, e3.fromRxJS = function(e4) {
        let t4;
        const n4 = new v({ onWillAddFirstListener: () => {
          t4 = e4.subscribe((e5) => n4.fire(e5));
        }, onDidRemoveLastListener: () => {
          t4?.unsubscribe(), t4 = void 0;
        } });
        return n4.event;
      }, e3.fromDOMEventEmitter = function(e4, t4, n4 = (e5) => e5) {
        const i4 = (...e5) => r4.fire(n4(...e5)), r4 = new v({ onWillAddFirstListener: () => e4.addEventListener(t4, i4), onDidRemoveLastListener: () => e4.removeEventListener(t4, i4) });
        return r4.event;
      }, e3.toPromise = function(e4, t4) {
        return new Promise((i4) => n3(e4)(i4, null, t4));
      }, e3.fromPromise = function(e4) {
        const t4 = new v();
        return e4.then((e5) => {
          t4.fire(e5);
        }, () => {
          t4.fire(void 0);
        }).finally(() => {
          t4.dispose();
        }), t4.event;
      }, e3.forward = function(e4, t4) {
        return e4((e5) => t4.fire(e5));
      }, e3.runAndSubscribe = function(e4, t4, n4) {
        return t4(n4), e4((e5) => t4(e5));
      };
      class h2 {
        constructor(e4, n4) {
          this._observable = e4, this._counter = 0, this._hasChanged = false;
          const i4 = { onWillAddFirstListener: () => {
            e4.addObserver(this), this._observable.reportChanges();
          }, onDidRemoveLastListener: () => {
            e4.removeObserver(this);
          } };
          n4 || t3(), this.emitter = new v(i4), n4 && n4.add(this.emitter);
        }
        beginUpdate(e4) {
          this._counter++;
        }
        handlePossibleChange(e4) {
        }
        handleChange(e4, t4) {
          this._hasChanged = true;
        }
        endUpdate(e4) {
          this._counter--, 0 === this._counter && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
        }
      }
      e3.fromObservable = function(e4, t4) {
        return new h2(e4, t4).emitter.event;
      }, e3.fromObservableLight = function(e4) {
        return (t4, n4, i4) => {
          let r4 = 0, s4 = false;
          const a3 = { beginUpdate() {
            r4++;
          }, endUpdate() {
            r4--, 0 === r4 && (e4.reportChanges(), s4 && (s4 = false, t4.call(n4)));
          }, handlePossibleChange() {
          }, handleChange() {
            s4 = true;
          } };
          e4.addObserver(a3), e4.reportChanges();
          const u3 = { dispose() {
            e4.removeObserver(a3);
          } };
          return i4 instanceof o.DisposableStore ? i4.add(u3) : Array.isArray(i4) && i4.push(u3), u3;
        };
      };
    })(l || (t2.Event = l = {}));
    class h {
      static {
        this.all = /* @__PURE__ */ new Set();
      }
      static {
        this._idPool = 0;
      }
      constructor(e3) {
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${e3}_${h._idPool++}`, h.all.add(this);
      }
      start(e3) {
        this._stopWatch = new u.StopWatch(), this.listenerCount = e3;
      }
      stop() {
        if (this._stopWatch) {
          const e3 = this._stopWatch.elapsed();
          this.durations.push(e3), this.elapsedOverall += e3, this.invocationCount += 1, this._stopWatch = void 0;
        }
      }
    }
    t2.EventProfiling = h;
    let c = -1;
    let f = 1;
    function d() {
      return (f++).toString(16).padStart(3, "0");
    }
    class g {
      constructor(e3, t3, n3 = d()) {
        this._errorHandler = e3, this.threshold = t3, this.name = n3, this._warnCountdown = 0;
      }
      dispose() {
        this._stacks?.clear();
      }
      check(e3, t3) {
        const n3 = this.threshold;
        if (n3 <= 0 || t3 < n3) return;
        this._stacks || (this._stacks = /* @__PURE__ */ new Map());
        const i3 = e3.value, r3 = this._stacks.get(i3) || 0;
        if (this._stacks.set(i3, r3 + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
          this._warnCountdown = 0.5 * n3;
          const [e4, i4] = this.getMostFrequentStack(), r4 = `[${this.name}] potential listener LEAK detected, having ${t3} listeners already. MOST frequent listener (${i4}):`;
          console.warn(r4), console.warn(e4), console.warn(JSON.parse(JSON.stringify(Array.from(this._stacks))));
          const s3 = i4 / t3 > 0.3 ? "dominated" : "popular", a2 = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, u2 = new p(s3, r4, e4, t3, a2);
          this._errorHandler(u2), (0, o.reportLifecycleMisuse)(u2, "emitter_listener_leak");
        }
        return () => {
          const e4 = this._stacks.get(i3) || 0;
          e4 <= 1 ? this._stacks.delete(i3) : this._stacks.set(i3, e4 - 1);
        };
      }
      getMostFrequentStack() {
        if (!this._stacks) return;
        let e3, t3 = 0;
        for (const [n3, i3] of this._stacks) (!e3 || t3 < i3) && (e3 = [n3, i3], t3 = i3);
        return e3;
      }
    }
    class m {
      static create() {
        const e3 = new Error();
        return new m(e3.stack ?? "");
      }
      constructor(e3) {
        this.value = e3;
      }
      print() {
        console.warn(this.value.split("\n").slice(2).join("\n"));
      }
    }
    class p extends Error {
      constructor(e3, t3, n3, i3, r3) {
        super(r3 ? `[${r3}] potential listener LEAK detected, ${e3}` : `potential listener LEAK detected, ${e3}`), this.name = "ListenerLeakError", this.kind = e3, this.listenerCount = i3, this.details = t3, this.stack = n3;
      }
    }
    t2.ListenerLeakError = p;
    class b extends p {
      constructor(e3, t3, n3, i3, r3) {
        super(e3, t3, n3, i3, r3), this.name = "ListenerRefusalError";
      }
    }
    t2.ListenerRefusalError = b;
    class L {
      constructor(e3) {
        this.value = e3;
      }
    }
    const _ = (e3, t3) => {
      if (e3 instanceof L) t3(e3);
      else for (let n3 = 0; n3 < e3.length; n3++) {
        const i3 = e3[n3];
        i3 && t3(i3);
      }
    };
    class v {
      constructor(e3) {
        this._size = 0, this._options = e3, (c > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? c, this._leakWarningName = this._options?.leakWarningName ?? d(), this._leakWarningErrorHandler = this._options?.onListenerError ?? r2.onUnexpectedError), this._perfMon = this._options?._profName ? new h(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
      }
      _getLeakageMonitor() {
        if (void 0 !== this._leakWarningThreshold && void 0 !== this._leakWarningName && void 0 !== this._leakWarningErrorHandler) return this._leakageMon ??= new g(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
      }
      dispose() {
        this._disposed || (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners && (_(this._listeners, (e3) => {
          e3.value = void 0;
        }), this._listeners = void 0, this._size = 0), this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose());
      }
      get event() {
        return this._event ??= (e3, t3, n3) => {
          if (void 0 !== this._leakWarningThreshold && this._size > this._leakWarningThreshold ** 2) {
            const e4 = this._getLeakageMonitor();
            if (e4) {
              const t4 = `[${e4.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${e4.threshold})`;
              console.warn(t4);
              const n4 = e4.getMostFrequentStack() ?? ["UNKNOWN stack", -1], i4 = n4[1] / this._size > 0.3 ? "dominated" : "popular", s4 = new b(i4, `${t4}. HINT: Stack shows most frequent listener (${n4[1]}-times)`, n4[0], this._size, this._options?.leakWarningName);
              return (this._options?.onListenerError || r2.onUnexpectedError)(s4), (0, o.reportLifecycleMisuse)(s4, "emitter_listener_refusal"), o.Disposable.None;
            }
          }
          if (this._disposed) {
            const e4 = new Error("Trying to listen to an Emitter that has already been disposed of.");
            return (0, o.reportLifecycleMisuse)(e4, "emitter_use_after_dispose"), o.Disposable.None;
          }
          t3 && (e3 = e3.bind(t3));
          const i3 = new L(e3);
          let s3;
          if (void 0 !== this._leakWarningThreshold && this._size >= Math.ceil(0.2 * this._leakWarningThreshold)) {
            const e4 = this._getLeakageMonitor();
            e4 && (i3.stack = m.create(), s3 = e4.check(i3.stack, this._size + 1));
          }
          this._listeners ? this._listeners instanceof L ? (this._deliveryQueue ??= new E(), this._listeners = [this._listeners, i3]) : this._listeners.push(i3) : (this._options?.onWillAddFirstListener?.(this), this._listeners = i3, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
          const a2 = (0, o.toDisposable)(() => {
            s3?.(), this._removeListener(i3);
          });
          return n3 instanceof o.DisposableStore ? n3.add(a2) : Array.isArray(n3) && n3.push(a2), a2;
        }, this._event;
      }
      _removeListener(e3) {
        if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
        if (1 === this._size) return this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), void (this._size = 0);
        const t3 = this._listeners, n3 = t3.indexOf(e3);
        if (-1 === n3) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
        this._size--, t3[n3] = void 0;
        const i3 = this._deliveryQueue.current === this;
        if (2 * this._size <= t3.length) {
          let e4 = 0;
          for (let n4 = 0; n4 < t3.length; n4++) t3[n4] ? t3[e4++] = t3[n4] : i3 && e4 < this._deliveryQueue.end && (this._deliveryQueue.end--, e4 < this._deliveryQueue.i && this._deliveryQueue.i--);
          t3.length = e4;
        }
      }
      _deliver(e3, t3) {
        if (!e3) return;
        const n3 = this._options?.onListenerError || r2.onUnexpectedError;
        if (n3) try {
          e3.value(t3);
        } catch (e4) {
          n3(e4);
        }
        else e3.value(t3);
      }
      _deliverQueue(e3) {
        const t3 = e3.current._listeners;
        for (; e3.i < e3.end; ) this._deliver(t3[e3.i++], e3.value);
        e3.reset();
      }
      fire(e3) {
        if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof L) this._deliver(this._listeners, e3);
        else {
          const t3 = this._deliveryQueue;
          t3.enqueue(this, e3, this._listeners.length), this._deliverQueue(t3);
        }
        else ;
        this._perfMon?.stop();
      }
      hasListeners() {
        return this._size > 0;
      }
    }
    t2.Emitter = v;
    t2.createEventDeliveryQueue = () => new E();
    class E {
      constructor() {
        this.i = -1, this.end = 0;
      }
      enqueue(e3, t3, n3) {
        this.i = 0, this.end = n3, this.current = e3, this.value = t3;
      }
      reset() {
        this.i = this.end, this.current = void 0, this.value = void 0;
      }
    }
    t2.AsyncEmitter = class extends v {
      async fireAsync(e3, t3, n3) {
        if (this._listeners) for (this._asyncDeliveryQueue || (this._asyncDeliveryQueue = new a.LinkedList()), _(this._listeners, (t4) => this._asyncDeliveryQueue.push([t4.value, e3])); this._asyncDeliveryQueue.size > 0 && !t3.isCancellationRequested; ) {
          const [e4, i3] = this._asyncDeliveryQueue.shift(), s3 = [], o2 = { ...i3, token: t3, waitUntil: (t4) => {
            if (Object.isFrozen(s3)) throw new Error("waitUntil can NOT be called asynchronous");
            n3 && (t4 = n3(t4, e4)), s3.push(t4);
          } };
          try {
            e4(o2);
          } catch (e5) {
            (0, r2.onUnexpectedError)(e5);
            continue;
          }
          Object.freeze(s3), await Promise.allSettled(s3).then((e5) => {
            for (const t4 of e5) "rejected" === t4.status && (0, r2.onUnexpectedError)(t4.reason);
          });
        }
      }
    };
    class w extends v {
      get isPaused() {
        return 0 !== this._isPaused;
      }
      constructor(e3) {
        super(e3), this._isPaused = 0, this._eventQueue = new a.LinkedList(), this._mergeFn = e3?.merge;
      }
      pause() {
        this._isPaused++;
      }
      resume() {
        if (0 !== this._isPaused && 0 === --this._isPaused) if (this._mergeFn) {
          if (this._eventQueue.size > 0) {
            const e3 = Array.from(this._eventQueue);
            this._eventQueue.clear(), super.fire(this._mergeFn(e3));
          }
        } else for (; !this._isPaused && 0 !== this._eventQueue.size; ) super.fire(this._eventQueue.shift());
      }
      fire(e3) {
        this._size && (0 !== this._isPaused ? this._eventQueue.push(e3) : super.fire(e3));
      }
    }
    t2.PauseableEmitter = w;
    t2.DebounceEmitter = class extends w {
      constructor(e3) {
        super(e3), this._delay = e3.delay ?? 100;
      }
      fire(e3) {
        this._handle || (this.pause(), this._handle = setTimeout(() => {
          this._handle = void 0, this.resume();
        }, this._delay)), super.fire(e3);
      }
    };
    t2.MicrotaskEmitter = class extends v {
      constructor(e3) {
        super(e3), this._queuedEvents = [], this._mergeFn = e3?.merge;
      }
      fire(e3) {
        this.hasListeners() && (this._queuedEvents.push(e3), 1 === this._queuedEvents.length && queueMicrotask(() => {
          this._mergeFn ? super.fire(this._mergeFn(this._queuedEvents)) : this._queuedEvents.forEach((e4) => super.fire(e4)), this._queuedEvents = [];
        }));
      }
    };
    class y {
      constructor(e3) {
        this.event = e3, this._listener = new o.MutableDisposable();
      }
      hook(e3, t3) {
        this._listener.value = this.event(e3, t3);
      }
      unhook() {
        this._listener.clear();
      }
      disposeListener() {
        this._listener.dispose();
      }
    }
    class N {
      constructor() {
        this.hasListeners = false, this.sources = [], this.emitter = new v({ onWillAddFirstListener: () => this.onFirstListenerAdd(), onDidRemoveLastListener: () => this.onLastListenerRemove() });
      }
      get event() {
        return this.emitter.event;
      }
      add(e3) {
        const t3 = new y(e3);
        this.sources.push(t3), this.hasListeners && t3.hook(this.emitter.fire, this.emitter);
        return (0, o.toDisposable)((0, s2.createSingleCallFunction)(() => {
          t3.disposeListener();
          const e4 = this.sources.indexOf(t3);
          -1 !== e4 && this.sources.splice(e4, 1);
        }));
      }
      onFirstListenerAdd() {
        this.hasListeners = true, this.sources.forEach((e3) => e3.hook(this.emitter.fire, this.emitter));
      }
      onLastListenerRemove() {
        this.hasListeners = false, this.sources.forEach((e3) => e3.unhook());
      }
      dispose() {
        this.emitter.dispose();
        for (const e3 of this.sources) e3.disposeListener();
        this.sources.length = 0;
      }
    }
    t2.EventMultiplexer = N;
    t2.DynamicListEventMultiplexer = class {
      constructor(e3, t3, n3, i3) {
        this._store = new o.DisposableStore();
        const r3 = this._store.add(new N()), s3 = this._store.add(new o.DisposableMap());
        function a2(e4) {
          s3.set(e4, r3.add(i3(e4)));
        }
        for (const t4 of e3) a2(t4);
        this._store.add(t3((e4) => {
          a2(e4);
        })), this._store.add(n3((e4) => {
          s3.deleteAndDispose(e4);
        })), this.event = r3.event;
      }
      dispose() {
        this._store.dispose();
      }
    };
    t2.EventBufferer = class {
      constructor() {
        this.data = [];
      }
      wrapEvent(e3, t3, n3) {
        return (i3, r3, s3) => e3((e4) => {
          const s4 = this.data[this.data.length - 1];
          if (!t3) return void (s4 ? s4.buffers.push(() => i3.call(r3, e4)) : i3.call(r3, e4));
          const o2 = s4;
          o2 ? (o2.items ??= [], o2.items.push(e4), 0 === o2.buffers.length && s4.buffers.push(() => {
            o2.reducedResult ??= n3 ? o2.items.reduce(t3, n3) : o2.items.reduce(t3), i3.call(r3, o2.reducedResult);
          })) : i3.call(r3, t3(n3, e4));
        }, void 0, s3);
      }
      bufferEvents(e3) {
        const t3 = { buffers: new Array() };
        this.data.push(t3);
        const n3 = e3();
        return this.data.pop(), t3.buffers.forEach((e4) => e4()), n3;
      }
    };
    t2.Relay = class {
      constructor() {
        this.listening = false, this.inputEvent = l.None, this.emitter = new v({ onDidAddFirstListener: () => {
          this.listening = true, this.inputEventListener?.dispose(), this.inputEventListener = new o.MutableDisposable(), this.inputEventListener.value = this.inputEvent(this.emitter.fire, this.emitter);
        }, onDidRemoveLastListener: () => {
          this.listening = false, this.inputEventListener?.dispose(), this.inputEventListener = void 0;
        } }), this.event = this.emitter.event;
      }
      set input(e3) {
        this.inputEvent = e3, this.listening && (this.inputEventListener ??= new o.MutableDisposable(), this.inputEventListener.value = e3(this.emitter.fire, this.emitter));
      }
      dispose() {
        this.inputEventListener?.dispose(), this.inputEventListener = void 0, this.inputEvent = l.None, this.emitter.dispose();
      }
    };
    t2.ValueWithChangeEvent = class {
      static const(e3) {
        return new R(e3);
      }
      constructor(e3) {
        this._value = e3, this._onDidChange = new v(), this.onDidChange = this._onDidChange.event;
      }
      get value() {
        return this._value;
      }
      set value(e3) {
        e3 !== this._value && (this._value = e3, this._onDidChange.fire(void 0));
      }
    };
    class R {
      constructor(e3) {
        this.value = e3, this.onDidChange = l.None;
      }
    }
  }, 8: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.computeLinesDiff = async function(e3) {
      const t3 = i2.linesDiffComputers.getDefault().computeDiff(e3.original, e3.modified, { ignoreTrimWhitespace: e3.ignoreTrimWhitespace, computeMoves: false, maxComputationTimeMs: e3.maxComputationTimeMs, shouldGracefullyFallBackOnTimeout: true, skipDiffRefinement: e3.skipDiffRefinement });
      return { changes: t3.changes.map((e4) => ({ originalRange: { startLineNumberOneIndexed: e4.original.startLineNumber, endLineNumberExclusiveOneIndexed: e4.original.endLineNumberExclusive }, modifiedRange: { startLineNumberOneIndexed: e4.modified.startLineNumber, endLineNumberExclusiveOneIndexed: e4.modified.endLineNumberExclusive } })), timedOut: t3.hitTimeout };
    };
    const i2 = n2(233);
  }, 46: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createSingleCallFunction = function(e3, t3) {
      const n2 = this;
      let i2, r2 = false;
      return function() {
        if (r2) return i2;
        if (r2 = true, t3) try {
          i2 = e3.apply(n2, arguments);
        } finally {
          t3();
        }
        else i2 = e3.apply(n2, arguments);
        return i2;
      };
    };
  }, 62: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.LinesSliceCharSequence = void 0;
    const i2 = n2(270), r2 = n2(991), s2 = n2(584), o = n2(298), a = n2(891);
    function u(e3) {
      return e3 >= 97 && e3 <= 122 || e3 >= 65 && e3 <= 90 || e3 >= 48 && e3 <= 57;
    }
    function l(e3) {
      return e3 >= 65 && e3 <= 90;
    }
    t2.LinesSliceCharSequence = class {
      constructor(e3, t3, n3) {
        this.lines = e3, this.range = t3, this.considerWhitespaceChanges = n3, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
        for (let t4 = this.range.startLineNumber; t4 <= this.range.endLineNumber; t4++) {
          let i3 = e3[t4 - 1], r3 = 0;
          t4 === this.range.startLineNumber && this.range.startColumn > 1 && (r3 = this.range.startColumn - 1, i3 = i3.substring(r3)), this.lineStartOffsets.push(r3);
          let s3 = 0;
          if (!n3) {
            const e4 = i3.trimStart();
            s3 = i3.length - e4.length, i3 = e4.trimEnd();
          }
          this.trimmedWsLengthsByLineIdx.push(s3);
          const o2 = t4 === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - r3 - s3, i3.length) : i3.length;
          for (let e4 = 0; e4 < o2; e4++) this.elements.push(i3.charCodeAt(e4));
          t4 < this.range.endLineNumber && (this.elements.push("\n".charCodeAt(0)), this.firstElementOffsetByLineIdx.push(this.elements.length));
        }
      }
      toString() {
        return `Slice: "${this.text}"`;
      }
      get text() {
        return this.getText(new r2.OffsetRange(0, this.length));
      }
      getText(e3) {
        return this.elements.slice(e3.start, e3.endExclusive).map((e4) => String.fromCharCode(e4)).join("");
      }
      getElement(e3) {
        return this.elements[e3];
      }
      get length() {
        return this.elements.length;
      }
      getBoundaryScore(e3) {
        const t3 = f(e3 > 0 ? this.elements[e3 - 1] : -1), n3 = f(e3 < this.elements.length ? this.elements[e3] : -1);
        if (7 === t3 && 8 === n3) return 0;
        if (8 === t3) return 150;
        let i3 = 0;
        return t3 !== n3 && (i3 += 10, 0 === t3 && 1 === n3 && (i3 += 1)), i3 += c(t3), i3 += c(n3), i3;
      }
      translateOffset(e3, t3 = "right") {
        const n3 = (0, i2.findLastIdxMonotonous)(this.firstElementOffsetByLineIdx, (t4) => t4 <= e3), r3 = e3 - this.firstElementOffsetByLineIdx[n3];
        return new s2.Position(this.range.startLineNumber + n3, 1 + this.lineStartOffsets[n3] + r3 + (0 === r3 && "left" === t3 ? 0 : this.trimmedWsLengthsByLineIdx[n3]));
      }
      translateRange(e3) {
        const t3 = this.translateOffset(e3.start, "right"), n3 = this.translateOffset(e3.endExclusive, "left");
        return n3.isBefore(t3) ? o.Range.fromPositions(n3, n3) : o.Range.fromPositions(t3, n3);
      }
      findWordContaining(e3) {
        if (e3 < 0 || e3 >= this.elements.length) return;
        if (!u(this.elements[e3])) return;
        let t3 = e3;
        for (; t3 > 0 && u(this.elements[t3 - 1]); ) t3--;
        let n3 = e3;
        for (; n3 < this.elements.length && u(this.elements[n3]); ) n3++;
        return new r2.OffsetRange(t3, n3);
      }
      findSubWordContaining(e3) {
        if (e3 < 0 || e3 >= this.elements.length) return;
        if (!u(this.elements[e3])) return;
        let t3 = e3;
        for (; t3 > 0 && u(this.elements[t3 - 1]) && !l(this.elements[t3]); ) t3--;
        let n3 = e3;
        for (; n3 < this.elements.length && u(this.elements[n3]) && !l(this.elements[n3]); ) n3++;
        return new r2.OffsetRange(t3, n3);
      }
      countLinesIn(e3) {
        return this.translateOffset(e3.endExclusive).lineNumber - this.translateOffset(e3.start).lineNumber;
      }
      isStronglyEqual(e3, t3) {
        return this.elements[e3] === this.elements[t3];
      }
      extendToFullLines(e3) {
        const t3 = (0, i2.findLastMonotonous)(this.firstElementOffsetByLineIdx, (t4) => t4 <= e3.start) ?? 0, n3 = (0, i2.findFirstMonotonous)(this.firstElementOffsetByLineIdx, (t4) => e3.endExclusive <= t4) ?? this.elements.length;
        return new r2.OffsetRange(t3, n3);
      }
    };
    const h = { 0: 0, 1: 0, 2: 0, 3: 10, 4: 2, 5: 30, 6: 3, 7: 10, 8: 10 };
    function c(e3) {
      return h[e3];
    }
    function f(e3) {
      return 10 === e3 ? 8 : 13 === e3 ? 7 : (0, a.isSpace)(e3) ? 6 : e3 >= 97 && e3 <= 122 ? 0 : e3 >= 65 && e3 <= 90 ? 1 : e3 >= 48 && e3 <= 57 ? 2 : -1 === e3 ? 3 : 44 === e3 || 59 === e3 ? 5 : 4;
    }
  }, 68: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.CancellationTokenSource = t2.CancellationToken = void 0, t2.cancellationTokenSourceFromAbortSignal = function(e3) {
      const t3 = new a();
      let n3;
      e3 && (e3.aborted ? t3.cancel() : (n3 = () => t3.cancel(), e3.addEventListener("abort", n3, { once: true })));
      const i3 = () => {
        e3 && n3 && e3.removeEventListener("abort", n3), t3.dispose();
      };
      return { get token() {
        return t3.token;
      }, dispose: i3, [Symbol.dispose]: i3 };
    }, t2.cancelOnDispose = function(e3) {
      const t3 = new a();
      return e3.add({ dispose() {
        t3.cancel();
      } }), t3.token;
    };
    const i2 = n2(3), r2 = Object.freeze(function(e3, t3) {
      const n3 = setTimeout(e3.bind(t3), 0);
      return { dispose() {
        clearTimeout(n3);
      } };
    });
    var s2;
    !(function(e3) {
      e3.isCancellationToken = function(t3) {
        return t3 === e3.None || t3 === e3.Cancelled || (t3 instanceof o || !(!t3 || "object" != typeof t3) && ("boolean" == typeof t3.isCancellationRequested && "function" == typeof t3.onCancellationRequested));
      }, e3.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: i2.Event.None }), e3.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: r2 });
    })(s2 || (t2.CancellationToken = s2 = {}));
    class o {
      constructor() {
        this._isCancelled = false, this._emitter = null;
      }
      cancel() {
        this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        return this._isCancelled ? r2 : (this._emitter || (this._emitter = new i2.Emitter()), this._emitter.event);
      }
      dispose() {
        this._emitter && (this._emitter.dispose(), this._emitter = null);
      }
    }
    class a {
      constructor(e3) {
        this._token = void 0, this._parentListener = void 0, this._parentListener = e3 && e3.onCancellationRequested(this.cancel, this);
      }
      get token() {
        return this._token || (this._token = new o()), this._token;
      }
      cancel() {
        this._token ? this._token instanceof o && this._token.cancel() : this._token = s2.Cancelled;
      }
      dispose(e3 = false) {
        e3 && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof o && this._token.dispose() : this._token = s2.None;
      }
    }
    t2.CancellationTokenSource = a;
  }, 90: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.RangeMapping = t2.DetailedLineRangeMapping = t2.LineRangeMapping = void 0, t2.lineRangeMappingFromRangeMappings = function(e3, t3, n3, s3 = false) {
      const o2 = [];
      for (const r3 of (0, i2.groupAdjacentBy)(e3.map((e4) => m(e4, t3, n3)), (e4, t4) => e4.original.overlapOrTouch(t4.original) || e4.modified.overlapOrTouch(t4.modified))) {
        const e4 = r3[0], t4 = r3[r3.length - 1];
        o2.push(new d(e4.original.join(t4.original), e4.modified.join(t4.modified), r3.map((e5) => e5.innerChanges[0])));
      }
      return (0, r2.assertFn)(() => {
        if (!s3 && o2.length > 0) {
          if (o2[0].modified.startLineNumber !== o2[0].original.startLineNumber) return false;
          if (n3.length.lineCount - o2[o2.length - 1].modified.endLineNumberExclusive !== t3.length.lineCount - o2[o2.length - 1].original.endLineNumberExclusive) return false;
        }
        return (0, r2.checkAdjacentItems)(o2, (e4, t4) => t4.original.startLineNumber - e4.original.endLineNumberExclusive === t4.modified.startLineNumber - e4.modified.endLineNumberExclusive && e4.original.endLineNumberExclusive < t4.original.startLineNumber && e4.modified.endLineNumberExclusive < t4.modified.startLineNumber);
      }), o2;
    }, t2.getLineRangeMapping = m;
    const i2 = n2(501), r2 = n2(141), s2 = n2(976), o = n2(496), a = n2(584), u = n2(298), l = n2(768);
    class h {
      static inverse(e3, t3, n3) {
        const i3 = [];
        let r3 = 1, s3 = 1;
        for (const t4 of e3) {
          const e4 = new h(new o.LineRange(r3, t4.original.startLineNumber), new o.LineRange(s3, t4.modified.startLineNumber));
          e4.modified.isEmpty || i3.push(e4), r3 = t4.original.endLineNumberExclusive, s3 = t4.modified.endLineNumberExclusive;
        }
        const a2 = new h(new o.LineRange(r3, t3 + 1), new o.LineRange(s3, n3 + 1));
        return a2.modified.isEmpty || i3.push(a2), i3;
      }
      static clip(e3, t3, n3) {
        const i3 = [];
        for (const r3 of e3) {
          const e4 = r3.original.intersect(t3), s3 = r3.modified.intersect(n3);
          e4 && !e4.isEmpty && s3 && !s3.isEmpty && i3.push(new h(e4, s3));
        }
        return i3;
      }
      constructor(e3, t3) {
        this.original = e3, this.modified = t3;
      }
      toString() {
        return `{${this.original.toString()}->${this.modified.toString()}}`;
      }
      flip() {
        return new h(this.modified, this.original);
      }
      join(e3) {
        return new h(this.original.join(e3.original), this.modified.join(e3.modified));
      }
      get changedLineCount() {
        return Math.max(this.original.length, this.modified.length);
      }
      toRangeMapping() {
        const e3 = this.original.toInclusiveRange(), t3 = this.modified.toInclusiveRange();
        if (e3 && t3) return new g(e3, t3);
        if (1 === this.original.startLineNumber || 1 === this.modified.startLineNumber) {
          if (1 !== this.modified.startLineNumber || 1 !== this.original.startLineNumber) throw new s2.BugIndicatingError("not a valid diff");
          return new g(new u.Range(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new u.Range(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        }
        return new g(new u.Range(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), new u.Range(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER));
      }
      toRangeMapping2(e3, t3) {
        if (f(this.original.endLineNumberExclusive, e3) && f(this.modified.endLineNumberExclusive, t3)) return new g(new u.Range(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new u.Range(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        if (!this.original.isEmpty && !this.modified.isEmpty) return new g(u.Range.fromPositions(new a.Position(this.original.startLineNumber, 1), c(new a.Position(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), e3)), u.Range.fromPositions(new a.Position(this.modified.startLineNumber, 1), c(new a.Position(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t3)));
        if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1) return new g(u.Range.fromPositions(c(new a.Position(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), e3), c(new a.Position(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), e3)), u.Range.fromPositions(c(new a.Position(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t3), c(new a.Position(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t3)));
        throw new s2.BugIndicatingError();
      }
    }
    function c(e3, t3) {
      if (e3.lineNumber < 1) return new a.Position(1, 1);
      if (e3.lineNumber > t3.length) return new a.Position(t3.length, t3[t3.length - 1].length + 1);
      const n3 = t3[e3.lineNumber - 1];
      return e3.column > n3.length + 1 ? new a.Position(e3.lineNumber, n3.length + 1) : e3;
    }
    function f(e3, t3) {
      return e3 >= 1 && e3 <= t3.length;
    }
    t2.LineRangeMapping = h;
    class d extends h {
      static fromRangeMappings(e3) {
        const t3 = o.LineRange.join(e3.map((e4) => o.LineRange.fromRangeInclusive(e4.originalRange))), n3 = o.LineRange.join(e3.map((e4) => o.LineRange.fromRangeInclusive(e4.modifiedRange)));
        return new d(t3, n3, e3);
      }
      constructor(e3, t3, n3) {
        super(e3, t3), this.innerChanges = n3;
      }
      flip() {
        return new d(this.modified, this.original, this.innerChanges?.map((e3) => e3.flip()));
      }
      withInnerChangesFromLineRanges() {
        return new d(this.original, this.modified, [this.toRangeMapping()]);
      }
    }
    t2.DetailedLineRangeMapping = d;
    class g {
      static fromEdit(e3) {
        const t3 = e3.getNewRanges();
        return e3.edits.map((e4, n3) => new g(e4.range, t3[n3]));
      }
      static fromEditJoin(e3) {
        const t3 = e3.getNewRanges(), n3 = e3.edits.map((e4, n4) => new g(e4.range, t3[n4]));
        return g.join(n3);
      }
      static join(e3) {
        if (0 === e3.length) throw new s2.BugIndicatingError("Cannot join an empty list of range mappings");
        let t3 = e3[0];
        for (let n3 = 1; n3 < e3.length; n3++) t3 = t3.join(e3[n3]);
        return t3;
      }
      static assertSorted(e3) {
        for (let t3 = 1; t3 < e3.length; t3++) {
          const n3 = e3[t3 - 1], i3 = e3[t3];
          if (!n3.originalRange.getEndPosition().isBeforeOrEqual(i3.originalRange.getStartPosition()) || !n3.modifiedRange.getEndPosition().isBeforeOrEqual(i3.modifiedRange.getStartPosition())) throw new s2.BugIndicatingError("Range mappings must be sorted");
        }
      }
      constructor(e3, t3) {
        this.originalRange = e3, this.modifiedRange = t3;
      }
      toString() {
        return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
      }
      flip() {
        return new g(this.modifiedRange, this.originalRange);
      }
      toTextEdit(e3) {
        const t3 = e3.getValueOfRange(this.modifiedRange);
        return new l.SingleTextEdit(this.originalRange, t3);
      }
      join(e3) {
        return new g(this.originalRange.plusRange(e3.originalRange), this.modifiedRange.plusRange(e3.modifiedRange));
      }
    }
    function m(e3, t3, n3) {
      let i3 = 0, r3 = 0;
      1 === e3.modifiedRange.endColumn && 1 === e3.originalRange.endColumn && e3.originalRange.startLineNumber + i3 <= e3.originalRange.endLineNumber && e3.modifiedRange.startLineNumber + i3 <= e3.modifiedRange.endLineNumber && (r3 = -1), e3.modifiedRange.startColumn - 1 >= n3.getLineLength(e3.modifiedRange.startLineNumber) && e3.originalRange.startColumn - 1 >= t3.getLineLength(e3.originalRange.startLineNumber) && e3.originalRange.startLineNumber <= e3.originalRange.endLineNumber + r3 && e3.modifiedRange.startLineNumber <= e3.modifiedRange.endLineNumber + r3 && (i3 = 1);
      const s3 = new o.LineRange(e3.originalRange.startLineNumber + i3, e3.originalRange.endLineNumber + 1 + r3), a2 = new o.LineRange(e3.modifiedRange.startLineNumber + i3, e3.modifiedRange.endLineNumber + 1 + r3);
      return new d(s3, a2, [e3]);
    }
    t2.RangeMapping = g;
  }, 118: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.LinkedList = void 0;
    class n2 {
      static {
        this.Undefined = new n2(void 0);
      }
      constructor(e3) {
        this.element = e3, this.next = n2.Undefined, this.prev = n2.Undefined;
      }
    }
    class i2 {
      constructor() {
        this._first = n2.Undefined, this._last = n2.Undefined, this._size = 0;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._first;
      }
      isEmpty() {
        return this._first === n2.Undefined;
      }
      clear() {
        let e3 = this._first;
        for (; e3 !== n2.Undefined; ) {
          const t3 = e3.next;
          e3.prev = n2.Undefined, e3.next = n2.Undefined, e3 = t3;
        }
        this._first = n2.Undefined, this._last = n2.Undefined, this._size = 0;
      }
      unshift(e3) {
        return this._insert(e3, false);
      }
      push(e3) {
        return this._insert(e3, true);
      }
      _insert(e3, t3) {
        const i3 = new n2(e3);
        if (this._first === n2.Undefined) this._first = i3, this._last = i3;
        else if (t3) {
          const e4 = this._last;
          this._last = i3, i3.prev = e4, e4.next = i3;
        } else {
          const e4 = this._first;
          this._first = i3, i3.next = e4, e4.prev = i3;
        }
        this._size += 1;
        let r2 = false;
        return () => {
          r2 || (r2 = true, this._remove(i3));
        };
      }
      shift() {
        if (this._first !== n2.Undefined) {
          const e3 = this._first.element;
          return this._remove(this._first), e3;
        }
      }
      pop() {
        if (this._last !== n2.Undefined) {
          const e3 = this._last.element;
          return this._remove(this._last), e3;
        }
      }
      remove(e3) {
        this._remove(e3);
      }
      _remove(e3) {
        if (e3.prev !== n2.Undefined && e3.next !== n2.Undefined) {
          const t3 = e3.prev;
          t3.next = e3.next, e3.next.prev = t3;
        } else e3.prev === n2.Undefined && e3.next === n2.Undefined ? (this._first = n2.Undefined, this._last = n2.Undefined) : e3.next === n2.Undefined ? (this._last = this._last.prev, this._last.next = n2.Undefined) : e3.prev === n2.Undefined && (this._first = this._first.next, this._first.prev = n2.Undefined);
        this._size -= 1;
      }
      *[Symbol.iterator]() {
        let e3 = this._first;
        for (; e3 !== n2.Undefined; ) yield e3.element, e3 = e3.next;
      }
    }
    t2.LinkedList = i2;
  }, 138: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.PositionOffsetTransformer = void 0;
    const i2 = n2(270), r2 = n2(991), s2 = n2(584), o = n2(298), a = n2(588);
    t2.PositionOffsetTransformer = class {
      constructor(e3) {
        this.text = e3, this.lineStartOffsetByLineIdx = [], this.lineEndOffsetByLineIdx = [], this.lineStartOffsetByLineIdx.push(0);
        for (let t3 = 0; t3 < e3.length; t3++) "\n" === e3.charAt(t3) && (this.lineStartOffsetByLineIdx.push(t3 + 1), t3 > 0 && "\r" === e3.charAt(t3 - 1) ? this.lineEndOffsetByLineIdx.push(t3 - 1) : this.lineEndOffsetByLineIdx.push(t3));
        this.lineEndOffsetByLineIdx.push(e3.length);
      }
      getOffset(e3) {
        const t3 = this._validatePosition(e3);
        return this.lineStartOffsetByLineIdx[t3.lineNumber - 1] + t3.column - 1;
      }
      _validatePosition(e3) {
        if (e3.lineNumber < 1) return new s2.Position(1, 1);
        const t3 = this.textLength.lineCount + 1;
        if (e3.lineNumber > t3) {
          const e4 = this.getLineLength(t3);
          return new s2.Position(t3, e4 + 1);
        }
        if (e3.column < 1) return new s2.Position(e3.lineNumber, 1);
        const n3 = this.getLineLength(e3.lineNumber);
        return e3.column - 1 > n3 ? new s2.Position(e3.lineNumber, n3 + 1) : e3;
      }
      getOffsetRange(e3) {
        return new r2.OffsetRange(this.getOffset(e3.getStartPosition()), this.getOffset(e3.getEndPosition()));
      }
      getPosition(e3) {
        const t3 = (0, i2.findLastIdxMonotonous)(this.lineStartOffsetByLineIdx, (t4) => t4 <= e3), n3 = t3 + 1, r3 = e3 - this.lineStartOffsetByLineIdx[t3] + 1;
        return new s2.Position(n3, r3);
      }
      getRange(e3) {
        return o.Range.fromPositions(this.getPosition(e3.start), this.getPosition(e3.endExclusive));
      }
      getTextLength(e3) {
        return a.TextLength.ofRange(this.getRange(e3));
      }
      get textLength() {
        const e3 = this.lineStartOffsetByLineIdx.length - 1;
        return new a.TextLength(e3, this.text.length - this.lineStartOffsetByLineIdx[e3]);
      }
      getLineLength(e3) {
        return this.lineEndOffsetByLineIdx[e3 - 1] - this.lineStartOffsetByLineIdx[e3 - 1];
      }
    };
  }, 141: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ok = function(e3, t3) {
      if (!e3) throw new Error(t3 ? `Assertion failed (${t3})` : "Assertion Failed");
    }, t2.assertNever = function(e3, t3 = "Unreachable") {
      throw new Error(t3);
    }, t2.assert = function(e3, t3 = "unexpected state") {
      if (!e3) {
        throw "string" == typeof t3 ? new i2.BugIndicatingError(`Assertion Failed: ${t3}`) : t3;
      }
    }, t2.softAssert = function(e3, t3 = "Soft Assertion Failed") {
      e3 || (0, i2.onUnexpectedError)(new i2.BugIndicatingError(t3));
    }, t2.assertFn = function(e3) {
      e3() || (e3(), (0, i2.onUnexpectedError)(new i2.BugIndicatingError("Assertion Failed")));
    }, t2.checkAdjacentItems = function(e3, t3) {
      let n3 = 0;
      for (; n3 < e3.length - 1; ) {
        if (!t3(e3[n3], e3[n3 + 1])) return false;
        n3++;
      }
      return true;
    };
    const i2 = n2(976);
  }, 147: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.DisposableMap = t2.ImmortalReference = t2.AsyncReferenceCollection = t2.ReferenceCollection = t2.RefCountedDisposable = t2.MandatoryMutableDisposable = t2.MutableDisposable = t2.Disposable = t2.TransferableDisposable = t2.DisposableStore = t2.DisposableTracker = t2.GCBasedDisposableTracker = t2.setShouldReportLeaks = t2.setShouldPrintLeaks = void 0, t2.reportLifecycleMisuse = d, t2.reportLeakedDisposable = b, t2.setDisposableTracker = v, t2.trackDisposable = E, t2.markAsDisposed = w, t2.markAsSingleton = function(e3) {
      return L?.markAsSingleton(e3), e3;
    }, t2.isDisposable = N, t2.dispose = R, t2.disposeAll = function(...e3) {
      R(e3);
    }, t2.disposeIfDisposable = function(e3) {
      for (const t3 of e3) N(t3) && t3.dispose();
      return [];
    }, t2.combinedDisposable = function(...e3) {
      const t3 = C(() => R(e3));
      return (function(e4, t4) {
        if (!L) return;
        for (const n3 of e4) L.setParent(n3, t4);
      })(e3, t3), t3;
    }, t2.toDisposable = C, t2.thenIfNotDisposed = function(e3, t3) {
      let n3 = false;
      return e3.then((e4) => {
        n3 || t3(e4);
      }), C(() => {
        n3 = true;
      });
    }, t2.thenRegisterOrDispose = function(e3, t3) {
      return e3.then((e4) => (t3.isDisposed ? e4.dispose() : t3.add(e4), e4));
    };
    const i2 = n2(501), r2 = n2(846), s2 = n2(281), o = n2(46), a = n2(837);
    let u, l = false;
    t2.setShouldPrintLeaks = (e3) => {
      l = e3;
    };
    const h = () => l;
    t2.setShouldReportLeaks = (e3) => {
      u = e3;
    };
    const c = /* @__PURE__ */ new Set(), f = 50;
    function d(e3, t3) {
      if (L?.onLifecycleMisuse?.(e3, t3), !u) return;
      const n3 = `${t3}\0${e3.stack ?? ""}`;
      c.has(n3) || c.size >= f || (c.add(n3), u(e3, t3));
    }
    function g(e3) {
      d(e3, "disposable_post_dispose_set");
    }
    const m = /* @__PURE__ */ new Set(), p = 50;
    function b(e3) {
      if (globalThis.Object !== Object) return;
      if (h() && console.warn(`[LEAKED DISPOSABLE] ${e3}`), !u || m.has(e3) || m.size >= p) return;
      m.add(e3);
      const t3 = e3.split("\n").slice(1).find((e4) => !e4.match(/common\/(lifecycle|event)/)), n3 = new Error(`[LEAKED DISPOSABLE] ${t3}`);
      n3.stack = e3, u(n3, "disposable_leak");
    }
    let L = null;
    t2.GCBasedDisposableTracker = class {
      constructor() {
        this._registry = new FinalizationRegistry(b);
      }
      trackDisposable(e3) {
        const t3 = Error, n3 = t3.stackTraceLimit;
        t3.stackTraceLimit = 16;
        const i3 = new Error("CREATED via:").stack;
        t3.stackTraceLimit = n3, this._registry.register(e3, i3, e3);
      }
      setParent(e3, t3) {
        t3 ? this._registry.unregister(e3) : this.trackDisposable(e3);
      }
      markAsDisposed(e3) {
        this._registry.unregister(e3);
      }
      markAsSingleton(e3) {
        this._registry.unregister(e3);
      }
    };
    class _ {
      constructor() {
        this.livingDisposables = /* @__PURE__ */ new Map();
      }
      static {
        this.idx = 0;
      }
      getDisposableData(e3) {
        let t3 = this.livingDisposables.get(e3);
        return t3 || (t3 = { parent: null, source: null, isSingleton: false, value: e3, idx: _.idx++ }, this.livingDisposables.set(e3, t3)), t3;
      }
      trackDisposable(e3) {
        const t3 = this.getDisposableData(e3);
        t3.source || (t3.source = new Error().stack);
      }
      setParent(e3, t3) {
        this.getDisposableData(e3).parent = t3;
      }
      markAsDisposed(e3) {
        this.livingDisposables.delete(e3);
      }
      markAsSingleton(e3) {
        this.getDisposableData(e3).isSingleton = true;
      }
      getRootParent(e3, t3) {
        const n3 = t3.get(e3);
        if (n3) return n3;
        const i3 = e3.parent ? this.getRootParent(this.getDisposableData(e3.parent), t3) : e3;
        return t3.set(e3, i3), i3;
      }
      getTrackedDisposables() {
        const e3 = /* @__PURE__ */ new Map();
        return [...this.livingDisposables.entries()].filter(([, t3]) => null !== t3.source && !this.getRootParent(t3, e3).isSingleton).flatMap(([e4]) => e4);
      }
      computeLeakingDisposables(e3 = 10, t3) {
        let n3;
        if (t3) n3 = t3;
        else {
          const e4 = /* @__PURE__ */ new Map(), t4 = [...this.livingDisposables.values()].filter((t5) => null !== t5.source && !this.getRootParent(t5, e4).isSingleton);
          if (0 === t4.length) return;
          const i3 = new Set(t4.map((e5) => e5.value));
          if (n3 = t4.filter((e5) => !(e5.parent && i3.has(e5.parent))), 0 === n3.length) throw new Error("There are cyclic diposable chains!");
        }
        if (!n3) return;
        function o2(e4) {
          const t4 = e4.source.split("\n").map((e5) => e5.trim().replace("at ", "")).filter((e5) => "" !== e5);
          return (function(e5, t5) {
            for (; e5.length > 0 && t5.some((t6) => "string" == typeof t6 ? t6 === e5[0] : e5[0].match(t6)); ) e5.shift();
          })(t4, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), t4.reverse();
        }
        const a2 = new s2.SetMap();
        for (const e4 of n3) {
          const t4 = o2(e4);
          for (let n4 = 0; n4 <= t4.length; n4++) a2.add(t4.slice(0, n4).join("\n"), e4);
        }
        n3.sort((0, i2.compareBy)((e4) => e4.idx, i2.numberComparator));
        let u2 = "", l2 = 0;
        for (const t4 of n3.slice(0, e3)) {
          l2++;
          const e4 = o2(t4), i3 = [];
          for (let t5 = 0; t5 < e4.length; t5++) {
            let s3 = e4[t5];
            s3 = `(shared with ${a2.get(e4.slice(0, t5 + 1).join("\n")).size}/${n3.length} leaks) at ${s3}`;
            const u3 = a2.get(e4.slice(0, t5).join("\n")), l3 = (0, r2.groupBy)([...u3].map((e5) => o2(e5)[t5]), (e5) => e5);
            delete l3[e4[t5]];
            for (const [e5, t6] of Object.entries(l3)) i3.unshift(`    - stacktraces of ${t6.length} other leaks continue with ${e5}`);
            i3.unshift(s3);
          }
          u2 += `


==================== Leaking disposable ${l2}/${n3.length}: ${t4.value.constructor.name} ====================
${i3.join("\n")}
============================================================

`;
        }
        return n3.length > e3 && (u2 += `


... and ${n3.length - e3} more leaking disposables

`), { leaks: n3, details: u2 };
      }
    }
    function v(e3) {
      L = e3;
    }
    function E(e3) {
      return L?.trackDisposable(e3), e3;
    }
    function w(e3) {
      L?.markAsDisposed(e3);
    }
    function y(e3, t3) {
      L?.setParent(e3, t3);
    }
    function N(e3) {
      return "object" == typeof e3 && null !== e3 && "function" == typeof e3.dispose && 0 === e3.dispose.length;
    }
    function R(e3) {
      if (a.Iterable.is(e3)) {
        let t3;
        for (const n3 of e3) if (n3) try {
          n3.dispose();
        } catch (e4) {
          (t3 ??= []).push(e4);
        }
        if (void 0 !== t3) {
          if (1 === t3.length) throw t3[0];
          throw new AggregateError(t3, "Encountered errors while disposing of store");
        }
        return Array.isArray(e3) ? [] : e3;
      }
      if (e3) return e3.dispose(), e3;
    }
    function C(e3) {
      const t3 = E({ dispose: (0, o.createSingleCallFunction)(() => {
        w(t3), e3();
      }) });
      return t3;
    }
    t2.DisposableTracker = _;
    class x {
      static {
        this.DISABLE_DISPOSED_WARNING = false;
      }
      constructor() {
        this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = false, E(this);
      }
      dispose() {
        this._isDisposed || (w(this), this._isDisposed = true, this.clear());
      }
      [Symbol.dispose]() {
        this.dispose();
      }
      get isDisposed() {
        return this._isDisposed;
      }
      has(e3) {
        return this._toDispose.has(e3);
      }
      get size() {
        return this._toDispose.size;
      }
      clear() {
        if (0 !== this._toDispose.size) try {
          R(this._toDispose);
        } finally {
          this._toDispose.clear();
        }
      }
      add(e3) {
        if (!e3) return e3;
        if (e3 === this) throw new Error("Cannot register a disposable on itself!");
        if (y(e3, this), this._isDisposed) {
          const e4 = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
          x.DISABLE_DISPOSED_WARNING || console.warn(e4.stack), g(e4);
        } else this._toDispose.add(e3);
        return e3;
      }
      delete(e3) {
        if (e3) {
          if (e3 === this) throw new Error("Cannot dispose a disposable on itself!");
          this._toDispose.delete(e3), e3.dispose();
        }
      }
      deleteAndLeak(e3) {
        e3 && this._toDispose.has(e3) && (this._toDispose.delete(e3), y(e3, null));
      }
      transferOut(e3) {
        if (this._isDisposed) {
          const e4 = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
          x.DISABLE_DISPOSED_WARNING || console.warn(e4.stack), d(e4, "disposable_use_after_dispose");
        }
        return this.deleteAndLeak(e3), e3;
      }
    }
    t2.DisposableStore = x;
    class S {
      constructor(e3) {
        this._isDisposed = false, this._value = e3, E(this), y(e3, this);
      }
      get value() {
        if (void 0 === this._value) {
          const e3 = new Error(this._isDisposed ? "TransferableDisposable: the held value has been disposed" : "TransferableDisposable: the held value was already transferred out");
          throw x.DISABLE_DISPOSED_WARNING || console.warn(e3.stack), d(e3, this._isDisposed ? "disposable_use_after_dispose" : "disposable_use_after_transfer"), e3;
        }
        return this._value;
      }
      get rawValue() {
        return this._value;
      }
      transferOut() {
        const e3 = this.value;
        return this._value = void 0, y(e3, null), e3;
      }
      dispose() {
        this._isDisposed || (this._isDisposed = true, w(this), this._value?.dispose(), this._value = void 0);
      }
      [Symbol.dispose]() {
        this.dispose();
      }
    }
    t2.TransferableDisposable = S;
    class D {
      static {
        this.None = Object.freeze({ dispose() {
        } });
      }
      constructor() {
        this._store = new x(), E(this), y(this._store, this);
      }
      dispose() {
        w(this), this._store.dispose();
      }
      _register(e3) {
        if (e3 === this) throw new Error("Cannot register a disposable on itself!");
        return this._store.add(e3);
      }
    }
    t2.Disposable = D;
    class A {
      constructor() {
        this._isDisposed = false, E(this);
      }
      get value() {
        return this._isDisposed ? void 0 : this._value;
      }
      set value(e3) {
        if (this._isDisposed) {
          if (e3) {
            const t3 = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
            x.DISABLE_DISPOSED_WARNING || console.warn(t3.stack), g(t3), e3.dispose();
          }
        } else e3 !== this._value && (this._value?.dispose(), e3 && y(e3, this), this._value = e3);
      }
      clear() {
        this.value = void 0;
      }
      dispose() {
        this._isDisposed = true, w(this), this._value?.dispose(), this._value = void 0;
      }
      clearAndLeak() {
        const e3 = this._value;
        return this._value = void 0, e3 && y(e3, null), e3;
      }
    }
    t2.MutableDisposable = A;
    t2.MandatoryMutableDisposable = class {
      constructor(e3) {
        this._disposable = new A(), this._isDisposed = false, this._disposable.value = e3;
      }
      get value() {
        return this._disposable.value;
      }
      set value(e3) {
        (this._isDisposed || e3 !== this._disposable.value) && (this._disposable.value = e3);
      }
      dispose() {
        this._isDisposed = true, this._disposable.dispose();
      }
    };
    t2.RefCountedDisposable = class {
      constructor(e3) {
        this._disposable = e3, this._counter = 1;
      }
      acquire() {
        return this._counter++, this;
      }
      release() {
        return 0 === --this._counter && this._disposable.dispose(), this;
      }
    };
    t2.ReferenceCollection = class {
      constructor() {
        this.references = /* @__PURE__ */ new Map();
      }
      acquire(e3, ...t3) {
        let n3 = this.references.get(e3);
        n3 || (n3 = { counter: 0, object: this.createReferencedObject(e3, ...t3) }, this.references.set(e3, n3));
        const { object: i3 } = n3, r3 = (0, o.createSingleCallFunction)(() => {
          0 === --n3.counter && (this.destroyReferencedObject(e3, n3.object), this.references.delete(e3));
        });
        return n3.counter++, { object: i3, dispose: r3, [Symbol.dispose]: r3 };
      }
    };
    t2.AsyncReferenceCollection = class {
      constructor(e3) {
        this.referenceCollection = e3;
      }
      async acquire(e3, ...t3) {
        const n3 = this.referenceCollection.acquire(e3, ...t3);
        try {
          const e4 = await n3.object, t4 = () => n3.dispose();
          return { object: e4, dispose: t4, [Symbol.dispose]: t4 };
        } catch (e4) {
          throw n3.dispose(), e4;
        }
      }
    };
    class M {
      constructor(e3) {
        this.object = e3;
      }
      dispose() {
      }
      [Symbol.dispose]() {
      }
    }
    t2.ImmortalReference = M;
    class O {
      constructor(e3 = /* @__PURE__ */ new Map()) {
        this._isDisposed = false, this._store = e3, E(this);
      }
      dispose() {
        w(this), this._isDisposed = true, this.clearAndDisposeAll();
      }
      clearAndDisposeAll() {
        if (this._store.size) try {
          R(this._store.values());
        } finally {
          this._store.clear();
        }
      }
      has(e3) {
        return this._store.has(e3);
      }
      get size() {
        return this._store.size;
      }
      get(e3) {
        return this._store.get(e3);
      }
      set(e3, t3, n3 = false) {
        if (this._isDisposed) {
          const e4 = new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!");
          return console.warn(e4.stack), void g(e4);
        }
        n3 || this._store.get(e3)?.dispose(), this._store.set(e3, t3);
      }
      deleteAndDispose(e3) {
        this._store.get(e3)?.dispose(), this._store.delete(e3);
      }
      deleteAndLeak(e3) {
        const t3 = this._store.get(e3);
        return this._store.delete(e3), t3;
      }
      keys() {
        return this._store.keys();
      }
      values() {
        return this._store.values();
      }
      [Symbol.iterator]() {
        return this._store[Symbol.iterator]();
      }
    }
    t2.DisposableMap = O;
  }, 166: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isString = r2, t2.isStringArray = function(e3) {
      return Array.isArray(e3) && e3.every((e4) => r2(e4));
    }, t2.isObject = s2, t2.isTypedArray = function(e3) {
      const t3 = Object.getPrototypeOf(Uint8Array);
      return "object" == typeof e3 && e3 instanceof t3;
    }, t2.isNumber = function(e3) {
      return "number" == typeof e3 && !isNaN(e3);
    }, t2.isIterable = function(e3) {
      return !!e3 && "function" == typeof e3[Symbol.iterator];
    }, t2.isBoolean = function(e3) {
      return true === e3 || false === e3;
    }, t2.isUndefined = o, t2.isDefined = function(e3) {
      return !a(e3);
    }, t2.isUndefinedOrNull = a, t2.assertType = function(e3, t3) {
      if (!e3) throw new Error(t3 ? `Unexpected type, expected '${t3}'` : "Unexpected type");
    }, t2.assertIsDefined = function(e3) {
      return (0, i2.assert)(null != e3, "Argument is `undefined` or `null`."), e3;
    }, t2.assertDefined = function(e3, t3) {
      if (null == e3) {
        throw "string" == typeof t3 ? new Error(t3) : t3;
      }
    }, t2.assertAllDefined = function(...e3) {
      const t3 = [];
      for (let n3 = 0; n3 < e3.length; n3++) {
        const i3 = e3[n3];
        if (a(i3)) throw new Error(`Assertion Failed: argument at index ${n3} is undefined or null`);
        t3.push(i3);
      }
      return t3;
    }, t2.assertOneOf = function(e3, t3, n3) {
      (0, i2.assert)(t3.includes(e3), `${n3}: Expected '${e3}' to be one of [${t3.join(", ")}].`);
    }, t2.typeCheck = function(e3) {
    }, t2.isEmptyObject = function(e3) {
      if (!s2(e3)) return false;
      for (const t3 in e3) if (u.call(e3, t3)) return false;
      return true;
    }, t2.isFunction = l, t2.areFunctions = function(...e3) {
      return e3.length > 0 && e3.every(l);
    }, t2.validateConstraints = function(e3, t3) {
      const n3 = Math.min(e3.length, t3.length);
      for (let i3 = 0; i3 < n3; i3++) h(e3[i3], t3[i3]);
    }, t2.validateConstraint = h, t2.upcast = function(e3) {
      return e3;
    };
    const i2 = n2(141);
    function r2(e3) {
      return "string" == typeof e3;
    }
    function s2(e3) {
      return !("object" != typeof e3 || null === e3 || Array.isArray(e3) || e3 instanceof RegExp || e3 instanceof Date);
    }
    function o(e3) {
      return void 0 === e3;
    }
    function a(e3) {
      return o(e3) || null === e3;
    }
    const u = Object.prototype.hasOwnProperty;
    function l(e3) {
      return "function" == typeof e3;
    }
    function h(e3, t3) {
      if (r2(t3)) {
        if (typeof e3 !== t3) throw new Error(`argument does not match constraint: typeof ${t3}`);
      } else if (l(t3)) {
        try {
          if (e3 instanceof t3) return;
        } catch {
        }
        if (!a(e3) && e3.constructor === t3) return;
        if (1 === t3.length && true === t3.call(void 0, e3)) return;
        throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true");
      }
    }
  }, 175: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.MyersDiffAlgorithm = void 0;
    const i2 = n2(991), r2 = n2(933);
    t2.MyersDiffAlgorithm = class {
      compute(e3, t3, n3 = r2.InfiniteTimeout.instance) {
        if (0 === e3.length || 0 === t3.length) return r2.DiffAlgorithmResult.trivial(e3, t3);
        const u = e3, l = t3;
        function h(e4, t4) {
          for (; e4 < u.length && t4 < l.length && u.getElement(e4) === l.getElement(t4); ) e4++, t4++;
          return e4;
        }
        let c = 0;
        const f = new o();
        f.set(0, h(0, 0));
        const d = new a();
        d.set(0, 0 === f.get(0) ? null : new s2(null, 0, 0, f.get(0)));
        let g = 0;
        e: for (; ; ) {
          if (c++, !n3.isValid()) return r2.DiffAlgorithmResult.trivialTimedOut(u, l);
          const e4 = -Math.min(c, l.length + c % 2), t4 = Math.min(c, u.length + c % 2);
          for (g = e4; g <= t4; g += 2) {
            if (!n3.isValid()) return r2.DiffAlgorithmResult.trivialTimedOut(u, l);
            let i3 = 0;
            const o2 = g === t4 ? -1 : f.get(g + 1), a2 = g === e4 ? -1 : f.get(g - 1) + 1;
            i3++;
            const c2 = Math.min(Math.max(o2, a2), u.length), m2 = c2 - g;
            if (i3++, c2 > u.length || m2 > l.length) continue;
            const p2 = h(c2, m2);
            f.set(g, p2);
            const b2 = c2 === o2 ? d.get(g + 1) : d.get(g - 1);
            if (d.set(g, p2 !== c2 ? new s2(b2, c2, m2, p2 - c2) : b2), f.get(g) === u.length && f.get(g) - g === l.length) break e;
          }
        }
        let m = d.get(g);
        const p = [];
        let b = u.length, L = l.length;
        for (; ; ) {
          const e4 = m ? m.x + m.length : 0, t4 = m ? m.y + m.length : 0;
          if (e4 === b && t4 === L || p.push(new r2.SequenceDiff(new i2.OffsetRange(e4, b), new i2.OffsetRange(t4, L))), !m) break;
          b = m.x, L = m.y, m = m.prev;
        }
        return p.reverse(), new r2.DiffAlgorithmResult(p, false);
      }
    };
    class s2 {
      constructor(e3, t3, n3, i3) {
        this.prev = e3, this.x = t3, this.y = n3, this.length = i3;
      }
    }
    class o {
      constructor() {
        this.positiveArr = new Int32Array(10), this.negativeArr = new Int32Array(10);
      }
      get(e3) {
        return e3 < 0 ? (e3 = -e3 - 1, this.negativeArr[e3]) : this.positiveArr[e3];
      }
      set(e3, t3) {
        if (e3 < 0) {
          if ((e3 = -e3 - 1) >= this.negativeArr.length) {
            const e4 = this.negativeArr;
            this.negativeArr = new Int32Array(2 * e4.length), this.negativeArr.set(e4);
          }
          this.negativeArr[e3] = t3;
        } else {
          if (e3 >= this.positiveArr.length) {
            const e4 = this.positiveArr;
            this.positiveArr = new Int32Array(2 * e4.length), this.positiveArr.set(e4);
          }
          this.positiveArr[e3] = t3;
        }
      }
    }
    class a {
      constructor() {
        this.positiveArr = [], this.negativeArr = [];
      }
      get(e3) {
        return e3 < 0 ? (e3 = -e3 - 1, this.negativeArr[e3]) : this.positiveArr[e3];
      }
      set(e3, t3) {
        e3 < 0 ? (e3 = -e3 - 1, this.negativeArr[e3] = t3) : this.positiveArr[e3] = t3;
      }
    }
  }, 187: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.LineSequence = void 0;
    function n2(e3) {
      let t3 = 0;
      for (; t3 < e3.length && (32 === e3.charCodeAt(t3) || 9 === e3.charCodeAt(t3)); ) t3++;
      return t3;
    }
    t2.LineSequence = class {
      constructor(e3, t3) {
        this.trimmedHash = e3, this.lines = t3;
      }
      getElement(e3) {
        return this.trimmedHash[e3];
      }
      get length() {
        return this.trimmedHash.length;
      }
      getBoundaryScore(e3) {
        return 1e3 - ((0 === e3 ? 0 : n2(this.lines[e3 - 1])) + (e3 === this.lines.length ? 0 : n2(this.lines[e3])));
      }
      getText(e3) {
        return this.lines.slice(e3.start, e3.endExclusive).join("\n");
      }
      isStronglyEqual(e3, t3) {
        return this.lines[e3] === this.lines[t3];
      }
    };
  }, 233: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.linesDiffComputers = void 0;
    const i2 = n2(751), r2 = n2(490);
    t2.linesDiffComputers = { getLegacy: () => new i2.LegacyLinesDiffComputer(), getDefault: () => new r2.DefaultLinesDiffComputer() };
  }, 247: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isReadable = function(e3) {
      const t3 = e3;
      if (!t3) return false;
      return "function" == typeof t3.read;
    }, t2.isReadableStream = s2, t2.isReadableBufferedStream = function(e3) {
      const t3 = e3;
      if (!t3) return false;
      return s2(t3.stream) && Array.isArray(t3.buffer) && "boolean" == typeof t3.ended;
    }, t2.newWriteableStream = o, t2.consumeReadable = function(e3, t3) {
      const n3 = [];
      let i3;
      for (; null !== (i3 = e3.read()); ) n3.push(i3);
      return t3(n3);
    }, t2.peekReadable = function(e3, t3, n3) {
      const i3 = [];
      let r3;
      for (; null !== (r3 = e3.read()) && i3.length < n3; ) i3.push(r3);
      if (null === r3 && i3.length > 0) return t3(i3);
      return { read: () => {
        if (i3.length > 0) return i3.shift();
        if (void 0 !== r3) {
          const e4 = r3;
          return r3 = void 0, e4;
        }
        return e3.read();
      } };
    }, t2.consumeStream = function(e3, t3) {
      return new Promise((n3, i3) => {
        const r3 = [];
        u(e3, { onData: (e4) => {
          t3 && r3.push(e4);
        }, onError: (e4) => {
          t3 ? i3(e4) : n3(void 0);
        }, onEnd: () => {
          n3(t3 ? t3(r3) : void 0);
        } });
      });
    }, t2.listenStream = u, t2.peekStream = function(e3, t3) {
      return new Promise((n3, i3) => {
        const s3 = new r2.DisposableStore(), o2 = [], a2 = (i4) => {
          if (o2.push(i4), o2.length > t3) return s3.dispose(), e3.pause(), n3({ stream: e3, buffer: o2, ended: false });
        }, u2 = (e4) => (s3.dispose(), i3(e4)), l = () => (s3.dispose(), n3({ stream: e3, buffer: o2, ended: true }));
        s3.add((0, r2.toDisposable)(() => e3.removeListener("error", u2))), e3.on("error", u2), s3.add((0, r2.toDisposable)(() => e3.removeListener("end", l))), e3.on("end", l), s3.add((0, r2.toDisposable)(() => e3.removeListener("data", a2))), e3.on("data", a2);
      });
    }, t2.toStream = function(e3, t3) {
      const n3 = o(t3);
      return n3.end(e3), n3;
    }, t2.emptyStream = function() {
      const e3 = o(() => {
        throw new Error("not supported");
      });
      return e3.end(), e3;
    }, t2.toReadable = function(e3) {
      let t3 = false;
      return { read: () => t3 ? null : (t3 = true, e3) };
    }, t2.transform = function(e3, t3, n3) {
      const i3 = o(n3);
      return u(e3, { onData: (e4) => i3.write(t3.data(e4)), onError: (e4) => i3.error(t3.error ? t3.error(e4) : e4), onEnd: () => i3.end() }), i3;
    }, t2.prefixedReadable = function(e3, t3, n3) {
      let i3 = false;
      return { read: () => {
        const r3 = t3.read();
        return i3 ? r3 : (i3 = true, null !== r3 ? n3([e3, r3]) : e3);
      } };
    }, t2.prefixedStream = function(e3, t3, n3) {
      let i3 = false;
      const r3 = o(n3);
      return u(t3, { onData: (t4) => i3 ? r3.write(t4) : (i3 = true, r3.write(n3([e3, t4]))), onError: (e4) => r3.error(e4), onEnd: () => {
        i3 || (i3 = true, r3.write(e3)), r3.end();
      } }), r3;
    };
    const i2 = n2(976), r2 = n2(147);
    function s2(e3) {
      const t3 = e3;
      return !!t3 && [t3.on, t3.pause, t3.resume, t3.destroy].every((e4) => "function" == typeof e4);
    }
    function o(e3, t3) {
      return new a(e3, t3);
    }
    class a {
      constructor(e3, t3) {
        this.reducer = e3, this.options = t3, this.state = { flowing: false, ended: false, destroyed: false }, this.buffer = { data: [], error: [] }, this.listeners = { data: [], error: [], end: [] }, this.pendingWritePromises = [];
      }
      pause() {
        this.state.destroyed || (this.state.flowing = false);
      }
      resume() {
        this.state.destroyed || this.state.flowing || (this.state.flowing = true, this.flowData(), this.flowErrors(), this.flowEnd());
      }
      write(e3) {
        if (!this.state.destroyed) {
          if (this.state.flowing) this.emitData(e3);
          else if (this.buffer.data.push(e3), "number" == typeof this.options?.highWaterMark && this.buffer.data.length > this.options.highWaterMark) return new Promise((e4) => this.pendingWritePromises.push(e4));
        }
      }
      error(e3) {
        this.state.destroyed || (this.state.flowing ? this.emitError(e3) : this.buffer.error.push(e3));
      }
      end(e3) {
        this.state.destroyed || (void 0 !== e3 && this.write(e3), this.state.flowing ? (this.emitEnd(), this.destroy()) : this.state.ended = true);
      }
      emitData(e3) {
        this.listeners.data.slice(0).forEach((t3) => t3(e3));
      }
      emitError(e3) {
        0 === this.listeners.error.length ? (0, i2.onUnexpectedError)(e3) : this.listeners.error.slice(0).forEach((t3) => t3(e3));
      }
      emitEnd() {
        this.listeners.end.slice(0).forEach((e3) => e3());
      }
      on(e3, t3) {
        if (!this.state.destroyed) switch (e3) {
          case "data":
            this.listeners.data.push(t3), this.resume();
            break;
          case "end":
            this.listeners.end.push(t3), this.state.flowing && this.flowEnd() && this.destroy();
            break;
          case "error":
            this.listeners.error.push(t3), this.state.flowing && this.flowErrors();
        }
      }
      removeListener(e3, t3) {
        if (this.state.destroyed) return;
        let n3;
        switch (e3) {
          case "data":
            n3 = this.listeners.data;
            break;
          case "end":
            n3 = this.listeners.end;
            break;
          case "error":
            n3 = this.listeners.error;
        }
        if (n3) {
          const e4 = n3.indexOf(t3);
          e4 >= 0 && n3.splice(e4, 1);
        }
      }
      flowData() {
        if (0 === this.buffer.data.length) return;
        if ("function" == typeof this.reducer) {
          const e4 = 1 === this.buffer.data.length ? this.buffer.data[0] : this.reducer(this.buffer.data);
          this.emitData(e4);
        } else for (const e4 of this.buffer.data) this.emitData(e4);
        this.buffer.data.length = 0;
        const e3 = [...this.pendingWritePromises];
        this.pendingWritePromises.length = 0, e3.forEach((e4) => e4());
      }
      flowErrors() {
        if (this.listeners.error.length > 0) {
          for (const e3 of this.buffer.error) this.emitError(e3);
          this.buffer.error.length = 0;
        }
      }
      flowEnd() {
        return !!this.state.ended && (this.emitEnd(), this.listeners.end.length > 0);
      }
      destroy() {
        this.state.destroyed || (this.state.destroyed = true, this.state.ended = true, this.buffer.data.length = 0, this.buffer.error.length = 0, this.listeners.data.length = 0, this.listeners.error.length = 0, this.listeners.end.length = 0, this.pendingWritePromises.length = 0);
      }
    }
    function u(e3, t3, n3) {
      e3.on("error", (e4) => {
        n3?.isCancellationRequested || t3.onError(e4);
      }), e3.on("end", () => {
        n3?.isCancellationRequested || t3.onEnd();
      }), e3.on("data", (e4) => {
        n3?.isCancellationRequested || t3.onData(e4);
      });
    }
  }, 252: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.StopWatch = void 0;
    const n2 = globalThis.performance && "function" == typeof globalThis.performance.now;
    class i2 {
      static create(e3) {
        return new i2(e3);
      }
      constructor(e3) {
        this._now = n2 && false === e3 ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
      }
      stop() {
        this._stopTime = this._now();
      }
      reset() {
        this._startTime = this._now(), this._stopTime = -1;
      }
      elapsed() {
        return -1 !== this._stopTime ? this._stopTime - this._startTime : this._now() - this._startTime;
      }
    }
    t2.StopWatch = i2;
  }, 270: (e2, t2) => {
    function n2(e3, t3, n3 = e3.length - 1) {
      for (let i3 = n3; i3 >= 0; i3--) {
        if (t3(e3[i3])) return i3;
      }
      return -1;
    }
    function i2(e3, t3, n3 = 0, i3 = e3.length) {
      let r3 = n3, s3 = i3;
      for (; r3 < s3; ) {
        const n4 = Math.floor((r3 + s3) / 2);
        t3(e3[n4]) ? r3 = n4 + 1 : s3 = n4;
      }
      return r3 - 1;
    }
    function r2(e3, t3, n3 = 0, i3 = e3.length) {
      let r3 = n3, s3 = i3;
      for (; r3 < s3; ) {
        const n4 = Math.floor((r3 + s3) / 2);
        t3(e3[n4]) ? s3 = n4 : r3 = n4 + 1;
      }
      return r3;
    }
    Object.defineProperty(t2, "__esModule", { value: true }), t2.MonotonousArray = void 0, t2.findLast = function(e3, t3, i3 = e3.length - 1) {
      const r3 = n2(e3, t3, i3);
      if (-1 === r3) return;
      return e3[r3];
    }, t2.findLastIdx = n2, t2.findLastMonotonous = function(e3, t3) {
      const n3 = i2(e3, t3);
      return -1 === n3 ? void 0 : e3[n3];
    }, t2.findLastIdxMonotonous = i2, t2.findFirstMonotonous = function(e3, t3) {
      const n3 = r2(e3, t3);
      return n3 === e3.length ? void 0 : e3[n3];
    }, t2.findFirstIdxMonotonousOrArrLen = r2, t2.findFirstMax = o, t2.findLastMax = function(e3, t3) {
      if (0 === e3.length) return;
      let n3 = e3[0];
      for (let i3 = 1; i3 < e3.length; i3++) {
        const r3 = e3[i3];
        t3(r3, n3) >= 0 && (n3 = r3);
      }
      return n3;
    }, t2.findFirstMin = function(e3, t3) {
      return o(e3, (e4, n3) => -t3(e4, n3));
    }, t2.findMaxIdx = function(e3, t3) {
      if (0 === e3.length) return -1;
      let n3 = 0;
      for (let i3 = 1; i3 < e3.length; i3++) {
        t3(e3[i3], e3[n3]) > 0 && (n3 = i3);
      }
      return n3;
    }, t2.mapFindFirst = function(e3, t3) {
      for (const n3 of e3) {
        const e4 = t3(n3);
        if (void 0 !== e4) return e4;
      }
      return;
    };
    class s2 {
      static {
        this.assertInvariants = false;
      }
      constructor(e3) {
        this._array = e3, this._findLastMonotonousLastIdx = 0;
      }
      findLastMonotonous(e3) {
        if (s2.assertInvariants) {
          if (this._prevFindLastPredicate) {
            for (const t4 of this._array) if (this._prevFindLastPredicate(t4) && !e3(t4)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
          }
          this._prevFindLastPredicate = e3;
        }
        const t3 = i2(this._array, e3, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = t3 + 1, -1 === t3 ? void 0 : this._array[t3];
      }
    }
    function o(e3, t3) {
      if (0 === e3.length) return;
      let n3 = e3[0];
      for (let i3 = 1; i3 < e3.length; i3++) {
        const r3 = e3[i3];
        t3(r3, n3) > 0 && (n3 = r3);
      }
      return n3;
    }
    t2.MonotonousArray = s2;
  }, 281: (e2, t2) => {
    var n2, i2, r2;
    Object.defineProperty(t2, "__esModule", { value: true }), t2.NKeyMap = t2.SetMap = t2.BidirectionalMap = t2.CounterSet = t2.MRUCache = t2.LRUCache = t2.LinkedMap = t2.ResourceSet = t2.ResourceMap = void 0, t2.getOrSet = function(e3, t3, n3) {
      let i3 = e3.get(t3);
      void 0 === i3 && (i3 = n3, e3.set(t3, i3));
      return i3;
    }, t2.mapToString = function(e3) {
      const t3 = [];
      return e3.forEach((e4, n3) => {
        t3.push(`${n3} => ${e4}`);
      }), `Map(${e3.size}) {${t3.join(", ")}}`;
    }, t2.setToString = function(e3) {
      const t3 = [];
      return e3.forEach((e4) => {
        t3.push(e4);
      }), `Set(${e3.size}) {${t3.join(", ")}}`;
    }, t2.mapsStrictEqualIgnoreOrder = function(e3, t3) {
      if (e3 === t3) return true;
      if (e3.size !== t3.size) return false;
      for (const [n3, i3] of e3) if (!t3.has(n3) || t3.get(n3) !== i3) return false;
      for (const [n3] of t3) if (!e3.has(n3)) return false;
      return true;
    };
    class s2 {
      constructor(e3, t3) {
        this.uri = e3, this.value = t3;
      }
    }
    class o {
      static {
        this.defaultToKey = (e3) => e3.toString();
      }
      constructor(e3, t3) {
        if (this[n2] = "ResourceMap", e3 instanceof o) this.map = new Map(e3.map), this.toKey = t3 ?? o.defaultToKey;
        else if ((function(e4) {
          return Array.isArray(e4);
        })(e3)) {
          this.map = /* @__PURE__ */ new Map(), this.toKey = t3 ?? o.defaultToKey;
          for (const [t4, n3] of e3) this.set(t4, n3);
        } else this.map = /* @__PURE__ */ new Map(), this.toKey = e3 ?? o.defaultToKey;
      }
      set(e3, t3) {
        return this.map.set(this.toKey(e3), new s2(e3, t3)), this;
      }
      get(e3) {
        return this.map.get(this.toKey(e3))?.value;
      }
      has(e3) {
        return this.map.has(this.toKey(e3));
      }
      get size() {
        return this.map.size;
      }
      clear() {
        this.map.clear();
      }
      delete(e3) {
        return this.map.delete(this.toKey(e3));
      }
      forEach(e3, t3) {
        void 0 !== t3 && (e3 = e3.bind(t3));
        for (const [t4, n3] of this.map) e3(n3.value, n3.uri, this);
      }
      *values() {
        for (const e3 of this.map.values()) yield e3.value;
      }
      *keys() {
        for (const e3 of this.map.values()) yield e3.uri;
      }
      *entries() {
        for (const e3 of this.map.values()) yield [e3.uri, e3.value];
      }
      *[(n2 = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, e3] of this.map) yield [e3.uri, e3.value];
      }
    }
    t2.ResourceMap = o;
    class a {
      constructor(e3, t3) {
        this[i2] = "ResourceSet", e3 && "function" != typeof e3 ? (this._map = new o(t3), e3.forEach(this.add, this)) : this._map = new o(e3);
      }
      get size() {
        return this._map.size;
      }
      add(e3) {
        return this._map.set(e3, e3), this;
      }
      clear() {
        this._map.clear();
      }
      delete(e3) {
        return this._map.delete(e3);
      }
      forEach(e3, t3) {
        this._map.forEach((n3, i3) => e3.call(t3, i3, i3, this));
      }
      has(e3) {
        return this._map.has(e3);
      }
      *entries() {
        for (const e3 of this._map.entries()) yield e3;
      }
      *keys() {
        yield* this._map.keys();
      }
      *values() {
        yield* this._map.keys();
      }
      [(i2 = Symbol.toStringTag, Symbol.iterator)]() {
        return this.keys();
      }
    }
    t2.ResourceSet = a;
    class u {
      constructor() {
        this[r2] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
      }
      clear() {
        this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      has(e3) {
        return this._map.has(e3);
      }
      get(e3, t3 = 0) {
        const n3 = this._map.get(e3);
        if (n3) return 0 !== t3 && this.touch(n3, t3), n3.value;
      }
      set(e3, t3, n3 = 0) {
        let i3 = this._map.get(e3);
        if (i3) i3.value = t3, 0 !== n3 && this.touch(i3, n3);
        else {
          switch (i3 = { key: e3, value: t3, next: void 0, previous: void 0 }, n3) {
            case 0:
            case 2:
            default:
              this.addItemLast(i3);
              break;
            case 1:
              this.addItemFirst(i3);
          }
          this._map.set(e3, i3), this._size++;
        }
        return this;
      }
      delete(e3) {
        return !!this.remove(e3);
      }
      remove(e3) {
        const t3 = this._map.get(e3);
        if (t3) return this._map.delete(e3), this.removeItem(t3), this._size--, t3.value;
      }
      shift() {
        if (!this._head && !this._tail) return;
        if (!this._head || !this._tail) throw new Error("Invalid list");
        const e3 = this._head;
        return this._map.delete(e3.key), this.removeItem(e3), this._size--, e3.value;
      }
      forEach(e3, t3) {
        const n3 = this._state;
        let i3 = this._head;
        for (; i3; ) {
          if (t3 ? e3.bind(t3)(i3.value, i3.key, this) : e3(i3.value, i3.key, this), this._state !== n3) throw new Error("LinkedMap got modified during iteration.");
          i3 = i3.next;
        }
      }
      keys() {
        return this.iterateLinked(this._state, this._head, (e3) => e3.key);
      }
      values() {
        return this.iterateLinked(this._state, this._head, (e3) => e3.value);
      }
      entries() {
        return this.iterateLinked(this._state, this._head, (e3) => [e3.key, e3.value]);
      }
      *iterateLinked(e3, t3, n3) {
        for (; ; ) {
          if (this._state !== e3) throw new Error("LinkedMap got modified during iteration.");
          if (!t3) return;
          const i3 = n3(t3);
          t3 = t3.next, yield i3;
        }
      }
      [(r2 = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
      }
      trimOld(e3) {
        if (e3 >= this.size) return;
        if (0 === e3) return void this.clear();
        let t3 = this._head, n3 = this.size;
        for (; t3 && n3 > e3; ) this._map.delete(t3.key), t3 = t3.next, n3--;
        this._head = t3, this._size = n3, t3 && (t3.previous = void 0), this._state++;
      }
      trimNew(e3) {
        if (e3 >= this.size) return;
        if (0 === e3) return void this.clear();
        let t3 = this._tail, n3 = this.size;
        for (; t3 && n3 > e3; ) this._map.delete(t3.key), t3 = t3.previous, n3--;
        this._tail = t3, this._size = n3, t3 && (t3.next = void 0), this._state++;
      }
      addItemFirst(e3) {
        if (this._head || this._tail) {
          if (!this._head) throw new Error("Invalid list");
          e3.next = this._head, this._head.previous = e3;
        } else this._tail = e3;
        this._head = e3, this._state++;
      }
      addItemLast(e3) {
        if (this._head || this._tail) {
          if (!this._tail) throw new Error("Invalid list");
          e3.previous = this._tail, this._tail.next = e3;
        } else this._head = e3;
        this._tail = e3, this._state++;
      }
      removeItem(e3) {
        if (e3 === this._head && e3 === this._tail) this._head = void 0, this._tail = void 0;
        else if (e3 === this._head) {
          if (!e3.next) throw new Error("Invalid list");
          e3.next.previous = void 0, this._head = e3.next;
        } else if (e3 === this._tail) {
          if (!e3.previous) throw new Error("Invalid list");
          e3.previous.next = void 0, this._tail = e3.previous;
        } else {
          const t3 = e3.next, n3 = e3.previous;
          if (!t3 || !n3) throw new Error("Invalid list");
          t3.previous = n3, n3.next = t3;
        }
        e3.next = void 0, e3.previous = void 0, this._state++;
      }
      touch(e3, t3) {
        if (!this._head || !this._tail) throw new Error("Invalid list");
        if (1 === t3 || 2 === t3) {
          if (1 === t3) {
            if (e3 === this._head) return;
            const t4 = e3.next, n3 = e3.previous;
            e3 === this._tail ? (n3.next = void 0, this._tail = n3) : (t4.previous = n3, n3.next = t4), e3.previous = void 0, e3.next = this._head, this._head.previous = e3, this._head = e3, this._state++;
          } else if (2 === t3) {
            if (e3 === this._tail) return;
            const t4 = e3.next, n3 = e3.previous;
            e3 === this._head ? (t4.previous = void 0, this._head = t4) : (t4.previous = n3, n3.next = t4), e3.next = void 0, e3.previous = this._tail, this._tail.next = e3, this._tail = e3, this._state++;
          }
        }
      }
      toJSON() {
        const e3 = [];
        return this.forEach((t3, n3) => {
          e3.push([n3, t3]);
        }), e3;
      }
      fromJSON(e3) {
        this.clear();
        for (const [t3, n3] of e3) this.set(t3, n3);
      }
    }
    t2.LinkedMap = u;
    class l extends u {
      constructor(e3, t3 = 1) {
        super(), this._limit = e3, this._ratio = Math.min(Math.max(0, t3), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(e3) {
        this._limit = e3, this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(e3) {
        this._ratio = Math.min(Math.max(0, e3), 1), this.checkTrim();
      }
      get(e3, t3 = 2) {
        return super.get(e3, t3);
      }
      peek(e3) {
        return super.get(e3, 0);
      }
      set(e3, t3) {
        return super.set(e3, t3, 2), this;
      }
      checkTrim() {
        this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
      }
    }
    t2.LRUCache = class extends l {
      constructor(e3, t3 = 1) {
        super(e3, t3);
      }
      trim(e3) {
        this.trimOld(e3);
      }
      set(e3, t3) {
        return super.set(e3, t3), this.checkTrim(), this;
      }
    };
    t2.MRUCache = class extends l {
      constructor(e3, t3 = 1) {
        super(e3, t3);
      }
      trim(e3) {
        this.trimNew(e3);
      }
      set(e3, t3) {
        return this._limit <= this.size && !this.has(e3) && this.trim(Math.round(this._limit * this._ratio) - 1), super.set(e3, t3), this;
      }
    };
    t2.CounterSet = class {
      constructor() {
        this.map = /* @__PURE__ */ new Map();
      }
      add(e3) {
        return this.map.set(e3, (this.map.get(e3) || 0) + 1), this;
      }
      delete(e3) {
        let t3 = this.map.get(e3) || 0;
        return 0 !== t3 && (t3--, 0 === t3 ? this.map.delete(e3) : this.map.set(e3, t3), true);
      }
      has(e3) {
        return this.map.has(e3);
      }
    };
    t2.BidirectionalMap = class {
      constructor(e3) {
        if (this._m1 = /* @__PURE__ */ new Map(), this._m2 = /* @__PURE__ */ new Map(), e3) for (const [t3, n3] of e3) this.set(t3, n3);
      }
      clear() {
        this._m1.clear(), this._m2.clear();
      }
      set(e3, t3) {
        this._m1.set(e3, t3), this._m2.set(t3, e3);
      }
      get(e3) {
        return this._m1.get(e3);
      }
      getKey(e3) {
        return this._m2.get(e3);
      }
      delete(e3) {
        const t3 = this._m1.get(e3);
        return void 0 !== t3 && (this._m1.delete(e3), this._m2.delete(t3), true);
      }
      forEach(e3, t3) {
        this._m1.forEach((n3, i3) => {
          e3.call(t3, n3, i3, this);
        });
      }
      keys() {
        return this._m1.keys();
      }
      values() {
        return this._m1.values();
      }
    };
    t2.SetMap = class {
      constructor() {
        this.map = /* @__PURE__ */ new Map();
      }
      add(e3, t3) {
        let n3 = this.map.get(e3);
        n3 || (n3 = /* @__PURE__ */ new Set(), this.map.set(e3, n3)), n3.add(t3);
      }
      delete(e3, t3) {
        const n3 = this.map.get(e3);
        n3 && (n3.delete(t3), 0 === n3.size && this.map.delete(e3));
      }
      forEach(e3, t3) {
        const n3 = this.map.get(e3);
        n3 && n3.forEach(t3);
      }
      get(e3) {
        const t3 = this.map.get(e3);
        return t3 || /* @__PURE__ */ new Set();
      }
    };
    t2.NKeyMap = class {
      constructor() {
        this._data = /* @__PURE__ */ new Map();
      }
      set(e3, ...t3) {
        let n3 = this._data;
        for (let e4 = 0; e4 < t3.length - 1; e4++) n3.has(t3[e4]) || n3.set(t3[e4], /* @__PURE__ */ new Map()), n3 = n3.get(t3[e4]);
        n3.set(t3[t3.length - 1], e3);
      }
      get(...e3) {
        let t3 = this._data;
        for (let n3 = 0; n3 < e3.length - 1; n3++) {
          if (!t3.has(e3[n3])) return;
          t3 = t3.get(e3[n3]);
        }
        return t3.get(e3[e3.length - 1]);
      }
      clear() {
        this._data.clear();
      }
      *values() {
        yield* (function* e3(t3) {
          for (const n3 of t3.values()) n3 instanceof Map ? yield* e3(n3) : yield n3;
        })(this._data);
      }
      toString() {
        const e3 = (t3, n3) => {
          let i3 = "";
          for (const [r3, s3] of t3) i3 += `${"  ".repeat(n3)}${r3}: `, s3 instanceof Map ? i3 += "\n" + e3(s3, n3 + 1) : i3 += `${s3}
`;
          return i3;
        };
        return e3(this._data, 0);
      }
    };
  }, 298: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Range = void 0;
    const i2 = n2(584);
    class r2 {
      constructor(e3, t3, n3, i3) {
        let r3, s2, o, a;
        null == e3 || "number" == typeof e3 || Number.isNaN(e3) ? (r3 = e3, s2 = t3, o = n3, a = i3) : "startLineNumber" in e3 && "startColumn" in e3 ? (r3 = e3.startLineNumber, s2 = e3.startColumn, o = e3.endLineNumber, a = e3.endColumn) : (r3 = e3.startLineNumber, s2 = 1, o = e3.endLineNumberExclusive, a = 1), r3 > o || r3 === o && s2 > a ? (this.startLineNumber = o, this.startColumn = a, this.endLineNumber = r3, this.endColumn = s2) : (this.startLineNumber = r3, this.startColumn = s2, this.endLineNumber = o, this.endColumn = a);
      }
      asIRange() {
        return { startLineNumber: this.startLineNumber, startColumn: this.startColumn, endLineNumber: this.endLineNumber, endColumn: this.endColumn };
      }
      isEmpty() {
        return r2.isEmpty(this);
      }
      static isEmpty(e3) {
        return e3.startLineNumber === e3.endLineNumber && e3.startColumn === e3.endColumn;
      }
      containsPosition(e3) {
        return r2.containsPosition(this, e3);
      }
      static containsPosition(e3, t3) {
        return !(t3.lineNumber < e3.startLineNumber || t3.lineNumber > e3.endLineNumber) && (!(t3.lineNumber === e3.startLineNumber && t3.column < e3.startColumn) && !(t3.lineNumber === e3.endLineNumber && t3.column > e3.endColumn));
      }
      static strictContainsPosition(e3, t3) {
        return !(t3.lineNumber < e3.startLineNumber || t3.lineNumber > e3.endLineNumber) && (!(t3.lineNumber === e3.startLineNumber && t3.column <= e3.startColumn) && !(t3.lineNumber === e3.endLineNumber && t3.column >= e3.endColumn));
      }
      containsRange(e3) {
        return r2.containsRange(this, e3);
      }
      static containsRange(e3, t3) {
        return !(t3.startLineNumber < e3.startLineNumber || t3.endLineNumber < e3.startLineNumber) && (!(t3.startLineNumber > e3.endLineNumber || t3.endLineNumber > e3.endLineNumber) && (!(t3.startLineNumber === e3.startLineNumber && t3.startColumn < e3.startColumn) && !(t3.endLineNumber === e3.endLineNumber && t3.endColumn > e3.endColumn)));
      }
      strictContainsRange(e3) {
        return r2.strictContainsRange(this, e3);
      }
      static strictContainsRange(e3, t3) {
        return !(t3.startLineNumber < e3.startLineNumber || t3.endLineNumber < e3.startLineNumber) && (!(t3.startLineNumber > e3.endLineNumber || t3.endLineNumber > e3.endLineNumber) && (!(t3.startLineNumber === e3.startLineNumber && t3.startColumn <= e3.startColumn) && !(t3.endLineNumber === e3.endLineNumber && t3.endColumn >= e3.endColumn)));
      }
      plusRange(e3) {
        return r2.plusRange(this, e3);
      }
      static getRangeAbove(e3, t3) {
        const n3 = Math.max(e3.startLineNumber - t3, 1), i3 = e3.startLineNumber;
        return new r2(n3, e3.startColumn, i3, e3.startColumn);
      }
      static getRangeOnBelow(e3, t3, n3) {
        const i3 = e3.endLineNumber, s2 = Math.min(e3.endLineNumber + t3, n3);
        return new r2(i3, e3.endColumn, s2, e3.endColumn);
      }
      static getExtendedRange(e3, t3, n3) {
        const i3 = Math.max(e3.startLineNumber - t3, 0), s2 = Math.min(e3.endLineNumber + t3, n3);
        return new r2(i3, e3.startColumn, s2, e3.endColumn);
      }
      static plusRange(e3, t3) {
        let n3, i3, s2, o;
        return t3.startLineNumber < e3.startLineNumber ? (n3 = t3.startLineNumber, i3 = t3.startColumn) : t3.startLineNumber === e3.startLineNumber ? (n3 = t3.startLineNumber, i3 = Math.min(t3.startColumn, e3.startColumn)) : (n3 = e3.startLineNumber, i3 = e3.startColumn), t3.endLineNumber > e3.endLineNumber ? (s2 = t3.endLineNumber, o = t3.endColumn) : t3.endLineNumber === e3.endLineNumber ? (s2 = t3.endLineNumber, o = Math.max(t3.endColumn, e3.endColumn)) : (s2 = e3.endLineNumber, o = e3.endColumn), new r2(n3, i3, s2, o);
      }
      intersectRanges(e3) {
        return r2.intersectRanges(this, e3);
      }
      static intersectRanges(e3, t3) {
        let n3 = e3.startLineNumber, i3 = e3.startColumn, s2 = e3.endLineNumber, o = e3.endColumn;
        const a = t3.startLineNumber, u = t3.startColumn, l = t3.endLineNumber, h = t3.endColumn;
        return n3 < a ? (n3 = a, i3 = u) : n3 === a && (i3 = Math.max(i3, u)), s2 > l ? (s2 = l, o = h) : s2 === l && (o = Math.min(o, h)), n3 > s2 || n3 === s2 && i3 > o ? null : new r2(n3, i3, s2, o);
      }
      static inverseEditRange(e3, t3) {
        return { startLineNumber: e3.startLineNumber, startColumn: e3.startColumn, endLineNumber: e3.startLineNumber + t3.split("\n").length - 1, endColumn: -1 === t3.lastIndexOf("\n") ? e3.startColumn + t3.length : t3.length - t3.lastIndexOf("\n") };
      }
      whereIs(e3) {
        return e3.endLineNumber < this.startLineNumber || e3.endLineNumber === this.startLineNumber && e3.endColumn <= this.startColumn ? "before" : e3.startLineNumber > this.endLineNumber || e3.startLineNumber === this.endLineNumber && e3.startColumn >= this.endColumn ? "after" : "overlapping";
      }
      static rangeAfterEdit(e3, t3) {
        const n3 = r2.lift(e3).whereIs(t3.range);
        switch (n3) {
          case "overlapping":
            throw new Error("Range is overlapping. The range after edit is ambiguous.");
          case "after":
            return e3;
          case "before": {
            const n4 = t3.text.split("\n").length - 1 - (t3.range.endLineNumber - t3.range.startLineNumber);
            if (t3.range.endLineNumber < e3.startLineNumber) return { startLineNumber: e3.startLineNumber + n4, startColumn: e3.startColumn, endLineNumber: e3.endLineNumber + n4, endColumn: e3.endColumn };
            {
              const i3 = (-1 === t3.text.lastIndexOf("\n") ? t3.text.length : t3.text.length - t3.text.lastIndexOf("\n") - 1) - (t3.range.startLineNumber === t3.range.endLineNumber ? t3.range.endColumn - t3.range.startColumn : t3.range.endColumn - 1);
              return { startLineNumber: e3.startLineNumber + n4, startColumn: e3.startColumn + i3, endLineNumber: e3.endLineNumber + n4, endColumn: e3.startLineNumber === e3.endLineNumber ? e3.endColumn + i3 : e3.endColumn };
            }
          }
          default:
            return e3;
        }
      }
      equalsRange(e3) {
        return r2.equalsRange(this, e3);
      }
      static equalsRange(e3, t3) {
        return !e3 && !t3 || !!e3 && !!t3 && e3.startLineNumber === t3.startLineNumber && e3.startColumn === t3.startColumn && e3.endLineNumber === t3.endLineNumber && e3.endColumn === t3.endColumn;
      }
      getEndPosition() {
        return r2.getEndPosition(this);
      }
      static getEndPosition(e3) {
        return new i2.Position(e3.endLineNumber, e3.endColumn);
      }
      getStartPosition() {
        return r2.getStartPosition(this);
      }
      static getStartPosition(e3) {
        return new i2.Position(e3.startLineNumber, e3.startColumn);
      }
      toString() {
        return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
      }
      setEndPosition(e3, t3) {
        return new r2(this.startLineNumber, this.startColumn, e3, t3);
      }
      setStartPosition(e3, t3) {
        return new r2(e3, t3, this.endLineNumber, this.endColumn);
      }
      collapseToStart() {
        return r2.collapseToStart(this);
      }
      static collapseToStart(e3) {
        return new r2(e3.startLineNumber, e3.startColumn, e3.startLineNumber, e3.startColumn);
      }
      collapseToEnd() {
        return r2.collapseToEnd(this);
      }
      static collapseToEnd(e3) {
        return new r2(e3.endLineNumber, e3.endColumn, e3.endLineNumber, e3.endColumn);
      }
      delta(e3) {
        return new r2(this.startLineNumber + e3, this.startColumn, this.endLineNumber + e3, this.endColumn);
      }
      isSingleLine() {
        return this.startLineNumber === this.endLineNumber;
      }
      static fromPositions(e3, t3 = e3) {
        return new r2(e3.lineNumber, e3.column, t3.lineNumber, t3.column);
      }
      static lift(e3) {
        return e3 ? new r2(e3.startLineNumber, e3.startColumn, e3.endLineNumber, e3.endColumn) : null;
      }
      static isIRange(e3) {
        return e3 && "number" == typeof e3.startLineNumber && "number" == typeof e3.startColumn && "number" == typeof e3.endLineNumber && "number" == typeof e3.endColumn;
      }
      static areIntersectingOrTouching(e3, t3) {
        return !(e3.endLineNumber < t3.startLineNumber || e3.endLineNumber === t3.startLineNumber && e3.endColumn < t3.startColumn) && !(t3.endLineNumber < e3.startLineNumber || t3.endLineNumber === e3.startLineNumber && t3.endColumn < e3.startColumn);
      }
      static areIntersecting(e3, t3) {
        return !(e3.endLineNumber < t3.startLineNumber || e3.endLineNumber === t3.startLineNumber && e3.endColumn <= t3.startColumn) && !(t3.endLineNumber < e3.startLineNumber || t3.endLineNumber === e3.startLineNumber && t3.endColumn <= e3.startColumn);
      }
      static areOnlyIntersecting(e3, t3) {
        return !(e3.endLineNumber < t3.startLineNumber - 1 || e3.endLineNumber === t3.startLineNumber && e3.endColumn < t3.startColumn - 1) && !(t3.endLineNumber < e3.startLineNumber - 1 || t3.endLineNumber === e3.startLineNumber && t3.endColumn < e3.startColumn - 1);
      }
      static compareRangesUsingStarts(e3, t3) {
        if (e3 && t3) {
          const n3 = 0 | e3.startLineNumber, i3 = 0 | t3.startLineNumber;
          if (n3 === i3) {
            const n4 = 0 | e3.startColumn, i4 = 0 | t3.startColumn;
            if (n4 === i4) {
              const n5 = 0 | e3.endLineNumber, i5 = 0 | t3.endLineNumber;
              if (n5 === i5) {
                return (0 | e3.endColumn) - (0 | t3.endColumn);
              }
              return n5 - i5;
            }
            return n4 - i4;
          }
          return n3 - i3;
        }
        return (e3 ? 1 : 0) - (t3 ? 1 : 0);
      }
      static compareRangesUsingEnds(e3, t3) {
        return e3.endLineNumber === t3.endLineNumber ? e3.endColumn === t3.endColumn ? e3.startLineNumber === t3.startLineNumber ? e3.startColumn - t3.startColumn : e3.startLineNumber - t3.startLineNumber : e3.endColumn - t3.endColumn : e3.endLineNumber - t3.endLineNumber;
      }
      static spansMultipleLines(e3) {
        return e3.endLineNumber > e3.startLineNumber;
      }
      toJSON() {
        return this;
      }
    }
    t2.Range = r2;
  }, 306: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.MovedText = t2.LinesDiff = void 0;
    t2.LinesDiff = class {
      constructor(e3, t3, n3) {
        this.changes = e3, this.moves = t3, this.hitTimeout = n3;
      }
    };
    class n2 {
      constructor(e3, t3) {
        this.lineRangeMapping = e3, this.changes = t3;
      }
      flip() {
        return new n2(this.lineRangeMapping.flip(), this.changes.map((e3) => e3.flip()));
      }
    }
    t2.MovedText = n2;
  }, 310: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.DynamicProgrammingDiffing = void 0;
    const i2 = n2(991), r2 = n2(933), s2 = n2(891);
    t2.DynamicProgrammingDiffing = class {
      compute(e3, t3, n3 = r2.InfiniteTimeout.instance, o) {
        if (0 === e3.length || 0 === t3.length) return r2.DiffAlgorithmResult.trivial(e3, t3);
        const a = new s2.Array2D(e3.length, t3.length), u = new s2.Array2D(e3.length, t3.length), l = new s2.Array2D(e3.length, t3.length);
        for (let i3 = 0; i3 < e3.length; i3++) for (let s3 = 0; s3 < t3.length; s3++) {
          if (!n3.isValid()) return r2.DiffAlgorithmResult.trivialTimedOut(e3, t3);
          const h2 = 0 === i3 ? 0 : a.get(i3 - 1, s3), c2 = 0 === s3 ? 0 : a.get(i3, s3 - 1);
          let f2;
          e3.getElement(i3) === t3.getElement(s3) ? (f2 = 0 === i3 || 0 === s3 ? 0 : a.get(i3 - 1, s3 - 1), i3 > 0 && s3 > 0 && 3 === u.get(i3 - 1, s3 - 1) && (f2 += l.get(i3 - 1, s3 - 1)), f2 += o ? o(i3, s3) : 1) : f2 = -1;
          const d2 = Math.max(h2, c2, f2);
          if (d2 === f2) {
            const e4 = i3 > 0 && s3 > 0 ? l.get(i3 - 1, s3 - 1) : 0;
            l.set(i3, s3, e4 + 1), u.set(i3, s3, 3);
          } else d2 === h2 ? (l.set(i3, s3, 0), u.set(i3, s3, 1)) : d2 === c2 && (l.set(i3, s3, 0), u.set(i3, s3, 2));
          a.set(i3, s3, d2);
        }
        const h = [];
        let c = e3.length, f = t3.length;
        function d(e4, t4) {
          e4 + 1 === c && t4 + 1 === f || h.push(new r2.SequenceDiff(new i2.OffsetRange(e4 + 1, c), new i2.OffsetRange(t4 + 1, f))), c = e4, f = t4;
        }
        let g = e3.length - 1, m = t3.length - 1;
        for (; g >= 0 && m >= 0; ) 3 === u.get(g, m) ? (d(g, m), g--, m--) : 1 === u.get(g, m) ? g-- : m--;
        return d(-1, -1), h.reverse(), new r2.DiffAlgorithmResult(h, false);
      }
    };
  }, 349: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Lazy = void 0;
    t2.Lazy = class {
      constructor(e3) {
        this.executor = e3, this._didRun = false;
      }
      get hasValue() {
        return this._didRun;
      }
      get value() {
        if (!this._didRun) try {
          this._value = this.executor();
        } catch (e3) {
          this._error = e3;
        } finally {
          this._didRun = true;
        }
        if (this._error) throw this._error;
        return this._value;
      }
      get rawValue() {
        return this._value;
      }
    };
  }, 490: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.DefaultLinesDiffComputer = void 0;
    const i2 = n2(620), r2 = n2(501), s2 = n2(141), o = n2(496), a = n2(991), u = n2(298), l = n2(768), h = n2(306), c = n2(90), f = n2(933), d = n2(310), g = n2(175), m = n2(613), p = n2(841), b = n2(187), L = n2(62);
    t2.DefaultLinesDiffComputer = class {
      constructor() {
        this.dynamicProgrammingDiffing = new d.DynamicProgrammingDiffing(), this.myersDiffingAlgorithm = new g.MyersDiffAlgorithm(), this.streamingDPDiffing = new i2.StreamingDPDiffing();
      }
      computeDiff(e3, t3, n3) {
        if (0 === e3.length && 0 === t3.length) return new h.LinesDiff([], [], false);
        if (0 === e3.length) return new h.LinesDiff([new c.DetailedLineRangeMapping(new o.LineRange(1, 1), new o.LineRange(1, t3.length + 1), void 0)], [], false);
        if (0 === t3.length) return new h.LinesDiff([new c.DetailedLineRangeMapping(new o.LineRange(1, e3.length + 1), new o.LineRange(1, 1), void 0)], [], false);
        if (e3.length <= 1 && (0, r2.equals)(e3, t3, (e4, t4) => e4 === t4)) return new h.LinesDiff([], [], false);
        if (1 === e3.length && 0 === e3[0].length || 1 === t3.length && 0 === t3[0].length) return new h.LinesDiff([new c.DetailedLineRangeMapping(new o.LineRange(1, e3.length + 1), new o.LineRange(1, t3.length + 1), [new c.RangeMapping(new u.Range(1, 1, e3.length, e3[e3.length - 1].length + 1), new u.Range(1, 1, t3.length, t3[t3.length - 1].length + 1))])], [], false);
        const i3 = 0 === n3.maxComputationTimeMs ? f.InfiniteTimeout.instance : new f.DateTimeout(n3.maxComputationTimeMs, n3.shouldGracefullyFallBackOnTimeout), d2 = !n3.ignoreTrimWhitespace, g2 = /* @__PURE__ */ new Map();
        function m2(e4) {
          let t4 = g2.get(e4);
          return void 0 === t4 && (t4 = g2.size, g2.set(e4, t4)), t4;
        }
        const L2 = e3.length * t3.length < 1e6 && true === n3.onlyCareAboutPrefixOfOriginalLines, _ = (e4) => {
          const t4 = [];
          for (const n4 of e4) {
            if (!i3.isValid()) return;
            t4.push(m2(L2 ? n4 : n4.trim()));
          }
          return t4;
        }, v = _(e3), E = v && _(t3);
        if (!v || !E) return new h.LinesDiff([new c.DetailedLineRangeMapping(new o.LineRange(1, e3.length + 1), new o.LineRange(1, t3.length + 1), [new c.RangeMapping(new u.Range(1, 1, e3.length, e3[e3.length - 1].length + 1), new u.Range(1, 1, t3.length, t3[t3.length - 1].length + 1))])], [], true);
        const w = e3.every((e4) => 0 === e4.trim().length), y = new b.LineSequence(v, e3), N = new b.LineSequence(E, t3), R = (() => L2 ? w ? f.DiffAlgorithmResult.trivial(y, N) : this.streamingDPDiffing.compute(y, N, i3, (n4, i4) => e3[n4] === t3[i4] ? 0 === t3[i4].length ? 0.1 : 1 + Math.log(1 + t3[i4].length) : 0.99) : y.length + N.length < 1700 ? this.dynamicProgrammingDiffing.compute(y, N, i3, (n4, i4) => e3[n4] === t3[i4] ? 0 === t3[i4].length ? 0.1 : 1 + Math.log(1 + t3[i4].length) : 0.99) : this.myersDiffingAlgorithm.compute(y, N, i3))();
        let C = R.diffs, x = R.hitTimeout;
        if (L2) {
          const e4 = C.map((e5) => new c.DetailedLineRangeMapping(new o.LineRange(e5.seq1Range.start + 1, e5.seq1Range.endExclusive + 1), new o.LineRange(e5.seq2Range.start + 1, e5.seq2Range.endExclusive + 1), void 0));
          return new h.LinesDiff(e4, [], x);
        }
        const S = x;
        if (C = (0, p.optimizeSequenceDiffs)(y, N, C), C = (0, p.removeVeryShortMatchingLinesBetweenDiffs)(y, N, C), n3.skipDiffRefinement || true === n3.shouldGracefullyFallBackOnTimeout && x) {
          const e4 = C.map((e5) => new c.DetailedLineRangeMapping(new o.LineRange(e5.seq1Range.start + 1, e5.seq1Range.endExclusive + 1), new o.LineRange(e5.seq2Range.start + 1, e5.seq2Range.endExclusive + 1), void 0));
          return new h.LinesDiff(e4, [], x);
        }
        const D = [], A = (r3) => {
          if (d2) for (let s3 = 0; s3 < r3; s3++) {
            const r4 = M + s3, o2 = O + s3;
            if (e3[r4] !== t3[o2]) {
              const s4 = this.refineDiff(e3, t3, new f.SequenceDiff(new a.OffsetRange(r4, r4 + 1), new a.OffsetRange(o2, o2 + 1)), i3, d2, n3);
              for (const e4 of s4.mappings) D.push(e4);
              s4.hitTimeout && (x = true);
            }
          }
        };
        let M = 0, O = 0;
        for (const r3 of C) {
          if (true === n3.shouldGracefullyFallBackOnTimeout && x) {
            const e4 = C.map((e5) => new c.DetailedLineRangeMapping(new o.LineRange(e5.seq1Range.start + 1, e5.seq1Range.endExclusive + 1), new o.LineRange(e5.seq2Range.start + 1, e5.seq2Range.endExclusive + 1), void 0));
            return new h.LinesDiff(e4, [], S);
          }
          (0, s2.assertFn)(() => r3.seq1Range.start - M === r3.seq2Range.start - O);
          A(r3.seq1Range.start - M), M = r3.seq1Range.endExclusive, O = r3.seq2Range.endExclusive;
          const a2 = this.refineDiff(e3, t3, r3, i3, d2, n3);
          a2.hitTimeout && (x = true);
          for (const e4 of a2.mappings) D.push(e4);
        }
        A(e3.length - M);
        const P = (0, c.lineRangeMappingFromRangeMappings)(D, new l.ArrayText(e3), new l.ArrayText(t3));
        let T = [];
        if (n3.computeMoves && (T = this.computeMoves(P, e3, t3, v, E, i3, d2, n3)), (0, s2.assertFn)(() => {
          function n4(e4, t4) {
            if (e4.lineNumber < 1 || e4.lineNumber > t4.length) return false;
            const n5 = t4[e4.lineNumber - 1];
            return !(e4.column < 1 || e4.column > n5.length + 1);
          }
          function i4(e4, t4) {
            return !(e4.startLineNumber < 1 || e4.startLineNumber > t4.length + 1) && !(e4.endLineNumberExclusive < 1 || e4.endLineNumberExclusive > t4.length + 1);
          }
          for (const r3 of P) {
            if (!r3.innerChanges) return false;
            for (const i5 of r3.innerChanges) {
              if (!(n4(i5.modifiedRange.getStartPosition(), t3) && n4(i5.modifiedRange.getEndPosition(), t3) && n4(i5.originalRange.getStartPosition(), e3) && n4(i5.originalRange.getEndPosition(), e3))) return false;
            }
            if (!i4(r3.modified, t3) || !i4(r3.original, e3)) return false;
          }
          return true;
        }), true === n3.shouldGracefullyFallBackOnTimeout && x && !S) {
          const e4 = C.map((e5) => new c.DetailedLineRangeMapping(new o.LineRange(e5.seq1Range.start + 1, e5.seq1Range.endExclusive + 1), new o.LineRange(e5.seq2Range.start + 1, e5.seq2Range.endExclusive + 1), void 0));
          return new h.LinesDiff(e4, [], S);
        }
        return new h.LinesDiff(P, T, x);
      }
      computeMoves(e3, t3, n3, i3, r3, s3, o2, a2) {
        return (0, m.computeMovedLines)(e3, t3, n3, i3, r3, s3).map((e4) => {
          const i4 = this.refineDiff(t3, n3, new f.SequenceDiff(e4.original.toOffsetRange(), e4.modified.toOffsetRange()), s3, o2, a2), r4 = (0, c.lineRangeMappingFromRangeMappings)(i4.mappings, new l.ArrayText(t3), new l.ArrayText(n3), true);
          return new h.MovedText(e4, r4);
        });
      }
      refineDiff(e3, t3, n3, i3, r3, s3) {
        var a2;
        const u2 = (a2 = n3, new c.LineRangeMapping(new o.LineRange(a2.seq1Range.start + 1, a2.seq1Range.endExclusive + 1), new o.LineRange(a2.seq2Range.start + 1, a2.seq2Range.endExclusive + 1))).toRangeMapping2(e3, t3), l2 = new L.LinesSliceCharSequence(e3, u2.originalRange, r3), h2 = new L.LinesSliceCharSequence(t3, u2.modifiedRange, r3), f2 = l2.length + h2.length < 500 ? this.dynamicProgrammingDiffing.compute(l2, h2, i3) : this.myersDiffingAlgorithm.compute(l2, h2, i3), d2 = false;
        let g2 = f2.diffs;
        g2 = (0, p.optimizeSequenceDiffs)(l2, h2, g2), g2 = (0, p.extendDiffsToEntireWordIfAppropriate)(l2, h2, g2, (e4, t4) => e4.findWordContaining(t4)), s3.extendToSubwords && (g2 = (0, p.extendDiffsToEntireWordIfAppropriate)(l2, h2, g2, (e4, t4) => e4.findSubWordContaining(t4), true)), g2 = (0, p.removeShortMatches)(l2, h2, g2), g2 = (0, p.removeVeryShortMatchingTextBetweenLongDiffs)(l2, h2, g2);
        const m2 = g2.map((e4) => new c.RangeMapping(l2.translateRange(e4.seq1Range), h2.translateRange(e4.seq2Range)));
        return { mappings: m2, hitTimeout: f2.hitTimeout };
      }
    };
  }, 496: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.LineRangeSet = t2.LineRange = void 0;
    const i2 = n2(976), r2 = n2(991), s2 = n2(298), o = n2(270);
    class a {
      static fromRange(e3) {
        return new a(e3.startLineNumber, e3.endLineNumber);
      }
      static fromRangeInclusive(e3) {
        return new a(e3.startLineNumber, e3.endLineNumber + 1);
      }
      static subtract(e3, t3) {
        return t3 ? e3.startLineNumber < t3.startLineNumber && t3.endLineNumberExclusive < e3.endLineNumberExclusive ? [new a(e3.startLineNumber, t3.startLineNumber), new a(t3.endLineNumberExclusive, e3.endLineNumberExclusive)] : t3.startLineNumber <= e3.startLineNumber && e3.endLineNumberExclusive <= t3.endLineNumberExclusive ? [] : t3.endLineNumberExclusive < e3.endLineNumberExclusive ? [new a(Math.max(t3.endLineNumberExclusive, e3.startLineNumber), e3.endLineNumberExclusive)] : [new a(e3.startLineNumber, Math.min(t3.startLineNumber, e3.endLineNumberExclusive))] : [e3];
      }
      static joinMany(e3) {
        if (0 === e3.length) return [];
        let t3 = new u(e3[0].slice());
        for (let n3 = 1; n3 < e3.length; n3++) t3 = t3.getUnion(new u(e3[n3].slice()));
        return t3.ranges;
      }
      static join(e3) {
        if (0 === e3.length) throw new i2.BugIndicatingError("lineRanges cannot be empty");
        let t3 = e3[0].startLineNumber, n3 = e3[0].endLineNumberExclusive;
        for (let i3 = 1; i3 < e3.length; i3++) t3 = Math.min(t3, e3[i3].startLineNumber), n3 = Math.max(n3, e3[i3].endLineNumberExclusive);
        return new a(t3, n3);
      }
      static ofLength(e3, t3) {
        return new a(e3, e3 + t3);
      }
      static deserialize(e3) {
        return new a(e3[0], e3[1]);
      }
      constructor(e3, t3) {
        if (e3 > t3) throw new i2.BugIndicatingError(`startLineNumber ${e3} cannot be after endLineNumberExclusive ${t3}`);
        this.startLineNumber = e3, this.endLineNumberExclusive = t3;
      }
      contains(e3) {
        return this.startLineNumber <= e3 && e3 < this.endLineNumberExclusive;
      }
      get isEmpty() {
        return this.startLineNumber === this.endLineNumberExclusive;
      }
      delta(e3) {
        return new a(this.startLineNumber + e3, this.endLineNumberExclusive + e3);
      }
      deltaLength(e3) {
        return new a(this.startLineNumber, this.endLineNumberExclusive + e3);
      }
      get length() {
        return this.endLineNumberExclusive - this.startLineNumber;
      }
      join(e3) {
        return new a(Math.min(this.startLineNumber, e3.startLineNumber), Math.max(this.endLineNumberExclusive, e3.endLineNumberExclusive));
      }
      toString() {
        return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
      }
      intersect(e3) {
        const t3 = Math.max(this.startLineNumber, e3.startLineNumber), n3 = Math.min(this.endLineNumberExclusive, e3.endLineNumberExclusive);
        if (t3 <= n3) return new a(t3, n3);
      }
      intersectsStrict(e3) {
        return this.startLineNumber < e3.endLineNumberExclusive && e3.startLineNumber < this.endLineNumberExclusive;
      }
      overlapOrTouch(e3) {
        return this.startLineNumber <= e3.endLineNumberExclusive && e3.startLineNumber <= this.endLineNumberExclusive;
      }
      equals(e3) {
        return this.startLineNumber === e3.startLineNumber && this.endLineNumberExclusive === e3.endLineNumberExclusive;
      }
      toInclusiveRange() {
        return this.isEmpty ? null : new s2.Range(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
      }
      toExclusiveRange() {
        return new s2.Range(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
      }
      mapToLineArray(e3) {
        const t3 = [];
        for (let n3 = this.startLineNumber; n3 < this.endLineNumberExclusive; n3++) t3.push(e3(n3));
        return t3;
      }
      forEach(e3) {
        for (let t3 = this.startLineNumber; t3 < this.endLineNumberExclusive; t3++) e3(t3);
      }
      serialize() {
        return [this.startLineNumber, this.endLineNumberExclusive];
      }
      includes(e3) {
        return this.startLineNumber <= e3 && e3 < this.endLineNumberExclusive;
      }
      toOffsetRange() {
        return new r2.OffsetRange(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
      }
      distanceToRange(e3) {
        return this.endLineNumberExclusive <= e3.startLineNumber ? e3.startLineNumber - this.endLineNumberExclusive : e3.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - e3.endLineNumberExclusive : 0;
      }
      distanceToLine(e3) {
        return this.contains(e3) ? 0 : e3 < this.startLineNumber ? this.startLineNumber - e3 : e3 - this.endLineNumberExclusive;
      }
      addMargin(e3, t3) {
        return new a(this.startLineNumber - e3, this.endLineNumberExclusive + t3);
      }
    }
    t2.LineRange = a;
    class u {
      constructor(e3 = []) {
        this._normalizedRanges = e3;
      }
      get ranges() {
        return this._normalizedRanges;
      }
      addRange(e3) {
        if (0 === e3.length) return;
        const t3 = (0, o.findFirstIdxMonotonousOrArrLen)(this._normalizedRanges, (t4) => t4.endLineNumberExclusive >= e3.startLineNumber), n3 = (0, o.findLastIdxMonotonous)(this._normalizedRanges, (t4) => t4.startLineNumber <= e3.endLineNumberExclusive) + 1;
        if (t3 === n3) this._normalizedRanges.splice(t3, 0, e3);
        else if (t3 === n3 - 1) {
          const n4 = this._normalizedRanges[t3];
          this._normalizedRanges[t3] = n4.join(e3);
        } else {
          const i3 = this._normalizedRanges[t3].join(this._normalizedRanges[n3 - 1]).join(e3);
          this._normalizedRanges.splice(t3, n3 - t3, i3);
        }
      }
      contains(e3) {
        const t3 = (0, o.findLastMonotonous)(this._normalizedRanges, (t4) => t4.startLineNumber <= e3);
        return !!t3 && t3.endLineNumberExclusive > e3;
      }
      intersects(e3) {
        const t3 = (0, o.findLastMonotonous)(this._normalizedRanges, (t4) => t4.startLineNumber < e3.endLineNumberExclusive);
        return !!t3 && t3.endLineNumberExclusive > e3.startLineNumber;
      }
      getUnion(e3) {
        if (0 === this._normalizedRanges.length) return e3;
        if (0 === e3._normalizedRanges.length) return this;
        const t3 = [];
        let n3 = 0, i3 = 0, r3 = null;
        for (; n3 < this._normalizedRanges.length || i3 < e3._normalizedRanges.length; ) {
          let s3 = null;
          if (n3 < this._normalizedRanges.length && i3 < e3._normalizedRanges.length) {
            const t4 = this._normalizedRanges[n3], r4 = e3._normalizedRanges[i3];
            t4.startLineNumber < r4.startLineNumber ? (s3 = t4, n3++) : (s3 = r4, i3++);
          } else n3 < this._normalizedRanges.length ? (s3 = this._normalizedRanges[n3], n3++) : (s3 = e3._normalizedRanges[i3], i3++);
          null === r3 ? r3 = s3 : r3.endLineNumberExclusive >= s3.startLineNumber ? r3 = new a(r3.startLineNumber, Math.max(r3.endLineNumberExclusive, s3.endLineNumberExclusive)) : (t3.push(r3), r3 = s3);
        }
        return null !== r3 && t3.push(r3), new u(t3);
      }
      subtractFrom(e3) {
        const t3 = (0, o.findFirstIdxMonotonousOrArrLen)(this._normalizedRanges, (t4) => t4.endLineNumberExclusive >= e3.startLineNumber), n3 = (0, o.findLastIdxMonotonous)(this._normalizedRanges, (t4) => t4.startLineNumber <= e3.endLineNumberExclusive) + 1;
        if (t3 === n3) return new u([e3]);
        const i3 = [];
        let r3 = e3.startLineNumber;
        for (let e4 = t3; e4 < n3; e4++) {
          const t4 = this._normalizedRanges[e4];
          t4.startLineNumber > r3 && i3.push(new a(r3, t4.startLineNumber)), r3 = t4.endLineNumberExclusive;
        }
        return r3 < e3.endLineNumberExclusive && i3.push(new a(r3, e3.endLineNumberExclusive)), new u(i3);
      }
      toString() {
        return this._normalizedRanges.map((e3) => e3.toString()).join(", ");
      }
      getIntersection(e3) {
        const t3 = [];
        let n3 = 0, i3 = 0;
        for (; n3 < this._normalizedRanges.length && i3 < e3._normalizedRanges.length; ) {
          const r3 = this._normalizedRanges[n3], s3 = e3._normalizedRanges[i3], o2 = r3.intersect(s3);
          o2 && !o2.isEmpty && t3.push(o2), r3.endLineNumberExclusive < s3.endLineNumberExclusive ? n3++ : i3++;
        }
        return new u(t3);
      }
      getWithDelta(e3) {
        return new u(this._normalizedRanges.map((t3) => t3.delta(e3)));
      }
    }
    t2.LineRangeSet = u;
  }, 499: function(e2, t2, n2) {
    var i2, r2 = this && this.__createBinding || (Object.create ? function(e3, t3, n3, i3) {
      void 0 === i3 && (i3 = n3);
      var r3 = Object.getOwnPropertyDescriptor(t3, n3);
      r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
        return t3[n3];
      } }), Object.defineProperty(e3, i3, r3);
    } : function(e3, t3, n3, i3) {
      void 0 === i3 && (i3 = n3), e3[i3] = t3[n3];
    }), s2 = this && this.__setModuleDefault || (Object.create ? function(e3, t3) {
      Object.defineProperty(e3, "default", { enumerable: true, value: t3 });
    } : function(e3, t3) {
      e3.default = t3;
    }), o = this && this.__importStar || (i2 = function(e3) {
      return i2 = Object.getOwnPropertyNames || function(e4) {
        var t3 = [];
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t3[t3.length] = n3);
        return t3;
      }, i2(e3);
    }, function(e3) {
      if (e3 && e3.__esModule) return e3;
      var t3 = {};
      if (null != e3) for (var n3 = i2(e3), o2 = 0; o2 < n3.length; o2++) "default" !== n3[o2] && r2(t3, e3, n3[o2]);
      return s2(t3, e3), t3;
    });
    Object.defineProperty(t2, "__esModule", { value: true }), t2.StringSHA1 = t2.hashAsync = void 0, t2.hash = function(e3) {
      return l(e3, 0);
    }, t2.doHash = l, t2.numberHash = h, t2.stringHash = c, t2.sha1Hex = async function(e3) {
      if (globalThis?.crypto?.subtle) {
        const t3 = a.VSBuffer.fromString(e3, { dontUseNodeBuffer: true }).buffer;
        return d(await globalThis.crypto.subtle.digest({ name: "sha-1" }, t3));
      }
      {
        const t3 = new g();
        return t3.update(e3), t3.digest();
      }
    }, t2.getSha256Hash = async function(e3) {
      const t3 = new TextEncoder().encode(e3), n3 = await crypto.subtle.digest("SHA-256", t3);
      return d(n3);
    };
    const a = n2(625), u = o(n2(589));
    function l(e3, t3) {
      switch (typeof e3) {
        case "object":
          return null === e3 ? h(349, t3) : Array.isArray(e3) ? (n3 = e3, i3 = h(104579, i3 = t3), n3.reduce((e4, t4) => l(t4, e4), i3)) : (function(e4, t4) {
            return t4 = h(181387, t4), Object.keys(e4).sort().reduce((t5, n4) => (t5 = c(n4, t5), l(e4[n4], t5)), t4);
          })(e3, t3);
        case "string":
          return c(e3, t3);
        case "boolean":
          return (function(e4, t4) {
            return h(e4 ? 433 : 863, t4);
          })(e3, t3);
        case "number":
          return h(e3, t3);
        case "undefined":
          return h(937, t3);
        default:
          return h(617, t3);
      }
      var n3, i3;
    }
    function h(e3, t3) {
      return (t3 << 5) - t3 + e3 | 0;
    }
    function c(e3, t3) {
      t3 = h(149417, t3);
      for (let n3 = 0, i3 = e3.length; n3 < i3; n3++) t3 = h(e3.charCodeAt(n3), t3);
      return t3;
    }
    function f(e3, t3, n3 = 32) {
      const i3 = n3 - t3;
      return (e3 << t3 | (~((1 << i3) - 1) & e3) >>> i3) >>> 0;
    }
    function d(e3, t3 = 32) {
      return e3 instanceof ArrayBuffer ? Array.from(new Uint8Array(e3)).map((e4) => e4.toString(16).padStart(2, "0")).join("") : (e3 >>> 0).toString(16).padStart(t3 / 4, "0");
    }
    t2.hashAsync = (e3) => {
      if ("string" == typeof e3 && e3.length < 250) {
        const t4 = new g();
        return t4.update(e3), Promise.resolve(t4.digest());
      }
      let t3;
      return t3 = "string" == typeof e3 ? new TextEncoder().encode(e3) : e3 instanceof a.VSBuffer ? e3.buffer : e3, crypto.subtle.digest("sha-1", t3).then(d);
    };
    class g {
      static {
        this._bigBlock32 = new DataView(new ArrayBuffer(320));
      }
      constructor() {
        this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
      }
      update(e3) {
        const t3 = e3.length;
        if (0 === t3) return;
        const n3 = this._buff;
        let i3, r3, s3 = this._buffLen, o2 = this._leftoverHighSurrogate;
        for (0 !== o2 ? (i3 = o2, r3 = -1, o2 = 0) : (i3 = e3.charCodeAt(0), r3 = 0); ; ) {
          let a2 = i3;
          if (u.isHighSurrogate(i3)) {
            if (!(r3 + 1 < t3)) {
              o2 = i3;
              break;
            }
            {
              const t4 = e3.charCodeAt(r3 + 1);
              u.isLowSurrogate(t4) ? (r3++, a2 = u.computeCodePoint(i3, t4)) : a2 = 65533;
            }
          } else u.isLowSurrogate(i3) && (a2 = 65533);
          if (s3 = this._push(n3, s3, a2), r3++, !(r3 < t3)) break;
          i3 = e3.charCodeAt(r3);
        }
        this._buffLen = s3, this._leftoverHighSurrogate = o2;
      }
      _push(e3, t3, n3) {
        return n3 < 128 ? e3[t3++] = n3 : n3 < 2048 ? (e3[t3++] = 192 | (1984 & n3) >>> 6, e3[t3++] = 128 | (63 & n3) >>> 0) : n3 < 65536 ? (e3[t3++] = 224 | (61440 & n3) >>> 12, e3[t3++] = 128 | (4032 & n3) >>> 6, e3[t3++] = 128 | (63 & n3) >>> 0) : (e3[t3++] = 240 | (1835008 & n3) >>> 18, e3[t3++] = 128 | (258048 & n3) >>> 12, e3[t3++] = 128 | (4032 & n3) >>> 6, e3[t3++] = 128 | (63 & n3) >>> 0), t3 >= 64 && (this._step(), t3 -= 64, this._totalLen += 64, e3[0] = e3[64], e3[1] = e3[65], e3[2] = e3[66]), t3;
      }
      digest() {
        return this._finished || (this._finished = true, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), d(this._h0) + d(this._h1) + d(this._h2) + d(this._h3) + d(this._h4);
      }
      _wrapUp() {
        this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
        const e3 = 8 * this._totalLen;
        this._buffDV.setUint32(56, Math.floor(e3 / 4294967296), false), this._buffDV.setUint32(60, e3 % 4294967296, false), this._step();
      }
      _step() {
        const e3 = g._bigBlock32, t3 = this._buffDV;
        for (let n4 = 0; n4 < 64; n4 += 4) e3.setUint32(n4, t3.getUint32(n4, false), false);
        for (let t4 = 64; t4 < 320; t4 += 4) e3.setUint32(t4, f(e3.getUint32(t4 - 12, false) ^ e3.getUint32(t4 - 32, false) ^ e3.getUint32(t4 - 56, false) ^ e3.getUint32(t4 - 64, false), 1), false);
        let n3, i3, r3, s3 = this._h0, o2 = this._h1, a2 = this._h2, u2 = this._h3, l2 = this._h4;
        for (let t4 = 0; t4 < 80; t4++) t4 < 20 ? (n3 = o2 & a2 | ~o2 & u2, i3 = 1518500249) : t4 < 40 ? (n3 = o2 ^ a2 ^ u2, i3 = 1859775393) : t4 < 60 ? (n3 = o2 & a2 | o2 & u2 | a2 & u2, i3 = 2400959708) : (n3 = o2 ^ a2 ^ u2, i3 = 3395469782), r3 = f(s3, 5) + n3 + l2 + i3 + e3.getUint32(4 * t4, false) & 4294967295, l2 = u2, u2 = a2, a2 = f(o2, 30), o2 = s3, s3 = r3;
        this._h0 = this._h0 + s3 & 4294967295, this._h1 = this._h1 + o2 & 4294967295, this._h2 = this._h2 + a2 & 4294967295, this._h3 = this._h3 + u2 & 4294967295, this._h4 = this._h4 + l2 & 4294967295;
      }
    }
    t2.StringSHA1 = g;
  }, 501: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Permutation = t2.CallbackIterable = t2.ArrayQueue = t2.booleanComparator = t2.numberComparator = t2.CompareResult = t2.pick = void 0, t2.tail = function(e3) {
      if (0 === e3.length) throw new Error("Invalid tail call");
      return [e3.slice(0, e3.length - 1), e3[e3.length - 1]];
    }, t2.equals = function(e3, t3, n3 = (e4, t4) => e4 === t4) {
      if (e3 === t3) return true;
      if (!e3 || !t3) return false;
      if (e3.length !== t3.length) return false;
      for (let i3 = 0, r3 = e3.length; i3 < r3; i3++) if (!n3(e3[i3], t3[i3])) return false;
      return true;
    }, t2.removeFastWithoutKeepingOrder = function(e3, t3) {
      const n3 = e3.length - 1;
      t3 < n3 && (e3[t3] = e3[n3]);
      e3.pop();
    }, t2.binarySearch = function(e3, t3, n3) {
      return s2(e3.length, (i3) => n3(e3[i3], t3));
    }, t2.binarySearch2 = s2, t2.quickSelect = function e3(t3, n3, i3) {
      if ((t3 |= 0) >= n3.length) throw new TypeError("invalid index");
      const r3 = n3[Math.floor(n3.length * Math.random())], s3 = [], o2 = [], a2 = [];
      for (const e4 of n3) {
        const t4 = i3(e4, r3);
        t4 < 0 ? s3.push(e4) : t4 > 0 ? o2.push(e4) : a2.push(e4);
      }
      return t3 < s3.length ? e3(t3, s3, i3) : t3 < s3.length + a2.length ? a2[0] : e3(t3 - (s3.length + a2.length), o2, i3);
    }, t2.groupBy = function(e3, t3) {
      const n3 = [];
      let i3;
      for (const r3 of e3.slice(0).sort(t3)) i3 && 0 === t3(i3[0], r3) ? i3.push(r3) : (i3 = [r3], n3.push(i3));
      return n3;
    }, t2.groupAdjacentBy = function* (e3, t3) {
      let n3, i3;
      for (const r3 of e3) void 0 !== i3 && t3(i3, r3) ? n3.push(r3) : (n3 && (yield n3), n3 = [r3]), i3 = r3;
      n3 && (yield n3);
    }, t2.forEachAdjacent = function(e3, t3) {
      for (let n3 = 0; n3 <= e3.length; n3++) t3(0 === n3 ? void 0 : e3[n3 - 1], n3 === e3.length ? void 0 : e3[n3]);
    }, t2.forEachWithNeighbors = function(e3, t3) {
      for (let n3 = 0; n3 < e3.length; n3++) t3(0 === n3 ? void 0 : e3[n3 - 1], e3[n3], n3 + 1 === e3.length ? void 0 : e3[n3 + 1]);
    }, t2.sortedDiff = o, t2.delta = function(e3, t3, n3) {
      const i3 = o(e3, t3, n3), r3 = [], s3 = [];
      for (const t4 of i3) r3.push(...e3.slice(t4.start, t4.start + t4.deleteCount)), s3.push(...t4.toInsert);
      return { removed: r3, added: s3 };
    }, t2.top = function(e3, t3, n3) {
      if (0 === n3) return [];
      const i3 = e3.slice(0, n3).sort(t3);
      return a(e3, t3, i3, n3, e3.length), i3;
    }, t2.topAsync = function(e3, t3, n3, i3, s3) {
      if (0 === n3) return Promise.resolve([]);
      return new Promise((o2, u2) => {
        (async () => {
          const o3 = e3.length, u3 = e3.slice(0, n3).sort(t3);
          for (let l2 = n3, h2 = Math.min(n3 + i3, o3); l2 < o3; l2 = h2, h2 = Math.min(h2 + i3, o3)) {
            if (l2 > n3 && await new Promise((e4) => setTimeout(e4)), s3 && s3.isCancellationRequested) throw new r2.CancellationError();
            a(e3, t3, u3, l2, h2);
          }
          return u3;
        })().then(o2, u2);
      });
    }, t2.coalesce = function(e3) {
      return e3.filter((e4) => !!e4);
    }, t2.coalesceInPlace = function(e3) {
      let t3 = 0;
      for (let n3 = 0; n3 < e3.length; n3++) e3[n3] && (e3[t3] = e3[n3], t3 += 1);
      e3.length = t3;
    }, t2.move = function(e3, t3, n3) {
      e3.splice(n3, 0, e3.splice(t3, 1)[0]);
    }, t2.isFalsyOrEmpty = function(e3) {
      return !Array.isArray(e3) || 0 === e3.length;
    }, t2.isNonEmptyArray = function(e3) {
      return Array.isArray(e3) && e3.length > 0;
    }, t2.distinct = function(e3, t3 = (e4) => e4) {
      const n3 = /* @__PURE__ */ new Set();
      return e3.filter((e4) => {
        const i3 = t3(e4);
        return !n3.has(i3) && (n3.add(i3), true);
      });
    }, t2.uniqueFilter = function(e3) {
      const t3 = /* @__PURE__ */ new Set();
      return (n3) => {
        const i3 = e3(n3);
        return !t3.has(i3) && (t3.add(i3), true);
      };
    }, t2.commonPrefixLength = function(e3, t3, n3 = (e4, t4) => e4 === t4) {
      let i3 = 0;
      for (let r3 = 0, s3 = Math.min(e3.length, t3.length); r3 < s3 && n3(e3[r3], t3[r3]); r3++) i3++;
      return i3;
    }, t2.range = function(e3, t3) {
      let n3 = "number" == typeof t3 ? e3 : 0;
      "number" == typeof t3 ? n3 = e3 : (n3 = 0, t3 = e3);
      const i3 = [];
      if (n3 <= t3) for (let e4 = n3; e4 < t3; e4++) i3.push(e4);
      else for (let e4 = n3; e4 > t3; e4--) i3.push(e4);
      return i3;
    }, t2.index = function(e3, t3, n3) {
      return e3.reduce((e4, i3) => (e4[t3(i3)] = n3 ? n3(i3) : i3, e4), /* @__PURE__ */ Object.create(null));
    }, t2.insert = function(e3, t3) {
      return e3.push(t3), () => u(e3, t3);
    }, t2.remove = u, t2.arrayInsert = function(e3, t3, n3) {
      const i3 = e3.slice(0, t3), r3 = e3.slice(t3);
      return i3.concat(n3, r3);
    }, t2.shuffle = function(e3, t3) {
      let n3;
      if ("number" == typeof t3) {
        let e4 = t3;
        n3 = () => {
          const t4 = 179426549 * Math.sin(e4++);
          return t4 - Math.floor(t4);
        };
      } else n3 = Math.random;
      for (let t4 = e3.length - 1; t4 > 0; t4 -= 1) {
        const i3 = Math.floor(n3() * (t4 + 1)), r3 = e3[t4];
        e3[t4] = e3[i3], e3[i3] = r3;
      }
    }, t2.pushToStart = function(e3, t3) {
      const n3 = e3.indexOf(t3);
      n3 > -1 && (e3.splice(n3, 1), e3.unshift(t3));
    }, t2.pushToEnd = function(e3, t3) {
      const n3 = e3.indexOf(t3);
      n3 > -1 && (e3.splice(n3, 1), e3.push(t3));
    }, t2.pushMany = function(e3, t3) {
      for (const n3 of t3) e3.push(n3);
    }, t2.mapArrayOrNot = function(e3, t3) {
      return Array.isArray(e3) ? e3.map(t3) : t3(e3);
    }, t2.asArray = function(e3) {
      return Array.isArray(e3) ? e3 : [e3];
    }, t2.getRandomElement = function(e3) {
      return e3[Math.floor(Math.random() * e3.length)];
    }, t2.insertInto = l, t2.splice = function(e3, t3, n3, i3) {
      const r3 = h(e3, t3);
      let s3 = e3.splice(r3, n3);
      void 0 === s3 && (s3 = []);
      return l(e3, r3, i3), s3;
    }, t2.compareBy = function(e3, t3) {
      return (n3, i3) => t3(e3(n3), e3(i3));
    }, t2.tieBreakComparators = function(...e3) {
      return (t3, n3) => {
        for (const i3 of e3) {
          const e4 = i3(t3, n3);
          if (!c.isNeitherLessOrGreaterThan(e4)) return e4;
        }
        return c.neitherLessOrGreaterThan;
      };
    }, t2.reverseOrder = function(e3) {
      return (t3, n3) => -e3(t3, n3);
    }, t2.compareUndefinedSmallest = function(e3) {
      return (t3, n3) => void 0 === t3 ? void 0 === n3 ? c.neitherLessOrGreaterThan : c.lessThan : void 0 === n3 ? c.greaterThan : e3(t3, n3);
    }, t2.findAsync = async function(e3, t3) {
      const n3 = await Promise.all(e3.map(async (e4, n4) => ({ element: e4, ok: await t3(e4, n4) })));
      return n3.find((e4) => e4.ok)?.element;
    };
    const i2 = n2(270), r2 = n2(976);
    function s2(e3, t3) {
      let n3 = 0, i3 = e3 - 1;
      for (; n3 <= i3; ) {
        const e4 = (n3 + i3) / 2 | 0, r3 = t3(e4);
        if (r3 < 0) n3 = e4 + 1;
        else {
          if (!(r3 > 0)) return e4;
          i3 = e4 - 1;
        }
      }
      return -(n3 + 1);
    }
    function o(e3, t3, n3) {
      const i3 = [];
      function r3(e4, t4, n4) {
        if (0 === t4 && 0 === n4.length) return;
        const r4 = i3[i3.length - 1];
        r4 && r4.start + r4.deleteCount === e4 ? (r4.deleteCount += t4, r4.toInsert.push(...n4)) : i3.push({ start: e4, deleteCount: t4, toInsert: n4 });
      }
      let s3 = 0, o2 = 0;
      for (; ; ) {
        if (s3 === e3.length) {
          r3(s3, 0, t3.slice(o2));
          break;
        }
        if (o2 === t3.length) {
          r3(s3, e3.length - s3, []);
          break;
        }
        const i4 = e3[s3], a2 = t3[o2], u2 = n3(i4, a2);
        0 === u2 ? (s3 += 1, o2 += 1) : u2 < 0 ? (r3(s3, 1, []), s3 += 1) : u2 > 0 && (r3(s3, 0, [a2]), o2 += 1);
      }
      return i3;
    }
    function a(e3, t3, n3, r3, s3) {
      for (const o2 = n3.length; r3 < s3; r3++) {
        const s4 = e3[r3];
        if (t3(s4, n3[o2 - 1]) < 0) {
          n3.pop();
          const e4 = (0, i2.findFirstIdxMonotonousOrArrLen)(n3, (e5) => t3(s4, e5) < 0);
          n3.splice(e4, 0, s4);
        }
      }
    }
    function u(e3, t3) {
      const n3 = e3.indexOf(t3);
      if (n3 > -1) return e3.splice(n3, 1), t3;
    }
    function l(e3, t3, n3) {
      const i3 = h(e3, t3), r3 = e3.length, s3 = n3.length;
      e3.length = r3 + s3;
      for (let t4 = r3 - 1; t4 >= i3; t4--) e3[t4 + s3] = e3[t4];
      for (let t4 = 0; t4 < s3; t4++) e3[t4 + i3] = n3[t4];
    }
    function h(e3, t3) {
      return t3 < 0 ? Math.max(t3 + e3.length, 0) : Math.min(t3, e3.length);
    }
    var c;
    t2.pick = (e3) => (t3) => t3[e3], (function(e3) {
      e3.isLessThan = function(e4) {
        return e4 < 0;
      }, e3.isLessThanOrEqual = function(e4) {
        return e4 <= 0;
      }, e3.isGreaterThan = function(e4) {
        return e4 > 0;
      }, e3.isNeitherLessOrGreaterThan = function(e4) {
        return 0 === e4;
      }, e3.greaterThan = 1, e3.lessThan = -1, e3.neitherLessOrGreaterThan = 0;
    })(c || (t2.CompareResult = c = {}));
    t2.numberComparator = (e3, t3) => e3 - t3;
    t2.booleanComparator = (e3, n3) => (0, t2.numberComparator)(e3 ? 1 : 0, n3 ? 1 : 0);
    t2.ArrayQueue = class {
      constructor(e3) {
        this.items = e3, this.firstIdx = 0, this.lastIdx = this.items.length - 1;
      }
      get length() {
        return this.lastIdx - this.firstIdx + 1;
      }
      takeWhile(e3) {
        let t3 = this.firstIdx;
        for (; t3 < this.items.length && e3(this.items[t3]); ) t3++;
        const n3 = t3 === this.firstIdx ? null : this.items.slice(this.firstIdx, t3);
        return this.firstIdx = t3, n3;
      }
      takeFromEndWhile(e3) {
        let t3 = this.lastIdx;
        for (; t3 >= 0 && e3(this.items[t3]); ) t3--;
        const n3 = t3 === this.lastIdx ? null : this.items.slice(t3 + 1, this.lastIdx + 1);
        return this.lastIdx = t3, n3;
      }
      peek() {
        if (0 !== this.length) return this.items[this.firstIdx];
      }
      peekLast() {
        if (0 !== this.length) return this.items[this.lastIdx];
      }
      dequeue() {
        const e3 = this.items[this.firstIdx];
        return this.firstIdx++, e3;
      }
      removeLast() {
        const e3 = this.items[this.lastIdx];
        return this.lastIdx--, e3;
      }
      takeCount(e3) {
        const t3 = this.items.slice(this.firstIdx, this.firstIdx + e3);
        return this.firstIdx += e3, t3;
      }
    };
    class f {
      static {
        this.empty = new f((e3) => {
        });
      }
      constructor(e3) {
        this.iterate = e3;
      }
      forEach(e3) {
        this.iterate((t3) => (e3(t3), true));
      }
      toArray() {
        const e3 = [];
        return this.iterate((t3) => (e3.push(t3), true)), e3;
      }
      filter(e3) {
        return new f((t3) => this.iterate((n3) => !e3(n3) || t3(n3)));
      }
      map(e3) {
        return new f((t3) => this.iterate((n3) => t3(e3(n3))));
      }
      some(e3) {
        let t3 = false;
        return this.iterate((n3) => (t3 = e3(n3), !t3)), t3;
      }
      findFirst(e3) {
        let t3;
        return this.iterate((n3) => !e3(n3) || (t3 = n3, false)), t3;
      }
      findLast(e3) {
        let t3;
        return this.iterate((n3) => (e3(n3) && (t3 = n3), true)), t3;
      }
      findLastMaxBy(e3) {
        let t3, n3 = true;
        return this.iterate((i3) => ((n3 || c.isGreaterThan(e3(i3, t3))) && (n3 = false, t3 = i3), true)), t3;
      }
    }
    t2.CallbackIterable = f;
    class d {
      constructor(e3) {
        this._indexMap = e3;
      }
      static createSortPermutation(e3, t3) {
        const n3 = Array.from(e3.keys()).sort((n4, i3) => t3(e3[n4], e3[i3]));
        return new d(n3);
      }
      apply(e3) {
        return e3.map((t3, n3) => e3[this._indexMap[n3]]);
      }
      inverse() {
        const e3 = this._indexMap.slice();
        for (let t3 = 0; t3 < this._indexMap.length; t3++) e3[this._indexMap[t3]] = t3;
        return new d(e3);
      }
    }
    t2.Permutation = d;
  }, 584: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Position = void 0;
    class n2 {
      constructor(e3, t3) {
        this.lineNumber = e3, this.column = t3;
      }
      with(e3 = this.lineNumber, t3 = this.column) {
        return e3 === this.lineNumber && t3 === this.column ? this : new n2(e3, t3);
      }
      delta(e3 = 0, t3 = 0) {
        return this.with(Math.max(1, this.lineNumber + e3), Math.max(1, this.column + t3));
      }
      equals(e3) {
        return n2.equals(this, e3);
      }
      static equals(e3, t3) {
        return !e3 && !t3 || !!e3 && !!t3 && e3.lineNumber === t3.lineNumber && e3.column === t3.column;
      }
      isBefore(e3) {
        return n2.isBefore(this, e3);
      }
      static isBefore(e3, t3) {
        return e3.lineNumber < t3.lineNumber || !(t3.lineNumber < e3.lineNumber) && e3.column < t3.column;
      }
      isBeforeOrEqual(e3) {
        return n2.isBeforeOrEqual(this, e3);
      }
      static isBeforeOrEqual(e3, t3) {
        return e3.lineNumber < t3.lineNumber || !(t3.lineNumber < e3.lineNumber) && e3.column <= t3.column;
      }
      static compare(e3, t3) {
        const n3 = 0 | e3.lineNumber, i2 = 0 | t3.lineNumber;
        if (n3 === i2) {
          return (0 | e3.column) - (0 | t3.column);
        }
        return n3 - i2;
      }
      clone() {
        return new n2(this.lineNumber, this.column);
      }
      toString() {
        return "(" + this.lineNumber + "," + this.column + ")";
      }
      static lift(e3) {
        return new n2(e3.lineNumber, e3.column);
      }
      static isIPosition(e3) {
        return e3 && "number" == typeof e3.lineNumber && "number" == typeof e3.column;
      }
      toJSON() {
        return { lineNumber: this.lineNumber, column: this.column };
      }
    }
    t2.Position = n2;
  }, 588: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.TextLength = void 0;
    const i2 = n2(496), r2 = n2(584), s2 = n2(298);
    class o {
      static {
        this.zero = new o(0, 0);
      }
      static lengthDiffNonNegative(e3, t3) {
        return t3.isLessThan(e3) ? o.zero : e3.lineCount === t3.lineCount ? new o(0, t3.columnCount - e3.columnCount) : new o(t3.lineCount - e3.lineCount, t3.columnCount);
      }
      static betweenPositions(e3, t3) {
        return e3.lineNumber === t3.lineNumber ? new o(0, t3.column - e3.column) : new o(t3.lineNumber - e3.lineNumber, t3.column - 1);
      }
      static fromPosition(e3) {
        return new o(e3.lineNumber - 1, e3.column - 1);
      }
      static ofRange(e3) {
        return o.betweenPositions(e3.getStartPosition(), e3.getEndPosition());
      }
      static ofText(e3) {
        let t3 = 0, n3 = 0;
        for (const i3 of e3) "\n" === i3 ? (t3++, n3 = 0) : n3++;
        return new o(t3, n3);
      }
      constructor(e3, t3) {
        this.lineCount = e3, this.columnCount = t3;
      }
      isZero() {
        return 0 === this.lineCount && 0 === this.columnCount;
      }
      isLessThan(e3) {
        return this.lineCount !== e3.lineCount ? this.lineCount < e3.lineCount : this.columnCount < e3.columnCount;
      }
      isGreaterThan(e3) {
        return this.lineCount !== e3.lineCount ? this.lineCount > e3.lineCount : this.columnCount > e3.columnCount;
      }
      isGreaterThanOrEqualTo(e3) {
        return this.lineCount !== e3.lineCount ? this.lineCount > e3.lineCount : this.columnCount >= e3.columnCount;
      }
      equals(e3) {
        return this.lineCount === e3.lineCount && this.columnCount === e3.columnCount;
      }
      compare(e3) {
        return this.lineCount !== e3.lineCount ? this.lineCount - e3.lineCount : this.columnCount - e3.columnCount;
      }
      add(e3) {
        return 0 === e3.lineCount ? new o(this.lineCount, this.columnCount + e3.columnCount) : new o(this.lineCount + e3.lineCount, e3.columnCount);
      }
      createRange(e3) {
        return 0 === this.lineCount ? new s2.Range(e3.lineNumber, e3.column, e3.lineNumber, e3.column + this.columnCount) : new s2.Range(e3.lineNumber, e3.column, e3.lineNumber + this.lineCount, this.columnCount + 1);
      }
      toRange() {
        return new s2.Range(1, 1, this.lineCount + 1, this.columnCount + 1);
      }
      toLineRange() {
        return i2.LineRange.ofLength(1, this.lineCount + 1);
      }
      addToPosition(e3) {
        return 0 === this.lineCount ? new r2.Position(e3.lineNumber, e3.column + this.columnCount) : new r2.Position(e3.lineNumber + this.lineCount, this.columnCount + 1);
      }
      addToRange(e3) {
        return s2.Range.fromPositions(this.addToPosition(e3.getStartPosition()), this.addToPosition(e3.getEndPosition()));
      }
      toString() {
        return `${this.lineCount},${this.columnCount}`;
      }
    }
    t2.TextLength = o;
  }, 589: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.maskEmail = t2.normalizeEOL = t2.InvisibleCharacters = t2.AmbiguousCharacters = t2.noBreakWhitespace = t2.UTF8_BOM_CHARACTER = t2.UNUSUAL_LINE_TERMINATORS = t2.GraphemeIterator = t2.CodePointIterator = void 0, t2.isFalsyOrWhitespace = function(e3) {
      if (!e3 || "string" != typeof e3) return true;
      return 0 === e3.trim().length;
    }, t2.coalesceTrimmedStrings = function(e3) {
      if (!Array.isArray(e3)) return;
      const t3 = [];
      for (let n3 = 0; n3 < e3.length; n3++) {
        const i3 = e3[n3];
        if ("string" != typeof i3) continue;
        const r3 = i3.trim();
        r3.length > 0 && t3.push(r3);
      }
      return t3.length > 0 ? t3 : void 0;
    }, t2.format = function(e3, ...t3) {
      if (0 === t3.length) return e3;
      return e3.replace(s2, function(e4, n3) {
        const i3 = parseInt(n3, 10);
        return isNaN(i3) || i3 < 0 || i3 >= t3.length ? e4 : t3[i3];
      });
    }, t2.format2 = function(e3, t3) {
      if (0 === Object.keys(t3).length) return e3;
      return e3.replace(o, (e4, n3) => t3[n3] ?? e4);
    }, t2.htmlAttributeEncodeValue = function(e3) {
      return e3.replace(/[<>"'&]/g, (e4) => {
        switch (e4) {
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case '"':
            return "&quot;";
          case "'":
            return "&apos;";
          case "&":
            return "&amp;";
        }
        return e4;
      });
    }, t2.escape = function(e3) {
      return e3.replace(/[<>&]/g, function(e4) {
        switch (e4) {
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case "&":
            return "&amp;";
          default:
            return e4;
        }
      });
    }, t2.escapeRegExpCharacters = a, t2.count = function(e3, t3) {
      let n3 = 0, i3 = e3.indexOf(t3);
      for (; -1 !== i3; ) n3++, i3 = e3.indexOf(t3, i3 + t3.length);
      return n3;
    }, t2.truncate = function(e3, t3, n3 = "…") {
      if (e3.length <= t3) return e3;
      return `${e3.substr(0, t3)}${n3}`;
    }, t2.truncateMiddle = function(e3, t3, n3 = "…") {
      if (e3.length <= t3) return e3;
      const i3 = Math.ceil(t3 / 2) - n3.length / 2, r3 = Math.floor(t3 / 2) - n3.length / 2;
      return `${e3.substr(0, i3)}${n3}${e3.substr(e3.length - r3)}`;
    }, t2.trim = function(e3, t3 = " ") {
      return l(u(e3, t3), t3);
    }, t2.ltrim = u, t2.rtrim = l, t2.convertSimple2RegExpPattern = function(e3) {
      return e3.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*");
    }, t2.stripWildcards = function(e3) {
      return e3.replace(/\*/g, "");
    }, t2.createRegExp = function(e3, t3, n3 = {}) {
      if (!e3) throw new Error("Cannot create regex from empty string");
      t3 || (e3 = a(e3));
      n3.wholeWord && (/\B/.test(e3.charAt(0)) || (e3 = "\\b" + e3), /\B/.test(e3.charAt(e3.length - 1)) || (e3 += "\\b"));
      let i3 = "";
      n3.global && (i3 += "g");
      n3.matchCase || (i3 += "i");
      n3.multiline && (i3 += "m");
      n3.unicode && (i3 += "u");
      return new RegExp(e3, i3);
    }, t2.regExpLeadsToEndlessLoop = function(e3) {
      if ("^" === e3.source || "^$" === e3.source || "$" === e3.source || "^\\s*$" === e3.source) return false;
      return !(!e3.exec("") || 0 !== e3.lastIndex);
    }, t2.joinStrings = function(e3, t3) {
      return e3.filter((e4) => null != e4 && false !== e4).join(t3);
    }, t2.splitLines = function(e3) {
      return e3.split(/\r\n|\r|\n/);
    }, t2.firstNonWhitespaceIndex = h, t2.getLeadingWhitespace = function(e3, t3 = 0, n3 = e3.length) {
      for (let i3 = t3; i3 < n3; i3++) {
        const n4 = e3.charCodeAt(i3);
        if (32 !== n4 && 9 !== n4) return e3.substring(t3, i3);
      }
      return e3.substring(t3, n3);
    }, t2.lastNonWhitespaceIndex = function(e3, t3 = e3.length - 1) {
      for (let n3 = t3; n3 >= 0; n3--) {
        const t4 = e3.charCodeAt(n3);
        if (32 !== t4 && 9 !== t4) return n3;
      }
      return -1;
    }, t2.getIndentationLength = function(e3) {
      const t3 = h(e3);
      if (-1 === t3) return e3.length;
      return t3;
    }, t2.replaceAsync = function(e3, t3, n3) {
      const i3 = [];
      let r3 = 0;
      for (const s3 of e3.matchAll(t3)) {
        if (i3.push(e3.slice(r3, s3.index)), void 0 === s3.index) throw new Error("match.index should be defined");
        r3 = s3.index + s3[0].length, i3.push(n3(s3[0], ...s3.slice(1), s3.index, e3, s3.groups));
      }
      return i3.push(e3.slice(r3)), Promise.all(i3).then((e4) => e4.join(""));
    }, t2.compare = function(e3, t3) {
      return e3 < t3 ? -1 : e3 > t3 ? 1 : 0;
    }, t2.compareSubstring = c, t2.compareIgnoreCase = function(e3, t3) {
      return f(e3, t3, 0, e3.length, 0, t3.length);
    }, t2.compareSubstringIgnoreCase = f, t2.isAsciiDigit = function(e3) {
      return e3 >= 48 && e3 <= 57;
    }, t2.isLowerAsciiLetter = d, t2.isUpperAsciiLetter = function(e3) {
      return e3 >= 65 && e3 <= 90;
    }, t2.equalsIgnoreCase = function(e3, t3) {
      return e3.length === t3.length && 0 === f(e3, t3);
    }, t2.startsWithIgnoreCase = function(e3, t3) {
      const n3 = t3.length;
      if (t3.length > e3.length) return false;
      return 0 === f(e3, t3, 0, n3);
    }, t2.endsWithIgnoreCase = function(e3, t3) {
      const n3 = e3.length, i3 = n3 - t3.length;
      return i3 >= 0 && 0 === f(e3, t3, i3, n3);
    }, t2.commonPrefixLength = function(e3, t3) {
      const n3 = Math.min(e3.length, t3.length);
      let i3;
      for (i3 = 0; i3 < n3; i3++) if (e3.charCodeAt(i3) !== t3.charCodeAt(i3)) return i3;
      return n3;
    }, t2.commonSuffixLength = function(e3, t3) {
      const n3 = Math.min(e3.length, t3.length);
      let i3;
      const r3 = e3.length - 1, s3 = t3.length - 1;
      for (i3 = 0; i3 < n3; i3++) if (e3.charCodeAt(r3 - i3) !== t3.charCodeAt(s3 - i3)) return i3;
      return n3;
    }, t2.isHighSurrogate = g, t2.isLowSurrogate = m, t2.computeCodePoint = p, t2.getNextCodePoint = b, t2.nextCharLength = v, t2.prevCharLength = E, t2.getCharContainingOffset = function(e3, t3) {
      t3 > 0 && m(e3.charCodeAt(t3)) && t3--;
      const n3 = t3 + v(e3, t3);
      return [n3 - E(e3, n3), n3];
    }, t2.charCount = function(e3) {
      const t3 = new _(e3);
      let n3 = 0;
      for (; !t3.eol(); ) n3++, t3.nextGraphemeLength();
      return n3;
    }, t2.containsRTL = function(e3) {
      w || (w = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/);
      return w.test(e3);
    }, t2.isBasicASCII = function(e3) {
      return y.test(e3);
    }, t2.containsUnusualLineTerminators = function(e3) {
      return t2.UNUSUAL_LINE_TERMINATORS.test(e3);
    }, t2.isFullWidthCharacter = function(e3) {
      return e3 >= 11904 && e3 <= 55215 || e3 >= 63744 && e3 <= 64255 || e3 >= 65281 && e3 <= 65374;
    }, t2.isEmojiImprecise = N, t2.lcut = function(e3, t3, n3 = "") {
      const i3 = e3.trimStart();
      if (i3.length < t3) return i3;
      const r3 = /\b/g;
      let s3 = 0;
      for (; r3.test(i3) && !(i3.length - r3.lastIndex < t3); ) s3 = r3.lastIndex, r3.lastIndex += 1;
      if (0 === s3) return i3;
      return n3 + i3.substring(s3).trimStart();
    }, t2.rcut = function(e3, t3, n3 = "") {
      const i3 = e3.trimEnd();
      if (i3.length < t3) return i3;
      const r3 = e3.split(/\b/);
      let s3 = "";
      for (const e4 of r3) {
        if (s3.length > 0 && s3.length + e4.length > t3) break;
        s3 += e4;
      }
      if (s3 === i3) return s3;
      return s3.trim().replace(/b$/, "") + n3;
    }, t2.forAnsiStringParts = function* (e3) {
      let t3 = 0;
      for (const n3 of e3.matchAll(R)) t3 !== n3.index && (yield { isCode: false, str: e3.substring(t3, n3.index) }), yield { isCode: true, str: n3[0] }, t3 = n3.index + n3[0].length;
      t3 !== e3.length && (yield { isCode: false, str: e3.substring(t3) });
    }, t2.removeAnsiEscapeCodes = C, t2.removeAnsiEscapeCodesFromPrompt = function(e3) {
      return C(e3).replace(x, "");
    }, t2.startsWithUTF8BOM = S, t2.stripUTF8BOM = function(e3) {
      return S(e3) ? e3.substr(1) : e3;
    }, t2.fuzzyContains = function(e3, t3) {
      if (!e3 || !t3) return false;
      if (e3.length < t3.length) return false;
      const n3 = t3.length, i3 = e3.toLowerCase();
      let r3 = 0, s3 = -1;
      for (; r3 < n3; ) {
        const e4 = i3.indexOf(t3[r3], s3 + 1);
        if (e4 < 0) return false;
        s3 = e4, r3++;
      }
      return true;
    }, t2.containsUppercaseCharacter = function(e3, t3 = false) {
      if (!e3) return false;
      t3 && (e3 = e3.replace(/\\./g, ""));
      return e3.toLowerCase() !== e3;
    }, t2.uppercaseFirstLetter = function(e3) {
      return e3.charAt(0).toUpperCase() + e3.slice(1);
    }, t2.getNLines = function(e3, t3 = 1) {
      if (0 === t3) return "";
      let n3 = -1;
      do {
        n3 = e3.indexOf("\n", n3 + 1), t3--;
      } while (t3 > 0 && n3 >= 0);
      if (-1 === n3) return e3;
      "\r" === e3[n3 - 1] && n3--;
      return e3.substr(0, n3);
    }, t2.singleLetterHash = function(e3) {
      if ((e3 %= 52) < 26) return String.fromCharCode(97 + e3);
      return String.fromCharCode(65 + e3 - 26);
    }, t2.getGraphemeBreakType = function(e3) {
      return A.getInstance().getGraphemeBreakType(e3);
    }, t2.getLeftDeleteOffset = function(e3, t3) {
      if (0 === e3) return 0;
      const n3 = (function(e4, t4) {
        const n4 = new L(t4, e4);
        let i4 = n4.prevCodePoint();
        for (; M(i4) || 65039 === i4 || 8419 === i4; ) {
          if (0 === n4.offset) return;
          i4 = n4.prevCodePoint();
        }
        if (!N(i4)) return;
        let r3 = n4.offset;
        if (r3 > 0) {
          8205 === n4.prevCodePoint() && (r3 = n4.offset);
        }
        return r3;
      })(e3, t3);
      if (void 0 !== n3) return n3;
      const i3 = new L(t3, e3);
      return i3.prevCodePoint(), i3.offset;
    }, t2.punycodeEncode = k, t2.toPunycodeACE = function(e3) {
      let t3 = false;
      for (let n3 = 0; n3 < e3.length; n3++) if (e3.charCodeAt(n3) >= 128) {
        t3 = true;
        break;
      }
      if (!t3) return e3;
      return "xn--" + k(e3);
    };
    const i2 = n2(970), r2 = n2(349);
    const s2 = /{(\d+)}/g;
    const o = /{([^}]+)}/g;
    function a(e3) {
      return e3.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
    }
    function u(e3, t3) {
      if (!e3 || !t3) return e3;
      const n3 = t3.length;
      let i3 = 0;
      if (1 === n3) {
        const n4 = t3.charCodeAt(0);
        for (; i3 < e3.length && e3.charCodeAt(i3) === n4; ) i3++;
      } else for (; e3.startsWith(t3, i3); ) i3 += n3;
      return e3.substring(i3);
    }
    function l(e3, t3) {
      if (!e3 || !t3) return e3;
      const n3 = t3.length, i3 = e3.length;
      if (1 === n3) {
        let n4 = i3;
        const r4 = t3.charCodeAt(0);
        for (; n4 > 0 && e3.charCodeAt(n4 - 1) === r4; ) n4--;
        return e3.substring(0, n4);
      }
      let r3 = i3;
      for (; r3 > 0 && e3.endsWith(t3, r3); ) r3 -= n3;
      return e3.substring(0, r3);
    }
    function h(e3) {
      for (let t3 = 0, n3 = e3.length; t3 < n3; t3++) {
        const n4 = e3.charCodeAt(t3);
        if (32 !== n4 && 9 !== n4) return t3;
      }
      return -1;
    }
    function c(e3, t3, n3 = 0, i3 = e3.length, r3 = 0, s3 = t3.length) {
      for (; n3 < i3 && r3 < s3; n3++, r3++) {
        const i4 = e3.charCodeAt(n3), s4 = t3.charCodeAt(r3);
        if (i4 < s4) return -1;
        if (i4 > s4) return 1;
      }
      const o2 = i3 - n3, a2 = s3 - r3;
      return o2 < a2 ? -1 : o2 > a2 ? 1 : 0;
    }
    function f(e3, t3, n3 = 0, i3 = e3.length, r3 = 0, s3 = t3.length) {
      for (; n3 < i3 && r3 < s3; n3++, r3++) {
        let o3 = e3.charCodeAt(n3), a3 = t3.charCodeAt(r3);
        if (o3 === a3) continue;
        if (o3 >= 128 || a3 >= 128) return c(e3.toLowerCase(), t3.toLowerCase(), n3, i3, r3, s3);
        d(o3) && (o3 -= 32), d(a3) && (a3 -= 32);
        const u2 = o3 - a3;
        if (0 !== u2) return u2;
      }
      const o2 = i3 - n3, a2 = s3 - r3;
      return o2 < a2 ? -1 : o2 > a2 ? 1 : 0;
    }
    function d(e3) {
      return e3 >= 97 && e3 <= 122;
    }
    function g(e3) {
      return 55296 <= e3 && e3 <= 56319;
    }
    function m(e3) {
      return 56320 <= e3 && e3 <= 57343;
    }
    function p(e3, t3) {
      return t3 - 56320 + (e3 - 55296 << 10) + 65536;
    }
    function b(e3, t3, n3) {
      const i3 = e3.charCodeAt(n3);
      if (g(i3) && n3 + 1 < t3) {
        const t4 = e3.charCodeAt(n3 + 1);
        if (m(t4)) return p(i3, t4);
      }
      return i3;
    }
    class L {
      get offset() {
        return this._offset;
      }
      constructor(e3, t3 = 0) {
        this._str = e3, this._len = e3.length, this._offset = t3;
      }
      setOffset(e3) {
        this._offset = e3;
      }
      prevCodePoint() {
        const e3 = (function(e4, t3) {
          const n3 = e4.charCodeAt(t3 - 1);
          if (m(n3) && t3 > 1) {
            const i3 = e4.charCodeAt(t3 - 2);
            if (g(i3)) return p(i3, n3);
          }
          return n3;
        })(this._str, this._offset);
        return this._offset -= e3 >= 65536 ? 2 : 1, e3;
      }
      nextCodePoint() {
        const e3 = b(this._str, this._len, this._offset);
        return this._offset += e3 >= 65536 ? 2 : 1, e3;
      }
      eol() {
        return this._offset >= this._len;
      }
    }
    t2.CodePointIterator = L;
    class _ {
      get offset() {
        return this._iterator.offset;
      }
      constructor(e3, t3 = 0) {
        this._iterator = new L(e3, t3);
      }
      nextGraphemeLength() {
        const e3 = A.getInstance(), t3 = this._iterator, n3 = t3.offset;
        let i3 = e3.getGraphemeBreakType(t3.nextCodePoint());
        for (; !t3.eol(); ) {
          const n4 = t3.offset, r3 = e3.getGraphemeBreakType(t3.nextCodePoint());
          if (D(i3, r3)) {
            t3.setOffset(n4);
            break;
          }
          i3 = r3;
        }
        return t3.offset - n3;
      }
      prevGraphemeLength() {
        const e3 = A.getInstance(), t3 = this._iterator, n3 = t3.offset;
        let i3 = e3.getGraphemeBreakType(t3.prevCodePoint());
        for (; t3.offset > 0; ) {
          const n4 = t3.offset, r3 = e3.getGraphemeBreakType(t3.prevCodePoint());
          if (D(r3, i3)) {
            t3.setOffset(n4);
            break;
          }
          i3 = r3;
        }
        return n3 - t3.offset;
      }
      eol() {
        return this._iterator.eol();
      }
    }
    function v(e3, t3) {
      return new _(e3, t3).nextGraphemeLength();
    }
    function E(e3, t3) {
      return new _(e3, t3).prevGraphemeLength();
    }
    let w;
    t2.GraphemeIterator = _;
    const y = /^[\t\n\r\x20-\x7E]*$/;
    function N(e3) {
      return e3 >= 127462 && e3 <= 127487 || 8986 === e3 || 8987 === e3 || 9200 === e3 || 9203 === e3 || e3 >= 9728 && e3 <= 10175 || 11088 === e3 || 11093 === e3 || e3 >= 127744 && e3 <= 128591 || e3 >= 128640 && e3 <= 128764 || e3 >= 128992 && e3 <= 129008 || e3 >= 129280 && e3 <= 129535 || e3 >= 129648 && e3 <= 129782;
    }
    t2.UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/;
    const R = new RegExp("(?:" + [/(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/.source, /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/.source, /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/.source].join("|") + ")", "g");
    function C(e3) {
      return e3 && (e3 = e3.replace(R, "")), e3;
    }
    const x = /\\\[.*?\\\]/g;
    function S(e3) {
      return !!(e3 && e3.length > 0 && 65279 === e3.charCodeAt(0));
    }
    function D(e3, t3) {
      return 0 === e3 ? 5 !== t3 && 7 !== t3 : (2 !== e3 || 3 !== t3) && (4 === e3 || 2 === e3 || 3 === e3 || (4 === t3 || 2 === t3 || 3 === t3 || (8 !== e3 || 8 !== t3 && 9 !== t3 && 11 !== t3 && 12 !== t3) && ((11 !== e3 && 9 !== e3 || 9 !== t3 && 10 !== t3) && ((12 !== e3 && 10 !== e3 || 10 !== t3) && (5 !== t3 && 13 !== t3 && (7 !== t3 && (1 !== e3 && ((13 !== e3 || 14 !== t3) && (6 !== e3 || 6 !== t3)))))))));
    }
    t2.UTF8_BOM_CHARACTER = String.fromCharCode(65279);
    class A {
      static {
        this._INSTANCE = null;
      }
      static getInstance() {
        return A._INSTANCE || (A._INSTANCE = new A()), A._INSTANCE;
      }
      constructor() {
        this._data = JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
      }
      getGraphemeBreakType(e3) {
        if (e3 < 32) return 10 === e3 ? 3 : 13 === e3 ? 2 : 4;
        if (e3 < 127) return 0;
        const t3 = this._data, n3 = t3.length / 3;
        let i3 = 1;
        for (; i3 <= n3; ) if (e3 < t3[3 * i3]) i3 *= 2;
        else {
          if (!(e3 > t3[3 * i3 + 1])) return t3[3 * i3 + 2];
          i3 = 2 * i3 + 1;
        }
        return 0;
      }
    }
    function M(e3) {
      return 127995 <= e3 && e3 <= 127999;
    }
    t2.noBreakWhitespace = " ";
    class O {
      static {
        this.ambiguousCharacterData = new r2.Lazy(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}'));
      }
      static {
        this.cache = new i2.LRUCachedFunction((e3) => {
          const t3 = e3.split(",");
          function n3(e4) {
            const t4 = /* @__PURE__ */ new Map();
            for (let n4 = 0; n4 < e4.length; n4 += 2) t4.set(e4[n4], e4[n4 + 1]);
            return t4;
          }
          function i3(e4, t4) {
            if (!e4) return t4;
            const n4 = /* @__PURE__ */ new Map();
            for (const [i4, r4] of e4) t4.has(i4) && n4.set(i4, r4);
            return n4;
          }
          const r3 = this.ambiguousCharacterData.value;
          let s3, o2 = t3.filter((e4) => !e4.startsWith("_") && e4 in r3);
          0 === o2.length && (o2 = ["_default"]);
          for (const e4 of o2) {
            s3 = i3(s3, n3(r3[e4]));
          }
          const a2 = (function(e4, t4) {
            const n4 = new Map(e4);
            for (const [e5, i4] of t4) n4.set(e5, i4);
            return n4;
          })(n3(r3._common), s3);
          return new O(a2);
        });
      }
      static getInstance(e3) {
        return O.cache.get(Array.from(e3).join(","));
      }
      static {
        this._locales = new r2.Lazy(() => Object.keys(O.ambiguousCharacterData.value).filter((e3) => !e3.startsWith("_")));
      }
      static getLocales() {
        return O._locales.value;
      }
      constructor(e3) {
        this.confusableDictionary = e3;
      }
      isAmbiguous(e3) {
        return this.confusableDictionary.has(e3);
      }
      containsAmbiguousCharacter(e3) {
        for (let t3 = 0; t3 < e3.length; t3++) {
          const n3 = e3.codePointAt(t3);
          if ("number" == typeof n3 && this.isAmbiguous(n3)) return true;
        }
        return false;
      }
      getPrimaryConfusable(e3) {
        return this.confusableDictionary.get(e3);
      }
      getConfusableCodePoints() {
        return new Set(this.confusableDictionary.keys());
      }
    }
    t2.AmbiguousCharacters = O;
    class P {
      static getRawData() {
        return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
      }
      static {
        this._data = void 0;
      }
      static getData() {
        return this._data || (this._data = new Set([...Object.values(P.getRawData())].flat())), this._data;
      }
      static isInvisibleCharacter(e3) {
        return P.getData().has(e3);
      }
      static containsInvisibleCharacter(e3) {
        for (let t3 = 0; t3 < e3.length; t3++) {
          const n3 = e3.codePointAt(t3);
          if ("number" == typeof n3 && (P.isInvisibleCharacter(n3) || 32 === n3)) return true;
        }
        return false;
      }
      static get codePoints() {
        return P.getData();
      }
    }
    function T(e3) {
      return e3 < 26 ? 97 + e3 : 48 + e3 - 26;
    }
    function I(e3, t3, n3) {
      e3 = n3 ? Math.floor(e3 / 700) : e3 >> 1, e3 += Math.floor(e3 / t3);
      let i3 = 0;
      for (; e3 > 455; ) e3 = Math.floor(e3 / 35), i3 += 36;
      return i3 + Math.floor(36 * e3 / (e3 + 38));
    }
    function k(e3) {
      const t3 = [], n3 = [], i3 = new L(e3);
      for (; !i3.eol(); ) {
        const e4 = i3.nextCodePoint();
        if (e4 >= 55296 && e4 <= 57343) throw new Error("Invalid surrogate pair in input");
        n3.push(e4);
      }
      let r3 = 0;
      for (const e4 of n3) e4 < 128 && (t3.push(e4), r3++);
      const s3 = r3;
      r3 > 0 && r3 < n3.length && t3.push(45);
      let o2 = 128, a2 = 0, u2 = 72, l2 = s3;
      for (; l2 < n3.length; ) {
        let e4 = 1114111;
        for (const t4 of n3) t4 >= o2 && t4 < e4 && (e4 = t4);
        const i4 = (e4 - o2) * (l2 + 1);
        if (a2 > Number.MAX_SAFE_INTEGER - i4) throw new Error("Punycode overflow");
        a2 += i4, o2 = e4;
        for (const e5 of n3) if (e5 < o2) {
          if (a2++, 0 === a2) throw new Error("Punycode overflow");
        } else if (e5 === o2) {
          let e6 = a2;
          for (let n4 = 36; ; n4 += 36) {
            const i5 = n4 <= u2 ? 1 : n4 >= u2 + 26 ? 26 : n4 - u2;
            if (e6 < i5) break;
            const r4 = i5 + (e6 - i5) % (36 - i5);
            t3.push(T(r4)), e6 = Math.floor((e6 - i5) / (36 - i5));
          }
          t3.push(T(e6)), u2 = I(a2, l2 + 1, l2 === s3), a2 = 0, l2++;
        }
        a2++, o2++;
      }
      let h2 = "";
      for (const e4 of t3) h2 += String.fromCharCode(e4);
      return h2;
    }
    t2.InvisibleCharacters = P;
    var q = n2(701);
    Object.defineProperty(t2, "normalizeEOL", { enumerable: true, get: function() {
      return q.normalizeEOL;
    } }), Object.defineProperty(t2, "maskEmail", { enumerable: true, get: function() {
      return q.maskEmail;
    } });
  }, 613: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.computeMovedLines = function(e3, t3, n3, i3, l2, c2) {
      let { moves: f2, excludedChanges: g } = (function(e4, t4, n4, i4) {
        const s3 = [], o2 = e4.filter((e5) => e5.modified.isEmpty && e5.original.length >= 3).map((e5) => new h.LineRangeFragment(e5.original, t4, e5)), a2 = new Set(e4.filter((e5) => e5.original.isEmpty && e5.modified.length >= 3).map((e5) => new h.LineRangeFragment(e5.modified, n4, e5))), u2 = /* @__PURE__ */ new Set();
        for (const e5 of o2) {
          let t5, n5 = -1;
          for (const i5 of a2) {
            const r3 = e5.computeSimilarity(i5);
            r3 > n5 && (n5 = r3, t5 = i5);
          }
          if (n5 > 0.9 && t5 && (a2.delete(t5), s3.push(new r2.LineRangeMapping(e5.range, t5.range)), u2.add(e5.source), u2.add(t5.source)), !i4.isValid()) return { moves: s3, excludedChanges: u2 };
        }
        return { moves: s3, excludedChanges: u2 };
      })(e3, t3, n3, c2);
      if (!c2.isValid()) return [];
      const m = (function(e4, t4, n4, i4, l3, h2) {
        const c3 = [], f3 = new a.SetMap();
        for (const n5 of e4) for (let e5 = n5.original.startLineNumber; e5 < n5.original.endLineNumberExclusive - 2; e5++) {
          const n6 = `${t4[e5 - 1]}:${t4[e5 + 1 - 1]}:${t4[e5 + 2 - 1]}`;
          f3.add(n6, { range: new u.LineRange(e5, e5 + 3) });
        }
        const g2 = [];
        e4.sort((0, s2.compareBy)((e5) => e5.modified.startLineNumber, s2.numberComparator));
        for (const t5 of e4) {
          let e5 = [];
          for (let i5 = t5.modified.startLineNumber; i5 < t5.modified.endLineNumberExclusive - 2; i5++) {
            const t6 = `${n4[i5 - 1]}:${n4[i5 + 1 - 1]}:${n4[i5 + 2 - 1]}`, r3 = new u.LineRange(i5, i5 + 3), s3 = [];
            f3.forEach(t6, ({ range: t7 }) => {
              for (const n6 of e5) if (n6.originalLineRange.endLineNumberExclusive + 1 === t7.endLineNumberExclusive && n6.modifiedLineRange.endLineNumberExclusive + 1 === r3.endLineNumberExclusive) return n6.originalLineRange = new u.LineRange(n6.originalLineRange.startLineNumber, t7.endLineNumberExclusive), n6.modifiedLineRange = new u.LineRange(n6.modifiedLineRange.startLineNumber, r3.endLineNumberExclusive), void s3.push(n6);
              const n5 = { modifiedLineRange: r3, originalLineRange: t7 };
              g2.push(n5), s3.push(n5);
            }), e5 = s3;
          }
          if (!h2.isValid()) return [];
        }
        g2.sort((0, s2.reverseOrder)((0, s2.compareBy)((e5) => e5.modifiedLineRange.length, s2.numberComparator)));
        const m2 = new u.LineRangeSet(), p = new u.LineRangeSet();
        for (const e5 of g2) {
          const t5 = e5.modifiedLineRange.startLineNumber - e5.originalLineRange.startLineNumber, n5 = m2.subtractFrom(e5.modifiedLineRange), i5 = p.subtractFrom(e5.originalLineRange).getWithDelta(t5), s3 = n5.getIntersection(i5);
          for (const e6 of s3.ranges) {
            if (e6.length < 3) continue;
            const n6 = e6, i6 = e6.delta(-t5);
            c3.push(new r2.LineRangeMapping(i6, n6)), m2.addRange(n6), p.addRange(i6);
          }
        }
        c3.sort((0, s2.compareBy)((e5) => e5.original.startLineNumber, s2.numberComparator));
        const b = new o.MonotonousArray(e4);
        for (let t5 = 0; t5 < c3.length; t5++) {
          const n5 = c3[t5], s3 = b.findLastMonotonous((e5) => e5.original.startLineNumber <= n5.original.startLineNumber), a2 = (0, o.findLastMonotonous)(e4, (e5) => e5.modified.startLineNumber <= n5.modified.startLineNumber), f4 = Math.max(n5.original.startLineNumber - s3.original.startLineNumber, n5.modified.startLineNumber - a2.modified.startLineNumber), g3 = b.findLastMonotonous((e5) => e5.original.startLineNumber < n5.original.endLineNumberExclusive), L = (0, o.findLastMonotonous)(e4, (e5) => e5.modified.startLineNumber < n5.modified.endLineNumberExclusive), _ = Math.max(g3.original.endLineNumberExclusive - n5.original.endLineNumberExclusive, L.modified.endLineNumberExclusive - n5.modified.endLineNumberExclusive);
          let v, E;
          for (v = 0; v < f4; v++) {
            const e5 = n5.original.startLineNumber - v - 1, t6 = n5.modified.startLineNumber - v - 1;
            if (e5 > i4.length || t6 > l3.length) break;
            if (m2.contains(t6) || p.contains(e5)) break;
            if (!d(i4[e5 - 1], l3[t6 - 1], h2)) break;
          }
          for (v > 0 && (p.addRange(new u.LineRange(n5.original.startLineNumber - v, n5.original.startLineNumber)), m2.addRange(new u.LineRange(n5.modified.startLineNumber - v, n5.modified.startLineNumber))), E = 0; E < _; E++) {
            const e5 = n5.original.endLineNumberExclusive + E, t6 = n5.modified.endLineNumberExclusive + E;
            if (e5 > i4.length || t6 > l3.length) break;
            if (m2.contains(t6) || p.contains(e5)) break;
            if (!d(i4[e5 - 1], l3[t6 - 1], h2)) break;
          }
          E > 0 && (p.addRange(new u.LineRange(n5.original.endLineNumberExclusive, n5.original.endLineNumberExclusive + E)), m2.addRange(new u.LineRange(n5.modified.endLineNumberExclusive, n5.modified.endLineNumberExclusive + E))), (v > 0 || E > 0) && (c3[t5] = new r2.LineRangeMapping(new u.LineRange(n5.original.startLineNumber - v, n5.original.endLineNumberExclusive + E), new u.LineRange(n5.modified.startLineNumber - v, n5.modified.endLineNumberExclusive + E)));
        }
        return c3;
      })(e3.filter((e4) => !g.has(e4)), i3, l2, t3, n3, c2);
      return (0, s2.pushMany)(f2, m), f2 = (function(e4) {
        if (0 === e4.length) return e4;
        e4.sort((0, s2.compareBy)((e5) => e5.original.startLineNumber, s2.numberComparator));
        const t4 = [e4[0]];
        for (let n4 = 1; n4 < e4.length; n4++) {
          const i4 = t4[t4.length - 1], r3 = e4[n4], s3 = r3.original.startLineNumber - i4.original.endLineNumberExclusive, o2 = r3.modified.startLineNumber - i4.modified.endLineNumberExclusive;
          s3 >= 0 && o2 >= 0 && s3 + o2 <= 2 ? t4[t4.length - 1] = i4.join(r3) : t4.push(r3);
        }
        return t4;
      })(f2), f2 = f2.filter((e4) => {
        const n4 = e4.original.toOffsetRange().slice(t3).map((e5) => e5.trim());
        return n4.join("\n").length >= 15 && (function(e5, t4) {
          let n5 = 0;
          for (const i4 of e5) t4(i4) && n5++;
          return n5;
        })(n4, (e5) => e5.length >= 2) >= 2;
      }), f2 = (function(e4, t4) {
        const n4 = new o.MonotonousArray(e4);
        return t4 = t4.filter((t5) => (n4.findLastMonotonous((e5) => e5.original.startLineNumber < t5.original.endLineNumberExclusive) || new r2.LineRangeMapping(new u.LineRange(1, 1), new u.LineRange(1, 1))) !== (0, o.findLastMonotonous)(e4, (e5) => e5.modified.startLineNumber < t5.modified.endLineNumberExclusive));
      })(e3, f2), f2;
    };
    const i2 = n2(933), r2 = n2(90), s2 = n2(501), o = n2(270), a = n2(281), u = n2(496), l = n2(62), h = n2(891), c = n2(175), f = n2(298);
    function d(e3, t3, n3) {
      if (e3.trim() === t3.trim()) return true;
      if (e3.length > 300 && t3.length > 300) return false;
      const r3 = new c.MyersDiffAlgorithm().compute(new l.LinesSliceCharSequence([e3], new f.Range(1, 1, 1, e3.length), false), new l.LinesSliceCharSequence([t3], new f.Range(1, 1, 1, t3.length), false), n3);
      let s3 = 0;
      const o2 = i2.SequenceDiff.invert(r3.diffs, e3.length);
      for (const t4 of o2) t4.seq1Range.forEach((t5) => {
        (0, h.isSpace)(e3.charCodeAt(t5)) || s3++;
      });
      const a2 = (function(t4) {
        let n4 = 0;
        for (let i3 = 0; i3 < e3.length; i3++) (0, h.isSpace)(t4.charCodeAt(i3)) || n4++;
        return n4;
      })(e3.length > t3.length ? e3 : t3);
      return s3 / a2 > 0.6 && a2 > 10;
    }
  }, 620: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.StreamingDPDiffing = void 0;
    const i2 = n2(991), r2 = n2(933), s2 = n2(891);
    t2.StreamingDPDiffing = class {
      compute(e3, t3, n3 = r2.InfiniteTimeout.instance, o) {
        if (0 === e3.length || 0 === t3.length) return r2.DiffAlgorithmResult.trivial(e3, t3);
        const a = new s2.Array2D(2 * e3.length + 1, t3.length + 1), u = new s2.Array2D(2 * e3.length + 1, t3.length + 1);
        for (let e4 = 0; e4 <= t3.length; e4++) a.set(0, e4, e4), e4 > 0 ? u.set(0, e4, true) : u.set(0, e4, false);
        for (let t4 = 0; t4 <= 2 * e3.length; t4++) a.set(t4, 0, Math.floor((t4 + 1) / 2)), u.set(t4, 0, false);
        for (let i3 = 1; i3 <= t3.length; i3++) for (let s3 = 1; s3 <= 2 * e3.length; s3++) {
          if (!n3.isValid()) return r2.DiffAlgorithmResult.trivialTimedOut(e3, t3);
          if (s3 % 2 == 0) {
            const e4 = a.get(s3, i3 - 1) + 1, t4 = a.get(s3 - 1, i3);
            e4 < t4 ? (a.set(s3, i3, e4), u.set(s3, i3, true)) : (a.set(s3, i3, t4), u.set(s3, i3, false));
          } else {
            const n4 = a.get(s3 - 1, i3) + 0.4, r3 = e3.getElement(Math.floor(s3 / 2)) === t3.getElement(i3 - 1) ? a.get(s3 - 1, i3 - 1) : Number.MAX_VALUE;
            r3 < n4 ? (a.set(s3, i3, r3), u.set(s3, i3, true)) : (a.set(s3, i3, n4), u.set(s3, i3, false));
          }
        }
        let l = Number.MAX_VALUE, h = -1;
        for (let n4 = 0; n4 <= 2 * e3.length; n4++) {
          const e4 = a.get(n4, t3.length);
          e4 < l && (l = e4, h = n4);
        }
        let c, f = [], d = h, g = t3.length;
        for (d <= 2 * e3.length - 2 && f.push(new r2.SequenceDiff(new i2.OffsetRange(Math.floor((d + 1) / 2), e3.length), new i2.OffsetRange(g, g))); d >= 0 && g >= 0; ) u.get(d, g) ? d % 2 == 0 ? (void 0 === c && (c = { x: Math.floor(d / 2), y: g }), g -= 1) : (void 0 !== c && (c.x === Math.floor(d / 2) + 1 && c.y === g || f.push(new r2.SequenceDiff(new i2.OffsetRange(Math.floor(d / 2) + 1, c.x), new i2.OffsetRange(g, c.y))), c = void 0), d -= 1, g -= 1) : (void 0 === c && (c = { x: Math.floor((d + 1) / 2), y: g }), d -= 1);
        return void 0 !== c && (c.x === Math.floor(d / 2) + 1 && c.y === g || f.push(new r2.SequenceDiff(new i2.OffsetRange(Math.floor(d / 2) + 1, c.x), new i2.OffsetRange(g, c.y))), c = void 0), f.reverse(), new r2.DiffAlgorithmResult(f, false);
      }
    };
  }, 625: function(e2, t2, n2) {
    var i2, r2 = this && this.__createBinding || (Object.create ? function(e3, t3, n3, i3) {
      void 0 === i3 && (i3 = n3);
      var r3 = Object.getOwnPropertyDescriptor(t3, n3);
      r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
        return t3[n3];
      } }), Object.defineProperty(e3, i3, r3);
    } : function(e3, t3, n3, i3) {
      void 0 === i3 && (i3 = n3), e3[i3] = t3[n3];
    }), s2 = this && this.__setModuleDefault || (Object.create ? function(e3, t3) {
      Object.defineProperty(e3, "default", { enumerable: true, value: t3 });
    } : function(e3, t3) {
      e3.default = t3;
    }), o = this && this.__importStar || (i2 = function(e3) {
      return i2 = Object.getOwnPropertyNames || function(e4) {
        var t3 = [];
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t3[t3.length] = n3);
        return t3;
      }, i2(e3);
    }, function(e3) {
      if (e3 && e3.__esModule) return e3;
      var t3 = {};
      if (null != e3) for (var n3 = i2(e3), o2 = 0; o2 < n3.length; o2++) "default" !== n3[o2] && r2(t3, e3, n3[o2]);
      return s2(t3, e3), t3;
    });
    Object.defineProperty(t2, "__esModule", { value: true }), t2.VSBuffer = void 0, t2.withVSBufferDecodeContext = function(e3, t3) {
      const n3 = m;
      m = e3;
      try {
        return t3();
      } finally {
        m = n3;
      }
    }, t2.getCurrentVSBufferDecodeContext = function() {
      return m;
    }, t2.setOversizeVSBufferDecodeThreshold = function(e3) {
      _ = e3;
    }, t2.setOversizeVSBufferDecodeHandler = function(e3) {
      d = e3;
    }, t2.setLargeVSBufferAllocationThreshold = function(e3) {
      v = e3;
    }, t2.setLargeVSBufferAllocationHandler = function(e3) {
      g = e3;
    }, t2.binaryIndexOf = y, t2.readUInt16LE = function(e3, t3) {
      return (e3[t3 + 0] | 0) >>> 0 | e3[t3 + 1] << 8 >>> 0;
    }, t2.writeUInt16LE = function(e3, t3, n3) {
      e3[n3 + 0] = 255 & t3, t3 >>>= 8, e3[n3 + 1] = 255 & t3;
    }, t2.readUInt32BE = N, t2.writeUInt32BE = R, t2.readUInt32LE = C, t2.writeUInt32LE = x, t2.readUInt8 = S, t2.writeUInt8 = D, t2.readableToBuffer = function(e3) {
      return u.consumeReadable(e3, (e4) => w.concat(e4));
    }, t2.bufferToReadable = function(e3) {
      return u.toReadable(e3);
    }, t2.streamToBuffer = A, t2.bufferedStreamToBuffer = async function(e3) {
      if (e3.ended) return w.concat(e3.buffer);
      return w.concat([...e3.buffer, await A(e3.stream)]);
    }, t2.bufferToStream = function(e3) {
      return u.toStream(e3, (e4) => w.concat(e4));
    }, t2.streamToBufferReadableStream = function(e3) {
      return u.transform(e3, { data: (e4) => "string" == typeof e4 ? w.fromString(e4) : w.wrap(e4) }, (e4) => w.concat(e4));
    }, t2.newWriteableBufferStream = function(e3) {
      return u.newWriteableStream((e4) => w.concat(e4), e3);
    }, t2.prefixedBufferReadable = function(e3, t3) {
      return u.prefixedReadable(e3, t3, (e4) => w.concat(e4));
    }, t2.prefixedBufferStream = function(e3, t3) {
      return u.prefixedStream(e3, t3, (e4) => w.concat(e4));
    }, t2.decodeBase64 = M, t2.decodeJwt = function(e3) {
      const t3 = M(e3.split(".")[1]);
      return JSON.parse(t3.toString());
    }, t2.encodeBase64 = function({ buffer: e3 }, t3 = true, n3 = false) {
      const i3 = e3.toBase64;
      if ("function" == typeof i3) return i3.call(e3, { alphabet: n3 ? "base64url" : "base64", omitPadding: !t3 });
      const r3 = n3 ? P : O;
      let s3 = "";
      const o2 = e3.byteLength % 3;
      let a2 = 0;
      for (; a2 < e3.byteLength - o2; a2 += 3) {
        const t4 = e3[a2 + 0], n4 = e3[a2 + 1], i4 = e3[a2 + 2];
        s3 += r3[t4 >>> 2], s3 += r3[63 & (t4 << 4 | n4 >>> 4)], s3 += r3[63 & (n4 << 2 | i4 >>> 6)], s3 += r3[63 & i4];
      }
      if (1 === o2) {
        const n4 = e3[a2 + 0];
        s3 += r3[n4 >>> 2], s3 += r3[n4 << 4 & 63], t3 && (s3 += "==");
      } else if (2 === o2) {
        const n4 = e3[a2 + 0], i4 = e3[a2 + 1];
        s3 += r3[n4 >>> 2], s3 += r3[63 & (n4 << 4 | i4 >>> 4)], s3 += r3[i4 << 2 & 63], t3 && (s3 += "=");
      }
      return s3;
    };
    const a = n2(349), u = o(n2(247)), l = "undefined" != typeof Buffer, h = new a.Lazy(() => new Uint8Array(256));
    let c, f;
    let d, g, m, p = null, b = false, L = false, _ = 1 / 0, v = 1 / 0;
    function E(e3, t3) {
      if (g && e3.byteLength >= v) try {
        g({ buffer: e3, byteLength: e3.byteLength, source: t3 });
      } catch {
      }
    }
    class w {
      static alloc(e3) {
        let t3;
        return t3 = new w(l ? Buffer.allocUnsafe(e3) : new Uint8Array(e3)), E(t3, "alloc"), t3;
      }
      static wrap(e3) {
        l && !Buffer.isBuffer(e3) && (e3 = Buffer.from(e3.buffer, e3.byteOffset, e3.byteLength));
        const t3 = new w(e3);
        return E(t3, "wrap"), t3;
      }
      static fromString(e3, t3) {
        return !(t3?.dontUseNodeBuffer || false) && l ? new w(Buffer.from(e3)) : (c || (c = new TextEncoder()), new w(c.encode(e3)));
      }
      static withPooledString(e3, t3) {
        if (l) return t3(w.fromString(e3));
        if (b) return L || (L = true, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), t3(w.fromString(e3));
        const n3 = 3 * e3.length;
        if (n3 > 524288) return t3(w.fromString(e3));
        if (c || (c = new TextEncoder()), !p || p.byteLength < n3) {
          let e4 = p ? 2 * p.byteLength : 16384;
          for (; e4 < n3; ) e4 *= 2;
          p = new Uint8Array(e4);
        }
        const i3 = c.encodeInto(e3, p).written;
        b = true;
        try {
          return t3(new w(p.subarray(0, i3)));
        } finally {
          b = false;
        }
      }
      static fromByteArray(e3) {
        const t3 = w.alloc(e3.length);
        for (let n3 = 0, i3 = e3.length; n3 < i3; n3++) t3.buffer[n3] = e3[n3];
        return t3;
      }
      static concat(e3, t3) {
        if (void 0 === t3) {
          t3 = 0;
          for (let n4 = 0, i4 = e3.length; n4 < i4; n4++) t3 += e3[n4].byteLength;
        }
        const n3 = w.alloc(t3);
        let i3 = 0;
        for (let t4 = 0, r3 = e3.length; t4 < r3; t4++) {
          const r4 = e3[t4];
          n3.set(r4, i3), i3 += r4.byteLength;
        }
        return n3;
      }
      constructor(e3) {
        this.buffer = e3, this.byteLength = this.buffer.byteLength;
      }
      clone() {
        const e3 = w.alloc(this.byteLength);
        return e3.set(this), e3;
      }
      toString() {
        if (l) return this.buffer.toString();
        if (d && this.buffer.byteLength > _) try {
          d(this.buffer.byteLength);
        } catch {
        }
        return f || (f = new TextDecoder()), f.decode(this.buffer);
      }
      slice(e3, t3) {
        return new w(this.buffer.subarray(e3, t3));
      }
      set(e3, t3) {
        if (e3 instanceof w) this.buffer.set(e3.buffer, t3);
        else if (e3 instanceof Uint8Array) this.buffer.set(e3, t3);
        else if (e3 instanceof ArrayBuffer) this.buffer.set(new Uint8Array(e3), t3);
        else {
          if (!ArrayBuffer.isView(e3)) throw new Error("Unknown argument 'array'");
          this.buffer.set(new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength), t3);
        }
      }
      readUInt32BE(e3) {
        return N(this.buffer, e3);
      }
      writeUInt32BE(e3, t3) {
        R(this.buffer, e3, t3);
      }
      readUInt32LE(e3) {
        return C(this.buffer, e3);
      }
      writeUInt32LE(e3, t3) {
        x(this.buffer, e3, t3);
      }
      readUInt8(e3) {
        return S(this.buffer, e3);
      }
      writeUInt8(e3, t3) {
        D(this.buffer, e3, t3);
      }
      indexOf(e3, t3 = 0) {
        return y(this.buffer, e3 instanceof w ? e3.buffer : e3, t3);
      }
      equals(e3) {
        return this === e3 || this.byteLength === e3.byteLength && this.buffer.every((t3, n3) => t3 === e3.buffer[n3]);
      }
    }
    function y(e3, t3, n3 = 0) {
      const i3 = t3.byteLength, r3 = e3.byteLength;
      if (0 === i3) return 0;
      if (1 === i3) return e3.indexOf(t3[0]);
      if (i3 > r3 - n3) return -1;
      const s3 = h.value;
      s3.fill(t3.length);
      for (let e4 = 0; e4 < t3.length; e4++) s3[t3[e4]] = t3.length - e4 - 1;
      let o2 = n3 + t3.length - 1, a2 = o2, u2 = -1;
      for (; o2 < r3; ) if (e3[o2] === t3[a2]) {
        if (0 === a2) {
          u2 = o2;
          break;
        }
        o2--, a2--;
      } else o2 += Math.max(t3.length - a2, s3[e3[o2]]), a2 = t3.length - 1;
      return u2;
    }
    function N(e3, t3) {
      return e3[t3] * 2 ** 24 + 65536 * e3[t3 + 1] + 256 * e3[t3 + 2] + e3[t3 + 3];
    }
    function R(e3, t3, n3) {
      e3[n3 + 3] = t3, t3 >>>= 8, e3[n3 + 2] = t3, t3 >>>= 8, e3[n3 + 1] = t3, t3 >>>= 8, e3[n3] = t3;
    }
    function C(e3, t3) {
      return (e3[t3 + 0] | 0) >>> 0 | e3[t3 + 1] << 8 >>> 0 | e3[t3 + 2] << 16 >>> 0 | e3[t3 + 3] << 24 >>> 0;
    }
    function x(e3, t3, n3) {
      e3[n3 + 0] = 255 & t3, t3 >>>= 8, e3[n3 + 1] = 255 & t3, t3 >>>= 8, e3[n3 + 2] = 255 & t3, t3 >>>= 8, e3[n3 + 3] = 255 & t3;
    }
    function S(e3, t3) {
      return e3[t3];
    }
    function D(e3, t3, n3) {
      e3[n3] = t3;
    }
    function A(e3) {
      return u.consumeStream(e3, (e4) => 1 === e4.length ? e4[0] : w.concat(e4));
    }
    function M(e3) {
      let t3 = 0, n3 = 0, i3 = 0;
      const r3 = new Uint8Array(Math.floor(e3.length / 4 * 3)), s3 = (e4) => {
        switch (n3) {
          case 3:
            r3[i3++] = t3 | e4, n3 = 0;
            break;
          case 2:
            r3[i3++] = t3 | e4 >>> 2, t3 = e4 << 6, n3 = 3;
            break;
          case 1:
            r3[i3++] = t3 | e4 >>> 4, t3 = e4 << 4, n3 = 2;
            break;
          default:
            t3 = e4 << 2, n3 = 1;
        }
      };
      for (let t4 = 0; t4 < e3.length; t4++) {
        const n4 = e3.charCodeAt(t4);
        if (n4 >= 65 && n4 <= 90) s3(n4 - 65);
        else if (n4 >= 97 && n4 <= 122) s3(n4 - 97 + 26);
        else if (n4 >= 48 && n4 <= 57) s3(n4 - 48 + 52);
        else if (43 === n4 || 45 === n4) s3(62);
        else {
          if (47 !== n4 && 95 !== n4) {
            if (61 === n4) break;
            throw new SyntaxError(`Unexpected base64 character ${e3[t4]}`);
          }
          s3(63);
        }
      }
      const o2 = i3;
      for (; n3 > 0; ) s3(0);
      return w.wrap(r3).slice(0, o2);
    }
    t2.VSBuffer = w;
    const O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  }, 701: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.processCarriageReturns = function(e3) {
      if (!e3) return e3;
      if (!(e3 = e3.replace(/\r\n/g, "\n")).includes("\r")) return e3;
      const t3 = e3.split("\n"), n2 = [];
      for (const e4 of t3) {
        if (!e4.includes("\r")) {
          n2.push(e4);
          continue;
        }
        let t4 = "", i2 = 0;
        for (let n3 = 0; n3 < e4.length; n3++) {
          const r2 = e4[n3];
          "\r" === r2 ? i2 = 0 : (i2 < t4.length ? t4 = t4.substring(0, i2) + r2 + t4.substring(i2 + 1) : t4 += r2, i2++);
        }
        n2.push(t4);
      }
      return n2.join("\n");
    }, t2.normalizeEOL = function(e3, t3) {
      if (!e3) return e3;
      return e3.replace(/\r\n|\n|\r/g, t3);
    }, t2.maskEmail = function(e3) {
      if (!e3) return e3;
      const t3 = e3.indexOf("@");
      if (-1 === t3) return e3;
      const n2 = e3.substring(0, t3), i2 = e3.substring(t3 + 1);
      if (0 === n2.length || 0 === i2.length) return e3;
      const r2 = n2.charAt(0) + "***", s2 = i2.indexOf(".");
      if (-1 === s2) return `${r2}@${i2.charAt(0)}***`;
      const o = i2.substring(0, s2), a = i2.substring(s2), u = o.charAt(0) + "***" + a;
      return `${r2}@${u}`;
    };
  }, 751: function(e2, t2, n2) {
    var i2, r2 = this && this.__createBinding || (Object.create ? function(e3, t3, n3, i3) {
      void 0 === i3 && (i3 = n3);
      var r3 = Object.getOwnPropertyDescriptor(t3, n3);
      r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
        return t3[n3];
      } }), Object.defineProperty(e3, i3, r3);
    } : function(e3, t3, n3, i3) {
      void 0 === i3 && (i3 = n3), e3[i3] = t3[n3];
    }), s2 = this && this.__setModuleDefault || (Object.create ? function(e3, t3) {
      Object.defineProperty(e3, "default", { enumerable: true, value: t3 });
    } : function(e3, t3) {
      e3.default = t3;
    }), o = this && this.__importStar || (i2 = function(e3) {
      return i2 = Object.getOwnPropertyNames || function(e4) {
        var t3 = [];
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t3[t3.length] = n3);
        return t3;
      }, i2(e3);
    }, function(e3) {
      if (e3 && e3.__esModule) return e3;
      var t3 = {};
      if (null != e3) for (var n3 = i2(e3), o2 = 0; o2 < n3.length; o2++) "default" !== n3[o2] && r2(t3, e3, n3[o2]);
      return s2(t3, e3), t3;
    });
    Object.defineProperty(t2, "__esModule", { value: true }), t2.DiffComputer = t2.LegacyLinesDiffComputer = void 0;
    const a = n2(804), u = n2(306), l = n2(90), h = o(n2(589)), c = n2(298), f = n2(141), d = n2(496), g = 1e5;
    function m(e3, t3, n3, i3) {
      return new a.LcsDiff(e3, t3, n3).ComputeDiff(i3);
    }
    t2.LegacyLinesDiffComputer = class {
      computeDiff(e3, t3, n3) {
        const i3 = new v(e3, t3, { maxComputationTime: n3.maxComputationTimeMs, shouldIgnoreTrimWhitespace: n3.ignoreTrimWhitespace, shouldComputeCharChanges: true, shouldMakePrettyDiff: true, shouldPostProcessCharChanges: true }).computeDiff(), r3 = [];
        let s3 = null;
        for (const e4 of i3.changes) {
          let t4, n4;
          t4 = 0 === e4.originalEndLineNumber ? new d.LineRange(e4.originalStartLineNumber + 1, e4.originalStartLineNumber + 1) : new d.LineRange(e4.originalStartLineNumber, e4.originalEndLineNumber + 1), n4 = 0 === e4.modifiedEndLineNumber ? new d.LineRange(e4.modifiedStartLineNumber + 1, e4.modifiedStartLineNumber + 1) : new d.LineRange(e4.modifiedStartLineNumber, e4.modifiedEndLineNumber + 1);
          let i4 = new l.DetailedLineRangeMapping(t4, n4, e4.charChanges?.map((e5) => new l.RangeMapping(new c.Range(e5.originalStartLineNumber, e5.originalStartColumn, e5.originalEndLineNumber, e5.originalEndColumn), new c.Range(e5.modifiedStartLineNumber, e5.modifiedStartColumn, e5.modifiedEndLineNumber, e5.modifiedEndColumn))));
          s3 && (s3.modified.endLineNumberExclusive !== i4.modified.startLineNumber && s3.original.endLineNumberExclusive !== i4.original.startLineNumber || (i4 = new l.DetailedLineRangeMapping(s3.original.join(i4.original), s3.modified.join(i4.modified), s3.innerChanges && i4.innerChanges ? s3.innerChanges.concat(i4.innerChanges) : void 0), r3.pop())), r3.push(i4), s3 = i4;
        }
        return (0, f.assertFn)(() => (0, f.checkAdjacentItems)(r3, (e4, t4) => t4.original.startLineNumber - e4.original.endLineNumberExclusive === t4.modified.startLineNumber - e4.modified.endLineNumberExclusive && e4.original.endLineNumberExclusive < t4.original.startLineNumber && e4.modified.endLineNumberExclusive < t4.modified.startLineNumber)), new u.LinesDiff(r3, [], i3.quitEarly);
      }
    };
    class p {
      constructor(e3) {
        const t3 = [], n3 = [];
        for (let i3 = 0, r3 = e3.length; i3 < r3; i3++) t3[i3] = E(e3[i3], 1), n3[i3] = w(e3[i3], 1);
        this.lines = e3, this._startColumns = t3, this._endColumns = n3;
      }
      getElements() {
        const e3 = [];
        for (let t3 = 0, n3 = this.lines.length; t3 < n3; t3++) e3[t3] = this.lines[t3].substring(this._startColumns[t3] - 1, this._endColumns[t3] - 1);
        return e3;
      }
      getStrictElement(e3) {
        return this.lines[e3];
      }
      getStartLineNumber(e3) {
        return e3 + 1;
      }
      getEndLineNumber(e3) {
        return e3 + 1;
      }
      getCharLength(e3, t3, n3) {
        let i3 = 0;
        for (let r3 = t3; r3 <= n3; r3++) e3 ? i3 += this._endColumns[r3] - this._startColumns[r3] : (i3 += this.lines[r3].length, r3 < n3 && (i3 += 1));
        return i3;
      }
      createCharSequence(e3, t3, n3) {
        const i3 = [], r3 = [], s3 = [];
        let o2 = 0;
        for (let a2 = t3; a2 <= n3; a2++) {
          const t4 = this.lines[a2], u2 = e3 ? this._startColumns[a2] : 1, l2 = e3 ? this._endColumns[a2] : t4.length + 1;
          for (let e4 = u2; e4 < l2; e4++) i3[o2] = t4.charCodeAt(e4 - 1), r3[o2] = a2 + 1, s3[o2] = e4, o2++;
          !e3 && a2 < n3 && (i3[o2] = 10, r3[o2] = a2 + 1, s3[o2] = t4.length + 1, o2++);
        }
        return new b(i3, r3, s3);
      }
    }
    class b {
      constructor(e3, t3, n3) {
        this._charCodes = e3, this._lineNumbers = t3, this._columns = n3;
      }
      toString() {
        return "[" + this._charCodes.map((e3, t3) => (10 === e3 ? "\\n" : String.fromCharCode(e3)) + `-(${this._lineNumbers[t3]},${this._columns[t3]})`).join(", ") + "]";
      }
      _assertIndex(e3, t3) {
        if (e3 < 0 || e3 >= t3.length) throw new Error("Illegal index");
      }
      getElements() {
        return this._charCodes;
      }
      getStartLineNumber(e3) {
        return e3 > 0 && e3 === this._lineNumbers.length ? this.getEndLineNumber(e3 - 1) : (this._assertIndex(e3, this._lineNumbers), this._lineNumbers[e3]);
      }
      getEndLineNumber(e3) {
        return -1 === e3 ? this.getStartLineNumber(e3 + 1) : (this._assertIndex(e3, this._lineNumbers), 10 === this._charCodes[e3] ? this._lineNumbers[e3] + 1 : this._lineNumbers[e3]);
      }
      getStartColumn(e3) {
        return e3 > 0 && e3 === this._columns.length ? this.getEndColumn(e3 - 1) : (this._assertIndex(e3, this._columns), this._columns[e3]);
      }
      getEndColumn(e3) {
        return -1 === e3 ? this.getStartColumn(e3 + 1) : (this._assertIndex(e3, this._columns), 10 === this._charCodes[e3] ? 1 : this._columns[e3] + 1);
      }
    }
    class L {
      constructor(e3, t3, n3, i3, r3, s3, o2, a2) {
        this.originalStartLineNumber = e3, this.originalStartColumn = t3, this.originalEndLineNumber = n3, this.originalEndColumn = i3, this.modifiedStartLineNumber = r3, this.modifiedStartColumn = s3, this.modifiedEndLineNumber = o2, this.modifiedEndColumn = a2;
      }
      static createFromDiffChange(e3, t3, n3) {
        const i3 = t3.getStartLineNumber(e3.originalStart), r3 = t3.getStartColumn(e3.originalStart), s3 = t3.getEndLineNumber(e3.originalStart + e3.originalLength - 1), o2 = t3.getEndColumn(e3.originalStart + e3.originalLength - 1), a2 = n3.getStartLineNumber(e3.modifiedStart), u2 = n3.getStartColumn(e3.modifiedStart), l2 = n3.getEndLineNumber(e3.modifiedStart + e3.modifiedLength - 1), h2 = n3.getEndColumn(e3.modifiedStart + e3.modifiedLength - 1);
        return new L(i3, r3, s3, o2, a2, u2, l2, h2);
      }
    }
    class _ {
      constructor(e3, t3, n3, i3, r3) {
        this.originalStartLineNumber = e3, this.originalEndLineNumber = t3, this.modifiedStartLineNumber = n3, this.modifiedEndLineNumber = i3, this.charChanges = r3;
      }
      static createFromDiffResult(e3, t3, n3, i3, r3, s3, o2) {
        let a2, u2, l2, h2, c2;
        if (0 === t3.originalLength ? (a2 = n3.getStartLineNumber(t3.originalStart) - 1, u2 = 0) : (a2 = n3.getStartLineNumber(t3.originalStart), u2 = n3.getEndLineNumber(t3.originalStart + t3.originalLength - 1)), 0 === t3.modifiedLength ? (l2 = i3.getStartLineNumber(t3.modifiedStart) - 1, h2 = 0) : (l2 = i3.getStartLineNumber(t3.modifiedStart), h2 = i3.getEndLineNumber(t3.modifiedStart + t3.modifiedLength - 1)), s3 && t3.originalLength > 0 && t3.originalLength < 20 && t3.modifiedLength > 0 && t3.modifiedLength < 20 && n3.getCharLength(e3, t3.originalStart, t3.originalStart + t3.originalLength - 1) <= g && i3.getCharLength(e3, t3.modifiedStart, t3.modifiedStart + t3.modifiedLength - 1) <= g && r3()) {
          const s4 = n3.createCharSequence(e3, t3.originalStart, t3.originalStart + t3.originalLength - 1), a3 = i3.createCharSequence(e3, t3.modifiedStart, t3.modifiedStart + t3.modifiedLength - 1);
          if (s4.getElements().length > 0 && a3.getElements().length > 0) {
            let e4 = m(s4, a3, r3, true).changes;
            o2 && (e4 = (function(e5) {
              if (e5.length <= 1) return e5;
              const t4 = [e5[0]];
              let n4 = t4[0];
              for (let i4 = 1, r4 = e5.length; i4 < r4; i4++) {
                const r5 = e5[i4], s5 = r5.originalStart - (n4.originalStart + n4.originalLength), o3 = r5.modifiedStart - (n4.modifiedStart + n4.modifiedLength);
                Math.min(s5, o3) < 3 ? (n4.originalLength = r5.originalStart + r5.originalLength - n4.originalStart, n4.modifiedLength = r5.modifiedStart + r5.modifiedLength - n4.modifiedStart) : (t4.push(r5), n4 = r5);
              }
              return t4;
            })(e4)), c2 = [];
            for (let t4 = 0, n4 = e4.length; t4 < n4; t4++) c2.push(L.createFromDiffChange(e4[t4], s4, a3));
          }
        }
        return new _(a2, u2, l2, h2, c2);
      }
    }
    class v {
      constructor(e3, t3, n3) {
        this.shouldComputeCharChanges = n3.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n3.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n3.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n3.shouldMakePrettyDiff, this.originalLines = e3, this.modifiedLines = t3, this.original = new p(e3), this.modified = new p(t3), this.continueLineDiff = y(n3.maxComputationTime), this.continueCharDiff = y(0 === n3.maxComputationTime ? 0 : Math.min(n3.maxComputationTime, 5e3));
      }
      computeDiff() {
        if (1 === this.original.lines.length && 0 === this.original.lines[0].length) return 1 === this.modified.lines.length && 0 === this.modified.lines[0].length ? { quitEarly: false, changes: [] } : { quitEarly: false, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: 1, modifiedStartLineNumber: 1, modifiedEndLineNumber: this.modified.lines.length, charChanges: void 0 }] };
        if (1 === this.modified.lines.length && 0 === this.modified.lines[0].length) return { quitEarly: false, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: this.original.lines.length, modifiedStartLineNumber: 1, modifiedEndLineNumber: 1, charChanges: void 0 }] };
        const e3 = m(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), t3 = e3.changes, n3 = e3.quitEarly;
        if (this.shouldIgnoreTrimWhitespace) {
          const e4 = [];
          for (let n4 = 0, i4 = t3.length; n4 < i4; n4++) e4.push(_.createFromDiffResult(this.shouldIgnoreTrimWhitespace, t3[n4], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
          return { quitEarly: n3, changes: e4 };
        }
        const i3 = [];
        let r3 = 0, s3 = 0;
        for (let e4 = -1, n4 = t3.length; e4 < n4; e4++) {
          const o2 = e4 + 1 < n4 ? t3[e4 + 1] : null, a2 = o2 ? o2.originalStart : this.originalLines.length, u2 = o2 ? o2.modifiedStart : this.modifiedLines.length;
          for (; r3 < a2 && s3 < u2; ) {
            const e5 = this.originalLines[r3], t4 = this.modifiedLines[s3];
            if (e5 !== t4) {
              {
                let n5 = E(e5, 1), o3 = E(t4, 1);
                for (; n5 > 1 && o3 > 1; ) {
                  if (e5.charCodeAt(n5 - 2) !== t4.charCodeAt(o3 - 2)) break;
                  n5--, o3--;
                }
                (n5 > 1 || o3 > 1) && this._pushTrimWhitespaceCharChange(i3, r3 + 1, 1, n5, s3 + 1, 1, o3);
              }
              {
                let n5 = w(e5, 1), o3 = w(t4, 1);
                const a3 = e5.length + 1, u3 = t4.length + 1;
                for (; n5 < a3 && o3 < u3; ) {
                  if (e5.charCodeAt(n5 - 1) !== e5.charCodeAt(o3 - 1)) break;
                  n5++, o3++;
                }
                (n5 < a3 || o3 < u3) && this._pushTrimWhitespaceCharChange(i3, r3 + 1, n5, a3, s3 + 1, o3, u3);
              }
            }
            r3++, s3++;
          }
          o2 && (i3.push(_.createFromDiffResult(this.shouldIgnoreTrimWhitespace, o2, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), r3 += o2.originalLength, s3 += o2.modifiedLength);
        }
        return { quitEarly: n3, changes: i3 };
      }
      _pushTrimWhitespaceCharChange(e3, t3, n3, i3, r3, s3, o2) {
        if (this._mergeTrimWhitespaceCharChange(e3, t3, n3, i3, r3, s3, o2)) return;
        let a2;
        this.shouldComputeCharChanges && (a2 = [new L(t3, n3, t3, i3, r3, s3, r3, o2)]), e3.push(new _(t3, t3, r3, r3, a2));
      }
      _mergeTrimWhitespaceCharChange(e3, t3, n3, i3, r3, s3, o2) {
        const a2 = e3.length;
        if (0 === a2) return false;
        const u2 = e3[a2 - 1];
        return 0 !== u2.originalEndLineNumber && 0 !== u2.modifiedEndLineNumber && (u2.originalEndLineNumber === t3 && u2.modifiedEndLineNumber === r3 ? (this.shouldComputeCharChanges && u2.charChanges && u2.charChanges.push(new L(t3, n3, t3, i3, r3, s3, r3, o2)), true) : u2.originalEndLineNumber + 1 === t3 && u2.modifiedEndLineNumber + 1 === r3 && (u2.originalEndLineNumber = t3, u2.modifiedEndLineNumber = r3, this.shouldComputeCharChanges && u2.charChanges && u2.charChanges.push(new L(t3, n3, t3, i3, r3, s3, r3, o2)), true));
      }
    }
    function E(e3, t3) {
      const n3 = h.firstNonWhitespaceIndex(e3);
      return -1 === n3 ? t3 : n3 + 1;
    }
    function w(e3, t3) {
      const n3 = h.lastNonWhitespaceIndex(e3);
      return -1 === n3 ? t3 : n3 + 2;
    }
    function y(e3) {
      if (0 === e3) return () => true;
      const t3 = Date.now();
      return () => Date.now() - t3 < e3;
    }
    t2.DiffComputer = v;
  }, 768: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.StringText = t2.ArrayText = t2.LineBasedText = t2.AbstractText = t2.SingleTextEdit = t2.TextEdit = void 0;
    const i2 = n2(501), r2 = n2(141), s2 = n2(976), o = n2(589), a = n2(584), u = n2(138), l = n2(298), h = n2(588);
    class c {
      static fromOffsetEdit(e3, t3) {
        const n3 = e3.edits.map((e4) => new f(t3.getTransformer().getRange(e4.replaceRange), e4.newText));
        return new c(n3);
      }
      static single(e3, t3) {
        return new c([new f(e3, t3)]);
      }
      static insert(e3, t3) {
        return new c([new f(l.Range.fromPositions(e3, e3), t3)]);
      }
      constructor(e3) {
        this.edits = e3, (0, r2.assertFn)(() => (0, r2.checkAdjacentItems)(e3, (e4, t3) => e4.range.getEndPosition().isBeforeOrEqual(t3.range.getStartPosition())));
      }
      normalize() {
        const e3 = [];
        for (const t3 of this.edits) if (e3.length > 0 && e3[e3.length - 1].range.getEndPosition().equals(t3.range.getStartPosition())) {
          const n3 = e3[e3.length - 1];
          e3[e3.length - 1] = new f(n3.range.plusRange(t3.range), n3.text + t3.text);
        } else t3.isEmpty || e3.push(t3);
        return new c(e3);
      }
      mapPosition(e3) {
        let t3 = 0, n3 = 0, i3 = 0;
        for (const r3 of this.edits) {
          const s3 = r3.range.getStartPosition();
          if (e3.isBeforeOrEqual(s3)) break;
          const o2 = r3.range.getEndPosition(), u2 = h.TextLength.ofText(r3.text);
          if (e3.isBefore(o2)) {
            const e4 = new a.Position(s3.lineNumber + t3, s3.column + (s3.lineNumber + t3 === n3 ? i3 : 0));
            return d(e4, u2.addToPosition(e4));
          }
          s3.lineNumber + t3 !== n3 && (i3 = 0), t3 += u2.lineCount - (r3.range.endLineNumber - r3.range.startLineNumber), 0 === u2.lineCount ? o2.lineNumber !== s3.lineNumber ? i3 += u2.columnCount - (o2.column - 1) : i3 += u2.columnCount - (o2.column - s3.column) : i3 = u2.columnCount, n3 = o2.lineNumber + t3;
        }
        return new a.Position(e3.lineNumber + t3, e3.column + (e3.lineNumber + t3 === n3 ? i3 : 0));
      }
      mapRange(e3) {
        const t3 = (n3 = this.mapPosition(e3.getStartPosition())) instanceof a.Position ? n3 : n3.getStartPosition();
        var n3;
        const i3 = (function(e4) {
          return e4 instanceof a.Position ? e4 : e4.getEndPosition();
        })(this.mapPosition(e3.getEndPosition()));
        return d(t3, i3);
      }
      inverseMapPosition(e3, t3) {
        return this.inverse(t3).mapPosition(e3);
      }
      inverseMapRange(e3, t3) {
        return this.inverse(t3).mapRange(e3);
      }
      apply(e3) {
        let t3 = "", n3 = new a.Position(1, 1);
        for (const i4 of this.edits) {
          const r3 = i4.range, s3 = r3.getStartPosition(), o2 = r3.getEndPosition(), a2 = d(n3, s3);
          a2.isEmpty() || (t3 += e3.getValueOfRange(a2)), t3 += i4.text, n3 = o2;
        }
        const i3 = d(n3, e3.endPositionExclusive);
        return i3.isEmpty() || (t3 += e3.getValueOfRange(i3)), t3;
      }
      applyToString(e3) {
        const t3 = new p(e3);
        return this.apply(t3);
      }
      inverse(e3) {
        const t3 = this.getNewRanges();
        return new c(this.edits.map((n3, i3) => new f(t3[i3], e3.getValueOfRange(n3.range))));
      }
      getNewRanges() {
        const e3 = [];
        let t3 = 0, n3 = 0, i3 = 0;
        for (const r3 of this.edits) {
          const s3 = h.TextLength.ofText(r3.text), o2 = a.Position.lift({ lineNumber: r3.range.startLineNumber + n3, column: r3.range.startColumn + (r3.range.startLineNumber === t3 ? i3 : 0) }), u2 = s3.createRange(o2);
          e3.push(u2), n3 = u2.endLineNumber - r3.range.endLineNumber, i3 = u2.endColumn - r3.range.endColumn, t3 = r3.range.endLineNumber;
        }
        return e3;
      }
      toSingle(e3) {
        if (0 === this.edits.length) throw new s2.BugIndicatingError();
        if (1 === this.edits.length) return this.edits[0];
        const t3 = this.edits[0].range.getStartPosition(), n3 = this.edits[this.edits.length - 1].range.getEndPosition();
        let i3 = "";
        for (let t4 = 0; t4 < this.edits.length; t4++) {
          const n4 = this.edits[t4];
          if (i3 += n4.text, t4 < this.edits.length - 1) {
            const r3 = this.edits[t4 + 1], s3 = l.Range.fromPositions(n4.range.getEndPosition(), r3.range.getStartPosition());
            i3 += e3.getValueOfRange(s3);
          }
        }
        return new f(l.Range.fromPositions(t3, n3), i3);
      }
      equals(e3) {
        return (0, i2.equals)(this.edits, e3.edits, (e4, t3) => e4.equals(t3));
      }
    }
    t2.TextEdit = c;
    class f {
      static joinEdits(e3, t3) {
        if (0 === e3.length) throw new s2.BugIndicatingError();
        if (1 === e3.length) return e3[0];
        const n3 = e3[0].range.getStartPosition(), i3 = e3[e3.length - 1].range.getEndPosition();
        let r3 = "";
        for (let n4 = 0; n4 < e3.length; n4++) {
          const i4 = e3[n4];
          if (r3 += i4.text, n4 < e3.length - 1) {
            const s3 = e3[n4 + 1], o2 = l.Range.fromPositions(i4.range.getEndPosition(), s3.range.getStartPosition());
            r3 += t3.getValueOfRange(o2);
          }
        }
        return new f(l.Range.fromPositions(n3, i3), r3);
      }
      constructor(e3, t3) {
        this.range = e3, this.text = t3;
      }
      get isEmpty() {
        return this.range.isEmpty() && 0 === this.text.length;
      }
      static equals(e3, t3) {
        return e3.range.equalsRange(t3.range) && e3.text === t3.text;
      }
      toSingleEditOperation() {
        return { range: this.range, text: this.text };
      }
      toEdit() {
        return new c([this]);
      }
      equals(e3) {
        return f.equals(this, e3);
      }
      extendToCoverRange(e3, t3) {
        if (this.range.containsRange(e3)) return this;
        const n3 = this.range.plusRange(e3), i3 = t3.getValueOfRange(l.Range.fromPositions(n3.getStartPosition(), this.range.getStartPosition())), r3 = t3.getValueOfRange(l.Range.fromPositions(this.range.getEndPosition(), n3.getEndPosition())), s3 = i3 + this.text + r3;
        return new f(n3, s3);
      }
      extendToFullLine(e3) {
        const t3 = new l.Range(this.range.startLineNumber, 1, this.range.endLineNumber, e3.getTransformer().getLineLength(this.range.endLineNumber) + 1);
        return this.extendToCoverRange(t3, e3);
      }
      removeCommonPrefix(e3) {
        const t3 = e3.getValueOfRange(this.range).replaceAll("\r\n", "\n"), n3 = this.text.replaceAll("\r\n", "\n"), i3 = (0, o.commonPrefixLength)(t3, n3), r3 = h.TextLength.ofText(t3.substring(0, i3)).addToPosition(this.range.getStartPosition()), s3 = n3.substring(i3), a2 = l.Range.fromPositions(r3, this.range.getEndPosition());
        return new f(a2, s3);
      }
      isEffectiveDeletion(e3) {
        let t3 = this.text.replaceAll("\r\n", "\n"), n3 = e3.getValueOfRange(this.range).replaceAll("\r\n", "\n");
        const i3 = (0, o.commonPrefixLength)(t3, n3);
        t3 = t3.substring(i3), n3 = n3.substring(i3);
        const r3 = (0, o.commonSuffixLength)(t3, n3);
        return t3 = t3.substring(0, t3.length - r3), n3 = n3.substring(0, n3.length - r3), "" === t3;
      }
    }
    function d(e3, t3) {
      if (e3.lineNumber === t3.lineNumber && e3.column === Number.MAX_SAFE_INTEGER) return l.Range.fromPositions(t3, t3);
      if (!e3.isBeforeOrEqual(t3)) throw new s2.BugIndicatingError("start must be before end");
      return new l.Range(e3.lineNumber, e3.column, t3.lineNumber, t3.column);
    }
    t2.SingleTextEdit = f;
    class g {
      constructor() {
        this._transformer = void 0;
      }
      get endPositionExclusive() {
        return this.length.addToPosition(new a.Position(1, 1));
      }
      get lineRange() {
        return this.length.toLineRange();
      }
      getValue() {
        return this.getValueOfRange(this.length.toRange());
      }
      getLineLength(e3) {
        return this.getValueOfRange(new l.Range(e3, 1, e3, Number.MAX_SAFE_INTEGER)).length;
      }
      getTransformer() {
        return this._transformer || (this._transformer = new u.PositionOffsetTransformer(this.getValue())), this._transformer;
      }
      getLineAt(e3) {
        return this.getValueOfRange(new l.Range(e3, 1, e3, Number.MAX_SAFE_INTEGER));
      }
      getLines() {
        const e3 = this.getValue();
        return (0, o.splitLines)(e3);
      }
    }
    t2.AbstractText = g;
    class m extends g {
      constructor(e3, t3) {
        (0, r2.assert)(t3 >= 1), super(), this._getLineContent = e3, this._lineCount = t3;
      }
      getValueOfRange(e3) {
        if (e3.startLineNumber === e3.endLineNumber) return this._getLineContent(e3.startLineNumber).substring(e3.startColumn - 1, e3.endColumn - 1);
        let t3 = this._getLineContent(e3.startLineNumber).substring(e3.startColumn - 1);
        for (let n3 = e3.startLineNumber + 1; n3 < e3.endLineNumber; n3++) t3 += "\n" + this._getLineContent(n3);
        return t3 += "\n" + this._getLineContent(e3.endLineNumber).substring(0, e3.endColumn - 1), t3;
      }
      getLineLength(e3) {
        return this._getLineContent(e3).length;
      }
      get length() {
        const e3 = this._getLineContent(this._lineCount);
        return new h.TextLength(this._lineCount - 1, e3.length);
      }
    }
    t2.LineBasedText = m;
    t2.ArrayText = class extends m {
      constructor(e3) {
        super((t3) => e3[t3 - 1], e3.length);
      }
    };
    class p extends g {
      constructor(e3) {
        super(), this.value = e3, this._t = new u.PositionOffsetTransformer(this.value);
      }
      getValueOfRange(e3) {
        return this._t.getOffsetRange(e3).substring(this.value);
      }
      get length() {
        return this._t.textLength;
      }
    }
    t2.StringText = p;
  }, 804: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.LcsDiff = t2.StringDiffSequence = void 0, t2.stringDiff = function(e3, t3, n3) {
      return new l(new s2(e3), new s2(t3)).ComputeDiff(n3).changes;
    }, t2.computeLevenshteinDistance = function(e3, t3) {
      if (e3.length < t3.length) {
        const n3 = t3;
        t3 = e3, e3 = n3;
      }
      if (0 === t3.length) return e3.length;
      if (e3.length <= 32) return c(e3, t3);
      return (function(e4, t4) {
        const n3 = e4.length, i3 = t4.length, r3 = [], s3 = [], o2 = Math.ceil(n3 / 32), a2 = Math.ceil(i3 / 32);
        for (let e5 = 0; e5 < o2; e5++) r3[e5] = -1, s3[e5] = 0;
        let u2 = 0;
        for (; u2 < a2 - 1; u2++) {
          let o3 = 0, a3 = -1;
          const l3 = 32 * u2, c3 = Math.min(32, i3) + l3;
          for (let e5 = l3; e5 < c3; e5++) h[t4.charCodeAt(e5)] |= 1 << e5;
          for (let t5 = 0; t5 < n3; t5++) {
            const n4 = h[e4.charCodeAt(t5)], i4 = r3[t5 / 32 | 0] >>> t5 & 1, u3 = s3[t5 / 32 | 0] >>> t5 & 1, l4 = n4 | o3, c4 = ((n4 | u3) & a3) + a3 ^ a3 | n4 | u3;
            let f2 = o3 | ~(c4 | a3), d2 = a3 & c4;
            f2 >>> 31 ^ i4 && (r3[t5 / 32 | 0] ^= 1 << t5), d2 >>> 31 ^ u3 && (s3[t5 / 32 | 0] ^= 1 << t5), f2 = f2 << 1 | i4, d2 = d2 << 1 | u3, a3 = d2 | ~(l4 | f2), o3 = f2 & l4;
          }
          for (let e5 = l3; e5 < c3; e5++) h[t4.charCodeAt(e5)] = 0;
        }
        let l2 = 0, c2 = -1;
        const f = 32 * u2, d = Math.min(32, i3 - f) + f;
        for (let e5 = f; e5 < d; e5++) h[t4.charCodeAt(e5)] |= 1 << e5;
        let g = i3;
        for (let t5 = 0; t5 < n3; t5++) {
          const n4 = h[e4.charCodeAt(t5)], o3 = r3[t5 / 32 | 0] >>> t5 & 1, a3 = s3[t5 / 32 | 0] >>> t5 & 1, u3 = n4 | l2, f2 = ((n4 | a3) & c2) + c2 ^ c2 | n4 | a3;
          let d2 = l2 | ~(f2 | c2), m = c2 & f2;
          g += d2 >>> i3 - 1 & 1, g -= m >>> i3 - 1 & 1, d2 >>> 31 ^ o3 && (r3[t5 / 32 | 0] ^= 1 << t5), m >>> 31 ^ a3 && (s3[t5 / 32 | 0] ^= 1 << t5), d2 = d2 << 1 | o3, m = m << 1 | a3, c2 = m | ~(u3 | d2), l2 = d2 & u3;
        }
        for (let e5 = f; e5 < d; e5++) h[t4.charCodeAt(e5)] = 0;
        return g;
      })(e3, t3);
    };
    const i2 = n2(988), r2 = n2(499);
    class s2 {
      constructor(e3) {
        this.source = e3;
      }
      getElements() {
        const e3 = this.source, t3 = new Int32Array(e3.length);
        for (let n3 = 0, i3 = e3.length; n3 < i3; n3++) t3[n3] = e3.charCodeAt(n3);
        return t3;
      }
    }
    t2.StringDiffSequence = s2;
    class o {
      static Assert(e3, t3) {
        if (!e3) throw new Error(t3);
      }
    }
    class a {
      static Copy(e3, t3, n3, i3, r3) {
        for (let s3 = 0; s3 < r3; s3++) n3[i3 + s3] = e3[t3 + s3];
      }
      static Copy2(e3, t3, n3, i3, r3) {
        for (let s3 = 0; s3 < r3; s3++) n3[i3 + s3] = e3[t3 + s3];
      }
    }
    class u {
      constructor() {
        this.m_changes = [], this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824, this.m_originalCount = 0, this.m_modifiedCount = 0;
      }
      MarkNextChange() {
        (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new i2.DiffChange(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824;
      }
      AddOriginalElement(e3, t3) {
        this.m_originalStart = Math.min(this.m_originalStart, e3), this.m_modifiedStart = Math.min(this.m_modifiedStart, t3), this.m_originalCount++;
      }
      AddModifiedElement(e3, t3) {
        this.m_originalStart = Math.min(this.m_originalStart, e3), this.m_modifiedStart = Math.min(this.m_modifiedStart, t3), this.m_modifiedCount++;
      }
      getChanges() {
        return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
      }
      getReverseChanges() {
        return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
      }
    }
    class l {
      constructor(e3, t3, n3 = null) {
        this.ContinueProcessingPredicate = n3, this._originalSequence = e3, this._modifiedSequence = t3;
        const [i3, r3, s3] = l._getElements(e3), [o2, a2, u2] = l._getElements(t3);
        this._hasStrings = s3 && u2, this._originalStringElements = i3, this._originalElementsOrHash = r3, this._modifiedStringElements = o2, this._modifiedElementsOrHash = a2, this.m_forwardHistory = [], this.m_reverseHistory = [];
      }
      static _isStringArray(e3) {
        return e3.length > 0 && "string" == typeof e3[0];
      }
      static _getElements(e3) {
        const t3 = e3.getElements();
        if (l._isStringArray(t3)) {
          const e4 = new Int32Array(t3.length);
          for (let n3 = 0, i3 = t3.length; n3 < i3; n3++) e4[n3] = (0, r2.stringHash)(t3[n3], 0);
          return [t3, e4, true];
        }
        return t3 instanceof Int32Array ? [[], t3, false] : [[], new Int32Array(t3), false];
      }
      ElementsAreEqual(e3, t3) {
        return this._originalElementsOrHash[e3] === this._modifiedElementsOrHash[t3] && (!this._hasStrings || this._originalStringElements[e3] === this._modifiedStringElements[t3]);
      }
      ElementsAreStrictEqual(e3, t3) {
        if (!this.ElementsAreEqual(e3, t3)) return false;
        return l._getStrictElement(this._originalSequence, e3) === l._getStrictElement(this._modifiedSequence, t3);
      }
      static _getStrictElement(e3, t3) {
        return "function" == typeof e3.getStrictElement ? e3.getStrictElement(t3) : null;
      }
      OriginalElementsAreEqual(e3, t3) {
        return this._originalElementsOrHash[e3] === this._originalElementsOrHash[t3] && (!this._hasStrings || this._originalStringElements[e3] === this._originalStringElements[t3]);
      }
      ModifiedElementsAreEqual(e3, t3) {
        return this._modifiedElementsOrHash[e3] === this._modifiedElementsOrHash[t3] && (!this._hasStrings || this._modifiedStringElements[e3] === this._modifiedStringElements[t3]);
      }
      ComputeDiff(e3) {
        return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, e3);
      }
      _ComputeDiff(e3, t3, n3, i3, r3) {
        const s3 = [false];
        let o2 = this.ComputeDiffRecursive(e3, t3, n3, i3, s3);
        return r3 && (o2 = this.PrettifyChanges(o2)), { quitEarly: s3[0], changes: o2 };
      }
      ComputeDiffRecursive(e3, t3, n3, r3, s3) {
        for (s3[0] = false; e3 <= t3 && n3 <= r3 && this.ElementsAreEqual(e3, n3); ) e3++, n3++;
        for (; t3 >= e3 && r3 >= n3 && this.ElementsAreEqual(t3, r3); ) t3--, r3--;
        if (e3 > t3 || n3 > r3) {
          let s4;
          return n3 <= r3 ? (o.Assert(e3 === t3 + 1, "originalStart should only be one more than originalEnd"), s4 = [new i2.DiffChange(e3, 0, n3, r3 - n3 + 1)]) : e3 <= t3 ? (o.Assert(n3 === r3 + 1, "modifiedStart should only be one more than modifiedEnd"), s4 = [new i2.DiffChange(e3, t3 - e3 + 1, n3, 0)]) : (o.Assert(e3 === t3 + 1, "originalStart should only be one more than originalEnd"), o.Assert(n3 === r3 + 1, "modifiedStart should only be one more than modifiedEnd"), s4 = []), s4;
        }
        const a2 = [0], u2 = [0], l2 = this.ComputeRecursionPoint(e3, t3, n3, r3, a2, u2, s3), h2 = a2[0], c2 = u2[0];
        if (null !== l2) return l2;
        if (!s3[0]) {
          const o2 = this.ComputeDiffRecursive(e3, h2, n3, c2, s3);
          let a3 = [];
          return a3 = s3[0] ? [new i2.DiffChange(h2 + 1, t3 - (h2 + 1) + 1, c2 + 1, r3 - (c2 + 1) + 1)] : this.ComputeDiffRecursive(h2 + 1, t3, c2 + 1, r3, s3), this.ConcatenateChanges(o2, a3);
        }
        return [new i2.DiffChange(e3, t3 - e3 + 1, n3, r3 - n3 + 1)];
      }
      WALKTRACE(e3, t3, n3, r3, s3, o2, a2, l2, h2, c2, f, d, g, m, p, b, L, _) {
        let v = null, E = null, w = new u(), y = t3, N = n3, R = g[0] - b[0] - r3, C = -1073741824, x = this.m_forwardHistory.length - 1;
        do {
          const t4 = R + e3;
          t4 === y || t4 < N && h2[t4 - 1] < h2[t4 + 1] ? (m = (f = h2[t4 + 1]) - R - r3, f < C && w.MarkNextChange(), C = f, w.AddModifiedElement(f + 1, m), R = t4 + 1 - e3) : (m = (f = h2[t4 - 1] + 1) - R - r3, f < C && w.MarkNextChange(), C = f - 1, w.AddOriginalElement(f, m + 1), R = t4 - 1 - e3), x >= 0 && (e3 = (h2 = this.m_forwardHistory[x])[0], y = 1, N = h2.length - 1);
        } while (--x >= -1);
        if (v = w.getReverseChanges(), _[0]) {
          let e4 = g[0] + 1, t4 = b[0] + 1;
          if (null !== v && v.length > 0) {
            const n4 = v[v.length - 1];
            e4 = Math.max(e4, n4.getOriginalEnd()), t4 = Math.max(t4, n4.getModifiedEnd());
          }
          E = [new i2.DiffChange(e4, d - e4 + 1, t4, p - t4 + 1)];
        } else {
          w = new u(), y = o2, N = a2, R = g[0] - b[0] - l2, C = 1073741824, x = L ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
          do {
            const e4 = R + s3;
            e4 === y || e4 < N && c2[e4 - 1] >= c2[e4 + 1] ? (m = (f = c2[e4 + 1] - 1) - R - l2, f > C && w.MarkNextChange(), C = f + 1, w.AddOriginalElement(f + 1, m + 1), R = e4 + 1 - s3) : (m = (f = c2[e4 - 1]) - R - l2, f > C && w.MarkNextChange(), C = f, w.AddModifiedElement(f + 1, m + 1), R = e4 - 1 - s3), x >= 0 && (s3 = (c2 = this.m_reverseHistory[x])[0], y = 1, N = c2.length - 1);
          } while (--x >= -1);
          E = w.getChanges();
        }
        return this.ConcatenateChanges(v, E);
      }
      ComputeRecursionPoint(e3, t3, n3, r3, s3, o2, u2) {
        let l2 = 0, h2 = 0, c2 = 0, f = 0, d = 0, g = 0;
        e3--, n3--, s3[0] = 0, o2[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
        const m = t3 - e3 + (r3 - n3), p = m + 1, b = new Int32Array(p), L = new Int32Array(p), _ = r3 - n3, v = t3 - e3, E = e3 - n3, w = t3 - r3, y = (v - _) % 2 == 0;
        b[_] = e3, L[v] = t3, u2[0] = false;
        for (let N = 1; N <= m / 2 + 1; N++) {
          let m2 = 0, R = 0;
          c2 = this.ClipDiagonalBound(_ - N, N, _, p), f = this.ClipDiagonalBound(_ + N, N, _, p);
          for (let e4 = c2; e4 <= f; e4 += 2) {
            l2 = e4 === c2 || e4 < f && b[e4 - 1] < b[e4 + 1] ? b[e4 + 1] : b[e4 - 1] + 1, h2 = l2 - (e4 - _) - E;
            const n4 = l2;
            for (; l2 < t3 && h2 < r3 && this.ElementsAreEqual(l2 + 1, h2 + 1); ) l2++, h2++;
            if (b[e4] = l2, l2 + h2 > m2 + R && (m2 = l2, R = h2), !y && Math.abs(e4 - v) <= N - 1 && l2 >= L[e4]) return s3[0] = l2, o2[0] = h2, n4 <= L[e4] && N <= 1448 ? this.WALKTRACE(_, c2, f, E, v, d, g, w, b, L, l2, t3, s3, h2, r3, o2, y, u2) : null;
          }
          const C = (m2 - e3 + (R - n3) - N) / 2;
          if (null !== this.ContinueProcessingPredicate && !this.ContinueProcessingPredicate(m2, C)) return u2[0] = true, s3[0] = m2, o2[0] = R, C > 0 && N <= 1448 ? this.WALKTRACE(_, c2, f, E, v, d, g, w, b, L, l2, t3, s3, h2, r3, o2, y, u2) : (e3++, n3++, [new i2.DiffChange(e3, t3 - e3 + 1, n3, r3 - n3 + 1)]);
          d = this.ClipDiagonalBound(v - N, N, v, p), g = this.ClipDiagonalBound(v + N, N, v, p);
          for (let i3 = d; i3 <= g; i3 += 2) {
            l2 = i3 === d || i3 < g && L[i3 - 1] >= L[i3 + 1] ? L[i3 + 1] - 1 : L[i3 - 1], h2 = l2 - (i3 - v) - w;
            const a2 = l2;
            for (; l2 > e3 && h2 > n3 && this.ElementsAreEqual(l2, h2); ) l2--, h2--;
            if (L[i3] = l2, y && Math.abs(i3 - _) <= N && l2 <= b[i3]) return s3[0] = l2, o2[0] = h2, a2 >= b[i3] && N <= 1448 ? this.WALKTRACE(_, c2, f, E, v, d, g, w, b, L, l2, t3, s3, h2, r3, o2, y, u2) : null;
          }
          if (N <= 1447) {
            let e4 = new Int32Array(f - c2 + 2);
            e4[0] = _ - c2 + 1, a.Copy2(b, c2, e4, 1, f - c2 + 1), this.m_forwardHistory.push(e4), e4 = new Int32Array(g - d + 2), e4[0] = v - d + 1, a.Copy2(L, d, e4, 1, g - d + 1), this.m_reverseHistory.push(e4);
          }
        }
        return this.WALKTRACE(_, c2, f, E, v, d, g, w, b, L, l2, t3, s3, h2, r3, o2, y, u2);
      }
      PrettifyChanges(e3) {
        for (let t3 = 0; t3 < e3.length; t3++) {
          const n3 = e3[t3], i3 = t3 < e3.length - 1 ? e3[t3 + 1].originalStart : this._originalElementsOrHash.length, r3 = t3 < e3.length - 1 ? e3[t3 + 1].modifiedStart : this._modifiedElementsOrHash.length, s3 = n3.originalLength > 0, o2 = n3.modifiedLength > 0;
          for (; n3.originalStart + n3.originalLength < i3 && n3.modifiedStart + n3.modifiedLength < r3 && (!s3 || this.OriginalElementsAreEqual(n3.originalStart, n3.originalStart + n3.originalLength)) && (!o2 || this.ModifiedElementsAreEqual(n3.modifiedStart, n3.modifiedStart + n3.modifiedLength)); ) {
            const e4 = this.ElementsAreStrictEqual(n3.originalStart, n3.modifiedStart);
            if (this.ElementsAreStrictEqual(n3.originalStart + n3.originalLength, n3.modifiedStart + n3.modifiedLength) && !e4) break;
            n3.originalStart++, n3.modifiedStart++;
          }
          const a2 = [null];
          t3 < e3.length - 1 && this.ChangesOverlap(e3[t3], e3[t3 + 1], a2) && (e3[t3] = a2[0], e3.splice(t3 + 1, 1), t3--);
        }
        for (let t3 = e3.length - 1; t3 >= 0; t3--) {
          const n3 = e3[t3];
          let i3 = 0, r3 = 0;
          if (t3 > 0) {
            const n4 = e3[t3 - 1];
            i3 = n4.originalStart + n4.originalLength, r3 = n4.modifiedStart + n4.modifiedLength;
          }
          const s3 = n3.originalLength > 0, o2 = n3.modifiedLength > 0;
          let a2 = 0, u2 = this._boundaryScore(n3.originalStart, n3.originalLength, n3.modifiedStart, n3.modifiedLength);
          for (let e4 = 1; ; e4++) {
            const t4 = n3.originalStart - e4, l3 = n3.modifiedStart - e4;
            if (t4 < i3 || l3 < r3) break;
            if (s3 && !this.OriginalElementsAreEqual(t4, t4 + n3.originalLength)) break;
            if (o2 && !this.ModifiedElementsAreEqual(l3, l3 + n3.modifiedLength)) break;
            const h2 = (t4 === i3 && l3 === r3 ? 5 : 0) + this._boundaryScore(t4, n3.originalLength, l3, n3.modifiedLength);
            h2 > u2 && (u2 = h2, a2 = e4);
          }
          n3.originalStart -= a2, n3.modifiedStart -= a2;
          const l2 = [null];
          t3 > 0 && this.ChangesOverlap(e3[t3 - 1], e3[t3], l2) && (e3[t3 - 1] = l2[0], e3.splice(t3, 1), t3++);
        }
        if (this._hasStrings) for (let t3 = 1, n3 = e3.length; t3 < n3; t3++) {
          const n4 = e3[t3 - 1], i3 = e3[t3], r3 = i3.originalStart - n4.originalStart - n4.originalLength, s3 = n4.originalStart, o2 = i3.originalStart + i3.originalLength, a2 = o2 - s3, u2 = n4.modifiedStart, l2 = i3.modifiedStart + i3.modifiedLength, h2 = l2 - u2;
          if (r3 < 5 && a2 < 20 && h2 < 20) {
            const e4 = this._findBetterContiguousSequence(s3, a2, u2, h2, r3);
            if (e4) {
              const [t4, s4] = e4;
              t4 === n4.originalStart + n4.originalLength && s4 === n4.modifiedStart + n4.modifiedLength || (n4.originalLength = t4 - n4.originalStart, n4.modifiedLength = s4 - n4.modifiedStart, i3.originalStart = t4 + r3, i3.modifiedStart = s4 + r3, i3.originalLength = o2 - i3.originalStart, i3.modifiedLength = l2 - i3.modifiedStart);
            }
          }
        }
        return e3;
      }
      _findBetterContiguousSequence(e3, t3, n3, i3, r3) {
        if (t3 < r3 || i3 < r3) return null;
        const s3 = e3 + t3 - r3 + 1, o2 = n3 + i3 - r3 + 1;
        let a2 = 0, u2 = 0, l2 = 0;
        for (let t4 = e3; t4 < s3; t4++) for (let e4 = n3; e4 < o2; e4++) {
          const n4 = this._contiguousSequenceScore(t4, e4, r3);
          n4 > 0 && n4 > a2 && (a2 = n4, u2 = t4, l2 = e4);
        }
        return a2 > 0 ? [u2, l2] : null;
      }
      _contiguousSequenceScore(e3, t3, n3) {
        let i3 = 0;
        for (let r3 = 0; r3 < n3; r3++) {
          if (!this.ElementsAreEqual(e3 + r3, t3 + r3)) return 0;
          i3 += this._originalStringElements[e3 + r3].length;
        }
        return i3;
      }
      _OriginalIsBoundary(e3) {
        return e3 <= 0 || e3 >= this._originalElementsOrHash.length - 1 || this._hasStrings && /^\s*$/.test(this._originalStringElements[e3]);
      }
      _OriginalRegionIsBoundary(e3, t3) {
        if (this._OriginalIsBoundary(e3) || this._OriginalIsBoundary(e3 - 1)) return true;
        if (t3 > 0) {
          const n3 = e3 + t3;
          if (this._OriginalIsBoundary(n3 - 1) || this._OriginalIsBoundary(n3)) return true;
        }
        return false;
      }
      _ModifiedIsBoundary(e3) {
        return e3 <= 0 || e3 >= this._modifiedElementsOrHash.length - 1 || this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e3]);
      }
      _ModifiedRegionIsBoundary(e3, t3) {
        if (this._ModifiedIsBoundary(e3) || this._ModifiedIsBoundary(e3 - 1)) return true;
        if (t3 > 0) {
          const n3 = e3 + t3;
          if (this._ModifiedIsBoundary(n3 - 1) || this._ModifiedIsBoundary(n3)) return true;
        }
        return false;
      }
      _boundaryScore(e3, t3, n3, i3) {
        return (this._OriginalRegionIsBoundary(e3, t3) ? 1 : 0) + (this._ModifiedRegionIsBoundary(n3, i3) ? 1 : 0);
      }
      ConcatenateChanges(e3, t3) {
        const n3 = [];
        if (0 === e3.length || 0 === t3.length) return t3.length > 0 ? t3 : e3;
        if (this.ChangesOverlap(e3[e3.length - 1], t3[0], n3)) {
          const i3 = new Array(e3.length + t3.length - 1);
          return a.Copy(e3, 0, i3, 0, e3.length - 1), i3[e3.length - 1] = n3[0], a.Copy(t3, 1, i3, e3.length, t3.length - 1), i3;
        }
        {
          const n4 = new Array(e3.length + t3.length);
          return a.Copy(e3, 0, n4, 0, e3.length), a.Copy(t3, 0, n4, e3.length, t3.length), n4;
        }
      }
      ChangesOverlap(e3, t3, n3) {
        if (o.Assert(e3.originalStart <= t3.originalStart, "Left change is not less than or equal to right change"), o.Assert(e3.modifiedStart <= t3.modifiedStart, "Left change is not less than or equal to right change"), e3.originalStart + e3.originalLength >= t3.originalStart || e3.modifiedStart + e3.modifiedLength >= t3.modifiedStart) {
          const r3 = e3.originalStart;
          let s3 = e3.originalLength;
          const o2 = e3.modifiedStart;
          let a2 = e3.modifiedLength;
          return e3.originalStart + e3.originalLength >= t3.originalStart && (s3 = t3.originalStart + t3.originalLength - e3.originalStart), e3.modifiedStart + e3.modifiedLength >= t3.modifiedStart && (a2 = t3.modifiedStart + t3.modifiedLength - e3.modifiedStart), n3[0] = new i2.DiffChange(r3, s3, o2, a2), true;
        }
        return n3[0] = null, false;
      }
      ClipDiagonalBound(e3, t3, n3, i3) {
        if (e3 >= 0 && e3 < i3) return e3;
        const r3 = t3 % 2 == 0;
        if (e3 < 0) {
          return r3 === (n3 % 2 == 0) ? 0 : 1;
        }
        return r3 === ((i3 - n3 - 1) % 2 == 0) ? i3 - 1 : i3 - 2;
      }
    }
    t2.LcsDiff = l;
    const h = new Uint32Array(65536), c = (e3, t3) => {
      const n3 = e3.length, i3 = t3.length, r3 = 1 << n3 - 1;
      let s3 = -1, o2 = 0, a2 = n3, u2 = n3;
      for (; u2--; ) h[e3.charCodeAt(u2)] |= 1 << u2;
      for (u2 = 0; u2 < i3; u2++) {
        let e4 = h[t3.charCodeAt(u2)];
        const n4 = e4 | o2;
        e4 |= (e4 & s3) + s3 ^ s3, o2 |= ~(e4 | s3), s3 &= e4, o2 & r3 && a2++, s3 & r3 && a2--, o2 = o2 << 1 | 1, s3 = s3 << 1 | ~(n4 | o2), o2 &= n4;
      }
      for (u2 = n3; u2--; ) h[e3.charCodeAt(u2)] = 0;
      return a2;
    };
  }, 837: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Iterable = void 0;
    const i2 = n2(166);
    var r2;
    !(function(e3) {
      function t3(e4) {
        return e4 && "object" == typeof e4 && "function" == typeof e4[Symbol.iterator];
      }
      e3.is = t3;
      const n3 = Object.freeze([]);
      function* r3(e4) {
        yield e4;
      }
      e3.empty = function() {
        return n3;
      }, e3.single = r3, e3.wrap = function(e4) {
        return t3(e4) ? e4 : r3(e4);
      }, e3.from = function(e4) {
        return e4 || n3;
      }, e3.reverse = function* (e4) {
        for (let t4 = e4.length - 1; t4 >= 0; t4--) yield e4[t4];
      }, e3.isEmpty = function(e4) {
        return !e4 || true === e4[Symbol.iterator]().next().done;
      }, e3.first = function(e4) {
        return e4[Symbol.iterator]().next().value;
      }, e3.some = function(e4, t4) {
        let n4 = 0;
        for (const i3 of e4) if (t4(i3, n4++)) return true;
        return false;
      }, e3.find = function(e4, t4) {
        for (const n4 of e4) if (t4(n4)) return n4;
      }, e3.filter = function* (e4, t4) {
        for (const n4 of e4) t4(n4) && (yield n4);
      }, e3.map = function* (e4, t4) {
        let n4 = 0;
        for (const i3 of e4) yield t4(i3, n4++);
      }, e3.flatMap = function* (e4, t4) {
        let n4 = 0;
        for (const i3 of e4) yield* t4(i3, n4++);
      }, e3.concat = function* (...e4) {
        for (const t4 of e4) (0, i2.isIterable)(t4) ? yield* t4 : yield t4;
      }, e3.reduce = function(e4, t4, n4) {
        let i3 = n4;
        for (const n5 of e4) i3 = t4(i3, n5);
        return i3;
      }, e3.length = function(e4) {
        let t4 = 0;
        for (const n4 of e4) t4++;
        return t4;
      }, e3.slice = function* (e4, t4, n4 = e4.length) {
        for (t4 < -e4.length && (t4 = 0), t4 < 0 && (t4 += e4.length), n4 < 0 ? n4 += e4.length : n4 > e4.length && (n4 = e4.length); t4 < n4; t4++) yield e4[t4];
      }, e3.consume = function(t4, n4 = Number.POSITIVE_INFINITY) {
        const i3 = [];
        if (0 === n4) return [i3, t4];
        const r4 = t4[Symbol.iterator]();
        for (let t5 = 0; t5 < n4; t5++) {
          const t6 = r4.next();
          if (t6.done) return [i3, e3.empty()];
          i3.push(t6.value);
        }
        return [i3, { [Symbol.iterator]: () => r4 }];
      }, e3.asyncToArray = async function(e4) {
        const t4 = [];
        for await (const n4 of e4) t4.push(n4);
        return Promise.resolve(t4);
      };
    })(r2 || (t2.Iterable = r2 = {}));
  }, 841: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.optimizeSequenceDiffs = function(e3, t3, n3) {
      let i3 = n3;
      return i3 = o(e3, t3, i3), i3 = o(e3, t3, i3), i3 = (function(e4, t4, n4) {
        if (!e4.getBoundaryScore || !t4.getBoundaryScore) return n4;
        for (let i4 = 0; i4 < n4.length; i4++) {
          const s3 = i4 > 0 ? n4[i4 - 1] : void 0, o2 = n4[i4], u = i4 + 1 < n4.length ? n4[i4 + 1] : void 0, l = new r2.OffsetRange(s3 ? s3.seq1Range.endExclusive + 1 : 0, u ? u.seq1Range.start - 1 : e4.length), h = new r2.OffsetRange(s3 ? s3.seq2Range.endExclusive + 1 : 0, u ? u.seq2Range.start - 1 : t4.length);
          o2.seq1Range.isEmpty ? n4[i4] = a(o2, e4, t4, l, h) : o2.seq2Range.isEmpty && (n4[i4] = a(o2.swap(), t4, e4, h, l).swap());
        }
        return n4;
      })(e3, t3, i3), i3;
    }, t2.removeShortMatches = function(e3, t3, n3) {
      const i3 = [];
      for (const e4 of n3) {
        const t4 = i3[i3.length - 1];
        t4 ? e4.seq1Range.start - t4.seq1Range.endExclusive <= 2 || e4.seq2Range.start - t4.seq2Range.endExclusive <= 2 ? i3[i3.length - 1] = new s2.SequenceDiff(t4.seq1Range.join(e4.seq1Range), t4.seq2Range.join(e4.seq2Range)) : i3.push(e4) : i3.push(e4);
      }
      return i3;
    }, t2.extendDiffsToEntireWordIfAppropriate = function(e3, t3, n3, i3, r3 = false) {
      const o2 = s2.SequenceDiff.invert(n3, e3.length), a2 = [];
      let u = new s2.OffsetPair(0, 0);
      function l(n4, l2) {
        if (n4.offset1 < u.offset1 || n4.offset2 < u.offset2) return;
        const h = i3(e3, n4.offset1), c = i3(t3, n4.offset2);
        if (!h || !c) return;
        let f = new s2.SequenceDiff(h, c);
        const d = f.intersect(l2);
        let g = d.seq1Range.length, m = d.seq2Range.length;
        for (; o2.length > 0; ) {
          const n5 = o2[0];
          if (!(n5.seq1Range.intersects(f.seq1Range) || n5.seq2Range.intersects(f.seq2Range))) break;
          const r4 = i3(e3, n5.seq1Range.start), a3 = i3(t3, n5.seq2Range.start), u2 = new s2.SequenceDiff(r4, a3), l3 = u2.intersect(n5);
          if (g += l3.seq1Range.length, m += l3.seq2Range.length, f = f.join(u2), !(f.seq1Range.endExclusive >= n5.seq1Range.endExclusive)) break;
          o2.shift();
        }
        (r3 && g + m < f.seq1Range.length + f.seq2Range.length || g + m < 2 * (f.seq1Range.length + f.seq2Range.length) / 3) && a2.push(f), u = f.getEndExclusives();
      }
      for (; o2.length > 0; ) {
        const e4 = o2.shift();
        e4.seq1Range.isEmpty || (l(e4.getStarts(), e4), l(e4.getEndExclusives().delta(-1), e4));
      }
      return (function(e4, t4) {
        const n4 = [];
        for (; e4.length > 0 || t4.length > 0; ) {
          const i4 = e4[0], r4 = t4[0];
          let s3;
          s3 = i4 && (!r4 || i4.seq1Range.start < r4.seq1Range.start) ? e4.shift() : t4.shift(), n4.length > 0 && n4[n4.length - 1].seq1Range.endExclusive >= s3.seq1Range.start ? n4[n4.length - 1] = n4[n4.length - 1].join(s3) : n4.push(s3);
        }
        return n4;
      })(n3, a2);
    }, t2.removeVeryShortMatchingLinesBetweenDiffs = function(e3, t3, n3) {
      let i3 = n3;
      if (0 === i3.length) return i3;
      let s3, o2 = 0;
      do {
        s3 = false;
        const a2 = [i3[0]];
        for (let u = 1; u < i3.length; u++) {
          let c = function(t4, n4) {
            const i4 = new r2.OffsetRange(h.seq1Range.endExclusive, l.seq1Range.start);
            return e3.getText(i4).replace(/\s/g, "").length <= 4 && (t4.seq1Range.length + t4.seq2Range.length > 5 || n4.seq1Range.length + n4.seq2Range.length > 5);
          };
          const l = i3[u], h = a2[a2.length - 1];
          c(h, l) ? (s3 = true, a2[a2.length - 1] = a2[a2.length - 1].join(l)) : a2.push(l);
        }
        i3 = a2;
      } while (o2++ < 10 && s3);
      return i3;
    }, t2.removeVeryShortMatchingTextBetweenLongDiffs = function(e3, t3, n3) {
      let o2 = n3;
      if (0 === o2.length) return o2;
      let a2, u = 0;
      do {
        a2 = false;
        const h = [o2[0]];
        for (let c = 1; c < o2.length; c++) {
          let g = function(n4, i3) {
            const s3 = new r2.OffsetRange(d.seq1Range.endExclusive, f.seq1Range.start);
            if (e3.countLinesIn(s3) > 5 || s3.length > 500) return false;
            const o3 = e3.getText(s3).trim();
            if (o3.length > 20 || o3.split(/\r\n|\r|\n/).length > 1) return false;
            const a3 = e3.countLinesIn(n4.seq1Range), u2 = n4.seq1Range.length, l2 = t3.countLinesIn(n4.seq2Range), h2 = n4.seq2Range.length, c2 = e3.countLinesIn(i3.seq1Range), g2 = i3.seq1Range.length, m = t3.countLinesIn(i3.seq2Range), p = i3.seq2Range.length;
            function b(e4) {
              return Math.min(e4, 130);
            }
            return Math.pow(Math.pow(b(40 * a3 + u2), 1.5) + Math.pow(b(40 * l2 + h2), 1.5), 1.5) + Math.pow(Math.pow(b(40 * c2 + g2), 1.5) + Math.pow(b(40 * m + p), 1.5), 1.5) > 74184.96480721243;
          };
          const f = o2[c], d = h[h.length - 1];
          g(d, f) ? (a2 = true, h[h.length - 1] = h[h.length - 1].join(f)) : h.push(f);
        }
        o2 = h;
      } while (u++ < 10 && a2);
      const l = [];
      return (0, i2.forEachWithNeighbors)(o2, (t4, n4, i3) => {
        let o3 = n4;
        function a3(e4) {
          return e4.length > 0 && e4.trim().length <= 3 && n4.seq1Range.length + n4.seq2Range.length > 100;
        }
        const u2 = e3.extendToFullLines(n4.seq1Range), h = e3.getText(new r2.OffsetRange(u2.start, n4.seq1Range.start));
        a3(h) && (o3 = o3.deltaStart(-h.length));
        const c = e3.getText(new r2.OffsetRange(n4.seq1Range.endExclusive, u2.endExclusive));
        a3(c) && (o3 = o3.deltaEnd(c.length));
        const f = s2.SequenceDiff.fromOffsetPairs(t4 ? t4.getEndExclusives() : s2.OffsetPair.zero, i3 ? i3.getStarts() : s2.OffsetPair.max), d = o3.intersect(f);
        l.length > 0 && d.getStarts().equals(l[l.length - 1].getEndExclusives()) ? l[l.length - 1] = l[l.length - 1].join(d) : l.push(d);
      }), l;
    };
    const i2 = n2(501), r2 = n2(991), s2 = n2(933);
    function o(e3, t3, n3) {
      if (0 === n3.length) return n3;
      const i3 = [];
      i3.push(n3[0]);
      for (let o3 = 1; o3 < n3.length; o3++) {
        const a2 = i3[i3.length - 1];
        let u = n3[o3];
        if (u.seq1Range.isEmpty || u.seq2Range.isEmpty) {
          const n4 = u.seq1Range.start - a2.seq1Range.endExclusive;
          let o4;
          for (o4 = 1; o4 <= n4 && (e3.getElement(u.seq1Range.start - o4) === e3.getElement(u.seq1Range.endExclusive - o4) && t3.getElement(u.seq2Range.start - o4) === t3.getElement(u.seq2Range.endExclusive - o4)); o4++) ;
          if (o4--, o4 === n4) {
            i3[i3.length - 1] = new s2.SequenceDiff(new r2.OffsetRange(a2.seq1Range.start, u.seq1Range.endExclusive - n4), new r2.OffsetRange(a2.seq2Range.start, u.seq2Range.endExclusive - n4));
            continue;
          }
          u = u.delta(-o4);
        }
        i3.push(u);
      }
      const o2 = [];
      for (let n4 = 0; n4 < i3.length - 1; n4++) {
        const a2 = i3[n4 + 1];
        let u = i3[n4];
        if (u.seq1Range.isEmpty || u.seq2Range.isEmpty) {
          const o3 = a2.seq1Range.start - u.seq1Range.endExclusive;
          let l;
          for (l = 0; l < o3 && (e3.isStronglyEqual(u.seq1Range.start + l, u.seq1Range.endExclusive + l) && t3.isStronglyEqual(u.seq2Range.start + l, u.seq2Range.endExclusive + l)); l++) ;
          if (l === o3) {
            i3[n4 + 1] = new s2.SequenceDiff(new r2.OffsetRange(u.seq1Range.start + o3, a2.seq1Range.endExclusive), new r2.OffsetRange(u.seq2Range.start + o3, a2.seq2Range.endExclusive));
            continue;
          }
          l > 0 && (u = u.delta(l));
        }
        o2.push(u);
      }
      return i3.length > 0 && o2.push(i3[i3.length - 1]), o2;
    }
    function a(e3, t3, n3, i3, r3) {
      let s3 = 1;
      for (; e3.seq1Range.start - s3 >= i3.start && e3.seq2Range.start - s3 >= r3.start && n3.isStronglyEqual(e3.seq2Range.start - s3, e3.seq2Range.endExclusive - s3) && s3 < 100; ) s3++;
      s3--;
      let o2 = 0;
      for (; e3.seq1Range.start + o2 < i3.endExclusive && e3.seq2Range.endExclusive + o2 < r3.endExclusive && n3.isStronglyEqual(e3.seq2Range.start + o2, e3.seq2Range.endExclusive + o2) && o2 < 100; ) o2++;
      if (0 === s3 && 0 === o2) return e3;
      let a2 = 0, u = -1;
      for (let i4 = -s3; i4 <= o2; i4++) {
        const r4 = e3.seq2Range.start + i4, s4 = e3.seq2Range.endExclusive + i4, o3 = e3.seq1Range.start + i4, l = t3.getBoundaryScore(o3) + n3.getBoundaryScore(r4) + n3.getBoundaryScore(s4);
        l > u && (u = l, a2 = i4);
      }
      return e3.delta(a2);
    }
  }, 846: (e2, t2) => {
    var n2;
    Object.defineProperty(t2, "__esModule", { value: true }), t2.SetWithKey = void 0, t2.groupBy = function(e3, t3) {
      const n3 = /* @__PURE__ */ Object.create(null);
      for (const i3 of e3) {
        const e4 = t3(i3);
        let r2 = n3[e4];
        r2 || (r2 = n3[e4] = []), r2.push(i3);
      }
      return n3;
    }, t2.diffSets = function(e3, t3) {
      const n3 = [], i3 = [];
      for (const i4 of e3) t3.has(i4) || n3.push(i4);
      for (const n4 of t3) e3.has(n4) || i3.push(n4);
      return { removed: n3, added: i3 };
    }, t2.diffMaps = function(e3, t3) {
      const n3 = [], i3 = [];
      for (const [i4, r2] of e3) t3.has(i4) || n3.push(r2);
      for (const [n4, r2] of t3) e3.has(n4) || i3.push(r2);
      return { removed: n3, added: i3 };
    }, t2.intersection = function(e3, t3) {
      const n3 = /* @__PURE__ */ new Set();
      for (const i3 of t3) e3.has(i3) && n3.add(i3);
      return n3;
    };
    class i2 {
      static {
        n2 = Symbol.toStringTag;
      }
      constructor(e3, t3) {
        this.toKey = t3, this._map = /* @__PURE__ */ new Map(), this[n2] = "SetWithKey";
        for (const t4 of e3) this.add(t4);
      }
      get size() {
        return this._map.size;
      }
      add(e3) {
        const t3 = this.toKey(e3);
        return this._map.set(t3, e3), this;
      }
      delete(e3) {
        return this._map.delete(this.toKey(e3));
      }
      has(e3) {
        return this._map.has(this.toKey(e3));
      }
      *entries() {
        for (const e3 of this._map.values()) yield [e3, e3];
      }
      keys() {
        return this.values();
      }
      *values() {
        for (const e3 of this._map.values()) yield e3;
      }
      clear() {
        this._map.clear();
      }
      forEach(e3, t3) {
        this._map.forEach((n3) => e3.call(t3, n3, n3, this));
      }
      [Symbol.iterator]() {
        return this.values();
      }
    }
    t2.SetWithKey = i2;
  }, 891: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.LineRangeFragment = t2.Array2D = void 0, t2.isSpace = function(e3) {
      return 32 === e3 || 9 === e3;
    };
    t2.Array2D = class {
      constructor(e3, t3) {
        this.width = e3, this.height = t3, this.array = [], this.array = new Array(e3 * t3);
      }
      get(e3, t3) {
        return this.array[e3 + t3 * this.width];
      }
      set(e3, t3, n3) {
        this.array[e3 + t3 * this.width] = n3;
      }
    };
    class n2 {
      static {
        this.chrKeys = /* @__PURE__ */ new Map();
      }
      static getKey(e3) {
        let t3 = this.chrKeys.get(e3);
        return void 0 === t3 && (t3 = this.chrKeys.size, this.chrKeys.set(e3, t3)), t3;
      }
      constructor(e3, t3, i2) {
        this.range = e3, this.lines = t3, this.source = i2, this.histogram = [];
        let r2 = 0;
        for (let i3 = e3.startLineNumber - 1; i3 < e3.endLineNumberExclusive - 1; i3++) {
          const e4 = t3[i3];
          for (let t4 = 0; t4 < e4.length; t4++) {
            r2++;
            const i4 = e4[t4], s3 = n2.getKey(i4);
            this.histogram[s3] = (this.histogram[s3] || 0) + 1;
          }
          r2++;
          const s2 = n2.getKey("\n");
          this.histogram[s2] = (this.histogram[s2] || 0) + 1;
        }
        this.totalCount = r2;
      }
      computeSimilarity(e3) {
        let t3 = 0;
        const n3 = Math.max(this.histogram.length, e3.histogram.length);
        for (let i2 = 0; i2 < n3; i2++) t3 += Math.abs((this.histogram[i2] ?? 0) - (e3.histogram[i2] ?? 0));
        return 1 - t3 / (this.totalCount + e3.totalCount);
      }
    }
    t2.LineRangeFragment = n2;
  }, 919: (e2) => {
    e2.exports = require("node:worker_threads");
  }, 933: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.DateTimeout = t2.InfiniteTimeout = t2.OffsetPair = t2.SequenceDiff = t2.DiffAlgorithmResult = void 0;
    const i2 = n2(501), r2 = n2(976), s2 = n2(991);
    class o {
      static trivial(e3, t3) {
        return new o([new a(s2.OffsetRange.ofLength(e3.length), s2.OffsetRange.ofLength(t3.length))], false);
      }
      static trivialTimedOut(e3, t3) {
        return new o([new a(s2.OffsetRange.ofLength(e3.length), s2.OffsetRange.ofLength(t3.length))], true);
      }
      constructor(e3, t3) {
        this.diffs = e3, this.hitTimeout = t3;
      }
    }
    t2.DiffAlgorithmResult = o;
    class a {
      static invert(e3, t3) {
        const n3 = [];
        return (0, i2.forEachAdjacent)(e3, (e4, i3) => {
          n3.push(a.fromOffsetPairs(e4 ? e4.getEndExclusives() : u.zero, i3 ? i3.getStarts() : new u(t3, (e4 ? e4.seq2Range.endExclusive - e4.seq1Range.endExclusive : 0) + t3)));
        }), n3;
      }
      static fromOffsetPairs(e3, t3) {
        return new a(new s2.OffsetRange(e3.offset1, t3.offset1), new s2.OffsetRange(e3.offset2, t3.offset2));
      }
      static assertSorted(e3) {
        let t3;
        for (const n3 of e3) {
          if (t3 && !(t3.seq1Range.endExclusive <= n3.seq1Range.start && t3.seq2Range.endExclusive <= n3.seq2Range.start)) throw new r2.BugIndicatingError("Sequence diffs must be sorted");
          t3 = n3;
        }
      }
      constructor(e3, t3) {
        this.seq1Range = e3, this.seq2Range = t3;
      }
      swap() {
        return new a(this.seq2Range, this.seq1Range);
      }
      toString() {
        return `${this.seq1Range} <-> ${this.seq2Range}`;
      }
      join(e3) {
        return new a(this.seq1Range.join(e3.seq1Range), this.seq2Range.join(e3.seq2Range));
      }
      delta(e3) {
        return 0 === e3 ? this : new a(this.seq1Range.delta(e3), this.seq2Range.delta(e3));
      }
      deltaStart(e3) {
        return 0 === e3 ? this : new a(this.seq1Range.deltaStart(e3), this.seq2Range.deltaStart(e3));
      }
      deltaEnd(e3) {
        return 0 === e3 ? this : new a(this.seq1Range.deltaEnd(e3), this.seq2Range.deltaEnd(e3));
      }
      intersectsOrTouches(e3) {
        return this.seq1Range.intersectsOrTouches(e3.seq1Range) || this.seq2Range.intersectsOrTouches(e3.seq2Range);
      }
      intersect(e3) {
        const t3 = this.seq1Range.intersect(e3.seq1Range), n3 = this.seq2Range.intersect(e3.seq2Range);
        if (t3 && n3) return new a(t3, n3);
      }
      getStarts() {
        return new u(this.seq1Range.start, this.seq2Range.start);
      }
      getEndExclusives() {
        return new u(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
      }
    }
    t2.SequenceDiff = a;
    class u {
      static {
        this.zero = new u(0, 0);
      }
      static {
        this.max = new u(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
      }
      constructor(e3, t3) {
        this.offset1 = e3, this.offset2 = t3;
      }
      toString() {
        return `${this.offset1} <-> ${this.offset2}`;
      }
      delta(e3) {
        return 0 === e3 ? this : new u(this.offset1 + e3, this.offset2 + e3);
      }
      equals(e3) {
        return this.offset1 === e3.offset1 && this.offset2 === e3.offset2;
      }
    }
    t2.OffsetPair = u;
    class l {
      static {
        this.instance = new l();
      }
      isValid() {
        return true;
      }
    }
    t2.InfiniteTimeout = l;
    t2.DateTimeout = class {
      constructor(e3, t3) {
        if (this.timeout = e3, this.shouldGracefullyFallBackOnTimeout = t3, this.startTime = Date.now(), this.numChecks = 0, this.valid = true, e3 <= 0) throw new r2.BugIndicatingError("timeout must be positive");
        this.expireTime = this.startTime + e3;
      }
      isValid() {
        if (this.numChecks++, false === this.valid || this.numChecks % 25 != 0) return this.valid;
        return !(Date.now() < this.expireTime) && this.valid && (this.valid = false), this.valid;
      }
      disable() {
        this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = () => true, this.valid = true;
      }
    };
  }, 970: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.CachedFunction = t2.LRUCachedFunction = t2.Cache = void 0, t2.identity = r2;
    const i2 = n2(68);
    function r2(e3) {
      return e3;
    }
    t2.Cache = class {
      constructor(e3) {
        this.task = e3, this.result = null;
      }
      get() {
        if (this.result) return this.result;
        const e3 = new i2.CancellationTokenSource(), t3 = this.task(e3.token);
        return this.result = { promise: t3, dispose: () => {
          this.result = null, e3.cancel(), e3.dispose();
        } }, this.result;
      }
    };
    t2.LRUCachedFunction = class {
      constructor(e3, t3) {
        this.lastCache = void 0, this.lastArgKey = void 0, "function" == typeof e3 ? (this._fn = e3, this._computeKey = r2) : (this._fn = t3, this._computeKey = e3.getCacheKey);
      }
      get(e3) {
        const t3 = this._computeKey(e3);
        return this.lastArgKey !== t3 && (this.lastArgKey = t3, this.lastCache = this._fn(e3)), this.lastCache;
      }
    };
    t2.CachedFunction = class {
      get cachedValues() {
        return this._map;
      }
      constructor(e3, t3) {
        this._map = /* @__PURE__ */ new Map(), this._map2 = /* @__PURE__ */ new Map(), "function" == typeof e3 ? (this._fn = e3, this._computeKey = r2) : (this._fn = t3, this._computeKey = e3.getCacheKey);
      }
      get(e3) {
        const t3 = this._computeKey(e3);
        if (this._map2.has(t3)) return this._map2.get(t3);
        const n3 = this._fn(e3);
        return this._map.set(e3, n3), this._map2.set(t3, n3), n3;
      }
    };
  }, 976: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING = t2.BugIndicatingError = t2.ErrorNoTelemetry = t2.ExpectedError = t2.NotSupportedError = t2.NotImplementedError = t2.ReadonlyError = t2.CancellationError = t2.errorHandler = t2.ErrorHandler = void 0, t2.setUnexpectedErrorHandler = function(e3) {
      t2.errorHandler.setUnexpectedErrorHandler(e3);
    }, t2.isSigPipeError = function(e3) {
      if (!e3 || "object" != typeof e3) return false;
      const t3 = e3;
      return "EPIPE" === t3.code && "WRITE" === t3.syscall?.toUpperCase();
    }, t2.onBugIndicatingError = function(e3) {
      return void t2.errorHandler.onUnexpectedError(e3);
    }, t2.onUnexpectedError = function(e3) {
      r2(e3) || t2.errorHandler.onUnexpectedError(e3);
      return;
    }, t2.onUnexpectedExternalError = function(e3) {
      r2(e3) || t2.errorHandler.onUnexpectedExternalError(e3);
      return;
    }, t2.transformErrorForSerialization = function e3(t3) {
      if (t3 instanceof Error) {
        const { name: n3, message: i3, cause: r3 } = t3;
        return { $isError: true, name: n3, message: i3, stack: t3.stacktrace || t3.stack, noTelemetry: h.isErrorNoTelemetry(t3), cause: r3 ? e3(r3) : void 0, code: t3.code };
      }
      return t3;
    }, t2.transformErrorFromSerialization = function e3(t3) {
      let n3;
      t3.noTelemetry ? n3 = new h() : (n3 = new Error(), n3.name = t3.name);
      n3.message = t3.message, n3.stack = t3.stack, t3.code && (n3.code = t3.code);
      t3.cause && (n3.cause = e3(t3.cause));
      return n3;
    }, t2.isCancellationError = r2, t2.canceled = function() {
      const e3 = new Error(i2);
      return e3.name = e3.message, e3;
    }, t2.createAbortError = function(e3) {
      return new DOMException(e3, "AbortError");
    }, t2.illegalArgument = function(e3) {
      return e3 ? new Error(`Illegal argument: ${e3}`) : new Error("Illegal argument");
    }, t2.illegalState = function(e3) {
      return e3 ? new Error(`Illegal state: ${e3}`) : new Error("Illegal state");
    }, t2.getErrorMessage = function(e3) {
      if (!e3) return "Error";
      if (e3.message) return e3.message;
      if (e3.stack) return e3.stack.split("\n")[0];
      return String(e3);
    }, t2.hasTimeoutErrorInCause = function(e3) {
      let t3 = e3;
      for (; t3; ) {
        if (t3 instanceof DOMException && "TimeoutError" === t3.name) return true;
        if (!(t3 instanceof Error && t3.cause)) break;
        t3 = t3.cause;
      }
      return false;
    }, t2.abortablePromise = function(e3, t3, n3) {
      if (!n3) return e3;
      n3.throwIfAborted();
      let i3, r3, s3 = n3;
      const o2 = new Promise((e4, t4) => {
        i3 = e4, r3 = t4;
      }), a2 = () => {
        const e4 = { signal: s3, resolve: i3, reject: r3 };
        return s3?.removeEventListener("abort", u2), s3 = void 0, i3 = void 0, r3 = void 0, e4;
      }, u2 = () => {
        const { signal: e4, reject: n4 } = a2(), i4 = new Error(t3);
        i4.cause = e4?.reason, n4?.(i4);
      };
      return n3.addEventListener("abort", u2), e3.then((e4) => a2().resolve?.(e4), (e4) => a2().reject?.(e4)), o2;
    }, t2.shouldLogCancellationDebugTrace = g, t2.enableCancellationErrorLoggingForDevUser = function(e3) {
      e3 && (m = true);
    }, t2.isCancellationErrorLoggingEnabled = function() {
      return m;
    };
    class n2 {
      constructor() {
        this.listeners = [], this.unexpectedErrorHandler = function(e3) {
          setTimeout(() => {
            if (e3.stack) {
              if (h.isErrorNoTelemetry(e3)) throw new h(e3.message + "\n\n" + e3.stack);
              throw new Error(e3.message + "\n\n" + e3.stack);
            }
            throw e3;
          }, 0);
        };
      }
      addListener(e3) {
        return this.listeners.push(e3), () => {
          this._removeListener(e3);
        };
      }
      emit(e3) {
        this.listeners.forEach((t3) => {
          t3(e3);
        });
      }
      _removeListener(e3) {
        this.listeners.splice(this.listeners.indexOf(e3), 1);
      }
      setUnexpectedErrorHandler(e3) {
        this.unexpectedErrorHandler = e3;
      }
      getUnexpectedErrorHandler() {
        return this.unexpectedErrorHandler;
      }
      onUnexpectedError(e3) {
        this.unexpectedErrorHandler(e3), this.emit(e3);
      }
      onUnexpectedExternalError(e3) {
        this.unexpectedErrorHandler(e3);
      }
    }
    t2.ErrorHandler = n2, t2.errorHandler = new n2();
    const i2 = "Canceled";
    function r2(e3) {
      return e3 instanceof s2 || e3 instanceof Error && e3.name === i2 && e3.message === i2;
    }
    class s2 extends Error {
      constructor() {
        if (super(i2), this.name = this.message, m && "undefined" != typeof console && g()) {
          const e3 = new Error().stack ?? "";
          t2.ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING.some((t3) => e3.includes(t3)) && console.trace("[DebugCancellation] CancellationError created");
        }
      }
    }
    t2.CancellationError = s2;
    class o extends TypeError {
      constructor(e3) {
        super(e3 ? `${e3} is read-only and cannot be changed` : "Cannot change read-only property");
      }
    }
    t2.ReadonlyError = o;
    class a extends Error {
      constructor(e3) {
        super("NotImplemented"), e3 && (this.message = e3);
      }
    }
    t2.NotImplementedError = a;
    class u extends Error {
      constructor(e3) {
        super("NotSupported"), e3 && (this.message = e3);
      }
    }
    t2.NotSupportedError = u;
    class l extends Error {
      constructor() {
        super(...arguments), this.isExpected = true;
      }
    }
    t2.ExpectedError = l;
    class h extends Error {
      constructor(e3) {
        super(e3), this.name = "CodeExpectedError";
      }
      static fromError(e3) {
        if (e3 instanceof h) return e3;
        const t3 = new h();
        return t3.message = e3.message, t3.stack = e3.stack, t3;
      }
      static isErrorNoTelemetry(e3) {
        return "CodeExpectedError" === e3.name;
      }
    }
    t2.ErrorNoTelemetry = h;
    class c extends Error {
      constructor(e3) {
        super(e3 || "An unexpected bug occurred."), Object.setPrototypeOf(this, c.prototype);
      }
    }
    t2.BugIndicatingError = c, t2.ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"];
    const f = 5e3;
    let d = 0;
    function g() {
      const e3 = Date.now();
      return !(e3 < d) && (d = e3 + f, true);
    }
    let m = false;
  }, 988: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.DiffChange = void 0;
    t2.DiffChange = class {
      constructor(e3, t3, n2, i2) {
        this.originalStart = e3, this.originalLength = t3, this.modifiedStart = n2, this.modifiedLength = i2;
      }
      getOriginalEnd() {
        return this.originalStart + this.originalLength;
      }
      getModifiedEnd() {
        return this.modifiedStart + this.modifiedLength;
      }
    };
  }, 991: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.OffsetRangeSet = t2.OffsetRange = void 0;
    const i2 = n2(976);
    class r2 {
      static fromTo(e3, t3) {
        return new r2(e3, t3);
      }
      static addRange(e3, t3) {
        let n3 = 0;
        for (; n3 < t3.length && t3[n3].endExclusive < e3.start; ) n3++;
        let i3 = n3;
        for (; i3 < t3.length && t3[i3].start <= e3.endExclusive; ) i3++;
        if (n3 === i3) t3.splice(n3, 0, e3);
        else {
          const s3 = Math.min(e3.start, t3[n3].start), o = Math.max(e3.endExclusive, t3[i3 - 1].endExclusive);
          t3.splice(n3, i3 - n3, new r2(s3, o));
        }
      }
      static tryCreate(e3, t3) {
        if (!(e3 > t3)) return new r2(e3, t3);
      }
      static ofLength(e3) {
        return new r2(0, e3);
      }
      static ofStartAndLength(e3, t3) {
        return new r2(e3, e3 + t3);
      }
      static emptyAt(e3) {
        return new r2(e3, e3);
      }
      constructor(e3, t3) {
        if (this.start = e3, this.endExclusive = t3, e3 > t3) throw new i2.BugIndicatingError(`Invalid range: ${this.toString()}`);
      }
      get isEmpty() {
        return this.start === this.endExclusive;
      }
      delta(e3) {
        return new r2(this.start + e3, this.endExclusive + e3);
      }
      deltaStart(e3) {
        return new r2(this.start + e3, this.endExclusive);
      }
      deltaEnd(e3) {
        return new r2(this.start, this.endExclusive + e3);
      }
      get length() {
        return this.endExclusive - this.start;
      }
      toString() {
        return `[${this.start}, ${this.endExclusive})`;
      }
      equals(e3) {
        return this.start === e3.start && this.endExclusive === e3.endExclusive;
      }
      containsRange(e3) {
        return this.start <= e3.start && e3.endExclusive <= this.endExclusive;
      }
      contains(e3) {
        return this.start <= e3 && e3 < this.endExclusive;
      }
      join(e3) {
        return new r2(Math.min(this.start, e3.start), Math.max(this.endExclusive, e3.endExclusive));
      }
      intersect(e3) {
        const t3 = Math.max(this.start, e3.start), n3 = Math.min(this.endExclusive, e3.endExclusive);
        if (t3 <= n3) return new r2(t3, n3);
      }
      intersectionLength(e3) {
        const t3 = Math.max(this.start, e3.start), n3 = Math.min(this.endExclusive, e3.endExclusive);
        return Math.max(0, n3 - t3);
      }
      intersects(e3) {
        return Math.max(this.start, e3.start) < Math.min(this.endExclusive, e3.endExclusive);
      }
      intersectsOrTouches(e3) {
        return Math.max(this.start, e3.start) <= Math.min(this.endExclusive, e3.endExclusive);
      }
      isBefore(e3) {
        return this.endExclusive <= e3.start;
      }
      isAfter(e3) {
        return this.start >= e3.endExclusive;
      }
      slice(e3) {
        return e3.slice(this.start, this.endExclusive);
      }
      substring(e3) {
        return e3.substring(this.start, this.endExclusive);
      }
      clip(e3) {
        if (this.isEmpty) throw new i2.BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
        return Math.max(this.start, Math.min(this.endExclusive - 1, e3));
      }
      clipCyclic(e3) {
        if (this.isEmpty) throw new i2.BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
        return e3 < this.start ? this.endExclusive - (this.start - e3) % this.length : e3 >= this.endExclusive ? this.start + (e3 - this.start) % this.length : e3;
      }
      map(e3) {
        const t3 = [];
        for (let n3 = this.start; n3 < this.endExclusive; n3++) t3.push(e3(n3));
        return t3;
      }
      forEach(e3) {
        for (let t3 = this.start; t3 < this.endExclusive; t3++) e3(t3);
      }
    }
    t2.OffsetRange = r2;
    class s2 {
      constructor() {
        this._sortedRanges = [];
      }
      addRange(e3) {
        let t3 = 0;
        for (; t3 < this._sortedRanges.length && this._sortedRanges[t3].endExclusive < e3.start; ) t3++;
        let n3 = t3;
        for (; n3 < this._sortedRanges.length && this._sortedRanges[n3].start <= e3.endExclusive; ) n3++;
        if (t3 === n3) this._sortedRanges.splice(t3, 0, e3);
        else {
          const i3 = Math.min(e3.start, this._sortedRanges[t3].start), s3 = Math.max(e3.endExclusive, this._sortedRanges[n3 - 1].endExclusive);
          this._sortedRanges.splice(t3, n3 - t3, new r2(i3, s3));
        }
      }
      toString() {
        return this._sortedRanges.map((e3) => e3.toString()).join(", ");
      }
      intersectsStrict(e3) {
        let t3 = 0;
        for (; t3 < this._sortedRanges.length && this._sortedRanges[t3].endExclusive <= e3.start; ) t3++;
        return t3 < this._sortedRanges.length && this._sortedRanges[t3].start < e3.endExclusive;
      }
      intersectWithRange(e3) {
        const t3 = new s2();
        for (const n3 of this._sortedRanges) {
          const i3 = n3.intersect(e3);
          i3 && t3.addRange(i3);
        }
        return t3;
      }
      intersectWithRangeLength(e3) {
        return this.intersectWithRange(e3).length;
      }
      get length() {
        return this._sortedRanges.reduce((e3, t3) => e3 + t3.length, 0);
      }
    }
    t2.OffsetRangeSet = s2;
  } }, t = {};
  function n(i2) {
    var r2 = t[i2];
    if (void 0 !== r2) return r2.exports;
    var s2 = t[i2] = { exports: {} };
    return e[i2].call(s2.exports, s2, s2.exports, n), s2.exports;
  }
  var i = {};
  (() => {
    var e2 = i;
    Object.defineProperty(e2, "__esModule", { value: true });
    const t2 = n(919), r2 = n(8);
    if (!t2.parentPort) throw new Error("Parent port is not defined. This worker must be run in a worker thread context.");
    t2.parentPort.on("message", async (e3) => {
      try {
        const n2 = await (async () => {
          const t3 = e3.request;
          if ("computeLinesDiff" === t3.kind) {
            const n3 = await (0, r2.computeLinesDiff)(t3.request);
            return { id: e3.id, response: { kind: "computeLinesDiff", response: n3 } };
          }
          {
            const e4 = t3.kind;
            throw new Error(`Unknown request kind: ${e4}`);
          }
        })();
        t2.parentPort?.postMessage(n2);
      } catch (n2) {
        const i2 = { id: e3.id, error: { message: n2?.message ?? String(n2), code: n2?.code, stack: n2?.stack } };
        try {
          t2.parentPort?.postMessage(i2);
        } catch {
        }
      }
    });
  })();
  var r = exports;
  for (var s in i) r[s] = i[s];
  i.__esModule && Object.defineProperty(r, "__esModule", { value: true });
})();
