/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7b61e37b-54b6-5896-9f7b-327c2fa32ec5");
  } catch (e3) {
  }
})();
function rr(e, t, s, i) {
  var r = arguments.length, n = r < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, s) : i, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, s, i);
  else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (n = (r < 3 ? o(n) : r > 3 ? o(t, s, n) : o(t, s)) || n);
  return r > 3 && n && Object.defineProperty(t, s, n), n;
}
function nr(e, t, s = 0, i = e.length) {
  let r = s, n = i;
  for (; r < n; ) {
    const o = Math.floor((r + n) / 2);
    t(e[o]) ? r = o + 1 : n = o;
  }
  return r - 1;
}
var or = class Hi {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (Hi.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const i of this._array) if (this._prevFindLastPredicate(i) && !t(i)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = t;
    }
    const s = nr(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = s + 1, s === -1 ? void 0 : this._array[s];
  }
};
or.assertInvariants = false;
var ar = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        throw e.stack ? Je.isErrorNoTelemetry(e) ? new Je(e.message + `

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
}, lr = new ar();
function Qe(e) {
  hr(e) || lr.onUnexpectedError(e);
}
var Vt = "Canceled";
function hr(e) {
  return e instanceof ae ? true : e instanceof Error && e.name === Vt && e.message === Vt;
}
var ae = class extends Error {
  constructor() {
    if (super(Vt), this.name = this.message, dr && typeof console < "u" && fr()) {
      const e = new Error().stack ?? "";
      cr.some((t) => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
    }
  }
}, Je = class qs extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof qs) return t;
    const s = new qs();
    return s.message = t.message, s.stack = t.stack, s;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}, cr = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], ur = 5e3, Hs = 0;
function fr() {
  const e = Date.now();
  return e < Hs ? false : (Hs = e + ur, true);
}
var dr = false;
function gr(e, t, s = (i, r) => i === r) {
  if (e === t) return true;
  if (!e || !t || e.length !== t.length) return false;
  for (let i = 0, r = e.length; i < r; i++) if (!s(e[i], t[i])) return false;
  return true;
}
function pr(e) {
  return e.filter((t) => !!t);
}
function js(e, t) {
  let s;
  if (typeof t == "number") {
    let i = t;
    s = () => {
      const r = Math.sin(i++) * 179426549;
      return r - Math.floor(r);
    };
  } else s = Math.random;
  for (let i = e.length - 1; i > 0; i -= 1) {
    const r = Math.floor(s() * (i + 1)), n = e[i];
    e[i] = e[r], e[r] = n;
  }
}
function mr(e) {
  return e[Math.floor(Math.random() * e.length)];
}
var Qt;
((e) => {
  function t(n) {
    return n < 0;
  }
  e.isLessThan = t;
  function s(n) {
    return n <= 0;
  }
  e.isLessThanOrEqual = s;
  function i(n) {
    return n > 0;
  }
  e.isGreaterThan = i;
  function r(n) {
    return n === 0;
  }
  e.isNeitherLessOrGreaterThan = r, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(Qt || (Qt = {}));
function vr(e, t) {
  return (s, i) => t(e(s), e(i));
}
var _r = (e, t) => e - t, Ks = class Ms {
  constructor(t) {
    this.iterate = t;
  }
  forEach(t) {
    this.iterate((s) => (t(s), true));
  }
  toArray() {
    const t = [];
    return this.iterate((s) => (t.push(s), true)), t;
  }
  filter(t) {
    return new Ms((s) => this.iterate((i) => t(i) ? s(i) : true));
  }
  map(t) {
    return new Ms((s) => this.iterate((i) => s(t(i))));
  }
  some(t) {
    let s = false;
    return this.iterate((i) => (s = t(i), !s)), s;
  }
  findFirst(t) {
    let s;
    return this.iterate((i) => t(i) ? (s = i, false) : true), s;
  }
  findLast(t) {
    let s;
    return this.iterate((i) => (t(i) && (s = i), true)), s;
  }
  findLastMaxBy(t) {
    let s, i = true;
    return this.iterate((r) => ((i || Qt.isGreaterThan(t(r, s))) && (i = false, s = r), true)), s;
  }
};
Ks.empty = new Ks((e) => {
});
var Gs, Vs;
function wr(e, t) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const i of e) {
    const r = t(i);
    let n = s[r];
    n || (n = s[r] = []), n.push(i);
  }
  return s;
}
var i2 = class {
  constructor(e, t) {
    this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[Gs] = "SetWithKey";
    for (const s of e) this.add(s);
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
    this._map.forEach((s) => e.call(t, s, s, this));
  }
  [(Vs = Symbol.iterator, Gs = Symbol.toStringTag, Vs)]() {
    return this.values();
  }
}, Qs, Js, Ys, yr = class {
  constructor(e, t) {
    this.uri = e, this.value = t;
  }
};
function Cr(e) {
  return Array.isArray(e);
}
var Xs = class ut {
  constructor(t, s) {
    if (this[Qs] = "ResourceMap", t instanceof ut) this.map = new Map(t.map), this.toKey = s ?? ut.defaultToKey;
    else if (Cr(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = s ?? ut.defaultToKey;
      for (const [i, r] of t) this.set(i, r);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? ut.defaultToKey;
  }
  set(t, s) {
    return this.map.set(this.toKey(t), new yr(t, s)), this;
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
  forEach(t, s) {
    typeof s < "u" && (t = t.bind(s));
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
  *[(Qs = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map) yield [t.uri, t.value];
  }
};
Xs.defaultToKey = (e) => e.toString();
var Zs = Xs, r2 = class {
  constructor(e, t) {
    this[Js] = "ResourceSet", !e || typeof e == "function" ? this._map = new Zs(e) : (this._map = new Zs(t), e.forEach(this.add, this));
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
    this._map.forEach((s, i) => e.call(t, i, i, this));
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
  [(Js = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
}, br = class {
  constructor() {
    this[Ys] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
    const s = this._map.get(e);
    if (s) return t !== 0 && this.touch(s, t), s.value;
  }
  set(e, t, s = 0) {
    let i = this._map.get(e);
    if (i) i.value = t, s !== 0 && this.touch(i, s);
    else {
      switch (i = { key: e, value: t, next: void 0, previous: void 0 }, s) {
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
    const s = this._state;
    let i = this._head;
    for (; i; ) {
      if (t ? e.bind(t)(i.value, i.key, this) : e(i.value, i.key, this), this._state !== s) throw new Error("LinkedMap got modified during iteration.");
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
  *iterateLinked(e, t, s) {
    for (; ; ) {
      if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
      if (!t) return;
      const i = s(t);
      t = t.next, yield i;
    }
  }
  [(Ys = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._head, s = this.size;
    for (; t && s > e; ) this._map.delete(t.key), t = t.next, s--;
    this._head = t, this._size = s, t && (t.previous = void 0), this._state++;
  }
  trimNew(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._tail, s = this.size;
    for (; t && s > e; ) this._map.delete(t.key), t = t.previous, s--;
    this._tail = t, this._size = s, t && (t.next = void 0), this._state++;
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
      const t = e.next, s = e.previous;
      if (!t || !s) throw new Error("Invalid list");
      t.previous = s, s.next = t;
    }
    e.next = void 0, e.previous = void 0, this._state++;
  }
  touch(e, t) {
    if (!this._head || !this._tail) throw new Error("Invalid list");
    if (!(t !== 1 && t !== 2)) {
      if (t === 1) {
        if (e === this._head) return;
        const s = e.next, i = e.previous;
        e === this._tail ? (i.next = void 0, this._tail = i) : (s.previous = i, i.next = s), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
      } else if (t === 2) {
        if (e === this._tail) return;
        const s = e.next, i = e.previous;
        e === this._head ? (s.previous = void 0, this._head = s) : (s.previous = i, i.next = s), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
      }
    }
  }
  toJSON() {
    const e = [];
    return this.forEach((t, s) => {
      e.push([s, t]);
    }), e;
  }
  fromJSON(e) {
    this.clear();
    for (const [t, s] of e) this.set(t, s);
  }
}, Er = class extends br {
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
}, Jt = class extends Er {
  constructor(e, t = 1) {
    super(e, t);
  }
  trim(e) {
    this.trimOld(e);
  }
  set(e, t) {
    return super.set(e, t), this.checkTrim(), this;
  }
}, Ar = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    let s = this.map.get(e);
    s || (s = /* @__PURE__ */ new Set(), this.map.set(e, s)), s.add(t);
  }
  delete(e, t) {
    const s = this.map.get(e);
    s && (s.delete(t), s.size === 0 && this.map.delete(e));
  }
  forEach(e, t) {
    const s = this.map.get(e);
    s && s.forEach(t);
  }
  get(e) {
    const t = this.map.get(e);
    return t || /* @__PURE__ */ new Set();
  }
};
function Yt(e, t) {
  const s = this;
  let i = false, r;
  return function() {
    if (i) return r;
    if (i = true, t) try {
      r = e.apply(s, arguments);
    } finally {
      t();
    }
    else r = e.apply(s, arguments);
    return r;
  };
}
function Lr(e) {
  return typeof e == "string";
}
function Dr(e) {
  return typeof e == "number" && !isNaN(e);
}
function Rr(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
function Pr(e) {
  return typeof e > "u";
}
function Sr(e) {
  return Pr(e) || e === null;
}
function kr(e, t) {
  if (!e) throw new Error(t ? `Unexpected type, expected '${t}'` : "Unexpected type");
}
function e1(e) {
  return typeof e == "function";
}
var Xt;
((e) => {
  function t(p) {
    return p && typeof p == "object" && typeof p[Symbol.iterator] == "function";
  }
  e.is = t;
  const s = Object.freeze([]);
  function i() {
    return s;
  }
  e.empty = i;
  function* r(p) {
    yield p;
  }
  e.single = r;
  function n(p) {
    return t(p) ? p : r(p);
  }
  e.wrap = n;
  function o(p) {
    return p || s;
  }
  e.from = o;
  function* a(p) {
    for (let L = p.length - 1; L >= 0; L--) yield p[L];
  }
  e.reverse = a;
  function l(p) {
    return !p || p[Symbol.iterator]().next().done === true;
  }
  e.isEmpty = l;
  function h(p) {
    return p[Symbol.iterator]().next().value;
  }
  e.first = h;
  function u(p, L) {
    let I = 0;
    for (const J of p) if (L(J, I++)) return true;
    return false;
  }
  e.some = u;
  function c(p, L) {
    for (const I of p) if (L(I)) return I;
  }
  e.find = c;
  function* f(p, L) {
    for (const I of p) L(I) && (yield I);
  }
  e.filter = f;
  function* d(p, L) {
    let I = 0;
    for (const J of p) yield L(J, I++);
  }
  e.map = d;
  function* _(p, L) {
    let I = 0;
    for (const J of p) yield* L(J, I++);
  }
  e.flatMap = _;
  function* C(...p) {
    for (const L of p) Rr(L) ? yield* L : yield L;
  }
  e.concat = C;
  function b(p, L, I) {
    let J = I;
    for (const qe of p) J = L(J, qe);
    return J;
  }
  e.reduce = b;
  function k(p) {
    let L = 0;
    for (const I of p) L++;
    return L;
  }
  e.length = k;
  function* z(p, L, I = p.length) {
    for (L < -p.length && (L = 0), L < 0 && (L += p.length), I < 0 ? I += p.length : I > p.length && (I = p.length); L < I; L++) yield p[L];
  }
  e.slice = z;
  function M(p, L = Number.POSITIVE_INFINITY) {
    const I = [];
    if (L === 0) return [I, p];
    const J = p[Symbol.iterator]();
    for (let qe = 0; qe < L; qe++) {
      const pt = J.next();
      if (pt.done) return [I, e.empty()];
      I.push(pt.value);
    }
    return [I, { [Symbol.iterator]() {
      return J;
    } }];
  }
  e.consume = M;
  async function $e(p) {
    const L = [];
    for await (const I of p) L.push(I);
    return Promise.resolve(L);
  }
  e.asyncToArray = $e;
})(Xt || (Xt = {}));
var t1 = void 0, Zt = /* @__PURE__ */ new Set(), Ir = 50;
function Ye(e, t) {
  if (ye?.onLifecycleMisuse?.(e, t), !t1) return;
  const s = `${t}\0${e.stack ?? ""}`;
  Zt.has(s) || Zt.size >= Ir || (Zt.add(s), t1(e, t));
}
function es(e) {
  Ye(e, "disposable_post_dispose_set");
}
var Tr = false, ye = null, Wr = class ji {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let s = this.livingDisposables.get(t);
    return s || (s = { parent: null, source: null, isSingleton: false, value: t, idx: ji.idx++ }, this.livingDisposables.set(t, s)), s;
  }
  trackDisposable(t) {
    const s = this.getDisposableData(t);
    s.source || (s.source = new Error().stack);
  }
  setParent(t, s) {
    const i = this.getDisposableData(t);
    i.parent = s;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = true;
  }
  getRootParent(t, s) {
    const i = s.get(t);
    if (i) return i;
    const r = t.parent ? this.getRootParent(this.getDisposableData(t.parent), s) : t;
    return s.set(t, r), r;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, i]) => i.source !== null && !this.getRootParent(i, t).isSingleton).flatMap(([i]) => i);
  }
  computeLeakingDisposables(t = 10, s) {
    let i;
    if (s) i = s;
    else {
      const l = /* @__PURE__ */ new Map(), h = [...this.livingDisposables.values()].filter((c) => c.source !== null && !this.getRootParent(c, l).isSingleton);
      if (h.length === 0) return;
      const u = new Set(h.map((c) => c.value));
      if (i = h.filter((c) => !(c.parent && u.has(c.parent))), i.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!i) return;
    function r(l) {
      function h(c, f) {
        for (; c.length > 0 && f.some((d) => typeof d == "string" ? d === c[0] : c[0].match(d)); ) c.shift();
      }
      const u = l.source.split(`
`).map((c) => c.trim().replace("at ", "")).filter((c) => c !== "");
      return h(u, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), u.reverse();
    }
    const n = new Ar();
    for (const l of i) {
      const h = r(l);
      for (let u = 0; u <= h.length; u++) n.add(h.slice(0, u).join(`
`), l);
    }
    i.sort(vr((l) => l.idx, _r));
    let o = "", a = 0;
    for (const l of i.slice(0, t)) {
      a++;
      const h = r(l), u = [];
      for (let c = 0; c < h.length; c++) {
        let f = h[c];
        f = `(shared with ${n.get(h.slice(0, c + 1).join(`
`)).size}/${i.length} leaks) at ${f}`;
        const _ = n.get(h.slice(0, c).join(`
`)), C = wr([..._].map((b) => r(b)[c]), (b) => b);
        delete C[h[c]];
        for (const [b, k] of Object.entries(C)) u.unshift(`    - stacktraces of ${k.length} other leaks continue with ${b}`);
        u.unshift(f);
      }
      o += `


==================== Leaking disposable ${a}/${i.length}: ${l.value.constructor.name} ====================
${u.join(`
`)}
============================================================

`;
    }
    return i.length > t && (o += `


... and ${i.length - t} more leaking disposables

`), { leaks: i, details: o };
  }
};
Wr.idx = 0;
function xr(e) {
  ye = e;
}
if (Tr) {
  const e = "__is_disposable_tracked__";
  xr(new class {
    trackDisposable(t) {
      const s = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        t[e] || console.log(s);
      }, 3e3);
    }
    setParent(t, s) {
      if (t && t !== ee.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsDisposed(t) {
      if (t && t !== ee.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsSingleton(t) {
    }
  }());
}
function Xe(e) {
  return ye?.trackDisposable(e), e;
}
function Ze(e) {
  ye?.markAsDisposed(e);
}
function et(e, t) {
  ye?.setParent(e, t);
}
function $r(e, t) {
  if (ye) for (const s of e) ye.setParent(s, t);
}
function s1(e) {
  return ye?.markAsSingleton(e), e;
}
function qr(e) {
  return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
function tt(e) {
  if (Xt.is(e)) {
    let t;
    for (const s of e) if (s) try {
      s.dispose();
    } catch (i) {
      (t ??= []).push(i);
    }
    if (t !== void 0) throw t.length === 1 ? t[0] : new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function Mr(...e) {
  const t = G(() => tt(e));
  return $r(e, t), t;
}
function G(e) {
  const t = Xe({ dispose: Yt(() => {
    Ze(t), e();
  }) });
  return t;
}
var i1 = class Fs {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = false, Xe(this);
  }
  dispose() {
    this._isDisposed || (Ze(this), this._isDisposed = true, this.clear());
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
      tt(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(t) {
    if (!t) return t;
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    if (et(t, this), this._isDisposed) {
      const s = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      Fs.DISABLE_DISPOSED_WARNING || console.warn(s.stack), es(s);
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
    t && this._toDispose.has(t) && (this._toDispose.delete(t), et(t, null));
  }
  transferOut(t) {
    if (this._isDisposed) {
      const s = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      Fs.DISABLE_DISPOSED_WARNING || console.warn(s.stack), Ye(s, "disposable_use_after_dispose");
    }
    return this.deleteAndLeak(t), t;
  }
};
i1.DISABLE_DISPOSED_WARNING = false;
var V = i1, ee = class {
  constructor() {
    this._store = new V(), Xe(this), et(this._store, this);
  }
  dispose() {
    Ze(this), this._store.dispose();
  }
  _register(e) {
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(e);
  }
};
ee.None = Object.freeze({ dispose() {
} });
var Ce = class {
  constructor() {
    this._isDisposed = false, Xe(this);
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(e) {
    if (this._isDisposed) {
      if (e) {
        const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
        V.DISABLE_DISPOSED_WARNING || console.warn(t.stack), es(t), e.dispose();
      }
      return;
    }
    e !== this._value && (this._value?.dispose(), e && et(e, this), this._value = e);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, Ze(this), this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    const e = this._value;
    return this._value = void 0, e && et(e, null), e;
  }
}, r1 = class {
  constructor(e = /* @__PURE__ */ new Map()) {
    this._isDisposed = false, this._store = e, Xe(this);
  }
  dispose() {
    Ze(this), this._isDisposed = true, this.clearAndDisposeAll();
  }
  clearAndDisposeAll() {
    if (this._store.size) try {
      tt(this._store.values());
    } finally {
      this._store.clear();
    }
  }
  has(e) {
    return this._store.has(e);
  }
  get size() {
    return this._store.size;
  }
  get(e) {
    return this._store.get(e);
  }
  set(e, t, s = false) {
    if (this._isDisposed) {
      const i = new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!");
      console.warn(i.stack), es(i);
      return;
    }
    s || this._store.get(e)?.dispose(), this._store.set(e, t);
  }
  deleteAndDispose(e) {
    this._store.get(e)?.dispose(), this._store.delete(e);
  }
  deleteAndLeak(e) {
    const t = this._store.get(e);
    return this._store.delete(e), t;
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
};
function ts(e, t) {
  return e.then((s) => (t.isDisposed ? s.dispose() : t.add(s), s));
}
var n1 = class Ns {
  constructor(t) {
    this.element = t, this.next = Ns.Undefined, this.prev = Ns.Undefined;
  }
};
n1.Undefined = new n1(void 0);
var Fr = globalThis.performance && typeof globalThis.performance.now == "function", Nr = class Ki {
  static create(t) {
    return new Ki(t);
  }
  constructor(t) {
    this._now = Fr && t === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
}, o1 = false, Or = false, x;
((e) => {
  e.None = () => ee.None;
  function t(w) {
    if (Or) {
      const { onDidAddListener: g } = w, v = is.create();
      let m = 0;
      w.onDidAddListener = () => {
        ++m === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), v.print()), g?.();
      };
    }
  }
  function s(w, g) {
    return d(w, () => {
    }, 0, void 0, true, void 0, g);
  }
  e.defer = s;
  function i(w) {
    return (g, v = null, m) => {
      let y = false, E;
      return E = w((P) => {
        if (!y) return E ? E.dispose() : y = true, g.call(v, P);
      }, null, m), y && E.dispose(), E;
    };
  }
  e.once = i;
  function r(w, g) {
    return e.once(e.filter(w, g));
  }
  e.onceIf = r;
  function n(w, g, v) {
    return c((m, y = null, E) => w((P) => m.call(y, g(P)), null, E), v);
  }
  e.map = n;
  function o(w, g, v) {
    return c((m, y = null, E) => w((P) => {
      g(P), m.call(y, P);
    }, null, E), v);
  }
  e.forEach = o;
  function a(w, g, v) {
    return c((m, y = null, E) => w((P) => g(P) && m.call(y, P), null, E), v);
  }
  e.filter = a;
  function l(w) {
    return w;
  }
  e.signal = l;
  function h(...w) {
    return (g, v = null, m) => {
      const y = Mr(...w.map((E) => E((P) => g.call(v, P))));
      return f(y, m);
    };
  }
  e.any = h;
  function u(w, g, v, m) {
    let y = v;
    return n(w, (E) => (y = g(y, E), y), m);
  }
  e.reduce = u;
  function c(w, g) {
    let v;
    const m = { onWillAddFirstListener() {
      v = w(y.fire, y);
    }, onDidRemoveLastListener() {
      v?.dispose();
    } };
    g || t(m);
    const y = new W(m);
    return g?.add(y), y.event;
  }
  function f(w, g) {
    return g instanceof Array ? g.push(w) : g && g.add(w), w;
  }
  function d(w, g, v = 100, m = false, y = false, E, P) {
    let F, H, Me, mt = 0, Ve;
    const zs = { leakWarningThreshold: E, onWillAddFirstListener() {
      F = w((sr) => {
        mt++, H = g(H, sr), m && !Me && (vt.fire(H), H = void 0), Ve ??= () => {
          const ir = H;
          H = void 0, Me = void 0, (!m || mt > 1) && vt.fire(ir), mt = 0;
        }, typeof v == "number" ? (clearTimeout(Me), Me = setTimeout(Ve, v)) : Me === void 0 && (Me = 0, queueMicrotask(Ve));
      });
    }, onWillRemoveListener() {
      y && mt > 0 && Ve?.();
    }, onDidRemoveLastListener() {
      Ve = void 0, F.dispose();
    } };
    P || t(zs);
    const vt = new W(zs);
    return P?.add(vt), vt.event;
  }
  e.debounce = d;
  function _(w, g = 0, v) {
    return e.debounce(w, (m, y) => m ? (m.push(y), m) : [y], g, void 0, true, void 0, v);
  }
  e.accumulate = _;
  function C(w, g = (m, y) => m === y, v) {
    let m = true, y;
    return a(w, (E) => {
      const P = m || !g(E, y);
      return m = false, y = E, P;
    }, v);
  }
  e.latch = C;
  function b(w, g, v) {
    return [e.filter(w, g, v), e.filter(w, (m) => !g(m), v)];
  }
  e.split = b;
  function k(w, g = false, v = [], m) {
    let y = v.slice(), E = w((H) => {
      y ? y.push(H) : F.fire(H);
    });
    m && m.add(E);
    const P = () => {
      y?.forEach((H) => F.fire(H)), y = null;
    }, F = new W({ onWillAddFirstListener() {
      E || (E = w((H) => F.fire(H)), m && m.add(E));
    }, onDidAddFirstListener() {
      y && (g ? setTimeout(P) : P());
    }, onDidRemoveLastListener() {
      E && E.dispose(), E = null;
    } });
    return m && m.add(F), F.event;
  }
  e.buffer = k;
  function z(w, g) {
    return (m, y, E) => {
      const P = g(new $e());
      return w(function(F) {
        const H = P.evaluate(F);
        H !== M && m.call(y, H);
      }, void 0, E);
    };
  }
  e.chain = z;
  const M = /* @__PURE__ */ Symbol("HaltChainable");
  class $e {
    constructor() {
      this.steps = [];
    }
    map(g) {
      return this.steps.push(g), this;
    }
    forEach(g) {
      return this.steps.push((v) => (g(v), v)), this;
    }
    filter(g) {
      return this.steps.push((v) => g(v) ? v : M), this;
    }
    reduce(g, v) {
      let m = v;
      return this.steps.push((y) => (m = g(m, y), m)), this;
    }
    latch(g = (v, m) => v === m) {
      let v = true, m;
      return this.steps.push((y) => {
        const E = v || !g(y, m);
        return v = false, m = y, E ? y : M;
      }), this;
    }
    evaluate(g) {
      for (const v of this.steps) if (g = v(g), g === M) break;
      return g;
    }
  }
  function p(w, g, v = (m) => m) {
    const m = (...F) => P.fire(v(...F)), y = () => w.on(g, m), E = () => w.removeListener(g, m), P = new W({ onWillAddFirstListener: y, onDidRemoveLastListener: E });
    return P.event;
  }
  e.fromNodeEventEmitter = p;
  function L(w) {
    let g;
    const v = () => {
      g = w.subscribe((E) => y.fire(E));
    }, m = () => {
      g?.unsubscribe(), g = void 0;
    }, y = new W({ onWillAddFirstListener: v, onDidRemoveLastListener: m });
    return y.event;
  }
  e.fromRxJS = L;
  function I(w, g, v = (m) => m) {
    const m = (...F) => P.fire(v(...F)), y = () => w.addEventListener(g, m), E = () => w.removeEventListener(g, m), P = new W({ onWillAddFirstListener: y, onDidRemoveLastListener: E });
    return P.event;
  }
  e.fromDOMEventEmitter = I;
  function J(w, g) {
    return new Promise((v) => i(w)(v, null, g));
  }
  e.toPromise = J;
  function qe(w) {
    const g = new W();
    return w.then((v) => {
      g.fire(v);
    }, () => {
      g.fire(void 0);
    }).finally(() => {
      g.dispose();
    }), g.event;
  }
  e.fromPromise = qe;
  function pt(w, g) {
    return w((v) => g.fire(v));
  }
  e.forward = pt;
  function Xi(w, g, v) {
    return g(v), w((m) => g(m));
  }
  e.runAndSubscribe = Xi;
  class Zi {
    constructor(g, v) {
      this._observable = g, this._counter = 0, this._hasChanged = false;
      const m = { onWillAddFirstListener: () => {
        g.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        g.removeObserver(this);
      } };
      v || t(m), this.emitter = new W(m), v && v.add(this.emitter);
    }
    beginUpdate(g) {
      this._counter++;
    }
    handlePossibleChange(g) {
    }
    handleChange(g, v) {
      this._hasChanged = true;
    }
    endUpdate(g) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function er(w, g) {
    return new Zi(w, g).emitter.event;
  }
  e.fromObservable = er;
  function tr(w) {
    return (g, v, m) => {
      let y = 0, E = false;
      const P = { beginUpdate() {
        y++;
      }, endUpdate() {
        y--, y === 0 && (w.reportChanges(), E && (E = false, g.call(v)));
      }, handlePossibleChange() {
      }, handleChange() {
        E = true;
      } };
      w.addObserver(P), w.reportChanges();
      const F = { dispose() {
        w.removeObserver(P);
      } };
      return m instanceof V ? m.add(F) : Array.isArray(m) && m.push(F), F;
    };
  }
  e.fromObservableLight = tr;
})(x || (x = {}));
var ss = class Os {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${Os._idPool++}`, Os.all.add(this);
  }
  start(t) {
    this._stopWatch = new Nr(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
ss.all = /* @__PURE__ */ new Set(), ss._idPool = 0;
var Ur = ss, a1 = -1, Br = 1;
function l1() {
  return (Br++).toString(16).padStart(3, "0");
}
var zr = class {
  constructor(e, t, s = l1()) {
    this._errorHandler = e, this.threshold = t, this.name = s, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    const s = this.threshold;
    if (s <= 0 || t < s) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const i = e.value, r = this._stacks.get(i) || 0;
    if (this._stacks.set(i, r + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = s * 0.5;
      const [n, o] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${o}):`;
      console.warn(a), console.warn(n);
      const l = o / t > 0.3 ? "dominated" : "popular", h = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, u = new h1(l, a, n, t, h);
      this._errorHandler(u), Ye(u, "emitter_listener_leak");
    }
    return () => {
      const n = this._stacks.get(i) || 0;
      n <= 1 ? this._stacks.delete(i) : this._stacks.set(i, n - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (const [s, i] of this._stacks) (!e || t < i) && (e = [s, i], t = i);
    return e;
  }
}, is = class Gi {
  constructor(t) {
    this.value = t;
  }
  static create() {
    const t = new Error();
    return new Gi(t.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, h1 = class extends Error {
  constructor(e, t, s, i, r) {
    super(r ? `[${r}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = i, this.details = t, this.stack = s;
  }
}, Hr = class extends h1 {
  constructor(e, t, s, i, r) {
    super(e, t, s, i, r), this.name = "ListenerRefusalError";
  }
}, _t = class {
  constructor(e) {
    this.value = e;
  }
}, jr = 2, c1 = (e, t) => {
  if (e instanceof _t) t(e);
  else for (let s = 0; s < e.length; s++) {
    const i = e[s];
    i && t(i);
  }
}, W = class {
  constructor(e) {
    this._size = 0, this._options = e, (a1 > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? a1, this._leakWarningName = this._options?.leakWarningName ?? l1(), this._leakWarningErrorHandler = this._options?.onListenerError ?? Qe), this._perfMon = this._options?._profName ? new Ur(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  _getLeakageMonitor() {
    if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new zr(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (o1) {
          const e = this._listeners;
          queueMicrotask(() => {
            c1(e, (t) => t.stack?.print());
          });
        }
        c1(this._listeners, (e) => {
          e.value = void 0;
        }), this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (e, t, s) => {
      if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
        const a = this._getLeakageMonitor();
        if (a) {
          const l = `[${a.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${a.threshold})`;
          console.warn(l);
          const h = a.getMostFrequentStack() ?? ["UNKNOWN stack", -1], u = h[1] / this._size > 0.3 ? "dominated" : "popular", c = new Hr(u, `${l}. HINT: Stack shows most frequent listener (${h[1]}-times)`, h[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || Qe)(c), Ye(c, "emitter_listener_refusal"), ee.None;
        }
      }
      if (this._disposed) {
        const a = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return Ye(a, "emitter_use_after_dispose"), ee.None;
      }
      t && (e = e.bind(t));
      const i = new _t(e);
      let r, n;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const a = this._getLeakageMonitor();
        a && (i.stack = is.create(), r = a.check(i.stack, this._size + 1));
      }
      o1 && (i.stack = n ?? is.create()), this._listeners ? this._listeners instanceof _t ? (this._deliveryQueue ??= new Kr(), this._listeners = [this._listeners, i]) : this._listeners.push(i) : (this._options?.onWillAddFirstListener?.(this), this._listeners = i, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const o = G(() => {
        r?.(), this._removeListener(i);
      });
      return s instanceof V ? s.add(o) : Array.isArray(s) && s.push(o), o;
    }, this._event;
  }
  _removeListener(e) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    const t = this._listeners, s = t.indexOf(e);
    if (s === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, t[s] = void 0;
    const i = this._deliveryQueue.current === this;
    if (this._size * jr <= t.length) {
      let r = 0;
      for (let n = 0; n < t.length; n++) t[n] ? t[r++] = t[n] : i && r < this._deliveryQueue.end && (this._deliveryQueue.end--, r < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = r;
    }
  }
  _deliver(e, t) {
    if (!e) return;
    const s = this._options?.onListenerError || Qe;
    if (!s) {
      e.value(t);
      return;
    }
    try {
      e.value(t);
    } catch (i) {
      s(i);
    }
  }
  _deliverQueue(e) {
    const t = e.current._listeners;
    for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
    e.reset();
  }
  fire(e) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof _t) this._deliver(this._listeners, e);
    else {
      const t = this._deliveryQueue;
      t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
}, Kr = class {
  constructor() {
    this.i = -1, this.end = 0;
  }
  enqueue(e, t, s) {
    this.i = 0, this.end = s, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
}, Gr = class {
  constructor(e) {
    this.event = e, this._listener = new Ce();
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
}, Vr = class {
  constructor() {
    this.hasListeners = false, this.sources = [], this.emitter = new W({ onWillAddFirstListener: () => this.onFirstListenerAdd(), onDidRemoveLastListener: () => this.onLastListenerRemove() });
  }
  get event() {
    return this.emitter.event;
  }
  add(e) {
    const t = new Gr(e);
    return this.sources.push(t), this.hasListeners && t.hook(this.emitter.fire, this.emitter), G(Yt(() => {
      t.disposeListener();
      const i = this.sources.indexOf(t);
      i !== -1 && this.sources.splice(i, 1);
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
}, Qr = class {
  constructor() {
    this.listening = false, this.inputEvent = x.None, this.emitter = new W({ onDidAddFirstListener: () => {
      this.listening = true, this.inputEventListener?.dispose(), this.inputEventListener = new Ce(), this.inputEventListener.value = this.inputEvent(this.emitter.fire, this.emitter);
    }, onDidRemoveLastListener: () => {
      this.listening = false, this.inputEventListener?.dispose(), this.inputEventListener = void 0;
    } }), this.event = this.emitter.event;
  }
  set input(e) {
    this.inputEvent = e, this.listening && (this.inputEventListener ??= new Ce(), this.inputEventListener.value = e(this.emitter.fire, this.emitter));
  }
  dispose() {
    this.inputEventListener?.dispose(), this.inputEventListener = void 0, this.inputEvent = x.None, this.emitter.dispose();
  }
}, u1 = Object.freeze(function(e, t) {
  const s = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(s);
  } };
}), st;
((e) => {
  function t(s) {
    return s === e.None || s === e.Cancelled || s instanceof wt ? true : !s || typeof s != "object" ? false : typeof s.isCancellationRequested == "boolean" && typeof s.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: x.None }), e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: u1 });
})(st || (st = {}));
var wt = class {
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
    return this._isCancelled ? u1 : (this._emitter || (this._emitter = new W()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}, Fe = class {
  constructor(e) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new wt()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof wt && this._token.cancel() : this._token = st.Cancelled;
  }
  dispose(e = false) {
    e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof wt && this._token.dispose() : this._token = st.None;
  }
};
function Jr() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function f1() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var Yr = f1() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function d1(e, t) {
  let s;
  return t.length === 0 ? s = e : s = e.replace(/\{(\d+)\}/g, (i, r) => {
    const n = parseInt(r, 10), o = t[n];
    let a = i;
    return typeof o == "string" ? a = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a;
  }), Yr && (s = "［" + s.replace(/[aouei]/g, "$&$&") + "］"), s;
}
function ne(e, t, ...s) {
  return d1(typeof e == "number" ? Xr(e, t) : t, s);
}
function Xr(e, t) {
  const s = Jr()?.[e];
  if (typeof s != "string") {
    if (typeof t == "string") return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return s;
}
var Ne = "en", yt = false, Ct = false, it = false, Zr = false, g1 = false, rs = false, en = false, tn = false, sn = false, rn = false, bt = void 0, Et = Ne, p1 = Ne, nn = void 0, fe = void 0, de = globalThis, j = void 0;
typeof de.vscode < "u" && typeof de.vscode.process < "u" ? j = de.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (j = process);
var m1 = typeof j?.versions?.electron == "string", on = m1 && j?.type === "renderer";
if (typeof j == "object") {
  yt = j.platform === "win32", Ct = j.platform === "darwin", it = j.platform === "linux", Zr = it && !!j.env.SNAP && !!j.env.SNAP_REVISION, en = m1, sn = !!j.env.CI || !!j.env.BUILD_ARTIFACTSTAGINGDIRECTORY, bt = Ne, Et = Ne;
  const e = j.env.VSCODE_NLS_CONFIG;
  if (e) try {
    const t = JSON.parse(e);
    bt = t.userLocale, p1 = t.osLocale, Et = t.resolvedLanguage || Ne, nn = t.languagePack?.translationsConfigFile;
  } catch {
  }
  g1 = true;
} else typeof navigator == "object" && !on ? (fe = navigator.userAgent, yt = fe.indexOf("Windows") >= 0, Ct = fe.indexOf("Macintosh") >= 0, tn = (fe.indexOf("Macintosh") >= 0 || fe.indexOf("iPad") >= 0 || fe.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, it = fe.indexOf("Linux") >= 0, rn = fe?.indexOf("Mobi") >= 0, rs = true, Et = f1() || Ne, bt = navigator.language.toLowerCase(), p1 = bt) : console.error("Unable to resolve platform.");
var ns = 0;
Ct ? ns = 1 : yt ? ns = 3 : it && (ns = 2);
var Y = yt, Oe = Ct, N = it, an = g1, ln = rs, hn = rs && typeof de.importScripts == "function", cn = hn ? de.origin : void 0, le = fe, be = Et, v1;
((e) => {
  function t() {
    return be;
  }
  e.value = t;
  function s() {
    return be.length === 2 ? be === "en" : be.length >= 3 ? be[0] === "e" && be[1] === "n" && be[2] === "-" : false;
  }
  e.isDefaultVariant = s;
  function i() {
    return be === "en";
  }
  e.isDefault = i;
})(v1 || (v1 = {}));
var un = typeof de.postMessage == "function" && !de.importScripts, fn = (() => {
  if (un) {
    const e = [];
    de.addEventListener("message", (s) => {
      if (s.data && s.data.vscodeScheduleAsyncWork) for (let i = 0, r = e.length; i < r; i++) {
        const n = e[i];
        if (n.id === s.data.vscodeScheduleAsyncWork) {
          e.splice(i, 1), n.callback();
          return;
        }
      }
    });
    let t = 0;
    return (s) => {
      const i = ++t;
      e.push({ id: i, callback: s }), de.postMessage({ vscodeScheduleAsyncWork: i }, "*");
    };
  }
  return (e) => setTimeout(e);
})(), dn = !!(le && le.indexOf("Chrome") >= 0), n2 = !!(le && le.indexOf("Firefox") >= 0), o2 = !!(!dn && le && le.indexOf("Safari") >= 0), a2 = !!(le && le.indexOf("Edg/") >= 0), l2 = !!(le && le.indexOf("Android") >= 0), h2 = j?.arch, c2 = j?.platform, u2 = j?.versions?.node, Le, os = globalThis.vscode;
if (typeof os < "u" && typeof os.process < "u") {
  const e = os.process;
  Le = { get platform() {
    return e.platform;
  }, get arch() {
    return e.arch;
  }, get env() {
    return e.env;
  }, cwd() {
    return e.cwd();
  } };
} else typeof process < "u" && typeof process?.versions?.node == "string" ? Le = { get platform() {
  return process.platform;
}, get arch() {
  return process.arch;
}, get env() {
  return process.env;
}, cwd() {
  return process.env.VSCODE_CWD || process.cwd();
} } : Le = { get platform() {
  return Y ? "win32" : Oe ? "darwin" : "linux";
}, get arch() {
}, get env() {
  return {};
}, cwd() {
  return "/";
} };
var At = Le.cwd, gn = Le.env, pn = Le.platform, f2 = Le.arch, mn = 65, vn = 97, _n = 90, wn = 122, De = 46, O = 47, X = 92, ge = 58, yn = 63, _1 = class extends Error {
  constructor(e, t, s) {
    let i;
    typeof t == "string" && t.indexOf("not ") === 0 ? (i = "must not be", t = t.replace(/^not /, "")) : i = "must be";
    const r = e.indexOf(".") !== -1 ? "property" : "argument";
    let n = `The "${e}" ${r} ${i} of type ${t}`;
    n += `. Received type ${typeof s}`, super(n), this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function Cn(e, t) {
  if (e === null || typeof e != "object") throw new _1(t, "Object", e);
}
function $(e, t) {
  if (typeof e != "string") throw new _1(t, "string", e);
}
var Z = pn === "win32";
function A(e) {
  return e === O || e === X;
}
function as(e) {
  return e === O;
}
function pe(e) {
  return e >= mn && e <= _n || e >= vn && e <= wn;
}
function Lt(e, t, s, i) {
  let r = "", n = 0, o = -1, a = 0, l = 0;
  for (let h = 0; h <= e.length; ++h) {
    if (h < e.length) l = e.charCodeAt(h);
    else {
      if (i(l)) break;
      l = O;
    }
    if (i(l)) {
      if (!(o === h - 1 || a === 1)) if (a === 2) {
        if (r.length < 2 || n !== 2 || r.charCodeAt(r.length - 1) !== De || r.charCodeAt(r.length - 2) !== De) {
          if (r.length > 2) {
            const u = r.lastIndexOf(s);
            u === -1 ? (r = "", n = 0) : (r = r.slice(0, u), n = r.length - 1 - r.lastIndexOf(s)), o = h, a = 0;
            continue;
          } else if (r.length !== 0) {
            r = "", n = 0, o = h, a = 0;
            continue;
          }
        }
        t && (r += r.length > 0 ? `${s}..` : "..", n = 2);
      } else r.length > 0 ? r += `${s}${e.slice(o + 1, h)}` : r = e.slice(o + 1, h), n = h - o - 1;
      o = h, a = 0;
    } else l === De && a !== -1 ? ++a : a = -1;
  }
  return r;
}
function bn(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function w1(e, t) {
  Cn(t, "pathObject");
  const s = t.dir || t.root, i = t.base || `${t.name || ""}${bn(t.ext)}`;
  return s ? s === t.root ? `${s}${i}` : `${s}${e}${i}` : i;
}
var q = { resolve(...e) {
  let t = "", s = "", i = false;
  for (let r = e.length - 1; r >= -1; r--) {
    let n;
    if (r >= 0) {
      if (n = e[r], $(n, `paths[${r}]`), n.length === 0) continue;
    } else t.length === 0 ? n = At() : (n = gn[`=${t}`] || At(), (n === void 0 || n.slice(0, 2).toLowerCase() !== t.toLowerCase() && n.charCodeAt(2) === X) && (n = `${t}\\`));
    const o = n.length;
    let a = 0, l = "", h = false;
    const u = n.charCodeAt(0);
    if (o === 1) A(u) && (a = 1, h = true);
    else if (A(u)) if (h = true, A(n.charCodeAt(1))) {
      let c = 2, f = c;
      for (; c < o && !A(n.charCodeAt(c)); ) c++;
      if (c < o && c !== f) {
        const d = n.slice(f, c);
        for (f = c; c < o && A(n.charCodeAt(c)); ) c++;
        if (c < o && c !== f) {
          for (f = c; c < o && !A(n.charCodeAt(c)); ) c++;
          (c === o || c !== f) && (l = `\\\\${d}\\${n.slice(f, c)}`, a = c);
        }
      }
    } else a = 1;
    else pe(u) && n.charCodeAt(1) === ge && (l = n.slice(0, 2), a = 2, o > 2 && A(n.charCodeAt(2)) && (h = true, a = 3));
    if (l.length > 0) if (t.length > 0) {
      if (l.toLowerCase() !== t.toLowerCase()) continue;
    } else t = l;
    if (i) {
      if (t.length > 0) break;
    } else if (s = `${n.slice(a)}\\${s}`, i = h, h && t.length > 0) break;
  }
  return s = Lt(s, !i, "\\", A), i ? `${t}\\${s}` : `${t}${s}` || ".";
}, normalize(e) {
  $(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let s = 0, i, r = false;
  const n = e.charCodeAt(0);
  if (t === 1) return as(n) ? "\\" : e;
  if (A(n)) if (r = true, A(e.charCodeAt(1))) {
    let a = 2, l = a;
    for (; a < t && !A(e.charCodeAt(a)); ) a++;
    if (a < t && a !== l) {
      const h = e.slice(l, a);
      for (l = a; a < t && A(e.charCodeAt(a)); ) a++;
      if (a < t && a !== l) {
        for (l = a; a < t && !A(e.charCodeAt(a)); ) a++;
        if (a === t) return `\\\\${h}\\${e.slice(l)}\\`;
        a !== l && (i = `\\\\${h}\\${e.slice(l, a)}`, s = a);
      }
    }
  } else s = 1;
  else pe(n) && e.charCodeAt(1) === ge && (i = e.slice(0, 2), s = 2, t > 2 && A(e.charCodeAt(2)) && (r = true, s = 3));
  let o = s < t ? Lt(e.slice(s), !r, "\\", A) : "";
  if (o.length === 0 && !r && (o = "."), o.length > 0 && A(e.charCodeAt(t - 1)) && (o += "\\"), !r && i === void 0 && e.includes(":")) {
    if (o.length >= 2 && pe(o.charCodeAt(0)) && o.charCodeAt(1) === ge) return `.\\${o}`;
    let a = e.indexOf(":");
    do
      if (a === t - 1 || A(e.charCodeAt(a + 1))) return `.\\${o}`;
    while ((a = e.indexOf(":", a + 1)) !== -1);
  }
  return i === void 0 ? r ? `\\${o}` : o : r ? `${i}\\${o}` : `${i}${o}`;
}, isAbsolute(e) {
  $(e, "path");
  const t = e.length;
  if (t === 0) return false;
  const s = e.charCodeAt(0);
  return A(s) || t > 2 && pe(s) && e.charCodeAt(1) === ge && A(e.charCodeAt(2));
}, join(...e) {
  if (e.length === 0) return ".";
  let t, s;
  for (let n = 0; n < e.length; ++n) {
    const o = e[n];
    $(o, "path"), o.length > 0 && (t === void 0 ? t = s = o : t += `\\${o}`);
  }
  if (t === void 0) return ".";
  let i = true, r = 0;
  if (typeof s == "string" && A(s.charCodeAt(0))) {
    ++r;
    const n = s.length;
    n > 1 && A(s.charCodeAt(1)) && (++r, n > 2 && (A(s.charCodeAt(2)) ? ++r : i = false));
  }
  if (i) {
    for (; r < t.length && A(t.charCodeAt(r)); ) r++;
    r >= 2 && (t = `\\${t.slice(r)}`);
  }
  return q.normalize(t);
}, relative(e, t) {
  if ($(e, "from"), $(t, "to"), e === t) return "";
  const s = q.resolve(e), i = q.resolve(t);
  if (s === i || (e = s.toLowerCase(), t = i.toLowerCase(), e === t)) return "";
  if (s.length !== e.length || i.length !== t.length) {
    const _ = s.split("\\"), C = i.split("\\");
    _[_.length - 1] === "" && _.pop(), C[C.length - 1] === "" && C.pop();
    const b = _.length, k = C.length, z = b < k ? b : k;
    let M;
    for (M = 0; M < z && _[M].toLowerCase() === C[M].toLowerCase(); M++) ;
    return M === 0 ? i : M === z ? k > z ? C.slice(M).join("\\") : b > z ? "..\\".repeat(b - 1 - M) + ".." : "" : "..\\".repeat(b - M) + C.slice(M).join("\\");
  }
  let r = 0;
  for (; r < e.length && e.charCodeAt(r) === X; ) r++;
  let n = e.length;
  for (; n - 1 > r && e.charCodeAt(n - 1) === X; ) n--;
  const o = n - r;
  let a = 0;
  for (; a < t.length && t.charCodeAt(a) === X; ) a++;
  let l = t.length;
  for (; l - 1 > a && t.charCodeAt(l - 1) === X; ) l--;
  const h = l - a, u = o < h ? o : h;
  let c = -1, f = 0;
  for (; f < u; f++) {
    const _ = e.charCodeAt(r + f);
    if (_ !== t.charCodeAt(a + f)) break;
    _ === X && (c = f);
  }
  if (f !== u) {
    if (c === -1) return i;
  } else {
    if (h > u) {
      if (t.charCodeAt(a + f) === X) return i.slice(a + f + 1);
      if (f === 2) return i.slice(a + f);
    }
    o > u && (e.charCodeAt(r + f) === X ? c = f : f === 2 && (c = 3)), c === -1 && (c = 0);
  }
  let d = "";
  for (f = r + c + 1; f <= n; ++f) (f === n || e.charCodeAt(f) === X) && (d += d.length === 0 ? ".." : "\\..");
  return a += c, d.length > 0 ? `${d}${i.slice(a, l)}` : (i.charCodeAt(a) === X && ++a, i.slice(a, l));
}, toNamespacedPath(e) {
  if (typeof e != "string" || e.length === 0) return e;
  const t = q.resolve(e);
  if (t.length <= 2) return e;
  if (t.charCodeAt(0) === X) {
    if (t.charCodeAt(1) === X) {
      const s = t.charCodeAt(2);
      if (s !== yn && s !== De) return `\\\\?\\UNC\\${t.slice(2)}`;
    }
  } else if (pe(t.charCodeAt(0)) && t.charCodeAt(1) === ge && t.charCodeAt(2) === X) return `\\\\?\\${t}`;
  return t;
}, dirname(e) {
  $(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let s = -1, i = 0;
  const r = e.charCodeAt(0);
  if (t === 1) return A(r) ? e : ".";
  if (A(r)) {
    if (s = i = 1, A(e.charCodeAt(1))) {
      let a = 2, l = a;
      for (; a < t && !A(e.charCodeAt(a)); ) a++;
      if (a < t && a !== l) {
        for (l = a; a < t && A(e.charCodeAt(a)); ) a++;
        if (a < t && a !== l) {
          for (l = a; a < t && !A(e.charCodeAt(a)); ) a++;
          if (a === t) return e;
          a !== l && (s = i = a + 1);
        }
      }
    }
  } else pe(r) && e.charCodeAt(1) === ge && (s = t > 2 && A(e.charCodeAt(2)) ? 3 : 2, i = s);
  let n = -1, o = true;
  for (let a = t - 1; a >= i; --a) if (A(e.charCodeAt(a))) {
    if (!o) {
      n = a;
      break;
    }
  } else o = false;
  if (n === -1) {
    if (s === -1) return ".";
    n = s;
  }
  return e.slice(0, n);
}, basename(e, t) {
  t !== void 0 && $(t, "suffix"), $(e, "path");
  let s = 0, i = -1, r = true, n;
  if (e.length >= 2 && pe(e.charCodeAt(0)) && e.charCodeAt(1) === ge && (s = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (n = e.length - 1; n >= s; --n) {
      const l = e.charCodeAt(n);
      if (A(l)) {
        if (!r) {
          s = n + 1;
          break;
        }
      } else a === -1 && (r = false, a = n + 1), o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (i = n) : (o = -1, i = a));
    }
    return s === i ? i = a : i === -1 && (i = e.length), e.slice(s, i);
  }
  for (n = e.length - 1; n >= s; --n) if (A(e.charCodeAt(n))) {
    if (!r) {
      s = n + 1;
      break;
    }
  } else i === -1 && (r = false, i = n + 1);
  return i === -1 ? "" : e.slice(s, i);
}, extname(e) {
  $(e, "path");
  let t = 0, s = -1, i = 0, r = -1, n = true, o = 0;
  e.length >= 2 && e.charCodeAt(1) === ge && pe(e.charCodeAt(0)) && (t = i = 2);
  for (let a = e.length - 1; a >= t; --a) {
    const l = e.charCodeAt(a);
    if (A(l)) {
      if (!n) {
        i = a + 1;
        break;
      }
      continue;
    }
    r === -1 && (n = false, r = a + 1), l === De ? s === -1 ? s = a : o !== 1 && (o = 1) : s !== -1 && (o = -1);
  }
  return s === -1 || r === -1 || o === 0 || o === 1 && s === r - 1 && s === i + 1 ? "" : e.slice(s, r);
}, format: w1.bind(null, "\\"), parse(e) {
  $(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const s = e.length;
  let i = 0, r = e.charCodeAt(0);
  if (s === 1) return A(r) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
  if (A(r)) {
    if (i = 1, A(e.charCodeAt(1))) {
      let c = 2, f = c;
      for (; c < s && !A(e.charCodeAt(c)); ) c++;
      if (c < s && c !== f) {
        for (f = c; c < s && A(e.charCodeAt(c)); ) c++;
        if (c < s && c !== f) {
          for (f = c; c < s && !A(e.charCodeAt(c)); ) c++;
          c === s ? i = c : c !== f && (i = c + 1);
        }
      }
    }
  } else if (pe(r) && e.charCodeAt(1) === ge) {
    if (s <= 2) return t.root = t.dir = e, t;
    if (i = 2, A(e.charCodeAt(2))) {
      if (s === 3) return t.root = t.dir = e, t;
      i = 3;
    }
  }
  i > 0 && (t.root = e.slice(0, i));
  let n = -1, o = i, a = -1, l = true, h = e.length - 1, u = 0;
  for (; h >= i; --h) {
    if (r = e.charCodeAt(h), A(r)) {
      if (!l) {
        o = h + 1;
        break;
      }
      continue;
    }
    a === -1 && (l = false, a = h + 1), r === De ? n === -1 ? n = h : u !== 1 && (u = 1) : n !== -1 && (u = -1);
  }
  return a !== -1 && (n === -1 || u === 0 || u === 1 && n === a - 1 && n === o + 1 ? t.base = t.name = e.slice(o, a) : (t.name = e.slice(o, n), t.base = e.slice(o, a), t.ext = e.slice(n, a))), o > 0 && o !== i ? t.dir = e.slice(0, o - 1) : t.dir = t.root, t;
}, sep: "\\", delimiter: ";", win32: null, posix: null }, En = (() => {
  if (Z) {
    const e = /\\/g;
    return () => {
      const t = At().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => At();
})(), D = { resolve(...e) {
  let t = "", s = false;
  for (let i = e.length - 1; i >= 0 && !s; i--) {
    const r = e[i];
    $(r, `paths[${i}]`), r.length !== 0 && (t = `${r}/${t}`, s = r.charCodeAt(0) === O);
  }
  if (!s) {
    const i = En();
    t = `${i}/${t}`, s = i.charCodeAt(0) === O;
  }
  return t = Lt(t, !s, "/", as), s ? `/${t}` : t.length > 0 ? t : ".";
}, normalize(e) {
  if ($(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === O, s = e.charCodeAt(e.length - 1) === O;
  return e = Lt(e, !t, "/", as), e.length === 0 ? t ? "/" : s ? "./" : "." : (s && (e += "/"), t ? `/${e}` : e);
}, isAbsolute(e) {
  return $(e, "path"), e.length > 0 && e.charCodeAt(0) === O;
}, join(...e) {
  if (e.length === 0) return ".";
  const t = [];
  for (let s = 0; s < e.length; ++s) {
    const i = e[s];
    $(i, "path"), i.length > 0 && t.push(i);
  }
  return t.length === 0 ? "." : D.normalize(t.join("/"));
}, relative(e, t) {
  if ($(e, "from"), $(t, "to"), e === t || (e = D.resolve(e), t = D.resolve(t), e === t)) return "";
  const s = 1, i = e.length, r = i - s, n = 1, o = t.length - n, a = r < o ? r : o;
  let l = -1, h = 0;
  for (; h < a; h++) {
    const c = e.charCodeAt(s + h);
    if (c !== t.charCodeAt(n + h)) break;
    c === O && (l = h);
  }
  if (h === a) if (o > a) {
    if (t.charCodeAt(n + h) === O) return t.slice(n + h + 1);
    if (h === 0) return t.slice(n + h);
  } else r > a && (e.charCodeAt(s + h) === O ? l = h : h === 0 && (l = 0));
  let u = "";
  for (h = s + l + 1; h <= i; ++h) (h === i || e.charCodeAt(h) === O) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${t.slice(n + l)}`;
}, toNamespacedPath(e) {
  return e;
}, dirname(e) {
  if ($(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === O;
  let s = -1, i = true;
  for (let r = e.length - 1; r >= 1; --r) if (e.charCodeAt(r) === O) {
    if (!i) {
      s = r;
      break;
    }
  } else i = false;
  return s === -1 ? t ? "/" : "." : t && s === 1 ? "//" : e.slice(0, s);
}, basename(e, t) {
  t !== void 0 && $(t, "suffix"), $(e, "path");
  let s = 0, i = -1, r = true, n;
  if (t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (n = e.length - 1; n >= 0; --n) {
      const l = e.charCodeAt(n);
      if (l === O) {
        if (!r) {
          s = n + 1;
          break;
        }
      } else a === -1 && (r = false, a = n + 1), o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (i = n) : (o = -1, i = a));
    }
    return s === i ? i = a : i === -1 && (i = e.length), e.slice(s, i);
  }
  for (n = e.length - 1; n >= 0; --n) if (e.charCodeAt(n) === O) {
    if (!r) {
      s = n + 1;
      break;
    }
  } else i === -1 && (r = false, i = n + 1);
  return i === -1 ? "" : e.slice(s, i);
}, extname(e) {
  $(e, "path");
  let t = -1, s = 0, i = -1, r = true, n = 0;
  for (let o = e.length - 1; o >= 0; --o) {
    const a = e[o];
    if (a === "/") {
      if (!r) {
        s = o + 1;
        break;
      }
      continue;
    }
    i === -1 && (r = false, i = o + 1), a === "." ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1);
  }
  return t === -1 || i === -1 || n === 0 || n === 1 && t === i - 1 && t === s + 1 ? "" : e.slice(t, i);
}, format: w1.bind(null, "/"), parse(e) {
  $(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const s = e.charCodeAt(0) === O;
  let i;
  s ? (t.root = "/", i = 1) : i = 0;
  let r = -1, n = 0, o = -1, a = true, l = e.length - 1, h = 0;
  for (; l >= i; --l) {
    const u = e.charCodeAt(l);
    if (u === O) {
      if (!a) {
        n = l + 1;
        break;
      }
      continue;
    }
    o === -1 && (a = false, o = l + 1), u === De ? r === -1 ? r = l : h !== 1 && (h = 1) : r !== -1 && (h = -1);
  }
  if (o !== -1) {
    const u = n === 0 && s ? 1 : n;
    r === -1 || h === 0 || h === 1 && r === o - 1 && r === n + 1 ? t.base = t.name = e.slice(u, o) : (t.name = e.slice(u, r), t.base = e.slice(u, o), t.ext = e.slice(r, o));
  }
  return n > 0 ? t.dir = e.slice(0, n - 1) : s && (t.dir = "/"), t;
}, sep: "/", delimiter: ":", win32: null, posix: null };
D.win32 = q.win32 = q, D.posix = q.posix = D;
var Dt = Z ? q.normalize : D.normalize, y1 = Z ? q.isAbsolute : D.isAbsolute, te = Z ? q.join : D.join, An = Z ? q.resolve : D.resolve, Ln = Z ? q.relative : D.relative, ls = Z ? q.dirname : D.dirname, Rt = Z ? q.basename : D.basename, Dn = Z ? q.extname : D.extname, d2 = Z ? q.format : D.format, g2 = Z ? q.parse : D.parse, p2 = Z ? q.toNamespacedPath : D.toNamespacedPath, se = Z ? q.sep : D.sep, m2 = Z ? q.delimiter : D.delimiter;
function Rn(e) {
  return e;
}
var Pn = class {
  constructor(e, t) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = Rn) : (this._fn = t, this._computeKey = e.getCacheKey);
  }
  get(e) {
    const t = this._computeKey(e);
    return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
  }
}, Re = class {
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
function C1(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function Sn(e, t) {
  if (!e || !t) return e;
  const s = t.length, i = e.length;
  if (s === 1) {
    let n = i;
    const o = t.charCodeAt(0);
    for (; n > 0 && e.charCodeAt(n - 1) === o; ) n--;
    return e.substring(0, n);
  }
  let r = i;
  for (; r > 0 && e.endsWith(t, r); ) r -= s;
  return e.substring(0, r);
}
function hs(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function cs(e, t, s = 0, i = e.length, r = 0, n = t.length) {
  for (; s < i && r < n; s++, r++) {
    const l = e.charCodeAt(s), h = t.charCodeAt(r);
    if (l < h) return -1;
    if (l > h) return 1;
  }
  const o = i - s, a = n - r;
  return o < a ? -1 : o > a ? 1 : 0;
}
function b1(e, t) {
  return Pe(e, t, 0, e.length, 0, t.length);
}
function Pe(e, t, s = 0, i = e.length, r = 0, n = t.length) {
  for (; s < i && r < n; s++, r++) {
    let l = e.charCodeAt(s), h = t.charCodeAt(r);
    if (l === h) continue;
    if (l >= 128 || h >= 128) return cs(e.toLowerCase(), t.toLowerCase(), s, i, r, n);
    E1(l) && (l -= 32), E1(h) && (h -= 32);
    const u = l - h;
    if (u !== 0) return u;
  }
  const o = i - s, a = n - r;
  return o < a ? -1 : o > a ? 1 : 0;
}
function E1(e) {
  return e >= 97 && e <= 122;
}
function A1(e) {
  return e >= 65 && e <= 90;
}
function us(e, t) {
  return e.length === t.length && Pe(e, t) === 0;
}
function kn(e, t) {
  const s = t.length;
  return t.length > e.length ? false : Pe(e, t, 0, s) === 0;
}
function In(e, t) {
  const s = e.length, i = s - t.length;
  return i >= 0 && Pe(e, t, i, s) === 0;
}
function Tn(e) {
  return 55296 <= e && e <= 56319;
}
function L1(e) {
  return 56320 <= e && e <= 57343;
}
function Wn(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
var xn = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, $n = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, qn = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, v2 = new RegExp("(?:" + [xn.source, $n.source, qn.source].join("|") + ")", "g"), _2 = "\uFEFF", Mn = class ft {
  static getInstance() {
    return ft._INSTANCE || (ft._INSTANCE = new ft()), ft._INSTANCE;
  }
  constructor() {
    this._data = Fn();
  }
  getGraphemeBreakType(t) {
    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
    if (t < 127) return 0;
    const s = this._data, i = s.length / 3;
    let r = 1;
    for (; r <= i; ) if (t < s[3 * r]) r = 2 * r;
    else if (t > s[3 * r + 1]) r = 2 * r + 1;
    else return s[3 * r + 2];
    return 0;
  }
};
Mn._INSTANCE = null;
function Fn() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var Ue = class Us {
  constructor(t) {
    this.confusableDictionary = t;
  }
  static getInstance(t) {
    return Us.cache.get(Array.from(t).join(","));
  }
  static getLocales() {
    return Us._locales.value;
  }
  isAmbiguous(t) {
    return this.confusableDictionary.has(t);
  }
  containsAmbiguousCharacter(t) {
    for (let s = 0; s < t.length; s++) {
      const i = t.codePointAt(s);
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
Ue.ambiguousCharacterData = new Re(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), Ue.cache = new Pn((e) => {
  const t = e.split(",");
  function s(u) {
    const c = /* @__PURE__ */ new Map();
    for (let f = 0; f < u.length; f += 2) c.set(u[f], u[f + 1]);
    return c;
  }
  function i(u, c) {
    const f = new Map(u);
    for (const [d, _] of c) f.set(d, _);
    return f;
  }
  function r(u, c) {
    if (!u) return c;
    const f = /* @__PURE__ */ new Map();
    for (const [d, _] of u) c.has(d) && f.set(d, _);
    return f;
  }
  const n = Ue.ambiguousCharacterData.value;
  let o = t.filter((u) => !u.startsWith("_") && u in n);
  o.length === 0 && (o = ["_default"]);
  let a;
  for (const u of o) {
    const c = s(n[u]);
    a = r(a, c);
  }
  const l = s(n._common), h = i(l, a);
  return new Ue(h);
}), Ue._locales = new Re(() => Object.keys(Ue.ambiguousCharacterData.value).filter((e) => !e.startsWith("_")));
var Nn = class dt {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(dt.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return dt.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let s = 0; s < t.length; s++) {
      const i = t.codePointAt(s);
      if (typeof i == "number" && (dt.isInvisibleCharacter(i) || i === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return dt.getData();
  }
};
Nn._data = void 0;
function Ee(e) {
  return e === 47 || e === 92;
}
function D1(e) {
  return e.replace(/[\\/]/g, D.sep);
}
function On(e) {
  return e.indexOf("/") === -1 && (e = D1(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function R1(e, t = D.sep) {
  if (!e) return "";
  const s = e.length, i = e.charCodeAt(0);
  if (Ee(i)) {
    if (Ee(e.charCodeAt(1)) && !Ee(e.charCodeAt(2))) {
      let n = 3;
      const o = n;
      for (; n < s && !Ee(e.charCodeAt(n)); n++) ;
      if (o !== n && !Ee(e.charCodeAt(n + 1))) {
        for (n += 1; n < s; n++) if (Ee(e.charCodeAt(n))) return e.slice(0, n + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (P1(i) && e.charCodeAt(1) === 58) return Ee(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let r = e.indexOf("://");
  if (r !== -1) {
    for (r += 3; r < s; r++) if (Ee(e.charCodeAt(r))) return e.slice(0, r + 1);
  }
  return "";
}
function fs(e, t, s) {
  const i = e === t;
  return !s || i ? i : !e || !t ? false : us(e, t);
}
function Un(e, t, s) {
  return s === 0 ? true : e.charCodeAt(0) !== t.charCodeAt(0) ? false : s === 1 ? true : e.charCodeAt(s - 1) !== t.charCodeAt(s - 1) ? false : e.startsWith(t);
}
function Bn(e, t, s) {
  for (let i = 0; i < s; i++) {
    let r = e.charCodeAt(i), n = t.charCodeAt(i);
    if (r !== n) {
      if (r >= 128 || n >= 128) return Pe(e, t, i, s, i, s) === 0;
      if (r >= 97 && r <= 122 && (r -= 32), n >= 97 && n <= 122 && (n -= 32), r !== n) return false;
    }
  }
  return true;
}
function ie(e, t, s, i = se) {
  if (e === t) return true;
  if (!e || !t) return false;
  const r = e.length, n = t.length;
  if (n > r) return false;
  const o = i.charCodeAt(0), a = t.charCodeAt(n - 1) === o;
  if (n < r && !a && e.charCodeAt(n) !== o) return false;
  if (s) {
    if (!Bn(e, t, n)) return false;
  } else if (!Un(e, t, n)) return false;
  return n === r || a ? true : e.charCodeAt(n) === o;
}
function P1(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function zn(e) {
  const t = Dt(e);
  return Y ? e.length > 3 ? false : Hn(t) && (e.length === 2 || t.charCodeAt(2) === 92) : t === D.sep;
}
function Hn(e, t = Y) {
  return t ? P1(e.charCodeAt(0)) && e.charCodeAt(1) === 58 : false;
}
var jn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", Kn = "BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";
function S1(e, t, s = 8) {
  let i = "";
  for (let n = 0; n < s; n++) {
    let o;
    n === 0 && Y && !t && (s === 3 || s === 4) ? o = Kn : o = jn, i += o.charAt(Math.floor(Math.random() * o.length));
  }
  let r;
  return t ? r = `${t}-${i}` : r = i, e ? te(e, r) : r;
}
var rt = typeof Buffer < "u", Gn = new Re(() => new Uint8Array(256)), Be, ds, Vn = 512 * 1024, Se = null, gs = false, k1 = false, Qn = 1 / 0, I1, Jn = 1 / 0, T1;
function W1(e, t) {
  if (T1 && e.byteLength >= Jn) try {
    T1({ buffer: e, byteLength: e.byteLength, source: t });
  } catch {
  }
}
var Q = class K {
  static alloc(t) {
    let s;
    return rt ? s = new K(Buffer.allocUnsafe(t)) : s = new K(new Uint8Array(t)), W1(s, "alloc"), s;
  }
  static wrap(t) {
    rt && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength));
    const s = new K(t);
    return W1(s, "wrap"), s;
  }
  static fromString(t, s) {
    return !(s?.dontUseNodeBuffer || false) && rt ? new K(Buffer.from(t)) : (Be || (Be = new TextEncoder()), new K(Be.encode(t)));
  }
  static withPooledString(t, s) {
    if (rt) return s(K.fromString(t));
    if (gs) return k1 || (k1 = true, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), s(K.fromString(t));
    const i = t.length * 3;
    if (i > Vn) return s(K.fromString(t));
    if (Be || (Be = new TextEncoder()), !Se || Se.byteLength < i) {
      let n = Se ? Se.byteLength * 2 : 16384;
      for (; n < i; ) n *= 2;
      Se = new Uint8Array(n);
    }
    const r = Be.encodeInto(t, Se).written;
    gs = true;
    try {
      return s(new K(Se.subarray(0, r)));
    } finally {
      gs = false;
    }
  }
  static fromByteArray(t) {
    const s = K.alloc(t.length);
    for (let i = 0, r = t.length; i < r; i++) s.buffer[i] = t[i];
    return s;
  }
  static concat(t, s) {
    if (typeof s > "u") {
      s = 0;
      for (let n = 0, o = t.length; n < o; n++) s += t[n].byteLength;
    }
    const i = K.alloc(s);
    let r = 0;
    for (let n = 0, o = t.length; n < o; n++) {
      const a = t[n];
      i.set(a, r), r += a.byteLength;
    }
    return i;
  }
  constructor(t) {
    this.buffer = t, this.byteLength = this.buffer.byteLength;
  }
  clone() {
    const t = K.alloc(this.byteLength);
    return t.set(this), t;
  }
  toString() {
    if (rt) return this.buffer.toString();
    if (I1 && this.buffer.byteLength > Qn) try {
      I1(this.buffer.byteLength);
    } catch {
    }
    return ds || (ds = new TextDecoder()), ds.decode(this.buffer);
  }
  slice(t, s) {
    return new K(this.buffer.subarray(t, s));
  }
  set(t, s) {
    if (t instanceof K) this.buffer.set(t.buffer, s);
    else if (t instanceof Uint8Array) this.buffer.set(t, s);
    else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), s);
    else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), s);
    else throw new Error("Unknown argument 'array'");
  }
  readUInt32BE(t) {
    return Xn(this.buffer, t);
  }
  writeUInt32BE(t, s) {
    Zn(this.buffer, t, s);
  }
  readUInt32LE(t) {
    return eo(this.buffer, t);
  }
  writeUInt32LE(t, s) {
    to(this.buffer, t, s);
  }
  readUInt8(t) {
    return so(this.buffer, t);
  }
  writeUInt8(t, s) {
    io(this.buffer, t, s);
  }
  indexOf(t, s = 0) {
    return Yn(this.buffer, t instanceof K ? t.buffer : t, s);
  }
  equals(t) {
    return this === t ? true : this.byteLength !== t.byteLength ? false : this.buffer.every((s, i) => s === t.buffer[i]);
  }
};
function Yn(e, t, s = 0) {
  const i = t.byteLength, r = e.byteLength;
  if (i === 0) return 0;
  if (i === 1) return e.indexOf(t[0]);
  if (i > r - s) return -1;
  const n = Gn.value;
  n.fill(t.length);
  for (let h = 0; h < t.length; h++) n[t[h]] = t.length - h - 1;
  let o = s + t.length - 1, a = o, l = -1;
  for (; o < r; ) if (e[o] === t[a]) {
    if (a === 0) {
      l = o;
      break;
    }
    o--, a--;
  } else o += Math.max(t.length - a, n[e[o]]), a = t.length - 1;
  return l;
}
function Xn(e, t) {
  return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function Zn(e, t, s) {
  e[s + 3] = t, t = t >>> 8, e[s + 2] = t, t = t >>> 8, e[s + 1] = t, t = t >>> 8, e[s] = t;
}
function eo(e, t) {
  return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function to(e, t, s) {
  e[s + 0] = t & 255, t = t >>> 8, e[s + 1] = t & 255, t = t >>> 8, e[s + 2] = t & 255, t = t >>> 8, e[s + 3] = t & 255;
}
function so(e, t) {
  return e[t];
}
function io(e, t, s) {
  e[s] = t;
}
var ro = /^\w[\w\d+.-]*$/, no = /^\//, oo = /^\/\//;
function ao(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !ro.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!no.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (oo.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function lo(e, t) {
  return !e && !t ? "file" : e;
}
function ho(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== oe && (t = oe + t) : t = oe;
      break;
  }
  return t;
}
var T = "", oe = "/", co = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, U = class Ht {
  static isUri(t) {
    return t instanceof Ht ? true : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : false;
  }
  constructor(t, s, i, r, n, o = false) {
    typeof t == "object" ? (this.scheme = t.scheme || T, this.authority = t.authority || T, this.path = t.path || T, this.query = t.query || T, this.fragment = t.fragment || T) : (this.scheme = lo(t, o), this.authority = s || T, this.path = ho(this.scheme, i || T), this.query = r || T, this.fragment = n || T, ao(this, o));
  }
  get fsPath() {
    return Pt(this, false);
  }
  with(t) {
    if (!t) return this;
    let { scheme: s, authority: i, path: r, query: n, fragment: o } = t;
    return s === void 0 ? s = this.scheme : s === null && (s = T), i === void 0 ? i = this.authority : i === null && (i = T), r === void 0 ? r = this.path : r === null && (r = T), n === void 0 ? n = this.query : n === null && (n = T), o === void 0 ? o = this.fragment : o === null && (o = T), s === this.scheme && i === this.authority && r === this.path && n === this.query && o === this.fragment ? this : new ze(s, i, r, n, o);
  }
  static parse(t, s = false) {
    const i = co.exec(t);
    return i ? new ze(i[2] || T, St(i[4] || T), St(i[5] || T), St(i[7] || T), St(i[9] || T), s) : new ze(T, T, T, T, T);
  }
  static file(t) {
    let s = T;
    if (Y && (t = t.replace(/\\/g, oe)), t[0] === oe && t[1] === oe) {
      const i = t.indexOf(oe, 2);
      i === -1 ? (s = t.substring(2), t = oe) : (s = t.substring(2, i), t = t.substring(i) || oe);
    }
    return new ze("file", s, t, T, T);
  }
  static from(t, s) {
    return new ze(t.scheme, t.authority, t.path, t.query, t.fragment, s);
  }
  static joinPath(t, ...s) {
    if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let i;
    return Y && t.scheme === "file" ? i = Ht.file(q.join(Pt(t, true), ...s)).path : i = D.join(t.path, ...s), t.with({ path: i });
  }
  toString(t = false) {
    return ps(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof Ht) return t;
      {
        const s = new ze(t);
        return s._formatted = t.external ?? null, s._fsPath = t._sep === x1 ? t.fsPath ?? null : null, s;
      }
    } else return t;
  }
  [/* @__PURE__ */ Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
}, x1 = Y ? 1 : void 0, ze = class extends U {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = Pt(this, false)), this._fsPath;
  }
  toString(e = false) {
    return e ? ps(this, true) : (this._formatted || (this._formatted = ps(this, false)), this._formatted);
  }
  toJSON() {
    const e = { $mid: 1 };
    return this._fsPath && (e.fsPath = this._fsPath, e._sep = x1), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
  }
}, $1 = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function q1(e, t, s) {
  let i, r = -1;
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || s && o === 91 || s && o === 93 || s && o === 58) r !== -1 && (i += encodeURIComponent(e.substring(r, n)), r = -1), i !== void 0 && (i += e.charAt(n));
    else {
      i === void 0 && (i = e.substr(0, n));
      const a = $1[o];
      a !== void 0 ? (r !== -1 && (i += encodeURIComponent(e.substring(r, n)), r = -1), i += a) : r === -1 && (r = n);
    }
  }
  return r !== -1 && (i += encodeURIComponent(e.substring(r))), i !== void 0 ? i : e;
}
function uo(e) {
  let t;
  for (let s = 0; s < e.length; s++) {
    const i = e.charCodeAt(s);
    i === 35 || i === 63 ? (t === void 0 && (t = e.substr(0, s)), t += $1[i]) : t !== void 0 && (t += e[s]);
  }
  return t !== void 0 ? t : e;
}
function Pt(e, t) {
  let s;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? s = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? s = e.path.substr(1) : s = e.path[1].toLowerCase() + e.path.substr(2) : s = e.path, Y && (s = s.replace(/\//g, "\\")), s;
}
function ps(e, t) {
  const s = t ? uo : q1;
  let i = "", { scheme: r, authority: n, path: o, query: a, fragment: l } = e;
  if (r && (i += r, i += ":"), (n || r === "file") && (i += oe, i += oe), n) {
    let h = n.indexOf("@");
    if (h !== -1) {
      const u = n.substr(0, h);
      n = n.substr(h + 1), h = u.lastIndexOf(":"), h === -1 ? i += s(u, false, false) : (i += s(u.substr(0, h), false, false), i += ":", i += s(u.substr(h + 1), false, true)), i += "@";
    }
    n = n.toLowerCase(), h = n.lastIndexOf(":"), h === -1 ? i += s(n, false, true) : (i += s(n.substr(0, h), false, true), i += n.substr(h));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      const h = o.charCodeAt(1);
      h >= 65 && h <= 90 && (o = `/${String.fromCharCode(h + 32)}:${o.substr(3)}`);
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      const h = o.charCodeAt(0);
      h >= 65 && h <= 90 && (o = `${String.fromCharCode(h + 32)}:${o.substr(2)}`);
    }
    i += s(o, true, false);
  }
  return a && (i += "?", i += s(a, false, false)), l && (i += "#", i += t ? l : q1(l, false, false)), i;
}
function M1(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + M1(e.substr(3)) : e;
  }
}
var F1 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function St(e) {
  return e.match(F1) ? e.replace(F1, (t) => M1(t)) : e;
}
var B;
((e) => {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})(B || (B = {}));
var fo = "tkn", go = class {
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
    this._serverRootPath = D.join(t ?? "/", mo(e));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return D.join(this._serverRootPath, B.vscodeRemoteResource);
  }
  set(e, t, s) {
    this._hosts[e] = t, this._ports[e] = s;
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
      return Qe(o), e;
    }
    const t = e.authority;
    let s = this._hosts[t];
    s && s.indexOf(":") !== -1 && s.indexOf("[") === -1 && (s = `[${s}]`);
    const i = this._ports[t], r = this._connectionTokens[t];
    let n = `path=${encodeURIComponent(e.path)}`;
    return typeof r == "string" && (n += `&${fo}=${encodeURIComponent(r)}`), U.from({ scheme: ln ? this._preferredWebSchema : B.vscodeRemoteResource, authority: `${s}:${i}`, path: this._remoteResourcesPath, query: n });
  }
}, po = new go();
function mo(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var vo = "vscode-app", N1 = class jt {
  asBrowserUri(t) {
    const s = this.toUri(t);
    return this.uriToBrowserUri(s);
  }
  uriToBrowserUri(t) {
    return t.scheme === B.vscodeRemote ? po.rewrite(t) : t.scheme === B.file && (an || cn === `${B.vscodeFileResource}://${jt.FALLBACK_AUTHORITY}`) ? t.with({ scheme: B.vscodeFileResource, authority: t.authority || jt.FALLBACK_AUTHORITY, query: null, fragment: null }) : t;
  }
  asFileUri(t) {
    const s = this.toUri(t);
    return this.uriToFileUri(s);
  }
  uriToFileUri(t) {
    return t.scheme === B.vscodeFileResource ? t.with({ scheme: B.file, authority: t.authority !== jt.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
  }
  toUri(t) {
    if (U.isUri(t)) return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const s = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(s)) return U.joinPath(U.parse(s, true), t);
      const i = te(s, t);
      return U.file(i);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
N1.FALLBACK_AUTHORITY = vo;
var _o = N1, w2 = new _o(), y2 = Object.freeze({ "Cache-Control": "no-cache, no-store" }), C2 = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), O1;
((e) => {
  const t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const s = "vscode-coi";
  function i(n) {
    let o;
    typeof n == "string" ? o = new URL(n).searchParams : n instanceof URL ? o = n.searchParams : U.isUri(n) && (o = new URL(n.toString(true)).searchParams);
    const a = o?.get(s);
    if (a) return t.get(a);
  }
  e.getHeadersFromQuery = i;
  function r(n, o, a) {
    if (!globalThis.crossOriginIsolated) return;
    const l = o && a ? "3" : a ? "2" : "1";
    n instanceof URLSearchParams ? n.set(s, l) : n[s] = l;
  }
  e.addSearchParam = r;
})(O1 || (O1 = {}));
function me(e) {
  return Pt(e, true);
}
var ms = class {
  constructor(e) {
    this._ignorePathCasing = e;
  }
  compare(e, t, s = false) {
    return e === t ? 0 : hs(this.getComparisonKey(e, s), this.getComparisonKey(t, s));
  }
  isEqual(e, t, s = false) {
    return e === t ? true : !e || !t ? false : this.getComparisonKey(e, s) === this.getComparisonKey(t, s);
  }
  getComparisonKey(e, t = false) {
    return e.with({ path: this._ignorePathCasing(e) ? e.path.toLowerCase() : void 0, fragment: t ? null : void 0 }).toString();
  }
  ignorePathCasing(e) {
    return this._ignorePathCasing(e);
  }
  isEqualOrParent(e, t, s = false) {
    if (e.scheme === t.scheme) {
      if (e.scheme === B.file) return ie(me(e), me(t), this._ignorePathCasing(e)) && e.query === t.query && (s || e.fragment === t.fragment);
      if (B1(e.authority, t.authority)) return ie(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (s || e.fragment === t.fragment);
    }
    return false;
  }
  joinPath(e, ...t) {
    return U.joinPath(e, ...t);
  }
  basenameOrAuthority(e) {
    return yo(e) || e.authority;
  }
  basename(e) {
    return D.basename(e.path);
  }
  extname(e) {
    return D.extname(e.path);
  }
  dirname(e) {
    if (e.path.length === 0) return e;
    let t;
    return e.scheme === B.file ? t = U.file(ls(me(e))).path : (t = D.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
  }
  normalizePath(e) {
    if (!e.path.length) return e;
    let t;
    return e.scheme === B.file ? t = U.file(Dt(me(e))).path : t = D.normalize(e.path), e.with({ path: t });
  }
  relativePath(e, t) {
    if (e.scheme !== t.scheme || !B1(e.authority, t.authority)) return;
    if (e.scheme === B.file) {
      const r = Ln(me(e), me(t));
      return Y ? D1(r) : r;
    }
    let s = e.path || "/";
    const i = t.path || "/";
    if (this._ignorePathCasing(e)) {
      let r = 0;
      for (const n = Math.min(s.length, i.length); r < n && !(s.charCodeAt(r) !== i.charCodeAt(r) && s.charAt(r).toLowerCase() !== i.charAt(r).toLowerCase()); r++) ;
      s = i.substr(0, r) + s.substr(r);
    }
    return D.relative(s, i);
  }
  resolvePath(e, t) {
    if (e.scheme === B.file) {
      const s = U.file(An(me(e), t));
      return e.with({ authority: s.authority, path: s.path });
    }
    return t = On(t), e.with({ path: D.resolve(e.path, t) });
  }
  isAbsolutePath(e) {
    return !!e.path && e.path[0] === "/";
  }
  isEqualAuthority(e, t) {
    return e === t || e !== void 0 && t !== void 0 && us(e, t);
  }
  hasTrailingPathSeparator(e, t = se) {
    if (e.scheme === B.file) {
      const s = me(e);
      return s.length > R1(s).length && s[s.length - 1] === t;
    } else {
      const s = e.path;
      return s.length > 1 && s.charCodeAt(s.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
    }
  }
  removeTrailingPathSeparator(e, t = se) {
    return z1(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
  }
  addTrailingPathSeparator(e, t = se) {
    let s = false;
    if (e.scheme === B.file) {
      const i = me(e);
      s = i !== void 0 && i.length === R1(i).length && i[i.length - 1] === t;
    } else {
      t = "/";
      const i = e.path;
      s = i.length === 1 && i.charCodeAt(i.length - 1) === 47;
    }
    return !s && !z1(e, t) ? e.with({ path: e.path + "/" }) : e;
  }
}, R = new ms(() => false), wo = new ms((e) => e.scheme === B.file ? !N : true), b2 = new ms((e) => true), E2 = R.isEqual.bind(R), A2 = R.isEqualOrParent.bind(R), L2 = R.getComparisonKey.bind(R), D2 = R.basenameOrAuthority.bind(R), yo = R.basename.bind(R), R2 = R.extname.bind(R), P2 = R.dirname.bind(R), U1 = R.joinPath.bind(R), S2 = R.normalizePath.bind(R), k2 = R.relativePath.bind(R), I2 = R.resolvePath.bind(R), T2 = R.isAbsolutePath.bind(R), B1 = R.isEqualAuthority.bind(R), z1 = R.hasTrailingPathSeparator.bind(R), W2 = R.removeTrailingPathSeparator.bind(R), x2 = R.addTrailingPathSeparator.bind(R), H1;
((e) => {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(s) {
    const i = /* @__PURE__ */ new Map();
    s.path.substring(s.path.indexOf(";") + 1, s.path.lastIndexOf(";")).split(";").forEach((o) => {
      const [a, l] = o.split(":");
      a && l && i.set(a, l);
    });
    const n = s.path.substring(0, s.path.indexOf(";"));
    return n && i.set(e.META_DATA_MIME, n), i;
  }
  e.parseMetaData = t;
})(H1 || (H1 = {}));
var Co = /* @__PURE__ */ Symbol("MicrotaskDelay");
function j1(e) {
  return !!e && typeof e.then == "function";
}
function vs(e) {
  const t = new Fe(), s = e(t.token);
  let i = false;
  const r = new Promise((n, o) => {
    const a = t.token.onCancellationRequested(() => {
      i = true, a.dispose(), o(new ae());
    });
    Promise.resolve(s).then((l) => {
      a.dispose(), t.dispose(), i ? qr(l) && l.dispose() : n(l);
    }, (l) => {
      a.dispose(), t.dispose(), o(l);
    });
  });
  return new class {
    cancel() {
      t.cancel(), t.dispose();
    }
    then(n, o) {
      return r.then(n, o);
    }
    catch(n) {
      return this.then(void 0, n);
    }
    finally(n) {
      return r.finally(n);
    }
  }();
}
var bo = class {
  constructor() {
    this.isDisposed = false, this.activePromise = null, this.queuedPromise = null, this.queuedPromiseFactory = null;
  }
  queue(e) {
    if (this.isDisposed) return Promise.reject(new Error("Throttler is disposed"));
    if (this.activePromise) {
      if (this.queuedPromiseFactory = e, !this.queuedPromise) {
        const t = () => {
          if (this.queuedPromise = null, this.isDisposed) return;
          const s = this.queue(this.queuedPromiseFactory);
          return this.queuedPromiseFactory = null, s;
        };
        this.queuedPromise = new Promise((s) => {
          this.activePromise.then(t, t).then(s);
        });
      }
      return new Promise((t, s) => {
        this.queuedPromise.then(t, s);
      });
    }
    return this.activePromise = e(), new Promise((t, s) => {
      this.activePromise.then((i) => {
        this.activePromise = null, t(i);
      }, (i) => {
        this.activePromise = null, s(i);
      });
    });
  }
  dispose() {
    this.isDisposed = true;
  }
}, Eo = (e, t) => {
  let s = true;
  const i = setTimeout(() => {
    s = false, t();
  }, e);
  return { isTriggered: () => s, dispose: () => {
    clearTimeout(i), s = false;
  } };
}, Ao = (e) => {
  let t = true;
  return queueMicrotask(() => {
    t && (t = false, e());
  }), { isTriggered: () => t, dispose: () => {
    t = false;
  } };
}, Lo = class {
  constructor(e) {
    this.defaultDelay = e, this._isDisposed = false, this.deferred = null, this.completionPromise = null, this.doResolve = null, this.doReject = null, this.task = null;
  }
  trigger(e, t = this.defaultDelay) {
    if (this._isDisposed) return Promise.reject(new ae());
    this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((i, r) => {
      this.doResolve = i, this.doReject = r;
    }).then(() => {
      if (this.completionPromise = null, this.doResolve = null, this.task) {
        const i = this.task;
        return this.task = null, i();
      }
    }));
    const s = () => {
      this.deferred = null, this.doResolve?.(null);
    };
    return this.deferred = t === Co ? Ao(s) : Eo(t, s), this.completionPromise;
  }
  isTriggered() {
    return !!this.deferred?.isTriggered();
  }
  cancel() {
    this.cancelTimeout(), this.completionPromise && (this.doReject?.(new ae()), this.completionPromise = null);
  }
  cancelTimeout() {
    this.deferred?.dispose(), this.deferred = null;
  }
  dispose() {
    this._isDisposed = true, this.cancel();
  }
}, Do = class {
  constructor(e) {
    this.delayer = new Lo(e), this.throttler = new bo();
  }
  trigger(e, t) {
    return this.delayer.trigger(() => this.throttler.queue(e), t);
  }
  isTriggered() {
    return this.delayer.isTriggered();
  }
  cancel() {
    this.delayer.cancel();
  }
  dispose() {
    this.delayer.dispose(), this.throttler.dispose();
  }
};
function K1(e, t) {
  return t ? new Promise((s, i) => {
    const r = setTimeout(() => {
      n.dispose(), s();
    }, e), n = t.onCancellationRequested(() => {
      clearTimeout(r), n.dispose(), i(new ae());
    });
  }) : vs((s) => K1(e, s));
}
function Ro(e, t = 0, s) {
  const i = setTimeout(() => {
    e(), s && r.dispose();
  }, t), r = G(() => {
    clearTimeout(i), s?.delete(r);
  });
  return s?.add(r), r;
}
var Po = class {
  constructor(e) {
    this._size = 0, this._isDisposed = false, this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onDrained = new W();
  }
  whenIdle() {
    return this.size > 0 ? x.toPromise(this.onDrained) : Promise.resolve();
  }
  get onDrained() {
    return this._onDrained.event;
  }
  get size() {
    return this._size;
  }
  queue(e) {
    if (this._isDisposed) throw new Error("Object has been disposed");
    return this._size++, new Promise((t, s) => {
      this.outstandingPromises.push({ factory: e, c: t, e: s }), this.consume();
    });
  }
  consume() {
    for (; this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism; ) {
      const e = this.outstandingPromises.shift();
      this.runningPromises++;
      const t = e.factory();
      t.then(e.c, e.e), t.then(() => this.consumed(), () => this.consumed());
    }
  }
  consumed() {
    this._isDisposed || (this.runningPromises--, --this._size === 0 && this._onDrained.fire(), this.outstandingPromises.length > 0 && this.consume());
  }
  clear() {
    if (this._isDisposed) throw new Error("Object has been disposed");
    this.outstandingPromises.length = 0, this._size = this.runningPromises;
  }
  dispose() {
    this._isDisposed = true, this.outstandingPromises.length = 0, this._size = 0, this._onDrained.dispose();
  }
}, So = class extends Po {
  constructor() {
    super(1);
  }
}, ko = class {
  constructor() {
    this.queues = /* @__PURE__ */ new Map(), this.drainers = /* @__PURE__ */ new Set(), this.drainListeners = void 0, this.drainListenerCount = 0, this._isDisposed = false;
  }
  async whenDrained() {
    if (this.isDrained()) return;
    const e = new He();
    return this.drainers.add(e), e.p;
  }
  isDrained() {
    for (const [, e] of this.queues) if (e.size > 0) return false;
    return true;
  }
  queueSize(e, t = R) {
    const s = t.getComparisonKey(e);
    return this.queues.get(s)?.size ?? 0;
  }
  queueFor(e, t, s = R) {
    if (this._isDisposed) return t();
    const i = s.getComparisonKey(e);
    let r = this.queues.get(i);
    if (!r) {
      r = new So();
      const n = this.drainListenerCount++, o = x.once(r.onDrained)(() => {
        r?.dispose(), this.queues.delete(i), this.onDidQueueDrain(), this.drainListeners?.deleteAndDispose(n), this.drainListeners?.size === 0 && (this.drainListeners.dispose(), this.drainListeners = void 0);
      });
      this.drainListeners || (this.drainListeners = new r1()), this.drainListeners.set(n, o), this.queues.set(i, r);
    }
    return r.queue(t);
  }
  onDidQueueDrain() {
    this.isDrained() && this.releaseDrainers();
  }
  releaseDrainers() {
    for (const e of this.drainers) e.complete();
    this.drainers.clear();
  }
  dispose() {
    this._isDisposed = true;
    for (const [, e] of this.queues) e.dispose();
    this.queues.clear(), this.releaseDrainers(), this.drainListeners?.dispose(), this.drainListeners = void 0;
  }
}, kt = class {
  constructor(e, t) {
    this.timeoutToken = -1, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this);
  }
  dispose() {
    this.cancel(), this.runner = null;
  }
  cancel() {
    this.isScheduled() && (clearTimeout(this.timeoutToken), this.timeoutToken = -1);
  }
  schedule(e = this.timeout) {
    this.cancel(), this.timeoutToken = setTimeout(this.timeoutHandler, e);
  }
  get delay() {
    return this.timeout;
  }
  set delay(e) {
    this.timeout = e;
  }
  isScheduled() {
    return this.timeoutToken !== -1;
  }
  flush() {
    this.isScheduled() && (this.cancel(), this.doRun());
  }
  onTimeout() {
    this.timeoutToken = -1, this.runner && this.doRun();
  }
  doRun() {
    this.runner?.();
  }
}, _s = class extends kt {
  constructor(e, t) {
    super(e, t), this.units = [];
  }
  work(e) {
    this.units.push(e), this.isScheduled() || this.schedule();
  }
  doRun() {
    const e = this.units;
    this.units = [], this.runner?.(e);
  }
  dispose() {
    this.units = [], super.dispose();
  }
}, ws = class extends ee {
  constructor(e, t) {
    super(), this.options = e, this.handler = t, this.pendingWork = [], this.throttler = this._register(new Ce()), this.disposed = false, this.lastExecutionTime = 0;
  }
  get pending() {
    return this.pendingWork.length;
  }
  work(e) {
    if (this.disposed) return false;
    if (typeof this.options.maxBufferedWork == "number") {
      if (this.throttler.value) {
        if (this.pending + e.length > this.options.maxBufferedWork) return false;
      } else if (this.pending + e.length - this.options.maxWorkChunkSize > this.options.maxBufferedWork) return false;
    }
    for (const s of e) this.pendingWork.push(s);
    const t = Date.now() - this.lastExecutionTime;
    return !this.throttler.value && (!this.options.waitThrottleDelayBetweenWorkUnits || t >= this.options.throttleDelay) ? this.doWork() : !this.throttler.value && this.options.waitThrottleDelayBetweenWorkUnits && this.scheduleThrottler(Math.max(this.options.throttleDelay - t, 0)), true;
  }
  doWork() {
    this.lastExecutionTime = Date.now(), this.handler(this.pendingWork.splice(0, this.options.maxWorkChunkSize)), this.pendingWork.length > 0 && this.scheduleThrottler();
  }
  scheduleThrottler(e = this.options.throttleDelay) {
    this.throttler.value = new kt(() => {
      this.throttler.clear(), this.doWork();
    }, e), this.throttler.value.schedule();
  }
  dispose() {
    super.dispose(), this.pendingWork.length = 0, this.disposed = true;
  }
}, Io, ys;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? ys = (e, t, s) => {
    fn(() => {
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
  } : ys = (e, t, s) => {
    const i = e.requestIdleCallback(t, typeof s == "number" ? { timeout: s } : void 0);
    let r = false;
    return { dispose() {
      r || (r = true, e.cancelIdleCallback(i));
    } };
  }, Io = (e, t) => ys(globalThis, e, t);
})();
var He = class Vi {
  static fromPromise(t) {
    const s = new Vi();
    return s.settleWith(t), s;
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
    this.p = new Promise((t, s) => {
      this.completeCallback = t, this.errorCallback = s;
    });
  }
  complete(t) {
    return new Promise((s) => {
      this.completeCallback(t), this.outcome = { outcome: 0, value: t }, s();
    });
  }
  error(t) {
    return new Promise((s) => {
      this.errorCallback(t), this.outcome = { outcome: 1, value: t }, s();
    });
  }
  settleWith(t) {
    return t.then((s) => this.complete(s), (s) => this.error(s));
  }
  cancel() {
    return this.error(new ae());
  }
}, It;
((e) => {
  async function t(i) {
    let r;
    const n = await Promise.all(i.map((o) => o.then((a) => a, (a) => {
      r || (r = a);
    })));
    if (typeof r < "u") throw r;
    return n;
  }
  e.settled = t;
  function s(i) {
    return new Promise(async (r, n) => {
      try {
        await i(r, n);
      } catch (o) {
        n(o);
      }
    });
  }
  e.withAsyncBody = s;
})(It || (It = {}));
var G1 = class re {
  static fromArray(t) {
    return new re((s) => {
      s.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new re(async (s) => {
      s.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new re(async (s) => {
      await Promise.all(t.map(async (i) => s.emitOne(await i)));
    });
  }
  static merge(t) {
    return new re(async (s) => {
      await Promise.all(t.map(async (i) => {
        for await (const r of i) s.emitOne(r);
      }));
    });
  }
  constructor(t, s) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = s, this._onStateChanged = new W(), queueMicrotask(async () => {
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
        await x.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(t, s) {
    return new re(async (i) => {
      for await (const r of t) i.emitOne(s(r));
    });
  }
  map(t) {
    return re.map(this, t);
  }
  static filter(t, s) {
    return new re(async (i) => {
      for await (const r of t) s(r) && i.emitOne(r);
    });
  }
  filter(t) {
    return re.filter(this, t);
  }
  static coalesce(t) {
    return re.filter(t, (s) => !!s);
  }
  coalesce() {
    return re.coalesce(this);
  }
  static async toPromise(t) {
    const s = [];
    for await (const i of t) s.push(i);
    return s;
  }
  toPromise() {
    return re.toPromise(this);
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
G1.EMPTY = G1.fromArray([]);
function To(e, t, s) {
  let i = null, r = null;
  if (typeof s.value == "function" ? (i = "value", r = s.value, r.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof s.get == "function" && (i = "get", r = s.get), !r) throw new Error("not supported");
  const n = `$memoize$${t}`;
  s[i] = function(...o) {
    return this.hasOwnProperty(n) || Object.defineProperty(this, n, { configurable: false, enumerable: false, writable: false, value: r.apply(this, o) }), this[n];
  };
}
var Wo = Object.prototype.hasOwnProperty;
function Tt(e, t = 0) {
  if (typeof e != "object" || e === null || t > 200) return e;
  switch (e.$mid) {
    case 1:
      return U.revive(e);
    case 2:
      return new RegExp(e.source, e.flags);
    case 17:
      return new Date(e.source);
  }
  if (Array.isArray(e)) for (let s = 0; s < e.length; ++s) {
    const i = e[s];
    if (i !== null && typeof i == "object") {
      const r = Tt(i, t + 1);
      r !== i && (e[s] = r);
    }
  }
  else {
    if (e instanceof Q || e instanceof Uint8Array) return e;
    for (const s in e) if (Wo.call(e, s)) {
      const i = e[s];
      if (i !== null && typeof i == "object") {
        const r = Tt(i, t + 1);
        r !== i && (e[s] = r);
      }
    }
  }
  return e;
}
var V1 = 50, Q1 = false, J1;
function ke(e) {
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
function nt(e) {
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
function Ie(e) {
  let t = 0;
  for (let s = 0; ; s += 7) {
    const i = e.readUInt8();
    if (t |= (i & 127) << s, !(i & 128)) return t;
  }
}
function Te(e, t) {
  if (t === 0) {
    e.writeUInt8(0);
    return;
  }
  do {
    let s = t & 127;
    t = t >>> 7, t > 0 && (s |= 128), e.writeUInt8(s);
  } while (t !== 0);
}
var Cs = class {
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
}, Y1 = 4 * 1024, xo = 512 * 1024, $o = 64 * 1024, ot, X1 = Q.alloc(0), Z1 = class {
  constructor() {
    this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0, ot ? (this.data = ot, ot = void 0) : this.data = Q.alloc(Y1);
  }
  get buffer() {
    if (!this.fragments) {
      const e = Q.alloc(this.length);
      return e.set(this.data.slice(0, this.length), 0), e;
    }
    return this.flushSegment(), Q.concat(this.fragments, this.totalLength);
  }
  ensureCapacity(e) {
    const t = this.length + e;
    if (t <= this.data.byteLength) return;
    let s = Math.max(this.data.byteLength * 2, Y1);
    for (; s < t; ) s *= 2;
    const i = Q.alloc(s);
    this.length > 0 && i.set(this.data.slice(0, this.length), 0), this.data = i;
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
    if (e.byteLength < $o) {
      this.write(e);
      return;
    }
    this.fragments || (this.fragments = []), this.flushSegment(), this.fragments.push(e), this.totalLength += e.byteLength;
  }
  dispose() {
    !ot && this.data.byteLength <= xo && this.data !== X1 && (ot = this.data), this.data = X1, this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0;
  }
}, ei = typeof Buffer < "u", qo = 64 * 1024, Mo = 8;
function Fo(e) {
  return !(e === null || typeof e != "object" || Array.isArray(e) || e instanceof Q || e instanceof Uint8Array || ei && Buffer.isBuffer(e));
}
function No(e) {
  if (e.length < Mo) return false;
  for (let t = 0; t < e.length; t++) if (!Fo(e[t])) return false;
  return true;
}
function bs(e, t) {
  if (t.length >= qo) {
    const s = Q.fromString(t);
    Te(e, s.byteLength), e.writeReference(s);
    return;
  }
  Q.withPooledString(t, (s) => {
    Te(e, s.byteLength), e.write(s);
  });
}
function at(e, t) {
  if (typeof t > "u") e.writeUInt8(0);
  else if (typeof t == "string") e.writeUInt8(1), bs(e, t);
  else if (ei && Buffer.isBuffer(t)) e.writeUInt8(2), Te(e, t.byteLength), e.writeReference(Q.wrap(t));
  else if (t instanceof Q) e.writeUInt8(3), Te(e, t.byteLength), e.writeReference(t);
  else if (Array.isArray(t)) {
    if (No(t)) {
      const s = JSON.stringify(t);
      e.writeUInt8(5), bs(e, s);
      return;
    }
    e.writeUInt8(4), Te(e, t.length);
    for (const s of t) at(e, s);
  } else if (typeof t == "number" && (t | 0) === t) e.writeUInt8(6), Te(e, t);
  else if (t instanceof Uint8Array) e.writeUInt8(7), Te(e, t.length), e.writeReference(Q.wrap(t));
  else {
    const s = JSON.stringify(t);
    e.writeUInt8(5), bs(e, s);
  }
}
function je(e) {
  switch (e.readUInt8()) {
    case 0:
      return;
    case 1:
      return e.read(Ie(e)).toString();
    case 2:
      return e.read(Ie(e)).buffer;
    case 3:
      return e.read(Ie(e));
    case 7:
      return e.read(Ie(e)).buffer;
    case 4: {
      const s = Ie(e), i = [];
      for (let r = 0; r < s; r++) i.push(je(e));
      return i;
    }
    case 5:
      return JSON.parse(e.read(Ie(e)).toString());
    case 6:
      return Ie(e);
  }
}
var ti = class {
  constructor(e, t, s = null, i = 1e3) {
    this.protocol = e, this.ctx = t, this.logger = s, this.timeoutDelay = i, this.channels = /* @__PURE__ */ new Map(), this.activeRequests = /* @__PURE__ */ new Map(), this.protocolListener = new Ce(), this.pendingRequests = /* @__PURE__ */ new Map(), this.protocolListener.value = this.protocol.onMessage((r) => this.onRawMessage(r)), this.sendResponse({ type: 200 });
  }
  registerChannel(e, t) {
    this.channels.set(e, t), setTimeout(() => this.flushPendingRequests(e), 0);
  }
  sendResponse(e) {
    switch (e.type) {
      case 200: {
        const t = this.send([e.type]);
        this.logger?.logOutgoing(t, 0, 1, nt(e.type));
        return;
      }
      case 201:
      case 202:
      case 204:
      case 203: {
        const t = this.send([e.type, e.id], e.data);
        this.logger?.logOutgoing(t, e.id, 1, nt(e.type), e.data);
        return;
      }
    }
  }
  send(e, t = void 0) {
    const s = new Z1();
    try {
      return at(s, e), at(s, t), this.sendBuffer(s.buffer);
    } finally {
      s.dispose();
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
    const t = new Cs(e), s = Q1, i = s ? performance.now() : 0, r = je(t), n = r[0];
    if (n !== 100 && n !== 101 && n !== 102 && n !== 103) return;
    const o = je(t);
    if (s) {
      const a = performance.now() - i;
      a > V1 && J1?.({ durationMs: a, byteLength: e.byteLength, requestId: r[1] ?? 0, channelName: r[2], command: r[3], messageType: ke(n) });
    }
    switch (n) {
      case 100:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${ke(n)}: ${r[2]}.${r[3]}`, o), this.onPromise({ type: n, id: r[1], channelName: r[2], name: r[3], arg: o });
      case 102:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${ke(n)}: ${r[2]}.${r[3]}`, o), this.onEventListen({ type: n, id: r[1], channelName: r[2], name: r[3], arg: o });
      case 101:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${ke(n)}`), this.disposeActiveRequest({ type: n, id: r[1] });
      case 103:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${ke(n)}`), this.disposeActiveRequest({ type: n, id: r[1] });
    }
  }
  onPromise(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const s = new Fe();
    let i;
    try {
      i = t.call(this.ctx, e.name, e.arg, s.token);
    } catch (o) {
      i = Promise.reject(o);
    }
    const r = e.id;
    i.then((o) => {
      this.sendResponse({ id: r, data: o, type: 201 });
    }, (o) => {
      o instanceof Error ? this.sendResponse({ id: r, data: { message: o.message, name: o.name, stack: o.stack ? o.stack.split(`
`) : void 0 }, type: 202 }) : this.sendResponse({ id: r, data: o, type: 203 });
    }).finally(() => {
      n.dispose(), this.activeRequests.delete(e.id);
    });
    const n = G(() => s.cancel());
    this.activeRequests.set(e.id, n);
  }
  onEventListen(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const s = e.id, r = t.listen(this.ctx, e.name, e.arg)((n) => this.sendResponse({ id: s, data: n, type: 204 }));
    this.activeRequests.set(e.id, r);
  }
  disposeActiveRequest(e) {
    const t = this.activeRequests.get(e.id);
    t && (t.dispose(), this.activeRequests.delete(e.id));
  }
  collectPendingRequest(e) {
    let t = this.pendingRequests.get(e.channelName);
    t || (t = [], this.pendingRequests.set(e.channelName, t));
    const s = Ro(() => {
      console.error(`Unknown channel: ${e.channelName}`), e.type === 100 && this.sendResponse({ id: e.id, data: { name: "Unknown channel", message: `Channel name '${e.channelName}' timed out after ${this.timeoutDelay}ms`, stack: void 0 }, type: 202 }), s.dispose();
    }, this.timeoutDelay);
    t.push({ request: e, timeoutTimer: s });
  }
  flushPendingRequests(e) {
    const t = this.pendingRequests.get(e);
    if (t) {
      for (const s of t) switch (s.timeoutTimer.dispose(), s.request.type) {
        case 100:
          this.onPromise(s.request);
          break;
        case 102:
          this.onEventListen(s.request);
          break;
      }
      this.pendingRequests.delete(e);
    }
  }
  dispose() {
    this.protocolListener.dispose(), tt(this.activeRequests.values()), this.activeRequests.clear();
    for (const e of this.pendingRequests.values()) tt(e.map((t) => t.timeoutTimer));
    this.pendingRequests.clear();
  }
}, si = class {
  constructor(e, t = null) {
    this.protocol = e, this.isDisposed = false, this.state = 0, this.activeRequests = new V(), this.handlers = /* @__PURE__ */ new Map(), this.lastRequestId = 0, this.protocolListener = new Ce(), this._pendingRPCDetails = /* @__PURE__ */ new Map(), this._onDidInitialize = new W(), this.onDidInitialize = this._onDidInitialize.event, this.initializeListener = new V(), this.protocolListener.value = this.protocol.onMessage((s) => this.onBuffer(s)), this.logger = t;
  }
  getChannel(e) {
    const t = this;
    return { call(s, i, r) {
      return t.isDisposed ? Promise.reject(new ae()) : t.requestPromise(e, s, i, r);
    }, listen(s, i) {
      return t.isDisposed ? x.None : t.requestEvent(e, s, i);
    } };
  }
  requestPromise(e, t, s, i = st.None) {
    const r = this.lastRequestId++, o = { id: r, type: 100, channelName: e, name: t, arg: s };
    if (i.isCancellationRequested) return Promise.reject(new ae());
    let a, l;
    return new Promise((u, c) => {
      if (i.isCancellationRequested) return c(new ae());
      const f = () => {
        const C = (b) => {
          switch (b.type) {
            case 201:
              this.handlers.delete(r), this._pendingRPCDetails.delete(r), u(b.data);
              break;
            case 202: {
              this.handlers.delete(r), this._pendingRPCDetails.delete(r);
              const k = new Error(b.data.message);
              k.stack = Array.isArray(b.data.stack) ? b.data.stack.join(`
`) : b.data.stack, k.name = b.data.name, c(k);
              break;
            }
            case 203:
              this.handlers.delete(r), this._pendingRPCDetails.delete(r), c(b.data);
              break;
          }
        };
        this.handlers.set(r, C), this._pendingRPCDetails.set(r, { channelName: e, command: t });
        try {
          this.sendRequest(o);
        } catch (b) {
          this.handlers.delete(r), this._pendingRPCDetails.delete(r), c(b);
        }
      };
      let d = null;
      this.state === 1 ? f() : (d = vs((C) => this.whenInitialized()), d.then(() => {
        d = null, f();
      }, () => {
      }));
      const _ = () => {
        d ? (d.cancel(), d = null) : this.sendRequest({ id: r, type: 101 }), c(new ae());
      };
      a = i.onCancellationRequested(_), l = { dispose: Yt(() => {
        _(), a.dispose();
      }) }, this.activeRequests.add(l);
    }).finally(() => {
      a?.dispose(), this.activeRequests.deleteAndLeak(l), s1(l);
    });
  }
  requestEvent(e, t, s) {
    const i = this.lastRequestId++, n = { id: i, type: 102, channelName: e, name: t, arg: s };
    let o = null;
    const a = new W({ onWillAddFirstListener: () => {
      if (this.isDisposed) return;
      const l = (u) => a.fire(u.data);
      this.handlers.set(i, l);
      const h = () => {
        this.activeRequests.add(a), this._pendingRPCDetails.set(i, { channelName: e, command: t }), this.sendRequest(n);
      };
      this.state === 1 ? h() : (o = vs((u) => this.whenInitialized()), o.then(() => {
        o = null, h();
      }, () => {
      }));
    }, onDidRemoveLastListener: () => {
      const l = this.handlers.delete(i);
      o ? (o.cancel(), o = null) : l && (this.activeRequests.deleteAndLeak(a), s1(a), this._pendingRPCDetails.delete(i), this.sendRequest({ id: i, type: 103 }));
    } });
    return a.event;
  }
  sendRequest(e) {
    switch (e.type) {
      case 100:
      case 102: {
        const t = this.send([e.type, e.id, e.channelName, e.name], e.arg);
        this.logger?.logOutgoing(t, e.id, 0, `${ke(e.type)}: ${e.channelName}.${e.name}`, e.arg);
        return;
      }
      case 101:
      case 103: {
        const t = this.send([e.type, e.id]);
        this.logger?.logOutgoing(t, e.id, 0, ke(e.type));
        return;
      }
    }
  }
  send(e, t = void 0) {
    const s = new Z1();
    try {
      return at(s, e), at(s, t), this.sendBuffer(s.buffer);
    } finally {
      s.dispose();
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
    const t = new Cs(e), s = Q1, i = s ? performance.now() : 0, r = je(t), n = r[0];
    if (n !== 200 && n !== 201 && n !== 202 && n !== 203 && n !== 204) return;
    const o = je(t);
    if (s) {
      const a = performance.now() - i;
      if (a > V1) {
        const l = r[1] ?? 0, h = this._pendingRPCDetails.get(l);
        J1?.({ durationMs: a, byteLength: e.byteLength, requestId: l, channelName: h?.channelName, command: h?.command, messageType: nt(n) });
      }
    }
    switch (n) {
      case 200:
        return this.logger?.logIncoming(e.byteLength, 0, 0, nt(n)), this.onResponse({ type: r[0] });
      case 201:
      case 202:
      case 204:
      case 203:
        return this.logger?.logIncoming(e.byteLength, r[1], 0, nt(n), o), this.onResponse({ type: r[0], id: r[1], data: o });
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
    return x.toPromise(this.onDidInitialize, this.initializeListener);
  }
  whenInitialized() {
    return this.state === 1 ? Promise.resolve() : this.onDidInitializePromise;
  }
  dispose() {
    this.isDisposed = true, this.protocolListener.dispose(), this.activeRequests.dispose(), this._pendingRPCDetails.clear(), this.handlers.clear(), this.initializeListener.dispose(), this._onDidInitialize.dispose();
  }
};
rr([To], si.prototype, "onDidInitializePromise", null);
var Oo = class {
  constructor(e, t, s) {
    this.channels = /* @__PURE__ */ new Map(), this._connections = /* @__PURE__ */ new Set(), this._onDidAddConnection = new W(), this.onDidAddConnection = this._onDidAddConnection.event, this._onDidRemoveConnection = new W(), this.onDidRemoveConnection = this._onDidRemoveConnection.event, this.disposables = new V(), this.disposables.add(e(({ protocol: i, onDidClientDisconnect: r }) => {
      const n = x.once(i.onMessage), o = new V(), a = n((l) => {
        const h = new Cs(l), u = je(h), c = new ti(i, u, t, s), f = new si(i, t);
        this.channels.forEach((_, C) => c.registerChannel(C, _));
        const d = { channelServer: c, channelClient: f, ctx: u };
        this._connections.add(d), this._onDidAddConnection.fire(d), o.add(r(() => {
          c.dispose(), f.dispose(), this._connections.delete(d), this._onDidRemoveConnection.fire(d), this.disposables.delete(o), o.dispose();
        }));
      });
      o.add(a), this.disposables.add(o);
    }));
  }
  get connections() {
    const e = [];
    return this._connections.forEach((t) => e.push(t)), e;
  }
  getChannel(e, t) {
    const s = this;
    return { call(i, r, n) {
      let o;
      if (e1(t)) {
        const l = mr(s.connections.filter(t));
        o = l ? Promise.resolve(l) : x.toPromise(x.filter(s.onDidAddConnection, t));
      } else o = t.routeCall(s, i, r);
      const a = o.then((l) => l.channelClient.getChannel(e));
      return ii(a).call(i, r, n);
    }, listen(i, r) {
      if (e1(t)) return s.getMulticastEvent(e, t, i, r);
      const n = t.routeEvent(s, i, r).then((o) => o.channelClient.getChannel(e));
      return ii(n).listen(i, r);
    } };
  }
  getMulticastEvent(e, t, s, i) {
    const r = this;
    let n;
    const o = new W({ onWillAddFirstListener: () => {
      n = new V();
      const a = new Vr(), l = /* @__PURE__ */ new Map(), h = (c) => {
        const d = c.channelClient.getChannel(e).listen(s, i), _ = a.add(d);
        l.set(c, _);
      }, u = (c) => {
        const f = l.get(c);
        f && (f.dispose(), l.delete(c));
      };
      r.connections.filter(t).forEach(h), x.filter(r.onDidAddConnection, t)(h, void 0, n), r.onDidRemoveConnection(u, void 0, n), a.event(o.fire, o, n), n.add(a);
    }, onDidRemoveLastListener: () => {
      n?.dispose(), n = void 0;
    } });
    return r.disposables.add(o), o.event;
  }
  registerChannel(e, t) {
    this.channels.set(e, t);
    for (const s of this._connections) s.channelServer.registerChannel(e, t);
  }
  dispose() {
    this.disposables.dispose();
    for (const e of this._connections) e.channelClient.dispose(), e.channelServer.dispose();
    this._connections.clear(), this.channels.clear(), this._onDidAddConnection.dispose(), this._onDidRemoveConnection.dispose();
  }
};
function ii(e) {
  return { call(t, s, i) {
    return e.then((r) => r.call(t, s, i));
  }, listen(t, s) {
    const i = new Qr();
    return e.then((r) => i.input = r.listen(t, s)), i.event;
  } };
}
var Es;
((e) => {
  const t = () => {
  };
  function s(o, a, l) {
    const h = o, u = l && l.disableMarshalling, c = (d) => {
      const _ = h[d];
      return l?.disableEventBuffering ? _ : x.buffer(_, true, void 0, a);
    }, f = /* @__PURE__ */ new Map();
    for (const d in h) r(d) && f.set(d, c(d));
    return new class {
      listen(d, _, C) {
        const b = f.get(_);
        if (b) return b;
        const k = h[_];
        if (typeof k == "function") {
          if (n(_)) return k.call(h, C);
          if (r(_)) return f.set(_, c(_)), f.get(_);
        }
        throw new Je(`Event not found: ${_}`);
      }
      call(d, _, C) {
        const b = h[_];
        if (typeof b == "function") {
          if (!u && Array.isArray(C)) for (let z = 0; z < C.length; z++) C[z] = Tt(C[z]);
          let k = b.apply(h, C);
          return k instanceof Promise || (k = Promise.resolve(k)), k;
        }
        throw new Je(`Method not found: ${_}`);
      }
    }();
  }
  e.fromService = s;
  function i(o, a) {
    const l = a && a.disableMarshalling;
    return new Proxy({}, { get(h, u) {
      if (typeof u != "symbol") {
        if (typeof u == "string") return a?.properties?.has(u) ? a.properties.get(u) : u === "dispose" ? t : n(u) ? function(c) {
          return o.listen(u, c);
        } : r(u) ? o.listen(u) : async function(...c) {
          let f;
          a && !Sr(a.context) ? f = [a.context, ...c] : f = c;
          const d = await o.call(u, f);
          return l ? d : Tt(d);
        };
        throw new Je(`Property not found: ${String(u)}`);
      }
    } });
  }
  e.toService = i;
  function r(o) {
    return o[0] === "o" && o[1] === "n" && A1(o.charCodeAt(2));
  }
  function n(o) {
    return /^onDynamic/.test(o) && A1(o.charCodeAt(9));
  }
})(Es || (Es = {}));
import "child_process";
import "fs";
import * as S from "fs";
import { tmpdir as Uo } from "os";
import { promisify as lt } from "util";
var Bo = new Jt(1e4);
function Wt(e) {
  return Ho(e, "NFC", Bo);
}
var U2 = new Jt(1e4), zo = /[^\u0000-\u0080]/;
function Ho(e, t, s) {
  if (!e) return e;
  const i = s.get(e);
  if (i) return i;
  let r;
  return zo.test(e) ? r = e.normalize(t) : r = e, s.set(e, r), r;
}
async function ri(e, t = 0, s) {
  if (zn(e)) throw new Error("rimraf - will refuse to recursively delete root");
  return t === 0 ? As(e) : jo(e, s);
}
async function jo(e, t = S1(Uo())) {
  try {
    try {
      await S.promises.rename(e, t);
    } catch (s) {
      return s.code === "ENOENT" ? void 0 : As(e);
    }
    As(t).catch((s) => {
    });
  } catch (s) {
    if (s.code !== "ENOENT") throw s;
  }
}
async function As(e) {
  return S.promises.rm(e, { recursive: true, force: true, maxRetries: 3 });
}
async function xt(e, t) {
  return Go(await (t ? Ko(e) : S.promises.readdir(e)));
}
async function Ko(e) {
  try {
    return await S.promises.readdir(e, { withFileTypes: true });
  } catch (i) {
    console.warn("[node.js fs] readdir with filetypes failed with error: ", i);
  }
  const t = [], s = await xt(e);
  for (const i of s) {
    let r = false, n = false, o = false;
    try {
      const a = await S.promises.lstat(te(e, i));
      r = a.isFile(), n = a.isDirectory(), o = a.isSymbolicLink();
    } catch (a) {
      console.warn("[node.js fs] unexpected error from lstat after readdir: ", a);
    }
    t.push({ name: i, isFile: () => r, isDirectory: () => n, isSymbolicLink: () => o });
  }
  return t;
}
function Go(e) {
  return e.map((t) => typeof t == "string" ? Oe ? Wt(t) : t : (t.name = Oe ? Wt(t.name) : t.name, t));
}
async function Vo(e) {
  const t = await xt(e), s = [];
  for (const i of t) await ht.existsDirectory(te(e, i)) && s.push(i);
  return s;
}
var ht;
((e) => {
  async function t(r) {
    let n;
    try {
      if (n = await S.promises.lstat(r), !n.isSymbolicLink()) return { stat: n };
    } catch {
    }
    try {
      return { stat: await S.promises.stat(r), symbolicLink: n?.isSymbolicLink() ? { dangling: false } : void 0 };
    } catch (o) {
      if (o.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: true } };
      if (Y && o.code === "EACCES") try {
        return { stat: await S.promises.stat(await S.promises.readlink(r)), symbolicLink: { dangling: false } };
      } catch (a) {
        if (a.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: true } };
        throw a;
      }
      throw o;
    }
  }
  e.stat = t;
  async function s(r) {
    try {
      const { stat: n, symbolicLink: o } = await e.stat(r);
      return n.isFile() && o?.dangling !== true;
    } catch {
    }
    return false;
  }
  e.existsFile = s;
  async function i(r) {
    try {
      const { stat: n, symbolicLink: o } = await e.stat(r);
      return n.isDirectory() && o?.dangling !== true;
    } catch {
    }
    return false;
  }
  e.existsDirectory = i;
})(ht || (ht = {}));
var Qo = new ko();
function Jo(e, t, s) {
  return Qo.queueFor(U.file(e), () => {
    const i = Zo(s);
    return new Promise((r, n) => Xo(e, t, i, (o) => o ? n(o) : r()));
  }, wo);
}
var ni = true;
function Yo(e) {
  ni = e;
}
function Xo(e, t, s, i) {
  if (!ni) return S.writeFile(e, t, { mode: s.mode, flag: s.flag }, i);
  S.open(e, s.flag, s.mode, (r, n) => {
    if (r) return i(r);
    S.writeFile(n, t, (o) => {
      if (o) return S.close(n, () => i(o));
      S.fdatasync(n, (a) => (a && (console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", a), Yo(false)), S.close(n, (l) => i(l))));
    });
  });
}
function Zo(e) {
  return e ? { mode: typeof e.mode == "number" ? e.mode : 438, flag: typeof e.flag == "string" ? e.flag : "w" } : { mode: 438, flag: "w" };
}
async function ea(e, t, s = 6e4) {
  if (e !== t) try {
    Y && typeof s == "number" ? await oi(e, t, Date.now(), s) : await S.promises.rename(e, t);
  } catch (i) {
    if (e.toLowerCase() !== t.toLowerCase() && i.code === "EXDEV" || e.endsWith(".")) await ai(e, t, { preserveSymlinks: false }), await ri(e, 1);
    else throw i;
  }
}
async function oi(e, t, s, i, r = 0) {
  try {
    return await S.promises.rename(e, t);
  } catch (n) {
    if (n.code !== "EACCES" && n.code !== "EPERM" && n.code !== "EBUSY") throw n;
    if (Date.now() - s >= i) throw console.error(`[node.js fs] rename failed after ${r} retries with error: ${n}`), n;
    if (r === 0) {
      let o = false;
      try {
        const { stat: a } = await ht.stat(t);
        a.isFile() || (o = true);
      } catch {
      }
      if (o) throw n;
    }
    return await K1(Math.min(100, r * 10)), oi(e, t, s, i, r + 1);
  }
}
async function ai(e, t, s) {
  return hi(e, t, { root: { source: e, target: t }, options: s, handledSourcePaths: /* @__PURE__ */ new Set() });
}
var li = 511;
async function hi(e, t, s) {
  if (s.handledSourcePaths.has(e)) return;
  s.handledSourcePaths.add(e);
  const { stat: i, symbolicLink: r } = await ht.stat(e);
  if (r) {
    if (s.options.preserveSymlinks) try {
      return await ia(e, t, s);
    } catch {
    }
    if (r.dangling) return;
  }
  return i.isDirectory() ? ta(e, t, i.mode & li, s) : sa(e, t, i.mode & li);
}
async function ta(e, t, s, i) {
  await S.promises.mkdir(t, { recursive: true, mode: s });
  const r = await xt(e);
  for (const n of r) await hi(te(e, n), te(t, n), i);
}
async function sa(e, t, s) {
  await S.promises.copyFile(e, t), await S.promises.chmod(t, s);
}
async function ia(e, t, s) {
  let i = await S.promises.readlink(e);
  ie(i, s.root.source, !N) && (i = te(s.root.target, i.substr(s.root.source.length + 1))), await S.promises.symlink(i, t);
}
var We = new class {
  get read() {
    return (e, t, s, i, r) => new Promise((n, o) => {
      S.read(e, t, s, i, r, (a, l, h) => a ? o(a) : n({ bytesRead: l, buffer: h }));
    });
  }
  get write() {
    return (e, t, s, i, r) => new Promise((n, o) => {
      S.write(e, t, s, i, r, (a, l, h) => a ? o(a) : n({ bytesWritten: l, buffer: h }));
    });
  }
  get fdatasync() {
    return lt(S.fdatasync);
  }
  get open() {
    return lt(S.open);
  }
  get close() {
    return lt(S.close);
  }
  get realpath() {
    return lt(S.realpath);
  }
  get ftruncate() {
    return lt(S.ftruncate);
  }
  async exists(e) {
    try {
      return await S.promises.access(e), true;
    } catch {
      return false;
    }
  }
  get readdir() {
    return xt;
  }
  get readDirsInDir() {
    return Vo;
  }
  get writeFile() {
    return Jo;
  }
  get rm() {
    return ri;
  }
  get rename() {
    return ea;
  }
  get copy() {
    return ai;
  }
}(), ra = class extends ti {
  constructor(e) {
    super({ send: (t) => {
      try {
        process.send?.(t.buffer);
      } catch {
      }
    }, onMessage: x.fromNodeEventEmitter(process, "message", (t) => {
      if (t instanceof Uint8Array) return Q.wrap(t);
      throw new Error("ipc.cp: expected Uint8Array IPC frame from parent");
    }) }, e), process.once("disconnect", () => this.dispose());
  }
};
function ci(e) {
  return !!e.parentPort;
}
var na = class {
  constructor(e) {
    this.port = e, this.onMessage = x.fromNodeEventEmitter(this.port, "message", (t) => t.data ? Q.wrap(t.data) : Q.alloc(0)), e.start();
  }
  send(e) {
    this.port.postMessage(e.buffer);
  }
  disconnect() {
    this.port.close();
  }
}, oa = class Qi extends Oo {
  static getOnDidClientConnect(t) {
    kr(ci(process), "Electron Utility Process");
    const s = new W();
    return process.parentPort.on("message", (i) => {
      if (t?.handledClientConnection(i)) return;
      const r = i.ports.at(0);
      r && s.fire(r);
    }), x.map(s.event, (i) => ({ protocol: new na(i), onDidClientDisconnect: x.fromNodeEventEmitter(i, "close") }));
  }
  constructor(t) {
    super(Qi.getOnDidClientConnect(t));
  }
}, Ke = "**", ui = "/", $t = "[/\\\\]", qt = "[^/\\\\]", aa = /\//g;
function fi(e, t) {
  switch (e) {
    case 0:
      return "";
    case 1:
      return `${qt}*?`;
    default:
      return `(?:${$t}|${qt}+${$t}${t ? `|${$t}${qt}+` : ""})*?`;
  }
}
function di(e, t) {
  if (!e) return [];
  const s = [];
  let i = false, r = false, n = "";
  for (const o of e) {
    switch (o) {
      case t:
        if (!i && !r) {
          s.push(n), n = "";
          continue;
        }
        break;
      case "{":
        i = true;
        break;
      case "}":
        i = false;
        break;
      case "[":
        r = true;
        break;
      case "]":
        r = false;
        break;
    }
    n += o;
  }
  return n && s.push(n), s;
}
function gi(e) {
  if (!e) return "";
  let t = "";
  const s = di(e, ui);
  if (s.every((i) => i === Ke)) t = ".*";
  else {
    let i = false;
    s.forEach((r, n) => {
      if (r === Ke) {
        if (i) return;
        t += fi(2, n === s.length - 1);
      } else {
        let o = false, a = "", l = false, h = "";
        for (const u of r) {
          if (u !== "}" && o) {
            a += u;
            continue;
          }
          if (l && (u !== "]" || !h)) {
            let c;
            u === "-" ? c = u : (u === "^" || u === "!") && !h ? c = "^" : u === ui ? c = "" : c = C1(u), h += c;
            continue;
          }
          switch (u) {
            case "{":
              o = true;
              continue;
            case "[":
              l = true;
              continue;
            case "}": {
              const f = `(?:${di(a, ",").map((d) => gi(d)).join("|")})`;
              t += f, o = false, a = "";
              break;
            }
            case "]": {
              t += "[" + h + "]", l = false, h = "";
              break;
            }
            case "?":
              t += qt;
              continue;
            case "*":
              t += fi(1);
              continue;
            default:
              t += C1(u);
          }
        }
        n < s.length - 1 && (s[n + 1] !== Ke || n + 2 < s.length) && (t += $t);
      }
      i = r === Ke;
    });
  }
  return t;
}
var la = /^\*\*\/\*\.[\w\.-]+$/, ha = /^\*\*\/([\w\.-]+)\/?$/, ca = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/, ua = /^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/, fa = /^\*\*((\/[\w\.-]+)+)\/?$/, da = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/, pi = new Jt(1e4), mi = function() {
  return false;
}, he = function() {
  return null;
};
function Ls(e, t) {
  if (!e) return he;
  let s;
  typeof e != "string" ? s = e.pattern : s = e, s = s.trim();
  const i = t.ignoreCase ?? false, r = t.ignoreCase ?? !N, n = { ...t, equals: i ? us : (h, u) => h === u, endsWith: i ? In : (h, u) => h.endsWith(u), isEqualOrParent: (h, u) => ie(h, u, r) }, o = `${i ? s.toLowerCase() : s}_${!!t.trimForExclusions}_${i}`;
  let a = pi.get(o);
  if (a) return vi(a, e, n);
  let l;
  return la.test(s) ? a = pa(s.substring(4), s, n) : (l = ha.exec(Ds(s, n))) ? a = ma(l[1], s, n) : (t.trimForExclusions ? ua : ca).test(s) ? a = va(s, n) : (l = fa.exec(Ds(s, n))) ? a = _i(l[1].substring(1), s, true, n) : (l = da.exec(Ds(s, n))) ? a = _i(l[1], s, false, n) : a = _a(s, n), pi.set(o, a), vi(a, e, n);
}
function ga(e, t) {
  const s = t.length;
  if (s === 0) return { ...e, isEqualOrParent: () => false };
  const i = se.charCodeAt(0), r = t.charCodeAt(s - 1) === i;
  let n = true;
  for (let o = 0; o < s; o++) if (t.charCodeAt(o) > 127) {
    n = false;
    break;
  }
  if (n) {
    const o = t.toLowerCase(), a = (u) => u >= 65 && u <= 90 ? u + 32 : u, l = a(o.charCodeAt(0)), h = s > 1 ? a(o.charCodeAt(s - 1)) : l;
    return { ...e, isEqualOrParent(u, c) {
      if (u.length < s) return false;
      if (u.length > s) {
        const d = r ? s - 1 : s;
        if (u.charCodeAt(d) !== i) return false;
      }
      let f = u.charCodeAt(0);
      if (f !== l) {
        if (f > 127) return ie(u, t, true);
        if (f = a(f), f !== l) return false;
      }
      if (s > 1) {
        let d = u.charCodeAt(s - 1);
        if (d !== h) {
          if (d > 127) return ie(u, t, true);
          if (d = a(d), d !== h) return false;
        }
      }
      for (let d = 0; d < s; d++) {
        const _ = u.charCodeAt(d), C = o.charCodeAt(d);
        if (_ === C) continue;
        if (_ > 127) return ie(u, t, true);
        let b = _;
        if (b >= 65 && b <= 90 && (b += 32), b !== C) return false;
      }
      return true;
    } };
  }
  return { ...e, isEqualOrParent(o, a) {
    return ie(o, t, true);
  } };
}
function vi(e, t, s) {
  if (typeof t == "string") return e;
  const i = t.base, r = i.length, o = s.ignoreCase ?? !N ? ga(s, i) : s, a = se.charCodeAt(0), l = function(h, u) {
    if (!o.isEqualOrParent(h, i)) return null;
    let c = r;
    for (; c < h.length && h.charCodeAt(c) === a; ) c++;
    return e(h.substring(c), u);
  };
  return l.allBasenames = e.allBasenames, l.allPaths = e.allPaths, l.basenames = e.basenames, l.patterns = e.patterns, l;
}
function Ds(e, t) {
  return t.trimForExclusions && e.endsWith("/**") ? e.substring(0, e.length - 2) : e;
}
function pa(e, t, s) {
  return function(i, r) {
    return typeof i == "string" && s.endsWith(i, e) ? t : null;
  };
}
function ma(e, t, s) {
  const i = `/${e}`, r = `\\${e}`, n = function(a, l) {
    return typeof a != "string" ? null : l ? s.equals(l, e) ? t : null : s.equals(a, e) || s.endsWith(a, i) || s.endsWith(a, r) ? t : null;
  }, o = [e];
  return n.basenames = o, n.patterns = [t], n.allBasenames = o, n;
}
function va(e, t) {
  const s = wi(e.slice(1, -1).split(",").map((a) => Ls(a, t)).filter((a) => a !== he), e), i = s.length;
  if (!i) return he;
  if (i === 1) return s[0];
  const r = function(a, l) {
    for (let h = 0, u = s.length; h < u; h++) if (s[h](a, l)) return e;
    return null;
  }, n = s.find((a) => !!a.allBasenames);
  n && (r.allBasenames = n.allBasenames);
  const o = s.reduce((a, l) => l.allPaths ? a.concat(l.allPaths) : a, []);
  return o.length && (r.allPaths = o), r;
}
function _i(e, t, s, i) {
  const r = se === D.sep, n = r ? e : e.replace(aa, se), o = se + n, a = D.sep + e;
  let l;
  return s ? l = function(h, u) {
    return typeof h == "string" && (i.equals(h, n) || i.endsWith(h, o) || !r && (i.equals(h, e) || i.endsWith(h, a))) ? t : null;
  } : l = function(h, u) {
    return typeof h == "string" && (i.equals(h, n) || !r && i.equals(h, e)) ? t : null;
  }, l.allPaths = [(s ? "*/" : "./") + e], l;
}
function _a(e, t) {
  try {
    const s = new RegExp(`^${gi(e)}$`, t.ignoreCase ? "i" : void 0);
    return function(i) {
      return s.lastIndex = 0, typeof i == "string" && s.test(i) ? e : null;
    };
  } catch {
    return he;
  }
}
function wa(e, t = {}) {
  if (!e) return mi;
  if (typeof e == "string" || ya(e)) {
    const s = Ls(e, t);
    if (s === he) return mi;
    const i = function(r, n) {
      return !!s(r, n);
    };
    return s.allBasenames && (i.allBasenames = s.allBasenames), s.allPaths && (i.allPaths = s.allPaths), i;
  }
  return Ca(e, t);
}
function ya(e) {
  const t = e;
  return t ? typeof t.base == "string" && typeof t.pattern == "string" : false;
}
function Ca(e, t) {
  const s = wi(Object.getOwnPropertyNames(e).map((a) => ba(a, e[a], t)).filter((a) => a !== he)), i = s.length;
  if (!i) return he;
  if (!s.some((a) => !!a.requiresSiblings)) {
    if (i === 1) return s[0];
    const a = function(u, c) {
      for (let f = 0, d = s.length; f < d; f++) {
        const _ = s[f](u, c);
        if (typeof _ == "string") return _;
      }
      return null;
    }, l = s.find((u) => !!u.allBasenames);
    l && (a.allBasenames = l.allBasenames);
    const h = s.reduce((u, c) => c.allPaths ? u.concat(c.allPaths) : u, []);
    return h.length && (a.allPaths = h), a;
  }
  const r = function(a, l, h) {
    let u, c;
    for (let f = 0, d = s.length; f < d; f++) {
      const _ = s[f];
      _.requiresSiblings && h && (l || (l = Rt(a)), u || (u = l.substr(0, l.length - Dn(a).length)));
      const C = _(a, l, u, h);
      if (typeof C == "string") return C;
      j1(C) && (c || (c = []), c.push(C));
    }
    return c ? (async () => {
      for (const f of c) {
        const d = await f;
        if (typeof d == "string") return d;
      }
      return null;
    })() : null;
  }, n = s.find((a) => !!a.allBasenames);
  n && (r.allBasenames = n.allBasenames);
  const o = s.reduce((a, l) => l.allPaths ? a.concat(l.allPaths) : a, []);
  return o.length && (r.allPaths = o), r;
}
function ba(e, t, s) {
  if (t === false) return he;
  const i = Ls(e, s);
  if (i === he) return he;
  if (typeof t == "boolean") return i;
  if (t) {
    const r = t.when;
    if (typeof r == "string") {
      const n = (o, a, l, h) => {
        if (!h || !i(o, a)) return null;
        const u = r.replace("$(basename)", () => l), c = h(u);
        return j1(c) ? c.then((f) => f ? e : null) : c ? e : null;
      };
      return n.requiresSiblings = true, n;
    }
  }
  return i;
}
function wi(e, t) {
  const s = e.filter((a) => !!a.basenames);
  if (s.length < 2) return e;
  const i = s.reduce((a, l) => {
    const h = l.basenames;
    return h ? a.concat(h) : a;
  }, []);
  let r;
  if (t) {
    r = [];
    for (let a = 0, l = i.length; a < l; a++) r.push(t);
  } else r = s.reduce((a, l) => {
    const h = l.patterns;
    return h ? a.concat(h) : a;
  }, []);
  const n = function(a, l) {
    if (typeof a != "string") return null;
    if (!l) {
      let u;
      for (u = a.length; u > 0; u--) {
        const c = a.charCodeAt(u - 1);
        if (c === 47 || c === 92) break;
      }
      l = a.substr(u);
    }
    const h = i.indexOf(l);
    return h !== -1 ? r[h] : null;
  };
  n.basenames = i, n.patterns = r, n.allBasenames = i;
  const o = e.filter((a) => !a.basenames);
  return o.push(n), o;
}
function Mt(e, t) {
  return gr(e, t, (s, i) => typeof s == "string" && typeof i == "string" ? s === i : typeof s != "string" && typeof i != "string" ? s.base === i.base && s.pattern === i.pattern : false);
}
var Ea = class {
  constructor() {
    this._value = "", this._pos = 0;
  }
  reset(e) {
    return this._value = e, this._pos = 0, this;
  }
  next() {
    return this._pos += 1, this;
  }
  hasNext() {
    return this._pos < this._value.length - 1;
  }
  cmp(e) {
    const t = e.charCodeAt(0), s = this._value.charCodeAt(this._pos);
    return t - s;
  }
  value() {
    return this._value[this._pos];
  }
}, Aa = class {
  constructor(e = true) {
    this._caseSensitive = e;
  }
  reset(e) {
    return this._value = e, this._from = 0, this._to = 0, this.next();
  }
  hasNext() {
    return this._to < this._value.length;
  }
  next() {
    this._from = this._to;
    let e = true;
    for (; this._to < this._value.length; this._to++) if (this._value.charCodeAt(this._to) === 46) if (e) this._from++;
    else break;
    else e = false;
    return this;
  }
  cmp(e) {
    return this._caseSensitive ? cs(e, this._value, 0, e.length, this._from, this._to) : Pe(e, this._value, 0, e.length, this._from, this._to);
  }
  value() {
    return this._value.substring(this._from, this._to);
  }
}, yi = class {
  constructor(e = true, t = true) {
    this._splitOnBackslash = e, this._caseSensitive = t;
  }
  reset(e) {
    this._from = 0, this._to = 0, this._value = e, this._valueLen = e.length;
    for (let t = e.length - 1; t >= 0; t--, this._valueLen--) {
      const s = this._value.charCodeAt(t);
      if (!(s === 47 || this._splitOnBackslash && s === 92)) break;
    }
    return this.next();
  }
  hasNext() {
    return this._to < this._valueLen;
  }
  next() {
    this._from = this._to;
    let e = true;
    for (; this._to < this._valueLen; this._to++) {
      const t = this._value.charCodeAt(this._to);
      if (t === 47 || this._splitOnBackslash && t === 92) if (e) this._from++;
      else break;
      else e = false;
    }
    return this;
  }
  cmp(e) {
    return this._caseSensitive ? cs(e, this._value, 0, e.length, this._from, this._to) : Pe(e, this._value, 0, e.length, this._from, this._to);
  }
  value() {
    return this._value.substring(this._from, this._to);
  }
}, La = class {
  constructor(e, t) {
    this._ignorePathCasing = e, this._ignoreQueryAndFragment = t, this._states = [], this._stateIdx = 0;
  }
  reset(e) {
    return this._value = e, this._states = [], this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && (this._pathIterator = new yi(false, !this._ignorePathCasing(e)), this._pathIterator.reset(e.path), this._pathIterator.value() && this._states.push(3)), this._ignoreQueryAndFragment(e) || (this._value.query && this._states.push(4), this._value.fragment && this._states.push(5)), this._stateIdx = 0, this;
  }
  next() {
    return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() ? this._pathIterator.next() : this._stateIdx += 1, this;
  }
  hasNext() {
    return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
  }
  cmp(e) {
    if (this._states[this._stateIdx] === 1) return b1(e, this._value.scheme);
    if (this._states[this._stateIdx] === 2) return b1(e, this._value.authority);
    if (this._states[this._stateIdx] === 3) return this._pathIterator.cmp(e);
    if (this._states[this._stateIdx] === 4) return hs(e, this._value.query);
    if (this._states[this._stateIdx] === 5) return hs(e, this._value.fragment);
    throw new Error();
  }
  value() {
    if (this._states[this._stateIdx] === 1) return this._value.scheme;
    if (this._states[this._stateIdx] === 2) return this._value.authority;
    if (this._states[this._stateIdx] === 3) return this._pathIterator.value();
    if (this._states[this._stateIdx] === 4) return this._value.query;
    if (this._states[this._stateIdx] === 5) return this._value.fragment;
    throw new Error();
  }
}, Ci = class Bs {
  static wrap(t) {
    return t === void 0 ? Bs.Val : t;
  }
  static unwrap(t) {
    return t === Bs.Val ? void 0 : t;
  }
};
Ci.Val = /* @__PURE__ */ Symbol("undefined_placeholder");
var xe = Ci, Ft = class {
  constructor() {
    this.height = 1;
  }
  isEmpty() {
    return !this.left && !this.mid && !this.right && this.value === void 0;
  }
  rotateLeft() {
    const e = this.right;
    return this.right = e.left, e.left = this, this.updateHeight(), e.updateHeight(), e;
  }
  rotateRight() {
    const e = this.left;
    return this.left = e.right, e.right = this, this.updateHeight(), e.updateHeight(), e;
  }
  updateHeight() {
    this.height = 1 + Math.max(this.heightLeft, this.heightRight);
  }
  balanceFactor() {
    return this.heightRight - this.heightLeft;
  }
  get heightLeft() {
    return this.left?.height ?? 0;
  }
  get heightRight() {
    return this.right?.height ?? 0;
  }
}, Nt = class gt {
  static forUris(t = () => false, s = () => false) {
    return new gt(new La(t, s));
  }
  static forPaths(t = false) {
    return new gt(new yi(void 0, !t));
  }
  static forStrings() {
    return new gt(new Ea());
  }
  static forConfigKeys() {
    return new gt(new Aa());
  }
  constructor(t) {
    this._iter = t;
  }
  clear() {
    this._root = void 0;
  }
  fill(t, s) {
    if (s) {
      const i = s.slice(0);
      js(i);
      for (const r of i) this.set(r, t);
    } else {
      const i = t.slice(0);
      js(i);
      for (const r of i) this.set(r[0], r[1]);
    }
  }
  set(t, s) {
    const i = this._iter.reset(t);
    let r;
    this._root || (this._root = new Ft(), this._root.segment = i.value());
    const n = [];
    for (r = this._root; ; ) {
      const a = i.cmp(r.segment);
      if (a > 0) r.left || (r.left = new Ft(), r.left.segment = i.value()), n.push([-1, r]), r = r.left;
      else if (a < 0) r.right || (r.right = new Ft(), r.right.segment = i.value()), n.push([1, r]), r = r.right;
      else if (i.hasNext()) i.next(), r.mid || (r.mid = new Ft(), r.mid.segment = i.value()), n.push([0, r]), r = r.mid;
      else break;
    }
    const o = xe.unwrap(r.value);
    r.value = xe.wrap(s), r.key = t;
    for (let a = n.length - 1; a >= 0; a--) {
      const l = n[a][1];
      l.updateHeight();
      const h = l.balanceFactor();
      if (h < -1 || h > 1) {
        const u = n[a][0], c = n[a + 1][0];
        if (u === 1 && c === 1) n[a][1] = l.rotateLeft();
        else if (u === -1 && c === -1) n[a][1] = l.rotateRight();
        else if (u === 1 && c === -1) l.right = n[a + 1][1] = n[a + 1][1].rotateRight(), n[a][1] = l.rotateLeft();
        else if (u === -1 && c === 1) l.left = n[a + 1][1] = n[a + 1][1].rotateLeft(), n[a][1] = l.rotateRight();
        else throw new Error();
        if (a > 0) switch (n[a - 1][0]) {
          case -1:
            n[a - 1][1].left = n[a][1];
            break;
          case 1:
            n[a - 1][1].right = n[a][1];
            break;
          case 0:
            n[a - 1][1].mid = n[a][1];
            break;
        }
        else this._root = n[0][1];
      }
    }
    return o;
  }
  get(t) {
    return xe.unwrap(this._getNode(t)?.value);
  }
  _getNode(t) {
    const s = this._iter.reset(t);
    let i = this._root;
    for (; i; ) {
      const r = s.cmp(i.segment);
      if (r > 0) i = i.left;
      else if (r < 0) i = i.right;
      else if (s.hasNext()) s.next(), i = i.mid;
      else break;
    }
    return i;
  }
  has(t) {
    const s = this._getNode(t);
    return !(s?.value === void 0 && s?.mid === void 0);
  }
  delete(t) {
    return this._delete(t, false);
  }
  deleteSuperstr(t) {
    return this._delete(t, true);
  }
  _delete(t, s) {
    const i = this._iter.reset(t), r = [];
    let n = this._root;
    for (; n; ) {
      const o = i.cmp(n.segment);
      if (o > 0) r.push([-1, n]), n = n.left;
      else if (o < 0) r.push([1, n]), n = n.right;
      else if (i.hasNext()) i.next(), r.push([0, n]), n = n.mid;
      else break;
    }
    if (n) {
      if (s ? (n.left = void 0, n.mid = void 0, n.right = void 0, n.height = 1) : (n.key = void 0, n.value = void 0), !n.mid && !n.value) if (n.left && n.right) {
        const o = this._min(n.right);
        if (o.key) {
          const { key: a, value: l, segment: h } = o;
          this._delete(o.key, false), n.key = a, n.value = l, n.segment = h;
        }
      } else {
        const o = n.left ?? n.right;
        if (r.length > 0) {
          const [a, l] = r[r.length - 1];
          switch (a) {
            case -1:
              l.left = o;
              break;
            case 0:
              l.mid = o;
              break;
            case 1:
              l.right = o;
              break;
          }
        } else this._root = o;
      }
      for (let o = r.length - 1; o >= 0; o--) {
        const a = r[o][1];
        a.updateHeight();
        const l = a.balanceFactor();
        if (l > 1 ? (a.right.balanceFactor() >= 0 || (a.right = a.right.rotateRight()), r[o][1] = a.rotateLeft()) : l < -1 && (a.left.balanceFactor() <= 0 || (a.left = a.left.rotateLeft()), r[o][1] = a.rotateRight()), o > 0) switch (r[o - 1][0]) {
          case -1:
            r[o - 1][1].left = r[o][1];
            break;
          case 1:
            r[o - 1][1].right = r[o][1];
            break;
          case 0:
            r[o - 1][1].mid = r[o][1];
            break;
        }
        else this._root = r[0][1];
      }
    }
  }
  _min(t) {
    for (; t.left; ) t = t.left;
    return t;
  }
  findSubstr(t) {
    const s = this._iter.reset(t);
    let i = this._root, r;
    for (; i; ) {
      const n = s.cmp(i.segment);
      if (n > 0) i = i.left;
      else if (n < 0) i = i.right;
      else if (s.hasNext()) s.next(), r = xe.unwrap(i.value) || r, i = i.mid;
      else break;
    }
    return i && xe.unwrap(i.value) || r;
  }
  findSuperstr(t) {
    return this._findSuperstrOrElement(t, false);
  }
  _findSuperstrOrElement(t, s) {
    const i = this._iter.reset(t);
    let r = this._root;
    for (; r; ) {
      const n = i.cmp(r.segment);
      if (n > 0) r = r.left;
      else if (n < 0) r = r.right;
      else if (i.hasNext()) i.next(), r = r.mid;
      else return r.mid ? this._entries(r.mid) : s ? xe.unwrap(r.value) : void 0;
    }
  }
  hasElementOrSubtree(t) {
    return this._findSuperstrOrElement(t, true) !== void 0;
  }
  forEach(t) {
    for (const [s, i] of this) t(i, s);
  }
  *[Symbol.iterator]() {
    yield* this._entries(this._root);
  }
  _entries(t) {
    const s = [];
    return this._dfsEntries(t, s), s[Symbol.iterator]();
  }
  _dfsEntries(t, s) {
    t && (t.left && this._dfsEntries(t.left, s), t.value !== void 0 && s.push([t.key, xe.unwrap(t.value)]), t.mid && this._dfsEntries(t.mid, s), t.right && this._dfsEntries(t.right, s));
  }
  _isBalanced() {
    const t = (s) => {
      if (!s) return true;
      const i = s.balanceFactor();
      return i < -1 || i > 1 ? false : t(s.left) && t(s.right);
    };
    return t(this._root);
  }
}, ve;
((e) => {
  e.serviceIds = /* @__PURE__ */ new Map(), e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
  function t(s) {
    return s[e.DI_DEPENDENCIES] || [];
  }
  e.getServiceDependencies = t;
})(ve || (ve = {}));
var B2 = bi("instantiationService");
function Da(e, t, s) {
  t[ve.DI_TARGET] === t ? t[ve.DI_DEPENDENCIES].push({ id: e, index: s }) : (t[ve.DI_DEPENDENCIES] = [{ id: e, index: s }], t[ve.DI_TARGET] = t);
}
function bi(e) {
  if (ve.serviceIds.has(e)) return ve.serviceIds.get(e);
  const t = function(s, i, r) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    Da(t, s, r);
  };
  return t.toString = () => e, ve.serviceIds.set(e, t), t;
}
var z2 = bi("fileService"), Ra = class Kt {
  constructor(t, s) {
    this.ignorePathCasing = s, this.correlationId = void 0, this.added = new Re(() => {
      const i = Nt.forUris(() => this.ignorePathCasing);
      return i.fill(this.rawAdded.map((r) => [r, true])), i;
    }), this.updated = new Re(() => {
      const i = Nt.forUris(() => this.ignorePathCasing);
      return i.fill(this.rawUpdated.map((r) => [r, true])), i;
    }), this.deleted = new Re(() => {
      const i = Nt.forUris(() => this.ignorePathCasing);
      return i.fill(this.rawDeleted.map((r) => [r, true])), i;
    }), this.rawAdded = [], this.rawUpdated = [], this.rawDeleted = [];
    for (const i of t) {
      switch (i.type) {
        case 1:
          this.rawAdded.push(i.resource);
          break;
        case 0:
          this.rawUpdated.push(i.resource);
          break;
        case 2:
          this.rawDeleted.push(i.resource);
          break;
      }
      this.correlationId !== Kt.MIXED_CORRELATION && (typeof i.cId == "number" ? this.correlationId === void 0 ? this.correlationId = i.cId : this.correlationId !== i.cId && (this.correlationId = Kt.MIXED_CORRELATION) : this.correlationId !== void 0 && (this.correlationId = Kt.MIXED_CORRELATION));
    }
  }
  contains(t, ...s) {
    return this.doContains(t, { includeChildren: false }, ...s);
  }
  affects(t, ...s) {
    return this.doContains(t, { includeChildren: true }, ...s);
  }
  doContains(t, s, ...i) {
    if (!t) return false;
    const r = i.length > 0;
    return !!((!r || i.includes(1)) && (this.added.value.get(t) || s.includeChildren && this.added.value.findSuperstr(t)) || (!r || i.includes(0)) && (this.updated.value.get(t) || s.includeChildren && this.updated.value.findSuperstr(t)) || (!r || i.includes(2)) && (this.deleted.value.findSubstr(t) || s.includeChildren && this.deleted.value.findSuperstr(t)));
  }
  gotAdded() {
    return this.rawAdded.length > 0;
  }
  gotDeleted() {
    return this.rawDeleted.length > 0;
  }
  gotUpdated() {
    return this.rawUpdated.length > 0;
  }
  correlates(t) {
    return this.correlationId === t;
  }
  hasCorrelation() {
    return typeof this.correlationId == "number";
  }
};
Ra.MIXED_CORRELATION = null;
function Pa(e, t, s) {
  return !e || !t || e === t || t.length > e.length ? false : (t.charAt(t.length - 1) !== se && (t += se), s ? kn(e, t) : e.indexOf(t) === 0);
}
var ce = class we {
  static formatSize(t) {
    return Dr(t) || (t = 0), t < we.KB ? ne(2024, null, t.toFixed(0)) : t < we.MB ? ne(2025, null, (t / we.KB).toFixed(2)) : t < we.GB ? ne(2026, null, (t / we.MB).toFixed(2)) : t < we.TB ? ne(2027, null, (t / we.GB).toFixed(2)) : ne(2028, null, (t / we.TB).toFixed(2));
  }
};
ce.KB = 1024, ce.MB = ce.KB * ce.KB, ce.GB = ce.MB * ce.KB, ce.TB = ce.GB * ce.KB;
function Ei(e) {
  return typeof e.correlationId == "number";
}
function Ot(e) {
  return e.recursive === true;
}
var Sa = class Ji extends ee {
  constructor(t, s, i, r) {
    super(), this.onFileChanges = t, this.onLogMessage = s, this.verboseLogging = i, this.options = r, this.watcherDisposables = this._register(new Ce()), this.requests = void 0, this.restartCounter = 0;
  }
  init() {
    const t = new V();
    this.watcherDisposables.value = t, this.watcher = this.createWatcher(t), this.watcher.setVerboseLogging(this.verboseLogging), t.add(this.watcher.onDidChangeFile((s) => this.onFileChanges(s))), t.add(this.watcher.onDidLogMessage((s) => this.onLogMessage(s))), t.add(this.watcher.onDidError((s) => this.onError(s.error, s.request)));
  }
  onError(t, s) {
    this._store.isDisposed || (this.canRestart(t, s) ? this.restartCounter < Ji.MAX_RESTARTS && this.requests ? (this.error(`restarting watcher after unexpected error: ${t}`), this.restart(this.requests)) : this.error(`gave up attempting to restart watcher after unexpected error: ${t}`) : this.error(t));
  }
  canRestart(t, s) {
    return !(!this.options.restartOnError || s || t.indexOf("No space left on device") !== -1 || t.indexOf("EMFILE") !== -1);
  }
  restart(t) {
    this.restartCounter++, this.init(), this.watch(t);
  }
  async watch(t) {
    this.requests = t, await this.watcher?.watch(t);
  }
  async setVerboseLogging(t) {
    this.verboseLogging = t, await this.watcher?.setVerboseLogging(t);
  }
  error(t) {
    this.onLogMessage({ type: "error", message: `[File Watcher (${this.options.type})] ${t}` });
  }
  trace(t) {
    this.onLogMessage({ type: "trace", message: `[File Watcher (${this.options.type})] ${t}` });
  }
  dispose() {
    return this.watcher = void 0, super.dispose();
  }
};
Sa.MAX_RESTARTS = 5;
function Ai(e) {
  const t = new Ia();
  for (const s of e) t.processEvent(s);
  return t.coalesce();
}
function ka(e, t) {
  return typeof t == "string" && !t.startsWith(Ke) && !y1(t) ? { base: e, pattern: t } : t;
}
function Ut(e, t) {
  const s = [];
  for (const i of t) s.push(wa(ka(e, i)));
  return s;
}
var Ia = class {
  constructor() {
    this.coalesced = /* @__PURE__ */ new Set(), this.mapPathToChange = /* @__PURE__ */ new Map();
  }
  toKey(e) {
    return N ? e.resource.fsPath : e.resource.fsPath.toLowerCase();
  }
  processEvent(e) {
    const t = this.mapPathToChange.get(this.toKey(e));
    let s = false;
    if (t) {
      const i = t.type, r = e.type;
      t.resource.fsPath !== e.resource.fsPath && (e.type === 2 || e.type === 1) ? s = true : i === 1 && r === 2 ? (this.mapPathToChange.delete(this.toKey(e)), this.coalesced.delete(t)) : i === 2 && r === 1 ? t.type = 0 : i === 1 && r === 0 || (t.type = r);
    } else s = true;
    s && (this.coalesced.add(e), this.mapPathToChange.set(this.toKey(e), e));
  }
  coalesce() {
    const e = [], t = [];
    return Array.from(this.coalesced).filter((s) => s.type !== 2 ? (e.push(s), false) : true).sort((s, i) => s.resource.fsPath.length - i.resource.fsPath.length).filter((s) => t.some((i) => Pa(s.resource.fsPath, i, !N)) ? false : (t.push(s.resource.fsPath), true)).concat(e);
  }
};
function Li(e, t) {
  if (typeof t == "number") switch (e.type) {
    case 1:
      return (t & 4) === 0;
    case 2:
      return (t & 8) === 0;
    case 0:
      return (t & 2) === 0;
  }
  return false;
}
function Di(e) {
  if (typeof e == "number") {
    const t = [];
    return e & 4 && t.push("Added"), e & 8 && t.push("Deleted"), e & 2 && t.push("Updated"), t.length === 0 ? "<all>" : `[${t.join(", ")}]`;
  }
  return "<none>";
}
var Ta = ["Desktop", "Documents", "Downloads", "Music", "Movies", "Pictures", "Library", ".Trash"], Wa = "/Volumes";
function Ri(e) {
  const t = e.replace(/\/{2,}/g, "/");
  return t.length > 1 && t.endsWith("/") ? t.slice(0, -1) : t;
}
function xa(e, t) {
  return e === t ? false : e.startsWith(t.endsWith("/") ? t : `${t}/`);
}
function $a(e, t) {
  if (t.platform !== "darwin") return [];
  const s = Ri(e), i = s.toLowerCase(), r = Ri(t.homeDirectory), n = s === "/" ? 1 : s.split("/").length;
  return [...Ta.map((o) => `${r}/${o}`), Wa].filter((o) => xa(o.toLowerCase(), i)).map((o) => {
    const a = o.split("/").slice(n).join("/");
    return `${s === "/" ? "" : s}/${a}`;
  });
}
import Pi from "@parcel/watcher";
import { promises as Rs } from "fs";
import { tmpdir as qa, homedir as Si } from "os";
function Ps(e, t) {
  return t && (e.stack || e.stacktrace) ? ne(108, null, Ii(e), ki(e.stack) || ki(e.stacktrace)) : Ii(e);
}
function ki(e) {
  return Array.isArray(e) ? e.join(`
`) : e;
}
function Ii(e) {
  return e.code === "ERR_UNC_HOST_NOT_ALLOWED" ? `${e.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.` : typeof e.code == "string" && typeof e.errno == "number" && typeof e.syscall == "string" ? ne(109, null, e.message) : e.message || ne(110, null);
}
function Ss(e = null, t = false) {
  if (!e) return ne(111, null);
  if (Array.isArray(e)) {
    const s = pr(e), i = Ss(s[0], t);
    return s.length > 1 ? ne(112, null, i, s.length) : i;
  }
  if (Lr(e)) return e;
  if (e.detail) {
    const s = e.detail;
    if (s.error) return Ps(s.error, t);
    if (s.exception) return Ps(s.exception, t);
  }
  return e.stack ? Ps(e, t) : e.message ? e.message : ne(113, null);
}
import { watchFile as Ma, unwatchFile as Fa } from "fs";
function Na(e) {
  return ks(e, 0);
}
function ks(e, t) {
  switch (typeof e) {
    case "object":
      return e === null ? _e(349, t) : Array.isArray(e) ? Ua(e, t) : Ba(e, t);
    case "string":
      return Ti(e, t);
    case "boolean":
      return Oa(e, t);
    case "number":
      return _e(e, t);
    case "undefined":
      return _e(937, t);
    default:
      return _e(617, t);
  }
}
function _e(e, t) {
  return (t << 5) - t + e | 0;
}
function Oa(e, t) {
  return _e(e ? 433 : 863, t);
}
function Ti(e, t) {
  t = _e(149417, t);
  for (let s = 0, i = e.length; s < i; s++) t = _e(e.charCodeAt(s), t);
  return t;
}
function Ua(e, t) {
  return t = _e(104579, t), e.reduce((s, i) => ks(i, s), t);
}
function Ba(e, t) {
  return t = _e(181387, t), Object.keys(e).sort().reduce((s, i) => (s = Ti(i, s), ks(e[i], s)), t);
}
function Is(e, t, s = 32) {
  const i = s - t, r = ~((1 << i) - 1);
  return (e << t | (r & e) >>> i) >>> 0;
}
function ct(e, t = 32) {
  return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((s) => s.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
var za = class Yi {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
  }
  update(t) {
    const s = t.length;
    if (s === 0) return;
    const i = this._buff;
    let r = this._buffLen, n = this._leftoverHighSurrogate, o, a;
    for (n !== 0 ? (o = n, a = -1, n = 0) : (o = t.charCodeAt(0), a = 0); ; ) {
      let l = o;
      if (Tn(o)) if (a + 1 < s) {
        const h = t.charCodeAt(a + 1);
        L1(h) ? (a++, l = Wn(o, h)) : l = 65533;
      } else {
        n = o;
        break;
      }
      else L1(o) && (l = 65533);
      if (r = this._push(i, r, l), a++, a < s) o = t.charCodeAt(a);
      else break;
    }
    this._buffLen = r, this._leftoverHighSurrogate = n;
  }
  _push(t, s, i) {
    return i < 128 ? t[s++] = i : i < 2048 ? (t[s++] = 192 | (i & 1984) >>> 6, t[s++] = 128 | (i & 63) >>> 0) : i < 65536 ? (t[s++] = 224 | (i & 61440) >>> 12, t[s++] = 128 | (i & 4032) >>> 6, t[s++] = 128 | (i & 63) >>> 0) : (t[s++] = 240 | (i & 1835008) >>> 18, t[s++] = 128 | (i & 258048) >>> 12, t[s++] = 128 | (i & 4032) >>> 6, t[s++] = 128 | (i & 63) >>> 0), s >= 64 && (this._step(), s -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), s;
  }
  digest() {
    return this._finished || (this._finished = true, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), ct(this._h0) + ct(this._h1) + ct(this._h2) + ct(this._h3) + ct(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
    const t = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(t / 4294967296), false), this._buffDV.setUint32(60, t % 4294967296, false), this._step();
  }
  _step() {
    const t = Yi._bigBlock32, s = this._buffDV;
    for (let c = 0; c < 64; c += 4) t.setUint32(c, s.getUint32(c, false), false);
    for (let c = 64; c < 320; c += 4) t.setUint32(c, Is(t.getUint32(c - 12, false) ^ t.getUint32(c - 32, false) ^ t.getUint32(c - 56, false) ^ t.getUint32(c - 64, false), 1), false);
    let i = this._h0, r = this._h1, n = this._h2, o = this._h3, a = this._h4, l, h, u;
    for (let c = 0; c < 80; c++) c < 20 ? (l = r & n | ~r & o, h = 1518500249) : c < 40 ? (l = r ^ n ^ o, h = 1859775393) : c < 60 ? (l = r & n | r & o | n & o, h = 2400959708) : (l = r ^ n ^ o, h = 3395469782), u = Is(i, 5) + l + a + h + t.getUint32(c * 4, false) & 4294967295, a = o, o = n, n = Is(r, 30), r = i, i = u;
    this._h0 = this._h0 + i & 4294967295, this._h1 = this._h1 + r & 4294967295, this._h2 = this._h2 + n & 4294967295, this._h3 = this._h3 + o & 4294967295, this._h4 = this._h4 + a & 4294967295;
  }
};
za._bigBlock32 = new DataView(new ArrayBuffer(320));
var Wi = class extends ee {
  constructor() {
    super(), this._onDidChangeFile = this._register(new W()), this.onDidChangeFile = this._onDidChangeFile.event, this._onDidLogMessage = this._register(new W()), this.onDidLogMessage = this._onDidLogMessage.event, this._onDidWatchFail = this._register(new W()), this.onDidWatchFail = this._onDidWatchFail.event, this.correlatedWatchRequests = /* @__PURE__ */ new Map(), this.nonCorrelatedWatchRequests = /* @__PURE__ */ new Map(), this.suspendedWatchRequests = this._register(new r1()), this.suspendedWatchRequestsWithPolling = /* @__PURE__ */ new Set(), this.updateWatchersDelayer = this._register(new Do(this.getUpdateWatchersDelay())), this.suspendedWatchRequestPollingInterval = 5007, this.joinWatch = new He(), this.verboseLogging = false, this._register(this.onDidWatchFail((e) => this.suspendWatchRequest({ id: this.computeId(e), correlationId: this.isCorrelated(e) ? e.correlationId : void 0, path: e.path })));
  }
  isCorrelated(e) {
    return Ei(e);
  }
  computeId(e) {
    return this.isCorrelated(e) ? e.correlationId : Na(e);
  }
  async watch(e) {
    this.joinWatch.isSettled || this.joinWatch.complete(), this.joinWatch = new He();
    try {
      this.correlatedWatchRequests.clear(), this.nonCorrelatedWatchRequests.clear();
      for (const t of e) this.isCorrelated(t) ? this.correlatedWatchRequests.set(t.correlationId, t) : this.nonCorrelatedWatchRequests.set(this.computeId(t), t);
      for (const [t] of this.suspendedWatchRequests) !this.nonCorrelatedWatchRequests.has(t) && !this.correlatedWatchRequests.has(t) && (this.suspendedWatchRequests.deleteAndDispose(t), this.suspendedWatchRequestsWithPolling.delete(t));
      return await this.updateWatchers(false);
    } finally {
      this.joinWatch.complete();
    }
  }
  updateWatchers(e) {
    const t = [];
    for (const [s, i] of [...this.nonCorrelatedWatchRequests, ...this.correlatedWatchRequests]) this.suspendedWatchRequests.has(s) || t.push(i);
    return this.updateWatchersDelayer.trigger(() => this.doWatch(t), e ? this.getUpdateWatchersDelay() : 0).catch((s) => Qe(s));
  }
  getUpdateWatchersDelay() {
    return 800;
  }
  isSuspended(e) {
    const t = this.computeId(e);
    return this.suspendedWatchRequestsWithPolling.has(t) ? "polling" : this.suspendedWatchRequests.has(t);
  }
  async suspendWatchRequest(e) {
    if (this.suspendedWatchRequests.has(e.id)) return;
    const t = new V();
    this.suspendedWatchRequests.set(e.id, t), await this.joinWatch.p, !t.isDisposed && (this.monitorSuspendedWatchRequest(e, t), this.updateWatchers(true));
  }
  resumeWatchRequest(e) {
    this.suspendedWatchRequests.deleteAndDispose(e.id), this.suspendedWatchRequestsWithPolling.delete(e.id), this.updateWatchers(false);
  }
  monitorSuspendedWatchRequest(e, t) {
    this.doMonitorWithExistingWatcher(e, t) ? (this.trace(`reusing an existing recursive watcher to monitor ${e.path}`), this.suspendedWatchRequestsWithPolling.delete(e.id)) : (this.doMonitorWithNodeJS(e, t), this.suspendedWatchRequestsWithPolling.add(e.id));
  }
  doMonitorWithExistingWatcher(e, t) {
    const s = this.recursiveWatcher?.subscribe(e.path, (i, r) => {
      t.isDisposed || (i ? this.monitorSuspendedWatchRequest(e, t) : r?.type === 1 && this.onMonitoredPathAdded(e));
    });
    return s ? (t.add(s), true) : false;
  }
  doMonitorWithNodeJS(e, t) {
    let s = false;
    const i = (r, n) => {
      if (t.isDisposed) return;
      const o = this.isPathNotFound(r), a = this.isPathNotFound(n), l = s;
      s = o, !o && (a || l) && this.onMonitoredPathAdded(e);
    };
    this.trace(`starting fs.watchFile() on ${e.path} (correlationId: ${e.correlationId})`);
    try {
      Ma(e.path, { persistent: false, interval: this.suspendedWatchRequestPollingInterval }, i);
    } catch (r) {
      this.warn(`fs.watchFile() failed with error ${r} on path ${e.path} (correlationId: ${e.correlationId})`);
    }
    t.add(G(() => {
      this.trace(`stopping fs.watchFile() on ${e.path} (correlationId: ${e.correlationId})`);
      try {
        Fa(e.path, i);
      } catch (r) {
        this.warn(`fs.unwatchFile() failed with error ${r} on path ${e.path} (correlationId: ${e.correlationId})`);
      }
    }));
  }
  onMonitoredPathAdded(e) {
    this.trace(`detected ${e.path} exists again, resuming watcher (correlationId: ${e.correlationId})`);
    const t = { resource: U.file(e.path), type: 1, cId: e.correlationId };
    this._onDidChangeFile.fire([t]), this.traceEvent(t, e), this.resumeWatchRequest(e);
  }
  isPathNotFound(e) {
    return e.ctimeMs === 0 && e.ino === 0;
  }
  async stop() {
    this.suspendedWatchRequests.clearAndDisposeAll(), this.suspendedWatchRequestsWithPolling.clear();
  }
  traceEvent(e, t) {
    if (this.verboseLogging) {
      const s = ` >> normalized ${e.type === 1 ? "[ADDED]" : e.type === 2 ? "[DELETED]" : "[CHANGED]"} ${e.resource.fsPath}`;
      this.traceWithCorrelation(s, t);
    }
  }
  traceWithCorrelation(e, t) {
    this.verboseLogging && this.trace(`${e}${typeof t.correlationId == "number" ? ` <${t.correlationId}> ` : ""}`);
  }
  requestToString(e) {
    return `${e.path} (excludes: ${e.excludes.length > 0 ? e.excludes : "<none>"}, includes: ${e.includes && e.includes.length > 0 ? JSON.stringify(e.includes) : "<all>"}, filter: ${Di(e.filter)}, correlationId: ${typeof e.correlationId == "number" ? e.correlationId : "<none>"})`;
  }
  async setVerboseLogging(e) {
    this.verboseLogging = e;
  }
};
import * as xi from "fs";
async function Ts(e, t) {
  if (N) return e;
  const s = ls(e);
  if (e === s) return e;
  const i = (Rt(e) || e).toLowerCase();
  try {
    if (t?.isCancellationRequested) return null;
    const n = (await We.readdir(s)).filter((o) => o.toLowerCase() === i);
    if (n.length === 1) {
      const o = await Ts(s, t);
      if (o) return te(o, n[0]);
    } else if (n.length > 1) {
      const o = n.indexOf(i);
      if (o >= 0) {
        const a = await Ts(s, t);
        if (a) return te(a, n[o]);
      }
    }
  } catch {
  }
  return null;
}
async function $i(e) {
  try {
    return await We.realpath(e);
  } catch {
    const s = Ha(e);
    return await xi.promises.access(s, xi.constants.R_OK), s;
  }
}
function Ha(e) {
  return Sn(Dt(e), se);
}
function ja({ excludes: e, roots: t, windowsPaths: s = Y }) {
  const i = s ? q : D, r = s || !N, n = (a) => s ? a.replace(/\//g, "\\") : a, o = t.map(n);
  return e.map((a) => {
    if (!i.isAbsolute(a)) return a;
    const l = n(a);
    for (const h of o) if (l.length > h.length && ie(l, h, r, i.sep)) {
      const u = a.substring(h.length).replace(/^[\\/]+/, "");
      if (u) return s ? u.replace(/\\/g, "/") : u;
    }
    return a;
  });
}
function qi({ path: e, root: t, parcelIgnore: s }) {
  for (const i of s) {
    const r = i.endsWith("/**") ? i.slice(0, -3) : i;
    if (r.includes("*") || r.includes("?") || r.includes("{")) continue;
    const n = y1(r) ? r : te(t, r);
    if (ie(e, n, !N)) return true;
  }
  return false;
}
var Mi = class extends ee {
  constructor(e, t, s, i, r, n, o) {
    super(), this.ready = e, this.request = t, this.restarts = s, this.token = i, this.worker = r, this.stopFn = n, this.parcelIgnore = o, this._onDidStop = this._register(new W()), this.onDidStop = this._onDidStop.event, this._onDidFail = this._register(new W()), this.onDidFail = this._onDidFail.event, this.didFail = false, this.didStop = false, this.subscriptions = /* @__PURE__ */ new Map(), this.includes = this.request.includes ? Ut(this.request.path, this.request.includes) : void 0, this.excludes = this.request.excludes ? Ut(this.request.path, this.request.excludes) : void 0, this._register(G(() => this.subscriptions.clear()));
  }
  get failed() {
    return this.didFail;
  }
  get stopped() {
    return this.didStop;
  }
  subscribe(e, t) {
    e = U.file(e).fsPath;
    let s = this.subscriptions.get(e);
    return s || (s = /* @__PURE__ */ new Set(), this.subscriptions.set(e, s)), s.add(t), G(() => {
      const i = this.subscriptions.get(e);
      i && (i.delete(t), i.size === 0 && this.subscriptions.delete(e));
    });
  }
  get subscriptionsCount() {
    return this.subscriptions.size;
  }
  notifyFileChange(e, t) {
    const s = this.subscriptions.get(e);
    if (s) for (const i of s) i(t);
  }
  notifyWatchFailed() {
    this.didFail = true, this._onDidFail.fire();
  }
  include(e) {
    return !this.includes || this.includes.length === 0 ? true : this.includes.some((t) => t(e));
  }
  setParcelIgnore(e) {
    this.parcelIgnore = e;
  }
  exclude(e) {
    return !!this.excludes?.some((t) => t(e)) || qi({ path: e, root: this.request.path, parcelIgnore: this.parcelIgnore });
  }
  async stop(e) {
    this.didStop = true;
    try {
      await this.stopFn();
    } finally {
      this._onDidStop.fire({ joinRestart: e }), this.dispose();
    }
  }
}, Ge = class ue extends Wi {
  constructor() {
    super(), this._onDidError = this._register(new W()), this.onDidError = this._onDidError.event, this._watchers = /* @__PURE__ */ new Map(), this.throttledFileChangesEmitter = this._register(new ws({ maxWorkChunkSize: 500, throttleDelay: 200, maxBufferedWork: 3e4 }, (t) => this._onDidChangeFile.fire(t))), this.enospcErrorLogged = false, this.registerListeners();
  }
  get watchers() {
    return this._watchers.values();
  }
  registerListeners() {
    const t = (i) => this.onUnexpectedError(i), s = (i) => this.onUnexpectedError(i);
    process.on("uncaughtException", t), process.on("unhandledRejection", s), this._register(G(() => {
      process.off("uncaughtException", t), process.off("unhandledRejection", s);
    }));
  }
  async doWatch(t) {
    t = await this.removeDuplicateRequests(t);
    const s = [], i = new Set(Array.from(this.watchers));
    for (const r of t) {
      const n = this._watchers.get(this.requestToWatcherKey(r));
      n && Mt(n.request.excludes, r.excludes) && Mt(n.request.includes, r.includes) && n.request.pollingInterval === r.pollingInterval ? i.delete(n) : s.push(r);
    }
    s.length && this.trace(`Request to start watching: ${s.map((r) => this.requestToString(r)).join(",")}`), i.size && this.trace(`Request to stop watching: ${Array.from(i).map((r) => this.requestToString(r.request)).join(",")}`);
    for (const r of i) await this.stopWatching(r);
    for (const r of s) r.pollingInterval ? await this.startPolling(r, r.pollingInterval) : await this.startWatching(r);
  }
  requestToWatcherKey(t) {
    return typeof t.correlationId == "number" ? t.correlationId : this.pathToWatcherKey(t.path);
  }
  pathToWatcherKey(t) {
    return N ? t : t.toLowerCase();
  }
  async startPolling(t, s, i = 0) {
    const r = new Fe(), n = new He(), o = S1(qa(), "vscode-watcher-snapshot"), a = new Mi(n.p, t, i, r.token, new _s((_) => this.handleParcelEvents(_, a), ue.FILE_CHANGES_HANDLER_DELAY), async () => {
      r.dispose(true), a.worker.flush(), a.worker.dispose(), d.dispose(), await Rs.unlink(o);
    }, this.toParcelIgnore(t, t.path));
    this._watchers.set(this.requestToWatcherKey(t), a);
    const { realPath: l, realPathDiffers: h, realPathLength: u, ignore: c } = await this.resolveWatchRoot(a);
    this.trace(`Started watching: '${l}' with polling interval '${s}'`);
    let f = 0;
    const d = new kt(async () => {
      if (f++, r.token.isCancellationRequested) return;
      const _ = Pi;
      try {
        if (f > 1) {
          const C = await _.getEventsSince(l, o, { ignore: c, backend: ue.PARCEL_WATCHER_BACKEND });
          if (r.token.isCancellationRequested) return;
          this.onParcelEvents(C, a, h, u);
        }
        await _.writeSnapshot(l, o, { ignore: c, backend: ue.PARCEL_WATCHER_BACKEND });
      } catch (C) {
        this.onUnexpectedError(C, t);
      }
      f === 1 && n.complete(), !r.token.isCancellationRequested && d.schedule();
    }, s);
    d.schedule(0);
  }
  async startWatching(t, s = 0) {
    const i = new Fe(), r = new He(), n = new Mi(r.p, t, s, i.token, new _s((u) => this.handleParcelEvents(u, n), ue.FILE_CHANGES_HANDLER_DELAY), async () => {
      i.dispose(true), n.worker.flush(), n.worker.dispose(), await (await r.p)?.unsubscribe();
    }, this.toParcelIgnore(t, t.path));
    this._watchers.set(this.requestToWatcherKey(t), n);
    const { realPath: o, realPathDiffers: a, realPathLength: l, ignore: h } = await this.resolveWatchRoot(n);
    try {
      const c = await Pi.subscribe(o, (f, d) => {
        n.token.isCancellationRequested || (f && this.onUnexpectedError(f, t), this.onParcelEvents(d, n, a, l));
      }, { backend: ue.PARCEL_WATCHER_BACKEND, ignore: h });
      this.trace(`Started watching: '${o}' with backend '${ue.PARCEL_WATCHER_BACKEND}'`), r.complete(c);
    } catch (u) {
      this.onUnexpectedError(u, t), r.complete(void 0), n.notifyWatchFailed(), this._onDidWatchFail.fire(t);
    }
  }
  async resolveWatchRoot(t) {
    const s = await this.normalizePath(t.request), i = this.toParcelIgnore(t.request, s.realPath);
    return t.setParcelIgnore(i), { ...s, ignore: i };
  }
  toParcelIgnore(t, s) {
    return ja({ excludes: this.addPredefinedExcludes({ excludes: t.excludes, roots: [t.path, s] }), roots: [t.path, s] });
  }
  addPredefinedExcludes({ excludes: t, roots: s }) {
    const i = [...t], r = [...ue.PREDEFINED_EXCLUDES[process.platform] ?? [], ...s.flatMap((n) => $a(n, { platform: process.platform, homeDirectory: Si() })), ...ue.CURSOR_VOLATILE_EXCLUDES];
    for (const n of r) i.includes(n) || i.push(n);
    return i;
  }
  onParcelEvents(t, s, i, r) {
    if (t.length === 0) return;
    this.normalizeEvents(t, s.request, i, r);
    const n = this.handleIncludes(s, t);
    for (const o of n) s.worker.work(o);
  }
  handleIncludes(t, s) {
    const i = [];
    for (const { path: r, type: n } of s) {
      const o = ue.MAP_PARCEL_WATCHER_ACTION_TO_FILE_CHANGE.get(n);
      this.verboseLogging && this.traceWithCorrelation(`${o === 1 ? "[ADDED]" : o === 2 ? "[DELETED]" : "[CHANGED]"} ${r}`, t.request), t.include(r) ? i.push({ type: o, resource: U.file(r), cId: t.request.correlationId }) : this.verboseLogging && this.traceWithCorrelation(` >> ignored (not included) ${r}`, t.request);
    }
    return i;
  }
  handleParcelEvents(t, s) {
    const i = Ai(t), { events: r, rootDeleted: n } = this.filterEvents(i, s);
    this.emitEvents(r, s), n && this.onWatchedPathDeleted(s);
  }
  emitEvents(t, s) {
    if (t.length === 0) return;
    this.throttledFileChangesEmitter.work(t) ? this.throttledFileChangesEmitter.pending > 0 && this.trace(`started throttling events due to large amount of file change events at once (pending: ${this.throttledFileChangesEmitter.pending}, most recent change: ${t[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`, s) : this.warn(`started ignoring events due to too many file change events at once (incoming: ${t.length}, most recent change: ${t[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`);
  }
  async normalizePath(t) {
    let s = t.path, i = false, r = t.path.length;
    try {
      s = await $i(t.path), t.path === s && (s = await Ts(t.path) ?? t.path), t.path !== s && (r = s.length, i = true, this.trace(`correcting a path to watch that seems to be a symbolic link or wrong casing (original: ${t.path}, real: ${s})`));
    } catch {
    }
    return { realPath: s, realPathDiffers: i, realPathLength: r };
  }
  normalizeEvents(t, s, i, r) {
    for (const n of t) Oe && (n.path = Wt(n.path)), Y && s.path.length <= 3 && (n.path = Dt(n.path)), i && (n.path = s.path + n.path.substr(r));
  }
  filterEvents(t, s) {
    const i = [];
    let r = false;
    const n = this.isCorrelated(s.request) ? s.request.filter : void 0;
    for (const o of t) {
      if (s.subscriptionsCount > 0 && s.notifyFileChange(o.resource.fsPath, o), r = o.type === 2 && fs(o.resource.fsPath, s.request.path, !N), Li(o, n)) {
        this.verboseLogging && this.traceWithCorrelation(` >> ignored (filtered) ${o.resource.fsPath}`, s.request);
        continue;
      }
      this.traceEvent(o, s.request), i.push(o);
    }
    return { events: i, rootDeleted: r };
  }
  onWatchedPathDeleted(t) {
    this.warn("Watcher shutdown because watched path got deleted", t), t.notifyWatchFailed(), this._onDidWatchFail.fire(t.request);
  }
  onUnexpectedError(t, s) {
    const i = Ss(t);
    i.indexOf("No space left on device") !== -1 ? this.enospcErrorLogged || (this.error("Inotify limit reached (ENOSPC)", s), this.enospcErrorLogged = true) : i.indexOf("File system must be re-scanned") !== -1 ? this.error(i, s) : (this.error(`Unexpected error: ${i} (EUNKNOWN)`, s), this._onDidError.fire({ request: s, error: i }));
  }
  async stop() {
    await super.stop();
    for (const t of this.watchers) await this.stopWatching(t);
  }
  restartWatching(t, s = 800) {
    const i = new kt(async () => {
      if (t.token.isCancellationRequested) return;
      const r = new He();
      try {
        await this.stopWatching(t, r.p), t.request.pollingInterval ? await this.startPolling(t.request, t.request.pollingInterval, t.restarts + 1) : await this.startWatching(t.request, t.restarts + 1);
      } finally {
        r.complete();
      }
    }, s);
    i.schedule(), t.token.onCancellationRequested(() => i.dispose());
  }
  async stopWatching(t, s) {
    this.trace("stopping file watcher", t), this._watchers.delete(this.requestToWatcherKey(t.request));
    try {
      await t.stop(s);
    } catch (i) {
      this.error(`Unexpected error stopping watcher: ${Ss(i)}`, t.request);
    }
  }
  async removeDuplicateRequests(t, s = true) {
    t.sort((n, o) => n.path.length - o.path.length);
    const i = /* @__PURE__ */ new Map();
    for (const n of t) {
      if (n.excludes.includes(Ke)) continue;
      let o = i.get(n.correlationId);
      o || (o = /* @__PURE__ */ new Map(), i.set(n.correlationId, o));
      const a = this.pathToWatcherKey(n.path);
      o.has(a) && this.trace(`ignoring a request for watching who's path is already watched: ${this.requestToString(n)}`), o.set(a, n);
    }
    const r = [];
    for (const n of i.values()) {
      const o = Nt.forPaths(!N);
      for (const a of n.values()) {
        const l = o.findSubstr(a.path);
        if (l) if (o.has(a.path)) this.trace(`ignoring a request for watching who's path is already watched: ${this.requestToString(a)}`);
        else if (await this.isChildExcludedByParent(a.path, l)) this.trace(`not deduplicating watch request that is excluded by its parent watcher: ${this.requestToString(a)}`);
        else try {
          if (!(await Rs.lstat(a.path)).isSymbolicLink()) {
            this.trace(`ignoring a request for watching who's parent is already watched: ${this.requestToString(a)}`);
            continue;
          }
        } catch (h) {
          this.trace(`ignoring a request for watching who's lstat failed to resolve: ${this.requestToString(a)} (error: ${h})`), this._onDidWatchFail.fire(a);
          continue;
        }
        if (s && !await this.isPathValid(a.path)) {
          this._onDidWatchFail.fire(a);
          continue;
        }
        o.set(a.path, a);
      }
      r.push(...Array.from(o).map(([, a]) => a));
    }
    return r;
  }
  async isChildExcludedByParent(t, s) {
    const { realPath: i } = await this.normalizePath(s);
    return qi({ path: t, root: s.path, parcelIgnore: this.toParcelIgnore(s, i) });
  }
  async isPathValid(t) {
    try {
      if (!(await Rs.stat(t)).isDirectory()) return this.trace(`ignoring a path for watching that is a file and not a folder: ${t}`), false;
    } catch (s) {
      return this.trace(`ignoring a path for watching who's stat info failed to resolve: ${t} (error: ${s})`), false;
    }
    return true;
  }
  subscribe(t, s) {
    for (const i of this.watchers) {
      if (i.failed || !ie(t, i.request.path, !N) || i.exclude(t) || !i.include(t)) continue;
      const r = new V();
      return r.add(x.once(i.onDidStop)(async (n) => {
        await n.joinRestart, !r.isDisposed && s(true);
      })), r.add(x.once(i.onDidFail)(() => s(true))), r.add(i.subscribe(t, (n) => s(null, n))), r;
    }
  }
  trace(t, s) {
    this.verboseLogging && this._onDidLogMessage.fire({ type: "trace", message: this.toMessage(t, s?.request) });
  }
  warn(t, s) {
    this._onDidLogMessage.fire({ type: "warn", message: this.toMessage(t, s?.request) });
  }
  error(t, s) {
    this._onDidLogMessage.fire({ type: "error", message: this.toMessage(t, s) });
  }
  toMessage(t, s) {
    return s ? `[File Watcher] ${t} (path: ${s.path})` : `[File Watcher ('parcel')] ${t}`;
  }
  get recursiveWatcher() {
    return this;
  }
};
Ge.MAP_PARCEL_WATCHER_ACTION_TO_FILE_CHANGE = /* @__PURE__ */ new Map([["create", 1], ["update", 0], ["delete", 2]]), Ge.PREDEFINED_EXCLUDES = { win32: [], darwin: [te(Si(), "Library", "Containers")], linux: [] }, Ge.CURSOR_VOLATILE_EXCLUDES = [".cursor/debug-*.log", ".cursor/hooks/state/**", ".cursor/screenshots/**", ".cursor/mcps/**", ".git/cursor/crepe"], Ge.PARCEL_WATCHER_BACKEND = Y ? "windows" : N ? "inotify" : "fs-events", Ge.FILE_CHANGES_HANDLER_DELAY = 75;
var Ka = Ge;
import { watch as Ga, promises as Va } from "fs";
var Ae, Fi = /* @__PURE__ */ new Set();
function Qa(e) {
  return Fi.add(e), G(() => Fi.delete(e));
}
var Ws = class Gt extends ee {
  constructor(t, s, i, r, n, o) {
    super(), this.request = t, this.recursiveWatcher = s, this.onDidFilesChange = i, this.onDidWatchFail = r, this.onLogMessage = n, this.verboseLogging = o, this.throttledFileChangesEmitter = this._register(new ws({ maxWorkChunkSize: 100, throttleDelay: 200, maxBufferedWork: 1e4 }, (a) => this.onDidFilesChange(a))), this.fileChangesAggregator = this._register(new _s((a) => this.handleFileChanges(a), Gt.FILE_CHANGES_HANDLER_DELAY)), this.watchedKind = "file", this.inDeletedPathFlush = false, this.cts = new Fe(), this.realPath = new Re(async () => {
      let a = this.request.path;
      try {
        a = await $i(this.request.path), this.request.path !== a && this.trace(`correcting a path to watch that seems to be a symbolic link (original: ${this.request.path}, real: ${a})`);
      } catch {
      }
      return a;
    }), this._isReusingRecursiveWatcher = false, this.didFail = false, this.excludes = Ut(this.request.path, this.request.excludes), this.includes = this.request.includes ? Ut(this.request.path, this.request.includes) : void 0, this.filter = Ei(this.request) ? this.request.filter : void 0, this.ready = this.watch();
  }
  get isReusingRecursiveWatcher() {
    return this._isReusingRecursiveWatcher;
  }
  get failed() {
    return this.didFail;
  }
  async watch() {
    try {
      const t = await Va.stat(this.request.path);
      if (this.cts.token.isCancellationRequested) return;
      await ts(this.doWatch(t.isDirectory()), this._store);
    } catch (t) {
      t.code !== "ENOENT" ? this.error(t) : this.trace(`ignoring a path for watching who's stat info failed to resolve: ${this.request.path} (error: ${t})`), this.notifyWatchFailed();
    }
  }
  notifyWatchFailed() {
    this.didFail = true, this.onDidWatchFail?.();
  }
  async doWatch(t) {
    const s = new V();
    return this.doWatchWithExistingWatcher(t, s) ? (this.trace(`reusing an existing recursive watcher for ${this.request.path}`), this._isReusingRecursiveWatcher = true) : (this._isReusingRecursiveWatcher = false, await this.doWatchWithNodeJS(t, s)), s;
  }
  doWatchWithExistingWatcher(t, s) {
    if (t) return false;
    const i = U.file(this.request.path), r = this.recursiveWatcher?.subscribe(this.request.path, async (n, o) => {
      s.isDisposed || (n ? await ts(this.doWatch(t), s) : o && (typeof o.cId == "number" || typeof this.request.correlationId == "number") && this.onFileChange({ resource: i, type: o.type, cId: this.request.correlationId }, true));
    });
    return r ? (s.add(r), true) : false;
  }
  async doWatchWithNodeJS(t, s) {
    const i = await this.realPath.value;
    if (this.cts.token.isCancellationRequested) return;
    if (Oe && ie(i, "/Volumes/", true)) {
      this.error(`Refusing to watch ${i} for changes using fs.watch() for possibly being a network share where watching is unreliable and unstable.`);
      return;
    }
    const r = new Fe(this.cts.token);
    s.add(G(() => r.dispose(true)));
    const n = new V();
    s.add(n);
    try {
      const o = U.file(this.request.path), a = Rt(i), l = Ga(i);
      n.add(G(() => {
        l.removeAllListeners(), l.close();
      })), this.trace(`Started watching: '${i}'`);
      const h = /* @__PURE__ */ new Set();
      if (this.watchedKind = t ? "folder" : "file", t) try {
        for (const c of await We.readdir(i)) h.add(c);
      } catch (c) {
        this.error(c);
      }
      if (this.folderChildren = h, r.token.isCancellationRequested) return;
      const u = /* @__PURE__ */ new Map();
      n.add(G(() => {
        for (const [, c] of u) c.dispose();
        u.clear();
      })), l.on("error", (c, f) => {
        r.token.isCancellationRequested || (this.error(`Failed to watch ${i} for changes using fs.watch() (${c}, ${f})`), this.notifyWatchFailed());
      }), l.on("change", (c, f) => {
        if (r.token.isCancellationRequested) return;
        Ae?.onRawEvent(), this.verboseLogging && this.traceWithCorrelation(`[raw] ["${c}"] ${f}`);
        let d = "";
        if (f && (d = f.toString(), Oe && (d = Wt(d))), !(!d || c !== "change" && c !== "rename")) if (t) if (c === "rename") {
          u.get(d)?.dispose(), Ae?.onProbeScheduled();
          const _ = setTimeout(async () => {
            if (u.delete(d), fs(d, a, !N) && !await We.exists(i)) {
              this.onWatchedPathDeleted(o);
              return;
            }
            if (r.token.isCancellationRequested) return;
            const C = Ae?.active ? performance.now() : void 0, b = await this.existsChildStrictCase(te(i, d));
            if (C !== void 0 && Ae?.onProbeCompleted(performance.now() - C), r.token.isCancellationRequested) return;
            let k;
            b ? h.has(d) ? k = 0 : (k = 1, h.add(d)) : (h.delete(d), k = 2), this.onFileChange({ resource: U1(o, d), type: k, cId: this.request.correlationId });
          }, Gt.FILE_DELETE_HANDLER_DELAY);
          u.set(d, G(() => clearTimeout(_)));
        } else {
          let _;
          h.has(d) ? _ = 0 : (_ = 1, h.add(d)), this.onFileChange({ resource: U1(o, d), type: _, cId: this.request.correlationId });
        }
        else if (c === "rename" || !fs(d, a, !N)) {
          const _ = setTimeout(async () => {
            const C = await We.exists(i);
            r.token.isCancellationRequested || (C ? (this.onFileChange({ resource: o, type: 0, cId: this.request.correlationId }, true), await ts(this.doWatch(false), n)) : this.onWatchedPathDeleted(o));
          }, Gt.FILE_DELETE_HANDLER_DELAY);
          n.clear(), n.add(G(() => clearTimeout(_)));
        } else this.onFileChange({ resource: o, type: 0, cId: this.request.correlationId }, true);
      });
    } catch (o) {
      if (r.token.isCancellationRequested) return;
      this.error(`Failed to watch ${i} for changes using fs.watch() (${o.toString()})`), this.notifyWatchFailed();
    }
  }
  onWatchedPathDeleted(t) {
    this.warn("Watcher shutdown because watched path got deleted"), this.onFileChange({ resource: t, type: 2, cId: this.request.correlationId }, true), this.inDeletedPathFlush = true;
    try {
      this.fileChangesAggregator.flush();
    } finally {
      this.inDeletedPathFlush = false;
    }
    this.notifyWatchFailed();
  }
  onFileChange(t, s = false) {
    this.cts.token.isCancellationRequested || (this.verboseLogging && this.traceWithCorrelation(`${t.type === 1 ? "[ADDED]" : t.type === 2 ? "[DELETED]" : "[CHANGED]"} ${t.resource.fsPath}`), !s && this.excludes.some((i) => i(t.resource.fsPath)) ? this.verboseLogging && this.traceWithCorrelation(` >> ignored (excluded) ${t.resource.fsPath}`) : !s && this.includes && this.includes.length > 0 && !this.includes.some((i) => i(t.resource.fsPath)) ? this.verboseLogging && this.traceWithCorrelation(` >> ignored (not included) ${t.resource.fsPath}`) : this.fileChangesAggregator.work(t));
  }
  handleFileChanges(t) {
    const s = Ae?.active ? performance.now() : void 0, i = Ai(t), r = s !== void 0 ? performance.now() : 0, n = [];
    for (const l of i) {
      if (Li(l, this.filter)) {
        this.verboseLogging && this.traceWithCorrelation(` >> ignored (filtered) ${l.resource.fsPath}`);
        continue;
      }
      n.push(l);
    }
    if (n.length === 0) {
      s !== void 0 && this.reportFlush({ flushStart: s, coalesceDone: r, emitStart: 0, fileChanges: t, filteredEvents: n, emitted: false });
      return;
    }
    if (this.verboseLogging) for (const l of n) this.traceWithCorrelation(` >> normalized ${l.type === 1 ? "[ADDED]" : l.type === 2 ? "[DELETED]" : "[CHANGED]"} ${l.resource.fsPath}`);
    const o = s !== void 0 ? performance.now() : 0, a = this.throttledFileChangesEmitter.work(n);
    s !== void 0 && this.reportFlush({ flushStart: s, coalesceDone: r, emitStart: o, fileChanges: t, filteredEvents: n, emitted: a }), a ? this.throttledFileChangesEmitter.pending > 0 && this.trace(`started throttling events due to large amount of file change events at once (pending: ${this.throttledFileChangesEmitter.pending}, most recent change: ${n[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`) : this.warn(`started ignoring events due to too many file change events at once (incoming: ${n.length}, most recent change: ${n[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`);
  }
  reportFlush(t) {
    const s = performance.now();
    Ae?.onFlush({ flushMs: s - t.flushStart, coalesceMs: t.coalesceDone - t.flushStart, emitMs: t.emitStart ? s - t.emitStart : 0, inEvents: t.fileChanges.length, outEvents: t.filteredEvents.length, emitted: t.emitted, pending: this.throttledFileChangesEmitter.pending, entry: this.inDeletedPathFlush ? "deleted_path_flush" : "timer", request: this.request, targetKind: this.watchedKind, folderChildren: this.folderChildren?.size ?? 0, fileChanges: t.fileChanges });
  }
  async existsChildStrictCase(t) {
    if (N) return We.exists(t);
    try {
      const s = Rt(t);
      return (await We.readdir(ls(t))).some((r) => r === s);
    } catch (s) {
      return this.trace(s), false;
    }
  }
  setVerboseLogging(t) {
    this.verboseLogging = t;
  }
  error(t) {
    this.cts.token.isCancellationRequested || this.onLogMessage?.({ type: "error", message: `[File Watcher (node.js)] ${t}` });
  }
  warn(t) {
    this.cts.token.isCancellationRequested || this.onLogMessage?.({ type: "warn", message: `[File Watcher (node.js)] ${t}` });
  }
  trace(t) {
    !this.cts.token.isCancellationRequested && this.verboseLogging && this.onLogMessage?.({ type: "trace", message: `[File Watcher (node.js)] ${t}` });
  }
  traceWithCorrelation(t) {
    !this.cts.token.isCancellationRequested && this.verboseLogging && this.trace(`${t}${typeof this.request.correlationId == "number" ? ` <${this.request.correlationId}> ` : ""}`);
  }
  dispose() {
    this.cts.dispose(true), super.dispose();
  }
};
Ws.FILE_DELETE_HANDLER_DELAY = 100, Ws.FILE_CHANGES_HANDLER_DELAY = 75;
var Ja = Ws, Ya = class extends Wi {
  constructor(e) {
    super(), this.recursiveWatcher = e, this.onDidError = x.None, this._watchers = /* @__PURE__ */ new Map(), this.worker = this._register(new Ce()), this._register(Qa(() => this._watchers.size));
  }
  get watchers() {
    return this._watchers.values();
  }
  async doWatch(e) {
    e = this.removeDuplicateRequests(e);
    const t = [], s = new Set(Array.from(this.watchers));
    for (const i of e) {
      const r = this._watchers.get(this.requestToWatcherKey(i));
      r && Mt(r.request.excludes, i.excludes) && Mt(r.request.includes, i.includes) ? s.delete(r) : t.push(i);
    }
    t.length && this.trace(`Request to start watching: ${t.map((i) => this.requestToString(i)).join(",")}`), s.size && this.trace(`Request to stop watching: ${Array.from(s).map((i) => this.requestToString(i.request)).join(",")}`), this.worker.clear();
    for (const i of s) this.stopWatching(i);
    this.createWatchWorker().work(t);
  }
  createWatchWorker() {
    return this.worker.value = new ws({ maxWorkChunkSize: 100, throttleDelay: 100, maxBufferedWork: Number.MAX_VALUE }, (e) => {
      for (const t of e) this.startWatching(t);
    }), this.worker.value;
  }
  requestToWatcherKey(e) {
    return typeof e.correlationId == "number" ? e.correlationId : this.pathToWatcherKey(e.path);
  }
  pathToWatcherKey(e) {
    return N ? e : e.toLowerCase();
  }
  startWatching(e) {
    const t = new Ja(e, this.recursiveWatcher, (i) => this._onDidChangeFile.fire(i), () => this._onDidWatchFail.fire(e), (i) => this._onDidLogMessage.fire(i), this.verboseLogging), s = { request: e, instance: t };
    this._watchers.set(this.requestToWatcherKey(e), s), Ae?.onWatcherStart();
  }
  async stop() {
    await super.stop();
    for (const e of this.watchers) this.stopWatching(e);
  }
  stopWatching(e) {
    this.trace("stopping file watcher", e), this._watchers.delete(this.requestToWatcherKey(e.request)), e.instance.dispose(), Ae?.onWatcherStop();
  }
  removeDuplicateRequests(e) {
    const t = /* @__PURE__ */ new Map();
    for (const s of e) {
      let i = t.get(s.correlationId);
      i || (i = /* @__PURE__ */ new Map(), t.set(s.correlationId, i));
      const r = this.pathToWatcherKey(s.path);
      i.has(r) && this.trace(`ignoring a request for watching who's path is already watched: ${this.requestToString(s)}`), i.set(r, s);
    }
    return Array.from(t.values()).map((s) => Array.from(s.values())).flat();
  }
  async setVerboseLogging(e) {
    super.setVerboseLogging(e);
    for (const t of this.watchers) t.instance.setVerboseLogging(e);
  }
  trace(e, t) {
    this.verboseLogging && this._onDidLogMessage.fire({ type: "trace", message: this.toMessage(e, t) });
  }
  warn(e) {
    this._onDidLogMessage.fire({ type: "warn", message: this.toMessage(e) });
  }
  toMessage(e, t) {
    return t ? `[File Watcher (node.js)] ${e} (${this.requestToString(t.request)})` : `[File Watcher (node.js)] ${e}`;
  }
};
function Xa(e, t, s, i) {
  const r = [], n = zt(e.filter((p) => Ot(p))), o = n.filter((p) => s.isSuspended(p) === false), a = n.filter((p) => s.isSuspended(p) === "polling"), l = n.filter((p) => s.isSuspended(p) === true), h = Ni(n, s), u = Oi(s), c = zt(e.filter((p) => !Ot(p))), f = c.filter((p) => i.isSuspended(p) === false), d = c.filter((p) => i.isSuspended(p) === "polling"), _ = c.filter((p) => i.isSuspended(p) === true), C = Ni(c, i), b = Ui(i);
  r.push("[Summary]"), r.push(`- Recursive Requests:     total: ${n.length}, suspended: ${h.suspended}, polling: ${h.polling}, failed: ${t}`), r.push(`- Non-Recursive Requests: total: ${c.length}, suspended: ${C.suspended}, polling: ${C.polling}`), r.push(`- Recursive Watchers:     total: ${Array.from(s.watchers).length}, active: ${u.active}, failed: ${u.failed}, stopped: ${u.stopped}`), r.push(`- Non-Recursive Watchers: total: ${Array.from(i.watchers).length}, active: ${b.active}, failed: ${b.failed}, reusing: ${b.reusing}`), r.push(`- I/O Handles Impact:     total: ${h.polling + C.polling + u.active + b.active}`), r.push(`
[Recursive Requests (${n.length}, suspended: ${h.suspended}, polling: ${h.polling})]:`);
  const k = [];
  for (const p of [o, a, l].flat()) zi(k, p, s);
  r.push(...Bt(k));
  const z = [];
  Za(z, s), r.push(...Bt(z)), r.push(`
[Non-Recursive Requests (${c.length}, suspended: ${C.suspended}, polling: ${C.polling})]:`);
  const M = [];
  for (const p of [f, d, _].flat()) zi(M, p, i);
  r.push(...Bt(M));
  const $e = [];
  return e2($e, i), r.push(...Bt($e)), `

[File Watcher] request stats:

${r.join(`
`)}

`;
}
function Bt(e) {
  let t = 0;
  for (const s of e) t = Math.max(t, s.split("	")[0].length);
  for (let s = 0; s < e.length; s++) {
    const r = e[s].split("	");
    if (r.length === 2) {
      const n = " ".repeat(t - r[0].length);
      e[s] = `${r[0]}${n}	${r[1]}`;
    }
  }
  return e;
}
function Ni(e, t) {
  let s = 0, i = 0;
  for (const r of e) {
    const n = t.isSuspended(r);
    n !== false && (i++, n === "polling" && s++);
  }
  return { suspended: i, polling: s };
}
function Oi(e) {
  let t = 0, s = 0, i = 0;
  for (const r of e.watchers) !r.failed && !r.stopped && t++, r.failed && s++, r.stopped && i++;
  return { active: t, failed: s, stopped: i };
}
function Ui(e) {
  let t = 0, s = 0, i = 0;
  for (const r of e.watchers) !r.instance.failed && !r.instance.isReusingRecursiveWatcher && t++, r.instance.failed && s++, r.instance.isReusingRecursiveWatcher && i++;
  return { active: t, failed: s, reusing: i };
}
function zt(e) {
  return e.sort((t, s) => {
    const i = Bi(t) ? t.path : t.request.path, r = Bi(s) ? s.path : s.request.path, n = Math.min(i.length, r.length);
    for (let o = 0; o < n; o++) if (i[o] !== r[o]) return i[o] < r[o] ? -1 : 1;
    return i.length - r.length;
  }), e;
}
function Bi(e) {
  return typeof e?.path == "string";
}
function zi(e, t, s) {
  const i = [], r = s.isSuspended(t);
  r !== false && (r === "polling" ? i.push("[SUSPENDED <polling>]") : i.push("[SUSPENDED <non-polling>]")), e.push(` ${t.path}	${i.length > 0 ? i.join(" ") + " " : ""}(${xs(t)})`);
}
function xs(e) {
  return `excludes: ${e.excludes.length > 0 ? e.excludes : "<none>"}, includes: ${e.includes && e.includes.length > 0 ? JSON.stringify(e.includes) : "<all>"}, filter: ${Di(e.filter)}, correlationId: ${typeof e.correlationId == "number" ? e.correlationId : "<none>"}`;
}
function Za(e, t) {
  const s = zt(Array.from(t.watchers)), { active: i, failed: r, stopped: n } = Oi(t);
  e.push(`
[Recursive Watchers (${s.length}, active: ${i}, failed: ${r}, stopped: ${n})]:`);
  for (const o of s) {
    const a = [];
    o.failed && a.push("[FAILED]"), o.stopped && a.push("[STOPPED]"), o.subscriptionsCount > 0 && a.push(`[SUBSCRIBED:${o.subscriptionsCount}]`), o.restarts > 0 && a.push(`[RESTARTED:${o.restarts}]`), e.push(` ${o.request.path}	${a.length > 0 ? a.join(" ") + " " : ""}(${xs(o.request)})`);
  }
}
function e2(e, t) {
  const s = zt(Array.from(t.watchers)), i = s.filter((h) => !h.instance.failed && !h.instance.isReusingRecursiveWatcher), r = s.filter((h) => h.instance.failed), n = s.filter((h) => h.instance.isReusingRecursiveWatcher), { active: o, failed: a, reusing: l } = Ui(t);
  e.push(`
[Non-Recursive Watchers (${s.length}, active: ${o}, failed: ${a}, reusing: ${l})]:`);
  for (const h of [i, r, n].flat()) {
    const u = [];
    h.instance.failed && u.push("[FAILED]"), h.instance.isReusingRecursiveWatcher && u.push("[REUSING]"), e.push(` ${h.request.path}	${u.length > 0 ? u.join(" ") + " " : ""}(${xs(h.request)})`);
  }
}
var t2 = class extends ee {
  constructor() {
    super(), this.recursiveWatcher = this._register(new Ka()), this.nonRecursiveWatcher = this._register(new Ya(this.recursiveWatcher)), this.onDidChangeFile = x.any(this.recursiveWatcher.onDidChangeFile, this.nonRecursiveWatcher.onDidChangeFile), this.onDidError = x.any(this.recursiveWatcher.onDidError, this.nonRecursiveWatcher.onDidError), this._onDidLogMessage = this._register(new W()), this.onDidLogMessage = x.any(this._onDidLogMessage.event, this.recursiveWatcher.onDidLogMessage, this.nonRecursiveWatcher.onDidLogMessage), this.requests = [], this.failedRecursiveRequests = 0, this._register(this.recursiveWatcher.onDidError((e) => {
      e.request && this.failedRecursiveRequests++;
    }));
  }
  async watch(e) {
    this.requests = e, this.failedRecursiveRequests = 0;
    let t;
    try {
      await this.recursiveWatcher.watch(e.filter((s) => Ot(s)));
    } catch (s) {
      t = s;
    }
    try {
      await this.nonRecursiveWatcher.watch(e.filter((s) => !Ot(s)));
    } catch (s) {
      t || (t = s);
    }
    if (t) throw t;
  }
  async setVerboseLogging(e) {
    e && this.requests.length > 0 && this._onDidLogMessage.fire({ type: "trace", message: Xa(this.requests, this.failedRecursiveRequests, this.recursiveWatcher, this.nonRecursiveWatcher) }), await It.settled([this.recursiveWatcher.setVerboseLogging(e), this.nonRecursiveWatcher.setVerboseLogging(e)]);
  }
  async stop() {
    await It.settled([this.recursiveWatcher.stop(), this.nonRecursiveWatcher.stop()]);
  }
}, $s;
ci(process) ? $s = new oa() : $s = new ra("watcher");
var s2 = new t2();
$s.registerChannel("watcher", Es.fromService(s2, new V()));
