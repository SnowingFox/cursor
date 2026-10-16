/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "261b81f8-03a7-5d04-8988-9f4c86fabce6");
  } catch (e3) {
  }
})();
function _r(e, t, r, s) {
  var i = arguments.length, n = i < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, r) : s, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, r, s);
  else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (n = (i < 3 ? o(n) : i > 3 ? o(t, r, n) : o(t, r)) || n);
  return i > 3 && n && Object.defineProperty(t, r, n), n;
}
import "child_process";
var We, Be;
function yr(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const s of e) {
    const i = t(s);
    let n = r[i];
    n || (n = r[i] = []), n.push(s);
  }
  return r;
}
var p2 = class {
  constructor(e, t) {
    this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[We] = "SetWithKey";
    for (const r of e) this.add(r);
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
    this._map.forEach((r) => e.call(t, r, r, this));
  }
  [(Be = Symbol.iterator, We = Symbol.toStringTag, Be)]() {
    return this.values();
  }
}, wr = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        throw e.stack ? k1.isErrorNoTelemetry(e) ? new k1(e.message + `

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
}, br = new wr();
function K1(e) {
  Cr(e) || br.onUnexpectedError(e);
}
var de = "Canceled";
function Cr(e) {
  return e instanceof a1 ? true : e instanceof Error && e.name === de && e.message === de;
}
var a1 = class extends Error {
  constructor() {
    if (super(de), this.name = this.message, Dr && typeof console < "u" && Er()) {
      const e = new Error().stack ?? "";
      Ar.some((t) => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
    }
  }
}, k1 = class Me extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof Me) return t;
    const r = new Me();
    return r.message = t.message, r.stack = t.stack, r;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}, Ar = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], Lr = 5e3, je = 0;
function Er() {
  const e = Date.now();
  return e < je ? false : (je = e + Lr, true);
}
var Dr = false;
function He(e, t) {
  const r = this;
  let s = false, i;
  return function() {
    if (s) return i;
    if (s = true, t) try {
      i = e.apply(r, arguments);
    } finally {
      t();
    }
    else i = e.apply(r, arguments);
    return i;
  };
}
function kr(e, t, r = 0, s = e.length) {
  let i = r, n = s;
  for (; i < n; ) {
    const o = Math.floor((i + n) / 2);
    t(e[o]) ? i = o + 1 : n = o;
  }
  return i - 1;
}
var Sr = class ar {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (ar.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const s of this._array) if (this._prevFindLastPredicate(s) && !t(s)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = t;
    }
    const r = kr(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = r + 1, r === -1 ? void 0 : this._array[r];
  }
};
Sr.assertInvariants = false;
var pe;
((e) => {
  function t(n) {
    return n < 0;
  }
  e.isLessThan = t;
  function r(n) {
    return n <= 0;
  }
  e.isLessThanOrEqual = r;
  function s(n) {
    return n > 0;
  }
  e.isGreaterThan = s;
  function i(n) {
    return n === 0;
  }
  e.isNeitherLessOrGreaterThan = i, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(pe || (pe = {}));
function Pr(e, t) {
  return (r, s) => t(e(r), e(s));
}
var Rr = (e, t) => e - t, Ge = class Ne {
  constructor(t) {
    this.iterate = t;
  }
  forEach(t) {
    this.iterate((r) => (t(r), true));
  }
  toArray() {
    const t = [];
    return this.iterate((r) => (t.push(r), true)), t;
  }
  filter(t) {
    return new Ne((r) => this.iterate((s) => t(s) ? r(s) : true));
  }
  map(t) {
    return new Ne((r) => this.iterate((s) => r(t(s))));
  }
  some(t) {
    let r = false;
    return this.iterate((s) => (r = t(s), !r)), r;
  }
  findFirst(t) {
    let r;
    return this.iterate((s) => t(s) ? (r = s, false) : true), r;
  }
  findLast(t) {
    let r;
    return this.iterate((s) => (t(s) && (r = s), true)), r;
  }
  findLastMaxBy(t) {
    let r, s = true;
    return this.iterate((i) => ((s || pe.isGreaterThan(t(i, r))) && (s = false, r = i), true)), r;
  }
};
Ge.empty = new Ge((e) => {
});
var Ve, Ke, Qe, Ir = class {
  constructor(e, t) {
    this.uri = e, this.value = t;
  }
};
function Tr(e) {
  return Array.isArray(e);
}
var Je = class W1 {
  constructor(t, r) {
    if (this[Ve] = "ResourceMap", t instanceof W1) this.map = new Map(t.map), this.toKey = r ?? W1.defaultToKey;
    else if (Tr(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = r ?? W1.defaultToKey;
      for (const [s, i] of t) this.set(s, i);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? W1.defaultToKey;
  }
  set(t, r) {
    return this.map.set(this.toKey(t), new Ir(t, r)), this;
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
  forEach(t, r) {
    typeof r < "u" && (t = t.bind(r));
    for (const [s, i] of this.map) t(i.value, i.uri, this);
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
  *[(Ve = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map) yield [t.uri, t.value];
  }
};
Je.defaultToKey = (e) => e.toString();
var Ye = Je, g2 = class {
  constructor(e, t) {
    this[Ke] = "ResourceSet", !e || typeof e == "function" ? this._map = new Ye(e) : (this._map = new Ye(t), e.forEach(this.add, this));
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
    this._map.forEach((r, s) => e.call(t, s, s, this));
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
  [(Ke = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
}, xr = class {
  constructor() {
    this[Qe] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
    const r = this._map.get(e);
    if (r) return t !== 0 && this.touch(r, t), r.value;
  }
  set(e, t, r = 0) {
    let s = this._map.get(e);
    if (s) s.value = t, r !== 0 && this.touch(s, r);
    else {
      switch (s = { key: e, value: t, next: void 0, previous: void 0 }, r) {
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
    const r = this._state;
    let s = this._head;
    for (; s; ) {
      if (t ? e.bind(t)(s.value, s.key, this) : e(s.value, s.key, this), this._state !== r) throw new Error("LinkedMap got modified during iteration.");
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
  *iterateLinked(e, t, r) {
    for (; ; ) {
      if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
      if (!t) return;
      const s = r(t);
      t = t.next, yield s;
    }
  }
  [(Qe = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._head, r = this.size;
    for (; t && r > e; ) this._map.delete(t.key), t = t.next, r--;
    this._head = t, this._size = r, t && (t.previous = void 0), this._state++;
  }
  trimNew(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._tail, r = this.size;
    for (; t && r > e; ) this._map.delete(t.key), t = t.previous, r--;
    this._tail = t, this._size = r, t && (t.next = void 0), this._state++;
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
      const t = e.next, r = e.previous;
      if (!t || !r) throw new Error("Invalid list");
      t.previous = r, r.next = t;
    }
    e.next = void 0, e.previous = void 0, this._state++;
  }
  touch(e, t) {
    if (!this._head || !this._tail) throw new Error("Invalid list");
    if (!(t !== 1 && t !== 2)) {
      if (t === 1) {
        if (e === this._head) return;
        const r = e.next, s = e.previous;
        e === this._tail ? (s.next = void 0, this._tail = s) : (r.previous = s, s.next = r), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
      } else if (t === 2) {
        if (e === this._tail) return;
        const r = e.next, s = e.previous;
        e === this._head ? (r.previous = void 0, this._head = r) : (r.previous = s, s.next = r), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
      }
    }
  }
  toJSON() {
    const e = [];
    return this.forEach((t, r) => {
      e.push([r, t]);
    }), e;
  }
  fromJSON(e) {
    this.clear();
    for (const [t, r] of e) this.set(t, r);
  }
}, Or = class extends xr {
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
}, Ze = class extends Or {
  constructor(e, t = 1) {
    super(e, t);
  }
  trim(e) {
    this.trimOld(e);
  }
  set(e, t) {
    return super.set(e, t), this.checkTrim(), this;
  }
}, Mr = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    let r = this.map.get(e);
    r || (r = /* @__PURE__ */ new Set(), this.map.set(e, r)), r.add(t);
  }
  delete(e, t) {
    const r = this.map.get(e);
    r && (r.delete(t), r.size === 0 && this.map.delete(e));
  }
  forEach(e, t) {
    const r = this.map.get(e);
    r && r.forEach(t);
  }
  get(e) {
    const t = this.map.get(e);
    return t || /* @__PURE__ */ new Set();
  }
};
function Nr(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
function $r(e) {
  return typeof e > "u";
}
function Ur(e) {
  return $r(e) || e === null;
}
var ge;
((e) => {
  function t(_) {
    return _ && typeof _ == "object" && typeof _[Symbol.iterator] == "function";
  }
  e.is = t;
  const r = Object.freeze([]);
  function s() {
    return r;
  }
  e.empty = s;
  function* i(_) {
    yield _;
  }
  e.single = i;
  function n(_) {
    return t(_) ? _ : i(_);
  }
  e.wrap = n;
  function o(_) {
    return _ || r;
  }
  e.from = o;
  function* a(_) {
    for (let C = _.length - 1; C >= 0; C--) yield _[C];
  }
  e.reverse = a;
  function c(_) {
    return !_ || _[Symbol.iterator]().next().done === true;
  }
  e.isEmpty = c;
  function l(_) {
    return _[Symbol.iterator]().next().value;
  }
  e.first = l;
  function u(_, C) {
    let P = 0;
    for (const B of _) if (C(B, P++)) return true;
    return false;
  }
  e.some = u;
  function h(_, C) {
    for (const P of _) if (C(P)) return P;
  }
  e.find = h;
  function* p(_, C) {
    for (const P of _) C(P) && (yield P);
  }
  e.filter = p;
  function* b(_, C) {
    let P = 0;
    for (const B of _) yield C(B, P++);
  }
  e.map = b;
  function* A(_, C) {
    let P = 0;
    for (const B of _) yield* C(B, P++);
  }
  e.flatMap = A;
  function* I(..._) {
    for (const C of _) Nr(C) ? yield* C : yield C;
  }
  e.concat = I;
  function E(_, C, P) {
    let B = P;
    for (const _1 of _) B = C(B, _1);
    return B;
  }
  e.reduce = E;
  function x(_) {
    let C = 0;
    for (const P of _) C++;
    return C;
  }
  e.length = x;
  function* G(_, C, P = _.length) {
    for (C < -_.length && (C = 0), C < 0 && (C += _.length), P < 0 ? P += _.length : P > _.length && (P = _.length); C < P; C++) yield _[C];
  }
  e.slice = G;
  function M(_, C = Number.POSITIVE_INFINITY) {
    const P = [];
    if (C === 0) return [P, _];
    const B = _[Symbol.iterator]();
    for (let _1 = 0; _1 < C; _1++) {
      const H1 = B.next();
      if (H1.done) return [P, e.empty()];
      P.push(H1.value);
    }
    return [P, { [Symbol.iterator]() {
      return B;
    } }];
  }
  e.consume = M;
  async function fe(_) {
    const C = [];
    for await (const P of _) C.push(P);
    return Promise.resolve(C);
  }
  e.asyncToArray = fe;
})(ge || (ge = {}));
var Xe = void 0, me = /* @__PURE__ */ new Set(), zr = 50;
function S1(e, t) {
  if (l1?.onLifecycleMisuse?.(e, t), !Xe) return;
  const r = `${t}\0${e.stack ?? ""}`;
  me.has(r) || me.size >= zr || (me.add(r), Xe(e, t));
}
function ve(e) {
  S1(e, "disposable_post_dispose_set");
}
var qr = false, l1 = null, Fr = class lr {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let r = this.livingDisposables.get(t);
    return r || (r = { parent: null, source: null, isSingleton: false, value: t, idx: lr.idx++ }, this.livingDisposables.set(t, r)), r;
  }
  trackDisposable(t) {
    const r = this.getDisposableData(t);
    r.source || (r.source = new Error().stack);
  }
  setParent(t, r) {
    const s = this.getDisposableData(t);
    s.parent = r;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = true;
  }
  getRootParent(t, r) {
    const s = r.get(t);
    if (s) return s;
    const i = t.parent ? this.getRootParent(this.getDisposableData(t.parent), r) : t;
    return r.set(t, i), i;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, s]) => s.source !== null && !this.getRootParent(s, t).isSingleton).flatMap(([s]) => s);
  }
  computeLeakingDisposables(t = 10, r) {
    let s;
    if (r) s = r;
    else {
      const c = /* @__PURE__ */ new Map(), l = [...this.livingDisposables.values()].filter((h) => h.source !== null && !this.getRootParent(h, c).isSingleton);
      if (l.length === 0) return;
      const u = new Set(l.map((h) => h.value));
      if (s = l.filter((h) => !(h.parent && u.has(h.parent))), s.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!s) return;
    function i(c) {
      function l(h, p) {
        for (; h.length > 0 && p.some((b) => typeof b == "string" ? b === h[0] : h[0].match(b)); ) h.shift();
      }
      const u = c.source.split(`
`).map((h) => h.trim().replace("at ", "")).filter((h) => h !== "");
      return l(u, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), u.reverse();
    }
    const n = new Mr();
    for (const c of s) {
      const l = i(c);
      for (let u = 0; u <= l.length; u++) n.add(l.slice(0, u).join(`
`), c);
    }
    s.sort(Pr((c) => c.idx, Rr));
    let o = "", a = 0;
    for (const c of s.slice(0, t)) {
      a++;
      const l = i(c), u = [];
      for (let h = 0; h < l.length; h++) {
        let p = l[h];
        p = `(shared with ${n.get(l.slice(0, h + 1).join(`
`)).size}/${s.length} leaks) at ${p}`;
        const A = n.get(l.slice(0, h).join(`
`)), I = yr([...A].map((E) => i(E)[h]), (E) => E);
        delete I[l[h]];
        for (const [E, x] of Object.entries(I)) u.unshift(`    - stacktraces of ${x.length} other leaks continue with ${E}`);
        u.unshift(p);
      }
      o += `


==================== Leaking disposable ${a}/${s.length}: ${c.value.constructor.name} ====================
${u.join(`
`)}
============================================================

`;
    }
    return s.length > t && (o += `


... and ${s.length - t} more leaking disposables

`), { leaks: s, details: o };
  }
};
Fr.idx = 0;
function Wr(e) {
  l1 = e;
}
if (qr) {
  const e = "__is_disposable_tracked__";
  Wr(new class {
    trackDisposable(t) {
      const r = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        t[e] || console.log(r);
      }, 3e3);
    }
    setParent(t, r) {
      if (t && t !== b1.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsDisposed(t) {
      if (t && t !== b1.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsSingleton(t) {
    }
  }());
}
function P1(e) {
  return l1?.trackDisposable(e), e;
}
function R1(e) {
  l1?.markAsDisposed(e);
}
function I1(e, t) {
  l1?.setParent(e, t);
}
function Br(e, t) {
  if (l1) for (const r of e) l1.setParent(r, t);
}
function et(e) {
  return l1?.markAsSingleton(e), e;
}
function jr(e) {
  return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
function T1(e) {
  if (ge.is(e)) {
    let t;
    for (const r of e) if (r) try {
      r.dispose();
    } catch (s) {
      (t ??= []).push(s);
    }
    if (t !== void 0) throw t.length === 1 ? t[0] : new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function Hr(...e) {
  const t = Q1(() => T1(e));
  return Br(e, t), t;
}
function Q1(e) {
  const t = P1({ dispose: He(() => {
    R1(t), e();
  }) });
  return t;
}
var tt = class $e {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = false, P1(this);
  }
  dispose() {
    this._isDisposed || (R1(this), this._isDisposed = true, this.clear());
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
      T1(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(t) {
    if (!t) return t;
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    if (I1(t, this), this._isDisposed) {
      const r = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      $e.DISABLE_DISPOSED_WARNING || console.warn(r.stack), ve(r);
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
    t && this._toDispose.has(t) && (this._toDispose.delete(t), I1(t, null));
  }
  transferOut(t) {
    if (this._isDisposed) {
      const r = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      $e.DISABLE_DISPOSED_WARNING || console.warn(r.stack), S1(r, "disposable_use_after_dispose");
    }
    return this.deleteAndLeak(t), t;
  }
};
tt.DISABLE_DISPOSED_WARNING = false;
var w1 = tt, b1 = class {
  constructor() {
    this._store = new w1(), P1(this), I1(this._store, this);
  }
  dispose() {
    R1(this), this._store.dispose();
  }
  _register(e) {
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(e);
  }
};
b1.None = Object.freeze({ dispose() {
} });
var rt = class {
  constructor() {
    this._isDisposed = false, P1(this);
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(e) {
    if (this._isDisposed) {
      if (e) {
        const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
        w1.DISABLE_DISPOSED_WARNING || console.warn(t.stack), ve(t), e.dispose();
      }
      return;
    }
    e !== this._value && (this._value?.dispose(), e && I1(e, this), this._value = e);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, R1(this), this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    const e = this._value;
    return this._value = void 0, e && I1(e, null), e;
  }
}, Gr = class {
  constructor(e = /* @__PURE__ */ new Map()) {
    this._isDisposed = false, this._store = e, P1(this);
  }
  dispose() {
    R1(this), this._isDisposed = true, this.clearAndDisposeAll();
  }
  clearAndDisposeAll() {
    if (this._store.size) try {
      T1(this._store.values());
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
  set(e, t, r = false) {
    if (this._isDisposed) {
      const s = new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!");
      console.warn(s.stack), ve(s);
      return;
    }
    r || this._store.get(e)?.dispose(), this._store.set(e, t);
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
}, st = class Ue {
  constructor(t) {
    this.element = t, this.next = Ue.Undefined, this.prev = Ue.Undefined;
  }
};
st.Undefined = new st(void 0);
var Vr = globalThis.performance && typeof globalThis.performance.now == "function", Kr = class cr {
  static create(t) {
    return new cr(t);
  }
  constructor(t) {
    this._now = Vr && t === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
}, it = false, Qr = false, X;
((e) => {
  e.None = () => b1.None;
  function t(m) {
    if (Qr) {
      const { onDidAddListener: f } = m, g = ye.create();
      let d = 0;
      m.onDidAddListener = () => {
        ++d === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), g.print()), f?.();
      };
    }
  }
  function r(m, f) {
    return b(m, () => {
    }, 0, void 0, true, void 0, f);
  }
  e.defer = r;
  function s(m) {
    return (f, g = null, d) => {
      let v = false, y;
      return y = m((k) => {
        if (!v) return y ? y.dispose() : v = true, f.call(g, k);
      }, null, d), v && y.dispose(), y;
    };
  }
  e.once = s;
  function i(m, f) {
    return e.once(e.filter(m, f));
  }
  e.onceIf = i;
  function n(m, f, g) {
    return h((d, v = null, y) => m((k) => d.call(v, f(k)), null, y), g);
  }
  e.map = n;
  function o(m, f, g) {
    return h((d, v = null, y) => m((k) => {
      f(k), d.call(v, k);
    }, null, y), g);
  }
  e.forEach = o;
  function a(m, f, g) {
    return h((d, v = null, y) => m((k) => f(k) && d.call(v, k), null, y), g);
  }
  e.filter = a;
  function c(m) {
    return m;
  }
  e.signal = c;
  function l(...m) {
    return (f, g = null, d) => {
      const v = Hr(...m.map((y) => y((k) => f.call(g, k))));
      return p(v, d);
    };
  }
  e.any = l;
  function u(m, f, g, d) {
    let v = g;
    return n(m, (y) => (v = f(v, y), v), d);
  }
  e.reduce = u;
  function h(m, f) {
    let g;
    const d = { onWillAddFirstListener() {
      g = m(v.fire, v);
    }, onDidRemoveLastListener() {
      g?.dispose();
    } };
    f || t(d);
    const v = new V(d);
    return f?.add(v), v.event;
  }
  function p(m, f) {
    return f instanceof Array ? f.push(m) : f && f.add(m), m;
  }
  function b(m, f, g = 100, d = false, v = false, y, k) {
    let N, q, y1, G1 = 0, D1;
    const Fe = { leakWarningThreshold: y, onWillAddFirstListener() {
      N = m((mr) => {
        G1++, q = f(q, mr), d && !y1 && (V1.fire(q), q = void 0), D1 ??= () => {
          const vr = q;
          q = void 0, y1 = void 0, (!d || G1 > 1) && V1.fire(vr), G1 = 0;
        }, typeof g == "number" ? (clearTimeout(y1), y1 = setTimeout(D1, g)) : y1 === void 0 && (y1 = 0, queueMicrotask(D1));
      });
    }, onWillRemoveListener() {
      v && G1 > 0 && D1?.();
    }, onDidRemoveLastListener() {
      D1 = void 0, N.dispose();
    } };
    k || t(Fe);
    const V1 = new V(Fe);
    return k?.add(V1), V1.event;
  }
  e.debounce = b;
  function A(m, f = 0, g) {
    return e.debounce(m, (d, v) => d ? (d.push(v), d) : [v], f, void 0, true, void 0, g);
  }
  e.accumulate = A;
  function I(m, f = (d, v) => d === v, g) {
    let d = true, v;
    return a(m, (y) => {
      const k = d || !f(y, v);
      return d = false, v = y, k;
    }, g);
  }
  e.latch = I;
  function E(m, f, g) {
    return [e.filter(m, f, g), e.filter(m, (d) => !f(d), g)];
  }
  e.split = E;
  function x(m, f = false, g = [], d) {
    let v = g.slice(), y = m((q) => {
      v ? v.push(q) : N.fire(q);
    });
    d && d.add(y);
    const k = () => {
      v?.forEach((q) => N.fire(q)), v = null;
    }, N = new V({ onWillAddFirstListener() {
      y || (y = m((q) => N.fire(q)), d && d.add(y));
    }, onDidAddFirstListener() {
      v && (f ? setTimeout(k) : k());
    }, onDidRemoveLastListener() {
      y && y.dispose(), y = null;
    } });
    return d && d.add(N), N.event;
  }
  e.buffer = x;
  function G(m, f) {
    return (d, v, y) => {
      const k = f(new fe());
      return m(function(N) {
        const q = k.evaluate(N);
        q !== M && d.call(v, q);
      }, void 0, y);
    };
  }
  e.chain = G;
  const M = /* @__PURE__ */ Symbol("HaltChainable");
  class fe {
    constructor() {
      this.steps = [];
    }
    map(f) {
      return this.steps.push(f), this;
    }
    forEach(f) {
      return this.steps.push((g) => (f(g), g)), this;
    }
    filter(f) {
      return this.steps.push((g) => f(g) ? g : M), this;
    }
    reduce(f, g) {
      let d = g;
      return this.steps.push((v) => (d = f(d, v), d)), this;
    }
    latch(f = (g, d) => g === d) {
      let g = true, d;
      return this.steps.push((v) => {
        const y = g || !f(v, d);
        return g = false, d = v, y ? v : M;
      }), this;
    }
    evaluate(f) {
      for (const g of this.steps) if (f = g(f), f === M) break;
      return f;
    }
  }
  function _(m, f, g = (d) => d) {
    const d = (...N) => k.fire(g(...N)), v = () => m.on(f, d), y = () => m.removeListener(f, d), k = new V({ onWillAddFirstListener: v, onDidRemoveLastListener: y });
    return k.event;
  }
  e.fromNodeEventEmitter = _;
  function C(m) {
    let f;
    const g = () => {
      f = m.subscribe((y) => v.fire(y));
    }, d = () => {
      f?.unsubscribe(), f = void 0;
    }, v = new V({ onWillAddFirstListener: g, onDidRemoveLastListener: d });
    return v.event;
  }
  e.fromRxJS = C;
  function P(m, f, g = (d) => d) {
    const d = (...N) => k.fire(g(...N)), v = () => m.addEventListener(f, d), y = () => m.removeEventListener(f, d), k = new V({ onWillAddFirstListener: v, onDidRemoveLastListener: y });
    return k.event;
  }
  e.fromDOMEventEmitter = P;
  function B(m, f) {
    return new Promise((g) => s(m)(g, null, f));
  }
  e.toPromise = B;
  function _1(m) {
    const f = new V();
    return m.then((g) => {
      f.fire(g);
    }, () => {
      f.fire(void 0);
    }).finally(() => {
      f.dispose();
    }), f.event;
  }
  e.fromPromise = _1;
  function H1(m, f) {
    return m((g) => f.fire(g));
  }
  e.forward = H1;
  function fr(m, f, g) {
    return f(g), m((d) => f(d));
  }
  e.runAndSubscribe = fr;
  class dr {
    constructor(f, g) {
      this._observable = f, this._counter = 0, this._hasChanged = false;
      const d = { onWillAddFirstListener: () => {
        f.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        f.removeObserver(this);
      } };
      g || t(d), this.emitter = new V(d), g && g.add(this.emitter);
    }
    beginUpdate(f) {
      this._counter++;
    }
    handlePossibleChange(f) {
    }
    handleChange(f, g) {
      this._hasChanged = true;
    }
    endUpdate(f) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function pr(m, f) {
    return new dr(m, f).emitter.event;
  }
  e.fromObservable = pr;
  function gr(m) {
    return (f, g, d) => {
      let v = 0, y = false;
      const k = { beginUpdate() {
        v++;
      }, endUpdate() {
        v--, v === 0 && (m.reportChanges(), y && (y = false, f.call(g)));
      }, handlePossibleChange() {
      }, handleChange() {
        y = true;
      } };
      m.addObserver(k), m.reportChanges();
      const N = { dispose() {
        m.removeObserver(k);
      } };
      return d instanceof w1 ? d.add(N) : Array.isArray(d) && d.push(N), N;
    };
  }
  e.fromObservableLight = gr;
})(X || (X = {}));
var _e = class ze {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${ze._idPool++}`, ze.all.add(this);
  }
  start(t) {
    this._stopWatch = new Kr(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
_e.all = /* @__PURE__ */ new Set(), _e._idPool = 0;
var Jr = _e, nt = -1, Yr = 1;
function ot() {
  return (Yr++).toString(16).padStart(3, "0");
}
var Zr = class {
  constructor(e, t, r = ot()) {
    this._errorHandler = e, this.threshold = t, this.name = r, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    const r = this.threshold;
    if (r <= 0 || t < r) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const s = e.value, i = this._stacks.get(s) || 0;
    if (this._stacks.set(s, i + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = r * 0.5;
      const [n, o] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${o}):`;
      console.warn(a), console.warn(n);
      const c = o / t > 0.3 ? "dominated" : "popular", l = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, u = new at(c, a, n, t, l);
      this._errorHandler(u), S1(u, "emitter_listener_leak");
    }
    return () => {
      const n = this._stacks.get(s) || 0;
      n <= 1 ? this._stacks.delete(s) : this._stacks.set(s, n - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (const [r, s] of this._stacks) (!e || t < s) && (e = [r, s], t = s);
    return e;
  }
}, ye = class hr {
  constructor(t) {
    this.value = t;
  }
  static create() {
    const t = new Error();
    return new hr(t.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, at = class extends Error {
  constructor(e, t, r, s, i) {
    super(i ? `[${i}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = s, this.details = t, this.stack = r;
  }
}, Xr = class extends at {
  constructor(e, t, r, s, i) {
    super(e, t, r, s, i), this.name = "ListenerRefusalError";
  }
}, J1 = class {
  constructor(e) {
    this.value = e;
  }
}, es = 2, lt = (e, t) => {
  if (e instanceof J1) t(e);
  else for (let r = 0; r < e.length; r++) {
    const s = e[r];
    s && t(s);
  }
}, V = class {
  constructor(e) {
    this._size = 0, this._options = e, (nt > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? nt, this._leakWarningName = this._options?.leakWarningName ?? ot(), this._leakWarningErrorHandler = this._options?.onListenerError ?? K1), this._perfMon = this._options?._profName ? new Jr(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  _getLeakageMonitor() {
    if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new Zr(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (it) {
          const e = this._listeners;
          queueMicrotask(() => {
            lt(e, (t) => t.stack?.print());
          });
        }
        lt(this._listeners, (e) => {
          e.value = void 0;
        }), this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (e, t, r) => {
      if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
        const a = this._getLeakageMonitor();
        if (a) {
          const c = `[${a.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${a.threshold})`;
          console.warn(c);
          const l = a.getMostFrequentStack() ?? ["UNKNOWN stack", -1], u = l[1] / this._size > 0.3 ? "dominated" : "popular", h = new Xr(u, `${c}. HINT: Stack shows most frequent listener (${l[1]}-times)`, l[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || K1)(h), S1(h, "emitter_listener_refusal"), b1.None;
        }
      }
      if (this._disposed) {
        const a = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return S1(a, "emitter_use_after_dispose"), b1.None;
      }
      t && (e = e.bind(t));
      const s = new J1(e);
      let i, n;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const a = this._getLeakageMonitor();
        a && (s.stack = ye.create(), i = a.check(s.stack, this._size + 1));
      }
      it && (s.stack = n ?? ye.create()), this._listeners ? this._listeners instanceof J1 ? (this._deliveryQueue ??= new ts(), this._listeners = [this._listeners, s]) : this._listeners.push(s) : (this._options?.onWillAddFirstListener?.(this), this._listeners = s, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const o = Q1(() => {
        i?.(), this._removeListener(s);
      });
      return r instanceof w1 ? r.add(o) : Array.isArray(r) && r.push(o), o;
    }, this._event;
  }
  _removeListener(e) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    const t = this._listeners, r = t.indexOf(e);
    if (r === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, t[r] = void 0;
    const s = this._deliveryQueue.current === this;
    if (this._size * es <= t.length) {
      let i = 0;
      for (let n = 0; n < t.length; n++) t[n] ? t[i++] = t[n] : s && i < this._deliveryQueue.end && (this._deliveryQueue.end--, i < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = i;
    }
  }
  _deliver(e, t) {
    if (!e) return;
    const r = this._options?.onListenerError || K1;
    if (!r) {
      e.value(t);
      return;
    }
    try {
      e.value(t);
    } catch (s) {
      r(s);
    }
  }
  _deliverQueue(e) {
    const t = e.current._listeners;
    for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
    e.reset();
  }
  fire(e) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof J1) this._deliver(this._listeners, e);
    else {
      const t = this._deliveryQueue;
      t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
}, ts = class {
  constructor() {
    this.i = -1, this.end = 0;
  }
  enqueue(e, t, r) {
    this.i = 0, this.end = r, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
}, ct = Object.freeze(function(e, t) {
  const r = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(r);
  } };
}), x1;
((e) => {
  function t(r) {
    return r === e.None || r === e.Cancelled || r instanceof Y1 ? true : !r || typeof r != "object" ? false : typeof r.isCancellationRequested == "boolean" && typeof r.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: X.None }), e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: ct });
})(x1 || (x1 = {}));
var Y1 = class {
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
    return this._isCancelled ? ct : (this._emitter || (this._emitter = new V()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}, ht = class {
  constructor(e) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new Y1()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof Y1 && this._token.cancel() : this._token = x1.Cancelled;
  }
  dispose(e = false) {
    e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof Y1 && this._token.dispose() : this._token = x1.None;
  }
};
function rs() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function ut() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var ss = ut() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function ft(e, t) {
  let r;
  return t.length === 0 ? r = e : r = e.replace(/\{(\d+)\}/g, (s, i) => {
    const n = parseInt(i, 10), o = t[n];
    let a = s;
    return typeof o == "string" ? a = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a;
  }), ss && (r = "［" + r.replace(/[aouei]/g, "$&$&") + "］"), r;
}
function is(e, t, ...r) {
  return ft(typeof e == "number" ? ns(e, t) : t, r);
}
function ns(e, t) {
  const r = rs()?.[e];
  if (typeof r != "string") {
    if (typeof t == "string") return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return r;
}
var C1 = "en", Z1 = false, X1 = false, O1 = false, os = false, dt = false, we = false, as = false, ls = false, cs = false, hs = false, ee = void 0, te = C1, pt = C1, us = void 0, t1 = void 0, r1 = globalThis, F = void 0;
typeof r1.vscode < "u" && typeof r1.vscode.process < "u" ? F = r1.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (F = process);
var gt = typeof F?.versions?.electron == "string", fs = gt && F?.type === "renderer";
if (typeof F == "object") {
  Z1 = F.platform === "win32", X1 = F.platform === "darwin", O1 = F.platform === "linux", os = O1 && !!F.env.SNAP && !!F.env.SNAP_REVISION, as = gt, cs = !!F.env.CI || !!F.env.BUILD_ARTIFACTSTAGINGDIRECTORY, ee = C1, te = C1;
  const e = F.env.VSCODE_NLS_CONFIG;
  if (e) try {
    const t = JSON.parse(e);
    ee = t.userLocale, pt = t.osLocale, te = t.resolvedLanguage || C1, us = t.languagePack?.translationsConfigFile;
  } catch {
  }
  dt = true;
} else typeof navigator == "object" && !fs ? (t1 = navigator.userAgent, Z1 = t1.indexOf("Windows") >= 0, X1 = t1.indexOf("Macintosh") >= 0, ls = (t1.indexOf("Macintosh") >= 0 || t1.indexOf("iPad") >= 0 || t1.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, O1 = t1.indexOf("Linux") >= 0, hs = t1?.indexOf("Mobi") >= 0, we = true, te = ut() || C1, ee = navigator.language.toLowerCase(), pt = ee) : console.error("Unable to resolve platform.");
var be = 0;
X1 ? be = 1 : Z1 ? be = 3 : O1 && (be = 2);
var Y = Z1, Ce = X1, mt = O1, ds = dt, ps = we, gs = we && typeof r1.importScripts == "function", ms = gs ? r1.origin : void 0, e1 = t1, c1 = te, vt;
((e) => {
  function t() {
    return c1;
  }
  e.value = t;
  function r() {
    return c1.length === 2 ? c1 === "en" : c1.length >= 3 ? c1[0] === "e" && c1[1] === "n" && c1[2] === "-" : false;
  }
  e.isDefaultVariant = r;
  function s() {
    return c1 === "en";
  }
  e.isDefault = s;
})(vt || (vt = {}));
var vs = typeof r1.postMessage == "function" && !r1.importScripts, _s = (() => {
  if (vs) {
    const e = [];
    r1.addEventListener("message", (r) => {
      if (r.data && r.data.vscodeScheduleAsyncWork) for (let s = 0, i = e.length; s < i; s++) {
        const n = e[s];
        if (n.id === r.data.vscodeScheduleAsyncWork) {
          e.splice(s, 1), n.callback();
          return;
        }
      }
    });
    let t = 0;
    return (r) => {
      const s = ++t;
      e.push({ id: s, callback: r }), r1.postMessage({ vscodeScheduleAsyncWork: s }, "*");
    };
  }
  return (e) => setTimeout(e);
})(), ys = !!(e1 && e1.indexOf("Chrome") >= 0), m2 = !!(e1 && e1.indexOf("Firefox") >= 0), v2 = !!(!ys && e1 && e1.indexOf("Safari") >= 0), _2 = !!(e1 && e1.indexOf("Edg/") >= 0), y2 = !!(e1 && e1.indexOf("Android") >= 0), w2 = F?.arch, b2 = F?.platform, C2 = F?.versions?.node, u1, Ae = globalThis.vscode;
if (typeof Ae < "u" && typeof Ae.process < "u") {
  const e = Ae.process;
  u1 = { get platform() {
    return e.platform;
  }, get arch() {
    return e.arch;
  }, get env() {
    return e.env;
  }, cwd() {
    return e.cwd();
  } };
} else typeof process < "u" && typeof process?.versions?.node == "string" ? u1 = { get platform() {
  return process.platform;
}, get arch() {
  return process.arch;
}, get env() {
  return process.env;
}, cwd() {
  return process.env.VSCODE_CWD || process.cwd();
} } : u1 = { get platform() {
  return Y ? "win32" : Ce ? "darwin" : "linux";
}, get arch() {
}, get env() {
  return {};
}, cwd() {
  return "/";
} };
var re = u1.cwd, ws = u1.env, bs = u1.platform, A2 = u1.arch, Cs = 65, As = 97, Ls = 90, Es = 122, f1 = 46, $ = 47, j = 92, s1 = 58, Ds = 63, _t = class extends Error {
  constructor(e, t, r) {
    let s;
    typeof t == "string" && t.indexOf("not ") === 0 ? (s = "must not be", t = t.replace(/^not /, "")) : s = "must be";
    const i = e.indexOf(".") !== -1 ? "property" : "argument";
    let n = `The "${e}" ${i} ${s} of type ${t}`;
    n += `. Received type ${typeof r}`, super(n), this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function ks(e, t) {
  if (e === null || typeof e != "object") throw new _t(t, "Object", e);
}
function T(e, t) {
  if (typeof e != "string") throw new _t(t, "string", e);
}
var H = bs === "win32";
function w(e) {
  return e === $ || e === j;
}
function Le(e) {
  return e === $;
}
function i1(e) {
  return e >= Cs && e <= Ls || e >= As && e <= Es;
}
function se(e, t, r, s) {
  let i = "", n = 0, o = -1, a = 0, c = 0;
  for (let l = 0; l <= e.length; ++l) {
    if (l < e.length) c = e.charCodeAt(l);
    else {
      if (s(c)) break;
      c = $;
    }
    if (s(c)) {
      if (!(o === l - 1 || a === 1)) if (a === 2) {
        if (i.length < 2 || n !== 2 || i.charCodeAt(i.length - 1) !== f1 || i.charCodeAt(i.length - 2) !== f1) {
          if (i.length > 2) {
            const u = i.lastIndexOf(r);
            u === -1 ? (i = "", n = 0) : (i = i.slice(0, u), n = i.length - 1 - i.lastIndexOf(r)), o = l, a = 0;
            continue;
          } else if (i.length !== 0) {
            i = "", n = 0, o = l, a = 0;
            continue;
          }
        }
        t && (i += i.length > 0 ? `${r}..` : "..", n = 2);
      } else i.length > 0 ? i += `${r}${e.slice(o + 1, l)}` : i = e.slice(o + 1, l), n = l - o - 1;
      o = l, a = 0;
    } else c === f1 && a !== -1 ? ++a : a = -1;
  }
  return i;
}
function Ss(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function yt(e, t) {
  ks(t, "pathObject");
  const r = t.dir || t.root, s = t.base || `${t.name || ""}${Ss(t.ext)}`;
  return r ? r === t.root ? `${r}${s}` : `${r}${e}${s}` : s;
}
var O = { resolve(...e) {
  let t = "", r = "", s = false;
  for (let i = e.length - 1; i >= -1; i--) {
    let n;
    if (i >= 0) {
      if (n = e[i], T(n, `paths[${i}]`), n.length === 0) continue;
    } else t.length === 0 ? n = re() : (n = ws[`=${t}`] || re(), (n === void 0 || n.slice(0, 2).toLowerCase() !== t.toLowerCase() && n.charCodeAt(2) === j) && (n = `${t}\\`));
    const o = n.length;
    let a = 0, c = "", l = false;
    const u = n.charCodeAt(0);
    if (o === 1) w(u) && (a = 1, l = true);
    else if (w(u)) if (l = true, w(n.charCodeAt(1))) {
      let h = 2, p = h;
      for (; h < o && !w(n.charCodeAt(h)); ) h++;
      if (h < o && h !== p) {
        const b = n.slice(p, h);
        for (p = h; h < o && w(n.charCodeAt(h)); ) h++;
        if (h < o && h !== p) {
          for (p = h; h < o && !w(n.charCodeAt(h)); ) h++;
          (h === o || h !== p) && (c = `\\\\${b}\\${n.slice(p, h)}`, a = h);
        }
      }
    } else a = 1;
    else i1(u) && n.charCodeAt(1) === s1 && (c = n.slice(0, 2), a = 2, o > 2 && w(n.charCodeAt(2)) && (l = true, a = 3));
    if (c.length > 0) if (t.length > 0) {
      if (c.toLowerCase() !== t.toLowerCase()) continue;
    } else t = c;
    if (s) {
      if (t.length > 0) break;
    } else if (r = `${n.slice(a)}\\${r}`, s = l, l && t.length > 0) break;
  }
  return r = se(r, !s, "\\", w), s ? `${t}\\${r}` : `${t}${r}` || ".";
}, normalize(e) {
  T(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let r = 0, s, i = false;
  const n = e.charCodeAt(0);
  if (t === 1) return Le(n) ? "\\" : e;
  if (w(n)) if (i = true, w(e.charCodeAt(1))) {
    let a = 2, c = a;
    for (; a < t && !w(e.charCodeAt(a)); ) a++;
    if (a < t && a !== c) {
      const l = e.slice(c, a);
      for (c = a; a < t && w(e.charCodeAt(a)); ) a++;
      if (a < t && a !== c) {
        for (c = a; a < t && !w(e.charCodeAt(a)); ) a++;
        if (a === t) return `\\\\${l}\\${e.slice(c)}\\`;
        a !== c && (s = `\\\\${l}\\${e.slice(c, a)}`, r = a);
      }
    }
  } else r = 1;
  else i1(n) && e.charCodeAt(1) === s1 && (s = e.slice(0, 2), r = 2, t > 2 && w(e.charCodeAt(2)) && (i = true, r = 3));
  let o = r < t ? se(e.slice(r), !i, "\\", w) : "";
  if (o.length === 0 && !i && (o = "."), o.length > 0 && w(e.charCodeAt(t - 1)) && (o += "\\"), !i && s === void 0 && e.includes(":")) {
    if (o.length >= 2 && i1(o.charCodeAt(0)) && o.charCodeAt(1) === s1) return `.\\${o}`;
    let a = e.indexOf(":");
    do
      if (a === t - 1 || w(e.charCodeAt(a + 1))) return `.\\${o}`;
    while ((a = e.indexOf(":", a + 1)) !== -1);
  }
  return s === void 0 ? i ? `\\${o}` : o : i ? `${s}\\${o}` : `${s}${o}`;
}, isAbsolute(e) {
  T(e, "path");
  const t = e.length;
  if (t === 0) return false;
  const r = e.charCodeAt(0);
  return w(r) || t > 2 && i1(r) && e.charCodeAt(1) === s1 && w(e.charCodeAt(2));
}, join(...e) {
  if (e.length === 0) return ".";
  let t, r;
  for (let n = 0; n < e.length; ++n) {
    const o = e[n];
    T(o, "path"), o.length > 0 && (t === void 0 ? t = r = o : t += `\\${o}`);
  }
  if (t === void 0) return ".";
  let s = true, i = 0;
  if (typeof r == "string" && w(r.charCodeAt(0))) {
    ++i;
    const n = r.length;
    n > 1 && w(r.charCodeAt(1)) && (++i, n > 2 && (w(r.charCodeAt(2)) ? ++i : s = false));
  }
  if (s) {
    for (; i < t.length && w(t.charCodeAt(i)); ) i++;
    i >= 2 && (t = `\\${t.slice(i)}`);
  }
  return O.normalize(t);
}, relative(e, t) {
  if (T(e, "from"), T(t, "to"), e === t) return "";
  const r = O.resolve(e), s = O.resolve(t);
  if (r === s || (e = r.toLowerCase(), t = s.toLowerCase(), e === t)) return "";
  if (r.length !== e.length || s.length !== t.length) {
    const A = r.split("\\"), I = s.split("\\");
    A[A.length - 1] === "" && A.pop(), I[I.length - 1] === "" && I.pop();
    const E = A.length, x = I.length, G = E < x ? E : x;
    let M;
    for (M = 0; M < G && A[M].toLowerCase() === I[M].toLowerCase(); M++) ;
    return M === 0 ? s : M === G ? x > G ? I.slice(M).join("\\") : E > G ? "..\\".repeat(E - 1 - M) + ".." : "" : "..\\".repeat(E - M) + I.slice(M).join("\\");
  }
  let i = 0;
  for (; i < e.length && e.charCodeAt(i) === j; ) i++;
  let n = e.length;
  for (; n - 1 > i && e.charCodeAt(n - 1) === j; ) n--;
  const o = n - i;
  let a = 0;
  for (; a < t.length && t.charCodeAt(a) === j; ) a++;
  let c = t.length;
  for (; c - 1 > a && t.charCodeAt(c - 1) === j; ) c--;
  const l = c - a, u = o < l ? o : l;
  let h = -1, p = 0;
  for (; p < u; p++) {
    const A = e.charCodeAt(i + p);
    if (A !== t.charCodeAt(a + p)) break;
    A === j && (h = p);
  }
  if (p !== u) {
    if (h === -1) return s;
  } else {
    if (l > u) {
      if (t.charCodeAt(a + p) === j) return s.slice(a + p + 1);
      if (p === 2) return s.slice(a + p);
    }
    o > u && (e.charCodeAt(i + p) === j ? h = p : p === 2 && (h = 3)), h === -1 && (h = 0);
  }
  let b = "";
  for (p = i + h + 1; p <= n; ++p) (p === n || e.charCodeAt(p) === j) && (b += b.length === 0 ? ".." : "\\..");
  return a += h, b.length > 0 ? `${b}${s.slice(a, c)}` : (s.charCodeAt(a) === j && ++a, s.slice(a, c));
}, toNamespacedPath(e) {
  if (typeof e != "string" || e.length === 0) return e;
  const t = O.resolve(e);
  if (t.length <= 2) return e;
  if (t.charCodeAt(0) === j) {
    if (t.charCodeAt(1) === j) {
      const r = t.charCodeAt(2);
      if (r !== Ds && r !== f1) return `\\\\?\\UNC\\${t.slice(2)}`;
    }
  } else if (i1(t.charCodeAt(0)) && t.charCodeAt(1) === s1 && t.charCodeAt(2) === j) return `\\\\?\\${t}`;
  return t;
}, dirname(e) {
  T(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let r = -1, s = 0;
  const i = e.charCodeAt(0);
  if (t === 1) return w(i) ? e : ".";
  if (w(i)) {
    if (r = s = 1, w(e.charCodeAt(1))) {
      let a = 2, c = a;
      for (; a < t && !w(e.charCodeAt(a)); ) a++;
      if (a < t && a !== c) {
        for (c = a; a < t && w(e.charCodeAt(a)); ) a++;
        if (a < t && a !== c) {
          for (c = a; a < t && !w(e.charCodeAt(a)); ) a++;
          if (a === t) return e;
          a !== c && (r = s = a + 1);
        }
      }
    }
  } else i1(i) && e.charCodeAt(1) === s1 && (r = t > 2 && w(e.charCodeAt(2)) ? 3 : 2, s = r);
  let n = -1, o = true;
  for (let a = t - 1; a >= s; --a) if (w(e.charCodeAt(a))) {
    if (!o) {
      n = a;
      break;
    }
  } else o = false;
  if (n === -1) {
    if (r === -1) return ".";
    n = r;
  }
  return e.slice(0, n);
}, basename(e, t) {
  t !== void 0 && T(t, "suffix"), T(e, "path");
  let r = 0, s = -1, i = true, n;
  if (e.length >= 2 && i1(e.charCodeAt(0)) && e.charCodeAt(1) === s1 && (r = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (n = e.length - 1; n >= r; --n) {
      const c = e.charCodeAt(n);
      if (w(c)) {
        if (!i) {
          r = n + 1;
          break;
        }
      } else a === -1 && (i = false, a = n + 1), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (s = n) : (o = -1, s = a));
    }
    return r === s ? s = a : s === -1 && (s = e.length), e.slice(r, s);
  }
  for (n = e.length - 1; n >= r; --n) if (w(e.charCodeAt(n))) {
    if (!i) {
      r = n + 1;
      break;
    }
  } else s === -1 && (i = false, s = n + 1);
  return s === -1 ? "" : e.slice(r, s);
}, extname(e) {
  T(e, "path");
  let t = 0, r = -1, s = 0, i = -1, n = true, o = 0;
  e.length >= 2 && e.charCodeAt(1) === s1 && i1(e.charCodeAt(0)) && (t = s = 2);
  for (let a = e.length - 1; a >= t; --a) {
    const c = e.charCodeAt(a);
    if (w(c)) {
      if (!n) {
        s = a + 1;
        break;
      }
      continue;
    }
    i === -1 && (n = false, i = a + 1), c === f1 ? r === -1 ? r = a : o !== 1 && (o = 1) : r !== -1 && (o = -1);
  }
  return r === -1 || i === -1 || o === 0 || o === 1 && r === i - 1 && r === s + 1 ? "" : e.slice(r, i);
}, format: yt.bind(null, "\\"), parse(e) {
  T(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const r = e.length;
  let s = 0, i = e.charCodeAt(0);
  if (r === 1) return w(i) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
  if (w(i)) {
    if (s = 1, w(e.charCodeAt(1))) {
      let h = 2, p = h;
      for (; h < r && !w(e.charCodeAt(h)); ) h++;
      if (h < r && h !== p) {
        for (p = h; h < r && w(e.charCodeAt(h)); ) h++;
        if (h < r && h !== p) {
          for (p = h; h < r && !w(e.charCodeAt(h)); ) h++;
          h === r ? s = h : h !== p && (s = h + 1);
        }
      }
    }
  } else if (i1(i) && e.charCodeAt(1) === s1) {
    if (r <= 2) return t.root = t.dir = e, t;
    if (s = 2, w(e.charCodeAt(2))) {
      if (r === 3) return t.root = t.dir = e, t;
      s = 3;
    }
  }
  s > 0 && (t.root = e.slice(0, s));
  let n = -1, o = s, a = -1, c = true, l = e.length - 1, u = 0;
  for (; l >= s; --l) {
    if (i = e.charCodeAt(l), w(i)) {
      if (!c) {
        o = l + 1;
        break;
      }
      continue;
    }
    a === -1 && (c = false, a = l + 1), i === f1 ? n === -1 ? n = l : u !== 1 && (u = 1) : n !== -1 && (u = -1);
  }
  return a !== -1 && (n === -1 || u === 0 || u === 1 && n === a - 1 && n === o + 1 ? t.base = t.name = e.slice(o, a) : (t.name = e.slice(o, n), t.base = e.slice(o, a), t.ext = e.slice(n, a))), o > 0 && o !== s ? t.dir = e.slice(0, o - 1) : t.dir = t.root, t;
}, sep: "\\", delimiter: ";", win32: null, posix: null }, Ps = (() => {
  if (H) {
    const e = /\\/g;
    return () => {
      const t = re().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => re();
})(), D = { resolve(...e) {
  let t = "", r = false;
  for (let s = e.length - 1; s >= 0 && !r; s--) {
    const i = e[s];
    T(i, `paths[${s}]`), i.length !== 0 && (t = `${i}/${t}`, r = i.charCodeAt(0) === $);
  }
  if (!r) {
    const s = Ps();
    t = `${s}/${t}`, r = s.charCodeAt(0) === $;
  }
  return t = se(t, !r, "/", Le), r ? `/${t}` : t.length > 0 ? t : ".";
}, normalize(e) {
  if (T(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === $, r = e.charCodeAt(e.length - 1) === $;
  return e = se(e, !t, "/", Le), e.length === 0 ? t ? "/" : r ? "./" : "." : (r && (e += "/"), t ? `/${e}` : e);
}, isAbsolute(e) {
  return T(e, "path"), e.length > 0 && e.charCodeAt(0) === $;
}, join(...e) {
  if (e.length === 0) return ".";
  const t = [];
  for (let r = 0; r < e.length; ++r) {
    const s = e[r];
    T(s, "path"), s.length > 0 && t.push(s);
  }
  return t.length === 0 ? "." : D.normalize(t.join("/"));
}, relative(e, t) {
  if (T(e, "from"), T(t, "to"), e === t || (e = D.resolve(e), t = D.resolve(t), e === t)) return "";
  const r = 1, s = e.length, i = s - r, n = 1, o = t.length - n, a = i < o ? i : o;
  let c = -1, l = 0;
  for (; l < a; l++) {
    const h = e.charCodeAt(r + l);
    if (h !== t.charCodeAt(n + l)) break;
    h === $ && (c = l);
  }
  if (l === a) if (o > a) {
    if (t.charCodeAt(n + l) === $) return t.slice(n + l + 1);
    if (l === 0) return t.slice(n + l);
  } else i > a && (e.charCodeAt(r + l) === $ ? c = l : l === 0 && (c = 0));
  let u = "";
  for (l = r + c + 1; l <= s; ++l) (l === s || e.charCodeAt(l) === $) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${t.slice(n + c)}`;
}, toNamespacedPath(e) {
  return e;
}, dirname(e) {
  if (T(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === $;
  let r = -1, s = true;
  for (let i = e.length - 1; i >= 1; --i) if (e.charCodeAt(i) === $) {
    if (!s) {
      r = i;
      break;
    }
  } else s = false;
  return r === -1 ? t ? "/" : "." : t && r === 1 ? "//" : e.slice(0, r);
}, basename(e, t) {
  t !== void 0 && T(t, "suffix"), T(e, "path");
  let r = 0, s = -1, i = true, n;
  if (t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (n = e.length - 1; n >= 0; --n) {
      const c = e.charCodeAt(n);
      if (c === $) {
        if (!i) {
          r = n + 1;
          break;
        }
      } else a === -1 && (i = false, a = n + 1), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (s = n) : (o = -1, s = a));
    }
    return r === s ? s = a : s === -1 && (s = e.length), e.slice(r, s);
  }
  for (n = e.length - 1; n >= 0; --n) if (e.charCodeAt(n) === $) {
    if (!i) {
      r = n + 1;
      break;
    }
  } else s === -1 && (i = false, s = n + 1);
  return s === -1 ? "" : e.slice(r, s);
}, extname(e) {
  T(e, "path");
  let t = -1, r = 0, s = -1, i = true, n = 0;
  for (let o = e.length - 1; o >= 0; --o) {
    const a = e[o];
    if (a === "/") {
      if (!i) {
        r = o + 1;
        break;
      }
      continue;
    }
    s === -1 && (i = false, s = o + 1), a === "." ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1);
  }
  return t === -1 || s === -1 || n === 0 || n === 1 && t === s - 1 && t === r + 1 ? "" : e.slice(t, s);
}, format: yt.bind(null, "/"), parse(e) {
  T(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const r = e.charCodeAt(0) === $;
  let s;
  r ? (t.root = "/", s = 1) : s = 0;
  let i = -1, n = 0, o = -1, a = true, c = e.length - 1, l = 0;
  for (; c >= s; --c) {
    const u = e.charCodeAt(c);
    if (u === $) {
      if (!a) {
        n = c + 1;
        break;
      }
      continue;
    }
    o === -1 && (a = false, o = c + 1), u === f1 ? i === -1 ? i = c : l !== 1 && (l = 1) : i !== -1 && (l = -1);
  }
  if (o !== -1) {
    const u = n === 0 && r ? 1 : n;
    i === -1 || l === 0 || l === 1 && i === o - 1 && i === n + 1 ? t.base = t.name = e.slice(u, o) : (t.name = e.slice(u, i), t.base = e.slice(u, o), t.ext = e.slice(i, o));
  }
  return n > 0 ? t.dir = e.slice(0, n - 1) : r && (t.dir = "/"), t;
}, sep: "/", delimiter: ":", win32: null, posix: null };
D.win32 = O.win32 = O, D.posix = O.posix = D;
var wt = H ? O.normalize : D.normalize, L2 = H ? O.isAbsolute : D.isAbsolute, d1 = H ? O.join : D.join, Rs = H ? O.resolve : D.resolve, Is = H ? O.relative : D.relative, Ts = H ? O.dirname : D.dirname, E2 = H ? O.basename : D.basename, D2 = H ? O.extname : D.extname, k2 = H ? O.format : D.format, S2 = H ? O.parse : D.parse, P2 = H ? O.toNamespacedPath : D.toNamespacedPath, ie = H ? O.sep : D.sep, R2 = H ? O.delimiter : D.delimiter;
function xs(e) {
  return e;
}
var Os = class {
  constructor(e, t) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = xs) : (this._fn = t, this._computeKey = e.getCacheKey);
  }
  get(e) {
    const t = this._computeKey(e);
    return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
  }
}, Ee = class {
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
function Ms(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Ns(e, t, r = 0, s = e.length, i = 0, n = t.length) {
  for (; r < s && i < n; r++, i++) {
    const c = e.charCodeAt(r), l = t.charCodeAt(i);
    if (c < l) return -1;
    if (c > l) return 1;
  }
  const o = s - r, a = n - i;
  return o < a ? -1 : o > a ? 1 : 0;
}
function bt(e, t, r = 0, s = e.length, i = 0, n = t.length) {
  for (; r < s && i < n; r++, i++) {
    let c = e.charCodeAt(r), l = t.charCodeAt(i);
    if (c === l) continue;
    if (c >= 128 || l >= 128) return Ns(e.toLowerCase(), t.toLowerCase(), r, s, i, n);
    Ct(c) && (c -= 32), Ct(l) && (l -= 32);
    const u = c - l;
    if (u !== 0) return u;
  }
  const o = s - r, a = n - i;
  return o < a ? -1 : o > a ? 1 : 0;
}
function Ct(e) {
  return e >= 97 && e <= 122;
}
function At(e) {
  return e >= 65 && e <= 90;
}
function $s(e, t) {
  return e.length === t.length && bt(e, t) === 0;
}
var Us = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, zs = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, qs = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, I2 = new RegExp("(?:" + [Us.source, zs.source, qs.source].join("|") + ")", "g"), T2 = "\uFEFF", Fs = class B1 {
  static getInstance() {
    return B1._INSTANCE || (B1._INSTANCE = new B1()), B1._INSTANCE;
  }
  constructor() {
    this._data = Ws();
  }
  getGraphemeBreakType(t) {
    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
    if (t < 127) return 0;
    const r = this._data, s = r.length / 3;
    let i = 1;
    for (; i <= s; ) if (t < r[3 * i]) i = 2 * i;
    else if (t > r[3 * i + 1]) i = 2 * i + 1;
    else return r[3 * i + 2];
    return 0;
  }
};
Fs._INSTANCE = null;
function Ws() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var A1 = class qe {
  constructor(t) {
    this.confusableDictionary = t;
  }
  static getInstance(t) {
    return qe.cache.get(Array.from(t).join(","));
  }
  static getLocales() {
    return qe._locales.value;
  }
  isAmbiguous(t) {
    return this.confusableDictionary.has(t);
  }
  containsAmbiguousCharacter(t) {
    for (let r = 0; r < t.length; r++) {
      const s = t.codePointAt(r);
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
A1.ambiguousCharacterData = new Ee(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), A1.cache = new Os((e) => {
  const t = e.split(",");
  function r(u) {
    const h = /* @__PURE__ */ new Map();
    for (let p = 0; p < u.length; p += 2) h.set(u[p], u[p + 1]);
    return h;
  }
  function s(u, h) {
    const p = new Map(u);
    for (const [b, A] of h) p.set(b, A);
    return p;
  }
  function i(u, h) {
    if (!u) return h;
    const p = /* @__PURE__ */ new Map();
    for (const [b, A] of u) h.has(b) && p.set(b, A);
    return p;
  }
  const n = A1.ambiguousCharacterData.value;
  let o = t.filter((u) => !u.startsWith("_") && u in n);
  o.length === 0 && (o = ["_default"]);
  let a;
  for (const u of o) {
    const h = r(n[u]);
    a = i(a, h);
  }
  const c = r(n._common), l = s(c, a);
  return new A1(l);
}), A1._locales = new Ee(() => Object.keys(A1.ambiguousCharacterData.value).filter((e) => !e.startsWith("_")));
var Bs = class j1 {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(j1.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return j1.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let r = 0; r < t.length; r++) {
      const s = t.codePointAt(r);
      if (typeof s == "number" && (j1.isInvisibleCharacter(s) || s === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return j1.getData();
  }
};
Bs._data = void 0;
function h1(e) {
  return e === 47 || e === 92;
}
function Lt(e) {
  return e.replace(/[\\/]/g, D.sep);
}
function js(e) {
  return e.indexOf("/") === -1 && (e = Lt(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function Et(e, t = D.sep) {
  if (!e) return "";
  const r = e.length, s = e.charCodeAt(0);
  if (h1(s)) {
    if (h1(e.charCodeAt(1)) && !h1(e.charCodeAt(2))) {
      let n = 3;
      const o = n;
      for (; n < r && !h1(e.charCodeAt(n)); n++) ;
      if (o !== n && !h1(e.charCodeAt(n + 1))) {
        for (n += 1; n < r; n++) if (h1(e.charCodeAt(n))) return e.slice(0, n + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (Dt(s) && e.charCodeAt(1) === 58) return h1(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let i = e.indexOf("://");
  if (i !== -1) {
    for (i += 3; i < r; i++) if (h1(e.charCodeAt(i))) return e.slice(0, i + 1);
  }
  return "";
}
function Hs(e, t, r) {
  return r === 0 ? true : e.charCodeAt(0) !== t.charCodeAt(0) ? false : r === 1 ? true : e.charCodeAt(r - 1) !== t.charCodeAt(r - 1) ? false : e.startsWith(t);
}
function Gs(e, t, r) {
  for (let s = 0; s < r; s++) {
    let i = e.charCodeAt(s), n = t.charCodeAt(s);
    if (i !== n) {
      if (i >= 128 || n >= 128) return bt(e, t, s, r, s, r) === 0;
      if (i >= 97 && i <= 122 && (i -= 32), n >= 97 && n <= 122 && (n -= 32), i !== n) return false;
    }
  }
  return true;
}
function De(e, t, r, s = ie) {
  if (e === t) return true;
  if (!e || !t) return false;
  const i = e.length, n = t.length;
  if (n > i) return false;
  const o = s.charCodeAt(0), a = t.charCodeAt(n - 1) === o;
  if (n < i && !a && e.charCodeAt(n) !== o) return false;
  if (r) {
    if (!Gs(e, t, n)) return false;
  } else if (!Hs(e, t, n)) return false;
  return n === i || a ? true : e.charCodeAt(n) === o;
}
function Dt(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function Vs(e) {
  const t = wt(e);
  return Y ? e.length > 3 ? false : Ks(t) && (e.length === 2 || t.charCodeAt(2) === 92) : t === D.sep;
}
function Ks(e, t = Y) {
  return t ? Dt(e.charCodeAt(0)) && e.charCodeAt(1) === 58 : false;
}
var Qs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", Js = "BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";
function Ys(e, t, r = 8) {
  let s = "";
  for (let n = 0; n < r; n++) {
    let o;
    n === 0 && Y && !t && (r === 3 || r === 4) ? o = Js : o = Qs, s += o.charAt(Math.floor(Math.random() * o.length));
  }
  let i;
  return t ? i = `${t}-${s}` : i = s, e ? d1(e, i) : i;
}
var M1 = typeof Buffer < "u", Zs = new Ee(() => new Uint8Array(256)), L1, ke, Xs = 512 * 1024, p1 = null, Se = false, kt = false, ei = 1 / 0, St, ti = 1 / 0, Pt;
function Rt(e, t) {
  if (Pt && e.byteLength >= ti) try {
    Pt({ buffer: e, byteLength: e.byteLength, source: t });
  } catch {
  }
}
var K = class W {
  static alloc(t) {
    let r;
    return M1 ? r = new W(Buffer.allocUnsafe(t)) : r = new W(new Uint8Array(t)), Rt(r, "alloc"), r;
  }
  static wrap(t) {
    M1 && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength));
    const r = new W(t);
    return Rt(r, "wrap"), r;
  }
  static fromString(t, r) {
    return !(r?.dontUseNodeBuffer || false) && M1 ? new W(Buffer.from(t)) : (L1 || (L1 = new TextEncoder()), new W(L1.encode(t)));
  }
  static withPooledString(t, r) {
    if (M1) return r(W.fromString(t));
    if (Se) return kt || (kt = true, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), r(W.fromString(t));
    const s = t.length * 3;
    if (s > Xs) return r(W.fromString(t));
    if (L1 || (L1 = new TextEncoder()), !p1 || p1.byteLength < s) {
      let n = p1 ? p1.byteLength * 2 : 16384;
      for (; n < s; ) n *= 2;
      p1 = new Uint8Array(n);
    }
    const i = L1.encodeInto(t, p1).written;
    Se = true;
    try {
      return r(new W(p1.subarray(0, i)));
    } finally {
      Se = false;
    }
  }
  static fromByteArray(t) {
    const r = W.alloc(t.length);
    for (let s = 0, i = t.length; s < i; s++) r.buffer[s] = t[s];
    return r;
  }
  static concat(t, r) {
    if (typeof r > "u") {
      r = 0;
      for (let n = 0, o = t.length; n < o; n++) r += t[n].byteLength;
    }
    const s = W.alloc(r);
    let i = 0;
    for (let n = 0, o = t.length; n < o; n++) {
      const a = t[n];
      s.set(a, i), i += a.byteLength;
    }
    return s;
  }
  constructor(t) {
    this.buffer = t, this.byteLength = this.buffer.byteLength;
  }
  clone() {
    const t = W.alloc(this.byteLength);
    return t.set(this), t;
  }
  toString() {
    if (M1) return this.buffer.toString();
    if (St && this.buffer.byteLength > ei) try {
      St(this.buffer.byteLength);
    } catch {
    }
    return ke || (ke = new TextDecoder()), ke.decode(this.buffer);
  }
  slice(t, r) {
    return new W(this.buffer.subarray(t, r));
  }
  set(t, r) {
    if (t instanceof W) this.buffer.set(t.buffer, r);
    else if (t instanceof Uint8Array) this.buffer.set(t, r);
    else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), r);
    else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), r);
    else throw new Error("Unknown argument 'array'");
  }
  readUInt32BE(t) {
    return si(this.buffer, t);
  }
  writeUInt32BE(t, r) {
    ii(this.buffer, t, r);
  }
  readUInt32LE(t) {
    return ni(this.buffer, t);
  }
  writeUInt32LE(t, r) {
    oi(this.buffer, t, r);
  }
  readUInt8(t) {
    return ai(this.buffer, t);
  }
  writeUInt8(t, r) {
    li(this.buffer, t, r);
  }
  indexOf(t, r = 0) {
    return ri(this.buffer, t instanceof W ? t.buffer : t, r);
  }
  equals(t) {
    return this === t ? true : this.byteLength !== t.byteLength ? false : this.buffer.every((r, s) => r === t.buffer[s]);
  }
};
function ri(e, t, r = 0) {
  const s = t.byteLength, i = e.byteLength;
  if (s === 0) return 0;
  if (s === 1) return e.indexOf(t[0]);
  if (s > i - r) return -1;
  const n = Zs.value;
  n.fill(t.length);
  for (let l = 0; l < t.length; l++) n[t[l]] = t.length - l - 1;
  let o = r + t.length - 1, a = o, c = -1;
  for (; o < i; ) if (e[o] === t[a]) {
    if (a === 0) {
      c = o;
      break;
    }
    o--, a--;
  } else o += Math.max(t.length - a, n[e[o]]), a = t.length - 1;
  return c;
}
function si(e, t) {
  return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function ii(e, t, r) {
  e[r + 3] = t, t = t >>> 8, e[r + 2] = t, t = t >>> 8, e[r + 1] = t, t = t >>> 8, e[r] = t;
}
function ni(e, t) {
  return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function oi(e, t, r) {
  e[r + 0] = t & 255, t = t >>> 8, e[r + 1] = t & 255, t = t >>> 8, e[r + 2] = t & 255, t = t >>> 8, e[r + 3] = t & 255;
}
function ai(e, t) {
  return e[t];
}
function li(e, t, r) {
  e[r] = t;
}
var ci = /^\w[\w\d+.-]*$/, hi = /^\//, ui = /^\/\//;
function fi(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !ci.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!hi.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (ui.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function di(e, t) {
  return !e && !t ? "file" : e;
}
function pi(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== Z && (t = Z + t) : t = Z;
      break;
  }
  return t;
}
var R = "", Z = "/", gi = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, Q = class he {
  static isUri(t) {
    return t instanceof he ? true : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : false;
  }
  constructor(t, r, s, i, n, o = false) {
    typeof t == "object" ? (this.scheme = t.scheme || R, this.authority = t.authority || R, this.path = t.path || R, this.query = t.query || R, this.fragment = t.fragment || R) : (this.scheme = di(t, o), this.authority = r || R, this.path = pi(this.scheme, s || R), this.query = i || R, this.fragment = n || R, fi(this, o));
  }
  get fsPath() {
    return ne(this, false);
  }
  with(t) {
    if (!t) return this;
    let { scheme: r, authority: s, path: i, query: n, fragment: o } = t;
    return r === void 0 ? r = this.scheme : r === null && (r = R), s === void 0 ? s = this.authority : s === null && (s = R), i === void 0 ? i = this.path : i === null && (i = R), n === void 0 ? n = this.query : n === null && (n = R), o === void 0 ? o = this.fragment : o === null && (o = R), r === this.scheme && s === this.authority && i === this.path && n === this.query && o === this.fragment ? this : new E1(r, s, i, n, o);
  }
  static parse(t, r = false) {
    const s = gi.exec(t);
    return s ? new E1(s[2] || R, oe(s[4] || R), oe(s[5] || R), oe(s[7] || R), oe(s[9] || R), r) : new E1(R, R, R, R, R);
  }
  static file(t) {
    let r = R;
    if (Y && (t = t.replace(/\\/g, Z)), t[0] === Z && t[1] === Z) {
      const s = t.indexOf(Z, 2);
      s === -1 ? (r = t.substring(2), t = Z) : (r = t.substring(2, s), t = t.substring(s) || Z);
    }
    return new E1("file", r, t, R, R);
  }
  static from(t, r) {
    return new E1(t.scheme, t.authority, t.path, t.query, t.fragment, r);
  }
  static joinPath(t, ...r) {
    if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let s;
    return Y && t.scheme === "file" ? s = he.file(O.join(ne(t, true), ...r)).path : s = D.join(t.path, ...r), t.with({ path: s });
  }
  toString(t = false) {
    return Pe(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof he) return t;
      {
        const r = new E1(t);
        return r._formatted = t.external ?? null, r._fsPath = t._sep === It ? t.fsPath ?? null : null, r;
      }
    } else return t;
  }
  [/* @__PURE__ */ Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
}, It = Y ? 1 : void 0, E1 = class extends Q {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = ne(this, false)), this._fsPath;
  }
  toString(e = false) {
    return e ? Pe(this, true) : (this._formatted || (this._formatted = Pe(this, false)), this._formatted);
  }
  toJSON() {
    const e = { $mid: 1 };
    return this._fsPath && (e.fsPath = this._fsPath, e._sep = It), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
  }
}, Tt = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function xt(e, t, r) {
  let s, i = -1;
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || r && o === 91 || r && o === 93 || r && o === 58) i !== -1 && (s += encodeURIComponent(e.substring(i, n)), i = -1), s !== void 0 && (s += e.charAt(n));
    else {
      s === void 0 && (s = e.substr(0, n));
      const a = Tt[o];
      a !== void 0 ? (i !== -1 && (s += encodeURIComponent(e.substring(i, n)), i = -1), s += a) : i === -1 && (i = n);
    }
  }
  return i !== -1 && (s += encodeURIComponent(e.substring(i))), s !== void 0 ? s : e;
}
function mi(e) {
  let t;
  for (let r = 0; r < e.length; r++) {
    const s = e.charCodeAt(r);
    s === 35 || s === 63 ? (t === void 0 && (t = e.substr(0, r)), t += Tt[s]) : t !== void 0 && (t += e[r]);
  }
  return t !== void 0 ? t : e;
}
function ne(e, t) {
  let r;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? r = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? r = e.path.substr(1) : r = e.path[1].toLowerCase() + e.path.substr(2) : r = e.path, Y && (r = r.replace(/\//g, "\\")), r;
}
function Pe(e, t) {
  const r = t ? mi : xt;
  let s = "", { scheme: i, authority: n, path: o, query: a, fragment: c } = e;
  if (i && (s += i, s += ":"), (n || i === "file") && (s += Z, s += Z), n) {
    let l = n.indexOf("@");
    if (l !== -1) {
      const u = n.substr(0, l);
      n = n.substr(l + 1), l = u.lastIndexOf(":"), l === -1 ? s += r(u, false, false) : (s += r(u.substr(0, l), false, false), s += ":", s += r(u.substr(l + 1), false, true)), s += "@";
    }
    n = n.toLowerCase(), l = n.lastIndexOf(":"), l === -1 ? s += r(n, false, true) : (s += r(n.substr(0, l), false, true), s += n.substr(l));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      const l = o.charCodeAt(1);
      l >= 65 && l <= 90 && (o = `/${String.fromCharCode(l + 32)}:${o.substr(3)}`);
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      const l = o.charCodeAt(0);
      l >= 65 && l <= 90 && (o = `${String.fromCharCode(l + 32)}:${o.substr(2)}`);
    }
    s += r(o, true, false);
  }
  return a && (s += "?", s += r(a, false, false)), c && (s += "#", s += t ? c : xt(c, false, false)), s;
}
function Ot(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + Ot(e.substr(3)) : e;
  }
}
var Mt = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function oe(e) {
  return e.match(Mt) ? e.replace(Mt, (t) => Ot(t)) : e;
}
var U;
((e) => {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})(U || (U = {}));
var vi = "tkn", _i = class {
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
    this._serverRootPath = D.join(t ?? "/", wi(e));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return D.join(this._serverRootPath, U.vscodeRemoteResource);
  }
  set(e, t, r) {
    this._hosts[e] = t, this._ports[e] = r;
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
      return K1(o), e;
    }
    const t = e.authority;
    let r = this._hosts[t];
    r && r.indexOf(":") !== -1 && r.indexOf("[") === -1 && (r = `[${r}]`);
    const s = this._ports[t], i = this._connectionTokens[t];
    let n = `path=${encodeURIComponent(e.path)}`;
    return typeof i == "string" && (n += `&${vi}=${encodeURIComponent(i)}`), Q.from({ scheme: ps ? this._preferredWebSchema : U.vscodeRemoteResource, authority: `${r}:${s}`, path: this._remoteResourcesPath, query: n });
  }
}, yi = new _i();
function wi(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var bi = "vscode-app", Nt = class ue {
  asBrowserUri(t) {
    const r = this.toUri(t);
    return this.uriToBrowserUri(r);
  }
  uriToBrowserUri(t) {
    return t.scheme === U.vscodeRemote ? yi.rewrite(t) : t.scheme === U.file && (ds || ms === `${U.vscodeFileResource}://${ue.FALLBACK_AUTHORITY}`) ? t.with({ scheme: U.vscodeFileResource, authority: t.authority || ue.FALLBACK_AUTHORITY, query: null, fragment: null }) : t;
  }
  asFileUri(t) {
    const r = this.toUri(t);
    return this.uriToFileUri(r);
  }
  uriToFileUri(t) {
    return t.scheme === U.vscodeFileResource ? t.with({ scheme: U.file, authority: t.authority !== ue.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
  }
  toUri(t) {
    if (Q.isUri(t)) return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const r = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(r)) return Q.joinPath(Q.parse(r, true), t);
      const s = d1(r, t);
      return Q.file(s);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
Nt.FALLBACK_AUTHORITY = bi;
var Ci = Nt, x2 = new Ci(), O2 = Object.freeze({ "Cache-Control": "no-cache, no-store" }), M2 = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), $t;
((e) => {
  const t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const r = "vscode-coi";
  function s(n) {
    let o;
    typeof n == "string" ? o = new URL(n).searchParams : n instanceof URL ? o = n.searchParams : Q.isUri(n) && (o = new URL(n.toString(true)).searchParams);
    const a = o?.get(r);
    if (a) return t.get(a);
  }
  e.getHeadersFromQuery = s;
  function i(n, o, a) {
    if (!globalThis.crossOriginIsolated) return;
    const c = o && a ? "3" : a ? "2" : "1";
    n instanceof URLSearchParams ? n.set(r, c) : n[r] = c;
  }
  e.addSearchParam = i;
})($t || ($t = {}));
function n1(e) {
  return ne(e, true);
}
var Re = class {
  constructor(e) {
    this._ignorePathCasing = e;
  }
  compare(e, t, r = false) {
    return e === t ? 0 : Ms(this.getComparisonKey(e, r), this.getComparisonKey(t, r));
  }
  isEqual(e, t, r = false) {
    return e === t ? true : !e || !t ? false : this.getComparisonKey(e, r) === this.getComparisonKey(t, r);
  }
  getComparisonKey(e, t = false) {
    return e.with({ path: this._ignorePathCasing(e) ? e.path.toLowerCase() : void 0, fragment: t ? null : void 0 }).toString();
  }
  ignorePathCasing(e) {
    return this._ignorePathCasing(e);
  }
  isEqualOrParent(e, t, r = false) {
    if (e.scheme === t.scheme) {
      if (e.scheme === U.file) return De(n1(e), n1(t), this._ignorePathCasing(e)) && e.query === t.query && (r || e.fragment === t.fragment);
      if (Ut(e.authority, t.authority)) return De(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (r || e.fragment === t.fragment);
    }
    return false;
  }
  joinPath(e, ...t) {
    return Q.joinPath(e, ...t);
  }
  basenameOrAuthority(e) {
    return Li(e) || e.authority;
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
    return e.scheme === U.file ? t = Q.file(Ts(n1(e))).path : (t = D.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
  }
  normalizePath(e) {
    if (!e.path.length) return e;
    let t;
    return e.scheme === U.file ? t = Q.file(wt(n1(e))).path : t = D.normalize(e.path), e.with({ path: t });
  }
  relativePath(e, t) {
    if (e.scheme !== t.scheme || !Ut(e.authority, t.authority)) return;
    if (e.scheme === U.file) {
      const i = Is(n1(e), n1(t));
      return Y ? Lt(i) : i;
    }
    let r = e.path || "/";
    const s = t.path || "/";
    if (this._ignorePathCasing(e)) {
      let i = 0;
      for (const n = Math.min(r.length, s.length); i < n && !(r.charCodeAt(i) !== s.charCodeAt(i) && r.charAt(i).toLowerCase() !== s.charAt(i).toLowerCase()); i++) ;
      r = s.substr(0, i) + r.substr(i);
    }
    return D.relative(r, s);
  }
  resolvePath(e, t) {
    if (e.scheme === U.file) {
      const r = Q.file(Rs(n1(e), t));
      return e.with({ authority: r.authority, path: r.path });
    }
    return t = js(t), e.with({ path: D.resolve(e.path, t) });
  }
  isAbsolutePath(e) {
    return !!e.path && e.path[0] === "/";
  }
  isEqualAuthority(e, t) {
    return e === t || e !== void 0 && t !== void 0 && $s(e, t);
  }
  hasTrailingPathSeparator(e, t = ie) {
    if (e.scheme === U.file) {
      const r = n1(e);
      return r.length > Et(r).length && r[r.length - 1] === t;
    } else {
      const r = e.path;
      return r.length > 1 && r.charCodeAt(r.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
    }
  }
  removeTrailingPathSeparator(e, t = ie) {
    return zt(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
  }
  addTrailingPathSeparator(e, t = ie) {
    let r = false;
    if (e.scheme === U.file) {
      const s = n1(e);
      r = s !== void 0 && s.length === Et(s).length && s[s.length - 1] === t;
    } else {
      t = "/";
      const s = e.path;
      r = s.length === 1 && s.charCodeAt(s.length - 1) === 47;
    }
    return !r && !zt(e, t) ? e.with({ path: e.path + "/" }) : e;
  }
}, L = new Re(() => false), Ai = new Re((e) => e.scheme === U.file ? !mt : true), N2 = new Re((e) => true), $2 = L.isEqual.bind(L), U2 = L.isEqualOrParent.bind(L), z2 = L.getComparisonKey.bind(L), q2 = L.basenameOrAuthority.bind(L), Li = L.basename.bind(L), F2 = L.extname.bind(L), W2 = L.dirname.bind(L), B2 = L.joinPath.bind(L), j2 = L.normalizePath.bind(L), H2 = L.relativePath.bind(L), G2 = L.resolvePath.bind(L), V2 = L.isAbsolutePath.bind(L), Ut = L.isEqualAuthority.bind(L), zt = L.hasTrailingPathSeparator.bind(L), K2 = L.removeTrailingPathSeparator.bind(L), Q2 = L.addTrailingPathSeparator.bind(L), qt;
((e) => {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(r) {
    const s = /* @__PURE__ */ new Map();
    r.path.substring(r.path.indexOf(";") + 1, r.path.lastIndexOf(";")).split(";").forEach((o) => {
      const [a, c] = o.split(":");
      a && c && s.set(a, c);
    });
    const n = r.path.substring(0, r.path.indexOf(";"));
    return n && s.set(e.META_DATA_MIME, n), s;
  }
  e.parseMetaData = t;
})(qt || (qt = {}));
var J2 = /* @__PURE__ */ Symbol("MicrotaskDelay");
function Ie(e) {
  const t = new ht(), r = e(t.token);
  let s = false;
  const i = new Promise((n, o) => {
    const a = t.token.onCancellationRequested(() => {
      s = true, a.dispose(), o(new a1());
    });
    Promise.resolve(r).then((c) => {
      a.dispose(), t.dispose(), s ? jr(c) && c.dispose() : n(c);
    }, (c) => {
      a.dispose(), t.dispose(), o(c);
    });
  });
  return new class {
    cancel() {
      t.cancel(), t.dispose();
    }
    then(n, o) {
      return i.then(n, o);
    }
    catch(n) {
      return this.then(void 0, n);
    }
    finally(n) {
      return i.finally(n);
    }
  }();
}
function Ft(e, t) {
  return t ? new Promise((r, s) => {
    const i = setTimeout(() => {
      n.dispose(), r();
    }, e), n = t.onCancellationRequested(() => {
      clearTimeout(i), n.dispose(), s(new a1());
    });
  }) : Ie((r) => Ft(e, r));
}
function Ei(e, t = 0, r) {
  const s = setTimeout(() => {
    e(), r && i.dispose();
  }, t), i = Q1(() => {
    clearTimeout(s), r?.delete(i);
  });
  return r?.add(i), i;
}
var Di = class {
  constructor(e) {
    this._size = 0, this._isDisposed = false, this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onDrained = new V();
  }
  whenIdle() {
    return this.size > 0 ? X.toPromise(this.onDrained) : Promise.resolve();
  }
  get onDrained() {
    return this._onDrained.event;
  }
  get size() {
    return this._size;
  }
  queue(e) {
    if (this._isDisposed) throw new Error("Object has been disposed");
    return this._size++, new Promise((t, r) => {
      this.outstandingPromises.push({ factory: e, c: t, e: r }), this.consume();
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
}, ki = class extends Di {
  constructor() {
    super(1);
  }
}, Si = class {
  constructor() {
    this.queues = /* @__PURE__ */ new Map(), this.drainers = /* @__PURE__ */ new Set(), this.drainListeners = void 0, this.drainListenerCount = 0, this._isDisposed = false;
  }
  async whenDrained() {
    if (this.isDrained()) return;
    const e = new Ri();
    return this.drainers.add(e), e.p;
  }
  isDrained() {
    for (const [, e] of this.queues) if (e.size > 0) return false;
    return true;
  }
  queueSize(e, t = L) {
    const r = t.getComparisonKey(e);
    return this.queues.get(r)?.size ?? 0;
  }
  queueFor(e, t, r = L) {
    if (this._isDisposed) return t();
    const s = r.getComparisonKey(e);
    let i = this.queues.get(s);
    if (!i) {
      i = new ki();
      const n = this.drainListenerCount++, o = X.once(i.onDrained)(() => {
        i?.dispose(), this.queues.delete(s), this.onDidQueueDrain(), this.drainListeners?.deleteAndDispose(n), this.drainListeners?.size === 0 && (this.drainListeners.dispose(), this.drainListeners = void 0);
      });
      this.drainListeners || (this.drainListeners = new Gr()), this.drainListeners.set(n, o), this.queues.set(s, i);
    }
    return i.queue(t);
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
}, Pi, Te;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? Te = (e, t, r) => {
    _s(() => {
      if (s) return;
      const i = Date.now() + 15;
      t(Object.freeze({ didTimeout: true, timeRemaining() {
        return Math.max(0, i - Date.now());
      } }));
    });
    let s = false;
    return { dispose() {
      s || (s = true);
    } };
  } : Te = (e, t, r) => {
    const s = e.requestIdleCallback(t, typeof r == "number" ? { timeout: r } : void 0);
    let i = false;
    return { dispose() {
      i || (i = true, e.cancelIdleCallback(s));
    } };
  }, Pi = (e, t) => Te(globalThis, e, t);
})();
var Ri = class ur {
  static fromPromise(t) {
    const r = new ur();
    return r.settleWith(t), r;
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
    this.p = new Promise((t, r) => {
      this.completeCallback = t, this.errorCallback = r;
    });
  }
  complete(t) {
    return new Promise((r) => {
      this.completeCallback(t), this.outcome = { outcome: 0, value: t }, r();
    });
  }
  error(t) {
    return new Promise((r) => {
      this.errorCallback(t), this.outcome = { outcome: 1, value: t }, r();
    });
  }
  settleWith(t) {
    return t.then((r) => this.complete(r), (r) => this.error(r));
  }
  cancel() {
    return this.error(new a1());
  }
}, Wt;
((e) => {
  async function t(s) {
    let i;
    const n = await Promise.all(s.map((o) => o.then((a) => a, (a) => {
      i || (i = a);
    })));
    if (typeof i < "u") throw i;
    return n;
  }
  e.settled = t;
  function r(s) {
    return new Promise(async (i, n) => {
      try {
        await s(i, n);
      } catch (o) {
        n(o);
      }
    });
  }
  e.withAsyncBody = r;
})(Wt || (Wt = {}));
var Bt = class J {
  static fromArray(t) {
    return new J((r) => {
      r.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new J(async (r) => {
      r.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new J(async (r) => {
      await Promise.all(t.map(async (s) => r.emitOne(await s)));
    });
  }
  static merge(t) {
    return new J(async (r) => {
      await Promise.all(t.map(async (s) => {
        for await (const i of s) r.emitOne(i);
      }));
    });
  }
  constructor(t, r) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = r, this._onStateChanged = new V(), queueMicrotask(async () => {
      const s = { emitOne: (i) => this.emitOne(i), emitMany: (i) => this.emitMany(i), reject: (i) => this.reject(i) };
      try {
        await Promise.resolve(t(s)), this.resolve();
      } catch (i) {
        this.reject(i);
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
        await X.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(t, r) {
    return new J(async (s) => {
      for await (const i of t) s.emitOne(r(i));
    });
  }
  map(t) {
    return J.map(this, t);
  }
  static filter(t, r) {
    return new J(async (s) => {
      for await (const i of t) r(i) && s.emitOne(i);
    });
  }
  filter(t) {
    return J.filter(this, t);
  }
  static coalesce(t) {
    return J.filter(t, (r) => !!r);
  }
  coalesce() {
    return J.coalesce(this);
  }
  static async toPromise(t) {
    const r = [];
    for await (const s of t) r.push(s);
    return r;
  }
  toPromise() {
    return J.toPromise(this);
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
Bt.EMPTY = Bt.fromArray([]);
import "fs";
import * as S from "fs";
import { tmpdir as Ii } from "os";
import { promisify as N1 } from "util";
var Ti = new Ze(1e4);
function jt(e) {
  return Oi(e, "NFC", Ti);
}
var tn = new Ze(1e4), xi = /[^\u0000-\u0080]/;
function Oi(e, t, r) {
  if (!e) return e;
  const s = r.get(e);
  if (s) return s;
  let i;
  return xi.test(e) ? i = e.normalize(t) : i = e, r.set(e, i), i;
}
async function Ht(e, t = 0, r) {
  if (Vs(e)) throw new Error("rimraf - will refuse to recursively delete root");
  return t === 0 ? xe(e) : Mi(e, r);
}
async function Mi(e, t = Ys(Ii())) {
  try {
    try {
      await S.promises.rename(e, t);
    } catch (r) {
      return r.code === "ENOENT" ? void 0 : xe(e);
    }
    xe(t).catch((r) => {
    });
  } catch (r) {
    if (r.code !== "ENOENT") throw r;
  }
}
async function xe(e) {
  return S.promises.rm(e, { recursive: true, force: true, maxRetries: 3 });
}
async function ae(e, t) {
  return $i(await (t ? Ni(e) : S.promises.readdir(e)));
}
async function Ni(e) {
  try {
    return await S.promises.readdir(e, { withFileTypes: true });
  } catch (s) {
    console.warn("[node.js fs] readdir with filetypes failed with error: ", s);
  }
  const t = [], r = await ae(e);
  for (const s of r) {
    let i = false, n = false, o = false;
    try {
      const a = await S.promises.lstat(d1(e, s));
      i = a.isFile(), n = a.isDirectory(), o = a.isSymbolicLink();
    } catch (a) {
      console.warn("[node.js fs] unexpected error from lstat after readdir: ", a);
    }
    t.push({ name: s, isFile: () => i, isDirectory: () => n, isSymbolicLink: () => o });
  }
  return t;
}
function $i(e) {
  return e.map((t) => typeof t == "string" ? Ce ? jt(t) : t : (t.name = Ce ? jt(t.name) : t.name, t));
}
async function Ui(e) {
  const t = await ae(e), r = [];
  for (const s of t) await $1.existsDirectory(d1(e, s)) && r.push(s);
  return r;
}
var $1;
((e) => {
  async function t(i) {
    let n;
    try {
      if (n = await S.promises.lstat(i), !n.isSymbolicLink()) return { stat: n };
    } catch {
    }
    try {
      return { stat: await S.promises.stat(i), symbolicLink: n?.isSymbolicLink() ? { dangling: false } : void 0 };
    } catch (o) {
      if (o.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: true } };
      if (Y && o.code === "EACCES") try {
        return { stat: await S.promises.stat(await S.promises.readlink(i)), symbolicLink: { dangling: false } };
      } catch (a) {
        if (a.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: true } };
        throw a;
      }
      throw o;
    }
  }
  e.stat = t;
  async function r(i) {
    try {
      const { stat: n, symbolicLink: o } = await e.stat(i);
      return n.isFile() && o?.dangling !== true;
    } catch {
    }
    return false;
  }
  e.existsFile = r;
  async function s(i) {
    try {
      const { stat: n, symbolicLink: o } = await e.stat(i);
      return n.isDirectory() && o?.dangling !== true;
    } catch {
    }
    return false;
  }
  e.existsDirectory = s;
})($1 || ($1 = {}));
var zi = new Si();
function qi(e, t, r) {
  return zi.queueFor(Q.file(e), () => {
    const s = Bi(r);
    return new Promise((i, n) => Wi(e, t, s, (o) => o ? n(o) : i()));
  }, Ai);
}
var Gt = true;
function Fi(e) {
  Gt = e;
}
function Wi(e, t, r, s) {
  if (!Gt) return S.writeFile(e, t, { mode: r.mode, flag: r.flag }, s);
  S.open(e, r.flag, r.mode, (i, n) => {
    if (i) return s(i);
    S.writeFile(n, t, (o) => {
      if (o) return S.close(n, () => s(o));
      S.fdatasync(n, (a) => (a && (console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", a), Fi(false)), S.close(n, (c) => s(c))));
    });
  });
}
function Bi(e) {
  return e ? { mode: typeof e.mode == "number" ? e.mode : 438, flag: typeof e.flag == "string" ? e.flag : "w" } : { mode: 438, flag: "w" };
}
async function ji(e, t, r = 6e4) {
  if (e !== t) try {
    Y && typeof r == "number" ? await Vt(e, t, Date.now(), r) : await S.promises.rename(e, t);
  } catch (s) {
    if (e.toLowerCase() !== t.toLowerCase() && s.code === "EXDEV" || e.endsWith(".")) await Kt(e, t, { preserveSymlinks: false }), await Ht(e, 1);
    else throw s;
  }
}
async function Vt(e, t, r, s, i = 0) {
  try {
    return await S.promises.rename(e, t);
  } catch (n) {
    if (n.code !== "EACCES" && n.code !== "EPERM" && n.code !== "EBUSY") throw n;
    if (Date.now() - r >= s) throw console.error(`[node.js fs] rename failed after ${i} retries with error: ${n}`), n;
    if (i === 0) {
      let o = false;
      try {
        const { stat: a } = await $1.stat(t);
        a.isFile() || (o = true);
      } catch {
      }
      if (o) throw n;
    }
    return await Ft(Math.min(100, i * 10)), Vt(e, t, r, s, i + 1);
  }
}
async function Kt(e, t, r) {
  return Jt(e, t, { root: { source: e, target: t }, options: r, handledSourcePaths: /* @__PURE__ */ new Set() });
}
var Qt = 511;
async function Jt(e, t, r) {
  if (r.handledSourcePaths.has(e)) return;
  r.handledSourcePaths.add(e);
  const { stat: s, symbolicLink: i } = await $1.stat(e);
  if (i) {
    if (r.options.preserveSymlinks) try {
      return await Vi(e, t, r);
    } catch {
    }
    if (i.dangling) return;
  }
  return s.isDirectory() ? Hi(e, t, s.mode & Qt, r) : Gi(e, t, s.mode & Qt);
}
async function Hi(e, t, r, s) {
  await S.promises.mkdir(t, { recursive: true, mode: r });
  const i = await ae(e);
  for (const n of i) await Jt(d1(e, n), d1(t, n), s);
}
async function Gi(e, t, r) {
  await S.promises.copyFile(e, t), await S.promises.chmod(t, r);
}
async function Vi(e, t, r) {
  let s = await S.promises.readlink(e);
  De(s, r.root.source, !mt) && (s = d1(r.root.target, s.substr(r.root.source.length + 1))), await S.promises.symlink(s, t);
}
var rn = new class {
  get read() {
    return (e, t, r, s, i) => new Promise((n, o) => {
      S.read(e, t, r, s, i, (a, c, l) => a ? o(a) : n({ bytesRead: c, buffer: l }));
    });
  }
  get write() {
    return (e, t, r, s, i) => new Promise((n, o) => {
      S.write(e, t, r, s, i, (a, c, l) => a ? o(a) : n({ bytesWritten: c, buffer: l }));
    });
  }
  get fdatasync() {
    return N1(S.fdatasync);
  }
  get open() {
    return N1(S.open);
  }
  get close() {
    return N1(S.close);
  }
  get realpath() {
    return N1(S.realpath);
  }
  get ftruncate() {
    return N1(S.ftruncate);
  }
  async exists(e) {
    try {
      return await S.promises.access(e), true;
    } catch {
      return false;
    }
  }
  get readdir() {
    return ae;
  }
  get readDirsInDir() {
    return Ui;
  }
  get writeFile() {
    return qi;
  }
  get rm() {
    return Ht;
  }
  get rename() {
    return ji;
  }
  get copy() {
    return Kt;
  }
}();
function Ki(e, t, r) {
  let s = null, i = null;
  if (typeof r.value == "function" ? (s = "value", i = r.value, i.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof r.get == "function" && (s = "get", i = r.get), !i) throw new Error("not supported");
  const n = `$memoize$${t}`;
  r[s] = function(...o) {
    return this.hasOwnProperty(n) || Object.defineProperty(this, n, { configurable: false, enumerable: false, writable: false, value: i.apply(this, o) }), this[n];
  };
}
var Qi = Object.prototype.hasOwnProperty;
function le(e, t = 0) {
  if (typeof e != "object" || e === null || t > 200) return e;
  switch (e.$mid) {
    case 1:
      return Q.revive(e);
    case 2:
      return new RegExp(e.source, e.flags);
    case 17:
      return new Date(e.source);
  }
  if (Array.isArray(e)) for (let r = 0; r < e.length; ++r) {
    const s = e[r];
    if (s !== null && typeof s == "object") {
      const i = le(s, t + 1);
      i !== s && (e[r] = i);
    }
  }
  else {
    if (e instanceof K || e instanceof Uint8Array) return e;
    for (const r in e) if (Qi.call(e, r)) {
      const s = e[r];
      if (s !== null && typeof s == "object") {
        const i = le(s, t + 1);
        i !== s && (e[r] = i);
      }
    }
  }
  return e;
}
var Yt = 50, Zt = false, Xt;
function g1(e) {
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
function U1(e) {
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
function m1(e) {
  let t = 0;
  for (let r = 0; ; r += 7) {
    const s = e.readUInt8();
    if (t |= (s & 127) << r, !(s & 128)) return t;
  }
}
function v1(e, t) {
  if (t === 0) {
    e.writeUInt8(0);
    return;
  }
  do {
    let r = t & 127;
    t = t >>> 7, t > 0 && (r |= 128), e.writeUInt8(r);
  } while (t !== 0);
}
var er = class {
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
}, tr = 4 * 1024, Ji = 512 * 1024, Yi = 64 * 1024, z1, rr = K.alloc(0), sr = class {
  constructor() {
    this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0, z1 ? (this.data = z1, z1 = void 0) : this.data = K.alloc(tr);
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
    let r = Math.max(this.data.byteLength * 2, tr);
    for (; r < t; ) r *= 2;
    const s = K.alloc(r);
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
    if (e.byteLength < Yi) {
      this.write(e);
      return;
    }
    this.fragments || (this.fragments = []), this.flushSegment(), this.fragments.push(e), this.totalLength += e.byteLength;
  }
  dispose() {
    !z1 && this.data.byteLength <= Ji && this.data !== rr && (z1 = this.data), this.data = rr, this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0;
  }
}, ir = typeof Buffer < "u", Zi = 64 * 1024, Xi = 8;
function e2(e) {
  return !(e === null || typeof e != "object" || Array.isArray(e) || e instanceof K || e instanceof Uint8Array || ir && Buffer.isBuffer(e));
}
function t2(e) {
  if (e.length < Xi) return false;
  for (let t = 0; t < e.length; t++) if (!e2(e[t])) return false;
  return true;
}
function Oe(e, t) {
  if (t.length >= Zi) {
    const r = K.fromString(t);
    v1(e, r.byteLength), e.writeReference(r);
    return;
  }
  K.withPooledString(t, (r) => {
    v1(e, r.byteLength), e.write(r);
  });
}
function q1(e, t) {
  if (typeof t > "u") e.writeUInt8(0);
  else if (typeof t == "string") e.writeUInt8(1), Oe(e, t);
  else if (ir && Buffer.isBuffer(t)) e.writeUInt8(2), v1(e, t.byteLength), e.writeReference(K.wrap(t));
  else if (t instanceof K) e.writeUInt8(3), v1(e, t.byteLength), e.writeReference(t);
  else if (Array.isArray(t)) {
    if (t2(t)) {
      const r = JSON.stringify(t);
      e.writeUInt8(5), Oe(e, r);
      return;
    }
    e.writeUInt8(4), v1(e, t.length);
    for (const r of t) q1(e, r);
  } else if (typeof t == "number" && (t | 0) === t) e.writeUInt8(6), v1(e, t);
  else if (t instanceof Uint8Array) e.writeUInt8(7), v1(e, t.length), e.writeReference(K.wrap(t));
  else {
    const r = JSON.stringify(t);
    e.writeUInt8(5), Oe(e, r);
  }
}
function F1(e) {
  switch (e.readUInt8()) {
    case 0:
      return;
    case 1:
      return e.read(m1(e)).toString();
    case 2:
      return e.read(m1(e)).buffer;
    case 3:
      return e.read(m1(e));
    case 7:
      return e.read(m1(e)).buffer;
    case 4: {
      const r = m1(e), s = [];
      for (let i = 0; i < r; i++) s.push(F1(e));
      return s;
    }
    case 5:
      return JSON.parse(e.read(m1(e)).toString());
    case 6:
      return m1(e);
  }
}
var r2 = class {
  constructor(e, t, r = null, s = 1e3) {
    this.protocol = e, this.ctx = t, this.logger = r, this.timeoutDelay = s, this.channels = /* @__PURE__ */ new Map(), this.activeRequests = /* @__PURE__ */ new Map(), this.protocolListener = new rt(), this.pendingRequests = /* @__PURE__ */ new Map(), this.protocolListener.value = this.protocol.onMessage((i) => this.onRawMessage(i)), this.sendResponse({ type: 200 });
  }
  registerChannel(e, t) {
    this.channels.set(e, t), setTimeout(() => this.flushPendingRequests(e), 0);
  }
  sendResponse(e) {
    switch (e.type) {
      case 200: {
        const t = this.send([e.type]);
        this.logger?.logOutgoing(t, 0, 1, U1(e.type));
        return;
      }
      case 201:
      case 202:
      case 204:
      case 203: {
        const t = this.send([e.type, e.id], e.data);
        this.logger?.logOutgoing(t, e.id, 1, U1(e.type), e.data);
        return;
      }
    }
  }
  send(e, t = void 0) {
    const r = new sr();
    try {
      return q1(r, e), q1(r, t), this.sendBuffer(r.buffer);
    } finally {
      r.dispose();
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
    const t = new er(e), r = Zt, s = r ? performance.now() : 0, i = F1(t), n = i[0];
    if (n !== 100 && n !== 101 && n !== 102 && n !== 103) return;
    const o = F1(t);
    if (r) {
      const a = performance.now() - s;
      a > Yt && Xt?.({ durationMs: a, byteLength: e.byteLength, requestId: i[1] ?? 0, channelName: i[2], command: i[3], messageType: g1(n) });
    }
    switch (n) {
      case 100:
        return this.logger?.logIncoming(e.byteLength, i[1], 1, `${g1(n)}: ${i[2]}.${i[3]}`, o), this.onPromise({ type: n, id: i[1], channelName: i[2], name: i[3], arg: o });
      case 102:
        return this.logger?.logIncoming(e.byteLength, i[1], 1, `${g1(n)}: ${i[2]}.${i[3]}`, o), this.onEventListen({ type: n, id: i[1], channelName: i[2], name: i[3], arg: o });
      case 101:
        return this.logger?.logIncoming(e.byteLength, i[1], 1, `${g1(n)}`), this.disposeActiveRequest({ type: n, id: i[1] });
      case 103:
        return this.logger?.logIncoming(e.byteLength, i[1], 1, `${g1(n)}`), this.disposeActiveRequest({ type: n, id: i[1] });
    }
  }
  onPromise(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const r = new ht();
    let s;
    try {
      s = t.call(this.ctx, e.name, e.arg, r.token);
    } catch (o) {
      s = Promise.reject(o);
    }
    const i = e.id;
    s.then((o) => {
      this.sendResponse({ id: i, data: o, type: 201 });
    }, (o) => {
      o instanceof Error ? this.sendResponse({ id: i, data: { message: o.message, name: o.name, stack: o.stack ? o.stack.split(`
`) : void 0 }, type: 202 }) : this.sendResponse({ id: i, data: o, type: 203 });
    }).finally(() => {
      n.dispose(), this.activeRequests.delete(e.id);
    });
    const n = Q1(() => r.cancel());
    this.activeRequests.set(e.id, n);
  }
  onEventListen(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const r = e.id, i = t.listen(this.ctx, e.name, e.arg)((n) => this.sendResponse({ id: r, data: n, type: 204 }));
    this.activeRequests.set(e.id, i);
  }
  disposeActiveRequest(e) {
    const t = this.activeRequests.get(e.id);
    t && (t.dispose(), this.activeRequests.delete(e.id));
  }
  collectPendingRequest(e) {
    let t = this.pendingRequests.get(e.channelName);
    t || (t = [], this.pendingRequests.set(e.channelName, t));
    const r = Ei(() => {
      console.error(`Unknown channel: ${e.channelName}`), e.type === 100 && this.sendResponse({ id: e.id, data: { name: "Unknown channel", message: `Channel name '${e.channelName}' timed out after ${this.timeoutDelay}ms`, stack: void 0 }, type: 202 }), r.dispose();
    }, this.timeoutDelay);
    t.push({ request: e, timeoutTimer: r });
  }
  flushPendingRequests(e) {
    const t = this.pendingRequests.get(e);
    if (t) {
      for (const r of t) switch (r.timeoutTimer.dispose(), r.request.type) {
        case 100:
          this.onPromise(r.request);
          break;
        case 102:
          this.onEventListen(r.request);
          break;
      }
      this.pendingRequests.delete(e);
    }
  }
  dispose() {
    this.protocolListener.dispose(), T1(this.activeRequests.values()), this.activeRequests.clear();
    for (const e of this.pendingRequests.values()) T1(e.map((t) => t.timeoutTimer));
    this.pendingRequests.clear();
  }
}, s2 = class {
  constructor(e, t = null) {
    this.protocol = e, this.isDisposed = false, this.state = 0, this.activeRequests = new w1(), this.handlers = /* @__PURE__ */ new Map(), this.lastRequestId = 0, this.protocolListener = new rt(), this._pendingRPCDetails = /* @__PURE__ */ new Map(), this._onDidInitialize = new V(), this.onDidInitialize = this._onDidInitialize.event, this.initializeListener = new w1(), this.protocolListener.value = this.protocol.onMessage((r) => this.onBuffer(r)), this.logger = t;
  }
  getChannel(e) {
    const t = this;
    return { call(r, s, i) {
      return t.isDisposed ? Promise.reject(new a1()) : t.requestPromise(e, r, s, i);
    }, listen(r, s) {
      return t.isDisposed ? X.None : t.requestEvent(e, r, s);
    } };
  }
  requestPromise(e, t, r, s = x1.None) {
    const i = this.lastRequestId++, o = { id: i, type: 100, channelName: e, name: t, arg: r };
    if (s.isCancellationRequested) return Promise.reject(new a1());
    let a, c;
    return new Promise((u, h) => {
      if (s.isCancellationRequested) return h(new a1());
      const p = () => {
        const I = (E) => {
          switch (E.type) {
            case 201:
              this.handlers.delete(i), this._pendingRPCDetails.delete(i), u(E.data);
              break;
            case 202: {
              this.handlers.delete(i), this._pendingRPCDetails.delete(i);
              const x = new Error(E.data.message);
              x.stack = Array.isArray(E.data.stack) ? E.data.stack.join(`
`) : E.data.stack, x.name = E.data.name, h(x);
              break;
            }
            case 203:
              this.handlers.delete(i), this._pendingRPCDetails.delete(i), h(E.data);
              break;
          }
        };
        this.handlers.set(i, I), this._pendingRPCDetails.set(i, { channelName: e, command: t });
        try {
          this.sendRequest(o);
        } catch (E) {
          this.handlers.delete(i), this._pendingRPCDetails.delete(i), h(E);
        }
      };
      let b = null;
      this.state === 1 ? p() : (b = Ie((I) => this.whenInitialized()), b.then(() => {
        b = null, p();
      }, () => {
      }));
      const A = () => {
        b ? (b.cancel(), b = null) : this.sendRequest({ id: i, type: 101 }), h(new a1());
      };
      a = s.onCancellationRequested(A), c = { dispose: He(() => {
        A(), a.dispose();
      }) }, this.activeRequests.add(c);
    }).finally(() => {
      a?.dispose(), this.activeRequests.deleteAndLeak(c), et(c);
    });
  }
  requestEvent(e, t, r) {
    const s = this.lastRequestId++, n = { id: s, type: 102, channelName: e, name: t, arg: r };
    let o = null;
    const a = new V({ onWillAddFirstListener: () => {
      if (this.isDisposed) return;
      const c = (u) => a.fire(u.data);
      this.handlers.set(s, c);
      const l = () => {
        this.activeRequests.add(a), this._pendingRPCDetails.set(s, { channelName: e, command: t }), this.sendRequest(n);
      };
      this.state === 1 ? l() : (o = Ie((u) => this.whenInitialized()), o.then(() => {
        o = null, l();
      }, () => {
      }));
    }, onDidRemoveLastListener: () => {
      const c = this.handlers.delete(s);
      o ? (o.cancel(), o = null) : c && (this.activeRequests.deleteAndLeak(a), et(a), this._pendingRPCDetails.delete(s), this.sendRequest({ id: s, type: 103 }));
    } });
    return a.event;
  }
  sendRequest(e) {
    switch (e.type) {
      case 100:
      case 102: {
        const t = this.send([e.type, e.id, e.channelName, e.name], e.arg);
        this.logger?.logOutgoing(t, e.id, 0, `${g1(e.type)}: ${e.channelName}.${e.name}`, e.arg);
        return;
      }
      case 101:
      case 103: {
        const t = this.send([e.type, e.id]);
        this.logger?.logOutgoing(t, e.id, 0, g1(e.type));
        return;
      }
    }
  }
  send(e, t = void 0) {
    const r = new sr();
    try {
      return q1(r, e), q1(r, t), this.sendBuffer(r.buffer);
    } finally {
      r.dispose();
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
    const t = new er(e), r = Zt, s = r ? performance.now() : 0, i = F1(t), n = i[0];
    if (n !== 200 && n !== 201 && n !== 202 && n !== 203 && n !== 204) return;
    const o = F1(t);
    if (r) {
      const a = performance.now() - s;
      if (a > Yt) {
        const c = i[1] ?? 0, l = this._pendingRPCDetails.get(c);
        Xt?.({ durationMs: a, byteLength: e.byteLength, requestId: c, channelName: l?.channelName, command: l?.command, messageType: U1(n) });
      }
    }
    switch (n) {
      case 200:
        return this.logger?.logIncoming(e.byteLength, 0, 0, U1(n)), this.onResponse({ type: i[0] });
      case 201:
      case 202:
      case 204:
      case 203:
        return this.logger?.logIncoming(e.byteLength, i[1], 0, U1(n), o), this.onResponse({ type: i[0], id: i[1], data: o });
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
    return X.toPromise(this.onDidInitialize, this.initializeListener);
  }
  whenInitialized() {
    return this.state === 1 ? Promise.resolve() : this.onDidInitializePromise;
  }
  dispose() {
    this.isDisposed = true, this.protocolListener.dispose(), this.activeRequests.dispose(), this._pendingRPCDetails.clear(), this.handlers.clear(), this.initializeListener.dispose(), this._onDidInitialize.dispose();
  }
};
_r([Ki], s2.prototype, "onDidInitializePromise", null);
var nr;
((e) => {
  const t = () => {
  };
  function r(o, a, c) {
    const l = o, u = c && c.disableMarshalling, h = (b) => {
      const A = l[b];
      return c?.disableEventBuffering ? A : X.buffer(A, true, void 0, a);
    }, p = /* @__PURE__ */ new Map();
    for (const b in l) i(b) && p.set(b, h(b));
    return new class {
      listen(b, A, I) {
        const E = p.get(A);
        if (E) return E;
        const x = l[A];
        if (typeof x == "function") {
          if (n(A)) return x.call(l, I);
          if (i(A)) return p.set(A, h(A)), p.get(A);
        }
        throw new k1(`Event not found: ${A}`);
      }
      call(b, A, I) {
        const E = l[A];
        if (typeof E == "function") {
          if (!u && Array.isArray(I)) for (let G = 0; G < I.length; G++) I[G] = le(I[G]);
          let x = E.apply(l, I);
          return x instanceof Promise || (x = Promise.resolve(x)), x;
        }
        throw new k1(`Method not found: ${A}`);
      }
    }();
  }
  e.fromService = r;
  function s(o, a) {
    const c = a && a.disableMarshalling;
    return new Proxy({}, { get(l, u) {
      if (typeof u != "symbol") {
        if (typeof u == "string") return a?.properties?.has(u) ? a.properties.get(u) : u === "dispose" ? t : n(u) ? function(h) {
          return o.listen(u, h);
        } : i(u) ? o.listen(u) : async function(...h) {
          let p;
          a && !Ur(a.context) ? p = [a.context, ...h] : p = h;
          const b = await o.call(u, p);
          return c ? b : le(b);
        };
        throw new k1(`Property not found: ${String(u)}`);
      }
    } });
  }
  e.toService = s;
  function i(o) {
    return o[0] === "o" && o[1] === "n" && At(o.charCodeAt(2));
  }
  function n(o) {
    return /^onDynamic/.test(o) && At(o.charCodeAt(9));
  }
})(nr || (nr = {}));
var i2 = class extends r2 {
  constructor(e) {
    super({ send: (t) => {
      try {
        process.send?.(t.buffer);
      } catch {
      }
    }, onMessage: X.fromNodeEventEmitter(process, "message", (t) => {
      if (t instanceof Uint8Array) return K.wrap(t);
      throw new Error("ipc.cp: expected Uint8Array IPC frame from parent");
    }) }, e), process.once("disconnect", () => this.dispose());
  }
}, n2 = class {
  constructor(e) {
    this.appenders = e;
  }
  listen(e, t) {
    throw new Error(`Event not found: ${t}`);
  }
  call(e, t, { eventName: r, data: s }) {
    return t === "capture" ? (this.appenders.forEach((i) => i.capture(r, s)), Promise.resolve(null)) : t === "registerAuthId" ? (this.appenders.forEach((i) => i.registerAuthId(s)), Promise.resolve(null)) : (this.appenders.forEach((i) => i.log(r, s)), Promise.resolve(null));
  }
}, z = [];
for (let e = 0; e < 256; e++) z.push(e.toString(16).padStart(2, "0"));
var sn = (function() {
  if (typeof crypto.randomUUID == "function") return crypto.randomUUID.bind(crypto);
  const e = new Uint8Array(16);
  return function() {
    crypto.getRandomValues(e), e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
    let r = 0, s = "";
    return s += z[e[r++]], s += z[e[r++]], s += z[e[r++]], s += z[e[r++]], s += "-", s += z[e[r++]], s += z[e[r++]], s += "-", s += z[e[r++]], s += z[e[r++]], s += "-", s += z[e[r++]], s += z[e[r++]], s += "-", s += z[e[r++]], s += z[e[r++]], s += z[e[r++]], s += z[e[r++]], s += z[e[r++]], s += z[e[r++]], s;
  };
})(), o1;
((e) => {
  e.serviceIds = /* @__PURE__ */ new Map(), e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
  function t(r) {
    return r[e.DI_DEPENDENCIES] || [];
  }
  e.getServiceDependencies = t;
})(o1 || (o1 = {}));
var nn = ce("instantiationService");
function o2(e, t, r) {
  t[o1.DI_TARGET] === t ? t[o1.DI_DEPENDENCIES].push({ id: e, index: r }) : (t[o1.DI_DEPENDENCIES] = [{ id: e, index: r }], t[o1.DI_TARGET] = t);
}
function ce(e) {
  if (o1.serviceIds.has(e)) return o1.serviceIds.get(e);
  const t = function(r, s, i) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    o2(t, r, i);
  };
  return t.toString = () => e, o1.serviceIds.set(e, t), t;
}
var on = ce("telemetryService"), an = ce("customEndpointTelemetryService"), ln = ce("mainProcessPerformanceTelemetryService"), a2 = class {
  constructor() {
    this.telemetryLevel = 0, this.sessionId = "someValue.sessionId", this.machineId = "someValue.machineId", this.macMachineId = "someValue.macMachineId", this.sqmId = "someValue.sqmId", this.devDeviceId = "someValue.devDeviceId", this.firstSessionDate = "someValue.firstSessionDate", this.sendErrorTelemetry = false;
  }
  registerAuthId() {
  }
  publicLogError() {
  }
  publicLogError2() {
  }
  publicLogCapture() {
  }
  setExperimentProperty() {
  }
}, cn = new a2(), l2 = "telemetry", hn = { id: l2, name: is(2254, null) }, c2 = { registerAuthId: () => null, log: () => null, flush: () => Promise.resolve(null), capture: () => null }, or = c2;
process.once("exit", () => or.flush());
var h2 = new n2([or]), u2 = new i2("telemetry");
u2.registerChannel("telemetryAppender", h2);
