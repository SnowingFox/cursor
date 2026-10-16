/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fc36b54c-b4d7-5e39-9f53-8a50854a319c");
  } catch (e2) {
  }
})();
var ErrorHandler = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        throw e.stack ? ErrorNoTelemetry.isErrorNoTelemetry(e) ? new ErrorNoTelemetry(e.message + `

` + e.stack) : new Error(e.message + `

` + e.stack) : e;
      }, 0);
    };
  }
  addListener(e) {
    return this.listeners.push(e), () => {
      this._removeListener(e);
    };
  }
  emit(e) {
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  _removeListener(e) {
    this.listeners.splice(this.listeners.indexOf(e), 1);
  }
  setUnexpectedErrorHandler(e) {
    this.unexpectedErrorHandler = e;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(e) {
    this.unexpectedErrorHandler(e), this.emit(e);
  }
  onUnexpectedExternalError(e) {
    this.unexpectedErrorHandler(e);
  }
}, errorHandler = new ErrorHandler();
function onUnexpectedError(e) {
  isCancellationError(e) || errorHandler.onUnexpectedError(e);
}
function transformErrorForSerialization(e) {
  if (e instanceof Error) {
    const { name: t, message: n, cause: i } = e, r = e.stacktrace || e.stack;
    return { $isError: true, name: t, message: n, stack: r, noTelemetry: ErrorNoTelemetry.isErrorNoTelemetry(e), cause: i ? transformErrorForSerialization(i) : void 0, code: e.code };
  }
  return e;
}
var canceledName = "Canceled";
function isCancellationError(e) {
  return e instanceof CancellationError ? true : e instanceof Error && e.name === canceledName && e.message === canceledName;
}
var CancellationError = class extends Error {
  constructor() {
    if (super(canceledName), this.name = this.message, _cancellationErrorLoggingEnabled && typeof console < "u" && shouldLogCancellationDebugTrace()) {
      const e = new Error().stack ?? "";
      ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING.some((t) => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
    }
  }
};
function illegalState(e) {
  return e ? new Error(`Illegal state: ${e}`) : new Error("Illegal state");
}
var ErrorNoTelemetry = class le extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof le) return t;
    const n = new le();
    return n.message = t.message, n.stack = t.stack, n;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}, ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], CANCELLATION_DEBUG_TRACE_THROTTLE_MS = 5e3, _nextCancellationDebugTraceTime = 0;
