/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b8c1fab3-87d3-5275-8c97-757e5fe7b408");
  } catch (e3) {
  }
})();
function pe(e, t, i, s) {
  var n = arguments.length, r = n < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, i) : s, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") r = Reflect.decorate(e, t, i, s);
  else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(t, i, r) : o(t, i)) || r);
  return n > 3 && r && Object.defineProperty(t, i, r), r;
}
function Xu(e, t) {
  return function(i, s) {
    t(i, s, e);
  };
}
function Zu() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function Dl() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var Qu = Dl() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function El(e, t) {
  let i;
  return t.length === 0 ? i = e : i = e.replace(/\{(\d+)\}/g, (s, n) => {
    const r = parseInt(n, 10), o = t[r];
    let a = s;
    return typeof o == "string" ? a = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a;
  }), Qu && (i = "［" + i.replace(/[aouei]/g, "$&$&") + "］"), i;
}
function W(e, t, ...i) {
  return El(typeof e == "number" ? Ju(e, t) : t, i);
}
function Ju(e, t) {
  const i = Zu()?.[e];
  if (typeof i != "string") {
    if (typeof t == "string") return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return i;
}
var x = window;
function e1(e, t) {
  const i = e;
  typeof i.vscodeWindowId != "number" && Object.defineProperty(i, "vscodeWindowId", { get: () => t });
}
var kl, Tl;
function t1(e, t) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const s of e) {
    const n = t(s);
    let r = i[n];
    r || (r = i[n] = []), r.push(s);
  }
  return i;
}
var W5 = class {
  constructor(e, t) {
    this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[kl] = "SetWithKey";
    for (const i of e) this.add(i);
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
    this._map.forEach((i) => e.call(t, i, i, this));
  }
  [(Tl = Symbol.iterator, kl = Symbol.toStringTag, Tl)]() {
    return this.values();
  }
}, i1 = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        throw e.stack ? ms.isErrorNoTelemetry(e) ? new ms(e.message + `

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
}, xl = new i1();
function gn(e) {
  xl.onUnexpectedError(e);
}
function vt(e) {
  s1(e) || xl.onUnexpectedError(e);
}
var Nr = "Canceled";
function s1(e) {
  return e instanceof Et ? true : e instanceof Error && e.name === Nr && e.message === Nr;
}
var Et = class extends Error {
  constructor() {
    if (super(Nr), this.name = this.message, l1 && typeof console < "u" && a1()) {
      const e = new Error().stack ?? "";
      r1.some((t) => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
    }
  }
};
function n1(e) {
  return e ? new Error(`Illegal argument: ${e}`) : new Error("Illegal argument");
}
var ms = class Ua extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof Ua) return t;
    const i = new Ua();
    return i.message = t.message, i.stack = t.stack, i;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}, st = class Au extends Error {
  constructor(t) {
    super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, Au.prototype);
  }
}, r1 = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], o1 = 5e3, Al = 0;
function a1() {
  const e = Date.now();
  return e < Al ? false : (Al = e + o1, true);
}
var l1 = false;
function Nl(e, t) {
  const i = this;
  let s = false, n;
  return function() {
    if (s) return n;
    if (s = true, t) try {
      n = e.apply(i, arguments);
    } finally {
      t();
    }
    else n = e.apply(i, arguments);
    return n;
  };
}
function c1(e, t, i = 0, s = e.length) {
  let n = i, r = s;
  for (; n < r; ) {
    const o = Math.floor((n + r) / 2);
    t(e[o]) ? n = o + 1 : r = o;
  }
  return n - 1;
}
var h1 = class Nu {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (Nu.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const s of this._array) if (this._prevFindLastPredicate(s) && !t(s)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = t;
    }
    const i = c1(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = i + 1, i === -1 ? void 0 : this._array[i];
  }
};
h1.assertInvariants = false;
function d1(e) {
  if (e.length === 0) throw new Error("Invalid tail call");
  return [e.slice(0, e.length - 1), e[e.length - 1]];
}
function vs(e, t, i = (s, n) => s === n) {
  if (e === t) return true;
  if (!e || !t || e.length !== t.length) return false;
  for (let s = 0, n = e.length; s < n; s++) if (!i(e[s], t[s])) return false;
  return true;
}
function u1(e, t, i) {
  return f1(e.length, (s) => i(e[s], t));
}
function f1(e, t) {
  let i = 0, s = e - 1;
  for (; i <= s; ) {
    const n = (i + s) / 2 | 0, r = t(n);
    if (r < 0) i = n + 1;
    else if (r > 0) s = n - 1;
    else return n;
  }
  return -(i + 1);
}
function Ir(e, t = (i) => i) {
  const i = /* @__PURE__ */ new Set();
  return e.filter((s) => {
    const n = t(s);
    return i.has(n) ? false : (i.add(n), true);
  });
}
function Lr(e, t) {
  let i = typeof t == "number" ? e : 0;
  typeof t == "number" ? i = e : (i = 0, t = e);
  const s = [];
  if (i <= t) for (let n = i; n < t; n++) s.push(n);
  else for (let n = i; n > t; n--) s.push(n);
  return s;
}
function Il(e, t) {
  let i;
  if (typeof t == "number") {
    let s = t;
    i = () => {
      const n = Math.sin(s++) * 179426549;
      return n - Math.floor(n);
    };
  } else i = Math.random;
  for (let s = e.length - 1; s > 0; s -= 1) {
    const n = Math.floor(i() * (s + 1)), r = e[s];
    e[s] = e[n], e[n] = r;
  }
}
function Ll(e, t, i) {
  const s = Rl(e, t), n = e.length, r = i.length;
  e.length = n + r;
  for (let o = n - 1; o >= s; o--) e[o + r] = e[o];
  for (let o = 0; o < r; o++) e[o + s] = i[o];
}
function Rr(e, t, i, s) {
  const n = Rl(e, t);
  let r = e.splice(n, i);
  return r === void 0 && (r = []), Ll(e, n, s), r;
}
function Rl(e, t) {
  return t < 0 ? Math.max(t + e.length, 0) : Math.min(t, e.length);
}
var Mr;
((e) => {
  function t(r) {
    return r < 0;
  }
  e.isLessThan = t;
  function i(r) {
    return r <= 0;
  }
  e.isLessThanOrEqual = i;
  function s(r) {
    return r > 0;
  }
  e.isGreaterThan = s;
  function n(r) {
    return r === 0;
  }
  e.isNeitherLessOrGreaterThan = n, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(Mr || (Mr = {}));
function p1(e, t) {
  return (i, s) => t(e(i), e(s));
}
var g1 = (e, t) => e - t, Ml = class $a {
  constructor(t) {
    this.iterate = t;
  }
  forEach(t) {
    this.iterate((i) => (t(i), true));
  }
  toArray() {
    const t = [];
    return this.iterate((i) => (t.push(i), true)), t;
  }
  filter(t) {
    return new $a((i) => this.iterate((s) => t(s) ? i(s) : true));
  }
  map(t) {
    return new $a((i) => this.iterate((s) => i(t(s))));
  }
  some(t) {
    let i = false;
    return this.iterate((s) => (i = t(s), !i)), i;
  }
  findFirst(t) {
    let i;
    return this.iterate((s) => t(s) ? (i = s, false) : true), i;
  }
  findLast(t) {
    let i;
    return this.iterate((s) => (t(s) && (i = s), true)), i;
  }
  findLastMaxBy(t) {
    let i, s = true;
    return this.iterate((n) => ((s || Mr.isGreaterThan(t(n, i))) && (s = false, i = n), true)), i;
  }
};
Ml.empty = new Ml((e) => {
});
var Pl, Ol, Fl, m1 = class {
  constructor(e, t) {
    this.uri = e, this.value = t;
  }
};
function v1(e) {
  return Array.isArray(e);
}
var Bl = class tn {
  constructor(t, i) {
    if (this[Pl] = "ResourceMap", t instanceof tn) this.map = new Map(t.map), this.toKey = i ?? tn.defaultToKey;
    else if (v1(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = i ?? tn.defaultToKey;
      for (const [s, n] of t) this.set(s, n);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? tn.defaultToKey;
  }
  set(t, i) {
    return this.map.set(this.toKey(t), new m1(t, i)), this;
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
  forEach(t, i) {
    typeof i < "u" && (t = t.bind(i));
    for (const [s, n] of this.map) t(n.value, n.uri, this);
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
  *[(Pl = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map) yield [t.uri, t.value];
  }
};
Bl.defaultToKey = (e) => e.toString();
var Hl = Bl, V5 = class {
  constructor(e, t) {
    this[Ol] = "ResourceSet", !e || typeof e == "function" ? this._map = new Hl(e) : (this._map = new Hl(t), e.forEach(this.add, this));
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
    this._map.forEach((i, s) => e.call(t, s, s, this));
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
  [(Ol = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
}, b1 = class {
  constructor() {
    this[Fl] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
    const i = this._map.get(e);
    if (i) return t !== 0 && this.touch(i, t), i.value;
  }
  set(e, t, i = 0) {
    let s = this._map.get(e);
    if (s) s.value = t, i !== 0 && this.touch(s, i);
    else {
      switch (s = { key: e, value: t, next: void 0, previous: void 0 }, i) {
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
    const i = this._state;
    let s = this._head;
    for (; s; ) {
      if (t ? e.bind(t)(s.value, s.key, this) : e(s.value, s.key, this), this._state !== i) throw new Error("LinkedMap got modified during iteration.");
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
  *iterateLinked(e, t, i) {
    for (; ; ) {
      if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
      if (!t) return;
      const s = i(t);
      t = t.next, yield s;
    }
  }
  [(Fl = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._head, i = this.size;
    for (; t && i > e; ) this._map.delete(t.key), t = t.next, i--;
    this._head = t, this._size = i, t && (t.previous = void 0), this._state++;
  }
  trimNew(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._tail, i = this.size;
    for (; t && i > e; ) this._map.delete(t.key), t = t.previous, i--;
    this._tail = t, this._size = i, t && (t.next = void 0), this._state++;
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
      const t = e.next, i = e.previous;
      if (!t || !i) throw new Error("Invalid list");
      t.previous = i, i.next = t;
    }
    e.next = void 0, e.previous = void 0, this._state++;
  }
  touch(e, t) {
    if (!this._head || !this._tail) throw new Error("Invalid list");
    if (!(t !== 1 && t !== 2)) {
      if (t === 1) {
        if (e === this._head) return;
        const i = e.next, s = e.previous;
        e === this._tail ? (s.next = void 0, this._tail = s) : (i.previous = s, s.next = i), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
      } else if (t === 2) {
        if (e === this._tail) return;
        const i = e.next, s = e.previous;
        e === this._head ? (i.previous = void 0, this._head = i) : (i.previous = s, s.next = i), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
      }
    }
  }
  toJSON() {
    const e = [];
    return this.forEach((t, i) => {
      e.push([i, t]);
    }), e;
  }
  fromJSON(e) {
    this.clear();
    for (const [t, i] of e) this.set(t, i);
  }
}, y1 = class extends b1 {
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
}, w1 = class extends y1 {
  constructor(e, t = 1) {
    super(e, t);
  }
  trim(e) {
    this.trimOld(e);
  }
  set(e, t) {
    return super.set(e, t), this.checkTrim(), this;
  }
}, Ul = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    let i = this.map.get(e);
    i || (i = /* @__PURE__ */ new Set(), this.map.set(e, i)), i.add(t);
  }
  delete(e, t) {
    const i = this.map.get(e);
    i && (i.delete(t), i.size === 0 && this.map.delete(e));
  }
  forEach(e, t) {
    const i = this.map.get(e);
    i && i.forEach(t);
  }
  get(e) {
    const t = this.map.get(e);
    return t || /* @__PURE__ */ new Set();
  }
};
function Pr(e, t) {
  if (!e) throw new Error(t ? `Assertion failed (${t})` : "Assertion Failed");
}
function $l(e) {
  if (!e()) {
    debugger;
    e(), vt(new st("Assertion Failed"));
  }
}
function bs(e) {
  return typeof e == "string";
}
function zl(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}
function Or(e) {
  return typeof e == "number" && !isNaN(e);
}
function _1(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
function S1(e) {
  return typeof e > "u";
}
function ys(e) {
  return !mn(e);
}
function mn(e) {
  return S1(e) || e === null;
}
function C1(e, t) {
  if (!e) throw new Error(t ? `Unexpected type, expected '${t}'` : "Unexpected type");
}
function Fr(e) {
  return typeof e == "function";
}
var Re;
((e) => {
  function t(w) {
    return w && typeof w == "object" && typeof w[Symbol.iterator] == "function";
  }
  e.is = t;
  const i = Object.freeze([]);
  function s() {
    return i;
  }
  e.empty = s;
  function* n(w) {
    yield w;
  }
  e.single = n;
  function r(w) {
    return t(w) ? w : n(w);
  }
  e.wrap = r;
  function o(w) {
    return w || i;
  }
  e.from = o;
  function* a(w) {
    for (let S = w.length - 1; S >= 0; S--) yield w[S];
  }
  e.reverse = a;
  function c(w) {
    return !w || w[Symbol.iterator]().next().done === true;
  }
  e.isEmpty = c;
  function h(w) {
    return w[Symbol.iterator]().next().value;
  }
  e.first = h;
  function d(w, S) {
    let I = 0;
    for (const P of w) if (S(P, I++)) return true;
    return false;
  }
  e.some = d;
  function u(w, S) {
    for (const I of w) if (S(I)) return I;
  }
  e.find = u;
  function* f(w, S) {
    for (const I of w) S(I) && (yield I);
  }
  e.filter = f;
  function* p(w, S) {
    let I = 0;
    for (const P of w) yield S(P, I++);
  }
  e.map = p;
  function* m(w, S) {
    let I = 0;
    for (const P of w) yield* S(P, I++);
  }
  e.flatMap = m;
  function* _(...w) {
    for (const S of w) _1(S) ? yield* S : yield S;
  }
  e.concat = _;
  function v(w, S, I) {
    let P = I;
    for (const Y of w) P = S(P, Y);
    return P;
  }
  e.reduce = v;
  function y(w) {
    let S = 0;
    for (const I of w) S++;
    return S;
  }
  e.length = y;
  function* C(w, S, I = w.length) {
    for (S < -w.length && (S = 0), S < 0 && (S += w.length), I < 0 ? I += w.length : I > w.length && (I = w.length); S < I; S++) yield w[S];
  }
  e.slice = C;
  function D(w, S = Number.POSITIVE_INFINITY) {
    const I = [];
    if (S === 0) return [I, w];
    const P = w[Symbol.iterator]();
    for (let Y = 0; Y < S; Y++) {
      const ue = P.next();
      if (ue.done) return [I, e.empty()];
      I.push(ue.value);
    }
    return [I, { [Symbol.iterator]() {
      return P;
    } }];
  }
  e.consume = D;
  async function E(w) {
    const S = [];
    for await (const I of w) S.push(I);
    return Promise.resolve(S);
  }
  e.asyncToArray = E;
})(Re || (Re = {}));
var Wl = void 0, Br = /* @__PURE__ */ new Set(), D1 = 50;
function Bi(e, t) {
  if (Ht?.onLifecycleMisuse?.(e, t), !Wl) return;
  const i = `${t}\0${e.stack ?? ""}`;
  Br.has(i) || Br.size >= D1 || (Br.add(i), Wl(e, t));
}
function Hr(e) {
  Bi(e, "disposable_post_dispose_set");
}
var E1 = false, Ht = null, k1 = class Iu {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let i = this.livingDisposables.get(t);
    return i || (i = { parent: null, source: null, isSingleton: false, value: t, idx: Iu.idx++ }, this.livingDisposables.set(t, i)), i;
  }
  trackDisposable(t) {
    const i = this.getDisposableData(t);
    i.source || (i.source = new Error().stack);
  }
  setParent(t, i) {
    const s = this.getDisposableData(t);
    s.parent = i;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = true;
  }
  getRootParent(t, i) {
    const s = i.get(t);
    if (s) return s;
    const n = t.parent ? this.getRootParent(this.getDisposableData(t.parent), i) : t;
    return i.set(t, n), n;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, s]) => s.source !== null && !this.getRootParent(s, t).isSingleton).flatMap(([s]) => s);
  }
  computeLeakingDisposables(t = 10, i) {
    let s;
    if (i) s = i;
    else {
      const c = /* @__PURE__ */ new Map(), h = [...this.livingDisposables.values()].filter((u) => u.source !== null && !this.getRootParent(u, c).isSingleton);
      if (h.length === 0) return;
      const d = new Set(h.map((u) => u.value));
      if (s = h.filter((u) => !(u.parent && d.has(u.parent))), s.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!s) return;
    function n(c) {
      function h(u, f) {
        for (; u.length > 0 && f.some((p) => typeof p == "string" ? p === u[0] : u[0].match(p)); ) u.shift();
      }
      const d = c.source.split(`
`).map((u) => u.trim().replace("at ", "")).filter((u) => u !== "");
      return h(d, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), d.reverse();
    }
    const r = new Ul();
    for (const c of s) {
      const h = n(c);
      for (let d = 0; d <= h.length; d++) r.add(h.slice(0, d).join(`
`), c);
    }
    s.sort(p1((c) => c.idx, g1));
    let o = "", a = 0;
    for (const c of s.slice(0, t)) {
      a++;
      const h = n(c), d = [];
      for (let u = 0; u < h.length; u++) {
        let f = h[u];
        f = `(shared with ${r.get(h.slice(0, u + 1).join(`
`)).size}/${s.length} leaks) at ${f}`;
        const m = r.get(h.slice(0, u).join(`
`)), _ = t1([...m].map((v) => n(v)[u]), (v) => v);
        delete _[h[u]];
        for (const [v, y] of Object.entries(_)) d.unshift(`    - stacktraces of ${y.length} other leaks continue with ${v}`);
        d.unshift(f);
      }
      o += `


==================== Leaking disposable ${a}/${s.length}: ${c.value.constructor.name} ====================
${d.join(`
`)}
============================================================

`;
    }
    return s.length > t && (o += `


... and ${s.length - t} more leaking disposables

`), { leaks: s, details: o };
  }
};
k1.idx = 0;
function T1(e) {
  Ht = e;
}
if (E1) {
  const e = "__is_disposable_tracked__";
  T1(new class {
    trackDisposable(t) {
      const i = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        t[e] || console.log(i);
      }, 3e3);
    }
    setParent(t, i) {
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
function si(e) {
  return Ht?.trackDisposable(e), e;
}
function Ut(e) {
  Ht?.markAsDisposed(e);
}
function ni(e, t) {
  Ht?.setParent(e, t);
}
function x1(e, t) {
  if (Ht) for (const i of e) Ht.setParent(i, t);
}
function vn(e) {
  return Ht?.markAsSingleton(e), e;
}
function A1(e) {
  return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
function nt(e) {
  if (Re.is(e)) {
    let t;
    for (const i of e) if (i) try {
      i.dispose();
    } catch (s) {
      (t ??= []).push(s);
    }
    if (t !== void 0) throw t.length === 1 ? t[0] : new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function N1(...e) {
  const t = re(() => nt(e));
  return x1(e, t), t;
}
function re(e) {
  const t = si({ dispose: Nl(() => {
    Ut(t), e();
  }) });
  return t;
}
var Vl = class za {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = false, si(this);
  }
  dispose() {
    this._isDisposed || (Ut(this), this._isDisposed = true, this.clear());
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
      nt(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(t) {
    if (!t) return t;
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    if (ni(t, this), this._isDisposed) {
      const i = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      za.DISABLE_DISPOSED_WARNING || console.warn(i.stack), Hr(i);
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
    t && this._toDispose.has(t) && (this._toDispose.delete(t), ni(t, null));
  }
  transferOut(t) {
    if (this._isDisposed) {
      const i = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      za.DISABLE_DISPOSED_WARNING || console.warn(i.stack), Bi(i, "disposable_use_after_dispose");
    }
    return this.deleteAndLeak(t), t;
  }
};
Vl.DISABLE_DISPOSED_WARNING = false;
var q = Vl, I1 = class {
  constructor(e) {
    this._isDisposed = false, this._value = e, si(this), ni(e, this);
  }
  get value() {
    if (this._value === void 0) {
      const e = new Error(this._isDisposed ? "TransferableDisposable: the held value has been disposed" : "TransferableDisposable: the held value was already transferred out");
      throw q.DISABLE_DISPOSED_WARNING || console.warn(e.stack), Bi(e, this._isDisposed ? "disposable_use_after_dispose" : "disposable_use_after_transfer"), e;
    }
    return this._value;
  }
  get rawValue() {
    return this._value;
  }
  transferOut() {
    const e = this.value;
    return this._value = void 0, ni(e, null), e;
  }
  dispose() {
    this._isDisposed || (this._isDisposed = true, Ut(this), this._value?.dispose(), this._value = void 0);
  }
  [Symbol.dispose]() {
    this.dispose();
  }
}, ee = class {
  constructor() {
    this._store = new q(), si(this), ni(this._store, this);
  }
  dispose() {
    Ut(this), this._store.dispose();
  }
  _register(e) {
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(e);
  }
};
ee.None = Object.freeze({ dispose() {
} });
var De = class {
  constructor() {
    this._isDisposed = false, si(this);
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(e) {
    if (this._isDisposed) {
      if (e) {
        const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
        q.DISABLE_DISPOSED_WARNING || console.warn(t.stack), Hr(t), e.dispose();
      }
      return;
    }
    e !== this._value && (this._value?.dispose(), e && ni(e, this), this._value = e);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, Ut(this), this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    const e = this._value;
    return this._value = void 0, e && ni(e, null), e;
  }
}, L1 = class {
  constructor(e = /* @__PURE__ */ new Map()) {
    this._isDisposed = false, this._store = e, si(this);
  }
  dispose() {
    Ut(this), this._isDisposed = true, this.clearAndDisposeAll();
  }
  clearAndDisposeAll() {
    if (this._store.size) try {
      nt(this._store.values());
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
  set(e, t, i = false) {
    if (this._isDisposed) {
      const s = new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!");
      console.warn(s.stack), Hr(s);
      return;
    }
    i || this._store.get(e)?.dispose(), this._store.set(e, t);
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
}, Ur = class Wa {
  constructor(t) {
    this.element = t, this.next = Wa.Undefined, this.prev = Wa.Undefined;
  }
};
Ur.Undefined = new Ur(void 0);
var ge = Ur, Gl = class {
  constructor() {
    this._first = ge.Undefined, this._last = ge.Undefined, this._size = 0;
  }
  get size() {
    return this._size;
  }
  get first() {
    return this._first;
  }
  isEmpty() {
    return this._first === ge.Undefined;
  }
  clear() {
    let e = this._first;
    for (; e !== ge.Undefined; ) {
      const t = e.next;
      e.prev = ge.Undefined, e.next = ge.Undefined, e = t;
    }
    this._first = ge.Undefined, this._last = ge.Undefined, this._size = 0;
  }
  unshift(e) {
    return this._insert(e, false);
  }
  push(e) {
    return this._insert(e, true);
  }
  _insert(e, t) {
    const i = new ge(e);
    if (this._first === ge.Undefined) this._first = i, this._last = i;
    else if (t) {
      const n = this._last;
      this._last = i, i.prev = n, n.next = i;
    } else {
      const n = this._first;
      this._first = i, i.next = n, n.prev = i;
    }
    this._size += 1;
    let s = false;
    return () => {
      s || (s = true, this._remove(i));
    };
  }
  shift() {
    if (this._first !== ge.Undefined) {
      const e = this._first.element;
      return this._remove(this._first), e;
    }
  }
  pop() {
    if (this._last !== ge.Undefined) {
      const e = this._last.element;
      return this._remove(this._last), e;
    }
  }
  remove(e) {
    this._remove(e);
  }
  _remove(e) {
    if (e.prev !== ge.Undefined && e.next !== ge.Undefined) {
      const t = e.prev;
      t.next = e.next, e.next.prev = t;
    } else e.prev === ge.Undefined && e.next === ge.Undefined ? (this._first = ge.Undefined, this._last = ge.Undefined) : e.next === ge.Undefined ? (this._last = this._last.prev, this._last.next = ge.Undefined) : e.prev === ge.Undefined && (this._first = this._first.next, this._first.prev = ge.Undefined);
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let e = this._first;
    for (; e !== ge.Undefined; ) yield e.element, e = e.next;
  }
}, R1 = globalThis.performance && typeof globalThis.performance.now == "function", M1 = class Lu {
  static create(t) {
    return new Lu(t);
  }
  constructor(t) {
    this._now = R1 && t === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
}, ql = false, P1 = false, A;
((e) => {
  e.None = () => ee.None;
  function t(M) {
    if (P1) {
      const { onDidAddListener: k } = M, R = zr.create();
      let N = 0;
      M.onDidAddListener = () => {
        ++N === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), R.print()), k?.();
      };
    }
  }
  function i(M, k) {
    return p(M, () => {
    }, 0, void 0, true, void 0, k);
  }
  e.defer = i;
  function s(M) {
    return (k, R = null, N) => {
      let B = false, V;
      return V = M((z) => {
        if (!B) return V ? V.dispose() : B = true, k.call(R, z);
      }, null, N), B && V.dispose(), V;
    };
  }
  e.once = s;
  function n(M, k) {
    return e.once(e.filter(M, k));
  }
  e.onceIf = n;
  function r(M, k, R) {
    return u((N, B = null, V) => M((z) => N.call(B, k(z)), null, V), R);
  }
  e.map = r;
  function o(M, k, R) {
    return u((N, B = null, V) => M((z) => {
      k(z), N.call(B, z);
    }, null, V), R);
  }
  e.forEach = o;
  function a(M, k, R) {
    return u((N, B = null, V) => M((z) => k(z) && N.call(B, z), null, V), R);
  }
  e.filter = a;
  function c(M) {
    return M;
  }
  e.signal = c;
  function h(...M) {
    return (k, R = null, N) => {
      const B = N1(...M.map((V) => V((z) => k.call(R, z))));
      return f(B, N);
    };
  }
  e.any = h;
  function d(M, k, R, N) {
    let B = R;
    return r(M, (V) => (B = k(B, V), B), N);
  }
  e.reduce = d;
  function u(M, k) {
    let R;
    const N = { onWillAddFirstListener() {
      R = M(B.fire, B);
    }, onDidRemoveLastListener() {
      R?.dispose();
    } };
    k || t(N);
    const B = new L(N);
    return k?.add(B), B.event;
  }
  function f(M, k) {
    return k instanceof Array ? k.push(M) : k && k.add(M), M;
  }
  function p(M, k, R = 100, N = false, B = false, V, z) {
    let _e, Q, St, he = 0, dt;
    const Ii = { leakWarningThreshold: V, onWillAddFirstListener() {
      _e = M((us) => {
        he++, Q = k(Q, us), N && !St && (ti.fire(Q), Q = void 0), dt ??= () => {
          const cn = Q;
          Q = void 0, St = void 0, (!N || he > 1) && ti.fire(cn), he = 0;
        }, typeof R == "number" ? (clearTimeout(St), St = setTimeout(dt, R)) : St === void 0 && (St = 0, queueMicrotask(dt));
      });
    }, onWillRemoveListener() {
      B && he > 0 && dt?.();
    }, onDidRemoveLastListener() {
      dt = void 0, _e.dispose();
    } };
    z || t(Ii);
    const ti = new L(Ii);
    return z?.add(ti), ti.event;
  }
  e.debounce = p;
  function m(M, k = 0, R) {
    return e.debounce(M, (N, B) => N ? (N.push(B), N) : [B], k, void 0, true, void 0, R);
  }
  e.accumulate = m;
  function _(M, k = (N, B) => N === B, R) {
    let N = true, B;
    return a(M, (V) => {
      const z = N || !k(V, B);
      return N = false, B = V, z;
    }, R);
  }
  e.latch = _;
  function v(M, k, R) {
    return [e.filter(M, k, R), e.filter(M, (N) => !k(N), R)];
  }
  e.split = v;
  function y(M, k = false, R = [], N) {
    let B = R.slice(), V = M((Q) => {
      B ? B.push(Q) : _e.fire(Q);
    });
    N && N.add(V);
    const z = () => {
      B?.forEach((Q) => _e.fire(Q)), B = null;
    }, _e = new L({ onWillAddFirstListener() {
      V || (V = M((Q) => _e.fire(Q)), N && N.add(V));
    }, onDidAddFirstListener() {
      B && (k ? setTimeout(z) : z());
    }, onDidRemoveLastListener() {
      V && V.dispose(), V = null;
    } });
    return N && N.add(_e), _e.event;
  }
  e.buffer = y;
  function C(M, k) {
    return (N, B, V) => {
      const z = k(new E());
      return M(function(_e) {
        const Q = z.evaluate(_e);
        Q !== D && N.call(B, Q);
      }, void 0, V);
    };
  }
  e.chain = C;
  const D = /* @__PURE__ */ Symbol("HaltChainable");
  class E {
    constructor() {
      this.steps = [];
    }
    map(k) {
      return this.steps.push(k), this;
    }
    forEach(k) {
      return this.steps.push((R) => (k(R), R)), this;
    }
    filter(k) {
      return this.steps.push((R) => k(R) ? R : D), this;
    }
    reduce(k, R) {
      let N = R;
      return this.steps.push((B) => (N = k(N, B), N)), this;
    }
    latch(k = (R, N) => R === N) {
      let R = true, N;
      return this.steps.push((B) => {
        const V = R || !k(B, N);
        return R = false, N = B, V ? B : D;
      }), this;
    }
    evaluate(k) {
      for (const R of this.steps) if (k = R(k), k === D) break;
      return k;
    }
  }
  function w(M, k, R = (N) => N) {
    const N = (..._e) => z.fire(R(..._e)), B = () => M.on(k, N), V = () => M.removeListener(k, N), z = new L({ onWillAddFirstListener: B, onDidRemoveLastListener: V });
    return z.event;
  }
  e.fromNodeEventEmitter = w;
  function S(M) {
    let k;
    const R = () => {
      k = M.subscribe((V) => B.fire(V));
    }, N = () => {
      k?.unsubscribe(), k = void 0;
    }, B = new L({ onWillAddFirstListener: R, onDidRemoveLastListener: N });
    return B.event;
  }
  e.fromRxJS = S;
  function I(M, k, R = (N) => N) {
    const N = (..._e) => z.fire(R(..._e)), B = () => M.addEventListener(k, N), V = () => M.removeEventListener(k, N), z = new L({ onWillAddFirstListener: B, onDidRemoveLastListener: V });
    return z.event;
  }
  e.fromDOMEventEmitter = I;
  function P(M, k) {
    return new Promise((R) => s(M)(R, null, k));
  }
  e.toPromise = P;
  function Y(M) {
    const k = new L();
    return M.then((R) => {
      k.fire(R);
    }, () => {
      k.fire(void 0);
    }).finally(() => {
      k.dispose();
    }), k.event;
  }
  e.fromPromise = Y;
  function ue(M, k) {
    return M((R) => k.fire(R));
  }
  e.forward = ue;
  function G(M, k, R) {
    return k(R), M((N) => k(N));
  }
  e.runAndSubscribe = G;
  class $ {
    constructor(k, R) {
      this._observable = k, this._counter = 0, this._hasChanged = false;
      const N = { onWillAddFirstListener: () => {
        k.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        k.removeObserver(this);
      } };
      R || t(N), this.emitter = new L(N), R && R.add(this.emitter);
    }
    beginUpdate(k) {
      this._counter++;
    }
    handlePossibleChange(k) {
    }
    handleChange(k, R) {
      this._hasChanged = true;
    }
    endUpdate(k) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function He(M, k) {
    return new $(M, k).emitter.event;
  }
  e.fromObservable = He;
  function ei(M) {
    return (k, R, N) => {
      let B = 0, V = false;
      const z = { beginUpdate() {
        B++;
      }, endUpdate() {
        B--, B === 0 && (M.reportChanges(), V && (V = false, k.call(R)));
      }, handlePossibleChange() {
      }, handleChange() {
        V = true;
      } };
      M.addObserver(z), M.reportChanges();
      const _e = { dispose() {
        M.removeObserver(z);
      } };
      return N instanceof q ? N.add(_e) : Array.isArray(N) && N.push(_e), _e;
    };
  }
  e.fromObservableLight = ei;
})(A || (A = {}));
var $r = class Va {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${Va._idPool++}`, Va.all.add(this);
  }
  start(t) {
    this._stopWatch = new M1(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
$r.all = /* @__PURE__ */ new Set(), $r._idPool = 0;
var O1 = $r, Kl = -1, F1 = 1;
function jl() {
  return (F1++).toString(16).padStart(3, "0");
}
var B1 = class {
  constructor(e, t, i = jl()) {
    this._errorHandler = e, this.threshold = t, this.name = i, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    const i = this.threshold;
    if (i <= 0 || t < i) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const s = e.value, n = this._stacks.get(s) || 0;
    if (this._stacks.set(s, n + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = i * 0.5;
      const [r, o] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${o}):`;
      console.warn(a), console.warn(r);
      const c = o / t > 0.3 ? "dominated" : "popular", h = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, d = new Yl(c, a, r, t, h);
      this._errorHandler(d), Bi(d, "emitter_listener_leak");
    }
    return () => {
      const r = this._stacks.get(s) || 0;
      r <= 1 ? this._stacks.delete(s) : this._stacks.set(s, r - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (const [i, s] of this._stacks) (!e || t < s) && (e = [i, s], t = s);
    return e;
  }
}, zr = class Ru {
  constructor(t) {
    this.value = t;
  }
  static create() {
    const t = new Error();
    return new Ru(t.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, Yl = class extends Error {
  constructor(e, t, i, s, n) {
    super(n ? `[${n}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = s, this.details = t, this.stack = i;
  }
}, H1 = class extends Yl {
  constructor(e, t, i, s, n) {
    super(e, t, i, s, n), this.name = "ListenerRefusalError";
  }
}, bn = class {
  constructor(e) {
    this.value = e;
  }
}, U1 = 2, Xl = (e, t) => {
  if (e instanceof bn) t(e);
  else for (let i = 0; i < e.length; i++) {
    const s = e[i];
    s && t(s);
  }
}, L = class {
  constructor(e) {
    this._size = 0, this._options = e, (Kl > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? Kl, this._leakWarningName = this._options?.leakWarningName ?? jl(), this._leakWarningErrorHandler = this._options?.onListenerError ?? vt), this._perfMon = this._options?._profName ? new O1(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  _getLeakageMonitor() {
    if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new B1(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (ql) {
          const e = this._listeners;
          queueMicrotask(() => {
            Xl(e, (t) => t.stack?.print());
          });
        }
        Xl(this._listeners, (e) => {
          e.value = void 0;
        }), this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (e, t, i) => {
      if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
        const a = this._getLeakageMonitor();
        if (a) {
          const c = `[${a.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${a.threshold})`;
          console.warn(c);
          const h = a.getMostFrequentStack() ?? ["UNKNOWN stack", -1], d = h[1] / this._size > 0.3 ? "dominated" : "popular", u = new H1(d, `${c}. HINT: Stack shows most frequent listener (${h[1]}-times)`, h[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || vt)(u), Bi(u, "emitter_listener_refusal"), ee.None;
        }
      }
      if (this._disposed) {
        const a = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return Bi(a, "emitter_use_after_dispose"), ee.None;
      }
      t && (e = e.bind(t));
      const s = new bn(e);
      let n, r;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const a = this._getLeakageMonitor();
        a && (s.stack = zr.create(), n = a.check(s.stack, this._size + 1));
      }
      ql && (s.stack = r ?? zr.create()), this._listeners ? this._listeners instanceof bn ? (this._deliveryQueue ??= new $1(), this._listeners = [this._listeners, s]) : this._listeners.push(s) : (this._options?.onWillAddFirstListener?.(this), this._listeners = s, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const o = re(() => {
        n?.(), this._removeListener(s);
      });
      return i instanceof q ? i.add(o) : Array.isArray(i) && i.push(o), o;
    }, this._event;
  }
  _removeListener(e) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    const t = this._listeners, i = t.indexOf(e);
    if (i === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, t[i] = void 0;
    const s = this._deliveryQueue.current === this;
    if (this._size * U1 <= t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) t[r] ? t[n++] = t[r] : s && n < this._deliveryQueue.end && (this._deliveryQueue.end--, n < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = n;
    }
  }
  _deliver(e, t) {
    if (!e) return;
    const i = this._options?.onListenerError || vt;
    if (!i) {
      e.value(t);
      return;
    }
    try {
      e.value(t);
    } catch (s) {
      i(s);
    }
  }
  _deliverQueue(e) {
    const t = e.current._listeners;
    for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
    e.reset();
  }
  fire(e) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof bn) this._deliver(this._listeners, e);
    else {
      const t = this._deliveryQueue;
      t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
}, $1 = class {
  constructor() {
    this.i = -1, this.end = 0;
  }
  enqueue(e, t, i) {
    this.i = 0, this.end = i, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
}, Wr = class {
  constructor() {
    this.data = [];
  }
  wrapEvent(e, t, i) {
    return (s, n, r) => e((o) => {
      const a = this.data[this.data.length - 1];
      if (!t) {
        a ? a.buffers.push(() => s.call(n, o)) : s.call(n, o);
        return;
      }
      const c = a;
      if (!c) {
        s.call(n, t(i, o));
        return;
      }
      c.items ??= [], c.items.push(o), c.buffers.length === 0 && a.buffers.push(() => {
        c.reducedResult ??= i ? c.items.reduce(t, i) : c.items.reduce(t), s.call(n, c.reducedResult);
      });
    }, void 0, r);
  }
  bufferEvents(e) {
    const t = { buffers: new Array() };
    this.data.push(t);
    const i = e();
    return this.data.pop(), t.buffers.forEach((s) => s()), i;
  }
}, ws = class {
  constructor() {
    this.listening = false, this.inputEvent = A.None, this.emitter = new L({ onDidAddFirstListener: () => {
      this.listening = true, this.inputEventListener?.dispose(), this.inputEventListener = new De(), this.inputEventListener.value = this.inputEvent(this.emitter.fire, this.emitter);
    }, onDidRemoveLastListener: () => {
      this.listening = false, this.inputEventListener?.dispose(), this.inputEventListener = void 0;
    } }), this.event = this.emitter.event;
  }
  set input(e) {
    this.inputEvent = e, this.listening && (this.inputEventListener ??= new De(), this.inputEventListener.value = e(this.emitter.fire, this.emitter));
  }
  dispose() {
    this.inputEventListener?.dispose(), this.inputEventListener = void 0, this.inputEvent = A.None, this.emitter.dispose();
  }
}, Vr = class {
  constructor() {
    this.mapWindowIdToZoomLevel = /* @__PURE__ */ new Map(), this._onDidChangeZoomLevel = new L(), this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event, this.mapWindowIdToZoomFactor = /* @__PURE__ */ new Map(), this._onDidChangeFullscreen = new L(), this.onDidChangeFullscreen = this._onDidChangeFullscreen.event, this.mapWindowIdToFullScreen = /* @__PURE__ */ new Map();
  }
  getZoomLevel(t) {
    return this.mapWindowIdToZoomLevel.get(this.getWindowId(t)) ?? 0;
  }
  setZoomLevel(t, i) {
    if (this.getZoomLevel(i) === t) return;
    const s = this.getWindowId(i);
    this.mapWindowIdToZoomLevel.set(s, t), this._onDidChangeZoomLevel.fire(s);
  }
  getZoomFactor(t) {
    return this.mapWindowIdToZoomFactor.get(this.getWindowId(t)) ?? 1;
  }
  setZoomFactor(t, i) {
    this.mapWindowIdToZoomFactor.set(this.getWindowId(i), t);
  }
  setFullscreen(t, i) {
    if (this.isFullscreen(i) === t) return;
    const s = this.getWindowId(i);
    this.mapWindowIdToFullScreen.set(s, t), this._onDidChangeFullscreen.fire(s);
  }
  isFullscreen(t) {
    return !!this.mapWindowIdToFullScreen.get(this.getWindowId(t));
  }
  getWindowId(t) {
    return t.vscodeWindowId;
  }
};
Vr.INSTANCE = new Vr();
var Hi = Vr;
function z1(e, t, i) {
  typeof t == "string" && (t = e.matchMedia(t)), t.addEventListener("change", i);
}
function W1(e, t) {
  Hi.INSTANCE.setZoomLevel(e, t);
}
function Zl(e) {
  return Hi.INSTANCE.getZoomLevel(e);
}
var q5 = Hi.INSTANCE.onDidChangeZoomLevel;
function V1(e) {
  return Hi.INSTANCE.getZoomFactor(e);
}
function G1(e, t) {
  Hi.INSTANCE.setZoomFactor(e, t);
}
var K5 = Hi.INSTANCE.onDidChangeFullscreen, Ui = navigator.userAgent, yn = Ui.indexOf("Firefox") >= 0, wn = Ui.indexOf("AppleWebKit") >= 0, Gr = Ui.indexOf("Chrome") >= 0, Ql = !Gr && Ui.indexOf("Safari") >= 0, j5 = Ui.indexOf("Electron/") >= 0, Y5 = Ui.indexOf("Android") >= 0, _n = false;
if (typeof x.matchMedia == "function") {
  const e = x.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"), t = x.matchMedia("(display-mode: fullscreen)");
  _n = e.matches, z1(x, e, ({ matches: i }) => {
    _n && t.matches || (_n = i);
  });
}
function q1() {
  return _n;
}
var $i = "en", Sn = false, Cn = false, _s = false, K1 = false, Jl = false, qr = false, j1 = false, Y1 = false, X1 = false, Z1 = false, Dn = void 0, En = $i, ec = $i, Q1 = void 0, kt = void 0, Tt = globalThis, Me = void 0;
typeof Tt.vscode < "u" && typeof Tt.vscode.process < "u" ? Me = Tt.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (Me = process);
var tc = typeof Me?.versions?.electron == "string", J1 = tc && Me?.type === "renderer";
if (typeof Me == "object") {
  Sn = Me.platform === "win32", Cn = Me.platform === "darwin", _s = Me.platform === "linux", K1 = _s && !!Me.env.SNAP && !!Me.env.SNAP_REVISION, j1 = tc, X1 = !!Me.env.CI || !!Me.env.BUILD_ARTIFACTSTAGINGDIRECTORY, Dn = $i, En = $i;
  const e = Me.env.VSCODE_NLS_CONFIG;
  if (e) try {
    const t = JSON.parse(e);
    Dn = t.userLocale, ec = t.osLocale, En = t.resolvedLanguage || $i, Q1 = t.languagePack?.translationsConfigFile;
  } catch {
  }
  Jl = true;
} else typeof navigator == "object" && !J1 ? (kt = navigator.userAgent, Sn = kt.indexOf("Windows") >= 0, Cn = kt.indexOf("Macintosh") >= 0, Y1 = (kt.indexOf("Macintosh") >= 0 || kt.indexOf("iPad") >= 0 || kt.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, _s = kt.indexOf("Linux") >= 0, Z1 = kt?.indexOf("Mobi") >= 0, qr = true, En = Dl() || $i, Dn = navigator.language.toLowerCase(), ec = Dn) : console.error("Unable to resolve platform.");
var Kr = 0;
Cn ? Kr = 1 : Sn ? Kr = 3 : _s && (Kr = 2);
var xt = Sn, Pe = Cn, ic = _s, kn = Jl, ef = qr, tf = qr && typeof Tt.importScripts == "function", sf = tf ? Tt.origin : void 0, bt = kt, $t = En, sc;
((e) => {
  function t() {
    return $t;
  }
  e.value = t;
  function i() {
    return $t.length === 2 ? $t === "en" : $t.length >= 3 ? $t[0] === "e" && $t[1] === "n" && $t[2] === "-" : false;
  }
  e.isDefaultVariant = i;
  function s() {
    return $t === "en";
  }
  e.isDefault = s;
})(sc || (sc = {}));
var nf = typeof Tt.postMessage == "function" && !Tt.importScripts, rf = (() => {
  if (nf) {
    const e = [];
    Tt.addEventListener("message", (i) => {
      if (i.data && i.data.vscodeScheduleAsyncWork) for (let s = 0, n = e.length; s < n; s++) {
        const r = e[s];
        if (r.id === i.data.vscodeScheduleAsyncWork) {
          e.splice(s, 1), r.callback();
          return;
        }
      }
    });
    let t = 0;
    return (i) => {
      const s = ++t;
      e.push({ id: s, callback: i }), Tt.postMessage({ vscodeScheduleAsyncWork: s }, "*");
    };
  }
  return (e) => setTimeout(e);
})(), of = !!(bt && bt.indexOf("Chrome") >= 0), X5 = !!(bt && bt.indexOf("Firefox") >= 0), Z5 = !!(!of && bt && bt.indexOf("Safari") >= 0), Q5 = !!(bt && bt.indexOf("Edg/") >= 0), J5 = !!(bt && bt.indexOf("Android") >= 0), ev = Me?.arch, tv = Me?.platform, iv = Me?.versions?.node, sv = { clipboard: { writeText: kn || document.queryCommandSupported && document.queryCommandSupported("copy") || !!(navigator && navigator.clipboard && navigator.clipboard.writeText), readText: kn || !!(navigator && navigator.clipboard && navigator.clipboard.readText) }, keyboard: kn || q1() ? 0 : navigator.keyboard || Ql ? 1 : 2, touch: "ontouchstart" in x || navigator.maxTouchPoints > 0, pointerEvents: x.PointerEvent && ("ontouchstart" in x || navigator.maxTouchPoints > 0) }, nc = ((e) => (e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE", e))(nc || {}), jr = class {
  constructor() {
    this._keyCodeToStr = [], this._strToKeyCode = /* @__PURE__ */ Object.create(null);
  }
  define(e, t) {
    this._keyCodeToStr[e] = t, this._strToKeyCode[t.toLowerCase()] = e;
  }
  keyCodeToStr(e) {
    return this._keyCodeToStr[e];
  }
  strToKeyCode(e) {
    return this._strToKeyCode[e.toLowerCase()] || 0;
  }
}, Tn = new jr(), Yr = new jr(), Xr = new jr(), rc = new Array(230), af = {}, lf = [], cf = /* @__PURE__ */ Object.create(null), hf = /* @__PURE__ */ Object.create(null), oc = [], Zr = [];
for (let e = 0; e <= 193; e++) oc[e] = -1;
for (let e = 0; e <= 132; e++) Zr[e] = -1;
(function() {
  const t = [[1, 0, "None", 0, "unknown", 0, "VK_UNKNOWN", "", ""], [1, 1, "Hyper", 0, "", 0, "", "", ""], [1, 2, "Super", 0, "", 0, "", "", ""], [1, 3, "Fn", 0, "", 0, "", "", ""], [1, 4, "FnLock", 0, "", 0, "", "", ""], [1, 5, "Suspend", 0, "", 0, "", "", ""], [1, 6, "Resume", 0, "", 0, "", "", ""], [1, 7, "Turbo", 0, "", 0, "", "", ""], [1, 8, "Sleep", 0, "", 0, "VK_SLEEP", "", ""], [1, 9, "WakeUp", 0, "", 0, "", "", ""], [0, 10, "KeyA", 31, "A", 65, "VK_A", "", ""], [0, 11, "KeyB", 32, "B", 66, "VK_B", "", ""], [0, 12, "KeyC", 33, "C", 67, "VK_C", "", ""], [0, 13, "KeyD", 34, "D", 68, "VK_D", "", ""], [0, 14, "KeyE", 35, "E", 69, "VK_E", "", ""], [0, 15, "KeyF", 36, "F", 70, "VK_F", "", ""], [0, 16, "KeyG", 37, "G", 71, "VK_G", "", ""], [0, 17, "KeyH", 38, "H", 72, "VK_H", "", ""], [0, 18, "KeyI", 39, "I", 73, "VK_I", "", ""], [0, 19, "KeyJ", 40, "J", 74, "VK_J", "", ""], [0, 20, "KeyK", 41, "K", 75, "VK_K", "", ""], [0, 21, "KeyL", 42, "L", 76, "VK_L", "", ""], [0, 22, "KeyM", 43, "M", 77, "VK_M", "", ""], [0, 23, "KeyN", 44, "N", 78, "VK_N", "", ""], [0, 24, "KeyO", 45, "O", 79, "VK_O", "", ""], [0, 25, "KeyP", 46, "P", 80, "VK_P", "", ""], [0, 26, "KeyQ", 47, "Q", 81, "VK_Q", "", ""], [0, 27, "KeyR", 48, "R", 82, "VK_R", "", ""], [0, 28, "KeyS", 49, "S", 83, "VK_S", "", ""], [0, 29, "KeyT", 50, "T", 84, "VK_T", "", ""], [0, 30, "KeyU", 51, "U", 85, "VK_U", "", ""], [0, 31, "KeyV", 52, "V", 86, "VK_V", "", ""], [0, 32, "KeyW", 53, "W", 87, "VK_W", "", ""], [0, 33, "KeyX", 54, "X", 88, "VK_X", "", ""], [0, 34, "KeyY", 55, "Y", 89, "VK_Y", "", ""], [0, 35, "KeyZ", 56, "Z", 90, "VK_Z", "", ""], [0, 36, "Digit1", 22, "1", 49, "VK_1", "", ""], [0, 37, "Digit2", 23, "2", 50, "VK_2", "", ""], [0, 38, "Digit3", 24, "3", 51, "VK_3", "", ""], [0, 39, "Digit4", 25, "4", 52, "VK_4", "", ""], [0, 40, "Digit5", 26, "5", 53, "VK_5", "", ""], [0, 41, "Digit6", 27, "6", 54, "VK_6", "", ""], [0, 42, "Digit7", 28, "7", 55, "VK_7", "", ""], [0, 43, "Digit8", 29, "8", 56, "VK_8", "", ""], [0, 44, "Digit9", 30, "9", 57, "VK_9", "", ""], [0, 45, "Digit0", 21, "0", 48, "VK_0", "", ""], [1, 46, "Enter", 3, "Enter", 13, "VK_RETURN", "", ""], [1, 47, "Escape", 9, "Escape", 27, "VK_ESCAPE", "", ""], [1, 48, "Backspace", 1, "Backspace", 8, "VK_BACK", "", ""], [1, 49, "Tab", 2, "Tab", 9, "VK_TAB", "", ""], [1, 50, "Space", 10, "Space", 32, "VK_SPACE", "", ""], [0, 51, "Minus", 88, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"], [0, 52, "Equal", 86, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"], [0, 53, "BracketLeft", 92, "[", 219, "VK_OEM_4", "[", "OEM_4"], [0, 54, "BracketRight", 94, "]", 221, "VK_OEM_6", "]", "OEM_6"], [0, 55, "Backslash", 93, "\\", 220, "VK_OEM_5", "\\", "OEM_5"], [0, 56, "IntlHash", 0, "", 0, "", "", ""], [0, 57, "Semicolon", 85, ";", 186, "VK_OEM_1", ";", "OEM_1"], [0, 58, "Quote", 95, "'", 222, "VK_OEM_7", "'", "OEM_7"], [0, 59, "Backquote", 91, "`", 192, "VK_OEM_3", "`", "OEM_3"], [0, 60, "Comma", 87, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"], [0, 61, "Period", 89, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"], [0, 62, "Slash", 90, "/", 191, "VK_OEM_2", "/", "OEM_2"], [1, 63, "CapsLock", 8, "CapsLock", 20, "VK_CAPITAL", "", ""], [1, 64, "F1", 59, "F1", 112, "VK_F1", "", ""], [1, 65, "F2", 60, "F2", 113, "VK_F2", "", ""], [1, 66, "F3", 61, "F3", 114, "VK_F3", "", ""], [1, 67, "F4", 62, "F4", 115, "VK_F4", "", ""], [1, 68, "F5", 63, "F5", 116, "VK_F5", "", ""], [1, 69, "F6", 64, "F6", 117, "VK_F6", "", ""], [1, 70, "F7", 65, "F7", 118, "VK_F7", "", ""], [1, 71, "F8", 66, "F8", 119, "VK_F8", "", ""], [1, 72, "F9", 67, "F9", 120, "VK_F9", "", ""], [1, 73, "F10", 68, "F10", 121, "VK_F10", "", ""], [1, 74, "F11", 69, "F11", 122, "VK_F11", "", ""], [1, 75, "F12", 70, "F12", 123, "VK_F12", "", ""], [1, 76, "PrintScreen", 0, "", 0, "", "", ""], [1, 77, "ScrollLock", 84, "ScrollLock", 145, "VK_SCROLL", "", ""], [1, 78, "Pause", 7, "PauseBreak", 19, "VK_PAUSE", "", ""], [1, 79, "Insert", 19, "Insert", 45, "VK_INSERT", "", ""], [1, 80, "Home", 14, "Home", 36, "VK_HOME", "", ""], [1, 81, "PageUp", 11, "PageUp", 33, "VK_PRIOR", "", ""], [1, 82, "Delete", 20, "Delete", 46, "VK_DELETE", "", ""], [1, 83, "End", 13, "End", 35, "VK_END", "", ""], [1, 84, "PageDown", 12, "PageDown", 34, "VK_NEXT", "", ""], [1, 85, "ArrowRight", 17, "RightArrow", 39, "VK_RIGHT", "Right", ""], [1, 86, "ArrowLeft", 15, "LeftArrow", 37, "VK_LEFT", "Left", ""], [1, 87, "ArrowDown", 18, "DownArrow", 40, "VK_DOWN", "Down", ""], [1, 88, "ArrowUp", 16, "UpArrow", 38, "VK_UP", "Up", ""], [1, 89, "NumLock", 83, "NumLock", 144, "VK_NUMLOCK", "", ""], [1, 90, "NumpadDivide", 113, "NumPad_Divide", 111, "VK_DIVIDE", "", ""], [1, 91, "NumpadMultiply", 108, "NumPad_Multiply", 106, "VK_MULTIPLY", "", ""], [1, 92, "NumpadSubtract", 111, "NumPad_Subtract", 109, "VK_SUBTRACT", "", ""], [1, 93, "NumpadAdd", 109, "NumPad_Add", 107, "VK_ADD", "", ""], [1, 94, "NumpadEnter", 3, "", 0, "", "", ""], [1, 95, "Numpad1", 99, "NumPad1", 97, "VK_NUMPAD1", "", ""], [1, 96, "Numpad2", 100, "NumPad2", 98, "VK_NUMPAD2", "", ""], [1, 97, "Numpad3", 101, "NumPad3", 99, "VK_NUMPAD3", "", ""], [1, 98, "Numpad4", 102, "NumPad4", 100, "VK_NUMPAD4", "", ""], [1, 99, "Numpad5", 103, "NumPad5", 101, "VK_NUMPAD5", "", ""], [1, 100, "Numpad6", 104, "NumPad6", 102, "VK_NUMPAD6", "", ""], [1, 101, "Numpad7", 105, "NumPad7", 103, "VK_NUMPAD7", "", ""], [1, 102, "Numpad8", 106, "NumPad8", 104, "VK_NUMPAD8", "", ""], [1, 103, "Numpad9", 107, "NumPad9", 105, "VK_NUMPAD9", "", ""], [1, 104, "Numpad0", 98, "NumPad0", 96, "VK_NUMPAD0", "", ""], [1, 105, "NumpadDecimal", 112, "NumPad_Decimal", 110, "VK_DECIMAL", "", ""], [0, 106, "IntlBackslash", 97, "OEM_102", 226, "VK_OEM_102", "", ""], [1, 107, "ContextMenu", 58, "ContextMenu", 93, "", "", ""], [1, 108, "Power", 0, "", 0, "", "", ""], [1, 109, "NumpadEqual", 0, "", 0, "", "", ""], [1, 110, "F13", 71, "F13", 124, "VK_F13", "", ""], [1, 111, "F14", 72, "F14", 125, "VK_F14", "", ""], [1, 112, "F15", 73, "F15", 126, "VK_F15", "", ""], [1, 113, "F16", 74, "F16", 127, "VK_F16", "", ""], [1, 114, "F17", 75, "F17", 128, "VK_F17", "", ""], [1, 115, "F18", 76, "F18", 129, "VK_F18", "", ""], [1, 116, "F19", 77, "F19", 130, "VK_F19", "", ""], [1, 117, "F20", 78, "F20", 131, "VK_F20", "", ""], [1, 118, "F21", 79, "F21", 132, "VK_F21", "", ""], [1, 119, "F22", 80, "F22", 133, "VK_F22", "", ""], [1, 120, "F23", 81, "F23", 134, "VK_F23", "", ""], [1, 121, "F24", 82, "F24", 135, "VK_F24", "", ""], [1, 122, "Open", 0, "", 0, "", "", ""], [1, 123, "Help", 0, "", 0, "", "", ""], [1, 124, "Select", 0, "", 0, "", "", ""], [1, 125, "Again", 0, "", 0, "", "", ""], [1, 126, "Undo", 0, "", 0, "", "", ""], [1, 127, "Cut", 0, "", 0, "", "", ""], [1, 128, "Copy", 0, "", 0, "", "", ""], [1, 129, "Paste", 0, "", 0, "", "", ""], [1, 130, "Find", 0, "", 0, "", "", ""], [1, 131, "AudioVolumeMute", 117, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", "", ""], [1, 132, "AudioVolumeUp", 118, "AudioVolumeUp", 175, "VK_VOLUME_UP", "", ""], [1, 133, "AudioVolumeDown", 119, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", "", ""], [1, 134, "NumpadComma", 110, "NumPad_Separator", 108, "VK_SEPARATOR", "", ""], [0, 135, "IntlRo", 115, "ABNT_C1", 193, "VK_ABNT_C1", "", ""], [1, 136, "KanaMode", 0, "", 0, "", "", ""], [0, 137, "IntlYen", 0, "", 0, "", "", ""], [1, 138, "Convert", 0, "", 0, "", "", ""], [1, 139, "NonConvert", 0, "", 0, "", "", ""], [1, 140, "Lang1", 0, "", 0, "", "", ""], [1, 141, "Lang2", 0, "", 0, "", "", ""], [1, 142, "Lang3", 0, "", 0, "", "", ""], [1, 143, "Lang4", 0, "", 0, "", "", ""], [1, 144, "Lang5", 0, "", 0, "", "", ""], [1, 145, "Abort", 0, "", 0, "", "", ""], [1, 146, "Props", 0, "", 0, "", "", ""], [1, 147, "NumpadParenLeft", 0, "", 0, "", "", ""], [1, 148, "NumpadParenRight", 0, "", 0, "", "", ""], [1, 149, "NumpadBackspace", 0, "", 0, "", "", ""], [1, 150, "NumpadMemoryStore", 0, "", 0, "", "", ""], [1, 151, "NumpadMemoryRecall", 0, "", 0, "", "", ""], [1, 152, "NumpadMemoryClear", 0, "", 0, "", "", ""], [1, 153, "NumpadMemoryAdd", 0, "", 0, "", "", ""], [1, 154, "NumpadMemorySubtract", 0, "", 0, "", "", ""], [1, 155, "NumpadClear", 131, "Clear", 12, "VK_CLEAR", "", ""], [1, 156, "NumpadClearEntry", 0, "", 0, "", "", ""], [1, 0, "", 5, "Ctrl", 17, "VK_CONTROL", "", ""], [1, 0, "", 4, "Shift", 16, "VK_SHIFT", "", ""], [1, 0, "", 6, "Alt", 18, "VK_MENU", "", ""], [1, 0, "", 57, "Meta", 91, "VK_COMMAND", "", ""], [1, 157, "ControlLeft", 5, "", 0, "VK_LCONTROL", "", ""], [1, 158, "ShiftLeft", 4, "", 0, "VK_LSHIFT", "", ""], [1, 159, "AltLeft", 6, "", 0, "VK_LMENU", "", ""], [1, 160, "MetaLeft", 57, "", 0, "VK_LWIN", "", ""], [1, 161, "ControlRight", 5, "", 0, "VK_RCONTROL", "", ""], [1, 162, "ShiftRight", 4, "", 0, "VK_RSHIFT", "", ""], [1, 163, "AltRight", 6, "", 0, "VK_RMENU", "", ""], [1, 164, "MetaRight", 57, "", 0, "VK_RWIN", "", ""], [1, 165, "BrightnessUp", 0, "", 0, "", "", ""], [1, 166, "BrightnessDown", 0, "", 0, "", "", ""], [1, 167, "MediaPlay", 0, "", 0, "", "", ""], [1, 168, "MediaRecord", 0, "", 0, "", "", ""], [1, 169, "MediaFastForward", 0, "", 0, "", "", ""], [1, 170, "MediaRewind", 0, "", 0, "", "", ""], [1, 171, "MediaTrackNext", 124, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", "", ""], [1, 172, "MediaTrackPrevious", 125, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", "", ""], [1, 173, "MediaStop", 126, "MediaStop", 178, "VK_MEDIA_STOP", "", ""], [1, 174, "Eject", 0, "", 0, "", "", ""], [1, 175, "MediaPlayPause", 127, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", "", ""], [1, 176, "MediaSelect", 128, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", "", ""], [1, 177, "LaunchMail", 129, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", "", ""], [1, 178, "LaunchApp2", 130, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", "", ""], [1, 179, "LaunchApp1", 0, "", 0, "VK_MEDIA_LAUNCH_APP1", "", ""], [1, 180, "SelectTask", 0, "", 0, "", "", ""], [1, 181, "LaunchScreenSaver", 0, "", 0, "", "", ""], [1, 182, "BrowserSearch", 120, "BrowserSearch", 170, "VK_BROWSER_SEARCH", "", ""], [1, 183, "BrowserHome", 121, "BrowserHome", 172, "VK_BROWSER_HOME", "", ""], [1, 184, "BrowserBack", 122, "BrowserBack", 166, "VK_BROWSER_BACK", "", ""], [1, 185, "BrowserForward", 123, "BrowserForward", 167, "VK_BROWSER_FORWARD", "", ""], [1, 186, "BrowserStop", 0, "", 0, "VK_BROWSER_STOP", "", ""], [1, 187, "BrowserRefresh", 0, "", 0, "VK_BROWSER_REFRESH", "", ""], [1, 188, "BrowserFavorites", 0, "", 0, "VK_BROWSER_FAVORITES", "", ""], [1, 189, "ZoomToggle", 0, "", 0, "", "", ""], [1, 190, "MailReply", 0, "", 0, "", "", ""], [1, 191, "MailForward", 0, "", 0, "", "", ""], [1, 192, "MailSend", 0, "", 0, "", "", ""], [1, 0, "", 114, "KeyInComposition", 229, "", "", ""], [1, 0, "", 116, "ABNT_C2", 194, "VK_ABNT_C2", "", ""], [1, 0, "", 96, "OEM_8", 223, "VK_OEM_8", "", ""], [1, 0, "", 0, "", 0, "VK_KANA", "", ""], [1, 0, "", 0, "", 0, "VK_HANGUL", "", ""], [1, 0, "", 0, "", 0, "VK_JUNJA", "", ""], [1, 0, "", 0, "", 0, "VK_FINAL", "", ""], [1, 0, "", 0, "", 0, "VK_HANJA", "", ""], [1, 0, "", 0, "", 0, "VK_KANJI", "", ""], [1, 0, "", 0, "", 0, "VK_CONVERT", "", ""], [1, 0, "", 0, "", 0, "VK_NONCONVERT", "", ""], [1, 0, "", 0, "", 0, "VK_ACCEPT", "", ""], [1, 0, "", 0, "", 0, "VK_MODECHANGE", "", ""], [1, 0, "", 0, "", 0, "VK_SELECT", "", ""], [1, 0, "", 0, "", 0, "VK_PRINT", "", ""], [1, 0, "", 0, "", 0, "VK_EXECUTE", "", ""], [1, 0, "", 0, "", 0, "VK_SNAPSHOT", "", ""], [1, 0, "", 0, "", 0, "VK_HELP", "", ""], [1, 0, "", 0, "", 0, "VK_APPS", "", ""], [1, 0, "", 0, "", 0, "VK_PROCESSKEY", "", ""], [1, 0, "", 0, "", 0, "VK_PACKET", "", ""], [1, 0, "", 0, "", 0, "VK_DBE_SBCSCHAR", "", ""], [1, 0, "", 0, "", 0, "VK_DBE_DBCSCHAR", "", ""], [1, 0, "", 0, "", 0, "VK_ATTN", "", ""], [1, 0, "", 0, "", 0, "VK_CRSEL", "", ""], [1, 0, "", 0, "", 0, "VK_EXSEL", "", ""], [1, 0, "", 0, "", 0, "VK_EREOF", "", ""], [1, 0, "", 0, "", 0, "VK_PLAY", "", ""], [1, 0, "", 0, "", 0, "VK_ZOOM", "", ""], [1, 0, "", 0, "", 0, "VK_NONAME", "", ""], [1, 0, "", 0, "", 0, "VK_PA1", "", ""], [1, 0, "", 0, "", 0, "VK_OEM_CLEAR", "", ""]], i = [], s = [];
  for (const n of t) {
    const [r, o, a, c, h, d, u, f, p] = n;
    if (s[o] || (s[o] = true, lf[o] = a, cf[a] = o, hf[a.toLowerCase()] = o, r && (oc[o] = c, c !== 0 && c !== 3 && c !== 5 && c !== 4 && c !== 6 && c !== 57 && (Zr[c] = o))), !i[c]) {
      if (i[c] = true, !h) throw new Error(`String representation missing for key code ${c} around scan code ${a}`);
      Tn.define(c, h), Yr.define(c, f || h), Xr.define(c, p || f || h);
    }
    d && (rc[d] = c), u && (af[u] = c);
  }
  Zr[3] = 46;
})();
var xn;
((e) => {
  function t(a) {
    return Tn.keyCodeToStr(a);
  }
  e.toString = t;
  function i(a) {
    return Tn.strToKeyCode(a);
  }
  e.fromString = i;
  function s(a) {
    return Yr.keyCodeToStr(a);
  }
  e.toUserSettingsUS = s;
  function n(a) {
    return Xr.keyCodeToStr(a);
  }
  e.toUserSettingsGeneral = n;
  function r(a) {
    return Yr.strToKeyCode(a) || Xr.strToKeyCode(a);
  }
  e.fromUserSettings = r;
  function o(a) {
    if (a >= 98 && a <= 113) return null;
    switch (a) {
      case 16:
        return "Up";
      case 18:
        return "Down";
      case 15:
        return "Left";
      case 17:
        return "Right";
    }
    return Tn.keyCodeToStr(a);
  }
  e.toElectronAccelerator = o;
})(xn || (xn = {}));
var nv = 2091, rv = 2096, df = class Mu {
  constructor(t, i, s, n, r) {
    this.ctrlKey = t, this.shiftKey = i, this.altKey = s, this.metaKey = n, this.keyCode = r;
  }
  equals(t) {
    return t instanceof Mu && this.ctrlKey === t.ctrlKey && this.shiftKey === t.shiftKey && this.altKey === t.altKey && this.metaKey === t.metaKey && this.keyCode === t.keyCode;
  }
  getHashCode() {
    const t = this.ctrlKey ? "1" : "0", i = this.shiftKey ? "1" : "0", s = this.altKey ? "1" : "0", n = this.metaKey ? "1" : "0";
    return `K${t}${i}${s}${n}${this.keyCode}`;
  }
  isModifierKey() {
    return this.keyCode === 0 || this.keyCode === 5 || this.keyCode === 57 || this.keyCode === 6 || this.keyCode === 4;
  }
  toKeybinding() {
    return new uf([this]);
  }
  isDuplicateModifierCase() {
    return this.ctrlKey && this.keyCode === 5 || this.shiftKey && this.keyCode === 4 || this.altKey && this.keyCode === 6 || this.metaKey && this.keyCode === 57;
  }
}, uf = class {
  constructor(e) {
    if (e.length === 0) throw n1("chords");
    this.chords = e;
  }
  getHashCode() {
    let e = "";
    for (let t = 0, i = this.chords.length; t < i; t++) t !== 0 && (e += ";"), e += this.chords[t].getHashCode();
    return e;
  }
  equals(e) {
    if (e === null || this.chords.length !== e.chords.length) return false;
    for (let t = 0; t < this.chords.length; t++) if (!this.chords[t].equals(e.chords[t])) return false;
    return true;
  }
};
function ff(e) {
  if (e.charCode) {
    const i = String.fromCharCode(e.charCode).toUpperCase();
    return xn.fromString(i);
  }
  const t = e.keyCode;
  if (t === 3) return 7;
  if (yn) switch (t) {
    case 59:
      return 85;
    case 60:
      if (ic) return 97;
      break;
    case 61:
      return 86;
    case 107:
      return 109;
    case 109:
      return 111;
    case 173:
      return 88;
    case 224:
      if (Pe) return 57;
      break;
  }
  else if (wn) {
    if (Pe && t === 93) return 57;
    if (!Pe && t === 92) return 57;
  }
  return rc[t] || 0;
}
var pf = Pe ? 256 : 2048, gf = 512, mf = 1024, vf = Pe ? 2048 : 256, Oe = class {
  constructor(e) {
    this._standardKeyboardEventBrand = true;
    const t = e;
    this.browserEvent = t, this.target = t.target, this.ctrlKey = t.ctrlKey, this.shiftKey = t.shiftKey, this.altKey = t.altKey, this.metaKey = t.metaKey, this.altGraphKey = t.getModifierState?.("AltGraph"), this.keyCode = ff(t), this.code = t.code, this.ctrlKey = this.ctrlKey || this.keyCode === 5, this.altKey = this.altKey || this.keyCode === 6, this.shiftKey = this.shiftKey || this.keyCode === 4, this.metaKey = this.metaKey || this.keyCode === 57, this._asKeybinding = this._computeKeybinding(), this._asKeyCodeChord = this._computeKeyCodeChord();
  }
  preventDefault() {
    this.browserEvent && this.browserEvent.preventDefault && this.browserEvent.preventDefault();
  }
  stopPropagation() {
    this.browserEvent && this.browserEvent.stopPropagation && this.browserEvent.stopPropagation();
  }
  toKeyCodeChord() {
    return this._asKeyCodeChord;
  }
  equals(e) {
    return this._asKeybinding === e;
  }
  _computeKeybinding() {
    let e = 0;
    this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (e = this.keyCode);
    let t = 0;
    return this.ctrlKey && (t |= pf), this.altKey && (t |= gf), this.shiftKey && (t |= mf), this.metaKey && (t |= vf), t |= e, t;
  }
  _computeKeyCodeChord() {
    let e = 0;
    return this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (e = this.keyCode), new df(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, e);
  }
}, ac = /* @__PURE__ */ new WeakMap();
function bf(e) {
  if (!e.parent || e.parent === e) return null;
  try {
    const t = e.location, i = e.parent.location;
    if (t.origin !== "null" && i.origin !== "null" && t.origin !== i.origin) return null;
  } catch {
    return null;
  }
  return e.parent;
}
var yf = class {
  static getSameOriginWindowChain(e) {
    let t = ac.get(e);
    if (!t) {
      t = [], ac.set(e, t);
      let i = e, s;
      do
        s = bf(i), s ? t.push({ window: new WeakRef(i), iframeElement: i.frameElement || null }) : t.push({ window: new WeakRef(i), iframeElement: null }), i = s;
      while (i);
    }
    return t.slice(0);
  }
  static getPositionOfChildWindowRelativeToAncestorWindow(e, t) {
    if (!t || e === t) return { top: 0, left: 0 };
    let i = 0, s = 0;
    const n = this.getSameOriginWindowChain(e);
    for (const r of n) {
      const o = r.window.deref();
      if (i += o?.scrollY ?? 0, s += o?.scrollX ?? 0, o === t || !r.iframeElement) break;
      const a = r.iframeElement.getBoundingClientRect();
      i += a.top, s += a.left;
    }
    return { top: i, left: s };
  }
}, ri = class {
  constructor(e, t) {
    this.timestamp = Date.now(), this.browserEvent = t, this.leftButton = t.button === 0, this.middleButton = t.button === 1, this.rightButton = t.button === 2, this.buttons = t.buttons, this.target = t.target, this.detail = t.detail || 1, t.type === "dblclick" && (this.detail = 2), this.ctrlKey = t.ctrlKey, this.shiftKey = t.shiftKey, this.altKey = t.altKey, this.metaKey = t.metaKey, typeof t.pageX == "number" ? (this.posx = t.pageX, this.posy = t.pageY) : (this.posx = t.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft, this.posy = t.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop);
    const i = yf.getPositionOfChildWindowRelativeToAncestorWindow(e, t.view);
    this.posx -= i.left, this.posy -= i.top;
  }
  preventDefault() {
    this.browserEvent.preventDefault();
  }
  stopPropagation() {
    this.browserEvent.stopPropagation();
  }
}, zi = class {
  constructor(e, t = 0, i = 0) {
    this.browserEvent = e || null, this.target = e ? e.target || e.targetNode || e.srcElement : null, this.deltaY = i, this.deltaX = t;
    let s = false;
    if (Gr) {
      const n = navigator.userAgent.match(/Chrome\/(\d+)/);
      s = (n ? parseInt(n[1]) : 123) <= 122;
    }
    if (e) {
      const n = e, r = e, o = e.view?.devicePixelRatio || 1;
      if (typeof n.wheelDeltaY < "u") s ? this.deltaY = n.wheelDeltaY / (120 * o) : this.deltaY = n.wheelDeltaY / 120;
      else if (typeof r.VERTICAL_AXIS < "u" && r.axis === r.VERTICAL_AXIS) this.deltaY = -r.detail / 3;
      else if (e.type === "wheel") {
        const a = e;
        a.deltaMode === a.DOM_DELTA_LINE ? yn && !Pe ? this.deltaY = -e.deltaY / 3 : this.deltaY = -e.deltaY : this.deltaY = -e.deltaY / 40;
      }
      if (typeof n.wheelDeltaX < "u") Ql && xt ? this.deltaX = -(n.wheelDeltaX / 120) : s ? this.deltaX = n.wheelDeltaX / (120 * o) : this.deltaX = n.wheelDeltaX / 120;
      else if (typeof r.HORIZONTAL_AXIS < "u" && r.axis === r.HORIZONTAL_AXIS) this.deltaX = -e.detail / 3;
      else if (e.type === "wheel") {
        const a = e;
        a.deltaMode === a.DOM_DELTA_LINE ? yn && !Pe ? this.deltaX = -e.deltaX / 3 : this.deltaX = -e.deltaX : this.deltaX = -e.deltaX / 40;
      }
      this.deltaY === 0 && this.deltaX === 0 && e.wheelDelta && (s ? this.deltaY = e.wheelDelta / (120 * o) : this.deltaY = e.wheelDelta / 120);
    }
  }
  preventDefault() {
    this.browserEvent?.preventDefault();
  }
  stopPropagation() {
    this.browserEvent?.stopPropagation();
  }
}, lc = Object.freeze(function(e, t) {
  const i = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(i);
  } };
}), Ss;
((e) => {
  function t(i) {
    return i === e.None || i === e.Cancelled || i instanceof An ? true : !i || typeof i != "object" ? false : typeof i.isCancellationRequested == "boolean" && typeof i.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: A.None }), e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: lc });
})(Ss || (Ss = {}));
var An = class {
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
    return this._isCancelled ? lc : (this._emitter || (this._emitter = new L()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}, cc = class {
  constructor(e) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new An()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof An && this._token.cancel() : this._token = Ss.Cancelled;
  }
  dispose(e = false) {
    e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof An && this._token.dispose() : this._token = Ss.None;
  }
}, oi, Qr = globalThis.vscode;
if (typeof Qr < "u" && typeof Qr.process < "u") {
  const e = Qr.process;
  oi = { get platform() {
    return e.platform;
  }, get arch() {
    return e.arch;
  }, get env() {
    return e.env;
  }, cwd() {
    return e.cwd();
  } };
} else typeof process < "u" && typeof process?.versions?.node == "string" ? oi = { get platform() {
  return process.platform;
}, get arch() {
  return process.arch;
}, get env() {
  return process.env;
}, cwd() {
  return process.env.VSCODE_CWD || process.cwd();
} } : oi = { get platform() {
  return xt ? "win32" : Pe ? "darwin" : "linux";
}, get arch() {
}, get env() {
  return {};
}, cwd() {
  return "/";
} };
var Nn = oi.cwd, Jr = oi.env, wf = oi.platform, ov = oi.arch, _f = 65, Sf = 97, Cf = 90, Df = 122, ai = 46, Te = 47, je = 92, At = 58, Ef = 63, hc = class extends Error {
  constructor(e, t, i) {
    let s;
    typeof t == "string" && t.indexOf("not ") === 0 ? (s = "must not be", t = t.replace(/^not /, "")) : s = "must be";
    const n = e.indexOf(".") !== -1 ? "property" : "argument";
    let r = `The "${e}" ${n} ${s} of type ${t}`;
    r += `. Received type ${typeof i}`, super(r), this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function kf(e, t) {
  if (e === null || typeof e != "object") throw new hc(t, "Object", e);
}
function ye(e, t) {
  if (typeof e != "string") throw new hc(t, "string", e);
}
var Ye = wf === "win32";
function K(e) {
  return e === Te || e === je;
}
function eo(e) {
  return e === Te;
}
function Nt(e) {
  return e >= _f && e <= Cf || e >= Sf && e <= Df;
}
function In(e, t, i, s) {
  let n = "", r = 0, o = -1, a = 0, c = 0;
  for (let h = 0; h <= e.length; ++h) {
    if (h < e.length) c = e.charCodeAt(h);
    else {
      if (s(c)) break;
      c = Te;
    }
    if (s(c)) {
      if (!(o === h - 1 || a === 1)) if (a === 2) {
        if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== ai || n.charCodeAt(n.length - 2) !== ai) {
          if (n.length > 2) {
            const d = n.lastIndexOf(i);
            d === -1 ? (n = "", r = 0) : (n = n.slice(0, d), r = n.length - 1 - n.lastIndexOf(i)), o = h, a = 0;
            continue;
          } else if (n.length !== 0) {
            n = "", r = 0, o = h, a = 0;
            continue;
          }
        }
        t && (n += n.length > 0 ? `${i}..` : "..", r = 2);
      } else n.length > 0 ? n += `${i}${e.slice(o + 1, h)}` : n = e.slice(o + 1, h), r = h - o - 1;
      o = h, a = 0;
    } else c === ai && a !== -1 ? ++a : a = -1;
  }
  return n;
}
function Tf(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function dc(e, t) {
  kf(t, "pathObject");
  const i = t.dir || t.root, s = t.base || `${t.name || ""}${Tf(t.ext)}`;
  return i ? i === t.root ? `${i}${s}` : `${i}${e}${s}` : s;
}
var Se = { resolve(...e) {
  let t = "", i = "", s = false;
  for (let n = e.length - 1; n >= -1; n--) {
    let r;
    if (n >= 0) {
      if (r = e[n], ye(r, `paths[${n}]`), r.length === 0) continue;
    } else t.length === 0 ? r = Nn() : (r = Jr[`=${t}`] || Nn(), (r === void 0 || r.slice(0, 2).toLowerCase() !== t.toLowerCase() && r.charCodeAt(2) === je) && (r = `${t}\\`));
    const o = r.length;
    let a = 0, c = "", h = false;
    const d = r.charCodeAt(0);
    if (o === 1) K(d) && (a = 1, h = true);
    else if (K(d)) if (h = true, K(r.charCodeAt(1))) {
      let u = 2, f = u;
      for (; u < o && !K(r.charCodeAt(u)); ) u++;
      if (u < o && u !== f) {
        const p = r.slice(f, u);
        for (f = u; u < o && K(r.charCodeAt(u)); ) u++;
        if (u < o && u !== f) {
          for (f = u; u < o && !K(r.charCodeAt(u)); ) u++;
          (u === o || u !== f) && (c = `\\\\${p}\\${r.slice(f, u)}`, a = u);
        }
      }
    } else a = 1;
    else Nt(d) && r.charCodeAt(1) === At && (c = r.slice(0, 2), a = 2, o > 2 && K(r.charCodeAt(2)) && (h = true, a = 3));
    if (c.length > 0) if (t.length > 0) {
      if (c.toLowerCase() !== t.toLowerCase()) continue;
    } else t = c;
    if (s) {
      if (t.length > 0) break;
    } else if (i = `${r.slice(a)}\\${i}`, s = h, h && t.length > 0) break;
  }
  return i = In(i, !s, "\\", K), s ? `${t}\\${i}` : `${t}${i}` || ".";
}, normalize(e) {
  ye(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let i = 0, s, n = false;
  const r = e.charCodeAt(0);
  if (t === 1) return eo(r) ? "\\" : e;
  if (K(r)) if (n = true, K(e.charCodeAt(1))) {
    let a = 2, c = a;
    for (; a < t && !K(e.charCodeAt(a)); ) a++;
    if (a < t && a !== c) {
      const h = e.slice(c, a);
      for (c = a; a < t && K(e.charCodeAt(a)); ) a++;
      if (a < t && a !== c) {
        for (c = a; a < t && !K(e.charCodeAt(a)); ) a++;
        if (a === t) return `\\\\${h}\\${e.slice(c)}\\`;
        a !== c && (s = `\\\\${h}\\${e.slice(c, a)}`, i = a);
      }
    }
  } else i = 1;
  else Nt(r) && e.charCodeAt(1) === At && (s = e.slice(0, 2), i = 2, t > 2 && K(e.charCodeAt(2)) && (n = true, i = 3));
  let o = i < t ? In(e.slice(i), !n, "\\", K) : "";
  if (o.length === 0 && !n && (o = "."), o.length > 0 && K(e.charCodeAt(t - 1)) && (o += "\\"), !n && s === void 0 && e.includes(":")) {
    if (o.length >= 2 && Nt(o.charCodeAt(0)) && o.charCodeAt(1) === At) return `.\\${o}`;
    let a = e.indexOf(":");
    do
      if (a === t - 1 || K(e.charCodeAt(a + 1))) return `.\\${o}`;
    while ((a = e.indexOf(":", a + 1)) !== -1);
  }
  return s === void 0 ? n ? `\\${o}` : o : n ? `${s}\\${o}` : `${s}${o}`;
}, isAbsolute(e) {
  ye(e, "path");
  const t = e.length;
  if (t === 0) return false;
  const i = e.charCodeAt(0);
  return K(i) || t > 2 && Nt(i) && e.charCodeAt(1) === At && K(e.charCodeAt(2));
}, join(...e) {
  if (e.length === 0) return ".";
  let t, i;
  for (let r = 0; r < e.length; ++r) {
    const o = e[r];
    ye(o, "path"), o.length > 0 && (t === void 0 ? t = i = o : t += `\\${o}`);
  }
  if (t === void 0) return ".";
  let s = true, n = 0;
  if (typeof i == "string" && K(i.charCodeAt(0))) {
    ++n;
    const r = i.length;
    r > 1 && K(i.charCodeAt(1)) && (++n, r > 2 && (K(i.charCodeAt(2)) ? ++n : s = false));
  }
  if (s) {
    for (; n < t.length && K(t.charCodeAt(n)); ) n++;
    n >= 2 && (t = `\\${t.slice(n)}`);
  }
  return Se.normalize(t);
}, relative(e, t) {
  if (ye(e, "from"), ye(t, "to"), e === t) return "";
  const i = Se.resolve(e), s = Se.resolve(t);
  if (i === s || (e = i.toLowerCase(), t = s.toLowerCase(), e === t)) return "";
  if (i.length !== e.length || s.length !== t.length) {
    const m = i.split("\\"), _ = s.split("\\");
    m[m.length - 1] === "" && m.pop(), _[_.length - 1] === "" && _.pop();
    const v = m.length, y = _.length, C = v < y ? v : y;
    let D;
    for (D = 0; D < C && m[D].toLowerCase() === _[D].toLowerCase(); D++) ;
    return D === 0 ? s : D === C ? y > C ? _.slice(D).join("\\") : v > C ? "..\\".repeat(v - 1 - D) + ".." : "" : "..\\".repeat(v - D) + _.slice(D).join("\\");
  }
  let n = 0;
  for (; n < e.length && e.charCodeAt(n) === je; ) n++;
  let r = e.length;
  for (; r - 1 > n && e.charCodeAt(r - 1) === je; ) r--;
  const o = r - n;
  let a = 0;
  for (; a < t.length && t.charCodeAt(a) === je; ) a++;
  let c = t.length;
  for (; c - 1 > a && t.charCodeAt(c - 1) === je; ) c--;
  const h = c - a, d = o < h ? o : h;
  let u = -1, f = 0;
  for (; f < d; f++) {
    const m = e.charCodeAt(n + f);
    if (m !== t.charCodeAt(a + f)) break;
    m === je && (u = f);
  }
  if (f !== d) {
    if (u === -1) return s;
  } else {
    if (h > d) {
      if (t.charCodeAt(a + f) === je) return s.slice(a + f + 1);
      if (f === 2) return s.slice(a + f);
    }
    o > d && (e.charCodeAt(n + f) === je ? u = f : f === 2 && (u = 3)), u === -1 && (u = 0);
  }
  let p = "";
  for (f = n + u + 1; f <= r; ++f) (f === r || e.charCodeAt(f) === je) && (p += p.length === 0 ? ".." : "\\..");
  return a += u, p.length > 0 ? `${p}${s.slice(a, c)}` : (s.charCodeAt(a) === je && ++a, s.slice(a, c));
}, toNamespacedPath(e) {
  if (typeof e != "string" || e.length === 0) return e;
  const t = Se.resolve(e);
  if (t.length <= 2) return e;
  if (t.charCodeAt(0) === je) {
    if (t.charCodeAt(1) === je) {
      const i = t.charCodeAt(2);
      if (i !== Ef && i !== ai) return `\\\\?\\UNC\\${t.slice(2)}`;
    }
  } else if (Nt(t.charCodeAt(0)) && t.charCodeAt(1) === At && t.charCodeAt(2) === je) return `\\\\?\\${t}`;
  return t;
}, dirname(e) {
  ye(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let i = -1, s = 0;
  const n = e.charCodeAt(0);
  if (t === 1) return K(n) ? e : ".";
  if (K(n)) {
    if (i = s = 1, K(e.charCodeAt(1))) {
      let a = 2, c = a;
      for (; a < t && !K(e.charCodeAt(a)); ) a++;
      if (a < t && a !== c) {
        for (c = a; a < t && K(e.charCodeAt(a)); ) a++;
        if (a < t && a !== c) {
          for (c = a; a < t && !K(e.charCodeAt(a)); ) a++;
          if (a === t) return e;
          a !== c && (i = s = a + 1);
        }
      }
    }
  } else Nt(n) && e.charCodeAt(1) === At && (i = t > 2 && K(e.charCodeAt(2)) ? 3 : 2, s = i);
  let r = -1, o = true;
  for (let a = t - 1; a >= s; --a) if (K(e.charCodeAt(a))) {
    if (!o) {
      r = a;
      break;
    }
  } else o = false;
  if (r === -1) {
    if (i === -1) return ".";
    r = i;
  }
  return e.slice(0, r);
}, basename(e, t) {
  t !== void 0 && ye(t, "suffix"), ye(e, "path");
  let i = 0, s = -1, n = true, r;
  if (e.length >= 2 && Nt(e.charCodeAt(0)) && e.charCodeAt(1) === At && (i = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (r = e.length - 1; r >= i; --r) {
      const c = e.charCodeAt(r);
      if (K(c)) {
        if (!n) {
          i = r + 1;
          break;
        }
      } else a === -1 && (n = false, a = r + 1), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (s = r) : (o = -1, s = a));
    }
    return i === s ? s = a : s === -1 && (s = e.length), e.slice(i, s);
  }
  for (r = e.length - 1; r >= i; --r) if (K(e.charCodeAt(r))) {
    if (!n) {
      i = r + 1;
      break;
    }
  } else s === -1 && (n = false, s = r + 1);
  return s === -1 ? "" : e.slice(i, s);
}, extname(e) {
  ye(e, "path");
  let t = 0, i = -1, s = 0, n = -1, r = true, o = 0;
  e.length >= 2 && e.charCodeAt(1) === At && Nt(e.charCodeAt(0)) && (t = s = 2);
  for (let a = e.length - 1; a >= t; --a) {
    const c = e.charCodeAt(a);
    if (K(c)) {
      if (!r) {
        s = a + 1;
        break;
      }
      continue;
    }
    n === -1 && (r = false, n = a + 1), c === ai ? i === -1 ? i = a : o !== 1 && (o = 1) : i !== -1 && (o = -1);
  }
  return i === -1 || n === -1 || o === 0 || o === 1 && i === n - 1 && i === s + 1 ? "" : e.slice(i, n);
}, format: dc.bind(null, "\\"), parse(e) {
  ye(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const i = e.length;
  let s = 0, n = e.charCodeAt(0);
  if (i === 1) return K(n) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
  if (K(n)) {
    if (s = 1, K(e.charCodeAt(1))) {
      let u = 2, f = u;
      for (; u < i && !K(e.charCodeAt(u)); ) u++;
      if (u < i && u !== f) {
        for (f = u; u < i && K(e.charCodeAt(u)); ) u++;
        if (u < i && u !== f) {
          for (f = u; u < i && !K(e.charCodeAt(u)); ) u++;
          u === i ? s = u : u !== f && (s = u + 1);
        }
      }
    }
  } else if (Nt(n) && e.charCodeAt(1) === At) {
    if (i <= 2) return t.root = t.dir = e, t;
    if (s = 2, K(e.charCodeAt(2))) {
      if (i === 3) return t.root = t.dir = e, t;
      s = 3;
    }
  }
  s > 0 && (t.root = e.slice(0, s));
  let r = -1, o = s, a = -1, c = true, h = e.length - 1, d = 0;
  for (; h >= s; --h) {
    if (n = e.charCodeAt(h), K(n)) {
      if (!c) {
        o = h + 1;
        break;
      }
      continue;
    }
    a === -1 && (c = false, a = h + 1), n === ai ? r === -1 ? r = h : d !== 1 && (d = 1) : r !== -1 && (d = -1);
  }
  return a !== -1 && (r === -1 || d === 0 || d === 1 && r === a - 1 && r === o + 1 ? t.base = t.name = e.slice(o, a) : (t.name = e.slice(o, r), t.base = e.slice(o, a), t.ext = e.slice(r, a))), o > 0 && o !== s ? t.dir = e.slice(0, o - 1) : t.dir = t.root, t;
}, sep: "\\", delimiter: ";", win32: null, posix: null }, xf = (() => {
  if (Ye) {
    const e = /\\/g;
    return () => {
      const t = Nn().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => Nn();
})(), se = { resolve(...e) {
  let t = "", i = false;
  for (let s = e.length - 1; s >= 0 && !i; s--) {
    const n = e[s];
    ye(n, `paths[${s}]`), n.length !== 0 && (t = `${n}/${t}`, i = n.charCodeAt(0) === Te);
  }
  if (!i) {
    const s = xf();
    t = `${s}/${t}`, i = s.charCodeAt(0) === Te;
  }
  return t = In(t, !i, "/", eo), i ? `/${t}` : t.length > 0 ? t : ".";
}, normalize(e) {
  if (ye(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === Te, i = e.charCodeAt(e.length - 1) === Te;
  return e = In(e, !t, "/", eo), e.length === 0 ? t ? "/" : i ? "./" : "." : (i && (e += "/"), t ? `/${e}` : e);
}, isAbsolute(e) {
  return ye(e, "path"), e.length > 0 && e.charCodeAt(0) === Te;
}, join(...e) {
  if (e.length === 0) return ".";
  const t = [];
  for (let i = 0; i < e.length; ++i) {
    const s = e[i];
    ye(s, "path"), s.length > 0 && t.push(s);
  }
  return t.length === 0 ? "." : se.normalize(t.join("/"));
}, relative(e, t) {
  if (ye(e, "from"), ye(t, "to"), e === t || (e = se.resolve(e), t = se.resolve(t), e === t)) return "";
  const i = 1, s = e.length, n = s - i, r = 1, o = t.length - r, a = n < o ? n : o;
  let c = -1, h = 0;
  for (; h < a; h++) {
    const u = e.charCodeAt(i + h);
    if (u !== t.charCodeAt(r + h)) break;
    u === Te && (c = h);
  }
  if (h === a) if (o > a) {
    if (t.charCodeAt(r + h) === Te) return t.slice(r + h + 1);
    if (h === 0) return t.slice(r + h);
  } else n > a && (e.charCodeAt(i + h) === Te ? c = h : h === 0 && (c = 0));
  let d = "";
  for (h = i + c + 1; h <= s; ++h) (h === s || e.charCodeAt(h) === Te) && (d += d.length === 0 ? ".." : "/..");
  return `${d}${t.slice(r + c)}`;
}, toNamespacedPath(e) {
  return e;
}, dirname(e) {
  if (ye(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === Te;
  let i = -1, s = true;
  for (let n = e.length - 1; n >= 1; --n) if (e.charCodeAt(n) === Te) {
    if (!s) {
      i = n;
      break;
    }
  } else s = false;
  return i === -1 ? t ? "/" : "." : t && i === 1 ? "//" : e.slice(0, i);
}, basename(e, t) {
  t !== void 0 && ye(t, "suffix"), ye(e, "path");
  let i = 0, s = -1, n = true, r;
  if (t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (r = e.length - 1; r >= 0; --r) {
      const c = e.charCodeAt(r);
      if (c === Te) {
        if (!n) {
          i = r + 1;
          break;
        }
      } else a === -1 && (n = false, a = r + 1), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (s = r) : (o = -1, s = a));
    }
    return i === s ? s = a : s === -1 && (s = e.length), e.slice(i, s);
  }
  for (r = e.length - 1; r >= 0; --r) if (e.charCodeAt(r) === Te) {
    if (!n) {
      i = r + 1;
      break;
    }
  } else s === -1 && (n = false, s = r + 1);
  return s === -1 ? "" : e.slice(i, s);
}, extname(e) {
  ye(e, "path");
  let t = -1, i = 0, s = -1, n = true, r = 0;
  for (let o = e.length - 1; o >= 0; --o) {
    const a = e[o];
    if (a === "/") {
      if (!n) {
        i = o + 1;
        break;
      }
      continue;
    }
    s === -1 && (n = false, s = o + 1), a === "." ? t === -1 ? t = o : r !== 1 && (r = 1) : t !== -1 && (r = -1);
  }
  return t === -1 || s === -1 || r === 0 || r === 1 && t === s - 1 && t === i + 1 ? "" : e.slice(t, s);
}, format: dc.bind(null, "/"), parse(e) {
  ye(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const i = e.charCodeAt(0) === Te;
  let s;
  i ? (t.root = "/", s = 1) : s = 0;
  let n = -1, r = 0, o = -1, a = true, c = e.length - 1, h = 0;
  for (; c >= s; --c) {
    const d = e.charCodeAt(c);
    if (d === Te) {
      if (!a) {
        r = c + 1;
        break;
      }
      continue;
    }
    o === -1 && (a = false, o = c + 1), d === ai ? n === -1 ? n = c : h !== 1 && (h = 1) : n !== -1 && (h = -1);
  }
  if (o !== -1) {
    const d = r === 0 && i ? 1 : r;
    n === -1 || h === 0 || h === 1 && n === o - 1 && n === r + 1 ? t.base = t.name = e.slice(d, o) : (t.name = e.slice(d, n), t.base = e.slice(d, o), t.ext = e.slice(n, o));
  }
  return r > 0 ? t.dir = e.slice(0, r - 1) : i && (t.dir = "/"), t;
}, sep: "/", delimiter: ":", win32: null, posix: null };
se.win32 = Se.win32 = Se, se.posix = Se.posix = se;
var Af = Ye ? Se.normalize : se.normalize, av = Ye ? Se.isAbsolute : se.isAbsolute, Nf = Ye ? Se.join : se.join, If = Ye ? Se.resolve : se.resolve, Lf = Ye ? Se.relative : se.relative, Rf = Ye ? Se.dirname : se.dirname, lv = Ye ? Se.basename : se.basename, cv = Ye ? Se.extname : se.extname, hv = Ye ? Se.format : se.format, dv = Ye ? Se.parse : se.parse, uv = Ye ? Se.toNamespacedPath : se.toNamespacedPath, Ln = Ye ? Se.sep : se.sep, fv = Ye ? Se.delimiter : se.delimiter;
function Mf(e) {
  return e;
}
var Pf = class {
  constructor(e, t) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = Mf) : (this._fn = t, this._computeKey = e.getCacheKey);
  }
  get(e) {
    const t = this._computeKey(e);
    return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
  }
}, rt = class {
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
function Wi(e) {
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
function to(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function io(e, t, i = 0, s = e.length, n = 0, r = t.length) {
  for (; i < s && n < r; i++, n++) {
    const c = e.charCodeAt(i), h = t.charCodeAt(n);
    if (c < h) return -1;
    if (c > h) return 1;
  }
  const o = s - i, a = r - n;
  return o < a ? -1 : o > a ? 1 : 0;
}
function uc(e, t) {
  return Vi(e, t, 0, e.length, 0, t.length);
}
function Vi(e, t, i = 0, s = e.length, n = 0, r = t.length) {
  for (; i < s && n < r; i++, n++) {
    let c = e.charCodeAt(i), h = t.charCodeAt(n);
    if (c === h) continue;
    if (c >= 128 || h >= 128) return io(e.toLowerCase(), t.toLowerCase(), i, s, n, r);
    fc(c) && (c -= 32), fc(h) && (h -= 32);
    const d = c - h;
    if (d !== 0) return d;
  }
  const o = s - i, a = r - n;
  return o < a ? -1 : o > a ? 1 : 0;
}
function fc(e) {
  return e >= 97 && e <= 122;
}
function pc(e) {
  return e >= 65 && e <= 90;
}
function Of(e, t) {
  return e.length === t.length && Vi(e, t) === 0;
}
function Ff(e, t) {
  const i = t.length;
  return t.length > e.length ? false : Vi(e, t, 0, i) === 0;
}
function Bf(e) {
  return 55296 <= e && e <= 56319;
}
function gc(e) {
  return 56320 <= e && e <= 57343;
}
function Hf(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
function Uf(e) {
  return e >= 127462 && e <= 127487 || e === 8986 || e === 8987 || e === 9200 || e === 9203 || e >= 9728 && e <= 10175 || e === 11088 || e === 11093 || e >= 127744 && e <= 128591 || e >= 128640 && e <= 128764 || e >= 128992 && e <= 129008 || e >= 129280 && e <= 129535 || e >= 129648 && e <= 129782;
}
var $f = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, zf = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, Wf = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, pv = new RegExp("(?:" + [$f.source, zf.source, Wf.source].join("|") + ")", "g"), gv = "\uFEFF", Vf = class sn {
  static getInstance() {
    return sn._INSTANCE || (sn._INSTANCE = new sn()), sn._INSTANCE;
  }
  constructor() {
    this._data = Gf();
  }
  getGraphemeBreakType(t) {
    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
    if (t < 127) return 0;
    const i = this._data, s = i.length / 3;
    let n = 1;
    for (; n <= s; ) if (t < i[3 * n]) n = 2 * n;
    else if (t > i[3 * n + 1]) n = 2 * n + 1;
    else return i[3 * n + 2];
    return 0;
  }
};
Vf._INSTANCE = null;
function Gf() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var Gi = class Ga {
  constructor(t) {
    this.confusableDictionary = t;
  }
  static getInstance(t) {
    return Ga.cache.get(Array.from(t).join(","));
  }
  static getLocales() {
    return Ga._locales.value;
  }
  isAmbiguous(t) {
    return this.confusableDictionary.has(t);
  }
  containsAmbiguousCharacter(t) {
    for (let i = 0; i < t.length; i++) {
      const s = t.codePointAt(i);
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
Gi.ambiguousCharacterData = new rt(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), Gi.cache = new Pf((e) => {
  const t = e.split(",");
  function i(d) {
    const u = /* @__PURE__ */ new Map();
    for (let f = 0; f < d.length; f += 2) u.set(d[f], d[f + 1]);
    return u;
  }
  function s(d, u) {
    const f = new Map(d);
    for (const [p, m] of u) f.set(p, m);
    return f;
  }
  function n(d, u) {
    if (!d) return u;
    const f = /* @__PURE__ */ new Map();
    for (const [p, m] of d) u.has(p) && f.set(p, m);
    return f;
  }
  const r = Gi.ambiguousCharacterData.value;
  let o = t.filter((d) => !d.startsWith("_") && d in r);
  o.length === 0 && (o = ["_default"]);
  let a;
  for (const d of o) {
    const u = i(r[d]);
    a = n(a, u);
  }
  const c = i(r._common), h = s(c, a);
  return new Gi(h);
}), Gi._locales = new rt(() => Object.keys(Gi.ambiguousCharacterData.value).filter((e) => !e.startsWith("_")));
var qf = class nn {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(nn.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return nn.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let i = 0; i < t.length; i++) {
      const s = t.codePointAt(i);
      if (typeof s == "number" && (nn.isInvisibleCharacter(s) || s === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return nn.getData();
  }
};
qf._data = void 0;
function zt(e) {
  return e === 47 || e === 92;
}
function mc(e) {
  return e.replace(/[\\/]/g, se.sep);
}
function Kf(e) {
  return e.indexOf("/") === -1 && (e = mc(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function vc(e, t = se.sep) {
  if (!e) return "";
  const i = e.length, s = e.charCodeAt(0);
  if (zt(s)) {
    if (zt(e.charCodeAt(1)) && !zt(e.charCodeAt(2))) {
      let r = 3;
      const o = r;
      for (; r < i && !zt(e.charCodeAt(r)); r++) ;
      if (o !== r && !zt(e.charCodeAt(r + 1))) {
        for (r += 1; r < i; r++) if (zt(e.charCodeAt(r))) return e.slice(0, r + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (Zf(s) && e.charCodeAt(1) === 58) return zt(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let n = e.indexOf("://");
  if (n !== -1) {
    for (n += 3; n < i; n++) if (zt(e.charCodeAt(n))) return e.slice(0, n + 1);
  }
  return "";
}
function jf(e) {
  if (!xt || !e || e.length < 5) return false;
  let t = e.charCodeAt(0);
  if (t !== 92 || (t = e.charCodeAt(1), t !== 92)) return false;
  let i = 2;
  const s = i;
  for (; i < e.length && (t = e.charCodeAt(i), t !== 92); i++) ;
  return !(s === i || (t = e.charCodeAt(i + 1), isNaN(t) || t === 92));
}
function Yf(e, t, i) {
  return i === 0 ? true : e.charCodeAt(0) !== t.charCodeAt(0) ? false : i === 1 ? true : e.charCodeAt(i - 1) !== t.charCodeAt(i - 1) ? false : e.startsWith(t);
}
function Xf(e, t, i) {
  for (let s = 0; s < i; s++) {
    let n = e.charCodeAt(s), r = t.charCodeAt(s);
    if (n !== r) {
      if (n >= 128 || r >= 128) return Vi(e, t, s, i, s, i) === 0;
      if (n >= 97 && n <= 122 && (n -= 32), r >= 97 && r <= 122 && (r -= 32), n !== r) return false;
    }
  }
  return true;
}
function bc(e, t, i, s = Ln) {
  if (e === t) return true;
  if (!e || !t) return false;
  const n = e.length, r = t.length;
  if (r > n) return false;
  const o = s.charCodeAt(0), a = t.charCodeAt(r - 1) === o;
  if (r < n && !a && e.charCodeAt(r) !== o) return false;
  if (i) {
    if (!Xf(e, t, r)) return false;
  } else if (!Yf(e, t, r)) return false;
  return r === n || a ? true : e.charCodeAt(r) === o;
}
function Zf(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
var Cs = typeof Buffer < "u", Qf = new rt(() => new Uint8Array(256)), qi, so, Jf = 512 * 1024, li = null, no = false, yc = false, ep = 1 / 0, wc, tp = 1 / 0, _c;
function Sc(e, t) {
  if (_c && e.byteLength >= tp) try {
    _c({ buffer: e, byteLength: e.byteLength, source: t });
  } catch {
  }
}
var Je = class Fe {
  static alloc(t) {
    let i;
    return Cs ? i = new Fe(Buffer.allocUnsafe(t)) : i = new Fe(new Uint8Array(t)), Sc(i, "alloc"), i;
  }
  static wrap(t) {
    Cs && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength));
    const i = new Fe(t);
    return Sc(i, "wrap"), i;
  }
  static fromString(t, i) {
    return !(i?.dontUseNodeBuffer || false) && Cs ? new Fe(Buffer.from(t)) : (qi || (qi = new TextEncoder()), new Fe(qi.encode(t)));
  }
  static withPooledString(t, i) {
    if (Cs) return i(Fe.fromString(t));
    if (no) return yc || (yc = true, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), i(Fe.fromString(t));
    const s = t.length * 3;
    if (s > Jf) return i(Fe.fromString(t));
    if (qi || (qi = new TextEncoder()), !li || li.byteLength < s) {
      let r = li ? li.byteLength * 2 : 16384;
      for (; r < s; ) r *= 2;
      li = new Uint8Array(r);
    }
    const n = qi.encodeInto(t, li).written;
    no = true;
    try {
      return i(new Fe(li.subarray(0, n)));
    } finally {
      no = false;
    }
  }
  static fromByteArray(t) {
    const i = Fe.alloc(t.length);
    for (let s = 0, n = t.length; s < n; s++) i.buffer[s] = t[s];
    return i;
  }
  static concat(t, i) {
    if (typeof i > "u") {
      i = 0;
      for (let r = 0, o = t.length; r < o; r++) i += t[r].byteLength;
    }
    const s = Fe.alloc(i);
    let n = 0;
    for (let r = 0, o = t.length; r < o; r++) {
      const a = t[r];
      s.set(a, n), n += a.byteLength;
    }
    return s;
  }
  constructor(t) {
    this.buffer = t, this.byteLength = this.buffer.byteLength;
  }
  clone() {
    const t = Fe.alloc(this.byteLength);
    return t.set(this), t;
  }
  toString() {
    if (Cs) return this.buffer.toString();
    if (wc && this.buffer.byteLength > ep) try {
      wc(this.buffer.byteLength);
    } catch {
    }
    return so || (so = new TextDecoder()), so.decode(this.buffer);
  }
  slice(t, i) {
    return new Fe(this.buffer.subarray(t, i));
  }
  set(t, i) {
    if (t instanceof Fe) this.buffer.set(t.buffer, i);
    else if (t instanceof Uint8Array) this.buffer.set(t, i);
    else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), i);
    else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), i);
    else throw new Error("Unknown argument 'array'");
  }
  readUInt32BE(t) {
    return sp(this.buffer, t);
  }
  writeUInt32BE(t, i) {
    np(this.buffer, t, i);
  }
  readUInt32LE(t) {
    return rp(this.buffer, t);
  }
  writeUInt32LE(t, i) {
    op(this.buffer, t, i);
  }
  readUInt8(t) {
    return ap(this.buffer, t);
  }
  writeUInt8(t, i) {
    lp(this.buffer, t, i);
  }
  indexOf(t, i = 0) {
    return ip(this.buffer, t instanceof Fe ? t.buffer : t, i);
  }
  equals(t) {
    return this === t ? true : this.byteLength !== t.byteLength ? false : this.buffer.every((i, s) => i === t.buffer[s]);
  }
};
function ip(e, t, i = 0) {
  const s = t.byteLength, n = e.byteLength;
  if (s === 0) return 0;
  if (s === 1) return e.indexOf(t[0]);
  if (s > n - i) return -1;
  const r = Qf.value;
  r.fill(t.length);
  for (let h = 0; h < t.length; h++) r[t[h]] = t.length - h - 1;
  let o = i + t.length - 1, a = o, c = -1;
  for (; o < n; ) if (e[o] === t[a]) {
    if (a === 0) {
      c = o;
      break;
    }
    o--, a--;
  } else o += Math.max(t.length - a, r[e[o]]), a = t.length - 1;
  return c;
}
function sp(e, t) {
  return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function np(e, t, i) {
  e[i + 3] = t, t = t >>> 8, e[i + 2] = t, t = t >>> 8, e[i + 1] = t, t = t >>> 8, e[i] = t;
}
function rp(e, t) {
  return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function op(e, t, i) {
  e[i + 0] = t & 255, t = t >>> 8, e[i + 1] = t & 255, t = t >>> 8, e[i + 2] = t & 255, t = t >>> 8, e[i + 3] = t & 255;
}
function ap(e, t) {
  return e[t];
}
function lp(e, t, i) {
  e[i] = t;
}
var cp = /^\w[\w\d+.-]*$/, hp = /^\//, dp = /^\/\//;
function up(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !cp.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!hp.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (dp.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function fp(e, t) {
  return !e && !t ? "file" : e;
}
function pp(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== ut && (t = ut + t) : t = ut;
      break;
  }
  return t;
}
var le = "", ut = "/", gp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, me = class vr {
  static isUri(t) {
    return t instanceof vr ? true : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : false;
  }
  constructor(t, i, s, n, r, o = false) {
    typeof t == "object" ? (this.scheme = t.scheme || le, this.authority = t.authority || le, this.path = t.path || le, this.query = t.query || le, this.fragment = t.fragment || le) : (this.scheme = fp(t, o), this.authority = i || le, this.path = pp(this.scheme, s || le), this.query = n || le, this.fragment = r || le, up(this, o));
  }
  get fsPath() {
    return Rn(this, false);
  }
  with(t) {
    if (!t) return this;
    let { scheme: i, authority: s, path: n, query: r, fragment: o } = t;
    return i === void 0 ? i = this.scheme : i === null && (i = le), s === void 0 ? s = this.authority : s === null && (s = le), n === void 0 ? n = this.path : n === null && (n = le), r === void 0 ? r = this.query : r === null && (r = le), o === void 0 ? o = this.fragment : o === null && (o = le), i === this.scheme && s === this.authority && n === this.path && r === this.query && o === this.fragment ? this : new Ki(i, s, n, r, o);
  }
  static parse(t, i = false) {
    const s = gp.exec(t);
    return s ? new Ki(s[2] || le, Mn(s[4] || le), Mn(s[5] || le), Mn(s[7] || le), Mn(s[9] || le), i) : new Ki(le, le, le, le, le);
  }
  static file(t) {
    let i = le;
    if (xt && (t = t.replace(/\\/g, ut)), t[0] === ut && t[1] === ut) {
      const s = t.indexOf(ut, 2);
      s === -1 ? (i = t.substring(2), t = ut) : (i = t.substring(2, s), t = t.substring(s) || ut);
    }
    return new Ki("file", i, t, le, le);
  }
  static from(t, i) {
    return new Ki(t.scheme, t.authority, t.path, t.query, t.fragment, i);
  }
  static joinPath(t, ...i) {
    if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let s;
    return xt && t.scheme === "file" ? s = vr.file(Se.join(Rn(t, true), ...i)).path : s = se.join(t.path, ...i), t.with({ path: s });
  }
  toString(t = false) {
    return ro(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof vr) return t;
      {
        const i = new Ki(t);
        return i._formatted = t.external ?? null, i._fsPath = t._sep === Cc ? t.fsPath ?? null : null, i;
      }
    } else return t;
  }
  [/* @__PURE__ */ Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
}, Cc = xt ? 1 : void 0, Ki = class extends me {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = Rn(this, false)), this._fsPath;
  }
  toString(e = false) {
    return e ? ro(this, true) : (this._formatted || (this._formatted = ro(this, false)), this._formatted);
  }
  toJSON() {
    const e = { $mid: 1 };
    return this._fsPath && (e.fsPath = this._fsPath, e._sep = Cc), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
  }
}, Dc = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function Ec(e, t, i) {
  let s, n = -1;
  for (let r = 0; r < e.length; r++) {
    const o = e.charCodeAt(r);
    if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || i && o === 91 || i && o === 93 || i && o === 58) n !== -1 && (s += encodeURIComponent(e.substring(n, r)), n = -1), s !== void 0 && (s += e.charAt(r));
    else {
      s === void 0 && (s = e.substr(0, r));
      const a = Dc[o];
      a !== void 0 ? (n !== -1 && (s += encodeURIComponent(e.substring(n, r)), n = -1), s += a) : n === -1 && (n = r);
    }
  }
  return n !== -1 && (s += encodeURIComponent(e.substring(n))), s !== void 0 ? s : e;
}
function mp(e) {
  let t;
  for (let i = 0; i < e.length; i++) {
    const s = e.charCodeAt(i);
    s === 35 || s === 63 ? (t === void 0 && (t = e.substr(0, i)), t += Dc[s]) : t !== void 0 && (t += e[i]);
  }
  return t !== void 0 ? t : e;
}
function Rn(e, t) {
  let i;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? i = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? i = e.path.substr(1) : i = e.path[1].toLowerCase() + e.path.substr(2) : i = e.path, xt && (i = i.replace(/\//g, "\\")), i;
}
function ro(e, t) {
  const i = t ? mp : Ec;
  let s = "", { scheme: n, authority: r, path: o, query: a, fragment: c } = e;
  if (n && (s += n, s += ":"), (r || n === "file") && (s += ut, s += ut), r) {
    let h = r.indexOf("@");
    if (h !== -1) {
      const d = r.substr(0, h);
      r = r.substr(h + 1), h = d.lastIndexOf(":"), h === -1 ? s += i(d, false, false) : (s += i(d.substr(0, h), false, false), s += ":", s += i(d.substr(h + 1), false, true)), s += "@";
    }
    r = r.toLowerCase(), h = r.lastIndexOf(":"), h === -1 ? s += i(r, false, true) : (s += i(r.substr(0, h), false, true), s += r.substr(h));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      const h = o.charCodeAt(1);
      h >= 65 && h <= 90 && (o = `/${String.fromCharCode(h + 32)}:${o.substr(3)}`);
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      const h = o.charCodeAt(0);
      h >= 65 && h <= 90 && (o = `${String.fromCharCode(h + 32)}:${o.substr(2)}`);
    }
    s += i(o, true, false);
  }
  return a && (s += "?", s += i(a, false, false)), c && (s += "#", s += t ? c : Ec(c, false, false)), s;
}
function kc(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + kc(e.substr(3)) : e;
  }
}
var Tc = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function Mn(e) {
  return e.match(Tc) ? e.replace(Tc, (t) => kc(t)) : e;
}
var J;
((e) => {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})(J || (J = {}));
var vp = "tkn", bp = class {
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
    this._serverRootPath = se.join(t ?? "/", yp(e));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return se.join(this._serverRootPath, J.vscodeRemoteResource);
  }
  set(e, t, i) {
    this._hosts[e] = t, this._ports[e] = i;
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
      return vt(o), e;
    }
    const t = e.authority;
    let i = this._hosts[t];
    i && i.indexOf(":") !== -1 && i.indexOf("[") === -1 && (i = `[${i}]`);
    const s = this._ports[t], n = this._connectionTokens[t];
    let r = `path=${encodeURIComponent(e.path)}`;
    return typeof n == "string" && (r += `&${vp}=${encodeURIComponent(n)}`), me.from({ scheme: ef ? this._preferredWebSchema : J.vscodeRemoteResource, authority: `${i}:${s}`, path: this._remoteResourcesPath, query: r });
  }
}, xc = new bp();
function yp(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var Ac = "vscode-app", Nc = class br {
  asBrowserUri(t) {
    const i = this.toUri(t);
    return this.uriToBrowserUri(i);
  }
  uriToBrowserUri(t) {
    return t.scheme === J.vscodeRemote ? xc.rewrite(t) : t.scheme === J.file && (kn || sf === `${J.vscodeFileResource}://${br.FALLBACK_AUTHORITY}`) ? t.with({ scheme: J.vscodeFileResource, authority: t.authority || br.FALLBACK_AUTHORITY, query: null, fragment: null }) : t;
  }
  asFileUri(t) {
    const i = this.toUri(t);
    return this.uriToFileUri(i);
  }
  uriToFileUri(t) {
    return t.scheme === J.vscodeFileResource ? t.with({ scheme: J.file, authority: t.authority !== br.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
  }
  toUri(t) {
    if (me.isUri(t)) return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const i = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(i)) return me.joinPath(me.parse(i, true), t);
      const s = Nf(i, t);
      return me.file(s);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
Nc.FALLBACK_AUTHORITY = Ac;
var wp = Nc, oo = new wp(), mv = Object.freeze({ "Cache-Control": "no-cache, no-store" }), vv = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), Ic;
((e) => {
  const t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const i = "vscode-coi";
  function s(r) {
    let o;
    typeof r == "string" ? o = new URL(r).searchParams : r instanceof URL ? o = r.searchParams : me.isUri(r) && (o = new URL(r.toString(true)).searchParams);
    const a = o?.get(i);
    if (a) return t.get(a);
  }
  e.getHeadersFromQuery = s;
  function n(r, o, a) {
    if (!globalThis.crossOriginIsolated) return;
    const c = o && a ? "3" : a ? "2" : "1";
    r instanceof URLSearchParams ? r.set(i, c) : r[i] = c;
  }
  e.addSearchParam = n;
})(Ic || (Ic = {}));
function It(e) {
  return Rn(e, true);
}
var ao = class {
  constructor(e) {
    this._ignorePathCasing = e;
  }
  compare(e, t, i = false) {
    return e === t ? 0 : to(this.getComparisonKey(e, i), this.getComparisonKey(t, i));
  }
  isEqual(e, t, i = false) {
    return e === t ? true : !e || !t ? false : this.getComparisonKey(e, i) === this.getComparisonKey(t, i);
  }
  getComparisonKey(e, t = false) {
    return e.with({ path: this._ignorePathCasing(e) ? e.path.toLowerCase() : void 0, fragment: t ? null : void 0 }).toString();
  }
  ignorePathCasing(e) {
    return this._ignorePathCasing(e);
  }
  isEqualOrParent(e, t, i = false) {
    if (e.scheme === t.scheme) {
      if (e.scheme === J.file) return bc(It(e), It(t), this._ignorePathCasing(e)) && e.query === t.query && (i || e.fragment === t.fragment);
      if (Rc(e.authority, t.authority)) return bc(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (i || e.fragment === t.fragment);
    }
    return false;
  }
  joinPath(e, ...t) {
    return me.joinPath(e, ...t);
  }
  basenameOrAuthority(e) {
    return _p(e) || e.authority;
  }
  basename(e) {
    return se.basename(e.path);
  }
  extname(e) {
    return se.extname(e.path);
  }
  dirname(e) {
    if (e.path.length === 0) return e;
    let t;
    return e.scheme === J.file ? t = me.file(Rf(It(e))).path : (t = se.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
  }
  normalizePath(e) {
    if (!e.path.length) return e;
    let t;
    return e.scheme === J.file ? t = me.file(Af(It(e))).path : t = se.normalize(e.path), e.with({ path: t });
  }
  relativePath(e, t) {
    if (e.scheme !== t.scheme || !Rc(e.authority, t.authority)) return;
    if (e.scheme === J.file) {
      const n = Lf(It(e), It(t));
      return xt ? mc(n) : n;
    }
    let i = e.path || "/";
    const s = t.path || "/";
    if (this._ignorePathCasing(e)) {
      let n = 0;
      for (const r = Math.min(i.length, s.length); n < r && !(i.charCodeAt(n) !== s.charCodeAt(n) && i.charAt(n).toLowerCase() !== s.charAt(n).toLowerCase()); n++) ;
      i = s.substr(0, n) + i.substr(n);
    }
    return se.relative(i, s);
  }
  resolvePath(e, t) {
    if (e.scheme === J.file) {
      const i = me.file(If(It(e), t));
      return e.with({ authority: i.authority, path: i.path });
    }
    return t = Kf(t), e.with({ path: se.resolve(e.path, t) });
  }
  isAbsolutePath(e) {
    return !!e.path && e.path[0] === "/";
  }
  isEqualAuthority(e, t) {
    return e === t || e !== void 0 && t !== void 0 && Of(e, t);
  }
  hasTrailingPathSeparator(e, t = Ln) {
    if (e.scheme === J.file) {
      const i = It(e);
      return i.length > vc(i).length && i[i.length - 1] === t;
    } else {
      const i = e.path;
      return i.length > 1 && i.charCodeAt(i.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
    }
  }
  removeTrailingPathSeparator(e, t = Ln) {
    return Mc(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
  }
  addTrailingPathSeparator(e, t = Ln) {
    let i = false;
    if (e.scheme === J.file) {
      const s = It(e);
      i = s !== void 0 && s.length === vc(s).length && s[s.length - 1] === t;
    } else {
      t = "/";
      const s = e.path;
      i = s.length === 1 && s.charCodeAt(s.length - 1) === 47;
    }
    return !i && !Mc(e, t) ? e.with({ path: e.path + "/" }) : e;
  }
}, te = new ao(() => false), bv = new ao((e) => e.scheme === J.file ? !ic : true), yv = new ao((e) => true), wv = te.isEqual.bind(te), _v = te.isEqualOrParent.bind(te), Sv = te.getComparisonKey.bind(te), Cv = te.basenameOrAuthority.bind(te), _p = te.basename.bind(te), Dv = te.extname.bind(te), Sp = te.dirname.bind(te), Ev = te.joinPath.bind(te), kv = te.normalizePath.bind(te), Tv = te.relativePath.bind(te), Lc = te.resolvePath.bind(te), xv = te.isAbsolutePath.bind(te), Rc = te.isEqualAuthority.bind(te), Mc = te.hasTrailingPathSeparator.bind(te), Av = te.removeTrailingPathSeparator.bind(te), Nv = te.addTrailingPathSeparator.bind(te), Pc;
((e) => {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(i) {
    const s = /* @__PURE__ */ new Map();
    i.path.substring(i.path.indexOf(";") + 1, i.path.lastIndexOf(";")).split(";").forEach((o) => {
      const [a, c] = o.split(":");
      a && c && s.set(a, c);
    });
    const r = i.path.substring(0, i.path.indexOf(";"));
    return r && s.set(e.META_DATA_MIME, r), s;
  }
  e.parseMetaData = t;
})(Pc || (Pc = {}));
var Oc = /* @__PURE__ */ Symbol("MicrotaskDelay");
function lo(e) {
  const t = new cc(), i = e(t.token);
  let s = false;
  const n = new Promise((r, o) => {
    const a = t.token.onCancellationRequested(() => {
      s = true, a.dispose(), o(new Et());
    });
    Promise.resolve(i).then((c) => {
      a.dispose(), t.dispose(), s ? A1(c) && c.dispose() : r(c);
    }, (c) => {
      a.dispose(), t.dispose(), o(c);
    });
  });
  return new class {
    cancel() {
      t.cancel(), t.dispose();
    }
    then(r, o) {
      return n.then(r, o);
    }
    catch(r) {
      return this.then(void 0, r);
    }
    finally(r) {
      return n.finally(r);
    }
  }();
}
var Cp = (e, t) => {
  let i = true;
  const s = setTimeout(() => {
    i = false, t();
  }, e);
  return { isTriggered: () => i, dispose: () => {
    clearTimeout(s), i = false;
  } };
}, Dp = (e) => {
  let t = true;
  return queueMicrotask(() => {
    t && (t = false, e());
  }), { isTriggered: () => t, dispose: () => {
    t = false;
  } };
}, co = class {
  constructor(e) {
    this.defaultDelay = e, this._isDisposed = false, this.deferred = null, this.completionPromise = null, this.doResolve = null, this.doReject = null, this.task = null;
  }
  trigger(e, t = this.defaultDelay) {
    if (this._isDisposed) return Promise.reject(new Et());
    this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((s, n) => {
      this.doResolve = s, this.doReject = n;
    }).then(() => {
      if (this.completionPromise = null, this.doResolve = null, this.task) {
        const s = this.task;
        return this.task = null, s();
      }
    }));
    const i = () => {
      this.deferred = null, this.doResolve?.(null);
    };
    return this.deferred = t === Oc ? Dp(i) : Cp(t, i), this.completionPromise;
  }
  isTriggered() {
    return !!this.deferred?.isTriggered();
  }
  cancel() {
    this.cancelTimeout(), this.completionPromise && (this.doReject?.(new Et()), this.completionPromise = null);
  }
  cancelTimeout() {
    this.deferred?.dispose(), this.deferred = null;
  }
  dispose() {
    this._isDisposed = true, this.cancel();
  }
};
function Pn(e, t) {
  return t ? new Promise((i, s) => {
    const n = setTimeout(() => {
      r.dispose(), i();
    }, e), r = t.onCancellationRequested(() => {
      clearTimeout(n), r.dispose(), s(new Et());
    });
  }) : lo((i) => Pn(e, i));
}
function On(e, t = 0, i) {
  const s = setTimeout(() => {
    e(), i && n.dispose();
  }, t), n = re(() => {
    clearTimeout(s), i?.delete(n);
  });
  return i?.add(n), n;
}
var ho = class {
  constructor(e, t) {
    this._isDisposed = false, this._token = -1, typeof e == "function" && typeof t == "number" && this.setIfNotSet(e, t);
  }
  dispose() {
    this.cancel(), this._isDisposed = true;
  }
  cancel() {
    this._token !== -1 && (clearTimeout(this._token), this._token = -1);
  }
  cancelAndSet(e, t) {
    if (this._isDisposed) throw new st("Calling 'cancelAndSet' on a disposed TimeoutTimer");
    this.cancel(), this._token = setTimeout(() => {
      this._token = -1, e();
    }, t);
  }
  setIfNotSet(e, t) {
    if (this._isDisposed) throw new st("Calling 'setIfNotSet' on a disposed TimeoutTimer");
    this._token === -1 && (this._token = setTimeout(() => {
      this._token = -1, e();
    }, t));
  }
}, Ep = class {
  constructor() {
    this.isDisposed = false;
  }
  cancel() {
    this.disposable?.dispose(), this.disposable = void 0;
  }
  cancelAndSet(e, t, i = globalThis) {
    if (this.isDisposed) throw new st("Calling 'cancelAndSet' on a disposed IntervalTimer");
    this.cancel();
    const s = i.setInterval(() => {
      e();
    }, t);
    this.disposable = new De(), this.disposable.value = re(() => {
      i.clearInterval(s);
    });
  }
  dispose() {
    this.cancel(), this.isDisposed = true;
  }
}, Fc = class {
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
}, kp, uo;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? uo = (e, t, i) => {
    rf(() => {
      if (s) return;
      const n = Date.now() + 15;
      t(Object.freeze({ didTimeout: true, timeRemaining() {
        return Math.max(0, n - Date.now());
      } }));
    });
    let s = false;
    return { dispose() {
      s || (s = true);
    } };
  } : uo = (e, t, i) => {
    const s = e.requestIdleCallback(t, typeof i == "number" ? { timeout: i } : void 0);
    let n = false;
    return { dispose() {
      n || (n = true, e.cancelIdleCallback(s));
    } };
  }, kp = (e, t) => uo(globalThis, e, t);
})();
var Bc;
((e) => {
  async function t(s) {
    let n;
    const r = await Promise.all(s.map((o) => o.then((a) => a, (a) => {
      n || (n = a);
    })));
    if (typeof n < "u") throw n;
    return r;
  }
  e.settled = t;
  function i(s) {
    return new Promise(async (n, r) => {
      try {
        await s(n, r);
      } catch (o) {
        r(o);
      }
    });
  }
  e.withAsyncBody = i;
})(Bc || (Bc = {}));
var Hc = class ht {
  static fromArray(t) {
    return new ht((i) => {
      i.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new ht(async (i) => {
      i.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new ht(async (i) => {
      await Promise.all(t.map(async (s) => i.emitOne(await s)));
    });
  }
  static merge(t) {
    return new ht(async (i) => {
      await Promise.all(t.map(async (s) => {
        for await (const n of s) i.emitOne(n);
      }));
    });
  }
  constructor(t, i) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = i, this._onStateChanged = new L(), queueMicrotask(async () => {
      const s = { emitOne: (n) => this.emitOne(n), emitMany: (n) => this.emitMany(n), reject: (n) => this.reject(n) };
      try {
        await Promise.resolve(t(s)), this.resolve();
      } catch (n) {
        this.reject(n);
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
        await A.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(t, i) {
    return new ht(async (s) => {
      for await (const n of t) s.emitOne(i(n));
    });
  }
  map(t) {
    return ht.map(this, t);
  }
  static filter(t, i) {
    return new ht(async (s) => {
      for await (const n of t) i(n) && s.emitOne(n);
    });
  }
  filter(t) {
    return ht.filter(this, t);
  }
  static coalesce(t) {
    return ht.filter(t, (i) => !!i);
  }
  coalesce() {
    return ht.coalesce(this);
  }
  static async toPromise(t) {
    const i = [];
    for await (const s of t) i.push(s);
    return i;
  }
  toPromise() {
    return ht.toPromise(this);
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
Hc.EMPTY = Hc.fromArray([]);
var { entries: Uc, setPrototypeOf: $c, isFrozen: Tp, getPrototypeOf: xp, getOwnPropertyDescriptor: Ap } = Object, { freeze: $e, seal: ot, create: zc } = Object, { apply: fo, construct: po } = typeof Reflect < "u" && Reflect;
$e || ($e = function(t) {
  return t;
}), ot || (ot = function(t) {
  return t;
}), fo || (fo = function(t, i, s) {
  return t.apply(i, s);
}), po || (po = function(t, i) {
  return new t(...i);
});
var Fn = et(Array.prototype.forEach), Wc = et(Array.prototype.pop), Ds = et(Array.prototype.push), Bn = et(String.prototype.toLowerCase), go = et(String.prototype.toString), Vc = et(String.prototype.match), Es = et(String.prototype.replace), Np = et(String.prototype.indexOf), Ip = et(String.prototype.trim), ft = et(Object.prototype.hasOwnProperty), ze = et(RegExp.prototype.test), ks = Lp(TypeError);
function et(e) {
  return function(t) {
    for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) s[n - 1] = arguments[n];
    return fo(e, t, s);
  };
}
function Lp(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
    return po(e, i);
  };
}
function X(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Bn;
  $c && $c(e, null);
  let s = t.length;
  for (; s--; ) {
    let n = t[s];
    if (typeof n == "string") {
      const r = i(n);
      r !== n && (Tp(t) || (t[s] = r), n = r);
    }
    e[n] = true;
  }
  return e;
}
function Rp(e) {
  for (let t = 0; t < e.length; t++) ft(e, t) || (e[t] = null);
  return e;
}
function ci(e) {
  const t = zc(null);
  for (const [i, s] of Uc(e)) ft(e, i) && (Array.isArray(s) ? t[i] = Rp(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ci(s) : t[i] = s);
  return t;
}
function Ts(e, t) {
  for (; e !== null; ) {
    const s = Ap(e, t);
    if (s) {
      if (s.get) return et(s.get);
      if (typeof s.value == "function") return et(s.value);
    }
    e = xp(e);
  }
  function i() {
    return null;
  }
  return i;
}
var Gc = $e(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), mo = $e(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), vo = $e(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Mp = $e(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), bo = $e(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Pp = $e(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qc = $e(["#text"]), Kc = $e(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), yo = $e(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), jc = $e(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Hn = $e(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Op = ot(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Fp = ot(/<%[\w\W]*|[\w\W]*%>/gm), Bp = ot(/\${[\w\W]*}/gm), Hp = ot(/^data-[\-\w.\u00B7-\uFFFF]/), Up = ot(/^aria-[\-\w]+$/), Yc = ot(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), $p = ot(/^(?:\w+script|data):/i), zp = ot(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Xc = ot(/^html$/i), Wp = ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Zc = Object.freeze({ __proto__: null, MUSTACHE_EXPR: Op, ERB_EXPR: Fp, TMPLIT_EXPR: Bp, DATA_ATTR: Hp, ARIA_ATTR: Up, IS_ALLOWED_URI: Yc, IS_SCRIPT_OR_DATA: $p, ATTR_WHITESPACE: zp, DOCTYPE_NAME: Xc, CUSTOM_ELEMENT: Wp }), xs = { element: 1, attribute: 2, text: 3, cdataSection: 4, entityReference: 5, entityNode: 6, progressingInstruction: 7, comment: 8, document: 9, documentType: 10, documentFragment: 11, notation: 12 }, Vp = function() {
  return typeof window > "u" ? null : window;
}, Gp = function(t, i) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let s = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (s = i.getAttribute(n));
  const r = "dompurify" + (s ? "#" + s : "");
  try {
    return t.createPolicy(r, { createHTML(o) {
      return o;
    }, createScriptURL(o) {
      return o;
    } });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
};
function Qc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vp();
  const t = (H) => Qc(H);
  if (t.version = "3.1.7", t.removed = [], !e || !e.document || e.document.nodeType !== xs.document) return t.isSupported = false, t;
  let { document: i } = e;
  const s = i, n = s.currentScript, { DocumentFragment: r, HTMLTemplateElement: o, Node: a, Element: c, NodeFilter: h, NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: u, DOMParser: f, trustedTypes: p } = e, m = c.prototype, _ = Ts(m, "cloneNode"), v = Ts(m, "remove"), y = Ts(m, "nextSibling"), C = Ts(m, "childNodes"), D = Ts(m, "parentNode");
  if (typeof o == "function") {
    const H = i.createElement("template");
    H.content && H.content.ownerDocument && (i = H.content.ownerDocument);
  }
  let E, w = "";
  const { implementation: S, createNodeIterator: I, createDocumentFragment: P, getElementsByTagName: Y } = i, { importNode: ue } = s;
  let G = {};
  t.isSupported = typeof Uc == "function" && typeof D == "function" && S && S.createHTMLDocument !== void 0;
  const { MUSTACHE_EXPR: $, ERB_EXPR: He, TMPLIT_EXPR: ei, DATA_ATTR: M, ARIA_ATTR: k, IS_SCRIPT_OR_DATA: R, ATTR_WHITESPACE: N, CUSTOM_ELEMENT: B } = Zc;
  let { IS_ALLOWED_URI: V } = Zc, z = null;
  const _e = X({}, [...Gc, ...mo, ...vo, ...bo, ...qc]);
  let Q = null;
  const St = X({}, [...Kc, ...yo, ...jc, ...Hn]);
  let he = Object.seal(zc(null, { tagNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, attributeNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, allowCustomizedBuiltInElements: { writable: true, configurable: false, enumerable: true, value: false } })), dt = null, Ii = null, ti = true, us = true, cn = false, il = true, Li = false, Sr = true, ii = false, Cr = false, Dr = false, Ri = false, hn = false, dn = false, sl = true, nl = false;
  const zu = "user-content-";
  let Er = true, fs = false, Mi = {}, Pi = null;
  const rl = X({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ol = null;
  const al = X({}, ["audio", "video", "img", "source", "image", "track"]);
  let kr = null;
  const ll = X({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), un = "http://www.w3.org/1998/Math/MathML", fn = "http://www.w3.org/2000/svg", Ct = "http://www.w3.org/1999/xhtml";
  let Oi = Ct, Tr = false, xr = null;
  const Wu = X({}, [un, fn, Ct], go);
  let ps = null;
  const Vu = ["application/xhtml+xml", "text/html"], Gu = "text/html";
  let ke = null, Fi = null;
  const qu = i.createElement("form"), cl = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, Ar = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Fi && Fi === g)) {
      if ((!g || typeof g != "object") && (g = {}), g = ci(g), ps = Vu.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? Gu : g.PARSER_MEDIA_TYPE, ke = ps === "application/xhtml+xml" ? go : Bn, z = ft(g, "ALLOWED_TAGS") ? X({}, g.ALLOWED_TAGS, ke) : _e, Q = ft(g, "ALLOWED_ATTR") ? X({}, g.ALLOWED_ATTR, ke) : St, xr = ft(g, "ALLOWED_NAMESPACES") ? X({}, g.ALLOWED_NAMESPACES, go) : Wu, kr = ft(g, "ADD_URI_SAFE_ATTR") ? X(ci(ll), g.ADD_URI_SAFE_ATTR, ke) : ll, ol = ft(g, "ADD_DATA_URI_TAGS") ? X(ci(al), g.ADD_DATA_URI_TAGS, ke) : al, Pi = ft(g, "FORBID_CONTENTS") ? X({}, g.FORBID_CONTENTS, ke) : rl, dt = ft(g, "FORBID_TAGS") ? X({}, g.FORBID_TAGS, ke) : {}, Ii = ft(g, "FORBID_ATTR") ? X({}, g.FORBID_ATTR, ke) : {}, Mi = ft(g, "USE_PROFILES") ? g.USE_PROFILES : false, ti = g.ALLOW_ARIA_ATTR !== false, us = g.ALLOW_DATA_ATTR !== false, cn = g.ALLOW_UNKNOWN_PROTOCOLS || false, il = g.ALLOW_SELF_CLOSE_IN_ATTR !== false, Li = g.SAFE_FOR_TEMPLATES || false, Sr = g.SAFE_FOR_XML !== false, ii = g.WHOLE_DOCUMENT || false, Ri = g.RETURN_DOM || false, hn = g.RETURN_DOM_FRAGMENT || false, dn = g.RETURN_TRUSTED_TYPE || false, Dr = g.FORCE_BODY || false, sl = g.SANITIZE_DOM !== false, nl = g.SANITIZE_NAMED_PROPS || false, Er = g.KEEP_CONTENT !== false, fs = g.IN_PLACE || false, V = g.ALLOWED_URI_REGEXP || Yc, Oi = g.NAMESPACE || Ct, he = g.CUSTOM_ELEMENT_HANDLING || {}, g.CUSTOM_ELEMENT_HANDLING && cl(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (he.tagNameCheck = g.CUSTOM_ELEMENT_HANDLING.tagNameCheck), g.CUSTOM_ELEMENT_HANDLING && cl(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (he.attributeNameCheck = g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (he.allowCustomizedBuiltInElements = g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Li && (us = false), hn && (Ri = true), Mi && (z = X({}, qc), Q = [], Mi.html === true && (X(z, Gc), X(Q, Kc)), Mi.svg === true && (X(z, mo), X(Q, yo), X(Q, Hn)), Mi.svgFilters === true && (X(z, vo), X(Q, yo), X(Q, Hn)), Mi.mathMl === true && (X(z, bo), X(Q, jc), X(Q, Hn))), g.ADD_TAGS && (z === _e && (z = ci(z)), X(z, g.ADD_TAGS, ke)), g.ADD_ATTR && (Q === St && (Q = ci(Q)), X(Q, g.ADD_ATTR, ke)), g.ADD_URI_SAFE_ATTR && X(kr, g.ADD_URI_SAFE_ATTR, ke), g.FORBID_CONTENTS && (Pi === rl && (Pi = ci(Pi)), X(Pi, g.FORBID_CONTENTS, ke)), Er && (z["#text"] = true), ii && X(z, ["html", "head", "body"]), z.table && (X(z, ["tbody"]), delete dt.tbody), g.TRUSTED_TYPES_POLICY) {
        if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function") throw ks('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw ks('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        E = g.TRUSTED_TYPES_POLICY, w = E.createHTML("");
      } else E === void 0 && (E = Gp(p, n)), E !== null && typeof w == "string" && (w = E.createHTML(""));
      $e && $e(g), Fi = g;
    }
  }, hl = X({}, ["mi", "mo", "mn", "ms", "mtext"]), dl = X({}, ["annotation-xml"]), Ku = X({}, ["title", "style", "font", "a", "script"]), ul = X({}, [...mo, ...vo, ...Mp]), fl = X({}, [...bo, ...Pp]), ju = function(g) {
    let T = D(g);
    (!T || !T.tagName) && (T = { namespaceURI: Oi, tagName: "template" });
    const F = Bn(g.tagName), de = Bn(T.tagName);
    return xr[g.namespaceURI] ? g.namespaceURI === fn ? T.namespaceURI === Ct ? F === "svg" : T.namespaceURI === un ? F === "svg" && (de === "annotation-xml" || hl[de]) : !!ul[F] : g.namespaceURI === un ? T.namespaceURI === Ct ? F === "math" : T.namespaceURI === fn ? F === "math" && dl[de] : !!fl[F] : g.namespaceURI === Ct ? T.namespaceURI === fn && !dl[de] || T.namespaceURI === un && !hl[de] ? false : !fl[F] && (Ku[F] || !ul[F]) : !!(ps === "application/xhtml+xml" && xr[g.namespaceURI]) : false;
  }, gt = function(g) {
    Ds(t.removed, { element: g });
    try {
      D(g).removeChild(g);
    } catch {
      v(g);
    }
  }, pn = function(g, T) {
    try {
      Ds(t.removed, { attribute: T.getAttributeNode(g), from: T });
    } catch {
      Ds(t.removed, { attribute: null, from: T });
    }
    if (T.removeAttribute(g), g === "is" && !Q[g]) if (Ri || hn) try {
      gt(T);
    } catch {
    }
    else try {
      T.setAttribute(g, "");
    } catch {
    }
  }, pl = function(g) {
    let T = null, F = null;
    if (Dr) g = "<remove></remove>" + g;
    else {
      const Ae = Vc(g, /^[\r\n\t ]+/);
      F = Ae && Ae[0];
    }
    ps === "application/xhtml+xml" && Oi === Ct && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const de = E ? E.createHTML(g) : g;
    if (Oi === Ct) try {
      T = new f().parseFromString(de, ps);
    } catch {
    }
    if (!T || !T.documentElement) {
      T = S.createDocument(Oi, "template", null);
      try {
        T.documentElement.innerHTML = Tr ? w : de;
      } catch {
      }
    }
    const Le = T.body || T.documentElement;
    return g && F && Le.insertBefore(i.createTextNode(F), Le.childNodes[0] || null), Oi === Ct ? Y.call(T, ii ? "html" : "body")[0] : ii ? T.documentElement : Le;
  }, gl = function(g) {
    return I.call(g.ownerDocument || g, g, h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION, null);
  }, ml = function(g) {
    return g instanceof u && (typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || !(g.attributes instanceof d) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function");
  }, vl = function(g) {
    return typeof a == "function" && g instanceof a;
  }, Dt = function(g, T, F) {
    G[g] && Fn(G[g], (de) => {
      de.call(t, T, F, Fi);
    });
  }, bl = function(g) {
    let T = null;
    if (Dt("beforeSanitizeElements", g, null), ml(g)) return gt(g), true;
    const F = ke(g.nodeName);
    if (Dt("uponSanitizeElement", g, { tagName: F, allowedTags: z }), g.hasChildNodes() && !vl(g.firstElementChild) && ze(/<[/\w]/g, g.innerHTML) && ze(/<[/\w]/g, g.textContent) || g.nodeType === xs.progressingInstruction || Sr && g.nodeType === xs.comment && ze(/<[/\w]/g, g.data)) return gt(g), true;
    if (!z[F] || dt[F]) {
      if (!dt[F] && wl(F) && (he.tagNameCheck instanceof RegExp && ze(he.tagNameCheck, F) || he.tagNameCheck instanceof Function && he.tagNameCheck(F))) return false;
      if (Er && !Pi[F]) {
        const de = D(g) || g.parentNode, Le = C(g) || g.childNodes;
        if (Le && de) {
          const Ae = Le.length;
          for (let Ke = Ae - 1; Ke >= 0; --Ke) {
            const mt = _(Le[Ke], true);
            mt.__removalCount = (g.__removalCount || 0) + 1, de.insertBefore(mt, y(g));
          }
        }
      }
      return gt(g), true;
    }
    return g instanceof c && !ju(g) || (F === "noscript" || F === "noembed" || F === "noframes") && ze(/<\/no(script|embed|frames)/i, g.innerHTML) ? (gt(g), true) : (Li && g.nodeType === xs.text && (T = g.textContent, Fn([$, He, ei], (de) => {
      T = Es(T, de, " ");
    }), g.textContent !== T && (Ds(t.removed, { element: g.cloneNode() }), g.textContent = T)), Dt("afterSanitizeElements", g, null), false);
  }, yl = function(g, T, F) {
    if (sl && (T === "id" || T === "name") && (F in i || F in qu)) return false;
    if (!(us && !Ii[T] && ze(M, T))) {
      if (!(ti && ze(k, T))) {
        if (!Q[T] || Ii[T]) {
          if (!(wl(g) && (he.tagNameCheck instanceof RegExp && ze(he.tagNameCheck, g) || he.tagNameCheck instanceof Function && he.tagNameCheck(g)) && (he.attributeNameCheck instanceof RegExp && ze(he.attributeNameCheck, T) || he.attributeNameCheck instanceof Function && he.attributeNameCheck(T)) || T === "is" && he.allowCustomizedBuiltInElements && (he.tagNameCheck instanceof RegExp && ze(he.tagNameCheck, F) || he.tagNameCheck instanceof Function && he.tagNameCheck(F)))) return false;
        } else if (!kr[T]) {
          if (!ze(V, Es(F, N, ""))) {
            if (!((T === "src" || T === "xlink:href" || T === "href") && g !== "script" && Np(F, "data:") === 0 && ol[g])) {
              if (!(cn && !ze(R, Es(F, N, "")))) {
                if (F) return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, wl = function(g) {
    return g !== "annotation-xml" && Vc(g, B);
  }, _l = function(g) {
    Dt("beforeSanitizeAttributes", g, null);
    const { attributes: T } = g;
    if (!T) return;
    const F = { attrName: "", attrValue: "", keepAttr: true, allowedAttributes: Q };
    let de = T.length;
    for (; de--; ) {
      const Le = T[de], { name: Ae, namespaceURI: Ke, value: mt } = Le, gs = ke(Ae);
      let Ue = Ae === "value" ? mt : Ip(mt);
      if (F.attrName = gs, F.attrValue = Ue, F.keepAttr = true, F.forceKeepAttr = void 0, Dt("uponSanitizeAttribute", g, F), Ue = F.attrValue, F.forceKeepAttr || (pn(Ae, g), !F.keepAttr)) continue;
      if (!il && ze(/\/>/i, Ue)) {
        pn(Ae, g);
        continue;
      }
      Li && Fn([$, He, ei], (Cl) => {
        Ue = Es(Ue, Cl, " ");
      });
      const Sl = ke(g.nodeName);
      if (yl(Sl, gs, Ue)) {
        if (nl && (gs === "id" || gs === "name") && (pn(Ae, g), Ue = zu + Ue), Sr && ze(/((--!?|])>)|<\/(style|title)/i, Ue)) {
          pn(Ae, g);
          continue;
        }
        if (E && typeof p == "object" && typeof p.getAttributeType == "function" && !Ke) switch (p.getAttributeType(Sl, gs)) {
          case "TrustedHTML": {
            Ue = E.createHTML(Ue);
            break;
          }
          case "TrustedScriptURL": {
            Ue = E.createScriptURL(Ue);
            break;
          }
        }
        try {
          Ke ? g.setAttributeNS(Ke, Ae, Ue) : g.setAttribute(Ae, Ue), ml(g) ? gt(g) : Wc(t.removed);
        } catch {
        }
      }
    }
    Dt("afterSanitizeAttributes", g, null);
  }, Yu = function H(g) {
    let T = null;
    const F = gl(g);
    for (Dt("beforeSanitizeShadowDOM", g, null); T = F.nextNode(); ) Dt("uponSanitizeShadowNode", T, null), !bl(T) && (T.content instanceof r && H(T.content), _l(T));
    Dt("afterSanitizeShadowDOM", g, null);
  };
  return t.sanitize = function(H) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, T = null, F = null, de = null, Le = null;
    if (Tr = !H, Tr && (H = "<!-->"), typeof H != "string" && !vl(H)) if (typeof H.toString == "function") {
      if (H = H.toString(), typeof H != "string") throw ks("dirty is not a string, aborting");
    } else throw ks("toString is not a function");
    if (!t.isSupported) return H;
    if (Cr || Ar(g), t.removed = [], typeof H == "string" && (fs = false), fs) {
      if (H.nodeName) {
        const mt = ke(H.nodeName);
        if (!z[mt] || dt[mt]) throw ks("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (H instanceof a) T = pl("<!---->"), F = T.ownerDocument.importNode(H, true), F.nodeType === xs.element && F.nodeName === "BODY" || F.nodeName === "HTML" ? T = F : T.appendChild(F);
    else {
      if (!Ri && !Li && !ii && H.indexOf("<") === -1) return E && dn ? E.createHTML(H) : H;
      if (T = pl(H), !T) return Ri ? null : dn ? w : "";
    }
    T && Dr && gt(T.firstChild);
    const Ae = gl(fs ? H : T);
    for (; de = Ae.nextNode(); ) bl(de) || (de.content instanceof r && Yu(de.content), _l(de));
    if (fs) return H;
    if (Ri) {
      if (hn) for (Le = P.call(T.ownerDocument); T.firstChild; ) Le.appendChild(T.firstChild);
      else Le = T;
      return (Q.shadowroot || Q.shadowrootmode) && (Le = ue.call(s, Le, true)), Le;
    }
    let Ke = ii ? T.outerHTML : T.innerHTML;
    return ii && z["!doctype"] && T.ownerDocument && T.ownerDocument.doctype && T.ownerDocument.doctype.name && ze(Xc, T.ownerDocument.doctype.name) && (Ke = "<!DOCTYPE " + T.ownerDocument.doctype.name + `>
` + Ke), Li && Fn([$, He, ei], (mt) => {
      Ke = Es(Ke, mt, " ");
    }), E && dn ? E.createHTML(Ke) : Ke;
  }, t.setConfig = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ar(H), Cr = true;
  }, t.clearConfig = function() {
    Fi = null, Cr = false;
  }, t.isValidAttribute = function(H, g, T) {
    Fi || Ar({});
    const F = ke(H), de = ke(g);
    return yl(F, de, T);
  }, t.addHook = function(H, g) {
    typeof g == "function" && (G[H] = G[H] || [], Ds(G[H], g));
  }, t.removeHook = function(H) {
    if (G[H]) return Wc(G[H]);
  }, t.removeHooks = function(H) {
    G[H] && (G[H] = []);
  }, t.removeAllHooks = function() {
    G = {};
  }, t;
}
var hi = Qc();
function qp(e) {
  return wo(e, 0);
}
function wo(e, t) {
  switch (typeof e) {
    case "object":
      return e === null ? Lt(349, t) : Array.isArray(e) ? jp(e, t) : Yp(e, t);
    case "string":
      return _o(e, t);
    case "boolean":
      return Kp(e, t);
    case "number":
      return Lt(e, t);
    case "undefined":
      return Lt(937, t);
    default:
      return Lt(617, t);
  }
}
function Lt(e, t) {
  return (t << 5) - t + e | 0;
}
function Kp(e, t) {
  return Lt(e ? 433 : 863, t);
}
function _o(e, t) {
  t = Lt(149417, t);
  for (let i = 0, s = e.length; i < s; i++) t = Lt(e.charCodeAt(i), t);
  return t;
}
function jp(e, t) {
  return t = Lt(104579, t), e.reduce((i, s) => wo(s, i), t);
}
function Yp(e, t) {
  return t = Lt(181387, t), Object.keys(e).sort().reduce((i, s) => (i = _o(s, i), wo(e[s], i)), t);
}
function So(e, t, i = 32) {
  const s = i - t, n = ~((1 << s) - 1);
  return (e << t | (n & e) >>> s) >>> 0;
}
function As(e, t = 32) {
  return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((i) => i.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
var Xp = class Pu {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
  }
  update(t) {
    const i = t.length;
    if (i === 0) return;
    const s = this._buff;
    let n = this._buffLen, r = this._leftoverHighSurrogate, o, a;
    for (r !== 0 ? (o = r, a = -1, r = 0) : (o = t.charCodeAt(0), a = 0); ; ) {
      let c = o;
      if (Bf(o)) if (a + 1 < i) {
        const h = t.charCodeAt(a + 1);
        gc(h) ? (a++, c = Hf(o, h)) : c = 65533;
      } else {
        r = o;
        break;
      }
      else gc(o) && (c = 65533);
      if (n = this._push(s, n, c), a++, a < i) o = t.charCodeAt(a);
      else break;
    }
    this._buffLen = n, this._leftoverHighSurrogate = r;
  }
  _push(t, i, s) {
    return s < 128 ? t[i++] = s : s < 2048 ? (t[i++] = 192 | (s & 1984) >>> 6, t[i++] = 128 | (s & 63) >>> 0) : s < 65536 ? (t[i++] = 224 | (s & 61440) >>> 12, t[i++] = 128 | (s & 4032) >>> 6, t[i++] = 128 | (s & 63) >>> 0) : (t[i++] = 240 | (s & 1835008) >>> 18, t[i++] = 128 | (s & 258048) >>> 12, t[i++] = 128 | (s & 4032) >>> 6, t[i++] = 128 | (s & 63) >>> 0), i >= 64 && (this._step(), i -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), i;
  }
  digest() {
    return this._finished || (this._finished = true, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), As(this._h0) + As(this._h1) + As(this._h2) + As(this._h3) + As(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
    const t = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(t / 4294967296), false), this._buffDV.setUint32(60, t % 4294967296, false), this._step();
  }
  _step() {
    const t = Pu._bigBlock32, i = this._buffDV;
    for (let u = 0; u < 64; u += 4) t.setUint32(u, i.getUint32(u, false), false);
    for (let u = 64; u < 320; u += 4) t.setUint32(u, So(t.getUint32(u - 12, false) ^ t.getUint32(u - 32, false) ^ t.getUint32(u - 56, false) ^ t.getUint32(u - 64, false), 1), false);
    let s = this._h0, n = this._h1, r = this._h2, o = this._h3, a = this._h4, c, h, d;
    for (let u = 0; u < 80; u++) u < 20 ? (c = n & r | ~n & o, h = 1518500249) : u < 40 ? (c = n ^ r ^ o, h = 1859775393) : u < 60 ? (c = n & r | n & o | r & o, h = 2400959708) : (c = n ^ r ^ o, h = 3395469782), d = So(s, 5) + c + a + h + t.getUint32(u * 4, false) & 4294967295, a = o, o = r, r = So(n, 30), n = s, s = d;
    this._h0 = this._h0 + s & 4294967295, this._h1 = this._h1 + n & 4294967295, this._h2 = this._h2 + r & 4294967295, this._h3 = this._h3 + o & 4294967295, this._h4 = this._h4 + a & 4294967295;
  }
};
Xp._bigBlock32 = new DataView(new ArrayBuffer(320));
function Un(e, t, i) {
  return Math.min(Math.max(e, t), i);
}
var Iv = Date.now(), Lv = 1800 * 1e3, Zp = ["vscode.typescript", "vscode.javascript", "vscode.python", "vscode.json", "vscode.html", "vscode.css", "vscode.markdown", "vscode.yaml", "vscode.xml", "vscode.go", "vscode.rust", "vscode.cpp", "vscode.java", "vscode.csharp", "vscode.ruby", "vscode.sql", "vscode.shellscript", "vscode.swift", "vscode.dart", "vscode.scss", "vscode.less", "vscode.lua", "vscode.perl", "vscode.r", "vscode.php", "vscode.docker", "vscode.ini", "vscode.dotenv", "vscode.diff", "vscode.make", "vscode.log", "mechatroner.rainbow-csv"], Jc = ["anysphere.cursor-resolver", "anysphere.cursor-always-local", "anysphere.cursor-agent-worker", "anysphere.cursor-agent-exec", "anysphere.cursor-agent-host", "anysphere.cursor-local-agent-runtime", "anysphere.cursor-checkout", "anysphere.cursor-explorer", "anysphere.cursor-commits", "anysphere.cursor-mcp", "anysphere.cursor-ndjson-ingest", "anysphere.cursor-retrieval", "cursor.cursor-browser-automation", "vscode.git", "vscode.git-base", "vscode.vscode-theme-seti", "undefined_publisher.cursor-themes", ...Zp, "vscodevim.vim", "asvetliakov.vscode-neovim", "tuttieee.emacs-mcx"], Qp = "typescriptteam.native-preview", Jp = ["typescriptteam.vscode-typescript", Qp], eh = ["vscode.css-language-features", "vscode.html-language-features", "vscode.json-language-features", "vscode.php-language-features", "vscode.typescript-language-features", ...Jp, "dbaeumer.vscode-eslint", "esbenp.prettier-vscode", "biomejs.biome", "denoland.vscode-deno", "vue.volar", "svelte.svelte-vscode", "astro-build.astro-vscode", "angular.ng-template", "bradlc.vscode-tailwindcss", "stylelint.vscode-stylelint", "unifiedjs.vscode-mdx", "ms-python.python", "ms-python.vscode-pylance", "charliermarsh.ruff", "golang.go", "rust-lang.rust-analyzer", "ms-vscode.cpptools", "llvm-vs-code-extensions.vscode-clangd", "ms-vscode.cmake-tools", "twxs.cmake", "ms-dotnettools.csharp", "jetbrains.resharper-code", "redhat.java", "vscjava.vscode-gradle", "jetbrains.intellij-server", "jetbrains.kotlin-server", "fwcd.kotlin", "mathiasfrohlich.kotlin", "scalameta.metals", "scala-lang.scala", "swiftlang.swift-vscode", "sswg.swift-lang", "bmewburn.vscode-intelephense-client", "devsense.phptools-vscode", "shopify.ruby-lsp", "dart-code.dart-code", "dart-code.flutter", "jakebecker.elixir-ls", "pgourlain.erlang", "betterthantomorrow.calva", "ziglang.vscode-zig", "sumneko.lua", "geequlim.godot-tools", "julialang.language-julia", "reditorsupport.r", "haskell.haskell", "ocamllabs.ocaml-platform", "fortran-lang.linter-gfortran", "ms-vscode.powershell", "timonwong.shellcheck", "mads-hartmann.bash-ide-vscode", "juanblanco.solidity", "nomicfoundation.hardhat-solidity", "james-yu.latex-workshop", "graphql.vscode-graphql", "graphql.vscode-graphql-syntax", "prisma.prisma", "hashicorp.terraform", "hashicorp.hcl", "ms-azuretools.vscode-bicep", "ms-azuretools.vscode-docker", "docker.docker", "redhat.vscode-yaml", "redhat.vscode-xml", "tamasfe.even-better-toml", "tombi-toml.tombi", "wholroyd.jinja", "samuelcolvin.jinjahtml", "zxh404.vscode-proto3", "bufbuild.vscode-buf", "jnoortheen.nix-ide", "bbenoist.nix"], Rv = [...eh], e0 = [...Jc, "anysphere.cursor-deeplink", "anysphere.cursor-resolver-helper", "anysphere.cursor-socket", "cursor.cursor-computer-use", "vscode.github-authentication"], t0 = [...Jc, "anysphere.remote-ssh", "anysphere.remote-wsl", "anysphere.remote-containers", "anysphere.cursor-polyfills-remote"], i0 = [...t0, ...eh], Mv = [...i0, ...e0], th = "src.vs.platform.reactivestorage.browser.reactiveStorageServiceImpl.persistentStorage", Pv = `${th}.applicationUser`, Ov = `${th}.applicationUser.subscription`, s0 = "workbench.panel.aichat.view", Fv = s0 + ".aichat.chatdata", n0 = [0.85, 1, 1.15, 1.3], r0 = "default", Bv = [r0, ...n0.map((e) => `${e}`)], o0 = ["aichat.newchataction", "composer.focusComposer", "aiSettings.action.open", "workbench.action.openSettings", "workbench.action.showCommands", "workbench.action.togglePanel", "workbench.action.toggleSidebarVisibility", "workbench.action.toggleUnifiedSidebar", "workbench.action.toggleAuxiliaryBar", "workbench.action.toggleFullScreen", "workbench.action.terminal.toggleTerminal", "workbench.action.terminal.new", "workbench.action.quickOpen", "workbench.action.closeActiveEditor", "workbench.action.newBrowserTab", "workbench.action.reloadBrowserTab", "workbench.action.focusBrowserLocationBar"], a0 = ["glass.newAgentFromKeyboard", "glass.newBrowser", "glass.newTab", "glass.openEditorPanelNewTabMenu", "glass.nextTab", "glass.previousTab", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.focusBrowserLocationBar", "glass.hardReloadBrowserTab", "glass.showBrowserFind", "glass.hideBrowserFind", "glass.toggleDesignMode", "glass.togglePanel", "glass.toggleSidebar", "glass.toggleSidebarFromKeyboard", "glass.toggleTerminal", "glass.focusInput", "glass.openFilePrioritizedPalette", "glass.openActionsPalette"], Hv = /* @__PURE__ */ new Set([...o0, ...a0]), Wt = class {
  constructor(e, t, i) {
    this.owner = e, this.debugNameSource = t, this.referenceFn = i;
  }
  getDebugName(e) {
    return l0(e, this);
  }
}, ih = /* @__PURE__ */ new Map(), Co = /* @__PURE__ */ new WeakMap();
function l0(e, t) {
  const i = Co.get(e);
  if (i) return i;
  const s = c0(e, t);
  if (s) {
    let n = ih.get(s) ?? 0;
    n++, ih.set(s, n);
    const r = n === 1 ? s : `${s}#${n}`;
    return Co.set(e, r), r;
  }
}
function c0(e, t) {
  const i = Co.get(e);
  if (i) return i;
  const s = t.owner ? d0(t.owner) + "." : "";
  let n;
  const r = t.debugNameSource;
  if (r !== void 0) if (typeof r == "function") {
    if (n = r(), n !== void 0) return s + n;
  } else return s + r;
  const o = t.referenceFn;
  if (o !== void 0 && (n = Do(o), n !== void 0)) return s + n;
  if (t.owner !== void 0) {
    const a = h0(t.owner, e);
    if (a !== void 0) return s + a;
  }
}
function h0(e, t) {
  for (const i in e) if (e[i] === t) return i;
}
var sh = /* @__PURE__ */ new Map(), nh = /* @__PURE__ */ new WeakMap();
function d0(e) {
  const t = nh.get(e);
  if (t) return t;
  const i = rh(e) ?? "Object";
  let s = sh.get(i) ?? 0;
  s++, sh.set(i, s);
  const n = s === 1 ? i : `${i}#${s}`;
  return nh.set(e, n), n;
}
function rh(e) {
  const t = e.constructor;
  if (t) return t.name === "Object" ? void 0 : t.name;
}
function Do(e) {
  const t = e.toString(), s = /\/\*\*\s*@description\s*([^*]*)\*\//.exec(t);
  return (s ? s[1] : void 0)?.trim();
}
var ji = (e, t) => e === t, di;
function Eo(e) {
  di ? di instanceof oh ? di.loggers.push(e) : di = new oh([di, e]) : di = e;
}
function Ee() {
  return di;
}
var ko = void 0;
function u0(e) {
  ko = e;
}
function f0(e) {
  ko && ko(e);
}
var oh = class {
  constructor(e) {
    this.loggers = e;
  }
  handleObservableCreated(e) {
    for (const t of this.loggers) t.handleObservableCreated(e);
  }
  handleOnListenerCountChanged(e, t) {
    for (const i of this.loggers) i.handleOnListenerCountChanged(e, t);
  }
  handleObservableUpdated(e, t) {
    for (const i of this.loggers) i.handleObservableUpdated(e, t);
  }
  handleAutorunCreated(e) {
    for (const t of this.loggers) t.handleAutorunCreated(e);
  }
  handleAutorunDisposed(e) {
    for (const t of this.loggers) t.handleAutorunDisposed(e);
  }
  handleAutorunDependencyChanged(e, t, i) {
    for (const s of this.loggers) s.handleAutorunDependencyChanged(e, t, i);
  }
  handleAutorunStarted(e) {
    for (const t of this.loggers) t.handleAutorunStarted(e);
  }
  handleAutorunFinished(e) {
    for (const t of this.loggers) t.handleAutorunFinished(e);
  }
  handleDerivedDependencyChanged(e, t, i) {
    for (const s of this.loggers) s.handleDerivedDependencyChanged(e, t, i);
  }
  handleDerivedCleared(e) {
    for (const t of this.loggers) t.handleDerivedCleared(e);
  }
  handleBeginTransaction(e) {
    for (const t of this.loggers) t.handleBeginTransaction(e);
  }
  handleEndTransaction(e) {
    for (const t of this.loggers) t.handleEndTransaction(e);
  }
}, ah;
function p0(e) {
  ah = e;
}
var lh;
function g0(e) {
  lh = e;
}
var To;
function m0(e) {
  To = e;
}
var ch = class {
  get TChange() {
    return null;
  }
  reportChanges() {
    this.get();
  }
  read(e) {
    return e ? e.readObservable(this) : this.get();
  }
  map(e, t) {
    const i = t === void 0 ? void 0 : e, s = t === void 0 ? e : t;
    return To({ owner: i, debugName: () => {
      const n = Do(s);
      if (n !== void 0) return n;
      const o = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/.exec(s.toString());
      if (o) return `${this.debugName}.${o[2]}`;
      if (!i) return `${this.debugName} (mapped)`;
    }, debugReferenceFn: s }, (n) => s(this.read(n), n));
  }
  flatten() {
    return To({ owner: void 0, debugName: () => `${this.debugName} (flattened)` }, (e) => this.read(e).read(e));
  }
  recomputeInitiallyAndOnChange(e, t) {
    return e.add(ah(this, t)), this;
  }
  keepObserved(e) {
    return e.add(lh(this)), this;
  }
  get debugValue() {
    return this.get();
  }
}, xo = class extends ch {
  constructor() {
    super(), this._observers = /* @__PURE__ */ new Set(), Ee()?.handleObservableCreated(this);
  }
  addObserver(e) {
    const t = this._observers.size;
    this._observers.add(e), t === 0 && this.onFirstObserverAdded(), t !== this._observers.size && Ee()?.handleOnListenerCountChanged(this, this._observers.size);
  }
  removeObserver(e) {
    const t = this._observers.delete(e);
    t && this._observers.size === 0 && this.onLastObserverRemoved(), t && Ee()?.handleOnListenerCountChanged(this, this._observers.size);
  }
  onFirstObserverAdded() {
  }
  onLastObserverRemoved() {
  }
  log() {
    const e = !!Ee();
    return f0(this), e || Ee()?.handleObservableCreated(this), this;
  }
  debugGetObservers() {
    return this._observers;
  }
};
function hh(e, t) {
  const i = new dh(e, t);
  try {
    e(i);
  } finally {
    i.finish();
  }
}
function v0(e, t, i) {
  e ? t(e) : hh(t, i);
}
var dh = class {
  constructor(e, t) {
    this._fn = e, this._getDebugName = t, this._updatingObservers = [], Ee()?.handleBeginTransaction(this);
  }
  getDebugName() {
    return this._getDebugName ? this._getDebugName() : Do(this._fn);
  }
  updateObserver(e, t) {
    if (!this._updatingObservers) {
      uh("Transaction already finished!"), hh((i) => {
        i.updateObserver(e, t);
      });
      return;
    }
    this._updatingObservers.push({ observer: e, observable: t }), e.beginUpdate(t);
  }
  finish() {
    const e = this._updatingObservers;
    if (!e) {
      uh("transaction.finish() has already been called!");
      return;
    }
    for (let t = 0; t < e.length; t++) {
      const { observer: i, observable: s } = e[t];
      i.endUpdate(s);
    }
    this._updatingObservers = null, Ee()?.handleEndTransaction(this);
  }
  debugGetUpdatingObservers() {
    return this._updatingObservers;
  }
};
function uh(e) {
  const t = new Error("BugIndicatingErrorRecovery: " + e);
  vt(t), console.error("recovered from an error that indicates a bug", t);
}
function fh(e, t) {
  let i;
  return typeof e == "string" ? i = new Wt(void 0, e, void 0) : i = new Wt(e, void 0, void 0), new Ao(i, t, ji);
}
var Ao = class extends xo {
  constructor(e, t, i) {
    super(), this._debugNameData = e, this._equalityComparator = i, this._value = t, Ee()?.handleObservableUpdated(this, { hadValue: false, newValue: t, change: void 0, didChange: true, oldValue: void 0 });
  }
  get debugName() {
    return this._debugNameData.getDebugName(this) ?? "ObservableValue";
  }
  get() {
    return this._value;
  }
  set(e, t, i) {
    if (i === void 0 && this._equalityComparator(this._value, e)) return;
    let s;
    t || (t = s = new dh(() => {
    }, () => `Setting ${this.debugName}`));
    try {
      const n = this._value;
      this._setValue(e), Ee()?.handleObservableUpdated(this, { oldValue: n, newValue: e, change: i, didChange: true, hadValue: true });
      for (const r of this._observers) t.updateObserver(r, this), r.handleChange(this, i);
    } finally {
      s && s.finish();
    }
  }
  toString() {
    return `${this.debugName}: ${this._value}`;
  }
  _setValue(e) {
    this._value = e;
  }
  debugGetState() {
    return { value: this._value };
  }
  debugSetValue(e) {
    this._value = e;
  }
};
function $n(e) {
  return new No(new Wt(void 0, void 0, e), e, void 0, void 0);
}
var No = class {
  constructor(e, t, i, s) {
    this._debugNameData = e, this._runFn = t, this.createChangeSummary = i, this._handleChange = s, this._state = 2, this._updateCount = 0, this._disposed = false, this._dependencies = /* @__PURE__ */ new Set(), this._dependenciesToBeRemoved = /* @__PURE__ */ new Set(), this._isRunning = false, this._changeSummary = this.createChangeSummary?.(), Ee()?.handleAutorunCreated(this), this._run(), si(this);
  }
  get debugName() {
    return this._debugNameData.getDebugName(this) ?? "(anonymous)";
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      for (const e of this._dependencies) e.removeObserver(this);
      this._dependencies.clear(), Ee()?.handleAutorunDisposed(this), Ut(this);
    }
  }
  _run() {
    const e = this._dependenciesToBeRemoved;
    this._dependenciesToBeRemoved = this._dependencies, this._dependencies = e, this._state = 3;
    try {
      if (!this._disposed) {
        Ee()?.handleAutorunStarted(this);
        const t = this._changeSummary;
        try {
          this._changeSummary = this.createChangeSummary?.(), this._isRunning = true, this._runFn(this, t);
        } catch (i) {
          gn(i);
        } finally {
          this._isRunning = false;
        }
      }
    } finally {
      this._disposed || Ee()?.handleAutorunFinished(this);
      for (const t of this._dependenciesToBeRemoved) t.removeObserver(this);
      this._dependenciesToBeRemoved.clear();
    }
  }
  toString() {
    return `Autorun<${this.debugName}>`;
  }
  beginUpdate(e) {
    this._state === 3 && (this._state = 1), this._updateCount++;
  }
  endUpdate(e) {
    try {
      if (this._updateCount === 1) do {
        if (this._state === 1) {
          this._state = 3;
          for (const t of this._dependencies) if (t.reportChanges(), this._state === 2) break;
        }
        this._state !== 3 && this._run();
      } while (this._state !== 3);
    } finally {
      this._updateCount--;
    }
    $l(() => this._updateCount >= 0);
  }
  handlePossibleChange(e) {
    this._state === 3 && this._isDependency(e) && (this._state = 1);
  }
  handleChange(e, t) {
    if (this._isDependency(e)) {
      Ee()?.handleAutorunDependencyChanged(this, e, t);
      try {
        (this._handleChange ? this._handleChange({ changedObservable: e, change: t, didChange: (s) => s === e }, this._changeSummary) : true) && (this._state = 2);
      } catch (i) {
        gn(i);
      }
    }
  }
  _isDependency(e) {
    return this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e);
  }
  readObservable(e) {
    if (!this._isRunning) throw new st("The reader object cannot be used outside its compute function!");
    if (this._disposed) return e.get();
    e.addObserver(this);
    const t = e.get();
    return this._dependencies.add(e), this._dependenciesToBeRemoved.delete(e), t;
  }
  debugGetState() {
    return { isRunning: this._isRunning, updateCount: this._updateCount, dependencies: this._dependencies, state: this._state };
  }
  debugRerun() {
    this._isRunning ? this._state = 2 : this._run();
  }
};
((e) => {
  e.Observer = No;
})($n || ($n = {}));
function zn(e, t) {
  return t !== void 0 ? new at(new Wt(e, void 0, t), t, void 0, void 0, void 0, ji) : new at(new Wt(void 0, void 0, e), e, void 0, void 0, void 0, ji);
}
function Io(e, t) {
  return new at(new Wt(e.owner, e.debugName, e.debugReferenceFn), t, void 0, void 0, e.onLastObserverRemoved, e.equalsFn ?? ji);
}
m0(Io);
function b0(e, t) {
  let i, s;
  t === void 0 ? (i = e, s = void 0) : (s = e, i = t);
  let n = new q();
  return new at(new Wt(s, void 0, i), (r) => (n.isDisposed ? n = new q() : n.clear(), i(r, n)), void 0, void 0, () => n.dispose(), ji);
}
var at = class extends xo {
  constructor(e, t, i, s, n = void 0, r) {
    super(), this._debugNameData = e, this._computeFn = t, this.createChangeSummary = i, this._handleChange = s, this._handleLastObserverRemoved = n, this._equalityComparator = r, this._state = 0, this._value = void 0, this._updateCount = 0, this._dependencies = /* @__PURE__ */ new Set(), this._dependenciesToBeRemoved = /* @__PURE__ */ new Set(), this._changeSummary = void 0, this._isUpdating = false, this._isComputing = false, this._removedObserverToCallEndUpdateOn = null, this._isReaderValid = false, this._changeSummary = this.createChangeSummary?.();
  }
  get debugName() {
    return this._debugNameData.getDebugName(this) ?? "(anonymous)";
  }
  onLastObserverRemoved() {
    this._state = 0, this._value = void 0, Ee()?.handleDerivedCleared(this);
    for (const e of this._dependencies) e.removeObserver(this);
    this._dependencies.clear(), this._handleLastObserverRemoved?.();
  }
  get() {
    if (this._isComputing, this._observers.size === 0) {
      let t;
      try {
        this._isReaderValid = true, t = this._computeFn(this, this.createChangeSummary?.());
      } finally {
        this._isReaderValid = false;
      }
      return this.onLastObserverRemoved(), t;
    } else {
      do {
        if (this._state === 1) {
          for (const t of this._dependencies) if (t.reportChanges(), this._state === 2) break;
        }
        this._state === 1 && (this._state = 3), this._state !== 3 && this._recompute();
      } while (this._state !== 3);
      return this._value;
    }
  }
  _recompute() {
    const e = this._dependenciesToBeRemoved;
    this._dependenciesToBeRemoved = this._dependencies, this._dependencies = e;
    const t = this._state !== 0, i = this._value;
    this._state = 3;
    let s = false;
    this._isComputing = true;
    try {
      const n = this._changeSummary;
      this._changeSummary = this.createChangeSummary?.();
      try {
        this._isReaderValid = true, this._value = this._computeFn(this, n);
      } finally {
        this._isReaderValid = false;
        for (const r of this._dependenciesToBeRemoved) r.removeObserver(this);
        this._dependenciesToBeRemoved.clear();
      }
      s = t && !this._equalityComparator(i, this._value), Ee()?.handleObservableUpdated(this, { oldValue: i, newValue: this._value, change: void 0, didChange: s, hadValue: t });
    } catch (n) {
      gn(n);
    }
    if (this._isComputing = false, s) for (const n of this._observers) n.handleChange(this, void 0);
  }
  toString() {
    return `LazyDerived<${this.debugName}>`;
  }
  beginUpdate(e) {
    if (this._isUpdating) throw new st("Cyclic deriveds are not supported yet!");
    this._updateCount++, this._isUpdating = true;
    try {
      const t = this._updateCount === 1;
      if (this._state === 3 && (this._state = 1, !t)) for (const i of this._observers) i.handlePossibleChange(this);
      if (t) for (const i of this._observers) i.beginUpdate(this);
    } finally {
      this._isUpdating = false;
    }
  }
  endUpdate(e) {
    if (this._updateCount--, this._updateCount === 0) {
      const t = [...this._observers];
      for (const i of t) i.endUpdate(this);
      if (this._removedObserverToCallEndUpdateOn) {
        const i = [...this._removedObserverToCallEndUpdateOn];
        this._removedObserverToCallEndUpdateOn = null;
        for (const s of i) s.endUpdate(this);
      }
    }
    $l(() => this._updateCount >= 0);
  }
  handlePossibleChange(e) {
    if (this._state === 3 && this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)) {
      this._state = 1;
      for (const t of this._observers) t.handlePossibleChange(this);
    }
  }
  handleChange(e, t) {
    if (this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)) {
      Ee()?.handleDerivedDependencyChanged(this, e, t);
      let i = false;
      try {
        i = this._handleChange ? this._handleChange({ changedObservable: e, change: t, didChange: (n) => n === e }, this._changeSummary) : true;
      } catch (n) {
        gn(n);
      }
      const s = this._state === 3;
      if (i && (this._state === 1 || s) && (this._state = 2, s)) for (const n of this._observers) n.handlePossibleChange(this);
    }
  }
  readObservable(e) {
    if (!this._isReaderValid) throw new st("The reader object cannot be used outside its compute function!");
    e.addObserver(this);
    const t = e.get();
    return this._dependencies.add(e), this._dependenciesToBeRemoved.delete(e), t;
  }
  addObserver(e) {
    const t = !this._observers.has(e) && this._updateCount > 0;
    super.addObserver(e), t && (this._removedObserverToCallEndUpdateOn && this._removedObserverToCallEndUpdateOn.has(e) ? this._removedObserverToCallEndUpdateOn.delete(e) : e.beginUpdate(this));
  }
  removeObserver(e) {
    this._observers.has(e) && this._updateCount > 0 && (this._removedObserverToCallEndUpdateOn || (this._removedObserverToCallEndUpdateOn = /* @__PURE__ */ new Set()), this._removedObserverToCallEndUpdateOn.add(e)), super.removeObserver(e);
  }
  debugGetState() {
    return { state: this._state, updateCount: this._updateCount, isComputing: this._isComputing, dependencies: this._dependencies, value: this._value };
  }
  debugSetValue(e) {
    this._value = e;
  }
};
function y0() {
  const e = new De();
  return Ut(e), e;
}
function ph(e) {
  return new w0(e);
}
var w0 = class extends ch {
  constructor(e) {
    super(), this.value = e;
  }
  get debugName() {
    return this.toString();
  }
  get() {
    return this.value;
  }
  addObserver(e) {
  }
  removeObserver(e) {
  }
  log() {
    return this;
  }
  toString() {
    return `Const: ${this.value}`;
  }
};
function gh(...e) {
  let t, i, s;
  return e.length === 3 ? [t, i, s] = e : [i, s] = e, new ui(new Wt(t, void 0, s), i, s, () => ui.globalTransaction, ji);
}
var ui = class extends xo {
  constructor(e, t, i, s, n) {
    super(), this._debugNameData = e, this.event = t, this._getValue = i, this._getTransaction = s, this._equalityComparator = n, this._hasValue = false, this._subscription = y0(), this.handleEvent = (r) => {
      const o = this._getValue(r), a = this._value, c = this._hasValue, h = !c || !this._equalityComparator(a, o);
      let d = false;
      h && (this._value = o, this._hasValue = true, c && (d = true, v0(this._getTransaction(), (u) => {
        Ee()?.handleObservableUpdated(this, { oldValue: a, newValue: o, change: void 0, didChange: h, hadValue: c });
        for (const f of this._observers) u.updateObserver(f, this), f.handleChange(this, void 0);
      }, () => {
        const u = this.getDebugName();
        return "Event fired" + (u ? `: ${u}` : "");
      }))), d || Ee()?.handleObservableUpdated(this, { oldValue: a, newValue: o, change: void 0, didChange: h, hadValue: c });
    };
  }
  getDebugName() {
    return this._debugNameData.getDebugName(this);
  }
  get debugName() {
    const e = this.getDebugName();
    return "From Event" + (e ? `: ${e}` : "");
  }
  onFirstObserverAdded() {
    this._subscription.value = this.event(this.handleEvent);
  }
  onLastObserverRemoved() {
    this._subscription.clear(), this._hasValue = false, this._value = void 0;
  }
  get() {
    return this._subscription.value ? (this._hasValue || this.handleEvent(void 0), this._value) : this._getValue(void 0);
  }
  debugSetValue(e) {
    this._value = e;
  }
};
((e) => {
  e.Observer = ui;
  function t(i, s) {
    let n = false;
    ui.globalTransaction === void 0 && (ui.globalTransaction = i, n = true);
    try {
      s();
    } finally {
      n && (ui.globalTransaction = void 0);
    }
  }
  e.batchEventsGlobally = t;
})(gh || (gh = {}));
function _0(e) {
  const t = new mh(false, void 0);
  return e.addObserver(t), re(() => {
    e.removeObserver(t);
  });
}
g0(_0);
function S0(e, t) {
  const i = new mh(true, t);
  e.addObserver(i);
  try {
    i.beginUpdate(e);
  } finally {
    i.endUpdate(e);
  }
  return re(() => {
    e.removeObserver(i);
  });
}
p0(S0);
var mh = class {
  constructor(e, t) {
    this._forceRecompute = e, this._handleValue = t, this._counter = 0;
  }
  beginUpdate(e) {
    this._counter++;
  }
  endUpdate(e) {
    this._counter === 1 && this._forceRecompute && (this._handleValue ? this._handleValue(e.get()) : e.reportChanges()), this._counter--;
  }
  handlePossibleChange(e) {
  }
  handleChange(e, t) {
  }
}, Wn;
function C0(e) {
  Wn || (Wn = new vh(), Eo(Wn)), Wn.addFilteredObj(e);
}
var vh = class {
  constructor() {
    this.indentation = 0, this.changedObservablesSets = /* @__PURE__ */ new WeakMap();
  }
  addFilteredObj(e) {
    this._filteredObjects || (this._filteredObjects = /* @__PURE__ */ new Set()), this._filteredObjects.add(e);
  }
  _isIncluded(e) {
    return this._filteredObjects?.has(e) ?? true;
  }
  textToConsoleArgs(e) {
    return D0([Yi(T0("|  ", this.indentation)), e]);
  }
  formatInfo(e) {
    return e.hadValue ? e.didChange ? [Yi(" "), lt(Rt(e.oldValue, 70), { color: "red", strikeThrough: true }), Yi(" "), lt(Rt(e.newValue, 60), { color: "green" })] : [Yi(" (unchanged)")] : [Yi(" "), lt(Rt(e.newValue, 60), { color: "green" }), Yi(" (initial)")];
  }
  handleObservableCreated(e) {
    if (e instanceof at) {
      const t = e;
      if (this.changedObservablesSets.set(t, /* @__PURE__ */ new Set()), false) {
        const s = [];
        t.__debugUpdating = s;
        const n = t.beginUpdate;
        t.beginUpdate = (o) => (s.push(o), n.apply(t, [o]));
        const r = t.endUpdate;
        t.endUpdate = (o) => {
          const a = s.indexOf(o);
          return a === -1 && console.error("endUpdate called without beginUpdate", t.debugName, o.debugName), s.splice(a, 1), r.apply(t, [o]);
        };
      }
    }
  }
  handleOnListenerCountChanged(e, t) {
  }
  handleObservableUpdated(e, t) {
    if (this._isIncluded(e)) {
      if (e instanceof at) {
        this._handleDerivedRecomputed(e, t);
        return;
      }
      console.log(...this.textToConsoleArgs([Xi("observable value changed"), lt(e.debugName, { color: "BlueViolet" }), ...this.formatInfo(t)]));
    }
  }
  formatChanges(e) {
    if (e.size !== 0) return lt(" (changed deps: " + [...e].map((t) => t.debugName).join(", ") + ")", { color: "gray" });
  }
  handleDerivedDependencyChanged(e, t, i) {
    this._isIncluded(e) && this.changedObservablesSets.get(e)?.add(t);
  }
  _handleDerivedRecomputed(e, t) {
    if (!this._isIncluded(e)) return;
    const i = this.changedObservablesSets.get(e);
    i && (console.log(...this.textToConsoleArgs([Xi("derived recomputed"), lt(e.debugName, { color: "BlueViolet" }), ...this.formatInfo(t), this.formatChanges(i), { data: [{ fn: e._debugNameData.referenceFn ?? e._computeFn }] }])), i.clear());
  }
  handleDerivedCleared(e) {
    this._isIncluded(e) && console.log(...this.textToConsoleArgs([Xi("derived cleared"), lt(e.debugName, { color: "BlueViolet" })]));
  }
  handleFromEventObservableTriggered(e, t) {
    this._isIncluded(e) && console.log(...this.textToConsoleArgs([Xi("observable from event triggered"), lt(e.debugName, { color: "BlueViolet" }), ...this.formatInfo(t), { data: [{ fn: e._getValue }] }]));
  }
  handleAutorunCreated(e) {
    this._isIncluded(e) && this.changedObservablesSets.set(e, /* @__PURE__ */ new Set());
  }
  handleAutorunDisposed(e) {
  }
  handleAutorunDependencyChanged(e, t, i) {
    this._isIncluded(e) && this.changedObservablesSets.get(e).add(t);
  }
  handleAutorunStarted(e) {
    const t = this.changedObservablesSets.get(e);
    t && (this._isIncluded(e) && console.log(...this.textToConsoleArgs([Xi("autorun"), lt(e.debugName, { color: "BlueViolet" }), this.formatChanges(t), { data: [{ fn: e._debugNameData.referenceFn ?? e._runFn }] }])), t.clear(), this.indentation++);
  }
  handleAutorunFinished(e) {
    this.indentation--;
  }
  handleBeginTransaction(e) {
    let t = e.getDebugName();
    t === void 0 && (t = ""), this._isIncluded(e) && console.log(...this.textToConsoleArgs([Xi("transaction"), lt(t, { color: "BlueViolet" }), { data: [{ fn: e._fn }] }])), this.indentation++;
  }
  handleEndTransaction() {
    this.indentation--;
  }
};
function D0(e) {
  const t = new Array(), i = [];
  let s = "";
  function n(o) {
    if ("length" in o) for (const a of o) a && n(a);
    else "text" in o ? (s += `%c${o.text}`, t.push(o.style), o.data && i.push(...o.data)) : "data" in o && i.push(...o.data);
  }
  n(e);
  const r = [s, ...t];
  return r.push(...i), r;
}
function Yi(e) {
  return lt(e, { color: "black" });
}
function Xi(e) {
  return lt(x0(`${e}: `, 10), { color: "black", bold: true });
}
function lt(e, t = { color: "black" }) {
  function i(n) {
    return Object.entries(n).reduce((r, [o, a]) => `${r}${o}:${a};`, "");
  }
  const s = { color: t.color };
  return t.strikeThrough && (s["text-decoration"] = "line-through"), t.bold && (s["font-weight"] = "bold"), { text: e, style: i(s) };
}
function Rt(e, t) {
  switch (typeof e) {
    case "number":
      return "" + e;
    case "string":
      return e.length + 2 <= t ? `"${e}"` : `"${e.substr(0, t - 7)}"+...`;
    case "boolean":
      return e ? "true" : "false";
    case "undefined":
      return "undefined";
    case "object":
      return e === null ? "null" : Array.isArray(e) ? E0(e, t) : k0(e, t);
    case "symbol":
      return e.toString();
    case "function":
      return `[[Function${e.name ? " " + e.name : ""}]]`;
    default:
      return "" + e;
  }
}
function E0(e, t) {
  let i = "[ ", s = true;
  for (const n of e) {
    if (s || (i += ", "), i.length - 5 > t) {
      i += "...";
      break;
    }
    s = false, i += `${Rt(n, t - i.length)}`;
  }
  return i += " ]", i;
}
function k0(e, t) {
  if (typeof e.toString == "function" && e.toString !== Object.prototype.toString) {
    const r = e.toString();
    return r.length <= t ? r : r.substring(0, t - 3) + "...";
  }
  const i = rh(e);
  let s = i ? i + "(" : "{ ", n = true;
  for (const [r, o] of Object.entries(e)) {
    if (n || (s += ", "), s.length - 5 > t) {
      s += "...";
      break;
    }
    n = false, s += `${r}: ${Rt(o, t - s.length)}`;
  }
  return s += i ? ")" : " }", s;
}
function T0(e, t) {
  let i = "";
  for (let s = 1; s <= t; s++) i += e;
  return i;
}
function x0(e, t) {
  for (; e.length < t; ) e += " ";
  return e;
}
var A0 = class qa {
  constructor(t, i) {
    this._channelFactory = t, this._getHandler = i, this._channel = this._channelFactory({ handleNotification: (r) => {
      const o = r, a = this._getHandler().notifications[o[0]];
      if (!a) throw new Error(`Unknown notification "${o[0]}"!`);
      a(...o[1]);
    }, handleRequest: (r) => {
      const o = r;
      try {
        return { type: "result", value: this._getHandler().requests[o[0]](...o[1]) };
      } catch (a) {
        return { type: "error", value: a };
      }
    } });
    const s = new Proxy({}, { get: (r, o) => {
      if (o !== "then") return async (...a) => {
        const c = await this._channel.sendRequest([o, a]);
        if (c.type === "error") throw c.value;
        return c.value;
      };
    } }), n = new Proxy({}, { get: (r, o) => {
      if (o !== "then") return (...a) => {
        this._channel.sendNotification([o, a]);
      };
    } });
    this.api = { notifications: n, requests: s };
  }
  static createHost(t, i) {
    return new qa(t, i);
  }
  static createClient(t, i) {
    return new qa(t, i);
  }
};
function N0(e, t) {
  const i = globalThis;
  let s = [], n;
  const { channel: r, handler: o } = I0({ sendNotification: (c) => {
    n ? n.sendNotification(c) : s.push(c);
  } });
  let a;
  return (i.$$debugValueEditor_debugChannels ?? (i.$$debugValueEditor_debugChannels = {}))[e] = (c) => {
    a = t(), n = c;
    for (const h of s) c.sendNotification(h);
    return s = [], o;
  }, A0.createClient(r, () => {
    if (!a) throw new Error("Not supported");
    return a;
  });
}
function I0(e) {
  let t;
  return { channel: (s) => (t = s, { sendNotification: (n) => {
    e.sendNotification(n);
  }, sendRequest: (n) => {
    throw new Error("not supported");
  } }), handler: { handleRequest: (s) => s.type === "notification" ? t?.handleNotification(s.data) : t?.handleRequest(s.data) } };
}
function bh(e, t) {
  const i = e.split(`
`);
  let s = -1;
  for (const n of i.slice(1)) {
    if (s++, t && t.test(n)) continue;
    const r = L0(n);
    if (r) return r;
  }
}
function L0(e) {
  const t = e.match(/\((.*):(\d+):(\d+)\)/);
  if (t) return { fileName: t[1], line: parseInt(t[2]), column: parseInt(t[3]), id: e };
  const i = e.match(/at ([^\(\)]*):(\d+):(\d+)/);
  if (i) return { fileName: i[1], line: parseInt(i[2]), column: parseInt(i[3]), id: e };
}
var R0 = class {
  constructor() {
    this._timeout = void 0;
  }
  throttle(e, t) {
    this._timeout === void 0 && (this._timeout = setTimeout(() => {
      this._timeout = void 0, e();
    }, t));
  }
  dispose() {
    this._timeout !== void 0 && clearTimeout(this._timeout);
  }
};
function yh(e, t) {
  for (const i in t) e[i] && typeof e[i] == "object" && t[i] && typeof t[i] == "object" ? yh(e[i], t[i]) : e[i] = t[i];
}
function wh(e, t) {
  for (const i in t) t[i] === null ? delete e[i] : e[i] && typeof e[i] == "object" && t[i] && typeof t[i] == "object" ? wh(e[i], t[i]) : e[i] = t[i];
}
var _h = class rn {
  constructor() {
    this._declarationId = 0, this._instanceId = 0, this._declarations = /* @__PURE__ */ new Map(), this._instanceInfos = /* @__PURE__ */ new WeakMap(), this._aliveInstances = /* @__PURE__ */ new Map(), this._activeTransactions = /* @__PURE__ */ new Set(), this._channel = N0("observableDevTools", () => ({ notifications: { setDeclarationIdFilter: (t) => {
    }, logObservableValue: (t) => {
      console.log("logObservableValue", t);
    }, flushUpdates: () => {
      this._flushUpdates();
    }, resetUpdates: () => {
      this._pendingChanges = null, this._channel.api.notifications.handleChange(this._fullState, true);
    } }, requests: { getDeclarations: () => {
      const t = {};
      for (const i of this._declarations.values()) t[i.id] = i;
      return { decls: t };
    }, getSummarizedInstances: () => null, getObservableValueInfo: (t) => ({ observers: [...this._aliveInstances.get(t).debugGetObservers()].map((s) => this._formatObserver(s)).filter(ys) }), getDerivedInfo: (t) => {
      const i = this._aliveInstances.get(t);
      return { dependencies: [...i.debugGetState().dependencies].map((s) => this._formatObservable(s)).filter(ys), observers: [...i.debugGetObservers()].map((s) => this._formatObserver(s)).filter(ys) };
    }, getAutorunInfo: (t) => ({ dependencies: [...this._aliveInstances.get(t).debugGetState().dependencies].map((s) => this._formatObservable(s)).filter(ys) }), getTransactionState: () => this.getTransactionState(), setValue: (t, i) => {
      const s = this._aliveInstances.get(t);
      if (s instanceof at) s.debugSetValue(i);
      else if (s instanceof Ao) s.debugSetValue(i);
      else if (s instanceof ui) s.debugSetValue(i);
      else throw new st("Observable is not supported");
      const n = [...s.debugGetObservers()];
      for (const r of n) r.beginUpdate(s);
      for (const r of n) r.handleChange(s, void 0);
      for (const r of n) r.endUpdate(s);
    }, getValue: (t) => {
      const i = this._aliveInstances.get(t);
      if (i instanceof at) return Rt(i.debugGetState().value, 200);
      if (i instanceof Ao) return Rt(i.debugGetState().value, 200);
    } } })), this._pendingChanges = null, this._changeThrottler = new R0(), this._fullState = {}, this._flushUpdates = () => {
      this._pendingChanges !== null && (this._channel.api.notifications.handleChange(this._pendingChanges, false), this._pendingChanges = null);
    };
  }
  static getInstance() {
    return rn._instance === void 0 && (rn._instance = new rn()), rn._instance;
  }
  getTransactionState() {
    const t = [], i = [...this._activeTransactions];
    if (i.length === 0) return;
    const s = i.flatMap((r) => r.debugGetUpdatingObservers() ?? []).map((r) => r.observer), n = /* @__PURE__ */ new Set();
    for (; s.length > 0; ) {
      const r = s.shift();
      if (n.has(r)) continue;
      n.add(r);
      const o = this._getInfo(r, (a) => {
        n.has(a) || s.push(a);
      });
      o && t.push(o);
    }
    return { names: i.map((r) => r.getDebugName() ?? "tx"), affected: t };
  }
  _getObservableInfo(t) {
    const i = this._instanceInfos.get(t);
    if (!i) {
      vt(new st("No info found"));
      return;
    }
    return i;
  }
  _getAutorunInfo(t) {
    const i = this._instanceInfos.get(t);
    if (!i) {
      vt(new st("No info found"));
      return;
    }
    return i;
  }
  _getInfo(t, i) {
    if (t instanceof at) {
      const s = [...t.debugGetObservers()];
      for (const c of s) i(c);
      const n = this._getObservableInfo(t);
      if (!n) return;
      const r = t.debugGetState(), o = { name: t.debugName, instanceId: n.instanceId, updateCount: r.updateCount }, a = [...n.changedObservables].map((c) => this._instanceInfos.get(c)?.instanceId).filter(ys);
      if (r.isComputing) return { ...o, type: "observable/derived", state: "updating", changedDependencies: a, initialComputation: false };
      switch (r.state) {
        case 0:
          return { ...o, type: "observable/derived", state: "noValue" };
        case 3:
          return { ...o, type: "observable/derived", state: "upToDate" };
        case 2:
          return { ...o, type: "observable/derived", state: "stale", changedDependencies: a };
        case 1:
          return { ...o, type: "observable/derived", state: "possiblyStale" };
      }
    } else if (t instanceof No) {
      const s = this._getAutorunInfo(t);
      if (!s) return;
      const n = { name: t.debugName, instanceId: s.instanceId, updateCount: s.updateCount }, r = [...s.changedObservables].map((o) => this._instanceInfos.get(o).instanceId);
      if (t.debugGetState().isRunning) return { ...n, type: "autorun", state: "updating", changedDependencies: r };
      switch (t.debugGetState().state) {
        case 3:
          return { ...n, type: "autorun", state: "upToDate" };
        case 2:
          return { ...n, type: "autorun", state: "stale", changedDependencies: r };
        case 1:
          return { ...n, type: "autorun", state: "possiblyStale" };
      }
    }
  }
  _formatObservable(t) {
    const i = this._getObservableInfo(t);
    if (i) return { name: t.debugName, instanceId: i.instanceId };
  }
  _formatObserver(t) {
    if (t instanceof at) return { name: t.toString(), instanceId: this._getObservableInfo(t)?.instanceId };
    const i = this._getAutorunInfo(t);
    if (i) return { name: t.toString(), instanceId: i.instanceId };
  }
  _handleChange(t) {
    wh(this._fullState, t), this._pendingChanges === null ? this._pendingChanges = t : yh(this._pendingChanges, t), this._changeThrottler.throttle(this._flushUpdates, 10);
  }
  _getDeclarationId(t) {
    let i = true, s;
    const n = Error;
    for (; ; ) {
      const o = n.stackTraceLimit;
      n.stackTraceLimit = i ? 6 : 20;
      const a = new Error().stack;
      n.stackTraceLimit = o;
      let c = bh(a, /[/\\]observableInternal[/\\]|\.observe|[/\\]util(s)?\./);
      if (!i && !c && (c = bh(a, /[/\\]observableInternal[/\\]|\.observe/)), c) {
        s = c;
        break;
      }
      if (!i) {
        console.error("Could not find location for declaration", new Error().stack), s = { fileName: "unknown", line: 0, column: 0, id: "unknown" };
        break;
      }
      i = false;
    }
    let r = this._declarations.get(s.id);
    return r === void 0 && (r = { id: this._declarationId++, type: t, url: s.fileName, line: s.line, column: s.column }, this._declarations.set(s.id, r), this._handleChange({ decls: { [r.id]: r } })), r.id;
  }
  handleObservableCreated(t) {
    const s = { declarationId: this._getDeclarationId("observable/value"), instanceId: this._instanceId++, listenerCount: 0, lastValue: void 0, updateCount: 0, changedObservables: /* @__PURE__ */ new Set() };
    this._instanceInfos.set(t, s);
  }
  handleOnListenerCountChanged(t, i) {
    const s = this._getObservableInfo(t);
    if (s) {
      if (s.listenerCount === 0 && i > 0) {
        const n = t instanceof at ? "observable/derived" : "observable/value";
        this._aliveInstances.set(s.instanceId, t), this._handleChange({ instances: { [s.instanceId]: { instanceId: s.instanceId, declarationId: s.declarationId, formattedValue: s.lastValue, type: n, name: t.debugName } } });
      } else s.listenerCount > 0 && i === 0 && (this._handleChange({ instances: { [s.instanceId]: null } }), this._aliveInstances.delete(s.instanceId));
      s.listenerCount = i;
    }
  }
  handleObservableUpdated(t, i) {
    if (t instanceof at) {
      this._handleDerivedRecomputed(t, i);
      return;
    }
    const s = this._getObservableInfo(t);
    s && i.didChange && (s.lastValue = Rt(i.newValue, 30), s.listenerCount > 0 && this._handleChange({ instances: { [s.instanceId]: { formattedValue: s.lastValue } } }));
  }
  handleAutorunCreated(t) {
    const s = { declarationId: this._getDeclarationId("autorun"), instanceId: this._instanceId++, updateCount: 0, changedObservables: /* @__PURE__ */ new Set() };
    this._instanceInfos.set(t, s), this._aliveInstances.set(s.instanceId, t), s && this._handleChange({ instances: { [s.instanceId]: { instanceId: s.instanceId, declarationId: s.declarationId, runCount: 0, type: "autorun", name: t.debugName } } });
  }
  handleAutorunDisposed(t) {
    const i = this._getAutorunInfo(t);
    i && (this._handleChange({ instances: { [i.instanceId]: null } }), this._instanceInfos.delete(t), this._aliveInstances.delete(i.instanceId));
  }
  handleAutorunDependencyChanged(t, i, s) {
    const n = this._getAutorunInfo(t);
    n && n.changedObservables.add(i);
  }
  handleAutorunStarted(t) {
  }
  handleAutorunFinished(t) {
    const i = this._getAutorunInfo(t);
    i && (i.changedObservables.clear(), i.updateCount++, this._handleChange({ instances: { [i.instanceId]: { runCount: i.updateCount } } }));
  }
  handleDerivedDependencyChanged(t, i, s) {
    const n = this._getObservableInfo(t);
    n && n.changedObservables.add(i);
  }
  _handleDerivedRecomputed(t, i) {
    const s = this._getObservableInfo(t);
    if (!s) return;
    const n = Rt(i.newValue, 30);
    s.updateCount++, s.changedObservables.clear(), s.lastValue = n, s.listenerCount > 0 && this._handleChange({ instances: { [s.instanceId]: { formattedValue: n, recomputationCount: s.updateCount } } });
  }
  handleDerivedCleared(t) {
    const i = this._getObservableInfo(t);
    i && (i.lastValue = void 0, i.changedObservables.clear(), i.listenerCount > 0 && this._handleChange({ instances: { [i.instanceId]: { formattedValue: void 0 } } }));
  }
  handleBeginTransaction(t) {
    this._activeTransactions.add(t);
  }
  handleEndTransaction(t) {
    this._activeTransactions.delete(t);
  }
};
_h._instance = void 0;
var M0 = _h;
u0(C0);
var P0 = false;
P0 && Eo(new vh()), Jr && Jr.VSCODE_DEV_DEBUG && Eo(M0.getInstance());
var Sh = (e, t) => (t = Symbol[e]) ? t : /* @__PURE__ */ Symbol.for("Symbol." + e), Ch = (e) => {
  throw TypeError(e);
}, O0 = (e, t, i) => {
  if (t != null) {
    typeof t != "object" && typeof t != "function" && Ch("Object expected");
    var s, n;
    i && (s = t[Sh("asyncDispose")]), s === void 0 && (s = t[Sh("dispose")], i && (n = s)), typeof s != "function" && Ch("Object not disposable"), n && (s = function() {
      try {
        n.call(this);
      } catch (r) {
        return Promise.reject(r);
      }
    }), e.push([i, s, t]);
  } else i && e.push([i]);
  return t;
}, F0 = (e, t, i) => {
  var s = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, h) {
    return h = Error(c), h.name = "SuppressedError", h.error = o, h.suppressed = a, h;
  }, n = (o) => t = i ? new s(o, t, "An error was suppressed during disposal") : (i = true, o), r = (o) => {
    for (; o = e.pop(); ) try {
      var a = o[1] && o[1].call(o[2]);
      if (o[0]) return Promise.resolve(a).then(r, (c) => (n(c), r()));
    } catch (c) {
      n(c);
    }
    if (i) throw t;
  };
  return r();
}, Dh = /* @__PURE__ */ new Map();
function Ns(e = x.document.head, t, i) {
  const s = document.createElement("style");
  if (s.type = "text/css", s.media = "screen", t?.(s), e.appendChild(s), i && i.add(re(() => s.remove())), e === x.document.head) {
    const n = /* @__PURE__ */ new Set();
    Dh.set(s, n), i && i.add(re(() => Dh.delete(s)));
    for (const { window: r, disposables: o } of Ro()) {
      if (r === x) continue;
      const a = o.add(B0(s, n, r));
      i?.add(a);
    }
  }
  return s;
}
function B0(e, t, i) {
  var s = [];
  try {
    const o = O0(s, new I1(new q())), a = e.cloneNode(true);
    i.document.head.appendChild(a), o.value.add(re(() => a.remove()));
    for (const c of H0(e)) a.sheet?.insertRule(c.cssText, a.sheet?.cssRules.length);
    return o.value.add(Uh.observe(e, o.value, { childList: true })(() => {
      a.textContent = e.textContent;
    })), t.add(a), o.value.add(re(() => t.delete(a))), o.transferOut();
  } catch (o) {
    var n = o, r = true;
  } finally {
    F0(s, n, r);
  }
}
function H0(e) {
  return e?.sheet?.rules ? e.sheet.rules : e?.sheet?.cssRules ? e.sheet.cssRules : [];
}
var Eh;
((e) => {
  function t(n = void 0) {
    return (r, o, a) => {
      const c = o.class;
      delete o.class;
      const h = o.ref;
      delete o.ref;
      const d = o.obsRef;
      return delete o.obsRef, new z0(r, h, d, n, c, o, a);
    };
  }
  function i(n, r = void 0) {
    const o = t(r);
    return (a, c) => o(n, a, c);
  }
  e.div = i("div"), e.elem = t(void 0), e.svg = i("svg", "http://www.w3.org/2000/svg"), e.svgElem = t("http://www.w3.org/2000/svg");
  function s() {
    let n;
    const r = function(o) {
      n = o;
    };
    return Object.defineProperty(r, "element", { get() {
      if (!n) throw new st("Make sure the ref is set before accessing the element. Maybe wrong initialization order?");
      return n;
    } }), r;
  }
  e.ref = s;
})(Eh || (Eh = {}));
var U0 = class Ou {
  constructor(t, i, s, n, r, o, a) {
    this._deriveds = [], this._element = n ? document.createElementNS(n, t) : document.createElement(t), i && i(this._element), s && this._deriveds.push(b0((h, d) => {
      s(this), d.add({ dispose: () => {
        s(null);
      } });
    })), r && (Ah(r) ? this._deriveds.push(zn(this, (h) => {
      kh(this._element, xh(r, h));
    })) : kh(this._element, xh(r, void 0)));
    for (const [h, d] of Object.entries(o)) if (h === "style") for (const [u, f] of Object.entries(d)) {
      const p = Lo(u);
      fi(f) ? this._deriveds.push(Io({ owner: this, debugName: () => `set.style.${p}` }, (m) => {
        this._element.style.setProperty(p, Nh(f.read(m)));
      })) : this._element.style.setProperty(p, Nh(f));
    }
    else h === "tabIndex" ? fi(d) ? this._deriveds.push(zn(this, (u) => {
      this._element.tabIndex = d.read(u);
    })) : this._element.tabIndex = d : h.startsWith("on") ? this._element[h] = d : fi(d) ? this._deriveds.push(Io({ owner: this, debugName: () => `set.${h}` }, (u) => {
      Lh(this._element, h, d.read(u));
    })) : Lh(this._element, h, d);
    if (a) {
      let h = function(u, f) {
        return fi(f) ? h(u, f.read(u)) : Array.isArray(f) ? f.flatMap((p) => h(u, p)) : f instanceof Ou ? (u && f.readEffect(u), [f._element]) : f ? [f] : [];
      };
      var c = h;
      const d = zn(this, (u) => {
        this._element.replaceChildren(...h(u, a));
      });
      this._deriveds.push(d), Ih(a) || d.get();
    }
  }
  readEffect(t) {
    for (const i of this._deriveds) i.read(t);
  }
  keepUpdated(t) {
    return zn((i) => {
      this.readEffect(i);
    }).recomputeInitiallyAndOnChange(t), this;
  }
  toDisposableLiveElement() {
    const t = new q();
    return this.keepUpdated(t), new $0(this._element, t);
  }
};
function kh(e, t) {
  $h(e) ? e.setAttribute("class", t) : e.className = t;
}
function Th(e, t, i) {
  if (fi(e)) {
    i(e.read(t));
    return;
  }
  if (Array.isArray(e)) {
    for (const s of e) Th(s, t, i);
    return;
  }
  i(e);
}
function xh(e, t) {
  let i = "";
  return Th(e, t, (s) => {
    s && (i.length === 0 ? i = s : i += " " + s);
  }), i;
}
function Ah(e) {
  return fi(e) ? true : Array.isArray(e) ? e.some((t) => Ah(t)) : false;
}
function Nh(e) {
  return typeof e == "number" ? e + "px" : e;
}
function Ih(e) {
  return fi(e) ? true : Array.isArray(e) ? e.some((t) => Ih(t)) : false;
}
var $0 = class {
  constructor(e, t) {
    this.element = e, this._disposable = t;
  }
  dispose() {
    this._disposable.dispose();
  }
}, z0 = class extends U0 {
  constructor() {
    super(...arguments), this._isHovered = void 0, this._didMouseMoveDuringHover = void 0;
  }
  get element() {
    return this._element;
  }
  get isHovered() {
    if (!this._isHovered) {
      const e = fh("hovered", false);
      this._element.addEventListener("mouseenter", (t) => e.set(true, void 0)), this._element.addEventListener("mouseleave", (t) => e.set(false, void 0)), this._isHovered = e;
    }
    return this._isHovered;
  }
  get didMouseMoveDuringHover() {
    if (!this._didMouseMoveDuringHover) {
      let e = false;
      const t = fh("didMouseMoveDuringHover", false);
      this._element.addEventListener("mouseenter", (i) => {
        e = true;
      }), this._element.addEventListener("mousemove", (i) => {
        e && t.set(true, void 0);
      }), this._element.addEventListener("mouseleave", (i) => {
        e = false, t.set(false, void 0);
      }), this._didMouseMoveDuringHover = t;
    }
    return this._didMouseMoveDuringHover;
  }
};
function Lh(e, t, i) {
  i == null ? e.removeAttribute(Lo(t)) : e.setAttribute(Lo(t), String(i));
}
function Lo(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function fi(e) {
  return e && typeof e == "object" && e.read !== void 0 && e.reportChanges !== void 0;
}
var { registerWindow: Uv, getWindow: oe, getDocument: W0, getWindows: Ro, getWindowsCount: V0, getWindowId: G0, getWindowById: $v, hasWindow: zv, onDidRegisterWindow: q0, onWillUnregisterWindow: Wv, onDidUnregisterWindow: Vv } = (function() {
  const e = /* @__PURE__ */ new Map();
  e1(x, 1);
  const t = { window: x, disposables: new q() };
  e.set(x.vscodeWindowId, t);
  const i = new L(), s = new L(), n = new L();
  function r(o, a) {
    return (typeof o == "number" ? e.get(o) : void 0) ?? (a ? t : void 0);
  }
  return { onDidRegisterWindow: i.event, onWillUnregisterWindow: n.event, onDidUnregisterWindow: s.event, registerWindow(o) {
    if (e.has(o.vscodeWindowId)) return ee.None;
    const a = new q(), c = { window: o, disposables: a.add(new q()) };
    return e.set(o.vscodeWindowId, c), a.add(re(() => {
      e.delete(o.vscodeWindowId), s.fire(o);
    })), a.add(O(o, j.BEFORE_UNLOAD, () => {
      n.fire(o);
    })), i.fire(c), a;
  }, getWindows() {
    return e.values();
  }, getWindowsCount() {
    return e.size;
  }, getWindowId(o) {
    return o.vscodeWindowId;
  }, hasWindow(o) {
    return e.has(o);
  }, getWindowById: r, getWindow(o) {
    const a = o;
    if (a?.ownerDocument?.defaultView) return a.ownerDocument.defaultView.window;
    const c = o;
    return c?.view ? c.view.window : x;
  }, getDocument(o) {
    return oe(o).document;
  } };
})();
function pi(e) {
  e.replaceChildren();
}
var K0 = class {
  constructor(e, t, i, s) {
    this._node = e, this._type = t, this._handler = i, this._options = s || false, this._node.addEventListener(this._type, this._handler, this._options);
  }
  dispose() {
    this._handler && (this._node.removeEventListener(this._type, this._handler, this._options), this._node = null, this._handler = null);
  }
};
function O(e, t, i, s) {
  return new K0(e, t, i, s);
}
function j0(e, t) {
  return function(i) {
    return t(new ri(e, i));
  };
}
function Y0(e) {
  return function(t) {
    return e(new Oe(t));
  };
}
var Vn = function(t, i, s, n) {
  let r = s;
  return i === "click" || i === "mousedown" || i === "contextmenu" ? r = j0(oe(t), s) : (i === "keydown" || i === "keypress" || i === "keyup") && (r = Y0(s)), O(t, i, r, n);
}, X0, Vt, Z0 = class extends Ep {
  constructor(e) {
    super(), this.defaultTarget = e && oe(e);
  }
  cancelAndSet(e, t, i) {
    return super.cancelAndSet(e, t, i ?? this.defaultTarget);
  }
}, Rh = class {
  constructor(e, t = 0) {
    this._runner = e, this.priority = t, this._canceled = false;
  }
  dispose() {
    this._canceled = true;
  }
  execute() {
    if (!this._canceled) try {
      this._runner();
    } catch (e) {
      vt(e);
    }
  }
  static sort(e, t) {
    return t.priority - e.priority;
  }
};
(function() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), i = (s) => {
    t.set(s, false);
    const n = e.get(s) ?? [];
    e.set(s, []), n.sort(Rh.sort);
    for (const r of n) r.execute();
  };
  Vt = (s, n, r = 0) => {
    const o = G0(s), a = new Rh(n, r);
    let c = e.get(o);
    return c || (c = [], e.set(o, c)), c.push(a), t.get(o) || (t.set(o, true), s.requestAnimationFrame(() => i(o))), a;
  }, X0 = Vt;
})();
function Mh(e) {
  return oe(e).getComputedStyle(e, null);
}
var Xe = class Qe {
  static convertToPixels(t, i) {
    return parseFloat(i) || 0;
  }
  static getDimension(t, i) {
    const s = Mh(t), n = s ? s.getPropertyValue(i) : "0";
    return Qe.convertToPixels(t, n);
  }
  static getBorderLeftWidth(t) {
    return Qe.getDimension(t, "border-left-width");
  }
  static getBorderRightWidth(t) {
    return Qe.getDimension(t, "border-right-width");
  }
  static getBorderTopWidth(t) {
    return Qe.getDimension(t, "border-top-width");
  }
  static getBorderBottomWidth(t) {
    return Qe.getDimension(t, "border-bottom-width");
  }
  static getPaddingLeft(t) {
    return Qe.getDimension(t, "padding-left");
  }
  static getPaddingRight(t) {
    return Qe.getDimension(t, "padding-right");
  }
  static getPaddingTop(t) {
    return Qe.getDimension(t, "padding-top");
  }
  static getPaddingBottom(t) {
    return Qe.getDimension(t, "padding-bottom");
  }
  static getMarginLeft(t) {
    return Qe.getDimension(t, "margin-left");
  }
  static getMarginTop(t) {
    return Qe.getDimension(t, "margin-top");
  }
  static getMarginRight(t) {
    return Qe.getDimension(t, "margin-right");
  }
  static getMarginBottom(t) {
    return Qe.getDimension(t, "margin-bottom");
  }
}, Ph = class yr {
  constructor(t, i) {
    this.width = t, this.height = i;
  }
  with(t = this.width, i = this.height) {
    return t !== this.width || i !== this.height ? new yr(t, i) : this;
  }
  static is(t) {
    return typeof t == "object" && typeof t.height == "number" && typeof t.width == "number";
  }
  static lift(t) {
    return t instanceof yr ? t : new yr(t.width, t.height);
  }
  static equals(t, i) {
    return t === i ? true : !t || !i ? false : t.width === i.width && t.height === i.height;
  }
};
Ph.None = new Ph(0, 0);
function Q0(e) {
  let t = e.offsetParent, i = e.offsetTop, s = e.offsetLeft;
  for (; (e = e.parentNode) !== null && e !== e.ownerDocument.body && e !== e.ownerDocument.documentElement; ) {
    i -= e.scrollTop;
    const n = Bh(e) ? null : Mh(e);
    n && (s -= n.direction !== "rtl" ? e.scrollLeft : -e.scrollLeft), e === t && (s += Xe.getBorderLeftWidth(e), i += Xe.getBorderTopWidth(e), i += e.offsetTop, s += e.offsetLeft, t = e.offsetParent);
  }
  return { left: s, top: i };
}
function Oh(e) {
  const t = e.getBoundingClientRect(), i = oe(e);
  return { left: t.left + i.scrollX, top: t.top + i.scrollY, width: t.width, height: t.height };
}
function Mo(e) {
  const t = Xe.getMarginLeft(e) + Xe.getMarginRight(e);
  return e.offsetWidth + t;
}
function Po(e) {
  const t = Xe.getBorderLeftWidth(e) + Xe.getBorderRightWidth(e), i = Xe.getPaddingLeft(e) + Xe.getPaddingRight(e);
  return e.offsetWidth - t - i;
}
function J0(e) {
  const t = Xe.getBorderTopWidth(e) + Xe.getBorderBottomWidth(e), i = Xe.getPaddingTop(e) + Xe.getPaddingBottom(e);
  return e.offsetHeight - t - i;
}
function Fh(e) {
  const t = Xe.getMarginTop(e) + Xe.getMarginBottom(e);
  return e.offsetHeight + t;
}
function Zi(e, t) {
  return !!t?.contains(e);
}
function eg(e, t, i) {
  for (; e && e.nodeType === e.ELEMENT_NODE; ) {
    if (e.classList.contains(t)) return e;
    if (i) {
      if (typeof i == "string") {
        if (e.classList.contains(i)) return null;
      } else if (e === i) return null;
    }
    e = e.parentNode;
  }
  return null;
}
function Oo(e, t, i) {
  return !!eg(e, t, i);
}
function Bh(e) {
  return e && !!e.host && !!e.mode;
}
function tg(e) {
  for (; e.parentNode; ) {
    if (e === e.ownerDocument?.body) return null;
    e = e.parentNode;
  }
  return Bh(e) ? e : null;
}
function Qi() {
  let e = Hh().activeElement;
  for (; e?.shadowRoot; ) e = e.shadowRoot.activeElement;
  return e;
}
function Is(e) {
  return Qi() === e;
}
function Hh() {
  return V0() <= 1 ? x.document : Array.from(Ro()).map(({ window: t }) => t.document).find((t) => t.hasFocus()) ?? x.document;
}
function Fo() {
  return Hh().defaultView?.window ?? x;
}
var Uh = new class {
  constructor() {
    this.mutationObservers = /* @__PURE__ */ new Map();
  }
  observe(e, t, i) {
    let s = this.mutationObservers.get(e);
    s || (s = /* @__PURE__ */ new Map(), this.mutationObservers.set(e, s));
    const n = qp(i);
    let r = s.get(n);
    if (r) r.users += 1;
    else {
      const o = new L(), a = new MutationObserver((h) => o.fire(h));
      a.observe(e, i);
      const c = r = { users: 1, observer: a, onDidMutate: o.event };
      t.add(re(() => {
        c.users -= 1, c.users === 0 && (o.dispose(), a.disconnect(), s?.delete(n), s?.size === 0 && this.mutationObservers.delete(e));
      })), s.set(n, r);
    }
    return r.onDidMutate;
  }
}();
function Mt(e) {
  return e instanceof HTMLElement || e instanceof oe(e).HTMLElement;
}
function $h(e) {
  return e instanceof SVGElement || e instanceof oe(e).SVGElement;
}
function ig(e) {
  return e instanceof MouseEvent || e instanceof oe(e).MouseEvent;
}
function gi(e) {
  return e instanceof KeyboardEvent || e instanceof oe(e).KeyboardEvent;
}
var j = { CLICK: "click", AUXCLICK: "auxclick", DBLCLICK: "dblclick", MOUSE_UP: "mouseup", MOUSE_DOWN: "mousedown", MOUSE_OVER: "mouseover", MOUSE_MOVE: "mousemove", MOUSE_OUT: "mouseout", MOUSE_ENTER: "mouseenter", MOUSE_LEAVE: "mouseleave", MOUSE_WHEEL: "wheel", POINTER_UP: "pointerup", POINTER_DOWN: "pointerdown", POINTER_MOVE: "pointermove", POINTER_LEAVE: "pointerleave", CONTEXT_MENU: "contextmenu", WHEEL: "wheel", KEY_DOWN: "keydown", KEY_PRESS: "keypress", KEY_UP: "keyup", LOAD: "load", BEFORE_UNLOAD: "beforeunload", UNLOAD: "unload", PAGE_SHOW: "pageshow", PAGE_HIDE: "pagehide", PASTE: "paste", ABORT: "abort", ERROR: "error", RESIZE: "resize", SCROLL: "scroll", FULLSCREEN_CHANGE: "fullscreenchange", WK_FULLSCREEN_CHANGE: "webkitfullscreenchange", SELECT: "select", CHANGE: "change", SUBMIT: "submit", RESET: "reset", FOCUS: "focus", FOCUS_IN: "focusin", FOCUS_OUT: "focusout", BLUR: "blur", INPUT: "input", STORAGE: "storage", DRAG_START: "dragstart", DRAG: "drag", DRAG_ENTER: "dragenter", DRAG_LEAVE: "dragleave", DRAG_OVER: "dragover", DROP: "drop", DRAG_END: "dragend", ANIMATION_START: wn ? "webkitAnimationStart" : "animationstart", ANIMATION_END: wn ? "webkitAnimationEnd" : "animationend", ANIMATION_ITERATION: wn ? "webkitAnimationIteration" : "animationiteration" }, fe = { stop: (e, t) => (e.preventDefault(), t && e.stopPropagation(), e) }, sg = class Ka extends ee {
  constructor(t) {
    super(), this._onDidFocus = this._register(new L()), this.onDidFocus = this._onDidFocus.event, this._onDidBlur = this._register(new L()), this.onDidBlur = this._onDidBlur.event;
    let i = Ka.hasFocusWithin(t), s = false;
    const n = () => {
      s = false, i || (i = true, this._onDidFocus.fire());
    }, r = () => {
      i && (s = true, (Mt(t) ? oe(t) : t).setTimeout(() => {
        s && (s = false, i = false, this._onDidBlur.fire());
      }, 0));
    };
    this._refreshStateHandler = () => {
      Ka.hasFocusWithin(t) !== i && (i ? r() : n());
    }, this._register(O(t, j.FOCUS, n, true)), this._register(O(t, j.BLUR, r, true)), Mt(t) && (this._register(O(t, j.FOCUS_IN, () => this._refreshStateHandler())), this._register(O(t, j.FOCUS_OUT, () => this._refreshStateHandler())));
  }
  static hasFocusWithin(t) {
    if (Mt(t)) {
      const i = tg(t), s = i ? i.activeElement : t.ownerDocument.activeElement;
      return Zi(s, t);
    } else {
      const i = t;
      return Zi(i.document.activeElement, i.document);
    }
  }
  refreshState() {
    this._refreshStateHandler();
  }
};
function ng(e) {
  return new sg(e);
}
function Z(e, ...t) {
  if (e.append(...t), t.length === 1 && typeof t[0] != "string") return t[0];
}
function zh(e, ...t) {
  e.replaceChildren(...t);
}
var rg = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;
function Wh(e, t, i, ...s) {
  const n = rg.exec(t);
  if (!n) throw new Error("Bad use of emmet");
  const r = n[1] || "div";
  let o;
  return e !== "http://www.w3.org/1999/xhtml" ? o = document.createElementNS(e, r) : o = document.createElement(r), n[3] && (o.id = n[3]), n[4] && (o.className = n[4].replace(/\./g, " ").trim()), i && Object.entries(i).forEach(([a, c]) => {
    typeof c > "u" || (/^on\w+$/.test(a) ? o[a] = c : a === "selected" ? c && o.setAttribute(a, "true") : o.setAttribute(a, c));
  }), o.append(...s), o;
}
function ie(e, t, ...i) {
  return Wh("http://www.w3.org/1999/xhtml", e, t, ...i);
}
ie.SVG = function(e, t, ...i) {
  return Wh("http://www.w3.org/2000/svg", e, t, ...i);
};
function og(e, t) {
  const i = () => {
    t(), s = Vt(e, i);
  };
  let s = Vt(e, i);
  return re(() => s.dispose());
}
xc.setPreferredWebSchema(/^https:/.test(x.location.href) ? "https" : "http");
function ag(e, t = false) {
  const i = document.createElement("a");
  return hi.addHook("afterSanitizeAttributes", (s) => {
    for (const n of ["href", "src"]) if (s.hasAttribute(n)) {
      const r = s.getAttribute(n);
      if (n === "href" && r.startsWith("#")) continue;
      if (i.href = r, !e.includes(i.protocol.replace(/:$/, ""))) {
        if (t && n === "src" && i.href.startsWith("data:")) continue;
        s.removeAttribute(n);
      }
    }
  }), re(() => {
    hi.removeHook("afterSanitizeAttributes");
  });
}
var Gv = [J.http, J.https, J.command], lg = Object.freeze(["a", "abbr", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "figcaption", "figure", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "input", "ins", "kbd", "label", "li", "mark", "ol", "p", "pre", "q", "rp", "rt", "ruby", "samp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", "video", "wbr"]), qv = Object.freeze({ ALLOWED_TAGS: ["a", "button", "blockquote", "code", "div", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "input", "label", "li", "p", "pre", "select", "small", "span", "strong", "textarea", "ul", "ol"], ALLOWED_ATTR: ["href", "data-href", "data-command", "target", "title", "name", "src", "alt", "class", "id", "role", "tabindex", "style", "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"], RETURN_DOM: false, RETURN_DOM_FRAGMENT: false, RETURN_TRUSTED_TYPE: true }), cg = /(?<tag>[\w\-]+)?(?:#(?<id>[\w\-]+))?(?<class>(?:\.(?:[\w\-]+))*)(?:@(?<name>(?:[\w\_])+))?/;
function Bo(e, ...t) {
  let i, s;
  Array.isArray(t[0]) ? (i = {}, s = t[0]) : (i = t[0] || {}, s = t[1]);
  const n = cg.exec(e);
  if (!n || !n.groups) throw new Error("Bad use of h");
  const r = n.groups.tag || "div", o = document.createElement(r);
  n.groups.id && (o.id = n.groups.id);
  const a = [];
  if (n.groups.class) for (const h of n.groups.class.split(".")) h !== "" && a.push(h);
  if (i.className !== void 0) for (const h of i.className.split(".")) h !== "" && a.push(h);
  a.length > 0 && (o.className = a.join(" "));
  const c = {};
  if (n.groups.name && (c[n.groups.name] = o), s) for (const h of s) Mt(h) ? o.appendChild(h) : typeof h == "string" ? o.append(h) : "root" in h && (Object.assign(c, h), o.appendChild(h.root));
  for (const [h, d] of Object.entries(i)) if (h !== "className") if (h === "style") for (const [u, f] of Object.entries(d)) o.style.setProperty(Vh(u), typeof f == "number" ? f + "px" : "" + f);
  else h === "tabIndex" ? o.tabIndex = d : o.setAttribute(Vh(h), d.toString());
  return c.root = o, c;
}
function Vh(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Gt(e) {
  return e.tagName.toLowerCase() === "input" || e.tagName.toLowerCase() === "textarea" || Mt(e) && !!e.editContext;
}
function Kv(e) {
  return e;
}
function Pt(e, t) {
  if (e !== void 0) {
    const i = e.match(/^\s*var\((.+)\)$/);
    if (i) {
      const s = i[1].split(",", 2);
      return s.length === 2 && (t = Pt(s[1].trim(), t)), `var(${s[0]}, ${t})`;
    }
    return e;
  }
  return t;
}
function Gh(e) {
  const t = e.replaceAll(/[^_\-a-z0-9]/gi, "");
  return t !== e && console.warn(`CSS ident value ${e} modified to ${t} to be safe for CSS`), t;
}
function qt(e) {
  return `'${e.replaceAll(/'/g, "\\000027")}'`;
}
function hg(e) {
  return e ? We`url('${CSS.escape(oo.uriToBrowserUri(e).toString(true))}')` : "url('')";
}
function Gn(e, t = false) {
  const i = CSS.escape(e);
  return !t && i !== e && console.warn(`CSS class name ${e} modified to ${i} to be safe for CSS`), i;
}
function We(e, ...t) {
  return e.reduce((i, s, n) => {
    const r = t[n] || "";
    return i + s + r;
  }, "");
}
var Ho = class {
  constructor() {
    this._parts = [];
  }
  push(...e) {
    this._parts.push(...e);
  }
  join(e = `
`) {
    return this._parts.join(e);
  }
}, ce = class {
  get event() {
    return this.emitter.event;
  }
  constructor(e, t, i) {
    const s = (n) => this.emitter.fire(n);
    this.emitter = new L({ onWillAddFirstListener: () => e.addEventListener(t, s, i), onDidRemoveLastListener: () => e.removeEventListener(t, s, i) });
  }
  dispose() {
    this.emitter.dispose();
  }
}, dg = Object.freeze({ text: "text/plain", binary: "application/octet-stream", unknown: "application/unknown", markdown: "text/markdown", latex: "text/latex", uriList: "text/uri-list", html: "text/html" }), qh = { RESOURCES: "ResourceURLs", DOWNLOAD_URL: "DownloadURL", FILES: "Files", TEXT: dg.text, INTERNAL_URI_LIST: "application/vnd.code.uri-list" };
function ve(e, t, i) {
  let s = null, n = null;
  if (typeof i.value == "function" ? (s = "value", n = i.value, n.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof i.get == "function" && (s = "get", n = i.get), !n) throw new Error("not supported");
  const r = `$memoize$${t}`;
  i[s] = function(...o) {
    return this.hasOwnProperty(r) || Object.defineProperty(this, r, { configurable: false, enumerable: false, writable: false, value: n.apply(this, o) }), this[r];
  };
}
var Ve;
((e) => {
  e.Tap = "-monaco-gesturetap", e.Change = "-monaco-gesturechange", e.Start = "-monaco-gesturestart", e.End = "-monaco-gesturesend", e.Contextmenu = "-monaco-gesturecontextmenu";
})(Ve || (Ve = {}));
var Ls = class Be extends ee {
  constructor() {
    super(), this.dispatched = false, this.targets = new Gl(), this.ignoreTargets = new Gl(), this.handle = this._register(new De()), this.activeTouches = {}, this._lastSetTapCountTime = 0, this._register(A.runAndSubscribe(q0, ({ window: t, disposables: i }) => {
      i.add(O(t.document, "touchstart", (s) => this.onTouchStart(s), { passive: false })), i.add(O(t.document, "touchend", (s) => this.onTouchEnd(t, s))), i.add(O(t.document, "touchmove", (s) => this.onTouchMove(s), { passive: false }));
    }, { window: x, disposables: this._store }));
  }
  static addTarget(t) {
    if (!Be.isTouchDevice()) return ee.None;
    Be.INSTANCE || (Be.INSTANCE = vn(new Be()));
    const i = Be.INSTANCE.targets.push(t);
    return re(i);
  }
  static ignoreTarget(t) {
    if (!Be.isTouchDevice()) return ee.None;
    Be.INSTANCE || (Be.INSTANCE = vn(new Be()));
    const i = Be.INSTANCE.ignoreTargets.push(t);
    return re(i);
  }
  static isTouchDevice() {
    return "ontouchstart" in x || navigator.maxTouchPoints > 0;
  }
  dispose() {
    this.handle.clear(), super.dispose();
  }
  onTouchStart(t) {
    const i = Date.now();
    this.handle.clear();
    for (let s = 0, n = t.targetTouches.length; s < n; s++) {
      const r = t.targetTouches.item(s);
      this.activeTouches[r.identifier] = { id: r.identifier, initialTarget: r.target, initialTimeStamp: i, initialPageX: r.pageX, initialPageY: r.pageY, rollingTimestamps: [i], rollingPageX: [r.pageX], rollingPageY: [r.pageY] };
      const o = this.newGestureEvent(Ve.Start, r.target);
      o.pageX = r.pageX, o.pageY = r.pageY, this.dispatchEvent(o);
    }
    this.dispatched && (t.preventDefault(), t.stopPropagation(), this.dispatched = false);
  }
  onTouchEnd(t, i) {
    const s = Date.now(), n = Object.keys(this.activeTouches).length;
    for (let r = 0, o = i.changedTouches.length; r < o; r++) {
      const a = i.changedTouches.item(r);
      if (!this.activeTouches.hasOwnProperty(String(a.identifier))) {
        console.warn("move of an UNKNOWN touch", a);
        continue;
      }
      const c = this.activeTouches[a.identifier], h = Date.now() - c.initialTimeStamp;
      if (h < Be.HOLD_DELAY && Math.abs(c.initialPageX - c.rollingPageX.at(-1)) < 30 && Math.abs(c.initialPageY - c.rollingPageY.at(-1)) < 30) {
        const d = this.newGestureEvent(Ve.Tap, c.initialTarget);
        d.pageX = c.rollingPageX.at(-1), d.pageY = c.rollingPageY.at(-1), this.dispatchEvent(d);
      } else if (h >= Be.HOLD_DELAY && Math.abs(c.initialPageX - c.rollingPageX.at(-1)) < 30 && Math.abs(c.initialPageY - c.rollingPageY.at(-1)) < 30) {
        const d = this.newGestureEvent(Ve.Contextmenu, c.initialTarget);
        d.pageX = c.rollingPageX.at(-1), d.pageY = c.rollingPageY.at(-1), this.dispatchEvent(d);
      } else if (n === 1) {
        const d = c.rollingPageX.at(-1), u = c.rollingPageY.at(-1), f = c.rollingTimestamps.at(-1) - c.rollingTimestamps[0], p = d - c.rollingPageX[0], m = u - c.rollingPageY[0], _ = [...this.targets].filter((v) => c.initialTarget instanceof Node && v.contains(c.initialTarget));
        this.inertia(t, _, s, Math.abs(p) / f, p > 0 ? 1 : -1, d, Math.abs(m) / f, m > 0 ? 1 : -1, u);
      }
      this.dispatchEvent(this.newGestureEvent(Ve.End, c.initialTarget)), delete this.activeTouches[a.identifier];
    }
    this.dispatched && (i.preventDefault(), i.stopPropagation(), this.dispatched = false);
  }
  newGestureEvent(t, i) {
    const s = document.createEvent("CustomEvent");
    return s.initEvent(t, false, true), s.initialTarget = i, s.tapCount = 0, s;
  }
  dispatchEvent(t) {
    if (t.type === Ve.Tap) {
      const i = (/* @__PURE__ */ new Date()).getTime();
      let s = 0;
      i - this._lastSetTapCountTime > Be.CLEAR_TAP_COUNT_TIME ? s = 1 : s = 2, this._lastSetTapCountTime = i, t.tapCount = s;
    } else (t.type === Ve.Change || t.type === Ve.Contextmenu) && (this._lastSetTapCountTime = 0);
    if (t.initialTarget instanceof Node) {
      for (const s of this.ignoreTargets) if (s.contains(t.initialTarget)) return;
      const i = [];
      for (const s of this.targets) if (s.contains(t.initialTarget)) {
        let n = 0, r = t.initialTarget;
        for (; r && r !== s; ) n++, r = r.parentElement;
        i.push([n, s]);
      }
      i.sort((s, n) => s[0] - n[0]);
      for (const [s, n] of i) n.dispatchEvent(t), this.dispatched = true;
    }
  }
  inertia(t, i, s, n, r, o, a, c, h) {
    this.handle.value = Vt(t, () => {
      const d = Date.now(), u = d - s;
      let f = 0, p = 0, m = true;
      n += Be.SCROLL_FRICTION * u, a += Be.SCROLL_FRICTION * u, n > 0 && (m = false, f = r * n * u), a > 0 && (m = false, p = c * a * u);
      const _ = this.newGestureEvent(Ve.Change);
      _.translationX = f, _.translationY = p, i.forEach((v) => v.dispatchEvent(_)), m || this.inertia(t, i, d, n, r, o + f, a, c, h + p);
    });
  }
  onTouchMove(t) {
    const i = Date.now();
    for (let s = 0, n = t.changedTouches.length; s < n; s++) {
      const r = t.changedTouches.item(s);
      if (!this.activeTouches.hasOwnProperty(String(r.identifier))) {
        console.warn("end of an UNKNOWN touch", r);
        continue;
      }
      const o = this.activeTouches[r.identifier], a = this.newGestureEvent(Ve.Change, o.initialTarget);
      a.translationX = r.pageX - o.rollingPageX.at(-1), a.translationY = r.pageY - o.rollingPageY.at(-1), a.pageX = r.pageX, a.pageY = r.pageY, this.dispatchEvent(a), o.rollingPageX.length > 3 && (o.rollingPageX.shift(), o.rollingPageY.shift(), o.rollingTimestamps.shift()), o.rollingPageX.push(r.pageX), o.rollingPageY.push(r.pageY), o.rollingTimestamps.push(i);
    }
    this.dispatched && (t.preventDefault(), t.stopPropagation(), this.dispatched = false);
  }
};
Ls.SCROLL_FRICTION = -5e-3, Ls.HOLD_DELAY = 700, Ls.CLEAR_TAP_COUNT_TIME = 400, pe([ve], Ls, "isTouchDevice", null);
var qn = Ls, ug = () => ({ get delay() {
  return -1;
}, dispose: () => {
}, showHover: () => {
} }), Uo = ug, fg = new rt(() => Uo("mouse", false)), pg = new rt(() => Uo("element", false));
function Ji(e) {
  return e === "element" ? pg.value : fg.value;
}
function $o() {
  return Uo("element", true);
}
var jv = new Uint32Array(10), Yv = new Uint8Array([114, 82, 115, 101, 69, 102, 97, 113, 81, 116, 84, 100, 119, 87, 99, 122, 120, 118, 103]), Xv = new Uint16Array([107, 111, 105, 79, 106, 112, 117, 80, 104, 27496, 28520, 27752, 121, 110, 27246, 28782, 27758, 98, 109, 27757, 108]), Zv = new Uint16Array([114, 82, 29810, 115, 30579, 26483, 101, 102, 29286, 24934, 29030, 29798, 30822, 30310, 26470, 97, 113, 29809, 116, 84, 100, 119, 99, 122, 120, 118, 103]), Qv = new Uint16Array([114, 82, 29810, 115, 30579, 26483, 101, 69, 102, 29286, 24934, 29030, 29798, 30822, 30310, 26470, 97, 113, 81, 29809, 116, 84, 100, 119, 87, 99, 122, 120, 118, 103, 107, 111, 105, 79, 106, 112, 117, 80, 104, 27496, 28520, 27752, 121, 110, 27246, 28782, 27758, 98, 109, 27757, 108]);
function Kh(...e) {
  return function(t, i) {
    for (let s = 0, n = e.length; s < n; s++) {
      const r = e[s](t, i);
      if (r) return r;
    }
    return null;
  };
}
var Jv = jh.bind(void 0, false), Kn = jh.bind(void 0, true);
function jh(e, t, i) {
  if (!i || i.length < t.length) return null;
  let s;
  return e ? s = Ff(i, t) : s = i.indexOf(t) === 0, s ? t.length > 0 ? [{ start: 0, end: t.length }] : [] : null;
}
function gg(e, t) {
  const i = t.toLowerCase().indexOf(e.toLowerCase());
  return i === -1 ? null : [{ start: i, end: i + e.length }];
}
function mg(e, t) {
  return zo(e.toLowerCase(), t.toLowerCase(), 0, 0);
}
function zo(e, t, i, s) {
  if (i === e.length) return [];
  if (s === t.length) return null;
  if (e[i] === t[s]) {
    let n = null;
    return (n = zo(e, t, i + 1, s + 1)) ? Xh({ start: s, end: s + 1 }, n) : null;
  }
  return zo(e, t, i, s + 1);
}
function Wo(e) {
  return 97 <= e && e <= 122;
}
function jn(e) {
  return 65 <= e && e <= 90;
}
function Vo(e) {
  return 48 <= e && e <= 57;
}
function vg(e) {
  return e === 32 || e === 9 || e === 10 || e === 13;
}
var bg = /* @__PURE__ */ new Set();
"()[]{}<>`'\"-/;:,.?!".split("").forEach((e) => bg.add(e.charCodeAt(0)));
function Yh(e) {
  return Wo(e) || jn(e) || Vo(e);
}
function Xh(e, t) {
  return t.length === 0 ? t = [e] : e.end === t[0].start ? t[0].start = e.start : t.unshift(e), t;
}
function Zh(e, t) {
  for (let i = t; i < e.length; i++) {
    const s = e.charCodeAt(i);
    if (jn(s) || Vo(s) || i > 0 && !Yh(e.charCodeAt(i - 1))) return i;
  }
  return e.length;
}
function Go(e, t, i, s) {
  if (i === e.length) return [];
  if (s === t.length) return null;
  if (e[i] !== t[s].toLowerCase()) return null;
  {
    let n = null, r = s + 1;
    for (n = Go(e, t, i + 1, s + 1); !n && (r = Zh(t, r)) < t.length; ) n = Go(e, t, i + 1, r), r++;
    return n === null ? null : Xh({ start: s, end: s + 1 }, n);
  }
}
function yg(e) {
  let t = 0, i = 0, s = 0, n = 0, r = 0;
  for (let d = 0; d < e.length; d++) r = e.charCodeAt(d), jn(r) && t++, Wo(r) && i++, Yh(r) && s++, Vo(r) && n++;
  const o = t / e.length, a = i / e.length, c = s / e.length, h = n / e.length;
  return { upperPercent: o, lowerPercent: a, alphaPercent: c, numericPercent: h };
}
function wg(e) {
  const { upperPercent: t, lowerPercent: i } = e;
  return i === 0 && t > 0.6;
}
function _g(e) {
  const { upperPercent: t, lowerPercent: i, alphaPercent: s, numericPercent: n } = e;
  return i > 0.2 && t < 0.8 && s > 0.6 && n < 0.2;
}
function Sg(e) {
  let t = 0, i = 0, s = 0, n = 0;
  for (let r = 0; r < e.length; r++) s = e.charCodeAt(r), jn(s) && t++, Wo(s) && i++, vg(s) && n++;
  return (t === 0 || i === 0) && n === 0 ? e.length <= 30 : t <= 5;
}
function Qh(e, t) {
  if (!t || (t = t.trim(), t.length === 0) || !Sg(e)) return null;
  t.length > 60 && (t = t.substring(0, 60));
  const i = yg(t);
  if (!_g(i)) {
    if (!wg(i)) return null;
    t = t.toLowerCase();
  }
  let s = null, n = 0;
  for (e = e.toLowerCase(); n < t.length && (s = Go(e, t, 0, n)) === null; ) n = Zh(t, n + 1);
  return s;
}
var eb = Kh(Kn, Qh, gg), tb = Kh(Kn, Qh, mg), ib = new w1(1e4);
function Cg(e, t) {
  const i = sd(e, e.toLowerCase(), 0, t, t.toLowerCase(), 0, { firstMatchCanBeWeak: true, boostFullMatch: true });
  return i ? Dg(i) : null;
}
function Dg(e) {
  if (typeof e > "u") return [];
  const t = [], i = e[1];
  for (let s = e.length - 1; s > 1; s--) {
    const n = e[s] + i, r = t[t.length - 1];
    r && r.end === n ? r.end = n + 1 : t.push({ start: n, end: n + 1 });
  }
  return t;
}
var Kt = 128;
function qo() {
  const e = [], t = [];
  for (let i = 0; i <= Kt; i++) t[i] = 0;
  for (let i = 0; i <= Kt; i++) e.push(t.slice(0));
  return e;
}
function Jh(e) {
  const t = [];
  for (let i = 0; i <= e; i++) t[i] = 0;
  return t;
}
var ed = Jh(2 * Kt), Ko = Jh(2 * Kt), yt = qo(), jt = qo(), Rs = qo(), Eg = false;
function jo(e, t, i, s, n) {
  function r(a, c, h = " ") {
    for (; a.length < c; ) a = h + a;
    return a;
  }
  let o = ` |   |${s.split("").map((a) => r(a, 3)).join("|")}
`;
  for (let a = 0; a <= i; a++) a === 0 ? o += " |" : o += `${t[a - 1]}|`, o += e[a].slice(0, n + 1).map((c) => r(c.toString(), 3)).join("|") + `
`;
  return o;
}
function kg(e, t, i, s) {
  e = e.substr(t), i = i.substr(s), console.log(jo(jt, e, e.length, i, i.length)), console.log(jo(Rs, e, e.length, i, i.length)), console.log(jo(yt, e, e.length, i, i.length));
}
function Yn(e, t) {
  if (t < 0 || t >= e.length) return false;
  const i = e.codePointAt(t);
  switch (i) {
    case 95:
    case 45:
    case 46:
    case 32:
    case 47:
    case 92:
    case 39:
    case 34:
    case 58:
    case 36:
    case 60:
    case 62:
    case 40:
    case 41:
    case 91:
    case 93:
    case 123:
    case 125:
      return true;
    case void 0:
      return false;
    default:
      return !!Uf(i);
  }
}
function td(e, t) {
  if (t < 0 || t >= e.length) return false;
  switch (e.charCodeAt(t)) {
    case 32:
    case 9:
      return true;
    default:
      return false;
  }
}
function Xn(e, t, i) {
  return t[e] !== i[e];
}
function Tg(e, t, i, s, n, r, o = false) {
  for (; t < i && n < r; ) e[t] === s[n] && (o && (ed[t] = n), t += 1), n += 1;
  return t === i;
}
var mi;
((e) => {
  e.Default = [-100, 0];
  function t(i) {
    return !i || i.length === 2 && i[0] === -100 && i[1] === 0;
  }
  e.isDefault = t;
})(mi || (mi = {}));
var id = class {
  constructor(e, t) {
    this.firstMatchCanBeWeak = e, this.boostFullMatch = t;
  }
};
id.default = { boostFullMatch: true, firstMatchCanBeWeak: false };
function sd(e, t, i, s, n, r, o = id.default) {
  const a = e.length > Kt ? Kt : e.length, c = s.length > Kt ? Kt : s.length;
  if (i >= a || r >= c || a - i > c - r || !Tg(t, i, a, n, r, c, true)) return;
  xg(a, c, i, r, t, n);
  let h = 1, d = 1, u = i, f = r;
  const p = [false];
  for (h = 1, u = i; u < a; h++, u++) {
    const C = ed[u], D = Ko[u], E = u + 1 < a ? Ko[u + 1] : c;
    for (d = C - r + 1, f = C; f < E; d++, f++) {
      let w = Number.MIN_SAFE_INTEGER, S = false;
      f <= D && (w = Ag(e, t, u, i, s, n, f, c, r, yt[h - 1][d - 1] === 0, p));
      let I = 0;
      w !== Number.MIN_SAFE_INTEGER && (S = true, I = w + jt[h - 1][d - 1]);
      const P = f > C, Y = P ? jt[h][d - 1] + (yt[h][d - 1] > 0 ? -5 : 0) : 0, ue = f > C + 1 && yt[h][d - 1] > 0, G = ue ? jt[h][d - 2] + (yt[h][d - 2] > 0 ? -5 : 0) : 0;
      if (ue && (!P || G >= Y) && (!S || G >= I)) jt[h][d] = G, Rs[h][d] = 3, yt[h][d] = 0;
      else if (P && (!S || Y >= I)) jt[h][d] = Y, Rs[h][d] = 2, yt[h][d] = 0;
      else if (S) jt[h][d] = I, Rs[h][d] = 1, yt[h][d] = yt[h - 1][d - 1] + 1;
      else throw new Error("not possible");
    }
  }
  if (Eg && kg(e, i, s, r), !p[0] && !o.firstMatchCanBeWeak) return;
  h--, d--;
  const m = [jt[h][d], r];
  let _ = 0, v = 0;
  for (; h >= 1; ) {
    let C = d;
    do {
      const D = Rs[h][C];
      if (D === 3) C = C - 2;
      else if (D === 2) C = C - 1;
      else break;
    } while (C >= 1);
    _ > 1 && t[i + h - 1] === n[r + d - 1] && !Xn(C + r - 1, s, n) && _ + 1 > yt[h][C] && (C = d), C === d ? _++ : _ = 1, v || (v = C), h--, d = C - 1, m.push(d);
  }
  c - r === a && o.boostFullMatch && (m[0] += 2);
  const y = v - a;
  return m[0] -= y, m;
}
function xg(e, t, i, s, n, r) {
  let o = e - 1, a = t - 1;
  for (; o >= i && a >= s; ) n[o] === r[a] && (Ko[o] = a, o--), a--;
}
function Ag(e, t, i, s, n, r, o, a, c, h, d) {
  if (t[i] !== r[o]) return Number.MIN_SAFE_INTEGER;
  let u = 1, f = false;
  return o === i - s ? u = e[i] === n[o] ? 7 : 5 : Xn(o, n, r) && (o === 0 || !Xn(o - 1, n, r)) ? (u = e[i] === n[o] ? 7 : 5, f = true) : Yn(r, o) && (o === 0 || !Yn(r, o - 1)) ? u = 5 : (Yn(r, o - 1) || td(r, o - 1)) && (u = 5, f = true), u > 1 && i === s && (d[0] = true), f || (f = Xn(o, n, r) || Yn(r, o - 1) || td(r, o - 1)), i === s ? o > c && (u -= f ? 3 : 5) : h ? u += f ? 2 : 0 : u += f ? 0 : 1, o + 1 === a && (u -= f ? 3 : 5), u;
}
var Yo = /* @__PURE__ */ Object.create(null);
function l(e, t) {
  if (bs(t)) {
    const i = Yo[t];
    if (i === void 0) throw new Error(`${e} references an unknown codicon: ${t}`);
    t = i;
  }
  return Yo[e] = t, { id: e };
}
function Ng() {
  return Yo;
}
var Ig = { semantic: l("semantic", 62e3), githubCopilot: l("github-copilot", 62001), plusCircle: l("plus-circle", 62002), smileySad: l("smiley-sad", 62003), smileyHappy: l("smiley-happy", 62004), smileyMedium: l("smiley-medium", 62005), sparkleStrikethrough: l("sparkle-strikethrough", 62006), keyPlusSparkle: l("key-plus-sparkle", 62007), paperclip: l("paperclip", 60500), atSign: l("at-sign", 60501), image: l("image", 60502), logo: l("logo", 60503), sparkleTwo: l("sparkle-two", 60504), logoSlash: l("logo-slash", 60505), arrowsExpand: l("arrows-expand", 60506), arrowsContract: l("arrows-contract", 60507), expandDiffUp: l("expand-diff-up", 60508), expandDiffDown: l("expand-diff-down", 60509), add: l("add", 6e4), plus: l("plus", 6e4), gistNew: l("gist-new", 6e4), repoCreate: l("repo-create", 6e4), lightbulb: l("lightbulb", 60001), lightBulb: l("light-bulb", 60001), repo: l("repo", 60002), repoDelete: l("repo-delete", 60002), gistFork: l("gist-fork", 60003), repoForked: l("repo-forked", 60003), gitPullRequest: l("git-pull-request", 60004), gitPullRequestAbandoned: l("git-pull-request-abandoned", 60004), recordKeys: l("record-keys", 60005), keyboard: l("keyboard", 60005), tag: l("tag", 60006), gitPullRequestLabel: l("git-pull-request-label", 60006), tagAdd: l("tag-add", 60006), tagRemove: l("tag-remove", 60006), person: l("person", 60007), personFollow: l("person-follow", 60007), personOutline: l("person-outline", 60007), personFilled: l("person-filled", 60007), gitBranch: l("git-branch", 60008), gitBranchCreate: l("git-branch-create", 60008), gitBranchDelete: l("git-branch-delete", 60008), sourceControl: l("source-control", 60008), mirror: l("mirror", 60009), mirrorPublic: l("mirror-public", 60009), star: l("star", 60010), starAdd: l("star-add", 60010), starDelete: l("star-delete", 60010), starEmpty: l("star-empty", 60010), comment: l("comment", 60011), commentAdd: l("comment-add", 60011), alert: l("alert", 60012), warning: l("warning", 60012), search: l("search", 60013), searchSave: l("search-save", 60013), logOut: l("log-out", 60014), signOut: l("sign-out", 60014), logIn: l("log-in", 60015), signIn: l("sign-in", 60015), eye: l("eye", 60016), eyeUnwatch: l("eye-unwatch", 60016), eyeWatch: l("eye-watch", 60016), circleFilled: l("circle-filled", 60017), primitiveDot: l("primitive-dot", 60017), closeDirty: l("close-dirty", 60017), debugBreakpoint: l("debug-breakpoint", 60017), debugBreakpointDisabled: l("debug-breakpoint-disabled", 60017), debugHint: l("debug-hint", 60017), terminalDecorationSuccess: l("terminal-decoration-success", 60017), primitiveSquare: l("primitive-square", 60018), edit: l("edit", 60019), pencil: l("pencil", 60019), info: l("info", 60020), issueOpened: l("issue-opened", 60020), gistPrivate: l("gist-private", 60021), gitForkPrivate: l("git-fork-private", 60021), lock: l("lock", 60021), mirrorPrivate: l("mirror-private", 60021), close: l("close", 60022), removeClose: l("remove-close", 60022), x: l("x", 60022), repoSync: l("repo-sync", 60023), sync: l("sync", 60023), clone: l("clone", 60024), desktopDownload: l("desktop-download", 60024), beaker: l("beaker", 60025), microscope: l("microscope", 60025), vm: l("vm", 60026), deviceDesktop: l("device-desktop", 60026), file: l("file", 60027), fileText: l("file-text", 60027), more: l("more", 60028), ellipsis: l("ellipsis", 60028), kebabHorizontal: l("kebab-horizontal", 60028), mailReply: l("mail-reply", 60029), reply: l("reply", 60029), organization: l("organization", 60030), organizationFilled: l("organization-filled", 60030), organizationOutline: l("organization-outline", 60030), newFile: l("new-file", 60031), fileAdd: l("file-add", 60031), newFolder: l("new-folder", 60032), fileDirectoryCreate: l("file-directory-create", 60032), trash: l("trash", 60033), trashcan: l("trashcan", 60033), history: l("history", 60034), clock: l("clock", 60034), folder: l("folder", 60035), fileDirectory: l("file-directory", 60035), symbolFolder: l("symbol-folder", 60035), logoGithub: l("logo-github", 60036), markGithub: l("mark-github", 60036), github: l("github", 60036), terminal: l("terminal", 60037), console: l("console", 60037), repl: l("repl", 60037), zap: l("zap", 60038), symbolEvent: l("symbol-event", 60038), error: l("error", 60039), stop: l("stop", 60039), variable: l("variable", 60040), symbolVariable: l("symbol-variable", 60040), array: l("array", 60042), symbolArray: l("symbol-array", 60042), symbolModule: l("symbol-module", 60043), symbolPackage: l("symbol-package", 60043), symbolNamespace: l("symbol-namespace", 60043), symbolObject: l("symbol-object", 60043), symbolMethod: l("symbol-method", 60044), symbolFunction: l("symbol-function", 60044), symbolConstructor: l("symbol-constructor", 60044), symbolBoolean: l("symbol-boolean", 60047), symbolNull: l("symbol-null", 60047), symbolNumeric: l("symbol-numeric", 60048), symbolNumber: l("symbol-number", 60048), symbolStructure: l("symbol-structure", 60049), symbolStruct: l("symbol-struct", 60049), symbolParameter: l("symbol-parameter", 60050), symbolTypeParameter: l("symbol-type-parameter", 60050), symbolKey: l("symbol-key", 60051), symbolText: l("symbol-text", 60051), symbolReference: l("symbol-reference", 60052), goToFile: l("go-to-file", 60052), symbolEnum: l("symbol-enum", 60053), symbolValue: l("symbol-value", 60053), symbolRuler: l("symbol-ruler", 60054), symbolUnit: l("symbol-unit", 60054), activateBreakpoints: l("activate-breakpoints", 60055), archive: l("archive", 60056), arrowBoth: l("arrow-both", 60057), arrowDown: l("arrow-down", 60058), arrowLeft: l("arrow-left", 60059), arrowRight: l("arrow-right", 60060), arrowSmallDown: l("arrow-small-down", 60061), arrowSmallLeft: l("arrow-small-left", 60062), arrowSmallRight: l("arrow-small-right", 60063), arrowSmallUp: l("arrow-small-up", 60064), arrowUp: l("arrow-up", 60065), bell: l("bell", 60066), bold: l("bold", 60067), book: l("book", 60068), bookmark: l("bookmark", 60069), debugBreakpointConditionalUnverified: l("debug-breakpoint-conditional-unverified", 60070), debugBreakpointConditional: l("debug-breakpoint-conditional", 60071), debugBreakpointConditionalDisabled: l("debug-breakpoint-conditional-disabled", 60071), debugBreakpointDataUnverified: l("debug-breakpoint-data-unverified", 60072), debugBreakpointData: l("debug-breakpoint-data", 60073), debugBreakpointDataDisabled: l("debug-breakpoint-data-disabled", 60073), debugBreakpointLogUnverified: l("debug-breakpoint-log-unverified", 60074), debugBreakpointLog: l("debug-breakpoint-log", 60075), debugBreakpointLogDisabled: l("debug-breakpoint-log-disabled", 60075), briefcase: l("briefcase", 60076), broadcast: l("broadcast", 60077), browser: l("browser", 60078), bug: l("bug", 60079), calendar: l("calendar", 60080), caseSensitive: l("case-sensitive", 60081), check: l("check", 60082), checklist: l("checklist", 60083), chevronDown: l("chevron-down", 60084), chevronLeft: l("chevron-left", 60085), chevronRight: l("chevron-right", 60086), chevronUp: l("chevron-up", 60087), chromeClose: l("chrome-close", 60088), chromeMaximize: l("chrome-maximize", 60089), chromeMinimize: l("chrome-minimize", 60090), chromeRestore: l("chrome-restore", 60091), circleOutline: l("circle-outline", 60092), circle: l("circle", 60092), debugBreakpointUnverified: l("debug-breakpoint-unverified", 60092), terminalDecorationIncomplete: l("terminal-decoration-incomplete", 60092), circleSlash: l("circle-slash", 60093), circuitBoard: l("circuit-board", 60094), clearAll: l("clear-all", 60095), clippy: l("clippy", 60096), closeAll: l("close-all", 60097), cloudDownload: l("cloud-download", 60098), cloudUpload: l("cloud-upload", 60099), code: l("code", 60100), collapseAll: l("collapse-all", 60101), colorMode: l("color-mode", 60102), commentDiscussion: l("comment-discussion", 60103), creditCard: l("credit-card", 60105), dash: l("dash", 60108), dashboard: l("dashboard", 60109), database: l("database", 60110), debugContinue: l("debug-continue", 60111), debugDisconnect: l("debug-disconnect", 60112), debugPause: l("debug-pause", 60113), debugRestart: l("debug-restart", 60114), debugStart: l("debug-start", 60115), debugStepInto: l("debug-step-into", 60116), debugStepOut: l("debug-step-out", 60117), debugStepOver: l("debug-step-over", 60118), debugStop: l("debug-stop", 60119), debug: l("debug", 60120), deviceCameraVideo: l("device-camera-video", 60121), deviceCamera: l("device-camera", 60122), deviceMobile: l("device-mobile", 60123), diffAdded: l("diff-added", 60124), diffIgnored: l("diff-ignored", 60125), diffModified: l("diff-modified", 60126), diffRemoved: l("diff-removed", 60127), diffRenamed: l("diff-renamed", 60128), diff: l("diff", 60129), diffSidebyside: l("diff-sidebyside", 60129), discard: l("discard", 60130), editorLayout: l("editor-layout", 60131), emptyWindow: l("empty-window", 60132), exclude: l("exclude", 60133), extensions: l("extensions", 60134), eyeClosed: l("eye-closed", 60135), fileBinary: l("file-binary", 60136), fileCode: l("file-code", 60137), fileMedia: l("file-media", 60138), filePdf: l("file-pdf", 60139), fileSubmodule: l("file-submodule", 60140), fileSymlinkDirectory: l("file-symlink-directory", 60141), fileSymlinkFile: l("file-symlink-file", 60142), fileZip: l("file-zip", 60143), files: l("files", 60144), filter: l("filter", 60145), flame: l("flame", 60146), foldDown: l("fold-down", 60147), foldUp: l("fold-up", 60148), fold: l("fold", 60149), folderActive: l("folder-active", 60150), folderOpened: l("folder-opened", 60151), gear: l("gear", 60152), gift: l("gift", 60153), gistSecret: l("gist-secret", 60154), gist: l("gist", 60155), gitCommit: l("git-commit", 60156), gitCompare: l("git-compare", 60157), compareChanges: l("compare-changes", 60157), gitMerge: l("git-merge", 60158), githubAction: l("github-action", 60159), githubAlt: l("github-alt", 60160), globe: l("globe", 60161), grabber: l("grabber", 60162), graph: l("graph", 60163), gripper: l("gripper", 60164), heart: l("heart", 60165), home: l("home", 60166), horizontalRule: l("horizontal-rule", 60167), hubot: l("hubot", 60168), inbox: l("inbox", 60169), issueReopened: l("issue-reopened", 60171), issues: l("issues", 60172), italic: l("italic", 60173), jersey: l("jersey", 60174), json: l("json", 60175), kebabVertical: l("kebab-vertical", 60176), key: l("key", 60177), law: l("law", 60178), lightbulbAutofix: l("lightbulb-autofix", 60179), linkExternal: l("link-external", 60180), link: l("link", 60181), listOrdered: l("list-ordered", 60182), listUnordered: l("list-unordered", 60183), liveShare: l("live-share", 60184), loading: l("loading", 60185), location: l("location", 60186), mailRead: l("mail-read", 60187), mail: l("mail", 60188), markdown: l("markdown", 60189), megaphone: l("megaphone", 60190), mention: l("mention", 60191), milestone: l("milestone", 60192), gitPullRequestMilestone: l("git-pull-request-milestone", 60192), mortarBoard: l("mortar-board", 60193), move: l("move", 60194), multipleWindows: l("multiple-windows", 60195), mute: l("mute", 60196), noNewline: l("no-newline", 60197), note: l("note", 60198), octoface: l("octoface", 60199), openPreview: l("open-preview", 60200), package: l("package", 60201), paintcan: l("paintcan", 60202), pin: l("pin", 60203), play: l("play", 60204), run: l("run", 60204), plug: l("plug", 60205), preserveCase: l("preserve-case", 60206), preview: l("preview", 60207), project: l("project", 60208), pulse: l("pulse", 60209), question: l("question", 60210), quote: l("quote", 60211), radioTower: l("radio-tower", 60212), reactions: l("reactions", 60213), references: l("references", 60214), refresh: l("refresh", 60215), regex: l("regex", 60216), remoteExplorer: l("remote-explorer", 60217), remote: l("remote", 60218), remove: l("remove", 60219), replaceAll: l("replace-all", 60220), replace: l("replace", 60221), repoClone: l("repo-clone", 60222), repoForcePush: l("repo-force-push", 60223), repoPull: l("repo-pull", 60224), repoPush: l("repo-push", 60225), report: l("report", 60226), requestChanges: l("request-changes", 60227), rocket: l("rocket", 60228), rootFolderOpened: l("root-folder-opened", 60229), rootFolder: l("root-folder", 60230), rss: l("rss", 60231), ruby: l("ruby", 60232), saveAll: l("save-all", 60233), saveAs: l("save-as", 60234), save: l("save", 60235), screenFull: l("screen-full", 60236), screenNormal: l("screen-normal", 60237), searchStop: l("search-stop", 60238), server: l("server", 60240), settingsGear: l("settings-gear", 60241), settings: l("settings", 60242), shield: l("shield", 60243), smiley: l("smiley", 60244), sortPrecedence: l("sort-precedence", 60245), splitHorizontal: l("split-horizontal", 60246), splitVertical: l("split-vertical", 60247), squirrel: l("squirrel", 60248), starFull: l("star-full", 60249), starHalf: l("star-half", 60250), symbolClass: l("symbol-class", 60251), symbolColor: l("symbol-color", 60252), symbolConstant: l("symbol-constant", 60253), symbolEnumMember: l("symbol-enum-member", 60254), symbolField: l("symbol-field", 60255), symbolFile: l("symbol-file", 60256), symbolInterface: l("symbol-interface", 60257), symbolKeyword: l("symbol-keyword", 60258), symbolMisc: l("symbol-misc", 60259), symbolOperator: l("symbol-operator", 60260), symbolProperty: l("symbol-property", 60261), wrench: l("wrench", 60261), wrenchSubaction: l("wrench-subaction", 60261), symbolSnippet: l("symbol-snippet", 60262), tasklist: l("tasklist", 60263), telescope: l("telescope", 60264), textSize: l("text-size", 60265), threeBars: l("three-bars", 60266), thumbsdown: l("thumbsdown", 60267), thumbsup: l("thumbsup", 60268), tools: l("tools", 60269), triangleDown: l("triangle-down", 60270), triangleLeft: l("triangle-left", 60271), triangleRight: l("triangle-right", 60272), triangleUp: l("triangle-up", 60273), twitter: l("twitter", 60274), unfold: l("unfold", 60275), unlock: l("unlock", 60276), unmute: l("unmute", 60277), unverified: l("unverified", 60278), verified: l("verified", 60279), versions: l("versions", 60280), vmActive: l("vm-active", 60281), vmOutline: l("vm-outline", 60282), vmRunning: l("vm-running", 60283), watch: l("watch", 60284), whitespace: l("whitespace", 60285), wholeWord: l("whole-word", 60286), window: l("window", 60287), wordWrap: l("word-wrap", 60288), zoomIn: l("zoom-in", 60289), zoomOut: l("zoom-out", 60290), listFilter: l("list-filter", 60291), listFlat: l("list-flat", 60292), listSelection: l("list-selection", 60293), selection: l("selection", 60293), listTree: l("list-tree", 60294), debugBreakpointFunctionUnverified: l("debug-breakpoint-function-unverified", 60295), debugBreakpointFunction: l("debug-breakpoint-function", 60296), debugBreakpointFunctionDisabled: l("debug-breakpoint-function-disabled", 60296), debugStackframeActive: l("debug-stackframe-active", 60297), circleSmallFilled: l("circle-small-filled", 60298), debugStackframeDot: l("debug-stackframe-dot", 60298), terminalDecorationMark: l("terminal-decoration-mark", 60298), debugStackframe: l("debug-stackframe", 60299), debugStackframeFocused: l("debug-stackframe-focused", 60299), debugBreakpointUnsupported: l("debug-breakpoint-unsupported", 60300), symbolString: l("symbol-string", 60301), debugReverseContinue: l("debug-reverse-continue", 60302), debugStepBack: l("debug-step-back", 60303), debugRestartFrame: l("debug-restart-frame", 60304), debugAlt: l("debug-alt", 60305), callIncoming: l("call-incoming", 60306), callOutgoing: l("call-outgoing", 60307), menu: l("menu", 60308), expandAll: l("expand-all", 60309), feedback: l("feedback", 60310), gitPullRequestReviewer: l("git-pull-request-reviewer", 60310), groupByRefType: l("group-by-ref-type", 60311), ungroupByRefType: l("ungroup-by-ref-type", 60312), account: l("account", 60313), gitPullRequestAssignee: l("git-pull-request-assignee", 60313), bellDot: l("bell-dot", 60314), debugConsole: l("debug-console", 60315), library: l("library", 60316), output: l("output", 60317), runAll: l("run-all", 60318), syncIgnored: l("sync-ignored", 60319), pinned: l("pinned", 60320), githubInverted: l("github-inverted", 60321), serverProcess: l("server-process", 60322), serverEnvironment: l("server-environment", 60323), pass: l("pass", 60324), issueClosed: l("issue-closed", 60324), stopCircle: l("stop-circle", 60325), playCircle: l("play-circle", 60326), record: l("record", 60327), debugAltSmall: l("debug-alt-small", 60328), vmConnect: l("vm-connect", 60329), cloud: l("cloud", 60330), merge: l("merge", 60331), export: l("export", 60332), graphLeft: l("graph-left", 60333), magnet: l("magnet", 60334), notebook: l("notebook", 60335), redo: l("redo", 60336), checkAll: l("check-all", 60337), pinnedDirty: l("pinned-dirty", 60338), passFilled: l("pass-filled", 60339), circleLargeFilled: l("circle-large-filled", 60340), circleLarge: l("circle-large", 60341), circleLargeOutline: l("circle-large-outline", 60341), combine: l("combine", 60342), gather: l("gather", 60342), table: l("table", 60343), variableGroup: l("variable-group", 60344), typeHierarchy: l("type-hierarchy", 60345), typeHierarchySub: l("type-hierarchy-sub", 60346), typeHierarchySuper: l("type-hierarchy-super", 60347), gitPullRequestCreate: l("git-pull-request-create", 60348), runAbove: l("run-above", 60349), runBelow: l("run-below", 60350), notebookTemplate: l("notebook-template", 60351), debugRerun: l("debug-rerun", 60352), workspaceTrusted: l("workspace-trusted", 60353), workspaceUntrusted: l("workspace-untrusted", 60354), workspaceUnknown: l("workspace-unknown", 60355), terminalCmd: l("terminal-cmd", 60356), terminalDebian: l("terminal-debian", 60357), terminalLinux: l("terminal-linux", 60358), terminalPowershell: l("terminal-powershell", 60359), terminalTmux: l("terminal-tmux", 60360), terminalUbuntu: l("terminal-ubuntu", 60361), terminalBash: l("terminal-bash", 60362), arrowSwap: l("arrow-swap", 60363), copy: l("copy", 60364), personAdd: l("person-add", 60365), filterFilled: l("filter-filled", 60366), wand: l("wand", 60367), debugLineByLine: l("debug-line-by-line", 60368), inspect: l("inspect", 60369), layers: l("layers", 60370), layersDot: l("layers-dot", 60371), layersActive: l("layers-active", 60372), compass: l("compass", 60373), compassDot: l("compass-dot", 60374), compassActive: l("compass-active", 60375), azure: l("azure", 60376), issueDraft: l("issue-draft", 60377), gitPullRequestClosed: l("git-pull-request-closed", 60378), gitPullRequestDraft: l("git-pull-request-draft", 60379), debugAll: l("debug-all", 60380), debugCoverage: l("debug-coverage", 60381), runErrors: l("run-errors", 60382), folderLibrary: l("folder-library", 60383), debugContinueSmall: l("debug-continue-small", 60384), beakerStop: l("beaker-stop", 60385), graphLine: l("graph-line", 60386), graphScatter: l("graph-scatter", 60387), pieChart: l("pie-chart", 60388), bracket: l("bracket", 60175), bracketDot: l("bracket-dot", 60389), bracketError: l("bracket-error", 60390), lockSmall: l("lock-small", 60391), azureDevops: l("azure-devops", 60392), verifiedFilled: l("verified-filled", 60393), newline: l("newline", 60394), layout: l("layout", 60395), layoutActivitybarLeft: l("layout-activitybar-left", 60396), layoutActivitybarRight: l("layout-activitybar-right", 60397), layoutPanelLeft: l("layout-panel-left", 60398), layoutPanelCenter: l("layout-panel-center", 60399), layoutPanelJustify: l("layout-panel-justify", 60400), layoutPanelRight: l("layout-panel-right", 60401), layoutPanel: l("layout-panel", 60402), layoutSidebarLeft: l("layout-sidebar-left", 60403), layoutSidebarRight: l("layout-sidebar-right", 60404), layoutStatusbar: l("layout-statusbar", 60405), layoutMenubar: l("layout-menubar", 60406), layoutCentered: l("layout-centered", 60407), target: l("target", 60408), indent: l("indent", 60409), recordSmall: l("record-small", 60410), errorSmall: l("error-small", 60411), terminalDecorationError: l("terminal-decoration-error", 60411), arrowCircleDown: l("arrow-circle-down", 60412), arrowCircleLeft: l("arrow-circle-left", 60413), arrowCircleRight: l("arrow-circle-right", 60414), arrowCircleUp: l("arrow-circle-up", 60415), layoutSidebarRightOff: l("layout-sidebar-right-off", 60416), layoutPanelOff: l("layout-panel-off", 60417), layoutSidebarLeftOff: l("layout-sidebar-left-off", 60418), blank: l("blank", 60419), heartFilled: l("heart-filled", 60420), map: l("map", 60421), mapHorizontal: l("map-horizontal", 60421), foldHorizontal: l("fold-horizontal", 60421), mapFilled: l("map-filled", 60422), mapHorizontalFilled: l("map-horizontal-filled", 60422), foldHorizontalFilled: l("fold-horizontal-filled", 60422), circleSmall: l("circle-small", 60423), bellSlash: l("bell-slash", 60424), bellSlashDot: l("bell-slash-dot", 60425), commentUnresolved: l("comment-unresolved", 60426), gitPullRequestGoToChanges: l("git-pull-request-go-to-changes", 60427), gitPullRequestNewChanges: l("git-pull-request-new-changes", 60428), searchFuzzy: l("search-fuzzy", 60429), commentDraft: l("comment-draft", 60430), send: l("send", 60431), sparkle: l("sparkle", 60432), insert: l("insert", 60433), mic: l("mic", 60434), thumbsdownFilled: l("thumbsdown-filled", 60435), thumbsupFilled: l("thumbsup-filled", 60436), coffee: l("coffee", 60437), snake: l("snake", 60438), game: l("game", 60439), vr: l("vr", 60440), chip: l("chip", 60441), piano: l("piano", 60442), music: l("music", 60443), micFilled: l("mic-filled", 60444), repoFetch: l("repo-fetch", 60445), copilot: l("copilot", 60446), lightbulbSparkle: l("lightbulb-sparkle", 60447), robot: l("robot", 60448), sparkleFilled: l("sparkle-filled", 60449), diffSingle: l("diff-single", 60450), diffMultiple: l("diff-multiple", 60451), surroundWith: l("surround-with", 60452), share: l("share", 60453), gitStash: l("git-stash", 60454), gitStashApply: l("git-stash-apply", 60455), gitStashPop: l("git-stash-pop", 60456), vscode: l("vscode", 60457), vscodeInsiders: l("vscode-insiders", 60458), codeOss: l("code-oss", 60459), runCoverage: l("run-coverage", 60460), runAllCoverage: l("run-all-coverage", 60461), coverage: l("coverage", 60462), githubProject: l("github-project", 60463), mapVertical: l("map-vertical", 60464), foldVertical: l("fold-vertical", 60464), mapVerticalFilled: l("map-vertical-filled", 60465), foldVerticalFilled: l("fold-vertical-filled", 60465), goToSearch: l("go-to-search", 60466), percentage: l("percentage", 60467), sortPercentage: l("sort-percentage", 60467), attach: l("attach", 60468), goToEditingSession: l("go-to-editing-session", 60469), editSession: l("edit-session", 60470), codeReview: l("code-review", 60471), copilotWarning: l("copilot-warning", 60472), python: l("python", 60473), copilotLarge: l("copilot-large", 60474), copilotWarningLarge: l("copilot-warning-large", 60475), keyboardTab: l("keyboard-tab", 60476), copilotBlocked: l("copilot-blocked", 60477), copilotNotConnected: l("copilot-not-connected", 60478), flag: l("flag", 60479), lightbulbEmpty: l("lightbulb-empty", 60480), symbolMethodArrow: l("symbol-method-arrow", 60481), copilotUnavailable: l("copilot-unavailable", 60482), repoPinned: l("repo-pinned", 60483), keyboardTabAbove: l("keyboard-tab-above", 60484), keyboardTabBelow: l("keyboard-tab-below", 60485), gitPullRequestDone: l("git-pull-request-done", 60486), mcp: l("mcp", 60487), extensionsLarge: l("extensions-large", 60488), layoutPanelDock: l("layout-panel-dock", 60489), layoutSidebarLeftDock: l("layout-sidebar-left-dock", 60490), layoutSidebarRightDock: l("layout-sidebar-right-dock", 60491), terminalTwo: l("terminal-two", 60800), checkTwo: l("check-two", 60801), xTwo: l("x-two", 60802), expander: l("expander", 60803), restore: l("restore", 60804), pinTwo: l("pin-two", 60805), stopTwo: l("stop-two", 60806), brain: l("brain", 60807), magnifyingGlass: l("magnifying-glass", 60808), imageTwo: l("image-two", 60809), microphone: l("microphone", 60810), submit: l("submit", 60811), running: l("running", 60812), fileAddTwo: l("file-add-two", 60813), infinity: l("infinity", 60814), editTwo: l("edit-two", 60815), stopThree: l("stop-three", 60816), warningTwo: l("warning-two", 60817), arrowLeftTwo: l("arrow-left-two", 60818), redoTwo: l("redo-two", 60819), infoTwo: l("info-two", 60820), chat: l("chat", 60821), thumbsDown: l("thumbs-down", 60822), thumbsUp: l("thumbs-up", 60823), thumbsDownFilled: l("thumbs-down-filled", 60824), thumbsUpFilled: l("thumbs-up-filled", 60825), copyTwo: l("copy-two", 60826), ellipsisTwo: l("ellipsis-two", 60827), eyeTwo: l("eye-two", 60828), globeTwo: l("globe-two", 60829), reload: l("reload", 60830), folderTwo: l("folder-two", 60831), eraser: l("eraser", 60832), swirlSparkle: l("swirl-sparkle", 60833), sendTwo: l("send-two", 60834), inboxTwo: l("inbox-two", 60835), fileTwo: l("file-two", 60836), list: l("list", 60837), calendarTwo: l("calendar-two", 60838), openNotebook: l("open-notebook", 60839), paperWords: l("paper-words", 60840), mortarboard: l("mortarboard", 60841), lightning: l("lightning", 60842), hammer: l("hammer", 60843), keyboardTwo: l("keyboard-two", 60844), arrowUpTwo: l("arrow-up-two", 60845), import: l("import", 60846), targetTwo: l("target-two", 60847), tab: l("tab", 60848), magic: l("magic", 60849), cloneTwo: l("clone-two", 60850), brush: l("brush", 60851), branch: l("branch", 60852), addTwo: l("add-two", 60853), historyTwo: l("history-two", 60854), cloudTwo: l("cloud-two", 60855), review: l("review", 60856), plusSquare: l("plus-square", 60857), checkCircled: l("check-circled", 60858), dottedCircle: l("dotted-circle", 60859), warnCircle: l("warn-circle", 60860), downLocalMachine: l("down-local-machine", 60861), mergeUpwards: l("merge-upwards", 60862), asterisk: l("asterisk", 60863), time: l("time", 60864), arrowUpRight: l("arrow-up-right", 60865), arrowUpRightSquare: l("arrow-up-right-square", 60866), bubbleAndPencil: l("bubble-and-pencil", 60867), downloadOnSquare: l("download-on-square", 60868), shippingBox: l("shipping-box", 60869), chevronForwardDotted: l("chevron-forward-dotted", 60870), cylinderSplit: l("cylinder-split", 60871), cubeNodes: l("cube-nodes", 60872), clipboardList: l("clipboard-list", 60873), circleShine: l("circle-shine", 60874), chevronUpDown: l("chevron-up-down", 60875), cube: l("cube", 60876), telecom: l("telecom", 60877), micTwo: l("mic-two", 60878), hourglass: l("hourglass", 60879), todos: l("todos", 60880), hourglassTwo: l("hourglass-two", 60881), laptop: l("laptop", 60882), grep: l("grep", 60883), chevronDblLeft: l("chevron-dbl-left", 60884), chevronDblRight: l("chevron-dbl-right", 62237), squareAndPencil: l("square-and-pencil", 60885), doubleTerminal: l("double-terminal", 60886), sidebarLeft: l("sidebar-left", 60887), filesTwo: l("files-two", 60888), cursor: l("cursor", 60889), testIcon3: l("test-icon-3", 60890), testIcon4: l("test-icon-4", 60891), testIconic: l("test-iconic", 60892), compose: l("compose", 60893), composeTwo: l("compose-two", 60894), cursorOutlineTransparent: l("cursor-outline-transparent", 60895), cursorFrame: l("cursor-frame", 60896), cursorFrames: l("cursor-frames", 60897), cursorBigger: l("cursor-bigger", 60898), cursorBiggest: l("cursor-biggest", 60899), terminalFilled: l("terminal-filled", 60900), rectangleDashed: l("rectangle-dashed", 60901), squareArrow: l("square-arrow", 60902), unfoldVertical: l("unfold-vertical", 60903), unfoldDashed: l("unfold-dashed", 60904), foldDashed: l("fold-dashed", 60905), playwright: l("playwright", 60906), searchSparkle: l("search-sparkle", 60496), settingsRound: l("settings-round", 60497), panelRounded: l("panel-rounded", 60498), fileList: l("file-list", 60499), rectangleArrow: l("rectangle-arrow", 60500), rectangleGlobe: l("rectangle-globe", 60501), rules: l("rules", 60502), squaresArrow: l("squares-arrow", 60504), bugbot: l("bugbot", 60505), thinking: l("thinking", 60506), splitDashed: l("split-dashed", 60507), splitPanel: l("split-panel", 60508), splitFile: l("split-file", 62008), splitDash: l("split-dash", 62009), panelExpand: l("panel-expand", 62010), panelCollapse: l("panel-collapse", 62011), chatQuestion: l("chat-question", 62012), branchDot: l("branch-dot", 62013), gitBranchDot: l("git-branch-dot", 62014), alignTop: l("align-top", 62023), alignHcenter: l("align-hcenter", 62024), alignVcenter: l("align-vcenter", 62025), alignBottom: l("align-bottom", 62026), alignRight: l("align-right", 62027), alignLeft: l("align-left", 62028), angle: l("angle", 62029), alignBottomfill: l("align-bottomfill", 62030), alignHcenterfill: l("align-hcenterfill", 62031), alignLeftfill: l("align-leftfill", 62032), alignRightfill: l("align-rightfill", 62033), alignTopfill: l("align-topfill", 62034), alignVcenterfill: l("align-vcenterfill", 62035), freeform: l("freeform", 62036), layoutGrid: l("layout-grid", 62037), corners: l("corners", 62038), opacity: l("opacity", 62039), maximize: l("maximize", 62040), minimize: l("minimize", 62041), panelBottomon: l("panel-bottomon", 62042), panelBottomoff: l("panel-bottomoff", 62043), panelFrame: l("panel-frame", 62044), panelBottomOverlay: l("panel-bottom-overlay", 62045), panelRightOverlay: l("panel-right-overlay", 62046), panelLeftOverlay: l("panel-left-overlay", 62047), chatRounded: l("chat-rounded", 62048), fileRounded: l("file-rounded", 62049), judge: l("judge", 62050), minmize: l("minmize", 62051), borderAll: l("border-all", 62052), borderBottom: l("border-bottom", 62053), borderLeft: l("border-left", 62054), borderRight: l("border-right", 62055), borderTop: l("border-top", 62056), rotate: l("rotate", 62057), flipVertical: l("flip-vertical", 62058), flipHorizontal: l("flip-horizontal", 62059), padVertical: l("pad-vertical", 62060), padHorizontal: l("pad-horizontal", 62061), padTop: l("pad-top", 62062), padLeft: l("pad-left", 62063), padRight: l("pad-right", 62064), padBottom: l("pad-bottom", 62065), weight: l("weight", 62066), padAll: l("pad-all", 62067), absolutePosition: l("absolute-position", 62068), minWidth: l("min-width", 62069), maxWidth: l("max-width", 62070), hug: l("hug", 62071), fixed: l("fixed", 62072), removeWidth: l("remove-width", 62073), fillWidth: l("fill-width", 62074), letterSpacing: l("letter-spacing", 62075), lineHeight: l("line-height", 62076), leftAlign: l("left-align", 62077), centerAlign: l("center-align", 62078), rightAlign: l("right-align", 62079), textTop: l("text-top", 62080), textCenter: l("text-center", 62081), textBottom: l("text-bottom", 62082), layerBlur: l("layer-blur", 62083), backgroundBlur: l("background-blur", 62084), cornerTl: l("corner-tl", 62085), cornerTr: l("corner-tr", 62086), cornerBl: l("corner-bl", 62087), cornerBr: l("corner-br", 62088), flowCol: l("flow-col", 62089), flowRow: l("flow-row", 62090), gap: l("gap", 62091), gridCol: l("grid-col", 62092), gridRow: l("grid-row", 62093), sun: l("sun", 62094), unlink: l("unlink", 62095), arrowFilled: l("arrow-filled", 62096) }, Lg = { dialogError: l("dialog-error", "error"), dialogWarning: l("dialog-warning", "warning"), dialogInfo: l("dialog-info", "info"), dialogClose: l("dialog-close", "close"), treeItemExpanded: l("tree-item-expanded", "chevron-down"), treeFilterOnTypeOn: l("tree-filter-on-type-on", "list-filter"), treeFilterOnTypeOff: l("tree-filter-on-type-off", "list-selection"), treeFilterClear: l("tree-filter-clear", "close"), treeItemLoading: l("tree-item-loading", "loading"), menuSelection: l("menu-selection", "check"), menuSubmenu: l("menu-submenu", "chevron-right"), menuBarMore: l("menubar-more", "more"), scrollbarButtonLeft: l("scrollbar-button-left", "triangle-left"), scrollbarButtonRight: l("scrollbar-button-right", "triangle-right"), scrollbarButtonUp: l("scrollbar-button-up", "triangle-up"), scrollbarButtonDown: l("scrollbar-button-down", "triangle-down"), toolBarMore: l("toolbar-more", "more"), quickInputBack: l("quick-input-back", "arrow-left"), dropDownButton: l("drop-down-button", 60084), symbolCustomColor: l("symbol-customcolor", 60252), exportIcon: l("export", 60332), workspaceUnspecified: l("workspace-unspecified", 60355), newLine: l("newline", 60394), gitFetch: l("git-fetch", 60445), lightbulbSparkleAutofix: l("lightbulb-sparkle-autofix", 60447), debugBreakpointPending: l("debug-breakpoint-pending", 60377), circles: l("circles", 62352) }, be = { ...Ig, ...Lg }, Xo;
((e) => {
  function t(i) {
    return i && typeof i == "object" && typeof i.id == "string";
  }
  e.isThemeColor = t;
})(Xo || (Xo = {}));
var we;
((e) => {
  e.iconNameSegment = "[A-Za-z0-9]+", e.iconNameExpression = "[A-Za-z0-9-]+", e.iconModifierExpression = "~[A-Za-z]+", e.iconNameCharacter = "[A-Za-z0-9~-]";
  const t = new RegExp(`^(${e.iconNameExpression})(${e.iconModifierExpression})?$`);
  function i(f) {
    if (!f) return i(be.error);
    const p = t.exec(f.id);
    if (!p) return i(be.error);
    const [, m, _] = p, v = ["codicon", "codicon-" + m];
    return _ && v.push("codicon-modifier-" + _.substring(1)), v;
  }
  e.asClassNameArray = i;
  function s(f) {
    if (!f) return s(be.error);
    const p = t.exec(f.id);
    if (!p) return s(be.error);
    const [, m, _] = p;
    let v = `codicon codicon-${m}`;
    return _ && (v += ` codicon-modifier-${_.substring(1)}`), v;
  }
  e.asClassName = s;
  function n(f) {
    if (!f) return n(be.error);
    const p = t.exec(f.id);
    if (!p) return n(be.error);
    const [, m, _] = p;
    let v = `.codicon.codicon-${m}`;
    return _ && (v += `.codicon-modifier-${_.substring(1)}`), v;
  }
  e.asCSSSelector = n;
  function r(f) {
    return f && typeof f == "object" && typeof f.id == "string" && (typeof f.color > "u" || Xo.isThemeColor(f.color));
  }
  e.isThemeIcon = r;
  const o = new RegExp(`^\\$\\((${e.iconNameExpression}(?:${e.iconModifierExpression})?)\\)$`);
  function a(f) {
    const p = o.exec(f);
    if (!p) return;
    const [, m] = p;
    return { id: m };
  }
  e.fromString = a;
  function c(f) {
    return { id: f };
  }
  e.fromId = c;
  function h(f, p) {
    let m = f.id;
    const _ = m.lastIndexOf("~");
    return _ !== -1 && (m = m.substring(0, _)), p && (m = `${m}~${p}`), { id: m };
  }
  e.modify = h;
  function d(f) {
    const p = f.id.lastIndexOf("~");
    if (p !== -1) return f.id.substring(p + 1);
  }
  e.getModifier = d;
  function u(f, p) {
    return f.id === p.id && f.color?.id === p.color?.id;
  }
  e.isEqual = u;
})(we || (we = {}));
var Zo = new RegExp(`\\$\\(${we.iconNameExpression}(?:${we.iconModifierExpression})?\\)`, "g"), sb = new RegExp(`(\\\\)?${Zo.source}`, "g"), Rg = new RegExp(`\\\\${Zo.source}`, "g");
function Mg(e) {
  return e.replace(Rg, (t) => `\\${t}`);
}
var nb = new RegExp(`(\\s)?(\\\\)?${Zo.source}(\\s)?`, "g"), rb = new RegExp(`\\$\\(${we.iconNameCharacter}+\\)`, "g");
function Zn(e) {
  return e.replace(/"/g, "&quot;");
}
function Qo(e) {
  return e && e.replace(/\\([\\`*_{}[\]()#+\-.!~])/g, "$1");
}
function Pg(e) {
  const t = [], i = e.split("|").map((n) => n.trim());
  e = i[0];
  const s = i[1];
  if (s) {
    const n = /height=(\d+)/.exec(s), r = /width=(\d+)/.exec(s), o = n ? n[1] : "", a = r ? r[1] : "", c = isFinite(parseInt(a)), h = isFinite(parseInt(o));
    c && t.push(`width="${a}"`), h && t.push(`height="${o}"`);
  }
  return { href: e, dimensions: t };
}
var Og = class {
  constructor(e) {
    this._prefix = e, this._lastId = 0;
  }
  nextId() {
    return this._prefix + ++this._lastId;
  }
}, nd = new Og("id#");
function Jo() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var Yt = Jo();
function rd(e) {
  Yt = e;
}
var od = /[&<>"']/, Fg = new RegExp(od.source, "g"), ad = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Bg = new RegExp(ad.source, "g"), Hg = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ld = (e) => Hg[e];
function tt(e, t) {
  if (t) {
    if (od.test(e)) return e.replace(Fg, ld);
  } else if (ad.test(e)) return e.replace(Bg, ld);
  return e;
}
var Ug = /(^|[^\[])\^/g;
function ae(e, t) {
  let i = typeof e == "string" ? e : e.source;
  t = t || "";
  const s = { replace: (n, r) => {
    let o = typeof r == "string" ? r : r.source;
    return o = o.replace(Ug, "$1"), i = i.replace(n, o), s;
  }, getRegex: () => new RegExp(i, t) };
  return s;
}
function cd(e) {
  try {
    e = encodeURI(e).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return e;
}
var Ms = { exec: () => null };
function hd(e, t) {
  const i = e.replace(/\|/g, (r, o, a) => {
    let c = false, h = o;
    for (; --h >= 0 && a[h] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), s = i.split(/ \|/);
  let n = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s[s.length - 1].trim() && s.pop(), t) if (s.length > t) s.splice(t);
  else for (; s.length < t; ) s.push("");
  for (; n < s.length; n++) s[n] = s[n].trim().replace(/\\\|/g, "|");
  return s;
}
function Ps(e, t, i) {
  const s = e.length;
  if (s === 0) return "";
  let n = 0;
  for (; n < s; ) {
    const r = e.charAt(s - n - 1);
    if (r === t && !i) n++;
    else if (r !== t && i) n++;
    else break;
  }
  return e.slice(0, s - n);
}
function $g(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let i = 0;
  for (let s = 0; s < e.length; s++) if (e[s] === "\\") s++;
  else if (e[s] === t[0]) i++;
  else if (e[s] === t[1] && (i--, i < 0)) return s;
  return -1;
}
function dd(e, t, i, s) {
  const n = t.href, r = t.title ? tt(t.title) : null, o = e[1].replace(/\\([\[\]])/g, "$1");
  if (e[0].charAt(0) !== "!") {
    s.state.inLink = true;
    const a = { type: "link", raw: i, href: n, title: r, text: o, tokens: s.inlineTokens(o) };
    return s.state.inLink = false, a;
  }
  return { type: "image", raw: i, href: n, title: r, text: tt(o) };
}
function zg(e, t) {
  const i = e.match(/^(\s+)(?:```)/);
  if (i === null) return t;
  const s = i[1];
  return t.split(`
`).map((n) => {
    const r = n.match(/^\s+/);
    if (r === null) return n;
    const [o] = r;
    return o.length >= s.length ? n.slice(s.length) : n;
  }).join(`
`);
}
var Qn = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || Yt;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const i = t[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : Ps(i, `
`) };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const i = t[0], s = zg(i, t[3] || "");
      return { type: "code", raw: i, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: s };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let i = t[2].trim();
      if (/#$/.test(i)) {
        const s = Ps(i, "#");
        (this.options.pedantic || !s || / $/.test(s)) && (i = s.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: Ps(t[0], `
`) };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let i = Ps(t[0], `
`).split(`
`), s = "", n = "";
      const r = [];
      for (; i.length > 0; ) {
        let o = false;
        const a = [];
        let c;
        for (c = 0; c < i.length; c++) if (/^ {0,3}>/.test(i[c])) a.push(i[c]), o = true;
        else if (!o) a.push(i[c]);
        else break;
        i = i.slice(c);
        const h = a.join(`
`), d = h.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`).replace(/^ {0,3}>[ \t]?/gm, "");
        s = s ? `${s}
${h}` : h, n = n ? `${n}
${d}` : d;
        const u = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(d, r, true), this.lexer.state.top = u, i.length === 0) break;
        const f = r[r.length - 1];
        if (f?.type === "code") break;
        if (f?.type === "blockquote") {
          const p = f, m = p.raw + `
` + i.join(`
`), _ = this.blockquote(m);
          r[r.length - 1] = _, s = s.substring(0, s.length - p.raw.length) + _.raw, n = n.substring(0, n.length - p.text.length) + _.text;
          break;
        } else if (f?.type === "list") {
          const p = f, m = p.raw + `
` + i.join(`
`), _ = this.list(m);
          r[r.length - 1] = _, s = s.substring(0, s.length - f.raw.length) + _.raw, n = n.substring(0, n.length - p.raw.length) + _.raw, i = m.substring(r[r.length - 1].raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: r, text: n };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let i = t[1].trim();
      const s = i.length > 1, n = { type: "list", raw: "", ordered: s, start: s ? +i.slice(0, -1) : "", loose: false, items: [] };
      i = s ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = s ? i : "[*+-]");
      const r = new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = false;
      for (; e; ) {
        let a = false, c = "", h = "";
        if (!(t = r.exec(e)) || this.rules.block.hr.test(e)) break;
        c = t[0], e = e.substring(c.length);
        let d = t[2].split(`
`, 1)[0].replace(/^\t+/, (v) => " ".repeat(3 * v.length)), u = e.split(`
`, 1)[0], f = !d.trim(), p = 0;
        if (this.options.pedantic ? (p = 2, h = d.trimStart()) : f ? p = t[1].length + 1 : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, h = d.slice(p), p += t[1].length), f && /^ *$/.test(u) && (c += u + `
`, e = e.substring(u.length + 1), a = true), !a) {
          const v = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), y = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), C = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), D = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const E = e.split(`
`, 1)[0];
            if (u = E, this.options.pedantic && (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), C.test(u) || D.test(u) || v.test(u) || y.test(e)) break;
            if (u.search(/[^ ]/) >= p || !u.trim()) h += `
` + u.slice(p);
            else {
              if (f || d.search(/[^ ]/) >= 4 || C.test(d) || D.test(d) || y.test(d)) break;
              h += `
` + u;
            }
            !f && !u.trim() && (f = true), c += E + `
`, e = e.substring(E.length + 1), d = u.slice(p);
          }
        }
        n.loose || (o ? n.loose = true : /\n *\n *$/.test(c) && (o = true));
        let m = null, _;
        this.options.gfm && (m = /^\[[ xX]\] /.exec(h), m && (_ = m[0] !== "[ ] ", h = h.replace(/^\[[ xX]\] +/, ""))), n.items.push({ type: "list_item", raw: c, task: !!m, checked: _, loose: false, text: h, tokens: [] }), n.raw += c;
      }
      n.items[n.items.length - 1].raw = n.items[n.items.length - 1].raw.trimEnd(), n.items[n.items.length - 1].text = n.items[n.items.length - 1].text.trimEnd(), n.raw = n.raw.trimEnd();
      for (let a = 0; a < n.items.length; a++) if (this.lexer.state.top = false, n.items[a].tokens = this.lexer.blockTokens(n.items[a].text, []), !n.loose) {
        const c = n.items[a].tokens.filter((d) => d.type === "space"), h = c.length > 0 && c.some((d) => /\n.*\n/.test(d.raw));
        n.loose = h;
      }
      if (n.loose) for (let a = 0; a < n.items.length; a++) n.items[a].loose = true;
      return n;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t) return { type: "html", block: true, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const i = t[1].toLowerCase().replace(/\s+/g, " "), s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: i, raw: t[0], href: s, title: n };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    const i = hd(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), n = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], r = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (i.length === s.length) {
      for (const o of s) /^ *-+: *$/.test(o) ? r.align.push("right") : /^ *:-+: *$/.test(o) ? r.align.push("center") : /^ *:-+ *$/.test(o) ? r.align.push("left") : r.align.push(null);
      for (let o = 0; o < i.length; o++) r.header.push({ text: i[o], tokens: this.lexer.inline(i[o]), header: true, align: r.align[o] });
      for (const o of n) r.rows.push(hd(o, r.header.length).map((a, c) => ({ text: a, tokens: this.lexer.inline(a), header: false, align: r.align[c] })));
      return r;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const i = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: i, tokens: this.lexer.inline(i) };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: tt(t[1]) };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const i = t[2].trim();
      if (!this.options.pedantic && /^</.test(i)) {
        if (!/>$/.test(i)) return;
        const r = Ps(i.slice(0, -1), "\\");
        if ((i.length - r.length) % 2 === 0) return;
      } else {
        const r = $g(t[2], "()");
        if (r > -1) {
          const a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + r;
          t[2] = t[2].substring(0, r), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let s = t[2], n = "";
      if (this.options.pedantic) {
        const r = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        r && (s = r[1], n = r[3]);
      } else n = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (this.options.pedantic && !/>$/.test(i) ? s = s.slice(1) : s = s.slice(1, -1)), dd(t, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: n && n.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let i;
    if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
      const s = (i[2] || i[1]).replace(/\s+/g, " "), n = t[s.toLowerCase()];
      if (!n) {
        const r = i[0].charAt(0);
        return { type: "text", raw: r, text: r };
      }
      return dd(i, n, i[0], this.lexer);
    }
  }
  emStrong(e, t, i = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || s[3] && i.match(/[\p{L}\p{N}]/u)) return;
    if (!(s[1] || s[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const r = [...s[0]].length - 1;
      let o, a, c = r, h = 0;
      const d = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, t = t.slice(-1 * e.length + r); (s = d.exec(t)) != null; ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o) continue;
        if (a = [...o].length, s[3] || s[4]) {
          c += a;
          continue;
        } else if ((s[5] || s[6]) && r % 3 && !((r + a) % 3)) {
          h += a;
          continue;
        }
        if (c -= a, c > 0) continue;
        a = Math.min(a, a + c + h);
        const u = [...s[0]][0].length, f = e.slice(0, r + s.index + u + a);
        if (Math.min(r, a) % 2) {
          const m = f.slice(1, -1);
          return { type: "em", raw: f, text: m, tokens: this.lexer.inlineTokens(m) };
        }
        const p = f.slice(2, -2);
        return { type: "strong", raw: f, text: p, tokens: this.lexer.inlineTokens(p) };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let i = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(i), n = /^ /.test(i) && / $/.test(i);
      return s && n && (i = i.substring(1, i.length - 1)), i = tt(i, true), { type: "codespan", raw: t[0], text: i };
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
      let i, s;
      return t[2] === "@" ? (i = tt(t[1]), s = "mailto:" + i) : (i = tt(t[1]), s = i), { type: "link", raw: t[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let i, s;
      if (t[2] === "@") i = tt(t[0]), s = "mailto:" + i;
      else {
        let n;
        do
          n = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (n !== t[0]);
        i = tt(t[0]), t[1] === "www." ? s = "http://" + t[0] : s = t[0];
      }
      return { type: "link", raw: t[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let i;
      return this.lexer.state.inRawBlock ? i = t[0] : i = tt(t[0]), { type: "text", raw: t[0], text: i };
    }
  }
}, Wg = /^(?: *(?:\n|$))+/, Vg = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, Gg = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Os = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, qg = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ud = /(?:[*+-]|\d{1,9}[.)])/, fd = ae(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, ud).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), ea = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Kg = /^[^\n]+/, ta = /(?!\s*\])(?:\\.|[^\[\]\\])+/, jg = ae(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", ta).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Yg = ae(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ud).getRegex(), Jn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ia = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Xg = ae("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", ia).replace("tag", Jn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), pd = ae(ea).replace("hr", Os).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jn).getRegex(), Zg = ae(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", pd).getRegex(), sa = { blockquote: Zg, code: Vg, def: jg, fences: Gg, heading: qg, hr: Os, html: Xg, lheading: fd, list: Yg, newline: Wg, paragraph: pd, table: Ms, text: Kg }, gd = ae("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Os).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jn).getRegex(), Qg = { ...sa, table: gd, paragraph: ae(ea).replace("hr", Os).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gd).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jn).getRegex() }, Jg = { ...sa, html: ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ia).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Ms, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: ae(ea).replace("hr", Os).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", fd).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, md = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, em = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, vd = /^( {2,}|\\)\n(?!\s*$)/, tm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Fs = "\\p{P}\\p{S}", im = ae(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Fs).getRegex(), sm = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, nm = ae(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Fs).getRegex(), rm = ae("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Fs).getRegex(), om = ae("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Fs).getRegex(), am = ae(/\\([punct])/, "gu").replace(/punct/g, Fs).getRegex(), lm = ae(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), cm = ae(ia).replace("(?:-->|$)", "-->").getRegex(), hm = ae("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", cm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), er = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, dm = ae(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", er).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), bd = ae(/^!?\[(label)\]\[(ref)\]/).replace("label", er).replace("ref", ta).getRegex(), yd = ae(/^!?\[(ref)\](?:\[\])?/).replace("ref", ta).getRegex(), um = ae("reflink|nolink(?!\\()", "g").replace("reflink", bd).replace("nolink", yd).getRegex(), na = { _backpedal: Ms, anyPunctuation: am, autolink: lm, blockSkip: sm, br: vd, code: em, del: Ms, emStrongLDelim: nm, emStrongRDelimAst: rm, emStrongRDelimUnd: om, escape: md, link: dm, nolink: yd, punctuation: im, reflink: bd, reflinkSearch: um, tag: hm, text: tm, url: Ms }, fm = { ...na, link: ae(/^!?\[(label)\]\((.*?)\)/).replace("label", er).getRegex(), reflink: ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", er).getRegex() }, ra = { ...na, escape: ae(md).replace("])", "~|])").getRegex(), url: ae(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, pm = { ...ra, br: ae(vd).replace("{2,}", "*").getRegex(), text: ae(ra.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, tr = { normal: sa, gfm: Qg, pedantic: Jg }, Bs = { normal: na, gfm: ra, breaks: pm, pedantic: fm }, vi = class ja {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Yt, this.options.tokenizer = this.options.tokenizer || new Qn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    const i = { block: tr.normal, inline: Bs.normal };
    this.options.pedantic ? (i.block = tr.pedantic, i.inline = Bs.pedantic) : this.options.gfm && (i.block = tr.gfm, this.options.breaks ? i.inline = Bs.breaks : i.inline = Bs.gfm), this.tokenizer.rules = i;
  }
  static get rules() {
    return { block: tr, inline: Bs };
  }
  static lex(t, i) {
    return new ja(i).lex(t);
  }
  static lexInline(t, i) {
    return new ja(i).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(/\r\n|\r/g, `
`), this.blockTokens(t, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const s = this.inlineQueue[i];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, i = [], s = false) {
    this.options.pedantic ? t = t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t = t.replace(/^( *)(\t+)/gm, (a, c, h) => c + "    ".repeat(h.length));
    let n, r, o;
    for (; t; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => (n = a.call({ lexer: this }, t, i)) ? (t = t.substring(n.raw.length), i.push(n), true) : false))) {
      if (n = this.tokenizer.space(t)) {
        t = t.substring(n.raw.length), n.raw.length === 1 && i.length > 0 ? i[i.length - 1].raw += `
` : i.push(n);
        continue;
      }
      if (n = this.tokenizer.code(t)) {
        t = t.substring(n.raw.length), r = i[i.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : i.push(n);
        continue;
      }
      if (n = this.tokenizer.fences(t)) {
        t = t.substring(n.raw.length), i.push(n);
        continue;
      }
      if (n = this.tokenizer.heading(t)) {
        t = t.substring(n.raw.length), i.push(n);
        continue;
      }
      if (n = this.tokenizer.hr(t)) {
        t = t.substring(n.raw.length), i.push(n);
        continue;
      }
      if (n = this.tokenizer.blockquote(t)) {
        t = t.substring(n.raw.length), i.push(n);
        continue;
      }
      if (n = this.tokenizer.list(t)) {
        t = t.substring(n.raw.length), i.push(n);
        continue;
      }
      if (n = this.tokenizer.html(t)) {
        t = t.substring(n.raw.length), i.push(n);
        continue;
      }
      if (n = this.tokenizer.def(t)) {
        t = t.substring(n.raw.length), r = i[i.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + n.raw, r.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = { href: n.href, title: n.title });
        continue;
      }
      if (n = this.tokenizer.table(t)) {
        t = t.substring(n.raw.length), i.push(n);
        continue;
      }
      if (n = this.tokenizer.lheading(t)) {
        t = t.substring(n.raw.length), i.push(n);
        continue;
      }
      if (o = t, this.options.extensions && this.options.extensions.startBlock) {
        let a = 1 / 0;
        const c = t.slice(1);
        let h;
        this.options.extensions.startBlock.forEach((d) => {
          h = d.call({ lexer: this }, c), typeof h == "number" && h >= 0 && (a = Math.min(a, h));
        }), a < 1 / 0 && a >= 0 && (o = t.substring(0, a + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(o))) {
        r = i[i.length - 1], s && r?.type === "paragraph" ? (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : i.push(n), s = o.length !== t.length, t = t.substring(n.raw.length);
        continue;
      }
      if (n = this.tokenizer.text(t)) {
        t = t.substring(n.raw.length), r = i[i.length - 1], r && r.type === "text" ? (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : i.push(n);
        continue;
      }
      if (t) {
        const a = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(a);
          break;
        } else throw new Error(a);
      }
    }
    return this.state.top = true, i;
  }
  inline(t, i = []) {
    return this.inlineQueue.push({ src: t, tokens: i }), i;
  }
  inlineTokens(t, i = []) {
    let s, n, r, o = t, a, c, h;
    if (this.tokens.links) {
      const d = Object.keys(this.tokens.links);
      if (d.length > 0) for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null; ) d.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; ) o = o.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(o)) != null; ) o = o.slice(0, a.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; t; ) if (c || (h = ""), c = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((d) => (s = d.call({ lexer: this }, t, i)) ? (t = t.substring(s.raw.length), i.push(s), true) : false))) {
      if (s = this.tokenizer.escape(t)) {
        t = t.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.tag(t)) {
        t = t.substring(s.raw.length), n = i[i.length - 1], n && s.type === "text" && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : i.push(s);
        continue;
      }
      if (s = this.tokenizer.link(t)) {
        t = t.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(s.raw.length), n = i[i.length - 1], n && s.type === "text" && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : i.push(s);
        continue;
      }
      if (s = this.tokenizer.emStrong(t, o, h)) {
        t = t.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.codespan(t)) {
        t = t.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.br(t)) {
        t = t.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.del(t)) {
        t = t.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.autolink(t)) {
        t = t.substring(s.raw.length), i.push(s);
        continue;
      }
      if (!this.state.inLink && (s = this.tokenizer.url(t))) {
        t = t.substring(s.raw.length), i.push(s);
        continue;
      }
      if (r = t, this.options.extensions && this.options.extensions.startInline) {
        let d = 1 / 0;
        const u = t.slice(1);
        let f;
        this.options.extensions.startInline.forEach((p) => {
          f = p.call({ lexer: this }, u), typeof f == "number" && f >= 0 && (d = Math.min(d, f));
        }), d < 1 / 0 && d >= 0 && (r = t.substring(0, d + 1));
      }
      if (s = this.tokenizer.inlineText(r)) {
        t = t.substring(s.raw.length), s.raw.slice(-1) !== "_" && (h = s.raw.slice(-1)), c = true, n = i[i.length - 1], n && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : i.push(s);
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
    return i;
  }
}, es = class {
  options;
  parser;
  constructor(e) {
    this.options = e || Yt;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: i }) {
    const s = (t || "").match(/^\S*/)?.[0], n = e.replace(/\n$/, "") + `
`;
    return s ? '<pre><code class="language-' + tt(s) + '">' + (i ? n : tt(n, true)) + `</code></pre>
` : "<pre><code>" + (i ? n : tt(n, true)) + `</code></pre>
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
    const t = e.ordered, i = e.start;
    let s = "";
    for (let o = 0; o < e.items.length; o++) {
      const a = e.items[o];
      s += this.listitem(a);
    }
    const n = t ? "ol" : "ul", r = t && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + n + r + `>
` + s + "</" + n + `>
`;
  }
  listitem(e) {
    let t = "";
    if (e.task) {
      const i = this.checkbox({ checked: !!e.checked });
      e.loose ? e.tokens.length > 0 && e.tokens[0].type === "paragraph" ? (e.tokens[0].text = i + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = i + " " + e.tokens[0].tokens[0].text)) : e.tokens.unshift({ type: "text", raw: i + " ", text: i + " " }) : t += i + " ";
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
    let t = "", i = "";
    for (let n = 0; n < e.header.length; n++) i += this.tablecell(e.header[n]);
    t += this.tablerow({ text: i });
    let s = "";
    for (let n = 0; n < e.rows.length; n++) {
      const r = e.rows[n];
      i = "";
      for (let o = 0; o < r.length; o++) i += this.tablecell(r[o]);
      s += this.tablerow({ text: i });
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
    const t = this.parser.parseInline(e.tokens), i = e.header ? "th" : "td";
    return (e.align ? `<${i} align="${e.align}">` : `<${i}>`) + t + `</${i}>
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
  link({ href: e, title: t, tokens: i }) {
    const s = this.parser.parseInline(i), n = cd(e);
    if (n === null) return s;
    e = n;
    let r = '<a href="' + e + '"';
    return t && (r += ' title="' + t + '"'), r += ">" + s + "</a>", r;
  }
  image({ href: e, title: t, text: i }) {
    const s = cd(e);
    if (s === null) return i;
    e = s;
    let n = `<img src="${e}" alt="${i}"`;
    return t && (n += ` title="${t}"`), n += ">", n;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : e.text;
  }
}, oa = class {
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
}, bi = class Ya {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || Yt, this.options.renderer = this.options.renderer || new es(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new oa();
  }
  static parse(t, i) {
    return new Ya(i).parse(t);
  }
  static parseInline(t, i) {
    return new Ya(i).parseInline(t);
  }
  parse(t, i = true) {
    let s = "";
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        const a = r, c = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (c !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          s += c || "";
          continue;
        }
      }
      const o = r;
      switch (o.type) {
        case "space": {
          s += this.renderer.space(o);
          continue;
        }
        case "hr": {
          s += this.renderer.hr(o);
          continue;
        }
        case "heading": {
          s += this.renderer.heading(o);
          continue;
        }
        case "code": {
          s += this.renderer.code(o);
          continue;
        }
        case "table": {
          s += this.renderer.table(o);
          continue;
        }
        case "blockquote": {
          s += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          s += this.renderer.list(o);
          continue;
        }
        case "html": {
          s += this.renderer.html(o);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(o);
          continue;
        }
        case "text": {
          let a = o, c = this.renderer.text(a);
          for (; n + 1 < t.length && t[n + 1].type === "text"; ) a = t[++n], c += `
` + this.renderer.text(a);
          i ? s += this.renderer.paragraph({ type: "paragraph", raw: c, text: c, tokens: [{ type: "text", raw: c, text: c }] }) : s += c;
          continue;
        }
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return s;
  }
  parseInline(t, i) {
    i = i || this.renderer;
    let s = "";
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        const a = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (a !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          s += a || "";
          continue;
        }
      }
      const o = r;
      switch (o.type) {
        case "escape": {
          s += i.text(o);
          break;
        }
        case "html": {
          s += i.html(o);
          break;
        }
        case "link": {
          s += i.link(o);
          break;
        }
        case "image": {
          s += i.image(o);
          break;
        }
        case "strong": {
          s += i.strong(o);
          break;
        }
        case "em": {
          s += i.em(o);
          break;
        }
        case "codespan": {
          s += i.codespan(o);
          break;
        }
        case "br": {
          s += i.br(o);
          break;
        }
        case "del": {
          s += i.del(o);
          break;
        }
        case "text": {
          s += i.text(o);
          break;
        }
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return s;
  }
}, ir = class {
  options;
  constructor(e) {
    this.options = e || Yt;
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
}, gm = class {
  defaults = Jo();
  options = this.setOptions;
  parse = this.parseMarkdown(vi.lex, bi.parse);
  parseInline = this.parseMarkdown(vi.lexInline, bi.parseInline);
  Parser = bi;
  Renderer = es;
  TextRenderer = oa;
  Lexer = vi;
  Tokenizer = Qn;
  Hooks = ir;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let i = [];
    for (const s of e) switch (i = i.concat(t.call(this, s)), s.type) {
      case "table": {
        const n = s;
        for (const r of n.header) i = i.concat(this.walkTokens(r.tokens, t));
        for (const r of n.rows) for (const o of r) i = i.concat(this.walkTokens(o.tokens, t));
        break;
      }
      case "list": {
        const n = s;
        i = i.concat(this.walkTokens(n.items, t));
        break;
      }
      default: {
        const n = s;
        this.defaults.extensions?.childTokens?.[n.type] ? this.defaults.extensions.childTokens[n.type].forEach((r) => {
          const o = n[r].flat(1 / 0);
          i = i.concat(this.walkTokens(o, t));
        }) : n.tokens && (i = i.concat(this.walkTokens(n.tokens, t)));
      }
    }
    return i;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((i) => {
      const s = { ...i };
      if (s.async = this.defaults.async || s.async || false, i.extensions && (i.extensions.forEach((n) => {
        if (!n.name) throw new Error("extension name required");
        if ("renderer" in n) {
          const r = t.renderers[n.name];
          r ? t.renderers[n.name] = function(...o) {
            let a = n.renderer.apply(this, o);
            return a === false && (a = r.apply(this, o)), a;
          } : t.renderers[n.name] = n.renderer;
        }
        if ("tokenizer" in n) {
          if (!n.level || n.level !== "block" && n.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          const r = t[n.level];
          r ? r.unshift(n.tokenizer) : t[n.level] = [n.tokenizer], n.start && (n.level === "block" ? t.startBlock ? t.startBlock.push(n.start) : t.startBlock = [n.start] : n.level === "inline" && (t.startInline ? t.startInline.push(n.start) : t.startInline = [n.start]));
        }
        "childTokens" in n && n.childTokens && (t.childTokens[n.name] = n.childTokens);
      }), s.extensions = t), i.renderer) {
        const n = this.defaults.renderer || new es(this.defaults);
        for (const r in i.renderer) {
          if (!(r in n)) throw new Error(`renderer '${r}' does not exist`);
          if (["options", "parser"].includes(r)) continue;
          const o = r, a = i.renderer[o], c = n[o];
          n[o] = (...h) => {
            let d = a.apply(n, h);
            return d === false && (d = c.apply(n, h)), d || "";
          };
        }
        s.renderer = n;
      }
      if (i.tokenizer) {
        const n = this.defaults.tokenizer || new Qn(this.defaults);
        for (const r in i.tokenizer) {
          if (!(r in n)) throw new Error(`tokenizer '${r}' does not exist`);
          if (["options", "rules", "lexer"].includes(r)) continue;
          const o = r, a = i.tokenizer[o], c = n[o];
          n[o] = (...h) => {
            let d = a.apply(n, h);
            return d === false && (d = c.apply(n, h)), d;
          };
        }
        s.tokenizer = n;
      }
      if (i.hooks) {
        const n = this.defaults.hooks || new ir();
        for (const r in i.hooks) {
          if (!(r in n)) throw new Error(`hook '${r}' does not exist`);
          if (r === "options") continue;
          const o = r, a = i.hooks[o], c = n[o];
          ir.passThroughHooks.has(r) ? n[o] = (h) => {
            if (this.defaults.async) return Promise.resolve(a.call(n, h)).then((u) => c.call(n, u));
            const d = a.call(n, h);
            return c.call(n, d);
          } : n[o] = (...h) => {
            let d = a.apply(n, h);
            return d === false && (d = c.apply(n, h)), d;
          };
        }
        s.hooks = n;
      }
      if (i.walkTokens) {
        const n = this.defaults.walkTokens, r = i.walkTokens;
        s.walkTokens = function(o) {
          let a = [];
          return a.push(r.call(this, o)), n && (a = a.concat(n.call(this, o))), a;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return vi.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return bi.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e, t) {
    return (s, n) => {
      const r = { ...n }, o = { ...this.defaults, ...r }, a = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === true && r.async === false) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof s > "u" || s === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof s != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
      if (o.hooks && (o.hooks.options = o), o.async) return Promise.resolve(o.hooks ? o.hooks.preprocess(s) : s).then((c) => e(c, o)).then((c) => o.hooks ? o.hooks.processAllTokens(c) : c).then((c) => o.walkTokens ? Promise.all(this.walkTokens(c, o.walkTokens)).then(() => c) : c).then((c) => t(c, o)).then((c) => o.hooks ? o.hooks.postprocess(c) : c).catch(a);
      try {
        o.hooks && (s = o.hooks.preprocess(s));
        let c = e(s, o);
        o.hooks && (c = o.hooks.processAllTokens(c)), o.walkTokens && this.walkTokens(c, o.walkTokens);
        let h = t(c, o);
        return o.hooks && (h = o.hooks.postprocess(h)), h;
      } catch (c) {
        return a(c);
      }
    };
  }
  onError(e, t) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const s = "<p>An error occurred:</p><pre>" + tt(i.message + "", true) + "</pre>";
        return t ? Promise.resolve(s) : s;
      }
      if (t) return Promise.reject(i);
      throw i;
    };
  }
}, yi = new gm();
function ne(e, t) {
  return yi.parse(e, t);
}
ne.options = ne.setOptions = function(e) {
  return yi.setOptions(e), ne.defaults = yi.defaults, rd(ne.defaults), ne;
}, ne.getDefaults = Jo, ne.defaults = Yt, ne.use = function(...e) {
  return yi.use(...e), ne.defaults = yi.defaults, rd(ne.defaults), ne;
}, ne.walkTokens = function(e, t) {
  return yi.walkTokens(e, t);
}, ne.parseInline = yi.parseInline, ne.Parser = bi, ne.parser = bi.parse, ne.Renderer = es, ne.TextRenderer = oa, ne.Lexer = vi, ne.lexer = vi.lex, ne.Tokenizer = Qn, ne.Hooks = ir, ne.parse = ne;
var ob = ne.options, ab = ne.setOptions, lb = ne.use, cb = ne.walkTokens, hb = ne.parseInline, mm = ne, vm = bi.parse, Hs = vi.lex;
function sr(e) {
  const t = new es();
  return t.code = ({ text: i }) => Wi(i), t.blockquote = ({ text: i }) => i + `
`, t.html = e ? ({ text: i }) => i : (i) => "", t.heading = function({ tokens: i }) {
    return this.parser.parseInline(i) + `
`;
  }, t.hr = () => "", t.list = function({ items: i }) {
    return i.map((s) => this.listitem(s)).join(`
`) + `
`;
  }, t.listitem = ({ text: i }) => i + `
`, t.paragraph = function({ tokens: i }) {
    return this.parser.parseInline(i) + `
`;
  }, t.table = function({ header: i, rows: s }) {
    return i.map((n) => this.tablecell(n)).join(" ") + `
` + s.map((n) => n.map((r) => this.tablecell(r)).join(" ")).join(`
`) + `
`;
  }, t.tablerow = ({ text: i }) => i, t.tablecell = function({ tokens: i }) {
    return this.parser.parseInline(i);
  }, t.strong = ({ text: i }) => i, t.em = ({ text: i }) => i, t.codespan = ({ text: i }) => Wi(i), t.br = (i) => `
`, t.del = ({ text: i }) => i, t.image = (i) => "", t.text = ({ text: i }) => i, t.link = ({ text: i }) => i, t;
}
function wd(e) {
  return e.code = ({ text: t }) => `
\`\`\`
${Wi(t)}
\`\`\`
`, e;
}
var db = new rt(() => sr(false)), ub = new rt(() => wd(sr(false))), fb = new rt(() => sr(true)), pb = new rt(() => wd(sr(true)));
function bm(e) {
  let t = JSON.parse(e);
  return t = Us(t), t;
}
var ym = Object.prototype.hasOwnProperty;
function Us(e, t = 0) {
  if (typeof e != "object" || e === null || t > 200) return e;
  switch (e.$mid) {
    case 1:
      return me.revive(e);
    case 2:
      return new RegExp(e.source, e.flags);
    case 17:
      return new Date(e.source);
  }
  if (Array.isArray(e)) for (let i = 0; i < e.length; ++i) {
    const s = e[i];
    if (s !== null && typeof s == "object") {
      const n = Us(s, t + 1);
      n !== s && (e[i] = n);
    }
  }
  else {
    if (e instanceof Je || e instanceof Uint8Array) return e;
    for (const i in e) if (ym.call(e, i)) {
      const s = e[i];
      if (s !== null && typeof s == "object") {
        const n = Us(s, t + 1);
        n !== s && (e[i] = n);
      }
    }
  }
  return e;
}
var wm = Object.prototype.hasOwnProperty;
function _m(e, t) {
  return aa(e, t, /* @__PURE__ */ new Set());
}
function aa(e, t, i) {
  if (mn(e)) return e;
  const s = t(e);
  if (typeof s < "u") return s;
  if (Array.isArray(e)) {
    const n = [];
    for (const r of e) n.push(aa(r, t, i));
    return n;
  }
  if (zl(e)) {
    if (i.has(e)) throw new Error("Cannot clone recursive data-structure");
    i.add(e);
    const n = {};
    for (const r in e) wm.call(e, r) && (n[r] = aa(e[r], t, i));
    return i.delete(e), n;
  }
  return e;
}
function nr(e, t) {
  if (e === t) return true;
  if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t)) return false;
  let i, s;
  if (Array.isArray(e)) {
    if (e.length !== t.length) return false;
    for (i = 0; i < e.length; i++) if (!nr(e[i], t[i])) return false;
  } else {
    const n = [];
    for (s in e) n.push(s);
    n.sort();
    const r = [];
    for (s in t) r.push(s);
    if (r.sort(), !nr(n, r)) return false;
    for (i = 0; i < n.length; i++) if (!nr(e[n[i]], t[n[i]])) return false;
  }
  return true;
}
function Sm(e, t = {}) {
  const i = la(t);
  return i.textContent = e, i;
}
function Cm(e, t = {}) {
  const i = la(t);
  return _d(i, Em(e, !!t.renderCodeSegments), t.actionHandler, t.renderCodeSegments), i;
}
function la(e) {
  const t = e.inline ? "span" : "div", i = document.createElement(t);
  return e.className && (i.className = e.className), i;
}
var Dm = class {
  constructor(e) {
    this.source = e, this.index = 0;
  }
  eos() {
    return this.index >= this.source.length;
  }
  next() {
    const e = this.peek();
    return this.advance(), e;
  }
  peek() {
    return this.source[this.index];
  }
  advance() {
    this.index++;
  }
};
function _d(e, t, i, s) {
  let n;
  if (t.type === 2) n = document.createTextNode(t.content || "");
  else if (t.type === 3) n = document.createElement("b");
  else if (t.type === 4) n = document.createElement("i");
  else if (t.type === 7 && s) n = document.createElement("code");
  else if (t.type === 5 && i) {
    const r = document.createElement("a");
    i.disposables.add(Vn(r, "click", (o) => {
      i.callback(String(t.index), o);
    })), n = r;
  } else t.type === 8 ? n = document.createElement("br") : t.type === 1 && (n = e);
  n && e !== n && e.appendChild(n), n && Array.isArray(t.children) && t.children.forEach((r) => {
    _d(n, r, i, s);
  });
}
function Em(e, t) {
  const i = { type: 1, children: [] };
  let s = 0, n = i;
  const r = [], o = new Dm(e);
  for (; !o.eos(); ) {
    let a = o.next();
    const c = a === "\\" && ca(o.peek(), t) !== 0;
    if (c && (a = o.next()), !c && km(a, t) && a === o.peek()) {
      o.advance(), n.type === 2 && (n = r.pop());
      const h = ca(a, t);
      if (n.type === h || n.type === 5 && h === 6) n = r.pop();
      else {
        const d = { type: h, children: [] };
        h === 5 && (d.index = s, s++), n.children.push(d), r.push(n), n = d;
      }
    } else if (a === `
`) n.type === 2 && (n = r.pop()), n.children.push({ type: 8 });
    else if (n.type !== 2) {
      const h = { type: 2, content: a };
      n.children.push(h), r.push(n), n = h;
    } else n.content += a;
  }
  return n.type === 2 && (n = r.pop()), r.length, i;
}
function km(e, t) {
  return ca(e, t) !== 0;
}
function ca(e, t) {
  switch (e) {
    case "*":
      return 3;
    case "_":
      return 4;
    case "[":
      return 5;
    case "]":
      return 6;
    case "`":
      return t ? 7 : 0;
    default:
      return 0;
  }
}
var Tm = new RegExp(`(\\\\)?\\$\\((${we.iconNameExpression}(?:${we.iconModifierExpression})?)(?:#([\\w-]+))?\\)`, "g");
function xm(e) {
  const t = new Array();
  let i, s = 0, n = 0;
  for (; (i = Tm.exec(e)) !== null; ) {
    n = i.index || 0, s < n && t.push(e.substring(s, n)), s = (i.index || 0) + i[0].length;
    const [, r, o, a] = i;
    t.push(r ? `$(${o}${a ? `#${a}` : ""})` : Am({ id: o }, a));
  }
  return s < e.length && t.push(e.substring(s)), t;
}
function Am(e, t) {
  const i = ie("span");
  return i.classList.add(...we.asClassNameArray(e)), t && i.classList.add(t), i;
}
var ha = Object.freeze({ image: ({ href: e, title: t, text: i }) => {
  let s = [], n = [];
  return e && ({ href: e, dimensions: s } = Pg(e), n.push(`src="${Zn(e)}"`)), i && n.push(`alt="${Zn(i)}"`), t && n.push(`title="${Zn(t)}"`), s.length && (n = n.concat(s)), "<img " + n.join(" ") + ">";
}, paragraph({ tokens: e }) {
  return `<p>${this.parser.parseInline(e)}</p>`;
}, link({ href: e, title: t, tokens: i }) {
  let s = this.parser.parseInline(i);
  return typeof e != "string" ? "" : (e === s && (s = Qo(s)), t = typeof t == "string" ? Zn(Qo(t)) : "", e = Qo(e), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"), `<a href="${e}" title="${t || e}" draggable="false">${s}</a>`);
} });
function Nm(e, t = {}, i = {}) {
  const s = new q();
  let n = false;
  const r = la(t), { renderer: o, codeBlocks: a, syncCodeBlocks: c } = Mm(t, e), h = Pm(e);
  let d;
  if (t.fillInIncompleteTokens) {
    const m = { ...Yt, ...i, renderer: o }, _ = Hs(h, m), v = Vm(_);
    d = vm(v, m);
  } else d = mm(h, { ...i, renderer: o, async: false });
  e.supportThemeIcons && (d = xm(d).map((_) => typeof _ == "string" ? _ : _.outerHTML).join(""));
  const u = new DOMParser(), f = { isTrusted: e.isTrusted, baseUri: e.baseUri, ...t.sanitizerOptions, remoteImageIsAllowed: t.remoteImageIsAllowed }, p = u.parseFromString(kd(f, d), "text/html");
  if (Rm(e, t, p.body), r.innerHTML = kd(f, p.body.innerHTML), Im(r, t.generatedElementClassName), a.length > 0) Promise.all(a).then((m) => {
    if (n) return;
    const _ = new Map(m), v = r.querySelectorAll("div[data-code]");
    for (const y of v) {
      const C = _.get(y.dataset.code ?? "");
      C && zh(y, C);
    }
    t.asyncRenderCallback?.();
  });
  else if (c.length > 0) {
    const m = new Map(c), _ = r.querySelectorAll("div[data-code]");
    for (const v of _) {
      const y = m.get(v.dataset.code ?? "");
      y && zh(v, y);
    }
  }
  if (t.asyncRenderCallback) for (const m of r.getElementsByTagName("img")) {
    const _ = s.add(O(m, "load", () => {
      _.dispose(), t.asyncRenderCallback();
    }));
  }
  if (t.actionHandler) {
    const m = t.actionHandler.disposables.add(new ce(r, "click")), _ = t.actionHandler.disposables.add(new ce(r, "auxclick"));
    t.actionHandler.disposables.add(A.any(m.event, _.event)((v) => {
      const y = new ri(oe(r), v);
      !y.leftButton && !y.middleButton || Cd(e, t, y);
    })), t.actionHandler.disposables.add(O(r, "keydown", (v) => {
      const y = new Oe(v);
      !y.equals(10) && !y.equals(3) || Cd(e, t, y);
    }));
  }
  return { element: r, dispose: () => {
    n = true, s.dispose();
  } };
}
function Im(e, t) {
  if (t) for (const i of e.querySelectorAll("*")) {
    const s = t(i);
    if (s) for (const n of s.split(/\s+/)) n && i.classList.add(n);
  }
}
function da(e) {
  return e.scheme !== J.file || e.authority || jf(e.fsPath) ? false : !e.path.startsWith("//");
}
function Lm(e) {
  if (e.scheme !== J.vscodeFileResource || e.authority !== Ac || e.path.startsWith("//")) return false;
  try {
    return da(oo.uriToFileUri(e));
  } catch {
    return false;
  }
}
function rr(e, t, i) {
  let s;
  try {
    const n = e.baseUri ? me.from(e.baseUri) : void 0;
    if (!/^\w[\w\d+.-]*:/.test(t) && n?.scheme === J.file && !da(n)) return false;
    const o = n ? $s(n, t) : t;
    s = me.parse(o);
  } catch {
    return false;
  }
  return da(s) || Lm(s) || s.scheme === J.data || i(s);
}
function Sd(e) {
  const t = e.parentNode;
  if (!t) {
    e.removeAttribute("src"), e.removeAttribute("poster");
    return;
  }
  const i = e.ownerDocument.createElement("div");
  i.appendChild(e.ownerDocument.createTextNode(e.outerHTML ?? "")), t.replaceChild(i, e);
}
function Rm(e, t, i) {
  for (const s of i.querySelectorAll("img, audio, video, source")) {
    const n = s.getAttribute("src");
    if (n) {
      let o = n;
      try {
        e.baseUri && (o = $s(me.from(e.baseUri), o));
      } catch {
      }
      s.setAttribute("src", Dd(e, o, true)), t.remoteImageIsAllowed && !rr({ isTrusted: e.isTrusted, baseUri: e.baseUri }, o, t.remoteImageIsAllowed) && Sd(s);
    }
    const r = s.getAttribute("poster");
    if (r && t.remoteImageIsAllowed) {
      let o = r;
      try {
        e.baseUri && (o = $s(me.from(e.baseUri), o));
      } catch {
      }
      rr({ isTrusted: e.isTrusted, baseUri: e.baseUri }, o, t.remoteImageIsAllowed) || s.removeAttribute("poster");
    }
  }
  for (const s of i.querySelectorAll("a")) {
    const n = s.getAttribute("href");
    if (s.setAttribute("href", ""), !n || /^data:|javascript:/i.test(n) || /^command:/i.test(n) && !e.isTrusted || /^command:(\/\/\/)?_workbench\.downloadResource/i.test(n)) s.replaceWith(...s.childNodes);
    else {
      let r = Dd(e, n, false);
      e.baseUri && (r = $s(me.from(e.baseUri), n)), s.dataset.href = r;
    }
  }
}
function Mm(e, t) {
  const i = new es();
  i.image = ha.image, i.link = ha.link, i.paragraph = ha.paragraph;
  const s = [], n = [];
  return e.codeBlockRendererSync ? i.code = ({ text: r, lang: o, raw: a }) => {
    const c = nd.nextId(), h = e.codeBlockRendererSync(Ed(o), r, a);
    return n.push([c, h]), `<div class="code" data-code="${c}">${Wi(r)}</div>`;
  } : e.codeBlockRenderer && (i.code = ({ text: r, lang: o }) => {
    const a = nd.nextId(), c = e.codeBlockRenderer(Ed(o), r);
    return s.push(c.then((h) => [a, h])), `<div class="code" data-code="${a}">${Wi(r)}</div>`;
  }), t.supportHtml || (i.html = ({ text: r }) => e.sanitizerOptions?.replaceWithPlaintext ? Wi(r) : (t.isTrusted ? r.match(/^(<span[^>]+>)|(<\/\s*span>)$/) : void 0) ? r : ""), { renderer: i, codeBlocks: s, syncCodeBlocks: n };
}
function Pm(e) {
  let t = e.value;
  return t.length > 1e5 && (t = `${t.substr(0, 1e5)}…`), e.supportThemeIcons && (t = Mg(t)), t;
}
function Cd(e, t, i) {
  const s = i.target.closest("a[data-href]");
  if (Mt(s)) try {
    let n = s.dataset.href;
    n && (e.baseUri && (n = $s(me.from(e.baseUri), n)), t.actionHandler.callback(n, i));
  } catch (n) {
    vt(n);
  } finally {
    i.preventDefault();
  }
}
function Om(e, t) {
  let i;
  try {
    i = bm(decodeURIComponent(t));
  } catch {
  }
  return i ? (i = _m(i, (s) => {
    if (e.uris && e.uris[s]) return me.revive(e.uris[s]);
  }), encodeURIComponent(JSON.stringify(i))) : t;
}
function Dd(e, t, i) {
  const s = e.uris && e.uris[t];
  let n = me.revive(s);
  return i ? t.startsWith(J.data + ":") ? t : (n || (n = me.parse(t)), oo.uriToBrowserUri(n).toString(true)) : !n || me.parse(t).toString() === n.toString() ? t : (n.query && (n = n.with({ query: Om(e, n.query) })), n.toString());
}
function Ed(e) {
  if (!e) return "";
  const t = e.split(/[\s+|:|,|\{|\?]/, 1);
  return t.length ? t[0] : e;
}
function $s(e, t) {
  return /^\w[\w\d+.-]*:/.test(t) ? t : e.path.endsWith("/") ? Lc(e, t).toString() : Lc(Sp(e), t).toString();
}
var Fm = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
function kd(e, t) {
  const { config: i, allowedSchemes: s } = Hm(e), n = new q();
  n.add(xd("uponSanitizeAttribute", (o, a) => {
    if (a.attrName === "style" || a.attrName === "class") {
      if (o.tagName === "SPAN") {
        if (a.attrName === "style") {
          a.keepAttr = /^(color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));)?(background-color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));)?(border-radius:[0-9]+px;)?$/.test(a.attrValue);
          return;
        } else if (a.attrName === "class") {
          a.keepAttr = /^codicon codicon-[a-z\-]+( codicon-modifier-[a-z\-]+)?$/.test(a.attrValue);
          return;
        }
      }
      a.keepAttr = false;
      return;
    } else if (o.tagName === "INPUT" && o.attributes.getNamedItem("type")?.value === "checkbox") {
      if (a.attrName === "type" && a.attrValue === "checkbox" || a.attrName === "disabled" || a.attrName === "checked") {
        a.keepAttr = true;
        return;
      }
      a.keepAttr = false;
    }
  })), n.add(xd("uponSanitizeElement", (o, a) => {
    if (a.tagName === "input" && (o.attributes.getNamedItem("type")?.value === "checkbox" ? o.setAttribute("disabled", "") : e.replaceWithPlaintext || o.remove()), e.replaceWithPlaintext && !a.allowedTags[a.tagName] && a.tagName !== "body" && o.parentElement) {
      let c, h;
      if (a.tagName === "#comment") c = `<!--${o.textContent}-->`;
      else {
        const p = Fm.includes(a.tagName), m = o.attributes.length ? " " + Array.from(o.attributes).map((_) => `${_.name}="${_.value}"`).join(" ") : "";
        c = `<${a.tagName}${m}>`, p || (h = `</${a.tagName}>`);
      }
      const d = document.createDocumentFragment(), u = o.parentElement.ownerDocument.createTextNode(c);
      d.appendChild(u);
      const f = h ? o.parentElement.ownerDocument.createTextNode(h) : void 0;
      for (; o.firstChild; ) d.appendChild(o.firstChild);
      f && d.appendChild(f), o.nodeType === Node.COMMENT_NODE ? o.parentElement.insertBefore(d, o) : o.parentElement.replaceChild(d, o);
    }
  })), n.add(ag(s));
  const r = e.remoteImageIsAllowed;
  if (r) {
    const o = { isTrusted: e.isTrusted, baseUri: e.baseUri }, a = (c) => {
      const h = c.hasAttribute("src") ? c.getAttribute("src") : void 0;
      if (h && !rr(o, h, r)) {
        Sd(c);
        return;
      }
      const d = c.hasAttribute("poster") ? c.getAttribute("poster") : void 0;
      d && !rr(o, d, r) && c.removeAttribute("poster");
    };
    hi.addHook("afterSanitizeAttributes", a), n.add(re(() => {
      hi.removeHook("afterSanitizeAttributes");
    }));
  }
  try {
    return hi.sanitize(t, { ...i, RETURN_TRUSTED_TYPE: true });
  } finally {
    n.dispose();
  }
}
var Bm = ["align", "autoplay", "alt", "checked", "class", "colspan", "controls", "data-code", "data-href", "disabled", "draggable", "height", "href", "loop", "muted", "playsinline", "poster", "rowspan", "src", "style", "target", "title", "type", "width", "start"];
function Hm(e) {
  const t = [J.http, J.https, J.mailto, J.data, J.file, J.vscodeFileResource, J.vscodeRemote, J.vscodeRemoteResource];
  return e.isTrusted && t.push(J.command), { config: { ALLOWED_TAGS: e.allowedTags ?? [...lg], ALLOWED_ATTR: Bm, ALLOW_UNKNOWN_PROTOCOLS: true }, allowedSchemes: t };
}
function or(e) {
  let t = "";
  return e.forEach((i) => {
    t += i.raw;
  }), t;
}
function Td(e) {
  if (e.tokens) for (let t = e.tokens.length - 1; t >= 0; t--) {
    const i = e.tokens[t];
    if (i.type === "text") {
      const s = i.raw.split(`
`), n = s[s.length - 1];
      if (n.includes("`")) return qm(e);
      if (n.includes("**")) return Qm(e);
      if (n.match(/\*\w/)) return Km(e);
      if (n.match(/(^|\s)__\w/)) return Jm(e);
      if (n.match(/(^|\s)_\w/)) return jm(e);
      if (Um(n) || $m(n) && e.tokens.slice(0, t).some((r) => r.type === "text" && r.raw.match(/\[[^\]]*$/))) {
        const r = e.tokens.slice(t + 1);
        return r[0]?.type === "link" && r[1]?.type === "text" && r[1].raw.match(/^ *"[^"]*$/) || n.match(/^[^"]* +"[^"]*$/) ? Xm(e) : Ym(e);
      } else if (n.match(/(^|\s)\[\w*/)) return Zm(e);
    }
  }
}
function Um(e) {
  return !!e.match(/(^|\s)\[.*\]\(\w*/);
}
function $m(e) {
  return !!e.match(/^[^\[]*\]\([^\)]*$/);
}
function zm(e) {
  const t = e.items[e.items.length - 1], i = t.tokens ? t.tokens[t.tokens.length - 1] : void 0, s = (h) => {
    const u = h.items.at(-1)?.tokens.at(-1);
    return u?.type === "heading" || u?.type === "list" && s(u);
  };
  let n;
  if (i?.type === "text" && !("inRawBlock" in t)) n = Td(i);
  else if (s(e)) {
    const h = Hs(e.raw.trim() + " &nbsp;")[0];
    return h.type !== "list" ? void 0 : h;
  }
  if (!n || n.type !== "paragraph") return;
  const r = or(e.items.slice(0, -1)), o = t.raw.match(/^(\s*(-|\d+\.|\*) +)/)?.[0];
  if (!o) return;
  const a = o + or(t.tokens.slice(0, -1)) + n.raw, c = Hs(r + a)[0];
  if (c.type === "list") return c;
}
var Wm = 3;
function Vm(e) {
  for (let t = 0; t < Wm; t++) {
    const i = Gm(e);
    if (i) e = i;
    else break;
  }
  return e;
}
function Gm(e) {
  let t, i;
  for (t = 0; t < e.length; t++) {
    const s = e[t];
    if (s.type === "paragraph" && s.raw.match(/(\n|^)\|/)) {
      i = e2(e.slice(t));
      break;
    }
    if (t === e.length - 1 && s.type === "list") {
      const n = zm(s);
      if (n) {
        i = [n];
        break;
      }
    }
    if (t === e.length - 1 && s.type === "paragraph") {
      const n = Td(s);
      if (n) {
        i = [n];
        break;
      }
    }
  }
  if (i) {
    const s = [...e.slice(0, t), ...i];
    return s.links = e.links, s;
  }
  return null;
}
function qm(e) {
  return Xt(e, "`");
}
function Km(e) {
  return Xt(e, "*");
}
function jm(e) {
  return Xt(e, "_");
}
function Ym(e) {
  return Xt(e, ")");
}
function Xm(e) {
  return Xt(e, '")');
}
function Zm(e) {
  return Xt(e, "](https://microsoft.com)");
}
function Qm(e) {
  return Xt(e, "**");
}
function Jm(e) {
  return Xt(e, "__");
}
function Xt(e, t) {
  const i = or(Array.isArray(e) ? e : [e]);
  return Hs(i + t)[0];
}
function e2(e) {
  const t = or(e), i = t.split(`
`);
  let s, n = false;
  for (let r = 0; r < i.length; r++) {
    const o = i[r].trim();
    if (typeof s > "u" && o.match(/^\s*\|/)) {
      const a = o.match(/(\|[^\|]+)(?=\||$)/g);
      a && (s = a.length);
    } else if (typeof s == "number") if (o.match(/^\s*\|/)) {
      if (r !== i.length - 1) return;
      n = true;
    } else return;
  }
  if (typeof s == "number" && s > 0) {
    const r = n ? i.slice(0, -1).join(`
`) : t, o = !!r.match(/\|\s*$/), a = r + (o ? "" : "|") + `
|${" --- |".repeat(s)}`;
    return Hs(a);
  }
}
function xd(e, t) {
  return hi.addHook(e, t), re(() => hi.removeHook(e));
}
var t2 = { showInstantHover: () => {
}, showDelayedHover: () => {
}, setupDelayedHover: () => ee.None, setupDelayedHoverAtMouse: () => ee.None, hideHover: () => {
}, showAndFocusLastHover: () => {
}, setupManagedHover: () => null, showManagedHover: () => {
} };
function ar() {
  return t2;
}
var Ad = 2e4, Nd, ua, Id, fa, Ld;
function zs(e) {
  Nd && (ua.textContent !== e ? (pi(Id), lr(ua, e)) : (pi(ua), lr(Id, e)));
}
function Rd(e) {
  Nd && (fa.textContent !== e ? (pi(Ld), lr(fa, e)) : (pi(fa), lr(Ld, e)));
}
function lr(e, t) {
  pi(e), t.length > Ad && (t = t.substr(0, Ad)), e.textContent = t, e.style.visibility = "hidden", e.style.visibility = "visible";
}
var i2 = class {
  constructor(e) {
    this.spliceables = e;
  }
  splice(e, t, i) {
    this.spliceables.forEach((s) => s.splice(e, t, i));
  }
};
function Zt(e, t) {
  const i = Math.pow(10, t);
  return Math.round(e * i) / i;
}
var b = class {
  constructor(e, t, i, s = 1) {
    this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, e)) | 0, this.g = Math.min(255, Math.max(0, t)) | 0, this.b = Math.min(255, Math.max(0, i)) | 0, this.a = Zt(Math.max(Math.min(1, s), 0), 3);
  }
  static equals(e, t) {
    return e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a;
  }
}, ts = class on {
  constructor(t, i, s, n) {
    this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Zt(Math.max(Math.min(1, i), 0), 3), this.l = Zt(Math.max(Math.min(1, s), 0), 3), this.a = Zt(Math.max(Math.min(1, n), 0), 3);
  }
  static equals(t, i) {
    return t.h === i.h && t.s === i.s && t.l === i.l && t.a === i.a;
  }
  static fromRGBA(t) {
    const i = t.r / 255, s = t.g / 255, n = t.b / 255, r = t.a, o = Math.max(i, s, n), a = Math.min(i, s, n);
    let c = 0, h = 0;
    const d = (a + o) / 2, u = o - a;
    if (u > 0) {
      switch (h = Math.min(d <= 0.5 ? u / (2 * d) : u / (2 - 2 * d), 1), o) {
        case i:
          c = (s - n) / u + (s < n ? 6 : 0);
          break;
        case s:
          c = (n - i) / u + 2;
          break;
        case n:
          c = (i - s) / u + 4;
          break;
      }
      c *= 60, c = Math.round(c);
    }
    return new on(c, h, d, r);
  }
  static _hue2rgb(t, i, s) {
    return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? t + (i - t) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? t + (i - t) * (2 / 3 - s) * 6 : t;
  }
  static toRGBA(t) {
    const i = t.h / 360, { s, l: n, a: r } = t;
    let o, a, c;
    if (s === 0) o = a = c = n;
    else {
      const h = n < 0.5 ? n * (1 + s) : n + s - n * s, d = 2 * n - h;
      o = on._hue2rgb(d, h, i + 1 / 3), a = on._hue2rgb(d, h, i), c = on._hue2rgb(d, h, i - 1 / 3);
    }
    return new b(Math.round(o * 255), Math.round(a * 255), Math.round(c * 255), r);
  }
}, cr = class Fu {
  constructor(t, i, s, n) {
    this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Zt(Math.max(Math.min(1, i), 0), 3), this.v = Zt(Math.max(Math.min(1, s), 0), 3), this.a = Zt(Math.max(Math.min(1, n), 0), 3);
  }
  static equals(t, i) {
    return t.h === i.h && t.s === i.s && t.v === i.v && t.a === i.a;
  }
  static fromRGBA(t) {
    const i = t.r / 255, s = t.g / 255, n = t.b / 255, r = Math.max(i, s, n), o = Math.min(i, s, n), a = r - o, c = r === 0 ? 0 : a / r;
    let h;
    return a === 0 ? h = 0 : r === i ? h = ((s - n) / a % 6 + 6) % 6 : r === s ? h = (n - i) / a + 2 : h = (i - s) / a + 4, new Fu(Math.round(h * 60), c, r, t.a);
  }
  static toRGBA(t) {
    const { h: i, s, v: n, a: r } = t, o = n * s, a = o * (1 - Math.abs(i / 60 % 2 - 1)), c = n - o;
    let [h, d, u] = [0, 0, 0];
    return i < 60 ? (h = o, d = a) : i < 120 ? (h = a, d = o) : i < 180 ? (d = o, u = a) : i < 240 ? (d = a, u = o) : i < 300 ? (h = a, u = o) : i <= 360 && (h = o, u = a), h = Math.round((h + c) * 255), d = Math.round((d + c) * 255), u = Math.round((u + c) * 255), new b(h, d, u, r);
  }
}, Ne = class Ce {
  static fromHex(t) {
    return Ce.Format.CSS.parseHex(t) || Ce.red;
  }
  static equals(t, i) {
    return !t && !i ? true : !t || !i ? false : t.equals(i);
  }
  get hsla() {
    return this._hsla ? this._hsla : ts.fromRGBA(this.rgba);
  }
  get hsva() {
    return this._hsva ? this._hsva : cr.fromRGBA(this.rgba);
  }
  constructor(t) {
    if (t) if (t instanceof b) this.rgba = t;
    else if (t instanceof ts) this._hsla = t, this.rgba = ts.toRGBA(t);
    else if (t instanceof cr) this._hsva = t, this.rgba = cr.toRGBA(t);
    else throw new Error("Invalid color ctor argument");
    else throw new Error("Color needs a value");
  }
  equals(t) {
    return !!t && b.equals(this.rgba, t.rgba) && ts.equals(this.hsla, t.hsla) && cr.equals(this.hsva, t.hsva);
  }
  getRelativeLuminance() {
    const t = Ce._relativeLuminanceForComponent(this.rgba.r), i = Ce._relativeLuminanceForComponent(this.rgba.g), s = Ce._relativeLuminanceForComponent(this.rgba.b), n = 0.2126 * t + 0.7152 * i + 0.0722 * s;
    return Zt(n, 4);
  }
  reduceRelativeLuminace(t, i) {
    let { r: s, g: n, b: r } = t.rgba, o = this.getContrastRatio(t);
    for (; o < i && (s > 0 || n > 0 || r > 0); ) s -= Math.max(0, Math.ceil(s * 0.1)), n -= Math.max(0, Math.ceil(n * 0.1)), r -= Math.max(0, Math.ceil(r * 0.1)), o = this.getContrastRatio(new Ce(new b(s, n, r)));
    return new Ce(new b(s, n, r));
  }
  increaseRelativeLuminace(t, i) {
    let { r: s, g: n, b: r } = t.rgba, o = this.getContrastRatio(t);
    for (; o < i && (s < 255 || n < 255 || r < 255); ) s = Math.min(255, s + Math.ceil((255 - s) * 0.1)), n = Math.min(255, n + Math.ceil((255 - n) * 0.1)), r = Math.min(255, r + Math.ceil((255 - r) * 0.1)), o = this.getContrastRatio(new Ce(new b(s, n, r)));
    return new Ce(new b(s, n, r));
  }
  static _relativeLuminanceForComponent(t) {
    const i = t / 255;
    return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
  }
  getContrastRatio(t) {
    const i = this.getRelativeLuminance(), s = t.getRelativeLuminance();
    return i > s ? (i + 0.05) / (s + 0.05) : (s + 0.05) / (i + 0.05);
  }
  isDarker() {
    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 < 128;
  }
  isLighter() {
    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
  }
  isLighterThan(t) {
    const i = this.getRelativeLuminance(), s = t.getRelativeLuminance();
    return i > s;
  }
  isDarkerThan(t) {
    const i = this.getRelativeLuminance(), s = t.getRelativeLuminance();
    return i < s;
  }
  ensureConstrast(t, i) {
    const s = this.getRelativeLuminance(), n = t.getRelativeLuminance();
    if (this.getContrastRatio(t) < i) {
      if (n < s) {
        const c = this.reduceRelativeLuminace(t, i), h = this.getContrastRatio(c);
        if (h < i) {
          const d = this.increaseRelativeLuminace(t, i), u = this.getContrastRatio(d);
          return h > u ? c : d;
        }
        return c;
      }
      const o = this.increaseRelativeLuminace(t, i), a = this.getContrastRatio(o);
      if (a < i) {
        const c = this.reduceRelativeLuminace(t, i), h = this.getContrastRatio(c);
        return a > h ? o : c;
      }
      return o;
    }
    return t;
  }
  lighten(t) {
    return new Ce(new ts(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
  }
  darken(t) {
    return new Ce(new ts(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
  }
  transparent(t) {
    const { r: i, g: s, b: n, a: r } = this.rgba;
    return new Ce(new b(i, s, n, r * t));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new Ce(new b(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  blend(t) {
    const i = t.rgba, s = this.rgba.a, n = i.a, r = s + n * (1 - s);
    if (r < 1e-6) return Ce.transparent;
    const o = this.rgba.r * s / r + i.r * n * (1 - s) / r, a = this.rgba.g * s / r + i.g * n * (1 - s) / r, c = this.rgba.b * s / r + i.b * n * (1 - s) / r;
    return new Ce(new b(o, a, c, r));
  }
  makeOpaque(t) {
    if (this.isOpaque() || t.rgba.a !== 1) return this;
    const { r: i, g: s, b: n, a: r } = this.rgba;
    return new Ce(new b(t.rgba.r - r * (t.rgba.r - i), t.rgba.g - r * (t.rgba.g - s), t.rgba.b - r * (t.rgba.b - n), 1));
  }
  flatten(...t) {
    const i = t.reduceRight((s, n) => Ce._flatten(n, s));
    return Ce._flatten(this, i);
  }
  static _flatten(t, i) {
    const s = 1 - t.rgba.a;
    return new Ce(new b(s * i.rgba.r + t.rgba.a * t.rgba.r, s * i.rgba.g + t.rgba.a * t.rgba.g, s * i.rgba.b + t.rgba.a * t.rgba.b));
  }
  toString() {
    return this._toString || (this._toString = Ce.Format.CSS.format(this)), this._toString;
  }
  toNumber32Bit() {
    return this._toNumber32Bit || (this._toNumber32Bit = (this.rgba.r << 24 | this.rgba.g << 16 | this.rgba.b << 8 | this.rgba.a * 255 << 0) >>> 0), this._toNumber32Bit;
  }
  static getLighterColor(t, i, s) {
    if (t.isLighterThan(i)) return t;
    s = s || 0.5;
    const n = t.getRelativeLuminance(), r = i.getRelativeLuminance();
    return s = s * (r - n) / r, t.lighten(s);
  }
  static getDarkerColor(t, i, s) {
    if (t.isDarkerThan(i)) return t;
    s = s || 0.5;
    const n = t.getRelativeLuminance(), r = i.getRelativeLuminance();
    return s = s * (n - r) / n, t.darken(s);
  }
};
Ne.white = new Ne(new b(255, 255, 255, 1)), Ne.black = new Ne(new b(0, 0, 0, 1)), Ne.red = new Ne(new b(255, 0, 0, 1)), Ne.blue = new Ne(new b(0, 0, 255, 1)), Ne.green = new Ne(new b(0, 255, 0, 1)), Ne.cyan = new Ne(new b(0, 255, 255, 1)), Ne.lightgrey = new Ne(new b(211, 211, 211, 1)), Ne.transparent = new Ne(new b(0, 0, 0, 0));
var Ws = Ne;
((e) => {
  let t;
  ((i) => {
    let s;
    ((n) => {
      function r(y) {
        return y.rgba.a === 1 ? `rgb(${y.rgba.r}, ${y.rgba.g}, ${y.rgba.b})` : e.Format.CSS.formatRGBA(y);
      }
      n.formatRGB = r;
      function o(y) {
        return `rgba(${y.rgba.r}, ${y.rgba.g}, ${y.rgba.b}, ${+y.rgba.a.toFixed(2)})`;
      }
      n.formatRGBA = o;
      function a(y) {
        return y.hsla.a === 1 ? `hsl(${y.hsla.h}, ${(y.hsla.s * 100).toFixed(2)}%, ${(y.hsla.l * 100).toFixed(2)}%)` : e.Format.CSS.formatHSLA(y);
      }
      n.formatHSL = a;
      function c(y) {
        return `hsla(${y.hsla.h}, ${(y.hsla.s * 100).toFixed(2)}%, ${(y.hsla.l * 100).toFixed(2)}%, ${y.hsla.a.toFixed(2)})`;
      }
      n.formatHSLA = c;
      function h(y) {
        const C = y.toString(16);
        return C.length !== 2 ? "0" + C : C;
      }
      function d(y) {
        return `#${h(y.rgba.r)}${h(y.rgba.g)}${h(y.rgba.b)}`;
      }
      n.formatHex = d;
      function u(y, C = false) {
        return C && y.rgba.a === 1 ? e.Format.CSS.formatHex(y) : `#${h(y.rgba.r)}${h(y.rgba.g)}${h(y.rgba.b)}${h(Math.round(y.rgba.a * 255))}`;
      }
      n.formatHexA = u;
      function f(y) {
        return y.isOpaque() ? e.Format.CSS.formatHex(y) : e.Format.CSS.formatRGBA(y);
      }
      n.format = f;
      function p(y) {
        if (y === "transparent") return e.transparent;
        if (y.startsWith("#")) return _(y);
        if (y.startsWith("rgba(")) {
          const C = y.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
          if (!C) throw new Error("Invalid color format " + y);
          const D = parseInt(C.groups?.r ?? "0"), E = parseInt(C.groups?.g ?? "0"), w = parseInt(C.groups?.b ?? "0"), S = parseFloat(C.groups?.a ?? "0");
          return new e(new b(D, E, w, S));
        }
        if (y.startsWith("rgb(")) {
          const C = y.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
          if (!C) throw new Error("Invalid color format " + y);
          const D = parseInt(C.groups?.r ?? "0"), E = parseInt(C.groups?.g ?? "0"), w = parseInt(C.groups?.b ?? "0");
          return new e(new b(D, E, w));
        }
        return m(y);
      }
      n.parse = p;
      function m(y) {
        switch (y) {
          case "aliceblue":
            return new e(new b(240, 248, 255, 1));
          case "antiquewhite":
            return new e(new b(250, 235, 215, 1));
          case "aqua":
            return new e(new b(0, 255, 255, 1));
          case "aquamarine":
            return new e(new b(127, 255, 212, 1));
          case "azure":
            return new e(new b(240, 255, 255, 1));
          case "beige":
            return new e(new b(245, 245, 220, 1));
          case "bisque":
            return new e(new b(255, 228, 196, 1));
          case "black":
            return new e(new b(0, 0, 0, 1));
          case "blanchedalmond":
            return new e(new b(255, 235, 205, 1));
          case "blue":
            return new e(new b(0, 0, 255, 1));
          case "blueviolet":
            return new e(new b(138, 43, 226, 1));
          case "brown":
            return new e(new b(165, 42, 42, 1));
          case "burlywood":
            return new e(new b(222, 184, 135, 1));
          case "cadetblue":
            return new e(new b(95, 158, 160, 1));
          case "chartreuse":
            return new e(new b(127, 255, 0, 1));
          case "chocolate":
            return new e(new b(210, 105, 30, 1));
          case "coral":
            return new e(new b(255, 127, 80, 1));
          case "cornflowerblue":
            return new e(new b(100, 149, 237, 1));
          case "cornsilk":
            return new e(new b(255, 248, 220, 1));
          case "crimson":
            return new e(new b(220, 20, 60, 1));
          case "cyan":
            return new e(new b(0, 255, 255, 1));
          case "darkblue":
            return new e(new b(0, 0, 139, 1));
          case "darkcyan":
            return new e(new b(0, 139, 139, 1));
          case "darkgoldenrod":
            return new e(new b(184, 134, 11, 1));
          case "darkgray":
            return new e(new b(169, 169, 169, 1));
          case "darkgreen":
            return new e(new b(0, 100, 0, 1));
          case "darkgrey":
            return new e(new b(169, 169, 169, 1));
          case "darkkhaki":
            return new e(new b(189, 183, 107, 1));
          case "darkmagenta":
            return new e(new b(139, 0, 139, 1));
          case "darkolivegreen":
            return new e(new b(85, 107, 47, 1));
          case "darkorange":
            return new e(new b(255, 140, 0, 1));
          case "darkorchid":
            return new e(new b(153, 50, 204, 1));
          case "darkred":
            return new e(new b(139, 0, 0, 1));
          case "darksalmon":
            return new e(new b(233, 150, 122, 1));
          case "darkseagreen":
            return new e(new b(143, 188, 143, 1));
          case "darkslateblue":
            return new e(new b(72, 61, 139, 1));
          case "darkslategray":
            return new e(new b(47, 79, 79, 1));
          case "darkslategrey":
            return new e(new b(47, 79, 79, 1));
          case "darkturquoise":
            return new e(new b(0, 206, 209, 1));
          case "darkviolet":
            return new e(new b(148, 0, 211, 1));
          case "deeppink":
            return new e(new b(255, 20, 147, 1));
          case "deepskyblue":
            return new e(new b(0, 191, 255, 1));
          case "dimgray":
            return new e(new b(105, 105, 105, 1));
          case "dimgrey":
            return new e(new b(105, 105, 105, 1));
          case "dodgerblue":
            return new e(new b(30, 144, 255, 1));
          case "firebrick":
            return new e(new b(178, 34, 34, 1));
          case "floralwhite":
            return new e(new b(255, 250, 240, 1));
          case "forestgreen":
            return new e(new b(34, 139, 34, 1));
          case "fuchsia":
            return new e(new b(255, 0, 255, 1));
          case "gainsboro":
            return new e(new b(220, 220, 220, 1));
          case "ghostwhite":
            return new e(new b(248, 248, 255, 1));
          case "gold":
            return new e(new b(255, 215, 0, 1));
          case "goldenrod":
            return new e(new b(218, 165, 32, 1));
          case "gray":
            return new e(new b(128, 128, 128, 1));
          case "green":
            return new e(new b(0, 128, 0, 1));
          case "greenyellow":
            return new e(new b(173, 255, 47, 1));
          case "grey":
            return new e(new b(128, 128, 128, 1));
          case "honeydew":
            return new e(new b(240, 255, 240, 1));
          case "hotpink":
            return new e(new b(255, 105, 180, 1));
          case "indianred":
            return new e(new b(205, 92, 92, 1));
          case "indigo":
            return new e(new b(75, 0, 130, 1));
          case "ivory":
            return new e(new b(255, 255, 240, 1));
          case "khaki":
            return new e(new b(240, 230, 140, 1));
          case "lavender":
            return new e(new b(230, 230, 250, 1));
          case "lavenderblush":
            return new e(new b(255, 240, 245, 1));
          case "lawngreen":
            return new e(new b(124, 252, 0, 1));
          case "lemonchiffon":
            return new e(new b(255, 250, 205, 1));
          case "lightblue":
            return new e(new b(173, 216, 230, 1));
          case "lightcoral":
            return new e(new b(240, 128, 128, 1));
          case "lightcyan":
            return new e(new b(224, 255, 255, 1));
          case "lightgoldenrodyellow":
            return new e(new b(250, 250, 210, 1));
          case "lightgray":
            return new e(new b(211, 211, 211, 1));
          case "lightgreen":
            return new e(new b(144, 238, 144, 1));
          case "lightgrey":
            return new e(new b(211, 211, 211, 1));
          case "lightpink":
            return new e(new b(255, 182, 193, 1));
          case "lightsalmon":
            return new e(new b(255, 160, 122, 1));
          case "lightseagreen":
            return new e(new b(32, 178, 170, 1));
          case "lightskyblue":
            return new e(new b(135, 206, 250, 1));
          case "lightslategray":
            return new e(new b(119, 136, 153, 1));
          case "lightslategrey":
            return new e(new b(119, 136, 153, 1));
          case "lightsteelblue":
            return new e(new b(176, 196, 222, 1));
          case "lightyellow":
            return new e(new b(255, 255, 224, 1));
          case "lime":
            return new e(new b(0, 255, 0, 1));
          case "limegreen":
            return new e(new b(50, 205, 50, 1));
          case "linen":
            return new e(new b(250, 240, 230, 1));
          case "magenta":
            return new e(new b(255, 0, 255, 1));
          case "maroon":
            return new e(new b(128, 0, 0, 1));
          case "mediumaquamarine":
            return new e(new b(102, 205, 170, 1));
          case "mediumblue":
            return new e(new b(0, 0, 205, 1));
          case "mediumorchid":
            return new e(new b(186, 85, 211, 1));
          case "mediumpurple":
            return new e(new b(147, 112, 219, 1));
          case "mediumseagreen":
            return new e(new b(60, 179, 113, 1));
          case "mediumslateblue":
            return new e(new b(123, 104, 238, 1));
          case "mediumspringgreen":
            return new e(new b(0, 250, 154, 1));
          case "mediumturquoise":
            return new e(new b(72, 209, 204, 1));
          case "mediumvioletred":
            return new e(new b(199, 21, 133, 1));
          case "midnightblue":
            return new e(new b(25, 25, 112, 1));
          case "mintcream":
            return new e(new b(245, 255, 250, 1));
          case "mistyrose":
            return new e(new b(255, 228, 225, 1));
          case "moccasin":
            return new e(new b(255, 228, 181, 1));
          case "navajowhite":
            return new e(new b(255, 222, 173, 1));
          case "navy":
            return new e(new b(0, 0, 128, 1));
          case "oldlace":
            return new e(new b(253, 245, 230, 1));
          case "olive":
            return new e(new b(128, 128, 0, 1));
          case "olivedrab":
            return new e(new b(107, 142, 35, 1));
          case "orange":
            return new e(new b(255, 165, 0, 1));
          case "orangered":
            return new e(new b(255, 69, 0, 1));
          case "orchid":
            return new e(new b(218, 112, 214, 1));
          case "palegoldenrod":
            return new e(new b(238, 232, 170, 1));
          case "palegreen":
            return new e(new b(152, 251, 152, 1));
          case "paleturquoise":
            return new e(new b(175, 238, 238, 1));
          case "palevioletred":
            return new e(new b(219, 112, 147, 1));
          case "papayawhip":
            return new e(new b(255, 239, 213, 1));
          case "peachpuff":
            return new e(new b(255, 218, 185, 1));
          case "peru":
            return new e(new b(205, 133, 63, 1));
          case "pink":
            return new e(new b(255, 192, 203, 1));
          case "plum":
            return new e(new b(221, 160, 221, 1));
          case "powderblue":
            return new e(new b(176, 224, 230, 1));
          case "purple":
            return new e(new b(128, 0, 128, 1));
          case "rebeccapurple":
            return new e(new b(102, 51, 153, 1));
          case "red":
            return new e(new b(255, 0, 0, 1));
          case "rosybrown":
            return new e(new b(188, 143, 143, 1));
          case "royalblue":
            return new e(new b(65, 105, 225, 1));
          case "saddlebrown":
            return new e(new b(139, 69, 19, 1));
          case "salmon":
            return new e(new b(250, 128, 114, 1));
          case "sandybrown":
            return new e(new b(244, 164, 96, 1));
          case "seagreen":
            return new e(new b(46, 139, 87, 1));
          case "seashell":
            return new e(new b(255, 245, 238, 1));
          case "sienna":
            return new e(new b(160, 82, 45, 1));
          case "silver":
            return new e(new b(192, 192, 192, 1));
          case "skyblue":
            return new e(new b(135, 206, 235, 1));
          case "slateblue":
            return new e(new b(106, 90, 205, 1));
          case "slategray":
            return new e(new b(112, 128, 144, 1));
          case "slategrey":
            return new e(new b(112, 128, 144, 1));
          case "snow":
            return new e(new b(255, 250, 250, 1));
          case "springgreen":
            return new e(new b(0, 255, 127, 1));
          case "steelblue":
            return new e(new b(70, 130, 180, 1));
          case "tan":
            return new e(new b(210, 180, 140, 1));
          case "teal":
            return new e(new b(0, 128, 128, 1));
          case "thistle":
            return new e(new b(216, 191, 216, 1));
          case "tomato":
            return new e(new b(255, 99, 71, 1));
          case "turquoise":
            return new e(new b(64, 224, 208, 1));
          case "violet":
            return new e(new b(238, 130, 238, 1));
          case "wheat":
            return new e(new b(245, 222, 179, 1));
          case "white":
            return new e(new b(255, 255, 255, 1));
          case "whitesmoke":
            return new e(new b(245, 245, 245, 1));
          case "yellow":
            return new e(new b(255, 255, 0, 1));
          case "yellowgreen":
            return new e(new b(154, 205, 50, 1));
          default:
            return null;
        }
      }
      function _(y) {
        const C = y.length;
        if (C === 0 || y.charCodeAt(0) !== 35) return null;
        if (C === 7) {
          const D = 16 * v(y.charCodeAt(1)) + v(y.charCodeAt(2)), E = 16 * v(y.charCodeAt(3)) + v(y.charCodeAt(4)), w = 16 * v(y.charCodeAt(5)) + v(y.charCodeAt(6));
          return new e(new b(D, E, w, 1));
        }
        if (C === 9) {
          const D = 16 * v(y.charCodeAt(1)) + v(y.charCodeAt(2)), E = 16 * v(y.charCodeAt(3)) + v(y.charCodeAt(4)), w = 16 * v(y.charCodeAt(5)) + v(y.charCodeAt(6)), S = 16 * v(y.charCodeAt(7)) + v(y.charCodeAt(8));
          return new e(new b(D, E, w, S / 255));
        }
        if (C === 4) {
          const D = v(y.charCodeAt(1)), E = v(y.charCodeAt(2)), w = v(y.charCodeAt(3));
          return new e(new b(16 * D + D, 16 * E + E, 16 * w + w));
        }
        if (C === 5) {
          const D = v(y.charCodeAt(1)), E = v(y.charCodeAt(2)), w = v(y.charCodeAt(3)), S = v(y.charCodeAt(4));
          return new e(new b(16 * D + D, 16 * E + E, 16 * w + w, (16 * S + S) / 255));
        }
        return null;
      }
      n.parseHex = _;
      function v(y) {
        switch (y) {
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
    })(s = i.CSS || (i.CSS = {}));
  })(t = e.Format || (e.Format = {}));
})(Ws || (Ws = {}));
var wi = class extends Error {
  constructor(e, t) {
    super(`ListError [${e}] ${t}`);
  }
}, s2 = class {
  constructor(e) {
    this.domNode = e, this._maxWidth = "", this._width = "", this._height = "", this._top = "", this._left = "", this._bottom = "", this._right = "", this._paddingTop = "", this._paddingLeft = "", this._paddingBottom = "", this._paddingRight = "", this._fontFamily = "", this._fontWeight = "", this._fontSize = "", this._fontStyle = "", this._fontFeatureSettings = "", this._fontVariationSettings = "", this._textDecoration = "", this._lineHeight = "", this._letterSpacing = "", this._className = "", this._display = "", this._position = "", this._visibility = "", this._color = "", this._backgroundColor = "", this._layerHint = false, this._contain = "none", this._boxShadow = "";
  }
  focus() {
    this.domNode.focus();
  }
  setMaxWidth(e) {
    const t = Ze(e);
    this._maxWidth !== t && (this._maxWidth = t, this.domNode.style.maxWidth = this._maxWidth);
  }
  setWidth(e) {
    const t = Ze(e);
    this._width !== t && (this._width = t, this.domNode.style.width = this._width);
  }
  setHeight(e) {
    const t = Ze(e);
    this._height !== t && (this._height = t, this.domNode.style.height = this._height);
  }
  setTop(e) {
    const t = Ze(e);
    this._top !== t && (this._top = t, this.domNode.style.top = this._top);
  }
  setLeft(e) {
    const t = Ze(e);
    this._left !== t && (this._left = t, this.domNode.style.left = this._left);
  }
  setBottom(e) {
    const t = Ze(e);
    this._bottom !== t && (this._bottom = t, this.domNode.style.bottom = this._bottom);
  }
  setRight(e) {
    const t = Ze(e);
    this._right !== t && (this._right = t, this.domNode.style.right = this._right);
  }
  setPaddingTop(e) {
    const t = Ze(e);
    this._paddingTop !== t && (this._paddingTop = t, this.domNode.style.paddingTop = this._paddingTop);
  }
  setPaddingLeft(e) {
    const t = Ze(e);
    this._paddingLeft !== t && (this._paddingLeft = t, this.domNode.style.paddingLeft = this._paddingLeft);
  }
  setPaddingBottom(e) {
    const t = Ze(e);
    this._paddingBottom !== t && (this._paddingBottom = t, this.domNode.style.paddingBottom = this._paddingBottom);
  }
  setPaddingRight(e) {
    const t = Ze(e);
    this._paddingRight !== t && (this._paddingRight = t, this.domNode.style.paddingRight = this._paddingRight);
  }
  setFontFamily(e) {
    this._fontFamily !== e && (this._fontFamily = e, this.domNode.style.fontFamily = this._fontFamily);
  }
  setFontWeight(e) {
    this._fontWeight !== e && (this._fontWeight = e, this.domNode.style.fontWeight = this._fontWeight);
  }
  setFontSize(e) {
    const t = Ze(e);
    this._fontSize !== t && (this._fontSize = t, this.domNode.style.fontSize = this._fontSize);
  }
  setFontStyle(e) {
    this._fontStyle !== e && (this._fontStyle = e, this.domNode.style.fontStyle = this._fontStyle);
  }
  setFontFeatureSettings(e) {
    this._fontFeatureSettings !== e && (this._fontFeatureSettings = e, this.domNode.style.fontFeatureSettings = this._fontFeatureSettings);
  }
  setFontVariationSettings(e) {
    this._fontVariationSettings !== e && (this._fontVariationSettings = e, this.domNode.style.fontVariationSettings = this._fontVariationSettings);
  }
  setTextDecoration(e) {
    this._textDecoration !== e && (this._textDecoration = e, this.domNode.style.textDecoration = this._textDecoration);
  }
  setLineHeight(e) {
    const t = Ze(e);
    this._lineHeight !== t && (this._lineHeight = t, this.domNode.style.lineHeight = this._lineHeight);
  }
  setLetterSpacing(e) {
    const t = Ze(e);
    this._letterSpacing !== t && (this._letterSpacing = t, this.domNode.style.letterSpacing = this._letterSpacing);
  }
  setClassName(e) {
    this._className !== e && (this._className = e, this.domNode.className = this._className);
  }
  toggleClassName(e, t) {
    this.domNode.classList.toggle(e, t), this._className = this.domNode.className;
  }
  setDisplay(e) {
    this._display !== e && (this._display = e, this.domNode.style.display = this._display);
  }
  setPosition(e) {
    this._position !== e && (this._position = e, this.domNode.style.position = this._position);
  }
  setVisibility(e) {
    this._visibility !== e && (this._visibility = e, this.domNode.style.visibility = this._visibility);
  }
  setColor(e) {
    this._color !== e && (this._color = e, this.domNode.style.color = this._color);
  }
  setBackgroundColor(e) {
    this._backgroundColor !== e && (this._backgroundColor = e, this.domNode.style.backgroundColor = this._backgroundColor);
  }
  setLayerHinting(e) {
    this._layerHint !== e && (this._layerHint = e, this.domNode.style.transform = this._layerHint ? "translate3d(0px, 0px, 0px)" : "");
  }
  setBoxShadow(e) {
    this._boxShadow !== e && (this._boxShadow = e, this.domNode.style.boxShadow = e);
  }
  setContain(e) {
    this._contain !== e && (this._contain = e, this.domNode.style.contain = this._contain);
  }
  setAttribute(e, t) {
    this.domNode.setAttribute(e, t);
  }
  removeAttribute(e) {
    this.domNode.removeAttribute(e);
  }
  appendChild(e) {
    this.domNode.appendChild(e.domNode);
  }
  removeChild(e) {
    this.domNode.removeChild(e.domNode);
  }
};
function Ze(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function Vs(e) {
  return new s2(e);
}
var Md = class {
  constructor() {
    this._hooks = new q(), this._pointerMoveCallback = null, this._onStopCallback = null;
  }
  dispose() {
    this.stopMonitoring(false), this._hooks.dispose();
  }
  stopMonitoring(e, t) {
    if (!this.isMonitoring()) return;
    this._hooks.clear(), this._pointerMoveCallback = null;
    const i = this._onStopCallback;
    this._onStopCallback = null, e && i && i(t);
  }
  isMonitoring() {
    return !!this._pointerMoveCallback;
  }
  startMonitoring(e, t, i, s, n) {
    this.isMonitoring() && this.stopMonitoring(false), this._pointerMoveCallback = s, this._onStopCallback = n;
    let r = e;
    try {
      e.setPointerCapture(t), this._hooks.add(re(() => {
        try {
          e.releasePointerCapture(t);
        } catch {
        }
      }));
    } catch {
      r = oe(e);
    }
    this._hooks.add(O(r, j.POINTER_MOVE, (o) => {
      if (o.buttons !== i) {
        this.stopMonitoring(true);
        return;
      }
      o.preventDefault(), this._pointerMoveCallback(o);
    })), this._hooks.add(O(r, j.POINTER_UP, (o) => this.stopMonitoring(true)));
  }
}, _i = class extends ee {
  onclick(e, t) {
    this._register(O(e, j.CLICK, (i) => t(new ri(oe(e), i))));
  }
  onmousedown(e, t) {
    this._register(O(e, j.MOUSE_DOWN, (i) => t(new ri(oe(e), i))));
  }
  onmouseover(e, t) {
    this._register(O(e, j.MOUSE_OVER, (i) => t(new ri(oe(e), i))));
  }
  onmouseleave(e, t) {
    this._register(O(e, j.MOUSE_LEAVE, (i) => t(new ri(oe(e), i))));
  }
  onkeydown(e, t) {
    this._register(O(e, j.KEY_DOWN, (i) => t(new Oe(i))));
  }
  onkeyup(e, t) {
    this._register(O(e, j.KEY_UP, (i) => t(new Oe(i))));
  }
  oninput(e, t) {
    this._register(O(e, j.INPUT, t));
  }
  onblur(e, t) {
    this._register(O(e, j.BLUR, t));
  }
  onfocus(e, t) {
    this._register(O(e, j.FOCUS, t));
  }
  onchange(e, t) {
    this._register(O(e, j.CHANGE, t));
  }
  ignoreGesture(e) {
    return qn.ignoreTarget(e);
  }
}, is = 11, n2 = class extends _i {
  constructor(e) {
    super(), this._onActivate = e.onActivate, this.bgDomNode = document.createElement("div"), this.bgDomNode.className = "arrow-background", this.bgDomNode.style.position = "absolute", this.bgDomNode.style.width = e.bgWidth + "px", this.bgDomNode.style.height = e.bgHeight + "px", typeof e.top < "u" && (this.bgDomNode.style.top = "0px"), typeof e.left < "u" && (this.bgDomNode.style.left = "0px"), typeof e.bottom < "u" && (this.bgDomNode.style.bottom = "0px"), typeof e.right < "u" && (this.bgDomNode.style.right = "0px"), this.domNode = document.createElement("div"), this.domNode.className = e.className, this.domNode.classList.add(...we.asClassNameArray(e.icon)), this.domNode.style.position = "absolute", this.domNode.style.width = is + "px", this.domNode.style.height = is + "px", typeof e.top < "u" && (this.domNode.style.top = e.top + "px"), typeof e.left < "u" && (this.domNode.style.left = e.left + "px"), typeof e.bottom < "u" && (this.domNode.style.bottom = e.bottom + "px"), typeof e.right < "u" && (this.domNode.style.right = e.right + "px"), this._pointerMoveMonitor = this._register(new Md()), this._register(Vn(this.bgDomNode, j.POINTER_DOWN, (t) => this._arrowPointerDown(t))), this._register(Vn(this.domNode, j.POINTER_DOWN, (t) => this._arrowPointerDown(t))), this._pointerdownRepeatTimer = this._register(new Z0()), this._pointerdownScheduleRepeatTimer = this._register(new ho());
  }
  _arrowPointerDown(e) {
    if (!e.target || !(e.target instanceof Element)) return;
    const t = () => {
      this._pointerdownRepeatTimer.cancelAndSet(() => this._onActivate(), 1e3 / 24, oe(e));
    };
    this._onActivate(), this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancelAndSet(t, 200), this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (i) => {
    }, () => {
      this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancel();
    }), e.preventDefault();
  }
}, r2 = class extends ee {
  constructor(e, t, i) {
    super(), this._visibility = e, this._visibleClassName = t, this._invisibleClassName = i, this._domNode = null, this._isVisible = false, this._isNeeded = false, this._rawShouldBeVisible = false, this._shouldBeVisible = false, this._revealTimer = this._register(new ho());
  }
  setVisibility(e) {
    this._visibility !== e && (this._visibility = e, this._updateShouldBeVisible());
  }
  setShouldBeVisible(e) {
    this._rawShouldBeVisible = e, this._updateShouldBeVisible();
  }
  _applyVisibilitySetting() {
    return this._visibility === 2 ? false : this._visibility === 3 ? true : this._rawShouldBeVisible;
  }
  _updateShouldBeVisible() {
    const e = this._applyVisibilitySetting();
    this._shouldBeVisible !== e && (this._shouldBeVisible = e, this.ensureVisibility());
  }
  setIsNeeded(e) {
    this._isNeeded !== e && (this._isNeeded = e, this.ensureVisibility());
  }
  setDomNode(e) {
    this._domNode = e, this._domNode.setClassName(this._invisibleClassName), this.setShouldBeVisible(false);
  }
  ensureVisibility() {
    if (!this._isNeeded) {
      this._hide(false);
      return;
    }
    this._shouldBeVisible ? this._reveal() : this._hide(true);
  }
  _reveal() {
    this._isVisible || (this._isVisible = true, this._revealTimer.setIfNotSet(() => {
      this._domNode?.setClassName(this._visibleClassName);
    }, 0));
  }
  _hide(e) {
    this._revealTimer.cancel(), this._isVisible && (this._isVisible = false, this._domNode?.setClassName(this._invisibleClassName + (e ? " fade" : "")));
  }
}, o2 = 140, Pd = class extends _i {
  constructor(e) {
    super(), this._lazyRender = e.lazyRender, this._host = e.host, this._scrollable = e.scrollable, this._scrollByPage = e.scrollByPage, this._scrollbarState = e.scrollbarState, this._visibilityController = this._register(new r2(e.visibility, "visible scrollbar " + e.extraScrollbarClassName, "invisible scrollbar " + e.extraScrollbarClassName)), this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._pointerMoveMonitor = this._register(new Md()), this._shouldRender = true, this.domNode = Vs(document.createElement("div")), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this._visibilityController.setDomNode(this.domNode), this.domNode.setPosition("absolute"), this._register(O(this.domNode.domNode, j.POINTER_DOWN, (t) => this._domNodePointerDown(t)));
  }
  _createArrow(e) {
    const t = this._register(new n2(e));
    this.domNode.domNode.appendChild(t.bgDomNode), this.domNode.domNode.appendChild(t.domNode);
  }
  _createSlider(e, t, i, s) {
    this.slider = Vs(document.createElement("div")), this.slider.setClassName("slider"), this.slider.setPosition("absolute"), this.slider.setTop(e), this.slider.setLeft(t), typeof i == "number" && this.slider.setWidth(i), typeof s == "number" && this.slider.setHeight(s), this.slider.setLayerHinting(true), this.slider.setContain("strict"), this.domNode.domNode.appendChild(this.slider.domNode), this._register(O(this.slider.domNode, j.POINTER_DOWN, (n) => {
      n.button === 0 && (n.preventDefault(), this._sliderPointerDown(n));
    })), this.onclick(this.slider.domNode, (n) => {
      n.leftButton && n.stopPropagation();
    });
  }
  _onElementSize(e) {
    return this._scrollbarState.setVisibleSize(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = true, this._lazyRender || this.render()), this._shouldRender;
  }
  _onElementScrollSize(e) {
    return this._scrollbarState.setScrollSize(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = true, this._lazyRender || this.render()), this._shouldRender;
  }
  _onElementScrollPosition(e) {
    return this._scrollbarState.setScrollPosition(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = true, this._lazyRender || this.render()), this._shouldRender;
  }
  beginReveal() {
    this._visibilityController.setShouldBeVisible(true);
  }
  beginHide() {
    this._visibilityController.setShouldBeVisible(false);
  }
  render() {
    this._shouldRender && (this._shouldRender = false, this._renderDomNode(this._scrollbarState.getRectangleLargeSize(), this._scrollbarState.getRectangleSmallSize()), this._updateSlider(this._scrollbarState.getSliderSize(), this._scrollbarState.getArrowSize() + this._scrollbarState.getSliderPosition()));
  }
  _domNodePointerDown(e) {
    e.target === this.domNode.domNode && this._onPointerDown(e);
  }
  delegatePointerDown(e) {
    const t = this.domNode.domNode.getClientRects()[0].top, i = t + this._scrollbarState.getSliderPosition(), s = t + this._scrollbarState.getSliderPosition() + this._scrollbarState.getSliderSize(), n = this._sliderPointerPosition(e);
    i <= n && n <= s ? e.button === 0 && (e.preventDefault(), this._sliderPointerDown(e)) : this._onPointerDown(e);
  }
  _onPointerDown(e) {
    let t, i;
    if (e.target === this.domNode.domNode && typeof e.offsetX == "number" && typeof e.offsetY == "number") t = e.offsetX, i = e.offsetY;
    else {
      const n = Oh(this.domNode.domNode);
      t = e.pageX - n.left, i = e.pageY - n.top;
    }
    const s = this._pointerDownRelativePosition(t, i);
    this._setDesiredScrollPositionNow(this._scrollByPage ? this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(s) : this._scrollbarState.getDesiredScrollPositionFromOffset(s)), e.button === 0 && (e.preventDefault(), this._sliderPointerDown(e));
  }
  _sliderPointerDown(e) {
    if (!e.target || !(e.target instanceof Element)) return;
    const t = this._sliderPointerPosition(e), i = this._sliderOrthogonalPointerPosition(e), s = this._scrollbarState.clone();
    this.slider.toggleClassName("active", true), this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (n) => {
      const r = this._sliderOrthogonalPointerPosition(n), o = Math.abs(r - i);
      if (xt && o > o2) {
        this._setDesiredScrollPositionNow(s.getScrollPosition());
        return;
      }
      const c = this._sliderPointerPosition(n) - t;
      this._setDesiredScrollPositionNow(s.getDesiredScrollPositionFromDelta(c));
    }, () => {
      this.slider.toggleClassName("active", false), this._host.onDragEnd();
    }), this._host.onDragStart();
  }
  _setDesiredScrollPositionNow(e) {
    const t = {};
    this.writeScrollPosition(t, e), this._scrollable.setScrollPositionNow(t), this._lazyRender && this.render();
  }
  updateScrollbarSize(e) {
    this._updateScrollbarSize(e), this._scrollbarState.setScrollbarSize(e), this._shouldRender = true, this._lazyRender || this.render();
  }
  isNeeded() {
    return this._scrollbarState.isNeeded();
  }
}, a2 = 20, Od = class Xa {
  constructor(t, i, s, n, r, o) {
    this._scrollbarSize = Math.round(i), this._oppositeScrollbarSize = Math.round(s), this._arrowSize = Math.round(t), this._visibleSize = n, this._scrollSize = r, this._scrollPosition = o, this._computedAvailableSize = 0, this._computedIsNeeded = false, this._computedSliderSize = 0, this._computedSliderRatio = 0, this._computedSliderPosition = 0, this._refreshComputedValues();
  }
  clone() {
    return new Xa(this._arrowSize, this._scrollbarSize, this._oppositeScrollbarSize, this._visibleSize, this._scrollSize, this._scrollPosition);
  }
  setVisibleSize(t) {
    const i = Math.round(t);
    return this._visibleSize !== i ? (this._visibleSize = i, this._refreshComputedValues(), true) : false;
  }
  setScrollSize(t) {
    const i = Math.round(t);
    return this._scrollSize !== i ? (this._scrollSize = i, this._refreshComputedValues(), true) : false;
  }
  setScrollPosition(t) {
    const i = Math.round(t);
    return this._scrollPosition !== i ? (this._scrollPosition = i, this._refreshComputedValues(), true) : false;
  }
  setScrollbarSize(t) {
    this._scrollbarSize = Math.round(t);
  }
  setOppositeScrollbarSize(t) {
    this._oppositeScrollbarSize = Math.round(t);
  }
  static _computeValues(t, i, s, n, r) {
    const o = Math.max(0, s - t), a = Math.max(0, o - 2 * i), c = n > 0 && n > s;
    if (!c) return { computedAvailableSize: Math.round(o), computedIsNeeded: c, computedSliderSize: Math.round(a), computedSliderRatio: 0, computedSliderPosition: 0 };
    const h = Math.round(Math.max(a2, Math.floor(s * a / n))), d = (a - h) / (n - s), u = r * d;
    return { computedAvailableSize: Math.round(o), computedIsNeeded: c, computedSliderSize: Math.round(h), computedSliderRatio: d, computedSliderPosition: Math.round(u) };
  }
  _refreshComputedValues() {
    const t = Xa._computeValues(this._oppositeScrollbarSize, this._arrowSize, this._visibleSize, this._scrollSize, this._scrollPosition);
    this._computedAvailableSize = t.computedAvailableSize, this._computedIsNeeded = t.computedIsNeeded, this._computedSliderSize = t.computedSliderSize, this._computedSliderRatio = t.computedSliderRatio, this._computedSliderPosition = t.computedSliderPosition;
  }
  getArrowSize() {
    return this._arrowSize;
  }
  getScrollPosition() {
    return this._scrollPosition;
  }
  getRectangleLargeSize() {
    return this._computedAvailableSize;
  }
  getRectangleSmallSize() {
    return this._scrollbarSize;
  }
  isNeeded() {
    return this._computedIsNeeded;
  }
  getSliderSize() {
    return this._computedSliderSize;
  }
  getSliderPosition() {
    return this._computedSliderPosition;
  }
  getDesiredScrollPositionFromOffset(t) {
    if (!this._computedIsNeeded) return 0;
    const i = t - this._arrowSize - this._computedSliderSize / 2;
    return Math.round(i / this._computedSliderRatio);
  }
  getDesiredScrollPositionFromOffsetPaged(t) {
    if (!this._computedIsNeeded) return 0;
    const i = t - this._arrowSize;
    let s = this._scrollPosition;
    return i < this._computedSliderPosition ? s -= this._visibleSize : s += this._visibleSize, s;
  }
  getDesiredScrollPositionFromDelta(t) {
    if (!this._computedIsNeeded) return 0;
    const i = this._computedSliderPosition + t;
    return Math.round(i / this._computedSliderRatio);
  }
}, l2 = class extends Pd {
  constructor(e, t, i) {
    const s = e.getScrollDimensions(), n = e.getCurrentScrollPosition();
    if (super({ lazyRender: t.lazyRender, host: i, scrollbarState: new Od(t.horizontalHasArrows ? t.arrowSize : 0, t.horizontal === 2 ? 0 : t.horizontalScrollbarSize, t.vertical === 2 ? 0 : t.verticalScrollbarSize, s.width, s.scrollWidth, n.scrollLeft), visibility: t.horizontal, extraScrollbarClassName: "horizontal", scrollable: e, scrollByPage: t.scrollByPage }), t.horizontalHasArrows) {
      const r = (t.arrowSize - is) / 2, o = (t.horizontalScrollbarSize - is) / 2;
      this._createArrow({ className: "scra", icon: be.scrollbarButtonLeft, top: o, left: r, bottom: void 0, right: void 0, bgWidth: t.arrowSize, bgHeight: t.horizontalScrollbarSize, onActivate: () => this._host.onMouseWheel(new zi(null, 1, 0)) }), this._createArrow({ className: "scra", icon: be.scrollbarButtonRight, top: o, left: void 0, bottom: void 0, right: r, bgWidth: t.arrowSize, bgHeight: t.horizontalScrollbarSize, onActivate: () => this._host.onMouseWheel(new zi(null, -1, 0)) });
    }
    this._createSlider(Math.floor((t.horizontalScrollbarSize - t.horizontalSliderSize) / 2), 0, void 0, t.horizontalSliderSize);
  }
  _updateSlider(e, t) {
    this.slider.setWidth(e), this.slider.setLeft(t);
  }
  _renderDomNode(e, t) {
    this.domNode.setWidth(e), this.domNode.setHeight(t), this.domNode.setLeft(0), this.domNode.setBottom(0);
  }
  onDidScroll(e) {
    return this._shouldRender = this._onElementScrollSize(e.scrollWidth) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(e.scrollLeft) || this._shouldRender, this._shouldRender = this._onElementSize(e.width) || this._shouldRender, this._shouldRender;
  }
  _pointerDownRelativePosition(e, t) {
    return e;
  }
  _sliderPointerPosition(e) {
    return e.pageX;
  }
  _sliderOrthogonalPointerPosition(e) {
    return e.pageY;
  }
  _updateScrollbarSize(e) {
    this.slider.setHeight(e);
  }
  writeScrollPosition(e, t) {
    e.scrollLeft = t;
  }
  updateOptions(e) {
    this.updateScrollbarSize(e.horizontal === 2 ? 0 : e.horizontalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(e.vertical === 2 ? 0 : e.verticalScrollbarSize), this._visibilityController.setVisibility(e.horizontal), this._scrollByPage = e.scrollByPage;
  }
}, c2 = class extends Pd {
  constructor(e, t, i) {
    const s = e.getScrollDimensions(), n = e.getCurrentScrollPosition();
    if (super({ lazyRender: t.lazyRender, host: i, scrollbarState: new Od(t.verticalHasArrows ? t.arrowSize : 0, t.vertical === 2 ? 0 : t.verticalScrollbarSize, 0, s.height, s.scrollHeight, n.scrollTop), visibility: t.vertical, extraScrollbarClassName: "vertical", scrollable: e, scrollByPage: t.scrollByPage }), t.verticalHasArrows) {
      const r = (t.arrowSize - is) / 2, o = (t.verticalScrollbarSize - is) / 2;
      this._createArrow({ className: "scra", icon: be.scrollbarButtonUp, top: r, left: o, bottom: void 0, right: void 0, bgWidth: t.verticalScrollbarSize, bgHeight: t.arrowSize, onActivate: () => this._host.onMouseWheel(new zi(null, 0, 1)) }), this._createArrow({ className: "scra", icon: be.scrollbarButtonDown, top: void 0, left: o, bottom: r, right: void 0, bgWidth: t.verticalScrollbarSize, bgHeight: t.arrowSize, onActivate: () => this._host.onMouseWheel(new zi(null, 0, -1)) });
    }
    this._createSlider(0, Math.floor((t.verticalScrollbarSize - t.verticalSliderSize) / 2), t.verticalSliderSize, void 0);
  }
  _updateSlider(e, t) {
    this.slider.setHeight(e), this.slider.setTop(t);
  }
  _renderDomNode(e, t) {
    this.domNode.setWidth(t), this.domNode.setHeight(e), this.domNode.setRight(0), this.domNode.setTop(0);
  }
  onDidScroll(e) {
    return this._shouldRender = this._onElementScrollSize(e.scrollHeight) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(e.scrollTop) || this._shouldRender, this._shouldRender = this._onElementSize(e.height) || this._shouldRender, this._shouldRender;
  }
  _pointerDownRelativePosition(e, t) {
    return t;
  }
  _sliderPointerPosition(e) {
    return e.pageY;
  }
  _sliderOrthogonalPointerPosition(e) {
    return e.pageX;
  }
  _updateScrollbarSize(e) {
    this.slider.setWidth(e);
  }
  writeScrollPosition(e, t) {
    e.scrollTop = t;
  }
  updateOptions(e) {
    this.updateScrollbarSize(e.vertical === 2 ? 0 : e.verticalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(0), this._visibilityController.setVisibility(e.vertical), this._scrollByPage = e.scrollByPage;
  }
}, h2 = class Za {
  constructor(t, i, s, n, r, o, a) {
    this._forceIntegerValues = t, this._scrollStateBrand = void 0, this._forceIntegerValues && (i = i | 0, s = s | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0), this.rawScrollLeft = n, this.rawScrollTop = a, i < 0 && (i = 0), n + i > s && (n = s - i), n < 0 && (n = 0), r < 0 && (r = 0), a + r > o && (a = o - r), a < 0 && (a = 0), this.width = i, this.scrollWidth = s, this.scrollLeft = n, this.height = r, this.scrollHeight = o, this.scrollTop = a;
  }
  equals(t) {
    return this.rawScrollLeft === t.rawScrollLeft && this.rawScrollTop === t.rawScrollTop && this.width === t.width && this.scrollWidth === t.scrollWidth && this.scrollLeft === t.scrollLeft && this.height === t.height && this.scrollHeight === t.scrollHeight && this.scrollTop === t.scrollTop;
  }
  withScrollDimensions(t, i) {
    return new Za(this._forceIntegerValues, typeof t.width < "u" ? t.width : this.width, typeof t.scrollWidth < "u" ? t.scrollWidth : this.scrollWidth, i ? this.rawScrollLeft : this.scrollLeft, typeof t.height < "u" ? t.height : this.height, typeof t.scrollHeight < "u" ? t.scrollHeight : this.scrollHeight, i ? this.rawScrollTop : this.scrollTop);
  }
  withScrollPosition(t) {
    return new Za(this._forceIntegerValues, this.width, this.scrollWidth, typeof t.scrollLeft < "u" ? t.scrollLeft : this.rawScrollLeft, this.height, this.scrollHeight, typeof t.scrollTop < "u" ? t.scrollTop : this.rawScrollTop);
  }
  createScrollEvent(t, i) {
    const s = this.width !== t.width, n = this.scrollWidth !== t.scrollWidth, r = this.scrollLeft !== t.scrollLeft, o = this.height !== t.height, a = this.scrollHeight !== t.scrollHeight, c = this.scrollTop !== t.scrollTop;
    return { inSmoothScrolling: i, oldWidth: t.width, oldScrollWidth: t.scrollWidth, oldScrollLeft: t.scrollLeft, width: this.width, scrollWidth: this.scrollWidth, scrollLeft: this.scrollLeft, oldHeight: t.height, oldScrollHeight: t.scrollHeight, oldScrollTop: t.scrollTop, height: this.height, scrollHeight: this.scrollHeight, scrollTop: this.scrollTop, widthChanged: s, scrollWidthChanged: n, scrollLeftChanged: r, heightChanged: o, scrollHeightChanged: a, scrollTopChanged: c };
  }
}, Fd = class extends ee {
  constructor(e) {
    super(), this._options = e, this._scrollableBrand = void 0, this._onScroll = this._register(new L()), this.onScroll = this._onScroll.event, this._smoothScrollDuration = this._options.smoothScrollDuration, this._scheduleAtNextAnimationFrame = this._options.scheduleAtNextAnimationFrame, this._state = new h2(this._options.forceIntegerValues, 0, 0, 0, 0, 0, 0), this._smoothScrolling = null;
  }
  dispose() {
    this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), super.dispose();
  }
  setSmoothScrollDuration(e) {
    this._smoothScrollDuration = e;
  }
  validateScrollPosition(e) {
    return this._state.withScrollPosition(e);
  }
  getScrollDimensions() {
    return this._state;
  }
  setScrollDimensions(e, t) {
    const i = this._state.withScrollDimensions(e, t);
    this._setState(i, !!this._smoothScrolling), this._smoothScrolling?.acceptScrollDimensions(this._state);
  }
  getFutureScrollPosition() {
    return this._smoothScrolling ? this._smoothScrolling.to : this._state;
  }
  getCurrentScrollPosition() {
    return this._state;
  }
  setScrollPositionNow(e) {
    const t = this._state.withScrollPosition(e);
    this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), this._setState(t, false);
  }
  setScrollPositionSmooth(e, t) {
    if (this._smoothScrollDuration === 0) return this.setScrollPositionNow(e);
    if (this._smoothScrolling) {
      e = { scrollLeft: typeof e.scrollLeft > "u" ? this._smoothScrolling.to.scrollLeft : e.scrollLeft, scrollTop: typeof e.scrollTop > "u" ? this._smoothScrolling.to.scrollTop : e.scrollTop };
      const i = this._state.withScrollPosition(e);
      if (this._smoothScrolling.to.scrollLeft === i.scrollLeft && this._smoothScrolling.to.scrollTop === i.scrollTop) return;
      let s;
      t ? s = new Hd(this._smoothScrolling.from, i, this._smoothScrolling.startTime, this._smoothScrolling.duration) : s = this._smoothScrolling.combine(this._state, i, this._smoothScrollDuration), this._smoothScrolling.dispose(), this._smoothScrolling = s;
    } else {
      const i = this._state.withScrollPosition(e);
      this._smoothScrolling = Hd.start(this._state, i, this._smoothScrollDuration);
    }
    this._smoothScrolling.animationFrameDisposable.value = this._scheduleAtNextAnimationFrame(() => {
      this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable.clear(), this._performSmoothScrolling());
    });
  }
  hasPendingScrollAnimation() {
    return !!this._smoothScrolling;
  }
  _performSmoothScrolling() {
    if (!this._smoothScrolling) return;
    const e = this._smoothScrolling.tick(), t = this._state.withScrollPosition(e);
    if (this._setState(t, true), !!this._smoothScrolling) {
      if (e.isDone) {
        this._smoothScrolling.dispose(), this._smoothScrolling = null;
        return;
      }
      this._smoothScrolling.animationFrameDisposable.value = this._scheduleAtNextAnimationFrame(() => {
        this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable.clear(), this._performSmoothScrolling());
      });
    }
  }
  _setState(e, t) {
    const i = this._state;
    i.equals(e) || (this._options.stickyScrollHorizontal && ((this._options.stickyScrollHorizontal === "right" || typeof this._options.stickyScrollHorizontal == "function" && this._options.stickyScrollHorizontal() === "right") && e.scrollLeft + e.width >= e.scrollWidth && (e = e.withScrollPosition({ scrollLeft: 1 / 0 })), (this._options.stickyScrollHorizontal === "left" || typeof this._options.stickyScrollHorizontal == "function" && this._options.stickyScrollHorizontal() === "left") && e.scrollLeft <= 0 && (e = e.withScrollPosition({ scrollLeft: -1 / 0 }))), this._options.stickyScrollVertical && ((this._options.stickyScrollVertical === "down" || typeof this._options.stickyScrollVertical == "function" && this._options.stickyScrollVertical() === "down") && e.scrollTop + e.height >= e.scrollHeight && (e = e.withScrollPosition({ scrollTop: 1 / 0 })), (this._options.stickyScrollVertical === "up" || typeof this._options.stickyScrollVertical == "function" && this._options.stickyScrollVertical() === "up") && e.scrollTop <= 0 && (e = e.withScrollPosition({ scrollTop: -1 / 0 }))), this._state = e, this._onScroll.fire(this._state.createScrollEvent(i, t)));
  }
  getScrollHeight() {
    return this._state.scrollHeight;
  }
}, Bd = class {
  constructor(e, t, i) {
    this.scrollLeft = e, this.scrollTop = t, this.isDone = i;
  }
};
function pa(e, t) {
  const i = t - e;
  return function(s) {
    return e + i * f2(s);
  };
}
function d2(e, t, i) {
  return function(s) {
    return s < i ? e(s / i) : t((s - i) / (1 - i));
  };
}
var Hd = class Qa extends ee {
  constructor(t, i, s, n) {
    super(), this.animationFrameDisposable = this._register(new De()), this.from = t, this.to = i, this.duration = n, this.startTime = s, this._initAnimations();
  }
  _initAnimations() {
    this.scrollLeft = this._initAnimation(this.from.scrollLeft, this.to.scrollLeft, this.to.width), this.scrollTop = this._initAnimation(this.from.scrollTop, this.to.scrollTop, this.to.height);
  }
  _initAnimation(t, i, s) {
    if (Math.abs(t - i) > 2.5 * s) {
      let r, o;
      return t < i ? (r = t + 0.75 * s, o = i - 0.75 * s) : (r = t - 0.75 * s, o = i + 0.75 * s), d2(pa(t, r), pa(o, i), 0.33);
    }
    return pa(t, i);
  }
  acceptScrollDimensions(t) {
    this.to = t.withScrollPosition(this.to), this._initAnimations();
  }
  tick() {
    return this._tick(Date.now());
  }
  _tick(t) {
    const i = (t - this.startTime) / this.duration;
    if (i < 1) {
      const s = this.scrollLeft(i), n = this.scrollTop(i);
      return new Bd(s, n, false);
    }
    return new Bd(this.to.scrollLeft, this.to.scrollTop, true);
  }
  combine(t, i, s) {
    return Qa.start(t, i, s);
  }
  static start(t, i, s) {
    s = s + 10;
    const n = Date.now() - 10;
    return new Qa(t, i, n, s);
  }
};
function u2(e) {
  return Math.pow(e, 3);
}
function f2(e) {
  return 1 - u2(1 - e);
}
var p2 = 500, Ud = 50, $d = true, g2 = class {
  constructor(e, t, i) {
    this.timestamp = e, this.deltaX = t, this.deltaY = i, this.score = 0;
  }
}, ga = class {
  constructor() {
    this._capacity = 5, this._memory = [], this._front = -1, this._rear = -1;
  }
  isPhysicalMouseWheel() {
    if (this._front === -1 && this._rear === -1) return false;
    let t = 1, i = 0, s = 1, n = this._rear;
    do {
      const r = n === this._front ? t : Math.pow(2, -s);
      if (t -= r, i += this._memory[n].score * r, n === this._front) break;
      n = (this._capacity + n - 1) % this._capacity, s++;
    } while (true);
    return i <= 0.5;
  }
  acceptStandardWheelEvent(t) {
    if (Gr) {
      const i = oe(t.browserEvent), s = V1(i);
      this.accept(Date.now(), t.deltaX * s, t.deltaY * s);
    } else this.accept(Date.now(), t.deltaX, t.deltaY);
  }
  accept(t, i, s) {
    let n = null;
    const r = new g2(t, i, s);
    this._front === -1 && this._rear === -1 ? (this._memory[0] = r, this._front = 0, this._rear = 0) : (n = this._memory[this._rear], this._rear = (this._rear + 1) % this._capacity, this._rear === this._front && (this._front = (this._front + 1) % this._capacity), this._memory[this._rear] = r), r.score = this._computeScore(r, n);
  }
  _computeScore(t, i) {
    if (Math.abs(t.deltaX) > 0 && Math.abs(t.deltaY) > 0) return 1;
    let s = 0.5;
    if ((!this._isAlmostInt(t.deltaX) || !this._isAlmostInt(t.deltaY)) && (s += 0.25), i) {
      const n = Math.abs(t.deltaX), r = Math.abs(t.deltaY), o = Math.abs(i.deltaX), a = Math.abs(i.deltaY), c = Math.max(Math.min(n, o), 1), h = Math.max(Math.min(r, a), 1), d = Math.max(n, o), u = Math.max(r, a);
      d % c === 0 && u % h === 0 && (s -= 0.5);
    }
    return Math.min(Math.max(s, 0), 1);
  }
  _isAlmostInt(t) {
    return Math.abs(Math.round(t) - t) < 0.01;
  }
};
ga.INSTANCE = new ga();
var m2 = ga, zd = class extends _i {
  constructor(e, t, i) {
    super(), this._mouseWheelListener = this._register(new De()), this._onScroll = this._register(new L()), this.onScroll = this._onScroll.event, this._onWillScroll = this._register(new L()), this.onWillScroll = this._onWillScroll.event, e.style.overflow = "hidden", this._options = y2(t), this._scrollable = i, this._register(this._scrollable.onScroll((r) => {
      this._onWillScroll.fire(r), this._onDidScroll(r), this._onScroll.fire(r);
    }));
    const s = { onMouseWheel: (r) => this._onMouseWheel(r), onDragStart: () => this._onDragStart(), onDragEnd: () => this._onDragEnd() };
    this._verticalScrollbar = this._register(new c2(this._scrollable, this._options, s)), this._horizontalScrollbar = this._register(new l2(this._scrollable, this._options, s)), this._domNode = document.createElement("div"), this._domNode.className = "monaco-scrollable-element " + this._options.className, this._domNode.setAttribute("role", "presentation"), this._domNode.style.position = "relative";
    const n = t.horizontal && t.vertical ? "both" : t.horizontal ? "horizontal" : "vertical";
    n === "both" ? this._domNode.style.overflow = "hidden" : n === "horizontal" ? this._domNode.style.overflowX = "hidden" : this._domNode.style.overflowY = "hidden", this._domNode.appendChild(e), this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode), this._domNode.appendChild(this._verticalScrollbar.domNode.domNode), this._options.useShadows ? (this._leftShadowDomNode = Vs(document.createElement("div")), this._leftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._leftShadowDomNode.domNode), this._topShadowDomNode = Vs(document.createElement("div")), this._topShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topShadowDomNode.domNode), this._topLeftShadowDomNode = Vs(document.createElement("div")), this._topLeftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topLeftShadowDomNode.domNode)) : (this._leftShadowDomNode = null, this._topShadowDomNode = null, this._topLeftShadowDomNode = null), this._listenOnDomNode = this._options.listenOnDomNode || this._domNode, this._setListeningToMouseWheel(this._options.handleMouseWheel), this.onmouseover(this._listenOnDomNode, (r) => this._onMouseOver(r)), this.onmouseleave(this._listenOnDomNode, (r) => this._onMouseLeave(r)), this._hideTimeout = this._register(new ho()), this._isDragging = false, this._mouseIsOver = false, this._shouldRender = true, this._revealOnScroll = true;
  }
  get options() {
    return this._options;
  }
  getDomNode() {
    return this._domNode;
  }
  getOverviewRulerLayoutInfo() {
    return { parent: this._domNode, insertBefore: this._verticalScrollbar.domNode.domNode };
  }
  delegateVerticalScrollbarPointerDown(e) {
    this._verticalScrollbar.delegatePointerDown(e);
  }
  getScrollDimensions() {
    return this._scrollable.getScrollDimensions();
  }
  setScrollDimensions(e) {
    this._scrollable.setScrollDimensions(e, false);
  }
  updateClassName(e) {
    this._options.className = e, Pe && (this._options.className += " mac"), this._domNode.className = "monaco-scrollable-element " + this._options.className;
  }
  updateOptions(e) {
    typeof e.handleMouseWheel < "u" && (this._options.handleMouseWheel = e.handleMouseWheel, this._setListeningToMouseWheel(this._options.handleMouseWheel)), typeof e.ignoreVerticalScrolling < "u" && (this._options.ignoreVerticalScrolling = e.ignoreVerticalScrolling), typeof e.mouseWheelScrollSensitivity < "u" && (this._options.mouseWheelScrollSensitivity = e.mouseWheelScrollSensitivity), typeof e.fastScrollSensitivity < "u" && (this._options.fastScrollSensitivity = e.fastScrollSensitivity), typeof e.scrollPredominantAxis < "u" && (this._options.scrollPredominantAxis = e.scrollPredominantAxis), typeof e.horizontal < "u" && (this._options.horizontal = e.horizontal), typeof e.vertical < "u" && (this._options.vertical = e.vertical), typeof e.horizontalScrollbarSize < "u" && (this._options.horizontalScrollbarSize = e.horizontalScrollbarSize), typeof e.verticalScrollbarSize < "u" && (this._options.verticalScrollbarSize = e.verticalScrollbarSize), typeof e.scrollByPage < "u" && (this._options.scrollByPage = e.scrollByPage), this._horizontalScrollbar.updateOptions(this._options), this._verticalScrollbar.updateOptions(this._options), this._options.lazyRender || this._render();
  }
  setRevealOnScroll(e) {
    this._revealOnScroll = e;
  }
  delegateScrollFromMouseWheelEvent(e) {
    this._onMouseWheel(new zi(e));
  }
  _setListeningToMouseWheel(e) {
    if (this._mouseWheelListener.value !== void 0 !== e) if (e) {
      const i = (s) => {
        this._onMouseWheel(new zi(s));
      };
      this._mouseWheelListener.value = O(this._listenOnDomNode, j.MOUSE_WHEEL, i, { passive: false });
    } else this._mouseWheelListener.clear();
  }
  _onMouseWheel(e) {
    if (e.browserEvent?.defaultPrevented) return;
    const t = m2.INSTANCE;
    $d && t.acceptStandardWheelEvent(e);
    let i = false;
    if (e.deltaY || e.deltaX) {
      let n = e.deltaY * this._options.mouseWheelScrollSensitivity, r = e.deltaX * this._options.mouseWheelScrollSensitivity;
      this._options.scrollPredominantAxis && (this._options.scrollYToX && r + n === 0 ? r = n = 0 : Math.abs(n) >= Math.abs(r) ? r = 0 : n = 0), this._options.ignoreVerticalScrolling === true && (n = 0), this._options.flipAxes && ([n, r] = [r, n]);
      const o = !Pe && e.browserEvent && e.browserEvent.shiftKey;
      (this._options.scrollYToX || o) && !r && (r = n, n = 0), e.browserEvent && e.browserEvent.altKey && (r = r * this._options.fastScrollSensitivity, n = n * this._options.fastScrollSensitivity);
      const a = this._scrollable.getFutureScrollPosition();
      let c = {};
      if (n) {
        const h = Ud * n, d = a.scrollTop - (h < 0 ? Math.floor(h) : Math.ceil(h));
        this._verticalScrollbar.writeScrollPosition(c, d);
      }
      if (r) {
        const h = Ud * r, d = a.scrollLeft - (h < 0 ? Math.floor(h) : Math.ceil(h));
        this._horizontalScrollbar.writeScrollPosition(c, d);
      }
      c = this._scrollable.validateScrollPosition(c), (a.scrollLeft !== c.scrollLeft || a.scrollTop !== c.scrollTop) && ($d && this._options.mouseWheelSmoothScroll && t.isPhysicalMouseWheel() ? this._scrollable.setScrollPositionSmooth(c) : this._scrollable.setScrollPositionNow(c), i = true);
    }
    let s = i;
    !s && this._options.alwaysConsumeMouseWheel && (s = true), !s && this._options.consumeMouseWheelIfScrollbarIsNeeded && (this._verticalScrollbar.isNeeded() || this._horizontalScrollbar.isNeeded()) && (s = true), s && (e.preventDefault(), e.stopPropagation());
  }
  _onDidScroll(e) {
    this._shouldRender = this._horizontalScrollbar.onDidScroll(e) || this._shouldRender, this._shouldRender = this._verticalScrollbar.onDidScroll(e) || this._shouldRender, this._options.useShadows && (this._shouldRender = true), this._revealOnScroll && this._reveal(), this._options.lazyRender || this._render();
  }
  renderNow() {
    if (!this._options.lazyRender) throw new Error("Please use `lazyRender` together with `renderNow`!");
    this._render();
  }
  _render() {
    if (this._shouldRender && (this._shouldRender = false, this._horizontalScrollbar.render(), this._verticalScrollbar.render(), this._options.useShadows)) {
      const e = this._scrollable.getCurrentScrollPosition(), t = e.scrollTop > 0, i = e.scrollLeft > 0, s = i ? " left" : "", n = t ? " top" : "", r = i || t ? " top-left-corner" : "";
      this._leftShadowDomNode.setClassName(`shadow${s}`), this._topShadowDomNode.setClassName(`shadow${n}`), this._topLeftShadowDomNode.setClassName(`shadow${r}${n}${s}`);
    }
  }
  _onDragStart() {
    this._isDragging = true, this._reveal();
  }
  _onDragEnd() {
    this._isDragging = false, this._hide();
  }
  _onMouseLeave(e) {
    this._mouseIsOver = false, this._hide();
  }
  _onMouseOver(e) {
    this._mouseIsOver = true, this._reveal();
  }
  _reveal() {
    this._verticalScrollbar.beginReveal(), this._horizontalScrollbar.beginReveal(), this._scheduleHide();
  }
  _hide() {
    !this._mouseIsOver && !this._isDragging && (this._verticalScrollbar.beginHide(), this._horizontalScrollbar.beginHide());
  }
  _scheduleHide() {
    !this._mouseIsOver && !this._isDragging && this._hideTimeout.cancelAndSet(() => this._hide(), p2);
  }
}, v2 = class extends zd {
  constructor(e, t) {
    t = t || {}, t.mouseWheelSmoothScroll = false;
    const i = new Fd({ forceIntegerValues: true, smoothScrollDuration: 0, scheduleAtNextAnimationFrame: (s) => Vt(oe(e), s) });
    super(e, t, i), this._register(i);
  }
  setScrollPosition(e) {
    this._scrollable.setScrollPositionNow(e);
  }
  getScrollPosition() {
    return this._scrollable.getCurrentScrollPosition();
  }
}, b2 = class extends zd {
  constructor(e, t, i) {
    super(e, t, i);
  }
  setScrollPosition(e) {
    e.reuseAnimation ? this._scrollable.setScrollPositionSmooth(e, e.reuseAnimation) : this._scrollable.setScrollPositionNow(e);
  }
  getScrollPosition() {
    return this._scrollable.getCurrentScrollPosition();
  }
};
function y2(e) {
  const t = { lazyRender: typeof e.lazyRender < "u" ? e.lazyRender : false, className: typeof e.className < "u" ? e.className : "", useShadows: typeof e.useShadows < "u" ? e.useShadows : true, handleMouseWheel: typeof e.handleMouseWheel < "u" ? e.handleMouseWheel : true, ignoreVerticalScrolling: typeof e.ignoreVerticalScrolling < "u" ? e.ignoreVerticalScrolling : false, flipAxes: typeof e.flipAxes < "u" ? e.flipAxes : false, consumeMouseWheelIfScrollbarIsNeeded: typeof e.consumeMouseWheelIfScrollbarIsNeeded < "u" ? e.consumeMouseWheelIfScrollbarIsNeeded : false, alwaysConsumeMouseWheel: typeof e.alwaysConsumeMouseWheel < "u" ? e.alwaysConsumeMouseWheel : false, scrollYToX: typeof e.scrollYToX < "u" ? e.scrollYToX : false, mouseWheelScrollSensitivity: typeof e.mouseWheelScrollSensitivity < "u" ? e.mouseWheelScrollSensitivity : 1, fastScrollSensitivity: typeof e.fastScrollSensitivity < "u" ? e.fastScrollSensitivity : 5, scrollPredominantAxis: typeof e.scrollPredominantAxis < "u" ? e.scrollPredominantAxis : true, mouseWheelSmoothScroll: typeof e.mouseWheelSmoothScroll < "u" ? e.mouseWheelSmoothScroll : true, arrowSize: typeof e.arrowSize < "u" ? e.arrowSize : 11, listenOnDomNode: typeof e.listenOnDomNode < "u" ? e.listenOnDomNode : null, horizontal: typeof e.horizontal < "u" ? e.horizontal : 1, horizontalScrollbarSize: typeof e.horizontalScrollbarSize < "u" ? e.horizontalScrollbarSize : 10, horizontalSliderSize: typeof e.horizontalSliderSize < "u" ? e.horizontalSliderSize : 0, horizontalHasArrows: typeof e.horizontalHasArrows < "u" ? e.horizontalHasArrows : false, vertical: typeof e.vertical < "u" ? e.vertical : 1, verticalScrollbarSize: typeof e.verticalScrollbarSize < "u" ? e.verticalScrollbarSize : 10, verticalHasArrows: typeof e.verticalHasArrows < "u" ? e.verticalHasArrows : false, verticalSliderSize: typeof e.verticalSliderSize < "u" ? e.verticalSliderSize : 0, scrollByPage: typeof e.scrollByPage < "u" ? e.scrollByPage : false };
  return t.horizontalSliderSize = typeof e.horizontalSliderSize < "u" ? e.horizontalSliderSize : t.horizontalScrollbarSize, t.verticalSliderSize = typeof e.verticalSliderSize < "u" ? e.verticalSliderSize : t.verticalScrollbarSize, Pe && (t.className += " mac"), t;
}
var Ge;
((e) => {
  function t(r, o) {
    if (r.start >= o.end || o.start >= r.end) return { start: 0, end: 0 };
    const a = Math.max(r.start, o.start), c = Math.min(r.end, o.end);
    return c - a <= 0 ? { start: 0, end: 0 } : { start: a, end: c };
  }
  e.intersect = t;
  function i(r) {
    return r.end - r.start <= 0;
  }
  e.isEmpty = i;
  function s(r, o) {
    return !i(t(r, o));
  }
  e.intersects = s;
  function n(r, o) {
    const a = [], c = { start: r.start, end: Math.min(o.start, r.end) }, h = { start: Math.max(o.end, r.start), end: r.end };
    return i(c) || a.push(c), i(h) || a.push(h), a;
  }
  e.relativeComplement = n;
})(Ge || (Ge = {}));
function Wd(e, t) {
  const i = [];
  for (const s of t) {
    if (e.start >= s.range.end) continue;
    if (e.end < s.range.start) break;
    const n = Ge.intersect(e, s.range);
    Ge.isEmpty(n) || i.push({ range: n, size: s.size });
  }
  return i;
}
function ma({ start: e, end: t }, i) {
  return { start: e + i, end: t + i };
}
function w2(e) {
  const t = [];
  let i = null;
  for (const s of e) {
    const n = s.range.start, r = s.range.end, o = s.size;
    if (i && o === i.size) {
      i.range.end = r;
      continue;
    }
    i = { range: { start: n, end: r }, size: o }, t.push(i);
  }
  return t;
}
function _2(...e) {
  return w2(e.reduce((t, i) => t.concat(i), []));
}
var S2 = class {
  constructor(e) {
    this.groups = [], this._size = 0, this._paddingTop = 0, this._paddingTop = e ?? 0, this._size = this._paddingTop;
  }
  get paddingTop() {
    return this._paddingTop;
  }
  set paddingTop(e) {
    this._size = this._size + e - this._paddingTop, this._paddingTop = e;
  }
  splice(e, t, i = []) {
    const s = i.length - t, n = Wd({ start: 0, end: e }, this.groups), r = Wd({ start: e + t, end: Number.POSITIVE_INFINITY }, this.groups).map((a) => ({ range: ma(a.range, s), size: a.size })), o = i.map((a, c) => ({ range: { start: e + c, end: e + c + 1 }, size: a.size }));
    this.groups = _2(n, o, r), this._size = this._paddingTop + this.groups.reduce((a, c) => a + c.size * (c.range.end - c.range.start), 0);
  }
  get count() {
    const e = this.groups.length;
    return e ? this.groups[e - 1].range.end : 0;
  }
  get size() {
    return this._size;
  }
  indexAt(e) {
    if (e < 0) return -1;
    if (e < this._paddingTop) return 0;
    let t = 0, i = this._paddingTop;
    for (const s of this.groups) {
      const n = s.range.end - s.range.start, r = i + n * s.size;
      if (e < r) return t + Math.floor((e - i) / s.size);
      t += n, i = r;
    }
    return t;
  }
  indexAfter(e) {
    return Math.min(this.indexAt(e) + 1, this.count);
  }
  positionAt(e) {
    if (e < 0) return -1;
    let t = 0, i = 0;
    for (const s of this.groups) {
      const n = s.range.end - s.range.start, r = i + n;
      if (e < r) return this._paddingTop + t + (e - i) * s.size;
      t += n * s.size, i = r;
    }
    return -1;
  }
}, C2 = class {
  constructor(e) {
    this.renderers = e, this.cache = /* @__PURE__ */ new Map(), this.transactionNodesPendingRemoval = /* @__PURE__ */ new Set(), this.inTransaction = false;
  }
  alloc(e) {
    let t = this.getTemplateCache(e).pop(), i = false;
    if (t) i = this.transactionNodesPendingRemoval.has(t.domNode), i && this.transactionNodesPendingRemoval.delete(t.domNode);
    else {
      const s = ie(".monaco-list-row"), r = this.getRenderer(e).renderTemplate(s);
      t = { domNode: s, templateId: e, templateData: r };
    }
    return { row: t, isReusingConnectedDomNode: i };
  }
  release(e) {
    e && this.releaseRow(e);
  }
  transact(e) {
    if (this.inTransaction) throw new Error("Already in transaction");
    this.inTransaction = true;
    try {
      e();
    } finally {
      for (const t of this.transactionNodesPendingRemoval) this.doRemoveNode(t);
      this.transactionNodesPendingRemoval.clear(), this.inTransaction = false;
    }
  }
  releaseRow(e) {
    const { domNode: t, templateId: i } = e;
    t && (this.inTransaction ? this.transactionNodesPendingRemoval.add(t) : this.doRemoveNode(t)), this.getTemplateCache(i).push(e);
  }
  doRemoveNode(e) {
    e.classList.remove("scrolling"), e.remove();
  }
  getTemplateCache(e) {
    let t = this.cache.get(e);
    return t || (t = [], this.cache.set(e, t)), t;
  }
  dispose() {
    this.cache.forEach((e, t) => {
      for (const i of e) this.getRenderer(t).disposeTemplate(i.templateData), i.templateData = null;
    }), this.cache.clear(), this.transactionNodesPendingRemoval.clear();
  }
  getRenderer(e) {
    const t = this.renderers.get(e);
    if (!t) throw new Error(`No renderer found for ${e}`);
    return t;
  }
};
function D2(e, t, i, s = []) {
  if (!e.dataTransfer) return;
  const n = ie(".monaco-drag-image");
  n.textContent = i, n.classList.add(...s), ((a) => {
    for (; a && !a.classList.contains("monaco-workbench"); ) a = a.parentElement;
    return a || t.ownerDocument.body;
  })(t).appendChild(n), e.dataTransfer.setDragImage(n, -10, -10), setTimeout(() => n.remove(), 0);
}
var Si = { CurrentDragAndDropData: void 0 }, wt = { useShadows: true, verticalScrollMode: 1, setRowLineHeight: true, setRowHeight: true, supportDynamicHeights: false, dnd: { getDragElements(e) {
  return [e];
}, getDragURI() {
  return null;
}, onDragStart() {
}, onDragOver() {
  return false;
}, drop() {
}, dispose() {
} }, horizontalScrolling: false, transformOptimization: true, alwaysConsumeMouseWheel: true }, va = class {
  get context() {
    return this._context;
  }
  set context(e) {
    this._context = e;
  }
  constructor(e) {
    this.elements = e;
  }
  update() {
  }
  getData() {
    return this.elements;
  }
}, E2 = class {
  constructor(e) {
    this.elements = e;
  }
  update() {
  }
  getData() {
    return this.elements;
  }
}, k2 = class {
  constructor() {
    this.types = [], this.files = [];
  }
  update(e) {
    if (e.types && this.types.splice(0, this.types.length, ...e.types), e.files) {
      this.files.splice(0, this.files.length);
      for (let t = 0; t < e.files.length; t++) {
        const i = e.files.item(t);
        i && (i.size || i.type) && this.files.push(i);
      }
    }
  }
  getData() {
    return { types: this.types, files: this.files };
  }
};
function T2(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? vs(e, t) : e === t;
}
var x2 = class {
  constructor(e) {
    e?.getSetSize ? this.getSetSize = e.getSetSize.bind(e) : this.getSetSize = (t, i, s) => s, e?.getPosInSet ? this.getPosInSet = e.getPosInSet.bind(e) : this.getPosInSet = (t, i) => i + 1, e?.getRole ? this.getRole = e.getRole.bind(e) : this.getRole = (t) => "listitem", e?.isChecked ? this.isChecked = e.isChecked.bind(e) : this.isChecked = (t) => {
    };
  }
}, it = class Bu {
  constructor(t, i, s, n = wt) {
    if (this.virtualDelegate = i, this.domId = `list_id_${++Bu.InstanceCount}`, this.renderers = /* @__PURE__ */ new Map(), this.renderWidth = 0, this._scrollHeight = 0, this.disposables = new q(), this.scrollableElementUpdateDisposable = this.disposables.add(new De()), this.scrollableElementWidthDelayer = new co(50), this.splicing = false, this.dragOverAnimationDisposable = this.disposables.add(new De()), this.dragOverAnimationStopDisposable = this.disposables.add(new De()), this.dragOverMouseY = 0, this.canDrop = false, this.currentDragFeedbackDisposable = this.disposables.add(new De()), this.onDragLeaveTimeout = this.disposables.add(new De()), this.currentSelectionDisposable = this.disposables.add(new De()), this._onDidChangeContentHeight = new L(), this._onDidChangeContentWidth = new L(), this.onDidChangeContentHeight = A.latch(this._onDidChangeContentHeight.event, void 0, this.disposables), this.onDidChangeContentWidth = A.latch(this._onDidChangeContentWidth.event, void 0, this.disposables), this._horizontalScrolling = false, n.horizontalScrolling && n.supportDynamicHeights) throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
    this.items = [], this.itemId = 0, this.rangeMap = this.createRangeMap(n.paddingTop ?? 0);
    for (const o of s) this.renderers.set(o.templateId, o);
    if (this.cache = this.disposables.add(new C2(this.renderers)), this.lastRenderTop = 0, this.lastRenderHeight = 0, this.domNode = document.createElement("div"), this.domNode.className = "monaco-list", this.domNode.classList.add(this.domId), this.domNode.tabIndex = 0, this.domNode.classList.toggle("mouse-support", typeof n.mouseSupport == "boolean" ? n.mouseSupport : true), this._horizontalScrolling = n.horizontalScrolling ?? wt.horizontalScrolling, this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling), this.paddingBottom = typeof n.paddingBottom > "u" ? 0 : n.paddingBottom, this.itemGap = typeof n.itemGap > "u" ? 0 : n.itemGap, this.accessibilityProvider = new x2(n.accessibilityProvider), this.rowsContainer = document.createElement("div"), this.rowsContainer.className = "monaco-list-rows", (n.transformOptimization ?? wt.transformOptimization) && (this.rowsContainer.style.transform = "translate3d(0px, 0px, 0px)", this.rowsContainer.style.overflow = "hidden", this.rowsContainer.style.contain = "strict"), this.disposables.add(qn.addTarget(this.rowsContainer)), this.scrollable = this.disposables.add(new Fd({ forceIntegerValues: true, smoothScrollDuration: n.smoothScrolling ?? false ? 125 : 0, scheduleAtNextAnimationFrame: (o) => Vt(oe(this.domNode), o) })), this.scrollableElement = this.disposables.add(new b2(this.rowsContainer, { alwaysConsumeMouseWheel: n.alwaysConsumeMouseWheel ?? wt.alwaysConsumeMouseWheel, horizontal: 1, vertical: n.verticalScrollMode ?? wt.verticalScrollMode, useShadows: n.useShadows ?? wt.useShadows, mouseWheelScrollSensitivity: n.mouseWheelScrollSensitivity, fastScrollSensitivity: n.fastScrollSensitivity, scrollByPage: n.scrollByPage }, this.scrollable)), this.domNode.appendChild(this.scrollableElement.getDomNode()), t.appendChild(this.domNode), this.scrollableElement.onScroll(this.onScroll, this, this.disposables), this.disposables.add(O(this.rowsContainer, Ve.Change, (o) => this.onTouchChange(o))), this.disposables.add(O(this.scrollableElement.getDomNode(), "scroll", (o) => {
      const a = o.target, c = a.scrollTop;
      a.scrollTop = 0, n.scrollToActiveElement && this.setScrollTop(this.scrollTop + c);
    })), this.disposables.add(O(this.domNode, "dragover", (o) => this.onDragOver(this.toDragEvent(o)))), this.disposables.add(O(this.domNode, "drop", (o) => this.onDrop(this.toDragEvent(o)))), this.disposables.add(O(this.domNode, "dragleave", (o) => this.onDragLeave(this.toDragEvent(o)))), this.disposables.add(O(this.domNode, "dragend", (o) => this.onDragEnd(o))), n.userSelection) {
      if (n.dnd) throw new Error("DND and user selection cannot be used simultaneously");
      this.disposables.add(O(this.domNode, "mousedown", (o) => this.onPotentialSelectionStart(o)));
    }
    this.setRowLineHeight = n.setRowLineHeight ?? wt.setRowLineHeight, this.setRowHeight = n.setRowHeight ?? wt.setRowHeight, this.supportDynamicHeights = n.supportDynamicHeights ?? wt.supportDynamicHeights, this.dnd = n.dnd ?? this.disposables.add(wt.dnd), this.layout(n.initialSize?.height, n.initialSize?.width), n.scrollToActiveElement && this._setupFocusObserver(t);
  }
  get contentHeight() {
    return this.rangeMap.size;
  }
  get contentWidth() {
    return this.scrollWidth ?? 0;
  }
  get onDidScroll() {
    return this.scrollableElement.onScroll;
  }
  get onWillScroll() {
    return this.scrollableElement.onWillScroll;
  }
  get containerDomNode() {
    return this.rowsContainer;
  }
  get scrollableElementDomNode() {
    return this.scrollableElement.getDomNode();
  }
  get horizontalScrolling() {
    return this._horizontalScrolling;
  }
  set horizontalScrolling(t) {
    if (t !== this._horizontalScrolling) {
      if (t && this.supportDynamicHeights) throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
      if (this._horizontalScrolling = t, this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling), this._horizontalScrolling) {
        for (const i of this.items) this.measureItemWidth(i);
        this.updateScrollWidth(), this.scrollableElement.setScrollDimensions({ width: Po(this.domNode) }), this.rowsContainer.style.width = `${Math.max(this.scrollWidth || 0, this.renderWidth)}px`;
      } else this.scrollableElementWidthDelayer.cancel(), this.scrollableElement.setScrollDimensions({ width: this.renderWidth, scrollWidth: this.renderWidth }), this.rowsContainer.style.width = "";
    }
  }
  _setupFocusObserver(t) {
    this.disposables.add(O(t, "focus", () => {
      const i = Qi();
      this.activeElement !== i && i !== null && (this.activeElement = i, this._scrollToActiveElement(this.activeElement, t));
    }, true));
  }
  _scrollToActiveElement(t, i) {
    const s = i.getBoundingClientRect(), r = t.getBoundingClientRect().top - s.top;
    r < 0 && this.setScrollTop(this.scrollTop + r);
  }
  updateOptions(t) {
    if (t.paddingBottom !== void 0 && (this.paddingBottom = t.paddingBottom, this.scrollableElement.setScrollDimensions({ scrollHeight: this.scrollHeight })), t.smoothScrolling !== void 0 && this.scrollable.setSmoothScrollDuration(t.smoothScrolling ? 125 : 0), t.horizontalScrolling !== void 0 && (this.horizontalScrolling = t.horizontalScrolling), t.itemGap !== void 0 && t.itemGap !== this.itemGap) {
      this.itemGap = t.itemGap;
      const s = this.items.slice();
      this.rangeMap = this.createRangeMap(this.rangeMap.paddingTop), this._splice(0, s.length, s.map((n) => n.element));
    }
    let i;
    if (t.scrollByPage !== void 0 && (i = { ...i ?? {}, scrollByPage: t.scrollByPage }), t.mouseWheelScrollSensitivity !== void 0 && (i = { ...i ?? {}, mouseWheelScrollSensitivity: t.mouseWheelScrollSensitivity }), t.fastScrollSensitivity !== void 0 && (i = { ...i ?? {}, fastScrollSensitivity: t.fastScrollSensitivity }), i && this.scrollableElement.updateOptions(i), t.paddingTop !== void 0 && t.paddingTop !== this.rangeMap.paddingTop) {
      const s = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), n = t.paddingTop - this.rangeMap.paddingTop;
      this.rangeMap.paddingTop = t.paddingTop, this.render(s, Math.max(0, this.lastRenderTop + n), this.lastRenderHeight, void 0, void 0, true), this.setScrollTop(this.lastRenderTop), this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights && this._rerender(this.lastRenderTop, this.lastRenderHeight);
    }
  }
  delegateScrollFromMouseWheelEvent(t) {
    this.scrollableElement.delegateScrollFromMouseWheelEvent(t);
  }
  delegateVerticalScrollbarPointerDown(t) {
    this.scrollableElement.delegateVerticalScrollbarPointerDown(t);
  }
  updateElementHeight(t, i, s) {
    if (t < 0 || t >= this.items.length) return;
    const n = this.items[t].size;
    if (typeof i > "u") {
      if (!this.supportDynamicHeights) {
        console.warn("Dynamic heights not supported", new Error().stack);
        return;
      }
      this.items[t].lastDynamicHeightWidth = void 0, i = n + this.probeDynamicHeight(t);
    }
    if (n === i) return;
    const r = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
    let o = 0;
    t < r.start || s !== null && s > t && s < r.end ? o = i - n : o = 0;
    const a = this.itemGap > 0 ? i + this.itemGap : i;
    this.rangeMap.splice(t, 1, [{ size: a }]), this.items[t].size = i, this.render(r, Math.max(0, this.lastRenderTop + o), this.lastRenderHeight, void 0, void 0, true), this.setScrollTop(this.lastRenderTop), this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights ? this._rerender(this.lastRenderTop, this.lastRenderHeight) : this._onDidChangeContentHeight.fire(this.contentHeight);
  }
  createRangeMap(t) {
    return new S2(t);
  }
  splice(t, i, s = []) {
    if (this.splicing) throw new Error("Can't run recursive splices.");
    this.splicing = true;
    try {
      return this._splice(t, i, s);
    } finally {
      this.splicing = false, this._onDidChangeContentHeight.fire(this.contentHeight);
    }
  }
  _splice(t, i, s = []) {
    const n = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), r = { start: t, end: t + i }, o = Ge.intersect(n, r), a = /* @__PURE__ */ new Map();
    for (let w = o.end - 1; w >= o.start; w--) {
      const S = this.items[w];
      if (S.dragStartDisposable.dispose(), S.checkedDisposable.dispose(), S.row) {
        let I = a.get(S.templateId);
        I || (I = [], a.set(S.templateId, I));
        const P = this.renderers.get(S.templateId);
        P && P.disposeElement && P.disposeElement(S.element, w, S.row.templateData, S.size), I.unshift(S.row);
      }
      S.row = null, S.stale = true;
    }
    const c = { start: t + i, end: this.items.length }, h = Ge.intersect(c, n), d = Ge.relativeComplement(c, n), u = s.map((w) => ({ id: String(this.itemId++), element: w, templateId: this.virtualDelegate.getTemplateId(w), size: this.virtualDelegate.getHeight(w), width: void 0, hasDynamicHeight: !!this.virtualDelegate.hasDynamicHeight && this.virtualDelegate.hasDynamicHeight(w), lastDynamicHeightWidth: void 0, row: null, uri: void 0, dropTarget: false, dragStartDisposable: ee.None, checkedDisposable: ee.None, stale: false }));
    let f;
    if (t === 0 && i >= this.items.length) {
      if (this.rangeMap = this.createRangeMap(this.rangeMap.paddingTop), this.itemGap > 0) {
        const w = u.map((S) => ({ ...S, size: S.size + this.itemGap }));
        if (w.length > 0) {
          const S = w[w.length - 1];
          w[w.length - 1] = { ...S, size: S.size - this.itemGap };
        }
        this.rangeMap.splice(0, 0, w);
      } else this.rangeMap.splice(0, 0, u);
      f = this.items, this.items = u;
    } else {
      if (this.itemGap > 0) {
        const w = u.map((S) => ({ ...S, size: S.size + this.itemGap }));
        if (w.length > 0 && t + w.length === this.items.length + w.length) {
          const S = w[w.length - 1];
          w[w.length - 1] = { ...S, size: S.size - this.itemGap };
        }
        this.rangeMap.splice(t, i, w);
      } else this.rangeMap.splice(t, i, u);
      f = Rr(this.items, t, i, u);
    }
    const p = s.length - i, m = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight), _ = ma(h, p), v = Ge.intersect(m, _);
    for (let w = v.start; w < v.end; w++) this.updateItemInDOM(this.items[w], w);
    const y = Ge.relativeComplement(_, m);
    for (const w of y) for (let S = w.start; S < w.end; S++) this.removeItemFromDOM(S);
    const C = d.map((w) => ma(w, p)), E = [{ start: t, end: t + s.length }, ...C].map((w) => Ge.intersect(m, w)).reverse();
    for (const w of E) for (let S = w.end - 1; S >= w.start; S--) {
      const I = this.items[S], Y = a.get(I.templateId)?.pop();
      this.insertItemInDOM(S, Y);
    }
    for (const w of a.values()) for (const S of w) this.cache.release(S);
    return this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights && this._rerender(this.scrollTop, this.renderHeight), f.map((w) => w.element);
  }
  eventuallyUpdateScrollDimensions() {
    this._scrollHeight = this.contentHeight, this.rowsContainer.style.height = `${this._scrollHeight}px`, this.scrollableElementUpdateDisposable.value || (this.scrollableElementUpdateDisposable.value = Vt(oe(this.domNode), () => {
      this.scrollableElement.setScrollDimensions({ scrollHeight: this.scrollHeight }), this.updateScrollWidth(), this.scrollableElementUpdateDisposable.clear();
    }));
  }
  eventuallyUpdateScrollWidth() {
    if (!this.horizontalScrolling) {
      this.scrollableElementWidthDelayer.cancel();
      return;
    }
    this.scrollableElementWidthDelayer.trigger(() => this.updateScrollWidth());
  }
  updateScrollWidth() {
    if (!this.horizontalScrolling) return;
    let t = 0;
    for (const i of this.items) typeof i.width < "u" && (t = Math.max(t, i.width));
    this.scrollWidth = t, this.scrollableElement.setScrollDimensions({ scrollWidth: t === 0 ? 0 : t + 10 }), this._onDidChangeContentWidth.fire(this.scrollWidth);
  }
  updateWidth(t) {
    if (!this.horizontalScrolling || typeof this.scrollWidth > "u") return;
    const i = this.items[t];
    this.measureItemWidth(i), typeof i.width < "u" && i.width > this.scrollWidth && (this.scrollWidth = i.width, this.scrollableElement.setScrollDimensions({ scrollWidth: this.scrollWidth + 10 }), this._onDidChangeContentWidth.fire(this.scrollWidth));
  }
  rerender() {
    if (this.supportDynamicHeights) {
      for (const t of this.items) t.lastDynamicHeightWidth = void 0;
      this._rerender(this.lastRenderTop, this.lastRenderHeight);
    }
  }
  get length() {
    return this.items.length;
  }
  get renderHeight() {
    return this.scrollableElement.getScrollDimensions().height;
  }
  get firstVisibleIndex() {
    return this.getVisibleRange(this.lastRenderTop, this.lastRenderHeight).start;
  }
  get firstMostlyVisibleIndex() {
    const t = this.firstVisibleIndex, i = this.rangeMap.positionAt(t), s = this.rangeMap.positionAt(t + 1);
    return s !== -1 && (s - i) / 2 + i < this.scrollTop ? t + 1 : t;
  }
  get lastVisibleIndex() {
    return this.getRenderRange(this.lastRenderTop, this.lastRenderHeight).end - 1;
  }
  element(t) {
    return this.items[t].element;
  }
  indexOf(t) {
    return this.items.findIndex((i) => i.element === t);
  }
  domElement(t) {
    const i = this.items[t].row;
    return i && i.domNode;
  }
  elementHeight(t) {
    return this.items[t].size;
  }
  elementTop(t) {
    return this.rangeMap.positionAt(t);
  }
  indexAt(t) {
    return this.rangeMap.indexAt(t);
  }
  indexAfter(t) {
    return this.rangeMap.indexAfter(t);
  }
  layout(t, i) {
    const s = { height: typeof t == "number" ? t : J0(this.domNode) };
    this.scrollableElementUpdateDisposable.value && (this.scrollableElementUpdateDisposable.clear(), s.scrollHeight = this.scrollHeight), this.scrollableElement.setScrollDimensions(s), typeof i < "u" && (this.renderWidth = i, this.supportDynamicHeights && this._rerender(this.scrollTop, this.renderHeight)), this.horizontalScrolling && this.scrollableElement.setScrollDimensions({ width: typeof i == "number" ? i : Po(this.domNode) });
  }
  render(t, i, s, n, r, o = false) {
    const a = this.getRenderRange(i, s), c = Ge.relativeComplement(a, t).reverse(), h = Ge.relativeComplement(t, a);
    if (o) {
      const d = Ge.intersect(t, a);
      for (let u = d.start; u < d.end; u++) this.updateItemInDOM(this.items[u], u);
    }
    this.cache.transact(() => {
      for (const d of h) for (let u = d.start; u < d.end; u++) this.removeItemFromDOM(u);
      for (const d of c) for (let u = d.end - 1; u >= d.start; u--) this.insertItemInDOM(u);
    }), n !== void 0 && (this.rowsContainer.style.left = `-${n}px`), this.rowsContainer.style.top = `-${i}px`, this.horizontalScrolling && r !== void 0 && (this.rowsContainer.style.width = `${Math.max(r, this.renderWidth)}px`), this.lastRenderTop = i, this.lastRenderHeight = s;
  }
  insertItemInDOM(t, i) {
    const s = this.items[t];
    if (!s.row) if (i) s.row = i, s.stale = true;
    else {
      const c = this.cache.alloc(s.templateId);
      s.row = c.row, s.stale ||= c.isReusingConnectedDomNode;
    }
    const n = this.accessibilityProvider.getRole(s.element) || "listitem";
    s.row.domNode.setAttribute("role", n);
    const r = this.accessibilityProvider.isChecked(s.element);
    if (typeof r == "boolean") s.row.domNode.setAttribute("aria-checked", String(!!r));
    else if (r) {
      const c = (h) => s.row.domNode.setAttribute("aria-checked", String(!!h));
      c(r.value), s.checkedDisposable = r.onDidChange(() => c(r.value));
    }
    if (s.stale || !s.row.domNode.parentElement) {
      const c = this.items.at(t + 1)?.row?.domNode ?? null;
      (s.row.domNode.parentElement !== this.rowsContainer || s.row.domNode.nextElementSibling !== c) && this.rowsContainer.insertBefore(s.row.domNode, c), s.stale = false;
    }
    this.updateItemInDOM(s, t);
    const o = this.renderers.get(s.templateId);
    if (!o) throw new Error(`No renderer found for template id ${s.templateId}`);
    o?.renderElement(s.element, t, s.row.templateData, s.size);
    const a = this.dnd.getDragURI(s.element);
    s.dragStartDisposable.dispose(), s.row.domNode.draggable = !!a, a && (s.dragStartDisposable = O(s.row.domNode, "dragstart", (c) => this.onDragStart(s.element, a, c))), this.horizontalScrolling && (this.measureItemWidth(s), this.eventuallyUpdateScrollWidth());
  }
  measureItemWidth(t) {
    if (!t.row || !t.row.domNode) return;
    t.row.domNode.style.width = "fit-content", t.width = Po(t.row.domNode);
    const i = oe(t.row.domNode).getComputedStyle(t.row.domNode);
    i.paddingLeft && (t.width += parseFloat(i.paddingLeft)), i.paddingRight && (t.width += parseFloat(i.paddingRight)), t.row.domNode.style.width = "";
  }
  updateItemInDOM(t, i) {
    t.row.domNode.style.top = `${this.elementTop(i)}px`, this.setRowHeight && (t.row.domNode.style.height = `${t.size}px`), this.setRowLineHeight && (t.row.domNode.style.lineHeight = `${t.size}px`), t.row.domNode.setAttribute("data-index", `${i}`), t.row.domNode.setAttribute("data-last-element", i === this.length - 1 ? "true" : "false"), t.row.domNode.setAttribute("data-parity", i % 2 === 0 ? "even" : "odd"), t.row.domNode.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(t.element, i, this.length))), t.row.domNode.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(t.element, i))), t.row.domNode.setAttribute("id", this.getElementDomId(i)), t.row.domNode.classList.toggle("drop-target", t.dropTarget);
  }
  removeItemFromDOM(t) {
    const i = this.items[t];
    if (i.dragStartDisposable.dispose(), i.checkedDisposable.dispose(), i.row) {
      const s = this.renderers.get(i.templateId);
      s && s.disposeElement && s.disposeElement(i.element, t, i.row.templateData, i.size), this.cache.release(i.row), i.row = null;
    }
    this.horizontalScrolling && this.eventuallyUpdateScrollWidth();
  }
  getScrollTop() {
    return this.scrollableElement.getScrollPosition().scrollTop;
  }
  setScrollTop(t, i) {
    this.scrollableElementUpdateDisposable.value && (this.scrollableElementUpdateDisposable.clear(), this.scrollableElement.setScrollDimensions({ scrollHeight: this.scrollHeight })), this.scrollableElement.setScrollPosition({ scrollTop: t, reuseAnimation: i });
  }
  getScrollLeft() {
    return this.scrollableElement.getScrollPosition().scrollLeft;
  }
  setScrollLeft(t) {
    this.scrollableElementUpdateDisposable.value && (this.scrollableElementUpdateDisposable.clear(), this.scrollableElement.setScrollDimensions({ scrollWidth: this.scrollWidth })), this.scrollableElement.setScrollPosition({ scrollLeft: t });
  }
  get scrollTop() {
    return this.getScrollTop();
  }
  set scrollTop(t) {
    this.setScrollTop(t);
  }
  get scrollHeight() {
    return this._scrollHeight + (this.horizontalScrolling ? 10 : 0) + this.paddingBottom;
  }
  get onMouseClick() {
    return A.map(this.disposables.add(new ce(this.domNode, "click")).event, (t) => this.toMouseEvent(t), this.disposables);
  }
  get onMouseDblClick() {
    return A.map(this.disposables.add(new ce(this.domNode, "dblclick")).event, (t) => this.toMouseEvent(t), this.disposables);
  }
  get onMouseMiddleClick() {
    return A.filter(A.map(this.disposables.add(new ce(this.domNode, "auxclick")).event, (t) => this.toMouseEvent(t), this.disposables), (t) => t.browserEvent.button === 1, this.disposables);
  }
  get onMouseUp() {
    return A.map(this.disposables.add(new ce(this.domNode, "mouseup")).event, (t) => this.toMouseEvent(t), this.disposables);
  }
  get onMouseDown() {
    return A.map(this.disposables.add(new ce(this.domNode, "mousedown")).event, (t) => this.toMouseEvent(t), this.disposables);
  }
  get onMouseOver() {
    return A.map(this.disposables.add(new ce(this.domNode, "mouseover")).event, (t) => this.toMouseEvent(t), this.disposables);
  }
  get onMouseMove() {
    return A.map(this.disposables.add(new ce(this.domNode, "mousemove")).event, (t) => this.toMouseEvent(t), this.disposables);
  }
  get onMouseOut() {
    return A.map(this.disposables.add(new ce(this.domNode, "mouseout")).event, (t) => this.toMouseEvent(t), this.disposables);
  }
  get onContextMenu() {
    return A.any(A.map(this.disposables.add(new ce(this.domNode, "contextmenu")).event, (t) => this.toMouseEvent(t), this.disposables), A.map(this.disposables.add(new ce(this.domNode, Ve.Contextmenu)).event, (t) => this.toGestureEvent(t), this.disposables));
  }
  get onTouchStart() {
    return A.map(this.disposables.add(new ce(this.domNode, "touchstart")).event, (t) => this.toTouchEvent(t), this.disposables);
  }
  get onTap() {
    return A.map(this.disposables.add(new ce(this.rowsContainer, Ve.Tap)).event, (t) => this.toGestureEvent(t), this.disposables);
  }
  toMouseEvent(t) {
    const i = this.getItemIndexFromEventTarget(t.target || null), s = typeof i > "u" ? void 0 : this.items[i], n = s && s.element;
    return { browserEvent: t, index: i, element: n };
  }
  toTouchEvent(t) {
    const i = this.getItemIndexFromEventTarget(t.target || null), s = typeof i > "u" ? void 0 : this.items[i], n = s && s.element;
    return { browserEvent: t, index: i, element: n };
  }
  toGestureEvent(t) {
    const i = this.getItemIndexFromEventTarget(t.initialTarget || null), s = typeof i > "u" ? void 0 : this.items[i], n = s && s.element;
    return { browserEvent: t, index: i, element: n };
  }
  toDragEvent(t) {
    const i = this.getItemIndexFromEventTarget(t.target || null), s = typeof i > "u" ? void 0 : this.items[i], n = s && s.element, r = this.getTargetSector(t, i);
    return { browserEvent: t, index: i, element: n, sector: r };
  }
  onScroll(t) {
    try {
      const i = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
      this.render(i, t.scrollTop, t.height, t.scrollLeft, t.scrollWidth), this.supportDynamicHeights && this._rerender(t.scrollTop, t.height, t.inSmoothScrolling);
    } catch (i) {
      throw console.error("Got bad scroll event:", t), i;
    }
  }
  onTouchChange(t) {
    t.preventDefault(), t.stopPropagation(), this.scrollTop -= t.translationY;
  }
  onDragStart(t, i, s) {
    if (!s.dataTransfer) return;
    const n = this.dnd.getDragElements(t);
    s.dataTransfer.effectAllowed = "copyMove", s.dataTransfer.setData(qh.TEXT, i);
    let r;
    this.dnd.getDragLabel && (r = this.dnd.getDragLabel(n, s)), typeof r > "u" && (r = String(n.length)), D2(s, this.domNode, r, [this.domId]), this.domNode.classList.add("dragging"), this.currentDragData = new va(n), Si.CurrentDragAndDropData = new E2(n), this.dnd.onDragStart?.(this.currentDragData, s);
  }
  onPotentialSelectionStart(t) {
    const i = W0(this.domNode), s = new q();
    this.currentSelectionDisposable.value = s;
    const n = s.add(new q());
    n.add(O(this.domNode, "selectstart", () => {
      n.add(O(i, "mousemove", (r) => {
        i.getSelection()?.isCollapsed === false && this.setupDragAndDropScrollTopAnimation(r);
      })), s.add(re(() => {
        const r = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
        this.currentSelectionBounds = void 0, this.render(r, this.lastRenderTop, this.lastRenderHeight, void 0, void 0);
      })), s.add(O(i, "selectionchange", () => {
        const r = i.getSelection();
        if (!r || r.isCollapsed) {
          n.isDisposed && s.dispose();
          return;
        }
        let o = this.getIndexOfListElement(r.anchorNode), a = this.getIndexOfListElement(r.focusNode);
        o !== void 0 && a !== void 0 && (a < o && ([o, a] = [a, o]), this.currentSelectionBounds = { start: o, end: a });
      }));
    })), n.add(O(i, "mouseup", () => {
      n.dispose(), this.teardownDragAndDropScrollTopAnimation(), i.getSelection()?.isCollapsed !== false && s.dispose();
    }));
  }
  getIndexOfListElement(t) {
    if (!(!t || !this.domNode.contains(t))) for (; t && t !== this.domNode; ) {
      if (t.dataset?.index) return Number(t.dataset.index);
      t = t.parentElement;
    }
  }
  onDragOver(t) {
    if (t.browserEvent.preventDefault(), this.onDragLeaveTimeout.clear(), Si.CurrentDragAndDropData && Si.CurrentDragAndDropData.getData() === "vscode-ui" || (this.setupDragAndDropScrollTopAnimation(t.browserEvent), !t.browserEvent.dataTransfer)) return false;
    if (!this.currentDragData) if (Si.CurrentDragAndDropData) this.currentDragData = Si.CurrentDragAndDropData;
    else {
      if (!t.browserEvent.dataTransfer.types) return false;
      this.currentDragData = new k2();
    }
    const i = this.dnd.onDragOver(this.currentDragData, t.element, t.index, t.sector, t.browserEvent);
    if (this.canDrop = typeof i == "boolean" ? i : i.accept, !this.canDrop) return this.currentDragFeedback = void 0, this.currentDragFeedbackDisposable.clear(), false;
    t.browserEvent.dataTransfer.dropEffect = typeof i != "boolean" && i.effect?.type === 0 ? "copy" : "move";
    let s;
    typeof i != "boolean" && i.feedback ? s = i.feedback : typeof t.index > "u" ? s = [-1] : s = [t.index], s = Ir(s).filter((r) => r >= -1 && r < this.length).sort((r, o) => r - o), s = s[0] === -1 ? [-1] : s;
    let n = typeof i != "boolean" && i.effect && i.effect.position ? i.effect.position : "drop-target";
    if (T2(this.currentDragFeedback, s) && this.currentDragFeedbackPosition === n) return true;
    if (this.currentDragFeedback = s, this.currentDragFeedbackPosition = n, this.currentDragFeedbackDisposable.clear(), s[0] === -1) this.domNode.classList.add(n), this.rowsContainer.classList.add(n), this.currentDragFeedbackDisposable.value = re(() => {
      this.domNode.classList.remove(n), this.rowsContainer.classList.remove(n);
    });
    else {
      if (s.length > 1 && n !== "drop-target") throw new Error("Can't use multiple feedbacks with position different than 'over'");
      n === "drop-target-after" && s[0] < this.length - 1 && (s[0] += 1, n = "drop-target-before");
      for (const r of s) {
        const o = this.items[r];
        o.dropTarget = true, o.row?.domNode.classList.add(n);
      }
      this.currentDragFeedbackDisposable.value = re(() => {
        for (const r of s) {
          const o = this.items[r];
          o.dropTarget = false, o.row?.domNode.classList.remove(n);
        }
      });
    }
    return true;
  }
  onDragLeave(t) {
    this.onDragLeaveTimeout.value = On(() => this.clearDragOverFeedback(), 100), this.currentDragData && this.dnd.onDragLeave?.(this.currentDragData, t.element, t.index, t.browserEvent);
  }
  onDrop(t) {
    if (!this.canDrop) return;
    const i = this.currentDragData;
    this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), this.domNode.classList.remove("dragging"), this.currentDragData = void 0, Si.CurrentDragAndDropData = void 0, !(!i || !t.browserEvent.dataTransfer) && (t.browserEvent.preventDefault(), i.update(t.browserEvent.dataTransfer), this.dnd.drop(i, t.element, t.index, t.sector, t.browserEvent));
  }
  onDragEnd(t) {
    this.canDrop = false, this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), this.domNode.classList.remove("dragging"), this.currentDragData = void 0, Si.CurrentDragAndDropData = void 0, this.dnd.onDragEnd?.(t);
  }
  clearDragOverFeedback() {
    this.currentDragFeedback = void 0, this.currentDragFeedbackPosition = void 0, this.currentDragFeedbackDisposable.clear();
  }
  setupDragAndDropScrollTopAnimation(t) {
    if (!this.dragOverAnimationDisposable.value) {
      const i = Q0(this.domNode).top;
      this.dragOverAnimationDisposable.value = og(oe(this.domNode), this.animateDragAndDropScrollTop.bind(this, i));
    }
    this.dragOverAnimationStopDisposable.value = On(() => {
      this.dragOverAnimationDisposable.clear();
    }, 1e3), this.dragOverMouseY = t.pageY;
  }
  animateDragAndDropScrollTop(t) {
    if (this.dragOverMouseY === void 0) return;
    const i = this.dragOverMouseY - t, s = this.renderHeight - 35;
    i < 35 ? this.scrollTop += Math.max(-14, Math.floor(0.3 * (i - 35))) : i > s && (this.scrollTop += Math.min(14, Math.floor(0.3 * (i - s))));
  }
  teardownDragAndDropScrollTopAnimation() {
    this.dragOverAnimationStopDisposable.clear(), this.dragOverAnimationDisposable.clear();
  }
  getTargetSector(t, i) {
    if (i === void 0) return;
    const s = t.offsetY / this.items[i].size, n = Math.floor(s / 0.25);
    return Un(n, 0, 3);
  }
  getItemIndexFromEventTarget(t) {
    const i = this.scrollableElement.getDomNode();
    let s = t;
    for (; (Mt(s) || $h(s)) && s !== this.rowsContainer && i.contains(s); ) {
      const n = s.getAttribute("data-index");
      if (n) {
        const r = Number(n);
        if (!isNaN(r)) return r;
      }
      s = s.parentElement;
    }
  }
  getVisibleRange(t, i) {
    return { start: this.rangeMap.indexAt(t), end: this.rangeMap.indexAfter(t + i - 1) };
  }
  getRenderRange(t, i) {
    const s = this.getVisibleRange(t, i);
    if (this.currentSelectionBounds) {
      const n = this.rangeMap.count;
      s.start = Math.min(s.start, this.currentSelectionBounds.start, n), s.end = Math.min(Math.max(s.end, this.currentSelectionBounds.end + 1), n);
    }
    return s;
  }
  _rerender(t, i, s) {
    const n = this.getRenderRange(t, i);
    let r, o;
    t === this.elementTop(n.start) ? (r = n.start, o = 0) : n.end - n.start > 1 && (r = n.start + 1, o = this.elementTop(r) - t);
    let a = 0;
    for (; ; ) {
      const c = this.getRenderRange(t, i);
      let h = false;
      for (let d = c.start; d < c.end; d++) {
        const u = this.probeDynamicHeight(d);
        u !== 0 && this.rangeMap.splice(d, 1, [this.items[d]]), a += u, h = h || u !== 0;
      }
      if (!h) {
        a !== 0 && this.eventuallyUpdateScrollDimensions();
        const d = Ge.relativeComplement(n, c);
        for (const f of d) for (let p = f.start; p < f.end; p++) this.items[p].row && this.removeItemFromDOM(p);
        const u = Ge.relativeComplement(c, n).reverse();
        for (const f of u) for (let p = f.end - 1; p >= f.start; p--) this.insertItemInDOM(p);
        for (let f = c.start; f < c.end; f++) this.items[f].row && this.updateItemInDOM(this.items[f], f);
        if (typeof r == "number") {
          const f = this.scrollable.getFutureScrollPosition().scrollTop - t, p = this.elementTop(r) - o + f;
          this.setScrollTop(p, s);
        }
        this._onDidChangeContentHeight.fire(this.contentHeight);
        return;
      }
    }
  }
  probeDynamicHeight(t) {
    const i = this.items[t], s = this.probeDynamicHeightForItem(i, t);
    return s > 0 && this.virtualDelegate.setDynamicHeight?.(i.element, i.size), s;
  }
  probeDynamicHeightForItem(t, i) {
    if (this.virtualDelegate.getDynamicHeight) {
      const o = this.virtualDelegate.getDynamicHeight(t.element);
      if (o !== null) {
        const a = t.size;
        return t.size = o, t.lastDynamicHeightWidth = this.renderWidth, o - a;
      }
    }
    if (!t.hasDynamicHeight || t.lastDynamicHeightWidth === this.renderWidth || this.virtualDelegate.hasDynamicHeight && !this.virtualDelegate.hasDynamicHeight(t.element)) return 0;
    const s = t.size;
    if (t.row) return t.row.domNode.style.height = "", t.size = t.row.domNode.offsetHeight, t.size === 0 && !Zi(t.row.domNode, oe(t.row.domNode).document.body) && console.warn("Measuring item node that is not in DOM! Add ListView to the DOM before measuring row height!", new Error().stack), t.lastDynamicHeightWidth = this.renderWidth, t.size - s;
    const { row: n } = this.cache.alloc(t.templateId);
    n.domNode.style.height = "", this.rowsContainer.appendChild(n.domNode);
    const r = this.renderers.get(t.templateId);
    if (!r) throw new st("Missing renderer for templateId: " + t.templateId);
    return r.renderElement(t.element, i, n.templateData, void 0), t.size = n.domNode.offsetHeight, r.disposeElement?.(t.element, i, n.templateData, void 0), t.lastDynamicHeightWidth = this.renderWidth, n.domNode.remove(), this.cache.release(n), t.size - s;
  }
  getElementDomId(t) {
    return `${this.domId}_${t}`;
  }
  dispose() {
    this.currentSelectionDisposable.clear(), this.currentDragFeedbackDisposable.clear();
    for (const t of this.items) if (t.dragStartDisposable.dispose(), t.checkedDisposable.dispose(), t.row) {
      const i = this.renderers.get(t.row.templateId);
      i && (i.disposeElement?.(t.element, -1, t.row.templateData, void 0), i.disposeTemplate(t.row.templateData));
    }
    this.items = [], this.domNode?.remove(), this.disposables.dispose();
  }
};
it.InstanceCount = 0, pe([ve], it.prototype, "onMouseClick", null), pe([ve], it.prototype, "onMouseDblClick", null), pe([ve], it.prototype, "onMouseMiddleClick", null), pe([ve], it.prototype, "onMouseUp", null), pe([ve], it.prototype, "onMouseDown", null), pe([ve], it.prototype, "onMouseOver", null), pe([ve], it.prototype, "onMouseMove", null), pe([ve], it.prototype, "onMouseOut", null), pe([ve], it.prototype, "onContextMenu", null), pe([ve], it.prototype, "onTouchStart", null), pe([ve], it.prototype, "onTap", null);
var A2 = it, N2 = class {
  constructor(e) {
    this.trait = e, this.renderedElements = [];
  }
  get templateId() {
    return `template:${this.trait.name}`;
  }
  renderTemplate(e) {
    return e;
  }
  renderElement(e, t, i) {
    const s = this.renderedElements.findIndex((n) => n.templateData === i);
    if (s >= 0) {
      const n = this.renderedElements[s];
      this.trait.unrender(i), n.index = t;
    } else {
      const n = { index: t, templateData: i };
      this.renderedElements.push(n);
    }
    this.trait.renderIndex(t, i);
  }
  splice(e, t, i) {
    const s = [];
    for (const n of this.renderedElements) n.index < e ? s.push(n) : n.index >= e + t && s.push({ index: n.index + i - t, templateData: n.templateData });
    this.renderedElements = s;
  }
  renderIndexes(e) {
    for (const { index: t, templateData: i } of this.renderedElements) e.indexOf(t) > -1 && this.trait.renderIndex(t, i);
  }
  disposeTemplate(e) {
    const t = this.renderedElements.findIndex((i) => i.templateData === e);
    t < 0 || this.renderedElements.splice(t, 1);
  }
}, hr = class {
  constructor(e) {
    this._trait = e, this.indexes = [], this.sortedIndexes = [], this._onChange = new L(), this.onChange = this._onChange.event;
  }
  get name() {
    return this._trait;
  }
  get renderer() {
    return new N2(this);
  }
  splice(e, t, i) {
    const s = i.length - t, n = e + t, r = [];
    let o = 0;
    for (; o < this.sortedIndexes.length && this.sortedIndexes[o] < e; ) r.push(this.sortedIndexes[o++]);
    for (let a = 0; a < i.length; a++) i[a] && r.push(a + e);
    for (; o < this.sortedIndexes.length && this.sortedIndexes[o] >= n; ) r.push(this.sortedIndexes[o++] + s);
    this.renderer.splice(e, t, i.length), this._set(r, r);
  }
  renderIndex(e, t) {
    t.classList.toggle(this._trait, this.contains(e));
  }
  unrender(e) {
    e.classList.remove(this._trait);
  }
  set(e, t) {
    return this._set(e, [...e].sort(jd), t);
  }
  _set(e, t, i) {
    const s = this.indexes, n = this.sortedIndexes;
    this.indexes = e, this.sortedIndexes = t;
    const r = ya(n, e);
    return this.renderer.renderIndexes(r), this._onChange.fire({ indexes: e, browserEvent: i }), s;
  }
  get() {
    return this.indexes;
  }
  contains(e) {
    return u1(this.sortedIndexes, e, jd) >= 0;
  }
  dispose() {
    nt(this._onChange);
  }
};
pe([ve], hr.prototype, "renderer", null);
var I2 = class extends hr {
  constructor(e) {
    super("selected"), this.setAriaSelected = e;
  }
  renderIndex(e, t) {
    super.renderIndex(e, t), this.setAriaSelected && (this.contains(e) ? t.setAttribute("aria-selected", "true") : t.setAttribute("aria-selected", "false"));
  }
}, ba = class {
  constructor(e, t, i) {
    this.trait = e, this.view = t, this.identityProvider = i;
  }
  splice(e, t, i) {
    if (!this.identityProvider) return this.trait.splice(e, t, new Array(i.length).fill(false));
    const s = this.trait.get().map((o) => this.identityProvider.getId(this.view.element(o)).toString());
    if (s.length === 0) return this.trait.splice(e, t, new Array(i.length).fill(false));
    const n = new Set(s), r = i.map((o) => n.has(this.identityProvider.getId(o).toString()));
    this.trait.splice(e, t, r);
  }
};
function Gs(e, t) {
  return e.classList.contains(t) ? true : e.classList.contains("monaco-list") || !e.parentElement ? false : Gs(e.parentElement, t);
}
function qs(e) {
  return Gs(e, "monaco-editor");
}
function L2(e) {
  return Gs(e, "monaco-custom-toggle");
}
function R2(e) {
  return Gs(e, "action-item");
}
function Ks(e) {
  return Gs(e, "monaco-tree-sticky-row");
}
function js(e) {
  return e.classList.contains("monaco-tree-sticky-container");
}
function Vd(e) {
  return e.tagName === "A" && e.classList.contains("monaco-button") || e.tagName === "DIV" && e.classList.contains("monaco-button-dropdown") ? true : e.classList.contains("monaco-list") || !e.parentElement ? false : Vd(e.parentElement);
}
var Gd = class {
  constructor(e, t, i) {
    this.list = e, this.view = t, this.disposables = new q(), this.multipleSelectionDisposables = new q(), this.multipleSelectionSupport = i.multipleSelectionSupport, this.disposables.add(this.onKeyDown((s) => {
      switch (s.keyCode) {
        case 3:
          return this.onEnter(s);
        case 16:
          return this.onUpArrow(s);
        case 18:
          return this.onDownArrow(s);
        case 11:
          return this.onPageUpArrow(s);
        case 12:
          return this.onPageDownArrow(s);
        case 9:
          return this.onEscape(s);
        case 31:
          this.multipleSelectionSupport && (Pe ? s.metaKey : s.ctrlKey) && this.onCtrlA(s);
      }
    }));
  }
  get onKeyDown() {
    return A.chain(this.disposables.add(new ce(this.view.domNode, "keydown")).event, (e) => e.filter((t) => !Gt(t.target)).map((t) => new Oe(t)));
  }
  updateOptions(e) {
    e.multipleSelectionSupport !== void 0 && (this.multipleSelectionSupport = e.multipleSelectionSupport);
  }
  onEnter(e) {
    e.preventDefault(), e.stopPropagation(), this.list.setSelection(this.list.getFocus(), e.browserEvent);
  }
  onUpArrow(e) {
    e.preventDefault(), e.stopPropagation(), this.list.focusPrevious(1, false, e.browserEvent);
    const t = this.list.getFocus()[0];
    this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus();
  }
  onDownArrow(e) {
    e.preventDefault(), e.stopPropagation(), this.list.focusNext(1, false, e.browserEvent);
    const t = this.list.getFocus()[0];
    this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus();
  }
  onPageUpArrow(e) {
    e.preventDefault(), e.stopPropagation(), this.list.focusPreviousPage(e.browserEvent);
    const t = this.list.getFocus()[0];
    this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus();
  }
  onPageDownArrow(e) {
    e.preventDefault(), e.stopPropagation(), this.list.focusNextPage(e.browserEvent);
    const t = this.list.getFocus()[0];
    this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus();
  }
  onCtrlA(e) {
    e.preventDefault(), e.stopPropagation(), this.list.setSelection(Lr(this.list.length), e.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus();
  }
  onEscape(e) {
    this.list.getSelection().length && (e.preventDefault(), e.stopPropagation(), this.list.setSelection([], e.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus());
  }
  dispose() {
    this.disposables.dispose(), this.multipleSelectionDisposables.dispose();
  }
};
pe([ve], Gd.prototype, "onKeyDown", null);
var M2 = new class {
  mightProducePrintableCharacter(e) {
    return e.ctrlKey || e.metaKey || e.altKey ? false : e.keyCode >= 31 && e.keyCode <= 56 || e.keyCode >= 21 && e.keyCode <= 30 || e.keyCode >= 98 && e.keyCode <= 107 || e.keyCode >= 85 && e.keyCode <= 95;
  }
}(), P2 = class {
  constructor(e, t, i, s, n) {
    this.list = e, this.view = t, this.keyboardNavigationLabelProvider = i, this.keyboardNavigationEventFilter = s, this.delegate = n, this.enabled = false, this.state = 0, this.mode = 0, this.triggered = false, this.previouslyFocused = -1, this.enabledDisposables = new q(), this.disposables = new q(), this.updateOptions(e.options);
  }
  updateOptions(e) {
    e.typeNavigationEnabled ?? true ? this.enable() : this.disable(), this.mode = e.typeNavigationMode ?? 0;
  }
  trigger() {
    this.triggered = !this.triggered;
  }
  enable() {
    if (this.enabled) return;
    let e = false;
    const t = A.chain(this.enabledDisposables.add(new ce(this.view.domNode, "keydown")).event, (n) => n.filter((r) => !Gt(r.target)).filter(() => this.mode === 0 || this.triggered).map((r) => new Oe(r)).filter((r) => e || this.keyboardNavigationEventFilter(r)).filter((r) => this.delegate.mightProducePrintableCharacter(r)).forEach((r) => fe.stop(r, true)).map((r) => r.browserEvent.key)), i = A.debounce(t, () => null, 800, void 0, void 0, void 0, this.enabledDisposables);
    A.reduce(A.any(t, i), (n, r) => r === null ? null : (n || "") + r, void 0, this.enabledDisposables)(this.onInput, this, this.enabledDisposables), i(this.onClear, this, this.enabledDisposables), t(() => e = true, void 0, this.enabledDisposables), i(() => e = false, void 0, this.enabledDisposables), this.enabled = true, this.triggered = false;
  }
  disable() {
    this.enabled && (this.enabledDisposables.clear(), this.enabled = false, this.triggered = false);
  }
  onClear() {
    const e = this.list.getFocus();
    if (e.length > 0 && e[0] === this.previouslyFocused) {
      const t = this.list.options.accessibilityProvider?.getAriaLabel(this.list.element(e[0]));
      typeof t == "string" ? zs(t) : t && zs(t.get());
    }
    this.previouslyFocused = -1;
  }
  onInput(e) {
    if (!e) {
      this.state = 0, this.triggered = false;
      return;
    }
    const t = this.list.getFocus(), i = t.length > 0 ? t[0] : 0, s = this.state === 0 ? 1 : 0;
    this.state = 1;
    for (let n = 0; n < this.list.length; n++) {
      const r = (i + n + s) % this.list.length, o = this.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(this.view.element(r)), a = o && o.toString();
      if (this.list.options.typeNavigationEnabled) {
        if (typeof a < "u") {
          if (Kn(e, a)) {
            this.previouslyFocused = i, this.list.setFocus([r]), this.list.reveal(r);
            return;
          }
          const c = Cg(e, a);
          if (c && c[0].end - c[0].start > 1 && c.length === 1) {
            this.previouslyFocused = i, this.list.setFocus([r]), this.list.reveal(r);
            return;
          }
        }
      } else if (typeof a > "u" || Kn(e, a)) {
        this.previouslyFocused = i, this.list.setFocus([r]), this.list.reveal(r);
        return;
      }
    }
  }
  dispose() {
    this.disable(), this.enabledDisposables.dispose(), this.disposables.dispose();
  }
}, O2 = class {
  constructor(e, t) {
    this.list = e, this.view = t, this.disposables = new q();
    const i = A.chain(this.disposables.add(new ce(t.domNode, "keydown")).event, (n) => n.filter((r) => !Gt(r.target)).map((r) => new Oe(r)));
    A.chain(i, (n) => n.filter((r) => r.keyCode === 2 && !r.ctrlKey && !r.metaKey && !r.shiftKey && !r.altKey))(this.onTab, this, this.disposables);
  }
  onTab(e) {
    if (e.target !== this.view.domNode) return;
    const t = this.list.getFocus();
    if (t.length === 0) return;
    const i = this.view.domElement(t[0]);
    if (!i) return;
    const s = i.querySelector("[tabIndex]");
    if (!s || !Mt(s) || s.tabIndex === -1) return;
    const n = oe(s).getComputedStyle(s);
    n.visibility === "hidden" || n.display === "none" || (e.preventDefault(), e.stopPropagation(), s.focus());
  }
  dispose() {
    this.disposables.dispose();
  }
};
function F2(e) {
  return Pe ? e.browserEvent.metaKey : e.browserEvent.ctrlKey;
}
function B2(e) {
  return e.browserEvent.shiftKey;
}
function H2(e) {
  return ig(e) && e.button === 2;
}
var qd = { isSelectionSingleChangeEvent: F2, isSelectionRangeChangeEvent: B2 }, Kd = class {
  constructor(e) {
    this.list = e, this.disposables = new q(), this._onPointer = new L(), this.onPointer = this._onPointer.event, e.options.multipleSelectionSupport !== false && (this.multipleSelectionController = this.list.options.multipleSelectionController || qd), this.mouseSupport = typeof e.options.mouseSupport > "u" || !!e.options.mouseSupport, this.mouseSupport && (e.onMouseDown(this.onMouseDown, this, this.disposables), e.onContextMenu(this.onContextMenu, this, this.disposables), e.onMouseDblClick(this.onDoubleClick, this, this.disposables), e.onTouchStart(this.onMouseDown, this, this.disposables), this.disposables.add(qn.addTarget(e.getHTMLElement()))), A.any(e.onMouseClick, e.onMouseMiddleClick, e.onTap)(this.onViewPointer, this, this.disposables);
  }
  updateOptions(e) {
    e.multipleSelectionSupport !== void 0 && (this.multipleSelectionController = void 0, e.multipleSelectionSupport && (this.multipleSelectionController = this.list.options.multipleSelectionController || qd));
  }
  isSelectionSingleChangeEvent(e) {
    return this.multipleSelectionController ? this.multipleSelectionController.isSelectionSingleChangeEvent(e) : false;
  }
  isSelectionRangeChangeEvent(e) {
    return this.multipleSelectionController ? this.multipleSelectionController.isSelectionRangeChangeEvent(e) : false;
  }
  isSelectionChangeEvent(e) {
    return this.isSelectionSingleChangeEvent(e) || this.isSelectionRangeChangeEvent(e);
  }
  onMouseDown(e) {
    qs(e.browserEvent.target) || Qi() !== e.browserEvent.target && this.list.domFocus();
  }
  onContextMenu(e) {
    if (Gt(e.browserEvent.target) || qs(e.browserEvent.target)) return;
    const t = typeof e.index > "u" ? [] : [e.index];
    this.list.setFocus(t, e.browserEvent);
  }
  onViewPointer(e) {
    if (!this.mouseSupport || Gt(e.browserEvent.target) || qs(e.browserEvent.target) || e.browserEvent.isHandledByList) return;
    e.browserEvent.isHandledByList = true;
    const t = e.index;
    if (typeof t > "u") {
      this.list.setFocus([], e.browserEvent), this.list.setSelection([], e.browserEvent), this.list.setAnchor(void 0);
      return;
    }
    if (this.isSelectionChangeEvent(e)) return this.changeSelection(e);
    this.list.setFocus([t], e.browserEvent), this.list.setAnchor(t), H2(e.browserEvent) || this.list.setSelection([t], e.browserEvent), this._onPointer.fire(e);
  }
  onDoubleClick(e) {
    if (Gt(e.browserEvent.target) || qs(e.browserEvent.target) || this.isSelectionChangeEvent(e) || e.browserEvent.isHandledByList) return;
    e.browserEvent.isHandledByList = true;
    const t = this.list.getFocus();
    this.list.setSelection(t, e.browserEvent);
  }
  changeSelection(e) {
    const t = e.index;
    let i = this.list.getAnchor();
    if (this.isSelectionRangeChangeEvent(e)) {
      typeof i > "u" && (i = this.list.getFocus()[0] ?? t, this.list.setAnchor(i));
      const s = Math.min(i, t), n = Math.max(i, t), r = Lr(s, n + 1), o = this.list.getSelection(), a = z2(ya(o, [i]), i);
      if (a.length === 0) return;
      const c = ya(r, W2(o, a));
      this.list.setSelection(c, e.browserEvent), this.list.setFocus([t], e.browserEvent);
    } else if (this.isSelectionSingleChangeEvent(e)) {
      const s = this.list.getSelection(), n = s.filter((r) => r !== t);
      this.list.setFocus([t]), this.list.setAnchor(t), s.length === n.length ? this.list.setSelection([...n, t], e.browserEvent) : this.list.setSelection(n, e.browserEvent);
    }
  }
  dispose() {
    this.disposables.dispose();
  }
}, U2 = class {
  constructor(e, t) {
    this.styleElement = e, this.selectorSuffix = t;
  }
  style(e) {
    const t = this.selectorSuffix && `.${this.selectorSuffix}`, i = [];
    e.listBackground && i.push(`.monaco-list${t} .monaco-list-rows { background: ${e.listBackground}; }`), e.listFocusBackground && (i.push(`.monaco-list${t}:focus .monaco-list-row.focused { background-color: ${e.listFocusBackground}; }`), i.push(`.monaco-list${t}:focus .monaco-list-row.focused:hover { background-color: ${e.listFocusBackground}; }`)), e.listFocusForeground && i.push(`.monaco-list${t}:focus .monaco-list-row.focused { color: ${e.listFocusForeground}; }`), e.listActiveSelectionBackground && (i.push(`.monaco-list${t}:focus .monaco-list-row.selected { background-color: ${e.listActiveSelectionBackground}; }`), i.push(`.monaco-list${t}:focus .monaco-list-row.selected:hover { background-color: ${e.listActiveSelectionBackground}; }`)), e.listActiveSelectionForeground && i.push(`.monaco-list${t}:focus .monaco-list-row.selected { color: ${e.listActiveSelectionForeground}; }`), e.listActiveSelectionIconForeground && i.push(`.monaco-list${t}:focus .monaco-list-row.selected .codicon { color: ${e.listActiveSelectionIconForeground}; }`), e.listFocusAndSelectionBackground && i.push(`
				.monaco-drag-image${t},
				.monaco-list${t}:focus .monaco-list-row.selected.focused { background-color: ${e.listFocusAndSelectionBackground}; }
			`), e.listFocusAndSelectionForeground && i.push(`
				.monaco-drag-image${t},
				.monaco-list${t}:focus .monaco-list-row.selected.focused { color: ${e.listFocusAndSelectionForeground}; }
			`), e.listInactiveFocusForeground && (i.push(`.monaco-list${t} .monaco-list-row.focused { color:  ${e.listInactiveFocusForeground}; }`), i.push(`.monaco-list${t} .monaco-list-row.focused:hover { color:  ${e.listInactiveFocusForeground}; }`)), e.listInactiveSelectionIconForeground && i.push(`.monaco-list${t} .monaco-list-row.focused .codicon { color:  ${e.listInactiveSelectionIconForeground}; }`), e.listInactiveFocusBackground && (i.push(`.monaco-list${t} .monaco-list-row.focused { background-color:  ${e.listInactiveFocusBackground}; }`), i.push(`.monaco-list${t} .monaco-list-row.focused:hover { background-color:  ${e.listInactiveFocusBackground}; }`)), e.listInactiveSelectionBackground && (i.push(`.monaco-list${t} .monaco-list-row.selected { background-color:  ${e.listInactiveSelectionBackground}; }`), i.push(`.monaco-list${t} .monaco-list-row.selected:hover { background-color:  ${e.listInactiveSelectionBackground}; }`)), e.listInactiveSelectionForeground && i.push(`.monaco-list${t} .monaco-list-row.selected { color: ${e.listInactiveSelectionForeground}; }`), e.listHoverBackground && i.push(`.monaco-list${t}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${e.listHoverBackground}; }`), e.listHoverForeground && i.push(`.monaco-list${t}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${e.listHoverForeground}; }`);
    const s = Pt(e.listFocusAndSelectionOutline, Pt(e.listSelectionOutline, e.listFocusOutline ?? ""));
    s && i.push(`.monaco-list${t}:focus .monaco-list-row.focused.selected { outline: 1px solid ${s}; outline-offset: -1px;}`), e.listFocusOutline && i.push(`
				.monaco-drag-image${t},
				.monaco-list${t}:focus .monaco-list-row.focused,
				.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused .monaco-list-row.focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }
			`);
    const n = Pt(e.listSelectionOutline, e.listInactiveFocusOutline ?? "");
    n && i.push(`.monaco-list${t} .monaco-list-row.focused.selected { outline: 1px dotted ${n}; outline-offset: -1px; }`), e.listSelectionOutline && i.push(`.monaco-list${t} .monaco-list-row.selected { outline: 1px dotted ${e.listSelectionOutline}; outline-offset: -1px; }`), e.listInactiveFocusOutline && i.push(`.monaco-list${t} .monaco-list-row.focused { outline: 1px dotted ${e.listInactiveFocusOutline}; outline-offset: -1px; }`), e.listHoverOutline && i.push(`.monaco-list${t} .monaco-list-row:hover { outline: 1px dashed ${e.listHoverOutline}; outline-offset: -1px; }`), e.listDropOverBackground && i.push(`
				.monaco-list${t}.drop-target,
				.monaco-list${t} .monaco-list-rows.drop-target,
				.monaco-list${t} .monaco-list-row.drop-target { background-color: ${e.listDropOverBackground} !important; color: inherit !important; }
			`), e.listDropBetweenBackground && (i.push(`
			.monaco-list${t} .monaco-list-rows.drop-target-before .monaco-list-row:first-child::before,
			.monaco-list${t} .monaco-list-row.drop-target-before::before {
				content: ""; position: absolute; top: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${e.listDropBetweenBackground};
			}`), i.push(`
			.monaco-list${t} .monaco-list-rows.drop-target-after .monaco-list-row:last-child::after,
			.monaco-list${t} .monaco-list-row.drop-target-after::after {
				content: ""; position: absolute; bottom: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${e.listDropBetweenBackground};
			}`)), e.tableColumnsBorder && i.push(`
				.monaco-table > .monaco-split-view2,
				.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: ${e.tableColumnsBorder};
				}

				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: transparent;
				}
			`), e.tableOddRowsBackgroundColor && i.push(`
				.monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr {
					background-color: ${e.tableOddRowsBackgroundColor};
				}
			`), this.styleElement.textContent = i.join(`
`);
  }
}, mb = { listFocusBackground: "#7FB0D0", listActiveSelectionBackground: "#0E639C", listActiveSelectionForeground: "#FFFFFF", listActiveSelectionIconForeground: "#FFFFFF", listFocusAndSelectionOutline: "#90C2F9", listFocusAndSelectionBackground: "#094771", listFocusAndSelectionForeground: "#FFFFFF", listInactiveSelectionBackground: "#3F3F46", listInactiveSelectionIconForeground: "#FFFFFF", listHoverBackground: "#2A2D2E", listDropOverBackground: "#383B3D", listDropBetweenBackground: "#EEEEEE", treeIndentGuidesStroke: "#a9a9a9", treeInactiveIndentGuidesStroke: Ws.fromHex("#a9a9a9").transparent(0.4).toString(), tableColumnsBorder: Ws.fromHex("#cccccc").transparent(0.2).toString(), tableOddRowsBackgroundColor: Ws.fromHex("#cccccc").transparent(0.04).toString(), listBackground: void 0, listFocusForeground: void 0, listInactiveSelectionForeground: void 0, listInactiveFocusForeground: void 0, listInactiveFocusBackground: void 0, listHoverForeground: void 0, listFocusOutline: void 0, listInactiveFocusOutline: void 0, listSelectionOutline: void 0, listHoverOutline: void 0, treeStickyScrollBackground: void 0, treeStickyScrollBorder: void 0, treeStickyScrollShadow: void 0 }, $2 = { keyboardSupport: true, mouseSupport: true, multipleSelectionSupport: true, dnd: { getDragURI() {
  return null;
}, onDragStart() {
}, onDragOver() {
  return false;
}, drop() {
}, dispose() {
} } };
function z2(e, t) {
  const i = e.indexOf(t);
  if (i === -1) return [];
  const s = [];
  let n = i - 1;
  for (; n >= 0 && e[n] === t - (i - n); ) s.push(e[n--]);
  for (s.reverse(), n = i; n < e.length && e[n] === t + (n - i); ) s.push(e[n++]);
  return s;
}
function ya(e, t) {
  const i = [];
  let s = 0, n = 0;
  for (; s < e.length || n < t.length; ) if (s >= e.length) i.push(t[n++]);
  else if (n >= t.length) i.push(e[s++]);
  else if (e[s] === t[n]) {
    i.push(e[s]), s++, n++;
    continue;
  } else e[s] < t[n] ? i.push(e[s++]) : i.push(t[n++]);
  return i;
}
function W2(e, t) {
  const i = [];
  let s = 0, n = 0;
  for (; s < e.length || n < t.length; ) if (s >= e.length) i.push(t[n++]);
  else if (n >= t.length) i.push(e[s++]);
  else if (e[s] === t[n]) {
    s++, n++;
    continue;
  } else e[s] < t[n] ? i.push(e[s++]) : n++;
  return i;
}
var jd = (e, t) => e - t, V2 = class {
  constructor(e, t) {
    this._templateId = e, this.renderers = t;
  }
  get templateId() {
    return this._templateId;
  }
  renderTemplate(e) {
    return this.renderers.map((t) => t.renderTemplate(e));
  }
  renderElement(e, t, i, s) {
    let n = 0;
    for (const r of this.renderers) r.renderElement(e, t, i[n++], s);
  }
  disposeElement(e, t, i, s) {
    let n = 0;
    for (const r of this.renderers) r.disposeElement?.(e, t, i[n], s), n += 1;
  }
  disposeTemplate(e) {
    let t = 0;
    for (const i of this.renderers) i.disposeTemplate(e[t++]);
  }
}, G2 = class {
  constructor(e) {
    this.accessibilityProvider = e, this.templateId = "a18n";
  }
  renderTemplate(e) {
    return { container: e, disposables: new q() };
  }
  renderElement(e, t, i) {
    const s = this.accessibilityProvider.getAriaLabel(e), n = s && typeof s != "string" ? s : ph(s);
    i.disposables.add($n((o) => {
      this.setAriaLabel(o.readObservable(n), i.container);
    }));
    const r = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(e);
    typeof r == "number" ? i.container.setAttribute("aria-level", `${r}`) : i.container.removeAttribute("aria-level");
  }
  setAriaLabel(e, t) {
    e ? t.setAttribute("aria-label", e) : t.removeAttribute("aria-label");
  }
  disposeElement(e, t, i, s) {
    i.disposables.clear();
  }
  disposeTemplate(e) {
    e.disposables.dispose();
  }
}, q2 = class {
  constructor(e, t) {
    this.list = e, this.dnd = t;
  }
  getDragElements(e) {
    const t = this.list.getSelectedElements();
    return t.indexOf(e) > -1 ? t : [e];
  }
  getDragURI(e) {
    return this.dnd.getDragURI(e);
  }
  getDragLabel(e, t) {
    if (this.dnd.getDragLabel) return this.dnd.getDragLabel(e, t);
  }
  onDragStart(e, t) {
    this.dnd.onDragStart?.(e, t);
  }
  onDragOver(e, t, i, s, n) {
    return this.dnd.onDragOver(e, t, i, s, n);
  }
  onDragLeave(e, t, i, s) {
    this.dnd.onDragLeave?.(e, t, i, s);
  }
  onDragEnd(e) {
    this.dnd.onDragEnd?.(e);
  }
  drop(e, t, i, s, n) {
    this.dnd.drop(e, t, i, s, n);
  }
  dispose() {
    this.dnd.dispose();
  }
}, _t = class {
  constructor(e, t, i, s, n = $2) {
    this.user = e, this._options = n, this.focus = new hr("focused"), this.anchor = new hr("anchor"), this.eventBufferer = new Wr(), this._ariaLabel = "", this.disposables = new q(), this._onDidDispose = new L(), this.onDidDispose = this._onDidDispose.event;
    const r = this._options.accessibilityProvider && this._options.accessibilityProvider.getWidgetRole ? this._options.accessibilityProvider?.getWidgetRole() : "list";
    this.selection = new I2(r !== "listbox");
    const o = [this.focus.renderer, this.selection.renderer];
    this.accessibilityProvider = n.accessibilityProvider, this.accessibilityProvider && (o.push(new G2(this.accessibilityProvider)), this.accessibilityProvider.onDidChangeActiveDescendant?.(this.onDidChangeActiveDescendant, this, this.disposables)), s = s.map((c) => new V2(c.templateId, [...o, c]));
    const a = { ...n, dnd: n.dnd && new q2(this, n.dnd) };
    if (this.view = this.createListView(t, i, s, a), this.view.domNode.setAttribute("role", r), n.styleController) this.styleController = n.styleController(this.view.domId);
    else {
      const c = Ns(this.view.domNode);
      this.styleController = new U2(c, this.view.domId);
    }
    if (this.spliceable = new i2([new ba(this.focus, this.view, n.identityProvider), new ba(this.selection, this.view, n.identityProvider), new ba(this.anchor, this.view, n.identityProvider), this.view]), this.disposables.add(this.focus), this.disposables.add(this.selection), this.disposables.add(this.anchor), this.disposables.add(this.view), this.disposables.add(this._onDidDispose), this.disposables.add(new O2(this, this.view)), (typeof n.keyboardSupport != "boolean" || n.keyboardSupport) && (this.keyboardController = new Gd(this, this.view, n), this.disposables.add(this.keyboardController)), n.keyboardNavigationLabelProvider) {
      const c = n.keyboardNavigationDelegate || M2;
      this.typeNavigationController = new P2(this, this.view, n.keyboardNavigationLabelProvider, n.keyboardNavigationEventFilter ?? (() => true), c), this.disposables.add(this.typeNavigationController);
    }
    this.mouseController = this.createMouseController(n), this.disposables.add(this.mouseController), this.onDidChangeFocus(this._onFocusChange, this, this.disposables), this.onDidChangeSelection(this._onSelectionChange, this, this.disposables), this.accessibilityProvider && (this.ariaLabel = this.accessibilityProvider.getWidgetAriaLabel()), this._options.multipleSelectionSupport !== false && this.view.domNode.setAttribute("aria-multiselectable", "true");
  }
  get onDidChangeFocus() {
    return A.map(this.eventBufferer.wrapEvent(this.focus.onChange), (e) => this.toListEvent(e), this.disposables);
  }
  get onDidChangeSelection() {
    return A.map(this.eventBufferer.wrapEvent(this.selection.onChange), (e) => this.toListEvent(e), this.disposables);
  }
  get domId() {
    return this.view.domId;
  }
  get onDidScroll() {
    return this.view.onDidScroll;
  }
  get onMouseClick() {
    return this.view.onMouseClick;
  }
  get onMouseDblClick() {
    return this.view.onMouseDblClick;
  }
  get onMouseMiddleClick() {
    return this.view.onMouseMiddleClick;
  }
  get onPointer() {
    return this.mouseController.onPointer;
  }
  get onMouseUp() {
    return this.view.onMouseUp;
  }
  get onMouseDown() {
    return this.view.onMouseDown;
  }
  get onMouseOver() {
    return this.view.onMouseOver;
  }
  get onMouseMove() {
    return this.view.onMouseMove;
  }
  get onMouseOut() {
    return this.view.onMouseOut;
  }
  get onTouchStart() {
    return this.view.onTouchStart;
  }
  get onTap() {
    return this.view.onTap;
  }
  get onContextMenu() {
    let e = false;
    const t = A.chain(this.disposables.add(new ce(this.view.domNode, "keydown")).event, (n) => n.map((r) => new Oe(r)).filter((r) => e = r.keyCode === 58 || r.shiftKey && r.keyCode === 68).map((r) => fe.stop(r, true)).filter(() => false)), i = A.chain(this.disposables.add(new ce(this.view.domNode, "keyup")).event, (n) => n.forEach(() => e = false).map((r) => new Oe(r)).filter((r) => r.keyCode === 58 || r.shiftKey && r.keyCode === 68).map((r) => fe.stop(r, true)).map(({ browserEvent: r }) => {
      const o = this.getFocus(), a = o.length ? o[0] : void 0, c = typeof a < "u" ? this.view.element(a) : void 0, h = typeof a < "u" ? this.view.domElement(a) : this.view.domNode;
      return { index: a, element: c, anchor: h, browserEvent: r };
    })), s = A.chain(this.view.onContextMenu, (n) => n.filter((r) => !e).map(({ element: r, index: o, browserEvent: a }) => ({ element: r, index: o, anchor: new ri(oe(this.view.domNode), a), browserEvent: a })));
    return A.any(t, i, s);
  }
  get onKeyDown() {
    return this.disposables.add(new ce(this.view.domNode, "keydown")).event;
  }
  get onKeyUp() {
    return this.disposables.add(new ce(this.view.domNode, "keyup")).event;
  }
  get onKeyPress() {
    return this.disposables.add(new ce(this.view.domNode, "keypress")).event;
  }
  get onDidFocus() {
    return A.signal(this.disposables.add(new ce(this.view.domNode, "focus", true)).event);
  }
  get onDidBlur() {
    return A.signal(this.disposables.add(new ce(this.view.domNode, "blur", true)).event);
  }
  createListView(e, t, i, s) {
    return new A2(e, t, i, s);
  }
  createMouseController(e) {
    return new Kd(this);
  }
  updateOptions(e = {}) {
    this._options = { ...this._options, ...e }, this.typeNavigationController?.updateOptions(this._options), this._options.multipleSelectionController !== void 0 && (this._options.multipleSelectionSupport ? this.view.domNode.setAttribute("aria-multiselectable", "true") : this.view.domNode.removeAttribute("aria-multiselectable")), this.mouseController.updateOptions(e), this.keyboardController?.updateOptions(e), this.view.updateOptions(e);
  }
  get options() {
    return this._options;
  }
  splice(e, t, i = []) {
    if (e < 0 || e > this.view.length) throw new wi(this.user, `Invalid start index: ${e}`);
    if (t < 0) throw new wi(this.user, `Invalid delete count: ${t}`);
    t === 0 && i.length === 0 || this.eventBufferer.bufferEvents(() => this.spliceable.splice(e, t, i));
  }
  updateWidth(e) {
    this.view.updateWidth(e);
  }
  updateElementHeight(e, t) {
    this.view.updateElementHeight(e, t, null);
  }
  rerender() {
    this.view.rerender();
  }
  element(e) {
    return this.view.element(e);
  }
  indexOf(e) {
    return this.view.indexOf(e);
  }
  indexAt(e) {
    return this.view.indexAt(e);
  }
  get length() {
    return this.view.length;
  }
  get contentHeight() {
    return this.view.contentHeight;
  }
  get contentWidth() {
    return this.view.contentWidth;
  }
  get onDidChangeContentHeight() {
    return this.view.onDidChangeContentHeight;
  }
  get onDidChangeContentWidth() {
    return this.view.onDidChangeContentWidth;
  }
  get scrollTop() {
    return this.view.getScrollTop();
  }
  set scrollTop(e) {
    this.view.setScrollTop(e);
  }
  get scrollLeft() {
    return this.view.getScrollLeft();
  }
  set scrollLeft(e) {
    this.view.setScrollLeft(e);
  }
  get scrollHeight() {
    return this.view.scrollHeight;
  }
  get renderHeight() {
    return this.view.renderHeight;
  }
  get firstVisibleIndex() {
    return this.view.firstVisibleIndex;
  }
  get firstMostlyVisibleIndex() {
    return this.view.firstMostlyVisibleIndex;
  }
  get lastVisibleIndex() {
    return this.view.lastVisibleIndex;
  }
  get ariaLabel() {
    return this._ariaLabel;
  }
  set ariaLabel(e) {
    this._ariaLabel = e, this.view.domNode.setAttribute("aria-label", e);
  }
  domFocus() {
    this.view.domNode.focus({ preventScroll: true });
  }
  layout(e, t) {
    this.view.layout(e, t);
  }
  triggerTypeNavigation() {
    this.typeNavigationController?.trigger();
  }
  setSelection(e, t) {
    for (const i of e) if (i < 0 || i >= this.length) throw new wi(this.user, `Invalid index ${i}`);
    this.selection.set(e, t);
  }
  getSelection() {
    return this.selection.get();
  }
  getSelectedElements() {
    return this.getSelection().map((e) => this.view.element(e));
  }
  setAnchor(e) {
    if (typeof e > "u") {
      this.anchor.set([]);
      return;
    }
    if (e < 0 || e >= this.length) throw new wi(this.user, `Invalid index ${e}`);
    this.anchor.set([e]);
  }
  getAnchor() {
    return this.anchor.get().at(0);
  }
  getAnchorElement() {
    const e = this.getAnchor();
    return typeof e > "u" ? void 0 : this.element(e);
  }
  setFocus(e, t) {
    for (const i of e) if (i < 0 || i >= this.length) throw new wi(this.user, `Invalid index ${i}`);
    this.focus.set(e, t);
  }
  focusNext(e = 1, t = false, i, s) {
    if (this.length === 0) return;
    const n = this.focus.get(), r = this.findNextIndex(n.length > 0 ? n[0] + e : 0, t, s);
    r > -1 && this.setFocus([r], i);
  }
  focusPrevious(e = 1, t = false, i, s) {
    if (this.length === 0) return;
    const n = this.focus.get(), r = this.findPreviousIndex(n.length > 0 ? n[0] - e : 0, t, s);
    r > -1 && this.setFocus([r], i);
  }
  async focusNextPage(e, t) {
    let i = this.view.indexAt(this.view.getScrollTop() + this.view.renderHeight);
    i = i === 0 ? 0 : i - 1;
    const s = this.getFocus()[0];
    if (s !== i && (s === void 0 || i > s)) {
      const n = this.findPreviousIndex(i, false, t);
      n > -1 && s !== n ? this.setFocus([n], e) : this.setFocus([i], e);
    } else {
      const n = this.view.getScrollTop();
      let r = n + this.view.renderHeight;
      i > s && (r -= this.view.elementHeight(i)), this.view.setScrollTop(r), this.view.getScrollTop() !== n && (this.setFocus([]), await Pn(0), await this.focusNextPage(e, t));
    }
  }
  async focusPreviousPage(e, t, i = () => 0) {
    let s;
    const n = i(), r = this.view.getScrollTop() + n;
    r === 0 ? s = this.view.indexAt(r) : s = this.view.indexAfter(r - 1);
    const o = this.getFocus()[0];
    if (o !== s && (o === void 0 || o >= s)) {
      const a = this.findNextIndex(s, false, t);
      a > -1 && o !== a ? this.setFocus([a], e) : this.setFocus([s], e);
    } else {
      const a = r;
      this.view.setScrollTop(r - this.view.renderHeight - n), this.view.getScrollTop() + i() !== a && (this.setFocus([]), await Pn(0), await this.focusPreviousPage(e, t, i));
    }
  }
  focusLast(e, t) {
    if (this.length === 0) return;
    const i = this.findPreviousIndex(this.length - 1, false, t);
    i > -1 && this.setFocus([i], e);
  }
  focusFirst(e, t) {
    this.focusNth(0, e, t);
  }
  focusNth(e, t, i) {
    if (this.length === 0) return;
    const s = this.findNextIndex(e, false, i);
    s > -1 && this.setFocus([s], t);
  }
  findNextIndex(e, t = false, i) {
    for (let s = 0; s < this.length; s++) {
      if (e >= this.length && !t) return -1;
      if (e = e % this.length, !i || i(this.element(e))) return e;
      e++;
    }
    return -1;
  }
  findPreviousIndex(e, t = false, i) {
    for (let s = 0; s < this.length; s++) {
      if (e < 0 && !t) return -1;
      if (e = (this.length + e % this.length) % this.length, !i || i(this.element(e))) return e;
      e--;
    }
    return -1;
  }
  getFocus() {
    return this.focus.get();
  }
  getFocusedElements() {
    return this.getFocus().map((e) => this.view.element(e));
  }
  reveal(e, t, i = 0) {
    if (e < 0 || e >= this.length) throw new wi(this.user, `Invalid index ${e}`);
    const s = this.view.getScrollTop(), n = this.view.elementTop(e), r = this.view.elementHeight(e);
    if (Or(t)) {
      const o = r - this.view.renderHeight + i;
      this.view.setScrollTop(o * Un(t, 0, 1) + n - i);
    } else {
      const o = n + r, a = s + this.view.renderHeight;
      n < s + i && o >= a || (n < s + i || o >= a && r >= this.view.renderHeight ? this.view.setScrollTop(n - i) : o >= a && this.view.setScrollTop(o - this.view.renderHeight));
    }
  }
  getRelativeTop(e, t = 0) {
    if (e < 0 || e >= this.length) throw new wi(this.user, `Invalid index ${e}`);
    const i = this.view.getScrollTop(), s = this.view.elementTop(e), n = this.view.elementHeight(e);
    if (s < i + t || s + n > i + this.view.renderHeight) return null;
    const r = n - this.view.renderHeight + t;
    return Math.abs((i + t - s) / r);
  }
  isDOMFocused() {
    return Is(this.view.domNode);
  }
  getHTMLElement() {
    return this.view.domNode;
  }
  getScrollableElement() {
    return this.view.scrollableElementDomNode;
  }
  getElementID(e) {
    return this.view.getElementDomId(e);
  }
  getElementTop(e) {
    return this.view.elementTop(e);
  }
  style(e) {
    this.styleController.style(e);
  }
  toListEvent({ indexes: e, browserEvent: t }) {
    return { indexes: e, elements: e.map((i) => this.view.element(i)), browserEvent: t };
  }
  _onFocusChange() {
    const e = this.focus.get();
    this.view.domNode.classList.toggle("element-focused", e.length > 0), this.onDidChangeActiveDescendant();
  }
  onDidChangeActiveDescendant() {
    const e = this.focus.get();
    if (e.length > 0) {
      let t;
      this.accessibilityProvider?.getActiveDescendantId && (t = this.accessibilityProvider.getActiveDescendantId(this.view.element(e[0]))), this.view.domNode.setAttribute("aria-activedescendant", t || this.view.getElementDomId(e[0]));
    } else this.view.domNode.removeAttribute("aria-activedescendant");
  }
  _onSelectionChange() {
    const e = this.selection.get();
    this.view.domNode.classList.toggle("selection-none", e.length === 0), this.view.domNode.classList.toggle("selection-single", e.length === 1), this.view.domNode.classList.toggle("selection-multiple", e.length > 1);
  }
  dispose() {
    this._onDidDispose.fire(), this.disposables.dispose(), this._onDidDispose.dispose();
  }
};
pe([ve], _t.prototype, "onDidChangeFocus", null), pe([ve], _t.prototype, "onDidChangeSelection", null), pe([ve], _t.prototype, "onContextMenu", null), pe([ve], _t.prototype, "onKeyDown", null), pe([ve], _t.prototype, "onKeyUp", null), pe([ve], _t.prototype, "onKeyPress", null), pe([ve], _t.prototype, "onDidFocus", null), pe([ve], _t.prototype, "onDidBlur", null);
var Ci = ie, Yd = "selectOption.entry.template", K2 = class {
  get templateId() {
    return Yd;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return t.root = e, t.text = Z(e, Ci(".option-text")), t.detail = Z(e, Ci(".option-detail")), t.decoratorRight = Z(e, Ci(".option-decorator-right")), t;
  }
  renderElement(e, t, i) {
    const s = i, n = e.text, r = e.detail, o = e.decoratorRight, a = e.isDisabled;
    s.text.textContent = n, s.detail.textContent = r || "", s.decoratorRight.innerText = o || "", a ? s.root.classList.add("option-disabled") : s.root.classList.remove("option-disabled");
  }
  disposeTemplate(e) {
  }
}, wa = class hs extends ee {
  constructor(t, i, s, n, r) {
    super(), this.options = [], this._currentSelection = 0, this._hasDetails = false, this._skipLayout = false, this._sticky = false, this._isVisible = false, this.styles = n, this.selectBoxOptions = r || /* @__PURE__ */ Object.create(null), typeof this.selectBoxOptions.minBottomMargin != "number" ? this.selectBoxOptions.minBottomMargin = hs.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN : this.selectBoxOptions.minBottomMargin < 0 && (this.selectBoxOptions.minBottomMargin = 0), this.selectElement = document.createElement("select"), this.selectElement.className = "monaco-select-box monaco-select-box-dropdown-padding", typeof this.selectBoxOptions.ariaLabel == "string" && this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel), typeof this.selectBoxOptions.ariaDescription == "string" && this.selectElement.setAttribute("aria-description", this.selectBoxOptions.ariaDescription), this._onDidSelect = new L(), this._register(this._onDidSelect), this.registerListeners(), this.constructSelectDropDown(s), this.selected = i || 0, t && this.setOptions(t, i), this.initStyleSheet();
  }
  setTitle(t) {
    !this._hover && t ? this._hover = this._register(ar().setupManagedHover(Ji("mouse"), this.selectElement, t)) : this._hover && this._hover.update(t);
  }
  getHeight() {
    return 22;
  }
  getTemplateId() {
    return Yd;
  }
  constructSelectDropDown(t) {
    this.contextViewProvider = t, this.selectDropDownContainer = ie(".monaco-select-box-dropdown-container"), this.selectDropDownContainer.classList.add("monaco-select-box-dropdown-padding"), this.selectionDetailsPane = Z(this.selectDropDownContainer, Ci(".select-box-details-pane"));
    const i = Z(this.selectDropDownContainer, Ci(".select-box-dropdown-container-width-control")), s = Z(i, Ci(".width-control-div"));
    this.widthControlElement = document.createElement("span"), this.widthControlElement.className = "option-text-width-control", Z(s, this.widthControlElement), this._dropDownPosition = 0, this.styleElement = Ns(this.selectDropDownContainer), this.selectDropDownContainer.setAttribute("draggable", "true"), this._register(O(this.selectDropDownContainer, j.DRAG_START, (n) => {
      fe.stop(n, true);
    }));
  }
  registerListeners() {
    this._register(Vn(this.selectElement, "change", (i) => {
      this.selected = i.target.selectedIndex, this._onDidSelect.fire({ index: i.target.selectedIndex, selected: i.target.value }), this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text);
    })), this._register(O(this.selectElement, j.CLICK, (i) => {
      fe.stop(i), this._isVisible ? this.hideSelectDropDown(true) : this.showSelectDropDown();
    })), this._register(O(this.selectElement, j.MOUSE_DOWN, (i) => {
      fe.stop(i);
    }));
    let t;
    this._register(O(this.selectElement, "touchstart", (i) => {
      t = this._isVisible;
    })), this._register(O(this.selectElement, "touchend", (i) => {
      fe.stop(i), t ? this.hideSelectDropDown(true) : this.showSelectDropDown();
    })), this._register(O(this.selectElement, j.KEY_DOWN, (i) => {
      const s = new Oe(i);
      let n = false;
      Pe ? (s.keyCode === 18 || s.keyCode === 16 || s.keyCode === 10 || s.keyCode === 3) && (n = true) : (s.keyCode === 18 && s.altKey || s.keyCode === 16 && s.altKey || s.keyCode === 10 || s.keyCode === 3) && (n = true), n && (this.showSelectDropDown(), fe.stop(i, true));
    }));
  }
  get onDidSelect() {
    return this._onDidSelect.event;
  }
  setOptions(t, i) {
    vs(this.options, t, j2) || (this.options = t, this.selectElement.options.length = 0, this._hasDetails = false, this._cachedMaxDetailsHeight = void 0, this.options.forEach((s, n) => {
      this.selectElement.add(this.createOption(s.text, n, s.isDisabled)), typeof s.description == "string" && (this._hasDetails = true);
    })), i !== void 0 && (this.select(i), this._currentSelection = this.selected);
  }
  setEnabled(t) {
    this.selectElement.disabled = !t;
  }
  setOptionsList() {
    this.selectList?.splice(0, this.selectList.length, this.options);
  }
  select(t) {
    t >= 0 && t < this.options.length ? this.selected = t : t > this.options.length - 1 ? this.select(this.options.length - 1) : this.selected < 0 && (this.selected = 0), this.selectElement.selectedIndex = this.selected, this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text);
  }
  setAriaLabel(t) {
    this.selectBoxOptions.ariaLabel = t, this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel);
  }
  focus() {
    this.selectElement && (this.selectElement.tabIndex = 0, this.selectElement.focus());
  }
  blur() {
    this.selectElement && (this.selectElement.tabIndex = -1, this.selectElement.blur());
  }
  setFocusable(t) {
    this.selectElement.tabIndex = t ? 0 : -1;
  }
  render(t) {
    this.container = t, t.classList.add("select-container"), t.appendChild(this.selectElement), this.styleSelectElement();
  }
  initStyleSheet() {
    const t = [];
    this.styles.listFocusBackground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { background-color: ${this.styles.listFocusBackground} !important; }`), this.styles.listFocusForeground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { color: ${this.styles.listFocusForeground} !important; }`), this.styles.decoratorRightForeground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.focused) .option-decorator-right { color: ${this.styles.decoratorRightForeground}; }`), this.styles.selectBackground && this.styles.selectBorder && this.styles.selectBorder !== this.styles.selectBackground ? (t.push(`.monaco-select-box-dropdown-container { border: 1px solid ${this.styles.selectBorder} } `), t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectBorder} } `), t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectBorder} } `)) : this.styles.selectListBorder && (t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectListBorder} } `), t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectListBorder} } `)), this.styles.listHoverForeground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { color: ${this.styles.listHoverForeground} !important; }`), this.styles.listHoverBackground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { background-color: ${this.styles.listHoverBackground} !important; }`), this.styles.listFocusOutline && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { outline: 1.6px dotted ${this.styles.listFocusOutline} !important; outline-offset: -1.6px !important; }`), this.styles.listHoverOutline && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { outline: 1.6px dashed ${this.styles.listHoverOutline} !important; outline-offset: -1.6px !important; }`), t.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled.focused { background-color: transparent !important; color: inherit !important; outline: none !important; }"), t.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled:hover { background-color: transparent !important; color: inherit !important; outline: none !important; }"), this.styleElement.textContent = t.join(`
`);
  }
  styleSelectElement() {
    const t = this.styles.selectBackground ?? "", i = this.styles.selectForeground ?? "", s = this.styles.selectBorder ?? "";
    this.selectElement.style.backgroundColor = t, this.selectElement.style.color = i, this.selectElement.style.borderColor = s;
  }
  styleList() {
    const t = this.styles.selectBackground ?? "", i = Pt(this.styles.selectListBackground, t);
    this.selectDropDownListContainer.style.backgroundColor = i, this.selectionDetailsPane.style.backgroundColor = i;
    const s = this.styles.focusBorder ?? "";
    this.selectDropDownContainer.style.outlineColor = s, this.selectDropDownContainer.style.outlineOffset = "-1px", this.selectList.style(this.styles);
  }
  createOption(t, i, s) {
    const n = document.createElement("option");
    return n.value = t, n.text = t, n.disabled = !!s, n;
  }
  showSelectDropDown() {
    this.selectionDetailsPane.innerText = "", !(!this.contextViewProvider || this._isVisible) && (this.createSelectList(this.selectDropDownContainer), this.setOptionsList(), this.contextViewProvider.showContextView({ getAnchor: () => this.selectElement, render: (t) => this.renderSelectDropDown(t, true), layout: () => {
      this.layoutSelectDropDown();
    }, onHide: () => {
      this.selectDropDownContainer.classList.remove("visible"), this.selectElement.classList.remove("synthetic-focus");
    }, anchorPosition: this._dropDownPosition }, this.selectBoxOptions.optionsAsChildren ? this.container : void 0), this._isVisible = true, this.hideSelectDropDown(false), this.contextViewProvider.showContextView({ getAnchor: () => this.selectElement, render: (t) => this.renderSelectDropDown(t), layout: () => this.layoutSelectDropDown(), onHide: () => {
      this.selectDropDownContainer.classList.remove("visible"), this.selectElement.classList.remove("synthetic-focus");
    }, anchorPosition: this._dropDownPosition }, this.selectBoxOptions.optionsAsChildren ? this.container : void 0), this._currentSelection = this.selected, this._isVisible = true, this.selectElement.setAttribute("aria-expanded", "true"));
  }
  hideSelectDropDown(t) {
    !this.contextViewProvider || !this._isVisible || (this._isVisible = false, this.selectElement.setAttribute("aria-expanded", "false"), t && this.selectElement.focus(), this.contextViewProvider.hideContextView());
  }
  renderSelectDropDown(t, i) {
    return t.appendChild(this.selectDropDownContainer), this.layoutSelectDropDown(i), { dispose: () => {
      this.selectDropDownContainer.remove();
    } };
  }
  measureMaxDetailsHeight() {
    let t = 0;
    return this.options.forEach((i, s) => {
      this.updateDetail(s), this.selectionDetailsPane.offsetHeight > t && (t = this.selectionDetailsPane.offsetHeight);
    }), t;
  }
  layoutSelectDropDown(t) {
    if (this._skipLayout) return false;
    if (this.selectList) {
      this.selectDropDownContainer.classList.add("visible");
      const i = oe(this.selectElement), s = Oh(this.selectElement), n = oe(this.selectElement).getComputedStyle(this.selectElement), r = parseFloat(n.getPropertyValue("--dropdown-padding-top")) + parseFloat(n.getPropertyValue("--dropdown-padding-bottom")), o = i.innerHeight - s.top - s.height - (this.selectBoxOptions.minBottomMargin || 0), a = s.top - hs.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN, c = this.selectElement.offsetWidth, h = this.setWidthControlElement(this.widthControlElement), d = Math.max(h, Math.round(c)).toString() + "px";
      this.selectDropDownContainer.style.width = d, this.selectList.getHTMLElement().style.height = "", this.selectList.layout();
      let u = this.selectList.contentHeight;
      this._hasDetails && this._cachedMaxDetailsHeight === void 0 && (this._cachedMaxDetailsHeight = this.measureMaxDetailsHeight());
      const f = this._hasDetails ? this._cachedMaxDetailsHeight : 0, p = u + r + f, m = Math.floor((o - r - f) / this.getHeight()), _ = Math.floor((a - r - f) / this.getHeight());
      if (t) return s.top + s.height > i.innerHeight - 22 || s.top < hs.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || m < 1 && _ < 1 ? false : (m < hs.DEFAULT_MINIMUM_VISIBLE_OPTIONS && _ > m && this.options.length > m ? (this._dropDownPosition = 1, this.selectDropDownListContainer.remove(), this.selectionDetailsPane.remove(), this.selectDropDownContainer.appendChild(this.selectionDetailsPane), this.selectDropDownContainer.appendChild(this.selectDropDownListContainer), this.selectionDetailsPane.classList.remove("border-top"), this.selectionDetailsPane.classList.add("border-bottom")) : (this._dropDownPosition = 0, this.selectDropDownListContainer.remove(), this.selectionDetailsPane.remove(), this.selectDropDownContainer.appendChild(this.selectDropDownListContainer), this.selectDropDownContainer.appendChild(this.selectionDetailsPane), this.selectionDetailsPane.classList.remove("border-bottom"), this.selectionDetailsPane.classList.add("border-top")), true);
      if (s.top + s.height > i.innerHeight - 22 || s.top < hs.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || this._dropDownPosition === 0 && m < 1 || this._dropDownPosition === 1 && _ < 1) return this.hideSelectDropDown(true), false;
      if (this._dropDownPosition === 0) {
        if (this._isVisible && m + _ < 1) return this.hideSelectDropDown(true), false;
        p > o && (u = m * this.getHeight());
      } else p > a && (u = _ * this.getHeight());
      return this.selectList.layout(u), this.selectList.domFocus(), this.selectList.length > 0 && (this.selectList.setFocus([this.selected || 0]), this.selectList.reveal(this.selectList.getFocus()[0] || 0)), this._hasDetails ? (this.selectList.getHTMLElement().style.height = u + r + "px", this.selectDropDownContainer.style.height = "") : this.selectDropDownContainer.style.height = u + r + "px", this.updateDetail(this.selected), this.selectDropDownContainer.style.width = d, this.selectDropDownListContainer.setAttribute("tabindex", "0"), this.selectElement.classList.add("synthetic-focus"), this.selectDropDownContainer.classList.add("synthetic-focus"), true;
    } else return false;
  }
  setWidthControlElement(t) {
    let i = 0;
    if (t) {
      let s = 0, n = 0;
      this.options.forEach((r, o) => {
        const a = r.detail ? r.detail.length : 0, c = r.decoratorRight ? r.decoratorRight.length : 0, h = r.text.length + a + c;
        h > n && (s = o, n = h);
      }), t.textContent = this.options[s].text + (this.options[s].decoratorRight ? this.options[s].decoratorRight + " " : ""), i = Mo(t);
    }
    return i;
  }
  createSelectList(t) {
    if (this.selectList) return;
    this.selectDropDownListContainer = Z(t, Ci(".select-box-dropdown-list-container")), this.listRenderer = new K2(), this.selectList = this._register(new _t("SelectBoxCustom", this.selectDropDownListContainer, this, [this.listRenderer], { useShadows: false, verticalScrollMode: 3, keyboardSupport: false, mouseSupport: false, accessibilityProvider: { getAriaLabel: (n) => {
      let r = n.text;
      return n.detail && (r += `. ${n.detail}`), n.decoratorRight && (r += `. ${n.decoratorRight}`), n.description && (r += `. ${n.description}`), r;
    }, getWidgetAriaLabel: () => W(28, null), getRole: () => Pe ? "" : "option", getWidgetRole: () => "listbox" } })), this.selectBoxOptions.ariaLabel && (this.selectList.ariaLabel = this.selectBoxOptions.ariaLabel);
    const i = this._register(new ce(this.selectDropDownListContainer, "keydown")), s = A.chain(i.event, (n) => n.filter(() => this.selectList.length > 0).map((r) => new Oe(r)));
    this._register(A.chain(s, (n) => n.filter((r) => r.keyCode === 3))(this.onEnter, this)), this._register(A.chain(s, (n) => n.filter((r) => r.keyCode === 2))(this.onEnter, this)), this._register(A.chain(s, (n) => n.filter((r) => r.keyCode === 9))(this.onEscape, this)), this._register(A.chain(s, (n) => n.filter((r) => r.keyCode === 16))(this.onUpArrow, this)), this._register(A.chain(s, (n) => n.filter((r) => r.keyCode === 18))(this.onDownArrow, this)), this._register(A.chain(s, (n) => n.filter((r) => r.keyCode === 12))(this.onPageDown, this)), this._register(A.chain(s, (n) => n.filter((r) => r.keyCode === 11))(this.onPageUp, this)), this._register(A.chain(s, (n) => n.filter((r) => r.keyCode === 14))(this.onHome, this)), this._register(A.chain(s, (n) => n.filter((r) => r.keyCode === 13))(this.onEnd, this)), this._register(A.chain(s, (n) => n.filter((r) => r.keyCode >= 21 && r.keyCode <= 56 || r.keyCode >= 85 && r.keyCode <= 113))(this.onCharacter, this)), this._register(O(this.selectList.getHTMLElement(), j.POINTER_UP, (n) => this.onPointerUp(n))), this._register(this.selectList.onMouseOver((n) => typeof n.index < "u" && this.selectList.setFocus([n.index]))), this._register(this.selectList.onDidChangeFocus((n) => this.onListFocus(n))), this._register(O(this.selectDropDownContainer, j.FOCUS_OUT, (n) => {
      !this._isVisible || Zi(n.relatedTarget, this.selectDropDownContainer) || this.onListBlur();
    })), this.selectList.getHTMLElement().setAttribute("aria-label", this.selectBoxOptions.ariaLabel || ""), this.selectList.getHTMLElement().setAttribute("aria-expanded", "true"), this.styleList();
  }
  onPointerUp(t) {
    if (!this.selectList.length) return;
    fe.stop(t);
    const i = t.target;
    if (!i || i.classList.contains("slider")) return;
    const s = i.closest(".monaco-list-row");
    if (!s) return;
    const n = Number(s.getAttribute("data-index")), r = s.classList.contains("option-disabled");
    n >= 0 && n < this.options.length && !r && (this.selected = n, this.select(this.selected), this.selectList.setFocus([this.selected]), this.selectList.reveal(this.selectList.getFocus()[0]), this.selected !== this._currentSelection && (this._currentSelection = this.selected, this._onDidSelect.fire({ index: this.selectElement.selectedIndex, selected: this.options[this.selected].text }), this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text)), this.hideSelectDropDown(true));
  }
  onListBlur() {
    this._sticky || (this.selected !== this._currentSelection && this.select(this._currentSelection), this.hideSelectDropDown(false));
  }
  renderDescriptionMarkdown(t, i) {
    const s = (r) => {
      for (let o = 0; o < r.childNodes.length; o++) {
        const a = r.childNodes.item(o);
        (a.tagName && a.tagName.toLowerCase()) === "img" ? a.remove() : s(a);
      }
    }, n = Nm({ value: t, supportThemeIcons: true }, { actionHandler: i });
    return n.element.classList.add("select-box-description-markdown"), s(n.element), n.element;
  }
  onListFocus(t) {
    !this._isVisible || !this._hasDetails || this.updateDetail(t.indexes[0]);
  }
  updateDetail(t) {
    this.selectionDetailsPane.innerText = "";
    const i = this.options[t], s = i?.description ?? "", n = i?.descriptionIsMarkdown ?? false;
    if (s) {
      if (n) {
        const r = i.descriptionMarkdownActionHandler;
        this.selectionDetailsPane.appendChild(this.renderDescriptionMarkdown(s, r));
      } else this.selectionDetailsPane.innerText = s;
      this.selectionDetailsPane.style.display = "block";
    } else this.selectionDetailsPane.style.display = "none";
    this._skipLayout = true, this.contextViewProvider.layout(), this._skipLayout = false;
  }
  onEscape(t) {
    fe.stop(t), this.select(this._currentSelection), this.hideSelectDropDown(true);
  }
  onEnter(t) {
    fe.stop(t), this.selected !== this._currentSelection && (this._currentSelection = this.selected, this._onDidSelect.fire({ index: this.selectElement.selectedIndex, selected: this.options[this.selected].text }), this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text)), this.hideSelectDropDown(true);
  }
  onDownArrow(t) {
    if (this.selected < this.options.length - 1) {
      fe.stop(t, true);
      const i = this.options[this.selected + 1].isDisabled;
      if (i && this.options.length > this.selected + 2) this.selected += 2;
      else {
        if (i) return;
        this.selected++;
      }
      this.select(this.selected), this.selectList.setFocus([this.selected]), this.selectList.reveal(this.selectList.getFocus()[0]);
    }
  }
  onUpArrow(t) {
    this.selected > 0 && (fe.stop(t, true), this.options[this.selected - 1].isDisabled && this.selected > 1 ? this.selected -= 2 : this.selected--, this.select(this.selected), this.selectList.setFocus([this.selected]), this.selectList.reveal(this.selectList.getFocus()[0]));
  }
  onPageUp(t) {
    fe.stop(t), this.selectList.focusPreviousPage(), setTimeout(() => {
      this.selected = this.selectList.getFocus()[0], this.options[this.selected].isDisabled && this.selected < this.options.length - 1 && (this.selected++, this.selectList.setFocus([this.selected])), this.selectList.reveal(this.selected), this.select(this.selected);
    }, 1);
  }
  onPageDown(t) {
    fe.stop(t), this.selectList.focusNextPage(), setTimeout(() => {
      this.selected = this.selectList.getFocus()[0], this.options[this.selected].isDisabled && this.selected > 0 && (this.selected--, this.selectList.setFocus([this.selected])), this.selectList.reveal(this.selected), this.select(this.selected);
    }, 1);
  }
  onHome(t) {
    fe.stop(t), !(this.options.length < 2) && (this.selected = 0, this.options[this.selected].isDisabled && this.selected > 1 && this.selected++, this.selectList.setFocus([this.selected]), this.selectList.reveal(this.selected), this.select(this.selected));
  }
  onEnd(t) {
    fe.stop(t), !(this.options.length < 2) && (this.selected = this.options.length - 1, this.options[this.selected].isDisabled && this.selected > 1 && this.selected--, this.selectList.setFocus([this.selected]), this.selectList.reveal(this.selected), this.select(this.selected));
  }
  onCharacter(t) {
    const i = xn.toString(t.keyCode);
    let s = -1;
    for (let n = 0; n < this.options.length - 1; n++) if (s = (n + this.selected + 1) % this.options.length, this.options[s].text.charAt(0).toUpperCase() === i && !this.options[s].isDisabled) {
      this.select(s), this.selectList.setFocus([s]), this.selectList.reveal(this.selectList.getFocus()[0]), fe.stop(t);
      break;
    }
  }
  dispose() {
    this.hideSelectDropDown(false), super.dispose();
  }
};
wa.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN = 32, wa.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN = 2, wa.DEFAULT_MINIMUM_VISIBLE_OPTIONS = 3;
function j2(e, t) {
  return e.text === t.text && e.detail === t.detail && e.decoratorRight === t.decoratorRight && e.description === t.description && e.descriptionIsMarkdown === t.descriptionIsMarkdown && e.descriptionMarkdownActionHandler === t.descriptionMarkdownActionHandler && e.isDisabled === t.isDisabled;
}
var _a = class extends ee {
  constructor(e, t = "", i = "", s = true, n) {
    super(), this._onDidChange = this._register(new L()), this.onDidChange = this._onDidChange.event, this._enabled = true, this._id = e, this._label = t, this._cssClass = i, this._enabled = s, this._actionCallback = n;
  }
  get id() {
    return this._id;
  }
  get label() {
    return this._label;
  }
  set label(e) {
    this._setLabel(e);
  }
  _setLabel(e) {
    this._label !== e && (this._label = e, this._onDidChange.fire({ label: e }));
  }
  get tooltip() {
    return this._tooltip || "";
  }
  set tooltip(e) {
    this._setTooltip(e);
  }
  _setTooltip(e) {
    this._tooltip !== e && (this._tooltip = e, this._onDidChange.fire({ tooltip: e }));
  }
  get class() {
    return this._cssClass;
  }
  set class(e) {
    this._setClass(e);
  }
  _setClass(e) {
    this._cssClass !== e && (this._cssClass = e, this._onDidChange.fire({ class: e }));
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e) {
    this._setEnabled(e);
  }
  _setEnabled(e) {
    this._enabled !== e && (this._enabled = e, this._onDidChange.fire({ enabled: e }));
  }
  get checked() {
    return this._checked;
  }
  set checked(e) {
    this._setChecked(e);
  }
  _setChecked(e) {
    this._checked !== e && (this._checked = e, this._onDidChange.fire({ checked: e }));
  }
  async run(e, t) {
    this._actionCallback && await this._actionCallback(e);
  }
}, Xd = class extends ee {
  constructor() {
    super(...arguments), this._onWillRun = this._register(new L()), this.onWillRun = this._onWillRun.event, this._onDidRun = this._register(new L()), this.onDidRun = this._onDidRun.event;
  }
  async run(e, t) {
    if (!e.enabled) return;
    this._onWillRun.fire({ action: e });
    let i;
    try {
      await this.runAction(e, t);
    } catch (s) {
      i = s;
    }
    this._onDidRun.fire({ action: e, error: i });
  }
  async runAction(e, t) {
    await e.run(t);
  }
}, Zd = class Ja {
  constructor() {
    this.id = Ja.ID, this.label = "", this.tooltip = "", this.class = "separator", this.enabled = false, this.checked = false;
  }
  static join(...t) {
    let i = [];
    for (const s of t) s.length && (i.length ? i = [...i, new Ja(), ...s] : i = s);
    return i;
  }
  async run() {
  }
};
Zd.ID = "vs.actions.separator";
var dr = Zd, Y2 = class Hu extends _a {
  constructor() {
    super(Hu.ID, W(44, null), void 0, false);
  }
};
Y2.ID = "vs.actions.empty";
var Di = class extends ee {
  constructor(e, t, i = {}) {
    super(), this.options = i, this.elementDisposables = this._register(new q()), this._context = e || this, this._action = t, t instanceof _a && this._register(t.onDidChange((s) => {
      this.element && this.handleActionChangeEvent(s);
    }));
  }
  get action() {
    return this._action;
  }
  handleActionChangeEvent(e) {
    e.enabled !== void 0 && this.updateEnabled(), e.checked !== void 0 && this.updateChecked(), e.class !== void 0 && this.updateClass(), e.label !== void 0 && (this.updateLabel(), this.updateTooltip()), e.tooltip !== void 0 && this.updateTooltip();
  }
  get actionRunner() {
    return this._actionRunner || (this._actionRunner = this._register(new Xd())), this._actionRunner;
  }
  set actionRunner(e) {
    this._actionRunner = e;
  }
  isEnabled() {
    return this._action.enabled;
  }
  setActionContext(e) {
    this._context = e;
  }
  render(e) {
    this.elementDisposables.clear();
    const t = this.element = e;
    this._register(qn.addTarget(e));
    const i = this.options && this.options.draggable;
    i && (e.draggable = true, yn && this.elementDisposables.add(O(e, j.DRAG_START, (s) => s.dataTransfer?.setData(qh.TEXT, this._action.label)))), this.elementDisposables.add(O(t, Ve.Tap, (s) => this.onClick(s, true))), this.elementDisposables.add(O(t, j.MOUSE_DOWN, (s) => {
      i || fe.stop(s, true), this._action.enabled && s.button === 0 && t.classList.add("active");
    })), Pe && this.elementDisposables.add(O(t, j.CONTEXT_MENU, (s) => {
      s.button === 0 && s.ctrlKey === true && this.onClick(s);
    })), this.elementDisposables.add(O(t, j.CLICK, (s) => {
      fe.stop(s, true), this.options && this.options.isMenu || this.onClick(s);
    })), this.elementDisposables.add(O(t, j.DBLCLICK, (s) => {
      fe.stop(s, true);
    })), [j.MOUSE_UP, j.MOUSE_OUT].forEach((s) => {
      this.elementDisposables.add(O(t, s, (n) => {
        fe.stop(n), t.classList.remove("active");
      }));
    });
  }
  onClick(e, t = false) {
    fe.stop(e, true);
    const i = mn(this._context) ? this.options?.useEventAsContext ? e : { preserveFocus: t } : this._context;
    this.actionRunner.run(this._action, i);
  }
  focus() {
    this.element && (this.element.tabIndex = 0, this.element.focus(), this.element.classList.add("focused"));
  }
  isFocused() {
    return !!this.element?.classList.contains("focused");
  }
  blur() {
    this.element && (this.element.blur(), this.element.tabIndex = -1, this.element.classList.remove("focused"));
  }
  setFocusable(e) {
    this.element && (this.element.tabIndex = e ? 0 : -1);
  }
  get trapsArrowNavigation() {
    return false;
  }
  updateEnabled() {
  }
  updateLabel() {
  }
  getClass() {
    return this.action.class;
  }
  getTooltip() {
    return this.action.tooltip;
  }
  updateTooltip() {
    if (!this.element) return;
    const e = this.getTooltip() ?? "";
    if (this.updateAriaLabel(), this.options.hoverDelegate?.showNativeHover) this.element.title = e;
    else if (!this.customHover && e !== "") {
      const t = this.options.hoverDelegate ?? Ji("element");
      this.customHover = this._store.add(ar().setupManagedHover(t, this.element, e));
    } else this.customHover && this.customHover.update(e);
  }
  updateAriaLabel() {
    if (this.element) {
      const e = this.getTooltip() ?? "";
      this.element.setAttribute("aria-label", e);
    }
  }
  updateClass() {
  }
  updateChecked() {
  }
  dispose() {
    this.element && (this.element.remove(), this.element = void 0), this._context = void 0, super.dispose();
  }
}, X2 = class extends Di {
  constructor(e, t, i) {
    super(e, t, i), this.options = i, this.options.icon = i.icon !== void 0 ? i.icon : false, this.options.label = i.label !== void 0 ? i.label : true, this.cssClass = "";
  }
  render(e) {
    super.render(e), C1(this.element);
    const t = document.createElement("a");
    if (t.classList.add("action-label"), t.setAttribute("role", this.getDefaultAriaRole()), this.label = t, this.element.appendChild(t), this.options.label && this.options.keybinding && !this.options.keybindingNotRenderedWithLabel) {
      const i = document.createElement("span");
      i.classList.add("keybinding"), i.textContent = this.options.keybinding, this.element.appendChild(i);
    }
    this.updateClass(), this.updateLabel(), this.updateTooltip(), this.updateEnabled(), this.updateChecked();
  }
  getDefaultAriaRole() {
    return this._action.id === dr.ID ? "presentation" : this.options.isMenu ? "menuitem" : this.options.isTabList ? "tab" : "button";
  }
  focus() {
    this.label && (this.label.tabIndex = 0, this.label.focus());
  }
  isFocused() {
    return !!this.label && this.label?.tabIndex === 0;
  }
  blur() {
    this.label && (this.label.tabIndex = -1);
  }
  setFocusable(e) {
    this.label && (this.label.tabIndex = e ? 0 : -1);
  }
  updateLabel() {
    this.options.label && this.label && (this.label.textContent = this.action.label);
  }
  getTooltip() {
    let e = null;
    return this.action.tooltip ? e = this.action.tooltip : this.action.label && (e = this.action.label, this.options.keybinding && (e = W(0, null, e, this.options.keybinding))), e ?? void 0;
  }
  updateClass() {
    this.cssClass && this.label && this.label.classList.remove(...this.cssClass.split(" ")), this.options.icon ? (this.cssClass = this.getClass(), this.label && (this.label.classList.add("codicon"), this.cssClass && this.label.classList.add(...this.cssClass.split(" "))), this.updateEnabled()) : this.label?.classList.remove("codicon");
  }
  updateEnabled() {
    this.action.enabled ? (this.label && (this.label.removeAttribute("aria-disabled"), this.label.classList.remove("disabled")), this.element?.classList.remove("disabled")) : (this.label && (this.label.setAttribute("aria-disabled", "true"), this.label.classList.add("disabled")), this.element?.classList.add("disabled"));
  }
  updateAriaLabel() {
    if (this.label) {
      const e = this.getTooltip() ?? "";
      this.label.setAttribute("aria-label", e);
    }
  }
  updateChecked() {
    this.label && (this.action.checked !== void 0 ? (this.label.classList.toggle("checked", this.action.checked), this.options.isTabList ? this.label.setAttribute("aria-selected", this.action.checked ? "true" : "false") : (this.label.setAttribute("aria-checked", this.action.checked ? "true" : "false"), this.label.setAttribute("role", "checkbox"))) : (this.label.classList.remove("checked"), this.label.removeAttribute(this.options.isTabList ? "aria-selected" : "aria-checked"), this.label.setAttribute("role", this.getDefaultAriaRole())));
  }
}, Qd = class extends ee {
  constructor(e, t = {}) {
    super(), this._actionRunnerDisposables = this._register(new q()), this.viewItemDisposables = this._register(new L1()), this.triggerKeyDown = false, this.focusable = true, this._onDidBlur = this._register(new L()), this.onDidBlur = this._onDidBlur.event, this._onDidCancel = this._register(new L({ onWillAddFirstListener: () => this.cancelHasListener = true })), this.onDidCancel = this._onDidCancel.event, this.cancelHasListener = false, this._onDidRun = this._register(new L()), this.onDidRun = this._onDidRun.event, this._onWillRun = this._register(new L()), this.onWillRun = this._onWillRun.event, this.options = t, this._context = t.context ?? null, this._orientation = this.options.orientation ?? 0, this._triggerKeys = { keyDown: this.options.triggerKeys?.keyDown ?? false, keys: this.options.triggerKeys?.keys ?? [3, 10] }, this._hoverDelegate = t.hoverDelegate ?? this._register($o()), this.options.actionRunner ? this._actionRunner = this.options.actionRunner : (this._actionRunner = new Xd(), this._actionRunnerDisposables.add(this._actionRunner)), this._actionRunnerDisposables.add(this._actionRunner.onDidRun((n) => this._onDidRun.fire(n))), this._actionRunnerDisposables.add(this._actionRunner.onWillRun((n) => this._onWillRun.fire(n))), this.viewItems = [], this.focusedItem = void 0, this.domNode = document.createElement("div"), this.domNode.className = "monaco-action-bar";
    let i, s;
    switch (this._orientation) {
      case 0:
        i = [15], s = [17];
        break;
      case 1:
        i = [16], s = [18], this.domNode.className += " vertical";
        break;
    }
    this._register(O(this.domNode, j.KEY_DOWN, (n) => {
      const r = new Oe(n);
      let o = true;
      const a = typeof this.focusedItem == "number" ? this.viewItems[this.focusedItem] : void 0;
      i && (r.equals(i[0]) || r.equals(i[1])) ? o = this.focusPrevious() : s && (r.equals(s[0]) || r.equals(s[1])) ? o = this.focusNext() : r.equals(9) && this.cancelHasListener ? this._onDidCancel.fire() : r.equals(14) ? o = this.focusFirst() : r.equals(13) ? o = this.focusLast() : r.equals(2) && a instanceof Di && a.trapsArrowNavigation ? o = this.focusNext(void 0, true) : this.isTriggerKeyEvent(r) ? this._triggerKeys.keyDown ? this.doTrigger(r) : this.triggerKeyDown = true : o = false, o && (r.preventDefault(), r.stopPropagation());
    })), this._register(O(this.domNode, j.KEY_UP, (n) => {
      const r = new Oe(n);
      this.isTriggerKeyEvent(r) ? (!this._triggerKeys.keyDown && this.triggerKeyDown && (this.triggerKeyDown = false, this.doTrigger(r)), r.preventDefault(), r.stopPropagation()) : (r.equals(2) || r.equals(1026) || r.equals(16) || r.equals(18) || r.equals(15) || r.equals(17)) && this.updateFocusedItem();
    })), this.focusTracker = this._register(ng(this.domNode)), this._register(this.focusTracker.onDidBlur(() => {
      (Qi() === this.domNode || !Zi(Qi(), this.domNode)) && (this._onDidBlur.fire(), this.previouslyFocusedItem = this.focusedItem, this.focusedItem = void 0, this.triggerKeyDown = false);
    })), this._register(this.focusTracker.onDidFocus(() => this.updateFocusedItem())), this.actionsList = document.createElement("ul"), this.actionsList.className = "actions-container", this.options.highlightToggledItems && this.actionsList.classList.add("highlight-toggled"), this.actionsList.setAttribute("role", this.options.ariaRole || "toolbar"), this.options.ariaLabel && this.actionsList.setAttribute("aria-label", this.options.ariaLabel), this.domNode.appendChild(this.actionsList), e.appendChild(this.domNode);
  }
  refreshRole() {
    this.length() >= 1 ? this.actionsList.setAttribute("role", this.options.ariaRole || "toolbar") : this.actionsList.setAttribute("role", "presentation");
  }
  setAriaLabel(e) {
    e ? this.actionsList.setAttribute("aria-label", e) : this.actionsList.removeAttribute("aria-label");
  }
  setFocusable(e) {
    if (this.focusable = e, this.focusable) {
      const t = this.viewItems.find((i) => i instanceof Di && i.isEnabled());
      t instanceof Di && t.setFocusable(true);
    } else this.viewItems.forEach((t) => {
      t instanceof Di && t.setFocusable(false);
    });
  }
  isTriggerKeyEvent(e) {
    let t = false;
    return this._triggerKeys.keys.forEach((i) => {
      t = t || e.equals(i);
    }), t;
  }
  updateFocusedItem() {
    for (let e = 0; e < this.actionsList.children.length; e++) {
      const t = this.actionsList.children[e];
      if (Zi(Qi(), t)) {
        this.focusedItem = e, this.viewItems[this.focusedItem]?.showHover?.();
        break;
      }
    }
  }
  get context() {
    return this._context;
  }
  set context(e) {
    this._context = e, this.viewItems.forEach((t) => t.setActionContext(e));
  }
  get actionRunner() {
    return this._actionRunner;
  }
  set actionRunner(e) {
    this._actionRunner = e, this._actionRunnerDisposables.clear(), this._actionRunnerDisposables.add(this._actionRunner.onDidRun((t) => this._onDidRun.fire(t))), this._actionRunnerDisposables.add(this._actionRunner.onWillRun((t) => this._onWillRun.fire(t))), this.viewItems.forEach((t) => t.actionRunner = e);
  }
  getContainer() {
    return this.domNode;
  }
  hasAction(e) {
    return this.viewItems.findIndex((t) => t.action.id === e.id) !== -1;
  }
  getAction(e) {
    if (typeof e == "number") return this.viewItems[e]?.action;
    if (Mt(e)) {
      for (; e.parentElement !== this.actionsList; ) {
        if (!e.parentElement) return;
        e = e.parentElement;
      }
      for (let t = 0; t < this.actionsList.childNodes.length; t++) if (this.actionsList.childNodes[t] === e) return this.viewItems[t].action;
    }
  }
  push(e, t = {}) {
    const i = Array.isArray(e) ? e : [e];
    let s = Or(t.index) ? t.index : null;
    i.forEach((n) => {
      const r = document.createElement("li");
      r.className = "action-item", r.setAttribute("role", "presentation");
      let o;
      const a = { hoverDelegate: this._hoverDelegate, ...t, isTabList: this.options.ariaRole === "tablist" };
      this.options.actionViewItemProvider && (o = this.options.actionViewItemProvider(n, a)), o || (o = new X2(this.context, n, a)), this.options.allowContextMenu || this.viewItemDisposables.set(o, O(r, j.CONTEXT_MENU, (c) => {
        fe.stop(c, true);
      })), o.actionRunner = this._actionRunner, o.setActionContext(this.context), o.render(r), this.focusable && o instanceof Di && this.viewItems.length === 0 && o.setFocusable(true), s === null || s < 0 || s >= this.actionsList.children.length ? (this.actionsList.appendChild(r), this.viewItems.push(o)) : (this.actionsList.insertBefore(r, this.actionsList.children[s]), this.viewItems.splice(s, 0, o), s++);
    }), typeof this.focusedItem == "number" && this.focus(this.focusedItem), this.refreshRole();
  }
  getWidth(e) {
    if (e >= 0 && e < this.actionsList.children.length) {
      const t = this.actionsList.children.item(e);
      if (t) return t.clientWidth;
    }
    return 0;
  }
  getHeight(e) {
    if (e >= 0 && e < this.actionsList.children.length) {
      const t = this.actionsList.children.item(e);
      if (t) return t.clientHeight;
    }
    return 0;
  }
  pull(e) {
    e >= 0 && e < this.viewItems.length && (this.actionsList.childNodes[e].remove(), this.viewItemDisposables.deleteAndDispose(this.viewItems[e]), nt(this.viewItems.splice(e, 1)), this.refreshRole());
  }
  clear() {
    this.isEmpty() || (this.viewItems = nt(this.viewItems), this.viewItemDisposables.clearAndDisposeAll(), pi(this.actionsList), this.refreshRole());
  }
  length() {
    return this.viewItems.length;
  }
  isEmpty() {
    return this.viewItems.length === 0;
  }
  focus(e) {
    let t = false, i;
    if (e === void 0 ? t = true : typeof e == "number" ? i = e : typeof e == "boolean" && (t = e), t && typeof this.focusedItem > "u") {
      const s = this.viewItems.findIndex((n) => n.isEnabled());
      this.focusedItem = s === -1 ? void 0 : s, this.updateFocus(void 0, void 0, true);
    } else i !== void 0 && (this.focusedItem = i), this.updateFocus(void 0, void 0, true);
  }
  focusFirst() {
    return this.focusedItem = this.length() - 1, this.focusNext(true);
  }
  focusLast() {
    return this.focusedItem = 0, this.focusPrevious(true);
  }
  focusNext(e, t) {
    if (typeof this.focusedItem > "u") this.focusedItem = this.viewItems.length - 1;
    else if (this.viewItems.length <= 1) return false;
    const i = this.focusedItem;
    let s;
    do {
      if (!e && this.options.preventLoopNavigation && this.focusedItem + 1 >= this.viewItems.length) return this.focusedItem = i, false;
      this.focusedItem = (this.focusedItem + 1) % this.viewItems.length, s = this.viewItems[this.focusedItem];
    } while (this.focusedItem !== i && (this.options.focusOnlyEnabledItems && !s.isEnabled() || s.action.id === dr.ID));
    return this.updateFocus(void 0, void 0, t), true;
  }
  focusPrevious(e) {
    if (typeof this.focusedItem > "u") this.focusedItem = 0;
    else if (this.viewItems.length <= 1) return false;
    const t = this.focusedItem;
    let i;
    do {
      if (this.focusedItem = this.focusedItem - 1, this.focusedItem < 0) {
        if (!e && this.options.preventLoopNavigation) return this.focusedItem = t, false;
        this.focusedItem = this.viewItems.length - 1;
      }
      i = this.viewItems[this.focusedItem];
    } while (this.focusedItem !== t && (this.options.focusOnlyEnabledItems && !i.isEnabled() || i.action.id === dr.ID));
    return this.updateFocus(true), true;
  }
  updateFocus(e, t, i = false) {
    typeof this.focusedItem > "u" && this.actionsList.focus({ preventScroll: t }), this.previouslyFocusedItem !== void 0 && this.previouslyFocusedItem !== this.focusedItem && this.viewItems[this.previouslyFocusedItem]?.blur();
    const s = this.focusedItem !== void 0 ? this.viewItems[this.focusedItem] : void 0;
    if (s) {
      let n = true;
      Fr(s.focus) || (n = false), this.options.focusOnlyEnabledItems && Fr(s.isEnabled) && !s.isEnabled() && (n = false), s.action.id === dr.ID && (n = false), n ? (i || this.previouslyFocusedItem !== this.focusedItem) && (s.focus(e), this.previouslyFocusedItem = this.focusedItem) : (this.actionsList.focus({ preventScroll: t }), this.previouslyFocusedItem = void 0), n && s.showHover?.();
    }
  }
  doTrigger(e) {
    if (typeof this.focusedItem > "u") return;
    const t = this.viewItems[this.focusedItem];
    if (t instanceof Di) {
      const i = t._context === null || t._context === void 0 ? e : t._context;
      this.run(t._action, i);
    }
  }
  async run(e, t) {
    await this._actionRunner.run(e, t);
  }
  dispose() {
    this._context = void 0, this.viewItems = nt(this.viewItems), this.getContainer().remove(), super.dispose();
  }
}, Jd = { inputActiveOptionBorder: "#007ACC00", inputActiveOptionForeground: "#FFFFFF", inputActiveOptionBackground: "#0E639C50" }, Ys = class extends _i {
  constructor(e) {
    super(), this._onChange = this._register(new L()), this.onChange = this._onChange.event, this._onKeyDown = this._register(new L()), this.onKeyDown = this._onKeyDown.event, this._opts = e, this._checked = this._opts.isChecked;
    const t = ["monaco-custom-toggle"];
    this._opts.icon && (this._icon = this._opts.icon, t.push(...we.asClassNameArray(this._icon))), this._opts.actionClassName && t.push(...this._opts.actionClassName.split(" ")), this._checked && t.push("checked"), this.domNode = document.createElement("div"), this._hover = this._register(ar().setupManagedHover(e.hoverDelegate ?? Ji("mouse"), this.domNode, this._opts.title)), this.domNode.classList.add(...t), this._opts.notFocusable || (this.domNode.tabIndex = 0), this.domNode.setAttribute("role", "checkbox"), this.domNode.setAttribute("aria-checked", String(this._checked)), this.domNode.setAttribute("aria-label", this._opts.title), this.applyStyles(), this.onclick(this.domNode, (i) => {
      this.enabled && (this.checked = !this._checked, this._onChange.fire(false), i.preventDefault());
    }), this._register(this.ignoreGesture(this.domNode)), this.onkeydown(this.domNode, (i) => {
      if (i.keyCode === 10 || i.keyCode === 3) {
        this.checked = !this._checked, this._onChange.fire(true), i.preventDefault(), i.stopPropagation();
        return;
      }
      this._onKeyDown.fire(i);
    });
  }
  get enabled() {
    return this.domNode.getAttribute("aria-disabled") !== "true";
  }
  focus() {
    this.domNode.focus();
  }
  get checked() {
    return this._checked;
  }
  set checked(e) {
    this._checked = e, this.domNode.setAttribute("aria-checked", String(this._checked)), this.domNode.classList.toggle("checked", this._checked), this.applyStyles();
  }
  setIcon(e) {
    this._icon && this.domNode.classList.remove(...we.asClassNameArray(this._icon)), this._icon = e, this._icon && this.domNode.classList.add(...we.asClassNameArray(this._icon));
  }
  width() {
    return 22;
  }
  applyStyles() {
    this.domNode && (this.domNode.style.borderColor = this._checked && this._opts.inputActiveOptionBorder || "", this.domNode.style.color = this._checked && this._opts.inputActiveOptionForeground || "inherit", this.domNode.style.backgroundColor = this._checked && this._opts.inputActiveOptionBackground || "");
  }
  enable() {
    this.domNode.setAttribute("aria-disabled", String(false));
  }
  disable() {
    this.domNode.setAttribute("aria-disabled", String(true));
  }
  setTitle(e) {
    this._hover.update(e), this.domNode.setAttribute("aria-label", e);
  }
  set visible(e) {
    this.domNode.style.display = e ? "" : "none";
  }
  get visible() {
    return this.domNode.style.display !== "none";
  }
}, Z2 = class Uu extends _i {
  constructor(t, i, s) {
    super(), this.title = t, this.isChecked = i, this._onChange = this._register(new L()), this.onChange = this._onChange.event, this.checkbox = this._register(new Ys({ title: this.title, isChecked: this.isChecked, icon: be.check, actionClassName: Uu.CLASS_NAME, ...Jd })), this.domNode = this.checkbox.domNode, this.styles = s, this.applyStyles(), this._register(this.checkbox.onChange((n) => {
      this.applyStyles(), this._onChange.fire(n);
    }));
  }
  get checked() {
    return this.checkbox.checked;
  }
  get enabled() {
    return this.checkbox.enabled;
  }
  set checked(t) {
    this.checkbox.checked = t, this.applyStyles();
  }
  focus() {
    this.domNode.focus();
  }
  hasFocus() {
    return Is(this.domNode);
  }
  enable() {
    this.checkbox.enable();
  }
  disable() {
    this.checkbox.disable();
  }
  applyStyles() {
    this.domNode.style.color = this.styles.checkboxForeground || "", this.domNode.style.backgroundColor = this.styles.checkboxBackground || "", this.domNode.style.borderColor = this.styles.checkboxBorder || "";
  }
};
Z2.CLASS_NAME = "monaco-checkbox";
var Q2 = W(10, null), J2 = W(11, null), e4 = W(12, null), t4 = class extends Ys {
  constructor(e) {
    super({ icon: be.caseSensitive, title: Q2 + e.appendTitle, isChecked: e.isChecked, hoverDelegate: e.hoverDelegate ?? Ji("element"), inputActiveOptionBorder: e.inputActiveOptionBorder, inputActiveOptionForeground: e.inputActiveOptionForeground, inputActiveOptionBackground: e.inputActiveOptionBackground });
  }
}, i4 = class extends Ys {
  constructor(e) {
    super({ icon: be.wholeWord, title: J2 + e.appendTitle, isChecked: e.isChecked, hoverDelegate: e.hoverDelegate ?? Ji("element"), inputActiveOptionBorder: e.inputActiveOptionBorder, inputActiveOptionForeground: e.inputActiveOptionForeground, inputActiveOptionBackground: e.inputActiveOptionBackground });
  }
}, s4 = class extends Ys {
  constructor(e) {
    super({ icon: be.regex, title: e4 + e.appendTitle, isChecked: e.isChecked, hoverDelegate: e.hoverDelegate ?? Ji("element"), inputActiveOptionBorder: e.inputActiveOptionBorder, inputActiveOptionForeground: e.inputActiveOptionForeground, inputActiveOptionBackground: e.inputActiveOptionBackground });
  }
}, n4 = class {
  constructor(e, t = 0, i = e.length, s = t - 1) {
    this.items = e, this.start = t, this.end = i, this.index = s;
  }
  current() {
    return this.index === this.start - 1 || this.index === this.end ? null : this.items[this.index];
  }
  next() {
    return this.index = Math.min(this.index + 1, this.end), this.current();
  }
  previous() {
    return this.index = Math.max(this.index - 1, this.start - 1), this.current();
  }
  first() {
    return this.index = this.start, this.current();
  }
  last() {
    return this.index = this.end - 1, this.current();
  }
}, r4 = class {
  constructor(e = /* @__PURE__ */ new Set(), t = 10) {
    this._history = e, this._limit = t, this._onChange(), this._history.onDidChange && (this._disposable = new De(), this._disposable.value = this._history.onDidChange(() => this._onChange()));
  }
  getHistory() {
    return this._elements;
  }
  add(e) {
    this._history.delete(e), this._history.add(e), this._onChange();
  }
  next() {
    return this._navigator.next();
  }
  previous() {
    return this._currentPosition() !== 0 ? this._navigator.previous() : null;
  }
  current() {
    return this._navigator.current();
  }
  first() {
    return this._navigator.first();
  }
  last() {
    return this._navigator.last();
  }
  isFirst() {
    return this._currentPosition() === 0;
  }
  isLast() {
    return this._currentPosition() >= this._elements.length - 1;
  }
  isNowhere() {
    return this._navigator.current() === null;
  }
  has(e) {
    return this._history.has(e);
  }
  clear() {
    this._history.clear(), this._onChange();
  }
  _onChange() {
    this._reduceToLimit();
    const e = this._elements;
    this._navigator = new n4(e, 0, e.length, e.length);
  }
  _reduceToLimit() {
    const e = this._elements;
    if (e.length > this._limit) {
      const t = e.slice(e.length - this._limit);
      this._history.replace ? this._history.replace(t) : this._history = new Set(t);
    }
  }
  _currentPosition() {
    const e = this._navigator.current();
    return e ? this._elements.indexOf(e) : -1;
  }
  get _elements() {
    const e = [];
    return this._history.forEach((t) => e.push(t)), e;
  }
  dispose() {
    this._disposable?.dispose();
  }
}, Xs = ie, o4 = { inputBackground: "#3C3C3C", inputForeground: "#CCCCCC", inputValidationInfoBorder: "#55AAFF", inputValidationInfoBackground: "#063B49", inputValidationWarningBorder: "#B89500", inputValidationWarningBackground: "#352A05", inputValidationErrorBorder: "#BE1100", inputValidationErrorBackground: "#5A1D1D", inputBorder: void 0, inputValidationErrorForeground: void 0, inputValidationInfoForeground: void 0, inputValidationWarningForeground: void 0 }, a4 = class extends _i {
  constructor(e, t, i) {
    super(), this.state = "idle", this.maxHeight = Number.POSITIVE_INFINITY, this.hover = this._register(new De()), this._onDidChange = this._register(new L()), this.onDidChange = this._onDidChange.event, this._onDidHeightChange = this._register(new L()), this.onDidHeightChange = this._onDidHeightChange.event, this.contextViewProvider = t, this.options = i, this.message = null, this.placeholder = this.options.placeholder || "", this.tooltip = this.options.tooltip ?? (this.placeholder || ""), this.ariaLabel = this.options.ariaLabel || "", this.options.validationOptions && (this.validation = this.options.validationOptions.validation), this.element = Z(e, Xs(".monaco-inputbox.idle"));
    const s = this.options.flexibleHeight ? "textarea" : "input", n = Z(this.element, Xs(".ibwrapper"));
    if (this.input = Z(n, Xs(s + ".input.empty")), this.input.setAttribute("autocorrect", "off"), this.input.setAttribute("autocapitalize", "off"), this.input.setAttribute("spellcheck", "false"), this.onfocus(this.input, () => this.element.classList.add("synthetic-focus")), this.onblur(this.input, () => this.element.classList.remove("synthetic-focus")), this.options.flexibleHeight) {
      this.maxHeight = typeof this.options.flexibleMaxHeight == "number" ? this.options.flexibleMaxHeight : Number.POSITIVE_INFINITY, this.mirror = Z(n, Xs("div.mirror")), this.mirror.innerText = " ", this.scrollableElement = new v2(this.element, { vertical: 1 }), this.options.flexibleWidth && (this.input.setAttribute("wrap", "off"), this.mirror.style.whiteSpace = "pre", this.mirror.style.wordWrap = "initial"), Z(e, this.scrollableElement.getDomNode()), this._register(this.scrollableElement), this._register(this.scrollableElement.onScroll((a) => this.input.scrollTop = a.scrollTop));
      const r = this._register(new ce(e.ownerDocument, "selectionchange")), o = A.filter(r.event, () => e.ownerDocument.getSelection()?.anchorNode === n);
      this._register(o(this.updateScrollDimensions, this)), this._register(this.onDidHeightChange(this.updateScrollDimensions, this));
    } else this.input.type = this.options.type || "text", this.input.setAttribute("wrap", "off");
    this.ariaLabel && this.input.setAttribute("aria-label", this.ariaLabel), this.placeholder && !this.options.showPlaceholderOnFocus && this.setPlaceHolder(this.placeholder), this.tooltip && this.setTooltip(this.tooltip), this.oninput(this.input, () => this.onValueChange()), this.onblur(this.input, () => this.onBlur()), this.onfocus(this.input, () => this.onFocus()), this._register(this.ignoreGesture(this.input)), setTimeout(() => this.updateMirror(), 0), this.options.actions && (this.actionbar = this._register(new Qd(this.element)), this.actionbar.push(this.options.actions, { icon: true, label: false })), this.applyStyles();
  }
  onBlur() {
    this._hideMessage(), this.options.showPlaceholderOnFocus && this.input.setAttribute("placeholder", "");
  }
  onFocus() {
    this._showMessage(), this.options.showPlaceholderOnFocus && this.input.setAttribute("placeholder", this.placeholder || "");
  }
  setPlaceHolder(e) {
    this.placeholder = e, this.input.setAttribute("placeholder", e);
  }
  setTooltip(e) {
    this.tooltip = e, !this.hover.value && e && (this.hover.value = this._register(ar().setupDelayedHoverAtMouse(this.input, () => ({ content: this.tooltip, appearance: { compact: true } }))));
  }
  setAriaLabel(e) {
    this.ariaLabel = e, e ? this.input.setAttribute("aria-label", this.ariaLabel) : this.input.removeAttribute("aria-label");
  }
  getAriaLabel() {
    return this.ariaLabel;
  }
  get mirrorElement() {
    return this.mirror;
  }
  get inputElement() {
    return this.input;
  }
  get value() {
    return this.input.value;
  }
  set value(e) {
    this.input.value !== e && (this.input.value = e, this.onValueChange());
  }
  get step() {
    return this.input.step;
  }
  set step(e) {
    this.input.step = e;
  }
  get height() {
    return typeof this.cachedHeight == "number" ? this.cachedHeight : Fh(this.element);
  }
  focus() {
    this.input.focus();
  }
  blur() {
    this.input.blur();
  }
  hasFocus() {
    return Is(this.input);
  }
  select(e = null) {
    this.input.select(), e && (this.input.setSelectionRange(e.start, e.end), e.end === this.input.value.length && (this.input.scrollLeft = this.input.scrollWidth));
  }
  isSelectionAtEnd() {
    return this.input.selectionEnd === this.input.value.length && this.input.selectionStart === this.input.selectionEnd;
  }
  getSelection() {
    const e = this.input.selectionStart;
    if (e === null) return null;
    const t = this.input.selectionEnd ?? e;
    return { start: e, end: t };
  }
  enable() {
    this.input.removeAttribute("disabled");
  }
  disable() {
    this.blur(), this.input.disabled = true, this._hideMessage();
  }
  setEnabled(e) {
    e ? this.enable() : this.disable();
  }
  get width() {
    return Mo(this.input);
  }
  set width(e) {
    if (this.options.flexibleHeight && this.options.flexibleWidth) {
      let t = 0;
      if (this.mirror) {
        const i = parseFloat(this.mirror.style.paddingLeft || "") || 0, s = parseFloat(this.mirror.style.paddingRight || "") || 0;
        t = i + s;
      }
      this.input.style.width = e - t + "px";
    } else this.input.style.width = e + "px";
    this.mirror && (this.mirror.style.width = e + "px");
  }
  set paddingRight(e) {
    this.input.style.width = `calc(100% - ${e}px)`, this.mirror && (this.mirror.style.paddingRight = e + "px");
  }
  updateScrollDimensions() {
    if (typeof this.cachedContentHeight != "number" || typeof this.cachedHeight != "number" || !this.scrollableElement) return;
    const e = this.cachedContentHeight, t = this.cachedHeight, i = this.input.scrollTop;
    this.scrollableElement.setScrollDimensions({ scrollHeight: e, height: t }), this.scrollableElement.setScrollPosition({ scrollTop: i });
  }
  showMessage(e, t) {
    if (this.state === "open" && nr(this.message, e)) return;
    this.message = e, this.element.classList.remove("idle"), this.element.classList.remove("info"), this.element.classList.remove("warning"), this.element.classList.remove("error"), this.element.classList.add(this.classForType(e.type));
    const i = this.stylesForType(this.message.type);
    this.element.style.border = `1px solid ${Pt(i.border, "transparent")}`, this.message.content && (this.hasFocus() || t) && this._showMessage();
  }
  hideMessage() {
    this.message = null, this.element.classList.remove("info"), this.element.classList.remove("warning"), this.element.classList.remove("error"), this.element.classList.add("idle"), this._hideMessage(), this.applyStyles();
  }
  isInputValid() {
    return !!this.validation && !this.validation(this.value);
  }
  validate() {
    let e = null;
    return this.validation && (e = this.validation(this.value), e ? (this.inputElement.setAttribute("aria-invalid", "true"), this.showMessage(e)) : this.inputElement.hasAttribute("aria-invalid") && (this.inputElement.removeAttribute("aria-invalid"), this.hideMessage())), e?.type;
  }
  stylesForType(e) {
    const t = this.options.inputBoxStyles;
    switch (e) {
      case 1:
        return { border: t.inputValidationInfoBorder, background: t.inputValidationInfoBackground, foreground: t.inputValidationInfoForeground };
      case 2:
        return { border: t.inputValidationWarningBorder, background: t.inputValidationWarningBackground, foreground: t.inputValidationWarningForeground };
      default:
        return { border: t.inputValidationErrorBorder, background: t.inputValidationErrorBackground, foreground: t.inputValidationErrorForeground };
    }
  }
  classForType(e) {
    switch (e) {
      case 1:
        return "info";
      case 2:
        return "warning";
      default:
        return "error";
    }
  }
  _showMessage() {
    if (!this.contextViewProvider || !this.message) return;
    let e;
    const t = () => e.style.width = Mo(this.element) + "px";
    this.contextViewProvider.showContextView({ getAnchor: () => this.element, anchorAlignment: 1, render: (s) => {
      if (!this.message) return null;
      e = Z(s, Xs(".monaco-inputbox-container")), t();
      const n = { inline: true, className: "monaco-inputbox-message" }, r = this.message.formatContent ? Cm(this.message.content, n) : Sm(this.message.content, n);
      r.classList.add(this.classForType(this.message.type));
      const o = this.stylesForType(this.message.type);
      return r.style.backgroundColor = o.background ?? "", r.style.color = o.foreground ?? "", r.style.border = o.border ? `1px solid ${o.border}` : "", Z(e, r), null;
    }, onHide: () => {
      this.state = "closed";
    }, layout: t });
    let i;
    this.message.type === 3 ? i = W(19, null, this.message.content) : this.message.type === 2 ? i = W(20, null, this.message.content) : i = W(21, null, this.message.content), zs(i), this.state = "open";
  }
  _hideMessage() {
    this.contextViewProvider && (this.state === "open" && this.contextViewProvider.hideContextView(), this.state = "idle");
  }
  onValueChange() {
    this._onDidChange.fire(this.value), this.validate(), this.updateMirror(), this.input.classList.toggle("empty", !this.value), this.state === "open" && this.contextViewProvider && this.contextViewProvider.layout();
  }
  updateMirror() {
    if (!this.mirror) return;
    const e = this.value, i = e.charCodeAt(e.length - 1) === 10 ? " " : "";
    (e + i).replace(/\u000c/g, "") ? this.mirror.textContent = e + i : this.mirror.innerText = " ", this.layout();
  }
  applyStyles() {
    const e = this.options.inputBoxStyles, t = e.inputBackground ?? "", i = e.inputForeground ?? "", s = e.inputBorder ?? "";
    this.element.style.backgroundColor = t, this.element.style.color = i, this.input.style.backgroundColor = "inherit", this.input.style.color = i, this.element.style.border = `1px solid ${Pt(s, "transparent")}`;
  }
  layout() {
    if (!this.mirror) return;
    const e = this.cachedContentHeight;
    this.cachedContentHeight = Fh(this.mirror), e !== this.cachedContentHeight && (this.cachedHeight = Math.min(this.cachedContentHeight, this.maxHeight), this.input.style.height = this.cachedHeight + "px", this._onDidHeightChange.fire(this.cachedContentHeight));
  }
  insertAtCursor(e) {
    const t = this.inputElement, i = t.selectionStart, s = t.selectionEnd, n = t.value;
    i !== null && s !== null && (this.value = n.substr(0, i) + e + n.substr(s), t.setSelectionRange(i + 1, i + 1), this.layout());
  }
  dispose() {
    this._hideMessage(), this.message = null, this.actionbar?.dispose(), super.dispose();
  }
}, l4 = class extends a4 {
  constructor(e, t, i) {
    const s = W(22, null, "⇅"), n = W(23, null, "⇅");
    super(e, t, i), this._onDidFocus = this._register(new L()), this.onDidFocus = this._onDidFocus.event, this._onDidBlur = this._register(new L()), this.onDidBlur = this._onDidBlur.event, this.history = this._register(new r4(i.history, 100)), this.addCurrentToHistoryOnNavigate = i.addCurrentToHistoryOnNavigate ?? true;
    const r = () => {
      if (i.showHistoryHint && i.showHistoryHint() && !this.placeholder.endsWith(s) && !this.placeholder.endsWith(n) && this.history.getHistory().length) {
        const o = this.placeholder.endsWith(")") ? s : n, a = this.placeholder + o;
        i.showPlaceholderOnFocus && !Is(this.input) ? this.placeholder = a : this.setPlaceHolder(a);
      }
    };
    this._register(Uh.observe(this.input, this._store, { attributeFilter: ["class"] })((o) => {
      o.forEach((a) => {
        a.target.textContent || r();
      });
    })), this.onfocus(this.input, () => r()), this.onblur(this.input, () => {
      const o = (a) => {
        if (this.placeholder.endsWith(a)) {
          const c = this.placeholder.slice(0, this.placeholder.length - a.length);
          return i.showPlaceholderOnFocus ? this.placeholder = c : this.setPlaceHolder(c), true;
        } else return false;
      };
      o(n) || o(s);
    });
  }
  addToHistory(e) {
    this.value && (e || this.value !== this.getCurrentValue()) && this.history.add(this.value);
  }
  prependHistory(e) {
    const t = this.getHistory();
    this.clearHistory(), e.forEach((i) => {
      this.history.add(i);
    }), t.forEach((i) => {
      this.history.add(i);
    });
  }
  getHistory() {
    return this.history.getHistory();
  }
  isAtFirstInHistory() {
    return this.history.isFirst();
  }
  isAtLastInHistory() {
    return this.history.isLast();
  }
  isNowhereInHistory() {
    return this.history.isNowhere();
  }
  showNextValue() {
    this.addCurrentToHistoryOnNavigate && !this.history.has(this.value) && this.addToHistory();
    let e = this.getNextValue();
    e && (e = e === this.value ? this.getNextValue() : e), this.value = e ?? "", Rd(this.value ? this.value : W(24, null));
  }
  showPreviousValue() {
    this.addCurrentToHistoryOnNavigate && !this.history.has(this.value) && this.addToHistory();
    let e = this.getPreviousValue();
    e && (e = e === this.value ? this.getPreviousValue() : e), e && (this.value = e, Rd(this.value));
  }
  clearHistory() {
    this.history.clear();
  }
  setPlaceHolder(e) {
    super.setPlaceHolder(e), this.setTooltip(e);
  }
  onBlur() {
    super.onBlur(), this._onDidBlur.fire();
  }
  onFocus() {
    super.onFocus(), this._onDidFocus.fire();
  }
  getCurrentValue() {
    let e = this.history.current();
    return e || (e = this.history.last(), this.history.next()), e;
  }
  getPreviousValue() {
    return this.history.previous() || this.history.first();
  }
  getNextValue() {
    return this.history.next();
  }
}, c4 = W(9, null), eu = class extends _i {
  constructor(e, t, i) {
    super(), this.fixFocusOnOptionClickEnabled = true, this.imeSessionInProgress = false, this.additionalTogglesDisposables = this._register(new De()), this.additionalToggles = [], this._onDidOptionChange = this._register(new L()), this.onDidOptionChange = this._onDidOptionChange.event, this._onKeyDown = this._register(new L()), this.onKeyDown = this._onKeyDown.event, this._onMouseDown = this._register(new L()), this.onMouseDown = this._onMouseDown.event, this._onInput = this._register(new L()), this.onInput = this._onInput.event, this._onKeyUp = this._register(new L()), this.onKeyUp = this._onKeyUp.event, this._onCaseSensitiveKeyDown = this._register(new L()), this.onCaseSensitiveKeyDown = this._onCaseSensitiveKeyDown.event, this._onRegexKeyDown = this._register(new L()), this.onRegexKeyDown = this._onRegexKeyDown.event, this._lastHighlightFindOptions = 0, this.placeholder = i.placeholder || "", this.validation = i.validation, this.label = i.label || c4, this.showCommonFindToggles = !!i.showCommonFindToggles;
    const s = i.appendCaseSensitiveLabel || "", n = i.appendWholeWordsLabel || "", r = i.appendRegexLabel || "", o = !!i.flexibleHeight, a = !!i.flexibleWidth, c = i.flexibleMaxHeight;
    this.domNode = document.createElement("div"), this.domNode.classList.add("monaco-findInput"), this.inputBox = this._register(new l4(this.domNode, t, { placeholder: this.placeholder || "", ariaLabel: this.label || "", validationOptions: { validation: this.validation }, showHistoryHint: i.showHistoryHint, flexibleHeight: o, flexibleWidth: a, flexibleMaxHeight: c, inputBoxStyles: i.inputBoxStyles, history: i.history, addCurrentToHistoryOnNavigate: i.addCurrentToHistoryOnNavigate }));
    const h = this._register($o());
    if (this.showCommonFindToggles) {
      this.regex = this._register(new s4({ appendTitle: r, isChecked: false, hoverDelegate: h, ...i.toggleStyles })), this._register(this.regex.onChange((u) => {
        this._onDidOptionChange.fire(u), !u && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate();
      })), this._register(this.regex.onKeyDown((u) => {
        this._onRegexKeyDown.fire(u);
      })), this.wholeWords = this._register(new i4({ appendTitle: n, isChecked: false, hoverDelegate: h, ...i.toggleStyles })), this._register(this.wholeWords.onChange((u) => {
        this._onDidOptionChange.fire(u), !u && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate();
      })), this.caseSensitive = this._register(new t4({ appendTitle: s, isChecked: false, hoverDelegate: h, ...i.toggleStyles })), this._register(this.caseSensitive.onChange((u) => {
        this._onDidOptionChange.fire(u), !u && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate();
      })), this._register(this.caseSensitive.onKeyDown((u) => {
        this._onCaseSensitiveKeyDown.fire(u);
      }));
      const d = [this.caseSensitive.domNode, this.wholeWords.domNode, this.regex.domNode];
      this.onkeydown(this.domNode, (u) => {
        if (u.equals(15) || u.equals(17) || u.equals(9)) {
          const f = d.indexOf(this.domNode.ownerDocument.activeElement);
          if (f >= 0) {
            let p = -1;
            u.equals(17) ? p = (f + 1) % d.length : u.equals(15) && (f === 0 ? p = d.length - 1 : p = f - 1), u.equals(9) ? (d[f].blur(), this.inputBox.focus()) : p >= 0 && d[p].focus(), fe.stop(u, true);
          }
        }
      });
    }
    this.controls = document.createElement("div"), this.controls.className = "controls", this.controls.style.display = this.showCommonFindToggles ? "" : "none", this.caseSensitive && this.controls.append(this.caseSensitive.domNode), this.wholeWords && this.controls.appendChild(this.wholeWords.domNode), this.regex && this.controls.appendChild(this.regex.domNode), this.setAdditionalToggles(i?.additionalToggles), this.controls && this.domNode.appendChild(this.controls), e?.appendChild(this.domNode), this._register(O(this.inputBox.inputElement, "compositionstart", (d) => {
      this.imeSessionInProgress = true;
    })), this._register(O(this.inputBox.inputElement, "compositionend", (d) => {
      this.imeSessionInProgress = false, this._onInput.fire();
    })), this.onkeydown(this.inputBox.inputElement, (d) => this._onKeyDown.fire(d)), this.onkeyup(this.inputBox.inputElement, (d) => this._onKeyUp.fire(d)), this.oninput(this.inputBox.inputElement, (d) => this._onInput.fire()), this.onmousedown(this.inputBox.inputElement, (d) => this._onMouseDown.fire(d));
  }
  get isImeSessionInProgress() {
    return this.imeSessionInProgress;
  }
  get onDidChange() {
    return this.inputBox.onDidChange;
  }
  layout(e) {
    this.inputBox.layout(), this.updateInputBoxPadding(e.collapsedFindWidget);
  }
  enable() {
    this.domNode.classList.remove("disabled"), this.inputBox.enable(), this.regex?.enable(), this.wholeWords?.enable(), this.caseSensitive?.enable();
    for (const e of this.additionalToggles) e.enable();
  }
  disable() {
    this.domNode.classList.add("disabled"), this.inputBox.disable(), this.regex?.disable(), this.wholeWords?.disable(), this.caseSensitive?.disable();
    for (const e of this.additionalToggles) e.disable();
  }
  setFocusInputOnOptionClick(e) {
    this.fixFocusOnOptionClickEnabled = e;
  }
  setEnabled(e) {
    e ? this.enable() : this.disable();
  }
  setAdditionalToggles(e) {
    for (const t of this.additionalToggles) t.domNode.remove();
    this.additionalToggles = [], this.additionalTogglesDisposables.value = new q();
    for (const t of e ?? []) this.additionalTogglesDisposables.value.add(t), this.controls.appendChild(t.domNode), this.additionalTogglesDisposables.value.add(t.onChange((i) => {
      this._onDidOptionChange.fire(i), !i && this.fixFocusOnOptionClickEnabled && this.inputBox.focus();
    })), this.additionalToggles.push(t);
    this.additionalToggles.length > 0 && (this.controls.style.display = ""), this.updateInputBoxPadding();
  }
  updateInputBoxPadding(e = false) {
    e ? this.inputBox.paddingRight = 0 : this.inputBox.paddingRight = (this.caseSensitive?.width() ?? 0) + (this.wholeWords?.width() ?? 0) + (this.regex?.width() ?? 0) + this.additionalToggles.reduce((t, i) => t + i.width(), 0);
  }
  clear() {
    this.clearValidation(), this.setValue(""), this.focus();
  }
  getValue() {
    return this.inputBox.value;
  }
  setValue(e) {
    this.inputBox.value !== e && (this.inputBox.value = e);
  }
  onSearchSubmit() {
    this.inputBox.addToHistory();
  }
  select() {
    this.inputBox.select();
  }
  focus() {
    this.inputBox.focus();
  }
  getCaseSensitive() {
    return this.caseSensitive?.checked ?? false;
  }
  setCaseSensitive(e) {
    this.caseSensitive && (this.caseSensitive.checked = e);
  }
  getWholeWords() {
    return this.wholeWords?.checked ?? false;
  }
  setWholeWords(e) {
    this.wholeWords && (this.wholeWords.checked = e);
  }
  getRegex() {
    return this.regex?.checked ?? false;
  }
  setRegex(e) {
    this.regex && (this.regex.checked = e, this.validate());
  }
  focusOnCaseSensitive() {
    this.caseSensitive?.focus();
  }
  focusOnRegex() {
    this.regex?.focus();
  }
  highlightFindOptions() {
    this.domNode.classList.remove("highlight-" + this._lastHighlightFindOptions), this._lastHighlightFindOptions = 1 - this._lastHighlightFindOptions, this.domNode.classList.add("highlight-" + this._lastHighlightFindOptions);
  }
  validate() {
    this.inputBox.validate();
  }
  showMessage(e) {
    this.inputBox.showMessage(e);
  }
  clearMessage() {
    this.inputBox.hideMessage();
  }
  clearValidation() {
    this.inputBox.hideMessage();
  }
};
eu.OPTION_CHANGE = "optionChange";
var Ot = ((e) => (e[e.Expanded = 0] = "Expanded", e[e.Collapsed = 1] = "Collapsed", e[e.PreserveOrExpanded = 2] = "PreserveOrExpanded", e[e.PreserveOrCollapsed = 3] = "PreserveOrCollapsed", e))(Ot || {}), ss = ((e) => (e[e.Unknown = 0] = "Unknown", e[e.Twistie = 1] = "Twistie", e[e.Element = 2] = "Element", e[e.Filter = 3] = "Filter", e))(ss || {}), ct = class extends Error {
  constructor(e, t) {
    super(`TreeError [${e}] ${t}`);
  }
}, Qt = class {
  constructor(e, t, i, s) {
    this.originalStart = e, this.originalLength = t, this.modifiedStart = i, this.modifiedLength = s;
  }
  getOriginalEnd() {
    return this.originalStart + this.originalLength;
  }
  getModifiedEnd() {
    return this.modifiedStart + this.modifiedLength;
  }
}, ns = class {
  static Assert(e, t) {
    if (!e) throw new Error(t);
  }
}, rs = class {
  static Copy(e, t, i, s, n) {
    for (let r = 0; r < n; r++) i[s + r] = e[t + r];
  }
  static Copy2(e, t, i, s, n) {
    for (let r = 0; r < n; r++) i[s + r] = e[t + r];
  }
}, tu = class {
  constructor() {
    this.m_changes = [], this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824, this.m_originalCount = 0, this.m_modifiedCount = 0;
  }
  MarkNextChange() {
    (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new Qt(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824;
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
}, h4 = class ds {
  constructor(t, i, s = null) {
    this.ContinueProcessingPredicate = s, this._originalSequence = t, this._modifiedSequence = i;
    const [n, r, o] = ds._getElements(t), [a, c, h] = ds._getElements(i);
    this._hasStrings = o && h, this._originalStringElements = n, this._originalElementsOrHash = r, this._modifiedStringElements = a, this._modifiedElementsOrHash = c, this.m_forwardHistory = [], this.m_reverseHistory = [];
  }
  static _isStringArray(t) {
    return t.length > 0 && typeof t[0] == "string";
  }
  static _getElements(t) {
    const i = t.getElements();
    if (ds._isStringArray(i)) {
      const s = new Int32Array(i.length);
      for (let n = 0, r = i.length; n < r; n++) s[n] = _o(i[n], 0);
      return [i, s, true];
    }
    return i instanceof Int32Array ? [[], i, false] : [[], new Int32Array(i), false];
  }
  ElementsAreEqual(t, i) {
    return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[i] ? false : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[i] : true;
  }
  ElementsAreStrictEqual(t, i) {
    if (!this.ElementsAreEqual(t, i)) return false;
    const s = ds._getStrictElement(this._originalSequence, t), n = ds._getStrictElement(this._modifiedSequence, i);
    return s === n;
  }
  static _getStrictElement(t, i) {
    return typeof t.getStrictElement == "function" ? t.getStrictElement(i) : null;
  }
  OriginalElementsAreEqual(t, i) {
    return this._originalElementsOrHash[t] !== this._originalElementsOrHash[i] ? false : this._hasStrings ? this._originalStringElements[t] === this._originalStringElements[i] : true;
  }
  ModifiedElementsAreEqual(t, i) {
    return this._modifiedElementsOrHash[t] !== this._modifiedElementsOrHash[i] ? false : this._hasStrings ? this._modifiedStringElements[t] === this._modifiedStringElements[i] : true;
  }
  ComputeDiff(t) {
    return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, t);
  }
  _ComputeDiff(t, i, s, n, r) {
    const o = [false];
    let a = this.ComputeDiffRecursive(t, i, s, n, o);
    return r && (a = this.PrettifyChanges(a)), { quitEarly: o[0], changes: a };
  }
  ComputeDiffRecursive(t, i, s, n, r) {
    for (r[0] = false; t <= i && s <= n && this.ElementsAreEqual(t, s); ) t++, s++;
    for (; i >= t && n >= s && this.ElementsAreEqual(i, n); ) i--, n--;
    if (t > i || s > n) {
      let u;
      return s <= n ? (ns.Assert(t === i + 1, "originalStart should only be one more than originalEnd"), u = [new Qt(t, 0, s, n - s + 1)]) : t <= i ? (ns.Assert(s === n + 1, "modifiedStart should only be one more than modifiedEnd"), u = [new Qt(t, i - t + 1, s, 0)]) : (ns.Assert(t === i + 1, "originalStart should only be one more than originalEnd"), ns.Assert(s === n + 1, "modifiedStart should only be one more than modifiedEnd"), u = []), u;
    }
    const o = [0], a = [0], c = this.ComputeRecursionPoint(t, i, s, n, o, a, r), h = o[0], d = a[0];
    if (c !== null) return c;
    if (!r[0]) {
      const u = this.ComputeDiffRecursive(t, h, s, d, r);
      let f = [];
      return r[0] ? f = [new Qt(h + 1, i - (h + 1) + 1, d + 1, n - (d + 1) + 1)] : f = this.ComputeDiffRecursive(h + 1, i, d + 1, n, r), this.ConcatenateChanges(u, f);
    }
    return [new Qt(t, i - t + 1, s, n - s + 1)];
  }
  WALKTRACE(t, i, s, n, r, o, a, c, h, d, u, f, p, m, _, v, y, C) {
    let D = null, E = null, w = new tu(), S = i, I = s, P = p[0] - v[0] - n, Y = -1073741824, ue = this.m_forwardHistory.length - 1;
    do {
      const G = P + t;
      G === S || G < I && h[G - 1] < h[G + 1] ? (u = h[G + 1], m = u - P - n, u < Y && w.MarkNextChange(), Y = u, w.AddModifiedElement(u + 1, m), P = G + 1 - t) : (u = h[G - 1] + 1, m = u - P - n, u < Y && w.MarkNextChange(), Y = u - 1, w.AddOriginalElement(u, m + 1), P = G - 1 - t), ue >= 0 && (h = this.m_forwardHistory[ue], t = h[0], S = 1, I = h.length - 1);
    } while (--ue >= -1);
    if (D = w.getReverseChanges(), C[0]) {
      let G = p[0] + 1, $ = v[0] + 1;
      if (D !== null && D.length > 0) {
        const He = D[D.length - 1];
        G = Math.max(G, He.getOriginalEnd()), $ = Math.max($, He.getModifiedEnd());
      }
      E = [new Qt(G, f - G + 1, $, _ - $ + 1)];
    } else {
      w = new tu(), S = o, I = a, P = p[0] - v[0] - c, Y = 1073741824, ue = y ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
      do {
        const G = P + r;
        G === S || G < I && d[G - 1] >= d[G + 1] ? (u = d[G + 1] - 1, m = u - P - c, u > Y && w.MarkNextChange(), Y = u + 1, w.AddOriginalElement(u + 1, m + 1), P = G + 1 - r) : (u = d[G - 1], m = u - P - c, u > Y && w.MarkNextChange(), Y = u, w.AddModifiedElement(u + 1, m + 1), P = G - 1 - r), ue >= 0 && (d = this.m_reverseHistory[ue], r = d[0], S = 1, I = d.length - 1);
      } while (--ue >= -1);
      E = w.getChanges();
    }
    return this.ConcatenateChanges(D, E);
  }
  ComputeRecursionPoint(t, i, s, n, r, o, a) {
    let c = 0, h = 0, d = 0, u = 0, f = 0, p = 0;
    t--, s--, r[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
    const m = i - t + (n - s), _ = m + 1, v = new Int32Array(_), y = new Int32Array(_), C = n - s, D = i - t, E = t - s, w = i - n, I = (D - C) % 2 === 0;
    v[C] = t, y[D] = i, a[0] = false;
    for (let P = 1; P <= m / 2 + 1; P++) {
      let Y = 0, ue = 0;
      d = this.ClipDiagonalBound(C - P, P, C, _), u = this.ClipDiagonalBound(C + P, P, C, _);
      for (let $ = d; $ <= u; $ += 2) {
        $ === d || $ < u && v[$ - 1] < v[$ + 1] ? c = v[$ + 1] : c = v[$ - 1] + 1, h = c - ($ - C) - E;
        const He = c;
        for (; c < i && h < n && this.ElementsAreEqual(c + 1, h + 1); ) c++, h++;
        if (v[$] = c, c + h > Y + ue && (Y = c, ue = h), !I && Math.abs($ - D) <= P - 1 && c >= y[$]) return r[0] = c, o[0] = h, He <= y[$] && P <= 1448 ? this.WALKTRACE(C, d, u, E, D, f, p, w, v, y, c, i, r, h, n, o, I, a) : null;
      }
      const G = (Y - t + (ue - s) - P) / 2;
      if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(Y, G)) return a[0] = true, r[0] = Y, o[0] = ue, G > 0 && P <= 1448 ? this.WALKTRACE(C, d, u, E, D, f, p, w, v, y, c, i, r, h, n, o, I, a) : (t++, s++, [new Qt(t, i - t + 1, s, n - s + 1)]);
      f = this.ClipDiagonalBound(D - P, P, D, _), p = this.ClipDiagonalBound(D + P, P, D, _);
      for (let $ = f; $ <= p; $ += 2) {
        $ === f || $ < p && y[$ - 1] >= y[$ + 1] ? c = y[$ + 1] - 1 : c = y[$ - 1], h = c - ($ - D) - w;
        const He = c;
        for (; c > t && h > s && this.ElementsAreEqual(c, h); ) c--, h--;
        if (y[$] = c, I && Math.abs($ - C) <= P && c <= v[$]) return r[0] = c, o[0] = h, He >= v[$] && P <= 1448 ? this.WALKTRACE(C, d, u, E, D, f, p, w, v, y, c, i, r, h, n, o, I, a) : null;
      }
      if (P <= 1447) {
        let $ = new Int32Array(u - d + 2);
        $[0] = C - d + 1, rs.Copy2(v, d, $, 1, u - d + 1), this.m_forwardHistory.push($), $ = new Int32Array(p - f + 2), $[0] = D - f + 1, rs.Copy2(y, f, $, 1, p - f + 1), this.m_reverseHistory.push($);
      }
    }
    return this.WALKTRACE(C, d, u, E, D, f, p, w, v, y, c, i, r, h, n, o, I, a);
  }
  PrettifyChanges(t) {
    for (let i = 0; i < t.length; i++) {
      const s = t[i], n = i < t.length - 1 ? t[i + 1].originalStart : this._originalElementsOrHash.length, r = i < t.length - 1 ? t[i + 1].modifiedStart : this._modifiedElementsOrHash.length, o = s.originalLength > 0, a = s.modifiedLength > 0;
      for (; s.originalStart + s.originalLength < n && s.modifiedStart + s.modifiedLength < r && (!o || this.OriginalElementsAreEqual(s.originalStart, s.originalStart + s.originalLength)) && (!a || this.ModifiedElementsAreEqual(s.modifiedStart, s.modifiedStart + s.modifiedLength)); ) {
        const h = this.ElementsAreStrictEqual(s.originalStart, s.modifiedStart);
        if (this.ElementsAreStrictEqual(s.originalStart + s.originalLength, s.modifiedStart + s.modifiedLength) && !h) break;
        s.originalStart++, s.modifiedStart++;
      }
      const c = [null];
      if (i < t.length - 1 && this.ChangesOverlap(t[i], t[i + 1], c)) {
        t[i] = c[0], t.splice(i + 1, 1), i--;
        continue;
      }
    }
    for (let i = t.length - 1; i >= 0; i--) {
      const s = t[i];
      let n = 0, r = 0;
      if (i > 0) {
        const u = t[i - 1];
        n = u.originalStart + u.originalLength, r = u.modifiedStart + u.modifiedLength;
      }
      const o = s.originalLength > 0, a = s.modifiedLength > 0;
      let c = 0, h = this._boundaryScore(s.originalStart, s.originalLength, s.modifiedStart, s.modifiedLength);
      for (let u = 1; ; u++) {
        const f = s.originalStart - u, p = s.modifiedStart - u;
        if (f < n || p < r || o && !this.OriginalElementsAreEqual(f, f + s.originalLength) || a && !this.ModifiedElementsAreEqual(p, p + s.modifiedLength)) break;
        const _ = (f === n && p === r ? 5 : 0) + this._boundaryScore(f, s.originalLength, p, s.modifiedLength);
        _ > h && (h = _, c = u);
      }
      s.originalStart -= c, s.modifiedStart -= c;
      const d = [null];
      if (i > 0 && this.ChangesOverlap(t[i - 1], t[i], d)) {
        t[i - 1] = d[0], t.splice(i, 1), i++;
        continue;
      }
    }
    if (this._hasStrings) for (let i = 1, s = t.length; i < s; i++) {
      const n = t[i - 1], r = t[i], o = r.originalStart - n.originalStart - n.originalLength, a = n.originalStart, c = r.originalStart + r.originalLength, h = c - a, d = n.modifiedStart, u = r.modifiedStart + r.modifiedLength, f = u - d;
      if (o < 5 && h < 20 && f < 20) {
        const p = this._findBetterContiguousSequence(a, h, d, f, o);
        if (p) {
          const [m, _] = p;
          (m !== n.originalStart + n.originalLength || _ !== n.modifiedStart + n.modifiedLength) && (n.originalLength = m - n.originalStart, n.modifiedLength = _ - n.modifiedStart, r.originalStart = m + o, r.modifiedStart = _ + o, r.originalLength = c - r.originalStart, r.modifiedLength = u - r.modifiedStart);
        }
      }
    }
    return t;
  }
  _findBetterContiguousSequence(t, i, s, n, r) {
    if (i < r || n < r) return null;
    const o = t + i - r + 1, a = s + n - r + 1;
    let c = 0, h = 0, d = 0;
    for (let u = t; u < o; u++) for (let f = s; f < a; f++) {
      const p = this._contiguousSequenceScore(u, f, r);
      p > 0 && p > c && (c = p, h = u, d = f);
    }
    return c > 0 ? [h, d] : null;
  }
  _contiguousSequenceScore(t, i, s) {
    let n = 0;
    for (let r = 0; r < s; r++) {
      if (!this.ElementsAreEqual(t + r, i + r)) return 0;
      n += this._originalStringElements[t + r].length;
    }
    return n;
  }
  _OriginalIsBoundary(t) {
    return t <= 0 || t >= this._originalElementsOrHash.length - 1 ? true : this._hasStrings && /^\s*$/.test(this._originalStringElements[t]);
  }
  _OriginalRegionIsBoundary(t, i) {
    if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1)) return true;
    if (i > 0) {
      const s = t + i;
      if (this._OriginalIsBoundary(s - 1) || this._OriginalIsBoundary(s)) return true;
    }
    return false;
  }
  _ModifiedIsBoundary(t) {
    return t <= 0 || t >= this._modifiedElementsOrHash.length - 1 ? true : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[t]);
  }
  _ModifiedRegionIsBoundary(t, i) {
    if (this._ModifiedIsBoundary(t) || this._ModifiedIsBoundary(t - 1)) return true;
    if (i > 0) {
      const s = t + i;
      if (this._ModifiedIsBoundary(s - 1) || this._ModifiedIsBoundary(s)) return true;
    }
    return false;
  }
  _boundaryScore(t, i, s, n) {
    const r = this._OriginalRegionIsBoundary(t, i) ? 1 : 0, o = this._ModifiedRegionIsBoundary(s, n) ? 1 : 0;
    return r + o;
  }
  ConcatenateChanges(t, i) {
    const s = [];
    if (t.length === 0 || i.length === 0) return i.length > 0 ? i : t;
    if (this.ChangesOverlap(t[t.length - 1], i[0], s)) {
      const n = new Array(t.length + i.length - 1);
      return rs.Copy(t, 0, n, 0, t.length - 1), n[t.length - 1] = s[0], rs.Copy(i, 1, n, t.length, i.length - 1), n;
    } else {
      const n = new Array(t.length + i.length);
      return rs.Copy(t, 0, n, 0, t.length), rs.Copy(i, 0, n, t.length, i.length), n;
    }
  }
  ChangesOverlap(t, i, s) {
    if (ns.Assert(t.originalStart <= i.originalStart, "Left change is not less than or equal to right change"), ns.Assert(t.modifiedStart <= i.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= i.originalStart || t.modifiedStart + t.modifiedLength >= i.modifiedStart) {
      const n = t.originalStart;
      let r = t.originalLength;
      const o = t.modifiedStart;
      let a = t.modifiedLength;
      return t.originalStart + t.originalLength >= i.originalStart && (r = i.originalStart + i.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= i.modifiedStart && (a = i.modifiedStart + i.modifiedLength - t.modifiedStart), s[0] = new Qt(n, r, o, a), true;
    } else return s[0] = null, false;
  }
  ClipDiagonalBound(t, i, s, n) {
    if (t >= 0 && t < n) return t;
    const r = s, o = n - s - 1, a = i % 2 === 0;
    if (t < 0) {
      const c = r % 2 === 0;
      return a === c ? 0 : 1;
    } else {
      const c = o % 2 === 0;
      return a === c ? n - 1 : n - 2;
    }
  }
}, vb = new Uint32Array(65536);
function iu(e) {
  return typeof e == "object" && "visibility" in e && "data" in e;
}
function Sa(e) {
  switch (e) {
    case true:
      return 1;
    case false:
      return 0;
    default:
      return e;
  }
}
function Ca(e) {
  return typeof e.collapsible == "boolean";
}
var d4 = class {
  constructor(e, t, i = {}) {
    this.user = e, this.rootRef = [], this.eventBufferer = new Wr(), this._onDidSpliceModel = new L(), this.onDidSpliceModel = this._onDidSpliceModel.event, this._onDidSpliceRenderedNodes = new L(), this.onDidSpliceRenderedNodes = this._onDidSpliceRenderedNodes.event, this._onDidChangeCollapseState = new L(), this.onDidChangeCollapseState = this.eventBufferer.wrapEvent(this._onDidChangeCollapseState.event), this._onDidChangeRenderNodeCount = new L(), this.onDidChangeRenderNodeCount = this.eventBufferer.wrapEvent(this._onDidChangeRenderNodeCount.event), this.refilterDelayer = new co(Oc), this.collapseByDefault = typeof i.collapseByDefault > "u" ? false : i.collapseByDefault, this.allowNonCollapsibleParents = i.allowNonCollapsibleParents ?? false, this.filter = i.filter, this.autoExpandSingleChildren = typeof i.autoExpandSingleChildren > "u" ? false : i.autoExpandSingleChildren, this.root = { parent: void 0, element: t, children: [], depth: 0, visibleChildrenCount: 0, visibleChildIndex: -1, collapsible: false, collapsed: false, renderNodeCount: 0, visibility: 1, visible: true, filterData: void 0 };
  }
  splice(e, t, i = Re.empty(), s = {}) {
    if (e.length === 0) throw new ct(this.user, "Invalid tree location");
    s.diffIdentityProvider ? this.spliceSmart(s.diffIdentityProvider, e, t, i, s) : this.spliceSimple(e, t, i, s);
  }
  spliceSmart(e, t, i, s = Re.empty(), n, r = n.diffDepth ?? 0) {
    const { parentNode: o } = this.getParentNodeWithListIndex(t);
    if (!o.lastDiffIds) return this.spliceSimple(t, i, s, n);
    const a = [...s], c = t[t.length - 1], h = new h4({ getElements: () => o.lastDiffIds }, { getElements: () => [...o.children.slice(0, c), ...a, ...o.children.slice(c + i)].map((m) => e.getId(m.element).toString()) }).ComputeDiff(false);
    if (h.quitEarly) return o.lastDiffIds = void 0, this.spliceSimple(t, i, a, n);
    const d = t.slice(0, -1), u = (m, _, v) => {
      if (r > 0) for (let y = 0; y < v; y++) m--, _--, this.spliceSmart(e, [...d, m, 0], Number.MAX_SAFE_INTEGER, a[_].children, n, r - 1);
    };
    let f = Math.min(o.children.length, c + i), p = a.length;
    for (const m of h.changes.sort((_, v) => v.originalStart - _.originalStart)) u(f, p, f - (m.originalStart + m.originalLength)), f = m.originalStart, p = m.modifiedStart - c, this.spliceSimple([...d, f], m.originalLength, Re.slice(a, p, p + m.modifiedLength), n);
    u(f, p, f);
  }
  spliceSimple(e, t, i = Re.empty(), { onDidCreateNode: s, onDidDeleteNode: n, diffIdentityProvider: r }) {
    const { parentNode: o, listIndex: a, revealed: c, visible: h } = this.getParentNodeWithListIndex(e), d = [], u = Re.map(i, (E) => this.createTreeNode(E, o, o.visible ? 1 : 0, c, d, s)), f = e[e.length - 1];
    let p = 0;
    for (let E = f; E >= 0 && E < o.children.length; E--) {
      const w = o.children[E];
      if (w.visible) {
        p = w.visibleChildIndex;
        break;
      }
    }
    const m = [];
    let _ = 0, v = 0;
    for (const E of u) m.push(E), v += E.renderNodeCount, E.visible && (E.visibleChildIndex = p + _++);
    const y = Rr(o.children, f, t, m);
    r ? o.lastDiffIds ? Rr(o.lastDiffIds, f, t, m.map((E) => r.getId(E.element).toString())) : o.lastDiffIds = o.children.map((E) => r.getId(E.element).toString()) : o.lastDiffIds = void 0;
    let C = 0;
    for (const E of y) E.visible && C++;
    if (C !== 0) for (let E = f + m.length; E < o.children.length; E++) {
      const w = o.children[E];
      w.visible && (w.visibleChildIndex -= C);
    }
    if (o.visibleChildrenCount += _ - C, y.length > 0 && n) {
      const E = (w) => {
        n(w), w.children.forEach(E);
      };
      y.forEach(E);
    }
    if (c && h) {
      const E = y.reduce((w, S) => w + (S.visible ? S.renderNodeCount : 0), 0);
      this._updateAncestorsRenderNodeCount(o, v - E), this._onDidSpliceRenderedNodes.fire({ start: a, deleteCount: E, elements: d });
    }
    this._onDidSpliceModel.fire({ insertedNodes: m, deletedNodes: y });
    let D = o;
    for (; D; ) {
      if (D.visibility === 2) {
        this.refilterDelayer.trigger(() => this.refilter());
        break;
      }
      D = D.parent;
    }
  }
  rerender(e) {
    if (e.length === 0) throw new ct(this.user, "Invalid tree location");
    const { node: t, listIndex: i, revealed: s } = this.getTreeNodeWithListIndex(e);
    t.visible && s && this._onDidSpliceRenderedNodes.fire({ start: i, deleteCount: 1, elements: [t] });
  }
  has(e) {
    return this.hasTreeNode(e);
  }
  getListIndex(e) {
    const { listIndex: t, visible: i, revealed: s } = this.getTreeNodeWithListIndex(e);
    return i && s ? t : -1;
  }
  getListRenderCount(e) {
    return this.getTreeNode(e).renderNodeCount;
  }
  isCollapsible(e) {
    return this.getTreeNode(e).collapsible;
  }
  setCollapsible(e, t) {
    const i = this.getTreeNode(e);
    typeof t > "u" && (t = !i.collapsible);
    const s = { collapsible: t };
    return this.eventBufferer.bufferEvents(() => this._setCollapseState(e, s));
  }
  isCollapsed(e) {
    return this.getTreeNode(e).collapsed;
  }
  setCollapsed(e, t, i) {
    const s = this.getTreeNode(e);
    typeof t > "u" && (t = !s.collapsed);
    const n = { collapsed: t, recursive: i || false };
    return this.eventBufferer.bufferEvents(() => this._setCollapseState(e, n));
  }
  _setCollapseState(e, t) {
    const { node: i, listIndex: s, revealed: n } = this.getTreeNodeWithListIndex(e), r = this._setListNodeCollapseState(i, s, n, t);
    if (i !== this.root && this.autoExpandSingleChildren && r && !Ca(t) && i.collapsible && !i.collapsed && !t.recursive) {
      let o = -1;
      for (let a = 0; a < i.children.length; a++) if (i.children[a].visible) if (o > -1) {
        o = -1;
        break;
      } else o = a;
      o > -1 && this._setCollapseState([...e, o], t);
    }
    return r;
  }
  _setListNodeCollapseState(e, t, i, s) {
    const n = this._setNodeCollapseState(e, s, false);
    if (!i || !e.visible || !n) return n;
    const r = e.renderNodeCount, o = this.updateNodeAfterCollapseChange(e), a = r - (t === -1 ? 0 : 1);
    return this._onDidSpliceRenderedNodes.fire({ start: t + 1, deleteCount: a, elements: o.slice(1) }), n;
  }
  _setNodeCollapseState(e, t, i) {
    let s;
    if (e === this.root ? s = false : (Ca(t) ? (s = e.collapsible !== t.collapsible, e.collapsible = t.collapsible) : e.collapsible ? (s = e.collapsed !== t.collapsed, e.collapsed = t.collapsed) : s = false, s && this._onDidChangeCollapseState.fire({ node: e, deep: i })), !Ca(t) && t.recursive) for (const n of e.children) s = this._setNodeCollapseState(n, t, true) || s;
    return s;
  }
  expandTo(e) {
    this.eventBufferer.bufferEvents(() => {
      let t = this.getTreeNode(e);
      for (; t.parent; ) t = t.parent, e = e.slice(0, e.length - 1), t.collapsed && this._setCollapseState(e, { collapsed: false, recursive: false });
    });
  }
  refilter() {
    const e = this.root.renderNodeCount, t = this.updateNodeAfterFilterChange(this.root);
    this._onDidSpliceRenderedNodes.fire({ start: 0, deleteCount: e, elements: t }), this.refilterDelayer.cancel();
  }
  createTreeNode(e, t, i, s, n, r) {
    const o = { parent: t, element: e.element, children: [], depth: t.depth + 1, visibleChildrenCount: 0, visibleChildIndex: -1, collapsible: typeof e.collapsible == "boolean" ? e.collapsible : typeof e.collapsed < "u", collapsed: typeof e.collapsed > "u" ? this.collapseByDefault : e.collapsed, renderNodeCount: 1, visibility: 1, visible: true, filterData: void 0 }, a = this._filterNode(o, i);
    o.visibility = a, s && n.push(o);
    const c = e.children || Re.empty(), h = s && a !== 0 && !o.collapsed;
    let d = 0, u = 1;
    for (const f of c) {
      const p = this.createTreeNode(f, o, a, h, n, r);
      o.children.push(p), u += p.renderNodeCount, p.visible && (p.visibleChildIndex = d++);
    }
    return this.allowNonCollapsibleParents || (o.collapsible = o.collapsible || o.children.length > 0), o.visibleChildrenCount = d, o.visible = a === 2 ? d > 0 : a === 1, o.visible ? o.collapsed || (o.renderNodeCount = u) : (o.renderNodeCount = 0, s && n.pop()), r?.(o), o;
  }
  updateNodeAfterCollapseChange(e) {
    const t = e.renderNodeCount, i = [];
    return this._updateNodeAfterCollapseChange(e, i), this._updateAncestorsRenderNodeCount(e.parent, i.length - t), i;
  }
  _updateNodeAfterCollapseChange(e, t) {
    if (e.visible === false) return 0;
    if (t.push(e), e.renderNodeCount = 1, !e.collapsed) for (const i of e.children) e.renderNodeCount += this._updateNodeAfterCollapseChange(i, t);
    return this._onDidChangeRenderNodeCount.fire(e), e.renderNodeCount;
  }
  updateNodeAfterFilterChange(e) {
    const t = e.renderNodeCount, i = [];
    return this._updateNodeAfterFilterChange(e, e.visible ? 1 : 0, i), this._updateAncestorsRenderNodeCount(e.parent, i.length - t), i;
  }
  _updateNodeAfterFilterChange(e, t, i, s = true) {
    let n;
    if (e !== this.root) {
      if (n = this._filterNode(e, t), n === 0) return e.visible = false, e.renderNodeCount = 0, false;
      s && i.push(e);
    }
    const r = i.length;
    e.renderNodeCount = e === this.root ? 0 : 1;
    let o = false;
    if (!e.collapsed || n !== 0) {
      let a = 0;
      for (const c of e.children) o = this._updateNodeAfterFilterChange(c, n, i, s && !e.collapsed) || o, c.visible && (c.visibleChildIndex = a++);
      e.visibleChildrenCount = a;
    } else e.visibleChildrenCount = 0;
    return e !== this.root && (e.visible = n === 2 ? o : n === 1, e.visibility = n), e.visible ? e.collapsed || (e.renderNodeCount += i.length - r) : (e.renderNodeCount = 0, s && i.pop()), this._onDidChangeRenderNodeCount.fire(e), e.visible;
  }
  _updateAncestorsRenderNodeCount(e, t) {
    if (t !== 0) for (; e; ) e.renderNodeCount += t, this._onDidChangeRenderNodeCount.fire(e), e = e.parent;
  }
  _filterNode(e, t) {
    const i = this.filter ? this.filter.filter(e.element, t) : 1;
    return typeof i == "boolean" ? (e.filterData = void 0, i ? 1 : 0) : iu(i) ? (e.filterData = i.data, Sa(i.visibility)) : (e.filterData = void 0, Sa(i));
  }
  hasTreeNode(e, t = this.root) {
    if (!e || e.length === 0) return true;
    const [i, ...s] = e;
    return i < 0 || i > t.children.length ? false : this.hasTreeNode(s, t.children[i]);
  }
  getTreeNode(e, t = this.root) {
    if (!e || e.length === 0) return t;
    const [i, ...s] = e;
    if (i < 0 || i > t.children.length) throw new ct(this.user, "Invalid tree location");
    return this.getTreeNode(s, t.children[i]);
  }
  getTreeNodeWithListIndex(e) {
    if (e.length === 0) return { node: this.root, listIndex: -1, revealed: true, visible: false };
    const { parentNode: t, listIndex: i, revealed: s, visible: n } = this.getParentNodeWithListIndex(e), r = e[e.length - 1];
    if (r < 0 || r > t.children.length) throw new ct(this.user, "Invalid tree location");
    const o = t.children[r];
    return { node: o, listIndex: i, revealed: s, visible: n && o.visible };
  }
  getParentNodeWithListIndex(e, t = this.root, i = 0, s = true, n = true) {
    const [r, ...o] = e;
    if (r < 0 || r > t.children.length) throw new ct(this.user, "Invalid tree location");
    for (let a = 0; a < r; a++) i += t.children[a].renderNodeCount;
    return s = s && !t.collapsed, n = n && t.visible, o.length === 0 ? { parentNode: t, listIndex: i, revealed: s, visible: n } : this.getParentNodeWithListIndex(o, t.children[r], i + 1, s, n);
  }
  getNode(e = []) {
    return this.getTreeNode(e);
  }
  getNodeLocation(e) {
    const t = [];
    let i = e;
    for (; i.parent; ) t.push(i.parent.children.indexOf(i)), i = i.parent;
    return t.reverse();
  }
  getParentNodeLocation(e) {
    if (e.length !== 0) return e.length === 1 ? [] : d1(e)[0];
  }
  getFirstElementChild(e) {
    const t = this.getTreeNode(e);
    if (t.children.length !== 0) return t.children[0].element;
  }
  getLastElementAncestor(e = []) {
    const t = this.getTreeNode(e);
    if (t.children.length !== 0) return this._getLastElementAncestor(t);
  }
  _getLastElementAncestor(e) {
    return e.children.length === 0 ? e.element : this._getLastElementAncestor(e.children[e.children.length - 1]);
  }
}, u4 = class extends va {
  constructor(e) {
    super(e.elements.map((t) => t.element)), this.data = e;
  }
  set context(e) {
    this.data.context = e;
  }
  get context() {
    return this.data.context;
  }
};
function Da(e) {
  return e instanceof va ? new u4(e) : e;
}
var f4 = class {
  constructor(e, t) {
    this.modelProvider = e, this.dnd = t, this.disposables = new q(), this.autoExpandDisposable = this.disposables.add(new De());
  }
  getDragURI(e) {
    return this.dnd.getDragURI(e.element);
  }
  getDragLabel(e, t) {
    if (this.dnd.getDragLabel) return this.dnd.getDragLabel(e.map((i) => i.element), t);
  }
  onDragStart(e, t) {
    this.dnd.onDragStart?.(Da(e), t);
  }
  onDragOver(e, t, i, s, n, r = true) {
    const o = this.dnd.onDragOver(Da(e), t && t.element, i, s, n), a = this.autoExpandNode !== t;
    if (a && (this.autoExpandDisposable.clear(), this.autoExpandNode = t), typeof t > "u") return o;
    if (a && typeof o != "boolean" && o.autoExpand && (this.autoExpandDisposable.value = On(() => {
      const f = this.modelProvider(), p = f.getNodeLocation(t);
      f.isCollapsed(p) && f.setCollapsed(p, false), this.autoExpandNode = void 0;
    }, 500)), typeof o == "boolean" || !o.accept || typeof o.bubble > "u" || o.feedback) {
      if (!r) {
        const f = typeof o == "boolean" ? o : o.accept, p = typeof o == "boolean" ? void 0 : o.effect;
        return { accept: f, effect: p, feedback: [i] };
      }
      return o;
    }
    if (o.bubble === 1) {
      const f = this.modelProvider(), p = f.getNodeLocation(t), m = f.getParentNodeLocation(p), _ = f.getNode(m), v = m && f.getListIndex(m);
      return this.onDragOver(e, _, v, s, n, false);
    }
    const c = this.modelProvider(), h = c.getNodeLocation(t), d = c.getListIndex(h), u = c.getListRenderCount(h);
    return { ...o, feedback: Lr(d, d + u) };
  }
  drop(e, t, i, s, n) {
    this.autoExpandDisposable.clear(), this.autoExpandNode = void 0, this.dnd.drop(Da(e), t && t.element, i, s, n);
  }
  onDragEnd(e) {
    this.dnd.onDragEnd?.(e);
  }
  dispose() {
    this.disposables.dispose(), this.dnd.dispose();
  }
};
function p4(e, t, i) {
  return i && { ...i, identityProvider: i.identityProvider && { getId(s) {
    return i.identityProvider.getId(s.element);
  } }, dnd: i.dnd && t.add(new f4(e, i.dnd)), multipleSelectionController: i.multipleSelectionController && { isSelectionSingleChangeEvent(s) {
    return i.multipleSelectionController.isSelectionSingleChangeEvent({ ...s, element: s.element });
  }, isSelectionRangeChangeEvent(s) {
    return i.multipleSelectionController.isSelectionRangeChangeEvent({ ...s, element: s.element });
  } }, accessibilityProvider: i.accessibilityProvider && { ...i.accessibilityProvider, getSetSize(s) {
    const n = e(), r = n.getNodeLocation(s), o = n.getParentNodeLocation(r);
    return n.getNode(o).visibleChildrenCount;
  }, getPosInSet(s) {
    return s.visibleChildIndex + 1;
  }, isChecked: i.accessibilityProvider && i.accessibilityProvider.isChecked ? (s) => i.accessibilityProvider.isChecked(s.element) : void 0, getRole: i.accessibilityProvider && i.accessibilityProvider.getRole ? (s) => i.accessibilityProvider.getRole(s.element) : () => "treeitem", getAriaLabel(s) {
    return i.accessibilityProvider.getAriaLabel(s.element);
  }, getWidgetAriaLabel() {
    return i.accessibilityProvider.getWidgetAriaLabel();
  }, getWidgetRole: i.accessibilityProvider && i.accessibilityProvider.getWidgetRole ? () => i.accessibilityProvider.getWidgetRole() : () => "tree", getAriaLevel: i.accessibilityProvider && i.accessibilityProvider.getAriaLevel ? (s) => i.accessibilityProvider.getAriaLevel(s.element) : (s) => s.depth, getActiveDescendantId: i.accessibilityProvider.getActiveDescendantId && ((s) => i.accessibilityProvider.getActiveDescendantId(s.element)) }, keyboardNavigationLabelProvider: i.keyboardNavigationLabelProvider && { ...i.keyboardNavigationLabelProvider, getKeyboardNavigationLabel(s) {
    return i.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(s.element);
  } } };
}
var g4 = class {
  constructor(e) {
    this.delegate = e;
  }
  getHeight(e) {
    return this.delegate.getHeight(e.element);
  }
  getTemplateId(e) {
    return this.delegate.getTemplateId(e.element);
  }
  hasDynamicHeight(e) {
    return !!this.delegate.hasDynamicHeight && this.delegate.hasDynamicHeight(e.element);
  }
  setDynamicHeight(e, t) {
    this.delegate.setDynamicHeight?.(e.element, t);
  }
}, m4 = class wr {
  static lift(t) {
    return t instanceof wr ? t : new wr(t);
  }
  static empty(t = 0) {
    return new wr({ focus: [], selection: [], expanded: /* @__PURE__ */ Object.create(null), scrollTop: t });
  }
  constructor(t) {
    if (this.focus = new Set(t.focus), this.selection = new Set(t.selection), t.expanded instanceof Array) {
      this.expanded = /* @__PURE__ */ Object.create(null);
      for (const i of t.expanded) this.expanded[i] = 1;
    } else this.expanded = t.expanded;
    this.expanded = t.expanded, this.scrollTop = t.scrollTop;
  }
  toJSON() {
    return { focus: Array.from(this.focus), selection: Array.from(this.selection), expanded: this.expanded, scrollTop: this.scrollTop };
  }
}, v4 = class {
  constructor(e, t = []) {
    this._elements = t, this.disposables = new q(), this.onDidChange = A.forEach(e, (i) => this._elements = i, this.disposables);
  }
  get elements() {
    return this._elements;
  }
  dispose() {
    this.disposables.dispose();
  }
}, su = class el {
  constructor(t, i, s, n, r, o = {}) {
    this.renderer = t, this.model = i, this.activeNodes = n, this.renderedIndentGuides = r, this.renderedElements = /* @__PURE__ */ new Map(), this.renderedNodes = /* @__PURE__ */ new Map(), this.indent = el.DefaultIndent, this.hideTwistiesOfChildlessElements = false, this.shouldRenderIndentGuides = false, this.activeIndentNodes = /* @__PURE__ */ new Set(), this.disposables = new q(), this.indentGuidesDisposable = this.disposables.add(new De()), this.templateId = t.templateId, this.updateOptions(o), A.map(s, (a) => a.node)(this.onDidChangeNodeTwistieState, this, this.disposables), t.onDidChangeTwistieState?.(this.onDidChangeTwistieState, this, this.disposables);
  }
  updateOptions(t = {}) {
    if (typeof t.indent < "u") {
      const i = Un(t.indent, 0, 40);
      if (i !== this.indent) {
        this.indent = i;
        for (const [s, n] of this.renderedNodes) this.renderTreeElement(s, n);
      }
    }
    if (typeof t.renderIndentGuides < "u") {
      const i = t.renderIndentGuides !== "none";
      if (i !== this.shouldRenderIndentGuides) {
        this.shouldRenderIndentGuides = i;
        for (const [s, n] of this.renderedNodes) this._renderIndentGuides(s, n);
        if (this.indentGuidesDisposable.clear(), i) {
          const s = new q();
          this.activeNodes.onDidChange(this._onDidChangeActiveNodes, this, s), this.indentGuidesDisposable.value = s, this._onDidChangeActiveNodes(this.activeNodes.elements);
        }
      }
    }
    typeof t.hideTwistiesOfChildlessElements < "u" && (this.hideTwistiesOfChildlessElements = t.hideTwistiesOfChildlessElements);
  }
  renderTemplate(t) {
    const i = Z(t, ie(".monaco-tl-row")), s = Z(i, ie(".monaco-tl-indent")), n = Z(i, ie(".monaco-tl-twistie")), r = Z(i, ie(".monaco-tl-contents")), o = this.renderer.renderTemplate(r);
    return { container: t, indent: s, twistie: n, indentGuidesDisposable: ee.None, templateData: o };
  }
  renderElement(t, i, s, n) {
    this.renderedNodes.set(t, s), this.renderedElements.set(t.element, t), this.renderTreeElement(t, s), this.renderer.renderElement(t, i, s.templateData, n);
  }
  disposeElement(t, i, s, n) {
    s.indentGuidesDisposable.dispose(), this.renderer.disposeElement?.(t, i, s.templateData, n), typeof n == "number" && (this.renderedNodes.delete(t), this.renderedElements.delete(t.element));
  }
  disposeTemplate(t) {
    this.renderer.disposeTemplate(t.templateData);
  }
  onDidChangeTwistieState(t) {
    const i = this.renderedElements.get(t);
    i && this.onDidChangeNodeTwistieState(i);
  }
  onDidChangeNodeTwistieState(t) {
    const i = this.renderedNodes.get(t);
    i && (this._onDidChangeActiveNodes(this.activeNodes.elements), this.renderTreeElement(t, i));
  }
  renderTreeElement(t, i) {
    const s = el.DefaultIndent + (t.depth - 1) * this.indent;
    i.twistie.style.paddingLeft = `${s}px`, i.indent.style.width = `${s + this.indent - 16}px`, t.collapsible ? i.container.setAttribute("aria-expanded", String(!t.collapsed)) : i.container.removeAttribute("aria-expanded"), i.twistie.classList.remove(...we.asClassNameArray(be.treeItemExpanded));
    let n = false;
    this.renderer.renderTwistie && (n = this.renderer.renderTwistie(t.element, i.twistie)), t.collapsible && (!this.hideTwistiesOfChildlessElements || t.visibleChildrenCount > 0) ? (n || i.twistie.classList.add(...we.asClassNameArray(be.treeItemExpanded)), i.twistie.classList.add("collapsible"), i.twistie.classList.toggle("collapsed", t.collapsed)) : i.twistie.classList.remove("collapsible", "collapsed"), this._renderIndentGuides(t, i);
  }
  _renderIndentGuides(t, i) {
    if (pi(i.indent), i.indentGuidesDisposable.dispose(), !this.shouldRenderIndentGuides) return;
    const s = new q();
    for (; ; ) {
      const n = this.model.getNodeLocation(t), r = this.model.getParentNodeLocation(n);
      if (!r) break;
      const o = this.model.getNode(r), a = ie(".indent-guide", { style: `width: ${this.indent}px` });
      this.activeIndentNodes.has(o) && a.classList.add("active"), i.indent.childElementCount === 0 ? i.indent.appendChild(a) : i.indent.insertBefore(a, i.indent.firstElementChild), this.renderedIndentGuides.add(o, a), s.add(re(() => this.renderedIndentGuides.delete(o, a))), t = o;
    }
    i.indentGuidesDisposable = s;
  }
  _onDidChangeActiveNodes(t) {
    if (!this.shouldRenderIndentGuides) return;
    const i = /* @__PURE__ */ new Set();
    t.forEach((s) => {
      const n = this.model.getNodeLocation(s);
      try {
        const r = this.model.getParentNodeLocation(n);
        s.collapsible && s.children.length > 0 && !s.collapsed ? i.add(s) : r && i.add(this.model.getNode(r));
      } catch {
      }
    }), this.activeIndentNodes.forEach((s) => {
      i.has(s) || this.renderedIndentGuides.forEach(s, (n) => n.classList.remove("active"));
    }), i.forEach((s) => {
      this.activeIndentNodes.has(s) || this.renderedIndentGuides.forEach(s, (n) => n.classList.add("active"));
    }), this.activeIndentNodes = i;
  }
  dispose() {
    this.renderedNodes.clear(), this.renderedElements.clear(), nt(this.disposables);
  }
};
su.DefaultIndent = 8;
var b4 = su;
function y4(e, t) {
  const i = t.toLowerCase().indexOf(e);
  let s;
  if (i > -1) {
    s = [Number.MAX_SAFE_INTEGER, 0];
    for (let n = e.length; n > 0; n--) s.push(i + n - 1);
  }
  return s;
}
var w4 = class {
  constructor(e, t, i) {
    this._keyboardNavigationLabelProvider = e, this._filter = t, this._defaultFindVisibility = i, this._totalCount = 0, this._matchCount = 0, this._findMatchType = 0, this._findMode = 0, this._pattern = "", this._lowercasePattern = "", this.disposables = new q();
  }
  get totalCount() {
    return this._totalCount;
  }
  get matchCount() {
    return this._matchCount;
  }
  set findMatchType(e) {
    this._findMatchType = e;
  }
  get findMatchType() {
    return this._findMatchType;
  }
  set findMode(e) {
    this._findMode = e;
  }
  get findMode() {
    return this._findMode;
  }
  set pattern(e) {
    this._pattern = e, this._lowercasePattern = e.toLowerCase();
  }
  filter(e, t) {
    let i = 1;
    if (this._filter) {
      const r = this._filter.filter(e, t);
      if (typeof r == "boolean" ? i = r ? 1 : 0 : iu(r) ? i = Sa(r.visibility) : i = r, i === 0) return false;
    }
    if (this._totalCount++, !this._pattern) return this._matchCount++, { data: mi.Default, visibility: i };
    const s = this._keyboardNavigationLabelProvider.getKeyboardNavigationLabel(e), n = Array.isArray(s) ? s : [s];
    for (const r of n) {
      const o = r && r.toString();
      if (typeof o > "u") return { data: mi.Default, visibility: i };
      let a;
      if (this._findMatchType === 1 ? a = y4(this._lowercasePattern, o.toLowerCase()) : a = sd(this._pattern, this._lowercasePattern, 0, o, o.toLowerCase(), 0, { firstMatchCanBeWeak: true, boostFullMatch: true }), a) return this._matchCount++, n.length === 1 ? { data: a, visibility: i } : { data: { label: o, score: a }, visibility: i };
    }
    return this._findMode === 1 ? typeof this._defaultFindVisibility == "number" ? this._defaultFindVisibility : this._defaultFindVisibility ? this._defaultFindVisibility(e) : 2 : { data: mi.Default, visibility: i };
  }
  reset() {
    this._totalCount = 0, this._matchCount = 0;
  }
  dispose() {
    nt(this.disposables);
  }
}, _4 = class extends Ys {
  constructor(e, t, i) {
    super({ icon: e.icon, title: e.title, isChecked: e.isChecked, inputActiveOptionBorder: t.inputActiveOptionBorder, inputActiveOptionForeground: t.inputActiveOptionForeground, inputActiveOptionBackground: t.inputActiveOptionBackground, hoverDelegate: i }), this.id = e.id;
  }
}, S4 = class {
  constructor(e) {
    this.stateMap = new Map(e.map((t) => [t.id, { ...t }]));
  }
  states() {
    return Array.from(this.stateMap.values());
  }
  get(e) {
    const t = this.stateMap.get(e);
    if (t === void 0) throw new Error(`No state found for toggle id ${e}`);
    return t.isChecked;
  }
  set(e, t) {
    const i = this.stateMap.get(e);
    if (i === void 0) throw new Error(`No state found for toggle id ${e}`);
    return i.isChecked === t ? false : (i.isChecked = t, true);
  }
}, C4 = { inputBoxStyles: o4, toggleStyles: Jd, listFilterWidgetBackground: void 0, listFilterWidgetNoMatchesOutline: void 0, listFilterWidgetOutline: void 0, listFilterWidgetShadow: void 0 }, D4 = class extends ee {
  constructor(e, t, i, s, n = [], r) {
    super(), this.tree = t, this.elements = Bo(".monaco-tree-type-filter", [Bo(".monaco-tree-type-filter-input@findInput"), Bo(".monaco-tree-type-filter-actionbar@actionbar")]), this.toggles = [], this._onDidDisable = this._register(new L()), this.onDidDisable = this._onDidDisable.event, e.appendChild(this.elements.root), this._register(re(() => this.elements.root.remove()));
    const o = r?.styles ?? C4;
    o.listFilterWidgetBackground && (this.elements.root.style.backgroundColor = o.listFilterWidgetBackground), o.listFilterWidgetShadow && (this.elements.root.style.boxShadow = `0 0 8px 2px ${o.listFilterWidgetShadow}`);
    const a = this._register($o());
    this.toggles = n.map((f) => this._register(new _4(f, o.toggleStyles, a))), this.onDidToggleChange = A.any(...this.toggles.map((f) => A.map(f.onChange, () => ({ id: f.id, isChecked: f.checked }))));
    const c = r?.history || [];
    this.findInput = this._register(new eu(this.elements.findInput, i, { label: W(31, null), placeholder: s, additionalToggles: this.toggles, showCommonFindToggles: false, inputBoxStyles: o.inputBoxStyles, toggleStyles: o.toggleStyles, history: new Set(c) })), this.actionbar = this._register(new Qd(this.elements.actionbar));
    const h = this._register(new ce(this.findInput.inputBox.inputElement, "keydown")), d = A.chain(h.event, (f) => f.map((p) => new Oe(p)));
    this._register(d((f) => {
      if (f.equals(3)) {
        f.preventDefault(), f.stopPropagation(), this.findInput.inputBox.addToHistory(), this.tree.domFocus();
        return;
      }
      if (f.equals(18)) {
        f.preventDefault(), f.stopPropagation(), this.findInput.inputBox.isAtLastInHistory() || this.findInput.inputBox.isNowhereInHistory() ? (this.findInput.inputBox.addToHistory(), this.tree.domFocus()) : this.findInput.inputBox.showNextValue();
        return;
      }
      if (f.equals(16)) {
        f.preventDefault(), f.stopPropagation(), this.findInput.inputBox.showPreviousValue();
        return;
      }
    }));
    const u = this._register(new _a("close", W(32, null), "codicon codicon-close", true, () => this.dispose()));
    this.actionbar.push(u, { icon: true, label: false }), this.onDidChangeValue = this.findInput.onDidChange;
  }
  get value() {
    return this.findInput.inputBox.value;
  }
  set value(e) {
    this.findInput.inputBox.value = e;
  }
  setToggleState(e, t) {
    const i = this.toggles.find((s) => s.id === e);
    i && (i.checked = t);
  }
  setPlaceHolder(e) {
    this.findInput.inputBox.setPlaceHolder(e);
  }
  getHistory() {
    return this.findInput.inputBox.getHistory();
  }
  focus() {
    this.findInput.focus();
  }
  select() {
    this.findInput.select(), this.findInput.inputBox.addToHistory(true);
  }
  showMessage(e) {
    this.findInput.showMessage(e);
  }
  clearMessage() {
    this.findInput.clearMessage();
  }
  async dispose() {
    this._onDidDisable.fire(), this.elements.root.classList.add("disabled"), await Pn(300), super.dispose();
  }
}, E4 = class {
  constructor(e, t, i, s = {}) {
    this.tree = e, this.filter = t, this.contextViewProvider = i, this.options = s, this._pattern = "", this.previousPattern = "", this._onDidChangePattern = new L(), this.onDidChangePattern = this._onDidChangePattern.event, this._onDidChangeOpenState = new L(), this.onDidChangeOpenState = this._onDidChangeOpenState.event, this.enabledDisposables = new q(), this.disposables = new q(), this.toggles = new S4(s.toggles ?? []), this._placeholder = s.placeholder ?? W(33, null);
  }
  get pattern() {
    return this._pattern;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(e) {
    this._placeholder = e, this.widget?.setPlaceHolder(e);
  }
  isOpened() {
    return !!this.widget;
  }
  open() {
    if (this.widget) {
      this.widget.focus(), this.widget.select();
      return;
    }
    this.tree.updateOptions({ paddingTop: 30 }), this.widget = new D4(this.tree.getHTMLElement(), this.tree, this.contextViewProvider, this.placeholder, this.toggles.states(), { ...this.options, history: this._history }), this.enabledDisposables.add(this.widget), this.widget.onDidChangeValue(this.onDidChangeValue, this, this.enabledDisposables), this.widget.onDidDisable(this.close, this, this.enabledDisposables), this.widget.onDidToggleChange(this.onDidToggleChange, this, this.enabledDisposables), this.widget.focus(), this.widget.value = this.previousPattern, this.widget.select(), this._onDidChangeOpenState.fire(true);
  }
  close() {
    this.widget && (this.tree.updateOptions({ paddingTop: 0 }), this._history = this.widget.getHistory(), this.widget = void 0, this.enabledDisposables.clear(), this.previousPattern = this.pattern, this.onDidChangeValue(""), this.tree.domFocus(), this._onDidChangeOpenState.fire(false));
  }
  onDidChangeValue(e) {
    this._pattern = e, this._onDidChangePattern.fire(e), this.filter.pattern = e, this.applyPattern(e);
  }
  onDidToggleChange(e) {
    this.toggles.set(e.id, e.isChecked);
  }
  updateToggleState(e, t) {
    this.toggles.set(e, t), this.widget?.setToggleState(e, t);
  }
  renderMessage(e, t) {
    e ? this.tree.options.showNotFoundMessage ?? true ? this.widget?.showMessage({ type: 2, content: t ?? W(34, null) }) : this.widget?.showMessage({ type: 2 }) : this.widget?.clearMessage();
  }
  alertResults(e) {
    zs(e ? W(36, null, e) : W(35, null));
  }
  dispose() {
    this._history = void 0, this._onDidChangePattern.dispose(), this.enabledDisposables.dispose(), this.disposables.dispose();
  }
}, k4 = class extends E4 {
  constructor(e, t, i, s = {}) {
    const n = s.defaultFindMode ?? 0, r = s.defaultFindMatchType ?? 0, o = [{ id: "mode", icon: be.listFilter, title: W(39, null), isChecked: n === 1 }, { id: "matchType", icon: be.searchFuzzy, title: W(40, null), isChecked: r === 0 }];
    t.findMatchType = r, t.findMode = n, super(e, t, i, { ...s, toggles: o }), this.filter = t, this._onDidChangeMode = new L(), this.onDidChangeMode = this._onDidChangeMode.event, this._onDidChangeMatchType = new L(), this.onDidChangeMatchType = this._onDidChangeMatchType.event, this.disposables.add(this.tree.onDidChangeModel(() => {
      this.isOpened() && (this.pattern.length !== 0 && this.tree.refilter(), this.render());
    })), this.disposables.add(this.tree.onWillRefilter(() => this.filter.reset()));
  }
  get mode() {
    return this.toggles.get("mode") ? 1 : 0;
  }
  set mode(e) {
    if (e === this.mode) return;
    const t = e === 1;
    this.updateToggleState("mode", t), this.placeholder = W(t ? 37 : 38, null), this.filter.findMode = e, this.tree.refilter(), this.render(), this._onDidChangeMode.fire(e);
  }
  get matchType() {
    return this.toggles.get("matchType") ? 0 : 1;
  }
  set matchType(e) {
    e !== this.matchType && (this.updateToggleState("matchType", e === 0), this.filter.findMatchType = e, this.tree.refilter(), this.render(), this._onDidChangeMatchType.fire(e));
  }
  updateOptions(e = {}) {
    e.defaultFindMode !== void 0 && (this.mode = e.defaultFindMode), e.defaultFindMatchType !== void 0 && (this.matchType = e.defaultFindMatchType);
  }
  applyPattern(e) {
    this.tree.refilter(), e && this.tree.focusNext(0, true, void 0, (i) => !mi.isDefault(i.filterData));
    const t = this.tree.getFocus();
    if (t.length > 0) {
      const i = t[0];
      this.tree.getRelativeTop(i) === null && this.tree.reveal(i, 0.5);
    }
    this.render();
  }
  shouldAllowFocus(e) {
    return !this.isOpened() || !this.pattern || this.filter.totalCount > 0 && this.filter.matchCount <= 1 ? true : !mi.isDefault(e.filterData);
  }
  onDidToggleChange(e) {
    e.id === "mode" ? this.mode = e.isChecked ? 1 : 0 : e.id === "matchType" && (this.matchType = e.isChecked ? 0 : 1);
  }
  render() {
    const t = this.filter.matchCount === 0 && this.filter.totalCount > 0 && this.pattern.length > 0;
    this.renderMessage(t), this.pattern.length && this.alertResults(this.filter.matchCount);
  }
};
function T4(e, t) {
  return e.position === t.position && nu(e, t);
}
function nu(e, t) {
  return e.node.element === t.node.element && e.startIndex === t.startIndex && e.height === t.height && e.endIndex === t.endIndex;
}
var x4 = class {
  constructor(e = []) {
    this.stickyNodes = e;
  }
  get count() {
    return this.stickyNodes.length;
  }
  equal(e) {
    return vs(this.stickyNodes, e.stickyNodes, T4);
  }
  contains(e) {
    return this.stickyNodes.some((t) => t.node.element === e.element);
  }
  lastNodePartiallyVisible() {
    if (this.count === 0) return false;
    const e = this.stickyNodes[this.count - 1];
    if (this.count === 1) return e.position !== 0;
    const t = this.stickyNodes[this.count - 2];
    return t.position + t.height !== e.position;
  }
  animationStateChanged(e) {
    if (!vs(this.stickyNodes, e.stickyNodes, nu) || this.count === 0) return false;
    const t = this.stickyNodes[this.count - 1], i = e.stickyNodes[e.count - 1];
    return t.position !== i.position;
  }
}, A4 = class {
  constrainStickyScrollNodes(e, t, i) {
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      if (n.position + n.height > i || s >= t) return e.slice(0, s);
    }
    return e;
  }
}, ru = class extends ee {
  constructor(e, t, i, s, n, r = {}) {
    super(), this.tree = e, this.model = t, this.view = i, this.treeDelegate = n, this.maxWidgetViewRatio = 0.4;
    const o = this.validateStickySettings(r);
    this.stickyScrollMaxItemCount = o.stickyScrollMaxItemCount, this.stickyScrollDelegate = r.stickyScrollDelegate ?? new A4(), this.paddingTop = r.paddingTop ?? 0, this._widget = this._register(new N4(i.getScrollableElement(), i, e, s, n, r.accessibilityProvider)), this.onDidChangeHasFocus = this._widget.onDidChangeHasFocus, this.onContextMenu = this._widget.onContextMenu, this._register(i.onDidScroll(() => this.update())), this._register(i.onDidChangeContentHeight(() => this.update())), this._register(e.onDidChangeCollapseState(() => this.update())), this._register(t.onDidSpliceRenderedNodes((a) => {
      const c = this._widget.state;
      if (!c) return;
      if (a.deleteCount > 0 && c.stickyNodes.some((u) => !this.model.has(this.model.getNodeLocation(u.node)))) {
        this.update();
        return;
      }
      c.stickyNodes.some((u) => {
        const f = this.model.getListIndex(this.model.getNodeLocation(u.node));
        return f >= a.start && f < a.start + a.deleteCount && c.contains(u.node);
      }) && this._widget.rerender();
    })), this.update();
  }
  get height() {
    return this._widget.height;
  }
  get count() {
    return this._widget.count;
  }
  getNode(e) {
    return this._widget.getNode(e);
  }
  getNodeAtHeight(e) {
    let t;
    if (e === 0 ? t = this.view.firstVisibleIndex : t = this.view.indexAt(e + this.view.scrollTop), !(t < 0 || t >= this.view.length)) return this.view.element(t);
  }
  update() {
    const e = this.getNodeAtHeight(this.paddingTop);
    if (!e || this.tree.scrollTop <= this.paddingTop) {
      this._widget.setState(void 0);
      return;
    }
    const t = this.findStickyState(e);
    this._widget.setState(t);
  }
  findStickyState(e) {
    const t = [];
    let i = e, s = 0, n = this.getNextStickyNode(i, void 0, s);
    for (; n && (t.push(n), s += n.height, !(t.length <= this.stickyScrollMaxItemCount && (i = this.getNextVisibleNode(n), !i))); ) n = this.getNextStickyNode(i, n.node, s);
    const r = this.constrainStickyNodes(t);
    return r.length ? new x4(r) : void 0;
  }
  getNextVisibleNode(e) {
    return this.getNodeAtHeight(e.position + e.height);
  }
  getNextStickyNode(e, t, i) {
    const s = this.getAncestorUnderPrevious(e, t);
    if (s && !(s === e && (!this.nodeIsUncollapsedParent(e) || this.nodeTopAlignsWithStickyNodesBottom(e, i)))) return this.createStickyScrollNode(s, i);
  }
  nodeTopAlignsWithStickyNodesBottom(e, t) {
    const i = this.getNodeIndex(e), s = this.view.getElementTop(i), n = t;
    return this.view.scrollTop === s - n;
  }
  createStickyScrollNode(e, t) {
    const i = this.treeDelegate.getHeight(e), { startIndex: s, endIndex: n } = this.getNodeRange(e), r = this.calculateStickyNodePosition(n, t, i);
    return { node: e, position: r, height: i, startIndex: s, endIndex: n };
  }
  getAncestorUnderPrevious(e, t = void 0) {
    let i = e, s = this.getParentNode(i);
    for (; s; ) {
      if (s === t) return i;
      i = s, s = this.getParentNode(i);
    }
    if (t === void 0) return i;
  }
  calculateStickyNodePosition(e, t, i) {
    let s = this.view.getRelativeTop(e);
    if (s === null && this.view.firstVisibleIndex === e && e + 1 < this.view.length) {
      const c = this.treeDelegate.getHeight(this.view.element(e)), h = this.view.getRelativeTop(e + 1);
      s = h ? h - c / this.view.renderHeight : null;
    }
    if (s === null) return t;
    const n = this.view.element(e), r = this.treeDelegate.getHeight(n), a = s * this.view.renderHeight + r;
    return t + i > a && t <= a ? a - i : t;
  }
  constrainStickyNodes(e) {
    if (e.length === 0) return [];
    const t = this.view.renderHeight * this.maxWidgetViewRatio, i = e[e.length - 1];
    if (e.length <= this.stickyScrollMaxItemCount && i.position + i.height <= t) return e;
    const s = this.stickyScrollDelegate.constrainStickyScrollNodes(e, this.stickyScrollMaxItemCount, t);
    if (!s.length) return [];
    const n = s[s.length - 1];
    if (s.length > this.stickyScrollMaxItemCount || n.position + n.height > t) throw new Error("stickyScrollDelegate violates constraints");
    return s;
  }
  getParentNode(e) {
    const t = this.model.getNodeLocation(e), i = this.model.getParentNodeLocation(t);
    return i ? this.model.getNode(i) : void 0;
  }
  nodeIsUncollapsedParent(e) {
    const t = this.model.getNodeLocation(e);
    return this.model.getListRenderCount(t) > 1;
  }
  getNodeIndex(e) {
    const t = this.model.getNodeLocation(e);
    return this.model.getListIndex(t);
  }
  getNodeRange(e) {
    const t = this.model.getNodeLocation(e), i = this.model.getListIndex(t);
    if (i < 0) throw new Error("Node not found in tree");
    const s = this.model.getListRenderCount(t), n = i + s - 1;
    return { startIndex: i, endIndex: n };
  }
  nodePositionTopBelowWidget(e) {
    const t = [];
    let i = this.getParentNode(e);
    for (; i; ) t.push(i), i = this.getParentNode(i);
    let s = 0;
    for (let n = 0; n < t.length && n < this.stickyScrollMaxItemCount; n++) s += this.treeDelegate.getHeight(t[n]);
    return s;
  }
  getFocus() {
    return this._widget.getFocus();
  }
  domFocus() {
    this._widget.domFocus();
  }
  focusedLast() {
    return this._widget.focusedLast();
  }
  updateOptions(e = {}) {
    if (e.paddingTop !== void 0 && (this.paddingTop = e.paddingTop), e.stickyScrollMaxItemCount !== void 0) {
      const t = this.validateStickySettings(e);
      this.stickyScrollMaxItemCount !== t.stickyScrollMaxItemCount && (this.stickyScrollMaxItemCount = t.stickyScrollMaxItemCount, this.update());
    }
  }
  validateStickySettings(e) {
    let t = 7;
    return typeof e.stickyScrollMaxItemCount == "number" && (t = Math.max(e.stickyScrollMaxItemCount, 1)), { stickyScrollMaxItemCount: t };
  }
  setModel(e) {
    this.model = e;
  }
}, N4 = class {
  constructor(e, t, i, s, n, r) {
    this.view = t, this.tree = i, this.treeRenderers = s, this.treeDelegate = n, this.accessibilityProvider = r, this._previousElements = [], this._previousStateDisposables = new q(), this._rootDomNode = ie(".monaco-tree-sticky-container.empty"), e.appendChild(this._rootDomNode);
    const o = ie(".monaco-tree-sticky-container-shadow");
    this._rootDomNode.appendChild(o), this.stickyScrollFocus = new I4(this._rootDomNode, t), this.onDidChangeHasFocus = this.stickyScrollFocus.onDidChangeHasFocus, this.onContextMenu = this.stickyScrollFocus.onContextMenu;
  }
  get state() {
    return this._previousState;
  }
  get height() {
    if (!this._previousState) return 0;
    const e = this._previousState.stickyNodes[this._previousState.count - 1];
    return e.position + e.height;
  }
  get count() {
    return this._previousState?.count ?? 0;
  }
  getNode(e) {
    return this._previousState?.stickyNodes.find((t) => t.node === e);
  }
  setState(e) {
    const t = !!this._previousState && this._previousState.count > 0, i = !!e && e.count > 0;
    if (!t && !i || t && i && this._previousState.equal(e)) return;
    if (t !== i && this.setVisible(i), !i) {
      this._previousState = void 0, this._previousElements = [], this._previousStateDisposables.clear();
      return;
    }
    const s = e.stickyNodes[e.count - 1];
    this._previousState && e.animationStateChanged(this._previousState) ? this._previousElements[this._previousState.count - 1].style.top = `${s.position}px` : this.renderState(e), this._previousState = e, this._rootDomNode.style.height = `${s.position + s.height}px`;
  }
  renderState(e) {
    this._previousStateDisposables.clear();
    const t = Array(e.count);
    for (let i = e.count - 1; i >= 0; i--) {
      const s = e.stickyNodes[i], { element: n, disposable: r } = this.createElement(s, i, e.count);
      t[i] = n, this._rootDomNode.appendChild(n), this._previousStateDisposables.add(r);
    }
    this.stickyScrollFocus.updateElements(t, e), this._previousElements = t;
  }
  rerender() {
    this._previousState && this.renderState(this._previousState);
  }
  createElement(e, t, i) {
    const s = e.startIndex, n = document.createElement("div");
    n.style.top = `${e.position}px`, this.tree.options.setRowHeight !== false && (n.style.height = `${e.height}px`), this.tree.options.setRowLineHeight !== false && (n.style.lineHeight = `${e.height}px`), n.classList.add("monaco-tree-sticky-row"), n.classList.add("monaco-list-row"), n.setAttribute("data-index", `${s}`), n.setAttribute("data-parity", s % 2 === 0 ? "even" : "odd"), n.setAttribute("id", this.view.getElementID(s));
    const r = this.setAccessibilityAttributes(n, e.node.element, t, i), o = this.treeDelegate.getTemplateId(e.node), a = this.treeRenderers.find((u) => u.templateId === o);
    if (!a) throw new Error(`No renderer found for template id ${o}`);
    let c = e.node;
    c === this.tree.getNode(this.tree.getNodeLocation(e.node)) && (c = new Proxy(e.node, {}));
    const h = a.renderTemplate(n);
    a.renderElement(c, e.startIndex, h, e.height);
    const d = re(() => {
      r.dispose(), a.disposeElement(c, e.startIndex, h, e.height), a.disposeTemplate(h), n.remove();
    });
    return { element: n, disposable: d };
  }
  setAccessibilityAttributes(e, t, i, s) {
    if (!this.accessibilityProvider) return ee.None;
    this.accessibilityProvider.getSetSize && e.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(t, i, s))), this.accessibilityProvider.getPosInSet && e.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(t, i))), this.accessibilityProvider.getRole && e.setAttribute("role", this.accessibilityProvider.getRole(t) ?? "treeitem");
    const n = this.accessibilityProvider.getAriaLabel(t), r = n && typeof n != "string" ? n : ph(n), o = $n((c) => {
      const h = c.readObservable(r);
      h ? e.setAttribute("aria-label", h) : e.removeAttribute("aria-label");
    });
    typeof n == "string" || n && e.setAttribute("aria-label", n.get());
    const a = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(t);
    return typeof a == "number" && e.setAttribute("aria-level", `${a}`), e.setAttribute("aria-selected", String(false)), o;
  }
  setVisible(e) {
    this._rootDomNode.classList.toggle("empty", !e), e || this.stickyScrollFocus.updateElements([], void 0);
  }
  getFocus() {
    return this.stickyScrollFocus.getFocus();
  }
  domFocus() {
    this.stickyScrollFocus.domFocus();
  }
  focusedLast() {
    return this.stickyScrollFocus.focusedLast();
  }
  dispose() {
    this.stickyScrollFocus.dispose(), this._previousStateDisposables.dispose(), this._rootDomNode.remove();
  }
}, I4 = class extends ee {
  constructor(e, t) {
    super(), this.container = e, this.view = t, this.focusedIndex = -1, this.elements = [], this._onDidChangeHasFocus = this._register(new L()), this.onDidChangeHasFocus = this._onDidChangeHasFocus.event, this._onContextMenu = this._register(new L()), this.onContextMenu = this._onContextMenu.event, this._domHasFocus = false, this._register(O(this.container, "focus", () => this.onFocus())), this._register(O(this.container, "blur", () => this.onBlur())), this._register(this.view.onDidFocus(() => this.toggleStickyScrollFocused(false))), this._register(this.view.onKeyDown((i) => this.onKeyDown(i))), this._register(this.view.onMouseDown((i) => this.onMouseDown(i))), this._register(this.view.onContextMenu((i) => this.handleContextMenu(i)));
  }
  get domHasFocus() {
    return this._domHasFocus;
  }
  set domHasFocus(e) {
    e !== this._domHasFocus && (this._onDidChangeHasFocus.fire(e), this._domHasFocus = e);
  }
  handleContextMenu(e) {
    const t = e.browserEvent.target;
    if (!js(t) && !Ks(t)) {
      this.focusedLast() && this.view.domFocus();
      return;
    }
    if (!gi(e.browserEvent)) {
      if (!this.state) throw new Error("Context menu should not be triggered when state is undefined");
      const r = this.state.stickyNodes.findIndex((o) => o.node.element === e.element?.element);
      if (r === -1) throw new Error("Context menu should not be triggered when element is not in sticky scroll widget");
      this.container.focus(), this.setFocus(r);
      return;
    }
    if (!this.state || this.focusedIndex < 0) throw new Error("Context menu key should not be triggered when focus is not in sticky scroll widget");
    const s = this.state.stickyNodes[this.focusedIndex].node.element, n = this.elements[this.focusedIndex];
    this._onContextMenu.fire({ element: s, anchor: n, browserEvent: e.browserEvent, isStickyScroll: true });
  }
  onKeyDown(e) {
    if (this.domHasFocus && this.state) {
      if (e.key === "ArrowUp") this.setFocusedElement(Math.max(0, this.focusedIndex - 1)), e.preventDefault(), e.stopPropagation();
      else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        if (this.focusedIndex >= this.state.count - 1) {
          const t = this.state.stickyNodes[this.state.count - 1].startIndex + 1;
          this.view.domFocus(), this.view.setFocus([t]), this.scrollNodeUnderWidget(t, this.state);
        } else this.setFocusedElement(this.focusedIndex + 1);
        e.preventDefault(), e.stopPropagation();
      }
    }
  }
  onMouseDown(e) {
    const t = e.browserEvent.target;
    !js(t) && !Ks(t) || (e.browserEvent.preventDefault(), e.browserEvent.stopPropagation());
  }
  updateElements(e, t) {
    if (t && t.count === 0) throw new Error("Sticky scroll state must be undefined when there are no sticky nodes");
    if (t && t.count !== e.length) throw new Error("Sticky scroll focus received illigel state");
    const i = this.focusedIndex;
    if (this.removeFocus(), this.elements = e, this.state = t, t) {
      const s = Un(i, 0, t.count - 1);
      this.setFocus(s);
    } else this.domHasFocus && this.view.domFocus();
    this.container.tabIndex = t ? 0 : -1;
  }
  setFocusedElement(e) {
    const t = this.state;
    if (!t) throw new Error("Cannot set focus when state is undefined");
    if (this.setFocus(e), !(e < t.count - 1) && t.lastNodePartiallyVisible()) {
      const i = t.stickyNodes[e];
      this.scrollNodeUnderWidget(i.endIndex + 1, t);
    }
  }
  scrollNodeUnderWidget(e, t) {
    const i = t.stickyNodes[t.count - 1], s = t.count > 1 ? t.stickyNodes[t.count - 2] : void 0, n = this.view.getElementTop(e), r = s ? s.position + s.height + i.height : i.height;
    this.view.scrollTop = n - r;
  }
  getFocus() {
    if (!(!this.state || this.focusedIndex === -1)) return this.state.stickyNodes[this.focusedIndex].node.element;
  }
  domFocus() {
    if (!this.state) throw new Error("Cannot focus when state is undefined");
    this.container.focus();
  }
  focusedLast() {
    return this.state ? this.view.getHTMLElement().classList.contains("sticky-scroll-focused") : false;
  }
  removeFocus() {
    this.focusedIndex !== -1 && (this.toggleElementFocus(this.elements[this.focusedIndex], false), this.focusedIndex = -1);
  }
  setFocus(e) {
    if (0 > e) throw new Error("addFocus() can not remove focus");
    if (!this.state && e >= 0) throw new Error("Cannot set focus index when state is undefined");
    if (this.state && e >= this.state.count) throw new Error("Cannot set focus index to an index that does not exist");
    const t = this.focusedIndex;
    t >= 0 && this.toggleElementFocus(this.elements[t], false), e >= 0 && this.toggleElementFocus(this.elements[e], true), this.focusedIndex = e;
  }
  toggleElementFocus(e, t) {
    this.toggleElementActiveFocus(e, t && this.domHasFocus), this.toggleElementPassiveFocus(e, t);
  }
  toggleCurrentElementActiveFocus(e) {
    this.focusedIndex !== -1 && this.toggleElementActiveFocus(this.elements[this.focusedIndex], e);
  }
  toggleElementActiveFocus(e, t) {
    e.classList.toggle("focused", t);
  }
  toggleElementPassiveFocus(e, t) {
    e.classList.toggle("passive-focused", t);
  }
  toggleStickyScrollFocused(e) {
    this.view.getHTMLElement().classList.toggle("sticky-scroll-focused", e);
  }
  onFocus() {
    if (!this.state || this.elements.length === 0) throw new Error("Cannot focus when state is undefined or elements are empty");
    this.domHasFocus = true, this.toggleStickyScrollFocused(true), this.toggleCurrentElementActiveFocus(true), this.focusedIndex === -1 && this.setFocus(0);
  }
  onBlur() {
    this.domHasFocus = false, this.toggleCurrentElementActiveFocus(false);
  }
  dispose() {
    this.toggleStickyScrollFocused(false), this._onDidChangeHasFocus.fire(false), super.dispose();
  }
};
function os(e) {
  let t = ss.Unknown;
  return Oo(e.browserEvent.target, "monaco-tl-twistie", "monaco-tl-row") ? t = ss.Twistie : Oo(e.browserEvent.target, "monaco-tl-contents", "monaco-tl-row") ? t = ss.Element : Oo(e.browserEvent.target, "monaco-tree-type-filter", "monaco-list") && (t = ss.Filter), { browserEvent: e.browserEvent, element: e.element ? e.element.element : null, target: t };
}
function L4(e) {
  const t = js(e.browserEvent.target);
  return { element: e.element ? e.element.element : null, browserEvent: e.browserEvent, anchor: e.anchor, isStickyScroll: t };
}
function ur(e, t) {
  t(e), e.children.forEach((i) => ur(i, t));
}
var Ea = class {
  constructor(e, t) {
    this.getFirstViewElementWithTrait = e, this.identityProvider = t, this.nodes = [], this._onDidChange = new L(), this.onDidChange = this._onDidChange.event;
  }
  get nodeSet() {
    return this._nodeSet || (this._nodeSet = this.createNodeSet()), this._nodeSet;
  }
  set(e, t) {
    !t?.__forceEvent && vs(this.nodes, e) || this._set(e, false, t);
  }
  _set(e, t, i) {
    if (this.nodes = [...e], this.elements = void 0, this._nodeSet = void 0, !t) {
      const s = this;
      this._onDidChange.fire({ get elements() {
        return s.get();
      }, browserEvent: i });
    }
  }
  get() {
    return this.elements || (this.elements = this.nodes.map((e) => e.element)), [...this.elements];
  }
  getNodes() {
    return this.nodes;
  }
  has(e) {
    return this.nodeSet.has(e);
  }
  onDidModelSplice({ insertedNodes: e, deletedNodes: t }) {
    if (!this.identityProvider) {
      const a = this.createNodeSet(), c = (h) => a.delete(h);
      t.forEach((h) => ur(h, c)), this.set([...a.values()]);
      return;
    }
    const i = /* @__PURE__ */ new Set(), s = (a) => i.add(this.identityProvider.getId(a.element).toString());
    t.forEach((a) => ur(a, s));
    const n = /* @__PURE__ */ new Map(), r = (a) => n.set(this.identityProvider.getId(a.element).toString(), a);
    e.forEach((a) => ur(a, r));
    const o = [];
    for (const a of this.nodes) {
      const c = this.identityProvider.getId(a.element).toString();
      if (!i.has(c)) o.push(a);
      else {
        const d = n.get(c);
        d && d.visible && o.push(d);
      }
    }
    if (this.nodes.length > 0 && o.length === 0) {
      const a = this.getFirstViewElementWithTrait();
      a && o.push(a);
    }
    this._set(o, true);
  }
  createNodeSet() {
    const e = /* @__PURE__ */ new Set();
    for (const t of this.nodes) e.add(t);
    return e;
  }
}, R4 = class extends Kd {
  constructor(e, t, i) {
    super(e), this.tree = t, this.stickyScrollProvider = i;
  }
  onViewPointer(e) {
    if (Vd(e.browserEvent.target) || Gt(e.browserEvent.target) || qs(e.browserEvent.target) || e.browserEvent.isHandledByList) return;
    const t = e.element;
    if (!t) return super.onViewPointer(e);
    if (this.isSelectionRangeChangeEvent(e) || this.isSelectionSingleChangeEvent(e)) return super.onViewPointer(e);
    const i = e.browserEvent.target, s = i.classList.contains("monaco-tl-twistie") || i.classList.contains("monaco-icon-label") && i.classList.contains("folder-icon") && e.browserEvent.offsetX < 16, n = Ks(e.browserEvent.target);
    let r = false;
    if (n ? r = true : typeof this.tree.expandOnlyOnTwistieClick == "function" ? r = this.tree.expandOnlyOnTwistieClick(t.element) : r = !!this.tree.expandOnlyOnTwistieClick, n) this.handleStickyScrollMouseEvent(e, t);
    else {
      if (r && !s && e.browserEvent.detail !== 2) return super.onViewPointer(e);
      if (!this.tree.expandOnDoubleClick && e.browserEvent.detail === 2) return super.onViewPointer(e);
    }
    if (t.collapsible && (!n || s)) {
      const o = this.tree.getNodeLocation(t), a = e.browserEvent.altKey;
      if (this.tree.setFocus([o]), this.tree.toggleCollapsed(o, a), s) {
        e.browserEvent.isHandledByList = true;
        return;
      }
    }
    n || super.onViewPointer(e);
  }
  handleStickyScrollMouseEvent(e, t) {
    if (L2(e.browserEvent.target) || R2(e.browserEvent.target)) return;
    const i = this.stickyScrollProvider();
    if (!i) throw new Error("Sticky scroll controller not found");
    const s = this.list.indexOf(t), n = this.list.getElementTop(s), r = i.nodePositionTopBelowWidget(t);
    this.tree.scrollTop = n - r, this.list.domFocus(), this.list.setFocus([s]), this.list.setSelection([s]);
  }
  onDoubleClick(e) {
    e.browserEvent.target.classList.contains("monaco-tl-twistie") || !this.tree.expandOnDoubleClick || e.browserEvent.isHandledByList || super.onDoubleClick(e);
  }
  onMouseDown(e) {
    const t = e.browserEvent.target;
    if (!js(t) && !Ks(t)) {
      super.onMouseDown(e);
      return;
    }
  }
  onContextMenu(e) {
    const t = e.browserEvent.target;
    if (!js(t) && !Ks(t)) {
      super.onContextMenu(e);
      return;
    }
  }
}, M4 = class extends _t {
  constructor(e, t, i, s, n, r, o, a) {
    super(e, t, i, s, a), this.focusTrait = n, this.selectionTrait = r, this.anchorTrait = o;
  }
  createMouseController(e) {
    return new R4(this, e.tree, e.stickyScrollProvider);
  }
  splice(e, t, i = []) {
    if (super.splice(e, t, i), i.length === 0) return;
    const s = [], n = [];
    let r;
    i.forEach((o, a) => {
      this.focusTrait.has(o) && s.push(e + a), this.selectionTrait.has(o) && n.push(e + a), this.anchorTrait.has(o) && (r = e + a);
    }), s.length > 0 && super.setFocus(Ir([...super.getFocus(), ...s])), n.length > 0 && super.setSelection(Ir([...super.getSelection(), ...n])), typeof r == "number" && super.setAnchor(r);
  }
  setFocus(e, t, i = false) {
    super.setFocus(e, t), i || this.focusTrait.set(e.map((s) => this.element(s)), t);
  }
  setSelection(e, t, i = false) {
    super.setSelection(e, t), i || this.selectionTrait.set(e.map((s) => this.element(s)), t);
  }
  setAnchor(e, t = false) {
    super.setAnchor(e), t || (typeof e > "u" ? this.anchorTrait.set([]) : this.anchorTrait.set([this.element(e)]));
  }
}, P4 = class {
  constructor(e, t, i, s, n = {}) {
    this._user = e, this._options = n, this.eventBufferer = new Wr(), this.onDidChangeFindOpenState = A.None, this.onDidChangeStickyScrollFocused = A.None, this.disposables = new q(), this.onDidSwapModel = this.disposables.add(new L()), this.onDidChangeModelRelay = this.disposables.add(new ws()), this.onDidSpliceModelRelay = this.disposables.add(new ws()), this.onDidChangeCollapseStateRelay = this.disposables.add(new ws()), this.onDidChangeRenderNodeCountRelay = this.disposables.add(new ws()), this.onDidChangeActiveNodesRelay = this.disposables.add(new ws()), this._onWillRefilter = new L(), this.onWillRefilter = this._onWillRefilter.event, this._onDidUpdateOptions = new L(), this.onDidUpdateOptions = this._onDidUpdateOptions.event, this.modelDisposables = new q(), n.keyboardNavigationLabelProvider && (n.findWidgetEnabled ?? true) && (this.findFilter = new w4(n.keyboardNavigationLabelProvider, n.filter, n.defaultFindVisibility), n = { ...n, filter: this.findFilter }, this.disposables.add(this.findFilter)), this.model = this.createModel(e, n), this.treeDelegate = new g4(i);
    const r = this.disposables.add(new v4(this.onDidChangeActiveNodesRelay.event)), o = new Ul();
    this.renderers = s.map((a) => new b4(a, this.model, this.onDidChangeCollapseStateRelay.event, r, o, n));
    for (const a of this.renderers) this.disposables.add(a);
    if (this.focus = new Ea(() => this.view.getFocusedElements()[0], n.identityProvider), this.selection = new Ea(() => this.view.getSelectedElements()[0], n.identityProvider), this.anchor = new Ea(() => this.view.getAnchorElement(), n.identityProvider), this.view = new M4(e, t, this.treeDelegate, this.renderers, this.focus, this.selection, this.anchor, { ...p4(() => this.model, this.disposables, n), tree: this, stickyScrollProvider: () => this.stickyScrollController }), this.setupModel(this.model), n.keyboardSupport !== false) {
      const a = A.chain(this.view.onKeyDown, (c) => c.filter((h) => !Gt(h.target)).map((h) => new Oe(h)));
      A.chain(a, (c) => c.filter((h) => h.keyCode === 15))(this.onLeftArrow, this, this.disposables), A.chain(a, (c) => c.filter((h) => h.keyCode === 17))(this.onRightArrow, this, this.disposables), A.chain(a, (c) => c.filter((h) => h.keyCode === 10))(this.onSpace, this, this.disposables);
    }
    if ((n.findWidgetEnabled ?? true) && n.keyboardNavigationLabelProvider && n.contextViewProvider) {
      const a = { styles: n.findWidgetStyles, defaultFindMode: n.defaultFindMode, defaultFindMatchType: n.defaultFindMatchType, showNotFoundMessage: n.showNotFoundMessage };
      this.findController = this.disposables.add(new k4(this, this.findFilter, n.contextViewProvider, a)), this.focusNavigationFilter = (c) => this.findController.shouldAllowFocus(c), this.onDidChangeFindOpenState = this.findController.onDidChangeOpenState, this.onDidChangeFindMode = this.findController.onDidChangeMode, this.onDidChangeFindMatchType = this.findController.onDidChangeMatchType;
    } else this.onDidChangeFindMode = A.None, this.onDidChangeFindMatchType = A.None;
    n.enableStickyScroll && (this.stickyScrollController = new ru(this, this.model, this.view, this.renderers, this.treeDelegate, n), this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus), this.styleElement = Ns(this.view.getHTMLElement()), this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === "always");
  }
  get onDidScroll() {
    return this.view.onDidScroll;
  }
  get onDidChangeFocus() {
    return this.eventBufferer.wrapEvent(this.focus.onDidChange);
  }
  get onDidChangeSelection() {
    return this.eventBufferer.wrapEvent(this.selection.onDidChange);
  }
  get onMouseClick() {
    return A.map(this.view.onMouseClick, os);
  }
  get onMouseDblClick() {
    return A.filter(A.map(this.view.onMouseDblClick, os), (e) => e.target !== ss.Filter);
  }
  get onMouseOver() {
    return A.map(this.view.onMouseOver, os);
  }
  get onMouseOut() {
    return A.map(this.view.onMouseOut, os);
  }
  get onContextMenu() {
    return A.any(A.filter(A.map(this.view.onContextMenu, L4), (e) => !e.isStickyScroll), this.stickyScrollController?.onContextMenu ?? A.None);
  }
  get onTap() {
    return A.map(this.view.onTap, os);
  }
  get onPointer() {
    return A.map(this.view.onPointer, os);
  }
  get onKeyDown() {
    return this.view.onKeyDown;
  }
  get onKeyUp() {
    return this.view.onKeyUp;
  }
  get onKeyPress() {
    return this.view.onKeyPress;
  }
  get onDidFocus() {
    return this.view.onDidFocus;
  }
  get onDidBlur() {
    return this.view.onDidBlur;
  }
  get onDidChangeModel() {
    return A.any(this.onDidChangeModelRelay.event, this.onDidSwapModel.event);
  }
  get onDidChangeCollapseState() {
    return this.onDidChangeCollapseStateRelay.event;
  }
  get onDidChangeRenderNodeCount() {
    return this.onDidChangeRenderNodeCountRelay.event;
  }
  get findMode() {
    return this.findController?.mode ?? 0;
  }
  set findMode(e) {
    this.findController && (this.findController.mode = e);
  }
  get findMatchType() {
    return this.findController?.matchType ?? 0;
  }
  set findMatchType(e) {
    this.findController && (this.findController.matchType = e);
  }
  get onDidChangeFindPattern() {
    return this.findController ? this.findController.onDidChangePattern : A.None;
  }
  get expandOnDoubleClick() {
    return typeof this._options.expandOnDoubleClick > "u" ? true : this._options.expandOnDoubleClick;
  }
  get expandOnlyOnTwistieClick() {
    return typeof this._options.expandOnlyOnTwistieClick > "u" ? true : this._options.expandOnlyOnTwistieClick;
  }
  get onDidDispose() {
    return this.view.onDidDispose;
  }
  updateOptions(e = {}) {
    this._options = { ...this._options, ...e };
    for (const t of this.renderers) t.updateOptions(e);
    this.view.updateOptions(this._options), this.findController?.updateOptions(e), this.updateStickyScroll(e), this._onDidUpdateOptions.fire(this._options), this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === "always");
  }
  get options() {
    return this._options;
  }
  updateStickyScroll(e) {
    !this.stickyScrollController && this._options.enableStickyScroll ? (this.stickyScrollController = new ru(this, this.model, this.view, this.renderers, this.treeDelegate, this._options), this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus) : this.stickyScrollController && !this._options.enableStickyScroll && (this.onDidChangeStickyScrollFocused = A.None, this.stickyScrollController.dispose(), this.stickyScrollController = void 0), this.stickyScrollController?.updateOptions(e);
  }
  updateWidth(e) {
    const t = this.model.getListIndex(e);
    t !== -1 && this.view.updateWidth(t);
  }
  getHTMLElement() {
    return this.view.getHTMLElement();
  }
  get contentHeight() {
    return this.view.contentHeight;
  }
  get contentWidth() {
    return this.view.contentWidth;
  }
  get onDidChangeContentHeight() {
    return this.view.onDidChangeContentHeight;
  }
  get onDidChangeContentWidth() {
    return this.view.onDidChangeContentWidth;
  }
  get scrollTop() {
    return this.view.scrollTop;
  }
  set scrollTop(e) {
    this.view.scrollTop = e;
  }
  get scrollLeft() {
    return this.view.scrollLeft;
  }
  set scrollLeft(e) {
    this.view.scrollLeft = e;
  }
  get scrollHeight() {
    return this.view.scrollHeight;
  }
  get renderHeight() {
    return this.view.renderHeight;
  }
  get firstVisibleElement() {
    let e = this.view.firstVisibleIndex;
    return this.stickyScrollController && (e += this.stickyScrollController.count), e < 0 || e >= this.view.length ? void 0 : this.view.element(e).element;
  }
  get lastVisibleElement() {
    const e = this.view.lastVisibleIndex;
    return this.view.element(e).element;
  }
  get ariaLabel() {
    return this.view.ariaLabel;
  }
  set ariaLabel(e) {
    this.view.ariaLabel = e;
  }
  get selectionSize() {
    return this.selection.getNodes().length;
  }
  domFocus() {
    this.stickyScrollController?.focusedLast() ? this.stickyScrollController.domFocus() : this.view.domFocus();
  }
  isDOMFocused() {
    return Is(this.getHTMLElement());
  }
  layout(e, t) {
    this.view.layout(e, t);
  }
  style(e) {
    const t = `.${this.view.domId}`, i = [];
    e.treeIndentGuidesStroke && (i.push(`.monaco-list${t}:hover .monaco-tl-indent > .indent-guide, .monaco-list${t}.always .monaco-tl-indent > .indent-guide  { border-color: ${e.treeInactiveIndentGuidesStroke}; }`), i.push(`.monaco-list${t} .monaco-tl-indent > .indent-guide.active { border-color: ${e.treeIndentGuidesStroke}; }`));
    const s = e.treeStickyScrollBackground ?? e.listBackground;
    s && (i.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container { background-color: ${s}; }`), i.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-row { background-color: ${s}; }`)), e.treeStickyScrollBorder && i.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container { border-bottom: 1px solid ${e.treeStickyScrollBorder}; }`), e.treeStickyScrollShadow && i.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-container-shadow { box-shadow: ${e.treeStickyScrollShadow} 0 6px 6px -6px inset; height: 3px; }`), e.listFocusForeground && (i.push(`.monaco-list${t}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { color: ${e.listFocusForeground}; }`), i.push(`.monaco-list${t}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { color: inherit; }`));
    const n = Pt(e.listFocusAndSelectionOutline, Pt(e.listSelectionOutline, e.listFocusOutline ?? ""));
    n && (i.push(`.monaco-list${t}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused.selected { outline: 1px solid ${n}; outline-offset: -1px;}`), i.push(`.monaco-list${t}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused.selected { outline: inherit;}`)), e.listFocusOutline && (i.push(`.monaco-list${t}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }`), i.push(`.monaco-list${t}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { outline: inherit; }`), i.push(`.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.passive-focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }`), i.push(`.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused.sticky-scroll-focused .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`), i.push(`.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused:not(.sticky-scroll-focused) .monaco-tree-sticky-container .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`)), this.styleElement.textContent = i.join(`
`), this.view.style(e);
  }
  getParentElement(e) {
    const t = this.model.getParentNodeLocation(e);
    return this.model.getNode(t).element;
  }
  getFirstElementChild(e) {
    return this.model.getFirstElementChild(e);
  }
  getNode(e) {
    return this.model.getNode(e);
  }
  getNodeLocation(e) {
    return this.model.getNodeLocation(e);
  }
  collapse(e, t = false) {
    return this.model.setCollapsed(e, true, t);
  }
  expand(e, t = false) {
    return this.model.setCollapsed(e, false, t);
  }
  toggleCollapsed(e, t = false) {
    return this.model.setCollapsed(e, void 0, t);
  }
  expandAll() {
    this.model.setCollapsed(this.model.rootRef, false, true);
  }
  collapseAll() {
    this.model.setCollapsed(this.model.rootRef, true, true);
  }
  isCollapsible(e) {
    return this.model.isCollapsible(e);
  }
  setCollapsible(e, t) {
    return this.model.setCollapsible(e, t);
  }
  isCollapsed(e) {
    return this.model.isCollapsed(e);
  }
  expandTo(e) {
    this.model.expandTo(e);
  }
  triggerTypeNavigation() {
    this.view.triggerTypeNavigation();
  }
  openFind() {
    this.findController?.open();
  }
  closeFind() {
    this.findController?.close();
  }
  refilter() {
    this._onWillRefilter.fire(void 0), this.model.refilter();
  }
  setAnchor(e) {
    if (typeof e > "u") return this.view.setAnchor(void 0);
    this.eventBufferer.bufferEvents(() => {
      const t = this.model.getNode(e);
      this.anchor.set([t]);
      const i = this.model.getListIndex(e);
      i > -1 && this.view.setAnchor(i, true);
    });
  }
  getAnchor() {
    return this.anchor.get().at(0);
  }
  setSelection(e, t) {
    this.eventBufferer.bufferEvents(() => {
      const i = e.map((n) => this.model.getNode(n));
      this.selection.set(i, t);
      const s = e.map((n) => this.model.getListIndex(n)).filter((n) => n > -1);
      this.view.setSelection(s, t, true);
    });
  }
  getSelection() {
    return this.selection.get();
  }
  setFocus(e, t) {
    this.eventBufferer.bufferEvents(() => {
      const i = e.map((n) => this.model.getNode(n));
      this.focus.set(i, t);
      const s = e.map((n) => this.model.getListIndex(n)).filter((n) => n > -1);
      this.view.setFocus(s, t, true);
    });
  }
  focusNext(e = 1, t = false, i, s = gi(i) && i.altKey ? void 0 : this.focusNavigationFilter) {
    this.view.focusNext(e, t, i, s);
  }
  focusPrevious(e = 1, t = false, i, s = gi(i) && i.altKey ? void 0 : this.focusNavigationFilter) {
    this.view.focusPrevious(e, t, i, s);
  }
  focusNextPage(e, t = gi(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
    return this.view.focusNextPage(e, t);
  }
  focusPreviousPage(e, t = gi(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
    return this.view.focusPreviousPage(e, t, () => this.stickyScrollController?.height ?? 0);
  }
  focusLast(e, t = gi(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
    this.view.focusLast(e, t);
  }
  focusFirst(e, t = gi(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
    this.view.focusFirst(e, t);
  }
  getFocus() {
    return this.focus.get();
  }
  getStickyScrollFocus() {
    const e = this.stickyScrollController?.getFocus();
    return e !== void 0 ? [e] : [];
  }
  getFocusedPart() {
    return this.stickyScrollController?.focusedLast() ? 1 : 0;
  }
  reveal(e, t) {
    this.model.expandTo(e);
    const i = this.model.getListIndex(e);
    if (i !== -1) if (!this.stickyScrollController) this.view.reveal(i, t);
    else {
      const s = this.stickyScrollController.nodePositionTopBelowWidget(this.getNode(e));
      this.view.reveal(i, t, s);
    }
  }
  getRelativeTop(e) {
    const t = this.model.getListIndex(e);
    if (t === -1) return null;
    const i = this.stickyScrollController?.getNode(this.getNode(e));
    return this.view.getRelativeTop(t, i?.position ?? this.stickyScrollController?.height);
  }
  getViewState(e = this.options.identityProvider) {
    if (!e) throw new ct(this._user, "Can't get tree view state without an identity provider");
    const t = (r) => e.getId(r).toString(), i = m4.empty(this.scrollTop);
    for (const r of this.getFocus()) i.focus.add(t(r));
    for (const r of this.getSelection()) i.selection.add(t(r));
    const s = this.model.getNode(), n = [s];
    for (; n.length > 0; ) {
      const r = n.pop();
      r !== s && r.collapsible && (i.expanded[t(r.element)] = r.collapsed ? 0 : 1), Ll(n, n.length, r.children);
    }
    return i;
  }
  onLeftArrow(e) {
    e.preventDefault(), e.stopPropagation();
    const t = this.view.getFocusedElements();
    if (t.length === 0) return;
    const i = t[0], s = this.model.getNodeLocation(i);
    if (!this.model.setCollapsed(s, true)) {
      const r = this.model.getParentNodeLocation(s);
      if (!r) return;
      const o = this.model.getListIndex(r);
      this.view.reveal(o), this.view.setFocus([o]);
    }
  }
  onRightArrow(e) {
    e.preventDefault(), e.stopPropagation();
    const t = this.view.getFocusedElements();
    if (t.length === 0) return;
    const i = t[0], s = this.model.getNodeLocation(i);
    if (!this.model.setCollapsed(s, false)) {
      if (!i.children.some((a) => a.visible)) return;
      const [r] = this.view.getFocus(), o = r + 1;
      this.view.reveal(o), this.view.setFocus([o]);
    }
  }
  onSpace(e) {
    e.preventDefault(), e.stopPropagation();
    const t = this.view.getFocusedElements();
    if (t.length === 0) return;
    const i = t[0], s = this.model.getNodeLocation(i), n = e.browserEvent.altKey;
    this.model.setCollapsed(s, void 0, n);
  }
  setupModel(e) {
    this.modelDisposables.clear(), this.modelDisposables.add(e.onDidSpliceRenderedNodes(({ start: n, deleteCount: r, elements: o }) => this.view.splice(n, r, o)));
    const t = A.forEach(e.onDidSpliceModel, (n) => {
      this.eventBufferer.bufferEvents(() => {
        this.focus.onDidModelSplice(n), this.selection.onDidModelSplice(n);
      });
    }, this.modelDisposables);
    t(() => null, null, this.modelDisposables);
    const i = this.modelDisposables.add(new L()), s = this.modelDisposables.add(new co(0));
    this.modelDisposables.add(A.any(t, this.focus.onDidChange, this.selection.onDidChange)(() => {
      s.trigger(() => {
        const n = /* @__PURE__ */ new Set();
        for (const r of this.focus.getNodes()) n.add(r);
        for (const r of this.selection.getNodes()) n.add(r);
        i.fire([...n.values()]);
      });
    })), this.onDidChangeActiveNodesRelay.input = i.event, this.onDidChangeModelRelay.input = A.signal(e.onDidSpliceModel), this.onDidChangeCollapseStateRelay.input = e.onDidChangeCollapseState, this.onDidChangeRenderNodeCountRelay.input = e.onDidChangeRenderNodeCount, this.onDidSpliceModelRelay.input = e.onDidSpliceModel;
  }
  navigate(e) {
    return new O4(this.view, this.model, e);
  }
  dispose() {
    nt(this.disposables), this.stickyScrollController?.dispose(), this.view.dispose(), this.modelDisposables.dispose();
  }
}, O4 = class {
  constructor(e, t, i) {
    this.view = e, this.model = t, i ? this.index = this.model.getListIndex(i) : this.index = -1;
  }
  current() {
    return this.index < 0 || this.index >= this.view.length ? null : this.view.element(this.index).element;
  }
  previous() {
    return this.index--, this.current();
  }
  next() {
    return this.index++, this.current();
  }
  first() {
    return this.index = 0, this.current();
  }
  last() {
    return this.index = this.view.length - 1, this.current();
  }
}, F4 = class {
  constructor(e, t = {}) {
    this.user = e, this.rootRef = null, this.nodes = /* @__PURE__ */ new Map(), this.nodesByIdentity = /* @__PURE__ */ new Map(), this.model = new d4(e, null, t), this.onDidSpliceModel = this.model.onDidSpliceModel, this.onDidSpliceRenderedNodes = this.model.onDidSpliceRenderedNodes, this.onDidChangeCollapseState = this.model.onDidChangeCollapseState, this.onDidChangeRenderNodeCount = this.model.onDidChangeRenderNodeCount, t.sorter && (this.sorter = { compare(i, s) {
      return t.sorter.compare(i.element, s.element);
    } }), this.identityProvider = t.identityProvider;
  }
  get size() {
    return this.nodes.size;
  }
  setChildren(e, t = Re.empty(), i = {}) {
    const s = this.getElementLocation(e);
    this._setChildren(s, this.preserveCollapseState(t), i);
  }
  _setChildren(e, t = Re.empty(), i) {
    const s = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = (a) => {
      if (a.element === null) return;
      const c = a;
      if (s.add(c.element), this.nodes.set(c.element, c), this.identityProvider) {
        const h = this.identityProvider.getId(c.element).toString();
        n.add(h), this.nodesByIdentity.set(h, c);
      }
      i.onDidCreateNode?.(c);
    }, o = (a) => {
      if (a.element === null) return;
      const c = a;
      if (s.has(c.element) || this.nodes.delete(c.element), this.identityProvider) {
        const h = this.identityProvider.getId(c.element).toString();
        n.has(h) || this.nodesByIdentity.delete(h);
      }
      i.onDidDeleteNode?.(c);
    };
    this.model.splice([...e, 0], Number.MAX_VALUE, t, { ...i, onDidCreateNode: r, onDidDeleteNode: o });
  }
  preserveCollapseState(e = Re.empty()) {
    return this.sorter && (e = [...e].sort(this.sorter.compare.bind(this.sorter))), Re.map(e, (t) => {
      let i = this.nodes.get(t.element);
      if (!i && this.identityProvider) {
        const r = this.identityProvider.getId(t.element).toString();
        i = this.nodesByIdentity.get(r);
      }
      if (!i) {
        let r;
        return typeof t.collapsed > "u" ? r = void 0 : t.collapsed === Ot.Collapsed || t.collapsed === Ot.PreserveOrCollapsed ? r = true : t.collapsed === Ot.Expanded || t.collapsed === Ot.PreserveOrExpanded ? r = false : r = !!t.collapsed, { ...t, children: this.preserveCollapseState(t.children), collapsed: r };
      }
      const s = typeof t.collapsible == "boolean" ? t.collapsible : i.collapsible;
      let n;
      return typeof t.collapsed > "u" || t.collapsed === Ot.PreserveOrCollapsed || t.collapsed === Ot.PreserveOrExpanded ? n = i.collapsed : t.collapsed === Ot.Collapsed ? n = true : t.collapsed === Ot.Expanded ? n = false : n = !!t.collapsed, { ...t, collapsible: s, collapsed: n, children: this.preserveCollapseState(t.children) };
    });
  }
  rerender(e) {
    const t = this.getElementLocation(e);
    this.model.rerender(t);
  }
  resort(e = null, t = true) {
    if (!this.sorter) return;
    const i = this.getElementLocation(e), s = this.model.getNode(i);
    this._setChildren(i, this.resortChildren(s, t), {});
  }
  resortChildren(e, t, i = true) {
    let s = [...e.children];
    return (t || i) && (s = s.sort(this.sorter.compare.bind(this.sorter))), Re.map(s, (n) => ({ element: n.element, collapsible: n.collapsible, collapsed: n.collapsed, children: this.resortChildren(n, t, false) }));
  }
  getFirstElementChild(e = null) {
    const t = this.getElementLocation(e);
    return this.model.getFirstElementChild(t);
  }
  getLastElementAncestor(e = null) {
    const t = this.getElementLocation(e);
    return this.model.getLastElementAncestor(t);
  }
  has(e) {
    return this.nodes.has(e);
  }
  getListIndex(e) {
    const t = this.getElementLocation(e);
    return this.model.getListIndex(t);
  }
  getListRenderCount(e) {
    const t = this.getElementLocation(e);
    return this.model.getListRenderCount(t);
  }
  isCollapsible(e) {
    const t = this.getElementLocation(e);
    return this.model.isCollapsible(t);
  }
  setCollapsible(e, t) {
    const i = this.getElementLocation(e);
    return this.model.setCollapsible(i, t);
  }
  isCollapsed(e) {
    const t = this.getElementLocation(e);
    return this.model.isCollapsed(t);
  }
  setCollapsed(e, t, i) {
    const s = this.getElementLocation(e);
    return this.model.setCollapsed(s, t, i);
  }
  expandTo(e) {
    const t = this.getElementLocation(e);
    this.model.expandTo(t);
  }
  refilter() {
    this.model.refilter();
  }
  getNode(e = null) {
    if (e === null) return this.model.getNode(this.model.rootRef);
    const t = this.nodes.get(e);
    if (!t) throw new ct(this.user, `Tree element not found: ${e}`);
    return t;
  }
  getNodeLocation(e) {
    return e.element;
  }
  getParentNodeLocation(e) {
    if (e === null) throw new ct(this.user, "Invalid getParentNodeLocation call");
    const t = this.nodes.get(e);
    if (!t) throw new ct(this.user, `Tree element not found: ${e}`);
    const i = this.model.getNodeLocation(t), s = this.model.getParentNodeLocation(i);
    return this.model.getNode(s).element;
  }
  getElementLocation(e) {
    if (e === null) return [];
    const t = this.nodes.get(e);
    if (!t) throw new ct(this.user, `Tree element not found: ${e}`);
    return this.model.getNodeLocation(t);
  }
}, B4 = class extends P4 {
  constructor(e, t, i, s, n, r = {}) {
    super(e, t, i, s, r), this.user = e, this.dataSource = n, this.nodesByIdentity = /* @__PURE__ */ new Map(), this.identityProvider = r.identityProvider;
  }
  getInput() {
    return this.input;
  }
  setInput(e, t) {
    if (t && !this.identityProvider) throw new ct(this.user, "Can't restore tree view state without an identity provider");
    if (this.input = e, !e) {
      this.nodesByIdentity.clear(), this.model.setChildren(null, Re.empty());
      return;
    }
    if (!t) {
      this._refresh(e);
      return;
    }
    const i = [], s = [], n = (o) => {
      const a = this.identityProvider.getId(o).toString();
      return !t.expanded[a];
    }, r = (o) => {
      const a = this.identityProvider.getId(o.element).toString();
      t.focus.has(a) && i.push(o.element), t.selection.has(a) && s.push(o.element);
    };
    this._refresh(e, n, r), this.setFocus(i), this.setSelection(s), t && typeof t.scrollTop == "number" && (this.scrollTop = t.scrollTop);
  }
  updateChildren(e = this.input) {
    if (typeof this.input > "u") throw new ct(this.user, "Tree input not set");
    let t;
    this.identityProvider && (t = (i) => {
      const s = this.identityProvider.getId(i).toString(), n = this.nodesByIdentity.get(s);
      if (n) return n.collapsed;
    }), this._refresh(e, t);
  }
  resort(e = this.input, t = true) {
    this.model.resort(e === this.input ? null : e, t);
  }
  refresh(e) {
    if (e === void 0) {
      this.view.rerender();
      return;
    }
    this.model.rerender(e);
  }
  _refresh(e, t, i) {
    let s;
    if (this.identityProvider) {
      const n = /* @__PURE__ */ new Set(), r = i;
      i = (o) => {
        const a = this.identityProvider.getId(o.element).toString();
        n.add(a), this.nodesByIdentity.set(a, o), r?.(o);
      }, s = (o) => {
        const a = this.identityProvider.getId(o.element).toString();
        n.has(a) || this.nodesByIdentity.delete(a);
      };
    }
    this.model.setChildren(e === this.input ? null : e, this.iterate(e, t).elements, { onDidCreateNode: i, onDidDeleteNode: s });
  }
  iterate(e, t) {
    const i = [...this.dataSource.getChildren(e)];
    return { elements: Re.map(i, (n) => {
      const { elements: r, size: o } = this.iterate(n, t), a = this.dataSource.hasChildren ? this.dataSource.hasChildren(n) : void 0, c = o === 0 ? void 0 : t && t(n);
      return { element: n, children: r, collapsible: a, collapsed: c };
    }), size: i.length };
  }
  createModel(e, t) {
    return new F4(e, t);
  }
}, H4 = "vscode:contextmenu", U4 = "vscode:onCloseContextMenu", as = globalThis.vscode, xe = as.ipcRenderer, bb = as.ipcMessagePort, $4 = as.webFrame, yb = as.process, wb = as.context, _b = as.webUtils, z4 = 0;
function W4(e, t, i) {
  const s = [], n = z4++, r = `vscode:onContextMenu${n}`, o = (a, c, h) => {
    s[c].click?.(h);
  };
  xe.once(r, o), xe.once(U4, (a, c) => {
    c === n && (xe.removeListener(r, o), i?.());
  }), xe.send(H4, n, e.map((a) => ou(a, s)), r, t);
}
function ou(e, t) {
  const i = { id: t.length, label: e.label, type: e.type, accelerator: e.accelerator, checked: e.checked, enabled: typeof e.enabled == "boolean" ? e.enabled : true, visible: typeof e.visible == "boolean" ? e.visible : true };
  return t.push(e), Array.isArray(e.submenu) && (i.submenu = e.submenu.map((s) => ou(s, t))), i;
}
var Ft;
((e) => {
  e.serviceIds = /* @__PURE__ */ new Map(), e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
  function t(i) {
    return i[e.DI_DEPENDENCIES] || [];
  }
  e.getServiceDependencies = t;
})(Ft || (Ft = {}));
var Sb = fr("instantiationService");
function V4(e, t, i) {
  t[Ft.DI_TARGET] === t ? t[Ft.DI_DEPENDENCIES].push({ id: e, index: i }) : (t[Ft.DI_DEPENDENCIES] = [{ id: e, index: i }], t[Ft.DI_TARGET] = t);
}
function fr(e) {
  if (Ft.serviceIds.has(e)) return Ft.serviceIds.get(e);
  const t = function(i, s, n) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    V4(t, i, n);
  };
  return t.toString = () => e, Ft.serviceIds.set(e, t), t;
}
var G4 = "diagnosticsService", Cb = fr(G4);
function pr(e) {
  return !!e.hostName && !!e.errorMessage;
}
var q4 = class {
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
    const t = e.charCodeAt(0), i = this._value.charCodeAt(this._pos);
    return t - i;
  }
  value() {
    return this._value[this._pos];
  }
}, K4 = class {
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
    return this._caseSensitive ? io(e, this._value, 0, e.length, this._from, this._to) : Vi(e, this._value, 0, e.length, this._from, this._to);
  }
  value() {
    return this._value.substring(this._from, this._to);
  }
}, au = class {
  constructor(e = true, t = true) {
    this._splitOnBackslash = e, this._caseSensitive = t;
  }
  reset(e) {
    this._from = 0, this._to = 0, this._value = e, this._valueLen = e.length;
    for (let t = e.length - 1; t >= 0; t--, this._valueLen--) {
      const i = this._value.charCodeAt(t);
      if (!(i === 47 || this._splitOnBackslash && i === 92)) break;
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
    return this._caseSensitive ? io(e, this._value, 0, e.length, this._from, this._to) : Vi(e, this._value, 0, e.length, this._from, this._to);
  }
  value() {
    return this._value.substring(this._from, this._to);
  }
}, j4 = class {
  constructor(e, t) {
    this._ignorePathCasing = e, this._ignoreQueryAndFragment = t, this._states = [], this._stateIdx = 0;
  }
  reset(e) {
    return this._value = e, this._states = [], this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && (this._pathIterator = new au(false, !this._ignorePathCasing(e)), this._pathIterator.reset(e.path), this._pathIterator.value() && this._states.push(3)), this._ignoreQueryAndFragment(e) || (this._value.query && this._states.push(4), this._value.fragment && this._states.push(5)), this._stateIdx = 0, this;
  }
  next() {
    return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() ? this._pathIterator.next() : this._stateIdx += 1, this;
  }
  hasNext() {
    return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
  }
  cmp(e) {
    if (this._states[this._stateIdx] === 1) return uc(e, this._value.scheme);
    if (this._states[this._stateIdx] === 2) return uc(e, this._value.authority);
    if (this._states[this._stateIdx] === 3) return this._pathIterator.cmp(e);
    if (this._states[this._stateIdx] === 4) return to(e, this._value.query);
    if (this._states[this._stateIdx] === 5) return to(e, this._value.fragment);
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
}, lu = class tl {
  static wrap(t) {
    return t === void 0 ? tl.Val : t;
  }
  static unwrap(t) {
    return t === tl.Val ? void 0 : t;
  }
};
lu.Val = /* @__PURE__ */ Symbol("undefined_placeholder");
var Ei = lu, gr = class {
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
}, ka = class an {
  static forUris(t = () => false, i = () => false) {
    return new an(new j4(t, i));
  }
  static forPaths(t = false) {
    return new an(new au(void 0, !t));
  }
  static forStrings() {
    return new an(new q4());
  }
  static forConfigKeys() {
    return new an(new K4());
  }
  constructor(t) {
    this._iter = t;
  }
  clear() {
    this._root = void 0;
  }
  fill(t, i) {
    if (i) {
      const s = i.slice(0);
      Il(s);
      for (const n of s) this.set(n, t);
    } else {
      const s = t.slice(0);
      Il(s);
      for (const n of s) this.set(n[0], n[1]);
    }
  }
  set(t, i) {
    const s = this._iter.reset(t);
    let n;
    this._root || (this._root = new gr(), this._root.segment = s.value());
    const r = [];
    for (n = this._root; ; ) {
      const a = s.cmp(n.segment);
      if (a > 0) n.left || (n.left = new gr(), n.left.segment = s.value()), r.push([-1, n]), n = n.left;
      else if (a < 0) n.right || (n.right = new gr(), n.right.segment = s.value()), r.push([1, n]), n = n.right;
      else if (s.hasNext()) s.next(), n.mid || (n.mid = new gr(), n.mid.segment = s.value()), r.push([0, n]), n = n.mid;
      else break;
    }
    const o = Ei.unwrap(n.value);
    n.value = Ei.wrap(i), n.key = t;
    for (let a = r.length - 1; a >= 0; a--) {
      const c = r[a][1];
      c.updateHeight();
      const h = c.balanceFactor();
      if (h < -1 || h > 1) {
        const d = r[a][0], u = r[a + 1][0];
        if (d === 1 && u === 1) r[a][1] = c.rotateLeft();
        else if (d === -1 && u === -1) r[a][1] = c.rotateRight();
        else if (d === 1 && u === -1) c.right = r[a + 1][1] = r[a + 1][1].rotateRight(), r[a][1] = c.rotateLeft();
        else if (d === -1 && u === 1) c.left = r[a + 1][1] = r[a + 1][1].rotateLeft(), r[a][1] = c.rotateRight();
        else throw new Error();
        if (a > 0) switch (r[a - 1][0]) {
          case -1:
            r[a - 1][1].left = r[a][1];
            break;
          case 1:
            r[a - 1][1].right = r[a][1];
            break;
          case 0:
            r[a - 1][1].mid = r[a][1];
            break;
        }
        else this._root = r[0][1];
      }
    }
    return o;
  }
  get(t) {
    return Ei.unwrap(this._getNode(t)?.value);
  }
  _getNode(t) {
    const i = this._iter.reset(t);
    let s = this._root;
    for (; s; ) {
      const n = i.cmp(s.segment);
      if (n > 0) s = s.left;
      else if (n < 0) s = s.right;
      else if (i.hasNext()) i.next(), s = s.mid;
      else break;
    }
    return s;
  }
  has(t) {
    const i = this._getNode(t);
    return !(i?.value === void 0 && i?.mid === void 0);
  }
  delete(t) {
    return this._delete(t, false);
  }
  deleteSuperstr(t) {
    return this._delete(t, true);
  }
  _delete(t, i) {
    const s = this._iter.reset(t), n = [];
    let r = this._root;
    for (; r; ) {
      const o = s.cmp(r.segment);
      if (o > 0) n.push([-1, r]), r = r.left;
      else if (o < 0) n.push([1, r]), r = r.right;
      else if (s.hasNext()) s.next(), n.push([0, r]), r = r.mid;
      else break;
    }
    if (r) {
      if (i ? (r.left = void 0, r.mid = void 0, r.right = void 0, r.height = 1) : (r.key = void 0, r.value = void 0), !r.mid && !r.value) if (r.left && r.right) {
        const o = this._min(r.right);
        if (o.key) {
          const { key: a, value: c, segment: h } = o;
          this._delete(o.key, false), r.key = a, r.value = c, r.segment = h;
        }
      } else {
        const o = r.left ?? r.right;
        if (n.length > 0) {
          const [a, c] = n[n.length - 1];
          switch (a) {
            case -1:
              c.left = o;
              break;
            case 0:
              c.mid = o;
              break;
            case 1:
              c.right = o;
              break;
          }
        } else this._root = o;
      }
      for (let o = n.length - 1; o >= 0; o--) {
        const a = n[o][1];
        a.updateHeight();
        const c = a.balanceFactor();
        if (c > 1 ? (a.right.balanceFactor() >= 0 || (a.right = a.right.rotateRight()), n[o][1] = a.rotateLeft()) : c < -1 && (a.left.balanceFactor() <= 0 || (a.left = a.left.rotateLeft()), n[o][1] = a.rotateRight()), o > 0) switch (n[o - 1][0]) {
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
  }
  _min(t) {
    for (; t.left; ) t = t.left;
    return t;
  }
  findSubstr(t) {
    const i = this._iter.reset(t);
    let s = this._root, n;
    for (; s; ) {
      const r = i.cmp(s.segment);
      if (r > 0) s = s.left;
      else if (r < 0) s = s.right;
      else if (i.hasNext()) i.next(), n = Ei.unwrap(s.value) || n, s = s.mid;
      else break;
    }
    return s && Ei.unwrap(s.value) || n;
  }
  findSuperstr(t) {
    return this._findSuperstrOrElement(t, false);
  }
  _findSuperstrOrElement(t, i) {
    const s = this._iter.reset(t);
    let n = this._root;
    for (; n; ) {
      const r = s.cmp(n.segment);
      if (r > 0) n = n.left;
      else if (r < 0) n = n.right;
      else if (s.hasNext()) s.next(), n = n.mid;
      else return n.mid ? this._entries(n.mid) : i ? Ei.unwrap(n.value) : void 0;
    }
  }
  hasElementOrSubtree(t) {
    return this._findSuperstrOrElement(t, true) !== void 0;
  }
  forEach(t) {
    for (const [i, s] of this) t(s, i);
  }
  *[Symbol.iterator]() {
    yield* this._entries(this._root);
  }
  _entries(t) {
    const i = [];
    return this._dfsEntries(t, i), i[Symbol.iterator]();
  }
  _dfsEntries(t, i) {
    t && (t.left && this._dfsEntries(t.left, i), t.value !== void 0 && i.push([t.key, Ei.unwrap(t.value)]), t.mid && this._dfsEntries(t.mid, i), t.right && this._dfsEntries(t.right, i));
  }
  _isBalanced() {
    const t = (i) => {
      if (!i) return true;
      const s = i.balanceFactor();
      return s < -1 || s > 1 ? false : t(i.left) && t(i.right);
    };
    return t(this._root);
  }
}, Db = fr("fileService"), Y4 = class _r {
  constructor(t, i) {
    this.ignorePathCasing = i, this.correlationId = void 0, this.added = new rt(() => {
      const s = ka.forUris(() => this.ignorePathCasing);
      return s.fill(this.rawAdded.map((n) => [n, true])), s;
    }), this.updated = new rt(() => {
      const s = ka.forUris(() => this.ignorePathCasing);
      return s.fill(this.rawUpdated.map((n) => [n, true])), s;
    }), this.deleted = new rt(() => {
      const s = ka.forUris(() => this.ignorePathCasing);
      return s.fill(this.rawDeleted.map((n) => [n, true])), s;
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
      this.correlationId !== _r.MIXED_CORRELATION && (typeof s.cId == "number" ? this.correlationId === void 0 ? this.correlationId = s.cId : this.correlationId !== s.cId && (this.correlationId = _r.MIXED_CORRELATION) : this.correlationId !== void 0 && (this.correlationId = _r.MIXED_CORRELATION));
    }
  }
  contains(t, ...i) {
    return this.doContains(t, { includeChildren: false }, ...i);
  }
  affects(t, ...i) {
    return this.doContains(t, { includeChildren: true }, ...i);
  }
  doContains(t, i, ...s) {
    if (!t) return false;
    const n = s.length > 0;
    return !!((!n || s.includes(1)) && (this.added.value.get(t) || i.includeChildren && this.added.value.findSuperstr(t)) || (!n || s.includes(0)) && (this.updated.value.get(t) || i.includeChildren && this.updated.value.findSuperstr(t)) || (!n || s.includes(2)) && (this.deleted.value.findSubstr(t) || i.includeChildren && this.deleted.value.findSuperstr(t)));
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
Y4.MIXED_CORRELATION = null;
var pt = class Bt {
  static formatSize(t) {
    return Or(t) || (t = 0), t < Bt.KB ? W(2024, null, t.toFixed(0)) : t < Bt.MB ? W(2025, null, (t / Bt.KB).toFixed(2)) : t < Bt.GB ? W(2026, null, (t / Bt.MB).toFixed(2)) : t < Bt.TB ? W(2027, null, (t / Bt.GB).toFixed(2)) : W(2028, null, (t / Bt.TB).toFixed(2));
  }
};
pt.KB = 1024, pt.MB = pt.KB * pt.KB, pt.GB = pt.MB * pt.KB, pt.TB = pt.GB * pt.KB;
var Ta = pt, cu = 50, hu = false, du;
function ki(e) {
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
function Zs(e) {
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
function Ti(e) {
  let t = 0;
  for (let i = 0; ; i += 7) {
    const s = e.readUInt8();
    if (t |= (s & 127) << i, !(s & 128)) return t;
  }
}
function xi(e, t) {
  if (t === 0) {
    e.writeUInt8(0);
    return;
  }
  do {
    let i = t & 127;
    t = t >>> 7, t > 0 && (i |= 128), e.writeUInt8(i);
  } while (t !== 0);
}
var uu = class {
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
}, fu = 4 * 1024, X4 = 512 * 1024, Z4 = 64 * 1024, Qs, pu = Je.alloc(0), xa = class {
  constructor() {
    this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0, Qs ? (this.data = Qs, Qs = void 0) : this.data = Je.alloc(fu);
  }
  get buffer() {
    if (!this.fragments) {
      const e = Je.alloc(this.length);
      return e.set(this.data.slice(0, this.length), 0), e;
    }
    return this.flushSegment(), Je.concat(this.fragments, this.totalLength);
  }
  ensureCapacity(e) {
    const t = this.length + e;
    if (t <= this.data.byteLength) return;
    let i = Math.max(this.data.byteLength * 2, fu);
    for (; i < t; ) i *= 2;
    const s = Je.alloc(i);
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
    if (e.byteLength < Z4) {
      this.write(e);
      return;
    }
    this.fragments || (this.fragments = []), this.flushSegment(), this.fragments.push(e), this.totalLength += e.byteLength;
  }
  dispose() {
    !Qs && this.data.byteLength <= X4 && this.data !== pu && (Qs = this.data), this.data = pu, this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0;
  }
}, gu = typeof Buffer < "u", Q4 = 64 * 1024, J4 = 8;
function e5(e) {
  return !(e === null || typeof e != "object" || Array.isArray(e) || e instanceof Je || e instanceof Uint8Array || gu && Buffer.isBuffer(e));
}
function t5(e) {
  if (e.length < J4) return false;
  for (let t = 0; t < e.length; t++) if (!e5(e[t])) return false;
  return true;
}
function Aa(e, t) {
  if (t.length >= Q4) {
    const i = Je.fromString(t);
    xi(e, i.byteLength), e.writeReference(i);
    return;
  }
  Je.withPooledString(t, (i) => {
    xi(e, i.byteLength), e.write(i);
  });
}
function ls(e, t) {
  if (typeof t > "u") e.writeUInt8(0);
  else if (typeof t == "string") e.writeUInt8(1), Aa(e, t);
  else if (gu && Buffer.isBuffer(t)) e.writeUInt8(2), xi(e, t.byteLength), e.writeReference(Je.wrap(t));
  else if (t instanceof Je) e.writeUInt8(3), xi(e, t.byteLength), e.writeReference(t);
  else if (Array.isArray(t)) {
    if (t5(t)) {
      const i = JSON.stringify(t);
      e.writeUInt8(5), Aa(e, i);
      return;
    }
    e.writeUInt8(4), xi(e, t.length);
    for (const i of t) ls(e, i);
  } else if (typeof t == "number" && (t | 0) === t) e.writeUInt8(6), xi(e, t);
  else if (t instanceof Uint8Array) e.writeUInt8(7), xi(e, t.length), e.writeReference(Je.wrap(t));
  else {
    const i = JSON.stringify(t);
    e.writeUInt8(5), Aa(e, i);
  }
}
function Js(e) {
  switch (e.readUInt8()) {
    case 0:
      return;
    case 1:
      return e.read(Ti(e)).toString();
    case 2:
      return e.read(Ti(e)).buffer;
    case 3:
      return e.read(Ti(e));
    case 7:
      return e.read(Ti(e)).buffer;
    case 4: {
      const i = Ti(e), s = [];
      for (let n = 0; n < i; n++) s.push(Js(e));
      return s;
    }
    case 5:
      return JSON.parse(e.read(Ti(e)).toString());
    case 6:
      return Ti(e);
  }
}
var i5 = class {
  constructor(e, t, i = null, s = 1e3) {
    this.protocol = e, this.ctx = t, this.logger = i, this.timeoutDelay = s, this.channels = /* @__PURE__ */ new Map(), this.activeRequests = /* @__PURE__ */ new Map(), this.protocolListener = new De(), this.pendingRequests = /* @__PURE__ */ new Map(), this.protocolListener.value = this.protocol.onMessage((n) => this.onRawMessage(n)), this.sendResponse({ type: 200 });
  }
  registerChannel(e, t) {
    this.channels.set(e, t), setTimeout(() => this.flushPendingRequests(e), 0);
  }
  sendResponse(e) {
    switch (e.type) {
      case 200: {
        const t = this.send([e.type]);
        this.logger?.logOutgoing(t, 0, 1, Zs(e.type));
        return;
      }
      case 201:
      case 202:
      case 204:
      case 203: {
        const t = this.send([e.type, e.id], e.data);
        this.logger?.logOutgoing(t, e.id, 1, Zs(e.type), e.data);
        return;
      }
    }
  }
  send(e, t = void 0) {
    const i = new xa();
    try {
      return ls(i, e), ls(i, t), this.sendBuffer(i.buffer);
    } finally {
      i.dispose();
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
    const t = new uu(e), i = hu, s = i ? performance.now() : 0, n = Js(t), r = n[0];
    if (r !== 100 && r !== 101 && r !== 102 && r !== 103) return;
    const o = Js(t);
    if (i) {
      const a = performance.now() - s;
      a > cu && du?.({ durationMs: a, byteLength: e.byteLength, requestId: n[1] ?? 0, channelName: n[2], command: n[3], messageType: ki(r) });
    }
    switch (r) {
      case 100:
        return this.logger?.logIncoming(e.byteLength, n[1], 1, `${ki(r)}: ${n[2]}.${n[3]}`, o), this.onPromise({ type: r, id: n[1], channelName: n[2], name: n[3], arg: o });
      case 102:
        return this.logger?.logIncoming(e.byteLength, n[1], 1, `${ki(r)}: ${n[2]}.${n[3]}`, o), this.onEventListen({ type: r, id: n[1], channelName: n[2], name: n[3], arg: o });
      case 101:
        return this.logger?.logIncoming(e.byteLength, n[1], 1, `${ki(r)}`), this.disposeActiveRequest({ type: r, id: n[1] });
      case 103:
        return this.logger?.logIncoming(e.byteLength, n[1], 1, `${ki(r)}`), this.disposeActiveRequest({ type: r, id: n[1] });
    }
  }
  onPromise(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const i = new cc();
    let s;
    try {
      s = t.call(this.ctx, e.name, e.arg, i.token);
    } catch (o) {
      s = Promise.reject(o);
    }
    const n = e.id;
    s.then((o) => {
      this.sendResponse({ id: n, data: o, type: 201 });
    }, (o) => {
      o instanceof Error ? this.sendResponse({ id: n, data: { message: o.message, name: o.name, stack: o.stack ? o.stack.split(`
`) : void 0 }, type: 202 }) : this.sendResponse({ id: n, data: o, type: 203 });
    }).finally(() => {
      r.dispose(), this.activeRequests.delete(e.id);
    });
    const r = re(() => i.cancel());
    this.activeRequests.set(e.id, r);
  }
  onEventListen(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const i = e.id, n = t.listen(this.ctx, e.name, e.arg)((r) => this.sendResponse({ id: i, data: r, type: 204 }));
    this.activeRequests.set(e.id, n);
  }
  disposeActiveRequest(e) {
    const t = this.activeRequests.get(e.id);
    t && (t.dispose(), this.activeRequests.delete(e.id));
  }
  collectPendingRequest(e) {
    let t = this.pendingRequests.get(e.channelName);
    t || (t = [], this.pendingRequests.set(e.channelName, t));
    const i = On(() => {
      console.error(`Unknown channel: ${e.channelName}`), e.type === 100 && this.sendResponse({ id: e.id, data: { name: "Unknown channel", message: `Channel name '${e.channelName}' timed out after ${this.timeoutDelay}ms`, stack: void 0 }, type: 202 }), i.dispose();
    }, this.timeoutDelay);
    t.push({ request: e, timeoutTimer: i });
  }
  flushPendingRequests(e) {
    const t = this.pendingRequests.get(e);
    if (t) {
      for (const i of t) switch (i.timeoutTimer.dispose(), i.request.type) {
        case 100:
          this.onPromise(i.request);
          break;
        case 102:
          this.onEventListen(i.request);
          break;
      }
      this.pendingRequests.delete(e);
    }
  }
  dispose() {
    this.protocolListener.dispose(), nt(this.activeRequests.values()), this.activeRequests.clear();
    for (const e of this.pendingRequests.values()) nt(e.map((t) => t.timeoutTimer));
    this.pendingRequests.clear();
  }
}, mu = class {
  constructor(e, t = null) {
    this.protocol = e, this.isDisposed = false, this.state = 0, this.activeRequests = new q(), this.handlers = /* @__PURE__ */ new Map(), this.lastRequestId = 0, this.protocolListener = new De(), this._pendingRPCDetails = /* @__PURE__ */ new Map(), this._onDidInitialize = new L(), this.onDidInitialize = this._onDidInitialize.event, this.initializeListener = new q(), this.protocolListener.value = this.protocol.onMessage((i) => this.onBuffer(i)), this.logger = t;
  }
  getChannel(e) {
    const t = this;
    return { call(i, s, n) {
      return t.isDisposed ? Promise.reject(new Et()) : t.requestPromise(e, i, s, n);
    }, listen(i, s) {
      return t.isDisposed ? A.None : t.requestEvent(e, i, s);
    } };
  }
  requestPromise(e, t, i, s = Ss.None) {
    const n = this.lastRequestId++, o = { id: n, type: 100, channelName: e, name: t, arg: i };
    if (s.isCancellationRequested) return Promise.reject(new Et());
    let a, c;
    return new Promise((d, u) => {
      if (s.isCancellationRequested) return u(new Et());
      const f = () => {
        const _ = (v) => {
          switch (v.type) {
            case 201:
              this.handlers.delete(n), this._pendingRPCDetails.delete(n), d(v.data);
              break;
            case 202: {
              this.handlers.delete(n), this._pendingRPCDetails.delete(n);
              const y = new Error(v.data.message);
              y.stack = Array.isArray(v.data.stack) ? v.data.stack.join(`
`) : v.data.stack, y.name = v.data.name, u(y);
              break;
            }
            case 203:
              this.handlers.delete(n), this._pendingRPCDetails.delete(n), u(v.data);
              break;
          }
        };
        this.handlers.set(n, _), this._pendingRPCDetails.set(n, { channelName: e, command: t });
        try {
          this.sendRequest(o);
        } catch (v) {
          this.handlers.delete(n), this._pendingRPCDetails.delete(n), u(v);
        }
      };
      let p = null;
      this.state === 1 ? f() : (p = lo((_) => this.whenInitialized()), p.then(() => {
        p = null, f();
      }, () => {
      }));
      const m = () => {
        p ? (p.cancel(), p = null) : this.sendRequest({ id: n, type: 101 }), u(new Et());
      };
      a = s.onCancellationRequested(m), c = { dispose: Nl(() => {
        m(), a.dispose();
      }) }, this.activeRequests.add(c);
    }).finally(() => {
      a?.dispose(), this.activeRequests.deleteAndLeak(c), vn(c);
    });
  }
  requestEvent(e, t, i) {
    const s = this.lastRequestId++, r = { id: s, type: 102, channelName: e, name: t, arg: i };
    let o = null;
    const a = new L({ onWillAddFirstListener: () => {
      if (this.isDisposed) return;
      const c = (d) => a.fire(d.data);
      this.handlers.set(s, c);
      const h = () => {
        this.activeRequests.add(a), this._pendingRPCDetails.set(s, { channelName: e, command: t }), this.sendRequest(r);
      };
      this.state === 1 ? h() : (o = lo((d) => this.whenInitialized()), o.then(() => {
        o = null, h();
      }, () => {
      }));
    }, onDidRemoveLastListener: () => {
      const c = this.handlers.delete(s);
      o ? (o.cancel(), o = null) : c && (this.activeRequests.deleteAndLeak(a), vn(a), this._pendingRPCDetails.delete(s), this.sendRequest({ id: s, type: 103 }));
    } });
    return a.event;
  }
  sendRequest(e) {
    switch (e.type) {
      case 100:
      case 102: {
        const t = this.send([e.type, e.id, e.channelName, e.name], e.arg);
        this.logger?.logOutgoing(t, e.id, 0, `${ki(e.type)}: ${e.channelName}.${e.name}`, e.arg);
        return;
      }
      case 101:
      case 103: {
        const t = this.send([e.type, e.id]);
        this.logger?.logOutgoing(t, e.id, 0, ki(e.type));
        return;
      }
    }
  }
  send(e, t = void 0) {
    const i = new xa();
    try {
      return ls(i, e), ls(i, t), this.sendBuffer(i.buffer);
    } finally {
      i.dispose();
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
    const t = new uu(e), i = hu, s = i ? performance.now() : 0, n = Js(t), r = n[0];
    if (r !== 200 && r !== 201 && r !== 202 && r !== 203 && r !== 204) return;
    const o = Js(t);
    if (i) {
      const a = performance.now() - s;
      if (a > cu) {
        const c = n[1] ?? 0, h = this._pendingRPCDetails.get(c);
        du?.({ durationMs: a, byteLength: e.byteLength, requestId: c, channelName: h?.channelName, command: h?.command, messageType: Zs(r) });
      }
    }
    switch (r) {
      case 200:
        return this.logger?.logIncoming(e.byteLength, 0, 0, Zs(r)), this.onResponse({ type: n[0] });
      case 201:
      case 202:
      case 204:
      case 203:
        return this.logger?.logIncoming(e.byteLength, n[1], 0, Zs(r), o), this.onResponse({ type: n[0], id: n[1], data: o });
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
    return A.toPromise(this.onDidInitialize, this.initializeListener);
  }
  whenInitialized() {
    return this.state === 1 ? Promise.resolve() : this.onDidInitializePromise;
  }
  dispose() {
    this.isDisposed = true, this.protocolListener.dispose(), this.activeRequests.dispose(), this._pendingRPCDetails.clear(), this.handlers.clear(), this.initializeListener.dispose(), this._onDidInitialize.dispose();
  }
};
pe([ve], mu.prototype, "onDidInitializePromise", null);
var s5 = class {
  constructor(e, t, i = null) {
    const s = new xa();
    try {
      ls(s, t), e.send(s.buffer);
    } finally {
      s.dispose();
    }
    this.channelClient = new mu(e, i), this.channelServer = new i5(e, t, i);
  }
  getChannel(e) {
    return this.channelClient.getChannel(e);
  }
  registerChannel(e, t) {
    this.channelServer.registerChannel(e, t);
  }
  dispose() {
    this.channelClient.dispose(), this.channelServer.dispose();
  }
}, Na;
((e) => {
  const t = () => {
  };
  function i(o, a, c) {
    const h = o, d = c && c.disableMarshalling, u = (p) => {
      const m = h[p];
      return c?.disableEventBuffering ? m : A.buffer(m, true, void 0, a);
    }, f = /* @__PURE__ */ new Map();
    for (const p in h) n(p) && f.set(p, u(p));
    return new class {
      listen(p, m, _) {
        const v = f.get(m);
        if (v) return v;
        const y = h[m];
        if (typeof y == "function") {
          if (r(m)) return y.call(h, _);
          if (n(m)) return f.set(m, u(m)), f.get(m);
        }
        throw new ms(`Event not found: ${m}`);
      }
      call(p, m, _) {
        const v = h[m];
        if (typeof v == "function") {
          if (!d && Array.isArray(_)) for (let C = 0; C < _.length; C++) _[C] = Us(_[C]);
          let y = v.apply(h, _);
          return y instanceof Promise || (y = Promise.resolve(y)), y;
        }
        throw new ms(`Method not found: ${m}`);
      }
    }();
  }
  e.fromService = i;
  function s(o, a) {
    const c = a && a.disableMarshalling;
    return new Proxy({}, { get(h, d) {
      if (typeof d != "symbol") {
        if (typeof d == "string") return a?.properties?.has(d) ? a.properties.get(d) : d === "dispose" ? t : r(d) ? function(u) {
          return o.listen(d, u);
        } : n(d) ? o.listen(d) : async function(...u) {
          let f;
          a && !mn(a.context) ? f = [a.context, ...u] : f = u;
          const p = await o.call(d, f);
          return c ? p : Us(p);
        };
        throw new ms(`Property not found: ${String(d)}`);
      }
    } });
  }
  e.toService = s;
  function n(o) {
    return o[0] === "o" && o[1] === "n" && pc(o.charCodeAt(2));
  }
  function r(o) {
    return /^onDynamic/.test(o) && pc(o.charCodeAt(9));
  }
})(Na || (Na = {}));
var n5 = class {
  constructor(e, t) {
    this.sender = e, this.onMessage = t;
  }
  send(e) {
    try {
      this.sender.send("vscode:message", e.buffer);
    } catch {
    }
  }
  disconnect() {
    this.sender.send("vscode:disconnect", null);
  }
}, r5 = class $u extends s5 {
  static createProtocol() {
    const t = A.fromNodeEventEmitter(xe, "vscode:message", (i, s) => Je.wrap(s));
    return xe.send("vscode:hello"), new n5(xe, t);
  }
  constructor(t) {
    const i = $u.createProtocol();
    super(i, t), this.protocol = i;
  }
  dispose() {
    this.protocol.disconnect(), super.dispose();
  }
};
function o5(e) {
  return `window:${e}`;
}
var a5 = class extends ee {
  constructor(e) {
    super(), this.mainProcessConnection = this._register(new r5(o5(e)));
  }
  getChannel(e) {
    return this.mainProcessConnection.getChannel(e);
  }
  registerChannel(e, t) {
    this.mainProcessConnection.registerChannel(e, t);
  }
  sendRawMessage(e, t) {
    xe.invoke(e);
  }
}, l5 = fr("mainProcessService"), Ia = class {
  constructor(e, t) {
    return this.windowId = e, Na.toService(t.getChannel("nativeHost"), { context: e, properties: (() => {
      const i = /* @__PURE__ */ new Map();
      return i.set("windowId", e), i;
    })() });
  }
};
Ia = pe([Xu(1, l5)], Ia);
function c5(e) {
  let t = false;
  const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  if (h5(e, (d) => {
    if (e === d) return true;
    const u = JSON.stringify(d);
    if (u.length < 30) return true;
    const f = i.get(u);
    if (!f) {
      const p = { schemas: [d] };
      return i.set(u, p), s.set(d, p), true;
    }
    return f.schemas.push(d), s.set(d, f), t = true, false;
  }), i.clear(), !t) return JSON.stringify(e);
  let r = "$defs";
  for (; e.hasOwnProperty(r); ) r += "_";
  const o = [];
  function a(d) {
    return JSON.stringify(d, (u, f) => {
      if (f !== d) {
        const p = s.get(f);
        if (p && p.schemas.length > 1) return p.id || (p.id = `_${o.length}`, o.push(p.schemas[0])), { $ref: `#/${r}/${p.id}` };
      }
      return f;
    });
  }
  const c = a(e), h = [];
  for (let d = 0; d < o.length; d++) h.push(`"_${d}":${a(o[d])}`);
  return h.length ? `${c.substring(0, c.length - 1)},"${r}":{${h.join(",")}}}` : c;
}
function cs(e) {
  return typeof e == "object" && e !== null;
}
function h5(e, t) {
  if (!e || typeof e != "object") return;
  const i = (...c) => {
    for (const h of c) cs(h) && o.push(h);
  }, s = (...c) => {
    for (const h of c) if (cs(h)) for (const d in h) {
      const u = h[d];
      cs(u) && o.push(u);
    }
  }, n = (...c) => {
    for (const h of c) if (Array.isArray(h)) for (const d of h) cs(d) && o.push(d);
  }, r = (c) => {
    if (Array.isArray(c)) for (const h of c) cs(h) && o.push(h);
    else cs(c) && o.push(c);
  }, o = [e];
  let a = o.pop();
  for (; a; ) t(a) && (i(a.additionalItems, a.additionalProperties, a.not, a.contains, a.propertyNames, a.if, a.then, a.else, a.unevaluatedItems, a.unevaluatedProperties), s(a.definitions, a.$defs, a.properties, a.patternProperties, a.dependencies, a.dependentSchemas), n(a.anyOf, a.allOf, a.oneOf, a.prefixItems), r(a.items)), a = o.pop();
}
var d5 = class {
  constructor() {
    this.data = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    Pr(bs(e)), Pr(zl(t)), Pr(!this.data.has(e), "There is already an extension with this id"), this.data.set(e, t);
  }
  knows(e) {
    return this.data.has(e);
  }
  as(e) {
    return this.data.get(e) || null;
  }
  dispose() {
    this.data.forEach((e) => {
      Fr(e.dispose) && e.dispose();
    }), this.data.clear();
  }
}, La = new d5(), vu = { JSONContribution: "base.contributions.json" };
function bu(e) {
  return e.length > 0 && e.charAt(e.length - 1) === "#" ? e.substring(0, e.length - 1) : e;
}
var u5 = class extends ee {
  constructor() {
    super(...arguments), this.schemasById = {}, this.schemaAssociations = {}, this._onDidChangeSchema = this._register(new L()), this.onDidChangeSchema = this._onDidChangeSchema.event, this._onDidChangeSchemaAssociations = this._register(new L()), this.onDidChangeSchemaAssociations = this._onDidChangeSchemaAssociations.event;
  }
  registerSchema(e, t, i) {
    const s = bu(e);
    this.schemasById[s] = t, this._onDidChangeSchema.fire(e), i && i.add(re(() => {
      delete this.schemasById[s], this._onDidChangeSchema.fire(e);
    }));
  }
  registerSchemaAssociation(e, t) {
    const i = bu(e);
    return this.schemaAssociations[i] || (this.schemaAssociations[i] = []), this.schemaAssociations[i].includes(t) || (this.schemaAssociations[i].push(t), this._onDidChangeSchemaAssociations.fire()), re(() => {
      const s = this.schemaAssociations[i];
      if (s) {
        const n = s.indexOf(t);
        n !== -1 && (s.splice(n, 1), s.length === 0 && delete this.schemaAssociations[i], this._onDidChangeSchemaAssociations.fire());
      }
    });
  }
  notifySchemaChanged(e) {
    this._onDidChangeSchema.fire(e);
  }
  getSchemaContributions() {
    return { schemas: this.schemasById };
  }
  getSchemaContent(e) {
    const t = this.schemasById[e];
    return t ? c5(t) : void 0;
  }
  hasSchemaContent(e) {
    return !!this.schemasById[e];
  }
  getSchemaAssociations() {
    return this.schemaAssociations;
  }
}, f5 = new u5();
La.add(vu.JSONContribution, f5);
var p5 = { IconContribution: "base.contributions.icons" }, yu;
((e) => {
  function t(i, s) {
    let n = i.defaults;
    for (; we.isThemeIcon(n); ) {
      const r = Ai.getIcon(n.id);
      if (!r) return;
      n = r.defaults;
    }
    return n;
  }
  e.getDefinition = t;
})(yu || (yu = {}));
var wu;
((e) => {
  function t(s) {
    return { weight: s.weight, style: s.style, src: s.src.map((n) => ({ format: n.format, location: n.location.toString() })) };
  }
  e.toJSONObject = t;
  function i(s) {
    const n = (r) => bs(r) ? r : void 0;
    if (s && Array.isArray(s.src) && s.src.every((r) => bs(r.format) && bs(r.location))) return { weight: n(s.weight), style: n(s.style), src: s.src.map((r) => ({ format: r.format, location: me.parse(r.location) })) };
  }
  e.fromJSONObject = i;
})(wu || (wu = {}));
var g5 = /^([\w_-]+)$/, m5 = W(2541, null), v5 = class extends ee {
  constructor() {
    super(), this._onDidChange = this._register(new L()), this.onDidChange = this._onDidChange.event, this.iconSchema = { definitions: { icons: { type: "object", properties: { fontId: { type: "string", description: W(2542, null), pattern: g5.source, patternErrorMessage: m5 }, fontCharacter: { type: "string", description: W(2543, null) } }, additionalProperties: false, defaultSnippets: [{ body: { fontCharacter: "\\\\e030" } }] } }, type: "object", properties: {} }, this.iconReferenceSchema = { type: "string", pattern: `^${we.iconNameExpression}$`, enum: [], enumDescriptions: [] }, this.iconsById = {}, this.iconFontsById = {};
  }
  registerIcon(e, t, i, s) {
    const n = this.iconsById[e];
    if (n) {
      if (i && !n.description) {
        n.description = i, this.iconSchema.properties[e].markdownDescription = `${i} $(${e})`;
        const a = this.iconReferenceSchema.enum.indexOf(e);
        a !== -1 && (this.iconReferenceSchema.enumDescriptions[a] = i), this._onDidChange.fire();
      }
      return n;
    }
    const r = { id: e, description: i, defaults: t, deprecationMessage: s };
    this.iconsById[e] = r;
    const o = { $ref: "#/definitions/icons" };
    return s && (o.deprecationMessage = s), i && (o.markdownDescription = `${i}: $(${e})`), this.iconSchema.properties[e] = o, this.iconReferenceSchema.enum.push(e), this.iconReferenceSchema.enumDescriptions.push(i || ""), this._onDidChange.fire(), { id: e };
  }
  deregisterIcon(e) {
    delete this.iconsById[e], delete this.iconSchema.properties[e];
    const t = this.iconReferenceSchema.enum.indexOf(e);
    t !== -1 && (this.iconReferenceSchema.enum.splice(t, 1), this.iconReferenceSchema.enumDescriptions.splice(t, 1)), this._onDidChange.fire();
  }
  getIcons() {
    return Object.keys(this.iconsById).map((e) => this.iconsById[e]);
  }
  getIcon(e) {
    return this.iconsById[e];
  }
  getIconSchema() {
    return this.iconSchema;
  }
  getIconReferenceSchema() {
    return this.iconReferenceSchema;
  }
  registerIconFont(e, t) {
    const i = this.iconFontsById[e];
    return i || (this.iconFontsById[e] = t, this._onDidChange.fire(), t);
  }
  deregisterIconFont(e) {
    delete this.iconFontsById[e];
  }
  getIconFont(e) {
    return this.iconFontsById[e];
  }
  toString() {
    const e = (n, r) => n.id.localeCompare(r.id), t = (n) => {
      for (; we.isThemeIcon(n.defaults); ) n = this.iconsById[n.defaults.id];
      return `codicon codicon-${n ? n.id : ""}`;
    }, i = [];
    i.push("| preview     | identifier                        | default codicon ID                | description"), i.push("| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |");
    const s = Object.keys(this.iconsById).map((n) => this.iconsById[n]);
    for (const n of s.filter((r) => !!r.description).sort(e)) i.push(`|<i class="${t(n)}"></i>|${n.id}|${we.isThemeIcon(n.defaults) ? n.defaults.id : n.id}|${n.description || ""}|`);
    i.push("| preview     | identifier                        "), i.push("| ----------- | --------------------------------- |");
    for (const n of s.filter((r) => !we.isThemeIcon(r.defaults)).sort(e)) i.push(`|<i class="${t(n)}"></i>|${n.id}|`);
    return i.join(`
`);
  }
}, Ai = new v5();
La.add(p5.IconContribution, Ai);
function Ra(e, t, i, s) {
  return Ai.registerIcon(e, t, i, s);
}
function _u() {
  return Ai;
}
function b5() {
  const e = Ng();
  for (const t in e) {
    const i = "\\" + e[t].toString(16);
    Ai.registerIcon(t, { fontCharacter: i });
  }
}
b5();
var Su = "vscode://schemas/icons", Cu = La.as(vu.JSONContribution);
Cu.registerSchema(Su, Ai.getIconSchema());
var Du = new Fc(() => Cu.notifySchemaChanged(Su), 200);
Ai.onDidChange(() => {
  Du.isScheduled() || Du.schedule();
});
var Eb = Ra("widget-close", be.close, W(2544, null)), kb = Ra("goto-previous-location", be.arrowUp, W(2545, null)), Tb = Ra("goto-next-location", be.arrowDown, W(2546, null)), xb = we.modify(be.sync, "spin"), Ab = we.modify(be.loading, "spin");
function y5(e) {
  const t = new q(), i = t.add(new L()), s = _u();
  return t.add(s.onDidChange(() => i.fire())), e && t.add(e.onDidProductIconThemeChange(() => i.fire())), { dispose: () => t.dispose(), onDidChange: i.event, getCSS() {
    const n = e ? e.getProductIconTheme() : new w5(), r = {}, o = new Ho(), a = new Ho();
    for (const c of s.getIcons()) {
      const h = n.getIcon(c);
      if (!h) continue;
      const d = h.font, u = We`--vscode-icon-${Gn(c.id)}-font-family`, f = We`--vscode-icon-${Gn(c.id)}-content`;
      d ? (r[d.id] = d.definition, a.push(We`${u}: ${qt(d.id)};`, We`${f}: ${qt(h.fontCharacter)};`), o.push(We`.codicon-${Gn(c.id)}:before { content: ${qt(h.fontCharacter)}; font-family: ${qt(d.id)}; }`)) : (a.push(We`${f}: ${qt(h.fontCharacter)}; ${u}: 'codicon';`), o.push(We`.codicon-${Gn(c.id)}:before { content: ${qt(h.fontCharacter)}; }`));
    }
    for (const c in r) {
      const h = r[c], d = h.weight ? We`font-weight: ${Gh(h.weight)};` : We``, u = h.style ? We`font-style: ${Gh(h.style)};` : We``, f = new Ho();
      for (const p of h.src) f.push(We`${hg(p.location)} format(${qt(p.format)})`);
      o.push(We`@font-face { src: ${f.join(", ")}; font-family: ${qt(c)};${d}${u} font-display: block; }`);
    }
    return o.push(We`:root { ${a.join(" ")} }`), o.join(`
`);
  } };
}
var w5 = class {
  getIcon(e) {
    const t = _u();
    let i = e.defaults;
    for (; we.isThemeIcon(i); ) {
      const s = t.getIcon(i.id);
      if (!s) return;
      i = s.defaults;
    }
    return i;
  }
};
function _5(e = 0) {
  return Math.pow(1.2, e);
}
var S5 = 8, C5 = -8;
function Ma(e, t) {
  e = Math.min(Math.max(e, C5), S5);
  const i = [];
  t === 1 ? i.push(Fo()) : t === 2 ? i.push(...Array.from(Ro()).map(({ window: s }) => s)) : i.push(t);
  for (const s of i) D5(s)?.webFrame?.setZoomLevel(e), G1(_5(e), s), W1(e, s);
}
function D5(e) {
  if (e === x) return { ipcRenderer: xe, webFrame: $4 };
  {
    const t = e;
    if (t?.vscode?.ipcRenderer && t?.vscode?.webFrame) return t.vscode;
  }
}
function E5(e) {
  Ma(Zl(typeof e == "number" ? Fo() : e) + 1, e);
}
function k5(e) {
  Ma(Zl(typeof e == "number" ? Fo() : e) - 1, e);
}
function Pa(e, t) {
  switch (t) {
    case "memory":
      return e.memoryDuringSamplePeakMb;
    case "cpu":
      return e.cpuDuringSamplePeakPct;
    case "network":
      return e.networkKb;
  }
}
function Oa(e, t) {
  switch (t) {
    case "memory":
      return e.totalPeakMemMb;
    case "cpu":
      return e.totalPeakCpuPct;
    case "network":
      return e.totalNetworkKb;
  }
}
function T5(e) {
  return e.memoryDuringSamplePeakMb > 0 || e.cpuDuringSamplePeakPct > 0;
}
var Ie = class {
  static get theme() {
    return this._theme;
  }
  static applyTheme(t) {
    this._theme = { ...this.DEFAULT_THEME, ...x5(t) };
  }
  static getFillColor(t) {
    return this.BASE_COLORS[t % this.BASE_COLORS.length] + this.FILL_OPACITY;
  }
  static getStrokeColor(t) {
    return this.BASE_COLORS[t % this.BASE_COLORS.length];
  }
  static getUnit(t) {
    switch (t) {
      case "memory":
        return "MB";
      case "cpu":
        return "%";
      case "network":
        return "KB";
    }
  }
  static appendOthersSeries(t, i, s) {
    if (t.length === 0 || i.length === 0) return t;
    const n = i.map((c) => Oa(c, s)), o = i.map((c, h) => t.reduce((d, u) => d + u.values[h], 0)).map((c, h) => Math.max(0, n[h] - c)), a = o.reduce((c, h) => c + h, 0);
    return a > 0 ? [...t, { processName: "Others", totalContrib: a, values: o, color: this.BASE_COLORS[this.BASE_COLORS.length - 1] }] : t;
  }
};
Ie.BASE_COLORS = ["#4C72B0", "#55A868", "#C44E52", "#8172B2", "#CCB974", "#64B5CD", "#F28E2B", "#76B7B2", "#E15759", "#B07AA1", "#59A14F", "#EDC948", "#B6992D", "#F1CE63", "#499894", "#86BCB6", "#E15759", "#FF9DA7", "#9C755F", "#BAB0AC", "#999999"], Ie.MARGIN = { top: 18, right: 20, bottom: 46, left: 64 }, Ie.MIN_CSS_WIDTH = 640, Ie.CSS_HEIGHT = 420, Ie.CONTAINER_PADDING = 16, Ie.FILL_OPACITY = "40", Ie.LINE_WIDTH = 2, Ie.DEFAULT_THEME = { backgroundColor: "#1e1e1e", gridColor: "#2a2a2a", axisColor: "#666", textColor: "#bbb", textColorMuted: "#888", hoverLineColor: "#ddd", selectionLineColor: "#ffffff", tooltipBackground: "rgba(30, 30, 30, 0.95)", tooltipBorder: "rgba(76, 114, 176, 0.4)", tooltipForeground: "#ffffff", gapFillColor: "rgba(200,200,200,0.04)", gapBorderColor: "rgba(200,200,200,0.25)", gapTextColor: "rgba(230,230,230,0.75)", gapSubtextColor: "rgba(200,200,200,0.7)", emptyStateTextColor: "#ccc", legendHeaderBorder: "#3a3a3a", legendSecondaryForeground: "#ccc", legendTertiaryForeground: "#888", legendHoverBackground: "#2a2a2a", legendPidForeground: "#999", legendExtensionForeground: "#777", legendValueForeground: "#aaa", legendInactiveSwatchBorder: "rgba(150,150,150,0.5)", legendActiveSwatchBorder: "rgba(255,255,255,0.15)", legendUnmappedSwatchBackground: "#555", legendUnmappedSwatchBorder: "rgba(255,255,255,0.3)" }, Ie._theme = { ...Ie.DEFAULT_THEME }, Ie.GAP_MIN_WIDTH_FOR_TEXT = 90, Ie.GAP_DASH_PATTERN = [5, 6], Ie.GAP_SPACING_MULTIPLIER = 6, Ie.GAP_PIXEL_MULTIPLIER = 80, Ie.GAP_MIN_THRESHOLD_MS = 300 * 1e3, Ie.TIME_RANGES = [{ label: "15m", ms: 900 * 1e3 }, { label: "1h", ms: 3600 * 1e3 }, { label: "6h", ms: 360 * 60 * 1e3 }, { label: "All", ms: null }];
var U = Ie;
function x5(e) {
  const t = {};
  for (const i in e) {
    const s = i, n = e[s];
    n !== void 0 && (t[s] = n);
  }
  return t;
}
var Fa = class {
  static niceNumber(e) {
    const t = Math.floor(Math.log10(e)), i = e / Math.pow(10, t);
    let s;
    return i < 1.5 ? s = 1 : i < 3 ? s = 2 : i < 7 ? s = 5 : s = 10, s * Math.pow(10, t);
  }
  static chooseTimeStep(e, t) {
    const i = e / Math.max(1, t);
    for (const s of this.TIME_STEPS_MS) if (s >= i) return s;
    return this.TIME_STEPS_MS[this.TIME_STEPS_MS.length - 1];
  }
  static buildTimeTicks(e, t, i) {
    const s = t - e, n = Math.max(2, Math.floor(i / 90)), r = this.chooseTimeStep(s, n), o = Math.floor(e / r) * r, a = [];
    for (let c = o; c <= t + 1e-6; c += r) c >= e && a.push(c);
    return a.length === 0 && a.push(e, t), a;
  }
  static buildYTicks(e, t) {
    const i = e / t, s = Math.max(1, this.niceNumber(i)), n = [];
    for (let r = 0; r <= e + 1e-6; r += s) n.push(r);
    return n;
  }
};
Fa.TIME_STEPS_MS = [6e4, 5 * 6e4, 15 * 6e4, 30 * 6e4, 60 * 6e4, 180 * 6e4, 360 * 6e4, 720 * 6e4, 1440 * 6e4, 2880 * 6e4, 10080 * 6e4];
var qe = class {
  static setupCanvas(e, t) {
    const i = Math.max(1, Math.floor(x.devicePixelRatio || 1)), s = Math.max(U.MIN_CSS_WIDTH, t.clientWidth - U.CONTAINER_PADDING), n = U.CSS_HEIGHT;
    e.style.width = `${s}px`, e.style.height = `${n}px`, e.width = Math.floor(s * i), e.height = Math.floor(n * i);
    const r = s - U.MARGIN.left - U.MARGIN.right, o = n - U.MARGIN.top - U.MARGIN.bottom;
    return { cssWidth: s, cssHeight: n, canvasWidth: e.width, canvasHeight: e.height, margin: U.MARGIN, chartWidth: r, chartHeight: o, dpr: i };
  }
  static drawBackground(e, t) {
    e.fillStyle = U.theme.backgroundColor, e.fillRect(0, 0, t.cssWidth, t.cssHeight);
  }
  static drawGrid(e, t, i, s, n, r) {
    const { margin: o, cssWidth: a, cssHeight: c } = t;
    e.strokeStyle = U.theme.gridColor, e.lineWidth = 1;
    for (const h of i) {
      const d = n(h);
      e.beginPath(), e.moveTo(o.left, d), e.lineTo(a - o.right, d), e.stroke();
    }
    for (const h of s) {
      const d = r(h);
      e.beginPath(), e.moveTo(d, o.top), e.lineTo(d, c - o.bottom), e.stroke();
    }
  }
  static drawAxes(e, t) {
    const { margin: i, cssWidth: s, cssHeight: n } = t;
    e.strokeStyle = U.theme.axisColor, e.lineWidth = 1, e.beginPath(), e.moveTo(i.left, i.top), e.lineTo(i.left, n - i.bottom), e.stroke(), e.beginPath(), e.moveTo(i.left, n - i.bottom), e.lineTo(s - i.right, n - i.bottom), e.stroke();
  }
  static drawYLabels(e, t, i, s, n) {
    e.fillStyle = U.theme.textColor, e.font = "11px sans-serif", e.textAlign = "right";
    for (const r of i) {
      const o = s(r);
      e.fillText(`${Math.round(r)} ${n}`, t.margin.left - 8, o + 3);
    }
  }
  static drawXLabels(e, t, i, s, n) {
    const { margin: r, cssHeight: o } = t;
    e.textAlign = "center";
    const a = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }), c = new Intl.DateTimeFormat(void 0, { month: "short", day: "2-digit" });
    let h = -1 / 0;
    for (const d of i) {
      const u = s(d), f = a.format(new Date(d));
      u - h >= 64 && (e.fillStyle = U.theme.textColor, e.fillText(f, u, o - r.bottom + 16), n > 1440 * 60 * 1e3 && (e.fillStyle = U.theme.textColorMuted, e.fillText(c.format(new Date(d)), u, o - r.bottom + 30)), h = u);
    }
  }
  static drawGapOverlays(e, t, i, s) {
    if (i.length === 0) return;
    const { margin: n, cssHeight: r } = t;
    e.save(), e.textAlign = "center", e.textBaseline = "middle", e.font = "10px sans-serif";
    for (const o of i) {
      const a = s(o.startTime), c = s(o.endTime), h = Math.max(1, c - a);
      if (e.fillStyle = U.theme.gapFillColor, e.fillRect(a, n.top, h, t.chartHeight), e.strokeStyle = U.theme.gapBorderColor, e.setLineDash(U.GAP_DASH_PATTERN), e.beginPath(), e.moveTo(a, n.top), e.lineTo(a, r - n.bottom), e.moveTo(c, n.top), e.lineTo(c, r - n.bottom), e.stroke(), e.setLineDash([]), h >= U.GAP_MIN_WIDTH_FOR_TEXT) {
        const d = a + h / 2;
        e.fillStyle = U.theme.gapTextColor, e.fillText("No Data", d, n.top + t.chartHeight / 2 - 8), e.fillStyle = U.theme.gapSubtextColor, e.fillText(this.formatGapDuration(o.duration), d, n.top + t.chartHeight / 2 + 8);
      }
    }
    e.restore();
  }
  static drawStackedAreas(e, t, i, s, n, r, o, a) {
    for (let c = i.length - 1; c >= 0; c--) for (const h of r) {
      if (h.endIdx < h.startIdx) continue;
      e.beginPath();
      for (let u = h.startIdx; u <= h.endIdx; u++) {
        const f = o(s[u].sampleEnd), p = a(n[u][c]);
        u === h.startIdx ? e.moveTo(f, p) : e.lineTo(f, p);
      }
      for (let u = h.endIdx; u >= h.startIdx; u--) {
        const f = o(s[u].sampleEnd), p = a(c + 1 < i.length ? n[u][c + 1] : 0);
        e.lineTo(f, p);
      }
      e.closePath();
      const d = i[c].color || U.BASE_COLORS[c % U.BASE_COLORS.length];
      e.fillStyle = d + U.FILL_OPACITY, e.fill(), e.strokeStyle = d, e.lineWidth = U.LINE_WIDTH, e.stroke();
    }
  }
  static drawSelectionIndicator(e, t, i, s, n) {
    if (i < 0 || i >= s.length) return;
    const { margin: r, cssHeight: o } = t, a = n(s[i].sampleEnd);
    e.strokeStyle = U.theme.selectionLineColor, e.lineWidth = 2, e.beginPath(), e.moveTo(a, r.top), e.lineTo(a, o - r.bottom), e.stroke(), e.lineWidth = 1;
  }
  static drawHoverIndicator(e, t, i, s, n) {
    if (i < 0 || i >= s.length) return;
    const { margin: r, cssHeight: o } = t, a = n(s[i].sampleEnd);
    e.strokeStyle = U.theme.hoverLineColor, e.lineWidth = 1, e.setLineDash([3, 3]), e.beginPath(), e.moveTo(a, r.top), e.lineTo(a, o - r.bottom), e.stroke(), e.setLineDash([]);
  }
  static drawHoverTooltip(e, t, i, s, n, r, o, a, c) {
    if (i < 0 || i >= s.length) return;
    const h = s[i], d = Oa(h, a), f = new Date(h.sampleEnd).toLocaleTimeString(), p = `${d.toFixed(1)} ${c}`;
    e.font = "11px sans-serif";
    const m = e.measureText(f).width, _ = e.measureText(p).width, v = Math.max(m, _), y = 8, C = 14, D = v + y * 2, E = C * 2 + y * 2;
    let w = r + 12, S = o - E / 2;
    w + D > t.cssWidth - t.margin.right && (w = r - D - 12), S < t.margin.top && (S = t.margin.top), S + E > t.cssHeight - t.margin.bottom && (S = t.cssHeight - t.margin.bottom - E), e.fillStyle = U.theme.tooltipBackground, e.strokeStyle = U.theme.tooltipBorder, e.lineWidth = 0.5;
    const I = 4;
    e.beginPath(), e.moveTo(w + I, S), e.lineTo(w + D - I, S), e.arcTo(w + D, S, w + D, S + I, I), e.lineTo(w + D, S + E - I), e.arcTo(w + D, S + E, w + D - I, S + E, I), e.lineTo(w + I, S + E), e.arcTo(w, S + E, w, S + E - I, I), e.lineTo(w, S + I), e.arcTo(w, S, w + I, S, I), e.closePath(), e.fill(), e.stroke(), e.fillStyle = U.theme.tooltipForeground, e.textAlign = "left", e.textBaseline = "top", e.fillText(f, w + y, S + y), e.fillStyle = U.theme.tooltipForeground, e.font = "11px sans-serif", e.fillText(p, w + y, S + y + C);
  }
  static formatGapDuration(e) {
    const t = Math.max(0, Math.round(e / 1e3)), i = Math.floor(t / 3600), s = Math.floor(t % 3600 / 60), n = t % 60, r = [];
    return i > 0 && r.push(`${i}h`), (s > 0 || i > 0) && r.push(`${s}m`), i === 0 && s === 0 && r.push(`${n}s`), r.join(" ");
  }
  static computeCumulativeStacks(e, t) {
    const i = [];
    for (let s = 0; s < e.length; s++) {
      const n = new Array(t.length);
      let r = 0;
      for (let o = t.length - 1; o >= 0; o--) r += t[o].values[s], n[o] = r;
      i[s] = n;
    }
    return i;
  }
  static computeMaxY(e) {
    let t = 0;
    for (const i of e) {
      const s = Math.max(...i);
      s > t && (t = s);
    }
    return Math.max(1, t);
  }
}, A5 = class {
  static computeGapSegments(e, t, i) {
    const s = [], n = [];
    if (e.length === 0) return { segments: s, gaps: n };
    const r = this.computeGapThreshold(e, t, i);
    let o = 0;
    for (let a = 1; a < e.length; a++) {
      const c = e[a].sampleEnd - e[a - 1].sampleEnd;
      c >= r && (o <= a - 1 && s.push({ startIdx: o, endIdx: a - 1 }), n.push({ startTime: e[a - 1].sampleEnd, endTime: e[a].sampleEnd, duration: c }), o = a);
    }
    return o <= e.length - 1 && s.push({ startIdx: o, endIdx: e.length - 1 }), { segments: s, gaps: n };
  }
  static computeGapThreshold(e, t, i) {
    const s = e.length > 1 ? t / Math.max(1, e.length - 1) : t, n = i > 0 ? t / i : t, r = s * U.GAP_SPACING_MULTIPLIER, o = n * U.GAP_PIXEL_MULTIPLIER;
    return Math.max(U.GAP_MIN_THRESHOLD_MS, r, o);
  }
}, Eu = class {
  static updateLegend(e, t, i, s, n, r, o, a) {
    if (s < 0 || s >= i.length) {
      this.clearChildren(e);
      return;
    }
    const c = i[s], h = Oa(c, o), d = c.rows.map((p) => ({ processName: p.processName, value: Pa(p, o), historyRow: p })).sort((p, m) => m.value - p.value);
    this.clearChildren(e);
    const u = this.renderHeader(c, h, d.length, r);
    e.appendChild(u);
    const f = this.renderItems(d, h, n, r, a);
    e.appendChild(f);
  }
  static renderHeader(e, t, i, s) {
    const n = this.createElement("div");
    n.style.marginBottom = "10px", n.style.paddingBottom = "8px", n.style.borderBottom = `1px solid ${U.theme.legendHeaderBorder}`;
    const r = this.createElement("strong");
    r.style.fontSize = "12px", r.textContent = new Date(e.sampleEnd).toLocaleString(), n.appendChild(r);
    const o = this.createElement("div");
    o.style.color = U.theme.legendSecondaryForeground, o.style.fontSize = "11px", o.style.marginTop = "4px", o.textContent = `Total Peak (all processes): ${t.toFixed(1)} ${s}`, n.appendChild(o);
    const a = this.createElement("div");
    return a.style.color = U.theme.legendTertiaryForeground, a.style.fontSize = "10px", a.textContent = `Processes in sample: ${i}`, n.appendChild(a), n;
  }
  static renderItems(e, t, i, s, n) {
    const r = this.createElement("div");
    r.style.fontSize = "11px", r.style.maxHeight = "360px", r.style.overflowY = "auto", r.style.paddingRight = "6px";
    const o = x.document.createDocumentFragment();
    for (const { processName: a, value: c, historyRow: h } of e) {
      const d = this.renderProcessRow(a, c, t, i, s, h, n);
      o.appendChild(d);
    }
    return r.appendChild(o), r;
  }
  static renderProcessRow(e, t, i, s, n, r, o) {
    const a = this.createElement("div");
    a.style.display = "flex", a.style.alignItems = "center", a.style.margin = "2px 0", a.style.padding = "2px 4px", a.style.borderRadius = "3px", a.style.transition = "background-color 0.15s ease";
    const c = T5(r), h = o?.isSelected(e) ?? true;
    c ? h || (a.style.opacity = "0.4") : a.style.opacity = "0.5", a.addEventListener("mouseenter", () => {
      a.style.backgroundColor = U.theme.legendHoverBackground;
    }), a.addEventListener("mouseleave", () => {
      a.style.backgroundColor = "transparent";
    });
    const d = this.createElement("span");
    if (d.style.display = "inline-block", d.style.width = "12px", d.style.height = "12px", d.style.marginRight = "8px", d.style.borderRadius = "2px", d.style.flexShrink = "0", d.style.cursor = o ? "pointer" : "default", o && d.addEventListener("click", (v) => {
      v.preventDefault(), v.stopPropagation(), o.toggleProcess(e);
    }), !c) d.style.background = "transparent", d.style.border = `1px dashed ${U.theme.legendInactiveSwatchBorder}`;
    else {
      const v = s.get(e);
      v ? (d.style.background = v, d.style.border = `0.5px solid ${U.theme.legendActiveSwatchBorder}`) : (d.style.background = U.theme.legendUnmappedSwatchBackground, d.style.border = `1px dashed ${U.theme.legendUnmappedSwatchBorder}`);
    }
    a.appendChild(d);
    const u = this.createElement("span");
    u.style.width = "50px", u.style.flexShrink = "0", u.style.marginRight = "2px", u.style.marginLeft = "10px", u.style.color = U.theme.legendPidForeground, u.style.fontFamily = "monospace", u.style.fontSize = "10px", u.textContent = r.pid.toString(), a.appendChild(u);
    const f = this.createElement("span");
    if (f.style.flex = "1", f.style.marginRight = "12px", f.style.overflow = "hidden", f.style.textOverflow = "ellipsis", f.style.whiteSpace = "nowrap", f.textContent = e, r.argv.length > 0) {
      const v = this.createElement("span");
      v.style.color = "#888", v.style.marginLeft = "6px", v.textContent = r.argv.join(" "), f.appendChild(v);
    }
    if (f.addEventListener("dblclick", (v) => {
      v.preventDefault(), v.stopPropagation(), o?.selectOnly(e);
    }), r.isRemote) {
      const v = this.createElement("span");
      v.textContent = "🌐", v.style.fontSize = "10px", v.style.marginLeft = "4px", v.style.opacity = "0.7", v.title = r.remoteAuthority || "Remote process", f.appendChild(v);
    }
    a.appendChild(f);
    let p = null;
    if (r.extensionId && r.extensionId.length > 0) p = this.createElement("span"), p.style.flexShrink = "0", p.style.marginRight = "12px", p.style.color = U.theme.legendExtensionForeground, p.style.fontSize = "10px", p.style.fontStyle = "italic", p.style.overflow = "hidden", p.style.textOverflow = "ellipsis", p.style.whiteSpace = "nowrap", p.style.width = "180px", p.style.display = "inline-block", p.style.textAlign = "right", p.textContent = r.extensionId, p.title = r.extensionId, a.appendChild(p);
    else {
      const v = this.createElement("span");
      v.style.width = "180px", v.style.display = "inline-block", v.style.marginRight = "12px", a.appendChild(v);
    }
    const m = this.createElement("span");
    m.style.color = U.theme.legendValueForeground, m.style.fontWeight = "600", m.style.flexShrink = "0", m.style.whiteSpace = "nowrap", m.style.width = "110px", m.style.display = "inline-block";
    const _ = i > 0 ? t / i * 100 : 0;
    return m.textContent = `${t.toFixed(1)} ${n} (${_.toFixed(1)}%)`, a.appendChild(m), a;
  }
  static clearChildren(e) {
    for (; e.firstChild; ) e.removeChild(e.firstChild);
  }
  static createElement(e) {
    return x.document.createElement(e);
  }
};
function ku(e) {
  if (!e) return;
  const t = e.split("+");
  if (t.length < 2) return;
  const i = t[0];
  if (!i || i !== "background-composer") return;
  const s = t[1];
  if (s) return s;
}
var en = "Shared", Ni = class {
  static parse(e, t) {
    const i = e.split(`
`).filter((c) => c.trim().length > 0), s = this.createParseContext(t);
    if (i.length === 0) return { samples: [], seriesMem: [], seriesCpu: [], seriesNet: [], groupBy: s.groupBy };
    const n = this.parseSamples(i, s);
    if (n.length === 0) return { samples: n, seriesMem: [], seriesCpu: [], seriesNet: [], groupBy: s.groupBy };
    const r = this.computeTopSeries(n, "memory", 20, s.groupBy), o = this.computeTopSeries(n, "cpu", 20, s.groupBy), a = this.computeTopSeries(n, "network", 20, s.groupBy);
    return { samples: n, seriesMem: r, seriesCpu: o, seriesNet: a, groupBy: s.groupBy };
  }
  static parseSamples(e, t) {
    const i = [];
    for (const s of e) try {
      const n = this.parseLine(s, t);
      n && i.push(n);
    } catch {
    }
    return i.sort((s, n) => s.sampleEnd - n.sampleEnd);
  }
  static parseLine(e, t) {
    const i = JSON.parse(e), s = Number(i.sampleEnd);
    if (!Number.isFinite(s)) return null;
    const n = i.origin === "remote", r = i.remoteOs, o = i.remoteAuthority, c = (Array.isArray(i.rows) ? i.rows : []).map((f) => {
      const p = this.parseRow(f, t.networkDirection);
      return n && (p.isRemote = true, p.remoteOs = r, p.remoteAuthority = o), t.groupBy === "workspace" && (p.workspaceGroup = n ? this.resolveWorkspaceGroupName(o, t.workspaceNameByBcId) : en), p;
    }), h = c.reduce((f, p) => f + p.memoryDuringSamplePeakMb, 0), d = c.reduce((f, p) => f + p.cpuDuringSamplePeakPct, 0), u = c.reduce((f, p) => f + p.networkKb, 0);
    return { sampleEnd: s, totalPeakMemMb: h, totalPeakCpuPct: d, totalNetworkKb: u, rows: c };
  }
  static createParseContext(e) {
    const t = e?.networkDirection ?? "total";
    if (!e?.groupByWorkspace) return { groupBy: "process", workspaceNameByBcId: /* @__PURE__ */ new Map(), networkDirection: t };
    const i = /* @__PURE__ */ new Map();
    for (const s of e.workspaceEntries ?? []) {
      const n = ku(s.remoteAuthority);
      n && (i.has(n) || i.set(n, s.displayName));
    }
    return { groupBy: "workspace", workspaceNameByBcId: i, networkDirection: t };
  }
  static resolveWorkspaceGroupName(e, t) {
    const i = ku(e);
    return i ? t.get(i) ?? en : en;
  }
  static parseRow(e, t) {
    const i = Number(e?.pid ?? 0), s = String(e?.processName ?? "unknown"), n = String(e?.extensionId ?? ""), r = Number(e?.memoryDuringSamplePeakMb ?? 0), o = Number(e?.cpuDuringSamplePeakPct ?? 0), a = Number(e?.networkRxBytes ?? 0), c = Number(e?.networkTxBytes ?? 0), h = (Number.isFinite(a) ? a : 0) / 1024, d = (Number.isFinite(c) ? c : 0) / 1024, u = t === "rx" ? h : t === "tx" ? d : h + d, f = Array.isArray(e?.argv) ? e.argv : [];
    return { pid: Number.isFinite(i) ? i : 0, processName: s, extensionId: n, memoryDuringSamplePeakMb: Number.isFinite(r) ? r : 0, cpuDuringSamplePeakPct: Number.isFinite(o) ? o : 0, networkKb: u, argv: f };
  }
  static computeTopSeries(e, t, i, s = "process") {
    const n = /* @__PURE__ */ new Map();
    for (const o of e) for (const a of o.rows) {
      const c = Pa(a, t), h = s === "workspace" ? a.workspaceGroup ?? en : a.processName;
      n.set(h, (n.get(h) ?? 0) + c);
    }
    return Array.from(n.entries()).sort((o, a) => a[1] - o[1]).slice(0, i).map(([o, a]) => {
      const c = e.map((h) => {
        const d = h.rows.filter((u) => s === "workspace" ? (u.workspaceGroup ?? en) === o : u.processName === o);
        return d.length === 0 ? 0 : d.reduce((u, f) => u + Pa(f, t), 0);
      });
      return { processName: o, totalContrib: a, values: c };
    });
  }
  static filterToTimeRange(e, t, i) {
    if (i === null || e.length === 0) return { samples: e, series: t };
    const s = e[e.length - 1].sampleEnd - i, n = e.findIndex((a) => a.sampleEnd >= s);
    if (n === -1) return { samples: [], series: [] };
    if (n === 0) return { samples: e, series: t };
    const r = e.slice(n), o = t.map((a) => ({ processName: a.processName, totalContrib: a.totalContrib, values: a.values.slice(n) }));
    return { samples: r, series: o };
  }
}, N5 = class {
  constructor() {
    this.allProcessNames = /* @__PURE__ */ new Set(), this.onChangeCallback = null, this.deselectedProcesses = /* @__PURE__ */ new Set();
  }
  updateAllProcessNames(e) {
    this.allProcessNames.clear();
    for (const t of e) t.processName !== "Others" && this.allProcessNames.add(t.processName);
    for (const t of this.deselectedProcesses) this.allProcessNames.has(t) || this.deselectedProcesses.delete(t);
  }
  toggleProcess(e) {
    this.deselectedProcesses.has(e) ? this.deselectedProcesses.delete(e) : (this.deselectedProcesses.add(e), this.deselectedProcesses.size === this.allProcessNames.size && this.deselectedProcesses.clear()), this.notifyChange();
  }
  selectOnly(e) {
    this.deselectedProcesses.clear();
    for (const t of this.allProcessNames) t !== e && this.deselectedProcesses.add(t);
    this.notifyChange();
  }
  isSelected(e) {
    return !this.deselectedProcesses.has(e);
  }
  isActive() {
    return this.deselectedProcesses.size > 0;
  }
  clearAll() {
    this.deselectedProcesses.clear(), this.notifyChange();
  }
  filterSeries(e) {
    return this.isActive() ? e.filter((t) => this.isSelected(t.processName)) : e;
  }
  filterSamples(e) {
    return this.isActive() ? e.map((t) => ({ ...t, rows: t.rows.filter((i) => this.isSelected(i.processName)) })) : e;
  }
  onChange(e) {
    this.onChangeCallback = e;
  }
  notifyChange() {
    this.onChangeCallback && this.onChangeCallback();
  }
};
function I5(e) {
  switch (e) {
    case "memory":
      return "mem";
    case "cpu":
      return "cpu";
    case "network":
      return "net";
  }
}
var Tu = class {
  constructor(e) {
    this.fullHistoryData = e, this.originFilter = "local", this.metricState = /* @__PURE__ */ new Map();
  }
  stateFor(e) {
    let t = this.metricState.get(e);
    if (!t) {
      const i = new N5();
      i.onChange(() => this.render(e)), t = { selectedTimeRangeMs: null, canvasMouseMove: null, canvasMouseLeave: null, canvasClick: null, resizeHandler: null, analysisManager: i, hoveredSampleIndex: -1, selectedSampleIndex: -1, isMouseOverChart: false }, this.metricState.set(e, t);
    }
    return t;
  }
  seriesFor(e, t) {
    switch (t) {
      case "memory":
        return e.seriesMem;
      case "cpu":
        return e.seriesCpu;
      case "network":
        return e.seriesNet;
    }
  }
  setOriginFilter(e) {
    this.originFilter = e;
  }
  hasRemoteData() {
    return this.fullHistoryData.samples.some((e) => e.rows.some((t) => t.isRemote === true));
  }
  render(e) {
    const t = this.stateFor(e), i = I5(e), s = U.getUnit(e), n = t.analysisManager, r = this.filterDataByOrigin(this.fullHistoryData), o = x.document.getElementById(`history-${i}-chart`), a = x.document.getElementById(`history-${i}-legend`), c = x.document.getElementById(`history-${i}`);
    if (!o || !a || !c) return;
    const h = t.selectedTimeRangeMs;
    let { samples: d, series: u, colorMap: f } = this.prepareData(r, e, h, n);
    if (d.length === 0 || u.length === 0) {
      this.renderEmptyState(o, c), Eu.updateLegend(a, [], [], 0, f, s, e, n);
      return;
    }
    const p = qe.setupCanvas(o, c), m = o.getContext("2d");
    if (!m) return;
    m.setTransform(p.dpr, 0, 0, p.dpr, 0, 0);
    const { minTime: _, maxTime: v, timeRange: y, timeToX: C, maxY: D, valueToY: E } = this.computeScales(d, u, p), w = qe.computeCumulativeStacks(d, u), { segments: S, gaps: I } = A5.computeGapSegments(d, y, p.chartWidth);
    let P = t.hoveredSampleIndex, Y = t.selectedSampleIndex;
    (P < 0 || P >= d.length) && (P = d.length - 1, t.hoveredSampleIndex = P), (Y < 0 || Y >= d.length) && (Y = d.length - 1, t.selectedSampleIndex = Y);
    const ue = ($, He, ei, M, k) => {
      qe.drawBackground(m, p), qe.drawGapOverlays(m, p, I, C);
      const R = Fa.buildYTicks(D, 5), N = Fa.buildTimeTicks(_, v, p.chartWidth);
      qe.drawGrid(m, p, R, N, E, C), qe.drawStackedAreas(m, p, u, d, w, S, C, E), qe.drawAxes(m, p), qe.drawYLabels(m, p, R, E, s), qe.drawXLabels(m, p, N, C, y), qe.drawSelectionIndicator(m, p, He, d, C), ei && (qe.drawHoverIndicator(m, p, $, d, C), M !== void 0 && k !== void 0 && $ >= 0 && $ < d.length && qe.drawHoverTooltip(m, p, $, d, C, M, k, e, s)), Eu.updateLegend(a, u, d, He, f, s, e, n);
    }, G = t.isMouseOverChart;
    ue(P, Y, G), this.setupMouseInteraction(o, d, C, P, Y, ue, e), this.setupTimeRangeControls(i, e), this.setupResizeHandler(e);
  }
  prepareData(e, t, i, s) {
    const n = this.seriesFor(e, t);
    let r = e.samples;
    const o = /* @__PURE__ */ new Map();
    for (let h = 0; h < n.length; h++) {
      const d = n[h].processName;
      if (d !== "Others") {
        const u = U.BASE_COLORS[h % U.BASE_COLORS.length];
        o.set(d, u);
      }
    }
    const a = Ni.filterToTimeRange(r, n, i);
    r = a.samples;
    let c = a.series;
    return s.updateAllProcessNames(c), c = c.map((h) => {
      const d = o.get(h.processName);
      return { ...h, color: d || U.BASE_COLORS[U.BASE_COLORS.length - 1] };
    }), s.isActive() && (c = s.filterSeries(c)), s.isActive() || (c = U.appendOthersSeries(c, r, t)), { samples: r, series: c, colorMap: o };
  }
  computeScales(e, t, i) {
    const s = e[0].sampleEnd, n = e[e.length - 1].sampleEnd, r = Math.max(1, n - s), o = (d) => i.margin.left + (d - s) / r * i.chartWidth, a = qe.computeCumulativeStacks(e, t), c = qe.computeMaxY(a);
    return { minTime: s, maxTime: n, timeRange: r, timeToX: o, maxY: c, valueToY: (d) => i.margin.top + i.chartHeight - d / c * i.chartHeight };
  }
  setupMouseInteraction(e, t, i, s, n, r, o) {
    const a = this.stateFor(o), c = a.canvasMouseMove, h = a.canvasMouseLeave, d = a.canvasClick;
    c && e.removeEventListener("mousemove", c), h && e.removeEventListener("mouseleave", h), d && e.removeEventListener("click", d);
    const u = (_) => {
      let v = 0, y = Number.POSITIVE_INFINITY;
      for (let C = 0; C < t.length; C++) {
        const D = Math.abs(i(t[C].sampleEnd) - _);
        D < y && (y = D, v = C);
      }
      return v;
    }, f = (_) => {
      const v = e.getBoundingClientRect(), y = _.clientX - v.left, C = _.clientY - v.top, D = u(y);
      D !== s && (s = D, a.hoveredSampleIndex = D), a.isMouseOverChart = true, x.requestAnimationFrame(() => r(s, n, true, y, C));
    }, p = () => {
      a.isMouseOverChart = false, x.requestAnimationFrame(() => r(s, n, false));
    }, m = (_) => {
      const v = e.getBoundingClientRect(), y = _.clientX - v.left, C = _.clientY - v.top, D = u(y);
      n = D, a.selectedSampleIndex = D, x.requestAnimationFrame(() => r(s, n, true, y, C));
    };
    e.addEventListener("mousemove", f), e.addEventListener("mouseleave", p), e.addEventListener("click", m), e.style.cursor = "pointer", a.canvasMouseMove = f, a.canvasMouseLeave = p, a.canvasClick = m;
  }
  setupTimeRangeControls(e, t) {
    const i = this.stateFor(t), s = x.document.getElementById(`time-range-controls-${e}`);
    if (!s) return;
    const n = () => i.selectedTimeRangeMs, r = (o) => {
      i.selectedTimeRangeMs = o;
    };
    if (s.children.length === 0) for (const o of U.TIME_RANGES) {
      const a = x.document.createElement("button");
      a.textContent = o.label, a.setAttribute("data-range", String(o.ms)), this.styleRangeButton(a, n() === o.ms), a.addEventListener("click", () => {
        r(o.ms), this.render(t);
      }), s.appendChild(a);
    }
    else Array.from(s.querySelectorAll("button")).forEach((a, c) => {
      const h = n() === U.TIME_RANGES[c].ms;
      this.styleRangeButton(a, h);
    });
  }
  setupResizeHandler(e) {
    for (const i of this.metricState.values()) i.resizeHandler && (x.removeEventListener("resize", i.resizeHandler), i.resizeHandler = null);
    const t = () => {
      this.render(e);
    };
    x.addEventListener("resize", t, { passive: true }), this.stateFor(e).resizeHandler = t;
  }
  styleRangeButton(e, t) {
    e.classList.add("process-history-range-button"), e.classList.toggle("active", t);
  }
  renderEmptyState(e, t) {
    const i = qe.setupCanvas(e, t), s = e.getContext("2d");
    s && (s.setTransform(i.dpr, 0, 0, i.dpr, 0, 0), s.fillStyle = U.theme.backgroundColor, s.fillRect(0, 0, i.cssWidth, i.cssHeight), s.fillStyle = U.theme.emptyStateTextColor, s.font = "13px sans-serif", s.fillText("No data available", i.margin.left + 8, i.margin.top + 18));
  }
  updateData(e) {
    this.fullHistoryData = e;
  }
  filterDataByOrigin(e) {
    const t = e.samples.map((i) => ({ ...i, rows: i.rows.filter((s) => {
      const n = s.isRemote === true;
      return this.originFilter === "remote" ? n : !n;
    }) })).filter((i) => i.rows.length > 0);
    return { samples: t, seriesMem: Ni.computeTopSeries(t, "memory", 20, e.groupBy), seriesCpu: Ni.computeTopSeries(t, "cpu", 20, e.groupBy), seriesNet: Ni.computeTopSeries(t, "network", 20, e.groupBy), groupBy: e.groupBy };
  }
}, xu = /\s--inspect(?:-brk|port)?=(?<port>\d+)?/, L5 = /\s--inspect-port=(?<port>\d+)/, R5 = class {
  getHeight(e) {
    return 22;
  }
  getTemplateId(e) {
    return Jt(e) ? "process" : mr(e) ? "machine" : pr(e) ? "error" : Ba(e) ? "header" : "";
  }
};
function M5(e) {
  return e === void 0 ? "" : e >= 100 ? e.toFixed(0) : e.toFixed(1);
}
var P5 = class {
  constructor(e) {
    this.flattenGroupRoots = e;
  }
  hasChildren(e) {
    if (pr(e)) return false;
    if (mr(e) && this.flattenGroupRoots && Jt(e.rootProcess)) {
      const t = e.rootProcess;
      if (t.isGroupRoot) return !!t.children?.length;
    }
    return Jt(e) ? !!e.children?.length : true;
  }
  getChildren(e) {
    if (Jt(e)) return e.children ? e.children : [];
    if (pr(e)) return [];
    if (Ba(e)) return e.processRoots.length > 1 ? e.processRoots : [e.processRoots[0].rootProcess];
    if (mr(e)) {
      if (this.flattenGroupRoots && Jt(e.rootProcess)) {
        const t = e.rootProcess;
        if (t.isGroupRoot) return t.children ?? [];
      }
      return [e.rootProcess];
    }
    return [e.processes];
  }
}, O5 = class {
  constructor() {
    this.templateId = "header";
  }
  renderTemplate(e) {
    const t = Z(e, ie(".row")), i = Z(t, ie(".nameLabel")), s = Z(t, ie(".cpu")), n = Z(t, ie(".memory")), r = Z(t, ie(".network")), o = Z(t, ie(".remoteIcon"));
    o.style.display = "flex", o.style.alignItems = "center", o.style.justifyContent = "center", o.style.width = "16px", o.style.paddingRight = "4px";
    const a = Z(t, ie(".pid"));
    return { name: i, CPU: s, memory: n, network: r, PID: a, remoteIcon: o };
  }
  renderElement(e, t, i, s) {
    i.name.textContent = W(164, null), i.CPU.textContent = W(165, null), i.PID.textContent = W(166, null), i.memory.textContent = W(167, null), i.network.textContent = W(168, null);
  }
  disposeTemplate(e) {
  }
}, F5 = class {
  constructor() {
    this.templateId = "machine";
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null), i = Z(e, ie(".row"));
    return t.name = Z(i, ie(".nameLabel")), t;
  }
  renderElement(e, t, i, s) {
    i.name.textContent = e.element.name;
  }
  disposeTemplate(e) {
  }
}, B5 = class {
  constructor() {
    this.templateId = "error";
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null), i = Z(e, ie(".row"));
    return t.name = Z(i, ie(".nameLabel")), t;
  }
  renderElement(e, t, i, s) {
    i.name.textContent = e.element.errorMessage;
  }
  disposeTemplate(e) {
  }
}, H5 = class {
  constructor(e, t, i, s) {
    this.platform = e, this.totalMem = t, this.mapPidToName = i, this.liveNetworkByPid = s, this.templateId = "process";
  }
  renderTemplate(e) {
    const t = Z(e, ie(".row")), i = Z(t, ie(".nameLabel")), s = Z(t, ie(".cpu")), n = Z(t, ie(".memory")), r = Z(t, ie(".network")), o = Z(t, ie(".remoteIcon"));
    o.style.display = "flex", o.style.alignItems = "center", o.style.justifyContent = "center", o.style.width = "16px", o.style.paddingRight = "4px";
    const a = Z(t, ie(".pid"));
    return { name: i, CPU: s, PID: a, memory: n, network: r, remoteIcon: o };
  }
  renderElement(e, t, i, s) {
    const { element: n } = e, r = n.pid.toFixed(0);
    let o = n.name;
    this.mapPidToName.has(n.pid) && (o = this.mapPidToName.get(n.pid)), i.name.textContent = o, i.name.title = n.cmd, i.CPU.textContent = n.load.toFixed(0), i.PID.textContent = r, i.PID.parentElement.id = `pid-${r}`;
    let a = "";
    const c = n.remoteMem;
    n.isRemote || n.mem === 0 ? (typeof c == "number" && c > 0 ? a = `${(c / Ta.MB).toFixed(0)}` : a = "?", i.memory.style.fontStyle = "italic") : (a = ((this.platform === "win32" ? n.mem : this.totalMem * (n.mem / 100)) / Ta.MB).toFixed(0), i.memory.style.fontStyle = "normal"), i.memory.textContent = a, i.network.textContent = M5(this.liveNetworkByPid.get(n.pid)), n.isRemote ? (i.remoteIcon.className = "remoteIcon codicon codicon-globe", i.remoteIcon.title = "Remote Process") : (i.remoteIcon.className = "remoteIcon", i.remoteIcon.title = "");
  }
  disposeTemplate(e) {
  }
};
function mr(e) {
  return !!e.name && !!e.rootProcess;
}
function Ba(e) {
  return !!e.processRoots;
}
function Jt(e) {
  return !!e.pid;
}
var Ha = class ln {
  constructor(t, i) {
    this.data = i, this.mapPidToName = /* @__PURE__ */ new Map(), this.liveNetworkByPid = /* @__PURE__ */ new Map(), this.processNodeIdByItem = /* @__PURE__ */ new WeakMap(), this.nextProcessNodeId = 0, this.historyChartRenderer = null, this.historyContent = null, this.networkDirection = "total", this.mainProcessService = new a5(t), this.nativeHostService = new Ia(t, this.mainProcessService), this.isWorkspaceGroupsMode = i.mode === "workspaceGroups", this.applyStyles(i.styles), this.setEventHandlers(i);
    const s = x.document.getElementById("tab-live"), n = x.document.getElementById("tab-history-mem"), r = x.document.getElementById("tab-history-cpu"), o = x.document.getElementById("tab-history-net");
    s?.addEventListener("click", () => this.showLive()), n?.addEventListener("click", () => {
      this.showHistoryTab("memory");
    }), r?.addEventListener("click", () => {
      this.showHistoryTab("cpu");
    }), o?.addEventListener("click", () => {
      this.showHistoryTab("network");
    }), this.initializeHistorySnapshotControls(), this.setActiveTab(s, [n, r, o]), xe.on("vscode:pidToNameResponse", (a, c) => {
      this.mapPidToName.clear();
      for (const [h, d] of c) this.mapPidToName.set(h, d);
    }), this.isWorkspaceGroupsMode ? xe.on("vscode:listProcessesForWorkspacesResponse", async (a, c) => {
      try {
        const h = await this.toWorkspaceGroupMachineProcessInformation(c.groups);
        await this.updateProcessTree(h);
      } catch {
        const d = c.groups.map((u) => ({ id: u.workspaceId, name: u.displayName, rootProcess: u.rootProcess }));
        await this.updateProcessTree(d);
      } finally {
        this.requestProcessList(0);
      }
    }) : xe.on("vscode:listProcessesResponse", async (a, c) => {
      c.forEach((h, d) => {
        Jt(h.rootProcess) && (h.rootProcess.name = d === 0 ? `${this.data.applicationName} main` : "remote agent");
      }), await this.updateProcessTree(c), this.requestProcessList(0);
    }), this.lastRequestTime = Date.now(), this.requestCurrentProcessList();
  }
  async updateProcessTree(t) {
    if (!this.tree) {
      await this.createProcessTree(t);
      return;
    }
    this.tree.setInput({ processes: { processRoots: t } }), this.tree.layout(x.innerHeight, x.innerWidth);
  }
  requestCurrentProcessList() {
    if (xe.send("vscode:pidToNameRequest"), this.refreshLiveNetwork(), this.isWorkspaceGroupsMode) {
      xe.send("vscode:listProcessesForWorkspaces", this.data.workspaceContext);
      return;
    }
    xe.send("vscode:listProcesses");
  }
  async refreshLiveNetwork() {
    try {
      const i = await this.mainProcessService.getChannel("cursorProclist").call("getLiveNetworkBytesPerSec");
      this.liveNetworkByPid.clear();
      for (const [s, n] of i) this.liveNetworkByPid.set(s, n);
    } catch {
    }
  }
  getProcessNodeId(t) {
    if (!this.isWorkspaceGroupsMode) return t.pid.toString();
    let i = this.processNodeIdByItem.get(t);
    return i || (i = `${t.pid}:${this.nextProcessNodeId++}`, this.processNodeIdByItem.set(t, i)), i;
  }
  async getTotalMemBytes() {
    if (this.totalMemBytes !== void 0) return this.totalMemBytes;
    const { totalmem: t } = await this.nativeHostService.getOSStatistics();
    return this.totalMemBytes = t, t;
  }
  async toWorkspaceGroupMachineProcessInformation(t) {
    const i = await this.getTotalMemBytes();
    return t.map((s) => {
      const n = this.summarizeGroup(s.rootProcess, i), r = n.processCount === 1 ? "process" : "processes", o = `${s.displayName}  |  CPU ${n.cpu.toFixed(0)}  |  Mem ${n.memoryMb.toFixed(0)} MB  |  ${n.processCount} ${r}`;
      return { id: s.workspaceId, name: o, rootProcess: s.rootProcess };
    });
  }
  summarizeGroup(t, i) {
    let s = 0, n = 0, r = 0;
    const o = /* @__PURE__ */ new Set();
    for (const a of t.children ?? []) {
      const c = this.summarizeProcessTree(a, i, o);
      s += c.cpu, n += c.memoryBytes, r += c.processCount;
    }
    return { cpu: s, memoryMb: n / Ta.MB, processCount: r };
  }
  summarizeProcessTree(t, i, s) {
    if (s.has(t)) return { cpu: 0, memoryBytes: 0, processCount: 0 };
    s.add(t);
    const n = t;
    let r = n.load, o = this.getProcessMemoryBytes(n, i), a = n.isGroupRoot ? 0 : 1;
    for (const c of n.children ?? []) {
      const h = this.summarizeProcessTree(c, i, s);
      r += h.cpu, o += h.memoryBytes, a += h.processCount;
    }
    return { cpu: r, memoryBytes: o, processCount: a };
  }
  getProcessMemoryBytes(t, i) {
    return t.isRemote || t.mem === 0 ? t.remoteMem ?? 0 : this.data.platform === "win32" ? t.mem : i * (t.mem / 100);
  }
  getHistoryParseOptions() {
    const t = { networkDirection: this.networkDirection };
    return this.isWorkspaceGroupsMode && (t.groupByWorkspace = true, t.workspaceEntries = this.data.workspaceContext?.workspaceEntries), t;
  }
  historyTabButtons() {
    return ["tab-live", "tab-history-mem", "tab-history-cpu", "tab-history-net"].map((i) => x.document.getElementById(i)).filter((i) => i !== null);
  }
  showLive() {
    const t = x.document.getElementById("process-list");
    if (!t) return;
    t.style.display = "";
    for (const s of Object.values(ln.HISTORY_SUFFIX_BY_METRIC)) {
      const n = x.document.getElementById(`history-${s}`);
      n && (n.style.display = "none");
    }
    const i = x.document.getElementById("tab-live");
    this.setActiveTab(i, this.historyTabButtons().filter((s) => s.id !== "tab-live"));
  }
  async showHistoryTab(t) {
    const i = x.document.getElementById("process-list"), s = ln.HISTORY_SUFFIX_BY_METRIC[t], n = x.document.getElementById(`history-${s}`), r = x.document.getElementById(`history-${s}-legend`);
    if (!n || !i) return;
    i.style.display = "none";
    for (const a of Object.values(ln.HISTORY_SUFFIX_BY_METRIC)) {
      const c = x.document.getElementById(`history-${a}`);
      c && (c.style.display = a === s ? "" : "none");
    }
    const o = x.document.getElementById(ln.HISTORY_TAB_ID_BY_METRIC[t]);
    this.setActiveTab(o, this.historyTabButtons().filter((a) => a.id !== o?.id));
    try {
      if (!this.historyChartRenderer) {
        const c = await this.mainProcessService.getChannel("cursorProclist").call("readProcessMonitorData");
        if (!c || c.length === 0) {
          r && (r.textContent = `No history data available yet.
Waiting for samples to be collected...`);
          return;
        }
        const h = Ni.parse(c, this.getHistoryParseOptions());
        if (!h) {
          r && (r.textContent = "Failed to parse history data.");
          return;
        }
        this.historyChartRenderer = new Tu(h), this.historyContent = c, this.addOriginFilterDropdown(h);
      }
      this.historyChartRenderer.render(t);
    } catch (a) {
      r && (r.textContent = `Failed to load history: ${String(a)}`);
    }
  }
  initializeHistorySnapshotControls() {
    const t = (i, s) => {
      const n = `analysis-bar-${i}`, r = x.document.getElementById(n);
      if (!r) return;
      r.style.display = "flex";
      const o = x.document.createElement("div");
      o.className = "process-history-right-controls";
      const a = x.document.createElement("input");
      a.type = "file", a.accept = ".log,.jsonl,text/plain,*/*", a.style.display = "none", o.appendChild(a);
      const c = x.document.createElement("button");
      c.className = "process-history-control-button codicon codicon-save", c.title = "Download snapshot", c.setAttribute("aria-label", "Download snapshot"), c.addEventListener("click", () => {
        this.downloadHistorySnapshot();
      }), o.appendChild(c);
      const h = x.document.createElement("button");
      h.className = "process-history-control-button codicon codicon-cloud-upload", h.title = "Upload snapshot", h.setAttribute("aria-label", "Upload snapshot"), h.addEventListener("click", () => {
        a.click();
      }), o.appendChild(h), r.appendChild(o), a.addEventListener("change", () => {
        const d = a.files, u = d && d.length > 0 ? d[0] : void 0;
        u && (this.uploadHistorySnapshotFromFile(u, s), a.value = "");
      }), i === "net" && this.addNetworkDirectionDropdown(r);
    };
    t("mem", "memory"), t("cpu", "cpu"), t("net", "network");
  }
  addNetworkDirectionDropdown(t) {
    if (t.querySelector(".process-history-network-direction")) return;
    const i = x.document.createElement("div");
    i.className = "process-history-left-controls";
    const s = x.document.createElement("select");
    s.className = "process-history-select process-history-network-direction";
    const n = [{ value: "total", label: "Total (sent + received)" }, { value: "tx", label: "Sent" }, { value: "rx", label: "Received" }];
    for (const r of n) {
      const o = x.document.createElement("option");
      o.value = r.value, o.textContent = r.label, r.value === this.networkDirection && (o.selected = true), s.appendChild(o);
    }
    s.addEventListener("change", () => {
      this.networkDirection = s.value, this.reparseNetworkHistory();
    }), i.appendChild(s), t.insertBefore(i, t.firstChild);
  }
  reparseNetworkHistory() {
    if (!this.historyChartRenderer || !this.historyContent) return;
    const t = Ni.parse(this.historyContent, this.getHistoryParseOptions());
    t && (this.historyChartRenderer.updateData(t), this.historyChartRenderer.render("network"));
  }
  addOriginFilterDropdown(t) {
    t.samples.some((s) => s.rows.some((n) => n.isRemote === true)) && ["analysis-bar-mem", "analysis-bar-cpu", "analysis-bar-net"].forEach((s) => {
      const n = x.document.getElementById(s);
      if (!n || n.querySelector(".process-history-origin-filter")) return;
      const r = x.document.createElement("div");
      r.className = "process-history-left-controls";
      const o = x.document.createElement("select");
      o.className = "process-history-select process-history-origin-filter";
      const a = x.document.createElement("option");
      a.value = "local", a.textContent = "Local", o.appendChild(a);
      const c = x.document.createElement("option");
      c.value = "remote", c.textContent = "Remote", o.appendChild(c), o.addEventListener("change", () => {
        if (this.historyChartRenderer) {
          const h = s.includes("mem") ? "memory" : s.includes("net") ? "network" : "cpu";
          this.historyChartRenderer.setOriginFilter(o.value), this.historyChartRenderer.render(h);
        }
      }), r.appendChild(o), n.insertBefore(r, n.firstChild);
    });
  }
  async downloadHistorySnapshot() {
    try {
      let t = this.historyContent;
      if (!t || t.length === 0) {
        if (t = await this.mainProcessService.getChannel("cursorProclist").call("readProcessMonitorData"), !t || t.length === 0) return;
        this.historyContent = t;
      }
      const i = new Blob([t], { type: "text/plain;charset=utf-8" }), s = x.URL.createObjectURL(i), n = x.document.createElement("a"), r = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
      n.href = s, n.download = `cursor-process-history-${r}.jsonl`, x.document.body.appendChild(n), n.click(), x.document.body.removeChild(n), x.URL.revokeObjectURL(s);
    } catch {
    }
  }
  uploadHistorySnapshotFromFile(t, i) {
    const s = new FileReader();
    s.onload = () => {
      const n = s.result, r = typeof n == "string" ? n : "";
      if (!r) return;
      const o = Ni.parse(r, this.getHistoryParseOptions());
      if (!o) {
        const a = i === "memory" ? "history-mem-legend" : "history-cpu-legend", c = x.document.getElementById(a);
        c && (c.textContent = "Failed to parse uploaded history snapshot.");
        return;
      }
      this.historyChartRenderer ? this.historyChartRenderer.updateData(o) : this.historyChartRenderer = new Tu(o), this.historyContent = r, this.addOriginFilterDropdown(o), this.historyChartRenderer.render(i);
    }, s.readAsText(t);
  }
  setActiveTab(t, i) {
    t && t.classList.add("active");
    const s = Array.isArray(i) ? i : [i];
    for (const n of s) n && n.classList.remove("active");
  }
  setEventHandlers(t) {
    x.document.onkeydown = (i) => {
      const s = t.platform === "darwin" ? i.metaKey : i.ctrlKey;
      s && i.keyCode === 87 && (i.stopPropagation(), i.preventDefault(), xe.send("vscode:closeProcessExplorer")), s && i.keyCode === 187 && E5(x), s && i.keyCode === 189 && k5(x);
    };
  }
  async createProcessTree(t) {
    const i = x.document.getElementById("process-list");
    if (!i) return;
    const { totalmem: s } = await this.nativeHostService.getOSStatistics(), n = [new H5(this.data.platform, s, this.mapPidToName, this.liveNetworkByPid), new O5(), new F5(), new B5()];
    this.tree = new B4("processExplorer", i, new R5(), n, new P5(this.isWorkspaceGroupsMode), { identityProvider: { getId: (r) => Jt(r) ? this.getProcessNodeId(r) : pr(r) ? r.hostName : Ba(r) ? "processes" : mr(r) ? r.id ?? r.name : "header" } }), this.tree.setInput({ processes: { processRoots: t } }), this.tree.layout(x.innerHeight, x.innerWidth), this.tree.onKeyDown((r) => {
      const o = new Oe(r);
      if (o.keyCode === nc.KeyE && o.altKey) {
        const a = this.getSelectedPids();
        Promise.all(a.map((c) => this.nativeHostService.killProcess(c, "SIGTERM"))).then(() => this.tree?.refresh());
      }
    }), this.tree.onContextMenu((r) => {
      Jt(r.element) && this.showContextMenu(r.element, true);
    }), i.style.height = `${x.innerHeight}px`, x.addEventListener("resize", () => {
      i.style.height = `${x.innerHeight}px`, this.tree?.layout(x.innerHeight, x.innerWidth);
    });
  }
  isDebuggable(t) {
    const i = xu.exec(t);
    return i && i.groups.port !== "0" || t.indexOf("node ") >= 0 || t.indexOf("node.exe") >= 0;
  }
  isBgWindow(t) {
    const i = this.mapPidToName.get(t.pid);
    return i ? i.startsWith("bg-window (") : false;
  }
  isRemoteAgent(t) {
    return t.name === "remote agent";
  }
  openDevToolsForBgWindow(t) {
    xe.send("vscode:workbenchCommand", { id: "workbench.action.openDevToolsForBgWindow", from: "processExplorer", args: [{ pid: t.pid }] });
  }
  attachTo(t) {
    const i = { type: "node", request: "attach", name: `process ${t.pid}` };
    let s = xu.exec(t.cmd);
    s ? i.port = Number(s.groups.port) : i.processId = String(t.pid), s = L5.exec(t.cmd), s && (i.port = Number(s.groups.port)), xe.send("vscode:workbenchCommand", { id: "debug.startFromConfig", from: "processExplorer", args: [i] });
  }
  applyStyles(t) {
    const i = Ns(), s = [];
    t.listFocusBackground && (s.push(`.monaco-list:focus .monaco-list-row.focused { background-color: ${t.listFocusBackground}; }`), s.push(`.monaco-list:focus .monaco-list-row.focused:hover { background-color: ${t.listFocusBackground}; }`)), t.listFocusForeground && s.push(`.monaco-list:focus .monaco-list-row.focused { color: ${t.listFocusForeground}; }`), t.listActiveSelectionBackground && (s.push(`.monaco-list:focus .monaco-list-row.selected { background-color: ${t.listActiveSelectionBackground}; }`), s.push(`.monaco-list:focus .monaco-list-row.selected:hover { background-color: ${t.listActiveSelectionBackground}; }`)), t.listActiveSelectionForeground && s.push(`.monaco-list:focus .monaco-list-row.selected { color: ${t.listActiveSelectionForeground}; }`), t.listHoverBackground && s.push(`.monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${t.listHoverBackground}; }`), t.listHoverForeground && s.push(`.monaco-list-row:hover:not(.selected):not(.focused) { color: ${t.listHoverForeground}; }`), t.listFocusOutline && s.push(`.monaco-list:focus .monaco-list-row.focused { outline: 1px solid ${t.listFocusOutline}; outline-offset: -1px; }`), t.listHoverOutline && s.push(`.monaco-list-row:hover { outline: 1px dashed ${t.listHoverOutline}; outline-offset: -1px; }`), t.scrollbarShadowColor && s.push(`
				.monaco-scrollable-element > .shadow.top {
					box-shadow: ${t.scrollbarShadowColor} 0 6px 6px -6px inset;
				}

				.monaco-scrollable-element > .shadow.left {
					box-shadow: ${t.scrollbarShadowColor} 6px 0 6px -6px inset;
				}

				.monaco-scrollable-element > .shadow.top.left {
					box-shadow: ${t.scrollbarShadowColor} 6px 6px 6px -6px inset;
				}
			`), t.scrollbarSliderBackgroundColor && s.push(`
				.monaco-scrollable-element > .scrollbar > .slider {
					background: ${t.scrollbarSliderBackgroundColor};
				}
			`), t.scrollbarSliderHoverBackgroundColor && s.push(`
				.monaco-scrollable-element > .scrollbar > .slider:hover {
					background: ${t.scrollbarSliderHoverBackgroundColor};
				}
			`), t.scrollbarSliderActiveBackgroundColor && s.push(`
				.monaco-scrollable-element > .scrollbar > .slider.active {
					background: ${t.scrollbarSliderActiveBackgroundColor};
				}
			`), i.textContent = s.join(`
`);
    const n = t.backgroundColor ?? "#1e1e1e", r = t.color ?? "#cccccc", o = t.listHoverBackground ?? "#2a2a2a", a = t.listHoverForeground ?? r, c = t.listActiveSelectionBackground ?? "#4C72B0", h = t.listActiveSelectionForeground ?? r, d = t.listFocusOutline ?? t.listHoverOutline ?? t.scrollbarShadowColor ?? "#3a3a3a", u = t.listFocusBackground ?? n, f = t.listFocusForeground ?? r, p = t.listFocusOutline ?? d, m = t.listHoverBackground ?? o, _ = t.listHoverForeground ?? r, v = (y, C) => {
      x.document.body.style.setProperty(y, C);
    };
    x.document.body.style.backgroundColor = n, x.document.body.style.color = r, v("--process-explorer-background", n), v("--process-explorer-foreground", r), v("--process-explorer-tab-background", n), v("--process-explorer-tab-foreground", r), v("--process-explorer-border", d), v("--process-explorer-hover-background", o), v("--process-explorer-hover-foreground", a), v("--process-explorer-active-background", c), v("--process-explorer-active-foreground", h), v("--process-explorer-active-border", c), v("--process-explorer-control-background", u), v("--process-explorer-control-foreground", f), v("--process-explorer-control-border", p), v("--process-explorer-control-hover-background", m), v("--process-explorer-range-button-background", u), v("--process-explorer-range-button-foreground", f), v("--process-explorer-range-button-border", p), v("--process-explorer-range-button-hover-background", m), v("--process-explorer-range-button-active-background", c), v("--process-explorer-range-button-active-foreground", h), v("--process-explorer-range-button-active-border", c), U.applyTheme({ backgroundColor: n, gridColor: o, axisColor: d, textColor: r, textColorMuted: _, hoverLineColor: d, selectionLineColor: c, tooltipBackground: n, tooltipBorder: c, tooltipForeground: r, gapFillColor: o, gapBorderColor: d, gapTextColor: r, gapSubtextColor: _, emptyStateTextColor: _, legendHeaderBorder: d, legendSecondaryForeground: r, legendTertiaryForeground: _, legendHoverBackground: o, legendPidForeground: _, legendExtensionForeground: _, legendValueForeground: r, legendInactiveSwatchBorder: d, legendActiveSwatchBorder: d, legendUnmappedSwatchBackground: _, legendUnmappedSwatchBorder: d });
  }
  showContextMenu(t, i) {
    const s = [], n = Number(t.pid);
    i && (s.push({ accelerator: "Alt+E", label: W(169, null), click: () => {
      this.nativeHostService.killProcess(n, "SIGTERM");
    } }), s.push({ label: W(170, null), click: () => {
      this.nativeHostService.killProcess(n, "SIGKILL");
    } }), s.push({ type: "separator" })), s.push({ label: W(171, null), click: () => {
      const r = this.getSelectedPids();
      r?.includes(n) || (r.length = 0, r.push(n));
      const o = r?.map((a) => x.document.getElementById(`pid-${a}`)).filter((a) => !!a);
      if (o) {
        const a = o.map((c) => c.innerText).filter((c) => !!c);
        this.nativeHostService.writeClipboardText(a.join(`
`));
      }
    } }), s.push({ label: W(172, null), click: () => {
      const r = x.document.getElementById("process-list");
      r && this.nativeHostService.writeClipboardText(r.innerText);
    } }), t && i && this.isBgWindow(t) && (s.push({ type: "separator" }), s.push({ label: W(173, null), click: () => {
      this.openDevToolsForBgWindow(t);
    } })), t && i && !this.isBgWindow(t) && !this.isRemoteAgent(t) && this.isDebuggable(t.cmd) && (s.some((r) => r.label === W(174, null)) || (s.push({ type: "separator" }), s.push({ label: W(175, null), click: () => {
      this.attachTo(t);
    } }))), W4(s);
  }
  requestProcessList(t) {
    setTimeout(() => {
      const i = Date.now(), s = t + i - this.lastRequestTime;
      this.lastRequestTime = i, s > 1e3 ? this.requestCurrentProcessList() : this.requestProcessList(s);
    }, 200);
  }
  getSelectedPids() {
    return this.tree?.getSelection()?.map((t) => {
      if (!(!t || !("pid" in t))) return t.pid;
    }).filter((t) => !!t);
  }
};
Ha.HISTORY_SUFFIX_BY_METRIC = { memory: "mem", cpu: "cpu", network: "net" }, Ha.HISTORY_TAB_ID_BY_METRIC = { memory: "tab-history-mem", cpu: "tab-history-cpu", network: "tab-history-net" };
var U5 = Ha;
function $5() {
  const e = Ns();
  e.id = "codiconStyles";
  const t = y5(void 0);
  function i() {
    e.textContent = t.getCSS();
  }
  const s = new Fc(i, 0);
  t.onDidChange(() => s.schedule()), s.schedule();
}
function z5(e) {
  const t = e.data.platform === "win32" ? "windows" : e.data.platform === "linux" ? "linux" : "mac";
  x.document.body.classList.add(t), $5(), Ma(e.data.zoomLevel, x), new U5(e.windowId, e.data);
}
export { z5 as startup };
/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
