/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a6fa0dbd-6b75-522a-b563-bc71817e0cab");
  } catch (e3) {
  }
})();
function F1(e, t, n, s) {
  var r = arguments.length, a = r < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, n) : s, i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, s);
  else for (var l = e.length - 1; l >= 0; l--) (i = e[l]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
  return r > 3 && a && Object.defineProperty(t, n, a), a;
}
function B1(e, t, n = 0, s = e.length) {
  let r = n, a = s;
  for (; r < a; ) {
    const i = Math.floor((r + a) / 2);
    t(e[i]) ? r = i + 1 : a = i;
  }
  return r - 1;
}
var G1 = class g1 {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (g1.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const s of this._array) if (this._prevFindLastPredicate(s) && !t(s)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = t;
    }
    const n = B1(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
  }
};
G1.assertInvariants = false;
var q1 = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        throw e.stack ? Et.isErrorNoTelemetry(e) ? new Et(e.message + `

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
}, so = new q1();
function W1(e) {
  so.setUnexpectedErrorHandler(e);
}
function st(e) {
  $1(e) || so.onUnexpectedError(e);
}
var sa = "Canceled";
function $1(e) {
  return e instanceof De ? true : e instanceof Error && e.name === sa && e.message === sa;
}
var De = class extends Error {
  constructor() {
    if (super(sa), this.name = this.message, K1 && typeof console < "u" && Y1()) {
      const e = new Error().stack ?? "";
      H1.some((t) => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
    }
  }
};
function J1(e) {
  return e ? new Error(`Illegal state: ${e}`) : new Error("Illegal state");
}
var Et = class Hi extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof Hi) return t;
    const n = new Hi();
    return n.message = t.message, n.stack = t.stack, n;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}, H1 = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], V1 = 5e3, ro = 0;
function Y1() {
  const e = Date.now();
  return e < ro ? false : (ro = e + V1, true);
}
var K1 = false;
function z1(e) {
  return e.filter((t) => !!t);
}
function X1(e) {
  return e[Math.floor(Math.random() * e.length)];
}
var ra;
((e) => {
  function t(a) {
    return a < 0;
  }
  e.isLessThan = t;
  function n(a) {
    return a <= 0;
  }
  e.isLessThanOrEqual = n;
  function s(a) {
    return a > 0;
  }
  e.isGreaterThan = s;
  function r(a) {
    return a === 0;
  }
  e.isNeitherLessOrGreaterThan = r, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(ra || (ra = {}));
function j1(e, t) {
  return (n, s) => t(e(n), e(s));
}
var Q1 = (e, t) => e - t, ao = class Vi {
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
    return new Vi((n) => this.iterate((s) => t(s) ? n(s) : true));
  }
  map(t) {
    return new Vi((n) => this.iterate((s) => n(t(s))));
  }
  some(t) {
    let n = false;
    return this.iterate((s) => (n = t(s), !n)), n;
  }
  findFirst(t) {
    let n;
    return this.iterate((s) => t(s) ? (n = s, false) : true), n;
  }
  findLast(t) {
    let n;
    return this.iterate((s) => (t(s) && (n = s), true)), n;
  }
  findLastMaxBy(t) {
    let n, s = true;
    return this.iterate((r) => ((s || ra.isGreaterThan(t(r, n))) && (s = false, n = r), true)), n;
  }
};
ao.empty = new ao((e) => {
});
function Z1(e) {
  return typeof e == "string";
}
function eu(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
function tu(e) {
  return typeof e > "u";
}
function nu(e) {
  return tu(e) || e === null;
}
function su(e, t) {
  if (!e) throw new Error(t ? `Unexpected type, expected '${t}'` : "Unexpected type");
}
function io(e) {
  return typeof e == "function";
}
function ru() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function oo() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var au = oo() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function lo(e, t) {
  let n;
  return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (s, r) => {
    const a = parseInt(r, 10), i = t[a];
    let l = s;
    return typeof i == "string" ? l = i : (typeof i == "number" || typeof i == "boolean" || i === void 0 || i === null) && (l = String(i)), l;
  }), au && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
}
function J(e, t, ...n) {
  return lo(typeof e == "number" ? iu(e, t) : t, n);
}
function iu(e, t) {
  const n = ru()?.[e];
  if (typeof n != "string") {
    if (typeof t == "string") return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return n;
}
function aa(e, t) {
  return t && (e.stack || e.stacktrace) ? J(108, null, uo(e), co(e.stack) || co(e.stacktrace)) : uo(e);
}
function co(e) {
  return Array.isArray(e) ? e.join(`
`) : e;
}
function uo(e) {
  return e.code === "ERR_UNC_HOST_NOT_ALLOWED" ? `${e.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.` : typeof e.code == "string" && typeof e.errno == "number" && typeof e.syscall == "string" ? J(109, null, e.message) : e.message || J(110, null);
}
function mo(e = null, t = false) {
  if (!e) return J(111, null);
  if (Array.isArray(e)) {
    const n = z1(e), s = mo(n[0], t);
    return n.length > 1 ? J(112, null, s, n.length) : s;
  }
  if (Z1(e)) return e;
  if (e.detail) {
    const n = e.detail;
    if (n.error) return aa(n.error, t);
    if (n.exception) return aa(n.exception, t);
  }
  return e.stack ? aa(e, t) : e.message ? e.message : J(113, null);
}
var ho, go;
function ou(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const s of e) {
    const r = t(s);
    let a = n[r];
    a || (a = n[r] = []), a.push(s);
  }
  return n;
}
var T8 = class {
  constructor(e, t) {
    this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[ho] = "SetWithKey";
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
  [(go = Symbol.iterator, ho = Symbol.toStringTag, go)]() {
    return this.values();
  }
};
function ia(e, t) {
  const n = this;
  let s = false, r;
  return function() {
    if (s) return r;
    if (s = true, t) try {
      r = e.apply(n, arguments);
    } finally {
      t();
    }
    else r = e.apply(n, arguments);
    return r;
  };
}
var fo, po, To, lu = class {
  constructor(e, t) {
    this.uri = e, this.value = t;
  }
};
function cu(e) {
  return Array.isArray(e);
}
var _o = class fn {
  constructor(t, n) {
    if (this[fo] = "ResourceMap", t instanceof fn) this.map = new Map(t.map), this.toKey = n ?? fn.defaultToKey;
    else if (cu(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? fn.defaultToKey;
      for (const [s, r] of t) this.set(s, r);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? fn.defaultToKey;
  }
  set(t, n) {
    return this.map.set(this.toKey(t), new lu(t, n)), this;
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
    for (const [s, r] of this.map) t(r.value, r.uri, this);
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
  *[(fo = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map) yield [t.uri, t.value];
  }
};
_o.defaultToKey = (e) => e.toString();
var ko = _o, _8 = class {
  constructor(e, t) {
    this[po] = "ResourceSet", !e || typeof e == "function" ? this._map = new ko(e) : (this._map = new ko(t), e.forEach(this.add, this));
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
    this._map.forEach((n, s) => e.call(t, s, s, this));
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
  [(po = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
}, k8 = class {
  constructor() {
    this[To] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
    let s = this._map.get(e);
    if (s) s.value = t, n !== 0 && this.touch(s, n);
    else {
      switch (s = { key: e, value: t, next: void 0, previous: void 0 }, n) {
        case 0:
          this.addItemLast(s);
          break;
        case 1:
          this.addItemFirst(s);
          break;
        case 2:
          this.addItemLast(s);
          break;
        default:
          this.addItemLast(s);
          break;
      }
      this._map.set(e, s), this._size++;
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
    let s = this._head;
    for (; s; ) {
      if (t ? e.bind(t)(s.value, s.key, this) : e(s.value, s.key, this), this._state !== n) throw new Error("LinkedMap got modified during iteration.");
      s = s.next;
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
      const s = n(t);
      t = t.next, yield s;
    }
  }
  [(To = Symbol.toStringTag, Symbol.iterator)]() {
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
        const n = e.next, s = e.previous;
        e === this._tail ? (s.next = void 0, this._tail = s) : (n.previous = s, s.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
      } else if (t === 2) {
        if (e === this._tail) return;
        const n = e.next, s = e.previous;
        e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = s, s.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
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
}, uu = class {
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
}, oa;
((e) => {
  function t(A) {
    return A && typeof A == "object" && typeof A[Symbol.iterator] == "function";
  }
  e.is = t;
  const n = Object.freeze([]);
  function s() {
    return n;
  }
  e.empty = s;
  function* r(A) {
    yield A;
  }
  e.single = r;
  function a(A) {
    return t(A) ? A : r(A);
  }
  e.wrap = a;
  function i(A) {
    return A || n;
  }
  e.from = i;
  function* l(A) {
    for (let N = A.length - 1; N >= 0; N--) yield A[N];
  }
  e.reverse = l;
  function c(A) {
    return !A || A[Symbol.iterator]().next().done === true;
  }
  e.isEmpty = c;
  function u(A) {
    return A[Symbol.iterator]().next().value;
  }
  e.first = u;
  function d(A, N) {
    let x = 0;
    for (const ie of A) if (N(ie, x++)) return true;
    return false;
  }
  e.some = d;
  function m(A, N) {
    for (const x of A) if (N(x)) return x;
  }
  e.find = m;
  function* g(A, N) {
    for (const x of A) N(x) && (yield x);
  }
  e.filter = g;
  function* p(A, N) {
    let x = 0;
    for (const ie of A) yield N(ie, x++);
  }
  e.map = p;
  function* _(A, N) {
    let x = 0;
    for (const ie of A) yield* N(ie, x++);
  }
  e.flatMap = _;
  function* R(...A) {
    for (const N of A) eu(N) ? yield* N : yield N;
  }
  e.concat = R;
  function I(A, N, x) {
    let ie = x;
    for (const tt of A) ie = N(ie, tt);
    return ie;
  }
  e.reduce = I;
  function F(A) {
    let N = 0;
    for (const x of A) N++;
    return N;
  }
  e.length = F;
  function* $(A, N, x = A.length) {
    for (N < -A.length && (N = 0), N < 0 && (N += A.length), x < 0 ? x += A.length : x > A.length && (x = A.length); N < x; N++) yield A[N];
  }
  e.slice = $;
  function G(A, N = Number.POSITIVE_INFINITY) {
    const x = [];
    if (N === 0) return [x, A];
    const ie = A[Symbol.iterator]();
    for (let tt = 0; tt < N; tt++) {
      const ws = ie.next();
      if (ws.done) return [x, e.empty()];
      x.push(ws.value);
    }
    return [x, { [Symbol.iterator]() {
      return ie;
    } }];
  }
  e.consume = G;
  async function Pe(A) {
    const N = [];
    for await (const x of A) N.push(x);
    return Promise.resolve(N);
  }
  e.asyncToArray = Pe;
})(oa || (oa = {}));
var vo = void 0, la = /* @__PURE__ */ new Set(), du = 50;
function yt(e, t) {
  if (Oe?.onLifecycleMisuse?.(e, t), !vo) return;
  const n = `${t}\0${e.stack ?? ""}`;
  la.has(n) || la.size >= du || (la.add(n), vo(e, t));
}
function Eo(e) {
  yt(e, "disposable_post_dispose_set");
}
var mu = false, Oe = null, hu = class f1 {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let n = this.livingDisposables.get(t);
    return n || (n = { parent: null, source: null, isSingleton: false, value: t, idx: f1.idx++ }, this.livingDisposables.set(t, n)), n;
  }
  trackDisposable(t) {
    const n = this.getDisposableData(t);
    n.source || (n.source = new Error().stack);
  }
  setParent(t, n) {
    const s = this.getDisposableData(t);
    s.parent = n;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = true;
  }
  getRootParent(t, n) {
    const s = n.get(t);
    if (s) return s;
    const r = t.parent ? this.getRootParent(this.getDisposableData(t.parent), n) : t;
    return n.set(t, r), r;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, s]) => s.source !== null && !this.getRootParent(s, t).isSingleton).flatMap(([s]) => s);
  }
  computeLeakingDisposables(t = 10, n) {
    let s;
    if (n) s = n;
    else {
      const c = /* @__PURE__ */ new Map(), u = [...this.livingDisposables.values()].filter((m) => m.source !== null && !this.getRootParent(m, c).isSingleton);
      if (u.length === 0) return;
      const d = new Set(u.map((m) => m.value));
      if (s = u.filter((m) => !(m.parent && d.has(m.parent))), s.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!s) return;
    function r(c) {
      function u(m, g) {
        for (; m.length > 0 && g.some((p) => typeof p == "string" ? p === m[0] : m[0].match(p)); ) m.shift();
      }
      const d = c.source.split(`
`).map((m) => m.trim().replace("at ", "")).filter((m) => m !== "");
      return u(d, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), d.reverse();
    }
    const a = new uu();
    for (const c of s) {
      const u = r(c);
      for (let d = 0; d <= u.length; d++) a.add(u.slice(0, d).join(`
`), c);
    }
    s.sort(j1((c) => c.idx, Q1));
    let i = "", l = 0;
    for (const c of s.slice(0, t)) {
      l++;
      const u = r(c), d = [];
      for (let m = 0; m < u.length; m++) {
        let g = u[m];
        g = `(shared with ${a.get(u.slice(0, m + 1).join(`
`)).size}/${s.length} leaks) at ${g}`;
        const _ = a.get(u.slice(0, m).join(`
`)), R = ou([..._].map((I) => r(I)[m]), (I) => I);
        delete R[u[m]];
        for (const [I, F] of Object.entries(R)) d.unshift(`    - stacktraces of ${F.length} other leaks continue with ${I}`);
        d.unshift(g);
      }
      i += `


==================== Leaking disposable ${l}/${s.length}: ${c.value.constructor.name} ====================
${d.join(`
`)}
============================================================

`;
    }
    return s.length > t && (i += `


... and ${s.length - t} more leaking disposables

`), { leaks: s, details: i };
  }
};
hu.idx = 0;
function gu(e) {
  Oe = e;
}
if (mu) {
  const e = "__is_disposable_tracked__";
  gu(new class {
    trackDisposable(t) {
      const n = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        t[e] || console.log(n);
      }, 3e3);
    }
    setParent(t, n) {
      if (t && t !== Ee.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsDisposed(t) {
      if (t && t !== Ee.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsSingleton(t) {
    }
  }());
}
function Ns(e) {
  return Oe?.trackDisposable(e), e;
}
function Ds(e) {
  Oe?.markAsDisposed(e);
}
function St(e, t) {
  Oe?.setParent(e, t);
}
function fu(e, t) {
  if (Oe) for (const n of e) Oe.setParent(n, t);
}
function yo(e) {
  return Oe?.markAsSingleton(e), e;
}
function pu(e) {
  return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
function Os(e) {
  if (oa.is(e)) {
    let t;
    for (const n of e) if (n) try {
      n.dispose();
    } catch (s) {
      (t ??= []).push(s);
    }
    if (t !== void 0) throw t.length === 1 ? t[0] : new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function Tu(...e) {
  const t = Rt(() => Os(e));
  return fu(e, t), t;
}
function Rt(e) {
  const t = Ns({ dispose: ia(() => {
    Ds(t), e();
  }) });
  return t;
}
var So = class Yi {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = false, Ns(this);
  }
  dispose() {
    this._isDisposed || (Ds(this), this._isDisposed = true, this.clear());
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
      Os(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(t) {
    if (!t) return t;
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    if (St(t, this), this._isDisposed) {
      const n = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      Yi.DISABLE_DISPOSED_WARNING || console.warn(n.stack), Eo(n);
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
    t && this._toDispose.has(t) && (this._toDispose.delete(t), St(t, null));
  }
  transferOut(t) {
    if (this._isDisposed) {
      const n = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      Yi.DISABLE_DISPOSED_WARNING || console.warn(n.stack), yt(n, "disposable_use_after_dispose");
    }
    return this.deleteAndLeak(t), t;
  }
};
So.DISABLE_DISPOSED_WARNING = false;
var ve = So, Ee = class {
  constructor() {
    this._store = new ve(), Ns(this), St(this._store, this);
  }
  dispose() {
    Ds(this), this._store.dispose();
  }
  _register(e) {
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(e);
  }
};
Ee.None = Object.freeze({ dispose() {
} });
var At = class {
  constructor() {
    this._isDisposed = false, Ns(this);
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(e) {
    if (this._isDisposed) {
      if (e) {
        const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
        ve.DISABLE_DISPOSED_WARNING || console.warn(t.stack), Eo(t), e.dispose();
      }
      return;
    }
    e !== this._value && (this._value?.dispose(), e && St(e, this), this._value = e);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, Ds(this), this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    const e = this._value;
    return this._value = void 0, e && St(e, null), e;
  }
}, Ro = class Ki {
  constructor(t) {
    this.element = t, this.next = Ki.Undefined, this.prev = Ki.Undefined;
  }
};
Ro.Undefined = new Ro(void 0);
var _u = globalThis.performance && typeof globalThis.performance.now == "function", ku = class p1 {
  static create(t) {
    return new p1(t);
  }
  constructor(t) {
    this._now = _u && t === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
}, Ao = false, vu = false, ee;
((e) => {
  e.None = () => Ee.None;
  function t(E) {
    if (vu) {
      const { onDidAddListener: T } = E, v = ua.create();
      let k = 0;
      E.onDidAddListener = () => {
        ++k === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), v.print()), T?.();
      };
    }
  }
  function n(E, T) {
    return p(E, () => {
    }, 0, void 0, true, void 0, T);
  }
  e.defer = n;
  function s(E) {
    return (T, v = null, k) => {
      let S = false, w;
      return w = E((M) => {
        if (!S) return w ? w.dispose() : S = true, T.call(v, M);
      }, null, k), S && w.dispose(), w;
    };
  }
  e.once = s;
  function r(E, T) {
    return e.once(e.filter(E, T));
  }
  e.onceIf = r;
  function a(E, T, v) {
    return m((k, S = null, w) => E((M) => k.call(S, T(M)), null, w), v);
  }
  e.map = a;
  function i(E, T, v) {
    return m((k, S = null, w) => E((M) => {
      T(M), k.call(S, M);
    }, null, w), v);
  }
  e.forEach = i;
  function l(E, T, v) {
    return m((k, S = null, w) => E((M) => T(M) && k.call(S, M), null, w), v);
  }
  e.filter = l;
  function c(E) {
    return E;
  }
  e.signal = c;
  function u(...E) {
    return (T, v = null, k) => {
      const S = Tu(...E.map((w) => w((M) => T.call(v, M))));
      return g(S, k);
    };
  }
  e.any = u;
  function d(E, T, v, k) {
    let S = v;
    return a(E, (w) => (S = T(S, w), S), k);
  }
  e.reduce = d;
  function m(E, T) {
    let v;
    const k = { onWillAddFirstListener() {
      v = E(S.fire, S);
    }, onDidRemoveLastListener() {
      v?.dispose();
    } };
    T || t(k);
    const S = new H(k);
    return T?.add(S), S.event;
  }
  function g(E, T) {
    return T instanceof Array ? T.push(E) : T && T.add(E), E;
  }
  function p(E, T, v = 100, k = false, S = false, w, M) {
    let j, ne, nt, bs = 0, vt;
    const no = { leakWarningThreshold: w, onWillAddFirstListener() {
      j = E((P1) => {
        bs++, ne = T(ne, P1), k && !nt && (Is.fire(ne), ne = void 0), vt ??= () => {
          const C1 = ne;
          ne = void 0, nt = void 0, (!k || bs > 1) && Is.fire(C1), bs = 0;
        }, typeof v == "number" ? (clearTimeout(nt), nt = setTimeout(vt, v)) : nt === void 0 && (nt = 0, queueMicrotask(vt));
      });
    }, onWillRemoveListener() {
      S && bs > 0 && vt?.();
    }, onDidRemoveLastListener() {
      vt = void 0, j.dispose();
    } };
    M || t(no);
    const Is = new H(no);
    return M?.add(Is), Is.event;
  }
  e.debounce = p;
  function _(E, T = 0, v) {
    return e.debounce(E, (k, S) => k ? (k.push(S), k) : [S], T, void 0, true, void 0, v);
  }
  e.accumulate = _;
  function R(E, T = (k, S) => k === S, v) {
    let k = true, S;
    return l(E, (w) => {
      const M = k || !T(w, S);
      return k = false, S = w, M;
    }, v);
  }
  e.latch = R;
  function I(E, T, v) {
    return [e.filter(E, T, v), e.filter(E, (k) => !T(k), v)];
  }
  e.split = I;
  function F(E, T = false, v = [], k) {
    let S = v.slice(), w = E((ne) => {
      S ? S.push(ne) : j.fire(ne);
    });
    k && k.add(w);
    const M = () => {
      S?.forEach((ne) => j.fire(ne)), S = null;
    }, j = new H({ onWillAddFirstListener() {
      w || (w = E((ne) => j.fire(ne)), k && k.add(w));
    }, onDidAddFirstListener() {
      S && (T ? setTimeout(M) : M());
    }, onDidRemoveLastListener() {
      w && w.dispose(), w = null;
    } });
    return k && k.add(j), j.event;
  }
  e.buffer = F;
  function $(E, T) {
    return (k, S, w) => {
      const M = T(new Pe());
      return E(function(j) {
        const ne = M.evaluate(j);
        ne !== G && k.call(S, ne);
      }, void 0, w);
    };
  }
  e.chain = $;
  const G = /* @__PURE__ */ Symbol("HaltChainable");
  class Pe {
    constructor() {
      this.steps = [];
    }
    map(T) {
      return this.steps.push(T), this;
    }
    forEach(T) {
      return this.steps.push((v) => (T(v), v)), this;
    }
    filter(T) {
      return this.steps.push((v) => T(v) ? v : G), this;
    }
    reduce(T, v) {
      let k = v;
      return this.steps.push((S) => (k = T(k, S), k)), this;
    }
    latch(T = (v, k) => v === k) {
      let v = true, k;
      return this.steps.push((S) => {
        const w = v || !T(S, k);
        return v = false, k = S, w ? S : G;
      }), this;
    }
    evaluate(T) {
      for (const v of this.steps) if (T = v(T), T === G) break;
      return T;
    }
  }
  function A(E, T, v = (k) => k) {
    const k = (...j) => M.fire(v(...j)), S = () => E.on(T, k), w = () => E.removeListener(T, k), M = new H({ onWillAddFirstListener: S, onDidRemoveLastListener: w });
    return M.event;
  }
  e.fromNodeEventEmitter = A;
  function N(E) {
    let T;
    const v = () => {
      T = E.subscribe((w) => S.fire(w));
    }, k = () => {
      T?.unsubscribe(), T = void 0;
    }, S = new H({ onWillAddFirstListener: v, onDidRemoveLastListener: k });
    return S.event;
  }
  e.fromRxJS = N;
  function x(E, T, v = (k) => k) {
    const k = (...j) => M.fire(v(...j)), S = () => E.addEventListener(T, k), w = () => E.removeEventListener(T, k), M = new H({ onWillAddFirstListener: S, onDidRemoveLastListener: w });
    return M.event;
  }
  e.fromDOMEventEmitter = x;
  function ie(E, T) {
    return new Promise((v) => s(E)(v, null, T));
  }
  e.toPromise = ie;
  function tt(E) {
    const T = new H();
    return E.then((v) => {
      T.fire(v);
    }, () => {
      T.fire(void 0);
    }).finally(() => {
      T.dispose();
    }), T.event;
  }
  e.fromPromise = tt;
  function ws(E, T) {
    return E((v) => T.fire(v));
  }
  e.forward = ws;
  function M1(E, T, v) {
    return T(v), E((k) => T(k));
  }
  e.runAndSubscribe = M1;
  class L1 {
    constructor(T, v) {
      this._observable = T, this._counter = 0, this._hasChanged = false;
      const k = { onWillAddFirstListener: () => {
        T.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        T.removeObserver(this);
      } };
      v || t(k), this.emitter = new H(k), v && v.add(this.emitter);
    }
    beginUpdate(T) {
      this._counter++;
    }
    handlePossibleChange(T) {
    }
    handleChange(T, v) {
      this._hasChanged = true;
    }
    endUpdate(T) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function x1(E, T) {
    return new L1(E, T).emitter.event;
  }
  e.fromObservable = x1;
  function U1(E) {
    return (T, v, k) => {
      let S = 0, w = false;
      const M = { beginUpdate() {
        S++;
      }, endUpdate() {
        S--, S === 0 && (E.reportChanges(), w && (w = false, T.call(v)));
      }, handlePossibleChange() {
      }, handleChange() {
        w = true;
      } };
      E.addObserver(M), E.reportChanges();
      const j = { dispose() {
        E.removeObserver(M);
      } };
      return k instanceof ve ? k.add(j) : Array.isArray(k) && k.push(j), j;
    };
  }
  e.fromObservableLight = U1;
})(ee || (ee = {}));
var ca = class zi {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${zi._idPool++}`, zi.all.add(this);
  }
  start(t) {
    this._stopWatch = new ku(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
ca.all = /* @__PURE__ */ new Set(), ca._idPool = 0;
var Eu = ca, wo = -1, yu = 1;
function bo() {
  return (yu++).toString(16).padStart(3, "0");
}
var Su = class {
  constructor(e, t, n = bo()) {
    this._errorHandler = e, this.threshold = t, this.name = n, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    const n = this.threshold;
    if (n <= 0 || t < n) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const s = e.value, r = this._stacks.get(s) || 0;
    if (this._stacks.set(s, r + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = n * 0.5;
      const [a, i] = this.getMostFrequentStack(), l = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${i}):`;
      console.warn(l), console.warn(a);
      const c = i / t > 0.3 ? "dominated" : "popular", u = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, d = new Io(c, l, a, t, u);
      this._errorHandler(d), yt(d, "emitter_listener_leak");
    }
    return () => {
      const a = this._stacks.get(s) || 0;
      a <= 1 ? this._stacks.delete(s) : this._stacks.set(s, a - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (const [n, s] of this._stacks) (!e || t < s) && (e = [n, s], t = s);
    return e;
  }
}, ua = class T1 {
  constructor(t) {
    this.value = t;
  }
  static create() {
    const t = new Error();
    return new T1(t.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, Io = class extends Error {
  constructor(e, t, n, s, r) {
    super(r ? `[${r}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = s, this.details = t, this.stack = n;
  }
}, Ru = class extends Io {
  constructor(e, t, n, s, r) {
    super(e, t, n, s, r), this.name = "ListenerRefusalError";
  }
}, Ms = class {
  constructor(e) {
    this.value = e;
  }
}, Au = 2, No = (e, t) => {
  if (e instanceof Ms) t(e);
  else for (let n = 0; n < e.length; n++) {
    const s = e[n];
    s && t(s);
  }
}, H = class {
  constructor(e) {
    this._size = 0, this._options = e, (wo > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? wo, this._leakWarningName = this._options?.leakWarningName ?? bo(), this._leakWarningErrorHandler = this._options?.onListenerError ?? st), this._perfMon = this._options?._profName ? new Eu(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  _getLeakageMonitor() {
    if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new Su(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (Ao) {
          const e = this._listeners;
          queueMicrotask(() => {
            No(e, (t) => t.stack?.print());
          });
        }
        No(this._listeners, (e) => {
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
          const c = `[${l.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${l.threshold})`;
          console.warn(c);
          const u = l.getMostFrequentStack() ?? ["UNKNOWN stack", -1], d = u[1] / this._size > 0.3 ? "dominated" : "popular", m = new Ru(d, `${c}. HINT: Stack shows most frequent listener (${u[1]}-times)`, u[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || st)(m), yt(m, "emitter_listener_refusal"), Ee.None;
        }
      }
      if (this._disposed) {
        const l = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return yt(l, "emitter_use_after_dispose"), Ee.None;
      }
      t && (e = e.bind(t));
      const s = new Ms(e);
      let r, a;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const l = this._getLeakageMonitor();
        l && (s.stack = ua.create(), r = l.check(s.stack, this._size + 1));
      }
      Ao && (s.stack = a ?? ua.create()), this._listeners ? this._listeners instanceof Ms ? (this._deliveryQueue ??= new wu(), this._listeners = [this._listeners, s]) : this._listeners.push(s) : (this._options?.onWillAddFirstListener?.(this), this._listeners = s, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const i = Rt(() => {
        r?.(), this._removeListener(s);
      });
      return n instanceof ve ? n.add(i) : Array.isArray(n) && n.push(i), i;
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
    const s = this._deliveryQueue.current === this;
    if (this._size * Au <= t.length) {
      let r = 0;
      for (let a = 0; a < t.length; a++) t[a] ? t[r++] = t[a] : s && r < this._deliveryQueue.end && (this._deliveryQueue.end--, r < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = r;
    }
  }
  _deliver(e, t) {
    if (!e) return;
    const n = this._options?.onListenerError || st;
    if (!n) {
      e.value(t);
      return;
    }
    try {
      e.value(t);
    } catch (s) {
      n(s);
    }
  }
  _deliverQueue(e) {
    const t = e.current._listeners;
    for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
    e.reset();
  }
  fire(e) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof Ms) this._deliver(this._listeners, e);
    else {
      const t = this._deliveryQueue;
      t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
}, wu = class {
  constructor() {
    this.i = -1, this.end = 0;
  }
  enqueue(e, t, n) {
    this.i = 0, this.end = n, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
}, bu = class {
  constructor(e) {
    this.event = e, this._listener = new At();
  }
  hook(e, t) {
    this._listener.value = this.event(e, t);
  }
  unhook() {
    this._listener.clear();
  }
  disposeListener() {
    this._listener.dispose();
  }
}, Iu = class {
  constructor() {
    this.hasListeners = false, this.sources = [], this.emitter = new H({ onWillAddFirstListener: () => this.onFirstListenerAdd(), onDidRemoveLastListener: () => this.onLastListenerRemove() });
  }
  get event() {
    return this.emitter.event;
  }
  add(e) {
    const t = new bu(e);
    return this.sources.push(t), this.hasListeners && t.hook(this.emitter.fire, this.emitter), Rt(ia(() => {
      t.disposeListener();
      const s = this.sources.indexOf(t);
      s !== -1 && this.sources.splice(s, 1);
    }));
  }
  onFirstListenerAdd() {
    this.hasListeners = true, this.sources.forEach((e) => e.hook(this.emitter.fire, this.emitter));
  }
  onLastListenerRemove() {
    this.hasListeners = false, this.sources.forEach((e) => e.unhook());
  }
  dispose() {
    this.emitter.dispose();
    for (const e of this.sources) e.disposeListener();
    this.sources.length = 0;
  }
}, Nu = class {
  constructor() {
    this.listening = false, this.inputEvent = ee.None, this.emitter = new H({ onDidAddFirstListener: () => {
      this.listening = true, this.inputEventListener?.dispose(), this.inputEventListener = new At(), this.inputEventListener.value = this.inputEvent(this.emitter.fire, this.emitter);
    }, onDidRemoveLastListener: () => {
      this.listening = false, this.inputEventListener?.dispose(), this.inputEventListener = void 0;
    } }), this.event = this.emitter.event;
  }
  set input(e) {
    this.inputEvent = e, this.listening && (this.inputEventListener ??= new At(), this.inputEventListener.value = e(this.emitter.fire, this.emitter));
  }
  dispose() {
    this.inputEventListener?.dispose(), this.inputEventListener = void 0, this.inputEvent = ee.None, this.emitter.dispose();
  }
};
function Du(e) {
  return !!e.parentPort;
}
var Ce = class {
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
}, wt = typeof Buffer < "u", Ou = new Ce(() => new Uint8Array(256)), rt, da, Mu = 512 * 1024, Fe = null, ma = false, Do = false, Lu = 1 / 0, Oo, xu = 1 / 0, Mo;
function Lo(e, t) {
  if (Mo && e.byteLength >= xu) try {
    Mo({ buffer: e, byteLength: e.byteLength, source: t });
  } catch {
  }
}
var K = class re {
  static alloc(t) {
    let n;
    return wt ? n = new re(Buffer.allocUnsafe(t)) : n = new re(new Uint8Array(t)), Lo(n, "alloc"), n;
  }
  static wrap(t) {
    wt && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength));
    const n = new re(t);
    return Lo(n, "wrap"), n;
  }
  static fromString(t, n) {
    return !(n?.dontUseNodeBuffer || false) && wt ? new re(Buffer.from(t)) : (rt || (rt = new TextEncoder()), new re(rt.encode(t)));
  }
  static withPooledString(t, n) {
    if (wt) return n(re.fromString(t));
    if (ma) return Do || (Do = true, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), n(re.fromString(t));
    const s = t.length * 3;
    if (s > Mu) return n(re.fromString(t));
    if (rt || (rt = new TextEncoder()), !Fe || Fe.byteLength < s) {
      let a = Fe ? Fe.byteLength * 2 : 16384;
      for (; a < s; ) a *= 2;
      Fe = new Uint8Array(a);
    }
    const r = rt.encodeInto(t, Fe).written;
    ma = true;
    try {
      return n(new re(Fe.subarray(0, r)));
    } finally {
      ma = false;
    }
  }
  static fromByteArray(t) {
    const n = re.alloc(t.length);
    for (let s = 0, r = t.length; s < r; s++) n.buffer[s] = t[s];
    return n;
  }
  static concat(t, n) {
    if (typeof n > "u") {
      n = 0;
      for (let a = 0, i = t.length; a < i; a++) n += t[a].byteLength;
    }
    const s = re.alloc(n);
    let r = 0;
    for (let a = 0, i = t.length; a < i; a++) {
      const l = t[a];
      s.set(l, r), r += l.byteLength;
    }
    return s;
  }
  constructor(t) {
    this.buffer = t, this.byteLength = this.buffer.byteLength;
  }
  clone() {
    const t = re.alloc(this.byteLength);
    return t.set(this), t;
  }
  toString() {
    if (wt) return this.buffer.toString();
    if (Oo && this.buffer.byteLength > Lu) try {
      Oo(this.buffer.byteLength);
    } catch {
    }
    return da || (da = new TextDecoder()), da.decode(this.buffer);
  }
  slice(t, n) {
    return new re(this.buffer.subarray(t, n));
  }
  set(t, n) {
    if (t instanceof re) this.buffer.set(t.buffer, n);
    else if (t instanceof Uint8Array) this.buffer.set(t, n);
    else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), n);
    else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), n);
    else throw new Error("Unknown argument 'array'");
  }
  readUInt32BE(t) {
    return Pu(this.buffer, t);
  }
  writeUInt32BE(t, n) {
    Cu(this.buffer, t, n);
  }
  readUInt32LE(t) {
    return Fu(this.buffer, t);
  }
  writeUInt32LE(t, n) {
    Bu(this.buffer, t, n);
  }
  readUInt8(t) {
    return Gu(this.buffer, t);
  }
  writeUInt8(t, n) {
    qu(this.buffer, t, n);
  }
  indexOf(t, n = 0) {
    return Uu(this.buffer, t instanceof re ? t.buffer : t, n);
  }
  equals(t) {
    return this === t ? true : this.byteLength !== t.byteLength ? false : this.buffer.every((n, s) => n === t.buffer[s]);
  }
};
function Uu(e, t, n = 0) {
  const s = t.byteLength, r = e.byteLength;
  if (s === 0) return 0;
  if (s === 1) return e.indexOf(t[0]);
  if (s > r - n) return -1;
  const a = Ou.value;
  a.fill(t.length);
  for (let u = 0; u < t.length; u++) a[t[u]] = t.length - u - 1;
  let i = n + t.length - 1, l = i, c = -1;
  for (; i < r; ) if (e[i] === t[l]) {
    if (l === 0) {
      c = i;
      break;
    }
    i--, l--;
  } else i += Math.max(t.length - l, a[e[i]]), l = t.length - 1;
  return c;
}
function Pu(e, t) {
  return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function Cu(e, t, n) {
  e[n + 3] = t, t = t >>> 8, e[n + 2] = t, t = t >>> 8, e[n + 1] = t, t = t >>> 8, e[n] = t;
}
function Fu(e, t) {
  return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function Bu(e, t, n) {
  e[n + 0] = t & 255, t = t >>> 8, e[n + 1] = t & 255, t = t >>> 8, e[n + 2] = t & 255, t = t >>> 8, e[n + 3] = t & 255;
}
function Gu(e, t) {
  return e[t];
}
function qu(e, t, n) {
  e[n] = t;
}
function Wu(e) {
  let t = 0, n = 0, s = 0;
  const r = new Uint8Array(Math.floor(e.length / 4 * 3)), a = (l) => {
    switch (n) {
      case 3:
        r[s++] = t | l, n = 0;
        break;
      case 2:
        r[s++] = t | l >>> 2, t = l << 6, n = 3;
        break;
      case 1:
        r[s++] = t | l >>> 4, t = l << 4, n = 2;
        break;
      default:
        t = l << 2, n = 1;
    }
  };
  for (let l = 0; l < e.length; l++) {
    const c = e.charCodeAt(l);
    if (c >= 65 && c <= 90) a(c - 65);
    else if (c >= 97 && c <= 122) a(c - 97 + 26);
    else if (c >= 48 && c <= 57) a(c - 48 + 52);
    else if (c === 43 || c === 45) a(62);
    else if (c === 47 || c === 95) a(63);
    else {
      if (c === 61) break;
      throw new SyntaxError(`Unexpected base64 character ${e[l]}`);
    }
  }
  const i = s;
  for (; n > 0; ) a(0);
  return K.wrap(r).slice(0, i);
}
var xo = Object.freeze(function(e, t) {
  const n = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(n);
  } };
}), at;
((e) => {
  function t(n) {
    return n === e.None || n === e.Cancelled || n instanceof Ls ? true : !n || typeof n != "object" ? false : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: ee.None }), e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: xo });
})(at || (at = {}));
var Ls = class {
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
    return this._isCancelled ? xo : (this._emitter || (this._emitter = new H()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}, Uo = class {
  constructor(e) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new Ls()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof Ls && this._token.cancel() : this._token = at.Cancelled;
  }
  dispose(e = false) {
    e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof Ls && this._token.dispose() : this._token = at.None;
  }
}, it = "en", xs = false, Us = false, bt = false, $u = false, Po = false, ha = false, Ju = false, Hu = false, Vu = false, Yu = false, Ps = void 0, Cs = it, Co = it, Ku = void 0, ye = void 0, Se = globalThis, se = void 0;
typeof Se.vscode < "u" && typeof Se.vscode.process < "u" ? se = Se.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (se = process);
var Fo = typeof se?.versions?.electron == "string", zu = Fo && se?.type === "renderer";
if (typeof se == "object") {
  xs = se.platform === "win32", Us = se.platform === "darwin", bt = se.platform === "linux", $u = bt && !!se.env.SNAP && !!se.env.SNAP_REVISION, Ju = Fo, Vu = !!se.env.CI || !!se.env.BUILD_ARTIFACTSTAGINGDIRECTORY, Ps = it, Cs = it;
  const e = se.env.VSCODE_NLS_CONFIG;
  if (e) try {
    const t = JSON.parse(e);
    Ps = t.userLocale, Co = t.osLocale, Cs = t.resolvedLanguage || it, Ku = t.languagePack?.translationsConfigFile;
  } catch {
  }
  Po = true;
} else typeof navigator == "object" && !zu ? (ye = navigator.userAgent, xs = ye.indexOf("Windows") >= 0, Us = ye.indexOf("Macintosh") >= 0, Hu = (ye.indexOf("Macintosh") >= 0 || ye.indexOf("iPad") >= 0 || ye.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, bt = ye.indexOf("Linux") >= 0, Yu = ye?.indexOf("Mobi") >= 0, ha = true, Cs = oo() || it, Ps = navigator.language.toLowerCase(), Co = Ps) : console.error("Unable to resolve platform.");
var ga = 0;
Us ? ga = 1 : xs ? ga = 3 : bt && (ga = 2);
var Be = xs, fa = Us, Bo = bt, Xu = Po, pa = ha, ju = ha && typeof Se.importScripts == "function", Qu = ju ? Se.origin : void 0, pe = ye, Me = Cs, Go;
((e) => {
  function t() {
    return Me;
  }
  e.value = t;
  function n() {
    return Me.length === 2 ? Me === "en" : Me.length >= 3 ? Me[0] === "e" && Me[1] === "n" && Me[2] === "-" : false;
  }
  e.isDefaultVariant = n;
  function s() {
    return Me === "en";
  }
  e.isDefault = s;
})(Go || (Go = {}));
var Zu = typeof Se.postMessage == "function" && !Se.importScripts, ed = (() => {
  if (Zu) {
    const e = [];
    Se.addEventListener("message", (n) => {
      if (n.data && n.data.vscodeScheduleAsyncWork) for (let s = 0, r = e.length; s < r; s++) {
        const a = e[s];
        if (a.id === n.data.vscodeScheduleAsyncWork) {
          e.splice(s, 1), a.callback();
          return;
        }
      }
    });
    let t = 0;
    return (n) => {
      const s = ++t;
      e.push({ id: s, callback: n }), Se.postMessage({ vscodeScheduleAsyncWork: s }, "*");
    };
  }
  return (e) => setTimeout(e);
})(), qo = !!(pe && pe.indexOf("Chrome") >= 0), td = !!(pe && pe.indexOf("Firefox") >= 0), nd = !!(!qo && pe && pe.indexOf("Safari") >= 0), sd = !!(pe && pe.indexOf("Edg/") >= 0), v8 = !!(pe && pe.indexOf("Android") >= 0), E8 = se?.arch, y8 = se?.platform, S8 = se?.versions?.node, Ge, Ta = globalThis.vscode;
if (typeof Ta < "u" && typeof Ta.process < "u") {
  const e = Ta.process;
  Ge = { get platform() {
    return e.platform;
  }, get arch() {
    return e.arch;
  }, get env() {
    return e.env;
  }, cwd() {
    return e.cwd();
  } };
} else typeof process < "u" && typeof process?.versions?.node == "string" ? Ge = { get platform() {
  return process.platform;
}, get arch() {
  return process.arch;
}, get env() {
  return process.env;
}, cwd() {
  return process.env.VSCODE_CWD || process.cwd();
} } : Ge = { get platform() {
  return Be ? "win32" : fa ? "darwin" : "linux";
}, get arch() {
}, get env() {
  return {};
}, cwd() {
  return "/";
} };
var Fs = Ge.cwd, rd = Ge.env, ad = Ge.platform, R8 = Ge.arch, id = 65, od = 97, ld = 90, cd = 122, qe = 46, Q = 47, oe = 92, Re = 58, ud = 63, Wo = class extends Error {
  constructor(e, t, n) {
    let s;
    typeof t == "string" && t.indexOf("not ") === 0 ? (s = "must not be", t = t.replace(/^not /, "")) : s = "must be";
    const r = e.indexOf(".") !== -1 ? "property" : "argument";
    let a = `The "${e}" ${r} ${s} of type ${t}`;
    a += `. Received type ${typeof n}`, super(a), this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function dd(e, t) {
  if (e === null || typeof e != "object") throw new Wo(t, "Object", e);
}
function q(e, t) {
  if (typeof e != "string") throw new Wo(t, "string", e);
}
var le = ad === "win32";
function b(e) {
  return e === Q || e === oe;
}
function _a(e) {
  return e === Q;
}
function Ae(e) {
  return e >= id && e <= ld || e >= od && e <= cd;
}
function Bs(e, t, n, s) {
  let r = "", a = 0, i = -1, l = 0, c = 0;
  for (let u = 0; u <= e.length; ++u) {
    if (u < e.length) c = e.charCodeAt(u);
    else {
      if (s(c)) break;
      c = Q;
    }
    if (s(c)) {
      if (!(i === u - 1 || l === 1)) if (l === 2) {
        if (r.length < 2 || a !== 2 || r.charCodeAt(r.length - 1) !== qe || r.charCodeAt(r.length - 2) !== qe) {
          if (r.length > 2) {
            const d = r.lastIndexOf(n);
            d === -1 ? (r = "", a = 0) : (r = r.slice(0, d), a = r.length - 1 - r.lastIndexOf(n)), i = u, l = 0;
            continue;
          } else if (r.length !== 0) {
            r = "", a = 0, i = u, l = 0;
            continue;
          }
        }
        t && (r += r.length > 0 ? `${n}..` : "..", a = 2);
      } else r.length > 0 ? r += `${n}${e.slice(i + 1, u)}` : r = e.slice(i + 1, u), a = u - i - 1;
      i = u, l = 0;
    } else c === qe && l !== -1 ? ++l : l = -1;
  }
  return r;
}
function md(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function $o(e, t) {
  dd(t, "pathObject");
  const n = t.dir || t.root, s = t.base || `${t.name || ""}${md(t.ext)}`;
  return n ? n === t.root ? `${n}${s}` : `${n}${e}${s}` : s;
}
var V = { resolve(...e) {
  let t = "", n = "", s = false;
  for (let r = e.length - 1; r >= -1; r--) {
    let a;
    if (r >= 0) {
      if (a = e[r], q(a, `paths[${r}]`), a.length === 0) continue;
    } else t.length === 0 ? a = Fs() : (a = rd[`=${t}`] || Fs(), (a === void 0 || a.slice(0, 2).toLowerCase() !== t.toLowerCase() && a.charCodeAt(2) === oe) && (a = `${t}\\`));
    const i = a.length;
    let l = 0, c = "", u = false;
    const d = a.charCodeAt(0);
    if (i === 1) b(d) && (l = 1, u = true);
    else if (b(d)) if (u = true, b(a.charCodeAt(1))) {
      let m = 2, g = m;
      for (; m < i && !b(a.charCodeAt(m)); ) m++;
      if (m < i && m !== g) {
        const p = a.slice(g, m);
        for (g = m; m < i && b(a.charCodeAt(m)); ) m++;
        if (m < i && m !== g) {
          for (g = m; m < i && !b(a.charCodeAt(m)); ) m++;
          (m === i || m !== g) && (c = `\\\\${p}\\${a.slice(g, m)}`, l = m);
        }
      }
    } else l = 1;
    else Ae(d) && a.charCodeAt(1) === Re && (c = a.slice(0, 2), l = 2, i > 2 && b(a.charCodeAt(2)) && (u = true, l = 3));
    if (c.length > 0) if (t.length > 0) {
      if (c.toLowerCase() !== t.toLowerCase()) continue;
    } else t = c;
    if (s) {
      if (t.length > 0) break;
    } else if (n = `${a.slice(l)}\\${n}`, s = u, u && t.length > 0) break;
  }
  return n = Bs(n, !s, "\\", b), s ? `${t}\\${n}` : `${t}${n}` || ".";
}, normalize(e) {
  q(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let n = 0, s, r = false;
  const a = e.charCodeAt(0);
  if (t === 1) return _a(a) ? "\\" : e;
  if (b(a)) if (r = true, b(e.charCodeAt(1))) {
    let l = 2, c = l;
    for (; l < t && !b(e.charCodeAt(l)); ) l++;
    if (l < t && l !== c) {
      const u = e.slice(c, l);
      for (c = l; l < t && b(e.charCodeAt(l)); ) l++;
      if (l < t && l !== c) {
        for (c = l; l < t && !b(e.charCodeAt(l)); ) l++;
        if (l === t) return `\\\\${u}\\${e.slice(c)}\\`;
        l !== c && (s = `\\\\${u}\\${e.slice(c, l)}`, n = l);
      }
    }
  } else n = 1;
  else Ae(a) && e.charCodeAt(1) === Re && (s = e.slice(0, 2), n = 2, t > 2 && b(e.charCodeAt(2)) && (r = true, n = 3));
  let i = n < t ? Bs(e.slice(n), !r, "\\", b) : "";
  if (i.length === 0 && !r && (i = "."), i.length > 0 && b(e.charCodeAt(t - 1)) && (i += "\\"), !r && s === void 0 && e.includes(":")) {
    if (i.length >= 2 && Ae(i.charCodeAt(0)) && i.charCodeAt(1) === Re) return `.\\${i}`;
    let l = e.indexOf(":");
    do
      if (l === t - 1 || b(e.charCodeAt(l + 1))) return `.\\${i}`;
    while ((l = e.indexOf(":", l + 1)) !== -1);
  }
  return s === void 0 ? r ? `\\${i}` : i : r ? `${s}\\${i}` : `${s}${i}`;
}, isAbsolute(e) {
  q(e, "path");
  const t = e.length;
  if (t === 0) return false;
  const n = e.charCodeAt(0);
  return b(n) || t > 2 && Ae(n) && e.charCodeAt(1) === Re && b(e.charCodeAt(2));
}, join(...e) {
  if (e.length === 0) return ".";
  let t, n;
  for (let a = 0; a < e.length; ++a) {
    const i = e[a];
    q(i, "path"), i.length > 0 && (t === void 0 ? t = n = i : t += `\\${i}`);
  }
  if (t === void 0) return ".";
  let s = true, r = 0;
  if (typeof n == "string" && b(n.charCodeAt(0))) {
    ++r;
    const a = n.length;
    a > 1 && b(n.charCodeAt(1)) && (++r, a > 2 && (b(n.charCodeAt(2)) ? ++r : s = false));
  }
  if (s) {
    for (; r < t.length && b(t.charCodeAt(r)); ) r++;
    r >= 2 && (t = `\\${t.slice(r)}`);
  }
  return V.normalize(t);
}, relative(e, t) {
  if (q(e, "from"), q(t, "to"), e === t) return "";
  const n = V.resolve(e), s = V.resolve(t);
  if (n === s || (e = n.toLowerCase(), t = s.toLowerCase(), e === t)) return "";
  if (n.length !== e.length || s.length !== t.length) {
    const _ = n.split("\\"), R = s.split("\\");
    _[_.length - 1] === "" && _.pop(), R[R.length - 1] === "" && R.pop();
    const I = _.length, F = R.length, $ = I < F ? I : F;
    let G;
    for (G = 0; G < $ && _[G].toLowerCase() === R[G].toLowerCase(); G++) ;
    return G === 0 ? s : G === $ ? F > $ ? R.slice(G).join("\\") : I > $ ? "..\\".repeat(I - 1 - G) + ".." : "" : "..\\".repeat(I - G) + R.slice(G).join("\\");
  }
  let r = 0;
  for (; r < e.length && e.charCodeAt(r) === oe; ) r++;
  let a = e.length;
  for (; a - 1 > r && e.charCodeAt(a - 1) === oe; ) a--;
  const i = a - r;
  let l = 0;
  for (; l < t.length && t.charCodeAt(l) === oe; ) l++;
  let c = t.length;
  for (; c - 1 > l && t.charCodeAt(c - 1) === oe; ) c--;
  const u = c - l, d = i < u ? i : u;
  let m = -1, g = 0;
  for (; g < d; g++) {
    const _ = e.charCodeAt(r + g);
    if (_ !== t.charCodeAt(l + g)) break;
    _ === oe && (m = g);
  }
  if (g !== d) {
    if (m === -1) return s;
  } else {
    if (u > d) {
      if (t.charCodeAt(l + g) === oe) return s.slice(l + g + 1);
      if (g === 2) return s.slice(l + g);
    }
    i > d && (e.charCodeAt(r + g) === oe ? m = g : g === 2 && (m = 3)), m === -1 && (m = 0);
  }
  let p = "";
  for (g = r + m + 1; g <= a; ++g) (g === a || e.charCodeAt(g) === oe) && (p += p.length === 0 ? ".." : "\\..");
  return l += m, p.length > 0 ? `${p}${s.slice(l, c)}` : (s.charCodeAt(l) === oe && ++l, s.slice(l, c));
}, toNamespacedPath(e) {
  if (typeof e != "string" || e.length === 0) return e;
  const t = V.resolve(e);
  if (t.length <= 2) return e;
  if (t.charCodeAt(0) === oe) {
    if (t.charCodeAt(1) === oe) {
      const n = t.charCodeAt(2);
      if (n !== ud && n !== qe) return `\\\\?\\UNC\\${t.slice(2)}`;
    }
  } else if (Ae(t.charCodeAt(0)) && t.charCodeAt(1) === Re && t.charCodeAt(2) === oe) return `\\\\?\\${t}`;
  return t;
}, dirname(e) {
  q(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let n = -1, s = 0;
  const r = e.charCodeAt(0);
  if (t === 1) return b(r) ? e : ".";
  if (b(r)) {
    if (n = s = 1, b(e.charCodeAt(1))) {
      let l = 2, c = l;
      for (; l < t && !b(e.charCodeAt(l)); ) l++;
      if (l < t && l !== c) {
        for (c = l; l < t && b(e.charCodeAt(l)); ) l++;
        if (l < t && l !== c) {
          for (c = l; l < t && !b(e.charCodeAt(l)); ) l++;
          if (l === t) return e;
          l !== c && (n = s = l + 1);
        }
      }
    }
  } else Ae(r) && e.charCodeAt(1) === Re && (n = t > 2 && b(e.charCodeAt(2)) ? 3 : 2, s = n);
  let a = -1, i = true;
  for (let l = t - 1; l >= s; --l) if (b(e.charCodeAt(l))) {
    if (!i) {
      a = l;
      break;
    }
  } else i = false;
  if (a === -1) {
    if (n === -1) return ".";
    a = n;
  }
  return e.slice(0, a);
}, basename(e, t) {
  t !== void 0 && q(t, "suffix"), q(e, "path");
  let n = 0, s = -1, r = true, a;
  if (e.length >= 2 && Ae(e.charCodeAt(0)) && e.charCodeAt(1) === Re && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let i = t.length - 1, l = -1;
    for (a = e.length - 1; a >= n; --a) {
      const c = e.charCodeAt(a);
      if (b(c)) {
        if (!r) {
          n = a + 1;
          break;
        }
      } else l === -1 && (r = false, l = a + 1), i >= 0 && (c === t.charCodeAt(i) ? --i === -1 && (s = a) : (i = -1, s = l));
    }
    return n === s ? s = l : s === -1 && (s = e.length), e.slice(n, s);
  }
  for (a = e.length - 1; a >= n; --a) if (b(e.charCodeAt(a))) {
    if (!r) {
      n = a + 1;
      break;
    }
  } else s === -1 && (r = false, s = a + 1);
  return s === -1 ? "" : e.slice(n, s);
}, extname(e) {
  q(e, "path");
  let t = 0, n = -1, s = 0, r = -1, a = true, i = 0;
  e.length >= 2 && e.charCodeAt(1) === Re && Ae(e.charCodeAt(0)) && (t = s = 2);
  for (let l = e.length - 1; l >= t; --l) {
    const c = e.charCodeAt(l);
    if (b(c)) {
      if (!a) {
        s = l + 1;
        break;
      }
      continue;
    }
    r === -1 && (a = false, r = l + 1), c === qe ? n === -1 ? n = l : i !== 1 && (i = 1) : n !== -1 && (i = -1);
  }
  return n === -1 || r === -1 || i === 0 || i === 1 && n === r - 1 && n === s + 1 ? "" : e.slice(n, r);
}, format: $o.bind(null, "\\"), parse(e) {
  q(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const n = e.length;
  let s = 0, r = e.charCodeAt(0);
  if (n === 1) return b(r) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
  if (b(r)) {
    if (s = 1, b(e.charCodeAt(1))) {
      let m = 2, g = m;
      for (; m < n && !b(e.charCodeAt(m)); ) m++;
      if (m < n && m !== g) {
        for (g = m; m < n && b(e.charCodeAt(m)); ) m++;
        if (m < n && m !== g) {
          for (g = m; m < n && !b(e.charCodeAt(m)); ) m++;
          m === n ? s = m : m !== g && (s = m + 1);
        }
      }
    }
  } else if (Ae(r) && e.charCodeAt(1) === Re) {
    if (n <= 2) return t.root = t.dir = e, t;
    if (s = 2, b(e.charCodeAt(2))) {
      if (n === 3) return t.root = t.dir = e, t;
      s = 3;
    }
  }
  s > 0 && (t.root = e.slice(0, s));
  let a = -1, i = s, l = -1, c = true, u = e.length - 1, d = 0;
  for (; u >= s; --u) {
    if (r = e.charCodeAt(u), b(r)) {
      if (!c) {
        i = u + 1;
        break;
      }
      continue;
    }
    l === -1 && (c = false, l = u + 1), r === qe ? a === -1 ? a = u : d !== 1 && (d = 1) : a !== -1 && (d = -1);
  }
  return l !== -1 && (a === -1 || d === 0 || d === 1 && a === l - 1 && a === i + 1 ? t.base = t.name = e.slice(i, l) : (t.name = e.slice(i, a), t.base = e.slice(i, l), t.ext = e.slice(a, l))), i > 0 && i !== s ? t.dir = e.slice(0, i - 1) : t.dir = t.root, t;
}, sep: "\\", delimiter: ";", win32: null, posix: null }, hd = (() => {
  if (le) {
    const e = /\\/g;
    return () => {
      const t = Fs().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => Fs();
})(), L = { resolve(...e) {
  let t = "", n = false;
  for (let s = e.length - 1; s >= 0 && !n; s--) {
    const r = e[s];
    q(r, `paths[${s}]`), r.length !== 0 && (t = `${r}/${t}`, n = r.charCodeAt(0) === Q);
  }
  if (!n) {
    const s = hd();
    t = `${s}/${t}`, n = s.charCodeAt(0) === Q;
  }
  return t = Bs(t, !n, "/", _a), n ? `/${t}` : t.length > 0 ? t : ".";
}, normalize(e) {
  if (q(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === Q, n = e.charCodeAt(e.length - 1) === Q;
  return e = Bs(e, !t, "/", _a), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
}, isAbsolute(e) {
  return q(e, "path"), e.length > 0 && e.charCodeAt(0) === Q;
}, join(...e) {
  if (e.length === 0) return ".";
  const t = [];
  for (let n = 0; n < e.length; ++n) {
    const s = e[n];
    q(s, "path"), s.length > 0 && t.push(s);
  }
  return t.length === 0 ? "." : L.normalize(t.join("/"));
}, relative(e, t) {
  if (q(e, "from"), q(t, "to"), e === t || (e = L.resolve(e), t = L.resolve(t), e === t)) return "";
  const n = 1, s = e.length, r = s - n, a = 1, i = t.length - a, l = r < i ? r : i;
  let c = -1, u = 0;
  for (; u < l; u++) {
    const m = e.charCodeAt(n + u);
    if (m !== t.charCodeAt(a + u)) break;
    m === Q && (c = u);
  }
  if (u === l) if (i > l) {
    if (t.charCodeAt(a + u) === Q) return t.slice(a + u + 1);
    if (u === 0) return t.slice(a + u);
  } else r > l && (e.charCodeAt(n + u) === Q ? c = u : u === 0 && (c = 0));
  let d = "";
  for (u = n + c + 1; u <= s; ++u) (u === s || e.charCodeAt(u) === Q) && (d += d.length === 0 ? ".." : "/..");
  return `${d}${t.slice(a + c)}`;
}, toNamespacedPath(e) {
  return e;
}, dirname(e) {
  if (q(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === Q;
  let n = -1, s = true;
  for (let r = e.length - 1; r >= 1; --r) if (e.charCodeAt(r) === Q) {
    if (!s) {
      n = r;
      break;
    }
  } else s = false;
  return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
}, basename(e, t) {
  t !== void 0 && q(t, "suffix"), q(e, "path");
  let n = 0, s = -1, r = true, a;
  if (t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let i = t.length - 1, l = -1;
    for (a = e.length - 1; a >= 0; --a) {
      const c = e.charCodeAt(a);
      if (c === Q) {
        if (!r) {
          n = a + 1;
          break;
        }
      } else l === -1 && (r = false, l = a + 1), i >= 0 && (c === t.charCodeAt(i) ? --i === -1 && (s = a) : (i = -1, s = l));
    }
    return n === s ? s = l : s === -1 && (s = e.length), e.slice(n, s);
  }
  for (a = e.length - 1; a >= 0; --a) if (e.charCodeAt(a) === Q) {
    if (!r) {
      n = a + 1;
      break;
    }
  } else s === -1 && (r = false, s = a + 1);
  return s === -1 ? "" : e.slice(n, s);
}, extname(e) {
  q(e, "path");
  let t = -1, n = 0, s = -1, r = true, a = 0;
  for (let i = e.length - 1; i >= 0; --i) {
    const l = e[i];
    if (l === "/") {
      if (!r) {
        n = i + 1;
        break;
      }
      continue;
    }
    s === -1 && (r = false, s = i + 1), l === "." ? t === -1 ? t = i : a !== 1 && (a = 1) : t !== -1 && (a = -1);
  }
  return t === -1 || s === -1 || a === 0 || a === 1 && t === s - 1 && t === n + 1 ? "" : e.slice(t, s);
}, format: $o.bind(null, "/"), parse(e) {
  q(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const n = e.charCodeAt(0) === Q;
  let s;
  n ? (t.root = "/", s = 1) : s = 0;
  let r = -1, a = 0, i = -1, l = true, c = e.length - 1, u = 0;
  for (; c >= s; --c) {
    const d = e.charCodeAt(c);
    if (d === Q) {
      if (!l) {
        a = c + 1;
        break;
      }
      continue;
    }
    i === -1 && (l = false, i = c + 1), d === qe ? r === -1 ? r = c : u !== 1 && (u = 1) : r !== -1 && (u = -1);
  }
  if (i !== -1) {
    const d = a === 0 && n ? 1 : a;
    r === -1 || u === 0 || u === 1 && r === i - 1 && r === a + 1 ? t.base = t.name = e.slice(d, i) : (t.name = e.slice(d, r), t.base = e.slice(d, i), t.ext = e.slice(r, i));
  }
  return a > 0 ? t.dir = e.slice(0, a - 1) : n && (t.dir = "/"), t;
}, sep: "/", delimiter: ":", win32: null, posix: null };
L.win32 = V.win32 = V, L.posix = V.posix = L;
var gd = le ? V.normalize : L.normalize, A8 = le ? V.isAbsolute : L.isAbsolute, It = le ? V.join : L.join, fd = le ? V.resolve : L.resolve, pd = le ? V.relative : L.relative, Td = le ? V.dirname : L.dirname, w8 = le ? V.basename : L.basename, b8 = le ? V.extname : L.extname, I8 = le ? V.format : L.format, N8 = le ? V.parse : L.parse, D8 = le ? V.toNamespacedPath : L.toNamespacedPath, Gs = le ? V.sep : L.sep, O8 = le ? V.delimiter : L.delimiter;
function _d(e) {
  return e;
}
var kd = class {
  constructor(e, t) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = _d) : (this._fn = t, this._computeKey = e.getCacheKey);
  }
  get(e) {
    const t = this._computeKey(e);
    return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
  }
};
function vd(e) {
  return !e || typeof e != "string" ? true : e.trim().length === 0;
}
function ka(e) {
  return e.replace(/[<>&]/g, function(t) {
    switch (t) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      default:
        return t;
    }
  });
}
function Ed(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function yd(e, t, n = 0, s = e.length, r = 0, a = t.length) {
  for (; n < s && r < a; n++, r++) {
    const c = e.charCodeAt(n), u = t.charCodeAt(r);
    if (c < u) return -1;
    if (c > u) return 1;
  }
  const i = s - n, l = a - r;
  return i < l ? -1 : i > l ? 1 : 0;
}
function Jo(e, t, n = 0, s = e.length, r = 0, a = t.length) {
  for (; n < s && r < a; n++, r++) {
    let c = e.charCodeAt(n), u = t.charCodeAt(r);
    if (c === u) continue;
    if (c >= 128 || u >= 128) return yd(e.toLowerCase(), t.toLowerCase(), n, s, r, a);
    Ho(c) && (c -= 32), Ho(u) && (u -= 32);
    const d = c - u;
    if (d !== 0) return d;
  }
  const i = s - n, l = a - r;
  return i < l ? -1 : i > l ? 1 : 0;
}
function Ho(e) {
  return e >= 97 && e <= 122;
}
function Vo(e) {
  return e >= 65 && e <= 90;
}
function Sd(e, t) {
  return e.length === t.length && Jo(e, t) === 0;
}
function Rd(e) {
  return 55296 <= e && e <= 56319;
}
function Yo(e) {
  return 56320 <= e && e <= 57343;
}
function Ad(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
var wd = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, bd = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, Id = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, M8 = new RegExp("(?:" + [wd.source, bd.source, Id.source].join("|") + ")", "g"), L8 = "\uFEFF", Nd = class pn {
  static getInstance() {
    return pn._INSTANCE || (pn._INSTANCE = new pn()), pn._INSTANCE;
  }
  constructor() {
    this._data = Dd();
  }
  getGraphemeBreakType(t) {
    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
    if (t < 127) return 0;
    const n = this._data, s = n.length / 3;
    let r = 1;
    for (; r <= s; ) if (t < n[3 * r]) r = 2 * r;
    else if (t > n[3 * r + 1]) r = 2 * r + 1;
    else return n[3 * r + 2];
    return 0;
  }
};
Nd._INSTANCE = null;
function Dd() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var ot = class Xi {
  constructor(t) {
    this.confusableDictionary = t;
  }
  static getInstance(t) {
    return Xi.cache.get(Array.from(t).join(","));
  }
  static getLocales() {
    return Xi._locales.value;
  }
  isAmbiguous(t) {
    return this.confusableDictionary.has(t);
  }
  containsAmbiguousCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const s = t.codePointAt(n);
      if (typeof s == "number" && this.isAmbiguous(s)) return true;
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
ot.ambiguousCharacterData = new Ce(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), ot.cache = new kd((e) => {
  const t = e.split(",");
  function n(d) {
    const m = /* @__PURE__ */ new Map();
    for (let g = 0; g < d.length; g += 2) m.set(d[g], d[g + 1]);
    return m;
  }
  function s(d, m) {
    const g = new Map(d);
    for (const [p, _] of m) g.set(p, _);
    return g;
  }
  function r(d, m) {
    if (!d) return m;
    const g = /* @__PURE__ */ new Map();
    for (const [p, _] of d) m.has(p) && g.set(p, _);
    return g;
  }
  const a = ot.ambiguousCharacterData.value;
  let i = t.filter((d) => !d.startsWith("_") && d in a);
  i.length === 0 && (i = ["_default"]);
  let l;
  for (const d of i) {
    const m = n(a[d]);
    l = r(l, m);
  }
  const c = n(a._common), u = s(c, l);
  return new ot(u);
}), ot._locales = new Ce(() => Object.keys(ot.ambiguousCharacterData.value).filter((e) => !e.startsWith("_")));
var Od = class Tn {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(Tn.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return Tn.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const s = t.codePointAt(n);
      if (typeof s == "number" && (Tn.isInvisibleCharacter(s) || s === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return Tn.getData();
  }
};
Od._data = void 0;
function Le(e) {
  return e === 47 || e === 92;
}
function Ko(e) {
  return e.replace(/[\\/]/g, L.sep);
}
function Md(e) {
  return e.indexOf("/") === -1 && (e = Ko(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function zo(e, t = L.sep) {
  if (!e) return "";
  const n = e.length, s = e.charCodeAt(0);
  if (Le(s)) {
    if (Le(e.charCodeAt(1)) && !Le(e.charCodeAt(2))) {
      let a = 3;
      const i = a;
      for (; a < n && !Le(e.charCodeAt(a)); a++) ;
      if (i !== a && !Le(e.charCodeAt(a + 1))) {
        for (a += 1; a < n; a++) if (Le(e.charCodeAt(a))) return e.slice(0, a + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (Ud(s) && e.charCodeAt(1) === 58) return Le(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let r = e.indexOf("://");
  if (r !== -1) {
    for (r += 3; r < n; r++) if (Le(e.charCodeAt(r))) return e.slice(0, r + 1);
  }
  return "";
}
function Ld(e, t, n) {
  return n === 0 ? true : e.charCodeAt(0) !== t.charCodeAt(0) ? false : n === 1 ? true : e.charCodeAt(n - 1) !== t.charCodeAt(n - 1) ? false : e.startsWith(t);
}
function xd(e, t, n) {
  for (let s = 0; s < n; s++) {
    let r = e.charCodeAt(s), a = t.charCodeAt(s);
    if (r !== a) {
      if (r >= 128 || a >= 128) return Jo(e, t, s, n, s, n) === 0;
      if (r >= 97 && r <= 122 && (r -= 32), a >= 97 && a <= 122 && (a -= 32), r !== a) return false;
    }
  }
  return true;
}
function Xo(e, t, n, s = Gs) {
  if (e === t) return true;
  if (!e || !t) return false;
  const r = e.length, a = t.length;
  if (a > r) return false;
  const i = s.charCodeAt(0), l = t.charCodeAt(a - 1) === i;
  if (a < r && !l && e.charCodeAt(a) !== i) return false;
  if (n) {
    if (!xd(e, t, a)) return false;
  } else if (!Ld(e, t, a)) return false;
  return a === r || l ? true : e.charCodeAt(a) === i;
}
function Ud(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
var Pd = /^\w[\w\d+.-]*$/, Cd = /^\//, Fd = /^\/\//;
function Bd(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !Pd.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!Cd.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (Fd.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function Gd(e, t) {
  return !e && !t ? "file" : e;
}
function qd(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== ge && (t = ge + t) : t = ge;
      break;
  }
  return t;
}
var C = "", ge = "/", Wd = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, me = class Zr {
  static isUri(t) {
    return t instanceof Zr ? true : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : false;
  }
  constructor(t, n, s, r, a, i = false) {
    typeof t == "object" ? (this.scheme = t.scheme || C, this.authority = t.authority || C, this.path = t.path || C, this.query = t.query || C, this.fragment = t.fragment || C) : (this.scheme = Gd(t, i), this.authority = n || C, this.path = qd(this.scheme, s || C), this.query = r || C, this.fragment = a || C, Bd(this, i));
  }
  get fsPath() {
    return qs(this, false);
  }
  with(t) {
    if (!t) return this;
    let { scheme: n, authority: s, path: r, query: a, fragment: i } = t;
    return n === void 0 ? n = this.scheme : n === null && (n = C), s === void 0 ? s = this.authority : s === null && (s = C), r === void 0 ? r = this.path : r === null && (r = C), a === void 0 ? a = this.query : a === null && (a = C), i === void 0 ? i = this.fragment : i === null && (i = C), n === this.scheme && s === this.authority && r === this.path && a === this.query && i === this.fragment ? this : new lt(n, s, r, a, i);
  }
  static parse(t, n = false) {
    const s = Wd.exec(t);
    return s ? new lt(s[2] || C, Ws(s[4] || C), Ws(s[5] || C), Ws(s[7] || C), Ws(s[9] || C), n) : new lt(C, C, C, C, C);
  }
  static file(t) {
    let n = C;
    if (Be && (t = t.replace(/\\/g, ge)), t[0] === ge && t[1] === ge) {
      const s = t.indexOf(ge, 2);
      s === -1 ? (n = t.substring(2), t = ge) : (n = t.substring(2, s), t = t.substring(s) || ge);
    }
    return new lt("file", n, t, C, C);
  }
  static from(t, n) {
    return new lt(t.scheme, t.authority, t.path, t.query, t.fragment, n);
  }
  static joinPath(t, ...n) {
    if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let s;
    return Be && t.scheme === "file" ? s = Zr.file(V.join(qs(t, true), ...n)).path : s = L.join(t.path, ...n), t.with({ path: s });
  }
  toString(t = false) {
    return va(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof Zr) return t;
      {
        const n = new lt(t);
        return n._formatted = t.external ?? null, n._fsPath = t._sep === jo ? t.fsPath ?? null : null, n;
      }
    } else return t;
  }
  [/* @__PURE__ */ Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
}, jo = Be ? 1 : void 0, lt = class extends me {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = qs(this, false)), this._fsPath;
  }
  toString(e = false) {
    return e ? va(this, true) : (this._formatted || (this._formatted = va(this, false)), this._formatted);
  }
  toJSON() {
    const e = { $mid: 1 };
    return this._fsPath && (e.fsPath = this._fsPath, e._sep = jo), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
  }
}, Qo = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function Zo(e, t, n) {
  let s, r = -1;
  for (let a = 0; a < e.length; a++) {
    const i = e.charCodeAt(a);
    if (i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || i === 45 || i === 46 || i === 95 || i === 126 || t && i === 47 || n && i === 91 || n && i === 93 || n && i === 58) r !== -1 && (s += encodeURIComponent(e.substring(r, a)), r = -1), s !== void 0 && (s += e.charAt(a));
    else {
      s === void 0 && (s = e.substr(0, a));
      const l = Qo[i];
      l !== void 0 ? (r !== -1 && (s += encodeURIComponent(e.substring(r, a)), r = -1), s += l) : r === -1 && (r = a);
    }
  }
  return r !== -1 && (s += encodeURIComponent(e.substring(r))), s !== void 0 ? s : e;
}
function $d(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const s = e.charCodeAt(n);
    s === 35 || s === 63 ? (t === void 0 && (t = e.substr(0, n)), t += Qo[s]) : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function qs(e, t) {
  let n;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, Be && (n = n.replace(/\//g, "\\")), n;
}
function va(e, t) {
  const n = t ? $d : Zo;
  let s = "", { scheme: r, authority: a, path: i, query: l, fragment: c } = e;
  if (r && (s += r, s += ":"), (a || r === "file") && (s += ge, s += ge), a) {
    let u = a.indexOf("@");
    if (u !== -1) {
      const d = a.substr(0, u);
      a = a.substr(u + 1), u = d.lastIndexOf(":"), u === -1 ? s += n(d, false, false) : (s += n(d.substr(0, u), false, false), s += ":", s += n(d.substr(u + 1), false, true)), s += "@";
    }
    a = a.toLowerCase(), u = a.lastIndexOf(":"), u === -1 ? s += n(a, false, true) : (s += n(a.substr(0, u), false, true), s += a.substr(u));
  }
  if (i) {
    if (i.length >= 3 && i.charCodeAt(0) === 47 && i.charCodeAt(2) === 58) {
      const u = i.charCodeAt(1);
      u >= 65 && u <= 90 && (i = `/${String.fromCharCode(u + 32)}:${i.substr(3)}`);
    } else if (i.length >= 2 && i.charCodeAt(1) === 58) {
      const u = i.charCodeAt(0);
      u >= 65 && u <= 90 && (i = `${String.fromCharCode(u + 32)}:${i.substr(2)}`);
    }
    s += n(i, true, false);
  }
  return l && (s += "?", s += n(l, false, false)), c && (s += "#", s += t ? c : Zo(c, false, false)), s;
}
function el(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + el(e.substr(3)) : e;
  }
}
var tl = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function Ws(e) {
  return e.match(tl) ? e.replace(tl, (t) => el(t)) : e;
}
var Z;
((e) => {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})(Z || (Z = {}));
var Jd = "tkn", Hd = class {
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
    this._serverRootPath = L.join(t ?? "/", Yd(e));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return L.join(this._serverRootPath, Z.vscodeRemoteResource);
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
    } catch (i) {
      return st(i), e;
    }
    const t = e.authority;
    let n = this._hosts[t];
    n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
    const s = this._ports[t], r = this._connectionTokens[t];
    let a = `path=${encodeURIComponent(e.path)}`;
    return typeof r == "string" && (a += `&${Jd}=${encodeURIComponent(r)}`), me.from({ scheme: pa ? this._preferredWebSchema : Z.vscodeRemoteResource, authority: `${n}:${s}`, path: this._remoteResourcesPath, query: a });
  }
}, Vd = new Hd();
function Yd(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var Kd = "vscode-app", nl = class ea {
  asBrowserUri(t) {
    const n = this.toUri(t);
    return this.uriToBrowserUri(n);
  }
  uriToBrowserUri(t) {
    return t.scheme === Z.vscodeRemote ? Vd.rewrite(t) : t.scheme === Z.file && (Xu || Qu === `${Z.vscodeFileResource}://${ea.FALLBACK_AUTHORITY}`) ? t.with({ scheme: Z.vscodeFileResource, authority: t.authority || ea.FALLBACK_AUTHORITY, query: null, fragment: null }) : t;
  }
  asFileUri(t) {
    const n = this.toUri(t);
    return this.uriToFileUri(n);
  }
  uriToFileUri(t) {
    return t.scheme === Z.vscodeFileResource ? t.with({ scheme: Z.file, authority: t.authority !== ea.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
  }
  toUri(t) {
    if (me.isUri(t)) return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const n = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(n)) return me.joinPath(me.parse(n, true), t);
      const s = It(n, t);
      return me.file(s);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
nl.FALLBACK_AUTHORITY = Kd;
var zd = nl, x8 = new zd(), U8 = Object.freeze({ "Cache-Control": "no-cache, no-store" }), P8 = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), sl;
((e) => {
  const t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const n = "vscode-coi";
  function s(a) {
    let i;
    typeof a == "string" ? i = new URL(a).searchParams : a instanceof URL ? i = a.searchParams : me.isUri(a) && (i = new URL(a.toString(true)).searchParams);
    const l = i?.get(n);
    if (l) return t.get(l);
  }
  e.getHeadersFromQuery = s;
  function r(a, i, l) {
    if (!globalThis.crossOriginIsolated) return;
    const c = i && l ? "3" : l ? "2" : "1";
    a instanceof URLSearchParams ? a.set(n, c) : a[n] = c;
  }
  e.addSearchParam = r;
})(sl || (sl = {}));
function we(e) {
  return qs(e, true);
}
var Ea = class {
  constructor(e) {
    this._ignorePathCasing = e;
  }
  compare(e, t, n = false) {
    return e === t ? 0 : Ed(this.getComparisonKey(e, n), this.getComparisonKey(t, n));
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
      if (e.scheme === Z.file) return Xo(we(e), we(t), this._ignorePathCasing(e)) && e.query === t.query && (n || e.fragment === t.fragment);
      if (rl(e.authority, t.authority)) return Xo(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (n || e.fragment === t.fragment);
    }
    return false;
  }
  joinPath(e, ...t) {
    return me.joinPath(e, ...t);
  }
  basenameOrAuthority(e) {
    return Xd(e) || e.authority;
  }
  basename(e) {
    return L.basename(e.path);
  }
  extname(e) {
    return L.extname(e.path);
  }
  dirname(e) {
    if (e.path.length === 0) return e;
    let t;
    return e.scheme === Z.file ? t = me.file(Td(we(e))).path : (t = L.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
  }
  normalizePath(e) {
    if (!e.path.length) return e;
    let t;
    return e.scheme === Z.file ? t = me.file(gd(we(e))).path : t = L.normalize(e.path), e.with({ path: t });
  }
  relativePath(e, t) {
    if (e.scheme !== t.scheme || !rl(e.authority, t.authority)) return;
    if (e.scheme === Z.file) {
      const r = pd(we(e), we(t));
      return Be ? Ko(r) : r;
    }
    let n = e.path || "/";
    const s = t.path || "/";
    if (this._ignorePathCasing(e)) {
      let r = 0;
      for (const a = Math.min(n.length, s.length); r < a && !(n.charCodeAt(r) !== s.charCodeAt(r) && n.charAt(r).toLowerCase() !== s.charAt(r).toLowerCase()); r++) ;
      n = s.substr(0, r) + n.substr(r);
    }
    return L.relative(n, s);
  }
  resolvePath(e, t) {
    if (e.scheme === Z.file) {
      const n = me.file(fd(we(e), t));
      return e.with({ authority: n.authority, path: n.path });
    }
    return t = Md(t), e.with({ path: L.resolve(e.path, t) });
  }
  isAbsolutePath(e) {
    return !!e.path && e.path[0] === "/";
  }
  isEqualAuthority(e, t) {
    return e === t || e !== void 0 && t !== void 0 && Sd(e, t);
  }
  hasTrailingPathSeparator(e, t = Gs) {
    if (e.scheme === Z.file) {
      const n = we(e);
      return n.length > zo(n).length && n[n.length - 1] === t;
    } else {
      const n = e.path;
      return n.length > 1 && n.charCodeAt(n.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
    }
  }
  removeTrailingPathSeparator(e, t = Gs) {
    return al(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
  }
  addTrailingPathSeparator(e, t = Gs) {
    let n = false;
    if (e.scheme === Z.file) {
      const s = we(e);
      n = s !== void 0 && s.length === zo(s).length && s[s.length - 1] === t;
    } else {
      t = "/";
      const s = e.path;
      n = s.length === 1 && s.charCodeAt(s.length - 1) === 47;
    }
    return !n && !al(e, t) ? e.with({ path: e.path + "/" }) : e;
  }
}, O = new Ea(() => false), C8 = new Ea((e) => e.scheme === Z.file ? !Bo : true), F8 = new Ea((e) => true), B8 = O.isEqual.bind(O), G8 = O.isEqualOrParent.bind(O), q8 = O.getComparisonKey.bind(O), W8 = O.basenameOrAuthority.bind(O), Xd = O.basename.bind(O), $8 = O.extname.bind(O), J8 = O.dirname.bind(O), H8 = O.joinPath.bind(O), V8 = O.normalizePath.bind(O), Y8 = O.relativePath.bind(O), K8 = O.resolvePath.bind(O), z8 = O.isAbsolutePath.bind(O), rl = O.isEqualAuthority.bind(O), al = O.hasTrailingPathSeparator.bind(O), X8 = O.removeTrailingPathSeparator.bind(O), j8 = O.addTrailingPathSeparator.bind(O), il;
((e) => {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(n) {
    const s = /* @__PURE__ */ new Map();
    n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((i) => {
      const [l, c] = i.split(":");
      l && c && s.set(l, c);
    });
    const a = n.path.substring(0, n.path.indexOf(";"));
    return a && s.set(e.META_DATA_MIME, a), s;
  }
  e.parseMetaData = t;
})(il || (il = {}));
var Q8 = /* @__PURE__ */ Symbol("MicrotaskDelay");
function ya(e) {
  const t = new Uo(), n = e(t.token);
  let s = false;
  const r = new Promise((a, i) => {
    const l = t.token.onCancellationRequested(() => {
      s = true, l.dispose(), i(new De());
    });
    Promise.resolve(n).then((c) => {
      l.dispose(), t.dispose(), s ? pu(c) && c.dispose() : a(c);
    }, (c) => {
      l.dispose(), t.dispose(), i(c);
    });
  });
  return new class {
    cancel() {
      t.cancel(), t.dispose();
    }
    then(a, i) {
      return r.then(a, i);
    }
    catch(a) {
      return this.then(void 0, a);
    }
    finally(a) {
      return r.finally(a);
    }
  }();
}
var jd = class {
  constructor() {
    this.current = Promise.resolve(null);
  }
  queue(e) {
    return this.current = this.current.then(() => e(), () => e());
  }
};
function ct(e, t) {
  return t ? new Promise((n, s) => {
    const r = setTimeout(() => {
      a.dispose(), n();
    }, e), a = t.onCancellationRequested(() => {
      clearTimeout(r), a.dispose(), s(new De());
    });
  }) : ya((n) => ct(e, n));
}
function Qd(e, t = 0, n) {
  const s = setTimeout(() => {
    e(), n && r.dispose();
  }, t), r = Rt(() => {
    clearTimeout(s), n?.delete(r);
  });
  return n?.add(r), r;
}
var Zd, Sa;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? Sa = (e, t, n) => {
    ed(() => {
      if (s) return;
      const r = Date.now() + 15;
      t(Object.freeze({ didTimeout: true, timeRemaining() {
        return Math.max(0, r - Date.now());
      } }));
    });
    let s = false;
    return { dispose() {
      s || (s = true);
    } };
  } : Sa = (e, t, n) => {
    const s = e.requestIdleCallback(t, typeof n == "number" ? { timeout: n } : void 0);
    let r = false;
    return { dispose() {
      r || (r = true, e.cancelIdleCallback(s));
    } };
  }, Zd = (e, t) => Sa(globalThis, e, t);
})();
var em = class _1 {
  static fromPromise(t) {
    const n = new _1();
    return n.settleWith(t), n;
  }
  get isRejected() {
    return this.outcome?.outcome === 1;
  }
  get isResolved() {
    return this.outcome?.outcome === 0;
  }
  get isSettled() {
    return !!this.outcome;
  }
  get value() {
    return this.outcome?.outcome === 0 ? this.outcome?.value : void 0;
  }
  constructor() {
    this.p = new Promise((t, n) => {
      this.completeCallback = t, this.errorCallback = n;
    });
  }
  complete(t) {
    return new Promise((n) => {
      this.completeCallback(t), this.outcome = { outcome: 0, value: t }, n();
    });
  }
  error(t) {
    return new Promise((n) => {
      this.errorCallback(t), this.outcome = { outcome: 1, value: t }, n();
    });
  }
  settleWith(t) {
    return t.then((n) => this.complete(n), (n) => this.error(n));
  }
  cancel() {
    return this.error(new De());
  }
}, ol;
((e) => {
  async function t(s) {
    let r;
    const a = await Promise.all(s.map((i) => i.then((l) => l, (l) => {
      r || (r = l);
    })));
    if (typeof r < "u") throw r;
    return a;
  }
  e.settled = t;
  function n(s) {
    return new Promise(async (r, a) => {
      try {
        await s(r, a);
      } catch (i) {
        a(i);
      }
    });
  }
  e.withAsyncBody = n;
})(ol || (ol = {}));
var ll = class he {
  static fromArray(t) {
    return new he((n) => {
      n.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new he(async (n) => {
      n.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new he(async (n) => {
      await Promise.all(t.map(async (s) => n.emitOne(await s)));
    });
  }
  static merge(t) {
    return new he(async (n) => {
      await Promise.all(t.map(async (s) => {
        for await (const r of s) n.emitOne(r);
      }));
    });
  }
  constructor(t, n) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new H(), queueMicrotask(async () => {
      const s = { emitOne: (r) => this.emitOne(r), emitMany: (r) => this.emitMany(r), reject: (r) => this.reject(r) };
      try {
        await Promise.resolve(t(s)), this.resolve();
      } catch (r) {
        this.reject(r);
      } finally {
        s.emitOne = void 0, s.emitMany = void 0, s.reject = void 0;
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
        await ee.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(t, n) {
    return new he(async (s) => {
      for await (const r of t) s.emitOne(n(r));
    });
  }
  map(t) {
    return he.map(this, t);
  }
  static filter(t, n) {
    return new he(async (s) => {
      for await (const r of t) n(r) && s.emitOne(r);
    });
  }
  filter(t) {
    return he.filter(this, t);
  }
  static coalesce(t) {
    return he.filter(t, (n) => !!n);
  }
  coalesce() {
    return he.coalesce(this);
  }
  static async toPromise(t) {
    const n = [];
    for await (const s of t) n.push(s);
    return n;
  }
  toPromise() {
    return he.toPromise(this);
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
ll.EMPTY = ll.fromArray([]);
function tm(e, t, n) {
  let s = null, r = null;
  if (typeof n.value == "function" ? (s = "value", r = n.value, r.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof n.get == "function" && (s = "get", r = n.get), !r) throw new Error("not supported");
  const a = `$memoize$${t}`;
  n[s] = function(...i) {
    return this.hasOwnProperty(a) || Object.defineProperty(this, a, { configurable: false, enumerable: false, writable: false, value: r.apply(this, i) }), this[a];
  };
}
var nm = Object.prototype.hasOwnProperty;
function $s(e, t = 0) {
  if (typeof e != "object" || e === null || t > 200) return e;
  switch (e.$mid) {
    case 1:
      return me.revive(e);
    case 2:
      return new RegExp(e.source, e.flags);
    case 17:
      return new Date(e.source);
  }
  if (Array.isArray(e)) for (let n = 0; n < e.length; ++n) {
    const s = e[n];
    if (s !== null && typeof s == "object") {
      const r = $s(s, t + 1);
      r !== s && (e[n] = r);
    }
  }
  else {
    if (e instanceof K || e instanceof Uint8Array) return e;
    for (const n in e) if (nm.call(e, n)) {
      const s = e[n];
      if (s !== null && typeof s == "object") {
        const r = $s(s, t + 1);
        r !== s && (e[n] = r);
      }
    }
  }
  return e;
}
var cl = 50, ul = false, dl;
function We(e) {
  switch (e) {
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
function Nt(e) {
  switch (e) {
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
function $e(e) {
  let t = 0;
  for (let n = 0; ; n += 7) {
    const s = e.readUInt8();
    if (t |= (s & 127) << n, !(s & 128)) return t;
  }
}
function Je(e, t) {
  if (t === 0) {
    e.writeUInt8(0);
    return;
  }
  do {
    let n = t & 127;
    t = t >>> 7, t > 0 && (n |= 128), e.writeUInt8(n);
  } while (t !== 0);
}
var Ra = class {
  constructor(e) {
    this.buffer = e, this.pos = 0;
  }
  read(e) {
    const t = this.buffer.slice(this.pos, this.pos + e);
    return this.pos += t.byteLength, t;
  }
  readUInt8() {
    return this.buffer.readUInt8(this.pos++);
  }
}, ml = 4 * 1024, sm = 512 * 1024, rm = 64 * 1024, Dt, hl = K.alloc(0), gl = class {
  constructor() {
    this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0, Dt ? (this.data = Dt, Dt = void 0) : this.data = K.alloc(ml);
  }
  get buffer() {
    if (!this.fragments) {
      const e = K.alloc(this.length);
      return e.set(this.data.slice(0, this.length), 0), e;
    }
    return this.flushSegment(), K.concat(this.fragments, this.totalLength);
  }
  ensureCapacity(e) {
    const t = this.length + e;
    if (t <= this.data.byteLength) return;
    let n = Math.max(this.data.byteLength * 2, ml);
    for (; n < t; ) n *= 2;
    const s = K.alloc(n);
    this.length > 0 && s.set(this.data.slice(0, this.length), 0), this.data = s;
  }
  flushSegment() {
    this.length > this.segmentStart && (this.fragments.push(this.data.slice(this.segmentStart, this.length)), this.segmentStart = this.length);
  }
  write(e) {
    this.ensureCapacity(e.byteLength), this.data.set(e, this.length), this.length += e.byteLength, this.totalLength += e.byteLength;
  }
  writeUInt8(e) {
    this.ensureCapacity(1), this.data.buffer[this.length++] = e, this.totalLength++;
  }
  writeReference(e) {
    if (e.byteLength < rm) {
      this.write(e);
      return;
    }
    this.fragments || (this.fragments = []), this.flushSegment(), this.fragments.push(e), this.totalLength += e.byteLength;
  }
  dispose() {
    !Dt && this.data.byteLength <= sm && this.data !== hl && (Dt = this.data), this.data = hl, this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0;
  }
}, fl = typeof Buffer < "u", am = 64 * 1024, im = 8;
function om(e) {
  return !(e === null || typeof e != "object" || Array.isArray(e) || e instanceof K || e instanceof Uint8Array || fl && Buffer.isBuffer(e));
}
function lm(e) {
  if (e.length < im) return false;
  for (let t = 0; t < e.length; t++) if (!om(e[t])) return false;
  return true;
}
function Aa(e, t) {
  if (t.length >= am) {
    const n = K.fromString(t);
    Je(e, n.byteLength), e.writeReference(n);
    return;
  }
  K.withPooledString(t, (n) => {
    Je(e, n.byteLength), e.write(n);
  });
}
function Ot(e, t) {
  if (typeof t > "u") e.writeUInt8(0);
  else if (typeof t == "string") e.writeUInt8(1), Aa(e, t);
  else if (fl && Buffer.isBuffer(t)) e.writeUInt8(2), Je(e, t.byteLength), e.writeReference(K.wrap(t));
  else if (t instanceof K) e.writeUInt8(3), Je(e, t.byteLength), e.writeReference(t);
  else if (Array.isArray(t)) {
    if (lm(t)) {
      const n = JSON.stringify(t);
      e.writeUInt8(5), Aa(e, n);
      return;
    }
    e.writeUInt8(4), Je(e, t.length);
    for (const n of t) Ot(e, n);
  } else if (typeof t == "number" && (t | 0) === t) e.writeUInt8(6), Je(e, t);
  else if (t instanceof Uint8Array) e.writeUInt8(7), Je(e, t.length), e.writeReference(K.wrap(t));
  else {
    const n = JSON.stringify(t);
    e.writeUInt8(5), Aa(e, n);
  }
}
function ut(e) {
  switch (e.readUInt8()) {
    case 0:
      return;
    case 1:
      return e.read($e(e)).toString();
    case 2:
      return e.read($e(e)).buffer;
    case 3:
      return e.read($e(e));
    case 7:
      return e.read($e(e)).buffer;
    case 4: {
      const n = $e(e), s = [];
      for (let r = 0; r < n; r++) s.push(ut(e));
      return s;
    }
    case 5:
      return JSON.parse(e.read($e(e)).toString());
    case 6:
      return $e(e);
  }
}
var cm = class {
  constructor(e, t, n = null, s = 1e3) {
    this.protocol = e, this.ctx = t, this.logger = n, this.timeoutDelay = s, this.channels = /* @__PURE__ */ new Map(), this.activeRequests = /* @__PURE__ */ new Map(), this.protocolListener = new At(), this.pendingRequests = /* @__PURE__ */ new Map(), this.protocolListener.value = this.protocol.onMessage((r) => this.onRawMessage(r)), this.sendResponse({ type: 200 });
  }
  registerChannel(e, t) {
    this.channels.set(e, t), setTimeout(() => this.flushPendingRequests(e), 0);
  }
  sendResponse(e) {
    switch (e.type) {
      case 200: {
        const t = this.send([e.type]);
        this.logger?.logOutgoing(t, 0, 1, Nt(e.type));
        return;
      }
      case 201:
      case 202:
      case 204:
      case 203: {
        const t = this.send([e.type, e.id], e.data);
        this.logger?.logOutgoing(t, e.id, 1, Nt(e.type), e.data);
        return;
      }
    }
  }
  send(e, t = void 0) {
    const n = new gl();
    try {
      return Ot(n, e), Ot(n, t), this.sendBuffer(n.buffer);
    } finally {
      n.dispose();
    }
  }
  sendBuffer(e) {
    try {
      return this.protocol.send(e), e.byteLength;
    } catch {
      return 0;
    }
  }
  onRawMessage(e) {
    const t = new Ra(e), n = ul, s = n ? performance.now() : 0, r = ut(t), a = r[0];
    if (a !== 100 && a !== 101 && a !== 102 && a !== 103) return;
    const i = ut(t);
    if (n) {
      const l = performance.now() - s;
      l > cl && dl?.({ durationMs: l, byteLength: e.byteLength, requestId: r[1] ?? 0, channelName: r[2], command: r[3], messageType: We(a) });
    }
    switch (a) {
      case 100:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${We(a)}: ${r[2]}.${r[3]}`, i), this.onPromise({ type: a, id: r[1], channelName: r[2], name: r[3], arg: i });
      case 102:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${We(a)}: ${r[2]}.${r[3]}`, i), this.onEventListen({ type: a, id: r[1], channelName: r[2], name: r[3], arg: i });
      case 101:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${We(a)}`), this.disposeActiveRequest({ type: a, id: r[1] });
      case 103:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${We(a)}`), this.disposeActiveRequest({ type: a, id: r[1] });
    }
  }
  onPromise(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const n = new Uo();
    let s;
    try {
      s = t.call(this.ctx, e.name, e.arg, n.token);
    } catch (i) {
      s = Promise.reject(i);
    }
    const r = e.id;
    s.then((i) => {
      this.sendResponse({ id: r, data: i, type: 201 });
    }, (i) => {
      i instanceof Error ? this.sendResponse({ id: r, data: { message: i.message, name: i.name, stack: i.stack ? i.stack.split(`
`) : void 0 }, type: 202 }) : this.sendResponse({ id: r, data: i, type: 203 });
    }).finally(() => {
      a.dispose(), this.activeRequests.delete(e.id);
    });
    const a = Rt(() => n.cancel());
    this.activeRequests.set(e.id, a);
  }
  onEventListen(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const n = e.id, r = t.listen(this.ctx, e.name, e.arg)((a) => this.sendResponse({ id: n, data: a, type: 204 }));
    this.activeRequests.set(e.id, r);
  }
  disposeActiveRequest(e) {
    const t = this.activeRequests.get(e.id);
    t && (t.dispose(), this.activeRequests.delete(e.id));
  }
  collectPendingRequest(e) {
    let t = this.pendingRequests.get(e.channelName);
    t || (t = [], this.pendingRequests.set(e.channelName, t));
    const n = Qd(() => {
      console.error(`Unknown channel: ${e.channelName}`), e.type === 100 && this.sendResponse({ id: e.id, data: { name: "Unknown channel", message: `Channel name '${e.channelName}' timed out after ${this.timeoutDelay}ms`, stack: void 0 }, type: 202 }), n.dispose();
    }, this.timeoutDelay);
    t.push({ request: e, timeoutTimer: n });
  }
  flushPendingRequests(e) {
    const t = this.pendingRequests.get(e);
    if (t) {
      for (const n of t) switch (n.timeoutTimer.dispose(), n.request.type) {
        case 100:
          this.onPromise(n.request);
          break;
        case 102:
          this.onEventListen(n.request);
          break;
      }
      this.pendingRequests.delete(e);
    }
  }
  dispose() {
    this.protocolListener.dispose(), Os(this.activeRequests.values()), this.activeRequests.clear();
    for (const e of this.pendingRequests.values()) Os(e.map((t) => t.timeoutTimer));
    this.pendingRequests.clear();
  }
}, pl = class {
  constructor(e, t = null) {
    this.protocol = e, this.isDisposed = false, this.state = 0, this.activeRequests = new ve(), this.handlers = /* @__PURE__ */ new Map(), this.lastRequestId = 0, this.protocolListener = new At(), this._pendingRPCDetails = /* @__PURE__ */ new Map(), this._onDidInitialize = new H(), this.onDidInitialize = this._onDidInitialize.event, this.initializeListener = new ve(), this.protocolListener.value = this.protocol.onMessage((n) => this.onBuffer(n)), this.logger = t;
  }
  getChannel(e) {
    const t = this;
    return { call(n, s, r) {
      return t.isDisposed ? Promise.reject(new De()) : t.requestPromise(e, n, s, r);
    }, listen(n, s) {
      return t.isDisposed ? ee.None : t.requestEvent(e, n, s);
    } };
  }
  requestPromise(e, t, n, s = at.None) {
    const r = this.lastRequestId++, i = { id: r, type: 100, channelName: e, name: t, arg: n };
    if (s.isCancellationRequested) return Promise.reject(new De());
    let l, c;
    return new Promise((d, m) => {
      if (s.isCancellationRequested) return m(new De());
      const g = () => {
        const R = (I) => {
          switch (I.type) {
            case 201:
              this.handlers.delete(r), this._pendingRPCDetails.delete(r), d(I.data);
              break;
            case 202: {
              this.handlers.delete(r), this._pendingRPCDetails.delete(r);
              const F = new Error(I.data.message);
              F.stack = Array.isArray(I.data.stack) ? I.data.stack.join(`
`) : I.data.stack, F.name = I.data.name, m(F);
              break;
            }
            case 203:
              this.handlers.delete(r), this._pendingRPCDetails.delete(r), m(I.data);
              break;
          }
        };
        this.handlers.set(r, R), this._pendingRPCDetails.set(r, { channelName: e, command: t });
        try {
          this.sendRequest(i);
        } catch (I) {
          this.handlers.delete(r), this._pendingRPCDetails.delete(r), m(I);
        }
      };
      let p = null;
      this.state === 1 ? g() : (p = ya((R) => this.whenInitialized()), p.then(() => {
        p = null, g();
      }, () => {
      }));
      const _ = () => {
        p ? (p.cancel(), p = null) : this.sendRequest({ id: r, type: 101 }), m(new De());
      };
      l = s.onCancellationRequested(_), c = { dispose: ia(() => {
        _(), l.dispose();
      }) }, this.activeRequests.add(c);
    }).finally(() => {
      l?.dispose(), this.activeRequests.deleteAndLeak(c), yo(c);
    });
  }
  requestEvent(e, t, n) {
    const s = this.lastRequestId++, a = { id: s, type: 102, channelName: e, name: t, arg: n };
    let i = null;
    const l = new H({ onWillAddFirstListener: () => {
      if (this.isDisposed) return;
      const c = (d) => l.fire(d.data);
      this.handlers.set(s, c);
      const u = () => {
        this.activeRequests.add(l), this._pendingRPCDetails.set(s, { channelName: e, command: t }), this.sendRequest(a);
      };
      this.state === 1 ? u() : (i = ya((d) => this.whenInitialized()), i.then(() => {
        i = null, u();
      }, () => {
      }));
    }, onDidRemoveLastListener: () => {
      const c = this.handlers.delete(s);
      i ? (i.cancel(), i = null) : c && (this.activeRequests.deleteAndLeak(l), yo(l), this._pendingRPCDetails.delete(s), this.sendRequest({ id: s, type: 103 }));
    } });
    return l.event;
  }
  sendRequest(e) {
    switch (e.type) {
      case 100:
      case 102: {
        const t = this.send([e.type, e.id, e.channelName, e.name], e.arg);
        this.logger?.logOutgoing(t, e.id, 0, `${We(e.type)}: ${e.channelName}.${e.name}`, e.arg);
        return;
      }
      case 101:
      case 103: {
        const t = this.send([e.type, e.id]);
        this.logger?.logOutgoing(t, e.id, 0, We(e.type));
        return;
      }
    }
  }
  send(e, t = void 0) {
    const n = new gl();
    try {
      return Ot(n, e), Ot(n, t), this.sendBuffer(n.buffer);
    } finally {
      n.dispose();
    }
  }
  sendBuffer(e) {
    try {
      return this.protocol.send(e), e.byteLength;
    } catch {
      return 0;
    }
  }
  onBuffer(e) {
    const t = new Ra(e), n = ul, s = n ? performance.now() : 0, r = ut(t), a = r[0];
    if (a !== 200 && a !== 201 && a !== 202 && a !== 203 && a !== 204) return;
    const i = ut(t);
    if (n) {
      const l = performance.now() - s;
      if (l > cl) {
        const c = r[1] ?? 0, u = this._pendingRPCDetails.get(c);
        dl?.({ durationMs: l, byteLength: e.byteLength, requestId: c, channelName: u?.channelName, command: u?.command, messageType: Nt(a) });
      }
    }
    switch (a) {
      case 200:
        return this.logger?.logIncoming(e.byteLength, 0, 0, Nt(a)), this.onResponse({ type: r[0] });
      case 201:
      case 202:
      case 204:
      case 203:
        return this.logger?.logIncoming(e.byteLength, r[1], 0, Nt(a), i), this.onResponse({ type: r[0], id: r[1], data: i });
    }
  }
  onResponse(e) {
    if (e.type === 200) {
      this.state = 1, this._onDidInitialize.fire();
      return;
    }
    this.handlers.get(e.id)?.(e);
  }
  get onDidInitializePromise() {
    return ee.toPromise(this.onDidInitialize, this.initializeListener);
  }
  whenInitialized() {
    return this.state === 1 ? Promise.resolve() : this.onDidInitializePromise;
  }
  dispose() {
    this.isDisposed = true, this.protocolListener.dispose(), this.activeRequests.dispose(), this._pendingRPCDetails.clear(), this.handlers.clear(), this.initializeListener.dispose(), this._onDidInitialize.dispose();
  }
};
F1([tm], pl.prototype, "onDidInitializePromise", null);
var um = class {
  constructor(e, t, n) {
    this.channels = /* @__PURE__ */ new Map(), this._connections = /* @__PURE__ */ new Set(), this._onDidAddConnection = new H(), this.onDidAddConnection = this._onDidAddConnection.event, this._onDidRemoveConnection = new H(), this.onDidRemoveConnection = this._onDidRemoveConnection.event, this.disposables = new ve(), this.disposables.add(e(({ protocol: s, onDidClientDisconnect: r }) => {
      const a = ee.once(s.onMessage), i = new ve(), l = a((c) => {
        const u = new Ra(c), d = ut(u), m = new cm(s, d, t, n), g = new pl(s, t);
        this.channels.forEach((_, R) => m.registerChannel(R, _));
        const p = { channelServer: m, channelClient: g, ctx: d };
        this._connections.add(p), this._onDidAddConnection.fire(p), i.add(r(() => {
          m.dispose(), g.dispose(), this._connections.delete(p), this._onDidRemoveConnection.fire(p), this.disposables.delete(i), i.dispose();
        }));
      });
      i.add(l), this.disposables.add(i);
    }));
  }
  get connections() {
    const e = [];
    return this._connections.forEach((t) => e.push(t)), e;
  }
  getChannel(e, t) {
    const n = this;
    return { call(s, r, a) {
      let i;
      if (io(t)) {
        const c = X1(n.connections.filter(t));
        i = c ? Promise.resolve(c) : ee.toPromise(ee.filter(n.onDidAddConnection, t));
      } else i = t.routeCall(n, s, r);
      const l = i.then((c) => c.channelClient.getChannel(e));
      return Tl(l).call(s, r, a);
    }, listen(s, r) {
      if (io(t)) return n.getMulticastEvent(e, t, s, r);
      const a = t.routeEvent(n, s, r).then((i) => i.channelClient.getChannel(e));
      return Tl(a).listen(s, r);
    } };
  }
  getMulticastEvent(e, t, n, s) {
    const r = this;
    let a;
    const i = new H({ onWillAddFirstListener: () => {
      a = new ve();
      const l = new Iu(), c = /* @__PURE__ */ new Map(), u = (m) => {
        const p = m.channelClient.getChannel(e).listen(n, s), _ = l.add(p);
        c.set(m, _);
      }, d = (m) => {
        const g = c.get(m);
        g && (g.dispose(), c.delete(m));
      };
      r.connections.filter(t).forEach(u), ee.filter(r.onDidAddConnection, t)(u, void 0, a), r.onDidRemoveConnection(d, void 0, a), l.event(i.fire, i, a), a.add(l);
    }, onDidRemoveLastListener: () => {
      a?.dispose(), a = void 0;
    } });
    return r.disposables.add(i), i.event;
  }
  registerChannel(e, t) {
    this.channels.set(e, t);
    for (const n of this._connections) n.channelServer.registerChannel(e, t);
  }
  dispose() {
    this.disposables.dispose();
    for (const e of this._connections) e.channelClient.dispose(), e.channelServer.dispose();
    this._connections.clear(), this.channels.clear(), this._onDidAddConnection.dispose(), this._onDidRemoveConnection.dispose();
  }
};
function Tl(e) {
  return { call(t, n, s) {
    return e.then((r) => r.call(t, n, s));
  }, listen(t, n) {
    const s = new Nu();
    return e.then((r) => s.input = r.listen(t, n)), s.event;
  } };
}
var _l;
((e) => {
  const t = () => {
  };
  function n(i, l, c) {
    const u = i, d = c && c.disableMarshalling, m = (p) => {
      const _ = u[p];
      return c?.disableEventBuffering ? _ : ee.buffer(_, true, void 0, l);
    }, g = /* @__PURE__ */ new Map();
    for (const p in u) r(p) && g.set(p, m(p));
    return new class {
      listen(p, _, R) {
        const I = g.get(_);
        if (I) return I;
        const F = u[_];
        if (typeof F == "function") {
          if (a(_)) return F.call(u, R);
          if (r(_)) return g.set(_, m(_)), g.get(_);
        }
        throw new Et(`Event not found: ${_}`);
      }
      call(p, _, R) {
        const I = u[_];
        if (typeof I == "function") {
          if (!d && Array.isArray(R)) for (let $ = 0; $ < R.length; $++) R[$] = $s(R[$]);
          let F = I.apply(u, R);
          return F instanceof Promise || (F = Promise.resolve(F)), F;
        }
        throw new Et(`Method not found: ${_}`);
      }
    }();
  }
  e.fromService = n;
  function s(i, l) {
    const c = l && l.disableMarshalling;
    return new Proxy({}, { get(u, d) {
      if (typeof d != "symbol") {
        if (typeof d == "string") return l?.properties?.has(d) ? l.properties.get(d) : d === "dispose" ? t : a(d) ? function(m) {
          return i.listen(d, m);
        } : r(d) ? i.listen(d) : async function(...m) {
          let g;
          l && !nu(l.context) ? g = [l.context, ...m] : g = m;
          const p = await i.call(d, g);
          return c ? p : $s(p);
        };
        throw new Et(`Property not found: ${String(d)}`);
      }
    } });
  }
  e.toService = s;
  function r(i) {
    return i[0] === "o" && i[1] === "n" && Vo(i.charCodeAt(2));
  }
  function a(i) {
    return /^onDynamic/.test(i) && Vo(i.charCodeAt(9));
  }
})(_l || (_l = {}));
var dm = class {
  constructor(e) {
    this.port = e, this.onMessage = ee.fromNodeEventEmitter(this.port, "message", (t) => t.data ? K.wrap(t.data) : K.alloc(0)), e.start();
  }
  send(e) {
    this.port.postMessage(e.buffer);
  }
  disconnect() {
    this.port.close();
  }
}, mm = class k1 extends um {
  static getOnDidClientConnect(t) {
    su(Du(process), "Electron Utility Process");
    const n = new H();
    return process.parentPort.on("message", (s) => {
      if (t?.handledClientConnection(s)) return;
      const r = s.ports.at(0);
      r && n.fire(r);
    }), ee.map(n.event, (s) => ({ protocol: new dm(s), onDidClientDisconnect: ee.fromNodeEventEmitter(s, "close") }));
  }
  constructor(t) {
    super(k1.getOnDidClientConnect(t));
  }
};
function hm(e, t, n) {
  const s = (r) => {
    r.data === t && (e.removeListener("message", s), n());
  };
  e.on("message", s);
}
function wa(e, t, n = 32) {
  const s = n - t, r = ~((1 << s) - 1);
  return (e << t | (r & e) >>> s) >>> 0;
}
function Mt(e, t = 32) {
  return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((n) => n.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
var gm = class v1 {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
  }
  update(t) {
    const n = t.length;
    if (n === 0) return;
    const s = this._buff;
    let r = this._buffLen, a = this._leftoverHighSurrogate, i, l;
    for (a !== 0 ? (i = a, l = -1, a = 0) : (i = t.charCodeAt(0), l = 0); ; ) {
      let c = i;
      if (Rd(i)) if (l + 1 < n) {
        const u = t.charCodeAt(l + 1);
        Yo(u) ? (l++, c = Ad(i, u)) : c = 65533;
      } else {
        a = i;
        break;
      }
      else Yo(i) && (c = 65533);
      if (r = this._push(s, r, c), l++, l < n) i = t.charCodeAt(l);
      else break;
    }
    this._buffLen = r, this._leftoverHighSurrogate = a;
  }
  _push(t, n, s) {
    return s < 128 ? t[n++] = s : s < 2048 ? (t[n++] = 192 | (s & 1984) >>> 6, t[n++] = 128 | (s & 63) >>> 0) : s < 65536 ? (t[n++] = 224 | (s & 61440) >>> 12, t[n++] = 128 | (s & 4032) >>> 6, t[n++] = 128 | (s & 63) >>> 0) : (t[n++] = 240 | (s & 1835008) >>> 18, t[n++] = 128 | (s & 258048) >>> 12, t[n++] = 128 | (s & 4032) >>> 6, t[n++] = 128 | (s & 63) >>> 0), n >= 64 && (this._step(), n -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), n;
  }
  digest() {
    return this._finished || (this._finished = true, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), Mt(this._h0) + Mt(this._h1) + Mt(this._h2) + Mt(this._h3) + Mt(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
    const t = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(t / 4294967296), false), this._buffDV.setUint32(60, t % 4294967296, false), this._step();
  }
  _step() {
    const t = v1._bigBlock32, n = this._buffDV;
    for (let m = 0; m < 64; m += 4) t.setUint32(m, n.getUint32(m, false), false);
    for (let m = 64; m < 320; m += 4) t.setUint32(m, wa(t.getUint32(m - 12, false) ^ t.getUint32(m - 32, false) ^ t.getUint32(m - 56, false) ^ t.getUint32(m - 64, false), 1), false);
    let s = this._h0, r = this._h1, a = this._h2, i = this._h3, l = this._h4, c, u, d;
    for (let m = 0; m < 80; m++) m < 20 ? (c = r & a | ~r & i, u = 1518500249) : m < 40 ? (c = r ^ a ^ i, u = 1859775393) : m < 60 ? (c = r & a | r & i | a & i, u = 2400959708) : (c = r ^ a ^ i, u = 3395469782), d = wa(s, 5) + c + l + u + t.getUint32(m * 4, false) & 4294967295, l = i, i = a, a = wa(r, 30), r = s, s = d;
    this._h0 = this._h0 + s & 4294967295, this._h1 = this._h1 + r & 4294967295, this._h2 = this._h2 + a & 4294967295, this._h3 = this._h3 + i & 4294967295, this._h4 = this._h4 + l & 4294967295;
  }
};
gm._bigBlock32 = new DataView(new ArrayBuffer(320));
var D = ((e) => (e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA", e))(D || {});
function ba(...e) {
  switch (e.length) {
    case 1:
      return J(1839, null, e[0]);
    case 2:
      return J(1840, null, e[0], e[1]);
    case 3:
      return J(1841, null, e[0], e[1], e[2]);
    default:
      return;
  }
}
var fm = J(1842, null), pm = J(1843, null), Ia = class ji {
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
        throw J1(`unhandled token type: ${JSON.stringify(t)}; have you forgotten to add a case?`);
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
      case D.OpenParen:
        this._addToken(0);
        break;
      case D.CloseParen:
        this._addToken(1);
        break;
      case D.ExclamationMark:
        if (this._match(D.Equals)) {
          const n = this._match(D.Equals);
          this._tokens.push({ type: 4, offset: this._start, isTripleEq: n });
        } else this._addToken(2);
        break;
      case D.SingleQuote:
        this._quotedString();
        break;
      case D.Slash:
        this._regex();
        break;
      case D.Equals:
        if (this._match(D.Equals)) {
          const n = this._match(D.Equals);
          this._tokens.push({ type: 3, offset: this._start, isTripleEq: n });
        } else this._match(D.Tilde) ? this._addToken(9) : this._error(ba("==", "=~"));
        break;
      case D.LessThan:
        this._addToken(this._match(D.Equals) ? 6 : 5);
        break;
      case D.GreaterThan:
        this._addToken(this._match(D.Equals) ? 8 : 7);
        break;
      case D.Ampersand:
        this._match(D.Ampersand) ? this._addToken(15) : this._error(ba("&&"));
        break;
      case D.Pipe:
        this._match(D.Pipe) ? this._addToken(16) : this._error(ba("||"));
        break;
      case D.Space:
      case D.CarriageReturn:
      case D.Tab:
      case D.LineFeed:
      case D.NoBreakSpace:
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
    return this._isAtEnd() ? D.Null : this._input.charCodeAt(this._current);
  }
  _addToken(t) {
    this._tokens.push({ type: t, offset: this._start });
  }
  _error(t) {
    const n = this._start, s = this._input.substring(this._start, this._current), r = { type: 19, offset: this._start, lexeme: s };
    this._errors.push({ offset: n, lexeme: s, additionalInfo: t }), this._tokens.push(r);
  }
  _string() {
    this.stringRe.lastIndex = this._start;
    const t = this.stringRe.exec(this._input);
    if (t) {
      this._current = this._start + t[0].length;
      const n = this._input.substring(this._start, this._current), s = ji._keywords.get(n);
      s ? this._addToken(s) : this._tokens.push({ type: 17, lexeme: n, offset: this._start });
    }
  }
  _quotedString() {
    for (; this._peek() !== D.SingleQuote && !this._isAtEnd(); ) this._advance();
    if (this._isAtEnd()) {
      this._error(fm);
      return;
    }
    this._advance(), this._tokens.push({ type: 18, lexeme: this._input.substring(this._start + 1, this._current - 1), offset: this._start + 1 });
  }
  _regex() {
    let t = this._current, n = false, s = false;
    for (; ; ) {
      if (t >= this._input.length) {
        this._current = t, this._error(pm);
        return;
      }
      const a = this._input.charCodeAt(t);
      if (n) n = false;
      else if (a === D.Slash && !s) {
        t++;
        break;
      } else a === D.OpenSquareBracket ? s = true : a === D.Backslash ? n = true : a === D.CloseSquareBracket && (s = false);
      t++;
    }
    for (; t < this._input.length && ji._regexFlags.has(this._input.charCodeAt(t)); ) t++;
    this._current = t;
    const r = this._input.substring(this._start, this._current);
    this._tokens.push({ type: 10, lexeme: r, offset: this._start });
  }
  _isAtEnd() {
    return this._current >= this._input.length;
  }
};
Ia._regexFlags = new Set(["i", "g", "s", "m", "y", "u"].map((e) => e.charCodeAt(0))), Ia._keywords = /* @__PURE__ */ new Map([["not", 14], ["in", 13], ["false", 12], ["true", 11]]);
var Lt = Ia, be;
((e) => {
  e.serviceIds = /* @__PURE__ */ new Map(), e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
  function t(n) {
    return n[e.DI_DEPENDENCIES] || [];
  }
  e.getServiceDependencies = t;
})(be || (be = {}));
var Z8 = xt("instantiationService");
function Tm(e, t, n) {
  t[be.DI_TARGET] === t ? t[be.DI_DEPENDENCIES].push({ id: e, index: n }) : (t[be.DI_DEPENDENCIES] = [{ id: e, index: n }], t[be.DI_TARGET] = t);
}
function xt(e) {
  if (be.serviceIds.has(e)) return be.serviceIds.get(e);
  const t = function(n, s, r) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    Tm(t, n, r);
  };
  return t.toString = () => e, be.serviceIds.set(e, t), t;
}
var X = /* @__PURE__ */ new Map();
X.set("false", false), X.set("true", true), X.set("isMac", fa), X.set("isLinux", Bo), X.set("isWindows", Be), X.set("isWeb", pa), X.set("isMacNative", fa && !pa), X.set("isEdge", sd), X.set("isFirefox", td), X.set("isChrome", qo), X.set("isSafari", nd);
var Ut = /* @__PURE__ */ new Map();
function _m(e, t) {
  return Ut.has(e) && (console.warn(`A context key function with id '${e}' is already registered. Function collisions can lead to unexpected behavior.`), Ut.delete(e)), Ut.set(e, t), { dispose: () => {
    Ut.delete(e);
  } };
}
function kl(e) {
  return Ut.get(e);
}
var km = Object.prototype.hasOwnProperty, vm = { regexParsingWithErrorRecovery: true }, Em = J(1818, null), ym = J(1819, null), Sm = J(1820, null), vl = J(1821, null), Rm = J(1822, null), Am = J(1823, null), wm = J(1824, null), bm = J(1825, null), El = class _n {
  constructor(t = vm) {
    this._config = t, this._scanner = new Lt(), this._tokens = [], this._current = 0, this._parsingErrors = [], this._flagsGYRe = /g|y/g;
  }
  get lexingErrors() {
    return this._scanner.errors;
  }
  get parsingErrors() {
    return this._parsingErrors;
  }
  parse(t) {
    if (t === "") {
      this._parsingErrors.push({ message: Em, offset: 0, lexeme: "", additionalInfo: ym });
      return;
    }
    this._tokens = this._scanner.reset(t).scan(), this._current = 0, this._parsingErrors = [];
    try {
      const n = this._expr();
      if (!this._isAtEnd()) {
        const s = this._peek(), r = s.type === 17 ? Am : void 0;
        throw this._parsingErrors.push({ message: Rm, offset: s.offset, lexeme: Lt.getLexeme(s), additionalInfo: r }), _n._parseError;
      }
      return n;
    } catch (n) {
      if (n !== _n._parseError) throw n;
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
    return t.length === 1 ? t[0] : te.or(...t);
  }
  _and() {
    const t = [this._term()];
    for (; this._matchOne(15); ) {
      const n = this._term();
      t.push(n);
    }
    return t.length === 1 ? t[0] : te.and(...t);
  }
  _term() {
    if (this._matchOne(2)) {
      const t = this._peek();
      switch (t.type) {
        case 11:
          return this._advance(), ae.INSTANCE;
        case 12:
          return this._advance(), ce.INSTANCE;
        case 0: {
          this._advance();
          const n = this._expr();
          return this._consume(1, vl), n?.negate();
        }
        case 17:
          return this._advance(), Ft.create(t.lexeme);
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
        return this._advance(), te.true();
      case 12:
        return this._advance(), te.false();
      case 0: {
        this._advance();
        const n = this._expr();
        return this._consume(1, vl), n;
      }
      case 17: {
        if (t.lexeme.startsWith("@")) {
          this._advance();
          const r = t.lexeme.substring(1);
          if (r.startsWith("!")) {
            const i = r.substring(1), l = kl(i);
            if (l) return Na.createWithoutRegistration(r, () => !l());
          }
          const a = kl(r) || (() => false);
          return Na.createWithoutRegistration(r, a);
        }
        const n = t.lexeme;
        if (this._advance(), this._matchOne(9)) {
          const r = this._peek();
          if (!this._config.regexParsingWithErrorRecovery) {
            if (this._advance(), r.type !== 10) throw this._errExpectedButGot("REGEX", r);
            const a = r.lexeme, i = a.lastIndexOf("/"), l = i === a.length - 1 ? void 0 : this._removeFlagsGY(a.substring(i + 1));
            let c;
            try {
              c = new RegExp(a.substring(1, i), l);
            } catch {
              throw this._errExpectedButGot("REGEX", r);
            }
            return Ca.create(n, c);
          }
          switch (r.type) {
            case 10:
            case 19: {
              const a = [r.lexeme];
              this._advance();
              let i = this._peek(), l = 0;
              for (let g = 0; g < r.lexeme.length; g++) r.lexeme.charCodeAt(g) === D.OpenParen ? l++ : r.lexeme.charCodeAt(g) === D.CloseParen && l--;
              for (; !this._isAtEnd() && i.type !== 15 && i.type !== 16; ) {
                switch (i.type) {
                  case 0:
                    l++;
                    break;
                  case 1:
                    l--;
                    break;
                  case 10:
                  case 18:
                    for (let g = 0; g < i.lexeme.length; g++) i.lexeme.charCodeAt(g) === D.OpenParen ? l++ : r.lexeme.charCodeAt(g) === D.CloseParen && l--;
                }
                if (l < 0) break;
                a.push(Lt.getLexeme(i)), this._advance(), i = this._peek();
              }
              const c = a.join(""), u = c.lastIndexOf("/"), d = u === c.length - 1 ? void 0 : this._removeFlagsGY(c.substring(u + 1));
              let m;
              try {
                m = new RegExp(c.substring(1, u), d);
              } catch {
                throw this._errExpectedButGot("REGEX", r);
              }
              return te.regex(n, m);
            }
            case 18: {
              const a = r.lexeme;
              this._advance();
              let i = null;
              if (!vd(a)) {
                const l = a.indexOf("/"), c = a.lastIndexOf("/");
                if (l !== c && l >= 0) {
                  const u = a.slice(l + 1, c), d = a[c + 1] === "i" ? "i" : "";
                  try {
                    i = new RegExp(u, d);
                  } catch {
                    throw this._errExpectedButGot("REGEX", r);
                  }
                }
              }
              if (i === null) throw this._errExpectedButGot("REGEX", r);
              return Ca.create(n, i);
            }
            default:
              throw this._errExpectedButGot("REGEX", this._peek());
          }
        }
        if (this._matchOne(14)) {
          this._consume(13, Sm);
          const r = this._value();
          return te.notIn(n, r);
        }
        switch (this._peek().type) {
          case 3: {
            this._advance();
            const r = this._value();
            if (this._previous().type === 18) return te.equals(n, r);
            switch (r) {
              case "true":
                return te.has(n);
              case "false":
                return te.not(n);
              default:
                return te.equals(n, r);
            }
          }
          case 4: {
            this._advance();
            const r = this._value();
            if (this._previous().type === 18) return te.notEquals(n, r);
            switch (r) {
              case "true":
                return te.not(n);
              case "false":
                return te.has(n);
              default:
                return te.notEquals(n, r);
            }
          }
          case 5:
            return this._advance(), Ua.create(n, this._value());
          case 6:
            return this._advance(), Pa.create(n, this._value());
          case 7:
            return this._advance(), Hs.create(n, this._value());
          case 8:
            return this._advance(), xa.create(n, this._value());
          case 13:
            return this._advance(), te.in(n, this._value());
          default:
            return te.has(n);
        }
      }
      case 20:
        throw this._parsingErrors.push({ message: wm, offset: t.offset, lexeme: "", additionalInfo: bm }), _n._parseError;
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
  _errExpectedButGot(t, n, s) {
    const r = J(1826, null, t, Lt.getLexeme(n)), a = n.offset, i = Lt.getLexeme(n);
    return this._parsingErrors.push({ message: r, offset: a, lexeme: i, additionalInfo: s }), _n._parseError;
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
El._parseError = new Error();
var Im = El, te = class {
  static false() {
    return ae.INSTANCE;
  }
  static true() {
    return ce.INSTANCE;
  }
  static has(e) {
    return Ct.create(e);
  }
  static equals(e, t) {
    return Ma.create(e, t);
  }
  static notEquals(e, t) {
    return La.create(e, t);
  }
  static regex(e, t) {
    return Ca.create(e, t);
  }
  static in(e, t) {
    return yl.create(e, t);
  }
  static notIn(e, t) {
    return Sl.create(e, t);
  }
  static not(e) {
    return Ft.create(e);
  }
  static and(...e) {
    return Al.create(e, null, true);
  }
  static or(...e) {
    return Fa.create(e, null, true);
  }
  static greater(e, t) {
    return Hs.create(e, t);
  }
  static greaterEquals(e, t) {
    return xa.create(e, t);
  }
  static smaller(e, t) {
    return Ua.create(e, t);
  }
  static smallerEquals(e, t) {
    return Pa.create(e, t);
  }
  static function(e, t) {
    return Na.create(e, t);
  }
  static deserialize(e) {
    return e == null ? void 0 : this._parser.parse(e);
  }
};
te._parser = new Im({ regexParsingWithErrorRecovery: false });
function Pt(e, t) {
  return e.cmp(t);
}
var Na = class ta {
  constructor(t, n) {
    this.type = 16, this.id = t, this.fn = n;
  }
  static create(t, n) {
    return _m(t, n), new ta(t, n);
  }
  static createWithoutRegistration(t, n) {
    return new ta(t, n);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Ba(this.id, t.id);
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
    return ta.createWithoutRegistration(`!${this.id}`, () => !this.fn());
  }
}, Da = class {
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
    return ce.INSTANCE;
  }
};
Da.INSTANCE = new Da();
var ae = Da, Oa = class {
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
    return ae.INSTANCE;
  }
};
Oa.INSTANCE = new Oa();
var ce = Oa, Ct = class E1 {
  constructor(t, n) {
    this.key = t, this.negated = n, this.type = 2;
  }
  static create(t, n = null) {
    const s = X.get(t);
    return typeof s == "boolean" ? s ? ce.INSTANCE : ae.INSTANCE : new E1(t, n);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Ba(this.key, t.key);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key : false;
  }
  substituteConstants() {
    const t = X.get(this.key);
    return typeof t == "boolean" ? t ? ce.INSTANCE : ae.INSTANCE : this;
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
    return this.negated || (this.negated = Ft.create(this.key, this)), this.negated;
  }
}, Ma = class y1 {
  constructor(t, n, s) {
    this.key = t, this.value = n, this.negated = s, this.type = 4;
  }
  static create(t, n, s = null) {
    if (typeof n == "boolean") return n ? Ct.create(t, s) : Ft.create(t, s);
    const r = X.get(t);
    return typeof r == "boolean" ? n === (r ? "true" : "false") ? ce.INSTANCE : ae.INSTANCE : new y1(t, n, s);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : He(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    const t = X.get(this.key);
    if (typeof t == "boolean") {
      const n = t ? "true" : "false";
      return this.value === n ? ce.INSTANCE : ae.INSTANCE;
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
    return this.negated || (this.negated = La.create(this.key, this.value, this)), this.negated;
  }
}, yl = class S1 {
  constructor(t, n) {
    this.key = t, this.valueKey = n, this.type = 10, this.negated = null;
  }
  static create(t, n) {
    return new S1(t, n);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : He(this.key, this.valueKey, t.key, t.valueKey);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.valueKey === t.valueKey : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    const n = t.getValue(this.valueKey), s = t.getValue(this.key);
    return Array.isArray(n) ? n.includes(s) : typeof s == "string" && typeof n == "object" && n !== null ? km.call(n, s) : false;
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
    return this.negated || (this.negated = Sl.create(this.key, this.valueKey)), this.negated;
  }
}, Sl = class R1 {
  constructor(t, n) {
    this.key = t, this.valueKey = n, this.type = 11, this._negated = yl.create(t, n);
  }
  static create(t, n) {
    return new R1(t, n);
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
}, La = class A1 {
  constructor(t, n, s) {
    this.key = t, this.value = n, this.negated = s, this.type = 5;
  }
  static create(t, n, s = null) {
    if (typeof n == "boolean") return n ? Ft.create(t, s) : Ct.create(t, s);
    const r = X.get(t);
    return typeof r == "boolean" ? n === (r ? "true" : "false") ? ae.INSTANCE : ce.INSTANCE : new A1(t, n, s);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : He(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    const t = X.get(this.key);
    if (typeof t == "boolean") {
      const n = t ? "true" : "false";
      return this.value === n ? ae.INSTANCE : ce.INSTANCE;
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
    return this.negated || (this.negated = Ma.create(this.key, this.value, this)), this.negated;
  }
}, Ft = class w1 {
  constructor(t, n) {
    this.key = t, this.negated = n, this.type = 3;
  }
  static create(t, n = null) {
    const s = X.get(t);
    return typeof s == "boolean" ? s ? ae.INSTANCE : ce.INSTANCE : new w1(t, n);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Ba(this.key, t.key);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key : false;
  }
  substituteConstants() {
    const t = X.get(this.key);
    return typeof t == "boolean" ? t ? ae.INSTANCE : ce.INSTANCE : this;
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
    return this.negated || (this.negated = Ct.create(this.key, this)), this.negated;
  }
};
function Js(e, t) {
  if (typeof e == "string") {
    const n = parseFloat(e);
    isNaN(n) || (e = n);
  }
  return typeof e == "string" || typeof e == "number" ? t(e) : ae.INSTANCE;
}
var Hs = class b1 {
  constructor(t, n, s) {
    this.key = t, this.value = n, this.negated = s, this.type = 12;
  }
  static create(t, n, s = null) {
    return Js(n, (r) => new b1(t, r, s));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : He(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = Pa.create(this.key, this.value, this)), this.negated;
  }
}, xa = class I1 {
  constructor(t, n, s) {
    this.key = t, this.value = n, this.negated = s, this.type = 13;
  }
  static create(t, n, s = null) {
    return Js(n, (r) => new I1(t, r, s));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : He(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = Ua.create(this.key, this.value, this)), this.negated;
  }
}, Ua = class N1 {
  constructor(t, n, s) {
    this.key = t, this.value = n, this.negated = s, this.type = 14;
  }
  static create(t, n, s = null) {
    return Js(n, (r) => new N1(t, r, s));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : He(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = xa.create(this.key, this.value, this)), this.negated;
  }
}, Pa = class D1 {
  constructor(t, n, s) {
    this.key = t, this.value = n, this.negated = s, this.type = 15;
  }
  static create(t, n, s = null) {
    return Js(n, (r) => new D1(t, r, s));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : He(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = Hs.create(this.key, this.value, this)), this.negated;
  }
}, Ca = class O1 {
  constructor(t, n) {
    this.key = t, this.regexp = n, this.type = 7, this.negated = null;
  }
  static create(t, n) {
    return new O1(t, n);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.key < t.key) return -1;
    if (this.key > t.key) return 1;
    const n = this.regexp ? this.regexp.source : "", s = t.regexp ? t.regexp.source : "";
    return n < s ? -1 : n > s ? 1 : 0;
  }
  equals(t) {
    if (t.type === this.type) {
      const n = this.regexp ? this.regexp.source : "", s = t.regexp ? t.regexp.source : "";
      return this.key === t.key && n === s;
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
    return this.negated || (this.negated = Nm.create(this)), this.negated;
  }
}, Nm = class Qi {
  constructor(t) {
    this._actual = t, this.type = 8;
  }
  static create(t) {
    return new Qi(t);
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
    return new Qi(this._actual.map(t));
  }
  negate() {
    return this._actual;
  }
};
function Rl(e) {
  let t = null;
  for (let n = 0, s = e.length; n < s; n++) {
    const r = e[n].substituteConstants();
    if (e[n] !== r && t === null) {
      t = [];
      for (let a = 0; a < n; a++) t[a] = e[a];
    }
    t !== null && (t[n] = r);
  }
  return t === null ? e : t;
}
var Al = class _t {
  constructor(t, n) {
    this.expr = t, this.negated = n, this.type = 6;
  }
  static create(t, n, s) {
    return _t._normalizeArr(t, n, s);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.expr.length < t.expr.length) return -1;
    if (this.expr.length > t.expr.length) return 1;
    for (let n = 0, s = this.expr.length; n < s; n++) {
      const r = Pt(this.expr[n], t.expr[n]);
      if (r !== 0) return r;
    }
    return 0;
  }
  equals(t) {
    if (t.type === this.type) {
      if (this.expr.length !== t.expr.length) return false;
      for (let n = 0, s = this.expr.length; n < s; n++) if (!this.expr[n].equals(t.expr[n])) return false;
      return true;
    }
    return false;
  }
  substituteConstants() {
    const t = Rl(this.expr);
    return t === this.expr ? this : _t.create(t, this.negated, false);
  }
  evaluate(t) {
    for (let n = 0, s = this.expr.length; n < s; n++) if (!this.expr[n].evaluate(t)) return false;
    return true;
  }
  static _normalizeArr(t, n, s) {
    const r = [];
    let a = false;
    for (const i of t) if (i) {
      if (i.type === 1) {
        a = true;
        continue;
      }
      if (i.type === 0) return ae.INSTANCE;
      if (i.type === 6) {
        r.push(...i.expr);
        continue;
      }
      r.push(i);
    }
    if (r.length === 0 && a) return ce.INSTANCE;
    if (r.length !== 0) {
      if (r.length === 1) return r[0];
      r.sort(Pt);
      for (let i = 1; i < r.length; i++) r[i - 1].equals(r[i]) && (r.splice(i, 1), i--);
      if (r.length === 1) return r[0];
      for (; r.length > 1; ) {
        const i = r[r.length - 1];
        if (i.type !== 9) break;
        r.pop();
        const l = r.pop(), c = r.length === 0, u = Fa.create(i.expr.map((d) => _t.create([d, l], null, s)), null, c);
        u && (r.push(u), r.sort(Pt));
      }
      if (r.length === 1) return r[0];
      if (s) {
        for (let i = 0; i < r.length; i++) for (let l = i + 1; l < r.length; l++) if (r[i].negate().equals(r[l])) return ae.INSTANCE;
        if (r.length === 1) return r[0];
      }
      return new _t(r, n);
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
    return new _t(this.expr.map((n) => n.map(t)), null);
  }
  negate() {
    if (!this.negated) {
      const t = [];
      for (const n of this.expr) t.push(n.negate());
      this.negated = Fa.create(t, this, true);
    }
    return this.negated;
  }
}, Fa = class Ze {
  constructor(t, n) {
    this.expr = t, this.negated = n, this.type = 9;
  }
  static create(t, n, s) {
    return Ze._normalizeArr(t, n, s);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.expr.length < t.expr.length) return -1;
    if (this.expr.length > t.expr.length) return 1;
    for (let n = 0, s = this.expr.length; n < s; n++) {
      const r = Pt(this.expr[n], t.expr[n]);
      if (r !== 0) return r;
    }
    return 0;
  }
  equals(t) {
    if (t.type === this.type) {
      if (this.expr.length !== t.expr.length) return false;
      for (let n = 0, s = this.expr.length; n < s; n++) if (!this.expr[n].equals(t.expr[n])) return false;
      return true;
    }
    return false;
  }
  substituteConstants() {
    const t = Rl(this.expr);
    return t === this.expr ? this : Ze.create(t, this.negated, false);
  }
  evaluate(t) {
    for (let n = 0, s = this.expr.length; n < s; n++) if (this.expr[n].evaluate(t)) return true;
    return false;
  }
  static _normalizeArr(t, n, s) {
    let r = [], a = false;
    if (t) {
      for (let i = 0, l = t.length; i < l; i++) {
        const c = t[i];
        if (c) {
          if (c.type === 0) {
            a = true;
            continue;
          }
          if (c.type === 1) return ce.INSTANCE;
          if (c.type === 9) {
            r = r.concat(c.expr);
            continue;
          }
          r.push(c);
        }
      }
      if (r.length === 0 && a) return ae.INSTANCE;
      r.sort(Pt);
    }
    if (r.length !== 0) {
      if (r.length === 1) return r[0];
      for (let i = 1; i < r.length; i++) r[i - 1].equals(r[i]) && (r.splice(i, 1), i--);
      if (r.length === 1) return r[0];
      if (s) {
        for (let i = 0; i < r.length; i++) for (let l = i + 1; l < r.length; l++) if (r[i].negate().equals(r[l])) return ce.INSTANCE;
        if (r.length === 1) return r[0];
      }
      return new Ze(r, n);
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
    return new Ze(this.expr.map((n) => n.map(t)), null);
  }
  negate() {
    if (!this.negated) {
      const t = [];
      for (const n of this.expr) t.push(n.negate());
      for (; t.length > 1; ) {
        const n = t.shift(), s = t.shift(), r = [];
        for (const a of bl(n)) for (const i of bl(s)) r.push(Al.create([a, i], null, false));
        t.unshift(Ze.create(r, null, false));
      }
      this.negated = Ze.create(t, this, true);
    }
    return this.negated;
  }
}, wl = class na extends Ct {
  static all() {
    return na._info.values();
  }
  constructor(t, n, s) {
    super(t, null), this._defaultValue = n, typeof s == "object" ? na._info.push({ ...s, key: t }) : s !== true && na._info.push({ key: t, description: s, type: n != null ? typeof n : void 0 });
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
    return Ma.create(this.key, t);
  }
  notEqualsTo(t) {
    return La.create(this.key, t);
  }
  greater(t) {
    return Hs.create(this.key, t);
  }
};
wl._info = [];
var Dm = wl, nk = xt("contextKeyService");
function Ba(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function He(e, t, n, s) {
  return e < n ? -1 : e > n ? 1 : t < s ? -1 : t > s ? 1 : 0;
}
function bl(e) {
  return e.type === 9 ? e.expr : [e];
}
var sk = xt("logService"), rk = xt("loggerService"), Il = 3;
function Om(e, t) {
  return e !== 0 && e <= t;
}
var Nl = class extends Ee {
  constructor() {
    super(...arguments), this.level = Il, this._onDidChangeLogLevel = this._register(new H()), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event;
  }
  get isDisposed() {
    return this._store.isDisposed;
  }
  setLevel(e) {
    this.level !== e && (this.level = e, this._onDidChangeLogLevel.fire(this.level));
  }
  getLevel() {
    return this.level;
  }
  checkLogLevel(e) {
    return Om(this.level, e);
  }
  canLog(e) {
    return this._store.isDisposed ? false : this.checkLogLevel(e);
  }
}, Mm = class extends Nl {
  constructor(e = Il, t = true) {
    super(), this.useColors = t, this.setLevel(e);
  }
  trace(e, ...t) {
    this.canLog(1) && (this.useColors ? console.log("%cTRACE", "color: #888", e, ...t) : console.log(e, ...t));
  }
  debug(e, ...t) {
    this.canLog(2) && (this.useColors ? console.log("%cDEBUG", "background: #eee; color: #888", e, ...t) : console.log(e, ...t));
  }
  info(e, ...t) {
    this.canLog(3) && (this.useColors ? console.log("%c INFO", "color: #33f", e, ...t) : console.log(e, ...t));
  }
  warn(e, ...t) {
    this.canLog(4) && (this.useColors ? console.warn("%c WARN", "color: #993", e, ...t) : console.log(e, ...t));
  }
  error(e, ...t) {
    this.canLog(5) && (this.useColors ? console.error("%c  ERR", "color: #f33", e, ...t) : console.error(e, ...t));
  }
  flush() {
  }
}, Lm = class extends Nl {
  constructor(e) {
    super(), this.loggers = e, e.length && this.setLevel(e[0].getLevel());
  }
  setLevel(e) {
    for (const t of this.loggers) t.setLevel(e);
    super.setLevel(e);
  }
  trace(e, ...t) {
    for (const n of this.loggers) n.trace(e, ...t);
  }
  debug(e, ...t) {
    for (const n of this.loggers) n.debug(e, ...t);
  }
  info(e, ...t) {
    for (const n of this.loggers) n.info(e, ...t);
  }
  warn(e, ...t) {
    for (const n of this.loggers) n.warn(e, ...t);
  }
  error(e, ...t) {
    for (const n of this.loggers) n.error(e, ...t);
  }
  flush() {
    for (const e of this.loggers) e.flush();
  }
  dispose() {
    for (const e of this.loggers) e.dispose();
    super.dispose();
  }
};
function xm(e) {
  switch (e) {
    case 1:
      return "trace";
    case 2:
      return "debug";
    case 3:
      return "info";
    case 4:
      return "warn";
    case 5:
      return "error";
    case 0:
      return "off";
  }
}
var ak = new Dm("logLevel", xm(3)), Um = class extends Ee {
  get vscodeService() {
    return this;
  }
  get isDisposed() {
    return this._store.isDisposed;
  }
  constructor(e, t = []) {
    super(), this.logger = new Lm([e, ...t]), e.isDisposed || this._register(e.onDidChangeLogLevel((n) => this.setLevel(n)));
  }
  get onDidChangeLogLevel() {
    return this.logger.onDidChangeLogLevel;
  }
  setLevel(e) {
    this.logger.setLevel(e);
  }
  getLevel() {
    return this.logger.getLevel();
  }
  trace(e, ...t) {
    this.logger.trace(e, ...t);
  }
  debug(e, ...t) {
    this.logger.debug(e, ...t);
  }
  info(e, ...t) {
    this.logger.info(e, ...t);
  }
  warn(e, ...t) {
    this.logger.warn(e, ...t);
  }
  error(e, ...t) {
    this.logger.error(e, ...t);
  }
  flush() {
    this.logger.flush();
  }
}, Bt = { exit: "vscode:electron-main->conversation-search=exit", ipcReady: "vscode:conversation-search->electron-main=ipc-ready", initDone: "vscode:conversation-search->electron-main=init-done", initFailed: "vscode:conversation-search->electron-main=init-failed" }, Pm = { search: "conversationSearch.search" }, Ga = 256 * 1024, dt = 1e4, Cm = 512 * 1024, Dl = 100;
function Fm(e) {
  if (typeof e != "object" || e === null || !("text" in e) || typeof e.text != "string" || !("limit" in e) || typeof e.limit != "number" || !Number.isFinite(e.limit) || !("includeArchived" in e) || typeof e.includeArchived != "boolean") return;
  let t;
  if ("deadlineAt" in e) {
    if (typeof e.deadlineAt != "number" || !Number.isFinite(e.deadlineAt)) return;
    t = e.deadlineAt;
  }
  let n;
  if (!("cloudCacheScope" in e && (n = Te(e.cloudCacheScope), n === void 0))) return { text: e.text, limit: e.limit, includeArchived: e.includeArchived, deadlineAt: t, ...n === void 0 ? {} : { cloudCacheScope: n } };
}
var Ol = `
`;
function Bm(e) {
  return e.replace(/[\u0000-\u001f]/g, " ").trim();
}
function Gm(e) {
  return K.fromString(JSON.stringify(e)).byteLength;
}
function Ve(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Te(e) {
  if (!(typeof e != "string" || e.length === 0 || K.fromString(e).byteLength > 512)) return e;
}
function qm(e) {
  if (!Ve(e) || !Array.isArray(e.conversations) || e.conversations.length > dt) return;
  const t = Te(e.scope);
  if (t === void 0) return;
  const n = [];
  for (const s of e.conversations) {
    if (!Ve(s)) return;
    const r = Te(s.conversationId);
    if (r === void 0 || typeof s.title != "string" || K.fromString(s.title).byteLength > 32e3 || typeof s.recency != "number" || !Number.isFinite(s.recency) || typeof s.isArchived != "boolean" || typeof s.branches != "string" || K.fromString(s.branches).byteLength > 32e3) return;
    n.push({ conversationId: r, title: s.title, recency: s.recency, isArchived: s.isArchived, branches: s.branches });
  }
  return { scope: t, conversations: n };
}
function Wm(e) {
  if (!Ve(e) || !Array.isArray(e.candidates) || e.candidates.length > Dl) return;
  const t = Te(e.scope);
  if (t === void 0) return;
  const n = [];
  for (const s of e.candidates) {
    if (!Ve(s)) return;
    const r = Te(s.conversationId);
    if (r === void 0 || typeof s.kind != "string") return;
    switch (s.kind) {
      case "available": {
        const a = Te(s.fingerprint);
        if (a === void 0) return;
        n.push({ kind: "available", conversationId: r, fingerprint: a });
        break;
      }
      case "unavailable":
        n.push({ kind: "unavailable", conversationId: r });
        break;
      default:
        return;
    }
  }
  return { scope: t, candidates: n };
}
function $m(e) {
  if (!Ve(e) || !Array.isArray(e.conversations) || e.conversations.length > Dl) return;
  const t = Te(e.scope);
  if (t === void 0) return;
  const n = [];
  for (const r of e.conversations) {
    if (!Ve(r)) return;
    const a = Te(r.conversationId), i = Te(r.fingerprint);
    if (a === void 0 || i === void 0 || typeof r.body != "string" || K.fromString(r.body).byteLength > Ga) return;
    n.push({ conversationId: a, fingerprint: i, body: r.body });
  }
  const s = { scope: t, conversations: n };
  if (!(Gm(s) > Cm)) return s;
}
function Jm(e) {
  if (!Ve(e)) return;
  if (!("scope" in e) || e.scope === void 0) return {};
  const t = Te(e.scope);
  return t === void 0 ? void 0 : { scope: t };
}
var ik = 600 * 1e3;
import * as Gt from "fs";
var Hm = "project-subagent", Vm = "side-chat", Ym = "You are still in a side chat alongside the parent. Follow this turn's user message. Treat parent/inherited context as reference only — do not resume the parent's pending work unless this turn explicitly asks.", ok = `<system_reminder>
${Ym}
</system_reminder>`, qa = "composerConvHeaders:", Ml = ["chats", "messages", "agentBlobs", "agentCheckpoints", "agentArtifacts", "checkpoints", "diffs", "cloudAgents", "composerIndex", "settings", "otherKv", "sqliteOverhead", "wal", "sqliteFree"], lk = new Map(Ml.map((e, t) => [e, t])), ck = Ml.filter((e) => e !== "wal" && e !== "sqliteFree" && e !== "sqliteOverhead"), Km = ["cloudAgents", "diffs", "checkpoints", "agentArtifacts", "agentCheckpoints"], zm = ["chats", "messages", "agentBlobs", "otherKv"], Xm = ["settings", "composerIndex", ...Km], uk = [...Xm, ...zm], dk = 3600 * 1e3, mk = 1024 * 1024, hk = 512 * 1024 * 1024, gk = 900 * 1e3, Ll = 6;
function jm(e) {
  return `${qa}${e}:`;
}
function Qm(e, t) {
  return `${jm(e)}${String(t).padStart(Ll, "0")}`;
}
function Zm(e, t) {
  return Array.from({ length: t.chunkCount }, (n, s) => Qm(e, s));
}
function Wa(e, t) {
  return typeof e == "number" && Number.isInteger(e) && e >= t;
}
var eh = 65536;
function th(e) {
  if (typeof e != "object" || e === null) return false;
  const t = e;
  return Wa(t.chunkSize, 1) && Wa(t.chunkCount, 0) && t.chunkCount <= eh && Wa(t.count, 0) && (t.generation === void 0 || typeof t.generation == "string");
}
function nh(e) {
  return typeof e == "object" && e !== null && th(e.headerLog);
}
function sh(e) {
  if (!e.startsWith(qa)) return;
  const t = e.lastIndexOf(":"), n = e.slice(qa.length, t), s = e.slice(t + 1);
  if (!(n.length === 0 || s.length < Ll || !/^\d+$/.test(s))) return { composerId: n, chunkIndex: Number(s) };
}
function rh(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "object" && t !== null && typeof t.bubbleId == "string");
}
function ah(e) {
  try {
    const t = JSON.parse(e);
    return rh(t) ? t : void 0;
  } catch {
    return;
  }
}
function xl(e, t, n) {
  const s = n?.firstChunk ?? 0, r = new Array(e.chunkCount).fill(void 0), a = new Array(e.chunkCount).fill(void 0);
  for (const [g, p] of t) {
    const _ = sh(g)?.chunkIndex;
    if (_ === void 0 || _ < s || _ >= e.chunkCount) continue;
    const R = ah(p);
    R && (r[_] = R, a[_] = p.length);
  }
  const i = [], l = /* @__PURE__ */ new Set(), c = [];
  let u = 0, d = true;
  for (let g = s; g < e.chunkCount; g++) {
    const p = r[g], _ = c.length;
    if (!p) i.push(g);
    else for (const R of p) l.has(R.bubbleId) ? u++ : (l.add(R.bubbleId), c.push(R));
    g < e.chunkCount - 1 && c.length - _ !== e.chunkSize && (d = false);
  }
  const m = [];
  return (i.length > 0 || s === 0 && c.length < e.count) && m.push("missing_chunks"), u > 0 && m.push("duplicate_ids"), c.length > e.count && (c.length = e.count, m.push("count_mismatch")), { headers: c, damage: m, bytesByChunk: a, missingChunkIndexes: i, aligned: d };
}
async function ih(e, t, n, s) {
  const r = Zm(t, n), a = s?.tail;
  if (a === void 0) return xl(n, r.length === 0 ? [] : await e.cursorDiskKVGetBatch(r), { firstChunk: 0 });
  const i = [];
  let l = n.chunkCount, c = Math.max(0, l - Math.ceil(a / n.chunkSize) - 1);
  for (; ; ) {
    if (c < l) for (const d of await e.cursorDiskKVGetBatch(r.slice(c, l))) i.push(d);
    const u = xl(n, i, { firstChunk: c });
    if (c === 0 || u.headers.length >= a) return u;
    l = c, c = Math.max(0, c - (n.chunkCount - c));
  }
}
import { createHash as oh } from "crypto";
function W(e, t) {
  if (!e) throw new Error(t);
}
var lh = 34028234663852886e22, ch = -34028234663852886e22, uh = 4294967295, dh = 2147483647, mh = -2147483648;
function Vs(e) {
  if (typeof e != "number") throw new Error("invalid int 32: " + typeof e);
  if (!Number.isInteger(e) || e > dh || e < mh) throw new Error("invalid int 32: " + e);
}
function $a(e) {
  if (typeof e != "number") throw new Error("invalid uint 32: " + typeof e);
  if (!Number.isInteger(e) || e > uh || e < 0) throw new Error("invalid uint 32: " + e);
}
function Ul(e) {
  if (typeof e != "number") throw new Error("invalid float 32: " + typeof e);
  if (Number.isFinite(e) && (e > lh || e < ch)) throw new Error("invalid float 32: " + e);
}
var Pl = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
function Cl(e) {
  const t = e[Pl];
  return W(t, "missing enum type on enum object"), t;
}
function Fl(e, t, n, s) {
  e[Pl] = Bl(t, n.map((r) => ({ no: r.no, name: r.name, localName: e[r.no] })), s);
}
function Bl(e, t, n) {
  const s = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null), a = [];
  for (const i of t) {
    const l = Gl(i);
    a.push(l), s[i.name] = l, r[i.no] = l;
  }
  return { typeName: e, values: a, findName(i) {
    return s[i];
  }, findNumber(i) {
    return r[i];
  } };
}
function hh(e, t, n) {
  const s = {};
  for (const r of t) {
    const a = Gl(r);
    s[a.localName] = a.no, s[a.no] = a.localName;
  }
  return Fl(s, e, t, n), s;
}
function Gl(e) {
  return "localName" in e ? e : { ...e, localName: e.name };
}
var y = class {
  equals(e) {
    return this.getType().runtime.util.equals(this.getType(), this, e);
  }
  clone() {
    return this.getType().runtime.util.clone(this);
  }
  fromBinary(e, t) {
    const n = this.getType(), s = n.runtime.bin, r = s.makeReadOptions(t);
    return s.readMessage(this, r.readerFactory(e), e.byteLength, r), this;
  }
  fromJson(e, t) {
    const n = this.getType(), s = n.runtime.json, r = s.makeReadOptions(t);
    return s.readMessage(n, e, r, this), this;
  }
  fromJsonString(e, t) {
    let n;
    try {
      n = JSON.parse(e);
    } catch (s) {
      throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${s instanceof Error ? s.message : String(s)}`);
    }
    return this.fromJson(n, t);
  }
  toBinary(e) {
    const t = this.getType(), n = t.runtime.bin, s = n.makeWriteOptions(e), r = s.writerFactory();
    return n.writeMessage(this, r, s), r.finish();
  }
  toJson(e) {
    const t = this.getType(), n = t.runtime.json, s = n.makeWriteOptions(e);
    return n.writeMessage(this, s);
  }
  toJsonString(e) {
    const t = this.toJson(e);
    return JSON.stringify(t, null, e?.prettySpaces ?? 0);
  }
  toJSON() {
    return this.toJson({ emitDefaultValues: true });
  }
  getType() {
    return Object.getPrototypeOf(this).constructor;
  }
};
function gh(e, t, n, s) {
  const r = s?.localName ?? t.substring(t.lastIndexOf(".") + 1), a = { [r]: function(i) {
    e.util.initFields(this), e.util.initPartial(i, this);
  } }[r];
  return Object.setPrototypeOf(a.prototype, new y()), Object.assign(a, { runtime: e, typeName: t, fields: e.util.newFieldList(n), fromBinary(i, l) {
    return new a().fromBinary(i, l);
  }, fromJson(i, l) {
    return new a().fromJson(i, l);
  }, fromJsonString(i, l) {
    return new a().fromJsonString(i, l);
  }, equals(i, l) {
    return e.util.equals(a, i, l);
  } }), a;
}
function fh() {
  let e = 0, t = 0;
  for (let s = 0; s < 28; s += 7) {
    let r = this.buf[this.pos++];
    if (e |= (r & 127) << s, (r & 128) == 0) return this.assertBounds(), [e, t];
  }
  let n = this.buf[this.pos++];
  if (e |= (n & 15) << 28, t = (n & 112) >> 4, (n & 128) == 0) return this.assertBounds(), [e, t];
  for (let s = 3; s <= 31; s += 7) {
    let r = this.buf[this.pos++];
    if (t |= (r & 127) << s, (r & 128) == 0) return this.assertBounds(), [e, t];
  }
  throw new Error("invalid varint");
}
function Ja(e, t, n) {
  for (let a = 0; a < 28; a = a + 7) {
    const i = e >>> a, l = !(!(i >>> 7) && t == 0), c = (l ? i | 128 : i) & 255;
    if (n.push(c), !l) return;
  }
  const s = e >>> 28 & 15 | (t & 7) << 4, r = t >> 3 != 0;
  if (n.push((r ? s | 128 : s) & 255), !!r) {
    for (let a = 3; a < 31; a = a + 7) {
      const i = t >>> a, l = !!(i >>> 7), c = (l ? i | 128 : i) & 255;
      if (n.push(c), !l) return;
    }
    n.push(t >>> 31 & 1);
  }
}
var Ys = 4294967296;
function ql(e) {
  const t = e[0] === "-";
  t && (e = e.slice(1));
  const n = 1e6;
  let s = 0, r = 0;
  function a(i, l) {
    const c = Number(e.slice(i, l));
    r *= n, s = s * n + c, s >= Ys && (r = r + (s / Ys | 0), s = s % Ys);
  }
  return a(-24, -18), a(-18, -12), a(-12, -6), a(-6), t ? $l(s, r) : Ha(s, r);
}
function ph(e, t) {
  let n = Ha(e, t);
  const s = n.hi & 2147483648;
  s && (n = $l(n.lo, n.hi));
  const r = Wl(n.lo, n.hi);
  return s ? "-" + r : r;
}
function Wl(e, t) {
  if ({ lo: e, hi: t } = Th(e, t), t <= 2097151) return String(Ys * t + e);
  const n = e & 16777215, s = (e >>> 24 | t << 8) & 16777215, r = t >> 16 & 65535;
  let a = n + s * 6777216 + r * 6710656, i = s + r * 8147497, l = r * 2;
  const c = 1e7;
  return a >= c && (i += Math.floor(a / c), a %= c), i >= c && (l += Math.floor(i / c), i %= c), l.toString() + Jl(i) + Jl(a);
}
function Th(e, t) {
  return { lo: e >>> 0, hi: t >>> 0 };
}
function Ha(e, t) {
  return { lo: e | 0, hi: t | 0 };
}
function $l(e, t) {
  return t = ~t, e ? e = ~e + 1 : t += 1, Ha(e, t);
}
var Jl = (e) => {
  const t = String(e);
  return "0000000".slice(t.length) + t;
};
function Hl(e, t) {
  if (e >= 0) {
    for (; e > 127; ) t.push(e & 127 | 128), e = e >>> 7;
    t.push(e);
  } else {
    for (let n = 0; n < 9; n++) t.push(e & 127 | 128), e = e >> 7;
    t.push(1);
  }
}
function _h() {
  let e = this.buf[this.pos++], t = e & 127;
  if ((e & 128) == 0) return this.assertBounds(), t;
  if (e = this.buf[this.pos++], t |= (e & 127) << 7, (e & 128) == 0) return this.assertBounds(), t;
  if (e = this.buf[this.pos++], t |= (e & 127) << 14, (e & 128) == 0) return this.assertBounds(), t;
  if (e = this.buf[this.pos++], t |= (e & 127) << 21, (e & 128) == 0) return this.assertBounds(), t;
  e = this.buf[this.pos++], t |= (e & 15) << 28;
  for (let n = 5; (e & 128) !== 0 && n < 10; n++) e = this.buf[this.pos++];
  if ((e & 128) != 0) throw new Error("invalid varint");
  return this.assertBounds(), t >>> 0;
}
function kh() {
  const e = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof e.getBigInt64 == "function" && typeof e.getBigUint64 == "function" && typeof e.setBigInt64 == "function" && typeof e.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
    const r = BigInt("-9223372036854775808"), a = BigInt("9223372036854775807"), i = BigInt("0"), l = BigInt("18446744073709551615");
    return { zero: BigInt(0), supported: true, parse(c) {
      const u = typeof c == "bigint" ? c : BigInt(c);
      if (u > a || u < r) throw new Error(`int64 invalid: ${c}`);
      return u;
    }, uParse(c) {
      const u = typeof c == "bigint" ? c : BigInt(c);
      if (u > l || u < i) throw new Error(`uint64 invalid: ${c}`);
      return u;
    }, enc(c) {
      return e.setBigInt64(0, this.parse(c), true), { lo: e.getInt32(0, true), hi: e.getInt32(4, true) };
    }, uEnc(c) {
      return e.setBigInt64(0, this.uParse(c), true), { lo: e.getInt32(0, true), hi: e.getInt32(4, true) };
    }, dec(c, u) {
      return e.setInt32(0, c, true), e.setInt32(4, u, true), e.getBigInt64(0, true);
    }, uDec(c, u) {
      return e.setInt32(0, c, true), e.setInt32(4, u, true), e.getBigUint64(0, true);
    } };
  }
  const n = (r) => W(/^-?[0-9]+$/.test(r), `int64 invalid: ${r}`), s = (r) => W(/^[0-9]+$/.test(r), `uint64 invalid: ${r}`);
  return { zero: "0", supported: false, parse(r) {
    return typeof r != "string" && (r = r.toString()), n(r), r;
  }, uParse(r) {
    return typeof r != "string" && (r = r.toString()), s(r), r;
  }, enc(r) {
    return typeof r != "string" && (r = r.toString()), n(r), ql(r);
  }, uEnc(r) {
    return typeof r != "string" && (r = r.toString()), s(r), ql(r);
  }, dec(r, a) {
    return ph(r, a);
  }, uDec(r, a) {
    return Wl(r, a);
  } };
}
var z = kh(), f = ((e) => (e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64", e))(f || {}), Ye = ((e) => (e[e.BIGINT = 0] = "BIGINT", e[e.STRING = 1] = "STRING", e))(Ye || {});
function xe(e, t, n) {
  if (t === n) return true;
  if (e == f.BYTES) {
    if (!(t instanceof Uint8Array) || !(n instanceof Uint8Array) || t.length !== n.length) return false;
    for (let s = 0; s < t.length; s++) if (t[s] !== n[s]) return false;
    return true;
  }
  switch (e) {
    case f.UINT64:
    case f.FIXED64:
    case f.INT64:
    case f.SFIXED64:
    case f.SINT64:
      return t == n;
  }
  return false;
}
function mt(e, t) {
  switch (e) {
    case f.BOOL:
      return false;
    case f.UINT64:
    case f.FIXED64:
    case f.INT64:
    case f.SFIXED64:
    case f.SINT64:
      return t == 0 ? z.zero : "0";
    case f.DOUBLE:
    case f.FLOAT:
      return 0;
    case f.BYTES:
      return new Uint8Array(0);
    case f.STRING:
      return "";
    default:
      return 0;
  }
}
function Vl(e, t) {
  switch (e) {
    case f.BOOL:
      return t === false;
    case f.STRING:
      return t === "";
    case f.BYTES:
      return t instanceof Uint8Array && !t.byteLength;
    default:
      return t == 0;
  }
}
function vh(e, t, n, s) {
  let r;
  return { typeName: t, extendee: n, get field() {
    if (!r) {
      const a = typeof s == "function" ? s() : s;
      a.name = t.split(".").pop(), a.jsonName = `[${t}]`, r = e.util.newFieldList([a]).list()[0];
    }
    return r;
  }, runtime: e };
}
function Yl(e) {
  const t = e.field.localName, n = /* @__PURE__ */ Object.create(null);
  return n[t] = Eh(e), [n, () => n[t]];
}
function Eh(e) {
  const t = e.field;
  if (t.repeated) return [];
  if (t.default !== void 0) return t.default;
  switch (t.kind) {
    case "enum":
      return t.T.values[0].no;
    case "scalar":
      return mt(t.T, t.L);
    case "message":
      const n = t.T, s = new n();
      return n.fieldWrapper ? n.fieldWrapper.unwrapField(s) : s;
    case "map":
      throw "map fields are not allowed to be extensions";
  }
}
function yh(e, t) {
  if (!t.repeated && (t.kind == "enum" || t.kind == "scalar")) {
    for (let n = e.length - 1; n >= 0; --n) if (e[n].no == t.no) return [e[n]];
    return [];
  }
  return e.filter((n) => n.no === t.no);
}
var Ie = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), Ks = [];
for (let e = 0; e < Ie.length; e++) Ks[Ie[e].charCodeAt(0)] = e;
Ks[45] = Ie.indexOf("+"), Ks[95] = Ie.indexOf("/");
var Kl = { dec(e) {
  let t = e.length * 3 / 4;
  e[e.length - 2] == "=" ? t -= 2 : e[e.length - 1] == "=" && (t -= 1);
  let n = new Uint8Array(t), s = 0, r = 0, a, i = 0;
  for (let l = 0; l < e.length; l++) {
    if (a = Ks[e.charCodeAt(l)], a === void 0) switch (e[l]) {
      case "=":
        r = 0;
      case `
`:
      case "\r":
      case "	":
      case " ":
        continue;
      default:
        throw Error("invalid base64 string.");
    }
    switch (r) {
      case 0:
        i = a, r = 1;
        break;
      case 1:
        n[s++] = i << 2 | (a & 48) >> 4, i = a, r = 2;
        break;
      case 2:
        n[s++] = (i & 15) << 4 | (a & 60) >> 2, i = a, r = 3;
        break;
      case 3:
        n[s++] = (i & 3) << 6 | a, r = 0;
        break;
    }
  }
  if (r == 1) throw Error("invalid base64 string.");
  return n.subarray(0, s);
}, enc(e) {
  let t = "", n = 0, s, r = 0;
  for (let a = 0; a < e.length; a++) switch (s = e[a], n) {
    case 0:
      t += Ie[s >> 2], r = (s & 3) << 4, n = 1;
      break;
    case 1:
      t += Ie[r | s >> 4], r = (s & 15) << 2, n = 2;
      break;
    case 2:
      t += Ie[r | s >> 6], t += Ie[s & 63], n = 0;
      break;
  }
  return n && (t += Ie[r], t += "=", n == 1 && (t += "=")), t;
} };
function Sh(e, t, n) {
  Xl(t, e);
  const s = t.runtime.bin.makeReadOptions(n), r = yh(e.getType().runtime.bin.listUnknownFields(e), t.field), [a, i] = Yl(t);
  for (const l of r) t.runtime.bin.readField(a, s.readerFactory(l.data), t.field, l.wireType, s);
  return i();
}
function Rh(e, t, n, s) {
  Xl(t, e);
  const r = t.runtime.bin.makeReadOptions(s), a = t.runtime.bin.makeWriteOptions(s);
  if (zl(e, t)) {
    const u = e.getType().runtime.bin.listUnknownFields(e).filter((d) => d.no != t.field.no);
    e.getType().runtime.bin.discardUnknownFields(e);
    for (const d of u) e.getType().runtime.bin.onUnknownField(e, d.no, d.wireType, d.data);
  }
  const i = a.writerFactory();
  let l = t.field;
  !l.opt && !l.repeated && (l.kind == "enum" || l.kind == "scalar") && (l = { ...t.field, opt: true }), t.runtime.bin.writeField(l, n, i, a);
  const c = r.readerFactory(i.finish());
  for (; c.pos < c.len; ) {
    const [u, d] = c.tag(), m = c.skip(d, u);
    e.getType().runtime.bin.onUnknownField(e, u, d, m);
  }
}
function zl(e, t) {
  const n = e.getType();
  return t.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(e).find((s) => s.no == t.field.no);
}
function Xl(e, t) {
  W(e.extendee.typeName == t.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
function jl(e, t) {
  const n = e.localName;
  if (e.repeated) return t[n].length > 0;
  if (e.oneof) return t[e.oneof.localName].case === n;
  switch (e.kind) {
    case "enum":
    case "scalar":
      return e.opt || e.req ? t[n] !== void 0 : e.kind == "enum" ? t[n] !== e.T.values[0].no : !Vl(e.T, t[n]);
    case "message":
      return t[n] !== void 0;
    case "map":
      return Object.keys(t[n]).length > 0;
  }
}
function Ql(e, t) {
  const n = e.localName, s = !e.opt && !e.req;
  if (e.repeated) t[n] = [];
  else if (e.oneof) t[e.oneof.localName] = { case: void 0 };
  else switch (e.kind) {
    case "map":
      t[n] = {};
      break;
    case "enum":
      t[n] = s ? e.T.values[0].no : void 0;
      break;
    case "scalar":
      t[n] = s ? mt(e.T, e.L) : void 0;
      break;
    case "message":
      t[n] = void 0;
      break;
  }
}
function Ke(e, t) {
  if (e === null || typeof e != "object" || !Object.getOwnPropertyNames(y.prototype).every((s) => s in e && typeof e[s] == "function")) return false;
  const n = e.getType();
  return n === null || typeof n != "function" || !("typeName" in n) || typeof n.typeName != "string" ? false : t === void 0 ? true : n.typeName == t.typeName;
}
function Zl(e, t) {
  const n = Ke(t);
  return !n && !e.fieldWrapper ? new e(t) : n || !e.fieldWrapper ? t : e.fieldWrapper.wrapField(t);
}
var pk = { "google.protobuf.DoubleValue": f.DOUBLE, "google.protobuf.FloatValue": f.FLOAT, "google.protobuf.Int64Value": f.INT64, "google.protobuf.UInt64Value": f.UINT64, "google.protobuf.Int32Value": f.INT32, "google.protobuf.UInt32Value": f.UINT32, "google.protobuf.BoolValue": f.BOOL, "google.protobuf.StringValue": f.STRING, "google.protobuf.BytesValue": f.BYTES }, ec = { ignoreUnknownFields: false }, tc = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
function Ah(e) {
  return e ? { ...ec, ...e } : ec;
}
function wh(e) {
  return e ? { ...tc, ...e } : tc;
}
var zs = /* @__PURE__ */ Symbol(), Xs = /* @__PURE__ */ Symbol();
function bh() {
  return { makeReadOptions: Ah, makeWriteOptions: wh, readMessage(e, t, n, s) {
    if (t == null || Array.isArray(t) || typeof t != "object") throw new Error(`cannot decode message ${e.typeName} from JSON: ${_e(t)}`);
    s = s ?? new e();
    const r = /* @__PURE__ */ new Map(), a = n.typeRegistry;
    for (const [i, l] of Object.entries(t)) {
      const c = e.fields.findJsonName(i);
      if (c) {
        if (c.oneof) {
          if (l === null && c.kind == "scalar") continue;
          const u = r.get(c.oneof);
          if (u !== void 0) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${c.oneof.name}" present: "${u}", "${i}"`);
          r.set(c.oneof, i);
        }
        nc(s, l, c, n, e);
      } else {
        let u = false;
        if (a?.findExtension && i.startsWith("[") && i.endsWith("]")) {
          const d = a.findExtension(i.substring(1, i.length - 1));
          if (d && d.extendee.typeName == e.typeName) {
            u = true;
            const [m, g] = Yl(d);
            nc(m, l, d.field, n, d), Rh(s, d, g(), n);
          }
        }
        if (!u && !n.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${i}" is unknown`);
      }
    }
    return s;
  }, writeMessage(e, t) {
    const n = e.getType(), s = {};
    let r;
    try {
      for (r of n.fields.byNumber()) {
        if (!jl(r, e)) {
          if (r.req) throw "required field not set";
          if (!t.emitDefaultValues || !Nh(r)) continue;
        }
        const i = r.oneof ? e[r.oneof.localName].value : e[r.localName], l = sc(r, i, t);
        l !== void 0 && (s[t.useProtoFieldName ? r.name : r.jsonName] = l);
      }
      const a = t.typeRegistry;
      if (a?.findExtensionFor) for (const i of n.runtime.bin.listUnknownFields(e)) {
        const l = a.findExtensionFor(n.typeName, i.no);
        if (l && zl(e, l)) {
          const c = Sh(e, l, t), u = sc(l.field, c, t);
          u !== void 0 && (s[l.field.jsonName] = u);
        }
      }
    } catch (a) {
      const i = r ? `cannot encode field ${n.typeName}.${r.name} to JSON` : `cannot encode message ${n.typeName} to JSON`, l = a instanceof Error ? a.message : String(a);
      throw new Error(i + (l.length > 0 ? `: ${l}` : ""));
    }
    return s;
  }, readScalar(e, t, n) {
    return qt(e, t, n ?? Ye.BIGINT, true);
  }, writeScalar(e, t, n) {
    if (t !== void 0 && (n || Vl(e, t))) return js(e, t);
  }, debug: _e };
}
function _e(e) {
  if (e === null) return "null";
  switch (typeof e) {
    case "object":
      return Array.isArray(e) ? "array" : "object";
    case "string":
      return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
    default:
      return String(e);
  }
}
function nc(e, t, n, s, r) {
  let a = n.localName;
  if (n.repeated) {
    if (W(n.kind != "map"), t === null) return;
    if (!Array.isArray(t)) throw new Error(`cannot decode field ${r.typeName}.${n.name} from JSON: ${_e(t)}`);
    const i = e[a];
    for (const l of t) {
      if (l === null) throw new Error(`cannot decode field ${r.typeName}.${n.name} from JSON: ${_e(l)}`);
      switch (n.kind) {
        case "message":
          i.push(n.T.fromJson(l, s));
          break;
        case "enum":
          const c = Va(n.T, l, s.ignoreUnknownFields, true);
          c !== Xs && i.push(c);
          break;
        case "scalar":
          try {
            i.push(qt(n.T, l, n.L, true));
          } catch (u) {
            let d = `cannot decode field ${r.typeName}.${n.name} from JSON: ${_e(l)}`;
            throw u instanceof Error && u.message.length > 0 && (d += `: ${u.message}`), new Error(d);
          }
          break;
      }
    }
  } else if (n.kind == "map") {
    if (t === null) return;
    if (typeof t != "object" || Array.isArray(t)) throw new Error(`cannot decode field ${r.typeName}.${n.name} from JSON: ${_e(t)}`);
    const i = e[a];
    for (const [l, c] of Object.entries(t)) {
      if (c === null) throw new Error(`cannot decode field ${r.typeName}.${n.name} from JSON: map value null`);
      let u;
      try {
        u = Ih(n.K, l);
      } catch (d) {
        let m = `cannot decode map key for field ${r.typeName}.${n.name} from JSON: ${_e(t)}`;
        throw d instanceof Error && d.message.length > 0 && (m += `: ${d.message}`), new Error(m);
      }
      switch (n.V.kind) {
        case "message":
          i[u] = n.V.T.fromJson(c, s);
          break;
        case "enum":
          const d = Va(n.V.T, c, s.ignoreUnknownFields, true);
          d !== Xs && (i[u] = d);
          break;
        case "scalar":
          try {
            i[u] = qt(n.V.T, c, Ye.BIGINT, true);
          } catch (m) {
            let g = `cannot decode map value for field ${r.typeName}.${n.name} from JSON: ${_e(t)}`;
            throw m instanceof Error && m.message.length > 0 && (g += `: ${m.message}`), new Error(g);
          }
          break;
      }
    }
  } else switch (n.oneof && (e = e[n.oneof.localName] = { case: a }, a = "value"), n.kind) {
    case "message":
      const i = n.T;
      if (t === null && i.typeName != "google.protobuf.Value") return;
      let l = e[a];
      Ke(l) ? l.fromJson(t, s) : (e[a] = l = i.fromJson(t, s), i.fieldWrapper && !n.oneof && (e[a] = i.fieldWrapper.unwrapField(l)));
      break;
    case "enum":
      const c = Va(n.T, t, s.ignoreUnknownFields, false);
      switch (c) {
        case zs:
          Ql(n, e);
          break;
        case Xs:
          break;
        default:
          e[a] = c;
          break;
      }
      break;
    case "scalar":
      try {
        const u = qt(n.T, t, n.L, false);
        switch (u) {
          case zs:
            Ql(n, e);
            break;
          default:
            e[a] = u;
            break;
        }
      } catch (u) {
        let d = `cannot decode field ${r.typeName}.${n.name} from JSON: ${_e(t)}`;
        throw u instanceof Error && u.message.length > 0 && (d += `: ${u.message}`), new Error(d);
      }
      break;
  }
}
function Ih(e, t) {
  if (e === f.BOOL) switch (t) {
    case "true":
      t = true;
      break;
    case "false":
      t = false;
      break;
  }
  return qt(e, t, Ye.BIGINT, true).toString();
}
function qt(e, t, n, s) {
  if (t === null) return s ? mt(e, n) : zs;
  switch (e) {
    case f.DOUBLE:
    case f.FLOAT:
      if (t === "NaN") return Number.NaN;
      if (t === "Infinity") return Number.POSITIVE_INFINITY;
      if (t === "-Infinity") return Number.NEGATIVE_INFINITY;
      if (t === "" || typeof t == "string" && t.trim().length !== t.length || typeof t != "string" && typeof t != "number") break;
      const r = Number(t);
      if (Number.isNaN(r) || !Number.isFinite(r)) break;
      return e == f.FLOAT && Ul(r), r;
    case f.INT32:
    case f.FIXED32:
    case f.SFIXED32:
    case f.SINT32:
    case f.UINT32:
      let a;
      if (typeof t == "number" ? a = t : typeof t == "string" && t.length > 0 && t.trim().length === t.length && (a = Number(t)), a === void 0) break;
      return e == f.UINT32 || e == f.FIXED32 ? $a(a) : Vs(a), a;
    case f.INT64:
    case f.SFIXED64:
    case f.SINT64:
      if (typeof t != "number" && typeof t != "string") break;
      const i = z.parse(t);
      return n ? i.toString() : i;
    case f.FIXED64:
    case f.UINT64:
      if (typeof t != "number" && typeof t != "string") break;
      const l = z.uParse(t);
      return n ? l.toString() : l;
    case f.BOOL:
      if (typeof t != "boolean") break;
      return t;
    case f.STRING:
      if (typeof t != "string") break;
      try {
        encodeURIComponent(t);
      } catch {
        throw new Error("invalid UTF8");
      }
      return t;
    case f.BYTES:
      if (t === "") return new Uint8Array(0);
      if (typeof t != "string") break;
      return Kl.dec(t);
  }
  throw new Error();
}
function Va(e, t, n, s) {
  if (t === null) return e.typeName == "google.protobuf.NullValue" ? 0 : s ? e.values[0].no : zs;
  switch (typeof t) {
    case "number":
      if (Number.isInteger(t)) return t;
      break;
    case "string":
      const r = e.findName(t);
      if (r !== void 0) return r.no;
      if (n) return Xs;
      break;
  }
  throw new Error(`cannot decode enum ${e.typeName} from JSON: ${_e(t)}`);
}
function Nh(e) {
  return e.repeated || e.kind == "map" ? true : !(e.oneof || e.kind == "message" || e.opt || e.req);
}
function sc(e, t, n) {
  if (e.kind == "map") {
    W(typeof t == "object" && t != null);
    const s = {}, r = Object.entries(t);
    switch (e.V.kind) {
      case "scalar":
        for (const [i, l] of r) s[i.toString()] = js(e.V.T, l);
        break;
      case "message":
        for (const [i, l] of r) s[i.toString()] = l.toJson(n);
        break;
      case "enum":
        const a = e.V.T;
        for (const [i, l] of r) s[i.toString()] = Ya(a, l, n.enumAsInteger);
        break;
    }
    return n.emitDefaultValues || r.length > 0 ? s : void 0;
  }
  if (e.repeated) {
    W(Array.isArray(t));
    const s = [];
    switch (e.kind) {
      case "scalar":
        for (let r = 0; r < t.length; r++) s.push(js(e.T, t[r]));
        break;
      case "enum":
        for (let r = 0; r < t.length; r++) s.push(Ya(e.T, t[r], n.enumAsInteger));
        break;
      case "message":
        for (let r = 0; r < t.length; r++) s.push(t[r].toJson(n));
        break;
    }
    return n.emitDefaultValues || s.length > 0 ? s : void 0;
  }
  switch (e.kind) {
    case "scalar":
      return js(e.T, t);
    case "enum":
      return Ya(e.T, t, n.enumAsInteger);
    case "message":
      return Zl(e.T, t).toJson(n);
  }
}
function Ya(e, t, n) {
  return W(typeof t == "number"), e.typeName == "google.protobuf.NullValue" ? null : n ? t : e.findNumber(t)?.name ?? t;
}
function js(e, t) {
  switch (e) {
    case f.INT32:
    case f.SFIXED32:
    case f.SINT32:
    case f.FIXED32:
    case f.UINT32:
      return W(typeof t == "number"), t;
    case f.FLOAT:
    case f.DOUBLE:
      return W(typeof t == "number"), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t;
    case f.STRING:
      return W(typeof t == "string"), t;
    case f.BOOL:
      return W(typeof t == "boolean"), t;
    case f.UINT64:
    case f.FIXED64:
    case f.INT64:
    case f.SFIXED64:
    case f.SINT64:
      return W(typeof t == "bigint" || typeof t == "string" || typeof t == "number"), t.toString();
    case f.BYTES:
      return W(t instanceof Uint8Array), Kl.enc(t);
  }
}
var ue = ((e) => (e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32", e))(ue || {}), Dh = class {
  constructor(e) {
    this.stack = [], this.textEncoder = e ?? new TextEncoder(), this.chunks = [], this.buf = [];
  }
  finish() {
    this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
    let e = 0;
    for (let s = 0; s < this.chunks.length; s++) e += this.chunks[s].length;
    let t = new Uint8Array(e), n = 0;
    for (let s = 0; s < this.chunks.length; s++) t.set(this.chunks[s], n), n += this.chunks[s].length;
    return this.chunks = [], t;
  }
  fork() {
    return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
  }
  join() {
    let e = this.finish(), t = this.stack.pop();
    if (!t) throw new Error("invalid state, fork stack empty");
    return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e);
  }
  tag(e, t) {
    return this.uint32((e << 3 | t) >>> 0);
  }
  raw(e) {
    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this;
  }
  uint32(e) {
    for ($a(e); e > 127; ) this.buf.push(e & 127 | 128), e = e >>> 7;
    return this.buf.push(e), this;
  }
  int32(e) {
    return Vs(e), Hl(e, this.buf), this;
  }
  bool(e) {
    return this.buf.push(e ? 1 : 0), this;
  }
  bytes(e) {
    return this.uint32(e.byteLength), this.raw(e);
  }
  string(e) {
    let t = this.textEncoder.encode(e);
    return this.uint32(t.byteLength), this.raw(t);
  }
  float(e) {
    Ul(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setFloat32(0, e, true), this.raw(t);
  }
  double(e) {
    let t = new Uint8Array(8);
    return new DataView(t.buffer).setFloat64(0, e, true), this.raw(t);
  }
  fixed32(e) {
    $a(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e, true), this.raw(t);
  }
  sfixed32(e) {
    Vs(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setInt32(0, e, true), this.raw(t);
  }
  sint32(e) {
    return Vs(e), e = (e << 1 ^ e >> 31) >>> 0, Hl(e, this.buf), this;
  }
  sfixed64(e) {
    let t = new Uint8Array(8), n = new DataView(t.buffer), s = z.enc(e);
    return n.setInt32(0, s.lo, true), n.setInt32(4, s.hi, true), this.raw(t);
  }
  fixed64(e) {
    let t = new Uint8Array(8), n = new DataView(t.buffer), s = z.uEnc(e);
    return n.setInt32(0, s.lo, true), n.setInt32(4, s.hi, true), this.raw(t);
  }
  int64(e) {
    let t = z.enc(e);
    return Ja(t.lo, t.hi, this.buf), this;
  }
  sint64(e) {
    let t = z.enc(e), n = t.hi >> 31, s = t.lo << 1 ^ n, r = (t.hi << 1 | t.lo >>> 31) ^ n;
    return Ja(s, r, this.buf), this;
  }
  uint64(e) {
    let t = z.uEnc(e);
    return Ja(t.lo, t.hi, this.buf), this;
  }
}, Oh = class {
  constructor(e, t) {
    this.varint64 = fh, this.uint32 = _h, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder();
  }
  tag() {
    let e = this.uint32(), t = e >>> 3, n = e & 7;
    if (t <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + t + " wire type " + n);
    return [t, n];
  }
  skip(e, t) {
    let n = this.pos;
    switch (e) {
      case 0:
        for (; this.buf[this.pos++] & 128; ) ;
        break;
      case 1:
        this.pos += 4;
      case 5:
        this.pos += 4;
        break;
      case 2:
        let s = this.uint32();
        this.pos += s;
        break;
      case 3:
        for (; ; ) {
          const [r, a] = this.tag();
          if (a === 4) {
            if (t !== void 0 && r !== t) throw new Error("invalid end group tag");
            break;
          }
          this.skip(a, r);
        }
        break;
      default:
        throw new Error("cant skip wire type " + e);
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
    let e = this.uint32();
    return e >>> 1 ^ -(e & 1);
  }
  int64() {
    return z.dec(...this.varint64());
  }
  uint64() {
    return z.uDec(...this.varint64());
  }
  sint64() {
    let [e, t] = this.varint64(), n = -(e & 1);
    return e = (e >>> 1 | (t & 1) << 31) ^ n, t = t >>> 1 ^ n, z.dec(e, t);
  }
  bool() {
    let [e, t] = this.varint64();
    return e !== 0 || t !== 0;
  }
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, true);
  }
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, true);
  }
  fixed64() {
    return z.uDec(this.sfixed32(), this.sfixed32());
  }
  sfixed64() {
    return z.dec(this.sfixed32(), this.sfixed32());
  }
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, true);
  }
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, true);
  }
  bytes() {
    let e = this.uint32(), t = this.pos;
    return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e);
  }
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}, ht = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), rc = { readUnknownFields: true, readerFactory: (e) => new Oh(e) }, ac = { writeUnknownFields: true, writerFactory: () => new Dh() };
function Mh(e) {
  return e ? { ...rc, ...e } : rc;
}
function Lh(e) {
  return e ? { ...ac, ...e } : ac;
}
function xh() {
  return { makeReadOptions: Mh, makeWriteOptions: Lh, listUnknownFields(e) {
    return e[ht] ?? [];
  }, discardUnknownFields(e) {
    delete e[ht];
  }, writeUnknownFields(e, t) {
    const s = e[ht];
    if (s) for (const r of s) t.tag(r.no, r.wireType).raw(r.data);
  }, onUnknownField(e, t, n, s) {
    const r = e;
    Array.isArray(r[ht]) || (r[ht] = []), r[ht].push({ no: t, wireType: n, data: new Uint8Array(s) });
  }, readMessage(e, t, n, s, r) {
    const a = e.getType(), i = r ? t.len : t.pos + n;
    let l, c;
    for (; t.pos < i && ([l, c] = t.tag(), !(r === true && c == ue.EndGroup)); ) {
      const u = a.fields.find(l);
      if (!u) {
        const d = t.skip(c, l);
        s.readUnknownFields && this.onUnknownField(e, l, c, d);
        continue;
      }
      ic(e, t, u, c, s);
    }
    if (r && (c != ue.EndGroup || l !== n)) throw new Error("invalid end group tag");
  }, readField: ic, writeMessage(e, t, n) {
    const s = e.getType();
    for (const r of s.fields.byNumber()) {
      if (!jl(r, e)) {
        if (r.req) throw new Error(`cannot encode field ${s.typeName}.${r.name} to binary: required field not set`);
        continue;
      }
      const a = r.oneof ? e[r.oneof.localName].value : e[r.localName];
      oc(r, a, t, n);
    }
    return n.writeUnknownFields && this.writeUnknownFields(e, t), t;
  }, writeField(e, t, n, s) {
    t !== void 0 && oc(e, t, n, s);
  } };
}
function ic(e, t, n, s, r) {
  let { repeated: a, localName: i } = n;
  switch (n.oneof && (e = e[n.oneof.localName], e.case != i && delete e.value, e.case = i, i = "value"), n.kind) {
    case "scalar":
    case "enum":
      const l = n.kind == "enum" ? f.INT32 : n.T;
      let c = Zs;
      if (n.kind == "scalar" && n.L > 0 && (c = Ph), a) {
        let g = e[i];
        if (s == ue.LengthDelimited && l != f.STRING && l != f.BYTES) {
          let _ = t.uint32() + t.pos;
          for (; t.pos < _; ) g.push(c(t, l));
        } else g.push(c(t, l));
      } else e[i] = c(t, l);
      break;
    case "message":
      const u = n.T;
      a ? e[i].push(Qs(t, new u(), r, n)) : Ke(e[i]) ? Qs(t, e[i], r, n) : (e[i] = Qs(t, new u(), r, n), u.fieldWrapper && !n.oneof && !n.repeated && (e[i] = u.fieldWrapper.unwrapField(e[i])));
      break;
    case "map":
      let [d, m] = Uh(n, t, r);
      e[i][d] = m;
      break;
  }
}
function Qs(e, t, n, s) {
  const r = t.getType().runtime.bin, a = s?.delimited;
  return r.readMessage(t, e, a ? s.no : e.uint32(), n, a), t;
}
function Uh(e, t, n) {
  const s = t.uint32(), r = t.pos + s;
  let a, i;
  for (; t.pos < r; ) {
    const [l] = t.tag();
    switch (l) {
      case 1:
        a = Zs(t, e.K);
        break;
      case 2:
        switch (e.V.kind) {
          case "scalar":
            i = Zs(t, e.V.T);
            break;
          case "enum":
            i = t.int32();
            break;
          case "message":
            i = Qs(t, new e.V.T(), n, void 0);
            break;
        }
        break;
    }
  }
  if (a === void 0 && (a = mt(e.K, Ye.BIGINT)), typeof a != "string" && typeof a != "number" && (a = a.toString()), i === void 0) switch (e.V.kind) {
    case "scalar":
      i = mt(e.V.T, Ye.BIGINT);
      break;
    case "enum":
      i = e.V.T.values[0].no;
      break;
    case "message":
      i = new e.V.T();
      break;
  }
  return [a, i];
}
function Ph(e, t) {
  const n = Zs(e, t);
  return typeof n == "bigint" ? n.toString() : n;
}
function Zs(e, t) {
  switch (t) {
    case f.STRING:
      return e.string();
    case f.BOOL:
      return e.bool();
    case f.DOUBLE:
      return e.double();
    case f.FLOAT:
      return e.float();
    case f.INT32:
      return e.int32();
    case f.INT64:
      return e.int64();
    case f.UINT64:
      return e.uint64();
    case f.FIXED64:
      return e.fixed64();
    case f.BYTES:
      return e.bytes();
    case f.FIXED32:
      return e.fixed32();
    case f.SFIXED32:
      return e.sfixed32();
    case f.SFIXED64:
      return e.sfixed64();
    case f.SINT64:
      return e.sint64();
    case f.UINT32:
      return e.uint32();
    case f.SINT32:
      return e.sint32();
  }
}
function oc(e, t, n, s) {
  W(t !== void 0);
  const r = e.repeated;
  switch (e.kind) {
    case "scalar":
    case "enum":
      let a = e.kind == "enum" ? f.INT32 : e.T;
      if (r) if (W(Array.isArray(t)), e.packed) Fh(n, a, e.no, t);
      else for (const i of t) Wt(n, a, e.no, i);
      else Wt(n, a, e.no, t);
      break;
    case "message":
      if (r) {
        W(Array.isArray(t));
        for (const i of t) lc(n, s, e, i);
      } else lc(n, s, e, t);
      break;
    case "map":
      W(typeof t == "object" && t != null);
      for (const [i, l] of Object.entries(t)) Ch(n, s, e, i, l);
      break;
  }
}
function Ch(e, t, n, s, r) {
  e.tag(n.no, ue.LengthDelimited), e.fork();
  let a = s;
  switch (n.K) {
    case f.INT32:
    case f.FIXED32:
    case f.UINT32:
    case f.SFIXED32:
    case f.SINT32:
      a = Number.parseInt(s);
      break;
    case f.BOOL:
      W(s == "true" || s == "false"), a = s == "true";
      break;
  }
  switch (Wt(e, n.K, 1, a), n.V.kind) {
    case "scalar":
      Wt(e, n.V.T, 2, r);
      break;
    case "enum":
      Wt(e, f.INT32, 2, r);
      break;
    case "message":
      W(r !== void 0), e.tag(2, ue.LengthDelimited).bytes(r.toBinary(t));
      break;
  }
  e.join();
}
function lc(e, t, n, s) {
  const r = Zl(n.T, s);
  n.delimited ? e.tag(n.no, ue.StartGroup).raw(r.toBinary(t)).tag(n.no, ue.EndGroup) : e.tag(n.no, ue.LengthDelimited).bytes(r.toBinary(t));
}
function Wt(e, t, n, s) {
  W(s !== void 0);
  let [r, a] = cc(t);
  e.tag(n, r)[a](s);
}
function Fh(e, t, n, s) {
  if (!s.length) return;
  e.tag(n, ue.LengthDelimited).fork();
  let [, r] = cc(t);
  for (let a = 0; a < s.length; a++) e[r](s[a]);
  e.join();
}
function cc(e) {
  let t = ue.Varint;
  switch (e) {
    case f.BYTES:
    case f.STRING:
      t = ue.LengthDelimited;
      break;
    case f.DOUBLE:
    case f.FIXED64:
    case f.SFIXED64:
      t = ue.Bit64;
      break;
    case f.FIXED32:
    case f.SFIXED32:
    case f.FLOAT:
      t = ue.Bit32;
      break;
  }
  const n = f[e].toLowerCase();
  return [t, n];
}
function Bh() {
  return { setEnumType: Fl, initPartial(e, t) {
    if (e === void 0) return;
    const n = t.getType();
    for (const s of n.fields.byMember()) {
      const r = s.localName, a = t, i = e;
      if (i[r] != null) switch (s.kind) {
        case "oneof":
          const l = i[r].case;
          if (l === void 0) continue;
          const c = s.findField(l);
          let u = i[r].value;
          c && c.kind == "message" && !Ke(u, c.T) ? u = new c.T(u) : c && c.kind === "scalar" && c.T === f.BYTES && (u = $t(u)), a[r] = { case: l, value: u };
          break;
        case "scalar":
        case "enum":
          let d = i[r];
          s.T === f.BYTES && (d = s.repeated ? d.map($t) : $t(d)), a[r] = d;
          break;
        case "map":
          switch (s.V.kind) {
            case "scalar":
            case "enum":
              if (s.V.T === f.BYTES) for (const [p, _] of Object.entries(i[r])) a[r][p] = $t(_);
              else Object.assign(a[r], i[r]);
              break;
            case "message":
              const g = s.V.T;
              for (const p of Object.keys(i[r])) {
                let _ = i[r][p];
                g.fieldWrapper || (_ = new g(_)), a[r][p] = _;
              }
              break;
          }
          break;
        case "message":
          const m = s.T;
          if (s.repeated) a[r] = i[r].map((g) => Ke(g, m) ? g : new m(g));
          else {
            const g = i[r];
            m.fieldWrapper ? m.typeName === "google.protobuf.BytesValue" ? a[r] = $t(g) : a[r] = g : a[r] = Ke(g, m) ? g : new m(g);
          }
          break;
      }
    }
  }, equals(e, t, n) {
    return t === n ? true : !t || !n ? false : e.fields.byMember().every((s) => {
      const r = t[s.localName], a = n[s.localName];
      if (s.repeated) {
        if (r.length !== a.length) return false;
        switch (s.kind) {
          case "message":
            return r.every((i, l) => s.T.equals(i, a[l]));
          case "scalar":
            return r.every((i, l) => xe(s.T, i, a[l]));
          case "enum":
            return r.every((i, l) => xe(f.INT32, i, a[l]));
        }
        throw new Error(`repeated cannot contain ${s.kind}`);
      }
      switch (s.kind) {
        case "message":
          return s.T.equals(r, a);
        case "enum":
          return xe(f.INT32, r, a);
        case "scalar":
          return xe(s.T, r, a);
        case "oneof":
          if (r.case !== a.case) return false;
          const i = s.findField(r.case);
          if (i === void 0) return true;
          switch (i.kind) {
            case "message":
              return i.T.equals(r.value, a.value);
            case "enum":
              return xe(f.INT32, r.value, a.value);
            case "scalar":
              return xe(i.T, r.value, a.value);
          }
          throw new Error(`oneof cannot contain ${i.kind}`);
        case "map":
          const l = Object.keys(r).concat(Object.keys(a));
          switch (s.V.kind) {
            case "message":
              const c = s.V.T;
              return l.every((d) => c.equals(r[d], a[d]));
            case "enum":
              return l.every((d) => xe(f.INT32, r[d], a[d]));
            case "scalar":
              const u = s.V.T;
              return l.every((d) => xe(u, r[d], a[d]));
          }
          break;
      }
    });
  }, clone(e) {
    const t = e.getType(), n = new t(), s = n;
    for (const r of t.fields.byMember()) {
      const a = e[r.localName];
      let i;
      if (r.repeated) i = a.map(er);
      else if (r.kind == "map") {
        i = s[r.localName];
        for (const [l, c] of Object.entries(a)) i[l] = er(c);
      } else r.kind == "oneof" ? i = r.findField(a.case) ? { case: a.case, value: er(a.value) } : { case: void 0 } : i = er(a);
      s[r.localName] = i;
    }
    for (const r of t.runtime.bin.listUnknownFields(e)) t.runtime.bin.onUnknownField(s, r.no, r.wireType, r.data);
    return n;
  } };
}
function er(e) {
  if (e === void 0) return e;
  if (Ke(e)) return e.clone();
  if (e instanceof Uint8Array) {
    const t = new Uint8Array(e.byteLength);
    return t.set(e), t;
  }
  return e;
}
function $t(e) {
  return e instanceof Uint8Array ? e : new Uint8Array(e);
}
function uc(e, t, n) {
  return { syntax: e, json: bh(), bin: xh(), util: { ...Bh(), newFieldList: t, initFields: n }, makeMessageType(s, r, a) {
    return gh(this, s, r, a);
  }, makeEnum: hh, makeEnumType: Bl, getEnumType: Cl, makeExtension(s, r, a) {
    return vh(this, s, r, a);
  } };
}
var dc = class {
  constructor(e, t) {
    this._fields = e, this._normalizer = t;
  }
  findJsonName(e) {
    if (!this.jsonNames) {
      const t = {};
      for (const n of this.list()) t[n.jsonName] = t[n.name] = n;
      this.jsonNames = t;
    }
    return this.jsonNames[e];
  }
  find(e) {
    if (!this.numbers) {
      const t = {};
      for (const n of this.list()) t[n.no] = n;
      this.numbers = t;
    }
    return this.numbers[e];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, t) => e.no - t.no)), this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const e = this.members;
      let t;
      for (const n of this.list()) n.oneof ? n.oneof !== t && (t = n.oneof, e.push(t)) : e.push(n);
    }
    return this.members;
  }
};
function mc(e, t) {
  const n = hc(e);
  return t ? n : Hh(Jh(n));
}
function Gh(e) {
  return mc(e, false);
}
var qh = hc;
function hc(e) {
  let t = false;
  const n = [];
  for (let s = 0; s < e.length; s++) {
    let r = e.charAt(s);
    switch (r) {
      case "_":
        t = true;
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
        n.push(r), t = false;
        break;
      default:
        t && (t = false, r = r.toUpperCase()), n.push(r);
        break;
    }
  }
  return n.join("");
}
var Wh = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), $h = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), gc = (e) => `${e}$`, Jh = (e) => $h.has(e) ? gc(e) : e, Hh = (e) => Wh.has(e) ? gc(e) : e, Vh = class {
  constructor(e) {
    this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e, this.localName = Gh(e);
  }
  addField(e) {
    W(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e);
  }
  findField(e) {
    if (!this._lookup) {
      this._lookup = /* @__PURE__ */ Object.create(null);
      for (let t = 0; t < this.fields.length; t++) this._lookup[this.fields[t].localName] = this.fields[t];
    }
    return this._lookup[e];
  }
};
function fc(e, t) {
  const n = [];
  let s;
  for (const r of typeof e == "function" ? e() : e) {
    const a = r;
    if (a.localName = mc(r.name, r.oneof !== void 0), a.jsonName = r.jsonName ?? qh(r.name), a.repeated = r.repeated ?? false, r.kind == "scalar" && (a.L = r.L ?? Ye.BIGINT), a.delimited = r.delimited ?? false, a.req = r.req ?? false, a.opt = r.opt ?? false, r.packed === void 0 && (t ? a.packed = r.kind == "enum" || r.kind == "scalar" && r.T != f.BYTES && r.T != f.STRING : a.packed = false), r.oneof !== void 0) {
      const i = typeof r.oneof == "string" ? r.oneof : r.oneof.name;
      (!s || s.name != i) && (s = new Vh(i)), a.oneof = s, s.addField(a);
    }
    n.push(a);
  }
  return n;
}
var o = uc("proto3", (e) => new dc(e, (t) => fc(t, true)), (e) => {
  for (const t of e.getType().fields.byMember()) {
    if (t.opt) continue;
    const n = t.localName, s = e;
    if (t.repeated) {
      s[n] = [];
      continue;
    }
    switch (t.kind) {
      case "oneof":
        s[n] = { case: void 0 };
        break;
      case "enum":
        s[n] = 0;
        break;
      case "map":
        s[n] = {};
        break;
      case "scalar":
        s[n] = mt(t.T, t.L);
        break;
      case "message":
        break;
    }
  }
}), h = uc("proto2", (e) => new dc(e, (t) => fc(t, false)), (e) => {
  for (const t of e.getType().fields.byMember()) {
    const n = t.localName, s = e;
    if (t.repeated) {
      s[n] = [];
      continue;
    }
    switch (t.kind) {
      case "oneof":
        s[n] = { case: void 0 };
        break;
      case "map":
        s[n] = {};
        break;
      case "scalar":
      case "enum":
      case "message":
        break;
    }
  }
}), Tk = { NaN: Number.NaN, POSITIVE_INFINITY: Number.POSITIVE_INFINITY, NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY }, ke = ((e) => (e[e.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e[e.EDITION_LEGACY = 900] = "EDITION_LEGACY", e[e.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e[e.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e[e.EDITION_2023 = 1e3] = "EDITION_2023", e[e.EDITION_2024 = 1001] = "EDITION_2024", e[e.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e[e.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e[e.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e[e.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e[e.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e[e.EDITION_MAX = 2147483647] = "EDITION_MAX", e))(ke || {});
h.util.setEnumType(ke, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
var Ka = class kn extends y {
  constructor(t) {
    super(), this.file = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new kn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new kn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new kn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(kn, t, n);
  }
};
Ka.runtime = h, Ka.typeName = "google.protobuf.FileDescriptorSet", Ka.fields = h.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: za, repeated: true }]);
var tr = class vn extends y {
  constructor(t) {
    super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new vn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new vn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new vn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(vn, t, n);
  }
};
tr.runtime = h, tr.typeName = "google.protobuf.FileDescriptorProto", tr.fields = h.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: Yh, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: pc, repeated: true }, { no: 6, name: "service", kind: "message", T: tg, repeated: true }, { no: 7, name: "extension", kind: "message", T: ja, repeated: true }, { no: 8, name: "options", kind: "message", T: sg, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: gg, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: h.getEnumType(ke), opt: true }]);
var za = tr, Jt = class En extends y {
  constructor(t) {
    super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new En().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new En().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new En().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(En, t, n);
  }
};
Jt.runtime = h, Jt.typeName = "google.protobuf.DescriptorProto", Jt.fields = h.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: ja, repeated: true }, { no: 6, name: "extension", kind: "message", T: ja, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: Jt, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: pc, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: Kh, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: Qh, repeated: true }, { no: 7, name: "options", kind: "message", T: rg, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: zh, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
var Yh = Jt, nr = class yn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new yn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new yn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new yn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(yn, t, n);
  }
};
nr.runtime = h, nr.typeName = "google.protobuf.DescriptorProto.ExtensionRange", nr.fields = h.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: Xh, opt: true }]);
var Kh = nr, sr = class Sn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Sn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Sn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Sn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Sn, t, n);
  }
};
sr.runtime = h, sr.typeName = "google.protobuf.DescriptorProto.ReservedRange", sr.fields = h.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
var zh = sr, rr = class Rn extends y {
  constructor(t) {
    super(), this.uninterpretedOption = [], this.declaration = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Rn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Rn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Rn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Rn, t, n);
  }
};
rr.runtime = h, rr.typeName = "google.protobuf.ExtensionRangeOptions", rr.fields = h.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: Ne, repeated: true }, { no: 2, name: "declaration", kind: "message", T: jh, repeated: true }, { no: 50, name: "features", kind: "message", T: fe, opt: true }, { no: 3, name: "verification", kind: "enum", T: h.getEnumType(Xa), opt: true, default: 1 }]);
var Xh = rr, Xa = ((e) => (e[e.DECLARATION = 0] = "DECLARATION", e[e.UNVERIFIED = 1] = "UNVERIFIED", e))(Xa || {});
h.util.setEnumType(Xa, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
var ar = class An extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new An().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new An().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new An().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(An, t, n);
  }
};
ar.runtime = h, ar.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", ar.fields = h.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
var jh = ar, ir = class wn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new wn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new wn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new wn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(wn, t, n);
  }
};
ir.runtime = h, ir.typeName = "google.protobuf.FieldDescriptorProto", ir.fields = h.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: h.getEnumType(Qa), opt: true }, { no: 5, name: "type", kind: "enum", T: h.getEnumType(Y), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: ag, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]);
var ja = ir, Y = ((e) => (e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.GROUP = 10] = "GROUP", e[e.MESSAGE = 11] = "MESSAGE", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.ENUM = 14] = "ENUM", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64", e))(Y || {});
h.util.setEnumType(Y, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
var Qa = ((e) => (e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REPEATED = 3] = "REPEATED", e[e.REQUIRED = 2] = "REQUIRED", e))(Qa || {});
h.util.setEnumType(Qa, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
var or = class bn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new bn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new bn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new bn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(bn, t, n);
  }
};
or.runtime = h, or.typeName = "google.protobuf.OneofDescriptorProto", or.fields = h.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: og, opt: true }]);
var Qh = or, lr = class In extends y {
  constructor(t) {
    super(), this.value = [], this.reservedRange = [], this.reservedName = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new In().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new In().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new In().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(In, t, n);
  }
};
lr.runtime = h, lr.typeName = "google.protobuf.EnumDescriptorProto", lr.fields = h.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: eg, repeated: true }, { no: 3, name: "options", kind: "message", T: lg, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: Zh, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
var pc = lr, cr = class Nn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Nn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Nn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Nn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Nn, t, n);
  }
};
cr.runtime = h, cr.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", cr.fields = h.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
var Zh = cr, ur = class Dn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Dn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Dn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Dn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Dn, t, n);
  }
};
ur.runtime = h, ur.typeName = "google.protobuf.EnumValueDescriptorProto", ur.fields = h.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: cg, opt: true }]);
var eg = ur, dr = class On extends y {
  constructor(t) {
    super(), this.method = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new On().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new On().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new On().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(On, t, n);
  }
};
dr.runtime = h, dr.typeName = "google.protobuf.ServiceDescriptorProto", dr.fields = h.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: ng, repeated: true }, { no: 3, name: "options", kind: "message", T: ug, opt: true }]);
var tg = dr, mr = class Mn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Mn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Mn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Mn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Mn, t, n);
  }
};
mr.runtime = h, mr.typeName = "google.protobuf.MethodDescriptorProto", mr.fields = h.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: dg, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
var ng = mr, hr = class Ln extends y {
  constructor(t) {
    super(), this.uninterpretedOption = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Ln().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Ln().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Ln().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Ln, t, n);
  }
};
hr.runtime = h, hr.typeName = "google.protobuf.FileOptions", hr.fields = h.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: h.getEnumType(Za), opt: true, default: 1 }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: fe, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Ne, repeated: true }]);
var sg = hr, Za = ((e) => (e[e.SPEED = 1] = "SPEED", e[e.CODE_SIZE = 2] = "CODE_SIZE", e[e.LITE_RUNTIME = 3] = "LITE_RUNTIME", e))(Za || {});
h.util.setEnumType(Za, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
var gr = class xn extends y {
  constructor(t) {
    super(), this.uninterpretedOption = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new xn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new xn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new xn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(xn, t, n);
  }
};
gr.runtime = h, gr.typeName = "google.protobuf.MessageOptions", gr.fields = h.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: fe, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Ne, repeated: true }]);
var rg = gr, fr = class Un extends y {
  constructor(t) {
    super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Un().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Un().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Un().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Un, t, n);
  }
};
fr.runtime = h, fr.typeName = "google.protobuf.FieldOptions", fr.fields = h.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: h.getEnumType(ei), opt: true, default: 0 }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: h.getEnumType(ti), opt: true, default: 0 }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: h.getEnumType(ni), opt: true }, { no: 19, name: "targets", kind: "enum", T: h.getEnumType(si), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: ig, repeated: true }, { no: 21, name: "features", kind: "message", T: fe, opt: true }, { no: 22, name: "feature_support", kind: "message", T: Tc, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Ne, repeated: true }]);
var ag = fr, ei = ((e) => (e[e.STRING = 0] = "STRING", e[e.CORD = 1] = "CORD", e[e.STRING_PIECE = 2] = "STRING_PIECE", e))(ei || {});
h.util.setEnumType(ei, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]);
var ti = ((e) => (e[e.JS_NORMAL = 0] = "JS_NORMAL", e[e.JS_STRING = 1] = "JS_STRING", e[e.JS_NUMBER = 2] = "JS_NUMBER", e))(ti || {});
h.util.setEnumType(ti, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]);
var ni = ((e) => (e[e.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e[e.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e[e.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", e))(ni || {});
h.util.setEnumType(ni, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]);
var si = ((e) => (e[e.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e[e.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e[e.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e[e.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e[e.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e[e.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e[e.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e[e.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e[e.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e[e.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", e))(si || {});
h.util.setEnumType(si, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
var pr = class Pn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Pn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Pn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Pn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Pn, t, n);
  }
};
pr.runtime = h, pr.typeName = "google.protobuf.FieldOptions.EditionDefault", pr.fields = h.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: h.getEnumType(ke), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
var ig = pr, Tr = class Cn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Cn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Cn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Cn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Cn, t, n);
  }
};
Tr.runtime = h, Tr.typeName = "google.protobuf.FieldOptions.FeatureSupport", Tr.fields = h.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: h.getEnumType(ke), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: h.getEnumType(ke), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: h.getEnumType(ke), opt: true }]);
var Tc = Tr, _r = class Fn extends y {
  constructor(t) {
    super(), this.uninterpretedOption = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Fn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Fn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Fn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Fn, t, n);
  }
};
_r.runtime = h, _r.typeName = "google.protobuf.OneofOptions", _r.fields = h.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: fe, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Ne, repeated: true }]);
var og = _r, kr = class Bn extends y {
  constructor(t) {
    super(), this.uninterpretedOption = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Bn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Bn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Bn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Bn, t, n);
  }
};
kr.runtime = h, kr.typeName = "google.protobuf.EnumOptions", kr.fields = h.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: fe, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Ne, repeated: true }]);
var lg = kr, vr = class Gn extends y {
  constructor(t) {
    super(), this.uninterpretedOption = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Gn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Gn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Gn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Gn, t, n);
  }
};
vr.runtime = h, vr.typeName = "google.protobuf.EnumValueOptions", vr.fields = h.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: fe, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: Tc, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Ne, repeated: true }]);
var cg = vr, Er = class qn extends y {
  constructor(t) {
    super(), this.uninterpretedOption = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new qn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new qn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new qn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(qn, t, n);
  }
};
Er.runtime = h, Er.typeName = "google.protobuf.ServiceOptions", Er.fields = h.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: fe, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: Ne, repeated: true }]);
var ug = Er, yr = class Wn extends y {
  constructor(t) {
    super(), this.uninterpretedOption = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Wn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Wn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Wn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Wn, t, n);
  }
};
yr.runtime = h, yr.typeName = "google.protobuf.MethodOptions", yr.fields = h.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: h.getEnumType(ri), opt: true, default: 0 }, { no: 35, name: "features", kind: "message", T: fe, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Ne, repeated: true }]);
var dg = yr, ri = ((e) => (e[e.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e[e.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e[e.IDEMPOTENT = 2] = "IDEMPOTENT", e))(ri || {});
h.util.setEnumType(ri, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
var Sr = class $n extends y {
  constructor(t) {
    super(), this.name = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new $n().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new $n().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new $n().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals($n, t, n);
  }
};
Sr.runtime = h, Sr.typeName = "google.protobuf.UninterpretedOption", Sr.fields = h.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: mg, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
var Ne = Sr, Rr = class Jn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Jn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Jn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Jn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Jn, t, n);
  }
};
Rr.runtime = h, Rr.typeName = "google.protobuf.UninterpretedOption.NamePart", Rr.fields = h.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
var mg = Rr, Ar = class Hn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Hn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Hn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Hn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Hn, t, n);
  }
};
Ar.runtime = h, Ar.typeName = "google.protobuf.FeatureSet", Ar.fields = h.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: h.getEnumType(ai), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: h.getEnumType(ii), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: h.getEnumType(oi), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: h.getEnumType(li), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: h.getEnumType(ci), opt: true }, { no: 6, name: "json_format", kind: "enum", T: h.getEnumType(ui), opt: true }]);
var fe = Ar, ai = ((e) => (e[e.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.IMPLICIT = 2] = "IMPLICIT", e[e.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", e))(ai || {});
h.util.setEnumType(ai, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]);
var ii = ((e) => (e[e.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e[e.OPEN = 1] = "OPEN", e[e.CLOSED = 2] = "CLOSED", e))(ii || {});
h.util.setEnumType(ii, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]);
var oi = ((e) => (e[e.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e[e.PACKED = 1] = "PACKED", e[e.EXPANDED = 2] = "EXPANDED", e))(oi || {});
h.util.setEnumType(oi, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]);
var li = ((e) => (e[e.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e[e.VERIFY = 2] = "VERIFY", e[e.NONE = 3] = "NONE", e))(li || {});
h.util.setEnumType(li, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]);
var ci = ((e) => (e[e.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e[e.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e[e.DELIMITED = 2] = "DELIMITED", e))(ci || {});
h.util.setEnumType(ci, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]);
var ui = ((e) => (e[e.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e[e.ALLOW = 1] = "ALLOW", e[e.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", e))(ui || {});
h.util.setEnumType(ui, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
var di = class Vn extends y {
  constructor(t) {
    super(), this.defaults = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Vn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Vn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Vn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Vn, t, n);
  }
};
di.runtime = h, di.typeName = "google.protobuf.FeatureSetDefaults", di.fields = h.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: hg, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: h.getEnumType(ke), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: h.getEnumType(ke), opt: true }]);
var wr = class Yn extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Yn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Yn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Yn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Yn, t, n);
  }
};
wr.runtime = h, wr.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", wr.fields = h.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: h.getEnumType(ke), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: fe, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: fe, opt: true }]);
var hg = wr, br = class Kn extends y {
  constructor(t) {
    super(), this.location = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Kn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Kn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Kn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Kn, t, n);
  }
};
br.runtime = h, br.typeName = "google.protobuf.SourceCodeInfo", br.fields = h.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: fg, repeated: true }]);
var gg = br, Ir = class zn extends y {
  constructor(t) {
    super(), this.path = [], this.span = [], this.leadingDetachedComments = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new zn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new zn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new zn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(zn, t, n);
  }
};
Ir.runtime = h, Ir.typeName = "google.protobuf.SourceCodeInfo.Location", Ir.fields = h.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
var fg = Ir, Nr = class Xn extends y {
  constructor(t) {
    super(), this.annotation = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Xn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Xn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Xn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(Xn, t, n);
  }
};
Nr.runtime = h, Nr.typeName = "google.protobuf.GeneratedCodeInfo", Nr.fields = h.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: Tg, repeated: true }]);
var pg = Nr, Dr = class jn extends y {
  constructor(t) {
    super(), this.path = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new jn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new jn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new jn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(jn, t, n);
  }
};
Dr.runtime = h, Dr.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", Dr.fields = h.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: h.getEnumType(mi), opt: true }]);
var Tg = Dr, mi = ((e) => (e[e.NONE = 0] = "NONE", e[e.SET = 1] = "SET", e[e.ALIAS = 2] = "ALIAS", e))(mi || {});
h.util.setEnumType(mi, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
var _k = { [Y.DOUBLE]: f.DOUBLE, [Y.FLOAT]: f.FLOAT, [Y.INT64]: f.INT64, [Y.UINT64]: f.UINT64, [Y.INT32]: f.INT32, [Y.FIXED64]: f.FIXED64, [Y.FIXED32]: f.FIXED32, [Y.BOOL]: f.BOOL, [Y.STRING]: f.STRING, [Y.GROUP]: void 0, [Y.MESSAGE]: void 0, [Y.BYTES]: f.BYTES, [Y.UINT32]: f.UINT32, [Y.ENUM]: void 0, [Y.SFIXED32]: f.SFIXED32, [Y.SFIXED64]: f.SFIXED64, [Y.SINT32]: f.SINT32, [Y.SINT64]: f.SINT64 }, hi = class et extends y {
  constructor(t) {
    super(), this.seconds = z.zero, this.nanos = 0, o.util.initPartial(t, this);
  }
  fromJson(t, n) {
    if (typeof t != "string") throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${o.json.debug(t)}`);
    const s = t.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!s) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const r = Date.parse(s[1] + "-" + s[2] + "-" + s[3] + "T" + s[4] + ":" + s[5] + ":" + s[6] + (s[8] ? s[8] : "Z"));
    if (Number.isNaN(r)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if (r < Date.parse("0001-01-01T00:00:00Z") || r > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds = z.parse(r / 1e3), this.nanos = 0, s[7] && (this.nanos = parseInt("1" + s[7] + "0".repeat(9 - s[7].length)) - 1e9), this;
  }
  toJson(t) {
    const n = Number(this.seconds) * 1e3;
    if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let s = "Z";
    if (this.nanos > 0) {
      const r = (this.nanos + 1e9).toString().substring(1);
      r.substring(3) === "000000" ? s = "." + r.substring(0, 3) + "Z" : r.substring(6) === "000" ? s = "." + r.substring(0, 6) + "Z" : s = "." + r + "Z";
    }
    return new Date(n).toISOString().replace(".000Z", s);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return et.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(t) {
    const n = t.getTime();
    return new et({ seconds: z.parse(Math.floor(n / 1e3)), nanos: n % 1e3 * 1e6 });
  }
  static fromBinary(t, n) {
    return new et().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new et().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new et().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(et, t, n);
  }
};
hi.runtime = o, hi.typeName = "google.protobuf.Timestamp", hi.fields = o.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
var gi = class Qn extends y {
  constructor(t) {
    super(), this.seconds = z.zero, this.nanos = 0, o.util.initPartial(t, this);
  }
  fromJson(t, n) {
    if (typeof t != "string") throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.json.debug(t)}`);
    const s = t.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (s === null) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.json.debug(t)}`);
    const r = Number(s[1]);
    if (r > 315576e6 || r < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.json.debug(t)}`);
    if (this.seconds = z.parse(r), typeof s[2] == "string") {
      const a = s[2] + "0".repeat(9 - s[2].length);
      this.nanos = parseInt(a), (r < 0 || Object.is(r, -0)) && (this.nanos = -this.nanos);
    }
    return this;
  }
  toJson(t) {
    if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
    let n = this.seconds.toString();
    if (this.nanos !== 0) {
      let s = Math.abs(this.nanos).toString();
      s = "0".repeat(9 - s.length) + s, s.substring(3) === "000000" ? s = s.substring(0, 3) : s.substring(6) === "000" && (s = s.substring(0, 6)), n += "." + s, this.nanos < 0 && Number(this.seconds) == 0 && (n = "-" + n);
    }
    return n + "s";
  }
  static fromBinary(t, n) {
    return new Qn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Qn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Qn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(Qn, t, n);
  }
};
gi.runtime = o, gi.typeName = "google.protobuf.Duration", gi.fields = o.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
var Or = class kt extends y {
  constructor(t) {
    super(), this.typeUrl = "", this.value = new Uint8Array(0), o.util.initPartial(t, this);
  }
  toJson(t) {
    if (this.typeUrl === "") return {};
    const n = this.typeUrlToName(this.typeUrl), s = t?.typeRegistry?.findMessage(n);
    if (!s) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
    let a = s.fromBinary(this.value).toJson(t);
    return (n.startsWith("google.protobuf.") || a === null || Array.isArray(a) || typeof a != "object") && (a = { value: a }), a["@type"] = this.typeUrl, a;
  }
  fromJson(t, n) {
    if (t === null || Array.isArray(t) || typeof t != "object") throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${t === null ? "null" : Array.isArray(t) ? "array" : typeof t}`);
    if (Object.keys(t).length == 0) return this;
    const s = t["@type"];
    if (typeof s != "string" || s == "") throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
    const r = this.typeUrlToName(s), a = n?.typeRegistry?.findMessage(r);
    if (!a) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${s} is not in the type registry`);
    let i;
    if (r.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(t, "value")) i = a.fromJson(t.value, n);
    else {
      const l = Object.assign({}, t);
      delete l["@type"], i = a.fromJson(l, n);
    }
    return this.packFrom(i), this;
  }
  packFrom(t) {
    this.value = t.toBinary(), this.typeUrl = this.typeNameToUrl(t.getType().typeName);
  }
  unpackTo(t) {
    return this.is(t.getType()) ? (t.fromBinary(this.value), true) : false;
  }
  unpack(t) {
    if (this.typeUrl === "") return;
    const n = t.findMessage(this.typeUrlToName(this.typeUrl));
    if (n) return n.fromBinary(this.value);
  }
  is(t) {
    if (this.typeUrl === "") return false;
    const n = this.typeUrlToName(this.typeUrl);
    let s = "";
    return typeof t == "string" ? s = t : s = t.typeName, n === s;
  }
  typeNameToUrl(t) {
    return `type.googleapis.com/${t}`;
  }
  typeUrlToName(t) {
    if (!t.length) throw new Error(`invalid type url: ${t}`);
    const n = t.lastIndexOf("/"), s = n >= 0 ? t.substring(n + 1) : t;
    if (!s.length) throw new Error(`invalid type url: ${t}`);
    return s;
  }
  static pack(t) {
    const n = new kt();
    return n.packFrom(t), n;
  }
  static fromBinary(t, n) {
    return new kt().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new kt().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new kt().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(kt, t, n);
  }
};
Or.runtime = o, Or.typeName = "google.protobuf.Any", Or.fields = o.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
var _g = Or, fi = class Zn extends y {
  constructor(t) {
    super(), o.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Zn().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Zn().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Zn().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(Zn, t, n);
  }
};
fi.runtime = o, fi.typeName = "google.protobuf.Empty", fi.fields = o.util.newFieldList(() => []);
var pi = class es extends y {
  constructor(t) {
    super(), this.paths = [], o.util.initPartial(t, this);
  }
  toJson(t) {
    function n(s) {
      let r = false;
      const a = [];
      for (let i = 0; i < s.length; i++) {
        let l = s.charAt(i);
        switch (l) {
          case "_":
            r = true;
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
            a.push(l), r = false;
            break;
          default:
            r && (r = false, l = l.toUpperCase()), a.push(l);
            break;
        }
      }
      return a.join("");
    }
    return this.paths.map((s) => {
      if (s.match(/_[0-9]?_/g) || s.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + s + '" is irreversible');
      return n(s);
    }).join(",");
  }
  fromJson(t, n) {
    if (typeof t != "string") throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + o.json.debug(t));
    if (t === "") return this;
    function s(r) {
      if (r.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
      const a = r.replace(/[A-Z]/g, (i) => "_" + i.toLowerCase());
      return a[0] === "_" ? a.substring(1) : a;
    }
    return this.paths = t.split(",").map(s), this;
  }
  static fromBinary(t, n) {
    return new es().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new es().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new es().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(es, t, n);
  }
};
pi.runtime = o, pi.typeName = "google.protobuf.FieldMask", pi.fields = o.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
var Mr = ((e) => (e[e.NULL_VALUE = 0] = "NULL_VALUE", e))(Mr || {});
o.util.setEnumType(Mr, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
var Lr = class ts extends y {
  constructor(t) {
    super(), this.fields = {}, o.util.initPartial(t, this);
  }
  toJson(t) {
    const n = {};
    for (const [s, r] of Object.entries(this.fields)) n[s] = r.toJson(t);
    return n;
  }
  fromJson(t, n) {
    if (typeof t != "object" || t == null || Array.isArray(t)) throw new Error("cannot decode google.protobuf.Struct from JSON " + o.json.debug(t));
    for (const [s, r] of Object.entries(t)) this.fields[s] = Ht.fromJson(r);
    return this;
  }
  static fromBinary(t, n) {
    return new ts().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new ts().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new ts().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(ts, t, n);
  }
};
Lr.runtime = o, Lr.typeName = "google.protobuf.Struct", Lr.fields = o.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: Ht } }]);
var Ti = Lr, xr = class ns extends y {
  constructor(t) {
    super(), this.kind = { case: void 0 }, o.util.initPartial(t, this);
  }
  toJson(t) {
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
        return this.kind.value.toJson({ ...t, emitDefaultValues: true });
    }
    throw new Error("google.protobuf.Value must have a value");
  }
  fromJson(t, n) {
    switch (typeof t) {
      case "number":
        this.kind = { case: "numberValue", value: t };
        break;
      case "string":
        this.kind = { case: "stringValue", value: t };
        break;
      case "boolean":
        this.kind = { case: "boolValue", value: t };
        break;
      case "object":
        t === null ? this.kind = { case: "nullValue", value: 0 } : Array.isArray(t) ? this.kind = { case: "listValue", value: _c.fromJson(t) } : this.kind = { case: "structValue", value: Ti.fromJson(t) };
        break;
      default:
        throw new Error("cannot decode google.protobuf.Value from JSON " + o.json.debug(t));
    }
    return this;
  }
  static fromBinary(t, n) {
    return new ns().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new ns().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new ns().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(ns, t, n);
  }
};
xr.runtime = o, xr.typeName = "google.protobuf.Value", xr.fields = o.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: o.getEnumType(Mr), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: Ti, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: _c, oneof: "kind" }]);
var Ht = xr, Ur = class ss extends y {
  constructor(t) {
    super(), this.values = [], o.util.initPartial(t, this);
  }
  toJson(t) {
    return this.values.map((n) => n.toJson());
  }
  fromJson(t, n) {
    if (!Array.isArray(t)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + o.json.debug(t));
    for (let s of t) this.values.push(Ht.fromJson(s));
    return this;
  }
  static fromBinary(t, n) {
    return new ss().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new ss().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new ss().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(ss, t, n);
  }
};
Ur.runtime = o, Ur.typeName = "google.protobuf.ListValue", Ur.fields = o.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: Ht, repeated: true }]);
var _c = Ur, Vt = class rs extends y {
  constructor(t) {
    super(), this.value = 0, o.util.initPartial(t, this);
  }
  toJson(t) {
    return o.json.writeScalar(f.DOUBLE, this.value, true);
  }
  fromJson(t, n) {
    try {
      this.value = o.json.readScalar(f.DOUBLE, t);
    } catch (s) {
      let r = 'cannot decode message google.protobuf.DoubleValue from JSON"';
      throw s instanceof Error && s.message.length > 0 && (r += `: ${s.message}`), new Error(r);
    }
    return this;
  }
  static fromBinary(t, n) {
    return new rs().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new rs().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new rs().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(rs, t, n);
  }
};
Vt.runtime = o, Vt.typeName = "google.protobuf.DoubleValue", Vt.fields = o.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), Vt.fieldWrapper = { wrapField(e) {
  return new Vt({ value: e });
}, unwrapField(e) {
  return e.value;
} };
var Yt = class as extends y {
  constructor(t) {
    super(), this.value = 0, o.util.initPartial(t, this);
  }
  toJson(t) {
    return o.json.writeScalar(f.FLOAT, this.value, true);
  }
  fromJson(t, n) {
    try {
      this.value = o.json.readScalar(f.FLOAT, t);
    } catch (s) {
      let r = 'cannot decode message google.protobuf.FloatValue from JSON"';
      throw s instanceof Error && s.message.length > 0 && (r += `: ${s.message}`), new Error(r);
    }
    return this;
  }
  static fromBinary(t, n) {
    return new as().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new as().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new as().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(as, t, n);
  }
};
Yt.runtime = o, Yt.typeName = "google.protobuf.FloatValue", Yt.fields = o.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), Yt.fieldWrapper = { wrapField(e) {
  return new Yt({ value: e });
}, unwrapField(e) {
  return e.value;
} };
var Kt = class is extends y {
  constructor(t) {
    super(), this.value = z.zero, o.util.initPartial(t, this);
  }
  toJson(t) {
    return o.json.writeScalar(f.INT64, this.value, true);
  }
  fromJson(t, n) {
    try {
      this.value = o.json.readScalar(f.INT64, t);
    } catch (s) {
      let r = 'cannot decode message google.protobuf.Int64Value from JSON"';
      throw s instanceof Error && s.message.length > 0 && (r += `: ${s.message}`), new Error(r);
    }
    return this;
  }
  static fromBinary(t, n) {
    return new is().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new is().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new is().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(is, t, n);
  }
};
Kt.runtime = o, Kt.typeName = "google.protobuf.Int64Value", Kt.fields = o.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), Kt.fieldWrapper = { wrapField(e) {
  return new Kt({ value: e });
}, unwrapField(e) {
  return e.value;
} };
var zt = class os extends y {
  constructor(t) {
    super(), this.value = z.zero, o.util.initPartial(t, this);
  }
  toJson(t) {
    return o.json.writeScalar(f.UINT64, this.value, true);
  }
  fromJson(t, n) {
    try {
      this.value = o.json.readScalar(f.UINT64, t);
    } catch (s) {
      let r = 'cannot decode message google.protobuf.UInt64Value from JSON"';
      throw s instanceof Error && s.message.length > 0 && (r += `: ${s.message}`), new Error(r);
    }
    return this;
  }
  static fromBinary(t, n) {
    return new os().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new os().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new os().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(os, t, n);
  }
};
zt.runtime = o, zt.typeName = "google.protobuf.UInt64Value", zt.fields = o.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), zt.fieldWrapper = { wrapField(e) {
  return new zt({ value: e });
}, unwrapField(e) {
  return e.value;
} };
var Xt = class ls extends y {
  constructor(t) {
    super(), this.value = 0, o.util.initPartial(t, this);
  }
  toJson(t) {
    return o.json.writeScalar(f.INT32, this.value, true);
  }
  fromJson(t, n) {
    try {
      this.value = o.json.readScalar(f.INT32, t);
    } catch (s) {
      let r = 'cannot decode message google.protobuf.Int32Value from JSON"';
      throw s instanceof Error && s.message.length > 0 && (r += `: ${s.message}`), new Error(r);
    }
    return this;
  }
  static fromBinary(t, n) {
    return new ls().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new ls().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new ls().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(ls, t, n);
  }
};
Xt.runtime = o, Xt.typeName = "google.protobuf.Int32Value", Xt.fields = o.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), Xt.fieldWrapper = { wrapField(e) {
  return new Xt({ value: e });
}, unwrapField(e) {
  return e.value;
} };
var jt = class cs extends y {
  constructor(t) {
    super(), this.value = 0, o.util.initPartial(t, this);
  }
  toJson(t) {
    return o.json.writeScalar(f.UINT32, this.value, true);
  }
  fromJson(t, n) {
    try {
      this.value = o.json.readScalar(f.UINT32, t);
    } catch (s) {
      let r = 'cannot decode message google.protobuf.UInt32Value from JSON"';
      throw s instanceof Error && s.message.length > 0 && (r += `: ${s.message}`), new Error(r);
    }
    return this;
  }
  static fromBinary(t, n) {
    return new cs().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new cs().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new cs().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(cs, t, n);
  }
};
jt.runtime = o, jt.typeName = "google.protobuf.UInt32Value", jt.fields = o.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), jt.fieldWrapper = { wrapField(e) {
  return new jt({ value: e });
}, unwrapField(e) {
  return e.value;
} };
var Qt = class us extends y {
  constructor(t) {
    super(), this.value = false, o.util.initPartial(t, this);
  }
  toJson(t) {
    return o.json.writeScalar(f.BOOL, this.value, true);
  }
  fromJson(t, n) {
    try {
      this.value = o.json.readScalar(f.BOOL, t);
    } catch (s) {
      let r = 'cannot decode message google.protobuf.BoolValue from JSON"';
      throw s instanceof Error && s.message.length > 0 && (r += `: ${s.message}`), new Error(r);
    }
    return this;
  }
  static fromBinary(t, n) {
    return new us().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new us().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new us().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(us, t, n);
  }
};
Qt.runtime = o, Qt.typeName = "google.protobuf.BoolValue", Qt.fields = o.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), Qt.fieldWrapper = { wrapField(e) {
  return new Qt({ value: e });
}, unwrapField(e) {
  return e.value;
} };
var Zt = class ds extends y {
  constructor(t) {
    super(), this.value = "", o.util.initPartial(t, this);
  }
  toJson(t) {
    return o.json.writeScalar(f.STRING, this.value, true);
  }
  fromJson(t, n) {
    try {
      this.value = o.json.readScalar(f.STRING, t);
    } catch (s) {
      let r = 'cannot decode message google.protobuf.StringValue from JSON"';
      throw s instanceof Error && s.message.length > 0 && (r += `: ${s.message}`), new Error(r);
    }
    return this;
  }
  static fromBinary(t, n) {
    return new ds().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new ds().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new ds().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(ds, t, n);
  }
};
Zt.runtime = o, Zt.typeName = "google.protobuf.StringValue", Zt.fields = o.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), Zt.fieldWrapper = { wrapField(e) {
  return new Zt({ value: e });
}, unwrapField(e) {
  return e.value;
} };
var en = class ms extends y {
  constructor(t) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(t, this);
  }
  toJson(t) {
    return o.json.writeScalar(f.BYTES, this.value, true);
  }
  fromJson(t, n) {
    try {
      this.value = o.json.readScalar(f.BYTES, t);
    } catch (s) {
      let r = 'cannot decode message google.protobuf.BytesValue from JSON"';
      throw s instanceof Error && s.message.length > 0 && (r += `: ${s.message}`), new Error(r);
    }
    return this;
  }
  static fromBinary(t, n) {
    return new ms().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new ms().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new ms().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(ms, t, n);
  }
};
en.runtime = o, en.typeName = "google.protobuf.BytesValue", en.fields = o.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), en.fieldWrapper = { wrapField(e) {
  return new en({ value: e });
}, unwrapField(e) {
  return e.value;
} };
var kk = [Cl(Mr)], Pr = class hs extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new hs().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new hs().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new hs().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(hs, t, n);
  }
};
Pr.runtime = h, Pr.typeName = "google.protobuf.compiler.Version", Pr.fields = h.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
var kg = Pr, _i = class gs extends y {
  constructor(t) {
    super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new gs().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new gs().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new gs().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(gs, t, n);
  }
};
_i.runtime = h, _i.typeName = "google.protobuf.compiler.CodeGeneratorRequest", _i.fields = h.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: za, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: za, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: kg, opt: true }]);
var ki = class fs extends y {
  constructor(t) {
    super(), this.file = [], h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new fs().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new fs().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new fs().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(fs, t, n);
  }
};
ki.runtime = h, ki.typeName = "google.protobuf.compiler.CodeGeneratorResponse", ki.fields = h.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: vg, repeated: true }]);
var kc = ((e) => (e[e.NONE = 0] = "NONE", e[e.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e[e.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", e))(kc || {});
h.util.setEnumType(kc, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
var Cr = class ps extends y {
  constructor(t) {
    super(), h.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new ps().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new ps().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new ps().fromJsonString(t, n);
  }
  static equals(t, n) {
    return h.util.equals(ps, t, n);
  }
};
Cr.runtime = h, Cr.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", Cr.fields = h.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: pg, opt: true }]);
var vg = Cr, Fr = class Ts extends y {
  constructor(t) {
    super(), this.fileName = "", o.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Ts().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Ts().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Ts().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(Ts, t, n);
  }
};
Fr.runtime = o, Fr.typeName = "google.protobuf.SourceContext", Fr.fields = o.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
var vi = Fr, Ue = ((e) => (e[e.PROTO2 = 0] = "PROTO2", e[e.PROTO3 = 1] = "PROTO3", e[e.EDITIONS = 2] = "EDITIONS", e))(Ue || {});
o.util.setEnumType(Ue, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
var Ei = class _s extends y {
  constructor(t) {
    super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", o.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new _s().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new _s().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new _s().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(_s, t, n);
  }
};
Ei.runtime = o, Ei.typeName = "google.protobuf.Type", Ei.fields = o.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: Eg, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: gt, repeated: true }, { no: 5, name: "source_context", kind: "message", T: vi }, { no: 6, name: "syntax", kind: "enum", T: o.getEnumType(Ue) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
var Br = class ks extends y {
  constructor(t) {
    super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", o.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new ks().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new ks().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new ks().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(ks, t, n);
  }
};
Br.runtime = o, Br.typeName = "google.protobuf.Field", Br.fields = o.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: o.getEnumType(yi) }, { no: 2, name: "cardinality", kind: "enum", T: o.getEnumType(Si) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: gt, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]);
var Eg = Br, yi = ((e) => (e[e.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e[e.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e[e.TYPE_FLOAT = 2] = "TYPE_FLOAT", e[e.TYPE_INT64 = 3] = "TYPE_INT64", e[e.TYPE_UINT64 = 4] = "TYPE_UINT64", e[e.TYPE_INT32 = 5] = "TYPE_INT32", e[e.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e[e.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e[e.TYPE_BOOL = 8] = "TYPE_BOOL", e[e.TYPE_STRING = 9] = "TYPE_STRING", e[e.TYPE_GROUP = 10] = "TYPE_GROUP", e[e.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e[e.TYPE_BYTES = 12] = "TYPE_BYTES", e[e.TYPE_UINT32 = 13] = "TYPE_UINT32", e[e.TYPE_ENUM = 14] = "TYPE_ENUM", e[e.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e[e.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e[e.TYPE_SINT32 = 17] = "TYPE_SINT32", e[e.TYPE_SINT64 = 18] = "TYPE_SINT64", e))(yi || {});
o.util.setEnumType(yi, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
var Si = ((e) => (e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REQUIRED = 2] = "REQUIRED", e[e.REPEATED = 3] = "REPEATED", e))(Si || {});
o.util.setEnumType(Si, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
var Ri = class vs extends y {
  constructor(t) {
    super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", o.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new vs().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new vs().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new vs().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(vs, t, n);
  }
};
Ri.runtime = o, Ri.typeName = "google.protobuf.Enum", Ri.fields = o.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: yg, repeated: true }, { no: 3, name: "options", kind: "message", T: gt, repeated: true }, { no: 4, name: "source_context", kind: "message", T: vi }, { no: 5, name: "syntax", kind: "enum", T: o.getEnumType(Ue) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
var Gr = class Es extends y {
  constructor(t) {
    super(), this.name = "", this.number = 0, this.options = [], o.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Es().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Es().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Es().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(Es, t, n);
  }
};
Gr.runtime = o, Gr.typeName = "google.protobuf.EnumValue", Gr.fields = o.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: gt, repeated: true }]);
var yg = Gr, qr = class ys extends y {
  constructor(t) {
    super(), this.name = "", o.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new ys().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new ys().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new ys().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(ys, t, n);
  }
};
qr.runtime = o, qr.typeName = "google.protobuf.Option", qr.fields = o.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: _g }]);
var gt = qr, Ai = class Ss extends y {
  constructor(t) {
    super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = Ue.PROTO2, o.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Ss().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Ss().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Ss().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(Ss, t, n);
  }
};
Ai.runtime = o, Ai.typeName = "google.protobuf.Api", Ai.fields = o.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: Sg, repeated: true }, { no: 3, name: "options", kind: "message", T: gt, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: vi }, { no: 6, name: "mixins", kind: "message", T: Rg, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: o.getEnumType(Ue) }]);
var Wr = class Rs extends y {
  constructor(t) {
    super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = Ue.PROTO2, o.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new Rs().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new Rs().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new Rs().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(Rs, t, n);
  }
};
Wr.runtime = o, Wr.typeName = "google.protobuf.Method", Wr.fields = o.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: gt, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: o.getEnumType(Ue) }]);
var Sg = Wr, $r = class As extends y {
  constructor(t) {
    super(), this.name = "", this.root = "", o.util.initPartial(t, this);
  }
  static fromBinary(t, n) {
    return new As().fromBinary(t, n);
  }
  static fromJson(t, n) {
    return new As().fromJson(t, n);
  }
  static fromJsonString(t, n) {
    return new As().fromJsonString(t, n);
  }
  static equals(t, n) {
    return o.util.equals(As, t, n);
  }
};
$r.runtime = o, $r.typeName = "google.protobuf.Mixin", $r.fields = o.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
var Rg = $r, Ag = o.makeEnum("agent.v1.SubagentExecutionEnvironment", [{ no: 0, name: "SUBAGENT_EXECUTION_ENVIRONMENT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUBAGENT_EXECUTION_ENVIRONMENT_LOCAL", localName: "LOCAL" }, { no: 2, name: "SUBAGENT_EXECUTION_ENVIRONMENT_CLOUD", localName: "CLOUD" }]), wg = o.makeEnum("agent.v1.SubagentBackgroundReason", [{ no: 0, name: "SUBAGENT_BACKGROUND_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUBAGENT_BACKGROUND_REASON_AGENT_REQUEST", localName: "AGENT_REQUEST" }, { no: 2, name: "SUBAGENT_BACKGROUND_REASON_USER_REQUEST", localName: "USER_REQUEST" }, { no: 3, name: "SUBAGENT_BACKGROUND_REASON_QUEUED_FOLLOW_UP", localName: "QUEUED_FOLLOW_UP" }]), bg = o.makeEnum("agent.v1.TaskMode", [{ no: 0, name: "TASK_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TASK_MODE_AGENT", localName: "AGENT" }, { no: 2, name: "TASK_MODE_PLAN", localName: "PLAN" }]), Ig = o.makeMessageType("agent.v1.SubagentType", () => [{ no: 1, name: "unspecified", kind: "message", T: Ng, oneof: "type" }, { no: 2, name: "computer_use", kind: "message", T: Dg, oneof: "type" }, { no: 3, name: "custom", kind: "message", T: Gg, oneof: "type" }, { no: 4, name: "explore", kind: "message", T: Og, oneof: "type" }, { no: 5, name: "media_review", kind: "message", T: Mg, oneof: "type" }, { no: 6, name: "bash", kind: "message", T: Lg, oneof: "type" }, { no: 7, name: "browser_use", kind: "message", T: Ug, oneof: "type" }, { no: 8, name: "shell", kind: "message", T: xg, oneof: "type" }, { no: 9, name: "vm_setup_helper", kind: "message", T: Pg, oneof: "type" }, { no: 10, name: "debug", kind: "message", T: Cg, oneof: "type" }, { no: 11, name: "cursor_guide", kind: "message", T: Fg, oneof: "type" }, { no: 12, name: "watch_video", kind: "message", T: Bg, oneof: "type" }]), Ng = o.makeMessageType("agent.v1.SubagentTypeUnspecified", []), Dg = o.makeMessageType("agent.v1.SubagentTypeComputerUse", []), Og = o.makeMessageType("agent.v1.SubagentTypeExplore", []), Mg = o.makeMessageType("agent.v1.SubagentTypeMediaReview", []), Lg = o.makeMessageType("agent.v1.SubagentTypeBash", []), xg = o.makeMessageType("agent.v1.SubagentTypeShell", []), Ug = o.makeMessageType("agent.v1.SubagentTypeBrowserUse", []), Pg = o.makeMessageType("agent.v1.SubagentTypeVmSetupHelper", []), Cg = o.makeMessageType("agent.v1.SubagentTypeDebug", []), Fg = o.makeMessageType("agent.v1.SubagentTypeCursorGuide", []), Bg = o.makeMessageType("agent.v1.SubagentTypeWatchVideo", []), Gg = o.makeMessageType("agent.v1.SubagentTypeCustom", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }]), qg = o.makeMessageType("agent.v1.NetworkPolicyLoggingConfig", () => [{ no: 1, name: "decision_log_path", kind: "scalar", T: 9, opt: true }, { no: 2, name: "log_format", kind: "scalar", T: 9, opt: true }]), Wg = o.makeMessageType("agent.v1.NetworkPolicy", () => [{ no: 1, name: "version", kind: "scalar", T: 13, opt: true }, { no: 2, name: "default_action", kind: "enum", T: o.getEnumType($g), opt: true }, { no: 3, name: "deny", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "allow", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "logging", kind: "message", T: qg, opt: true }]), $g = o.makeEnum("agent.v1.NetworkPolicy.DefaultAction", [{ no: 0, name: "DEFAULT_ACTION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DEFAULT_ACTION_ALLOW", localName: "ALLOW" }, { no: 2, name: "DEFAULT_ACTION_DENY", localName: "DENY" }]), Jr = o.makeMessageType("agent.v1.SandboxPolicy", () => [{ no: 1, name: "type", kind: "enum", T: o.getEnumType(Jg) }, { no: 2, name: "network_access", kind: "scalar", T: 8, opt: true }, { no: 3, name: "additional_readwrite_paths", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "additional_readonly_paths", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "debug_output_dir", kind: "scalar", T: 9, opt: true }, { no: 7, name: "disable_tmp_write", kind: "scalar", T: 8, opt: true }, { no: 8, name: "allowlist_escalated", kind: "scalar", T: 8, opt: true }, { no: 9, name: "enable_shared_build_cache", kind: "scalar", T: 8, opt: true }, { no: 10, name: "network_policy", kind: "message", T: Wg, opt: true }, { no: 11, name: "network_policy_strict", kind: "scalar", T: 8, opt: true }, { no: 12, name: "capture_denies", kind: "scalar", T: 8, opt: true }, { no: 13, name: "skip_statsig_defaults", kind: "scalar", T: 8, opt: true }, { no: 14, name: "read_boundary", kind: "enum", T: o.getEnumType(Hg) }, { no: 15, name: "additional_read_paths", kind: "scalar", T: 9, repeated: true }]), Jg = o.makeEnum("agent.v1.SandboxPolicy.Type", [{ no: 0, name: "TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TYPE_INSECURE_NONE", localName: "INSECURE_NONE" }, { no: 2, name: "TYPE_WORKSPACE_READWRITE", localName: "WORKSPACE_READWRITE" }, { no: 3, name: "TYPE_WORKSPACE_READONLY", localName: "WORKSPACE_READONLY" }]), Hg = o.makeEnum("agent.v1.SandboxPolicy.ReadBoundaryMode", [{ no: 0, name: "READ_BOUNDARY_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "READ_BOUNDARY_MODE_SYSTEM", localName: "SYSTEM" }, { no: 2, name: "READ_BOUNDARY_MODE_WORKSPACE", localName: "WORKSPACE" }]), vc = o.makeMessageType("agent.v1.Position", () => [{ no: 1, name: "line", kind: "scalar", T: 13 }, { no: 2, name: "column", kind: "scalar", T: 13 }]), ft = o.makeMessageType("agent.v1.OutputLocation", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "size_bytes", kind: "scalar", T: 3 }, { no: 3, name: "line_count", kind: "scalar", T: 3 }]), wi = o.makeMessageType("agent.v1.SmartModeApproval", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), Vg = o.makeMessageType("agent.v1.HookAdditionalContext", () => [{ no: 1, name: "hook_event_name", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }]), Yg = o.makeEnum("agent.v1.TimeoutBehavior", [{ no: 0, name: "TIMEOUT_BEHAVIOR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TIMEOUT_BEHAVIOR_CANCEL", localName: "CANCEL" }, { no: 2, name: "TIMEOUT_BEHAVIOR_BACKGROUND", localName: "BACKGROUND" }]), Kg = o.makeEnum("agent.v1.ShellBackgroundReason", [{ no: 0, name: "SHELL_BACKGROUND_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SHELL_BACKGROUND_REASON_TIMEOUT", localName: "TIMEOUT" }, { no: 2, name: "SHELL_BACKGROUND_REASON_USER_REQUEST", localName: "USER_REQUEST" }]), zg = o.makeEnum("agent.v1.ShellAbortReason", [{ no: 0, name: "SHELL_ABORT_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SHELL_ABORT_REASON_USER_ABORT", localName: "USER_ABORT" }, { no: 2, name: "SHELL_ABORT_REASON_TIMEOUT", localName: "TIMEOUT" }]), Xg = o.makeMessageType("agent.v1.ShellCommandParsingResult", () => [{ no: 1, name: "parsing_failed", kind: "scalar", T: 8 }, { no: 2, name: "executable_commands", kind: "message", T: Qg, repeated: true }, { no: 3, name: "has_redirects", kind: "scalar", T: 8 }, { no: 4, name: "has_command_substitution", kind: "scalar", T: 8 }, { no: 5, name: "all_redirects_are_dev_null", kind: "scalar", T: 8, opt: true }, { no: 6, name: "redirects", kind: "message", T: Zg, repeated: true }]), jg = o.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommandArg", () => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "ShellCommandParsingResult_ExecutableCommandArg" }), Qg = o.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommand", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "message", T: jg, repeated: true }, { no: 3, name: "full_text", kind: "scalar", T: 9 }], { localName: "ShellCommandParsingResult_ExecutableCommand" }), Zg = o.makeMessageType("agent.v1.ShellCommandParsingResult.Redirect", () => [{ no: 1, name: "operator", kind: "scalar", T: 9 }, { no: 2, name: "destination_fds", kind: "scalar", T: 13, repeated: true }, { no: 3, name: "target_node_type", kind: "scalar", T: 9 }, { no: 4, name: "target_text", kind: "scalar", T: 9, opt: true }], { localName: "ShellCommandParsingResult_Redirect" }), ef = o.makeMessageType("agent.v1.CommandClassifierResult", () => [{ no: 1, name: "commands", kind: "message", T: nf, repeated: true }, { no: 2, name: "suggested_sandbox_mode", kind: "enum", T: o.getEnumType(tf) }, { no: 3, name: "classification_failed", kind: "scalar", T: 8 }]), tf = o.makeEnum("agent.v1.CommandClassifierResult.SuggestedSandboxMode", [{ no: 0, name: "SUGGESTED_SANDBOX_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUGGESTED_SANDBOX_MODE_SANDBOX", localName: "SANDBOX" }, { no: 2, name: "SUGGESTED_SANDBOX_MODE_NO_SANDBOX", localName: "NO_SANDBOX" }, { no: 3, name: "SUGGESTED_SANDBOX_MODE_UNDETERMINED", localName: "UNDETERMINED" }]), nf = o.makeMessageType("agent.v1.CommandClassifierResult.ClassifiedCommand", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "arguments", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "suggested_allowlist_entry", kind: "scalar", T: 9, opt: true }, { no: 4, name: "subcommand_tokens", kind: "scalar", T: 9, repeated: true }], { localName: "CommandClassifierResult_ClassifiedCommand" }), sf = o.makeMessageType("agent.v1.ShellOutputNotificationConfig", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }, { no: 3, name: "debounce", kind: "scalar", T: 1, opt: true }, { no: 4, name: "notification_limit", kind: "scalar", T: 5, opt: true }]), rf = o.makeMessageType("agent.v1.ShellHookApprovalRequirement", () => [{ no: 1, name: "kind", kind: "enum", T: o.getEnumType(af) }, { no: 2, name: "reason", kind: "scalar", T: 9, opt: true }]), af = o.makeEnum("agent.v1.ShellHookApprovalRequirement.Kind", [{ no: 0, name: "KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KIND_FORCE_PROMPT", localName: "FORCE_PROMPT" }]), of = o.makeMessageType("agent.v1.ShellArgs", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "timeout", kind: "scalar", T: 5 }, { no: 4, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 5, name: "simple_commands", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "has_input_redirect", kind: "scalar", T: 8 }, { no: 7, name: "has_output_redirect", kind: "scalar", T: 8 }, { no: 8, name: "parsing_result", kind: "message", T: Xg }, { no: 9, name: "requested_sandbox_policy", kind: "message", T: Jr, opt: true }, { no: 10, name: "file_output_threshold_bytes", kind: "scalar", T: 4, opt: true }, { no: 11, name: "is_background", kind: "scalar", T: 8 }, { no: 12, name: "skip_approval", kind: "scalar", T: 8 }, { no: 13, name: "timeout_behavior", kind: "enum", T: o.getEnumType(Yg) }, { no: 14, name: "hard_timeout", kind: "scalar", T: 5, opt: true }, { no: 15, name: "description", kind: "scalar", T: 9, opt: true }, { no: 16, name: "classifier_result", kind: "message", T: ef, opt: true }, { no: 17, name: "close_stdin", kind: "scalar", T: 8 }, { no: 18, name: "output_notification", kind: "message", T: sf, opt: true }, { no: 19, name: "smart_mode_approval", kind: "message", T: wi, opt: true }, { no: 20, name: "hook_approval_requirement", kind: "message", T: rf, opt: true }, { no: 21, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 22, name: "admin_command_denylist", kind: "scalar", T: 9, repeated: true }, { no: 23, name: "request_id", kind: "scalar", T: 9, opt: true }, { no: 24, name: "secret_scope_id", kind: "scalar", T: 9, opt: true }]), lf = o.makeMessageType("agent.v1.ShellResult", () => [{ no: 1, name: "success", kind: "message", T: df, oneof: "result" }, { no: 2, name: "failure", kind: "message", T: mf, oneof: "result" }, { no: 3, name: "timeout", kind: "message", T: hf, oneof: "result" }, { no: 4, name: "rejected", kind: "message", T: gf, oneof: "result" }, { no: 5, name: "spawn_error", kind: "message", T: pf, oneof: "result" }, { no: 7, name: "permission_denied", kind: "message", T: ff, oneof: "result" }, { no: 101, name: "sandbox_policy", kind: "message", T: Jr, opt: true }, { no: 102, name: "is_background", kind: "scalar", T: 8, opt: true }, { no: 103, name: "terminals_folder", kind: "scalar", T: 9, opt: true }, { no: 104, name: "pid", kind: "scalar", T: 13, opt: true }]), cf = o.makeMessageType("agent.v1.ShellOomKill", () => [{ no: 1, name: "kind", kind: "enum", T: o.getEnumType(uf) }, { no: 2, name: "memory_limit_bytes", kind: "scalar", T: 4 }]), uf = o.makeEnum("agent.v1.ShellOomKill.Kind", [{ no: 0, name: "KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KIND_COMMAND_KILLED", localName: "COMMAND_KILLED" }, { no: 2, name: "KIND_COMMAND_FAILED", localName: "COMMAND_FAILED" }, { no: 3, name: "KIND_UNCONFIRMED", localName: "UNCONFIRMED" }]), df = o.makeMessageType("agent.v1.ShellSuccess", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "exit_code", kind: "scalar", T: 5 }, { no: 4, name: "signal", kind: "scalar", T: 9 }, { no: 5, name: "stdout", kind: "scalar", T: 9 }, { no: 6, name: "stderr", kind: "scalar", T: 9 }, { no: 7, name: "execution_time", kind: "scalar", T: 5 }, { no: 8, name: "output_location", kind: "message", T: ft, opt: true }, { no: 9, name: "shell_id", kind: "scalar", T: 13, opt: true }, { no: 10, name: "interleaved_output", kind: "scalar", T: 9, opt: true }, { no: 11, name: "pid", kind: "scalar", T: 13, opt: true }, { no: 12, name: "ms_to_wait", kind: "scalar", T: 5, opt: true }, { no: 13, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true }, { no: 14, name: "background_reason", kind: "enum", T: o.getEnumType(Kg), opt: true }, { no: 15, name: "output_head", kind: "scalar", T: 9, opt: true }, { no: 16, name: "output_tail", kind: "scalar", T: 9, opt: true }, { no: 17, name: "elided_chars", kind: "scalar", T: 13, opt: true }]), mf = o.makeMessageType("agent.v1.ShellFailure", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "exit_code", kind: "scalar", T: 5 }, { no: 4, name: "signal", kind: "scalar", T: 9 }, { no: 5, name: "stdout", kind: "scalar", T: 9 }, { no: 6, name: "stderr", kind: "scalar", T: 9 }, { no: 7, name: "execution_time", kind: "scalar", T: 5 }, { no: 8, name: "output_location", kind: "message", T: ft, opt: true }, { no: 9, name: "interleaved_output", kind: "scalar", T: 9, opt: true }, { no: 10, name: "abort_reason", kind: "enum", T: o.getEnumType(zg), opt: true }, { no: 11, name: "aborted", kind: "scalar", T: 8 }, { no: 12, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true }, { no: 13, name: "output_head", kind: "scalar", T: 9, opt: true }, { no: 14, name: "output_tail", kind: "scalar", T: 9, opt: true }, { no: 15, name: "elided_chars", kind: "scalar", T: 13, opt: true }, { no: 16, name: "oom_kill", kind: "message", T: cf, opt: true }]), hf = o.makeMessageType("agent.v1.ShellTimeout", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "timeout_ms", kind: "scalar", T: 5 }]), gf = o.makeMessageType("agent.v1.ShellRejected", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "reason", kind: "scalar", T: 9 }, { no: 4, name: "is_readonly", kind: "scalar", T: 8 }]), ff = o.makeMessageType("agent.v1.ShellPermissionDenied", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "error", kind: "scalar", T: 9 }, { no: 4, name: "is_readonly", kind: "scalar", T: 8 }]), pf = o.makeMessageType("agent.v1.ShellSpawnError", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "error", kind: "scalar", T: 9 }]), Tf = o.makeMessageType("agent.v1.ShellToolCall", () => [{ no: 1, name: "args", kind: "message", T: of }, { no: 2, name: "result", kind: "message", T: lf }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }]), _f = o.makeMessageType("agent.v1.DeleteArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), kf = o.makeMessageType("agent.v1.DeleteResult", () => [{ no: 1, name: "success", kind: "message", T: vf, oneof: "result" }, { no: 2, name: "file_not_found", kind: "message", T: Ef, oneof: "result" }, { no: 3, name: "not_file", kind: "message", T: yf, oneof: "result" }, { no: 4, name: "permission_denied", kind: "message", T: Sf, oneof: "result" }, { no: 5, name: "file_busy", kind: "message", T: Rf, oneof: "result" }, { no: 6, name: "rejected", kind: "message", T: Af, oneof: "result" }, { no: 7, name: "error", kind: "message", T: wf, oneof: "result" }]), vf = o.makeMessageType("agent.v1.DeleteSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "deleted_file", kind: "scalar", T: 9 }, { no: 3, name: "file_size", kind: "scalar", T: 3 }, { no: 4, name: "prev_content", kind: "scalar", T: 9 }]), Ef = o.makeMessageType("agent.v1.DeleteFileNotFound", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), yf = o.makeMessageType("agent.v1.DeleteNotFile", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "actual_type", kind: "scalar", T: 9 }]), Sf = o.makeMessageType("agent.v1.DeletePermissionDenied", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "client_visible_error", kind: "scalar", T: 9 }, { no: 3, name: "is_readonly", kind: "scalar", T: 8 }]), Rf = o.makeMessageType("agent.v1.DeleteFileBusy", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), Af = o.makeMessageType("agent.v1.DeleteRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), wf = o.makeMessageType("agent.v1.DeleteError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), bf = o.makeMessageType("agent.v1.DeleteToolCall", () => [{ no: 1, name: "args", kind: "message", T: _f }, { no: 2, name: "result", kind: "message", T: kf }]), If = o.makeMessageType("agent.v1.GlobToolArgs", () => [{ no: 1, name: "target_directory", kind: "scalar", T: 9, opt: true }, { no: 2, name: "glob_pattern", kind: "scalar", T: 9 }]), Nf = o.makeMessageType("agent.v1.GlobToolResult", () => [{ no: 1, name: "success", kind: "message", T: Of, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Df, oneof: "result" }]), Df = o.makeMessageType("agent.v1.GlobToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), Of = o.makeMessageType("agent.v1.GlobToolSuccess", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "files", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "total_files", kind: "scalar", T: 5 }, { no: 5, name: "client_truncated", kind: "scalar", T: 8 }, { no: 6, name: "ripgrep_truncated", kind: "scalar", T: 8 }]), Mf = o.makeMessageType("agent.v1.GlobToolCall", () => [{ no: 1, name: "args", kind: "message", T: If }, { no: 2, name: "result", kind: "message", T: Nf }]), Lf = o.makeMessageType("agent.v1.GrepArgs", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "glob", kind: "scalar", T: 9, opt: true }, { no: 4, name: "output_mode", kind: "scalar", T: 9, opt: true }, { no: 5, name: "context_before", kind: "scalar", T: 5, opt: true }, { no: 6, name: "context_after", kind: "scalar", T: 5, opt: true }, { no: 7, name: "context", kind: "scalar", T: 5, opt: true }, { no: 8, name: "case_insensitive", kind: "scalar", T: 8, opt: true }, { no: 9, name: "type", kind: "scalar", T: 9, opt: true }, { no: 10, name: "head_limit", kind: "scalar", T: 5, opt: true }, { no: 11, name: "multiline", kind: "scalar", T: 8, opt: true }, { no: 12, name: "sort", kind: "scalar", T: 9, opt: true }, { no: 13, name: "sort_ascending", kind: "scalar", T: 8, opt: true }, { no: 14, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 15, name: "sandbox_policy", kind: "message", T: Jr, opt: true }, { no: 16, name: "offset", kind: "scalar", T: 5, opt: true }]), xf = o.makeMessageType("agent.v1.GrepResult", () => [{ no: 1, name: "success", kind: "message", T: Pf, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Uf, oneof: "result" }]), Uf = o.makeMessageType("agent.v1.GrepError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), Pf = o.makeMessageType("agent.v1.GrepSuccess", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "output_mode", kind: "scalar", T: 9 }, { no: 4, name: "workspace_results", kind: "map", K: 9, V: { kind: "message", T: Ec } }, { no: 5, name: "active_editor_result", kind: "message", T: Ec, opt: true }]), Ec = o.makeMessageType("agent.v1.GrepUnionResult", () => [{ no: 1, name: "count", kind: "message", T: Cf, oneof: "result" }, { no: 2, name: "files", kind: "message", T: Bf, oneof: "result" }, { no: 3, name: "content", kind: "message", T: Gf, oneof: "result" }]), Cf = o.makeMessageType("agent.v1.GrepCountResult", () => [{ no: 1, name: "counts", kind: "message", T: Ff, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "total_matches", kind: "scalar", T: 5 }, { no: 4, name: "client_truncated", kind: "scalar", T: 8 }, { no: 5, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), Ff = o.makeMessageType("agent.v1.GrepFileCount", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "count", kind: "scalar", T: 5 }]), Bf = o.makeMessageType("agent.v1.GrepFilesResult", () => [{ no: 1, name: "files", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "client_truncated", kind: "scalar", T: 8 }, { no: 4, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 5, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 6, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), Gf = o.makeMessageType("agent.v1.GrepContentResult", () => [{ no: 1, name: "matches", kind: "message", T: qf, repeated: true }, { no: 2, name: "total_lines", kind: "scalar", T: 5 }, { no: 3, name: "total_matched_lines", kind: "scalar", T: 5 }, { no: 4, name: "client_truncated", kind: "scalar", T: 8 }, { no: 5, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), qf = o.makeMessageType("agent.v1.GrepFileMatch", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "matches", kind: "message", T: Wf, repeated: true }]), Wf = o.makeMessageType("agent.v1.GrepContentMatch", () => [{ no: 1, name: "line_number", kind: "scalar", T: 5 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "content_truncated", kind: "scalar", T: 8 }, { no: 4, name: "is_context_line", kind: "scalar", T: 8 }]), $f = o.makeMessageType("agent.v1.GrepToolCall", () => [{ no: 1, name: "args", kind: "message", T: Lf }, { no: 2, name: "result", kind: "message", T: xf }]), Jf = o.makeEnum("agent.v1.CursorRuleSource", [{ no: 0, name: "CURSOR_RULE_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CURSOR_RULE_SOURCE_TEAM", localName: "TEAM" }, { no: 2, name: "CURSOR_RULE_SOURCE_USER", localName: "USER" }]), Hf = o.makeMessageType("agent.v1.CursorRuleTypeGlobal", []), Vf = o.makeMessageType("agent.v1.CursorRuleTypeFileGlobs", () => [{ no: 1, name: "globs", kind: "scalar", T: 9, repeated: true }]), Yf = o.makeMessageType("agent.v1.CursorRuleTypeAgentFetched", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }]), Kf = o.makeMessageType("agent.v1.CursorRuleTypeManuallyAttached", []), zf = o.makeMessageType("agent.v1.CursorRuleType", () => [{ no: 1, name: "global", kind: "message", T: Hf, oneof: "type" }, { no: 2, name: "file_globbed", kind: "message", T: Vf, oneof: "type" }, { no: 3, name: "agent_fetched", kind: "message", T: Yf, oneof: "type" }, { no: 4, name: "manually_attached", kind: "message", T: Kf, oneof: "type" }]), Xf = o.makeMessageType("agent.v1.CursorRule", () => [{ no: 1, name: "full_path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "type", kind: "message", T: zf }, { no: 4, name: "source", kind: "enum", T: o.getEnumType(Jf) }, { no: 5, name: "git_remote_origin", kind: "scalar", T: 9, opt: true }, { no: 6, name: "parse_error", kind: "scalar", T: 9, opt: true }, { no: 7, name: "environments", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "disabled_environments", kind: "scalar", T: 9, repeated: true }, { no: 9, name: "plugin", kind: "scalar", T: 9, opt: true }, { no: 10, name: "marketplace", kind: "scalar", T: 9, opt: true }, { no: 11, name: "plugin_id", kind: "scalar", T: 9, opt: true }, { no: 12, name: "marketplace_id", kind: "scalar", T: 9, opt: true }, { no: 13, name: "scoped_to", kind: "scalar", T: 9, repeated: true }, { no: 14, name: "frontmatter", kind: "scalar", T: 9 }, { no: 15, name: "is_required", kind: "scalar", T: 8, opt: true }]), jf = o.makeMessageType("agent.v1.ReadToolCall", () => [{ no: 1, name: "args", kind: "message", T: Qf }, { no: 2, name: "result", kind: "message", T: Zf }]), Qf = o.makeMessageType("agent.v1.ReadToolArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "offset", kind: "scalar", T: 5, opt: true }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }, { no: 5, name: "include_line_numbers", kind: "scalar", T: 8, opt: true }]), Zf = o.makeMessageType("agent.v1.ReadToolResult", () => [{ no: 1, name: "success", kind: "message", T: tp, oneof: "result" }, { no: 2, name: "error", kind: "message", T: np, oneof: "result" }]), ep = o.makeMessageType("agent.v1.ReadRange", () => [{ no: 1, name: "start_line", kind: "scalar", T: 13 }, { no: 2, name: "end_line", kind: "scalar", T: 13 }]), tp = o.makeMessageType("agent.v1.ReadToolSuccess", () => [{ no: 1, name: "content", kind: "scalar", T: 9, oneof: "output" }, { no: 6, name: "data", kind: "scalar", T: 12, oneof: "output" }, { no: 9, name: "data_blob_id", kind: "scalar", T: 12, oneof: "output" }, { no: 10, name: "content_blob_id", kind: "scalar", T: 12, oneof: "output" }, { no: 2, name: "is_empty", kind: "scalar", T: 8 }, { no: 3, name: "exceeded_limit", kind: "scalar", T: 8 }, { no: 4, name: "total_lines", kind: "scalar", T: 13 }, { no: 5, name: "file_size", kind: "scalar", T: 13 }, { no: 7, name: "path", kind: "scalar", T: 9 }, { no: 8, name: "read_range", kind: "message", T: ep, opt: true }, { no: 11, name: "include_line_numbers", kind: "scalar", T: 8, opt: true }, { no: 12, name: "related_cursor_rule_paths", kind: "scalar", T: 9, repeated: true }, { no: 13, name: "related_cursor_rules", kind: "message", T: Xf, repeated: true }]), np = o.makeMessageType("agent.v1.ReadToolError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), yc = o.makeEnum("agent.v1.TodoStatus", [{ no: 0, name: "TODO_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TODO_STATUS_PENDING", localName: "PENDING" }, { no: 2, name: "TODO_STATUS_IN_PROGRESS", localName: "IN_PROGRESS" }, { no: 3, name: "TODO_STATUS_COMPLETED", localName: "COMPLETED" }, { no: 4, name: "TODO_STATUS_CANCELLED", localName: "CANCELLED" }]), tn = o.makeMessageType("agent.v1.TodoItem", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "status", kind: "enum", T: o.getEnumType(yc) }, { no: 4, name: "created_at", kind: "scalar", T: 3 }, { no: 5, name: "updated_at", kind: "scalar", T: 3 }, { no: 6, name: "dependencies", kind: "scalar", T: 9, repeated: true }]), sp = o.makeMessageType("agent.v1.UpdateTodosToolCall", () => [{ no: 1, name: "args", kind: "message", T: rp }, { no: 2, name: "result", kind: "message", T: ap }]), rp = o.makeMessageType("agent.v1.UpdateTodosArgs", () => [{ no: 1, name: "todos", kind: "message", T: tn, repeated: true }, { no: 2, name: "merge", kind: "scalar", T: 8 }]), ap = o.makeMessageType("agent.v1.UpdateTodosResult", () => [{ no: 1, name: "success", kind: "message", T: ip, oneof: "result" }, { no: 2, name: "error", kind: "message", T: op, oneof: "result" }]), ip = o.makeMessageType("agent.v1.UpdateTodosSuccess", () => [{ no: 1, name: "todos", kind: "message", T: tn, repeated: true }, { no: 2, name: "total_count", kind: "scalar", T: 5 }, { no: 3, name: "was_merge", kind: "scalar", T: 8 }]), op = o.makeMessageType("agent.v1.UpdateTodosError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), lp = o.makeMessageType("agent.v1.ReadTodosToolCall", () => [{ no: 1, name: "args", kind: "message", T: cp }, { no: 2, name: "result", kind: "message", T: up }]), cp = o.makeMessageType("agent.v1.ReadTodosArgs", () => [{ no: 1, name: "status_filter", kind: "enum", T: o.getEnumType(yc), repeated: true }, { no: 2, name: "id_filter", kind: "scalar", T: 9, repeated: true }]), up = o.makeMessageType("agent.v1.ReadTodosResult", () => [{ no: 1, name: "success", kind: "message", T: dp, oneof: "result" }, { no: 2, name: "error", kind: "message", T: mp, oneof: "result" }]), dp = o.makeMessageType("agent.v1.ReadTodosSuccess", () => [{ no: 1, name: "todos", kind: "message", T: tn, repeated: true }, { no: 2, name: "total_count", kind: "scalar", T: 5 }]), mp = o.makeMessageType("agent.v1.ReadTodosError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), hp = o.makeMessageType("agent.v1.EditArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 6, name: "stream_content", kind: "scalar", T: 9, opt: true }]), gp = o.makeMessageType("agent.v1.EditResult", () => [{ no: 1, name: "success", kind: "message", T: fp, oneof: "result" }, { no: 2, name: "file_not_found", kind: "message", T: pp, oneof: "result" }, { no: 3, name: "read_permission_denied", kind: "message", T: Tp, oneof: "result" }, { no: 4, name: "write_permission_denied", kind: "message", T: _p, oneof: "result" }, { no: 6, name: "rejected", kind: "message", T: kp, oneof: "result" }, { no: 7, name: "error", kind: "message", T: vp, oneof: "result" }]), fp = o.makeMessageType("agent.v1.EditSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "lines_added", kind: "scalar", T: 5, opt: true }, { no: 4, name: "lines_removed", kind: "scalar", T: 5, opt: true }, { no: 5, name: "diff_string", kind: "scalar", T: 9, opt: true }, { no: 6, name: "before_full_file_content", kind: "scalar", T: 9, opt: true }, { no: 7, name: "after_full_file_content", kind: "scalar", T: 9 }, { no: 8, name: "message", kind: "scalar", T: 9, opt: true }]), pp = o.makeMessageType("agent.v1.EditFileNotFound", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), Tp = o.makeMessageType("agent.v1.EditReadPermissionDenied", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), _p = o.makeMessageType("agent.v1.EditWritePermissionDenied", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }, { no: 3, name: "is_readonly", kind: "scalar", T: 8 }]), kp = o.makeMessageType("agent.v1.EditRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), vp = o.makeMessageType("agent.v1.EditError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }, { no: 5, name: "model_visible_error", kind: "scalar", T: 9, opt: true }]), Ep = o.makeMessageType("agent.v1.EditToolCall", () => [{ no: 1, name: "args", kind: "message", T: hp }, { no: 2, name: "result", kind: "message", T: gp }]), yp = o.makeMessageType("agent.v1.LsArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "ignore", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 4, name: "sandbox_policy", kind: "message", T: Jr, opt: true }, { no: 5, name: "timeout_ms", kind: "scalar", T: 13, opt: true }]), Sp = o.makeMessageType("agent.v1.LsResult", () => [{ no: 1, name: "success", kind: "message", T: Rp, oneof: "result" }, { no: 2, name: "error", kind: "message", T: wp, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: bp, oneof: "result" }, { no: 4, name: "timeout", kind: "message", T: Ip, oneof: "result" }]), Rp = o.makeMessageType("agent.v1.LsSuccess", () => [{ no: 1, name: "directory_tree_root", kind: "message", T: bi }]), bi = o.makeMessageType("agent.v1.LsDirectoryTreeNode", () => [{ no: 1, name: "abs_path", kind: "scalar", T: 9 }, { no: 2, name: "children_dirs", kind: "message", T: bi, repeated: true }, { no: 3, name: "children_files", kind: "message", T: Ap, repeated: true }, { no: 4, name: "children_were_processed", kind: "scalar", T: 8 }, { no: 5, name: "full_subtree_extension_counts", kind: "map", K: 9, V: { kind: "scalar", T: 5 } }, { no: 6, name: "num_files", kind: "scalar", T: 5 }]), Ap = o.makeMessageType("agent.v1.LsDirectoryTreeNode.File", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "terminal_metadata", kind: "message", T: Np, opt: true }], { localName: "LsDirectoryTreeNode_File" }), wp = o.makeMessageType("agent.v1.LsError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), bp = o.makeMessageType("agent.v1.LsRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), Ip = o.makeMessageType("agent.v1.LsTimeout", () => [{ no: 1, name: "directory_tree_root", kind: "message", T: bi }]), Np = o.makeMessageType("agent.v1.TerminalMetadata", () => [{ no: 1, name: "cwd", kind: "scalar", T: 9, opt: true }, { no: 2, name: "last_commands", kind: "message", T: Sc, repeated: true }, { no: 3, name: "last_modified_ms", kind: "scalar", T: 3, opt: true }, { no: 4, name: "current_command", kind: "message", T: Sc, opt: true }]), Sc = o.makeMessageType("agent.v1.TerminalMetadata.Command", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "exit_code", kind: "scalar", T: 5, opt: true }, { no: 3, name: "timestamp_ms", kind: "scalar", T: 3, opt: true }, { no: 4, name: "duration_ms", kind: "scalar", T: 3, opt: true }], { localName: "TerminalMetadata_Command" }), Dp = o.makeMessageType("agent.v1.LsToolCall", () => [{ no: 1, name: "args", kind: "message", T: yp }, { no: 2, name: "result", kind: "message", T: Sp }]), Op = o.makeEnum("agent.v1.DiagnosticSeverity", [{ no: 0, name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DIAGNOSTIC_SEVERITY_ERROR", localName: "ERROR" }, { no: 2, name: "DIAGNOSTIC_SEVERITY_WARNING", localName: "WARNING" }, { no: 3, name: "DIAGNOSTIC_SEVERITY_INFORMATION", localName: "INFORMATION" }, { no: 4, name: "DIAGNOSTIC_SEVERITY_HINT", localName: "HINT" }]), Mp = o.makeMessageType("agent.v1.ReadLintsToolCall", () => [{ no: 1, name: "args", kind: "message", T: Lp }, { no: 2, name: "result", kind: "message", T: xp }]), Lp = o.makeMessageType("agent.v1.ReadLintsToolArgs", () => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]), xp = o.makeMessageType("agent.v1.ReadLintsToolResult", () => [{ no: 1, name: "success", kind: "message", T: Up, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Bp, oneof: "result" }]), Up = o.makeMessageType("agent.v1.ReadLintsToolSuccess", () => [{ no: 1, name: "file_diagnostics", kind: "message", T: Pp, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "total_diagnostics", kind: "scalar", T: 5 }]), Pp = o.makeMessageType("agent.v1.FileDiagnostics", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "diagnostics", kind: "message", T: Cp, repeated: true }, { no: 3, name: "diagnostics_count", kind: "scalar", T: 5 }]), Cp = o.makeMessageType("agent.v1.DiagnosticItem", () => [{ no: 1, name: "severity", kind: "enum", T: o.getEnumType(Op) }, { no: 2, name: "range", kind: "message", T: Fp }, { no: 3, name: "message", kind: "scalar", T: 9 }, { no: 4, name: "source", kind: "scalar", T: 9 }, { no: 5, name: "code", kind: "scalar", T: 9 }, { no: 6, name: "is_stale", kind: "scalar", T: 8 }]), Fp = o.makeMessageType("agent.v1.DiagnosticRange", () => [{ no: 1, name: "start", kind: "message", T: vc }, { no: 2, name: "end", kind: "message", T: vc }]), Bp = o.makeMessageType("agent.v1.ReadLintsToolError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), Gp = o.makeMessageType("agent.v1.McpArgs", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "map", K: 9, V: { kind: "message", T: Ht } }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 4, name: "provider_identifier", kind: "scalar", T: 9 }, { no: 5, name: "tool_name", kind: "scalar", T: 9 }, { no: 6, name: "smart_mode_approval", kind: "message", T: wi, opt: true }, { no: 7, name: "smart_mode_approval_only", kind: "scalar", T: 8 }, { no: 8, name: "skip_approval", kind: "scalar", T: 8 }, { no: 9, name: "server_identifier", kind: "scalar", T: 9 }, { no: 10, name: "symbolic_path_arguments", kind: "message", T: qp, repeated: true }]), qp = o.makeMessageType("agent.v1.McpSymbolicPathArgument", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "sha256", kind: "scalar", T: 9 }, { no: 3, name: "size_bytes", kind: "scalar", T: 3 }]), Wp = o.makeMessageType("agent.v1.McpTextContent", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "output_location", kind: "message", T: ft, opt: true }]), $p = o.makeMessageType("agent.v1.McpImageContent", () => [{ no: 1, name: "data", kind: "scalar", T: 12 }, { no: 2, name: "mime_type", kind: "scalar", T: 9 }]), Jp = o.makeMessageType("agent.v1.McpToolResultContentItem", () => [{ no: 1, name: "text", kind: "message", T: Wp, oneof: "content" }, { no: 2, name: "image", kind: "message", T: $p, oneof: "content" }]), Rc = o.makeMessageType("agent.v1.SystemReminder", () => [{ no: 1, name: "body", kind: "scalar", T: 9 }]), Hp = o.makeMessageType("agent.v1.McpSuccess", () => [{ no: 1, name: "content", kind: "message", T: Jp, repeated: true }, { no: 2, name: "is_error", kind: "scalar", T: 8 }, { no: 3, name: "structured_content", kind: "message", T: Ti }, { no: 4, name: "system_reminders", kind: "message", T: Rc, repeated: true }]), Vp = o.makeMessageType("agent.v1.McpRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }, { no: 2, name: "is_readonly", kind: "scalar", T: 8 }]), Yp = o.makeMessageType("agent.v1.McpPermissionDenied", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "is_readonly", kind: "scalar", T: 8 }]), Kp = o.makeMessageType("agent.v1.ListMcpResourcesExecArgs", () => [{ no: 1, name: "server", kind: "scalar", T: 9, opt: true }]), zp = o.makeMessageType("agent.v1.ListMcpResourcesExecResult", () => [{ no: 1, name: "success", kind: "message", T: jp, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Qp, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: Zp, oneof: "result" }]), Xp = o.makeMessageType("agent.v1.ListMcpResourcesExecResult.McpResource", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "server", kind: "scalar", T: 9 }, { no: 6, name: "annotations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }], { localName: "ListMcpResourcesExecResult_McpResource" }), jp = o.makeMessageType("agent.v1.ListMcpResourcesSuccess", () => [{ no: 1, name: "resources", kind: "message", T: Xp, repeated: true }]), Qp = o.makeMessageType("agent.v1.ListMcpResourcesError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), Zp = o.makeMessageType("agent.v1.ListMcpResourcesRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), e0 = o.makeMessageType("agent.v1.ReadMcpResourceExecArgs", () => [{ no: 1, name: "server", kind: "scalar", T: 9 }, { no: 2, name: "uri", kind: "scalar", T: 9 }, { no: 3, name: "download_path", kind: "scalar", T: 9, opt: true }, { no: 4, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 5, name: "smart_mode_approval", kind: "message", T: wi, opt: true }]), t0 = o.makeMessageType("agent.v1.ReadMcpResourceExecResult", () => [{ no: 1, name: "success", kind: "message", T: n0, oneof: "result" }, { no: 2, name: "error", kind: "message", T: s0, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: r0, oneof: "result" }, { no: 4, name: "not_found", kind: "message", T: a0, oneof: "result" }]), n0 = o.makeMessageType("agent.v1.ReadMcpResourceSuccess", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "text", kind: "scalar", T: 9, oneof: "content" }, { no: 6, name: "blob", kind: "scalar", T: 12, oneof: "content" }, { no: 7, name: "annotations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 8, name: "download_path", kind: "scalar", T: 9, opt: true }, { no: 9, name: "output_location", kind: "message", T: ft, opt: true }, { no: 10, name: "meta_json", kind: "scalar", T: 9, opt: true }]), s0 = o.makeMessageType("agent.v1.ReadMcpResourceError", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), r0 = o.makeMessageType("agent.v1.ReadMcpResourceRejected", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), a0 = o.makeMessageType("agent.v1.ReadMcpResourceNotFound", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }]), i0 = o.makeMessageType("agent.v1.McpToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "read_tool_def_reminder", kind: "scalar", T: 9 }, { no: 3, name: "system_reminders", kind: "message", T: Rc, repeated: true }]), o0 = o.makeMessageType("agent.v1.McpToolResult", () => [{ no: 1, name: "success", kind: "message", T: Hp, oneof: "result" }, { no: 2, name: "error", kind: "message", T: i0, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: Vp, oneof: "result" }, { no: 4, name: "permission_denied", kind: "message", T: Yp, oneof: "result" }]), l0 = o.makeMessageType("agent.v1.McpToolCall", () => [{ no: 1, name: "args", kind: "message", T: Gp }, { no: 2, name: "result", kind: "message", T: o0 }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }]), Ac = o.makeMessageType("aiserver.v1.CursorPosition", () => [{ no: 1, name: "line", kind: "scalar", T: 5 }, { no: 2, name: "column", kind: "scalar", T: 5 }]), wc = o.makeMessageType("aiserver.v1.CursorRange", () => [{ no: 1, name: "start_position", kind: "message", T: Ac }, { no: 2, name: "end_position", kind: "message", T: Ac }]), c0 = o.makeMessageType("aiserver.v1.DetailedLine", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 2 }, { no: 3, name: "is_signature", kind: "scalar", T: 8 }]), u0 = o.makeMessageType("aiserver.v1.CodeBlock", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "file_contents", kind: "scalar", T: 9, opt: true }, { no: 9, name: "file_contents_length", kind: "scalar", T: 5, opt: true }, { no: 3, name: "range", kind: "message", T: wc }, { no: 4, name: "contents", kind: "scalar", T: 9 }, { no: 5, name: "signatures", kind: "message", T: d0 }, { no: 6, name: "override_contents", kind: "scalar", T: 9, opt: true }, { no: 7, name: "original_contents", kind: "scalar", T: 9, opt: true }, { no: 8, name: "detailed_lines", kind: "message", T: c0, repeated: true }, { no: 10, name: "file_git_context", kind: "message", T: h0 }]), d0 = o.makeMessageType("aiserver.v1.CodeBlock.Signatures", () => [{ no: 1, name: "ranges", kind: "message", T: wc, repeated: true }], { localName: "CodeBlock_Signatures" }), m0 = o.makeMessageType("aiserver.v1.GitCommit", () => [{ no: 1, name: "commit", kind: "scalar", T: 9 }, { no: 2, name: "author", kind: "scalar", T: 9 }, { no: 3, name: "date", kind: "scalar", T: 9 }, { no: 4, name: "message", kind: "scalar", T: 9 }]), h0 = o.makeMessageType("aiserver.v1.FileGit", () => [{ no: 1, name: "commits", kind: "message", T: m0, repeated: true }]), g0 = o.makeMessageType("aiserver.v1.CodeResult", () => [{ no: 1, name: "code_block", kind: "message", T: u0 }, { no: 2, name: "score", kind: "scalar", T: 2 }]), f0 = o.makeMessageType("agent.v1.SemSearchToolCall", () => [{ no: 1, name: "args", kind: "message", T: p0 }, { no: 2, name: "result", kind: "message", T: T0 }]), p0 = o.makeMessageType("agent.v1.SemSearchToolArgs", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "target_directories", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "explanation", kind: "scalar", T: 9 }]), T0 = o.makeMessageType("agent.v1.SemSearchToolResult", () => [{ no: 1, name: "success", kind: "message", T: _0, oneof: "result" }, { no: 2, name: "error", kind: "message", T: k0, oneof: "result" }]), _0 = o.makeMessageType("agent.v1.SemSearchToolSuccess", () => [{ no: 1, name: "results", kind: "scalar", T: 9 }, { no: 2, name: "code_results", kind: "message", T: g0, repeated: true }]), k0 = o.makeMessageType("agent.v1.SemSearchToolError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), v0 = o.makeMessageType("agent.v1.CreatePlanToolCall", () => [{ no: 1, name: "args", kind: "message", T: y0 }, { no: 2, name: "result", kind: "message", T: S0 }]), E0 = o.makeMessageType("agent.v1.Phase", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "todos", kind: "message", T: tn, repeated: true }]), y0 = o.makeMessageType("agent.v1.CreatePlanArgs", () => [{ no: 1, name: "plan", kind: "scalar", T: 9 }, { no: 2, name: "todos", kind: "message", T: tn, repeated: true }, { no: 3, name: "overview", kind: "scalar", T: 9 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 5, name: "is_project", kind: "scalar", T: 8 }, { no: 6, name: "phases", kind: "message", T: E0, repeated: true }]), S0 = o.makeMessageType("agent.v1.CreatePlanResult", () => [{ no: 1, name: "success", kind: "message", T: R0, oneof: "result" }, { no: 2, name: "error", kind: "message", T: A0, oneof: "result" }, { no: 3, name: "plan_uri", kind: "scalar", T: 9 }]), R0 = o.makeMessageType("agent.v1.CreatePlanSuccess", []), A0 = o.makeMessageType("agent.v1.CreatePlanError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), w0 = o.makeMessageType("agent.v1.WebSearchArgs", () => [{ no: 1, name: "search_term", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), b0 = o.makeMessageType("agent.v1.WebSearchResult", () => [{ no: 1, name: "success", kind: "message", T: I0, oneof: "result" }, { no: 2, name: "error", kind: "message", T: N0, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: D0, oneof: "result" }]), I0 = o.makeMessageType("agent.v1.WebSearchSuccess", () => [{ no: 1, name: "references", kind: "message", T: O0, repeated: true }]), N0 = o.makeMessageType("agent.v1.WebSearchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), D0 = o.makeMessageType("agent.v1.WebSearchRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), O0 = o.makeMessageType("agent.v1.WebSearchReference", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "chunk", kind: "scalar", T: 9 }]), M0 = o.makeMessageType("agent.v1.WebSearchToolCall", () => [{ no: 1, name: "args", kind: "message", T: w0 }, { no: 2, name: "result", kind: "message", T: b0 }]), L0 = o.makeMessageType("agent.v1.ListMcpResourcesToolCall", () => [{ no: 1, name: "args", kind: "message", T: Kp }, { no: 2, name: "result", kind: "message", T: zp }]), x0 = o.makeMessageType("agent.v1.ReadMcpResourceToolCall", () => [{ no: 1, name: "args", kind: "message", T: e0 }, { no: 2, name: "result", kind: "message", T: t0 }]), U0 = o.makeMessageType("agent.v1.ApplyAgentDiffToolCall", () => [{ no: 1, name: "args", kind: "message", T: P0 }, { no: 2, name: "result", kind: "message", T: C0 }]), P0 = o.makeMessageType("agent.v1.ApplyAgentDiffArgs", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }]), C0 = o.makeMessageType("agent.v1.ApplyAgentDiffResult", () => [{ no: 1, name: "success", kind: "message", T: F0, oneof: "result" }, { no: 2, name: "error", kind: "message", T: G0, oneof: "result" }]), F0 = o.makeMessageType("agent.v1.ApplyAgentDiffSuccess", () => [{ no: 1, name: "applied_changes", kind: "message", T: bc, repeated: true }]), bc = o.makeMessageType("agent.v1.AppliedAgentChange", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "change_type", kind: "enum", T: o.getEnumType(B0) }, { no: 3, name: "before_content", kind: "scalar", T: 9, opt: true }, { no: 4, name: "after_content", kind: "scalar", T: 9, opt: true }, { no: 5, name: "error", kind: "scalar", T: 9, opt: true }, { no: 6, name: "message_for_model", kind: "scalar", T: 9, opt: true }]), B0 = o.makeEnum("agent.v1.AppliedAgentChange.ChangeType", [{ no: 0, name: "CHANGE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CHANGE_TYPE_CREATED", localName: "CREATED" }, { no: 2, name: "CHANGE_TYPE_MODIFIED", localName: "MODIFIED" }, { no: 3, name: "CHANGE_TYPE_DELETED", localName: "DELETED" }]), G0 = o.makeMessageType("agent.v1.ApplyAgentDiffError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "applied_changes", kind: "message", T: bc, repeated: true }]), q0 = o.makeMessageType("agent.v1.AskQuestionToolCall", () => [{ no: 1, name: "args", kind: "message", T: W0 }, { no: 2, name: "result", kind: "message", T: V0 }]), W0 = o.makeMessageType("agent.v1.AskQuestionArgs", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "questions", kind: "message", T: $0, repeated: true }, { no: 5, name: "run_async", kind: "scalar", T: 8 }, { no: 6, name: "async_original_tool_call_id", kind: "scalar", T: 9 }]), $0 = o.makeMessageType("agent.v1.AskQuestionArgs.Question", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "prompt", kind: "scalar", T: 9 }, { no: 3, name: "options", kind: "message", T: J0, repeated: true }, { no: 4, name: "allow_multiple", kind: "scalar", T: 8 }], { localName: "AskQuestionArgs_Question" }), J0 = o.makeMessageType("agent.v1.AskQuestionArgs.Option", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "label", kind: "scalar", T: 9 }], { localName: "AskQuestionArgs_Option" }), H0 = o.makeMessageType("agent.v1.AskQuestionAsync", () => [{ no: 1, name: "interaction_id", kind: "scalar", T: 9 }]), V0 = o.makeMessageType("agent.v1.AskQuestionResult", () => [{ no: 1, name: "success", kind: "message", T: Y0, oneof: "result" }, { no: 2, name: "error", kind: "message", T: z0, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: X0, oneof: "result" }, { no: 4, name: "async", kind: "message", T: H0, oneof: "result" }]), Y0 = o.makeMessageType("agent.v1.AskQuestionSuccess", () => [{ no: 1, name: "answers", kind: "message", T: K0, repeated: true }]), K0 = o.makeMessageType("agent.v1.AskQuestionSuccess.Answer", () => [{ no: 1, name: "question_id", kind: "scalar", T: 9 }, { no: 2, name: "selected_option_ids", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "freeform_text", kind: "scalar", T: 9 }], { localName: "AskQuestionSuccess_Answer" }), z0 = o.makeMessageType("agent.v1.AskQuestionError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), X0 = o.makeMessageType("agent.v1.AskQuestionRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), j0 = o.makeMessageType("agent.v1.FetchArgs", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), Q0 = o.makeMessageType("agent.v1.FetchResult", () => [{ no: 1, name: "success", kind: "message", T: Z0, oneof: "result" }, { no: 2, name: "error", kind: "message", T: e2, oneof: "result" }]), Z0 = o.makeMessageType("agent.v1.FetchSuccess", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "status_code", kind: "scalar", T: 5 }, { no: 4, name: "content_type", kind: "scalar", T: 9 }]), e2 = o.makeMessageType("agent.v1.FetchError", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), t2 = o.makeMessageType("agent.v1.FetchToolCall", () => [{ no: 1, name: "args", kind: "message", T: j0 }, { no: 2, name: "result", kind: "message", T: Q0 }]), n2 = o.makeMessageType("agent.v1.SwitchModeArgs", () => [{ no: 1, name: "target_mode_id", kind: "scalar", T: 9 }, { no: 2, name: "explanation", kind: "scalar", T: 9, opt: true }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }]), s2 = o.makeMessageType("agent.v1.SwitchModeResult", () => [{ no: 1, name: "success", kind: "message", T: r2, oneof: "result" }, { no: 2, name: "error", kind: "message", T: a2, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: i2, oneof: "result" }]), r2 = o.makeMessageType("agent.v1.SwitchModeSuccess", () => [{ no: 1, name: "from_mode_id", kind: "scalar", T: 9 }, { no: 2, name: "to_mode_id", kind: "scalar", T: 9 }]), a2 = o.makeMessageType("agent.v1.SwitchModeError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), i2 = o.makeMessageType("agent.v1.SwitchModeRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), o2 = o.makeMessageType("agent.v1.SwitchModeToolCall", () => [{ no: 1, name: "args", kind: "message", T: n2 }, { no: 2, name: "result", kind: "message", T: s2 }]), l2 = o.makeMessageType("agent.v1.GenerateImageArgs", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }, { no: 2, name: "file_path", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reference_image_paths", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "aspect_ratio", kind: "scalar", T: 9, opt: true }]), c2 = o.makeMessageType("agent.v1.GenerateImageResult", () => [{ no: 1, name: "success", kind: "message", T: u2, oneof: "result" }, { no: 2, name: "error", kind: "message", T: d2, oneof: "result" }]), u2 = o.makeMessageType("agent.v1.GenerateImageSuccess", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "image_data", kind: "scalar", T: 9 }]), d2 = o.makeMessageType("agent.v1.GenerateImageError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), m2 = o.makeMessageType("agent.v1.GenerateImageToolCall", () => [{ no: 1, name: "args", kind: "message", T: l2 }, { no: 2, name: "result", kind: "message", T: c2 }]), h2 = o.makeEnum("agent.v1.RecordingMode", [{ no: 0, name: "RECORDING_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "RECORDING_MODE_START_RECORDING", localName: "START_RECORDING" }, { no: 2, name: "RECORDING_MODE_SAVE_RECORDING", localName: "SAVE_RECORDING" }, { no: 3, name: "RECORDING_MODE_DISCARD_RECORDING", localName: "DISCARD_RECORDING" }]), g2 = o.makeEnum("agent.v1.RequestedFilePathRejectedReason", [{ no: 0, name: "REQUESTED_FILE_PATH_REJECTED_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "REQUESTED_FILE_PATH_REJECTED_REASON_SLASHES_NOT_ALLOWED", localName: "SLASHES_NOT_ALLOWED" }]), f2 = o.makeMessageType("agent.v1.RecordScreenArgs", () => [{ no: 1, name: "mode", kind: "enum", T: o.getEnumType(h2) }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 3, name: "save_as_filename", kind: "scalar", T: 9, opt: true }]), p2 = o.makeMessageType("agent.v1.RecordScreenResult", () => [{ no: 1, name: "start_success", kind: "message", T: T2, oneof: "result" }, { no: 2, name: "save_success", kind: "message", T: _2, oneof: "result" }, { no: 3, name: "discard_success", kind: "message", T: k2, oneof: "result" }, { no: 4, name: "failure", kind: "message", T: v2, oneof: "result" }]), T2 = o.makeMessageType("agent.v1.RecordScreenStartSuccess", () => [{ no: 1, name: "was_prior_recording_cancelled", kind: "scalar", T: 8 }, { no: 2, name: "was_save_as_filename_ignored", kind: "scalar", T: 8 }]), _2 = o.makeMessageType("agent.v1.RecordScreenSaveSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "recording_duration_ms", kind: "scalar", T: 3 }, { no: 3, name: "requested_file_path_rejected_reason", kind: "enum", T: o.getEnumType(g2), opt: true }]), k2 = o.makeMessageType("agent.v1.RecordScreenDiscardSuccess", []), v2 = o.makeMessageType("agent.v1.RecordScreenFailure", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), E2 = o.makeMessageType("agent.v1.RecordScreenToolCall", () => [{ no: 1, name: "args", kind: "message", T: f2 }, { no: 2, name: "result", kind: "message", T: p2 }]), Hr = o.makeEnum("agent.v1.MouseButton", [{ no: 0, name: "MOUSE_BUTTON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MOUSE_BUTTON_LEFT", localName: "LEFT" }, { no: 2, name: "MOUSE_BUTTON_RIGHT", localName: "RIGHT" }, { no: 3, name: "MOUSE_BUTTON_MIDDLE", localName: "MIDDLE" }, { no: 4, name: "MOUSE_BUTTON_BACK", localName: "BACK" }, { no: 5, name: "MOUSE_BUTTON_FORWARD", localName: "FORWARD" }]), y2 = o.makeEnum("agent.v1.ScrollDirection", [{ no: 0, name: "SCROLL_DIRECTION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SCROLL_DIRECTION_UP", localName: "UP" }, { no: 2, name: "SCROLL_DIRECTION_DOWN", localName: "DOWN" }, { no: 3, name: "SCROLL_DIRECTION_LEFT", localName: "LEFT" }, { no: 4, name: "SCROLL_DIRECTION_RIGHT", localName: "RIGHT" }]), S2 = o.makeEnum("agent.v1.KeyStroke", [{ no: 0, name: "KEY_STROKE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KEY_STROKE_TAP", localName: "TAP" }, { no: 2, name: "KEY_STROKE_DOWN", localName: "DOWN" }, { no: 3, name: "KEY_STROKE_UP", localName: "UP" }]), R2 = o.makeEnum("agent.v1.ComputerUseSettleOutcome", [{ no: 0, name: "COMPUTER_USE_SETTLE_OUTCOME_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "COMPUTER_USE_SETTLE_OUTCOME_NONE", localName: "NONE" }, { no: 2, name: "COMPUTER_USE_SETTLE_OUTCOME_FIXED", localName: "FIXED" }, { no: 3, name: "COMPUTER_USE_SETTLE_OUTCOME_STABLE", localName: "STABLE" }, { no: 4, name: "COMPUTER_USE_SETTLE_OUTCOME_CAP", localName: "CAP" }, { no: 5, name: "COMPUTER_USE_SETTLE_OUTCOME_CAPTURE_FAILED", localName: "CAPTURE_FAILED" }]), nn = o.makeMessageType("agent.v1.Coordinate", () => [{ no: 1, name: "x", kind: "scalar", T: 5 }, { no: 2, name: "y", kind: "scalar", T: 5 }]), A2 = o.makeMessageType("agent.v1.ComputerUseArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "actions", kind: "message", T: w2, repeated: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "bind_unmapped_characters", kind: "scalar", T: 8, opt: true }, { no: 5, name: "desktop_lease_actor_id", kind: "scalar", T: 9, opt: true }, { no: 6, name: "screenshot_settle_ms", kind: "scalar", T: 5, opt: true }, { no: 8, name: "settle_until_stable", kind: "scalar", T: 8, opt: true }]), w2 = o.makeMessageType("agent.v1.ComputerUseAction", () => [{ no: 1, name: "mouse_move", kind: "message", T: b2, oneof: "action" }, { no: 2, name: "click", kind: "message", T: I2, oneof: "action" }, { no: 3, name: "mouse_down", kind: "message", T: N2, oneof: "action" }, { no: 4, name: "mouse_up", kind: "message", T: D2, oneof: "action" }, { no: 5, name: "drag", kind: "message", T: O2, oneof: "action" }, { no: 6, name: "scroll", kind: "message", T: M2, oneof: "action" }, { no: 7, name: "type", kind: "message", T: L2, oneof: "action" }, { no: 8, name: "key", kind: "message", T: x2, oneof: "action" }, { no: 9, name: "wait", kind: "message", T: U2, oneof: "action" }, { no: 10, name: "screenshot", kind: "message", T: P2, oneof: "action" }, { no: 11, name: "cursor_position", kind: "message", T: C2, oneof: "action" }]), b2 = o.makeMessageType("agent.v1.MouseMoveAction", () => [{ no: 1, name: "coordinate", kind: "message", T: nn }]), I2 = o.makeMessageType("agent.v1.ClickAction", () => [{ no: 1, name: "coordinate", kind: "message", T: nn, opt: true }, { no: 2, name: "button", kind: "enum", T: o.getEnumType(Hr) }, { no: 3, name: "count", kind: "scalar", T: 5 }, { no: 4, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), N2 = o.makeMessageType("agent.v1.MouseDownAction", () => [{ no: 1, name: "button", kind: "enum", T: o.getEnumType(Hr) }]), D2 = o.makeMessageType("agent.v1.MouseUpAction", () => [{ no: 1, name: "button", kind: "enum", T: o.getEnumType(Hr) }]), O2 = o.makeMessageType("agent.v1.DragAction", () => [{ no: 1, name: "path", kind: "message", T: nn, repeated: true }, { no: 2, name: "button", kind: "enum", T: o.getEnumType(Hr) }, { no: 3, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), M2 = o.makeMessageType("agent.v1.ScrollAction", () => [{ no: 1, name: "coordinate", kind: "message", T: nn, opt: true }, { no: 2, name: "direction", kind: "enum", T: o.getEnumType(y2) }, { no: 3, name: "amount", kind: "scalar", T: 5 }, { no: 4, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), L2 = o.makeMessageType("agent.v1.TypeAction", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), x2 = o.makeMessageType("agent.v1.KeyAction", () => [{ no: 1, name: "key", kind: "scalar", T: 9 }, { no: 2, name: "hold_duration_ms", kind: "scalar", T: 5, opt: true }, { no: 3, name: "stroke", kind: "enum", T: o.getEnumType(S2) }]), U2 = o.makeMessageType("agent.v1.WaitAction", () => [{ no: 1, name: "duration_ms", kind: "scalar", T: 5 }]), P2 = o.makeMessageType("agent.v1.ScreenshotAction", []), C2 = o.makeMessageType("agent.v1.CursorPositionAction", []), F2 = o.makeMessageType("agent.v1.ComputerUseResult", () => [{ no: 1, name: "success", kind: "message", T: B2, oneof: "result" }, { no: 2, name: "error", kind: "message", T: G2, oneof: "result" }]), B2 = o.makeMessageType("agent.v1.ComputerUseSuccess", () => [{ no: 1, name: "action_count", kind: "scalar", T: 5 }, { no: 2, name: "duration_ms", kind: "scalar", T: 5 }, { no: 3, name: "screenshot", kind: "scalar", T: 9, opt: true }, { no: 4, name: "log", kind: "scalar", T: 9, opt: true }, { no: 5, name: "screenshot_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "cursor_position", kind: "message", T: nn, opt: true }, { no: 7, name: "settle_ms", kind: "scalar", T: 5, opt: true }, { no: 8, name: "settle_outcome", kind: "enum", T: o.getEnumType(R2), opt: true }]), G2 = o.makeMessageType("agent.v1.ComputerUseError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "action_count", kind: "scalar", T: 5 }, { no: 3, name: "duration_ms", kind: "scalar", T: 5 }, { no: 4, name: "log", kind: "scalar", T: 9, opt: true }, { no: 5, name: "screenshot", kind: "scalar", T: 9, opt: true }, { no: 6, name: "screenshot_path", kind: "scalar", T: 9, opt: true }]), q2 = o.makeMessageType("agent.v1.ComputerUseToolCall", () => [{ no: 1, name: "args", kind: "message", T: A2 }, { no: 2, name: "result", kind: "message", T: F2 }]), W2 = o.makeMessageType("agent.v1.WriteShellStdinArgs", () => [{ no: 1, name: "shell_id", kind: "scalar", T: 13 }, { no: 2, name: "chars", kind: "scalar", T: 9 }]), $2 = o.makeMessageType("agent.v1.WriteShellStdinResult", () => [{ no: 1, name: "success", kind: "message", T: J2, oneof: "result" }, { no: 2, name: "error", kind: "message", T: H2, oneof: "result" }]), J2 = o.makeMessageType("agent.v1.WriteShellStdinSuccess", () => [{ no: 1, name: "shell_id", kind: "scalar", T: 13 }, { no: 2, name: "terminal_file_length_before_input_written", kind: "scalar", T: 13 }]), H2 = o.makeMessageType("agent.v1.WriteShellStdinError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), V2 = o.makeMessageType("agent.v1.WriteShellStdinToolCall", () => [{ no: 1, name: "args", kind: "message", T: W2 }, { no: 2, name: "result", kind: "message", T: $2 }]), Y2 = o.makeMessageType("agent.v1.ReflectArgs", () => [{ no: 1, name: "unexpected_action_outcomes", kind: "scalar", T: 9 }, { no: 2, name: "relevant_instructions", kind: "scalar", T: 9 }, { no: 3, name: "scenario_analysis", kind: "scalar", T: 9 }, { no: 4, name: "critical_synthesis", kind: "scalar", T: 9 }, { no: 5, name: "next_steps", kind: "scalar", T: 9 }, { no: 6, name: "tool_call_id", kind: "scalar", T: 9 }]), K2 = o.makeMessageType("agent.v1.ReflectResult", () => [{ no: 1, name: "success", kind: "message", T: z2, oneof: "result" }, { no: 2, name: "error", kind: "message", T: X2, oneof: "result" }]), z2 = o.makeMessageType("agent.v1.ReflectSuccess", []), X2 = o.makeMessageType("agent.v1.ReflectError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), j2 = o.makeMessageType("agent.v1.ReflectToolCall", () => [{ no: 1, name: "args", kind: "message", T: Y2 }, { no: 2, name: "result", kind: "message", T: K2 }]), Q2 = o.makeMessageType("agent.v1.SetupVmEnvironmentArgs", () => [{ no: 2, name: "install_command", kind: "scalar", T: 9 }, { no: 3, name: "start_command", kind: "scalar", T: 9 }, { no: 4, name: "dockerfile_contents", kind: "scalar", T: 9 }]), Z2 = o.makeMessageType("agent.v1.SetupVmEnvironmentResult", () => [{ no: 1, name: "success", kind: "message", T: e4, oneof: "result" }]), e4 = o.makeMessageType("agent.v1.SetupVmEnvironmentSuccess", []), t4 = o.makeMessageType("agent.v1.SetupVmEnvironmentToolCall", () => [{ no: 1, name: "args", kind: "message", T: Q2 }, { no: 2, name: "result", kind: "message", T: Z2 }]), n4 = o.makeMessageType("agent.v1.StartGrindExecutionArgs", () => [{ no: 1, name: "explanation", kind: "scalar", T: 9, opt: true }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), s4 = o.makeMessageType("agent.v1.StartGrindExecutionResult", () => [{ no: 1, name: "success", kind: "message", T: r4, oneof: "result" }, { no: 2, name: "error", kind: "message", T: a4, oneof: "result" }]), r4 = o.makeMessageType("agent.v1.StartGrindExecutionSuccess", []), a4 = o.makeMessageType("agent.v1.StartGrindExecutionError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), i4 = o.makeMessageType("agent.v1.StartGrindExecutionToolCall", () => [{ no: 1, name: "args", kind: "message", T: n4 }, { no: 2, name: "result", kind: "message", T: s4 }]), o4 = o.makeMessageType("agent.v1.StartGrindPlanningArgs", () => [{ no: 1, name: "explanation", kind: "scalar", T: 9, opt: true }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), l4 = o.makeMessageType("agent.v1.StartGrindPlanningResult", () => [{ no: 1, name: "success", kind: "message", T: c4, oneof: "result" }, { no: 2, name: "error", kind: "message", T: u4, oneof: "result" }]), c4 = o.makeMessageType("agent.v1.StartGrindPlanningSuccess", []), u4 = o.makeMessageType("agent.v1.StartGrindPlanningError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), d4 = o.makeMessageType("agent.v1.StartGrindPlanningToolCall", () => [{ no: 1, name: "args", kind: "message", T: o4 }, { no: 2, name: "result", kind: "message", T: l4 }]), m4 = o.makeMessageType("agent.v1.WebFetchArgs", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), h4 = o.makeMessageType("agent.v1.WebFetchResult", () => [{ no: 1, name: "success", kind: "message", T: g4, oneof: "result" }, { no: 2, name: "error", kind: "message", T: f4, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: p4, oneof: "result" }]), g4 = o.makeMessageType("agent.v1.WebFetchSuccess", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "markdown", kind: "scalar", T: 9 }, { no: 3, name: "output_location", kind: "message", T: ft, opt: true }]), f4 = o.makeMessageType("agent.v1.WebFetchError", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), p4 = o.makeMessageType("agent.v1.WebFetchRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), T4 = o.makeMessageType("agent.v1.WebFetchToolCall", () => [{ no: 1, name: "args", kind: "message", T: m4 }, { no: 2, name: "result", kind: "message", T: h4 }]), _4 = o.makeEnum("agent.v1.BugfixVerdict", [{ no: 0, name: "BUGFIX_VERDICT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BUGFIX_VERDICT_FIXED", localName: "FIXED" }, { no: 2, name: "BUGFIX_VERDICT_FALSE_POSITIVE", localName: "FALSE_POSITIVE" }, { no: 3, name: "BUGFIX_VERDICT_COULD_NOT_FIX", localName: "COULD_NOT_FIX" }, { no: 4, name: "BUGFIX_VERDICT_RESOLVED_BY_OTHER_FIX", localName: "RESOLVED_BY_OTHER_FIX" }]), Ic = o.makeMessageType("agent.v1.BugfixResultItem", () => [{ no: 1, name: "bug_id", kind: "scalar", T: 9 }, { no: 2, name: "bug_title", kind: "scalar", T: 9 }, { no: 3, name: "verdict", kind: "enum", T: o.getEnumType(_4) }, { no: 4, name: "explanation", kind: "scalar", T: 9 }, { no: 5, name: "severity", kind: "scalar", T: 9, opt: true }]), k4 = o.makeMessageType("agent.v1.ReportBugfixResultsArgs", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "results", kind: "message", T: Ic, repeated: true }]), v4 = o.makeMessageType("agent.v1.ReportBugfixResultsSuccess", () => [{ no: 1, name: "results", kind: "message", T: Ic, repeated: true }]), E4 = o.makeMessageType("agent.v1.ReportBugfixResultsError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), y4 = o.makeMessageType("agent.v1.ReportBugfixResultsResult", () => [{ no: 1, name: "success", kind: "message", T: v4, oneof: "result" }, { no: 2, name: "error", kind: "message", T: E4, oneof: "result" }]), S4 = o.makeMessageType("agent.v1.ReportBugfixResultsToolCall", () => [{ no: 1, name: "args", kind: "message", T: k4 }, { no: 2, name: "result", kind: "message", T: y4 }]), R4 = o.makeMessageType("agent.v1.AiAttributionArgs", () => [{ no: 5, name: "file_paths", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "start_line", kind: "scalar", T: 5, opt: true }, { no: 3, name: "end_line", kind: "scalar", T: 5, opt: true }, { no: 6, name: "commit_hashes", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "output_mode", kind: "scalar", T: 9, opt: true }, { no: 9, name: "max_commits", kind: "scalar", T: 5, opt: true }, { no: 10, name: "include_line_ranges", kind: "scalar", T: 8, opt: true }]), A4 = o.makeMessageType("agent.v1.AiAttributionResult", () => [{ no: 1, name: "success", kind: "message", T: w4, oneof: "result" }, { no: 2, name: "error", kind: "message", T: b4, oneof: "result" }]), w4 = o.makeMessageType("agent.v1.AiAttributionSuccess", () => [{ no: 1, name: "attribution_text", kind: "scalar", T: 9 }, { no: 2, name: "output_location", kind: "message", T: ft, opt: true }]), b4 = o.makeMessageType("agent.v1.AiAttributionError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), I4 = o.makeMessageType("agent.v1.AiAttributionToolCall", () => [{ no: 1, name: "args", kind: "message", T: R4 }, { no: 2, name: "result", kind: "message", T: A4 }]), N4 = o.makeEnum("agent.v1.MergePrMode", [{ no: 0, name: "MERGE_PR_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MERGE_PR_MODE_MERGE", localName: "MERGE" }, { no: 2, name: "MERGE_PR_MODE_AUTO", localName: "AUTO" }, { no: 3, name: "MERGE_PR_MODE_DISABLE_AUTO", localName: "DISABLE_AUTO" }]), D4 = o.makeEnum("agent.v1.MergePrMethod", [{ no: 0, name: "MERGE_PR_METHOD_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MERGE_PR_METHOD_MERGE", localName: "MERGE" }, { no: 2, name: "MERGE_PR_METHOD_SQUASH", localName: "SQUASH" }]), O4 = o.makeEnum("agent.v1.PullRequestStatus", [{ no: 0, name: "PULL_REQUEST_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "PULL_REQUEST_STATUS_OPEN", localName: "OPEN" }, { no: 2, name: "PULL_REQUEST_STATUS_CLOSED", localName: "CLOSED" }]), M4 = o.makeMessageType("agent.v1.PrManagementArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "create_pr", kind: "message", T: L4, oneof: "action" }, { no: 3, name: "update_pr", kind: "message", T: x4, oneof: "action" }, { no: 4, name: "post_comment", kind: "message", T: U4, oneof: "action" }, { no: 5, name: "resolve_comment", kind: "message", T: P4, oneof: "action" }, { no: 6, name: "get_ci_status", kind: "message", T: C4, oneof: "action" }, { no: 7, name: "set_pr_status", kind: "message", T: F4, oneof: "action" }, { no: 8, name: "merge_pr", kind: "message", T: B4, oneof: "action" }]), L4 = o.makeMessageType("agent.v1.CreatePrAction", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "body", kind: "scalar", T: 9 }, { no: 3, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 4, name: "draft", kind: "scalar", T: 8, opt: true }, { no: 5, name: "branch_name", kind: "scalar", T: 9 }, { no: 6, name: "add_labels", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 8, name: "skip_branch_prefix_check", kind: "scalar", T: 8, opt: true }, { no: 9, name: "stack_on_pr_number", kind: "scalar", T: 3, opt: true }]), x4 = o.makeMessageType("agent.v1.UpdatePrAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }, { no: 3, name: "body", kind: "scalar", T: 9, opt: true }, { no: 4, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 5, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 6, name: "add_labels", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "remove_labels", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 9, name: "stack_on_pr_number", kind: "scalar", T: 3, opt: true }, { no: 10, name: "clear_stack", kind: "scalar", T: 8, opt: true }, { no: 11, name: "draft", kind: "scalar", T: 8, opt: true }]), U4 = o.makeMessageType("agent.v1.PostCommentAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 5, name: "in_reply_to", kind: "scalar", T: 3, opt: true }, { no: 6, name: "path", kind: "scalar", T: 9, opt: true }, { no: 7, name: "line", kind: "scalar", T: 5, opt: true }, { no: 8, name: "start_line", kind: "scalar", T: 5, opt: true }, { no: 9, name: "side", kind: "scalar", T: 9, opt: true }, { no: 10, name: "reply_to_reference", kind: "scalar", T: 9, opt: true }]), P4 = o.makeMessageType("agent.v1.ResolveCommentAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "comment_id", kind: "scalar", T: 3 }, { no: 4, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 5, name: "comment_reference", kind: "scalar", T: 9, opt: true }]), C4 = o.makeMessageType("agent.v1.GetCiStatusAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "repo_url", kind: "scalar", T: 9, opt: true }]), F4 = o.makeMessageType("agent.v1.SetPrStatusAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 4, name: "status", kind: "enum", T: o.getEnumType(O4) }]), B4 = o.makeMessageType("agent.v1.MergePrAction", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true }, { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "repo_url", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mode", kind: "enum", T: o.getEnumType(N4) }, { no: 5, name: "method", kind: "enum", T: o.getEnumType(D4) }, { no: 6, name: "expected_head_sha", kind: "scalar", T: 9, opt: true }, { no: 7, name: "expected_member_head_shas", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 8, name: "downstack", kind: "scalar", T: 8 }]), G4 = o.makeMessageType("agent.v1.PrManagementResult", () => [{ no: 1, name: "success", kind: "message", T: q4, oneof: "result" }, { no: 2, name: "error", kind: "message", T: W4, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: $4, oneof: "result" }, { no: 4, name: "registered", kind: "message", T: J4, oneof: "result" }, { no: 5, name: "needs_confirmation", kind: "message", T: H4, oneof: "result" }]), q4 = o.makeMessageType("agent.v1.PrManagementSuccess", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9 }, { no: 2, name: "pr_number", kind: "scalar", T: 5 }, { no: 3, name: "message", kind: "scalar", T: 9 }]), W4 = o.makeMessageType("agent.v1.PrManagementError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), $4 = o.makeMessageType("agent.v1.PrManagementRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), J4 = o.makeMessageType("agent.v1.PrManagementRegistered", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 5, name: "draft", kind: "scalar", T: 8, opt: true }, { no: 6, name: "branch_name", kind: "scalar", T: 9 }]), H4 = o.makeMessageType("agent.v1.PrManagementNeedsConfirmation", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "discovered_pr_url", kind: "scalar", T: 9 }, { no: 3, name: "discovered_pr_number", kind: "scalar", T: 5 }, { no: 4, name: "discovered_pr_title", kind: "scalar", T: 9 }, { no: 5, name: "branch_name", kind: "scalar", T: 9 }]), V4 = o.makeMessageType("agent.v1.PrManagementToolCall", () => [{ no: 1, name: "args", kind: "message", T: M4 }, { no: 2, name: "result", kind: "message", T: G4 }]), Y4 = o.makeMessageType("agent.v1.McpAuthArgs", () => [{ no: 1, name: "server_identifier", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), K4 = o.makeMessageType("agent.v1.McpAuthResult", () => [{ no: 1, name: "success", kind: "message", T: z4, oneof: "result" }, { no: 2, name: "error", kind: "message", T: X4, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: j4, oneof: "result" }]), z4 = o.makeMessageType("agent.v1.McpAuthSuccess", () => [{ no: 1, name: "server_identifier", kind: "scalar", T: 9 }]), X4 = o.makeMessageType("agent.v1.McpAuthError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), j4 = o.makeMessageType("agent.v1.McpAuthRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), Q4 = o.makeMessageType("agent.v1.McpAuthToolCall", () => [{ no: 1, name: "args", kind: "message", T: Y4 }, { no: 2, name: "result", kind: "message", T: K4 }]), Z4 = o.makeMessageType("agent.v1.AwaitArgs", () => [{ no: 1, name: "task_id", kind: "scalar", T: 9 }, { no: 2, name: "block_until_ms", kind: "scalar", T: 13, opt: true }, { no: 3, name: "regex", kind: "scalar", T: 9, opt: true }]), Nc = o.makeMessageType("agent.v1.AwaitTaskComplete", () => [{ no: 1, name: "task_id", kind: "scalar", T: 9 }, { no: 2, name: "runtime_ms", kind: "scalar", T: 4 }, { no: 3, name: "output_file_path", kind: "scalar", T: 9 }, { no: 4, name: "output_length", kind: "scalar", T: 4 }, { no: 5, name: "regex_requested", kind: "scalar", T: 8 }, { no: 6, name: "regex_match", kind: "scalar", T: 9, opt: true }, { no: 7, name: "exit_code", kind: "scalar", T: 17, opt: true }, { no: 8, name: "wake_reason", kind: "scalar", T: 9, opt: true }]), Dc = o.makeMessageType("agent.v1.AwaitTaskStillRunning", () => [{ no: 1, name: "task_id", kind: "scalar", T: 9 }, { no: 2, name: "runtime_ms", kind: "scalar", T: 4 }, { no: 3, name: "output_file_path", kind: "scalar", T: 9 }, { no: 4, name: "output_length", kind: "scalar", T: 4 }, { no: 5, name: "regex_requested", kind: "scalar", T: 8 }, { no: 6, name: "regex_match", kind: "scalar", T: 9, opt: true }, { no: 7, name: "wake_reason", kind: "scalar", T: 9, opt: true }]), eT = o.makeMessageType("agent.v1.AwaitError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), tT = o.makeMessageType("agent.v1.AwaitSuccess", () => [{ no: 1, name: "complete", kind: "message", T: Nc, oneof: "await_result" }, { no: 2, name: "still_running", kind: "message", T: Dc, oneof: "await_result" }]), nT = o.makeMessageType("agent.v1.AwaitResult", () => [{ no: 1, name: "complete", kind: "message", T: Nc, oneof: "result" }, { no: 2, name: "still_running", kind: "message", T: Dc, oneof: "result" }, { no: 3, name: "error", kind: "message", T: eT, oneof: "result" }, { no: 4, name: "success", kind: "message", T: tT, oneof: "result" }]), sT = o.makeMessageType("agent.v1.AwaitToolCall", () => [{ no: 1, name: "args", kind: "message", T: Z4 }, { no: 2, name: "result", kind: "message", T: nT }]), rT = o.makeMessageType("agent.v1.BlameByFilePathArgs", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5, opt: true }, { no: 3, name: "end_line", kind: "scalar", T: 5, opt: true }]), aT = o.makeMessageType("agent.v1.BlameByFilePathSuccess", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }]), iT = o.makeMessageType("agent.v1.BlameByFilePathError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), oT = o.makeMessageType("agent.v1.BlameByFilePathResult", () => [{ no: 1, name: "success", kind: "message", T: aT, oneof: "result" }, { no: 2, name: "error", kind: "message", T: iT, oneof: "result" }]), lT = o.makeMessageType("agent.v1.BlameByFilePathToolCall", () => [{ no: 1, name: "args", kind: "message", T: rT }, { no: 2, name: "result", kind: "message", T: oT }]), cT = o.makeMessageType("agent.v1.GetMcpToolsArgs", () => [{ no: 1, name: "server", kind: "scalar", T: 9, opt: true }, { no: 2, name: "tool_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "pattern", kind: "scalar", T: 9, opt: true }, { no: 4, name: "tool_call_id", kind: "scalar", T: 9 }]), uT = o.makeMessageType("agent.v1.GetMcpToolsAgentResult", () => [{ no: 1, name: "success", kind: "message", T: dT, oneof: "result" }, { no: 2, name: "error", kind: "message", T: mT, oneof: "result" }]), dT = o.makeMessageType("agent.v1.GetMcpToolsSuccess", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "output_file_path", kind: "scalar", T: 9, opt: true }]), mT = o.makeMessageType("agent.v1.GetMcpToolsError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), hT = o.makeMessageType("agent.v1.GetMcpToolsToolCall", () => [{ no: 1, name: "args", kind: "message", T: cT }, { no: 2, name: "result", kind: "message", T: uT }]), gT = o.makeMessageType("agent.v1.ReportBugArgs", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "file", kind: "scalar", T: 9 }, { no: 3, name: "start_line", kind: "scalar", T: 5 }, { no: 4, name: "end_line", kind: "scalar", T: 5 }, { no: 5, name: "description", kind: "scalar", T: 9 }, { no: 6, name: "severity", kind: "scalar", T: 9 }, { no: 7, name: "category", kind: "scalar", T: 9 }, { no: 8, name: "rationale", kind: "scalar", T: 9 }]), fT = o.makeMessageType("agent.v1.ReportBugSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }]), pT = o.makeMessageType("agent.v1.ReportBugError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), TT = o.makeMessageType("agent.v1.ReportBugResult", () => [{ no: 1, name: "success", kind: "message", T: fT, oneof: "result" }, { no: 2, name: "error", kind: "message", T: pT, oneof: "result" }]), _T = o.makeMessageType("agent.v1.ReportBugToolCall", () => [{ no: 1, name: "args", kind: "message", T: gT }, { no: 2, name: "result", kind: "message", T: TT }]), kT = o.makeMessageType("agent.v1.CommunicateUpdateArgs", () => [{ no: 1, name: "current_step", kind: "scalar", T: 9, opt: true }, { no: 3, name: "final_summary", kind: "scalar", T: 9, opt: true }, { no: 4, name: "completed_subtitle", kind: "scalar", T: 9, opt: true }]), vT = o.makeMessageType("agent.v1.CommunicateUpdateSuccess", () => [{ no: 1, name: "current_step", kind: "scalar", T: 9 }, { no: 3, name: "message_index", kind: "scalar", T: 13 }]), ET = o.makeMessageType("agent.v1.CommunicateUpdateError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), yT = o.makeMessageType("agent.v1.CommunicateUpdateResult", () => [{ no: 1, name: "success", kind: "message", T: vT, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ET, oneof: "result" }]), ST = o.makeMessageType("agent.v1.CommunicateUpdateToolCall", () => [{ no: 1, name: "args", kind: "message", T: kT }, { no: 2, name: "result", kind: "message", T: yT }]), RT = o.makeMessageType("agent.v1.SendFinalSummaryArgs", () => [{ no: 1, name: "final_summary", kind: "scalar", T: 9, opt: true }]), AT = o.makeMessageType("agent.v1.SendFinalSummarySuccess", () => [{ no: 1, name: "final_summary", kind: "scalar", T: 9 }]), wT = o.makeMessageType("agent.v1.SendFinalSummaryError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), bT = o.makeMessageType("agent.v1.SendFinalSummaryResult", () => [{ no: 1, name: "success", kind: "message", T: AT, oneof: "result" }, { no: 2, name: "error", kind: "message", T: wT, oneof: "result" }]), IT = o.makeMessageType("agent.v1.SendFinalSummaryToolCall", () => [{ no: 1, name: "args", kind: "message", T: RT }, { no: 2, name: "result", kind: "message", T: bT }]), NT = o.makeEnum("agent.v1.ReplaceEnvMode", [{ no: 0, name: "REPLACE_ENV_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "REPLACE_ENV_MODE_CUSTOM", localName: "CUSTOM" }, { no: 2, name: "REPLACE_ENV_MODE_CLEAN_SLATE", localName: "CLEAN_SLATE" }, { no: 3, name: "REPLACE_ENV_MODE_DEFAULT", localName: "DEFAULT" }]), DT = o.makeMessageType("agent.v1.RepoCheckoutRefOverride", () => [{ no: 1, name: "repo_url", kind: "scalar", T: 9 }, { no: 2, name: "ref", kind: "scalar", T: 9 }]), OT = o.makeMessageType("agent.v1.ReplaceEnvConfig", () => [{ no: 1, name: "install_script", kind: "scalar", T: 9 }, { no: 2, name: "dockerfile_contents", kind: "scalar", T: 9 }]), MT = o.makeMessageType("agent.v1.ReplaceEnvArgs", () => [{ no: 1, name: "config", kind: "message", T: OT }, { no: 2, name: "mode", kind: "enum", T: o.getEnumType(NT) }, { no: 3, name: "checkout_ref_overrides", kind: "message", T: DT, repeated: true }]), LT = o.makeMessageType("agent.v1.ReplaceEnvSuccess", () => [{ no: 1, name: "setup_logs", kind: "scalar", T: 9 }]), xT = o.makeMessageType("agent.v1.ReplaceEnvFailure", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }, { no: 2, name: "setup_logs", kind: "scalar", T: 9 }]), UT = o.makeMessageType("agent.v1.ReplaceEnvResult", () => [{ no: 1, name: "success", kind: "message", T: LT, oneof: "result" }, { no: 2, name: "failure", kind: "message", T: xT, oneof: "result" }]), PT = o.makeMessageType("agent.v1.ReplaceEnvToolCall", () => [{ no: 1, name: "args", kind: "message", T: MT }, { no: 2, name: "result", kind: "message", T: UT }, { no: 3, name: "associated_pod_key", kind: "scalar", T: 9 }]), CT = o.makeMessageType("agent.v1.EditPrLabelsArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "pr_url", kind: "scalar", T: 9 }, { no: 4, name: "add_labels", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "remove_labels", kind: "scalar", T: 9, repeated: true }]), FT = o.makeMessageType("agent.v1.EditPrLabelsResult", () => [{ no: 1, name: "success", kind: "message", T: BT, oneof: "result" }, { no: 2, name: "error", kind: "message", T: GT, oneof: "result" }]), BT = o.makeMessageType("agent.v1.EditPrLabelsSuccess", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9 }, { no: 2, name: "pr_number", kind: "scalar", T: 5 }, { no: 3, name: "message", kind: "scalar", T: 9 }]), GT = o.makeMessageType("agent.v1.EditPrLabelsError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), qT = o.makeMessageType("agent.v1.EditPrLabelsToolCall", () => [{ no: 1, name: "args", kind: "message", T: CT }, { no: 2, name: "result", kind: "message", T: FT }]), WT = o.makeMessageType("agent.v1.RecordCiInvestigationFinding", () => [{ no: 1, name: "check_name", kind: "scalar", T: 9 }, { no: 2, name: "details_url", kind: "scalar", T: 9, opt: true }, { no: 3, name: "tldr", kind: "scalar", T: 9 }, { no: 4, name: "root_cause", kind: "scalar", T: 9, opt: true }, { no: 5, name: "failing_signal", kind: "scalar", T: 9, opt: true }, { no: 6, name: "suggested_next_step", kind: "scalar", T: 9, opt: true }, { no: 7, name: "diff_relation", kind: "scalar", T: 9, opt: true }, { no: 8, name: "diff_relation_evidence", kind: "scalar", T: 9, opt: true }, { no: 9, name: "flake_assessment", kind: "scalar", T: 9, opt: true }, { no: 10, name: "flake_evidence", kind: "scalar", T: 9, opt: true }, { no: 11, name: "rerun_available", kind: "scalar", T: 8, opt: true }, { no: 12, name: "rerun_evidence", kind: "scalar", T: 9, opt: true }, { no: 13, name: "recommended_action", kind: "scalar", T: 9, opt: true }, { no: 14, name: "recommended_action_evidence", kind: "scalar", T: 9, opt: true }, { no: 15, name: "confidence", kind: "scalar", T: 9, opt: true }]), $T = o.makeMessageType("agent.v1.RecordCiInvestigationOverall", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "themes", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "recommended_action", kind: "scalar", T: 9, opt: true }, { no: 4, name: "recommended_action_evidence", kind: "scalar", T: 9, opt: true }, { no: 5, name: "check_keys", kind: "scalar", T: 9, repeated: true }]), JT = o.makeMessageType("agent.v1.RecordCiInvestigationFindingsArgs", () => [{ no: 1, name: "findings", kind: "message", T: WT, repeated: true }, { no: 2, name: "overall", kind: "message", T: $T, opt: true }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }]), HT = o.makeMessageType("agent.v1.RecordCiInvestigationFindingsSuccess", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }]), VT = o.makeMessageType("agent.v1.RecordCiInvestigationFindingsError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), YT = o.makeMessageType("agent.v1.RecordCiInvestigationFindingsResult", () => [{ no: 1, name: "success", kind: "message", T: HT, oneof: "result" }, { no: 2, name: "error", kind: "message", T: VT, oneof: "result" }]), KT = o.makeMessageType("agent.v1.RecordCiInvestigationFindingsToolCall", () => [{ no: 1, name: "args", kind: "message", T: JT }, { no: 2, name: "result", kind: "message", T: YT }]), zT = o.makeMessageType("agent.v1.SendMessageText", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }]), XT = o.makeMessageType("agent.v1.SendMessageAttachment", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "alt", kind: "scalar", T: 9, opt: true }]), jT = o.makeMessageType("agent.v1.SendMessageArgs", () => [{ no: 1, name: "text", kind: "message", T: zT, oneof: "message" }, { no: 2, name: "attachment", kind: "message", T: XT, oneof: "message" }]), QT = o.makeMessageType("agent.v1.SendMessageSuccess", () => [{ no: 1, name: "timestamp", kind: "scalar", T: 4 }, { no: 2, name: "message_id", kind: "scalar", T: 9 }]), ZT = o.makeMessageType("agent.v1.SendMessageError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), e9 = o.makeMessageType("agent.v1.SendMessageResult", () => [{ no: 1, name: "success", kind: "message", T: QT, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ZT, oneof: "result" }]), t9 = o.makeMessageType("agent.v1.SendMessageToolCall", () => [{ no: 1, name: "args", kind: "message", T: jT }, { no: 2, name: "result", kind: "message", T: e9 }]), n9 = o.makeMessageType("agent.v1.FetchCloudAgentDataArgs", () => [{ no: 4, name: "bc_ids", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "sources", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "statuses", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "include_team_wide", kind: "scalar", T: 8 }, { no: 9, name: "include_archived", kind: "scalar", T: 8 }, { no: 10, name: "limit", kind: "scalar", T: 5, opt: true }, { no: 12, name: "include_transcript", kind: "scalar", T: 8 }, { no: 13, name: "active_since", kind: "scalar", T: 9 }]), s9 = o.makeMessageType("agent.v1.FetchCloudAgentDataResult", () => [{ no: 1, name: "success", kind: "message", T: r9, oneof: "result" }, { no: 2, name: "error", kind: "message", T: a9, oneof: "result" }]), r9 = o.makeMessageType("agent.v1.FetchCloudAgentDataSuccess", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "agent_count", kind: "scalar", T: 5 }, { no: 3, name: "written_paths", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "unavailable_bc_ids", kind: "scalar", T: 9, repeated: true }]), a9 = o.makeMessageType("agent.v1.FetchCloudAgentDataError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), i9 = o.makeMessageType("agent.v1.FetchCloudAgentDataToolCall", () => [{ no: 1, name: "args", kind: "message", T: n9 }, { no: 2, name: "result", kind: "message", T: s9 }]), o9 = o.makeMessageType("agent.v1.SendToUserArgs", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }]), l9 = o.makeMessageType("agent.v1.SendToUserSuccess", []), c9 = o.makeMessageType("agent.v1.SendToUserError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), u9 = o.makeMessageType("agent.v1.SendToUserResult", () => [{ no: 1, name: "success", kind: "message", T: l9, oneof: "result" }, { no: 2, name: "error", kind: "message", T: c9, oneof: "result" }]), d9 = o.makeMessageType("agent.v1.SendToUserToolCall", () => [{ no: 1, name: "args", kind: "message", T: o9 }, { no: 2, name: "result", kind: "message", T: u9 }]), pt = o.makeMessageType("agent.v1.PiTruncation", () => [{ no: 1, name: "truncated", kind: "scalar", T: 8 }, { no: 2, name: "truncated_by", kind: "scalar", T: 9 }, { no: 3, name: "total_lines", kind: "scalar", T: 13 }, { no: 4, name: "output_lines", kind: "scalar", T: 13 }, { no: 5, name: "output_bytes", kind: "scalar", T: 13 }, { no: 6, name: "max_lines", kind: "scalar", T: 13, opt: true }, { no: 7, name: "max_bytes", kind: "scalar", T: 13, opt: true }, { no: 8, name: "first_line_exceeds_limit", kind: "scalar", T: 8 }, { no: 9, name: "last_line_partial", kind: "scalar", T: 8 }]), m9 = o.makeMessageType("agent.v1.PiReadToolCall", () => [{ no: 1, name: "args", kind: "message", T: h9 }, { no: 2, name: "result", kind: "message", T: g9 }]), h9 = o.makeMessageType("agent.v1.PiReadToolArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "offset", kind: "scalar", T: 5, opt: true }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }]), g9 = o.makeMessageType("agent.v1.PiReadToolResult", () => [{ no: 1, name: "success", kind: "message", T: f9, oneof: "result" }, { no: 2, name: "error", kind: "message", T: p9, oneof: "result" }]), f9 = o.makeMessageType("agent.v1.PiReadToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: pt, opt: true }]), p9 = o.makeMessageType("agent.v1.PiReadToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), T9 = o.makeMessageType("agent.v1.PiBashToolCall", () => [{ no: 1, name: "args", kind: "message", T: _9 }, { no: 2, name: "result", kind: "message", T: k9 }]), _9 = o.makeMessageType("agent.v1.PiBashToolArgs", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "timeout", kind: "scalar", T: 1, opt: true }]), k9 = o.makeMessageType("agent.v1.PiBashToolResult", () => [{ no: 1, name: "success", kind: "message", T: v9, oneof: "result" }, { no: 2, name: "error", kind: "message", T: E9, oneof: "result" }]), v9 = o.makeMessageType("agent.v1.PiBashToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: pt, opt: true }, { no: 3, name: "full_output_path", kind: "scalar", T: 9, opt: true }]), E9 = o.makeMessageType("agent.v1.PiBashToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: pt, opt: true }, { no: 3, name: "full_output_path", kind: "scalar", T: 9, opt: true }]), y9 = o.makeMessageType("agent.v1.PiEditReplacement", () => [{ no: 1, name: "old_text", kind: "scalar", T: 9 }, { no: 2, name: "new_text", kind: "scalar", T: 9 }]), S9 = o.makeMessageType("agent.v1.PiEditToolCall", () => [{ no: 1, name: "args", kind: "message", T: R9 }, { no: 2, name: "result", kind: "message", T: A9 }]), R9 = o.makeMessageType("agent.v1.PiEditToolArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "edits", kind: "message", T: y9, repeated: true }]), A9 = o.makeMessageType("agent.v1.PiEditToolResult", () => [{ no: 1, name: "success", kind: "message", T: w9, oneof: "result" }, { no: 2, name: "error", kind: "message", T: b9, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: I9, oneof: "result" }]), w9 = o.makeMessageType("agent.v1.PiEditToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "diff", kind: "scalar", T: 9 }, { no: 3, name: "patch", kind: "scalar", T: 9 }, { no: 4, name: "first_changed_line", kind: "scalar", T: 13, opt: true }]), b9 = o.makeMessageType("agent.v1.PiEditToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), I9 = o.makeMessageType("agent.v1.PiEditToolRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), N9 = o.makeMessageType("agent.v1.PiWriteToolCall", () => [{ no: 1, name: "args", kind: "message", T: D9 }, { no: 2, name: "result", kind: "message", T: O9 }]), D9 = o.makeMessageType("agent.v1.PiWriteToolArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }]), O9 = o.makeMessageType("agent.v1.PiWriteToolResult", () => [{ no: 1, name: "success", kind: "message", T: M9, oneof: "result" }, { no: 2, name: "error", kind: "message", T: L9, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: x9, oneof: "result" }]), M9 = o.makeMessageType("agent.v1.PiWriteToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }]), L9 = o.makeMessageType("agent.v1.PiWriteToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), x9 = o.makeMessageType("agent.v1.PiWriteToolRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), U9 = o.makeMessageType("agent.v1.PiGrepToolCall", () => [{ no: 1, name: "args", kind: "message", T: P9 }, { no: 2, name: "result", kind: "message", T: C9 }]), P9 = o.makeMessageType("agent.v1.PiGrepToolArgs", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "glob", kind: "scalar", T: 9, opt: true }, { no: 4, name: "ignore_case", kind: "scalar", T: 8, opt: true }, { no: 5, name: "literal", kind: "scalar", T: 8, opt: true }, { no: 6, name: "context", kind: "scalar", T: 5, opt: true }, { no: 7, name: "limit", kind: "scalar", T: 5, opt: true }]), C9 = o.makeMessageType("agent.v1.PiGrepToolResult", () => [{ no: 1, name: "success", kind: "message", T: F9, oneof: "result" }, { no: 2, name: "error", kind: "message", T: B9, oneof: "result" }]), F9 = o.makeMessageType("agent.v1.PiGrepToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: pt, opt: true }, { no: 3, name: "match_limit_reached", kind: "scalar", T: 13, opt: true }, { no: 4, name: "lines_truncated", kind: "scalar", T: 8 }]), B9 = o.makeMessageType("agent.v1.PiGrepToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), G9 = o.makeMessageType("agent.v1.PiFindToolCall", () => [{ no: 1, name: "args", kind: "message", T: q9 }, { no: 2, name: "result", kind: "message", T: W9 }]), q9 = o.makeMessageType("agent.v1.PiFindToolArgs", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }]), W9 = o.makeMessageType("agent.v1.PiFindToolResult", () => [{ no: 1, name: "success", kind: "message", T: $9, oneof: "result" }, { no: 2, name: "error", kind: "message", T: J9, oneof: "result" }]), $9 = o.makeMessageType("agent.v1.PiFindToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: pt, opt: true }, { no: 3, name: "result_limit_reached", kind: "scalar", T: 13, opt: true }]), J9 = o.makeMessageType("agent.v1.PiFindToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), H9 = o.makeMessageType("agent.v1.PiLsToolCall", () => [{ no: 1, name: "args", kind: "message", T: V9 }, { no: 2, name: "result", kind: "message", T: Y9 }]), V9 = o.makeMessageType("agent.v1.PiLsToolArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9, opt: true }, { no: 2, name: "limit", kind: "scalar", T: 5, opt: true }]), Y9 = o.makeMessageType("agent.v1.PiLsToolResult", () => [{ no: 1, name: "success", kind: "message", T: K9, oneof: "result" }, { no: 2, name: "error", kind: "message", T: z9, oneof: "result" }]), K9 = o.makeMessageType("agent.v1.PiLsToolSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: pt, opt: true }, { no: 3, name: "entry_limit_reached", kind: "scalar", T: 13, opt: true }]), z9 = o.makeMessageType("agent.v1.PiLsToolError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), X9 = o.makeMessageType("agent.v1.ConnectScmArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "github", kind: "message", T: j9, oneof: "target" }]), j9 = o.makeMessageType("agent.v1.ConnectScmGithub", () => [{ no: 1, name: "repository", kind: "message", T: Q9 }, { no: 2, name: "ghe_application", kind: "scalar", T: 9, opt: true }]), Q9 = o.makeMessageType("agent.v1.ConnectScmGithubRepository", () => [{ no: 1, name: "owner", kind: "scalar", T: 9 }, { no: 2, name: "repo", kind: "scalar", T: 9 }]), Z9 = o.makeMessageType("agent.v1.ConnectScmResult", () => [{ no: 1, name: "success", kind: "message", T: e_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: t_, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: n_, oneof: "result" }]), e_ = o.makeMessageType("agent.v1.ConnectScmSuccess", []), t_ = o.makeMessageType("agent.v1.ConnectScmError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), n_ = o.makeMessageType("agent.v1.ConnectScmRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), s_ = o.makeMessageType("agent.v1.ConnectScmToolCall", () => [{ no: 1, name: "args", kind: "message", T: X9 }, { no: 2, name: "result", kind: "message", T: Z9 }]), r_ = o.makeEnum("agent.v1.ConversationSearchSource", [{ no: 0, name: "CONVERSATION_SEARCH_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CONVERSATION_SEARCH_SOURCE_LOCAL", localName: "LOCAL" }, { no: 2, name: "CONVERSATION_SEARCH_SOURCE_CLOUD_CACHE", localName: "CLOUD_CACHE" }]), a_ = o.makeMessageType("agent.v1.ConversationSearchArgs", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }]), i_ = o.makeMessageType("agent.v1.ConversationSearchResult", () => [{ no: 1, name: "success", kind: "message", T: o_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: c_, oneof: "result" }]), o_ = o.makeMessageType("agent.v1.ConversationSearchSuccess", () => [{ no: 1, name: "hits", kind: "message", T: l_, repeated: true }, { no: 2, name: "truncated", kind: "scalar", T: 8 }, { no: 3, name: "partial", kind: "scalar", T: 8 }, { no: 4, name: "rebuilding", kind: "scalar", T: 8 }]), l_ = o.makeMessageType("agent.v1.ConversationSearchHit", () => [{ no: 1, name: "conversation_id", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "source", kind: "enum", T: o.getEnumType(r_) }, { no: 4, name: "updated_at_ms", kind: "scalar", T: 3 }, { no: 5, name: "snippet", kind: "scalar", T: 9, opt: true }]), c_ = o.makeMessageType("agent.v1.ConversationSearchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), u_ = o.makeMessageType("agent.v1.SearchConversationsToolCall", () => [{ no: 1, name: "args", kind: "message", T: a_ }, { no: 2, name: "result", kind: "message", T: i_ }]), Oc = o.makeEnum("agent.v1.GoalStatus", [{ no: 0, name: "GOAL_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "GOAL_STATUS_ACTIVE", localName: "ACTIVE" }, { no: 2, name: "GOAL_STATUS_PAUSED", localName: "PAUSED" }, { no: 3, name: "GOAL_STATUS_COMPLETE", localName: "COMPLETE" }, { no: 4, name: "GOAL_STATUS_CLEARED", localName: "CLEARED" }]), d_ = o.makeMessageType("agent.v1.CreateGoalArgs", () => [{ no: 1, name: "objective", kind: "scalar", T: 9 }]), m_ = o.makeMessageType("agent.v1.CreateGoalSuccess", []), Mc = o.makeMessageType("agent.v1.GoalError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), h_ = o.makeMessageType("agent.v1.CreateGoalResult", () => [{ no: 1, name: "success", kind: "message", T: m_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Mc, oneof: "result" }]), g_ = o.makeMessageType("agent.v1.CreateGoalToolCall", () => [{ no: 1, name: "args", kind: "message", T: d_ }, { no: 2, name: "result", kind: "message", T: h_ }]), f_ = o.makeMessageType("agent.v1.UpdateGoalArgs", () => [{ no: 1, name: "status", kind: "enum", T: o.getEnumType(Oc) }]), p_ = o.makeMessageType("agent.v1.UpdateGoalSuccess", () => [{ no: 1, name: "status", kind: "enum", T: o.getEnumType(Oc) }]), T_ = o.makeMessageType("agent.v1.UpdateGoalResult", () => [{ no: 1, name: "success", kind: "message", T: p_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Mc, oneof: "result" }]), __ = o.makeMessageType("agent.v1.UpdateGoalToolCall", () => [{ no: 1, name: "args", kind: "message", T: f_ }, { no: 2, name: "result", kind: "message", T: T_ }]), k_ = o.makeEnum("agent.v1.CreateAgentPlacementApprovalState", [{ no: 0, name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_REQUIRED", localName: "REQUIRED" }, { no: 2, name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_DENIED", localName: "DENIED" }]), v_ = o.makeMessageType("agent.v1.GetAgentStatusArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "agent_ids", kind: "scalar", T: 9, repeated: true }]), E_ = o.makeMessageType("agent.v1.GetAgentStatusWorker", () => [{ no: 1, name: "bc_id", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "lifecycle", kind: "scalar", T: 9 }, { no: 4, name: "turn_in_flight", kind: "scalar", T: 8 }, { no: 5, name: "last_terminal_turn_status", kind: "scalar", T: 9 }, { no: 6, name: "pr_url", kind: "scalar", T: 9 }, { no: 7, name: "last_activity_at_ms", kind: "scalar", T: 4 }]), y_ = o.makeMessageType("agent.v1.GetAgentStatusSuccess", () => [{ no: 1, name: "workers", kind: "message", T: E_, repeated: true }, { no: 2, name: "message", kind: "scalar", T: 9 }]), S_ = o.makeMessageType("agent.v1.GetAgentStatusError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), R_ = o.makeMessageType("agent.v1.GetAgentStatusResult", () => [{ no: 1, name: "success", kind: "message", T: y_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: S_, oneof: "result" }]), A_ = o.makeMessageType("agent.v1.GetAgentStatusToolCall", () => [{ no: 1, name: "args", kind: "message", T: v_ }, { no: 2, name: "result", kind: "message", T: R_ }]), w_ = o.makeMessageType("agent.v1.SendToAgentArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "agent_id", kind: "scalar", T: 9 }, { no: 3, name: "message", kind: "scalar", T: 9 }, { no: 4, name: "delivery", kind: "scalar", T: 9 }, { no: 5, name: "title", kind: "scalar", T: 9 }, { no: 6, name: "model", kind: "scalar", T: 9, opt: true }]), b_ = o.makeMessageType("agent.v1.SendToAgentSuccess", () => [{ no: 1, name: "worker_bc_id", kind: "scalar", T: 9 }, { no: 2, name: "delivered_as", kind: "scalar", T: 9 }, { no: 3, name: "message", kind: "scalar", T: 9 }]), I_ = o.makeMessageType("agent.v1.SendToAgentError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), N_ = o.makeMessageType("agent.v1.SendToAgentResult", () => [{ no: 1, name: "success", kind: "message", T: b_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: I_, oneof: "result" }]), D_ = o.makeMessageType("agent.v1.SendToAgentToolCall", () => [{ no: 1, name: "args", kind: "message", T: w_ }, { no: 2, name: "result", kind: "message", T: N_ }]), O_ = o.makeMessageType("agent.v1.ReadAgentTranscriptArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "agent_id", kind: "scalar", T: 9 }, { no: 3, name: "mode", kind: "scalar", T: 9 }, { no: 4, name: "max_turns", kind: "scalar", T: 13 }]), M_ = o.makeMessageType("agent.v1.ReadAgentTranscriptSuccess", () => [{ no: 1, name: "transcript", kind: "scalar", T: 9 }, { no: 2, name: "truncated", kind: "scalar", T: 8 }]), L_ = o.makeMessageType("agent.v1.ReadAgentTranscriptError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), x_ = o.makeMessageType("agent.v1.ReadAgentTranscriptResult", () => [{ no: 1, name: "success", kind: "message", T: M_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: L_, oneof: "result" }]), U_ = o.makeMessageType("agent.v1.ReadAgentTranscriptToolCall", () => [{ no: 1, name: "args", kind: "message", T: O_ }, { no: 2, name: "result", kind: "message", T: x_ }]), P_ = o.makeMessageType("agent.v1.CreateAgentArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "prompt", kind: "scalar", T: 9 }, { no: 3, name: "name", kind: "scalar", T: 9, opt: true }, { no: 4, name: "model", kind: "scalar", T: 9, opt: true }, { no: 5, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 6, name: "machine_type", kind: "scalar", T: 9, opt: true }, { no: 7, name: "worker_id", kind: "scalar", T: 9, opt: true }, { no: 8, name: "pool", kind: "scalar", T: 9, opt: true }, { no: 9, name: "labels", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 10, name: "environment_build_id", kind: "scalar", T: 9, opt: true }, { no: 11, name: "environment_id", kind: "scalar", T: 9, opt: true }]), C_ = o.makeMessageType("agent.v1.CreateAgentSuccess", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }, { no: 2, name: "message", kind: "scalar", T: 9 }]), F_ = o.makeMessageType("agent.v1.CreateAgentError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "placement_approval_state", kind: "enum", T: o.getEnumType(k_), opt: true }]), B_ = o.makeMessageType("agent.v1.CreateAgentResult", () => [{ no: 1, name: "success", kind: "message", T: C_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: F_, oneof: "result" }]), G_ = o.makeMessageType("agent.v1.CreateAgentToolCall", () => [{ no: 1, name: "args", kind: "message", T: P_ }, { no: 2, name: "result", kind: "message", T: B_ }]), q_ = o.makeMessageType("agent.v1.StopAgentArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "agent_id", kind: "scalar", T: 9 }]), W_ = o.makeMessageType("agent.v1.StopAgentSuccess", () => [{ no: 1, name: "worker_bc_id", kind: "scalar", T: 9 }, { no: 2, name: "message", kind: "scalar", T: 9 }]), $_ = o.makeMessageType("agent.v1.StopAgentError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), J_ = o.makeMessageType("agent.v1.StopAgentResult", () => [{ no: 1, name: "success", kind: "message", T: W_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: $_, oneof: "result" }]), H_ = o.makeMessageType("agent.v1.StopAgentToolCall", () => [{ no: 1, name: "args", kind: "message", T: q_ }, { no: 2, name: "result", kind: "message", T: J_ }]), V_ = o.makeEnum("agent.v1.WriteCanvasFailReason", [{ no: 0, name: "WRITE_CANVAS_FAIL_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "WRITE_CANVAS_FAIL_REASON_TYPECHECK_FAILED", localName: "TYPECHECK_FAILED" }, { no: 2, name: "WRITE_CANVAS_FAIL_REASON_COMPILE_FAILED", localName: "COMPILE_FAILED" }, { no: 3, name: "WRITE_CANVAS_FAIL_REASON_TOO_LARGE", localName: "TOO_LARGE" }, { no: 4, name: "WRITE_CANVAS_FAIL_REASON_UNAVAILABLE", localName: "UNAVAILABLE" }, { no: 5, name: "WRITE_CANVAS_FAIL_REASON_NOT_FOUND", localName: "NOT_FOUND" }, { no: 6, name: "WRITE_CANVAS_FAIL_REASON_REFUSED", localName: "REFUSED" }]), Y_ = o.makeEnum("agent.v1.ReadCanvasFailReason", [{ no: 0, name: "READ_CANVAS_FAIL_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "READ_CANVAS_FAIL_REASON_NOT_FOUND", localName: "NOT_FOUND" }, { no: 2, name: "READ_CANVAS_FAIL_REASON_UNAVAILABLE", localName: "UNAVAILABLE" }, { no: 3, name: "READ_CANVAS_FAIL_REASON_REFUSED", localName: "REFUSED" }, { no: 4, name: "READ_CANVAS_FAIL_REASON_INVALID_REFERENCE", localName: "INVALID_REFERENCE" }]), Lc = o.makeMessageType("agent.v1.CloudCanvasToolDiagnosticPosition", () => [{ no: 1, name: "line", kind: "scalar", T: 5 }, { no: 2, name: "character", kind: "scalar", T: 5 }]), K_ = o.makeMessageType("agent.v1.CloudCanvasToolDiagnosticRange", () => [{ no: 1, name: "start", kind: "message", T: Lc }, { no: 2, name: "end", kind: "message", T: Lc }]), z_ = o.makeMessageType("agent.v1.CloudCanvasToolDiagnostic", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "code", kind: "scalar", T: 9, opt: true }, { no: 3, name: "severity", kind: "scalar", T: 5, opt: true }, { no: 4, name: "range", kind: "message", T: K_, opt: true }]), X_ = o.makeMessageType("agent.v1.WriteCanvasArgs", () => [{ no: 1, name: "contents", kind: "scalar", T: 9 }, { no: 2, name: "canvas_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "title", kind: "scalar", T: 9, opt: true }]), j_ = o.makeMessageType("agent.v1.WriteCanvasSuccess", () => [{ no: 1, name: "canvas_id", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }, { no: 3, name: "url", kind: "scalar", T: 9 }]), Q_ = o.makeMessageType("agent.v1.WriteCanvasFailure", () => [{ no: 1, name: "reason", kind: "enum", T: o.getEnumType(V_) }, { no: 2, name: "diagnostics", kind: "message", T: z_, repeated: true }, { no: 3, name: "detail", kind: "scalar", T: 9, opt: true }]), Z_ = o.makeMessageType("agent.v1.WriteCanvasResult", () => [{ no: 1, name: "success", kind: "message", T: j_, oneof: "result" }, { no: 2, name: "failure", kind: "message", T: Q_, oneof: "result" }]), e5 = o.makeMessageType("agent.v1.WriteCanvasToolCall", () => [{ no: 1, name: "args", kind: "message", T: X_ }, { no: 2, name: "result", kind: "message", T: Z_ }]), t5 = o.makeMessageType("agent.v1.ReadCanvasArgs", () => [{ no: 1, name: "canvas_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "url", kind: "scalar", T: 9, opt: true }]), n5 = o.makeMessageType("agent.v1.ReadCanvasSuccess", () => [{ no: 1, name: "canvas_id", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }, { no: 3, name: "url", kind: "scalar", T: 9 }, { no: 4, name: "source", kind: "scalar", T: 9 }]), s5 = o.makeMessageType("agent.v1.ReadCanvasFailure", () => [{ no: 1, name: "reason", kind: "enum", T: o.getEnumType(Y_) }, { no: 2, name: "detail", kind: "scalar", T: 9, opt: true }]), r5 = o.makeMessageType("agent.v1.ReadCanvasResult", () => [{ no: 1, name: "success", kind: "message", T: n5, oneof: "result" }, { no: 2, name: "failure", kind: "message", T: s5, oneof: "result" }]), a5 = o.makeMessageType("agent.v1.ReadCanvasToolCall", () => [{ no: 1, name: "args", kind: "message", T: t5 }, { no: 2, name: "result", kind: "message", T: r5 }]), i5 = o.makeMessageType("agent.v1.GenerateVideoArgs", () => [{ no: 1, name: "prompt", kind: "scalar", T: 9 }, { no: 2, name: "file_path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "image_path", kind: "scalar", T: 9, opt: true }, { no: 4, name: "reference_image_paths", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "duration_seconds", kind: "scalar", T: 13, opt: true }, { no: 6, name: "aspect_ratio", kind: "scalar", T: 9, opt: true }, { no: 7, name: "resolution", kind: "scalar", T: 9, opt: true }]), o5 = o.makeMessageType("agent.v1.GenerateVideoResult", () => [{ no: 1, name: "success", kind: "message", T: l5, oneof: "result" }, { no: 2, name: "error", kind: "message", T: c5, oneof: "result" }]), l5 = o.makeMessageType("agent.v1.GenerateVideoSuccess", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "duration_seconds", kind: "scalar", T: 13 }]), c5 = o.makeMessageType("agent.v1.GenerateVideoError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), u5 = o.makeMessageType("agent.v1.GenerateVideoToolCall", () => [{ no: 1, name: "args", kind: "message", T: i5 }, { no: 2, name: "result", kind: "message", T: o5 }]), d5 = o.makeMessageType("agent.v1.XSearchArgs", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "from_date", kind: "scalar", T: 9, opt: true }, { no: 3, name: "to_date", kind: "scalar", T: 9, opt: true }, { no: 4, name: "allowed_x_handles", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "excluded_x_handles", kind: "scalar", T: 9, repeated: true }]), m5 = o.makeMessageType("agent.v1.XSearchResult", () => [{ no: 1, name: "success", kind: "message", T: h5, oneof: "result" }, { no: 2, name: "error", kind: "message", T: f5, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: p5, oneof: "result" }]), h5 = o.makeMessageType("agent.v1.XSearchSuccess", () => [{ no: 1, name: "answer", kind: "scalar", T: 9 }, { no: 2, name: "citations", kind: "message", T: g5, repeated: true }]), g5 = o.makeMessageType("agent.v1.XSearchCitation", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }]), f5 = o.makeMessageType("agent.v1.XSearchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), p5 = o.makeMessageType("agent.v1.XSearchRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), T5 = o.makeMessageType("agent.v1.XSearchToolCall", () => [{ no: 1, name: "args", kind: "message", T: d5 }, { no: 2, name: "result", kind: "message", T: m5 }]), _5 = o.makeMessageType("agent.v1.TaskArgs", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }, { no: 2, name: "prompt", kind: "scalar", T: 9 }, { no: 3, name: "subagent_type", kind: "message", T: Ig }, { no: 4, name: "model", kind: "scalar", T: 9, opt: true }, { no: 5, name: "resume", kind: "scalar", T: 9, opt: true }, { no: 6, name: "agent_id", kind: "scalar", T: 9, opt: true }, { no: 7, name: "attachments", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "mode", kind: "enum", T: o.getEnumType(bg) }, { no: 9, name: "responding_to_message_ids", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "environment", kind: "enum", T: o.getEnumType(Ag) }, { no: 11, name: "machine", kind: "message", T: k5, opt: true }]), k5 = o.makeMessageType("agent.v1.TargetMachine", () => [{ no: 1, name: "same_machine", kind: "message", T: v5, oneof: "machine" }, { no: 2, name: "new_cloud_vm", kind: "message", T: E5, oneof: "machine" }, { no: 3, name: "self_hosted_worker", kind: "message", T: y5, oneof: "machine" }, { no: 4, name: "self_hosted_pool", kind: "message", T: S5, oneof: "machine" }]), v5 = o.makeMessageType("agent.v1.SameMachineTarget", []), E5 = o.makeMessageType("agent.v1.NewCloudVmTarget", () => [{ no: 1, name: "environment_build_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "base_branch", kind: "scalar", T: 9, opt: true }]), y5 = o.makeMessageType("agent.v1.SelfHostedWorkerTarget", () => [{ no: 1, name: "worker_id", kind: "scalar", T: 9 }]), S5 = o.makeMessageType("agent.v1.SelfHostedPoolTarget", () => [{ no: 1, name: "pool", kind: "scalar", T: 9, opt: true }, { no: 2, name: "labels", kind: "message", T: R5, repeated: true }]), R5 = o.makeMessageType("agent.v1.SelfHostedWorkerLabel", () => [{ no: 1, name: "key", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }]), A5 = o.makeMessageType("agent.v1.TaskSuccess", () => [{ no: 1, name: "conversation_steps", kind: "message", T: B5, repeated: true }, { no: 2, name: "agent_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "is_background", kind: "scalar", T: 8 }, { no: 4, name: "duration_ms", kind: "scalar", T: 4, opt: true }, { no: 5, name: "result_suffix", kind: "scalar", T: 9, opt: true }, { no: 6, name: "background_reason", kind: "enum", T: o.getEnumType(wg) }, { no: 7, name: "transcript_path", kind: "scalar", T: 9, opt: true }]), w5 = o.makeMessageType("agent.v1.TaskError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), b5 = o.makeMessageType("agent.v1.TaskResult", () => [{ no: 1, name: "success", kind: "message", T: A5, oneof: "result" }, { no: 2, name: "error", kind: "message", T: w5, oneof: "result" }]), I5 = o.makeMessageType("agent.v1.TaskToolCall", () => [{ no: 1, name: "args", kind: "message", T: _5 }, { no: 2, name: "result", kind: "message", T: b5 }, { no: 3, name: "cloud_agent_bc_id", kind: "scalar", T: 9, opt: true }]), N5 = o.makeMessageType("agent.v1.SetActiveBranchArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "branch_name", kind: "scalar", T: 9 }]), D5 = o.makeMessageType("agent.v1.SetActiveBranchSuccess", []), O5 = o.makeMessageType("agent.v1.SetActiveBranchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), M5 = o.makeMessageType("agent.v1.SetActiveBranchResult", () => [{ no: 1, name: "success", kind: "message", T: D5, oneof: "result" }, { no: 2, name: "error", kind: "message", T: O5, oneof: "result" }]), L5 = o.makeMessageType("agent.v1.SetActiveBranchToolCall", () => [{ no: 1, name: "args", kind: "message", T: N5 }, { no: 2, name: "result", kind: "message", T: M5 }]), Ii = o.makeMessageType("agent.v1.ToolCall", () => [{ no: 1, name: "shell_tool_call", kind: "message", T: Tf, oneof: "tool" }, { no: 3, name: "delete_tool_call", kind: "message", T: bf, oneof: "tool" }, { no: 4, name: "glob_tool_call", kind: "message", T: Mf, oneof: "tool" }, { no: 5, name: "grep_tool_call", kind: "message", T: $f, oneof: "tool" }, { no: 8, name: "read_tool_call", kind: "message", T: jf, oneof: "tool" }, { no: 9, name: "update_todos_tool_call", kind: "message", T: sp, oneof: "tool" }, { no: 10, name: "read_todos_tool_call", kind: "message", T: lp, oneof: "tool" }, { no: 12, name: "edit_tool_call", kind: "message", T: Ep, oneof: "tool" }, { no: 13, name: "ls_tool_call", kind: "message", T: Dp, oneof: "tool" }, { no: 14, name: "read_lints_tool_call", kind: "message", T: Mp, oneof: "tool" }, { no: 15, name: "mcp_tool_call", kind: "message", T: l0, oneof: "tool" }, { no: 16, name: "sem_search_tool_call", kind: "message", T: f0, oneof: "tool" }, { no: 17, name: "create_plan_tool_call", kind: "message", T: v0, oneof: "tool" }, { no: 18, name: "web_search_tool_call", kind: "message", T: M0, oneof: "tool" }, { no: 19, name: "task_tool_call", kind: "message", T: I5, oneof: "tool" }, { no: 20, name: "list_mcp_resources_tool_call", kind: "message", T: L0, oneof: "tool" }, { no: 21, name: "read_mcp_resource_tool_call", kind: "message", T: x0, oneof: "tool" }, { no: 22, name: "apply_agent_diff_tool_call", kind: "message", T: U0, oneof: "tool" }, { no: 23, name: "ask_question_tool_call", kind: "message", T: q0, oneof: "tool" }, { no: 24, name: "fetch_tool_call", kind: "message", T: t2, oneof: "tool" }, { no: 25, name: "switch_mode_tool_call", kind: "message", T: o2, oneof: "tool" }, { no: 28, name: "generate_image_tool_call", kind: "message", T: m2, oneof: "tool" }, { no: 29, name: "record_screen_tool_call", kind: "message", T: E2, oneof: "tool" }, { no: 30, name: "computer_use_tool_call", kind: "message", T: q2, oneof: "tool" }, { no: 31, name: "write_shell_stdin_tool_call", kind: "message", T: V2, oneof: "tool" }, { no: 32, name: "reflect_tool_call", kind: "message", T: j2, oneof: "tool" }, { no: 33, name: "setup_vm_environment_tool_call", kind: "message", T: t4, oneof: "tool" }, { no: 34, name: "truncated_tool_call", kind: "message", T: F5, oneof: "tool" }, { no: 35, name: "start_grind_execution_tool_call", kind: "message", T: i4, oneof: "tool" }, { no: 36, name: "start_grind_planning_tool_call", kind: "message", T: d4, oneof: "tool" }, { no: 37, name: "web_fetch_tool_call", kind: "message", T: T4, oneof: "tool" }, { no: 38, name: "report_bugfix_results_tool_call", kind: "message", T: S4, oneof: "tool" }, { no: 39, name: "ai_attribution_tool_call", kind: "message", T: I4, oneof: "tool" }, { no: 40, name: "pr_management_tool_call", kind: "message", T: V4, oneof: "tool" }, { no: 41, name: "mcp_auth_tool_call", kind: "message", T: Q4, oneof: "tool" }, { no: 42, name: "await_tool_call", kind: "message", T: sT, oneof: "tool" }, { no: 43, name: "blame_by_file_path_tool_call", kind: "message", T: lT, oneof: "tool" }, { no: 44, name: "get_mcp_tools_tool_call", kind: "message", T: hT, oneof: "tool" }, { no: 45, name: "report_bug_tool_call", kind: "message", T: _T, oneof: "tool" }, { no: 46, name: "set_active_branch_tool_call", kind: "message", T: L5, oneof: "tool" }, { no: 48, name: "communicate_update_tool_call", kind: "message", T: ST, oneof: "tool" }, { no: 49, name: "send_final_summary_tool_call", kind: "message", T: IT, oneof: "tool" }, { no: 51, name: "replace_env_tool_call", kind: "message", T: PT, oneof: "tool" }, { no: 52, name: "edit_pr_labels_tool_call", kind: "message", T: qT, oneof: "tool" }, { no: 53, name: "record_ci_investigation_findings_tool_call", kind: "message", T: KT, oneof: "tool" }, { no: 55, name: "send_message_tool_call", kind: "message", T: t9, oneof: "tool" }, { no: 56, name: "fetch_cloud_agent_data_tool_call", kind: "message", T: i9, oneof: "tool" }, { no: 58, name: "send_to_user_tool_call", kind: "message", T: d9, oneof: "tool" }, { no: 61, name: "pi_read_tool_call", kind: "message", T: m9, oneof: "tool" }, { no: 62, name: "pi_bash_tool_call", kind: "message", T: T9, oneof: "tool" }, { no: 63, name: "pi_edit_tool_call", kind: "message", T: S9, oneof: "tool" }, { no: 64, name: "pi_write_tool_call", kind: "message", T: N9, oneof: "tool" }, { no: 65, name: "pi_grep_tool_call", kind: "message", T: U9, oneof: "tool" }, { no: 66, name: "pi_find_tool_call", kind: "message", T: G9, oneof: "tool" }, { no: 67, name: "pi_ls_tool_call", kind: "message", T: H9, oneof: "tool" }, { no: 68, name: "connect_scm_tool_call", kind: "message", T: s_, oneof: "tool" }, { no: 69, name: "search_conversations_tool_call", kind: "message", T: u_, oneof: "tool" }, { no: 70, name: "create_goal_tool_call", kind: "message", T: g_, oneof: "tool" }, { no: 71, name: "update_goal_tool_call", kind: "message", T: __, oneof: "tool" }, { no: 73, name: "get_agent_status_tool_call", kind: "message", T: A_, oneof: "tool" }, { no: 74, name: "send_to_agent_tool_call", kind: "message", T: D_, oneof: "tool" }, { no: 75, name: "read_agent_transcript_tool_call", kind: "message", T: U_, oneof: "tool" }, { no: 76, name: "create_agent_tool_call", kind: "message", T: G_, oneof: "tool" }, { no: 77, name: "stop_agent_tool_call", kind: "message", T: H_, oneof: "tool" }, { no: 79, name: "write_canvas_tool_call", kind: "message", T: e5, oneof: "tool" }, { no: 80, name: "read_canvas_tool_call", kind: "message", T: a5, oneof: "tool" }, { no: 81, name: "generate_video_tool_call", kind: "message", T: u5, oneof: "tool" }, { no: 82, name: "x_search_tool_call", kind: "message", T: T5, oneof: "tool" }, { no: 54, name: "hook_additional_contexts", kind: "message", T: Vg, repeated: true }, { no: 57, name: "tool_call_id", kind: "scalar", T: 9, opt: true }, { no: 59, name: "started_at_ms", kind: "scalar", T: 4, opt: true }, { no: 60, name: "completed_at_ms", kind: "scalar", T: 4, opt: true }]), x5 = o.makeMessageType("agent.v1.TruncatedToolCallArgs", []), U5 = o.makeMessageType("agent.v1.TruncatedToolCallSuccess", []), P5 = o.makeMessageType("agent.v1.TruncatedToolCallError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), C5 = o.makeMessageType("agent.v1.TruncatedToolCallResult", () => [{ no: 1, name: "success", kind: "message", T: U5, oneof: "result" }, { no: 2, name: "error", kind: "message", T: P5, oneof: "result" }]), F5 = o.makeMessageType("agent.v1.TruncatedToolCall", () => [{ no: 1, name: "original_step_blob_id", kind: "scalar", T: 12 }, { no: 2, name: "args", kind: "message", T: x5 }, { no: 3, name: "result", kind: "message", T: C5 }, { no: 4, name: "original_step_size_bytes", kind: "scalar", T: 13 }, { no: 5, name: "preview", kind: "message", T: Ii }]), B5 = o.makeMessageType("agent.v1.ConversationStep", () => [{ no: 1, name: "assistant_message", kind: "message", T: G5, oneof: "message" }, { no: 2, name: "tool_call", kind: "message", T: Ii, oneof: "message" }, { no: 3, name: "thinking_message", kind: "message", T: q5, oneof: "message" }]), G5 = o.makeMessageType("agent.v1.AssistantMessage", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "started_at_ms", kind: "scalar", T: 4, opt: true }, { no: 3, name: "completed_at_ms", kind: "scalar", T: 4, opt: true }]), q5 = o.makeMessageType("agent.v1.ThinkingMessage", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "duration_ms", kind: "scalar", T: 13 }, { no: 3, name: "started_at_ms", kind: "scalar", T: 4, opt: true }, { no: 4, name: "completed_at_ms", kind: "scalar", T: 4, opt: true }]);
function Ni() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var ze = Ni();
function xc(e) {
  ze = e;
}
var Uc = /[&<>"']/, W5 = new RegExp(Uc.source, "g"), Pc = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, $5 = new RegExp(Pc.source, "g"), J5 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Cc = (e) => J5[e];
function de(e, t) {
  if (t) {
    if (Uc.test(e)) return e.replace(W5, Cc);
  } else if (Pc.test(e)) return e.replace($5, Cc);
  return e;
}
var H5 = /(^|[^\[])\^/g;
function P(e, t) {
  let n = typeof e == "string" ? e : e.source;
  t = t || "";
  const s = { replace: (r, a) => {
    let i = typeof a == "string" ? a : a.source;
    return i = i.replace(H5, "$1"), n = n.replace(r, i), s;
  }, getRegex: () => new RegExp(n, t) };
  return s;
}
function Fc(e) {
  try {
    e = encodeURI(e).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return e;
}
var sn = { exec: () => null };
function Bc(e, t) {
  const n = e.replace(/\|/g, (a, i, l) => {
    let c = false, u = i;
    for (; --u >= 0 && l[u] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), s = n.split(/ \|/);
  let r = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s[s.length - 1].trim() && s.pop(), t) if (s.length > t) s.splice(t);
  else for (; s.length < t; ) s.push("");
  for (; r < s.length; r++) s[r] = s[r].trim().replace(/\\\|/g, "|");
  return s;
}
function rn(e, t, n) {
  const s = e.length;
  if (s === 0) return "";
  let r = 0;
  for (; r < s; ) {
    const a = e.charAt(s - r - 1);
    if (a === t && !n) r++;
    else if (a !== t && n) r++;
    else break;
  }
  return e.slice(0, s - r);
}
function V5(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let s = 0; s < e.length; s++) if (e[s] === "\\") s++;
  else if (e[s] === t[0]) n++;
  else if (e[s] === t[1] && (n--, n < 0)) return s;
  return -1;
}
function Gc(e, t, n, s) {
  const r = t.href, a = t.title ? de(t.title) : null, i = e[1].replace(/\\([\[\]])/g, "$1");
  if (e[0].charAt(0) !== "!") {
    s.state.inLink = true;
    const l = { type: "link", raw: n, href: r, title: a, text: i, tokens: s.inlineTokens(i) };
    return s.state.inLink = false, l;
  }
  return { type: "image", raw: n, href: r, title: a, text: de(i) };
}
function Y5(e, t) {
  const n = e.match(/^(\s+)(?:```)/);
  if (n === null) return t;
  const s = n[1];
  return t.split(`
`).map((r) => {
    const a = r.match(/^\s+/);
    if (a === null) return r;
    const [i] = a;
    return i.length >= s.length ? r.slice(s.length) : r;
  }).join(`
`);
}
var Vr = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || ze;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const n = t[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : rn(n, `
`) };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], s = Y5(n, t[3] || "");
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: s };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (/#$/.test(n)) {
        const s = rn(n, "#");
        (this.options.pedantic || !s || / $/.test(s)) && (n = s.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: rn(t[0], `
`) };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = rn(t[0], `
`).split(`
`), s = "", r = "";
      const a = [];
      for (; n.length > 0; ) {
        let i = false;
        const l = [];
        let c;
        for (c = 0; c < n.length; c++) if (/^ {0,3}>/.test(n[c])) l.push(n[c]), i = true;
        else if (!i) l.push(n[c]);
        else break;
        n = n.slice(c);
        const u = l.join(`
`), d = u.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`).replace(/^ {0,3}>[ \t]?/gm, "");
        s = s ? `${s}
${u}` : u, r = r ? `${r}
${d}` : d;
        const m = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(d, a, true), this.lexer.state.top = m, n.length === 0) break;
        const g = a[a.length - 1];
        if (g?.type === "code") break;
        if (g?.type === "blockquote") {
          const p = g, _ = p.raw + `
` + n.join(`
`), R = this.blockquote(_);
          a[a.length - 1] = R, s = s.substring(0, s.length - p.raw.length) + R.raw, r = r.substring(0, r.length - p.text.length) + R.text;
          break;
        } else if (g?.type === "list") {
          const p = g, _ = p.raw + `
` + n.join(`
`), R = this.list(_);
          a[a.length - 1] = R, s = s.substring(0, s.length - g.raw.length) + R.raw, r = r.substring(0, r.length - p.raw.length) + R.raw, n = _.substring(a[a.length - 1].raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: a, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const s = n.length > 1, r = { type: "list", raw: "", ordered: s, start: s ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
      const a = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let i = false;
      for (; e; ) {
        let l = false, c = "", u = "";
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        c = t[0], e = e.substring(c.length);
        let d = t[2].split(`
`, 1)[0].replace(/^\t+/, (I) => " ".repeat(3 * I.length)), m = e.split(`
`, 1)[0], g = !d.trim(), p = 0;
        if (this.options.pedantic ? (p = 2, u = d.trimStart()) : g ? p = t[1].length + 1 : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, u = d.slice(p), p += t[1].length), g && /^ *$/.test(m) && (c += m + `
`, e = e.substring(m.length + 1), l = true), !l) {
          const I = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), F = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), $ = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), G = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const Pe = e.split(`
`, 1)[0];
            if (m = Pe, this.options.pedantic && (m = m.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), $.test(m) || G.test(m) || I.test(m) || F.test(e)) break;
            if (m.search(/[^ ]/) >= p || !m.trim()) u += `
` + m.slice(p);
            else {
              if (g || d.search(/[^ ]/) >= 4 || $.test(d) || G.test(d) || F.test(d)) break;
              u += `
` + m;
            }
            !g && !m.trim() && (g = true), c += Pe + `
`, e = e.substring(Pe.length + 1), d = m.slice(p);
          }
        }
        r.loose || (i ? r.loose = true : /\n *\n *$/.test(c) && (i = true));
        let _ = null, R;
        this.options.gfm && (_ = /^\[[ xX]\] /.exec(u), _ && (R = _[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), r.items.push({ type: "list_item", raw: c, task: !!_, checked: R, loose: false, text: u, tokens: [] }), r.raw += c;
      }
      r.items[r.items.length - 1].raw = r.items[r.items.length - 1].raw.trimEnd(), r.items[r.items.length - 1].text = r.items[r.items.length - 1].text.trimEnd(), r.raw = r.raw.trimEnd();
      for (let l = 0; l < r.items.length; l++) if (this.lexer.state.top = false, r.items[l].tokens = this.lexer.blockTokens(r.items[l].text, []), !r.loose) {
        const c = r.items[l].tokens.filter((d) => d.type === "space"), u = c.length > 0 && c.some((d) => /\n.*\n/.test(d.raw));
        r.loose = u;
      }
      if (r.loose) for (let l = 0; l < r.items.length; l++) r.items[l].loose = true;
      return r;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t) return { type: "html", block: true, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const n = t[1].toLowerCase().replace(/\s+/g, " "), s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: s, title: r };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const n = Bc(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), r = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (const i of s) /^ *-+: *$/.test(i) ? a.align.push("right") : /^ *:-+: *$/.test(i) ? a.align.push("center") : /^ *:-+ *$/.test(i) ? a.align.push("left") : a.align.push(null);
      for (let i = 0; i < n.length; i++) a.header.push({ text: n[i], tokens: this.lexer.inline(n[i]), header: true, align: a.align[i] });
      for (const i of r) a.rows.push(Bc(i, a.header.length).map((l, c) => ({ text: l, tokens: this.lexer.inline(l), header: false, align: a.align[c] })));
      return a;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: de(t[1]) };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const n = t[2].trim();
      if (!this.options.pedantic && /^</.test(n)) {
        if (!/>$/.test(n)) return;
        const a = rn(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        const a = V5(t[2], "()");
        if (a > -1) {
          const l = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, l).trim(), t[3] = "";
        }
      }
      let s = t[2], r = "";
      if (this.options.pedantic) {
        const a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        a && (s = a[1], r = a[3]);
      } else r = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (this.options.pedantic && !/>$/.test(n) ? s = s.slice(1) : s = s.slice(1, -1)), Gc(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: r && r.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      const s = (n[2] || n[1]).replace(/\s+/g, " "), r = t[s.toLowerCase()];
      if (!r) {
        const a = n[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return Gc(n, r, n[0], this.lexer);
    }
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || s[3] && n.match(/[\p{L}\p{N}]/u)) return;
    if (!(s[1] || s[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const a = [...s[0]].length - 1;
      let i, l, c = a, u = 0;
      const d = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, t = t.slice(-1 * e.length + a); (s = d.exec(t)) != null; ) {
        if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i) continue;
        if (l = [...i].length, s[3] || s[4]) {
          c += l;
          continue;
        } else if ((s[5] || s[6]) && a % 3 && !((a + l) % 3)) {
          u += l;
          continue;
        }
        if (c -= l, c > 0) continue;
        l = Math.min(l, l + c + u);
        const m = [...s[0]][0].length, g = e.slice(0, a + s.index + m + l);
        if (Math.min(a, l) % 2) {
          const _ = g.slice(1, -1);
          return { type: "em", raw: g, text: _, tokens: this.lexer.inlineTokens(_) };
        }
        const p = g.slice(2, -2);
        return { type: "strong", raw: g, text: p, tokens: this.lexer.inlineTokens(p) };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(n), r = /^ /.test(n) && / $/.test(n);
      return s && r && (n = n.substring(1, n.length - 1)), n = de(n, true), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = de(t[1]), s = "mailto:" + n) : (n = de(t[1]), s = n), { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, s;
      if (t[2] === "@") n = de(t[0]), s = "mailto:" + n;
      else {
        let r;
        do
          r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (r !== t[0]);
        n = de(t[0]), t[1] === "www." ? s = "http://" + t[0] : s = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: s, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let n;
      return this.lexer.state.inRawBlock ? n = t[0] : n = de(t[0]), { type: "text", raw: t[0], text: n };
    }
  }
}, K5 = /^(?: *(?:\n|$))+/, z5 = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, X5 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, an = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, j5 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, qc = /(?:[*+-]|\d{1,9}[.)])/, Wc = P(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, qc).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Di = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Q5 = /^[^\n]+/, Oi = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Z5 = P(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Oi).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), e7 = P(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, qc).getRegex(), Yr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Mi = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, t7 = P("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Mi).replace("tag", Yr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), $c = P(Di).replace("hr", an).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Yr).getRegex(), n7 = P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", $c).getRegex(), Li = { blockquote: n7, code: z5, def: Z5, fences: X5, heading: j5, hr: an, html: t7, lheading: Wc, list: e7, newline: K5, paragraph: $c, table: sn, text: Q5 }, Jc = P("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", an).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Yr).getRegex(), s7 = { ...Li, table: Jc, paragraph: P(Di).replace("hr", an).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Jc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Yr).getRegex() }, r7 = { ...Li, html: P(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Mi).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: sn, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: P(Di).replace("hr", an).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Wc).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Hc = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, a7 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Vc = /^( {2,}|\\)\n(?!\s*$)/, i7 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, on = "\\p{P}\\p{S}", o7 = P(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, on).getRegex(), l7 = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, c7 = P(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, on).getRegex(), u7 = P("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, on).getRegex(), d7 = P("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, on).getRegex(), m7 = P(/\\([punct])/, "gu").replace(/punct/g, on).getRegex(), h7 = P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), g7 = P(Mi).replace("(?:-->|$)", "-->").getRegex(), f7 = P("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", g7).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Kr = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, p7 = P(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Kr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Yc = P(/^!?\[(label)\]\[(ref)\]/).replace("label", Kr).replace("ref", Oi).getRegex(), Kc = P(/^!?\[(ref)\](?:\[\])?/).replace("ref", Oi).getRegex(), T7 = P("reflink|nolink(?!\\()", "g").replace("reflink", Yc).replace("nolink", Kc).getRegex(), xi = { _backpedal: sn, anyPunctuation: m7, autolink: h7, blockSkip: l7, br: Vc, code: a7, del: sn, emStrongLDelim: c7, emStrongRDelimAst: u7, emStrongRDelimUnd: d7, escape: Hc, link: p7, nolink: Kc, punctuation: o7, reflink: Yc, reflinkSearch: T7, tag: f7, text: i7, url: sn }, _7 = { ...xi, link: P(/^!?\[(label)\]\((.*?)\)/).replace("label", Kr).getRegex(), reflink: P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Kr).getRegex() }, Ui = { ...xi, escape: P(Hc).replace("])", "~|])").getRegex(), url: P(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, k7 = { ...Ui, br: P(Vc).replace("{2,}", "*").getRegex(), text: P(Ui.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, zr = { normal: Li, gfm: s7, pedantic: r7 }, ln = { normal: xi, gfm: Ui, breaks: k7, pedantic: _7 }, Xe = class Zi {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || ze, this.options.tokenizer = this.options.tokenizer || new Vr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    const n = { block: zr.normal, inline: ln.normal };
    this.options.pedantic ? (n.block = zr.pedantic, n.inline = ln.pedantic) : this.options.gfm && (n.block = zr.gfm, this.options.breaks ? n.inline = ln.breaks : n.inline = ln.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: zr, inline: ln };
  }
  static lex(t, n) {
    return new Zi(n).lex(t);
  }
  static lexInline(t, n) {
    return new Zi(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(/\r\n|\r/g, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const s = this.inlineQueue[n];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], s = false) {
    this.options.pedantic ? t = t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t = t.replace(/^( *)(\t+)/gm, (l, c, u) => c + "    ".repeat(u.length));
    let r, a, i;
    for (; t; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((l) => (r = l.call({ lexer: this }, t, n)) ? (t = t.substring(r.raw.length), n.push(r), true) : false))) {
      if (r = this.tokenizer.space(t)) {
        t = t.substring(r.raw.length), r.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += `
` : n.push(r);
        continue;
      }
      if (r = this.tokenizer.code(t)) {
        t = t.substring(r.raw.length), a = n[n.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : n.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.list(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.html(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.def(t)) {
        t = t.substring(r.raw.length), a = n[n.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + r.raw, a.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title });
        continue;
      }
      if (r = this.tokenizer.table(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(t)) {
        t = t.substring(r.raw.length), n.push(r);
        continue;
      }
      if (i = t, this.options.extensions && this.options.extensions.startBlock) {
        let l = 1 / 0;
        const c = t.slice(1);
        let u;
        this.options.extensions.startBlock.forEach((d) => {
          u = d.call({ lexer: this }, c), typeof u == "number" && u >= 0 && (l = Math.min(l, u));
        }), l < 1 / 0 && l >= 0 && (i = t.substring(0, l + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(i))) {
        a = n[n.length - 1], s && a?.type === "paragraph" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : n.push(r), s = i.length !== t.length, t = t.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(t)) {
        t = t.substring(r.raw.length), a = n[n.length - 1], a && a.type === "text" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : n.push(r);
        continue;
      }
      if (t) {
        const l = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(l);
          break;
        } else throw new Error(l);
      }
    }
    return this.state.top = true, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  inlineTokens(t, n = []) {
    let s, r, a, i = t, l, c, u;
    if (this.tokens.links) {
      const d = Object.keys(this.tokens.links);
      if (d.length > 0) for (; (l = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) d.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (l = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) i = i.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (l = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, l.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; t; ) if (c || (u = ""), c = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((d) => (s = d.call({ lexer: this }, t, n)) ? (t = t.substring(s.raw.length), n.push(s), true) : false))) {
      if (s = this.tokenizer.escape(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.tag(t)) {
        t = t.substring(s.raw.length), r = n[n.length - 1], r && s.type === "text" && r.type === "text" ? (r.raw += s.raw, r.text += s.text) : n.push(s);
        continue;
      }
      if (s = this.tokenizer.link(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(s.raw.length), r = n[n.length - 1], r && s.type === "text" && r.type === "text" ? (r.raw += s.raw, r.text += s.text) : n.push(s);
        continue;
      }
      if (s = this.tokenizer.emStrong(t, i, u)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.codespan(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.br(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.del(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (s = this.tokenizer.autolink(t)) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (!this.state.inLink && (s = this.tokenizer.url(t))) {
        t = t.substring(s.raw.length), n.push(s);
        continue;
      }
      if (a = t, this.options.extensions && this.options.extensions.startInline) {
        let d = 1 / 0;
        const m = t.slice(1);
        let g;
        this.options.extensions.startInline.forEach((p) => {
          g = p.call({ lexer: this }, m), typeof g == "number" && g >= 0 && (d = Math.min(d, g));
        }), d < 1 / 0 && d >= 0 && (a = t.substring(0, d + 1));
      }
      if (s = this.tokenizer.inlineText(a)) {
        t = t.substring(s.raw.length), s.raw.slice(-1) !== "_" && (u = s.raw.slice(-1)), c = true, r = n[n.length - 1], r && r.type === "text" ? (r.raw += s.raw, r.text += s.text) : n.push(s);
        continue;
      }
      if (t) {
        const d = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        } else throw new Error(d);
      }
    }
    return n;
  }
}, cn = class {
  options;
  parser;
  constructor(e) {
    this.options = e || ze;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    const s = (t || "").match(/^\S*/)?.[0], r = e.replace(/\n$/, "") + `
`;
    return s ? '<pre><code class="language-' + de(s) + '">' + (n ? r : de(r, true)) + `</code></pre>
` : "<pre><code>" + (n ? r : de(r, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    const t = e.ordered, n = e.start;
    let s = "";
    for (let i = 0; i < e.items.length; i++) {
      const l = e.items[i];
      s += this.listitem(l);
    }
    const r = t ? "ol" : "ul", a = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + a + `>
` + s + "</" + r + `>
`;
  }
  listitem(e) {
    let t = "";
    if (e.task) {
      const n = this.checkbox({ checked: !!e.checked });
      e.loose ? e.tokens.length > 0 && e.tokens[0].type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + e.tokens[0].tokens[0].text)) : e.tokens.unshift({ type: "text", raw: n + " ", text: n + " " }) : t += n + " ";
    }
    return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
    t += this.tablerow({ text: n });
    let s = "";
    for (let r = 0; r < e.rows.length; r++) {
      const a = e.rows[r];
      n = "";
      for (let i = 0; i < a.length; i++) n += this.tablecell(a[i]);
      s += this.tablerow({ text: n });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    const t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${e}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    const s = this.parser.parseInline(n), r = Fc(e);
    if (r === null) return s;
    e = r;
    let a = '<a href="' + e + '"';
    return t && (a += ' title="' + t + '"'), a += ">" + s + "</a>", a;
  }
  image({ href: e, title: t, text: n }) {
    const s = Fc(e);
    if (s === null) return n;
    e = s;
    let r = `<img src="${e}" alt="${n}"`;
    return t && (r += ` title="${t}"`), r += ">", r;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : e.text;
  }
}, Pi = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
}, je = class eo {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || ze, this.options.renderer = this.options.renderer || new cn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Pi();
  }
  static parse(t, n) {
    return new eo(n).parse(t);
  }
  static parseInline(t, n) {
    return new eo(n).parseInline(t);
  }
  parse(t, n = true) {
    let s = "";
    for (let r = 0; r < t.length; r++) {
      const a = t[r];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        const l = a, c = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (c !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(l.type)) {
          s += c || "";
          continue;
        }
      }
      const i = a;
      switch (i.type) {
        case "space": {
          s += this.renderer.space(i);
          continue;
        }
        case "hr": {
          s += this.renderer.hr(i);
          continue;
        }
        case "heading": {
          s += this.renderer.heading(i);
          continue;
        }
        case "code": {
          s += this.renderer.code(i);
          continue;
        }
        case "table": {
          s += this.renderer.table(i);
          continue;
        }
        case "blockquote": {
          s += this.renderer.blockquote(i);
          continue;
        }
        case "list": {
          s += this.renderer.list(i);
          continue;
        }
        case "html": {
          s += this.renderer.html(i);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(i);
          continue;
        }
        case "text": {
          let l = i, c = this.renderer.text(l);
          for (; r + 1 < t.length && t[r + 1].type === "text"; ) l = t[++r], c += `
` + this.renderer.text(l);
          n ? s += this.renderer.paragraph({ type: "paragraph", raw: c, text: c, tokens: [{ type: "text", raw: c, text: c }] }) : s += c;
          continue;
        }
        default: {
          const l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return s;
  }
  parseInline(t, n) {
    n = n || this.renderer;
    let s = "";
    for (let r = 0; r < t.length; r++) {
      const a = t[r];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        const l = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (l !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          s += l || "";
          continue;
        }
      }
      const i = a;
      switch (i.type) {
        case "escape": {
          s += n.text(i);
          break;
        }
        case "html": {
          s += n.html(i);
          break;
        }
        case "link": {
          s += n.link(i);
          break;
        }
        case "image": {
          s += n.image(i);
          break;
        }
        case "strong": {
          s += n.strong(i);
          break;
        }
        case "em": {
          s += n.em(i);
          break;
        }
        case "codespan": {
          s += n.codespan(i);
          break;
        }
        case "br": {
          s += n.br(i);
          break;
        }
        case "del": {
          s += n.del(i);
          break;
        }
        case "text": {
          s += n.text(i);
          break;
        }
        default: {
          const l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return s;
  }
}, Xr = class {
  options;
  constructor(e) {
    this.options = e || ze;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
}, v7 = class {
  defaults = Ni();
  options = this.setOptions;
  parse = this.parseMarkdown(Xe.lex, je.parse);
  parseInline = this.parseMarkdown(Xe.lexInline, je.parseInline);
  Parser = je;
  Renderer = cn;
  TextRenderer = Pi;
  Lexer = Xe;
  Tokenizer = Vr;
  Hooks = Xr;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (const s of e) switch (n = n.concat(t.call(this, s)), s.type) {
      case "table": {
        const r = s;
        for (const a of r.header) n = n.concat(this.walkTokens(a.tokens, t));
        for (const a of r.rows) for (const i of a) n = n.concat(this.walkTokens(i.tokens, t));
        break;
      }
      case "list": {
        const r = s;
        n = n.concat(this.walkTokens(r.items, t));
        break;
      }
      default: {
        const r = s;
        this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((a) => {
          const i = r[a].flat(1 / 0);
          n = n.concat(this.walkTokens(i, t));
        }) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, t)));
      }
    }
    return n;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      const s = { ...n };
      if (s.async = this.defaults.async || s.async || false, n.extensions && (n.extensions.forEach((r) => {
        if (!r.name) throw new Error("extension name required");
        if ("renderer" in r) {
          const a = t.renderers[r.name];
          a ? t.renderers[r.name] = function(...i) {
            let l = r.renderer.apply(this, i);
            return l === false && (l = a.apply(this, i)), l;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          const a = t[r.level];
          a ? a.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), s.extensions = t), n.renderer) {
        const r = this.defaults.renderer || new cn(this.defaults);
        for (const a in n.renderer) {
          if (!(a in r)) throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a)) continue;
          const i = a, l = n.renderer[i], c = r[i];
          r[i] = (...u) => {
            let d = l.apply(r, u);
            return d === false && (d = c.apply(r, u)), d || "";
          };
        }
        s.renderer = r;
      }
      if (n.tokenizer) {
        const r = this.defaults.tokenizer || new Vr(this.defaults);
        for (const a in n.tokenizer) {
          if (!(a in r)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          const i = a, l = n.tokenizer[i], c = r[i];
          r[i] = (...u) => {
            let d = l.apply(r, u);
            return d === false && (d = c.apply(r, u)), d;
          };
        }
        s.tokenizer = r;
      }
      if (n.hooks) {
        const r = this.defaults.hooks || new Xr();
        for (const a in n.hooks) {
          if (!(a in r)) throw new Error(`hook '${a}' does not exist`);
          if (a === "options") continue;
          const i = a, l = n.hooks[i], c = r[i];
          Xr.passThroughHooks.has(a) ? r[i] = (u) => {
            if (this.defaults.async) return Promise.resolve(l.call(r, u)).then((m) => c.call(r, m));
            const d = l.call(r, u);
            return c.call(r, d);
          } : r[i] = (...u) => {
            let d = l.apply(r, u);
            return d === false && (d = c.apply(r, u)), d;
          };
        }
        s.hooks = r;
      }
      if (n.walkTokens) {
        const r = this.defaults.walkTokens, a = n.walkTokens;
        s.walkTokens = function(i) {
          let l = [];
          return l.push(a.call(this, i)), r && (l = l.concat(r.call(this, i))), l;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return Xe.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return je.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e, t) {
    return (s, r) => {
      const a = { ...r }, i = { ...this.defaults, ...a }, l = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === true && a.async === false) return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof s > "u" || s === null) return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof s != "string") return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
      if (i.hooks && (i.hooks.options = i), i.async) return Promise.resolve(i.hooks ? i.hooks.preprocess(s) : s).then((c) => e(c, i)).then((c) => i.hooks ? i.hooks.processAllTokens(c) : c).then((c) => i.walkTokens ? Promise.all(this.walkTokens(c, i.walkTokens)).then(() => c) : c).then((c) => t(c, i)).then((c) => i.hooks ? i.hooks.postprocess(c) : c).catch(l);
      try {
        i.hooks && (s = i.hooks.preprocess(s));
        let c = e(s, i);
        i.hooks && (c = i.hooks.processAllTokens(c)), i.walkTokens && this.walkTokens(c, i.walkTokens);
        let u = t(c, i);
        return i.hooks && (u = i.hooks.postprocess(u)), u;
      } catch (c) {
        return l(c);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const s = "<p>An error occurred:</p><pre>" + de(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(s) : s;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
}, Qe = new v7();
function U(e, t) {
  return Qe.parse(e, t);
}
U.options = U.setOptions = function(e) {
  return Qe.setOptions(e), U.defaults = Qe.defaults, xc(U.defaults), U;
}, U.getDefaults = Ni, U.defaults = ze, U.use = function(...e) {
  return Qe.use(...e), U.defaults = Qe.defaults, xc(U.defaults), U;
}, U.walkTokens = function(e, t) {
  return Qe.walkTokens(e, t);
}, U.parseInline = Qe.parseInline, U.Parser = je, U.parser = je.parse, U.Renderer = cn, U.TextRenderer = Pi, U.Lexer = Xe, U.lexer = Xe.lex, U.Tokenizer = Vr, U.Hooks = Xr, U.parse = U;
var vk = U.options, Ek = U.setOptions, yk = U.use, Sk = U.walkTokens, Rk = U.parseInline, E7 = U, Ak = je.parse, wk = Xe.lex, y7 = /* @__PURE__ */ new Map([["&quot;", '"'], ["&nbsp;", " "], ["&amp;", "&"], ["&#39;", "'"], ["&lt;", "<"], ["&gt;", ">"]]);
function jr(e) {
  const t = new cn();
  return t.code = ({ text: n }) => ka(n), t.blockquote = ({ text: n }) => n + `
`, t.html = e ? ({ text: n }) => n : (n) => "", t.heading = function({ tokens: n }) {
    return this.parser.parseInline(n) + `
`;
  }, t.hr = () => "", t.list = function({ items: n }) {
    return n.map((s) => this.listitem(s)).join(`
`) + `
`;
  }, t.listitem = ({ text: n }) => n + `
`, t.paragraph = function({ tokens: n }) {
    return this.parser.parseInline(n) + `
`;
  }, t.table = function({ header: n, rows: s }) {
    return n.map((r) => this.tablecell(r)).join(" ") + `
` + s.map((r) => r.map((a) => this.tablecell(a)).join(" ")).join(`
`) + `
`;
  }, t.tablerow = ({ text: n }) => n, t.tablecell = function({ tokens: n }) {
    return this.parser.parseInline(n);
  }, t.strong = ({ text: n }) => n, t.em = ({ text: n }) => n, t.codespan = ({ text: n }) => ka(n), t.br = (n) => `
`, t.del = ({ text: n }) => n, t.image = (n) => "", t.text = ({ text: n }) => n, t.link = ({ text: n }) => n, t;
}
function zc(e) {
  return e.code = ({ text: t }) => `
\`\`\`
${ka(t)}
\`\`\`
`, e;
}
var S7 = new Ce(() => jr(false)), R7 = new Ce(() => zc(jr(false))), A7 = new Ce(() => jr(true)), w7 = new Ce(() => zc(jr(true)));
function b7(e, t) {
  return t ? e ? w7.value : A7.value : e ? R7.value : S7.value;
}
function I7(e, t, n) {
  let s = e.value ?? "";
  return s.length > 1e5 && (s = `${s.substr(0, 1e5)}…`), E7(s, { async: false, renderer: b7(t, n) }).toString().replace(/&(#\d+|[a-zA-Z]+);/g, (a) => y7.get(a) ?? a).trim();
}
function N7(e, t) {
  return I7(e, t ?? false, true);
}
var D7 = class to {
  static wrap(t) {
    return t === void 0 ? to.Val : t;
  }
  static unwrap(t) {
    return t === to.Val ? void 0 : t;
  }
};
D7.Val = /* @__PURE__ */ Symbol("undefined_placeholder");
var bk = xt("contextService"), Xc = "code-workspace", Ik = `.${Xc}`, Nk = [{ name: J(2692, null), extensions: [Xc] }];
function O7(e) {
  return e.createdFromBackgroundAgent !== void 0 && e.createdFromBackgroundAgent.shouldStreamMessages !== false;
}
var un = 2e6, jc = 25, Qc = 512e3, M7 = 100, Zc = 2e3, e1 = 240, Ci = 4, L7 = 20, x7 = /[\p{L}\p{N}_-]+/gu, Fi = 12, U7 = 64, Bi = 2, P7 = 4096;
function B(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function t1(e) {
  if (typeof e == "string") return e;
  if (Buffer.isBuffer(e)) return e.toString("utf8");
}
function n1(e, t) {
  const n = t1(e);
  if (!(n === void 0 || Buffer.byteLength(n, "utf8") > t)) try {
    return JSON.parse(n);
  } catch {
    return;
  }
}
function s1(e, t) {
  const n = n1(e, un);
  if (!B(n) || typeof n._v != "number" || n._v < 2 || typeof n.composerId != "string" || !Array.isArray(n.fullConversationHeadersOnly) || n.isDraft === true || n.isEphemeral === true) return;
  const s = n.createdFromBackgroundAgent;
  if (s !== void 0 && (!B(s) || typeof s.bcId != "string" || s.shouldStreamMessages !== void 0 && typeof s.shouldStreamMessages != "boolean" || O7({ createdFromBackgroundAgent: { bcId: s.bcId, shouldStreamMessages: s.shouldStreamMessages } }))) return;
  const r = typeof n.lastUpdatedAt == "number" ? n.lastUpdatedAt : typeof n.createdAt == "number" ? n.createdAt : 0, a = B(n.subagentInfo) && typeof n.subagentInfo.parentComposerId == "string" ? n.subagentInfo.parentComposerId.trim() : void 0, i = { conversationId: n.composerId, title: typeof n.name == "string" ? n.name : "", recency: r, isArchived: typeof t == "number" ? t === 1 : n.isArchived === true, isProjectCoordinator: n.isProject === true && !a, branches: F7(n) };
  return nh(n) ? { ...i, headerLog: n.headerLog } : a1({ ...i, messageIds: r1(n.fullConversationHeadersOnly) });
}
function C7(e, t) {
  const { headerLog: n, ...s } = e;
  return a1({ ...s, messageIds: r1(t) });
}
function r1(e) {
  const t = [];
  for (const n of e.slice(-Zc)) B(n) && (n.type === 1 || n.type === 2) && typeof n.bubbleId == "string" && t.push(n.bubbleId);
  return t;
}
function a1(e) {
  return { ...e, rootFingerprint: B7(e) };
}
function F7(e) {
  const t = Array.isArray(e.trackedGitRepos) ? e.trackedGitRepos.map((s) => B(s) && Array.isArray(s.branches) ? s.branches[0] : void 0) : [e.activeBranch], n = new Set(t.map((s) => B(s) && typeof s.branchName == "string" ? Bm(s.branchName) : "").filter((s) => s.length > 0));
  return i1([...n].join(Ol), P7);
}
function B7(e) {
  return oh("sha256").update(JSON.stringify([e.conversationId, e.title, e.recency, e.isArchived, e.messageIds, e.branches, ...e.isProjectCoordinator ? ["project-coordinator-v1"] : []])).digest("hex");
}
function G7(e) {
  if (!(!B(e) || e.status !== "completed" || typeof e.toolCallBinary != "string")) try {
    const t = Ii.fromBinary(Wu(e.toolCallBinary).buffer).tool;
    return t.case !== "sendMessageToolCall" || t.value.result !== void 0 && t.value.result.result.case !== "success" || t.value.args?.message.case !== "text" ? void 0 : t.value.args.message.value.content.trim();
  } catch {
    return;
  }
}
function q7(e, t = false) {
  const n = n1(e, Qc);
  if (!B(n) || n.type !== 1 && n.type !== 2 || n.skipRendering === true || n.isDisplayOnly === true) return;
  const s = t && n.type === 2 ? G7(n.toolFormerData) : n.text;
  if (typeof s != "string") return;
  const r = N7({ value: s });
  return r.length > 0 ? r : void 0;
}
function i1(e, t) {
  const n = Buffer.from(e, "utf8");
  if (n.byteLength <= t) return e;
  let s = n.subarray(0, t).toString("utf8");
  for (; Buffer.byteLength(s, "utf8") > t; ) s = s.slice(0, -1);
  return s;
}
function o1(e) {
  return (e.normalize("NFKC").match(x7)?.slice(0, Fi).map((n) => n.slice(0, U7)).filter((n) => n.length > 0) ?? []).map((n) => ({ text: n, lowercaseText: n.toLowerCase() }));
}
function W7(e) {
  const t = [];
  let n = 0;
  for (const [a, i] of e.normalize("NFKC").split('"').entries()) {
    const l = o1(i).slice(0, Fi - n);
    if (l.length !== 0 && (t.push({ quoted: a % 2 === 1, terms: l }), n += l.length, n >= Fi)) break;
  }
  const s = t.some((a) => a.quoted || a.terms.some((i) => i.text.length >= Bi)), r = t.flatMap((a) => a.quoted ? [`"${a.terms.map((i) => i.text.replaceAll('"', '""')).join(" ")}"`] : a.terms.filter((i) => !s || i.text.length >= Bi).map((i) => `"${i.text.replaceAll('"', '""')}"*`));
  return r.length > 0 ? r.join(" AND ") : void 0;
}
function $7(e) {
  if (e.length !== 0 && !e.some((t) => t.text.length >= Bi)) return e;
}
function J7(e, t) {
  const n = e.toLowerCase(), s = [];
  for (const i of t) {
    const l = n.indexOf(i.lowercaseText);
    if (l < 0) continue;
    const c = l + i.text.length;
    s.some((u) => l < u.end && u.start < c) || s.push({ start: l, end: c });
  }
  s.sort((i, l) => i.start - l.start);
  let r = "", a = 0;
  for (const i of s) r += `${e.slice(a, i.start)}${e.slice(i.start, i.end)}`, a = i.end;
  return r + e.slice(a);
}
function H7(e) {
  return e.replace(/[\\%_]/g, (t) => `\\${t}`);
}
function V7(e) {
  if (!(e.length < 2)) return `"${e.map((t) => t.text.replaceAll('"', '""')).join(" ")}"`;
}
function Gi(e) {
  const t = [];
  let n = "", s;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (a === "") {
      s ??= n.length;
      continue;
    }
    if (a === "") {
      s !== void 0 && n.length > s && t.length < Ci && t.push({ start: s, end: n.length }), s = void 0;
      continue;
    }
    n += a;
  }
  return s !== void 0 && n.length > s && t.length < Ci && t.push({ start: s, end: n.length }), { text: n, highlights: t };
}
function qi(e, t, n) {
  if (n.length === 0) return t;
  const s = e.toLowerCase(), r = [];
  for (const a of t) {
    const i = r.length;
    for (let l = a.start; l < a.end; ) {
      const c = n.find((d) => l + d.lowercaseText.length <= a.end && s.startsWith(d.lowercaseText, l));
      if (c === void 0) {
        l++;
        continue;
      }
      const u = l + c.lowercaseText.length;
      r.push({ start: l, end: u }), l = u;
    }
    r.length === i && r.push(a);
  }
  return r.slice(0, Ci);
}
function Y7(e, t) {
  const { text: n, highlights: s } = Gi(e.replace(/\s+/g, " ").trim()), r = z7(n, qi(n, s, t));
  if (r.text.length <= e1) return r;
  const a = r.text.slice(0, e1 - 1).trimEnd();
  return { text: `${a}…`, highlights: r.highlights.filter((i) => i.start < a.length).map((i) => ({ start: i.start, end: Math.min(i.end, a.length) })) };
}
function K7(e, t) {
  for (const n of e.split(Ol)) {
    const { text: s, highlights: r } = Gi(n);
    if (r.length !== 0) return { text: s, highlights: qi(s, r, t) };
  }
}
function z7(e, t) {
  const n = t[0];
  if (n === void 0) return { text: e, highlights: t };
  const s = n.start - L7;
  if (s <= 0) return { text: e, highlights: t };
  const r = e.lastIndexOf(" ", s) + 1;
  return r <= 0 ? { text: e, highlights: t } : { text: e.slice(r), highlights: t.filter((a) => a.end > r).map((a) => ({ start: Math.max(0, a.start - r), end: a.end - r })) };
}
function dn(e) {
  return e instanceof Error && (e.message.includes("SQLITE_CORRUPT") || e.message.includes("SQLITE_NOTADB"));
}
function X7(e) {
  return B(e) && typeof e.conversationId == "string" && typeof e.title == "string" && typeof e.highlightedTitle == "string" && typeof e.bodySnippet == "string" && typeof e.highlightedBranches == "string" && typeof e.recency == "number" && (e.source === "local" || e.source === "cloud-cache");
}
var l1 = 25, j7 = class {
  constructor(e) {
    this.host = e, this.operations = new jd();
  }
  replaceMetadata(e) {
    return this.operations.queue(() => this.replaceMetadataInBatches(e));
  }
  async getBodyStatus(e) {
    return this.operations.queue(() => this.host.enqueueIndexOperation(async (t) => {
      const n = [];
      for (const s of e.candidates) {
        if (s.kind === "unavailable") continue;
        const r = await this.host.get(t, `SELECT cache_fingerprint
						 FROM conversations
						 WHERE source = 'cloud-cache' AND scope = ? AND id = ?`, [e.scope, s.conversationId]);
        (!B(r) || r.cache_fingerprint !== s.fingerprint) && n.push(s.conversationId);
      }
      return { staleConversationIds: n };
    }));
  }
  async upsertBodies(e) {
    await this.operations.queue(() => this.host.enqueueIndexOperation((t) => this.host.runInTransaction(t, async () => {
      for (const n of e.conversations) await this.host.run(t, `UPDATE conversations
							 SET cache_fingerprint = ?
							 WHERE source = 'cloud-cache' AND scope = ? AND id = ?`, [n.fingerprint, e.scope, n.conversationId]), await this.replaceBody(t, e.scope, n.conversationId, n.body);
    })));
  }
  async clear(e) {
    await this.operations.queue(() => this.host.enqueueIndexOperation((t) => this.host.runInTransaction(t, async () => {
      const n = e.scope === void 0 ? "" : " AND scope = ?", s = e.scope === void 0 ? [] : [e.scope];
      await this.host.run(t, `DELETE FROM conversation_fts
						 WHERE rowid IN (
							SELECT fts_rowid FROM conversations
							WHERE source = 'cloud-cache'${n}
						 )`, s), await this.host.run(t, `DELETE FROM conversations
						 WHERE source = 'cloud-cache'${n}`, s);
    })));
  }
  async replaceMetadataInBatches(e) {
    try {
      await this.host.enqueueIndexOperation((t) => this.host.runInTransaction(t, async () => {
        await this.host.run(t, `CREATE TEMP TABLE IF NOT EXISTS cloud_cache_metadata_snapshot_ids (
							id TEXT PRIMARY KEY
						 ) WITHOUT ROWID`), await this.host.run(t, "DELETE FROM cloud_cache_metadata_snapshot_ids");
      }));
      for (let t = 0; t < e.conversations.length; t += l1) {
        const n = e.conversations.slice(t, t + l1);
        await this.host.waitForForegroundSearches(), await this.host.enqueueIndexOperation((s) => this.host.runInTransaction(s, async () => {
          for (const r of n) {
            await this.host.run(s, `INSERT OR IGNORE INTO cloud_cache_metadata_snapshot_ids (id)
								 VALUES (?)`, [r.conversationId]);
            const a = await this.host.get(s, `SELECT
									conversations.title AS title,
									conversations.branches,
									conversation_fts.body AS body
								 FROM conversations
								 LEFT JOIN conversation_fts
									ON conversation_fts.rowid = conversations.fts_rowid
								 WHERE conversations.source = 'cloud-cache'
								   AND conversations.scope = ?
								   AND conversations.id = ?`, [e.scope, r.conversationId]), i = B(a) && typeof a.body == "string" ? a.body : "", l = B(a) && typeof a.body == "string" && a.title === r.title && a.branches === r.branches;
            await this.host.run(s, `INSERT INTO conversations (
									source,
									scope,
									id,
									title,
									branches,
									updated_at,
									is_archived,
									root_fingerprint,
									cache_fingerprint
								 )
								 VALUES ('cloud-cache', ?, ?, ?, ?, ?, ?, NULL, NULL)
								 ON CONFLICT(source, scope, id) DO UPDATE SET
									title = excluded.title,
									branches = excluded.branches,
									updated_at = excluded.updated_at,
									is_archived = excluded.is_archived`, [e.scope, r.conversationId, r.title, r.branches, r.recency, r.isArchived ? 1 : 0]), l || await this.replaceBody(s, e.scope, r.conversationId, i);
          }
        })), await ct(0);
      }
      await this.host.waitForForegroundSearches(), await this.host.enqueueIndexOperation((t) => this.host.runInTransaction(t, async () => {
        await this.host.run(t, `DELETE FROM conversation_fts
						 WHERE rowid IN (
							SELECT fts_rowid FROM conversations
							WHERE source = 'cloud-cache'
							  AND scope = ?
							  AND NOT EXISTS (
								SELECT 1 FROM cloud_cache_metadata_snapshot_ids
								WHERE cloud_cache_metadata_snapshot_ids.id = conversations.id
							  )
						 )`, [e.scope]), await this.host.run(t, `DELETE FROM conversations
						 WHERE source = 'cloud-cache'
						   AND scope = ?
						   AND NOT EXISTS (
							SELECT 1 FROM cloud_cache_metadata_snapshot_ids
							WHERE cloud_cache_metadata_snapshot_ids.id = conversations.id
						   )`, [e.scope]), await this.host.pruneToRecencyCap(t);
      }));
    } catch (t) {
      throw await this.dropMetadataSnapshotIdsTable().catch(() => {
      }), t;
    }
    await this.dropMetadataSnapshotIdsTable();
  }
  async dropMetadataSnapshotIdsTable() {
    await this.host.enqueueIndexOperation((e) => this.host.run(e, "DROP TABLE IF EXISTS cloud_cache_metadata_snapshot_ids"));
  }
  async replaceBody(e, t, n, s) {
    await this.host.run(e, `DELETE FROM conversation_fts WHERE rowid = (
				SELECT fts_rowid FROM conversations
				WHERE source = 'cloud-cache' AND scope = ? AND id = ?
			)`, [t, n]), await this.host.run(e, `INSERT INTO conversation_fts (rowid, title, body, branches)
			 SELECT fts_rowid, title, ?, branches FROM conversations
			 WHERE source = 'cloud-cache' AND scope = ? AND id = ?`, [s, t, n]);
  }
}, c1 = 10, mn = 25, Qr = dt, Wi = 10, Q7 = 2e3, hn = 1e3, Z7 = 3e3, e8 = 1e3, t8 = 3, n8 = 20, $i = 131072, u1 = 500, d1 = 1e3, s8 = 100, r8 = 32, a8 = 0.05, i8 = 0.02, o8 = 720 * 60 * 60 * 1e3, m1 = [Hm, Vm].map((e) => `'${e.replaceAll("'", "''")}'`).join(", "), Ji = `(
	COALESCE(headers.isSubagent, 0) = 0
	OR headers.subagentTypeName IN (${m1})
	-- NULL: written before the column existed and never backfilled, so read the
	-- header JSON. CASE is the only lazily evaluated construct and json_extract
	-- raises on malformed text.
	OR (headers.subagentTypeName IS NULL
		AND CASE WHEN json_valid(headers.value)
			THEN json_extract(headers.value, '$.subagentInfo.subagentTypeName') IN (${m1})
		END)
)`;
function gn(e, t) {
  return B(e) && typeof e[t] == "number" ? e[t] : 0;
}
var Tt = class extends Error {
  constructor(e) {
    super(e instanceof Error ? e.message : "Conversation search source database operation failed", { cause: e }), this.name = "ConversationSearchSourceDatabaseError";
  }
}, l8 = class {
  constructor(e, t) {
    this.logService = t, this.orphanedIndexHandles = [], this.operationTail = Promise.resolve(), this.searchTail = Promise.resolve(), this.sourceBatchTail = Promise.resolve(), this.pendingSearches = 0, this.reconcileRequested = false, this.forceHydrationRequested = false, this.recoveryState = { kind: "idle" }, this.pendingDirtyConversations = /* @__PURE__ */ new Map(), this.recentUpdateEvents = [], this.diagnosticsEnabled = false, this.databaseFullPruneCount = 0, this.corruptionRebuildCount = 0, this.successfulCorruptionRecoveryCount = 0, this.recoveryFailureCountByPhase = { source_database: 0, index_rebuild: 0, post_rebuild_reconcile: 0 }, this.dirtyFlushCount = 0, this.effectiveConversationCap = dt, this.disposed = false, this.resetEmitter = new H(), this.changeEmitter = new H(), this.onDidReset = this.resetEmitter.event, this.onDidChange = this.changeEmitter.event;
    const n = It(e, "User", "globalStorage");
    this.sourceDatabasePath = It(n, "state.vscdb"), this.indexDatabasePath = It(n, "conversation-search.db"), this.cloudCache = new j7({ enqueueIndexOperation: (s) => this.enqueueIndexOperation(s), runInTransaction: (s, r) => this.runInTransaction(s, r), run: (s, r, a) => this.run(s, r, a), get: (s, r, a) => this.get(s, r, a), waitForForegroundSearches: () => this.waitForForegroundSearches(), pruneToRecencyCap: (s) => this.pruneToRecencyCap(s) });
  }
  async initialize() {
    await Gt.promises.mkdir(It(this.indexDatabasePath, ".."), { recursive: true });
    try {
      this.sourceDatabase = await this.openSourceDatabaseWithContext();
    } catch (e) {
      if (!(e instanceof Tt)) throw e;
      await this.recordSourceDatabaseFailure(e), this.logService.warn("[ConversationSearchIndex] source database unavailable during initialization; preserving the derived index", e);
    }
    try {
      this.indexDatabase = await this.openIndexDatabase(), await this.configureIndexDatabase(this.indexDatabase);
    } catch (e) {
      await this.closeDatabase(this.indexDatabase), this.indexDatabase = void 0, await this.removeIndexFiles(), this.indexDatabase = await this.openIndexDatabase(), await this.configureIndexDatabase(this.indexDatabase), this.logService.warn("[ConversationSearchIndex] rebuilt index after initialization failure", e);
    }
    this.readIndexDatabase = await this.openReadOnlyIndexDatabase(), this.requestReconcileInBackground();
  }
  get isRebuilding() {
    return this.reconcilePromise !== void 0 || this.recoveryState.kind === "rebuilding" || this.recoveryState.kind === "reconciling" || this.recoveryState.kind === "retryScheduled";
  }
  setDiagnosticsEnabled(e) {
    if (this.diagnosticsEnabled !== e && (this.diagnosticsEnabled = e, !e)) {
      for (const t of this.pendingDirtyConversations.keys()) this.pendingDirtyConversations.set(t, void 0);
      this.activeDirtyUpdateStartedAt = void 0, this.activeDirtyUpdateWorkStartedAt = void 0, this.activeReconcileUpdateStartedAt = void 0, this.activeReconcileUpdateWorkStartedAt = void 0, this.recentUpdateEvents.length = 0;
    }
  }
  async getDiagnostics() {
    const e = await this.enqueueIndexOperation((a) => this.get(a, "SELECT COUNT(*) AS count FROM conversations")), t = B(e) && typeof e.count == "number" ? e.count : 0, [n, s, r] = await Promise.all([this.readIndexFileSize(this.indexDatabasePath), this.readIndexFileSize(`${this.indexDatabasePath}-wal`), this.readIndexFileSize(`${this.indexDatabasePath}-shm`)]);
    return { status: this.getDiagnosticStatus(), indexedConversationCount: t, indexSizeBytes: n + s + r, pendingUpdateCount: this.pendingDirtyConversations.size, activeSearchCount: this.pendingSearches, recentUpdateEvents: this.getRecentIndexUpdateEvents() };
  }
  getRecoveryStats() {
    return { corruptionRebuildCount: this.corruptionRebuildCount, successfulCorruptionRecoveryCount: this.successfulCorruptionRecoveryCount, recoveryFailureCountByPhase: { ...this.recoveryFailureCountByPhase } };
  }
  async getIndexStats() {
    return this.enqueueIndexOperation(async (e) => {
      const t = await this.get(e, "PRAGMA page_count"), n = await this.get(e, "PRAGMA freelist_count"), s = await this.get(e, `SELECT
					COUNT(CASE WHEN source = 'local' THEN 1 END) AS local_count,
					COUNT(CASE WHEN source = 'cloud-cache' THEN 1 END) AS cloud_cache_count,
					COUNT(CASE WHEN source = 'cloud-cache' AND cache_fingerprint IS NULL THEN 1 END) AS unhydrated_cloud_cache_count
				 FROM conversations`);
      return { databasePageCount: gn(t, "page_count"), freelistPageCount: gn(n, "freelist_count"), localConversationCount: gn(s, "local_count"), cloudCacheConversationCount: gn(s, "cloud_cache_count"), unhydratedCloudCacheConversationCount: gn(s, "unhydrated_cloud_cache_count"), effectiveConversationCap: this.effectiveConversationCap, lastReconcileDurationMs: this.lastReconcileDurationMs, ...this.getRecoveryStats(), databaseFullPruneCount: this.databaseFullPruneCount, dirtyFlushCount: this.dirtyFlushCount };
    });
  }
  getRecentIndexUpdateEvents() {
    if (!this.diagnosticsEnabled) return [];
    const e = Date.now();
    return [...[[this.activeDirtyUpdateStartedAt, this.activeDirtyUpdateWorkStartedAt], [this.activeReconcileUpdateStartedAt, this.activeReconcileUpdateWorkStartedAt], [this.getPendingIndexUpdateStartedAt(), void 0]].flatMap(([s, r]) => s === void 0 ? [] : [{ startedAt: s, durationMs: Math.max(0, e - s), workMs: r === void 0 ? 0 : Math.max(0, e - r), status: "in-progress" }]), ...this.recentUpdateEvents].sort((s, r) => r.startedAt - s.startedAt).slice(0, Wi);
  }
  getPendingIndexUpdateStartedAt() {
    let e;
    for (const t of this.pendingDirtyConversations.values()) t !== void 0 && (e = e === void 0 ? t : Math.min(e, t));
    return e;
  }
  finishIndexUpdate(e, t, n) {
    if (!this.diagnosticsEnabled) return;
    const s = Date.now();
    this.recentUpdateEvents.push({ startedAt: e, durationMs: Math.max(0, s - e), workMs: Math.max(0, s - n), status: t }), this.recentUpdateEvents.sort((r, a) => r.startedAt - a.startedAt), this.recentUpdateEvents.length > Wi && this.recentUpdateEvents.splice(0, this.recentUpdateEvents.length - Wi);
  }
  getDiagnosticStatus() {
    return this.recoveryState.kind === "failed" ? "unavailable" : this.isRebuilding || this.reconcileRequested ? "rebuilding" : this.pendingDirtyConversations.size > 0 || this.dirtyFlushPromise !== void 0 ? "updating" : "ready";
  }
  async readIndexFileSize(e) {
    try {
      return (await Gt.promises.stat(e)).size;
    } catch (t) {
      if (t instanceof Error && "code" in t && t.code === "ENOENT") return 0;
      throw t;
    }
  }
  requestReconcile(e = false) {
    return this.disposed || this.recoveryState.kind === "failed" ? Promise.resolve() : (this.reconcileRequested = true, this.forceHydrationRequested ||= e, this.recoveryState.kind === "retryScheduled" ? this.recoveryState.completion.p : this.reconcilePromise !== void 0 ? this.reconcilePromise : (this.reconcilePromise = (async () => {
      for (; (this.reconcileRequested || this.isActiveRecoveryState(this.recoveryState)) && !this.disposed && this.recoveryState.kind !== "failed"; ) {
        this.reconcileRequested = false;
        const t = this.forceHydrationRequested;
        this.forceHydrationRequested = false;
        const n = this.recoveryState;
        try {
          if (n.kind === "rebuilding") {
            if (this.corruptionRebuildCount >= n8) throw this.recoveryState = { kind: "failed", cause: "index", searchable: false }, new Error(`Conversation search index exceeded ${this.corruptionRebuildCount} corruption rebuilds since startup`);
            if (await this.rebuildCorruptIndex(), this.recoveryState !== n) continue;
            this.recoveryState = { kind: "reconciling", attempts: n.attempts };
          }
          await this.reconcile(t), this.changeEmitter.fire(), this.isActiveRecoveryState(n) && this.recoveryState.kind === "reconciling" && (this.successfulCorruptionRecoveryCount += 1, this.recoveryState = { kind: "idle" });
        } catch (s) {
          if (this.isRecoveryFailed()) throw s;
          let r;
          this.isActiveRecoveryState(n) && (r = n, this.isActiveRecoveryState(this.recoveryState) && (r = this.recoveryState));
          const a = s instanceof Tt;
          a && await this.recordSourceDatabaseFailure(s);
          const i = !a && dn(s);
          if (t && (r !== void 0 || a || i) && (this.forceHydrationRequested = true), r === void 0) {
            if (i) {
              this.scheduleCorruptionRebuild();
              continue;
            }
            throw s;
          }
          throw a ? (dn(s.cause) || (this.recoveryFailureCountByPhase.post_rebuild_reconcile += 1, this.scheduleCorruptionRecoveryRetry("reconcile", r.attempts)), s) : (this.recoveryFailureCountByPhase[r.kind === "rebuilding" ? "index_rebuild" : "post_rebuild_reconcile"] += 1, this.scheduleCorruptionRecoveryRetry("rebuild", r.attempts), s);
        }
      }
    })().finally(() => {
      this.reconcilePromise = void 0, (this.reconcileRequested || this.isActiveRecoveryState(this.recoveryState)) && !this.disposed && this.requestReconcileInBackground();
    }), this.reconcilePromise));
  }
  requestReconcileInBackground(e = false) {
    this.requestReconcile(e).catch((t) => this.logService.error("[ConversationSearchIndex] reconciliation failed", t));
  }
  requestDirtyOverflowReconcileInBackground(e) {
    this.activeReconcileUpdateStartedAt = this.activeReconcileUpdateStartedAt === void 0 ? e : Math.min(this.activeReconcileUpdateStartedAt, e), this.activeReconcileUpdateWorkStartedAt ??= Date.now();
    const t = this.requestReconcile(true);
    this.dirtyOverflowReconcilePromise === void 0 && (this.dirtyOverflowReconcilePromise = t.then(() => {
      const n = this.activeReconcileUpdateStartedAt, s = this.activeReconcileUpdateWorkStartedAt;
      this.activeReconcileUpdateStartedAt = void 0, this.activeReconcileUpdateWorkStartedAt = void 0, n !== void 0 && s !== void 0 && this.finishIndexUpdate(n, "complete", s);
    }).catch((n) => {
      const s = this.activeReconcileUpdateStartedAt, r = this.activeReconcileUpdateWorkStartedAt;
      this.activeReconcileUpdateStartedAt = void 0, this.activeReconcileUpdateWorkStartedAt = void 0, s !== void 0 && r !== void 0 && this.finishIndexUpdate(s, "failed", r), this.logService.error("[ConversationSearchIndex] dirty overflow reconciliation failed", n);
    }).finally(() => {
      this.dirtyOverflowReconcilePromise = void 0;
    }));
  }
  async reconcile(e = false) {
    if (this.disposed || this.recoveryState.kind === "failed" || this.indexDatabase === void 0) return;
    const t = await this.getOrOpenSourceDatabase();
    if (this.disposed || t === void 0) return;
    const n = Date.now(), s = await this.enqueueIndexOperation((a) => this.beginOrResumeCandidateScan(a));
    let r = s.cursor;
    for (s.resumed && (this.reconcileRequested = true); !this.disposed && !this.isRecoveryFailed() && await this.enqueueSourceDerivedBatch(async () => {
      const i = await this.all(t, `SELECT
						kv.key,
						CASE WHEN length(kv.value) <= ? THEN kv.value END AS value,
						headers.isArchived AS header_is_archived
					 FROM cursorDiskKV AS kv
					 LEFT JOIN composerHeaders AS headers
						ON headers.composerId = substr(kv.key, length('composerData:') + 1)
					 WHERE kv.key > ? AND kv.key >= 'composerData:' AND kv.key < 'composerData;'
					   AND ${Ji}
					 ORDER BY kv.key
					 LIMIT ?`, [un, r, mn]);
      if (i.length === 0) return false;
      const l = [];
      for (const c of i) {
        if (!B(c) || typeof c.key != "string") continue;
        r = c.key;
        const u = s1(c.value, c.header_is_archived);
        u !== void 0 && l.push(u);
      }
      return await this.enqueueIndexOperation(async (c) => {
        await this.updateCandidateScan(c, l, r);
      }), true;
    }); ) await ct(0);
    !this.disposed && !this.isRecoveryFailed() && await this.hydrateCandidateSet(t, e), this.lastReconcileDurationMs = Date.now() - n;
  }
  async beginOrResumeCandidateScan(e) {
    this.throwIfSourceDatabaseInvalidated();
    const t = await this.get(e, "SELECT cursor, in_progress FROM conversation_search_reconciliation WHERE id = 1");
    if (B(t) && t.in_progress === 1 && typeof t.cursor == "string") return { cursor: t.cursor, resumed: true };
    await this.run(e, "BEGIN IMMEDIATE");
    try {
      await this.run(e, "DELETE FROM conversation_search_candidates"), await this.run(e, `INSERT INTO conversation_search_reconciliation (id, cursor, in_progress)
				 VALUES (1, '', 1)
				 ON CONFLICT(id) DO UPDATE SET cursor = '', in_progress = 1`), this.throwIfSourceDatabaseInvalidated(), await this.run(e, "COMMIT");
    } catch (n) {
      throw await this.run(e, "ROLLBACK").catch(() => {
      }), n;
    }
    return { cursor: "", resumed: false };
  }
  async updateCandidateScan(e, t, n) {
    this.throwIfSourceDatabaseInvalidated(), await this.run(e, "BEGIN IMMEDIATE");
    try {
      for (const s of t) await this.run(e, `INSERT INTO conversation_search_candidates (id, updated_at)
					 VALUES (?, ?)
					 ON CONFLICT(id) DO UPDATE SET updated_at = excluded.updated_at`, [s.conversationId, s.recency]);
      await this.run(e, `DELETE FROM conversation_search_candidates
				 WHERE id IN (
					SELECT id FROM conversation_search_candidates
					ORDER BY updated_at DESC, id
					LIMIT -1 OFFSET ?
				 )`, [this.effectiveConversationCap]), await this.run(e, `UPDATE conversation_search_reconciliation
				 SET cursor = ?, in_progress = 1
				 WHERE id = 1`, [n]), this.throwIfSourceDatabaseInvalidated(), await this.run(e, "COMMIT");
    } catch (s) {
      throw await this.run(e, "ROLLBACK").catch(() => {
      }), s;
    }
  }
  async hydrateCandidateSet(e, t) {
    if (this.indexDatabase === void 0) return;
    const { candidates: n, existingFingerprintById: s } = await this.enqueueIndexOperation(async (r) => {
      const a = await this.all(r, `SELECT id, updated_at
					 FROM conversation_search_candidates
					 ORDER BY updated_at DESC, id`), i = await this.all(r, `SELECT id, root_fingerprint FROM conversations
					 WHERE source = 'local'`), l = a.flatMap((u) => B(u) && typeof u.id == "string" ? [u.id] : []), c = /* @__PURE__ */ new Map();
      for (const u of i) B(u) && typeof u.id == "string" && typeof u.root_fingerprint == "string" && c.set(u.id, u.root_fingerprint);
      return { candidates: l, existingFingerprintById: c };
    });
    for (let r = 0; r < n.length && !this.disposed && this.recoveryState.kind !== "failed"; r += mn) {
      const a = n.slice(r, r + mn), i = a.map((l) => `composerData:${l}`);
      await this.enqueueSourceDerivedBatch(async () => {
        const l = await this.all(e, `SELECT
					kv.key,
					CASE WHEN length(kv.value) <= ? THEN kv.value END AS value,
					headers.isArchived AS header_is_archived
				 FROM cursorDiskKV AS kv
				 LEFT JOIN composerHeaders AS headers
					ON headers.composerId = substr(kv.key, length('composerData:') + 1)
				 WHERE kv.key IN (${i.map(() => "?").join(", ")})
				   AND ${Ji}`, [un, ...i]), c = /* @__PURE__ */ new Map();
        for (const m of l) {
          if (!B(m) || typeof m.key != "string") continue;
          const g = await this.readComposerRoot(e, m);
          g !== void 0 && c.set(g.conversationId, g);
        }
        const u = [], d = [];
        for (const m of a) {
          const g = c.get(m);
          if (g === void 0) {
            d.push(m);
            continue;
          }
          !t && s.get(m) === g.rootFingerprint || u.push(await this.readIndexedConversation(e, g));
        }
        await this.waitForForegroundSearches(), await this.enqueueIndexOperation(async (m) => {
          this.throwIfSourceDatabaseInvalidated();
          for (const g of d) await this.run(m, "DELETE FROM conversation_search_candidates WHERE id = ?", [g]);
          await this.upsertConversationBatch(m, u, d);
        });
      }), await ct(0);
    }
    !this.disposed && this.recoveryState.kind !== "failed" && await this.enqueueSourceDerivedBatch(() => this.enqueueIndexOperation((r) => this.finishCandidateReconciliation(r)));
  }
  async finishCandidateReconciliation(e) {
    this.throwIfSourceDatabaseInvalidated(), await this.run(e, "BEGIN IMMEDIATE");
    try {
      await this.run(e, `DELETE FROM conversation_fts
				 WHERE rowid IN (
					SELECT fts_rowid FROM conversations
						WHERE source = 'local'
						  AND id NOT IN (SELECT id FROM conversation_search_candidates)
				 )`), await this.run(e, `DELETE FROM conversations
				 WHERE source = 'local'
				   AND id NOT IN (SELECT id FROM conversation_search_candidates)`), await this.run(e, `UPDATE conversation_search_reconciliation
				 SET cursor = '', in_progress = 0
				 WHERE id = 1`), this.throwIfSourceDatabaseInvalidated(), await this.run(e, "COMMIT");
    } catch (t) {
      throw await this.run(e, "ROLLBACK").catch(() => {
      }), t;
    }
    await this.run(e, "PRAGMA incremental_vacuum(128)");
  }
  markConversationsDirty(e, t) {
    if (this.disposed || this.recoveryState.kind === "failed") return;
    const n = this.diagnosticsEnabled ? t ?? Date.now() : void 0;
    for (const s of e) {
      if (typeof s != "string" || s.length === 0 || !this.pendingDirtyConversations.has(s) && this.pendingDirtyConversations.size >= Qr) continue;
      const a = this.pendingDirtyConversations.get(s);
      this.pendingDirtyConversations.set(s, n === void 0 ? a : a === void 0 ? n : Math.min(a, n));
    }
    if (e.length > 0 && this.pendingDirtyConversations.size >= Qr) {
      const s = this.getPendingIndexUpdateStartedAt();
      this.pendingDirtyConversations.clear(), this.cancelDirtyFlushTimer(), s === void 0 ? this.requestReconcileInBackground(true) : this.requestDirtyOverflowReconcileInBackground(s);
      return;
    }
    this.scheduleDirtyFlush(Q7);
  }
  scheduleDirtyFlush(e) {
    this.disposed || this.recoveryState.kind === "failed" || this.pendingDirtyConversations.size === 0 || this.dirtyTimer === void 0 && (this.dirtyTimer = setTimeout(() => {
      this.dirtyTimer = void 0, this.startDirtyFlush();
    }, e));
  }
  startDirtyFlush() {
    if (!(this.disposed || this.pendingDirtyConversations.size === 0)) {
      if (this.dirtyFlushPromise !== void 0) {
        this.scheduleDirtyFlush(hn);
        return;
      }
      this.dirtyFlushPromise = this.flushDirtyConversations().catch((e) => this.logService.error("[ConversationSearchIndex] unexpected dirty reconciliation failure", e)).finally(() => {
        this.dirtyFlushPromise = void 0;
      });
    }
  }
  cancelDirtyFlushTimer() {
    this.dirtyTimer !== void 0 && (clearTimeout(this.dirtyTimer), this.dirtyTimer = void 0);
  }
  async deleteConversations(e) {
    const t = e.filter((n) => n.length > 0).slice(0, Qr);
    t.length === 0 || this.indexDatabase === void 0 || (await this.enqueueIndexOperation(async (n) => {
      await this.deleteConversationBatch(n, t);
    }), this.changeEmitter.fire());
  }
  createSearchResponse(e, t = []) {
    return { status: e, indexStatus: this.recoveryState.kind === "failed" ? "unavailable" : this.isRebuilding ? "rebuilding" : "ready", results: t };
  }
  async search(e, t = at.None) {
    const n = o1(e.text), s = W7(e.text);
    if (s === void 0 || t.isCancellationRequested) return this.createSearchResponse(t.isCancellationRequested ? "cancelled" : "complete");
    if (this.readIndexDatabase === void 0) return this.createSearchResponse(this.isRebuilding ? "complete" : "failed");
    if (this.recoveryState.kind === "failed" && !this.recoveryState.searchable) return this.createSearchResponse("failed");
    this.pendingSearches++;
    try {
      return await this.enqueueSearchOperation((r) => this.executeSearch(r, s, n, e, t));
    } finally {
      this.pendingSearches--;
    }
  }
  async executeSearch(e, t, n, s, r) {
    if (r.isCancellationRequested) return this.createSearchResponse("cancelled");
    if (s.deadlineAt !== void 0 && s.deadlineAt <= Date.now()) return this.createSearchResponse("deadline");
    let a = false, i;
    const l = r.onCancellationRequested(() => e.interrupt());
    s.deadlineAt !== void 0 && (i = setTimeout(() => {
      a = true, e.interrupt();
    }, Math.max(0, s.deadlineAt - Date.now())));
    const c = () => {
      if (r.isCancellationRequested) return "cancelled";
      if (a || s.deadlineAt !== void 0 && s.deadlineAt <= Date.now()) return "deadline";
    };
    let u;
    try {
      if (u = c(), u !== void 0) return this.createSearchResponse(u);
      const d = Math.min(Math.max(1, s.limit), M7), m = s.text.normalize("NFKC").includes('"'), g = m ? void 0 : $7(n);
      if (g !== void 0) {
        const $ = await this.queryTitleRows(e, g, s, d);
        return u = c(), u !== void 0 ? this.createSearchResponse(u) : this.createSearchResponse("complete", this.createSearchResults($, n));
      }
      const p = m ? void 0 : V7(n), _ = p === void 0 ? [] : await this.queryFtsRows(e, p, s, d, true);
      if (u = c(), u !== void 0) return this.createSearchResponse(u);
      const R = _.length >= d ? [] : await this.queryFtsRows(e, t, s, d);
      if (u = c(), u !== void 0) return this.createSearchResponse(u);
      const I = /* @__PURE__ */ new Set(), F = [..._, ...R].filter(($) => {
        const G = `${$.source}:${$.conversationId}`;
        return I.has(G) ? false : (I.add(G), true);
      }).slice(0, d);
      return this.createSearchResponse("complete", this.createSearchResults(F, n));
    } catch (d) {
      if (dn(d)) this.scheduleCorruptionRebuild();
      else if (u = c(), u !== void 0) return this.createSearchResponse(u);
      return this.logService.error("[ConversationSearchIndex] search failed", d), this.createSearchResponse("failed");
    } finally {
      l.dispose(), i !== void 0 && clearTimeout(i);
    }
  }
  createSearchResults(e, t) {
    const n = [...t].sort((s, r) => r.lowercaseText.length - s.lowercaseText.length);
    return e.map((s, r) => {
      const a = Gi(s.highlightedTitle), i = qi(a.text, a.highlights, n), l = Y7(s.bodySnippet, n), c = i.length > 0, u = l.highlights.length > 0, d = c || u ? void 0 : K7(s.highlightedBranches, n), m = d === void 0 ? { kind: c ? "title" : "body", snippet: l } : { kind: "branch", snippet: d };
      return { conversationId: s.conversationId, title: s.title, titleHighlights: i, matchKind: m.kind, snippet: m.snippet.text, snippetHighlights: m.snippet.highlights, score: 1 - r / (e.length + 1), recency: s.recency, source: s.source };
    });
  }
  async queryTitleRows(e, t, n, s) {
    const r = t.map(() => "AND c.title LIKE ? ESCAPE '\\'").join(`
			   `);
    return (await this.all(e, `SELECT
				c.id AS conversationId,
				c.title AS title,
				c.updated_at AS recency,
				c.source AS source
			 FROM conversations c
			 WHERE (? = 1 OR c.is_archived = 0)
			   AND (
				c.source = 'local'
				OR (
					c.source = 'cloud-cache'
					AND c.scope = ?
				)
			   )
			   ${r}
			 ORDER BY c.updated_at DESC, c.source, c.scope, c.id
			 LIMIT ?`, [n.includeArchived ? 1 : 0, n.cloudCacheScope ?? null, ...t.map((i) => `%${H7(i.text)}%`), s])).flatMap((i) => !B(i) || typeof i.conversationId != "string" || typeof i.title != "string" || typeof i.recency != "number" || i.source !== "local" && i.source !== "cloud-cache" ? [] : [{ conversationId: i.conversationId, title: i.title, highlightedTitle: J7(i.title, t), bodySnippet: "", highlightedBranches: "", recency: i.recency, source: i.source }]);
  }
  async queryFtsRows(e, t, n, s, r = false) {
    const a = r ? `CASE
					WHEN highlight(conversation_fts, 0, char(1), char(2)) <> conversation_fts.title
					THEN 0
					ELSE 1
				END` : `bm25(conversation_fts, 1.25, 1.0, ${i8}) * (
					1.0 + ? / (
						1.0 + MAX(0, ? - c.updated_at) / (1.0 * ?)
					)
				)`, i = r ? [] : [a8, Date.now(), o8];
    return (await this.all(e, `SELECT
				c.id AS conversationId,
				c.title AS title,
				highlight(conversation_fts, 0, char(1), char(2)) AS highlightedTitle,
				snippet(conversation_fts, 1, char(1), char(2), ' … ', 32) AS bodySnippet,
				highlight(conversation_fts, 2, char(1), char(2)) AS highlightedBranches,
				c.updated_at AS recency,
				c.source AS source
			 FROM (
				SELECT
					conversation_fts.rowid AS fts_rowid,
					${a} AS rank_score
				FROM conversation_fts
				JOIN conversations c ON c.fts_rowid = conversation_fts.rowid
				WHERE conversation_fts MATCH ?
				  AND (? = 1 OR c.is_archived = 0)
				  AND (
					c.source = 'local'
					OR (
						c.source = 'cloud-cache'
						AND c.scope = ?
					)
				  )
				ORDER BY rank_score, c.updated_at DESC
				LIMIT ?
			 ) AS matched
			 JOIN conversation_fts ON conversation_fts.rowid = matched.fts_rowid
			 JOIN conversations c ON c.fts_rowid = matched.fts_rowid
			 WHERE conversation_fts MATCH ?
			 ORDER BY matched.rank_score, c.updated_at DESC`, [...i, t, n.includeArchived ? 1 : 0, n.cloudCacheScope ?? null, s, t])).filter(X7);
  }
  async close() {
    this.disposed = true, this.cancelCorruptionRecoveryRetry(), this.cancelDirtyFlushTimer(), await Promise.allSettled([this.reconcilePromise, this.dirtyFlushPromise]), await this.sourceBatchTail, await this.searchTail.catch(() => {
    }), await this.operationTail.catch(() => {
    }), this.indexDatabase !== void 0 && await this.run(this.indexDatabase, "PRAGMA wal_checkpoint(TRUNCATE)").catch(() => {
    }), await Promise.all([this.closeDatabase(this.sourceDatabase), this.closeDatabase(this.indexDatabase), this.closeDatabase(this.readIndexDatabase), ...this.orphanedIndexHandles.map((e) => this.closeDatabase(e))]), this.sourceDatabase = void 0, this.indexDatabase = void 0, this.readIndexDatabase = void 0, this.orphanedIndexHandles.length = 0, this.resetEmitter.dispose(), this.changeEmitter.dispose();
  }
  async readComposerRoot(e, t) {
    const n = s1(t.value, t.header_is_archived);
    if (n === void 0 || !("headerLog" in n)) return n;
    const s = await ih(this.createHeaderLogReader(e), n.conversationId, n.headerLog, { tail: Zc });
    return s.damage.length > 0 && this.logService.warn(`[ConversationSearchIndex] header log of ${n.conversationId} decoded with ${s.damage.join(", ")}; indexing the ${s.headers.length} headers found`), C7(n, s.headers);
  }
  createHeaderLogReader(e) {
    return { cursorDiskKVGetBatch: async (t) => {
      if (t.length === 0) return [];
      const n = await this.all(e, `SELECT
						key,
						CASE WHEN length(value) <= ? THEN value END AS value
					 FROM cursorDiskKV
					 WHERE key IN (${t.map(() => "?").join(", ")})`, [un, ...t]);
      this.throwIfSourceDatabaseInvalidated();
      const s = [];
      for (const r of n) {
        if (!B(r) || typeof r.key != "string") continue;
        const a = t1(r.value);
        a !== void 0 && s.push([r.key, a]);
      }
      return s;
    } };
  }
  async readIndexedConversation(e, t) {
    if (this.throwIfSourceDatabaseInvalidated(), t.messageIds.length === 0) return { ...t, body: "" };
    const n = [];
    let s = 0;
    for (let r = t.messageIds.length; r > 0 && s < Ga; r -= jc) {
      const a = Math.max(0, r - jc), i = t.messageIds.slice(a, r), l = i.map((d) => `bubbleId:${t.conversationId}:${d}`), c = await this.all(e, `SELECT
					key,
					CASE WHEN length(value) <= ? THEN value END AS value
				 FROM cursorDiskKV
				 WHERE key IN (${l.map(() => "?").join(", ")})`, [Qc, ...l]);
      this.throwIfSourceDatabaseInvalidated();
      const u = /* @__PURE__ */ new Map();
      for (const d of c) {
        if (!B(d) || typeof d.key != "string") continue;
        const m = d.key.slice(`bubbleId:${t.conversationId}:`.length), g = q7(d.value, t.isProjectCoordinator);
        g !== void 0 && u.set(m, g);
      }
      for (let d = i.length - 1; d >= 0; d--) {
        const m = u.get(i[d]);
        if (m === void 0) continue;
        const g = n.length > 0 ? 1 : 0, p = Ga - s - g;
        if (p <= 0) break;
        const _ = i1(m, p), R = Buffer.byteLength(_, "utf8");
        R !== 0 && (n.unshift(_), s += g + R);
      }
    }
    return { ...t, body: n.join(`
`) };
  }
  async flushDirtyConversations() {
    if (this.disposed || this.recoveryState.kind === "failed") {
      this.pendingDirtyConversations.clear();
      return;
    }
    if (this.indexDatabase === void 0) {
      this.scheduleDirtyFlush(hn);
      return;
    }
    let e;
    try {
      e = await this.getOrOpenSourceDatabase();
    } catch (l) {
      this.logService.warn("[ConversationSearchIndex] source database unavailable during dirty reconciliation", l), this.isRecoveryFailed() || this.scheduleDirtyFlush(hn);
      return;
    }
    if (this.disposed) return;
    if (this.indexDatabase === void 0 || e === void 0) {
      this.scheduleDirtyFlush(hn);
      return;
    }
    this.dirtyFlushCount++;
    const t = this.getPendingIndexUpdateStartedAt(), n = Array.from(this.pendingDirtyConversations.entries()), s = n.map(([l]) => l), r = new Map(n);
    this.activeDirtyUpdateStartedAt = t, this.activeDirtyUpdateWorkStartedAt = Date.now(), this.pendingDirtyConversations.clear();
    let a = 0, i;
    try {
      for (let l = 0; l < s.length && !this.disposed && !this.isRecoveryFailed(); l += mn) {
        const c = s.slice(l, l + mn);
        await this.enqueueSourceDerivedBatch(async () => {
          const u = [], d = [];
          for (const m of c) {
            const g = await this.get(e, `SELECT
							CASE WHEN length(kv.value) <= ? THEN kv.value END AS value,
							headers.isArchived AS header_is_archived
						 FROM cursorDiskKV AS kv
						 LEFT JOIN composerHeaders AS headers
							ON headers.composerId = substr(kv.key, length('composerData:') + 1)
					 WHERE kv.key = ?
					   AND ${Ji}`, [un, `composerData:${m}`]), p = B(g) ? await this.readComposerRoot(e, g) : void 0;
            if (p === void 0) {
              d.push(m);
              continue;
            }
            u.push(await this.readIndexedConversation(e, p));
          }
          await this.waitForForegroundSearches(), await this.enqueueIndexOperation((m) => this.upsertConversationBatch(m, u, d));
        }), a = l + c.length, a < s.length && !this.disposed && !this.isRecoveryFailed() && await ct(0);
      }
      i = this.disposed ? void 0 : "complete";
    } catch (l) {
      if (i = "failed", this.isSourceDatabaseUnavailable()) {
        this.pendingDirtyConversations.clear();
        return;
      }
      let c;
      for (const u of s.slice(a)) if (this.pendingDirtyConversations.has(u) || this.pendingDirtyConversations.set(u, r.get(u)), this.pendingDirtyConversations.size >= Qr) {
        c = this.getPendingIndexUpdateStartedAt(), this.pendingDirtyConversations.clear();
        break;
      }
      this.logService.error("[ConversationSearchIndex] dirty reconciliation failed", l), c === void 0 ? this.requestReconcileInBackground(true) : this.requestDirtyOverflowReconcileInBackground(c), this.scheduleDirtyFlush(hn);
    } finally {
      const l = this.activeDirtyUpdateStartedAt, c = this.activeDirtyUpdateWorkStartedAt;
      this.activeDirtyUpdateStartedAt = void 0, this.activeDirtyUpdateWorkStartedAt = void 0, i !== void 0 && l !== void 0 && c !== void 0 && this.finishIndexUpdate(l, i, c), i === "complete" && this.changeEmitter.fire();
    }
  }
  async upsertConversationBatch(e, t, n) {
    await this.applyBatchWithFullRecovery(e, () => this.applyUpsertBatch(e, t, n));
  }
  async applyUpsertBatch(e, t, n) {
    this.throwIfSourceDatabaseInvalidated(), await this.run(e, "BEGIN IMMEDIATE");
    try {
      await this.deleteConversationRows(e, n);
      for (const s of t) await this.run(e, `INSERT INTO conversation_search_candidates (id, updated_at)
					 VALUES (?, ?)
					 ON CONFLICT(id) DO UPDATE SET updated_at = excluded.updated_at`, [s.conversationId, s.recency]), await this.run(e, `INSERT INTO conversations (
						source, scope, id, title, branches, updated_at, is_archived,
						root_fingerprint, cache_fingerprint
					 )
					 VALUES ('local', '', ?, ?, ?, ?, ?, ?, NULL)
					 ON CONFLICT(source, scope, id) DO UPDATE SET
						title = excluded.title,
						branches = excluded.branches,
						updated_at = excluded.updated_at,
						is_archived = excluded.is_archived,
						root_fingerprint = excluded.root_fingerprint`, [s.conversationId, s.title, s.branches, s.recency, s.isArchived ? 1 : 0, s.rootFingerprint]), await this.run(e, `DELETE FROM conversation_fts WHERE rowid = (
						SELECT fts_rowid FROM conversations
						WHERE source = 'local' AND id = ?
					)`, [s.conversationId]), await this.run(e, `INSERT INTO conversation_fts (rowid, title, body, branches)
					 SELECT fts_rowid, ?, ?, ? FROM conversations
					 WHERE source = 'local' AND id = ?`, [s.title, s.body, s.branches, s.conversationId]);
      await this.run(e, `DELETE FROM conversation_search_candidates
				 WHERE id IN (
					SELECT id FROM conversation_search_candidates
					ORDER BY updated_at DESC, id
					LIMIT -1 OFFSET ?
				 )`, [this.effectiveConversationCap]), await this.pruneToRecencyCap(e), this.throwIfSourceDatabaseInvalidated(), await this.run(e, "COMMIT");
    } catch (s) {
      throw await this.run(e, "ROLLBACK").catch(() => {
      }), s;
    }
  }
  async deleteConversationBatch(e, t) {
    await this.applyBatchWithFullRecovery(e, () => this.runInTransaction(e, () => this.deleteConversationRows(e, t)));
  }
  async applyBatchWithFullRecovery(e, t) {
    try {
      await t(), await this.maintainIndexAfterBatch(e);
    } catch (n) {
      if (!(n instanceof Error && n.message.includes("SQLITE_FULL"))) throw n;
      if (this.databaseFullPruneCount >= r8) throw this.logService.error(`[ConversationSearchIndex] index still full after ${this.databaseFullPruneCount} prunes since startup; leaving it full`, n), n;
      this.databaseFullPruneCount++, this.logService.warn(`[ConversationSearchIndex] index full; shrinking the conversation cap before retry ${this.databaseFullPruneCount} since startup`, n), await this.recoverFromFullDatabase(e), this.throwIfSourceDatabaseInvalidated(), await t(), await this.maintainIndexAfterBatch(e);
    }
  }
  async maintainIndexAfterBatch(e) {
    await this.run(e, "PRAGMA incremental_vacuum(128)"), await this.run(e, `INSERT INTO conversation_fts(conversation_fts, rank)
			 VALUES('merge', 64)`);
  }
  async recoverFromFullDatabase(e) {
    this.throwIfSourceDatabaseInvalidated();
    const t = await this.get(e, "SELECT COUNT(*) AS count FROM conversations"), n = B(t) && typeof t.count == "number" ? t.count : 0, s = Math.min(Math.max(n - u1, d1), this.effectiveConversationCap), r = n > s ? s : Math.max(n - u1, 0);
    await this.run(e, `PRAGMA max_page_count = ${Math.floor($i * 1.1)}`);
    try {
      this.throwIfSourceDatabaseInvalidated(), await this.runInTransaction(e, async () => {
        await this.run(e, `UPDATE conversation_search_settings
					 SET effective_conversation_cap = ?
					 WHERE id = 1`, [s]), this.throwIfSourceDatabaseInvalidated();
      }), this.effectiveConversationCap = s;
      let a = Math.max(0, n - r);
      for (; a > 0 && !this.disposed && this.recoveryState.kind !== "failed"; ) {
        const i = Math.min(a, s8);
        await this.pruneOldestConversations(e, i), a -= i;
      }
      this.throwIfSourceDatabaseInvalidated(), await this.run(e, "PRAGMA wal_checkpoint(TRUNCATE)"), await this.run(e, "PRAGMA incremental_vacuum");
    } finally {
      await this.run(e, `PRAGMA max_page_count = ${$i}`).catch(() => {
      });
    }
  }
  async pruneOldestConversations(e, t) {
    this.throwIfSourceDatabaseInvalidated(), await this.runInTransaction(e, async () => {
      await this.run(e, `DELETE FROM conversation_search_candidates
				 WHERE id IN (
					SELECT id FROM conversations
					WHERE source = 'local'
					  AND fts_rowid IN (
						SELECT fts_rowid FROM conversations
						ORDER BY updated_at, source, scope, id
						LIMIT ?
					  )
				 )`, [t]), await this.run(e, `DELETE FROM conversation_fts
				 WHERE rowid IN (
					SELECT fts_rowid FROM conversations
					ORDER BY updated_at, source, scope, id
					LIMIT ?
				 )`, [t]), await this.run(e, `DELETE FROM conversations
				 WHERE fts_rowid IN (
					SELECT fts_rowid FROM conversations
					ORDER BY updated_at, source, scope, id
					LIMIT ?
				 )`, [t]), this.throwIfSourceDatabaseInvalidated();
    });
  }
  async deleteConversationRows(e, t) {
    for (const n of t) await this.run(e, `DELETE FROM conversation_fts WHERE rowid = (
					SELECT fts_rowid FROM conversations
					WHERE source = 'local' AND id = ?
				)`, [n]), await this.run(e, `DELETE FROM conversations
				 WHERE source = 'local' AND id = ?`, [n]), await this.run(e, "DELETE FROM conversation_search_candidates WHERE id = ?", [n]);
  }
  async pruneToRecencyCap(e) {
    await this.run(e, `DELETE FROM conversation_fts
			 WHERE rowid IN (
				SELECT fts_rowid FROM conversations
				ORDER BY updated_at DESC, source, scope, id
				LIMIT -1 OFFSET ?
			 )`, [this.effectiveConversationCap]), await this.run(e, `DELETE FROM conversations
			 WHERE fts_rowid IN (
				SELECT fts_rowid FROM conversations
				ORDER BY updated_at DESC, source, scope, id
				LIMIT -1 OFFSET ?
			 )`, [this.effectiveConversationCap]);
  }
  async waitForForegroundSearches() {
    for (; !this.disposed && this.pendingSearches > 0; ) await ct(5);
  }
  async getOrOpenSourceDatabase() {
    return this.sourceDatabase !== void 0 ? this.sourceDatabase : this.enqueueSourceDerivedBatch(async () => (this.sourceDatabase ??= await this.openSourceDatabaseWithContext(), this.sourceDatabase));
  }
  enqueueSourceDerivedBatch(e) {
    const t = this.sourceBatchTail.then(async () => {
      this.throwIfSourceDatabaseInvalidated();
      try {
        return await e();
      } catch (n) {
        throw n instanceof Tt && await this.recordSourceDatabaseFailure(n), n;
      }
    });
    return this.sourceBatchTail = t.then(() => {
    }, () => {
    }), t;
  }
  enqueueSerializedIndexWork(e) {
    const n = (async () => (await this.operationTail.catch(() => {
    }), e()))();
    return this.operationTail = n.then(() => {
    }, () => {
    }), n;
  }
  enqueueSearchOperation(e) {
    const t = this.readIndexDatabase;
    if (t === void 0) return Promise.reject(new Error("Conversation search read index is unavailable"));
    const s = (async () => (await this.searchTail.catch(() => {
    }), e(t)))();
    return this.searchTail = s.then(() => {
    }, () => {
    }), s;
  }
  enqueueIndexOperation(e) {
    return this.enqueueSerializedIndexWork(async () => {
      if (this.indexDatabase === void 0) throw new Error("Conversation search index is unavailable");
      try {
        return await e(this.indexDatabase);
      } catch (t) {
        throw dn(t) && this.scheduleCorruptionRebuild(), t;
      }
    });
  }
  scheduleCorruptionRebuild() {
    if (!(this.disposed || this.recoveryState.kind === "failed")) {
      if (this.recoveryState.kind === "retryScheduled") {
        this.scheduleCorruptionRecoveryRetry("rebuild", this.recoveryState.attempts);
        return;
      }
      this.recoveryState.kind === "idle" && (this.recoveryState = { kind: "rebuilding", attempts: 1 }, this.requestReconcileInBackground());
    }
  }
  scheduleCorruptionRecoveryRetry(e, t) {
    if (this.disposed) return;
    if (t >= t8) {
      this.recoveryState = { kind: "failed", cause: "index", searchable: e === "reconcile" && this.readIndexDatabase !== void 0 };
      return;
    }
    let n;
    if (this.recoveryState.kind === "retryScheduled") {
      if (n = this.recoveryState.completion, this.recoveryState.action === "rebuild" || this.recoveryState.action === e) return;
      clearTimeout(this.recoveryState.timer);
    } else n = new em(), n.p.catch(() => {
    });
    const s = e8 * 2 ** (t - 1), r = { kind: "retryScheduled", action: e, attempts: t, completion: n, timer: setTimeout(() => {
      this.recoveryState !== r || this.disposed || (this.recoveryState = e === "rebuild" ? { kind: "rebuilding", attempts: t + 1 } : { kind: "reconciling", attempts: t + 1 }, this.requestReconcile().then(() => n.complete(), (a) => {
        n.error(a), this.logService.error("[ConversationSearchIndex] corruption recovery failed", a);
      }));
    }, s) };
    this.recoveryState = r;
  }
  isActiveRecoveryState(e) {
    return e.kind === "rebuilding" || e.kind === "reconciling";
  }
  isRecoveryFailed() {
    return this.recoveryState.kind === "failed";
  }
  cancelCorruptionRecoveryRetry() {
    this.recoveryState.kind === "retryScheduled" && (clearTimeout(this.recoveryState.timer), this.recoveryState.completion.complete());
  }
  isSourceDatabaseUnavailable() {
    return this.recoveryState.kind === "failed" && this.recoveryState.cause === "source";
  }
  async recordSourceDatabaseFailure(e) {
    if (this.isSourceDatabaseUnavailable() || !dn(e.cause)) return;
    this.recoveryFailureCountByPhase.source_database += 1;
    const t = this.recoveryState.kind === "idle" || this.recoveryState.kind === "reconciling" || this.recoveryState.kind === "retryScheduled" && this.recoveryState.action === "reconcile";
    this.cancelCorruptionRecoveryRetry(), this.recoveryState = { kind: "failed", cause: "source", searchable: t }, this.pendingDirtyConversations.clear(), this.cancelDirtyFlushTimer();
    const n = this.sourceDatabase;
    this.sourceDatabase = void 0, await this.closeDatabase(n);
  }
  throwIfSourceDatabaseInvalidated() {
    if (this.isSourceDatabaseUnavailable()) throw new Tt(new Error("Conversation search source database was invalidated"));
  }
  async rebuildCorruptIndex() {
    await this.enqueueSourceDerivedBatch(async () => {
      this.corruptionRebuildCount += 1, this.readIndexDatabase !== void 0 && this.orphanedIndexHandles.push(this.readIndexDatabase), this.readIndexDatabase = void 0, this.indexDatabase !== void 0 && this.orphanedIndexHandles.push(this.indexDatabase), this.indexDatabase = void 0, await this.searchTail.catch(() => {
      }), await this.enqueueSerializedIndexWork(async () => {
        for (; this.orphanedIndexHandles.length > 0; ) {
          const e = this.orphanedIndexHandles[0];
          if (e === void 0) break;
          await this.closeDatabaseForRecovery(e), this.orphanedIndexHandles.shift();
        }
        await this.removeIndexFiles(), this.indexDatabase = await this.openIndexDatabase(), await this.configureIndexDatabase(this.indexDatabase), this.readIndexDatabase = await this.openReadOnlyIndexDatabase(), this.resetEmitter.fire();
      });
    });
  }
  async openSourceDatabaseWithContext() {
    try {
      return await this.openSourceDatabase();
    } catch (e) {
      throw this.asSourceDatabaseError(e);
    }
  }
  async openSourceDatabase() {
    try {
      await Gt.promises.access(this.sourceDatabasePath, Gt.constants.R_OK);
    } catch {
      return;
    }
    const e = await import("@vscode/sqlite3"), t = await this.openDatabase(e.default.Database, this.sourceDatabasePath, e.default.OPEN_READONLY);
    try {
      return await this.run(t, `PRAGMA busy_timeout = ${Z7}`), t;
    } catch (n) {
      throw await this.closeDatabase(t), n;
    }
  }
  async openIndexDatabase() {
    const e = await import("@vscode/sqlite3");
    return this.openDatabase(e.default.Database, this.indexDatabasePath, e.default.OPEN_READWRITE | e.default.OPEN_CREATE);
  }
  async openReadOnlyIndexDatabase() {
    const e = await import("@vscode/sqlite3"), t = await this.openDatabase(e.default.Database, this.indexDatabasePath, e.default.OPEN_READONLY);
    try {
      return await this.run(t, "PRAGMA busy_timeout = 3000"), t;
    } catch (n) {
      throw await this.closeDatabase(t), n;
    }
  }
  async openDatabase(e, t, n) {
    return new Promise((s, r) => {
      const a = new e(t, n, (i) => {
        i !== null ? r(i) : s(a);
      });
    });
  }
  async configureIndexDatabase(e) {
    await this.run(e, "PRAGMA journal_mode = WAL"), await this.run(e, "PRAGMA synchronous = NORMAL"), await this.run(e, "PRAGMA busy_timeout = 3000"), await this.run(e, "PRAGMA temp_store = MEMORY"), await this.run(e, "PRAGMA wal_autocheckpoint = 512"), await this.run(e, "PRAGMA journal_size_limit = 16777216"), await this.run(e, "PRAGMA auto_vacuum = INCREMENTAL"), await this.run(e, `PRAGMA max_page_count = ${$i}`);
    const t = await this.get(e, "PRAGMA user_version");
    if ((B(t) && typeof t.user_version == "number" ? t.user_version : 0) !== c1) {
      await this.run(e, "VACUUM"), await this.run(e, "BEGIN IMMEDIATE");
      try {
        await this.run(e, "DROP TABLE IF EXISTS conversation_fts"), await this.run(e, "DROP TABLE IF EXISTS conversation_search_candidates"), await this.run(e, "DROP TABLE IF EXISTS conversation_search_reconciliation"), await this.run(e, "DROP TABLE IF EXISTS conversation_search_settings"), await this.run(e, "DROP TABLE IF EXISTS conversations"), await this.run(e, `CREATE TABLE conversations (
						fts_rowid INTEGER PRIMARY KEY,
						source TEXT NOT NULL CHECK (source IN ('local', 'cloud-cache')),
						scope TEXT NOT NULL,
						id TEXT NOT NULL,
						title TEXT NOT NULL,
						branches TEXT NOT NULL,
						updated_at INTEGER NOT NULL,
						is_archived INTEGER NOT NULL,
						root_fingerprint TEXT,
						cache_fingerprint TEXT,
						UNIQUE(source, scope, id),
						CHECK (
							(
								source = 'local'
								AND scope = ''
								AND root_fingerprint IS NOT NULL
								AND cache_fingerprint IS NULL
							)
							OR (
								source = 'cloud-cache'
								AND scope <> ''
								AND root_fingerprint IS NULL
							)
						)
					 )`), await this.run(e, `CREATE INDEX conversations_recency
					 ON conversations(updated_at DESC, source, scope, id)`), await this.run(e, `CREATE TABLE conversation_search_candidates (
						id TEXT PRIMARY KEY,
						updated_at INTEGER NOT NULL
					 )`), await this.run(e, `CREATE INDEX conversation_search_candidates_recency
					 ON conversation_search_candidates(updated_at DESC, id)`), await this.run(e, `CREATE TABLE conversation_search_reconciliation (
						id INTEGER PRIMARY KEY CHECK (id = 1),
						cursor TEXT NOT NULL,
						in_progress INTEGER NOT NULL
					 )`), await this.run(e, `INSERT INTO conversation_search_reconciliation (id, cursor, in_progress)
					 VALUES (1, '', 0)`), await this.run(e, `CREATE VIRTUAL TABLE conversation_fts USING fts5(
						title,
						body,
						branches,
						tokenize = 'unicode61 remove_diacritics 2',
						prefix = '2 3'
					 )`), await this.run(e, `PRAGMA user_version = ${c1}`), await this.run(e, "COMMIT");
      } catch (r) {
        throw await this.run(e, "ROLLBACK").catch(() => {
        }), r;
      }
    }
    await this.run(e, `CREATE TABLE IF NOT EXISTS conversation_search_settings (
				id INTEGER PRIMARY KEY CHECK (id = 1),
				effective_conversation_cap INTEGER NOT NULL
			 )`), await this.run(e, `INSERT OR IGNORE INTO conversation_search_settings (id, effective_conversation_cap)
			 VALUES (1, ?)`, [dt]);
    const s = await this.get(e, "SELECT effective_conversation_cap FROM conversation_search_settings WHERE id = 1");
    this.effectiveConversationCap = B(s) && typeof s.effective_conversation_cap == "number" ? Math.min(Math.max(s.effective_conversation_cap, d1), dt) : dt;
  }
  async removeIndexFiles() {
    await Promise.all([this.indexDatabasePath, `${this.indexDatabasePath}-wal`, `${this.indexDatabasePath}-shm`].map((e) => Gt.promises.rm(e, { force: true })));
  }
  async closeDatabase(e) {
    e !== void 0 && await new Promise((t) => e.close(() => t()));
  }
  async closeDatabaseForRecovery(e) {
    e !== void 0 && await new Promise((t, n) => {
      e.close((s) => {
        s !== null ? n(s) : t();
      });
    });
  }
  classifyDatabaseError(e, t) {
    return e === this.sourceDatabase ? this.asSourceDatabaseError(t) : t;
  }
  asSourceDatabaseError(e) {
    return e instanceof Tt ? e : new Tt(e);
  }
  async runInTransaction(e, t) {
    await this.run(e, "BEGIN IMMEDIATE");
    try {
      const n = await t();
      return await this.run(e, "COMMIT"), n;
    } catch (n) {
      throw await this.run(e, "ROLLBACK").catch(() => {
      }), n;
    }
  }
  async run(e, t, n = []) {
    await new Promise((s, r) => {
      e.run(t, n, (a) => {
        a !== null ? r(this.classifyDatabaseError(e, a)) : s();
      });
    });
  }
  async all(e, t, n = []) {
    return new Promise((s, r) => {
      e.all(t, n, (a, i) => {
        a !== null ? r(this.classifyDatabaseError(e, a)) : s(i);
      });
    });
  }
  async get(e, t, n = []) {
    return new Promise((s, r) => {
      e.get(t, n, (a, i) => {
        a !== null ? r(this.classifyDatabaseError(e, a)) : s(i);
      });
    });
  }
}, c8 = 1e3;
function u8(e) {
  if (!(typeof e != "object" || e === null || !("userDataPath" in e) || typeof e.userDataPath != "string" || !("restartCount" in e) || typeof e.restartCount != "number")) return { userDataPath: e.userDataPath, restartCount: e.restartCount };
}
function h1(e) {
  return Array.isArray(e) ? e.filter((t) => typeof t == "string" && t.length > 0).slice(0, c8) : [];
}
function d8(e) {
  return typeof e == "number" && Number.isFinite(e) && e >= 0 ? e : void 0;
}
function m8(e) {
  if (typeof e != "boolean") throw new Error("Invalid conversation search diagnostics mode");
  return e;
}
var h8 = class {
  constructor(e) {
    this.index = e;
  }
  async call(e, t, n, s) {
    const r = Array.isArray(n) ? n : [n];
    switch (t) {
      case "ping":
        return "pong";
      case "search": {
        const a = Fm(r[0]);
        if (a === void 0) throw new Error("Invalid conversation search query");
        return this.index.search(a, s);
      }
      case "getDiagnostics":
        return this.index.getDiagnostics();
      case "getIndexStats":
        return this.index.getIndexStats();
      case "getRecoveryStats":
        return this.index.getRecoveryStats();
      case "setDiagnosticsEnabled":
        this.index.setDiagnosticsEnabled(m8(r[0]));
        return;
      case "markDirty":
        this.index.markConversationsDirty(h1(r[0]), d8(r[1]));
        return;
      case "delete":
        await this.index.deleteConversations(h1(r[0]));
        return;
      case "reconcile":
        await this.index.requestReconcile(true);
        return;
      case "replaceCloudCacheMetadata": {
        const a = qm(r[0]);
        if (a === void 0) throw new Error("Invalid cloud-cache metadata replacement request");
        await this.index.cloudCache.replaceMetadata(a);
        return;
      }
      case "getCloudCacheBodyStatus": {
        const a = Wm(r[0]);
        if (a === void 0) throw new Error("Invalid cloud-cache body status request");
        return this.index.cloudCache.getBodyStatus(a);
      }
      case "upsertCloudCacheBodies": {
        const a = $m(r[0]);
        if (a === void 0) throw new Error("Invalid cloud-cache body upsert request");
        await this.index.cloudCache.upsertBodies(a);
        return;
      }
      case "clearCloudCache": {
        const a = Jm(r[0]);
        if (a === void 0) throw new Error("Invalid cloud-cache clear request");
        await this.index.cloudCache.clear(a);
        return;
      }
      default:
        throw new Error(`Unknown conversation search command: ${t}`);
    }
  }
  listen(e, t) {
    return t === "indexReset" ? this.index.onDidReset : t === "indexUpdated" ? this.index.onDidChange : ee.None;
  }
}, g8 = class extends Ee {
  constructor(e, t) {
    super(), this.configuration = e, this.logService = t, this.server = this._register(new mm()), this.index = new l8(e.userDataPath, t);
    let n = false;
    const s = () => {
      n || (n = true, this.index.close().finally(() => this.dispose()));
    };
    process.once("exit", s), hm(process.parentPort, Bt.exit, s);
  }
  async initialize() {
    await this.index.initialize(), this.server.registerChannel(Pm.search, new h8(this.index)), this.registerErrorHandler(), this.logService.info(`[ConversationSearchMain] initialized (restartCount=${this.configuration.restartCount})`);
  }
  registerErrorHandler() {
    process.on("uncaughtException", (e) => st(e)), process.on("unhandledRejection", (e) => st(e)), W1((e) => {
      const t = mo(e, true);
      t.length > 0 && this.logService.error(`[uncaught exception in conversation-search]: ${t}`);
    });
  }
};
async function f8(e) {
  const t = new Um(new Mm());
  try {
    const n = new g8(e, t);
    process.parentPort.postMessage(Bt.ipcReady), await n.initialize(), process.parentPort.postMessage(Bt.initDone);
  } catch (n) {
    const s = { type: Bt.initFailed, error: n instanceof Error ? n.message : String(n) };
    process.parentPort.postMessage(s), process.exit(1);
  }
}
var p8 = setTimeout(() => {
  process.parentPort.postMessage({ warning: "[ConversationSearchMain] did not receive configuration within 30s" });
}, 3e4);
process.parentPort.once("message", (e) => {
  clearTimeout(p8);
  const t = u8(e.data);
  if (t === void 0) {
    process.parentPort.postMessage({ type: Bt.initFailed, error: "Invalid conversation search process configuration" }), process.exit(1);
    return;
  }
  f8(t);
});