function shouldLogCancellationDebugTrace() {
  const e = Date.now();
  return e < _nextCancellationDebugTraceTime ? false : (_nextCancellationDebugTraceTime = e + CANCELLATION_DEBUG_TRACE_THROTTLE_MS, true);
}
var _cancellationErrorLoggingEnabled = false, _a, _b;
function groupBy(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const i of e) {
    const r = t(i);
    let s = n[r];
    s || (s = n[r] = []), s.push(i);
  }
  return n;
}
var SetWithKey = class {
  constructor(e, t) {
    this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[_a] = "SetWithKey";
    for (const n of e) this.add(n);
  }
  get size() {
    return this._map.size;
  }
  add(e) {
    const t = this.toKey(e);
    return this._map.set(t, e), this;
  }
  delete(e) {
    return this._map.delete(this.toKey(e));
  }
  has(e) {
    return this._map.has(this.toKey(e));
  }
  *entries() {
    for (const e of this._map.values()) yield [e, e];
  }
  keys() {
    return this.values();
  }
  *values() {
    for (const e of this._map.values()) yield e;
  }
  clear() {
    this._map.clear();
  }
  forEach(e, t) {
    this._map.forEach((n) => e.call(t, n, n, this));
  }
  [(_b = Symbol.iterator, _a = Symbol.toStringTag, _b)]() {
    return this.values();
  }
};
function createSingleCallFunction(e, t) {
  const n = this;
  let i = false, r;
  return function() {
    if (i) return r;
    if (i = true, t) try {
      r = e.apply(n, arguments);
    } finally {
      t();
    }
    else r = e.apply(n, arguments);
    return r;
  };
}
function findLast(e, t, n = e.length - 1) {
  const i = findLastIdx(e, t, n);
  if (i !== -1) return e[i];
}
function findLastIdx(e, t, n = e.length - 1) {
  for (let i = n; i >= 0; i--) {
    const r = e[i];
    if (t(r)) return i;
  }
  return -1;
}
function findLastIdxMonotonous(e, t, n = 0, i = e.length) {
  let r = n, s = i;
  for (; r < s; ) {
    const o = Math.floor((r + s) / 2);
    t(e[o]) ? r = o + 1 : s = o;
  }
  return r - 1;
}
var _MonotonousArray = class pe {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (pe.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const i of this._array) if (this._prevFindLastPredicate(i) && !t(i)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = t;
    }
    const n = findLastIdxMonotonous(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
  }
};
_MonotonousArray.assertInvariants = false;
var CompareResult;
((e) => {
  function t(s) {
    return s < 0;
  }
  e.isLessThan = t;
  function n(s) {
    return s <= 0;
  }
  e.isLessThanOrEqual = n;
  function i(s) {
    return s > 0;
  }
  e.isGreaterThan = i;
  function r(s) {
    return s === 0;
  }
  e.isNeitherLessOrGreaterThan = r, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(CompareResult || (CompareResult = {}));
function compareBy(e, t) {
  return (n, i) => t(e(n), e(i));
}
var numberComparator = (e, t) => e - t, _CallbackIterable = class ae {
  constructor(t) {
    this.iterate = t;
  }
  forEach(t) {
    this.iterate((n) => (t(n), true));
  }
  toArray() {
    const t = [];
    return this.iterate((n) => (t.push(n), true)), t;
  }
  filter(t) {
    return new ae((n) => this.iterate((i) => t(i) ? n(i) : true));
  }
  map(t) {
    return new ae((n) => this.iterate((i) => n(t(i))));
  }
  some(t) {
    let n = false;
    return this.iterate((i) => (n = t(i), !n)), n;
  }
  findFirst(t) {
    let n;
    return this.iterate((i) => t(i) ? (n = i, false) : true), n;
  }
  findLast(t) {
    let n;
    return this.iterate((i) => (t(i) && (n = i), true)), n;
  }
  findLastMaxBy(t) {
    let n, i = true;
    return this.iterate((r) => ((i || CompareResult.isGreaterThan(t(r, n))) && (i = false, n = r), true)), n;
  }
};
_CallbackIterable.empty = new _CallbackIterable((e) => {
});
var _a2, _b2, _c, ResourceMapEntry = class {
  constructor(e, t) {
    this.uri = e, this.value = t;
  }
};
function isEntries(e) {
  return Array.isArray(e);
}
var _ResourceMap = class Y {
  constructor(t, n) {
    if (this[_a2] = "ResourceMap", t instanceof Y) this.map = new Map(t.map), this.toKey = n ?? Y.defaultToKey;
    else if (isEntries(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? Y.defaultToKey;
      for (const [i, r] of t) this.set(i, r);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? Y.defaultToKey;
  }
  set(t, n) {
    return this.map.set(this.toKey(t), new ResourceMapEntry(t, n)), this;
  }
  get(t) {
    return this.map.get(this.toKey(t))?.value;
  }
  has(t) {
    return this.map.has(this.toKey(t));
  }
  get size() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  delete(t) {
    return this.map.delete(this.toKey(t));
  }
  forEach(t, n) {
    typeof n < "u" && (t = t.bind(n));
    for (const [i, r] of this.map) t(r.value, r.uri, this);
  }
  *values() {
    for (const t of this.map.values()) yield t.value;
  }
  *keys() {
    for (const t of this.map.values()) yield t.uri;
  }
  *entries() {
    for (const t of this.map.values()) yield [t.uri, t.value];
  }
  *[(_a2 = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map) yield [t.uri, t.value];
  }
};
_ResourceMap.defaultToKey = (e) => e.toString();
var ResourceMap = _ResourceMap, ResourceSet = class {
  constructor(e, t) {
    this[_b2] = "ResourceSet", !e || typeof e == "function" ? this._map = new ResourceMap(e) : (this._map = new ResourceMap(t), e.forEach(this.add, this));
  }
  get size() {
    return this._map.size;
  }
  add(e) {
    return this._map.set(e, e), this;
  }
  clear() {
    this._map.clear();
  }
  delete(e) {
    return this._map.delete(e);
  }
  forEach(e, t) {
    this._map.forEach((n, i) => e.call(t, i, i, this));
  }
  has(e) {
    return this._map.has(e);
  }
  *entries() {
    for (const e of this._map.entries()) yield e;
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
  has(e) {
    return this._map.has(e);
  }
  get(e, t = 0) {
    const n = this._map.get(e);
    if (n) return t !== 0 && this.touch(n, t), n.value;
  }
  set(e, t, n = 0) {
    let i = this._map.get(e);
    if (i) i.value = t, n !== 0 && this.touch(i, n);
    else {
      switch (i = { key: e, value: t, next: void 0, previous: void 0 }, n) {
        case 0:
          this.addItemLast(i);
          break;
        case 1:
          this.addItemFirst(i);
          break;
        case 2:
          this.addItemLast(i);
          break;
        default:
          this.addItemLast(i);
          break;
      }
      this._map.set(e, i), this._size++;
    }
    return this;
  }
  delete(e) {
    return !!this.remove(e);
  }
  remove(e) {
    const t = this._map.get(e);
    if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value;
  }
  shift() {
    if (!this._head && !this._tail) return;
    if (!this._head || !this._tail) throw new Error("Invalid list");
    const e = this._head;
    return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
  }
  forEach(e, t) {
    const n = this._state;
    let i = this._head;
    for (; i; ) {
      if (t ? e.bind(t)(i.value, i.key, this) : e(i.value, i.key, this), this._state !== n) throw new Error("LinkedMap got modified during iteration.");
      i = i.next;
    }
  }
  keys() {
    return this.iterateLinked(this._state, this._head, (e) => e.key);
  }
  values() {
    return this.iterateLinked(this._state, this._head, (e) => e.value);
  }
  entries() {
    return this.iterateLinked(this._state, this._head, (e) => [e.key, e.value]);
  }
  *iterateLinked(e, t, n) {
    for (; ; ) {
      if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
      if (!t) return;
      const i = n(t);
      t = t.next, yield i;
    }
  }
  [(_c = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._head, n = this.size;
    for (; t && n > e; ) this._map.delete(t.key), t = t.next, n--;
    this._head = t, this._size = n, t && (t.previous = void 0), this._state++;
  }
  trimNew(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._tail, n = this.size;
    for (; t && n > e; ) this._map.delete(t.key), t = t.previous, n--;
    this._tail = t, this._size = n, t && (t.next = void 0), this._state++;
  }
  addItemFirst(e) {
    if (!this._head && !this._tail) this._tail = e;
    else if (this._head) e.next = this._head, this._head.previous = e;
    else throw new Error("Invalid list");
    this._head = e, this._state++;
  }
  addItemLast(e) {
    if (!this._head && !this._tail) this._head = e;
    else if (this._tail) e.previous = this._tail, this._tail.next = e;
    else throw new Error("Invalid list");
    this._tail = e, this._state++;
  }
  removeItem(e) {
    if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
    else if (e === this._head) {
      if (!e.next) throw new Error("Invalid list");
      e.next.previous = void 0, this._head = e.next;
    } else if (e === this._tail) {
      if (!e.previous) throw new Error("Invalid list");
      e.previous.next = void 0, this._tail = e.previous;
    } else {
      const t = e.next, n = e.previous;
      if (!t || !n) throw new Error("Invalid list");
      t.previous = n, n.next = t;
    }
    e.next = void 0, e.previous = void 0, this._state++;
  }
  touch(e, t) {
    if (!this._head || !this._tail) throw new Error("Invalid list");
    if (!(t !== 1 && t !== 2)) {
      if (t === 1) {
        if (e === this._head) return;
        const n = e.next, i = e.previous;
        e === this._tail ? (i.next = void 0, this._tail = i) : (n.previous = i, i.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
      } else if (t === 2) {
        if (e === this._tail) return;
        const n = e.next, i = e.previous;
        e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = i, i.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
      }
    }
  }
  toJSON() {
    const e = [];
    return this.forEach((t, n) => {
      e.push([n, t]);
    }), e;
  }
  fromJSON(e) {
    this.clear();
    for (const [t, n] of e) this.set(t, n);
  }
}, Cache = class extends LinkedMap {
  constructor(e, t = 1) {
    super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1);
  }
  get limit() {
    return this._limit;
  }
  set limit(e) {
    this._limit = e, this.checkTrim();
  }
  get ratio() {
    return this._ratio;
  }
  set ratio(e) {
    this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim();
  }
  get(e, t = 2) {
    return super.get(e, t);
  }
  peek(e) {
    return super.get(e, 0);
  }
  set(e, t) {
    return super.set(e, t, 2), this;
  }
  checkTrim() {
    this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
  }
}, LRUCache = class extends Cache {
  constructor(e, t = 1) {
    super(e, t);
  }
  trim(e) {
    this.trimOld(e);
  }
  set(e, t) {
    return super.set(e, t), this.checkTrim(), this;
  }
}, SetMap = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    let n = this.map.get(e);
    n || (n = /* @__PURE__ */ new Set(), this.map.set(e, n)), n.add(t);
  }
  delete(e, t) {
    const n = this.map.get(e);
    n && (n.delete(t), n.size === 0 && this.map.delete(e));
  }
  forEach(e, t) {
    const n = this.map.get(e);
    n && n.forEach(t);
  }
  get(e) {
    const t = this.map.get(e);
    return t || /* @__PURE__ */ new Set();
  }
};
function isIterable(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
var Iterable;
((e) => {
  function t(b) {
    return b && typeof b == "object" && typeof b[Symbol.iterator] == "function";
  }
  e.is = t;
  const n = Object.freeze([]);
  function i() {
    return n;
  }
  e.empty = i;
  function* r(b) {
    yield b;
  }
  e.single = r;
  function s(b) {
    return t(b) ? b : r(b);
  }
  e.wrap = s;
  function o(b) {
    return b || n;
  }
  e.from = o;
  function* l(b) {
    for (let x = b.length - 1; x >= 0; x--) yield b[x];
  }
  e.reverse = l;
  function a(b) {
    return !b || b[Symbol.iterator]().next().done === true;
  }
  e.isEmpty = a;
  function u(b) {
    return b[Symbol.iterator]().next().value;
  }
  e.first = u;
  function f(b, x) {
    let S = 0;
    for (const y of b) if (x(y, S++)) return true;
    return false;
  }
  e.some = f;
  function c(b, x) {
    for (const S of b) if (x(S)) return S;
  }
  e.find = c;
  function* h(b, x) {
    for (const S of b) x(S) && (yield S);
  }
  e.filter = h;
  function* p(b, x) {
    let S = 0;
    for (const y of b) yield x(y, S++);
  }
  e.map = p;
  function* m(b, x) {
    let S = 0;
    for (const y of b) yield* x(y, S++);
  }
  e.flatMap = m;
  function* g(...b) {
    for (const x of b) isIterable(x) ? yield* x : yield x;
  }
  e.concat = g;
  function _(b, x, S) {
    let y = S;
    for (const U of b) y = x(y, U);
    return y;
  }
  e.reduce = _;
  function E(b) {
    let x = 0;
    for (const S of b) x++;
    return x;
  }
  e.length = E;
  function* d(b, x, S = b.length) {
    for (x < -b.length && (x = 0), x < 0 && (x += b.length), S < 0 ? S += b.length : S > b.length && (S = b.length); x < S; x++) yield b[x];
  }
  e.slice = d;
  function L(b, x = Number.POSITIVE_INFINITY) {
    const S = [];
    if (x === 0) return [S, b];
    const y = b[Symbol.iterator]();
    for (let U = 0; U < x; U++) {
      const C = y.next();
      if (C.done) return [S, e.empty()];
      S.push(C.value);
    }
    return [S, { [Symbol.iterator]() {
      return y;
    } }];
  }
  e.consume = L;
  async function O(b) {
    const x = [];
    for await (const S of b) x.push(S);
    return Promise.resolve(x);
  }
  e.asyncToArray = O;
})(Iterable || (Iterable = {}));
var shouldReportLeaks = void 0, reportedLifecycleMisuses = /* @__PURE__ */ new Set(), MAX_REPORTED_LIFECYCLE_MISUSES = 50;
function reportLifecycleMisuse(e, t) {
  if (disposableTracker?.onLifecycleMisuse?.(e, t), !shouldReportLeaks) return;
  const n = `${t}\0${e.stack ?? ""}`;
  reportedLifecycleMisuses.has(n) || reportedLifecycleMisuses.size >= MAX_REPORTED_LIFECYCLE_MISUSES || (reportedLifecycleMisuses.add(n), shouldReportLeaks(e, t));
}
function reportPostDisposeWrite(e) {
  reportLifecycleMisuse(e, "disposable_post_dispose_set");
}
var TRACK_DISPOSABLES = false, disposableTracker = null, _DisposableTracker = class be {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let n = this.livingDisposables.get(t);
    return n || (n = { parent: null, source: null, isSingleton: false, value: t, idx: be.idx++ }, this.livingDisposables.set(t, n)), n;
  }
  trackDisposable(t) {
    const n = this.getDisposableData(t);
    n.source || (n.source = new Error().stack);
  }
  setParent(t, n) {
    const i = this.getDisposableData(t);
    i.parent = n;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = true;
  }
  getRootParent(t, n) {
    const i = n.get(t);
    if (i) return i;
    const r = t.parent ? this.getRootParent(this.getDisposableData(t.parent), n) : t;
    return n.set(t, r), r;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, i]) => i.source !== null && !this.getRootParent(i, t).isSingleton).flatMap(([i]) => i);
  }
  computeLeakingDisposables(t = 10, n) {
    let i;
    if (n) i = n;
    else {
      const a = /* @__PURE__ */ new Map(), u = [...this.livingDisposables.values()].filter((c) => c.source !== null && !this.getRootParent(c, a).isSingleton);
      if (u.length === 0) return;
      const f = new Set(u.map((c) => c.value));
      if (i = u.filter((c) => !(c.parent && f.has(c.parent))), i.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!i) return;
    function r(a) {
      function u(c, h) {
        for (; c.length > 0 && h.some((p) => typeof p == "string" ? p === c[0] : c[0].match(p)); ) c.shift();
      }
      const f = a.source.split(`
`).map((c) => c.trim().replace("at ", "")).filter((c) => c !== "");
      return u(f, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), f.reverse();
    }
    const s = new SetMap();
    for (const a of i) {
      const u = r(a);
      for (let f = 0; f <= u.length; f++) s.add(u.slice(0, f).join(`
`), a);
    }
    i.sort(compareBy((a) => a.idx, numberComparator));
    let o = "", l = 0;
    for (const a of i.slice(0, t)) {
      l++;
      const u = r(a), f = [];
      for (let c = 0; c < u.length; c++) {
        let h = u[c];
        h = `(shared with ${s.get(u.slice(0, c + 1).join(`
`)).size}/${i.length} leaks) at ${h}`;
        const m = s.get(u.slice(0, c).join(`
`)), g = groupBy([...m].map((_) => r(_)[c]), (_) => _);
        delete g[u[c]];
        for (const [_, E] of Object.entries(g)) f.unshift(`    - stacktraces of ${E.length} other leaks continue with ${_}`);
        f.unshift(h);
      }
      o += `


==================== Leaking disposable ${l}/${i.length}: ${a.value.constructor.name} ====================
${f.join(`
`)}
============================================================

`;
    }
    return i.length > t && (o += `


... and ${i.length - t} more leaking disposables

`), { leaks: i, details: o };
  }
};
_DisposableTracker.idx = 0;
function setDisposableTracker(e) {
  disposableTracker = e;
}
if (TRACK_DISPOSABLES) {
  const e = "__is_disposable_tracked__";
  setDisposableTracker(new class {
    trackDisposable(t) {
      const n = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        t[e] || console.log(n);
      }, 3e3);
    }
    setParent(t, n) {
      if (t && t !== Disposable.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsDisposed(t) {
      if (t && t !== Disposable.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsSingleton(t) {
    }
  }());
}
function trackDisposable(e) {
  return disposableTracker?.trackDisposable(e), e;
}
function markAsDisposed(e) {
  disposableTracker?.markAsDisposed(e);
}
function setParentOfDisposable(e, t) {
  disposableTracker?.setParent(e, t);
}
function setParentOfDisposables(e, t) {
  if (disposableTracker) for (const n of e) disposableTracker.setParent(n, t);
}
function dispose(e) {
  if (Iterable.is(e)) {
    let t;
    for (const n of e) if (n) try {
      n.dispose();
    } catch (i) {
      (t ??= []).push(i);
    }
    if (t !== void 0) throw t.length === 1 ? t[0] : new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function combinedDisposable(...e) {
  const t = toDisposable(() => dispose(e));
  return setParentOfDisposables(e, t), t;
}
function toDisposable(e) {
  const t = trackDisposable({ dispose: createSingleCallFunction(() => {
    markAsDisposed(t), e();
  }) });
  return t;
}
var _DisposableStore = class ue {
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
  has(t) {
    return this._toDispose.has(t);
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
  add(t) {
    if (!t) return t;
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    if (setParentOfDisposable(t, this), this._isDisposed) {
      const n = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      ue.DISABLE_DISPOSED_WARNING || console.warn(n.stack), reportPostDisposeWrite(n);
    } else this._toDispose.add(t);
    return t;
  }
  delete(t) {
    if (t) {
      if (t === this) throw new Error("Cannot dispose a disposable on itself!");
      this._toDispose.delete(t), t.dispose();
    }
  }
  deleteAndLeak(t) {
    t && this._toDispose.has(t) && (this._toDispose.delete(t), setParentOfDisposable(t, null));
  }
  transferOut(t) {
    if (this._isDisposed) {
      const n = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      ue.DISABLE_DISPOSED_WARNING || console.warn(n.stack), reportLifecycleMisuse(n, "disposable_use_after_dispose");
    }
    return this.deleteAndLeak(t), t;
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
  _register(e) {
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(e);
  }
};
Disposable.None = Object.freeze({ dispose() {
} });
var _Node = class ce {
  constructor(t) {
    this.element = t, this.next = ce.Undefined, this.prev = ce.Undefined;
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
    let e = this._first;
    for (; e !== Node.Undefined; ) {
      const t = e.next;
      e.prev = Node.Undefined, e.next = Node.Undefined, e = t;
    }
    this._first = Node.Undefined, this._last = Node.Undefined, this._size = 0;
  }
  unshift(e) {
    return this._insert(e, false);
  }
  push(e) {
    return this._insert(e, true);
  }
  _insert(e, t) {
    const n = new Node(e);
    if (this._first === Node.Undefined) this._first = n, this._last = n;
    else if (t) {
      const r = this._last;
      this._last = n, n.prev = r, r.next = n;
    } else {
      const r = this._first;
      this._first = n, n.next = r, r.prev = n;
    }
    this._size += 1;
    let i = false;
    return () => {
      i || (i = true, this._remove(n));
    };
  }
  shift() {
    if (this._first !== Node.Undefined) {
      const e = this._first.element;
      return this._remove(this._first), e;
    }
  }
  pop() {
    if (this._last !== Node.Undefined) {
      const e = this._last.element;
      return this._remove(this._last), e;
    }
  }
  remove(e) {
    this._remove(e);
  }
  _remove(e) {
    if (e.prev !== Node.Undefined && e.next !== Node.Undefined) {
      const t = e.prev;
      t.next = e.next, e.next.prev = t;
    } else e.prev === Node.Undefined && e.next === Node.Undefined ? (this._first = Node.Undefined, this._last = Node.Undefined) : e.next === Node.Undefined ? (this._last = this._last.prev, this._last.next = Node.Undefined) : e.prev === Node.Undefined && (this._first = this._first.next, this._first.prev = Node.Undefined);
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let e = this._first;
    for (; e !== Node.Undefined; ) yield e.element, e = e.next;
  }
}, hasPerformanceNow = globalThis.performance && typeof globalThis.performance.now == "function", StopWatch = class ve {
  static create(t) {
    return new ve(t);
  }
  constructor(t) {
    this._now = hasPerformanceNow && t === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
((e) => {
  e.None = () => Disposable.None;
  function t(w) {
    if (_enableSnapshotPotentialLeakWarning) {
      const { onDidAddListener: v } = w, I = Stacktrace.create();
      let A = 0;
      w.onDidAddListener = () => {
        ++A === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), I.print()), v?.();
      };
    }
  }
  function n(w, v) {
    return p(w, () => {
    }, 0, void 0, true, void 0, v);
  }
  e.defer = n;
  function i(w) {
    return (v, I = null, A) => {
      let N = false, R;
      return R = w((D) => {
        if (!N) return R ? R.dispose() : N = true, v.call(I, D);
      }, null, A), N && R.dispose(), R;
    };
  }
  e.once = i;
  function r(w, v) {
    return e.once(e.filter(w, v));
  }
  e.onceIf = r;
  function s(w, v, I) {
    return c((A, N = null, R) => w((D) => A.call(N, v(D)), null, R), I);
  }
  e.map = s;
  function o(w, v, I) {
    return c((A, N = null, R) => w((D) => {
      v(D), A.call(N, D);
    }, null, R), I);
  }
  e.forEach = o;
  function l(w, v, I) {
    return c((A, N = null, R) => w((D) => v(D) && A.call(N, D), null, R), I);
  }
  e.filter = l;
  function a(w) {
    return w;
  }
  e.signal = a;
  function u(...w) {
    return (v, I = null, A) => {
      const N = combinedDisposable(...w.map((R) => R((D) => v.call(I, D))));
      return h(N, A);
    };
  }
  e.any = u;
  function f(w, v, I, A) {
    let N = I;
    return s(w, (R) => (N = v(N, R), N), A);
  }
  e.reduce = f;
  function c(w, v) {
    let I;
    const A = { onWillAddFirstListener() {
      I = w(N.fire, N);
    }, onDidRemoveLastListener() {
      I?.dispose();
    } };
    v || t(A);
    const N = new Emitter(A);
    return v?.add(N), N.event;
  }
  function h(w, v) {
    return v instanceof Array ? v.push(w) : v && v.add(w), w;
  }
  function p(w, v, I = 100, A = false, N = false, R, D) {
    let B, P, $, ee = 0, j;
    const me = { leakWarningThreshold: R, onWillAddFirstListener() {
      B = w((Me) => {
        ee++, P = v(P, Me), A && !$ && (te.fire(P), P = void 0), j ??= () => {
          const Ce = P;
          P = void 0, $ = void 0, (!A || ee > 1) && te.fire(Ce), ee = 0;
        }, typeof I == "number" ? (clearTimeout($), $ = setTimeout(j, I)) : $ === void 0 && ($ = 0, queueMicrotask(j));
      });
    }, onWillRemoveListener() {
      N && ee > 0 && j?.();
    }, onDidRemoveLastListener() {
      j = void 0, B.dispose();
    } };
    D || t(me);
    const te = new Emitter(me);
    return D?.add(te), te.event;
  }
  e.debounce = p;
  function m(w, v = 0, I) {
    return e.debounce(w, (A, N) => A ? (A.push(N), A) : [N], v, void 0, true, void 0, I);
  }
  e.accumulate = m;
  function g(w, v = (A, N) => A === N, I) {
    let A = true, N;
    return l(w, (R) => {
      const D = A || !v(R, N);
      return A = false, N = R, D;
    }, I);
  }
  e.latch = g;
  function _(w, v, I) {
    return [e.filter(w, v, I), e.filter(w, (A) => !v(A), I)];
  }
  e.split = _;
  function E(w, v = false, I = [], A) {
    let N = I.slice(), R = w((P) => {
      N ? N.push(P) : B.fire(P);
    });
    A && A.add(R);
    const D = () => {
      N?.forEach((P) => B.fire(P)), N = null;
    }, B = new Emitter({ onWillAddFirstListener() {
      R || (R = w((P) => B.fire(P)), A && A.add(R));
    }, onDidAddFirstListener() {
      N && (v ? setTimeout(D) : D());
    }, onDidRemoveLastListener() {
      R && R.dispose(), R = null;
    } });
    return A && A.add(B), B.event;
  }
  e.buffer = E;
  function d(w, v) {
    return (A, N, R) => {
      const D = v(new O());
      return w(function(B) {
        const P = D.evaluate(B);
        P !== L && A.call(N, P);
      }, void 0, R);
    };
  }
  e.chain = d;
  const L = /* @__PURE__ */ Symbol("HaltChainable");
  class O {
    constructor() {
      this.steps = [];
    }
    map(v) {
      return this.steps.push(v), this;
    }
    forEach(v) {
      return this.steps.push((I) => (v(I), I)), this;
    }
    filter(v) {
      return this.steps.push((I) => v(I) ? I : L), this;
    }
    reduce(v, I) {
      let A = I;
      return this.steps.push((N) => (A = v(A, N), A)), this;
    }
    latch(v = (I, A) => I === A) {
      let I = true, A;
      return this.steps.push((N) => {
        const R = I || !v(N, A);
        return I = false, A = N, R ? N : L;
      }), this;
    }
    evaluate(v) {
      for (const I of this.steps) if (v = I(v), v === L) break;
      return v;
    }
  }
  function b(w, v, I = (A) => A) {
    const A = (...B) => D.fire(I(...B)), N = () => w.on(v, A), R = () => w.removeListener(v, A), D = new Emitter({ onWillAddFirstListener: N, onDidRemoveLastListener: R });
    return D.event;
  }
  e.fromNodeEventEmitter = b;
  function x(w) {
    let v;
    const I = () => {
      v = w.subscribe((R) => N.fire(R));
    }, A = () => {
      v?.unsubscribe(), v = void 0;
    }, N = new Emitter({ onWillAddFirstListener: I, onDidRemoveLastListener: A });
    return N.event;
  }
  e.fromRxJS = x;
  function S(w, v, I = (A) => A) {
    const A = (...B) => D.fire(I(...B)), N = () => w.addEventListener(v, A), R = () => w.removeEventListener(v, A), D = new Emitter({ onWillAddFirstListener: N, onDidRemoveLastListener: R });
    return D.event;
  }
  e.fromDOMEventEmitter = S;
  function y(w, v) {
    return new Promise((I) => i(w)(I, null, v));
  }
  e.toPromise = y;
  function U(w) {
    const v = new Emitter();
    return w.then((I) => {
      v.fire(I);
    }, () => {
      v.fire(void 0);
    }).finally(() => {
      v.dispose();
    }), v.event;
  }
  e.fromPromise = U;
  function C(w, v) {
    return w((I) => v.fire(I));
  }
  e.forward = C;
  function k(w, v, I) {
    return v(I), w((A) => v(A));
  }
  e.runAndSubscribe = k;
  class T {
    constructor(v, I) {
      this._observable = v, this._counter = 0, this._hasChanged = false;
      const A = { onWillAddFirstListener: () => {
        v.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        v.removeObserver(this);
      } };
      I || t(A), this.emitter = new Emitter(A), I && I.add(this.emitter);
    }
    beginUpdate(v) {
      this._counter++;
    }
    handlePossibleChange(v) {
    }
    handleChange(v, I) {
      this._hasChanged = true;
    }
    endUpdate(v) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function q(w, v) {
    return new T(w, v).emitter.event;
  }
  e.fromObservable = q;
  function De(w) {
    return (v, I, A) => {
      let N = 0, R = false;
      const D = { beginUpdate() {
        N++;
      }, endUpdate() {
        N--, N === 0 && (w.reportChanges(), R && (R = false, v.call(I)));
      }, handlePossibleChange() {
      }, handleChange() {
        R = true;
      } };
      w.addObserver(D), w.reportChanges();
      const B = { dispose() {
        w.removeObserver(D);
      } };
      return A instanceof DisposableStore ? A.add(B) : Array.isArray(A) && A.push(B), B;
    };
  }
  e.fromObservableLight = De;
})(Event || (Event = {}));
var _EventProfiling = class fe {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${fe._idPool++}`, fe.all.add(this);
  }
  start(t) {
    this._stopWatch = new StopWatch(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
_EventProfiling.all = /* @__PURE__ */ new Set(), _EventProfiling._idPool = 0;
var EventProfiling = _EventProfiling, _globalLeakWarningThreshold = -1, leakageMonitorId = 1;
function nextLeakageMonitorName() {
  return (leakageMonitorId++).toString(16).padStart(3, "0");
}
var LeakageMonitor = class {
  constructor(e, t, n = nextLeakageMonitorName()) {
    this._errorHandler = e, this.threshold = t, this.name = n, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    const n = this.threshold;
    if (n <= 0 || t < n) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const i = e.value, r = this._stacks.get(i) || 0;
    if (this._stacks.set(i, r + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = n * 0.5;
      const [s, o] = this.getMostFrequentStack(), l = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${o}):`;
      console.warn(l), console.warn(s);
      const a = o / t > 0.3 ? "dominated" : "popular", u = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, f = new ListenerLeakError(a, l, s, t, u);
      this._errorHandler(f), reportLifecycleMisuse(f, "emitter_listener_leak");
    }
    return () => {
      const s = this._stacks.get(i) || 0;
      s <= 1 ? this._stacks.delete(i) : this._stacks.set(i, s - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (const [n, i] of this._stacks) (!e || t < i) && (e = [n, i], t = i);
    return e;
  }
}, Stacktrace = class Ee {
  constructor(t) {
    this.value = t;
  }
  static create() {
    const t = new Error();
    return new Ee(t.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, ListenerLeakError = class extends Error {
  constructor(e, t, n, i, r) {
    super(r ? `[${r}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = i, this.details = t, this.stack = n;
  }
}, ListenerRefusalError = class extends ListenerLeakError {
  constructor(e, t, n, i, r) {
    super(e, t, n, i, r), this.name = "ListenerRefusalError";
  }
}, UniqueContainer = class {
  constructor(e) {
    this.value = e;
  }
}, compactionThreshold = 2, forEachListener = (e, t) => {
  if (e instanceof UniqueContainer) t(e);
  else for (let n = 0; n < e.length; n++) {
    const i = e[n];
    i && t(i);
  }
}, Emitter = class {
  constructor(e) {
    this._size = 0, this._options = e, (_globalLeakWarningThreshold > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? _globalLeakWarningThreshold, this._leakWarningName = this._options?.leakWarningName ?? nextLeakageMonitorName(), this._leakWarningErrorHandler = this._options?.onListenerError ?? onUnexpectedError), this._perfMon = this._options?._profName ? new EventProfiling(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  _getLeakageMonitor() {
    if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new LeakageMonitor(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (_enableDisposeWithListenerWarning) {
          const e = this._listeners;
          queueMicrotask(() => {
            forEachListener(e, (t) => t.stack?.print());
          });
        }
        forEachListener(this._listeners, (e) => {
          e.value = void 0;
        }), this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (e, t, n) => {
      if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
        const l = this._getLeakageMonitor();
        if (l) {
          const a = `[${l.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${l.threshold})`;
          console.warn(a);
          const u = l.getMostFrequentStack() ?? ["UNKNOWN stack", -1], f = u[1] / this._size > 0.3 ? "dominated" : "popular", c = new ListenerRefusalError(f, `${a}. HINT: Stack shows most frequent listener (${u[1]}-times)`, u[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || onUnexpectedError)(c), reportLifecycleMisuse(c, "emitter_listener_refusal"), Disposable.None;
        }
      }
      if (this._disposed) {
        const l = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return reportLifecycleMisuse(l, "emitter_use_after_dispose"), Disposable.None;
      }
      t && (e = e.bind(t));
      const i = new UniqueContainer(e);
      let r, s;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const l = this._getLeakageMonitor();
        l && (i.stack = Stacktrace.create(), r = l.check(i.stack, this._size + 1));
      }
      _enableDisposeWithListenerWarning && (i.stack = s ?? Stacktrace.create()), this._listeners ? this._listeners instanceof UniqueContainer ? (this._deliveryQueue ??= new EventDeliveryQueuePrivate(), this._listeners = [this._listeners, i]) : this._listeners.push(i) : (this._options?.onWillAddFirstListener?.(this), this._listeners = i, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const o = toDisposable(() => {
        r?.(), this._removeListener(i);
      });
      return n instanceof DisposableStore ? n.add(o) : Array.isArray(n) && n.push(o), o;
    }, this._event;
  }
  _removeListener(e) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    const t = this._listeners, n = t.indexOf(e);
    if (n === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, t[n] = void 0;
    const i = this._deliveryQueue.current === this;
    if (this._size * compactionThreshold <= t.length) {
      let r = 0;
      for (let s = 0; s < t.length; s++) t[s] ? t[r++] = t[s] : i && r < this._deliveryQueue.end && (this._deliveryQueue.end--, r < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = r;
    }
  }
  _deliver(e, t) {
    if (!e) return;
    const n = this._options?.onListenerError || onUnexpectedError;
    if (!n) {
      e.value(t);
      return;
    }
    try {
      e.value(t);
    } catch (i) {
      n(i);
    }
  }
  _deliverQueue(e) {
    const t = e.current._listeners;
    for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
    e.reset();
  }
  fire(e) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof UniqueContainer) this._deliver(this._listeners, e);
    else {
      const t = this._deliveryQueue;
      t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
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
  enqueue(e, t, n) {
    this.i = 0, this.end = n, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
};
function getNLSMessages() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function getNLSLanguage() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var isPseudo = getNLSLanguage() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function _format(e, t) {
  let n;
  return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (i, r) => {
    const s = parseInt(r, 10), o = t[s];
    let l = i;
    return typeof o == "string" ? l = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (l = String(o)), l;
  }), isPseudo && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
}
function localize(e, t, ...n) {
  return _format(typeof e == "number" ? lookupMessage(e, t) : t, n);
}
function lookupMessage(e, t) {
  const n = getNLSMessages()?.[e];
  if (typeof n != "string") {
    if (typeof t == "string") return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return n;
}
var LANGUAGE_DEFAULT = "en", _isWindows = false, _isMacintosh = false, _isLinux = false, _isLinuxSnap = false, _isNative = false, _isWeb = false, _isElectron = false, _isIOS = false, _isCI = false, _isMobile = false, _locale = void 0, _language = LANGUAGE_DEFAULT, _platformLocale = LANGUAGE_DEFAULT, _translationsConfigFile = void 0, _userAgent = void 0, $globalThis = globalThis, nodeProcess = void 0;
typeof $globalThis.vscode < "u" && typeof $globalThis.vscode.process < "u" ? nodeProcess = $globalThis.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (nodeProcess = process);
var isElectronProcess = typeof nodeProcess?.versions?.electron == "string", isElectronRenderer = isElectronProcess && nodeProcess?.type === "renderer";
if (typeof nodeProcess == "object") {
  _isWindows = nodeProcess.platform === "win32", _isMacintosh = nodeProcess.platform === "darwin", _isLinux = nodeProcess.platform === "linux", _isLinuxSnap = _isLinux && !!nodeProcess.env.SNAP && !!nodeProcess.env.SNAP_REVISION, _isElectron = isElectronProcess, _isCI = !!nodeProcess.env.CI || !!nodeProcess.env.BUILD_ARTIFACTSTAGINGDIRECTORY, _locale = LANGUAGE_DEFAULT, _language = LANGUAGE_DEFAULT;
  const e = nodeProcess.env.VSCODE_NLS_CONFIG;
  if (e) try {
    const t = JSON.parse(e);
    _locale = t.userLocale, _platformLocale = t.osLocale, _language = t.resolvedLanguage || LANGUAGE_DEFAULT, _translationsConfigFile = t.languagePack?.translationsConfigFile;
  } catch {
  }
  _isNative = true;
} else typeof navigator == "object" && !isElectronRenderer ? (_userAgent = navigator.userAgent, _isWindows = _userAgent.indexOf("Windows") >= 0, _isMacintosh = _userAgent.indexOf("Macintosh") >= 0, _isIOS = (_userAgent.indexOf("Macintosh") >= 0 || _userAgent.indexOf("iPad") >= 0 || _userAgent.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, _isLinux = _userAgent.indexOf("Linux") >= 0, _isMobile = _userAgent?.indexOf("Mobi") >= 0, _isWeb = true, _language = getNLSLanguage() || LANGUAGE_DEFAULT, _locale = navigator.language.toLowerCase(), _platformLocale = _locale) : console.error("Unable to resolve platform.");
var _platform = 0;
_isMacintosh ? _platform = 1 : _isWindows ? _platform = 3 : _isLinux && (_platform = 2);
var isWindows = _isWindows, isMacintosh = _isMacintosh, isLinux = _isLinux, isNative = _isNative, isWeb = _isWeb, isWebWorker = _isWeb && typeof $globalThis.importScripts == "function", webWorkerOrigin = isWebWorker ? $globalThis.origin : void 0, userAgent = _userAgent, language = _language, Language;
((e) => {
  function t() {
    return language;
  }
  e.value = t;
  function n() {
    return language.length === 2 ? language === "en" : language.length >= 3 ? language[0] === "e" && language[1] === "n" && language[2] === "-" : false;
  }
  e.isDefaultVariant = n;
  function i() {
    return language === "en";
  }
  e.isDefault = i;
})(Language || (Language = {}));
var setTimeout0IsFaster = typeof $globalThis.postMessage == "function" && !$globalThis.importScripts, setTimeout0 = (() => {
  if (setTimeout0IsFaster) {
    const e = [];
    $globalThis.addEventListener("message", (n) => {
      if (n.data && n.data.vscodeScheduleAsyncWork) for (let i = 0, r = e.length; i < r; i++) {
        const s = e[i];
        if (s.id === n.data.vscodeScheduleAsyncWork) {
          e.splice(i, 1), s.callback();
          return;
        }
      }
    });
    let t = 0;
    return (n) => {
      const i = ++t;
      e.push({ id: i, callback: n }), $globalThis.postMessage({ vscodeScheduleAsyncWork: i }, "*");
    };
  }
  return (e) => setTimeout(e);
})(), isChrome = !!(userAgent && userAgent.indexOf("Chrome") >= 0), isFirefox = !!(userAgent && userAgent.indexOf("Firefox") >= 0), isSafari = !!(!isChrome && userAgent && userAgent.indexOf("Safari") >= 0), isEdge = !!(userAgent && userAgent.indexOf("Edg/") >= 0), isAndroid = !!(userAgent && userAgent.indexOf("Android") >= 0), arch = nodeProcess?.arch, platformString = nodeProcess?.platform, nodeVersion = nodeProcess?.versions?.node, shortcutEvent = Object.freeze(function(e, t) {
  const n = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(n);
  } };
}), CancellationToken;
((e) => {
  function t(n) {
    return n === e.None || n === e.Cancelled || n instanceof MutableToken ? true : !n || typeof n != "object" ? false : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: Event.None }), e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: shortcutEvent });
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
function identity(e) {
  return e;
}
var LRUCachedFunction = class {
  constructor(e, t) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = identity) : (this._fn = t, this._computeKey = e.getCacheKey);
  }
  get(e) {
    const t = this._computeKey(e);
    return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
  }
}, Lazy = class {
  constructor(e) {
    this.executor = e, this._didRun = false;
  }
  get hasValue() {
    return this._didRun;
  }
  get value() {
    if (!this._didRun) try {
      this._value = this.executor();
    } catch (e) {
      this._error = e;
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
function isFalsyOrWhitespace(e) {
  return !e || typeof e != "string" ? true : e.trim().length === 0;
}
function escapeRegExpCharacters(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function createRegExp(e, t, n = {}) {
  if (!e) throw new Error("Cannot create regex from empty string");
  t || (e = escapeRegExpCharacters(e)), n.wholeWord && (/\B/.test(e.charAt(0)) || (e = "\\b" + e), /\B/.test(e.charAt(e.length - 1)) || (e = e + "\\b"));
  let i = "";
  return n.global && (i += "g"), n.matchCase || (i += "i"), n.multiline && (i += "m"), n.unicode && (i += "u"), new RegExp(e, i);
}
function splitLines(e) {
  return e.split(/\r\n|\r|\n/);
}
function firstNonWhitespaceIndex(e) {
  for (let t = 0, n = e.length; t < n; t++) {
    const i = e.charCodeAt(t);
    if (i !== 32 && i !== 9) return t;
  }
  return -1;
}
function lastNonWhitespaceIndex(e, t = e.length - 1) {
  for (let n = t; n >= 0; n--) {
    const i = e.charCodeAt(n);
    if (i !== 32 && i !== 9) return n;
  }
  return -1;
}
function compare(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function compareSubstring(e, t, n = 0, i = e.length, r = 0, s = t.length) {
  for (; n < i && r < s; n++, r++) {
    const a = e.charCodeAt(n), u = t.charCodeAt(r);
    if (a < u) return -1;
    if (a > u) return 1;
  }
  const o = i - n, l = s - r;
  return o < l ? -1 : o > l ? 1 : 0;
}
function compareSubstringIgnoreCase(e, t, n = 0, i = e.length, r = 0, s = t.length) {
  for (; n < i && r < s; n++, r++) {
    let a = e.charCodeAt(n), u = t.charCodeAt(r);
    if (a === u) continue;
    if (a >= 128 || u >= 128) return compareSubstring(e.toLowerCase(), t.toLowerCase(), n, i, r, s);
    isLowerAsciiLetter(a) && (a -= 32), isLowerAsciiLetter(u) && (u -= 32);
    const f = a - u;
    if (f !== 0) return f;
  }
  const o = i - n, l = s - r;
  return o < l ? -1 : o > l ? 1 : 0;
}
function isLowerAsciiLetter(e) {
  return e >= 97 && e <= 122;
}
function isUpperAsciiLetter(e) {
  return e >= 65 && e <= 90;
}
function equalsIgnoreCase(e, t) {
  return e.length === t.length && compareSubstringIgnoreCase(e, t) === 0;
}
function isHighSurrogate(e) {
  return 55296 <= e && e <= 56319;
}
function isLowSurrogate(e) {
  return 56320 <= e && e <= 57343;
}
function computeCodePoint(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
function getNextCodePoint(e, t, n) {
  const i = e.charCodeAt(n);
  if (isHighSurrogate(i) && n + 1 < t) {
    const r = e.charCodeAt(n + 1);
    if (isLowSurrogate(r)) return computeCodePoint(i, r);
  }
  return i;
}
var CONTAINS_RTL = void 0;
function makeContainsRtl() {
  return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
}
function containsRTL(e) {
  return CONTAINS_RTL || (CONTAINS_RTL = makeContainsRtl()), CONTAINS_RTL.test(e);
}
var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
function isBasicASCII(e) {
  return IS_BASIC_ASCII.test(e);
}
var UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/;
function containsUnusualLineTerminators(e) {
  return UNUSUAL_LINE_TERMINATORS.test(e);
}
var CSI_SEQUENCE = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, OSC_SEQUENCE = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, ESC_SEQUENCE = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, CONTROL_SEQUENCES = new RegExp("(?:" + [CSI_SEQUENCE.source, OSC_SEQUENCE.source, ESC_SEQUENCE.source].join("|") + ")", "g"), UTF8_BOM_CHARACTER = "\uFEFF";
function startsWithUTF8BOM(e) {
  return !!(e && e.length > 0 && e.charCodeAt(0) === 65279);
}
var _GraphemeBreakTree = class X {
  static getInstance() {
    return X._INSTANCE || (X._INSTANCE = new X()), X._INSTANCE;
  }
  constructor() {
    this._data = getGraphemeBreakRawData();
  }
  getGraphemeBreakType(t) {
    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
    if (t < 127) return 0;
    const n = this._data, i = n.length / 3;
    let r = 1;
    for (; r <= i; ) if (t < n[3 * r]) r = 2 * r;
    else if (t > n[3 * r + 1]) r = 2 * r + 1;
    else return n[3 * r + 2];
    return 0;
  }
};
_GraphemeBreakTree._INSTANCE = null;
function getGraphemeBreakRawData() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var _AmbiguousCharacters = class he {
  constructor(t) {
    this.confusableDictionary = t;
  }
  static getInstance(t) {
    return he.cache.get(Array.from(t).join(","));
  }
  static getLocales() {
    return he._locales.value;
  }
  isAmbiguous(t) {
    return this.confusableDictionary.has(t);
  }
  containsAmbiguousCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t.codePointAt(n);
      if (typeof i == "number" && this.isAmbiguous(i)) return true;
    }
    return false;
  }
  getPrimaryConfusable(t) {
    return this.confusableDictionary.get(t);
  }
  getConfusableCodePoints() {
    return new Set(this.confusableDictionary.keys());
  }
};
_AmbiguousCharacters.ambiguousCharacterData = new Lazy(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), _AmbiguousCharacters.cache = new LRUCachedFunction((e) => {
  const t = e.split(",");
  function n(f) {
    const c = /* @__PURE__ */ new Map();
    for (let h = 0; h < f.length; h += 2) c.set(f[h], f[h + 1]);
    return c;
  }
  function i(f, c) {
    const h = new Map(f);
    for (const [p, m] of c) h.set(p, m);
    return h;
  }
  function r(f, c) {
    if (!f) return c;
    const h = /* @__PURE__ */ new Map();
    for (const [p, m] of f) c.has(p) && h.set(p, m);
    return h;
  }
  const s = _AmbiguousCharacters.ambiguousCharacterData.value;
  let o = t.filter((f) => !f.startsWith("_") && f in s);
  o.length === 0 && (o = ["_default"]);
  let l;
  for (const f of o) {
    const c = n(s[f]);
    l = r(l, c);
  }
  const a = n(s._common), u = i(a, l);
  return new _AmbiguousCharacters(u);
}), _AmbiguousCharacters._locales = new Lazy(() => Object.keys(_AmbiguousCharacters.ambiguousCharacterData.value).filter((e) => !e.startsWith("_")));
var _InvisibleCharacters = class Q {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(Q.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return Q.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t.codePointAt(n);
      if (typeof i == "number" && (Q.isInvisibleCharacter(i) || i === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return Q.getData();
  }
};
_InvisibleCharacters._data = void 0;
var DEFAULT_CHANNEL = "default", INITIALIZE = "$initialize", RequestMessage = class {
  constructor(e, t, n, i, r) {
    this.vsWorker = e, this.req = t, this.channel = n, this.method = i, this.args = r, this.type = 0;
  }
}, ReplyMessage = class {
  constructor(e, t, n, i) {
    this.vsWorker = e, this.seq = t, this.res = n, this.err = i, this.type = 1;
  }
}, SubscribeEventMessage = class {
  constructor(e, t, n, i, r) {
    this.vsWorker = e, this.req = t, this.channel = n, this.eventName = i, this.arg = r, this.type = 2;
  }
}, EventMessage = class {
  constructor(e, t, n) {
    this.vsWorker = e, this.req = t, this.event = n, this.type = 3;
  }
}, UnsubscribeEventMessage = class {
  constructor(e, t) {
    this.vsWorker = e, this.req = t, this.type = 4;
  }
}, WebWorkerProtocol = class {
  constructor(e) {
    this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = /* @__PURE__ */ Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
  }
  setWorkerId(e) {
    this._workerId = e;
  }
  sendMessage(e, t, n) {
    const i = String(++this._lastSentReq);
    return new Promise((r, s) => {
      this._pendingReplies[i] = { resolve: r, reject: s }, this._send(new RequestMessage(this._workerId, i, e, t, n));
    });
  }
  listen(e, t, n) {
    let i = null;
    const r = new Emitter({ onWillAddFirstListener: () => {
      i = String(++this._lastSentReq), this._pendingEmitters.set(i, r), this._send(new SubscribeEventMessage(this._workerId, i, e, t, n));
    }, onDidRemoveLastListener: () => {
      this._pendingEmitters.delete(i), this._send(new UnsubscribeEventMessage(this._workerId, i)), i = null;
    } });
    return r.event;
  }
  handleMessage(e) {
    !e || !e.vsWorker || this._workerId !== -1 && e.vsWorker !== this._workerId || this._handleMessage(e);
  }
  createProxyToRemoteChannel(e, t) {
    const n = { get: (i, r) => (typeof r == "string" && !i[r] && (propertyIsDynamicEvent(r) ? i[r] = (s) => this.listen(e, r, s) : propertyIsEvent(r) ? i[r] = this.listen(e, r, void 0) : r.charCodeAt(0) === 36 && (i[r] = async (...s) => (await t?.(), this.sendMessage(e, r, s)))), i[r]) };
    return new Proxy(/* @__PURE__ */ Object.create(null), n);
  }
  _handleMessage(e) {
    switch (e.type) {
      case 1:
        return this._handleReplyMessage(e);
      case 0:
        return this._handleRequestMessage(e);
      case 2:
        return this._handleSubscribeEventMessage(e);
      case 3:
        return this._handleEventMessage(e);
      case 4:
        return this._handleUnsubscribeEventMessage(e);
    }
  }
  _handleReplyMessage(e) {
    if (!this._pendingReplies[e.seq]) {
      console.warn("Got reply to unknown seq");
      return;
    }
    const t = this._pendingReplies[e.seq];
    if (delete this._pendingReplies[e.seq], e.err) {
      let n = e.err;
      e.err.$isError && (n = new Error(), n.name = e.err.name, n.message = e.err.message, n.stack = e.err.stack), t.reject(n);
      return;
    }
    t.resolve(e.res);
  }
  _handleRequestMessage(e) {
    const t = e.req;
    this._handler.handleMessage(e.channel, e.method, e.args).then((i) => {
      this._send(new ReplyMessage(this._workerId, t, i, void 0));
    }, (i) => {
      i.detail instanceof Error && (i.detail = transformErrorForSerialization(i.detail)), this._send(new ReplyMessage(this._workerId, t, void 0, transformErrorForSerialization(i)));
    });
  }
  _handleSubscribeEventMessage(e) {
    const t = e.req, n = this._handler.handleEvent(e.channel, e.eventName, e.arg)((i) => {
      this._send(new EventMessage(this._workerId, t, i));
    });
    this._pendingEvents.set(t, n);
  }
  _handleEventMessage(e) {
    if (!this._pendingEmitters.has(e.req)) {
      console.warn("Got event for unknown req");
      return;
    }
    this._pendingEmitters.get(e.req).fire(e.event);
  }
  _handleUnsubscribeEventMessage(e) {
    if (!this._pendingEvents.has(e.req)) {
      console.warn("Got unsubscribe for unknown req");
      return;
    }
    this._pendingEvents.get(e.req).dispose(), this._pendingEvents.delete(e.req);
  }
  _send(e) {
    const t = [];
    if (e.type === 0) for (let n = 0; n < e.args.length; n++) {
      const i = e.args[n];
      (i instanceof ArrayBuffer || typeof MessagePort < "u" && i instanceof MessagePort) && t.push(i);
    }
    else e.type === 1 && e.res instanceof ArrayBuffer && t.push(e.res);
    this._handler.sendMessage(e, t);
  }
};
function propertyIsEvent(e) {
  return e[0] === "o" && e[1] === "n" && isUpperAsciiLetter(e.charCodeAt(2));
}
function propertyIsDynamicEvent(e) {
  return /^onDynamic/.test(e) && isUpperAsciiLetter(e.charCodeAt(9));
}
var WebWorkerServer = class {
  constructor(e, t) {
    this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new WebWorkerProtocol({ sendMessage: (n, i) => {
      e(n, i);
    }, handleMessage: (n, i, r) => this._handleMessage(n, i, r), handleEvent: (n, i, r) => this._handleEvent(n, i, r) }), this.requestHandler = t(this);
  }
  onmessage(e) {
    this._protocol.handleMessage(e);
  }
  _handleMessage(e, t, n) {
    if (e === DEFAULT_CHANNEL && t === INITIALIZE) return this.initialize(n[0]);
    const i = e === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(e);
    if (!i) return Promise.reject(new Error(`Missing channel ${e} on worker thread`));
    if (typeof i[t] != "function") return Promise.reject(new Error(`Missing method ${t} on worker thread channel ${e}`));
    try {
      return Promise.resolve(i[t].apply(i, n));
    } catch (r) {
      return Promise.reject(r);
    }
  }
  _handleEvent(e, t, n) {
    const i = e === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(e);
    if (!i) throw new Error(`Missing channel ${e} on worker thread`);
    if (propertyIsDynamicEvent(t)) {
      const r = i[t].call(i, n);
      if (typeof r != "function") throw new Error(`Missing dynamic event ${t} on request handler.`);
      return r;
    }
    if (propertyIsEvent(t)) {
      const r = i[t];
      if (typeof r != "function") throw new Error(`Missing event ${t} on request handler.`);
      return r;
    }
    throw new Error(`Malformed event name ${t}`);
  }
  setChannel(e, t) {
    this._localChannels.set(e, t);
  }
  getChannel(e) {
    if (!this._remoteChannels.has(e)) {
      const t = this._protocol.createProxyToRemoteChannel(e);
      this._remoteChannels.set(e, t);
    }
    return this._remoteChannels.get(e);
  }
  async initialize(e) {
    this._protocol.setWorkerId(e);
  }
}, initialized = false;
function initialize(e) {
  if (initialized) throw new Error("WebWorker already initialized!");
  initialized = true;
  const t = new WebWorkerServer((n, i) => globalThis.postMessage(n, i), (n) => e(n));
  return globalThis.onmessage = (n) => {
    t.onmessage(n.data);
  }, t;
}
function bootstrapWebWorker(e) {
  globalThis.onmessage = (t) => {
    initialized || initialize(e);
  };
}
var DiffChange = class {
  constructor(e, t, n, i) {
    this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = i;
  }
  getOriginalEnd() {
    return this.originalStart + this.originalLength;
  }
  getModifiedEnd() {
    return this.modifiedStart + this.modifiedLength;
  }
}, hasBuffer = typeof Buffer < "u", indexOfTable = new Lazy(() => new Uint8Array(256)), textEncoder, textDecoder, MAX_POOLED_ENCODE_SCRATCH_BYTES = 512 * 1024, pooledEncodeScratch = null, pooledEncodeScratchInUse = false, hasWarnedNestedPooledEncode = false, _oversizeVSBufferDecodeThreshold = 1 / 0, _oversizeVSBufferDecodeHandler, _largeVSBufferAllocationThreshold = 1 / 0, _largeVSBufferAllocationHandler;
function reportLargeVSBufferAllocation(e, t) {
  if (_largeVSBufferAllocationHandler && e.byteLength >= _largeVSBufferAllocationThreshold) try {
    _largeVSBufferAllocationHandler({ buffer: e, byteLength: e.byteLength, source: t });
  } catch {
  }
}
var VSBuffer = class F {
  static alloc(t) {
    let n;
    return hasBuffer ? n = new F(Buffer.allocUnsafe(t)) : n = new F(new Uint8Array(t)), reportLargeVSBufferAllocation(n, "alloc"), n;
  }
  static wrap(t) {
    hasBuffer && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength));
    const n = new F(t);
    return reportLargeVSBufferAllocation(n, "wrap"), n;
  }
  static fromString(t, n) {
    return !(n?.dontUseNodeBuffer || false) && hasBuffer ? new F(Buffer.from(t)) : (textEncoder || (textEncoder = new TextEncoder()), new F(textEncoder.encode(t)));
  }
  static withPooledString(t, n) {
    if (hasBuffer) return n(F.fromString(t));
    if (pooledEncodeScratchInUse) return hasWarnedNestedPooledEncode || (hasWarnedNestedPooledEncode = true, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), n(F.fromString(t));
    const i = t.length * 3;
    if (i > MAX_POOLED_ENCODE_SCRATCH_BYTES) return n(F.fromString(t));
    if (textEncoder || (textEncoder = new TextEncoder()), !pooledEncodeScratch || pooledEncodeScratch.byteLength < i) {
      let s = pooledEncodeScratch ? pooledEncodeScratch.byteLength * 2 : 16384;
      for (; s < i; ) s *= 2;
      pooledEncodeScratch = new Uint8Array(s);
    }
    const r = textEncoder.encodeInto(t, pooledEncodeScratch).written;
    pooledEncodeScratchInUse = true;
    try {
      return n(new F(pooledEncodeScratch.subarray(0, r)));
    } finally {
      pooledEncodeScratchInUse = false;
    }
  }
  static fromByteArray(t) {
    const n = F.alloc(t.length);
    for (let i = 0, r = t.length; i < r; i++) n.buffer[i] = t[i];
    return n;
  }
  static concat(t, n) {
    if (typeof n > "u") {
      n = 0;
      for (let s = 0, o = t.length; s < o; s++) n += t[s].byteLength;
    }
    const i = F.alloc(n);
    let r = 0;
    for (let s = 0, o = t.length; s < o; s++) {
      const l = t[s];
      i.set(l, r), r += l.byteLength;
    }
    return i;
  }
  constructor(t) {
    this.buffer = t, this.byteLength = this.buffer.byteLength;
  }
  clone() {
    const t = F.alloc(this.byteLength);
    return t.set(this), t;
  }
  toString() {
    if (hasBuffer) return this.buffer.toString();
    if (_oversizeVSBufferDecodeHandler && this.buffer.byteLength > _oversizeVSBufferDecodeThreshold) try {
      _oversizeVSBufferDecodeHandler(this.buffer.byteLength);
    } catch {
    }
    return textDecoder || (textDecoder = new TextDecoder()), textDecoder.decode(this.buffer);
  }
  slice(t, n) {
    return new F(this.buffer.subarray(t, n));
  }
  set(t, n) {
    if (t instanceof F) this.buffer.set(t.buffer, n);
    else if (t instanceof Uint8Array) this.buffer.set(t, n);
    else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), n);
    else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), n);
    else throw new Error("Unknown argument 'array'");
  }
  readUInt32BE(t) {
    return readUInt32BE(this.buffer, t);
  }
  writeUInt32BE(t, n) {
    writeUInt32BE(this.buffer, t, n);
  }
  readUInt32LE(t) {
    return readUInt32LE(this.buffer, t);
  }
  writeUInt32LE(t, n) {
    writeUInt32LE(this.buffer, t, n);
  }
  readUInt8(t) {
    return readUInt8(this.buffer, t);
  }
  writeUInt8(t, n) {
    writeUInt8(this.buffer, t, n);
  }
  indexOf(t, n = 0) {
    return binaryIndexOf(this.buffer, t instanceof F ? t.buffer : t, n);
  }
  equals(t) {
    return this === t ? true : this.byteLength !== t.byteLength ? false : this.buffer.every((n, i) => n === t.buffer[i]);
  }
};
function binaryIndexOf(e, t, n = 0) {
  const i = t.byteLength, r = e.byteLength;
  if (i === 0) return 0;
  if (i === 1) return e.indexOf(t[0]);
  if (i > r - n) return -1;
  const s = indexOfTable.value;
  s.fill(t.length);
  for (let u = 0; u < t.length; u++) s[t[u]] = t.length - u - 1;
  let o = n + t.length - 1, l = o, a = -1;
  for (; o < r; ) if (e[o] === t[l]) {
    if (l === 0) {
      a = o;
      break;
    }
    o--, l--;
  } else o += Math.max(t.length - l, s[e[o]]), l = t.length - 1;
  return a;
}
function readUInt16LE(e, t) {
  return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0;
}
function writeUInt16LE(e, t, n) {
  e[n + 0] = t & 255, t = t >>> 8, e[n + 1] = t & 255;
}
function readUInt32BE(e, t) {
  return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function writeUInt32BE(e, t, n) {
  e[n + 3] = t, t = t >>> 8, e[n + 2] = t, t = t >>> 8, e[n + 1] = t, t = t >>> 8, e[n] = t;
}
function readUInt32LE(e, t) {
  return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function writeUInt32LE(e, t, n) {
  e[n + 0] = t & 255, t = t >>> 8, e[n + 1] = t & 255, t = t >>> 8, e[n + 2] = t & 255, t = t >>> 8, e[n + 3] = t & 255;
}
function readUInt8(e, t) {
  return e[t];
}
function writeUInt8(e, t, n) {
  e[n] = t;
}
function decodeBase64(e) {
  let t = 0, n = 0, i = 0;
  const r = new Uint8Array(Math.floor(e.length / 4 * 3)), s = (l) => {
    switch (n) {
      case 3:
        r[i++] = t | l, n = 0;
        break;
      case 2:
        r[i++] = t | l >>> 2, t = l << 6, n = 3;
        break;
      case 1:
        r[i++] = t | l >>> 4, t = l << 4, n = 2;
        break;
      default:
        t = l << 2, n = 1;
    }
  };
  for (let l = 0; l < e.length; l++) {
    const a = e.charCodeAt(l);
    if (a >= 65 && a <= 90) s(a - 65);
    else if (a >= 97 && a <= 122) s(a - 97 + 26);
    else if (a >= 48 && a <= 57) s(a - 48 + 52);
    else if (a === 43 || a === 45) s(62);
    else if (a === 47 || a === 95) s(63);
    else {
      if (a === 61) break;
      throw new SyntaxError(`Unexpected base64 character ${e[l]}`);
    }
  }
  const o = i;
  for (; n > 0; ) s(0);
  return VSBuffer.wrap(r).slice(0, o);
}
var base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", base64UrlSafeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function encodeBase64({ buffer: e }, t = true, n = false) {
  const i = e.toBase64;
  if (typeof i == "function") return i.call(e, { alphabet: n ? "base64url" : "base64", omitPadding: !t });
  const r = n ? base64UrlSafeAlphabet : base64Alphabet;
  let s = "";
  const o = e.byteLength % 3;
  let l = 0;
  for (; l < e.byteLength - o; l += 3) {
    const a = e[l + 0], u = e[l + 1], f = e[l + 2];
    s += r[a >>> 2], s += r[(a << 4 | u >>> 4) & 63], s += r[(u << 2 | f >>> 6) & 63], s += r[f & 63];
  }
  if (o === 1) {
    const a = e[l + 0];
    s += r[a >>> 2], s += r[a << 4 & 63], t && (s += "==");
  } else if (o === 2) {
    const a = e[l + 0], u = e[l + 1];
    s += r[a >>> 2], s += r[(a << 4 | u >>> 4) & 63], s += r[u << 2 & 63], t && (s += "=");
  }
  return s;
}
function hash(e) {
  return doHash(e, 0);
}
function doHash(e, t) {
  switch (typeof e) {
    case "object":
      return e === null ? numberHash(349, t) : Array.isArray(e) ? arrayHash(e, t) : objectHash(e, t);
    case "string":
      return stringHash(e, t);
    case "boolean":
      return booleanHash(e, t);
    case "number":
      return numberHash(e, t);
    case "undefined":
      return numberHash(937, t);
    default:
      return numberHash(617, t);
  }
}
function numberHash(e, t) {
  return (t << 5) - t + e | 0;
}
function booleanHash(e, t) {
  return numberHash(e ? 433 : 863, t);
}
function stringHash(e, t) {
  t = numberHash(149417, t);
  for (let n = 0, i = e.length; n < i; n++) t = numberHash(e.charCodeAt(n), t);
  return t;
}
function arrayHash(e, t) {
  return t = numberHash(104579, t), e.reduce((n, i) => doHash(i, n), t);
}
function objectHash(e, t) {
  return t = numberHash(181387, t), Object.keys(e).sort().reduce((n, i) => (n = stringHash(i, n), doHash(e[i], n)), t);
}
function leftRotate(e, t, n = 32) {
  const i = n - t, r = ~((1 << i) - 1);
  return (e << t | (r & e) >>> i) >>> 0;
}
function toHexString(e, t = 32) {
  return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((n) => n.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
var _StringSHA1 = class Le {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
  }
  update(t) {
    const n = t.length;
    if (n === 0) return;
    const i = this._buff;
    let r = this._buffLen, s = this._leftoverHighSurrogate, o, l;
    for (s !== 0 ? (o = s, l = -1, s = 0) : (o = t.charCodeAt(0), l = 0); ; ) {
      let a = o;
      if (isHighSurrogate(o)) if (l + 1 < n) {
        const u = t.charCodeAt(l + 1);
        isLowSurrogate(u) ? (l++, a = computeCodePoint(o, u)) : a = 65533;
      } else {
        s = o;
        break;
      }
      else isLowSurrogate(o) && (a = 65533);
      if (r = this._push(i, r, a), l++, l < n) o = t.charCodeAt(l);
      else break;
    }
    this._buffLen = r, this._leftoverHighSurrogate = s;
  }
  _push(t, n, i) {
    return i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = 192 | (i & 1984) >>> 6, t[n++] = 128 | (i & 63) >>> 0) : i < 65536 ? (t[n++] = 224 | (i & 61440) >>> 12, t[n++] = 128 | (i & 4032) >>> 6, t[n++] = 128 | (i & 63) >>> 0) : (t[n++] = 240 | (i & 1835008) >>> 18, t[n++] = 128 | (i & 258048) >>> 12, t[n++] = 128 | (i & 4032) >>> 6, t[n++] = 128 | (i & 63) >>> 0), n >= 64 && (this._step(), n -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), n;
  }
  digest() {
    return this._finished || (this._finished = true, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), toHexString(this._h0) + toHexString(this._h1) + toHexString(this._h2) + toHexString(this._h3) + toHexString(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
    const t = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(t / 4294967296), false), this._buffDV.setUint32(60, t % 4294967296, false), this._step();
  }
  _step() {
    const t = Le._bigBlock32, n = this._buffDV;
    for (let c = 0; c < 64; c += 4) t.setUint32(c, n.getUint32(c, false), false);
    for (let c = 64; c < 320; c += 4) t.setUint32(c, leftRotate(t.getUint32(c - 12, false) ^ t.getUint32(c - 32, false) ^ t.getUint32(c - 56, false) ^ t.getUint32(c - 64, false), 1), false);
    let i = this._h0, r = this._h1, s = this._h2, o = this._h3, l = this._h4, a, u, f;
    for (let c = 0; c < 80; c++) c < 20 ? (a = r & s | ~r & o, u = 1518500249) : c < 40 ? (a = r ^ s ^ o, u = 1859775393) : c < 60 ? (a = r & s | r & o | s & o, u = 2400959708) : (a = r ^ s ^ o, u = 3395469782), f = leftRotate(i, 5) + a + l + u + t.getUint32(c * 4, false) & 4294967295, l = o, o = s, s = leftRotate(r, 30), r = i, i = f;
    this._h0 = this._h0 + i & 4294967295, this._h1 = this._h1 + r & 4294967295, this._h2 = this._h2 + s & 4294967295, this._h3 = this._h3 + o & 4294967295, this._h4 = this._h4 + l & 4294967295;
  }
};
_StringSHA1._bigBlock32 = new DataView(new ArrayBuffer(320));
var Debug = class {
  static Assert(e, t) {
    if (!e) throw new Error(t);
  }
}, MyArray = class {
  static Copy(e, t, n, i, r) {
    for (let s = 0; s < r; s++) n[i + s] = e[t + s];
  }
  static Copy2(e, t, n, i, r) {
    for (let s = 0; s < r; s++) n[i + s] = e[t + s];
  }
}, DiffChangeHelper = class {
  constructor() {
    this.m_changes = [], this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824, this.m_originalCount = 0, this.m_modifiedCount = 0;
  }
  MarkNextChange() {
    (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new DiffChange(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824;
  }
  AddOriginalElement(e, t) {
    this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++;
  }
  AddModifiedElement(e, t) {
    this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++;
  }
  getChanges() {
    return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
  }
  getReverseChanges() {
    return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
  }
}, LcsDiff = class z {
  constructor(t, n, i = null) {
    this.ContinueProcessingPredicate = i, this._originalSequence = t, this._modifiedSequence = n;
    const [r, s, o] = z._getElements(t), [l, a, u] = z._getElements(n);
    this._hasStrings = o && u, this._originalStringElements = r, this._originalElementsOrHash = s, this._modifiedStringElements = l, this._modifiedElementsOrHash = a, this.m_forwardHistory = [], this.m_reverseHistory = [];
  }
  static _isStringArray(t) {
    return t.length > 0 && typeof t[0] == "string";
  }
  static _getElements(t) {
    const n = t.getElements();
    if (z._isStringArray(n)) {
      const i = new Int32Array(n.length);
      for (let r = 0, s = n.length; r < s; r++) i[r] = stringHash(n[r], 0);
      return [n, i, true];
    }
    return n instanceof Int32Array ? [[], n, false] : [[], new Int32Array(n), false];
  }
  ElementsAreEqual(t, n) {
    return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? false : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[n] : true;
  }
  ElementsAreStrictEqual(t, n) {
    if (!this.ElementsAreEqual(t, n)) return false;
    const i = z._getStrictElement(this._originalSequence, t), r = z._getStrictElement(this._modifiedSequence, n);
    return i === r;
  }
  static _getStrictElement(t, n) {
    return typeof t.getStrictElement == "function" ? t.getStrictElement(n) : null;
  }
  OriginalElementsAreEqual(t, n) {
    return this._originalElementsOrHash[t] !== this._originalElementsOrHash[n] ? false : this._hasStrings ? this._originalStringElements[t] === this._originalStringElements[n] : true;
  }
  ModifiedElementsAreEqual(t, n) {
    return this._modifiedElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? false : this._hasStrings ? this._modifiedStringElements[t] === this._modifiedStringElements[n] : true;
  }
  ComputeDiff(t) {
    return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, t);
  }
  _ComputeDiff(t, n, i, r, s) {
    const o = [false];
    let l = this.ComputeDiffRecursive(t, n, i, r, o);
    return s && (l = this.PrettifyChanges(l)), { quitEarly: o[0], changes: l };
  }
  ComputeDiffRecursive(t, n, i, r, s) {
    for (s[0] = false; t <= n && i <= r && this.ElementsAreEqual(t, i); ) t++, i++;
    for (; n >= t && r >= i && this.ElementsAreEqual(n, r); ) n--, r--;
    if (t > n || i > r) {
      let c;
      return i <= r ? (Debug.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), c = [new DiffChange(t, 0, i, r - i + 1)]) : t <= n ? (Debug.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), c = [new DiffChange(t, n - t + 1, i, 0)]) : (Debug.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), Debug.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), c = []), c;
    }
    const o = [0], l = [0], a = this.ComputeRecursionPoint(t, n, i, r, o, l, s), u = o[0], f = l[0];
    if (a !== null) return a;
    if (!s[0]) {
      const c = this.ComputeDiffRecursive(t, u, i, f, s);
      let h = [];
      return s[0] ? h = [new DiffChange(u + 1, n - (u + 1) + 1, f + 1, r - (f + 1) + 1)] : h = this.ComputeDiffRecursive(u + 1, n, f + 1, r, s), this.ConcatenateChanges(c, h);
    }
    return [new DiffChange(t, n - t + 1, i, r - i + 1)];
  }
  WALKTRACE(t, n, i, r, s, o, l, a, u, f, c, h, p, m, g, _, E, d) {
    let L = null, O = null, b = new DiffChangeHelper(), x = n, S = i, y = p[0] - _[0] - r, U = -1073741824, C = this.m_forwardHistory.length - 1;
    do {
      const k = y + t;
      k === x || k < S && u[k - 1] < u[k + 1] ? (c = u[k + 1], m = c - y - r, c < U && b.MarkNextChange(), U = c, b.AddModifiedElement(c + 1, m), y = k + 1 - t) : (c = u[k - 1] + 1, m = c - y - r, c < U && b.MarkNextChange(), U = c - 1, b.AddOriginalElement(c, m + 1), y = k - 1 - t), C >= 0 && (u = this.m_forwardHistory[C], t = u[0], x = 1, S = u.length - 1);
    } while (--C >= -1);
    if (L = b.getReverseChanges(), d[0]) {
      let k = p[0] + 1, T = _[0] + 1;
      if (L !== null && L.length > 0) {
        const q = L[L.length - 1];
        k = Math.max(k, q.getOriginalEnd()), T = Math.max(T, q.getModifiedEnd());
      }
      O = [new DiffChange(k, h - k + 1, T, g - T + 1)];
    } else {
      b = new DiffChangeHelper(), x = o, S = l, y = p[0] - _[0] - a, U = 1073741824, C = E ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
      do {
        const k = y + s;
        k === x || k < S && f[k - 1] >= f[k + 1] ? (c = f[k + 1] - 1, m = c - y - a, c > U && b.MarkNextChange(), U = c + 1, b.AddOriginalElement(c + 1, m + 1), y = k + 1 - s) : (c = f[k - 1], m = c - y - a, c > U && b.MarkNextChange(), U = c, b.AddModifiedElement(c + 1, m + 1), y = k - 1 - s), C >= 0 && (f = this.m_reverseHistory[C], s = f[0], x = 1, S = f.length - 1);
      } while (--C >= -1);
      O = b.getChanges();
    }
    return this.ConcatenateChanges(L, O);
  }
  ComputeRecursionPoint(t, n, i, r, s, o, l) {
    let a = 0, u = 0, f = 0, c = 0, h = 0, p = 0;
    t--, i--, s[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
    const m = n - t + (r - i), g = m + 1, _ = new Int32Array(g), E = new Int32Array(g), d = r - i, L = n - t, O = t - i, b = n - r, S = (L - d) % 2 === 0;
    _[d] = t, E[L] = n, l[0] = false;
    for (let y = 1; y <= m / 2 + 1; y++) {
      let U = 0, C = 0;
      f = this.ClipDiagonalBound(d - y, y, d, g), c = this.ClipDiagonalBound(d + y, y, d, g);
      for (let T = f; T <= c; T += 2) {
        T === f || T < c && _[T - 1] < _[T + 1] ? a = _[T + 1] : a = _[T - 1] + 1, u = a - (T - d) - O;
        const q = a;
        for (; a < n && u < r && this.ElementsAreEqual(a + 1, u + 1); ) a++, u++;
        if (_[T] = a, a + u > U + C && (U = a, C = u), !S && Math.abs(T - L) <= y - 1 && a >= E[T]) return s[0] = a, o[0] = u, q <= E[T] && y <= 1448 ? this.WALKTRACE(d, f, c, O, L, h, p, b, _, E, a, n, s, u, r, o, S, l) : null;
      }
      const k = (U - t + (C - i) - y) / 2;
      if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(U, k)) return l[0] = true, s[0] = U, o[0] = C, k > 0 && y <= 1448 ? this.WALKTRACE(d, f, c, O, L, h, p, b, _, E, a, n, s, u, r, o, S, l) : (t++, i++, [new DiffChange(t, n - t + 1, i, r - i + 1)]);
      h = this.ClipDiagonalBound(L - y, y, L, g), p = this.ClipDiagonalBound(L + y, y, L, g);
      for (let T = h; T <= p; T += 2) {
        T === h || T < p && E[T - 1] >= E[T + 1] ? a = E[T + 1] - 1 : a = E[T - 1], u = a - (T - L) - b;
        const q = a;
        for (; a > t && u > i && this.ElementsAreEqual(a, u); ) a--, u--;
        if (E[T] = a, S && Math.abs(T - d) <= y && a <= _[T]) return s[0] = a, o[0] = u, q >= _[T] && y <= 1448 ? this.WALKTRACE(d, f, c, O, L, h, p, b, _, E, a, n, s, u, r, o, S, l) : null;
      }
      if (y <= 1447) {
        let T = new Int32Array(c - f + 2);
        T[0] = d - f + 1, MyArray.Copy2(_, f, T, 1, c - f + 1), this.m_forwardHistory.push(T), T = new Int32Array(p - h + 2), T[0] = L - h + 1, MyArray.Copy2(E, h, T, 1, p - h + 1), this.m_reverseHistory.push(T);
      }
    }
    return this.WALKTRACE(d, f, c, O, L, h, p, b, _, E, a, n, s, u, r, o, S, l);
  }
  PrettifyChanges(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t[n], r = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length, s = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length, o = i.originalLength > 0, l = i.modifiedLength > 0;
      for (; i.originalStart + i.originalLength < r && i.modifiedStart + i.modifiedLength < s && (!o || this.OriginalElementsAreEqual(i.originalStart, i.originalStart + i.originalLength)) && (!l || this.ModifiedElementsAreEqual(i.modifiedStart, i.modifiedStart + i.modifiedLength)); ) {
        const u = this.ElementsAreStrictEqual(i.originalStart, i.modifiedStart);
        if (this.ElementsAreStrictEqual(i.originalStart + i.originalLength, i.modifiedStart + i.modifiedLength) && !u) break;
        i.originalStart++, i.modifiedStart++;
      }
      const a = [null];
      if (n < t.length - 1 && this.ChangesOverlap(t[n], t[n + 1], a)) {
        t[n] = a[0], t.splice(n + 1, 1), n--;
        continue;
      }
    }
    for (let n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      let r = 0, s = 0;
      if (n > 0) {
        const c = t[n - 1];
        r = c.originalStart + c.originalLength, s = c.modifiedStart + c.modifiedLength;
      }
      const o = i.originalLength > 0, l = i.modifiedLength > 0;
      let a = 0, u = this._boundaryScore(i.originalStart, i.originalLength, i.modifiedStart, i.modifiedLength);
      for (let c = 1; ; c++) {
        const h = i.originalStart - c, p = i.modifiedStart - c;
        if (h < r || p < s || o && !this.OriginalElementsAreEqual(h, h + i.originalLength) || l && !this.ModifiedElementsAreEqual(p, p + i.modifiedLength)) break;
        const g = (h === r && p === s ? 5 : 0) + this._boundaryScore(h, i.originalLength, p, i.modifiedLength);
        g > u && (u = g, a = c);
      }
      i.originalStart -= a, i.modifiedStart -= a;
      const f = [null];
      if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], f)) {
        t[n - 1] = f[0], t.splice(n, 1), n++;
        continue;
      }
    }
    if (this._hasStrings) for (let n = 1, i = t.length; n < i; n++) {
      const r = t[n - 1], s = t[n], o = s.originalStart - r.originalStart - r.originalLength, l = r.originalStart, a = s.originalStart + s.originalLength, u = a - l, f = r.modifiedStart, c = s.modifiedStart + s.modifiedLength, h = c - f;
      if (o < 5 && u < 20 && h < 20) {
        const p = this._findBetterContiguousSequence(l, u, f, h, o);
        if (p) {
          const [m, g] = p;
          (m !== r.originalStart + r.originalLength || g !== r.modifiedStart + r.modifiedLength) && (r.originalLength = m - r.originalStart, r.modifiedLength = g - r.modifiedStart, s.originalStart = m + o, s.modifiedStart = g + o, s.originalLength = a - s.originalStart, s.modifiedLength = c - s.modifiedStart);
        }
      }
    }
    return t;
  }
  _findBetterContiguousSequence(t, n, i, r, s) {
    if (n < s || r < s) return null;
    const o = t + n - s + 1, l = i + r - s + 1;
    let a = 0, u = 0, f = 0;
    for (let c = t; c < o; c++) for (let h = i; h < l; h++) {
      const p = this._contiguousSequenceScore(c, h, s);
      p > 0 && p > a && (a = p, u = c, f = h);
    }
    return a > 0 ? [u, f] : null;
  }
  _contiguousSequenceScore(t, n, i) {
    let r = 0;
    for (let s = 0; s < i; s++) {
      if (!this.ElementsAreEqual(t + s, n + s)) return 0;
      r += this._originalStringElements[t + s].length;
    }
    return r;
  }
  _OriginalIsBoundary(t) {
    return t <= 0 || t >= this._originalElementsOrHash.length - 1 ? true : this._hasStrings && /^\s*$/.test(this._originalStringElements[t]);
  }
  _OriginalRegionIsBoundary(t, n) {
    if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1)) return true;
    if (n > 0) {
      const i = t + n;
      if (this._OriginalIsBoundary(i - 1) || this._OriginalIsBoundary(i)) return true;
    }
    return false;
  }
  _ModifiedIsBoundary(t) {
    return t <= 0 || t >= this._modifiedElementsOrHash.length - 1 ? true : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[t]);
  }
  _ModifiedRegionIsBoundary(t, n) {
    if (this._ModifiedIsBoundary(t) || this._ModifiedIsBoundary(t - 1)) return true;
    if (n > 0) {
      const i = t + n;
      if (this._ModifiedIsBoundary(i - 1) || this._ModifiedIsBoundary(i)) return true;
    }
    return false;
  }
  _boundaryScore(t, n, i, r) {
    const s = this._OriginalRegionIsBoundary(t, n) ? 1 : 0, o = this._ModifiedRegionIsBoundary(i, r) ? 1 : 0;
    return s + o;
  }
  ConcatenateChanges(t, n) {
    const i = [];
    if (t.length === 0 || n.length === 0) return n.length > 0 ? n : t;
    if (this.ChangesOverlap(t[t.length - 1], n[0], i)) {
      const r = new Array(t.length + n.length - 1);
      return MyArray.Copy(t, 0, r, 0, t.length - 1), r[t.length - 1] = i[0], MyArray.Copy(n, 1, r, t.length, n.length - 1), r;
    } else {
      const r = new Array(t.length + n.length);
      return MyArray.Copy(t, 0, r, 0, t.length), MyArray.Copy(n, 0, r, t.length, n.length), r;
    }
  }
  ChangesOverlap(t, n, i) {
    if (Debug.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), Debug.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
      const r = t.originalStart;
      let s = t.originalLength;
      const o = t.modifiedStart;
      let l = t.modifiedLength;
      return t.originalStart + t.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (l = n.modifiedStart + n.modifiedLength - t.modifiedStart), i[0] = new DiffChange(r, s, o, l), true;
    } else return i[0] = null, false;
  }
  ClipDiagonalBound(t, n, i, r) {
    if (t >= 0 && t < r) return t;
    const s = i, o = r - i - 1, l = n % 2 === 0;
    if (t < 0) {
      const a = s % 2 === 0;
      return l === a ? 0 : 1;
    } else {
      const a = o % 2 === 0;
      return l === a ? r - 1 : r - 2;
    }
  }
}, precomputedEqualityArray = new Uint32Array(65536), computeLevenshteinDistanceForShortStrings = (e, t) => {
  const n = e.length, i = t.length, r = 1 << n - 1;
  let s = -1, o = 0, l = n, a = n;
  for (; a--; ) precomputedEqualityArray[e.charCodeAt(a)] |= 1 << a;
  for (a = 0; a < i; a++) {
    let u = precomputedEqualityArray[t.charCodeAt(a)];
    const f = u | o;
    u |= (u & s) + s ^ s, o |= ~(u | s), s &= u, o & r && l++, s & r && l--, o = o << 1 | 1, s = s << 1 | ~(f | o), o &= f;
  }
  for (a = n; a--; ) precomputedEqualityArray[e.charCodeAt(a)] = 0;
  return l;
};
function computeLevenshteinDistanceForLongStrings(e, t) {
  const n = e.length, i = t.length, r = [], s = [], o = Math.ceil(n / 32), l = Math.ceil(i / 32);
  for (let m = 0; m < o; m++) r[m] = -1, s[m] = 0;
  let a = 0;
  for (; a < l - 1; a++) {
    let m = 0, g = -1;
    const _ = a * 32, E = Math.min(32, i) + _;
    for (let d = _; d < E; d++) precomputedEqualityArray[t.charCodeAt(d)] |= 1 << d;
    for (let d = 0; d < n; d++) {
      const L = precomputedEqualityArray[e.charCodeAt(d)], O = r[d / 32 | 0] >>> d & 1, b = s[d / 32 | 0] >>> d & 1, x = L | m, S = ((L | b) & g) + g ^ g | L | b;
      let y = m | ~(S | g), U = g & S;
      y >>> 31 ^ O && (r[d / 32 | 0] ^= 1 << d), U >>> 31 ^ b && (s[d / 32 | 0] ^= 1 << d), y = y << 1 | O, U = U << 1 | b, g = U | ~(x | y), m = y & x;
    }
    for (let d = _; d < E; d++) precomputedEqualityArray[t.charCodeAt(d)] = 0;
  }
  let u = 0, f = -1;
  const c = a * 32, h = Math.min(32, i - c) + c;
  for (let m = c; m < h; m++) precomputedEqualityArray[t.charCodeAt(m)] |= 1 << m;
  let p = i;
  for (let m = 0; m < n; m++) {
    const g = precomputedEqualityArray[e.charCodeAt(m)], _ = r[m / 32 | 0] >>> m & 1, E = s[m / 32 | 0] >>> m & 1, d = g | u, L = ((g | E) & f) + f ^ f | g | E;
    let O = u | ~(L | f), b = f & L;
    p += O >>> i - 1 & 1, p -= b >>> i - 1 & 1, O >>> 31 ^ _ && (r[m / 32 | 0] ^= 1 << m), b >>> 31 ^ E && (s[m / 32 | 0] ^= 1 << m), O = O << 1 | _, b = b << 1 | E, f = b | ~(d | O), u = O & d;
  }
  for (let m = c; m < h; m++) precomputedEqualityArray[t.charCodeAt(m)] = 0;
  return p;
}
function computeLevenshteinDistance(e, t) {
  if (e.length < t.length) {
    const n = t;
    t = e, e = n;
  }
  return t.length === 0 ? e.length : e.length <= 32 ? computeLevenshteinDistanceForShortStrings(e, t) : computeLevenshteinDistanceForLongStrings(e, t);
}
var safeProcess, vscodeGlobal = globalThis.vscode;
if (typeof vscodeGlobal < "u" && typeof vscodeGlobal.process < "u") {
  const e = vscodeGlobal.process;
  safeProcess = { get platform() {
    return e.platform;
  }, get arch() {
    return e.arch;
  }, get env() {
    return e.env;
  }, cwd() {
    return e.cwd();
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
  constructor(e, t, n) {
    let i;
    typeof t == "string" && t.indexOf("not ") === 0 ? (i = "must not be", t = t.replace(/^not /, "")) : i = "must be";
    const r = e.indexOf(".") !== -1 ? "property" : "argument";
    let s = `The "${e}" ${r} ${i} of type ${t}`;
    s += `. Received type ${typeof n}`, super(s), this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function validateObject(e, t) {
  if (e === null || typeof e != "object") throw new ErrorInvalidArgType(t, "Object", e);
}
function validateString(e, t) {
  if (typeof e != "string") throw new ErrorInvalidArgType(t, "string", e);
}
var platformIsWin32 = platform === "win32";
function isPathSeparator(e) {
  return e === CHAR_FORWARD_SLASH || e === CHAR_BACKWARD_SLASH;
}
function isPosixPathSeparator(e) {
  return e === CHAR_FORWARD_SLASH;
}
function isWindowsDeviceRoot(e) {
  return e >= CHAR_UPPERCASE_A && e <= CHAR_UPPERCASE_Z || e >= CHAR_LOWERCASE_A && e <= CHAR_LOWERCASE_Z;
}
function normalizeString(e, t, n, i) {
  let r = "", s = 0, o = -1, l = 0, a = 0;
  for (let u = 0; u <= e.length; ++u) {
    if (u < e.length) a = e.charCodeAt(u);
    else {
      if (i(a)) break;
      a = CHAR_FORWARD_SLASH;
    }
    if (i(a)) {
      if (!(o === u - 1 || l === 1)) if (l === 2) {
        if (r.length < 2 || s !== 2 || r.charCodeAt(r.length - 1) !== CHAR_DOT || r.charCodeAt(r.length - 2) !== CHAR_DOT) {
          if (r.length > 2) {
            const f = r.lastIndexOf(n);
            f === -1 ? (r = "", s = 0) : (r = r.slice(0, f), s = r.length - 1 - r.lastIndexOf(n)), o = u, l = 0;
            continue;
          } else if (r.length !== 0) {
            r = "", s = 0, o = u, l = 0;
            continue;
          }
        }
        t && (r += r.length > 0 ? `${n}..` : "..", s = 2);
      } else r.length > 0 ? r += `${n}${e.slice(o + 1, u)}` : r = e.slice(o + 1, u), s = u - o - 1;
      o = u, l = 0;
    } else a === CHAR_DOT && l !== -1 ? ++l : l = -1;
  }
  return r;
}
function formatExt(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function _format2(e, t) {
  validateObject(t, "pathObject");
  const n = t.dir || t.root, i = t.base || `${t.name || ""}${formatExt(t.ext)}`;
  return n ? n === t.root ? `${n}${i}` : `${n}${e}${i}` : i;
}
var win32 = { resolve(...e) {
  let t = "", n = "", i = false;
  for (let r = e.length - 1; r >= -1; r--) {
    let s;
    if (r >= 0) {
      if (s = e[r], validateString(s, `paths[${r}]`), s.length === 0) continue;
    } else t.length === 0 ? s = cwd() : (s = env[`=${t}`] || cwd(), (s === void 0 || s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === CHAR_BACKWARD_SLASH) && (s = `${t}\\`));
    const o = s.length;
    let l = 0, a = "", u = false;
    const f = s.charCodeAt(0);
    if (o === 1) isPathSeparator(f) && (l = 1, u = true);
    else if (isPathSeparator(f)) if (u = true, isPathSeparator(s.charCodeAt(1))) {
      let c = 2, h = c;
      for (; c < o && !isPathSeparator(s.charCodeAt(c)); ) c++;
      if (c < o && c !== h) {
        const p = s.slice(h, c);
        for (h = c; c < o && isPathSeparator(s.charCodeAt(c)); ) c++;
        if (c < o && c !== h) {
          for (h = c; c < o && !isPathSeparator(s.charCodeAt(c)); ) c++;
          (c === o || c !== h) && (a = `\\\\${p}\\${s.slice(h, c)}`, l = c);
        }
      }
    } else l = 1;
    else isWindowsDeviceRoot(f) && s.charCodeAt(1) === CHAR_COLON && (a = s.slice(0, 2), l = 2, o > 2 && isPathSeparator(s.charCodeAt(2)) && (u = true, l = 3));
    if (a.length > 0) if (t.length > 0) {
      if (a.toLowerCase() !== t.toLowerCase()) continue;
    } else t = a;
    if (i) {
      if (t.length > 0) break;
    } else if (n = `${s.slice(l)}\\${n}`, i = u, u && t.length > 0) break;
  }
  return n = normalizeString(n, !i, "\\", isPathSeparator), i ? `${t}\\${n}` : `${t}${n}` || ".";
}, normalize(e) {
  validateString(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let n = 0, i, r = false;
  const s = e.charCodeAt(0);
  if (t === 1) return isPosixPathSeparator(s) ? "\\" : e;
  if (isPathSeparator(s)) if (r = true, isPathSeparator(e.charCodeAt(1))) {
    let l = 2, a = l;
    for (; l < t && !isPathSeparator(e.charCodeAt(l)); ) l++;
    if (l < t && l !== a) {
      const u = e.slice(a, l);
      for (a = l; l < t && isPathSeparator(e.charCodeAt(l)); ) l++;
      if (l < t && l !== a) {
        for (a = l; l < t && !isPathSeparator(e.charCodeAt(l)); ) l++;
        if (l === t) return `\\\\${u}\\${e.slice(a)}\\`;
        l !== a && (i = `\\\\${u}\\${e.slice(a, l)}`, n = l);
      }
    }
  } else n = 1;
  else isWindowsDeviceRoot(s) && e.charCodeAt(1) === CHAR_COLON && (i = e.slice(0, 2), n = 2, t > 2 && isPathSeparator(e.charCodeAt(2)) && (r = true, n = 3));
  let o = n < t ? normalizeString(e.slice(n), !r, "\\", isPathSeparator) : "";
  if (o.length === 0 && !r && (o = "."), o.length > 0 && isPathSeparator(e.charCodeAt(t - 1)) && (o += "\\"), !r && i === void 0 && e.includes(":")) {
    if (o.length >= 2 && isWindowsDeviceRoot(o.charCodeAt(0)) && o.charCodeAt(1) === CHAR_COLON) return `.\\${o}`;
    let l = e.indexOf(":");
    do
      if (l === t - 1 || isPathSeparator(e.charCodeAt(l + 1))) return `.\\${o}`;
    while ((l = e.indexOf(":", l + 1)) !== -1);
  }
  return i === void 0 ? r ? `\\${o}` : o : r ? `${i}\\${o}` : `${i}${o}`;
}, isAbsolute(e) {
  validateString(e, "path");
  const t = e.length;
  if (t === 0) return false;
  const n = e.charCodeAt(0);
  return isPathSeparator(n) || t > 2 && isWindowsDeviceRoot(n) && e.charCodeAt(1) === CHAR_COLON && isPathSeparator(e.charCodeAt(2));
}, join(...e) {
  if (e.length === 0) return ".";
  let t, n;
  for (let s = 0; s < e.length; ++s) {
    const o = e[s];
    validateString(o, "path"), o.length > 0 && (t === void 0 ? t = n = o : t += `\\${o}`);
  }
  if (t === void 0) return ".";
  let i = true, r = 0;
  if (typeof n == "string" && isPathSeparator(n.charCodeAt(0))) {
    ++r;
    const s = n.length;
    s > 1 && isPathSeparator(n.charCodeAt(1)) && (++r, s > 2 && (isPathSeparator(n.charCodeAt(2)) ? ++r : i = false));
  }
  if (i) {
    for (; r < t.length && isPathSeparator(t.charCodeAt(r)); ) r++;
    r >= 2 && (t = `\\${t.slice(r)}`);
  }
  return win32.normalize(t);
}, relative(e, t) {
  if (validateString(e, "from"), validateString(t, "to"), e === t) return "";
  const n = win32.resolve(e), i = win32.resolve(t);
  if (n === i || (e = n.toLowerCase(), t = i.toLowerCase(), e === t)) return "";
  if (n.length !== e.length || i.length !== t.length) {
    const m = n.split("\\"), g = i.split("\\");
    m[m.length - 1] === "" && m.pop(), g[g.length - 1] === "" && g.pop();
    const _ = m.length, E = g.length, d = _ < E ? _ : E;
    let L;
    for (L = 0; L < d && m[L].toLowerCase() === g[L].toLowerCase(); L++) ;
    return L === 0 ? i : L === d ? E > d ? g.slice(L).join("\\") : _ > d ? "..\\".repeat(_ - 1 - L) + ".." : "" : "..\\".repeat(_ - L) + g.slice(L).join("\\");
  }
  let r = 0;
  for (; r < e.length && e.charCodeAt(r) === CHAR_BACKWARD_SLASH; ) r++;
  let s = e.length;
  for (; s - 1 > r && e.charCodeAt(s - 1) === CHAR_BACKWARD_SLASH; ) s--;
  const o = s - r;
  let l = 0;
  for (; l < t.length && t.charCodeAt(l) === CHAR_BACKWARD_SLASH; ) l++;
  let a = t.length;
  for (; a - 1 > l && t.charCodeAt(a - 1) === CHAR_BACKWARD_SLASH; ) a--;
  const u = a - l, f = o < u ? o : u;
  let c = -1, h = 0;
  for (; h < f; h++) {
    const m = e.charCodeAt(r + h);
    if (m !== t.charCodeAt(l + h)) break;
    m === CHAR_BACKWARD_SLASH && (c = h);
  }
  if (h !== f) {
    if (c === -1) return i;
  } else {
    if (u > f) {
      if (t.charCodeAt(l + h) === CHAR_BACKWARD_SLASH) return i.slice(l + h + 1);
      if (h === 2) return i.slice(l + h);
    }
    o > f && (e.charCodeAt(r + h) === CHAR_BACKWARD_SLASH ? c = h : h === 2 && (c = 3)), c === -1 && (c = 0);
  }
  let p = "";
  for (h = r + c + 1; h <= s; ++h) (h === s || e.charCodeAt(h) === CHAR_BACKWARD_SLASH) && (p += p.length === 0 ? ".." : "\\..");
  return l += c, p.length > 0 ? `${p}${i.slice(l, a)}` : (i.charCodeAt(l) === CHAR_BACKWARD_SLASH && ++l, i.slice(l, a));
}, toNamespacedPath(e) {
  if (typeof e != "string" || e.length === 0) return e;
  const t = win32.resolve(e);
  if (t.length <= 2) return e;
  if (t.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
    if (t.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
      const n = t.charCodeAt(2);
      if (n !== CHAR_QUESTION_MARK && n !== CHAR_DOT) return `\\\\?\\UNC\\${t.slice(2)}`;
    }
  } else if (isWindowsDeviceRoot(t.charCodeAt(0)) && t.charCodeAt(1) === CHAR_COLON && t.charCodeAt(2) === CHAR_BACKWARD_SLASH) return `\\\\?\\${t}`;
  return t;
}, dirname(e) {
  validateString(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let n = -1, i = 0;
  const r = e.charCodeAt(0);
  if (t === 1) return isPathSeparator(r) ? e : ".";
  if (isPathSeparator(r)) {
    if (n = i = 1, isPathSeparator(e.charCodeAt(1))) {
      let l = 2, a = l;
      for (; l < t && !isPathSeparator(e.charCodeAt(l)); ) l++;
      if (l < t && l !== a) {
        for (a = l; l < t && isPathSeparator(e.charCodeAt(l)); ) l++;
        if (l < t && l !== a) {
          for (a = l; l < t && !isPathSeparator(e.charCodeAt(l)); ) l++;
          if (l === t) return e;
          l !== a && (n = i = l + 1);
        }
      }
    }
  } else isWindowsDeviceRoot(r) && e.charCodeAt(1) === CHAR_COLON && (n = t > 2 && isPathSeparator(e.charCodeAt(2)) ? 3 : 2, i = n);
  let s = -1, o = true;
  for (let l = t - 1; l >= i; --l) if (isPathSeparator(e.charCodeAt(l))) {
    if (!o) {
      s = l;
      break;
    }
  } else o = false;
  if (s === -1) {
    if (n === -1) return ".";
    s = n;
  }
  return e.slice(0, s);
}, basename(e, t) {
  t !== void 0 && validateString(t, "suffix"), validateString(e, "path");
  let n = 0, i = -1, r = true, s;
  if (e.length >= 2 && isWindowsDeviceRoot(e.charCodeAt(0)) && e.charCodeAt(1) === CHAR_COLON && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, l = -1;
    for (s = e.length - 1; s >= n; --s) {
      const a = e.charCodeAt(s);
      if (isPathSeparator(a)) {
        if (!r) {
          n = s + 1;
          break;
        }
      } else l === -1 && (r = false, l = s + 1), o >= 0 && (a === t.charCodeAt(o) ? --o === -1 && (i = s) : (o = -1, i = l));
    }
    return n === i ? i = l : i === -1 && (i = e.length), e.slice(n, i);
  }
  for (s = e.length - 1; s >= n; --s) if (isPathSeparator(e.charCodeAt(s))) {
    if (!r) {
      n = s + 1;
      break;
    }
  } else i === -1 && (r = false, i = s + 1);
  return i === -1 ? "" : e.slice(n, i);
}, extname(e) {
  validateString(e, "path");
  let t = 0, n = -1, i = 0, r = -1, s = true, o = 0;
  e.length >= 2 && e.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(e.charCodeAt(0)) && (t = i = 2);
  for (let l = e.length - 1; l >= t; --l) {
    const a = e.charCodeAt(l);
    if (isPathSeparator(a)) {
      if (!s) {
        i = l + 1;
        break;
      }
      continue;
    }
    r === -1 && (s = false, r = l + 1), a === CHAR_DOT ? n === -1 ? n = l : o !== 1 && (o = 1) : n !== -1 && (o = -1);
  }
  return n === -1 || r === -1 || o === 0 || o === 1 && n === r - 1 && n === i + 1 ? "" : e.slice(n, r);
}, format: _format2.bind(null, "\\"), parse(e) {
  validateString(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const n = e.length;
  let i = 0, r = e.charCodeAt(0);
  if (n === 1) return isPathSeparator(r) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
  if (isPathSeparator(r)) {
    if (i = 1, isPathSeparator(e.charCodeAt(1))) {
      let c = 2, h = c;
      for (; c < n && !isPathSeparator(e.charCodeAt(c)); ) c++;
      if (c < n && c !== h) {
        for (h = c; c < n && isPathSeparator(e.charCodeAt(c)); ) c++;
        if (c < n && c !== h) {
          for (h = c; c < n && !isPathSeparator(e.charCodeAt(c)); ) c++;
          c === n ? i = c : c !== h && (i = c + 1);
        }
      }
    }
  } else if (isWindowsDeviceRoot(r) && e.charCodeAt(1) === CHAR_COLON) {
    if (n <= 2) return t.root = t.dir = e, t;
    if (i = 2, isPathSeparator(e.charCodeAt(2))) {
      if (n === 3) return t.root = t.dir = e, t;
      i = 3;
    }
  }
  i > 0 && (t.root = e.slice(0, i));
  let s = -1, o = i, l = -1, a = true, u = e.length - 1, f = 0;
  for (; u >= i; --u) {
    if (r = e.charCodeAt(u), isPathSeparator(r)) {
      if (!a) {
        o = u + 1;
        break;
      }
      continue;
    }
    l === -1 && (a = false, l = u + 1), r === CHAR_DOT ? s === -1 ? s = u : f !== 1 && (f = 1) : s !== -1 && (f = -1);
  }
  return l !== -1 && (s === -1 || f === 0 || f === 1 && s === l - 1 && s === o + 1 ? t.base = t.name = e.slice(o, l) : (t.name = e.slice(o, s), t.base = e.slice(o, l), t.ext = e.slice(s, l))), o > 0 && o !== i ? t.dir = e.slice(0, o - 1) : t.dir = t.root, t;
}, sep: "\\", delimiter: ";", win32: null, posix: null }, posixCwd = (() => {
  if (platformIsWin32) {
    const e = /\\/g;
    return () => {
      const t = cwd().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => cwd();
})(), posix = { resolve(...e) {
  let t = "", n = false;
  for (let i = e.length - 1; i >= 0 && !n; i--) {
    const r = e[i];
    validateString(r, `paths[${i}]`), r.length !== 0 && (t = `${r}/${t}`, n = r.charCodeAt(0) === CHAR_FORWARD_SLASH);
  }
  if (!n) {
    const i = posixCwd();
    t = `${i}/${t}`, n = i.charCodeAt(0) === CHAR_FORWARD_SLASH;
  }
  return t = normalizeString(t, !n, "/", isPosixPathSeparator), n ? `/${t}` : t.length > 0 ? t : ".";
}, normalize(e) {
  if (validateString(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === CHAR_FORWARD_SLASH, n = e.charCodeAt(e.length - 1) === CHAR_FORWARD_SLASH;
  return e = normalizeString(e, !t, "/", isPosixPathSeparator), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
}, isAbsolute(e) {
  return validateString(e, "path"), e.length > 0 && e.charCodeAt(0) === CHAR_FORWARD_SLASH;
}, join(...e) {
  if (e.length === 0) return ".";
  const t = [];
  for (let n = 0; n < e.length; ++n) {
    const i = e[n];
    validateString(i, "path"), i.length > 0 && t.push(i);
  }
  return t.length === 0 ? "." : posix.normalize(t.join("/"));
}, relative(e, t) {
  if (validateString(e, "from"), validateString(t, "to"), e === t || (e = posix.resolve(e), t = posix.resolve(t), e === t)) return "";
  const n = 1, i = e.length, r = i - n, s = 1, o = t.length - s, l = r < o ? r : o;
  let a = -1, u = 0;
  for (; u < l; u++) {
    const c = e.charCodeAt(n + u);
    if (c !== t.charCodeAt(s + u)) break;
    c === CHAR_FORWARD_SLASH && (a = u);
  }
  if (u === l) if (o > l) {
    if (t.charCodeAt(s + u) === CHAR_FORWARD_SLASH) return t.slice(s + u + 1);
    if (u === 0) return t.slice(s + u);
  } else r > l && (e.charCodeAt(n + u) === CHAR_FORWARD_SLASH ? a = u : u === 0 && (a = 0));
  let f = "";
  for (u = n + a + 1; u <= i; ++u) (u === i || e.charCodeAt(u) === CHAR_FORWARD_SLASH) && (f += f.length === 0 ? ".." : "/..");
  return `${f}${t.slice(s + a)}`;
}, toNamespacedPath(e) {
  return e;
}, dirname(e) {
  if (validateString(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let n = -1, i = true;
  for (let r = e.length - 1; r >= 1; --r) if (e.charCodeAt(r) === CHAR_FORWARD_SLASH) {
    if (!i) {
      n = r;
      break;
    }
  } else i = false;
  return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
}, basename(e, t) {
  t !== void 0 && validateString(t, "suffix"), validateString(e, "path");
  let n = 0, i = -1, r = true, s;
  if (t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, l = -1;
    for (s = e.length - 1; s >= 0; --s) {
      const a = e.charCodeAt(s);
      if (a === CHAR_FORWARD_SLASH) {
        if (!r) {
          n = s + 1;
          break;
        }
      } else l === -1 && (r = false, l = s + 1), o >= 0 && (a === t.charCodeAt(o) ? --o === -1 && (i = s) : (o = -1, i = l));
    }
    return n === i ? i = l : i === -1 && (i = e.length), e.slice(n, i);
  }
  for (s = e.length - 1; s >= 0; --s) if (e.charCodeAt(s) === CHAR_FORWARD_SLASH) {
    if (!r) {
      n = s + 1;
      break;
    }
  } else i === -1 && (r = false, i = s + 1);
  return i === -1 ? "" : e.slice(n, i);
}, extname(e) {
  validateString(e, "path");
  let t = -1, n = 0, i = -1, r = true, s = 0;
  for (let o = e.length - 1; o >= 0; --o) {
    const l = e[o];
    if (l === "/") {
      if (!r) {
        n = o + 1;
        break;
      }
      continue;
    }
    i === -1 && (r = false, i = o + 1), l === "." ? t === -1 ? t = o : s !== 1 && (s = 1) : t !== -1 && (s = -1);
  }
  return t === -1 || i === -1 || s === 0 || s === 1 && t === i - 1 && t === n + 1 ? "" : e.slice(t, i);
}, format: _format2.bind(null, "/"), parse(e) {
  validateString(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const n = e.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let i;
  n ? (t.root = "/", i = 1) : i = 0;
  let r = -1, s = 0, o = -1, l = true, a = e.length - 1, u = 0;
  for (; a >= i; --a) {
    const f = e.charCodeAt(a);
    if (f === CHAR_FORWARD_SLASH) {
      if (!l) {
        s = a + 1;
        break;
      }
      continue;
    }
    o === -1 && (l = false, o = a + 1), f === CHAR_DOT ? r === -1 ? r = a : u !== 1 && (u = 1) : r !== -1 && (u = -1);
  }
  if (o !== -1) {
    const f = s === 0 && n ? 1 : s;
    r === -1 || u === 0 || u === 1 && r === o - 1 && r === s + 1 ? t.base = t.name = e.slice(f, o) : (t.name = e.slice(f, r), t.base = e.slice(f, o), t.ext = e.slice(r, o));
  }
  return s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"), t;
}, sep: "/", delimiter: ":", win32: null, posix: null };
posix.win32 = win32.win32 = win32, posix.posix = win32.posix = posix;
var normalize = platformIsWin32 ? win32.normalize : posix.normalize, isAbsolute = platformIsWin32 ? win32.isAbsolute : posix.isAbsolute, join = platformIsWin32 ? win32.join : posix.join, resolve = platformIsWin32 ? win32.resolve : posix.resolve, relative = platformIsWin32 ? win32.relative : posix.relative, dirname = platformIsWin32 ? win32.dirname : posix.dirname, basename = platformIsWin32 ? win32.basename : posix.basename, extname = platformIsWin32 ? win32.extname : posix.extname, format = platformIsWin32 ? win32.format : posix.format, parse = platformIsWin32 ? win32.parse : posix.parse, toNamespacedPath = platformIsWin32 ? win32.toNamespacedPath : posix.toNamespacedPath, sep = platformIsWin32 ? win32.sep : posix.sep, delimiter = platformIsWin32 ? win32.delimiter : posix.delimiter, Schemas;
((e) => {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})(Schemas || (Schemas = {}));
var connectionTokenQueryName = "tkn", RemoteAuthoritiesImpl = class {
  constructor() {
    this._hosts = /* @__PURE__ */ Object.create(null), this._ports = /* @__PURE__ */ Object.create(null), this._connectionTokens = /* @__PURE__ */ Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
  }
  setPreferredWebSchema(e) {
    this._preferredWebSchema = e;
  }
  setDelegate(e) {
    this._delegate = e;
  }
  setServerRootPath(e, t) {
    this._serverRootPath = posix.join(t ?? "/", getServerProductSegment(e));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return posix.join(this._serverRootPath, Schemas.vscodeRemoteResource);
  }
  set(e, t, n) {
    this._hosts[e] = t, this._ports[e] = n;
  }
  setConnectionToken(e, t) {
    this._connectionTokens[e] = t;
  }
  getPreferredWebSchema() {
    return this._preferredWebSchema;
  }
  rewrite(e) {
    if (this._delegate) try {
      return this._delegate(e);
    } catch (o) {
      return onUnexpectedError(o), e;
    }
    const t = e.authority;
    let n = this._hosts[t];
    n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
    const i = this._ports[t], r = this._connectionTokens[t];
    let s = `path=${encodeURIComponent(e.path)}`;
    return typeof r == "string" && (s += `&${connectionTokenQueryName}=${encodeURIComponent(r)}`), URI.from({ scheme: isWeb ? this._preferredWebSchema : Schemas.vscodeRemoteResource, authority: `${n}:${i}`, path: this._remoteResourcesPath, query: s });
  }
}, RemoteAuthorities = new RemoteAuthoritiesImpl();
function getServerProductSegment(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var VSCODE_AUTHORITY = "vscode-app", _FileAccessImpl = class ne {
  asBrowserUri(t) {
    const n = this.toUri(t);
    return this.uriToBrowserUri(n);
  }
  uriToBrowserUri(t) {
    return t.scheme === Schemas.vscodeRemote ? RemoteAuthorities.rewrite(t) : t.scheme === Schemas.file && (isNative || webWorkerOrigin === `${Schemas.vscodeFileResource}://${ne.FALLBACK_AUTHORITY}`) ? t.with({ scheme: Schemas.vscodeFileResource, authority: t.authority || ne.FALLBACK_AUTHORITY, query: null, fragment: null }) : t;
  }
  asFileUri(t) {
    const n = this.toUri(t);
    return this.uriToFileUri(n);
  }
  uriToFileUri(t) {
    return t.scheme === Schemas.vscodeFileResource ? t.with({ scheme: Schemas.file, authority: t.authority !== ne.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
  }
  toUri(t) {
    if (URI.isUri(t)) return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const n = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(n)) return URI.joinPath(URI.parse(n, true), t);
      const i = join(n, t);
      return URI.file(i);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
_FileAccessImpl.FALLBACK_AUTHORITY = VSCODE_AUTHORITY;
var FileAccessImpl = _FileAccessImpl, FileAccess = new FileAccessImpl(), CacheControlheaders = Object.freeze({ "Cache-Control": "no-cache, no-store" }), DocumentPolicyheaders = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), COI;
((e) => {
  const t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const n = "vscode-coi";
  function i(s) {
    let o;
    typeof s == "string" ? o = new URL(s).searchParams : s instanceof URL ? o = s.searchParams : URI.isUri(s) && (o = new URL(s.toString(true)).searchParams);
    const l = o?.get(n);
    if (l) return t.get(l);
  }
  e.getHeadersFromQuery = i;
  function r(s, o, l) {
    if (!globalThis.crossOriginIsolated) return;
    const a = o && l ? "3" : l ? "2" : "1";
    s instanceof URLSearchParams ? s.set(n, a) : s[n] = a;
  }
  e.addSearchParam = r;
})(COI || (COI = {}));
var _schemePattern = /^\w[\w\d+.-]*$/, _singleSlashStart = /^\//, _doubleSlashStart = /^\/\//;
function _validateUri(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !_schemePattern.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!_singleSlashStart.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (_doubleSlashStart.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function _schemeFix(e, t) {
  return !e && !t ? "file" : e;
}
function _referenceResolution(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== _slash && (t = _slash + t) : t = _slash;
      break;
  }
  return t;
}
var _empty = "", _slash = "/", _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, URI = class ie {
  static isUri(t) {
    return t instanceof ie ? true : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : false;
  }
  constructor(t, n, i, r, s, o = false) {
    typeof t == "object" ? (this.scheme = t.scheme || _empty, this.authority = t.authority || _empty, this.path = t.path || _empty, this.query = t.query || _empty, this.fragment = t.fragment || _empty) : (this.scheme = _schemeFix(t, o), this.authority = n || _empty, this.path = _referenceResolution(this.scheme, i || _empty), this.query = r || _empty, this.fragment = s || _empty, _validateUri(this, o));
  }
  get fsPath() {
    return uriToFsPath(this, false);
  }
  with(t) {
    if (!t) return this;
    let { scheme: n, authority: i, path: r, query: s, fragment: o } = t;
    return n === void 0 ? n = this.scheme : n === null && (n = _empty), i === void 0 ? i = this.authority : i === null && (i = _empty), r === void 0 ? r = this.path : r === null && (r = _empty), s === void 0 ? s = this.query : s === null && (s = _empty), o === void 0 ? o = this.fragment : o === null && (o = _empty), n === this.scheme && i === this.authority && r === this.path && s === this.query && o === this.fragment ? this : new Uri(n, i, r, s, o);
  }
  static parse(t, n = false) {
    const i = _regexp.exec(t);
    return i ? new Uri(i[2] || _empty, percentDecode(i[4] || _empty), percentDecode(i[5] || _empty), percentDecode(i[7] || _empty), percentDecode(i[9] || _empty), n) : new Uri(_empty, _empty, _empty, _empty, _empty);
  }
  static file(t) {
    let n = _empty;
    if (isWindows && (t = t.replace(/\\/g, _slash)), t[0] === _slash && t[1] === _slash) {
      const i = t.indexOf(_slash, 2);
      i === -1 ? (n = t.substring(2), t = _slash) : (n = t.substring(2, i), t = t.substring(i) || _slash);
    }
    return new Uri("file", n, t, _empty, _empty);
  }
  static from(t, n) {
    return new Uri(t.scheme, t.authority, t.path, t.query, t.fragment, n);
  }
  static joinPath(t, ...n) {
    if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let i;
    return isWindows && t.scheme === "file" ? i = ie.file(win32.join(uriToFsPath(t, true), ...n)).path : i = posix.join(t.path, ...n), t.with({ path: i });
  }
  toString(t = false) {
    return _asFormatted(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof ie) return t;
      {
        const n = new Uri(t);
        return n._formatted = t.external ?? null, n._fsPath = t._sep === _pathSepMarker ? t.fsPath ?? null : null, n;
      }
    } else return t;
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
  toString(e = false) {
    return e ? _asFormatted(this, true) : (this._formatted || (this._formatted = _asFormatted(this, false)), this._formatted);
  }
  toJSON() {
    const e = { $mid: 1 };
    return this._fsPath && (e.fsPath = this._fsPath, e._sep = _pathSepMarker), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
  }
}, encodeTable = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function encodeURIComponentFast(e, t, n) {
  let i, r = -1;
  for (let s = 0; s < e.length; s++) {
    const o = e.charCodeAt(s);
    if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || n && o === 91 || n && o === 93 || n && o === 58) r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i !== void 0 && (i += e.charAt(s));
    else {
      i === void 0 && (i = e.substr(0, s));
      const l = encodeTable[o];
      l !== void 0 ? (r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i += l) : r === -1 && (r = s);
    }
  }
  return r !== -1 && (i += encodeURIComponent(e.substring(r))), i !== void 0 ? i : e;
}
function encodeURIComponentMinimal(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const i = e.charCodeAt(n);
    i === 35 || i === 63 ? (t === void 0 && (t = e.substr(0, n)), t += encodeTable[i]) : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function uriToFsPath(e, t) {
  let n;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, isWindows && (n = n.replace(/\//g, "\\")), n;
}
function _asFormatted(e, t) {
  const n = t ? encodeURIComponentMinimal : encodeURIComponentFast;
  let i = "", { scheme: r, authority: s, path: o, query: l, fragment: a } = e;
  if (r && (i += r, i += ":"), (s || r === "file") && (i += _slash, i += _slash), s) {
    let u = s.indexOf("@");
    if (u !== -1) {
      const f = s.substr(0, u);
      s = s.substr(u + 1), u = f.lastIndexOf(":"), u === -1 ? i += n(f, false, false) : (i += n(f.substr(0, u), false, false), i += ":", i += n(f.substr(u + 1), false, true)), i += "@";
    }
    s = s.toLowerCase(), u = s.lastIndexOf(":"), u === -1 ? i += n(s, false, true) : (i += n(s.substr(0, u), false, true), i += s.substr(u));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      const u = o.charCodeAt(1);
      u >= 65 && u <= 90 && (o = `/${String.fromCharCode(u + 32)}:${o.substr(3)}`);
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      const u = o.charCodeAt(0);
      u >= 65 && u <= 90 && (o = `${String.fromCharCode(u + 32)}:${o.substr(2)}`);
    }
    i += n(o, true, false);
  }
  return l && (i += "?", i += n(l, false, false)), a && (i += "#", i += t ? a : encodeURIComponentFast(a, false, false)), i;
}
function decodeURIComponentGraceful(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + decodeURIComponentGraceful(e.substr(3)) : e;
  }
}
var _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function percentDecode(e) {
  return e.match(_rEncodedAsHex) ? e.replace(_rEncodedAsHex, (t) => decodeURIComponentGraceful(t)) : e;
}
var CharCode = ((e) => (e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA", e))(CharCode || {}), Position = class H {
  constructor(t, n) {
    this.lineNumber = t, this.column = n;
  }
  with(t = this.lineNumber, n = this.column) {
    return t === this.lineNumber && n === this.column ? this : new H(t, n);
  }
  delta(t = 0, n = 0) {
    return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
  }
  equals(t) {
    return H.equals(this, t);
  }
  static equals(t, n) {
    return !t && !n ? true : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
  }
  isBefore(t) {
    return H.isBefore(this, t);
  }
  static isBefore(t, n) {
    return t.lineNumber < n.lineNumber ? true : n.lineNumber < t.lineNumber ? false : t.column < n.column;
  }
  isBeforeOrEqual(t) {
    return H.isBeforeOrEqual(this, t);
  }
  static isBeforeOrEqual(t, n) {
    return t.lineNumber < n.lineNumber ? true : n.lineNumber < t.lineNumber ? false : t.column <= n.column;
  }
  static compare(t, n) {
    const i = t.lineNumber | 0, r = n.lineNumber | 0;
    if (i === r) {
      const s = t.column | 0, o = n.column | 0;
      return s - o;
    }
    return i - r;
  }
  clone() {
    return new H(this.lineNumber, this.column);
  }
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  static lift(t) {
    return new H(t.lineNumber, t.column);
  }
  static isIPosition(t) {
    return t && typeof t.lineNumber == "number" && typeof t.column == "number";
  }
  toJSON() {
    return { lineNumber: this.lineNumber, column: this.column };
  }
}, Range = class M {
  constructor(t, n, i, r) {
    let s, o, l, a;
    t == null || typeof t == "number" || Number.isNaN(t) ? (s = t, o = n, l = i, a = r) : "startLineNumber" in t && "startColumn" in t ? (s = t.startLineNumber, o = t.startColumn, l = t.endLineNumber, a = t.endColumn) : (s = t.startLineNumber, o = 1, l = t.endLineNumberExclusive, a = 1), s > l || s === l && o > a ? (this.startLineNumber = l, this.startColumn = a, this.endLineNumber = s, this.endColumn = o) : (this.startLineNumber = s, this.startColumn = o, this.endLineNumber = l, this.endColumn = a);
  }
  asIRange() {
    return { startLineNumber: this.startLineNumber, startColumn: this.startColumn, endLineNumber: this.endLineNumber, endColumn: this.endColumn };
  }
  isEmpty() {
    return M.isEmpty(this);
  }
  static isEmpty(t) {
    return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
  }
  containsPosition(t) {
    return M.containsPosition(this, t);
  }
  static containsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
  }
  static strictContainsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
  }
  containsRange(t) {
    return M.containsRange(this, t);
  }
  static containsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
  }
  strictContainsRange(t) {
    return M.strictContainsRange(this, t);
  }
  static strictContainsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
  }
  plusRange(t) {
    return M.plusRange(this, t);
  }
  static getRangeAbove(t, n) {
    const i = Math.max(t.startLineNumber - n, 1), r = t.startLineNumber;
    return new M(i, t.startColumn, r, t.startColumn);
  }
  static getRangeOnBelow(t, n, i) {
    const r = t.endLineNumber, s = Math.min(t.endLineNumber + n, i);
    return new M(r, t.endColumn, s, t.endColumn);
  }
  static getExtendedRange(t, n, i) {
    const r = Math.max(t.startLineNumber - n, 0), s = Math.min(t.endLineNumber + n, i);
    return new M(r, t.startColumn, s, t.endColumn);
  }
  static plusRange(t, n) {
    let i, r, s, o;
    return n.startLineNumber < t.startLineNumber ? (i = n.startLineNumber, r = n.startColumn) : n.startLineNumber === t.startLineNumber ? (i = n.startLineNumber, r = Math.min(n.startColumn, t.startColumn)) : (i = t.startLineNumber, r = t.startColumn), n.endLineNumber > t.endLineNumber ? (s = n.endLineNumber, o = n.endColumn) : n.endLineNumber === t.endLineNumber ? (s = n.endLineNumber, o = Math.max(n.endColumn, t.endColumn)) : (s = t.endLineNumber, o = t.endColumn), new M(i, r, s, o);
  }
  intersectRanges(t) {
    return M.intersectRanges(this, t);
  }
  static intersectRanges(t, n) {
    let i = t.startLineNumber, r = t.startColumn, s = t.endLineNumber, o = t.endColumn;
    const l = n.startLineNumber, a = n.startColumn, u = n.endLineNumber, f = n.endColumn;
    return i < l ? (i = l, r = a) : i === l && (r = Math.max(r, a)), s > u ? (s = u, o = f) : s === u && (o = Math.min(o, f)), i > s || i === s && r > o ? null : new M(i, r, s, o);
  }
  static inverseEditRange(t, n) {
    return { startLineNumber: t.startLineNumber, startColumn: t.startColumn, endLineNumber: t.startLineNumber + n.split(`
`).length - 1, endColumn: n.lastIndexOf(`
`) === -1 ? t.startColumn + n.length : n.length - n.lastIndexOf(`
`) };
  }
  whereIs(t) {
    return t.endLineNumber < this.startLineNumber || t.endLineNumber === this.startLineNumber && t.endColumn <= this.startColumn ? "before" : t.startLineNumber > this.endLineNumber || t.startLineNumber === this.endLineNumber && t.startColumn >= this.endColumn ? "after" : "overlapping";
  }
  static rangeAfterEdit(t, n) {
    const i = M.lift(t).whereIs(n.range);
    switch (i) {
      case "overlapping":
        throw new Error("Range is overlapping. The range after edit is ambiguous.");
      case "after":
        return t;
      case "before": {
        const r = n.text.split(`
`).length - 1 - (n.range.endLineNumber - n.range.startLineNumber);
        if (n.range.endLineNumber < t.startLineNumber) return { startLineNumber: t.startLineNumber + r, startColumn: t.startColumn, endLineNumber: t.endLineNumber + r, endColumn: t.endColumn };
        {
          const s = n.text.lastIndexOf(`
`) === -1 ? n.text.length : n.text.length - n.text.lastIndexOf(`
`) - 1, o = n.range.startLineNumber === n.range.endLineNumber ? n.range.endColumn - n.range.startColumn : n.range.endColumn - 1, l = s - o;
          return { startLineNumber: t.startLineNumber + r, startColumn: t.startColumn + l, endLineNumber: t.endLineNumber + r, endColumn: t.startLineNumber === t.endLineNumber ? t.endColumn + l : t.endColumn };
        }
      }
      default: {
        const r = i;
        return t;
      }
    }
  }
  equalsRange(t) {
    return M.equalsRange(this, t);
  }
  static equalsRange(t, n) {
    return !t && !n ? true : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
  }
  getEndPosition() {
    return M.getEndPosition(this);
  }
  static getEndPosition(t) {
    return new Position(t.endLineNumber, t.endColumn);
  }
  getStartPosition() {
    return M.getStartPosition(this);
  }
  static getStartPosition(t) {
    return new Position(t.startLineNumber, t.startColumn);
  }
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  setEndPosition(t, n) {
    return new M(this.startLineNumber, this.startColumn, t, n);
  }
  setStartPosition(t, n) {
    return new M(t, n, this.endLineNumber, this.endColumn);
  }
  collapseToStart() {
    return M.collapseToStart(this);
  }
  static collapseToStart(t) {
    return new M(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
  }
  collapseToEnd() {
    return M.collapseToEnd(this);
  }
  static collapseToEnd(t) {
    return new M(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
  }
  delta(t) {
    return new M(this.startLineNumber + t, this.startColumn, this.endLineNumber + t, this.endColumn);
  }
  isSingleLine() {
    return this.startLineNumber === this.endLineNumber;
  }
  static fromPositions(t, n = t) {
    return new M(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static lift(t) {
    return t ? new M(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
  }
  static isIRange(t) {
    return t && typeof t.startLineNumber == "number" && typeof t.startColumn == "number" && typeof t.endLineNumber == "number" && typeof t.endColumn == "number";
  }
  static areIntersectingOrTouching(t, n) {
    return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn);
  }
  static areIntersecting(t, n) {
    return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn <= n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn <= t.startColumn);
  }
  static areOnlyIntersecting(t, n) {
    return !(t.endLineNumber < n.startLineNumber - 1 || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn - 1 || n.endLineNumber < t.startLineNumber - 1 || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn - 1);
  }
  static compareRangesUsingStarts(t, n) {
    if (t && n) {
      const s = t.startLineNumber | 0, o = n.startLineNumber | 0;
      if (s === o) {
        const l = t.startColumn | 0, a = n.startColumn | 0;
        if (l === a) {
          const u = t.endLineNumber | 0, f = n.endLineNumber | 0;
          if (u === f) {
            const c = t.endColumn | 0, h = n.endColumn | 0;
            return c - h;
          }
          return u - f;
        }
        return l - a;
      }
      return s - o;
    }
    return (t ? 1 : 0) - (n ? 1 : 0);
  }
  static compareRangesUsingEnds(t, n) {
    return t.endLineNumber === n.endLineNumber ? t.endColumn === n.endColumn ? t.startLineNumber === n.startLineNumber ? t.startColumn - n.startColumn : t.startLineNumber - n.startLineNumber : t.endColumn - n.endColumn : t.endLineNumber - n.endLineNumber;
  }
  static spansMultipleLines(t) {
    return t.endLineNumber > t.startLineNumber;
  }
  toJSON() {
    return this;
  }
};
function filter(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const [i, r] of Object.entries(e)) t(i, r) && (n[i] = r);
  return n;
}
var _hex = [];
for (let e = 0; e < 256; e++) _hex.push(e.toString(16).padStart(2, "0"));
var generateUuid = (function() {
  if (typeof crypto.randomUUID == "function") return crypto.randomUUID.bind(crypto);
  const e = new Uint8Array(16);
  return function() {
    crypto.getRandomValues(e), e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
    let n = 0, i = "";
    return i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i += "-", i += _hex[e[n++]], i += _hex[e[n++]], i += "-", i += _hex[e[n++]], i += _hex[e[n++]], i += "-", i += _hex[e[n++]], i += _hex[e[n++]], i += "-", i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i;
  };
})(), FindMatch = class {
  constructor(e, t) {
    this._findMatchBrand = void 0, this.range = e, this.matches = t;
  }
}, SearchData = class {
  constructor(e, t, n) {
    this.regex = e, this.wordSeparators = t, this.simpleSearch = n;
  }
}, ApplyEditsResult = class {
  constructor(e, t, n) {
    this.reverseEdits = e, this.changes = t, this.trimAutoWhitespaceLineNumbers = n;
  }
}, TreeNode = class {
  constructor(e, t) {
    this.piece = e, this.color = t, this.size_left = 0, this.lf_left = 0, this.parent = this, this.left = this, this.right = this;
  }
  next() {
    if (this.right !== SENTINEL) return leftest(this.right);
    let e = this;
    for (; e.parent !== SENTINEL && e.parent.left !== e; ) e = e.parent;
    return e.parent === SENTINEL ? SENTINEL : e.parent;
  }
  prev() {
    if (this.left !== SENTINEL) return righttest(this.left);
    let e = this;
    for (; e.parent !== SENTINEL && e.parent.right !== e; ) e = e.parent;
    return e.parent === SENTINEL ? SENTINEL : e.parent;
  }
  detach() {
    this.parent = null, this.left = null, this.right = null;
  }
}, SENTINEL = new TreeNode(null, 0);
SENTINEL.parent = SENTINEL, SENTINEL.left = SENTINEL, SENTINEL.right = SENTINEL, SENTINEL.color = 0;
function leftest(e) {
  for (; e.left !== SENTINEL; ) e = e.left;
  return e;
}
function righttest(e) {
  for (; e.right !== SENTINEL; ) e = e.right;
  return e;
}
function calculateSize(e) {
  return e === SENTINEL ? 0 : e.size_left + e.piece.length + calculateSize(e.right);
}
function calculateLF(e) {
  return e === SENTINEL ? 0 : e.lf_left + e.piece.lineFeedCnt + calculateLF(e.right);
}
function resetSentinel() {
  SENTINEL.parent = SENTINEL;
}
function leftRotate2(e, t) {
  const n = t.right;
  n.size_left += t.size_left + (t.piece ? t.piece.length : 0), n.lf_left += t.lf_left + (t.piece ? t.piece.lineFeedCnt : 0), t.right = n.left, n.left !== SENTINEL && (n.left.parent = t), n.parent = t.parent, t.parent === SENTINEL ? e.root = n : t.parent.left === t ? t.parent.left = n : t.parent.right = n, n.left = t, t.parent = n;
}
function rightRotate(e, t) {
  const n = t.left;
  t.left = n.right, n.right !== SENTINEL && (n.right.parent = t), n.parent = t.parent, t.size_left -= n.size_left + (n.piece ? n.piece.length : 0), t.lf_left -= n.lf_left + (n.piece ? n.piece.lineFeedCnt : 0), t.parent === SENTINEL ? e.root = n : t === t.parent.right ? t.parent.right = n : t.parent.left = n, n.right = t, t.parent = n;
}
function rbDelete(e, t) {
  let n, i;
  if (t.left === SENTINEL ? (i = t, n = i.right) : t.right === SENTINEL ? (i = t, n = i.left) : (i = leftest(t.right), n = i.right), i === e.root) {
    e.root = n, n.color = 0, t.detach(), resetSentinel(), e.root.parent = SENTINEL;
    return;
  }
  const r = i.color === 1;
  if (i === i.parent.left ? i.parent.left = n : i.parent.right = n, i === t ? (n.parent = i.parent, recomputeTreeMetadata(e, n)) : (i.parent === t ? n.parent = i : n.parent = i.parent, recomputeTreeMetadata(e, n), i.left = t.left, i.right = t.right, i.parent = t.parent, i.color = t.color, t === e.root ? e.root = i : t === t.parent.left ? t.parent.left = i : t.parent.right = i, i.left !== SENTINEL && (i.left.parent = i), i.right !== SENTINEL && (i.right.parent = i), i.size_left = t.size_left, i.lf_left = t.lf_left, recomputeTreeMetadata(e, i)), t.detach(), n.parent.left === n) {
    const o = calculateSize(n), l = calculateLF(n);
    if (o !== n.parent.size_left || l !== n.parent.lf_left) {
      const a = o - n.parent.size_left, u = l - n.parent.lf_left;
      n.parent.size_left = o, n.parent.lf_left = l, updateTreeMetadata(e, n.parent, a, u);
    }
  }
  if (recomputeTreeMetadata(e, n.parent), r) {
    resetSentinel();
    return;
  }
  let s;
  for (; n !== e.root && n.color === 0; ) n === n.parent.left ? (s = n.parent.right, s.color === 1 && (s.color = 0, n.parent.color = 1, leftRotate2(e, n.parent), s = n.parent.right), s.left.color === 0 && s.right.color === 0 ? (s.color = 1, n = n.parent) : (s.right.color === 0 && (s.left.color = 0, s.color = 1, rightRotate(e, s), s = n.parent.right), s.color = n.parent.color, n.parent.color = 0, s.right.color = 0, leftRotate2(e, n.parent), n = e.root)) : (s = n.parent.left, s.color === 1 && (s.color = 0, n.parent.color = 1, rightRotate(e, n.parent), s = n.parent.left), s.left.color === 0 && s.right.color === 0 ? (s.color = 1, n = n.parent) : (s.left.color === 0 && (s.right.color = 0, s.color = 1, leftRotate2(e, s), s = n.parent.left), s.color = n.parent.color, n.parent.color = 0, s.left.color = 0, rightRotate(e, n.parent), n = e.root));
  n.color = 0, resetSentinel();
}
function fixInsert(e, t) {
  for (recomputeTreeMetadata(e, t); t !== e.root && t.parent.color === 1; ) if (t.parent === t.parent.parent.left) {
    const n = t.parent.parent.right;
    n.color === 1 ? (t.parent.color = 0, n.color = 0, t.parent.parent.color = 1, t = t.parent.parent) : (t === t.parent.right && (t = t.parent, leftRotate2(e, t)), t.parent.color = 0, t.parent.parent.color = 1, rightRotate(e, t.parent.parent));
  } else {
    const n = t.parent.parent.left;
    n.color === 1 ? (t.parent.color = 0, n.color = 0, t.parent.parent.color = 1, t = t.parent.parent) : (t === t.parent.left && (t = t.parent, rightRotate(e, t)), t.parent.color = 0, t.parent.parent.color = 1, leftRotate2(e, t.parent.parent));
  }
  e.root.color = 0;
}
function updateTreeMetadata(e, t, n, i) {
  for (; t !== e.root && t !== SENTINEL; ) t.parent.left === t && (t.parent.size_left += n, t.parent.lf_left += i), t = t.parent;
}
function recomputeTreeMetadata(e, t) {
  let n = 0, i = 0;
  if (t !== e.root) {
    for (; t !== e.root && t === t.parent.right; ) t = t.parent;
    if (t !== e.root) for (t = t.parent, n = calculateSize(t.left) - t.size_left, i = calculateLF(t.left) - t.lf_left, t.size_left += n, t.lf_left += i; t !== e.root && (n !== 0 || i !== 0); ) t.parent.left === t && (t.parent.size_left += n, t.parent.lf_left += i), t = t.parent;
  }
}
var minute = 60, hour = minute * 60, day = hour * 24, week = day * 7, month = day * 30, year = day * 365, safeIntl = { DateTimeFormat(e, t) {
  try {
    return new Intl.DateTimeFormat(e, t);
  } catch {
    return new Intl.DateTimeFormat(void 0, t);
  }
}, Collator(e, t) {
  try {
    return new Intl.Collator(e, t);
  } catch {
    return new Intl.Collator(void 0, t);
  }
}, Segmenter(e, t) {
  try {
    return new Intl.Segmenter(e, t);
  } catch {
    return new Intl.Segmenter(void 0, t);
  }
}, Locale(e, t) {
  try {
    return new Intl.Locale(e, t);
  } catch {
    return new Intl.Locale(LANGUAGE_DEFAULT, t);
  }
} };
function toUint8(e) {
  return e < 0 ? 0 : e > 255 ? 255 : e | 0;
}
function toUint32(e) {
  return e < 0 ? 0 : e > 4294967295 ? 4294967295 : e | 0;
}
var CharacterClassifier = class Ae {
  constructor(t) {
    const n = toUint8(t);
    this._defaultValue = n, this._asciiMap = Ae._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
  }
  static _createAsciiMap(t) {
    const n = new Uint8Array(256);
    return n.fill(t), n;
  }
  set(t, n) {
    const i = toUint8(n);
    t >= 0 && t < 256 ? this._asciiMap[t] = i : this._map.set(t, i);
  }
  get(t) {
    return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
  }
  clear() {
    this._asciiMap.fill(this._defaultValue), this._map.clear();
  }
}, WordCharacterClassifier = class extends CharacterClassifier {
  constructor(e, t) {
    super(0), this._segmenter = null, this._cachedLine = null, this._cachedSegments = [], this.intlSegmenterLocales = t, this.intlSegmenterLocales.length > 0 ? this._segmenter = safeIntl.Segmenter(this.intlSegmenterLocales, { granularity: "word" }) : this._segmenter = null;
    for (let n = 0, i = e.length; n < i; n++) this.set(e.charCodeAt(n), 2);
    this.set(CharCode.Space, 1), this.set(CharCode.Tab, 1);
  }
  findPrevIntlWordBeforeOrAtOffset(e, t) {
    let n = null;
    for (const i of this._getIntlSegmenterWordsOnLine(e)) {
      if (i.index > t) break;
      n = i;
    }
    return n;
  }
  findNextIntlWordAtOrAfterOffset(e, t) {
    for (const n of this._getIntlSegmenterWordsOnLine(e)) if (!(n.index < t)) return n;
    return null;
  }
  _getIntlSegmenterWordsOnLine(e) {
    return this._segmenter ? this._cachedLine === e ? this._cachedSegments : (this._cachedLine = e, this._cachedSegments = this._filterWordSegments(this._segmenter.segment(e)), this._cachedSegments) : [];
  }
  _filterWordSegments(e) {
    const t = [];
    for (const n of e) this._isWordLike(n) && t.push(n);
    return t;
  }
  _isWordLike(e) {
    return !!e.isWordLike;
  }
}, wordClassifierCache = new LRUCache(10);
function getMapForWordSeparators(e, t) {
  const n = `${e}/${t.join(",")}`;
  let i = wordClassifierCache.get(n);
  return i || (i = new WordCharacterClassifier(e, t), wordClassifierCache.set(n, i)), i;
}
var SearchParams = class {
  constructor(e, t, n, i) {
    this.searchString = e, this.isRegex = t, this.matchCase = n, this.wordSeparators = i;
  }
  parseSearchRequest() {
    if (this.searchString === "") return null;
    let e;
    this.isRegex ? e = isMultilineRegexSource(this.searchString) : e = this.searchString.indexOf(`
`) >= 0;
    let t = null;
    try {
      t = createRegExp(this.searchString, this.isRegex, { matchCase: this.matchCase, wholeWord: false, multiline: e, global: true, unicode: true });
    } catch {
      return null;
    }
    if (!t) return null;
    let n = !this.isRegex && !e;
    return n && this.searchString.toLowerCase() !== this.searchString.toUpperCase() && (n = this.matchCase), new SearchData(t, this.wordSeparators ? getMapForWordSeparators(this.wordSeparators, []) : null, n ? this.searchString : null);
  }
};
function isMultilineRegexSource(e) {
  if (!e || e.length === 0) return false;
  for (let t = 0, n = e.length; t < n; t++) {
    const i = e.charCodeAt(t);
    if (i === CharCode.LineFeed) return true;
    if (i === CharCode.Backslash) {
      if (t++, t >= n) break;
      const r = e.charCodeAt(t);
      if (r === CharCode.n || r === CharCode.r || r === CharCode.W) return true;
    }
    if (i === CharCode.OpenSquareBracket && t + 5 < n && e.charCodeAt(t + 1) === CharCode.Backslash) {
      const r = e.charCodeAt(t + 2);
      if ((r === CharCode.s || r === CharCode.S || r === CharCode.d || r === CharCode.D) && e.charCodeAt(t + 3) === CharCode.Backslash) {
        const s = e.charCodeAt(t + 4);
        if ((r === CharCode.s && s === CharCode.S || r === CharCode.S && s === CharCode.s || r === CharCode.d && s === CharCode.D || r === CharCode.D && s === CharCode.d) && e.charCodeAt(t + 5) === CharCode.CloseSquareBracket) return true;
      }
    }
  }
  return false;
}
function createFindMatch(e, t, n) {
  if (!n) return new FindMatch(e, null);
  const i = [];
  for (let r = 0, s = t.length; r < s; r++) i[r] = t[r];
  return new FindMatch(e, i);
}
function leftIsWordBounday(e, t, n, i, r) {
  if (i === 0) return true;
  const s = t.charCodeAt(i - 1);
  if (e.get(s) !== 0 || s === CharCode.CarriageReturn || s === CharCode.LineFeed) return true;
  if (r > 0) {
    const o = t.charCodeAt(i);
    if (e.get(o) !== 0) return true;
  }
  return false;
}
function rightIsWordBounday(e, t, n, i, r) {
  if (i + r === n) return true;
  const s = t.charCodeAt(i + r);
  if (e.get(s) !== 0 || s === CharCode.CarriageReturn || s === CharCode.LineFeed) return true;
  if (r > 0) {
    const o = t.charCodeAt(i + r - 1);
    if (e.get(o) !== 0) return true;
  }
  return false;
}
function isValidMatch(e, t, n, i, r) {
  return leftIsWordBounday(e, t, n, i, r) && rightIsWordBounday(e, t, n, i, r);
}
var Searcher = class {
  constructor(e, t) {
    this._wordSeparators = e, this._searchRegex = t, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
  }
  reset(e) {
    this._searchRegex.lastIndex = e, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
  }
  next(e) {
    const t = e.length;
    let n;
    do {
      if (this._prevMatchStartIndex + this._prevMatchLength === t || (n = this._searchRegex.exec(e), !n)) return null;
      const i = n.index, r = n[0].length;
      if (i === this._prevMatchStartIndex && r === this._prevMatchLength) {
        if (r === 0) {
          getNextCodePoint(e, t, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
          continue;
        }
        return null;
      }
      if (this._prevMatchStartIndex = i, this._prevMatchLength = r, !this._wordSeparators || isValidMatch(this._wordSeparators, e, t, i, r)) return n;
    } while (n);
    return null;
  }
}, AverageBufferSize = 65535;
function createUintArray(e) {
  let t;
  return e[e.length - 1] < 65536 ? t = new Uint16Array(e.length) : t = new Uint32Array(e.length), t.set(e, 0), t;
}
var LineStarts = class {
  constructor(e, t, n, i, r) {
    this.lineStarts = e, this.cr = t, this.lf = n, this.crlf = i, this.isBasicASCII = r;
  }
};
function createLineStartsFast(e, t = true) {
  const n = [0];
  let i = 1;
  for (let r = 0, s = e.length; r < s; r++) {
    const o = e.charCodeAt(r);
    o === CharCode.CarriageReturn ? r + 1 < s && e.charCodeAt(r + 1) === CharCode.LineFeed ? (n[i++] = r + 2, r++) : n[i++] = r + 1 : o === CharCode.LineFeed && (n[i++] = r + 1);
  }
  return t ? createUintArray(n) : n;
}
function createLineStarts(e, t) {
  e.length = 0, e[0] = 0;
  let n = 1, i = 0, r = 0, s = 0, o = true;
  for (let a = 0, u = t.length; a < u; a++) {
    const f = t.charCodeAt(a);
    f === CharCode.CarriageReturn ? a + 1 < u && t.charCodeAt(a + 1) === CharCode.LineFeed ? (s++, e[n++] = a + 2, a++) : (i++, e[n++] = a + 1) : f === CharCode.LineFeed ? (r++, e[n++] = a + 1) : o && f !== CharCode.Tab && (f < 32 || f > 126) && (o = false);
  }
  const l = new LineStarts(createUintArray(e), i, r, s, o);
  return e.length = 0, l;
}
var Piece = class {
  constructor(e, t, n, i, r) {
    this.bufferIndex = e, this.start = t, this.end = n, this.lineFeedCnt = i, this.length = r;
  }
}, StringBuffer = class {
  constructor(e, t) {
    this.buffer = e, this.lineStarts = t;
  }
}, PieceTreeSnapshot = class {
  constructor(e, t) {
    this._pieces = [], this._tree = e, this._BOM = t, this._index = 0, e.root !== SENTINEL && e.iterate(e.root, (n) => (n !== SENTINEL && this._pieces.push(n.piece), true));
  }
  read() {
    return this._pieces.length === 0 ? this._index === 0 ? (this._index++, this._BOM) : null : this._index > this._pieces.length - 1 ? null : this._index === 0 ? this._BOM + this._tree.getPieceContent(this._pieces[this._index++]) : this._tree.getPieceContent(this._pieces[this._index++]);
  }
}, PieceTreeSearchCache = class {
  constructor(e) {
    this._limit = e, this._cache = [];
  }
  get(e) {
    for (let t = this._cache.length - 1; t >= 0; t--) {
      const n = this._cache[t];
      if (n.nodeStartOffset <= e && n.nodeStartOffset + n.node.piece.length >= e) return n;
    }
    return null;
  }
  get2(e) {
    for (let t = this._cache.length - 1; t >= 0; t--) {
      const n = this._cache[t];
      if (n.nodeStartLineNumber && n.nodeStartLineNumber < e && n.nodeStartLineNumber + n.node.piece.lineFeedCnt >= e) return n;
    }
    return null;
  }
  set(e) {
    this._cache.length >= this._limit && this._cache.shift(), this._cache.push(e);
  }
  validate(e) {
    let t = false;
    const n = this._cache;
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      if (r.node.parent === null || r.nodeStartOffset >= e) {
        n[i] = null, t = true;
        continue;
      }
    }
    if (t) {
      const i = [];
      for (const r of n) r !== null && i.push(r);
      this._cache = i;
    }
  }
}, PieceTreeBase = class {
  constructor(e, t, n) {
    this.create(e, t, n);
  }
  create(e, t, n) {
    this._buffers = [new StringBuffer("", [0])], this._lastChangeBufferPos = { line: 0, column: 0 }, this.root = SENTINEL, this._lineCnt = 1, this._length = 0, this._EOL = t, this._EOLLength = t.length, this._EOLNormalized = n;
    let i = null;
    for (let r = 0, s = e.length; r < s; r++) if (e[r].buffer.length > 0) {
      e[r].lineStarts || (e[r].lineStarts = createLineStartsFast(e[r].buffer));
      const o = new Piece(r + 1, { line: 0, column: 0 }, { line: e[r].lineStarts.length - 1, column: e[r].buffer.length - e[r].lineStarts[e[r].lineStarts.length - 1] }, e[r].lineStarts.length - 1, e[r].buffer.length);
      this._buffers.push(e[r]), i = this.rbInsertRight(i, o);
    }
    this._searchCache = new PieceTreeSearchCache(1), this._lastVisitedLine = { lineNumber: 0, value: "" }, this.computeBufferMetadata();
  }
  normalizeEOL(e) {
    const t = AverageBufferSize, n = t - Math.floor(t / 3), i = n * 2;
    let r = "", s = 0;
    const o = [];
    if (this.iterate(this.root, (l) => {
      const a = this.getNodeContent(l), u = a.length;
      if (s <= n || s + u < i) return r += a, s += u, true;
      const f = r.replace(/\r\n|\r|\n/g, e);
      return o.push(new StringBuffer(f, createLineStartsFast(f))), r = a, s = u, true;
    }), s > 0) {
      const l = r.replace(/\r\n|\r|\n/g, e);
      o.push(new StringBuffer(l, createLineStartsFast(l)));
    }
    this.create(o, e, true);
  }
  getEOL() {
    return this._EOL;
  }
  setEOL(e) {
    this._EOL = e, this._EOLLength = this._EOL.length, this.normalizeEOL(e);
  }
  createSnapshot(e) {
    return new PieceTreeSnapshot(this, e);
  }
  equal(e) {
    if (this.getLength() !== e.getLength() || this.getLineCount() !== e.getLineCount()) return false;
    let t = 0;
    return this.iterate(this.root, (i) => {
      if (i === SENTINEL) return true;
      const r = this.getNodeContent(i), s = r.length, o = e.nodeAt(t), l = e.nodeAt(t + s), a = e.getValueInRange2(o, l);
      return t += s, r === a;
    });
  }
  getOffsetAt(e, t) {
    let n = 0, i = this.root;
    for (; i !== SENTINEL; ) if (i.left !== SENTINEL && i.lf_left + 1 >= e) i = i.left;
    else if (i.lf_left + i.piece.lineFeedCnt + 1 >= e) {
      n += i.size_left;
      const r = this.getAccumulatedValue(i, e - i.lf_left - 2);
      return n += r + t - 1;
    } else e -= i.lf_left + i.piece.lineFeedCnt, n += i.size_left + i.piece.length, i = i.right;
    return n;
  }
  getPositionAt(e) {
    e = Math.floor(e), e = Math.max(0, e);
    let t = this.root, n = 0;
    const i = e;
    for (; t !== SENTINEL; ) if (t.size_left !== 0 && t.size_left >= e) t = t.left;
    else if (t.size_left + t.piece.length >= e) {
      const r = this.getIndexOf(t, e - t.size_left);
      if (n += t.lf_left + r.index, r.index === 0) {
        const s = this.getOffsetAt(n + 1, 1), o = i - s;
        return new Position(n + 1, o + 1);
      }
      return new Position(n + 1, r.remainder + 1);
    } else if (e -= t.size_left + t.piece.length, n += t.lf_left + t.piece.lineFeedCnt, t.right === SENTINEL) {
      const r = this.getOffsetAt(n + 1, 1), s = i - e - r;
      return new Position(n + 1, s + 1);
    } else t = t.right;
    return new Position(1, 1);
  }
  getValueInRange(e, t) {
    if (e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn) return "";
    const n = this.nodeAt2(e.startLineNumber, e.startColumn), i = this.nodeAt2(e.endLineNumber, e.endColumn), r = this.getValueInRange2(n, i);
    return t ? t !== this._EOL || !this._EOLNormalized ? r.replace(/\r\n|\r|\n/g, t) : t === this.getEOL() && this._EOLNormalized ? r : r.replace(/\r\n|\r|\n/g, t) : r;
  }
  getValueInRange2(e, t) {
    if (e.node === t.node) {
      const o = e.node, l = this._buffers[o.piece.bufferIndex].buffer, a = this.offsetInBuffer(o.piece.bufferIndex, o.piece.start);
      return l.substring(a + e.remainder, a + t.remainder);
    }
    let n = e.node;
    const i = this._buffers[n.piece.bufferIndex].buffer, r = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
    let s = i.substring(r + e.remainder, r + n.piece.length);
    for (n = n.next(); n !== SENTINEL; ) {
      const o = this._buffers[n.piece.bufferIndex].buffer, l = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
      if (n === t.node) {
        s += o.substring(l, l + t.remainder);
        break;
      } else s += o.substr(l, n.piece.length);
      n = n.next();
    }
    return s;
  }
  getLinesContent() {
    const e = [];
    let t = 0, n = "", i = false;
    return this.iterate(this.root, (r) => {
      if (r === SENTINEL) return true;
      const s = r.piece;
      let o = s.length;
      if (o === 0) return true;
      const l = this._buffers[s.bufferIndex].buffer, a = this._buffers[s.bufferIndex].lineStarts, u = s.start.line, f = s.end.line;
      let c = a[u] + s.start.column;
      if (i && (l.charCodeAt(c) === CharCode.LineFeed && (c++, o--), e[t++] = n, n = "", i = false, o === 0)) return true;
      if (u === f) return !this._EOLNormalized && l.charCodeAt(c + o - 1) === CharCode.CarriageReturn ? (i = true, n += l.substr(c, o - 1)) : n += l.substr(c, o), true;
      n += this._EOLNormalized ? l.substring(c, Math.max(c, a[u + 1] - this._EOLLength)) : l.substring(c, a[u + 1]).replace(/(\r\n|\r|\n)$/, ""), e[t++] = n;
      for (let h = u + 1; h < f; h++) n = this._EOLNormalized ? l.substring(a[h], a[h + 1] - this._EOLLength) : l.substring(a[h], a[h + 1]).replace(/(\r\n|\r|\n)$/, ""), e[t++] = n;
      return !this._EOLNormalized && l.charCodeAt(a[f] + s.end.column - 1) === CharCode.CarriageReturn ? (i = true, s.end.column === 0 ? t-- : n = l.substr(a[f], s.end.column - 1)) : n = l.substr(a[f], s.end.column), true;
    }), i && (e[t++] = n, n = ""), e[t++] = n, e;
  }
  getLength() {
    return this._length;
  }
  getLineCount() {
    return this._lineCnt;
  }
  getLineContent(e) {
    return this._lastVisitedLine.lineNumber === e ? this._lastVisitedLine.value : (this._lastVisitedLine.lineNumber = e, e === this._lineCnt ? this._lastVisitedLine.value = this.getLineRawContent(e) : this._EOLNormalized ? this._lastVisitedLine.value = this.getLineRawContent(e, this._EOLLength) : this._lastVisitedLine.value = this.getLineRawContent(e).replace(/(\r\n|\r|\n)$/, ""), this._lastVisitedLine.value);
  }
  _getCharCode(e) {
    if (e.remainder === e.node.piece.length) {
      const t = e.node.next();
      if (!t) return 0;
      const n = this._buffers[t.piece.bufferIndex], i = this.offsetInBuffer(t.piece.bufferIndex, t.piece.start);
      return n.buffer.charCodeAt(i);
    } else {
      const t = this._buffers[e.node.piece.bufferIndex], i = this.offsetInBuffer(e.node.piece.bufferIndex, e.node.piece.start) + e.remainder;
      return t.buffer.charCodeAt(i);
    }
  }
  getLineCharCode(e, t) {
    const n = this.nodeAt2(e, t + 1);
    return this._getCharCode(n);
  }
  getLineLength(e) {
    if (e === this.getLineCount()) {
      const t = this.getOffsetAt(e, 1);
      return this.getLength() - t;
    }
    return this.getOffsetAt(e + 1, 1) - this.getOffsetAt(e, 1) - this._EOLLength;
  }
  getCharCode(e) {
    const t = this.nodeAt(e);
    return this._getCharCode(t);
  }
  getNearestChunk(e) {
    const t = this.nodeAt(e);
    if (t.remainder === t.node.piece.length) {
      const n = t.node.next();
      if (!n || n === SENTINEL) return "";
      const i = this._buffers[n.piece.bufferIndex], r = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
      return i.buffer.substring(r, r + n.piece.length);
    } else {
      const n = this._buffers[t.node.piece.bufferIndex], i = this.offsetInBuffer(t.node.piece.bufferIndex, t.node.piece.start), r = i + t.remainder, s = i + t.node.piece.length;
      return n.buffer.substring(r, s);
    }
  }
  findMatchesInNode(e, t, n, i, r, s, o, l, a, u, f) {
    const c = this._buffers[e.piece.bufferIndex], h = this.offsetInBuffer(e.piece.bufferIndex, e.piece.start), p = this.offsetInBuffer(e.piece.bufferIndex, r), m = this.offsetInBuffer(e.piece.bufferIndex, s);
    let g;
    const _ = { line: 0, column: 0 };
    let E, d;
    t._wordSeparators ? (E = c.buffer.substring(p, m), d = (L) => L + p, t.reset(0)) : (E = c.buffer, d = (L) => L, t.reset(p));
    do
      if (g = t.next(E), g) {
        if (d(g.index) >= m) return u;
        this.positionInBuffer(e, d(g.index) - h, _);
        const L = this.getLineFeedCnt(e.piece.bufferIndex, r, _), O = _.line === r.line ? _.column - r.column + i : _.column + 1, b = O + g[0].length;
        if (f[u++] = createFindMatch(new Range(n + L, O, n + L, b), g, l), d(g.index) + g[0].length >= m || u >= a) return u;
      }
    while (g);
    return u;
  }
  findMatchesLineByLine(e, t, n, i) {
    const r = [];
    let s = 0;
    const o = new Searcher(t.wordSeparators, t.regex);
    let l = this.nodeAt2(e.startLineNumber, e.startColumn);
    if (l === null) return [];
    const a = this.nodeAt2(e.endLineNumber, e.endColumn);
    if (a === null) return [];
    let u = this.positionInBuffer(l.node, l.remainder);
    const f = this.positionInBuffer(a.node, a.remainder);
    if (l.node === a.node) return this.findMatchesInNode(l.node, o, e.startLineNumber, e.startColumn, u, f, t, n, i, s, r), r;
    let c = e.startLineNumber, h = l.node;
    for (; h !== a.node; ) {
      const m = this.getLineFeedCnt(h.piece.bufferIndex, u, h.piece.end);
      if (m >= 1) {
        const _ = this._buffers[h.piece.bufferIndex].lineStarts, E = this.offsetInBuffer(h.piece.bufferIndex, h.piece.start), d = _[u.line + m], L = c === e.startLineNumber ? e.startColumn : 1;
        if (s = this.findMatchesInNode(h, o, c, L, u, this.positionInBuffer(h, d - E), t, n, i, s, r), s >= i) return r;
        c += m;
      }
      const g = c === e.startLineNumber ? e.startColumn - 1 : 0;
      if (c === e.endLineNumber) {
        const _ = this.getLineContent(c).substring(g, e.endColumn - 1);
        return s = this._findMatchesInLine(t, o, _, e.endLineNumber, g, s, r, n, i), r;
      }
      if (s = this._findMatchesInLine(t, o, this.getLineContent(c).substr(g), c, g, s, r, n, i), s >= i) return r;
      c++, l = this.nodeAt2(c, 1), h = l.node, u = this.positionInBuffer(l.node, l.remainder);
    }
    if (c === e.endLineNumber) {
      const m = c === e.startLineNumber ? e.startColumn - 1 : 0, g = this.getLineContent(c).substring(m, e.endColumn - 1);
      return s = this._findMatchesInLine(t, o, g, e.endLineNumber, m, s, r, n, i), r;
    }
    const p = c === e.startLineNumber ? e.startColumn : 1;
    return s = this.findMatchesInNode(a.node, o, c, p, u, f, t, n, i, s, r), r;
  }
  _findMatchesInLine(e, t, n, i, r, s, o, l, a) {
    const u = e.wordSeparators;
    if (!l && e.simpleSearch) {
      const c = e.simpleSearch, h = c.length, p = n.length;
      let m = -h;
      for (; (m = n.indexOf(c, m + h)) !== -1; ) if ((!u || isValidMatch(u, n, p, m, h)) && (o[s++] = new FindMatch(new Range(i, m + 1 + r, i, m + 1 + h + r), null), s >= a)) return s;
      return s;
    }
    let f;
    t.reset(0);
    do
      if (f = t.next(n), f && (o[s++] = createFindMatch(new Range(i, f.index + 1 + r, i, f.index + 1 + f[0].length + r), f, l), s >= a)) return s;
    while (f);
    return s;
  }
  insert(e, t, n = false) {
    if (this._EOLNormalized = this._EOLNormalized && n, this._lastVisitedLine.lineNumber = 0, this._lastVisitedLine.value = "", this.root !== SENTINEL) {
      const { node: i, remainder: r, nodeStartOffset: s } = this.nodeAt(e), o = i.piece, l = o.bufferIndex, a = this.positionInBuffer(i, r);
      if (i.piece.bufferIndex === 0 && o.end.line === this._lastChangeBufferPos.line && o.end.column === this._lastChangeBufferPos.column && s + o.length === e && t.length < AverageBufferSize) {
        this.appendToNode(i, t), this.computeBufferMetadata();
        return;
      }
      if (s === e) this.insertContentToNodeLeft(t, i), this._searchCache.validate(e);
      else if (s + i.piece.length > e) {
        const u = [];
        let f = new Piece(o.bufferIndex, a, o.end, this.getLineFeedCnt(o.bufferIndex, a, o.end), this.offsetInBuffer(l, o.end) - this.offsetInBuffer(l, a));
        if (this.shouldCheckCRLF() && this.endWithCR(t) && this.nodeCharCodeAt(i, r) === 10) {
          const m = { line: f.start.line + 1, column: 0 };
          f = new Piece(f.bufferIndex, m, f.end, this.getLineFeedCnt(f.bufferIndex, m, f.end), f.length - 1), t += `
`;
        }
        if (this.shouldCheckCRLF() && this.startWithLF(t)) if (this.nodeCharCodeAt(i, r - 1) === 13) {
          const m = this.positionInBuffer(i, r - 1);
          this.deleteNodeTail(i, m), t = "\r" + t, i.piece.length === 0 && u.push(i);
        } else this.deleteNodeTail(i, a);
        else this.deleteNodeTail(i, a);
        const c = this.createNewPieces(t);
        f.length > 0 && this.rbInsertRight(i, f);
        let h = i;
        for (let p = 0; p < c.length; p++) h = this.rbInsertRight(h, c[p]);
        this.deleteNodes(u);
      } else this.insertContentToNodeRight(t, i);
    } else {
      const i = this.createNewPieces(t);
      let r = this.rbInsertLeft(null, i[0]);
      for (let s = 1; s < i.length; s++) r = this.rbInsertRight(r, i[s]);
    }
    this.computeBufferMetadata();
  }
  delete(e, t) {
    if (this._lastVisitedLine.lineNumber = 0, this._lastVisitedLine.value = "", t <= 0 || this.root === SENTINEL) return;
    const n = this.nodeAt(e), i = this.nodeAt(e + t), r = n.node, s = i.node;
    if (r === s) {
      const c = this.positionInBuffer(r, n.remainder), h = this.positionInBuffer(r, i.remainder);
      if (n.nodeStartOffset === e) {
        if (t === r.piece.length) {
          const p = r.next();
          rbDelete(this, r), this.validateCRLFWithPrevNode(p), this.computeBufferMetadata();
          return;
        }
        this.deleteNodeHead(r, h), this._searchCache.validate(e), this.validateCRLFWithPrevNode(r), this.computeBufferMetadata();
        return;
      }
      if (n.nodeStartOffset + r.piece.length === e + t) {
        this.deleteNodeTail(r, c), this.validateCRLFWithNextNode(r), this.computeBufferMetadata();
        return;
      }
      this.shrinkNode(r, c, h), this.computeBufferMetadata();
      return;
    }
    const o = [], l = this.positionInBuffer(r, n.remainder);
    this.deleteNodeTail(r, l), this._searchCache.validate(e), r.piece.length === 0 && o.push(r);
    const a = this.positionInBuffer(s, i.remainder);
    this.deleteNodeHead(s, a), s.piece.length === 0 && o.push(s);
    const u = r.next();
    for (let c = u; c !== SENTINEL && c !== s; c = c.next()) o.push(c);
    const f = r.piece.length === 0 ? r.prev() : r;
    this.deleteNodes(o), this.validateCRLFWithNextNode(f), this.computeBufferMetadata();
  }
  insertContentToNodeLeft(e, t) {
    const n = [];
    if (this.shouldCheckCRLF() && this.endWithCR(e) && this.startWithLF(t)) {
      const s = t.piece, o = { line: s.start.line + 1, column: 0 }, l = new Piece(s.bufferIndex, o, s.end, this.getLineFeedCnt(s.bufferIndex, o, s.end), s.length - 1);
      t.piece = l, e += `
`, updateTreeMetadata(this, t, -1, -1), t.piece.length === 0 && n.push(t);
    }
    const i = this.createNewPieces(e);
    let r = this.rbInsertLeft(t, i[i.length - 1]);
    for (let s = i.length - 2; s >= 0; s--) r = this.rbInsertLeft(r, i[s]);
    this.validateCRLFWithPrevNode(r), this.deleteNodes(n);
  }
  insertContentToNodeRight(e, t) {
    this.adjustCarriageReturnFromNext(e, t) && (e += `
`);
    const n = this.createNewPieces(e), i = this.rbInsertRight(t, n[0]);
    let r = i;
    for (let s = 1; s < n.length; s++) r = this.rbInsertRight(r, n[s]);
    this.validateCRLFWithPrevNode(i);
  }
  positionInBuffer(e, t, n) {
    const i = e.piece, r = e.piece.bufferIndex, s = this._buffers[r].lineStarts, l = s[i.start.line] + i.start.column + t;
    let a = i.start.line, u = i.end.line, f = 0, c = 0, h = 0;
    for (; a <= u && (f = a + (u - a) / 2 | 0, h = s[f], f !== u); ) if (c = s[f + 1], l < h) u = f - 1;
    else if (l >= c) a = f + 1;
    else break;
    return n ? (n.line = f, n.column = l - h, null) : { line: f, column: l - h };
  }
  getLineFeedCnt(e, t, n) {
    if (n.column === 0) return n.line - t.line;
    const i = this._buffers[e].lineStarts;
    if (n.line === i.length - 1) return n.line - t.line;
    const r = i[n.line + 1], s = i[n.line] + n.column;
    if (r > s + 1) return n.line - t.line;
    const o = s - 1;
    return this._buffers[e].buffer.charCodeAt(o) === 13 ? n.line - t.line + 1 : n.line - t.line;
  }
  offsetInBuffer(e, t) {
    return this._buffers[e].lineStarts[t.line] + t.column;
  }
  deleteNodes(e) {
    for (let t = 0; t < e.length; t++) rbDelete(this, e[t]);
  }
  createNewPieces(e) {
    if (e.length > AverageBufferSize) {
      const u = [];
      for (; e.length > AverageBufferSize; ) {
        const c = e.charCodeAt(AverageBufferSize - 1);
        let h;
        c === CharCode.CarriageReturn || c >= 55296 && c <= 56319 ? (h = e.substring(0, AverageBufferSize - 1), e = e.substring(AverageBufferSize - 1)) : (h = e.substring(0, AverageBufferSize), e = e.substring(AverageBufferSize));
        const p = createLineStartsFast(h);
        u.push(new Piece(this._buffers.length, { line: 0, column: 0 }, { line: p.length - 1, column: h.length - p[p.length - 1] }, p.length - 1, h.length)), this._buffers.push(new StringBuffer(h, p));
      }
      const f = createLineStartsFast(e);
      return u.push(new Piece(this._buffers.length, { line: 0, column: 0 }, { line: f.length - 1, column: e.length - f[f.length - 1] }, f.length - 1, e.length)), this._buffers.push(new StringBuffer(e, f)), u;
    }
    let t = this._buffers[0].buffer.length;
    const n = createLineStartsFast(e, false);
    let i = this._lastChangeBufferPos;
    if (this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 1] === t && t !== 0 && this.startWithLF(e) && this.endWithCR(this._buffers[0].buffer)) {
      this._lastChangeBufferPos = { line: this._lastChangeBufferPos.line, column: this._lastChangeBufferPos.column + 1 }, i = this._lastChangeBufferPos;
      for (let u = 0; u < n.length; u++) n[u] += t + 1;
      this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(n.slice(1)), this._buffers[0].buffer += "_" + e, t += 1;
    } else {
      if (t !== 0) for (let u = 0; u < n.length; u++) n[u] += t;
      this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(n.slice(1)), this._buffers[0].buffer += e;
    }
    const r = this._buffers[0].buffer.length, s = this._buffers[0].lineStarts.length - 1, o = r - this._buffers[0].lineStarts[s], l = { line: s, column: o }, a = new Piece(0, i, l, this.getLineFeedCnt(0, i, l), r - t);
    return this._lastChangeBufferPos = l, [a];
  }
  getLinesRawContent() {
    return this.getContentOfSubTree(this.root);
  }
  getLineRawContent(e, t = 0) {
    let n = this.root, i = "";
    const r = this._searchCache.get2(e);
    if (r) {
      n = r.node;
      const s = this.getAccumulatedValue(n, e - r.nodeStartLineNumber - 1), o = this._buffers[n.piece.bufferIndex].buffer, l = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
      if (r.nodeStartLineNumber + n.piece.lineFeedCnt === e) i = o.substring(l + s, l + n.piece.length);
      else {
        const a = this.getAccumulatedValue(n, e - r.nodeStartLineNumber);
        return o.substring(l + s, l + a - t);
      }
    } else {
      let s = 0;
      const o = e;
      for (; n !== SENTINEL; ) if (n.left !== SENTINEL && n.lf_left >= e - 1) n = n.left;
      else if (n.lf_left + n.piece.lineFeedCnt > e - 1) {
        const l = this.getAccumulatedValue(n, e - n.lf_left - 2), a = this.getAccumulatedValue(n, e - n.lf_left - 1), u = this._buffers[n.piece.bufferIndex].buffer, f = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
        return s += n.size_left, this._searchCache.set({ node: n, nodeStartOffset: s, nodeStartLineNumber: o - (e - 1 - n.lf_left) }), u.substring(f + l, f + a - t);
      } else if (n.lf_left + n.piece.lineFeedCnt === e - 1) {
        const l = this.getAccumulatedValue(n, e - n.lf_left - 2), a = this._buffers[n.piece.bufferIndex].buffer, u = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
        i = a.substring(u + l, u + n.piece.length);
        break;
      } else e -= n.lf_left + n.piece.lineFeedCnt, s += n.size_left + n.piece.length, n = n.right;
    }
    for (n = n.next(); n !== SENTINEL; ) {
      const s = this._buffers[n.piece.bufferIndex].buffer;
      if (n.piece.lineFeedCnt > 0) {
        const o = this.getAccumulatedValue(n, 0), l = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
        return i += s.substring(l, l + o - t), i;
      } else {
        const o = this.offsetInBuffer(n.piece.bufferIndex, n.piece.start);
        i += s.substr(o, n.piece.length);
      }
      n = n.next();
    }
    return i;
  }
  computeBufferMetadata() {
    let e = this.root, t = 1, n = 0;
    for (; e !== SENTINEL; ) t += e.lf_left + e.piece.lineFeedCnt, n += e.size_left + e.piece.length, e = e.right;
    this._lineCnt = t, this._length = n, this._searchCache.validate(this._length);
  }
  getIndexOf(e, t) {
    const n = e.piece, i = this.positionInBuffer(e, t), r = i.line - n.start.line;
    if (this.offsetInBuffer(n.bufferIndex, n.end) - this.offsetInBuffer(n.bufferIndex, n.start) === t) {
      const s = this.getLineFeedCnt(e.piece.bufferIndex, n.start, i);
      if (s !== r) return { index: s, remainder: 0 };
    }
    return { index: r, remainder: i.column };
  }
  getAccumulatedValue(e, t) {
    if (t < 0) return 0;
    const n = e.piece, i = this._buffers[n.bufferIndex].lineStarts, r = n.start.line + t + 1;
    return r > n.end.line ? i[n.end.line] + n.end.column - i[n.start.line] - n.start.column : i[r] - i[n.start.line] - n.start.column;
  }
  deleteNodeTail(e, t) {
    const n = e.piece, i = n.lineFeedCnt, r = this.offsetInBuffer(n.bufferIndex, n.end), s = t, o = this.offsetInBuffer(n.bufferIndex, s), l = this.getLineFeedCnt(n.bufferIndex, n.start, s), a = l - i, u = o - r, f = n.length + u;
    e.piece = new Piece(n.bufferIndex, n.start, s, l, f), updateTreeMetadata(this, e, u, a);
  }
  deleteNodeHead(e, t) {
    const n = e.piece, i = n.lineFeedCnt, r = this.offsetInBuffer(n.bufferIndex, n.start), s = t, o = this.getLineFeedCnt(n.bufferIndex, s, n.end), l = this.offsetInBuffer(n.bufferIndex, s), a = o - i, u = r - l, f = n.length + u;
    e.piece = new Piece(n.bufferIndex, s, n.end, o, f), updateTreeMetadata(this, e, u, a);
  }
  shrinkNode(e, t, n) {
    const i = e.piece, r = i.start, s = i.end, o = i.length, l = i.lineFeedCnt, a = t, u = this.getLineFeedCnt(i.bufferIndex, i.start, a), f = this.offsetInBuffer(i.bufferIndex, t) - this.offsetInBuffer(i.bufferIndex, r);
    e.piece = new Piece(i.bufferIndex, i.start, a, u, f), updateTreeMetadata(this, e, f - o, u - l);
    const c = new Piece(i.bufferIndex, n, s, this.getLineFeedCnt(i.bufferIndex, n, s), this.offsetInBuffer(i.bufferIndex, s) - this.offsetInBuffer(i.bufferIndex, n)), h = this.rbInsertRight(e, c);
    this.validateCRLFWithPrevNode(h);
  }
  appendToNode(e, t) {
    this.adjustCarriageReturnFromNext(t, e) && (t += `
`);
    const n = this.shouldCheckCRLF() && this.startWithLF(t) && this.endWithCR(e), i = this._buffers[0].buffer.length;
    this._buffers[0].buffer += t;
    const r = createLineStartsFast(t, false);
    for (let h = 0; h < r.length; h++) r[h] += i;
    if (n) {
      const h = this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 2];
      this._buffers[0].lineStarts.pop(), this._lastChangeBufferPos = { line: this._lastChangeBufferPos.line - 1, column: i - h };
    }
    this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(r.slice(1));
    const s = this._buffers[0].lineStarts.length - 1, o = this._buffers[0].buffer.length - this._buffers[0].lineStarts[s], l = { line: s, column: o }, a = e.piece.length + t.length, u = e.piece.lineFeedCnt, f = this.getLineFeedCnt(0, e.piece.start, l), c = f - u;
    e.piece = new Piece(e.piece.bufferIndex, e.piece.start, l, f, a), this._lastChangeBufferPos = l, updateTreeMetadata(this, e, t.length, c);
  }
  nodeAt(e) {
    let t = this.root;
    const n = this._searchCache.get(e);
    if (n) return { node: n.node, nodeStartOffset: n.nodeStartOffset, remainder: e - n.nodeStartOffset };
    let i = 0;
    for (; t !== SENTINEL; ) if (t.size_left > e) t = t.left;
    else if (t.size_left + t.piece.length >= e) {
      i += t.size_left;
      const r = { node: t, remainder: e - t.size_left, nodeStartOffset: i };
      return this._searchCache.set(r), r;
    } else e -= t.size_left + t.piece.length, i += t.size_left + t.piece.length, t = t.right;
    return null;
  }
  nodeAt2(e, t) {
    let n = this.root, i = 0;
    for (; n !== SENTINEL; ) if (n.left !== SENTINEL && n.lf_left >= e - 1) n = n.left;
    else if (n.lf_left + n.piece.lineFeedCnt > e - 1) {
      const r = this.getAccumulatedValue(n, e - n.lf_left - 2), s = this.getAccumulatedValue(n, e - n.lf_left - 1);
      return i += n.size_left, { node: n, remainder: Math.min(r + t - 1, s), nodeStartOffset: i };
    } else if (n.lf_left + n.piece.lineFeedCnt === e - 1) {
      const r = this.getAccumulatedValue(n, e - n.lf_left - 2);
      if (r + t - 1 <= n.piece.length) return { node: n, remainder: r + t - 1, nodeStartOffset: i };
      t -= n.piece.length - r;
      break;
    } else e -= n.lf_left + n.piece.lineFeedCnt, i += n.size_left + n.piece.length, n = n.right;
    for (n = n.next(); n !== SENTINEL; ) {
      if (n.piece.lineFeedCnt > 0) {
        const r = this.getAccumulatedValue(n, 0), s = this.offsetOfNode(n);
        return { node: n, remainder: Math.min(t - 1, r), nodeStartOffset: s };
      } else if (n.piece.length >= t - 1) {
        const r = this.offsetOfNode(n);
        return { node: n, remainder: t - 1, nodeStartOffset: r };
      } else t -= n.piece.length;
      n = n.next();
    }
    return null;
  }
  nodeCharCodeAt(e, t) {
    if (e.piece.lineFeedCnt < 1) return -1;
    const n = this._buffers[e.piece.bufferIndex], i = this.offsetInBuffer(e.piece.bufferIndex, e.piece.start) + t;
    return n.buffer.charCodeAt(i);
  }
  offsetOfNode(e) {
    if (!e) return 0;
    let t = e.size_left;
    for (; e !== this.root; ) e.parent.right === e && (t += e.parent.size_left + e.parent.piece.length), e = e.parent;
    return t;
  }
  shouldCheckCRLF() {
    return !(this._EOLNormalized && this._EOL === `
`);
  }
  startWithLF(e) {
    if (typeof e == "string") return e.charCodeAt(0) === 10;
    if (e === SENTINEL || e.piece.lineFeedCnt === 0) return false;
    const t = e.piece, n = this._buffers[t.bufferIndex].lineStarts, i = t.start.line, r = n[i] + t.start.column;
    return i === n.length - 1 || n[i + 1] > r + 1 ? false : this._buffers[t.bufferIndex].buffer.charCodeAt(r) === 10;
  }
  endWithCR(e) {
    return typeof e == "string" ? e.charCodeAt(e.length - 1) === 13 : e === SENTINEL || e.piece.lineFeedCnt === 0 ? false : this.nodeCharCodeAt(e, e.piece.length - 1) === 13;
  }
  validateCRLFWithPrevNode(e) {
    if (this.shouldCheckCRLF() && this.startWithLF(e)) {
      const t = e.prev();
      this.endWithCR(t) && this.fixCRLF(t, e);
    }
  }
  validateCRLFWithNextNode(e) {
    if (this.shouldCheckCRLF() && this.endWithCR(e)) {
      const t = e.next();
      this.startWithLF(t) && this.fixCRLF(e, t);
    }
  }
  fixCRLF(e, t) {
    const n = [], i = this._buffers[e.piece.bufferIndex].lineStarts;
    let r;
    e.piece.end.column === 0 ? r = { line: e.piece.end.line - 1, column: i[e.piece.end.line] - i[e.piece.end.line - 1] - 1 } : r = { line: e.piece.end.line, column: e.piece.end.column - 1 };
    const s = e.piece.length - 1, o = e.piece.lineFeedCnt - 1;
    e.piece = new Piece(e.piece.bufferIndex, e.piece.start, r, o, s), updateTreeMetadata(this, e, -1, -1), e.piece.length === 0 && n.push(e);
    const l = { line: t.piece.start.line + 1, column: 0 }, a = t.piece.length - 1, u = this.getLineFeedCnt(t.piece.bufferIndex, l, t.piece.end);
    t.piece = new Piece(t.piece.bufferIndex, l, t.piece.end, u, a), updateTreeMetadata(this, t, -1, -1), t.piece.length === 0 && n.push(t);
    const f = this.createNewPieces(`\r
`);
    this.rbInsertRight(e, f[0]);
    for (let c = 0; c < n.length; c++) rbDelete(this, n[c]);
  }
  adjustCarriageReturnFromNext(e, t) {
    if (this.shouldCheckCRLF() && this.endWithCR(e)) {
      const n = t.next();
      if (this.startWithLF(n)) {
        if (e += `
`, n.piece.length === 1) rbDelete(this, n);
        else {
          const i = n.piece, r = { line: i.start.line + 1, column: 0 }, s = i.length - 1, o = this.getLineFeedCnt(i.bufferIndex, r, i.end);
          n.piece = new Piece(i.bufferIndex, r, i.end, o, s), updateTreeMetadata(this, n, -1, -1);
        }
        return true;
      }
    }
    return false;
  }
  iterate(e, t) {
    if (e === SENTINEL) return t(SENTINEL);
    const n = this.iterate(e.left, t);
    return n && t(e) && this.iterate(e.right, t);
  }
  getNodeContent(e) {
    if (e === SENTINEL) return "";
    const t = this._buffers[e.piece.bufferIndex], n = e.piece, i = this.offsetInBuffer(n.bufferIndex, n.start), r = this.offsetInBuffer(n.bufferIndex, n.end);
    return t.buffer.substring(i, r);
  }
  getPieceContent(e) {
    const t = this._buffers[e.bufferIndex], n = this.offsetInBuffer(e.bufferIndex, e.start), i = this.offsetInBuffer(e.bufferIndex, e.end);
    return t.buffer.substring(n, i);
  }
  rbInsertRight(e, t) {
    const n = new TreeNode(t, 1);
    if (n.left = SENTINEL, n.right = SENTINEL, n.parent = SENTINEL, n.size_left = 0, n.lf_left = 0, this.root === SENTINEL) this.root = n, n.color = 0;
    else if (e.right === SENTINEL) e.right = n, n.parent = e;
    else {
      const r = leftest(e.right);
      r.left = n, n.parent = r;
    }
    return fixInsert(this, n), n;
  }
  rbInsertLeft(e, t) {
    const n = new TreeNode(t, 1);
    if (n.left = SENTINEL, n.right = SENTINEL, n.parent = SENTINEL, n.size_left = 0, n.lf_left = 0, this.root === SENTINEL) this.root = n, n.color = 0;
    else if (e.left === SENTINEL) e.left = n, n.parent = e;
    else {
      const i = righttest(e.left);
      i.right = n, n.parent = i;
    }
    return fixInsert(this, n), n;
  }
  getContentOfSubTree(e) {
    let t = "";
    return this.iterate(e, (n) => (t += this.getNodeContent(n), true)), t;
  }
};
function countEOL(e) {
  let t = 0, n = 0, i = 0, r = 0;
  for (let s = 0, o = e.length; s < o; s++) {
    const l = e.charCodeAt(s);
    l === CharCode.CarriageReturn ? (t === 0 && (n = s), t++, s + 1 < o && e.charCodeAt(s + 1) === CharCode.LineFeed ? (r |= 2, s++) : r |= 3, i = s + 1) : l === CharCode.LineFeed && (r |= 1, t === 0 && (n = s), t++, i = s + 1);
  }
  return t === 0 && (n = e.length), [t, n, e.length - i, r];
}
var _utf16LE_TextDecoder;
function getUTF16LE_TextDecoder() {
  return _utf16LE_TextDecoder || (_utf16LE_TextDecoder = new TextDecoder("UTF-16LE")), _utf16LE_TextDecoder;
}
function decodeUTF16LE(e, t, n) {
  const i = new Uint16Array(e.buffer, t, n);
  return n > 0 && (i[0] === 65279 || i[0] === 65534) ? compatDecodeUTF16LE(e, t, n) : getUTF16LE_TextDecoder().decode(i);
}
function compatDecodeUTF16LE(e, t, n) {
  const i = [];
  let r = 0;
  for (let s = 0; s < n; s++) {
    const o = readUInt16LE(e, t);
    t += 2, i[r++] = String.fromCharCode(o);
  }
  return i.join("");
}
function escapeNewLine(e) {
  return e.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
}
var TextChange = class V {
  constructor(t, n, i, r) {
    this.oldPosition = t, this.oldText = n, this.newPosition = i, this.newText = r;
  }
  get oldLength() {
    return this.oldText.length;
  }
  get oldEnd() {
    return this.oldPosition + this.oldText.length;
  }
  get newLength() {
    return this.newText.length;
  }
  get newEnd() {
    return this.newPosition + this.newText.length;
  }
  shift(t) {
    return new V(this.oldPosition + t, this.oldText, this.newPosition + t, this.newText);
  }
  toString() {
    return this.oldText.length === 0 ? `(insert@${this.oldPosition} "${escapeNewLine(this.newText)}")` : this.newText.length === 0 ? `(delete@${this.oldPosition} "${escapeNewLine(this.oldText)}")` : `(replace@${this.oldPosition} "${escapeNewLine(this.oldText)}" with "${escapeNewLine(this.newText)}")`;
  }
  static _writeStringSize(t) {
    return 4 + 2 * t.length;
  }
  static _writeString(t, n, i) {
    const r = n.length;
    writeUInt32BE(t, r, i), i += 4;
    for (let s = 0; s < r; s++) writeUInt16LE(t, n.charCodeAt(s), i), i += 2;
    return i;
  }
  static _readString(t, n) {
    const i = readUInt32BE(t, n);
    return n += 4, decodeUTF16LE(t, n, i);
  }
  writeSize() {
    return 8 + V._writeStringSize(this.oldText) + V._writeStringSize(this.newText);
  }
  write(t, n) {
    return writeUInt32BE(t, this.oldPosition, n), n += 4, writeUInt32BE(t, this.newPosition, n), n += 4, n = V._writeString(t, this.oldText, n), n = V._writeString(t, this.newText, n), n;
  }
  static read(t, n, i) {
    const r = readUInt32BE(t, n);
    n += 4;
    const s = readUInt32BE(t, n);
    n += 4;
    const o = V._readString(t, n);
    n += V._writeStringSize(o);
    const l = V._readString(t, n);
    return n += V._writeStringSize(l), i.push(new V(r, o, s, l)), n;
  }
}, PieceTreeTextBuffer = class J extends Disposable {
  constructor(t, n, i, r, s, o, l) {
    super(), this._onDidChangeContent = this._register(new Emitter()), this.onDidChangeContent = this._onDidChangeContent.event, this._BOM = n, this._mightContainNonBasicASCII = !o, this._mightContainRTL = r, this._mightContainUnusualLineTerminators = s, this._pieceTree = new PieceTreeBase(t, i, l);
  }
  equals(t) {
    return !(t instanceof J) || this._BOM !== t._BOM || this.getEOL() !== t.getEOL() ? false : this._pieceTree.equal(t._pieceTree);
  }
  mightContainRTL() {
    return this._mightContainRTL;
  }
  mightContainUnusualLineTerminators() {
    return this._mightContainUnusualLineTerminators;
  }
  resetMightContainUnusualLineTerminators() {
    this._mightContainUnusualLineTerminators = false;
  }
  mightContainNonBasicASCII() {
    return this._mightContainNonBasicASCII;
  }
  getBOM() {
    return this._BOM;
  }
  getEOL() {
    return this._pieceTree.getEOL();
  }
  createSnapshot(t) {
    return this._pieceTree.createSnapshot(t ? this._BOM : "");
  }
  getOffsetAt(t, n) {
    return this._pieceTree.getOffsetAt(t, n);
  }
  getPositionAt(t) {
    return this._pieceTree.getPositionAt(t);
  }
  getRangeAt(t, n) {
    const i = t + n, r = this.getPositionAt(t), s = this.getPositionAt(i);
    return new Range(r.lineNumber, r.column, s.lineNumber, s.column);
  }
  getValueInRange(t, n = 0) {
    if (t.isEmpty()) return "";
    const i = this._getEndOfLine(n);
    return this._pieceTree.getValueInRange(t, i);
  }
  getValueLengthInRange(t, n = 0) {
    if (t.isEmpty()) return 0;
    if (t.startLineNumber === t.endLineNumber) return t.endColumn - t.startColumn;
    const i = this.getOffsetAt(t.startLineNumber, t.startColumn), r = this.getOffsetAt(t.endLineNumber, t.endColumn);
    let s = 0;
    const o = this._getEndOfLine(n), l = this.getEOL();
    if (o.length !== l.length) {
      const a = o.length - l.length, u = t.endLineNumber - t.startLineNumber;
      s = a * u;
    }
    return r - i + s;
  }
  getCharacterCountInRange(t, n = 0) {
    if (this._mightContainNonBasicASCII) {
      let i = 0;
      const r = t.startLineNumber, s = t.endLineNumber;
      for (let o = r; o <= s; o++) {
        const l = this.getLineContent(o), a = o === r ? t.startColumn - 1 : 0, u = o === s ? t.endColumn - 1 : l.length;
        for (let f = a; f < u; f++) isHighSurrogate(l.charCodeAt(f)) ? (i = i + 1, f = f + 1) : i = i + 1;
      }
      return i += this._getEndOfLine(n).length * (s - r), i;
    }
    return this.getValueLengthInRange(t, n);
  }
  getNearestChunk(t) {
    return this._pieceTree.getNearestChunk(t);
  }
  getLength() {
    return this._pieceTree.getLength();
  }
  getLineCount() {
    return this._pieceTree.getLineCount();
  }
  getLinesContent() {
    return this._pieceTree.getLinesContent();
  }
  getLineContent(t) {
    return this._pieceTree.getLineContent(t);
  }
  getLineCharCode(t, n) {
    return this._pieceTree.getLineCharCode(t, n);
  }
  getCharCode(t) {
    return this._pieceTree.getCharCode(t);
  }
  getLineLength(t) {
    return this._pieceTree.getLineLength(t);
  }
  getLineMinColumn(t) {
    return 1;
  }
  getLineMaxColumn(t) {
    return this.getLineLength(t) + 1;
  }
  getLineFirstNonWhitespaceColumn(t) {
    const n = firstNonWhitespaceIndex(this.getLineContent(t));
    return n === -1 ? 0 : n + 1;
  }
  getLineLastNonWhitespaceColumn(t) {
    const n = lastNonWhitespaceIndex(this.getLineContent(t));
    return n === -1 ? 0 : n + 2;
  }
  _getEndOfLine(t) {
    switch (t) {
      case 1:
        return `
`;
      case 2:
        return `\r
`;
      case 0:
        return this.getEOL();
      default:
        throw new Error("Unknown EOL preference");
    }
  }
  setEOL(t) {
    this._pieceTree.setEOL(t);
  }
  applyEdits(t, n, i) {
    let r = this._mightContainRTL, s = this._mightContainUnusualLineTerminators, o = this._mightContainNonBasicASCII, l = true, a = [];
    for (let g = 0; g < t.length; g++) {
      const _ = t[g];
      l && _._isTracked && (l = false);
      const E = _.range;
      if (_.text) {
        let x = true;
        o || (x = !isBasicASCII(_.text), o = x), !r && x && (r = containsRTL(_.text)), !s && x && (s = containsUnusualLineTerminators(_.text));
      }
      let d = "", L = 0, O = 0, b = 0;
      if (_.text) {
        let x;
        [L, O, b, x] = countEOL(_.text);
        const S = this.getEOL();
        x === 0 || x === (S === `\r
` ? 2 : 1) ? d = _.text : d = _.text.replace(/\r\n|\r|\n/g, S);
      }
      a[g] = { sortIndex: g, identifier: _.identifier || null, range: E, rangeOffset: this.getOffsetAt(E.startLineNumber, E.startColumn), rangeLength: this.getValueLengthInRange(E), text: d, eolCount: L, firstLineLength: O, lastLineLength: b, forceMoveMarkers: !!_.forceMoveMarkers, isAutoWhitespaceEdit: _.isAutoWhitespaceEdit || false };
    }
    a.sort(J._sortOpsAscending);
    let u = false;
    for (let g = 0, _ = a.length - 1; g < _; g++) {
      const E = a[g].range.getEndPosition(), d = a[g + 1].range.getStartPosition();
      if (d.isBeforeOrEqual(E)) {
        if (d.isBefore(E)) throw new Error("Overlapping ranges are not allowed!");
        u = true;
      }
    }
    l && (a = this._reduceOperations(a));
    const f = i || n ? J._getInverseEditRanges(a) : [], c = [];
    if (n) for (let g = 0; g < a.length; g++) {
      const _ = a[g], E = f[g];
      if (_.isAutoWhitespaceEdit && _.range.isEmpty()) for (let d = E.startLineNumber; d <= E.endLineNumber; d++) {
        let L = "";
        d === E.startLineNumber && (L = this.getLineContent(_.range.startLineNumber), firstNonWhitespaceIndex(L) !== -1) || c.push({ lineNumber: d, oldContent: L });
      }
    }
    let h = null;
    if (i) {
      let g = 0;
      h = [];
      for (let _ = 0; _ < a.length; _++) {
        const E = a[_], d = f[_], L = this.getValueInRange(E.range), O = E.rangeOffset + g;
        g += E.text.length - L.length, h[_] = { sortIndex: E.sortIndex, identifier: E.identifier, range: d, text: L, textChange: new TextChange(E.rangeOffset, L, O, E.text) };
      }
      u || h.sort((_, E) => _.sortIndex - E.sortIndex);
    }
    this._mightContainRTL = r, this._mightContainUnusualLineTerminators = s, this._mightContainNonBasicASCII = o;
    const p = this._doApplyEdits(a);
    let m = null;
    if (n && c.length > 0) {
      c.sort((g, _) => _.lineNumber - g.lineNumber), m = [];
      for (let g = 0, _ = c.length; g < _; g++) {
        const E = c[g].lineNumber;
        if (g > 0 && c[g - 1].lineNumber === E) continue;
        const d = c[g].oldContent, L = this.getLineContent(E);
        L.length === 0 || L === d || firstNonWhitespaceIndex(L) !== -1 || m.push(E);
      }
    }
    return this._onDidChangeContent.fire(), new ApplyEditsResult(h, p, m);
  }
  _reduceOperations(t) {
    return t.length < 1e3 ? t : [this._toSingleEditOperation(t)];
  }
  _toSingleEditOperation(t) {
    let n = false;
    const i = t[0].range, r = t[t.length - 1].range, s = new Range(i.startLineNumber, i.startColumn, r.endLineNumber, r.endColumn);
    let o = i.startLineNumber, l = i.startColumn;
    const a = [];
    for (let p = 0, m = t.length; p < m; p++) {
      const g = t[p], _ = g.range;
      n = n || g.forceMoveMarkers, a.push(this.getValueInRange(new Range(o, l, _.startLineNumber, _.startColumn))), g.text.length > 0 && a.push(g.text), o = _.endLineNumber, l = _.endColumn;
    }
    const u = a.join(""), [f, c, h] = countEOL(u);
    return { sortIndex: 0, identifier: t[0].identifier, range: s, rangeOffset: this.getOffsetAt(s.startLineNumber, s.startColumn), rangeLength: this.getValueLengthInRange(s, 0), text: u, eolCount: f, firstLineLength: c, lastLineLength: h, forceMoveMarkers: n, isAutoWhitespaceEdit: false };
  }
  _doApplyEdits(t) {
    t.sort(J._sortOpsDescending);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = t[i], s = r.range.startLineNumber, o = r.range.startColumn, l = r.range.endLineNumber, a = r.range.endColumn;
      if (s === l && o === a && r.text.length === 0) continue;
      r.text ? (this._pieceTree.delete(r.rangeOffset, r.rangeLength), this._pieceTree.insert(r.rangeOffset, r.text, true)) : this._pieceTree.delete(r.rangeOffset, r.rangeLength);
      const u = new Range(s, o, l, a);
      n.push({ range: u, rangeLength: r.rangeLength, text: r.text, rangeOffset: r.rangeOffset, forceMoveMarkers: r.forceMoveMarkers, eolCount: r.eolCount, firstLineLength: r.firstLineLength, lastLineLength: r.lastLineLength });
    }
    return n;
  }
  findMatchesLineByLine(t, n, i, r) {
    return this._pieceTree.findMatchesLineByLine(t, n, i, r);
  }
  getPieceTree() {
    return this._pieceTree;
  }
  static _getInverseEditRange(t, n) {
    const i = t.startLineNumber, r = t.startColumn, [s, o, l] = countEOL(n);
    let a;
    if (n.length > 0) {
      const u = s + 1;
      u === 1 ? a = new Range(i, r, i, r + o) : a = new Range(i, r, i + u - 1, l + 1);
    } else a = new Range(i, r, i, r);
    return a;
  }
  static _getInverseEditRanges(t) {
    const n = [];
    let i = 0, r = 0, s = null;
    for (let o = 0, l = t.length; o < l; o++) {
      const a = t[o];
      let u, f;
      s ? s.range.endLineNumber === a.range.startLineNumber ? (u = i, f = r + (a.range.startColumn - s.range.endColumn)) : (u = i + (a.range.startLineNumber - s.range.endLineNumber), f = a.range.startColumn) : (u = a.range.startLineNumber, f = a.range.startColumn);
      let c;
      if (a.text.length > 0) {
        const h = a.eolCount + 1;
        h === 1 ? c = new Range(u, f, u, f + a.firstLineLength) : c = new Range(u, f, u + h - 1, a.lastLineLength + 1);
      } else c = new Range(u, f, u, f);
      i = c.endLineNumber, r = c.endColumn, n.push(c), s = a;
    }
    return n;
  }
  static _sortOpsAscending(t, n) {
    const i = Range.compareRangesUsingEnds(t.range, n.range);
    return i === 0 ? t.sortIndex - n.sortIndex : i;
  }
  static _sortOpsDescending(t, n) {
    const i = Range.compareRangesUsingEnds(t.range, n.range);
    return i === 0 ? n.sortIndex - t.sortIndex : -i;
  }
}, PieceTreeTextBufferFactory = class {
  constructor(e, t, n, i, r, s, o, l, a) {
    this._chunks = e, this._bom = t, this._cr = n, this._lf = i, this._crlf = r, this._containsRTL = s, this._containsUnusualLineTerminators = o, this._isBasicASCII = l, this._normalizeEOL = a;
  }
  _getEOL(e) {
    const t = this._cr + this._lf + this._crlf, n = this._cr + this._crlf;
    return t === 0 ? e === 1 ? `
` : `\r
` : n > t / 2 ? `\r
` : `
`;
  }
  create(e) {
    const t = this._getEOL(e), n = this._chunks;
    if (this._normalizeEOL && (t === `\r
` && (this._cr > 0 || this._lf > 0) || t === `
` && (this._cr > 0 || this._crlf > 0))) for (let r = 0, s = n.length; r < s; r++) {
      const o = n[r].buffer.replace(/\r\n|\r|\n/g, t), l = createLineStartsFast(o);
      n[r] = new StringBuffer(o, l);
    }
    const i = new PieceTreeTextBuffer(n, this._bom, t, this._containsRTL, this._containsUnusualLineTerminators, this._isBasicASCII, this._normalizeEOL);
    return { textBuffer: i, disposable: i };
  }
  getFirstLineText(e) {
    return this._chunks[0].buffer.substr(0, e).split(/\r\n|\r|\n/)[0];
  }
}, PieceTreeTextBufferBuilder = class {
  constructor() {
    this.chunks = [], this.BOM = "", this._hasPreviousChar = false, this._previousChar = 0, this._tmpLineStarts = [], this.cr = 0, this.lf = 0, this.crlf = 0, this.containsRTL = false, this.containsUnusualLineTerminators = false, this.isBasicASCII = true;
  }
  acceptChunk(e) {
    if (e.length === 0) return;
    this.chunks.length === 0 && startsWithUTF8BOM(e) && (this.BOM = UTF8_BOM_CHARACTER, e = e.substr(1));
    const t = e.charCodeAt(e.length - 1);
    t === CharCode.CarriageReturn || t >= 55296 && t <= 56319 ? (this._acceptChunk1(e.substr(0, e.length - 1), false), this._hasPreviousChar = true, this._previousChar = t) : (this._acceptChunk1(e, false), this._hasPreviousChar = false, this._previousChar = t);
  }
  _acceptChunk1(e, t) {
    !t && e.length === 0 || (this._hasPreviousChar ? this._acceptChunk2(String.fromCharCode(this._previousChar) + e) : this._acceptChunk2(e));
  }
  _acceptChunk2(e) {
    const t = createLineStarts(this._tmpLineStarts, e);
    this.chunks.push(new StringBuffer(e, t.lineStarts)), this.cr += t.cr, this.lf += t.lf, this.crlf += t.crlf, t.isBasicASCII || (this.isBasicASCII = false, this.containsRTL || (this.containsRTL = containsRTL(e)), this.containsUnusualLineTerminators || (this.containsUnusualLineTerminators = containsUnusualLineTerminators(e)));
  }
  finish(e = true) {
    return this._finish(), new PieceTreeTextBufferFactory(this.chunks, this.BOM, this.cr, this.lf, this.crlf, this.containsRTL, this.containsUnusualLineTerminators, this.isBasicASCII, e);
  }
  _finish() {
    if (this.chunks.length === 0 && this._acceptChunk1("", true), this._hasPreviousChar) {
      this._hasPreviousChar = false;
      const e = this.chunks[this.chunks.length - 1];
      e.buffer += String.fromCharCode(this._previousChar);
      const t = createLineStartsFast(e.buffer);
      e.lineStarts = t, this._previousChar === CharCode.CarriageReturn && this.cr++;
    }
  }
};
function isPathSeparator2(e) {
  return e === 47 || e === 92;
}
function toSlashes(e) {
  return e.replace(/[\\/]/g, posix.sep);
}
function toPosixPath(e) {
  return e.indexOf("/") === -1 && (e = toSlashes(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function getRoot(e, t = posix.sep) {
  if (!e) return "";
  const n = e.length, i = e.charCodeAt(0);
  if (isPathSeparator2(i)) {
    if (isPathSeparator2(e.charCodeAt(1)) && !isPathSeparator2(e.charCodeAt(2))) {
      let s = 3;
      const o = s;
      for (; s < n && !isPathSeparator2(e.charCodeAt(s)); s++) ;
      if (o !== s && !isPathSeparator2(e.charCodeAt(s + 1))) {
        for (s += 1; s < n; s++) if (isPathSeparator2(e.charCodeAt(s))) return e.slice(0, s + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (isWindowsDriveLetter(i) && e.charCodeAt(1) === 58) return isPathSeparator2(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let r = e.indexOf("://");
  if (r !== -1) {
    for (r += 3; r < n; r++) if (isPathSeparator2(e.charCodeAt(r))) return e.slice(0, r + 1);
  }
  return "";
}
function prefixEqualCaseSensitive(e, t, n) {
  return n === 0 ? true : e.charCodeAt(0) !== t.charCodeAt(0) ? false : n === 1 ? true : e.charCodeAt(n - 1) !== t.charCodeAt(n - 1) ? false : e.startsWith(t);
}
function prefixEqualIgnoreCase(e, t, n) {
  for (let i = 0; i < n; i++) {
    let r = e.charCodeAt(i), s = t.charCodeAt(i);
    if (r !== s) {
      if (r >= 128 || s >= 128) return compareSubstringIgnoreCase(e, t, i, n, i, n) === 0;
      if (r >= 97 && r <= 122 && (r -= 32), s >= 97 && s <= 122 && (s -= 32), r !== s) return false;
    }
  }
  return true;
}
function isEqualOrParent(e, t, n, i = sep) {
  if (e === t) return true;
  if (!e || !t) return false;
  const r = e.length, s = t.length;
  if (s > r) return false;
  const o = i.charCodeAt(0), l = t.charCodeAt(s - 1) === o;
  if (s < r && !l && e.charCodeAt(s) !== o) return false;
  if (n) {
    if (!prefixEqualIgnoreCase(e, t, s)) return false;
  } else if (!prefixEqualCaseSensitive(e, t, s)) return false;
  return s === r || l ? true : e.charCodeAt(s) === o;
}
function isWindowsDriveLetter(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function originalFSPath(e) {
  return uriToFsPath(e, true);
}
var ExtUri = class {
  constructor(e) {
    this._ignorePathCasing = e;
  }
  compare(e, t, n = false) {
    return e === t ? 0 : compare(this.getComparisonKey(e, n), this.getComparisonKey(t, n));
  }
  isEqual(e, t, n = false) {
    return e === t ? true : !e || !t ? false : this.getComparisonKey(e, n) === this.getComparisonKey(t, n);
  }
  getComparisonKey(e, t = false) {
    return e.with({ path: this._ignorePathCasing(e) ? e.path.toLowerCase() : void 0, fragment: t ? null : void 0 }).toString();
  }
  ignorePathCasing(e) {
    return this._ignorePathCasing(e);
  }
  isEqualOrParent(e, t, n = false) {
    if (e.scheme === t.scheme) {
      if (e.scheme === Schemas.file) return isEqualOrParent(originalFSPath(e), originalFSPath(t), this._ignorePathCasing(e)) && e.query === t.query && (n || e.fragment === t.fragment);
      if (isEqualAuthority(e.authority, t.authority)) return isEqualOrParent(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (n || e.fragment === t.fragment);
    }
    return false;
  }
  joinPath(e, ...t) {
    return URI.joinPath(e, ...t);
  }
  basenameOrAuthority(e) {
    return basename2(e) || e.authority;
  }
  basename(e) {
    return posix.basename(e.path);
  }
  extname(e) {
    return posix.extname(e.path);
  }
  dirname(e) {
    if (e.path.length === 0) return e;
    let t;
    return e.scheme === Schemas.file ? t = URI.file(dirname(originalFSPath(e))).path : (t = posix.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
  }
  normalizePath(e) {
    if (!e.path.length) return e;
    let t;
    return e.scheme === Schemas.file ? t = URI.file(normalize(originalFSPath(e))).path : t = posix.normalize(e.path), e.with({ path: t });
  }
  relativePath(e, t) {
    if (e.scheme !== t.scheme || !isEqualAuthority(e.authority, t.authority)) return;
    if (e.scheme === Schemas.file) {
      const r = relative(originalFSPath(e), originalFSPath(t));
      return isWindows ? toSlashes(r) : r;
    }
    let n = e.path || "/";
    const i = t.path || "/";
    if (this._ignorePathCasing(e)) {
      let r = 0;
      for (const s = Math.min(n.length, i.length); r < s && !(n.charCodeAt(r) !== i.charCodeAt(r) && n.charAt(r).toLowerCase() !== i.charAt(r).toLowerCase()); r++) ;
      n = i.substr(0, r) + n.substr(r);
    }
    return posix.relative(n, i);
  }
  resolvePath(e, t) {
    if (e.scheme === Schemas.file) {
      const n = URI.file(resolve(originalFSPath(e), t));
      return e.with({ authority: n.authority, path: n.path });
    }
    return t = toPosixPath(t), e.with({ path: posix.resolve(e.path, t) });
  }
  isAbsolutePath(e) {
    return !!e.path && e.path[0] === "/";
  }
  isEqualAuthority(e, t) {
    return e === t || e !== void 0 && t !== void 0 && equalsIgnoreCase(e, t);
  }
  hasTrailingPathSeparator(e, t = sep) {
    if (e.scheme === Schemas.file) {
      const n = originalFSPath(e);
      return n.length > getRoot(n).length && n[n.length - 1] === t;
    } else {
      const n = e.path;
      return n.length > 1 && n.charCodeAt(n.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
    }
  }
  removeTrailingPathSeparator(e, t = sep) {
    return hasTrailingPathSeparator(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
  }
  addTrailingPathSeparator(e, t = sep) {
    let n = false;
    if (e.scheme === Schemas.file) {
      const i = originalFSPath(e);
      n = i !== void 0 && i.length === getRoot(i).length && i[i.length - 1] === t;
    } else {
      t = "/";
      const i = e.path;
      n = i.length === 1 && i.charCodeAt(i.length - 1) === 47;
    }
    return !n && !hasTrailingPathSeparator(e, t) ? e.with({ path: e.path + "/" }) : e;
  }
}, extUri = new ExtUri(() => false), extUriBiasedIgnorePathCase = new ExtUri((e) => e.scheme === Schemas.file ? !isLinux : true), extUriIgnorePathCase = new ExtUri((e) => true), isEqual = extUri.isEqual.bind(extUri), isEqualOrParent2 = extUri.isEqualOrParent.bind(extUri), getComparisonKey = extUri.getComparisonKey.bind(extUri), basenameOrAuthority = extUri.basenameOrAuthority.bind(extUri), basename2 = extUri.basename.bind(extUri), extname2 = extUri.extname.bind(extUri), dirname2 = extUri.dirname.bind(extUri), joinPath = extUri.joinPath.bind(extUri), normalizePath = extUri.normalizePath.bind(extUri), relativePath = extUri.relativePath.bind(extUri), resolvePath = extUri.resolvePath.bind(extUri), isAbsolutePath = extUri.isAbsolutePath.bind(extUri), isEqualAuthority = extUri.isEqualAuthority.bind(extUri), hasTrailingPathSeparator = extUri.hasTrailingPathSeparator.bind(extUri), removeTrailingPathSeparator = extUri.removeTrailingPathSeparator.bind(extUri), addTrailingPathSeparator = extUri.addTrailingPathSeparator.bind(extUri), DataUri;
((e) => {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(n) {
    const i = /* @__PURE__ */ new Map();
    n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((o) => {
      const [l, a] = o.split(":");
      l && a && i.set(l, a);
    });
    const s = n.path.substring(0, n.path.indexOf(";"));
    return s && i.set(e.META_DATA_MIME, s), i;
  }
  e.parseMetaData = t;
})(DataUri || (DataUri = {}));
var MicrotaskDelay = /* @__PURE__ */ Symbol("MicrotaskDelay"), runWhenGlobalIdle, _runWhenIdle;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? _runWhenIdle = (e, t, n) => {
    setTimeout0(() => {
      if (i) return;
      const r = Date.now() + 15;
      t(Object.freeze({ didTimeout: true, timeRemaining() {
        return Math.max(0, r - Date.now());
      } }));
    });
    let i = false;
    return { dispose() {
      i || (i = true);
    } };
  } : _runWhenIdle = (e, t, n) => {
    const i = e.requestIdleCallback(t, typeof n == "number" ? { timeout: n } : void 0);
    let r = false;
    return { dispose() {
      r || (r = true, e.cancelIdleCallback(i));
    } };
  }, runWhenGlobalIdle = (e, t) => _runWhenIdle(globalThis, e, t);
})();
var Promises;
((e) => {
  async function t(i) {
    let r;
    const s = await Promise.all(i.map((o) => o.then((l) => l, (l) => {
      r || (r = l);
    })));
    if (typeof r < "u") throw r;
    return s;
  }
  e.settled = t;
  function n(i) {
    return new Promise(async (r, s) => {
      try {
        await i(r, s);
      } catch (o) {
        s(o);
      }
    });
  }
  e.withAsyncBody = n;
})(Promises || (Promises = {}));
var _AsyncIterableObject = class W {
  static fromArray(t) {
    return new W((n) => {
      n.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new W(async (n) => {
      n.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new W(async (n) => {
      await Promise.all(t.map(async (i) => n.emitOne(await i)));
    });
  }
  static merge(t) {
    return new W(async (n) => {
      await Promise.all(t.map(async (i) => {
        for await (const r of i) n.emitOne(r);
      }));
    });
  }
  constructor(t, n) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new Emitter(), queueMicrotask(async () => {
      const i = { emitOne: (r) => this.emitOne(r), emitMany: (r) => this.emitMany(r), reject: (r) => this.reject(r) };
      try {
        await Promise.resolve(t(i)), this.resolve();
      } catch (r) {
        this.reject(r);
      } finally {
        i.emitOne = void 0, i.emitMany = void 0, i.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let t = 0;
    return { next: async () => {
      do {
        if (this._state === 2) throw this._error;
        if (t < this._results.length) return { done: false, value: this._results[t++] };
        if (this._state === 1) return { done: true, value: void 0 };
        await Event.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(t, n) {
    return new W(async (i) => {
      for await (const r of t) i.emitOne(n(r));
    });
  }
  map(t) {
    return W.map(this, t);
  }
  static filter(t, n) {
    return new W(async (i) => {
      for await (const r of t) n(r) && i.emitOne(r);
    });
  }
  filter(t) {
    return W.filter(this, t);
  }
  static coalesce(t) {
    return W.filter(t, (n) => !!n);
  }
  coalesce() {
    return W.coalesce(this);
  }
  static async toPromise(t) {
    const n = [];
    for await (const i of t) n.push(i);
    return n;
  }
  toPromise() {
    return W.toPromise(this);
  }
  emitOne(t) {
    this._state === 0 && (this._results.push(t), this._onStateChanged.fire());
  }
  emitMany(t) {
    this._state === 0 && (this._results = this._results.concat(t), this._onStateChanged.fire());
  }
  resolve() {
    this._state === 0 && (this._state = 1, this._onStateChanged.fire());
  }
  reject(t) {
    this._state === 0 && (this._state = 2, this._error = t, this._onStateChanged.fire());
  }
};
_AsyncIterableObject.EMPTY = _AsyncIterableObject.fromArray([]);
var CACHE = new LRUCache(1e4), Mimes = Object.freeze({ text: "text/plain", binary: "application/octet-stream", unknown: "application/unknown", markdown: "text/markdown", latex: "text/latex", uriList: "text/uri-list", html: "text/html" });
function hintDidYouMean(...e) {
  switch (e.length) {
    case 1:
      return localize(1839, null, e[0]);
    case 2:
      return localize(1840, null, e[0], e[1]);
    case 3:
      return localize(1841, null, e[0], e[1], e[2]);
    default:
      return;
  }
}
var hintDidYouForgetToOpenOrCloseQuote = localize(1842, null), hintDidYouForgetToEscapeSlash = localize(1843, null), _Scanner = class _e {
  constructor() {
    this._input = "", this._start = 0, this._current = 0, this._tokens = [], this._errors = [], this.stringRe = /[a-zA-Z0-9_<>\-\./\\:\*\?\+\[\]\^,#@;"%\$\p{L}-]+/uy;
  }
  static getLexeme(t) {
    switch (t.type) {
      case 0:
        return "(";
      case 1:
        return ")";
      case 2:
        return "!";
      case 3:
        return t.isTripleEq ? "===" : "==";
      case 4:
        return t.isTripleEq ? "!==" : "!=";
      case 5:
        return "<";
      case 6:
        return "<=";
      case 7:
        return ">=";
      case 8:
        return ">=";
      case 9:
        return "=~";
      case 10:
        return t.lexeme;
      case 11:
        return "true";
      case 12:
        return "false";
      case 13:
        return "in";
      case 14:
        return "not";
      case 15:
        return "&&";
      case 16:
        return "||";
      case 17:
        return t.lexeme;
      case 18:
        return t.lexeme;
      case 19:
        return t.lexeme;
      case 20:
        return "EOF";
      default:
        throw illegalState(`unhandled token type: ${JSON.stringify(t)}; have you forgotten to add a case?`);
    }
  }
  get errors() {
    return this._errors;
  }
  reset(t) {
    return this._input = t, this._start = 0, this._current = 0, this._tokens = [], this._errors = [], this;
  }
  scan() {
    for (; !this._isAtEnd(); ) switch (this._start = this._current, this._advance()) {
      case CharCode.OpenParen:
        this._addToken(0);
        break;
      case CharCode.CloseParen:
        this._addToken(1);
        break;
      case CharCode.ExclamationMark:
        if (this._match(CharCode.Equals)) {
          const n = this._match(CharCode.Equals);
          this._tokens.push({ type: 4, offset: this._start, isTripleEq: n });
        } else this._addToken(2);
        break;
      case CharCode.SingleQuote:
        this._quotedString();
        break;
      case CharCode.Slash:
        this._regex();
        break;
      case CharCode.Equals:
        if (this._match(CharCode.Equals)) {
          const n = this._match(CharCode.Equals);
          this._tokens.push({ type: 3, offset: this._start, isTripleEq: n });
        } else this._match(CharCode.Tilde) ? this._addToken(9) : this._error(hintDidYouMean("==", "=~"));
        break;
      case CharCode.LessThan:
        this._addToken(this._match(CharCode.Equals) ? 6 : 5);
        break;
      case CharCode.GreaterThan:
        this._addToken(this._match(CharCode.Equals) ? 8 : 7);
        break;
      case CharCode.Ampersand:
        this._match(CharCode.Ampersand) ? this._addToken(15) : this._error(hintDidYouMean("&&"));
        break;
      case CharCode.Pipe:
        this._match(CharCode.Pipe) ? this._addToken(16) : this._error(hintDidYouMean("||"));
        break;
      case CharCode.Space:
      case CharCode.CarriageReturn:
      case CharCode.Tab:
      case CharCode.LineFeed:
      case CharCode.NoBreakSpace:
        break;
      default:
        this._string();
    }
    return this._start = this._current, this._addToken(20), Array.from(this._tokens);
  }
  _match(t) {
    return this._isAtEnd() || this._input.charCodeAt(this._current) !== t ? false : (this._current++, true);
  }
  _advance() {
    return this._input.charCodeAt(this._current++);
  }
  _peek() {
    return this._isAtEnd() ? CharCode.Null : this._input.charCodeAt(this._current);
  }
  _addToken(t) {
    this._tokens.push({ type: t, offset: this._start });
  }
  _error(t) {
    const n = this._start, i = this._input.substring(this._start, this._current), r = { type: 19, offset: this._start, lexeme: i };
    this._errors.push({ offset: n, lexeme: i, additionalInfo: t }), this._tokens.push(r);
  }
  _string() {
    this.stringRe.lastIndex = this._start;
    const t = this.stringRe.exec(this._input);
    if (t) {
      this._current = this._start + t[0].length;
      const n = this._input.substring(this._start, this._current), i = _e._keywords.get(n);
      i ? this._addToken(i) : this._tokens.push({ type: 17, lexeme: n, offset: this._start });
    }
  }
  _quotedString() {
    for (; this._peek() !== CharCode.SingleQuote && !this._isAtEnd(); ) this._advance();
    if (this._isAtEnd()) {
      this._error(hintDidYouForgetToOpenOrCloseQuote);
      return;
    }
    this._advance(), this._tokens.push({ type: 18, lexeme: this._input.substring(this._start + 1, this._current - 1), offset: this._start + 1 });
  }
  _regex() {
    let t = this._current, n = false, i = false;
    for (; ; ) {
      if (t >= this._input.length) {
        this._current = t, this._error(hintDidYouForgetToEscapeSlash);
        return;
      }
      const s = this._input.charCodeAt(t);
      if (n) n = false;
      else if (s === CharCode.Slash && !i) {
        t++;
        break;
      } else s === CharCode.OpenSquareBracket ? i = true : s === CharCode.Backslash ? n = true : s === CharCode.CloseSquareBracket && (i = false);
      t++;
    }
    for (; t < this._input.length && _e._regexFlags.has(this._input.charCodeAt(t)); ) t++;
    this._current = t;
    const r = this._input.substring(this._start, this._current);
    this._tokens.push({ type: 10, lexeme: r, offset: this._start });
  }
  _isAtEnd() {
    return this._current >= this._input.length;
  }
};
_Scanner._regexFlags = new Set(["i", "g", "s", "m", "y", "u"].map((e) => e.charCodeAt(0))), _Scanner._keywords = /* @__PURE__ */ new Map([["not", 14], ["in", 13], ["false", 12], ["true", 11]]);
var Scanner = _Scanner, _util;
((e) => {
  e.serviceIds = /* @__PURE__ */ new Map(), e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
  function t(n) {
    return n[e.DI_DEPENDENCIES] || [];
  }
  e.getServiceDependencies = t;
})(_util || (_util = {}));
var IInstantiationService = createDecorator("instantiationService");
function storeServiceDependency(e, t, n) {
  t[_util.DI_TARGET] === t ? t[_util.DI_DEPENDENCIES].push({ id: e, index: n }) : (t[_util.DI_DEPENDENCIES] = [{ id: e, index: n }], t[_util.DI_TARGET] = t);
}
function createDecorator(e) {
  if (_util.serviceIds.has(e)) return _util.serviceIds.get(e);
  const t = function(n, i, r) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    storeServiceDependency(t, n, r);
  };
  return t.toString = () => e, _util.serviceIds.set(e, t), t;
}
var CONSTANT_VALUES = /* @__PURE__ */ new Map();
CONSTANT_VALUES.set("false", false), CONSTANT_VALUES.set("true", true), CONSTANT_VALUES.set("isMac", isMacintosh), CONSTANT_VALUES.set("isLinux", isLinux), CONSTANT_VALUES.set("isWindows", isWindows), CONSTANT_VALUES.set("isWeb", isWeb), CONSTANT_VALUES.set("isMacNative", isMacintosh && !isWeb), CONSTANT_VALUES.set("isEdge", isEdge), CONSTANT_VALUES.set("isFirefox", isFirefox), CONSTANT_VALUES.set("isChrome", isChrome), CONSTANT_VALUES.set("isSafari", isSafari);
var FUNCTION_REGISTRY = /* @__PURE__ */ new Map();
function registerContextKeyFunction(e, t) {
  return FUNCTION_REGISTRY.has(e) && (console.warn(`A context key function with id '${e}' is already registered. Function collisions can lead to unexpected behavior.`), FUNCTION_REGISTRY.delete(e)), FUNCTION_REGISTRY.set(e, t), { dispose: () => {
    FUNCTION_REGISTRY.delete(e);
  } };
}
function getContextKeyFunction(e) {
  return FUNCTION_REGISTRY.get(e);
}
var hasOwnProperty = Object.prototype.hasOwnProperty, defaultConfig = { regexParsingWithErrorRecovery: true }, errorEmptyString = localize(1818, null), hintEmptyString = localize(1819, null), errorNoInAfterNot = localize(1820, null), errorClosingParenthesis = localize(1821, null), errorUnexpectedToken = localize(1822, null), hintUnexpectedToken = localize(1823, null), errorUnexpectedEOF = localize(1824, null), hintUnexpectedEOF = localize(1825, null), _Parser = class Z {
  constructor(t = defaultConfig) {
    this._config = t, this._scanner = new Scanner(), this._tokens = [], this._current = 0, this._parsingErrors = [], this._flagsGYRe = /g|y/g;
  }
  get lexingErrors() {
    return this._scanner.errors;
  }
  get parsingErrors() {
    return this._parsingErrors;
  }
  parse(t) {
    if (t === "") {
      this._parsingErrors.push({ message: errorEmptyString, offset: 0, lexeme: "", additionalInfo: hintEmptyString });
      return;
    }
    this._tokens = this._scanner.reset(t).scan(), this._current = 0, this._parsingErrors = [];
    try {
      const n = this._expr();
      if (!this._isAtEnd()) {
        const i = this._peek(), r = i.type === 17 ? hintUnexpectedToken : void 0;
        throw this._parsingErrors.push({ message: errorUnexpectedToken, offset: i.offset, lexeme: Scanner.getLexeme(i), additionalInfo: r }), Z._parseError;
      }
      return n;
    } catch (n) {
      if (n !== Z._parseError) throw n;
      return;
    }
  }
  _expr() {
    return this._or();
  }
  _or() {
    const t = [this._and()];
    for (; this._matchOne(16); ) {
      const n = this._and();
      t.push(n);
    }
    return t.length === 1 ? t[0] : ContextKeyExpr.or(...t);
  }
  _and() {
    const t = [this._term()];
    for (; this._matchOne(15); ) {
      const n = this._term();
      t.push(n);
    }
    return t.length === 1 ? t[0] : ContextKeyExpr.and(...t);
  }
  _term() {
    if (this._matchOne(2)) {
      const t = this._peek();
      switch (t.type) {
        case 11:
          return this._advance(), ContextKeyFalseExpr.INSTANCE;
        case 12:
          return this._advance(), ContextKeyTrueExpr.INSTANCE;
        case 0: {
          this._advance();
          const n = this._expr();
          return this._consume(1, errorClosingParenthesis), n?.negate();
        }
        case 17:
          return this._advance(), ContextKeyNotExpr.create(t.lexeme);
        default:
          throw this._errExpectedButGot("KEY | true | false | '(' expression ')'", t);
      }
    }
    return this._primary();
  }
  _primary() {
    const t = this._peek();
    switch (t.type) {
      case 11:
        return this._advance(), ContextKeyExpr.true();
      case 12:
        return this._advance(), ContextKeyExpr.false();
      case 0: {
        this._advance();
        const n = this._expr();
        return this._consume(1, errorClosingParenthesis), n;
      }
      case 17: {
        if (t.lexeme.startsWith("@")) {
          this._advance();
          const r = t.lexeme.substring(1);
          if (r.startsWith("!")) {
            const o = r.substring(1), l = getContextKeyFunction(o);
            if (l) return ContextKeyArbitraryFunctionExpr.createWithoutRegistration(r, () => !l());
          }
          const s = getContextKeyFunction(r) || (() => false);
          return ContextKeyArbitraryFunctionExpr.createWithoutRegistration(r, s);
        }
        const n = t.lexeme;
        if (this._advance(), this._matchOne(9)) {
          const r = this._peek();
          if (!this._config.regexParsingWithErrorRecovery) {
            if (this._advance(), r.type !== 10) throw this._errExpectedButGot("REGEX", r);
            const s = r.lexeme, o = s.lastIndexOf("/"), l = o === s.length - 1 ? void 0 : this._removeFlagsGY(s.substring(o + 1));
            let a;
            try {
              a = new RegExp(s.substring(1, o), l);
            } catch {
              throw this._errExpectedButGot("REGEX", r);
            }
            return ContextKeyRegexExpr.create(n, a);
          }
          switch (r.type) {
            case 10:
            case 19: {
              const s = [r.lexeme];
              this._advance();
              let o = this._peek(), l = 0;
              for (let h = 0; h < r.lexeme.length; h++) r.lexeme.charCodeAt(h) === CharCode.OpenParen ? l++ : r.lexeme.charCodeAt(h) === CharCode.CloseParen && l--;
              for (; !this._isAtEnd() && o.type !== 15 && o.type !== 16; ) {
                switch (o.type) {
                  case 0:
                    l++;
                    break;
                  case 1:
                    l--;
                    break;
                  case 10:
                  case 18:
                    for (let h = 0; h < o.lexeme.length; h++) o.lexeme.charCodeAt(h) === CharCode.OpenParen ? l++ : r.lexeme.charCodeAt(h) === CharCode.CloseParen && l--;
                }
                if (l < 0) break;
                s.push(Scanner.getLexeme(o)), this._advance(), o = this._peek();
              }
              const a = s.join(""), u = a.lastIndexOf("/"), f = u === a.length - 1 ? void 0 : this._removeFlagsGY(a.substring(u + 1));
              let c;
              try {
                c = new RegExp(a.substring(1, u), f);
              } catch {
                throw this._errExpectedButGot("REGEX", r);
              }
              return ContextKeyExpr.regex(n, c);
            }
            case 18: {
              const s = r.lexeme;
              this._advance();
              let o = null;
              if (!isFalsyOrWhitespace(s)) {
                const l = s.indexOf("/"), a = s.lastIndexOf("/");
                if (l !== a && l >= 0) {
                  const u = s.slice(l + 1, a), f = s[a + 1] === "i" ? "i" : "";
                  try {
                    o = new RegExp(u, f);
                  } catch {
                    throw this._errExpectedButGot("REGEX", r);
                  }
                }
              }
              if (o === null) throw this._errExpectedButGot("REGEX", r);
              return ContextKeyRegexExpr.create(n, o);
            }
            default:
              throw this._errExpectedButGot("REGEX", this._peek());
          }
        }
        if (this._matchOne(14)) {
          this._consume(13, errorNoInAfterNot);
          const r = this._value();
          return ContextKeyExpr.notIn(n, r);
        }
        switch (this._peek().type) {
          case 3: {
            this._advance();
            const r = this._value();
            if (this._previous().type === 18) return ContextKeyExpr.equals(n, r);
            switch (r) {
              case "true":
                return ContextKeyExpr.has(n);
              case "false":
                return ContextKeyExpr.not(n);
              default:
                return ContextKeyExpr.equals(n, r);
            }
          }
          case 4: {
            this._advance();
            const r = this._value();
            if (this._previous().type === 18) return ContextKeyExpr.notEquals(n, r);
            switch (r) {
              case "true":
                return ContextKeyExpr.not(n);
              case "false":
                return ContextKeyExpr.has(n);
              default:
                return ContextKeyExpr.notEquals(n, r);
            }
          }
          case 5:
            return this._advance(), ContextKeySmallerExpr.create(n, this._value());
          case 6:
            return this._advance(), ContextKeySmallerEqualsExpr.create(n, this._value());
          case 7:
            return this._advance(), ContextKeyGreaterExpr.create(n, this._value());
          case 8:
            return this._advance(), ContextKeyGreaterEqualsExpr.create(n, this._value());
          case 13:
            return this._advance(), ContextKeyExpr.in(n, this._value());
          default:
            return ContextKeyExpr.has(n);
        }
      }
      case 20:
        throw this._parsingErrors.push({ message: errorUnexpectedEOF, offset: t.offset, lexeme: "", additionalInfo: hintUnexpectedEOF }), Z._parseError;
      default:
        throw this._errExpectedButGot(`true | false | KEY 
	| KEY '=~' REGEX 
	| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value`, this._peek());
    }
  }
  _value() {
    const t = this._peek();
    switch (t.type) {
      case 17:
      case 18:
        return this._advance(), t.lexeme;
      case 11:
        return this._advance(), "true";
      case 12:
        return this._advance(), "false";
      case 13:
        return this._advance(), "in";
      default:
        return "";
    }
  }
  _removeFlagsGY(t) {
    return t.replaceAll(this._flagsGYRe, "");
  }
  _previous() {
    return this._tokens[this._current - 1];
  }
  _matchOne(t) {
    return this._check(t) ? (this._advance(), true) : false;
  }
  _advance() {
    return this._isAtEnd() || this._current++, this._previous();
  }
  _consume(t, n) {
    if (this._check(t)) return this._advance();
    throw this._errExpectedButGot(n, this._peek());
  }
  _errExpectedButGot(t, n, i) {
    const r = localize(1826, null, t, Scanner.getLexeme(n)), s = n.offset, o = Scanner.getLexeme(n);
    return this._parsingErrors.push({ message: r, offset: s, lexeme: o, additionalInfo: i }), Z._parseError;
  }
  _check(t) {
    return this._peek().type === t;
  }
  _peek() {
    return this._tokens[this._current];
  }
  _isAtEnd() {
    return this._peek().type === 20;
  }
};
_Parser._parseError = new Error();
var Parser = _Parser, ContextKeyExpr = class {
  static false() {
    return ContextKeyFalseExpr.INSTANCE;
  }
  static true() {
    return ContextKeyTrueExpr.INSTANCE;
  }
  static has(e) {
    return ContextKeyDefinedExpr.create(e);
  }
  static equals(e, t) {
    return ContextKeyEqualsExpr.create(e, t);
  }
  static notEquals(e, t) {
    return ContextKeyNotEqualsExpr.create(e, t);
  }
  static regex(e, t) {
    return ContextKeyRegexExpr.create(e, t);
  }
  static in(e, t) {
    return ContextKeyInExpr.create(e, t);
  }
  static notIn(e, t) {
    return ContextKeyNotInExpr.create(e, t);
  }
  static not(e) {
    return ContextKeyNotExpr.create(e);
  }
  static and(...e) {
    return ContextKeyAndExpr.create(e, null, true);
  }
  static or(...e) {
    return ContextKeyOrExpr.create(e, null, true);
  }
  static greater(e, t) {
    return ContextKeyGreaterExpr.create(e, t);
  }
  static greaterEquals(e, t) {
    return ContextKeyGreaterEqualsExpr.create(e, t);
  }
  static smaller(e, t) {
    return ContextKeySmallerExpr.create(e, t);
  }
  static smallerEquals(e, t) {
    return ContextKeySmallerEqualsExpr.create(e, t);
  }
  static function(e, t) {
    return ContextKeyArbitraryFunctionExpr.create(e, t);
  }
  static deserialize(e) {
    return e == null ? void 0 : this._parser.parse(e);
  }
};
ContextKeyExpr._parser = new Parser({ regexParsingWithErrorRecovery: false });
function cmp(e, t) {
  return e.cmp(t);
}
var ContextKeyArbitraryFunctionExpr = class re {
  constructor(t, n) {
    this.type = 16, this.id = t, this.fn = n;
  }
  static create(t, n) {
    return registerContextKeyFunction(t, n), new re(t, n);
  }
  static createWithoutRegistration(t, n) {
    return new re(t, n);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : cmp1(this.id, t.id);
  }
  equals(t) {
    return t.type === this.type && this.id === t.id;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return this.fn();
  }
  serialize() {
    return `@${this.id}`;
  }
  keys() {
    return [];
  }
  map(t) {
    return this;
  }
  negate() {
    return re.createWithoutRegistration(`!${this.id}`, () => !this.fn());
  }
}, _ContextKeyFalseExpr = class {
  constructor() {
    this.type = 0;
  }
  cmp(t) {
    return this.type - t.type;
  }
  equals(t) {
    return t.type === this.type;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return false;
  }
  serialize() {
    return "false";
  }
  keys() {
    return [];
  }
  map(t) {
    return this;
  }
  negate() {
    return ContextKeyTrueExpr.INSTANCE;
  }
};
_ContextKeyFalseExpr.INSTANCE = new _ContextKeyFalseExpr();
var ContextKeyFalseExpr = _ContextKeyFalseExpr, _ContextKeyTrueExpr = class {
  constructor() {
    this.type = 1;
  }
  cmp(t) {
    return this.type - t.type;
  }
  equals(t) {
    return t.type === this.type;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return true;
  }
  serialize() {
    return "true";
  }
  keys() {
    return [];
  }
  map(t) {
    return this;
  }
  negate() {
    return ContextKeyFalseExpr.INSTANCE;
  }
};
_ContextKeyTrueExpr.INSTANCE = new _ContextKeyTrueExpr();
var ContextKeyTrueExpr = _ContextKeyTrueExpr, ContextKeyDefinedExpr = class Ie {
  constructor(t, n) {
    this.key = t, this.negated = n, this.type = 2;
  }
  static create(t, n = null) {
    const i = CONSTANT_VALUES.get(t);
    return typeof i == "boolean" ? i ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE : new Ie(t, n);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : cmp1(this.key, t.key);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key : false;
  }
  substituteConstants() {
    const t = CONSTANT_VALUES.get(this.key);
    return typeof t == "boolean" ? t ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE : this;
  }
  evaluate(t) {
    return !!t.getValue(this.key);
  }
  serialize() {
    return this.key;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapDefined(this.key);
  }
  negate() {
    return this.negated || (this.negated = ContextKeyNotExpr.create(this.key, this)), this.negated;
  }
}, ContextKeyEqualsExpr = class we {
  constructor(t, n, i) {
    this.key = t, this.value = n, this.negated = i, this.type = 4;
  }
  static create(t, n, i = null) {
    if (typeof n == "boolean") return n ? ContextKeyDefinedExpr.create(t, i) : ContextKeyNotExpr.create(t, i);
    const r = CONSTANT_VALUES.get(t);
    return typeof r == "boolean" ? n === (r ? "true" : "false") ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE : new we(t, n, i);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : cmp2(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    const t = CONSTANT_VALUES.get(this.key);
    if (typeof t == "boolean") {
      const n = t ? "true" : "false";
      return this.value === n ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE;
    }
    return this;
  }
  evaluate(t) {
    return t.getValue(this.key) == this.value;
  }
  serialize() {
    return `${this.key} == '${this.value}'`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapEquals(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = ContextKeyNotEqualsExpr.create(this.key, this.value, this)), this.negated;
  }
}, ContextKeyInExpr = class ye {
  constructor(t, n) {
    this.key = t, this.valueKey = n, this.type = 10, this.negated = null;
  }
  static create(t, n) {
    return new ye(t, n);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : cmp2(this.key, this.valueKey, t.key, t.valueKey);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.valueKey === t.valueKey : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    const n = t.getValue(this.valueKey), i = t.getValue(this.key);
    return Array.isArray(n) ? n.includes(i) : typeof i == "string" && typeof n == "object" && n !== null ? hasOwnProperty.call(n, i) : false;
  }
  serialize() {
    return `${this.key} in '${this.valueKey}'`;
  }
  keys() {
    return [this.key, this.valueKey];
  }
  map(t) {
    return t.mapIn(this.key, this.valueKey);
  }
  negate() {
    return this.negated || (this.negated = ContextKeyNotInExpr.create(this.key, this.valueKey)), this.negated;
  }
}, ContextKeyNotInExpr = class Se {
  constructor(t, n) {
    this.key = t, this.valueKey = n, this.type = 11, this._negated = ContextKeyInExpr.create(t, n);
  }
  static create(t, n) {
    return new Se(t, n);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : this._negated.cmp(t._negated);
  }
  equals(t) {
    return t.type === this.type ? this._negated.equals(t._negated) : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return !this._negated.evaluate(t);
  }
  serialize() {
    return `${this.key} not in '${this.valueKey}'`;
  }
  keys() {
    return this._negated.keys();
  }
  map(t) {
    return t.mapNotIn(this.key, this.valueKey);
  }
  negate() {
    return this._negated;
  }
}, ContextKeyNotEqualsExpr = class xe {
  constructor(t, n, i) {
    this.key = t, this.value = n, this.negated = i, this.type = 5;
  }
  static create(t, n, i = null) {
    if (typeof n == "boolean") return n ? ContextKeyNotExpr.create(t, i) : ContextKeyDefinedExpr.create(t, i);
    const r = CONSTANT_VALUES.get(t);
    return typeof r == "boolean" ? n === (r ? "true" : "false") ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE : new xe(t, n, i);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : cmp2(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    const t = CONSTANT_VALUES.get(this.key);
    if (typeof t == "boolean") {
      const n = t ? "true" : "false";
      return this.value === n ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE;
    }
    return this;
  }
  evaluate(t) {
    return t.getValue(this.key) != this.value;
  }
  serialize() {
    return `${this.key} != '${this.value}'`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapNotEquals(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = ContextKeyEqualsExpr.create(this.key, this.value, this)), this.negated;
  }
}, ContextKeyNotExpr = class Ne {
  constructor(t, n) {
    this.key = t, this.negated = n, this.type = 3;
  }
  static create(t, n = null) {
    const i = CONSTANT_VALUES.get(t);
    return typeof i == "boolean" ? i ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE : new Ne(t, n);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : cmp1(this.key, t.key);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key : false;
  }
  substituteConstants() {
    const t = CONSTANT_VALUES.get(this.key);
    return typeof t == "boolean" ? t ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE : this;
  }
  evaluate(t) {
    return !t.getValue(this.key);
  }
  serialize() {
    return `!${this.key}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapNot(this.key);
  }
  negate() {
    return this.negated || (this.negated = ContextKeyDefinedExpr.create(this.key, this)), this.negated;
  }
};
function withFloatOrStr(e, t) {
  if (typeof e == "string") {
    const n = parseFloat(e);
    isNaN(n) || (e = n);
  }
  return typeof e == "string" || typeof e == "number" ? t(e) : ContextKeyFalseExpr.INSTANCE;
}
var ContextKeyGreaterExpr = class Te {
  constructor(t, n, i) {
    this.key = t, this.value = n, this.negated = i, this.type = 12;
  }
  static create(t, n, i = null) {
    return withFloatOrStr(n, (r) => new Te(t, r, i));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : cmp2(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return typeof this.value == "string" ? false : parseFloat(t.getValue(this.key)) > this.value;
  }
  serialize() {
    return `${this.key} > ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapGreater(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = ContextKeySmallerEqualsExpr.create(this.key, this.value, this)), this.negated;
  }
}, ContextKeyGreaterEqualsExpr = class Re {
  constructor(t, n, i) {
    this.key = t, this.value = n, this.negated = i, this.type = 13;
  }
  static create(t, n, i = null) {
    return withFloatOrStr(n, (r) => new Re(t, r, i));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : cmp2(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return typeof this.value == "string" ? false : parseFloat(t.getValue(this.key)) >= this.value;
  }
  serialize() {
    return `${this.key} >= ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapGreaterEquals(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = ContextKeySmallerExpr.create(this.key, this.value, this)), this.negated;
  }
}, ContextKeySmallerExpr = class Oe {
  constructor(t, n, i) {
    this.key = t, this.value = n, this.negated = i, this.type = 14;
  }
  static create(t, n, i = null) {
    return withFloatOrStr(n, (r) => new Oe(t, r, i));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : cmp2(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return typeof this.value == "string" ? false : parseFloat(t.getValue(this.key)) < this.value;
  }
  serialize() {
    return `${this.key} < ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapSmaller(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = ContextKeyGreaterEqualsExpr.create(this.key, this.value, this)), this.negated;
  }
}, ContextKeySmallerEqualsExpr = class Ue {
  constructor(t, n, i) {
    this.key = t, this.value = n, this.negated = i, this.type = 15;
  }
  static create(t, n, i = null) {
    return withFloatOrStr(n, (r) => new Ue(t, r, i));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : cmp2(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return typeof this.value == "string" ? false : parseFloat(t.getValue(this.key)) <= this.value;
  }
  serialize() {
    return `${this.key} <= ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapSmallerEquals(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = ContextKeyGreaterExpr.create(this.key, this.value, this)), this.negated;
  }
}, ContextKeyRegexExpr = class ke {
  constructor(t, n) {
    this.key = t, this.regexp = n, this.type = 7, this.negated = null;
  }
  static create(t, n) {
    return new ke(t, n);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.key < t.key) return -1;
    if (this.key > t.key) return 1;
    const n = this.regexp ? this.regexp.source : "", i = t.regexp ? t.regexp.source : "";
    return n < i ? -1 : n > i ? 1 : 0;
  }
  equals(t) {
    if (t.type === this.type) {
      const n = this.regexp ? this.regexp.source : "", i = t.regexp ? t.regexp.source : "";
      return this.key === t.key && n === i;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    const n = t.getValue(this.key);
    return this.regexp ? this.regexp.test(n) : false;
  }
  serialize() {
    const t = this.regexp ? `/${this.regexp.source}/${this.regexp.flags}` : "/invalid/";
    return `${this.key} =~ ${t}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapRegex(this.key, this.regexp);
  }
  negate() {
    return this.negated || (this.negated = ContextKeyNotRegexExpr.create(this)), this.negated;
  }
}, ContextKeyNotRegexExpr = class de {
  constructor(t) {
    this._actual = t, this.type = 8;
  }
  static create(t) {
    return new de(t);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : this._actual.cmp(t._actual);
  }
  equals(t) {
    return t.type === this.type ? this._actual.equals(t._actual) : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return !this._actual.evaluate(t);
  }
  serialize() {
    return `!(${this._actual.serialize()})`;
  }
  keys() {
    return this._actual.keys();
  }
  map(t) {
    return new de(this._actual.map(t));
  }
  negate() {
    return this._actual;
  }
};
function eliminateConstantsInArray(e) {
  let t = null;
  for (let n = 0, i = e.length; n < i; n++) {
    const r = e[n].substituteConstants();
    if (e[n] !== r && t === null) {
      t = [];
      for (let s = 0; s < n; s++) t[s] = e[s];
    }
    t !== null && (t[n] = r);
  }
  return t === null ? e : t;
}
var ContextKeyAndExpr = class G {
  constructor(t, n) {
    this.expr = t, this.negated = n, this.type = 6;
  }
  static create(t, n, i) {
    return G._normalizeArr(t, n, i);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.expr.length < t.expr.length) return -1;
    if (this.expr.length > t.expr.length) return 1;
    for (let n = 0, i = this.expr.length; n < i; n++) {
      const r = cmp(this.expr[n], t.expr[n]);
      if (r !== 0) return r;
    }
    return 0;
  }
  equals(t) {
    if (t.type === this.type) {
      if (this.expr.length !== t.expr.length) return false;
      for (let n = 0, i = this.expr.length; n < i; n++) if (!this.expr[n].equals(t.expr[n])) return false;
      return true;
    }
    return false;
  }
  substituteConstants() {
    const t = eliminateConstantsInArray(this.expr);
    return t === this.expr ? this : G.create(t, this.negated, false);
  }
  evaluate(t) {
    for (let n = 0, i = this.expr.length; n < i; n++) if (!this.expr[n].evaluate(t)) return false;
    return true;
  }
  static _normalizeArr(t, n, i) {
    const r = [];
    let s = false;
    for (const o of t) if (o) {
      if (o.type === 1) {
        s = true;
        continue;
      }
      if (o.type === 0) return ContextKeyFalseExpr.INSTANCE;
      if (o.type === 6) {
        r.push(...o.expr);
        continue;
      }
      r.push(o);
    }
    if (r.length === 0 && s) return ContextKeyTrueExpr.INSTANCE;
    if (r.length !== 0) {
      if (r.length === 1) return r[0];
      r.sort(cmp);
      for (let o = 1; o < r.length; o++) r[o - 1].equals(r[o]) && (r.splice(o, 1), o--);
      if (r.length === 1) return r[0];
      for (; r.length > 1; ) {
        const o = r[r.length - 1];
        if (o.type !== 9) break;
        r.pop();
        const l = r.pop(), a = r.length === 0, u = ContextKeyOrExpr.create(o.expr.map((f) => G.create([f, l], null, i)), null, a);
        u && (r.push(u), r.sort(cmp));
      }
      if (r.length === 1) return r[0];
      if (i) {
        for (let o = 0; o < r.length; o++) for (let l = o + 1; l < r.length; l++) if (r[o].negate().equals(r[l])) return ContextKeyFalseExpr.INSTANCE;
        if (r.length === 1) return r[0];
      }
      return new G(r, n);
    }
  }
  serialize() {
    return this.expr.map((t) => t.serialize()).join(" && ");
  }
  keys() {
    const t = [];
    for (const n of this.expr) t.push(...n.keys());
    return t;
  }
  map(t) {
    return new G(this.expr.map((n) => n.map(t)), null);
  }
  negate() {
    if (!this.negated) {
      const t = [];
      for (const n of this.expr) t.push(n.negate());
      this.negated = ContextKeyOrExpr.create(t, this, true);
    }
    return this.negated;
  }
}, ContextKeyOrExpr = class K {
  constructor(t, n) {
    this.expr = t, this.negated = n, this.type = 9;
  }
  static create(t, n, i) {
    return K._normalizeArr(t, n, i);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.expr.length < t.expr.length) return -1;
    if (this.expr.length > t.expr.length) return 1;
    for (let n = 0, i = this.expr.length; n < i; n++) {
      const r = cmp(this.expr[n], t.expr[n]);
      if (r !== 0) return r;
    }
    return 0;
  }
  equals(t) {
    if (t.type === this.type) {
      if (this.expr.length !== t.expr.length) return false;
      for (let n = 0, i = this.expr.length; n < i; n++) if (!this.expr[n].equals(t.expr[n])) return false;
      return true;
    }
    return false;
  }
  substituteConstants() {
    const t = eliminateConstantsInArray(this.expr);
    return t === this.expr ? this : K.create(t, this.negated, false);
  }
  evaluate(t) {
    for (let n = 0, i = this.expr.length; n < i; n++) if (this.expr[n].evaluate(t)) return true;
    return false;
  }
  static _normalizeArr(t, n, i) {
    let r = [], s = false;
    if (t) {
      for (let o = 0, l = t.length; o < l; o++) {
        const a = t[o];
        if (a) {
          if (a.type === 0) {
            s = true;
            continue;
          }
          if (a.type === 1) return ContextKeyTrueExpr.INSTANCE;
          if (a.type === 9) {
            r = r.concat(a.expr);
            continue;
          }
          r.push(a);
        }
      }
      if (r.length === 0 && s) return ContextKeyFalseExpr.INSTANCE;
      r.sort(cmp);
    }
    if (r.length !== 0) {
      if (r.length === 1) return r[0];
      for (let o = 1; o < r.length; o++) r[o - 1].equals(r[o]) && (r.splice(o, 1), o--);
      if (r.length === 1) return r[0];
      if (i) {
        for (let o = 0; o < r.length; o++) for (let l = o + 1; l < r.length; l++) if (r[o].negate().equals(r[l])) return ContextKeyTrueExpr.INSTANCE;
        if (r.length === 1) return r[0];
      }
      return new K(r, n);
    }
  }
  serialize() {
    return this.expr.map((t) => t.serialize()).join(" || ");
  }
  keys() {
    const t = [];
    for (const n of this.expr) t.push(...n.keys());
    return t;
  }
  map(t) {
    return new K(this.expr.map((n) => n.map(t)), null);
  }
  negate() {
    if (!this.negated) {
      const t = [];
      for (const n of this.expr) t.push(n.negate());
      for (; t.length > 1; ) {
        const n = t.shift(), i = t.shift(), r = [];
        for (const s of getTerminals(n)) for (const o of getTerminals(i)) r.push(ContextKeyAndExpr.create([s, o], null, false));
        t.unshift(K.create(r, null, false));
      }
      this.negated = K.create(t, this, true);
    }
    return this.negated;
  }
}, _RawContextKey = class se extends ContextKeyDefinedExpr {
  static all() {
    return se._info.values();
  }
  constructor(t, n, i) {
    super(t, null), this._defaultValue = n, typeof i == "object" ? se._info.push({ ...i, key: t }) : i !== true && se._info.push({ key: t, description: i, type: n != null ? typeof n : void 0 });
  }
  bindTo(t) {
    return t.createKey(this.key, this._defaultValue);
  }
  getValue(t) {
    return t.getContextKeyValue(this.key);
  }
  toNegated() {
    return this.negate();
  }
  isEqualTo(t) {
    return ContextKeyEqualsExpr.create(this.key, t);
  }
  notEqualsTo(t) {
    return ContextKeyNotEqualsExpr.create(this.key, t);
  }
  greater(t) {
    return ContextKeyGreaterExpr.create(this.key, t);
  }
};
_RawContextKey._info = [];
var RawContextKey = _RawContextKey, IContextKeyService = createDecorator("contextKeyService");
function cmp1(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function cmp2(e, t, n, i) {
  return e < n ? -1 : e > n ? 1 : t < i ? -1 : t > i ? 1 : 0;
}
function getTerminals(e) {
  return e.type === 9 ? e.expr : [e];
}
var SyncDescriptor = class {
  constructor(e, t = [], n = false, i = false) {
    this.ctor = e, this.staticArguments = t, this.supportsDelayedInstantiation = n, this.supportsLazyInstantiation = i;
  }
}, _registry = [], _windowScopedIds = /* @__PURE__ */ new Set();
function registerSingleton(e, t, n, i) {
  t instanceof SyncDescriptor || (t = new SyncDescriptor(t, [], !!n, n === 2)), _registry.push([e, t]), i === 1 && _windowScopedIds.add(e);
}
var INotebookDocumentService = createDecorator("notebookDocumentService"), _lengths = ["W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f"], _padRegexp = new RegExp(`^[${_lengths.join("")}]+`), _radix = 7;
function parse2(e) {
  if (e.scheme !== Schemas.vscodeNotebookCell) return;
  const t = e.fragment.indexOf("s");
  if (t < 0) return;
  const n = parseInt(e.fragment.substring(0, t).replace(_padRegexp, ""), _radix), i = decodeBase64(e.fragment.substring(t + 1)).toString();
  if (!isNaN(n)) return { handle: n, notebook: e.with({ scheme: i, fragment: null }) };
}
function generate(e, t) {
  const n = t.toString(_radix), r = `${n.length < _lengths.length ? _lengths[n.length - 1] : "z"}${n}s${encodeBase64(VSBuffer.fromString(e.scheme), true, true)}`;
  return e.with({ scheme: Schemas.vscodeNotebookCell, fragment: r });
}
function parseMetadataUri(e) {
  if (e.scheme !== Schemas.vscodeNotebookMetadata) return;
  const t = decodeBase64(e.fragment).toString();
  return e.with({ scheme: t, fragment: null });
}
function generateMetadataUri(e) {
  const t = `${encodeBase64(VSBuffer.fromString(e.scheme), true, true)}`;
  return e.with({ scheme: Schemas.vscodeNotebookMetadata, fragment: t });
}
function extractCellOutputDetails(e) {
  if (e.scheme !== Schemas.vscodeNotebookCellOutput) return;
  const t = new URLSearchParams(e.query), n = t.get("openIn");
  if (!n) return;
  const i = t.get("outputId") ?? void 0, r = parse2(e.with({ scheme: Schemas.vscodeNotebookCell, query: null })), s = t.get("outputIndex") ? parseInt(t.get("outputIndex") || "", 10) : void 0;
  return { notebook: r ? r.notebook : e.with({ scheme: t.get("notebookScheme") || Schemas.file, fragment: null, query: null }), openIn: n, outputId: i, outputIndex: s, cellHandle: r?.handle, cellFragment: e.fragment };
}
var NotebookDocumentWorkbenchService = class {
  constructor() {
    this._documents = new ResourceMap();
  }
  getNotebook(e) {
    if (e.scheme === Schemas.vscodeNotebookCell) {
      const t = parse2(e);
      if (t) {
        const n = this._documents.get(t.notebook);
        if (n) return n;
      }
    }
    if (e.scheme === Schemas.vscodeNotebookCellOutput) {
      const t = extractCellOutputDetails(e);
      if (t) {
        const n = this._documents.get(t.notebook);
        if (n) return n;
      }
    }
    return this._documents.get(e);
  }
  addNotebookDocument(e) {
    this._documents.set(e.uri, e);
  }
  removeNotebookDocument(e) {
    this._documents.delete(e.uri);
  }
};
registerSingleton(INotebookDocumentService, NotebookDocumentWorkbenchService, 1);
var CellKind = ((e) => (e[e.Markup = 1] = "Markup", e[e.Code = 2] = "Code", e))(CellKind || {}), NOTEBOOK_DISPLAY_ORDER = ["application/json", "application/javascript", "text/html", "image/svg+xml", Mimes.latex, Mimes.markdown, "image/png", "image/jpeg", Mimes.text], ACCESSIBLE_NOTEBOOK_DISPLAY_ORDER = [Mimes.latex, Mimes.markdown, "application/json", "text/html", "image/svg+xml", "image/png", "image/jpeg", Mimes.text], NotebookCellsChangeType = ((e) => (e[e.ModelChange = 1] = "ModelChange", e[e.Move = 2] = "Move", e[e.ChangeCellLanguage = 5] = "ChangeCellLanguage", e[e.Initialize = 6] = "Initialize", e[e.ChangeCellMetadata = 7] = "ChangeCellMetadata", e[e.Output = 8] = "Output", e[e.OutputItem = 9] = "OutputItem", e[e.ChangeCellContent = 10] = "ChangeCellContent", e[e.ChangeDocumentMetadata = 11] = "ChangeDocumentMetadata", e[e.ChangeCellInternalMetadata = 12] = "ChangeCellInternalMetadata", e[e.ChangeCellMime = 13] = "ChangeCellMime", e[e.Unknown = 100] = "Unknown", e))(NotebookCellsChangeType || {}), NotebookMetadataUri;
((e) => {
  e.scheme = Schemas.vscodeNotebookMetadata;
  function t(i) {
    return generateMetadataUri(i);
  }
  e.generate = t;
  function n(i) {
    return parseMetadataUri(i);
  }
  e.parse = n;
})(NotebookMetadataUri || (NotebookMetadataUri = {}));
var CellUri;
((e) => {
  e.scheme = Schemas.vscodeNotebookCell;
  function t(a, u) {
    return generate(a, u);
  }
  e.generate = t;
  function n(a) {
    return parse2(a);
  }
  e.parse = n;
  function i(a, u) {
    return a.with({ scheme: Schemas.vscodeNotebookCellOutput, query: new URLSearchParams({ openIn: "editor", outputId: u ?? "", notebookScheme: a.scheme !== Schemas.file ? a.scheme : "" }).toString() });
  }
  e.generateCellOutputUriWithId = i;
  function r(a, u, f) {
    return a.with({ scheme: Schemas.vscodeNotebookCellOutput, fragment: u.fragment, query: new URLSearchParams({ openIn: "notebook", outputIndex: String(f) }).toString() });
  }
  e.generateCellOutputUriWithIndex = r;
  function s(a) {
    return extractCellOutputDetails(a);
  }
  e.parseCellOutputUri = s;
  function o(a, u, f) {
    return e.generate(a, u).with({ scheme: f });
  }
  e.generateCellPropertyUri = o;
  function l(a, u) {
    if (a.scheme === u) return e.parse(a.with({ scheme: e.scheme }));
  }
  e.parseCellPropertyUri = l;
})(CellUri || (CellUri = {}));
var NOTEBOOK_EDITOR_CURSOR_BOUNDARY = new RawContextKey("notebookEditorCursorAtBoundary", "none"), NOTEBOOK_EDITOR_CURSOR_LINE_BOUNDARY = new RawContextKey("notebookEditorCursorAtLineBoundary", "none"), _NotebookWorkingCopyTypeIdentifier = class oe {
  static create(t, n) {
    return `${oe._prefix}${t}/${n ?? t}`;
  }
  static parse(t) {
    if (t.startsWith(oe._prefix)) {
      const n = t.substring(oe._prefix.length).split("/");
      if (n.length === 2) return { notebookType: n[0], viewType: n[1] };
    }
  }
};
_NotebookWorkingCopyTypeIdentifier._prefix = "notebook/";
var textDecoder2 = new TextDecoder(), MOVE_CURSOR_1_LINE_COMMAND = "\x1B[A", MOVE_CURSOR_1_LINE_COMMAND_BYTES = MOVE_CURSOR_1_LINE_COMMAND.split("").map((e) => e.charCodeAt(0)), BACKSPACE_CHARACTER = 8, CARRIAGE_RETURN_CHARACTER = 13, USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function createWordRegExp(e = "") {
  let t = "(-?\\d*\\.\\d\\w*)|([^";
  for (const n of USUAL_WORD_SEPARATORS) e.indexOf(n) >= 0 || (t += "\\" + n);
  return t += "\\s]+)", new RegExp(t, "g");
}
var DEFAULT_WORD_REGEXP = createWordRegExp();
function ensureValidWordDefinition(e) {
  let t = DEFAULT_WORD_REGEXP;
  if (e && e instanceof RegExp) if (e.global) t = e;
  else {
    let n = "g";
    e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
  }
  return t.lastIndex = 0, t;
}
var _defaultConfig = new LinkedList();
_defaultConfig.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
function getWordAtText(e, t, n, i, r) {
  if (t = ensureValidWordDefinition(t), r || (r = Iterable.first(_defaultConfig)), n.length > r.maxLen) {
    let u = e - r.maxLen / 2;
    return u < 0 ? u = 0 : i += u, n = n.substring(u, e + r.maxLen / 2), getWordAtText(e, t, n, i, r);
  }
  const s = Date.now(), o = e - 1 - i;
  let l = -1, a = null;
  for (let u = 1; !(Date.now() - s >= r.timeBudget); u++) {
    const f = o - r.windowSize * u;
    t.lastIndex = Math.max(0, f);
    const c = _findRegexMatchEnclosingPosition(t, n, o, l);
    if (!c && a || (a = c, f <= 0)) break;
    l = f;
  }
  if (a) {
    const u = { word: a[0], startColumn: i + 1 + a.index, endColumn: i + 1 + a.index + a[0].length };
    return t.lastIndex = 0, u;
  }
  return null;
}
function _findRegexMatchEnclosingPosition(e, t, n, i) {
  let r;
  for (; r = e.exec(t); ) {
    const s = r.index || 0;
    if (s <= n && e.lastIndex >= n) return r;
    if (i > 0 && s > i) return null;
  }
  return null;
}
var PrefixSumComputer = class {
  constructor(e) {
    this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(e, t) {
    e = toUint32(e);
    const n = this.values, i = this.prefixSum, r = t.length;
    return r === 0 ? false : (this.values = new Uint32Array(n.length + r), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + r), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), true);
  }
  setValue(e, t) {
    return e = toUint32(e), t = toUint32(t), this.values[e] === t ? false : (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), true);
  }
  removeValues(e, t) {
    e = toUint32(e), t = toUint32(t);
    const n = this.values, i = this.prefixSum;
    if (e >= n.length) return false;
    const r = n.length - e;
    return t >= r && (t = r), t === 0 ? false : (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), true);
  }
  getTotalSum() {
    return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
  }
  getPrefixSum(e) {
    return e < 0 ? 0 : (e = toUint32(e), this._getPrefixSum(e));
  }
  _getPrefixSum(e) {
    if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
    let t = this.prefixSumValidIndex[0] + 1;
    t === 0 && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);
    for (let n = t; n <= e; n++) this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
    return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e];
  }
  getIndexOf(e) {
    e = Math.floor(e), this.getTotalSum();
    let t = 0, n = this.values.length - 1, i = 0, r = 0, s = 0;
    for (; t <= n; ) if (i = t + (n - t) / 2 | 0, r = this.prefixSum[i], s = r - this.values[i], e < s) n = i - 1;
    else if (e >= r) t = i + 1;
    else break;
    return new PrefixSumIndexOfResult(i, e - s);
  }
}, PrefixSumIndexOfResult = class {
  constructor(e, t) {
    this.index = e, this.remainder = t, this._prefixSumIndexOfResultBrand = void 0, this.index = e, this.remainder = t;
  }
}, MEMORY_ESTIMATE_LINE_CHECK_INTERVAL = 64, MirrorTextModel = class {
  constructor(e, t, n, i) {
    this._uri = e, this._lines = t, this._eol = n, this._versionId = i, this._lineStarts = null, this._cachedTextValue = null;
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
    const e = this._lines.length - 1;
    return e < 0 ? 0 : (this._ensureLineStarts(), this._lineStarts.getPrefixSum(e - 1) + this._lines[e].length);
  }
  getMemoryEstimate(e) {
    let t = 0;
    for (let r = 0; r < this._lines.length; r++) {
      if (r % MEMORY_ESTIMATE_LINE_CHECK_INTERVAL === 0 && e?.shouldContinue?.() === false) return;
      t += this._lines[r].length;
    }
    const n = t * 2, i = this._cachedTextValue === null ? 0 : this._cachedTextValue.length * 2;
    return n + i;
  }
  onEvents(e) {
    e.eol && e.eol !== this._eol && (this._eol = e.eol, this._lineStarts = null);
    const t = e.changes;
    for (const n of t) this._acceptDeleteRange(n.range), this._acceptInsertText(new Position(n.range.startLineNumber, n.range.startColumn), n.text);
    this._versionId = e.versionId, this._cachedTextValue = null;
  }
  _ensureLineStarts() {
    if (!this._lineStarts) {
      const e = this._eol.length, t = this._lines.length, n = new Uint32Array(t);
      for (let i = 0; i < t; i++) n[i] = this._lines[i].length + e;
      this._lineStarts = new PrefixSumComputer(n);
    }
  }
  _setLineText(e, t) {
    this._lines[e] = t, this._lineStarts && this._lineStarts.setValue(e, this._lines[e].length + this._eol.length);
  }
  _acceptDeleteRange(e) {
    if (e.startLineNumber === e.endLineNumber) {
      if (e.startColumn === e.endColumn) return;
      this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1));
      return;
    }
    this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);
  }
  _acceptInsertText(e, t) {
    if (t.length === 0) return;
    const n = splitLines(t);
    if (n.length === 1) {
      this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
      return;
    }
    n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
    const i = new Uint32Array(n.length - 1);
    for (let r = 1; r < n.length; r++) this._lines.splice(e.lineNumber + r - 1, 0, n[r]), i[r - 1] = n[r].length + this._eol.length;
    this._lineStarts && this._lineStarts.insertValues(e.lineNumber, i);
  }
}, STOP_SYNC_MODEL_DELTA_TIME_MS = 60 * 1e3, MirrorModel = class extends MirrorTextModel {
  get uri() {
    return this._uri;
  }
  get eol() {
    return this._eol;
  }
  getValue() {
    return this.getText();
  }
  findMatches(e) {
    const t = [];
    for (let n = 0; n < this._lines.length; n++) {
      const i = this._lines[n], r = this.offsetAt(new Position(n + 1, 1)), s = i.matchAll(e);
      for (const o of s) (o.index || o.index === 0) && (o.index = o.index + r), t.push(o);
    }
    return t;
  }
  getLinesContent() {
    return this._lines.slice(0);
  }
  getLineCount() {
    return this._lines.length;
  }
  getLineContent(e) {
    return this._lines[e - 1];
  }
  getWordAtPosition(e, t) {
    const n = getWordAtText(e.column, ensureValidWordDefinition(t), this._lines[e.lineNumber - 1], 0);
    return n ? new Range(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null;
  }
  getWordUntilPosition(e, t) {
    const n = this.getWordAtPosition(e, t);
    return n ? { word: this._lines[e.lineNumber - 1].substring(n.startColumn - 1, e.column - 1), startColumn: n.startColumn, endColumn: e.column } : { word: "", startColumn: e.column, endColumn: e.column };
  }
  words(e) {
    const t = this._lines, n = this._wordenize.bind(this);
    let i = 0, r = "", s = 0, o = [];
    return { *[Symbol.iterator]() {
      for (; ; ) if (s < o.length) {
        const l = r.substring(o[s].start, o[s].end);
        s += 1, yield l;
      } else if (i < t.length) r = t[i], o = n(r, e), s = 0, i += 1;
      else break;
    } };
  }
  getLineWords(e, t) {
    const n = this._lines[e - 1], i = this._wordenize(n, t), r = [];
    for (const s of i) r.push({ word: n.substring(s.start, s.end), startColumn: s.start + 1, endColumn: s.end + 1 });
    return r;
  }
  _wordenize(e, t) {
    const n = [];
    let i;
    for (t.lastIndex = 0; (i = t.exec(e)) && i[0].length !== 0; ) n.push({ start: i.index, end: i.index + i[0].length });
    return n;
  }
  getValueInRange(e) {
    if (e = this._validateRange(e), e.startLineNumber === e.endLineNumber) return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);
    const t = this._eol, n = e.startLineNumber - 1, i = e.endLineNumber - 1, r = [];
    r.push(this._lines[n].substring(e.startColumn - 1));
    for (let s = n + 1; s < i; s++) r.push(this._lines[s]);
    return r.push(this._lines[i].substring(0, e.endColumn - 1)), r.join(t);
  }
  offsetAt(e) {
    return e = this._validatePosition(e), this._ensureLineStarts(), this._lineStarts.getPrefixSum(e.lineNumber - 2) + (e.column - 1);
  }
  positionAt(e) {
    e = Math.floor(e), e = Math.max(0, e), this._ensureLineStarts();
    const t = this._lineStarts.getIndexOf(e), n = this._lines[t.index].length;
    return { lineNumber: 1 + t.index, column: 1 + Math.min(t.remainder, n) };
  }
  _validateRange(e) {
    const t = this._validatePosition({ lineNumber: e.startLineNumber, column: e.startColumn }), n = this._validatePosition({ lineNumber: e.endLineNumber, column: e.endColumn });
    return t.lineNumber !== e.startLineNumber || t.column !== e.startColumn || n.lineNumber !== e.endLineNumber || n.column !== e.endColumn ? { startLineNumber: t.lineNumber, startColumn: t.column, endLineNumber: n.lineNumber, endColumn: n.column } : e;
  }
  _validatePosition(e) {
    if (!Position.isIPosition(e)) throw new Error("bad position");
    let { lineNumber: t, column: n } = e, i = false;
    if (t < 1) t = 1, n = 1, i = true;
    else if (t > this._lines.length) t = this._lines.length, n = this._lines[t - 1].length + 1, i = true;
    else {
      const r = this._lines[t - 1].length + 1;
      n < 1 ? (n = 1, i = true) : n > r && (n = r, i = true);
    }
    return i ? { lineNumber: t, column: n } : e;
  }
};
function matchCellBasedOnSimilarties(e, t) {
  const n = { modifiedToOriginal: /* @__PURE__ */ new Map(), originalToModified: /* @__PURE__ */ new Map() }, i = [], r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), l = (u, f) => {
    if (r.has(u)) return false;
    const c = o.get(u)?.dist ?? Number.MAX_SAFE_INTEGER;
    return f.editCount < c;
  }, a = (u, f) => {
    r.set(f, u), s.add(u);
  };
  for (let u = 0; u < e.length; u++) {
    const f = e[u], { index: c, editCount: h, percentage: p } = computeClosestCell({ cell: f, index: u }, t, true, n, l);
    c >= 0 && h === 0 ? (a(u, c), i.push({ modified: u, original: c, dist: h, percentage: p, possibleOriginal: c })) : (o.set(c, { dist: h, modifiedIndex: u }), i.push({ modified: u, original: -1, dist: h, percentage: p, possibleOriginal: c }));
  }
  return i.forEach((u, f) => {
    if (u.original >= 0) return;
    const c = f > 0 ? findLast(i, (S) => S.original >= 0, f - 1) : void 0, h = c?.original ?? -1, p = c?.modified ?? -1, m = i.slice(f + 1).find((S) => S.original >= 0), g = /* @__PURE__ */ new Set(), _ = i.findIndex((S, y) => y > f && S.original >= 0), E = _ >= 0 ? i[_].original : -1;
    t.forEach((S, y) => {
      if (r.has(y)) {
        g.add(y);
        return;
      }
      m && y >= m.original && g.add(y), E >= 0 && y > E && g.add(y);
    });
    const d = e[f];
    if (u.original === -1 && u.possibleOriginal >= 0 && !g.has(u.possibleOriginal) && l(u.possibleOriginal, { editCount: u.dist })) {
      a(f, u.possibleOriginal), u.original = u.possibleOriginal;
      return;
    }
    if (h > 0 && p > 0 && h === p && (_ >= 0 ? _ : e.length - 1) === (E >= 0 ? E : t.length - 1) && !g.has(f) && f < t.length) {
      const S = (_ >= 0 ? _ : e.length) - p, y = (E >= 0 ? E : t.length) - h;
      if (S === y && d.cellKind === t[f].cellKind) {
        a(f, f), u.original = f;
        return;
      }
    }
    const { index: L, percentage: O } = computeClosestCell({ cell: d, index: f }, t, false, n, (S, y) => {
      if (g.has(S)) return false;
      if (_ > 0 || h > 0) {
        const U = n.originalToModified.get(S);
        if (U && h < S && Array.from(U).find(([k, T]) => k === f || k >= _ || s.has(f) ? false : T.editCount < y.editCount)) return false;
      }
      return !g.has(S);
    });
    if (L >= 0 && f > 0 && i[f - 1].original === L - 1) {
      a(f, L), i[f].original = L;
      return;
    }
    const b = f > 0 && t.length > i[f - 1].original ? i[f - 1].original + 1 : -1, x = f > 0 && b >= 0 && b < t.length ? t[b].getValue() : void 0;
    if (L >= 0 && f > 0 && typeof x == "string" && !r.has(b) && (d.getValue().includes(x) || x.includes(d.getValue()))) {
      a(f, b), i[f].original = b;
      return;
    }
    if (O < 90 || f === 0 && i.length === 1) {
      a(f, L), i[f].original = L;
      return;
    }
  }), i;
}
function computeClosestCell({ cell: e, index: t }, n, i, r, s) {
  let o = 1 / 0, l = -1;
  const a = e.internalMetadata?.internalId;
  if (a) {
    const f = n.findIndex((c) => c.internalMetadata?.internalId === a);
    if (f >= 0) return { index: f, editCount: 0, percentage: Number.MAX_SAFE_INTEGER };
  }
  for (let f = 0; f < n.length; f++) {
    if (n[f].cellKind !== e.cellKind) continue;
    const c = n[f].getValue(), h = r.modifiedToOriginal.get(t) ?? /* @__PURE__ */ new Map(), p = h.get(f) ?? { editCount: computeNumberOfEdits(e, n[f]) };
    h.set(f, p), r.modifiedToOriginal.set(t, h);
    const m = r.originalToModified.get(f) ?? /* @__PURE__ */ new Map();
    if (m.set(t, p), r.originalToModified.set(f, m), !!s(f, p) && !(c.length === 0 && i)) {
      if (c === e.getValue() && e.getValue().length > 0) return { index: f, editCount: 0, percentage: 0 };
      p.editCount < o && (o = p.editCount, l = f);
    }
  }
  if (l === -1) return { index: -1, editCount: Number.MAX_SAFE_INTEGER, percentage: Number.MAX_SAFE_INTEGER };
  const u = !e.getValue().length && !n[l].getValue().length ? 0 : e.getValue().length ? o * 100 / e.getValue().length : Number.MAX_SAFE_INTEGER;
  return { index: l, editCount: o, percentage: u };
}
function computeNumberOfEdits(e, t) {
  return e.getValue() === t.getValue() ? 0 : computeLevenshteinDistance(e.getValue(), t.getValue());
}
function computeDiff(e, t, n) {
  const i = n.cellsDiff.changes, r = [];
  let s = 0, o = 0, l = -1;
  for (let a = 0; a < i.length; a++) {
    const u = i[a];
    for (let c = 0; c < u.originalStart - s; c++) {
      const h = e.cells[s + c], p = t.cells[o + c];
      h.getHashValue() === p.getHashValue() ? r.push({ originalCellIndex: s + c, modifiedCellIndex: o + c, type: "unchanged" }) : (l === -1 && (l = r.length), r.push({ originalCellIndex: s + c, modifiedCellIndex: o + c, type: "modified" }));
    }
    const f = computeModifiedLCS(u, e, t);
    f.length && l === -1 && (l = r.length), r.push(...f), s = u.originalStart + u.originalLength, o = u.modifiedStart + u.modifiedLength;
  }
  for (let a = s; a < e.cells.length; a++) r.push({ originalCellIndex: a, modifiedCellIndex: a - s + o, type: "unchanged" });
  return { cellDiffInfo: r, firstChangeIndex: l };
}
function computeModifiedLCS(e, t, n) {
  const i = [], r = Math.min(e.originalLength, e.modifiedLength);
  for (let s = 0; s < r; s++) {
    const o = t.cells[e.originalStart + s], l = n.cells[e.modifiedStart + s];
    if (o.cellKind !== l.cellKind) i.push({ originalCellIndex: e.originalStart + s, type: "delete" }), i.push({ modifiedCellIndex: e.modifiedStart + s, type: "insert" });
    else {
      const a = o.equal(l);
      i.push({ originalCellIndex: e.originalStart + s, modifiedCellIndex: e.modifiedStart + s, type: a ? "unchanged" : "modified" });
    }
  }
  for (let s = r; s < e.originalLength; s++) i.push({ originalCellIndex: e.originalStart + s, type: "delete" });
  for (let s = r; s < e.modifiedLength; s++) i.push({ modifiedCellIndex: e.modifiedStart + s, type: "insert" });
  return i;
}
var PREFIX_FOR_UNMATCHED_ORIGINAL_CELLS = "unmatchedOriginalCell", MirrorCell = class {
  constructor(e, t, n, i, r, s, o, l, a, u) {
    this.handle = e, this._eol = i, this.language = s, this.cellKind = o, this.outputs = l, this.metadata = a, this.internalMetadata = u, this.textModel = new MirrorModel(t, n, i, r);
  }
  get eol() {
    return this._eol === `\r
` ? 2 : 1;
  }
  onEvents(e) {
    this.textModel.onEvents(e), this._hash = void 0;
  }
  getValue() {
    return this.textModel.getValue();
  }
  getLinesContent() {
    return this.textModel.getLinesContent();
  }
  getComparisonValue() {
    return this._hash ??= this._getHash();
  }
  _getHash() {
    let e = numberHash(104579, 0);
    e = doHash(this.language, e), e = doHash(this.getValue(), e), e = doHash(this.metadata, e), e = doHash(this.internalMetadata?.internalId || "", e);
    for (const n of this.outputs) {
      e = doHash(n.metadata, e);
      for (const i of n.outputs) e = doHash(i.mime, e);
    }
    const t = this.outputs.flatMap((n) => n.outputs.map((i) => hash(Array.from(i.data.buffer))));
    for (const n of t) e = numberHash(n, e);
    return e;
  }
}, MirrorNotebookDocument = class {
  constructor(e, t, n, i) {
    this.uri = e, this.cells = t, this.metadata = n, this.transientDocumentMetadata = i;
  }
  acceptModelChanged(e) {
    e.rawEvents.forEach((t) => {
      if (t.kind === NotebookCellsChangeType.ModelChange) this._spliceNotebookCells(t.changes);
      else if (t.kind === NotebookCellsChangeType.Move) {
        const n = this.cells.splice(t.index, 1);
        this.cells.splice(t.newIdx, 0, ...n);
      } else if (t.kind === NotebookCellsChangeType.Output) {
        const n = this.cells[t.index];
        n.outputs = t.outputs;
      } else if (t.kind === NotebookCellsChangeType.ChangeCellLanguage) {
        this._assertIndex(t.index);
        const n = this.cells[t.index];
        n.language = t.language;
      } else if (t.kind === NotebookCellsChangeType.ChangeCellMetadata) {
        this._assertIndex(t.index);
        const n = this.cells[t.index];
        n.metadata = t.metadata;
      } else if (t.kind === NotebookCellsChangeType.ChangeCellInternalMetadata) {
        this._assertIndex(t.index);
        const n = this.cells[t.index];
        n.internalMetadata = t.internalMetadata;
      } else t.kind === NotebookCellsChangeType.ChangeDocumentMetadata && (this.metadata = t.metadata);
    });
  }
  _assertIndex(e) {
    if (e < 0 || e >= this.cells.length) throw new Error(`Illegal index ${e}. Cells length: ${this.cells.length}`);
  }
  _spliceNotebookCells(e) {
    e.reverse().forEach((t) => {
      const i = t[2].map((r) => new MirrorCell(r.handle, URI.parse(r.url), r.source, r.eol, r.versionId, r.language, r.cellKind, r.outputs, r.metadata));
      this.cells.splice(t[0], t[1], ...i);
    });
  }
}, CellSequence = class ge {
  constructor(t) {
    this.hashValue = t;
  }
  static create(t) {
    const n = t.cells.map((i) => i.getComparisonValue());
    return new ge(n);
  }
  static createWithCellId(t, n) {
    const i = t.map((r) => n ? `${doHash(r.internalMetadata?.internalId, numberHash(104579, 0))}#${r.getComparisonValue()}` : `${doHash(r.internalMetadata?.internalId, numberHash(104579, 0))}}`);
    return new ge(i);
  }
  getElements() {
    return this.hashValue;
  }
}, NotebookWorker = class {
  constructor() {
    this._models = /* @__PURE__ */ Object.create(null);
  }
  dispose() {
  }
  $acceptNewModel(e, t, n, i) {
    this._models[e] = new MirrorNotebookDocument(URI.parse(e), i.map((r) => new MirrorCell(r.handle, URI.parse(r.url), r.source, r.eol, r.versionId, r.language, r.cellKind, r.outputs, r.metadata, r.internalMetadata)), t, n);
  }
  $acceptModelChanged(e, t) {
    this._models[e]?.acceptModelChanged(t);
  }
  $acceptCellModelChanged(e, t, n) {
    this._models[e].cells.find((r) => r.handle === t)?.onEvents(n);
  }
  $acceptRemovedModel(e) {
    this._models[e] && delete this._models[e];
  }
  async $computeDiff(e, t) {
    const n = this._getModel(e), i = this._getModel(t), r = new NotebookTextModelFacade(n), s = new NotebookTextModelFacade(i), o = filter(n.metadata, (_) => !n.transientDocumentMetadata[_]), l = filter(i.metadata, (_) => !i.transientDocumentMetadata[_]), a = JSON.stringify(o) !== JSON.stringify(l), u = new LcsDiff(CellSequence.create(n), CellSequence.create(i)).ComputeDiff(false);
    if (u.changes.length === 0) return { metadataChanged: a, cellsDiff: u };
    if (computeDiff(r, s, { cellsDiff: { changes: u.changes, quitEarly: false }, metadataChanged: false }).cellDiffInfo.every((_) => _.type === "modified")) return { metadataChanged: a, cellsDiff: u };
    let c = this.canComputeDiffWithCellIds(n, i);
    if (!c) {
      const _ = matchCellBasedOnSimilarties(i.cells, n.cells);
      _.some((E) => E.original !== -1) && (this.updateCellIdsBasedOnMappings(_, n.cells, i.cells), c = true);
    }
    if (!c) return { metadataChanged: a, cellsDiff: u };
    const h = new LcsDiff(CellSequence.createWithCellId(n.cells), CellSequence.createWithCellId(i.cells)).ComputeDiff(false), p = computeDiff(r, s, { cellsDiff: { changes: h.changes, quitEarly: false }, metadataChanged: false }).cellDiffInfo;
    let m = 0;
    const g = [];
    return h.changes.forEach((_) => {
      if (!_.originalLength && _.modifiedLength) {
        const E = p.findIndex((d) => d.type === "insert" && d.modifiedCellIndex === _.modifiedStart);
        p.slice(m, E).forEach((d) => {
          if (d.type === "unchanged" || d.type === "modified") {
            const L = n.cells[d.originalCellIndex], O = i.cells[d.modifiedCellIndex];
            (d.type === "modified" || L.getComparisonValue() !== O.getComparisonValue()) && g.push(new DiffChange(d.originalCellIndex, 1, d.modifiedCellIndex, 1));
          }
        }), g.push(_), m = E + 1;
      } else if (_.originalLength && !_.modifiedLength) {
        const E = p.findIndex((d) => d.type === "delete" && d.originalCellIndex === _.originalStart);
        p.slice(m, E).forEach((d) => {
          if (d.type === "unchanged" || d.type === "modified") {
            const L = n.cells[d.originalCellIndex], O = i.cells[d.modifiedCellIndex];
            (d.type === "modified" || L.getComparisonValue() !== O.getComparisonValue()) && g.push(new DiffChange(d.originalCellIndex, 1, d.modifiedCellIndex, 1));
          }
        }), g.push(_), m = E + 1;
      } else {
        const E = p.findIndex((d) => d.type === "delete" && d.originalCellIndex === _.originalStart || d.type === "insert" && d.modifiedCellIndex === _.modifiedStart);
        p.slice(m, E).forEach((d) => {
          if (d.type === "unchanged" || d.type === "modified") {
            const L = n.cells[d.originalCellIndex], O = i.cells[d.modifiedCellIndex];
            (d.type === "modified" || L.getComparisonValue() !== O.getComparisonValue()) && g.push(new DiffChange(d.originalCellIndex, 1, d.modifiedCellIndex, 1));
          }
        }), g.push(_), m = E + 1;
      }
    }), p.slice(m).forEach((_) => {
      if (_.type === "unchanged" || _.type === "modified") {
        const E = n.cells[_.originalCellIndex], d = i.cells[_.modifiedCellIndex];
        (_.type === "modified" || E.getComparisonValue() !== d.getComparisonValue()) && g.push(new DiffChange(_.originalCellIndex, 1, _.modifiedCellIndex, 1));
      }
    }), { metadataChanged: a, cellsDiff: { changes: g, quitEarly: false } };
  }
  canComputeDiffWithCellIds(e, t) {
    return this.canComputeDiffWithCellInternalIds(e, t) || this.canComputeDiffWithCellMetadataIds(e, t);
  }
  canComputeDiffWithCellInternalIds(e, t) {
    const n = e.cells.map((r, s) => ({ index: s, id: r.internalMetadata?.internalId || "" })), i = t.cells.map((r, s) => ({ index: s, id: r.internalMetadata?.internalId || "" }));
    return n.some((r) => !r.id) || i.some((r) => !r.id) ? false : n.some((r) => i.find((s) => s.id === r.id));
  }
  canComputeDiffWithCellMetadataIds(e, t) {
    const n = e.cells.map((r, s) => ({ index: s, id: r.metadata?.id || "" })), i = t.cells.map((r, s) => ({ index: s, id: r.metadata?.id || "" }));
    return n.some((r) => !r.id) || i.some((r) => !r.id) || n.every((r) => !i.find((s) => s.id === r.id)) ? false : (e.cells.map((r, s) => {
      r.internalMetadata = r.internalMetadata || {}, r.internalMetadata.internalId = r.metadata?.id || "";
    }), t.cells.map((r, s) => {
      r.internalMetadata = r.internalMetadata || {}, r.internalMetadata.internalId = r.metadata?.id || "";
    }), true);
  }
  isOriginalCellMatchedWithModifiedCell(e) {
    return (e.internalMetadata?.internalId || "").startsWith(PREFIX_FOR_UNMATCHED_ORIGINAL_CELLS);
  }
  updateCellIdsBasedOnMappings(e, t, n) {
    const i = /* @__PURE__ */ new Map();
    return t.map((r, s) => {
      r.internalMetadata = r.internalMetadata || { internalId: "" }, r.internalMetadata.internalId = `${PREFIX_FOR_UNMATCHED_ORIGINAL_CELLS}${generateUuid()}`;
      const o = e.find((l) => l.original === s);
      o && (r.internalMetadata.internalId = generateUuid(), i.set(o.modified, r.internalMetadata.internalId));
    }), n.map((r, s) => {
      r.internalMetadata = r.internalMetadata || { internalId: "" }, r.internalMetadata.internalId = i.get(s) ?? generateUuid();
    }), true;
  }
  $canPromptRecommendation(e) {
    const n = this._getModel(e).cells;
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      if (r.cellKind === CellKind.Markup || r.language !== "python") continue;
      const o = new SearchParams("import\\s*pandas|from\\s*pandas", true, false, null).parseSearchRequest();
      if (!o) continue;
      const l = new PieceTreeTextBufferBuilder();
      l.acceptChunk(r.getValue());
      const u = l.finish(true).create(r.eol).textBuffer, f = u.getLineCount(), c = Math.min(f, 20), h = new Range(1, 1, c, u.getLineLength(c) + 1);
      if (u.findMatchesLineByLine(h, o, true, 1).length > 0) return true;
    }
    return false;
  }
  _getModel(e) {
    return this._models[e];
  }
};
function create() {
  return new NotebookWorker();
}
var NotebookTextModelFacade = class {
  constructor(e) {
    this.notebook = e, this.cells = e.cells.map((t) => new NotebookCellTextModelFacade(t));
  }
}, NotebookCellTextModelFacade = class {
  constructor(e) {
    this.cell = e;
  }
  get cellKind() {
    return this.cell.cellKind;
  }
  getHashValue() {
    return this.cell.getComparisonValue();
  }
  equal(e) {
    return e.cellKind !== this.cellKind ? false : this.getHashValue() === e.getHashValue();
  }
};
bootstrapWebWorker(create);
