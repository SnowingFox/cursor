/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e635535f-2fb6-5908-ab9c-56cf0c107edd");
  } catch (e2) {
  }
})();
function __decorate(n, e, t, a) {
  var s = arguments.length, r = s < 3 ? e : a === null ? a = Object.getOwnPropertyDescriptor(e, t) : a, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") r = Reflect.decorate(n, e, t, a);
  else for (var i = n.length - 1; i >= 0; i--) (o = n[i]) && (r = (s < 3 ? o(r) : s > 3 ? o(e, t, r) : o(e, t)) || r);
  return s > 3 && r && Object.defineProperty(e, t, r), r;
}
var ErrorHandler = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(n) {
      setTimeout(() => {
        throw n.stack ? ErrorNoTelemetry.isErrorNoTelemetry(n) ? new ErrorNoTelemetry(n.message + `

` + n.stack) : new Error(n.message + `

` + n.stack) : n;
      }, 0);
    };
  }
  addListener(n) {
    return this.listeners.push(n), () => {
      this._removeListener(n);
    };
  }
  emit(n) {
    this.listeners.forEach((e) => {
      e(n);
    });
  }
  _removeListener(n) {
    this.listeners.splice(this.listeners.indexOf(n), 1);
  }
  setUnexpectedErrorHandler(n) {
    this.unexpectedErrorHandler = n;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(n) {
    this.unexpectedErrorHandler(n), this.emit(n);
  }
  onUnexpectedExternalError(n) {
    this.unexpectedErrorHandler(n);
  }
}, errorHandler = new ErrorHandler();
function onUnexpectedError(n) {
  isCancellationError(n) || errorHandler.onUnexpectedError(n);
}
function transformErrorForSerialization(n) {
  if (n instanceof Error) {
    const { name: e, message: t, cause: a } = n, s = n.stacktrace || n.stack;
    return { $isError: true, name: e, message: t, stack: s, noTelemetry: ErrorNoTelemetry.isErrorNoTelemetry(n), cause: a ? transformErrorForSerialization(a) : void 0, code: n.code };
  }
  return n;
}
var canceledName = "Canceled";
function isCancellationError(n) {
  return n instanceof CancellationError ? true : n instanceof Error && n.name === canceledName && n.message === canceledName;
}
var CancellationError = class extends Error {
  constructor() {
    if (super(canceledName), this.name = this.message, _cancellationErrorLoggingEnabled && typeof console < "u" && shouldLogCancellationDebugTrace()) {
      const n = new Error().stack ?? "";
      ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING.some((e) => n.includes(e)) && console.trace("[DebugCancellation] CancellationError created");
    }
  }
}, ErrorNoTelemetry = class tn extends Error {
  constructor(e) {
    super(e), this.name = "CodeExpectedError";
  }
  static fromError(e) {
    if (e instanceof tn) return e;
    const t = new tn();
    return t.message = e.message, t.stack = e.stack, t;
  }
  static isErrorNoTelemetry(e) {
    return e.name === "CodeExpectedError";
  }
}, ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], CANCELLATION_DEBUG_TRACE_THROTTLE_MS = 5e3, _nextCancellationDebugTraceTime = 0;
function shouldLogCancellationDebugTrace() {
  const n = Date.now();
  return n < _nextCancellationDebugTraceTime ? false : (_nextCancellationDebugTraceTime = n + CANCELLATION_DEBUG_TRACE_THROTTLE_MS, true);
}
var _cancellationErrorLoggingEnabled = false, _a, _b;
function groupBy(n, e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const a of n) {
    const s = e(a);
    let r = t[s];
    r || (r = t[s] = []), r.push(a);
  }
  return t;
}
var SetWithKey = class {
  constructor(n, e) {
    this.toKey = e, this._map = /* @__PURE__ */ new Map(), this[_a] = "SetWithKey";
    for (const t of n) this.add(t);
  }
  get size() {
    return this._map.size;
  }
  add(n) {
    const e = this.toKey(n);
    return this._map.set(e, n), this;
  }
  delete(n) {
    return this._map.delete(this.toKey(n));
  }
  has(n) {
    return this._map.has(this.toKey(n));
  }
  *entries() {
    for (const n of this._map.values()) yield [n, n];
  }
  keys() {
    return this.values();
  }
  *values() {
    for (const n of this._map.values()) yield n;
  }
  clear() {
    this._map.clear();
  }
  forEach(n, e) {
    this._map.forEach((t) => n.call(e, t, t, this));
  }
  [(_b = Symbol.iterator, _a = Symbol.toStringTag, _b)]() {
    return this.values();
  }
};
function createSingleCallFunction(n, e) {
  const t = this;
  let a = false, s;
  return function() {
    if (a) return s;
    if (a = true, e) try {
      s = n.apply(t, arguments);
    } finally {
      e();
    }
    else s = n.apply(t, arguments);
    return s;
  };
}
function findLastIdxMonotonous(n, e, t = 0, a = n.length) {
  let s = t, r = a;
  for (; s < r; ) {
    const o = Math.floor((s + r) / 2);
    e(n[o]) ? s = o + 1 : r = o;
  }
  return s - 1;
}
var _MonotonousArray = class dn {
  constructor(e) {
    this._array = e, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(e) {
    if (dn.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const a of this._array) if (this._prevFindLastPredicate(a) && !e(a)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = e;
    }
    const t = findLastIdxMonotonous(this._array, e, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = t + 1, t === -1 ? void 0 : this._array[t];
  }
};
_MonotonousArray.assertInvariants = false;
var CompareResult;
((n) => {
  function e(r) {
    return r < 0;
  }
  n.isLessThan = e;
  function t(r) {
    return r <= 0;
  }
  n.isLessThanOrEqual = t;
  function a(r) {
    return r > 0;
  }
  n.isGreaterThan = a;
  function s(r) {
    return r === 0;
  }
  n.isNeitherLessOrGreaterThan = s, n.greaterThan = 1, n.lessThan = -1, n.neitherLessOrGreaterThan = 0;
})(CompareResult || (CompareResult = {}));
function compareBy(n, e) {
  return (t, a) => e(n(t), n(a));
}
var numberComparator = (n, e) => n - e, _CallbackIterable = class an {
  constructor(e) {
    this.iterate = e;
  }
  forEach(e) {
    this.iterate((t) => (e(t), true));
  }
  toArray() {
    const e = [];
    return this.iterate((t) => (e.push(t), true)), e;
  }
  filter(e) {
    return new an((t) => this.iterate((a) => e(a) ? t(a) : true));
  }
  map(e) {
    return new an((t) => this.iterate((a) => t(e(a))));
  }
  some(e) {
    let t = false;
    return this.iterate((a) => (t = e(a), !t)), t;
  }
  findFirst(e) {
    let t;
    return this.iterate((a) => e(a) ? (t = a, false) : true), t;
  }
  findLast(e) {
    let t;
    return this.iterate((a) => (e(a) && (t = a), true)), t;
  }
  findLastMaxBy(e) {
    let t, a = true;
    return this.iterate((s) => ((a || CompareResult.isGreaterThan(e(s, t))) && (a = false, t = s), true)), t;
  }
};
_CallbackIterable.empty = new _CallbackIterable((n) => {
});
var _a2, _b2, _c, ResourceMapEntry = class {
  constructor(n, e) {
    this.uri = n, this.value = e;
  }
};
function isEntries(n) {
  return Array.isArray(n);
}
var _ResourceMap = class q {
  constructor(e, t) {
    if (this[_a2] = "ResourceMap", e instanceof q) this.map = new Map(e.map), this.toKey = t ?? q.defaultToKey;
    else if (isEntries(e)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? q.defaultToKey;
      for (const [a, s] of e) this.set(a, s);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = e ?? q.defaultToKey;
  }
  set(e, t) {
    return this.map.set(this.toKey(e), new ResourceMapEntry(e, t)), this;
  }
  get(e) {
    return this.map.get(this.toKey(e))?.value;
  }
  has(e) {
    return this.map.has(this.toKey(e));
  }
  get size() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  delete(e) {
    return this.map.delete(this.toKey(e));
  }
  forEach(e, t) {
    typeof t < "u" && (e = e.bind(t));
    for (const [a, s] of this.map) e(s.value, s.uri, this);
  }
  *values() {
    for (const e of this.map.values()) yield e.value;
  }
  *keys() {
    for (const e of this.map.values()) yield e.uri;
  }
  *entries() {
    for (const e of this.map.values()) yield [e.uri, e.value];
  }
  *[(_a2 = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, e] of this.map) yield [e.uri, e.value];
  }
};
_ResourceMap.defaultToKey = (n) => n.toString();
var ResourceMap = _ResourceMap, ResourceSet = class {
  constructor(n, e) {
    this[_b2] = "ResourceSet", !n || typeof n == "function" ? this._map = new ResourceMap(n) : (this._map = new ResourceMap(e), n.forEach(this.add, this));
  }
  get size() {
    return this._map.size;
  }
  add(n) {
    return this._map.set(n, n), this;
  }
  clear() {
    this._map.clear();
  }
  delete(n) {
    return this._map.delete(n);
  }
  forEach(n, e) {
    this._map.forEach((t, a) => n.call(e, a, a, this));
  }
  has(n) {
    return this._map.has(n);
  }
  *entries() {
    for (const n of this._map.entries()) yield n;
  }
  *keys() {
    yield* this._map.keys();
  }
  *values() {
    yield* this._map.keys();
  }
  [(_b2 = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
}, LinkedMap = class {
  constructor() {
    this[_c] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
  has(n) {
    return this._map.has(n);
  }
  get(n, e = 0) {
    const t = this._map.get(n);
    if (t) return e !== 0 && this.touch(t, e), t.value;
  }
  set(n, e, t = 0) {
    let a = this._map.get(n);
    if (a) a.value = e, t !== 0 && this.touch(a, t);
    else {
      switch (a = { key: n, value: e, next: void 0, previous: void 0 }, t) {
        case 0:
          this.addItemLast(a);
          break;
        case 1:
          this.addItemFirst(a);
          break;
        case 2:
          this.addItemLast(a);
          break;
        default:
          this.addItemLast(a);
          break;
      }
      this._map.set(n, a), this._size++;
    }
    return this;
  }
  delete(n) {
    return !!this.remove(n);
  }
  remove(n) {
    const e = this._map.get(n);
    if (e) return this._map.delete(n), this.removeItem(e), this._size--, e.value;
  }
  shift() {
    if (!this._head && !this._tail) return;
    if (!this._head || !this._tail) throw new Error("Invalid list");
    const n = this._head;
    return this._map.delete(n.key), this.removeItem(n), this._size--, n.value;
  }
  forEach(n, e) {
    const t = this._state;
    let a = this._head;
    for (; a; ) {
      if (e ? n.bind(e)(a.value, a.key, this) : n(a.value, a.key, this), this._state !== t) throw new Error("LinkedMap got modified during iteration.");
      a = a.next;
    }
  }
  keys() {
    return this.iterateLinked(this._state, this._head, (n) => n.key);
  }
  values() {
    return this.iterateLinked(this._state, this._head, (n) => n.value);
  }
  entries() {
    return this.iterateLinked(this._state, this._head, (n) => [n.key, n.value]);
  }
  *iterateLinked(n, e, t) {
    for (; ; ) {
      if (this._state !== n) throw new Error("LinkedMap got modified during iteration.");
      if (!e) return;
      const a = t(e);
      e = e.next, yield a;
    }
  }
  [(_c = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(n) {
    if (n >= this.size) return;
    if (n === 0) {
      this.clear();
      return;
    }
    let e = this._head, t = this.size;
    for (; e && t > n; ) this._map.delete(e.key), e = e.next, t--;
    this._head = e, this._size = t, e && (e.previous = void 0), this._state++;
  }
  trimNew(n) {
    if (n >= this.size) return;
    if (n === 0) {
      this.clear();
      return;
    }
    let e = this._tail, t = this.size;
    for (; e && t > n; ) this._map.delete(e.key), e = e.previous, t--;
    this._tail = e, this._size = t, e && (e.next = void 0), this._state++;
  }
  addItemFirst(n) {
    if (!this._head && !this._tail) this._tail = n;
    else if (this._head) n.next = this._head, this._head.previous = n;
    else throw new Error("Invalid list");
    this._head = n, this._state++;
  }
  addItemLast(n) {
    if (!this._head && !this._tail) this._head = n;
    else if (this._tail) n.previous = this._tail, this._tail.next = n;
    else throw new Error("Invalid list");
    this._tail = n, this._state++;
  }
  removeItem(n) {
    if (n === this._head && n === this._tail) this._head = void 0, this._tail = void 0;
    else if (n === this._head) {
      if (!n.next) throw new Error("Invalid list");
      n.next.previous = void 0, this._head = n.next;
    } else if (n === this._tail) {
      if (!n.previous) throw new Error("Invalid list");
      n.previous.next = void 0, this._tail = n.previous;
    } else {
      const e = n.next, t = n.previous;
      if (!e || !t) throw new Error("Invalid list");
      e.previous = t, t.next = e;
    }
    n.next = void 0, n.previous = void 0, this._state++;
  }
  touch(n, e) {
    if (!this._head || !this._tail) throw new Error("Invalid list");
    if (!(e !== 1 && e !== 2)) {
      if (e === 1) {
        if (n === this._head) return;
        const t = n.next, a = n.previous;
        n === this._tail ? (a.next = void 0, this._tail = a) : (t.previous = a, a.next = t), n.previous = void 0, n.next = this._head, this._head.previous = n, this._head = n, this._state++;
      } else if (e === 2) {
        if (n === this._tail) return;
        const t = n.next, a = n.previous;
        n === this._head ? (t.previous = void 0, this._head = t) : (t.previous = a, a.next = t), n.next = void 0, n.previous = this._tail, this._tail.next = n, this._tail = n, this._state++;
      }
    }
  }
  toJSON() {
    const n = [];
    return this.forEach((e, t) => {
      n.push([t, e]);
    }), n;
  }
  fromJSON(n) {
    this.clear();
    for (const [e, t] of n) this.set(e, t);
  }
}, SetMap = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(n, e) {
    let t = this.map.get(n);
    t || (t = /* @__PURE__ */ new Set(), this.map.set(n, t)), t.add(e);
  }
  delete(n, e) {
    const t = this.map.get(n);
    t && (t.delete(e), t.size === 0 && this.map.delete(n));
  }
  forEach(n, e) {
    const t = this.map.get(n);
    t && t.forEach(e);
  }
  get(n) {
    const e = this.map.get(n);
    return e || /* @__PURE__ */ new Set();
  }
};
function isIterable(n) {
  return !!n && typeof n[Symbol.iterator] == "function";
}
function isUndefined(n) {
  return typeof n > "u";
}
function isUndefinedOrNull(n) {
  return isUndefined(n) || n === null;
}
var Iterable;
((n) => {
  function e(v) {
    return v && typeof v == "object" && typeof v[Symbol.iterator] == "function";
  }
  n.is = e;
  const t = Object.freeze([]);
  function a() {
    return t;
  }
  n.empty = a;
  function* s(v) {
    yield v;
  }
  n.single = s;
  function r(v) {
    return e(v) ? v : s(v);
  }
  n.wrap = r;
  function o(v) {
    return v || t;
  }
  n.from = o;
  function* i(v) {
    for (let S = v.length - 1; S >= 0; S--) yield v[S];
  }
  n.reverse = i;
  function l(v) {
    return !v || v[Symbol.iterator]().next().done === true;
  }
  n.isEmpty = l;
  function c(v) {
    return v[Symbol.iterator]().next().value;
  }
  n.first = c;
  function u(v, S) {
    let N = 0;
    for (const D of v) if (S(D, N++)) return true;
    return false;
  }
  n.some = u;
  function m(v, S) {
    for (const N of v) if (S(N)) return N;
  }
  n.find = m;
  function* d(v, S) {
    for (const N of v) S(N) && (yield N);
  }
  n.filter = d;
  function* g(v, S) {
    let N = 0;
    for (const D of v) yield S(D, N++);
  }
  n.map = g;
  function* k(v, S) {
    let N = 0;
    for (const D of v) yield* S(D, N++);
  }
  n.flatMap = k;
  function* y(...v) {
    for (const S of v) isIterable(S) ? yield* S : yield S;
  }
  n.concat = y;
  function b(v, S, N) {
    let D = N;
    for (const x of v) D = S(D, x);
    return D;
  }
  n.reduce = b;
  function R(v) {
    let S = 0;
    for (const N of v) S++;
    return S;
  }
  n.length = R;
  function* I(v, S, N = v.length) {
    for (S < -v.length && (S = 0), S < 0 && (S += v.length), N < 0 ? N += v.length : N > v.length && (N = v.length); S < N; S++) yield v[S];
  }
  n.slice = I;
  function w(v, S = Number.POSITIVE_INFINITY) {
    const N = [];
    if (S === 0) return [N, v];
    const D = v[Symbol.iterator]();
    for (let x = 0; x < S; x++) {
      const Xe = D.next();
      if (Xe.done) return [N, n.empty()];
      N.push(Xe.value);
    }
    return [N, { [Symbol.iterator]() {
      return D;
    } }];
  }
  n.consume = w;
  async function L(v) {
    const S = [];
    for await (const N of v) S.push(N);
    return Promise.resolve(S);
  }
  n.asyncToArray = L;
})(Iterable || (Iterable = {}));
var shouldReportLeaks = void 0, reportedLifecycleMisuses = /* @__PURE__ */ new Set(), MAX_REPORTED_LIFECYCLE_MISUSES = 50;
function reportLifecycleMisuse(n, e) {
  if (disposableTracker?.onLifecycleMisuse?.(n, e), !shouldReportLeaks) return;
  const t = `${e}\0${n.stack ?? ""}`;
  reportedLifecycleMisuses.has(t) || reportedLifecycleMisuses.size >= MAX_REPORTED_LIFECYCLE_MISUSES || (reportedLifecycleMisuses.add(t), shouldReportLeaks(n, e));
}
function reportPostDisposeWrite(n) {
  reportLifecycleMisuse(n, "disposable_post_dispose_set");
}
var TRACK_DISPOSABLES = false, disposableTracker = null, _DisposableTracker = class pn {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(e) {
    let t = this.livingDisposables.get(e);
    return t || (t = { parent: null, source: null, isSingleton: false, value: e, idx: pn.idx++ }, this.livingDisposables.set(e, t)), t;
  }
  trackDisposable(e) {
    const t = this.getDisposableData(e);
    t.source || (t.source = new Error().stack);
  }
  setParent(e, t) {
    const a = this.getDisposableData(e);
    a.parent = t;
  }
  markAsDisposed(e) {
    this.livingDisposables.delete(e);
  }
  markAsSingleton(e) {
    this.getDisposableData(e).isSingleton = true;
  }
  getRootParent(e, t) {
    const a = t.get(e);
    if (a) return a;
    const s = e.parent ? this.getRootParent(this.getDisposableData(e.parent), t) : e;
    return t.set(e, s), s;
  }
  getTrackedDisposables() {
    const e = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, a]) => a.source !== null && !this.getRootParent(a, e).isSingleton).flatMap(([a]) => a);
  }
  computeLeakingDisposables(e = 10, t) {
    let a;
    if (t) a = t;
    else {
      const l = /* @__PURE__ */ new Map(), c = [...this.livingDisposables.values()].filter((m) => m.source !== null && !this.getRootParent(m, l).isSingleton);
      if (c.length === 0) return;
      const u = new Set(c.map((m) => m.value));
      if (a = c.filter((m) => !(m.parent && u.has(m.parent))), a.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!a) return;
    function s(l) {
      function c(m, d) {
        for (; m.length > 0 && d.some((g) => typeof g == "string" ? g === m[0] : m[0].match(g)); ) m.shift();
      }
      const u = l.source.split(`
`).map((m) => m.trim().replace("at ", "")).filter((m) => m !== "");
      return c(u, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), u.reverse();
    }
    const r = new SetMap();
    for (const l of a) {
      const c = s(l);
      for (let u = 0; u <= c.length; u++) r.add(c.slice(0, u).join(`
`), l);
    }
    a.sort(compareBy((l) => l.idx, numberComparator));
    let o = "", i = 0;
    for (const l of a.slice(0, e)) {
      i++;
      const c = s(l), u = [];
      for (let m = 0; m < c.length; m++) {
        let d = c[m];
        d = `(shared with ${r.get(c.slice(0, m + 1).join(`
`)).size}/${a.length} leaks) at ${d}`;
        const k = r.get(c.slice(0, m).join(`
`)), y = groupBy([...k].map((b) => s(b)[m]), (b) => b);
        delete y[c[m]];
        for (const [b, R] of Object.entries(y)) u.unshift(`    - stacktraces of ${R.length} other leaks continue with ${b}`);
        u.unshift(d);
      }
      o += `


==================== Leaking disposable ${i}/${a.length}: ${l.value.constructor.name} ====================
${u.join(`
`)}
============================================================

`;
    }
    return a.length > e && (o += `


... and ${a.length - e} more leaking disposables

`), { leaks: a, details: o };
  }
};
_DisposableTracker.idx = 0;
function setDisposableTracker(n) {
  disposableTracker = n;
}
if (TRACK_DISPOSABLES) {
  const n = "__is_disposable_tracked__";
  setDisposableTracker(new class {
    trackDisposable(e) {
      const t = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        e[n] || console.log(t);
      }, 3e3);
    }
    setParent(e, t) {
      if (e && e !== Disposable.None) try {
        e[n] = true;
      } catch {
      }
    }
    markAsDisposed(e) {
      if (e && e !== Disposable.None) try {
        e[n] = true;
      } catch {
      }
    }
    markAsSingleton(e) {
    }
  }());
}
function trackDisposable(n) {
  return disposableTracker?.trackDisposable(n), n;
}
function markAsDisposed(n) {
  disposableTracker?.markAsDisposed(n);
}
function setParentOfDisposable(n, e) {
  disposableTracker?.setParent(n, e);
}
function setParentOfDisposables(n, e) {
  if (disposableTracker) for (const t of n) disposableTracker.setParent(t, e);
}
function markAsSingleton(n) {
  return disposableTracker?.markAsSingleton(n), n;
}
function isDisposable(n) {
  return typeof n == "object" && n !== null && typeof n.dispose == "function" && n.dispose.length === 0;
}
function dispose(n) {
  if (Iterable.is(n)) {
    let e;
    for (const t of n) if (t) try {
      t.dispose();
    } catch (a) {
      (e ??= []).push(a);
    }
    if (e !== void 0) throw e.length === 1 ? e[0] : new AggregateError(e, "Encountered errors while disposing of store");
    return Array.isArray(n) ? [] : n;
  } else if (n) return n.dispose(), n;
}
function combinedDisposable(...n) {
  const e = toDisposable(() => dispose(n));
  return setParentOfDisposables(n, e), e;
}
function toDisposable(n) {
  const e = trackDisposable({ dispose: createSingleCallFunction(() => {
    markAsDisposed(e), n();
  }) });
  return e;
}
var _DisposableStore = class sn {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = false, trackDisposable(this);
  }
  dispose() {
    this._isDisposed || (markAsDisposed(this), this._isDisposed = true, this.clear());
  }
  [Symbol.dispose]() {
    this.dispose();
  }
  get isDisposed() {
    return this._isDisposed;
  }
  has(e) {
    return this._toDispose.has(e);
  }
  get size() {
    return this._toDispose.size;
  }
  clear() {
    if (this._toDispose.size !== 0) try {
      dispose(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(e) {
    if (!e) return e;
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    if (setParentOfDisposable(e, this), this._isDisposed) {
      const t = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      sn.DISABLE_DISPOSED_WARNING || console.warn(t.stack), reportPostDisposeWrite(t);
    } else this._toDispose.add(e);
    return e;
  }
  delete(e) {
    if (e) {
      if (e === this) throw new Error("Cannot dispose a disposable on itself!");
      this._toDispose.delete(e), e.dispose();
    }
  }
  deleteAndLeak(e) {
    e && this._toDispose.has(e) && (this._toDispose.delete(e), setParentOfDisposable(e, null));
  }
  transferOut(e) {
    if (this._isDisposed) {
      const t = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      sn.DISABLE_DISPOSED_WARNING || console.warn(t.stack), reportLifecycleMisuse(t, "disposable_use_after_dispose");
    }
    return this.deleteAndLeak(e), e;
  }
};
_DisposableStore.DISABLE_DISPOSED_WARNING = false;
var DisposableStore = _DisposableStore, Disposable = class {
  constructor() {
    this._store = new DisposableStore(), trackDisposable(this), setParentOfDisposable(this._store, this);
  }
  dispose() {
    markAsDisposed(this), this._store.dispose();
  }
  _register(n) {
    if (n === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(n);
  }
};
Disposable.None = Object.freeze({ dispose() {
} });
var MutableDisposable = class {
  constructor() {
    this._isDisposed = false, trackDisposable(this);
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(n) {
    if (this._isDisposed) {
      if (n) {
        const e = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
        DisposableStore.DISABLE_DISPOSED_WARNING || console.warn(e.stack), reportPostDisposeWrite(e), n.dispose();
      }
      return;
    }
    n !== this._value && (this._value?.dispose(), n && setParentOfDisposable(n, this), this._value = n);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, markAsDisposed(this), this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    const n = this._value;
    return this._value = void 0, n && setParentOfDisposable(n, null), n;
  }
}, _Node = class rn {
  constructor(e) {
    this.element = e, this.next = rn.Undefined, this.prev = rn.Undefined;
  }
};
_Node.Undefined = new _Node(void 0);
var hasPerformanceNow = globalThis.performance && typeof globalThis.performance.now == "function", StopWatch = class gn {
  static create(e) {
    return new gn(e);
  }
  constructor(e) {
    this._now = hasPerformanceNow && e === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
  }
  stop() {
    this._stopTime = this._now();
  }
  reset() {
    this._startTime = this._now(), this._stopTime = -1;
  }
  elapsed() {
    return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
  }
}, _enableDisposeWithListenerWarning = false, _enableSnapshotPotentialLeakWarning = false, Event;
((n) => {
  n.None = () => Disposable.None;
  function e(h) {
    if (_enableSnapshotPotentialLeakWarning) {
      const { onDidAddListener: p } = h, f = Stacktrace.create();
      let T = 0;
      h.onDidAddListener = () => {
        ++T === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), f.print()), p?.();
      };
    }
  }
  function t(h, p) {
    return g(h, () => {
    }, 0, void 0, true, void 0, p);
  }
  n.defer = t;
  function a(h) {
    return (p, f = null, T) => {
      let _ = false, E;
      return E = h((A) => {
        if (!_) return E ? E.dispose() : _ = true, p.call(f, A);
      }, null, T), _ && E.dispose(), E;
    };
  }
  n.once = a;
  function s(h, p) {
    return n.once(n.filter(h, p));
  }
  n.onceIf = s;
  function r(h, p, f) {
    return m((T, _ = null, E) => h((A) => T.call(_, p(A)), null, E), f);
  }
  n.map = r;
  function o(h, p, f) {
    return m((T, _ = null, E) => h((A) => {
      p(A), T.call(_, A);
    }, null, E), f);
  }
  n.forEach = o;
  function i(h, p, f) {
    return m((T, _ = null, E) => h((A) => p(A) && T.call(_, A), null, E), f);
  }
  n.filter = i;
  function l(h) {
    return h;
  }
  n.signal = l;
  function c(...h) {
    return (p, f = null, T) => {
      const _ = combinedDisposable(...h.map((E) => E((A) => p.call(f, A))));
      return d(_, T);
    };
  }
  n.any = c;
  function u(h, p, f, T) {
    let _ = f;
    return r(h, (E) => (_ = p(_, E), _), T);
  }
  n.reduce = u;
  function m(h, p) {
    let f;
    const T = { onWillAddFirstListener() {
      f = h(_.fire, _);
    }, onDidRemoveLastListener() {
      f?.dispose();
    } };
    p || e(T);
    const _ = new Emitter(T);
    return p?.add(_), _.event;
  }
  function d(h, p) {
    return p instanceof Array ? p.push(h) : p && p.add(h), h;
  }
  function g(h, p, f = 100, T = false, _ = false, E, A) {
    let C, M, B, Qe = 0, G;
    const mn = { leakWarningThreshold: E, onWillAddFirstListener() {
      C = h((En) => {
        Qe++, M = p(M, En), T && !B && (Ze.fire(M), M = void 0), G ??= () => {
          const yn = M;
          M = void 0, B = void 0, (!T || Qe > 1) && Ze.fire(yn), Qe = 0;
        }, typeof f == "number" ? (clearTimeout(B), B = setTimeout(G, f)) : B === void 0 && (B = 0, queueMicrotask(G));
      });
    }, onWillRemoveListener() {
      _ && Qe > 0 && G?.();
    }, onDidRemoveLastListener() {
      G = void 0, C.dispose();
    } };
    A || e(mn);
    const Ze = new Emitter(mn);
    return A?.add(Ze), Ze.event;
  }
  n.debounce = g;
  function k(h, p = 0, f) {
    return n.debounce(h, (T, _) => T ? (T.push(_), T) : [_], p, void 0, true, void 0, f);
  }
  n.accumulate = k;
  function y(h, p = (T, _) => T === _, f) {
    let T = true, _;
    return i(h, (E) => {
      const A = T || !p(E, _);
      return T = false, _ = E, A;
    }, f);
  }
  n.latch = y;
  function b(h, p, f) {
    return [n.filter(h, p, f), n.filter(h, (T) => !p(T), f)];
  }
  n.split = b;
  function R(h, p = false, f = [], T) {
    let _ = f.slice(), E = h((M) => {
      _ ? _.push(M) : C.fire(M);
    });
    T && T.add(E);
    const A = () => {
      _?.forEach((M) => C.fire(M)), _ = null;
    }, C = new Emitter({ onWillAddFirstListener() {
      E || (E = h((M) => C.fire(M)), T && T.add(E));
    }, onDidAddFirstListener() {
      _ && (p ? setTimeout(A) : A());
    }, onDidRemoveLastListener() {
      E && E.dispose(), E = null;
    } });
    return T && T.add(C), C.event;
  }
  n.buffer = R;
  function I(h, p) {
    return (T, _, E) => {
      const A = p(new L());
      return h(function(C) {
        const M = A.evaluate(C);
        M !== w && T.call(_, M);
      }, void 0, E);
    };
  }
  n.chain = I;
  const w = /* @__PURE__ */ Symbol("HaltChainable");
  class L {
    constructor() {
      this.steps = [];
    }
    map(p) {
      return this.steps.push(p), this;
    }
    forEach(p) {
      return this.steps.push((f) => (p(f), f)), this;
    }
    filter(p) {
      return this.steps.push((f) => p(f) ? f : w), this;
    }
    reduce(p, f) {
      let T = f;
      return this.steps.push((_) => (T = p(T, _), T)), this;
    }
    latch(p = (f, T) => f === T) {
      let f = true, T;
      return this.steps.push((_) => {
        const E = f || !p(_, T);
        return f = false, T = _, E ? _ : w;
      }), this;
    }
    evaluate(p) {
      for (const f of this.steps) if (p = f(p), p === w) break;
      return p;
    }
  }
  function v(h, p, f = (T) => T) {
    const T = (...C) => A.fire(f(...C)), _ = () => h.on(p, T), E = () => h.removeListener(p, T), A = new Emitter({ onWillAddFirstListener: _, onDidRemoveLastListener: E });
    return A.event;
  }
  n.fromNodeEventEmitter = v;
  function S(h) {
    let p;
    const f = () => {
      p = h.subscribe((E) => _.fire(E));
    }, T = () => {
      p?.unsubscribe(), p = void 0;
    }, _ = new Emitter({ onWillAddFirstListener: f, onDidRemoveLastListener: T });
    return _.event;
  }
  n.fromRxJS = S;
  function N(h, p, f = (T) => T) {
    const T = (...C) => A.fire(f(...C)), _ = () => h.addEventListener(p, T), E = () => h.removeEventListener(p, T), A = new Emitter({ onWillAddFirstListener: _, onDidRemoveLastListener: E });
    return A.event;
  }
  n.fromDOMEventEmitter = N;
  function D(h, p) {
    return new Promise((f) => a(h)(f, null, p));
  }
  n.toPromise = D;
  function x(h) {
    const p = new Emitter();
    return h.then((f) => {
      p.fire(f);
    }, () => {
      p.fire(void 0);
    }).finally(() => {
      p.dispose();
    }), p.event;
  }
  n.fromPromise = x;
  function Xe(h, p) {
    return h((f) => p.fire(f));
  }
  n.forward = Xe;
  function hn(h, p, f) {
    return p(f), h((T) => p(T));
  }
  n.runAndSubscribe = hn;
  class kn {
    constructor(p, f) {
      this._observable = p, this._counter = 0, this._hasChanged = false;
      const T = { onWillAddFirstListener: () => {
        p.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        p.removeObserver(this);
      } };
      f || e(T), this.emitter = new Emitter(T), f && f.add(this.emitter);
    }
    beginUpdate(p) {
      this._counter++;
    }
    handlePossibleChange(p) {
    }
    handleChange(p, f) {
      this._hasChanged = true;
    }
    endUpdate(p) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function _n(h, p) {
    return new kn(h, p).emitter.event;
  }
  n.fromObservable = _n;
  function vn(h) {
    return (p, f, T) => {
      let _ = 0, E = false;
      const A = { beginUpdate() {
        _++;
      }, endUpdate() {
        _--, _ === 0 && (h.reportChanges(), E && (E = false, p.call(f)));
      }, handlePossibleChange() {
      }, handleChange() {
        E = true;
      } };
      h.addObserver(A), h.reportChanges();
      const C = { dispose() {
        h.removeObserver(A);
      } };
      return T instanceof DisposableStore ? T.add(C) : Array.isArray(T) && T.push(C), C;
    };
  }
  n.fromObservableLight = vn;
})(Event || (Event = {}));
var _EventProfiling = class on {
  constructor(e) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${e}_${on._idPool++}`, on.all.add(this);
  }
  start(e) {
    this._stopWatch = new StopWatch(), this.listenerCount = e;
  }
  stop() {
    if (this._stopWatch) {
      const e = this._stopWatch.elapsed();
      this.durations.push(e), this.elapsedOverall += e, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
_EventProfiling.all = /* @__PURE__ */ new Set(), _EventProfiling._idPool = 0;
var EventProfiling = _EventProfiling, _globalLeakWarningThreshold = -1, leakageMonitorId = 1;
function nextLeakageMonitorName() {
  return (leakageMonitorId++).toString(16).padStart(3, "0");
}
var LeakageMonitor = class {
  constructor(n, e, t = nextLeakageMonitorName()) {
    this._errorHandler = n, this.threshold = e, this.name = t, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(n, e) {
    const t = this.threshold;
    if (t <= 0 || e < t) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const a = n.value, s = this._stacks.get(a) || 0;
    if (this._stacks.set(a, s + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = t * 0.5;
      const [r, o] = this.getMostFrequentStack(), i = `[${this.name}] potential listener LEAK detected, having ${e} listeners already. MOST frequent listener (${o}):`;
      console.warn(i), console.warn(r);
      const l = o / e > 0.3 ? "dominated" : "popular", c = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, u = new ListenerLeakError(l, i, r, e, c);
      this._errorHandler(u), reportLifecycleMisuse(u, "emitter_listener_leak");
    }
    return () => {
      const r = this._stacks.get(a) || 0;
      r <= 1 ? this._stacks.delete(a) : this._stacks.set(a, r - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let n, e = 0;
    for (const [t, a] of this._stacks) (!n || e < a) && (n = [t, a], e = a);
    return n;
  }
}, Stacktrace = class Tn {
  constructor(e) {
    this.value = e;
  }
  static create() {
    const e = new Error();
    return new Tn(e.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, ListenerLeakError = class extends Error {
  constructor(n, e, t, a, s) {
    super(s ? `[${s}] potential listener LEAK detected, ${n}` : `potential listener LEAK detected, ${n}`), this.name = "ListenerLeakError", this.kind = n, this.listenerCount = a, this.details = e, this.stack = t;
  }
}, ListenerRefusalError = class extends ListenerLeakError {
  constructor(n, e, t, a, s) {
    super(n, e, t, a, s), this.name = "ListenerRefusalError";
  }
}, UniqueContainer = class {
  constructor(n) {
    this.value = n;
  }
}, compactionThreshold = 2, forEachListener = (n, e) => {
  if (n instanceof UniqueContainer) e(n);
  else for (let t = 0; t < n.length; t++) {
    const a = n[t];
    a && e(a);
  }
}, Emitter = class {
  constructor(n) {
    this._size = 0, this._options = n, (_globalLeakWarningThreshold > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? _globalLeakWarningThreshold, this._leakWarningName = this._options?.leakWarningName ?? nextLeakageMonitorName(), this._leakWarningErrorHandler = this._options?.onListenerError ?? onUnexpectedError), this._perfMon = this._options?._profName ? new EventProfiling(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  _getLeakageMonitor() {
    if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new LeakageMonitor(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (_enableDisposeWithListenerWarning) {
          const n = this._listeners;
          queueMicrotask(() => {
            forEachListener(n, (e) => e.stack?.print());
          });
        }
        forEachListener(this._listeners, (n) => {
          n.value = void 0;
        }), this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (n, e, t) => {
      if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
        const i = this._getLeakageMonitor();
        if (i) {
          const l = `[${i.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${i.threshold})`;
          console.warn(l);
          const c = i.getMostFrequentStack() ?? ["UNKNOWN stack", -1], u = c[1] / this._size > 0.3 ? "dominated" : "popular", m = new ListenerRefusalError(u, `${l}. HINT: Stack shows most frequent listener (${c[1]}-times)`, c[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || onUnexpectedError)(m), reportLifecycleMisuse(m, "emitter_listener_refusal"), Disposable.None;
        }
      }
      if (this._disposed) {
        const i = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return reportLifecycleMisuse(i, "emitter_use_after_dispose"), Disposable.None;
      }
      e && (n = n.bind(e));
      const a = new UniqueContainer(n);
      let s, r;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const i = this._getLeakageMonitor();
        i && (a.stack = Stacktrace.create(), s = i.check(a.stack, this._size + 1));
      }
      _enableDisposeWithListenerWarning && (a.stack = r ?? Stacktrace.create()), this._listeners ? this._listeners instanceof UniqueContainer ? (this._deliveryQueue ??= new EventDeliveryQueuePrivate(), this._listeners = [this._listeners, a]) : this._listeners.push(a) : (this._options?.onWillAddFirstListener?.(this), this._listeners = a, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const o = toDisposable(() => {
        s?.(), this._removeListener(a);
      });
      return t instanceof DisposableStore ? t.add(o) : Array.isArray(t) && t.push(o), o;
    }, this._event;
  }
  _removeListener(n) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    const e = this._listeners, t = e.indexOf(n);
    if (t === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, e[t] = void 0;
    const a = this._deliveryQueue.current === this;
    if (this._size * compactionThreshold <= e.length) {
      let s = 0;
      for (let r = 0; r < e.length; r++) e[r] ? e[s++] = e[r] : a && s < this._deliveryQueue.end && (this._deliveryQueue.end--, s < this._deliveryQueue.i && this._deliveryQueue.i--);
      e.length = s;
    }
  }
  _deliver(n, e) {
    if (!n) return;
    const t = this._options?.onListenerError || onUnexpectedError;
    if (!t) {
      n.value(e);
      return;
    }
    try {
      n.value(e);
    } catch (a) {
      t(a);
    }
  }
  _deliverQueue(n) {
    const e = n.current._listeners;
    for (; n.i < n.end; ) this._deliver(e[n.i++], n.value);
    n.reset();
  }
  fire(n) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof UniqueContainer) this._deliver(this._listeners, n);
    else {
      const e = this._deliveryQueue;
      e.enqueue(this, n, this._listeners.length), this._deliverQueue(e);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
}, EventDeliveryQueuePrivate = class {
  constructor() {
    this.i = -1, this.end = 0;
  }
  enqueue(n, e, t) {
    this.i = 0, this.end = t, this.current = n, this.value = e;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
};
function getNLSLanguage() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var isPseudo = getNLSLanguage() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0, LANGUAGE_DEFAULT = "en", _isWindows = false, _isMacintosh = false, _isLinux = false, _isLinuxSnap = false, _isNative = false, _isWeb = false, _isElectron = false, _isIOS = false, _isCI = false, _isMobile = false, _locale = void 0, _language = LANGUAGE_DEFAULT, _platformLocale = LANGUAGE_DEFAULT, _translationsConfigFile = void 0, _userAgent = void 0, $globalThis = globalThis, nodeProcess = void 0;
typeof $globalThis.vscode < "u" && typeof $globalThis.vscode.process < "u" ? nodeProcess = $globalThis.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (nodeProcess = process);
var isElectronProcess = typeof nodeProcess?.versions?.electron == "string", isElectronRenderer = isElectronProcess && nodeProcess?.type === "renderer";
if (typeof nodeProcess == "object") {
  _isWindows = nodeProcess.platform === "win32", _isMacintosh = nodeProcess.platform === "darwin", _isLinux = nodeProcess.platform === "linux", _isLinuxSnap = _isLinux && !!nodeProcess.env.SNAP && !!nodeProcess.env.SNAP_REVISION, _isElectron = isElectronProcess, _isCI = !!nodeProcess.env.CI || !!nodeProcess.env.BUILD_ARTIFACTSTAGINGDIRECTORY, _locale = LANGUAGE_DEFAULT, _language = LANGUAGE_DEFAULT;
  const n = nodeProcess.env.VSCODE_NLS_CONFIG;
  if (n) try {
    const e = JSON.parse(n);
    _locale = e.userLocale, _platformLocale = e.osLocale, _language = e.resolvedLanguage || LANGUAGE_DEFAULT, _translationsConfigFile = e.languagePack?.translationsConfigFile;
  } catch {
  }
  _isNative = true;
} else typeof navigator == "object" && !isElectronRenderer ? (_userAgent = navigator.userAgent, _isWindows = _userAgent.indexOf("Windows") >= 0, _isMacintosh = _userAgent.indexOf("Macintosh") >= 0, _isIOS = (_userAgent.indexOf("Macintosh") >= 0 || _userAgent.indexOf("iPad") >= 0 || _userAgent.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, _isLinux = _userAgent.indexOf("Linux") >= 0, _isMobile = _userAgent?.indexOf("Mobi") >= 0, _isWeb = true, _language = getNLSLanguage() || LANGUAGE_DEFAULT, _locale = navigator.language.toLowerCase(), _platformLocale = _locale) : console.error("Unable to resolve platform.");
var _platform = 0;
_isMacintosh ? _platform = 1 : _isWindows ? _platform = 3 : _isLinux && (_platform = 2);
var isWindows = _isWindows, isMacintosh = _isMacintosh, isLinux = _isLinux, isNative = _isNative, isWeb = _isWeb, isWebWorker = _isWeb && typeof $globalThis.importScripts == "function", webWorkerOrigin = isWebWorker ? $globalThis.origin : void 0, userAgent = _userAgent, language = _language, Language;
((n) => {
  function e() {
    return language;
  }
  n.value = e;
  function t() {
    return language.length === 2 ? language === "en" : language.length >= 3 ? language[0] === "e" && language[1] === "n" && language[2] === "-" : false;
  }
  n.isDefaultVariant = t;
  function a() {
    return language === "en";
  }
  n.isDefault = a;
})(Language || (Language = {}));
var setTimeout0IsFaster = typeof $globalThis.postMessage == "function" && !$globalThis.importScripts, setTimeout0 = (() => {
  if (setTimeout0IsFaster) {
    const n = [];
    $globalThis.addEventListener("message", (t) => {
      if (t.data && t.data.vscodeScheduleAsyncWork) for (let a = 0, s = n.length; a < s; a++) {
        const r = n[a];
        if (r.id === t.data.vscodeScheduleAsyncWork) {
          n.splice(a, 1), r.callback();
          return;
        }
      }
    });
    let e = 0;
    return (t) => {
      const a = ++e;
      n.push({ id: a, callback: t }), $globalThis.postMessage({ vscodeScheduleAsyncWork: a }, "*");
    };
  }
  return (n) => setTimeout(n);
})(), isChrome = !!(userAgent && userAgent.indexOf("Chrome") >= 0), isFirefox = !!(userAgent && userAgent.indexOf("Firefox") >= 0), isSafari = !!(!isChrome && userAgent && userAgent.indexOf("Safari") >= 0), isEdge = !!(userAgent && userAgent.indexOf("Edg/") >= 0), isAndroid = !!(userAgent && userAgent.indexOf("Android") >= 0), arch = nodeProcess?.arch, platformString = nodeProcess?.platform, nodeVersion = nodeProcess?.versions?.node, shortcutEvent = Object.freeze(function(n, e) {
  const t = setTimeout(n.bind(e), 0);
  return { dispose() {
    clearTimeout(t);
  } };
}), CancellationToken;
((n) => {
  function e(t) {
    return t === n.None || t === n.Cancelled || t instanceof MutableToken ? true : !t || typeof t != "object" ? false : typeof t.isCancellationRequested == "boolean" && typeof t.onCancellationRequested == "function";
  }
  n.isCancellationToken = e, n.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: Event.None }), n.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: shortcutEvent });
})(CancellationToken || (CancellationToken = {}));
var MutableToken = class {
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
    return this._isCancelled ? shortcutEvent : (this._emitter || (this._emitter = new Emitter()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}, CancellationTokenSource = class {
  constructor(n) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = n && n.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new MutableToken()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof MutableToken && this._token.cancel() : this._token = CancellationToken.Cancelled;
  }
  dispose(n = false) {
    n && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof MutableToken && this._token.dispose() : this._token = CancellationToken.None;
  }
};
function identity(n) {
  return n;
}
var LRUCachedFunction = class {
  constructor(n, e) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof n == "function" ? (this._fn = n, this._computeKey = identity) : (this._fn = e, this._computeKey = n.getCacheKey);
  }
  get(n) {
    const e = this._computeKey(n);
    return this.lastArgKey !== e && (this.lastArgKey = e, this.lastCache = this._fn(n)), this.lastCache;
  }
}, Lazy = class {
  constructor(n) {
    this.executor = n, this._didRun = false;
  }
  get hasValue() {
    return this._didRun;
  }
  get value() {
    if (!this._didRun) try {
      this._value = this.executor();
    } catch (n) {
      this._error = n;
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
function escape(n) {
  return n.replace(/[<>&]/g, function(e) {
    switch (e) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      default:
        return e;
    }
  });
}
function compare(n, e) {
  return n < e ? -1 : n > e ? 1 : 0;
}
function compareSubstring(n, e, t = 0, a = n.length, s = 0, r = e.length) {
  for (; t < a && s < r; t++, s++) {
    const l = n.charCodeAt(t), c = e.charCodeAt(s);
    if (l < c) return -1;
    if (l > c) return 1;
  }
  const o = a - t, i = r - s;
  return o < i ? -1 : o > i ? 1 : 0;
}
function compareSubstringIgnoreCase(n, e, t = 0, a = n.length, s = 0, r = e.length) {
  for (; t < a && s < r; t++, s++) {
    let l = n.charCodeAt(t), c = e.charCodeAt(s);
    if (l === c) continue;
    if (l >= 128 || c >= 128) return compareSubstring(n.toLowerCase(), e.toLowerCase(), t, a, s, r);
    isLowerAsciiLetter(l) && (l -= 32), isLowerAsciiLetter(c) && (c -= 32);
    const u = l - c;
    if (u !== 0) return u;
  }
  const o = a - t, i = r - s;
  return o < i ? -1 : o > i ? 1 : 0;
}
function isLowerAsciiLetter(n) {
  return n >= 97 && n <= 122;
}
function isUpperAsciiLetter(n) {
  return n >= 65 && n <= 90;
}
function equalsIgnoreCase(n, e) {
  return n.length === e.length && compareSubstringIgnoreCase(n, e) === 0;
}
function isHighSurrogate(n) {
  return 55296 <= n && n <= 56319;
}
function isLowSurrogate(n) {
  return 56320 <= n && n <= 57343;
}
function computeCodePoint(n, e) {
  return (n - 55296 << 10) + (e - 56320) + 65536;
}
var CSI_SEQUENCE = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, OSC_SEQUENCE = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, ESC_SEQUENCE = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, CONTROL_SEQUENCES = new RegExp("(?:" + [CSI_SEQUENCE.source, OSC_SEQUENCE.source, ESC_SEQUENCE.source].join("|") + ")", "g"), UTF8_BOM_CHARACTER = "\uFEFF", _GraphemeBreakTree = class J {
  static getInstance() {
    return J._INSTANCE || (J._INSTANCE = new J()), J._INSTANCE;
  }
  constructor() {
    this._data = getGraphemeBreakRawData();
  }
  getGraphemeBreakType(e) {
    if (e < 32) return e === 10 ? 3 : e === 13 ? 2 : 4;
    if (e < 127) return 0;
    const t = this._data, a = t.length / 3;
    let s = 1;
    for (; s <= a; ) if (e < t[3 * s]) s = 2 * s;
    else if (e > t[3 * s + 1]) s = 2 * s + 1;
    else return t[3 * s + 2];
    return 0;
  }
};
_GraphemeBreakTree._INSTANCE = null;
function getGraphemeBreakRawData() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var _AmbiguousCharacters = class ln {
  constructor(e) {
    this.confusableDictionary = e;
  }
  static getInstance(e) {
    return ln.cache.get(Array.from(e).join(","));
  }
  static getLocales() {
    return ln._locales.value;
  }
  isAmbiguous(e) {
    return this.confusableDictionary.has(e);
  }
  containsAmbiguousCharacter(e) {
    for (let t = 0; t < e.length; t++) {
      const a = e.codePointAt(t);
      if (typeof a == "number" && this.isAmbiguous(a)) return true;
    }
    return false;
  }
  getPrimaryConfusable(e) {
    return this.confusableDictionary.get(e);
  }
  getConfusableCodePoints() {
    return new Set(this.confusableDictionary.keys());
  }
};
_AmbiguousCharacters.ambiguousCharacterData = new Lazy(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), _AmbiguousCharacters.cache = new LRUCachedFunction((n) => {
  const e = n.split(",");
  function t(u) {
    const m = /* @__PURE__ */ new Map();
    for (let d = 0; d < u.length; d += 2) m.set(u[d], u[d + 1]);
    return m;
  }
  function a(u, m) {
    const d = new Map(u);
    for (const [g, k] of m) d.set(g, k);
    return d;
  }
  function s(u, m) {
    if (!u) return m;
    const d = /* @__PURE__ */ new Map();
    for (const [g, k] of u) m.has(g) && d.set(g, k);
    return d;
  }
  const r = _AmbiguousCharacters.ambiguousCharacterData.value;
  let o = e.filter((u) => !u.startsWith("_") && u in r);
  o.length === 0 && (o = ["_default"]);
  let i;
  for (const u of o) {
    const m = t(r[u]);
    i = s(i, m);
  }
  const l = t(r._common), c = a(l, i);
  return new _AmbiguousCharacters(c);
}), _AmbiguousCharacters._locales = new Lazy(() => Object.keys(_AmbiguousCharacters.ambiguousCharacterData.value).filter((n) => !n.startsWith("_")));
var _InvisibleCharacters = class $ {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values($.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(e) {
    return $.getData().has(e);
  }
  static containsInvisibleCharacter(e) {
    for (let t = 0; t < e.length; t++) {
      const a = e.codePointAt(t);
      if (typeof a == "number" && ($.isInvisibleCharacter(a) || a === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return $.getData();
  }
};
_InvisibleCharacters._data = void 0;
var DEFAULT_CHANNEL = "default", INITIALIZE = "$initialize", RequestMessage = class {
  constructor(n, e, t, a, s) {
    this.vsWorker = n, this.req = e, this.channel = t, this.method = a, this.args = s, this.type = 0;
  }
}, ReplyMessage = class {
  constructor(n, e, t, a) {
    this.vsWorker = n, this.seq = e, this.res = t, this.err = a, this.type = 1;
  }
}, SubscribeEventMessage = class {
  constructor(n, e, t, a, s) {
    this.vsWorker = n, this.req = e, this.channel = t, this.eventName = a, this.arg = s, this.type = 2;
  }
}, EventMessage = class {
  constructor(n, e, t) {
    this.vsWorker = n, this.req = e, this.event = t, this.type = 3;
  }
}, UnsubscribeEventMessage = class {
  constructor(n, e) {
    this.vsWorker = n, this.req = e, this.type = 4;
  }
}, WebWorkerProtocol = class {
  constructor(n) {
    this._workerId = -1, this._handler = n, this._lastSentReq = 0, this._pendingReplies = /* @__PURE__ */ Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
  }
  setWorkerId(n) {
    this._workerId = n;
  }
  sendMessage(n, e, t) {
    const a = String(++this._lastSentReq);
    return new Promise((s, r) => {
      this._pendingReplies[a] = { resolve: s, reject: r }, this._send(new RequestMessage(this._workerId, a, n, e, t));
    });
  }
  listen(n, e, t) {
    let a = null;
    const s = new Emitter({ onWillAddFirstListener: () => {
      a = String(++this._lastSentReq), this._pendingEmitters.set(a, s), this._send(new SubscribeEventMessage(this._workerId, a, n, e, t));
    }, onDidRemoveLastListener: () => {
      this._pendingEmitters.delete(a), this._send(new UnsubscribeEventMessage(this._workerId, a)), a = null;
    } });
    return s.event;
  }
  handleMessage(n) {
    !n || !n.vsWorker || this._workerId !== -1 && n.vsWorker !== this._workerId || this._handleMessage(n);
  }
  createProxyToRemoteChannel(n, e) {
    const t = { get: (a, s) => (typeof s == "string" && !a[s] && (propertyIsDynamicEvent(s) ? a[s] = (r) => this.listen(n, s, r) : propertyIsEvent(s) ? a[s] = this.listen(n, s, void 0) : s.charCodeAt(0) === 36 && (a[s] = async (...r) => (await e?.(), this.sendMessage(n, s, r)))), a[s]) };
    return new Proxy(/* @__PURE__ */ Object.create(null), t);
  }
  _handleMessage(n) {
    switch (n.type) {
      case 1:
        return this._handleReplyMessage(n);
      case 0:
        return this._handleRequestMessage(n);
      case 2:
        return this._handleSubscribeEventMessage(n);
      case 3:
        return this._handleEventMessage(n);
      case 4:
        return this._handleUnsubscribeEventMessage(n);
    }
  }
  _handleReplyMessage(n) {
    if (!this._pendingReplies[n.seq]) {
      console.warn("Got reply to unknown seq");
      return;
    }
    const e = this._pendingReplies[n.seq];
    if (delete this._pendingReplies[n.seq], n.err) {
      let t = n.err;
      n.err.$isError && (t = new Error(), t.name = n.err.name, t.message = n.err.message, t.stack = n.err.stack), e.reject(t);
      return;
    }
    e.resolve(n.res);
  }
  _handleRequestMessage(n) {
    const e = n.req;
    this._handler.handleMessage(n.channel, n.method, n.args).then((a) => {
      this._send(new ReplyMessage(this._workerId, e, a, void 0));
    }, (a) => {
      a.detail instanceof Error && (a.detail = transformErrorForSerialization(a.detail)), this._send(new ReplyMessage(this._workerId, e, void 0, transformErrorForSerialization(a)));
    });
  }
  _handleSubscribeEventMessage(n) {
    const e = n.req, t = this._handler.handleEvent(n.channel, n.eventName, n.arg)((a) => {
      this._send(new EventMessage(this._workerId, e, a));
    });
    this._pendingEvents.set(e, t);
  }
  _handleEventMessage(n) {
    if (!this._pendingEmitters.has(n.req)) {
      console.warn("Got event for unknown req");
      return;
    }
    this._pendingEmitters.get(n.req).fire(n.event);
  }
  _handleUnsubscribeEventMessage(n) {
    if (!this._pendingEvents.has(n.req)) {
      console.warn("Got unsubscribe for unknown req");
      return;
    }
    this._pendingEvents.get(n.req).dispose(), this._pendingEvents.delete(n.req);
  }
  _send(n) {
    const e = [];
    if (n.type === 0) for (let t = 0; t < n.args.length; t++) {
      const a = n.args[t];
      (a instanceof ArrayBuffer || typeof MessagePort < "u" && a instanceof MessagePort) && e.push(a);
    }
    else n.type === 1 && n.res instanceof ArrayBuffer && e.push(n.res);
    this._handler.sendMessage(n, e);
  }
};
function propertyIsEvent(n) {
  return n[0] === "o" && n[1] === "n" && isUpperAsciiLetter(n.charCodeAt(2));
}
function propertyIsDynamicEvent(n) {
  return /^onDynamic/.test(n) && isUpperAsciiLetter(n.charCodeAt(9));
}
var WebWorkerServer = class {
  constructor(n, e) {
    this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new WebWorkerProtocol({ sendMessage: (t, a) => {
      n(t, a);
    }, handleMessage: (t, a, s) => this._handleMessage(t, a, s), handleEvent: (t, a, s) => this._handleEvent(t, a, s) }), this.requestHandler = e(this);
  }
  onmessage(n) {
    this._protocol.handleMessage(n);
  }
  _handleMessage(n, e, t) {
    if (n === DEFAULT_CHANNEL && e === INITIALIZE) return this.initialize(t[0]);
    const a = n === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(n);
    if (!a) return Promise.reject(new Error(`Missing channel ${n} on worker thread`));
    if (typeof a[e] != "function") return Promise.reject(new Error(`Missing method ${e} on worker thread channel ${n}`));
    try {
      return Promise.resolve(a[e].apply(a, t));
    } catch (s) {
      return Promise.reject(s);
    }
  }
  _handleEvent(n, e, t) {
    const a = n === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(n);
    if (!a) throw new Error(`Missing channel ${n} on worker thread`);
    if (propertyIsDynamicEvent(e)) {
      const s = a[e].call(a, t);
      if (typeof s != "function") throw new Error(`Missing dynamic event ${e} on request handler.`);
      return s;
    }
    if (propertyIsEvent(e)) {
      const s = a[e];
      if (typeof s != "function") throw new Error(`Missing event ${e} on request handler.`);
      return s;
    }
    throw new Error(`Malformed event name ${e}`);
  }
  setChannel(n, e) {
    this._localChannels.set(n, e);
  }
  getChannel(n) {
    if (!this._remoteChannels.has(n)) {
      const e = this._protocol.createProxyToRemoteChannel(n);
      this._remoteChannels.set(n, e);
    }
    return this._remoteChannels.get(n);
  }
  async initialize(n) {
    this._protocol.setWorkerId(n);
  }
}, initialized = false;
function initialize(n) {
  if (initialized) throw new Error("WebWorker already initialized!");
  initialized = true;
  const e = new WebWorkerServer((t, a) => globalThis.postMessage(t, a), (t) => n(t));
  return globalThis.onmessage = (t) => {
    e.onmessage(t.data);
  }, e;
}
function bootstrapWebWorker(n) {
  globalThis.onmessage = (e) => {
    initialized || initialize(n);
  };
}
var safeProcess, vscodeGlobal = globalThis.vscode;
if (typeof vscodeGlobal < "u" && typeof vscodeGlobal.process < "u") {
  const n = vscodeGlobal.process;
  safeProcess = { get platform() {
    return n.platform;
  }, get arch() {
    return n.arch;
  }, get env() {
    return n.env;
  }, cwd() {
    return n.cwd();
  } };
} else typeof process < "u" && typeof process?.versions?.node == "string" ? safeProcess = { get platform() {
  return process.platform;
}, get arch() {
  return process.arch;
}, get env() {
  return process.env;
}, cwd() {
  return process.env.VSCODE_CWD || process.cwd();
} } : safeProcess = { get platform() {
  return isWindows ? "win32" : isMacintosh ? "darwin" : "linux";
}, get arch() {
}, get env() {
  return {};
}, cwd() {
  return "/";
} };
var cwd = safeProcess.cwd, env = safeProcess.env, platform = safeProcess.platform, arch2 = safeProcess.arch, CHAR_UPPERCASE_A = 65, CHAR_LOWERCASE_A = 97, CHAR_UPPERCASE_Z = 90, CHAR_LOWERCASE_Z = 122, CHAR_DOT = 46, CHAR_FORWARD_SLASH = 47, CHAR_BACKWARD_SLASH = 92, CHAR_COLON = 58, CHAR_QUESTION_MARK = 63, ErrorInvalidArgType = class extends Error {
  constructor(n, e, t) {
    let a;
    typeof e == "string" && e.indexOf("not ") === 0 ? (a = "must not be", e = e.replace(/^not /, "")) : a = "must be";
    const s = n.indexOf(".") !== -1 ? "property" : "argument";
    let r = `The "${n}" ${s} ${a} of type ${e}`;
    r += `. Received type ${typeof t}`, super(r), this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function validateObject(n, e) {
  if (n === null || typeof n != "object") throw new ErrorInvalidArgType(e, "Object", n);
}
function validateString(n, e) {
  if (typeof n != "string") throw new ErrorInvalidArgType(e, "string", n);
}
var platformIsWin32 = platform === "win32";
function isPathSeparator(n) {
  return n === CHAR_FORWARD_SLASH || n === CHAR_BACKWARD_SLASH;
}
function isPosixPathSeparator(n) {
  return n === CHAR_FORWARD_SLASH;
}
function isWindowsDeviceRoot(n) {
  return n >= CHAR_UPPERCASE_A && n <= CHAR_UPPERCASE_Z || n >= CHAR_LOWERCASE_A && n <= CHAR_LOWERCASE_Z;
}
function normalizeString(n, e, t, a) {
  let s = "", r = 0, o = -1, i = 0, l = 0;
  for (let c = 0; c <= n.length; ++c) {
    if (c < n.length) l = n.charCodeAt(c);
    else {
      if (a(l)) break;
      l = CHAR_FORWARD_SLASH;
    }
    if (a(l)) {
      if (!(o === c - 1 || i === 1)) if (i === 2) {
        if (s.length < 2 || r !== 2 || s.charCodeAt(s.length - 1) !== CHAR_DOT || s.charCodeAt(s.length - 2) !== CHAR_DOT) {
          if (s.length > 2) {
            const u = s.lastIndexOf(t);
            u === -1 ? (s = "", r = 0) : (s = s.slice(0, u), r = s.length - 1 - s.lastIndexOf(t)), o = c, i = 0;
            continue;
          } else if (s.length !== 0) {
            s = "", r = 0, o = c, i = 0;
            continue;
          }
        }
        e && (s += s.length > 0 ? `${t}..` : "..", r = 2);
      } else s.length > 0 ? s += `${t}${n.slice(o + 1, c)}` : s = n.slice(o + 1, c), r = c - o - 1;
      o = c, i = 0;
    } else l === CHAR_DOT && i !== -1 ? ++i : i = -1;
  }
  return s;
}
function formatExt(n) {
  return n ? `${n[0] === "." ? "" : "."}${n}` : "";
}
function _format(n, e) {
  validateObject(e, "pathObject");
  const t = e.dir || e.root, a = e.base || `${e.name || ""}${formatExt(e.ext)}`;
  return t ? t === e.root ? `${t}${a}` : `${t}${n}${a}` : a;
}
var win32 = { resolve(...n) {
  let e = "", t = "", a = false;
  for (let s = n.length - 1; s >= -1; s--) {
    let r;
    if (s >= 0) {
      if (r = n[s], validateString(r, `paths[${s}]`), r.length === 0) continue;
    } else e.length === 0 ? r = cwd() : (r = env[`=${e}`] || cwd(), (r === void 0 || r.slice(0, 2).toLowerCase() !== e.toLowerCase() && r.charCodeAt(2) === CHAR_BACKWARD_SLASH) && (r = `${e}\\`));
    const o = r.length;
    let i = 0, l = "", c = false;
    const u = r.charCodeAt(0);
    if (o === 1) isPathSeparator(u) && (i = 1, c = true);
    else if (isPathSeparator(u)) if (c = true, isPathSeparator(r.charCodeAt(1))) {
      let m = 2, d = m;
      for (; m < o && !isPathSeparator(r.charCodeAt(m)); ) m++;
      if (m < o && m !== d) {
        const g = r.slice(d, m);
        for (d = m; m < o && isPathSeparator(r.charCodeAt(m)); ) m++;
        if (m < o && m !== d) {
          for (d = m; m < o && !isPathSeparator(r.charCodeAt(m)); ) m++;
          (m === o || m !== d) && (l = `\\\\${g}\\${r.slice(d, m)}`, i = m);
        }
      }
    } else i = 1;
    else isWindowsDeviceRoot(u) && r.charCodeAt(1) === CHAR_COLON && (l = r.slice(0, 2), i = 2, o > 2 && isPathSeparator(r.charCodeAt(2)) && (c = true, i = 3));
    if (l.length > 0) if (e.length > 0) {
      if (l.toLowerCase() !== e.toLowerCase()) continue;
    } else e = l;
    if (a) {
      if (e.length > 0) break;
    } else if (t = `${r.slice(i)}\\${t}`, a = c, c && e.length > 0) break;
  }
  return t = normalizeString(t, !a, "\\", isPathSeparator), a ? `${e}\\${t}` : `${e}${t}` || ".";
}, normalize(n) {
  validateString(n, "path");
  const e = n.length;
  if (e === 0) return ".";
  let t = 0, a, s = false;
  const r = n.charCodeAt(0);
  if (e === 1) return isPosixPathSeparator(r) ? "\\" : n;
  if (isPathSeparator(r)) if (s = true, isPathSeparator(n.charCodeAt(1))) {
    let i = 2, l = i;
    for (; i < e && !isPathSeparator(n.charCodeAt(i)); ) i++;
    if (i < e && i !== l) {
      const c = n.slice(l, i);
      for (l = i; i < e && isPathSeparator(n.charCodeAt(i)); ) i++;
      if (i < e && i !== l) {
        for (l = i; i < e && !isPathSeparator(n.charCodeAt(i)); ) i++;
        if (i === e) return `\\\\${c}\\${n.slice(l)}\\`;
        i !== l && (a = `\\\\${c}\\${n.slice(l, i)}`, t = i);
      }
    }
  } else t = 1;
  else isWindowsDeviceRoot(r) && n.charCodeAt(1) === CHAR_COLON && (a = n.slice(0, 2), t = 2, e > 2 && isPathSeparator(n.charCodeAt(2)) && (s = true, t = 3));
  let o = t < e ? normalizeString(n.slice(t), !s, "\\", isPathSeparator) : "";
  if (o.length === 0 && !s && (o = "."), o.length > 0 && isPathSeparator(n.charCodeAt(e - 1)) && (o += "\\"), !s && a === void 0 && n.includes(":")) {
    if (o.length >= 2 && isWindowsDeviceRoot(o.charCodeAt(0)) && o.charCodeAt(1) === CHAR_COLON) return `.\\${o}`;
    let i = n.indexOf(":");
    do
      if (i === e - 1 || isPathSeparator(n.charCodeAt(i + 1))) return `.\\${o}`;
    while ((i = n.indexOf(":", i + 1)) !== -1);
  }
  return a === void 0 ? s ? `\\${o}` : o : s ? `${a}\\${o}` : `${a}${o}`;
}, isAbsolute(n) {
  validateString(n, "path");
  const e = n.length;
  if (e === 0) return false;
  const t = n.charCodeAt(0);
  return isPathSeparator(t) || e > 2 && isWindowsDeviceRoot(t) && n.charCodeAt(1) === CHAR_COLON && isPathSeparator(n.charCodeAt(2));
}, join(...n) {
  if (n.length === 0) return ".";
  let e, t;
  for (let r = 0; r < n.length; ++r) {
    const o = n[r];
    validateString(o, "path"), o.length > 0 && (e === void 0 ? e = t = o : e += `\\${o}`);
  }
  if (e === void 0) return ".";
  let a = true, s = 0;
  if (typeof t == "string" && isPathSeparator(t.charCodeAt(0))) {
    ++s;
    const r = t.length;
    r > 1 && isPathSeparator(t.charCodeAt(1)) && (++s, r > 2 && (isPathSeparator(t.charCodeAt(2)) ? ++s : a = false));
  }
  if (a) {
    for (; s < e.length && isPathSeparator(e.charCodeAt(s)); ) s++;
    s >= 2 && (e = `\\${e.slice(s)}`);
  }
  return win32.normalize(e);
}, relative(n, e) {
  if (validateString(n, "from"), validateString(e, "to"), n === e) return "";
  const t = win32.resolve(n), a = win32.resolve(e);
  if (t === a || (n = t.toLowerCase(), e = a.toLowerCase(), n === e)) return "";
  if (t.length !== n.length || a.length !== e.length) {
    const k = t.split("\\"), y = a.split("\\");
    k[k.length - 1] === "" && k.pop(), y[y.length - 1] === "" && y.pop();
    const b = k.length, R = y.length, I = b < R ? b : R;
    let w;
    for (w = 0; w < I && k[w].toLowerCase() === y[w].toLowerCase(); w++) ;
    return w === 0 ? a : w === I ? R > I ? y.slice(w).join("\\") : b > I ? "..\\".repeat(b - 1 - w) + ".." : "" : "..\\".repeat(b - w) + y.slice(w).join("\\");
  }
  let s = 0;
  for (; s < n.length && n.charCodeAt(s) === CHAR_BACKWARD_SLASH; ) s++;
  let r = n.length;
  for (; r - 1 > s && n.charCodeAt(r - 1) === CHAR_BACKWARD_SLASH; ) r--;
  const o = r - s;
  let i = 0;
  for (; i < e.length && e.charCodeAt(i) === CHAR_BACKWARD_SLASH; ) i++;
  let l = e.length;
  for (; l - 1 > i && e.charCodeAt(l - 1) === CHAR_BACKWARD_SLASH; ) l--;
  const c = l - i, u = o < c ? o : c;
  let m = -1, d = 0;
  for (; d < u; d++) {
    const k = n.charCodeAt(s + d);
    if (k !== e.charCodeAt(i + d)) break;
    k === CHAR_BACKWARD_SLASH && (m = d);
  }
  if (d !== u) {
    if (m === -1) return a;
  } else {
    if (c > u) {
      if (e.charCodeAt(i + d) === CHAR_BACKWARD_SLASH) return a.slice(i + d + 1);
      if (d === 2) return a.slice(i + d);
    }
    o > u && (n.charCodeAt(s + d) === CHAR_BACKWARD_SLASH ? m = d : d === 2 && (m = 3)), m === -1 && (m = 0);
  }
  let g = "";
  for (d = s + m + 1; d <= r; ++d) (d === r || n.charCodeAt(d) === CHAR_BACKWARD_SLASH) && (g += g.length === 0 ? ".." : "\\..");
  return i += m, g.length > 0 ? `${g}${a.slice(i, l)}` : (a.charCodeAt(i) === CHAR_BACKWARD_SLASH && ++i, a.slice(i, l));
}, toNamespacedPath(n) {
  if (typeof n != "string" || n.length === 0) return n;
  const e = win32.resolve(n);
  if (e.length <= 2) return n;
  if (e.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
    if (e.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
      const t = e.charCodeAt(2);
      if (t !== CHAR_QUESTION_MARK && t !== CHAR_DOT) return `\\\\?\\UNC\\${e.slice(2)}`;
    }
  } else if (isWindowsDeviceRoot(e.charCodeAt(0)) && e.charCodeAt(1) === CHAR_COLON && e.charCodeAt(2) === CHAR_BACKWARD_SLASH) return `\\\\?\\${e}`;
  return e;
}, dirname(n) {
  validateString(n, "path");
  const e = n.length;
  if (e === 0) return ".";
  let t = -1, a = 0;
  const s = n.charCodeAt(0);
  if (e === 1) return isPathSeparator(s) ? n : ".";
  if (isPathSeparator(s)) {
    if (t = a = 1, isPathSeparator(n.charCodeAt(1))) {
      let i = 2, l = i;
      for (; i < e && !isPathSeparator(n.charCodeAt(i)); ) i++;
      if (i < e && i !== l) {
        for (l = i; i < e && isPathSeparator(n.charCodeAt(i)); ) i++;
        if (i < e && i !== l) {
          for (l = i; i < e && !isPathSeparator(n.charCodeAt(i)); ) i++;
          if (i === e) return n;
          i !== l && (t = a = i + 1);
        }
      }
    }
  } else isWindowsDeviceRoot(s) && n.charCodeAt(1) === CHAR_COLON && (t = e > 2 && isPathSeparator(n.charCodeAt(2)) ? 3 : 2, a = t);
  let r = -1, o = true;
  for (let i = e - 1; i >= a; --i) if (isPathSeparator(n.charCodeAt(i))) {
    if (!o) {
      r = i;
      break;
    }
  } else o = false;
  if (r === -1) {
    if (t === -1) return ".";
    r = t;
  }
  return n.slice(0, r);
}, basename(n, e) {
  e !== void 0 && validateString(e, "suffix"), validateString(n, "path");
  let t = 0, a = -1, s = true, r;
  if (n.length >= 2 && isWindowsDeviceRoot(n.charCodeAt(0)) && n.charCodeAt(1) === CHAR_COLON && (t = 2), e !== void 0 && e.length > 0 && e.length <= n.length) {
    if (e === n) return "";
    let o = e.length - 1, i = -1;
    for (r = n.length - 1; r >= t; --r) {
      const l = n.charCodeAt(r);
      if (isPathSeparator(l)) {
        if (!s) {
          t = r + 1;
          break;
        }
      } else i === -1 && (s = false, i = r + 1), o >= 0 && (l === e.charCodeAt(o) ? --o === -1 && (a = r) : (o = -1, a = i));
    }
    return t === a ? a = i : a === -1 && (a = n.length), n.slice(t, a);
  }
  for (r = n.length - 1; r >= t; --r) if (isPathSeparator(n.charCodeAt(r))) {
    if (!s) {
      t = r + 1;
      break;
    }
  } else a === -1 && (s = false, a = r + 1);
  return a === -1 ? "" : n.slice(t, a);
}, extname(n) {
  validateString(n, "path");
  let e = 0, t = -1, a = 0, s = -1, r = true, o = 0;
  n.length >= 2 && n.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(n.charCodeAt(0)) && (e = a = 2);
  for (let i = n.length - 1; i >= e; --i) {
    const l = n.charCodeAt(i);
    if (isPathSeparator(l)) {
      if (!r) {
        a = i + 1;
        break;
      }
      continue;
    }
    s === -1 && (r = false, s = i + 1), l === CHAR_DOT ? t === -1 ? t = i : o !== 1 && (o = 1) : t !== -1 && (o = -1);
  }
  return t === -1 || s === -1 || o === 0 || o === 1 && t === s - 1 && t === a + 1 ? "" : n.slice(t, s);
}, format: _format.bind(null, "\\"), parse(n) {
  validateString(n, "path");
  const e = { root: "", dir: "", base: "", ext: "", name: "" };
  if (n.length === 0) return e;
  const t = n.length;
  let a = 0, s = n.charCodeAt(0);
  if (t === 1) return isPathSeparator(s) ? (e.root = e.dir = n, e) : (e.base = e.name = n, e);
  if (isPathSeparator(s)) {
    if (a = 1, isPathSeparator(n.charCodeAt(1))) {
      let m = 2, d = m;
      for (; m < t && !isPathSeparator(n.charCodeAt(m)); ) m++;
      if (m < t && m !== d) {
        for (d = m; m < t && isPathSeparator(n.charCodeAt(m)); ) m++;
        if (m < t && m !== d) {
          for (d = m; m < t && !isPathSeparator(n.charCodeAt(m)); ) m++;
          m === t ? a = m : m !== d && (a = m + 1);
        }
      }
    }
  } else if (isWindowsDeviceRoot(s) && n.charCodeAt(1) === CHAR_COLON) {
    if (t <= 2) return e.root = e.dir = n, e;
    if (a = 2, isPathSeparator(n.charCodeAt(2))) {
      if (t === 3) return e.root = e.dir = n, e;
      a = 3;
    }
  }
  a > 0 && (e.root = n.slice(0, a));
  let r = -1, o = a, i = -1, l = true, c = n.length - 1, u = 0;
  for (; c >= a; --c) {
    if (s = n.charCodeAt(c), isPathSeparator(s)) {
      if (!l) {
        o = c + 1;
        break;
      }
      continue;
    }
    i === -1 && (l = false, i = c + 1), s === CHAR_DOT ? r === -1 ? r = c : u !== 1 && (u = 1) : r !== -1 && (u = -1);
  }
  return i !== -1 && (r === -1 || u === 0 || u === 1 && r === i - 1 && r === o + 1 ? e.base = e.name = n.slice(o, i) : (e.name = n.slice(o, r), e.base = n.slice(o, i), e.ext = n.slice(r, i))), o > 0 && o !== a ? e.dir = n.slice(0, o - 1) : e.dir = e.root, e;
}, sep: "\\", delimiter: ";", win32: null, posix: null }, posixCwd = (() => {
  if (platformIsWin32) {
    const n = /\\/g;
    return () => {
      const e = cwd().replace(n, "/");
      return e.slice(e.indexOf("/"));
    };
  }
  return () => cwd();
})(), posix = { resolve(...n) {
  let e = "", t = false;
  for (let a = n.length - 1; a >= 0 && !t; a--) {
    const s = n[a];
    validateString(s, `paths[${a}]`), s.length !== 0 && (e = `${s}/${e}`, t = s.charCodeAt(0) === CHAR_FORWARD_SLASH);
  }
  if (!t) {
    const a = posixCwd();
    e = `${a}/${e}`, t = a.charCodeAt(0) === CHAR_FORWARD_SLASH;
  }
  return e = normalizeString(e, !t, "/", isPosixPathSeparator), t ? `/${e}` : e.length > 0 ? e : ".";
}, normalize(n) {
  if (validateString(n, "path"), n.length === 0) return ".";
  const e = n.charCodeAt(0) === CHAR_FORWARD_SLASH, t = n.charCodeAt(n.length - 1) === CHAR_FORWARD_SLASH;
  return n = normalizeString(n, !e, "/", isPosixPathSeparator), n.length === 0 ? e ? "/" : t ? "./" : "." : (t && (n += "/"), e ? `/${n}` : n);
}, isAbsolute(n) {
  return validateString(n, "path"), n.length > 0 && n.charCodeAt(0) === CHAR_FORWARD_SLASH;
}, join(...n) {
  if (n.length === 0) return ".";
  const e = [];
  for (let t = 0; t < n.length; ++t) {
    const a = n[t];
    validateString(a, "path"), a.length > 0 && e.push(a);
  }
  return e.length === 0 ? "." : posix.normalize(e.join("/"));
}, relative(n, e) {
  if (validateString(n, "from"), validateString(e, "to"), n === e || (n = posix.resolve(n), e = posix.resolve(e), n === e)) return "";
  const t = 1, a = n.length, s = a - t, r = 1, o = e.length - r, i = s < o ? s : o;
  let l = -1, c = 0;
  for (; c < i; c++) {
    const m = n.charCodeAt(t + c);
    if (m !== e.charCodeAt(r + c)) break;
    m === CHAR_FORWARD_SLASH && (l = c);
  }
  if (c === i) if (o > i) {
    if (e.charCodeAt(r + c) === CHAR_FORWARD_SLASH) return e.slice(r + c + 1);
    if (c === 0) return e.slice(r + c);
  } else s > i && (n.charCodeAt(t + c) === CHAR_FORWARD_SLASH ? l = c : c === 0 && (l = 0));
  let u = "";
  for (c = t + l + 1; c <= a; ++c) (c === a || n.charCodeAt(c) === CHAR_FORWARD_SLASH) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${e.slice(r + l)}`;
}, toNamespacedPath(n) {
  return n;
}, dirname(n) {
  if (validateString(n, "path"), n.length === 0) return ".";
  const e = n.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let t = -1, a = true;
  for (let s = n.length - 1; s >= 1; --s) if (n.charCodeAt(s) === CHAR_FORWARD_SLASH) {
    if (!a) {
      t = s;
      break;
    }
  } else a = false;
  return t === -1 ? e ? "/" : "." : e && t === 1 ? "//" : n.slice(0, t);
}, basename(n, e) {
  e !== void 0 && validateString(e, "suffix"), validateString(n, "path");
  let t = 0, a = -1, s = true, r;
  if (e !== void 0 && e.length > 0 && e.length <= n.length) {
    if (e === n) return "";
    let o = e.length - 1, i = -1;
    for (r = n.length - 1; r >= 0; --r) {
      const l = n.charCodeAt(r);
      if (l === CHAR_FORWARD_SLASH) {
        if (!s) {
          t = r + 1;
          break;
        }
      } else i === -1 && (s = false, i = r + 1), o >= 0 && (l === e.charCodeAt(o) ? --o === -1 && (a = r) : (o = -1, a = i));
    }
    return t === a ? a = i : a === -1 && (a = n.length), n.slice(t, a);
  }
  for (r = n.length - 1; r >= 0; --r) if (n.charCodeAt(r) === CHAR_FORWARD_SLASH) {
    if (!s) {
      t = r + 1;
      break;
    }
  } else a === -1 && (s = false, a = r + 1);
  return a === -1 ? "" : n.slice(t, a);
}, extname(n) {
  validateString(n, "path");
  let e = -1, t = 0, a = -1, s = true, r = 0;
  for (let o = n.length - 1; o >= 0; --o) {
    const i = n[o];
    if (i === "/") {
      if (!s) {
        t = o + 1;
        break;
      }
      continue;
    }
    a === -1 && (s = false, a = o + 1), i === "." ? e === -1 ? e = o : r !== 1 && (r = 1) : e !== -1 && (r = -1);
  }
  return e === -1 || a === -1 || r === 0 || r === 1 && e === a - 1 && e === t + 1 ? "" : n.slice(e, a);
}, format: _format.bind(null, "/"), parse(n) {
  validateString(n, "path");
  const e = { root: "", dir: "", base: "", ext: "", name: "" };
  if (n.length === 0) return e;
  const t = n.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let a;
  t ? (e.root = "/", a = 1) : a = 0;
  let s = -1, r = 0, o = -1, i = true, l = n.length - 1, c = 0;
  for (; l >= a; --l) {
    const u = n.charCodeAt(l);
    if (u === CHAR_FORWARD_SLASH) {
      if (!i) {
        r = l + 1;
        break;
      }
      continue;
    }
    o === -1 && (i = false, o = l + 1), u === CHAR_DOT ? s === -1 ? s = l : c !== 1 && (c = 1) : s !== -1 && (c = -1);
  }
  if (o !== -1) {
    const u = r === 0 && t ? 1 : r;
    s === -1 || c === 0 || c === 1 && s === o - 1 && s === r + 1 ? e.base = e.name = n.slice(u, o) : (e.name = n.slice(u, s), e.base = n.slice(u, o), e.ext = n.slice(s, o));
  }
  return r > 0 ? e.dir = n.slice(0, r - 1) : t && (e.dir = "/"), e;
}, sep: "/", delimiter: ":", win32: null, posix: null };
posix.win32 = win32.win32 = win32, posix.posix = win32.posix = posix;
var normalize = platformIsWin32 ? win32.normalize : posix.normalize, isAbsolute = platformIsWin32 ? win32.isAbsolute : posix.isAbsolute, join = platformIsWin32 ? win32.join : posix.join, resolve = platformIsWin32 ? win32.resolve : posix.resolve, relative = platformIsWin32 ? win32.relative : posix.relative, dirname = platformIsWin32 ? win32.dirname : posix.dirname, basename = platformIsWin32 ? win32.basename : posix.basename, extname = platformIsWin32 ? win32.extname : posix.extname, format = platformIsWin32 ? win32.format : posix.format, parse = platformIsWin32 ? win32.parse : posix.parse, toNamespacedPath = platformIsWin32 ? win32.toNamespacedPath : posix.toNamespacedPath, sep = platformIsWin32 ? win32.sep : posix.sep, delimiter = platformIsWin32 ? win32.delimiter : posix.delimiter;
function isPathSeparator2(n) {
  return n === 47 || n === 92;
}
function toSlashes(n) {
  return n.replace(/[\\/]/g, posix.sep);
}
function toPosixPath(n) {
  return n.indexOf("/") === -1 && (n = toSlashes(n)), /^[a-zA-Z]:(\/|$)/.test(n) && (n = "/" + n), n;
}
function getRoot(n, e = posix.sep) {
  if (!n) return "";
  const t = n.length, a = n.charCodeAt(0);
  if (isPathSeparator2(a)) {
    if (isPathSeparator2(n.charCodeAt(1)) && !isPathSeparator2(n.charCodeAt(2))) {
      let r = 3;
      const o = r;
      for (; r < t && !isPathSeparator2(n.charCodeAt(r)); r++) ;
      if (o !== r && !isPathSeparator2(n.charCodeAt(r + 1))) {
        for (r += 1; r < t; r++) if (isPathSeparator2(n.charCodeAt(r))) return n.slice(0, r + 1).replace(/[\\/]/g, e);
      }
    }
    return e;
  } else if (isWindowsDriveLetter(a) && n.charCodeAt(1) === 58) return isPathSeparator2(n.charCodeAt(2)) ? n.slice(0, 2) + e : n.slice(0, 2);
  let s = n.indexOf("://");
  if (s !== -1) {
    for (s += 3; s < t; s++) if (isPathSeparator2(n.charCodeAt(s))) return n.slice(0, s + 1);
  }
  return "";
}
function prefixEqualCaseSensitive(n, e, t) {
  return t === 0 ? true : n.charCodeAt(0) !== e.charCodeAt(0) ? false : t === 1 ? true : n.charCodeAt(t - 1) !== e.charCodeAt(t - 1) ? false : n.startsWith(e);
}
function prefixEqualIgnoreCase(n, e, t) {
  for (let a = 0; a < t; a++) {
    let s = n.charCodeAt(a), r = e.charCodeAt(a);
    if (s !== r) {
      if (s >= 128 || r >= 128) return compareSubstringIgnoreCase(n, e, a, t, a, t) === 0;
      if (s >= 97 && s <= 122 && (s -= 32), r >= 97 && r <= 122 && (r -= 32), s !== r) return false;
    }
  }
  return true;
}
function isEqualOrParent(n, e, t, a = sep) {
  if (n === e) return true;
  if (!n || !e) return false;
  const s = n.length, r = e.length;
  if (r > s) return false;
  const o = a.charCodeAt(0), i = e.charCodeAt(r - 1) === o;
  if (r < s && !i && n.charCodeAt(r) !== o) return false;
  if (t) {
    if (!prefixEqualIgnoreCase(n, e, r)) return false;
  } else if (!prefixEqualCaseSensitive(n, e, r)) return false;
  return r === s || i ? true : n.charCodeAt(r) === o;
}
function isWindowsDriveLetter(n) {
  return n >= 65 && n <= 90 || n >= 97 && n <= 122;
}
var hasBuffer = typeof Buffer < "u", indexOfTable = new Lazy(() => new Uint8Array(256)), textEncoder, textDecoder, MAX_POOLED_ENCODE_SCRATCH_BYTES = 512 * 1024, pooledEncodeScratch = null, pooledEncodeScratchInUse = false, hasWarnedNestedPooledEncode = false, _oversizeVSBufferDecodeThreshold = 1 / 0, _oversizeVSBufferDecodeHandler, _largeVSBufferAllocationThreshold = 1 / 0, _largeVSBufferAllocationHandler;
function reportLargeVSBufferAllocation(n, e) {
  if (_largeVSBufferAllocationHandler && n.byteLength >= _largeVSBufferAllocationThreshold) try {
    _largeVSBufferAllocationHandler({ buffer: n, byteLength: n.byteLength, source: e });
  } catch {
  }
}
var VSBuffer = class O {
  static alloc(e) {
    let t;
    return hasBuffer ? t = new O(Buffer.allocUnsafe(e)) : t = new O(new Uint8Array(e)), reportLargeVSBufferAllocation(t, "alloc"), t;
  }
  static wrap(e) {
    hasBuffer && !Buffer.isBuffer(e) && (e = Buffer.from(e.buffer, e.byteOffset, e.byteLength));
    const t = new O(e);
    return reportLargeVSBufferAllocation(t, "wrap"), t;
  }
  static fromString(e, t) {
    return !(t?.dontUseNodeBuffer || false) && hasBuffer ? new O(Buffer.from(e)) : (textEncoder || (textEncoder = new TextEncoder()), new O(textEncoder.encode(e)));
  }
  static withPooledString(e, t) {
    if (hasBuffer) return t(O.fromString(e));
    if (pooledEncodeScratchInUse) return hasWarnedNestedPooledEncode || (hasWarnedNestedPooledEncode = true, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), t(O.fromString(e));
    const a = e.length * 3;
    if (a > MAX_POOLED_ENCODE_SCRATCH_BYTES) return t(O.fromString(e));
    if (textEncoder || (textEncoder = new TextEncoder()), !pooledEncodeScratch || pooledEncodeScratch.byteLength < a) {
      let r = pooledEncodeScratch ? pooledEncodeScratch.byteLength * 2 : 16384;
      for (; r < a; ) r *= 2;
      pooledEncodeScratch = new Uint8Array(r);
    }
    const s = textEncoder.encodeInto(e, pooledEncodeScratch).written;
    pooledEncodeScratchInUse = true;
    try {
      return t(new O(pooledEncodeScratch.subarray(0, s)));
    } finally {
      pooledEncodeScratchInUse = false;
    }
  }
  static fromByteArray(e) {
    const t = O.alloc(e.length);
    for (let a = 0, s = e.length; a < s; a++) t.buffer[a] = e[a];
    return t;
  }
  static concat(e, t) {
    if (typeof t > "u") {
      t = 0;
      for (let r = 0, o = e.length; r < o; r++) t += e[r].byteLength;
    }
    const a = O.alloc(t);
    let s = 0;
    for (let r = 0, o = e.length; r < o; r++) {
      const i = e[r];
      a.set(i, s), s += i.byteLength;
    }
    return a;
  }
  constructor(e) {
    this.buffer = e, this.byteLength = this.buffer.byteLength;
  }
  clone() {
    const e = O.alloc(this.byteLength);
    return e.set(this), e;
  }
  toString() {
    if (hasBuffer) return this.buffer.toString();
    if (_oversizeVSBufferDecodeHandler && this.buffer.byteLength > _oversizeVSBufferDecodeThreshold) try {
      _oversizeVSBufferDecodeHandler(this.buffer.byteLength);
    } catch {
    }
    return textDecoder || (textDecoder = new TextDecoder()), textDecoder.decode(this.buffer);
  }
  slice(e, t) {
    return new O(this.buffer.subarray(e, t));
  }
  set(e, t) {
    if (e instanceof O) this.buffer.set(e.buffer, t);
    else if (e instanceof Uint8Array) this.buffer.set(e, t);
    else if (e instanceof ArrayBuffer) this.buffer.set(new Uint8Array(e), t);
    else if (ArrayBuffer.isView(e)) this.buffer.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), t);
    else throw new Error("Unknown argument 'array'");
  }
  readUInt32BE(e) {
    return readUInt32BE(this.buffer, e);
  }
  writeUInt32BE(e, t) {
    writeUInt32BE(this.buffer, e, t);
  }
  readUInt32LE(e) {
    return readUInt32LE(this.buffer, e);
  }
  writeUInt32LE(e, t) {
    writeUInt32LE(this.buffer, e, t);
  }
  readUInt8(e) {
    return readUInt8(this.buffer, e);
  }
  writeUInt8(e, t) {
    writeUInt8(this.buffer, e, t);
  }
  indexOf(e, t = 0) {
    return binaryIndexOf(this.buffer, e instanceof O ? e.buffer : e, t);
  }
  equals(e) {
    return this === e ? true : this.byteLength !== e.byteLength ? false : this.buffer.every((t, a) => t === e.buffer[a]);
  }
};
function binaryIndexOf(n, e, t = 0) {
  const a = e.byteLength, s = n.byteLength;
  if (a === 0) return 0;
  if (a === 1) return n.indexOf(e[0]);
  if (a > s - t) return -1;
  const r = indexOfTable.value;
  r.fill(e.length);
  for (let c = 0; c < e.length; c++) r[e[c]] = e.length - c - 1;
  let o = t + e.length - 1, i = o, l = -1;
  for (; o < s; ) if (n[o] === e[i]) {
    if (i === 0) {
      l = o;
      break;
    }
    o--, i--;
  } else o += Math.max(e.length - i, r[n[o]]), i = e.length - 1;
  return l;
}
function readUInt32BE(n, e) {
  return n[e] * 2 ** 24 + n[e + 1] * 2 ** 16 + n[e + 2] * 2 ** 8 + n[e + 3];
}
function writeUInt32BE(n, e, t) {
  n[t + 3] = e, e = e >>> 8, n[t + 2] = e, e = e >>> 8, n[t + 1] = e, e = e >>> 8, n[t] = e;
}
function readUInt32LE(n, e) {
  return n[e + 0] << 0 >>> 0 | n[e + 1] << 8 >>> 0 | n[e + 2] << 16 >>> 0 | n[e + 3] << 24 >>> 0;
}
function writeUInt32LE(n, e, t) {
  n[t + 0] = e & 255, e = e >>> 8, n[t + 1] = e & 255, e = e >>> 8, n[t + 2] = e & 255, e = e >>> 8, n[t + 3] = e & 255;
}
function readUInt8(n, e) {
  return n[e];
}
function writeUInt8(n, e, t) {
  n[t] = e;
}
var _schemePattern = /^\w[\w\d+.-]*$/, _singleSlashStart = /^\//, _doubleSlashStart = /^\/\//;
function _validateUri(n, e) {
  if (!n.scheme && e) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${n.authority}", path: "${n.path}", query: "${n.query}", fragment: "${n.fragment}"}`);
  if (n.scheme && !_schemePattern.test(n.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (n.path) {
    if (n.authority) {
      if (!_singleSlashStart.test(n.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (_doubleSlashStart.test(n.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function _schemeFix(n, e) {
  return !n && !e ? "file" : n;
}
function _referenceResolution(n, e) {
  switch (n) {
    case "https":
    case "http":
    case "file":
      e ? e[0] !== _slash && (e = _slash + e) : e = _slash;
      break;
  }
  return e;
}
var _empty = "", _slash = "/", _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, URI = class en {
  static isUri(e) {
    return e instanceof en ? true : e ? typeof e.authority == "string" && typeof e.fragment == "string" && typeof e.path == "string" && typeof e.query == "string" && typeof e.scheme == "string" && typeof e.fsPath == "string" && typeof e.with == "function" && typeof e.toString == "function" : false;
  }
  constructor(e, t, a, s, r, o = false) {
    typeof e == "object" ? (this.scheme = e.scheme || _empty, this.authority = e.authority || _empty, this.path = e.path || _empty, this.query = e.query || _empty, this.fragment = e.fragment || _empty) : (this.scheme = _schemeFix(e, o), this.authority = t || _empty, this.path = _referenceResolution(this.scheme, a || _empty), this.query = s || _empty, this.fragment = r || _empty, _validateUri(this, o));
  }
  get fsPath() {
    return uriToFsPath(this, false);
  }
  with(e) {
    if (!e) return this;
    let { scheme: t, authority: a, path: s, query: r, fragment: o } = e;
    return t === void 0 ? t = this.scheme : t === null && (t = _empty), a === void 0 ? a = this.authority : a === null && (a = _empty), s === void 0 ? s = this.path : s === null && (s = _empty), r === void 0 ? r = this.query : r === null && (r = _empty), o === void 0 ? o = this.fragment : o === null && (o = _empty), t === this.scheme && a === this.authority && s === this.path && r === this.query && o === this.fragment ? this : new Uri(t, a, s, r, o);
  }
  static parse(e, t = false) {
    const a = _regexp.exec(e);
    return a ? new Uri(a[2] || _empty, percentDecode(a[4] || _empty), percentDecode(a[5] || _empty), percentDecode(a[7] || _empty), percentDecode(a[9] || _empty), t) : new Uri(_empty, _empty, _empty, _empty, _empty);
  }
  static file(e) {
    let t = _empty;
    if (isWindows && (e = e.replace(/\\/g, _slash)), e[0] === _slash && e[1] === _slash) {
      const a = e.indexOf(_slash, 2);
      a === -1 ? (t = e.substring(2), e = _slash) : (t = e.substring(2, a), e = e.substring(a) || _slash);
    }
    return new Uri("file", t, e, _empty, _empty);
  }
  static from(e, t) {
    return new Uri(e.scheme, e.authority, e.path, e.query, e.fragment, t);
  }
  static joinPath(e, ...t) {
    if (!e.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let a;
    return isWindows && e.scheme === "file" ? a = en.file(win32.join(uriToFsPath(e, true), ...t)).path : a = posix.join(e.path, ...t), e.with({ path: a });
  }
  toString(e = false) {
    return _asFormatted(this, e);
  }
  toJSON() {
    return this;
  }
  static revive(e) {
    if (e) {
      if (e instanceof en) return e;
      {
        const t = new Uri(e);
        return t._formatted = e.external ?? null, t._fsPath = e._sep === _pathSepMarker ? e.fsPath ?? null : null, t;
      }
    } else return e;
  }
  [/* @__PURE__ */ Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
}, _pathSepMarker = isWindows ? 1 : void 0, Uri = class extends URI {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = uriToFsPath(this, false)), this._fsPath;
  }
  toString(n = false) {
    return n ? _asFormatted(this, true) : (this._formatted || (this._formatted = _asFormatted(this, false)), this._formatted);
  }
  toJSON() {
    const n = { $mid: 1 };
    return this._fsPath && (n.fsPath = this._fsPath, n._sep = _pathSepMarker), this._formatted && (n.external = this._formatted), this.path && (n.path = this.path), this.scheme && (n.scheme = this.scheme), this.authority && (n.authority = this.authority), this.query && (n.query = this.query), this.fragment && (n.fragment = this.fragment), n;
  }
}, encodeTable = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function encodeURIComponentFast(n, e, t) {
  let a, s = -1;
  for (let r = 0; r < n.length; r++) {
    const o = n.charCodeAt(r);
    if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || e && o === 47 || t && o === 91 || t && o === 93 || t && o === 58) s !== -1 && (a += encodeURIComponent(n.substring(s, r)), s = -1), a !== void 0 && (a += n.charAt(r));
    else {
      a === void 0 && (a = n.substr(0, r));
      const i = encodeTable[o];
      i !== void 0 ? (s !== -1 && (a += encodeURIComponent(n.substring(s, r)), s = -1), a += i) : s === -1 && (s = r);
    }
  }
  return s !== -1 && (a += encodeURIComponent(n.substring(s))), a !== void 0 ? a : n;
}
function encodeURIComponentMinimal(n) {
  let e;
  for (let t = 0; t < n.length; t++) {
    const a = n.charCodeAt(t);
    a === 35 || a === 63 ? (e === void 0 && (e = n.substr(0, t)), e += encodeTable[a]) : e !== void 0 && (e += n[t]);
  }
  return e !== void 0 ? e : n;
}
function uriToFsPath(n, e) {
  let t;
  return n.authority && n.path.length > 1 && n.scheme === "file" ? t = `//${n.authority}${n.path}` : n.path.charCodeAt(0) === 47 && (n.path.charCodeAt(1) >= 65 && n.path.charCodeAt(1) <= 90 || n.path.charCodeAt(1) >= 97 && n.path.charCodeAt(1) <= 122) && n.path.charCodeAt(2) === 58 ? e ? t = n.path.substr(1) : t = n.path[1].toLowerCase() + n.path.substr(2) : t = n.path, isWindows && (t = t.replace(/\//g, "\\")), t;
}
function _asFormatted(n, e) {
  const t = e ? encodeURIComponentMinimal : encodeURIComponentFast;
  let a = "", { scheme: s, authority: r, path: o, query: i, fragment: l } = n;
  if (s && (a += s, a += ":"), (r || s === "file") && (a += _slash, a += _slash), r) {
    let c = r.indexOf("@");
    if (c !== -1) {
      const u = r.substr(0, c);
      r = r.substr(c + 1), c = u.lastIndexOf(":"), c === -1 ? a += t(u, false, false) : (a += t(u.substr(0, c), false, false), a += ":", a += t(u.substr(c + 1), false, true)), a += "@";
    }
    r = r.toLowerCase(), c = r.lastIndexOf(":"), c === -1 ? a += t(r, false, true) : (a += t(r.substr(0, c), false, true), a += r.substr(c));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      const c = o.charCodeAt(1);
      c >= 65 && c <= 90 && (o = `/${String.fromCharCode(c + 32)}:${o.substr(3)}`);
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      const c = o.charCodeAt(0);
      c >= 65 && c <= 90 && (o = `${String.fromCharCode(c + 32)}:${o.substr(2)}`);
    }
    a += t(o, true, false);
  }
  return i && (a += "?", a += t(i, false, false)), l && (a += "#", a += e ? l : encodeURIComponentFast(l, false, false)), a;
}
function decodeURIComponentGraceful(n) {
  try {
    return decodeURIComponent(n);
  } catch {
    return n.length > 3 ? n.substr(0, 3) + decodeURIComponentGraceful(n.substr(3)) : n;
  }
}
var _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function percentDecode(n) {
  return n.match(_rEncodedAsHex) ? n.replace(_rEncodedAsHex, (e) => decodeURIComponentGraceful(e)) : n;
}
var Schemas;
((n) => {
  n.inMemory = "inmemory", n.vscode = "vscode", n.internal = "private", n.walkThrough = "walkThrough", n.walkThroughSnippet = "walkThroughSnippet", n.http = "http", n.https = "https", n.file = "file", n.git = "git", n.mailto = "mailto", n.untitled = "untitled", n.data = "data", n.command = "command", n.vscodeRemote = "vscode-remote", n.vscodeRemoteResource = "vscode-remote-resource", n.vscodeManagedRemoteResource = "vscode-managed-remote-resource", n.vscodeUserData = "vscode-userdata", n.vscodeCustomEditor = "vscode-custom-editor", n.vscodeNotebook = "vscode-notebook", n.vscodeNotebookCell = "vscode-notebook-cell", n.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", n.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", n.vscodeNotebookCellOutput = "vscode-notebook-cell-output", n.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", n.vscodeNotebookMetadata = "vscode-notebook-metadata", n.vscodeInteractiveInput = "vscode-interactive-input", n.vscodeSettings = "vscode-settings", n.vscodeWorkspaceTrust = "vscode-workspace-trust", n.vscodeTerminal = "vscode-terminal", n.terminal = "terminal", n.vscodeChatCodeBlock = "vscode-chat-code-block", n.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", n.vscodeChatSesssion = "vscode-chat-editor", n.webviewPanel = "webview-panel", n.vscodeWebview = "vscode-webview", n.extension = "extension", n.aiChat = "cursor.aichat", n.contextObject = "cursor.context-object", n.composer = "cursor.composer", n.aiSettings = "cursor.aisettings", n.tinderDiffEditor = "cursor.tinderdiffeditor", n.vscodeFileResource = "vscode-file", n.cursorRpcDevtools = "cursor-rpc-devtools", n.tmp = "tmp", n.vsls = "vsls", n.vscodeSourceControl = "vscode-scm", n.commentsInput = "comment", n.codeSetting = "code-setting", n.cursorDev = "cursor-dev-utils", n.outputChannel = "output", n.accessibleView = "accessible-view", n.backgroundComposer = "cursor.backgroundcomposer", n.cursorAgent = "cursor.agent", n.personalEnvironmentJson = "cursor.personalenvironmentjson", n.bugbot = "cursor.bugbot", n.backgroundComposerPeek = "background-composer-peek", n.cursorPlan = "cursor-plan", n.cursorWorker = "cursor-worker", n.reviewChanges = "cursor.reviewchanges", n.cursorBlame = "cursor.blame", n.cursorFileBlame = "cursor.fileblame";
})(Schemas || (Schemas = {}));
var connectionTokenQueryName = "tkn", RemoteAuthoritiesImpl = class {
  constructor() {
    this._hosts = /* @__PURE__ */ Object.create(null), this._ports = /* @__PURE__ */ Object.create(null), this._connectionTokens = /* @__PURE__ */ Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
  }
  setPreferredWebSchema(n) {
    this._preferredWebSchema = n;
  }
  setDelegate(n) {
    this._delegate = n;
  }
  setServerRootPath(n, e) {
    this._serverRootPath = posix.join(e ?? "/", getServerProductSegment(n));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return posix.join(this._serverRootPath, Schemas.vscodeRemoteResource);
  }
  set(n, e, t) {
    this._hosts[n] = e, this._ports[n] = t;
  }
  setConnectionToken(n, e) {
    this._connectionTokens[n] = e;
  }
  getPreferredWebSchema() {
    return this._preferredWebSchema;
  }
  rewrite(n) {
    if (this._delegate) try {
      return this._delegate(n);
    } catch (o) {
      return onUnexpectedError(o), n;
    }
    const e = n.authority;
    let t = this._hosts[e];
    t && t.indexOf(":") !== -1 && t.indexOf("[") === -1 && (t = `[${t}]`);
    const a = this._ports[e], s = this._connectionTokens[e];
    let r = `path=${encodeURIComponent(n.path)}`;
    return typeof s == "string" && (r += `&${connectionTokenQueryName}=${encodeURIComponent(s)}`), URI.from({ scheme: isWeb ? this._preferredWebSchema : Schemas.vscodeRemoteResource, authority: `${t}:${a}`, path: this._remoteResourcesPath, query: r });
  }
}, RemoteAuthorities = new RemoteAuthoritiesImpl();
function getServerProductSegment(n) {
  return `${n.quality ?? "oss"}-${n.commit ?? "dev"}`;
}
var VSCODE_AUTHORITY = "vscode-app", _FileAccessImpl = class nn {
  asBrowserUri(e) {
    const t = this.toUri(e);
    return this.uriToBrowserUri(t);
  }
  uriToBrowserUri(e) {
    return e.scheme === Schemas.vscodeRemote ? RemoteAuthorities.rewrite(e) : e.scheme === Schemas.file && (isNative || webWorkerOrigin === `${Schemas.vscodeFileResource}://${nn.FALLBACK_AUTHORITY}`) ? e.with({ scheme: Schemas.vscodeFileResource, authority: e.authority || nn.FALLBACK_AUTHORITY, query: null, fragment: null }) : e;
  }
  asFileUri(e) {
    const t = this.toUri(e);
    return this.uriToFileUri(t);
  }
  uriToFileUri(e) {
    return e.scheme === Schemas.vscodeFileResource ? e.with({ scheme: Schemas.file, authority: e.authority !== nn.FALLBACK_AUTHORITY ? e.authority : null, query: null, fragment: null }) : e;
  }
  toUri(e) {
    if (URI.isUri(e)) return e;
    if (globalThis._VSCODE_FILE_ROOT) {
      const t = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(t)) return URI.joinPath(URI.parse(t, true), e);
      const a = join(t, e);
      return URI.file(a);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
_FileAccessImpl.FALLBACK_AUTHORITY = VSCODE_AUTHORITY;
var FileAccessImpl = _FileAccessImpl, FileAccess = new FileAccessImpl(), CacheControlheaders = Object.freeze({ "Cache-Control": "no-cache, no-store" }), DocumentPolicyheaders = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), COI;
((n) => {
  const e = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  n.CoopAndCoep = Object.freeze(e.get("3"));
  const t = "vscode-coi";
  function a(r) {
    let o;
    typeof r == "string" ? o = new URL(r).searchParams : r instanceof URL ? o = r.searchParams : URI.isUri(r) && (o = new URL(r.toString(true)).searchParams);
    const i = o?.get(t);
    if (i) return e.get(i);
  }
  n.getHeadersFromQuery = a;
  function s(r, o, i) {
    if (!globalThis.crossOriginIsolated) return;
    const l = o && i ? "3" : i ? "2" : "1";
    r instanceof URLSearchParams ? r.set(t, l) : r[t] = l;
  }
  n.addSearchParam = s;
})(COI || (COI = {}));
function originalFSPath(n) {
  return uriToFsPath(n, true);
}
var ExtUri = class {
  constructor(n) {
    this._ignorePathCasing = n;
  }
  compare(n, e, t = false) {
    return n === e ? 0 : compare(this.getComparisonKey(n, t), this.getComparisonKey(e, t));
  }
  isEqual(n, e, t = false) {
    return n === e ? true : !n || !e ? false : this.getComparisonKey(n, t) === this.getComparisonKey(e, t);
  }
  getComparisonKey(n, e = false) {
    return n.with({ path: this._ignorePathCasing(n) ? n.path.toLowerCase() : void 0, fragment: e ? null : void 0 }).toString();
  }
  ignorePathCasing(n) {
    return this._ignorePathCasing(n);
  }
  isEqualOrParent(n, e, t = false) {
    if (n.scheme === e.scheme) {
      if (n.scheme === Schemas.file) return isEqualOrParent(originalFSPath(n), originalFSPath(e), this._ignorePathCasing(n)) && n.query === e.query && (t || n.fragment === e.fragment);
      if (isEqualAuthority(n.authority, e.authority)) return isEqualOrParent(n.path, e.path, this._ignorePathCasing(n), "/") && n.query === e.query && (t || n.fragment === e.fragment);
    }
    return false;
  }
  joinPath(n, ...e) {
    return URI.joinPath(n, ...e);
  }
  basenameOrAuthority(n) {
    return basename2(n) || n.authority;
  }
  basename(n) {
    return posix.basename(n.path);
  }
  extname(n) {
    return posix.extname(n.path);
  }
  dirname(n) {
    if (n.path.length === 0) return n;
    let e;
    return n.scheme === Schemas.file ? e = URI.file(dirname(originalFSPath(n))).path : (e = posix.dirname(n.path), n.authority && e.length && e.charCodeAt(0) !== 47 && (console.error(`dirname("${n.toString})) resulted in a relative path`), e = "/")), n.with({ path: e });
  }
  normalizePath(n) {
    if (!n.path.length) return n;
    let e;
    return n.scheme === Schemas.file ? e = URI.file(normalize(originalFSPath(n))).path : e = posix.normalize(n.path), n.with({ path: e });
  }
  relativePath(n, e) {
    if (n.scheme !== e.scheme || !isEqualAuthority(n.authority, e.authority)) return;
    if (n.scheme === Schemas.file) {
      const s = relative(originalFSPath(n), originalFSPath(e));
      return isWindows ? toSlashes(s) : s;
    }
    let t = n.path || "/";
    const a = e.path || "/";
    if (this._ignorePathCasing(n)) {
      let s = 0;
      for (const r = Math.min(t.length, a.length); s < r && !(t.charCodeAt(s) !== a.charCodeAt(s) && t.charAt(s).toLowerCase() !== a.charAt(s).toLowerCase()); s++) ;
      t = a.substr(0, s) + t.substr(s);
    }
    return posix.relative(t, a);
  }
  resolvePath(n, e) {
    if (n.scheme === Schemas.file) {
      const t = URI.file(resolve(originalFSPath(n), e));
      return n.with({ authority: t.authority, path: t.path });
    }
    return e = toPosixPath(e), n.with({ path: posix.resolve(n.path, e) });
  }
  isAbsolutePath(n) {
    return !!n.path && n.path[0] === "/";
  }
  isEqualAuthority(n, e) {
    return n === e || n !== void 0 && e !== void 0 && equalsIgnoreCase(n, e);
  }
  hasTrailingPathSeparator(n, e = sep) {
    if (n.scheme === Schemas.file) {
      const t = originalFSPath(n);
      return t.length > getRoot(t).length && t[t.length - 1] === e;
    } else {
      const t = n.path;
      return t.length > 1 && t.charCodeAt(t.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(n.fsPath);
    }
  }
  removeTrailingPathSeparator(n, e = sep) {
    return hasTrailingPathSeparator(n, e) ? n.with({ path: n.path.substr(0, n.path.length - 1) }) : n;
  }
  addTrailingPathSeparator(n, e = sep) {
    let t = false;
    if (n.scheme === Schemas.file) {
      const a = originalFSPath(n);
      t = a !== void 0 && a.length === getRoot(a).length && a[a.length - 1] === e;
    } else {
      e = "/";
      const a = n.path;
      t = a.length === 1 && a.charCodeAt(a.length - 1) === 47;
    }
    return !t && !hasTrailingPathSeparator(n, e) ? n.with({ path: n.path + "/" }) : n;
  }
}, extUri = new ExtUri(() => false), extUriBiasedIgnorePathCase = new ExtUri((n) => n.scheme === Schemas.file ? !isLinux : true), extUriIgnorePathCase = new ExtUri((n) => true), isEqual = extUri.isEqual.bind(extUri), isEqualOrParent2 = extUri.isEqualOrParent.bind(extUri), getComparisonKey = extUri.getComparisonKey.bind(extUri), basenameOrAuthority = extUri.basenameOrAuthority.bind(extUri), basename2 = extUri.basename.bind(extUri), extname2 = extUri.extname.bind(extUri), dirname2 = extUri.dirname.bind(extUri), joinPath = extUri.joinPath.bind(extUri), normalizePath = extUri.normalizePath.bind(extUri), relativePath = extUri.relativePath.bind(extUri), resolvePath = extUri.resolvePath.bind(extUri), isAbsolutePath = extUri.isAbsolutePath.bind(extUri), isEqualAuthority = extUri.isEqualAuthority.bind(extUri), hasTrailingPathSeparator = extUri.hasTrailingPathSeparator.bind(extUri), removeTrailingPathSeparator = extUri.removeTrailingPathSeparator.bind(extUri), addTrailingPathSeparator = extUri.addTrailingPathSeparator.bind(extUri), DataUri;
((n) => {
  n.META_DATA_LABEL = "label", n.META_DATA_DESCRIPTION = "description", n.META_DATA_SIZE = "size", n.META_DATA_MIME = "mime";
  function e(t) {
    const a = /* @__PURE__ */ new Map();
    t.path.substring(t.path.indexOf(";") + 1, t.path.lastIndexOf(";")).split(";").forEach((o) => {
      const [i, l] = o.split(":");
      i && l && a.set(i, l);
    });
    const r = t.path.substring(0, t.path.indexOf(";"));
    return r && a.set(n.META_DATA_MIME, r), a;
  }
  n.parseMetaData = e;
})(DataUri || (DataUri = {}));
var MicrotaskDelay = /* @__PURE__ */ Symbol("MicrotaskDelay");
function createCancelablePromise(n) {
  const e = new CancellationTokenSource(), t = n(e.token);
  let a = false;
  const s = new Promise((r, o) => {
    const i = e.token.onCancellationRequested(() => {
      a = true, i.dispose(), o(new CancellationError());
    });
    Promise.resolve(t).then((l) => {
      i.dispose(), e.dispose(), a ? isDisposable(l) && l.dispose() : r(l);
    }, (l) => {
      i.dispose(), e.dispose(), o(l);
    });
  });
  return new class {
    cancel() {
      e.cancel(), e.dispose();
    }
    then(r, o) {
      return s.then(r, o);
    }
    catch(r) {
      return this.then(void 0, r);
    }
    finally(r) {
      return s.finally(r);
    }
  }();
}
var Sequencer = class {
  constructor() {
    this.current = Promise.resolve(null);
  }
  queue(n) {
    return this.current = this.current.then(() => n(), () => n());
  }
};
function disposableTimeout(n, e = 0, t) {
  const a = setTimeout(() => {
    n(), t && s.dispose();
  }, e), s = toDisposable(() => {
    clearTimeout(a), t?.delete(s);
  });
  return t?.add(s), s;
}
var runWhenGlobalIdle, _runWhenIdle;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? _runWhenIdle = (n, e, t) => {
    setTimeout0(() => {
      if (a) return;
      const s = Date.now() + 15;
      e(Object.freeze({ didTimeout: true, timeRemaining() {
        return Math.max(0, s - Date.now());
      } }));
    });
    let a = false;
    return { dispose() {
      a || (a = true);
    } };
  } : _runWhenIdle = (n, e, t) => {
    const a = n.requestIdleCallback(e, typeof t == "number" ? { timeout: t } : void 0);
    let s = false;
    return { dispose() {
      s || (s = true, n.cancelIdleCallback(a));
    } };
  }, runWhenGlobalIdle = (n, e) => _runWhenIdle(globalThis, n, e);
})();
var Promises;
((n) => {
  async function e(a) {
    let s;
    const r = await Promise.all(a.map((o) => o.then((i) => i, (i) => {
      s || (s = i);
    })));
    if (typeof s < "u") throw s;
    return r;
  }
  n.settled = e;
  function t(a) {
    return new Promise(async (s, r) => {
      try {
        await a(s, r);
      } catch (o) {
        r(o);
      }
    });
  }
  n.withAsyncBody = t;
})(Promises || (Promises = {}));
var _AsyncIterableObject = class P {
  static fromArray(e) {
    return new P((t) => {
      t.emitMany(e);
    });
  }
  static fromPromise(e) {
    return new P(async (t) => {
      t.emitMany(await e);
    });
  }
  static fromPromisesResolveOrder(e) {
    return new P(async (t) => {
      await Promise.all(e.map(async (a) => t.emitOne(await a)));
    });
  }
  static merge(e) {
    return new P(async (t) => {
      await Promise.all(e.map(async (a) => {
        for await (const s of a) t.emitOne(s);
      }));
    });
  }
  constructor(e, t) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = t, this._onStateChanged = new Emitter(), queueMicrotask(async () => {
      const a = { emitOne: (s) => this.emitOne(s), emitMany: (s) => this.emitMany(s), reject: (s) => this.reject(s) };
      try {
        await Promise.resolve(e(a)), this.resolve();
      } catch (s) {
        this.reject(s);
      } finally {
        a.emitOne = void 0, a.emitMany = void 0, a.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let e = 0;
    return { next: async () => {
      do {
        if (this._state === 2) throw this._error;
        if (e < this._results.length) return { done: false, value: this._results[e++] };
        if (this._state === 1) return { done: true, value: void 0 };
        await Event.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(e, t) {
    return new P(async (a) => {
      for await (const s of e) a.emitOne(t(s));
    });
  }
  map(e) {
    return P.map(this, e);
  }
  static filter(e, t) {
    return new P(async (a) => {
      for await (const s of e) t(s) && a.emitOne(s);
    });
  }
  filter(e) {
    return P.filter(this, e);
  }
  static coalesce(e) {
    return P.filter(e, (t) => !!t);
  }
  coalesce() {
    return P.coalesce(this);
  }
  static async toPromise(e) {
    const t = [];
    for await (const a of e) t.push(a);
    return t;
  }
  toPromise() {
    return P.toPromise(this);
  }
  emitOne(e) {
    this._state === 0 && (this._results.push(e), this._onStateChanged.fire());
  }
  emitMany(e) {
    this._state === 0 && (this._results = this._results.concat(e), this._onStateChanged.fire());
  }
  resolve() {
    this._state === 0 && (this._state = 1, this._onStateChanged.fire());
  }
  reject(e) {
    this._state === 0 && (this._state = 2, this._error = e, this._onStateChanged.fire());
  }
};
_AsyncIterableObject.EMPTY = _AsyncIterableObject.fromArray([]);
function leftRotate(n, e, t = 32) {
  const a = t - e, s = ~((1 << a) - 1);
  return (n << e | (s & n) >>> a) >>> 0;
}
function toHexString(n, e = 32) {
  return n instanceof ArrayBuffer ? Array.from(new Uint8Array(n)).map((t) => t.toString(16).padStart(2, "0")).join("") : (n >>> 0).toString(16).padStart(e / 4, "0");
}
var _StringSHA1 = class fn {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
  }
  update(e) {
    const t = e.length;
    if (t === 0) return;
    const a = this._buff;
    let s = this._buffLen, r = this._leftoverHighSurrogate, o, i;
    for (r !== 0 ? (o = r, i = -1, r = 0) : (o = e.charCodeAt(0), i = 0); ; ) {
      let l = o;
      if (isHighSurrogate(o)) if (i + 1 < t) {
        const c = e.charCodeAt(i + 1);
        isLowSurrogate(c) ? (i++, l = computeCodePoint(o, c)) : l = 65533;
      } else {
        r = o;
        break;
      }
      else isLowSurrogate(o) && (l = 65533);
      if (s = this._push(a, s, l), i++, i < t) o = e.charCodeAt(i);
      else break;
    }
    this._buffLen = s, this._leftoverHighSurrogate = r;
  }
  _push(e, t, a) {
    return a < 128 ? e[t++] = a : a < 2048 ? (e[t++] = 192 | (a & 1984) >>> 6, e[t++] = 128 | (a & 63) >>> 0) : a < 65536 ? (e[t++] = 224 | (a & 61440) >>> 12, e[t++] = 128 | (a & 4032) >>> 6, e[t++] = 128 | (a & 63) >>> 0) : (e[t++] = 240 | (a & 1835008) >>> 18, e[t++] = 128 | (a & 258048) >>> 12, e[t++] = 128 | (a & 4032) >>> 6, e[t++] = 128 | (a & 63) >>> 0), t >= 64 && (this._step(), t -= 64, this._totalLen += 64, e[0] = e[64], e[1] = e[65], e[2] = e[66]), t;
  }
  digest() {
    return this._finished || (this._finished = true, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), toHexString(this._h0) + toHexString(this._h1) + toHexString(this._h2) + toHexString(this._h3) + toHexString(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
    const e = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(e / 4294967296), false), this._buffDV.setUint32(60, e % 4294967296, false), this._step();
  }
  _step() {
    const e = fn._bigBlock32, t = this._buffDV;
    for (let m = 0; m < 64; m += 4) e.setUint32(m, t.getUint32(m, false), false);
    for (let m = 64; m < 320; m += 4) e.setUint32(m, leftRotate(e.getUint32(m - 12, false) ^ e.getUint32(m - 32, false) ^ e.getUint32(m - 56, false) ^ e.getUint32(m - 64, false), 1), false);
    let a = this._h0, s = this._h1, r = this._h2, o = this._h3, i = this._h4, l, c, u;
    for (let m = 0; m < 80; m++) m < 20 ? (l = s & r | ~s & o, c = 1518500249) : m < 40 ? (l = s ^ r ^ o, c = 1859775393) : m < 60 ? (l = s & r | s & o | r & o, c = 2400959708) : (l = s ^ r ^ o, c = 3395469782), u = leftRotate(a, 5) + l + i + c + e.getUint32(m * 4, false) & 4294967295, i = o, o = r, r = leftRotate(s, 30), s = a, a = u;
    this._h0 = this._h0 + a & 4294967295, this._h1 = this._h1 + s & 4294967295, this._h2 = this._h2 + r & 4294967295, this._h3 = this._h3 + o & 4294967295, this._h4 = this._h4 + i & 4294967295;
  }
};
_StringSHA1._bigBlock32 = new DataView(new ArrayBuffer(320));
async function getSha256Hash(n) {
  const t = new TextEncoder().encode(n), a = await crypto.subtle.digest("SHA-256", t);
  return toHexString(a);
}
function memoize(n, e, t) {
  let a = null, s = null;
  if (typeof t.value == "function" ? (a = "value", s = t.value, s.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof t.get == "function" && (a = "get", s = t.get), !s) throw new Error("not supported");
  const r = `$memoize$${e}`;
  t[a] = function(...o) {
    return this.hasOwnProperty(r) || Object.defineProperty(this, r, { configurable: false, enumerable: false, writable: false, value: s.apply(this, o) }), this[r];
  };
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function revive(n, e = 0) {
  if (typeof n != "object" || n === null || e > 200) return n;
  switch (n.$mid) {
    case 1:
      return URI.revive(n);
    case 2:
      return new RegExp(n.source, n.flags);
    case 17:
      return new Date(n.source);
  }
  if (Array.isArray(n)) for (let t = 0; t < n.length; ++t) {
    const a = n[t];
    if (a !== null && typeof a == "object") {
      const s = revive(a, e + 1);
      s !== a && (n[t] = s);
    }
  }
  else {
    if (n instanceof VSBuffer || n instanceof Uint8Array) return n;
    for (const t in n) if (hasOwnProperty.call(n, t)) {
      const a = n[t];
      if (a !== null && typeof a == "object") {
        const s = revive(a, e + 1);
        s !== a && (n[t] = s);
      }
    }
  }
  return n;
}
var IPC_SLOW_DESERIALIZE_THRESHOLD_MS = 50, _slowIPCDeserializeEnabled = false, _slowIPCDeserializeHandler;
function requestTypeToStr(n) {
  switch (n) {
    case 100:
      return "req";
    case 101:
      return "cancel";
    case 102:
      return "subscribe";
    case 103:
      return "unsubscribe";
  }
}
function responseTypeToStr(n) {
  switch (n) {
    case 200:
      return "init";
    case 201:
      return "reply:";
    case 202:
    case 203:
      return "replyErr:";
    case 204:
      return "event:";
  }
}
function readIntVQL(n) {
  let e = 0;
  for (let t = 0; ; t += 7) {
    const a = n.readUInt8();
    if (e |= (a & 127) << t, !(a & 128)) return e;
  }
}
function writeInt32VQL(n, e) {
  if (e === 0) {
    n.writeUInt8(0);
    return;
  }
  do {
    let t = e & 127;
    e = e >>> 7, e > 0 && (t |= 128), n.writeUInt8(t);
  } while (e !== 0);
}
var BufferReader = class {
  constructor(n) {
    this.buffer = n, this.pos = 0;
  }
  read(n) {
    const e = this.buffer.slice(this.pos, this.pos + n);
    return this.pos += e.byteLength, e;
  }
  readUInt8() {
    return this.buffer.readUInt8(this.pos++);
  }
}, INITIAL_WRITE_SCRATCH_CAPACITY = 4 * 1024, MAX_RECYCLED_WRITE_SCRATCH_CAPACITY = 512 * 1024, WRITE_REFERENCE_THRESHOLD = 64 * 1024, recycledWriteScratch, disposedWriteScratch = VSBuffer.alloc(0), BufferWriter = class {
  constructor() {
    this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0, recycledWriteScratch ? (this.data = recycledWriteScratch, recycledWriteScratch = void 0) : this.data = VSBuffer.alloc(INITIAL_WRITE_SCRATCH_CAPACITY);
  }
  get buffer() {
    if (!this.fragments) {
      const n = VSBuffer.alloc(this.length);
      return n.set(this.data.slice(0, this.length), 0), n;
    }
    return this.flushSegment(), VSBuffer.concat(this.fragments, this.totalLength);
  }
  ensureCapacity(n) {
    const e = this.length + n;
    if (e <= this.data.byteLength) return;
    let t = Math.max(this.data.byteLength * 2, INITIAL_WRITE_SCRATCH_CAPACITY);
    for (; t < e; ) t *= 2;
    const a = VSBuffer.alloc(t);
    this.length > 0 && a.set(this.data.slice(0, this.length), 0), this.data = a;
  }
  flushSegment() {
    this.length > this.segmentStart && (this.fragments.push(this.data.slice(this.segmentStart, this.length)), this.segmentStart = this.length);
  }
  write(n) {
    this.ensureCapacity(n.byteLength), this.data.set(n, this.length), this.length += n.byteLength, this.totalLength += n.byteLength;
  }
  writeUInt8(n) {
    this.ensureCapacity(1), this.data.buffer[this.length++] = n, this.totalLength++;
  }
  writeReference(n) {
    if (n.byteLength < WRITE_REFERENCE_THRESHOLD) {
      this.write(n);
      return;
    }
    this.fragments || (this.fragments = []), this.flushSegment(), this.fragments.push(n), this.totalLength += n.byteLength;
  }
  dispose() {
    !recycledWriteScratch && this.data.byteLength <= MAX_RECYCLED_WRITE_SCRATCH_CAPACITY && this.data !== disposedWriteScratch && (recycledWriteScratch = this.data), this.data = disposedWriteScratch, this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0;
  }
}, hasBuffer2 = typeof Buffer < "u", LARGE_STRING_LENGTH = 64 * 1024, JSON_OBJECT_ARRAY_COLLAPSE_MIN_LENGTH = 8;
function isPlainJsonObject(n) {
  return !(n === null || typeof n != "object" || Array.isArray(n) || n instanceof VSBuffer || n instanceof Uint8Array || hasBuffer2 && Buffer.isBuffer(n));
}
function canCollapseArrayToJson(n) {
  if (n.length < JSON_OBJECT_ARRAY_COLLAPSE_MIN_LENGTH) return false;
  for (let e = 0; e < n.length; e++) if (!isPlainJsonObject(n[e])) return false;
  return true;
}
function writeStringData(n, e) {
  if (e.length >= LARGE_STRING_LENGTH) {
    const t = VSBuffer.fromString(e);
    writeInt32VQL(n, t.byteLength), n.writeReference(t);
    return;
  }
  VSBuffer.withPooledString(e, (t) => {
    writeInt32VQL(n, t.byteLength), n.write(t);
  });
}
function serialize(n, e) {
  if (typeof e > "u") n.writeUInt8(0);
  else if (typeof e == "string") n.writeUInt8(1), writeStringData(n, e);
  else if (hasBuffer2 && Buffer.isBuffer(e)) n.writeUInt8(2), writeInt32VQL(n, e.byteLength), n.writeReference(VSBuffer.wrap(e));
  else if (e instanceof VSBuffer) n.writeUInt8(3), writeInt32VQL(n, e.byteLength), n.writeReference(e);
  else if (Array.isArray(e)) {
    if (canCollapseArrayToJson(e)) {
      const t = JSON.stringify(e);
      n.writeUInt8(5), writeStringData(n, t);
      return;
    }
    n.writeUInt8(4), writeInt32VQL(n, e.length);
    for (const t of e) serialize(n, t);
  } else if (typeof e == "number" && (e | 0) === e) n.writeUInt8(6), writeInt32VQL(n, e);
  else if (e instanceof Uint8Array) n.writeUInt8(7), writeInt32VQL(n, e.length), n.writeReference(VSBuffer.wrap(e));
  else {
    const t = JSON.stringify(e);
    n.writeUInt8(5), writeStringData(n, t);
  }
}
function deserialize(n) {
  switch (n.readUInt8()) {
    case 0:
      return;
    case 1:
      return n.read(readIntVQL(n)).toString();
    case 2:
      return n.read(readIntVQL(n)).buffer;
    case 3:
      return n.read(readIntVQL(n));
    case 7:
      return n.read(readIntVQL(n)).buffer;
    case 4: {
      const t = readIntVQL(n), a = [];
      for (let s = 0; s < t; s++) a.push(deserialize(n));
      return a;
    }
    case 5:
      return JSON.parse(n.read(readIntVQL(n)).toString());
    case 6:
      return readIntVQL(n);
  }
}
var ChannelServer = class {
  constructor(n, e, t = null, a = 1e3) {
    this.protocol = n, this.ctx = e, this.logger = t, this.timeoutDelay = a, this.channels = /* @__PURE__ */ new Map(), this.activeRequests = /* @__PURE__ */ new Map(), this.protocolListener = new MutableDisposable(), this.pendingRequests = /* @__PURE__ */ new Map(), this.protocolListener.value = this.protocol.onMessage((s) => this.onRawMessage(s)), this.sendResponse({ type: 200 });
  }
  registerChannel(n, e) {
    this.channels.set(n, e), setTimeout(() => this.flushPendingRequests(n), 0);
  }
  sendResponse(n) {
    switch (n.type) {
      case 200: {
        const e = this.send([n.type]);
        this.logger?.logOutgoing(e, 0, 1, responseTypeToStr(n.type));
        return;
      }
      case 201:
      case 202:
      case 204:
      case 203: {
        const e = this.send([n.type, n.id], n.data);
        this.logger?.logOutgoing(e, n.id, 1, responseTypeToStr(n.type), n.data);
        return;
      }
    }
  }
  send(n, e = void 0) {
    const t = new BufferWriter();
    try {
      return serialize(t, n), serialize(t, e), this.sendBuffer(t.buffer);
    } finally {
      t.dispose();
    }
  }
  sendBuffer(n) {
    try {
      return this.protocol.send(n), n.byteLength;
    } catch {
      return 0;
    }
  }
  onRawMessage(n) {
    const e = new BufferReader(n), t = _slowIPCDeserializeEnabled, a = t ? performance.now() : 0, s = deserialize(e), r = s[0];
    if (r !== 100 && r !== 101 && r !== 102 && r !== 103) return;
    const o = deserialize(e);
    if (t) {
      const i = performance.now() - a;
      i > IPC_SLOW_DESERIALIZE_THRESHOLD_MS && _slowIPCDeserializeHandler?.({ durationMs: i, byteLength: n.byteLength, requestId: s[1] ?? 0, channelName: s[2], command: s[3], messageType: requestTypeToStr(r) });
    }
    switch (r) {
      case 100:
        return this.logger?.logIncoming(n.byteLength, s[1], 1, `${requestTypeToStr(r)}: ${s[2]}.${s[3]}`, o), this.onPromise({ type: r, id: s[1], channelName: s[2], name: s[3], arg: o });
      case 102:
        return this.logger?.logIncoming(n.byteLength, s[1], 1, `${requestTypeToStr(r)}: ${s[2]}.${s[3]}`, o), this.onEventListen({ type: r, id: s[1], channelName: s[2], name: s[3], arg: o });
      case 101:
        return this.logger?.logIncoming(n.byteLength, s[1], 1, `${requestTypeToStr(r)}`), this.disposeActiveRequest({ type: r, id: s[1] });
      case 103:
        return this.logger?.logIncoming(n.byteLength, s[1], 1, `${requestTypeToStr(r)}`), this.disposeActiveRequest({ type: r, id: s[1] });
    }
  }
  onPromise(n) {
    const e = this.channels.get(n.channelName);
    if (!e) {
      this.collectPendingRequest(n);
      return;
    }
    const t = new CancellationTokenSource();
    let a;
    try {
      a = e.call(this.ctx, n.name, n.arg, t.token);
    } catch (o) {
      a = Promise.reject(o);
    }
    const s = n.id;
    a.then((o) => {
      this.sendResponse({ id: s, data: o, type: 201 });
    }, (o) => {
      o instanceof Error ? this.sendResponse({ id: s, data: { message: o.message, name: o.name, stack: o.stack ? o.stack.split(`
`) : void 0 }, type: 202 }) : this.sendResponse({ id: s, data: o, type: 203 });
    }).finally(() => {
      r.dispose(), this.activeRequests.delete(n.id);
    });
    const r = toDisposable(() => t.cancel());
    this.activeRequests.set(n.id, r);
  }
  onEventListen(n) {
    const e = this.channels.get(n.channelName);
    if (!e) {
      this.collectPendingRequest(n);
      return;
    }
    const t = n.id, s = e.listen(this.ctx, n.name, n.arg)((r) => this.sendResponse({ id: t, data: r, type: 204 }));
    this.activeRequests.set(n.id, s);
  }
  disposeActiveRequest(n) {
    const e = this.activeRequests.get(n.id);
    e && (e.dispose(), this.activeRequests.delete(n.id));
  }
  collectPendingRequest(n) {
    let e = this.pendingRequests.get(n.channelName);
    e || (e = [], this.pendingRequests.set(n.channelName, e));
    const t = disposableTimeout(() => {
      console.error(`Unknown channel: ${n.channelName}`), n.type === 100 && this.sendResponse({ id: n.id, data: { name: "Unknown channel", message: `Channel name '${n.channelName}' timed out after ${this.timeoutDelay}ms`, stack: void 0 }, type: 202 }), t.dispose();
    }, this.timeoutDelay);
    e.push({ request: n, timeoutTimer: t });
  }
  flushPendingRequests(n) {
    const e = this.pendingRequests.get(n);
    if (e) {
      for (const t of e) switch (t.timeoutTimer.dispose(), t.request.type) {
        case 100:
          this.onPromise(t.request);
          break;
        case 102:
          this.onEventListen(t.request);
          break;
      }
      this.pendingRequests.delete(n);
    }
  }
  dispose() {
    this.protocolListener.dispose(), dispose(this.activeRequests.values()), this.activeRequests.clear();
    for (const n of this.pendingRequests.values()) dispose(n.map((e) => e.timeoutTimer));
    this.pendingRequests.clear();
  }
}, ChannelClient = class {
  constructor(n, e = null) {
    this.protocol = n, this.isDisposed = false, this.state = 0, this.activeRequests = new DisposableStore(), this.handlers = /* @__PURE__ */ new Map(), this.lastRequestId = 0, this.protocolListener = new MutableDisposable(), this._pendingRPCDetails = /* @__PURE__ */ new Map(), this._onDidInitialize = new Emitter(), this.onDidInitialize = this._onDidInitialize.event, this.initializeListener = new DisposableStore(), this.protocolListener.value = this.protocol.onMessage((t) => this.onBuffer(t)), this.logger = e;
  }
  getChannel(n) {
    const e = this;
    return { call(t, a, s) {
      return e.isDisposed ? Promise.reject(new CancellationError()) : e.requestPromise(n, t, a, s);
    }, listen(t, a) {
      return e.isDisposed ? Event.None : e.requestEvent(n, t, a);
    } };
  }
  requestPromise(n, e, t, a = CancellationToken.None) {
    const s = this.lastRequestId++, o = { id: s, type: 100, channelName: n, name: e, arg: t };
    if (a.isCancellationRequested) return Promise.reject(new CancellationError());
    let i, l;
    return new Promise((u, m) => {
      if (a.isCancellationRequested) return m(new CancellationError());
      const d = () => {
        const y = (b) => {
          switch (b.type) {
            case 201:
              this.handlers.delete(s), this._pendingRPCDetails.delete(s), u(b.data);
              break;
            case 202: {
              this.handlers.delete(s), this._pendingRPCDetails.delete(s);
              const R = new Error(b.data.message);
              R.stack = Array.isArray(b.data.stack) ? b.data.stack.join(`
`) : b.data.stack, R.name = b.data.name, m(R);
              break;
            }
            case 203:
              this.handlers.delete(s), this._pendingRPCDetails.delete(s), m(b.data);
              break;
          }
        };
        this.handlers.set(s, y), this._pendingRPCDetails.set(s, { channelName: n, command: e });
        try {
          this.sendRequest(o);
        } catch (b) {
          this.handlers.delete(s), this._pendingRPCDetails.delete(s), m(b);
        }
      };
      let g = null;
      this.state === 1 ? d() : (g = createCancelablePromise((y) => this.whenInitialized()), g.then(() => {
        g = null, d();
      }, () => {
      }));
      const k = () => {
        g ? (g.cancel(), g = null) : this.sendRequest({ id: s, type: 101 }), m(new CancellationError());
      };
      i = a.onCancellationRequested(k), l = { dispose: createSingleCallFunction(() => {
        k(), i.dispose();
      }) }, this.activeRequests.add(l);
    }).finally(() => {
      i?.dispose(), this.activeRequests.deleteAndLeak(l), markAsSingleton(l);
    });
  }
  requestEvent(n, e, t) {
    const a = this.lastRequestId++, r = { id: a, type: 102, channelName: n, name: e, arg: t };
    let o = null;
    const i = new Emitter({ onWillAddFirstListener: () => {
      if (this.isDisposed) return;
      const l = (u) => i.fire(u.data);
      this.handlers.set(a, l);
      const c = () => {
        this.activeRequests.add(i), this._pendingRPCDetails.set(a, { channelName: n, command: e }), this.sendRequest(r);
      };
      this.state === 1 ? c() : (o = createCancelablePromise((u) => this.whenInitialized()), o.then(() => {
        o = null, c();
      }, () => {
      }));
    }, onDidRemoveLastListener: () => {
      const l = this.handlers.delete(a);
      o ? (o.cancel(), o = null) : l && (this.activeRequests.deleteAndLeak(i), markAsSingleton(i), this._pendingRPCDetails.delete(a), this.sendRequest({ id: a, type: 103 }));
    } });
    return i.event;
  }
  sendRequest(n) {
    switch (n.type) {
      case 100:
      case 102: {
        const e = this.send([n.type, n.id, n.channelName, n.name], n.arg);
        this.logger?.logOutgoing(e, n.id, 0, `${requestTypeToStr(n.type)}: ${n.channelName}.${n.name}`, n.arg);
        return;
      }
      case 101:
      case 103: {
        const e = this.send([n.type, n.id]);
        this.logger?.logOutgoing(e, n.id, 0, requestTypeToStr(n.type));
        return;
      }
    }
  }
  send(n, e = void 0) {
    const t = new BufferWriter();
    try {
      return serialize(t, n), serialize(t, e), this.sendBuffer(t.buffer);
    } finally {
      t.dispose();
    }
  }
  sendBuffer(n) {
    try {
      return this.protocol.send(n), n.byteLength;
    } catch {
      return 0;
    }
  }
  onBuffer(n) {
    const e = new BufferReader(n), t = _slowIPCDeserializeEnabled, a = t ? performance.now() : 0, s = deserialize(e), r = s[0];
    if (r !== 200 && r !== 201 && r !== 202 && r !== 203 && r !== 204) return;
    const o = deserialize(e);
    if (t) {
      const i = performance.now() - a;
      if (i > IPC_SLOW_DESERIALIZE_THRESHOLD_MS) {
        const l = s[1] ?? 0, c = this._pendingRPCDetails.get(l);
        _slowIPCDeserializeHandler?.({ durationMs: i, byteLength: n.byteLength, requestId: l, channelName: c?.channelName, command: c?.command, messageType: responseTypeToStr(r) });
      }
    }
    switch (r) {
      case 200:
        return this.logger?.logIncoming(n.byteLength, 0, 0, responseTypeToStr(r)), this.onResponse({ type: s[0] });
      case 201:
      case 202:
      case 204:
      case 203:
        return this.logger?.logIncoming(n.byteLength, s[1], 0, responseTypeToStr(r), o), this.onResponse({ type: s[0], id: s[1], data: o });
    }
  }
  onResponse(n) {
    if (n.type === 200) {
      this.state = 1, this._onDidInitialize.fire();
      return;
    }
    this.handlers.get(n.id)?.(n);
  }
  get onDidInitializePromise() {
    return Event.toPromise(this.onDidInitialize, this.initializeListener);
  }
  whenInitialized() {
    return this.state === 1 ? Promise.resolve() : this.onDidInitializePromise;
  }
  dispose() {
    this.isDisposed = true, this.protocolListener.dispose(), this.activeRequests.dispose(), this._pendingRPCDetails.clear(), this.handlers.clear(), this.initializeListener.dispose(), this._onDidInitialize.dispose();
  }
};
__decorate([memoize], ChannelClient.prototype, "onDidInitializePromise", null);
var IPCClient = class {
  constructor(n, e, t = null) {
    const a = new BufferWriter();
    try {
      serialize(a, e), n.send(a.buffer);
    } finally {
      a.dispose();
    }
    this.channelClient = new ChannelClient(n, t), this.channelServer = new ChannelServer(n, e, t);
  }
  getChannel(n) {
    return this.channelClient.getChannel(n);
  }
  registerChannel(n, e) {
    this.channelServer.registerChannel(n, e);
  }
  dispose() {
    this.channelClient.dispose(), this.channelServer.dispose();
  }
}, ProxyChannel;
((n) => {
  const e = () => {
  };
  function t(o, i, l) {
    const c = o, u = l && l.disableMarshalling, m = (g) => {
      const k = c[g];
      return l?.disableEventBuffering ? k : Event.buffer(k, true, void 0, i);
    }, d = /* @__PURE__ */ new Map();
    for (const g in c) s(g) && d.set(g, m(g));
    return new class {
      listen(g, k, y) {
        const b = d.get(k);
        if (b) return b;
        const R = c[k];
        if (typeof R == "function") {
          if (r(k)) return R.call(c, y);
          if (s(k)) return d.set(k, m(k)), d.get(k);
        }
        throw new ErrorNoTelemetry(`Event not found: ${k}`);
      }
      call(g, k, y) {
        const b = c[k];
        if (typeof b == "function") {
          if (!u && Array.isArray(y)) for (let I = 0; I < y.length; I++) y[I] = revive(y[I]);
          let R = b.apply(c, y);
          return R instanceof Promise || (R = Promise.resolve(R)), R;
        }
        throw new ErrorNoTelemetry(`Method not found: ${k}`);
      }
    }();
  }
  n.fromService = t;
  function a(o, i) {
    const l = i && i.disableMarshalling;
    return new Proxy({}, { get(c, u) {
      if (typeof u != "symbol") {
        if (typeof u == "string") return i?.properties?.has(u) ? i.properties.get(u) : u === "dispose" ? e : r(u) ? function(m) {
          return o.listen(u, m);
        } : s(u) ? o.listen(u) : async function(...m) {
          let d;
          i && !isUndefinedOrNull(i.context) ? d = [i.context, ...m] : d = m;
          const g = await o.call(u, d);
          return l ? g : revive(g);
        };
        throw new ErrorNoTelemetry(`Property not found: ${String(u)}`);
      }
    } });
  }
  n.toService = a;
  function s(o) {
    return o[0] === "o" && o[1] === "n" && isUpperAsciiLetter(o.charCodeAt(2));
  }
  function r(o) {
    return /^onDynamic/.test(o) && isUpperAsciiLetter(o.charCodeAt(9));
  }
})(ProxyChannel || (ProxyChannel = {}));
var Protocol = class {
  constructor(n) {
    this.port = n;
    const e = Event.fromDOMEventEmitter(this.port, "message", (t) => t.data ? VSBuffer.wrap(t.data) : VSBuffer.alloc(0));
    this.onMessage = Event.filter(e, (t) => t.byteLength > 0), n.start();
  }
  send(n) {
    this.port.postMessage(n.buffer);
  }
  disconnect() {
    this.port.close();
  }
}, Client = class extends IPCClient {
  constructor(n, e) {
    const t = new Protocol(n);
    super(t, e), this.protocol = t;
  }
  dispose() {
    this.protocol.disconnect(), super.dispose();
  }
}, Client2 = class extends Client {
  constructor(n, e) {
    super(n, e);
  }
}, ConversationSearchProcessChannels = { search: "conversationSearch.search" }, MAX_CONVERSATION_BODY_BYTES = 256 * 1024, MAX_CLOUD_CACHE_BODY_PAYLOAD_BYTES = 512 * 1024, MAX_CLOUD_CACHE_RECORDS_PER_COMMAND = 100;
function cloudCacheBodyEnvelopeByteLength(n) {
  return VSBuffer.fromString(JSON.stringify(n)).byteLength;
}
var CONVERSATION_SEARCH_RESTART_WINDOW_MS = 600 * 1e3;
function assert2(n, e) {
  if (!n) throw new Error(e);
}
var FLOAT32_MAX = 34028234663852886e22, FLOAT32_MIN = -34028234663852886e22, UINT32_MAX = 4294967295, INT32_MAX = 2147483647, INT32_MIN = -2147483648;
function assertInt32(n) {
  if (typeof n != "number") throw new Error("invalid int 32: " + typeof n);
  if (!Number.isInteger(n) || n > INT32_MAX || n < INT32_MIN) throw new Error("invalid int 32: " + n);
}
function assertUInt32(n) {
  if (typeof n != "number") throw new Error("invalid uint 32: " + typeof n);
  if (!Number.isInteger(n) || n > UINT32_MAX || n < 0) throw new Error("invalid uint 32: " + n);
}
function assertFloat32(n) {
  if (typeof n != "number") throw new Error("invalid float 32: " + typeof n);
  if (Number.isFinite(n) && (n > FLOAT32_MAX || n < FLOAT32_MIN)) throw new Error("invalid float 32: " + n);
}
var enumTypeSymbol = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
function getEnumType(n) {
  const e = n[enumTypeSymbol];
  return assert2(e, "missing enum type on enum object"), e;
}
function setEnumType(n, e, t, a) {
  n[enumTypeSymbol] = makeEnumType(e, t.map((s) => ({ no: s.no, name: s.name, localName: n[s.no] })), a);
}
function makeEnumType(n, e, t) {
  const a = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null), r = [];
  for (const o of e) {
    const i = normalizeEnumValue(o);
    r.push(i), a[o.name] = i, s[o.no] = i;
  }
  return { typeName: n, values: r, findName(o) {
    return a[o];
  }, findNumber(o) {
    return s[o];
  } };
}
function makeEnum(n, e, t) {
  const a = {};
  for (const s of e) {
    const r = normalizeEnumValue(s);
    a[r.localName] = r.no, a[r.no] = r.localName;
  }
  return setEnumType(a, n, e, t), a;
}
function normalizeEnumValue(n) {
  return "localName" in n ? n : { ...n, localName: n.name };
}
var Message = class {
  equals(n) {
    return this.getType().runtime.util.equals(this.getType(), this, n);
  }
  clone() {
    return this.getType().runtime.util.clone(this);
  }
  fromBinary(n, e) {
    const t = this.getType(), a = t.runtime.bin, s = a.makeReadOptions(e);
    return a.readMessage(this, s.readerFactory(n), n.byteLength, s), this;
  }
  fromJson(n, e) {
    const t = this.getType(), a = t.runtime.json, s = a.makeReadOptions(e);
    return a.readMessage(t, n, s, this), this;
  }
  fromJsonString(n, e) {
    let t;
    try {
      t = JSON.parse(n);
    } catch (a) {
      throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${a instanceof Error ? a.message : String(a)}`);
    }
    return this.fromJson(t, e);
  }
  toBinary(n) {
    const e = this.getType(), t = e.runtime.bin, a = t.makeWriteOptions(n), s = a.writerFactory();
    return t.writeMessage(this, s, a), s.finish();
  }
  toJson(n) {
    const e = this.getType(), t = e.runtime.json, a = t.makeWriteOptions(n);
    return t.writeMessage(this, a);
  }
  toJsonString(n) {
    const e = this.toJson(n);
    return JSON.stringify(e, null, n?.prettySpaces ?? 0);
  }
  toJSON() {
    return this.toJson({ emitDefaultValues: true });
  }
  getType() {
    return Object.getPrototypeOf(this).constructor;
  }
};
function makeMessageType(n, e, t, a) {
  const s = a?.localName ?? e.substring(e.lastIndexOf(".") + 1), r = { [s]: function(o) {
    n.util.initFields(this), n.util.initPartial(o, this);
  } }[s];
  return Object.setPrototypeOf(r.prototype, new Message()), Object.assign(r, { runtime: n, typeName: e, fields: n.util.newFieldList(t), fromBinary(o, i) {
    return new r().fromBinary(o, i);
  }, fromJson(o, i) {
    return new r().fromJson(o, i);
  }, fromJsonString(o, i) {
    return new r().fromJsonString(o, i);
  }, equals(o, i) {
    return n.util.equals(r, o, i);
  } }), r;
}
function varint64read() {
  let n = 0, e = 0;
  for (let a = 0; a < 28; a += 7) {
    let s = this.buf[this.pos++];
    if (n |= (s & 127) << a, (s & 128) == 0) return this.assertBounds(), [n, e];
  }
  let t = this.buf[this.pos++];
  if (n |= (t & 15) << 28, e = (t & 112) >> 4, (t & 128) == 0) return this.assertBounds(), [n, e];
  for (let a = 3; a <= 31; a += 7) {
    let s = this.buf[this.pos++];
    if (e |= (s & 127) << a, (s & 128) == 0) return this.assertBounds(), [n, e];
  }
  throw new Error("invalid varint");
}
function varint64write(n, e, t) {
  for (let r = 0; r < 28; r = r + 7) {
    const o = n >>> r, i = !(!(o >>> 7) && e == 0), l = (i ? o | 128 : o) & 255;
    if (t.push(l), !i) return;
  }
  const a = n >>> 28 & 15 | (e & 7) << 4, s = e >> 3 != 0;
  if (t.push((s ? a | 128 : a) & 255), !!s) {
    for (let r = 3; r < 31; r = r + 7) {
      const o = e >>> r, i = !!(o >>> 7), l = (i ? o | 128 : o) & 255;
      if (t.push(l), !i) return;
    }
    t.push(e >>> 31 & 1);
  }
}
var TWO_PWR_32_DBL = 4294967296;
function int64FromString(n) {
  const e = n[0] === "-";
  e && (n = n.slice(1));
  const t = 1e6;
  let a = 0, s = 0;
  function r(o, i) {
    const l = Number(n.slice(o, i));
    s *= t, a = a * t + l, a >= TWO_PWR_32_DBL && (s = s + (a / TWO_PWR_32_DBL | 0), a = a % TWO_PWR_32_DBL);
  }
  return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), e ? negate(a, s) : newBits(a, s);
}
function int64ToString(n, e) {
  let t = newBits(n, e);
  const a = t.hi & 2147483648;
  a && (t = negate(t.lo, t.hi));
  const s = uInt64ToString(t.lo, t.hi);
  return a ? "-" + s : s;
}
function uInt64ToString(n, e) {
  if ({ lo: n, hi: e } = toUnsigned(n, e), e <= 2097151) return String(TWO_PWR_32_DBL * e + n);
  const t = n & 16777215, a = (n >>> 24 | e << 8) & 16777215, s = e >> 16 & 65535;
  let r = t + a * 6777216 + s * 6710656, o = a + s * 8147497, i = s * 2;
  const l = 1e7;
  return r >= l && (o += Math.floor(r / l), r %= l), o >= l && (i += Math.floor(o / l), o %= l), i.toString() + decimalFrom1e7WithLeadingZeros(o) + decimalFrom1e7WithLeadingZeros(r);
}
function toUnsigned(n, e) {
  return { lo: n >>> 0, hi: e >>> 0 };
}
function newBits(n, e) {
  return { lo: n | 0, hi: e | 0 };
}
function negate(n, e) {
  return e = ~e, n ? n = ~n + 1 : e += 1, newBits(n, e);
}
var decimalFrom1e7WithLeadingZeros = (n) => {
  const e = String(n);
  return "0000000".slice(e.length) + e;
};
function varint32write(n, e) {
  if (n >= 0) {
    for (; n > 127; ) e.push(n & 127 | 128), n = n >>> 7;
    e.push(n);
  } else {
    for (let t = 0; t < 9; t++) e.push(n & 127 | 128), n = n >> 7;
    e.push(1);
  }
}
function varint32read() {
  let n = this.buf[this.pos++], e = n & 127;
  if ((n & 128) == 0) return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 7, (n & 128) == 0) return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 14, (n & 128) == 0) return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 21, (n & 128) == 0) return this.assertBounds(), e;
  n = this.buf[this.pos++], e |= (n & 15) << 28;
  for (let t = 5; (n & 128) !== 0 && t < 10; t++) n = this.buf[this.pos++];
  if ((n & 128) != 0) throw new Error("invalid varint");
  return this.assertBounds(), e >>> 0;
}
function makeInt64Support() {
  const n = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof n.getBigInt64 == "function" && typeof n.getBigUint64 == "function" && typeof n.setBigInt64 == "function" && typeof n.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
    const s = BigInt("-9223372036854775808"), r = BigInt("9223372036854775807"), o = BigInt("0"), i = BigInt("18446744073709551615");
    return { zero: BigInt(0), supported: true, parse(l) {
      const c = typeof l == "bigint" ? l : BigInt(l);
      if (c > r || c < s) throw new Error(`int64 invalid: ${l}`);
      return c;
    }, uParse(l) {
      const c = typeof l == "bigint" ? l : BigInt(l);
      if (c > i || c < o) throw new Error(`uint64 invalid: ${l}`);
      return c;
    }, enc(l) {
      return n.setBigInt64(0, this.parse(l), true), { lo: n.getInt32(0, true), hi: n.getInt32(4, true) };
    }, uEnc(l) {
      return n.setBigInt64(0, this.uParse(l), true), { lo: n.getInt32(0, true), hi: n.getInt32(4, true) };
    }, dec(l, c) {
      return n.setInt32(0, l, true), n.setInt32(4, c, true), n.getBigInt64(0, true);
    }, uDec(l, c) {
      return n.setInt32(0, l, true), n.setInt32(4, c, true), n.getBigUint64(0, true);
    } };
  }
  const t = (s) => assert2(/^-?[0-9]+$/.test(s), `int64 invalid: ${s}`), a = (s) => assert2(/^[0-9]+$/.test(s), `uint64 invalid: ${s}`);
  return { zero: "0", supported: false, parse(s) {
    return typeof s != "string" && (s = s.toString()), t(s), s;
  }, uParse(s) {
    return typeof s != "string" && (s = s.toString()), a(s), s;
  }, enc(s) {
    return typeof s != "string" && (s = s.toString()), t(s), int64FromString(s);
  }, uEnc(s) {
    return typeof s != "string" && (s = s.toString()), a(s), int64FromString(s);
  }, dec(s, r) {
    return int64ToString(s, r);
  }, uDec(s, r) {
    return uInt64ToString(s, r);
  } };
}
var protoInt64 = makeInt64Support(), ScalarType = ((n) => (n[n.DOUBLE = 1] = "DOUBLE", n[n.FLOAT = 2] = "FLOAT", n[n.INT64 = 3] = "INT64", n[n.UINT64 = 4] = "UINT64", n[n.INT32 = 5] = "INT32", n[n.FIXED64 = 6] = "FIXED64", n[n.FIXED32 = 7] = "FIXED32", n[n.BOOL = 8] = "BOOL", n[n.STRING = 9] = "STRING", n[n.BYTES = 12] = "BYTES", n[n.UINT32 = 13] = "UINT32", n[n.SFIXED32 = 15] = "SFIXED32", n[n.SFIXED64 = 16] = "SFIXED64", n[n.SINT32 = 17] = "SINT32", n[n.SINT64 = 18] = "SINT64", n))(ScalarType || {}), LongType = ((n) => (n[n.BIGINT = 0] = "BIGINT", n[n.STRING = 1] = "STRING", n))(LongType || {});
function scalarEquals(n, e, t) {
  if (e === t) return true;
  if (n == ScalarType.BYTES) {
    if (!(e instanceof Uint8Array) || !(t instanceof Uint8Array) || e.length !== t.length) return false;
    for (let a = 0; a < e.length; a++) if (e[a] !== t[a]) return false;
    return true;
  }
  switch (n) {
    case ScalarType.UINT64:
    case ScalarType.FIXED64:
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      return e == t;
  }
  return false;
}
function scalarZeroValue(n, e) {
  switch (n) {
    case ScalarType.BOOL:
      return false;
    case ScalarType.UINT64:
    case ScalarType.FIXED64:
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      return e == 0 ? protoInt64.zero : "0";
    case ScalarType.DOUBLE:
    case ScalarType.FLOAT:
      return 0;
    case ScalarType.BYTES:
      return new Uint8Array(0);
    case ScalarType.STRING:
      return "";
    default:
      return 0;
  }
}
function isScalarZeroValue(n, e) {
  switch (n) {
    case ScalarType.BOOL:
      return e === false;
    case ScalarType.STRING:
      return e === "";
    case ScalarType.BYTES:
      return e instanceof Uint8Array && !e.byteLength;
    default:
      return e == 0;
  }
}
function makeExtension(n, e, t, a) {
  let s;
  return { typeName: e, extendee: t, get field() {
    if (!s) {
      const r = typeof a == "function" ? a() : a;
      r.name = e.split(".").pop(), r.jsonName = `[${e}]`, s = n.util.newFieldList([r]).list()[0];
    }
    return s;
  }, runtime: n };
}
function createExtensionContainer(n) {
  const e = n.field.localName, t = /* @__PURE__ */ Object.create(null);
  return t[e] = initExtensionField(n), [t, () => t[e]];
}
function initExtensionField(n) {
  const e = n.field;
  if (e.repeated) return [];
  if (e.default !== void 0) return e.default;
  switch (e.kind) {
    case "enum":
      return e.T.values[0].no;
    case "scalar":
      return scalarZeroValue(e.T, e.L);
    case "message":
      const t = e.T, a = new t();
      return t.fieldWrapper ? t.fieldWrapper.unwrapField(a) : a;
    case "map":
      throw "map fields are not allowed to be extensions";
  }
}
function filterUnknownFields(n, e) {
  if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
    for (let t = n.length - 1; t >= 0; --t) if (n[t].no == e.no) return [n[t]];
    return [];
  }
  return n.filter((t) => t.no === e.no);
}
var encTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), decTable = [];
for (let n = 0; n < encTable.length; n++) decTable[encTable[n].charCodeAt(0)] = n;
decTable[45] = encTable.indexOf("+"), decTable[95] = encTable.indexOf("/");
var protoBase64 = { dec(n) {
  let e = n.length * 3 / 4;
  n[n.length - 2] == "=" ? e -= 2 : n[n.length - 1] == "=" && (e -= 1);
  let t = new Uint8Array(e), a = 0, s = 0, r, o = 0;
  for (let i = 0; i < n.length; i++) {
    if (r = decTable[n.charCodeAt(i)], r === void 0) switch (n[i]) {
      case "=":
        s = 0;
      case `
`:
      case "\r":
      case "	":
      case " ":
        continue;
      default:
        throw Error("invalid base64 string.");
    }
    switch (s) {
      case 0:
        o = r, s = 1;
        break;
      case 1:
        t[a++] = o << 2 | (r & 48) >> 4, o = r, s = 2;
        break;
      case 2:
        t[a++] = (o & 15) << 4 | (r & 60) >> 2, o = r, s = 3;
        break;
      case 3:
        t[a++] = (o & 3) << 6 | r, s = 0;
        break;
    }
  }
  if (s == 1) throw Error("invalid base64 string.");
  return t.subarray(0, a);
}, enc(n) {
  let e = "", t = 0, a, s = 0;
  for (let r = 0; r < n.length; r++) switch (a = n[r], t) {
    case 0:
      e += encTable[a >> 2], s = (a & 3) << 4, t = 1;
      break;
    case 1:
      e += encTable[s | a >> 4], s = (a & 15) << 2, t = 2;
      break;
    case 2:
      e += encTable[s | a >> 6], e += encTable[a & 63], t = 0;
      break;
  }
  return t && (e += encTable[s], e += "=", t == 1 && (e += "=")), e;
} };
function getExtension(n, e, t) {
  assertExtendee(e, n);
  const a = e.runtime.bin.makeReadOptions(t), s = filterUnknownFields(n.getType().runtime.bin.listUnknownFields(n), e.field), [r, o] = createExtensionContainer(e);
  for (const i of s) e.runtime.bin.readField(r, a.readerFactory(i.data), e.field, i.wireType, a);
  return o();
}
function setExtension(n, e, t, a) {
  assertExtendee(e, n);
  const s = e.runtime.bin.makeReadOptions(a), r = e.runtime.bin.makeWriteOptions(a);
  if (hasExtension(n, e)) {
    const c = n.getType().runtime.bin.listUnknownFields(n).filter((u) => u.no != e.field.no);
    n.getType().runtime.bin.discardUnknownFields(n);
    for (const u of c) n.getType().runtime.bin.onUnknownField(n, u.no, u.wireType, u.data);
  }
  const o = r.writerFactory();
  let i = e.field;
  !i.opt && !i.repeated && (i.kind == "enum" || i.kind == "scalar") && (i = { ...e.field, opt: true }), e.runtime.bin.writeField(i, t, o, r);
  const l = s.readerFactory(o.finish());
  for (; l.pos < l.len; ) {
    const [c, u] = l.tag(), m = l.skip(u, c);
    n.getType().runtime.bin.onUnknownField(n, c, u, m);
  }
}
function hasExtension(n, e) {
  const t = n.getType();
  return e.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(n).find((a) => a.no == e.field.no);
}
function assertExtendee(n, e) {
  assert2(n.extendee.typeName == e.getType().typeName, `extension ${n.typeName} can only be applied to message ${n.extendee.typeName}`);
}
function isFieldSet(n, e) {
  const t = n.localName;
  if (n.repeated) return e[t].length > 0;
  if (n.oneof) return e[n.oneof.localName].case === t;
  switch (n.kind) {
    case "enum":
    case "scalar":
      return n.opt || n.req ? e[t] !== void 0 : n.kind == "enum" ? e[t] !== n.T.values[0].no : !isScalarZeroValue(n.T, e[t]);
    case "message":
      return e[t] !== void 0;
    case "map":
      return Object.keys(e[t]).length > 0;
  }
}
function clearField(n, e) {
  const t = n.localName, a = !n.opt && !n.req;
  if (n.repeated) e[t] = [];
  else if (n.oneof) e[n.oneof.localName] = { case: void 0 };
  else switch (n.kind) {
    case "map":
      e[t] = {};
      break;
    case "enum":
      e[t] = a ? n.T.values[0].no : void 0;
      break;
    case "scalar":
      e[t] = a ? scalarZeroValue(n.T, n.L) : void 0;
      break;
    case "message":
      e[t] = void 0;
      break;
  }
}
function isMessage(n, e) {
  if (n === null || typeof n != "object" || !Object.getOwnPropertyNames(Message.prototype).every((a) => a in n && typeof n[a] == "function")) return false;
  const t = n.getType();
  return t === null || typeof t != "function" || !("typeName" in t) || typeof t.typeName != "string" ? false : e === void 0 ? true : t.typeName == e.typeName;
}
function wrapField(n, e) {
  const t = isMessage(e);
  return !t && !n.fieldWrapper ? new n(e) : t || !n.fieldWrapper ? e : n.fieldWrapper.wrapField(e);
}
var wktWrapperToScalarType = { "google.protobuf.DoubleValue": ScalarType.DOUBLE, "google.protobuf.FloatValue": ScalarType.FLOAT, "google.protobuf.Int64Value": ScalarType.INT64, "google.protobuf.UInt64Value": ScalarType.UINT64, "google.protobuf.Int32Value": ScalarType.INT32, "google.protobuf.UInt32Value": ScalarType.UINT32, "google.protobuf.BoolValue": ScalarType.BOOL, "google.protobuf.StringValue": ScalarType.STRING, "google.protobuf.BytesValue": ScalarType.BYTES }, jsonReadDefaults = { ignoreUnknownFields: false }, jsonWriteDefaults = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
function makeReadOptions(n) {
  return n ? { ...jsonReadDefaults, ...n } : jsonReadDefaults;
}
function makeWriteOptions(n) {
  return n ? { ...jsonWriteDefaults, ...n } : jsonWriteDefaults;
}
var tokenNull = /* @__PURE__ */ Symbol(), tokenIgnoredUnknownEnum = /* @__PURE__ */ Symbol();
function makeJsonFormat() {
  return { makeReadOptions, makeWriteOptions, readMessage(n, e, t, a) {
    if (e == null || Array.isArray(e) || typeof e != "object") throw new Error(`cannot decode message ${n.typeName} from JSON: ${debugJsonValue(e)}`);
    a = a ?? new n();
    const s = /* @__PURE__ */ new Map(), r = t.typeRegistry;
    for (const [o, i] of Object.entries(e)) {
      const l = n.fields.findJsonName(o);
      if (l) {
        if (l.oneof) {
          if (i === null && l.kind == "scalar") continue;
          const c = s.get(l.oneof);
          if (c !== void 0) throw new Error(`cannot decode message ${n.typeName} from JSON: multiple keys for oneof "${l.oneof.name}" present: "${c}", "${o}"`);
          s.set(l.oneof, o);
        }
        readField(a, i, l, t, n);
      } else {
        let c = false;
        if (r?.findExtension && o.startsWith("[") && o.endsWith("]")) {
          const u = r.findExtension(o.substring(1, o.length - 1));
          if (u && u.extendee.typeName == n.typeName) {
            c = true;
            const [m, d] = createExtensionContainer(u);
            readField(m, i, u.field, t, u), setExtension(a, u, d(), t);
          }
        }
        if (!c && !t.ignoreUnknownFields) throw new Error(`cannot decode message ${n.typeName} from JSON: key "${o}" is unknown`);
      }
    }
    return a;
  }, writeMessage(n, e) {
    const t = n.getType(), a = {};
    let s;
    try {
      for (s of t.fields.byNumber()) {
        if (!isFieldSet(s, n)) {
          if (s.req) throw "required field not set";
          if (!e.emitDefaultValues || !canEmitFieldDefaultValue(s)) continue;
        }
        const o = s.oneof ? n[s.oneof.localName].value : n[s.localName], i = writeField(s, o, e);
        i !== void 0 && (a[e.useProtoFieldName ? s.name : s.jsonName] = i);
      }
      const r = e.typeRegistry;
      if (r?.findExtensionFor) for (const o of t.runtime.bin.listUnknownFields(n)) {
        const i = r.findExtensionFor(t.typeName, o.no);
        if (i && hasExtension(n, i)) {
          const l = getExtension(n, i, e), c = writeField(i.field, l, e);
          c !== void 0 && (a[i.field.jsonName] = c);
        }
      }
    } catch (r) {
      const o = s ? `cannot encode field ${t.typeName}.${s.name} to JSON` : `cannot encode message ${t.typeName} to JSON`, i = r instanceof Error ? r.message : String(r);
      throw new Error(o + (i.length > 0 ? `: ${i}` : ""));
    }
    return a;
  }, readScalar(n, e, t) {
    return readScalar(n, e, t ?? LongType.BIGINT, true);
  }, writeScalar(n, e, t) {
    if (e !== void 0 && (t || isScalarZeroValue(n, e))) return writeScalar(n, e);
  }, debug: debugJsonValue };
}
function debugJsonValue(n) {
  if (n === null) return "null";
  switch (typeof n) {
    case "object":
      return Array.isArray(n) ? "array" : "object";
    case "string":
      return n.length > 100 ? "string" : `"${n.split('"').join('\\"')}"`;
    default:
      return String(n);
  }
}
function readField(n, e, t, a, s) {
  let r = t.localName;
  if (t.repeated) {
    if (assert2(t.kind != "map"), e === null) return;
    if (!Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: ${debugJsonValue(e)}`);
    const o = n[r];
    for (const i of e) {
      if (i === null) throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: ${debugJsonValue(i)}`);
      switch (t.kind) {
        case "message":
          o.push(t.T.fromJson(i, a));
          break;
        case "enum":
          const l = readEnum(t.T, i, a.ignoreUnknownFields, true);
          l !== tokenIgnoredUnknownEnum && o.push(l);
          break;
        case "scalar":
          try {
            o.push(readScalar(t.T, i, t.L, true));
          } catch (c) {
            let u = `cannot decode field ${s.typeName}.${t.name} from JSON: ${debugJsonValue(i)}`;
            throw c instanceof Error && c.message.length > 0 && (u += `: ${c.message}`), new Error(u);
          }
          break;
      }
    }
  } else if (t.kind == "map") {
    if (e === null) return;
    if (typeof e != "object" || Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: ${debugJsonValue(e)}`);
    const o = n[r];
    for (const [i, l] of Object.entries(e)) {
      if (l === null) throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: map value null`);
      let c;
      try {
        c = readMapKey(t.K, i);
      } catch (u) {
        let m = `cannot decode map key for field ${s.typeName}.${t.name} from JSON: ${debugJsonValue(e)}`;
        throw u instanceof Error && u.message.length > 0 && (m += `: ${u.message}`), new Error(m);
      }
      switch (t.V.kind) {
        case "message":
          o[c] = t.V.T.fromJson(l, a);
          break;
        case "enum":
          const u = readEnum(t.V.T, l, a.ignoreUnknownFields, true);
          u !== tokenIgnoredUnknownEnum && (o[c] = u);
          break;
        case "scalar":
          try {
            o[c] = readScalar(t.V.T, l, LongType.BIGINT, true);
          } catch (m) {
            let d = `cannot decode map value for field ${s.typeName}.${t.name} from JSON: ${debugJsonValue(e)}`;
            throw m instanceof Error && m.message.length > 0 && (d += `: ${m.message}`), new Error(d);
          }
          break;
      }
    }
  } else switch (t.oneof && (n = n[t.oneof.localName] = { case: r }, r = "value"), t.kind) {
    case "message":
      const o = t.T;
      if (e === null && o.typeName != "google.protobuf.Value") return;
      let i = n[r];
      isMessage(i) ? i.fromJson(e, a) : (n[r] = i = o.fromJson(e, a), o.fieldWrapper && !t.oneof && (n[r] = o.fieldWrapper.unwrapField(i)));
      break;
    case "enum":
      const l = readEnum(t.T, e, a.ignoreUnknownFields, false);
      switch (l) {
        case tokenNull:
          clearField(t, n);
          break;
        case tokenIgnoredUnknownEnum:
          break;
        default:
          n[r] = l;
          break;
      }
      break;
    case "scalar":
      try {
        const c = readScalar(t.T, e, t.L, false);
        switch (c) {
          case tokenNull:
            clearField(t, n);
            break;
          default:
            n[r] = c;
            break;
        }
      } catch (c) {
        let u = `cannot decode field ${s.typeName}.${t.name} from JSON: ${debugJsonValue(e)}`;
        throw c instanceof Error && c.message.length > 0 && (u += `: ${c.message}`), new Error(u);
      }
      break;
  }
}
function readMapKey(n, e) {
  if (n === ScalarType.BOOL) switch (e) {
    case "true":
      e = true;
      break;
    case "false":
      e = false;
      break;
  }
  return readScalar(n, e, LongType.BIGINT, true).toString();
}
function readScalar(n, e, t, a) {
  if (e === null) return a ? scalarZeroValue(n, t) : tokenNull;
  switch (n) {
    case ScalarType.DOUBLE:
    case ScalarType.FLOAT:
      if (e === "NaN") return Number.NaN;
      if (e === "Infinity") return Number.POSITIVE_INFINITY;
      if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
      if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number") break;
      const s = Number(e);
      if (Number.isNaN(s) || !Number.isFinite(s)) break;
      return n == ScalarType.FLOAT && assertFloat32(s), s;
    case ScalarType.INT32:
    case ScalarType.FIXED32:
    case ScalarType.SFIXED32:
    case ScalarType.SINT32:
    case ScalarType.UINT32:
      let r;
      if (typeof e == "number" ? r = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (r = Number(e)), r === void 0) break;
      return n == ScalarType.UINT32 || n == ScalarType.FIXED32 ? assertUInt32(r) : assertInt32(r), r;
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const o = protoInt64.parse(e);
      return t ? o.toString() : o;
    case ScalarType.FIXED64:
    case ScalarType.UINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const i = protoInt64.uParse(e);
      return t ? i.toString() : i;
    case ScalarType.BOOL:
      if (typeof e != "boolean") break;
      return e;
    case ScalarType.STRING:
      if (typeof e != "string") break;
      try {
        encodeURIComponent(e);
      } catch {
        throw new Error("invalid UTF8");
      }
      return e;
    case ScalarType.BYTES:
      if (e === "") return new Uint8Array(0);
      if (typeof e != "string") break;
      return protoBase64.dec(e);
  }
  throw new Error();
}
function readEnum(n, e, t, a) {
  if (e === null) return n.typeName == "google.protobuf.NullValue" ? 0 : a ? n.values[0].no : tokenNull;
  switch (typeof e) {
    case "number":
      if (Number.isInteger(e)) return e;
      break;
    case "string":
      const s = n.findName(e);
      if (s !== void 0) return s.no;
      if (t) return tokenIgnoredUnknownEnum;
      break;
  }
  throw new Error(`cannot decode enum ${n.typeName} from JSON: ${debugJsonValue(e)}`);
}
function canEmitFieldDefaultValue(n) {
  return n.repeated || n.kind == "map" ? true : !(n.oneof || n.kind == "message" || n.opt || n.req);
}
function writeField(n, e, t) {
  if (n.kind == "map") {
    assert2(typeof e == "object" && e != null);
    const a = {}, s = Object.entries(e);
    switch (n.V.kind) {
      case "scalar":
        for (const [o, i] of s) a[o.toString()] = writeScalar(n.V.T, i);
        break;
      case "message":
        for (const [o, i] of s) a[o.toString()] = i.toJson(t);
        break;
      case "enum":
        const r = n.V.T;
        for (const [o, i] of s) a[o.toString()] = writeEnum(r, i, t.enumAsInteger);
        break;
    }
    return t.emitDefaultValues || s.length > 0 ? a : void 0;
  }
  if (n.repeated) {
    assert2(Array.isArray(e));
    const a = [];
    switch (n.kind) {
      case "scalar":
        for (let s = 0; s < e.length; s++) a.push(writeScalar(n.T, e[s]));
        break;
      case "enum":
        for (let s = 0; s < e.length; s++) a.push(writeEnum(n.T, e[s], t.enumAsInteger));
        break;
      case "message":
        for (let s = 0; s < e.length; s++) a.push(e[s].toJson(t));
        break;
    }
    return t.emitDefaultValues || a.length > 0 ? a : void 0;
  }
  switch (n.kind) {
    case "scalar":
      return writeScalar(n.T, e);
    case "enum":
      return writeEnum(n.T, e, t.enumAsInteger);
    case "message":
      return wrapField(n.T, e).toJson(t);
  }
}
function writeEnum(n, e, t) {
  return assert2(typeof e == "number"), n.typeName == "google.protobuf.NullValue" ? null : t ? e : n.findNumber(e)?.name ?? e;
}
function writeScalar(n, e) {
  switch (n) {
    case ScalarType.INT32:
    case ScalarType.SFIXED32:
    case ScalarType.SINT32:
    case ScalarType.FIXED32:
    case ScalarType.UINT32:
      return assert2(typeof e == "number"), e;
    case ScalarType.FLOAT:
    case ScalarType.DOUBLE:
      return assert2(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e;
    case ScalarType.STRING:
      return assert2(typeof e == "string"), e;
    case ScalarType.BOOL:
      return assert2(typeof e == "boolean"), e;
    case ScalarType.UINT64:
    case ScalarType.FIXED64:
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      return assert2(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), e.toString();
    case ScalarType.BYTES:
      return assert2(e instanceof Uint8Array), protoBase64.enc(e);
  }
}
var WireType = ((n) => (n[n.Varint = 0] = "Varint", n[n.Bit64 = 1] = "Bit64", n[n.LengthDelimited = 2] = "LengthDelimited", n[n.StartGroup = 3] = "StartGroup", n[n.EndGroup = 4] = "EndGroup", n[n.Bit32 = 5] = "Bit32", n))(WireType || {}), BinaryWriter = class {
  constructor(n) {
    this.stack = [], this.textEncoder = n ?? new TextEncoder(), this.chunks = [], this.buf = [];
  }
  finish() {
    this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
    let n = 0;
    for (let a = 0; a < this.chunks.length; a++) n += this.chunks[a].length;
    let e = new Uint8Array(n), t = 0;
    for (let a = 0; a < this.chunks.length; a++) e.set(this.chunks[a], t), t += this.chunks[a].length;
    return this.chunks = [], e;
  }
  fork() {
    return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
  }
  join() {
    let n = this.finish(), e = this.stack.pop();
    if (!e) throw new Error("invalid state, fork stack empty");
    return this.chunks = e.chunks, this.buf = e.buf, this.uint32(n.byteLength), this.raw(n);
  }
  tag(n, e) {
    return this.uint32((n << 3 | e) >>> 0);
  }
  raw(n) {
    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(n), this;
  }
  uint32(n) {
    for (assertUInt32(n); n > 127; ) this.buf.push(n & 127 | 128), n = n >>> 7;
    return this.buf.push(n), this;
  }
  int32(n) {
    return assertInt32(n), varint32write(n, this.buf), this;
  }
  bool(n) {
    return this.buf.push(n ? 1 : 0), this;
  }
  bytes(n) {
    return this.uint32(n.byteLength), this.raw(n);
  }
  string(n) {
    let e = this.textEncoder.encode(n);
    return this.uint32(e.byteLength), this.raw(e);
  }
  float(n) {
    assertFloat32(n);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setFloat32(0, n, true), this.raw(e);
  }
  double(n) {
    let e = new Uint8Array(8);
    return new DataView(e.buffer).setFloat64(0, n, true), this.raw(e);
  }
  fixed32(n) {
    assertUInt32(n);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setUint32(0, n, true), this.raw(e);
  }
  sfixed32(n) {
    assertInt32(n);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setInt32(0, n, true), this.raw(e);
  }
  sint32(n) {
    return assertInt32(n), n = (n << 1 ^ n >> 31) >>> 0, varint32write(n, this.buf), this;
  }
  sfixed64(n) {
    let e = new Uint8Array(8), t = new DataView(e.buffer), a = protoInt64.enc(n);
    return t.setInt32(0, a.lo, true), t.setInt32(4, a.hi, true), this.raw(e);
  }
  fixed64(n) {
    let e = new Uint8Array(8), t = new DataView(e.buffer), a = protoInt64.uEnc(n);
    return t.setInt32(0, a.lo, true), t.setInt32(4, a.hi, true), this.raw(e);
  }
  int64(n) {
    let e = protoInt64.enc(n);
    return varint64write(e.lo, e.hi, this.buf), this;
  }
  sint64(n) {
    let e = protoInt64.enc(n), t = e.hi >> 31, a = e.lo << 1 ^ t, s = (e.hi << 1 | e.lo >>> 31) ^ t;
    return varint64write(a, s, this.buf), this;
  }
  uint64(n) {
    let e = protoInt64.uEnc(n);
    return varint64write(e.lo, e.hi, this.buf), this;
  }
}, BinaryReader = class {
  constructor(n, e) {
    this.varint64 = varint64read, this.uint32 = varint32read, this.buf = n, this.len = n.length, this.pos = 0, this.view = new DataView(n.buffer, n.byteOffset, n.byteLength), this.textDecoder = e ?? new TextDecoder();
  }
  tag() {
    let n = this.uint32(), e = n >>> 3, t = n & 7;
    if (e <= 0 || t < 0 || t > 5) throw new Error("illegal tag: field no " + e + " wire type " + t);
    return [e, t];
  }
  skip(n, e) {
    let t = this.pos;
    switch (n) {
      case 0:
        for (; this.buf[this.pos++] & 128; ) ;
        break;
      case 1:
        this.pos += 4;
      case 5:
        this.pos += 4;
        break;
      case 2:
        let a = this.uint32();
        this.pos += a;
        break;
      case 3:
        for (; ; ) {
          const [s, r] = this.tag();
          if (r === 4) {
            if (e !== void 0 && s !== e) throw new Error("invalid end group tag");
            break;
          }
          this.skip(r, s);
        }
        break;
      default:
        throw new Error("cant skip wire type " + n);
    }
    return this.assertBounds(), this.buf.subarray(t, this.pos);
  }
  assertBounds() {
    if (this.pos > this.len) throw new RangeError("premature EOF");
  }
  int32() {
    return this.uint32() | 0;
  }
  sint32() {
    let n = this.uint32();
    return n >>> 1 ^ -(n & 1);
  }
  int64() {
    return protoInt64.dec(...this.varint64());
  }
  uint64() {
    return protoInt64.uDec(...this.varint64());
  }
  sint64() {
    let [n, e] = this.varint64(), t = -(n & 1);
    return n = (n >>> 1 | (e & 1) << 31) ^ t, e = e >>> 1 ^ t, protoInt64.dec(n, e);
  }
  bool() {
    let [n, e] = this.varint64();
    return n !== 0 || e !== 0;
  }
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, true);
  }
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, true);
  }
  fixed64() {
    return protoInt64.uDec(this.sfixed32(), this.sfixed32());
  }
  sfixed64() {
    return protoInt64.dec(this.sfixed32(), this.sfixed32());
  }
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, true);
  }
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, true);
  }
  bytes() {
    let n = this.uint32(), e = this.pos;
    return this.pos += n, this.assertBounds(), this.buf.subarray(e, e + n);
  }
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}, unknownFieldsSymbol = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), readDefaults = { readUnknownFields: true, readerFactory: (n) => new BinaryReader(n) }, writeDefaults = { writeUnknownFields: true, writerFactory: () => new BinaryWriter() };
function makeReadOptions2(n) {
  return n ? { ...readDefaults, ...n } : readDefaults;
}
function makeWriteOptions2(n) {
  return n ? { ...writeDefaults, ...n } : writeDefaults;
}
function makeBinaryFormat() {
  return { makeReadOptions: makeReadOptions2, makeWriteOptions: makeWriteOptions2, listUnknownFields(n) {
    return n[unknownFieldsSymbol] ?? [];
  }, discardUnknownFields(n) {
    delete n[unknownFieldsSymbol];
  }, writeUnknownFields(n, e) {
    const a = n[unknownFieldsSymbol];
    if (a) for (const s of a) e.tag(s.no, s.wireType).raw(s.data);
  }, onUnknownField(n, e, t, a) {
    const s = n;
    Array.isArray(s[unknownFieldsSymbol]) || (s[unknownFieldsSymbol] = []), s[unknownFieldsSymbol].push({ no: e, wireType: t, data: new Uint8Array(a) });
  }, readMessage(n, e, t, a, s) {
    const r = n.getType(), o = s ? e.len : e.pos + t;
    let i, l;
    for (; e.pos < o && ([i, l] = e.tag(), !(s === true && l == WireType.EndGroup)); ) {
      const c = r.fields.find(i);
      if (!c) {
        const u = e.skip(l, i);
        a.readUnknownFields && this.onUnknownField(n, i, l, u);
        continue;
      }
      readField2(n, e, c, l, a);
    }
    if (s && (l != WireType.EndGroup || i !== t)) throw new Error("invalid end group tag");
  }, readField: readField2, writeMessage(n, e, t) {
    const a = n.getType();
    for (const s of a.fields.byNumber()) {
      if (!isFieldSet(s, n)) {
        if (s.req) throw new Error(`cannot encode field ${a.typeName}.${s.name} to binary: required field not set`);
        continue;
      }
      const r = s.oneof ? n[s.oneof.localName].value : n[s.localName];
      writeField2(s, r, e, t);
    }
    return t.writeUnknownFields && this.writeUnknownFields(n, e), e;
  }, writeField(n, e, t, a) {
    e !== void 0 && writeField2(n, e, t, a);
  } };
}
function readField2(n, e, t, a, s) {
  let { repeated: r, localName: o } = t;
  switch (t.oneof && (n = n[t.oneof.localName], n.case != o && delete n.value, n.case = o, o = "value"), t.kind) {
    case "scalar":
    case "enum":
      const i = t.kind == "enum" ? ScalarType.INT32 : t.T;
      let l = readScalar2;
      if (t.kind == "scalar" && t.L > 0 && (l = readScalarLTString), r) {
        let d = n[o];
        if (a == WireType.LengthDelimited && i != ScalarType.STRING && i != ScalarType.BYTES) {
          let k = e.uint32() + e.pos;
          for (; e.pos < k; ) d.push(l(e, i));
        } else d.push(l(e, i));
      } else n[o] = l(e, i);
      break;
    case "message":
      const c = t.T;
      r ? n[o].push(readMessageField(e, new c(), s, t)) : isMessage(n[o]) ? readMessageField(e, n[o], s, t) : (n[o] = readMessageField(e, new c(), s, t), c.fieldWrapper && !t.oneof && !t.repeated && (n[o] = c.fieldWrapper.unwrapField(n[o])));
      break;
    case "map":
      let [u, m] = readMapEntry(t, e, s);
      n[o][u] = m;
      break;
  }
}
function readMessageField(n, e, t, a) {
  const s = e.getType().runtime.bin, r = a?.delimited;
  return s.readMessage(e, n, r ? a.no : n.uint32(), t, r), e;
}
function readMapEntry(n, e, t) {
  const a = e.uint32(), s = e.pos + a;
  let r, o;
  for (; e.pos < s; ) {
    const [i] = e.tag();
    switch (i) {
      case 1:
        r = readScalar2(e, n.K);
        break;
      case 2:
        switch (n.V.kind) {
          case "scalar":
            o = readScalar2(e, n.V.T);
            break;
          case "enum":
            o = e.int32();
            break;
          case "message":
            o = readMessageField(e, new n.V.T(), t, void 0);
            break;
        }
        break;
    }
  }
  if (r === void 0 && (r = scalarZeroValue(n.K, LongType.BIGINT)), typeof r != "string" && typeof r != "number" && (r = r.toString()), o === void 0) switch (n.V.kind) {
    case "scalar":
      o = scalarZeroValue(n.V.T, LongType.BIGINT);
      break;
    case "enum":
      o = n.V.T.values[0].no;
      break;
    case "message":
      o = new n.V.T();
      break;
  }
  return [r, o];
}
function readScalarLTString(n, e) {
  const t = readScalar2(n, e);
  return typeof t == "bigint" ? t.toString() : t;
}
function readScalar2(n, e) {
  switch (e) {
    case ScalarType.STRING:
      return n.string();
    case ScalarType.BOOL:
      return n.bool();
    case ScalarType.DOUBLE:
      return n.double();
    case ScalarType.FLOAT:
      return n.float();
    case ScalarType.INT32:
      return n.int32();
    case ScalarType.INT64:
      return n.int64();
    case ScalarType.UINT64:
      return n.uint64();
    case ScalarType.FIXED64:
      return n.fixed64();
    case ScalarType.BYTES:
      return n.bytes();
    case ScalarType.FIXED32:
      return n.fixed32();
    case ScalarType.SFIXED32:
      return n.sfixed32();
    case ScalarType.SFIXED64:
      return n.sfixed64();
    case ScalarType.SINT64:
      return n.sint64();
    case ScalarType.UINT32:
      return n.uint32();
    case ScalarType.SINT32:
      return n.sint32();
  }
}
function writeField2(n, e, t, a) {
  assert2(e !== void 0);
  const s = n.repeated;
  switch (n.kind) {
    case "scalar":
    case "enum":
      let r = n.kind == "enum" ? ScalarType.INT32 : n.T;
      if (s) if (assert2(Array.isArray(e)), n.packed) writePacked(t, r, n.no, e);
      else for (const o of e) writeScalar2(t, r, n.no, o);
      else writeScalar2(t, r, n.no, e);
      break;
    case "message":
      if (s) {
        assert2(Array.isArray(e));
        for (const o of e) writeMessageField(t, a, n, o);
      } else writeMessageField(t, a, n, e);
      break;
    case "map":
      assert2(typeof e == "object" && e != null);
      for (const [o, i] of Object.entries(e)) writeMapEntry(t, a, n, o, i);
      break;
  }
}
function writeMapEntry(n, e, t, a, s) {
  n.tag(t.no, WireType.LengthDelimited), n.fork();
  let r = a;
  switch (t.K) {
    case ScalarType.INT32:
    case ScalarType.FIXED32:
    case ScalarType.UINT32:
    case ScalarType.SFIXED32:
    case ScalarType.SINT32:
      r = Number.parseInt(a);
      break;
    case ScalarType.BOOL:
      assert2(a == "true" || a == "false"), r = a == "true";
      break;
  }
  switch (writeScalar2(n, t.K, 1, r), t.V.kind) {
    case "scalar":
      writeScalar2(n, t.V.T, 2, s);
      break;
    case "enum":
      writeScalar2(n, ScalarType.INT32, 2, s);
      break;
    case "message":
      assert2(s !== void 0), n.tag(2, WireType.LengthDelimited).bytes(s.toBinary(e));
      break;
  }
  n.join();
}
function writeMessageField(n, e, t, a) {
  const s = wrapField(t.T, a);
  t.delimited ? n.tag(t.no, WireType.StartGroup).raw(s.toBinary(e)).tag(t.no, WireType.EndGroup) : n.tag(t.no, WireType.LengthDelimited).bytes(s.toBinary(e));
}
function writeScalar2(n, e, t, a) {
  assert2(a !== void 0);
  let [s, r] = scalarTypeInfo(e);
  n.tag(t, s)[r](a);
}
function writePacked(n, e, t, a) {
  if (!a.length) return;
  n.tag(t, WireType.LengthDelimited).fork();
  let [, s] = scalarTypeInfo(e);
  for (let r = 0; r < a.length; r++) n[s](a[r]);
  n.join();
}
function scalarTypeInfo(n) {
  let e = WireType.Varint;
  switch (n) {
    case ScalarType.BYTES:
    case ScalarType.STRING:
      e = WireType.LengthDelimited;
      break;
    case ScalarType.DOUBLE:
    case ScalarType.FIXED64:
    case ScalarType.SFIXED64:
      e = WireType.Bit64;
      break;
    case ScalarType.FIXED32:
    case ScalarType.SFIXED32:
    case ScalarType.FLOAT:
      e = WireType.Bit32;
      break;
  }
  const t = ScalarType[n].toLowerCase();
  return [e, t];
}
function makeUtilCommon() {
  return { setEnumType, initPartial(n, e) {
    if (n === void 0) return;
    const t = e.getType();
    for (const a of t.fields.byMember()) {
      const s = a.localName, r = e, o = n;
      if (o[s] != null) switch (a.kind) {
        case "oneof":
          const i = o[s].case;
          if (i === void 0) continue;
          const l = a.findField(i);
          let c = o[s].value;
          l && l.kind == "message" && !isMessage(c, l.T) ? c = new l.T(c) : l && l.kind === "scalar" && l.T === ScalarType.BYTES && (c = toU8Arr(c)), r[s] = { case: i, value: c };
          break;
        case "scalar":
        case "enum":
          let u = o[s];
          a.T === ScalarType.BYTES && (u = a.repeated ? u.map(toU8Arr) : toU8Arr(u)), r[s] = u;
          break;
        case "map":
          switch (a.V.kind) {
            case "scalar":
            case "enum":
              if (a.V.T === ScalarType.BYTES) for (const [g, k] of Object.entries(o[s])) r[s][g] = toU8Arr(k);
              else Object.assign(r[s], o[s]);
              break;
            case "message":
              const d = a.V.T;
              for (const g of Object.keys(o[s])) {
                let k = o[s][g];
                d.fieldWrapper || (k = new d(k)), r[s][g] = k;
              }
              break;
          }
          break;
        case "message":
          const m = a.T;
          if (a.repeated) r[s] = o[s].map((d) => isMessage(d, m) ? d : new m(d));
          else {
            const d = o[s];
            m.fieldWrapper ? m.typeName === "google.protobuf.BytesValue" ? r[s] = toU8Arr(d) : r[s] = d : r[s] = isMessage(d, m) ? d : new m(d);
          }
          break;
      }
    }
  }, equals(n, e, t) {
    return e === t ? true : !e || !t ? false : n.fields.byMember().every((a) => {
      const s = e[a.localName], r = t[a.localName];
      if (a.repeated) {
        if (s.length !== r.length) return false;
        switch (a.kind) {
          case "message":
            return s.every((o, i) => a.T.equals(o, r[i]));
          case "scalar":
            return s.every((o, i) => scalarEquals(a.T, o, r[i]));
          case "enum":
            return s.every((o, i) => scalarEquals(ScalarType.INT32, o, r[i]));
        }
        throw new Error(`repeated cannot contain ${a.kind}`);
      }
      switch (a.kind) {
        case "message":
          return a.T.equals(s, r);
        case "enum":
          return scalarEquals(ScalarType.INT32, s, r);
        case "scalar":
          return scalarEquals(a.T, s, r);
        case "oneof":
          if (s.case !== r.case) return false;
          const o = a.findField(s.case);
          if (o === void 0) return true;
          switch (o.kind) {
            case "message":
              return o.T.equals(s.value, r.value);
            case "enum":
              return scalarEquals(ScalarType.INT32, s.value, r.value);
            case "scalar":
              return scalarEquals(o.T, s.value, r.value);
          }
          throw new Error(`oneof cannot contain ${o.kind}`);
        case "map":
          const i = Object.keys(s).concat(Object.keys(r));
          switch (a.V.kind) {
            case "message":
              const l = a.V.T;
              return i.every((u) => l.equals(s[u], r[u]));
            case "enum":
              return i.every((u) => scalarEquals(ScalarType.INT32, s[u], r[u]));
            case "scalar":
              const c = a.V.T;
              return i.every((u) => scalarEquals(c, s[u], r[u]));
          }
          break;
      }
    });
  }, clone(n) {
    const e = n.getType(), t = new e(), a = t;
    for (const s of e.fields.byMember()) {
      const r = n[s.localName];
      let o;
      if (s.repeated) o = r.map(cloneSingularField);
      else if (s.kind == "map") {
        o = a[s.localName];
        for (const [i, l] of Object.entries(r)) o[i] = cloneSingularField(l);
      } else s.kind == "oneof" ? o = s.findField(r.case) ? { case: r.case, value: cloneSingularField(r.value) } : { case: void 0 } : o = cloneSingularField(r);
      a[s.localName] = o;
    }
    for (const s of e.runtime.bin.listUnknownFields(n)) e.runtime.bin.onUnknownField(a, s.no, s.wireType, s.data);
    return t;
  } };
}
function cloneSingularField(n) {
  if (n === void 0) return n;
  if (isMessage(n)) return n.clone();
  if (n instanceof Uint8Array) {
    const e = new Uint8Array(n.byteLength);
    return e.set(n), e;
  }
  return n;
}
function toU8Arr(n) {
  return n instanceof Uint8Array ? n : new Uint8Array(n);
}
function makeProtoRuntime(n, e, t) {
  return { syntax: n, json: makeJsonFormat(), bin: makeBinaryFormat(), util: { ...makeUtilCommon(), newFieldList: e, initFields: t }, makeMessageType(a, s, r) {
    return makeMessageType(this, a, s, r);
  }, makeEnum, makeEnumType, getEnumType, makeExtension(a, s, r) {
    return makeExtension(this, a, s, r);
  } };
}
var InternalFieldList = class {
  constructor(n, e) {
    this._fields = n, this._normalizer = e;
  }
  findJsonName(n) {
    if (!this.jsonNames) {
      const e = {};
      for (const t of this.list()) e[t.jsonName] = e[t.name] = t;
      this.jsonNames = e;
    }
    return this.jsonNames[n];
  }
  find(n) {
    if (!this.numbers) {
      const e = {};
      for (const t of this.list()) e[t.no] = t;
      this.numbers = e;
    }
    return this.numbers[n];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((n, e) => n.no - e.no)), this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const n = this.members;
      let e;
      for (const t of this.list()) t.oneof ? t.oneof !== e && (e = t.oneof, n.push(e)) : n.push(t);
    }
    return this.members;
  }
};
function localFieldName(n, e) {
  const t = protoCamelCase(n);
  return e ? t : safeObjectProperty(safeMessageProperty(t));
}
function localOneofName(n) {
  return localFieldName(n, false);
}
var fieldJsonName = protoCamelCase;
function protoCamelCase(n) {
  let e = false;
  const t = [];
  for (let a = 0; a < n.length; a++) {
    let s = n.charAt(a);
    switch (s) {
      case "_":
        e = true;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        t.push(s), e = false;
        break;
      default:
        e && (e = false, s = s.toUpperCase()), t.push(s);
        break;
    }
  }
  return t.join("");
}
var reservedObjectProperties = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), reservedMessageProperties = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), fallback = (n) => `${n}$`, safeMessageProperty = (n) => reservedMessageProperties.has(n) ? fallback(n) : n, safeObjectProperty = (n) => reservedObjectProperties.has(n) ? fallback(n) : n, InternalOneofInfo = class {
  constructor(n) {
    this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = n, this.localName = localOneofName(n);
  }
  addField(n) {
    assert2(n.oneof === this, `field ${n.name} not one of ${this.name}`), this.fields.push(n);
  }
  findField(n) {
    if (!this._lookup) {
      this._lookup = /* @__PURE__ */ Object.create(null);
      for (let e = 0; e < this.fields.length; e++) this._lookup[this.fields[e].localName] = this.fields[e];
    }
    return this._lookup[n];
  }
};
function normalizeFieldInfos(n, e) {
  const t = [];
  let a;
  for (const s of typeof n == "function" ? n() : n) {
    const r = s;
    if (r.localName = localFieldName(s.name, s.oneof !== void 0), r.jsonName = s.jsonName ?? fieldJsonName(s.name), r.repeated = s.repeated ?? false, s.kind == "scalar" && (r.L = s.L ?? LongType.BIGINT), r.delimited = s.delimited ?? false, r.req = s.req ?? false, r.opt = s.opt ?? false, s.packed === void 0 && (e ? r.packed = s.kind == "enum" || s.kind == "scalar" && s.T != ScalarType.BYTES && s.T != ScalarType.STRING : r.packed = false), s.oneof !== void 0) {
      const o = typeof s.oneof == "string" ? s.oneof : s.oneof.name;
      (!a || a.name != o) && (a = new InternalOneofInfo(o)), r.oneof = a, a.addField(r);
    }
    t.push(r);
  }
  return t;
}
var proto3 = makeProtoRuntime("proto3", (n) => new InternalFieldList(n, (e) => normalizeFieldInfos(e, true)), (n) => {
  for (const e of n.getType().fields.byMember()) {
    if (e.opt) continue;
    const t = e.localName, a = n;
    if (e.repeated) {
      a[t] = [];
      continue;
    }
    switch (e.kind) {
      case "oneof":
        a[t] = { case: void 0 };
        break;
      case "enum":
        a[t] = 0;
        break;
      case "map":
        a[t] = {};
        break;
      case "scalar":
        a[t] = scalarZeroValue(e.T, e.L);
        break;
      case "message":
        break;
    }
  }
}), proto2 = makeProtoRuntime("proto2", (n) => new InternalFieldList(n, (e) => normalizeFieldInfos(e, false)), (n) => {
  for (const e of n.getType().fields.byMember()) {
    const t = e.localName, a = n;
    if (e.repeated) {
      a[t] = [];
      continue;
    }
    switch (e.kind) {
      case "oneof":
        a[t] = { case: void 0 };
        break;
      case "map":
        a[t] = {};
        break;
      case "scalar":
      case "enum":
      case "message":
        break;
    }
  }
}), protoDouble = { NaN: Number.NaN, POSITIVE_INFINITY: Number.POSITIVE_INFINITY, NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY }, Edition = ((n) => (n[n.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", n[n.EDITION_LEGACY = 900] = "EDITION_LEGACY", n[n.EDITION_PROTO2 = 998] = "EDITION_PROTO2", n[n.EDITION_PROTO3 = 999] = "EDITION_PROTO3", n[n.EDITION_2023 = 1e3] = "EDITION_2023", n[n.EDITION_2024 = 1001] = "EDITION_2024", n[n.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", n[n.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", n[n.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", n[n.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", n[n.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", n[n.EDITION_MAX = 2147483647] = "EDITION_MAX", n))(Edition || {});
proto2.util.setEnumType(Edition, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
var _FileDescriptorSet = class W extends Message {
  constructor(e) {
    super(), this.file = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new W().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new W().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new W().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(W, e, t);
  }
};
_FileDescriptorSet.runtime = proto2, _FileDescriptorSet.typeName = "google.protobuf.FileDescriptorSet", _FileDescriptorSet.fields = proto2.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: FileDescriptorProto, repeated: true }]);
var _FileDescriptorProto = class V extends Message {
  constructor(e) {
    super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new V().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new V().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new V().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(V, e, t);
  }
};
_FileDescriptorProto.runtime = proto2, _FileDescriptorProto.typeName = "google.protobuf.FileDescriptorProto", _FileDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: DescriptorProto, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: EnumDescriptorProto, repeated: true }, { no: 6, name: "service", kind: "message", T: ServiceDescriptorProto, repeated: true }, { no: 7, name: "extension", kind: "message", T: FieldDescriptorProto, repeated: true }, { no: 8, name: "options", kind: "message", T: FileOptions, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: SourceCodeInfo, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: proto2.getEnumType(Edition), opt: true }]);
var FileDescriptorProto = _FileDescriptorProto, _DescriptorProto = class Y extends Message {
  constructor(e) {
    super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Y().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Y().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Y().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(Y, e, t);
  }
};
_DescriptorProto.runtime = proto2, _DescriptorProto.typeName = "google.protobuf.DescriptorProto", _DescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: FieldDescriptorProto, repeated: true }, { no: 6, name: "extension", kind: "message", T: FieldDescriptorProto, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: _DescriptorProto, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: EnumDescriptorProto, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: DescriptorProto_ExtensionRange, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: OneofDescriptorProto, repeated: true }, { no: 7, name: "options", kind: "message", T: MessageOptions, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: DescriptorProto_ReservedRange, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
var DescriptorProto = _DescriptorProto, _DescriptorProto_ExtensionRange = class j extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new j().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new j().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new j().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(j, e, t);
  }
};
_DescriptorProto_ExtensionRange.runtime = proto2, _DescriptorProto_ExtensionRange.typeName = "google.protobuf.DescriptorProto.ExtensionRange", _DescriptorProto_ExtensionRange.fields = proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: ExtensionRangeOptions, opt: true }]);
var DescriptorProto_ExtensionRange = _DescriptorProto_ExtensionRange, _DescriptorProto_ReservedRange = class z extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new z().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new z().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new z().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(z, e, t);
  }
};
_DescriptorProto_ReservedRange.runtime = proto2, _DescriptorProto_ReservedRange.typeName = "google.protobuf.DescriptorProto.ReservedRange", _DescriptorProto_ReservedRange.fields = proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
var DescriptorProto_ReservedRange = _DescriptorProto_ReservedRange, _ExtensionRangeOptions = class K extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], this.declaration = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new K().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new K().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new K().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(K, e, t);
  }
};
_ExtensionRangeOptions.runtime = proto2, _ExtensionRangeOptions.typeName = "google.protobuf.ExtensionRangeOptions", _ExtensionRangeOptions.fields = proto2.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }, { no: 2, name: "declaration", kind: "message", T: ExtensionRangeOptions_Declaration, repeated: true }, { no: 50, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 3, name: "verification", kind: "enum", T: proto2.getEnumType(ExtensionRangeOptions_VerificationState), opt: true, default: 1 }]);
var ExtensionRangeOptions = _ExtensionRangeOptions, ExtensionRangeOptions_VerificationState = ((n) => (n[n.DECLARATION = 0] = "DECLARATION", n[n.UNVERIFIED = 1] = "UNVERIFIED", n))(ExtensionRangeOptions_VerificationState || {});
proto2.util.setEnumType(ExtensionRangeOptions_VerificationState, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
var _ExtensionRangeOptions_Declaration = class H extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new H().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new H().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new H().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(H, e, t);
  }
};
_ExtensionRangeOptions_Declaration.runtime = proto2, _ExtensionRangeOptions_Declaration.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", _ExtensionRangeOptions_Declaration.fields = proto2.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
var ExtensionRangeOptions_Declaration = _ExtensionRangeOptions_Declaration, _FieldDescriptorProto = class X extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new X().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new X().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new X().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(X, e, t);
  }
};
_FieldDescriptorProto.runtime = proto2, _FieldDescriptorProto.typeName = "google.protobuf.FieldDescriptorProto", _FieldDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: proto2.getEnumType(FieldDescriptorProto_Label), opt: true }, { no: 5, name: "type", kind: "enum", T: proto2.getEnumType(FieldDescriptorProto_Type), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: FieldOptions, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]);
var FieldDescriptorProto = _FieldDescriptorProto, FieldDescriptorProto_Type = ((n) => (n[n.DOUBLE = 1] = "DOUBLE", n[n.FLOAT = 2] = "FLOAT", n[n.INT64 = 3] = "INT64", n[n.UINT64 = 4] = "UINT64", n[n.INT32 = 5] = "INT32", n[n.FIXED64 = 6] = "FIXED64", n[n.FIXED32 = 7] = "FIXED32", n[n.BOOL = 8] = "BOOL", n[n.STRING = 9] = "STRING", n[n.GROUP = 10] = "GROUP", n[n.MESSAGE = 11] = "MESSAGE", n[n.BYTES = 12] = "BYTES", n[n.UINT32 = 13] = "UINT32", n[n.ENUM = 14] = "ENUM", n[n.SFIXED32 = 15] = "SFIXED32", n[n.SFIXED64 = 16] = "SFIXED64", n[n.SINT32 = 17] = "SINT32", n[n.SINT64 = 18] = "SINT64", n))(FieldDescriptorProto_Type || {});
proto2.util.setEnumType(FieldDescriptorProto_Type, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
var FieldDescriptorProto_Label = ((n) => (n[n.OPTIONAL = 1] = "OPTIONAL", n[n.REPEATED = 3] = "REPEATED", n[n.REQUIRED = 2] = "REQUIRED", n))(FieldDescriptorProto_Label || {});
proto2.util.setEnumType(FieldDescriptorProto_Label, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
var _OneofDescriptorProto = class Q extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Q().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Q().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Q().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(Q, e, t);
  }
};
_OneofDescriptorProto.runtime = proto2, _OneofDescriptorProto.typeName = "google.protobuf.OneofDescriptorProto", _OneofDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: OneofOptions, opt: true }]);
var OneofDescriptorProto = _OneofDescriptorProto, _EnumDescriptorProto = class Z extends Message {
  constructor(e) {
    super(), this.value = [], this.reservedRange = [], this.reservedName = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Z().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Z().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Z().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(Z, e, t);
  }
};
_EnumDescriptorProto.runtime = proto2, _EnumDescriptorProto.typeName = "google.protobuf.EnumDescriptorProto", _EnumDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: EnumValueDescriptorProto, repeated: true }, { no: 3, name: "options", kind: "message", T: EnumOptions, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: EnumDescriptorProto_EnumReservedRange, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
var EnumDescriptorProto = _EnumDescriptorProto, _EnumDescriptorProto_EnumReservedRange = class ee extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ee().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ee().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ee().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(ee, e, t);
  }
};
_EnumDescriptorProto_EnumReservedRange.runtime = proto2, _EnumDescriptorProto_EnumReservedRange.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", _EnumDescriptorProto_EnumReservedRange.fields = proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
var EnumDescriptorProto_EnumReservedRange = _EnumDescriptorProto_EnumReservedRange, _EnumValueDescriptorProto = class ne extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ne().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ne().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ne().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(ne, e, t);
  }
};
_EnumValueDescriptorProto.runtime = proto2, _EnumValueDescriptorProto.typeName = "google.protobuf.EnumValueDescriptorProto", _EnumValueDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: EnumValueOptions, opt: true }]);
var EnumValueDescriptorProto = _EnumValueDescriptorProto, _ServiceDescriptorProto = class te extends Message {
  constructor(e) {
    super(), this.method = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new te().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new te().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new te().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(te, e, t);
  }
};
_ServiceDescriptorProto.runtime = proto2, _ServiceDescriptorProto.typeName = "google.protobuf.ServiceDescriptorProto", _ServiceDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: MethodDescriptorProto, repeated: true }, { no: 3, name: "options", kind: "message", T: ServiceOptions, opt: true }]);
var ServiceDescriptorProto = _ServiceDescriptorProto, _MethodDescriptorProto = class ae extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ae().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ae().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ae().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(ae, e, t);
  }
};
_MethodDescriptorProto.runtime = proto2, _MethodDescriptorProto.typeName = "google.protobuf.MethodDescriptorProto", _MethodDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: MethodOptions, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
var MethodDescriptorProto = _MethodDescriptorProto, _FileOptions = class se extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new se().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new se().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new se().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(se, e, t);
  }
};
_FileOptions.runtime = proto2, _FileOptions.typeName = "google.protobuf.FileOptions", _FileOptions.fields = proto2.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: proto2.getEnumType(FileOptions_OptimizeMode), opt: true, default: 1 }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var FileOptions = _FileOptions, FileOptions_OptimizeMode = ((n) => (n[n.SPEED = 1] = "SPEED", n[n.CODE_SIZE = 2] = "CODE_SIZE", n[n.LITE_RUNTIME = 3] = "LITE_RUNTIME", n))(FileOptions_OptimizeMode || {});
proto2.util.setEnumType(FileOptions_OptimizeMode, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
var _MessageOptions = class re extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new re().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new re().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new re().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(re, e, t);
  }
};
_MessageOptions.runtime = proto2, _MessageOptions.typeName = "google.protobuf.MessageOptions", _MessageOptions.fields = proto2.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var MessageOptions = _MessageOptions, _FieldOptions = class oe extends Message {
  constructor(e) {
    super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new oe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(oe, e, t);
  }
};
_FieldOptions.runtime = proto2, _FieldOptions.typeName = "google.protobuf.FieldOptions", _FieldOptions.fields = proto2.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: proto2.getEnumType(FieldOptions_CType), opt: true, default: 0 }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: proto2.getEnumType(FieldOptions_JSType), opt: true, default: 0 }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: proto2.getEnumType(FieldOptions_OptionRetention), opt: true }, { no: 19, name: "targets", kind: "enum", T: proto2.getEnumType(FieldOptions_OptionTargetType), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: FieldOptions_EditionDefault, repeated: true }, { no: 21, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 22, name: "feature_support", kind: "message", T: FieldOptions_FeatureSupport, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var FieldOptions = _FieldOptions, FieldOptions_CType = ((n) => (n[n.STRING = 0] = "STRING", n[n.CORD = 1] = "CORD", n[n.STRING_PIECE = 2] = "STRING_PIECE", n))(FieldOptions_CType || {});
proto2.util.setEnumType(FieldOptions_CType, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]);
var FieldOptions_JSType = ((n) => (n[n.JS_NORMAL = 0] = "JS_NORMAL", n[n.JS_STRING = 1] = "JS_STRING", n[n.JS_NUMBER = 2] = "JS_NUMBER", n))(FieldOptions_JSType || {});
proto2.util.setEnumType(FieldOptions_JSType, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]);
var FieldOptions_OptionRetention = ((n) => (n[n.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", n[n.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", n[n.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", n))(FieldOptions_OptionRetention || {});
proto2.util.setEnumType(FieldOptions_OptionRetention, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]);
var FieldOptions_OptionTargetType = ((n) => (n[n.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", n[n.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", n[n.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", n[n.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", n[n.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", n[n.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", n[n.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", n[n.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", n[n.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", n[n.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", n))(FieldOptions_OptionTargetType || {});
proto2.util.setEnumType(FieldOptions_OptionTargetType, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
var _FieldOptions_EditionDefault = class ie extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ie().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ie().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ie().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(ie, e, t);
  }
};
_FieldOptions_EditionDefault.runtime = proto2, _FieldOptions_EditionDefault.typeName = "google.protobuf.FieldOptions.EditionDefault", _FieldOptions_EditionDefault.fields = proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: proto2.getEnumType(Edition), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
var FieldOptions_EditionDefault = _FieldOptions_EditionDefault, _FieldOptions_FeatureSupport = class le extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new le().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new le().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new le().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(le, e, t);
  }
};
_FieldOptions_FeatureSupport.runtime = proto2, _FieldOptions_FeatureSupport.typeName = "google.protobuf.FieldOptions.FeatureSupport", _FieldOptions_FeatureSupport.fields = proto2.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: proto2.getEnumType(Edition), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: proto2.getEnumType(Edition), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: proto2.getEnumType(Edition), opt: true }]);
var FieldOptions_FeatureSupport = _FieldOptions_FeatureSupport, _OneofOptions = class ce extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ce().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ce().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ce().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(ce, e, t);
  }
};
_OneofOptions.runtime = proto2, _OneofOptions.typeName = "google.protobuf.OneofOptions", _OneofOptions.fields = proto2.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var OneofOptions = _OneofOptions, _EnumOptions = class ue extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ue().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ue().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ue().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(ue, e, t);
  }
};
_EnumOptions.runtime = proto2, _EnumOptions.typeName = "google.protobuf.EnumOptions", _EnumOptions.fields = proto2.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var EnumOptions = _EnumOptions, _EnumValueOptions = class me extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new me().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new me().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new me().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(me, e, t);
  }
};
_EnumValueOptions.runtime = proto2, _EnumValueOptions.typeName = "google.protobuf.EnumValueOptions", _EnumValueOptions.fields = proto2.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: FieldOptions_FeatureSupport, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var EnumValueOptions = _EnumValueOptions, _ServiceOptions = class de extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new de().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new de().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new de().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(de, e, t);
  }
};
_ServiceOptions.runtime = proto2, _ServiceOptions.typeName = "google.protobuf.ServiceOptions", _ServiceOptions.fields = proto2.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var ServiceOptions = _ServiceOptions, _MethodOptions = class pe extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new pe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(pe, e, t);
  }
};
_MethodOptions.runtime = proto2, _MethodOptions.typeName = "google.protobuf.MethodOptions", _MethodOptions.fields = proto2.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: proto2.getEnumType(MethodOptions_IdempotencyLevel), opt: true, default: 0 }, { no: 35, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var MethodOptions = _MethodOptions, MethodOptions_IdempotencyLevel = ((n) => (n[n.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", n[n.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", n[n.IDEMPOTENT = 2] = "IDEMPOTENT", n))(MethodOptions_IdempotencyLevel || {});
proto2.util.setEnumType(MethodOptions_IdempotencyLevel, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
var _UninterpretedOption = class ge extends Message {
  constructor(e) {
    super(), this.name = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ge().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ge().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ge().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(ge, e, t);
  }
};
_UninterpretedOption.runtime = proto2, _UninterpretedOption.typeName = "google.protobuf.UninterpretedOption", _UninterpretedOption.fields = proto2.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: UninterpretedOption_NamePart, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
var UninterpretedOption = _UninterpretedOption, _UninterpretedOption_NamePart = class Te extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Te().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Te().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Te().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(Te, e, t);
  }
};
_UninterpretedOption_NamePart.runtime = proto2, _UninterpretedOption_NamePart.typeName = "google.protobuf.UninterpretedOption.NamePart", _UninterpretedOption_NamePart.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
var UninterpretedOption_NamePart = _UninterpretedOption_NamePart, _FeatureSet = class fe extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new fe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(fe, e, t);
  }
};
_FeatureSet.runtime = proto2, _FeatureSet.typeName = "google.protobuf.FeatureSet", _FeatureSet.fields = proto2.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: proto2.getEnumType(FeatureSet_FieldPresence), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: proto2.getEnumType(FeatureSet_EnumType), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: proto2.getEnumType(FeatureSet_RepeatedFieldEncoding), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: proto2.getEnumType(FeatureSet_Utf8Validation), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: proto2.getEnumType(FeatureSet_MessageEncoding), opt: true }, { no: 6, name: "json_format", kind: "enum", T: proto2.getEnumType(FeatureSet_JsonFormat), opt: true }]);
var FeatureSet = _FeatureSet, FeatureSet_FieldPresence = ((n) => (n[n.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", n[n.EXPLICIT = 1] = "EXPLICIT", n[n.IMPLICIT = 2] = "IMPLICIT", n[n.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", n))(FeatureSet_FieldPresence || {});
proto2.util.setEnumType(FeatureSet_FieldPresence, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]);
var FeatureSet_EnumType = ((n) => (n[n.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", n[n.OPEN = 1] = "OPEN", n[n.CLOSED = 2] = "CLOSED", n))(FeatureSet_EnumType || {});
proto2.util.setEnumType(FeatureSet_EnumType, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]);
var FeatureSet_RepeatedFieldEncoding = ((n) => (n[n.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", n[n.PACKED = 1] = "PACKED", n[n.EXPANDED = 2] = "EXPANDED", n))(FeatureSet_RepeatedFieldEncoding || {});
proto2.util.setEnumType(FeatureSet_RepeatedFieldEncoding, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]);
var FeatureSet_Utf8Validation = ((n) => (n[n.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", n[n.VERIFY = 2] = "VERIFY", n[n.NONE = 3] = "NONE", n))(FeatureSet_Utf8Validation || {});
proto2.util.setEnumType(FeatureSet_Utf8Validation, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]);
var FeatureSet_MessageEncoding = ((n) => (n[n.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", n[n.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", n[n.DELIMITED = 2] = "DELIMITED", n))(FeatureSet_MessageEncoding || {});
proto2.util.setEnumType(FeatureSet_MessageEncoding, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]);
var FeatureSet_JsonFormat = ((n) => (n[n.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", n[n.ALLOW = 1] = "ALLOW", n[n.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", n))(FeatureSet_JsonFormat || {});
proto2.util.setEnumType(FeatureSet_JsonFormat, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
var _FeatureSetDefaults = class he extends Message {
  constructor(e) {
    super(), this.defaults = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new he().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new he().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new he().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(he, e, t);
  }
};
_FeatureSetDefaults.runtime = proto2, _FeatureSetDefaults.typeName = "google.protobuf.FeatureSetDefaults", _FeatureSetDefaults.fields = proto2.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: FeatureSetDefaults_FeatureSetEditionDefault, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: proto2.getEnumType(Edition), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: proto2.getEnumType(Edition), opt: true }]);
var _FeatureSetDefaults_FeatureSetEditionDefault = class ke extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ke().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ke().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ke().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(ke, e, t);
  }
};
_FeatureSetDefaults_FeatureSetEditionDefault.runtime = proto2, _FeatureSetDefaults_FeatureSetEditionDefault.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", _FeatureSetDefaults_FeatureSetEditionDefault.fields = proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: proto2.getEnumType(Edition), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: FeatureSet, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: FeatureSet, opt: true }]);
var FeatureSetDefaults_FeatureSetEditionDefault = _FeatureSetDefaults_FeatureSetEditionDefault, _SourceCodeInfo = class _e extends Message {
  constructor(e) {
    super(), this.location = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new _e().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _e().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _e().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(_e, e, t);
  }
};
_SourceCodeInfo.runtime = proto2, _SourceCodeInfo.typeName = "google.protobuf.SourceCodeInfo", _SourceCodeInfo.fields = proto2.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: SourceCodeInfo_Location, repeated: true }]);
var SourceCodeInfo = _SourceCodeInfo, _SourceCodeInfo_Location = class ve extends Message {
  constructor(e) {
    super(), this.path = [], this.span = [], this.leadingDetachedComments = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ve().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ve().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ve().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(ve, e, t);
  }
};
_SourceCodeInfo_Location.runtime = proto2, _SourceCodeInfo_Location.typeName = "google.protobuf.SourceCodeInfo.Location", _SourceCodeInfo_Location.fields = proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
var SourceCodeInfo_Location = _SourceCodeInfo_Location, _GeneratedCodeInfo = class Ee extends Message {
  constructor(e) {
    super(), this.annotation = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ee().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ee().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ee().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(Ee, e, t);
  }
};
_GeneratedCodeInfo.runtime = proto2, _GeneratedCodeInfo.typeName = "google.protobuf.GeneratedCodeInfo", _GeneratedCodeInfo.fields = proto2.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: GeneratedCodeInfo_Annotation, repeated: true }]);
var GeneratedCodeInfo = _GeneratedCodeInfo, _GeneratedCodeInfo_Annotation = class ye extends Message {
  constructor(e) {
    super(), this.path = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ye().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ye().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ye().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(ye, e, t);
  }
};
_GeneratedCodeInfo_Annotation.runtime = proto2, _GeneratedCodeInfo_Annotation.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", _GeneratedCodeInfo_Annotation.fields = proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: proto2.getEnumType(GeneratedCodeInfo_Annotation_Semantic), opt: true }]);
var GeneratedCodeInfo_Annotation = _GeneratedCodeInfo_Annotation, GeneratedCodeInfo_Annotation_Semantic = ((n) => (n[n.NONE = 0] = "NONE", n[n.SET = 1] = "SET", n[n.ALIAS = 2] = "ALIAS", n))(GeneratedCodeInfo_Annotation_Semantic || {});
proto2.util.setEnumType(GeneratedCodeInfo_Annotation_Semantic, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
var fieldTypeToScalarType = { [FieldDescriptorProto_Type.DOUBLE]: ScalarType.DOUBLE, [FieldDescriptorProto_Type.FLOAT]: ScalarType.FLOAT, [FieldDescriptorProto_Type.INT64]: ScalarType.INT64, [FieldDescriptorProto_Type.UINT64]: ScalarType.UINT64, [FieldDescriptorProto_Type.INT32]: ScalarType.INT32, [FieldDescriptorProto_Type.FIXED64]: ScalarType.FIXED64, [FieldDescriptorProto_Type.FIXED32]: ScalarType.FIXED32, [FieldDescriptorProto_Type.BOOL]: ScalarType.BOOL, [FieldDescriptorProto_Type.STRING]: ScalarType.STRING, [FieldDescriptorProto_Type.GROUP]: void 0, [FieldDescriptorProto_Type.MESSAGE]: void 0, [FieldDescriptorProto_Type.BYTES]: ScalarType.BYTES, [FieldDescriptorProto_Type.UINT32]: ScalarType.UINT32, [FieldDescriptorProto_Type.ENUM]: void 0, [FieldDescriptorProto_Type.SFIXED32]: ScalarType.SFIXED32, [FieldDescriptorProto_Type.SFIXED64]: ScalarType.SFIXED64, [FieldDescriptorProto_Type.SINT32]: ScalarType.SINT32, [FieldDescriptorProto_Type.SINT64]: ScalarType.SINT64 }, _Timestamp = class U extends Message {
  constructor(e) {
    super(), this.seconds = protoInt64.zero, this.nanos = 0, proto3.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string") throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${proto3.json.debug(e)}`);
    const a = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!a) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const s = Date.parse(a[1] + "-" + a[2] + "-" + a[3] + "T" + a[4] + ":" + a[5] + ":" + a[6] + (a[8] ? a[8] : "Z"));
    if (Number.isNaN(s)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if (s < Date.parse("0001-01-01T00:00:00Z") || s > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds = protoInt64.parse(s / 1e3), this.nanos = 0, a[7] && (this.nanos = parseInt("1" + a[7] + "0".repeat(9 - a[7].length)) - 1e9), this;
  }
  toJson(e) {
    const t = Number(this.seconds) * 1e3;
    if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let a = "Z";
    if (this.nanos > 0) {
      const s = (this.nanos + 1e9).toString().substring(1);
      s.substring(3) === "000000" ? a = "." + s.substring(0, 3) + "Z" : s.substring(6) === "000" ? a = "." + s.substring(0, 6) + "Z" : a = "." + s + "Z";
    }
    return new Date(t).toISOString().replace(".000Z", a);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return U.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(e) {
    const t = e.getTime();
    return new U({ seconds: protoInt64.parse(Math.floor(t / 1e3)), nanos: t % 1e3 * 1e6 });
  }
  static fromBinary(e, t) {
    return new U().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new U().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new U().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(U, e, t);
  }
};
_Timestamp.runtime = proto3, _Timestamp.typeName = "google.protobuf.Timestamp", _Timestamp.fields = proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
var _Duration = class Se extends Message {
  constructor(e) {
    super(), this.seconds = protoInt64.zero, this.nanos = 0, proto3.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string") throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3.json.debug(e)}`);
    const a = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (a === null) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3.json.debug(e)}`);
    const s = Number(a[1]);
    if (s > 315576e6 || s < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3.json.debug(e)}`);
    if (this.seconds = protoInt64.parse(s), typeof a[2] == "string") {
      const r = a[2] + "0".repeat(9 - a[2].length);
      this.nanos = parseInt(r), (s < 0 || Object.is(s, -0)) && (this.nanos = -this.nanos);
    }
    return this;
  }
  toJson(e) {
    if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
    let t = this.seconds.toString();
    if (this.nanos !== 0) {
      let a = Math.abs(this.nanos).toString();
      a = "0".repeat(9 - a.length) + a, a.substring(3) === "000000" ? a = a.substring(0, 3) : a.substring(6) === "000" && (a = a.substring(0, 6)), t += "." + a, this.nanos < 0 && Number(this.seconds) == 0 && (t = "-" + t);
    }
    return t + "s";
  }
  static fromBinary(e, t) {
    return new Se().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Se().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Se().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Se, e, t);
  }
};
_Duration.runtime = proto3, _Duration.typeName = "google.protobuf.Duration", _Duration.fields = proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
var _Any = class F extends Message {
  constructor(e) {
    super(), this.typeUrl = "", this.value = new Uint8Array(0), proto3.util.initPartial(e, this);
  }
  toJson(e) {
    if (this.typeUrl === "") return {};
    const t = this.typeUrlToName(this.typeUrl), a = e?.typeRegistry?.findMessage(t);
    if (!a) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
    let r = a.fromBinary(this.value).toJson(e);
    return (t.startsWith("google.protobuf.") || r === null || Array.isArray(r) || typeof r != "object") && (r = { value: r }), r["@type"] = this.typeUrl, r;
  }
  fromJson(e, t) {
    if (e === null || Array.isArray(e) || typeof e != "object") throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${e === null ? "null" : Array.isArray(e) ? "array" : typeof e}`);
    if (Object.keys(e).length == 0) return this;
    const a = e["@type"];
    if (typeof a != "string" || a == "") throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
    const s = this.typeUrlToName(a), r = t?.typeRegistry?.findMessage(s);
    if (!r) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${a} is not in the type registry`);
    let o;
    if (s.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) o = r.fromJson(e.value, t);
    else {
      const i = Object.assign({}, e);
      delete i["@type"], o = r.fromJson(i, t);
    }
    return this.packFrom(o), this;
  }
  packFrom(e) {
    this.value = e.toBinary(), this.typeUrl = this.typeNameToUrl(e.getType().typeName);
  }
  unpackTo(e) {
    return this.is(e.getType()) ? (e.fromBinary(this.value), true) : false;
  }
  unpack(e) {
    if (this.typeUrl === "") return;
    const t = e.findMessage(this.typeUrlToName(this.typeUrl));
    if (t) return t.fromBinary(this.value);
  }
  is(e) {
    if (this.typeUrl === "") return false;
    const t = this.typeUrlToName(this.typeUrl);
    let a = "";
    return typeof e == "string" ? a = e : a = e.typeName, t === a;
  }
  typeNameToUrl(e) {
    return `type.googleapis.com/${e}`;
  }
  typeUrlToName(e) {
    if (!e.length) throw new Error(`invalid type url: ${e}`);
    const t = e.lastIndexOf("/"), a = t >= 0 ? e.substring(t + 1) : e;
    if (!a.length) throw new Error(`invalid type url: ${e}`);
    return a;
  }
  static pack(e) {
    const t = new F();
    return t.packFrom(e), t;
  }
  static fromBinary(e, t) {
    return new F().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new F().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new F().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(F, e, t);
  }
};
_Any.runtime = proto3, _Any.typeName = "google.protobuf.Any", _Any.fields = proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
var Any = _Any, _Empty = class be extends Message {
  constructor(e) {
    super(), proto3.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new be().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new be().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new be().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(be, e, t);
  }
};
_Empty.runtime = proto3, _Empty.typeName = "google.protobuf.Empty", _Empty.fields = proto3.util.newFieldList(() => []);
var _FieldMask = class Ae extends Message {
  constructor(e) {
    super(), this.paths = [], proto3.util.initPartial(e, this);
  }
  toJson(e) {
    function t(a) {
      let s = false;
      const r = [];
      for (let o = 0; o < a.length; o++) {
        let i = a.charAt(o);
        switch (i) {
          case "_":
            s = true;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            r.push(i), s = false;
            break;
          default:
            s && (s = false, i = i.toUpperCase()), r.push(i);
            break;
        }
      }
      return r.join("");
    }
    return this.paths.map((a) => {
      if (a.match(/_[0-9]?_/g) || a.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + a + '" is irreversible');
      return t(a);
    }).join(",");
  }
  fromJson(e, t) {
    if (typeof e != "string") throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + proto3.json.debug(e));
    if (e === "") return this;
    function a(s) {
      if (s.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
      const r = s.replace(/[A-Z]/g, (o) => "_" + o.toLowerCase());
      return r[0] === "_" ? r.substring(1) : r;
    }
    return this.paths = e.split(",").map(a), this;
  }
  static fromBinary(e, t) {
    return new Ae().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ae().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ae().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Ae, e, t);
  }
};
_FieldMask.runtime = proto3, _FieldMask.typeName = "google.protobuf.FieldMask", _FieldMask.fields = proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
var NullValue = ((n) => (n[n.NULL_VALUE = 0] = "NULL_VALUE", n))(NullValue || {});
proto3.util.setEnumType(NullValue, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
var _Struct = class Ne extends Message {
  constructor(e) {
    super(), this.fields = {}, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    const t = {};
    for (const [a, s] of Object.entries(this.fields)) t[a] = s.toJson(e);
    return t;
  }
  fromJson(e, t) {
    if (typeof e != "object" || e == null || Array.isArray(e)) throw new Error("cannot decode google.protobuf.Struct from JSON " + proto3.json.debug(e));
    for (const [a, s] of Object.entries(e)) this.fields[a] = Value.fromJson(s);
    return this;
  }
  static fromBinary(e, t) {
    return new Ne().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ne().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ne().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Ne, e, t);
  }
};
_Struct.runtime = proto3, _Struct.typeName = "google.protobuf.Struct", _Struct.fields = proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: Value } }]);
var Struct = _Struct, _Value = class Re extends Message {
  constructor(e) {
    super(), this.kind = { case: void 0 }, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    switch (this.kind.case) {
      case "nullValue":
        return null;
      case "numberValue":
        if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
        return this.kind.value;
      case "boolValue":
        return this.kind.value;
      case "stringValue":
        return this.kind.value;
      case "structValue":
      case "listValue":
        return this.kind.value.toJson({ ...e, emitDefaultValues: true });
    }
    throw new Error("google.protobuf.Value must have a value");
  }
  fromJson(e, t) {
    switch (typeof e) {
      case "number":
        this.kind = { case: "numberValue", value: e };
        break;
      case "string":
        this.kind = { case: "stringValue", value: e };
        break;
      case "boolean":
        this.kind = { case: "boolValue", value: e };
        break;
      case "object":
        e === null ? this.kind = { case: "nullValue", value: 0 } : Array.isArray(e) ? this.kind = { case: "listValue", value: ListValue.fromJson(e) } : this.kind = { case: "structValue", value: Struct.fromJson(e) };
        break;
      default:
        throw new Error("cannot decode google.protobuf.Value from JSON " + proto3.json.debug(e));
    }
    return this;
  }
  static fromBinary(e, t) {
    return new Re().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Re().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Re().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Re, e, t);
  }
};
_Value.runtime = proto3, _Value.typeName = "google.protobuf.Value", _Value.fields = proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: proto3.getEnumType(NullValue), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: Struct, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: ListValue, oneof: "kind" }]);
var Value = _Value, _ListValue = class we extends Message {
  constructor(e) {
    super(), this.values = [], proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return this.values.map((t) => t.toJson());
  }
  fromJson(e, t) {
    if (!Array.isArray(e)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + proto3.json.debug(e));
    for (let a of e) this.values.push(Value.fromJson(a));
    return this;
  }
  static fromBinary(e, t) {
    return new we().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new we().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new we().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(we, e, t);
  }
};
_ListValue.runtime = proto3, _ListValue.typeName = "google.protobuf.ListValue", _ListValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: Value, repeated: true }]);
var ListValue = _ListValue, _DoubleValue = class Ce extends Message {
  constructor(e) {
    super(), this.value = 0, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.DOUBLE, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = proto3.json.readScalar(ScalarType.DOUBLE, e);
    } catch (a) {
      let s = 'cannot decode message google.protobuf.DoubleValue from JSON"';
      throw a instanceof Error && a.message.length > 0 && (s += `: ${a.message}`), new Error(s);
    }
    return this;
  }
  static fromBinary(e, t) {
    return new Ce().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ce().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ce().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Ce, e, t);
  }
};
_DoubleValue.runtime = proto3, _DoubleValue.typeName = "google.protobuf.DoubleValue", _DoubleValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), _DoubleValue.fieldWrapper = { wrapField(n) {
  return new _DoubleValue({ value: n });
}, unwrapField(n) {
  return n.value;
} };
var _FloatValue = class Ie extends Message {
  constructor(e) {
    super(), this.value = 0, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.FLOAT, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = proto3.json.readScalar(ScalarType.FLOAT, e);
    } catch (a) {
      let s = 'cannot decode message google.protobuf.FloatValue from JSON"';
      throw a instanceof Error && a.message.length > 0 && (s += `: ${a.message}`), new Error(s);
    }
    return this;
  }
  static fromBinary(e, t) {
    return new Ie().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ie().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ie().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Ie, e, t);
  }
};
_FloatValue.runtime = proto3, _FloatValue.typeName = "google.protobuf.FloatValue", _FloatValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), _FloatValue.fieldWrapper = { wrapField(n) {
  return new _FloatValue({ value: n });
}, unwrapField(n) {
  return n.value;
} };
var _Int64Value = class Me extends Message {
  constructor(e) {
    super(), this.value = protoInt64.zero, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.INT64, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = proto3.json.readScalar(ScalarType.INT64, e);
    } catch (a) {
      let s = 'cannot decode message google.protobuf.Int64Value from JSON"';
      throw a instanceof Error && a.message.length > 0 && (s += `: ${a.message}`), new Error(s);
    }
    return this;
  }
  static fromBinary(e, t) {
    return new Me().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Me().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Me().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Me, e, t);
  }
};
_Int64Value.runtime = proto3, _Int64Value.typeName = "google.protobuf.Int64Value", _Int64Value.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), _Int64Value.fieldWrapper = { wrapField(n) {
  return new _Int64Value({ value: n });
}, unwrapField(n) {
  return n.value;
} };
var _UInt64Value = class Oe extends Message {
  constructor(e) {
    super(), this.value = protoInt64.zero, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.UINT64, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = proto3.json.readScalar(ScalarType.UINT64, e);
    } catch (a) {
      let s = 'cannot decode message google.protobuf.UInt64Value from JSON"';
      throw a instanceof Error && a.message.length > 0 && (s += `: ${a.message}`), new Error(s);
    }
    return this;
  }
  static fromBinary(e, t) {
    return new Oe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Oe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Oe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Oe, e, t);
  }
};
_UInt64Value.runtime = proto3, _UInt64Value.typeName = "google.protobuf.UInt64Value", _UInt64Value.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), _UInt64Value.fieldWrapper = { wrapField(n) {
  return new _UInt64Value({ value: n });
}, unwrapField(n) {
  return n.value;
} };
var _Int32Value = class De extends Message {
  constructor(e) {
    super(), this.value = 0, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.INT32, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = proto3.json.readScalar(ScalarType.INT32, e);
    } catch (a) {
      let s = 'cannot decode message google.protobuf.Int32Value from JSON"';
      throw a instanceof Error && a.message.length > 0 && (s += `: ${a.message}`), new Error(s);
    }
    return this;
  }
  static fromBinary(e, t) {
    return new De().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new De().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new De().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(De, e, t);
  }
};
_Int32Value.runtime = proto3, _Int32Value.typeName = "google.protobuf.Int32Value", _Int32Value.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), _Int32Value.fieldWrapper = { wrapField(n) {
  return new _Int32Value({ value: n });
}, unwrapField(n) {
  return n.value;
} };
var _UInt32Value = class Pe extends Message {
  constructor(e) {
    super(), this.value = 0, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.UINT32, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = proto3.json.readScalar(ScalarType.UINT32, e);
    } catch (a) {
      let s = 'cannot decode message google.protobuf.UInt32Value from JSON"';
      throw a instanceof Error && a.message.length > 0 && (s += `: ${a.message}`), new Error(s);
    }
    return this;
  }
  static fromBinary(e, t) {
    return new Pe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Pe, e, t);
  }
};
_UInt32Value.runtime = proto3, _UInt32Value.typeName = "google.protobuf.UInt32Value", _UInt32Value.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), _UInt32Value.fieldWrapper = { wrapField(n) {
  return new _UInt32Value({ value: n });
}, unwrapField(n) {
  return n.value;
} };
var _BoolValue = class Le extends Message {
  constructor(e) {
    super(), this.value = false, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.BOOL, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = proto3.json.readScalar(ScalarType.BOOL, e);
    } catch (a) {
      let s = 'cannot decode message google.protobuf.BoolValue from JSON"';
      throw a instanceof Error && a.message.length > 0 && (s += `: ${a.message}`), new Error(s);
    }
    return this;
  }
  static fromBinary(e, t) {
    return new Le().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Le().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Le().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Le, e, t);
  }
};
_BoolValue.runtime = proto3, _BoolValue.typeName = "google.protobuf.BoolValue", _BoolValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), _BoolValue.fieldWrapper = { wrapField(n) {
  return new _BoolValue({ value: n });
}, unwrapField(n) {
  return n.value;
} };
var _StringValue = class Ue extends Message {
  constructor(e) {
    super(), this.value = "", proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.STRING, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = proto3.json.readScalar(ScalarType.STRING, e);
    } catch (a) {
      let s = 'cannot decode message google.protobuf.StringValue from JSON"';
      throw a instanceof Error && a.message.length > 0 && (s += `: ${a.message}`), new Error(s);
    }
    return this;
  }
  static fromBinary(e, t) {
    return new Ue().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ue().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ue().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Ue, e, t);
  }
};
_StringValue.runtime = proto3, _StringValue.typeName = "google.protobuf.StringValue", _StringValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), _StringValue.fieldWrapper = { wrapField(n) {
  return new _StringValue({ value: n });
}, unwrapField(n) {
  return n.value;
} };
var _BytesValue = class xe extends Message {
  constructor(e) {
    super(), this.value = new Uint8Array(0), proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.BYTES, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = proto3.json.readScalar(ScalarType.BYTES, e);
    } catch (a) {
      let s = 'cannot decode message google.protobuf.BytesValue from JSON"';
      throw a instanceof Error && a.message.length > 0 && (s += `: ${a.message}`), new Error(s);
    }
    return this;
  }
  static fromBinary(e, t) {
    return new xe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(xe, e, t);
  }
};
_BytesValue.runtime = proto3, _BytesValue.typeName = "google.protobuf.BytesValue", _BytesValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), _BytesValue.fieldWrapper = { wrapField(n) {
  return new _BytesValue({ value: n });
}, unwrapField(n) {
  return n.value;
} };
var wkEnums = [getEnumType(NullValue)], _Version = class Be extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Be().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Be().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Be().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(Be, e, t);
  }
};
_Version.runtime = proto2, _Version.typeName = "google.protobuf.compiler.Version", _Version.fields = proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
var Version = _Version, _CodeGeneratorRequest = class Fe extends Message {
  constructor(e) {
    super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Fe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(Fe, e, t);
  }
};
_CodeGeneratorRequest.runtime = proto2, _CodeGeneratorRequest.typeName = "google.protobuf.compiler.CodeGeneratorRequest", _CodeGeneratorRequest.fields = proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: Version, opt: true }]);
var _CodeGeneratorResponse = class Ge extends Message {
  constructor(e) {
    super(), this.file = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ge().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ge().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ge().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(Ge, e, t);
  }
};
_CodeGeneratorResponse.runtime = proto2, _CodeGeneratorResponse.typeName = "google.protobuf.compiler.CodeGeneratorResponse", _CodeGeneratorResponse.fields = proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: CodeGeneratorResponse_File, repeated: true }]);
var CodeGeneratorResponse_Feature = ((n) => (n[n.NONE = 0] = "NONE", n[n.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", n[n.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", n))(CodeGeneratorResponse_Feature || {});
proto2.util.setEnumType(CodeGeneratorResponse_Feature, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
var _CodeGeneratorResponse_File = class qe extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new qe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto2.util.equals(qe, e, t);
  }
};
_CodeGeneratorResponse_File.runtime = proto2, _CodeGeneratorResponse_File.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", _CodeGeneratorResponse_File.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: GeneratedCodeInfo, opt: true }]);
var CodeGeneratorResponse_File = _CodeGeneratorResponse_File, _SourceContext = class Je extends Message {
  constructor(e) {
    super(), this.fileName = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Je().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Je().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Je().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Je, e, t);
  }
};
_SourceContext.runtime = proto3, _SourceContext.typeName = "google.protobuf.SourceContext", _SourceContext.fields = proto3.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
var SourceContext = _SourceContext, Syntax = ((n) => (n[n.PROTO2 = 0] = "PROTO2", n[n.PROTO3 = 1] = "PROTO3", n[n.EDITIONS = 2] = "EDITIONS", n))(Syntax || {});
proto3.util.setEnumType(Syntax, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
var _Type = class $e extends Message {
  constructor(e) {
    super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new $e().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $e().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $e().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals($e, e, t);
  }
};
_Type.runtime = proto3, _Type.typeName = "google.protobuf.Type", _Type.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: Field, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: Option, repeated: true }, { no: 5, name: "source_context", kind: "message", T: SourceContext }, { no: 6, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
var _Field = class We extends Message {
  constructor(e) {
    super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new We().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new We().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new We().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(We, e, t);
  }
};
_Field.runtime = proto3, _Field.typeName = "google.protobuf.Field", _Field.fields = proto3.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(Field_Kind) }, { no: 2, name: "cardinality", kind: "enum", T: proto3.getEnumType(Field_Cardinality) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: Option, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]);
var Field = _Field, Field_Kind = ((n) => (n[n.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", n[n.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", n[n.TYPE_FLOAT = 2] = "TYPE_FLOAT", n[n.TYPE_INT64 = 3] = "TYPE_INT64", n[n.TYPE_UINT64 = 4] = "TYPE_UINT64", n[n.TYPE_INT32 = 5] = "TYPE_INT32", n[n.TYPE_FIXED64 = 6] = "TYPE_FIXED64", n[n.TYPE_FIXED32 = 7] = "TYPE_FIXED32", n[n.TYPE_BOOL = 8] = "TYPE_BOOL", n[n.TYPE_STRING = 9] = "TYPE_STRING", n[n.TYPE_GROUP = 10] = "TYPE_GROUP", n[n.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", n[n.TYPE_BYTES = 12] = "TYPE_BYTES", n[n.TYPE_UINT32 = 13] = "TYPE_UINT32", n[n.TYPE_ENUM = 14] = "TYPE_ENUM", n[n.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", n[n.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", n[n.TYPE_SINT32 = 17] = "TYPE_SINT32", n[n.TYPE_SINT64 = 18] = "TYPE_SINT64", n))(Field_Kind || {});
proto3.util.setEnumType(Field_Kind, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
var Field_Cardinality = ((n) => (n[n.UNKNOWN = 0] = "UNKNOWN", n[n.OPTIONAL = 1] = "OPTIONAL", n[n.REQUIRED = 2] = "REQUIRED", n[n.REPEATED = 3] = "REPEATED", n))(Field_Cardinality || {});
proto3.util.setEnumType(Field_Cardinality, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
var _Enum = class Ve extends Message {
  constructor(e) {
    super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ve().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ve().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ve().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Ve, e, t);
  }
};
_Enum.runtime = proto3, _Enum.typeName = "google.protobuf.Enum", _Enum.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: EnumValue, repeated: true }, { no: 3, name: "options", kind: "message", T: Option, repeated: true }, { no: 4, name: "source_context", kind: "message", T: SourceContext }, { no: 5, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
var _EnumValue = class Ye extends Message {
  constructor(e) {
    super(), this.name = "", this.number = 0, this.options = [], proto3.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ye().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ye().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ye().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Ye, e, t);
  }
};
_EnumValue.runtime = proto3, _EnumValue.typeName = "google.protobuf.EnumValue", _EnumValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: Option, repeated: true }]);
var EnumValue = _EnumValue, _Option = class je extends Message {
  constructor(e) {
    super(), this.name = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new je().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new je().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new je().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(je, e, t);
  }
};
_Option.runtime = proto3, _Option.typeName = "google.protobuf.Option", _Option.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: Any }]);
var Option = _Option, _Api = class ze extends Message {
  constructor(e) {
    super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = Syntax.PROTO2, proto3.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ze().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ze().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ze().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(ze, e, t);
  }
};
_Api.runtime = proto3, _Api.typeName = "google.protobuf.Api", _Api.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: Method, repeated: true }, { no: 3, name: "options", kind: "message", T: Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: SourceContext }, { no: 6, name: "mixins", kind: "message", T: Mixin, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) }]);
var _Method = class Ke extends Message {
  constructor(e) {
    super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = Syntax.PROTO2, proto3.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ke().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ke().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ke().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(Ke, e, t);
  }
};
_Method.runtime = proto3, _Method.typeName = "google.protobuf.Method", _Method.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) }]);
var Method = _Method, _Mixin = class He extends Message {
  constructor(e) {
    super(), this.name = "", this.root = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new He().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new He().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new He().fromJsonString(e, t);
  }
  static equals(e, t) {
    return proto3.util.equals(He, e, t);
  }
};
_Mixin.runtime = proto3, _Mixin.typeName = "google.protobuf.Mixin", _Mixin.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
var Mixin = _Mixin, SubagentExecutionEnvironment = proto3.makeEnum("agent.v1.SubagentExecutionEnvironment", [{ no: 0, name: "SUBAGENT_EXECUTION_ENVIRONMENT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUBAGENT_EXECUTION_ENVIRONMENT_LOCAL", localName: "LOCAL" }, { no: 2, name: "SUBAGENT_EXECUTION_ENVIRONMENT_CLOUD", localName: "CLOUD" }]), SubagentBackgroundReason = proto3.makeEnum("agent.v1.SubagentBackgroundReason", [{ no: 0, name: "SUBAGENT_BACKGROUND_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUBAGENT_BACKGROUND_REASON_AGENT_REQUEST", localName: "AGENT_REQUEST" }, { no: 2, name: "SUBAGENT_BACKGROUND_REASON_USER_REQUEST", localName: "USER_REQUEST" }, { no: 3, name: "SUBAGENT_BACKGROUND_REASON_QUEUED_FOLLOW_UP", localName: "QUEUED_FOLLOW_UP" }]), BackgroundTaskCompletionReason = proto3.makeEnum("agent.v1.BackgroundTaskCompletionReason", [{ no: 0, name: "BACKGROUND_TASK_COMPLETION_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BACKGROUND_TASK_COMPLETION_REASON_TASK_FINISHED", localName: "TASK_FINISHED" }, { no: 2, name: "BACKGROUND_TASK_COMPLETION_REASON_TASK_PROGRESS", localName: "TASK_PROGRESS" }, { no: 3, name: "BACKGROUND_TASK_COMPLETION_REASON_WORKER_REPARENTED", localName: "WORKER_REPARENTED" }, { no: 4, name: "BACKGROUND_TASK_COMPLETION_REASON_WORKER_MESSAGE", localName: "WORKER_MESSAGE" }, { no: 5, name: "BACKGROUND_TASK_COMPLETION_REASON_WORKER_NEEDS_ATTENTION", localName: "WORKER_NEEDS_ATTENTION" }]), TaskMode = proto3.makeEnum("agent.v1.TaskMode", [{ no: 0, name: "TASK_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TASK_MODE_AGENT", localName: "AGENT" }, { no: 2, name: "TASK_MODE_PLAN", localName: "PLAN" }]), SubagentType = proto3.makeMessageType("agent.v1.SubagentType", () => [{ no: 1, name: "unspecified", kind: "message", T: SubagentTypeUnspecified, oneof: "type" }, { no: 2, name: "computer_use", kind: "message", T: SubagentTypeComputerUse, oneof: "type" }, { no: 3, name: "custom", kind: "message", T: SubagentTypeCustom, oneof: "type" }, { no: 4, name: "explore", kind: "message", T: SubagentTypeExplore, oneof: "type" }, { no: 5, name: "media_review", kind: "message", T: SubagentTypeMediaReview, oneof: "type" }, { no: 6, name: "bash", kind: "message", T: SubagentTypeBash, oneof: "type" }, { no: 7, name: "browser_use", kind: "message", T: SubagentTypeBrowserUse, oneof: "type" }, { no: 8, name: "shell", kind: "message", T: SubagentTypeShell, oneof: "type" }, { no: 9, name: "vm_setup_helper", kind: "message", T: SubagentTypeVmSetupHelper, oneof: "type" }, { no: 10, name: "debug", kind: "message", T: SubagentTypeDebug, oneof: "type" }, { no: 11, name: "cursor_guide", kind: "message", T: SubagentTypeCursorGuide, oneof: "type" }, { no: 12, name: "watch_video", kind: "message", T: SubagentTypeWatchVideo, oneof: "type" }]), SubagentTypeUnspecified = proto3.makeMessageType("agent.v1.SubagentTypeUnspecified", []), SubagentTypeComputerUse = proto3.makeMessageType("agent.v1.SubagentTypeComputerUse", []), SubagentTypeExplore = proto3.makeMessageType("agent.v1.SubagentTypeExplore", []), SubagentTypeMediaReview = proto3.makeMessageType("agent.v1.SubagentTypeMediaReview", []), SubagentTypeBash = proto3.makeMessageType("agent.v1.SubagentTypeBash", []), SubagentTypeShell = proto3.makeMessageType("agent.v1.SubagentTypeShell", []), SubagentTypeBrowserUse = proto3.makeMessageType("agent.v1.SubagentTypeBrowserUse", []), SubagentTypeVmSetupHelper = proto3.makeMessageType("agent.v1.SubagentTypeVmSetupHelper", []), SubagentTypeDebug = proto3.makeMessageType("agent.v1.SubagentTypeDebug", []), SubagentTypeCursorGuide = proto3.makeMessageType("agent.v1.SubagentTypeCursorGuide", []), SubagentTypeWatchVideo = proto3.makeMessageType("agent.v1.SubagentTypeWatchVideo", []), SubagentTypeCustom = proto3.makeMessageType("agent.v1.SubagentTypeCustom", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }]), NetworkPolicyLoggingConfig = proto3.makeMessageType("agent.v1.NetworkPolicyLoggingConfig", () => [{ no: 1, name: "decision_log_path", kind: "scalar", T: 9, opt: true }, { no: 2, name: "log_format", kind: "scalar", T: 9, opt: true }]), NetworkPolicy = proto3.makeMessageType("agent.v1.NetworkPolicy", () => [{ no: 1, name: "version", kind: "scalar", T: 13, opt: true }, { no: 2, name: "default_action", kind: "enum", T: proto3.getEnumType(NetworkPolicy_DefaultAction), opt: true }, { no: 3, name: "deny", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "allow", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "logging", kind: "message", T: NetworkPolicyLoggingConfig, opt: true }]), NetworkPolicy_DefaultAction = proto3.makeEnum("agent.v1.NetworkPolicy.DefaultAction", [{ no: 0, name: "DEFAULT_ACTION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DEFAULT_ACTION_ALLOW", localName: "ALLOW" }, { no: 2, name: "DEFAULT_ACTION_DENY", localName: "DENY" }]), SandboxPolicy = proto3.makeMessageType("agent.v1.SandboxPolicy", () => [{ no: 1, name: "type", kind: "enum", T: proto3.getEnumType(SandboxPolicy_Type) }, { no: 2, name: "network_access", kind: "scalar", T: 8, opt: true }, { no: 3, name: "additional_readwrite_paths", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "additional_readonly_paths", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "debug_output_dir", kind: "scalar", T: 9, opt: true }, { no: 7, name: "disable_tmp_write", kind: "scalar", T: 8, opt: true }, { no: 8, name: "allowlist_escalated", kind: "scalar", T: 8, opt: true }, { no: 9, name: "enable_shared_build_cache", kind: "scalar", T: 8, opt: true }, { no: 10, name: "network_policy", kind: "message", T: NetworkPolicy, opt: true }, { no: 11, name: "network_policy_strict", kind: "scalar", T: 8, opt: true }, { no: 12, name: "capture_denies", kind: "scalar", T: 8, opt: true }, { no: 13, name: "skip_statsig_defaults", kind: "scalar", T: 8, opt: true }, { no: 14, name: "read_boundary", kind: "enum", T: proto3.getEnumType(SandboxPolicy_ReadBoundaryMode) }, { no: 15, name: "additional_read_paths", kind: "scalar", T: 9, repeated: true }]), SandboxPolicy_Type = proto3.makeEnum("agent.v1.SandboxPolicy.Type", [{ no: 0, name: "TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TYPE_INSECURE_NONE", localName: "INSECURE_NONE" }, { no: 2, name: "TYPE_WORKSPACE_READWRITE", localName: "WORKSPACE_READWRITE" }, { no: 3, name: "TYPE_WORKSPACE_READONLY", localName: "WORKSPACE_READONLY" }]), SandboxPolicy_ReadBoundaryMode = proto3.makeEnum("agent.v1.SandboxPolicy.ReadBoundaryMode", [{ no: 0, name: "READ_BOUNDARY_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "READ_BOUNDARY_MODE_SYSTEM", localName: "SYSTEM" }, { no: 2, name: "READ_BOUNDARY_MODE_WORKSPACE", localName: "WORKSPACE" }]), Range = proto3.makeMessageType("agent.v1.Range", () => [{ no: 1, name: "start", kind: "message", T: Position }, { no: 2, name: "end", kind: "message", T: Position }]), Position = proto3.makeMessageType("agent.v1.Position", () => [{ no: 1, name: "line", kind: "scalar", T: 13 }, { no: 2, name: "column", kind: "scalar", T: 13 }]), OutputLocation = proto3.makeMessageType("agent.v1.OutputLocation", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "size_bytes", kind: "scalar", T: 3 }, { no: 3, name: "line_count", kind: "scalar", T: 3 }]), SmartModeApproval = proto3.makeMessageType("agent.v1.SmartModeApproval", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), HookAdditionalContext = proto3.makeMessageType("agent.v1.HookAdditionalContext", () => [{ no: 1, name: "hook_event_name", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }]), TimeoutBehavior = proto3.makeEnum("agent.v1.TimeoutBehavior", [{ no: 0, name: "TIMEOUT_BEHAVIOR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TIMEOUT_BEHAVIOR_CANCEL", localName: "CANCEL" }, { no: 2, name: "TIMEOUT_BEHAVIOR_BACKGROUND", localName: "BACKGROUND" }]), ShellBackgroundReason = proto3.makeEnum("agent.v1.ShellBackgroundReason", [{ no: 0, name: "SHELL_BACKGROUND_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SHELL_BACKGROUND_REASON_TIMEOUT", localName: "TIMEOUT" }, { no: 2, name: "SHELL_BACKGROUND_REASON_USER_REQUEST", localName: "USER_REQUEST" }]), ShellAbortReason = proto3.makeEnum("agent.v1.ShellAbortReason", [{ no: 0, name: "SHELL_ABORT_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SHELL_ABORT_REASON_USER_ABORT", localName: "USER_ABORT" }, { no: 2, name: "SHELL_ABORT_REASON_TIMEOUT", localName: "TIMEOUT" }]), ShellCommandParsingResult = proto3.makeMessageType("agent.v1.ShellCommandParsingResult", () => [{ no: 1, name: "parsing_failed", kind: "scalar", T: 8 }, { no: 2, name: "executable_commands", kind: "message", T: ShellCommandParsingResult_ExecutableCommand, repeated: true }, { no: 3, name: "has_redirects", kind: "scalar", T: 8 }, { no: 4, name: "has_command_substitution", kind: "scalar", T: 8 }, { no: 5, name: "all_redirects_are_dev_null", kind: "scalar", T: 8, opt: true }, { no: 6, name: "redirects", kind: "message", T: ShellCommandParsingResult_Redirect, repeated: true }]), ShellCommandParsingResult_ExecutableCommandArg = proto3.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommandArg", () => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "ShellCommandParsingResult_ExecutableCommandArg" }), ShellCommandParsingResult_ExecutableCommand = proto3.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommand", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "message", T: ShellCommandParsingResult_ExecutableCommandArg, repeated: true }, { no: 3, name: "full_text", kind: "scalar", T: 9 }], { localName: "ShellCommandParsingResult_ExecutableCommand" }), ShellCommandParsingResult_Redirect = proto3.makeMessageType("agent.v1.ShellCommandParsingResult.Redirect", () => [{ no: 1, name: "operator", kind: "scalar", T: 9 }, { no: 2, name: "destination_fds", kind: "scalar", T: 13, repeated: true }, { no: 3, name: "target_node_type", kind: "scalar", T: 9 }, { no: 4, name: "target_text", kind: "scalar", T: 9, opt: true }], { localName: "ShellCommandParsingResult_Redirect" }), CommandClassifierResult = proto3.makeMessageType("agent.v1.CommandClassifierResult", () => [{ no: 1, name: "commands", kind: "message", T: CommandClassifierResult_ClassifiedCommand, repeated: true }, { no: 2, name: "suggested_sandbox_mode", kind: "enum", T: proto3.getEnumType(CommandClassifierResult_SuggestedSandboxMode) }, { no: 3, name: "classification_failed", kind: "scalar", T: 8 }]), CommandClassifierResult_SuggestedSandboxMode = proto3.makeEnum("agent.v1.CommandClassifierResult.SuggestedSandboxMode", [{ no: 0, name: "SUGGESTED_SANDBOX_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUGGESTED_SANDBOX_MODE_SANDBOX", localName: "SANDBOX" }, { no: 2, name: "SUGGESTED_SANDBOX_MODE_NO_SANDBOX", localName: "NO_SANDBOX" }, { no: 3, name: "SUGGESTED_SANDBOX_MODE_UNDETERMINED", localName: "UNDETERMINED" }]), CommandClassifierResult_ClassifiedCommand = proto3.makeMessageType("agent.v1.CommandClassifierResult.ClassifiedCommand", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "arguments", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "suggested_allowlist_entry", kind: "scalar", T: 9, opt: true }, { no: 4, name: "subcommand_tokens", kind: "scalar", T: 9, repeated: true }], { localName: "CommandClassifierResult_ClassifiedCommand" }), ShellOutputNotificationConfig = proto3.makeMessageType("agent.v1.ShellOutputNotificationConfig", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }, { no: 3, name: "debounce", kind: "scalar", T: 1, opt: true }, { no: 4, name: "notification_limit", kind: "scalar", T: 5, opt: true }]), ShellHookApprovalRequirement = proto3.makeMessageType("agent.v1.ShellHookApprovalRequirement", () => [{ no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(ShellHookApprovalRequirement_Kind) }, { no: 2, name: "reason", kind: "scalar", T: 9, opt: true }]), ShellHookApprovalRequirement_Kind = proto3.makeEnum("agent.v1.ShellHookApprovalRequirement.Kind", [{ no: 0, name: "KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KIND_FORCE_PROMPT", localName: "FORCE_PROMPT" }]), ShellArgs = proto3.makeMessageType("agent.v1.ShellArgs", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "timeout", kind: "scalar", T: 5 }, { no: 4, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 5, name: "simple_commands", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "has_input_redirect", kind: "scalar", T: 8 }, { no: 7, name: "has_output_redirect", kind: "scalar", T: 8 }, { no: 8, name: "parsing_result", kind: "message", T: ShellCommandParsingResult }, { no: 9, name: "requested_sandbox_policy", kind: "message", T: SandboxPolicy, opt: true }, { no: 10, name: "file_output_threshold_bytes", kind: "scalar", T: 4, opt: true }, { no: 11, name: "is_background", kind: "scalar", T: 8 }, { no: 12, name: "skip_approval", kind: "scalar", T: 8 }, { no: 13, name: "timeout_behavior", kind: "enum", T: proto3.getEnumType(TimeoutBehavior) }, { no: 14, name: "hard_timeout", kind: "scalar", T: 5, opt: true }, { no: 15, name: "description", kind: "scalar", T: 9, opt: true }, { no: 16, name: "classifier_result", kind: "message", T: CommandClassifierResult, opt: true }, { no: 17, name: "close_stdin", kind: "scalar", T: 8 }, { no: 18, name: "output_notification", kind: "message", T: ShellOutputNotificationConfig, opt: true }, { no: 19, name: "smart_mode_approval", kind: "message", T: SmartModeApproval, opt: true }, { no: 20, name: "hook_approval_requirement", kind: "message", T: ShellHookApprovalRequirement, opt: true }, { no: 21, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 22, name: "admin_command_denylist", kind: "scalar", T: 9, repeated: true }, { no: 23, name: "request_id", kind: "scalar", T: 9, opt: true }, { no: 24, name: "secret_scope_id", kind: "scalar", T: 9, opt: true }]), ShellResult = proto3.makeMessageType("agent.v1.ShellResult", () => [{ no: 1, name: "success", kind: "message", T: ShellSuccess, oneof: "result" }, { no: 2, name: "failure", kind: "message", T: ShellFailure, oneof: "result" }, { no: 3, name: "timeout", kind: "message", T: ShellTimeout, oneof: "result" }, { no: 4, name: "rejected", kind: "message", T: ShellRejected, oneof: "result" }, { no: 5, name: "spawn_error", kind: "message", T: ShellSpawnError, oneof: "result" }, { no: 7, name: "permission_denied", kind: "message", T: ShellPermissionDenied, oneof: "result" }, { no: 101, name: "sandbox_policy", kind: "message", T: SandboxPolicy, opt: true }, { no: 102, name: "is_background", kind: "scalar", T: 8, opt: true }, { no: 103, name: "terminals_folder", kind: "scalar", T: 9, opt: true }, { no: 104, name: "pid", kind: "scalar", T: 13, opt: true }]), ShellOomKill = proto3.makeMessageType("agent.v1.ShellOomKill", () => [{ no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(ShellOomKill_Kind) }, { no: 2, name: "memory_limit_bytes", kind: "scalar", T: 4 }]), ShellOomKill_Kind = proto3.makeEnum("agent.v1.ShellOomKill.Kind", [{ no: 0, name: "KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KIND_COMMAND_KILLED", localName: "COMMAND_KILLED" }, { no: 2, name: "KIND_COMMAND_FAILED", localName: "COMMAND_FAILED" }, { no: 3, name: "KIND_UNCONFIRMED", localName: "UNCONFIRMED" }]), ShellSuccess = proto3.makeMessageType("agent.v1.ShellSuccess", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "exit_code", kind: "scalar", T: 5 }, { no: 4, name: "signal", kind: "scalar", T: 9 }, { no: 5, name: "stdout", kind: "scalar", T: 9 }, { no: 6, name: "stderr", kind: "scalar", T: 9 }, { no: 7, name: "execution_time", kind: "scalar", T: 5 }, { no: 8, name: "output_location", kind: "message", T: OutputLocation, opt: true }, { no: 9, name: "shell_id", kind: "scalar", T: 13, opt: true }, { no: 10, name: "interleaved_output", kind: "scalar", T: 9, opt: true }, { no: 11, name: "pid", kind: "scalar", T: 13, opt: true }, { no: 12, name: "ms_to_wait", kind: "scalar", T: 5, opt: true }, { no: 13, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true }, { no: 14, name: "background_reason", kind: "enum", T: proto3.getEnumType(ShellBackgroundReason), opt: true }, { no: 15, name: "output_head", kind: "scalar", T: 9, opt: true }, { no: 16, name: "output_tail", kind: "scalar", T: 9, opt: true }, { no: 17, name: "elided_chars", kind: "scalar", T: 13, opt: true }]), ShellFailure = proto3.makeMessageType("agent.v1.ShellFailure", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "exit_code", kind: "scalar", T: 5 }, { no: 4, name: "signal", kind: "scalar", T: 9 }, { no: 5, name: "stdout", kind: "scalar", T: 9 }, { no: 6, name: "stderr", kind: "scalar", T: 9 }, { no: 7, name: "execution_time", kind: "scalar", T: 5 }, { no: 8, name: "output_location", kind: "message", T: OutputLocation, opt: true }, { no: 9, name: "interleaved_output", kind: "scalar", T: 9, opt: true }, { no: 10, name: "abort_reason", kind: "enum", T: proto3.getEnumType(ShellAbortReason), opt: true }, { no: 11, name: "aborted", kind: "scalar", T: 8 }, { no: 12, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true }, { no: 13, name: "output_head", kind: "scalar", T: 9, opt: true }, { no: 14, name: "output_tail", kind: "scalar", T: 9, opt: true }, { no: 15, name: "elided_chars", kind: "scalar", T: 13, opt: true }, { no: 16, name: "oom_kill", kind: "message", T: ShellOomKill, opt: true }]), ShellTimeout = proto3.makeMessageType("agent.v1.ShellTimeout", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "timeout_ms", kind: "scalar", T: 5 }]), ShellRejected = proto3.makeMessageType("agent.v1.ShellRejected", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "reason", kind: "scalar", T: 9 }, { no: 4, name: "is_readonly", kind: "scalar", T: 8 }]), ShellPermissionDenied = proto3.makeMessageType("agent.v1.ShellPermissionDenied", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "error", kind: "scalar", T: 9 }, { no: 4, name: "is_readonly", kind: "scalar", T: 8 }]), ShellSpawnError = proto3.makeMessageType("agent.v1.ShellSpawnError", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "error", kind: "scalar", T: 9 }]), ShellToolCall = proto3.makeMessageType("agent.v1.ShellToolCall", () => [{ no: 1, name: "args", kind: "message", T: ShellArgs }, { no: 2, name: "result", kind: "message", T: ShellResult }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }]), DeleteArgs = proto3.makeMessageType("agent.v1.DeleteArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), DeleteResult = proto3.makeMessageType("agent.v1.DeleteResult", () => [{ no: 1, name: "success", kind: "message", T: DeleteSuccess, oneof: "result" }, { no: 2, name: "file_not_found", kind: "message", T: DeleteFileNotFound, oneof: "result" }, { no: 3, name: "not_file", kind: "message", T: DeleteNotFile, oneof: "result" }, { no: 4, name: "permission_denied", kind: "message", T: DeletePermissionDenied, oneof: "result" }, { no: 5, name: "file_busy", kind: "message", T: DeleteFileBusy, oneof: "result" }, { no: 6, name: "rejected", kind: "message", T: DeleteRejected, oneof: "result" }, { no: 7, name: "error", kind: "message", T: DeleteError, oneof: "result" }]), DeleteSuccess = proto3.makeMessageType("agent.v1.DeleteSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "deleted_file", kind: "scalar", T: 9 }, { no: 3, name: "file_size", kind: "scalar", T: 3 }, { no: 4, name: "prev_content", kind: "scalar", T: 9 }]), DeleteFileNotFound = proto3.makeMessageType("agent.v1.DeleteFileNotFound", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), DeleteNotFile = proto3.makeMessageType("agent.v1.DeleteNotFile", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "actual_type", kind: "scalar", T: 9 }]), DeletePermissionDenied = proto3.makeMessageType("agent.v1.DeletePermissionDenied", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "client_visible_error", kind: "scalar", T: 9 }, { no: 3, name: "is_readonly", kind: "scalar", T: 8 }]), DeleteFileBusy = proto3.makeMessageType("agent.v1.DeleteFileBusy", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), DeleteRejected = proto3.makeMessageType("agent.v1.DeleteRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), DeleteError = proto3.makeMessageType("agent.v1.DeleteError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), DeleteToolCall = proto3.makeMessageType("agent.v1.DeleteToolCall", () => [{ no: 1, name: "args", kind: "message", T: DeleteArgs }, { no: 2, name: "result", kind: "message", T: DeleteResult }]), GlobToolArgs = proto3.makeMessageType("agent.v1.GlobToolArgs", () => [{ no: 1, name: "target_directory", kind: "scalar", T: 9, opt: true }, { no: 2, name: "glob_pattern", kind: "scalar", T: 9 }]), GlobToolResult = proto3.makeMessageType("agent.v1.GlobToolResult", () => [{ no: 1, name: "success", kind: "message", T: GlobToolSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: GlobToolError, oneof: "result" }]), GlobToolError = proto3.makeMessageType("agent.v1.GlobToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), GlobToolSuccess = proto3.makeMessageType("agent.v1.GlobToolSuccess", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "files", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "total_files", kind: "scalar", T: 5 }, { no: 5, name: "client_truncated", kind: "scalar", T: 8 }, { no: 6, name: "ripgrep_truncated", kind: "scalar", T: 8 }]), GlobToolCall = proto3.makeMessageType("agent.v1.GlobToolCall", () => [{ no: 1, name: "args", kind: "message", T: GlobToolArgs }, { no: 2, name: "result", kind: "message", T: GlobToolResult }]), GrepArgs = proto3.makeMessageType("agent.v1.GrepArgs", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "glob", kind: "scalar", T: 9, opt: true }, { no: 4, name: "output_mode", kind: "scalar", T: 9, opt: true }, { no: 5, name: "context_before", kind: "scalar", T: 5, opt: true }, { no: 6, name: "context_after", kind: "scalar", T: 5, opt: true }, { no: 7, name: "context", kind: "scalar", T: 5, opt: true }, { no: 8, name: "case_insensitive", kind: "scalar", T: 8, opt: true }, { no: 9, name: "type", kind: "scalar", T: 9, opt: true }, { no: 10, name: "head_limit", kind: "scalar", T: 5, opt: true }, { no: 11, name: "multiline", kind: "scalar", T: 8, opt: true }, { no: 12, name: "sort", kind: "scalar", T: 9, opt: true }, { no: 13, name: "sort_ascending", kind: "scalar", T: 8, opt: true }, { no: 14, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 15, name: "sandbox_policy", kind: "message", T: SandboxPolicy, opt: true }, { no: 16, name: "offset", kind: "scalar", T: 5, opt: true }]), GrepResult = proto3.makeMessageType("agent.v1.GrepResult", () => [{ no: 1, name: "success", kind: "message", T: GrepSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: GrepError, oneof: "result" }]), GrepError = proto3.makeMessageType("agent.v1.GrepError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), GrepSuccess = proto3.makeMessageType("agent.v1.GrepSuccess", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "output_mode", kind: "scalar", T: 9 }, { no: 4, name: "workspace_results", kind: "map", K: 9, V: { kind: "message", T: GrepUnionResult } }, { no: 5, name: "active_editor_result", kind: "message", T: GrepUnionResult, opt: true }]), GrepUnionResult = proto3.makeMessageType("agent.v1.GrepUnionResult", () => [{ no: 1, name: "count", kind: "message", T: GrepCountResult, oneof: "result" }, { no: 2, name: "files", kind: "message", T: GrepFilesResult, oneof: "result" }, { no: 3, name: "content", kind: "message", T: GrepContentResult, oneof: "result" }]), GrepCountResult = proto3.makeMessageType("agent.v1.GrepCountResult", () => [{ no: 1, name: "counts", kind: "message", T: GrepFileCount, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "total_matches", kind: "scalar", T: 5 }, { no: 4, name: "client_truncated", kind: "scalar", T: 8 }, { no: 5, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), GrepFileCount = proto3.makeMessageType("agent.v1.GrepFileCount", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "count", kind: "scalar", T: 5 }]), GrepFilesResult = proto3.makeMessageType("agent.v1.GrepFilesResult", () => [{ no: 1, name: "files", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "client_truncated", kind: "scalar", T: 8 }, { no: 4, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 5, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 6, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), GrepContentResult = proto3.makeMessageType("agent.v1.GrepContentResult", () => [{ no: 1, name: "matches", kind: "message", T: GrepFileMatch, repeated: true }, { no: 2, name: "total_lines", kind: "scalar", T: 5 }, { no: 3, name: "total_matched_lines", kind: "scalar", T: 5 }, { no: 4, name: "client_truncated", kind: "scalar", T: 8 }, { no: 5, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), GrepFileMatch = proto3.makeMessageType("agent.v1.GrepFileMatch", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "matches", kind: "message", T: GrepContentMatch, repeated: true }]), GrepContentMatch = proto3.makeMessageType("agent.v1.GrepContentMatch", () => [{ no: 1, name: "line_number", kind: "scalar", T: 5 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "content_truncated", kind: "scalar", T: 8 }, { no: 4, name: "is_context_line", kind: "scalar", T: 8 }]), GrepToolCall = proto3.makeMessageType("agent.v1.GrepToolCall", () => [{ no: 1, name: "args", kind: "message", T: GrepArgs }, { no: 2, name: "result", kind: "message", T: GrepResult }]), CursorRuleSource = proto3.makeEnum("agent.v1.CursorRuleSource", [{ no: 0, name: "CURSOR_RULE_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CURSOR_RULE_SOURCE_TEAM", localName: "TEAM" }, { no: 2, name: "CURSOR_RULE_SOURCE_USER", localName: "USER" }]), CursorRuleTypeGlobal = proto3.makeMessageType("agent.v1.CursorRuleTypeGlobal", []), CursorRuleTypeFileGlobs = proto3.makeMessageType("agent.v1.CursorRuleTypeFileGlobs", () => [{ no: 1, name: "globs", kind: "scalar", T: 9, repeated: true }]), CursorRuleTypeAgentFetched = proto3.makeMessageType("agent.v1.CursorRuleTypeAgentFetched", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }]), CursorRuleTypeManuallyAttached = proto3.makeMessageType("agent.v1.CursorRuleTypeManuallyAttached", []), CursorRuleType = proto3.makeMessageType("agent.v1.CursorRuleType", () => [{ no: 1, name: "global", kind: "message", T: CursorRuleTypeGlobal, oneof: "type" }, { no: 2, name: "file_globbed", kind: "message", T: CursorRuleTypeFileGlobs, oneof: "type" }, { no: 3, name: "agent_fetched", kind: "message", T: CursorRuleTypeAgentFetched, oneof: "type" }, { no: 4, name: "manually_attached", kind: "message", T: CursorRuleTypeManuallyAttached, oneof: "type" }]), CursorRule = proto3.makeMessageType("agent.v1.CursorRule", () => [{ no: 1, name: "full_path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "type", kind: "message", T: CursorRuleType }, { no: 4, name: "source", kind: "enum", T: proto3.getEnumType(CursorRuleSource) }, { no: 5, name: "git_remote_origin", kind: "scalar", T: 9, opt: true }, { no: 6, name: "parse_error", kind: "scalar", T: 9, opt: true }, { no: 7, name: "environments", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "disabled_environments", kind: "scalar", T: 9, repeated: true }, { no: 9, name: "plugin", kind: "scalar", T: 9, opt: true }, { no: 10, name: "marketplace", kind: "scalar", T: 9, opt: true }, { no: 11, name: "plugin_id", kind: "scalar", T: 9, opt: true }, { no: 12, name: "marketplace_id", kind: "scalar", T: 9, opt: true }, { no: 13, name: "scoped_to", kind: "scalar", T: 9, repeated: true }, { no: 14, name: "frontmatter", kind: "scalar", T: 9 }, { no: 15, name: "is_required", kind: "scalar", T: 8, opt: true }]), ReadToolCall = proto3.makeMessageType("agent.v1.ReadToolCall", () => [{ no: 1, name: "args", kind: "message", T: ReadToolArgs }, { no: 2, name: "result", kind: "message", T: ReadToolResult }]), ReadToolArgs = proto3.makeMessageType("agent.v1.ReadToolArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "offset", kind: "scalar", T: 5, opt: true }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }, { no: 5, name: "include_line_numbers", kind: "scalar", T: 8, opt: true }]), ReadToolResult = proto3.makeMessageType("agent.v1.ReadToolResult", () => [{ no: 1, name: "success", kind: "message", T: ReadToolSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ReadToolError, oneof: "result" }]), ReadRange = proto3.makeMessageType("agent.v1.ReadRange", () => [{ no: 1, name: "start_line", kind: "scalar", T: 13 }, { no: 2, name: "end_line", kind: "scalar", T: 13 }]), ReadToolSuccess = proto3.makeMessageType("agent.v1.ReadToolSuccess", () => [{ no: 1, name: "content", kind: "scalar", T: 9, oneof: "output" }, { no: 6, name: "data", kind: "scalar", T: 12, oneof: "output" }, { no: 9, name: "data_blob_id", kind: "scalar", T: 12, oneof: "output" }, { no: 10, name: "content_blob_id", kind: "scalar", T: 12, oneof: "output" }, { no: 2, name: "is_empty", kind: "scalar", T: 8 }, { no: 3, name: "exceeded_limit", kind: "scalar", T: 8 }, { no: 4, name: "total_lines", kind: "scalar", T: 13 }, { no: 5, name: "file_size", kind: "scalar", T: 13 }, { no: 7, name: "path", kind: "scalar", T: 9 }, { no: 8, name: "read_range", kind: "message", T: ReadRange, opt: true }, { no: 11, name: "include_line_numbers", kind: "scalar", T: 8, opt: true }, { no: 12, name: "related_cursor_rule_paths", kind: "scalar", T: 9, repeated: true }, { no: 13, name: "related_cursor_rules", kind: "message", T: CursorRule, repeated: true }]), ReadToolError = proto3.makeMessageType("agent.v1.ReadToolError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), TodoStatus = proto3.makeEnum("agent.v1.TodoStatus", [{ no: 0, name: "TODO_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TODO_STATUS_PENDING", localName: "PENDING" }, { no: 2, name: "TODO_STATUS_IN_PROGRESS", localName: "IN_PROGRESS" }, { no: 3, name: "TODO_STATUS_COMPLETED", localName: "COMPLETED" }, { no: 4, name: "TODO_STATUS_CANCELLED", localName: "CANCELLED" }]), TodoItem = proto3.makeMessageType("agent.v1.TodoItem", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(TodoStatus) }, { no: 4, name: "created_at", kind: "scalar", T: 3 }, { no: 5, name: "updated_at", kind: "scalar", T: 3 }, { no: 6, name: "dependencies", kind: "scalar", T: 9, repeated: true }]), UpdateTodosToolCall = proto3.makeMessageType("agent.v1.UpdateTodosToolCall", () => [{ no: 1, name: "args", kind: "message", T: UpdateTodosArgs }, { no: 2, name: "result", kind: "message", T: UpdateTodosResult }]), UpdateTodosArgs = proto3.makeMessageType("agent.v1.UpdateTodosArgs", () => [{ no: 1, name: "todos", kind: "message", T: TodoItem, repeated: true }, { no: 2, name: "merge", kind: "scalar", T: 8 }]), UpdateTodosResult = proto3.makeMessageType("agent.v1.UpdateTodosResult", () => [{ no: 1, name: "success", kind: "message", T: UpdateTodosSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: UpdateTodosError, oneof: "result" }]), UpdateTodosSuccess = proto3.makeMessageType("agent.v1.UpdateTodosSuccess", () => [{ no: 1, name: "todos", kind: "message", T: TodoItem, repeated: true }, { no: 2, name: "total_count", kind: "scalar", T: 5 }, { no: 3, name: "was_merge", kind: "scalar", T: 8 }]), UpdateTodosError = proto3.makeMessageType("agent.v1.UpdateTodosError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), ReadTodosToolCall = proto3.makeMessageType("agent.v1.ReadTodosToolCall", () => [{ no: 1, name: "args", kind: "message", T: ReadTodosArgs }, { no: 2, name: "result", kind: "message", T: ReadTodosResult }]), ReadTodosArgs = proto3.makeMessageType("agent.v1.ReadTodosArgs", () => [{ no: 1, name: "status_filter", kind: "enum", T: proto3.getEnumType(TodoStatus), repeated: true }, { no: 2, name: "id_filter", kind: "scalar", T: 9, repeated: true }]), ReadTodosResult = proto3.makeMessageType("agent.v1.ReadTodosResult", () => [{ no: 1, name: "success", kind: "message", T: ReadTodosSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ReadTodosError, oneof: "result" }]), ReadTodosSuccess = proto3.makeMessageType("agent.v1.ReadTodosSuccess", () => [{ no: 1, name: "todos", kind: "message", T: TodoItem, repeated: true }, { no: 2, name: "total_count", kind: "scalar", T: 5 }]), ReadTodosError = proto3.makeMessageType("agent.v1.ReadTodosError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), EditArgs = proto3.makeMessageType("agent.v1.EditArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 6, name: "stream_content", kind: "scalar", T: 9, opt: true }]), EditResult = proto3.makeMessageType("agent.v1.EditResult", () => [{ no: 1, name: "success", kind: "message", T: EditSuccess, oneof: "result" }, { no: 2, name: "file_not_found", kind: "message", T: EditFileNotFound, oneof: "result" }, { no: 3, name: "read_permission_denied", kind: "message", T: EditReadPermissionDenied, oneof: "result" }, { no: 4, name: "write_permission_denied", kind: "message", T: EditWritePermissionDenied, oneof: "result" }, { no: 6, name: "rejected", kind: "message", T: EditRejected, oneof: "result" }, { no: 7, name: "error", kind: "message", T: EditError, oneof: "result" }]), EditSuccess = proto3.makeMessageType("agent.v1.EditSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "lines_added", kind: "scalar", T: 5, opt: true }, { no: 4, name: "lines_removed", kind: "scalar", T: 5, opt: true }, { no: 5, name: "diff_string", kind: "scalar", T: 9, opt: true }, { no: 6, name: "before_full_file_content", kind: "scalar", T: 9, opt: true }, { no: 7, name: "after_full_file_content", kind: "scalar", T: 9 }, { no: 8, name: "message", kind: "scalar", T: 9, opt: true }]), EditFileNotFound = proto3.makeMessageType("agent.v1.EditFileNotFound", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), EditReadPermissionDenied = proto3.makeMessageType("agent.v1.EditReadPermissionDenied", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), EditWritePermissionDenied = proto3.makeMessageType("agent.v1.EditWritePermissionDenied", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }, { no: 3, name: "is_readonly", kind: "scalar", T: 8 }]), EditRejected = proto3.makeMessageType("agent.v1.EditRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), EditError = proto3.makeMessageType("agent.v1.EditError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }, { no: 5, name: "model_visible_error", kind: "scalar", T: 9, opt: true }]), EditToolCall = proto3.makeMessageType("agent.v1.EditToolCall", () => [{ no: 1, name: "args", kind: "message", T: EditArgs }, { no: 2, name: "result", kind: "message", T: EditResult }]), LsArgs = proto3.makeMessageType("agent.v1.LsArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "ignore", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 4, name: "sandbox_policy", kind: "message", T: SandboxPolicy, opt: true }, { no: 5, name: "timeout_ms", kind: "scalar", T: 13, opt: true }]), LsResult = proto3.makeMessageType("agent.v1.LsResult", () => [{ no: 1, name: "success", kind: "message", T: LsSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: LsError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: LsRejected, oneof: "result" }, { no: 4, name: "timeout", kind: "message", T: LsTimeout, oneof: "result" }]), LsSuccess = proto3.makeMessageType("agent.v1.LsSuccess", () => [{ no: 1, name: "directory_tree_root", kind: "message", T: LsDirectoryTreeNode }]), LsDirectoryTreeNode = proto3.makeMessageType("agent.v1.LsDirectoryTreeNode", () => [{ no: 1, name: "abs_path", kind: "scalar", T: 9 }, { no: 2, name: "children_dirs", kind: "message", T: LsDirectoryTreeNode, repeated: true }, { no: 3, name: "children_files", kind: "message", T: LsDirectoryTreeNode_File, repeated: true }, { no: 4, name: "children_were_processed", kind: "scalar", T: 8 }, { no: 5, name: "full_subtree_extension_counts", kind: "map", K: 9, V: { kind: "scalar", T: 5 } }, { no: 6, name: "num_files", kind: "scalar", T: 5 }]), LsDirectoryTreeNode_File = proto3.makeMessageType("agent.v1.LsDirectoryTreeNode.File", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "terminal_metadata", kind: "message", T: TerminalMetadata, opt: true }], { localName: "LsDirectoryTreeNode_File" }), LsError = proto3.makeMessageType("agent.v1.LsError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), LsRejected = proto3.makeMessageType("agent.v1.LsRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), LsTimeout = proto3.makeMessageType("agent.v1.LsTimeout", () => [{ no: 1, name: "directory_tree_root", kind: "message", T: LsDirectoryTreeNode }]), TerminalMetadata = proto3.makeMessageType("agent.v1.TerminalMetadata", () => [{ no: 1, name: "cwd", kind: "scalar", T: 9, opt: true }, { no: 2, name: "last_commands", kind: "message", T: TerminalMetadata_Command, repeated: true }, { no: 3, name: "last_modified_ms", kind: "scalar", T: 3, opt: true }, { no: 4, name: "current_command", kind: "message", T: TerminalMetadata_Command, opt: true }]), TerminalMetadata_Command = proto3.makeMessageType("agent.v1.TerminalMetadata.Command", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "exit_code", kind: "scalar", T: 5, opt: true }, { no: 3, name: "timestamp_ms", kind: "scalar", T: 3, opt: true }, { no: 4, name: "duration_ms", kind: "scalar", T: 3, opt: true }], { localName: "TerminalMetadata_Command" }), LsToolCall = proto3.makeMessageType("agent.v1.LsToolCall", () => [{ no: 1, name: "args", kind: "message", T: LsArgs }, { no: 2, name: "result", kind: "message", T: LsResult }]), DiagnosticSeverity = proto3.makeEnum("agent.v1.DiagnosticSeverity", [{ no: 0, name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DIAGNOSTIC_SEVERITY_ERROR", localName: "ERROR" }, { no: 2, name: "DIAGNOSTIC_SEVERITY_WARNING", localName: "WARNING" }, { no: 3, name: "DIAGNOSTIC_SEVERITY_INFORMATION", localName: "INFORMATION" }, { no: 4, name: "DIAGNOSTIC_SEVERITY_HINT", localName: "HINT" }]), ReadLintsToolCall = proto3.makeMessageType("agent.v1.ReadLintsToolCall", () => [{ no: 1, name: "args", kind: "message", T: ReadLintsToolArgs }, { no: 2, name: "result", kind: "message", T: ReadLintsToolResult }]), ReadLintsToolArgs = proto3.makeMessageType("agent.v1.ReadLintsToolArgs", () => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]), ReadLintsToolResult = proto3.makeMessageType("agent.v1.ReadLintsToolResult", () => [{ no: 1, name: "success", kind: "message", T: ReadLintsToolSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ReadLintsToolError, oneof: "result" }]), ReadLintsToolSuccess = proto3.makeMessageType("agent.v1.ReadLintsToolSuccess", () => [{ no: 1, name: "file_diagnostics", kind: "message", T: FileDiagnostics, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "total_diagnostics", kind: "scalar", T: 5 }]), FileDiagnostics = proto3.makeMessageType("agent.v1.FileDiagnostics", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "diagnostics", kind: "message", T: DiagnosticItem, repeated: true }, { no: 3, name: "diagnostics_count", kind: "scalar", T: 5 }]), DiagnosticItem = proto3.makeMessageType("agent.v1.DiagnosticItem", () => [{ no: 1, name: "severity", kind: "enum", T: proto3.getEnumType(DiagnosticSeverity) }, { no: 2, name: "range", kind: "message", T: DiagnosticRange }, { no: 3, name: "message", kind: "scalar", T: 9 }, { no: 4, name: "source", kind: "scalar", T: 9 }, { no: 5, name: "code", kind: "scalar", T: 9 }, { no: 6, name: "is_stale", kind: "scalar", T: 8 }]), DiagnosticRange = proto3.makeMessageType("agent.v1.DiagnosticRange", () => [{ no: 1, name: "start", kind: "message", T: Position }, { no: 2, name: "end", kind: "message", T: Position }]), ReadLintsToolError = proto3.makeMessageType("agent.v1.ReadLintsToolError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), McpArgs = proto3.makeMessageType("agent.v1.McpArgs", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "map", K: 9, V: { kind: "message", T: Value } }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 4, name: "provider_identifier", kind: "scalar", T: 9 }, { no: 5, name: "tool_name", kind: "scalar", T: 9 }, { no: 6, name: "smart_mode_approval", kind: "message", T: SmartModeApproval, opt: true }, { no: 7, name: "smart_mode_approval_only", kind: "scalar", T: 8 }, { no: 8, name: "skip_approval", kind: "scalar", T: 8 }, { no: 9, name: "server_identifier", kind: "scalar", T: 9 }, { no: 10, name: "symbolic_path_arguments", kind: "message", T: McpSymbolicPathArgument, repeated: true }]), McpSymbolicPathArgument = proto3.makeMessageType("agent.v1.McpSymbolicPathArgument", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "sha256", kind: "scalar", T: 9 }, { no: 3, name: "size_bytes", kind: "scalar", T: 3 }]), McpTextContent = proto3.makeMessageType("agent.v1.McpTextContent", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "output_location", kind: "message", T: OutputLocation, opt: true }]), McpImageContent = proto3.makeMessageType("agent.v1.McpImageContent", () => [{ no: 1, name: "data", kind: "scalar", T: 12 }, { no: 2, name: "mime_type", kind: "scalar", T: 9 }]), McpToolResultContentItem = proto3.makeMessageType("agent.v1.McpToolResultContentItem", () => [{ no: 1, name: "text", kind: "message", T: McpTextContent, oneof: "content" }, { no: 2, name: "image", kind: "message", T: McpImageContent, oneof: "content" }]), SystemReminder = proto3.makeMessageType("agent.v1.SystemReminder", () => [{ no: 1, name: "body", kind: "scalar", T: 9 }]), McpSuccess = proto3.makeMessageType("agent.v1.McpSuccess", () => [{ no: 1, name: "content", kind: "message", T: McpToolResultContentItem, repeated: true }, { no: 2, name: "is_error", kind: "scalar", T: 8 }, { no: 3, name: "structured_content", kind: "message", T: Struct }, { no: 4, name: "system_reminders", kind: "message", T: SystemReminder, repeated: true }]), McpRejected = proto3.makeMessageType("agent.v1.McpRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }, { no: 2, name: "is_readonly", kind: "scalar", T: 8 }]), McpPermissionDenied = proto3.makeMessageType("agent.v1.McpPermissionDenied", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "is_readonly", kind: "scalar", T: 8 }]), ListMcpResourcesExecArgs = proto3.makeMessageType("agent.v1.ListMcpResourcesExecArgs", () => [{ no: 1, name: "server", kind: "scalar", T: 9, opt: true }]), ListMcpResourcesExecResult = proto3.makeMessageType("agent.v1.ListMcpResourcesExecResult", () => [{ no: 1, name: "success", kind: "message", T: ListMcpResourcesSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ListMcpResourcesError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: ListMcpResourcesRejected, oneof: "result" }]), ListMcpResourcesExecResult_McpResource = proto3.makeMessageType("agent.v1.ListMcpResourcesExecResult.McpResource", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "server", kind: "scalar", T: 9 }, { no: 6, name: "annotations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }], { localName: "ListMcpResourcesExecResult_McpResource" }), ListMcpResourcesSuccess = proto3.makeMessageType("agent.v1.ListMcpResourcesSuccess", () => [{ no: 1, name: "resources", kind: "message", T: ListMcpResourcesExecResult_McpResource, repeated: true }]), ListMcpResourcesError = proto3.makeMessageType("agent.v1.ListMcpResourcesError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), ListMcpResourcesRejected = proto3.makeMessageType("agent.v1.ListMcpResourcesRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), ReadMcpResourceExecArgs = proto3.makeMessageType("agent.v1.ReadMcpResourceExecArgs", () => [{ no: 1, name: "server", kind: "scalar", T: 9 }, { no: 2, name: "uri", kind: "scalar", T: 9 }, { no: 3, name: "download_path", kind: "scalar", T: 9, opt: true }, { no: 4, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 5, name: "smart_mode_approval", kind: "message", T: SmartModeApproval, opt: true }]), ReadMcpResourceExecResult = proto3.makeMessageType("agent.v1.ReadMcpResourceExecResult", () => [{ no: 1, name: "success", kind: "message", T: ReadMcpResourceSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ReadMcpResourceError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: ReadMcpResourceRejected, oneof: "result" }, { no: 4, name: "not_found", kind: "message", T: ReadMcpResourceNotFound, oneof: "result" }]), ReadMcpResourceSuccess = proto3.makeMessageType("agent.v1.ReadMcpResourceSuccess", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "text", kind: "scalar", T: 9, oneof: "content" }, { no: 6, name: "blob", kind: "scalar", T: 12, oneof: "content" }, { no: 7, name: "annotations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 8, name: "download_path", kind: "scalar", T: 9, opt: true }, { no: 9, name: "output_location", kind: "message", T: OutputLocation, opt: true }, { no: 10, name: "meta_json", kind: "scalar", T: 9, opt: true }]), ReadMcpResourceError = proto3.makeMessageType("agent.v1.ReadMcpResourceError", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), ReadMcpResourceRejected = proto3.makeMessageType("agent.v1.ReadMcpResourceRejected", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), ReadMcpResourceNotFound = proto3.makeMessageType("agent.v1.ReadMcpResourceNotFound", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }]), McpToolError = proto3.makeMessageType("agent.v1.McpToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "read_tool_def_reminder", kind: "scalar", T: 9 }, { no: 3, name: "system_reminders", kind: "message", T: SystemReminder, repeated: true }]), McpToolResult = proto3.makeMessageType("agent.v1.McpToolResult", () => [{ no: 1, name: "success", kind: "message", T: McpSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: McpToolError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: McpRejected, oneof: "result" }, { no: 4, name: "permission_denied", kind: "message", T: McpPermissionDenied, oneof: "result" }]), McpToolCall = proto3.makeMessageType("agent.v1.McpToolCall", () => [{ no: 1, name: "args", kind: "message", T: McpArgs }, { no: 2, name: "result", kind: "message", T: McpToolResult }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }]), CursorPosition = proto3.makeMessageType("aiserver.v1.CursorPosition", () => [{ no: 1, name: "line", kind: "scalar", T: 5 }, { no: 2, name: "column", kind: "scalar", T: 5 }]), CursorRange = proto3.makeMessageType("aiserver.v1.CursorRange", () => [{ no: 1, name: "start_position", kind: "message", T: CursorPosition }, { no: 2, name: "end_position", kind: "message", T: CursorPosition }]), DetailedLine = proto3.makeMessageType("aiserver.v1.DetailedLine", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 2 }, { no: 3, name: "is_signature", kind: "scalar", T: 8 }]), CodeBlock = proto3.makeMessageType("aiserver.v1.CodeBlock", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "file_contents", kind: "scalar", T: 9, opt: true }, { no: 9, name: "file_contents_length", kind: "scalar", T: 5, opt: true }, { no: 3, name: "range", kind: "message", T: CursorRange }, { no: 4, name: "contents", kind: "scalar", T: 9 }, { no: 5, name: "signatures", kind: "message", T: CodeBlock_Signatures }, { no: 6, name: "override_contents", kind: "scalar", T: 9, opt: true }, { no: 7, name: "original_contents", kind: "scalar", T: 9, opt: true }, { no: 8, name: "detailed_lines", kind: "message", T: DetailedLine, repeated: true }, { no: 10, name: "file_git_context", kind: "message", T: FileGit }]), CodeBlock_Signatures = proto3.makeMessageType("aiserver.v1.CodeBlock.Signatures", () => [{ no: 1, name: "ranges", kind: "message", T: CursorRange, repeated: true }], { localName: "CodeBlock_Signatures" }), GitCommit = proto3.makeMessageType("aiserver.v1.GitCommit", () => [{ no: 1, name: "commit", kind: "scalar", T: 9 }, { no: 2, name: "author", kind: "scalar", T: 9 }, { no: 3, name: "date", kind: "scalar", T: 9 }, { no: 4, name: "message", kind: "scalar", T: 9 }]), FileGit = proto3.makeMessageType("aiserver.v1.FileGit", () => [{ no: 1, name: "commits", kind: "message", T: GitCommit, repeated: true }]), CodeResult = proto3.makeMessageType("aiserver.v1.CodeResult", () => [{ no: 1, name: "code_block", kind: "message", T: CodeBlock }, { no: 2, name: "score", kind: "scalar", T: 2 }]), SemSearchToolCall = proto3.makeMessageType("agent.v1.SemSearchToolCall", () => [{ no: 1, name: "args", kind: "message", T: SemSearchToolArgs }, { no: 2, name: "result", kind: "message", T: SemSearchToolResult }]), SemSearchToolArgs = proto3.makeMessageType("agent.v1.SemSearchToolArgs", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "target_directories", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "explanation", kind: "scalar", T: 9 }]), SemSearchToolResult = proto3.makeMessageType("agent.v1.SemSearchToolResult", () => [{ no: 1, name: "success", kind: "message", T: SemSearchToolSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: SemSearchToolError, oneof: "result" }]), SemSearchToolSuccess = proto3.makeMessageType("agent.v1.SemSearchToolSuccess", () => [{ no: 1, name: "results", kind: "scalar", T: 9 }, { no: 2, name: "code_results", kind: "message", T: CodeResult, repeated: true }]), SemSearchToolError = proto3.makeMessageType("agent.v1.SemSearchToolError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), CreatePlanToolCall = proto3.makeMessageType("agent.v1.CreatePlanToolCall", () => [{ no: 1, name: "args", kind: "message", T: CreatePlanArgs }, { no: 2, name: "result", kind: "message", T: CreatePlanResult }]), Phase = proto3.makeMessageType("agent.v1.Phase", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "todos", kind: "message", T: TodoItem, repeated: true }]), CreatePlanArgs = proto3.makeMessageType("agent.v1.CreatePlanArgs", () => [{ no: 1, name: "plan", kind: "scalar", T: 9 }, { no: 2, name: "todos", kind: "message", T: TodoItem, repeated: true }, { no: 3, name: "overview", kind: "scalar", T: 9 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 5, name: "is_project", kind: "scalar", T: 8 }, { no: 6, name: "phases", kind: "message", T: Phase, repeated: true }]), CreatePlanResult = proto3.makeMessageType("agent.v1.CreatePlanResult", () => [{ no: 1, name: "success", kind: "message", T: CreatePlanSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: CreatePlanError, oneof: "result" }, { no: 3, name: "plan_uri", kind: "scalar", T: 9 }]), CreatePlanSuccess = proto3.makeMessageType("agent.v1.CreatePlanSuccess", []), CreatePlanError = proto3.makeMessageType("agent.v1.CreatePlanError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), CreatePlanRequestResponse = proto3.makeMessageType("agent.v1.CreatePlanRequestResponse", () => [{ no: 1, name: "result", kind: "message", T: CreatePlanResult }]), WebSearchArgs = proto3.makeMessageType("agent.v1.WebSearchArgs", () => [{ no: 1, name: "search_term", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), WebSearchResult = proto3.makeMessageType("agent.v1.WebSearchResult", () => [{ no: 1, name: "success", kind: "message", T: WebSearchSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: WebSearchError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: WebSearchRejected, oneof: "result" }]), WebSearchSuccess = proto3.makeMessageType("agent.v1.WebSearchSuccess", () => [{ no: 1, name: "references", kind: "message", T: WebSearchReference, repeated: true }]), WebSearchError = proto3.makeMessageType("agent.v1.WebSearchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), WebSearchRejected = proto3.makeMessageType("agent.v1.WebSearchRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), WebSearchReference = proto3.makeMessageType("agent.v1.WebSearchReference", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "chunk", kind: "scalar", T: 9 }]), WebSearchToolCall = proto3.makeMessageType("agent.v1.WebSearchToolCall", () => [{ no: 1, name: "args", kind: "message", T: WebSearchArgs }, { no: 2, name: "result", kind: "message", T: WebSearchResult }]), WebSearchRequestResponse = proto3.makeMessageType("agent.v1.WebSearchRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: WebSearchRequestResponse_Approved, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: WebSearchRequestResponse_Rejected, oneof: "result" }]), WebSearchRequestResponse_Approved = proto3.makeMessageType("agent.v1.WebSearchRequestResponse.Approved", [], { localName: "WebSearchRequestResponse_Approved" }), WebSearchRequestResponse_Rejected = proto3.makeMessageType("agent.v1.WebSearchRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "WebSearchRequestResponse_Rejected" }), ListMcpResourcesToolCall = proto3.makeMessageType("agent.v1.ListMcpResourcesToolCall", () => [{ no: 1, name: "args", kind: "message", T: ListMcpResourcesExecArgs }, { no: 2, name: "result", kind: "message", T: ListMcpResourcesExecResult }]), ReadMcpResourceToolCall = proto3.makeMessageType("agent.v1.ReadMcpResourceToolCall", () => [{ no: 1, name: "args", kind: "message", T: ReadMcpResourceExecArgs }, { no: 2, name: "result", kind: "message", T: ReadMcpResourceExecResult }]), ApplyAgentDiffToolCall = proto3.makeMessageType("agent.v1.ApplyAgentDiffToolCall", () => [{ no: 1, name: "args", kind: "message", T: ApplyAgentDiffArgs }, { no: 2, name: "result", kind: "message", T: ApplyAgentDiffResult }]), ApplyAgentDiffArgs = proto3.makeMessageType("agent.v1.ApplyAgentDiffArgs", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }]), ApplyAgentDiffResult = proto3.makeMessageType("agent.v1.ApplyAgentDiffResult", () => [{ no: 1, name: "success", kind: "message", T: ApplyAgentDiffSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ApplyAgentDiffError, oneof: "result" }]), ApplyAgentDiffSuccess = proto3.makeMessageType("agent.v1.ApplyAgentDiffSuccess", () => [{ no: 1, name: "applied_changes", kind: "message", T: AppliedAgentChange, repeated: true }]), AppliedAgentChange = proto3.makeMessageType("agent.v1.AppliedAgentChange", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "change_type", kind: "enum", T: proto3.getEnumType(AppliedAgentChange_ChangeType) }, { no: 3, name: "before_content", kind: "scalar", T: 9, opt: true }, { no: 4, name: "after_content", kind: "scalar", T: 9, opt: true }, { no: 5, name: "error", kind: "scalar", T: 9, opt: true }, { no: 6, name: "message_for_model", kind: "scalar", T: 9, opt: true }]), AppliedAgentChange_ChangeType = proto3.makeEnum("agent.v1.AppliedAgentChange.ChangeType", [{ no: 0, name: "CHANGE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CHANGE_TYPE_CREATED", localName: "CREATED" }, { no: 2, name: "CHANGE_TYPE_MODIFIED", localName: "MODIFIED" }, { no: 3, name: "CHANGE_TYPE_DELETED", localName: "DELETED" }]), ApplyAgentDiffError = proto3.makeMessageType("agent.v1.ApplyAgentDiffError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "applied_changes", kind: "message", T: AppliedAgentChange, repeated: true }]), AskQuestionToolCall = proto3.makeMessageType("agent.v1.AskQuestionToolCall", () => [{ no: 1, name: "args", kind: "message", T: AskQuestionArgs }, { no: 2, name: "result", kind: "message", T: AskQuestionResult }]), AskQuestionArgs = proto3.makeMessageType("agent.v1.AskQuestionArgs", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "questions", kind: "message", T: AskQuestionArgs_Question, repeated: true }, { no: 5, name: "run_async", kind: "scalar", T: 8 }, { no: 6, name: "async_original_tool_call_id", kind: "scalar", T: 9 }]), AskQuestionArgs_Question = proto3.makeMessageType("agent.v1.AskQuestionArgs.Question", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "prompt", kind: "scalar", T: 9 }, { no: 3, name: "options", kind: "message", T: AskQuestionArgs_Option, repeated: true }, { no: 4, name: "allow_multiple", kind: "scalar", T: 8 }], { localName: "AskQuestionArgs_Question" }), AskQuestionArgs_Option = proto3.makeMessageType("agent.v1.AskQuestionArgs.Option", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "label", kind: "scalar", T: 9 }], { localName: "AskQuestionArgs_Option" }), AskQuestionAsync = proto3.makeMessageType("agent.v1.AskQuestionAsync", () => [{ no: 1, name: "interaction_id", kind: "scalar", T: 9 }]), AskQuestionResult = proto3.makeMessageType("agent.v1.AskQuestionResult", () => [{ no: 1, name: "success", kind: "message", T: AskQuestionSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: AskQuestionError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: AskQuestionRejected, oneof: "result" }, { no: 4, name: "async", kind: "message", T: AskQuestionAsync, oneof: "result" }]), AskQuestionSuccess = proto3.makeMessageType("agent.v1.AskQuestionSuccess", () => [{ no: 1, name: "answers", kind: "message", T: AskQuestionSuccess_Answer, repeated: true }]), AskQuestionSuccess_Answer = proto3.makeMessageType("agent.v1.AskQuestionSuccess.Answer", () => [{ no: 1, name: "question_id", kind: "scalar", T: 9 }, { no: 2, name: "selected_option_ids", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "freeform_text", kind: "scalar", T: 9 }], { localName: "AskQuestionSuccess_Answer" }), AskQuestionError = proto3.makeMessageType("agent.v1.AskQuestionError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), AskQuestionRejected = proto3.makeMessageType("agent.v1.AskQuestionRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), FetchArgs = proto3.makeMessageType("agent.v1.FetchArgs", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), FetchResult = proto3.makeMessageType("agent.v1.FetchResult", () => [{ no: 1, name: "success", kind: "message", T: FetchSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: FetchError, oneof: "result" }]), FetchSuccess = proto3.makeMessageType("agent.v1.FetchSuccess", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "status_code", kind: "scalar", T: 5 }, { no: 4, name: "content_type", kind: "scalar", T: 9 }]), FetchError = proto3.makeMessageType("agent.v1.FetchError", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), FetchToolCall = proto3.makeMessageType("agent.v1.FetchToolCall", () => [{ no: 1, name: "args", kind: "message", T: FetchArgs }, { no: 2, name: "result", kind: "message", T: FetchResult }]), SwitchModeArgs = proto3.makeMessageType("agent.v1.SwitchModeArgs", () => [{ no: 1, name: "target_mode_id", kind: "scalar", T: 9 }, { no: 2, name: "explanation", kind: "scalar", T: 9, opt: true }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }]), SwitchModeResult = proto3.makeMessageType("agent.v1.SwitchModeResult", () => [{ no: 1, name: "success", kind: "message", T: SwitchModeSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: SwitchModeError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: SwitchModeRejected, oneof: "result" }]), SwitchModeSuccess = proto3.makeMessageType("agent.v1.SwitchModeSuccess", () => [{ no: 1, name: "from_mode_id", kind: "scalar", T: 9 }, { no: 2, name: "to_mode_id", kind: "scalar", T: 9 }]), SwitchModeError = proto3.makeMessageType("agent.v1.SwitchModeError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), SwitchModeRejected = proto3.makeMessageType("agent.v1.SwitchModeRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), SwitchModeToolCall = proto3.makeMessageType("agent.v1.SwitchModeToolCall", () => [{ no: 1, name: "args", kind: "message", T: SwitchModeArgs }, { no: 2, name: "result", kind: "message", T: SwitchModeResult }]), SwitchModeRequestResponse = proto3.makeMessageType("agent.v1.SwitchModeRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: SwitchModeRequestResponse_Approved, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: SwitchModeRequestResponse_Rejected, oneof: "result" }]), SwitchModeRequestResponse_Approved = proto3.makeMessageType("agent.v1.SwitchModeRequestResponse.Approved", [], { localName: "SwitchModeRequestResponse_Approved" }), SwitchModeRequestResponse_Rejected = proto3.makeMessageType("agent.v1.SwitchModeRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "SwitchModeRequestResponse_Rejected" }), GenerateImageArgs = proto3.makeMessageType("agent.v1.GenerateImageArgs", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }, { no: 2, name: "file_path", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reference_image_paths", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "aspect_ratio", kind: "scalar", T: 9, opt: true }]), GenerateImageResult = proto3.makeMessageType("agent.v1.GenerateImageResult", () => [{ no: 1, name: "success", kind: "message", T: GenerateImageSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: GenerateImageError, oneof: "result" }]), GenerateImageSuccess = proto3.makeMessageType("agent.v1.GenerateImageSuccess", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "image_data", kind: "scalar", T: 9 }]), GenerateImageError = proto3.makeMessageType("agent.v1.GenerateImageError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), GenerateImageToolCall = proto3.makeMessageType("agent.v1.GenerateImageToolCall", () => [{ no: 1, name: "args", kind: "message", T: GenerateImageArgs }, { no: 2, name: "result", kind: "message", T: GenerateImageResult }]), GenerateImageRequestResponse = proto3.makeMessageType("agent.v1.GenerateImageRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: GenerateImageRequestResponse_Approved, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: GenerateImageRequestResponse_Rejected, oneof: "result" }]), GenerateImageRequestResponse_Approved = proto3.makeMessageType("agent.v1.GenerateImageRequestResponse.Approved", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }], { localName: "GenerateImageRequestResponse_Approved" }), GenerateImageRequestResponse_Rejected = proto3.makeMessageType("agent.v1.GenerateImageRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "GenerateImageRequestResponse_Rejected" }), RecordingMode = proto3.makeEnum("agent.v1.RecordingMode", [{ no: 0, name: "RECORDING_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "RECORDING_MODE_START_RECORDING", localName: "START_RECORDING" }, { no: 2, name: "RECORDING_MODE_SAVE_RECORDING", localName: "SAVE_RECORDING" }, { no: 3, name: "RECORDING_MODE_DISCARD_RECORDING", localName: "DISCARD_RECORDING" }]), RequestedFilePathRejectedReason = proto3.makeEnum("agent.v1.RequestedFilePathRejectedReason", [{ no: 0, name: "REQUESTED_FILE_PATH_REJECTED_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "REQUESTED_FILE_PATH_REJECTED_REASON_SLASHES_NOT_ALLOWED", localName: "SLASHES_NOT_ALLOWED" }]), RecordScreenArgs = proto3.makeMessageType("agent.v1.RecordScreenArgs", () => [{ no: 1, name: "mode", kind: "enum", T: proto3.getEnumType(RecordingMode) }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 3, name: "save_as_filename", kind: "scalar", T: 9, opt: true }]), RecordScreenResult = proto3.makeMessageType("agent.v1.RecordScreenResult", () => [{ no: 1, name: "start_success", kind: "message", T: RecordScreenStartSuccess, oneof: "result" }, { no: 2, name: "save_success", kind: "message", T: RecordScreenSaveSuccess, oneof: "result" }, { no: 3, name: "discard_success", kind: "message", T: RecordScreenDiscardSuccess, oneof: "result" }, { no: 4, name: "failure", kind: "message", T: RecordScreenFailure, oneof: "result" }]), RecordScreenStartSuccess = proto3.makeMessageType("agent.v1.RecordScreenStartSuccess", () => [{ no: 1, name: "was_prior_recording_cancelled", kind: "scalar", T: 8 }, { no: 2, name: "was_save_as_filename_ignored", kind: "scalar", T: 8 }]), RecordScreenSaveSuccess = proto3.makeMessageType("agent.v1.RecordScreenSaveSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "recording_duration_ms", kind: "scalar", T: 3 }, { no: 3, name: "requested_file_path_rejected_reason", kind: "enum", T: proto3.getEnumType(RequestedFilePathRejectedReason), opt: true }]), RecordScreenDiscardSuccess = proto3.makeMessageType("agent.v1.RecordScreenDiscardSuccess", []), RecordScreenFailure = proto3.makeMessageType("agent.v1.RecordScreenFailure", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), RecordScreenToolCall = proto3.makeMessageType("agent.v1.RecordScreenToolCall", () => [{ no: 1, name: "args", kind: "message", T: RecordScreenArgs }, { no: 2, name: "result", kind: "message", T: RecordScreenResult }]), MouseButton = proto3.makeEnum("agent.v1.MouseButton", [{ no: 0, name: "MOUSE_BUTTON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MOUSE_BUTTON_LEFT", localName: "LEFT" }, { no: 2, name: "MOUSE_BUTTON_RIGHT", localName: "RIGHT" }, { no: 3, name: "MOUSE_BUTTON_MIDDLE", localName: "MIDDLE" }, { no: 4, name: "MOUSE_BUTTON_BACK", localName: "BACK" }, { no: 5, name: "MOUSE_BUTTON_FORWARD", localName: "FORWARD" }]), ScrollDirection = proto3.makeEnum("agent.v1.ScrollDirection", [{ no: 0, name: "SCROLL_DIRECTION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SCROLL_DIRECTION_UP", localName: "UP" }, { no: 2, name: "SCROLL_DIRECTION_DOWN", localName: "DOWN" }, { no: 3, name: "SCROLL_DIRECTION_LEFT", localName: "LEFT" }, { no: 4, name: "SCROLL_DIRECTION_RIGHT", localName: "RIGHT" }]), KeyStroke = proto3.makeEnum("agent.v1.KeyStroke", [{ no: 0, name: "KEY_STROKE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KEY_STROKE_TAP", localName: "TAP" }, { no: 2, name: "KEY_STROKE_DOWN", localName: "DOWN" }, { no: 3, name: "KEY_STROKE_UP", localName: "UP" }]), ComputerUseSettleOutcome = proto3.makeEnum("agent.v1.ComputerUseSettleOutcome", [{ no: 0, name: "COMPUTER_USE_SETTLE_OUTCOME_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "COMPUTER_USE_SETTLE_OUTCOME_NONE", localName: "NONE" }, { no: 2, name: "COMPUTER_USE_SETTLE_OUTCOME_FIXED", localName: "FIXED" }, { no: 3, name: "COMPUTER_USE_SETTLE_OUTCOME_STABLE", localName: "STABLE" }, { no: 4, name: "COMPUTER_USE_SETTLE_OUTCOME_CAP", localName: "CAP" }, { no: 5, name: "COMPUTER_USE_SETTLE_OUTCOME_CAPTURE_FAILED", localName: "CAPTURE_FAILED" }]), Coordinate = proto3.makeMessageType("agent.v1.Coordinate", () => [{ no: 1, name: "x", kind: "scalar", T: 5 }, { no: 2, name: "y", kind: "scalar", T: 5 }]), ComputerUseArgs = proto3.makeMessageType("agent.v1.ComputerUseArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "actions", kind: "message", T: ComputerUseAction, repeated: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "bind_unmapped_characters", kind: "scalar", T: 8, opt: true }, { no: 5, name: "desktop_lease_actor_id", kind: "scalar", T: 9, opt: true }, { no: 6, name: "screenshot_settle_ms", kind: "scalar", T: 5, opt: true }, { no: 8, name: "settle_until_stable", kind: "scalar", T: 8, opt: true }]), ComputerUseAction = proto3.makeMessageType("agent.v1.ComputerUseAction", () => [{ no: 1, name: "mouse_move", kind: "message", T: MouseMoveAction, oneof: "action" }, { no: 2, name: "click", kind: "message", T: ClickAction, oneof: "action" }, { no: 3, name: "mouse_down", kind: "message", T: MouseDownAction, oneof: "action" }, { no: 4, name: "mouse_up", kind: "message", T: MouseUpAction, oneof: "action" }, { no: 5, name: "drag", kind: "message", T: DragAction, oneof: "action" }, { no: 6, name: "scroll", kind: "message", T: ScrollAction, oneof: "action" }, { no: 7, name: "type", kind: "message", T: TypeAction, oneof: "action" }, { no: 8, name: "key", kind: "message", T: KeyAction, oneof: "action" }, { no: 9, name: "wait", kind: "message", T: WaitAction, oneof: "action" }, { no: 10, name: "screenshot", kind: "message", T: ScreenshotAction, oneof: "action" }, { no: 11, name: "cursor_position", kind: "message", T: CursorPositionAction, oneof: "action" }]), MouseMoveAction = proto3.makeMessageType("agent.v1.MouseMoveAction", () => [{ no: 1, name: "coordinate", kind: "message", T: Coordinate }]), ClickAction = proto3.makeMessageType("agent.v1.ClickAction", () => [{ no: 1, name: "coordinate", kind: "message", T: Coordinate, opt: true }, { no: 2, name: "button", kind: "enum", T: proto3.getEnumType(MouseButton) }, { no: 3, name: "count", kind: "scalar", T: 5 }, { no: 4, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), MouseDownAction = proto3.makeMessageType("agent.v1.MouseDownAction", () => [{ no: 1, name: "button", kind: "enum", T: proto3.getEnumType(MouseButton) }]), MouseUpAction = proto3.makeMessageType("agent.v1.MouseUpAction", () => [{ no: 1, name: "button", kind: "enum", T: proto3.getEnumType(MouseButton) }]), DragAction = proto3.makeMessageType("agent.v1.DragAction", () => [{ no: 1, name: "path", kind: "message", T: Coordinate, repeated: true }, { no: 2, name: "button", kind: "enum", T: proto3.getEnumType(MouseButton) }, { no: 3, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), ScrollAction = proto3.makeMessageType("agent.v1.ScrollAction", () => [{ no: 1, name: "coordinate", kind: "message", T: Coordinate, opt: true }, { no: 2, name: "direction", kind: "enum", T: proto3.getEnumType(ScrollDirection) }, { no: 3, name: "amount", kind: "scalar", T: 5 }, { no: 4, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), TypeAction = proto3.makeMessageType("agent.v1.TypeAction", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), KeyAction = proto3.makeMessageType("agent.v1.KeyAction", () => [{ no: 1, name: "key", kind: "scalar", T: 9 }, { no: 2, name: "hold_duration_ms", kind: "scalar", T: 5, opt: true }, { no: 3, name: "stroke", kind: "enum", T: proto3.getEnumType(KeyStroke) }]), WaitAction = proto3.makeMessageType("agent.v1.WaitAction", () => [{ no: 1, name: "duration_ms", kind: "scalar", T: 5 }]), ScreenshotAction = proto3.makeMessageType("agent.v1.ScreenshotAction", []), CursorPositionAction = proto3.makeMessageType("agent.v1.CursorPositionAction", []), ComputerUseResult = proto3.makeMessageType("agent.v1.ComputerUseResult", () => [{ no: 1, name: "success", kind: "message", T: ComputerUseSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ComputerUseError, oneof: "result" }]), ComputerUseSuccess = proto3.makeMessageType("agent.v1.ComputerUseSuccess", () => [{ no: 1, name: "action_count", kind: "scalar", T: 5 }, { no: 2, name: "duration_ms", kind: "scalar", T: 5 }, { no: 3, name: "screenshot", kind: "scalar", T: 9, opt: true }, { no: 4, name: "log", kind: "scalar", T: 9, opt: true }, { no: 5, name: "screenshot_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "cursor_position", kind: "message", T: Coordinate, opt: true }, { no: 7, name: "settle_ms", kind: "scalar", T: 5, opt: true }, { no: 8, name: "settle_outcome", kind: "enum", T: proto3.getEnumType(ComputerUseSettleOutcome), opt: true }]), ComputerUseError = proto3.makeMessageType("agent.v1.ComputerUseError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "action_count", kind: "scalar", T: 5 }, { no: 3, name: "duration_ms", kind: "scalar", T: 5 }, { no: 4, name: "log", kind: "scalar", T: 9, opt: true }, { no: 5, name: "screenshot", kind: "scalar", T: 9, opt: true }, { no: 6, name: "screenshot_path", kind: "scalar", T: 9, opt: true }]), ComputerUseToolCall = proto3.makeMessageType("agent.v1.ComputerUseToolCall", () => [{ no: 1, name: "args", kind: "message", T: ComputerUseArgs }, { no: 2, name: "result", kind: "message", T: ComputerUseResult }]), WriteShellStdinArgs = proto3.makeMessageType("agent.v1.WriteShellStdinArgs", () => [{ no: 1, name: "shell_id", kind: "scalar", T: 13 }, { no: 2, name: "chars", kind: "scalar", T: 9 }]), WriteShellStdinResult = proto3.makeMessageType("agent.v1.WriteShellStdinResult", () => [{ no: 1, name: "success", kind: "message", T: WriteShellStdinSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: WriteShellStdinError, oneof: "result" }]), WriteShellStdinSuccess = proto3.makeMessageType("agent.v1.WriteShellStdinSuccess", () => [{ no: 1, name: "shell_id", kind: "scalar", T: 13 }, { no: 2, name: "terminal_file_length_before_input_written", kind: "scalar", T: 13 }]), WriteShellStdinError = proto3.makeMessageType("agent.v1.WriteShellStdinError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), WriteShellStdinToolCall = proto3.makeMessageType("agent.v1.WriteShellStdinToolCall", () => [{ no: 1, name: "args", kind: "message", T: WriteShellStdinArgs }, { no: 2, name: "result", kind: "message", T: WriteShellStdinResult }]), ReflectArgs = proto3.makeMessageType("agent.v1.ReflectArgs", () => [{ no: 1, name: "unexpected_action_outcomes", kind: "scalar", T: 9 }, { no: 2, name: "relevant_instructions", kind: "scalar", T: 9 }, { no: 3, name: "scenario_analysis", kind: "scalar", T: 9 }, { no: 4, name: "critical_synthesis", kind: "scalar", T: 9 }, { no: 5, name: "next_steps", kind: "scalar", T: 9 }, { no: 6, name: "tool_call_id", kind: "scalar", T: 9 }]), ReflectResult = proto3.makeMessageType("agent.v1.ReflectResult", () => [{ no: 1, name: "success", kind: "message", T: ReflectSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ReflectError, oneof: "result" }]), ReflectSuccess = proto3.makeMessageType("agent.v1.ReflectSuccess", []), ReflectError = proto3.makeMessageType("agent.v1.ReflectError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), ReflectToolCall = proto3.makeMessageType("agent.v1.ReflectToolCall", () => [{ no: 1, name: "args", kind: "message", T: ReflectArgs }, { no: 2, name: "result", kind: "message", T: ReflectResult }]), SetupVmEnvironmentArgs = proto3.makeMessageType("agent.v1.SetupVmEnvironmentArgs", () => [{ no: 2, name: "install_command", kind: "scalar", T: 9 }, { no: 3, name: "start_command", kind: "scalar", T: 9 }, { no: 4, name: "dockerfile_contents", kind: "scalar", T: 9 }]), SetupVmEnvironmentResult = proto3.makeMessageType("agent.v1.SetupVmEnvironmentResult", () => [{ no: 1, name: "success", kind: "message", T: SetupVmEnvironmentSuccess, oneof: "result" }]), SetupVmEnvironmentSuccess = proto3.makeMessageType("agent.v1.SetupVmEnvironmentSuccess", []), SetupVmEnvironmentToolCall = proto3.makeMessageType("agent.v1.SetupVmEnvironmentToolCall", () => [{ no: 1, name: "args", kind: "message", T: SetupVmEnvironmentArgs }, { no: 2, name: "result", kind: "message", T: SetupVmEnvironmentResult }]), StartGrindExecutionArgs = proto3.makeMessageType("agent.v1.StartGrindExecutionArgs", () => [{ no: 1, name: "explanation", kind: "scalar", T: 9, opt: true }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), StartGrindExecutionResult = proto3.makeMessageType("agent.v1.StartGrindExecutionResult", () => [{ no: 1, name: "success", kind: "message", T: StartGrindExecutionSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: StartGrindExecutionError, oneof: "result" }]), StartGrindExecutionSuccess = proto3.makeMessageType("agent.v1.StartGrindExecutionSuccess", []), StartGrindExecutionError = proto3.makeMessageType("agent.v1.StartGrindExecutionError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), StartGrindExecutionToolCall = proto3.makeMessageType("agent.v1.StartGrindExecutionToolCall", () => [{ no: 1, name: "args", kind: "message", T: StartGrindExecutionArgs }, { no: 2, name: "result", kind: "message", T: StartGrindExecutionResult }]), StartGrindPlanningArgs = proto3.makeMessageType("agent.v1.StartGrindPlanningArgs", () => [{ no: 1, name: "explanation", kind: "scalar", T: 9, opt: true }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), StartGrindPlanningResult = proto3.makeMessageType("agent.v1.StartGrindPlanningResult", () => [{ no: 1, name: "success", kind: "message", T: StartGrindPlanningSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: StartGrindPlanningError, oneof: "result" }]), StartGrindPlanningSuccess = proto3.makeMessageType("agent.v1.StartGrindPlanningSuccess", []), StartGrindPlanningError = proto3.makeMessageType("agent.v1.StartGrindPlanningError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), StartGrindPlanningToolCall = proto3.makeMessageType("agent.v1.StartGrindPlanningToolCall", () => [{ no: 1, name: "args", kind: "message", T: StartGrindPlanningArgs }, { no: 2, name: "result", kind: "message", T: StartGrindPlanningResult }]), WebFetchArgs = proto3.makeMessageType("agent.v1.WebFetchArgs", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), WebFetchResult = proto3.makeMessageType("agent.v1.WebFetchResult", () => [{ no: 1, name: "success", kind: "message", T: WebFetchSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: WebFetchError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: WebFetchRejected, oneof: "result" }]), WebFetchSuccess = proto3.makeMessageType("agent.v1.WebFetchSuccess", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "markdown", kind: "scalar", T: 9 }, { no: 3, name: "output_location", kind: "message", T: OutputLocation, opt: true }]), WebFetchError = proto3.makeMessageType("agent.v1.WebFetchError", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), WebFetchRejected = proto3.makeMessageType("agent.v1.WebFetchRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), WebFetchToolCall = proto3.makeMessageType("agent.v1.WebFetchToolCall", () => [{ no: 1, name: "args", kind: "message", T: WebFetchArgs }, { no: 2, name: "result", kind: "message", T: WebFetchResult }]), WebFetchRequestResponse = proto3.makeMessageType("agent.v1.WebFetchRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: WebFetchRequestResponse_Approved, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: WebFetchRequestResponse_Rejected, oneof: "result" }]), WebFetchRequestResponse_Approved = proto3.makeMessageType("agent.v1.WebFetchRequestResponse.Approved", [], { localName: "WebFetchRequestResponse_Approved" }), WebFetchRequestResponse_Rejected = proto3.makeMessageType("agent.v1.WebFetchRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "WebFetchRequestResponse_Rejected" }), BugfixVerdict = proto3.makeEnum("agent.v1.BugfixVerdict", [{ no: 0, name: "BUGFIX_VERDICT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BUGFIX_VERDICT_FIXED", localName: "FIXED" }, { no: 2, name: "BUGFIX_VERDICT_FALSE_POSITIVE", localName: "FALSE_POSITIVE" }, { no: 3, name: "BUGFIX_VERDICT_COULD_NOT_FIX", localName: "COULD_NOT_FIX" }, { no: 4, name: "BUGFIX_VERDICT_RESOLVED_BY_OTHER_FIX", localName: "RESOLVED_BY_OTHER_FIX" }]), BugfixResultItem = proto3.makeMessageType("agent.v1.BugfixResultItem", () => [{ no: 1, name: "bug_id", kind: "scalar", T: 9 }, { no: 2, name: "bug_title", kind: "scalar", T: 9 }, { no: 3, name: "verdict", kind: "enum", T: proto3.getEnumType(BugfixVerdict) }, { no: 4, name: "explanation", kind: "scalar", T: 9 }, { no: 5, name: "severity", kind: "scalar", T: 9, opt: true }]), ReportBugfixResultsArgs = proto3.makeMessageType("agent.v1.ReportBugfixResultsArgs", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "results", kind: "message", T: BugfixResultItem, repeated: true }]), ReportBugfixResultsSuccess = proto3.makeMessageType("agent.v1.ReportBugfixResultsSuccess", () => [{ no: 1, name: "results", kind: "message", T: BugfixResultItem, repeated: true }]), ReportBugfixResultsError = proto3.makeMessageType("agent.v1.ReportBugfixResultsError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), ReportBugfixResultsResult = proto3.makeMessageType("agent.v1.ReportBugfixResultsResult", () => [{ no: 1, name: "success", kind: "message", T: ReportBugfixResultsSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ReportBugfixResultsError, oneof: "result" }]), ReportBugfixResultsToolCall = proto3.makeMessageType("agent.v1.ReportBugfixResultsToolCall", () => [{ no: 1, name: "args", kind: "message", T: ReportBugfixResultsArgs }, { no: 2, name: "result", kind: "message", T: ReportBugfixResultsResult }]), AiAttributionArgs = proto3.makeMessageType("agent.v1.AiAttributionArgs", () => [{ no: 5, name: "file_paths", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "start_line", kind: "scalar", T: 5, opt: true }, { no: 3, name: "end_line", kind: "scalar", T: 5, opt: true }, { no: 6, name: "commit_hashes", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "output_mode", kind: "scalar", T: 9, opt: true }, { no: 9, name: "max_commits", kind: "scalar", T: 5, opt: true }, { no: 10, name: "include_line_ranges", kind: "scalar", T: 8, opt: true }]), AiAttributionResult = proto3.makeMessageType("agent.v1.AiAttributionResult", () => [{ no: 1, name: "success", kind: "message", T: AiAttributionSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: AiAttributionError, oneof: "result" }]), AiAttributionSuccess = proto3.makeMessageType("agent.v1.AiAttributionSuccess", () => [{ no: 1, name: "attribution_text", kind: "scalar", T: 9 }, { no: 2, name: "output_location", kind: "message", T: OutputLocation, opt: true }]), AiAttributionError = proto3.makeMessageType("agent.v1.AiAttributionError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), AiAttributionToolCall = proto3.makeMessageType("agent.v1.AiAttributionToolCall", () => [{ no: 1, name: "args", kind: "message", T: AiAttributionArgs }, { no: 2, name: "result", kind: "message", T: AiAttributionResult }]), MergePrMode = proto3.makeEnum("agent.v1.MergePrMode", [{ no: 0, name: "MERGE_PR_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MERGE_PR_MODE_MERGE", localName: "MERGE" }, { no: 2, name: "MERGE_PR_MODE_AUTO", localName: "AUTO" }, { no: 3, name: "MERGE_PR_MODE_DISABLE_AUTO", localName: "DISABLE_AUTO" }]), MergePrMethod = proto3.makeEnum("agent.v1.MergePrMethod", [{ no: 0, name: "MERGE_PR_METHOD_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MERGE_PR_METHOD_MERGE", localName: "MERGE" }, { no: 2, name: "MERGE_PR_METHOD_SQUASH", localName: "SQUASH" }]), PullRequestStatus = proto3.makeEnum("agent.v1.PullRequestStatus", [{ no: 0, name: "PULL_REQUEST_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "PULL_REQUEST_STATUS_OPEN", localName: "OPEN" }, { no: 2, name: "PULL_REQUEST_STATUS_CLOSED", localName: "CLOSED" }]), PrManagementArgs = proto3.makeMessageType("agent.v1.PrManagementArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "create_pr", kind: "message", T: CreatePrAction, oneof: "action" }, { no: 3, name: "update_pr", kind: "message", T: UpdatePrAction, oneof: "action" }, { no: 4, name: "post_comment", kind: "message", T: PostCommentAction, oneof: "action" }, { no: 5, name: "resolve_comment", kind: "message", T: ResolveCommentAction, oneof: "action" }, { no: 6, name: "get_ci_status", kind: "message", T: GetCiStatusAction, oneof: "action" }, { no: 7, name: "set_pr_status", kind: "message", T: SetPrStatusAction, oneof: "action" }, { no: 8, name: "merge_pr", kind: "message", T: MergePrAction, oneof: "action" }]), CreatePrAction = proto3.makeMessageType("agent.v1.CreatePrAction", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "body", kind: "scalar", T: 9 }, { no: 3, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 4, name: "draft", kind: "scalar", T: 8, opt: true }, { no: 5, name: "branch_name", kind: "scalar", T: 9 }, { no: 6, name: "add_labels", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 8, name: "skip_branch_prefix_check", kind: "scalar", T: 8, opt: true }, { no: 9, name: "stack_on_pr_number", kind: "scalar", T: 3, opt: true }]), UpdatePrAction = proto3.makeMessageType("agent.v1.UpdatePrAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }, { no: 3, name: "body", kind: "scalar", T: 9, opt: true }, { no: 4, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 5, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 6, name: "add_labels", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "remove_labels", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 9, name: "stack_on_pr_number", kind: "scalar", T: 3, opt: true }, { no: 10, name: "clear_stack", kind: "scalar", T: 8, opt: true }, { no: 11, name: "draft", kind: "scalar", T: 8, opt: true }]), PostCommentAction = proto3.makeMessageType("agent.v1.PostCommentAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 5, name: "in_reply_to", kind: "scalar", T: 3, opt: true }, { no: 6, name: "path", kind: "scalar", T: 9, opt: true }, { no: 7, name: "line", kind: "scalar", T: 5, opt: true }, { no: 8, name: "start_line", kind: "scalar", T: 5, opt: true }, { no: 9, name: "side", kind: "scalar", T: 9, opt: true }, { no: 10, name: "reply_to_reference", kind: "scalar", T: 9, opt: true }]), ResolveCommentAction = proto3.makeMessageType("agent.v1.ResolveCommentAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "comment_id", kind: "scalar", T: 3 }, { no: 4, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 5, name: "comment_reference", kind: "scalar", T: 9, opt: true }]), GetCiStatusAction = proto3.makeMessageType("agent.v1.GetCiStatusAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "repo_url", kind: "scalar", T: 9, opt: true }]), SetPrStatusAction = proto3.makeMessageType("agent.v1.SetPrStatusAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(PullRequestStatus) }]), MergePrAction = proto3.makeMessageType("agent.v1.MergePrAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mode", kind: "enum", T: proto3.getEnumType(MergePrMode) }, { no: 5, name: "method", kind: "enum", T: proto3.getEnumType(MergePrMethod) }, { no: 6, name: "expected_head_sha", kind: "scalar", T: 9, opt: true }, { no: 7, name: "expected_member_head_shas", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 8, name: "downstack", kind: "scalar", T: 8 }]), PrManagementResult = proto3.makeMessageType("agent.v1.PrManagementResult", () => [{ no: 1, name: "success", kind: "message", T: PrManagementSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: PrManagementError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: PrManagementRejected, oneof: "result" }, { no: 4, name: "registered", kind: "message", T: PrManagementRegistered, oneof: "result" }, { no: 5, name: "needs_confirmation", kind: "message", T: PrManagementNeedsConfirmation, oneof: "result" }]), PrManagementSuccess = proto3.makeMessageType("agent.v1.PrManagementSuccess", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9 }, { no: 2, name: "pr_number", kind: "scalar", T: 5 }, { no: 3, name: "message", kind: "scalar", T: 9 }]), PrManagementError = proto3.makeMessageType("agent.v1.PrManagementError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), PrManagementRejected = proto3.makeMessageType("agent.v1.PrManagementRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), PrManagementRegistered = proto3.makeMessageType("agent.v1.PrManagementRegistered", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 5, name: "draft", kind: "scalar", T: 8, opt: true }, { no: 6, name: "branch_name", kind: "scalar", T: 9 }]), PrManagementNeedsConfirmation = proto3.makeMessageType("agent.v1.PrManagementNeedsConfirmation", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "discovered_pr_url", kind: "scalar", T: 9 }, { no: 3, name: "discovered_pr_number", kind: "scalar", T: 5 }, { no: 4, name: "discovered_pr_title", kind: "scalar", T: 9 }, { no: 5, name: "branch_name", kind: "scalar", T: 9 }]), PrManagementToolCall = proto3.makeMessageType("agent.v1.PrManagementToolCall", () => [{ no: 1, name: "args", kind: "message", T: PrManagementArgs }, { no: 2, name: "result", kind: "message", T: PrManagementResult }]), McpAuthArgs = proto3.makeMessageType("agent.v1.McpAuthArgs", () => [{ no: 1, name: "server_identifier", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), McpAuthResult = proto3.makeMessageType("agent.v1.McpAuthResult", () => [{ no: 1, name: "success", kind: "message", T: McpAuthSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: McpAuthError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: McpAuthRejected, oneof: "result" }]), McpAuthSuccess = proto3.makeMessageType("agent.v1.McpAuthSuccess", () => [{ no: 1, name: "server_identifier", kind: "scalar", T: 9 }]), McpAuthError = proto3.makeMessageType("agent.v1.McpAuthError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), McpAuthRejected = proto3.makeMessageType("agent.v1.McpAuthRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), McpAuthToolCall = proto3.makeMessageType("agent.v1.McpAuthToolCall", () => [{ no: 1, name: "args", kind: "message", T: McpAuthArgs }, { no: 2, name: "result", kind: "message", T: McpAuthResult }]), McpAuthRequestResponse = proto3.makeMessageType("agent.v1.McpAuthRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: McpAuthRequestResponse_Approved, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: McpAuthRequestResponse_Rejected, oneof: "result" }]), McpAuthRequestResponse_Approved = proto3.makeMessageType("agent.v1.McpAuthRequestResponse.Approved", [], { localName: "McpAuthRequestResponse_Approved" }), McpAuthRequestResponse_Rejected = proto3.makeMessageType("agent.v1.McpAuthRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "McpAuthRequestResponse_Rejected" }), AwaitArgs = proto3.makeMessageType("agent.v1.AwaitArgs", () => [{ no: 1, name: "task_id", kind: "scalar", T: 9 }, { no: 2, name: "block_until_ms", kind: "scalar", T: 13, opt: true }, { no: 3, name: "regex", kind: "scalar", T: 9, opt: true }]), AwaitTaskComplete = proto3.makeMessageType("agent.v1.AwaitTaskComplete", () => [{ no: 1, name: "task_id", kind: "scalar", T: 9 }, { no: 2, name: "runtime_ms", kind: "scalar", T: 4 }, { no: 3, name: "output_file_path", kind: "scalar", T: 9 }, { no: 4, name: "output_length", kind: "scalar", T: 4 }, { no: 5, name: "regex_requested", kind: "scalar", T: 8 }, { no: 6, name: "regex_match", kind: "scalar", T: 9, opt: true }, { no: 7, name: "exit_code", kind: "scalar", T: 17, opt: true }, { no: 8, name: "wake_reason", kind: "scalar", T: 9, opt: true }]), AwaitTaskStillRunning = proto3.makeMessageType("agent.v1.AwaitTaskStillRunning", () => [{ no: 1, name: "task_id", kind: "scalar", T: 9 }, { no: 2, name: "runtime_ms", kind: "scalar", T: 4 }, { no: 3, name: "output_file_path", kind: "scalar", T: 9 }, { no: 4, name: "output_length", kind: "scalar", T: 4 }, { no: 5, name: "regex_requested", kind: "scalar", T: 8 }, { no: 6, name: "regex_match", kind: "scalar", T: 9, opt: true }, { no: 7, name: "wake_reason", kind: "scalar", T: 9, opt: true }]), AwaitError = proto3.makeMessageType("agent.v1.AwaitError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), AwaitSuccess = proto3.makeMessageType("agent.v1.AwaitSuccess", () => [{ no: 1, name: "complete", kind: "message", T: AwaitTaskComplete, oneof: "await_result" }, { no: 2, name: "still_running", kind: "message", T: AwaitTaskStillRunning, oneof: "await_result" }]), AwaitResult = proto3.makeMessageType("agent.v1.AwaitResult", () => [{ no: 1, name: "complete", kind: "message", T: AwaitTaskComplete, oneof: "result" }, { no: 2, name: "still_running", kind: "message", T: AwaitTaskStillRunning, oneof: "result" }, { no: 3, name: "error", kind: "message", T: AwaitError, oneof: "result" }, { no: 4, name: "success", kind: "message", T: AwaitSuccess, oneof: "result" }]), AwaitToolCall = proto3.makeMessageType("agent.v1.AwaitToolCall", () => [{ no: 1, name: "args", kind: "message", T: AwaitArgs }, { no: 2, name: "result", kind: "message", T: AwaitResult }]), BlameByFilePathArgs = proto3.makeMessageType("agent.v1.BlameByFilePathArgs", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5, opt: true }, { no: 3, name: "end_line", kind: "scalar", T: 5, opt: true }]), BlameByFilePathSuccess = proto3.makeMessageType("agent.v1.BlameByFilePathSuccess", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }]), BlameByFilePathError = proto3.makeMessageType("agent.v1.BlameByFilePathError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), BlameByFilePathResult = proto3.makeMessageType("agent.v1.BlameByFilePathResult", () => [{ no: 1, name: "success", kind: "message", T: BlameByFilePathSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: BlameByFilePathError, oneof: "result" }]), BlameByFilePathToolCall = proto3.makeMessageType("agent.v1.BlameByFilePathToolCall", () => [{ no: 1, name: "args", kind: "message", T: BlameByFilePathArgs }, { no: 2, name: "result", kind: "message", T: BlameByFilePathResult }]), GetMcpToolsArgs = proto3.makeMessageType("agent.v1.GetMcpToolsArgs", () => [{ no: 1, name: "server", kind: "scalar", T: 9, opt: true }, { no: 2, name: "tool_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "pattern", kind: "scalar", T: 9, opt: true }, { no: 4, name: "tool_call_id", kind: "scalar", T: 9 }]), GetMcpToolsAgentResult = proto3.makeMessageType("agent.v1.GetMcpToolsAgentResult", () => [{ no: 1, name: "success", kind: "message", T: GetMcpToolsSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: GetMcpToolsError, oneof: "result" }]), GetMcpToolsSuccess = proto3.makeMessageType("agent.v1.GetMcpToolsSuccess", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "output_file_path", kind: "scalar", T: 9, opt: true }]), GetMcpToolsError = proto3.makeMessageType("agent.v1.GetMcpToolsError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), GetMcpToolsToolCall = proto3.makeMessageType("agent.v1.GetMcpToolsToolCall", () => [{ no: 1, name: "args", kind: "message", T: GetMcpToolsArgs }, { no: 2, name: "result", kind: "message", T: GetMcpToolsAgentResult }]), ReportBugArgs = proto3.makeMessageType("agent.v1.ReportBugArgs", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "file", kind: "scalar", T: 9 }, { no: 3, name: "start_line", kind: "scalar", T: 5 }, { no: 4, name: "end_line", kind: "scalar", T: 5 }, { no: 5, name: "description", kind: "scalar", T: 9 }, { no: 6, name: "severity", kind: "scalar", T: 9 }, { no: 7, name: "category", kind: "scalar", T: 9 }, { no: 8, name: "rationale", kind: "scalar", T: 9 }]), ReportBugSuccess = proto3.makeMessageType("agent.v1.ReportBugSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }]), ReportBugError = proto3.makeMessageType("agent.v1.ReportBugError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), ReportBugResult = proto3.makeMessageType("agent.v1.ReportBugResult", () => [{ no: 1, name: "success", kind: "message", T: ReportBugSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ReportBugError, oneof: "result" }]), ReportBugToolCall = proto3.makeMessageType("agent.v1.ReportBugToolCall", () => [{ no: 1, name: "args", kind: "message", T: ReportBugArgs }, { no: 2, name: "result", kind: "message", T: ReportBugResult }]), CommunicateUpdateArgs = proto3.makeMessageType("agent.v1.CommunicateUpdateArgs", () => [{ no: 1, name: "current_step", kind: "scalar", T: 9, opt: true }, { no: 3, name: "final_summary", kind: "scalar", T: 9, opt: true }, { no: 4, name: "completed_subtitle", kind: "scalar", T: 9, opt: true }]), CommunicateUpdateSuccess = proto3.makeMessageType("agent.v1.CommunicateUpdateSuccess", () => [{ no: 1, name: "current_step", kind: "scalar", T: 9 }, { no: 3, name: "message_index", kind: "scalar", T: 13 }]), CommunicateUpdateError = proto3.makeMessageType("agent.v1.CommunicateUpdateError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), CommunicateUpdateResult = proto3.makeMessageType("agent.v1.CommunicateUpdateResult", () => [{ no: 1, name: "success", kind: "message", T: CommunicateUpdateSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: CommunicateUpdateError, oneof: "result" }]), CommunicateUpdateToolCall = proto3.makeMessageType("agent.v1.CommunicateUpdateToolCall", () => [{ no: 1, name: "args", kind: "message", T: CommunicateUpdateArgs }, { no: 2, name: "result", kind: "message", T: CommunicateUpdateResult }]), SendFinalSummaryArgs = proto3.makeMessageType("agent.v1.SendFinalSummaryArgs", () => [{ no: 1, name: "final_summary", kind: "scalar", T: 9, opt: true }]), SendFinalSummarySuccess = proto3.makeMessageType("agent.v1.SendFinalSummarySuccess", () => [{ no: 1, name: "final_summary", kind: "scalar", T: 9 }]), SendFinalSummaryError = proto3.makeMessageType("agent.v1.SendFinalSummaryError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), SendFinalSummaryResult = proto3.makeMessageType("agent.v1.SendFinalSummaryResult", () => [{ no: 1, name: "success", kind: "message", T: SendFinalSummarySuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: SendFinalSummaryError, oneof: "result" }]), SendFinalSummaryToolCall = proto3.makeMessageType("agent.v1.SendFinalSummaryToolCall", () => [{ no: 1, name: "args", kind: "message", T: SendFinalSummaryArgs }, { no: 2, name: "result", kind: "message", T: SendFinalSummaryResult }]), ReplaceEnvMode = proto3.makeEnum("agent.v1.ReplaceEnvMode", [{ no: 0, name: "REPLACE_ENV_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "REPLACE_ENV_MODE_CUSTOM", localName: "CUSTOM" }, { no: 2, name: "REPLACE_ENV_MODE_CLEAN_SLATE", localName: "CLEAN_SLATE" }, { no: 3, name: "REPLACE_ENV_MODE_DEFAULT", localName: "DEFAULT" }]), RepoCheckoutRefOverride = proto3.makeMessageType("agent.v1.RepoCheckoutRefOverride", () => [{ no: 1, name: "repo_url", kind: "scalar", T: 9 }, { no: 2, name: "ref", kind: "scalar", T: 9 }]), ReplaceEnvConfig = proto3.makeMessageType("agent.v1.ReplaceEnvConfig", () => [{ no: 1, name: "install_script", kind: "scalar", T: 9 }, { no: 2, name: "dockerfile_contents", kind: "scalar", T: 9 }]), ReplaceEnvArgs = proto3.makeMessageType("agent.v1.ReplaceEnvArgs", () => [{ no: 1, name: "config", kind: "message", T: ReplaceEnvConfig }, { no: 2, name: "mode", kind: "enum", T: proto3.getEnumType(ReplaceEnvMode) }, { no: 3, name: "checkout_ref_overrides", kind: "message", T: RepoCheckoutRefOverride, repeated: true }]), ReplaceEnvSuccess = proto3.makeMessageType("agent.v1.ReplaceEnvSuccess", () => [{ no: 1, name: "setup_logs", kind: "scalar", T: 9 }]), ReplaceEnvFailure = proto3.makeMessageType("agent.v1.ReplaceEnvFailure", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }, { no: 2, name: "setup_logs", kind: "scalar", T: 9 }]), ReplaceEnvResult = proto3.makeMessageType("agent.v1.ReplaceEnvResult", () => [{ no: 1, name: "success", kind: "message", T: ReplaceEnvSuccess, oneof: "result" }, { no: 2, name: "failure", kind: "message", T: ReplaceEnvFailure, oneof: "result" }]), ReplaceEnvToolCall = proto3.makeMessageType("agent.v1.ReplaceEnvToolCall", () => [{ no: 1, name: "args", kind: "message", T: ReplaceEnvArgs }, { no: 2, name: "result", kind: "message", T: ReplaceEnvResult }, { no: 3, name: "associated_pod_key", kind: "scalar", T: 9 }]), EditPrLabelsArgs = proto3.makeMessageType("agent.v1.EditPrLabelsArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "pr_url", kind: "scalar", T: 9 }, { no: 4, name: "add_labels", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "remove_labels", kind: "scalar", T: 9, repeated: true }]), EditPrLabelsResult = proto3.makeMessageType("agent.v1.EditPrLabelsResult", () => [{ no: 1, name: "success", kind: "message", T: EditPrLabelsSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: EditPrLabelsError, oneof: "result" }]), EditPrLabelsSuccess = proto3.makeMessageType("agent.v1.EditPrLabelsSuccess", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9 }, { no: 2, name: "pr_number", kind: "scalar", T: 5 }, { no: 3, name: "message", kind: "scalar", T: 9 }]), EditPrLabelsError = proto3.makeMessageType("agent.v1.EditPrLabelsError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), EditPrLabelsToolCall = proto3.makeMessageType("agent.v1.EditPrLabelsToolCall", () => [{ no: 1, name: "args", kind: "message", T: EditPrLabelsArgs }, { no: 2, name: "result", kind: "message", T: EditPrLabelsResult }]), RecordCiInvestigationFinding = proto3.makeMessageType("agent.v1.RecordCiInvestigationFinding", () => [{ no: 1, name: "check_name", kind: "scalar", T: 9 }, { no: 2, name: "details_url", kind: "scalar", T: 9, opt: true }, { no: 3, name: "tldr", kind: "scalar", T: 9 }, { no: 4, name: "root_cause", kind: "scalar", T: 9, opt: true }, { no: 5, name: "failing_signal", kind: "scalar", T: 9, opt: true }, { no: 6, name: "suggested_next_step", kind: "scalar", T: 9, opt: true }, { no: 7, name: "diff_relation", kind: "scalar", T: 9, opt: true }, { no: 8, name: "diff_relation_evidence", kind: "scalar", T: 9, opt: true }, { no: 9, name: "flake_assessment", kind: "scalar", T: 9, opt: true }, { no: 10, name: "flake_evidence", kind: "scalar", T: 9, opt: true }, { no: 11, name: "rerun_available", kind: "scalar", T: 8, opt: true }, { no: 12, name: "rerun_evidence", kind: "scalar", T: 9, opt: true }, { no: 13, name: "recommended_action", kind: "scalar", T: 9, opt: true }, { no: 14, name: "recommended_action_evidence", kind: "scalar", T: 9, opt: true }, { no: 15, name: "confidence", kind: "scalar", T: 9, opt: true }]), RecordCiInvestigationOverall = proto3.makeMessageType("agent.v1.RecordCiInvestigationOverall", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "themes", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "recommended_action", kind: "scalar", T: 9, opt: true }, { no: 4, name: "recommended_action_evidence", kind: "scalar", T: 9, opt: true }, { no: 5, name: "check_keys", kind: "scalar", T: 9, repeated: true }]), RecordCiInvestigationFindingsArgs = proto3.makeMessageType("agent.v1.RecordCiInvestigationFindingsArgs", () => [{ no: 1, name: "findings", kind: "message", T: RecordCiInvestigationFinding, repeated: true }, { no: 2, name: "overall", kind: "message", T: RecordCiInvestigationOverall, opt: true }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }]), RecordCiInvestigationFindingsSuccess = proto3.makeMessageType("agent.v1.RecordCiInvestigationFindingsSuccess", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }]), RecordCiInvestigationFindingsError = proto3.makeMessageType("agent.v1.RecordCiInvestigationFindingsError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), RecordCiInvestigationFindingsResult = proto3.makeMessageType("agent.v1.RecordCiInvestigationFindingsResult", () => [{ no: 1, name: "success", kind: "message", T: RecordCiInvestigationFindingsSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: RecordCiInvestigationFindingsError, oneof: "result" }]), RecordCiInvestigationFindingsToolCall = proto3.makeMessageType("agent.v1.RecordCiInvestigationFindingsToolCall", () => [{ no: 1, name: "args", kind: "message", T: RecordCiInvestigationFindingsArgs }, { no: 2, name: "result", kind: "message", T: RecordCiInvestigationFindingsResult }]), SendMessageText = proto3.makeMessageType("agent.v1.SendMessageText", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }]), SendMessageAttachment = proto3.makeMessageType("agent.v1.SendMessageAttachment", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "alt", kind: "scalar", T: 9, opt: true }]), SendMessageArgs = proto3.makeMessageType("agent.v1.SendMessageArgs", () => [{ no: 1, name: "text", kind: "message", T: SendMessageText, oneof: "message" }, { no: 2, name: "attachment", kind: "message", T: SendMessageAttachment, oneof: "message" }]), SendMessageSuccess = proto3.makeMessageType("agent.v1.SendMessageSuccess", () => [{ no: 1, name: "timestamp", kind: "scalar", T: 4 }, { no: 2, name: "message_id", kind: "scalar", T: 9 }]), SendMessageError = proto3.makeMessageType("agent.v1.SendMessageError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), SendMessageResult = proto3.makeMessageType("agent.v1.SendMessageResult", () => [{ no: 1, name: "success", kind: "message", T: SendMessageSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: SendMessageError, oneof: "result" }]), SendMessageToolCall = proto3.makeMessageType("agent.v1.SendMessageToolCall", () => [{ no: 1, name: "args", kind: "message", T: SendMessageArgs }, { no: 2, name: "result", kind: "message", T: SendMessageResult }]), FetchCloudAgentDataArgs = proto3.makeMessageType("agent.v1.FetchCloudAgentDataArgs", () => [{ no: 4, name: "bc_ids", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "sources", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "statuses", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "include_team_wide", kind: "scalar", T: 8 }, { no: 9, name: "include_archived", kind: "scalar", T: 8 }, { no: 10, name: "limit", kind: "scalar", T: 5, opt: true }, { no: 12, name: "include_transcript", kind: "scalar", T: 8 }, { no: 13, name: "active_since", kind: "scalar", T: 9 }]), FetchCloudAgentDataResult = proto3.makeMessageType("agent.v1.FetchCloudAgentDataResult", () => [{ no: 1, name: "success", kind: "message", T: FetchCloudAgentDataSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: FetchCloudAgentDataError, oneof: "result" }]), FetchCloudAgentDataSuccess = proto3.makeMessageType("agent.v1.FetchCloudAgentDataSuccess", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "agent_count", kind: "scalar", T: 5 }, { no: 3, name: "written_paths", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "unavailable_bc_ids", kind: "scalar", T: 9, repeated: true }]), FetchCloudAgentDataError = proto3.makeMessageType("agent.v1.FetchCloudAgentDataError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), FetchCloudAgentDataToolCall = proto3.makeMessageType("agent.v1.FetchCloudAgentDataToolCall", () => [{ no: 1, name: "args", kind: "message", T: FetchCloudAgentDataArgs }, { no: 2, name: "result", kind: "message", T: FetchCloudAgentDataResult }]), SendToUserArgs = proto3.makeMessageType("agent.v1.SendToUserArgs", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }]), SendToUserSuccess = proto3.makeMessageType("agent.v1.SendToUserSuccess", []), SendToUserError = proto3.makeMessageType("agent.v1.SendToUserError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), SendToUserResult = proto3.makeMessageType("agent.v1.SendToUserResult", () => [{ no: 1, name: "success", kind: "message", T: SendToUserSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: SendToUserError, oneof: "result" }]), SendToUserToolCall = proto3.makeMessageType("agent.v1.SendToUserToolCall", () => [{ no: 1, name: "args", kind: "message", T: SendToUserArgs }, { no: 2, name: "result", kind: "message", T: SendToUserResult }]), PiTruncation = proto3.makeMessageType("agent.v1.PiTruncation", () => [{ no: 1, name: "truncated", kind: "scalar", T: 8 }, { no: 2, name: "truncated_by", kind: "scalar", T: 9 }, { no: 3, name: "total_lines", kind: "scalar", T: 13 }, { no: 4, name: "output_lines", kind: "scalar", T: 13 }, { no: 5, name: "output_bytes", kind: "scalar", T: 13 }, { no: 6, name: "max_lines", kind: "scalar", T: 13, opt: true }, { no: 7, name: "max_bytes", kind: "scalar", T: 13, opt: true }, { no: 8, name: "first_line_exceeds_limit", kind: "scalar", T: 8 }, { no: 9, name: "last_line_partial", kind: "scalar", T: 8 }]), PiReadToolCall = proto3.makeMessageType("agent.v1.PiReadToolCall", () => [{ no: 1, name: "args", kind: "message", T: PiReadToolArgs }, { no: 2, name: "result", kind: "message", T: PiReadToolResult }]), PiReadToolArgs = proto3.makeMessageType("agent.v1.PiReadToolArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "offset", kind: "scalar", T: 5, opt: true }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }]), PiReadToolResult = proto3.makeMessageType("agent.v1.PiReadToolResult", () => [{ no: 1, name: "success", kind: "message", T: PiReadToolSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: PiReadToolError, oneof: "result" }]), PiReadToolSuccess = proto3.makeMessageType("agent.v1.PiReadToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true }]), PiReadToolError = proto3.makeMessageType("agent.v1.PiReadToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), PiBashToolCall = proto3.makeMessageType("agent.v1.PiBashToolCall", () => [{ no: 1, name: "args", kind: "message", T: PiBashToolArgs }, { no: 2, name: "result", kind: "message", T: PiBashToolResult }]), PiBashToolArgs = proto3.makeMessageType("agent.v1.PiBashToolArgs", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "timeout", kind: "scalar", T: 1, opt: true }]), PiBashToolResult = proto3.makeMessageType("agent.v1.PiBashToolResult", () => [{ no: 1, name: "success", kind: "message", T: PiBashToolSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: PiBashToolError, oneof: "result" }]), PiBashToolSuccess = proto3.makeMessageType("agent.v1.PiBashToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true }, { no: 3, name: "full_output_path", kind: "scalar", T: 9, opt: true }]), PiBashToolError = proto3.makeMessageType("agent.v1.PiBashToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true }, { no: 3, name: "full_output_path", kind: "scalar", T: 9, opt: true }]), PiEditReplacement = proto3.makeMessageType("agent.v1.PiEditReplacement", () => [{ no: 1, name: "old_text", kind: "scalar", T: 9 }, { no: 2, name: "new_text", kind: "scalar", T: 9 }]), PiEditToolCall = proto3.makeMessageType("agent.v1.PiEditToolCall", () => [{ no: 1, name: "args", kind: "message", T: PiEditToolArgs }, { no: 2, name: "result", kind: "message", T: PiEditToolResult }]), PiEditToolArgs = proto3.makeMessageType("agent.v1.PiEditToolArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "edits", kind: "message", T: PiEditReplacement, repeated: true }]), PiEditToolResult = proto3.makeMessageType("agent.v1.PiEditToolResult", () => [{ no: 1, name: "success", kind: "message", T: PiEditToolSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: PiEditToolError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: PiEditToolRejected, oneof: "result" }]), PiEditToolSuccess = proto3.makeMessageType("agent.v1.PiEditToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "diff", kind: "scalar", T: 9 }, { no: 3, name: "patch", kind: "scalar", T: 9 }, { no: 4, name: "first_changed_line", kind: "scalar", T: 13, opt: true }]), PiEditToolError = proto3.makeMessageType("agent.v1.PiEditToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), PiEditToolRejected = proto3.makeMessageType("agent.v1.PiEditToolRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), PiWriteToolCall = proto3.makeMessageType("agent.v1.PiWriteToolCall", () => [{ no: 1, name: "args", kind: "message", T: PiWriteToolArgs }, { no: 2, name: "result", kind: "message", T: PiWriteToolResult }]), PiWriteToolArgs = proto3.makeMessageType("agent.v1.PiWriteToolArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }]), PiWriteToolResult = proto3.makeMessageType("agent.v1.PiWriteToolResult", () => [{ no: 1, name: "success", kind: "message", T: PiWriteToolSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: PiWriteToolError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: PiWriteToolRejected, oneof: "result" }]), PiWriteToolSuccess = proto3.makeMessageType("agent.v1.PiWriteToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }]), PiWriteToolError = proto3.makeMessageType("agent.v1.PiWriteToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), PiWriteToolRejected = proto3.makeMessageType("agent.v1.PiWriteToolRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), PiGrepToolCall = proto3.makeMessageType("agent.v1.PiGrepToolCall", () => [{ no: 1, name: "args", kind: "message", T: PiGrepToolArgs }, { no: 2, name: "result", kind: "message", T: PiGrepToolResult }]), PiGrepToolArgs = proto3.makeMessageType("agent.v1.PiGrepToolArgs", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "glob", kind: "scalar", T: 9, opt: true }, { no: 4, name: "ignore_case", kind: "scalar", T: 8, opt: true }, { no: 5, name: "literal", kind: "scalar", T: 8, opt: true }, { no: 6, name: "context", kind: "scalar", T: 5, opt: true }, { no: 7, name: "limit", kind: "scalar", T: 5, opt: true }]), PiGrepToolResult = proto3.makeMessageType("agent.v1.PiGrepToolResult", () => [{ no: 1, name: "success", kind: "message", T: PiGrepToolSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: PiGrepToolError, oneof: "result" }]), PiGrepToolSuccess = proto3.makeMessageType("agent.v1.PiGrepToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true }, { no: 3, name: "match_limit_reached", kind: "scalar", T: 13, opt: true }, { no: 4, name: "lines_truncated", kind: "scalar", T: 8 }]), PiGrepToolError = proto3.makeMessageType("agent.v1.PiGrepToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), PiFindToolCall = proto3.makeMessageType("agent.v1.PiFindToolCall", () => [{ no: 1, name: "args", kind: "message", T: PiFindToolArgs }, { no: 2, name: "result", kind: "message", T: PiFindToolResult }]), PiFindToolArgs = proto3.makeMessageType("agent.v1.PiFindToolArgs", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }]), PiFindToolResult = proto3.makeMessageType("agent.v1.PiFindToolResult", () => [{ no: 1, name: "success", kind: "message", T: PiFindToolSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: PiFindToolError, oneof: "result" }]), PiFindToolSuccess = proto3.makeMessageType("agent.v1.PiFindToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true }, { no: 3, name: "result_limit_reached", kind: "scalar", T: 13, opt: true }]), PiFindToolError = proto3.makeMessageType("agent.v1.PiFindToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), PiLsToolCall = proto3.makeMessageType("agent.v1.PiLsToolCall", () => [{ no: 1, name: "args", kind: "message", T: PiLsToolArgs }, { no: 2, name: "result", kind: "message", T: PiLsToolResult }]), PiLsToolArgs = proto3.makeMessageType("agent.v1.PiLsToolArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9, opt: true }, { no: 2, name: "limit", kind: "scalar", T: 5, opt: true }]), PiLsToolResult = proto3.makeMessageType("agent.v1.PiLsToolResult", () => [{ no: 1, name: "success", kind: "message", T: PiLsToolSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: PiLsToolError, oneof: "result" }]), PiLsToolSuccess = proto3.makeMessageType("agent.v1.PiLsToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true }, { no: 3, name: "entry_limit_reached", kind: "scalar", T: 13, opt: true }]), PiLsToolError = proto3.makeMessageType("agent.v1.PiLsToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), ConnectScmArgs = proto3.makeMessageType("agent.v1.ConnectScmArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "github", kind: "message", T: ConnectScmGithub, oneof: "target" }]), ConnectScmGithub = proto3.makeMessageType("agent.v1.ConnectScmGithub", () => [{ no: 1, name: "repository", kind: "message", T: ConnectScmGithubRepository }, { no: 2, name: "ghe_application", kind: "scalar", T: 9, opt: true }]), ConnectScmGithubRepository = proto3.makeMessageType("agent.v1.ConnectScmGithubRepository", () => [{ no: 1, name: "owner", kind: "scalar", T: 9 }, { no: 2, name: "repo", kind: "scalar", T: 9 }]), ConnectScmResult = proto3.makeMessageType("agent.v1.ConnectScmResult", () => [{ no: 1, name: "success", kind: "message", T: ConnectScmSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ConnectScmError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: ConnectScmRejected, oneof: "result" }]), ConnectScmSuccess = proto3.makeMessageType("agent.v1.ConnectScmSuccess", []), ConnectScmError = proto3.makeMessageType("agent.v1.ConnectScmError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), ConnectScmRejected = proto3.makeMessageType("agent.v1.ConnectScmRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), ConnectScmToolCall = proto3.makeMessageType("agent.v1.ConnectScmToolCall", () => [{ no: 1, name: "args", kind: "message", T: ConnectScmArgs }, { no: 2, name: "result", kind: "message", T: ConnectScmResult }]), ConnectScmRequestResponse = proto3.makeMessageType("agent.v1.ConnectScmRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: ConnectScmRequestResponse_Approved, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: ConnectScmRequestResponse_Rejected, oneof: "result" }, { no: 3, name: "failed", kind: "message", T: ConnectScmRequestResponse_Failed, oneof: "result" }]), ConnectScmRequestResponse_Approved = proto3.makeMessageType("agent.v1.ConnectScmRequestResponse.Approved", [], { localName: "ConnectScmRequestResponse_Approved" }), ConnectScmRequestResponse_Rejected = proto3.makeMessageType("agent.v1.ConnectScmRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "ConnectScmRequestResponse_Rejected" }), ConnectScmRequestResponse_Failed = proto3.makeMessageType("agent.v1.ConnectScmRequestResponse.Failed", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }], { localName: "ConnectScmRequestResponse_Failed" }), ConversationSearchSource = proto3.makeEnum("agent.v1.ConversationSearchSource", [{ no: 0, name: "CONVERSATION_SEARCH_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CONVERSATION_SEARCH_SOURCE_LOCAL", localName: "LOCAL" }, { no: 2, name: "CONVERSATION_SEARCH_SOURCE_CLOUD_CACHE", localName: "CLOUD_CACHE" }]), ConversationSearchArgs = proto3.makeMessageType("agent.v1.ConversationSearchArgs", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }]), ConversationSearchResult = proto3.makeMessageType("agent.v1.ConversationSearchResult", () => [{ no: 1, name: "success", kind: "message", T: ConversationSearchSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ConversationSearchError, oneof: "result" }]), ConversationSearchSuccess = proto3.makeMessageType("agent.v1.ConversationSearchSuccess", () => [{ no: 1, name: "hits", kind: "message", T: ConversationSearchHit, repeated: true }, { no: 2, name: "truncated", kind: "scalar", T: 8 }, { no: 3, name: "partial", kind: "scalar", T: 8 }, { no: 4, name: "rebuilding", kind: "scalar", T: 8 }]), ConversationSearchHit = proto3.makeMessageType("agent.v1.ConversationSearchHit", () => [{ no: 1, name: "conversation_id", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "source", kind: "enum", T: proto3.getEnumType(ConversationSearchSource) }, { no: 4, name: "updated_at_ms", kind: "scalar", T: 3 }, { no: 5, name: "snippet", kind: "scalar", T: 9, opt: true }]), ConversationSearchError = proto3.makeMessageType("agent.v1.ConversationSearchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), SearchConversationsToolCall = proto3.makeMessageType("agent.v1.SearchConversationsToolCall", () => [{ no: 1, name: "args", kind: "message", T: ConversationSearchArgs }, { no: 2, name: "result", kind: "message", T: ConversationSearchResult }]), GoalStatus = proto3.makeEnum("agent.v1.GoalStatus", [{ no: 0, name: "GOAL_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "GOAL_STATUS_ACTIVE", localName: "ACTIVE" }, { no: 2, name: "GOAL_STATUS_PAUSED", localName: "PAUSED" }, { no: 3, name: "GOAL_STATUS_COMPLETE", localName: "COMPLETE" }, { no: 4, name: "GOAL_STATUS_CLEARED", localName: "CLEARED" }]), CreateGoalArgs = proto3.makeMessageType("agent.v1.CreateGoalArgs", () => [{ no: 1, name: "objective", kind: "scalar", T: 9 }]), CreateGoalSuccess = proto3.makeMessageType("agent.v1.CreateGoalSuccess", []), GoalError = proto3.makeMessageType("agent.v1.GoalError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), CreateGoalResult = proto3.makeMessageType("agent.v1.CreateGoalResult", () => [{ no: 1, name: "success", kind: "message", T: CreateGoalSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: GoalError, oneof: "result" }]), CreateGoalToolCall = proto3.makeMessageType("agent.v1.CreateGoalToolCall", () => [{ no: 1, name: "args", kind: "message", T: CreateGoalArgs }, { no: 2, name: "result", kind: "message", T: CreateGoalResult }]), UpdateGoalArgs = proto3.makeMessageType("agent.v1.UpdateGoalArgs", () => [{ no: 1, name: "status", kind: "enum", T: proto3.getEnumType(GoalStatus) }]), UpdateGoalSuccess = proto3.makeMessageType("agent.v1.UpdateGoalSuccess", () => [{ no: 1, name: "status", kind: "enum", T: proto3.getEnumType(GoalStatus) }]), UpdateGoalResult = proto3.makeMessageType("agent.v1.UpdateGoalResult", () => [{ no: 1, name: "success", kind: "message", T: UpdateGoalSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: GoalError, oneof: "result" }]), UpdateGoalToolCall = proto3.makeMessageType("agent.v1.UpdateGoalToolCall", () => [{ no: 1, name: "args", kind: "message", T: UpdateGoalArgs }, { no: 2, name: "result", kind: "message", T: UpdateGoalResult }]), CreateAgentPlacementApprovalState = proto3.makeEnum("agent.v1.CreateAgentPlacementApprovalState", [{ no: 0, name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_REQUIRED", localName: "REQUIRED" }, { no: 2, name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_DENIED", localName: "DENIED" }]), GetAgentStatusArgs = proto3.makeMessageType("agent.v1.GetAgentStatusArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "agent_ids", kind: "scalar", T: 9, repeated: true }]), GetAgentStatusWorker = proto3.makeMessageType("agent.v1.GetAgentStatusWorker", () => [{ no: 1, name: "bc_id", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "lifecycle", kind: "scalar", T: 9 }, { no: 4, name: "turn_in_flight", kind: "scalar", T: 8 }, { no: 5, name: "last_terminal_turn_status", kind: "scalar", T: 9 }, { no: 6, name: "pr_url", kind: "scalar", T: 9 }, { no: 7, name: "last_activity_at_ms", kind: "scalar", T: 4 }]), GetAgentStatusSuccess = proto3.makeMessageType("agent.v1.GetAgentStatusSuccess", () => [{ no: 1, name: "workers", kind: "message", T: GetAgentStatusWorker, repeated: true }, { no: 2, name: "message", kind: "scalar", T: 9 }]), GetAgentStatusError = proto3.makeMessageType("agent.v1.GetAgentStatusError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), GetAgentStatusResult = proto3.makeMessageType("agent.v1.GetAgentStatusResult", () => [{ no: 1, name: "success", kind: "message", T: GetAgentStatusSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: GetAgentStatusError, oneof: "result" }]), GetAgentStatusToolCall = proto3.makeMessageType("agent.v1.GetAgentStatusToolCall", () => [{ no: 1, name: "args", kind: "message", T: GetAgentStatusArgs }, { no: 2, name: "result", kind: "message", T: GetAgentStatusResult }]), SendToAgentArgs = proto3.makeMessageType("agent.v1.SendToAgentArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "agent_id", kind: "scalar", T: 9 }, { no: 3, name: "message", kind: "scalar", T: 9 }, { no: 4, name: "delivery", kind: "scalar", T: 9 }, { no: 5, name: "title", kind: "scalar", T: 9 }, { no: 6, name: "model", kind: "scalar", T: 9, opt: true }]), SendToAgentSuccess = proto3.makeMessageType("agent.v1.SendToAgentSuccess", () => [{ no: 1, name: "worker_bc_id", kind: "scalar", T: 9 }, { no: 2, name: "delivered_as", kind: "scalar", T: 9 }, { no: 3, name: "message", kind: "scalar", T: 9 }]), SendToAgentError = proto3.makeMessageType("agent.v1.SendToAgentError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), SendToAgentResult = proto3.makeMessageType("agent.v1.SendToAgentResult", () => [{ no: 1, name: "success", kind: "message", T: SendToAgentSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: SendToAgentError, oneof: "result" }]), SendToAgentToolCall = proto3.makeMessageType("agent.v1.SendToAgentToolCall", () => [{ no: 1, name: "args", kind: "message", T: SendToAgentArgs }, { no: 2, name: "result", kind: "message", T: SendToAgentResult }]), ReadAgentTranscriptArgs = proto3.makeMessageType("agent.v1.ReadAgentTranscriptArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "agent_id", kind: "scalar", T: 9 }, { no: 3, name: "mode", kind: "scalar", T: 9 }, { no: 4, name: "max_turns", kind: "scalar", T: 13 }]), ReadAgentTranscriptSuccess = proto3.makeMessageType("agent.v1.ReadAgentTranscriptSuccess", () => [{ no: 1, name: "transcript", kind: "scalar", T: 9 }, { no: 2, name: "truncated", kind: "scalar", T: 8 }]), ReadAgentTranscriptError = proto3.makeMessageType("agent.v1.ReadAgentTranscriptError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), ReadAgentTranscriptResult = proto3.makeMessageType("agent.v1.ReadAgentTranscriptResult", () => [{ no: 1, name: "success", kind: "message", T: ReadAgentTranscriptSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ReadAgentTranscriptError, oneof: "result" }]), ReadAgentTranscriptToolCall = proto3.makeMessageType("agent.v1.ReadAgentTranscriptToolCall", () => [{ no: 1, name: "args", kind: "message", T: ReadAgentTranscriptArgs }, { no: 2, name: "result", kind: "message", T: ReadAgentTranscriptResult }]), CreateAgentArgs = proto3.makeMessageType("agent.v1.CreateAgentArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "prompt", kind: "scalar", T: 9 }, { no: 3, name: "name", kind: "scalar", T: 9, opt: true }, { no: 4, name: "model", kind: "scalar", T: 9, opt: true }, { no: 5, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 6, name: "machine_type", kind: "scalar", T: 9, opt: true }, { no: 7, name: "worker_id", kind: "scalar", T: 9, opt: true }, { no: 8, name: "pool", kind: "scalar", T: 9, opt: true }, { no: 9, name: "labels", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 10, name: "environment_build_id", kind: "scalar", T: 9, opt: true }, { no: 11, name: "environment_id", kind: "scalar", T: 9, opt: true }]), CreateAgentSuccess = proto3.makeMessageType("agent.v1.CreateAgentSuccess", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }, { no: 2, name: "message", kind: "scalar", T: 9 }]), CreateAgentError = proto3.makeMessageType("agent.v1.CreateAgentError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "placement_approval_state", kind: "enum", T: proto3.getEnumType(CreateAgentPlacementApprovalState), opt: true }]), CreateAgentResult = proto3.makeMessageType("agent.v1.CreateAgentResult", () => [{ no: 1, name: "success", kind: "message", T: CreateAgentSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: CreateAgentError, oneof: "result" }]), CreateAgentToolCall = proto3.makeMessageType("agent.v1.CreateAgentToolCall", () => [{ no: 1, name: "args", kind: "message", T: CreateAgentArgs }, { no: 2, name: "result", kind: "message", T: CreateAgentResult }]), StopAgentArgs = proto3.makeMessageType("agent.v1.StopAgentArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "agent_id", kind: "scalar", T: 9 }]), StopAgentSuccess = proto3.makeMessageType("agent.v1.StopAgentSuccess", () => [{ no: 1, name: "worker_bc_id", kind: "scalar", T: 9 }, { no: 2, name: "message", kind: "scalar", T: 9 }]), StopAgentError = proto3.makeMessageType("agent.v1.StopAgentError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), StopAgentResult = proto3.makeMessageType("agent.v1.StopAgentResult", () => [{ no: 1, name: "success", kind: "message", T: StopAgentSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: StopAgentError, oneof: "result" }]), StopAgentToolCall = proto3.makeMessageType("agent.v1.StopAgentToolCall", () => [{ no: 1, name: "args", kind: "message", T: StopAgentArgs }, { no: 2, name: "result", kind: "message", T: StopAgentResult }]), WriteCanvasFailReason = proto3.makeEnum("agent.v1.WriteCanvasFailReason", [{ no: 0, name: "WRITE_CANVAS_FAIL_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "WRITE_CANVAS_FAIL_REASON_TYPECHECK_FAILED", localName: "TYPECHECK_FAILED" }, { no: 2, name: "WRITE_CANVAS_FAIL_REASON_COMPILE_FAILED", localName: "COMPILE_FAILED" }, { no: 3, name: "WRITE_CANVAS_FAIL_REASON_TOO_LARGE", localName: "TOO_LARGE" }, { no: 4, name: "WRITE_CANVAS_FAIL_REASON_UNAVAILABLE", localName: "UNAVAILABLE" }, { no: 5, name: "WRITE_CANVAS_FAIL_REASON_NOT_FOUND", localName: "NOT_FOUND" }, { no: 6, name: "WRITE_CANVAS_FAIL_REASON_REFUSED", localName: "REFUSED" }]), ReadCanvasFailReason = proto3.makeEnum("agent.v1.ReadCanvasFailReason", [{ no: 0, name: "READ_CANVAS_FAIL_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "READ_CANVAS_FAIL_REASON_NOT_FOUND", localName: "NOT_FOUND" }, { no: 2, name: "READ_CANVAS_FAIL_REASON_UNAVAILABLE", localName: "UNAVAILABLE" }, { no: 3, name: "READ_CANVAS_FAIL_REASON_REFUSED", localName: "REFUSED" }, { no: 4, name: "READ_CANVAS_FAIL_REASON_INVALID_REFERENCE", localName: "INVALID_REFERENCE" }]), CloudCanvasToolDiagnosticPosition = proto3.makeMessageType("agent.v1.CloudCanvasToolDiagnosticPosition", () => [{ no: 1, name: "line", kind: "scalar", T: 5 }, { no: 2, name: "character", kind: "scalar", T: 5 }]), CloudCanvasToolDiagnosticRange = proto3.makeMessageType("agent.v1.CloudCanvasToolDiagnosticRange", () => [{ no: 1, name: "start", kind: "message", T: CloudCanvasToolDiagnosticPosition }, { no: 2, name: "end", kind: "message", T: CloudCanvasToolDiagnosticPosition }]), CloudCanvasToolDiagnostic = proto3.makeMessageType("agent.v1.CloudCanvasToolDiagnostic", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "code", kind: "scalar", T: 9, opt: true }, { no: 3, name: "severity", kind: "scalar", T: 5, opt: true }, { no: 4, name: "range", kind: "message", T: CloudCanvasToolDiagnosticRange, opt: true }]), WriteCanvasArgs = proto3.makeMessageType("agent.v1.WriteCanvasArgs", () => [{ no: 1, name: "contents", kind: "scalar", T: 9 }, { no: 2, name: "canvas_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "title", kind: "scalar", T: 9, opt: true }]), WriteCanvasSuccess = proto3.makeMessageType("agent.v1.WriteCanvasSuccess", () => [{ no: 1, name: "canvas_id", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }, { no: 3, name: "url", kind: "scalar", T: 9 }]), WriteCanvasFailure = proto3.makeMessageType("agent.v1.WriteCanvasFailure", () => [{ no: 1, name: "reason", kind: "enum", T: proto3.getEnumType(WriteCanvasFailReason) }, { no: 2, name: "diagnostics", kind: "message", T: CloudCanvasToolDiagnostic, repeated: true }, { no: 3, name: "detail", kind: "scalar", T: 9, opt: true }]), WriteCanvasResult = proto3.makeMessageType("agent.v1.WriteCanvasResult", () => [{ no: 1, name: "success", kind: "message", T: WriteCanvasSuccess, oneof: "result" }, { no: 2, name: "failure", kind: "message", T: WriteCanvasFailure, oneof: "result" }]), WriteCanvasToolCall = proto3.makeMessageType("agent.v1.WriteCanvasToolCall", () => [{ no: 1, name: "args", kind: "message", T: WriteCanvasArgs }, { no: 2, name: "result", kind: "message", T: WriteCanvasResult }]), ReadCanvasArgs = proto3.makeMessageType("agent.v1.ReadCanvasArgs", () => [{ no: 1, name: "canvas_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "url", kind: "scalar", T: 9, opt: true }]), ReadCanvasSuccess = proto3.makeMessageType("agent.v1.ReadCanvasSuccess", () => [{ no: 1, name: "canvas_id", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }, { no: 3, name: "url", kind: "scalar", T: 9 }, { no: 4, name: "source", kind: "scalar", T: 9 }]), ReadCanvasFailure = proto3.makeMessageType("agent.v1.ReadCanvasFailure", () => [{ no: 1, name: "reason", kind: "enum", T: proto3.getEnumType(ReadCanvasFailReason) }, { no: 2, name: "detail", kind: "scalar", T: 9, opt: true }]), ReadCanvasResult = proto3.makeMessageType("agent.v1.ReadCanvasResult", () => [{ no: 1, name: "success", kind: "message", T: ReadCanvasSuccess, oneof: "result" }, { no: 2, name: "failure", kind: "message", T: ReadCanvasFailure, oneof: "result" }]), ReadCanvasToolCall = proto3.makeMessageType("agent.v1.ReadCanvasToolCall", () => [{ no: 1, name: "args", kind: "message", T: ReadCanvasArgs }, { no: 2, name: "result", kind: "message", T: ReadCanvasResult }]), GenerateVideoArgs = proto3.makeMessageType("agent.v1.GenerateVideoArgs", () => [{ no: 1, name: "prompt", kind: "scalar", T: 9 }, { no: 2, name: "file_path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "image_path", kind: "scalar", T: 9, opt: true }, { no: 4, name: "reference_image_paths", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "duration_seconds", kind: "scalar", T: 13, opt: true }, { no: 6, name: "aspect_ratio", kind: "scalar", T: 9, opt: true }, { no: 7, name: "resolution", kind: "scalar", T: 9, opt: true }]), GenerateVideoResult = proto3.makeMessageType("agent.v1.GenerateVideoResult", () => [{ no: 1, name: "success", kind: "message", T: GenerateVideoSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: GenerateVideoError, oneof: "result" }]), GenerateVideoSuccess = proto3.makeMessageType("agent.v1.GenerateVideoSuccess", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "duration_seconds", kind: "scalar", T: 13 }]), GenerateVideoError = proto3.makeMessageType("agent.v1.GenerateVideoError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), GenerateVideoToolCall = proto3.makeMessageType("agent.v1.GenerateVideoToolCall", () => [{ no: 1, name: "args", kind: "message", T: GenerateVideoArgs }, { no: 2, name: "result", kind: "message", T: GenerateVideoResult }]), XSearchArgs = proto3.makeMessageType("agent.v1.XSearchArgs", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "from_date", kind: "scalar", T: 9, opt: true }, { no: 3, name: "to_date", kind: "scalar", T: 9, opt: true }, { no: 4, name: "allowed_x_handles", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "excluded_x_handles", kind: "scalar", T: 9, repeated: true }]), XSearchResult = proto3.makeMessageType("agent.v1.XSearchResult", () => [{ no: 1, name: "success", kind: "message", T: XSearchSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: XSearchError, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: XSearchRejected, oneof: "result" }]), XSearchSuccess = proto3.makeMessageType("agent.v1.XSearchSuccess", () => [{ no: 1, name: "answer", kind: "scalar", T: 9 }, { no: 2, name: "citations", kind: "message", T: XSearchCitation, repeated: true }]), XSearchCitation = proto3.makeMessageType("agent.v1.XSearchCitation", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }]), XSearchError = proto3.makeMessageType("agent.v1.XSearchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), XSearchRejected = proto3.makeMessageType("agent.v1.XSearchRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), XSearchToolCall = proto3.makeMessageType("agent.v1.XSearchToolCall", () => [{ no: 1, name: "args", kind: "message", T: XSearchArgs }, { no: 2, name: "result", kind: "message", T: XSearchResult }]), AgentSkill = proto3.makeMessageType("agent.v1.AgentSkill", () => [{ no: 1, name: "full_path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "description", kind: "scalar", T: 9 }, { no: 4, name: "parse_error", kind: "scalar", T: 9, opt: true }, { no: 5, name: "environments", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "disabled_environments", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "git_remote_origin", kind: "scalar", T: 9, opt: true }, { no: 8, name: "disable_model_invocation", kind: "scalar", T: 8 }, { no: 9, name: "plugin", kind: "scalar", T: 9, opt: true }, { no: 10, name: "marketplace", kind: "scalar", T: 9, opt: true }, { no: 11, name: "plugin_id", kind: "scalar", T: 9, opt: true }, { no: 12, name: "marketplace_id", kind: "scalar", T: 9, opt: true }, { no: 13, name: "globs", kind: "scalar", T: 9, repeated: true }, { no: 14, name: "scoped_to", kind: "scalar", T: 9, repeated: true }, { no: 15, name: "argument_hint", kind: "scalar", T: 9 }, { no: 16, name: "disable_user_invocation", kind: "scalar", T: 8 }]), SelectedPluginCapabilityType = proto3.makeEnum("agent.v1.SelectedPluginCapabilityType", [{ no: 0, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_COMMAND", localName: "COMMAND" }, { no: 2, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SKILL", localName: "SKILL" }, { no: 3, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SUBAGENT", localName: "SUBAGENT" }]), SelectedImage = proto3.makeMessageType("agent.v1.SelectedImage", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 8, name: "data", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 9, name: "blob_id_with_data", kind: "message", T: SelectedImage_BlobIdWithData, oneof: "data_or_blob_id" }, { no: 10, name: "prompt_upload_ref", kind: "message", T: PromptUploadRef, oneof: "data_or_blob_id" }, { no: 2, name: "uuid", kind: "scalar", T: 9 }, { no: 3, name: "path", kind: "scalar", T: 9 }, { no: 4, name: "dimension", kind: "message", T: SelectedImage_Dimension }, { no: 7, name: "mime_type", kind: "scalar", T: 9 }]), SelectedImage_BlobIdWithData = proto3.makeMessageType("agent.v1.SelectedImage.BlobIdWithData", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12 }, { no: 2, name: "data", kind: "scalar", T: 12 }], { localName: "SelectedImage_BlobIdWithData" }), SelectedImage_Dimension = proto3.makeMessageType("agent.v1.SelectedImage.Dimension", () => [{ no: 1, name: "width", kind: "scalar", T: 5 }, { no: 2, name: "height", kind: "scalar", T: 5 }], { localName: "SelectedImage_Dimension" }), PromptUploadRef = proto3.makeMessageType("agent.v1.PromptUploadRef", () => [{ no: 1, name: "upload_id", kind: "scalar", T: 9 }]), SelectedDocument = proto3.makeMessageType("agent.v1.SelectedDocument", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 8, name: "data", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 9, name: "blob_id_with_data", kind: "message", T: SelectedDocument_BlobIdWithData, oneof: "data_or_blob_id" }, { no: 10, name: "prompt_upload_ref", kind: "message", T: PromptUploadRef, oneof: "data_or_blob_id" }, { no: 2, name: "uuid", kind: "scalar", T: 9 }, { no: 3, name: "filename", kind: "scalar", T: 9 }, { no: 4, name: "mime_type", kind: "scalar", T: 9 }, { no: 7, name: "path", kind: "scalar", T: 9 }]), SelectedDocument_BlobIdWithData = proto3.makeMessageType("agent.v1.SelectedDocument.BlobIdWithData", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12 }, { no: 2, name: "data", kind: "scalar", T: 12 }], { localName: "SelectedDocument_BlobIdWithData" }), SelectedVideo = proto3.makeMessageType("agent.v1.SelectedVideo", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 8, name: "data", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 9, name: "blob_id_with_data", kind: "message", T: SelectedVideo_BlobIdWithData, oneof: "data_or_blob_id" }, { no: 11, name: "signed_url", kind: "message", T: SelectedVideo_SignedUrl, oneof: "data_or_blob_id" }, { no: 2, name: "uuid", kind: "scalar", T: 9 }, { no: 3, name: "path", kind: "scalar", T: 9 }, { no: 4, name: "fps", kind: "scalar", T: 2, opt: true }, { no: 7, name: "mime_type", kind: "scalar", T: 9 }, { no: 10, name: "filename", kind: "scalar", T: 9 }, { no: 12, name: "materialize_to_filesystem", kind: "scalar", T: 8 }]), SelectedVideo_BlobIdWithData = proto3.makeMessageType("agent.v1.SelectedVideo.BlobIdWithData", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12 }, { no: 2, name: "data", kind: "scalar", T: 12 }], { localName: "SelectedVideo_BlobIdWithData" }), SelectedVideo_SignedUrl = proto3.makeMessageType("agent.v1.SelectedVideo.SignedUrl", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "key", kind: "scalar", T: 9 }, { no: 3, name: "expires_at_unix_ms", kind: "scalar", T: 3 }, { no: 4, name: "refresh_after_unix_ms", kind: "scalar", T: 3 }, { no: 5, name: "conversation_id", kind: "scalar", T: 9 }], { localName: "SelectedVideo_SignedUrl" }), ExtraContextEntry = proto3.makeMessageType("agent.v1.ExtraContextEntry", () => [{ no: 1, name: "data", kind: "scalar", T: 9, oneof: "data_or_blob_id" }, { no: 2, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" }]), SelectedFile = proto3.makeMessageType("agent.v1.SelectedFile", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "relative_path", kind: "scalar", T: 9, opt: true }]), SelectedCodeSelection = proto3.makeMessageType("agent.v1.SelectedCodeSelection", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "relative_path", kind: "scalar", T: 9, opt: true }, { no: 4, name: "range", kind: "message", T: Range }]), SelectedTerminal = proto3.makeMessageType("agent.v1.SelectedTerminal", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }, { no: 3, name: "path", kind: "scalar", T: 9, opt: true }]), SelectedTerminalSelection = proto3.makeMessageType("agent.v1.SelectedTerminalSelection", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }, { no: 3, name: "path", kind: "scalar", T: 9, opt: true }, { no: 4, name: "range", kind: "message", T: Range }]), SelectedFolder = proto3.makeMessageType("agent.v1.SelectedFolder", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "relative_path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "directory_tree", kind: "message", T: LsDirectoryTreeNode }]), SelectedExternalLink = proto3.makeMessageType("agent.v1.SelectedExternalLink", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "uuid", kind: "scalar", T: 9 }, { no: 3, name: "pdf_content", kind: "scalar", T: 9, opt: true }, { no: 4, name: "is_pdf", kind: "scalar", T: 8, opt: true }, { no: 5, name: "filename", kind: "scalar", T: 9, opt: true }, { no: 6, name: "blob_id", kind: "scalar", T: 12, opt: true }]), SelectedCursorRule = proto3.makeMessageType("agent.v1.SelectedCursorRule", () => [{ no: 1, name: "rule", kind: "message", T: CursorRule }]), SelectedGitDiff = proto3.makeMessageType("agent.v1.SelectedGitDiff", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "full_content_length_char_count", kind: "scalar", T: 5 }]), SelectedGitDiffFromBranchToMain = proto3.makeMessageType("agent.v1.SelectedGitDiffFromBranchToMain", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "full_content_length_char_count", kind: "scalar", T: 5 }]), SelectedGitCommit = proto3.makeMessageType("agent.v1.SelectedGitCommit", () => [{ no: 1, name: "sha", kind: "scalar", T: 9 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "diff", kind: "scalar", T: 9 }]), SelectedPullRequest = proto3.makeMessageType("agent.v1.SelectedPullRequest", () => [{ no: 1, name: "number", kind: "scalar", T: 5 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "title", kind: "scalar", T: 9, opt: true }, { no: 4, name: "folder_path", kind: "scalar", T: 9 }, { no: 5, name: "summary_json", kind: "scalar", T: 9, opt: true }, { no: 6, name: "description", kind: "scalar", T: 9, opt: true }, { no: 7, name: "blob_id", kind: "scalar", T: 12, opt: true }]), SelectedGitPRDiffSelection = proto3.makeMessageType("agent.v1.SelectedGitPRDiffSelection", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9 }, { no: 2, name: "file_path", kind: "scalar", T: 9 }, { no: 3, name: "start_line", kind: "scalar", T: 5 }, { no: 4, name: "end_line", kind: "scalar", T: 5 }, { no: 5, name: "diff_content", kind: "scalar", T: 9, opt: true }, { no: 6, name: "blob_id", kind: "scalar", T: 12, opt: true }]), SelectedPluginCapabilityRef = proto3.makeMessageType("agent.v1.SelectedPluginCapabilityRef", () => [{ no: 1, name: "plugin_id", kind: "scalar", T: 9 }, { no: 2, name: "capability_type", kind: "enum", T: proto3.getEnumType(SelectedPluginCapabilityType) }, { no: 3, name: "source_path", kind: "scalar", T: 9 }, { no: 4, name: "snapshot_token", kind: "scalar", T: 9 }, { no: 5, name: "resolved_commit_sha", kind: "scalar", T: 9, opt: true }]), SelectedCursorCommand = proto3.makeMessageType("agent.v1.SelectedCursorCommand", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "plugin_capability", kind: "message", T: SelectedPluginCapabilityRef, opt: true }, { no: 4, name: "full_path", kind: "scalar", T: 9, opt: true }, { no: 5, name: "display_name", kind: "scalar", T: 9, opt: true }]), SelectedDocumentation = proto3.makeMessageType("agent.v1.SelectedDocumentation", () => [{ no: 1, name: "doc_id", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }]), SelectedPastChat = proto3.makeMessageType("agent.v1.SelectedPastChat", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }]), RecentAgent = proto3.makeMessageType("agent.v1.RecentAgent", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "overview", kind: "scalar", T: 9, opt: true }]), RecentAgentsContext = proto3.makeMessageType("agent.v1.RecentAgentsContext", () => [{ no: 1, name: "recent_agents", kind: "message", T: RecentAgent, repeated: true }]), CallFrame = proto3.makeMessageType("agent.v1.CallFrame", () => [{ no: 1, name: "function_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "url", kind: "scalar", T: 9, opt: true }, { no: 3, name: "line_number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "column_number", kind: "scalar", T: 5, opt: true }]), StackTrace = proto3.makeMessageType("agent.v1.StackTrace", () => [{ no: 1, name: "call_frames", kind: "message", T: CallFrame, repeated: true }, { no: 2, name: "raw_stack_trace", kind: "scalar", T: 9, opt: true }]), SelectedConsoleLog = proto3.makeMessageType("agent.v1.SelectedConsoleLog", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 1 }, { no: 3, name: "level", kind: "scalar", T: 9 }, { no: 4, name: "client_name", kind: "scalar", T: 9 }, { no: 5, name: "session_id", kind: "scalar", T: 9 }, { no: 6, name: "stack_trace", kind: "message", T: StackTrace, opt: true }, { no: 7, name: "object_data_json", kind: "scalar", T: 9, opt: true }]), SelectedUIElement = proto3.makeMessageType("agent.v1.SelectedUIElement", () => [{ no: 1, name: "element", kind: "scalar", T: 9 }, { no: 2, name: "xpath", kind: "scalar", T: 9 }, { no: 3, name: "text_content", kind: "scalar", T: 9 }, { no: 4, name: "extra", kind: "scalar", T: 9 }, { no: 5, name: "component", kind: "scalar", T: 9, opt: true }, { no: 6, name: "component_props_json", kind: "scalar", T: 9, opt: true }]), SelectedSubagent = proto3.makeMessageType("agent.v1.SelectedSubagent", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }]), SelectedBrowser = proto3.makeMessageType("agent.v1.SelectedBrowser", () => [{ no: 1, name: "browser_id", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "page_title", kind: "scalar", T: 9, opt: true }]), SelectedAgenticGitActionCommitParams = proto3.makeMessageType("agent.v1.SelectedAgenticGitActionCommitParams", () => [{ no: 1, name: "files_to_commit", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "files_to_exclude_from_commit", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "should_stage_all_changes", kind: "scalar", T: 8 }, { no: 4, name: "create_pr_draft", kind: "scalar", T: 8, opt: true }, { no: 5, name: "files_to_commit_with_status", kind: "message", T: SelectedAgenticGitFileWithStatus, repeated: true }, { no: 6, name: "files_to_exclude_from_commit_with_status", kind: "message", T: SelectedAgenticGitFileWithStatus, repeated: true }]), SelectedAgenticGitActionCreateBranchParams = proto3.makeMessageType("agent.v1.SelectedAgenticGitActionCreateBranchParams", []), SelectedAgenticGitFileWithStatus = proto3.makeMessageType("agent.v1.SelectedAgenticGitFileWithStatus", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "status", kind: "scalar", T: 9, opt: true }]), SelectedAgenticGitActionPushParams = proto3.makeMessageType("agent.v1.SelectedAgenticGitActionPushParams", () => [{ no: 1, name: "files_to_push", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "create_pr_draft", kind: "scalar", T: 8, opt: true }]), SelectedAgenticGitActionFixMergeConflictsParams = proto3.makeMessageType("agent.v1.SelectedAgenticGitActionFixMergeConflictsParams", () => [{ no: 1, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 2, name: "pr_url", kind: "scalar", T: 9, opt: true }]), SelectedAgenticGitActionBabysitPrInCloudParams = proto3.makeMessageType("agent.v1.SelectedAgenticGitActionBabysitPrInCloudParams", () => [{ no: 1, name: "base_branch", kind: "scalar", T: 9, opt: true }]), SelectedAgenticGitActionUpdateBranchParams = proto3.makeMessageType("agent.v1.SelectedAgenticGitActionUpdateBranchParams", () => [{ no: 1, name: "base_branch", kind: "scalar", T: 9, opt: true }]), SelectedAgenticGitActionPullLocallyParams = proto3.makeMessageType("agent.v1.SelectedAgenticGitActionPullLocallyParams", () => [{ no: 1, name: "remote_branch", kind: "scalar", T: 9 }]), SelectedAgenticGitAction = proto3.makeMessageType("agent.v1.SelectedAgenticGitAction", () => [{ no: 2, name: "commit_params", kind: "message", T: SelectedAgenticGitActionCommitParams, oneof: "params" }, { no: 6, name: "commit_and_push_params", kind: "message", T: SelectedAgenticGitActionCommitParams, oneof: "params" }, { no: 3, name: "push_params", kind: "message", T: SelectedAgenticGitActionPushParams, oneof: "params" }, { no: 7, name: "create_pr_params", kind: "message", T: SelectedAgenticGitActionPushParams, oneof: "params" }, { no: 8, name: "create_pr_with_changes_params", kind: "message", T: SelectedAgenticGitActionCommitParams, oneof: "params" }, { no: 4, name: "fix_merge_conflicts_params", kind: "message", T: SelectedAgenticGitActionFixMergeConflictsParams, oneof: "params" }, { no: 11, name: "babysit_pr_in_cloud_params", kind: "message", T: SelectedAgenticGitActionBabysitPrInCloudParams, oneof: "params" }, { no: 14, name: "apply_locally_params", kind: "message", T: SelectedAgenticGitActionPullLocallyParams, oneof: "params" }, { no: 15, name: "checkout_branch_params", kind: "message", T: SelectedAgenticGitActionPullLocallyParams, oneof: "params" }, { no: 12, name: "create_branch_and_commit_params", kind: "message", T: SelectedAgenticGitActionCommitParams, oneof: "params" }, { no: 13, name: "create_branch_commit_and_push_params", kind: "message", T: SelectedAgenticGitActionCommitParams, oneof: "params" }, { no: 16, name: "update_branch_params", kind: "message", T: SelectedAgenticGitActionUpdateBranchParams, oneof: "params" }, { no: 17, name: "create_branch_params", kind: "message", T: SelectedAgenticGitActionCreateBranchParams, oneof: "params" }, { no: 5, name: "branch_context", kind: "message", T: SelectedGitBranchContext, opt: true }, { no: 9, name: "path_to_template_file", kind: "scalar", T: 9, opt: true }, { no: 10, name: "path_to_template_dir", kind: "scalar", T: 9, opt: true }]), SelectedGitBranchContext = proto3.makeMessageType("agent.v1.SelectedGitBranchContext", () => [{ no: 1, name: "current_branch", kind: "scalar", T: 9, opt: true }, { no: 2, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 3, name: "agent_branch_prefix", kind: "scalar", T: 9, opt: true }]), SelectedContext = proto3.makeMessageType("agent.v1.SelectedContext", () => [{ no: 1, name: "selected_images", kind: "message", T: SelectedImage, repeated: true }, { no: 2, name: "invocation_context", kind: "message", T: InvocationContext, opt: true }, { no: 3, name: "extra_context", kind: "scalar", T: 9, repeated: true }, { no: 16, name: "extra_context_entries", kind: "message", T: ExtraContextEntry, repeated: true }, { no: 4, name: "files", kind: "message", T: SelectedFile, repeated: true }, { no: 5, name: "code_selections", kind: "message", T: SelectedCodeSelection, repeated: true }, { no: 6, name: "terminals", kind: "message", T: SelectedTerminal, repeated: true }, { no: 7, name: "terminal_selections", kind: "message", T: SelectedTerminalSelection, repeated: true }, { no: 8, name: "folders", kind: "message", T: SelectedFolder, repeated: true }, { no: 9, name: "external_links", kind: "message", T: SelectedExternalLink, repeated: true }, { no: 10, name: "cursor_rules", kind: "message", T: SelectedCursorRule, repeated: true }, { no: 18, name: "git_diff", kind: "message", T: SelectedGitDiff, opt: true }, { no: 11, name: "git_diff_from_branch_to_main", kind: "message", T: SelectedGitDiffFromBranchToMain, opt: true }, { no: 12, name: "cursor_commands", kind: "message", T: SelectedCursorCommand, repeated: true }, { no: 13, name: "documentations", kind: "message", T: SelectedDocumentation, repeated: true }, { no: 14, name: "ui_elements", kind: "message", T: SelectedUIElement, repeated: true }, { no: 15, name: "console_logs", kind: "message", T: SelectedConsoleLog, repeated: true }, { no: 17, name: "git_commits", kind: "message", T: SelectedGitCommit, repeated: true }, { no: 19, name: "past_chats", kind: "message", T: SelectedPastChat, repeated: true }, { no: 20, name: "git_pr_diff_selections", kind: "message", T: SelectedGitPRDiffSelection, repeated: true }, { no: 21, name: "selected_pull_requests", kind: "message", T: SelectedPullRequest, repeated: true }, { no: 22, name: "selected_subagents", kind: "message", T: SelectedSubagent, repeated: true }, { no: 23, name: "selected_videos", kind: "message", T: SelectedVideo, repeated: true }, { no: 24, name: "selected_browsers", kind: "message", T: SelectedBrowser, repeated: true }, { no: 25, name: "selected_documents", kind: "message", T: SelectedDocument, repeated: true }, { no: 26, name: "selected_skills", kind: "message", T: AgentSkill, repeated: true }, { no: 27, name: "recent_agents_context", kind: "message", T: RecentAgentsContext, opt: true }, { no: 34, name: "selected_agentic_git_action", kind: "message", T: SelectedAgenticGitAction, opt: true }]), InvocationContext = proto3.makeMessageType("agent.v1.InvocationContext", () => [{ no: 1, name: "slack_thread", kind: "message", T: InvocationContext_SlackThread, oneof: "data" }, { no: 2, name: "github_pr", kind: "message", T: InvocationContext_GithubPR, oneof: "data" }, { no: 3, name: "ide_state", kind: "message", T: InvocationContext_IdeState, oneof: "data" }, { no: 4, name: "microsoft_teams_thread", kind: "message", T: InvocationContext_MicrosoftTeamsThread, oneof: "data" }, { no: 10, name: "blob_id", kind: "scalar", T: 12, oneof: "data" }]), InvocationContext_SlackThread = proto3.makeMessageType("agent.v1.InvocationContext.SlackThread", () => [{ no: 1, name: "thread", kind: "scalar", T: 9 }, { no: 2, name: "channel_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "channel_purpose", kind: "scalar", T: 9, opt: true }, { no: 4, name: "channel_topic", kind: "scalar", T: 9, opt: true }, { no: 5, name: "sender_name", kind: "scalar", T: 9, opt: true }, { no: 6, name: "sender_id", kind: "scalar", T: 9, opt: true }, { no: 7, name: "sender_type", kind: "scalar", T: 9, opt: true }, { no: 8, name: "is_directly_addressed", kind: "scalar", T: 8, opt: true }], { localName: "InvocationContext_SlackThread" }), InvocationContext_MicrosoftTeamsThread = proto3.makeMessageType("agent.v1.InvocationContext.MicrosoftTeamsThread", () => [{ no: 1, name: "thread", kind: "scalar", T: 9 }, { no: 2, name: "channel_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "team_name", kind: "scalar", T: 9, opt: true }, { no: 4, name: "channel_description", kind: "scalar", T: 9, opt: true }, { no: 5, name: "team_description", kind: "scalar", T: 9, opt: true }], { localName: "InvocationContext_MicrosoftTeamsThread" }), InvocationContext_GithubPR = proto3.makeMessageType("agent.v1.InvocationContext.GithubPR", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "comments", kind: "scalar", T: 9 }, { no: 4, name: "ci_failures", kind: "scalar", T: 9, opt: true }], { localName: "InvocationContext_GithubPR" }), InvocationContext_IdeState = proto3.makeMessageType("agent.v1.InvocationContext.IdeState", () => [{ no: 1, name: "visible_files", kind: "message", T: InvocationContext_IdeState_File, repeated: true }, { no: 2, name: "recently_viewed_files", kind: "message", T: InvocationContext_IdeState_File, repeated: true }, { no: 3, name: "currently_viewed_prs", kind: "message", T: InvocationContext_IdeState_ViewedPullRequest, repeated: true }], { localName: "InvocationContext_IdeState" }), InvocationContext_IdeState_File = proto3.makeMessageType("agent.v1.InvocationContext.IdeState.File", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "relative_path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "cursor_position", kind: "message", T: InvocationContext_IdeState_File_CursorPosition, opt: true }, { no: 4, name: "total_lines", kind: "scalar", T: 5 }, { no: 5, name: "active_command", kind: "scalar", T: 9, opt: true }], { localName: "InvocationContext_IdeState_File" }), InvocationContext_IdeState_File_CursorPosition = proto3.makeMessageType("agent.v1.InvocationContext.IdeState.File.CursorPosition", () => [{ no: 1, name: "line", kind: "scalar", T: 5 }, { no: 2, name: "text", kind: "scalar", T: 9 }], { localName: "InvocationContext_IdeState_File_CursorPosition" }), InvocationContext_IdeState_ViewedPullRequest = proto3.makeMessageType("agent.v1.InvocationContext.IdeState.ViewedPullRequest", () => [{ no: 1, name: "number", kind: "scalar", T: 5 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "title", kind: "scalar", T: 9, opt: true }, { no: 4, name: "folder_path", kind: "scalar", T: 9, opt: true }, { no: 5, name: "summary_json", kind: "scalar", T: 9, opt: true }, { no: 6, name: "description", kind: "scalar", T: 9, opt: true }], { localName: "InvocationContext_IdeState_ViewedPullRequest" }), AgentMode = proto3.makeEnum("agent.v1.AgentMode", [{ no: 0, name: "AGENT_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "AGENT_MODE_AGENT", localName: "AGENT" }, { no: 2, name: "AGENT_MODE_ASK", localName: "ASK" }, { no: 3, name: "AGENT_MODE_PLAN", localName: "PLAN" }, { no: 4, name: "AGENT_MODE_DEBUG", localName: "DEBUG" }, { no: 5, name: "AGENT_MODE_TRIAGE", localName: "TRIAGE" }, { no: 7, name: "AGENT_MODE_MULTITASK", localName: "MULTITASK" }, { no: 8, name: "AGENT_MODE_CUSTOM", localName: "CUSTOM" }]), SubagentRunStatus = proto3.makeEnum("agent.v1.SubagentRunStatus", [{ no: 0, name: "SUBAGENT_RUN_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUBAGENT_RUN_STATUS_RUNNING", localName: "RUNNING" }, { no: 2, name: "SUBAGENT_RUN_STATUS_BACKGROUNDED", localName: "BACKGROUNDED" }, { no: 3, name: "SUBAGENT_RUN_STATUS_SUCCESS", localName: "SUCCESS" }, { no: 4, name: "SUBAGENT_RUN_STATUS_ERROR", localName: "ERROR" }, { no: 5, name: "SUBAGENT_RUN_STATUS_ABORTED", localName: "ABORTED" }]), SubagentDispatchTool = proto3.makeEnum("agent.v1.SubagentDispatchTool", [{ no: 0, name: "SUBAGENT_DISPATCH_TOOL_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUBAGENT_DISPATCH_TOOL_TASK", localName: "TASK" }, { no: 2, name: "SUBAGENT_DISPATCH_TOOL_CREATE_AGENT", localName: "CREATE_AGENT" }, { no: 3, name: "SUBAGENT_DISPATCH_TOOL_SEND_TO_AGENT", localName: "SEND_TO_AGENT" }]), CustomModeSource = proto3.makeEnum("agent.v1.CustomModeSource", [{ no: 0, name: "CUSTOM_MODE_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CUSTOM_MODE_SOURCE_AGENT_SKILL", localName: "AGENT_SKILL" }, { no: 2, name: "CUSTOM_MODE_SOURCE_PLUGIN_SKILL", localName: "PLUGIN_SKILL" }, { no: 3, name: "CUSTOM_MODE_SOURCE_REPO_SKILL", localName: "REPO_SKILL" }, { no: 4, name: "CUSTOM_MODE_SOURCE_MANAGED_SKILL", localName: "MANAGED_SKILL" }]), SimulatedMsgReason = proto3.makeEnum("agent.v1.SimulatedMsgReason", [{ no: 0, name: "SIMULATED_MSG_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SIMULATED_MSG_REASON_PLAN_EXECUTION", localName: "PLAN_EXECUTION" }, { no: 2, name: "SIMULATED_MSG_REASON_COMMIT_REMINDER", localName: "COMMIT_REMINDER" }, { no: 3, name: "SIMULATED_MSG_REASON_BACKGROUND_TASK_COMPLETION", localName: "BACKGROUND_TASK_COMPLETION" }, { no: 4, name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT", localName: "DIFF_TAB_COMMIT" }, { no: 5, name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT_AND_PUSH", localName: "DIFF_TAB_COMMIT_AND_PUSH" }, { no: 6, name: "SIMULATED_MSG_REASON_DIFF_TAB_PUSH", localName: "DIFF_TAB_PUSH" }, { no: 7, name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_PR", localName: "DIFF_TAB_CREATE_PR" }, { no: 8, name: "SIMULATED_MSG_REASON_DIFF_TAB_FIX_MERGE_CONFLICTS", localName: "DIFF_TAB_FIX_MERGE_CONFLICTS" }, { no: 9, name: "SIMULATED_MSG_REASON_USER_SENT_TO_SUBAGENT", localName: "USER_SENT_TO_SUBAGENT" }, { no: 10, name: "SIMULATED_MSG_REASON_USER_INTERRUPTED_SUBAGENT", localName: "USER_INTERRUPTED_SUBAGENT" }, { no: 11, name: "SIMULATED_MSG_REASON_USER_QUEUED_TO_SUBAGENT", localName: "USER_QUEUED_TO_SUBAGENT" }, { no: 12, name: "SIMULATED_MSG_REASON_BABYSIT_PR_IN_CLOUD", localName: "BABYSIT_PR_IN_CLOUD" }, { no: 13, name: "SIMULATED_MSG_REASON_CI_PANEL_INVESTIGATE_FAILURE", localName: "CI_PANEL_INVESTIGATE_FAILURE" }, { no: 14, name: "SIMULATED_MSG_REASON_MULTITASK", localName: "MULTITASK" }, { no: 15, name: "SIMULATED_MSG_REASON_BUILD_IN_PARALLEL", localName: "BUILD_IN_PARALLEL" }, { no: 16, name: "SIMULATED_MSG_REASON_MULTITASK_SPLIT_PRS", localName: "MULTITASK_SPLIT_PRS" }, { no: 17, name: "SIMULATED_MSG_REASON_APPLY_LOCALLY", localName: "APPLY_LOCALLY" }, { no: 18, name: "SIMULATED_MSG_REASON_CHECKOUT_BRANCH", localName: "CHECKOUT_BRANCH" }, { no: 19, name: "SIMULATED_MSG_REASON_DIFF_TAB_UPDATE_BRANCH", localName: "DIFF_TAB_UPDATE_BRANCH" }, { no: 20, name: "SIMULATED_MSG_REASON_PR_TAB_BUGBOT_FIX", localName: "PR_TAB_BUGBOT_FIX" }, { no: 22, name: "SIMULATED_MSG_REASON_RUN_BUGBOT_REVIEW", localName: "RUN_BUGBOT_REVIEW" }, { no: 23, name: "SIMULATED_MSG_REASON_RUN_SECURITY_REVIEW", localName: "RUN_SECURITY_REVIEW" }, { no: 24, name: "SIMULATED_MSG_REASON_FSD_APPLY_FINDING", localName: "FSD_APPLY_FINDING" }, { no: 25, name: "SIMULATED_MSG_REASON_FSD_UNDO_FINDING", localName: "FSD_UNDO_FINDING" }, { no: 26, name: "SIMULATED_MSG_REASON_FSD_START", localName: "FSD_START" }, { no: 27, name: "SIMULATED_MSG_REASON_FSD_PR_INTERRUPT", localName: "FSD_PR_INTERRUPT" }, { no: 28, name: "SIMULATED_MSG_REASON_SUBSCRIPTION", localName: "SUBSCRIPTION" }, { no: 29, name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_BRANCH", localName: "DIFF_TAB_CREATE_BRANCH" }, { no: 30, name: "SIMULATED_MSG_REASON_AGENT_STORE_CONFLICT", localName: "AGENT_STORE_CONFLICT" }, { no: 31, name: "SIMULATED_MSG_REASON_GOAL_CONTINUATION", localName: "GOAL_CONTINUATION" }, { no: 32, name: "SIMULATED_MSG_REASON_PROJECT_KICKOFF", localName: "PROJECT_KICKOFF" }, { no: 33, name: "SIMULATED_MSG_REASON_MARKDOWN_PROMPT_BUTTON", localName: "MARKDOWN_PROMPT_BUTTON" }, { no: 34, name: "SIMULATED_MSG_REASON_USER_QUICK_ACTION", localName: "USER_QUICK_ACTION" }, { no: 35, name: "SIMULATED_MSG_REASON_INTERACTION_RESPONSE", localName: "INTERACTION_RESPONSE" }]), SubscriptionSource = proto3.makeEnum("agent.v1.SubscriptionSource", [{ no: 0, name: "SUBSCRIPTION_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUBSCRIPTION_SOURCE_SLACK", localName: "SLACK" }, { no: 2, name: "SUBSCRIPTION_SOURCE_GITHUB", localName: "GITHUB" }, { no: 3, name: "SUBSCRIPTION_SOURCE_LINEAR", localName: "LINEAR" }, { no: 4, name: "SUBSCRIPTION_SOURCE_ORIGIN", localName: "ORIGIN" }, { no: 5, name: "SUBSCRIPTION_SOURCE_FACTORY", localName: "FACTORY" }]), TaskArgs = proto3.makeMessageType("agent.v1.TaskArgs", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }, { no: 2, name: "prompt", kind: "scalar", T: 9 }, { no: 3, name: "subagent_type", kind: "message", T: SubagentType }, { no: 4, name: "model", kind: "scalar", T: 9, opt: true }, { no: 5, name: "resume", kind: "scalar", T: 9, opt: true }, { no: 6, name: "agent_id", kind: "scalar", T: 9, opt: true }, { no: 7, name: "attachments", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "mode", kind: "enum", T: proto3.getEnumType(TaskMode) }, { no: 9, name: "responding_to_message_ids", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "environment", kind: "enum", T: proto3.getEnumType(SubagentExecutionEnvironment) }, { no: 11, name: "machine", kind: "message", T: TargetMachine, opt: true }]), TargetMachine = proto3.makeMessageType("agent.v1.TargetMachine", () => [{ no: 1, name: "same_machine", kind: "message", T: SameMachineTarget, oneof: "machine" }, { no: 2, name: "new_cloud_vm", kind: "message", T: NewCloudVmTarget, oneof: "machine" }, { no: 3, name: "self_hosted_worker", kind: "message", T: SelfHostedWorkerTarget, oneof: "machine" }, { no: 4, name: "self_hosted_pool", kind: "message", T: SelfHostedPoolTarget, oneof: "machine" }]), SameMachineTarget = proto3.makeMessageType("agent.v1.SameMachineTarget", []), NewCloudVmTarget = proto3.makeMessageType("agent.v1.NewCloudVmTarget", () => [{ no: 1, name: "environment_build_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "base_branch", kind: "scalar", T: 9, opt: true }]), SelfHostedWorkerTarget = proto3.makeMessageType("agent.v1.SelfHostedWorkerTarget", () => [{ no: 1, name: "worker_id", kind: "scalar", T: 9 }]), SelfHostedPoolTarget = proto3.makeMessageType("agent.v1.SelfHostedPoolTarget", () => [{ no: 1, name: "pool", kind: "scalar", T: 9, opt: true }, { no: 2, name: "labels", kind: "message", T: SelfHostedWorkerLabel, repeated: true }]), SelfHostedWorkerLabel = proto3.makeMessageType("agent.v1.SelfHostedWorkerLabel", () => [{ no: 1, name: "key", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }]), TaskSuccess = proto3.makeMessageType("agent.v1.TaskSuccess", () => [{ no: 1, name: "conversation_steps", kind: "message", T: ConversationStep, repeated: true }, { no: 2, name: "agent_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "is_background", kind: "scalar", T: 8 }, { no: 4, name: "duration_ms", kind: "scalar", T: 4, opt: true }, { no: 5, name: "result_suffix", kind: "scalar", T: 9, opt: true }, { no: 6, name: "background_reason", kind: "enum", T: proto3.getEnumType(SubagentBackgroundReason) }, { no: 7, name: "transcript_path", kind: "scalar", T: 9, opt: true }]), TaskError = proto3.makeMessageType("agent.v1.TaskError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), TaskResult = proto3.makeMessageType("agent.v1.TaskResult", () => [{ no: 1, name: "success", kind: "message", T: TaskSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: TaskError, oneof: "result" }]), TaskToolCall = proto3.makeMessageType("agent.v1.TaskToolCall", () => [{ no: 1, name: "args", kind: "message", T: TaskArgs }, { no: 2, name: "result", kind: "message", T: TaskResult }, { no: 3, name: "cloud_agent_bc_id", kind: "scalar", T: 9, opt: true }]), SetActiveBranchArgs = proto3.makeMessageType("agent.v1.SetActiveBranchArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "branch_name", kind: "scalar", T: 9 }]), SetActiveBranchSuccess = proto3.makeMessageType("agent.v1.SetActiveBranchSuccess", []), SetActiveBranchError = proto3.makeMessageType("agent.v1.SetActiveBranchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), SetActiveBranchResult = proto3.makeMessageType("agent.v1.SetActiveBranchResult", () => [{ no: 1, name: "success", kind: "message", T: SetActiveBranchSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: SetActiveBranchError, oneof: "result" }]), SetActiveBranchToolCall = proto3.makeMessageType("agent.v1.SetActiveBranchToolCall", () => [{ no: 1, name: "args", kind: "message", T: SetActiveBranchArgs }, { no: 2, name: "result", kind: "message", T: SetActiveBranchResult }]), ToolCall = proto3.makeMessageType("agent.v1.ToolCall", () => [{ no: 1, name: "shell_tool_call", kind: "message", T: ShellToolCall, oneof: "tool" }, { no: 3, name: "delete_tool_call", kind: "message", T: DeleteToolCall, oneof: "tool" }, { no: 4, name: "glob_tool_call", kind: "message", T: GlobToolCall, oneof: "tool" }, { no: 5, name: "grep_tool_call", kind: "message", T: GrepToolCall, oneof: "tool" }, { no: 8, name: "read_tool_call", kind: "message", T: ReadToolCall, oneof: "tool" }, { no: 9, name: "update_todos_tool_call", kind: "message", T: UpdateTodosToolCall, oneof: "tool" }, { no: 10, name: "read_todos_tool_call", kind: "message", T: ReadTodosToolCall, oneof: "tool" }, { no: 12, name: "edit_tool_call", kind: "message", T: EditToolCall, oneof: "tool" }, { no: 13, name: "ls_tool_call", kind: "message", T: LsToolCall, oneof: "tool" }, { no: 14, name: "read_lints_tool_call", kind: "message", T: ReadLintsToolCall, oneof: "tool" }, { no: 15, name: "mcp_tool_call", kind: "message", T: McpToolCall, oneof: "tool" }, { no: 16, name: "sem_search_tool_call", kind: "message", T: SemSearchToolCall, oneof: "tool" }, { no: 17, name: "create_plan_tool_call", kind: "message", T: CreatePlanToolCall, oneof: "tool" }, { no: 18, name: "web_search_tool_call", kind: "message", T: WebSearchToolCall, oneof: "tool" }, { no: 19, name: "task_tool_call", kind: "message", T: TaskToolCall, oneof: "tool" }, { no: 20, name: "list_mcp_resources_tool_call", kind: "message", T: ListMcpResourcesToolCall, oneof: "tool" }, { no: 21, name: "read_mcp_resource_tool_call", kind: "message", T: ReadMcpResourceToolCall, oneof: "tool" }, { no: 22, name: "apply_agent_diff_tool_call", kind: "message", T: ApplyAgentDiffToolCall, oneof: "tool" }, { no: 23, name: "ask_question_tool_call", kind: "message", T: AskQuestionToolCall, oneof: "tool" }, { no: 24, name: "fetch_tool_call", kind: "message", T: FetchToolCall, oneof: "tool" }, { no: 25, name: "switch_mode_tool_call", kind: "message", T: SwitchModeToolCall, oneof: "tool" }, { no: 28, name: "generate_image_tool_call", kind: "message", T: GenerateImageToolCall, oneof: "tool" }, { no: 29, name: "record_screen_tool_call", kind: "message", T: RecordScreenToolCall, oneof: "tool" }, { no: 30, name: "computer_use_tool_call", kind: "message", T: ComputerUseToolCall, oneof: "tool" }, { no: 31, name: "write_shell_stdin_tool_call", kind: "message", T: WriteShellStdinToolCall, oneof: "tool" }, { no: 32, name: "reflect_tool_call", kind: "message", T: ReflectToolCall, oneof: "tool" }, { no: 33, name: "setup_vm_environment_tool_call", kind: "message", T: SetupVmEnvironmentToolCall, oneof: "tool" }, { no: 34, name: "truncated_tool_call", kind: "message", T: TruncatedToolCall, oneof: "tool" }, { no: 35, name: "start_grind_execution_tool_call", kind: "message", T: StartGrindExecutionToolCall, oneof: "tool" }, { no: 36, name: "start_grind_planning_tool_call", kind: "message", T: StartGrindPlanningToolCall, oneof: "tool" }, { no: 37, name: "web_fetch_tool_call", kind: "message", T: WebFetchToolCall, oneof: "tool" }, { no: 38, name: "report_bugfix_results_tool_call", kind: "message", T: ReportBugfixResultsToolCall, oneof: "tool" }, { no: 39, name: "ai_attribution_tool_call", kind: "message", T: AiAttributionToolCall, oneof: "tool" }, { no: 40, name: "pr_management_tool_call", kind: "message", T: PrManagementToolCall, oneof: "tool" }, { no: 41, name: "mcp_auth_tool_call", kind: "message", T: McpAuthToolCall, oneof: "tool" }, { no: 42, name: "await_tool_call", kind: "message", T: AwaitToolCall, oneof: "tool" }, { no: 43, name: "blame_by_file_path_tool_call", kind: "message", T: BlameByFilePathToolCall, oneof: "tool" }, { no: 44, name: "get_mcp_tools_tool_call", kind: "message", T: GetMcpToolsToolCall, oneof: "tool" }, { no: 45, name: "report_bug_tool_call", kind: "message", T: ReportBugToolCall, oneof: "tool" }, { no: 46, name: "set_active_branch_tool_call", kind: "message", T: SetActiveBranchToolCall, oneof: "tool" }, { no: 48, name: "communicate_update_tool_call", kind: "message", T: CommunicateUpdateToolCall, oneof: "tool" }, { no: 49, name: "send_final_summary_tool_call", kind: "message", T: SendFinalSummaryToolCall, oneof: "tool" }, { no: 51, name: "replace_env_tool_call", kind: "message", T: ReplaceEnvToolCall, oneof: "tool" }, { no: 52, name: "edit_pr_labels_tool_call", kind: "message", T: EditPrLabelsToolCall, oneof: "tool" }, { no: 53, name: "record_ci_investigation_findings_tool_call", kind: "message", T: RecordCiInvestigationFindingsToolCall, oneof: "tool" }, { no: 55, name: "send_message_tool_call", kind: "message", T: SendMessageToolCall, oneof: "tool" }, { no: 56, name: "fetch_cloud_agent_data_tool_call", kind: "message", T: FetchCloudAgentDataToolCall, oneof: "tool" }, { no: 58, name: "send_to_user_tool_call", kind: "message", T: SendToUserToolCall, oneof: "tool" }, { no: 61, name: "pi_read_tool_call", kind: "message", T: PiReadToolCall, oneof: "tool" }, { no: 62, name: "pi_bash_tool_call", kind: "message", T: PiBashToolCall, oneof: "tool" }, { no: 63, name: "pi_edit_tool_call", kind: "message", T: PiEditToolCall, oneof: "tool" }, { no: 64, name: "pi_write_tool_call", kind: "message", T: PiWriteToolCall, oneof: "tool" }, { no: 65, name: "pi_grep_tool_call", kind: "message", T: PiGrepToolCall, oneof: "tool" }, { no: 66, name: "pi_find_tool_call", kind: "message", T: PiFindToolCall, oneof: "tool" }, { no: 67, name: "pi_ls_tool_call", kind: "message", T: PiLsToolCall, oneof: "tool" }, { no: 68, name: "connect_scm_tool_call", kind: "message", T: ConnectScmToolCall, oneof: "tool" }, { no: 69, name: "search_conversations_tool_call", kind: "message", T: SearchConversationsToolCall, oneof: "tool" }, { no: 70, name: "create_goal_tool_call", kind: "message", T: CreateGoalToolCall, oneof: "tool" }, { no: 71, name: "update_goal_tool_call", kind: "message", T: UpdateGoalToolCall, oneof: "tool" }, { no: 73, name: "get_agent_status_tool_call", kind: "message", T: GetAgentStatusToolCall, oneof: "tool" }, { no: 74, name: "send_to_agent_tool_call", kind: "message", T: SendToAgentToolCall, oneof: "tool" }, { no: 75, name: "read_agent_transcript_tool_call", kind: "message", T: ReadAgentTranscriptToolCall, oneof: "tool" }, { no: 76, name: "create_agent_tool_call", kind: "message", T: CreateAgentToolCall, oneof: "tool" }, { no: 77, name: "stop_agent_tool_call", kind: "message", T: StopAgentToolCall, oneof: "tool" }, { no: 79, name: "write_canvas_tool_call", kind: "message", T: WriteCanvasToolCall, oneof: "tool" }, { no: 80, name: "read_canvas_tool_call", kind: "message", T: ReadCanvasToolCall, oneof: "tool" }, { no: 81, name: "generate_video_tool_call", kind: "message", T: GenerateVideoToolCall, oneof: "tool" }, { no: 82, name: "x_search_tool_call", kind: "message", T: XSearchToolCall, oneof: "tool" }, { no: 54, name: "hook_additional_contexts", kind: "message", T: HookAdditionalContext, repeated: true }, { no: 57, name: "tool_call_id", kind: "scalar", T: 9, opt: true }, { no: 59, name: "started_at_ms", kind: "scalar", T: 4, opt: true }, { no: 60, name: "completed_at_ms", kind: "scalar", T: 4, opt: true }]), TruncatedToolCallArgs = proto3.makeMessageType("agent.v1.TruncatedToolCallArgs", []), TruncatedToolCallSuccess = proto3.makeMessageType("agent.v1.TruncatedToolCallSuccess", []), TruncatedToolCallError = proto3.makeMessageType("agent.v1.TruncatedToolCallError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), TruncatedToolCallResult = proto3.makeMessageType("agent.v1.TruncatedToolCallResult", () => [{ no: 1, name: "success", kind: "message", T: TruncatedToolCallSuccess, oneof: "result" }, { no: 2, name: "error", kind: "message", T: TruncatedToolCallError, oneof: "result" }]), TruncatedToolCall = proto3.makeMessageType("agent.v1.TruncatedToolCall", () => [{ no: 1, name: "original_step_blob_id", kind: "scalar", T: 12 }, { no: 2, name: "args", kind: "message", T: TruncatedToolCallArgs }, { no: 3, name: "result", kind: "message", T: TruncatedToolCallResult }, { no: 4, name: "original_step_size_bytes", kind: "scalar", T: 13 }, { no: 5, name: "preview", kind: "message", T: ToolCall }]), ConversationStep = proto3.makeMessageType("agent.v1.ConversationStep", () => [{ no: 1, name: "assistant_message", kind: "message", T: AssistantMessage, oneof: "message" }, { no: 2, name: "tool_call", kind: "message", T: ToolCall, oneof: "message" }, { no: 3, name: "thinking_message", kind: "message", T: ThinkingMessage, oneof: "message" }]), TriggeringUserInfo = proto3.makeMessageType("agent.v1.TriggeringUserInfo", () => [{ no: 1, name: "auth_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "user_id", kind: "scalar", T: 5, opt: true }]), SubagentRunState = proto3.makeMessageType("agent.v1.SubagentRunState", () => [{ no: 1, name: "parent_tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "subagent_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "environment", kind: "enum", T: proto3.getEnumType(SubagentExecutionEnvironment) }, { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(SubagentRunStatus) }, { no: 5, name: "title", kind: "scalar", T: 9, opt: true }, { no: 6, name: "detail", kind: "scalar", T: 9, opt: true }, { no: 7, name: "transcript_path", kind: "scalar", T: 9, opt: true }, { no: 8, name: "output_path", kind: "scalar", T: 9, opt: true }, { no: 9, name: "completed_timestamp_ms", kind: "scalar", T: 4, opt: true }, { no: 10, name: "completion_reason", kind: "enum", T: proto3.getEnumType(BackgroundTaskCompletionReason), opt: true }]), SubagentDispatchStep = proto3.makeMessageType("agent.v1.SubagentDispatchStep", () => [{ no: 1, name: "step_index", kind: "scalar", T: 13 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 3, name: "tool", kind: "enum", T: proto3.getEnumType(SubagentDispatchTool) }, { no: 4, name: "backgrounded", kind: "scalar", T: 8 }]), SubmittedCustomMode = proto3.makeMessageType("agent.v1.SubmittedCustomMode", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "label", kind: "scalar", T: 9 }, { no: 5, name: "source", kind: "enum", T: proto3.getEnumType(CustomModeSource) }, { no: 6, name: "source_path", kind: "scalar", T: 9, opt: true }, { no: 7, name: "source_hash", kind: "scalar", T: 9, opt: true }, { no: 10, name: "managed_skill_id", kind: "scalar", T: 9, opt: true }, { no: 11, name: "plugin_id", kind: "scalar", T: 9, opt: true }, { no: 12, name: "plugin_snapshot_token", kind: "scalar", T: 9, opt: true }]), SubmittedExitedCustomMode = proto3.makeMessageType("agent.v1.SubmittedExitedCustomMode", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "label", kind: "scalar", T: 9 }]), CustomModeExitIntent = proto3.makeMessageType("agent.v1.CustomModeExitIntent", () => [{ no: 1, name: "next_mode", kind: "enum", T: proto3.getEnumType(AgentMode) }, { no: 2, name: "exited_mode", kind: "message", T: SubmittedExitedCustomMode }]), CustomModeIntent = proto3.makeMessageType("agent.v1.CustomModeIntent", () => [{ no: 1, name: "enter", kind: "message", T: SubmittedCustomMode, oneof: "intent" }, { no: 2, name: "exit", kind: "message", T: CustomModeExitIntent, oneof: "intent" }]), InteractionResponseMetadata = proto3.makeMessageType("agent.v1.InteractionResponseMetadata", () => [{ no: 1, name: "interaction_id", kind: "scalar", T: 9 }, { no: 2, name: "response", kind: "message", T: InteractionResponse, opt: true }, { no: 3, name: "skipped_question_ids", kind: "scalar", T: 9, repeated: true }]), SubscriptionEventDisplay = proto3.makeMessageType("agent.v1.SubscriptionEventDisplay", () => [{ no: 1, name: "display_label", kind: "scalar", T: 9, opt: true }, { no: 2, name: "resource_url", kind: "scalar", T: 9, opt: true }, { no: 3, name: "subscription_id", kind: "scalar", T: 9, opt: true }]), ExecutePlanInfo = proto3.makeMessageType("agent.v1.ExecutePlanInfo", () => [{ no: 1, name: "plan_id", kind: "scalar", T: 9 }, { no: 2, name: "plan_title", kind: "scalar", T: 9 }]), ProjectDetails = proto3.makeMessageType("agent.v1.ProjectDetails", () => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "subagent", kind: "message", T: ProjectSubagentDetails, opt: true }, { no: 3, name: "side_chat", kind: "message", T: ProjectSideChatDetails, opt: true }, { no: 4, name: "init_description", kind: "scalar", T: 9, opt: true }]), ProjectSubagentDetails = proto3.makeMessageType("agent.v1.ProjectSubagentDetails", () => [{ no: 2, name: "store_dir", kind: "scalar", T: 9, opt: true }]), ProjectSideChatDetails = proto3.makeMessageType("agent.v1.ProjectSideChatDetails", () => [{ no: 1, name: "store_dir", kind: "scalar", T: 9 }]), UserMessage = proto3.makeMessageType("agent.v1.UserMessage", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "message_id", kind: "scalar", T: 9 }, { no: 3, name: "selected_context", kind: "message", T: SelectedContext, opt: true }, { no: 4, name: "mode", kind: "enum", T: proto3.getEnumType(AgentMode) }, { no: 5, name: "is_simulated_msg", kind: "scalar", T: 8, opt: true }, { no: 6, name: "best_of_n_group_id", kind: "scalar", T: 9, opt: true }, { no: 7, name: "try_use_best_of_n_promotion", kind: "scalar", T: 8, opt: true }, { no: 8, name: "rich_text", kind: "scalar", T: 9, opt: true }, { no: 9, name: "simulated_msg_reason", kind: "enum", T: proto3.getEnumType(SimulatedMsgReason), opt: true }, { no: 10, name: "conversation_state_blob_id", kind: "scalar", T: 12 }, { no: 11, name: "subagent_system_reminder", kind: "scalar", T: 9, opt: true }, { no: 13, name: "triggering_user_info", kind: "message", T: TriggeringUserInfo, opt: true }, { no: 14, name: "execute_plan_info", kind: "message", T: ExecutePlanInfo, opt: true }, { no: 15, name: "simulated_message_metadata", kind: "message", T: UserMessage_SimulatedMessageMetadata, opt: true }, { no: 16, name: "prompt_reference_id", kind: "scalar", T: 9, opt: true }, { no: 17, name: "thread_id", kind: "scalar", T: 9, opt: true }, { no: 18, name: "text_blob_id", kind: "scalar", T: 12, opt: true }, { no: 19, name: "rich_text_blob_id", kind: "scalar", T: 12, opt: true }, { no: 21, name: "hook_additional_contexts", kind: "message", T: HookAdditionalContext, repeated: true }, { no: 22, name: "custom_mode_intent", kind: "message", T: CustomModeIntent, opt: true }, { no: 23, name: "project_details", kind: "message", T: ProjectDetails, opt: true }, { no: 24, name: "turn_steer", kind: "scalar", T: 8, opt: true }, { no: 25, name: "started_at_ms", kind: "scalar", T: 4, opt: true }, { no: 26, name: "completed_at_ms", kind: "scalar", T: 4, opt: true }, { no: 27, name: "sent_by_agent_id", kind: "scalar", T: 9, opt: true }, { no: 28, name: "sent_by_voice_call", kind: "scalar", T: 8, opt: true }, { no: 29, name: "sender", kind: "message", T: MessageSender, opt: true }, { no: 30, name: "forked_context", kind: "scalar", T: 9, opt: true }]), UserMessage_SimulatedMessageMetadata = proto3.makeMessageType("agent.v1.UserMessage.SimulatedMessageMetadata", () => [{ no: 1, name: "title", kind: "scalar", T: 9, opt: true }, { no: 2, name: "task_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "fsd_finding_action", kind: "scalar", T: 9, opt: true }, { no: 4, name: "url", kind: "scalar", T: 9, opt: true }, { no: 5, name: "subscription_source", kind: "enum", T: proto3.getEnumType(SubscriptionSource), opt: true }, { no: 6, name: "subscription_event_display", kind: "message", T: SubscriptionEventDisplay, opt: true }, { no: 7, name: "interaction_response", kind: "message", T: InteractionResponseMetadata, opt: true }], { localName: "UserMessage_SimulatedMessageMetadata" }), MessageSender = proto3.makeMessageType("agent.v1.MessageSender", () => [{ no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(MessageSender_Kind) }, { no: 2, name: "id", kind: "scalar", T: 9 }, { no: 3, name: "display_name", kind: "scalar", T: 9 }]), MessageSender_Kind = proto3.makeEnum("agent.v1.MessageSender.Kind", [{ no: 0, name: "KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KIND_AGENT", localName: "AGENT" }, { no: 2, name: "KIND_VOICE_CALL", localName: "VOICE_CALL" }, { no: 3, name: "KIND_MAIN_BOT", localName: "MAIN_BOT" }, { no: 4, name: "KIND_PROJECT", localName: "PROJECT" }]), AssistantMessage = proto3.makeMessageType("agent.v1.AssistantMessage", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "started_at_ms", kind: "scalar", T: 4, opt: true }, { no: 3, name: "completed_at_ms", kind: "scalar", T: 4, opt: true }]), ThinkingMessage = proto3.makeMessageType("agent.v1.ThinkingMessage", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "duration_ms", kind: "scalar", T: 13 }, { no: 3, name: "started_at_ms", kind: "scalar", T: 4, opt: true }, { no: 4, name: "completed_at_ms", kind: "scalar", T: 4, opt: true }]), PlanRegistryEntry = proto3.makeMessageType("agent.v1.PlanRegistryEntry", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }]), GoalState = proto3.makeMessageType("agent.v1.GoalState", () => [{ no: 1, name: "conversation_id", kind: "scalar", T: 9 }, { no: 2, name: "goal_id", kind: "scalar", T: 9 }, { no: 3, name: "objective", kind: "scalar", T: 9 }, { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(GoalStatus) }, { no: 5, name: "idle_continuations_without_tool_calls", kind: "scalar", T: 13 }, { no: 6, name: "active_duration_ms", kind: "scalar", T: 4, opt: true }, { no: 7, name: "last_accrued_at_ms", kind: "scalar", T: 4, opt: true }, { no: 8, name: "continuation_count", kind: "scalar", T: 13 }, { no: 9, name: "agent_session_id", kind: "scalar", T: 9, opt: true }]), ConversationTurnStructure = proto3.makeMessageType("agent.v1.ConversationTurnStructure", () => [{ no: 1, name: "agent_conversation_turn", kind: "message", T: AgentConversationTurnStructure, oneof: "turn" }, { no: 2, name: "shell_conversation_turn", kind: "message", T: ShellConversationTurnStructure, oneof: "turn" }]), AgentConversationTurnStructure = proto3.makeMessageType("agent.v1.AgentConversationTurnStructure", () => [{ no: 1, name: "user_message", kind: "scalar", T: 12 }, { no: 2, name: "steps", kind: "scalar", T: 12, repeated: true }, { no: 3, name: "request_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "encrypted_model", kind: "scalar", T: 9, opt: true }, { no: 5, name: "dynamic_tool_count", kind: "scalar", T: 13, opt: true }, { no: 6, name: "send_message_step_indices", kind: "scalar", T: 13, repeated: true }, { no: 7, name: "routed_model_display_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "subagent_dispatch_steps", kind: "message", T: SubagentDispatchStep, repeated: true }, { no: 9, name: "dynamic_tool_names", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "user_message_id", kind: "scalar", T: 9, opt: true }, { no: 11, name: "long_reasoning_reminder", kind: "message", T: LongReasoningReminderState, opt: true }, { no: 12, name: "long_reasoning_reminder_exposure_logged", kind: "scalar", T: 8 }, { no: 13, name: "assistant_text_step_indices", kind: "scalar", T: 13, repeated: true }, { no: 14, name: "assistant_text_steps_recorded", kind: "scalar", T: 8, opt: true }]), LongReasoningReminderState = proto3.makeMessageType("agent.v1.LongReasoningReminderState", () => [{ no: 1, name: "remaining_delay_calls", kind: "scalar", T: 13 }]), ShellConversationTurnStructure = proto3.makeMessageType("agent.v1.ShellConversationTurnStructure", () => [{ no: 1, name: "shell_command", kind: "scalar", T: 12 }, { no: 2, name: "shell_output", kind: "scalar", T: 12 }]), PromptTokenBreakdownCategory = proto3.makeMessageType("agent.v1.PromptTokenBreakdownCategory", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "label", kind: "scalar", T: 9 }, { no: 3, name: "estimated_tokens", kind: "scalar", T: 13 }, { no: 4, name: "character_count", kind: "scalar", T: 13, opt: true }]), PromptTokenBreakdownSnapshot = proto3.makeMessageType("agent.v1.PromptTokenBreakdownSnapshot", () => [{ no: 1, name: "total_used_tokens", kind: "scalar", T: 13 }, { no: 2, name: "max_tokens", kind: "scalar", T: 13 }, { no: 3, name: "categories", kind: "message", T: PromptTokenBreakdownCategory, repeated: true }]), PromptContextSourceRef = proto3.makeMessageType("agent.v1.PromptContextSourceRef", () => [{ no: 1, name: "source_type", kind: "scalar", T: 9 }, { no: 3, name: "message_index", kind: "scalar", T: 13 }, { no: 4, name: "content_path", kind: "scalar", T: 9 }, { no: 5, name: "start_offset", kind: "scalar", T: 13 }, { no: 6, name: "end_offset", kind: "scalar", T: 13 }]), PromptContextNode = proto3.makeMessageType("agent.v1.PromptContextNode", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "parent_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "kind", kind: "scalar", T: 9 }, { no: 4, name: "label", kind: "scalar", T: 9 }, { no: 5, name: "category_id", kind: "scalar", T: 9 }, { no: 6, name: "estimated_tokens", kind: "scalar", T: 13 }, { no: 7, name: "character_count", kind: "scalar", T: 13 }, { no: 9, name: "content_available", kind: "scalar", T: 8 }, { no: 11, name: "source", kind: "message", T: PromptContextSourceRef, opt: true }, { no: 12, name: "inline_content", kind: "scalar", T: 9, opt: true }]), PromptContextUsageTree = proto3.makeMessageType("agent.v1.PromptContextUsageTree", () => [{ no: 1, name: "schema_version", kind: "scalar", T: 13 }, { no: 2, name: "nodes", kind: "message", T: PromptContextNode, repeated: true }]), ConversationTokenDetails = proto3.makeMessageType("agent.v1.ConversationTokenDetails", () => [{ no: 1, name: "used_tokens", kind: "scalar", T: 13 }, { no: 2, name: "max_tokens", kind: "scalar", T: 13 }, { no: 3, name: "breakdown", kind: "message", T: PromptTokenBreakdownSnapshot, opt: true }, { no: 4, name: "prompt_context_usage_tree", kind: "message", T: PromptContextUsageTree, opt: true }]), FileStateStructure = proto3.makeMessageType("agent.v1.FileStateStructure", () => [{ no: 1, name: "content", kind: "scalar", T: 12, opt: true }, { no: 2, name: "initial_content", kind: "scalar", T: 12, opt: true }]), StepTiming = proto3.makeMessageType("agent.v1.StepTiming", () => [{ no: 1, name: "duration_ms", kind: "scalar", T: 4 }, { no: 2, name: "timestamp_ms", kind: "scalar", T: 4 }]), TurnTelemetryState = proto3.makeMessageType("agent.v1.TurnTelemetryState", () => [{ no: 1, name: "completed_turn_count_capped", kind: "scalar", T: 13 }, { no: 2, name: "last_completed_turn_timestamp_ms", kind: "scalar", T: 4, opt: true }]), CommunicateUpdateHistoryEntry = proto3.makeMessageType("agent.v1.CommunicateUpdateHistoryEntry", () => [{ no: 1, name: "step", kind: "scalar", T: 9 }, { no: 3, name: "message_index", kind: "scalar", T: 13 }]), CommunicateUpdateTurnState = proto3.makeMessageType("agent.v1.CommunicateUpdateTurnState", () => [{ no: 1, name: "history", kind: "message", T: CommunicateUpdateHistoryEntry, repeated: true }, { no: 2, name: "final_summary", kind: "scalar", T: 9, opt: true }, { no: 3, name: "completed_subtitle", kind: "scalar", T: 9, opt: true }]), SubagentPersistedState = proto3.makeMessageType("agent.v1.SubagentPersistedState", () => [{ no: 1, name: "conversation_state", kind: "message", T: ConversationStateStructure }, { no: 2, name: "created_timestamp_ms", kind: "scalar", T: 4 }, { no: 3, name: "last_used_timestamp_ms", kind: "scalar", T: 4 }, { no: 4, name: "subagent_type", kind: "message", T: SubagentType }, { no: 5, name: "model_id", kind: "scalar", T: 9, opt: true }, { no: 6, name: "environment", kind: "enum", T: proto3.getEnumType(SubagentExecutionEnvironment) }, { no: 7, name: "cloud_subagent", kind: "message", T: CloudSubagentReference, opt: true }, { no: 8, name: "first_class_bc_id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "cloud_requested_environment_build_id", kind: "scalar", T: 9, opt: true }, { no: 10, name: "machine", kind: "message", T: TargetMachine, opt: true }]), CloudSubagentReference = proto3.makeMessageType("agent.v1.CloudSubagentReference", () => [{ no: 1, name: "bc_id", kind: "scalar", T: 9 }, { no: 2, name: "transcript_path", kind: "scalar", T: 9, opt: true }]), TrackedGitRepo = proto3.makeMessageType("agent.v1.TrackedGitRepo", () => [{ no: 1, name: "repo_path", kind: "scalar", T: 9 }, { no: 2, name: "branch_name", kind: "scalar", T: 9 }]), ConversationStateStructure = proto3.makeMessageType("agent.v1.ConversationStateStructure", () => [{ no: 1, name: "root_prompt_messages_json", kind: "scalar", T: 12, repeated: true }, { no: 8, name: "turns", kind: "scalar", T: 12, repeated: true }, { no: 3, name: "todos", kind: "scalar", T: 12, repeated: true }, { no: 4, name: "pending_tool_calls", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "token_details", kind: "message", T: ConversationTokenDetails }, { no: 6, name: "summary", kind: "scalar", T: 12, opt: true }, { no: 7, name: "plan", kind: "scalar", T: 12, opt: true }, { no: 9, name: "previous_workspace_uris", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "mode", kind: "enum", T: proto3.getEnumType(AgentMode), opt: true }, { no: 11, name: "summary_archive", kind: "scalar", T: 12, opt: true }, { no: 12, name: "file_states", kind: "map", K: 9, V: { kind: "scalar", T: 12 } }, { no: 15, name: "file_states_v2", kind: "map", K: 9, V: { kind: "message", T: FileStateStructure } }, { no: 13, name: "summary_archives", kind: "scalar", T: 12, repeated: true }, { no: 14, name: "turn_timings", kind: "message", T: StepTiming, repeated: true }, { no: 16, name: "subagent_states", kind: "map", K: 9, V: { kind: "message", T: SubagentPersistedState } }, { no: 17, name: "self_summary_count", kind: "scalar", T: 13 }, { no: 18, name: "read_paths", kind: "scalar", T: 9, repeated: true }, { no: 19, name: "active_branch_name", kind: "scalar", T: 9, opt: true }, { no: 20, name: "plans", kind: "map", K: 9, V: { kind: "message", T: PlanRegistryEntry } }, { no: 21, name: "tracked_git_repo_branches", kind: "message", T: TrackedGitRepo, repeated: true }, { no: 22, name: "agent_type", kind: "scalar", T: 9, opt: true }, { no: 23, name: "communicate_update_history", kind: "message", T: CommunicateUpdateHistoryEntry, repeated: true }, { no: 24, name: "subagent_threads", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 25, name: "communicate_update_final_summary", kind: "scalar", T: 9, opt: true }, { no: 28, name: "communicate_update_completed_subtitle", kind: "scalar", T: 9, opt: true }, { no: 29, name: "communicate_update_states_by_parent_tool_call_id", kind: "map", K: 9, V: { kind: "message", T: CommunicateUpdateTurnState } }, { no: 30, name: "subagent_runs_by_parent_tool_call_id", kind: "map", K: 9, V: { kind: "message", T: SubagentRunState } }, { no: 26, name: "conversation_started_timestamp_ms", kind: "scalar", T: 4, opt: true }, { no: 27, name: "conversation_started_time_zone", kind: "scalar", T: 9, opt: true }, { no: 31, name: "subagent_state_refs", kind: "map", K: 9, V: { kind: "scalar", T: 12 } }, { no: 32, name: "goal_state", kind: "message", T: GoalState, opt: true }, { no: 33, name: "is_root_project_conversation", kind: "scalar", T: 8, opt: true }, { no: 34, name: "completed_ask_question_tool_call_ids", kind: "scalar", T: 9, repeated: true }, { no: 35, name: "durable_skill_blocks", kind: "scalar", T: 9, repeated: true }, { no: 36, name: "durable_custom_mode_id", kind: "scalar", T: 9, opt: true }, { no: 37, name: "message_count_at_last_compaction", kind: "scalar", T: 13, opt: true }, { no: 38, name: "recent_user_message_ids", kind: "scalar", T: 9, repeated: true }, { no: 39, name: "recent_user_message_ids_older_turn_count", kind: "scalar", T: 13, opt: true }, { no: 40, name: "turn_telemetry", kind: "message", T: TurnTelemetryState, opt: true }, { no: 42, name: "mentioned_agent_ids", kind: "scalar", T: 9, repeated: true }]), InteractionResponse = proto3.makeMessageType("agent.v1.InteractionResponse", () => [{ no: 1, name: "id", kind: "scalar", T: 13 }, { no: 2, name: "web_search_request_response", kind: "message", T: WebSearchRequestResponse, oneof: "result" }, { no: 3, name: "ask_question_interaction_response", kind: "message", T: AskQuestionInteractionResponse, oneof: "result" }, { no: 4, name: "switch_mode_request_response", kind: "message", T: SwitchModeRequestResponse, oneof: "result" }, { no: 7, name: "create_plan_request_response", kind: "message", T: CreatePlanRequestResponse, oneof: "result" }, { no: 8, name: "setup_vm_environment_result", kind: "message", T: SetupVmEnvironmentResult, oneof: "result" }, { no: 9, name: "web_fetch_request_response", kind: "message", T: WebFetchRequestResponse, oneof: "result" }, { no: 10, name: "pr_management_result", kind: "message", T: PrManagementResult, oneof: "result" }, { no: 11, name: "mcp_auth_request_response", kind: "message", T: McpAuthRequestResponse, oneof: "result" }, { no: 12, name: "generate_image_request_response", kind: "message", T: GenerateImageRequestResponse, oneof: "result" }, { no: 13, name: "replace_env_result", kind: "message", T: ReplaceEnvResult, oneof: "result" }, { no: 14, name: "connect_scm_request_response", kind: "message", T: ConnectScmRequestResponse, oneof: "result" }]), AskQuestionInteractionResponse = proto3.makeMessageType("agent.v1.AskQuestionInteractionResponse", () => [{ no: 1, name: "result", kind: "message", T: AskQuestionResult }]), CLOUD_AGENT_CACHE_DB_NAME = "cloudAgentCache", CLOUD_AGENT_CACHE_DB_VERSION = 6, CLOUD_AGENT_CACHE_STORES = { blobs: "blobs", states: "states", revisions: "revisions", prStates: "prStates", pendingKickoffPrompts: "pendingKickoffPrompts", pendingCreationQueueStates: "pendingCreationQueueStates", sideChatSyncStates: "sideChatSyncStates" };
function makeCloudAgentCacheBlobKey(n, e) {
  const t = Array.from(e, (a) => a.toString(16).padStart(2, "0")).join("");
  return `${n}:${t}`;
}
function openCloudAgentCacheDatabaseVersion(n) {
  return new Promise((e, t) => {
    const a = n === void 0 ? indexedDB.open(CLOUD_AGENT_CACHE_DB_NAME) : indexedDB.open(CLOUD_AGENT_CACHE_DB_NAME, n);
    a.onupgradeneeded = () => {
      const s = a.result;
      for (const r of Object.values(CLOUD_AGENT_CACHE_STORES)) s.objectStoreNames.contains(r) || s.createObjectStore(r);
    }, a.onsuccess = () => e(a.result), a.onerror = () => t(a.error);
  });
}
async function openCloudAgentCacheDatabase() {
  try {
    return await openCloudAgentCacheDatabaseVersion(CLOUD_AGENT_CACHE_DB_VERSION);
  } catch (n) {
    if (!(n instanceof DOMException && n.name === "VersionError")) throw n;
    return openCloudAgentCacheDatabaseVersion(void 0);
  }
}
function asStateBinary(n) {
  if (n instanceof Uint8Array) return n;
  if (n instanceof ArrayBuffer) return new Uint8Array(n);
}
function parseCloudAgentCacheState(n) {
  try {
    const e = typeof n == "string" ? JSON.parse(n) : n;
    if (typeof e != "object" || e === null) return;
    const { offsetKey: t, savedAt: a, stateJson: s } = e, r = asStateBinary(e.stateBinary);
    return typeof t != "string" || r === void 0 && typeof s != "string" || a !== void 0 && (typeof a != "number" || !Number.isFinite(a)) ? void 0 : { offsetKey: t, savedAt: a, stateJson: typeof s == "string" ? s : void 0, stateBinary: r };
  } catch {
    return;
  }
}
function inspectCloudAgentCacheState(n) {
  const e = parseCloudAgentCacheState(n);
  if (e !== void 0) return { offsetKey: e.offsetKey, savedAt: e.savedAt };
}
function decodeCloudAgentCacheState(n) {
  try {
    const e = parseCloudAgentCacheState(n);
    return e === void 0 ? void 0 : { state: e.stateBinary !== void 0 ? ConversationStateStructure.fromBinary(e.stateBinary) : ConversationStateStructure.fromJsonString(e.stateJson, { ignoreUnknownFields: true }), offsetKey: e.offsetKey, savedAt: e.savedAt };
  } catch {
    return;
  }
}
function measureCloudAgentCacheStateBytes(n) {
  try {
    const e = parseCloudAgentCacheState(n);
    return e === void 0 ? void 0 : e.stateBinary !== void 0 ? e.stateBinary.byteLength : e.stateJson === void 0 ? void 0 : new TextEncoder().encode(e.stateJson).byteLength;
  } catch {
    return;
  }
}
function _getDefaults() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var _defaults = _getDefaults();
function changeDefaults(n) {
  _defaults = n;
}
var escapeTest = /[&<>"']/, escapeReplace = new RegExp(escapeTest.source, "g"), escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g"), escapeReplacements = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, getEscapeReplacement = (n) => escapeReplacements[n];
function escape$1(n, e) {
  if (e) {
    if (escapeTest.test(n)) return n.replace(escapeReplace, getEscapeReplacement);
  } else if (escapeTestNoEncode.test(n)) return n.replace(escapeReplaceNoEncode, getEscapeReplacement);
  return n;
}
var caret = /(^|[^\[])\^/g;
function edit(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const a = { replace: (s, r) => {
    let o = typeof r == "string" ? r : r.source;
    return o = o.replace(caret, "$1"), t = t.replace(s, o), a;
  }, getRegex: () => new RegExp(t, e) };
  return a;
}
function cleanUrl(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
var noopTest = { exec: () => null };
function splitCells(n, e) {
  const t = n.replace(/\|/g, (r, o, i) => {
    let l = false, c = o;
    for (; --c >= 0 && i[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), a = t.split(/ \|/);
  let s = 0;
  if (a[0].trim() || a.shift(), a.length > 0 && !a[a.length - 1].trim() && a.pop(), e) if (a.length > e) a.splice(e);
  else for (; a.length < e; ) a.push("");
  for (; s < a.length; s++) a[s] = a[s].trim().replace(/\\\|/g, "|");
  return a;
}
function rtrim2(n, e, t) {
  const a = n.length;
  if (a === 0) return "";
  let s = 0;
  for (; s < a; ) {
    const r = n.charAt(a - s - 1);
    if (r === e && !t) s++;
    else if (r !== e && t) s++;
    else break;
  }
  return n.slice(0, a - s);
}
function findClosingBracket(n, e) {
  if (n.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let a = 0; a < n.length; a++) if (n[a] === "\\") a++;
  else if (n[a] === e[0]) t++;
  else if (n[a] === e[1] && (t--, t < 0)) return a;
  return -1;
}
function outputLink(n, e, t, a) {
  const s = e.href, r = e.title ? escape$1(e.title) : null, o = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    a.state.inLink = true;
    const i = { type: "link", raw: t, href: s, title: r, text: o, tokens: a.inlineTokens(o) };
    return a.state.inLink = false, i;
  }
  return { type: "image", raw: t, href: s, title: r, text: escape$1(o) };
}
function indentCodeCompensation(n, e) {
  const t = n.match(/^(\s+)(?:```)/);
  if (t === null) return e;
  const a = t[1];
  return e.split(`
`).map((s) => {
    const r = s.match(/^\s+/);
    if (r === null) return s;
    const [o] = r;
    return o.length >= a.length ? s.slice(a.length) : s;
  }).join(`
`);
}
var _Tokenizer = class {
  options;
  rules;
  lexer;
  constructor(n) {
    this.options = n || _defaults;
  }
  space(n) {
    const e = this.rules.block.newline.exec(n);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(n) {
    const e = this.rules.block.code.exec(n);
    if (e) {
      const t = e[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : rtrim2(t, `
`) };
    }
  }
  fences(n) {
    const e = this.rules.block.fences.exec(n);
    if (e) {
      const t = e[0], a = indentCodeCompensation(t, e[3] || "");
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: a };
    }
  }
  heading(n) {
    const e = this.rules.block.heading.exec(n);
    if (e) {
      let t = e[2].trim();
      if (/#$/.test(t)) {
        const a = rtrim2(t, "#");
        (this.options.pedantic || !a || / $/.test(a)) && (t = a.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(n) {
    const e = this.rules.block.hr.exec(n);
    if (e) return { type: "hr", raw: rtrim2(e[0], `
`) };
  }
  blockquote(n) {
    const e = this.rules.block.blockquote.exec(n);
    if (e) {
      let t = rtrim2(e[0], `
`).split(`
`), a = "", s = "";
      const r = [];
      for (; t.length > 0; ) {
        let o = false;
        const i = [];
        let l;
        for (l = 0; l < t.length; l++) if (/^ {0,3}>/.test(t[l])) i.push(t[l]), o = true;
        else if (!o) i.push(t[l]);
        else break;
        t = t.slice(l);
        const c = i.join(`
`), u = c.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`).replace(/^ {0,3}>[ \t]?/gm, "");
        a = a ? `${a}
${c}` : c, s = s ? `${s}
${u}` : u;
        const m = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(u, r, true), this.lexer.state.top = m, t.length === 0) break;
        const d = r[r.length - 1];
        if (d?.type === "code") break;
        if (d?.type === "blockquote") {
          const g = d, k = g.raw + `
` + t.join(`
`), y = this.blockquote(k);
          r[r.length - 1] = y, a = a.substring(0, a.length - g.raw.length) + y.raw, s = s.substring(0, s.length - g.text.length) + y.text;
          break;
        } else if (d?.type === "list") {
          const g = d, k = g.raw + `
` + t.join(`
`), y = this.list(k);
          r[r.length - 1] = y, a = a.substring(0, a.length - d.raw.length) + y.raw, s = s.substring(0, s.length - g.raw.length) + y.raw, t = k.substring(r[r.length - 1].raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: a, tokens: r, text: s };
    }
  }
  list(n) {
    let e = this.rules.block.list.exec(n);
    if (e) {
      let t = e[1].trim();
      const a = t.length > 1, s = { type: "list", raw: "", ordered: a, start: a ? +t.slice(0, -1) : "", loose: false, items: [] };
      t = a ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = a ? t : "[*+-]");
      const r = new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = false;
      for (; n; ) {
        let i = false, l = "", c = "";
        if (!(e = r.exec(n)) || this.rules.block.hr.test(n)) break;
        l = e[0], n = n.substring(l.length);
        let u = e[2].split(`
`, 1)[0].replace(/^\t+/, (b) => " ".repeat(3 * b.length)), m = n.split(`
`, 1)[0], d = !u.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, c = u.trimStart()) : d ? g = e[1].length + 1 : (g = e[2].search(/[^ ]/), g = g > 4 ? 1 : g, c = u.slice(g), g += e[1].length), d && /^ *$/.test(m) && (l += m + `
`, n = n.substring(m.length + 1), i = true), !i) {
          const b = new RegExp(`^ {0,${Math.min(3, g - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), R = new RegExp(`^ {0,${Math.min(3, g - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), I = new RegExp(`^ {0,${Math.min(3, g - 1)}}(?:\`\`\`|~~~)`), w = new RegExp(`^ {0,${Math.min(3, g - 1)}}#`);
          for (; n; ) {
            const L = n.split(`
`, 1)[0];
            if (m = L, this.options.pedantic && (m = m.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), I.test(m) || w.test(m) || b.test(m) || R.test(n)) break;
            if (m.search(/[^ ]/) >= g || !m.trim()) c += `
` + m.slice(g);
            else {
              if (d || u.search(/[^ ]/) >= 4 || I.test(u) || w.test(u) || R.test(u)) break;
              c += `
` + m;
            }
            !d && !m.trim() && (d = true), l += L + `
`, n = n.substring(L.length + 1), u = m.slice(g);
          }
        }
        s.loose || (o ? s.loose = true : /\n *\n *$/.test(l) && (o = true));
        let k = null, y;
        this.options.gfm && (k = /^\[[ xX]\] /.exec(c), k && (y = k[0] !== "[ ] ", c = c.replace(/^\[[ xX]\] +/, ""))), s.items.push({ type: "list_item", raw: l, task: !!k, checked: y, loose: false, text: c, tokens: [] }), s.raw += l;
      }
      s.items[s.items.length - 1].raw = s.items[s.items.length - 1].raw.trimEnd(), s.items[s.items.length - 1].text = s.items[s.items.length - 1].text.trimEnd(), s.raw = s.raw.trimEnd();
      for (let i = 0; i < s.items.length; i++) if (this.lexer.state.top = false, s.items[i].tokens = this.lexer.blockTokens(s.items[i].text, []), !s.loose) {
        const l = s.items[i].tokens.filter((u) => u.type === "space"), c = l.length > 0 && l.some((u) => /\n.*\n/.test(u.raw));
        s.loose = c;
      }
      if (s.loose) for (let i = 0; i < s.items.length; i++) s.items[i].loose = true;
      return s;
    }
  }
  html(n) {
    const e = this.rules.block.html.exec(n);
    if (e) return { type: "html", block: true, raw: e[0], pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: e[0] };
  }
  def(n) {
    const e = this.rules.block.def.exec(n);
    if (e) {
      const t = e[1].toLowerCase().replace(/\s+/g, " "), a = e[2] ? e[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: e[0], href: a, title: s };
    }
  }
  table(n) {
    const e = this.rules.block.table.exec(n);
    if (!e || !/[:|]/.test(e[2])) return;
    const t = splitCells(e[1]), a = e[2].replace(/^\||\| *$/g, "").split("|"), s = e[3] && e[3].trim() ? e[3].replace(/\n[ \t]*$/, "").split(`
`) : [], r = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (t.length === a.length) {
      for (const o of a) /^ *-+: *$/.test(o) ? r.align.push("right") : /^ *:-+: *$/.test(o) ? r.align.push("center") : /^ *:-+ *$/.test(o) ? r.align.push("left") : r.align.push(null);
      for (let o = 0; o < t.length; o++) r.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: true, align: r.align[o] });
      for (const o of s) r.rows.push(splitCells(o, r.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: false, align: r.align[l] })));
      return r;
    }
  }
  lheading(n) {
    const e = this.rules.block.lheading.exec(n);
    if (e) return { type: "heading", raw: e[0], depth: e[2].charAt(0) === "=" ? 1 : 2, text: e[1], tokens: this.lexer.inline(e[1]) };
  }
  paragraph(n) {
    const e = this.rules.block.paragraph.exec(n);
    if (e) {
      const t = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: t, tokens: this.lexer.inline(t) };
    }
  }
  text(n) {
    const e = this.rules.block.text.exec(n);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(n) {
    const e = this.rules.inline.escape.exec(n);
    if (e) return { type: "escape", raw: e[0], text: escape$1(e[1]) };
  }
  tag(n) {
    const e = this.rules.inline.tag.exec(n);
    if (e) return !this.lexer.state.inLink && /^<a /i.test(e[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(e[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: e[0] };
  }
  link(n) {
    const e = this.rules.inline.link.exec(n);
    if (e) {
      const t = e[2].trim();
      if (!this.options.pedantic && /^</.test(t)) {
        if (!/>$/.test(t)) return;
        const r = rtrim2(t.slice(0, -1), "\\");
        if ((t.length - r.length) % 2 === 0) return;
      } else {
        const r = findClosingBracket(e[2], "()");
        if (r > -1) {
          const i = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + r;
          e[2] = e[2].substring(0, r), e[0] = e[0].substring(0, i).trim(), e[3] = "";
        }
      }
      let a = e[2], s = "";
      if (this.options.pedantic) {
        const r = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);
        r && (a = r[1], s = r[3]);
      } else s = e[3] ? e[3].slice(1, -1) : "";
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(t) ? a = a.slice(1) : a = a.slice(1, -1)), outputLink(e, { href: a && a.replace(this.rules.inline.anyPunctuation, "$1"), title: s && s.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer);
    }
  }
  reflink(n, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(n)) || (t = this.rules.inline.nolink.exec(n))) {
      const a = (t[2] || t[1]).replace(/\s+/g, " "), s = e[a.toLowerCase()];
      if (!s) {
        const r = t[0].charAt(0);
        return { type: "text", raw: r, text: r };
      }
      return outputLink(t, s, t[0], this.lexer);
    }
  }
  emStrong(n, e, t = "") {
    let a = this.rules.inline.emStrongLDelim.exec(n);
    if (!a || a[3] && t.match(/[\p{L}\p{N}]/u)) return;
    if (!(a[1] || a[2] || "") || !t || this.rules.inline.punctuation.exec(t)) {
      const r = [...a[0]].length - 1;
      let o, i, l = r, c = 0;
      const u = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, e = e.slice(-1 * n.length + r); (a = u.exec(e)) != null; ) {
        if (o = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !o) continue;
        if (i = [...o].length, a[3] || a[4]) {
          l += i;
          continue;
        } else if ((a[5] || a[6]) && r % 3 && !((r + i) % 3)) {
          c += i;
          continue;
        }
        if (l -= i, l > 0) continue;
        i = Math.min(i, i + l + c);
        const m = [...a[0]][0].length, d = n.slice(0, r + a.index + m + i);
        if (Math.min(r, i) % 2) {
          const k = d.slice(1, -1);
          return { type: "em", raw: d, text: k, tokens: this.lexer.inlineTokens(k) };
        }
        const g = d.slice(2, -2);
        return { type: "strong", raw: d, text: g, tokens: this.lexer.inlineTokens(g) };
      }
    }
  }
  codespan(n) {
    const e = this.rules.inline.code.exec(n);
    if (e) {
      let t = e[2].replace(/\n/g, " ");
      const a = /[^ ]/.test(t), s = /^ /.test(t) && / $/.test(t);
      return a && s && (t = t.substring(1, t.length - 1)), t = escape$1(t, true), { type: "codespan", raw: e[0], text: t };
    }
  }
  br(n) {
    const e = this.rules.inline.br.exec(n);
    if (e) return { type: "br", raw: e[0] };
  }
  del(n) {
    const e = this.rules.inline.del.exec(n);
    if (e) return { type: "del", raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) };
  }
  autolink(n) {
    const e = this.rules.inline.autolink.exec(n);
    if (e) {
      let t, a;
      return e[2] === "@" ? (t = escape$1(e[1]), a = "mailto:" + t) : (t = escape$1(e[1]), a = t), { type: "link", raw: e[0], text: t, href: a, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(n) {
    let e;
    if (e = this.rules.inline.url.exec(n)) {
      let t, a;
      if (e[2] === "@") t = escape$1(e[0]), a = "mailto:" + t;
      else {
        let s;
        do
          s = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (s !== e[0]);
        t = escape$1(e[0]), e[1] === "www." ? a = "http://" + e[0] : a = e[0];
      }
      return { type: "link", raw: e[0], text: t, href: a, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  inlineText(n) {
    const e = this.rules.inline.text.exec(n);
    if (e) {
      let t;
      return this.lexer.state.inRawBlock ? t = e[0] : t = escape$1(e[0]), { type: "text", raw: e[0], text: t };
    }
  }
}, newline = /^(?: *(?:\n|$))+/, blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, bullet = /(?:[*+-]|\d{1,9}[.)])/, lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, blockText = /^[^\n]+/, _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/, def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex(), _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex(), blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex(), blockNormal = { blockquote, code: blockCode, def, fences, heading, hr, html, lheading, list, newline, paragraph, table: noopTest, text: blockText }, gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex(), blockGfm = { ...blockNormal, table: gfmTable, paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex() }, blockPedantic = { ...blockNormal, html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: noopTest, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: edit(_paragraph).replace("hr", hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, escape2 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br = /^( {2,}|\\)\n(?!\s*$)/, inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, _punctuation = "\\p{P}\\p{S}", punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex(), blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex(), emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex(), emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex(), anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex(), autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex(), tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex(), nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex(), reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex(), inlineNormal = { _backpedal: noopTest, anyPunctuation, autolink, blockSkip, br, code: inlineCode, del: noopTest, emStrongLDelim, emStrongRDelimAst, emStrongRDelimUnd, escape: escape2, link, nolink, punctuation, reflink, reflinkSearch, tag, text: inlineText, url: noopTest }, inlinePedantic = { ...inlineNormal, link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(), reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex() }, inlineGfm = { ...inlineNormal, escape: edit(escape2).replace("])", "~|])").getRegex(), url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, inlineBreaks = { ...inlineGfm, br: edit(br).replace("{2,}", "*").getRegex(), text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, block = { normal: blockNormal, gfm: blockGfm, pedantic: blockPedantic }, inline = { normal: inlineNormal, gfm: inlineGfm, breaks: inlineBreaks, pedantic: inlinePedantic }, _Lexer = class cn {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || _defaults, this.options.tokenizer = this.options.tokenizer || new _Tokenizer(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    const t = { block: block.normal, inline: inline.normal };
    this.options.pedantic ? (t.block = block.pedantic, t.inline = inline.pedantic) : this.options.gfm && (t.block = block.gfm, this.options.breaks ? t.inline = inline.breaks : t.inline = inline.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block, inline };
  }
  static lex(e, t) {
    return new cn(t).lex(e);
  }
  static lexInline(e, t) {
    return new cn(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const a = this.inlineQueue[t];
      this.inlineTokens(a.src, a.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], a = false) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (i, l, c) => l + "    ".repeat(c.length));
    let s, r, o;
    for (; e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((i) => (s = i.call({ lexer: this }, e, t)) ? (e = e.substring(s.raw.length), t.push(s), true) : false))) {
      if (s = this.tokenizer.space(e)) {
        e = e.substring(s.raw.length), s.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(s);
        continue;
      }
      if (s = this.tokenizer.code(e)) {
        e = e.substring(s.raw.length), r = t[t.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + s.raw, r.text += `
` + s.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(s);
        continue;
      }
      if (s = this.tokenizer.fences(e)) {
        e = e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = this.tokenizer.heading(e)) {
        e = e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = this.tokenizer.hr(e)) {
        e = e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = this.tokenizer.blockquote(e)) {
        e = e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = this.tokenizer.list(e)) {
        e = e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = this.tokenizer.html(e)) {
        e = e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = this.tokenizer.def(e)) {
        e = e.substring(s.raw.length), r = t[t.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + s.raw, r.text += `
` + s.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = { href: s.href, title: s.title });
        continue;
      }
      if (s = this.tokenizer.table(e)) {
        e = e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = this.tokenizer.lheading(e)) {
        e = e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (o = e, this.options.extensions && this.options.extensions.startBlock) {
        let i = 1 / 0;
        const l = e.slice(1);
        let c;
        this.options.extensions.startBlock.forEach((u) => {
          c = u.call({ lexer: this }, l), typeof c == "number" && c >= 0 && (i = Math.min(i, c));
        }), i < 1 / 0 && i >= 0 && (o = e.substring(0, i + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(o))) {
        r = t[t.length - 1], a && r?.type === "paragraph" ? (r.raw += `
` + s.raw, r.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(s), a = o.length !== e.length, e = e.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(e)) {
        e = e.substring(s.raw.length), r = t[t.length - 1], r && r.type === "text" ? (r.raw += `
` + s.raw, r.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(s);
        continue;
      }
      if (e) {
        const i = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(i);
          break;
        } else throw new Error(i);
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let a, s, r, o = e, i, l, c;
    if (this.tokens.links) {
      const u = Object.keys(this.tokens.links);
      if (u.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null; ) u.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; ) o = o.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(o)) != null; ) o = o.slice(0, i.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; ) if (l || (c = ""), l = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((u) => (a = u.call({ lexer: this }, e, t)) ? (e = e.substring(a.raw.length), t.push(a), true) : false))) {
      if (a = this.tokenizer.escape(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.tag(e)) {
        e = e.substring(a.raw.length), s = t[t.length - 1], s && a.type === "text" && s.type === "text" ? (s.raw += a.raw, s.text += a.text) : t.push(a);
        continue;
      }
      if (a = this.tokenizer.link(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(a.raw.length), s = t[t.length - 1], s && a.type === "text" && s.type === "text" ? (s.raw += a.raw, s.text += a.text) : t.push(a);
        continue;
      }
      if (a = this.tokenizer.emStrong(e, o, c)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.codespan(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.br(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.del(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.autolink(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (!this.state.inLink && (a = this.tokenizer.url(e))) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (r = e, this.options.extensions && this.options.extensions.startInline) {
        let u = 1 / 0;
        const m = e.slice(1);
        let d;
        this.options.extensions.startInline.forEach((g) => {
          d = g.call({ lexer: this }, m), typeof d == "number" && d >= 0 && (u = Math.min(u, d));
        }), u < 1 / 0 && u >= 0 && (r = e.substring(0, u + 1));
      }
      if (a = this.tokenizer.inlineText(r)) {
        e = e.substring(a.raw.length), a.raw.slice(-1) !== "_" && (c = a.raw.slice(-1)), l = true, s = t[t.length - 1], s && s.type === "text" ? (s.raw += a.raw, s.text += a.text) : t.push(a);
        continue;
      }
      if (e) {
        const u = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(u);
          break;
        } else throw new Error(u);
      }
    }
    return t;
  }
}, _Renderer = class {
  options;
  parser;
  constructor(n) {
    this.options = n || _defaults;
  }
  space(n) {
    return "";
  }
  code({ text: n, lang: e, escaped: t }) {
    const a = (e || "").match(/^\S*/)?.[0], s = n.replace(/\n$/, "") + `
`;
    return a ? '<pre><code class="language-' + escape$1(a) + '">' + (t ? s : escape$1(s, true)) + `</code></pre>
` : "<pre><code>" + (t ? s : escape$1(s, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: n }) {
    return `<blockquote>
${this.parser.parse(n)}</blockquote>
`;
  }
  html({ text: n }) {
    return n;
  }
  heading({ tokens: n, depth: e }) {
    return `<h${e}>${this.parser.parseInline(n)}</h${e}>
`;
  }
  hr(n) {
    return `<hr>
`;
  }
  list(n) {
    const e = n.ordered, t = n.start;
    let a = "";
    for (let o = 0; o < n.items.length; o++) {
      const i = n.items[o];
      a += this.listitem(i);
    }
    const s = e ? "ol" : "ul", r = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + s + r + `>
` + a + "</" + s + `>
`;
  }
  listitem(n) {
    let e = "";
    if (n.task) {
      const t = this.checkbox({ checked: !!n.checked });
      n.loose ? n.tokens.length > 0 && n.tokens[0].type === "paragraph" ? (n.tokens[0].text = t + " " + n.tokens[0].text, n.tokens[0].tokens && n.tokens[0].tokens.length > 0 && n.tokens[0].tokens[0].type === "text" && (n.tokens[0].tokens[0].text = t + " " + n.tokens[0].tokens[0].text)) : n.tokens.unshift({ type: "text", raw: t + " ", text: t + " " }) : e += t + " ";
    }
    return e += this.parser.parse(n.tokens, !!n.loose), `<li>${e}</li>
`;
  }
  checkbox({ checked: n }) {
    return "<input " + (n ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: n }) {
    return `<p>${this.parser.parseInline(n)}</p>
`;
  }
  table(n) {
    let e = "", t = "";
    for (let s = 0; s < n.header.length; s++) t += this.tablecell(n.header[s]);
    e += this.tablerow({ text: t });
    let a = "";
    for (let s = 0; s < n.rows.length; s++) {
      const r = n.rows[s];
      t = "";
      for (let o = 0; o < r.length; o++) t += this.tablecell(r[o]);
      a += this.tablerow({ text: t });
    }
    return a && (a = `<tbody>${a}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + a + `</table>
`;
  }
  tablerow({ text: n }) {
    return `<tr>
${n}</tr>
`;
  }
  tablecell(n) {
    const e = this.parser.parseInline(n.tokens), t = n.header ? "th" : "td";
    return (n.align ? `<${t} align="${n.align}">` : `<${t}>`) + e + `</${t}>
`;
  }
  strong({ tokens: n }) {
    return `<strong>${this.parser.parseInline(n)}</strong>`;
  }
  em({ tokens: n }) {
    return `<em>${this.parser.parseInline(n)}</em>`;
  }
  codespan({ text: n }) {
    return `<code>${n}</code>`;
  }
  br(n) {
    return "<br>";
  }
  del({ tokens: n }) {
    return `<del>${this.parser.parseInline(n)}</del>`;
  }
  link({ href: n, title: e, tokens: t }) {
    const a = this.parser.parseInline(t), s = cleanUrl(n);
    if (s === null) return a;
    n = s;
    let r = '<a href="' + n + '"';
    return e && (r += ' title="' + e + '"'), r += ">" + a + "</a>", r;
  }
  image({ href: n, title: e, text: t }) {
    const a = cleanUrl(n);
    if (a === null) return t;
    n = a;
    let s = `<img src="${n}" alt="${t}"`;
    return e && (s += ` title="${e}"`), s += ">", s;
  }
  text(n) {
    return "tokens" in n && n.tokens ? this.parser.parseInline(n.tokens) : n.text;
  }
}, _TextRenderer = class {
  strong({ text: n }) {
    return n;
  }
  em({ text: n }) {
    return n;
  }
  codespan({ text: n }) {
    return n;
  }
  del({ text: n }) {
    return n;
  }
  html({ text: n }) {
    return n;
  }
  text({ text: n }) {
    return n;
  }
  link({ text: n }) {
    return "" + n;
  }
  image({ text: n }) {
    return "" + n;
  }
  br() {
    return "";
  }
}, _Parser = class un {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || _defaults, this.options.renderer = this.options.renderer || new _Renderer(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _TextRenderer();
  }
  static parse(e, t) {
    return new un(t).parse(e);
  }
  static parseInline(e, t) {
    return new un(t).parseInline(e);
  }
  parse(e, t = true) {
    let a = "";
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        const i = r, l = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (l !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(i.type)) {
          a += l || "";
          continue;
        }
      }
      const o = r;
      switch (o.type) {
        case "space": {
          a += this.renderer.space(o);
          continue;
        }
        case "hr": {
          a += this.renderer.hr(o);
          continue;
        }
        case "heading": {
          a += this.renderer.heading(o);
          continue;
        }
        case "code": {
          a += this.renderer.code(o);
          continue;
        }
        case "table": {
          a += this.renderer.table(o);
          continue;
        }
        case "blockquote": {
          a += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          a += this.renderer.list(o);
          continue;
        }
        case "html": {
          a += this.renderer.html(o);
          continue;
        }
        case "paragraph": {
          a += this.renderer.paragraph(o);
          continue;
        }
        case "text": {
          let i = o, l = this.renderer.text(i);
          for (; s + 1 < e.length && e[s + 1].type === "text"; ) i = e[++s], l += `
` + this.renderer.text(i);
          t ? a += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l }] }) : a += l;
          continue;
        }
        default: {
          const i = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return a;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let a = "";
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        const i = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (i !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          a += i || "";
          continue;
        }
      }
      const o = r;
      switch (o.type) {
        case "escape": {
          a += t.text(o);
          break;
        }
        case "html": {
          a += t.html(o);
          break;
        }
        case "link": {
          a += t.link(o);
          break;
        }
        case "image": {
          a += t.image(o);
          break;
        }
        case "strong": {
          a += t.strong(o);
          break;
        }
        case "em": {
          a += t.em(o);
          break;
        }
        case "codespan": {
          a += t.codespan(o);
          break;
        }
        case "br": {
          a += t.br(o);
          break;
        }
        case "del": {
          a += t.del(o);
          break;
        }
        case "text": {
          a += t.text(o);
          break;
        }
        default: {
          const i = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return a;
  }
}, _Hooks = class {
  options;
  constructor(n) {
    this.options = n || _defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(n) {
    return n;
  }
  postprocess(n) {
    return n;
  }
  processAllTokens(n) {
    return n;
  }
}, Marked = class {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.parseMarkdown(_Lexer.lex, _Parser.parse);
  parseInline = this.parseMarkdown(_Lexer.lexInline, _Parser.parseInline);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...n) {
    this.use(...n);
  }
  walkTokens(n, e) {
    let t = [];
    for (const a of n) switch (t = t.concat(e.call(this, a)), a.type) {
      case "table": {
        const s = a;
        for (const r of s.header) t = t.concat(this.walkTokens(r.tokens, e));
        for (const r of s.rows) for (const o of r) t = t.concat(this.walkTokens(o.tokens, e));
        break;
      }
      case "list": {
        const s = a;
        t = t.concat(this.walkTokens(s.items, e));
        break;
      }
      default: {
        const s = a;
        this.defaults.extensions?.childTokens?.[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((r) => {
          const o = s[r].flat(1 / 0);
          t = t.concat(this.walkTokens(o, e));
        }) : s.tokens && (t = t.concat(this.walkTokens(s.tokens, e)));
      }
    }
    return t;
  }
  use(...n) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return n.forEach((t) => {
      const a = { ...t };
      if (a.async = this.defaults.async || a.async || false, t.extensions && (t.extensions.forEach((s) => {
        if (!s.name) throw new Error("extension name required");
        if ("renderer" in s) {
          const r = e.renderers[s.name];
          r ? e.renderers[s.name] = function(...o) {
            let i = s.renderer.apply(this, o);
            return i === false && (i = r.apply(this, o)), i;
          } : e.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          const r = e[s.level];
          r ? r.unshift(s.tokenizer) : e[s.level] = [s.tokenizer], s.start && (s.level === "block" ? e.startBlock ? e.startBlock.push(s.start) : e.startBlock = [s.start] : s.level === "inline" && (e.startInline ? e.startInline.push(s.start) : e.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (e.childTokens[s.name] = s.childTokens);
      }), a.extensions = e), t.renderer) {
        const s = this.defaults.renderer || new _Renderer(this.defaults);
        for (const r in t.renderer) {
          if (!(r in s)) throw new Error(`renderer '${r}' does not exist`);
          if (["options", "parser"].includes(r)) continue;
          const o = r, i = t.renderer[o], l = s[o];
          s[o] = (...c) => {
            let u = i.apply(s, c);
            return u === false && (u = l.apply(s, c)), u || "";
          };
        }
        a.renderer = s;
      }
      if (t.tokenizer) {
        const s = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const r in t.tokenizer) {
          if (!(r in s)) throw new Error(`tokenizer '${r}' does not exist`);
          if (["options", "rules", "lexer"].includes(r)) continue;
          const o = r, i = t.tokenizer[o], l = s[o];
          s[o] = (...c) => {
            let u = i.apply(s, c);
            return u === false && (u = l.apply(s, c)), u;
          };
        }
        a.tokenizer = s;
      }
      if (t.hooks) {
        const s = this.defaults.hooks || new _Hooks();
        for (const r in t.hooks) {
          if (!(r in s)) throw new Error(`hook '${r}' does not exist`);
          if (r === "options") continue;
          const o = r, i = t.hooks[o], l = s[o];
          _Hooks.passThroughHooks.has(r) ? s[o] = (c) => {
            if (this.defaults.async) return Promise.resolve(i.call(s, c)).then((m) => l.call(s, m));
            const u = i.call(s, c);
            return l.call(s, u);
          } : s[o] = (...c) => {
            let u = i.apply(s, c);
            return u === false && (u = l.apply(s, c)), u;
          };
        }
        a.hooks = s;
      }
      if (t.walkTokens) {
        const s = this.defaults.walkTokens, r = t.walkTokens;
        a.walkTokens = function(o) {
          let i = [];
          return i.push(r.call(this, o)), s && (i = i.concat(s.call(this, o))), i;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(n) {
    return this.defaults = { ...this.defaults, ...n }, this;
  }
  lexer(n, e) {
    return _Lexer.lex(n, e ?? this.defaults);
  }
  parser(n, e) {
    return _Parser.parse(n, e ?? this.defaults);
  }
  parseMarkdown(n, e) {
    return (a, s) => {
      const r = { ...s }, o = { ...this.defaults, ...r }, i = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === true && r.async === false) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof a > "u" || a === null) return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof a != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(a) + ", string expected"));
      if (o.hooks && (o.hooks.options = o), o.async) return Promise.resolve(o.hooks ? o.hooks.preprocess(a) : a).then((l) => n(l, o)).then((l) => o.hooks ? o.hooks.processAllTokens(l) : l).then((l) => o.walkTokens ? Promise.all(this.walkTokens(l, o.walkTokens)).then(() => l) : l).then((l) => e(l, o)).then((l) => o.hooks ? o.hooks.postprocess(l) : l).catch(i);
      try {
        o.hooks && (a = o.hooks.preprocess(a));
        let l = n(a, o);
        o.hooks && (l = o.hooks.processAllTokens(l)), o.walkTokens && this.walkTokens(l, o.walkTokens);
        let c = e(l, o);
        return o.hooks && (c = o.hooks.postprocess(c)), c;
      } catch (l) {
        return i(l);
      }
    };
  }
  onError(n, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, n) {
        const a = "<p>An error occurred:</p><pre>" + escape$1(t.message + "", true) + "</pre>";
        return e ? Promise.resolve(a) : a;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, markedInstance = new Marked();
function marked(n, e) {
  return markedInstance.parse(n, e);
}
marked.options = marked.setOptions = function(n) {
  return markedInstance.setOptions(n), marked.defaults = markedInstance.defaults, changeDefaults(marked.defaults), marked;
}, marked.getDefaults = _getDefaults, marked.defaults = _defaults, marked.use = function(...n) {
  return markedInstance.use(...n), marked.defaults = markedInstance.defaults, changeDefaults(marked.defaults), marked;
}, marked.walkTokens = function(n, e) {
  return markedInstance.walkTokens(n, e);
}, marked.parseInline = markedInstance.parseInline, marked.Parser = _Parser, marked.parser = _Parser.parse, marked.Renderer = _Renderer, marked.TextRenderer = _TextRenderer, marked.Lexer = _Lexer, marked.lexer = _Lexer.lex, marked.Tokenizer = _Tokenizer, marked.Hooks = _Hooks, marked.parse = marked;
var options = marked.options, setOptions = marked.setOptions, use = marked.use, walkTokens = marked.walkTokens, parseInline = marked.parseInline, parse2 = marked, parser = _Parser.parse, lexer = _Lexer.lex, unescapeInfo = /* @__PURE__ */ new Map([["&quot;", '"'], ["&nbsp;", " "], ["&amp;", "&"], ["&#39;", "'"], ["&lt;", "<"], ["&gt;", ">"]]);
function createPlainTextRenderer(n) {
  const e = new _Renderer();
  return e.code = ({ text: t }) => escape(t), e.blockquote = ({ text: t }) => t + `
`, e.html = n ? ({ text: t }) => t : (t) => "", e.heading = function({ tokens: t }) {
    return this.parser.parseInline(t) + `
`;
  }, e.hr = () => "", e.list = function({ items: t }) {
    return t.map((a) => this.listitem(a)).join(`
`) + `
`;
  }, e.listitem = ({ text: t }) => t + `
`, e.paragraph = function({ tokens: t }) {
    return this.parser.parseInline(t) + `
`;
  }, e.table = function({ header: t, rows: a }) {
    return t.map((s) => this.tablecell(s)).join(" ") + `
` + a.map((s) => s.map((r) => this.tablecell(r)).join(" ")).join(`
`) + `
`;
  }, e.tablerow = ({ text: t }) => t, e.tablecell = function({ tokens: t }) {
    return this.parser.parseInline(t);
  }, e.strong = ({ text: t }) => t, e.em = ({ text: t }) => t, e.codespan = ({ text: t }) => escape(t), e.br = (t) => `
`, e.del = ({ text: t }) => t, e.image = (t) => "", e.text = ({ text: t }) => t, e.link = ({ text: t }) => t, e;
}
function withCodeBlockFences(n) {
  return n.code = ({ text: e }) => `
\`\`\`
${escape(e)}
\`\`\`
`, n;
}
var plainTextRenderer = new Lazy(() => createPlainTextRenderer(false)), plainTextWithCodeBlocksRenderer = new Lazy(() => withCodeBlockFences(createPlainTextRenderer(false))), plainTextPreserveHtmlRenderer = new Lazy(() => createPlainTextRenderer(true)), plainTextPreserveHtmlWithCodeBlocksRenderer = new Lazy(() => withCodeBlockFences(createPlainTextRenderer(true)));
function selectRenderer(n, e) {
  return e ? n ? plainTextPreserveHtmlWithCodeBlocksRenderer.value : plainTextPreserveHtmlRenderer.value : n ? plainTextWithCodeBlocksRenderer.value : plainTextRenderer.value;
}
function render(n, e, t) {
  let a = n.value ?? "";
  return a.length > 1e5 && (a = `${a.substr(0, 1e5)}…`), parse2(a, { async: false, renderer: selectRenderer(e, t) }).toString().replace(/&(#\d+|[a-zA-Z]+);/g, (r) => unescapeInfo.get(r) ?? r).trim();
}
function renderMarkdownAsPlaintextPreservingHtml(n, e) {
  return render(n, e ?? false, true);
}
var CLOUD_TRANSCRIPT_SEARCHABLE_TEXT_VERSION = 4, MAX_VISIBLE_MESSAGES = 2e3, MAX_BLOB_READS = 1e4, MAX_CACHED_TRANSCRIPT_INPUT_BYTES = 16 * 1024 * 1024, encoder = new TextEncoder(), fatalDecoder = new TextDecoder("utf-8", { fatal: true });
function decodeBlob(n, e) {
  if (n !== void 0) try {
    return e(n);
  } catch {
    return;
  }
}
function finish(n, e) {
  return n.missingBlob ? { kind: "cache-revision-partial" } : { kind: e, body: n.chunks.join("") };
}
async function readBlob(n, e) {
  if (n.blobReads >= MAX_BLOB_READS || n.inputBytes >= MAX_CACHED_TRANSCRIPT_INPUT_BYTES) return null;
  const t = await n.readBlob(e);
  return n.blobReads++, n.inputBytes += t?.byteLength ?? 0, n.inputBytes > MAX_CACHED_TRANSCRIPT_INPUT_BYTES ? null : t;
}
function appendMessage(n, e, t) {
  const a = renderMarkdownAsPlaintextPreservingHtml({ value: t });
  if (a.length === 0) return false;
  if (n.messageCount >= MAX_VISIBLE_MESSAGES) return true;
  const s = n.chunks.length === 0 ? "" : `

`, r = `${e}:
`, o = `${r}${a}`, i = MAX_CONVERSATION_BODY_BYTES - n.outputBytes - s.length;
  if (i <= 0) return true;
  const l = encoder.encode(o);
  let c = o;
  if (l.byteLength > i) {
    let m = i;
    for (; m > 0; ) try {
      c = fatalDecoder.decode(l.subarray(0, m));
      break;
    } catch {
      m--;
    }
  }
  if (c.length <= r.length) return true;
  const u = `${s}${c}`;
  return n.chunks.push(u), n.outputBytes += encoder.encode(u).byteLength, n.messageCount++, c.length !== o.length;
}
function visibleAssistantText(n, e) {
  if (!e) return n.message.case === "assistantMessage" ? n.message.value.text : void 0;
  const t = n.message.case === "toolCall" ? n.message.value.tool : void 0;
  if (!(t?.case !== "sendMessageToolCall" || t.value.result?.result.case !== "success" || t.value.args?.message.case !== "text")) return t.value.args.message.value.content.trim();
}
async function drain(n, e) {
  if (n.inputBytes > MAX_CACHED_TRANSCRIPT_INPUT_BYTES) return finish(n, "limit-partial");
  let t = false;
  for (; ; ) {
    if (t && performance.now() >= e) return { kind: "paused", cursor: { resume: (o) => drain(n, o) } };
    const a = n.position;
    if (a.kind === "turn") {
      if (a.turnIndex < 0) return finish(n, "complete");
      const o = await readBlob(n, n.state.turns[a.turnIndex]);
      if (o === null) return finish(n, "limit-partial");
      t = true;
      const i = decodeBlob(o, (l) => ConversationTurnStructure.fromBinary(l));
      i?.turn.case === "agentConversationTurn" ? n.position = { kind: "content", turnIndex: a.turnIndex, turn: i.turn.value, stepIndex: i.turn.value.steps.length - 1 } : (i === void 0 && (n.missingBlob = true), n.position = { kind: "turn", turnIndex: a.turnIndex - 1 });
      continue;
    }
    if (a.stepIndex >= 0) {
      const o = await readBlob(n, a.turn.steps[a.stepIndex]);
      if (o === null) return finish(n, "limit-partial");
      t = true, n.position = { ...a, stepIndex: a.stepIndex - 1 };
      const i = decodeBlob(o, (l) => ConversationStep.fromBinary(l));
      if (i === void 0) n.missingBlob = true;
      else {
        const l = visibleAssistantText(i, n.state.isRootProjectConversation === true);
        if (l !== void 0 && appendMessage(n, "assistant", l)) return finish(n, "limit-partial");
      }
      continue;
    }
    if (n.position = { kind: "turn", turnIndex: a.turnIndex - 1 }, a.turn.userMessage.length === 0) continue;
    const s = await readBlob(n, a.turn.userMessage);
    if (s === null) return finish(n, "limit-partial");
    t = true;
    const r = decodeBlob(s, (o) => UserMessage.fromBinary(o));
    if (r === void 0) n.missingBlob = true;
    else if (appendMessage(n, "user", r.text)) return finish(n, "limit-partial");
  }
}
function hydrateCachedTranscriptBody({ state: n, stateRecordByteLength: e, deadlineAt: t, readBlob: a }) {
  return drain({ state: n, readBlob: a, position: { kind: "turn", turnIndex: n.turns.length - 1 }, chunks: [], messageCount: 0, outputBytes: 0, blobReads: 0, inputBytes: e, missingBlob: false }, t);
}
var CLOUD_TRANSCRIPT_INDEX_IDLE_DRAIN_BUDGET_MS = 100, CLOUD_AGENT_TRANSCRIPT_INDEX_WORKER_HOST_CHANNEL = "cloudAgentTranscriptIndexWorkerHost";
function wholeCodePointPrefixEnd(n, e) {
  if (e <= 0) return 0;
  if (e >= n.length) return n.length;
  const t = n.charCodeAt(e - 1), a = n.charCodeAt(e);
  return t >= 55296 && t <= 56319 && a >= 56320 && a <= 57343 ? e - 1 : e;
}
function truncateBodyToEnvelopeLimit(n, e) {
  if (cloudCacheBodyEnvelopeByteLength({ scope: n, conversations: [e] }) <= MAX_CLOUD_CACHE_BODY_PAYLOAD_BYTES) return e;
  let t = 0, a = e.body.length, s = 0;
  for (; t <= a; ) {
    const r = Math.floor((t + a) / 2), o = wholeCodePointPrefixEnd(e.body, r), i = { ...e, body: e.body.slice(0, o) };
    cloudCacheBodyEnvelopeByteLength({ scope: n, conversations: [i] }) <= MAX_CLOUD_CACHE_BODY_PAYLOAD_BYTES ? (s = Math.max(s, o), t = r + 1) : a = r - 1;
  }
  return { ...e, body: e.body.slice(0, s) };
}
function create(n) {
  return new CloudAgentTranscriptIndexWorker(n.getChannel(CLOUD_AGENT_TRANSCRIPT_INDEX_WORKER_HOST_CHANNEL));
}
var CloudAgentTranscriptIndexWorker = class extends Disposable {
  constructor(n, e = openCloudAgentCacheDatabase, t = () => performance.now()) {
    super(), this.host = n, this.openDatabase = e, this.now = t, this.utilityStore = this._register(new MutableDisposable()), this.queue = [], this.operations = new Sequencer(), this.incompleteFingerprints = /* @__PURE__ */ new Map();
  }
  async $attachUtilityPort(n) {
    if (this._store.isDisposed) {
      n.close();
      return;
    }
    this.disposeUtility(this.utility);
    const e = new DisposableStore(), a = e.add(new Client2(n, "cloud-transcript-index-worker")).getChannel(ConversationSearchProcessChannels.search), s = () => {
      this.utility === a && (this.disposeUtility(a), this.requestUtilityPort());
    };
    n.addEventListener("close", s), e.add(toDisposable(() => n.removeEventListener("close", s))), e.add(a.listen("indexReset")(() => {
      this.utility === a && (this.activeScope = void 0, this.queue = [], this.incompleteFingerprints.clear(), this.host.$requestReconcile().catch(() => {
      }));
    })), this.utilityStore.value = e, this.utility = a;
    try {
      if (await a.call("ping") !== "pong") throw new Error("Conversation search utility handshake failed");
    } catch (r) {
      throw this.disposeUtility(a), r;
    }
  }
  $reconcile(n) {
    return this.operations.queue(async () => (this.activeScope !== n.scope && this.incompleteFingerprints.clear(), this.activeScope = n.scope, this.queue = [], await this.callUtility("replaceCloudCacheMetadata", n), this.queue = await this.collectStaleTranscripts(n.scope, n.conversations.map((e) => e.conversationId)), { hasMore: this.queue.length > 0 }));
  }
  $refreshCandidateStatuses(n) {
    return this.operations.queue(async () => {
      if (this.activeScope !== n.scope) throw new Error("Cloud transcript candidate refresh scope is not active");
      const e = [...new Set(n.conversationIds)], t = new Set(e), a = await this.collectStaleTranscripts(n.scope, e);
      return this.queue = [...a, ...this.queue.filter((s) => !t.has(s.conversationId))], { hasMore: this.queue.length > 0 };
    });
  }
  $drainNextPayload() {
    return this.operations.queue(() => this.drainNextPayload());
  }
  async drainNextPayload() {
    const n = this.activeScope;
    if (n === void 0 || this.queue.length === 0) return { hasMore: false, committedBodyCount: 0 };
    const e = this.now() + CLOUD_TRANSCRIPT_INDEX_IDLE_DRAIN_BUDGET_MS, t = [];
    let a = 0, s = false;
    for (const r of this.queue.slice(0, MAX_CLOUD_CACHE_RECORDS_PER_COMMAND)) {
      if (s && this.now() >= e) break;
      s ||= r.hydration.kind !== "ready";
      const o = await this.hydrateQueuedTranscript(r, e);
      if (o.kind === "consumed") {
        a++;
        continue;
      }
      if (o.kind === "paused") break;
      let i = o.conversation;
      if (cloudCacheBodyEnvelopeByteLength({ scope: n, conversations: [...t, i] }) > MAX_CLOUD_CACHE_BODY_PAYLOAD_BYTES) {
        if (t.length > 0) break;
        i = truncateBodyToEnvelopeLimit(n, i), t.push(i), a++;
        break;
      }
      if (t.push(i), a++, this.now() >= e) break;
    }
    if (t.length === 0) return this.queue.splice(0, a), { hasMore: this.queue.length > 0, committedBodyCount: 0 };
    try {
      await this.callUtility("upsertCloudCacheBodies", { scope: n, conversations: t });
    } catch {
      return this.queue = this.queue.filter((r) => this.incompleteFingerprints.get(r.conversationId) !== r.fingerprint), { hasMore: this.queue.length > 0, committedBodyCount: 0 };
    }
    this.queue.splice(0, a);
    for (const r of t) this.incompleteFingerprints.delete(r.conversationId);
    return { hasMore: this.queue.length > 0, committedBodyCount: t.length };
  }
  async hydrateQueuedTranscript(n, e) {
    if (n.hydration.kind === "ready") return { kind: "ready", conversation: { conversationId: n.conversationId, fingerprint: n.fingerprint, body: n.hydration.body } };
    let t;
    if (n.hydration.kind === "paused") t = await n.hydration.cursor.resume(e);
    else {
      const a = await this.readStateForHydration(n);
      switch (a.kind) {
        case "changed":
          return this.host.$requestReconcile().catch(() => {
          }), { kind: "consumed" };
        case "unavailable":
          t = { kind: "cache-revision-partial" };
          break;
        case "oversized":
          t = { kind: "limit-partial", body: "" };
          break;
        case "decoded":
          t = await hydrateCachedTranscriptBody({ state: a.cached.state, stateRecordByteLength: n.stateRecordByteLength, deadlineAt: e, readBlob: (s) => this.readBlob(n.conversationId, s) });
          break;
      }
    }
    switch (t.kind) {
      case "complete":
      case "limit-partial":
        return n.hydration = { kind: "ready", body: t.body }, { kind: "ready", conversation: { conversationId: n.conversationId, fingerprint: n.fingerprint, body: t.body } };
      case "cache-revision-partial":
        return this.incompleteFingerprints.set(n.conversationId, n.fingerprint), { kind: "consumed" };
      case "paused":
        return n.hydration = { kind: "paused", cursor: t.cursor }, { kind: "paused" };
    }
  }
  async collectStaleTranscripts(n, e) {
    const t = [];
    for (let a = 0; a < e.length; a += MAX_CLOUD_CACHE_RECORDS_PER_COMMAND) {
      const s = e.slice(a, a + MAX_CLOUD_CACHE_RECORDS_PER_COMMAND), r = await this.readManifests(s), o = /* @__PURE__ */ new Map();
      for (const c of s) {
        const u = r.get(c);
        if (u === void 0) {
          this.incompleteFingerprints.delete(c);
          continue;
        }
        const m = await u.fingerprint;
        o.set(c, { conversationId: c, stateRecordByteLength: u.stateRecordByteLength, fingerprint: m, hydration: { kind: "pending" } });
      }
      const i = await this.callUtility("getCloudCacheBodyStatus", { scope: n, candidates: s.map((c) => {
        const u = o.get(c);
        return u === void 0 ? { kind: "unavailable", conversationId: c } : { kind: "available", conversationId: c, fingerprint: u.fingerprint };
      }) }), l = new Set(i.staleConversationIds);
      for (const c of o.values()) l.has(c.conversationId) && this.incompleteFingerprints.get(c.conversationId) !== c.fingerprint && t.push(c);
    }
    return t;
  }
  async readManifests(n) {
    const e = await this.getDatabase();
    return new Promise((t, a) => {
      const s = e.transaction([CLOUD_AGENT_CACHE_STORES.states, CLOUD_AGENT_CACHE_STORES.revisions], "readonly"), r = s.objectStore(CLOUD_AGENT_CACHE_STORES.states), o = s.objectStore(CLOUD_AGENT_CACHE_STORES.revisions), i = /* @__PURE__ */ new Map(), l = (c) => {
        const u = n[c];
        if (u === void 0) return;
        const m = r.get(u);
        m.onsuccess = () => {
          const d = measureCloudAgentCacheStateBytes(m.result), g = d === void 0 ? void 0 : inspectCloudAgentCacheState(m.result), k = o.get(u);
          k.onsuccess = () => {
            if (g !== void 0 && d !== void 0) {
              const y = k.result;
              i.set(u, { stateRecordByteLength: d, fingerprint: this.fingerprint(g, typeof y == "string" && y.length > 0 ? y : void 0) });
            }
            l(c + 1);
          };
        };
      };
      l(0), s.oncomplete = () => t(i), s.onerror = () => a(s.error), s.onabort = () => a(s.error);
    });
  }
  async readStateForHydration(n) {
    const t = (await this.getDatabase()).transaction([CLOUD_AGENT_CACHE_STORES.states, CLOUD_AGENT_CACHE_STORES.revisions], "readonly"), a = t.objectStore(CLOUD_AGENT_CACHE_STORES.states).get(n.conversationId), s = t.objectStore(CLOUD_AGENT_CACHE_STORES.revisions).get(n.conversationId), [r, o] = await Promise.all([this.requestResult(a), this.requestResult(s)]), i = measureCloudAgentCacheStateBytes(r);
    if (i === void 0) return { kind: "unavailable" };
    const l = inspectCloudAgentCacheState(r);
    if (l === void 0) return { kind: "unavailable" };
    const c = typeof o == "string" && o.length > 0 ? o : void 0, u = await this.fingerprint(l, c);
    if (i !== n.stateRecordByteLength || u !== n.fingerprint) return { kind: "changed" };
    if (i >= MAX_CACHED_TRANSCRIPT_INPUT_BYTES) return { kind: "oversized" };
    const m = decodeCloudAgentCacheState(r);
    return m === void 0 ? { kind: "unavailable" } : { kind: "decoded", cached: m };
  }
  async readBlob(n, e) {
    const s = (await this.getDatabase()).transaction(CLOUD_AGENT_CACHE_STORES.blobs, "readonly").objectStore(CLOUD_AGENT_CACHE_STORES.blobs).get(makeCloudAgentCacheBlobKey(n, e)), r = await this.requestResult(s);
    return r instanceof ArrayBuffer ? new Uint8Array(r) : r instanceof Uint8Array ? r : void 0;
  }
  requestResult(n) {
    return new Promise((e, t) => {
      n.onsuccess = () => e(n.result), n.onerror = () => t(n.error);
    });
  }
  fingerprint(n, e) {
    const t = `v${CLOUD_TRANSCRIPT_SEARCHABLE_TEXT_VERSION}\0${n.offsetKey}\0${n.savedAt?.toString() ?? "legacy"}`;
    return getSha256Hash(e === void 0 ? t : `${t}\0${e}`);
  }
  async callUtility(n, e) {
    this.utility === void 0 && await this.requestUtilityPort();
    const t = this.utility;
    if (t === void 0) throw new Error("Conversation search utility port is unavailable");
    try {
      return await t.call(n, [e]);
    } catch (a) {
      throw this.disposeUtility(t), await this.requestUtilityPort().catch(() => {
      }), a;
    }
  }
  requestUtilityPort() {
    return this.utilityPortRequest ??= this.host.$requestUtilityPort().finally(() => {
      this.utilityPortRequest = void 0;
    }), this.utilityPortRequest;
  }
  disposeUtility(n) {
    n === void 0 || this.utility !== n || (this.utility = void 0, this.utilityStore.clear());
  }
  getDatabase() {
    return this.databasePromise ??= this.openDatabase(), this.databasePromise;
  }
  dispose() {
    this.queue = [], this.activeScope = void 0, this.incompleteFingerprints.clear(), this.disposeUtility(this.utility), this.databasePromise?.then((n) => n.close()).catch(() => {
    }), this.databasePromise = void 0, super.dispose();
  }
};
bootstrapWebWorker(create);
