/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "38180276-d3da-5e8e-8b23-581c9c6c0c47");
  } catch (e2) {
  }
})();
var ErrorHandler = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(t) {
      setTimeout(() => {
        throw t.stack ? ErrorNoTelemetry.isErrorNoTelemetry(t) ? new ErrorNoTelemetry(t.message + `

` + t.stack) : new Error(t.message + `

` + t.stack) : t;
      }, 0);
    };
  }
  addListener(t) {
    return this.listeners.push(t), () => {
      this._removeListener(t);
    };
  }
  emit(t) {
    this.listeners.forEach((e) => {
      e(t);
    });
  }
  _removeListener(t) {
    this.listeners.splice(this.listeners.indexOf(t), 1);
  }
  setUnexpectedErrorHandler(t) {
    this.unexpectedErrorHandler = t;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(t) {
    this.unexpectedErrorHandler(t), this.emit(t);
  }
  onUnexpectedExternalError(t) {
    this.unexpectedErrorHandler(t);
  }
}, errorHandler = new ErrorHandler();
function onUnexpectedError(t) {
  isCancellationError(t) || errorHandler.onUnexpectedError(t);
}
function transformErrorForSerialization(t) {
  if (t instanceof Error) {
    const { name: e, message: n, cause: r } = t, i = t.stacktrace || t.stack;
    return { $isError: true, name: e, message: n, stack: i, noTelemetry: ErrorNoTelemetry.isErrorNoTelemetry(t), cause: r ? transformErrorForSerialization(r) : void 0, code: t.code };
  }
  return t;
}
var canceledName = "Canceled";
function isCancellationError(t) {
  return t instanceof CancellationError ? true : t instanceof Error && t.name === canceledName && t.message === canceledName;
}
var CancellationError = class extends Error {
  constructor() {
    if (super(canceledName), this.name = this.message, _cancellationErrorLoggingEnabled && typeof console < "u" && shouldLogCancellationDebugTrace()) {
      const t = new Error().stack ?? "";
      ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING.some((e) => t.includes(e)) && console.trace("[DebugCancellation] CancellationError created");
    }
  }
}, ErrorNoTelemetry = class wt extends Error {
  constructor(e) {
    super(e), this.name = "CodeExpectedError";
  }
  static fromError(e) {
    if (e instanceof wt) return e;
    const n = new wt();
    return n.message = e.message, n.stack = e.stack, n;
  }
  static isErrorNoTelemetry(e) {
    return e.name === "CodeExpectedError";
  }
}, BugIndicatingError = class kt extends Error {
  constructor(e) {
    super(e || "An unexpected bug occurred."), Object.setPrototypeOf(this, kt.prototype);
  }
}, ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], CANCELLATION_DEBUG_TRACE_THROTTLE_MS = 5e3, _nextCancellationDebugTraceTime = 0;
function shouldLogCancellationDebugTrace() {
  const t = Date.now();
  return t < _nextCancellationDebugTraceTime ? false : (_nextCancellationDebugTraceTime = t + CANCELLATION_DEBUG_TRACE_THROTTLE_MS, true);
}
var _cancellationErrorLoggingEnabled = false, _a, _b;
function groupBy(t, e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of t) {
    const i = e(r);
    let s = n[i];
    s || (s = n[i] = []), s.push(r);
  }
  return n;
}
var SetWithKey = class {
  constructor(t, e) {
    this.toKey = e, this._map = /* @__PURE__ */ new Map(), this[_a] = "SetWithKey";
    for (const n of t) this.add(n);
  }
  get size() {
    return this._map.size;
  }
  add(t) {
    const e = this.toKey(t);
    return this._map.set(e, t), this;
  }
  delete(t) {
    return this._map.delete(this.toKey(t));
  }
  has(t) {
    return this._map.has(this.toKey(t));
  }
  *entries() {
    for (const t of this._map.values()) yield [t, t];
  }
  keys() {
    return this.values();
  }
  *values() {
    for (const t of this._map.values()) yield t;
  }
  clear() {
    this._map.clear();
  }
  forEach(t, e) {
    this._map.forEach((n) => t.call(e, n, n, this));
  }
  [(_b = Symbol.iterator, _a = Symbol.toStringTag, _b)]() {
    return this.values();
  }
};
function createSingleCallFunction(t, e) {
  const n = this;
  let r = false, i;
  return function() {
    if (r) return i;
    if (r = true, e) try {
      i = t.apply(n, arguments);
    } finally {
      e();
    }
    else i = t.apply(n, arguments);
    return i;
  };
}
function findLastMonotonous(t, e) {
  const n = findLastIdxMonotonous(t, e);
  return n === -1 ? void 0 : t[n];
}
function findLastIdxMonotonous(t, e, n = 0, r = t.length) {
  let i = n, s = r;
  for (; i < s; ) {
    const o = Math.floor((i + s) / 2);
    e(t[o]) ? i = o + 1 : s = o;
  }
  return i - 1;
}
function findFirstMonotonous(t, e) {
  const n = findFirstIdxMonotonousOrArrLen(t, e);
  return n === t.length ? void 0 : t[n];
}
function findFirstIdxMonotonousOrArrLen(t, e, n = 0, r = t.length) {
  let i = n, s = r;
  for (; i < s; ) {
    const o = Math.floor((i + s) / 2);
    e(t[o]) ? s = o : i = o + 1;
  }
  return i;
}
var _MonotonousArray = class Ot {
  constructor(e) {
    this._array = e, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(e) {
    if (Ot.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const r of this._array) if (this._prevFindLastPredicate(r) && !e(r)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = e;
    }
    const n = findLastIdxMonotonous(this._array, e, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
  }
};
_MonotonousArray.assertInvariants = false;
var MonotonousArray = _MonotonousArray;
function equals(t, e, n = (r, i) => r === i) {
  if (t === e) return true;
  if (!t || !e || t.length !== e.length) return false;
  for (let r = 0, i = t.length; r < i; r++) if (!n(t[r], e[r])) return false;
  return true;
}
function* groupAdjacentBy(t, e) {
  let n, r;
  for (const i of t) r !== void 0 && e(r, i) ? n.push(i) : (n && (yield n), n = [i]), r = i;
  n && (yield n);
}
function forEachAdjacent(t, e) {
  for (let n = 0; n <= t.length; n++) e(n === 0 ? void 0 : t[n - 1], n === t.length ? void 0 : t[n]);
}
function forEachWithNeighbors(t, e) {
  for (let n = 0; n < t.length; n++) e(n === 0 ? void 0 : t[n - 1], t[n], n + 1 === t.length ? void 0 : t[n + 1]);
}
function pushMany(t, e) {
  for (const n of e) t.push(n);
}
var CompareResult;
((t) => {
  function e(s) {
    return s < 0;
  }
  t.isLessThan = e;
  function n(s) {
    return s <= 0;
  }
  t.isLessThanOrEqual = n;
  function r(s) {
    return s > 0;
  }
  t.isGreaterThan = r;
  function i(s) {
    return s === 0;
  }
  t.isNeitherLessOrGreaterThan = i, t.greaterThan = 1, t.lessThan = -1, t.neitherLessOrGreaterThan = 0;
})(CompareResult || (CompareResult = {}));
function compareBy(t, e) {
  return (n, r) => e(t(n), t(r));
}
var numberComparator = (t, e) => t - e;
function reverseOrder(t) {
  return (e, n) => -t(e, n);
}
var _CallbackIterable = class vt {
  constructor(e) {
    this.iterate = e;
  }
  forEach(e) {
    this.iterate((n) => (e(n), true));
  }
  toArray() {
    const e = [];
    return this.iterate((n) => (e.push(n), true)), e;
  }
  filter(e) {
    return new vt((n) => this.iterate((r) => e(r) ? n(r) : true));
  }
  map(e) {
    return new vt((n) => this.iterate((r) => n(e(r))));
  }
  some(e) {
    let n = false;
    return this.iterate((r) => (n = e(r), !n)), n;
  }
  findFirst(e) {
    let n;
    return this.iterate((r) => e(r) ? (n = r, false) : true), n;
  }
  findLast(e) {
    let n;
    return this.iterate((r) => (e(r) && (n = r), true)), n;
  }
  findLastMaxBy(e) {
    let n, r = true;
    return this.iterate((i) => ((r || CompareResult.isGreaterThan(e(i, n))) && (r = false, n = i), true)), n;
  }
};
_CallbackIterable.empty = new _CallbackIterable((t) => {
});
var _a2, _b2, _c, ResourceMapEntry = class {
  constructor(t, e) {
    this.uri = t, this.value = e;
  }
};
function isEntries(t) {
  return Array.isArray(t);
}
var _ResourceMap = class ne {
  constructor(e, n) {
    if (this[_a2] = "ResourceMap", e instanceof ne) this.map = new Map(e.map), this.toKey = n ?? ne.defaultToKey;
    else if (isEntries(e)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? ne.defaultToKey;
      for (const [r, i] of e) this.set(r, i);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = e ?? ne.defaultToKey;
  }
  set(e, n) {
    return this.map.set(this.toKey(e), new ResourceMapEntry(e, n)), this;
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
  forEach(e, n) {
    typeof n < "u" && (e = e.bind(n));
    for (const [r, i] of this.map) e(i.value, i.uri, this);
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
_ResourceMap.defaultToKey = (t) => t.toString();
var ResourceMap = _ResourceMap, ResourceSet = class {
  constructor(t, e) {
    this[_b2] = "ResourceSet", !t || typeof t == "function" ? this._map = new ResourceMap(t) : (this._map = new ResourceMap(e), t.forEach(this.add, this));
  }
  get size() {
    return this._map.size;
  }
  add(t) {
    return this._map.set(t, t), this;
  }
  clear() {
    this._map.clear();
  }
  delete(t) {
    return this._map.delete(t);
  }
  forEach(t, e) {
    this._map.forEach((n, r) => t.call(e, r, r, this));
  }
  has(t) {
    return this._map.has(t);
  }
  *entries() {
    for (const t of this._map.entries()) yield t;
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
  has(t) {
    return this._map.has(t);
  }
  get(t, e = 0) {
    const n = this._map.get(t);
    if (n) return e !== 0 && this.touch(n, e), n.value;
  }
  set(t, e, n = 0) {
    let r = this._map.get(t);
    if (r) r.value = e, n !== 0 && this.touch(r, n);
    else {
      switch (r = { key: t, value: e, next: void 0, previous: void 0 }, n) {
        case 0:
          this.addItemLast(r);
          break;
        case 1:
          this.addItemFirst(r);
          break;
        case 2:
          this.addItemLast(r);
          break;
        default:
          this.addItemLast(r);
          break;
      }
      this._map.set(t, r), this._size++;
    }
    return this;
  }
  delete(t) {
    return !!this.remove(t);
  }
  remove(t) {
    const e = this._map.get(t);
    if (e) return this._map.delete(t), this.removeItem(e), this._size--, e.value;
  }
  shift() {
    if (!this._head && !this._tail) return;
    if (!this._head || !this._tail) throw new Error("Invalid list");
    const t = this._head;
    return this._map.delete(t.key), this.removeItem(t), this._size--, t.value;
  }
  forEach(t, e) {
    const n = this._state;
    let r = this._head;
    for (; r; ) {
      if (e ? t.bind(e)(r.value, r.key, this) : t(r.value, r.key, this), this._state !== n) throw new Error("LinkedMap got modified during iteration.");
      r = r.next;
    }
  }
  keys() {
    return this.iterateLinked(this._state, this._head, (t) => t.key);
  }
  values() {
    return this.iterateLinked(this._state, this._head, (t) => t.value);
  }
  entries() {
    return this.iterateLinked(this._state, this._head, (t) => [t.key, t.value]);
  }
  *iterateLinked(t, e, n) {
    for (; ; ) {
      if (this._state !== t) throw new Error("LinkedMap got modified during iteration.");
      if (!e) return;
      const r = n(e);
      e = e.next, yield r;
    }
  }
  [(_c = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(t) {
    if (t >= this.size) return;
    if (t === 0) {
      this.clear();
      return;
    }
    let e = this._head, n = this.size;
    for (; e && n > t; ) this._map.delete(e.key), e = e.next, n--;
    this._head = e, this._size = n, e && (e.previous = void 0), this._state++;
  }
  trimNew(t) {
    if (t >= this.size) return;
    if (t === 0) {
      this.clear();
      return;
    }
    let e = this._tail, n = this.size;
    for (; e && n > t; ) this._map.delete(e.key), e = e.previous, n--;
    this._tail = e, this._size = n, e && (e.next = void 0), this._state++;
  }
  addItemFirst(t) {
    if (!this._head && !this._tail) this._tail = t;
    else if (this._head) t.next = this._head, this._head.previous = t;
    else throw new Error("Invalid list");
    this._head = t, this._state++;
  }
  addItemLast(t) {
    if (!this._head && !this._tail) this._head = t;
    else if (this._tail) t.previous = this._tail, this._tail.next = t;
    else throw new Error("Invalid list");
    this._tail = t, this._state++;
  }
  removeItem(t) {
    if (t === this._head && t === this._tail) this._head = void 0, this._tail = void 0;
    else if (t === this._head) {
      if (!t.next) throw new Error("Invalid list");
      t.next.previous = void 0, this._head = t.next;
    } else if (t === this._tail) {
      if (!t.previous) throw new Error("Invalid list");
      t.previous.next = void 0, this._tail = t.previous;
    } else {
      const e = t.next, n = t.previous;
      if (!e || !n) throw new Error("Invalid list");
      e.previous = n, n.next = e;
    }
    t.next = void 0, t.previous = void 0, this._state++;
  }
  touch(t, e) {
    if (!this._head || !this._tail) throw new Error("Invalid list");
    if (!(e !== 1 && e !== 2)) {
      if (e === 1) {
        if (t === this._head) return;
        const n = t.next, r = t.previous;
        t === this._tail ? (r.next = void 0, this._tail = r) : (n.previous = r, r.next = n), t.previous = void 0, t.next = this._head, this._head.previous = t, this._head = t, this._state++;
      } else if (e === 2) {
        if (t === this._tail) return;
        const n = t.next, r = t.previous;
        t === this._head ? (n.previous = void 0, this._head = n) : (n.previous = r, r.next = n), t.next = void 0, t.previous = this._tail, this._tail.next = t, this._tail = t, this._state++;
      }
    }
  }
  toJSON() {
    const t = [];
    return this.forEach((e, n) => {
      t.push([n, e]);
    }), t;
  }
  fromJSON(t) {
    this.clear();
    for (const [e, n] of t) this.set(e, n);
  }
}, Cache = class extends LinkedMap {
  constructor(t, e = 1) {
    super(), this._limit = t, this._ratio = Math.min(Math.max(0, e), 1);
  }
  get limit() {
    return this._limit;
  }
  set limit(t) {
    this._limit = t, this.checkTrim();
  }
  get ratio() {
    return this._ratio;
  }
  set ratio(t) {
    this._ratio = Math.min(Math.max(0, t), 1), this.checkTrim();
  }
  get(t, e = 2) {
    return super.get(t, e);
  }
  peek(t) {
    return super.get(t, 0);
  }
  set(t, e) {
    return super.set(t, e, 2), this;
  }
  checkTrim() {
    this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
  }
}, LRUCache = class extends Cache {
  constructor(t, e = 1) {
    super(t, e);
  }
  trim(t) {
    this.trimOld(t);
  }
  set(t, e) {
    return super.set(t, e), this.checkTrim(), this;
  }
}, SetMap = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(t, e) {
    let n = this.map.get(t);
    n || (n = /* @__PURE__ */ new Set(), this.map.set(t, n)), n.add(e);
  }
  delete(t, e) {
    const n = this.map.get(t);
    n && (n.delete(e), n.size === 0 && this.map.delete(t));
  }
  forEach(t, e) {
    const n = this.map.get(t);
    n && n.forEach(e);
  }
  get(t) {
    const e = this.map.get(t);
    return e || /* @__PURE__ */ new Set();
  }
};
function assertNever(t, e = "Unreachable") {
  throw new Error(e);
}
function assert(t, e = "unexpected state") {
  if (!t) throw typeof e == "string" ? new BugIndicatingError(`Assertion Failed: ${e}`) : e;
}
function assertFn(t) {
  if (!t()) {
    debugger;
    t(), onUnexpectedError(new BugIndicatingError("Assertion Failed"));
  }
}
function checkAdjacentItems(t, e) {
  let n = 0;
  for (; n < t.length - 1; ) {
    const r = t[n], i = t[n + 1];
    if (!e(r, i)) return false;
    n++;
  }
  return true;
}
function isIterable(t) {
  return !!t && typeof t[Symbol.iterator] == "function";
}
var Iterable;
((t) => {
  function e(_) {
    return _ && typeof _ == "object" && typeof _[Symbol.iterator] == "function";
  }
  t.is = e;
  const n = Object.freeze([]);
  function r() {
    return n;
  }
  t.empty = r;
  function* i(_) {
    yield _;
  }
  t.single = i;
  function s(_) {
    return e(_) ? _ : i(_);
  }
  t.wrap = s;
  function o(_) {
    return _ || n;
  }
  t.from = o;
  function* a(_) {
    for (let v = _.length - 1; v >= 0; v--) yield _[v];
  }
  t.reverse = a;
  function u(_) {
    return !_ || _[Symbol.iterator]().next().done === true;
  }
  t.isEmpty = u;
  function l(_) {
    return _[Symbol.iterator]().next().value;
  }
  t.first = l;
  function f(_, v) {
    let S = 0;
    for (const L of _) if (v(L, S++)) return true;
    return false;
  }
  t.some = f;
  function c(_, v) {
    for (const S of _) if (v(S)) return S;
  }
  t.find = c;
  function* m(_, v) {
    for (const S of _) v(S) && (yield S);
  }
  t.filter = m;
  function* h(_, v) {
    let S = 0;
    for (const L of _) yield v(L, S++);
  }
  t.map = h;
  function* g(_, v) {
    let S = 0;
    for (const L of _) yield* v(L, S++);
  }
  t.flatMap = g;
  function* p(..._) {
    for (const v of _) isIterable(v) ? yield* v : yield v;
  }
  t.concat = p;
  function E(_, v, S) {
    let L = S;
    for (const y of _) L = v(L, y);
    return L;
  }
  t.reduce = E;
  function d(_) {
    let v = 0;
    for (const S of _) v++;
    return v;
  }
  t.length = d;
  function* w(_, v, S = _.length) {
    for (v < -_.length && (v = 0), v < 0 && (v += _.length), S < 0 ? S += _.length : S > _.length && (S = _.length); v < S; v++) yield _[v];
  }
  t.slice = w;
  function b(_, v = Number.POSITIVE_INFINITY) {
    const S = [];
    if (v === 0) return [S, _];
    const L = _[Symbol.iterator]();
    for (let y = 0; y < v; y++) {
      const D = L.next();
      if (D.done) return [S, t.empty()];
      S.push(D.value);
    }
    return [S, { [Symbol.iterator]() {
      return L;
    } }];
  }
  t.consume = b;
  async function N(_) {
    const v = [];
    for await (const S of _) v.push(S);
    return Promise.resolve(v);
  }
  t.asyncToArray = N;
})(Iterable || (Iterable = {}));
var shouldReportLeaks = void 0, reportedLifecycleMisuses = /* @__PURE__ */ new Set(), MAX_REPORTED_LIFECYCLE_MISUSES = 50;
function reportLifecycleMisuse(t, e) {
  if (disposableTracker?.onLifecycleMisuse?.(t, e), !shouldReportLeaks) return;
  const n = `${e}\0${t.stack ?? ""}`;
  reportedLifecycleMisuses.has(n) || reportedLifecycleMisuses.size >= MAX_REPORTED_LIFECYCLE_MISUSES || (reportedLifecycleMisuses.add(n), shouldReportLeaks(t, e));
}
function reportPostDisposeWrite(t) {
  reportLifecycleMisuse(t, "disposable_post_dispose_set");
}
var TRACK_DISPOSABLES = false, disposableTracker = null, _DisposableTracker = class xt {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(e) {
    let n = this.livingDisposables.get(e);
    return n || (n = { parent: null, source: null, isSingleton: false, value: e, idx: xt.idx++ }, this.livingDisposables.set(e, n)), n;
  }
  trackDisposable(e) {
    const n = this.getDisposableData(e);
    n.source || (n.source = new Error().stack);
  }
  setParent(e, n) {
    const r = this.getDisposableData(e);
    r.parent = n;
  }
  markAsDisposed(e) {
    this.livingDisposables.delete(e);
  }
  markAsSingleton(e) {
    this.getDisposableData(e).isSingleton = true;
  }
  getRootParent(e, n) {
    const r = n.get(e);
    if (r) return r;
    const i = e.parent ? this.getRootParent(this.getDisposableData(e.parent), n) : e;
    return n.set(e, i), i;
  }
  getTrackedDisposables() {
    const e = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, r]) => r.source !== null && !this.getRootParent(r, e).isSingleton).flatMap(([r]) => r);
  }
  computeLeakingDisposables(e = 10, n) {
    let r;
    if (n) r = n;
    else {
      const u = /* @__PURE__ */ new Map(), l = [...this.livingDisposables.values()].filter((c) => c.source !== null && !this.getRootParent(c, u).isSingleton);
      if (l.length === 0) return;
      const f = new Set(l.map((c) => c.value));
      if (r = l.filter((c) => !(c.parent && f.has(c.parent))), r.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!r) return;
    function i(u) {
      function l(c, m) {
        for (; c.length > 0 && m.some((h) => typeof h == "string" ? h === c[0] : c[0].match(h)); ) c.shift();
      }
      const f = u.source.split(`
`).map((c) => c.trim().replace("at ", "")).filter((c) => c !== "");
      return l(f, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), f.reverse();
    }
    const s = new SetMap();
    for (const u of r) {
      const l = i(u);
      for (let f = 0; f <= l.length; f++) s.add(l.slice(0, f).join(`
`), u);
    }
    r.sort(compareBy((u) => u.idx, numberComparator));
    let o = "", a = 0;
    for (const u of r.slice(0, e)) {
      a++;
      const l = i(u), f = [];
      for (let c = 0; c < l.length; c++) {
        let m = l[c];
        m = `(shared with ${s.get(l.slice(0, c + 1).join(`
`)).size}/${r.length} leaks) at ${m}`;
        const g = s.get(l.slice(0, c).join(`
`)), p = groupBy([...g].map((E) => i(E)[c]), (E) => E);
        delete p[l[c]];
        for (const [E, d] of Object.entries(p)) f.unshift(`    - stacktraces of ${d.length} other leaks continue with ${E}`);
        f.unshift(m);
      }
      o += `


==================== Leaking disposable ${a}/${r.length}: ${u.value.constructor.name} ====================
${f.join(`
`)}
============================================================

`;
    }
    return r.length > e && (o += `


... and ${r.length - e} more leaking disposables

`), { leaks: r, details: o };
  }
};
_DisposableTracker.idx = 0;
function setDisposableTracker(t) {
  disposableTracker = t;
}
if (TRACK_DISPOSABLES) {
  const t = "__is_disposable_tracked__";
  setDisposableTracker(new class {
    trackDisposable(e) {
      const n = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        e[t] || console.log(n);
      }, 3e3);
    }
    setParent(e, n) {
      if (e && e !== Disposable.None) try {
        e[t] = true;
      } catch {
      }
    }
    markAsDisposed(e) {
      if (e && e !== Disposable.None) try {
        e[t] = true;
      } catch {
      }
    }
    markAsSingleton(e) {
    }
  }());
}
function trackDisposable(t) {
  return disposableTracker?.trackDisposable(t), t;
}
function markAsDisposed(t) {
  disposableTracker?.markAsDisposed(t);
}
function setParentOfDisposable(t, e) {
  disposableTracker?.setParent(t, e);
}
function setParentOfDisposables(t, e) {
  if (disposableTracker) for (const n of t) disposableTracker.setParent(n, e);
}
function dispose(t) {
  if (Iterable.is(t)) {
    let e;
    for (const n of t) if (n) try {
      n.dispose();
    } catch (r) {
      (e ??= []).push(r);
    }
    if (e !== void 0) throw e.length === 1 ? e[0] : new AggregateError(e, "Encountered errors while disposing of store");
    return Array.isArray(t) ? [] : t;
  } else if (t) return t.dispose(), t;
}
function combinedDisposable(...t) {
  const e = toDisposable(() => dispose(t));
  return setParentOfDisposables(t, e), e;
}
function toDisposable(t) {
  const e = trackDisposable({ dispose: createSingleCallFunction(() => {
    markAsDisposed(e), t();
  }) });
  return e;
}
var _DisposableStore = class Nt {
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
      const n = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      Nt.DISABLE_DISPOSED_WARNING || console.warn(n.stack), reportPostDisposeWrite(n);
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
      const n = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      Nt.DISABLE_DISPOSED_WARNING || console.warn(n.stack), reportLifecycleMisuse(n, "disposable_use_after_dispose");
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
  _register(t) {
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(t);
  }
};
Disposable.None = Object.freeze({ dispose() {
} });
var _Node = class Lt {
  constructor(e) {
    this.element = e, this.next = Lt.Undefined, this.prev = Lt.Undefined;
  }
};
_Node.Undefined = new _Node(void 0);
var Node = _Node, LinkedList = class {
  constructor() {
    this._first = Node.Undefined, this._last = Node.Undefined, this._size = 0;
  }
  get size() {
    return this._size;
  }
  get first() {
    return this._first;
  }
  isEmpty() {
    return this._first === Node.Undefined;
  }
  clear() {
    let t = this._first;
    for (; t !== Node.Undefined; ) {
      const e = t.next;
      t.prev = Node.Undefined, t.next = Node.Undefined, t = e;
    }
    this._first = Node.Undefined, this._last = Node.Undefined, this._size = 0;
  }
  unshift(t) {
    return this._insert(t, false);
  }
  push(t) {
    return this._insert(t, true);
  }
  _insert(t, e) {
    const n = new Node(t);
    if (this._first === Node.Undefined) this._first = n, this._last = n;
    else if (e) {
      const i = this._last;
      this._last = n, n.prev = i, i.next = n;
    } else {
      const i = this._first;
      this._first = n, n.next = i, i.prev = n;
    }
    this._size += 1;
    let r = false;
    return () => {
      r || (r = true, this._remove(n));
    };
  }
  shift() {
    if (this._first !== Node.Undefined) {
      const t = this._first.element;
      return this._remove(this._first), t;
    }
  }
  pop() {
    if (this._last !== Node.Undefined) {
      const t = this._last.element;
      return this._remove(this._last), t;
    }
  }
  remove(t) {
    this._remove(t);
  }
  _remove(t) {
    if (t.prev !== Node.Undefined && t.next !== Node.Undefined) {
      const e = t.prev;
      e.next = t.next, t.next.prev = e;
    } else t.prev === Node.Undefined && t.next === Node.Undefined ? (this._first = Node.Undefined, this._last = Node.Undefined) : t.next === Node.Undefined ? (this._last = this._last.prev, this._last.next = Node.Undefined) : t.prev === Node.Undefined && (this._first = this._first.next, this._first.prev = Node.Undefined);
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let t = this._first;
    for (; t !== Node.Undefined; ) yield t.element, t = t.next;
  }
}, hasPerformanceNow = globalThis.performance && typeof globalThis.performance.now == "function", StopWatch = class Dt {
  static create(e) {
    return new Dt(e);
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
((t) => {
  t.None = () => Disposable.None;
  function e(A) {
    if (_enableSnapshotPotentialLeakWarning) {
      const { onDidAddListener: T } = A, I = Stacktrace.create();
      let R = 0;
      A.onDidAddListener = () => {
        ++R === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), I.print()), T?.();
      };
    }
  }
  function n(A, T) {
    return h(A, () => {
    }, 0, void 0, true, void 0, T);
  }
  t.defer = n;
  function r(A) {
    return (T, I = null, R) => {
      let O = false, U;
      return U = A((P) => {
        if (!O) return U ? U.dispose() : O = true, T.call(I, P);
      }, null, R), O && U.dispose(), U;
    };
  }
  t.once = r;
  function i(A, T) {
    return t.once(t.filter(A, T));
  }
  t.onceIf = i;
  function s(A, T, I) {
    return c((R, O = null, U) => A((P) => R.call(O, T(P)), null, U), I);
  }
  t.map = s;
  function o(A, T, I) {
    return c((R, O = null, U) => A((P) => {
      T(P), R.call(O, P);
    }, null, U), I);
  }
  t.forEach = o;
  function a(A, T, I) {
    return c((R, O = null, U) => A((P) => T(P) && R.call(O, P), null, U), I);
  }
  t.filter = a;
  function u(A) {
    return A;
  }
  t.signal = u;
  function l(...A) {
    return (T, I = null, R) => {
      const O = combinedDisposable(...A.map((U) => U((P) => T.call(I, P))));
      return m(O, R);
    };
  }
  t.any = l;
  function f(A, T, I, R) {
    let O = I;
    return s(A, (U) => (O = T(O, U), O), R);
  }
  t.reduce = f;
  function c(A, T) {
    let I;
    const R = { onWillAddFirstListener() {
      I = A(O.fire, O);
    }, onDidRemoveLastListener() {
      I?.dispose();
    } };
    T || e(R);
    const O = new Emitter(R);
    return T?.add(O), O.event;
  }
  function m(A, T) {
    return T instanceof Array ? T.push(A) : T && T.add(A), A;
  }
  function h(A, T, I = 100, R = false, O = false, U, P) {
    let F, q, j, dt = 0, te;
    const At = { leakWarningThreshold: U, onWillAddFirstListener() {
      F = A(($t) => {
        dt++, q = T(q, $t), R && !j && (_t.fire(q), q = void 0), te ??= () => {
          const Ct = q;
          q = void 0, j = void 0, (!R || dt > 1) && _t.fire(Ct), dt = 0;
        }, typeof I == "number" ? (clearTimeout(j), j = setTimeout(te, I)) : j === void 0 && (j = 0, queueMicrotask(te));
      });
    }, onWillRemoveListener() {
      O && dt > 0 && te?.();
    }, onDidRemoveLastListener() {
      te = void 0, F.dispose();
    } };
    P || e(At);
    const _t = new Emitter(At);
    return P?.add(_t), _t.event;
  }
  t.debounce = h;
  function g(A, T = 0, I) {
    return t.debounce(A, (R, O) => R ? (R.push(O), R) : [O], T, void 0, true, void 0, I);
  }
  t.accumulate = g;
  function p(A, T = (R, O) => R === O, I) {
    let R = true, O;
    return a(A, (U) => {
      const P = R || !T(U, O);
      return R = false, O = U, P;
    }, I);
  }
  t.latch = p;
  function E(A, T, I) {
    return [t.filter(A, T, I), t.filter(A, (R) => !T(R), I)];
  }
  t.split = E;
  function d(A, T = false, I = [], R) {
    let O = I.slice(), U = A((q) => {
      O ? O.push(q) : F.fire(q);
    });
    R && R.add(U);
    const P = () => {
      O?.forEach((q) => F.fire(q)), O = null;
    }, F = new Emitter({ onWillAddFirstListener() {
      U || (U = A((q) => F.fire(q)), R && R.add(U));
    }, onDidAddFirstListener() {
      O && (T ? setTimeout(P) : P());
    }, onDidRemoveLastListener() {
      U && U.dispose(), U = null;
    } });
    return R && R.add(F), F.event;
  }
  t.buffer = d;
  function w(A, T) {
    return (R, O, U) => {
      const P = T(new N());
      return A(function(F) {
        const q = P.evaluate(F);
        q !== b && R.call(O, q);
      }, void 0, U);
    };
  }
  t.chain = w;
  const b = /* @__PURE__ */ Symbol("HaltChainable");
  class N {
    constructor() {
      this.steps = [];
    }
    map(T) {
      return this.steps.push(T), this;
    }
    forEach(T) {
      return this.steps.push((I) => (T(I), I)), this;
    }
    filter(T) {
      return this.steps.push((I) => T(I) ? I : b), this;
    }
    reduce(T, I) {
      let R = I;
      return this.steps.push((O) => (R = T(R, O), R)), this;
    }
    latch(T = (I, R) => I === R) {
      let I = true, R;
      return this.steps.push((O) => {
        const U = I || !T(O, R);
        return I = false, R = O, U ? O : b;
      }), this;
    }
    evaluate(T) {
      for (const I of this.steps) if (T = I(T), T === b) break;
      return T;
    }
  }
  function _(A, T, I = (R) => R) {
    const R = (...F) => P.fire(I(...F)), O = () => A.on(T, R), U = () => A.removeListener(T, R), P = new Emitter({ onWillAddFirstListener: O, onDidRemoveLastListener: U });
    return P.event;
  }
  t.fromNodeEventEmitter = _;
  function v(A) {
    let T;
    const I = () => {
      T = A.subscribe((U) => O.fire(U));
    }, R = () => {
      T?.unsubscribe(), T = void 0;
    }, O = new Emitter({ onWillAddFirstListener: I, onDidRemoveLastListener: R });
    return O.event;
  }
  t.fromRxJS = v;
  function S(A, T, I = (R) => R) {
    const R = (...F) => P.fire(I(...F)), O = () => A.addEventListener(T, R), U = () => A.removeEventListener(T, R), P = new Emitter({ onWillAddFirstListener: O, onDidRemoveLastListener: U });
    return P.event;
  }
  t.fromDOMEventEmitter = S;
  function L(A, T) {
    return new Promise((I) => r(A)(I, null, T));
  }
  t.toPromise = L;
  function y(A) {
    const T = new Emitter();
    return A.then((I) => {
      T.fire(I);
    }, () => {
      T.fire(void 0);
    }).finally(() => {
      T.dispose();
    }), T.event;
  }
  t.fromPromise = y;
  function D(A, T) {
    return A((I) => T.fire(I));
  }
  t.forward = D;
  function x(A, T, I) {
    return T(I), A((R) => T(R));
  }
  t.runAndSubscribe = x;
  class k {
    constructor(T, I) {
      this._observable = T, this._counter = 0, this._hasChanged = false;
      const R = { onWillAddFirstListener: () => {
        T.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        T.removeObserver(this);
      } };
      I || e(R), this.emitter = new Emitter(R), I && I.add(this.emitter);
    }
    beginUpdate(T) {
      this._counter++;
    }
    handlePossibleChange(T) {
    }
    handleChange(T, I) {
      this._hasChanged = true;
    }
    endUpdate(T) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function G(A, T) {
    return new k(A, T).emitter.event;
  }
  t.fromObservable = G;
  function Vt(A) {
    return (T, I, R) => {
      let O = 0, U = false;
      const P = { beginUpdate() {
        O++;
      }, endUpdate() {
        O--, O === 0 && (A.reportChanges(), U && (U = false, T.call(I)));
      }, handlePossibleChange() {
      }, handleChange() {
        U = true;
      } };
      A.addObserver(P), A.reportChanges();
      const F = { dispose() {
        A.removeObserver(P);
      } };
      return R instanceof DisposableStore ? R.add(F) : Array.isArray(R) && R.push(F), F;
    };
  }
  t.fromObservableLight = Vt;
})(Event || (Event = {}));
var _EventProfiling = class Tt {
  constructor(e) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${e}_${Tt._idPool++}`, Tt.all.add(this);
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
  constructor(t, e, n = nextLeakageMonitorName()) {
    this._errorHandler = t, this.threshold = e, this.name = n, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(t, e) {
    const n = this.threshold;
    if (n <= 0 || e < n) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const r = t.value, i = this._stacks.get(r) || 0;
    if (this._stacks.set(r, i + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = n * 0.5;
      const [s, o] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${e} listeners already. MOST frequent listener (${o}):`;
      console.warn(a), console.warn(s);
      const u = o / e > 0.3 ? "dominated" : "popular", l = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, f = new ListenerLeakError(u, a, s, e, l);
      this._errorHandler(f), reportLifecycleMisuse(f, "emitter_listener_leak");
    }
    return () => {
      const s = this._stacks.get(r) || 0;
      s <= 1 ? this._stacks.delete(r) : this._stacks.set(r, s - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let t, e = 0;
    for (const [n, r] of this._stacks) (!t || e < r) && (t = [n, r], e = r);
    return t;
  }
}, Stacktrace = class Ut {
  constructor(e) {
    this.value = e;
  }
  static create() {
    const e = new Error();
    return new Ut(e.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, ListenerLeakError = class extends Error {
  constructor(t, e, n, r, i) {
    super(i ? `[${i}] potential listener LEAK detected, ${t}` : `potential listener LEAK detected, ${t}`), this.name = "ListenerLeakError", this.kind = t, this.listenerCount = r, this.details = e, this.stack = n;
  }
}, ListenerRefusalError = class extends ListenerLeakError {
  constructor(t, e, n, r, i) {
    super(t, e, n, r, i), this.name = "ListenerRefusalError";
  }
}, UniqueContainer = class {
  constructor(t) {
    this.value = t;
  }
}, compactionThreshold = 2, forEachListener = (t, e) => {
  if (t instanceof UniqueContainer) e(t);
  else for (let n = 0; n < t.length; n++) {
    const r = t[n];
    r && e(r);
  }
}, Emitter = class {
  constructor(t) {
    this._size = 0, this._options = t, (_globalLeakWarningThreshold > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? _globalLeakWarningThreshold, this._leakWarningName = this._options?.leakWarningName ?? nextLeakageMonitorName(), this._leakWarningErrorHandler = this._options?.onListenerError ?? onUnexpectedError), this._perfMon = this._options?._profName ? new EventProfiling(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  _getLeakageMonitor() {
    if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new LeakageMonitor(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (_enableDisposeWithListenerWarning) {
          const t = this._listeners;
          queueMicrotask(() => {
            forEachListener(t, (e) => e.stack?.print());
          });
        }
        forEachListener(this._listeners, (t) => {
          t.value = void 0;
        }), this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (t, e, n) => {
      if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
        const a = this._getLeakageMonitor();
        if (a) {
          const u = `[${a.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${a.threshold})`;
          console.warn(u);
          const l = a.getMostFrequentStack() ?? ["UNKNOWN stack", -1], f = l[1] / this._size > 0.3 ? "dominated" : "popular", c = new ListenerRefusalError(f, `${u}. HINT: Stack shows most frequent listener (${l[1]}-times)`, l[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || onUnexpectedError)(c), reportLifecycleMisuse(c, "emitter_listener_refusal"), Disposable.None;
        }
      }
      if (this._disposed) {
        const a = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return reportLifecycleMisuse(a, "emitter_use_after_dispose"), Disposable.None;
      }
      e && (t = t.bind(e));
      const r = new UniqueContainer(t);
      let i, s;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const a = this._getLeakageMonitor();
        a && (r.stack = Stacktrace.create(), i = a.check(r.stack, this._size + 1));
      }
      _enableDisposeWithListenerWarning && (r.stack = s ?? Stacktrace.create()), this._listeners ? this._listeners instanceof UniqueContainer ? (this._deliveryQueue ??= new EventDeliveryQueuePrivate(), this._listeners = [this._listeners, r]) : this._listeners.push(r) : (this._options?.onWillAddFirstListener?.(this), this._listeners = r, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const o = toDisposable(() => {
        i?.(), this._removeListener(r);
      });
      return n instanceof DisposableStore ? n.add(o) : Array.isArray(n) && n.push(o), o;
    }, this._event;
  }
  _removeListener(t) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    const e = this._listeners, n = e.indexOf(t);
    if (n === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, e[n] = void 0;
    const r = this._deliveryQueue.current === this;
    if (this._size * compactionThreshold <= e.length) {
      let i = 0;
      for (let s = 0; s < e.length; s++) e[s] ? e[i++] = e[s] : r && i < this._deliveryQueue.end && (this._deliveryQueue.end--, i < this._deliveryQueue.i && this._deliveryQueue.i--);
      e.length = i;
    }
  }
  _deliver(t, e) {
    if (!t) return;
    const n = this._options?.onListenerError || onUnexpectedError;
    if (!n) {
      t.value(e);
      return;
    }
    try {
      t.value(e);
    } catch (r) {
      n(r);
    }
  }
  _deliverQueue(t) {
    const e = t.current._listeners;
    for (; t.i < t.end; ) this._deliver(e[t.i++], t.value);
    t.reset();
  }
  fire(t) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof UniqueContainer) this._deliver(this._listeners, t);
    else {
      const e = this._deliveryQueue;
      e.enqueue(this, t, this._listeners.length), this._deliverQueue(e);
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
  enqueue(t, e, n) {
    this.i = 0, this.end = n, this.current = t, this.value = e;
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
  const t = nodeProcess.env.VSCODE_NLS_CONFIG;
  if (t) try {
    const e = JSON.parse(t);
    _locale = e.userLocale, _platformLocale = e.osLocale, _language = e.resolvedLanguage || LANGUAGE_DEFAULT, _translationsConfigFile = e.languagePack?.translationsConfigFile;
  } catch {
  }
  _isNative = true;
} else typeof navigator == "object" && !isElectronRenderer ? (_userAgent = navigator.userAgent, _isWindows = _userAgent.indexOf("Windows") >= 0, _isMacintosh = _userAgent.indexOf("Macintosh") >= 0, _isIOS = (_userAgent.indexOf("Macintosh") >= 0 || _userAgent.indexOf("iPad") >= 0 || _userAgent.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, _isLinux = _userAgent.indexOf("Linux") >= 0, _isMobile = _userAgent?.indexOf("Mobi") >= 0, _isWeb = true, _language = getNLSLanguage() || LANGUAGE_DEFAULT, _locale = navigator.language.toLowerCase(), _platformLocale = _locale) : console.error("Unable to resolve platform.");
var _platform = 0;
_isMacintosh ? _platform = 1 : _isWindows ? _platform = 3 : _isLinux && (_platform = 2);
var isWindows = _isWindows, isMacintosh = _isMacintosh, isLinux = _isLinux, isNative = _isNative, isWeb = _isWeb, isWebWorker = _isWeb && typeof $globalThis.importScripts == "function", webWorkerOrigin = isWebWorker ? $globalThis.origin : void 0, userAgent = _userAgent, language = _language, Language;
((t) => {
  function e() {
    return language;
  }
  t.value = e;
  function n() {
    return language.length === 2 ? language === "en" : language.length >= 3 ? language[0] === "e" && language[1] === "n" && language[2] === "-" : false;
  }
  t.isDefaultVariant = n;
  function r() {
    return language === "en";
  }
  t.isDefault = r;
})(Language || (Language = {}));
var setTimeout0IsFaster = typeof $globalThis.postMessage == "function" && !$globalThis.importScripts, setTimeout0 = (() => {
  if (setTimeout0IsFaster) {
    const t = [];
    $globalThis.addEventListener("message", (n) => {
      if (n.data && n.data.vscodeScheduleAsyncWork) for (let r = 0, i = t.length; r < i; r++) {
        const s = t[r];
        if (s.id === n.data.vscodeScheduleAsyncWork) {
          t.splice(r, 1), s.callback();
          return;
        }
      }
    });
    let e = 0;
    return (n) => {
      const r = ++e;
      t.push({ id: r, callback: n }), $globalThis.postMessage({ vscodeScheduleAsyncWork: r }, "*");
    };
  }
  return (t) => setTimeout(t);
})(), isChrome = !!(userAgent && userAgent.indexOf("Chrome") >= 0), isFirefox = !!(userAgent && userAgent.indexOf("Firefox") >= 0), isSafari = !!(!isChrome && userAgent && userAgent.indexOf("Safari") >= 0), isEdge = !!(userAgent && userAgent.indexOf("Edg/") >= 0), isAndroid = !!(userAgent && userAgent.indexOf("Android") >= 0), arch = nodeProcess?.arch, platformString = nodeProcess?.platform, nodeVersion = nodeProcess?.versions?.node, shortcutEvent = Object.freeze(function(t, e) {
  const n = setTimeout(t.bind(e), 0);
  return { dispose() {
    clearTimeout(n);
  } };
}), CancellationToken;
((t) => {
  function e(n) {
    return n === t.None || n === t.Cancelled || n instanceof MutableToken ? true : !n || typeof n != "object" ? false : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
  }
  t.isCancellationToken = e, t.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: Event.None }), t.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: shortcutEvent });
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
};
function identity(t) {
  return t;
}
var LRUCachedFunction = class {
  constructor(t, e) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof t == "function" ? (this._fn = t, this._computeKey = identity) : (this._fn = e, this._computeKey = t.getCacheKey);
  }
  get(t) {
    const e = this._computeKey(t);
    return this.lastArgKey !== e && (this.lastArgKey = e, this.lastCache = this._fn(t)), this.lastCache;
  }
}, Lazy = class {
  constructor(t) {
    this.executor = t, this._didRun = false;
  }
  get hasValue() {
    return this._didRun;
  }
  get value() {
    if (!this._didRun) try {
      this._value = this.executor();
    } catch (t) {
      this._error = t;
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
function escapeRegExpCharacters(t) {
  return t.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function splitLines(t) {
  return t.split(/\r\n|\r|\n/);
}
function firstNonWhitespaceIndex(t) {
  for (let e = 0, n = t.length; e < n; e++) {
    const r = t.charCodeAt(e);
    if (r !== 32 && r !== 9) return e;
  }
  return -1;
}
function lastNonWhitespaceIndex(t, e = t.length - 1) {
  for (let n = e; n >= 0; n--) {
    const r = t.charCodeAt(n);
    if (r !== 32 && r !== 9) return n;
  }
  return -1;
}
function compare(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function compareSubstring(t, e, n = 0, r = t.length, i = 0, s = e.length) {
  for (; n < r && i < s; n++, i++) {
    const u = t.charCodeAt(n), l = e.charCodeAt(i);
    if (u < l) return -1;
    if (u > l) return 1;
  }
  const o = r - n, a = s - i;
  return o < a ? -1 : o > a ? 1 : 0;
}
function compareSubstringIgnoreCase(t, e, n = 0, r = t.length, i = 0, s = e.length) {
  for (; n < r && i < s; n++, i++) {
    let u = t.charCodeAt(n), l = e.charCodeAt(i);
    if (u === l) continue;
    if (u >= 128 || l >= 128) return compareSubstring(t.toLowerCase(), e.toLowerCase(), n, r, i, s);
    isLowerAsciiLetter(u) && (u -= 32), isLowerAsciiLetter(l) && (l -= 32);
    const f = u - l;
    if (f !== 0) return f;
  }
  const o = r - n, a = s - i;
  return o < a ? -1 : o > a ? 1 : 0;
}
function isLowerAsciiLetter(t) {
  return t >= 97 && t <= 122;
}
function isUpperAsciiLetter(t) {
  return t >= 65 && t <= 90;
}
function equalsIgnoreCase(t, e) {
  return t.length === e.length && compareSubstringIgnoreCase(t, e) === 0;
}
function commonPrefixLength(t, e) {
  const n = Math.min(t.length, e.length);
  let r;
  for (r = 0; r < n; r++) if (t.charCodeAt(r) !== e.charCodeAt(r)) return r;
  return n;
}
function commonSuffixLength(t, e) {
  const n = Math.min(t.length, e.length);
  let r;
  const i = t.length - 1, s = e.length - 1;
  for (r = 0; r < n; r++) if (t.charCodeAt(i - r) !== e.charCodeAt(s - r)) return r;
  return n;
}
function isHighSurrogate(t) {
  return 55296 <= t && t <= 56319;
}
function isLowSurrogate(t) {
  return 56320 <= t && t <= 57343;
}
function computeCodePoint(t, e) {
  return (t - 55296 << 10) + (e - 56320) + 65536;
}
function getNextCodePoint(t, e, n) {
  const r = t.charCodeAt(n);
  if (isHighSurrogate(r) && n + 1 < e) {
    const i = t.charCodeAt(n + 1);
    if (isLowSurrogate(i)) return computeCodePoint(r, i);
  }
  return r;
}
var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
function isBasicASCII(t) {
  return IS_BASIC_ASCII.test(t);
}
var CSI_SEQUENCE = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, OSC_SEQUENCE = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, ESC_SEQUENCE = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, CONTROL_SEQUENCES = new RegExp("(?:" + [CSI_SEQUENCE.source, OSC_SEQUENCE.source, ESC_SEQUENCE.source].join("|") + ")", "g"), UTF8_BOM_CHARACTER = "\uFEFF", _GraphemeBreakTree = class re {
  static getInstance() {
    return re._INSTANCE || (re._INSTANCE = new re()), re._INSTANCE;
  }
  constructor() {
    this._data = getGraphemeBreakRawData();
  }
  getGraphemeBreakType(e) {
    if (e < 32) return e === 10 ? 3 : e === 13 ? 2 : 4;
    if (e < 127) return 0;
    const n = this._data, r = n.length / 3;
    let i = 1;
    for (; i <= r; ) if (e < n[3 * i]) i = 2 * i;
    else if (e > n[3 * i + 1]) i = 2 * i + 1;
    else return n[3 * i + 2];
    return 0;
  }
};
_GraphemeBreakTree._INSTANCE = null;
function getGraphemeBreakRawData() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var _AmbiguousCharacters = class St {
  constructor(e) {
    this.confusableDictionary = e;
  }
  static getInstance(e) {
    return St.cache.get(Array.from(e).join(","));
  }
  static getLocales() {
    return St._locales.value;
  }
  isAmbiguous(e) {
    return this.confusableDictionary.has(e);
  }
  containsAmbiguousCharacter(e) {
    for (let n = 0; n < e.length; n++) {
      const r = e.codePointAt(n);
      if (typeof r == "number" && this.isAmbiguous(r)) return true;
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
_AmbiguousCharacters.ambiguousCharacterData = new Lazy(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), _AmbiguousCharacters.cache = new LRUCachedFunction((t) => {
  const e = t.split(",");
  function n(f) {
    const c = /* @__PURE__ */ new Map();
    for (let m = 0; m < f.length; m += 2) c.set(f[m], f[m + 1]);
    return c;
  }
  function r(f, c) {
    const m = new Map(f);
    for (const [h, g] of c) m.set(h, g);
    return m;
  }
  function i(f, c) {
    if (!f) return c;
    const m = /* @__PURE__ */ new Map();
    for (const [h, g] of f) c.has(h) && m.set(h, g);
    return m;
  }
  const s = _AmbiguousCharacters.ambiguousCharacterData.value;
  let o = e.filter((f) => !f.startsWith("_") && f in s);
  o.length === 0 && (o = ["_default"]);
  let a;
  for (const f of o) {
    const c = n(s[f]);
    a = i(a, c);
  }
  const u = n(s._common), l = r(u, a);
  return new _AmbiguousCharacters(l);
}), _AmbiguousCharacters._locales = new Lazy(() => Object.keys(_AmbiguousCharacters.ambiguousCharacterData.value).filter((t) => !t.startsWith("_")));
var AmbiguousCharacters = _AmbiguousCharacters, _InvisibleCharacters = class ie {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(ie.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(e) {
    return ie.getData().has(e);
  }
  static containsInvisibleCharacter(e) {
    for (let n = 0; n < e.length; n++) {
      const r = e.codePointAt(n);
      if (typeof r == "number" && (ie.isInvisibleCharacter(r) || r === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return ie.getData();
  }
};
_InvisibleCharacters._data = void 0;
var InvisibleCharacters = _InvisibleCharacters, DEFAULT_CHANNEL = "default", INITIALIZE = "$initialize", RequestMessage = class {
  constructor(t, e, n, r, i) {
    this.vsWorker = t, this.req = e, this.channel = n, this.method = r, this.args = i, this.type = 0;
  }
}, ReplyMessage = class {
  constructor(t, e, n, r) {
    this.vsWorker = t, this.seq = e, this.res = n, this.err = r, this.type = 1;
  }
}, SubscribeEventMessage = class {
  constructor(t, e, n, r, i) {
    this.vsWorker = t, this.req = e, this.channel = n, this.eventName = r, this.arg = i, this.type = 2;
  }
}, EventMessage = class {
  constructor(t, e, n) {
    this.vsWorker = t, this.req = e, this.event = n, this.type = 3;
  }
}, UnsubscribeEventMessage = class {
  constructor(t, e) {
    this.vsWorker = t, this.req = e, this.type = 4;
  }
}, WebWorkerProtocol = class {
  constructor(t) {
    this._workerId = -1, this._handler = t, this._lastSentReq = 0, this._pendingReplies = /* @__PURE__ */ Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
  }
  setWorkerId(t) {
    this._workerId = t;
  }
  sendMessage(t, e, n) {
    const r = String(++this._lastSentReq);
    return new Promise((i, s) => {
      this._pendingReplies[r] = { resolve: i, reject: s }, this._send(new RequestMessage(this._workerId, r, t, e, n));
    });
  }
  listen(t, e, n) {
    let r = null;
    const i = new Emitter({ onWillAddFirstListener: () => {
      r = String(++this._lastSentReq), this._pendingEmitters.set(r, i), this._send(new SubscribeEventMessage(this._workerId, r, t, e, n));
    }, onDidRemoveLastListener: () => {
      this._pendingEmitters.delete(r), this._send(new UnsubscribeEventMessage(this._workerId, r)), r = null;
    } });
    return i.event;
  }
  handleMessage(t) {
    !t || !t.vsWorker || this._workerId !== -1 && t.vsWorker !== this._workerId || this._handleMessage(t);
  }
  createProxyToRemoteChannel(t, e) {
    const n = { get: (r, i) => (typeof i == "string" && !r[i] && (propertyIsDynamicEvent(i) ? r[i] = (s) => this.listen(t, i, s) : propertyIsEvent(i) ? r[i] = this.listen(t, i, void 0) : i.charCodeAt(0) === 36 && (r[i] = async (...s) => (await e?.(), this.sendMessage(t, i, s)))), r[i]) };
    return new Proxy(/* @__PURE__ */ Object.create(null), n);
  }
  _handleMessage(t) {
    switch (t.type) {
      case 1:
        return this._handleReplyMessage(t);
      case 0:
        return this._handleRequestMessage(t);
      case 2:
        return this._handleSubscribeEventMessage(t);
      case 3:
        return this._handleEventMessage(t);
      case 4:
        return this._handleUnsubscribeEventMessage(t);
    }
  }
  _handleReplyMessage(t) {
    if (!this._pendingReplies[t.seq]) {
      console.warn("Got reply to unknown seq");
      return;
    }
    const e = this._pendingReplies[t.seq];
    if (delete this._pendingReplies[t.seq], t.err) {
      let n = t.err;
      t.err.$isError && (n = new Error(), n.name = t.err.name, n.message = t.err.message, n.stack = t.err.stack), e.reject(n);
      return;
    }
    e.resolve(t.res);
  }
  _handleRequestMessage(t) {
    const e = t.req;
    this._handler.handleMessage(t.channel, t.method, t.args).then((r) => {
      this._send(new ReplyMessage(this._workerId, e, r, void 0));
    }, (r) => {
      r.detail instanceof Error && (r.detail = transformErrorForSerialization(r.detail)), this._send(new ReplyMessage(this._workerId, e, void 0, transformErrorForSerialization(r)));
    });
  }
  _handleSubscribeEventMessage(t) {
    const e = t.req, n = this._handler.handleEvent(t.channel, t.eventName, t.arg)((r) => {
      this._send(new EventMessage(this._workerId, e, r));
    });
    this._pendingEvents.set(e, n);
  }
  _handleEventMessage(t) {
    if (!this._pendingEmitters.has(t.req)) {
      console.warn("Got event for unknown req");
      return;
    }
    this._pendingEmitters.get(t.req).fire(t.event);
  }
  _handleUnsubscribeEventMessage(t) {
    if (!this._pendingEvents.has(t.req)) {
      console.warn("Got unsubscribe for unknown req");
      return;
    }
    this._pendingEvents.get(t.req).dispose(), this._pendingEvents.delete(t.req);
  }
  _send(t) {
    const e = [];
    if (t.type === 0) for (let n = 0; n < t.args.length; n++) {
      const r = t.args[n];
      (r instanceof ArrayBuffer || typeof MessagePort < "u" && r instanceof MessagePort) && e.push(r);
    }
    else t.type === 1 && t.res instanceof ArrayBuffer && e.push(t.res);
    this._handler.sendMessage(t, e);
  }
};
function propertyIsEvent(t) {
  return t[0] === "o" && t[1] === "n" && isUpperAsciiLetter(t.charCodeAt(2));
}
function propertyIsDynamicEvent(t) {
  return /^onDynamic/.test(t) && isUpperAsciiLetter(t.charCodeAt(9));
}
var WebWorkerServer = class {
  constructor(t, e) {
    this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new WebWorkerProtocol({ sendMessage: (n, r) => {
      t(n, r);
    }, handleMessage: (n, r, i) => this._handleMessage(n, r, i), handleEvent: (n, r, i) => this._handleEvent(n, r, i) }), this.requestHandler = e(this);
  }
  onmessage(t) {
    this._protocol.handleMessage(t);
  }
  _handleMessage(t, e, n) {
    if (t === DEFAULT_CHANNEL && e === INITIALIZE) return this.initialize(n[0]);
    const r = t === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(t);
    if (!r) return Promise.reject(new Error(`Missing channel ${t} on worker thread`));
    if (typeof r[e] != "function") return Promise.reject(new Error(`Missing method ${e} on worker thread channel ${t}`));
    try {
      return Promise.resolve(r[e].apply(r, n));
    } catch (i) {
      return Promise.reject(i);
    }
  }
  _handleEvent(t, e, n) {
    const r = t === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(t);
    if (!r) throw new Error(`Missing channel ${t} on worker thread`);
    if (propertyIsDynamicEvent(e)) {
      const i = r[e].call(r, n);
      if (typeof i != "function") throw new Error(`Missing dynamic event ${e} on request handler.`);
      return i;
    }
    if (propertyIsEvent(e)) {
      const i = r[e];
      if (typeof i != "function") throw new Error(`Missing event ${e} on request handler.`);
      return i;
    }
    throw new Error(`Malformed event name ${e}`);
  }
  setChannel(t, e) {
    this._localChannels.set(t, e);
  }
  getChannel(t) {
    if (!this._remoteChannels.has(t)) {
      const e = this._protocol.createProxyToRemoteChannel(t);
      this._remoteChannels.set(t, e);
    }
    return this._remoteChannels.get(t);
  }
  async initialize(t) {
    this._protocol.setWorkerId(t);
  }
}, initialized = false;
function initialize(t) {
  if (initialized) throw new Error("WebWorker already initialized!");
  initialized = true;
  const e = new WebWorkerServer((n, r) => globalThis.postMessage(n, r), (n) => t(n));
  return globalThis.onmessage = (n) => {
    e.onmessage(n.data);
  }, e;
}
function bootstrapWebWorker(t) {
  globalThis.onmessage = (e) => {
    initialized || initialize(t);
  };
}
var DiffChange = class {
  constructor(t, e, n, r) {
    this.originalStart = t, this.originalLength = e, this.modifiedStart = n, this.modifiedLength = r;
  }
  getOriginalEnd() {
    return this.originalStart + this.originalLength;
  }
  getModifiedEnd() {
    return this.modifiedStart + this.modifiedLength;
  }
}, indexOfTable = new Lazy(() => new Uint8Array(256)), MAX_POOLED_ENCODE_SCRATCH_BYTES = 512 * 1024;
function numberHash(t, e) {
  return (e << 5) - e + t | 0;
}
function stringHash(t, e) {
  e = numberHash(149417, e);
  for (let n = 0, r = t.length; n < r; n++) e = numberHash(t.charCodeAt(n), e);
  return e;
}
function leftRotate(t, e, n = 32) {
  const r = n - e, i = ~((1 << r) - 1);
  return (t << e | (i & t) >>> r) >>> 0;
}
function toHexString(t, e = 32) {
  return t instanceof ArrayBuffer ? Array.from(new Uint8Array(t)).map((n) => n.toString(16).padStart(2, "0")).join("") : (t >>> 0).toString(16).padStart(e / 4, "0");
}
var _StringSHA1 = class Pt {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
  }
  update(e) {
    const n = e.length;
    if (n === 0) return;
    const r = this._buff;
    let i = this._buffLen, s = this._leftoverHighSurrogate, o, a;
    for (s !== 0 ? (o = s, a = -1, s = 0) : (o = e.charCodeAt(0), a = 0); ; ) {
      let u = o;
      if (isHighSurrogate(o)) if (a + 1 < n) {
        const l = e.charCodeAt(a + 1);
        isLowSurrogate(l) ? (a++, u = computeCodePoint(o, l)) : u = 65533;
      } else {
        s = o;
        break;
      }
      else isLowSurrogate(o) && (u = 65533);
      if (i = this._push(r, i, u), a++, a < n) o = e.charCodeAt(a);
      else break;
    }
    this._buffLen = i, this._leftoverHighSurrogate = s;
  }
  _push(e, n, r) {
    return r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = 192 | (r & 1984) >>> 6, e[n++] = 128 | (r & 63) >>> 0) : r < 65536 ? (e[n++] = 224 | (r & 61440) >>> 12, e[n++] = 128 | (r & 4032) >>> 6, e[n++] = 128 | (r & 63) >>> 0) : (e[n++] = 240 | (r & 1835008) >>> 18, e[n++] = 128 | (r & 258048) >>> 12, e[n++] = 128 | (r & 4032) >>> 6, e[n++] = 128 | (r & 63) >>> 0), n >= 64 && (this._step(), n -= 64, this._totalLen += 64, e[0] = e[64], e[1] = e[65], e[2] = e[66]), n;
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
    const e = Pt._bigBlock32, n = this._buffDV;
    for (let c = 0; c < 64; c += 4) e.setUint32(c, n.getUint32(c, false), false);
    for (let c = 64; c < 320; c += 4) e.setUint32(c, leftRotate(e.getUint32(c - 12, false) ^ e.getUint32(c - 32, false) ^ e.getUint32(c - 56, false) ^ e.getUint32(c - 64, false), 1), false);
    let r = this._h0, i = this._h1, s = this._h2, o = this._h3, a = this._h4, u, l, f;
    for (let c = 0; c < 80; c++) c < 20 ? (u = i & s | ~i & o, l = 1518500249) : c < 40 ? (u = i ^ s ^ o, l = 1859775393) : c < 60 ? (u = i & s | i & o | s & o, l = 2400959708) : (u = i ^ s ^ o, l = 3395469782), f = leftRotate(r, 5) + u + a + l + e.getUint32(c * 4, false) & 4294967295, a = o, o = s, s = leftRotate(i, 30), i = r, r = f;
    this._h0 = this._h0 + r & 4294967295, this._h1 = this._h1 + i & 4294967295, this._h2 = this._h2 + s & 4294967295, this._h3 = this._h3 + o & 4294967295, this._h4 = this._h4 + a & 4294967295;
  }
};
_StringSHA1._bigBlock32 = new DataView(new ArrayBuffer(320));
var StringDiffSequence = class {
  constructor(t) {
    this.source = t;
  }
  getElements() {
    const t = this.source, e = new Int32Array(t.length);
    for (let n = 0, r = t.length; n < r; n++) e[n] = t.charCodeAt(n);
    return e;
  }
};
function stringDiff(t, e, n) {
  return new LcsDiff(new StringDiffSequence(t), new StringDiffSequence(e)).ComputeDiff(n).changes;
}
var Debug = class {
  static Assert(t, e) {
    if (!t) throw new Error(e);
  }
}, MyArray = class {
  static Copy(t, e, n, r, i) {
    for (let s = 0; s < i; s++) n[r + s] = t[e + s];
  }
  static Copy2(t, e, n, r, i) {
    for (let s = 0; s < i; s++) n[r + s] = t[e + s];
  }
}, DiffChangeHelper = class {
  constructor() {
    this.m_changes = [], this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824, this.m_originalCount = 0, this.m_modifiedCount = 0;
  }
  MarkNextChange() {
    (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new DiffChange(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824;
  }
  AddOriginalElement(t, e) {
    this.m_originalStart = Math.min(this.m_originalStart, t), this.m_modifiedStart = Math.min(this.m_modifiedStart, e), this.m_originalCount++;
  }
  AddModifiedElement(t, e) {
    this.m_originalStart = Math.min(this.m_originalStart, t), this.m_modifiedStart = Math.min(this.m_modifiedStart, e), this.m_modifiedCount++;
  }
  getChanges() {
    return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
  }
  getReverseChanges() {
    return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
  }
}, LcsDiff = class z {
  constructor(e, n, r = null) {
    this.ContinueProcessingPredicate = r, this._originalSequence = e, this._modifiedSequence = n;
    const [i, s, o] = z._getElements(e), [a, u, l] = z._getElements(n);
    this._hasStrings = o && l, this._originalStringElements = i, this._originalElementsOrHash = s, this._modifiedStringElements = a, this._modifiedElementsOrHash = u, this.m_forwardHistory = [], this.m_reverseHistory = [];
  }
  static _isStringArray(e) {
    return e.length > 0 && typeof e[0] == "string";
  }
  static _getElements(e) {
    const n = e.getElements();
    if (z._isStringArray(n)) {
      const r = new Int32Array(n.length);
      for (let i = 0, s = n.length; i < s; i++) r[i] = stringHash(n[i], 0);
      return [n, r, true];
    }
    return n instanceof Int32Array ? [[], n, false] : [[], new Int32Array(n), false];
  }
  ElementsAreEqual(e, n) {
    return this._originalElementsOrHash[e] !== this._modifiedElementsOrHash[n] ? false : this._hasStrings ? this._originalStringElements[e] === this._modifiedStringElements[n] : true;
  }
  ElementsAreStrictEqual(e, n) {
    if (!this.ElementsAreEqual(e, n)) return false;
    const r = z._getStrictElement(this._originalSequence, e), i = z._getStrictElement(this._modifiedSequence, n);
    return r === i;
  }
  static _getStrictElement(e, n) {
    return typeof e.getStrictElement == "function" ? e.getStrictElement(n) : null;
  }
  OriginalElementsAreEqual(e, n) {
    return this._originalElementsOrHash[e] !== this._originalElementsOrHash[n] ? false : this._hasStrings ? this._originalStringElements[e] === this._originalStringElements[n] : true;
  }
  ModifiedElementsAreEqual(e, n) {
    return this._modifiedElementsOrHash[e] !== this._modifiedElementsOrHash[n] ? false : this._hasStrings ? this._modifiedStringElements[e] === this._modifiedStringElements[n] : true;
  }
  ComputeDiff(e) {
    return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, e);
  }
  _ComputeDiff(e, n, r, i, s) {
    const o = [false];
    let a = this.ComputeDiffRecursive(e, n, r, i, o);
    return s && (a = this.PrettifyChanges(a)), { quitEarly: o[0], changes: a };
  }
  ComputeDiffRecursive(e, n, r, i, s) {
    for (s[0] = false; e <= n && r <= i && this.ElementsAreEqual(e, r); ) e++, r++;
    for (; n >= e && i >= r && this.ElementsAreEqual(n, i); ) n--, i--;
    if (e > n || r > i) {
      let c;
      return r <= i ? (Debug.Assert(e === n + 1, "originalStart should only be one more than originalEnd"), c = [new DiffChange(e, 0, r, i - r + 1)]) : e <= n ? (Debug.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), c = [new DiffChange(e, n - e + 1, r, 0)]) : (Debug.Assert(e === n + 1, "originalStart should only be one more than originalEnd"), Debug.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), c = []), c;
    }
    const o = [0], a = [0], u = this.ComputeRecursionPoint(e, n, r, i, o, a, s), l = o[0], f = a[0];
    if (u !== null) return u;
    if (!s[0]) {
      const c = this.ComputeDiffRecursive(e, l, r, f, s);
      let m = [];
      return s[0] ? m = [new DiffChange(l + 1, n - (l + 1) + 1, f + 1, i - (f + 1) + 1)] : m = this.ComputeDiffRecursive(l + 1, n, f + 1, i, s), this.ConcatenateChanges(c, m);
    }
    return [new DiffChange(e, n - e + 1, r, i - r + 1)];
  }
  WALKTRACE(e, n, r, i, s, o, a, u, l, f, c, m, h, g, p, E, d, w) {
    let b = null, N = null, _ = new DiffChangeHelper(), v = n, S = r, L = h[0] - E[0] - i, y = -1073741824, D = this.m_forwardHistory.length - 1;
    do {
      const x = L + e;
      x === v || x < S && l[x - 1] < l[x + 1] ? (c = l[x + 1], g = c - L - i, c < y && _.MarkNextChange(), y = c, _.AddModifiedElement(c + 1, g), L = x + 1 - e) : (c = l[x - 1] + 1, g = c - L - i, c < y && _.MarkNextChange(), y = c - 1, _.AddOriginalElement(c, g + 1), L = x - 1 - e), D >= 0 && (l = this.m_forwardHistory[D], e = l[0], v = 1, S = l.length - 1);
    } while (--D >= -1);
    if (b = _.getReverseChanges(), w[0]) {
      let x = h[0] + 1, k = E[0] + 1;
      if (b !== null && b.length > 0) {
        const G = b[b.length - 1];
        x = Math.max(x, G.getOriginalEnd()), k = Math.max(k, G.getModifiedEnd());
      }
      N = [new DiffChange(x, m - x + 1, k, p - k + 1)];
    } else {
      _ = new DiffChangeHelper(), v = o, S = a, L = h[0] - E[0] - u, y = 1073741824, D = d ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
      do {
        const x = L + s;
        x === v || x < S && f[x - 1] >= f[x + 1] ? (c = f[x + 1] - 1, g = c - L - u, c > y && _.MarkNextChange(), y = c + 1, _.AddOriginalElement(c + 1, g + 1), L = x + 1 - s) : (c = f[x - 1], g = c - L - u, c > y && _.MarkNextChange(), y = c, _.AddModifiedElement(c + 1, g + 1), L = x - 1 - s), D >= 0 && (f = this.m_reverseHistory[D], s = f[0], v = 1, S = f.length - 1);
      } while (--D >= -1);
      N = _.getChanges();
    }
    return this.ConcatenateChanges(b, N);
  }
  ComputeRecursionPoint(e, n, r, i, s, o, a) {
    let u = 0, l = 0, f = 0, c = 0, m = 0, h = 0;
    e--, r--, s[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
    const g = n - e + (i - r), p = g + 1, E = new Int32Array(p), d = new Int32Array(p), w = i - r, b = n - e, N = e - r, _ = n - i, S = (b - w) % 2 === 0;
    E[w] = e, d[b] = n, a[0] = false;
    for (let L = 1; L <= g / 2 + 1; L++) {
      let y = 0, D = 0;
      f = this.ClipDiagonalBound(w - L, L, w, p), c = this.ClipDiagonalBound(w + L, L, w, p);
      for (let k = f; k <= c; k += 2) {
        k === f || k < c && E[k - 1] < E[k + 1] ? u = E[k + 1] : u = E[k - 1] + 1, l = u - (k - w) - N;
        const G = u;
        for (; u < n && l < i && this.ElementsAreEqual(u + 1, l + 1); ) u++, l++;
        if (E[k] = u, u + l > y + D && (y = u, D = l), !S && Math.abs(k - b) <= L - 1 && u >= d[k]) return s[0] = u, o[0] = l, G <= d[k] && L <= 1448 ? this.WALKTRACE(w, f, c, N, b, m, h, _, E, d, u, n, s, l, i, o, S, a) : null;
      }
      const x = (y - e + (D - r) - L) / 2;
      if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(y, x)) return a[0] = true, s[0] = y, o[0] = D, x > 0 && L <= 1448 ? this.WALKTRACE(w, f, c, N, b, m, h, _, E, d, u, n, s, l, i, o, S, a) : (e++, r++, [new DiffChange(e, n - e + 1, r, i - r + 1)]);
      m = this.ClipDiagonalBound(b - L, L, b, p), h = this.ClipDiagonalBound(b + L, L, b, p);
      for (let k = m; k <= h; k += 2) {
        k === m || k < h && d[k - 1] >= d[k + 1] ? u = d[k + 1] - 1 : u = d[k - 1], l = u - (k - b) - _;
        const G = u;
        for (; u > e && l > r && this.ElementsAreEqual(u, l); ) u--, l--;
        if (d[k] = u, S && Math.abs(k - w) <= L && u <= E[k]) return s[0] = u, o[0] = l, G >= E[k] && L <= 1448 ? this.WALKTRACE(w, f, c, N, b, m, h, _, E, d, u, n, s, l, i, o, S, a) : null;
      }
      if (L <= 1447) {
        let k = new Int32Array(c - f + 2);
        k[0] = w - f + 1, MyArray.Copy2(E, f, k, 1, c - f + 1), this.m_forwardHistory.push(k), k = new Int32Array(h - m + 2), k[0] = b - m + 1, MyArray.Copy2(d, m, k, 1, h - m + 1), this.m_reverseHistory.push(k);
      }
    }
    return this.WALKTRACE(w, f, c, N, b, m, h, _, E, d, u, n, s, l, i, o, S, a);
  }
  PrettifyChanges(e) {
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = n < e.length - 1 ? e[n + 1].originalStart : this._originalElementsOrHash.length, s = n < e.length - 1 ? e[n + 1].modifiedStart : this._modifiedElementsOrHash.length, o = r.originalLength > 0, a = r.modifiedLength > 0;
      for (; r.originalStart + r.originalLength < i && r.modifiedStart + r.modifiedLength < s && (!o || this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) && (!a || this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength)); ) {
        const l = this.ElementsAreStrictEqual(r.originalStart, r.modifiedStart);
        if (this.ElementsAreStrictEqual(r.originalStart + r.originalLength, r.modifiedStart + r.modifiedLength) && !l) break;
        r.originalStart++, r.modifiedStart++;
      }
      const u = [null];
      if (n < e.length - 1 && this.ChangesOverlap(e[n], e[n + 1], u)) {
        e[n] = u[0], e.splice(n + 1, 1), n--;
        continue;
      }
    }
    for (let n = e.length - 1; n >= 0; n--) {
      const r = e[n];
      let i = 0, s = 0;
      if (n > 0) {
        const c = e[n - 1];
        i = c.originalStart + c.originalLength, s = c.modifiedStart + c.modifiedLength;
      }
      const o = r.originalLength > 0, a = r.modifiedLength > 0;
      let u = 0, l = this._boundaryScore(r.originalStart, r.originalLength, r.modifiedStart, r.modifiedLength);
      for (let c = 1; ; c++) {
        const m = r.originalStart - c, h = r.modifiedStart - c;
        if (m < i || h < s || o && !this.OriginalElementsAreEqual(m, m + r.originalLength) || a && !this.ModifiedElementsAreEqual(h, h + r.modifiedLength)) break;
        const p = (m === i && h === s ? 5 : 0) + this._boundaryScore(m, r.originalLength, h, r.modifiedLength);
        p > l && (l = p, u = c);
      }
      r.originalStart -= u, r.modifiedStart -= u;
      const f = [null];
      if (n > 0 && this.ChangesOverlap(e[n - 1], e[n], f)) {
        e[n - 1] = f[0], e.splice(n, 1), n++;
        continue;
      }
    }
    if (this._hasStrings) for (let n = 1, r = e.length; n < r; n++) {
      const i = e[n - 1], s = e[n], o = s.originalStart - i.originalStart - i.originalLength, a = i.originalStart, u = s.originalStart + s.originalLength, l = u - a, f = i.modifiedStart, c = s.modifiedStart + s.modifiedLength, m = c - f;
      if (o < 5 && l < 20 && m < 20) {
        const h = this._findBetterContiguousSequence(a, l, f, m, o);
        if (h) {
          const [g, p] = h;
          (g !== i.originalStart + i.originalLength || p !== i.modifiedStart + i.modifiedLength) && (i.originalLength = g - i.originalStart, i.modifiedLength = p - i.modifiedStart, s.originalStart = g + o, s.modifiedStart = p + o, s.originalLength = u - s.originalStart, s.modifiedLength = c - s.modifiedStart);
        }
      }
    }
    return e;
  }
  _findBetterContiguousSequence(e, n, r, i, s) {
    if (n < s || i < s) return null;
    const o = e + n - s + 1, a = r + i - s + 1;
    let u = 0, l = 0, f = 0;
    for (let c = e; c < o; c++) for (let m = r; m < a; m++) {
      const h = this._contiguousSequenceScore(c, m, s);
      h > 0 && h > u && (u = h, l = c, f = m);
    }
    return u > 0 ? [l, f] : null;
  }
  _contiguousSequenceScore(e, n, r) {
    let i = 0;
    for (let s = 0; s < r; s++) {
      if (!this.ElementsAreEqual(e + s, n + s)) return 0;
      i += this._originalStringElements[e + s].length;
    }
    return i;
  }
  _OriginalIsBoundary(e) {
    return e <= 0 || e >= this._originalElementsOrHash.length - 1 ? true : this._hasStrings && /^\s*$/.test(this._originalStringElements[e]);
  }
  _OriginalRegionIsBoundary(e, n) {
    if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return true;
    if (n > 0) {
      const r = e + n;
      if (this._OriginalIsBoundary(r - 1) || this._OriginalIsBoundary(r)) return true;
    }
    return false;
  }
  _ModifiedIsBoundary(e) {
    return e <= 0 || e >= this._modifiedElementsOrHash.length - 1 ? true : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e]);
  }
  _ModifiedRegionIsBoundary(e, n) {
    if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return true;
    if (n > 0) {
      const r = e + n;
      if (this._ModifiedIsBoundary(r - 1) || this._ModifiedIsBoundary(r)) return true;
    }
    return false;
  }
  _boundaryScore(e, n, r, i) {
    const s = this._OriginalRegionIsBoundary(e, n) ? 1 : 0, o = this._ModifiedRegionIsBoundary(r, i) ? 1 : 0;
    return s + o;
  }
  ConcatenateChanges(e, n) {
    const r = [];
    if (e.length === 0 || n.length === 0) return n.length > 0 ? n : e;
    if (this.ChangesOverlap(e[e.length - 1], n[0], r)) {
      const i = new Array(e.length + n.length - 1);
      return MyArray.Copy(e, 0, i, 0, e.length - 1), i[e.length - 1] = r[0], MyArray.Copy(n, 1, i, e.length, n.length - 1), i;
    } else {
      const i = new Array(e.length + n.length);
      return MyArray.Copy(e, 0, i, 0, e.length), MyArray.Copy(n, 0, i, e.length, n.length), i;
    }
  }
  ChangesOverlap(e, n, r) {
    if (Debug.Assert(e.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), Debug.Assert(e.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), e.originalStart + e.originalLength >= n.originalStart || e.modifiedStart + e.modifiedLength >= n.modifiedStart) {
      const i = e.originalStart;
      let s = e.originalLength;
      const o = e.modifiedStart;
      let a = e.modifiedLength;
      return e.originalStart + e.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - e.originalStart), e.modifiedStart + e.modifiedLength >= n.modifiedStart && (a = n.modifiedStart + n.modifiedLength - e.modifiedStart), r[0] = new DiffChange(i, s, o, a), true;
    } else return r[0] = null, false;
  }
  ClipDiagonalBound(e, n, r, i) {
    if (e >= 0 && e < i) return e;
    const s = r, o = i - r - 1, a = n % 2 === 0;
    if (e < 0) {
      const u = s % 2 === 0;
      return a === u ? 0 : 1;
    } else {
      const u = o % 2 === 0;
      return a === u ? i - 1 : i - 2;
    }
  }
}, precomputedEqualityArray = new Uint32Array(65536), Position = class H {
  constructor(e, n) {
    this.lineNumber = e, this.column = n;
  }
  with(e = this.lineNumber, n = this.column) {
    return e === this.lineNumber && n === this.column ? this : new H(e, n);
  }
  delta(e = 0, n = 0) {
    return this.with(Math.max(1, this.lineNumber + e), Math.max(1, this.column + n));
  }
  equals(e) {
    return H.equals(this, e);
  }
  static equals(e, n) {
    return !e && !n ? true : !!e && !!n && e.lineNumber === n.lineNumber && e.column === n.column;
  }
  isBefore(e) {
    return H.isBefore(this, e);
  }
  static isBefore(e, n) {
    return e.lineNumber < n.lineNumber ? true : n.lineNumber < e.lineNumber ? false : e.column < n.column;
  }
  isBeforeOrEqual(e) {
    return H.isBeforeOrEqual(this, e);
  }
  static isBeforeOrEqual(e, n) {
    return e.lineNumber < n.lineNumber ? true : n.lineNumber < e.lineNumber ? false : e.column <= n.column;
  }
  static compare(e, n) {
    const r = e.lineNumber | 0, i = n.lineNumber | 0;
    if (r === i) {
      const s = e.column | 0, o = n.column | 0;
      return s - o;
    }
    return r - i;
  }
  clone() {
    return new H(this.lineNumber, this.column);
  }
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  static lift(e) {
    return new H(e.lineNumber, e.column);
  }
  static isIPosition(e) {
    return e && typeof e.lineNumber == "number" && typeof e.column == "number";
  }
  toJSON() {
    return { lineNumber: this.lineNumber, column: this.column };
  }
}, Range = class M {
  constructor(e, n, r, i) {
    let s, o, a, u;
    e == null || typeof e == "number" || Number.isNaN(e) ? (s = e, o = n, a = r, u = i) : "startLineNumber" in e && "startColumn" in e ? (s = e.startLineNumber, o = e.startColumn, a = e.endLineNumber, u = e.endColumn) : (s = e.startLineNumber, o = 1, a = e.endLineNumberExclusive, u = 1), s > a || s === a && o > u ? (this.startLineNumber = a, this.startColumn = u, this.endLineNumber = s, this.endColumn = o) : (this.startLineNumber = s, this.startColumn = o, this.endLineNumber = a, this.endColumn = u);
  }
  asIRange() {
    return { startLineNumber: this.startLineNumber, startColumn: this.startColumn, endLineNumber: this.endLineNumber, endColumn: this.endColumn };
  }
  isEmpty() {
    return M.isEmpty(this);
  }
  static isEmpty(e) {
    return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn;
  }
  containsPosition(e) {
    return M.containsPosition(this, e);
  }
  static containsPosition(e, n) {
    return !(n.lineNumber < e.startLineNumber || n.lineNumber > e.endLineNumber || n.lineNumber === e.startLineNumber && n.column < e.startColumn || n.lineNumber === e.endLineNumber && n.column > e.endColumn);
  }
  static strictContainsPosition(e, n) {
    return !(n.lineNumber < e.startLineNumber || n.lineNumber > e.endLineNumber || n.lineNumber === e.startLineNumber && n.column <= e.startColumn || n.lineNumber === e.endLineNumber && n.column >= e.endColumn);
  }
  containsRange(e) {
    return M.containsRange(this, e);
  }
  static containsRange(e, n) {
    return !(n.startLineNumber < e.startLineNumber || n.endLineNumber < e.startLineNumber || n.startLineNumber > e.endLineNumber || n.endLineNumber > e.endLineNumber || n.startLineNumber === e.startLineNumber && n.startColumn < e.startColumn || n.endLineNumber === e.endLineNumber && n.endColumn > e.endColumn);
  }
  strictContainsRange(e) {
    return M.strictContainsRange(this, e);
  }
  static strictContainsRange(e, n) {
    return !(n.startLineNumber < e.startLineNumber || n.endLineNumber < e.startLineNumber || n.startLineNumber > e.endLineNumber || n.endLineNumber > e.endLineNumber || n.startLineNumber === e.startLineNumber && n.startColumn <= e.startColumn || n.endLineNumber === e.endLineNumber && n.endColumn >= e.endColumn);
  }
  plusRange(e) {
    return M.plusRange(this, e);
  }
  static getRangeAbove(e, n) {
    const r = Math.max(e.startLineNumber - n, 1), i = e.startLineNumber;
    return new M(r, e.startColumn, i, e.startColumn);
  }
  static getRangeOnBelow(e, n, r) {
    const i = e.endLineNumber, s = Math.min(e.endLineNumber + n, r);
    return new M(i, e.endColumn, s, e.endColumn);
  }
  static getExtendedRange(e, n, r) {
    const i = Math.max(e.startLineNumber - n, 0), s = Math.min(e.endLineNumber + n, r);
    return new M(i, e.startColumn, s, e.endColumn);
  }
  static plusRange(e, n) {
    let r, i, s, o;
    return n.startLineNumber < e.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === e.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, e.startColumn)) : (r = e.startLineNumber, i = e.startColumn), n.endLineNumber > e.endLineNumber ? (s = n.endLineNumber, o = n.endColumn) : n.endLineNumber === e.endLineNumber ? (s = n.endLineNumber, o = Math.max(n.endColumn, e.endColumn)) : (s = e.endLineNumber, o = e.endColumn), new M(r, i, s, o);
  }
  intersectRanges(e) {
    return M.intersectRanges(this, e);
  }
  static intersectRanges(e, n) {
    let r = e.startLineNumber, i = e.startColumn, s = e.endLineNumber, o = e.endColumn;
    const a = n.startLineNumber, u = n.startColumn, l = n.endLineNumber, f = n.endColumn;
    return r < a ? (r = a, i = u) : r === a && (i = Math.max(i, u)), s > l ? (s = l, o = f) : s === l && (o = Math.min(o, f)), r > s || r === s && i > o ? null : new M(r, i, s, o);
  }
  static inverseEditRange(e, n) {
    return { startLineNumber: e.startLineNumber, startColumn: e.startColumn, endLineNumber: e.startLineNumber + n.split(`
`).length - 1, endColumn: n.lastIndexOf(`
`) === -1 ? e.startColumn + n.length : n.length - n.lastIndexOf(`
`) };
  }
  whereIs(e) {
    return e.endLineNumber < this.startLineNumber || e.endLineNumber === this.startLineNumber && e.endColumn <= this.startColumn ? "before" : e.startLineNumber > this.endLineNumber || e.startLineNumber === this.endLineNumber && e.startColumn >= this.endColumn ? "after" : "overlapping";
  }
  static rangeAfterEdit(e, n) {
    const r = M.lift(e).whereIs(n.range);
    switch (r) {
      case "overlapping":
        throw new Error("Range is overlapping. The range after edit is ambiguous.");
      case "after":
        return e;
      case "before": {
        const i = n.text.split(`
`).length - 1 - (n.range.endLineNumber - n.range.startLineNumber);
        if (n.range.endLineNumber < e.startLineNumber) return { startLineNumber: e.startLineNumber + i, startColumn: e.startColumn, endLineNumber: e.endLineNumber + i, endColumn: e.endColumn };
        {
          const s = n.text.lastIndexOf(`
`) === -1 ? n.text.length : n.text.length - n.text.lastIndexOf(`
`) - 1, o = n.range.startLineNumber === n.range.endLineNumber ? n.range.endColumn - n.range.startColumn : n.range.endColumn - 1, a = s - o;
          return { startLineNumber: e.startLineNumber + i, startColumn: e.startColumn + a, endLineNumber: e.endLineNumber + i, endColumn: e.startLineNumber === e.endLineNumber ? e.endColumn + a : e.endColumn };
        }
      }
      default: {
        const i = r;
        return e;
      }
    }
  }
  equalsRange(e) {
    return M.equalsRange(this, e);
  }
  static equalsRange(e, n) {
    return !e && !n ? true : !!e && !!n && e.startLineNumber === n.startLineNumber && e.startColumn === n.startColumn && e.endLineNumber === n.endLineNumber && e.endColumn === n.endColumn;
  }
  getEndPosition() {
    return M.getEndPosition(this);
  }
  static getEndPosition(e) {
    return new Position(e.endLineNumber, e.endColumn);
  }
  getStartPosition() {
    return M.getStartPosition(this);
  }
  static getStartPosition(e) {
    return new Position(e.startLineNumber, e.startColumn);
  }
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  setEndPosition(e, n) {
    return new M(this.startLineNumber, this.startColumn, e, n);
  }
  setStartPosition(e, n) {
    return new M(e, n, this.endLineNumber, this.endColumn);
  }
  collapseToStart() {
    return M.collapseToStart(this);
  }
  static collapseToStart(e) {
    return new M(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn);
  }
  collapseToEnd() {
    return M.collapseToEnd(this);
  }
  static collapseToEnd(e) {
    return new M(e.endLineNumber, e.endColumn, e.endLineNumber, e.endColumn);
  }
  delta(e) {
    return new M(this.startLineNumber + e, this.startColumn, this.endLineNumber + e, this.endColumn);
  }
  isSingleLine() {
    return this.startLineNumber === this.endLineNumber;
  }
  static fromPositions(e, n = e) {
    return new M(e.lineNumber, e.column, n.lineNumber, n.column);
  }
  static lift(e) {
    return e ? new M(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn) : null;
  }
  static isIRange(e) {
    return e && typeof e.startLineNumber == "number" && typeof e.startColumn == "number" && typeof e.endLineNumber == "number" && typeof e.endColumn == "number";
  }
  static areIntersectingOrTouching(e, n) {
    return !(e.endLineNumber < n.startLineNumber || e.endLineNumber === n.startLineNumber && e.endColumn < n.startColumn || n.endLineNumber < e.startLineNumber || n.endLineNumber === e.startLineNumber && n.endColumn < e.startColumn);
  }
  static areIntersecting(e, n) {
    return !(e.endLineNumber < n.startLineNumber || e.endLineNumber === n.startLineNumber && e.endColumn <= n.startColumn || n.endLineNumber < e.startLineNumber || n.endLineNumber === e.startLineNumber && n.endColumn <= e.startColumn);
  }
  static areOnlyIntersecting(e, n) {
    return !(e.endLineNumber < n.startLineNumber - 1 || e.endLineNumber === n.startLineNumber && e.endColumn < n.startColumn - 1 || n.endLineNumber < e.startLineNumber - 1 || n.endLineNumber === e.startLineNumber && n.endColumn < e.startColumn - 1);
  }
  static compareRangesUsingStarts(e, n) {
    if (e && n) {
      const s = e.startLineNumber | 0, o = n.startLineNumber | 0;
      if (s === o) {
        const a = e.startColumn | 0, u = n.startColumn | 0;
        if (a === u) {
          const l = e.endLineNumber | 0, f = n.endLineNumber | 0;
          if (l === f) {
            const c = e.endColumn | 0, m = n.endColumn | 0;
            return c - m;
          }
          return l - f;
        }
        return a - u;
      }
      return s - o;
    }
    return (e ? 1 : 0) - (n ? 1 : 0);
  }
  static compareRangesUsingEnds(e, n) {
    return e.endLineNumber === n.endLineNumber ? e.endColumn === n.endColumn ? e.startLineNumber === n.startLineNumber ? e.startColumn - n.startColumn : e.startLineNumber - n.startLineNumber : e.endColumn - n.endColumn : e.endLineNumber - n.endLineNumber;
  }
  static spansMultipleLines(e) {
    return e.endLineNumber > e.startLineNumber;
  }
  toJSON() {
    return this;
  }
}, CharCode = ((t) => (t[t.Null = 0] = "Null", t[t.Backspace = 8] = "Backspace", t[t.Tab = 9] = "Tab", t[t.LineFeed = 10] = "LineFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t[t.Space = 32] = "Space", t[t.ExclamationMark = 33] = "ExclamationMark", t[t.DoubleQuote = 34] = "DoubleQuote", t[t.Hash = 35] = "Hash", t[t.DollarSign = 36] = "DollarSign", t[t.PercentSign = 37] = "PercentSign", t[t.Ampersand = 38] = "Ampersand", t[t.SingleQuote = 39] = "SingleQuote", t[t.OpenParen = 40] = "OpenParen", t[t.CloseParen = 41] = "CloseParen", t[t.Asterisk = 42] = "Asterisk", t[t.Plus = 43] = "Plus", t[t.Comma = 44] = "Comma", t[t.Dash = 45] = "Dash", t[t.Period = 46] = "Period", t[t.Slash = 47] = "Slash", t[t.Digit0 = 48] = "Digit0", t[t.Digit1 = 49] = "Digit1", t[t.Digit2 = 50] = "Digit2", t[t.Digit3 = 51] = "Digit3", t[t.Digit4 = 52] = "Digit4", t[t.Digit5 = 53] = "Digit5", t[t.Digit6 = 54] = "Digit6", t[t.Digit7 = 55] = "Digit7", t[t.Digit8 = 56] = "Digit8", t[t.Digit9 = 57] = "Digit9", t[t.Colon = 58] = "Colon", t[t.Semicolon = 59] = "Semicolon", t[t.LessThan = 60] = "LessThan", t[t.Equals = 61] = "Equals", t[t.GreaterThan = 62] = "GreaterThan", t[t.QuestionMark = 63] = "QuestionMark", t[t.AtSign = 64] = "AtSign", t[t.A = 65] = "A", t[t.B = 66] = "B", t[t.C = 67] = "C", t[t.D = 68] = "D", t[t.E = 69] = "E", t[t.F = 70] = "F", t[t.G = 71] = "G", t[t.H = 72] = "H", t[t.I = 73] = "I", t[t.J = 74] = "J", t[t.K = 75] = "K", t[t.L = 76] = "L", t[t.M = 77] = "M", t[t.N = 78] = "N", t[t.O = 79] = "O", t[t.P = 80] = "P", t[t.Q = 81] = "Q", t[t.R = 82] = "R", t[t.S = 83] = "S", t[t.T = 84] = "T", t[t.U = 85] = "U", t[t.V = 86] = "V", t[t.W = 87] = "W", t[t.X = 88] = "X", t[t.Y = 89] = "Y", t[t.Z = 90] = "Z", t[t.OpenSquareBracket = 91] = "OpenSquareBracket", t[t.Backslash = 92] = "Backslash", t[t.CloseSquareBracket = 93] = "CloseSquareBracket", t[t.Caret = 94] = "Caret", t[t.Underline = 95] = "Underline", t[t.BackTick = 96] = "BackTick", t[t.a = 97] = "a", t[t.b = 98] = "b", t[t.c = 99] = "c", t[t.d = 100] = "d", t[t.e = 101] = "e", t[t.f = 102] = "f", t[t.g = 103] = "g", t[t.h = 104] = "h", t[t.i = 105] = "i", t[t.j = 106] = "j", t[t.k = 107] = "k", t[t.l = 108] = "l", t[t.m = 109] = "m", t[t.n = 110] = "n", t[t.o = 111] = "o", t[t.p = 112] = "p", t[t.q = 113] = "q", t[t.r = 114] = "r", t[t.s = 115] = "s", t[t.t = 116] = "t", t[t.u = 117] = "u", t[t.v = 118] = "v", t[t.w = 119] = "w", t[t.x = 120] = "x", t[t.y = 121] = "y", t[t.z = 122] = "z", t[t.OpenCurlyBrace = 123] = "OpenCurlyBrace", t[t.Pipe = 124] = "Pipe", t[t.CloseCurlyBrace = 125] = "CloseCurlyBrace", t[t.Tilde = 126] = "Tilde", t[t.NoBreakSpace = 160] = "NoBreakSpace", t[t.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", t[t.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", t[t.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", t[t.U_Combining_Tilde = 771] = "U_Combining_Tilde", t[t.U_Combining_Macron = 772] = "U_Combining_Macron", t[t.U_Combining_Overline = 773] = "U_Combining_Overline", t[t.U_Combining_Breve = 774] = "U_Combining_Breve", t[t.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", t[t.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", t[t.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", t[t.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", t[t.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", t[t.U_Combining_Caron = 780] = "U_Combining_Caron", t[t.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", t[t.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", t[t.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", t[t.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", t[t.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", t[t.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", t[t.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", t[t.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", t[t.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", t[t.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", t[t.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", t[t.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", t[t.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", t[t.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", t[t.U_Combining_Horn = 795] = "U_Combining_Horn", t[t.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", t[t.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", t[t.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", t[t.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", t[t.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", t[t.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", t[t.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", t[t.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", t[t.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", t[t.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", t[t.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", t[t.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", t[t.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", t[t.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", t[t.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", t[t.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", t[t.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", t[t.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", t[t.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", t[t.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", t[t.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", t[t.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", t[t.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", t[t.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", t[t.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", t[t.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", t[t.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", t[t.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", t[t.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", t[t.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", t[t.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", t[t.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", t[t.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", t[t.U_Combining_X_Above = 829] = "U_Combining_X_Above", t[t.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", t[t.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", t[t.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", t[t.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", t[t.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", t[t.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", t[t.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", t[t.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", t[t.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", t[t.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", t[t.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", t[t.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", t[t.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", t[t.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", t[t.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", t[t.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", t[t.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", t[t.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", t[t.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", t[t.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", t[t.U_Combining_Fermata = 850] = "U_Combining_Fermata", t[t.U_Combining_X_Below = 851] = "U_Combining_X_Below", t[t.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", t[t.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", t[t.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", t[t.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", t[t.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", t[t.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", t[t.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", t[t.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", t[t.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", t[t.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", t[t.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", t[t.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", t[t.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", t[t.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", t[t.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", t[t.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", t[t.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", t[t.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", t[t.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", t[t.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", t[t.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", t[t.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", t[t.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", t[t.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", t[t.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", t[t.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", t[t.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", t[t.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", t[t.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", t[t.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", t[t.NEXT_LINE = 133] = "NEXT_LINE", t[t.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", t[t.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", t[t.U_DIAERESIS = 168] = "U_DIAERESIS", t[t.U_MACRON = 175] = "U_MACRON", t[t.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", t[t.U_CEDILLA = 184] = "U_CEDILLA", t[t.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", t[t.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", t[t.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", t[t.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", t[t.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", t[t.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", t[t.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", t[t.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", t[t.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", t[t.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", t[t.U_BREVE = 728] = "U_BREVE", t[t.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", t[t.U_RING_ABOVE = 730] = "U_RING_ABOVE", t[t.U_OGONEK = 731] = "U_OGONEK", t[t.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", t[t.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", t[t.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", t[t.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", t[t.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", t[t.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", t[t.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", t[t.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", t[t.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", t[t.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", t[t.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", t[t.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", t[t.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", t[t.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", t[t.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", t[t.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", t[t.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", t[t.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", t[t.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", t[t.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", t[t.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", t[t.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", t[t.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", t[t.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", t[t.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", t[t.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", t[t.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", t[t.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", t[t.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", t[t.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", t[t.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", t[t.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", t[t.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", t[t.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", t[t.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", t[t.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", t[t.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", t[t.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", t[t.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", t[t.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", t[t.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", t[t.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", t[t.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", t[t.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", t[t.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", t[t.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", t[t.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", t[t.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", t[t.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", t[t.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", t[t.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", t[t.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", t[t.U_OVERLINE = 8254] = "U_OVERLINE", t[t.UTF8_BOM = 65279] = "UTF8_BOM", t[t.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", t[t.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA", t))(CharCode || {});
function toUint8(t) {
  return t < 0 ? 0 : t > 255 ? 255 : t | 0;
}
function toUint32(t) {
  return t < 0 ? 0 : t > 4294967295 ? 4294967295 : t | 0;
}
var CharacterClassifier = class Mt {
  constructor(e) {
    const n = toUint8(e);
    this._defaultValue = n, this._asciiMap = Mt._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
  }
  static _createAsciiMap(e) {
    const n = new Uint8Array(256);
    return n.fill(e), n;
  }
  set(e, n) {
    const r = toUint8(n);
    e >= 0 && e < 256 ? this._asciiMap[e] = r : this._map.set(e, r);
  }
  get(e) {
    return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue;
  }
  clear() {
    this._asciiMap.fill(this._defaultValue), this._map.clear();
  }
}, Uint8Matrix = class {
  constructor(t, e, n) {
    const r = new Uint8Array(t * e);
    for (let i = 0, s = t * e; i < s; i++) r[i] = n;
    this._data = r, this.rows = t, this.cols = e;
  }
  get(t, e) {
    return this._data[t * this.cols + e];
  }
  set(t, e, n) {
    this._data[t * this.cols + e] = n;
  }
}, StateMachine = class {
  constructor(t) {
    let e = 0, n = 0;
    for (let i = 0, s = t.length; i < s; i++) {
      const [o, a, u] = t[i];
      a > e && (e = a), o > n && (n = o), u > n && (n = u);
    }
    e++, n++;
    const r = new Uint8Matrix(n, e, 0);
    for (let i = 0, s = t.length; i < s; i++) {
      const [o, a, u] = t[i];
      r.set(o, a, u);
    }
    this._states = r, this._maxCharCode = e;
  }
  nextState(t, e) {
    return e < 0 || e >= this._maxCharCode ? 0 : this._states.get(t, e);
  }
}, _stateMachine = null;
function getStateMachine() {
  return _stateMachine === null && (_stateMachine = new StateMachine([[1, CharCode.h, 2], [1, CharCode.H, 2], [1, CharCode.f, 6], [1, CharCode.F, 6], [2, CharCode.t, 3], [2, CharCode.T, 3], [3, CharCode.t, 4], [3, CharCode.T, 4], [4, CharCode.p, 5], [4, CharCode.P, 5], [5, CharCode.s, 9], [5, CharCode.S, 9], [5, CharCode.Colon, 10], [6, CharCode.i, 7], [6, CharCode.I, 7], [7, CharCode.l, 8], [7, CharCode.L, 8], [8, CharCode.e, 9], [8, CharCode.E, 9], [9, CharCode.Colon, 10], [10, CharCode.Slash, 11], [11, CharCode.Slash, 12]])), _stateMachine;
}
var _classifier = null;
function getClassifier() {
  if (_classifier === null) {
    _classifier = new CharacterClassifier(0);
    const t = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…`;
    for (let n = 0; n < t.length; n++) _classifier.set(t.charCodeAt(n), 1);
    const e = ".,;:";
    for (let n = 0; n < e.length; n++) _classifier.set(e.charCodeAt(n), 2);
  }
  return _classifier;
}
var LinkComputer = class Rt {
  static _createLink(e, n, r, i, s) {
    let o = s - 1;
    do {
      const a = n.charCodeAt(o);
      if (e.get(a) !== 2) break;
      o--;
    } while (o > i);
    if (i > 0) {
      const a = n.charCodeAt(i - 1), u = n.charCodeAt(o);
      (a === CharCode.OpenParen && u === CharCode.CloseParen || a === CharCode.OpenSquareBracket && u === CharCode.CloseSquareBracket || a === CharCode.OpenCurlyBrace && u === CharCode.CloseCurlyBrace) && o--;
    }
    return { range: { startLineNumber: r, startColumn: i + 1, endLineNumber: r, endColumn: o + 2 }, url: n.substring(i, o + 1) };
  }
  static computeLinks(e, n = getStateMachine()) {
    const r = getClassifier(), i = [];
    for (let s = 1, o = e.getLineCount(); s <= o; s++) {
      const a = e.getLineContent(s), u = a.length;
      let l = 0, f = 0, c = 0, m = 1, h = false, g = false, p = false, E = false;
      for (; l < u; ) {
        let d = false;
        const w = a.charCodeAt(l);
        if (m === 13) {
          let b;
          switch (w) {
            case CharCode.OpenParen:
              h = true, b = 0;
              break;
            case CharCode.CloseParen:
              b = h ? 0 : 1;
              break;
            case CharCode.OpenSquareBracket:
              p = true, g = true, b = 0;
              break;
            case CharCode.CloseSquareBracket:
              p = false, b = g ? 0 : 1;
              break;
            case CharCode.OpenCurlyBrace:
              E = true, b = 0;
              break;
            case CharCode.CloseCurlyBrace:
              b = E ? 0 : 1;
              break;
            case CharCode.SingleQuote:
            case CharCode.DoubleQuote:
            case CharCode.BackTick:
              c === w ? b = 1 : c === CharCode.SingleQuote || c === CharCode.DoubleQuote || c === CharCode.BackTick ? b = 0 : b = 1;
              break;
            case CharCode.Asterisk:
              b = c === CharCode.Asterisk ? 1 : 0;
              break;
            case CharCode.Pipe:
              b = c === CharCode.Pipe ? 1 : 0;
              break;
            case CharCode.Space:
              b = p ? 0 : 1;
              break;
            default:
              b = r.get(w);
          }
          b === 1 && (i.push(Rt._createLink(r, a, s, f, l)), d = true);
        } else if (m === 12) {
          let b;
          w === CharCode.OpenSquareBracket ? (g = true, b = 0) : b = r.get(w), b === 1 ? d = true : m = 13;
        } else m = n.nextState(m, w), m === 0 && (d = true);
        d && (m = 1, h = false, g = false, E = false, f = l + 1, c = w), l++;
      }
      m === 13 && i.push(Rt._createLink(r, a, s, f, u));
    }
    return i;
  }
};
function computeLinks(t) {
  return !t || typeof t.getLineCount != "function" || typeof t.getLineContent != "function" ? [] : LinkComputer.computeLinks(t);
}
var _BasicInplaceReplace = class {
  constructor() {
    this._defaultValueSet = [["true", "false"], ["True", "False"], ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"], ["public", "protected", "private"]];
  }
  navigateValueSet(e, n, r, i, s) {
    if (e && n) {
      const o = this.doNavigateValueSet(n, s);
      if (o) return { range: e, value: o };
    }
    if (r && i) {
      const o = this.doNavigateValueSet(i, s);
      if (o) return { range: r, value: o };
    }
    return null;
  }
  doNavigateValueSet(e, n) {
    const r = this.numberReplace(e, n);
    return r !== null ? r : this.textReplace(e, n);
  }
  numberReplace(e, n) {
    const r = Math.pow(10, e.length - (e.lastIndexOf(".") + 1));
    let i = Number(e);
    const s = parseFloat(e);
    return !isNaN(i) && !isNaN(s) && i === s ? i === 0 && !n ? null : (i = Math.floor(i * r), i += n ? r : -r, String(i / r)) : null;
  }
  textReplace(e, n) {
    return this.valueSetsReplace(this._defaultValueSet, e, n);
  }
  valueSetsReplace(e, n, r) {
    let i = null;
    for (let s = 0, o = e.length; i === null && s < o; s++) i = this.valueSetReplace(e[s], n, r);
    return i;
  }
  valueSetReplace(e, n, r) {
    let i = e.indexOf(n);
    return i >= 0 ? (i += r ? 1 : -1, i < 0 ? i = e.length - 1 : i %= e.length, e[i]) : null;
  }
};
_BasicInplaceReplace.INSTANCE = new _BasicInplaceReplace();
var BasicInplaceReplace = _BasicInplaceReplace, minute = 60, hour = minute * 60, day = hour * 24, week = day * 7, month = day * 30, year = day * 365, wordClassifierCache = new LRUCache(10), _hex = [];
for (let t = 0; t < 256; t++) _hex.push(t.toString(16).padStart(2, "0"));
var generateUuid = (function() {
  if (typeof crypto.randomUUID == "function") return crypto.randomUUID.bind(crypto);
  const t = new Uint8Array(16);
  return function() {
    crypto.getRandomValues(t), t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128;
    let n = 0, r = "";
    return r += _hex[t[n++]], r += _hex[t[n++]], r += _hex[t[n++]], r += _hex[t[n++]], r += "-", r += _hex[t[n++]], r += _hex[t[n++]], r += "-", r += _hex[t[n++]], r += _hex[t[n++]], r += "-", r += _hex[t[n++]], r += _hex[t[n++]], r += "-", r += _hex[t[n++]], r += _hex[t[n++]], r += _hex[t[n++]], r += _hex[t[n++]], r += _hex[t[n++]], r += _hex[t[n++]], r;
  };
})();
function isMultilineRegexSource(t) {
  if (!t || t.length === 0) return false;
  for (let e = 0, n = t.length; e < n; e++) {
    const r = t.charCodeAt(e);
    if (r === CharCode.LineFeed) return true;
    if (r === CharCode.Backslash) {
      if (e++, e >= n) break;
      const i = t.charCodeAt(e);
      if (i === CharCode.n || i === CharCode.r || i === CharCode.W) return true;
    }
    if (r === CharCode.OpenSquareBracket && e + 5 < n && t.charCodeAt(e + 1) === CharCode.Backslash) {
      const i = t.charCodeAt(e + 2);
      if ((i === CharCode.s || i === CharCode.S || i === CharCode.d || i === CharCode.D) && t.charCodeAt(e + 3) === CharCode.Backslash) {
        const s = t.charCodeAt(e + 4);
        if ((i === CharCode.s && s === CharCode.S || i === CharCode.S && s === CharCode.s || i === CharCode.d && s === CharCode.D || i === CharCode.D && s === CharCode.d) && t.charCodeAt(e + 5) === CharCode.CloseSquareBracket) return true;
      }
    }
  }
  return false;
}
function leftIsWordBounday(t, e, n, r, i) {
  if (r === 0) return true;
  const s = e.charCodeAt(r - 1);
  if (t.get(s) !== 0 || s === CharCode.CarriageReturn || s === CharCode.LineFeed) return true;
  if (i > 0) {
    const o = e.charCodeAt(r);
    if (t.get(o) !== 0) return true;
  }
  return false;
}
function rightIsWordBounday(t, e, n, r, i) {
  if (r + i === n) return true;
  const s = e.charCodeAt(r + i);
  if (t.get(s) !== 0 || s === CharCode.CarriageReturn || s === CharCode.LineFeed) return true;
  if (i > 0) {
    const o = e.charCodeAt(r + i - 1);
    if (t.get(o) !== 0) return true;
  }
  return false;
}
function isValidMatch(t, e, n, r, i) {
  return leftIsWordBounday(t, e, n, r, i) && rightIsWordBounday(t, e, n, r, i);
}
var Searcher = class {
  constructor(t, e) {
    this._wordSeparators = t, this._searchRegex = e, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
  }
  reset(t) {
    this._searchRegex.lastIndex = t, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
  }
  next(t) {
    const e = t.length;
    let n;
    do {
      if (this._prevMatchStartIndex + this._prevMatchLength === e || (n = this._searchRegex.exec(t), !n)) return null;
      const r = n.index, i = n[0].length;
      if (r === this._prevMatchStartIndex && i === this._prevMatchLength) {
        if (i === 0) {
          getNextCodePoint(t, e, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
          continue;
        }
        return null;
      }
      if (this._prevMatchStartIndex = r, this._prevMatchLength = i, !this._wordSeparators || isValidMatch(this._wordSeparators, t, e, r, i)) return n;
    } while (n);
    return null;
  }
}, USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function createWordRegExp(t = "") {
  let e = "(-?\\d*\\.\\d\\w*)|([^";
  for (const n of USUAL_WORD_SEPARATORS) t.indexOf(n) >= 0 || (e += "\\" + n);
  return e += "\\s]+)", new RegExp(e, "g");
}
var DEFAULT_WORD_REGEXP = createWordRegExp();
function ensureValidWordDefinition(t) {
  let e = DEFAULT_WORD_REGEXP;
  if (t && t instanceof RegExp) if (t.global) e = t;
  else {
    let n = "g";
    t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.unicode && (n += "u"), e = new RegExp(t.source, n);
  }
  return e.lastIndex = 0, e;
}
var _defaultConfig = new LinkedList();
_defaultConfig.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
function getWordAtText(t, e, n, r, i) {
  if (e = ensureValidWordDefinition(e), i || (i = Iterable.first(_defaultConfig)), n.length > i.maxLen) {
    let l = t - i.maxLen / 2;
    return l < 0 ? l = 0 : r += l, n = n.substring(l, t + i.maxLen / 2), getWordAtText(t, e, n, r, i);
  }
  const s = Date.now(), o = t - 1 - r;
  let a = -1, u = null;
  for (let l = 1; !(Date.now() - s >= i.timeBudget); l++) {
    const f = o - i.windowSize * l;
    e.lastIndex = Math.max(0, f);
    const c = _findRegexMatchEnclosingPosition(e, n, o, a);
    if (!c && u || (u = c, f <= 0)) break;
    a = f;
  }
  if (u) {
    const l = { word: u[0], startColumn: r + 1 + u.index, endColumn: r + 1 + u.index + u[0].length };
    return e.lastIndex = 0, l;
  }
  return null;
}
function _findRegexMatchEnclosingPosition(t, e, n, r) {
  let i;
  for (; i = t.exec(e); ) {
    const s = i.index || 0;
    if (s <= n && t.lastIndex >= n) return i;
    if (r > 0 && s > r) return null;
  }
  return null;
}
var UnicodeTextModelHighlighter = class {
  static computeUnicodeHighlights(t, e, n) {
    const r = n ? n.startLineNumber : 1, i = n ? n.endLineNumber : t.getLineCount(), s = new CodePointHighlighter(e), o = s.getCandidateCodePoints();
    let a;
    o === "allNonBasicAscii" ? a = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : a = new RegExp(`${buildRegExpCharClassExpr(Array.from(o))}`, "g");
    const u = new Searcher(null, a), l = [];
    let f = false, c, m = 0, h = 0, g = 0;
    e: for (let p = r, E = i; p <= E; p++) {
      const d = t.getLineContent(p), w = d.length;
      u.reset(0);
      do
        if (c = u.next(d), c) {
          let b = c.index, N = c.index + c[0].length;
          if (b > 0) {
            const L = d.charCodeAt(b - 1);
            isHighSurrogate(L) && b--;
          }
          if (N + 1 < w) {
            const L = d.charCodeAt(N - 1);
            isHighSurrogate(L) && N++;
          }
          const _ = d.substring(b, N);
          let v = getWordAtText(b + 1, DEFAULT_WORD_REGEXP, d, 0);
          v && v.endColumn <= b + 1 && (v = null);
          const S = s.shouldHighlightNonBasicASCII(_, v ? v.word : null);
          if (S !== 0) {
            if (S === 3 ? m++ : S === 2 ? h++ : S === 1 ? g++ : assertNever(S), l.length >= 1e3) {
              f = true;
              break e;
            }
            l.push(new Range(p, b + 1, p, N + 1));
          }
        }
      while (c);
    }
    return { ranges: l, hasMore: f, ambiguousCharacterCount: m, invisibleCharacterCount: h, nonBasicAsciiCharacterCount: g };
  }
  static computeUnicodeHighlightReason(t, e) {
    const n = new CodePointHighlighter(e);
    switch (n.shouldHighlightNonBasicASCII(t, null)) {
      case 0:
        return null;
      case 2:
        return { kind: 1 };
      case 3: {
        const i = t.codePointAt(0), s = n.ambiguousCharacters.getPrimaryConfusable(i), o = AmbiguousCharacters.getLocales().filter((a) => !AmbiguousCharacters.getInstance(/* @__PURE__ */ new Set([...e.allowedLocales, a])).isAmbiguous(i));
        return { kind: 0, confusableWith: String.fromCodePoint(s), notAmbiguousInLocales: o };
      }
      case 1:
        return { kind: 2 };
    }
  }
};
function buildRegExpCharClassExpr(t, e) {
  return `[${escapeRegExpCharacters(t.map((r) => String.fromCodePoint(r)).join(""))}]`;
}
var CodePointHighlighter = class {
  constructor(t) {
    this.options = t, this.allowedCodePoints = new Set(t.allowedCodePoints), this.ambiguousCharacters = AmbiguousCharacters.getInstance(new Set(t.allowedLocales));
  }
  getCandidateCodePoints() {
    if (this.options.nonBasicASCII) return "allNonBasicAscii";
    const t = /* @__PURE__ */ new Set();
    if (this.options.invisibleCharacters) for (const e of InvisibleCharacters.codePoints) isAllowedInvisibleCharacter(String.fromCodePoint(e)) || t.add(e);
    if (this.options.ambiguousCharacters) for (const e of this.ambiguousCharacters.getConfusableCodePoints()) t.add(e);
    for (const e of this.allowedCodePoints) t.delete(e);
    return t;
  }
  shouldHighlightNonBasicASCII(t, e) {
    const n = t.codePointAt(0);
    if (this.allowedCodePoints.has(n)) return 0;
    if (this.options.nonBasicASCII) return 1;
    let r = false, i = false;
    if (e) for (const s of e) {
      const o = s.codePointAt(0), a = isBasicASCII(s);
      r = r || a, !a && !this.ambiguousCharacters.isAmbiguous(o) && !InvisibleCharacters.isInvisibleCharacter(o) && (i = true);
    }
    return !r && i ? 0 : this.options.invisibleCharacters && !isAllowedInvisibleCharacter(t) && InvisibleCharacters.isInvisibleCharacter(n) ? 2 : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(n) ? 3 : 0;
  }
};
function isAllowedInvisibleCharacter(t) {
  return t === " " || t === `
` || t === "	";
}
var LinesDiff = class {
  constructor(t, e, n) {
    this.changes = t, this.moves = e, this.hitTimeout = n;
  }
}, MovedText = class Bt {
  constructor(e, n) {
    this.lineRangeMapping = e, this.changes = n;
  }
  flip() {
    return new Bt(this.lineRangeMapping.flip(), this.changes.map((e) => e.flip()));
  }
}, OffsetRange = class V {
  constructor(e, n) {
    if (this.start = e, this.endExclusive = n, e > n) throw new BugIndicatingError(`Invalid range: ${this.toString()}`);
  }
  static fromTo(e, n) {
    return new V(e, n);
  }
  static addRange(e, n) {
    let r = 0;
    for (; r < n.length && n[r].endExclusive < e.start; ) r++;
    let i = r;
    for (; i < n.length && n[i].start <= e.endExclusive; ) i++;
    if (r === i) n.splice(r, 0, e);
    else {
      const s = Math.min(e.start, n[r].start), o = Math.max(e.endExclusive, n[i - 1].endExclusive);
      n.splice(r, i - r, new V(s, o));
    }
  }
  static tryCreate(e, n) {
    if (!(e > n)) return new V(e, n);
  }
  static ofLength(e) {
    return new V(0, e);
  }
  static ofStartAndLength(e, n) {
    return new V(e, e + n);
  }
  static emptyAt(e) {
    return new V(e, e);
  }
  get isEmpty() {
    return this.start === this.endExclusive;
  }
  delta(e) {
    return new V(this.start + e, this.endExclusive + e);
  }
  deltaStart(e) {
    return new V(this.start + e, this.endExclusive);
  }
  deltaEnd(e) {
    return new V(this.start, this.endExclusive + e);
  }
  get length() {
    return this.endExclusive - this.start;
  }
  toString() {
    return `[${this.start}, ${this.endExclusive})`;
  }
  equals(e) {
    return this.start === e.start && this.endExclusive === e.endExclusive;
  }
  containsRange(e) {
    return this.start <= e.start && e.endExclusive <= this.endExclusive;
  }
  contains(e) {
    return this.start <= e && e < this.endExclusive;
  }
  join(e) {
    return new V(Math.min(this.start, e.start), Math.max(this.endExclusive, e.endExclusive));
  }
  intersect(e) {
    const n = Math.max(this.start, e.start), r = Math.min(this.endExclusive, e.endExclusive);
    if (n <= r) return new V(n, r);
  }
  intersectionLength(e) {
    const n = Math.max(this.start, e.start), r = Math.min(this.endExclusive, e.endExclusive);
    return Math.max(0, r - n);
  }
  intersects(e) {
    const n = Math.max(this.start, e.start), r = Math.min(this.endExclusive, e.endExclusive);
    return n < r;
  }
  intersectsOrTouches(e) {
    const n = Math.max(this.start, e.start), r = Math.min(this.endExclusive, e.endExclusive);
    return n <= r;
  }
  isBefore(e) {
    return this.endExclusive <= e.start;
  }
  isAfter(e) {
    return this.start >= e.endExclusive;
  }
  slice(e) {
    return e.slice(this.start, this.endExclusive);
  }
  substring(e) {
    return e.substring(this.start, this.endExclusive);
  }
  clip(e) {
    if (this.isEmpty) throw new BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
    return Math.max(this.start, Math.min(this.endExclusive - 1, e));
  }
  clipCyclic(e) {
    if (this.isEmpty) throw new BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
    return e < this.start ? this.endExclusive - (this.start - e) % this.length : e >= this.endExclusive ? this.start + (e - this.start) % this.length : e;
  }
  map(e) {
    const n = [];
    for (let r = this.start; r < this.endExclusive; r++) n.push(e(r));
    return n;
  }
  forEach(e) {
    for (let n = this.start; n < this.endExclusive; n++) e(n);
  }
}, LineRange = class J {
  static fromRange(e) {
    return new J(e.startLineNumber, e.endLineNumber);
  }
  static fromRangeInclusive(e) {
    return new J(e.startLineNumber, e.endLineNumber + 1);
  }
  static subtract(e, n) {
    return n ? e.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < e.endLineNumberExclusive ? [new J(e.startLineNumber, n.startLineNumber), new J(n.endLineNumberExclusive, e.endLineNumberExclusive)] : n.startLineNumber <= e.startLineNumber && e.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < e.endLineNumberExclusive ? [new J(Math.max(n.endLineNumberExclusive, e.startLineNumber), e.endLineNumberExclusive)] : [new J(e.startLineNumber, Math.min(n.startLineNumber, e.endLineNumberExclusive))] : [e];
  }
  static joinMany(e) {
    if (e.length === 0) return [];
    let n = new LineRangeSet(e[0].slice());
    for (let r = 1; r < e.length; r++) n = n.getUnion(new LineRangeSet(e[r].slice()));
    return n.ranges;
  }
  static join(e) {
    if (e.length === 0) throw new BugIndicatingError("lineRanges cannot be empty");
    let n = e[0].startLineNumber, r = e[0].endLineNumberExclusive;
    for (let i = 1; i < e.length; i++) n = Math.min(n, e[i].startLineNumber), r = Math.max(r, e[i].endLineNumberExclusive);
    return new J(n, r);
  }
  static ofLength(e, n) {
    return new J(e, e + n);
  }
  static deserialize(e) {
    return new J(e[0], e[1]);
  }
  constructor(e, n) {
    if (e > n) throw new BugIndicatingError(`startLineNumber ${e} cannot be after endLineNumberExclusive ${n}`);
    this.startLineNumber = e, this.endLineNumberExclusive = n;
  }
  contains(e) {
    return this.startLineNumber <= e && e < this.endLineNumberExclusive;
  }
  get isEmpty() {
    return this.startLineNumber === this.endLineNumberExclusive;
  }
  delta(e) {
    return new J(this.startLineNumber + e, this.endLineNumberExclusive + e);
  }
  deltaLength(e) {
    return new J(this.startLineNumber, this.endLineNumberExclusive + e);
  }
  get length() {
    return this.endLineNumberExclusive - this.startLineNumber;
  }
  join(e) {
    return new J(Math.min(this.startLineNumber, e.startLineNumber), Math.max(this.endLineNumberExclusive, e.endLineNumberExclusive));
  }
  toString() {
    return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
  }
  intersect(e) {
    const n = Math.max(this.startLineNumber, e.startLineNumber), r = Math.min(this.endLineNumberExclusive, e.endLineNumberExclusive);
    if (n <= r) return new J(n, r);
  }
  intersectsStrict(e) {
    return this.startLineNumber < e.endLineNumberExclusive && e.startLineNumber < this.endLineNumberExclusive;
  }
  overlapOrTouch(e) {
    return this.startLineNumber <= e.endLineNumberExclusive && e.startLineNumber <= this.endLineNumberExclusive;
  }
  equals(e) {
    return this.startLineNumber === e.startLineNumber && this.endLineNumberExclusive === e.endLineNumberExclusive;
  }
  toInclusiveRange() {
    return this.isEmpty ? null : new Range(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
  }
  toExclusiveRange() {
    return new Range(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
  }
  mapToLineArray(e) {
    const n = [];
    for (let r = this.startLineNumber; r < this.endLineNumberExclusive; r++) n.push(e(r));
    return n;
  }
  forEach(e) {
    for (let n = this.startLineNumber; n < this.endLineNumberExclusive; n++) e(n);
  }
  serialize() {
    return [this.startLineNumber, this.endLineNumberExclusive];
  }
  includes(e) {
    return this.startLineNumber <= e && e < this.endLineNumberExclusive;
  }
  toOffsetRange() {
    return new OffsetRange(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
  }
  distanceToRange(e) {
    return this.endLineNumberExclusive <= e.startLineNumber ? e.startLineNumber - this.endLineNumberExclusive : e.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - e.endLineNumberExclusive : 0;
  }
  distanceToLine(e) {
    return this.contains(e) ? 0 : e < this.startLineNumber ? this.startLineNumber - e : e - this.endLineNumberExclusive;
  }
  addMargin(e, n) {
    return new J(this.startLineNumber - e, this.endLineNumberExclusive + n);
  }
}, LineRangeSet = class K {
  constructor(e = []) {
    this._normalizedRanges = e;
  }
  get ranges() {
    return this._normalizedRanges;
  }
  addRange(e) {
    if (e.length === 0) return;
    const n = findFirstIdxMonotonousOrArrLen(this._normalizedRanges, (i) => i.endLineNumberExclusive >= e.startLineNumber), r = findLastIdxMonotonous(this._normalizedRanges, (i) => i.startLineNumber <= e.endLineNumberExclusive) + 1;
    if (n === r) this._normalizedRanges.splice(n, 0, e);
    else if (n === r - 1) {
      const i = this._normalizedRanges[n];
      this._normalizedRanges[n] = i.join(e);
    } else {
      const i = this._normalizedRanges[n].join(this._normalizedRanges[r - 1]).join(e);
      this._normalizedRanges.splice(n, r - n, i);
    }
  }
  contains(e) {
    const n = findLastMonotonous(this._normalizedRanges, (r) => r.startLineNumber <= e);
    return !!n && n.endLineNumberExclusive > e;
  }
  intersects(e) {
    const n = findLastMonotonous(this._normalizedRanges, (r) => r.startLineNumber < e.endLineNumberExclusive);
    return !!n && n.endLineNumberExclusive > e.startLineNumber;
  }
  getUnion(e) {
    if (this._normalizedRanges.length === 0) return e;
    if (e._normalizedRanges.length === 0) return this;
    const n = [];
    let r = 0, i = 0, s = null;
    for (; r < this._normalizedRanges.length || i < e._normalizedRanges.length; ) {
      let o = null;
      if (r < this._normalizedRanges.length && i < e._normalizedRanges.length) {
        const a = this._normalizedRanges[r], u = e._normalizedRanges[i];
        a.startLineNumber < u.startLineNumber ? (o = a, r++) : (o = u, i++);
      } else r < this._normalizedRanges.length ? (o = this._normalizedRanges[r], r++) : (o = e._normalizedRanges[i], i++);
      s === null ? s = o : s.endLineNumberExclusive >= o.startLineNumber ? s = new LineRange(s.startLineNumber, Math.max(s.endLineNumberExclusive, o.endLineNumberExclusive)) : (n.push(s), s = o);
    }
    return s !== null && n.push(s), new K(n);
  }
  subtractFrom(e) {
    const n = findFirstIdxMonotonousOrArrLen(this._normalizedRanges, (o) => o.endLineNumberExclusive >= e.startLineNumber), r = findLastIdxMonotonous(this._normalizedRanges, (o) => o.startLineNumber <= e.endLineNumberExclusive) + 1;
    if (n === r) return new K([e]);
    const i = [];
    let s = e.startLineNumber;
    for (let o = n; o < r; o++) {
      const a = this._normalizedRanges[o];
      a.startLineNumber > s && i.push(new LineRange(s, a.startLineNumber)), s = a.endLineNumberExclusive;
    }
    return s < e.endLineNumberExclusive && i.push(new LineRange(s, e.endLineNumberExclusive)), new K(i);
  }
  toString() {
    return this._normalizedRanges.map((e) => e.toString()).join(", ");
  }
  getIntersection(e) {
    const n = [];
    let r = 0, i = 0;
    for (; r < this._normalizedRanges.length && i < e._normalizedRanges.length; ) {
      const s = this._normalizedRanges[r], o = e._normalizedRanges[i], a = s.intersect(o);
      a && !a.isEmpty && n.push(a), s.endLineNumberExclusive < o.endLineNumberExclusive ? r++ : i++;
    }
    return new K(n);
  }
  getWithDelta(e) {
    return new K(this._normalizedRanges.map((n) => n.delta(e)));
  }
}, _TextLength = class C {
  constructor(e, n) {
    this.lineCount = e, this.columnCount = n;
  }
  static lengthDiffNonNegative(e, n) {
    return n.isLessThan(e) ? C.zero : e.lineCount === n.lineCount ? new C(0, n.columnCount - e.columnCount) : new C(n.lineCount - e.lineCount, n.columnCount);
  }
  static betweenPositions(e, n) {
    return e.lineNumber === n.lineNumber ? new C(0, n.column - e.column) : new C(n.lineNumber - e.lineNumber, n.column - 1);
  }
  static fromPosition(e) {
    return new C(e.lineNumber - 1, e.column - 1);
  }
  static ofRange(e) {
    return C.betweenPositions(e.getStartPosition(), e.getEndPosition());
  }
  static ofText(e) {
    let n = 0, r = 0;
    for (const i of e) i === `
` ? (n++, r = 0) : r++;
    return new C(n, r);
  }
  isZero() {
    return this.lineCount === 0 && this.columnCount === 0;
  }
  isLessThan(e) {
    return this.lineCount !== e.lineCount ? this.lineCount < e.lineCount : this.columnCount < e.columnCount;
  }
  isGreaterThan(e) {
    return this.lineCount !== e.lineCount ? this.lineCount > e.lineCount : this.columnCount > e.columnCount;
  }
  isGreaterThanOrEqualTo(e) {
    return this.lineCount !== e.lineCount ? this.lineCount > e.lineCount : this.columnCount >= e.columnCount;
  }
  equals(e) {
    return this.lineCount === e.lineCount && this.columnCount === e.columnCount;
  }
  compare(e) {
    return this.lineCount !== e.lineCount ? this.lineCount - e.lineCount : this.columnCount - e.columnCount;
  }
  add(e) {
    return e.lineCount === 0 ? new C(this.lineCount, this.columnCount + e.columnCount) : new C(this.lineCount + e.lineCount, e.columnCount);
  }
  createRange(e) {
    return this.lineCount === 0 ? new Range(e.lineNumber, e.column, e.lineNumber, e.column + this.columnCount) : new Range(e.lineNumber, e.column, e.lineNumber + this.lineCount, this.columnCount + 1);
  }
  toRange() {
    return new Range(1, 1, this.lineCount + 1, this.columnCount + 1);
  }
  toLineRange() {
    return LineRange.ofLength(1, this.lineCount + 1);
  }
  addToPosition(e) {
    return this.lineCount === 0 ? new Position(e.lineNumber, e.column + this.columnCount) : new Position(e.lineNumber + this.lineCount, this.columnCount + 1);
  }
  addToRange(e) {
    return Range.fromPositions(this.addToPosition(e.getStartPosition()), this.addToPosition(e.getEndPosition()));
  }
  toString() {
    return `${this.lineCount},${this.columnCount}`;
  }
};
_TextLength.zero = new _TextLength(0, 0);
var TextLength = _TextLength, PositionOffsetTransformer = class {
  constructor(t) {
    this.text = t, this.lineStartOffsetByLineIdx = [], this.lineEndOffsetByLineIdx = [], this.lineStartOffsetByLineIdx.push(0);
    for (let e = 0; e < t.length; e++) t.charAt(e) === `
` && (this.lineStartOffsetByLineIdx.push(e + 1), e > 0 && t.charAt(e - 1) === "\r" ? this.lineEndOffsetByLineIdx.push(e - 1) : this.lineEndOffsetByLineIdx.push(e));
    this.lineEndOffsetByLineIdx.push(t.length);
  }
  getOffset(t) {
    const e = this._validatePosition(t);
    return this.lineStartOffsetByLineIdx[e.lineNumber - 1] + e.column - 1;
  }
  _validatePosition(t) {
    if (t.lineNumber < 1) return new Position(1, 1);
    const e = this.textLength.lineCount + 1;
    if (t.lineNumber > e) {
      const r = this.getLineLength(e);
      return new Position(e, r + 1);
    }
    if (t.column < 1) return new Position(t.lineNumber, 1);
    const n = this.getLineLength(t.lineNumber);
    return t.column - 1 > n ? new Position(t.lineNumber, n + 1) : t;
  }
  getOffsetRange(t) {
    return new OffsetRange(this.getOffset(t.getStartPosition()), this.getOffset(t.getEndPosition()));
  }
  getPosition(t) {
    const e = findLastIdxMonotonous(this.lineStartOffsetByLineIdx, (i) => i <= t), n = e + 1, r = t - this.lineStartOffsetByLineIdx[e] + 1;
    return new Position(n, r);
  }
  getRange(t) {
    return Range.fromPositions(this.getPosition(t.start), this.getPosition(t.endExclusive));
  }
  getTextLength(t) {
    return TextLength.ofRange(this.getRange(t));
  }
  get textLength() {
    const t = this.lineStartOffsetByLineIdx.length - 1;
    return new TextLength(t, this.text.length - this.lineStartOffsetByLineIdx[t]);
  }
  getLineLength(t) {
    return this.lineEndOffsetByLineIdx[t - 1] - this.lineStartOffsetByLineIdx[t - 1];
  }
}, TextEdit = class X {
  constructor(e) {
    this.edits = e, assertFn(() => checkAdjacentItems(e, (n, r) => n.range.getEndPosition().isBeforeOrEqual(r.range.getStartPosition())));
  }
  static fromOffsetEdit(e, n) {
    const r = e.edits.map((i) => new SingleTextEdit(n.getTransformer().getRange(i.replaceRange), i.newText));
    return new X(r);
  }
  static single(e, n) {
    return new X([new SingleTextEdit(e, n)]);
  }
  static insert(e, n) {
    return new X([new SingleTextEdit(Range.fromPositions(e, e), n)]);
  }
  normalize() {
    const e = [];
    for (const n of this.edits) if (e.length > 0 && e[e.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
      const r = e[e.length - 1];
      e[e.length - 1] = new SingleTextEdit(r.range.plusRange(n.range), r.text + n.text);
    } else n.isEmpty || e.push(n);
    return new X(e);
  }
  mapPosition(e) {
    let n = 0, r = 0, i = 0;
    for (const s of this.edits) {
      const o = s.range.getStartPosition();
      if (e.isBeforeOrEqual(o)) break;
      const a = s.range.getEndPosition(), u = TextLength.ofText(s.text);
      if (e.isBefore(a)) {
        const l = new Position(o.lineNumber + n, o.column + (o.lineNumber + n === r ? i : 0)), f = u.addToPosition(l);
        return rangeFromPositions(l, f);
      }
      o.lineNumber + n !== r && (i = 0), n += u.lineCount - (s.range.endLineNumber - s.range.startLineNumber), u.lineCount === 0 ? a.lineNumber !== o.lineNumber ? i += u.columnCount - (a.column - 1) : i += u.columnCount - (a.column - o.column) : i = u.columnCount, r = a.lineNumber + n;
    }
    return new Position(e.lineNumber + n, e.column + (e.lineNumber + n === r ? i : 0));
  }
  mapRange(e) {
    function n(o) {
      return o instanceof Position ? o : o.getStartPosition();
    }
    function r(o) {
      return o instanceof Position ? o : o.getEndPosition();
    }
    const i = n(this.mapPosition(e.getStartPosition())), s = r(this.mapPosition(e.getEndPosition()));
    return rangeFromPositions(i, s);
  }
  inverseMapPosition(e, n) {
    return this.inverse(n).mapPosition(e);
  }
  inverseMapRange(e, n) {
    return this.inverse(n).mapRange(e);
  }
  apply(e) {
    let n = "", r = new Position(1, 1);
    for (const s of this.edits) {
      const o = s.range, a = o.getStartPosition(), u = o.getEndPosition(), l = rangeFromPositions(r, a);
      l.isEmpty() || (n += e.getValueOfRange(l)), n += s.text, r = u;
    }
    const i = rangeFromPositions(r, e.endPositionExclusive);
    return i.isEmpty() || (n += e.getValueOfRange(i)), n;
  }
  applyToString(e) {
    const n = new StringText(e);
    return this.apply(n);
  }
  inverse(e) {
    const n = this.getNewRanges();
    return new X(this.edits.map((r, i) => new SingleTextEdit(n[i], e.getValueOfRange(r.range))));
  }
  getNewRanges() {
    const e = [];
    let n = 0, r = 0, i = 0;
    for (const s of this.edits) {
      const o = TextLength.ofText(s.text), a = Position.lift({ lineNumber: s.range.startLineNumber + r, column: s.range.startColumn + (s.range.startLineNumber === n ? i : 0) }), u = o.createRange(a);
      e.push(u), r = u.endLineNumber - s.range.endLineNumber, i = u.endColumn - s.range.endColumn, n = s.range.endLineNumber;
    }
    return e;
  }
  toSingle(e) {
    if (this.edits.length === 0) throw new BugIndicatingError();
    if (this.edits.length === 1) return this.edits[0];
    const n = this.edits[0].range.getStartPosition(), r = this.edits[this.edits.length - 1].range.getEndPosition();
    let i = "";
    for (let s = 0; s < this.edits.length; s++) {
      const o = this.edits[s];
      if (i += o.text, s < this.edits.length - 1) {
        const a = this.edits[s + 1], u = Range.fromPositions(o.range.getEndPosition(), a.range.getStartPosition()), l = e.getValueOfRange(u);
        i += l;
      }
    }
    return new SingleTextEdit(Range.fromPositions(n, r), i);
  }
  equals(e) {
    return equals(this.edits, e.edits, (n, r) => n.equals(r));
  }
}, SingleTextEdit = class se {
  constructor(e, n) {
    this.range = e, this.text = n;
  }
  static joinEdits(e, n) {
    if (e.length === 0) throw new BugIndicatingError();
    if (e.length === 1) return e[0];
    const r = e[0].range.getStartPosition(), i = e[e.length - 1].range.getEndPosition();
    let s = "";
    for (let o = 0; o < e.length; o++) {
      const a = e[o];
      if (s += a.text, o < e.length - 1) {
        const u = e[o + 1], l = Range.fromPositions(a.range.getEndPosition(), u.range.getStartPosition()), f = n.getValueOfRange(l);
        s += f;
      }
    }
    return new se(Range.fromPositions(r, i), s);
  }
  get isEmpty() {
    return this.range.isEmpty() && this.text.length === 0;
  }
  static equals(e, n) {
    return e.range.equalsRange(n.range) && e.text === n.text;
  }
  toSingleEditOperation() {
    return { range: this.range, text: this.text };
  }
  toEdit() {
    return new TextEdit([this]);
  }
  equals(e) {
    return se.equals(this, e);
  }
  extendToCoverRange(e, n) {
    if (this.range.containsRange(e)) return this;
    const r = this.range.plusRange(e), i = n.getValueOfRange(Range.fromPositions(r.getStartPosition(), this.range.getStartPosition())), s = n.getValueOfRange(Range.fromPositions(this.range.getEndPosition(), r.getEndPosition())), o = i + this.text + s;
    return new se(r, o);
  }
  extendToFullLine(e) {
    const n = new Range(this.range.startLineNumber, 1, this.range.endLineNumber, e.getTransformer().getLineLength(this.range.endLineNumber) + 1);
    return this.extendToCoverRange(n, e);
  }
  removeCommonPrefix(e) {
    const n = e.getValueOfRange(this.range).replaceAll(`\r
`, `
`), r = this.text.replaceAll(`\r
`, `
`), i = commonPrefixLength(n, r), s = TextLength.ofText(n.substring(0, i)).addToPosition(this.range.getStartPosition()), o = r.substring(i), a = Range.fromPositions(s, this.range.getEndPosition());
    return new se(a, o);
  }
  isEffectiveDeletion(e) {
    let n = this.text.replaceAll(`\r
`, `
`), r = e.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
    const i = commonPrefixLength(n, r);
    n = n.substring(i), r = r.substring(i);
    const s = commonSuffixLength(n, r);
    return n = n.substring(0, n.length - s), r = r.substring(0, r.length - s), n === "";
  }
};
function rangeFromPositions(t, e) {
  if (t.lineNumber === e.lineNumber && t.column === Number.MAX_SAFE_INTEGER) return Range.fromPositions(e, e);
  if (!t.isBeforeOrEqual(e)) throw new BugIndicatingError("start must be before end");
  return new Range(t.lineNumber, t.column, e.lineNumber, e.column);
}
var AbstractText = class {
  constructor() {
    this._transformer = void 0;
  }
  get endPositionExclusive() {
    return this.length.addToPosition(new Position(1, 1));
  }
  get lineRange() {
    return this.length.toLineRange();
  }
  getValue() {
    return this.getValueOfRange(this.length.toRange());
  }
  getLineLength(t) {
    return this.getValueOfRange(new Range(t, 1, t, Number.MAX_SAFE_INTEGER)).length;
  }
  getTransformer() {
    return this._transformer || (this._transformer = new PositionOffsetTransformer(this.getValue())), this._transformer;
  }
  getLineAt(t) {
    return this.getValueOfRange(new Range(t, 1, t, Number.MAX_SAFE_INTEGER));
  }
  getLines() {
    const t = this.getValue();
    return splitLines(t);
  }
}, LineBasedText = class extends AbstractText {
  constructor(t, e) {
    assert(e >= 1), super(), this._getLineContent = t, this._lineCount = e;
  }
  getValueOfRange(t) {
    if (t.startLineNumber === t.endLineNumber) return this._getLineContent(t.startLineNumber).substring(t.startColumn - 1, t.endColumn - 1);
    let e = this._getLineContent(t.startLineNumber).substring(t.startColumn - 1);
    for (let n = t.startLineNumber + 1; n < t.endLineNumber; n++) e += `
` + this._getLineContent(n);
    return e += `
` + this._getLineContent(t.endLineNumber).substring(0, t.endColumn - 1), e;
  }
  getLineLength(t) {
    return this._getLineContent(t).length;
  }
  get length() {
    const t = this._getLineContent(this._lineCount);
    return new TextLength(this._lineCount - 1, t.length);
  }
}, ArrayText = class extends LineBasedText {
  constructor(t) {
    super((e) => t[e - 1], t.length);
  }
}, StringText = class extends AbstractText {
  constructor(t) {
    super(), this.value = t, this._t = new PositionOffsetTransformer(this.value);
  }
  getValueOfRange(t) {
    return this._t.getOffsetRange(t).substring(this.value);
  }
  get length() {
    return this._t.textLength;
  }
}, LineRangeMapping = class Q {
  static inverse(e, n, r) {
    const i = [];
    let s = 1, o = 1;
    for (const u of e) {
      const l = new Q(new LineRange(s, u.original.startLineNumber), new LineRange(o, u.modified.startLineNumber));
      l.modified.isEmpty || i.push(l), s = u.original.endLineNumberExclusive, o = u.modified.endLineNumberExclusive;
    }
    const a = new Q(new LineRange(s, n + 1), new LineRange(o, r + 1));
    return a.modified.isEmpty || i.push(a), i;
  }
  static clip(e, n, r) {
    const i = [];
    for (const s of e) {
      const o = s.original.intersect(n), a = s.modified.intersect(r);
      o && !o.isEmpty && a && !a.isEmpty && i.push(new Q(o, a));
    }
    return i;
  }
  constructor(e, n) {
    this.original = e, this.modified = n;
  }
  toString() {
    return `{${this.original.toString()}->${this.modified.toString()}}`;
  }
  flip() {
    return new Q(this.modified, this.original);
  }
  join(e) {
    return new Q(this.original.join(e.original), this.modified.join(e.modified));
  }
  get changedLineCount() {
    return Math.max(this.original.length, this.modified.length);
  }
  toRangeMapping() {
    const e = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
    if (e && n) return new RangeMapping(e, n);
    if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
      if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1)) throw new BugIndicatingError("not a valid diff");
      return new RangeMapping(new Range(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new Range(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    } else return new RangeMapping(new Range(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), new Range(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER));
  }
  toRangeMapping2(e, n) {
    if (isValidLineNumber(this.original.endLineNumberExclusive, e) && isValidLineNumber(this.modified.endLineNumberExclusive, n)) return new RangeMapping(new Range(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new Range(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    if (!this.original.isEmpty && !this.modified.isEmpty) return new RangeMapping(Range.fromPositions(new Position(this.original.startLineNumber, 1), normalizePosition(new Position(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), e)), Range.fromPositions(new Position(this.modified.startLineNumber, 1), normalizePosition(new Position(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1) return new RangeMapping(Range.fromPositions(normalizePosition(new Position(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), e), normalizePosition(new Position(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), e)), Range.fromPositions(normalizePosition(new Position(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), normalizePosition(new Position(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    throw new BugIndicatingError();
  }
};
function normalizePosition(t, e) {
  if (t.lineNumber < 1) return new Position(1, 1);
  if (t.lineNumber > e.length) return new Position(e.length, e[e.length - 1].length + 1);
  const n = e[t.lineNumber - 1];
  return t.column > n.length + 1 ? new Position(t.lineNumber, n.length + 1) : t;
}
function isValidLineNumber(t, e) {
  return t >= 1 && t <= e.length;
}
var DetailedLineRangeMapping = class pt extends LineRangeMapping {
  static fromRangeMappings(e) {
    const n = LineRange.join(e.map((i) => LineRange.fromRangeInclusive(i.originalRange))), r = LineRange.join(e.map((i) => LineRange.fromRangeInclusive(i.modifiedRange)));
    return new pt(n, r, e);
  }
  constructor(e, n, r) {
    super(e, n), this.innerChanges = r;
  }
  flip() {
    return new pt(this.modified, this.original, this.innerChanges?.map((e) => e.flip()));
  }
  withInnerChangesFromLineRanges() {
    return new pt(this.original, this.modified, [this.toRangeMapping()]);
  }
}, RangeMapping = class Z {
  static fromEdit(e) {
    const n = e.getNewRanges();
    return e.edits.map((i, s) => new Z(i.range, n[s]));
  }
  static fromEditJoin(e) {
    const n = e.getNewRanges(), r = e.edits.map((i, s) => new Z(i.range, n[s]));
    return Z.join(r);
  }
  static join(e) {
    if (e.length === 0) throw new BugIndicatingError("Cannot join an empty list of range mappings");
    let n = e[0];
    for (let r = 1; r < e.length; r++) n = n.join(e[r]);
    return n;
  }
  static assertSorted(e) {
    for (let n = 1; n < e.length; n++) {
      const r = e[n - 1], i = e[n];
      if (!(r.originalRange.getEndPosition().isBeforeOrEqual(i.originalRange.getStartPosition()) && r.modifiedRange.getEndPosition().isBeforeOrEqual(i.modifiedRange.getStartPosition()))) throw new BugIndicatingError("Range mappings must be sorted");
    }
  }
  constructor(e, n) {
    this.originalRange = e, this.modifiedRange = n;
  }
  toString() {
    return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
  }
  flip() {
    return new Z(this.modifiedRange, this.originalRange);
  }
  toTextEdit(e) {
    const n = e.getValueOfRange(this.modifiedRange);
    return new SingleTextEdit(this.originalRange, n);
  }
  join(e) {
    return new Z(this.originalRange.plusRange(e.originalRange), this.modifiedRange.plusRange(e.modifiedRange));
  }
};
function lineRangeMappingFromRangeMappings(t, e, n, r = false) {
  const i = [];
  for (const s of groupAdjacentBy(t.map((o) => getLineRangeMapping(o, e, n)), (o, a) => o.original.overlapOrTouch(a.original) || o.modified.overlapOrTouch(a.modified))) {
    const o = s[0], a = s[s.length - 1];
    i.push(new DetailedLineRangeMapping(o.original.join(a.original), o.modified.join(a.modified), s.map((u) => u.innerChanges[0])));
  }
  return assertFn(() => !r && i.length > 0 && (i[0].modified.startLineNumber !== i[0].original.startLineNumber || n.length.lineCount - i[i.length - 1].modified.endLineNumberExclusive !== e.length.lineCount - i[i.length - 1].original.endLineNumberExclusive) ? false : checkAdjacentItems(i, (s, o) => o.original.startLineNumber - s.original.endLineNumberExclusive === o.modified.startLineNumber - s.modified.endLineNumberExclusive && s.original.endLineNumberExclusive < o.original.startLineNumber && s.modified.endLineNumberExclusive < o.modified.startLineNumber)), i;
}
function getLineRangeMapping(t, e, n) {
  let r = 0, i = 0;
  t.modifiedRange.endColumn === 1 && t.originalRange.endColumn === 1 && t.originalRange.startLineNumber + r <= t.originalRange.endLineNumber && t.modifiedRange.startLineNumber + r <= t.modifiedRange.endLineNumber && (i = -1), t.modifiedRange.startColumn - 1 >= n.getLineLength(t.modifiedRange.startLineNumber) && t.originalRange.startColumn - 1 >= e.getLineLength(t.originalRange.startLineNumber) && t.originalRange.startLineNumber <= t.originalRange.endLineNumber + i && t.modifiedRange.startLineNumber <= t.modifiedRange.endLineNumber + i && (r = 1);
  const s = new LineRange(t.originalRange.startLineNumber + r, t.originalRange.endLineNumber + 1 + i), o = new LineRange(t.modifiedRange.startLineNumber + r, t.modifiedRange.endLineNumber + 1 + i);
  return new DetailedLineRangeMapping(s, o, [t]);
}
var MINIMUM_MATCHING_CHARACTER_LENGTH = 3, MAXIMUM_CHAR_DIFF_CHUNK_LENGTH = 1e5, LegacyLinesDiffComputer = class {
  computeDiff(t, e, n) {
    const i = new DiffComputer(t, e, { maxComputationTime: n.maxComputationTimeMs, shouldIgnoreTrimWhitespace: n.ignoreTrimWhitespace, shouldComputeCharChanges: true, shouldMakePrettyDiff: true, shouldPostProcessCharChanges: true }).computeDiff(), s = [];
    let o = null;
    for (const a of i.changes) {
      let u;
      a.originalEndLineNumber === 0 ? u = new LineRange(a.originalStartLineNumber + 1, a.originalStartLineNumber + 1) : u = new LineRange(a.originalStartLineNumber, a.originalEndLineNumber + 1);
      let l;
      a.modifiedEndLineNumber === 0 ? l = new LineRange(a.modifiedStartLineNumber + 1, a.modifiedStartLineNumber + 1) : l = new LineRange(a.modifiedStartLineNumber, a.modifiedEndLineNumber + 1);
      let f = new DetailedLineRangeMapping(u, l, a.charChanges?.map((c) => new RangeMapping(new Range(c.originalStartLineNumber, c.originalStartColumn, c.originalEndLineNumber, c.originalEndColumn), new Range(c.modifiedStartLineNumber, c.modifiedStartColumn, c.modifiedEndLineNumber, c.modifiedEndColumn))));
      o && (o.modified.endLineNumberExclusive === f.modified.startLineNumber || o.original.endLineNumberExclusive === f.original.startLineNumber) && (f = new DetailedLineRangeMapping(o.original.join(f.original), o.modified.join(f.modified), o.innerChanges && f.innerChanges ? o.innerChanges.concat(f.innerChanges) : void 0), s.pop()), s.push(f), o = f;
    }
    return assertFn(() => checkAdjacentItems(s, (a, u) => u.original.startLineNumber - a.original.endLineNumberExclusive === u.modified.startLineNumber - a.modified.endLineNumberExclusive && a.original.endLineNumberExclusive < u.original.startLineNumber && a.modified.endLineNumberExclusive < u.modified.startLineNumber)), new LinesDiff(s, [], i.quitEarly);
  }
};
function computeDiff(t, e, n, r) {
  return new LcsDiff(t, e, n).ComputeDiff(r);
}
var LineSequence = class {
  constructor(t) {
    const e = [], n = [];
    for (let r = 0, i = t.length; r < i; r++) e[r] = getFirstNonBlankColumn(t[r], 1), n[r] = getLastNonBlankColumn(t[r], 1);
    this.lines = t, this._startColumns = e, this._endColumns = n;
  }
  getElements() {
    const t = [];
    for (let e = 0, n = this.lines.length; e < n; e++) t[e] = this.lines[e].substring(this._startColumns[e] - 1, this._endColumns[e] - 1);
    return t;
  }
  getStrictElement(t) {
    return this.lines[t];
  }
  getStartLineNumber(t) {
    return t + 1;
  }
  getEndLineNumber(t) {
    return t + 1;
  }
  getCharLength(t, e, n) {
    let r = 0;
    for (let i = e; i <= n; i++) t ? r += this._endColumns[i] - this._startColumns[i] : (r += this.lines[i].length, i < n && (r += 1));
    return r;
  }
  createCharSequence(t, e, n) {
    const r = [], i = [], s = [];
    let o = 0;
    for (let a = e; a <= n; a++) {
      const u = this.lines[a], l = t ? this._startColumns[a] : 1, f = t ? this._endColumns[a] : u.length + 1;
      for (let c = l; c < f; c++) r[o] = u.charCodeAt(c - 1), i[o] = a + 1, s[o] = c, o++;
      !t && a < n && (r[o] = CharCode.LineFeed, i[o] = a + 1, s[o] = u.length + 1, o++);
    }
    return new CharSequence(r, i, s);
  }
}, CharSequence = class {
  constructor(t, e, n) {
    this._charCodes = t, this._lineNumbers = e, this._columns = n;
  }
  toString() {
    return "[" + this._charCodes.map((t, e) => (t === CharCode.LineFeed ? "\\n" : String.fromCharCode(t)) + `-(${this._lineNumbers[e]},${this._columns[e]})`).join(", ") + "]";
  }
  _assertIndex(t, e) {
    if (t < 0 || t >= e.length) throw new Error("Illegal index");
  }
  getElements() {
    return this._charCodes;
  }
  getStartLineNumber(t) {
    return t > 0 && t === this._lineNumbers.length ? this.getEndLineNumber(t - 1) : (this._assertIndex(t, this._lineNumbers), this._lineNumbers[t]);
  }
  getEndLineNumber(t) {
    return t === -1 ? this.getStartLineNumber(t + 1) : (this._assertIndex(t, this._lineNumbers), this._charCodes[t] === CharCode.LineFeed ? this._lineNumbers[t] + 1 : this._lineNumbers[t]);
  }
  getStartColumn(t) {
    return t > 0 && t === this._columns.length ? this.getEndColumn(t - 1) : (this._assertIndex(t, this._columns), this._columns[t]);
  }
  getEndColumn(t) {
    return t === -1 ? this.getStartColumn(t + 1) : (this._assertIndex(t, this._columns), this._charCodes[t] === CharCode.LineFeed ? 1 : this._columns[t] + 1);
  }
}, CharChange = class Ft {
  constructor(e, n, r, i, s, o, a, u) {
    this.originalStartLineNumber = e, this.originalStartColumn = n, this.originalEndLineNumber = r, this.originalEndColumn = i, this.modifiedStartLineNumber = s, this.modifiedStartColumn = o, this.modifiedEndLineNumber = a, this.modifiedEndColumn = u;
  }
  static createFromDiffChange(e, n, r) {
    const i = n.getStartLineNumber(e.originalStart), s = n.getStartColumn(e.originalStart), o = n.getEndLineNumber(e.originalStart + e.originalLength - 1), a = n.getEndColumn(e.originalStart + e.originalLength - 1), u = r.getStartLineNumber(e.modifiedStart), l = r.getStartColumn(e.modifiedStart), f = r.getEndLineNumber(e.modifiedStart + e.modifiedLength - 1), c = r.getEndColumn(e.modifiedStart + e.modifiedLength - 1);
    return new Ft(i, s, o, a, u, l, f, c);
  }
};
function postProcessCharChanges(t) {
  if (t.length <= 1) return t;
  const e = [t[0]];
  let n = e[0];
  for (let r = 1, i = t.length; r < i; r++) {
    const s = t[r], o = s.originalStart - (n.originalStart + n.originalLength), a = s.modifiedStart - (n.modifiedStart + n.modifiedLength);
    Math.min(o, a) < MINIMUM_MATCHING_CHARACTER_LENGTH ? (n.originalLength = s.originalStart + s.originalLength - n.originalStart, n.modifiedLength = s.modifiedStart + s.modifiedLength - n.modifiedStart) : (e.push(s), n = s);
  }
  return e;
}
var LineChange = class qt {
  constructor(e, n, r, i, s) {
    this.originalStartLineNumber = e, this.originalEndLineNumber = n, this.modifiedStartLineNumber = r, this.modifiedEndLineNumber = i, this.charChanges = s;
  }
  static createFromDiffResult(e, n, r, i, s, o, a) {
    let u, l, f, c, m;
    if (n.originalLength === 0 ? (u = r.getStartLineNumber(n.originalStart) - 1, l = 0) : (u = r.getStartLineNumber(n.originalStart), l = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (f = i.getStartLineNumber(n.modifiedStart) - 1, c = 0) : (f = i.getStartLineNumber(n.modifiedStart), c = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), o && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && r.getCharLength(e, n.originalStart, n.originalStart + n.originalLength - 1) <= MAXIMUM_CHAR_DIFF_CHUNK_LENGTH && i.getCharLength(e, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1) <= MAXIMUM_CHAR_DIFF_CHUNK_LENGTH && s()) {
      const h = r.createCharSequence(e, n.originalStart, n.originalStart + n.originalLength - 1), g = i.createCharSequence(e, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
      if (h.getElements().length > 0 && g.getElements().length > 0) {
        let p = computeDiff(h, g, s, true).changes;
        a && (p = postProcessCharChanges(p)), m = [];
        for (let E = 0, d = p.length; E < d; E++) m.push(CharChange.createFromDiffChange(p[E], h, g));
      }
    }
    return new qt(u, l, f, c, m);
  }
}, DiffComputer = class {
  constructor(t, e, n) {
    this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.originalLines = t, this.modifiedLines = e, this.original = new LineSequence(t), this.modified = new LineSequence(e), this.continueLineDiff = createContinueProcessingPredicate(n.maxComputationTime), this.continueCharDiff = createContinueProcessingPredicate(n.maxComputationTime === 0 ? 0 : Math.min(n.maxComputationTime, 5e3));
  }
  computeDiff() {
    if (this.original.lines.length === 1 && this.original.lines[0].length === 0) return this.modified.lines.length === 1 && this.modified.lines[0].length === 0 ? { quitEarly: false, changes: [] } : { quitEarly: false, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: 1, modifiedStartLineNumber: 1, modifiedEndLineNumber: this.modified.lines.length, charChanges: void 0 }] };
    if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) return { quitEarly: false, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: this.original.lines.length, modifiedStartLineNumber: 1, modifiedEndLineNumber: 1, charChanges: void 0 }] };
    const t = computeDiff(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), e = t.changes, n = t.quitEarly;
    if (this.shouldIgnoreTrimWhitespace) {
      const o = [];
      for (let a = 0, u = e.length; a < u; a++) o.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, e[a], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
      return { quitEarly: n, changes: o };
    }
    const r = [];
    let i = 0, s = 0;
    for (let o = -1, a = e.length; o < a; o++) {
      const u = o + 1 < a ? e[o + 1] : null, l = u ? u.originalStart : this.originalLines.length, f = u ? u.modifiedStart : this.modifiedLines.length;
      for (; i < l && s < f; ) {
        const c = this.originalLines[i], m = this.modifiedLines[s];
        if (c !== m) {
          {
            let h = getFirstNonBlankColumn(c, 1), g = getFirstNonBlankColumn(m, 1);
            for (; h > 1 && g > 1; ) {
              const p = c.charCodeAt(h - 2), E = m.charCodeAt(g - 2);
              if (p !== E) break;
              h--, g--;
            }
            (h > 1 || g > 1) && this._pushTrimWhitespaceCharChange(r, i + 1, 1, h, s + 1, 1, g);
          }
          {
            let h = getLastNonBlankColumn(c, 1), g = getLastNonBlankColumn(m, 1);
            const p = c.length + 1, E = m.length + 1;
            for (; h < p && g < E; ) {
              const d = c.charCodeAt(h - 1), w = c.charCodeAt(g - 1);
              if (d !== w) break;
              h++, g++;
            }
            (h < p || g < E) && this._pushTrimWhitespaceCharChange(r, i + 1, h, p, s + 1, g, E);
          }
        }
        i++, s++;
      }
      u && (r.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, u, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), i += u.originalLength, s += u.modifiedLength);
    }
    return { quitEarly: n, changes: r };
  }
  _pushTrimWhitespaceCharChange(t, e, n, r, i, s, o) {
    if (this._mergeTrimWhitespaceCharChange(t, e, n, r, i, s, o)) return;
    let a;
    this.shouldComputeCharChanges && (a = [new CharChange(e, n, e, r, i, s, i, o)]), t.push(new LineChange(e, e, i, i, a));
  }
  _mergeTrimWhitespaceCharChange(t, e, n, r, i, s, o) {
    const a = t.length;
    if (a === 0) return false;
    const u = t[a - 1];
    return u.originalEndLineNumber === 0 || u.modifiedEndLineNumber === 0 ? false : u.originalEndLineNumber === e && u.modifiedEndLineNumber === i ? (this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new CharChange(e, n, e, r, i, s, i, o)), true) : u.originalEndLineNumber + 1 === e && u.modifiedEndLineNumber + 1 === i ? (u.originalEndLineNumber = e, u.modifiedEndLineNumber = i, this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new CharChange(e, n, e, r, i, s, i, o)), true) : false;
  }
};
function getFirstNonBlankColumn(t, e) {
  const n = firstNonWhitespaceIndex(t);
  return n === -1 ? e : n + 1;
}
function getLastNonBlankColumn(t, e) {
  const n = lastNonWhitespaceIndex(t);
  return n === -1 ? e : n + 2;
}
function createContinueProcessingPredicate(t) {
  if (t === 0) return () => true;
  const e = Date.now();
  return () => Date.now() - e < t;
}
var DiffAlgorithmResult = class yt {
  constructor(e, n) {
    this.diffs = e, this.hitTimeout = n;
  }
  static trivial(e, n) {
    return new yt([new SequenceDiff(OffsetRange.ofLength(e.length), OffsetRange.ofLength(n.length))], false);
  }
  static trivialTimedOut(e, n) {
    return new yt([new SequenceDiff(OffsetRange.ofLength(e.length), OffsetRange.ofLength(n.length))], true);
  }
}, SequenceDiff = class W {
  constructor(e, n) {
    this.seq1Range = e, this.seq2Range = n;
  }
  static invert(e, n) {
    const r = [];
    return forEachAdjacent(e, (i, s) => {
      r.push(W.fromOffsetPairs(i ? i.getEndExclusives() : OffsetPair.zero, s ? s.getStarts() : new OffsetPair(n, (i ? i.seq2Range.endExclusive - i.seq1Range.endExclusive : 0) + n)));
    }), r;
  }
  static fromOffsetPairs(e, n) {
    return new W(new OffsetRange(e.offset1, n.offset1), new OffsetRange(e.offset2, n.offset2));
  }
  static assertSorted(e) {
    let n;
    for (const r of e) {
      if (n && !(n.seq1Range.endExclusive <= r.seq1Range.start && n.seq2Range.endExclusive <= r.seq2Range.start)) throw new BugIndicatingError("Sequence diffs must be sorted");
      n = r;
    }
  }
  swap() {
    return new W(this.seq2Range, this.seq1Range);
  }
  toString() {
    return `${this.seq1Range} <-> ${this.seq2Range}`;
  }
  join(e) {
    return new W(this.seq1Range.join(e.seq1Range), this.seq2Range.join(e.seq2Range));
  }
  delta(e) {
    return e === 0 ? this : new W(this.seq1Range.delta(e), this.seq2Range.delta(e));
  }
  deltaStart(e) {
    return e === 0 ? this : new W(this.seq1Range.deltaStart(e), this.seq2Range.deltaStart(e));
  }
  deltaEnd(e) {
    return e === 0 ? this : new W(this.seq1Range.deltaEnd(e), this.seq2Range.deltaEnd(e));
  }
  intersectsOrTouches(e) {
    return this.seq1Range.intersectsOrTouches(e.seq1Range) || this.seq2Range.intersectsOrTouches(e.seq2Range);
  }
  intersect(e) {
    const n = this.seq1Range.intersect(e.seq1Range), r = this.seq2Range.intersect(e.seq2Range);
    if (!(!n || !r)) return new W(n, r);
  }
  getStarts() {
    return new OffsetPair(this.seq1Range.start, this.seq2Range.start);
  }
  getEndExclusives() {
    return new OffsetPair(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
  }
}, _OffsetPair = class Jt {
  constructor(e, n) {
    this.offset1 = e, this.offset2 = n;
  }
  toString() {
    return `${this.offset1} <-> ${this.offset2}`;
  }
  delta(e) {
    return e === 0 ? this : new Jt(this.offset1 + e, this.offset2 + e);
  }
  equals(e) {
    return this.offset1 === e.offset1 && this.offset2 === e.offset2;
  }
};
_OffsetPair.zero = new _OffsetPair(0, 0), _OffsetPair.max = new _OffsetPair(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
var OffsetPair = _OffsetPair, _InfiniteTimeout = class {
  isValid() {
    return true;
  }
};
_InfiniteTimeout.instance = new _InfiniteTimeout();
var InfiniteTimeout = _InfiniteTimeout, DateTimeout = class {
  constructor(t, e) {
    if (this.timeout = t, this.shouldGracefullyFallBackOnTimeout = e, this.startTime = Date.now(), this.numChecks = 0, this.valid = true, t <= 0) throw new BugIndicatingError("timeout must be positive");
    this.expireTime = this.startTime + t;
  }
  isValid() {
    return this.numChecks++, this.valid === false || this.numChecks % 25 != 0 ? this.valid : (!(Date.now() < this.expireTime) && this.valid && (this.valid = false), this.valid);
  }
  disable() {
    this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = () => true, this.valid = true;
  }
}, Array2D = class {
  constructor(t, e) {
    this.width = t, this.height = e, this.array = [], this.array = new Array(t * e);
  }
  get(t, e) {
    return this.array[t + e * this.width];
  }
  set(t, e, n) {
    this.array[t + e * this.width] = n;
  }
};
function isSpace(t) {
  return t === CharCode.Space || t === CharCode.Tab;
}
var _LineRangeFragment = class It {
  constructor(e, n, r) {
    this.range = e, this.lines = n, this.source = r, this.histogram = [];
    let i = 0;
    for (let s = e.startLineNumber - 1; s < e.endLineNumberExclusive - 1; s++) {
      const o = n[s];
      for (let u = 0; u < o.length; u++) {
        i++;
        const l = o[u], f = It.getKey(l);
        this.histogram[f] = (this.histogram[f] || 0) + 1;
      }
      i++;
      const a = It.getKey(`
`);
      this.histogram[a] = (this.histogram[a] || 0) + 1;
    }
    this.totalCount = i;
  }
  static getKey(e) {
    let n = this.chrKeys.get(e);
    return n === void 0 && (n = this.chrKeys.size, this.chrKeys.set(e, n)), n;
  }
  computeSimilarity(e) {
    let n = 0;
    const r = Math.max(this.histogram.length, e.histogram.length);
    for (let i = 0; i < r; i++) n += Math.abs((this.histogram[i] ?? 0) - (e.histogram[i] ?? 0));
    return 1 - n / (this.totalCount + e.totalCount);
  }
};
_LineRangeFragment.chrKeys = /* @__PURE__ */ new Map();
var LineRangeFragment = _LineRangeFragment, StreamingDPDiffing = class {
  compute(t, e, n = InfiniteTimeout.instance, r) {
    if (t.length === 0 || e.length === 0) return DiffAlgorithmResult.trivial(t, e);
    const i = new Array2D(2 * t.length + 1, e.length + 1), s = new Array2D(2 * t.length + 1, e.length + 1);
    for (let m = 0; m <= e.length; m++) i.set(0, m, m), m > 0 ? s.set(0, m, true) : s.set(0, m, false);
    for (let m = 0; m <= 2 * t.length; m++) i.set(m, 0, Math.floor((m + 1) / 2)), s.set(m, 0, false);
    for (let m = 1; m <= e.length; m++) for (let h = 1; h <= 2 * t.length; h++) {
      if (!n.isValid()) return DiffAlgorithmResult.trivialTimedOut(t, e);
      if (h % 2 === 0) {
        const g = i.get(h, m - 1) + 1, p = i.get(h - 1, m);
        g < p ? (i.set(h, m, g), s.set(h, m, true)) : (i.set(h, m, p), s.set(h, m, false));
      } else {
        const g = i.get(h - 1, m) + 0.4, p = t.getElement(Math.floor(h / 2)) === e.getElement(m - 1) ? i.get(h - 1, m - 1) : Number.MAX_VALUE;
        p < g ? (i.set(h, m, p), s.set(h, m, true)) : (i.set(h, m, g), s.set(h, m, false));
      }
    }
    let o = Number.MAX_VALUE, a = -1;
    for (let m = 0; m <= 2 * t.length; m++) {
      const h = i.get(m, e.length);
      h < o && (o = h, a = m);
    }
    let u = [], l = a, f = e.length;
    l <= 2 * t.length - 2 && u.push(new SequenceDiff(new OffsetRange(Math.floor((l + 1) / 2), t.length), new OffsetRange(f, f)));
    let c;
    for (; l >= 0 && f >= 0; ) s.get(l, f) ? l % 2 === 0 ? (c === void 0 && (c = { x: Math.floor(l / 2), y: f }), f -= 1) : (c !== void 0 && ((c.x !== Math.floor(l / 2) + 1 || c.y !== f) && u.push(new SequenceDiff(new OffsetRange(Math.floor(l / 2) + 1, c.x), new OffsetRange(f, c.y))), c = void 0), l -= 1, f -= 1) : (l % 2, c === void 0 && (c = { x: Math.floor((l + 1) / 2), y: f }), l -= 1);
    return c !== void 0 && ((c.x !== Math.floor(l / 2) + 1 || c.y !== f) && u.push(new SequenceDiff(new OffsetRange(Math.floor(l / 2) + 1, c.x), new OffsetRange(f, c.y))), c = void 0), u.reverse(), new DiffAlgorithmResult(u, false);
  }
}, DynamicProgrammingDiffing = class {
  compute(t, e, n = InfiniteTimeout.instance, r) {
    if (t.length === 0 || e.length === 0) return DiffAlgorithmResult.trivial(t, e);
    const i = new Array2D(t.length, e.length), s = new Array2D(t.length, e.length), o = new Array2D(t.length, e.length);
    for (let h = 0; h < t.length; h++) for (let g = 0; g < e.length; g++) {
      if (!n.isValid()) return DiffAlgorithmResult.trivialTimedOut(t, e);
      const p = h === 0 ? 0 : i.get(h - 1, g), E = g === 0 ? 0 : i.get(h, g - 1);
      let d;
      t.getElement(h) === e.getElement(g) ? (h === 0 || g === 0 ? d = 0 : d = i.get(h - 1, g - 1), h > 0 && g > 0 && s.get(h - 1, g - 1) === 3 && (d += o.get(h - 1, g - 1)), d += r ? r(h, g) : 1) : d = -1;
      const w = Math.max(p, E, d);
      if (w === d) {
        const b = h > 0 && g > 0 ? o.get(h - 1, g - 1) : 0;
        o.set(h, g, b + 1), s.set(h, g, 3);
      } else w === p ? (o.set(h, g, 0), s.set(h, g, 1)) : w === E && (o.set(h, g, 0), s.set(h, g, 2));
      i.set(h, g, w);
    }
    const a = [];
    let u = t.length, l = e.length;
    function f(h, g) {
      (h + 1 !== u || g + 1 !== l) && a.push(new SequenceDiff(new OffsetRange(h + 1, u), new OffsetRange(g + 1, l))), u = h, l = g;
    }
    let c = t.length - 1, m = e.length - 1;
    for (; c >= 0 && m >= 0; ) s.get(c, m) === 3 ? (f(c, m), c--, m--) : s.get(c, m) === 1 ? c-- : m--;
    return f(-1, -1), a.reverse(), new DiffAlgorithmResult(a, false);
  }
}, MyersDiffAlgorithm = class {
  compute(t, e, n = InfiniteTimeout.instance) {
    if (t.length === 0 || e.length === 0) return DiffAlgorithmResult.trivial(t, e);
    const r = t, i = e;
    function s(g, p) {
      for (; g < r.length && p < i.length && r.getElement(g) === i.getElement(p); ) g++, p++;
      return g;
    }
    let o = 0;
    const a = new FastInt32Array();
    a.set(0, s(0, 0));
    const u = new FastArrayNegativeIndices();
    u.set(0, a.get(0) === 0 ? null : new SnakePath(null, 0, 0, a.get(0)));
    let l = 0;
    e: for (; ; ) {
      if (o++, !n.isValid()) return DiffAlgorithmResult.trivialTimedOut(r, i);
      const g = -Math.min(o, i.length + o % 2), p = Math.min(o, r.length + o % 2);
      for (l = g; l <= p; l += 2) {
        if (!n.isValid()) return DiffAlgorithmResult.trivialTimedOut(r, i);
        let E = 0;
        const d = l === p ? -1 : a.get(l + 1), w = l === g ? -1 : a.get(l - 1) + 1;
        E++;
        const b = Math.min(Math.max(d, w), r.length), N = b - l;
        if (E++, b > r.length || N > i.length) continue;
        const _ = s(b, N);
        a.set(l, _);
        const v = b === d ? u.get(l + 1) : u.get(l - 1);
        if (u.set(l, _ !== b ? new SnakePath(v, b, N, _ - b) : v), a.get(l) === r.length && a.get(l) - l === i.length) break e;
      }
    }
    let f = u.get(l);
    const c = [];
    let m = r.length, h = i.length;
    for (; ; ) {
      const g = f ? f.x + f.length : 0, p = f ? f.y + f.length : 0;
      if ((g !== m || p !== h) && c.push(new SequenceDiff(new OffsetRange(g, m), new OffsetRange(p, h))), !f) break;
      m = f.x, h = f.y, f = f.prev;
    }
    return c.reverse(), new DiffAlgorithmResult(c, false);
  }
}, SnakePath = class {
  constructor(t, e, n, r) {
    this.prev = t, this.x = e, this.y = n, this.length = r;
  }
}, FastInt32Array = class {
  constructor() {
    this.positiveArr = new Int32Array(10), this.negativeArr = new Int32Array(10);
  }
  get(t) {
    return t < 0 ? (t = -t - 1, this.negativeArr[t]) : this.positiveArr[t];
  }
  set(t, e) {
    if (t < 0) {
      if (t = -t - 1, t >= this.negativeArr.length) {
        const n = this.negativeArr;
        this.negativeArr = new Int32Array(n.length * 2), this.negativeArr.set(n);
      }
      this.negativeArr[t] = e;
    } else {
      if (t >= this.positiveArr.length) {
        const n = this.positiveArr;
        this.positiveArr = new Int32Array(n.length * 2), this.positiveArr.set(n);
      }
      this.positiveArr[t] = e;
    }
  }
}, FastArrayNegativeIndices = class {
  constructor() {
    this.positiveArr = [], this.negativeArr = [];
  }
  get(t) {
    return t < 0 ? (t = -t - 1, this.negativeArr[t]) : this.positiveArr[t];
  }
  set(t, e) {
    t < 0 ? (t = -t - 1, this.negativeArr[t] = e) : this.positiveArr[t] = e;
  }
}, LinesSliceCharSequence = class {
  constructor(t, e, n) {
    this.lines = t, this.range = e, this.considerWhitespaceChanges = n, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
    for (let r = this.range.startLineNumber; r <= this.range.endLineNumber; r++) {
      let i = t[r - 1], s = 0;
      r === this.range.startLineNumber && this.range.startColumn > 1 && (s = this.range.startColumn - 1, i = i.substring(s)), this.lineStartOffsets.push(s);
      let o = 0;
      if (!n) {
        const u = i.trimStart();
        o = i.length - u.length, i = u.trimEnd();
      }
      this.trimmedWsLengthsByLineIdx.push(o);
      const a = r === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - s - o, i.length) : i.length;
      for (let u = 0; u < a; u++) this.elements.push(i.charCodeAt(u));
      r < this.range.endLineNumber && (this.elements.push(10), this.firstElementOffsetByLineIdx.push(this.elements.length));
    }
  }
  toString() {
    return `Slice: "${this.text}"`;
  }
  get text() {
    return this.getText(new OffsetRange(0, this.length));
  }
  getText(t) {
    return this.elements.slice(t.start, t.endExclusive).map((e) => String.fromCharCode(e)).join("");
  }
  getElement(t) {
    return this.elements[t];
  }
  get length() {
    return this.elements.length;
  }
  getBoundaryScore(t) {
    const e = getCategory(t > 0 ? this.elements[t - 1] : -1), n = getCategory(t < this.elements.length ? this.elements[t] : -1);
    if (e === 7 && n === 8) return 0;
    if (e === 8) return 150;
    let r = 0;
    return e !== n && (r += 10, e === 0 && n === 1 && (r += 1)), r += getCategoryBoundaryScore(e), r += getCategoryBoundaryScore(n), r;
  }
  translateOffset(t, e = "right") {
    const n = findLastIdxMonotonous(this.firstElementOffsetByLineIdx, (i) => i <= t), r = t - this.firstElementOffsetByLineIdx[n];
    return new Position(this.range.startLineNumber + n, 1 + this.lineStartOffsets[n] + r + (r === 0 && e === "left" ? 0 : this.trimmedWsLengthsByLineIdx[n]));
  }
  translateRange(t) {
    const e = this.translateOffset(t.start, "right"), n = this.translateOffset(t.endExclusive, "left");
    return n.isBefore(e) ? Range.fromPositions(n, n) : Range.fromPositions(e, n);
  }
  findWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !isWordChar(this.elements[t])) return;
    let e = t;
    for (; e > 0 && isWordChar(this.elements[e - 1]); ) e--;
    let n = t;
    for (; n < this.elements.length && isWordChar(this.elements[n]); ) n++;
    return new OffsetRange(e, n);
  }
  findSubWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !isWordChar(this.elements[t])) return;
    let e = t;
    for (; e > 0 && isWordChar(this.elements[e - 1]) && !isUpperCase(this.elements[e]); ) e--;
    let n = t;
    for (; n < this.elements.length && isWordChar(this.elements[n]) && !isUpperCase(this.elements[n]); ) n++;
    return new OffsetRange(e, n);
  }
  countLinesIn(t) {
    return this.translateOffset(t.endExclusive).lineNumber - this.translateOffset(t.start).lineNumber;
  }
  isStronglyEqual(t, e) {
    return this.elements[t] === this.elements[e];
  }
  extendToFullLines(t) {
    const e = findLastMonotonous(this.firstElementOffsetByLineIdx, (r) => r <= t.start) ?? 0, n = findFirstMonotonous(this.firstElementOffsetByLineIdx, (r) => t.endExclusive <= r) ?? this.elements.length;
    return new OffsetRange(e, n);
  }
};
function isWordChar(t) {
  return t >= CharCode.a && t <= CharCode.z || t >= CharCode.A && t <= CharCode.Z || t >= CharCode.Digit0 && t <= CharCode.Digit9;
}
function isUpperCase(t) {
  return t >= CharCode.A && t <= CharCode.Z;
}
var score = { 0: 0, 1: 0, 2: 0, 3: 10, 4: 2, 5: 30, 6: 3, 7: 10, 8: 10 };
function getCategoryBoundaryScore(t) {
  return score[t];
}
function getCategory(t) {
  return t === CharCode.LineFeed ? 8 : t === CharCode.CarriageReturn ? 7 : isSpace(t) ? 6 : t >= CharCode.a && t <= CharCode.z ? 0 : t >= CharCode.A && t <= CharCode.Z ? 1 : t >= CharCode.Digit0 && t <= CharCode.Digit9 ? 2 : t === -1 ? 3 : t === CharCode.Comma || t === CharCode.Semicolon ? 5 : 4;
}
function computeMovedLines(t, e, n, r, i, s) {
  let { moves: o, excludedChanges: a } = computeMovesFromSimpleDeletionsToSimpleInsertions(t, e, n, s);
  if (!s.isValid()) return [];
  const u = t.filter((f) => !a.has(f)), l = computeUnchangedMoves(u, r, i, e, n, s);
  return pushMany(o, l), o = joinCloseConsecutiveMoves(o), o = o.filter((f) => {
    const c = f.original.toOffsetRange().slice(e).map((h) => h.trim());
    return c.join(`
`).length >= 15 && countWhere(c, (h) => h.length >= 2) >= 2;
  }), o = removeMovesInSameDiff(t, o), o;
}
function countWhere(t, e) {
  let n = 0;
  for (const r of t) e(r) && n++;
  return n;
}
function computeMovesFromSimpleDeletionsToSimpleInsertions(t, e, n, r) {
  const i = [], s = t.filter((u) => u.modified.isEmpty && u.original.length >= 3).map((u) => new LineRangeFragment(u.original, e, u)), o = new Set(t.filter((u) => u.original.isEmpty && u.modified.length >= 3).map((u) => new LineRangeFragment(u.modified, n, u))), a = /* @__PURE__ */ new Set();
  for (const u of s) {
    let l = -1, f;
    for (const c of o) {
      const m = u.computeSimilarity(c);
      m > l && (l = m, f = c);
    }
    if (l > 0.9 && f && (o.delete(f), i.push(new LineRangeMapping(u.range, f.range)), a.add(u.source), a.add(f.source)), !r.isValid()) return { moves: i, excludedChanges: a };
  }
  return { moves: i, excludedChanges: a };
}
function computeUnchangedMoves(t, e, n, r, i, s) {
  const o = [], a = new SetMap();
  for (const m of t) for (let h = m.original.startLineNumber; h < m.original.endLineNumberExclusive - 2; h++) {
    const g = `${e[h - 1]}:${e[h + 1 - 1]}:${e[h + 2 - 1]}`;
    a.add(g, { range: new LineRange(h, h + 3) });
  }
  const u = [];
  t.sort(compareBy((m) => m.modified.startLineNumber, numberComparator));
  for (const m of t) {
    let h = [];
    for (let g = m.modified.startLineNumber; g < m.modified.endLineNumberExclusive - 2; g++) {
      const p = `${n[g - 1]}:${n[g + 1 - 1]}:${n[g + 2 - 1]}`, E = new LineRange(g, g + 3), d = [];
      a.forEach(p, ({ range: w }) => {
        for (const N of h) if (N.originalLineRange.endLineNumberExclusive + 1 === w.endLineNumberExclusive && N.modifiedLineRange.endLineNumberExclusive + 1 === E.endLineNumberExclusive) {
          N.originalLineRange = new LineRange(N.originalLineRange.startLineNumber, w.endLineNumberExclusive), N.modifiedLineRange = new LineRange(N.modifiedLineRange.startLineNumber, E.endLineNumberExclusive), d.push(N);
          return;
        }
        const b = { modifiedLineRange: E, originalLineRange: w };
        u.push(b), d.push(b);
      }), h = d;
    }
    if (!s.isValid()) return [];
  }
  u.sort(reverseOrder(compareBy((m) => m.modifiedLineRange.length, numberComparator)));
  const l = new LineRangeSet(), f = new LineRangeSet();
  for (const m of u) {
    const h = m.modifiedLineRange.startLineNumber - m.originalLineRange.startLineNumber, g = l.subtractFrom(m.modifiedLineRange), p = f.subtractFrom(m.originalLineRange).getWithDelta(h), E = g.getIntersection(p);
    for (const d of E.ranges) {
      if (d.length < 3) continue;
      const w = d, b = d.delta(-h);
      o.push(new LineRangeMapping(b, w)), l.addRange(w), f.addRange(b);
    }
  }
  o.sort(compareBy((m) => m.original.startLineNumber, numberComparator));
  const c = new MonotonousArray(t);
  for (let m = 0; m < o.length; m++) {
    const h = o[m], g = c.findLastMonotonous((v) => v.original.startLineNumber <= h.original.startLineNumber), p = findLastMonotonous(t, (v) => v.modified.startLineNumber <= h.modified.startLineNumber), E = Math.max(h.original.startLineNumber - g.original.startLineNumber, h.modified.startLineNumber - p.modified.startLineNumber), d = c.findLastMonotonous((v) => v.original.startLineNumber < h.original.endLineNumberExclusive), w = findLastMonotonous(t, (v) => v.modified.startLineNumber < h.modified.endLineNumberExclusive), b = Math.max(d.original.endLineNumberExclusive - h.original.endLineNumberExclusive, w.modified.endLineNumberExclusive - h.modified.endLineNumberExclusive);
    let N;
    for (N = 0; N < E; N++) {
      const v = h.original.startLineNumber - N - 1, S = h.modified.startLineNumber - N - 1;
      if (v > r.length || S > i.length || l.contains(S) || f.contains(v) || !areLinesSimilar(r[v - 1], i[S - 1], s)) break;
    }
    N > 0 && (f.addRange(new LineRange(h.original.startLineNumber - N, h.original.startLineNumber)), l.addRange(new LineRange(h.modified.startLineNumber - N, h.modified.startLineNumber)));
    let _;
    for (_ = 0; _ < b; _++) {
      const v = h.original.endLineNumberExclusive + _, S = h.modified.endLineNumberExclusive + _;
      if (v > r.length || S > i.length || l.contains(S) || f.contains(v) || !areLinesSimilar(r[v - 1], i[S - 1], s)) break;
    }
    _ > 0 && (f.addRange(new LineRange(h.original.endLineNumberExclusive, h.original.endLineNumberExclusive + _)), l.addRange(new LineRange(h.modified.endLineNumberExclusive, h.modified.endLineNumberExclusive + _))), (N > 0 || _ > 0) && (o[m] = new LineRangeMapping(new LineRange(h.original.startLineNumber - N, h.original.endLineNumberExclusive + _), new LineRange(h.modified.startLineNumber - N, h.modified.endLineNumberExclusive + _)));
  }
  return o;
}
function areLinesSimilar(t, e, n) {
  if (t.trim() === e.trim()) return true;
  if (t.length > 300 && e.length > 300) return false;
  const i = new MyersDiffAlgorithm().compute(new LinesSliceCharSequence([t], new Range(1, 1, 1, t.length), false), new LinesSliceCharSequence([e], new Range(1, 1, 1, e.length), false), n);
  let s = 0;
  const o = SequenceDiff.invert(i.diffs, t.length);
  for (const f of o) f.seq1Range.forEach((c) => {
    isSpace(t.charCodeAt(c)) || s++;
  });
  function a(f) {
    let c = 0;
    for (let m = 0; m < t.length; m++) isSpace(f.charCodeAt(m)) || c++;
    return c;
  }
  const u = a(t.length > e.length ? t : e);
  return s / u > 0.6 && u > 10;
}
function joinCloseConsecutiveMoves(t) {
  if (t.length === 0) return t;
  t.sort(compareBy((n) => n.original.startLineNumber, numberComparator));
  const e = [t[0]];
  for (let n = 1; n < t.length; n++) {
    const r = e[e.length - 1], i = t[n], s = i.original.startLineNumber - r.original.endLineNumberExclusive, o = i.modified.startLineNumber - r.modified.endLineNumberExclusive;
    if (s >= 0 && o >= 0 && s + o <= 2) {
      e[e.length - 1] = r.join(i);
      continue;
    }
    e.push(i);
  }
  return e;
}
function removeMovesInSameDiff(t, e) {
  const n = new MonotonousArray(t);
  return e = e.filter((r) => {
    const i = n.findLastMonotonous((a) => a.original.startLineNumber < r.original.endLineNumberExclusive) || new LineRangeMapping(new LineRange(1, 1), new LineRange(1, 1)), s = findLastMonotonous(t, (a) => a.modified.startLineNumber < r.modified.endLineNumberExclusive);
    return i !== s;
  }), e;
}
function optimizeSequenceDiffs(t, e, n) {
  let r = n;
  return r = joinSequenceDiffsByShifting(t, e, r), r = joinSequenceDiffsByShifting(t, e, r), r = shiftSequenceDiffs(t, e, r), r;
}
function joinSequenceDiffsByShifting(t, e, n) {
  if (n.length === 0) return n;
  const r = [];
  r.push(n[0]);
  for (let s = 1; s < n.length; s++) {
    const o = r[r.length - 1];
    let a = n[s];
    if (a.seq1Range.isEmpty || a.seq2Range.isEmpty) {
      const u = a.seq1Range.start - o.seq1Range.endExclusive;
      let l;
      for (l = 1; l <= u && !(t.getElement(a.seq1Range.start - l) !== t.getElement(a.seq1Range.endExclusive - l) || e.getElement(a.seq2Range.start - l) !== e.getElement(a.seq2Range.endExclusive - l)); l++) ;
      if (l--, l === u) {
        r[r.length - 1] = new SequenceDiff(new OffsetRange(o.seq1Range.start, a.seq1Range.endExclusive - u), new OffsetRange(o.seq2Range.start, a.seq2Range.endExclusive - u));
        continue;
      }
      a = a.delta(-l);
    }
    r.push(a);
  }
  const i = [];
  for (let s = 0; s < r.length - 1; s++) {
    const o = r[s + 1];
    let a = r[s];
    if (a.seq1Range.isEmpty || a.seq2Range.isEmpty) {
      const u = o.seq1Range.start - a.seq1Range.endExclusive;
      let l;
      for (l = 0; l < u && !(!t.isStronglyEqual(a.seq1Range.start + l, a.seq1Range.endExclusive + l) || !e.isStronglyEqual(a.seq2Range.start + l, a.seq2Range.endExclusive + l)); l++) ;
      if (l === u) {
        r[s + 1] = new SequenceDiff(new OffsetRange(a.seq1Range.start + u, o.seq1Range.endExclusive), new OffsetRange(a.seq2Range.start + u, o.seq2Range.endExclusive));
        continue;
      }
      l > 0 && (a = a.delta(l));
    }
    i.push(a);
  }
  return r.length > 0 && i.push(r[r.length - 1]), i;
}
function shiftSequenceDiffs(t, e, n) {
  if (!t.getBoundaryScore || !e.getBoundaryScore) return n;
  for (let r = 0; r < n.length; r++) {
    const i = r > 0 ? n[r - 1] : void 0, s = n[r], o = r + 1 < n.length ? n[r + 1] : void 0, a = new OffsetRange(i ? i.seq1Range.endExclusive + 1 : 0, o ? o.seq1Range.start - 1 : t.length), u = new OffsetRange(i ? i.seq2Range.endExclusive + 1 : 0, o ? o.seq2Range.start - 1 : e.length);
    s.seq1Range.isEmpty ? n[r] = shiftDiffToBetterPosition(s, t, e, a, u) : s.seq2Range.isEmpty && (n[r] = shiftDiffToBetterPosition(s.swap(), e, t, u, a).swap());
  }
  return n;
}
function shiftDiffToBetterPosition(t, e, n, r, i) {
  let o = 1;
  for (; t.seq1Range.start - o >= r.start && t.seq2Range.start - o >= i.start && n.isStronglyEqual(t.seq2Range.start - o, t.seq2Range.endExclusive - o) && o < 100; ) o++;
  o--;
  let a = 0;
  for (; t.seq1Range.start + a < r.endExclusive && t.seq2Range.endExclusive + a < i.endExclusive && n.isStronglyEqual(t.seq2Range.start + a, t.seq2Range.endExclusive + a) && a < 100; ) a++;
  if (o === 0 && a === 0) return t;
  let u = 0, l = -1;
  for (let f = -o; f <= a; f++) {
    const c = t.seq2Range.start + f, m = t.seq2Range.endExclusive + f, h = t.seq1Range.start + f, g = e.getBoundaryScore(h) + n.getBoundaryScore(c) + n.getBoundaryScore(m);
    g > l && (l = g, u = f);
  }
  return t.delta(u);
}
function removeShortMatches(t, e, n) {
  const r = [];
  for (const i of n) {
    const s = r[r.length - 1];
    if (!s) {
      r.push(i);
      continue;
    }
    i.seq1Range.start - s.seq1Range.endExclusive <= 2 || i.seq2Range.start - s.seq2Range.endExclusive <= 2 ? r[r.length - 1] = new SequenceDiff(s.seq1Range.join(i.seq1Range), s.seq2Range.join(i.seq2Range)) : r.push(i);
  }
  return r;
}
function extendDiffsToEntireWordIfAppropriate(t, e, n, r, i = false) {
  const s = SequenceDiff.invert(n, t.length), o = [];
  let a = new OffsetPair(0, 0);
  function u(f, c) {
    if (f.offset1 < a.offset1 || f.offset2 < a.offset2) return;
    const m = r(t, f.offset1), h = r(e, f.offset2);
    if (!m || !h) return;
    let g = new SequenceDiff(m, h);
    const p = g.intersect(c);
    let E = p.seq1Range.length, d = p.seq2Range.length;
    for (; s.length > 0; ) {
      const w = s[0];
      if (!(w.seq1Range.intersects(g.seq1Range) || w.seq2Range.intersects(g.seq2Range))) break;
      const N = r(t, w.seq1Range.start), _ = r(e, w.seq2Range.start), v = new SequenceDiff(N, _), S = v.intersect(w);
      if (E += S.seq1Range.length, d += S.seq2Range.length, g = g.join(v), g.seq1Range.endExclusive >= w.seq1Range.endExclusive) s.shift();
      else break;
    }
    (i && E + d < g.seq1Range.length + g.seq2Range.length || E + d < (g.seq1Range.length + g.seq2Range.length) * 2 / 3) && o.push(g), a = g.getEndExclusives();
  }
  for (; s.length > 0; ) {
    const f = s.shift();
    f.seq1Range.isEmpty || (u(f.getStarts(), f), u(f.getEndExclusives().delta(-1), f));
  }
  return mergeSequenceDiffs(n, o);
}
function mergeSequenceDiffs(t, e) {
  const n = [];
  for (; t.length > 0 || e.length > 0; ) {
    const r = t[0], i = e[0];
    let s;
    r && (!i || r.seq1Range.start < i.seq1Range.start) ? s = t.shift() : s = e.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= s.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(s) : n.push(s);
  }
  return n;
}
function removeVeryShortMatchingLinesBetweenDiffs(t, e, n) {
  let r = n;
  if (r.length === 0) return r;
  let i = 0, s;
  do {
    s = false;
    const a = [r[0]];
    for (let u = 1; u < r.length; u++) {
      let l = function(h, g) {
        const p = new OffsetRange(c.seq1Range.endExclusive, f.seq1Range.start);
        return t.getText(p).replace(/\s/g, "").length <= 4 && (h.seq1Range.length + h.seq2Range.length > 5 || g.seq1Range.length + g.seq2Range.length > 5);
      };
      var o = l;
      const f = r[u], c = a[a.length - 1];
      l(c, f) ? (s = true, a[a.length - 1] = a[a.length - 1].join(f)) : a.push(f);
    }
    r = a;
  } while (i++ < 10 && s);
  return r;
}
function removeVeryShortMatchingTextBetweenLongDiffs(t, e, n) {
  let r = n;
  if (r.length === 0) return r;
  let i = 0, s;
  do {
    s = false;
    const u = [r[0]];
    for (let l = 1; l < r.length; l++) {
      let f = function(g, p) {
        const E = new OffsetRange(m.seq1Range.endExclusive, c.seq1Range.start);
        if (t.countLinesIn(E) > 5 || E.length > 500) return false;
        const w = t.getText(E).trim();
        if (w.length > 20 || w.split(/\r\n|\r|\n/).length > 1) return false;
        const b = t.countLinesIn(g.seq1Range), N = g.seq1Range.length, _ = e.countLinesIn(g.seq2Range), v = g.seq2Range.length, S = t.countLinesIn(p.seq1Range), L = p.seq1Range.length, y = e.countLinesIn(p.seq2Range), D = p.seq2Range.length, x = 130;
        function k(G) {
          return Math.min(G, x);
        }
        return Math.pow(Math.pow(k(b * 40 + N), 1.5) + Math.pow(k(_ * 40 + v), 1.5), 1.5) + Math.pow(Math.pow(k(S * 40 + L), 1.5) + Math.pow(k(y * 40 + D), 1.5), 1.5) > (x ** 1.5) ** 1.5 * 1.3;
      };
      var o = f;
      const c = r[l], m = u[u.length - 1];
      f(m, c) ? (s = true, u[u.length - 1] = u[u.length - 1].join(c)) : u.push(c);
    }
    r = u;
  } while (i++ < 10 && s);
  const a = [];
  return forEachWithNeighbors(r, (u, l, f) => {
    let c = l;
    function m(w) {
      return w.length > 0 && w.trim().length <= 3 && l.seq1Range.length + l.seq2Range.length > 100;
    }
    const h = t.extendToFullLines(l.seq1Range), g = t.getText(new OffsetRange(h.start, l.seq1Range.start));
    m(g) && (c = c.deltaStart(-g.length));
    const p = t.getText(new OffsetRange(l.seq1Range.endExclusive, h.endExclusive));
    m(p) && (c = c.deltaEnd(p.length));
    const E = SequenceDiff.fromOffsetPairs(u ? u.getEndExclusives() : OffsetPair.zero, f ? f.getStarts() : OffsetPair.max), d = c.intersect(E);
    a.length > 0 && d.getStarts().equals(a[a.length - 1].getEndExclusives()) ? a[a.length - 1] = a[a.length - 1].join(d) : a.push(d);
  }), a;
}
var LineSequence2 = class {
  constructor(t, e) {
    this.trimmedHash = t, this.lines = e;
  }
  getElement(t) {
    return this.trimmedHash[t];
  }
  get length() {
    return this.trimmedHash.length;
  }
  getBoundaryScore(t) {
    const e = t === 0 ? 0 : getIndentation(this.lines[t - 1]), n = t === this.lines.length ? 0 : getIndentation(this.lines[t]);
    return 1e3 - (e + n);
  }
  getText(t) {
    return this.lines.slice(t.start, t.endExclusive).join(`
`);
  }
  isStronglyEqual(t, e) {
    return this.lines[t] === this.lines[e];
  }
};
function getIndentation(t) {
  let e = 0;
  for (; e < t.length && (t.charCodeAt(e) === CharCode.Space || t.charCodeAt(e) === CharCode.Tab); ) e++;
  return e;
}
var DefaultLinesDiffComputer = class {
  constructor() {
    this.dynamicProgrammingDiffing = new DynamicProgrammingDiffing(), this.myersDiffingAlgorithm = new MyersDiffAlgorithm(), this.streamingDPDiffing = new StreamingDPDiffing();
  }
  computeDiff(t, e, n) {
    if (t.length === 0 && e.length === 0) return new LinesDiff([], [], false);
    if (t.length === 0) return new LinesDiff([new DetailedLineRangeMapping(new LineRange(1, 1), new LineRange(1, e.length + 1), void 0)], [], false);
    if (e.length === 0) return new LinesDiff([new DetailedLineRangeMapping(new LineRange(1, t.length + 1), new LineRange(1, 1), void 0)], [], false);
    if (t.length <= 1 && equals(t, e, (L, y) => L === y)) return new LinesDiff([], [], false);
    if (t.length === 1 && t[0].length === 0 || e.length === 1 && e[0].length === 0) return new LinesDiff([new DetailedLineRangeMapping(new LineRange(1, t.length + 1), new LineRange(1, e.length + 1), [new RangeMapping(new Range(1, 1, t.length, t[t.length - 1].length + 1), new Range(1, 1, e.length, e[e.length - 1].length + 1))])], [], false);
    const r = n.maxComputationTimeMs === 0 ? InfiniteTimeout.instance : new DateTimeout(n.maxComputationTimeMs, n.shouldGracefullyFallBackOnTimeout), i = !n.ignoreTrimWhitespace, s = /* @__PURE__ */ new Map();
    function o(L) {
      let y = s.get(L);
      return y === void 0 && (y = s.size, s.set(L, y)), y;
    }
    const a = t.length * e.length < 1e6 && n.onlyCareAboutPrefixOfOriginalLines === true, u = (L) => {
      const y = [];
      for (const D of L) {
        if (!r.isValid()) return;
        y.push(o(a ? D : D.trim()));
      }
      return y;
    }, l = u(t), f = l && u(e);
    if (!l || !f) return new LinesDiff([new DetailedLineRangeMapping(new LineRange(1, t.length + 1), new LineRange(1, e.length + 1), [new RangeMapping(new Range(1, 1, t.length, t[t.length - 1].length + 1), new Range(1, 1, e.length, e[e.length - 1].length + 1))])], [], true);
    const c = t.every((L) => L.trim().length === 0), m = new LineSequence2(l, t), h = new LineSequence2(f, e), g = a ? c ? DiffAlgorithmResult.trivial(m, h) : this.streamingDPDiffing.compute(m, h, r, (L, y) => t[L] === e[y] ? e[y].length === 0 ? 0.1 : 1 + Math.log(1 + e[y].length) : 0.99) : m.length + h.length < 1700 ? this.dynamicProgrammingDiffing.compute(m, h, r, (L, y) => t[L] === e[y] ? e[y].length === 0 ? 0.1 : 1 + Math.log(1 + e[y].length) : 0.99) : this.myersDiffingAlgorithm.compute(m, h, r);
    let p = g.diffs, E = g.hitTimeout;
    if (a) {
      const L = p.map((y) => new DetailedLineRangeMapping(new LineRange(y.seq1Range.start + 1, y.seq1Range.endExclusive + 1), new LineRange(y.seq2Range.start + 1, y.seq2Range.endExclusive + 1), void 0));
      return new LinesDiff(L, [], E);
    }
    const d = E;
    if (p = optimizeSequenceDiffs(m, h, p), p = removeVeryShortMatchingLinesBetweenDiffs(m, h, p), n.skipDiffRefinement || n.shouldGracefullyFallBackOnTimeout === true && E) {
      const L = p.map((y) => new DetailedLineRangeMapping(new LineRange(y.seq1Range.start + 1, y.seq1Range.endExclusive + 1), new LineRange(y.seq2Range.start + 1, y.seq2Range.endExclusive + 1), void 0));
      return new LinesDiff(L, [], E);
    }
    const w = [], b = (L) => {
      if (i) for (let y = 0; y < L; y++) {
        const D = N + y, x = _ + y;
        if (t[D] !== e[x]) {
          const k = this.refineDiff(t, e, new SequenceDiff(new OffsetRange(D, D + 1), new OffsetRange(x, x + 1)), r, i, n);
          for (const G of k.mappings) w.push(G);
          k.hitTimeout && (E = true);
        }
      }
    };
    let N = 0, _ = 0;
    for (const L of p) {
      if (n.shouldGracefullyFallBackOnTimeout === true && E) {
        const x = p.map((k) => new DetailedLineRangeMapping(new LineRange(k.seq1Range.start + 1, k.seq1Range.endExclusive + 1), new LineRange(k.seq2Range.start + 1, k.seq2Range.endExclusive + 1), void 0));
        return new LinesDiff(x, [], d);
      }
      assertFn(() => L.seq1Range.start - N === L.seq2Range.start - _);
      const y = L.seq1Range.start - N;
      b(y), N = L.seq1Range.endExclusive, _ = L.seq2Range.endExclusive;
      const D = this.refineDiff(t, e, L, r, i, n);
      D.hitTimeout && (E = true);
      for (const x of D.mappings) w.push(x);
    }
    b(t.length - N);
    const v = lineRangeMappingFromRangeMappings(w, new ArrayText(t), new ArrayText(e));
    let S = [];
    if (n.computeMoves && (S = this.computeMoves(v, t, e, l, f, r, i, n)), assertFn(() => {
      function L(D, x) {
        if (D.lineNumber < 1 || D.lineNumber > x.length) return false;
        const k = x[D.lineNumber - 1];
        return !(D.column < 1 || D.column > k.length + 1);
      }
      function y(D, x) {
        return !(D.startLineNumber < 1 || D.startLineNumber > x.length + 1 || D.endLineNumberExclusive < 1 || D.endLineNumberExclusive > x.length + 1);
      }
      for (const D of v) {
        if (!D.innerChanges) return false;
        for (const x of D.innerChanges) if (!(L(x.modifiedRange.getStartPosition(), e) && L(x.modifiedRange.getEndPosition(), e) && L(x.originalRange.getStartPosition(), t) && L(x.originalRange.getEndPosition(), t))) return false;
        if (!y(D.modified, e) || !y(D.original, t)) return false;
      }
      return true;
    }), n.shouldGracefullyFallBackOnTimeout === true && E && !d) {
      const L = p.map((y) => new DetailedLineRangeMapping(new LineRange(y.seq1Range.start + 1, y.seq1Range.endExclusive + 1), new LineRange(y.seq2Range.start + 1, y.seq2Range.endExclusive + 1), void 0));
      return new LinesDiff(L, [], d);
    }
    return new LinesDiff(v, S, E);
  }
  computeMoves(t, e, n, r, i, s, o, a) {
    return computeMovedLines(t, e, n, r, i, s).map((f) => {
      const c = this.refineDiff(e, n, new SequenceDiff(f.original.toOffsetRange(), f.modified.toOffsetRange()), s, o, a), m = lineRangeMappingFromRangeMappings(c.mappings, new ArrayText(e), new ArrayText(n), true);
      return new MovedText(f, m);
    });
  }
  refineDiff(t, e, n, r, i, s) {
    const a = toLineRangeMapping(n).toRangeMapping2(t, e), u = new LinesSliceCharSequence(t, a.originalRange, i), l = new LinesSliceCharSequence(e, a.modifiedRange, i), f = u.length + l.length < 500 ? this.dynamicProgrammingDiffing.compute(u, l, r) : this.myersDiffingAlgorithm.compute(u, l, r), c = false;
    let m = f.diffs;
    c && SequenceDiff.assertSorted(m), m = optimizeSequenceDiffs(u, l, m), c && SequenceDiff.assertSorted(m), m = extendDiffsToEntireWordIfAppropriate(u, l, m, (g, p) => g.findWordContaining(p)), c && SequenceDiff.assertSorted(m), s.extendToSubwords && (m = extendDiffsToEntireWordIfAppropriate(u, l, m, (g, p) => g.findSubWordContaining(p), true), c && SequenceDiff.assertSorted(m)), m = removeShortMatches(u, l, m), c && SequenceDiff.assertSorted(m), m = removeVeryShortMatchingTextBetweenLongDiffs(u, l, m), c && SequenceDiff.assertSorted(m);
    const h = m.map((g) => new RangeMapping(u.translateRange(g.seq1Range), l.translateRange(g.seq2Range)));
    return c && RangeMapping.assertSorted(h), { mappings: h, hitTimeout: f.hitTimeout };
  }
};
function toLineRangeMapping(t) {
  return new LineRangeMapping(new LineRange(t.seq1Range.start + 1, t.seq1Range.endExclusive + 1), new LineRange(t.seq2Range.start + 1, t.seq2Range.endExclusive + 1));
}
var linesDiffComputers = { getLegacy: () => new LegacyLinesDiffComputer(), getDefault: () => new DefaultLinesDiffComputer() };
function tokenizeByLines(t) {
  let e = [], n = "";
  for (let r = 0; r < t.length; r++) n += t[r], t[r] === `
` && (e.push(n), n = "");
  return n !== "" && e.push(n), e;
}
function tokenizeCode(t) {
  const e = [];
  let n = "individual", r = "";
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (s.match(/[\p{L}\p{N}_]/u)) if (n === "word" || n === "whitespace") {
      r += s, n = "word";
      continue;
    } else r !== "" && e.push(r), r = s, n = "word";
    else if (s === "\r" || s === `
`) if (n === "newline" && r === "\r" && s === `
`) {
      r += s;
      continue;
    } else r !== "" && e.push(r), r = s, n = "newline";
    else if (s === " " || s === "	") if (n === "whitespace") {
      r += s;
      continue;
    } else r !== "" && e.push(r), r = s, n = "whitespace";
    else (r !== "" || n === "whitespace") && e.push(r), r = s, n = "individual";
  }
  return r !== "" && e.push(r), e;
}
function computeWordDiff(t, e, n) {
  let r = tokenizeCode(t), i = tokenizeCode(e);
  if (i.length * r.length > 1e7 && (r = tokenizeByLines(t), i = tokenizeByLines(e)), i.length === 0 && r.length === 0) return { identical: true, quitEarly: false, changes: [] };
  if (i.length === 0) return { identical: false, quitEarly: false, changes: [[r.join(""), false, true]] };
  if (r.length === 0) return { identical: false, quitEarly: false, changes: [[i.join(""), true, false]] };
  const o = linesDiffComputers.getDefault().computeDiff(r, i, n), a = o.changes.length > 0 ? false : t === e;
  function u(l) {
    let f = [], c = 1;
    for (const m of l) m.original.startLineNumber > c && f.push([r.slice(c - 1, m.original.startLineNumber - 1).join(""), false, false]), c = m.original.endLineNumberExclusive, m.modified.startLineNumber !== m.modified.endLineNumberExclusive && f.push([i.slice(m.modified.startLineNumber - 1, m.modified.endLineNumberExclusive - 1).join(""), true, false]), m.original.startLineNumber !== m.original.endLineNumberExclusive && f.push([r.slice(m.original.startLineNumber - 1, m.original.endLineNumberExclusive - 1).join(""), false, true]);
    return c <= r.length && f.push([r.slice(c - 1).join(""), false, false]), f;
  }
  return { identical: a, quitEarly: o.hitTimeout, changes: u(o.changes) };
}
function assert2(t, e) {
  if (!t) throw new Error(e);
}
var FLOAT32_MAX = 34028234663852886e22, FLOAT32_MIN = -34028234663852886e22, UINT32_MAX = 4294967295, INT32_MAX = 2147483647, INT32_MIN = -2147483648;
function assertInt32(t) {
  if (typeof t != "number") throw new Error("invalid int 32: " + typeof t);
  if (!Number.isInteger(t) || t > INT32_MAX || t < INT32_MIN) throw new Error("invalid int 32: " + t);
}
function assertUInt32(t) {
  if (typeof t != "number") throw new Error("invalid uint 32: " + typeof t);
  if (!Number.isInteger(t) || t > UINT32_MAX || t < 0) throw new Error("invalid uint 32: " + t);
}
function assertFloat32(t) {
  if (typeof t != "number") throw new Error("invalid float 32: " + typeof t);
  if (Number.isFinite(t) && (t > FLOAT32_MAX || t < FLOAT32_MIN)) throw new Error("invalid float 32: " + t);
}
var enumTypeSymbol = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
function getEnumType(t) {
  const e = t[enumTypeSymbol];
  return assert2(e, "missing enum type on enum object"), e;
}
function setEnumType(t, e, n, r) {
  t[enumTypeSymbol] = makeEnumType(e, n.map((i) => ({ no: i.no, name: i.name, localName: t[i.no] })), r);
}
function makeEnumType(t, e, n) {
  const r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = [];
  for (const o of e) {
    const a = normalizeEnumValue(o);
    s.push(a), r[o.name] = a, i[o.no] = a;
  }
  return { typeName: t, values: s, findName(o) {
    return r[o];
  }, findNumber(o) {
    return i[o];
  } };
}
function makeEnum(t, e, n) {
  const r = {};
  for (const i of e) {
    const s = normalizeEnumValue(i);
    r[s.localName] = s.no, r[s.no] = s.localName;
  }
  return setEnumType(r, t, e, n), r;
}
function normalizeEnumValue(t) {
  return "localName" in t ? t : { ...t, localName: t.name };
}
var Message = class {
  equals(t) {
    return this.getType().runtime.util.equals(this.getType(), this, t);
  }
  clone() {
    return this.getType().runtime.util.clone(this);
  }
  fromBinary(t, e) {
    const n = this.getType(), r = n.runtime.bin, i = r.makeReadOptions(e);
    return r.readMessage(this, i.readerFactory(t), t.byteLength, i), this;
  }
  fromJson(t, e) {
    const n = this.getType(), r = n.runtime.json, i = r.makeReadOptions(e);
    return r.readMessage(n, t, i, this), this;
  }
  fromJsonString(t, e) {
    let n;
    try {
      n = JSON.parse(t);
    } catch (r) {
      throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${r instanceof Error ? r.message : String(r)}`);
    }
    return this.fromJson(n, e);
  }
  toBinary(t) {
    const e = this.getType(), n = e.runtime.bin, r = n.makeWriteOptions(t), i = r.writerFactory();
    return n.writeMessage(this, i, r), i.finish();
  }
  toJson(t) {
    const e = this.getType(), n = e.runtime.json, r = n.makeWriteOptions(t);
    return n.writeMessage(this, r);
  }
  toJsonString(t) {
    const e = this.toJson(t);
    return JSON.stringify(e, null, t?.prettySpaces ?? 0);
  }
  toJSON() {
    return this.toJson({ emitDefaultValues: true });
  }
  getType() {
    return Object.getPrototypeOf(this).constructor;
  }
};
function makeMessageType(t, e, n, r) {
  const i = r?.localName ?? e.substring(e.lastIndexOf(".") + 1), s = { [i]: function(o) {
    t.util.initFields(this), t.util.initPartial(o, this);
  } }[i];
  return Object.setPrototypeOf(s.prototype, new Message()), Object.assign(s, { runtime: t, typeName: e, fields: t.util.newFieldList(n), fromBinary(o, a) {
    return new s().fromBinary(o, a);
  }, fromJson(o, a) {
    return new s().fromJson(o, a);
  }, fromJsonString(o, a) {
    return new s().fromJsonString(o, a);
  }, equals(o, a) {
    return t.util.equals(s, o, a);
  } }), s;
}
function varint64read() {
  let t = 0, e = 0;
  for (let r = 0; r < 28; r += 7) {
    let i = this.buf[this.pos++];
    if (t |= (i & 127) << r, (i & 128) == 0) return this.assertBounds(), [t, e];
  }
  let n = this.buf[this.pos++];
  if (t |= (n & 15) << 28, e = (n & 112) >> 4, (n & 128) == 0) return this.assertBounds(), [t, e];
  for (let r = 3; r <= 31; r += 7) {
    let i = this.buf[this.pos++];
    if (e |= (i & 127) << r, (i & 128) == 0) return this.assertBounds(), [t, e];
  }
  throw new Error("invalid varint");
}
function varint64write(t, e, n) {
  for (let s = 0; s < 28; s = s + 7) {
    const o = t >>> s, a = !(!(o >>> 7) && e == 0), u = (a ? o | 128 : o) & 255;
    if (n.push(u), !a) return;
  }
  const r = t >>> 28 & 15 | (e & 7) << 4, i = e >> 3 != 0;
  if (n.push((i ? r | 128 : r) & 255), !!i) {
    for (let s = 3; s < 31; s = s + 7) {
      const o = e >>> s, a = !!(o >>> 7), u = (a ? o | 128 : o) & 255;
      if (n.push(u), !a) return;
    }
    n.push(e >>> 31 & 1);
  }
}
var TWO_PWR_32_DBL = 4294967296;
function int64FromString(t) {
  const e = t[0] === "-";
  e && (t = t.slice(1));
  const n = 1e6;
  let r = 0, i = 0;
  function s(o, a) {
    const u = Number(t.slice(o, a));
    i *= n, r = r * n + u, r >= TWO_PWR_32_DBL && (i = i + (r / TWO_PWR_32_DBL | 0), r = r % TWO_PWR_32_DBL);
  }
  return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), e ? negate(r, i) : newBits(r, i);
}
function int64ToString(t, e) {
  let n = newBits(t, e);
  const r = n.hi & 2147483648;
  r && (n = negate(n.lo, n.hi));
  const i = uInt64ToString(n.lo, n.hi);
  return r ? "-" + i : i;
}
function uInt64ToString(t, e) {
  if ({ lo: t, hi: e } = toUnsigned(t, e), e <= 2097151) return String(TWO_PWR_32_DBL * e + t);
  const n = t & 16777215, r = (t >>> 24 | e << 8) & 16777215, i = e >> 16 & 65535;
  let s = n + r * 6777216 + i * 6710656, o = r + i * 8147497, a = i * 2;
  const u = 1e7;
  return s >= u && (o += Math.floor(s / u), s %= u), o >= u && (a += Math.floor(o / u), o %= u), a.toString() + decimalFrom1e7WithLeadingZeros(o) + decimalFrom1e7WithLeadingZeros(s);
}
function toUnsigned(t, e) {
  return { lo: t >>> 0, hi: e >>> 0 };
}
function newBits(t, e) {
  return { lo: t | 0, hi: e | 0 };
}
function negate(t, e) {
  return e = ~e, t ? t = ~t + 1 : e += 1, newBits(t, e);
}
var decimalFrom1e7WithLeadingZeros = (t) => {
  const e = String(t);
  return "0000000".slice(e.length) + e;
};
function varint32write(t, e) {
  if (t >= 0) {
    for (; t > 127; ) e.push(t & 127 | 128), t = t >>> 7;
    e.push(t);
  } else {
    for (let n = 0; n < 9; n++) e.push(t & 127 | 128), t = t >> 7;
    e.push(1);
  }
}
function varint32read() {
  let t = this.buf[this.pos++], e = t & 127;
  if ((t & 128) == 0) return this.assertBounds(), e;
  if (t = this.buf[this.pos++], e |= (t & 127) << 7, (t & 128) == 0) return this.assertBounds(), e;
  if (t = this.buf[this.pos++], e |= (t & 127) << 14, (t & 128) == 0) return this.assertBounds(), e;
  if (t = this.buf[this.pos++], e |= (t & 127) << 21, (t & 128) == 0) return this.assertBounds(), e;
  t = this.buf[this.pos++], e |= (t & 15) << 28;
  for (let n = 5; (t & 128) !== 0 && n < 10; n++) t = this.buf[this.pos++];
  if ((t & 128) != 0) throw new Error("invalid varint");
  return this.assertBounds(), e >>> 0;
}
function makeInt64Support() {
  const t = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof t.getBigInt64 == "function" && typeof t.getBigUint64 == "function" && typeof t.setBigInt64 == "function" && typeof t.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
    const i = BigInt("-9223372036854775808"), s = BigInt("9223372036854775807"), o = BigInt("0"), a = BigInt("18446744073709551615");
    return { zero: BigInt(0), supported: true, parse(u) {
      const l = typeof u == "bigint" ? u : BigInt(u);
      if (l > s || l < i) throw new Error(`int64 invalid: ${u}`);
      return l;
    }, uParse(u) {
      const l = typeof u == "bigint" ? u : BigInt(u);
      if (l > a || l < o) throw new Error(`uint64 invalid: ${u}`);
      return l;
    }, enc(u) {
      return t.setBigInt64(0, this.parse(u), true), { lo: t.getInt32(0, true), hi: t.getInt32(4, true) };
    }, uEnc(u) {
      return t.setBigInt64(0, this.uParse(u), true), { lo: t.getInt32(0, true), hi: t.getInt32(4, true) };
    }, dec(u, l) {
      return t.setInt32(0, u, true), t.setInt32(4, l, true), t.getBigInt64(0, true);
    }, uDec(u, l) {
      return t.setInt32(0, u, true), t.setInt32(4, l, true), t.getBigUint64(0, true);
    } };
  }
  const n = (i) => assert2(/^-?[0-9]+$/.test(i), `int64 invalid: ${i}`), r = (i) => assert2(/^[0-9]+$/.test(i), `uint64 invalid: ${i}`);
  return { zero: "0", supported: false, parse(i) {
    return typeof i != "string" && (i = i.toString()), n(i), i;
  }, uParse(i) {
    return typeof i != "string" && (i = i.toString()), r(i), i;
  }, enc(i) {
    return typeof i != "string" && (i = i.toString()), n(i), int64FromString(i);
  }, uEnc(i) {
    return typeof i != "string" && (i = i.toString()), r(i), int64FromString(i);
  }, dec(i, s) {
    return int64ToString(i, s);
  }, uDec(i, s) {
    return uInt64ToString(i, s);
  } };
}
var protoInt64 = makeInt64Support(), ScalarType = ((t) => (t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64", t))(ScalarType || {}), LongType = ((t) => (t[t.BIGINT = 0] = "BIGINT", t[t.STRING = 1] = "STRING", t))(LongType || {});
function scalarEquals(t, e, n) {
  if (e === n) return true;
  if (t == ScalarType.BYTES) {
    if (!(e instanceof Uint8Array) || !(n instanceof Uint8Array) || e.length !== n.length) return false;
    for (let r = 0; r < e.length; r++) if (e[r] !== n[r]) return false;
    return true;
  }
  switch (t) {
    case ScalarType.UINT64:
    case ScalarType.FIXED64:
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      return e == n;
  }
  return false;
}
function scalarZeroValue(t, e) {
  switch (t) {
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
function isScalarZeroValue(t, e) {
  switch (t) {
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
function makeExtension(t, e, n, r) {
  let i;
  return { typeName: e, extendee: n, get field() {
    if (!i) {
      const s = typeof r == "function" ? r() : r;
      s.name = e.split(".").pop(), s.jsonName = `[${e}]`, i = t.util.newFieldList([s]).list()[0];
    }
    return i;
  }, runtime: t };
}
function createExtensionContainer(t) {
  const e = t.field.localName, n = /* @__PURE__ */ Object.create(null);
  return n[e] = initExtensionField(t), [n, () => n[e]];
}
function initExtensionField(t) {
  const e = t.field;
  if (e.repeated) return [];
  if (e.default !== void 0) return e.default;
  switch (e.kind) {
    case "enum":
      return e.T.values[0].no;
    case "scalar":
      return scalarZeroValue(e.T, e.L);
    case "message":
      const n = e.T, r = new n();
      return n.fieldWrapper ? n.fieldWrapper.unwrapField(r) : r;
    case "map":
      throw "map fields are not allowed to be extensions";
  }
}
function filterUnknownFields(t, e) {
  if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
    for (let n = t.length - 1; n >= 0; --n) if (t[n].no == e.no) return [t[n]];
    return [];
  }
  return t.filter((n) => n.no === e.no);
}
var encTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), decTable = [];
for (let t = 0; t < encTable.length; t++) decTable[encTable[t].charCodeAt(0)] = t;
decTable[45] = encTable.indexOf("+"), decTable[95] = encTable.indexOf("/");
var protoBase64 = { dec(t) {
  let e = t.length * 3 / 4;
  t[t.length - 2] == "=" ? e -= 2 : t[t.length - 1] == "=" && (e -= 1);
  let n = new Uint8Array(e), r = 0, i = 0, s, o = 0;
  for (let a = 0; a < t.length; a++) {
    if (s = decTable[t.charCodeAt(a)], s === void 0) switch (t[a]) {
      case "=":
        i = 0;
      case `
`:
      case "\r":
      case "	":
      case " ":
        continue;
      default:
        throw Error("invalid base64 string.");
    }
    switch (i) {
      case 0:
        o = s, i = 1;
        break;
      case 1:
        n[r++] = o << 2 | (s & 48) >> 4, o = s, i = 2;
        break;
      case 2:
        n[r++] = (o & 15) << 4 | (s & 60) >> 2, o = s, i = 3;
        break;
      case 3:
        n[r++] = (o & 3) << 6 | s, i = 0;
        break;
    }
  }
  if (i == 1) throw Error("invalid base64 string.");
  return n.subarray(0, r);
}, enc(t) {
  let e = "", n = 0, r, i = 0;
  for (let s = 0; s < t.length; s++) switch (r = t[s], n) {
    case 0:
      e += encTable[r >> 2], i = (r & 3) << 4, n = 1;
      break;
    case 1:
      e += encTable[i | r >> 4], i = (r & 15) << 2, n = 2;
      break;
    case 2:
      e += encTable[i | r >> 6], e += encTable[r & 63], n = 0;
      break;
  }
  return n && (e += encTable[i], e += "=", n == 1 && (e += "=")), e;
} };
function getExtension(t, e, n) {
  assertExtendee(e, t);
  const r = e.runtime.bin.makeReadOptions(n), i = filterUnknownFields(t.getType().runtime.bin.listUnknownFields(t), e.field), [s, o] = createExtensionContainer(e);
  for (const a of i) e.runtime.bin.readField(s, r.readerFactory(a.data), e.field, a.wireType, r);
  return o();
}
function setExtension(t, e, n, r) {
  assertExtendee(e, t);
  const i = e.runtime.bin.makeReadOptions(r), s = e.runtime.bin.makeWriteOptions(r);
  if (hasExtension(t, e)) {
    const l = t.getType().runtime.bin.listUnknownFields(t).filter((f) => f.no != e.field.no);
    t.getType().runtime.bin.discardUnknownFields(t);
    for (const f of l) t.getType().runtime.bin.onUnknownField(t, f.no, f.wireType, f.data);
  }
  const o = s.writerFactory();
  let a = e.field;
  !a.opt && !a.repeated && (a.kind == "enum" || a.kind == "scalar") && (a = { ...e.field, opt: true }), e.runtime.bin.writeField(a, n, o, s);
  const u = i.readerFactory(o.finish());
  for (; u.pos < u.len; ) {
    const [l, f] = u.tag(), c = u.skip(f, l);
    t.getType().runtime.bin.onUnknownField(t, l, f, c);
  }
}
function hasExtension(t, e) {
  const n = t.getType();
  return e.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(t).find((r) => r.no == e.field.no);
}
function assertExtendee(t, e) {
  assert2(t.extendee.typeName == e.getType().typeName, `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`);
}
function isFieldSet(t, e) {
  const n = t.localName;
  if (t.repeated) return e[n].length > 0;
  if (t.oneof) return e[t.oneof.localName].case === n;
  switch (t.kind) {
    case "enum":
    case "scalar":
      return t.opt || t.req ? e[n] !== void 0 : t.kind == "enum" ? e[n] !== t.T.values[0].no : !isScalarZeroValue(t.T, e[n]);
    case "message":
      return e[n] !== void 0;
    case "map":
      return Object.keys(e[n]).length > 0;
  }
}
function clearField(t, e) {
  const n = t.localName, r = !t.opt && !t.req;
  if (t.repeated) e[n] = [];
  else if (t.oneof) e[t.oneof.localName] = { case: void 0 };
  else switch (t.kind) {
    case "map":
      e[n] = {};
      break;
    case "enum":
      e[n] = r ? t.T.values[0].no : void 0;
      break;
    case "scalar":
      e[n] = r ? scalarZeroValue(t.T, t.L) : void 0;
      break;
    case "message":
      e[n] = void 0;
      break;
  }
}
function isMessage(t, e) {
  if (t === null || typeof t != "object" || !Object.getOwnPropertyNames(Message.prototype).every((r) => r in t && typeof t[r] == "function")) return false;
  const n = t.getType();
  return n === null || typeof n != "function" || !("typeName" in n) || typeof n.typeName != "string" ? false : e === void 0 ? true : n.typeName == e.typeName;
}
function wrapField(t, e) {
  const n = isMessage(e);
  return !n && !t.fieldWrapper ? new t(e) : n || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e);
}
var wktWrapperToScalarType = { "google.protobuf.DoubleValue": ScalarType.DOUBLE, "google.protobuf.FloatValue": ScalarType.FLOAT, "google.protobuf.Int64Value": ScalarType.INT64, "google.protobuf.UInt64Value": ScalarType.UINT64, "google.protobuf.Int32Value": ScalarType.INT32, "google.protobuf.UInt32Value": ScalarType.UINT32, "google.protobuf.BoolValue": ScalarType.BOOL, "google.protobuf.StringValue": ScalarType.STRING, "google.protobuf.BytesValue": ScalarType.BYTES }, jsonReadDefaults = { ignoreUnknownFields: false }, jsonWriteDefaults = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
function makeReadOptions(t) {
  return t ? { ...jsonReadDefaults, ...t } : jsonReadDefaults;
}
function makeWriteOptions(t) {
  return t ? { ...jsonWriteDefaults, ...t } : jsonWriteDefaults;
}
var tokenNull = /* @__PURE__ */ Symbol(), tokenIgnoredUnknownEnum = /* @__PURE__ */ Symbol();
function makeJsonFormat() {
  return { makeReadOptions, makeWriteOptions, readMessage(t, e, n, r) {
    if (e == null || Array.isArray(e) || typeof e != "object") throw new Error(`cannot decode message ${t.typeName} from JSON: ${debugJsonValue(e)}`);
    r = r ?? new t();
    const i = /* @__PURE__ */ new Map(), s = n.typeRegistry;
    for (const [o, a] of Object.entries(e)) {
      const u = t.fields.findJsonName(o);
      if (u) {
        if (u.oneof) {
          if (a === null && u.kind == "scalar") continue;
          const l = i.get(u.oneof);
          if (l !== void 0) throw new Error(`cannot decode message ${t.typeName} from JSON: multiple keys for oneof "${u.oneof.name}" present: "${l}", "${o}"`);
          i.set(u.oneof, o);
        }
        readField(r, a, u, n, t);
      } else {
        let l = false;
        if (s?.findExtension && o.startsWith("[") && o.endsWith("]")) {
          const f = s.findExtension(o.substring(1, o.length - 1));
          if (f && f.extendee.typeName == t.typeName) {
            l = true;
            const [c, m] = createExtensionContainer(f);
            readField(c, a, f.field, n, f), setExtension(r, f, m(), n);
          }
        }
        if (!l && !n.ignoreUnknownFields) throw new Error(`cannot decode message ${t.typeName} from JSON: key "${o}" is unknown`);
      }
    }
    return r;
  }, writeMessage(t, e) {
    const n = t.getType(), r = {};
    let i;
    try {
      for (i of n.fields.byNumber()) {
        if (!isFieldSet(i, t)) {
          if (i.req) throw "required field not set";
          if (!e.emitDefaultValues || !canEmitFieldDefaultValue(i)) continue;
        }
        const o = i.oneof ? t[i.oneof.localName].value : t[i.localName], a = writeField(i, o, e);
        a !== void 0 && (r[e.useProtoFieldName ? i.name : i.jsonName] = a);
      }
      const s = e.typeRegistry;
      if (s?.findExtensionFor) for (const o of n.runtime.bin.listUnknownFields(t)) {
        const a = s.findExtensionFor(n.typeName, o.no);
        if (a && hasExtension(t, a)) {
          const u = getExtension(t, a, e), l = writeField(a.field, u, e);
          l !== void 0 && (r[a.field.jsonName] = l);
        }
      }
    } catch (s) {
      const o = i ? `cannot encode field ${n.typeName}.${i.name} to JSON` : `cannot encode message ${n.typeName} to JSON`, a = s instanceof Error ? s.message : String(s);
      throw new Error(o + (a.length > 0 ? `: ${a}` : ""));
    }
    return r;
  }, readScalar(t, e, n) {
    return readScalar(t, e, n ?? LongType.BIGINT, true);
  }, writeScalar(t, e, n) {
    if (e !== void 0 && (n || isScalarZeroValue(t, e))) return writeScalar(t, e);
  }, debug: debugJsonValue };
}
function debugJsonValue(t) {
  if (t === null) return "null";
  switch (typeof t) {
    case "object":
      return Array.isArray(t) ? "array" : "object";
    case "string":
      return t.length > 100 ? "string" : `"${t.split('"').join('\\"')}"`;
    default:
      return String(t);
  }
}
function readField(t, e, n, r, i) {
  let s = n.localName;
  if (n.repeated) {
    if (assert2(n.kind != "map"), e === null) return;
    if (!Array.isArray(e)) throw new Error(`cannot decode field ${i.typeName}.${n.name} from JSON: ${debugJsonValue(e)}`);
    const o = t[s];
    for (const a of e) {
      if (a === null) throw new Error(`cannot decode field ${i.typeName}.${n.name} from JSON: ${debugJsonValue(a)}`);
      switch (n.kind) {
        case "message":
          o.push(n.T.fromJson(a, r));
          break;
        case "enum":
          const u = readEnum(n.T, a, r.ignoreUnknownFields, true);
          u !== tokenIgnoredUnknownEnum && o.push(u);
          break;
        case "scalar":
          try {
            o.push(readScalar(n.T, a, n.L, true));
          } catch (l) {
            let f = `cannot decode field ${i.typeName}.${n.name} from JSON: ${debugJsonValue(a)}`;
            throw l instanceof Error && l.message.length > 0 && (f += `: ${l.message}`), new Error(f);
          }
          break;
      }
    }
  } else if (n.kind == "map") {
    if (e === null) return;
    if (typeof e != "object" || Array.isArray(e)) throw new Error(`cannot decode field ${i.typeName}.${n.name} from JSON: ${debugJsonValue(e)}`);
    const o = t[s];
    for (const [a, u] of Object.entries(e)) {
      if (u === null) throw new Error(`cannot decode field ${i.typeName}.${n.name} from JSON: map value null`);
      let l;
      try {
        l = readMapKey(n.K, a);
      } catch (f) {
        let c = `cannot decode map key for field ${i.typeName}.${n.name} from JSON: ${debugJsonValue(e)}`;
        throw f instanceof Error && f.message.length > 0 && (c += `: ${f.message}`), new Error(c);
      }
      switch (n.V.kind) {
        case "message":
          o[l] = n.V.T.fromJson(u, r);
          break;
        case "enum":
          const f = readEnum(n.V.T, u, r.ignoreUnknownFields, true);
          f !== tokenIgnoredUnknownEnum && (o[l] = f);
          break;
        case "scalar":
          try {
            o[l] = readScalar(n.V.T, u, LongType.BIGINT, true);
          } catch (c) {
            let m = `cannot decode map value for field ${i.typeName}.${n.name} from JSON: ${debugJsonValue(e)}`;
            throw c instanceof Error && c.message.length > 0 && (m += `: ${c.message}`), new Error(m);
          }
          break;
      }
    }
  } else switch (n.oneof && (t = t[n.oneof.localName] = { case: s }, s = "value"), n.kind) {
    case "message":
      const o = n.T;
      if (e === null && o.typeName != "google.protobuf.Value") return;
      let a = t[s];
      isMessage(a) ? a.fromJson(e, r) : (t[s] = a = o.fromJson(e, r), o.fieldWrapper && !n.oneof && (t[s] = o.fieldWrapper.unwrapField(a)));
      break;
    case "enum":
      const u = readEnum(n.T, e, r.ignoreUnknownFields, false);
      switch (u) {
        case tokenNull:
          clearField(n, t);
          break;
        case tokenIgnoredUnknownEnum:
          break;
        default:
          t[s] = u;
          break;
      }
      break;
    case "scalar":
      try {
        const l = readScalar(n.T, e, n.L, false);
        switch (l) {
          case tokenNull:
            clearField(n, t);
            break;
          default:
            t[s] = l;
            break;
        }
      } catch (l) {
        let f = `cannot decode field ${i.typeName}.${n.name} from JSON: ${debugJsonValue(e)}`;
        throw l instanceof Error && l.message.length > 0 && (f += `: ${l.message}`), new Error(f);
      }
      break;
  }
}
function readMapKey(t, e) {
  if (t === ScalarType.BOOL) switch (e) {
    case "true":
      e = true;
      break;
    case "false":
      e = false;
      break;
  }
  return readScalar(t, e, LongType.BIGINT, true).toString();
}
function readScalar(t, e, n, r) {
  if (e === null) return r ? scalarZeroValue(t, n) : tokenNull;
  switch (t) {
    case ScalarType.DOUBLE:
    case ScalarType.FLOAT:
      if (e === "NaN") return Number.NaN;
      if (e === "Infinity") return Number.POSITIVE_INFINITY;
      if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
      if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number") break;
      const i = Number(e);
      if (Number.isNaN(i) || !Number.isFinite(i)) break;
      return t == ScalarType.FLOAT && assertFloat32(i), i;
    case ScalarType.INT32:
    case ScalarType.FIXED32:
    case ScalarType.SFIXED32:
    case ScalarType.SINT32:
    case ScalarType.UINT32:
      let s;
      if (typeof e == "number" ? s = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (s = Number(e)), s === void 0) break;
      return t == ScalarType.UINT32 || t == ScalarType.FIXED32 ? assertUInt32(s) : assertInt32(s), s;
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const o = protoInt64.parse(e);
      return n ? o.toString() : o;
    case ScalarType.FIXED64:
    case ScalarType.UINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const a = protoInt64.uParse(e);
      return n ? a.toString() : a;
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
function readEnum(t, e, n, r) {
  if (e === null) return t.typeName == "google.protobuf.NullValue" ? 0 : r ? t.values[0].no : tokenNull;
  switch (typeof e) {
    case "number":
      if (Number.isInteger(e)) return e;
      break;
    case "string":
      const i = t.findName(e);
      if (i !== void 0) return i.no;
      if (n) return tokenIgnoredUnknownEnum;
      break;
  }
  throw new Error(`cannot decode enum ${t.typeName} from JSON: ${debugJsonValue(e)}`);
}
function canEmitFieldDefaultValue(t) {
  return t.repeated || t.kind == "map" ? true : !(t.oneof || t.kind == "message" || t.opt || t.req);
}
function writeField(t, e, n) {
  if (t.kind == "map") {
    assert2(typeof e == "object" && e != null);
    const r = {}, i = Object.entries(e);
    switch (t.V.kind) {
      case "scalar":
        for (const [o, a] of i) r[o.toString()] = writeScalar(t.V.T, a);
        break;
      case "message":
        for (const [o, a] of i) r[o.toString()] = a.toJson(n);
        break;
      case "enum":
        const s = t.V.T;
        for (const [o, a] of i) r[o.toString()] = writeEnum(s, a, n.enumAsInteger);
        break;
    }
    return n.emitDefaultValues || i.length > 0 ? r : void 0;
  }
  if (t.repeated) {
    assert2(Array.isArray(e));
    const r = [];
    switch (t.kind) {
      case "scalar":
        for (let i = 0; i < e.length; i++) r.push(writeScalar(t.T, e[i]));
        break;
      case "enum":
        for (let i = 0; i < e.length; i++) r.push(writeEnum(t.T, e[i], n.enumAsInteger));
        break;
      case "message":
        for (let i = 0; i < e.length; i++) r.push(e[i].toJson(n));
        break;
    }
    return n.emitDefaultValues || r.length > 0 ? r : void 0;
  }
  switch (t.kind) {
    case "scalar":
      return writeScalar(t.T, e);
    case "enum":
      return writeEnum(t.T, e, n.enumAsInteger);
    case "message":
      return wrapField(t.T, e).toJson(n);
  }
}
function writeEnum(t, e, n) {
  return assert2(typeof e == "number"), t.typeName == "google.protobuf.NullValue" ? null : n ? e : t.findNumber(e)?.name ?? e;
}
function writeScalar(t, e) {
  switch (t) {
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
var WireType = ((t) => (t[t.Varint = 0] = "Varint", t[t.Bit64 = 1] = "Bit64", t[t.LengthDelimited = 2] = "LengthDelimited", t[t.StartGroup = 3] = "StartGroup", t[t.EndGroup = 4] = "EndGroup", t[t.Bit32 = 5] = "Bit32", t))(WireType || {}), BinaryWriter = class {
  constructor(t) {
    this.stack = [], this.textEncoder = t ?? new TextEncoder(), this.chunks = [], this.buf = [];
  }
  finish() {
    this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
    let t = 0;
    for (let r = 0; r < this.chunks.length; r++) t += this.chunks[r].length;
    let e = new Uint8Array(t), n = 0;
    for (let r = 0; r < this.chunks.length; r++) e.set(this.chunks[r], n), n += this.chunks[r].length;
    return this.chunks = [], e;
  }
  fork() {
    return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
  }
  join() {
    let t = this.finish(), e = this.stack.pop();
    if (!e) throw new Error("invalid state, fork stack empty");
    return this.chunks = e.chunks, this.buf = e.buf, this.uint32(t.byteLength), this.raw(t);
  }
  tag(t, e) {
    return this.uint32((t << 3 | e) >>> 0);
  }
  raw(t) {
    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(t), this;
  }
  uint32(t) {
    for (assertUInt32(t); t > 127; ) this.buf.push(t & 127 | 128), t = t >>> 7;
    return this.buf.push(t), this;
  }
  int32(t) {
    return assertInt32(t), varint32write(t, this.buf), this;
  }
  bool(t) {
    return this.buf.push(t ? 1 : 0), this;
  }
  bytes(t) {
    return this.uint32(t.byteLength), this.raw(t);
  }
  string(t) {
    let e = this.textEncoder.encode(t);
    return this.uint32(e.byteLength), this.raw(e);
  }
  float(t) {
    assertFloat32(t);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setFloat32(0, t, true), this.raw(e);
  }
  double(t) {
    let e = new Uint8Array(8);
    return new DataView(e.buffer).setFloat64(0, t, true), this.raw(e);
  }
  fixed32(t) {
    assertUInt32(t);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setUint32(0, t, true), this.raw(e);
  }
  sfixed32(t) {
    assertInt32(t);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setInt32(0, t, true), this.raw(e);
  }
  sint32(t) {
    return assertInt32(t), t = (t << 1 ^ t >> 31) >>> 0, varint32write(t, this.buf), this;
  }
  sfixed64(t) {
    let e = new Uint8Array(8), n = new DataView(e.buffer), r = protoInt64.enc(t);
    return n.setInt32(0, r.lo, true), n.setInt32(4, r.hi, true), this.raw(e);
  }
  fixed64(t) {
    let e = new Uint8Array(8), n = new DataView(e.buffer), r = protoInt64.uEnc(t);
    return n.setInt32(0, r.lo, true), n.setInt32(4, r.hi, true), this.raw(e);
  }
  int64(t) {
    let e = protoInt64.enc(t);
    return varint64write(e.lo, e.hi, this.buf), this;
  }
  sint64(t) {
    let e = protoInt64.enc(t), n = e.hi >> 31, r = e.lo << 1 ^ n, i = (e.hi << 1 | e.lo >>> 31) ^ n;
    return varint64write(r, i, this.buf), this;
  }
  uint64(t) {
    let e = protoInt64.uEnc(t);
    return varint64write(e.lo, e.hi, this.buf), this;
  }
}, BinaryReader = class {
  constructor(t, e) {
    this.varint64 = varint64read, this.uint32 = varint32read, this.buf = t, this.len = t.length, this.pos = 0, this.view = new DataView(t.buffer, t.byteOffset, t.byteLength), this.textDecoder = e ?? new TextDecoder();
  }
  tag() {
    let t = this.uint32(), e = t >>> 3, n = t & 7;
    if (e <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + e + " wire type " + n);
    return [e, n];
  }
  skip(t, e) {
    let n = this.pos;
    switch (t) {
      case 0:
        for (; this.buf[this.pos++] & 128; ) ;
        break;
      case 1:
        this.pos += 4;
      case 5:
        this.pos += 4;
        break;
      case 2:
        let r = this.uint32();
        this.pos += r;
        break;
      case 3:
        for (; ; ) {
          const [i, s] = this.tag();
          if (s === 4) {
            if (e !== void 0 && i !== e) throw new Error("invalid end group tag");
            break;
          }
          this.skip(s, i);
        }
        break;
      default:
        throw new Error("cant skip wire type " + t);
    }
    return this.assertBounds(), this.buf.subarray(n, this.pos);
  }
  assertBounds() {
    if (this.pos > this.len) throw new RangeError("premature EOF");
  }
  int32() {
    return this.uint32() | 0;
  }
  sint32() {
    let t = this.uint32();
    return t >>> 1 ^ -(t & 1);
  }
  int64() {
    return protoInt64.dec(...this.varint64());
  }
  uint64() {
    return protoInt64.uDec(...this.varint64());
  }
  sint64() {
    let [t, e] = this.varint64(), n = -(t & 1);
    return t = (t >>> 1 | (e & 1) << 31) ^ n, e = e >>> 1 ^ n, protoInt64.dec(t, e);
  }
  bool() {
    let [t, e] = this.varint64();
    return t !== 0 || e !== 0;
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
    let t = this.uint32(), e = this.pos;
    return this.pos += t, this.assertBounds(), this.buf.subarray(e, e + t);
  }
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}, unknownFieldsSymbol = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), readDefaults = { readUnknownFields: true, readerFactory: (t) => new BinaryReader(t) }, writeDefaults = { writeUnknownFields: true, writerFactory: () => new BinaryWriter() };
function makeReadOptions2(t) {
  return t ? { ...readDefaults, ...t } : readDefaults;
}
function makeWriteOptions2(t) {
  return t ? { ...writeDefaults, ...t } : writeDefaults;
}
function makeBinaryFormat() {
  return { makeReadOptions: makeReadOptions2, makeWriteOptions: makeWriteOptions2, listUnknownFields(t) {
    return t[unknownFieldsSymbol] ?? [];
  }, discardUnknownFields(t) {
    delete t[unknownFieldsSymbol];
  }, writeUnknownFields(t, e) {
    const r = t[unknownFieldsSymbol];
    if (r) for (const i of r) e.tag(i.no, i.wireType).raw(i.data);
  }, onUnknownField(t, e, n, r) {
    const i = t;
    Array.isArray(i[unknownFieldsSymbol]) || (i[unknownFieldsSymbol] = []), i[unknownFieldsSymbol].push({ no: e, wireType: n, data: new Uint8Array(r) });
  }, readMessage(t, e, n, r, i) {
    const s = t.getType(), o = i ? e.len : e.pos + n;
    let a, u;
    for (; e.pos < o && ([a, u] = e.tag(), !(i === true && u == WireType.EndGroup)); ) {
      const l = s.fields.find(a);
      if (!l) {
        const f = e.skip(u, a);
        r.readUnknownFields && this.onUnknownField(t, a, u, f);
        continue;
      }
      readField2(t, e, l, u, r);
    }
    if (i && (u != WireType.EndGroup || a !== n)) throw new Error("invalid end group tag");
  }, readField: readField2, writeMessage(t, e, n) {
    const r = t.getType();
    for (const i of r.fields.byNumber()) {
      if (!isFieldSet(i, t)) {
        if (i.req) throw new Error(`cannot encode field ${r.typeName}.${i.name} to binary: required field not set`);
        continue;
      }
      const s = i.oneof ? t[i.oneof.localName].value : t[i.localName];
      writeField2(i, s, e, n);
    }
    return n.writeUnknownFields && this.writeUnknownFields(t, e), e;
  }, writeField(t, e, n, r) {
    e !== void 0 && writeField2(t, e, n, r);
  } };
}
function readField2(t, e, n, r, i) {
  let { repeated: s, localName: o } = n;
  switch (n.oneof && (t = t[n.oneof.localName], t.case != o && delete t.value, t.case = o, o = "value"), n.kind) {
    case "scalar":
    case "enum":
      const a = n.kind == "enum" ? ScalarType.INT32 : n.T;
      let u = readScalar2;
      if (n.kind == "scalar" && n.L > 0 && (u = readScalarLTString), s) {
        let m = t[o];
        if (r == WireType.LengthDelimited && a != ScalarType.STRING && a != ScalarType.BYTES) {
          let g = e.uint32() + e.pos;
          for (; e.pos < g; ) m.push(u(e, a));
        } else m.push(u(e, a));
      } else t[o] = u(e, a);
      break;
    case "message":
      const l = n.T;
      s ? t[o].push(readMessageField(e, new l(), i, n)) : isMessage(t[o]) ? readMessageField(e, t[o], i, n) : (t[o] = readMessageField(e, new l(), i, n), l.fieldWrapper && !n.oneof && !n.repeated && (t[o] = l.fieldWrapper.unwrapField(t[o])));
      break;
    case "map":
      let [f, c] = readMapEntry(n, e, i);
      t[o][f] = c;
      break;
  }
}
function readMessageField(t, e, n, r) {
  const i = e.getType().runtime.bin, s = r?.delimited;
  return i.readMessage(e, t, s ? r.no : t.uint32(), n, s), e;
}
function readMapEntry(t, e, n) {
  const r = e.uint32(), i = e.pos + r;
  let s, o;
  for (; e.pos < i; ) {
    const [a] = e.tag();
    switch (a) {
      case 1:
        s = readScalar2(e, t.K);
        break;
      case 2:
        switch (t.V.kind) {
          case "scalar":
            o = readScalar2(e, t.V.T);
            break;
          case "enum":
            o = e.int32();
            break;
          case "message":
            o = readMessageField(e, new t.V.T(), n, void 0);
            break;
        }
        break;
    }
  }
  if (s === void 0 && (s = scalarZeroValue(t.K, LongType.BIGINT)), typeof s != "string" && typeof s != "number" && (s = s.toString()), o === void 0) switch (t.V.kind) {
    case "scalar":
      o = scalarZeroValue(t.V.T, LongType.BIGINT);
      break;
    case "enum":
      o = t.V.T.values[0].no;
      break;
    case "message":
      o = new t.V.T();
      break;
  }
  return [s, o];
}
function readScalarLTString(t, e) {
  const n = readScalar2(t, e);
  return typeof n == "bigint" ? n.toString() : n;
}
function readScalar2(t, e) {
  switch (e) {
    case ScalarType.STRING:
      return t.string();
    case ScalarType.BOOL:
      return t.bool();
    case ScalarType.DOUBLE:
      return t.double();
    case ScalarType.FLOAT:
      return t.float();
    case ScalarType.INT32:
      return t.int32();
    case ScalarType.INT64:
      return t.int64();
    case ScalarType.UINT64:
      return t.uint64();
    case ScalarType.FIXED64:
      return t.fixed64();
    case ScalarType.BYTES:
      return t.bytes();
    case ScalarType.FIXED32:
      return t.fixed32();
    case ScalarType.SFIXED32:
      return t.sfixed32();
    case ScalarType.SFIXED64:
      return t.sfixed64();
    case ScalarType.SINT64:
      return t.sint64();
    case ScalarType.UINT32:
      return t.uint32();
    case ScalarType.SINT32:
      return t.sint32();
  }
}
function writeField2(t, e, n, r) {
  assert2(e !== void 0);
  const i = t.repeated;
  switch (t.kind) {
    case "scalar":
    case "enum":
      let s = t.kind == "enum" ? ScalarType.INT32 : t.T;
      if (i) if (assert2(Array.isArray(e)), t.packed) writePacked(n, s, t.no, e);
      else for (const o of e) writeScalar2(n, s, t.no, o);
      else writeScalar2(n, s, t.no, e);
      break;
    case "message":
      if (i) {
        assert2(Array.isArray(e));
        for (const o of e) writeMessageField(n, r, t, o);
      } else writeMessageField(n, r, t, e);
      break;
    case "map":
      assert2(typeof e == "object" && e != null);
      for (const [o, a] of Object.entries(e)) writeMapEntry(n, r, t, o, a);
      break;
  }
}
function writeMapEntry(t, e, n, r, i) {
  t.tag(n.no, WireType.LengthDelimited), t.fork();
  let s = r;
  switch (n.K) {
    case ScalarType.INT32:
    case ScalarType.FIXED32:
    case ScalarType.UINT32:
    case ScalarType.SFIXED32:
    case ScalarType.SINT32:
      s = Number.parseInt(r);
      break;
    case ScalarType.BOOL:
      assert2(r == "true" || r == "false"), s = r == "true";
      break;
  }
  switch (writeScalar2(t, n.K, 1, s), n.V.kind) {
    case "scalar":
      writeScalar2(t, n.V.T, 2, i);
      break;
    case "enum":
      writeScalar2(t, ScalarType.INT32, 2, i);
      break;
    case "message":
      assert2(i !== void 0), t.tag(2, WireType.LengthDelimited).bytes(i.toBinary(e));
      break;
  }
  t.join();
}
function writeMessageField(t, e, n, r) {
  const i = wrapField(n.T, r);
  n.delimited ? t.tag(n.no, WireType.StartGroup).raw(i.toBinary(e)).tag(n.no, WireType.EndGroup) : t.tag(n.no, WireType.LengthDelimited).bytes(i.toBinary(e));
}
function writeScalar2(t, e, n, r) {
  assert2(r !== void 0);
  let [i, s] = scalarTypeInfo(e);
  t.tag(n, i)[s](r);
}
function writePacked(t, e, n, r) {
  if (!r.length) return;
  t.tag(n, WireType.LengthDelimited).fork();
  let [, i] = scalarTypeInfo(e);
  for (let s = 0; s < r.length; s++) t[i](r[s]);
  t.join();
}
function scalarTypeInfo(t) {
  let e = WireType.Varint;
  switch (t) {
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
  const n = ScalarType[t].toLowerCase();
  return [e, n];
}
function makeUtilCommon() {
  return { setEnumType, initPartial(t, e) {
    if (t === void 0) return;
    const n = e.getType();
    for (const r of n.fields.byMember()) {
      const i = r.localName, s = e, o = t;
      if (o[i] != null) switch (r.kind) {
        case "oneof":
          const a = o[i].case;
          if (a === void 0) continue;
          const u = r.findField(a);
          let l = o[i].value;
          u && u.kind == "message" && !isMessage(l, u.T) ? l = new u.T(l) : u && u.kind === "scalar" && u.T === ScalarType.BYTES && (l = toU8Arr(l)), s[i] = { case: a, value: l };
          break;
        case "scalar":
        case "enum":
          let f = o[i];
          r.T === ScalarType.BYTES && (f = r.repeated ? f.map(toU8Arr) : toU8Arr(f)), s[i] = f;
          break;
        case "map":
          switch (r.V.kind) {
            case "scalar":
            case "enum":
              if (r.V.T === ScalarType.BYTES) for (const [h, g] of Object.entries(o[i])) s[i][h] = toU8Arr(g);
              else Object.assign(s[i], o[i]);
              break;
            case "message":
              const m = r.V.T;
              for (const h of Object.keys(o[i])) {
                let g = o[i][h];
                m.fieldWrapper || (g = new m(g)), s[i][h] = g;
              }
              break;
          }
          break;
        case "message":
          const c = r.T;
          if (r.repeated) s[i] = o[i].map((m) => isMessage(m, c) ? m : new c(m));
          else {
            const m = o[i];
            c.fieldWrapper ? c.typeName === "google.protobuf.BytesValue" ? s[i] = toU8Arr(m) : s[i] = m : s[i] = isMessage(m, c) ? m : new c(m);
          }
          break;
      }
    }
  }, equals(t, e, n) {
    return e === n ? true : !e || !n ? false : t.fields.byMember().every((r) => {
      const i = e[r.localName], s = n[r.localName];
      if (r.repeated) {
        if (i.length !== s.length) return false;
        switch (r.kind) {
          case "message":
            return i.every((o, a) => r.T.equals(o, s[a]));
          case "scalar":
            return i.every((o, a) => scalarEquals(r.T, o, s[a]));
          case "enum":
            return i.every((o, a) => scalarEquals(ScalarType.INT32, o, s[a]));
        }
        throw new Error(`repeated cannot contain ${r.kind}`);
      }
      switch (r.kind) {
        case "message":
          return r.T.equals(i, s);
        case "enum":
          return scalarEquals(ScalarType.INT32, i, s);
        case "scalar":
          return scalarEquals(r.T, i, s);
        case "oneof":
          if (i.case !== s.case) return false;
          const o = r.findField(i.case);
          if (o === void 0) return true;
          switch (o.kind) {
            case "message":
              return o.T.equals(i.value, s.value);
            case "enum":
              return scalarEquals(ScalarType.INT32, i.value, s.value);
            case "scalar":
              return scalarEquals(o.T, i.value, s.value);
          }
          throw new Error(`oneof cannot contain ${o.kind}`);
        case "map":
          const a = Object.keys(i).concat(Object.keys(s));
          switch (r.V.kind) {
            case "message":
              const u = r.V.T;
              return a.every((f) => u.equals(i[f], s[f]));
            case "enum":
              return a.every((f) => scalarEquals(ScalarType.INT32, i[f], s[f]));
            case "scalar":
              const l = r.V.T;
              return a.every((f) => scalarEquals(l, i[f], s[f]));
          }
          break;
      }
    });
  }, clone(t) {
    const e = t.getType(), n = new e(), r = n;
    for (const i of e.fields.byMember()) {
      const s = t[i.localName];
      let o;
      if (i.repeated) o = s.map(cloneSingularField);
      else if (i.kind == "map") {
        o = r[i.localName];
        for (const [a, u] of Object.entries(s)) o[a] = cloneSingularField(u);
      } else i.kind == "oneof" ? o = i.findField(s.case) ? { case: s.case, value: cloneSingularField(s.value) } : { case: void 0 } : o = cloneSingularField(s);
      r[i.localName] = o;
    }
    for (const i of e.runtime.bin.listUnknownFields(t)) e.runtime.bin.onUnknownField(r, i.no, i.wireType, i.data);
    return n;
  } };
}
function cloneSingularField(t) {
  if (t === void 0) return t;
  if (isMessage(t)) return t.clone();
  if (t instanceof Uint8Array) {
    const e = new Uint8Array(t.byteLength);
    return e.set(t), e;
  }
  return t;
}
function toU8Arr(t) {
  return t instanceof Uint8Array ? t : new Uint8Array(t);
}
function makeProtoRuntime(t, e, n) {
  return { syntax: t, json: makeJsonFormat(), bin: makeBinaryFormat(), util: { ...makeUtilCommon(), newFieldList: e, initFields: n }, makeMessageType(r, i, s) {
    return makeMessageType(this, r, i, s);
  }, makeEnum, makeEnumType, getEnumType, makeExtension(r, i, s) {
    return makeExtension(this, r, i, s);
  } };
}
var InternalFieldList = class {
  constructor(t, e) {
    this._fields = t, this._normalizer = e;
  }
  findJsonName(t) {
    if (!this.jsonNames) {
      const e = {};
      for (const n of this.list()) e[n.jsonName] = e[n.name] = n;
      this.jsonNames = e;
    }
    return this.jsonNames[t];
  }
  find(t) {
    if (!this.numbers) {
      const e = {};
      for (const n of this.list()) e[n.no] = n;
      this.numbers = e;
    }
    return this.numbers[t];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((t, e) => t.no - e.no)), this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const t = this.members;
      let e;
      for (const n of this.list()) n.oneof ? n.oneof !== e && (e = n.oneof, t.push(e)) : t.push(n);
    }
    return this.members;
  }
};
function localFieldName(t, e) {
  const n = protoCamelCase(t);
  return e ? n : safeObjectProperty(safeMessageProperty(n));
}
function localOneofName(t) {
  return localFieldName(t, false);
}
var fieldJsonName = protoCamelCase;
function protoCamelCase(t) {
  let e = false;
  const n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t.charAt(r);
    switch (i) {
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
        n.push(i), e = false;
        break;
      default:
        e && (e = false, i = i.toUpperCase()), n.push(i);
        break;
    }
  }
  return n.join("");
}
var reservedObjectProperties = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), reservedMessageProperties = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), fallback = (t) => `${t}$`, safeMessageProperty = (t) => reservedMessageProperties.has(t) ? fallback(t) : t, safeObjectProperty = (t) => reservedObjectProperties.has(t) ? fallback(t) : t, InternalOneofInfo = class {
  constructor(t) {
    this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = t, this.localName = localOneofName(t);
  }
  addField(t) {
    assert2(t.oneof === this, `field ${t.name} not one of ${this.name}`), this.fields.push(t);
  }
  findField(t) {
    if (!this._lookup) {
      this._lookup = /* @__PURE__ */ Object.create(null);
      for (let e = 0; e < this.fields.length; e++) this._lookup[this.fields[e].localName] = this.fields[e];
    }
    return this._lookup[t];
  }
};
function normalizeFieldInfos(t, e) {
  const n = [];
  let r;
  for (const i of typeof t == "function" ? t() : t) {
    const s = i;
    if (s.localName = localFieldName(i.name, i.oneof !== void 0), s.jsonName = i.jsonName ?? fieldJsonName(i.name), s.repeated = i.repeated ?? false, i.kind == "scalar" && (s.L = i.L ?? LongType.BIGINT), s.delimited = i.delimited ?? false, s.req = i.req ?? false, s.opt = i.opt ?? false, i.packed === void 0 && (e ? s.packed = i.kind == "enum" || i.kind == "scalar" && i.T != ScalarType.BYTES && i.T != ScalarType.STRING : s.packed = false), i.oneof !== void 0) {
      const o = typeof i.oneof == "string" ? i.oneof : i.oneof.name;
      (!r || r.name != o) && (r = new InternalOneofInfo(o)), s.oneof = r, r.addField(s);
    }
    n.push(s);
  }
  return n;
}
var proto3 = makeProtoRuntime("proto3", (t) => new InternalFieldList(t, (e) => normalizeFieldInfos(e, true)), (t) => {
  for (const e of t.getType().fields.byMember()) {
    if (e.opt) continue;
    const n = e.localName, r = t;
    if (e.repeated) {
      r[n] = [];
      continue;
    }
    switch (e.kind) {
      case "oneof":
        r[n] = { case: void 0 };
        break;
      case "enum":
        r[n] = 0;
        break;
      case "map":
        r[n] = {};
        break;
      case "scalar":
        r[n] = scalarZeroValue(e.T, e.L);
        break;
      case "message":
        break;
    }
  }
}), proto2 = makeProtoRuntime("proto2", (t) => new InternalFieldList(t, (e) => normalizeFieldInfos(e, false)), (t) => {
  for (const e of t.getType().fields.byMember()) {
    const n = e.localName, r = t;
    if (e.repeated) {
      r[n] = [];
      continue;
    }
    switch (e.kind) {
      case "oneof":
        r[n] = { case: void 0 };
        break;
      case "map":
        r[n] = {};
        break;
      case "scalar":
      case "enum":
      case "message":
        break;
    }
  }
}), protoDouble = { NaN: Number.NaN, POSITIVE_INFINITY: Number.POSITIVE_INFINITY, NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY }, Edition = ((t) => (t[t.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", t[t.EDITION_LEGACY = 900] = "EDITION_LEGACY", t[t.EDITION_PROTO2 = 998] = "EDITION_PROTO2", t[t.EDITION_PROTO3 = 999] = "EDITION_PROTO3", t[t.EDITION_2023 = 1e3] = "EDITION_2023", t[t.EDITION_2024 = 1001] = "EDITION_2024", t[t.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", t[t.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", t[t.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", t[t.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", t[t.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", t[t.EDITION_MAX = 2147483647] = "EDITION_MAX", t))(Edition || {});
proto2.util.setEnumType(Edition, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
var _FileDescriptorSet = class oe extends Message {
  constructor(e) {
    super(), this.file = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new oe().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new oe().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new oe().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(oe, e, n);
  }
};
_FileDescriptorSet.runtime = proto2, _FileDescriptorSet.typeName = "google.protobuf.FileDescriptorSet", _FileDescriptorSet.fields = proto2.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: FileDescriptorProto, repeated: true }]);
var _FileDescriptorProto = class ae extends Message {
  constructor(e) {
    super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ae().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ae().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ae().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(ae, e, n);
  }
};
_FileDescriptorProto.runtime = proto2, _FileDescriptorProto.typeName = "google.protobuf.FileDescriptorProto", _FileDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: DescriptorProto, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: EnumDescriptorProto, repeated: true }, { no: 6, name: "service", kind: "message", T: ServiceDescriptorProto, repeated: true }, { no: 7, name: "extension", kind: "message", T: FieldDescriptorProto, repeated: true }, { no: 8, name: "options", kind: "message", T: FileOptions, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: SourceCodeInfo, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: proto2.getEnumType(Edition), opt: true }]);
var FileDescriptorProto = _FileDescriptorProto, _DescriptorProto = class ue extends Message {
  constructor(e) {
    super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ue().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ue().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ue().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(ue, e, n);
  }
};
_DescriptorProto.runtime = proto2, _DescriptorProto.typeName = "google.protobuf.DescriptorProto", _DescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: FieldDescriptorProto, repeated: true }, { no: 6, name: "extension", kind: "message", T: FieldDescriptorProto, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: _DescriptorProto, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: EnumDescriptorProto, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: DescriptorProto_ExtensionRange, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: OneofDescriptorProto, repeated: true }, { no: 7, name: "options", kind: "message", T: MessageOptions, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: DescriptorProto_ReservedRange, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
var DescriptorProto = _DescriptorProto, _DescriptorProto_ExtensionRange = class le extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new le().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new le().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new le().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(le, e, n);
  }
};
_DescriptorProto_ExtensionRange.runtime = proto2, _DescriptorProto_ExtensionRange.typeName = "google.protobuf.DescriptorProto.ExtensionRange", _DescriptorProto_ExtensionRange.fields = proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: ExtensionRangeOptions, opt: true }]);
var DescriptorProto_ExtensionRange = _DescriptorProto_ExtensionRange, _DescriptorProto_ReservedRange = class ce extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ce().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ce().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ce().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(ce, e, n);
  }
};
_DescriptorProto_ReservedRange.runtime = proto2, _DescriptorProto_ReservedRange.typeName = "google.protobuf.DescriptorProto.ReservedRange", _DescriptorProto_ReservedRange.fields = proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
var DescriptorProto_ReservedRange = _DescriptorProto_ReservedRange, _ExtensionRangeOptions = class fe extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], this.declaration = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new fe().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new fe().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new fe().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(fe, e, n);
  }
};
_ExtensionRangeOptions.runtime = proto2, _ExtensionRangeOptions.typeName = "google.protobuf.ExtensionRangeOptions", _ExtensionRangeOptions.fields = proto2.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }, { no: 2, name: "declaration", kind: "message", T: ExtensionRangeOptions_Declaration, repeated: true }, { no: 50, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 3, name: "verification", kind: "enum", T: proto2.getEnumType(ExtensionRangeOptions_VerificationState), opt: true, default: 1 }]);
var ExtensionRangeOptions = _ExtensionRangeOptions, ExtensionRangeOptions_VerificationState = ((t) => (t[t.DECLARATION = 0] = "DECLARATION", t[t.UNVERIFIED = 1] = "UNVERIFIED", t))(ExtensionRangeOptions_VerificationState || {});
proto2.util.setEnumType(ExtensionRangeOptions_VerificationState, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
var _ExtensionRangeOptions_Declaration = class me extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new me().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new me().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new me().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(me, e, n);
  }
};
_ExtensionRangeOptions_Declaration.runtime = proto2, _ExtensionRangeOptions_Declaration.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", _ExtensionRangeOptions_Declaration.fields = proto2.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
var ExtensionRangeOptions_Declaration = _ExtensionRangeOptions_Declaration, _FieldDescriptorProto = class he extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new he().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new he().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new he().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(he, e, n);
  }
};
_FieldDescriptorProto.runtime = proto2, _FieldDescriptorProto.typeName = "google.protobuf.FieldDescriptorProto", _FieldDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: proto2.getEnumType(FieldDescriptorProto_Label), opt: true }, { no: 5, name: "type", kind: "enum", T: proto2.getEnumType(FieldDescriptorProto_Type), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: FieldOptions, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]);
var FieldDescriptorProto = _FieldDescriptorProto, FieldDescriptorProto_Type = ((t) => (t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.GROUP = 10] = "GROUP", t[t.MESSAGE = 11] = "MESSAGE", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.ENUM = 14] = "ENUM", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64", t))(FieldDescriptorProto_Type || {});
proto2.util.setEnumType(FieldDescriptorProto_Type, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
var FieldDescriptorProto_Label = ((t) => (t[t.OPTIONAL = 1] = "OPTIONAL", t[t.REPEATED = 3] = "REPEATED", t[t.REQUIRED = 2] = "REQUIRED", t))(FieldDescriptorProto_Label || {});
proto2.util.setEnumType(FieldDescriptorProto_Label, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
var _OneofDescriptorProto = class ge extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ge().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ge().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ge().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(ge, e, n);
  }
};
_OneofDescriptorProto.runtime = proto2, _OneofDescriptorProto.typeName = "google.protobuf.OneofDescriptorProto", _OneofDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: OneofOptions, opt: true }]);
var OneofDescriptorProto = _OneofDescriptorProto, _EnumDescriptorProto = class de extends Message {
  constructor(e) {
    super(), this.value = [], this.reservedRange = [], this.reservedName = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new de().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new de().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new de().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(de, e, n);
  }
};
_EnumDescriptorProto.runtime = proto2, _EnumDescriptorProto.typeName = "google.protobuf.EnumDescriptorProto", _EnumDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: EnumValueDescriptorProto, repeated: true }, { no: 3, name: "options", kind: "message", T: EnumOptions, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: EnumDescriptorProto_EnumReservedRange, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
var EnumDescriptorProto = _EnumDescriptorProto, _EnumDescriptorProto_EnumReservedRange = class _e extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new _e().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new _e().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new _e().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(_e, e, n);
  }
};
_EnumDescriptorProto_EnumReservedRange.runtime = proto2, _EnumDescriptorProto_EnumReservedRange.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", _EnumDescriptorProto_EnumReservedRange.fields = proto2.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
var EnumDescriptorProto_EnumReservedRange = _EnumDescriptorProto_EnumReservedRange, _EnumValueDescriptorProto = class pe extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new pe().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new pe().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new pe().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(pe, e, n);
  }
};
_EnumValueDescriptorProto.runtime = proto2, _EnumValueDescriptorProto.typeName = "google.protobuf.EnumValueDescriptorProto", _EnumValueDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: EnumValueOptions, opt: true }]);
var EnumValueDescriptorProto = _EnumValueDescriptorProto, _ServiceDescriptorProto = class Ee extends Message {
  constructor(e) {
    super(), this.method = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ee().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ee().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ee().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Ee, e, n);
  }
};
_ServiceDescriptorProto.runtime = proto2, _ServiceDescriptorProto.typeName = "google.protobuf.ServiceDescriptorProto", _ServiceDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: MethodDescriptorProto, repeated: true }, { no: 3, name: "options", kind: "message", T: ServiceOptions, opt: true }]);
var ServiceDescriptorProto = _ServiceDescriptorProto, _MethodDescriptorProto = class be extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new be().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new be().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new be().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(be, e, n);
  }
};
_MethodDescriptorProto.runtime = proto2, _MethodDescriptorProto.typeName = "google.protobuf.MethodDescriptorProto", _MethodDescriptorProto.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: MethodOptions, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
var MethodDescriptorProto = _MethodDescriptorProto, _FileOptions = class we extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new we().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new we().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new we().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(we, e, n);
  }
};
_FileOptions.runtime = proto2, _FileOptions.typeName = "google.protobuf.FileOptions", _FileOptions.fields = proto2.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: proto2.getEnumType(FileOptions_OptimizeMode), opt: true, default: 1 }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var FileOptions = _FileOptions, FileOptions_OptimizeMode = ((t) => (t[t.SPEED = 1] = "SPEED", t[t.CODE_SIZE = 2] = "CODE_SIZE", t[t.LITE_RUNTIME = 3] = "LITE_RUNTIME", t))(FileOptions_OptimizeMode || {});
proto2.util.setEnumType(FileOptions_OptimizeMode, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
var _MessageOptions = class ve extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ve().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ve().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ve().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(ve, e, n);
  }
};
_MessageOptions.runtime = proto2, _MessageOptions.typeName = "google.protobuf.MessageOptions", _MessageOptions.fields = proto2.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var MessageOptions = _MessageOptions, _FieldOptions = class Ne extends Message {
  constructor(e) {
    super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ne().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ne().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ne().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Ne, e, n);
  }
};
_FieldOptions.runtime = proto2, _FieldOptions.typeName = "google.protobuf.FieldOptions", _FieldOptions.fields = proto2.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: proto2.getEnumType(FieldOptions_CType), opt: true, default: 0 }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: proto2.getEnumType(FieldOptions_JSType), opt: true, default: 0 }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: proto2.getEnumType(FieldOptions_OptionRetention), opt: true }, { no: 19, name: "targets", kind: "enum", T: proto2.getEnumType(FieldOptions_OptionTargetType), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: FieldOptions_EditionDefault, repeated: true }, { no: 21, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 22, name: "feature_support", kind: "message", T: FieldOptions_FeatureSupport, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var FieldOptions = _FieldOptions, FieldOptions_CType = ((t) => (t[t.STRING = 0] = "STRING", t[t.CORD = 1] = "CORD", t[t.STRING_PIECE = 2] = "STRING_PIECE", t))(FieldOptions_CType || {});
proto2.util.setEnumType(FieldOptions_CType, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]);
var FieldOptions_JSType = ((t) => (t[t.JS_NORMAL = 0] = "JS_NORMAL", t[t.JS_STRING = 1] = "JS_STRING", t[t.JS_NUMBER = 2] = "JS_NUMBER", t))(FieldOptions_JSType || {});
proto2.util.setEnumType(FieldOptions_JSType, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]);
var FieldOptions_OptionRetention = ((t) => (t[t.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", t[t.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", t[t.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", t))(FieldOptions_OptionRetention || {});
proto2.util.setEnumType(FieldOptions_OptionRetention, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]);
var FieldOptions_OptionTargetType = ((t) => (t[t.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", t[t.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", t[t.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", t[t.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", t[t.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", t[t.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", t[t.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", t[t.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", t[t.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", t[t.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", t))(FieldOptions_OptionTargetType || {});
proto2.util.setEnumType(FieldOptions_OptionTargetType, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
var _FieldOptions_EditionDefault = class Le extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Le().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Le().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Le().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Le, e, n);
  }
};
_FieldOptions_EditionDefault.runtime = proto2, _FieldOptions_EditionDefault.typeName = "google.protobuf.FieldOptions.EditionDefault", _FieldOptions_EditionDefault.fields = proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: proto2.getEnumType(Edition), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
var FieldOptions_EditionDefault = _FieldOptions_EditionDefault, _FieldOptions_FeatureSupport = class Te extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Te().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Te().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Te().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Te, e, n);
  }
};
_FieldOptions_FeatureSupport.runtime = proto2, _FieldOptions_FeatureSupport.typeName = "google.protobuf.FieldOptions.FeatureSupport", _FieldOptions_FeatureSupport.fields = proto2.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: proto2.getEnumType(Edition), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: proto2.getEnumType(Edition), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: proto2.getEnumType(Edition), opt: true }]);
var FieldOptions_FeatureSupport = _FieldOptions_FeatureSupport, _OneofOptions = class Se extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Se().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Se().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Se().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Se, e, n);
  }
};
_OneofOptions.runtime = proto2, _OneofOptions.typeName = "google.protobuf.OneofOptions", _OneofOptions.fields = proto2.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var OneofOptions = _OneofOptions, _EnumOptions = class Re extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Re().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Re().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Re().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Re, e, n);
  }
};
_EnumOptions.runtime = proto2, _EnumOptions.typeName = "google.protobuf.EnumOptions", _EnumOptions.fields = proto2.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var EnumOptions = _EnumOptions, _EnumValueOptions = class ye extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ye().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ye().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ye().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(ye, e, n);
  }
};
_EnumValueOptions.runtime = proto2, _EnumValueOptions.typeName = "google.protobuf.EnumValueOptions", _EnumValueOptions.fields = proto2.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: FieldOptions_FeatureSupport, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var EnumValueOptions = _EnumValueOptions, _ServiceOptions = class Ie extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ie().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ie().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ie().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Ie, e, n);
  }
};
_ServiceOptions.runtime = proto2, _ServiceOptions.typeName = "google.protobuf.ServiceOptions", _ServiceOptions.fields = proto2.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var ServiceOptions = _ServiceOptions, _MethodOptions = class Ae extends Message {
  constructor(e) {
    super(), this.uninterpretedOption = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ae().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ae().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ae().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Ae, e, n);
  }
};
_MethodOptions.runtime = proto2, _MethodOptions.typeName = "google.protobuf.MethodOptions", _MethodOptions.fields = proto2.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: proto2.getEnumType(MethodOptions_IdempotencyLevel), opt: true, default: 0 }, { no: 35, name: "features", kind: "message", T: FeatureSet, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true }]);
var MethodOptions = _MethodOptions, MethodOptions_IdempotencyLevel = ((t) => (t[t.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", t[t.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", t[t.IDEMPOTENT = 2] = "IDEMPOTENT", t))(MethodOptions_IdempotencyLevel || {});
proto2.util.setEnumType(MethodOptions_IdempotencyLevel, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
var _UninterpretedOption = class ke extends Message {
  constructor(e) {
    super(), this.name = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ke().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ke().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ke().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(ke, e, n);
  }
};
_UninterpretedOption.runtime = proto2, _UninterpretedOption.typeName = "google.protobuf.UninterpretedOption", _UninterpretedOption.fields = proto2.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: UninterpretedOption_NamePart, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
var UninterpretedOption = _UninterpretedOption, _UninterpretedOption_NamePart = class Oe extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Oe().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Oe().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Oe().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Oe, e, n);
  }
};
_UninterpretedOption_NamePart.runtime = proto2, _UninterpretedOption_NamePart.typeName = "google.protobuf.UninterpretedOption.NamePart", _UninterpretedOption_NamePart.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
var UninterpretedOption_NamePart = _UninterpretedOption_NamePart, _FeatureSet = class xe extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new xe().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new xe().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new xe().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(xe, e, n);
  }
};
_FeatureSet.runtime = proto2, _FeatureSet.typeName = "google.protobuf.FeatureSet", _FeatureSet.fields = proto2.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: proto2.getEnumType(FeatureSet_FieldPresence), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: proto2.getEnumType(FeatureSet_EnumType), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: proto2.getEnumType(FeatureSet_RepeatedFieldEncoding), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: proto2.getEnumType(FeatureSet_Utf8Validation), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: proto2.getEnumType(FeatureSet_MessageEncoding), opt: true }, { no: 6, name: "json_format", kind: "enum", T: proto2.getEnumType(FeatureSet_JsonFormat), opt: true }]);
var FeatureSet = _FeatureSet, FeatureSet_FieldPresence = ((t) => (t[t.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", t[t.EXPLICIT = 1] = "EXPLICIT", t[t.IMPLICIT = 2] = "IMPLICIT", t[t.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", t))(FeatureSet_FieldPresence || {});
proto2.util.setEnumType(FeatureSet_FieldPresence, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]);
var FeatureSet_EnumType = ((t) => (t[t.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", t[t.OPEN = 1] = "OPEN", t[t.CLOSED = 2] = "CLOSED", t))(FeatureSet_EnumType || {});
proto2.util.setEnumType(FeatureSet_EnumType, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]);
var FeatureSet_RepeatedFieldEncoding = ((t) => (t[t.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", t[t.PACKED = 1] = "PACKED", t[t.EXPANDED = 2] = "EXPANDED", t))(FeatureSet_RepeatedFieldEncoding || {});
proto2.util.setEnumType(FeatureSet_RepeatedFieldEncoding, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]);
var FeatureSet_Utf8Validation = ((t) => (t[t.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", t[t.VERIFY = 2] = "VERIFY", t[t.NONE = 3] = "NONE", t))(FeatureSet_Utf8Validation || {});
proto2.util.setEnumType(FeatureSet_Utf8Validation, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]);
var FeatureSet_MessageEncoding = ((t) => (t[t.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", t[t.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", t[t.DELIMITED = 2] = "DELIMITED", t))(FeatureSet_MessageEncoding || {});
proto2.util.setEnumType(FeatureSet_MessageEncoding, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]);
var FeatureSet_JsonFormat = ((t) => (t[t.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", t[t.ALLOW = 1] = "ALLOW", t[t.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", t))(FeatureSet_JsonFormat || {});
proto2.util.setEnumType(FeatureSet_JsonFormat, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
var _FeatureSetDefaults = class De extends Message {
  constructor(e) {
    super(), this.defaults = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new De().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new De().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new De().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(De, e, n);
  }
};
_FeatureSetDefaults.runtime = proto2, _FeatureSetDefaults.typeName = "google.protobuf.FeatureSetDefaults", _FeatureSetDefaults.fields = proto2.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: FeatureSetDefaults_FeatureSetEditionDefault, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: proto2.getEnumType(Edition), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: proto2.getEnumType(Edition), opt: true }]);
var _FeatureSetDefaults_FeatureSetEditionDefault = class Ue extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ue().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ue().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ue().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Ue, e, n);
  }
};
_FeatureSetDefaults_FeatureSetEditionDefault.runtime = proto2, _FeatureSetDefaults_FeatureSetEditionDefault.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", _FeatureSetDefaults_FeatureSetEditionDefault.fields = proto2.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: proto2.getEnumType(Edition), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: FeatureSet, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: FeatureSet, opt: true }]);
var FeatureSetDefaults_FeatureSetEditionDefault = _FeatureSetDefaults_FeatureSetEditionDefault, _SourceCodeInfo = class Pe extends Message {
  constructor(e) {
    super(), this.location = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Pe().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Pe().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Pe().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Pe, e, n);
  }
};
_SourceCodeInfo.runtime = proto2, _SourceCodeInfo.typeName = "google.protobuf.SourceCodeInfo", _SourceCodeInfo.fields = proto2.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: SourceCodeInfo_Location, repeated: true }]);
var SourceCodeInfo = _SourceCodeInfo, _SourceCodeInfo_Location = class Me extends Message {
  constructor(e) {
    super(), this.path = [], this.span = [], this.leadingDetachedComments = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Me().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Me().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Me().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Me, e, n);
  }
};
_SourceCodeInfo_Location.runtime = proto2, _SourceCodeInfo_Location.typeName = "google.protobuf.SourceCodeInfo.Location", _SourceCodeInfo_Location.fields = proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
var SourceCodeInfo_Location = _SourceCodeInfo_Location, _GeneratedCodeInfo = class Be extends Message {
  constructor(e) {
    super(), this.annotation = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Be().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Be().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Be().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Be, e, n);
  }
};
_GeneratedCodeInfo.runtime = proto2, _GeneratedCodeInfo.typeName = "google.protobuf.GeneratedCodeInfo", _GeneratedCodeInfo.fields = proto2.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: GeneratedCodeInfo_Annotation, repeated: true }]);
var GeneratedCodeInfo = _GeneratedCodeInfo, _GeneratedCodeInfo_Annotation = class Fe extends Message {
  constructor(e) {
    super(), this.path = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Fe().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Fe().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Fe().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(Fe, e, n);
  }
};
_GeneratedCodeInfo_Annotation.runtime = proto2, _GeneratedCodeInfo_Annotation.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", _GeneratedCodeInfo_Annotation.fields = proto2.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: proto2.getEnumType(GeneratedCodeInfo_Annotation_Semantic), opt: true }]);
var GeneratedCodeInfo_Annotation = _GeneratedCodeInfo_Annotation, GeneratedCodeInfo_Annotation_Semantic = ((t) => (t[t.NONE = 0] = "NONE", t[t.SET = 1] = "SET", t[t.ALIAS = 2] = "ALIAS", t))(GeneratedCodeInfo_Annotation_Semantic || {});
proto2.util.setEnumType(GeneratedCodeInfo_Annotation_Semantic, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
var fieldTypeToScalarType = { [FieldDescriptorProto_Type.DOUBLE]: ScalarType.DOUBLE, [FieldDescriptorProto_Type.FLOAT]: ScalarType.FLOAT, [FieldDescriptorProto_Type.INT64]: ScalarType.INT64, [FieldDescriptorProto_Type.UINT64]: ScalarType.UINT64, [FieldDescriptorProto_Type.INT32]: ScalarType.INT32, [FieldDescriptorProto_Type.FIXED64]: ScalarType.FIXED64, [FieldDescriptorProto_Type.FIXED32]: ScalarType.FIXED32, [FieldDescriptorProto_Type.BOOL]: ScalarType.BOOL, [FieldDescriptorProto_Type.STRING]: ScalarType.STRING, [FieldDescriptorProto_Type.GROUP]: void 0, [FieldDescriptorProto_Type.MESSAGE]: void 0, [FieldDescriptorProto_Type.BYTES]: ScalarType.BYTES, [FieldDescriptorProto_Type.UINT32]: ScalarType.UINT32, [FieldDescriptorProto_Type.ENUM]: void 0, [FieldDescriptorProto_Type.SFIXED32]: ScalarType.SFIXED32, [FieldDescriptorProto_Type.SFIXED64]: ScalarType.SFIXED64, [FieldDescriptorProto_Type.SINT32]: ScalarType.SINT32, [FieldDescriptorProto_Type.SINT64]: ScalarType.SINT64 }, _Timestamp = class Y extends Message {
  constructor(e) {
    super(), this.seconds = protoInt64.zero, this.nanos = 0, proto3.util.initPartial(e, this);
  }
  fromJson(e, n) {
    if (typeof e != "string") throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${proto3.json.debug(e)}`);
    const r = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!r) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const i = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
    if (Number.isNaN(i)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if (i < Date.parse("0001-01-01T00:00:00Z") || i > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds = protoInt64.parse(i / 1e3), this.nanos = 0, r[7] && (this.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), this;
  }
  toJson(e) {
    const n = Number(this.seconds) * 1e3;
    if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let r = "Z";
    if (this.nanos > 0) {
      const i = (this.nanos + 1e9).toString().substring(1);
      i.substring(3) === "000000" ? r = "." + i.substring(0, 3) + "Z" : i.substring(6) === "000" ? r = "." + i.substring(0, 6) + "Z" : r = "." + i + "Z";
    }
    return new Date(n).toISOString().replace(".000Z", r);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return Y.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(e) {
    const n = e.getTime();
    return new Y({ seconds: protoInt64.parse(Math.floor(n / 1e3)), nanos: n % 1e3 * 1e6 });
  }
  static fromBinary(e, n) {
    return new Y().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Y().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Y().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(Y, e, n);
  }
};
_Timestamp.runtime = proto3, _Timestamp.typeName = "google.protobuf.Timestamp", _Timestamp.fields = proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
var _Duration = class qe extends Message {
  constructor(e) {
    super(), this.seconds = protoInt64.zero, this.nanos = 0, proto3.util.initPartial(e, this);
  }
  fromJson(e, n) {
    if (typeof e != "string") throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3.json.debug(e)}`);
    const r = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (r === null) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3.json.debug(e)}`);
    const i = Number(r[1]);
    if (i > 315576e6 || i < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3.json.debug(e)}`);
    if (this.seconds = protoInt64.parse(i), typeof r[2] == "string") {
      const s = r[2] + "0".repeat(9 - r[2].length);
      this.nanos = parseInt(s), (i < 0 || Object.is(i, -0)) && (this.nanos = -this.nanos);
    }
    return this;
  }
  toJson(e) {
    if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
    let n = this.seconds.toString();
    if (this.nanos !== 0) {
      let r = Math.abs(this.nanos).toString();
      r = "0".repeat(9 - r.length) + r, r.substring(3) === "000000" ? r = r.substring(0, 3) : r.substring(6) === "000" && (r = r.substring(0, 6)), n += "." + r, this.nanos < 0 && Number(this.seconds) == 0 && (n = "-" + n);
    }
    return n + "s";
  }
  static fromBinary(e, n) {
    return new qe().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new qe().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new qe().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(qe, e, n);
  }
};
_Duration.runtime = proto3, _Duration.typeName = "google.protobuf.Duration", _Duration.fields = proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
var _Any = class ee extends Message {
  constructor(e) {
    super(), this.typeUrl = "", this.value = new Uint8Array(0), proto3.util.initPartial(e, this);
  }
  toJson(e) {
    if (this.typeUrl === "") return {};
    const n = this.typeUrlToName(this.typeUrl), r = e?.typeRegistry?.findMessage(n);
    if (!r) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
    let s = r.fromBinary(this.value).toJson(e);
    return (n.startsWith("google.protobuf.") || s === null || Array.isArray(s) || typeof s != "object") && (s = { value: s }), s["@type"] = this.typeUrl, s;
  }
  fromJson(e, n) {
    if (e === null || Array.isArray(e) || typeof e != "object") throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${e === null ? "null" : Array.isArray(e) ? "array" : typeof e}`);
    if (Object.keys(e).length == 0) return this;
    const r = e["@type"];
    if (typeof r != "string" || r == "") throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
    const i = this.typeUrlToName(r), s = n?.typeRegistry?.findMessage(i);
    if (!s) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${r} is not in the type registry`);
    let o;
    if (i.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) o = s.fromJson(e.value, n);
    else {
      const a = Object.assign({}, e);
      delete a["@type"], o = s.fromJson(a, n);
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
    const n = e.findMessage(this.typeUrlToName(this.typeUrl));
    if (n) return n.fromBinary(this.value);
  }
  is(e) {
    if (this.typeUrl === "") return false;
    const n = this.typeUrlToName(this.typeUrl);
    let r = "";
    return typeof e == "string" ? r = e : r = e.typeName, n === r;
  }
  typeNameToUrl(e) {
    return `type.googleapis.com/${e}`;
  }
  typeUrlToName(e) {
    if (!e.length) throw new Error(`invalid type url: ${e}`);
    const n = e.lastIndexOf("/"), r = n >= 0 ? e.substring(n + 1) : e;
    if (!r.length) throw new Error(`invalid type url: ${e}`);
    return r;
  }
  static pack(e) {
    const n = new ee();
    return n.packFrom(e), n;
  }
  static fromBinary(e, n) {
    return new ee().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ee().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ee().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(ee, e, n);
  }
};
_Any.runtime = proto3, _Any.typeName = "google.protobuf.Any", _Any.fields = proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
var Any = _Any, _Empty = class Je extends Message {
  constructor(e) {
    super(), proto3.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Je().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Je().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Je().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(Je, e, n);
  }
};
_Empty.runtime = proto3, _Empty.typeName = "google.protobuf.Empty", _Empty.fields = proto3.util.newFieldList(() => []);
var _FieldMask = class Ge extends Message {
  constructor(e) {
    super(), this.paths = [], proto3.util.initPartial(e, this);
  }
  toJson(e) {
    function n(r) {
      let i = false;
      const s = [];
      for (let o = 0; o < r.length; o++) {
        let a = r.charAt(o);
        switch (a) {
          case "_":
            i = true;
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
            s.push(a), i = false;
            break;
          default:
            i && (i = false, a = a.toUpperCase()), s.push(a);
            break;
        }
      }
      return s.join("");
    }
    return this.paths.map((r) => {
      if (r.match(/_[0-9]?_/g) || r.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + r + '" is irreversible');
      return n(r);
    }).join(",");
  }
  fromJson(e, n) {
    if (typeof e != "string") throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + proto3.json.debug(e));
    if (e === "") return this;
    function r(i) {
      if (i.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
      const s = i.replace(/[A-Z]/g, (o) => "_" + o.toLowerCase());
      return s[0] === "_" ? s.substring(1) : s;
    }
    return this.paths = e.split(",").map(r), this;
  }
  static fromBinary(e, n) {
    return new Ge().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ge().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ge().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(Ge, e, n);
  }
};
_FieldMask.runtime = proto3, _FieldMask.typeName = "google.protobuf.FieldMask", _FieldMask.fields = proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
var NullValue = ((t) => (t[t.NULL_VALUE = 0] = "NULL_VALUE", t))(NullValue || {});
proto3.util.setEnumType(NullValue, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
var _Struct = class Ve extends Message {
  constructor(e) {
    super(), this.fields = {}, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    const n = {};
    for (const [r, i] of Object.entries(this.fields)) n[r] = i.toJson(e);
    return n;
  }
  fromJson(e, n) {
    if (typeof e != "object" || e == null || Array.isArray(e)) throw new Error("cannot decode google.protobuf.Struct from JSON " + proto3.json.debug(e));
    for (const [r, i] of Object.entries(e)) this.fields[r] = Value.fromJson(i);
    return this;
  }
  static fromBinary(e, n) {
    return new Ve().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ve().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ve().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(Ve, e, n);
  }
};
_Struct.runtime = proto3, _Struct.typeName = "google.protobuf.Struct", _Struct.fields = proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: Value } }]);
var Struct = _Struct, _Value = class $e extends Message {
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
  fromJson(e, n) {
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
  static fromBinary(e, n) {
    return new $e().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new $e().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new $e().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals($e, e, n);
  }
};
_Value.runtime = proto3, _Value.typeName = "google.protobuf.Value", _Value.fields = proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: proto3.getEnumType(NullValue), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: Struct, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: ListValue, oneof: "kind" }]);
var Value = _Value, _ListValue = class Ce extends Message {
  constructor(e) {
    super(), this.values = [], proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return this.values.map((n) => n.toJson());
  }
  fromJson(e, n) {
    if (!Array.isArray(e)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + proto3.json.debug(e));
    for (let r of e) this.values.push(Value.fromJson(r));
    return this;
  }
  static fromBinary(e, n) {
    return new Ce().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ce().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ce().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(Ce, e, n);
  }
};
_ListValue.runtime = proto3, _ListValue.typeName = "google.protobuf.ListValue", _ListValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: Value, repeated: true }]);
var ListValue = _ListValue, _DoubleValue = class We extends Message {
  constructor(e) {
    super(), this.value = 0, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.DOUBLE, this.value, true);
  }
  fromJson(e, n) {
    try {
      this.value = proto3.json.readScalar(ScalarType.DOUBLE, e);
    } catch (r) {
      let i = 'cannot decode message google.protobuf.DoubleValue from JSON"';
      throw r instanceof Error && r.message.length > 0 && (i += `: ${r.message}`), new Error(i);
    }
    return this;
  }
  static fromBinary(e, n) {
    return new We().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new We().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new We().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(We, e, n);
  }
};
_DoubleValue.runtime = proto3, _DoubleValue.typeName = "google.protobuf.DoubleValue", _DoubleValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), _DoubleValue.fieldWrapper = { wrapField(t) {
  return new _DoubleValue({ value: t });
}, unwrapField(t) {
  return t.value;
} };
var _FloatValue = class He extends Message {
  constructor(e) {
    super(), this.value = 0, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.FLOAT, this.value, true);
  }
  fromJson(e, n) {
    try {
      this.value = proto3.json.readScalar(ScalarType.FLOAT, e);
    } catch (r) {
      let i = 'cannot decode message google.protobuf.FloatValue from JSON"';
      throw r instanceof Error && r.message.length > 0 && (i += `: ${r.message}`), new Error(i);
    }
    return this;
  }
  static fromBinary(e, n) {
    return new He().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new He().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new He().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(He, e, n);
  }
};
_FloatValue.runtime = proto3, _FloatValue.typeName = "google.protobuf.FloatValue", _FloatValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), _FloatValue.fieldWrapper = { wrapField(t) {
  return new _FloatValue({ value: t });
}, unwrapField(t) {
  return t.value;
} };
var _Int64Value = class Ye extends Message {
  constructor(e) {
    super(), this.value = protoInt64.zero, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.INT64, this.value, true);
  }
  fromJson(e, n) {
    try {
      this.value = proto3.json.readScalar(ScalarType.INT64, e);
    } catch (r) {
      let i = 'cannot decode message google.protobuf.Int64Value from JSON"';
      throw r instanceof Error && r.message.length > 0 && (i += `: ${r.message}`), new Error(i);
    }
    return this;
  }
  static fromBinary(e, n) {
    return new Ye().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ye().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ye().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(Ye, e, n);
  }
};
_Int64Value.runtime = proto3, _Int64Value.typeName = "google.protobuf.Int64Value", _Int64Value.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), _Int64Value.fieldWrapper = { wrapField(t) {
  return new _Int64Value({ value: t });
}, unwrapField(t) {
  return t.value;
} };
var _UInt64Value = class je extends Message {
  constructor(e) {
    super(), this.value = protoInt64.zero, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.UINT64, this.value, true);
  }
  fromJson(e, n) {
    try {
      this.value = proto3.json.readScalar(ScalarType.UINT64, e);
    } catch (r) {
      let i = 'cannot decode message google.protobuf.UInt64Value from JSON"';
      throw r instanceof Error && r.message.length > 0 && (i += `: ${r.message}`), new Error(i);
    }
    return this;
  }
  static fromBinary(e, n) {
    return new je().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new je().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new je().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(je, e, n);
  }
};
_UInt64Value.runtime = proto3, _UInt64Value.typeName = "google.protobuf.UInt64Value", _UInt64Value.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), _UInt64Value.fieldWrapper = { wrapField(t) {
  return new _UInt64Value({ value: t });
}, unwrapField(t) {
  return t.value;
} };
var _Int32Value = class ze extends Message {
  constructor(e) {
    super(), this.value = 0, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.INT32, this.value, true);
  }
  fromJson(e, n) {
    try {
      this.value = proto3.json.readScalar(ScalarType.INT32, e);
    } catch (r) {
      let i = 'cannot decode message google.protobuf.Int32Value from JSON"';
      throw r instanceof Error && r.message.length > 0 && (i += `: ${r.message}`), new Error(i);
    }
    return this;
  }
  static fromBinary(e, n) {
    return new ze().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ze().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ze().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(ze, e, n);
  }
};
_Int32Value.runtime = proto3, _Int32Value.typeName = "google.protobuf.Int32Value", _Int32Value.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), _Int32Value.fieldWrapper = { wrapField(t) {
  return new _Int32Value({ value: t });
}, unwrapField(t) {
  return t.value;
} };
var _UInt32Value = class Ke extends Message {
  constructor(e) {
    super(), this.value = 0, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.UINT32, this.value, true);
  }
  fromJson(e, n) {
    try {
      this.value = proto3.json.readScalar(ScalarType.UINT32, e);
    } catch (r) {
      let i = 'cannot decode message google.protobuf.UInt32Value from JSON"';
      throw r instanceof Error && r.message.length > 0 && (i += `: ${r.message}`), new Error(i);
    }
    return this;
  }
  static fromBinary(e, n) {
    return new Ke().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ke().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ke().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(Ke, e, n);
  }
};
_UInt32Value.runtime = proto3, _UInt32Value.typeName = "google.protobuf.UInt32Value", _UInt32Value.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), _UInt32Value.fieldWrapper = { wrapField(t) {
  return new _UInt32Value({ value: t });
}, unwrapField(t) {
  return t.value;
} };
var _BoolValue = class Xe extends Message {
  constructor(e) {
    super(), this.value = false, proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.BOOL, this.value, true);
  }
  fromJson(e, n) {
    try {
      this.value = proto3.json.readScalar(ScalarType.BOOL, e);
    } catch (r) {
      let i = 'cannot decode message google.protobuf.BoolValue from JSON"';
      throw r instanceof Error && r.message.length > 0 && (i += `: ${r.message}`), new Error(i);
    }
    return this;
  }
  static fromBinary(e, n) {
    return new Xe().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Xe().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Xe().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(Xe, e, n);
  }
};
_BoolValue.runtime = proto3, _BoolValue.typeName = "google.protobuf.BoolValue", _BoolValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), _BoolValue.fieldWrapper = { wrapField(t) {
  return new _BoolValue({ value: t });
}, unwrapField(t) {
  return t.value;
} };
var _StringValue = class Qe extends Message {
  constructor(e) {
    super(), this.value = "", proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.STRING, this.value, true);
  }
  fromJson(e, n) {
    try {
      this.value = proto3.json.readScalar(ScalarType.STRING, e);
    } catch (r) {
      let i = 'cannot decode message google.protobuf.StringValue from JSON"';
      throw r instanceof Error && r.message.length > 0 && (i += `: ${r.message}`), new Error(i);
    }
    return this;
  }
  static fromBinary(e, n) {
    return new Qe().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Qe().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Qe().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(Qe, e, n);
  }
};
_StringValue.runtime = proto3, _StringValue.typeName = "google.protobuf.StringValue", _StringValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), _StringValue.fieldWrapper = { wrapField(t) {
  return new _StringValue({ value: t });
}, unwrapField(t) {
  return t.value;
} };
var _BytesValue = class Ze extends Message {
  constructor(e) {
    super(), this.value = new Uint8Array(0), proto3.util.initPartial(e, this);
  }
  toJson(e) {
    return proto3.json.writeScalar(ScalarType.BYTES, this.value, true);
  }
  fromJson(e, n) {
    try {
      this.value = proto3.json.readScalar(ScalarType.BYTES, e);
    } catch (r) {
      let i = 'cannot decode message google.protobuf.BytesValue from JSON"';
      throw r instanceof Error && r.message.length > 0 && (i += `: ${r.message}`), new Error(i);
    }
    return this;
  }
  static fromBinary(e, n) {
    return new Ze().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ze().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ze().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(Ze, e, n);
  }
};
_BytesValue.runtime = proto3, _BytesValue.typeName = "google.protobuf.BytesValue", _BytesValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), _BytesValue.fieldWrapper = { wrapField(t) {
  return new _BytesValue({ value: t });
}, unwrapField(t) {
  return t.value;
} };
var wkEnums = [getEnumType(NullValue)], _Version = class et extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new et().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new et().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new et().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(et, e, n);
  }
};
_Version.runtime = proto2, _Version.typeName = "google.protobuf.compiler.Version", _Version.fields = proto2.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
var Version = _Version, _CodeGeneratorRequest = class tt extends Message {
  constructor(e) {
    super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new tt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new tt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new tt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(tt, e, n);
  }
};
_CodeGeneratorRequest.runtime = proto2, _CodeGeneratorRequest.typeName = "google.protobuf.compiler.CodeGeneratorRequest", _CodeGeneratorRequest.fields = proto2.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: FileDescriptorProto, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: FileDescriptorProto, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: Version, opt: true }]);
var _CodeGeneratorResponse = class nt extends Message {
  constructor(e) {
    super(), this.file = [], proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new nt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new nt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new nt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(nt, e, n);
  }
};
_CodeGeneratorResponse.runtime = proto2, _CodeGeneratorResponse.typeName = "google.protobuf.compiler.CodeGeneratorResponse", _CodeGeneratorResponse.fields = proto2.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: CodeGeneratorResponse_File, repeated: true }]);
var CodeGeneratorResponse_Feature = ((t) => (t[t.NONE = 0] = "NONE", t[t.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", t[t.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", t))(CodeGeneratorResponse_Feature || {});
proto2.util.setEnumType(CodeGeneratorResponse_Feature, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
var _CodeGeneratorResponse_File = class rt extends Message {
  constructor(e) {
    super(), proto2.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new rt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new rt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new rt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto2.util.equals(rt, e, n);
  }
};
_CodeGeneratorResponse_File.runtime = proto2, _CodeGeneratorResponse_File.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", _CodeGeneratorResponse_File.fields = proto2.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: GeneratedCodeInfo, opt: true }]);
var CodeGeneratorResponse_File = _CodeGeneratorResponse_File, _SourceContext = class it extends Message {
  constructor(e) {
    super(), this.fileName = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new it().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new it().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new it().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(it, e, n);
  }
};
_SourceContext.runtime = proto3, _SourceContext.typeName = "google.protobuf.SourceContext", _SourceContext.fields = proto3.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
var SourceContext = _SourceContext, Syntax = ((t) => (t[t.PROTO2 = 0] = "PROTO2", t[t.PROTO3 = 1] = "PROTO3", t[t.EDITIONS = 2] = "EDITIONS", t))(Syntax || {});
proto3.util.setEnumType(Syntax, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
var _Type = class st extends Message {
  constructor(e) {
    super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new st().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new st().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new st().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(st, e, n);
  }
};
_Type.runtime = proto3, _Type.typeName = "google.protobuf.Type", _Type.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: Field, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: Option, repeated: true }, { no: 5, name: "source_context", kind: "message", T: SourceContext }, { no: 6, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
var _Field = class ot extends Message {
  constructor(e) {
    super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ot().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ot().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ot().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(ot, e, n);
  }
};
_Field.runtime = proto3, _Field.typeName = "google.protobuf.Field", _Field.fields = proto3.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(Field_Kind) }, { no: 2, name: "cardinality", kind: "enum", T: proto3.getEnumType(Field_Cardinality) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: Option, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]);
var Field = _Field, Field_Kind = ((t) => (t[t.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", t[t.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", t[t.TYPE_FLOAT = 2] = "TYPE_FLOAT", t[t.TYPE_INT64 = 3] = "TYPE_INT64", t[t.TYPE_UINT64 = 4] = "TYPE_UINT64", t[t.TYPE_INT32 = 5] = "TYPE_INT32", t[t.TYPE_FIXED64 = 6] = "TYPE_FIXED64", t[t.TYPE_FIXED32 = 7] = "TYPE_FIXED32", t[t.TYPE_BOOL = 8] = "TYPE_BOOL", t[t.TYPE_STRING = 9] = "TYPE_STRING", t[t.TYPE_GROUP = 10] = "TYPE_GROUP", t[t.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", t[t.TYPE_BYTES = 12] = "TYPE_BYTES", t[t.TYPE_UINT32 = 13] = "TYPE_UINT32", t[t.TYPE_ENUM = 14] = "TYPE_ENUM", t[t.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", t[t.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", t[t.TYPE_SINT32 = 17] = "TYPE_SINT32", t[t.TYPE_SINT64 = 18] = "TYPE_SINT64", t))(Field_Kind || {});
proto3.util.setEnumType(Field_Kind, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
var Field_Cardinality = ((t) => (t[t.UNKNOWN = 0] = "UNKNOWN", t[t.OPTIONAL = 1] = "OPTIONAL", t[t.REQUIRED = 2] = "REQUIRED", t[t.REPEATED = 3] = "REPEATED", t))(Field_Cardinality || {});
proto3.util.setEnumType(Field_Cardinality, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
var _Enum = class at extends Message {
  constructor(e) {
    super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new at().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new at().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new at().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(at, e, n);
  }
};
_Enum.runtime = proto3, _Enum.typeName = "google.protobuf.Enum", _Enum.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: EnumValue, repeated: true }, { no: 3, name: "options", kind: "message", T: Option, repeated: true }, { no: 4, name: "source_context", kind: "message", T: SourceContext }, { no: 5, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
var _EnumValue = class ut extends Message {
  constructor(e) {
    super(), this.name = "", this.number = 0, this.options = [], proto3.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ut().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ut().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ut().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(ut, e, n);
  }
};
_EnumValue.runtime = proto3, _EnumValue.typeName = "google.protobuf.EnumValue", _EnumValue.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: Option, repeated: true }]);
var EnumValue = _EnumValue, _Option = class lt extends Message {
  constructor(e) {
    super(), this.name = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new lt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new lt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new lt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(lt, e, n);
  }
};
_Option.runtime = proto3, _Option.typeName = "google.protobuf.Option", _Option.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: Any }]);
var Option = _Option, _Api = class ct extends Message {
  constructor(e) {
    super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = Syntax.PROTO2, proto3.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ct().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ct().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ct().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(ct, e, n);
  }
};
_Api.runtime = proto3, _Api.typeName = "google.protobuf.Api", _Api.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: Method, repeated: true }, { no: 3, name: "options", kind: "message", T: Option, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: SourceContext }, { no: 6, name: "mixins", kind: "message", T: Mixin, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) }]);
var _Method = class ft extends Message {
  constructor(e) {
    super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = Syntax.PROTO2, proto3.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ft().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ft().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ft().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(ft, e, n);
  }
};
_Method.runtime = proto3, _Method.typeName = "google.protobuf.Method", _Method.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: Option, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) }]);
var Method = _Method, _Mixin = class mt extends Message {
  constructor(e) {
    super(), this.name = "", this.root = "", proto3.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new mt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new mt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new mt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return proto3.util.equals(mt, e, n);
  }
};
_Mixin.runtime = proto3, _Mixin.typeName = "google.protobuf.Mixin", _Mixin.fields = proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
var Mixin = _Mixin, ComputeLinesDiffOriginalAndModified = proto3.makeMessageType("aiserver.v1.ComputeLinesDiffOriginalAndModified", () => [{ no: 1, name: "original", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "modified", kind: "scalar", T: 9, repeated: true }]);
function roundFloat(t, e) {
  const n = Math.pow(10, e);
  return Math.round(t * n) / n;
}
var RGBA = class {
  constructor(t, e, n, r = 1) {
    this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, t)) | 0, this.g = Math.min(255, Math.max(0, e)) | 0, this.b = Math.min(255, Math.max(0, n)) | 0, this.a = roundFloat(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, e) {
    return t.r === e.r && t.g === e.g && t.b === e.b && t.a === e.a;
  }
}, HSLA = class ht {
  constructor(e, n, r, i) {
    this._hslaBrand = void 0, this.h = Math.max(Math.min(360, e), 0) | 0, this.s = roundFloat(Math.max(Math.min(1, n), 0), 3), this.l = roundFloat(Math.max(Math.min(1, r), 0), 3), this.a = roundFloat(Math.max(Math.min(1, i), 0), 3);
  }
  static equals(e, n) {
    return e.h === n.h && e.s === n.s && e.l === n.l && e.a === n.a;
  }
  static fromRGBA(e) {
    const n = e.r / 255, r = e.g / 255, i = e.b / 255, s = e.a, o = Math.max(n, r, i), a = Math.min(n, r, i);
    let u = 0, l = 0;
    const f = (a + o) / 2, c = o - a;
    if (c > 0) {
      switch (l = Math.min(f <= 0.5 ? c / (2 * f) : c / (2 - 2 * f), 1), o) {
        case n:
          u = (r - i) / c + (r < i ? 6 : 0);
          break;
        case r:
          u = (i - n) / c + 2;
          break;
        case i:
          u = (n - r) / c + 4;
          break;
      }
      u *= 60, u = Math.round(u);
    }
    return new ht(u, l, f, s);
  }
  static _hue2rgb(e, n, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (n - e) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
  }
  static toRGBA(e) {
    const n = e.h / 360, { s: r, l: i, a: s } = e;
    let o, a, u;
    if (r === 0) o = a = u = i;
    else {
      const l = i < 0.5 ? i * (1 + r) : i + r - i * r, f = 2 * i - l;
      o = ht._hue2rgb(f, l, n + 1 / 3), a = ht._hue2rgb(f, l, n), u = ht._hue2rgb(f, l, n - 1 / 3);
    }
    return new RGBA(Math.round(o * 255), Math.round(a * 255), Math.round(u * 255), s);
  }
}, HSVA = class Gt {
  constructor(e, n, r, i) {
    this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, e), 0) | 0, this.s = roundFloat(Math.max(Math.min(1, n), 0), 3), this.v = roundFloat(Math.max(Math.min(1, r), 0), 3), this.a = roundFloat(Math.max(Math.min(1, i), 0), 3);
  }
  static equals(e, n) {
    return e.h === n.h && e.s === n.s && e.v === n.v && e.a === n.a;
  }
  static fromRGBA(e) {
    const n = e.r / 255, r = e.g / 255, i = e.b / 255, s = Math.max(n, r, i), o = Math.min(n, r, i), a = s - o, u = s === 0 ? 0 : a / s;
    let l;
    return a === 0 ? l = 0 : s === n ? l = ((r - i) / a % 6 + 6) % 6 : s === r ? l = (i - n) / a + 2 : l = (n - r) / a + 4, new Gt(Math.round(l * 60), u, s, e.a);
  }
  static toRGBA(e) {
    const { h: n, s: r, v: i, a: s } = e, o = i * r, a = o * (1 - Math.abs(n / 60 % 2 - 1)), u = i - o;
    let [l, f, c] = [0, 0, 0];
    return n < 60 ? (l = o, f = a) : n < 120 ? (l = a, f = o) : n < 180 ? (f = o, c = a) : n < 240 ? (f = a, c = o) : n < 300 ? (l = a, c = o) : n <= 360 && (l = o, c = a), l = Math.round((l + u) * 255), f = Math.round((f + u) * 255), c = Math.round((c + u) * 255), new RGBA(l, f, c, s);
  }
}, _Color = class B {
  static fromHex(e) {
    return B.Format.CSS.parseHex(e) || B.red;
  }
  static equals(e, n) {
    return !e && !n ? true : !e || !n ? false : e.equals(n);
  }
  get hsla() {
    return this._hsla ? this._hsla : HSLA.fromRGBA(this.rgba);
  }
  get hsva() {
    return this._hsva ? this._hsva : HSVA.fromRGBA(this.rgba);
  }
  constructor(e) {
    if (e) if (e instanceof RGBA) this.rgba = e;
    else if (e instanceof HSLA) this._hsla = e, this.rgba = HSLA.toRGBA(e);
    else if (e instanceof HSVA) this._hsva = e, this.rgba = HSVA.toRGBA(e);
    else throw new Error("Invalid color ctor argument");
    else throw new Error("Color needs a value");
  }
  equals(e) {
    return !!e && RGBA.equals(this.rgba, e.rgba) && HSLA.equals(this.hsla, e.hsla) && HSVA.equals(this.hsva, e.hsva);
  }
  getRelativeLuminance() {
    const e = B._relativeLuminanceForComponent(this.rgba.r), n = B._relativeLuminanceForComponent(this.rgba.g), r = B._relativeLuminanceForComponent(this.rgba.b), i = 0.2126 * e + 0.7152 * n + 0.0722 * r;
    return roundFloat(i, 4);
  }
  reduceRelativeLuminace(e, n) {
    let { r, g: i, b: s } = e.rgba, o = this.getContrastRatio(e);
    for (; o < n && (r > 0 || i > 0 || s > 0); ) r -= Math.max(0, Math.ceil(r * 0.1)), i -= Math.max(0, Math.ceil(i * 0.1)), s -= Math.max(0, Math.ceil(s * 0.1)), o = this.getContrastRatio(new B(new RGBA(r, i, s)));
    return new B(new RGBA(r, i, s));
  }
  increaseRelativeLuminace(e, n) {
    let { r, g: i, b: s } = e.rgba, o = this.getContrastRatio(e);
    for (; o < n && (r < 255 || i < 255 || s < 255); ) r = Math.min(255, r + Math.ceil((255 - r) * 0.1)), i = Math.min(255, i + Math.ceil((255 - i) * 0.1)), s = Math.min(255, s + Math.ceil((255 - s) * 0.1)), o = this.getContrastRatio(new B(new RGBA(r, i, s)));
    return new B(new RGBA(r, i, s));
  }
  static _relativeLuminanceForComponent(e) {
    const n = e / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  }
  getContrastRatio(e) {
    const n = this.getRelativeLuminance(), r = e.getRelativeLuminance();
    return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
  }
  isDarker() {
    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 < 128;
  }
  isLighter() {
    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
  }
  isLighterThan(e) {
    const n = this.getRelativeLuminance(), r = e.getRelativeLuminance();
    return n > r;
  }
  isDarkerThan(e) {
    const n = this.getRelativeLuminance(), r = e.getRelativeLuminance();
    return n < r;
  }
  ensureConstrast(e, n) {
    const r = this.getRelativeLuminance(), i = e.getRelativeLuminance();
    if (this.getContrastRatio(e) < n) {
      if (i < r) {
        const u = this.reduceRelativeLuminace(e, n), l = this.getContrastRatio(u);
        if (l < n) {
          const f = this.increaseRelativeLuminace(e, n), c = this.getContrastRatio(f);
          return l > c ? u : f;
        }
        return u;
      }
      const o = this.increaseRelativeLuminace(e, n), a = this.getContrastRatio(o);
      if (a < n) {
        const u = this.reduceRelativeLuminace(e, n), l = this.getContrastRatio(u);
        return a > l ? o : u;
      }
      return o;
    }
    return e;
  }
  lighten(e) {
    return new B(new HSLA(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * e, this.hsla.a));
  }
  darken(e) {
    return new B(new HSLA(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * e, this.hsla.a));
  }
  transparent(e) {
    const { r: n, g: r, b: i, a: s } = this.rgba;
    return new B(new RGBA(n, r, i, s * e));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new B(new RGBA(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  blend(e) {
    const n = e.rgba, r = this.rgba.a, i = n.a, s = r + i * (1 - r);
    if (s < 1e-6) return B.transparent;
    const o = this.rgba.r * r / s + n.r * i * (1 - r) / s, a = this.rgba.g * r / s + n.g * i * (1 - r) / s, u = this.rgba.b * r / s + n.b * i * (1 - r) / s;
    return new B(new RGBA(o, a, u, s));
  }
  makeOpaque(e) {
    if (this.isOpaque() || e.rgba.a !== 1) return this;
    const { r: n, g: r, b: i, a: s } = this.rgba;
    return new B(new RGBA(e.rgba.r - s * (e.rgba.r - n), e.rgba.g - s * (e.rgba.g - r), e.rgba.b - s * (e.rgba.b - i), 1));
  }
  flatten(...e) {
    const n = e.reduceRight((r, i) => B._flatten(i, r));
    return B._flatten(this, n);
  }
  static _flatten(e, n) {
    const r = 1 - e.rgba.a;
    return new B(new RGBA(r * n.rgba.r + e.rgba.a * e.rgba.r, r * n.rgba.g + e.rgba.a * e.rgba.g, r * n.rgba.b + e.rgba.a * e.rgba.b));
  }
  toString() {
    return this._toString || (this._toString = B.Format.CSS.format(this)), this._toString;
  }
  toNumber32Bit() {
    return this._toNumber32Bit || (this._toNumber32Bit = (this.rgba.r << 24 | this.rgba.g << 16 | this.rgba.b << 8 | this.rgba.a * 255 << 0) >>> 0), this._toNumber32Bit;
  }
  static getLighterColor(e, n, r) {
    if (e.isLighterThan(n)) return e;
    r = r || 0.5;
    const i = e.getRelativeLuminance(), s = n.getRelativeLuminance();
    return r = r * (s - i) / s, e.lighten(r);
  }
  static getDarkerColor(e, n, r) {
    if (e.isDarkerThan(n)) return e;
    r = r || 0.5;
    const i = e.getRelativeLuminance(), s = n.getRelativeLuminance();
    return r = r * (i - s) / i, e.darken(r);
  }
};
_Color.white = new _Color(new RGBA(255, 255, 255, 1)), _Color.black = new _Color(new RGBA(0, 0, 0, 1)), _Color.red = new _Color(new RGBA(255, 0, 0, 1)), _Color.blue = new _Color(new RGBA(0, 0, 255, 1)), _Color.green = new _Color(new RGBA(0, 255, 0, 1)), _Color.cyan = new _Color(new RGBA(0, 255, 255, 1)), _Color.lightgrey = new _Color(new RGBA(211, 211, 211, 1)), _Color.transparent = new _Color(new RGBA(0, 0, 0, 0));
var Color = _Color;
((t) => {
  let e;
  ((n) => {
    let r;
    ((i) => {
      function s(d) {
        return d.rgba.a === 1 ? `rgb(${d.rgba.r}, ${d.rgba.g}, ${d.rgba.b})` : t.Format.CSS.formatRGBA(d);
      }
      i.formatRGB = s;
      function o(d) {
        return `rgba(${d.rgba.r}, ${d.rgba.g}, ${d.rgba.b}, ${+d.rgba.a.toFixed(2)})`;
      }
      i.formatRGBA = o;
      function a(d) {
        return d.hsla.a === 1 ? `hsl(${d.hsla.h}, ${(d.hsla.s * 100).toFixed(2)}%, ${(d.hsla.l * 100).toFixed(2)}%)` : t.Format.CSS.formatHSLA(d);
      }
      i.formatHSL = a;
      function u(d) {
        return `hsla(${d.hsla.h}, ${(d.hsla.s * 100).toFixed(2)}%, ${(d.hsla.l * 100).toFixed(2)}%, ${d.hsla.a.toFixed(2)})`;
      }
      i.formatHSLA = u;
      function l(d) {
        const w = d.toString(16);
        return w.length !== 2 ? "0" + w : w;
      }
      function f(d) {
        return `#${l(d.rgba.r)}${l(d.rgba.g)}${l(d.rgba.b)}`;
      }
      i.formatHex = f;
      function c(d, w = false) {
        return w && d.rgba.a === 1 ? t.Format.CSS.formatHex(d) : `#${l(d.rgba.r)}${l(d.rgba.g)}${l(d.rgba.b)}${l(Math.round(d.rgba.a * 255))}`;
      }
      i.formatHexA = c;
      function m(d) {
        return d.isOpaque() ? t.Format.CSS.formatHex(d) : t.Format.CSS.formatRGBA(d);
      }
      i.format = m;
      function h(d) {
        if (d === "transparent") return t.transparent;
        if (d.startsWith("#")) return p(d);
        if (d.startsWith("rgba(")) {
          const w = d.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
          if (!w) throw new Error("Invalid color format " + d);
          const b = parseInt(w.groups?.r ?? "0"), N = parseInt(w.groups?.g ?? "0"), _ = parseInt(w.groups?.b ?? "0"), v = parseFloat(w.groups?.a ?? "0");
          return new t(new RGBA(b, N, _, v));
        }
        if (d.startsWith("rgb(")) {
          const w = d.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
          if (!w) throw new Error("Invalid color format " + d);
          const b = parseInt(w.groups?.r ?? "0"), N = parseInt(w.groups?.g ?? "0"), _ = parseInt(w.groups?.b ?? "0");
          return new t(new RGBA(b, N, _));
        }
        return g(d);
      }
      i.parse = h;
      function g(d) {
        switch (d) {
          case "aliceblue":
            return new t(new RGBA(240, 248, 255, 1));
          case "antiquewhite":
            return new t(new RGBA(250, 235, 215, 1));
          case "aqua":
            return new t(new RGBA(0, 255, 255, 1));
          case "aquamarine":
            return new t(new RGBA(127, 255, 212, 1));
          case "azure":
            return new t(new RGBA(240, 255, 255, 1));
          case "beige":
            return new t(new RGBA(245, 245, 220, 1));
          case "bisque":
            return new t(new RGBA(255, 228, 196, 1));
          case "black":
            return new t(new RGBA(0, 0, 0, 1));
          case "blanchedalmond":
            return new t(new RGBA(255, 235, 205, 1));
          case "blue":
            return new t(new RGBA(0, 0, 255, 1));
          case "blueviolet":
            return new t(new RGBA(138, 43, 226, 1));
          case "brown":
            return new t(new RGBA(165, 42, 42, 1));
          case "burlywood":
            return new t(new RGBA(222, 184, 135, 1));
          case "cadetblue":
            return new t(new RGBA(95, 158, 160, 1));
          case "chartreuse":
            return new t(new RGBA(127, 255, 0, 1));
          case "chocolate":
            return new t(new RGBA(210, 105, 30, 1));
          case "coral":
            return new t(new RGBA(255, 127, 80, 1));
          case "cornflowerblue":
            return new t(new RGBA(100, 149, 237, 1));
          case "cornsilk":
            return new t(new RGBA(255, 248, 220, 1));
          case "crimson":
            return new t(new RGBA(220, 20, 60, 1));
          case "cyan":
            return new t(new RGBA(0, 255, 255, 1));
          case "darkblue":
            return new t(new RGBA(0, 0, 139, 1));
          case "darkcyan":
            return new t(new RGBA(0, 139, 139, 1));
          case "darkgoldenrod":
            return new t(new RGBA(184, 134, 11, 1));
          case "darkgray":
            return new t(new RGBA(169, 169, 169, 1));
          case "darkgreen":
            return new t(new RGBA(0, 100, 0, 1));
          case "darkgrey":
            return new t(new RGBA(169, 169, 169, 1));
          case "darkkhaki":
            return new t(new RGBA(189, 183, 107, 1));
          case "darkmagenta":
            return new t(new RGBA(139, 0, 139, 1));
          case "darkolivegreen":
            return new t(new RGBA(85, 107, 47, 1));
          case "darkorange":
            return new t(new RGBA(255, 140, 0, 1));
          case "darkorchid":
            return new t(new RGBA(153, 50, 204, 1));
          case "darkred":
            return new t(new RGBA(139, 0, 0, 1));
          case "darksalmon":
            return new t(new RGBA(233, 150, 122, 1));
          case "darkseagreen":
            return new t(new RGBA(143, 188, 143, 1));
          case "darkslateblue":
            return new t(new RGBA(72, 61, 139, 1));
          case "darkslategray":
            return new t(new RGBA(47, 79, 79, 1));
          case "darkslategrey":
            return new t(new RGBA(47, 79, 79, 1));
          case "darkturquoise":
            return new t(new RGBA(0, 206, 209, 1));
          case "darkviolet":
            return new t(new RGBA(148, 0, 211, 1));
          case "deeppink":
            return new t(new RGBA(255, 20, 147, 1));
          case "deepskyblue":
            return new t(new RGBA(0, 191, 255, 1));
          case "dimgray":
            return new t(new RGBA(105, 105, 105, 1));
          case "dimgrey":
            return new t(new RGBA(105, 105, 105, 1));
          case "dodgerblue":
            return new t(new RGBA(30, 144, 255, 1));
          case "firebrick":
            return new t(new RGBA(178, 34, 34, 1));
          case "floralwhite":
            return new t(new RGBA(255, 250, 240, 1));
          case "forestgreen":
            return new t(new RGBA(34, 139, 34, 1));
          case "fuchsia":
            return new t(new RGBA(255, 0, 255, 1));
          case "gainsboro":
            return new t(new RGBA(220, 220, 220, 1));
          case "ghostwhite":
            return new t(new RGBA(248, 248, 255, 1));
          case "gold":
            return new t(new RGBA(255, 215, 0, 1));
          case "goldenrod":
            return new t(new RGBA(218, 165, 32, 1));
          case "gray":
            return new t(new RGBA(128, 128, 128, 1));
          case "green":
            return new t(new RGBA(0, 128, 0, 1));
          case "greenyellow":
            return new t(new RGBA(173, 255, 47, 1));
          case "grey":
            return new t(new RGBA(128, 128, 128, 1));
          case "honeydew":
            return new t(new RGBA(240, 255, 240, 1));
          case "hotpink":
            return new t(new RGBA(255, 105, 180, 1));
          case "indianred":
            return new t(new RGBA(205, 92, 92, 1));
          case "indigo":
            return new t(new RGBA(75, 0, 130, 1));
          case "ivory":
            return new t(new RGBA(255, 255, 240, 1));
          case "khaki":
            return new t(new RGBA(240, 230, 140, 1));
          case "lavender":
            return new t(new RGBA(230, 230, 250, 1));
          case "lavenderblush":
            return new t(new RGBA(255, 240, 245, 1));
          case "lawngreen":
            return new t(new RGBA(124, 252, 0, 1));
          case "lemonchiffon":
            return new t(new RGBA(255, 250, 205, 1));
          case "lightblue":
            return new t(new RGBA(173, 216, 230, 1));
          case "lightcoral":
            return new t(new RGBA(240, 128, 128, 1));
          case "lightcyan":
            return new t(new RGBA(224, 255, 255, 1));
          case "lightgoldenrodyellow":
            return new t(new RGBA(250, 250, 210, 1));
          case "lightgray":
            return new t(new RGBA(211, 211, 211, 1));
          case "lightgreen":
            return new t(new RGBA(144, 238, 144, 1));
          case "lightgrey":
            return new t(new RGBA(211, 211, 211, 1));
          case "lightpink":
            return new t(new RGBA(255, 182, 193, 1));
          case "lightsalmon":
            return new t(new RGBA(255, 160, 122, 1));
          case "lightseagreen":
            return new t(new RGBA(32, 178, 170, 1));
          case "lightskyblue":
            return new t(new RGBA(135, 206, 250, 1));
          case "lightslategray":
            return new t(new RGBA(119, 136, 153, 1));
          case "lightslategrey":
            return new t(new RGBA(119, 136, 153, 1));
          case "lightsteelblue":
            return new t(new RGBA(176, 196, 222, 1));
          case "lightyellow":
            return new t(new RGBA(255, 255, 224, 1));
          case "lime":
            return new t(new RGBA(0, 255, 0, 1));
          case "limegreen":
            return new t(new RGBA(50, 205, 50, 1));
          case "linen":
            return new t(new RGBA(250, 240, 230, 1));
          case "magenta":
            return new t(new RGBA(255, 0, 255, 1));
          case "maroon":
            return new t(new RGBA(128, 0, 0, 1));
          case "mediumaquamarine":
            return new t(new RGBA(102, 205, 170, 1));
          case "mediumblue":
            return new t(new RGBA(0, 0, 205, 1));
          case "mediumorchid":
            return new t(new RGBA(186, 85, 211, 1));
          case "mediumpurple":
            return new t(new RGBA(147, 112, 219, 1));
          case "mediumseagreen":
            return new t(new RGBA(60, 179, 113, 1));
          case "mediumslateblue":
            return new t(new RGBA(123, 104, 238, 1));
          case "mediumspringgreen":
            return new t(new RGBA(0, 250, 154, 1));
          case "mediumturquoise":
            return new t(new RGBA(72, 209, 204, 1));
          case "mediumvioletred":
            return new t(new RGBA(199, 21, 133, 1));
          case "midnightblue":
            return new t(new RGBA(25, 25, 112, 1));
          case "mintcream":
            return new t(new RGBA(245, 255, 250, 1));
          case "mistyrose":
            return new t(new RGBA(255, 228, 225, 1));
          case "moccasin":
            return new t(new RGBA(255, 228, 181, 1));
          case "navajowhite":
            return new t(new RGBA(255, 222, 173, 1));
          case "navy":
            return new t(new RGBA(0, 0, 128, 1));
          case "oldlace":
            return new t(new RGBA(253, 245, 230, 1));
          case "olive":
            return new t(new RGBA(128, 128, 0, 1));
          case "olivedrab":
            return new t(new RGBA(107, 142, 35, 1));
          case "orange":
            return new t(new RGBA(255, 165, 0, 1));
          case "orangered":
            return new t(new RGBA(255, 69, 0, 1));
          case "orchid":
            return new t(new RGBA(218, 112, 214, 1));
          case "palegoldenrod":
            return new t(new RGBA(238, 232, 170, 1));
          case "palegreen":
            return new t(new RGBA(152, 251, 152, 1));
          case "paleturquoise":
            return new t(new RGBA(175, 238, 238, 1));
          case "palevioletred":
            return new t(new RGBA(219, 112, 147, 1));
          case "papayawhip":
            return new t(new RGBA(255, 239, 213, 1));
          case "peachpuff":
            return new t(new RGBA(255, 218, 185, 1));
          case "peru":
            return new t(new RGBA(205, 133, 63, 1));
          case "pink":
            return new t(new RGBA(255, 192, 203, 1));
          case "plum":
            return new t(new RGBA(221, 160, 221, 1));
          case "powderblue":
            return new t(new RGBA(176, 224, 230, 1));
          case "purple":
            return new t(new RGBA(128, 0, 128, 1));
          case "rebeccapurple":
            return new t(new RGBA(102, 51, 153, 1));
          case "red":
            return new t(new RGBA(255, 0, 0, 1));
          case "rosybrown":
            return new t(new RGBA(188, 143, 143, 1));
          case "royalblue":
            return new t(new RGBA(65, 105, 225, 1));
          case "saddlebrown":
            return new t(new RGBA(139, 69, 19, 1));
          case "salmon":
            return new t(new RGBA(250, 128, 114, 1));
          case "sandybrown":
            return new t(new RGBA(244, 164, 96, 1));
          case "seagreen":
            return new t(new RGBA(46, 139, 87, 1));
          case "seashell":
            return new t(new RGBA(255, 245, 238, 1));
          case "sienna":
            return new t(new RGBA(160, 82, 45, 1));
          case "silver":
            return new t(new RGBA(192, 192, 192, 1));
          case "skyblue":
            return new t(new RGBA(135, 206, 235, 1));
          case "slateblue":
            return new t(new RGBA(106, 90, 205, 1));
          case "slategray":
            return new t(new RGBA(112, 128, 144, 1));
          case "slategrey":
            return new t(new RGBA(112, 128, 144, 1));
          case "snow":
            return new t(new RGBA(255, 250, 250, 1));
          case "springgreen":
            return new t(new RGBA(0, 255, 127, 1));
          case "steelblue":
            return new t(new RGBA(70, 130, 180, 1));
          case "tan":
            return new t(new RGBA(210, 180, 140, 1));
          case "teal":
            return new t(new RGBA(0, 128, 128, 1));
          case "thistle":
            return new t(new RGBA(216, 191, 216, 1));
          case "tomato":
            return new t(new RGBA(255, 99, 71, 1));
          case "turquoise":
            return new t(new RGBA(64, 224, 208, 1));
          case "violet":
            return new t(new RGBA(238, 130, 238, 1));
          case "wheat":
            return new t(new RGBA(245, 222, 179, 1));
          case "white":
            return new t(new RGBA(255, 255, 255, 1));
          case "whitesmoke":
            return new t(new RGBA(245, 245, 245, 1));
          case "yellow":
            return new t(new RGBA(255, 255, 0, 1));
          case "yellowgreen":
            return new t(new RGBA(154, 205, 50, 1));
          default:
            return null;
        }
      }
      function p(d) {
        const w = d.length;
        if (w === 0 || d.charCodeAt(0) !== 35) return null;
        if (w === 7) {
          const b = 16 * E(d.charCodeAt(1)) + E(d.charCodeAt(2)), N = 16 * E(d.charCodeAt(3)) + E(d.charCodeAt(4)), _ = 16 * E(d.charCodeAt(5)) + E(d.charCodeAt(6));
          return new t(new RGBA(b, N, _, 1));
        }
        if (w === 9) {
          const b = 16 * E(d.charCodeAt(1)) + E(d.charCodeAt(2)), N = 16 * E(d.charCodeAt(3)) + E(d.charCodeAt(4)), _ = 16 * E(d.charCodeAt(5)) + E(d.charCodeAt(6)), v = 16 * E(d.charCodeAt(7)) + E(d.charCodeAt(8));
          return new t(new RGBA(b, N, _, v / 255));
        }
        if (w === 4) {
          const b = E(d.charCodeAt(1)), N = E(d.charCodeAt(2)), _ = E(d.charCodeAt(3));
          return new t(new RGBA(16 * b + b, 16 * N + N, 16 * _ + _));
        }
        if (w === 5) {
          const b = E(d.charCodeAt(1)), N = E(d.charCodeAt(2)), _ = E(d.charCodeAt(3)), v = E(d.charCodeAt(4));
          return new t(new RGBA(16 * b + b, 16 * N + N, 16 * _ + _, (16 * v + v) / 255));
        }
        return null;
      }
      i.parseHex = p;
      function E(d) {
        switch (d) {
          case 48:
            return 0;
          case 49:
            return 1;
          case 50:
            return 2;
          case 51:
            return 3;
          case 52:
            return 4;
          case 53:
            return 5;
          case 54:
            return 6;
          case 55:
            return 7;
          case 56:
            return 8;
          case 57:
            return 9;
          case 97:
            return 10;
          case 65:
            return 10;
          case 98:
            return 11;
          case 66:
            return 11;
          case 99:
            return 12;
          case 67:
            return 12;
          case 100:
            return 13;
          case 68:
            return 13;
          case 101:
            return 14;
          case 69:
            return 14;
          case 102:
            return 15;
          case 70:
            return 15;
        }
        return 0;
      }
    })(r = n.CSS || (n.CSS = {}));
  })(e = t.Format || (t.Format = {}));
})(Color || (Color = {}));
function _parseCaptureGroups(t) {
  const e = [];
  for (const n of t) {
    const r = Number(n);
    (r || r === 0 && n.replace(/\s/g, "") !== "") && e.push(r);
  }
  return e;
}
function _toIColor(t, e, n, r) {
  return { red: t / 255, blue: n / 255, green: e / 255, alpha: r };
}
function _findRange(t, e) {
  const n = e.index, r = e[0].length;
  if (n === void 0) return;
  const i = t.positionAt(n);
  return { startLineNumber: i.lineNumber, startColumn: i.column, endLineNumber: i.lineNumber, endColumn: i.column + r };
}
function _findHexColorInformation(t, e) {
  if (!t) return;
  const n = Color.Format.CSS.parseHex(e);
  if (n) return { range: t, color: _toIColor(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a) };
}
function _findRGBColorInformation(t, e, n) {
  if (!t || e.length !== 1) return;
  const i = e[0].values(), s = _parseCaptureGroups(i);
  return { range: t, color: _toIColor(s[0], s[1], s[2], n ? s[3] : 1) };
}
function _findHSLColorInformation(t, e, n) {
  if (!t || e.length !== 1) return;
  const i = e[0].values(), s = _parseCaptureGroups(i), o = new Color(new HSLA(s[0], s[1] / 100, s[2] / 100, n ? s[3] : 1));
  return { range: t, color: _toIColor(o.rgba.r, o.rgba.g, o.rgba.b, o.rgba.a) };
}
function _findMatches(t, e) {
  return typeof t == "string" ? [...t.matchAll(e)] : t.findMatches(e);
}
function computeColors(t) {
  const e = [], r = _findMatches(t, /\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|\s+(#)([A-Fa-f0-9]{6})\b|\s+(#)([A-Fa-f0-9]{8})\b|^(#)([A-Fa-f0-9]{6})\b|^(#)([A-Fa-f0-9]{8})\b/gm);
  if (r.length > 0) for (const i of r) {
    const s = i.filter((l) => l !== void 0), o = s[1], a = s[2];
    if (!a) continue;
    let u;
    if (o === "rgb") {
      const l = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
      u = _findRGBColorInformation(_findRange(t, i), _findMatches(a, l), false);
    } else if (o === "rgba") {
      const l = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
      u = _findRGBColorInformation(_findRange(t, i), _findMatches(a, l), true);
    } else if (o === "hsl") {
      const l = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
      u = _findHSLColorInformation(_findRange(t, i), _findMatches(a, l), false);
    } else if (o === "hsla") {
      const l = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
      u = _findHSLColorInformation(_findRange(t, i), _findMatches(a, l), true);
    } else o === "#" && (u = _findHexColorInformation(_findRange(t, i), o + a));
    u && e.push(u);
  }
  return e;
}
function computeDefaultDocumentColors(t) {
  return !t || typeof t.getValue != "function" || typeof t.positionAt != "function" ? [] : computeColors(t);
}
var trimDashesRegex = /^-+|-+$/g, CHUNK_SIZE = 100, MAX_SECTION_LINES = 5;
function findSectionHeaders(t, e) {
  let n = [];
  if (e.findRegionSectionHeaders && e.foldingRules?.markers) {
    const r = collectRegionHeaders(t, e);
    n = n.concat(r);
  }
  if (e.findMarkSectionHeaders) {
    const r = collectMarkHeaders(t, e);
    n = n.concat(r);
  }
  return n;
}
function collectRegionHeaders(t, e) {
  const n = [], r = t.getLineCount();
  for (let i = 1; i <= r; i++) {
    const s = t.getLineContent(i), o = s.match(e.foldingRules.markers.start);
    if (o) {
      const a = { startLineNumber: i, startColumn: o[0].length + 1, endLineNumber: i, endColumn: s.length + 1 };
      if (a.endColumn > a.startColumn) {
        const u = { range: a, ...getHeaderText(s.substring(o[0].length)), shouldBeInComments: false };
        (u.text || u.hasSeparatorLine) && n.push(u);
      }
    }
  }
  return n;
}
function collectMarkHeaders(t, e) {
  const n = [], r = t.getLineCount(), i = isMultilineRegexSource(e.markSectionHeaderRegex), s = new RegExp(e.markSectionHeaderRegex, `gdm${i ? "s" : ""}`);
  for (let o = 1; o <= r; o += CHUNK_SIZE - MAX_SECTION_LINES) {
    const a = Math.min(o + CHUNK_SIZE - 1, r), u = [];
    for (let c = o; c <= a; c++) u.push(t.getLineContent(c));
    const l = u.join(`
`);
    s.lastIndex = 0;
    let f;
    for (; (f = s.exec(l)) !== null; ) {
      const c = l.substring(0, f.index), m = (c.match(/\n/g) || []).length, h = o + m, g = f[0].split(`
`), p = g.length, E = h + p - 1, d = c.lastIndexOf(`
`) + 1, w = f.index - d + 1, b = g[g.length - 1], N = p === 1 ? w + f[0].length : b.length + 1, _ = { startLineNumber: h, startColumn: w, endLineNumber: E, endColumn: N }, v = (f.groups ?? {}).label ?? "", S = ((f.groups ?? {}).separator ?? "") !== "", L = { range: _, text: v, hasSeparatorLine: S, shouldBeInComments: true };
      (L.text || L.hasSeparatorLine) && (n.length === 0 || n[n.length - 1].range.endLineNumber < L.range.startLineNumber) && n.push(L), s.lastIndex = f.index + f[0].length;
    }
  }
  return n;
}
function getHeaderText(t) {
  t = t.trim();
  const e = t.startsWith("-");
  return t = t.replace(trimDashesRegex, ""), { text: t, hasSeparatorLine: e };
}
var safeProcess, vscodeGlobal = globalThis.vscode;
if (typeof vscodeGlobal < "u" && typeof vscodeGlobal.process < "u") {
  const t = vscodeGlobal.process;
  safeProcess = { get platform() {
    return t.platform;
  }, get arch() {
    return t.arch;
  }, get env() {
    return t.env;
  }, cwd() {
    return t.cwd();
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
  constructor(t, e, n) {
    let r;
    typeof e == "string" && e.indexOf("not ") === 0 ? (r = "must not be", e = e.replace(/^not /, "")) : r = "must be";
    const i = t.indexOf(".") !== -1 ? "property" : "argument";
    let s = `The "${t}" ${i} ${r} of type ${e}`;
    s += `. Received type ${typeof n}`, super(s), this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function validateObject(t, e) {
  if (t === null || typeof t != "object") throw new ErrorInvalidArgType(e, "Object", t);
}
function validateString(t, e) {
  if (typeof t != "string") throw new ErrorInvalidArgType(e, "string", t);
}
var platformIsWin32 = platform === "win32";
function isPathSeparator(t) {
  return t === CHAR_FORWARD_SLASH || t === CHAR_BACKWARD_SLASH;
}
function isPosixPathSeparator(t) {
  return t === CHAR_FORWARD_SLASH;
}
function isWindowsDeviceRoot(t) {
  return t >= CHAR_UPPERCASE_A && t <= CHAR_UPPERCASE_Z || t >= CHAR_LOWERCASE_A && t <= CHAR_LOWERCASE_Z;
}
function normalizeString(t, e, n, r) {
  let i = "", s = 0, o = -1, a = 0, u = 0;
  for (let l = 0; l <= t.length; ++l) {
    if (l < t.length) u = t.charCodeAt(l);
    else {
      if (r(u)) break;
      u = CHAR_FORWARD_SLASH;
    }
    if (r(u)) {
      if (!(o === l - 1 || a === 1)) if (a === 2) {
        if (i.length < 2 || s !== 2 || i.charCodeAt(i.length - 1) !== CHAR_DOT || i.charCodeAt(i.length - 2) !== CHAR_DOT) {
          if (i.length > 2) {
            const f = i.lastIndexOf(n);
            f === -1 ? (i = "", s = 0) : (i = i.slice(0, f), s = i.length - 1 - i.lastIndexOf(n)), o = l, a = 0;
            continue;
          } else if (i.length !== 0) {
            i = "", s = 0, o = l, a = 0;
            continue;
          }
        }
        e && (i += i.length > 0 ? `${n}..` : "..", s = 2);
      } else i.length > 0 ? i += `${n}${t.slice(o + 1, l)}` : i = t.slice(o + 1, l), s = l - o - 1;
      o = l, a = 0;
    } else u === CHAR_DOT && a !== -1 ? ++a : a = -1;
  }
  return i;
}
function formatExt(t) {
  return t ? `${t[0] === "." ? "" : "."}${t}` : "";
}
function _format(t, e) {
  validateObject(e, "pathObject");
  const n = e.dir || e.root, r = e.base || `${e.name || ""}${formatExt(e.ext)}`;
  return n ? n === e.root ? `${n}${r}` : `${n}${t}${r}` : r;
}
var win32 = { resolve(...t) {
  let e = "", n = "", r = false;
  for (let i = t.length - 1; i >= -1; i--) {
    let s;
    if (i >= 0) {
      if (s = t[i], validateString(s, `paths[${i}]`), s.length === 0) continue;
    } else e.length === 0 ? s = cwd() : (s = env[`=${e}`] || cwd(), (s === void 0 || s.slice(0, 2).toLowerCase() !== e.toLowerCase() && s.charCodeAt(2) === CHAR_BACKWARD_SLASH) && (s = `${e}\\`));
    const o = s.length;
    let a = 0, u = "", l = false;
    const f = s.charCodeAt(0);
    if (o === 1) isPathSeparator(f) && (a = 1, l = true);
    else if (isPathSeparator(f)) if (l = true, isPathSeparator(s.charCodeAt(1))) {
      let c = 2, m = c;
      for (; c < o && !isPathSeparator(s.charCodeAt(c)); ) c++;
      if (c < o && c !== m) {
        const h = s.slice(m, c);
        for (m = c; c < o && isPathSeparator(s.charCodeAt(c)); ) c++;
        if (c < o && c !== m) {
          for (m = c; c < o && !isPathSeparator(s.charCodeAt(c)); ) c++;
          (c === o || c !== m) && (u = `\\\\${h}\\${s.slice(m, c)}`, a = c);
        }
      }
    } else a = 1;
    else isWindowsDeviceRoot(f) && s.charCodeAt(1) === CHAR_COLON && (u = s.slice(0, 2), a = 2, o > 2 && isPathSeparator(s.charCodeAt(2)) && (l = true, a = 3));
    if (u.length > 0) if (e.length > 0) {
      if (u.toLowerCase() !== e.toLowerCase()) continue;
    } else e = u;
    if (r) {
      if (e.length > 0) break;
    } else if (n = `${s.slice(a)}\\${n}`, r = l, l && e.length > 0) break;
  }
  return n = normalizeString(n, !r, "\\", isPathSeparator), r ? `${e}\\${n}` : `${e}${n}` || ".";
}, normalize(t) {
  validateString(t, "path");
  const e = t.length;
  if (e === 0) return ".";
  let n = 0, r, i = false;
  const s = t.charCodeAt(0);
  if (e === 1) return isPosixPathSeparator(s) ? "\\" : t;
  if (isPathSeparator(s)) if (i = true, isPathSeparator(t.charCodeAt(1))) {
    let a = 2, u = a;
    for (; a < e && !isPathSeparator(t.charCodeAt(a)); ) a++;
    if (a < e && a !== u) {
      const l = t.slice(u, a);
      for (u = a; a < e && isPathSeparator(t.charCodeAt(a)); ) a++;
      if (a < e && a !== u) {
        for (u = a; a < e && !isPathSeparator(t.charCodeAt(a)); ) a++;
        if (a === e) return `\\\\${l}\\${t.slice(u)}\\`;
        a !== u && (r = `\\\\${l}\\${t.slice(u, a)}`, n = a);
      }
    }
  } else n = 1;
  else isWindowsDeviceRoot(s) && t.charCodeAt(1) === CHAR_COLON && (r = t.slice(0, 2), n = 2, e > 2 && isPathSeparator(t.charCodeAt(2)) && (i = true, n = 3));
  let o = n < e ? normalizeString(t.slice(n), !i, "\\", isPathSeparator) : "";
  if (o.length === 0 && !i && (o = "."), o.length > 0 && isPathSeparator(t.charCodeAt(e - 1)) && (o += "\\"), !i && r === void 0 && t.includes(":")) {
    if (o.length >= 2 && isWindowsDeviceRoot(o.charCodeAt(0)) && o.charCodeAt(1) === CHAR_COLON) return `.\\${o}`;
    let a = t.indexOf(":");
    do
      if (a === e - 1 || isPathSeparator(t.charCodeAt(a + 1))) return `.\\${o}`;
    while ((a = t.indexOf(":", a + 1)) !== -1);
  }
  return r === void 0 ? i ? `\\${o}` : o : i ? `${r}\\${o}` : `${r}${o}`;
}, isAbsolute(t) {
  validateString(t, "path");
  const e = t.length;
  if (e === 0) return false;
  const n = t.charCodeAt(0);
  return isPathSeparator(n) || e > 2 && isWindowsDeviceRoot(n) && t.charCodeAt(1) === CHAR_COLON && isPathSeparator(t.charCodeAt(2));
}, join(...t) {
  if (t.length === 0) return ".";
  let e, n;
  for (let s = 0; s < t.length; ++s) {
    const o = t[s];
    validateString(o, "path"), o.length > 0 && (e === void 0 ? e = n = o : e += `\\${o}`);
  }
  if (e === void 0) return ".";
  let r = true, i = 0;
  if (typeof n == "string" && isPathSeparator(n.charCodeAt(0))) {
    ++i;
    const s = n.length;
    s > 1 && isPathSeparator(n.charCodeAt(1)) && (++i, s > 2 && (isPathSeparator(n.charCodeAt(2)) ? ++i : r = false));
  }
  if (r) {
    for (; i < e.length && isPathSeparator(e.charCodeAt(i)); ) i++;
    i >= 2 && (e = `\\${e.slice(i)}`);
  }
  return win32.normalize(e);
}, relative(t, e) {
  if (validateString(t, "from"), validateString(e, "to"), t === e) return "";
  const n = win32.resolve(t), r = win32.resolve(e);
  if (n === r || (t = n.toLowerCase(), e = r.toLowerCase(), t === e)) return "";
  if (n.length !== t.length || r.length !== e.length) {
    const g = n.split("\\"), p = r.split("\\");
    g[g.length - 1] === "" && g.pop(), p[p.length - 1] === "" && p.pop();
    const E = g.length, d = p.length, w = E < d ? E : d;
    let b;
    for (b = 0; b < w && g[b].toLowerCase() === p[b].toLowerCase(); b++) ;
    return b === 0 ? r : b === w ? d > w ? p.slice(b).join("\\") : E > w ? "..\\".repeat(E - 1 - b) + ".." : "" : "..\\".repeat(E - b) + p.slice(b).join("\\");
  }
  let i = 0;
  for (; i < t.length && t.charCodeAt(i) === CHAR_BACKWARD_SLASH; ) i++;
  let s = t.length;
  for (; s - 1 > i && t.charCodeAt(s - 1) === CHAR_BACKWARD_SLASH; ) s--;
  const o = s - i;
  let a = 0;
  for (; a < e.length && e.charCodeAt(a) === CHAR_BACKWARD_SLASH; ) a++;
  let u = e.length;
  for (; u - 1 > a && e.charCodeAt(u - 1) === CHAR_BACKWARD_SLASH; ) u--;
  const l = u - a, f = o < l ? o : l;
  let c = -1, m = 0;
  for (; m < f; m++) {
    const g = t.charCodeAt(i + m);
    if (g !== e.charCodeAt(a + m)) break;
    g === CHAR_BACKWARD_SLASH && (c = m);
  }
  if (m !== f) {
    if (c === -1) return r;
  } else {
    if (l > f) {
      if (e.charCodeAt(a + m) === CHAR_BACKWARD_SLASH) return r.slice(a + m + 1);
      if (m === 2) return r.slice(a + m);
    }
    o > f && (t.charCodeAt(i + m) === CHAR_BACKWARD_SLASH ? c = m : m === 2 && (c = 3)), c === -1 && (c = 0);
  }
  let h = "";
  for (m = i + c + 1; m <= s; ++m) (m === s || t.charCodeAt(m) === CHAR_BACKWARD_SLASH) && (h += h.length === 0 ? ".." : "\\..");
  return a += c, h.length > 0 ? `${h}${r.slice(a, u)}` : (r.charCodeAt(a) === CHAR_BACKWARD_SLASH && ++a, r.slice(a, u));
}, toNamespacedPath(t) {
  if (typeof t != "string" || t.length === 0) return t;
  const e = win32.resolve(t);
  if (e.length <= 2) return t;
  if (e.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
    if (e.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
      const n = e.charCodeAt(2);
      if (n !== CHAR_QUESTION_MARK && n !== CHAR_DOT) return `\\\\?\\UNC\\${e.slice(2)}`;
    }
  } else if (isWindowsDeviceRoot(e.charCodeAt(0)) && e.charCodeAt(1) === CHAR_COLON && e.charCodeAt(2) === CHAR_BACKWARD_SLASH) return `\\\\?\\${e}`;
  return e;
}, dirname(t) {
  validateString(t, "path");
  const e = t.length;
  if (e === 0) return ".";
  let n = -1, r = 0;
  const i = t.charCodeAt(0);
  if (e === 1) return isPathSeparator(i) ? t : ".";
  if (isPathSeparator(i)) {
    if (n = r = 1, isPathSeparator(t.charCodeAt(1))) {
      let a = 2, u = a;
      for (; a < e && !isPathSeparator(t.charCodeAt(a)); ) a++;
      if (a < e && a !== u) {
        for (u = a; a < e && isPathSeparator(t.charCodeAt(a)); ) a++;
        if (a < e && a !== u) {
          for (u = a; a < e && !isPathSeparator(t.charCodeAt(a)); ) a++;
          if (a === e) return t;
          a !== u && (n = r = a + 1);
        }
      }
    }
  } else isWindowsDeviceRoot(i) && t.charCodeAt(1) === CHAR_COLON && (n = e > 2 && isPathSeparator(t.charCodeAt(2)) ? 3 : 2, r = n);
  let s = -1, o = true;
  for (let a = e - 1; a >= r; --a) if (isPathSeparator(t.charCodeAt(a))) {
    if (!o) {
      s = a;
      break;
    }
  } else o = false;
  if (s === -1) {
    if (n === -1) return ".";
    s = n;
  }
  return t.slice(0, s);
}, basename(t, e) {
  e !== void 0 && validateString(e, "suffix"), validateString(t, "path");
  let n = 0, r = -1, i = true, s;
  if (t.length >= 2 && isWindowsDeviceRoot(t.charCodeAt(0)) && t.charCodeAt(1) === CHAR_COLON && (n = 2), e !== void 0 && e.length > 0 && e.length <= t.length) {
    if (e === t) return "";
    let o = e.length - 1, a = -1;
    for (s = t.length - 1; s >= n; --s) {
      const u = t.charCodeAt(s);
      if (isPathSeparator(u)) {
        if (!i) {
          n = s + 1;
          break;
        }
      } else a === -1 && (i = false, a = s + 1), o >= 0 && (u === e.charCodeAt(o) ? --o === -1 && (r = s) : (o = -1, r = a));
    }
    return n === r ? r = a : r === -1 && (r = t.length), t.slice(n, r);
  }
  for (s = t.length - 1; s >= n; --s) if (isPathSeparator(t.charCodeAt(s))) {
    if (!i) {
      n = s + 1;
      break;
    }
  } else r === -1 && (i = false, r = s + 1);
  return r === -1 ? "" : t.slice(n, r);
}, extname(t) {
  validateString(t, "path");
  let e = 0, n = -1, r = 0, i = -1, s = true, o = 0;
  t.length >= 2 && t.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(t.charCodeAt(0)) && (e = r = 2);
  for (let a = t.length - 1; a >= e; --a) {
    const u = t.charCodeAt(a);
    if (isPathSeparator(u)) {
      if (!s) {
        r = a + 1;
        break;
      }
      continue;
    }
    i === -1 && (s = false, i = a + 1), u === CHAR_DOT ? n === -1 ? n = a : o !== 1 && (o = 1) : n !== -1 && (o = -1);
  }
  return n === -1 || i === -1 || o === 0 || o === 1 && n === i - 1 && n === r + 1 ? "" : t.slice(n, i);
}, format: _format.bind(null, "\\"), parse(t) {
  validateString(t, "path");
  const e = { root: "", dir: "", base: "", ext: "", name: "" };
  if (t.length === 0) return e;
  const n = t.length;
  let r = 0, i = t.charCodeAt(0);
  if (n === 1) return isPathSeparator(i) ? (e.root = e.dir = t, e) : (e.base = e.name = t, e);
  if (isPathSeparator(i)) {
    if (r = 1, isPathSeparator(t.charCodeAt(1))) {
      let c = 2, m = c;
      for (; c < n && !isPathSeparator(t.charCodeAt(c)); ) c++;
      if (c < n && c !== m) {
        for (m = c; c < n && isPathSeparator(t.charCodeAt(c)); ) c++;
        if (c < n && c !== m) {
          for (m = c; c < n && !isPathSeparator(t.charCodeAt(c)); ) c++;
          c === n ? r = c : c !== m && (r = c + 1);
        }
      }
    }
  } else if (isWindowsDeviceRoot(i) && t.charCodeAt(1) === CHAR_COLON) {
    if (n <= 2) return e.root = e.dir = t, e;
    if (r = 2, isPathSeparator(t.charCodeAt(2))) {
      if (n === 3) return e.root = e.dir = t, e;
      r = 3;
    }
  }
  r > 0 && (e.root = t.slice(0, r));
  let s = -1, o = r, a = -1, u = true, l = t.length - 1, f = 0;
  for (; l >= r; --l) {
    if (i = t.charCodeAt(l), isPathSeparator(i)) {
      if (!u) {
        o = l + 1;
        break;
      }
      continue;
    }
    a === -1 && (u = false, a = l + 1), i === CHAR_DOT ? s === -1 ? s = l : f !== 1 && (f = 1) : s !== -1 && (f = -1);
  }
  return a !== -1 && (s === -1 || f === 0 || f === 1 && s === a - 1 && s === o + 1 ? e.base = e.name = t.slice(o, a) : (e.name = t.slice(o, s), e.base = t.slice(o, a), e.ext = t.slice(s, a))), o > 0 && o !== r ? e.dir = t.slice(0, o - 1) : e.dir = e.root, e;
}, sep: "\\", delimiter: ";", win32: null, posix: null }, posixCwd = (() => {
  if (platformIsWin32) {
    const t = /\\/g;
    return () => {
      const e = cwd().replace(t, "/");
      return e.slice(e.indexOf("/"));
    };
  }
  return () => cwd();
})(), posix = { resolve(...t) {
  let e = "", n = false;
  for (let r = t.length - 1; r >= 0 && !n; r--) {
    const i = t[r];
    validateString(i, `paths[${r}]`), i.length !== 0 && (e = `${i}/${e}`, n = i.charCodeAt(0) === CHAR_FORWARD_SLASH);
  }
  if (!n) {
    const r = posixCwd();
    e = `${r}/${e}`, n = r.charCodeAt(0) === CHAR_FORWARD_SLASH;
  }
  return e = normalizeString(e, !n, "/", isPosixPathSeparator), n ? `/${e}` : e.length > 0 ? e : ".";
}, normalize(t) {
  if (validateString(t, "path"), t.length === 0) return ".";
  const e = t.charCodeAt(0) === CHAR_FORWARD_SLASH, n = t.charCodeAt(t.length - 1) === CHAR_FORWARD_SLASH;
  return t = normalizeString(t, !e, "/", isPosixPathSeparator), t.length === 0 ? e ? "/" : n ? "./" : "." : (n && (t += "/"), e ? `/${t}` : t);
}, isAbsolute(t) {
  return validateString(t, "path"), t.length > 0 && t.charCodeAt(0) === CHAR_FORWARD_SLASH;
}, join(...t) {
  if (t.length === 0) return ".";
  const e = [];
  for (let n = 0; n < t.length; ++n) {
    const r = t[n];
    validateString(r, "path"), r.length > 0 && e.push(r);
  }
  return e.length === 0 ? "." : posix.normalize(e.join("/"));
}, relative(t, e) {
  if (validateString(t, "from"), validateString(e, "to"), t === e || (t = posix.resolve(t), e = posix.resolve(e), t === e)) return "";
  const n = 1, r = t.length, i = r - n, s = 1, o = e.length - s, a = i < o ? i : o;
  let u = -1, l = 0;
  for (; l < a; l++) {
    const c = t.charCodeAt(n + l);
    if (c !== e.charCodeAt(s + l)) break;
    c === CHAR_FORWARD_SLASH && (u = l);
  }
  if (l === a) if (o > a) {
    if (e.charCodeAt(s + l) === CHAR_FORWARD_SLASH) return e.slice(s + l + 1);
    if (l === 0) return e.slice(s + l);
  } else i > a && (t.charCodeAt(n + l) === CHAR_FORWARD_SLASH ? u = l : l === 0 && (u = 0));
  let f = "";
  for (l = n + u + 1; l <= r; ++l) (l === r || t.charCodeAt(l) === CHAR_FORWARD_SLASH) && (f += f.length === 0 ? ".." : "/..");
  return `${f}${e.slice(s + u)}`;
}, toNamespacedPath(t) {
  return t;
}, dirname(t) {
  if (validateString(t, "path"), t.length === 0) return ".";
  const e = t.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let n = -1, r = true;
  for (let i = t.length - 1; i >= 1; --i) if (t.charCodeAt(i) === CHAR_FORWARD_SLASH) {
    if (!r) {
      n = i;
      break;
    }
  } else r = false;
  return n === -1 ? e ? "/" : "." : e && n === 1 ? "//" : t.slice(0, n);
}, basename(t, e) {
  e !== void 0 && validateString(e, "suffix"), validateString(t, "path");
  let n = 0, r = -1, i = true, s;
  if (e !== void 0 && e.length > 0 && e.length <= t.length) {
    if (e === t) return "";
    let o = e.length - 1, a = -1;
    for (s = t.length - 1; s >= 0; --s) {
      const u = t.charCodeAt(s);
      if (u === CHAR_FORWARD_SLASH) {
        if (!i) {
          n = s + 1;
          break;
        }
      } else a === -1 && (i = false, a = s + 1), o >= 0 && (u === e.charCodeAt(o) ? --o === -1 && (r = s) : (o = -1, r = a));
    }
    return n === r ? r = a : r === -1 && (r = t.length), t.slice(n, r);
  }
  for (s = t.length - 1; s >= 0; --s) if (t.charCodeAt(s) === CHAR_FORWARD_SLASH) {
    if (!i) {
      n = s + 1;
      break;
    }
  } else r === -1 && (i = false, r = s + 1);
  return r === -1 ? "" : t.slice(n, r);
}, extname(t) {
  validateString(t, "path");
  let e = -1, n = 0, r = -1, i = true, s = 0;
  for (let o = t.length - 1; o >= 0; --o) {
    const a = t[o];
    if (a === "/") {
      if (!i) {
        n = o + 1;
        break;
      }
      continue;
    }
    r === -1 && (i = false, r = o + 1), a === "." ? e === -1 ? e = o : s !== 1 && (s = 1) : e !== -1 && (s = -1);
  }
  return e === -1 || r === -1 || s === 0 || s === 1 && e === r - 1 && e === n + 1 ? "" : t.slice(e, r);
}, format: _format.bind(null, "/"), parse(t) {
  validateString(t, "path");
  const e = { root: "", dir: "", base: "", ext: "", name: "" };
  if (t.length === 0) return e;
  const n = t.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let r;
  n ? (e.root = "/", r = 1) : r = 0;
  let i = -1, s = 0, o = -1, a = true, u = t.length - 1, l = 0;
  for (; u >= r; --u) {
    const f = t.charCodeAt(u);
    if (f === CHAR_FORWARD_SLASH) {
      if (!a) {
        s = u + 1;
        break;
      }
      continue;
    }
    o === -1 && (a = false, o = u + 1), f === CHAR_DOT ? i === -1 ? i = u : l !== 1 && (l = 1) : i !== -1 && (l = -1);
  }
  if (o !== -1) {
    const f = s === 0 && n ? 1 : s;
    i === -1 || l === 0 || l === 1 && i === o - 1 && i === s + 1 ? e.base = e.name = t.slice(f, o) : (e.name = t.slice(f, i), e.base = t.slice(f, o), e.ext = t.slice(i, o));
  }
  return s > 0 ? e.dir = t.slice(0, s - 1) : n && (e.dir = "/"), e;
}, sep: "/", delimiter: ":", win32: null, posix: null };
posix.win32 = win32.win32 = win32, posix.posix = win32.posix = posix;
var normalize = platformIsWin32 ? win32.normalize : posix.normalize, isAbsolute = platformIsWin32 ? win32.isAbsolute : posix.isAbsolute, join = platformIsWin32 ? win32.join : posix.join, resolve = platformIsWin32 ? win32.resolve : posix.resolve, relative = platformIsWin32 ? win32.relative : posix.relative, dirname = platformIsWin32 ? win32.dirname : posix.dirname, basename = platformIsWin32 ? win32.basename : posix.basename, extname = platformIsWin32 ? win32.extname : posix.extname, format = platformIsWin32 ? win32.format : posix.format, parse = platformIsWin32 ? win32.parse : posix.parse, toNamespacedPath = platformIsWin32 ? win32.toNamespacedPath : posix.toNamespacedPath, sep = platformIsWin32 ? win32.sep : posix.sep, delimiter = platformIsWin32 ? win32.delimiter : posix.delimiter;
function isPathSeparator2(t) {
  return t === 47 || t === 92;
}
function toSlashes(t) {
  return t.replace(/[\\/]/g, posix.sep);
}
function toPosixPath(t) {
  return t.indexOf("/") === -1 && (t = toSlashes(t)), /^[a-zA-Z]:(\/|$)/.test(t) && (t = "/" + t), t;
}
function getRoot(t, e = posix.sep) {
  if (!t) return "";
  const n = t.length, r = t.charCodeAt(0);
  if (isPathSeparator2(r)) {
    if (isPathSeparator2(t.charCodeAt(1)) && !isPathSeparator2(t.charCodeAt(2))) {
      let s = 3;
      const o = s;
      for (; s < n && !isPathSeparator2(t.charCodeAt(s)); s++) ;
      if (o !== s && !isPathSeparator2(t.charCodeAt(s + 1))) {
        for (s += 1; s < n; s++) if (isPathSeparator2(t.charCodeAt(s))) return t.slice(0, s + 1).replace(/[\\/]/g, e);
      }
    }
    return e;
  } else if (isWindowsDriveLetter(r) && t.charCodeAt(1) === 58) return isPathSeparator2(t.charCodeAt(2)) ? t.slice(0, 2) + e : t.slice(0, 2);
  let i = t.indexOf("://");
  if (i !== -1) {
    for (i += 3; i < n; i++) if (isPathSeparator2(t.charCodeAt(i))) return t.slice(0, i + 1);
  }
  return "";
}
function prefixEqualCaseSensitive(t, e, n) {
  return n === 0 ? true : t.charCodeAt(0) !== e.charCodeAt(0) ? false : n === 1 ? true : t.charCodeAt(n - 1) !== e.charCodeAt(n - 1) ? false : t.startsWith(e);
}
function prefixEqualIgnoreCase(t, e, n) {
  for (let r = 0; r < n; r++) {
    let i = t.charCodeAt(r), s = e.charCodeAt(r);
    if (i !== s) {
      if (i >= 128 || s >= 128) return compareSubstringIgnoreCase(t, e, r, n, r, n) === 0;
      if (i >= 97 && i <= 122 && (i -= 32), s >= 97 && s <= 122 && (s -= 32), i !== s) return false;
    }
  }
  return true;
}
function isEqualOrParent(t, e, n, r = sep) {
  if (t === e) return true;
  if (!t || !e) return false;
  const i = t.length, s = e.length;
  if (s > i) return false;
  const o = r.charCodeAt(0), a = e.charCodeAt(s - 1) === o;
  if (s < i && !a && t.charCodeAt(s) !== o) return false;
  if (n) {
    if (!prefixEqualIgnoreCase(t, e, s)) return false;
  } else if (!prefixEqualCaseSensitive(t, e, s)) return false;
  return s === i || a ? true : t.charCodeAt(s) === o;
}
function isWindowsDriveLetter(t) {
  return t >= 65 && t <= 90 || t >= 97 && t <= 122;
}
var _schemePattern = /^\w[\w\d+.-]*$/, _singleSlashStart = /^\//, _doubleSlashStart = /^\/\//;
function _validateUri(t, e) {
  if (!t.scheme && e) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t.authority}", path: "${t.path}", query: "${t.query}", fragment: "${t.fragment}"}`);
  if (t.scheme && !_schemePattern.test(t.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (t.path) {
    if (t.authority) {
      if (!_singleSlashStart.test(t.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (_doubleSlashStart.test(t.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function _schemeFix(t, e) {
  return !t && !e ? "file" : t;
}
function _referenceResolution(t, e) {
  switch (t) {
    case "https":
    case "http":
    case "file":
      e ? e[0] !== _slash && (e = _slash + e) : e = _slash;
      break;
  }
  return e;
}
var _empty = "", _slash = "/", _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, URI = class Et {
  static isUri(e) {
    return e instanceof Et ? true : e ? typeof e.authority == "string" && typeof e.fragment == "string" && typeof e.path == "string" && typeof e.query == "string" && typeof e.scheme == "string" && typeof e.fsPath == "string" && typeof e.with == "function" && typeof e.toString == "function" : false;
  }
  constructor(e, n, r, i, s, o = false) {
    typeof e == "object" ? (this.scheme = e.scheme || _empty, this.authority = e.authority || _empty, this.path = e.path || _empty, this.query = e.query || _empty, this.fragment = e.fragment || _empty) : (this.scheme = _schemeFix(e, o), this.authority = n || _empty, this.path = _referenceResolution(this.scheme, r || _empty), this.query = i || _empty, this.fragment = s || _empty, _validateUri(this, o));
  }
  get fsPath() {
    return uriToFsPath(this, false);
  }
  with(e) {
    if (!e) return this;
    let { scheme: n, authority: r, path: i, query: s, fragment: o } = e;
    return n === void 0 ? n = this.scheme : n === null && (n = _empty), r === void 0 ? r = this.authority : r === null && (r = _empty), i === void 0 ? i = this.path : i === null && (i = _empty), s === void 0 ? s = this.query : s === null && (s = _empty), o === void 0 ? o = this.fragment : o === null && (o = _empty), n === this.scheme && r === this.authority && i === this.path && s === this.query && o === this.fragment ? this : new Uri(n, r, i, s, o);
  }
  static parse(e, n = false) {
    const r = _regexp.exec(e);
    return r ? new Uri(r[2] || _empty, percentDecode(r[4] || _empty), percentDecode(r[5] || _empty), percentDecode(r[7] || _empty), percentDecode(r[9] || _empty), n) : new Uri(_empty, _empty, _empty, _empty, _empty);
  }
  static file(e) {
    let n = _empty;
    if (isWindows && (e = e.replace(/\\/g, _slash)), e[0] === _slash && e[1] === _slash) {
      const r = e.indexOf(_slash, 2);
      r === -1 ? (n = e.substring(2), e = _slash) : (n = e.substring(2, r), e = e.substring(r) || _slash);
    }
    return new Uri("file", n, e, _empty, _empty);
  }
  static from(e, n) {
    return new Uri(e.scheme, e.authority, e.path, e.query, e.fragment, n);
  }
  static joinPath(e, ...n) {
    if (!e.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let r;
    return isWindows && e.scheme === "file" ? r = Et.file(win32.join(uriToFsPath(e, true), ...n)).path : r = posix.join(e.path, ...n), e.with({ path: r });
  }
  toString(e = false) {
    return _asFormatted(this, e);
  }
  toJSON() {
    return this;
  }
  static revive(e) {
    if (e) {
      if (e instanceof Et) return e;
      {
        const n = new Uri(e);
        return n._formatted = e.external ?? null, n._fsPath = e._sep === _pathSepMarker ? e.fsPath ?? null : null, n;
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
  toString(t = false) {
    return t ? _asFormatted(this, true) : (this._formatted || (this._formatted = _asFormatted(this, false)), this._formatted);
  }
  toJSON() {
    const t = { $mid: 1 };
    return this._fsPath && (t.fsPath = this._fsPath, t._sep = _pathSepMarker), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
  }
}, encodeTable = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function encodeURIComponentFast(t, e, n) {
  let r, i = -1;
  for (let s = 0; s < t.length; s++) {
    const o = t.charCodeAt(s);
    if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || e && o === 47 || n && o === 91 || n && o === 93 || n && o === 58) i !== -1 && (r += encodeURIComponent(t.substring(i, s)), i = -1), r !== void 0 && (r += t.charAt(s));
    else {
      r === void 0 && (r = t.substr(0, s));
      const a = encodeTable[o];
      a !== void 0 ? (i !== -1 && (r += encodeURIComponent(t.substring(i, s)), i = -1), r += a) : i === -1 && (i = s);
    }
  }
  return i !== -1 && (r += encodeURIComponent(t.substring(i))), r !== void 0 ? r : t;
}
function encodeURIComponentMinimal(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const r = t.charCodeAt(n);
    r === 35 || r === 63 ? (e === void 0 && (e = t.substr(0, n)), e += encodeTable[r]) : e !== void 0 && (e += t[n]);
  }
  return e !== void 0 ? e : t;
}
function uriToFsPath(t, e) {
  let n;
  return t.authority && t.path.length > 1 && t.scheme === "file" ? n = `//${t.authority}${t.path}` : t.path.charCodeAt(0) === 47 && (t.path.charCodeAt(1) >= 65 && t.path.charCodeAt(1) <= 90 || t.path.charCodeAt(1) >= 97 && t.path.charCodeAt(1) <= 122) && t.path.charCodeAt(2) === 58 ? e ? n = t.path.substr(1) : n = t.path[1].toLowerCase() + t.path.substr(2) : n = t.path, isWindows && (n = n.replace(/\//g, "\\")), n;
}
function _asFormatted(t, e) {
  const n = e ? encodeURIComponentMinimal : encodeURIComponentFast;
  let r = "", { scheme: i, authority: s, path: o, query: a, fragment: u } = t;
  if (i && (r += i, r += ":"), (s || i === "file") && (r += _slash, r += _slash), s) {
    let l = s.indexOf("@");
    if (l !== -1) {
      const f = s.substr(0, l);
      s = s.substr(l + 1), l = f.lastIndexOf(":"), l === -1 ? r += n(f, false, false) : (r += n(f.substr(0, l), false, false), r += ":", r += n(f.substr(l + 1), false, true)), r += "@";
    }
    s = s.toLowerCase(), l = s.lastIndexOf(":"), l === -1 ? r += n(s, false, true) : (r += n(s.substr(0, l), false, true), r += s.substr(l));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      const l = o.charCodeAt(1);
      l >= 65 && l <= 90 && (o = `/${String.fromCharCode(l + 32)}:${o.substr(3)}`);
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      const l = o.charCodeAt(0);
      l >= 65 && l <= 90 && (o = `${String.fromCharCode(l + 32)}:${o.substr(2)}`);
    }
    r += n(o, true, false);
  }
  return a && (r += "?", r += n(a, false, false)), u && (r += "#", r += e ? u : encodeURIComponentFast(u, false, false)), r;
}
function decodeURIComponentGraceful(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    return t.length > 3 ? t.substr(0, 3) + decodeURIComponentGraceful(t.substr(3)) : t;
  }
}
var _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function percentDecode(t) {
  return t.match(_rEncodedAsHex) ? t.replace(_rEncodedAsHex, (e) => decodeURIComponentGraceful(e)) : t;
}
var Schemas;
((t) => {
  t.inMemory = "inmemory", t.vscode = "vscode", t.internal = "private", t.walkThrough = "walkThrough", t.walkThroughSnippet = "walkThroughSnippet", t.http = "http", t.https = "https", t.file = "file", t.git = "git", t.mailto = "mailto", t.untitled = "untitled", t.data = "data", t.command = "command", t.vscodeRemote = "vscode-remote", t.vscodeRemoteResource = "vscode-remote-resource", t.vscodeManagedRemoteResource = "vscode-managed-remote-resource", t.vscodeUserData = "vscode-userdata", t.vscodeCustomEditor = "vscode-custom-editor", t.vscodeNotebook = "vscode-notebook", t.vscodeNotebookCell = "vscode-notebook-cell", t.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", t.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", t.vscodeNotebookCellOutput = "vscode-notebook-cell-output", t.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", t.vscodeNotebookMetadata = "vscode-notebook-metadata", t.vscodeInteractiveInput = "vscode-interactive-input", t.vscodeSettings = "vscode-settings", t.vscodeWorkspaceTrust = "vscode-workspace-trust", t.vscodeTerminal = "vscode-terminal", t.terminal = "terminal", t.vscodeChatCodeBlock = "vscode-chat-code-block", t.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", t.vscodeChatSesssion = "vscode-chat-editor", t.webviewPanel = "webview-panel", t.vscodeWebview = "vscode-webview", t.extension = "extension", t.aiChat = "cursor.aichat", t.contextObject = "cursor.context-object", t.composer = "cursor.composer", t.aiSettings = "cursor.aisettings", t.tinderDiffEditor = "cursor.tinderdiffeditor", t.vscodeFileResource = "vscode-file", t.cursorRpcDevtools = "cursor-rpc-devtools", t.tmp = "tmp", t.vsls = "vsls", t.vscodeSourceControl = "vscode-scm", t.commentsInput = "comment", t.codeSetting = "code-setting", t.cursorDev = "cursor-dev-utils", t.outputChannel = "output", t.accessibleView = "accessible-view", t.backgroundComposer = "cursor.backgroundcomposer", t.cursorAgent = "cursor.agent", t.personalEnvironmentJson = "cursor.personalenvironmentjson", t.bugbot = "cursor.bugbot", t.backgroundComposerPeek = "background-composer-peek", t.cursorPlan = "cursor-plan", t.cursorWorker = "cursor-worker", t.reviewChanges = "cursor.reviewchanges", t.cursorBlame = "cursor.blame", t.cursorFileBlame = "cursor.fileblame";
})(Schemas || (Schemas = {}));
var connectionTokenQueryName = "tkn", RemoteAuthoritiesImpl = class {
  constructor() {
    this._hosts = /* @__PURE__ */ Object.create(null), this._ports = /* @__PURE__ */ Object.create(null), this._connectionTokens = /* @__PURE__ */ Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
  }
  setPreferredWebSchema(t) {
    this._preferredWebSchema = t;
  }
  setDelegate(t) {
    this._delegate = t;
  }
  setServerRootPath(t, e) {
    this._serverRootPath = posix.join(e ?? "/", getServerProductSegment(t));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return posix.join(this._serverRootPath, Schemas.vscodeRemoteResource);
  }
  set(t, e, n) {
    this._hosts[t] = e, this._ports[t] = n;
  }
  setConnectionToken(t, e) {
    this._connectionTokens[t] = e;
  }
  getPreferredWebSchema() {
    return this._preferredWebSchema;
  }
  rewrite(t) {
    if (this._delegate) try {
      return this._delegate(t);
    } catch (o) {
      return onUnexpectedError(o), t;
    }
    const e = t.authority;
    let n = this._hosts[e];
    n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
    const r = this._ports[e], i = this._connectionTokens[e];
    let s = `path=${encodeURIComponent(t.path)}`;
    return typeof i == "string" && (s += `&${connectionTokenQueryName}=${encodeURIComponent(i)}`), URI.from({ scheme: isWeb ? this._preferredWebSchema : Schemas.vscodeRemoteResource, authority: `${n}:${r}`, path: this._remoteResourcesPath, query: s });
  }
}, RemoteAuthorities = new RemoteAuthoritiesImpl();
function getServerProductSegment(t) {
  return `${t.quality ?? "oss"}-${t.commit ?? "dev"}`;
}
var VSCODE_AUTHORITY = "vscode-app", _FileAccessImpl = class bt {
  asBrowserUri(e) {
    const n = this.toUri(e);
    return this.uriToBrowserUri(n);
  }
  uriToBrowserUri(e) {
    return e.scheme === Schemas.vscodeRemote ? RemoteAuthorities.rewrite(e) : e.scheme === Schemas.file && (isNative || webWorkerOrigin === `${Schemas.vscodeFileResource}://${bt.FALLBACK_AUTHORITY}`) ? e.with({ scheme: Schemas.vscodeFileResource, authority: e.authority || bt.FALLBACK_AUTHORITY, query: null, fragment: null }) : e;
  }
  asFileUri(e) {
    const n = this.toUri(e);
    return this.uriToFileUri(n);
  }
  uriToFileUri(e) {
    return e.scheme === Schemas.vscodeFileResource ? e.with({ scheme: Schemas.file, authority: e.authority !== bt.FALLBACK_AUTHORITY ? e.authority : null, query: null, fragment: null }) : e;
  }
  toUri(e) {
    if (URI.isUri(e)) return e;
    if (globalThis._VSCODE_FILE_ROOT) {
      const n = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(n)) return URI.joinPath(URI.parse(n, true), e);
      const r = join(n, e);
      return URI.file(r);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
_FileAccessImpl.FALLBACK_AUTHORITY = VSCODE_AUTHORITY;
var FileAccessImpl = _FileAccessImpl, FileAccess = new FileAccessImpl(), CacheControlheaders = Object.freeze({ "Cache-Control": "no-cache, no-store" }), DocumentPolicyheaders = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), COI;
((t) => {
  const e = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  t.CoopAndCoep = Object.freeze(e.get("3"));
  const n = "vscode-coi";
  function r(s) {
    let o;
    typeof s == "string" ? o = new URL(s).searchParams : s instanceof URL ? o = s.searchParams : URI.isUri(s) && (o = new URL(s.toString(true)).searchParams);
    const a = o?.get(n);
    if (a) return e.get(a);
  }
  t.getHeadersFromQuery = r;
  function i(s, o, a) {
    if (!globalThis.crossOriginIsolated) return;
    const u = o && a ? "3" : a ? "2" : "1";
    s instanceof URLSearchParams ? s.set(n, u) : s[n] = u;
  }
  t.addSearchParam = i;
})(COI || (COI = {}));
function originalFSPath(t) {
  return uriToFsPath(t, true);
}
var ExtUri = class {
  constructor(t) {
    this._ignorePathCasing = t;
  }
  compare(t, e, n = false) {
    return t === e ? 0 : compare(this.getComparisonKey(t, n), this.getComparisonKey(e, n));
  }
  isEqual(t, e, n = false) {
    return t === e ? true : !t || !e ? false : this.getComparisonKey(t, n) === this.getComparisonKey(e, n);
  }
  getComparisonKey(t, e = false) {
    return t.with({ path: this._ignorePathCasing(t) ? t.path.toLowerCase() : void 0, fragment: e ? null : void 0 }).toString();
  }
  ignorePathCasing(t) {
    return this._ignorePathCasing(t);
  }
  isEqualOrParent(t, e, n = false) {
    if (t.scheme === e.scheme) {
      if (t.scheme === Schemas.file) return isEqualOrParent(originalFSPath(t), originalFSPath(e), this._ignorePathCasing(t)) && t.query === e.query && (n || t.fragment === e.fragment);
      if (isEqualAuthority(t.authority, e.authority)) return isEqualOrParent(t.path, e.path, this._ignorePathCasing(t), "/") && t.query === e.query && (n || t.fragment === e.fragment);
    }
    return false;
  }
  joinPath(t, ...e) {
    return URI.joinPath(t, ...e);
  }
  basenameOrAuthority(t) {
    return basename2(t) || t.authority;
  }
  basename(t) {
    return posix.basename(t.path);
  }
  extname(t) {
    return posix.extname(t.path);
  }
  dirname(t) {
    if (t.path.length === 0) return t;
    let e;
    return t.scheme === Schemas.file ? e = URI.file(dirname(originalFSPath(t))).path : (e = posix.dirname(t.path), t.authority && e.length && e.charCodeAt(0) !== 47 && (console.error(`dirname("${t.toString})) resulted in a relative path`), e = "/")), t.with({ path: e });
  }
  normalizePath(t) {
    if (!t.path.length) return t;
    let e;
    return t.scheme === Schemas.file ? e = URI.file(normalize(originalFSPath(t))).path : e = posix.normalize(t.path), t.with({ path: e });
  }
  relativePath(t, e) {
    if (t.scheme !== e.scheme || !isEqualAuthority(t.authority, e.authority)) return;
    if (t.scheme === Schemas.file) {
      const i = relative(originalFSPath(t), originalFSPath(e));
      return isWindows ? toSlashes(i) : i;
    }
    let n = t.path || "/";
    const r = e.path || "/";
    if (this._ignorePathCasing(t)) {
      let i = 0;
      for (const s = Math.min(n.length, r.length); i < s && !(n.charCodeAt(i) !== r.charCodeAt(i) && n.charAt(i).toLowerCase() !== r.charAt(i).toLowerCase()); i++) ;
      n = r.substr(0, i) + n.substr(i);
    }
    return posix.relative(n, r);
  }
  resolvePath(t, e) {
    if (t.scheme === Schemas.file) {
      const n = URI.file(resolve(originalFSPath(t), e));
      return t.with({ authority: n.authority, path: n.path });
    }
    return e = toPosixPath(e), t.with({ path: posix.resolve(t.path, e) });
  }
  isAbsolutePath(t) {
    return !!t.path && t.path[0] === "/";
  }
  isEqualAuthority(t, e) {
    return t === e || t !== void 0 && e !== void 0 && equalsIgnoreCase(t, e);
  }
  hasTrailingPathSeparator(t, e = sep) {
    if (t.scheme === Schemas.file) {
      const n = originalFSPath(t);
      return n.length > getRoot(n).length && n[n.length - 1] === e;
    } else {
      const n = t.path;
      return n.length > 1 && n.charCodeAt(n.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath);
    }
  }
  removeTrailingPathSeparator(t, e = sep) {
    return hasTrailingPathSeparator(t, e) ? t.with({ path: t.path.substr(0, t.path.length - 1) }) : t;
  }
  addTrailingPathSeparator(t, e = sep) {
    let n = false;
    if (t.scheme === Schemas.file) {
      const r = originalFSPath(t);
      n = r !== void 0 && r.length === getRoot(r).length && r[r.length - 1] === e;
    } else {
      e = "/";
      const r = t.path;
      n = r.length === 1 && r.charCodeAt(r.length - 1) === 47;
    }
    return !n && !hasTrailingPathSeparator(t, e) ? t.with({ path: t.path + "/" }) : t;
  }
}, extUri = new ExtUri(() => false), extUriBiasedIgnorePathCase = new ExtUri((t) => t.scheme === Schemas.file ? !isLinux : true), extUriIgnorePathCase = new ExtUri((t) => true), isEqual = extUri.isEqual.bind(extUri), isEqualOrParent2 = extUri.isEqualOrParent.bind(extUri), getComparisonKey = extUri.getComparisonKey.bind(extUri), basenameOrAuthority = extUri.basenameOrAuthority.bind(extUri), basename2 = extUri.basename.bind(extUri), extname2 = extUri.extname.bind(extUri), dirname2 = extUri.dirname.bind(extUri), joinPath = extUri.joinPath.bind(extUri), normalizePath = extUri.normalizePath.bind(extUri), relativePath = extUri.relativePath.bind(extUri), resolvePath = extUri.resolvePath.bind(extUri), isAbsolutePath = extUri.isAbsolutePath.bind(extUri), isEqualAuthority = extUri.isEqualAuthority.bind(extUri), hasTrailingPathSeparator = extUri.hasTrailingPathSeparator.bind(extUri), removeTrailingPathSeparator = extUri.removeTrailingPathSeparator.bind(extUri), addTrailingPathSeparator = extUri.addTrailingPathSeparator.bind(extUri), DataUri;
((t) => {
  t.META_DATA_LABEL = "label", t.META_DATA_DESCRIPTION = "description", t.META_DATA_SIZE = "size", t.META_DATA_MIME = "mime";
  function e(n) {
    const r = /* @__PURE__ */ new Map();
    n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((o) => {
      const [a, u] = o.split(":");
      a && u && r.set(a, u);
    });
    const s = n.path.substring(0, n.path.indexOf(";"));
    return s && r.set(t.META_DATA_MIME, s), r;
  }
  t.parseMetaData = e;
})(DataUri || (DataUri = {}));
var MicrotaskDelay = /* @__PURE__ */ Symbol("MicrotaskDelay"), runWhenGlobalIdle, _runWhenIdle;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? _runWhenIdle = (t, e, n) => {
    setTimeout0(() => {
      if (r) return;
      const i = Date.now() + 15;
      e(Object.freeze({ didTimeout: true, timeRemaining() {
        return Math.max(0, i - Date.now());
      } }));
    });
    let r = false;
    return { dispose() {
      r || (r = true);
    } };
  } : _runWhenIdle = (t, e, n) => {
    const r = t.requestIdleCallback(e, typeof n == "number" ? { timeout: n } : void 0);
    let i = false;
    return { dispose() {
      i || (i = true, t.cancelIdleCallback(r));
    } };
  }, runWhenGlobalIdle = (t, e) => _runWhenIdle(globalThis, t, e);
})();
var Promises;
((t) => {
  async function e(r) {
    let i;
    const s = await Promise.all(r.map((o) => o.then((a) => a, (a) => {
      i || (i = a);
    })));
    if (typeof i < "u") throw i;
    return s;
  }
  t.settled = e;
  function n(r) {
    return new Promise(async (i, s) => {
      try {
        await r(i, s);
      } catch (o) {
        s(o);
      }
    });
  }
  t.withAsyncBody = n;
})(Promises || (Promises = {}));
var _AsyncIterableObject = class $ {
  static fromArray(e) {
    return new $((n) => {
      n.emitMany(e);
    });
  }
  static fromPromise(e) {
    return new $(async (n) => {
      n.emitMany(await e);
    });
  }
  static fromPromisesResolveOrder(e) {
    return new $(async (n) => {
      await Promise.all(e.map(async (r) => n.emitOne(await r)));
    });
  }
  static merge(e) {
    return new $(async (n) => {
      await Promise.all(e.map(async (r) => {
        for await (const i of r) n.emitOne(i);
      }));
    });
  }
  constructor(e, n) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new Emitter(), queueMicrotask(async () => {
      const r = { emitOne: (i) => this.emitOne(i), emitMany: (i) => this.emitMany(i), reject: (i) => this.reject(i) };
      try {
        await Promise.resolve(e(r)), this.resolve();
      } catch (i) {
        this.reject(i);
      } finally {
        r.emitOne = void 0, r.emitMany = void 0, r.reject = void 0;
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
  static map(e, n) {
    return new $(async (r) => {
      for await (const i of e) r.emitOne(n(i));
    });
  }
  map(e) {
    return $.map(this, e);
  }
  static filter(e, n) {
    return new $(async (r) => {
      for await (const i of e) n(i) && r.emitOne(i);
    });
  }
  filter(e) {
    return $.filter(this, e);
  }
  static coalesce(e) {
    return $.filter(e, (n) => !!n);
  }
  coalesce() {
    return $.coalesce(this);
  }
  static async toPromise(e) {
    const n = [];
    for await (const r of e) n.push(r);
    return n;
  }
  toPromise() {
    return $.toPromise(this);
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
var PrefixSumComputer = class {
  constructor(t) {
    this.values = t, this.prefixSum = new Uint32Array(t.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(t, e) {
    t = toUint32(t);
    const n = this.values, r = this.prefixSum, i = e.length;
    return i === 0 ? false : (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, t), 0), this.values.set(n.subarray(t), t + i), this.values.set(e, t), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), true);
  }
  setValue(t, e) {
    return t = toUint32(t), e = toUint32(e), this.values[t] === e ? false : (this.values[t] = e, t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), true);
  }
  removeValues(t, e) {
    t = toUint32(t), e = toUint32(e);
    const n = this.values, r = this.prefixSum;
    if (t >= n.length) return false;
    const i = n.length - t;
    return e >= i && (e = i), e === 0 ? false : (this.values = new Uint32Array(n.length - e), this.values.set(n.subarray(0, t), 0), this.values.set(n.subarray(t + e), t), this.prefixSum = new Uint32Array(this.values.length), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), true);
  }
  getTotalSum() {
    return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
  }
  getPrefixSum(t) {
    return t < 0 ? 0 : (t = toUint32(t), this._getPrefixSum(t));
  }
  _getPrefixSum(t) {
    if (t <= this.prefixSumValidIndex[0]) return this.prefixSum[t];
    let e = this.prefixSumValidIndex[0] + 1;
    e === 0 && (this.prefixSum[0] = this.values[0], e++), t >= this.values.length && (t = this.values.length - 1);
    for (let n = e; n <= t; n++) this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
    return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], t), this.prefixSum[t];
  }
  getIndexOf(t) {
    t = Math.floor(t), this.getTotalSum();
    let e = 0, n = this.values.length - 1, r = 0, i = 0, s = 0;
    for (; e <= n; ) if (r = e + (n - e) / 2 | 0, i = this.prefixSum[r], s = i - this.values[r], t < s) n = r - 1;
    else if (t >= i) e = r + 1;
    else break;
    return new PrefixSumIndexOfResult(r, t - s);
  }
}, PrefixSumIndexOfResult = class {
  constructor(t, e) {
    this.index = t, this.remainder = e, this._prefixSumIndexOfResultBrand = void 0, this.index = t, this.remainder = e;
  }
}, MEMORY_ESTIMATE_LINE_CHECK_INTERVAL = 64, MirrorTextModel = class {
  constructor(t, e, n, r) {
    this._uri = t, this._lines = e, this._eol = n, this._versionId = r, this._lineStarts = null, this._cachedTextValue = null;
  }
  dispose() {
    this._lines.length = 0;
  }
  get version() {
    return this._versionId;
  }
  getText() {
    return this._cachedTextValue === null && (this._cachedTextValue = this._lines.join(this._eol)), this._cachedTextValue;
  }
  getTextLength() {
    const t = this._lines.length - 1;
    return t < 0 ? 0 : (this._ensureLineStarts(), this._lineStarts.getPrefixSum(t - 1) + this._lines[t].length);
  }
  getMemoryEstimate(t) {
    let e = 0;
    for (let i = 0; i < this._lines.length; i++) {
      if (i % MEMORY_ESTIMATE_LINE_CHECK_INTERVAL === 0 && t?.shouldContinue?.() === false) return;
      e += this._lines[i].length;
    }
    const n = e * 2, r = this._cachedTextValue === null ? 0 : this._cachedTextValue.length * 2;
    return n + r;
  }
  onEvents(t) {
    t.eol && t.eol !== this._eol && (this._eol = t.eol, this._lineStarts = null);
    const e = t.changes;
    for (const n of e) this._acceptDeleteRange(n.range), this._acceptInsertText(new Position(n.range.startLineNumber, n.range.startColumn), n.text);
    this._versionId = t.versionId, this._cachedTextValue = null;
  }
  _ensureLineStarts() {
    if (!this._lineStarts) {
      const t = this._eol.length, e = this._lines.length, n = new Uint32Array(e);
      for (let r = 0; r < e; r++) n[r] = this._lines[r].length + t;
      this._lineStarts = new PrefixSumComputer(n);
    }
  }
  _setLineText(t, e) {
    this._lines[t] = e, this._lineStarts && this._lineStarts.setValue(t, this._lines[t].length + this._eol.length);
  }
  _acceptDeleteRange(t) {
    if (t.startLineNumber === t.endLineNumber) {
      if (t.startColumn === t.endColumn) return;
      this._setLineText(t.startLineNumber - 1, this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) + this._lines[t.startLineNumber - 1].substring(t.endColumn - 1));
      return;
    }
    this._setLineText(t.startLineNumber - 1, this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) + this._lines[t.endLineNumber - 1].substring(t.endColumn - 1)), this._lines.splice(t.startLineNumber, t.endLineNumber - t.startLineNumber), this._lineStarts && this._lineStarts.removeValues(t.startLineNumber, t.endLineNumber - t.startLineNumber);
  }
  _acceptInsertText(t, e) {
    if (e.length === 0) return;
    const n = splitLines(e);
    if (n.length === 1) {
      this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + n[0] + this._lines[t.lineNumber - 1].substring(t.column - 1));
      return;
    }
    n[n.length - 1] += this._lines[t.lineNumber - 1].substring(t.column - 1), this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + n[0]);
    const r = new Uint32Array(n.length - 1);
    for (let i = 1; i < n.length; i++) this._lines.splice(t.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
    this._lineStarts && this._lineStarts.insertValues(t.lineNumber, r);
  }
}, STOP_SYNC_MODEL_DELTA_TIME_MS = 60 * 1e3, WORKER_TEXT_MODEL_SYNC_CHANNEL = "workerTextModelSync", WorkerTextModelSyncServer = class {
  constructor() {
    this._models = /* @__PURE__ */ Object.create(null);
  }
  bindToServer(t) {
    t.setChannel(WORKER_TEXT_MODEL_SYNC_CHANNEL, this);
  }
  getModel(t) {
    return this._models[t];
  }
  getModels() {
    const t = [];
    return Object.keys(this._models).forEach((e) => t.push(this._models[e])), t;
  }
  $acceptNewModel(t) {
    this._models[t.url] = new MirrorModel(URI.parse(t.url), t.lines, t.EOL, t.versionId);
  }
  $acceptModelChanged(t, e) {
    if (!this._models[t]) return;
    this._models[t].onEvents(e);
  }
  $acceptRemovedModel(t) {
    this._models[t] && delete this._models[t];
  }
}, MirrorModel = class extends MirrorTextModel {
  get uri() {
    return this._uri;
  }
  get eol() {
    return this._eol;
  }
  getValue() {
    return this.getText();
  }
  findMatches(t) {
    const e = [];
    for (let n = 0; n < this._lines.length; n++) {
      const r = this._lines[n], i = this.offsetAt(new Position(n + 1, 1)), s = r.matchAll(t);
      for (const o of s) (o.index || o.index === 0) && (o.index = o.index + i), e.push(o);
    }
    return e;
  }
  getLinesContent() {
    return this._lines.slice(0);
  }
  getLineCount() {
    return this._lines.length;
  }
  getLineContent(t) {
    return this._lines[t - 1];
  }
  getWordAtPosition(t, e) {
    const n = getWordAtText(t.column, ensureValidWordDefinition(e), this._lines[t.lineNumber - 1], 0);
    return n ? new Range(t.lineNumber, n.startColumn, t.lineNumber, n.endColumn) : null;
  }
  getWordUntilPosition(t, e) {
    const n = this.getWordAtPosition(t, e);
    return n ? { word: this._lines[t.lineNumber - 1].substring(n.startColumn - 1, t.column - 1), startColumn: n.startColumn, endColumn: t.column } : { word: "", startColumn: t.column, endColumn: t.column };
  }
  words(t) {
    const e = this._lines, n = this._wordenize.bind(this);
    let r = 0, i = "", s = 0, o = [];
    return { *[Symbol.iterator]() {
      for (; ; ) if (s < o.length) {
        const a = i.substring(o[s].start, o[s].end);
        s += 1, yield a;
      } else if (r < e.length) i = e[r], o = n(i, t), s = 0, r += 1;
      else break;
    } };
  }
  getLineWords(t, e) {
    const n = this._lines[t - 1], r = this._wordenize(n, e), i = [];
    for (const s of r) i.push({ word: n.substring(s.start, s.end), startColumn: s.start + 1, endColumn: s.end + 1 });
    return i;
  }
  _wordenize(t, e) {
    const n = [];
    let r;
    for (e.lastIndex = 0; (r = e.exec(t)) && r[0].length !== 0; ) n.push({ start: r.index, end: r.index + r[0].length });
    return n;
  }
  getValueInRange(t) {
    if (t = this._validateRange(t), t.startLineNumber === t.endLineNumber) return this._lines[t.startLineNumber - 1].substring(t.startColumn - 1, t.endColumn - 1);
    const e = this._eol, n = t.startLineNumber - 1, r = t.endLineNumber - 1, i = [];
    i.push(this._lines[n].substring(t.startColumn - 1));
    for (let s = n + 1; s < r; s++) i.push(this._lines[s]);
    return i.push(this._lines[r].substring(0, t.endColumn - 1)), i.join(e);
  }
  offsetAt(t) {
    return t = this._validatePosition(t), this._ensureLineStarts(), this._lineStarts.getPrefixSum(t.lineNumber - 2) + (t.column - 1);
  }
  positionAt(t) {
    t = Math.floor(t), t = Math.max(0, t), this._ensureLineStarts();
    const e = this._lineStarts.getIndexOf(t), n = this._lines[e.index].length;
    return { lineNumber: 1 + e.index, column: 1 + Math.min(e.remainder, n) };
  }
  _validateRange(t) {
    const e = this._validatePosition({ lineNumber: t.startLineNumber, column: t.startColumn }), n = this._validatePosition({ lineNumber: t.endLineNumber, column: t.endColumn });
    return e.lineNumber !== t.startLineNumber || e.column !== t.startColumn || n.lineNumber !== t.endLineNumber || n.column !== t.endColumn ? { startLineNumber: e.lineNumber, startColumn: e.column, endLineNumber: n.lineNumber, endColumn: n.column } : t;
  }
  _validatePosition(t) {
    if (!Position.isIPosition(t)) throw new Error("bad position");
    let { lineNumber: e, column: n } = t, r = false;
    if (e < 1) e = 1, n = 1, r = true;
    else if (e > this._lines.length) e = this._lines.length, n = this._lines[e - 1].length + 1, r = true;
    else {
      const i = this._lines[e - 1].length + 1;
      n < 1 ? (n = 1, r = true) : n > i && (n = i, r = true);
    }
    return r ? { lineNumber: e, column: n } : t;
  }
}, _EditorWorker = class gt {
  constructor(e = null) {
    this._foreignModule = e, this._workerTextModelSyncServer = new WorkerTextModelSyncServer();
  }
  dispose() {
  }
  async $ping() {
    return "pong";
  }
  _getModel(e) {
    return this._workerTextModelSyncServer.getModel(e);
  }
  getModels() {
    return this._workerTextModelSyncServer.getModels();
  }
  $acceptNewModel(e) {
    this._workerTextModelSyncServer.$acceptNewModel(e);
  }
  $acceptModelChanged(e, n) {
    this._workerTextModelSyncServer.$acceptModelChanged(e, n);
  }
  $acceptRemovedModel(e) {
    this._workerTextModelSyncServer.$acceptRemovedModel(e);
  }
  async $computeUnicodeHighlights(e, n, r) {
    const i = this._getModel(e);
    return i ? UnicodeTextModelHighlighter.computeUnicodeHighlights(i, n, r) : { ranges: [], hasMore: false, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
  }
  async $findSectionHeaders(e, n) {
    const r = this._getModel(e);
    return r ? findSectionHeaders(r, n) : [];
  }
  async $computeDiff(e, n, r, i) {
    const s = this._getModel(e), o = this._getModel(n);
    return !s || !o ? null : gt.computeDiff(s, o, r, i);
  }
  async $computeWordDiff(e, n, r) {
    return computeWordDiff(e, n, r);
  }
  async $computeLinesDiff(e, n) {
    const r = ComputeLinesDiffOriginalAndModified.fromBinary(new Uint8Array(e));
    return linesDiffComputers.getDefault().computeDiff(r.original, r.modified, n);
  }
  async $computeLinesDiffAsStrings(e, n, r, i) {
    const s = e.split(r), o = n.split(r);
    return linesDiffComputers.getDefault().computeDiff(s, o, i);
  }
  static computeDiff(e, n, r, i) {
    const s = i === "advanced" ? linesDiffComputers.getDefault() : linesDiffComputers.getLegacy(), o = e.getLinesContent(), a = n.getLinesContent(), u = s.computeDiff(o, a, r), l = u.changes.length > 0 ? false : this._modelsAreIdentical(e, n);
    function f(c) {
      return c.map((m) => [m.original.startLineNumber, m.original.endLineNumberExclusive, m.modified.startLineNumber, m.modified.endLineNumberExclusive, m.innerChanges?.map((h) => [h.originalRange.startLineNumber, h.originalRange.startColumn, h.originalRange.endLineNumber, h.originalRange.endColumn, h.modifiedRange.startLineNumber, h.modifiedRange.startColumn, h.modifiedRange.endLineNumber, h.modifiedRange.endColumn])]);
    }
    return { identical: l, quitEarly: u.hitTimeout, changes: f(u.changes), moves: u.moves.map((c) => [c.lineRangeMapping.original.startLineNumber, c.lineRangeMapping.original.endLineNumberExclusive, c.lineRangeMapping.modified.startLineNumber, c.lineRangeMapping.modified.endLineNumberExclusive, f(c.changes)]) };
  }
  static _modelsAreIdentical(e, n) {
    const r = e.getLineCount(), i = n.getLineCount();
    if (r !== i) return false;
    for (let s = 1; s <= r; s++) {
      const o = e.getLineContent(s), a = n.getLineContent(s);
      if (o !== a) return false;
    }
    return true;
  }
  async $computeDirtyDiff(e, n, r) {
    const i = this._getModel(e), s = this._getModel(n);
    if (!i || !s) return null;
    const o = i.getLinesContent(), a = s.getLinesContent();
    return new DiffComputer(o, a, { shouldComputeCharChanges: false, shouldPostProcessCharChanges: false, shouldIgnoreTrimWhitespace: r, shouldMakePrettyDiff: true, maxComputationTime: 1e3 }).computeDiff().changes;
  }
  async $computeMoreMinimalEdits(e, n, r) {
    const i = this._getModel(e);
    if (!i) return n;
    const s = [];
    let o;
    n = n.slice(0).sort((u, l) => {
      if (u.range && l.range) return Range.compareRangesUsingStarts(u.range, l.range);
      const f = u.range ? 0 : 1, c = l.range ? 0 : 1;
      return f - c;
    });
    let a = 0;
    for (let u = 1; u < n.length; u++) Range.getEndPosition(n[a].range).equals(Range.getStartPosition(n[u].range)) ? (n[a].range = Range.fromPositions(Range.getStartPosition(n[a].range), Range.getEndPosition(n[u].range)), n[a].text += n[u].text) : (a++, n[a] = n[u]);
    n.length = a + 1;
    for (let { range: u, text: l, eol: f } of n) {
      if (typeof f == "number" && (o = f), Range.isEmpty(u) && !l) continue;
      const c = i.getValueInRange(u);
      if (l = l.replace(/\r\n|\n|\r/g, i.eol), c === l) continue;
      if (Math.max(l.length, c.length) > gt._diffLimit) {
        s.push({ range: u, text: l });
        continue;
      }
      const m = stringDiff(c, l, r), h = i.offsetAt(Range.lift(u).getStartPosition());
      for (const g of m) {
        const p = i.positionAt(h + g.originalStart), E = i.positionAt(h + g.originalStart + g.originalLength), d = { text: l.substr(g.modifiedStart, g.modifiedLength), range: { startLineNumber: p.lineNumber, startColumn: p.column, endLineNumber: E.lineNumber, endColumn: E.column } };
        i.getValueInRange(d.range) !== d.text && s.push(d);
      }
    }
    return typeof o == "number" && s.push({ eol: o, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), s;
  }
  $computeHumanReadableDiff(e, n, r) {
    const i = this._getModel(e);
    if (!i) return n;
    const s = [];
    let o;
    n = n.slice(0).sort((l, f) => {
      if (l.range && f.range) return Range.compareRangesUsingStarts(l.range, f.range);
      const c = l.range ? 0 : 1, m = f.range ? 0 : 1;
      return c - m;
    });
    for (let { range: l, text: f, eol: c } of n) {
      let m = function(b, N) {
        return new Position(b.lineNumber + N.lineNumber - 1, N.lineNumber === 1 ? b.column + N.column - 1 : N.column);
      }, h = function(b, N) {
        const _ = [];
        for (let v = N.startLineNumber; v <= N.endLineNumber; v++) {
          const S = b[v - 1];
          v === N.startLineNumber && v === N.endLineNumber ? _.push(S.substring(N.startColumn - 1, N.endColumn - 1)) : v === N.startLineNumber ? _.push(S.substring(N.startColumn - 1)) : v === N.endLineNumber ? _.push(S.substring(0, N.endColumn - 1)) : _.push(S);
        }
        return _;
      };
      var a = m, u = h;
      if (typeof c == "number" && (o = c), Range.isEmpty(l) && !f) continue;
      const g = i.getValueInRange(l);
      if (f = f.replace(/\r\n|\n|\r/g, i.eol), g === f) continue;
      if (Math.max(f.length, g.length) > gt._diffLimit) {
        s.push({ range: l, text: f });
        continue;
      }
      const p = g.split(/\r\n|\n|\r/), E = f.split(/\r\n|\n|\r/), d = linesDiffComputers.getDefault().computeDiff(p, E, r), w = Range.lift(l).getStartPosition();
      for (const b of d.changes) if (b.innerChanges) for (const N of b.innerChanges) s.push({ range: Range.fromPositions(m(w, N.originalRange.getStartPosition()), m(w, N.originalRange.getEndPosition())), text: h(E, N.modifiedRange).join(i.eol) });
      else throw new BugIndicatingError("The experimental diff algorithm always produces inner changes");
    }
    return typeof o == "number" && s.push({ eol: o, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), s;
  }
  async $computeLinks(e) {
    const n = this._getModel(e);
    return n ? computeLinks(n) : null;
  }
  async $computeDefaultDocumentColors(e) {
    const n = this._getModel(e);
    return n ? computeDefaultDocumentColors(n) : null;
  }
  async $textualSuggest(e, n, r, i) {
    const s = new StopWatch(), o = new RegExp(r, i), a = /* @__PURE__ */ new Set();
    e: for (const u of e) {
      const l = this._getModel(u);
      if (l) {
        for (const f of l.words(o)) if (!(f === n || !isNaN(Number(f))) && (a.add(f), a.size > gt._suggestionsLimit)) break e;
      }
    }
    return { words: Array.from(a), duration: s.elapsed() };
  }
  async $computeWordRanges(e, n, r, i) {
    const s = this._getModel(e);
    if (!s) return /* @__PURE__ */ Object.create(null);
    const o = new RegExp(r, i), a = /* @__PURE__ */ Object.create(null);
    for (let u = n.startLineNumber; u < n.endLineNumber; u++) {
      const l = s.getLineWords(u, o);
      for (const f of l) {
        if (!isNaN(Number(f.word))) continue;
        let c = a[f.word];
        c || (c = [], a[f.word] = c), c.push({ startLineNumber: u, startColumn: f.startColumn, endLineNumber: u, endColumn: f.endColumn });
      }
    }
    return a;
  }
  async $navigateValueSet(e, n, r, i, s) {
    const o = this._getModel(e);
    if (!o) return null;
    const a = new RegExp(i, s);
    n.startColumn === n.endColumn && (n = { startLineNumber: n.startLineNumber, startColumn: n.startColumn, endLineNumber: n.endLineNumber, endColumn: n.endColumn + 1 });
    const u = o.getValueInRange(n), l = o.getWordAtPosition({ lineNumber: n.startLineNumber, column: n.startColumn }, a);
    if (!l) return null;
    const f = o.getValueInRange(l);
    return BasicInplaceReplace.INSTANCE.navigateValueSet(n, u, l, f, r);
  }
  $fmr(e, n) {
    if (!this._foreignModule || typeof this._foreignModule[e] != "function") return Promise.reject(new Error("Missing requestHandler or method: " + e));
    try {
      return Promise.resolve(this._foreignModule[e].apply(this._foreignModule, n));
    } catch (r) {
      return Promise.reject(r);
    }
  }
};
_EditorWorker._diffLimit = 1e5, _EditorWorker._suggestionsLimit = 1e4;
var EditorWorker = _EditorWorker;
bootstrapWebWorker(() => new EditorWorker(null));
