/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1f4c1c4d-8f6a-52e7-bac2-fa51dbfd9f2a");
  } catch (e3) {
  }
})();
var Do = Object.create, wr = Object.defineProperty, To = Object.getOwnPropertyDescriptor, br = Object.getOwnPropertyNames, Oo = Object.getPrototypeOf, Lo = Object.prototype.hasOwnProperty, E = (e, t) => function() {
  return e && (t = (0, e[br(e)[0]])(e = 0)), t;
}, Ro = (e, t) => function() {
  return t || (0, e[br(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, xo = (e, t) => {
  for (var r in t) wr(e, r, { get: t[r], enumerable: true });
}, Io = (e, t, r, s) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of br(t)) !Lo.call(e, i) && i !== r && wr(e, i, { get: () => t[i], enumerable: !(s = To(t, i)) || s.enumerable });
  return e;
}, No = (e, t, r) => (r = e != null ? Do(Oo(e)) : {}, Io(t || !e || !e.__esModule ? wr(r, "default", { value: e, enumerable: true }) : r, e)), w = E({ "tslib.es6.js"() {
} });
function Mo(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const s of e) {
    const i = t(s);
    let n = r[i];
    n || (n = r[i] = []), n.push(s);
  }
  return r;
}
var rs, ss, Fo, is = E({ "collections.js"() {
  "use strict";
  w(), Fo = class {
    constructor(e, t) {
      this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[rs] = "SetWithKey";
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
    [(ss = Symbol.iterator, rs = Symbol.toStringTag, ss)]() {
      return this.values();
    }
  };
} });
function $t(e) {
  $o(e) || os.onUnexpectedError(e);
}
function $o(e) {
  return e instanceof ht ? true : e instanceof Error && e.name === jt && e.message === jt;
}
function jo() {
  const e = Date.now();
  return e < Er ? false : (Er = e + ls, true);
}
var ns, os, jt, ht, Cr, as, ls, Er, cs, Ue = E({ "errors.js"() {
  "use strict";
  w(), ns = class {
    constructor() {
      this.listeners = [], this.unexpectedErrorHandler = function(e) {
        setTimeout(() => {
          throw e.stack ? Cr.isErrorNoTelemetry(e) ? new Cr(e.message + `

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
  }, os = new ns(), jt = "Canceled", ht = class extends Error {
    constructor() {
      if (super(jt), this.name = this.message, cs && typeof console < "u" && jo()) {
        const e = new Error().stack ?? "";
        as.some((t) => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
      }
    }
  }, Cr = class K1 extends Error {
    constructor(t) {
      super(t), this.name = "CodeExpectedError";
    }
    static fromError(t) {
      if (t instanceof K1) return t;
      const r = new K1();
      return r.message = t.message, r.stack = t.stack, r;
    }
    static isErrorNoTelemetry(t) {
      return t.name === "CodeExpectedError";
    }
  }, as = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], ls = 5e3, Er = 0, cs = false;
} });
function Wo(e, t) {
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
var us = E({ "functional.js"() {
  "use strict";
  w();
} });
function Uo(e, t, r = 0, s = e.length) {
  let i = r, n = s;
  for (; i < n; ) {
    const a = Math.floor((i + n) / 2);
    t(e[a]) ? i = a + 1 : n = a;
  }
  return i - 1;
}
var hs, qo = E({ "arraysFind.js"() {
  "use strict";
  w(), hs = class wo {
    constructor(t) {
      this._array = t, this._findLastMonotonousLastIdx = 0;
    }
    findLastMonotonous(t) {
      if (wo.assertInvariants) {
        if (this._prevFindLastPredicate) {
          for (const s of this._array) if (this._prevFindLastPredicate(s) && !t(s)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
        }
        this._prevFindLastPredicate = t;
      }
      const r = Uo(this._array, t, this._findLastMonotonousLastIdx);
      return this._findLastMonotonousLastIdx = r + 1, r === -1 ? void 0 : this._array[r];
    }
  }, hs.assertInvariants = false;
} });
function fs(e, t) {
  let r;
  if (typeof t == "number") {
    let s = t;
    r = () => {
      const i = Math.sin(s++) * 179426549;
      return i - Math.floor(i);
    };
  } else r = Math.random;
  for (let s = e.length - 1; s > 0; s -= 1) {
    const i = Math.floor(r() * (s + 1)), n = e[s];
    e[s] = e[i], e[i] = n;
  }
}
function Bo(e, t) {
  return (r, s) => t(e(r), e(s));
}
var Sr, ds, Ar, kr = E({ "arrays.js"() {
  "use strict";
  w(), qo(), Ue(), ((e) => {
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
  })(Sr || (Sr = {})), ds = (e, t) => e - t, Ar = class J1 {
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
      return new J1((r) => this.iterate((s) => t(s) ? r(s) : true));
    }
    map(t) {
      return new J1((r) => this.iterate((s) => r(t(s))));
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
      return this.iterate((i) => ((s || Sr.isGreaterThan(t(i, r))) && (s = false, r = i), true)), r;
    }
  }, Ar.empty = new Ar((e) => {
  });
} });
function Vo(e) {
  return Array.isArray(e);
}
var ps, ms, gs, _s, Pr, Dr, zo, ys, vs, Wt, ws, Tr = E({ "map.js"() {
  "use strict";
  w(), _s = class {
    constructor(e, t) {
      this.uri = e, this.value = t;
    }
  }, Pr = class Rt {
    constructor(t, r) {
      if (this[ps] = "ResourceMap", t instanceof Rt) this.map = new Map(t.map), this.toKey = r ?? Rt.defaultToKey;
      else if (Vo(t)) {
        this.map = /* @__PURE__ */ new Map(), this.toKey = r ?? Rt.defaultToKey;
        for (const [s, i] of t) this.set(s, i);
      } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? Rt.defaultToKey;
    }
    set(t, r) {
      return this.map.set(this.toKey(t), new _s(t, r)), this;
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
    *[(ps = Symbol.toStringTag, Symbol.iterator)]() {
      for (const [, t] of this.map) yield [t.uri, t.value];
    }
  }, Pr.defaultToKey = (e) => e.toString(), Dr = Pr, zo = class {
    constructor(e, t) {
      this[ms] = "ResourceSet", !e || typeof e == "function" ? this._map = new Dr(e) : (this._map = new Dr(t), e.forEach(this.add, this));
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
    [(ms = Symbol.toStringTag, Symbol.iterator)]() {
      return this.keys();
    }
  }, ys = class {
    constructor() {
      this[gs] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
    [(gs = Symbol.toStringTag, Symbol.iterator)]() {
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
  }, vs = class extends ys {
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
  }, Wt = class extends vs {
    constructor(e, t = 1) {
      super(e, t);
    }
    trim(e) {
      this.trimOld(e);
    }
    set(e, t) {
      return super.set(e, t), this.checkTrim(), this;
    }
  }, ws = class {
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
} }), Go = E({ "assert.js"() {
  "use strict";
  w(), Ue();
} });
function Ho(e) {
  return typeof e == "number" && !isNaN(e);
}
function Ko(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
var Or = E({ "types.js"() {
  "use strict";
  w(), Go();
} }), Lr, Jo = E({ "iterator.js"() {
  "use strict";
  w(), Or(), ((e) => {
    function t(C) {
      return C && typeof C == "object" && typeof C[Symbol.iterator] == "function";
    }
    e.is = t;
    const r = Object.freeze([]);
    function s() {
      return r;
    }
    e.empty = s;
    function* i(C) {
      yield C;
    }
    e.single = i;
    function n(C) {
      return t(C) ? C : i(C);
    }
    e.wrap = n;
    function a(C) {
      return C || r;
    }
    e.from = a;
    function* o(C) {
      for (let _ = C.length - 1; _ >= 0; _--) yield C[_];
    }
    e.reverse = o;
    function l(C) {
      return !C || C[Symbol.iterator]().next().done === true;
    }
    e.isEmpty = l;
    function c(C) {
      return C[Symbol.iterator]().next().value;
    }
    e.first = c;
    function h(C, _) {
      let T = 0;
      for (const I of C) if (_(I, T++)) return true;
      return false;
    }
    e.some = h;
    function u(C, _) {
      for (const T of C) if (_(T)) return T;
    }
    e.find = u;
    function* f(C, _) {
      for (const T of C) _(T) && (yield T);
    }
    e.filter = f;
    function* d(C, _) {
      let T = 0;
      for (const I of C) yield _(I, T++);
    }
    e.map = d;
    function* m(C, _) {
      let T = 0;
      for (const I of C) yield* _(I, T++);
    }
    e.flatMap = m;
    function* k(...C) {
      for (const _ of C) Ko(_) ? yield* _ : yield _;
    }
    e.concat = k;
    function D(C, _, T) {
      let I = T;
      for (const A of C) I = _(I, A);
      return I;
    }
    e.reduce = D;
    function P(C) {
      let _ = 0;
      for (const T of C) _++;
      return _;
    }
    e.length = P;
    function* x(C, _, T = C.length) {
      for (_ < -C.length && (_ = 0), _ < 0 && (_ += C.length), T < 0 ? T += C.length : T > C.length && (T = C.length); _ < T; _++) yield C[_];
    }
    e.slice = x;
    function O(C, _ = Number.POSITIVE_INFINITY) {
      const T = [];
      if (_ === 0) return [T, C];
      const I = C[Symbol.iterator]();
      for (let A = 0; A < _; A++) {
        const U = I.next();
        if (U.done) return [T, e.empty()];
        T.push(U.value);
      }
      return [T, { [Symbol.iterator]() {
        return I;
      } }];
    }
    e.consume = O;
    async function Z(C) {
      const _ = [];
      for await (const T of C) _.push(T);
      return Promise.resolve(_);
    }
    e.asyncToArray = Z;
  })(Lr || (Lr = {}));
} });
function ft(e, t) {
  if (Le?.onLifecycleMisuse?.(e, t), !Nr) return;
  const r = `${t}\0${e.stack ?? ""}`;
  Ut.has(r) || Ut.size >= bs || (Ut.add(r), Nr(e, t));
}
function Rr(e) {
  ft(e, "disposable_post_dispose_set");
}
function Qo(e) {
  Le = e;
}
function dt(e) {
  return Le?.trackDisposable(e), e;
}
function pt(e) {
  Le?.markAsDisposed(e);
}
function mt(e, t) {
  Le?.setParent(e, t);
}
function Yo(e, t) {
  if (Le) for (const r of e) Le.setParent(r, t);
}
function Zo(e) {
  return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
function xr(e) {
  if (Lr.is(e)) {
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
function Xo(...e) {
  const t = qe(() => xr(e));
  return Yo(e, t), t;
}
function qe(e) {
  const t = dt({ dispose: Wo(() => {
    pt(t), e();
  }) });
  return t;
}
function Ir(e, t) {
  return e.then((r) => (t.isDisposed ? r.dispose() : t.add(r), r));
}
var Nr, Ut, bs, Cs, Le, Es, Mr, Re, _e, Fr, Ss, et = E({ "lifecycle.js"() {
  "use strict";
  if (w(), kr(), is(), Tr(), us(), Jo(), Nr = void 0, Ut = /* @__PURE__ */ new Set(), bs = 50, Cs = false, Le = null, Es = class bo {
    constructor() {
      this.livingDisposables = /* @__PURE__ */ new Map();
    }
    getDisposableData(t) {
      let r = this.livingDisposables.get(t);
      return r || (r = { parent: null, source: null, isSingleton: false, value: t, idx: bo.idx++ }, this.livingDisposables.set(t, r)), r;
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
        const l = /* @__PURE__ */ new Map(), c = [...this.livingDisposables.values()].filter((u) => u.source !== null && !this.getRootParent(u, l).isSingleton);
        if (c.length === 0) return;
        const h = new Set(c.map((u) => u.value));
        if (s = c.filter((u) => !(u.parent && h.has(u.parent))), s.length === 0) throw new Error("There are cyclic diposable chains!");
      }
      if (!s) return;
      function i(l) {
        function c(u, f) {
          for (; u.length > 0 && f.some((d) => typeof d == "string" ? d === u[0] : u[0].match(d)); ) u.shift();
        }
        const h = l.source.split(`
`).map((u) => u.trim().replace("at ", "")).filter((u) => u !== "");
        return c(h, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), h.reverse();
      }
      const n = new ws();
      for (const l of s) {
        const c = i(l);
        for (let h = 0; h <= c.length; h++) n.add(c.slice(0, h).join(`
`), l);
      }
      s.sort(Bo((l) => l.idx, ds));
      let a = "", o = 0;
      for (const l of s.slice(0, t)) {
        o++;
        const c = i(l), h = [];
        for (let u = 0; u < c.length; u++) {
          let f = c[u];
          f = `(shared with ${n.get(c.slice(0, u + 1).join(`
`)).size}/${s.length} leaks) at ${f}`;
          const m = n.get(c.slice(0, u).join(`
`)), k = Mo([...m].map((D) => i(D)[u]), (D) => D);
          delete k[c[u]];
          for (const [D, P] of Object.entries(k)) h.unshift(`    - stacktraces of ${P.length} other leaks continue with ${D}`);
          h.unshift(f);
        }
        a += `


==================== Leaking disposable ${o}/${s.length}: ${l.value.constructor.name} ====================
${h.join(`
`)}
============================================================

`;
      }
      return s.length > t && (a += `


... and ${s.length - t} more leaking disposables

`), { leaks: s, details: a };
    }
  }, Es.idx = 0, Cs) {
    const e = "__is_disposable_tracked__";
    Qo(new class {
      trackDisposable(t) {
        const r = new Error("Potentially leaked disposable").stack;
        setTimeout(() => {
          t[e] || console.log(r);
        }, 3e3);
      }
      setParent(t, r) {
        if (t && t !== _e.None) try {
          t[e] = true;
        } catch {
        }
      }
      markAsDisposed(t) {
        if (t && t !== _e.None) try {
          t[e] = true;
        } catch {
        }
      }
      markAsSingleton(t) {
      }
    }());
  }
  Mr = class Q1 {
    constructor() {
      this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = false, dt(this);
    }
    dispose() {
      this._isDisposed || (pt(this), this._isDisposed = true, this.clear());
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
        xr(this._toDispose);
      } finally {
        this._toDispose.clear();
      }
    }
    add(t) {
      if (!t) return t;
      if (t === this) throw new Error("Cannot register a disposable on itself!");
      if (mt(t, this), this._isDisposed) {
        const r = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
        Q1.DISABLE_DISPOSED_WARNING || console.warn(r.stack), Rr(r);
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
      t && this._toDispose.has(t) && (this._toDispose.delete(t), mt(t, null));
    }
    transferOut(t) {
      if (this._isDisposed) {
        const r = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
        Q1.DISABLE_DISPOSED_WARNING || console.warn(r.stack), ft(r, "disposable_use_after_dispose");
      }
      return this.deleteAndLeak(t), t;
    }
  }, Mr.DISABLE_DISPOSED_WARNING = false, Re = Mr, _e = class {
    constructor() {
      this._store = new Re(), dt(this), mt(this._store, this);
    }
    dispose() {
      pt(this), this._store.dispose();
    }
    _register(e) {
      if (e === this) throw new Error("Cannot register a disposable on itself!");
      return this._store.add(e);
    }
  }, _e.None = Object.freeze({ dispose() {
  } }), Fr = class {
    constructor() {
      this._isDisposed = false, dt(this);
    }
    get value() {
      return this._isDisposed ? void 0 : this._value;
    }
    set value(e) {
      if (this._isDisposed) {
        if (e) {
          const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
          Re.DISABLE_DISPOSED_WARNING || console.warn(t.stack), Rr(t), e.dispose();
        }
        return;
      }
      e !== this._value && (this._value?.dispose(), e && mt(e, this), this._value = e);
    }
    clear() {
      this.value = void 0;
    }
    dispose() {
      this._isDisposed = true, pt(this), this._value?.dispose(), this._value = void 0;
    }
    clearAndLeak() {
      const e = this._value;
      return this._value = void 0, e && mt(e, null), e;
    }
  }, Ss = class {
    constructor(e = /* @__PURE__ */ new Map()) {
      this._isDisposed = false, this._store = e, dt(this);
    }
    dispose() {
      pt(this), this._isDisposed = true, this.clearAndDisposeAll();
    }
    clearAndDisposeAll() {
      if (this._store.size) try {
        xr(this._store.values());
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
        console.warn(s.stack), Rr(s);
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
  };
} }), $r, ea = E({ "linkedList.js"() {
  "use strict";
  w(), $r = class Y1 {
    constructor(t) {
      this.element = t, this.next = Y1.Undefined, this.prev = Y1.Undefined;
    }
  }, $r.Undefined = new $r(void 0);
} }), As, ks, ta = E({ "stopwatch.js"() {
  "use strict";
  w(), As = globalThis.performance && typeof globalThis.performance.now == "function", ks = class Co {
    static create(t) {
      return new Co(t);
    }
    constructor(t) {
      this._now = As && t === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
  };
} });
function Ps() {
  return (Os++).toString(16).padStart(3, "0");
}
var jr, Ds, oe, qt, Ts, Wr, Os, Ls, Bt, Ur, Rs, gt, xs, qr, ae, Is, Br = E({ "event.js"() {
  "use strict";
  w(), is(), Ue(), us(), et(), ea(), ta(), jr = false, Ds = false, ((e) => {
    e.None = () => _e.None;
    function t(g) {
      if (Ds) {
        const { onDidAddListener: p } = g, v = Bt.create();
        let y = 0;
        g.onDidAddListener = () => {
          ++y === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), v.print()), p?.();
        };
      }
    }
    function r(g, p) {
      return d(g, () => {
      }, 0, void 0, true, void 0, p);
    }
    e.defer = r;
    function s(g) {
      return (p, v = null, y) => {
        let S = false, L;
        return L = g((j) => {
          if (!S) return L ? L.dispose() : S = true, p.call(v, j);
        }, null, y), S && L.dispose(), L;
      };
    }
    e.once = s;
    function i(g, p) {
      return e.once(e.filter(g, p));
    }
    e.onceIf = i;
    function n(g, p, v) {
      return u((y, S = null, L) => g((j) => y.call(S, p(j)), null, L), v);
    }
    e.map = n;
    function a(g, p, v) {
      return u((y, S = null, L) => g((j) => {
        p(j), y.call(S, j);
      }, null, L), v);
    }
    e.forEach = a;
    function o(g, p, v) {
      return u((y, S = null, L) => g((j) => p(j) && y.call(S, j), null, L), v);
    }
    e.filter = o;
    function l(g) {
      return g;
    }
    e.signal = l;
    function c(...g) {
      return (p, v = null, y) => {
        const S = Xo(...g.map((L) => L((j) => p.call(v, j))));
        return f(S, y);
      };
    }
    e.any = c;
    function h(g, p, v, y) {
      let S = v;
      return n(g, (L) => (S = p(S, L), S), y);
    }
    e.reduce = h;
    function u(g, p) {
      let v;
      const y = { onWillAddFirstListener() {
        v = g(S.fire, S);
      }, onDidRemoveLastListener() {
        v?.dispose();
      } };
      p || t(y);
      const S = new ae(y);
      return p?.add(S), S.event;
    }
    function f(g, p) {
      return p instanceof Array ? p.push(g) : p && p.add(g), g;
    }
    function d(g, p, v = 100, y = false, S = false, L, j) {
      let G, J, Xe, Mt = 0, ut;
      const ts = { leakWarningThreshold: L, onWillAddFirstListener() {
        G = g((ko) => {
          Mt++, J = p(J, ko), y && !Xe && (Ft.fire(J), J = void 0), ut ??= () => {
            const Po = J;
            J = void 0, Xe = void 0, (!y || Mt > 1) && Ft.fire(Po), Mt = 0;
          }, typeof v == "number" ? (clearTimeout(Xe), Xe = setTimeout(ut, v)) : Xe === void 0 && (Xe = 0, queueMicrotask(ut));
        });
      }, onWillRemoveListener() {
        S && Mt > 0 && ut?.();
      }, onDidRemoveLastListener() {
        ut = void 0, G.dispose();
      } };
      j || t(ts);
      const Ft = new ae(ts);
      return j?.add(Ft), Ft.event;
    }
    e.debounce = d;
    function m(g, p = 0, v) {
      return e.debounce(g, (y, S) => y ? (y.push(S), y) : [S], p, void 0, true, void 0, v);
    }
    e.accumulate = m;
    function k(g, p = (y, S) => y === S, v) {
      let y = true, S;
      return o(g, (L) => {
        const j = y || !p(L, S);
        return y = false, S = L, j;
      }, v);
    }
    e.latch = k;
    function D(g, p, v) {
      return [e.filter(g, p, v), e.filter(g, (y) => !p(y), v)];
    }
    e.split = D;
    function P(g, p = false, v = [], y) {
      let S = v.slice(), L = g((J) => {
        S ? S.push(J) : G.fire(J);
      });
      y && y.add(L);
      const j = () => {
        S?.forEach((J) => G.fire(J)), S = null;
      }, G = new ae({ onWillAddFirstListener() {
        L || (L = g((J) => G.fire(J)), y && y.add(L));
      }, onDidAddFirstListener() {
        S && (p ? setTimeout(j) : j());
      }, onDidRemoveLastListener() {
        L && L.dispose(), L = null;
      } });
      return y && y.add(G), G.event;
    }
    e.buffer = P;
    function x(g, p) {
      return (y, S, L) => {
        const j = p(new Z());
        return g(function(G) {
          const J = j.evaluate(G);
          J !== O && y.call(S, J);
        }, void 0, L);
      };
    }
    e.chain = x;
    const O = /* @__PURE__ */ Symbol("HaltChainable");
    class Z {
      constructor() {
        this.steps = [];
      }
      map(p) {
        return this.steps.push(p), this;
      }
      forEach(p) {
        return this.steps.push((v) => (p(v), v)), this;
      }
      filter(p) {
        return this.steps.push((v) => p(v) ? v : O), this;
      }
      reduce(p, v) {
        let y = v;
        return this.steps.push((S) => (y = p(y, S), y)), this;
      }
      latch(p = (v, y) => v === y) {
        let v = true, y;
        return this.steps.push((S) => {
          const L = v || !p(S, y);
          return v = false, y = S, L ? S : O;
        }), this;
      }
      evaluate(p) {
        for (const v of this.steps) if (p = v(p), p === O) break;
        return p;
      }
    }
    function C(g, p, v = (y) => y) {
      const y = (...G) => j.fire(v(...G)), S = () => g.on(p, y), L = () => g.removeListener(p, y), j = new ae({ onWillAddFirstListener: S, onDidRemoveLastListener: L });
      return j.event;
    }
    e.fromNodeEventEmitter = C;
    function _(g) {
      let p;
      const v = () => {
        p = g.subscribe((L) => S.fire(L));
      }, y = () => {
        p?.unsubscribe(), p = void 0;
      }, S = new ae({ onWillAddFirstListener: v, onDidRemoveLastListener: y });
      return S.event;
    }
    e.fromRxJS = _;
    function T(g, p, v = (y) => y) {
      const y = (...G) => j.fire(v(...G)), S = () => g.addEventListener(p, y), L = () => g.removeEventListener(p, y), j = new ae({ onWillAddFirstListener: S, onDidRemoveLastListener: L });
      return j.event;
    }
    e.fromDOMEventEmitter = T;
    function I(g, p) {
      return new Promise((v) => s(g)(v, null, p));
    }
    e.toPromise = I;
    function A(g) {
      const p = new ae();
      return g.then((v) => {
        p.fire(v);
      }, () => {
        p.fire(void 0);
      }).finally(() => {
        p.dispose();
      }), p.event;
    }
    e.fromPromise = A;
    function U(g, p) {
      return g((v) => p.fire(v));
    }
    e.forward = U;
    function fe(g, p, v) {
      return p(v), g((y) => p(y));
    }
    e.runAndSubscribe = fe;
    class $ {
      constructor(p, v) {
        this._observable = p, this._counter = 0, this._hasChanged = false;
        const y = { onWillAddFirstListener: () => {
          p.addObserver(this), this._observable.reportChanges();
        }, onDidRemoveLastListener: () => {
          p.removeObserver(this);
        } };
        v || t(y), this.emitter = new ae(y), v && v.add(this.emitter);
      }
      beginUpdate(p) {
        this._counter++;
      }
      handlePossibleChange(p) {
      }
      handleChange(p, v) {
        this._hasChanged = true;
      }
      endUpdate(p) {
        this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
      }
    }
    function We(g, p) {
      return new $(g, p).emitter.event;
    }
    e.fromObservable = We;
    function ne(g) {
      return (p, v, y) => {
        let S = 0, L = false;
        const j = { beginUpdate() {
          S++;
        }, endUpdate() {
          S--, S === 0 && (g.reportChanges(), L && (L = false, p.call(v)));
        }, handlePossibleChange() {
        }, handleChange() {
          L = true;
        } };
        g.addObserver(j), g.reportChanges();
        const G = { dispose() {
          g.removeObserver(j);
        } };
        return y instanceof Re ? y.add(G) : Array.isArray(y) && y.push(G), G;
      };
    }
    e.fromObservableLight = ne;
  })(oe || (oe = {})), qt = class Z1 {
    constructor(t) {
      this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${Z1._idPool++}`, Z1.all.add(this);
    }
    start(t) {
      this._stopWatch = new ks(), this.listenerCount = t;
    }
    stop() {
      if (this._stopWatch) {
        const t = this._stopWatch.elapsed();
        this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
      }
    }
  }, qt.all = /* @__PURE__ */ new Set(), qt._idPool = 0, Ts = qt, Wr = -1, Os = 1, Ls = class {
    constructor(e, t, r = Ps()) {
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
        const [n, a] = this.getMostFrequentStack(), o = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${a}):`;
        console.warn(o), console.warn(n);
        const l = a / t > 0.3 ? "dominated" : "popular", c = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, h = new Ur(l, o, n, t, c);
        this._errorHandler(h), ft(h, "emitter_listener_leak");
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
  }, Bt = class Eo {
    constructor(t) {
      this.value = t;
    }
    static create() {
      const t = new Error();
      return new Eo(t.stack ?? "");
    }
    print() {
      console.warn(this.value.split(`
`).slice(2).join(`
`));
    }
  }, Ur = class extends Error {
    constructor(e, t, r, s, i) {
      super(i ? `[${i}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = s, this.details = t, this.stack = r;
    }
  }, Rs = class extends Ur {
    constructor(e, t, r, s, i) {
      super(e, t, r, s, i), this.name = "ListenerRefusalError";
    }
  }, gt = class {
    constructor(e) {
      this.value = e;
    }
  }, xs = 2, qr = (e, t) => {
    if (e instanceof gt) t(e);
    else for (let r = 0; r < e.length; r++) {
      const s = e[r];
      s && t(s);
    }
  }, ae = class {
    constructor(e) {
      this._size = 0, this._options = e, (Wr > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? Wr, this._leakWarningName = this._options?.leakWarningName ?? Ps(), this._leakWarningErrorHandler = this._options?.onListenerError ?? $t), this._perfMon = this._options?._profName ? new Ts(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
    }
    _getLeakageMonitor() {
      if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new Ls(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
    }
    dispose() {
      if (!this._disposed) {
        if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
          if (jr) {
            const e = this._listeners;
            queueMicrotask(() => {
              qr(e, (t) => t.stack?.print());
            });
          }
          qr(this._listeners, (e) => {
            e.value = void 0;
          }), this._listeners = void 0, this._size = 0;
        }
        this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
      }
    }
    get event() {
      return this._event ??= (e, t, r) => {
        if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
          const o = this._getLeakageMonitor();
          if (o) {
            const l = `[${o.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${o.threshold})`;
            console.warn(l);
            const c = o.getMostFrequentStack() ?? ["UNKNOWN stack", -1], h = c[1] / this._size > 0.3 ? "dominated" : "popular", u = new Rs(h, `${l}. HINT: Stack shows most frequent listener (${c[1]}-times)`, c[0], this._size, this._options?.leakWarningName);
            return (this._options?.onListenerError || $t)(u), ft(u, "emitter_listener_refusal"), _e.None;
          }
        }
        if (this._disposed) {
          const o = new Error("Trying to listen to an Emitter that has already been disposed of.");
          return ft(o, "emitter_use_after_dispose"), _e.None;
        }
        t && (e = e.bind(t));
        const s = new gt(e);
        let i, n;
        if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
          const o = this._getLeakageMonitor();
          o && (s.stack = Bt.create(), i = o.check(s.stack, this._size + 1));
        }
        jr && (s.stack = n ?? Bt.create()), this._listeners ? this._listeners instanceof gt ? (this._deliveryQueue ??= new Is(), this._listeners = [this._listeners, s]) : this._listeners.push(s) : (this._options?.onWillAddFirstListener?.(this), this._listeners = s, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
        const a = qe(() => {
          i?.(), this._removeListener(s);
        });
        return r instanceof Re ? r.add(a) : Array.isArray(r) && r.push(a), a;
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
      if (this._size * xs <= t.length) {
        let i = 0;
        for (let n = 0; n < t.length; n++) t[n] ? t[i++] = t[n] : s && i < this._deliveryQueue.end && (this._deliveryQueue.end--, i < this._deliveryQueue.i && this._deliveryQueue.i--);
        t.length = i;
      }
    }
    _deliver(e, t) {
      if (!e) return;
      const r = this._options?.onListenerError || $t;
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
      if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof gt) this._deliver(this._listeners, e);
      else {
        const t = this._deliveryQueue;
        t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
      }
      this._perfMon?.stop();
    }
    hasListeners() {
      return this._size > 0;
    }
  }, Is = class {
    constructor() {
      this.i = -1, this.end = 0;
    }
    enqueue(e, t, r) {
      this.i = 0, this.end = r, this.current = e, this.value = t;
    }
    reset() {
      this.i = this.end, this.current = void 0, this.value = void 0;
    }
  };
} });
function ra() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function Ns() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var Ms = E({ "nls.messages.js"() {
  "use strict";
  w();
} });
function Fs(e, t) {
  let r;
  return t.length === 0 ? r = e : r = e.replace(/\{(\d+)\}/g, (s, i) => {
    const n = parseInt(i, 10), a = t[n];
    let o = s;
    return typeof a == "string" ? o = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (o = String(a)), o;
  }), $s && (r = "［" + r.replace(/[aouei]/g, "$&$&") + "］"), r;
}
function b(e, t, ...r) {
  return Fs(typeof e == "number" ? sa(e, t) : t, r);
}
function sa(e, t) {
  const r = ra()?.[e];
  if (typeof r != "string") {
    if (typeof t == "string") return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return r;
}
var $s, Vt = E({ "nls.js"() {
  "use strict";
  w(), Ms(), Ms(), $s = Ns() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
} }), Be, _t, yt, tt, js, Vr, zt, Ws, Us, qs, Bs, vt, wt, zr, Vs, ye, ve, K, Gr, zs, Gt, V, xe, we, Gs, Hs, Ks, Js, de, Ae, Qs, Ys, Zs, Xs, ia, na, oa, aa, la, ca, ua, X = E({ "platform.js"() {
  "use strict";
  if (w(), Vt(), Be = "en", _t = false, yt = false, tt = false, js = false, Vr = false, zt = false, Ws = false, Us = false, qs = false, Bs = false, vt = void 0, wt = Be, zr = Be, Vs = void 0, ye = void 0, ve = globalThis, K = void 0, typeof ve.vscode < "u" && typeof ve.vscode.process < "u" ? K = ve.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (K = process), Gr = typeof K?.versions?.electron == "string", zs = Gr && K?.type === "renderer", typeof K == "object") {
    _t = K.platform === "win32", yt = K.platform === "darwin", tt = K.platform === "linux", js = tt && !!K.env.SNAP && !!K.env.SNAP_REVISION, Ws = Gr, qs = !!K.env.CI || !!K.env.BUILD_ARTIFACTSTAGINGDIRECTORY, vt = Be, wt = Be;
    const e = K.env.VSCODE_NLS_CONFIG;
    if (e) try {
      const t = JSON.parse(e);
      vt = t.userLocale, zr = t.osLocale, wt = t.resolvedLanguage || Be, Vs = t.languagePack?.translationsConfigFile;
    } catch {
    }
    Vr = true;
  } else typeof navigator == "object" && !zs ? (ye = navigator.userAgent, _t = ye.indexOf("Windows") >= 0, yt = ye.indexOf("Macintosh") >= 0, Us = (ye.indexOf("Macintosh") >= 0 || ye.indexOf("iPad") >= 0 || ye.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, tt = ye.indexOf("Linux") >= 0, Bs = ye?.indexOf("Mobi") >= 0, zt = true, wt = Ns() || Be, vt = navigator.language.toLowerCase(), zr = vt) : console.error("Unable to resolve platform.");
  Gt = 0, yt ? Gt = 1 : _t ? Gt = 3 : tt && (Gt = 2), V = _t, xe = yt, we = tt, Gs = Vr, Hs = zt, Ks = zt && typeof ve.importScripts == "function", Js = Ks ? ve.origin : void 0, de = ye, Ae = wt, ((e) => {
    function t() {
      return Ae;
    }
    e.value = t;
    function r() {
      return Ae.length === 2 ? Ae === "en" : Ae.length >= 3 ? Ae[0] === "e" && Ae[1] === "n" && Ae[2] === "-" : false;
    }
    e.isDefaultVariant = r;
    function s() {
      return Ae === "en";
    }
    e.isDefault = s;
  })(Qs || (Qs = {})), Ys = typeof ve.postMessage == "function" && !ve.importScripts, Zs = (() => {
    if (Ys) {
      const e = [];
      ve.addEventListener("message", (r) => {
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
        e.push({ id: s, callback: r }), ve.postMessage({ vscodeScheduleAsyncWork: s }, "*");
      };
    }
    return (e) => setTimeout(e);
  })(), Xs = !!(de && de.indexOf("Chrome") >= 0), ia = !!(de && de.indexOf("Firefox") >= 0), na = !!(!Xs && de && de.indexOf("Safari") >= 0), oa = !!(de && de.indexOf("Edg/") >= 0), aa = !!(de && de.indexOf("Android") >= 0), la = K?.arch, ca = K?.platform, ua = K?.versions?.node;
} }), Ve, Ht, rt, Kt, ei, ha, Hr = E({ "process.js"() {
  "use strict";
  if (w(), X(), Ht = globalThis.vscode, typeof Ht < "u" && typeof Ht.process < "u") {
    const e = Ht.process;
    Ve = { get platform() {
      return e.platform;
    }, get arch() {
      return e.arch;
    }, get env() {
      return e.env;
    }, cwd() {
      return e.cwd();
    } };
  } else typeof process < "u" && typeof process?.versions?.node == "string" ? Ve = { get platform() {
    return process.platform;
  }, get arch() {
    return process.arch;
  }, get env() {
    return process.env;
  }, cwd() {
    return process.env.VSCODE_CWD || process.cwd();
  } } : Ve = { get platform() {
    return V ? "win32" : xe ? "darwin" : "linux";
  }, get arch() {
  }, get env() {
    return {};
  }, cwd() {
    return "/";
  } };
  rt = Ve.cwd, Kt = Ve.env, ei = Ve.platform, ha = Ve.arch;
} });
function fa(e, t) {
  if (e === null || typeof e != "object") throw new Jr(t, "Object", e);
}
function q(e, t) {
  if (typeof e != "string") throw new Jr(t, "string", e);
}
function R(e) {
  return e === z || e === ee;
}
function Kr(e) {
  return e === z;
}
function ke(e) {
  return e >= ri && e <= ii || e >= si && e <= ni;
}
function Jt(e, t, r, s) {
  let i = "", n = 0, a = -1, o = 0, l = 0;
  for (let c = 0; c <= e.length; ++c) {
    if (c < e.length) l = e.charCodeAt(c);
    else {
      if (s(l)) break;
      l = z;
    }
    if (s(l)) {
      if (!(a === c - 1 || o === 1)) if (o === 2) {
        if (i.length < 2 || n !== 2 || i.charCodeAt(i.length - 1) !== Ie || i.charCodeAt(i.length - 2) !== Ie) {
          if (i.length > 2) {
            const h = i.lastIndexOf(r);
            h === -1 ? (i = "", n = 0) : (i = i.slice(0, h), n = i.length - 1 - i.lastIndexOf(r)), a = c, o = 0;
            continue;
          } else if (i.length !== 0) {
            i = "", n = 0, a = c, o = 0;
            continue;
          }
        }
        t && (i += i.length > 0 ? `${r}..` : "..", n = 2);
      } else i.length > 0 ? i += `${r}${e.slice(a + 1, c)}` : i = e.slice(a + 1, c), n = c - a - 1;
      a = c, o = 0;
    } else l === Ie && o !== -1 ? ++o : o = -1;
  }
  return i;
}
function da(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function ti(e, t) {
  fa(t, "pathObject");
  const r = t.dir || t.root, s = t.base || `${t.name || ""}${da(t.ext)}`;
  return r ? r === t.root ? `${r}${s}` : `${r}${e}${s}` : s;
}
var ri, si, ii, ni, Ie, z, ee, be, oi, Jr, te, B, ai, F, Qt, ze, Q, Qr, li, Ne, st, ci, pa, ma, ga, ie, _a, le = E({ "path.js"() {
  "use strict";
  w(), Hr(), ri = 65, si = 97, ii = 90, ni = 122, Ie = 46, z = 47, ee = 92, be = 58, oi = 63, Jr = class extends Error {
    constructor(e, t, r) {
      let s;
      typeof t == "string" && t.indexOf("not ") === 0 ? (s = "must not be", t = t.replace(/^not /, "")) : s = "must be";
      const i = e.indexOf(".") !== -1 ? "property" : "argument";
      let n = `The "${e}" ${i} ${s} of type ${t}`;
      n += `. Received type ${typeof r}`, super(n), this.code = "ERR_INVALID_ARG_TYPE";
    }
  }, te = ei === "win32", B = { resolve(...e) {
    let t = "", r = "", s = false;
    for (let i = e.length - 1; i >= -1; i--) {
      let n;
      if (i >= 0) {
        if (n = e[i], q(n, `paths[${i}]`), n.length === 0) continue;
      } else t.length === 0 ? n = rt() : (n = Kt[`=${t}`] || rt(), (n === void 0 || n.slice(0, 2).toLowerCase() !== t.toLowerCase() && n.charCodeAt(2) === ee) && (n = `${t}\\`));
      const a = n.length;
      let o = 0, l = "", c = false;
      const h = n.charCodeAt(0);
      if (a === 1) R(h) && (o = 1, c = true);
      else if (R(h)) if (c = true, R(n.charCodeAt(1))) {
        let u = 2, f = u;
        for (; u < a && !R(n.charCodeAt(u)); ) u++;
        if (u < a && u !== f) {
          const d = n.slice(f, u);
          for (f = u; u < a && R(n.charCodeAt(u)); ) u++;
          if (u < a && u !== f) {
            for (f = u; u < a && !R(n.charCodeAt(u)); ) u++;
            (u === a || u !== f) && (l = `\\\\${d}\\${n.slice(f, u)}`, o = u);
          }
        }
      } else o = 1;
      else ke(h) && n.charCodeAt(1) === be && (l = n.slice(0, 2), o = 2, a > 2 && R(n.charCodeAt(2)) && (c = true, o = 3));
      if (l.length > 0) if (t.length > 0) {
        if (l.toLowerCase() !== t.toLowerCase()) continue;
      } else t = l;
      if (s) {
        if (t.length > 0) break;
      } else if (r = `${n.slice(o)}\\${r}`, s = c, c && t.length > 0) break;
    }
    return r = Jt(r, !s, "\\", R), s ? `${t}\\${r}` : `${t}${r}` || ".";
  }, normalize(e) {
    q(e, "path");
    const t = e.length;
    if (t === 0) return ".";
    let r = 0, s, i = false;
    const n = e.charCodeAt(0);
    if (t === 1) return Kr(n) ? "\\" : e;
    if (R(n)) if (i = true, R(e.charCodeAt(1))) {
      let o = 2, l = o;
      for (; o < t && !R(e.charCodeAt(o)); ) o++;
      if (o < t && o !== l) {
        const c = e.slice(l, o);
        for (l = o; o < t && R(e.charCodeAt(o)); ) o++;
        if (o < t && o !== l) {
          for (l = o; o < t && !R(e.charCodeAt(o)); ) o++;
          if (o === t) return `\\\\${c}\\${e.slice(l)}\\`;
          o !== l && (s = `\\\\${c}\\${e.slice(l, o)}`, r = o);
        }
      }
    } else r = 1;
    else ke(n) && e.charCodeAt(1) === be && (s = e.slice(0, 2), r = 2, t > 2 && R(e.charCodeAt(2)) && (i = true, r = 3));
    let a = r < t ? Jt(e.slice(r), !i, "\\", R) : "";
    if (a.length === 0 && !i && (a = "."), a.length > 0 && R(e.charCodeAt(t - 1)) && (a += "\\"), !i && s === void 0 && e.includes(":")) {
      if (a.length >= 2 && ke(a.charCodeAt(0)) && a.charCodeAt(1) === be) return `.\\${a}`;
      let o = e.indexOf(":");
      do
        if (o === t - 1 || R(e.charCodeAt(o + 1))) return `.\\${a}`;
      while ((o = e.indexOf(":", o + 1)) !== -1);
    }
    return s === void 0 ? i ? `\\${a}` : a : i ? `${s}\\${a}` : `${s}${a}`;
  }, isAbsolute(e) {
    q(e, "path");
    const t = e.length;
    if (t === 0) return false;
    const r = e.charCodeAt(0);
    return R(r) || t > 2 && ke(r) && e.charCodeAt(1) === be && R(e.charCodeAt(2));
  }, join(...e) {
    if (e.length === 0) return ".";
    let t, r;
    for (let n = 0; n < e.length; ++n) {
      const a = e[n];
      q(a, "path"), a.length > 0 && (t === void 0 ? t = r = a : t += `\\${a}`);
    }
    if (t === void 0) return ".";
    let s = true, i = 0;
    if (typeof r == "string" && R(r.charCodeAt(0))) {
      ++i;
      const n = r.length;
      n > 1 && R(r.charCodeAt(1)) && (++i, n > 2 && (R(r.charCodeAt(2)) ? ++i : s = false));
    }
    if (s) {
      for (; i < t.length && R(t.charCodeAt(i)); ) i++;
      i >= 2 && (t = `\\${t.slice(i)}`);
    }
    return B.normalize(t);
  }, relative(e, t) {
    if (q(e, "from"), q(t, "to"), e === t) return "";
    const r = B.resolve(e), s = B.resolve(t);
    if (r === s || (e = r.toLowerCase(), t = s.toLowerCase(), e === t)) return "";
    if (r.length !== e.length || s.length !== t.length) {
      const m = r.split("\\"), k = s.split("\\");
      m[m.length - 1] === "" && m.pop(), k[k.length - 1] === "" && k.pop();
      const D = m.length, P = k.length, x = D < P ? D : P;
      let O;
      for (O = 0; O < x && m[O].toLowerCase() === k[O].toLowerCase(); O++) ;
      return O === 0 ? s : O === x ? P > x ? k.slice(O).join("\\") : D > x ? "..\\".repeat(D - 1 - O) + ".." : "" : "..\\".repeat(D - O) + k.slice(O).join("\\");
    }
    let i = 0;
    for (; i < e.length && e.charCodeAt(i) === ee; ) i++;
    let n = e.length;
    for (; n - 1 > i && e.charCodeAt(n - 1) === ee; ) n--;
    const a = n - i;
    let o = 0;
    for (; o < t.length && t.charCodeAt(o) === ee; ) o++;
    let l = t.length;
    for (; l - 1 > o && t.charCodeAt(l - 1) === ee; ) l--;
    const c = l - o, h = a < c ? a : c;
    let u = -1, f = 0;
    for (; f < h; f++) {
      const m = e.charCodeAt(i + f);
      if (m !== t.charCodeAt(o + f)) break;
      m === ee && (u = f);
    }
    if (f !== h) {
      if (u === -1) return s;
    } else {
      if (c > h) {
        if (t.charCodeAt(o + f) === ee) return s.slice(o + f + 1);
        if (f === 2) return s.slice(o + f);
      }
      a > h && (e.charCodeAt(i + f) === ee ? u = f : f === 2 && (u = 3)), u === -1 && (u = 0);
    }
    let d = "";
    for (f = i + u + 1; f <= n; ++f) (f === n || e.charCodeAt(f) === ee) && (d += d.length === 0 ? ".." : "\\..");
    return o += u, d.length > 0 ? `${d}${s.slice(o, l)}` : (s.charCodeAt(o) === ee && ++o, s.slice(o, l));
  }, toNamespacedPath(e) {
    if (typeof e != "string" || e.length === 0) return e;
    const t = B.resolve(e);
    if (t.length <= 2) return e;
    if (t.charCodeAt(0) === ee) {
      if (t.charCodeAt(1) === ee) {
        const r = t.charCodeAt(2);
        if (r !== oi && r !== Ie) return `\\\\?\\UNC\\${t.slice(2)}`;
      }
    } else if (ke(t.charCodeAt(0)) && t.charCodeAt(1) === be && t.charCodeAt(2) === ee) return `\\\\?\\${t}`;
    return t;
  }, dirname(e) {
    q(e, "path");
    const t = e.length;
    if (t === 0) return ".";
    let r = -1, s = 0;
    const i = e.charCodeAt(0);
    if (t === 1) return R(i) ? e : ".";
    if (R(i)) {
      if (r = s = 1, R(e.charCodeAt(1))) {
        let o = 2, l = o;
        for (; o < t && !R(e.charCodeAt(o)); ) o++;
        if (o < t && o !== l) {
          for (l = o; o < t && R(e.charCodeAt(o)); ) o++;
          if (o < t && o !== l) {
            for (l = o; o < t && !R(e.charCodeAt(o)); ) o++;
            if (o === t) return e;
            o !== l && (r = s = o + 1);
          }
        }
      }
    } else ke(i) && e.charCodeAt(1) === be && (r = t > 2 && R(e.charCodeAt(2)) ? 3 : 2, s = r);
    let n = -1, a = true;
    for (let o = t - 1; o >= s; --o) if (R(e.charCodeAt(o))) {
      if (!a) {
        n = o;
        break;
      }
    } else a = false;
    if (n === -1) {
      if (r === -1) return ".";
      n = r;
    }
    return e.slice(0, n);
  }, basename(e, t) {
    t !== void 0 && q(t, "suffix"), q(e, "path");
    let r = 0, s = -1, i = true, n;
    if (e.length >= 2 && ke(e.charCodeAt(0)) && e.charCodeAt(1) === be && (r = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t === e) return "";
      let a = t.length - 1, o = -1;
      for (n = e.length - 1; n >= r; --n) {
        const l = e.charCodeAt(n);
        if (R(l)) {
          if (!i) {
            r = n + 1;
            break;
          }
        } else o === -1 && (i = false, o = n + 1), a >= 0 && (l === t.charCodeAt(a) ? --a === -1 && (s = n) : (a = -1, s = o));
      }
      return r === s ? s = o : s === -1 && (s = e.length), e.slice(r, s);
    }
    for (n = e.length - 1; n >= r; --n) if (R(e.charCodeAt(n))) {
      if (!i) {
        r = n + 1;
        break;
      }
    } else s === -1 && (i = false, s = n + 1);
    return s === -1 ? "" : e.slice(r, s);
  }, extname(e) {
    q(e, "path");
    let t = 0, r = -1, s = 0, i = -1, n = true, a = 0;
    e.length >= 2 && e.charCodeAt(1) === be && ke(e.charCodeAt(0)) && (t = s = 2);
    for (let o = e.length - 1; o >= t; --o) {
      const l = e.charCodeAt(o);
      if (R(l)) {
        if (!n) {
          s = o + 1;
          break;
        }
        continue;
      }
      i === -1 && (n = false, i = o + 1), l === Ie ? r === -1 ? r = o : a !== 1 && (a = 1) : r !== -1 && (a = -1);
    }
    return r === -1 || i === -1 || a === 0 || a === 1 && r === i - 1 && r === s + 1 ? "" : e.slice(r, i);
  }, format: ti.bind(null, "\\"), parse(e) {
    q(e, "path");
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0) return t;
    const r = e.length;
    let s = 0, i = e.charCodeAt(0);
    if (r === 1) return R(i) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
    if (R(i)) {
      if (s = 1, R(e.charCodeAt(1))) {
        let u = 2, f = u;
        for (; u < r && !R(e.charCodeAt(u)); ) u++;
        if (u < r && u !== f) {
          for (f = u; u < r && R(e.charCodeAt(u)); ) u++;
          if (u < r && u !== f) {
            for (f = u; u < r && !R(e.charCodeAt(u)); ) u++;
            u === r ? s = u : u !== f && (s = u + 1);
          }
        }
      }
    } else if (ke(i) && e.charCodeAt(1) === be) {
      if (r <= 2) return t.root = t.dir = e, t;
      if (s = 2, R(e.charCodeAt(2))) {
        if (r === 3) return t.root = t.dir = e, t;
        s = 3;
      }
    }
    s > 0 && (t.root = e.slice(0, s));
    let n = -1, a = s, o = -1, l = true, c = e.length - 1, h = 0;
    for (; c >= s; --c) {
      if (i = e.charCodeAt(c), R(i)) {
        if (!l) {
          a = c + 1;
          break;
        }
        continue;
      }
      o === -1 && (l = false, o = c + 1), i === Ie ? n === -1 ? n = c : h !== 1 && (h = 1) : n !== -1 && (h = -1);
    }
    return o !== -1 && (n === -1 || h === 0 || h === 1 && n === o - 1 && n === a + 1 ? t.base = t.name = e.slice(a, o) : (t.name = e.slice(a, n), t.base = e.slice(a, o), t.ext = e.slice(n, o))), a > 0 && a !== s ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
  }, sep: "\\", delimiter: ";", win32: null, posix: null }, ai = (() => {
    if (te) {
      const e = /\\/g;
      return () => {
        const t = rt().replace(e, "/");
        return t.slice(t.indexOf("/"));
      };
    }
    return () => rt();
  })(), F = { resolve(...e) {
    let t = "", r = false;
    for (let s = e.length - 1; s >= 0 && !r; s--) {
      const i = e[s];
      q(i, `paths[${s}]`), i.length !== 0 && (t = `${i}/${t}`, r = i.charCodeAt(0) === z);
    }
    if (!r) {
      const s = ai();
      t = `${s}/${t}`, r = s.charCodeAt(0) === z;
    }
    return t = Jt(t, !r, "/", Kr), r ? `/${t}` : t.length > 0 ? t : ".";
  }, normalize(e) {
    if (q(e, "path"), e.length === 0) return ".";
    const t = e.charCodeAt(0) === z, r = e.charCodeAt(e.length - 1) === z;
    return e = Jt(e, !t, "/", Kr), e.length === 0 ? t ? "/" : r ? "./" : "." : (r && (e += "/"), t ? `/${e}` : e);
  }, isAbsolute(e) {
    return q(e, "path"), e.length > 0 && e.charCodeAt(0) === z;
  }, join(...e) {
    if (e.length === 0) return ".";
    const t = [];
    for (let r = 0; r < e.length; ++r) {
      const s = e[r];
      q(s, "path"), s.length > 0 && t.push(s);
    }
    return t.length === 0 ? "." : F.normalize(t.join("/"));
  }, relative(e, t) {
    if (q(e, "from"), q(t, "to"), e === t || (e = F.resolve(e), t = F.resolve(t), e === t)) return "";
    const r = 1, s = e.length, i = s - r, n = 1, a = t.length - n, o = i < a ? i : a;
    let l = -1, c = 0;
    for (; c < o; c++) {
      const u = e.charCodeAt(r + c);
      if (u !== t.charCodeAt(n + c)) break;
      u === z && (l = c);
    }
    if (c === o) if (a > o) {
      if (t.charCodeAt(n + c) === z) return t.slice(n + c + 1);
      if (c === 0) return t.slice(n + c);
    } else i > o && (e.charCodeAt(r + c) === z ? l = c : c === 0 && (l = 0));
    let h = "";
    for (c = r + l + 1; c <= s; ++c) (c === s || e.charCodeAt(c) === z) && (h += h.length === 0 ? ".." : "/..");
    return `${h}${t.slice(n + l)}`;
  }, toNamespacedPath(e) {
    return e;
  }, dirname(e) {
    if (q(e, "path"), e.length === 0) return ".";
    const t = e.charCodeAt(0) === z;
    let r = -1, s = true;
    for (let i = e.length - 1; i >= 1; --i) if (e.charCodeAt(i) === z) {
      if (!s) {
        r = i;
        break;
      }
    } else s = false;
    return r === -1 ? t ? "/" : "." : t && r === 1 ? "//" : e.slice(0, r);
  }, basename(e, t) {
    t !== void 0 && q(t, "suffix"), q(e, "path");
    let r = 0, s = -1, i = true, n;
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t === e) return "";
      let a = t.length - 1, o = -1;
      for (n = e.length - 1; n >= 0; --n) {
        const l = e.charCodeAt(n);
        if (l === z) {
          if (!i) {
            r = n + 1;
            break;
          }
        } else o === -1 && (i = false, o = n + 1), a >= 0 && (l === t.charCodeAt(a) ? --a === -1 && (s = n) : (a = -1, s = o));
      }
      return r === s ? s = o : s === -1 && (s = e.length), e.slice(r, s);
    }
    for (n = e.length - 1; n >= 0; --n) if (e.charCodeAt(n) === z) {
      if (!i) {
        r = n + 1;
        break;
      }
    } else s === -1 && (i = false, s = n + 1);
    return s === -1 ? "" : e.slice(r, s);
  }, extname(e) {
    q(e, "path");
    let t = -1, r = 0, s = -1, i = true, n = 0;
    for (let a = e.length - 1; a >= 0; --a) {
      const o = e[a];
      if (o === "/") {
        if (!i) {
          r = a + 1;
          break;
        }
        continue;
      }
      s === -1 && (i = false, s = a + 1), o === "." ? t === -1 ? t = a : n !== 1 && (n = 1) : t !== -1 && (n = -1);
    }
    return t === -1 || s === -1 || n === 0 || n === 1 && t === s - 1 && t === r + 1 ? "" : e.slice(t, s);
  }, format: ti.bind(null, "/"), parse(e) {
    q(e, "path");
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0) return t;
    const r = e.charCodeAt(0) === z;
    let s;
    r ? (t.root = "/", s = 1) : s = 0;
    let i = -1, n = 0, a = -1, o = true, l = e.length - 1, c = 0;
    for (; l >= s; --l) {
      const h = e.charCodeAt(l);
      if (h === z) {
        if (!o) {
          n = l + 1;
          break;
        }
        continue;
      }
      a === -1 && (o = false, a = l + 1), h === Ie ? i === -1 ? i = l : c !== 1 && (c = 1) : i !== -1 && (c = -1);
    }
    if (a !== -1) {
      const h = n === 0 && r ? 1 : n;
      i === -1 || c === 0 || c === 1 && i === a - 1 && i === n + 1 ? t.base = t.name = e.slice(h, a) : (t.name = e.slice(h, i), t.base = e.slice(h, a), t.ext = e.slice(i, a));
    }
    return n > 0 ? t.dir = e.slice(0, n - 1) : r && (t.dir = "/"), t;
  }, sep: "/", delimiter: ":", win32: null, posix: null }, F.win32 = B.win32 = B, F.posix = B.posix = F, Qt = te ? B.normalize : F.normalize, ze = te ? B.isAbsolute : F.isAbsolute, Q = te ? B.join : F.join, Qr = te ? B.resolve : F.resolve, li = te ? B.relative : F.relative, Ne = te ? B.dirname : F.dirname, st = te ? B.basename : F.basename, ci = te ? B.extname : F.extname, pa = te ? B.format : F.format, ma = te ? B.parse : F.parse, ga = te ? B.toNamespacedPath : F.toNamespacedPath, ie = te ? B.sep : F.sep, _a = te ? B.delimiter : F.delimiter;
} });
function ya() {
  return 1025 + Math.floor(64510 * Math.random());
}
var va = E({ "ports.js"() {
  "use strict";
  w();
} }), Yr, Yt, bt, it, Zt = E({ "cancellation.js"() {
  "use strict";
  w(), Br(), Yr = Object.freeze(function(e, t) {
    const r = setTimeout(e.bind(t), 0);
    return { dispose() {
      clearTimeout(r);
    } };
  }), ((e) => {
    function t(r) {
      return r === e.None || r === e.Cancelled || r instanceof bt ? true : !r || typeof r != "object" ? false : typeof r.isCancellationRequested == "boolean" && typeof r.onCancellationRequested == "function";
    }
    e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: oe.None }), e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: Yr });
  })(Yt || (Yt = {})), bt = class {
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
      return this._isCancelled ? Yr : (this._emitter || (this._emitter = new ae()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = null);
    }
  }, it = class {
    constructor(e) {
      this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
    }
    get token() {
      return this._token || (this._token = new bt()), this._token;
    }
    cancel() {
      this._token ? this._token instanceof bt && this._token.cancel() : this._token = Yt.Cancelled;
    }
    dispose(e = false) {
      e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof bt && this._token.dispose() : this._token = Yt.None;
    }
  };
} });
function wa(e) {
  return e;
}
var ui, ba = E({ "cache.js"() {
  "use strict";
  w(), Zt(), ui = class {
    constructor(e, t) {
      this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = wa) : (this._fn = t, this._computeKey = e.getCacheKey);
    }
    get(e) {
      const t = this._computeKey(e);
      return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
    }
  };
} }), Me, Ct = E({ "lazy.js"() {
  "use strict";
  w(), Me = class {
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
} }), Ca = E({ "strings.cursor.js"() {
  "use strict";
  w();
} });
function hi(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function Ea(e, t) {
  if (!e || !t) return e;
  const r = t.length, s = e.length;
  if (r === 1) {
    let n = s;
    const a = t.charCodeAt(0);
    for (; n > 0 && e.charCodeAt(n - 1) === a; ) n--;
    return e.substring(0, n);
  }
  let i = s;
  for (; i > 0 && e.endsWith(t, i); ) i -= r;
  return e.substring(0, i);
}
function Zr(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Xr(e, t, r = 0, s = e.length, i = 0, n = t.length) {
  for (; r < s && i < n; r++, i++) {
    const l = e.charCodeAt(r), c = t.charCodeAt(i);
    if (l < c) return -1;
    if (l > c) return 1;
  }
  const a = s - r, o = n - i;
  return a < o ? -1 : a > o ? 1 : 0;
}
function fi(e, t) {
  return Ge(e, t, 0, e.length, 0, t.length);
}
function Ge(e, t, r = 0, s = e.length, i = 0, n = t.length) {
  for (; r < s && i < n; r++, i++) {
    let l = e.charCodeAt(r), c = t.charCodeAt(i);
    if (l === c) continue;
    if (l >= 128 || c >= 128) return Xr(e.toLowerCase(), t.toLowerCase(), r, s, i, n);
    di(l) && (l -= 32), di(c) && (c -= 32);
    const h = l - c;
    if (h !== 0) return h;
  }
  const a = s - r, o = n - i;
  return a < o ? -1 : a > o ? 1 : 0;
}
function di(e) {
  return e >= 97 && e <= 122;
}
function e1(e, t) {
  return e.length === t.length && Ge(e, t) === 0;
}
function Sa(e, t) {
  const r = t.length;
  return t.length > e.length ? false : Ge(e, t, 0, r) === 0;
}
function Aa(e, t) {
  const r = e.length, s = r - t.length;
  return s >= 0 && Ge(e, t, s, r) === 0;
}
function ka() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var pi, mi, gi, Pa, Da, _i, He, yi, Ke = E({ "strings.js"() {
  "use strict";
  w(), ba(), Ct(), Ca(), pi = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, mi = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, gi = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, Pa = new RegExp("(?:" + [pi.source, mi.source, gi.source].join("|") + ")", "g"), Da = "\uFEFF", _i = class xt {
    static getInstance() {
      return xt._INSTANCE || (xt._INSTANCE = new xt()), xt._INSTANCE;
    }
    constructor() {
      this._data = ka();
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
  }, _i._INSTANCE = null, He = class X1 {
    constructor(t) {
      this.confusableDictionary = t;
    }
    static getInstance(t) {
      return X1.cache.get(Array.from(t).join(","));
    }
    static getLocales() {
      return X1._locales.value;
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
  }, He.ambiguousCharacterData = new Me(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), He.cache = new ui((e) => {
    const t = e.split(",");
    function r(h) {
      const u = /* @__PURE__ */ new Map();
      for (let f = 0; f < h.length; f += 2) u.set(h[f], h[f + 1]);
      return u;
    }
    function s(h, u) {
      const f = new Map(h);
      for (const [d, m] of u) f.set(d, m);
      return f;
    }
    function i(h, u) {
      if (!h) return u;
      const f = /* @__PURE__ */ new Map();
      for (const [d, m] of h) u.has(d) && f.set(d, m);
      return f;
    }
    const n = He.ambiguousCharacterData.value;
    let a = t.filter((h) => !h.startsWith("_") && h in n);
    a.length === 0 && (a = ["_default"]);
    let o;
    for (const h of a) {
      const u = r(n[h]);
      o = i(o, u);
    }
    const l = r(n._common), c = s(l, o);
    return new He(c);
  }), He._locales = new Me(() => Object.keys(He.ambiguousCharacterData.value).filter((e) => !e.startsWith("_"))), yi = class It {
    static getRawData() {
      return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
    }
    static getData() {
      return this._data || (this._data = new Set([...Object.values(It.getRawData())].flat())), this._data;
    }
    static isInvisibleCharacter(t) {
      return It.getData().has(t);
    }
    static containsInvisibleCharacter(t) {
      for (let r = 0; r < t.length; r++) {
        const s = t.codePointAt(r);
        if (typeof s == "number" && (It.isInvisibleCharacter(s) || s === 32)) return true;
      }
      return false;
    }
    static get codePoints() {
      return It.getData();
    }
  }, yi._data = void 0;
} });
function Fe(e) {
  return e === 47 || e === 92;
}
function vi(e) {
  return e.replace(/[\\/]/g, F.sep);
}
function Ta(e) {
  return e.indexOf("/") === -1 && (e = vi(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function wi(e, t = F.sep) {
  if (!e) return "";
  const r = e.length, s = e.charCodeAt(0);
  if (Fe(s)) {
    if (Fe(e.charCodeAt(1)) && !Fe(e.charCodeAt(2))) {
      let n = 3;
      const a = n;
      for (; n < r && !Fe(e.charCodeAt(n)); n++) ;
      if (a !== n && !Fe(e.charCodeAt(n + 1))) {
        for (n += 1; n < r; n++) if (Fe(e.charCodeAt(n))) return e.slice(0, n + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (Ci(s) && e.charCodeAt(1) === 58) return Fe(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let i = e.indexOf("://");
  if (i !== -1) {
    for (i += 3; i < r; i++) if (Fe(e.charCodeAt(i))) return e.slice(0, i + 1);
  }
  return "";
}
function Oa(e) {
  if (!V || !e || e.length < 5) return false;
  let t = e.charCodeAt(0);
  if (t !== 92 || (t = e.charCodeAt(1), t !== 92)) return false;
  let r = 2;
  const s = r;
  for (; r < e.length && (t = e.charCodeAt(r), t !== 92); r++) ;
  return !(s === r || (t = e.charCodeAt(r + 1), isNaN(t) || t === 92));
}
function bi(e, t, r) {
  const s = e === t;
  return !r || s ? s : !e || !t ? false : e1(e, t);
}
function La(e, t, r) {
  return r === 0 ? true : e.charCodeAt(0) !== t.charCodeAt(0) ? false : r === 1 ? true : e.charCodeAt(r - 1) !== t.charCodeAt(r - 1) ? false : e.startsWith(t);
}
function Ra(e, t, r) {
  for (let s = 0; s < r; s++) {
    let i = e.charCodeAt(s), n = t.charCodeAt(s);
    if (i !== n) {
      if (i >= 128 || n >= 128) return Ge(e, t, s, r, s, r) === 0;
      if (i >= 97 && i <= 122 && (i -= 32), n >= 97 && n <= 122 && (n -= 32), i !== n) return false;
    }
  }
  return true;
}
function Pe(e, t, r, s = ie) {
  if (e === t) return true;
  if (!e || !t) return false;
  const i = e.length, n = t.length;
  if (n > i) return false;
  const a = s.charCodeAt(0), o = t.charCodeAt(n - 1) === a;
  if (n < i && !o && e.charCodeAt(n) !== a) return false;
  if (r) {
    if (!Ra(e, t, n)) return false;
  } else if (!La(e, t, n)) return false;
  return n === i || o ? true : e.charCodeAt(n) === a;
}
function Ci(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function xa(e) {
  const t = Qt(e);
  return V ? e.length > 3 ? false : Ia(t) && (e.length === 2 || t.charCodeAt(2) === 92) : t === F.sep;
}
function Ia(e, t = V) {
  return t ? Ci(e.charCodeAt(0)) && e.charCodeAt(1) === 58 : false;
}
function Et(e, t, r = 8) {
  let s = "";
  for (let n = 0; n < r; n++) {
    let a;
    n === 0 && V && !t && (r === 3 || r === 4) ? a = Si : a = Ei, s += a.charAt(Math.floor(Math.random() * a.length));
  }
  let i;
  return t ? i = `${t}-${s}` : i = s, e ? Q(e, i) : i;
}
var Ei, Si, Je = E({ "extpath.js"() {
  "use strict";
  w(), le(), X(), Ke(), Or(), Ei = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", Si = "BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";
} }), Na = E({ "stream.js"() {
  "use strict";
  w(), Ue(), et();
} }), Ma, Fa, $a = E({ "buffer.js"() {
  "use strict";
  w(), Ct(), Na(), Ma = new Me(() => new Uint8Array(256)), Fa = 512 * 1024;
} });
function ja(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !Pi.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!Di.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (Ti.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function Wa(e, t) {
  return !e && !t ? "file" : e;
}
function Ua(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== ce && (t = ce + t) : t = ce;
      break;
  }
  return t;
}
function Ai(e, t, r) {
  let s, i = -1;
  for (let n = 0; n < e.length; n++) {
    const a = e.charCodeAt(n);
    if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 45 || a === 46 || a === 95 || a === 126 || t && a === 47 || r && a === 91 || r && a === 93 || r && a === 58) i !== -1 && (s += encodeURIComponent(e.substring(i, n)), i = -1), s !== void 0 && (s += e.charAt(n));
    else {
      s === void 0 && (s = e.substr(0, n));
      const o = s1[a];
      o !== void 0 ? (i !== -1 && (s += encodeURIComponent(e.substring(i, n)), i = -1), s += o) : i === -1 && (i = n);
    }
  }
  return i !== -1 && (s += encodeURIComponent(e.substring(i))), s !== void 0 ? s : e;
}
function qa(e) {
  let t;
  for (let r = 0; r < e.length; r++) {
    const s = e.charCodeAt(r);
    s === 35 || s === 63 ? (t === void 0 && (t = e.substr(0, r)), t += s1[s]) : t !== void 0 && (t += e[r]);
  }
  return t !== void 0 ? t : e;
}
function Xt(e, t) {
  let r;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? r = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? r = e.path.substr(1) : r = e.path[1].toLowerCase() + e.path.substr(2) : r = e.path, V && (r = r.replace(/\//g, "\\")), r;
}
function t1(e, t) {
  const r = t ? qa : Ai;
  let s = "", { scheme: i, authority: n, path: a, query: o, fragment: l } = e;
  if (i && (s += i, s += ":"), (n || i === "file") && (s += ce, s += ce), n) {
    let c = n.indexOf("@");
    if (c !== -1) {
      const h = n.substr(0, c);
      n = n.substr(c + 1), c = h.lastIndexOf(":"), c === -1 ? s += r(h, false, false) : (s += r(h.substr(0, c), false, false), s += ":", s += r(h.substr(c + 1), false, true)), s += "@";
    }
    n = n.toLowerCase(), c = n.lastIndexOf(":"), c === -1 ? s += r(n, false, true) : (s += r(n.substr(0, c), false, true), s += n.substr(c));
  }
  if (a) {
    if (a.length >= 3 && a.charCodeAt(0) === 47 && a.charCodeAt(2) === 58) {
      const c = a.charCodeAt(1);
      c >= 65 && c <= 90 && (a = `/${String.fromCharCode(c + 32)}:${a.substr(3)}`);
    } else if (a.length >= 2 && a.charCodeAt(1) === 58) {
      const c = a.charCodeAt(0);
      c >= 65 && c <= 90 && (a = `${String.fromCharCode(c + 32)}:${a.substr(2)}`);
    }
    s += r(a, true, false);
  }
  return o && (s += "?", s += r(o, false, false)), l && (s += "#", s += t ? l : Ai(l, false, false)), s;
}
function ki(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + ki(e.substr(3)) : e;
  }
}
function er(e) {
  return e.match(i1) ? e.replace(i1, (t) => ki(t)) : e;
}
var Pi, Di, Ti, W, ce, Oi, Y, r1, Qe, s1, i1, Ye = E({ "uri.js"() {
  "use strict";
  w(), le(), X(), tr(), $a(), Pi = /^\w[\w\d+.-]*$/, Di = /^\//, Ti = /^\/\//, W = "", ce = "/", Oi = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, Y = class gr {
    static isUri(t) {
      return t instanceof gr ? true : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : false;
    }
    constructor(t, r, s, i, n, a = false) {
      typeof t == "object" ? (this.scheme = t.scheme || W, this.authority = t.authority || W, this.path = t.path || W, this.query = t.query || W, this.fragment = t.fragment || W) : (this.scheme = Wa(t, a), this.authority = r || W, this.path = Ua(this.scheme, s || W), this.query = i || W, this.fragment = n || W, ja(this, a));
    }
    get fsPath() {
      return Xt(this, false);
    }
    with(t) {
      if (!t) return this;
      let { scheme: r, authority: s, path: i, query: n, fragment: a } = t;
      return r === void 0 ? r = this.scheme : r === null && (r = W), s === void 0 ? s = this.authority : s === null && (s = W), i === void 0 ? i = this.path : i === null && (i = W), n === void 0 ? n = this.query : n === null && (n = W), a === void 0 ? a = this.fragment : a === null && (a = W), r === this.scheme && s === this.authority && i === this.path && n === this.query && a === this.fragment ? this : new Qe(r, s, i, n, a);
    }
    static parse(t, r = false) {
      const s = Oi.exec(t);
      return s ? new Qe(s[2] || W, er(s[4] || W), er(s[5] || W), er(s[7] || W), er(s[9] || W), r) : new Qe(W, W, W, W, W);
    }
    static file(t) {
      let r = W;
      if (V && (t = t.replace(/\\/g, ce)), t[0] === ce && t[1] === ce) {
        const s = t.indexOf(ce, 2);
        s === -1 ? (r = t.substring(2), t = ce) : (r = t.substring(2, s), t = t.substring(s) || ce);
      }
      return new Qe("file", r, t, W, W);
    }
    static from(t, r) {
      return new Qe(t.scheme, t.authority, t.path, t.query, t.fragment, r);
    }
    static joinPath(t, ...r) {
      if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
      let s;
      return V && t.scheme === "file" ? s = gr.file(B.join(Xt(t, true), ...r)).path : s = F.join(t.path, ...r), t.with({ path: s });
    }
    toString(t = false) {
      return t1(this, t);
    }
    toJSON() {
      return this;
    }
    static revive(t) {
      if (t) {
        if (t instanceof gr) return t;
        {
          const r = new Qe(t);
          return r._formatted = t.external ?? null, r._fsPath = t._sep === r1 ? t.fsPath ?? null : null, r;
        }
      } else return t;
    }
    [/* @__PURE__ */ Symbol.for("debug.description")]() {
      return `URI(${this.toString()})`;
    }
  }, r1 = V ? 1 : void 0, Qe = class extends Y {
    constructor() {
      super(...arguments), this._formatted = null, this._fsPath = null;
    }
    get fsPath() {
      return this._fsPath || (this._fsPath = Xt(this, false)), this._fsPath;
    }
    toString(e = false) {
      return e ? t1(this, true) : (this._formatted || (this._formatted = t1(this, false)), this._formatted);
    }
    toJSON() {
      const e = { $mid: 1 };
      return this._fsPath && (e.fsPath = this._fsPath, e._sep = r1), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
    }
  }, s1 = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" }, i1 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
} });
function Ba(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var H, Li, Ri, xi, Ii, n1, Ni, Mi, Va, za, Fi, tr = E({ "network.js"() {
  "use strict";
  w(), Ue(), X(), Ke(), Ye(), le(), ((e) => {
    e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
  })(H || (H = {})), Li = "tkn", Ri = class {
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
      this._serverRootPath = F.join(t ?? "/", Ba(e));
    }
    getServerRootPath() {
      return this._serverRootPath;
    }
    get _remoteResourcesPath() {
      return F.join(this._serverRootPath, H.vscodeRemoteResource);
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
      } catch (a) {
        return $t(a), e;
      }
      const t = e.authority;
      let r = this._hosts[t];
      r && r.indexOf(":") !== -1 && r.indexOf("[") === -1 && (r = `[${r}]`);
      const s = this._ports[t], i = this._connectionTokens[t];
      let n = `path=${encodeURIComponent(e.path)}`;
      return typeof i == "string" && (n += `&${Li}=${encodeURIComponent(i)}`), Y.from({ scheme: Hs ? this._preferredWebSchema : H.vscodeRemoteResource, authority: `${r}:${s}`, path: this._remoteResourcesPath, query: n });
    }
  }, xi = new Ri(), Ii = "vscode-app", n1 = class _r {
    asBrowserUri(t) {
      const r = this.toUri(t);
      return this.uriToBrowserUri(r);
    }
    uriToBrowserUri(t) {
      return t.scheme === H.vscodeRemote ? xi.rewrite(t) : t.scheme === H.file && (Gs || Js === `${H.vscodeFileResource}://${_r.FALLBACK_AUTHORITY}`) ? t.with({ scheme: H.vscodeFileResource, authority: t.authority || _r.FALLBACK_AUTHORITY, query: null, fragment: null }) : t;
    }
    asFileUri(t) {
      const r = this.toUri(t);
      return this.uriToFileUri(r);
    }
    uriToFileUri(t) {
      return t.scheme === H.vscodeFileResource ? t.with({ scheme: H.file, authority: t.authority !== _r.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
    }
    toUri(t) {
      if (Y.isUri(t)) return t;
      if (globalThis._VSCODE_FILE_ROOT) {
        const r = globalThis._VSCODE_FILE_ROOT;
        if (/^\w[\w\d+.-]*:\/\//.test(r)) return Y.joinPath(Y.parse(r, true), t);
        const s = Q(r, t);
        return Y.file(s);
      }
      throw new Error("Cannot determine URI for module id!");
    }
  }, n1.FALLBACK_AUTHORITY = Ii, Ni = n1, Mi = new Ni(), Va = Object.freeze({ "Cache-Control": "no-cache, no-store" }), za = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), ((e) => {
    const t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
    e.CoopAndCoep = Object.freeze(t.get("3"));
    const r = "vscode-coi";
    function s(n) {
      let a;
      typeof n == "string" ? a = new URL(n).searchParams : n instanceof URL ? a = n.searchParams : Y.isUri(n) && (a = new URL(n.toString(true)).searchParams);
      const o = a?.get(r);
      if (o) return t.get(o);
    }
    e.getHeadersFromQuery = s;
    function i(n, a, o) {
      if (!globalThis.crossOriginIsolated) return;
      const l = a && o ? "3" : o ? "2" : "1";
      n instanceof URLSearchParams ? n.set(r, l) : n[r] = l;
    }
    e.addSearchParam = i;
  })(Fi || (Fi = {}));
} });
function De(e) {
  return Xt(e, true);
}
var rr, M, $i, Ga, Ha, Ka, Ja, Qa, ji, Ya, Za, o1, Xa, e2, t2, r2, a1, l1, s2, i2, Wi, c1 = E({ "resources.js"() {
  "use strict";
  w(), Je(), tr(), le(), X(), Ke(), Ye(), rr = class {
    constructor(e) {
      this._ignorePathCasing = e;
    }
    compare(e, t, r = false) {
      return e === t ? 0 : Zr(this.getComparisonKey(e, r), this.getComparisonKey(t, r));
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
        if (e.scheme === H.file) return Pe(De(e), De(t), this._ignorePathCasing(e)) && e.query === t.query && (r || e.fragment === t.fragment);
        if (a1(e.authority, t.authority)) return Pe(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (r || e.fragment === t.fragment);
      }
      return false;
    }
    joinPath(e, ...t) {
      return Y.joinPath(e, ...t);
    }
    basenameOrAuthority(e) {
      return ji(e) || e.authority;
    }
    basename(e) {
      return F.basename(e.path);
    }
    extname(e) {
      return F.extname(e.path);
    }
    dirname(e) {
      if (e.path.length === 0) return e;
      let t;
      return e.scheme === H.file ? t = Y.file(Ne(De(e))).path : (t = F.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
    }
    normalizePath(e) {
      if (!e.path.length) return e;
      let t;
      return e.scheme === H.file ? t = Y.file(Qt(De(e))).path : t = F.normalize(e.path), e.with({ path: t });
    }
    relativePath(e, t) {
      if (e.scheme !== t.scheme || !a1(e.authority, t.authority)) return;
      if (e.scheme === H.file) {
        const i = li(De(e), De(t));
        return V ? vi(i) : i;
      }
      let r = e.path || "/";
      const s = t.path || "/";
      if (this._ignorePathCasing(e)) {
        let i = 0;
        for (const n = Math.min(r.length, s.length); i < n && !(r.charCodeAt(i) !== s.charCodeAt(i) && r.charAt(i).toLowerCase() !== s.charAt(i).toLowerCase()); i++) ;
        r = s.substr(0, i) + r.substr(i);
      }
      return F.relative(r, s);
    }
    resolvePath(e, t) {
      if (e.scheme === H.file) {
        const r = Y.file(Qr(De(e), t));
        return e.with({ authority: r.authority, path: r.path });
      }
      return t = Ta(t), e.with({ path: F.resolve(e.path, t) });
    }
    isAbsolutePath(e) {
      return !!e.path && e.path[0] === "/";
    }
    isEqualAuthority(e, t) {
      return e === t || e !== void 0 && t !== void 0 && e1(e, t);
    }
    hasTrailingPathSeparator(e, t = ie) {
      if (e.scheme === H.file) {
        const r = De(e);
        return r.length > wi(r).length && r[r.length - 1] === t;
      } else {
        const r = e.path;
        return r.length > 1 && r.charCodeAt(r.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
      }
    }
    removeTrailingPathSeparator(e, t = ie) {
      return l1(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
    }
    addTrailingPathSeparator(e, t = ie) {
      let r = false;
      if (e.scheme === H.file) {
        const s = De(e);
        r = s !== void 0 && s.length === wi(s).length && s[s.length - 1] === t;
      } else {
        t = "/";
        const s = e.path;
        r = s.length === 1 && s.charCodeAt(s.length - 1) === 47;
      }
      return !r && !l1(e, t) ? e.with({ path: e.path + "/" }) : e;
    }
  }, M = new rr(() => false), $i = new rr((e) => e.scheme === H.file ? !we : true), Ga = new rr((e) => true), Ha = M.isEqual.bind(M), Ka = M.isEqualOrParent.bind(M), Ja = M.getComparisonKey.bind(M), Qa = M.basenameOrAuthority.bind(M), ji = M.basename.bind(M), Ya = M.extname.bind(M), Za = M.dirname.bind(M), o1 = M.joinPath.bind(M), Xa = M.normalizePath.bind(M), e2 = M.relativePath.bind(M), t2 = M.resolvePath.bind(M), r2 = M.isAbsolutePath.bind(M), a1 = M.isEqualAuthority.bind(M), l1 = M.hasTrailingPathSeparator.bind(M), s2 = M.removeTrailingPathSeparator.bind(M), i2 = M.addTrailingPathSeparator.bind(M), ((e) => {
    e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
    function t(r) {
      const s = /* @__PURE__ */ new Map();
      r.path.substring(r.path.indexOf(";") + 1, r.path.lastIndexOf(";")).split(";").forEach((a) => {
        const [o, l] = a.split(":");
        o && l && s.set(o, l);
      });
      const n = r.path.substring(0, r.path.indexOf(";"));
      return n && s.set(e.META_DATA_MIME, n), s;
    }
    e.parseMetaData = t;
  })(Wi || (Wi = {}));
} }), n2, o2 = E({ "symbols.js"() {
  "use strict";
  w(), n2 = /* @__PURE__ */ Symbol("MicrotaskDelay");
} });
function Ui(e) {
  return !!e && typeof e.then == "function";
}
function a2(e) {
  const t = new it(), r = e(t.token);
  let s = false;
  const i = new Promise((n, a) => {
    const o = t.token.onCancellationRequested(() => {
      s = true, o.dispose(), a(new ht());
    });
    Promise.resolve(r).then((l) => {
      o.dispose(), t.dispose(), s ? Zo(l) && l.dispose() : n(l);
    }, (l) => {
      o.dispose(), t.dispose(), a(l);
    });
  });
  return new class {
    cancel() {
      t.cancel(), t.dispose();
    }
    then(n, a) {
      return i.then(n, a);
    }
    catch(n) {
      return this.then(void 0, n);
    }
    finally(n) {
      return i.finally(n);
    }
  }();
}
function qi(e, t) {
  return t ? new Promise((r, s) => {
    const i = setTimeout(() => {
      n.dispose(), r();
    }, e), n = t.onCancellationRequested(() => {
      clearTimeout(i), n.dispose(), s(new ht());
    });
  }) : a2((r) => qi(e, r));
}
var Bi, u1, Vi, h1, zi, Gi, l2, f1, d1, Hi, p1, St = E({ "async.js"() {
  "use strict";
  w(), Zt(), Ue(), Br(), et(), c1(), X(), o2(), Ct(), Bi = class {
    constructor(e) {
      this._size = 0, this._isDisposed = false, this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onDrained = new ae();
    }
    whenIdle() {
      return this.size > 0 ? oe.toPromise(this.onDrained) : Promise.resolve();
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
  }, u1 = class extends Bi {
    constructor() {
      super(1);
    }
  }, Vi = class {
    constructor() {
      this.queues = /* @__PURE__ */ new Map(), this.drainers = /* @__PURE__ */ new Set(), this.drainListeners = void 0, this.drainListenerCount = 0, this._isDisposed = false;
    }
    async whenDrained() {
      if (this.isDrained()) return;
      const e = new d1();
      return this.drainers.add(e), e.p;
    }
    isDrained() {
      for (const [, e] of this.queues) if (e.size > 0) return false;
      return true;
    }
    queueSize(e, t = M) {
      const r = t.getComparisonKey(e);
      return this.queues.get(r)?.size ?? 0;
    }
    queueFor(e, t, r = M) {
      if (this._isDisposed) return t();
      const s = r.getComparisonKey(e);
      let i = this.queues.get(s);
      if (!i) {
        i = new u1();
        const n = this.drainListenerCount++, a = oe.once(i.onDrained)(() => {
          i?.dispose(), this.queues.delete(s), this.onDidQueueDrain(), this.drainListeners?.deleteAndDispose(n), this.drainListeners?.size === 0 && (this.drainListeners.dispose(), this.drainListeners = void 0);
        });
        this.drainListeners || (this.drainListeners = new Ss()), this.drainListeners.set(n, a), this.queues.set(s, i);
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
  }, h1 = class {
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
  }, zi = class extends h1 {
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
  }, Gi = class extends _e {
    constructor(e, t) {
      super(), this.options = e, this.handler = t, this.pendingWork = [], this.throttler = this._register(new Fr()), this.disposed = false, this.lastExecutionTime = 0;
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
      for (const r of e) this.pendingWork.push(r);
      const t = Date.now() - this.lastExecutionTime;
      return !this.throttler.value && (!this.options.waitThrottleDelayBetweenWorkUnits || t >= this.options.throttleDelay) ? this.doWork() : !this.throttler.value && this.options.waitThrottleDelayBetweenWorkUnits && this.scheduleThrottler(Math.max(this.options.throttleDelay - t, 0)), true;
    }
    doWork() {
      this.lastExecutionTime = Date.now(), this.handler(this.pendingWork.splice(0, this.options.maxWorkChunkSize)), this.pendingWork.length > 0 && this.scheduleThrottler();
    }
    scheduleThrottler(e = this.options.throttleDelay) {
      this.throttler.value = new h1(() => {
        this.throttler.clear(), this.doWork();
      }, e), this.throttler.value.schedule();
    }
    dispose() {
      super.dispose(), this.pendingWork.length = 0, this.disposed = true;
    }
  }, (function() {
    typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? f1 = (e, t, r) => {
      Zs(() => {
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
    } : f1 = (e, t, r) => {
      const s = e.requestIdleCallback(t, typeof r == "number" ? { timeout: r } : void 0);
      let i = false;
      return { dispose() {
        i || (i = true, e.cancelIdleCallback(s));
      } };
    }, l2 = (e, t) => f1(globalThis, e, t);
  })(), d1 = class So {
    static fromPromise(t) {
      const r = new So();
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
      return this.error(new ht());
    }
  }, ((e) => {
    async function t(s) {
      let i;
      const n = await Promise.all(s.map((a) => a.then((o) => o, (o) => {
        i || (i = o);
      })));
      if (typeof i < "u") throw i;
      return n;
    }
    e.settled = t;
    function r(s) {
      return new Promise(async (i, n) => {
        try {
          await s(i, n);
        } catch (a) {
          n(a);
        }
      });
    }
    e.withAsyncBody = r;
  })(Hi || (Hi = {})), p1 = class he {
    static fromArray(t) {
      return new he((r) => {
        r.emitMany(t);
      });
    }
    static fromPromise(t) {
      return new he(async (r) => {
        r.emitMany(await t);
      });
    }
    static fromPromisesResolveOrder(t) {
      return new he(async (r) => {
        await Promise.all(t.map(async (s) => r.emitOne(await s)));
      });
    }
    static merge(t) {
      return new he(async (r) => {
        await Promise.all(t.map(async (s) => {
          for await (const i of s) r.emitOne(i);
        }));
      });
    }
    constructor(t, r) {
      this._state = 0, this._results = [], this._error = null, this._onReturn = r, this._onStateChanged = new ae(), queueMicrotask(async () => {
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
          await oe.toPromise(this._onStateChanged.event);
        } while (true);
      }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
    }
    static map(t, r) {
      return new he(async (s) => {
        for await (const i of t) s.emitOne(r(i));
      });
    }
    map(t) {
      return he.map(this, t);
    }
    static filter(t, r) {
      return new he(async (s) => {
        for await (const i of t) r(i) && s.emitOne(i);
      });
    }
    filter(t) {
      return he.filter(this, t);
    }
    static coalesce(t) {
      return he.filter(t, (r) => !!r);
    }
    coalesce() {
      return he.coalesce(this);
    }
    static async toPromise(t) {
      const r = [];
      for await (const s of t) r.push(s);
      return r;
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
  }, p1.EMPTY = p1.fromArray([]);
} });
function m1(e) {
  return c2(e, "NFC", Ki);
}
function c2(e, t, r) {
  if (!e) return e;
  const s = r.get(e);
  if (s) return s;
  let i;
  return Ji.test(e) ? i = e.normalize(t) : i = e, r.set(e, i), i;
}
var Ki, u2, Ji, Qi = E({ "normalization.js"() {
  "use strict";
  w(), Tr(), Ki = new Wt(1e4), u2 = new Wt(1e4), Ji = /[^\u0000-\u0080]/;
} });
import * as N from "fs";
import { tmpdir as h2 } from "os";
import { promisify as At } from "util";
async function Yi(e, t = 0, r) {
  if (xa(e)) throw new Error("rimraf - will refuse to recursively delete root");
  return t === 0 ? g1(e) : f2(e, r);
}
async function f2(e, t = Et(h2())) {
  try {
    try {
      await N.promises.rename(e, t);
    } catch (r) {
      return r.code === "ENOENT" ? void 0 : g1(e);
    }
    g1(t).catch((r) => {
    });
  } catch (r) {
    if (r.code !== "ENOENT") throw r;
  }
}
async function g1(e) {
  return N.promises.rm(e, { recursive: true, force: true, maxRetries: 3 });
}
async function sr(e, t) {
  return p2(await (t ? d2(e) : N.promises.readdir(e)));
}
async function d2(e) {
  try {
    return await N.promises.readdir(e, { withFileTypes: true });
  } catch (s) {
    console.warn("[node.js fs] readdir with filetypes failed with error: ", s);
  }
  const t = [], r = await sr(e);
  for (const s of r) {
    let i = false, n = false, a = false;
    try {
      const o = await N.promises.lstat(Q(e, s));
      i = o.isFile(), n = o.isDirectory(), a = o.isSymbolicLink();
    } catch (o) {
      console.warn("[node.js fs] unexpected error from lstat after readdir: ", o);
    }
    t.push({ name: s, isFile: () => i, isDirectory: () => n, isSymbolicLink: () => a });
  }
  return t;
}
function p2(e) {
  return e.map((t) => typeof t == "string" ? xe ? m1(t) : t : (t.name = xe ? m1(t.name) : t.name, t));
}
async function m2(e) {
  const t = await sr(e), r = [];
  for (const s of t) await kt.existsDirectory(Q(e, s)) && r.push(s);
  return r;
}
function Zi(e, t = 1e3) {
  return new Promise((r) => {
    let s = false;
    const i = setInterval(() => {
      s || (s = true, N.access(e, (n) => {
        s = false, n && (clearInterval(i), r(void 0));
      }));
    }, t);
  });
}
function g2(e, t, r) {
  return nn.queueFor(Y.file(e), () => {
    const s = en(r);
    return new Promise((i, n) => _2(e, t, s, (a) => a ? n(a) : i()));
  }, $i);
}
function Xi(e) {
  ir = e;
}
function _2(e, t, r, s) {
  if (!ir) return N.writeFile(e, t, { mode: r.mode, flag: r.flag }, s);
  N.open(e, r.flag, r.mode, (i, n) => {
    if (i) return s(i);
    N.writeFile(n, t, (a) => {
      if (a) return N.close(n, () => s(a));
      N.fdatasync(n, (o) => (o && (console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", o), Xi(false)), N.close(n, (l) => s(l))));
    });
  });
}
function nt(e, t, r) {
  const s = en(r);
  if (!ir) return N.writeFileSync(e, t, { mode: s.mode, flag: s.flag });
  const i = N.openSync(e, s.flag, s.mode);
  try {
    N.writeFileSync(i, t);
    try {
      N.fdatasyncSync(i);
    } catch (n) {
      console.warn("[node.js fs] fdatasyncSync is now disabled for this session because it failed: ", n), Xi(false);
    }
  } finally {
    N.closeSync(i);
  }
}
function en(e) {
  return e ? { mode: typeof e.mode == "number" ? e.mode : 438, flag: typeof e.flag == "string" ? e.flag : "w" } : { mode: 438, flag: "w" };
}
async function y2(e, t, r = 6e4) {
  if (e !== t) try {
    V && typeof r == "number" ? await tn(e, t, Date.now(), r) : await N.promises.rename(e, t);
  } catch (s) {
    if (e.toLowerCase() !== t.toLowerCase() && s.code === "EXDEV" || e.endsWith(".")) await rn(e, t, { preserveSymlinks: false }), await Yi(e, 1);
    else throw s;
  }
}
async function tn(e, t, r, s, i = 0) {
  try {
    return await N.promises.rename(e, t);
  } catch (n) {
    if (n.code !== "EACCES" && n.code !== "EPERM" && n.code !== "EBUSY") throw n;
    if (Date.now() - r >= s) throw console.error(`[node.js fs] rename failed after ${i} retries with error: ${n}`), n;
    if (i === 0) {
      let a = false;
      try {
        const { stat: o } = await kt.stat(t);
        o.isFile() || (a = true);
      } catch {
      }
      if (a) throw n;
    }
    return await qi(Math.min(100, i * 10)), tn(e, t, r, s, i + 1);
  }
}
async function rn(e, t, r) {
  return sn(e, t, { root: { source: e, target: t }, options: r, handledSourcePaths: /* @__PURE__ */ new Set() });
}
async function sn(e, t, r) {
  if (r.handledSourcePaths.has(e)) return;
  r.handledSourcePaths.add(e);
  const { stat: s, symbolicLink: i } = await kt.stat(e);
  if (i) {
    if (r.options.preserveSymlinks) try {
      return await b2(e, t, r);
    } catch {
    }
    if (i.dangling) return;
  }
  return s.isDirectory() ? v2(e, t, s.mode & _1, r) : w2(e, t, s.mode & _1);
}
async function v2(e, t, r, s) {
  await N.promises.mkdir(t, { recursive: true, mode: r });
  const i = await sr(e);
  for (const n of i) await sn(Q(e, n), Q(t, n), s);
}
async function w2(e, t, r) {
  await N.promises.copyFile(e, t), await N.promises.chmod(t, r);
}
async function b2(e, t, r) {
  let s = await N.promises.readlink(e);
  Pe(s, r.root.source, !we) && (s = Q(r.root.target, s.substr(r.root.source.length + 1))), await N.promises.symlink(s, t);
}
var kt, nn, ir, _1, Ce, y1 = E({ "pfs.js"() {
  "use strict";
  w(), St(), Je(), Qi(), le(), X(), c1(), Ye(), ((e) => {
    async function t(i) {
      let n;
      try {
        if (n = await N.promises.lstat(i), !n.isSymbolicLink()) return { stat: n };
      } catch {
      }
      try {
        return { stat: await N.promises.stat(i), symbolicLink: n?.isSymbolicLink() ? { dangling: false } : void 0 };
      } catch (a) {
        if (a.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: true } };
        if (V && a.code === "EACCES") try {
          return { stat: await N.promises.stat(await N.promises.readlink(i)), symbolicLink: { dangling: false } };
        } catch (o) {
          if (o.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: true } };
          throw o;
        }
        throw a;
      }
    }
    e.stat = t;
    async function r(i) {
      try {
        const { stat: n, symbolicLink: a } = await e.stat(i);
        return n.isFile() && a?.dangling !== true;
      } catch {
      }
      return false;
    }
    e.existsFile = r;
    async function s(i) {
      try {
        const { stat: n, symbolicLink: a } = await e.stat(i);
        return n.isDirectory() && a?.dangling !== true;
      } catch {
      }
      return false;
    }
    e.existsDirectory = s;
  })(kt || (kt = {})), nn = new Vi(), ir = true, _1 = 511, Ce = new class {
    get read() {
      return (e, t, r, s, i) => new Promise((n, a) => {
        N.read(e, t, r, s, i, (o, l, c) => o ? a(o) : n({ bytesRead: l, buffer: c }));
      });
    }
    get write() {
      return (e, t, r, s, i) => new Promise((n, a) => {
        N.write(e, t, r, s, i, (o, l, c) => o ? a(o) : n({ bytesWritten: l, buffer: c }));
      });
    }
    get fdatasync() {
      return At(N.fdatasync);
    }
    get open() {
      return At(N.open);
    }
    get close() {
      return At(N.close);
    }
    get realpath() {
      return At(N.realpath);
    }
    get ftruncate() {
      return At(N.ftruncate);
    }
    async exists(e) {
      try {
        return await N.promises.access(e), true;
      } catch {
        return false;
      }
    }
    get readdir() {
      return sr;
    }
    get readDirsInDir() {
      return m2;
    }
    get writeFile() {
      return g2;
    }
    get rm() {
      return Yi;
    }
    get rename() {
      return y2;
    }
    get copy() {
      return rn;
    }
  }();
} });
import * as C2 from "net";
function v1(e, t, r, s = 1) {
  let i = false;
  return new Promise((n) => {
    const a = setTimeout(() => {
      if (!i) return i = true, n(0);
    }, r);
    w1(e, t, s, (o) => {
      if (!i) return i = true, clearTimeout(a), n(o);
    });
  });
}
function w1(e, t, r, s) {
  if (t === 0) return s(0);
  const i = new C2.Socket();
  i.once("connect", () => (on(i), w1(e + r, t - 1, r, s))), i.once("data", () => {
  }), i.once("error", (n) => (on(i), n.code !== "ECONNREFUSED" ? w1(e + r, t - 1, r, s) : s(e))), i.connect(e, "127.0.0.1");
}
function on(e) {
  try {
    e.removeAllListeners("connect"), e.removeAllListeners("error"), e.end(), e.destroy(), e.unref();
  } catch (t) {
    console.error(t);
  }
}
var E2 = E({ "ports.js"() {
  "use strict";
  w();
} });
import * as an from "fs";
async function S2(e) {
  try {
    return await Ce.realpath(e);
  } catch {
    const r = A2(e);
    return await an.promises.access(r, an.constants.R_OK), r;
  }
}
function A2(e) {
  return Ea(Qt(e), ie);
}
var k2 = E({ "extpath.js"() {
  "use strict";
  w(), le(), X(), Ke(), y1();
} });
function ln(e, t) {
  switch (e) {
    case 0:
      return "";
    case 1:
      return `${Dt}*?`;
    default:
      return `(?:${Pt}|${Dt}+${Pt}${t ? `|${Pt}${Dt}+` : ""})*?`;
  }
}
function cn(e, t) {
  if (!e) return [];
  const r = [];
  let s = false, i = false, n = "";
  for (const a of e) {
    switch (a) {
      case t:
        if (!s && !i) {
          r.push(n), n = "";
          continue;
        }
        break;
      case "{":
        s = true;
        break;
      case "}":
        s = false;
        break;
      case "[":
        i = true;
        break;
      case "]":
        i = false;
        break;
    }
    n += a;
  }
  return n && r.push(n), r;
}
function un(e) {
  if (!e) return "";
  let t = "";
  const r = cn(e, E1);
  if (r.every((s) => s === ot)) t = ".*";
  else {
    let s = false;
    r.forEach((i, n) => {
      if (i === ot) {
        if (s) return;
        t += ln(2, n === r.length - 1);
      } else {
        let a = false, o = "", l = false, c = "";
        for (const h of i) {
          if (h !== "}" && a) {
            o += h;
            continue;
          }
          if (l && (h !== "]" || !c)) {
            let u;
            h === "-" ? u = h : (h === "^" || h === "!") && !c ? u = "^" : h === E1 ? u = "" : u = hi(h), c += u;
            continue;
          }
          switch (h) {
            case "{":
              a = true;
              continue;
            case "[":
              l = true;
              continue;
            case "}": {
              const f = `(?:${cn(o, ",").map((d) => un(d)).join("|")})`;
              t += f, a = false, o = "";
              break;
            }
            case "]": {
              t += "[" + c + "]", l = false, c = "";
              break;
            }
            case "?":
              t += Dt;
              continue;
            case "*":
              t += ln(1);
              continue;
            default:
              t += hi(h);
          }
        }
        n < r.length - 1 && (r[n + 1] !== ot || n + 2 < r.length) && (t += Pt);
      }
      s = i === ot;
    });
  }
  return t;
}
function b1(e, t) {
  if (!e) return pe;
  let r;
  typeof e != "string" ? r = e.pattern : r = e, r = r.trim();
  const s = t.ignoreCase ?? false, i = t.ignoreCase ?? !we, n = { ...t, equals: s ? e1 : (c, h) => c === h, endsWith: s ? Aa : (c, h) => c.endsWith(h), isEqualOrParent: (c, h) => Pe(c, h, i) }, a = `${s ? r.toLowerCase() : r}_${!!t.trimForExclusions}_${s}`;
  let o = S1.get(a);
  if (o) return hn(o, e, n);
  let l;
  return mn.test(r) ? o = D2(r.substring(4), r, n) : (l = gn.exec(C1(r, n))) ? o = T2(l[1], r, n) : (t.trimForExclusions ? yn : _n).test(r) ? o = O2(r, n) : (l = vn.exec(C1(r, n))) ? o = fn(l[1].substring(1), r, true, n) : (l = wn.exec(C1(r, n))) ? o = fn(l[1], r, false, n) : o = L2(r, n), S1.set(a, o), hn(o, e, n);
}
function P2(e, t) {
  const r = t.length;
  if (r === 0) return { ...e, isEqualOrParent: () => false };
  const s = ie.charCodeAt(0), i = t.charCodeAt(r - 1) === s;
  let n = true;
  for (let a = 0; a < r; a++) if (t.charCodeAt(a) > 127) {
    n = false;
    break;
  }
  if (n) {
    const a = t.toLowerCase(), o = (h) => h >= 65 && h <= 90 ? h + 32 : h, l = o(a.charCodeAt(0)), c = r > 1 ? o(a.charCodeAt(r - 1)) : l;
    return { ...e, isEqualOrParent(h, u) {
      if (h.length < r) return false;
      if (h.length > r) {
        const d = i ? r - 1 : r;
        if (h.charCodeAt(d) !== s) return false;
      }
      let f = h.charCodeAt(0);
      if (f !== l) {
        if (f > 127) return Pe(h, t, true);
        if (f = o(f), f !== l) return false;
      }
      if (r > 1) {
        let d = h.charCodeAt(r - 1);
        if (d !== c) {
          if (d > 127) return Pe(h, t, true);
          if (d = o(d), d !== c) return false;
        }
      }
      for (let d = 0; d < r; d++) {
        const m = h.charCodeAt(d), k = a.charCodeAt(d);
        if (m === k) continue;
        if (m > 127) return Pe(h, t, true);
        let D = m;
        if (D >= 65 && D <= 90 && (D += 32), D !== k) return false;
      }
      return true;
    } };
  }
  return { ...e, isEqualOrParent(a, o) {
    return Pe(a, t, true);
  } };
}
function hn(e, t, r) {
  if (typeof t == "string") return e;
  const s = t.base, i = s.length, a = r.ignoreCase ?? !we ? P2(r, s) : r, o = ie.charCodeAt(0), l = function(c, h) {
    if (!a.isEqualOrParent(c, s)) return null;
    let u = i;
    for (; u < c.length && c.charCodeAt(u) === o; ) u++;
    return e(c.substring(u), h);
  };
  return l.allBasenames = e.allBasenames, l.allPaths = e.allPaths, l.basenames = e.basenames, l.patterns = e.patterns, l;
}
function C1(e, t) {
  return t.trimForExclusions && e.endsWith("/**") ? e.substring(0, e.length - 2) : e;
}
function D2(e, t, r) {
  return function(s, i) {
    return typeof s == "string" && r.endsWith(s, e) ? t : null;
  };
}
function T2(e, t, r) {
  const s = `/${e}`, i = `\\${e}`, n = function(o, l) {
    return typeof o != "string" ? null : l ? r.equals(l, e) ? t : null : r.equals(o, e) || r.endsWith(o, s) || r.endsWith(o, i) ? t : null;
  }, a = [e];
  return n.basenames = a, n.patterns = [t], n.allBasenames = a, n;
}
function O2(e, t) {
  const r = dn(e.slice(1, -1).split(",").map((o) => b1(o, t)).filter((o) => o !== pe), e), s = r.length;
  if (!s) return pe;
  if (s === 1) return r[0];
  const i = function(o, l) {
    for (let c = 0, h = r.length; c < h; c++) if (r[c](o, l)) return e;
    return null;
  }, n = r.find((o) => !!o.allBasenames);
  n && (i.allBasenames = n.allBasenames);
  const a = r.reduce((o, l) => l.allPaths ? o.concat(l.allPaths) : o, []);
  return a.length && (i.allPaths = a), i;
}
function fn(e, t, r, s) {
  const i = ie === F.sep, n = i ? e : e.replace(pn, ie), a = ie + n, o = F.sep + e;
  let l;
  return r ? l = function(c, h) {
    return typeof c == "string" && (s.equals(c, n) || s.endsWith(c, a) || !i && (s.equals(c, e) || s.endsWith(c, o))) ? t : null;
  } : l = function(c, h) {
    return typeof c == "string" && (s.equals(c, n) || !i && s.equals(c, e)) ? t : null;
  }, l.allPaths = [(r ? "*/" : "./") + e], l;
}
function L2(e, t) {
  try {
    const r = new RegExp(`^${un(e)}$`, t.ignoreCase ? "i" : void 0);
    return function(s) {
      return r.lastIndex = 0, typeof s == "string" && r.test(s) ? e : null;
    };
  } catch {
    return pe;
  }
}
function R2(e, t = {}) {
  if (!e) return A1;
  if (typeof e == "string" || x2(e)) {
    const r = b1(e, t);
    if (r === pe) return A1;
    const s = function(i, n) {
      return !!r(i, n);
    };
    return r.allBasenames && (s.allBasenames = r.allBasenames), r.allPaths && (s.allPaths = r.allPaths), s;
  }
  return I2(e, t);
}
function x2(e) {
  const t = e;
  return t ? typeof t.base == "string" && typeof t.pattern == "string" : false;
}
function I2(e, t) {
  const r = dn(Object.getOwnPropertyNames(e).map((o) => N2(o, e[o], t)).filter((o) => o !== pe)), s = r.length;
  if (!s) return pe;
  if (!r.some((o) => !!o.requiresSiblings)) {
    if (s === 1) return r[0];
    const o = function(h, u) {
      for (let f = 0, d = r.length; f < d; f++) {
        const m = r[f](h, u);
        if (typeof m == "string") return m;
      }
      return null;
    }, l = r.find((h) => !!h.allBasenames);
    l && (o.allBasenames = l.allBasenames);
    const c = r.reduce((h, u) => u.allPaths ? h.concat(u.allPaths) : h, []);
    return c.length && (o.allPaths = c), o;
  }
  const i = function(o, l, c) {
    let h, u;
    for (let f = 0, d = r.length; f < d; f++) {
      const m = r[f];
      m.requiresSiblings && c && (l || (l = st(o)), h || (h = l.substr(0, l.length - ci(o).length)));
      const k = m(o, l, h, c);
      if (typeof k == "string") return k;
      Ui(k) && (u || (u = []), u.push(k));
    }
    return u ? (async () => {
      for (const f of u) {
        const d = await f;
        if (typeof d == "string") return d;
      }
      return null;
    })() : null;
  }, n = r.find((o) => !!o.allBasenames);
  n && (i.allBasenames = n.allBasenames);
  const a = r.reduce((o, l) => l.allPaths ? o.concat(l.allPaths) : o, []);
  return a.length && (i.allPaths = a), i;
}
function N2(e, t, r) {
  if (t === false) return pe;
  const s = b1(e, r);
  if (s === pe) return pe;
  if (typeof t == "boolean") return s;
  if (t) {
    const i = t.when;
    if (typeof i == "string") {
      const n = (a, o, l, c) => {
        if (!c || !s(a, o)) return null;
        const h = i.replace("$(basename)", () => l), u = c(h);
        return Ui(u) ? u.then((f) => f ? e : null) : u ? e : null;
      };
      return n.requiresSiblings = true, n;
    }
  }
  return s;
}
function dn(e, t) {
  const r = e.filter((o) => !!o.basenames);
  if (r.length < 2) return e;
  const s = r.reduce((o, l) => {
    const c = l.basenames;
    return c ? o.concat(c) : o;
  }, []);
  let i;
  if (t) {
    i = [];
    for (let o = 0, l = s.length; o < l; o++) i.push(t);
  } else i = r.reduce((o, l) => {
    const c = l.patterns;
    return c ? o.concat(c) : o;
  }, []);
  const n = function(o, l) {
    if (typeof o != "string") return null;
    if (!l) {
      let h;
      for (h = o.length; h > 0; h--) {
        const u = o.charCodeAt(h - 1);
        if (u === 47 || u === 92) break;
      }
      l = o.substr(h);
    }
    const c = s.indexOf(l);
    return c !== -1 ? i[c] : null;
  };
  n.basenames = s, n.patterns = i, n.allBasenames = s;
  const a = e.filter((o) => !o.basenames);
  return a.push(n), a;
}
var ot, E1, Pt, Dt, pn, mn, gn, _n, yn, vn, wn, S1, A1, pe, M2 = E({ "glob.js"() {
  "use strict";
  w(), kr(), St(), Je(), Tr(), le(), X(), Ke(), ot = "**", E1 = "/", Pt = "[/\\\\]", Dt = "[^/\\\\]", pn = /\//g, mn = /^\*\*\/\*\.[\w\.-]+$/, gn = /^\*\*\/([\w\.-]+)\/?$/, _n = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/, yn = /^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/, vn = /^\*\*((\/[\w\.-]+)+)\/?$/, wn = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/, S1 = new Wt(1e4), A1 = function() {
    return false;
  }, pe = function() {
    return null;
  };
} }), bn, Cn, k1, En, P1, $e, Tt, nr, F2 = E({ "ternarySearchTree.js"() {
  "use strict";
  w(), kr(), Ke(), bn = class {
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
      const t = e.charCodeAt(0), r = this._value.charCodeAt(this._pos);
      return t - r;
    }
    value() {
      return this._value[this._pos];
    }
  }, Cn = class {
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
      return this._caseSensitive ? Xr(e, this._value, 0, e.length, this._from, this._to) : Ge(e, this._value, 0, e.length, this._from, this._to);
    }
    value() {
      return this._value.substring(this._from, this._to);
    }
  }, k1 = class {
    constructor(e = true, t = true) {
      this._splitOnBackslash = e, this._caseSensitive = t;
    }
    reset(e) {
      this._from = 0, this._to = 0, this._value = e, this._valueLen = e.length;
      for (let t = e.length - 1; t >= 0; t--, this._valueLen--) {
        const r = this._value.charCodeAt(t);
        if (!(r === 47 || this._splitOnBackslash && r === 92)) break;
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
      return this._caseSensitive ? Xr(e, this._value, 0, e.length, this._from, this._to) : Ge(e, this._value, 0, e.length, this._from, this._to);
    }
    value() {
      return this._value.substring(this._from, this._to);
    }
  }, En = class {
    constructor(e, t) {
      this._ignorePathCasing = e, this._ignoreQueryAndFragment = t, this._states = [], this._stateIdx = 0;
    }
    reset(e) {
      return this._value = e, this._states = [], this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && (this._pathIterator = new k1(false, !this._ignorePathCasing(e)), this._pathIterator.reset(e.path), this._pathIterator.value() && this._states.push(3)), this._ignoreQueryAndFragment(e) || (this._value.query && this._states.push(4), this._value.fragment && this._states.push(5)), this._stateIdx = 0, this;
    }
    next() {
      return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() ? this._pathIterator.next() : this._stateIdx += 1, this;
    }
    hasNext() {
      return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
    }
    cmp(e) {
      if (this._states[this._stateIdx] === 1) return fi(e, this._value.scheme);
      if (this._states[this._stateIdx] === 2) return fi(e, this._value.authority);
      if (this._states[this._stateIdx] === 3) return this._pathIterator.cmp(e);
      if (this._states[this._stateIdx] === 4) return Zr(e, this._value.query);
      if (this._states[this._stateIdx] === 5) return Zr(e, this._value.fragment);
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
  }, P1 = class es {
    static wrap(t) {
      return t === void 0 ? es.Val : t;
    }
    static unwrap(t) {
      return t === es.Val ? void 0 : t;
    }
  }, P1.Val = /* @__PURE__ */ Symbol("undefined_placeholder"), $e = P1, Tt = class {
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
  }, nr = class Nt {
    static forUris(t = () => false, r = () => false) {
      return new Nt(new En(t, r));
    }
    static forPaths(t = false) {
      return new Nt(new k1(void 0, !t));
    }
    static forStrings() {
      return new Nt(new bn());
    }
    static forConfigKeys() {
      return new Nt(new Cn());
    }
    constructor(t) {
      this._iter = t;
    }
    clear() {
      this._root = void 0;
    }
    fill(t, r) {
      if (r) {
        const s = r.slice(0);
        fs(s);
        for (const i of s) this.set(i, t);
      } else {
        const s = t.slice(0);
        fs(s);
        for (const i of s) this.set(i[0], i[1]);
      }
    }
    set(t, r) {
      const s = this._iter.reset(t);
      let i;
      this._root || (this._root = new Tt(), this._root.segment = s.value());
      const n = [];
      for (i = this._root; ; ) {
        const o = s.cmp(i.segment);
        if (o > 0) i.left || (i.left = new Tt(), i.left.segment = s.value()), n.push([-1, i]), i = i.left;
        else if (o < 0) i.right || (i.right = new Tt(), i.right.segment = s.value()), n.push([1, i]), i = i.right;
        else if (s.hasNext()) s.next(), i.mid || (i.mid = new Tt(), i.mid.segment = s.value()), n.push([0, i]), i = i.mid;
        else break;
      }
      const a = $e.unwrap(i.value);
      i.value = $e.wrap(r), i.key = t;
      for (let o = n.length - 1; o >= 0; o--) {
        const l = n[o][1];
        l.updateHeight();
        const c = l.balanceFactor();
        if (c < -1 || c > 1) {
          const h = n[o][0], u = n[o + 1][0];
          if (h === 1 && u === 1) n[o][1] = l.rotateLeft();
          else if (h === -1 && u === -1) n[o][1] = l.rotateRight();
          else if (h === 1 && u === -1) l.right = n[o + 1][1] = n[o + 1][1].rotateRight(), n[o][1] = l.rotateLeft();
          else if (h === -1 && u === 1) l.left = n[o + 1][1] = n[o + 1][1].rotateLeft(), n[o][1] = l.rotateRight();
          else throw new Error();
          if (o > 0) switch (n[o - 1][0]) {
            case -1:
              n[o - 1][1].left = n[o][1];
              break;
            case 1:
              n[o - 1][1].right = n[o][1];
              break;
            case 0:
              n[o - 1][1].mid = n[o][1];
              break;
          }
          else this._root = n[0][1];
        }
      }
      return a;
    }
    get(t) {
      return $e.unwrap(this._getNode(t)?.value);
    }
    _getNode(t) {
      const r = this._iter.reset(t);
      let s = this._root;
      for (; s; ) {
        const i = r.cmp(s.segment);
        if (i > 0) s = s.left;
        else if (i < 0) s = s.right;
        else if (r.hasNext()) r.next(), s = s.mid;
        else break;
      }
      return s;
    }
    has(t) {
      const r = this._getNode(t);
      return !(r?.value === void 0 && r?.mid === void 0);
    }
    delete(t) {
      return this._delete(t, false);
    }
    deleteSuperstr(t) {
      return this._delete(t, true);
    }
    _delete(t, r) {
      const s = this._iter.reset(t), i = [];
      let n = this._root;
      for (; n; ) {
        const a = s.cmp(n.segment);
        if (a > 0) i.push([-1, n]), n = n.left;
        else if (a < 0) i.push([1, n]), n = n.right;
        else if (s.hasNext()) s.next(), i.push([0, n]), n = n.mid;
        else break;
      }
      if (n) {
        if (r ? (n.left = void 0, n.mid = void 0, n.right = void 0, n.height = 1) : (n.key = void 0, n.value = void 0), !n.mid && !n.value) if (n.left && n.right) {
          const a = this._min(n.right);
          if (a.key) {
            const { key: o, value: l, segment: c } = a;
            this._delete(a.key, false), n.key = o, n.value = l, n.segment = c;
          }
        } else {
          const a = n.left ?? n.right;
          if (i.length > 0) {
            const [o, l] = i[i.length - 1];
            switch (o) {
              case -1:
                l.left = a;
                break;
              case 0:
                l.mid = a;
                break;
              case 1:
                l.right = a;
                break;
            }
          } else this._root = a;
        }
        for (let a = i.length - 1; a >= 0; a--) {
          const o = i[a][1];
          o.updateHeight();
          const l = o.balanceFactor();
          if (l > 1 ? (o.right.balanceFactor() >= 0 || (o.right = o.right.rotateRight()), i[a][1] = o.rotateLeft()) : l < -1 && (o.left.balanceFactor() <= 0 || (o.left = o.left.rotateLeft()), i[a][1] = o.rotateRight()), a > 0) switch (i[a - 1][0]) {
            case -1:
              i[a - 1][1].left = i[a][1];
              break;
            case 1:
              i[a - 1][1].right = i[a][1];
              break;
            case 0:
              i[a - 1][1].mid = i[a][1];
              break;
          }
          else this._root = i[0][1];
        }
      }
    }
    _min(t) {
      for (; t.left; ) t = t.left;
      return t;
    }
    findSubstr(t) {
      const r = this._iter.reset(t);
      let s = this._root, i;
      for (; s; ) {
        const n = r.cmp(s.segment);
        if (n > 0) s = s.left;
        else if (n < 0) s = s.right;
        else if (r.hasNext()) r.next(), i = $e.unwrap(s.value) || i, s = s.mid;
        else break;
      }
      return s && $e.unwrap(s.value) || i;
    }
    findSuperstr(t) {
      return this._findSuperstrOrElement(t, false);
    }
    _findSuperstrOrElement(t, r) {
      const s = this._iter.reset(t);
      let i = this._root;
      for (; i; ) {
        const n = s.cmp(i.segment);
        if (n > 0) i = i.left;
        else if (n < 0) i = i.right;
        else if (s.hasNext()) s.next(), i = i.mid;
        else return i.mid ? this._entries(i.mid) : r ? $e.unwrap(i.value) : void 0;
      }
    }
    hasElementOrSubtree(t) {
      return this._findSuperstrOrElement(t, true) !== void 0;
    }
    forEach(t) {
      for (const [r, s] of this) t(s, r);
    }
    *[Symbol.iterator]() {
      yield* this._entries(this._root);
    }
    _entries(t) {
      const r = [];
      return this._dfsEntries(t, r), r[Symbol.iterator]();
    }
    _dfsEntries(t, r) {
      t && (t.left && this._dfsEntries(t.left, r), t.value !== void 0 && r.push([t.key, $e.unwrap(t.value)]), t.mid && this._dfsEntries(t.mid, r), t.right && this._dfsEntries(t.right, r));
    }
    _isBalanced() {
      const t = (r) => {
        if (!r) return true;
        const s = r.balanceFactor();
        return s < -1 || s > 1 ? false : t(r.left) && t(r.right);
      };
      return t(this._root);
    }
  };
} });
function $2(e, t, r) {
  t[Te.DI_TARGET] === t ? t[Te.DI_DEPENDENCIES].push({ id: e, index: r }) : (t[Te.DI_DEPENDENCIES] = [{ id: e, index: r }], t[Te.DI_TARGET] = t);
}
function D1(e) {
  if (Te.serviceIds.has(e)) return Te.serviceIds.get(e);
  const t = function(r, s, i) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    $2(t, r, i);
  };
  return t.toString = () => e, Te.serviceIds.set(e, t), t;
}
var Te, j2, Sn = E({ "instantiation.js"() {
  "use strict";
  w(), ((e) => {
    e.serviceIds = /* @__PURE__ */ new Map(), e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
    function t(r) {
      return r[e.DI_DEPENDENCIES] || [];
    }
    e.getServiceDependencies = t;
  })(Te || (Te = {})), j2 = D1("instantiationService");
} });
function W2(e, t, r) {
  return !e || !t || e === t || t.length > e.length ? false : (t.charAt(t.length - 1) !== ie && (t += ie), r ? Sa(e, t) : e.indexOf(t) === 0);
}
var U2, An, me, q2 = E({ "files.js"() {
  "use strict";
  w(), Ue(), F2(), le(), Ke(), Or(), Ye(), Vt(), Sn(), X(), tr(), Ct(), U2 = D1("fileService"), An = class yr {
    constructor(t, r) {
      this.ignorePathCasing = r, this.correlationId = void 0, this.added = new Me(() => {
        const s = nr.forUris(() => this.ignorePathCasing);
        return s.fill(this.rawAdded.map((i) => [i, true])), s;
      }), this.updated = new Me(() => {
        const s = nr.forUris(() => this.ignorePathCasing);
        return s.fill(this.rawUpdated.map((i) => [i, true])), s;
      }), this.deleted = new Me(() => {
        const s = nr.forUris(() => this.ignorePathCasing);
        return s.fill(this.rawDeleted.map((i) => [i, true])), s;
      }), this.rawAdded = [], this.rawUpdated = [], this.rawDeleted = [];
      for (const s of t) {
        switch (s.type) {
          case 1:
            this.rawAdded.push(s.resource);
            break;
          case 0:
            this.rawUpdated.push(s.resource);
            break;
          case 2:
            this.rawDeleted.push(s.resource);
            break;
        }
        this.correlationId !== yr.MIXED_CORRELATION && (typeof s.cId == "number" ? this.correlationId === void 0 ? this.correlationId = s.cId : this.correlationId !== s.cId && (this.correlationId = yr.MIXED_CORRELATION) : this.correlationId !== void 0 && (this.correlationId = yr.MIXED_CORRELATION));
      }
    }
    contains(t, ...r) {
      return this.doContains(t, { includeChildren: false }, ...r);
    }
    affects(t, ...r) {
      return this.doContains(t, { includeChildren: true }, ...r);
    }
    doContains(t, r, ...s) {
      if (!t) return false;
      const i = s.length > 0;
      return !!((!i || s.includes(1)) && (this.added.value.get(t) || r.includeChildren && this.added.value.findSuperstr(t)) || (!i || s.includes(0)) && (this.updated.value.get(t) || r.includeChildren && this.updated.value.findSuperstr(t)) || (!i || s.includes(2)) && (this.deleted.value.findSubstr(t) || r.includeChildren && this.deleted.value.findSuperstr(t)));
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
  }, An.MIXED_CORRELATION = null, me = class Oe {
    static formatSize(t) {
      return Ho(t) || (t = 0), t < Oe.KB ? b(2024, null, t.toFixed(0)) : t < Oe.MB ? b(2025, null, (t / Oe.KB).toFixed(2)) : t < Oe.GB ? b(2026, null, (t / Oe.MB).toFixed(2)) : t < Oe.TB ? b(2027, null, (t / Oe.GB).toFixed(2)) : b(2028, null, (t / Oe.TB).toFixed(2));
    }
  }, me.KB = 1024, me.MB = me.KB * me.KB, me.GB = me.MB * me.KB, me.TB = me.GB * me.KB;
} });
function B2(e) {
  return typeof e.correlationId == "number";
}
function V2(e) {
  const t = new Dn();
  for (const r of e) t.processEvent(r);
  return t.coalesce();
}
function z2(e, t) {
  return typeof t == "string" && !t.startsWith(ot) && !ze(t) ? { base: e, pattern: t } : t;
}
function kn(e, t) {
  const r = [];
  for (const s of t) r.push(R2(z2(e, s)));
  return r;
}
function G2(e, t) {
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
var Pn, Dn, H2 = E({ "watcher.js"() {
  "use strict";
  w(), M2(), et(), le(), X(), Ye(), q2(), Pn = class Ao extends _e {
    constructor(t, r, s, i) {
      super(), this.onFileChanges = t, this.onLogMessage = r, this.verboseLogging = s, this.options = i, this.watcherDisposables = this._register(new Fr()), this.requests = void 0, this.restartCounter = 0;
    }
    init() {
      const t = new Re();
      this.watcherDisposables.value = t, this.watcher = this.createWatcher(t), this.watcher.setVerboseLogging(this.verboseLogging), t.add(this.watcher.onDidChangeFile((r) => this.onFileChanges(r))), t.add(this.watcher.onDidLogMessage((r) => this.onLogMessage(r))), t.add(this.watcher.onDidError((r) => this.onError(r.error, r.request)));
    }
    onError(t, r) {
      this._store.isDisposed || (this.canRestart(t, r) ? this.restartCounter < Ao.MAX_RESTARTS && this.requests ? (this.error(`restarting watcher after unexpected error: ${t}`), this.restart(this.requests)) : this.error(`gave up attempting to restart watcher after unexpected error: ${t}`) : this.error(t));
    }
    canRestart(t, r) {
      return !(!this.options.restartOnError || r || t.indexOf("No space left on device") !== -1 || t.indexOf("EMFILE") !== -1);
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
  }, Pn.MAX_RESTARTS = 5, Dn = class {
    constructor() {
      this.coalesced = /* @__PURE__ */ new Set(), this.mapPathToChange = /* @__PURE__ */ new Map();
    }
    toKey(e) {
      return we ? e.resource.fsPath : e.resource.fsPath.toLowerCase();
    }
    processEvent(e) {
      const t = this.mapPathToChange.get(this.toKey(e));
      let r = false;
      if (t) {
        const s = t.type, i = e.type;
        t.resource.fsPath !== e.resource.fsPath && (e.type === 2 || e.type === 1) ? r = true : s === 1 && i === 2 ? (this.mapPathToChange.delete(this.toKey(e)), this.coalesced.delete(t)) : s === 2 && i === 1 ? t.type = 0 : s === 1 && i === 0 || (t.type = i);
      } else r = true;
      r && (this.coalesced.add(e), this.mapPathToChange.set(this.toKey(e), e));
    }
    coalesce() {
      const e = [], t = [];
      return Array.from(this.coalesced).filter((r) => r.type !== 2 ? (e.push(r), false) : true).sort((r, s) => r.resource.fsPath.length - s.resource.fsPath.length).filter((r) => t.some((s) => W2(r.resource.fsPath, s, !we)) ? false : (t.push(r.resource.fsPath), true)).concat(e);
    }
  };
} }), at, K2 = E({ "watcherStallMonitor.js"() {
  "use strict";
  w(), et();
} });
import { watch as J2, promises as Q2 } from "fs";
async function Y2(e, t, r, s, i = 512) {
  const n = await Ce.open(e, "r"), a = Buffer.allocUnsafe(i), o = new it(s);
  let l, c = false;
  const h = { path: e, excludes: [], recursive: false }, u = new Tn(h, void 0, (f) => {
    (async () => {
      for (const { type: d } of f) if (d === 0) {
        if (c) return;
        c = true;
        try {
          for (; !o.token.isCancellationRequested; ) {
            const { bytesRead: m } = await Ce.read(n, a, 0, i, null);
            if (!m || o.token.isCancellationRequested) break;
            t(a.slice(0, m));
          }
        } catch (m) {
          l = new Error(m), o.dispose(true);
        } finally {
          c = false;
        }
      }
    })();
  });
  return await u.ready, r(), new Promise((f, d) => {
    o.token.onCancellationRequested(async () => {
      u.dispose();
      try {
        await Ce.close(n);
      } catch (m) {
        l = new Error(m);
      }
      l ? d(l) : f();
    });
  });
}
var or, Tn, Z2 = E({ "nodejsWatcherLib.js"() {
  "use strict";
  w(), St(), Zt(), Je(), et(), Qi(), le(), X(), c1(), Ye(), k2(), y1(), H2(), Ct(), K2(), or = class vr extends _e {
    constructor(t, r, s, i, n, a) {
      super(), this.request = t, this.recursiveWatcher = r, this.onDidFilesChange = s, this.onDidWatchFail = i, this.onLogMessage = n, this.verboseLogging = a, this.throttledFileChangesEmitter = this._register(new Gi({ maxWorkChunkSize: 100, throttleDelay: 200, maxBufferedWork: 1e4 }, (o) => this.onDidFilesChange(o))), this.fileChangesAggregator = this._register(new zi((o) => this.handleFileChanges(o), vr.FILE_CHANGES_HANDLER_DELAY)), this.watchedKind = "file", this.inDeletedPathFlush = false, this.cts = new it(), this.realPath = new Me(async () => {
        let o = this.request.path;
        try {
          o = await S2(this.request.path), this.request.path !== o && this.trace(`correcting a path to watch that seems to be a symbolic link (original: ${this.request.path}, real: ${o})`);
        } catch {
        }
        return o;
      }), this._isReusingRecursiveWatcher = false, this.didFail = false, this.excludes = kn(this.request.path, this.request.excludes), this.includes = this.request.includes ? kn(this.request.path, this.request.includes) : void 0, this.filter = B2(this.request) ? this.request.filter : void 0, this.ready = this.watch();
    }
    get isReusingRecursiveWatcher() {
      return this._isReusingRecursiveWatcher;
    }
    get failed() {
      return this.didFail;
    }
    async watch() {
      try {
        const t = await Q2.stat(this.request.path);
        if (this.cts.token.isCancellationRequested) return;
        await Ir(this.doWatch(t.isDirectory()), this._store);
      } catch (t) {
        t.code !== "ENOENT" ? this.error(t) : this.trace(`ignoring a path for watching who's stat info failed to resolve: ${this.request.path} (error: ${t})`), this.notifyWatchFailed();
      }
    }
    notifyWatchFailed() {
      this.didFail = true, this.onDidWatchFail?.();
    }
    async doWatch(t) {
      const r = new Re();
      return this.doWatchWithExistingWatcher(t, r) ? (this.trace(`reusing an existing recursive watcher for ${this.request.path}`), this._isReusingRecursiveWatcher = true) : (this._isReusingRecursiveWatcher = false, await this.doWatchWithNodeJS(t, r)), r;
    }
    doWatchWithExistingWatcher(t, r) {
      if (t) return false;
      const s = Y.file(this.request.path), i = this.recursiveWatcher?.subscribe(this.request.path, async (n, a) => {
        r.isDisposed || (n ? await Ir(this.doWatch(t), r) : a && (typeof a.cId == "number" || typeof this.request.correlationId == "number") && this.onFileChange({ resource: s, type: a.type, cId: this.request.correlationId }, true));
      });
      return i ? (r.add(i), true) : false;
    }
    async doWatchWithNodeJS(t, r) {
      const s = await this.realPath.value;
      if (this.cts.token.isCancellationRequested) return;
      if (xe && Pe(s, "/Volumes/", true)) {
        this.error(`Refusing to watch ${s} for changes using fs.watch() for possibly being a network share where watching is unreliable and unstable.`);
        return;
      }
      const i = new it(this.cts.token);
      r.add(qe(() => i.dispose(true)));
      const n = new Re();
      r.add(n);
      try {
        const a = Y.file(this.request.path), o = st(s), l = J2(s);
        n.add(qe(() => {
          l.removeAllListeners(), l.close();
        })), this.trace(`Started watching: '${s}'`);
        const c = /* @__PURE__ */ new Set();
        if (this.watchedKind = t ? "folder" : "file", t) try {
          for (const u of await Ce.readdir(s)) c.add(u);
        } catch (u) {
          this.error(u);
        }
        if (this.folderChildren = c, i.token.isCancellationRequested) return;
        const h = /* @__PURE__ */ new Map();
        n.add(qe(() => {
          for (const [, u] of h) u.dispose();
          h.clear();
        })), l.on("error", (u, f) => {
          i.token.isCancellationRequested || (this.error(`Failed to watch ${s} for changes using fs.watch() (${u}, ${f})`), this.notifyWatchFailed());
        }), l.on("change", (u, f) => {
          if (i.token.isCancellationRequested) return;
          at?.onRawEvent(), this.verboseLogging && this.traceWithCorrelation(`[raw] ["${u}"] ${f}`);
          let d = "";
          if (f && (d = f.toString(), xe && (d = m1(d))), !(!d || u !== "change" && u !== "rename")) if (t) if (u === "rename") {
            h.get(d)?.dispose(), at?.onProbeScheduled();
            const m = setTimeout(async () => {
              if (h.delete(d), bi(d, o, !we) && !await Ce.exists(s)) {
                this.onWatchedPathDeleted(a);
                return;
              }
              if (i.token.isCancellationRequested) return;
              const k = at?.active ? performance.now() : void 0, D = await this.existsChildStrictCase(Q(s, d));
              if (k !== void 0 && at?.onProbeCompleted(performance.now() - k), i.token.isCancellationRequested) return;
              let P;
              D ? c.has(d) ? P = 0 : (P = 1, c.add(d)) : (c.delete(d), P = 2), this.onFileChange({ resource: o1(a, d), type: P, cId: this.request.correlationId });
            }, vr.FILE_DELETE_HANDLER_DELAY);
            h.set(d, qe(() => clearTimeout(m)));
          } else {
            let m;
            c.has(d) ? m = 0 : (m = 1, c.add(d)), this.onFileChange({ resource: o1(a, d), type: m, cId: this.request.correlationId });
          }
          else if (u === "rename" || !bi(d, o, !we)) {
            const m = setTimeout(async () => {
              const k = await Ce.exists(s);
              i.token.isCancellationRequested || (k ? (this.onFileChange({ resource: a, type: 0, cId: this.request.correlationId }, true), await Ir(this.doWatch(false), n)) : this.onWatchedPathDeleted(a));
            }, vr.FILE_DELETE_HANDLER_DELAY);
            n.clear(), n.add(qe(() => clearTimeout(m)));
          } else this.onFileChange({ resource: a, type: 0, cId: this.request.correlationId }, true);
        });
      } catch (a) {
        if (i.token.isCancellationRequested) return;
        this.error(`Failed to watch ${s} for changes using fs.watch() (${a.toString()})`), this.notifyWatchFailed();
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
    onFileChange(t, r = false) {
      this.cts.token.isCancellationRequested || (this.verboseLogging && this.traceWithCorrelation(`${t.type === 1 ? "[ADDED]" : t.type === 2 ? "[DELETED]" : "[CHANGED]"} ${t.resource.fsPath}`), !r && this.excludes.some((s) => s(t.resource.fsPath)) ? this.verboseLogging && this.traceWithCorrelation(` >> ignored (excluded) ${t.resource.fsPath}`) : !r && this.includes && this.includes.length > 0 && !this.includes.some((s) => s(t.resource.fsPath)) ? this.verboseLogging && this.traceWithCorrelation(` >> ignored (not included) ${t.resource.fsPath}`) : this.fileChangesAggregator.work(t));
    }
    handleFileChanges(t) {
      const r = at?.active ? performance.now() : void 0, s = V2(t), i = r !== void 0 ? performance.now() : 0, n = [];
      for (const l of s) {
        if (G2(l, this.filter)) {
          this.verboseLogging && this.traceWithCorrelation(` >> ignored (filtered) ${l.resource.fsPath}`);
          continue;
        }
        n.push(l);
      }
      if (n.length === 0) {
        r !== void 0 && this.reportFlush({ flushStart: r, coalesceDone: i, emitStart: 0, fileChanges: t, filteredEvents: n, emitted: false });
        return;
      }
      if (this.verboseLogging) for (const l of n) this.traceWithCorrelation(` >> normalized ${l.type === 1 ? "[ADDED]" : l.type === 2 ? "[DELETED]" : "[CHANGED]"} ${l.resource.fsPath}`);
      const a = r !== void 0 ? performance.now() : 0, o = this.throttledFileChangesEmitter.work(n);
      r !== void 0 && this.reportFlush({ flushStart: r, coalesceDone: i, emitStart: a, fileChanges: t, filteredEvents: n, emitted: o }), o ? this.throttledFileChangesEmitter.pending > 0 && this.trace(`started throttling events due to large amount of file change events at once (pending: ${this.throttledFileChangesEmitter.pending}, most recent change: ${n[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`) : this.warn(`started ignoring events due to too many file change events at once (incoming: ${n.length}, most recent change: ${n[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`);
    }
    reportFlush(t) {
      const r = performance.now();
      at?.onFlush({ flushMs: r - t.flushStart, coalesceMs: t.coalesceDone - t.flushStart, emitMs: t.emitStart ? r - t.emitStart : 0, inEvents: t.fileChanges.length, outEvents: t.filteredEvents.length, emitted: t.emitted, pending: this.throttledFileChangesEmitter.pending, entry: this.inDeletedPathFlush ? "deleted_path_flush" : "timer", request: this.request, targetKind: this.watchedKind, folderChildren: this.folderChildren?.size ?? 0, fileChanges: t.fileChanges });
    }
    async existsChildStrictCase(t) {
      if (we) return Ce.exists(t);
      try {
        const r = st(t);
        return (await Ce.readdir(Ne(t))).some((i) => i === r);
      } catch (r) {
        return this.trace(r), false;
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
  }, or.FILE_DELETE_HANDLER_DELAY = 100, or.FILE_CHANGES_HANDLER_DELAY = 75, Tn = or;
} }), X2 = Ro({ "index.js"(e, t) {
  "use strict";
  w();
  function r(n, a) {
    var o = n;
    a.slice(0, -1).forEach(function(c) {
      o = o[c] || {};
    });
    var l = a[a.length - 1];
    return l in o;
  }
  function s(n) {
    return typeof n == "number" || /^0x[0-9a-f]+$/i.test(n) ? true : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n);
  }
  function i(n, a) {
    return a === "constructor" && typeof n[a] == "function" || a === "__proto__";
  }
  t.exports = function(n, a) {
    a || (a = {});
    var o = { bools: {}, strings: {}, unknownFn: null };
    typeof a.unknown == "function" && (o.unknownFn = a.unknown), typeof a.boolean == "boolean" && a.boolean ? o.allBools = true : [].concat(a.boolean).filter(Boolean).forEach(function(A) {
      o.bools[A] = true;
    });
    var l = {};
    function c(A) {
      return l[A].some(function(U) {
        return o.bools[U];
      });
    }
    Object.keys(a.alias || {}).forEach(function(A) {
      l[A] = [].concat(a.alias[A]), l[A].forEach(function(U) {
        l[U] = [A].concat(l[A].filter(function(fe) {
          return U !== fe;
        }));
      });
    }), [].concat(a.string).filter(Boolean).forEach(function(A) {
      o.strings[A] = true, l[A] && [].concat(l[A]).forEach(function(U) {
        o.strings[U] = true;
      });
    });
    var h = a.default || {}, u = { _: [] };
    function f(A, U) {
      return o.allBools && /^--[^=]+$/.test(U) || o.strings[A] || o.bools[A] || l[A];
    }
    function d(A, U, fe) {
      for (var $ = A, We = 0; We < U.length - 1; We++) {
        var ne = U[We];
        if (i($, ne)) return;
        $[ne] === void 0 && ($[ne] = {}), ($[ne] === Object.prototype || $[ne] === Number.prototype || $[ne] === String.prototype) && ($[ne] = {}), $[ne] === Array.prototype && ($[ne] = []), $ = $[ne];
      }
      var g = U[U.length - 1];
      i($, g) || (($ === Object.prototype || $ === Number.prototype || $ === String.prototype) && ($ = {}), $ === Array.prototype && ($ = []), $[g] === void 0 || o.bools[g] || typeof $[g] == "boolean" ? $[g] = fe : Array.isArray($[g]) ? $[g].push(fe) : $[g] = [$[g], fe]);
    }
    function m(A, U, fe) {
      if (!(fe && o.unknownFn && !f(A, fe) && o.unknownFn(fe) === false)) {
        var $ = !o.strings[A] && s(U) ? Number(U) : U;
        d(u, A.split("."), $), (l[A] || []).forEach(function(We) {
          d(u, We.split("."), $);
        });
      }
    }
    Object.keys(o.bools).forEach(function(A) {
      m(A, h[A] === void 0 ? false : h[A]);
    });
    var k = [];
    n.indexOf("--") !== -1 && (k = n.slice(n.indexOf("--") + 1), n = n.slice(0, n.indexOf("--")));
    for (var D = 0; D < n.length; D++) {
      var P = n[D], x, O;
      if (/^--.+=/.test(P)) {
        var Z = P.match(/^--([^=]+)=([\s\S]*)$/);
        x = Z[1];
        var C = Z[2];
        o.bools[x] && (C = C !== "false"), m(x, C, P);
      } else if (/^--no-.+/.test(P)) x = P.match(/^--no-(.+)/)[1], m(x, false, P);
      else if (/^--.+/.test(P)) x = P.match(/^--(.+)/)[1], O = n[D + 1], O !== void 0 && !/^(-|--)[^-]/.test(O) && !o.bools[x] && !o.allBools && (!l[x] || !c(x)) ? (m(x, O, P), D += 1) : /^(true|false)$/.test(O) ? (m(x, O === "true", P), D += 1) : m(x, o.strings[x] ? "" : true, P);
      else if (/^-[^-]+/.test(P)) {
        for (var _ = P.slice(1, -1).split(""), T = false, I = 0; I < _.length; I++) {
          if (O = P.slice(I + 2), O === "-") {
            m(_[I], O, P);
            continue;
          }
          if (/[A-Za-z]/.test(_[I]) && O[0] === "=") {
            m(_[I], O.slice(1), P), T = true;
            break;
          }
          if (/[A-Za-z]/.test(_[I]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(O)) {
            m(_[I], O, P), T = true;
            break;
          }
          if (_[I + 1] && _[I + 1].match(/\W/)) {
            m(_[I], P.slice(I + 2), P), T = true;
            break;
          } else m(_[I], o.strings[_[I]] ? "" : true, P);
        }
        x = P.slice(-1)[0], !T && x !== "-" && (n[D + 1] && !/^(-|--)[^-]/.test(n[D + 1]) && !o.bools[x] && (!l[x] || !c(x)) ? (m(x, n[D + 1], P), D += 1) : n[D + 1] && /^(true|false)$/.test(n[D + 1]) ? (m(x, n[D + 1] === "true", P), D += 1) : m(x, o.strings[x] ? "" : true, P));
      } else if ((!o.unknownFn || o.unknownFn(P) !== false) && u._.push(o.strings._ || !s(P) ? P : Number(P)), a.stopEarly) {
        u._.push.apply(u._, n.slice(D + 1));
        break;
      }
    }
    return Object.keys(h).forEach(function(A) {
      r(u, A.split(".")) || (d(u, A.split("."), h[A]), (l[A] || []).forEach(function(U) {
        d(u, U.split("."), h[A]);
      }));
    }), a["--"] ? u["--"] = k.slice() : k.forEach(function(A) {
      u._.push(A);
    }), u;
  };
} });
function el(e) {
  if (e) return O1;
  const t = { ...O1 };
  return delete t.desktop, t;
}
function On(e, t, r = Fn) {
  const s = e.find((f) => f.length > 0 && f[0] !== "-"), i = {}, n = ["_"], a = [], o = {};
  let l;
  for (const f in t) {
    const d = t[f];
    d.type === "subcommand" ? f === s && (l = d) : (d.alias && (i[f] = d.alias), d.type === "string" || d.type === "string[]" ? (n.push(f), d.deprecates && n.push(...d.deprecates)) : d.type === "boolean" && (a.push(f), d.deprecates && a.push(...d.deprecates)), d.global && (o[f] = d));
  }
  if (l && s) {
    const f = o;
    for (const D in l.options) f[D] = l.options[D];
    const d = [...e];
    d.splice(d.indexOf(s), 1);
    const m = r.getSubcommandReporter ? r.getSubcommandReporter(s) : void 0, k = On(d, f, m);
    return { [s]: k, _: [] };
  }
  const c = (0, xn.default)(e, { string: n, boolean: a, alias: i }), h = {}, u = c;
  h._ = c._.map((f) => String(f)).filter((f) => f.length > 0), delete u._;
  for (const f in t) {
    const d = t[f];
    if (d.type === "subcommand") continue;
    d.alias && delete u[d.alias];
    let m = u[f];
    if (d.deprecates) for (const k of d.deprecates) u.hasOwnProperty(k) && (m || (m = u[k], m && r.onDeprecatedOption(k, d.deprecationMessage || b(1906, null, f))), delete u[k]);
    if (typeof m < "u") {
      if (d.type === "string[]") {
        if (Array.isArray(m) || (m = [m]), !d.allowEmptyValue) {
          const k = m.filter((D) => D.length > 0);
          k.length !== m.length && (r.onEmptyValue(f), m = k.length > 0 ? k : void 0);
        }
      } else d.type === "string" && (Array.isArray(m) ? (m = m.pop(), r.onMultipleValues(f, m)) : !m && !d.allowEmptyValue && (r.onEmptyValue(f), m = void 0));
      h[f] = m, d.deprecationMessage && r.onDeprecatedOption(f, d.deprecationMessage);
    }
    delete u[f];
  }
  for (const f in u) r.onUnknownOption(f);
  return h;
}
function tl(e, t) {
  let r = "";
  return t.args && (Array.isArray(t.args) ? r = ` <${t.args.join("> <")}>` : r = ` <${t.args}>`), t.alias ? `-${t.alias} --${e}${r}` : `--${e}${r}`;
}
function rl(e, t) {
  const r = [];
  for (const s in e) {
    const i = e[s], n = tl(s, i);
    r.push([n, i.description]);
  }
  return Ln(r, t);
}
function Ln(e, t) {
  const s = e.reduce((a, o) => Math.max(a, o[0].length), 12) + 2 + 1;
  if (t - s < 25) return e.reduce((a, o) => a.concat([`  ${o[0]}`, `      ${o[1]}`]), []);
  const i = t - s - 1, n = [];
  for (const a of e) {
    const o = a[0], l = sl(a[1], i), c = Rn(s - o.length - 2);
    n.push("  " + o + c + l[0]);
    for (let h = 1; h < l.length; h++) n.push(Rn(s) + l[h]);
  }
  return n;
}
function Rn(e) {
  return " ".repeat(e);
}
function sl(e, t) {
  const r = [];
  for (; e.length; ) {
    let s = e.length < t ? e.length : e.lastIndexOf(" ", t);
    s === 0 && (s = t);
    const i = e.slice(0, s).trim();
    e = e.slice(s).trimStart(), r.push(i);
  }
  return r;
}
function il(e, t, r, s, i) {
  const n = process.stdout.isTTY && process.stdout.columns || 80, a = i?.noInputFiles !== true ? `[${b(1907, null)}...]` : "", o = [`${e} ${r}`];
  o.push(""), o.push(`${b(1908, null)}: ${t} [${b(1909, null)}]${a}`), o.push(""), i?.noPipe !== true && (V ? o.push(b(1910, null, t)) : o.push(b(1911, null, t)), o.push(""));
  const l = {}, c = [];
  for (const h in s) {
    const u = s[h];
    if (u.type === "subcommand") u.description && c.push({ command: h, description: u.description });
    else if (u.description && u.cat) {
      let f = l[u.cat];
      f || (l[u.cat] = f = {}), f[h] = u;
    }
  }
  for (const h in l) {
    const u = h, f = l[u];
    f && (o.push(In[u]), o.push(...rl(f, n)), o.push(""));
  }
  return c.length && (o.push(b(1912, null)), o.push(...Ln(c.map((h) => [h.command, h.description]), n)), o.push("")), o.join(`
`);
}
function nl(e, t) {
  return `${e || b(1913, null)}
${t || b(1914, null)}
${process.arch}`;
}
var xn, In, ar, Ot, T1, Nn, O1, Mn, Fn, $n = E({ "argv.js"() {
  "use strict";
  w(), xn = No(X2(), 1), X(), Vt(), In = { o: b(1860, null), e: b(1861, null), t: b(1862, null) }, ar = ["tunnel"], Ot = { tunnel: { type: "subcommand", description: "Make the current machine accessible from vscode.dev or other machines through a secure tunnel", options: { "cli-data-dir": { type: "string", args: "dir", description: b(1863, null) }, "disable-telemetry": { type: "boolean" }, "telemetry-level": { type: "string" }, user: { type: "subcommand", options: { login: { type: "subcommand", options: { provider: { type: "string" }, "access-token": { type: "string" } } } } } } }, diff: { type: "boolean", cat: "o", alias: "d", args: ["file", "file"], description: b(1864, null) }, merge: { type: "boolean", cat: "o", alias: "m", args: ["path1", "path2", "base", "result"], description: b(1865, null) }, add: { type: "boolean", cat: "o", alias: "a", args: "folder", description: b(1866, null) }, remove: { type: "boolean", cat: "o", args: "folder", description: b(1867, null) }, goto: { type: "boolean", cat: "o", alias: "g", args: "file:line[:character]", description: b(1868, null) }, "new-window": { type: "boolean", cat: "o", alias: "n", description: b(1869, null) }, "reuse-window": { type: "boolean", cat: "o", alias: "r", description: b(1870, null) }, "suppress-popups-on-startup": { type: "boolean", cat: "o", description: b(1871, null) }, "web-worker-exthost": { type: "boolean", cat: "o", description: b(1872, null) }, glass: { type: "boolean", cat: "o", description: b(1873, null) }, classic: { type: "boolean", cat: "o", description: b(1874, null) }, wait: { type: "boolean", cat: "o", alias: "w", description: b(1875, null) }, waitMarkerFilePath: { type: "string" }, locale: { type: "string", cat: "o", args: "locale", description: b(1876, null) }, "user-data-dir": { type: "string", cat: "o", args: "dir", description: b(1877, null) }, "local-mode-data-import-token": { type: "string" }, profile: { type: "string", cat: "o", args: "profileName", description: b(1878, null) }, help: { type: "boolean", cat: "o", alias: "h", description: b(1879, null) }, "extensions-dir": { type: "string", deprecates: ["extensionHomePath"], cat: "e", args: "dir", description: b(1880, null) }, "extensions-download-dir": { type: "string" }, "builtin-extensions-dir": { type: "string" }, "list-extensions": { type: "boolean", cat: "e", description: b(1881, null) }, "show-versions": { type: "boolean", cat: "e", description: b(1882, null) }, category: { type: "string", allowEmptyValue: true, cat: "e", description: b(1883, null), args: "category" }, "install-extension": { type: "string[]", cat: "e", args: "ext-id | path", description: b(1884, null) }, "pre-release": { type: "boolean", cat: "e", description: b(1885, null) }, "uninstall-extension": { type: "string[]", cat: "e", args: "ext-id", description: b(1886, null) }, "update-extensions": { type: "boolean", cat: "e", description: b(1887, null) }, "enable-proposed-api": { type: "string[]", allowEmptyValue: true, cat: "e", args: "ext-id", description: b(1888, null) }, "add-mcp": { type: "string[]", cat: "o", args: "json", description: b(1889, null) }, version: { type: "boolean", cat: "t", alias: "v", description: b(1890, null) }, verbose: { type: "boolean", cat: "t", global: true, description: b(1891, null) }, log: { type: "string[]", cat: "t", args: "level", global: true, description: b(1892, null) }, status: { type: "boolean", alias: "s", cat: "t", description: b(1893, null) }, "prof-startup": { type: "boolean", cat: "t", description: b(1894, null) }, "prof-append-timers": { type: "string" }, "prof-duration-markers": { type: "string[]" }, "prof-duration-markers-file": { type: "string" }, "no-cached-data": { type: "boolean" }, "prof-startup-prefix": { type: "string" }, "prof-v8-extensions": { type: "boolean" }, "disable-extensions": { type: "boolean", deprecates: ["disableExtensions"], cat: "t", description: b(1895, null) }, "disable-extension": { type: "string[]", cat: "t", args: "ext-id", description: b(1896, null) }, sync: { type: "string", cat: "t", description: b(1897, null), args: ["on | off"] }, "inspect-extensions": { type: "string", allowEmptyValue: true, deprecates: ["debugPluginHost"], args: "port", cat: "t", description: b(1898, null) }, "inspect-brk-extensions": { type: "string", allowEmptyValue: true, deprecates: ["debugBrkPluginHost"], args: "port", cat: "t", description: b(1899, null) }, "disable-lcd-text": { type: "boolean", cat: "t", description: b(1900, null) }, "disable-gpu": { type: "boolean", cat: "t", description: b(1901, null) }, "disable-chromium-sandbox": { type: "boolean", cat: "t", description: b(1902, null) }, sandbox: { type: "boolean" }, "locate-shell-integration-path": { type: "string", cat: "t", args: ["shell"], description: b(1903, null) }, telemetry: { type: "boolean", cat: "t", description: b(1904, null) }, remote: { type: "string", allowEmptyValue: true }, "folder-uri": { type: "string[]", cat: "o", args: "uri" }, "file-uri": { type: "string[]", cat: "o", args: "uri" }, "locate-extension": { type: "string[]" }, extensionDevelopmentPath: { type: "string[]" }, extensionDevelopmentKind: { type: "string[]" }, extensionTestsPath: { type: "string" }, extensionEnvironment: { type: "string" }, debugId: { type: "string" }, debugRenderer: { type: "boolean" }, "inspect-ptyhost": { type: "string", allowEmptyValue: true }, "inspect-brk-ptyhost": { type: "string", allowEmptyValue: true }, "inspect-search": { type: "string", deprecates: ["debugSearch"], allowEmptyValue: true }, "inspect-brk-search": { type: "string", deprecates: ["debugBrkSearch"], allowEmptyValue: true }, "inspect-sharedprocess": { type: "string", allowEmptyValue: true }, "inspect-brk-sharedprocess": { type: "string", allowEmptyValue: true }, "export-default-configuration": { type: "string" }, "install-source": { type: "string" }, "enable-smoke-test-driver": { type: "boolean" }, "telemetry-source": { type: "string" }, "smoke-test-use-real-agent-http": { type: "boolean" }, "smoke-test-nal-stream-timeout-ms": { type: "string" }, "smoke-test-nal-endless-retries": { type: "boolean" }, "smoke-test-nal-retry-delay-ms": { type: "string" }, "debug-slow-window-unload-ms": { type: "string" }, headless: { type: "boolean" }, "test-backend-url": { type: "string" }, "test-feature-flags": { type: "string" }, "test-experiments": { type: "string" }, "test-dynamic-configs": { type: "string" }, "test-layers": { type: "string" }, "test-composer-chat-script": { type: "string" }, logExtensionHostCommunication: { type: "boolean" }, "skip-release-notes": { type: "boolean" }, "skip-welcome": { type: "boolean" }, "skip-onboarding": { type: "boolean" }, "override-cursor-auth-token": { type: "string" }, "disable-telemetry": { type: "boolean" }, "disable-updates": { type: "boolean" }, "agent-harness-trust-dev-key": { type: "boolean" }, "use-inmemory-secretstorage": { type: "boolean", deprecates: ["disable-keytar"] }, "password-store": { type: "string" }, "disable-workspace-trust": { type: "boolean" }, "disable-crash-reporter": { type: "boolean" }, "crash-reporter-directory": { type: "string" }, "crash-reporter-id": { type: "string" }, "skip-add-to-recently-opened": { type: "boolean" }, "open-url": { type: "boolean" }, "file-write": { type: "boolean" }, "file-chmod": { type: "boolean" }, "install-builtin-extension": { type: "string[]" }, force: { type: "boolean" }, "do-not-sync": { type: "boolean" }, "do-not-include-pack-dependencies": { type: "boolean" }, trace: { type: "boolean" }, "trace-memory-infra": { type: "boolean" }, "trace-category-filter": { type: "string" }, "trace-options": { type: "string" }, "preserve-env": { type: "boolean" }, "force-user-env": { type: "boolean" }, "force-disable-user-env": { type: "boolean" }, "open-devtools": { type: "boolean" }, "enable-react-devtools": { type: "boolean" }, "disable-react-devtools": { type: "boolean" }, "react-production-bundles": { type: "boolean" }, "react-performance-tracks": { type: "boolean" }, "shadow-window-for-workspace-id": { type: "string" }, "is-vm-daemon-parallel-process": { type: "boolean" }, "disable-gpu-sandbox": { type: "boolean" }, logsPath: { type: "string" }, "__enable-file-policy": { type: "boolean" }, continueOn: { type: "string" }, "enable-coi": { type: "boolean" }, "unresponsive-sample-interval": { type: "string" }, "unresponsive-sample-period": { type: "string" }, "no-proxy-server": { type: "boolean" }, "no-sandbox": { type: "boolean", alias: "sandbox" }, "proxy-server": { type: "string" }, "proxy-bypass-list": { type: "string" }, "proxy-pac-url": { type: "string" }, "js-flags": { type: "string" }, inspect: { type: "string", allowEmptyValue: true }, "inspect-brk": { type: "string", allowEmptyValue: true }, nolazy: { type: "boolean" }, "force-device-scale-factor": { type: "string" }, "force-renderer-accessibility": { type: "boolean" }, "ignore-certificate-errors": { type: "boolean" }, "allow-insecure-localhost": { type: "boolean" }, "log-net-log": { type: "string" }, vmodule: { type: "string" }, _urls: { type: "string[]" }, "disable-dev-shm-usage": { type: "boolean" }, "profile-temp": { type: "boolean" }, "ozone-platform": { type: "string" }, "enable-tracing": { type: "string" }, "trace-startup-format": { type: "string" }, "trace-startup-file": { type: "string" }, "trace-startup-duration": { type: "string" }, "xdg-portal-required-version": { type: "string" }, hmr: { type: "boolean" }, chat: { type: "boolean", cat: "o", description: b(1905, null) }, _: { type: "string[]" } }, T1 = { type: "subcommand", description: "Interact with chat threads in a running Cursor desktop app.", options: { json: { type: "boolean", description: "Machine-readable output" }, force: { type: "boolean", description: "Submit immediately, interrupting a running turn (send)" }, stdin: { type: "boolean", description: "Read message text from stdin (send)" }, help: { type: "boolean", alias: "h", description: "Print usage" }, _: { type: "string[]" } } }, Nn = { agent: { type: "subcommand", description: "Start the Cursor agent in your terminal.", options: {} }, desktop: T1 }, O1 = { ...Ot, ...Nn }, Mn = { ...Ot, desktop: T1 }, Fn = { onUnknownOption: () => {
  }, onMultipleValues: () => {
  }, onEmptyValue: () => {
  }, onDeprecatedOption: () => {
  } };
} }), ol = E({ "telemetrySource.js"() {
  "use strict";
  w();
} });
import al from "assert";
function jn(e, t, r) {
  const s = (c, h) => {
    console.warn(b(1915, null, c, h));
  }, i = (c) => {
    console.warn(b(1916, null, c));
  }, n = (c, h) => {
    console.warn(b(1917, null, c, h));
  }, a = (c) => ({ onUnknownOption: (h) => {
    ar.includes(c) || console.warn(b(1918, null, h, c));
  }, onMultipleValues: s, onEmptyValue: i, onDeprecatedOption: n, getSubcommandReporter: ar.includes(c) ? a : void 0 }), l = On(e, r, t ? { onUnknownOption: (c) => {
    console.warn(b(1919, null, c));
  }, onMultipleValues: s, onEmptyValue: i, onDeprecatedOption: n, getSubcommandReporter: a } : void 0);
  return l.goto && l._.forEach((c) => al(/^(\w:)?[^:]+(:\d*){0,2}:?$/.test(c), b(1920, null))), l;
}
function ll(e) {
  const t = e.findIndex((r) => !/^-/.test(r));
  if (t > -1) return [...e.slice(0, t), ...e.slice(t + 1)];
}
function L1(e) {
  let [, , ...t] = e;
  return process.env.VSCODE_DEV && (t = ll(t) || []), t;
}
function cl(e) {
  return jn(L1(e), true, Ot);
}
function ul(e) {
  return L1(e).find((r) => r.length > 0 && r[0] !== "-") === "desktop";
}
function hl(e) {
  return jn(L1(e), true, Mn);
}
function je(e, ...t) {
  const r = e.indexOf("--");
  return r === -1 ? e.push(...t) : e.splice(r, 0, ...t), e;
}
var fl = E({ "argvHelper.js"() {
  "use strict";
  w(), Vt(), ol(), $n();
} });
function Wn(e) {
  return typeof e == "string" && e.length > 0;
}
function Un(e) {
  const t = e.trim();
  return t.length > 0 && (zn.test(t) || t.length >= 36);
}
function dl({ homeDir: e, envOverride: t }) {
  return t !== void 0 ? t : `${e.replace(/[\\/]+$/, "")}/.cursor/desktop-bridge`;
}
function qn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function lr(e) {
  return typeof e == "string" && e.length > 0;
}
function pl(e) {
  if (!(!qn(e) || typeof e.protocolVersion != "number" || !Number.isInteger(e.protocolVersion) || typeof e.pid != "number" || !Number.isInteger(e.pid) || e.pid <= 0 || !lr(e.socketPath) || typeof e.token != "string" || !/^[0-9a-f]{64}$/.test(e.token) || !lr(e.appName) || !lr(e.appVersion) || !lr(e.userDataDir) || typeof e.createdAt != "number" || !Number.isFinite(e.createdAt) || e.createdAt < 0)) return { protocolVersion: e.protocolVersion, pid: e.pid, socketPath: e.socketPath, token: e.token, appName: e.appName, appVersion: e.appVersion, userDataDir: e.userDataDir, createdAt: e.createdAt };
}
function ml(e) {
  return e === "local" || e === "cloud" || e === "draft" || e === "claude-code";
}
function gl(e) {
  return e === "idle" || e === "running" || e === "completed" || e === "error" || e === "unknown";
}
function _l(e) {
  if (!(!qn(e) || !Wn(e.id) || typeof e.title != "string" || !ml(e.source) || !gl(e.status) || typeof e.lastUpdatedAt != "number" || !Number.isFinite(e.lastUpdatedAt) || typeof e.windowId != "number" || !Number.isInteger(e.windowId))) return { id: e.id, title: e.title, source: e.source, status: e.status, lastUpdatedAt: e.lastUpdatedAt, windowId: e.windowId };
}
var Bn, yl, Vn, zn, vl = E({ "desktop-bridge.ts"() {
  "use strict";
  w(), Bn = 1, yl = 256 * 1024, Vn = 200, zn = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
} }), Gn, wl, Hn, bl, Kn, Cl, Jn, El, Qn, Sl, Yn, Al, Zn, kl, Xn, Pl, eo, Dl, Tl = E({ "permissions.ts"() {
  "use strict";
  w(), Gn = { ReadSpend: "team.spend.read", ReadTeamMemberSpend: "team.member_spend.read", ReadPrivacyMode: "team.privacy_mode.read", ReadSsoConfiguration: "team.sso.read", ReadTeamRules: "team.rules.read", ManageTeamRules: "team.rules.manage", ReadTeamHooks: "team.hooks.read", ManageTeamHooks: "team.hooks.manage", ReadCommitMetrics: "team.commit_metrics.read", ManageDirectoryGroups: "team.directory_groups.manage", ManageProtectedGitScopes: "team.protected_git_scopes.manage", ReadBackgroundComposers: "team.background_composers.read", ListTeamBackgroundComposers: "team.background_composers.list", ManageTeamBackgroundComposers: "team.background_composers.manage", ManageFullSelfDriving: "team.full_self_driving.manage", ManagePublicProfileSettings: "team.public_profile_settings.manage", ManageMemberSpendLimits: "team.member_spend_limits.manage", ManageTeamMcpServers: "team.mcp_servers.manage", ManageScimConfiguration: "team.scim_configuration.manage", ManageBillingGroups: "team.billing_groups.manage", ReadGroups: "team.groups.read", ManageGroups: "team.groups.manage", ReadTeamMembers: "team.members.read", ManageTeamMembers: "team.members.manage", ReadTeamMembership: "team.membership.read", ReadTeamInvites: "team.invites.read", ManageTeamInvites: "team.invites.manage", ManageTeamApiKeys: "team.api_keys.manage", ReadTeamRepos: "team.repos.read", ManageTeamRepos: "team.repos.manage", ReadTeamSettings: "team.settings.read", ManageTeamSettings: "team.settings.manage", ReadTeamBilling: "team.billing.read", ManageTeamBilling: "team.billing.manage", ReadAuditLogs: "team.audit_logs.read", ReadTeamAnalytics: "team.analytics.read", ManageTeamAnalytics: "team.analytics.manage", ManageTeamPrivacy: "team.privacy.manage", ReadTeamCommands: "team.commands.read", ManageTeamCommands: "team.commands.manage", ReadBugbot: "team.bugbot.read", ManageBugbot: "team.bugbot.manage", ReadTeamSharingSettings: "team.sharing_settings.read", ManageTeamSharingSettings: "team.sharing_settings.manage", ManageTeamBackgroundAgentSettings: "team.background_agent_settings.manage", ReadTeamPlugins: "team.plugins.read", ManageTeamPlugins: "team.plugins.manage", ReadTeamIntegrations: "team.integrations.read", ManageTeamIntegrations: "team.integrations.manage", ReadDataExports: "team.data_exports.read", ReadGithubIdentityMappings: "team.github_identity_mappings.read" }, wl = Object.values(Gn), Hn = { ReadMembers: "organization.members.read", WriteMembers: "organization.members.write", ManageMemberships: "organization.memberships.manage", ManageOrganization: "organization.manage", ManageTeams: "organization.teams.manage", ReadGroups: "organization.groups.read", ManageGroups: "organization.groups.manage", ManageApiKeys: "organization.api_keys.manage", ManageIdentityProviders: "organization.identity_providers.manage", ReadSpend: "organization.spend.read", ReadAuditLogs: "organization.audit_logs.read", ReadBilling: "organization.billing.read" }, bl = Object.values(Hn), Kn = { ReadAgentStore: "agent_store.read", WriteAgentStore: "agent_store.write", ShareAgentStore: "agent_store.share" }, Cl = Object.values(Kn), Jn = { ReadAgentStoreShare: "agent_store_share.read" }, El = Object.values(Jn), Qn = { ReadGrokBotTemplate: "grok_bot_template.read", WriteGrokBotTemplate: "grok_bot_template.write", ShareGrokBotTemplate: "grok_bot_template.share", DeleteGrokBotTemplate: "grok_bot_template.delete" }, Sl = Object.values(Qn), Yn = { ManageGrokBotAgent: "grok_bot_agent.manage", UseGrokBotAgent: "grok_bot_agent.use" }, Al = Object.values(Yn), Zn = { ManageKeyring: "keyring.manage", AttachKeyring: "keyring.attach" }, kl = Object.values(Zn), Xn = { ManageEnvironmentSecurity: "environment.security.manage", ManageEnvironmentWorkload: "environment.workload.manage", UseEnvironment: "environment.use" }, Pl = Object.values(Xn), eo = { ReadAgentServeDeployment: "agent_serve_deployment.read", DeployAgentServeDeployment: "agent_serve_deployment.deploy", ManageAgentServeDeploymentSecrets: "agent_serve_deployment.secrets", ManageAgentServeDeploymentAccess: "agent_serve_deployment.manage_access" }, Dl = Object.values(eo);
} }), Ol = E({ "index.ts"() {
  w(), vl(), Tl();
} });
import { readdir as Ll, readFile as Rl } from "fs/promises";
import { request as xl } from "http";
import { homedir as Il } from "os";
import { join as Nl } from "path";
function cr(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function to(e) {
  return cr(e) && typeof e.code == "string" ? e.code : void 0;
}
function Ml(e) {
  try {
    return process.kill(e, 0), true;
  } catch (t) {
    return to(t) === "EPERM";
  }
}
async function ro(e, t, r) {
  const s = new Array(e.length);
  let i = 0;
  const n = Array.from({ length: Math.min(t, e.length) }, async () => {
    for (; i < e.length; ) {
      const a = i++;
      s[a] = await r(e[a]);
    }
  });
  return await Promise.all(n), s;
}
function Fl(e) {
  if (!cr(e) || !Array.isArray(e.threads)) return;
  const t = [];
  for (const r of e.threads) {
    const s = _l(r);
    if (!s) return;
    t.push(s);
  }
  return { threads: t };
}
function $l(e) {
  if (!(!cr(e) || typeof e.status != "string")) switch (e.status) {
    case "submitted":
    case "queued":
      return !Wn(e.threadId) || typeof e.windowId != "number" || !Number.isInteger(e.windowId) || typeof e.threadTitle != "string" ? void 0 : { status: e.status, threadId: e.threadId, windowId: e.windowId, threadTitle: e.threadTitle };
    case "unknown-thread":
      return { status: "unknown-thread" };
    case "timeout":
      return { status: "timeout" };
    case "not-sendable":
      return typeof e.reason == "string" ? { status: "not-sendable", reason: e.reason } : void 0;
    case "error":
      return typeof e.message == "string" ? { status: "error", message: e.message } : void 0;
    default:
      return;
  }
}
function so(e, t) {
  const r = cr(t.body) && typeof t.body.error == "string" ? `: ${t.body.error}` : "";
  return new Error(`${e.label} desktop bridge returned HTTP ${t.statusCode}${r}`);
}
function io(e, t) {
  const r = JSON.stringify(t);
  return new Promise((s, i) => {
    const n = xl({ socketPath: e.discovery.socketPath, path: "/", method: "POST", headers: { authorization: `Bearer ${e.discovery.token}`, "content-type": "application/json", "content-length": Buffer.byteLength(r) } }, (a) => {
      const o = [];
      a.on("data", (l) => {
        const c = Buffer.isBuffer(l) ? l : Buffer.from(l);
        o.push(c);
      }), a.on("error", i), a.on("end", () => {
        let l;
        try {
          l = JSON.parse(Buffer.concat(o).toString("utf8"));
        } catch {
          i(new Error(`${e.label} desktop bridge returned invalid JSON`));
          return;
        }
        s({ statusCode: a.statusCode ?? 500, body: l });
      });
    });
    n.setTimeout(oo, () => {
      n.destroy(new Error(`${e.label} desktop bridge request timed out`));
    }), n.on("error", i), n.end(r);
  });
}
async function jl() {
  try {
    return (await R1()).length > 0;
  } catch {
    return false;
  }
}
async function R1() {
  const e = dl({ homeDir: Il(), envOverride: process.env.CURSOR_DESKTOP_BRIDGE_DIR });
  let t;
  try {
    t = await Ll(e, { withFileTypes: true });
  } catch (i) {
    if (to(i) === "ENOENT") return [];
    throw i;
  }
  const r = t.filter((i) => i.isFile() && i.name.endsWith(".json"));
  return (await ro(r, x1, async (i) => {
    const n = Nl(e, i.name);
    try {
      const a = JSON.parse(await Rl(n, "utf8")), o = pl(a);
      return !o || o.protocolVersion !== Bn || !Ml(o.pid) ? void 0 : { discovery: o, label: `${o.appName} ${o.appVersion}` };
    } catch {
      return;
    }
  })).filter((i) => i !== void 0);
}
async function Wl(e) {
  const t = await io(e, { type: "listThreads" });
  if (t.statusCode !== 200) throw so(e, t);
  const r = Fl(t.body);
  if (!r) throw new Error(`${e.label} desktop bridge returned invalid threads`);
  return r.threads.map((s) => ({ ...s, instance: e }));
}
async function no(e) {
  const t = await ro(e, x1, async (s) => {
    try {
      return { status: "success", threads: await Wl(s) };
    } catch {
      return { status: "failure", instanceLabel: s.label };
    }
  }), r = t.flatMap((s) => s.status === "failure" ? [s.instanceLabel] : []);
  if (e.length > 0 && r.length === e.length) throw new Error(`all desktop instances failed to list threads: ${r.join(", ")}`);
  return t.flatMap((s) => s.status === "success" ? s.threads : []).sort((s, i) => i.lastUpdatedAt - s.lastUpdatedAt).slice(0, Vn);
}
function Ul(e) {
  return e.reduce((t, r) => r.lastUpdatedAt > t.lastUpdatedAt ? r : t);
}
function ql(e) {
  const t = e.trim();
  return Un(t) ? t.toLowerCase() : t;
}
function Bl(e, t) {
  const r = t;
  return e.map((s) => ({ id: r, title: r, source: "local", status: "idle", lastUpdatedAt: 0, windowId: 0, instance: s }));
}
async function Vl(e, t) {
  const r = ql(t);
  if (r.length === 0) throw new ur(r);
  const s = await no(e), i = s.filter((a) => a.id === r);
  if (i.length >= 1) return [Ul(i)];
  const n = s.filter((a) => a.id.startsWith(r));
  if (n.length === 1) return [n[0]];
  if (n.length > 1) throw new I1(r, n);
  if (Un(r)) return Bl(e, r);
  throw new ur(r);
}
async function zl(e, t, r) {
  const s = await io(e.instance, { type: "sendMessage", threadId: e.id, text: t, force: r.force }), i = $l(s.body);
  if (s.statusCode !== 200) {
    if (i?.status === "error") return i;
    throw so(e.instance, s);
  }
  if (!i) throw new Error(`${e.instance.label} desktop bridge returned an invalid send result`);
  return i;
}
async function Gl(e, t, r, s = zl) {
  if (e.length === 0) throw new Error("Failed to send to any desktop instance");
  let i = e[0], n, a;
  const o = (l) => {
    switch (l.status) {
      case "submitted":
      case "queued":
      case "timeout":
        return 4;
      case "not-sendable":
      case "error":
        return 3;
      case "unknown-thread":
        return 1;
      default:
        return 0;
    }
  };
  for (const l of e) try {
    const c = await s(l, t, { force: r.force });
    if (i = l, c.status === "submitted" || c.status === "queued" || c.status === "timeout") {
      n = c;
      break;
    }
    if ((!n || o(c) >= o(n)) && (n = c), c.status === "not-sendable" || c.status === "error" || e.length === 1) break;
  } catch (c) {
    if (a = c, n = void 0, e.length === 1) throw c;
    continue;
  }
  if (!n) throw a ?? new Error("Failed to send to any desktop instance");
  return { thread: i, response: n };
}
var x1, oo, ur, I1, Hl = E({ "desktopBridgeCliClient.js"() {
  "use strict";
  w(), Ol(), x1 = 4, oo = 1e4, ur = class extends Error {
    constructor(e) {
      super(`Unknown desktop thread ref "${e}"`), this.name = "UnknownThreadRefError", this.ref = e;
    }
  }, I1 = class extends Error {
    constructor(e, t) {
      super(`Desktop thread ref "${e}" is ambiguous`), this.name = "AmbiguousThreadRefError", this.ref = e, this.candidates = [...t];
    }
  };
} });
function Ze(e) {
  process.stdout.write(`${e}
`);
}
function hr(e) {
  process.stderr.write(`${e}
`);
}
function ge(e, t) {
  e ? Ze(JSON.stringify({ status: "error", message: t }, null, 2)) : hr(`error: ${t}`), process.exitCode = 1;
}
function Kl(e) {
  const t = /\x1B(?:\][^\u0007\x1B]*(?:\u0007|\x1B\\)|\[[0-?]*[ -/]*[@-~]|[@-Z\\-_])/g;
  return e.replace(t, "").replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}
function Jl(e, t) {
  const r = e.map((n, a) => {
    let o = n.length;
    for (const l of t) o = Math.max(o, (l[a] ?? "").length);
    return o;
  }), s = (n, a) => `${n}${" ".repeat(Math.max(0, a - n.length))}`, i = (n) => n.map((a, o) => s(a, r[o])).join("  ").trimEnd();
  return [i(e), ...t.map(i)].join(`
`);
}
function Ql(e) {
  const { instance: t, ...r } = e;
  return { ...r, instance: { label: t.label, appName: t.discovery.appName, appVersion: t.discovery.appVersion, userDataDir: t.discovery.userDataDir } };
}
function Yl(e) {
  return Jl(["THREAD ID", "TITLE", "SOURCE", "STATUS", "WHERE"], e.map((t) => [t.id, Kl(t.title || "(untitled)"), t.source, t.status, t.instance.label]));
}
function ao(e) {
  if (e instanceof ur) return `thread ref ${JSON.stringify(e.ref)} was not found`;
  if (e instanceof I1) {
    const t = e.candidates.map((r) => `${r.id} ${JSON.stringify(r.title)}`).join(", ");
    return `thread ref ${JSON.stringify(e.ref)} is ambiguous: ${t}`;
  }
  return e instanceof Error ? e.message : String(e);
}
function Zl(e, t, r) {
  switch (t.status) {
    case "submitted": {
      const s = r && e.status === "running" ? " (interrupted running turn)" : "";
      Ze(`Submitted to ${JSON.stringify(t.threadTitle)} (${t.threadId})${s}`);
      return;
    }
    case "queued":
      Ze(`Queued in ${JSON.stringify(t.threadTitle)} (agent is running; will submit when the current turn ends)`);
      return;
    case "unknown-thread":
      ge(false, `thread ${JSON.stringify(e.id)} is no longer available`);
      return;
    case "timeout":
      ge(false, "desktop did not confirm the message before timeout; it may have been submitted");
      return;
    case "not-sendable":
      ge(false, `thread ${JSON.stringify(e.title)} is not sendable: ${t.reason}`);
      return;
    case "error":
      ge(false, t.message);
      return;
    default: {
      const s = t;
      throw new Error(`Unhandled desktop send result: ${String(s)}`);
    }
  }
}
async function Xl(e) {
  try {
    const t = await R1();
    if (t.length === 0) {
      ge(e.json, "no running Cursor desktop instance found (is the app open?)");
      return;
    }
    const r = await no(t);
    if (e.json) {
      Ze(JSON.stringify(r.map(Ql), null, 2));
      return;
    }
    const s = `${r.length} thread${r.length === 1 ? "" : "s"} across ${t.length} running Cursor instance${t.length === 1 ? "" : "s"}`;
    Ze(`${Yl(r)}
${s}`);
  } catch (t) {
    ge(e.json, ao(t));
  }
}
async function e0() {
  const e = [];
  for await (const t of process.stdin) e.push(Buffer.isBuffer(t) ? t : Buffer.from(t));
  return Buffer.concat(e).toString("utf8");
}
async function t0(e, t, r) {
  try {
    const s = r.stdin ? await e0() : t.join(" ");
    if (s.length === 0) {
      ge(r.json, "message text is empty (provide text or use --stdin)");
      return;
    }
    const i = await R1();
    if (i.length === 0) {
      ge(r.json, "no running Cursor desktop instance found (is the app open?)");
      return;
    }
    const n = await Vl(i, e), { thread: a, response: o } = await Gl(n, s, { force: r.force });
    if (r.json) {
      Ze(JSON.stringify(o, null, 2)), o.status !== "submitted" && o.status !== "queued" && (process.exitCode = 1);
      return;
    }
    Zl(a, o, r.force);
  } catch (s) {
    ge(r.json, ao(s));
  }
}
async function r0(e) {
  return e.isDevBuild ? true : jl();
}
async function s0(e) {
  const [t, ...r] = e._;
  if (e.help || t === void 0) {
    Ze(N1), t === void 0 && !e.help && (process.exitCode = 1);
    return;
  }
  switch (t) {
    case "ls":
      await Xl({ json: e.json === true });
      return;
    case "send": {
      const [s, ...i] = r;
      if (s === void 0) {
        ge(e.json === true, "missing required argument 'thread' (a thread id from `cursor desktop ls`, or a unique prefix of one)");
        return;
      }
      await t0(s, i, { force: e.force === true, stdin: e.stdin === true, json: e.json === true });
      return;
    }
    default:
      if (e.json === true) {
        ge(true, `unknown desktop command '${t}'`);
        return;
      }
      hr(`error: unknown desktop command '${t}'`), hr(""), hr(N1), process.exitCode = 1;
  }
}
var N1, i0 = E({ "cliDesktopBridge.js"() {
  "use strict";
  w(), Hl(), N1 = ["Usage: cursor desktop <command>", "", "Interact with chat threads in a running Cursor desktop app.", "", "Commands", "  ls                                List threads live in running desktop instances", "  send <thread> [text...]           Send a message to a live desktop thread", "", "Options", "  --json                            Machine-readable output", "  --force                           (send) Submit immediately, interrupting a running turn", "  --stdin                           (send) Read message text from stdin", "  -h --help                         Print usage", "", "<thread> is a thread id from `cursor desktop ls`, or a unique prefix of one."].join(`
`);
} });
import { exec as lo } from "child_process";
function n0(e) {
  const t = e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return co[t] || t;
}
async function o0(e) {
  let t;
  const r = process.env.VSCODE_CLI_ENCODING;
  r ? (e && console.log(`Found VSCODE_CLI_ENCODING variable: ${r}`), t = Promise.resolve(r)) : V ? t = new Promise((i) => {
    e && console.log('Running "chcp" to detect terminal encoding...'), lo("chcp", (n, a, o) => {
      if (a) {
        e && console.log(`Output from "chcp" command is: ${a}`);
        const l = Object.keys(M1);
        for (const c of l) if (a.indexOf(c) >= 0) return i(M1[c]);
      }
      return i(void 0);
    });
  }) : t = new Promise((i) => {
    e && console.log('Running "locale charmap" to detect terminal encoding...'), lo("locale charmap", (n, a, o) => i(a));
  });
  const s = await t;
  return e && console.log(`Detected raw terminal encoding: ${s}`), !s || s.toLowerCase() === "utf-8" || s.toLowerCase() === F1 ? F1 : n0(s);
}
var M1, co, F1, a0 = E({ "terminalEncoding.js"() {
  "use strict";
  w(), X(), M1 = { 437: "cp437", 850: "cp850", 852: "cp852", 855: "cp855", 857: "cp857", 860: "cp860", 861: "cp861", 863: "cp863", 865: "cp865", 866: "cp866", 869: "cp869", 936: "cp936", 1252: "cp1252" }, co = { ibm866: "cp866", big5: "cp950" }, F1 = "utf8";
} });
import * as fr from "fs";
import { tmpdir as l0 } from "os";
function c0() {
  try {
    return !process.stdin.isTTY;
  } catch {
  }
  return false;
}
function u0(e) {
  return new Promise((t) => {
    const r = () => t(true);
    setTimeout(() => {
      process.stdin.removeListener("data", r), t(false);
    }, e), process.stdin.once("data", r);
  });
}
function h0() {
  return Et(l0(), "code-stdin", 3);
}
async function f0(e) {
  await fr.promises.appendFile(e, ""), await fr.promises.chmod(e, 384);
}
async function d0(e, t, r) {
  let [s, i] = await Promise.all([o0(t), import("@vscode/iconv-lite-umd"), f0(e)]);
  i.default.encodingExists(s) || (console.log(`Unsupported terminal encoding: ${s}, falling back to UTF-8.`), s = "utf8");
  const n = new u1(), a = i.default.getDecoder(s);
  process.stdin.on("data", (o) => {
    const l = a.write(o);
    n.queue(() => fr.promises.appendFile(e, l));
  }), process.stdin.on("end", () => {
    const o = a.end();
    n.queue(async () => {
      try {
        typeof o == "string" && await fr.promises.appendFile(e, o);
      } finally {
        r?.();
      }
    });
  });
}
var p0 = E({ "stdin.js"() {
  "use strict";
  w(), St(), Je(), a0();
} });
import { writeFileSync as m0 } from "fs";
import { tmpdir as g0 } from "os";
function _0(e) {
  const t = Et(g0());
  try {
    return m0(t, ""), e && console.log(`Marker file for --wait created: ${t}`), t;
  } catch (r) {
    e && console.error(`Failed to create marker file for --wait: ${r}`);
    return;
  }
}
var y0 = E({ "wait.js"() {
  "use strict";
  w(), Je();
} }), re, dr, se, v0 = E({ "product.js"() {
  "use strict";
  if (w(), Hr(), dr = globalThis.vscode, typeof dr < "u" && typeof dr.context < "u") {
    const e = dr.context.configuration();
    if (e) re = e.product;
    else throw new Error("Sandbox: unable to resolve product configuration from preload script.");
  } else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
    if (re = globalThis._VSCODE_PRODUCT_JSON, Kt.VSCODE_DEV, Kt.VSCODE_DEV_ONBOARDING && Object.assign(re, { nameShort: `${re.nameShort} Onboarding`, nameLong: `${re.nameLong} Onboarding`, dataFolderName: `${re.dataFolderName}-onboarding`, serverDataFolderName: re.serverDataFolderName ? `${re.serverDataFolderName}-onboarding` : void 0 }), !re.version) {
      const e = globalThis._VSCODE_PACKAGE_JSON;
      Object.assign(re, { version: e.version });
    }
  } else re = {}, Object.keys(re).length === 0 && Object.assign(re, { version: "1.94.0-dev", nameShort: "Cursor Dev", nameLong: "Cursor Dev", applicationName: "cursor", dataFolderName: ".cursor", urlProtocol: "cursor", reportIssueUrl: "https://github.com/getcursor/cursor/issues/new", licenseName: "MIT", licenseUrl: "https://github.com/getcursor/cursor/", serverLicenseUrl: "https://github.com/getcursor/cursor/" });
  se = re;
} }), w0, $1, b0 = E({ "profiling.js"() {
  "use strict";
  w(), le(), Sn(), w0 = D1("IV8InspectProfilingService"), ((e) => {
    function t(i) {
      return !!(i.samples && i.timeDeltas);
    }
    e.isValidProfile = t;
    function r(i, n = "noAbsolutePaths") {
      for (const a of i.nodes) a.callFrame && a.callFrame.url && (ze(a.callFrame.url) || /^\w[\w\d+.-]*:\/\/\/?/.test(a.callFrame.url)) && (a.callFrame.url = Q(n, st(a.callFrame.url)));
      return i;
    }
    e.rewriteAbsolutePaths = r;
    function s(i, n = "noAbsolutePaths") {
      const a = (o) => {
        o.callFrame.url && (ze(o.callFrame.url) || /^\w[\w\d+.-]*:\/\/\/?/.test(o.callFrame.url)) && (o.callFrame.url = Q(n, st(o.callFrame.url)));
        for (const l of o.children) a(l);
      };
      return a(i.head), i;
    }
    e.rewriteAbsolutePathsInHeapProfile = s;
  })($1 || ($1 = {}));
} });
function C0() {
  return process.uncHostAllowlist;
}
function uo(e) {
  if (process.platform !== "win32") return;
  const t = C0();
  if (t) if (typeof e == "string") t.add(e.toLowerCase());
  else for (const r of E0(e)) uo(r);
}
function E0(e) {
  const t = /* @__PURE__ */ new Set();
  if (Array.isArray(e)) for (const r of e) typeof r == "string" && t.add(r);
  return Array.from(t);
}
var S0 = E({ "unc.js"() {
  "use strict";
  w();
} }), ho = {};
xo(ho, { main: () => go });
import { spawn as pr } from "child_process";
import { chmodSync as fo, existsSync as j1, readFileSync as po, statSync as mr, truncateSync as A0, unlinkSync as mo } from "fs";
import { homedir as k0, tmpdir as P0 } from "os";
function D0(e) {
  return !!e["install-source"] || !!e["list-extensions"] || !!e["install-extension"] || !!e["uninstall-extension"] || !!e["update-extensions"] || !!e["locate-extension"] || !!e["add-mcp"] || !!e.telemetry;
}
async function go(e) {
  let t;
  try {
    t = ul(e) && await r0({ isDevBuild: !!process.env.VSCODE_DEV }) ? hl(e) : cl(e);
  } catch (r) {
    console.error(r.message);
    return;
  }
  for (const r of ar) if (t[r]) {
    if (!se.tunnelApplicationName) {
      console.error(`'${r}' command not supported in ${se.applicationName}`);
      return;
    }
    const s = { ...process.env };
    delete s.ELECTRON_RUN_AS_NODE;
    const i = e.slice(e.indexOf(r) + 1);
    return new Promise((n, a) => {
      let o;
      const l = ["ignore", "pipe", "pipe"];
      if (process.env.VSCODE_DEV) o = pr("cargo", ["run", "--", r, ...i], { cwd: Q(_o(), "cli"), stdio: l, env: s });
      else {
        const c = process.platform === "darwin" ? Q(Ne(Ne(process.execPath)), "Resources", "app") : V ? Q(Ne(process.execPath), "resources", "app") : Ne(process.execPath), h = Q(c, "bin", `${se.tunnelApplicationName}${V ? ".exe" : ""}`);
        o = pr(h, [r, ...i], { cwd: rt(), stdio: l, env: s });
      }
      o.stdout.pipe(process.stdout), o.stderr.pipe(process.stderr), o.on("exit", n), o.on("error", a);
    });
  }
  if (t.desktop) return s0(t.desktop);
  if (t.help) {
    const r = `${se.applicationName}${V ? ".exe" : ""}`, s = se.nameLong.startsWith("Cursor") ? el(!!process.env.VSCODE_DEV) : Ot;
    console.log(il(se.nameLong, r, se.version, s));
  } else if (t.version) console.log(nl(se.version, se.commit));
  else if (t["locate-shell-integration-path"]) {
    let r;
    switch (t["locate-shell-integration-path"]) {
      case "bash":
        r = "shellIntegration-bash.sh";
        break;
      case "pwsh":
        r = "shellIntegration.ps1";
        break;
      case "zsh":
        r = "shellIntegration-rc.zsh";
        break;
      case "fish":
        r = "shellIntegration.fish";
        break;
      default:
        throw new Error("Error using --locate-shell-integration-path: Invalid shell type");
    }
    console.log(Q(_o(), "out", "vs", "workbench", "contrib", "terminal", "common", "scripts", r));
  } else if (D0(t)) {
    let r;
    process.env.VSCODE_DEV ? r = "./cliProcessMain.js" : r = "./vs/code/node/cliProcessMain.js", await (await import(r)).main(t);
    return;
  } else if (t["file-write"]) {
    const r = t._[0];
    if (!r || !ze(r) || !j1(r) || !mr(r).isFile()) throw new Error("Using --file-write with invalid arguments.");
    let s, i;
    try {
      const n = JSON.parse(po(r, "utf8"));
      s = n.source, i = n.target;
    } catch {
      throw new Error("Using --file-write with invalid arguments.");
    }
    if (V) for (const n of [s, i]) typeof n == "string" && Oa(n) && uo(Y.file(n).authority);
    if (!s || !i || s === i || !ze(s) || !ze(i) || !j1(s) || !mr(s).isFile() || !j1(i) || !mr(i).isFile()) throw new Error("Using --file-write with invalid arguments.");
    try {
      let n = 0, a = false;
      t["file-chmod"] && (n = mr(i).mode, n & 128 || (fo(i, n | 128), a = true));
      const o = po(s);
      V ? (A0(i, 0), nt(i, o, { flag: "r+" })) : nt(i, o), a && fo(i, n);
    } catch (n) {
      throw n.message = `Error using --file-write: ${n.message}`, n;
    }
  } else {
    const r = { ...process.env, ELECTRON_NO_ATTACH_CONSOLE: "1" };
    delete r.ELECTRON_RUN_AS_NODE;
    const s = [];
    t.verbose && (r.ELECTRON_ENABLE_LOGGING = "1"), (t.verbose || t.status) && s.push(async (c) => {
      c.stdout?.on("data", (h) => console.log(h.toString("utf8").trim())), c.stderr?.on("data", (h) => console.log(h.toString("utf8").trim())), await oe.toPromise(oe.fromNodeEventEmitter(c, "exit"));
    });
    const i = t._.some((c) => c === "-");
    i && (t._ = t._.filter((c) => c !== "-"), e = e.filter((c) => c !== "-"));
    let n;
    if (c0()) if (i) {
      n = h0();
      try {
        const c = new d1();
        await d0(n, !!t.verbose, () => c.complete()), t.wait || s.push(() => c.p), je(e, n), je(e, "--skip-add-to-recently-opened"), console.log(`Reading from stdin via: ${n}`);
      } catch (c) {
        console.log(`Failed to create file to read via stdin: ${c.toString()}`), n = void 0;
      }
    } else s.push((c) => u0(1e3).then((h) => {
      h && console.log(V ? `Run with '${se.applicationName} -' to read output from another program (e.g. 'echo Hello World | ${se.applicationName} -').` : `Run with '${se.applicationName} -' to read from stdin (e.g. 'ps aux | grep code | ${se.applicationName} -').`);
    }));
    let a;
    if (t.wait && (a = _0(t.verbose), a && je(e, "--waitMarkerFilePath", a), s.push(async (c) => {
      let h;
      xe ? h = new Promise((u) => {
        c.on("exit", (f, d) => {
          (f !== 0 || d) && u();
        });
      }) : h = oe.toPromise(oe.fromNodeEventEmitter(c, "exit"));
      try {
        await Promise.race([Zi(a), oe.toPromise(oe.fromNodeEventEmitter(c, "error")), h]);
      } finally {
        n && mo(n);
      }
    })), t["prof-startup"]) {
      const c = "127.0.0.1", h = await v1(ya(), 10, 3e3), u = await v1(h + 1, 10, 3e3), f = await v1(u + 1, 10, 3e3);
      if (h * u * f === 0) throw new Error("Failed to find free ports for profiler. Make sure to shutdown all instances of the editor first.");
      const d = Et(k0(), "prof");
      je(e, `--inspect-brk=${h}`), je(e, `--remote-debugging-port=${u}`), je(e, `--inspect-brk-extensions=${f}`), je(e, "--prof-startup-prefix", d), je(e, "--no-cached-data"), nt(d, e.slice(-6).join("|")), s.push(async (m) => {
        const k = (x) => x.find((O) => O.webSocketDebuggerUrl ? O.type === "page" ? O.url.indexOf("bootstrap/index.html") > 0 : true : false), D = async (x, O, Z) => {
          const C = (await import("chrome-remote-interface")).default;
          let _;
          for (let T = 0; T < O; T++) try {
            return await C({ host: c, port: x, local: true, target: (I) => {
              const A = Z(I);
              if (!A) throw Object.assign(new Error("no target"), { code: "ECONNREFUSED" });
              return A;
            } });
          } catch (I) {
            _ = I, await new Promise((A) => setTimeout(A, 50));
          }
          throw _ instanceof Error ? _ : new Error("failed to connect");
        };
        class P {
          static async start(O, Z, C) {
            let _;
            try {
              _ = await D(C.port, C.tries ?? 10, C.target ?? k), await _.Runtime.runIfWaitingForDebugger(), await _.Profiler.enable(), await _.Profiler.setSamplingInterval({ interval: 100 }), await _.Profiler.start();
            } catch {
              console.error(`FAILED to start profiling for '${O}' on port '${C.port}'`), _ && (await _.close().catch(() => {
              }), _ = void 0);
            }
            return { async stop() {
              if (!_) return;
              let T;
              try {
                T = (await _.Profiler.stop()).profile;
              } finally {
                await _.close().catch(() => {
                });
              }
              let I = "";
              process.env.VSCODE_DEV || (T = $1.rewriteAbsolutePaths(T, "piiRemoved"), I = ".txt"), nt(`${Z}.${O}.cpuprofile${I}`, JSON.stringify(T, void 0, 4));
            } };
          }
        }
        try {
          const x = P.start("main", d, { port: h }), O = P.start("extHost", d, { port: f, tries: 300 }), Z = P.start("renderer", d, { port: u, tries: 200, target: function(I) {
            return I.filter((A) => A.webSocketDebuggerUrl ? A.type === "page" ? A.url.indexOf("workbench/workbench.html") > 0 || A.url.indexOf("workbench/workbench-dev.html") > 0 : true : false)[0];
          } }), C = await x, _ = await O, T = await Z;
          await Zi(d), await C.stop(), await T.stop(), await _.stop(), nt(d, "");
        } catch {
          console.error("Failed to profile startup. Make sure to quit Code first.");
        }
      });
    }
    const o = { detached: true, env: r };
    t.verbose || (o.stdio = "ignore");
    let l;
    if (!xe) !t.verbose && t.status && (o.stdio = ["ignore", "pipe", "ignore"]), l = pr(process.execPath, e.slice(2), o);
    else {
      const c = ["-n", "-g"];
      if (c.push("-a", process.execPath), t.verbose || t.status) {
        c.push("--wait-apps");
        for (const h of t.verbose ? ["stdout", "stderr"] : ["stdout"]) {
          const u = Et(P0(), `code-${h}`);
          nt(u, ""), c.push(`--${h}`, u), s.push(async (f) => {
            try {
              const d = h === "stdout" ? process.stdout : process.stderr, m = new it();
              f.on("close", () => {
                setTimeout(() => m.dispose(true), 200);
              }), await Y2(u, (k) => d.write(k), () => {
              }, m.token);
            } finally {
              mo(u);
            }
          });
        }
      }
      for (const h in r) h !== "_" && (c.push("--env"), c.push(`${h}=${r[h]}`));
      if (c.push("--args", ...e.slice(2)), r.VSCODE_DEV) {
        const u = c.indexOf(".");
        u !== -1 && (c[u] = Qr("."));
      }
      l = pr("open", c, { ...o, env: {} });
    }
    return Promise.all(s.map((c) => c(l)));
  }
}
function _o() {
  return Ne(Mi.asFileUri("").fsPath);
}
function yo(e) {
  setTimeout(() => process.exit(e), 0);
}
var T0 = E({ "cli.js"() {
  "use strict";
  w(), Br(), le(), X(), va(), y1(), E2(), Z2(), $n(), fl(), i0(), p0(), y0(), v0(), Zt(), Je(), b0(), tr(), Hr(), S0(), Ye(), St(), go(process.argv).then(() => yo(typeof process.exitCode == "number" ? process.exitCode : 0)).then(null, (e) => {
    console.error(e.message || e.stack || e), yo(1);
  });
} });
w(), w(), delete process.env.VSCODE_CWD;
import { dirname as O0 } from "path";
import { fileURLToPath as L0 } from "url";
w();
import * as ue from "path";
import * as vo from "fs";
import { fileURLToPath as R0 } from "url";
import { createRequire as x0 } from "node:module";
var bc = x0(import.meta.url), I0 = ue.dirname(R0(import.meta.url)), Cc = process.platform === "win32";
if (Error.stackTraceLimit = 100, process.platform === "linux" && (Buffer.poolSize = 8 * 1024), !process.env.VSCODE_HANDLES_SIGPIPE) {
  let e = false;
  process.on("SIGPIPE", () => {
    e || (e = true, console.error(new Error("Unexpected SIGPIPE")));
  });
}
function N0() {
  try {
    typeof process.env.VSCODE_CWD != "string" && (process.env.VSCODE_CWD = process.cwd()), process.platform === "win32" && process.chdir(ue.dirname(process.execPath));
  } catch (e) {
    console.error(e);
  }
}
N0();
function M0(e) {
  const t = ue.dirname(I0);
  function r() {
    return process.env.VSCODE_DEV ? t : process.platform === "darwin" ? ue.dirname(ue.dirname(ue.dirname(t))) : ue.dirname(ue.dirname(t));
  }
  function s() {
    if (process.env.VSCODE_PORTABLE) return process.env.VSCODE_PORTABLE;
    if (process.platform === "win32" || process.platform === "linux") return ue.join(r(), "data");
    const l = e.portable || `${e.applicationName}-portable-data`;
    return ue.join(ue.dirname(r()), l);
  }
  const i = s(), n = !("target" in e) && vo.existsSync(i), a = ue.join(i, "tmp"), o = n && vo.existsSync(a);
  return n ? process.env.VSCODE_PORTABLE = i : delete process.env.VSCODE_PORTABLE, o && (process.platform === "win32" ? (process.env.TMP = a, process.env.TEMP = a) : process.env.TMPDIR = a), { portableDataPath: i, isPortable: n };
}
w();
import * as F0 from "path";
import * as W1 from "fs";
import { fileURLToPath as $0 } from "url";
import { createRequire as j0, register as W0 } from "node:module";
w();
import { createRequire as U0 } from "node:module";
var U1 = U0(import.meta.url), lt = { BUILD_INSERT_PRODUCT_CONFIGURATION: "BUILD_INSERT_PRODUCT_CONFIGURATION" };
lt.BUILD_INSERT_PRODUCT_CONFIGURATION && (lt = U1("../product.json"));
var q1 = { "name": "Cursor", "version": "3.24.18", "distro": "d5c0e77a0214208f36b56d42e8e787de88d02ea4", "author": { "name": "Anysphere, Inc." }, "packageManager": "pnpm@10.33.4", "pnpm": { "supportedArchitectures": { "os": ["current"], "cpu": ["current", "x64", "arm64"], "libc": ["current", "glibc", "musl"] } }, "main": "./out/main.js", "type": "module", "private": true, "repository": { "type": "git", "url": "https://github.com/microsoft/vscode.git" }, "bugs": { "url": "https://github.com/microsoft/vscode/issues" } };
q1.BUILD_INSERT_PACKAGE_CONFIGURATION && (q1 = U1("../package.json"));
var B1 = lt, q0 = q1;
if (!("commit" in lt) || lt.commit === void 0) try {
  const { execSync: e } = U1("child_process"), t = process.cwd(), r = e("git rev-parse HEAD", { cwd: t, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  r && (lt.devCommit = r);
} catch {
}
w();
function V1(e) {
  const t = [];
  typeof e == "number" && t.push("code/timeOrigin", e);
  function r(n, a) {
    t.push(n, a?.startTime ?? Date.now());
  }
  function s() {
    const n = [];
    for (let a = 0; a < t.length; a += 2) n.push({ name: t[a], startTime: t[a + 1] });
    return n;
  }
  function i(n) {
    for (let a = t.length - 2; a >= 0; a -= 2) t[a] === n && t.splice(a, 2);
  }
  return { mark: r, getMarks: s, clearMarks: i };
}
function B0() {
  if (typeof performance == "object" && typeof performance.mark == "function" && !performance.nodeTiming) {
    if (typeof performance.timeOrigin != "number" && !performance.timing) return V1();
    {
      const e = /* @__PURE__ */ new Map();
      return { mark(t, r) {
        if (!e.has(t)) {
          const [s] = performance.getEntriesByName(t, "mark");
          s && e.set(t, s.startTime);
        }
        e.has(t) && performance.clearMarks(t), performance.mark(t, r);
      }, clearMarks(t) {
        e.delete(t), performance.clearMarks(t);
      }, getMarks() {
        let t = performance.timeOrigin;
        typeof t != "number" && (t = performance.timing.navigationStart || performance.timing.redirectStart || performance.timing.fetchStart);
        const r = [];
        for (const [i, n] of e) r.push({ name: i, startTime: n });
        for (const i of performance.getEntriesByType("mark")) r.push({ name: i.name, startTime: i.startTime });
        r.sort((i, n) => i.startTime - n.startTime);
        const s = [{ name: "code/timeOrigin", startTime: Math.round(t) }];
        for (const i of r) s.push({ name: i.name, startTime: Math.round(t + i.startTime) });
        return s;
      } };
    }
  } else if (typeof process == "object") {
    const e = performance?.timeOrigin;
    return V1(e);
  } else return console.trace("perf-util loaded in UNKNOWN environment"), V1();
}
function V0(e) {
  return e.MonacoPerformanceMarks || (e.MonacoPerformanceMarks = B0()), e.MonacoPerformanceMarks;
}
var z1 = V0(globalThis), ct = z1.mark, kc = z1.getMarks, Pc = z1.clearMarks, z0 = j0(import.meta.url), G0 = F0.dirname($0(import.meta.url));
if ((process.env.ELECTRON_RUN_AS_NODE || process.versions.electron) && W0(`data:text/javascript;base64,${Buffer.from(`
	export async function resolve(specifier, context, nextResolve) {
		if (specifier === 'fs') {
			return {
				format: 'builtin',
				shortCircuit: true,
				url: 'node:original-fs'
			};
		}

		// Defer to the next hook in the chain, which would be the
		// Node.js default resolve if this is the last user-specified loader.
		return nextResolve(specifier, context);
	}`).toString("base64")}`, import.meta.url), globalThis._VSCODE_PRODUCT_JSON = { ...B1 }, process.env.VSCODE_DEV) try {
  const e = z0("../product.overrides.json");
  globalThis._VSCODE_PRODUCT_JSON = Object.assign(globalThis._VSCODE_PRODUCT_JSON, e);
} catch {
}
globalThis._VSCODE_PACKAGE_JSON = { ...q0 }, globalThis._VSCODE_FILE_ROOT = G0;
var G1 = void 0;
function H0() {
  return G1 || (G1 = K0()), G1;
}
async function K0() {
  ct("code/willLoadNls");
  let e, t;
  if (process.env.VSCODE_NLS_CONFIG) try {
    e = JSON.parse(process.env.VSCODE_NLS_CONFIG), e?.languagePack?.messagesFile ? t = e.languagePack.messagesFile : e?.defaultMessagesFile && (t = e.defaultMessagesFile), globalThis._VSCODE_NLS_LANGUAGE = e?.resolvedLanguage;
  } catch (r) {
    console.error(`Error reading VSCODE_NLS_CONFIG from environment: ${r}`);
  }
  if (!(process.env.VSCODE_DEV || !t)) {
    try {
      globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await W1.promises.readFile(t)).toString());
    } catch (r) {
      if (console.error(`Error reading NLS messages file ${t}: ${r}`), e?.languagePack?.corruptMarkerFile) try {
        await W1.promises.writeFile(e.languagePack.corruptMarkerFile, "corrupted");
      } catch (s) {
        console.error(`Error writing corrupted NLS marker file: ${s}`);
      }
      if (e?.defaultMessagesFile && e.defaultMessagesFile !== t) try {
        globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await W1.promises.readFile(e.defaultMessagesFile)).toString());
      } catch (s) {
        console.error(`Error reading default NLS messages file ${e.defaultMessagesFile}: ${s}`);
      }
    }
    return ct("code/didLoadNls"), e;
  }
}
async function J0() {
  await H0();
}
w();
import * as Ee from "path";
import * as Se from "fs";
async function Q0({ userLocale: e, osLocale: t, userDataPath: r, commit: s, nlsMetadataPath: i }) {
  if (ct("code/willGenerateNls"), process.env.VSCODE_DEV || e === "pseudo" || e.startsWith("en") || !s || !r) return Lt(e, t, i);
  try {
    const n = await Y0(r);
    if (!n) return Lt(e, t, i);
    const a = Z0(n, e);
    if (!a) return Lt(e, t, i);
    const o = n[a], l = o?.translations?.vscode;
    if (!o || typeof o.hash != "string" || !o.translations || typeof l != "string" || !await H1(l)) return Lt(e, t, i);
    const c = `${o.hash}.${a}`, h = Ee.join(r, "clp", c), u = Ee.join(h, s), f = Ee.join(u, "nls.messages.json"), d = Ee.join(h, "tcf.json"), m = Ee.join(h, "corrupted.info");
    await H1(m) && await Se.promises.rm(h, { recursive: true, force: true, maxRetries: 3 });
    const k = { userLocale: e, osLocale: t, resolvedLanguage: a, defaultMessagesFile: Ee.join(i, "nls.messages.json"), languagePack: { translationsConfigFile: d, messagesFile: f, corruptMarkerFile: m }, locale: e, availableLanguages: { "*": a }, _languagePackId: c, _languagePackSupport: true, _translationsConfigFile: d, _cacheRoot: h, _resolvedLanguagePackCoreLocation: u, _corruptedFile: m };
    if (await H1(u)) return X0(u).catch(() => {
    }), ct("code/didGenerateNls"), k;
    const [, D, P, x] = await Promise.all([Se.promises.mkdir(u, { recursive: true }), JSON.parse(await Se.promises.readFile(Ee.join(i, "nls.keys.json"), "utf-8")), JSON.parse(await Se.promises.readFile(Ee.join(i, "nls.messages.json"), "utf-8")), JSON.parse(await Se.promises.readFile(l, "utf-8"))]), O = [];
    let Z = 0;
    for (const [C, _] of D) {
      const T = x.contents[C];
      for (const I of _) O.push(T?.[I] || P[Z]), Z++;
    }
    return await Promise.all([Se.promises.writeFile(f, JSON.stringify(O), "utf-8"), Se.promises.writeFile(d, JSON.stringify(o.translations), "utf-8")]), ct("code/didGenerateNls"), k;
  } catch (n) {
    console.error("Generating translation files failed.", n);
  }
  return Lt(e, t, i);
}
async function Y0(e) {
  const t = Ee.join(e, "languagepacks.json");
  try {
    return JSON.parse(await Se.promises.readFile(t, "utf-8"));
  } catch {
    return;
  }
}
function Z0(e, t) {
  try {
    for (; t; ) {
      if (e[t]) return t;
      const r = t.lastIndexOf("-");
      if (r > 0) t = t.substring(0, r);
      else return;
    }
  } catch (r) {
    console.error("Resolving language pack configuration failed.", r);
  }
}
function Lt(e, t, r) {
  return ct("code/didGenerateNls"), { userLocale: e, osLocale: t, resolvedLanguage: "en", defaultMessagesFile: Ee.join(r, "nls.messages.json"), locale: e, availableLanguages: {} };
}
async function H1(e) {
  try {
    return await Se.promises.access(e), true;
  } catch {
    return false;
  }
}
function X0(e) {
  const t = /* @__PURE__ */ new Date();
  return Se.promises.utimes(e, t, t);
}
var ec = O0(L0(import.meta.url)), tc = await Q0({ userLocale: "en", osLocale: "en", commit: B1.commit, userDataPath: "", nlsMetadataPath: ec });
process.env.VSCODE_NLS_CONFIG = JSON.stringify(tc), M0(B1), process.env.VSCODE_CLI = "1", await J0(), await Promise.resolve().then(() => (T0(), ho));
