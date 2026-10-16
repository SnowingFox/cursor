/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bcd0958c-c1f5-509a-b827-03adb4edcddc");
  } catch (e2) {
  }
})();
var oa = Object.create, dr = Object.defineProperty, aa = Object.getOwnPropertyDescriptor, Vi = Object.getOwnPropertyNames, la = Object.getPrototypeOf, ca = Object.prototype.hasOwnProperty, ha = (e, t) => function() {
  return e && (t = (0, e[Vi(e)[0]])(e = 0)), t;
}, ua = (e, t) => function() {
  return t || (0, e[Vi(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, da = (e, t, i, s) => {
  if (t && typeof t == "object" || typeof t == "function") for (let r of Vi(t)) !ca.call(e, r) && r !== i && dr(e, r, { get: () => t[r], enumerable: !(s = aa(t, r)) || s.enumerable });
  return e;
}, fa = (e, t, i) => (i = e != null ? oa(la(e)) : {}, da(t || !e || !e.__esModule ? dr(i, "default", { value: e, enumerable: true }) : i, e));
function v(e, t, i, s) {
  var r = arguments.length, n = r < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, i) : s, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, s);
  else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (n = (r < 3 ? o(n) : r > 3 ? o(t, i, n) : o(t, i)) || n);
  return r > 3 && n && Object.defineProperty(t, i, n), n;
}
function Be(e, t) {
  return function(i, s) {
    t(i, s, e);
  };
}
var p = ha({ "tslib.es6.js"() {
} }), _a = ua({ "index.js"(e, t) {
  "use strict";
  p();
  function i(n, o) {
    var a = n;
    o.slice(0, -1).forEach(function(c) {
      a = a[c] || {};
    });
    var l = o[o.length - 1];
    return l in a;
  }
  function s(n) {
    return typeof n == "number" || /^0x[0-9a-f]+$/i.test(n) ? true : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n);
  }
  function r(n, o) {
    return o === "constructor" && typeof n[o] == "function" || o === "__proto__";
  }
  t.exports = function(n, o) {
    o || (o = {});
    var a = { bools: {}, strings: {}, unknownFn: null };
    typeof o.unknown == "function" && (a.unknownFn = o.unknown), typeof o.boolean == "boolean" && o.boolean ? a.allBools = true : [].concat(o.boolean).filter(Boolean).forEach(function(T) {
      a.bools[T] = true;
    });
    var l = {};
    function c(T) {
      return l[T].some(function(J) {
        return a.bools[J];
      });
    }
    Object.keys(o.alias || {}).forEach(function(T) {
      l[T] = [].concat(o.alias[T]), l[T].forEach(function(J) {
        l[J] = [T].concat(l[T].filter(function(be) {
          return J !== be;
        }));
      });
    }), [].concat(o.string).filter(Boolean).forEach(function(T) {
      a.strings[T] = true, l[T] && [].concat(l[T]).forEach(function(J) {
        a.strings[J] = true;
      });
    });
    var h = o.default || {}, u = { _: [] };
    function d(T, J) {
      return a.allBools && /^--[^=]+$/.test(J) || a.strings[T] || a.bools[T] || l[T];
    }
    function f(T, J, be) {
      for (var z = T, Ke = 0; Ke < J.length - 1; Ke++) {
        var ye = J[Ke];
        if (r(z, ye)) return;
        z[ye] === void 0 && (z[ye] = {}), (z[ye] === Object.prototype || z[ye] === Number.prototype || z[ye] === String.prototype) && (z[ye] = {}), z[ye] === Array.prototype && (z[ye] = []), z = z[ye];
      }
      var b = J[J.length - 1];
      r(z, b) || ((z === Object.prototype || z === Number.prototype || z === String.prototype) && (z = {}), z === Array.prototype && (z = []), z[b] === void 0 || a.bools[b] || typeof z[b] == "boolean" ? z[b] = be : Array.isArray(z[b]) ? z[b].push(be) : z[b] = [z[b], be]);
    }
    function _(T, J, be) {
      if (!(be && a.unknownFn && !d(T, be) && a.unknownFn(be) === false)) {
        var z = !a.strings[T] && s(J) ? Number(J) : J;
        f(u, T.split("."), z), (l[T] || []).forEach(function(Ke) {
          f(u, Ke.split("."), z);
        });
      }
    }
    Object.keys(a.bools).forEach(function(T) {
      _(T, h[T] === void 0 ? false : h[T]);
    });
    var E = [];
    n.indexOf("--") !== -1 && (E = n.slice(n.indexOf("--") + 1), n = n.slice(0, n.indexOf("--")));
    for (var g = 0; g < n.length; g++) {
      var y = n[g], R, U;
      if (/^--.+=/.test(y)) {
        var lt = y.match(/^--([^=]+)=([\s\S]*)$/);
        R = lt[1];
        var I = lt[2];
        a.bools[R] && (I = I !== "false"), _(R, I, y);
      } else if (/^--no-.+/.test(y)) R = y.match(/^--no-(.+)/)[1], _(R, false, y);
      else if (/^--.+/.test(y)) R = y.match(/^--(.+)/)[1], U = n[g + 1], U !== void 0 && !/^(-|--)[^-]/.test(U) && !a.bools[R] && !a.allBools && (!l[R] || !c(R)) ? (_(R, U, y), g += 1) : /^(true|false)$/.test(U) ? (_(R, U === "true", y), g += 1) : _(R, a.strings[R] ? "" : true, y);
      else if (/^-[^-]+/.test(y)) {
        for (var D = y.slice(1, -1).split(""), B = false, j = 0; j < D.length; j++) {
          if (U = y.slice(j + 2), U === "-") {
            _(D[j], U, y);
            continue;
          }
          if (/[A-Za-z]/.test(D[j]) && U[0] === "=") {
            _(D[j], U.slice(1), y), B = true;
            break;
          }
          if (/[A-Za-z]/.test(D[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(U)) {
            _(D[j], U, y), B = true;
            break;
          }
          if (D[j + 1] && D[j + 1].match(/\W/)) {
            _(D[j], y.slice(j + 2), y), B = true;
            break;
          } else _(D[j], a.strings[D[j]] ? "" : true, y);
        }
        R = y.slice(-1)[0], !B && R !== "-" && (n[g + 1] && !/^(-|--)[^-]/.test(n[g + 1]) && !a.bools[R] && (!l[R] || !c(R)) ? (_(R, n[g + 1], y), g += 1) : n[g + 1] && /^(true|false)$/.test(n[g + 1]) ? (_(R, n[g + 1] === "true", y), g += 1) : _(R, a.strings[R] ? "" : true, y));
      } else if ((!a.unknownFn || a.unknownFn(y) !== false) && u._.push(a.strings._ || !s(y) ? y : Number(y)), o.stopEarly) {
        u._.push.apply(u._, n.slice(g + 1));
        break;
      }
    }
    return Object.keys(h).forEach(function(T) {
      i(u, T.split(".")) || (f(u, T.split("."), h[T]), (l[T] || []).forEach(function(J) {
        f(u, J.split("."), h[T]);
      }));
    }), o["--"] ? u["--"] = E.slice() : E.forEach(function(T) {
      u._.push(T);
    }), u;
  };
} });
p(), p(), p(), p();
var ht = class {
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
p(), p();
var pa = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        throw e.stack ? ut.isErrorNoTelemetry(e) ? new ut(e.message + `

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
}, ma = new pa();
function di(e) {
  ga(e) || ma.onUnexpectedError(e);
}
var Ki = "Canceled";
function ga(e) {
  return e instanceof $e ? true : e instanceof Error && e.name === Ki && e.message === Ki;
}
var $e = class extends Error {
  constructor() {
    if (super(Ki), this.name = this.message, Ea && typeof console < "u" && ba()) {
      const e = new Error().stack ?? "";
      ya.some((t) => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
    }
  }
};
function va(e) {
  return e ? new Error(`Illegal state: ${e}`) : new Error("Illegal state");
}
var ut = class ir extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof ir) return t;
    const i = new ir();
    return i.message = t.message, i.stack = t.stack, i;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}, ya = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], wa = 5e3, fr = 0;
function ba() {
  const e = Date.now();
  return e < fr ? false : (fr = e + wa, true);
}
var Ea = false;
p(), p(), p();
function Sa(e, t, i = 0, s = e.length) {
  let r = i, n = s;
  for (; r < n; ) {
    const o = Math.floor((r + n) / 2);
    t(e[o]) ? r = o + 1 : n = o;
  }
  return r - 1;
}
var ka = class Bo {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (Bo.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const s of this._array) if (this._prevFindLastPredicate(s) && !t(s)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = t;
    }
    const i = Sa(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = i + 1, i === -1 ? void 0 : this._array[i];
  }
};
ka.assertInvariants = false;
function xa(e) {
  return e.filter((t) => !!t);
}
function _r(e, t) {
  let i;
  if (typeof t == "number") {
    let s = t;
    i = () => {
      const r = Math.sin(s++) * 179426549;
      return r - Math.floor(r);
    };
  } else i = Math.random;
  for (let s = e.length - 1; s > 0; s -= 1) {
    const r = Math.floor(i() * (s + 1)), n = e[s];
    e[s] = e[r], e[r] = n;
  }
}
function La(e) {
  return e[Math.floor(Math.random() * e.length)];
}
var ji;
((e) => {
  function t(n) {
    return n < 0;
  }
  e.isLessThan = t;
  function i(n) {
    return n <= 0;
  }
  e.isLessThanOrEqual = i;
  function s(n) {
    return n > 0;
  }
  e.isGreaterThan = s;
  function r(n) {
    return n === 0;
  }
  e.isNeitherLessOrGreaterThan = r, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(ji || (ji = {}));
function Ia(e, t) {
  return (i, s) => t(e(i), e(s));
}
var Da = (e, t) => e - t, pr = class sr {
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
    return new sr((i) => this.iterate((s) => t(s) ? i(s) : true));
  }
  map(t) {
    return new sr((i) => this.iterate((s) => i(t(s))));
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
    return this.iterate((r) => ((s || ji.isGreaterThan(t(r, i))) && (s = false, i = r), true)), i;
  }
};
pr.empty = new pr((e) => {
}), p();
var mr, gr;
function Ra(e, t) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const s of e) {
    const r = t(s);
    let n = i[r];
    n || (n = i[r] = []), n.push(s);
  }
  return i;
}
var Lu = class {
  constructor(e, t) {
    this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[mr] = "SetWithKey";
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
  [(gr = Symbol.iterator, mr = Symbol.toStringTag, gr)]() {
    return this.values();
  }
};
p();
var vr, yr, wr, Ta = class {
  constructor(e, t) {
    this.uri = e, this.value = t;
  }
};
function Aa(e) {
  return Array.isArray(e);
}
var br = class ri {
  constructor(t, i) {
    if (this[vr] = "ResourceMap", t instanceof ri) this.map = new Map(t.map), this.toKey = i ?? ri.defaultToKey;
    else if (Aa(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = i ?? ri.defaultToKey;
      for (const [s, r] of t) this.set(s, r);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? ri.defaultToKey;
  }
  set(t, i) {
    return this.map.set(this.toKey(t), new Ta(t, i)), this;
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
  *[(vr = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map) yield [t.uri, t.value];
  }
};
br.defaultToKey = (e) => e.toString();
var Xi = br, Iu = class {
  constructor(e, t) {
    this[yr] = "ResourceSet", !e || typeof e == "function" ? this._map = new Xi(e) : (this._map = new Xi(t), e.forEach(this.add, this));
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
  [(yr = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
}, Pa = class {
  constructor() {
    this[wr] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
  [(wr = Symbol.toStringTag, Symbol.iterator)]() {
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
}, Ca = class extends Pa {
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
}, Er = class extends Ca {
  constructor(e, t = 1) {
    super(e, t);
  }
  trim(e) {
    this.trimOld(e);
  }
  set(e, t) {
    return super.set(e, t), this.checkTrim(), this;
  }
}, Ma = class {
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
function Oa(e, t) {
  if (e === t) return true;
  if (e.size !== t.size) return false;
  for (const [i, s] of e) if (!t.has(i) || t.get(i) !== s) return false;
  for (const [i] of t) if (!e.has(i)) return false;
  return true;
}
p();
function Yi(e, t) {
  const i = this;
  let s = false, r;
  return function() {
    if (s) return r;
    if (s = true, t) try {
      r = e.apply(i, arguments);
    } finally {
      t();
    }
    else r = e.apply(i, arguments);
    return r;
  };
}
p(), p(), p();
function Qi(e, t) {
  if (!e) throw new Error(t ? `Assertion failed (${t})` : "Assertion Failed");
}
function dt(e) {
  return typeof e == "string";
}
function Ua(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}
function Sr(e) {
  return typeof e == "number" && !isNaN(e);
}
function Na(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
function Fa(e) {
  return typeof e > "u";
}
function Ba(e) {
  return Fa(e) || e === null;
}
function $a(e, t) {
  if (!e) throw new Error(t ? `Unexpected type, expected '${t}'` : "Unexpected type");
}
function Ji(e) {
  return typeof e == "function";
}
var Zi;
((e) => {
  function t(I) {
    return I && typeof I == "object" && typeof I[Symbol.iterator] == "function";
  }
  e.is = t;
  const i = Object.freeze([]);
  function s() {
    return i;
  }
  e.empty = s;
  function* r(I) {
    yield I;
  }
  e.single = r;
  function n(I) {
    return t(I) ? I : r(I);
  }
  e.wrap = n;
  function o(I) {
    return I || i;
  }
  e.from = o;
  function* a(I) {
    for (let D = I.length - 1; D >= 0; D--) yield I[D];
  }
  e.reverse = a;
  function l(I) {
    return !I || I[Symbol.iterator]().next().done === true;
  }
  e.isEmpty = l;
  function c(I) {
    return I[Symbol.iterator]().next().value;
  }
  e.first = c;
  function h(I, D) {
    let B = 0;
    for (const j of I) if (D(j, B++)) return true;
    return false;
  }
  e.some = h;
  function u(I, D) {
    for (const B of I) if (D(B)) return B;
  }
  e.find = u;
  function* d(I, D) {
    for (const B of I) D(B) && (yield B);
  }
  e.filter = d;
  function* f(I, D) {
    let B = 0;
    for (const j of I) yield D(j, B++);
  }
  e.map = f;
  function* _(I, D) {
    let B = 0;
    for (const j of I) yield* D(j, B++);
  }
  e.flatMap = _;
  function* E(...I) {
    for (const D of I) Na(D) ? yield* D : yield D;
  }
  e.concat = E;
  function g(I, D, B) {
    let j = B;
    for (const T of I) j = D(j, T);
    return j;
  }
  e.reduce = g;
  function y(I) {
    let D = 0;
    for (const B of I) D++;
    return D;
  }
  e.length = y;
  function* R(I, D, B = I.length) {
    for (D < -I.length && (D = 0), D < 0 && (D += I.length), B < 0 ? B += I.length : B > I.length && (B = I.length); D < B; D++) yield I[D];
  }
  e.slice = R;
  function U(I, D = Number.POSITIVE_INFINITY) {
    const B = [];
    if (D === 0) return [B, I];
    const j = I[Symbol.iterator]();
    for (let T = 0; T < D; T++) {
      const J = j.next();
      if (J.done) return [B, e.empty()];
      B.push(J.value);
    }
    return [B, { [Symbol.iterator]() {
      return j;
    } }];
  }
  e.consume = U;
  async function lt(I) {
    const D = [];
    for await (const B of I) D.push(B);
    return Promise.resolve(D);
  }
  e.asyncToArray = lt;
})(Zi || (Zi = {}));
var kr = void 0, es = /* @__PURE__ */ new Set(), Ha = 50;
function xt(e, t) {
  if (He?.onLifecycleMisuse?.(e, t), !kr) return;
  const i = `${t}\0${e.stack ?? ""}`;
  es.has(i) || es.size >= Ha || (es.add(i), kr(e, t));
}
function ts(e) {
  xt(e, "disposable_post_dispose_set");
}
var qa = false, He = null, Wa = class $o {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let i = this.livingDisposables.get(t);
    return i || (i = { parent: null, source: null, isSingleton: false, value: t, idx: $o.idx++ }, this.livingDisposables.set(t, i)), i;
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
    const r = t.parent ? this.getRootParent(this.getDisposableData(t.parent), i) : t;
    return i.set(t, r), r;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, s]) => s.source !== null && !this.getRootParent(s, t).isSingleton).flatMap(([s]) => s);
  }
  computeLeakingDisposables(t = 10, i) {
    let s;
    if (i) s = i;
    else {
      const l = /* @__PURE__ */ new Map(), c = [...this.livingDisposables.values()].filter((u) => u.source !== null && !this.getRootParent(u, l).isSingleton);
      if (c.length === 0) return;
      const h = new Set(c.map((u) => u.value));
      if (s = c.filter((u) => !(u.parent && h.has(u.parent))), s.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!s) return;
    function r(l) {
      function c(u, d) {
        for (; u.length > 0 && d.some((f) => typeof f == "string" ? f === u[0] : u[0].match(f)); ) u.shift();
      }
      const h = l.source.split(`
`).map((u) => u.trim().replace("at ", "")).filter((u) => u !== "");
      return c(h, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), h.reverse();
    }
    const n = new Ma();
    for (const l of s) {
      const c = r(l);
      for (let h = 0; h <= c.length; h++) n.add(c.slice(0, h).join(`
`), l);
    }
    s.sort(Ia((l) => l.idx, Da));
    let o = "", a = 0;
    for (const l of s.slice(0, t)) {
      a++;
      const c = r(l), h = [];
      for (let u = 0; u < c.length; u++) {
        let d = c[u];
        d = `(shared with ${n.get(c.slice(0, u + 1).join(`
`)).size}/${s.length} leaks) at ${d}`;
        const _ = n.get(c.slice(0, u).join(`
`)), E = Ra([..._].map((g) => r(g)[u]), (g) => g);
        delete E[c[u]];
        for (const [g, y] of Object.entries(E)) h.unshift(`    - stacktraces of ${y.length} other leaks continue with ${g}`);
        h.unshift(d);
      }
      o += `


==================== Leaking disposable ${a}/${s.length}: ${l.value.constructor.name} ====================
${h.join(`
`)}
============================================================

`;
    }
    return s.length > t && (o += `


... and ${s.length - t} more leaking disposables

`), { leaks: s, details: o };
  }
};
Wa.idx = 0;
function Ga(e) {
  He = e;
}
if (qa) {
  const e = "__is_disposable_tracked__";
  Ga(new class {
    trackDisposable(t) {
      const i = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        t[e] || console.log(i);
      }, 3e3);
    }
    setParent(t, i) {
      if (t && t !== X.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsDisposed(t) {
      if (t && t !== X.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsSingleton(t) {
    }
  }());
}
function Lt(e) {
  return He?.trackDisposable(e), e;
}
function It(e) {
  He?.markAsDisposed(e);
}
function Dt(e, t) {
  He?.setParent(e, t);
}
function za(e, t) {
  if (He) for (const i of e) He.setParent(i, t);
}
function xr(e) {
  return He?.markAsSingleton(e), e;
}
function Va(e) {
  return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
function je(e) {
  if (Zi.is(e)) {
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
function Ka(...e) {
  const t = _e(() => je(e));
  return za(e, t), t;
}
function _e(e) {
  const t = Lt({ dispose: Yi(() => {
    It(t), e();
  }) });
  return t;
}
var Lr = class rr {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = false, Lt(this);
  }
  dispose() {
    this._isDisposed || (It(this), this._isDisposed = true, this.clear());
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
      je(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(t) {
    if (!t) return t;
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    if (Dt(t, this), this._isDisposed) {
      const i = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      rr.DISABLE_DISPOSED_WARNING || console.warn(i.stack), ts(i);
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
    t && this._toDispose.has(t) && (this._toDispose.delete(t), Dt(t, null));
  }
  transferOut(t) {
    if (this._isDisposed) {
      const i = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      rr.DISABLE_DISPOSED_WARNING || console.warn(i.stack), xt(i, "disposable_use_after_dispose");
    }
    return this.deleteAndLeak(t), t;
  }
};
Lr.DISABLE_DISPOSED_WARNING = false;
var Ee = Lr, X = class {
  constructor() {
    this._store = new Ee(), Lt(this), Dt(this._store, this);
  }
  dispose() {
    It(this), this._store.dispose();
  }
  _register(e) {
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(e);
  }
};
X.None = Object.freeze({ dispose() {
} });
var Xe = class {
  constructor() {
    this._isDisposed = false, Lt(this);
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(e) {
    if (this._isDisposed) {
      if (e) {
        const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
        Ee.DISABLE_DISPOSED_WARNING || console.warn(t.stack), ts(t), e.dispose();
      }
      return;
    }
    e !== this._value && (this._value?.dispose(), e && Dt(e, this), this._value = e);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, It(this), this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    const e = this._value;
    return this._value = void 0, e && Dt(e, null), e;
  }
}, ja = class {
  constructor(e) {
    this._disposable = new Xe(), this._isDisposed = false, this._disposable.value = e;
  }
  get value() {
    return this._disposable.value;
  }
  set value(e) {
    !this._isDisposed && e === this._disposable.value || (this._disposable.value = e);
  }
  dispose() {
    this._isDisposed = true, this._disposable.dispose();
  }
}, Xa = class {
  constructor(e = /* @__PURE__ */ new Map()) {
    this._isDisposed = false, this._store = e, Lt(this);
  }
  dispose() {
    It(this), this._isDisposed = true, this.clearAndDisposeAll();
  }
  clearAndDisposeAll() {
    if (this._store.size) try {
      je(this._store.values());
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
      console.warn(s.stack), ts(s);
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
}, Rt = typeof Buffer < "u", Ya = new ht(() => new Uint8Array(256)), ft, is, Qa = 512 * 1024, Ye = null, ss = false, Ir = false, Ja = 1 / 0, Dr, Za = 1 / 0, Rr;
function Tr(e, t) {
  if (Rr && e.byteLength >= Za) try {
    Rr({ buffer: e, byteLength: e.byteLength, source: t });
  } catch {
  }
}
var de = class ue {
  static alloc(t) {
    let i;
    return Rt ? i = new ue(Buffer.allocUnsafe(t)) : i = new ue(new Uint8Array(t)), Tr(i, "alloc"), i;
  }
  static wrap(t) {
    Rt && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength));
    const i = new ue(t);
    return Tr(i, "wrap"), i;
  }
  static fromString(t, i) {
    return !(i?.dontUseNodeBuffer || false) && Rt ? new ue(Buffer.from(t)) : (ft || (ft = new TextEncoder()), new ue(ft.encode(t)));
  }
  static withPooledString(t, i) {
    if (Rt) return i(ue.fromString(t));
    if (ss) return Ir || (Ir = true, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), i(ue.fromString(t));
    const s = t.length * 3;
    if (s > Qa) return i(ue.fromString(t));
    if (ft || (ft = new TextEncoder()), !Ye || Ye.byteLength < s) {
      let n = Ye ? Ye.byteLength * 2 : 16384;
      for (; n < s; ) n *= 2;
      Ye = new Uint8Array(n);
    }
    const r = ft.encodeInto(t, Ye).written;
    ss = true;
    try {
      return i(new ue(Ye.subarray(0, r)));
    } finally {
      ss = false;
    }
  }
  static fromByteArray(t) {
    const i = ue.alloc(t.length);
    for (let s = 0, r = t.length; s < r; s++) i.buffer[s] = t[s];
    return i;
  }
  static concat(t, i) {
    if (typeof i > "u") {
      i = 0;
      for (let n = 0, o = t.length; n < o; n++) i += t[n].byteLength;
    }
    const s = ue.alloc(i);
    let r = 0;
    for (let n = 0, o = t.length; n < o; n++) {
      const a = t[n];
      s.set(a, r), r += a.byteLength;
    }
    return s;
  }
  constructor(t) {
    this.buffer = t, this.byteLength = this.buffer.byteLength;
  }
  clone() {
    const t = ue.alloc(this.byteLength);
    return t.set(this), t;
  }
  toString() {
    if (Rt) return this.buffer.toString();
    if (Dr && this.buffer.byteLength > Ja) try {
      Dr(this.buffer.byteLength);
    } catch {
    }
    return is || (is = new TextDecoder()), is.decode(this.buffer);
  }
  slice(t, i) {
    return new ue(this.buffer.subarray(t, i));
  }
  set(t, i) {
    if (t instanceof ue) this.buffer.set(t.buffer, i);
    else if (t instanceof Uint8Array) this.buffer.set(t, i);
    else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), i);
    else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), i);
    else throw new Error("Unknown argument 'array'");
  }
  readUInt32BE(t) {
    return t1(this.buffer, t);
  }
  writeUInt32BE(t, i) {
    i1(this.buffer, t, i);
  }
  readUInt32LE(t) {
    return s1(this.buffer, t);
  }
  writeUInt32LE(t, i) {
    r1(this.buffer, t, i);
  }
  readUInt8(t) {
    return n1(this.buffer, t);
  }
  writeUInt8(t, i) {
    o1(this.buffer, t, i);
  }
  indexOf(t, i = 0) {
    return e1(this.buffer, t instanceof ue ? t.buffer : t, i);
  }
  equals(t) {
    return this === t ? true : this.byteLength !== t.byteLength ? false : this.buffer.every((i, s) => i === t.buffer[s]);
  }
};
function e1(e, t, i = 0) {
  const s = t.byteLength, r = e.byteLength;
  if (s === 0) return 0;
  if (s === 1) return e.indexOf(t[0]);
  if (s > r - i) return -1;
  const n = Ya.value;
  n.fill(t.length);
  for (let c = 0; c < t.length; c++) n[t[c]] = t.length - c - 1;
  let o = i + t.length - 1, a = o, l = -1;
  for (; o < r; ) if (e[o] === t[a]) {
    if (a === 0) {
      l = o;
      break;
    }
    o--, a--;
  } else o += Math.max(t.length - a, n[e[o]]), a = t.length - 1;
  return l;
}
function t1(e, t) {
  return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function i1(e, t, i) {
  e[i + 3] = t, t = t >>> 8, e[i + 2] = t, t = t >>> 8, e[i + 1] = t, t = t >>> 8, e[i] = t;
}
function s1(e, t) {
  return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function r1(e, t, i) {
  e[i + 0] = t & 255, t = t >>> 8, e[i + 1] = t & 255, t = t >>> 8, e[i + 2] = t & 255, t = t >>> 8, e[i + 3] = t & 255;
}
function n1(e, t) {
  return e[t];
}
function o1(e, t, i) {
  e[i] = t;
}
p(), p(), p(), p(), p(), p();
function a1() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function Ar() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var l1 = Ar() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function Pr(e, t) {
  let i;
  return t.length === 0 ? i = e : i = e.replace(/\{(\d+)\}/g, (s, r) => {
    const n = parseInt(r, 10), o = t[n];
    let a = s;
    return typeof o == "string" ? a = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a;
  }), l1 && (i = "［" + i.replace(/[aouei]/g, "$&$&") + "］"), i;
}
function w(e, t, ...i) {
  return Pr(typeof e == "number" ? c1(e, t) : t, i);
}
function c1(e, t) {
  const i = a1()?.[e];
  if (typeof i != "string") {
    if (typeof t == "string") return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return i;
}
var _t = "en", Tt = false, At = false, Pt = false, h1 = false, Cr = false, rs = false, u1 = false, Mr = false, d1 = false, f1 = false, fi = void 0, _i = _t, Or = _t, _1 = void 0, De = void 0, Re = globalThis, he = void 0;
typeof Re.vscode < "u" && typeof Re.vscode.process < "u" ? he = Re.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (he = process);
var Ur = typeof he?.versions?.electron == "string", p1 = Ur && he?.type === "renderer";
if (typeof he == "object") {
  Tt = he.platform === "win32", At = he.platform === "darwin", Pt = he.platform === "linux", h1 = Pt && !!he.env.SNAP && !!he.env.SNAP_REVISION, u1 = Ur, d1 = !!he.env.CI || !!he.env.BUILD_ARTIFACTSTAGINGDIRECTORY, fi = _t, _i = _t;
  const e = he.env.VSCODE_NLS_CONFIG;
  if (e) try {
    const t = JSON.parse(e);
    fi = t.userLocale, Or = t.osLocale, _i = t.resolvedLanguage || _t, _1 = t.languagePack?.translationsConfigFile;
  } catch {
  }
  Cr = true;
} else typeof navigator == "object" && !p1 ? (De = navigator.userAgent, Tt = De.indexOf("Windows") >= 0, At = De.indexOf("Macintosh") >= 0, Mr = (De.indexOf("Macintosh") >= 0 || De.indexOf("iPad") >= 0 || De.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Pt = De.indexOf("Linux") >= 0, f1 = De?.indexOf("Mobi") >= 0, rs = true, _i = Ar() || _t, fi = navigator.language.toLowerCase(), Or = fi) : console.error("Unable to resolve platform.");
var pi = 0;
At ? pi = 1 : Tt ? pi = 3 : Pt && (pi = 2);
var N = Tt, qe = At, pt = Pt, m1 = Cr, ns = rs, g1 = rs && typeof Re.importScripts == "function", v1 = g1 ? Re.origin : void 0, y1 = pi, Le = De, We = _i, Nr;
((e) => {
  function t() {
    return We;
  }
  e.value = t;
  function i() {
    return We.length === 2 ? We === "en" : We.length >= 3 ? We[0] === "e" && We[1] === "n" && We[2] === "-" : false;
  }
  e.isDefaultVariant = i;
  function s() {
    return We === "en";
  }
  e.isDefault = s;
})(Nr || (Nr = {}));
var w1 = typeof Re.postMessage == "function" && !Re.importScripts, b1 = (() => {
  if (w1) {
    const e = [];
    Re.addEventListener("message", (i) => {
      if (i.data && i.data.vscodeScheduleAsyncWork) for (let s = 0, r = e.length; s < r; s++) {
        const n = e[s];
        if (n.id === i.data.vscodeScheduleAsyncWork) {
          e.splice(s, 1), n.callback();
          return;
        }
      }
    });
    let t = 0;
    return (i) => {
      const s = ++t;
      e.push({ id: s, callback: i }), Re.postMessage({ vscodeScheduleAsyncWork: s }, "*");
    };
  }
  return (e) => setTimeout(e);
})(), Ct = ((e) => (e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux", e))(Ct || {}), Fr = At || Mr ? 2 : Tt ? 1 : 3, Br = !!(Le && Le.indexOf("Chrome") >= 0), E1 = !!(Le && Le.indexOf("Firefox") >= 0), S1 = !!(!Br && Le && Le.indexOf("Safari") >= 0), k1 = !!(Le && Le.indexOf("Edg/") >= 0), Du = !!(Le && Le.indexOf("Android") >= 0), Ru = he?.arch, Tu = he?.platform, Au = he?.versions?.node, Qe, os = globalThis.vscode;
if (typeof os < "u" && typeof os.process < "u") {
  const e = os.process;
  Qe = { get platform() {
    return e.platform;
  }, get arch() {
    return e.arch;
  }, get env() {
    return e.env;
  }, cwd() {
    return e.cwd();
  } };
} else typeof process < "u" && typeof process?.versions?.node == "string" ? Qe = { get platform() {
  return process.platform;
}, get arch() {
  return process.arch;
}, get env() {
  return process.env;
}, cwd() {
  return process.env.VSCODE_CWD || process.cwd();
} } : Qe = { get platform() {
  return N ? "win32" : qe ? "darwin" : "linux";
}, get arch() {
}, get env() {
  return {};
}, cwd() {
  return "/";
} };
var Mt = Qe.cwd, Ie = Qe.env, $r = Qe.platform, Pu = Qe.arch, x1 = 65, L1 = 97, I1 = 90, D1 = 122, Je = 46, oe = 47, pe = 92, Te = 58, R1 = 63, Hr = class extends Error {
  constructor(e, t, i) {
    let s;
    typeof t == "string" && t.indexOf("not ") === 0 ? (s = "must not be", t = t.replace(/^not /, "")) : s = "must be";
    const r = e.indexOf(".") !== -1 ? "property" : "argument";
    let n = `The "${e}" ${r} ${s} of type ${t}`;
    n += `. Received type ${typeof i}`, super(n), this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function T1(e, t) {
  if (e === null || typeof e != "object") throw new Hr(t, "Object", e);
}
function ee(e, t) {
  if (typeof e != "string") throw new Hr(t, "string", e);
}
var me = $r === "win32";
function P(e) {
  return e === oe || e === pe;
}
function as(e) {
  return e === oe;
}
function Ae(e) {
  return e >= x1 && e <= I1 || e >= L1 && e <= D1;
}
function mi(e, t, i, s) {
  let r = "", n = 0, o = -1, a = 0, l = 0;
  for (let c = 0; c <= e.length; ++c) {
    if (c < e.length) l = e.charCodeAt(c);
    else {
      if (s(l)) break;
      l = oe;
    }
    if (s(l)) {
      if (!(o === c - 1 || a === 1)) if (a === 2) {
        if (r.length < 2 || n !== 2 || r.charCodeAt(r.length - 1) !== Je || r.charCodeAt(r.length - 2) !== Je) {
          if (r.length > 2) {
            const h = r.lastIndexOf(i);
            h === -1 ? (r = "", n = 0) : (r = r.slice(0, h), n = r.length - 1 - r.lastIndexOf(i)), o = c, a = 0;
            continue;
          } else if (r.length !== 0) {
            r = "", n = 0, o = c, a = 0;
            continue;
          }
        }
        t && (r += r.length > 0 ? `${i}..` : "..", n = 2);
      } else r.length > 0 ? r += `${i}${e.slice(o + 1, c)}` : r = e.slice(o + 1, c), n = c - o - 1;
      o = c, a = 0;
    } else l === Je && a !== -1 ? ++a : a = -1;
  }
  return r;
}
function A1(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function qr(e, t) {
  T1(t, "pathObject");
  const i = t.dir || t.root, s = t.base || `${t.name || ""}${A1(t.ext)}`;
  return i ? i === t.root ? `${i}${s}` : `${i}${e}${s}` : s;
}
var te = { resolve(...e) {
  let t = "", i = "", s = false;
  for (let r = e.length - 1; r >= -1; r--) {
    let n;
    if (r >= 0) {
      if (n = e[r], ee(n, `paths[${r}]`), n.length === 0) continue;
    } else t.length === 0 ? n = Mt() : (n = Ie[`=${t}`] || Mt(), (n === void 0 || n.slice(0, 2).toLowerCase() !== t.toLowerCase() && n.charCodeAt(2) === pe) && (n = `${t}\\`));
    const o = n.length;
    let a = 0, l = "", c = false;
    const h = n.charCodeAt(0);
    if (o === 1) P(h) && (a = 1, c = true);
    else if (P(h)) if (c = true, P(n.charCodeAt(1))) {
      let u = 2, d = u;
      for (; u < o && !P(n.charCodeAt(u)); ) u++;
      if (u < o && u !== d) {
        const f = n.slice(d, u);
        for (d = u; u < o && P(n.charCodeAt(u)); ) u++;
        if (u < o && u !== d) {
          for (d = u; u < o && !P(n.charCodeAt(u)); ) u++;
          (u === o || u !== d) && (l = `\\\\${f}\\${n.slice(d, u)}`, a = u);
        }
      }
    } else a = 1;
    else Ae(h) && n.charCodeAt(1) === Te && (l = n.slice(0, 2), a = 2, o > 2 && P(n.charCodeAt(2)) && (c = true, a = 3));
    if (l.length > 0) if (t.length > 0) {
      if (l.toLowerCase() !== t.toLowerCase()) continue;
    } else t = l;
    if (s) {
      if (t.length > 0) break;
    } else if (i = `${n.slice(a)}\\${i}`, s = c, c && t.length > 0) break;
  }
  return i = mi(i, !s, "\\", P), s ? `${t}\\${i}` : `${t}${i}` || ".";
}, normalize(e) {
  ee(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let i = 0, s, r = false;
  const n = e.charCodeAt(0);
  if (t === 1) return as(n) ? "\\" : e;
  if (P(n)) if (r = true, P(e.charCodeAt(1))) {
    let a = 2, l = a;
    for (; a < t && !P(e.charCodeAt(a)); ) a++;
    if (a < t && a !== l) {
      const c = e.slice(l, a);
      for (l = a; a < t && P(e.charCodeAt(a)); ) a++;
      if (a < t && a !== l) {
        for (l = a; a < t && !P(e.charCodeAt(a)); ) a++;
        if (a === t) return `\\\\${c}\\${e.slice(l)}\\`;
        a !== l && (s = `\\\\${c}\\${e.slice(l, a)}`, i = a);
      }
    }
  } else i = 1;
  else Ae(n) && e.charCodeAt(1) === Te && (s = e.slice(0, 2), i = 2, t > 2 && P(e.charCodeAt(2)) && (r = true, i = 3));
  let o = i < t ? mi(e.slice(i), !r, "\\", P) : "";
  if (o.length === 0 && !r && (o = "."), o.length > 0 && P(e.charCodeAt(t - 1)) && (o += "\\"), !r && s === void 0 && e.includes(":")) {
    if (o.length >= 2 && Ae(o.charCodeAt(0)) && o.charCodeAt(1) === Te) return `.\\${o}`;
    let a = e.indexOf(":");
    do
      if (a === t - 1 || P(e.charCodeAt(a + 1))) return `.\\${o}`;
    while ((a = e.indexOf(":", a + 1)) !== -1);
  }
  return s === void 0 ? r ? `\\${o}` : o : r ? `${s}\\${o}` : `${s}${o}`;
}, isAbsolute(e) {
  ee(e, "path");
  const t = e.length;
  if (t === 0) return false;
  const i = e.charCodeAt(0);
  return P(i) || t > 2 && Ae(i) && e.charCodeAt(1) === Te && P(e.charCodeAt(2));
}, join(...e) {
  if (e.length === 0) return ".";
  let t, i;
  for (let n = 0; n < e.length; ++n) {
    const o = e[n];
    ee(o, "path"), o.length > 0 && (t === void 0 ? t = i = o : t += `\\${o}`);
  }
  if (t === void 0) return ".";
  let s = true, r = 0;
  if (typeof i == "string" && P(i.charCodeAt(0))) {
    ++r;
    const n = i.length;
    n > 1 && P(i.charCodeAt(1)) && (++r, n > 2 && (P(i.charCodeAt(2)) ? ++r : s = false));
  }
  if (s) {
    for (; r < t.length && P(t.charCodeAt(r)); ) r++;
    r >= 2 && (t = `\\${t.slice(r)}`);
  }
  return te.normalize(t);
}, relative(e, t) {
  if (ee(e, "from"), ee(t, "to"), e === t) return "";
  const i = te.resolve(e), s = te.resolve(t);
  if (i === s || (e = i.toLowerCase(), t = s.toLowerCase(), e === t)) return "";
  if (i.length !== e.length || s.length !== t.length) {
    const _ = i.split("\\"), E = s.split("\\");
    _[_.length - 1] === "" && _.pop(), E[E.length - 1] === "" && E.pop();
    const g = _.length, y = E.length, R = g < y ? g : y;
    let U;
    for (U = 0; U < R && _[U].toLowerCase() === E[U].toLowerCase(); U++) ;
    return U === 0 ? s : U === R ? y > R ? E.slice(U).join("\\") : g > R ? "..\\".repeat(g - 1 - U) + ".." : "" : "..\\".repeat(g - U) + E.slice(U).join("\\");
  }
  let r = 0;
  for (; r < e.length && e.charCodeAt(r) === pe; ) r++;
  let n = e.length;
  for (; n - 1 > r && e.charCodeAt(n - 1) === pe; ) n--;
  const o = n - r;
  let a = 0;
  for (; a < t.length && t.charCodeAt(a) === pe; ) a++;
  let l = t.length;
  for (; l - 1 > a && t.charCodeAt(l - 1) === pe; ) l--;
  const c = l - a, h = o < c ? o : c;
  let u = -1, d = 0;
  for (; d < h; d++) {
    const _ = e.charCodeAt(r + d);
    if (_ !== t.charCodeAt(a + d)) break;
    _ === pe && (u = d);
  }
  if (d !== h) {
    if (u === -1) return s;
  } else {
    if (c > h) {
      if (t.charCodeAt(a + d) === pe) return s.slice(a + d + 1);
      if (d === 2) return s.slice(a + d);
    }
    o > h && (e.charCodeAt(r + d) === pe ? u = d : d === 2 && (u = 3)), u === -1 && (u = 0);
  }
  let f = "";
  for (d = r + u + 1; d <= n; ++d) (d === n || e.charCodeAt(d) === pe) && (f += f.length === 0 ? ".." : "\\..");
  return a += u, f.length > 0 ? `${f}${s.slice(a, l)}` : (s.charCodeAt(a) === pe && ++a, s.slice(a, l));
}, toNamespacedPath(e) {
  if (typeof e != "string" || e.length === 0) return e;
  const t = te.resolve(e);
  if (t.length <= 2) return e;
  if (t.charCodeAt(0) === pe) {
    if (t.charCodeAt(1) === pe) {
      const i = t.charCodeAt(2);
      if (i !== R1 && i !== Je) return `\\\\?\\UNC\\${t.slice(2)}`;
    }
  } else if (Ae(t.charCodeAt(0)) && t.charCodeAt(1) === Te && t.charCodeAt(2) === pe) return `\\\\?\\${t}`;
  return t;
}, dirname(e) {
  ee(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let i = -1, s = 0;
  const r = e.charCodeAt(0);
  if (t === 1) return P(r) ? e : ".";
  if (P(r)) {
    if (i = s = 1, P(e.charCodeAt(1))) {
      let a = 2, l = a;
      for (; a < t && !P(e.charCodeAt(a)); ) a++;
      if (a < t && a !== l) {
        for (l = a; a < t && P(e.charCodeAt(a)); ) a++;
        if (a < t && a !== l) {
          for (l = a; a < t && !P(e.charCodeAt(a)); ) a++;
          if (a === t) return e;
          a !== l && (i = s = a + 1);
        }
      }
    }
  } else Ae(r) && e.charCodeAt(1) === Te && (i = t > 2 && P(e.charCodeAt(2)) ? 3 : 2, s = i);
  let n = -1, o = true;
  for (let a = t - 1; a >= s; --a) if (P(e.charCodeAt(a))) {
    if (!o) {
      n = a;
      break;
    }
  } else o = false;
  if (n === -1) {
    if (i === -1) return ".";
    n = i;
  }
  return e.slice(0, n);
}, basename(e, t) {
  t !== void 0 && ee(t, "suffix"), ee(e, "path");
  let i = 0, s = -1, r = true, n;
  if (e.length >= 2 && Ae(e.charCodeAt(0)) && e.charCodeAt(1) === Te && (i = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (n = e.length - 1; n >= i; --n) {
      const l = e.charCodeAt(n);
      if (P(l)) {
        if (!r) {
          i = n + 1;
          break;
        }
      } else a === -1 && (r = false, a = n + 1), o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (s = n) : (o = -1, s = a));
    }
    return i === s ? s = a : s === -1 && (s = e.length), e.slice(i, s);
  }
  for (n = e.length - 1; n >= i; --n) if (P(e.charCodeAt(n))) {
    if (!r) {
      i = n + 1;
      break;
    }
  } else s === -1 && (r = false, s = n + 1);
  return s === -1 ? "" : e.slice(i, s);
}, extname(e) {
  ee(e, "path");
  let t = 0, i = -1, s = 0, r = -1, n = true, o = 0;
  e.length >= 2 && e.charCodeAt(1) === Te && Ae(e.charCodeAt(0)) && (t = s = 2);
  for (let a = e.length - 1; a >= t; --a) {
    const l = e.charCodeAt(a);
    if (P(l)) {
      if (!n) {
        s = a + 1;
        break;
      }
      continue;
    }
    r === -1 && (n = false, r = a + 1), l === Je ? i === -1 ? i = a : o !== 1 && (o = 1) : i !== -1 && (o = -1);
  }
  return i === -1 || r === -1 || o === 0 || o === 1 && i === r - 1 && i === s + 1 ? "" : e.slice(i, r);
}, format: qr.bind(null, "\\"), parse(e) {
  ee(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const i = e.length;
  let s = 0, r = e.charCodeAt(0);
  if (i === 1) return P(r) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
  if (P(r)) {
    if (s = 1, P(e.charCodeAt(1))) {
      let u = 2, d = u;
      for (; u < i && !P(e.charCodeAt(u)); ) u++;
      if (u < i && u !== d) {
        for (d = u; u < i && P(e.charCodeAt(u)); ) u++;
        if (u < i && u !== d) {
          for (d = u; u < i && !P(e.charCodeAt(u)); ) u++;
          u === i ? s = u : u !== d && (s = u + 1);
        }
      }
    }
  } else if (Ae(r) && e.charCodeAt(1) === Te) {
    if (i <= 2) return t.root = t.dir = e, t;
    if (s = 2, P(e.charCodeAt(2))) {
      if (i === 3) return t.root = t.dir = e, t;
      s = 3;
    }
  }
  s > 0 && (t.root = e.slice(0, s));
  let n = -1, o = s, a = -1, l = true, c = e.length - 1, h = 0;
  for (; c >= s; --c) {
    if (r = e.charCodeAt(c), P(r)) {
      if (!l) {
        o = c + 1;
        break;
      }
      continue;
    }
    a === -1 && (l = false, a = c + 1), r === Je ? n === -1 ? n = c : h !== 1 && (h = 1) : n !== -1 && (h = -1);
  }
  return a !== -1 && (n === -1 || h === 0 || h === 1 && n === a - 1 && n === o + 1 ? t.base = t.name = e.slice(o, a) : (t.name = e.slice(o, n), t.base = e.slice(o, a), t.ext = e.slice(n, a))), o > 0 && o !== s ? t.dir = e.slice(0, o - 1) : t.dir = t.root, t;
}, sep: "\\", delimiter: ";", win32: null, posix: null }, P1 = (() => {
  if (me) {
    const e = /\\/g;
    return () => {
      const t = Mt().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => Mt();
})(), W = { resolve(...e) {
  let t = "", i = false;
  for (let s = e.length - 1; s >= 0 && !i; s--) {
    const r = e[s];
    ee(r, `paths[${s}]`), r.length !== 0 && (t = `${r}/${t}`, i = r.charCodeAt(0) === oe);
  }
  if (!i) {
    const s = P1();
    t = `${s}/${t}`, i = s.charCodeAt(0) === oe;
  }
  return t = mi(t, !i, "/", as), i ? `/${t}` : t.length > 0 ? t : ".";
}, normalize(e) {
  if (ee(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === oe, i = e.charCodeAt(e.length - 1) === oe;
  return e = mi(e, !t, "/", as), e.length === 0 ? t ? "/" : i ? "./" : "." : (i && (e += "/"), t ? `/${e}` : e);
}, isAbsolute(e) {
  return ee(e, "path"), e.length > 0 && e.charCodeAt(0) === oe;
}, join(...e) {
  if (e.length === 0) return ".";
  const t = [];
  for (let i = 0; i < e.length; ++i) {
    const s = e[i];
    ee(s, "path"), s.length > 0 && t.push(s);
  }
  return t.length === 0 ? "." : W.normalize(t.join("/"));
}, relative(e, t) {
  if (ee(e, "from"), ee(t, "to"), e === t || (e = W.resolve(e), t = W.resolve(t), e === t)) return "";
  const i = 1, s = e.length, r = s - i, n = 1, o = t.length - n, a = r < o ? r : o;
  let l = -1, c = 0;
  for (; c < a; c++) {
    const u = e.charCodeAt(i + c);
    if (u !== t.charCodeAt(n + c)) break;
    u === oe && (l = c);
  }
  if (c === a) if (o > a) {
    if (t.charCodeAt(n + c) === oe) return t.slice(n + c + 1);
    if (c === 0) return t.slice(n + c);
  } else r > a && (e.charCodeAt(i + c) === oe ? l = c : c === 0 && (l = 0));
  let h = "";
  for (c = i + l + 1; c <= s; ++c) (c === s || e.charCodeAt(c) === oe) && (h += h.length === 0 ? ".." : "/..");
  return `${h}${t.slice(n + l)}`;
}, toNamespacedPath(e) {
  return e;
}, dirname(e) {
  if (ee(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === oe;
  let i = -1, s = true;
  for (let r = e.length - 1; r >= 1; --r) if (e.charCodeAt(r) === oe) {
    if (!s) {
      i = r;
      break;
    }
  } else s = false;
  return i === -1 ? t ? "/" : "." : t && i === 1 ? "//" : e.slice(0, i);
}, basename(e, t) {
  t !== void 0 && ee(t, "suffix"), ee(e, "path");
  let i = 0, s = -1, r = true, n;
  if (t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (n = e.length - 1; n >= 0; --n) {
      const l = e.charCodeAt(n);
      if (l === oe) {
        if (!r) {
          i = n + 1;
          break;
        }
      } else a === -1 && (r = false, a = n + 1), o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (s = n) : (o = -1, s = a));
    }
    return i === s ? s = a : s === -1 && (s = e.length), e.slice(i, s);
  }
  for (n = e.length - 1; n >= 0; --n) if (e.charCodeAt(n) === oe) {
    if (!r) {
      i = n + 1;
      break;
    }
  } else s === -1 && (r = false, s = n + 1);
  return s === -1 ? "" : e.slice(i, s);
}, extname(e) {
  ee(e, "path");
  let t = -1, i = 0, s = -1, r = true, n = 0;
  for (let o = e.length - 1; o >= 0; --o) {
    const a = e[o];
    if (a === "/") {
      if (!r) {
        i = o + 1;
        break;
      }
      continue;
    }
    s === -1 && (r = false, s = o + 1), a === "." ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1);
  }
  return t === -1 || s === -1 || n === 0 || n === 1 && t === s - 1 && t === i + 1 ? "" : e.slice(t, s);
}, format: qr.bind(null, "/"), parse(e) {
  ee(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const i = e.charCodeAt(0) === oe;
  let s;
  i ? (t.root = "/", s = 1) : s = 0;
  let r = -1, n = 0, o = -1, a = true, l = e.length - 1, c = 0;
  for (; l >= s; --l) {
    const h = e.charCodeAt(l);
    if (h === oe) {
      if (!a) {
        n = l + 1;
        break;
      }
      continue;
    }
    o === -1 && (a = false, o = l + 1), h === Je ? r === -1 ? r = l : c !== 1 && (c = 1) : r !== -1 && (c = -1);
  }
  if (o !== -1) {
    const h = n === 0 && i ? 1 : n;
    r === -1 || c === 0 || c === 1 && r === o - 1 && r === n + 1 ? t.base = t.name = e.slice(h, o) : (t.name = e.slice(h, r), t.base = e.slice(h, o), t.ext = e.slice(r, o));
  }
  return n > 0 ? t.dir = e.slice(0, n - 1) : i && (t.dir = "/"), t;
}, sep: "/", delimiter: ":", win32: null, posix: null };
W.win32 = te.win32 = te, W.posix = te.posix = W;
var Ot = me ? te.normalize : W.normalize, Wr = me ? te.isAbsolute : W.isAbsolute, O = me ? te.join : W.join, gi = me ? te.resolve : W.resolve, C1 = me ? te.relative : W.relative, Ut = me ? te.dirname : W.dirname, vi = me ? te.basename : W.basename, Cu = me ? te.extname : W.extname, Mu = me ? te.format : W.format, M1 = me ? te.parse : W.parse, Ou = me ? te.toNamespacedPath : W.toNamespacedPath, yi = me ? te.sep : W.sep, Gr = me ? te.delimiter : W.delimiter;
p(), p(), p(), p(), p(), p();
var zr = class nr {
  constructor(t) {
    this.element = t, this.next = nr.Undefined, this.prev = nr.Undefined;
  }
};
zr.Undefined = new zr(void 0), p();
var O1 = globalThis.performance && typeof globalThis.performance.now == "function", U1 = class Ho {
  static create(t) {
    return new Ho(t);
  }
  constructor(t) {
    this._now = O1 && t === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
}, Vr = false, N1 = false, Z;
((e) => {
  e.None = () => X.None;
  function t(b) {
    if (N1) {
      const { onDidAddListener: m } = b, x = cs.create();
      let S = 0;
      b.onDidAddListener = () => {
        ++S === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), x.print()), m?.();
      };
    }
  }
  function i(b, m) {
    return f(b, () => {
    }, 0, void 0, true, void 0, m);
  }
  e.defer = i;
  function s(b) {
    return (m, x = null, S) => {
      let L = false, A;
      return A = b((V) => {
        if (!L) return A ? A.dispose() : L = true, m.call(x, V);
      }, null, S), L && A.dispose(), A;
    };
  }
  e.once = s;
  function r(b, m) {
    return e.once(e.filter(b, m));
  }
  e.onceIf = r;
  function n(b, m, x) {
    return u((S, L = null, A) => b((V) => S.call(L, m(V)), null, A), x);
  }
  e.map = n;
  function o(b, m, x) {
    return u((S, L = null, A) => b((V) => {
      m(V), S.call(L, V);
    }, null, A), x);
  }
  e.forEach = o;
  function a(b, m, x) {
    return u((S, L = null, A) => b((V) => m(V) && S.call(L, V), null, A), x);
  }
  e.filter = a;
  function l(b) {
    return b;
  }
  e.signal = l;
  function c(...b) {
    return (m, x = null, S) => {
      const L = Ka(...b.map((A) => A((V) => m.call(x, V))));
      return d(L, S);
    };
  }
  e.any = c;
  function h(b, m, x, S) {
    let L = x;
    return n(b, (A) => (L = m(L, A), L), S);
  }
  e.reduce = h;
  function u(b, m) {
    let x;
    const S = { onWillAddFirstListener() {
      x = b(L.fire, L);
    }, onDidRemoveLastListener() {
      x?.dispose();
    } };
    m || t(S);
    const L = new k(S);
    return m?.add(L), L.event;
  }
  function d(b, m) {
    return m instanceof Array ? m.push(b) : m && m.add(b), b;
  }
  function f(b, m, x = 100, S = false, L = false, A, V) {
    let ne, ce, ct, hi = 0, kt;
    const ur = { leakWarningThreshold: A, onWillAddFirstListener() {
      ne = b((ra) => {
        hi++, ce = m(ce, ra), S && !ct && (ui.fire(ce), ce = void 0), kt ??= () => {
          const na = ce;
          ce = void 0, ct = void 0, (!S || hi > 1) && ui.fire(na), hi = 0;
        }, typeof x == "number" ? (clearTimeout(ct), ct = setTimeout(kt, x)) : ct === void 0 && (ct = 0, queueMicrotask(kt));
      });
    }, onWillRemoveListener() {
      L && hi > 0 && kt?.();
    }, onDidRemoveLastListener() {
      kt = void 0, ne.dispose();
    } };
    V || t(ur);
    const ui = new k(ur);
    return V?.add(ui), ui.event;
  }
  e.debounce = f;
  function _(b, m = 0, x) {
    return e.debounce(b, (S, L) => S ? (S.push(L), S) : [L], m, void 0, true, void 0, x);
  }
  e.accumulate = _;
  function E(b, m = (S, L) => S === L, x) {
    let S = true, L;
    return a(b, (A) => {
      const V = S || !m(A, L);
      return S = false, L = A, V;
    }, x);
  }
  e.latch = E;
  function g(b, m, x) {
    return [e.filter(b, m, x), e.filter(b, (S) => !m(S), x)];
  }
  e.split = g;
  function y(b, m = false, x = [], S) {
    let L = x.slice(), A = b((ce) => {
      L ? L.push(ce) : ne.fire(ce);
    });
    S && S.add(A);
    const V = () => {
      L?.forEach((ce) => ne.fire(ce)), L = null;
    }, ne = new k({ onWillAddFirstListener() {
      A || (A = b((ce) => ne.fire(ce)), S && S.add(A));
    }, onDidAddFirstListener() {
      L && (m ? setTimeout(V) : V());
    }, onDidRemoveLastListener() {
      A && A.dispose(), A = null;
    } });
    return S && S.add(ne), ne.event;
  }
  e.buffer = y;
  function R(b, m) {
    return (S, L, A) => {
      const V = m(new lt());
      return b(function(ne) {
        const ce = V.evaluate(ne);
        ce !== U && S.call(L, ce);
      }, void 0, A);
    };
  }
  e.chain = R;
  const U = /* @__PURE__ */ Symbol("HaltChainable");
  class lt {
    constructor() {
      this.steps = [];
    }
    map(m) {
      return this.steps.push(m), this;
    }
    forEach(m) {
      return this.steps.push((x) => (m(x), x)), this;
    }
    filter(m) {
      return this.steps.push((x) => m(x) ? x : U), this;
    }
    reduce(m, x) {
      let S = x;
      return this.steps.push((L) => (S = m(S, L), S)), this;
    }
    latch(m = (x, S) => x === S) {
      let x = true, S;
      return this.steps.push((L) => {
        const A = x || !m(L, S);
        return x = false, S = L, A ? L : U;
      }), this;
    }
    evaluate(m) {
      for (const x of this.steps) if (m = x(m), m === U) break;
      return m;
    }
  }
  function I(b, m, x = (S) => S) {
    const S = (...ne) => V.fire(x(...ne)), L = () => b.on(m, S), A = () => b.removeListener(m, S), V = new k({ onWillAddFirstListener: L, onDidRemoveLastListener: A });
    return V.event;
  }
  e.fromNodeEventEmitter = I;
  function D(b) {
    let m;
    const x = () => {
      m = b.subscribe((A) => L.fire(A));
    }, S = () => {
      m?.unsubscribe(), m = void 0;
    }, L = new k({ onWillAddFirstListener: x, onDidRemoveLastListener: S });
    return L.event;
  }
  e.fromRxJS = D;
  function B(b, m, x = (S) => S) {
    const S = (...ne) => V.fire(x(...ne)), L = () => b.addEventListener(m, S), A = () => b.removeEventListener(m, S), V = new k({ onWillAddFirstListener: L, onDidRemoveLastListener: A });
    return V.event;
  }
  e.fromDOMEventEmitter = B;
  function j(b, m) {
    return new Promise((x) => s(b)(x, null, m));
  }
  e.toPromise = j;
  function T(b) {
    const m = new k();
    return b.then((x) => {
      m.fire(x);
    }, () => {
      m.fire(void 0);
    }).finally(() => {
      m.dispose();
    }), m.event;
  }
  e.fromPromise = T;
  function J(b, m) {
    return b((x) => m.fire(x));
  }
  e.forward = J;
  function be(b, m, x) {
    return m(x), b((S) => m(S));
  }
  e.runAndSubscribe = be;
  class z {
    constructor(m, x) {
      this._observable = m, this._counter = 0, this._hasChanged = false;
      const S = { onWillAddFirstListener: () => {
        m.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        m.removeObserver(this);
      } };
      x || t(S), this.emitter = new k(S), x && x.add(this.emitter);
    }
    beginUpdate(m) {
      this._counter++;
    }
    handlePossibleChange(m) {
    }
    handleChange(m, x) {
      this._hasChanged = true;
    }
    endUpdate(m) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function Ke(b, m) {
    return new z(b, m).emitter.event;
  }
  e.fromObservable = Ke;
  function ye(b) {
    return (m, x, S) => {
      let L = 0, A = false;
      const V = { beginUpdate() {
        L++;
      }, endUpdate() {
        L--, L === 0 && (b.reportChanges(), A && (A = false, m.call(x)));
      }, handlePossibleChange() {
      }, handleChange() {
        A = true;
      } };
      b.addObserver(V), b.reportChanges();
      const ne = { dispose() {
        b.removeObserver(V);
      } };
      return S instanceof Ee ? S.add(ne) : Array.isArray(S) && S.push(ne), ne;
    };
  }
  e.fromObservableLight = ye;
})(Z || (Z = {}));
var ls = class or {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${or._idPool++}`, or.all.add(this);
  }
  start(t) {
    this._stopWatch = new U1(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
ls.all = /* @__PURE__ */ new Set(), ls._idPool = 0;
var F1 = ls, Kr = -1, B1 = 1;
function jr() {
  return (B1++).toString(16).padStart(3, "0");
}
var $1 = class {
  constructor(e, t, i = jr()) {
    this._errorHandler = e, this.threshold = t, this.name = i, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    const i = this.threshold;
    if (i <= 0 || t < i) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const s = e.value, r = this._stacks.get(s) || 0;
    if (this._stacks.set(s, r + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = i * 0.5;
      const [n, o] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${o}):`;
      console.warn(a), console.warn(n);
      const l = o / t > 0.3 ? "dominated" : "popular", c = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, h = new Xr(l, a, n, t, c);
      this._errorHandler(h), xt(h, "emitter_listener_leak");
    }
    return () => {
      const n = this._stacks.get(s) || 0;
      n <= 1 ? this._stacks.delete(s) : this._stacks.set(s, n - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (const [i, s] of this._stacks) (!e || t < s) && (e = [i, s], t = s);
    return e;
  }
}, cs = class qo {
  constructor(t) {
    this.value = t;
  }
  static create() {
    const t = new Error();
    return new qo(t.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, Xr = class extends Error {
  constructor(e, t, i, s, r) {
    super(r ? `[${r}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = s, this.details = t, this.stack = i;
  }
}, H1 = class extends Xr {
  constructor(e, t, i, s, r) {
    super(e, t, i, s, r), this.name = "ListenerRefusalError";
  }
}, wi = class {
  constructor(e) {
    this.value = e;
  }
}, q1 = 2, Yr = (e, t) => {
  if (e instanceof wi) t(e);
  else for (let i = 0; i < e.length; i++) {
    const s = e[i];
    s && t(s);
  }
}, k = class {
  constructor(e) {
    this._size = 0, this._options = e, (Kr > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? Kr, this._leakWarningName = this._options?.leakWarningName ?? jr(), this._leakWarningErrorHandler = this._options?.onListenerError ?? di), this._perfMon = this._options?._profName ? new F1(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  _getLeakageMonitor() {
    if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new $1(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (Vr) {
          const e = this._listeners;
          queueMicrotask(() => {
            Yr(e, (t) => t.stack?.print());
          });
        }
        Yr(this._listeners, (e) => {
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
          const l = `[${a.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${a.threshold})`;
          console.warn(l);
          const c = a.getMostFrequentStack() ?? ["UNKNOWN stack", -1], h = c[1] / this._size > 0.3 ? "dominated" : "popular", u = new H1(h, `${l}. HINT: Stack shows most frequent listener (${c[1]}-times)`, c[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || di)(u), xt(u, "emitter_listener_refusal"), X.None;
        }
      }
      if (this._disposed) {
        const a = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return xt(a, "emitter_use_after_dispose"), X.None;
      }
      t && (e = e.bind(t));
      const s = new wi(e);
      let r, n;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const a = this._getLeakageMonitor();
        a && (s.stack = cs.create(), r = a.check(s.stack, this._size + 1));
      }
      Vr && (s.stack = n ?? cs.create()), this._listeners ? this._listeners instanceof wi ? (this._deliveryQueue ??= new W1(), this._listeners = [this._listeners, s]) : this._listeners.push(s) : (this._options?.onWillAddFirstListener?.(this), this._listeners = s, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const o = _e(() => {
        r?.(), this._removeListener(s);
      });
      return i instanceof Ee ? i.add(o) : Array.isArray(i) && i.push(o), o;
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
    if (this._size * q1 <= t.length) {
      let r = 0;
      for (let n = 0; n < t.length; n++) t[n] ? t[r++] = t[n] : s && r < this._deliveryQueue.end && (this._deliveryQueue.end--, r < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = r;
    }
  }
  _deliver(e, t) {
    if (!e) return;
    const i = this._options?.onListenerError || di;
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
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof wi) this._deliver(this._listeners, e);
    else {
      const t = this._deliveryQueue;
      t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
}, W1 = class {
  constructor() {
    this.i = -1, this.end = 0;
  }
  enqueue(e, t, i) {
    this.i = 0, this.end = i, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
}, G1 = class {
  constructor(e) {
    this.event = e, this._listener = new Xe();
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
}, z1 = class {
  constructor() {
    this.hasListeners = false, this.sources = [], this.emitter = new k({ onWillAddFirstListener: () => this.onFirstListenerAdd(), onDidRemoveLastListener: () => this.onLastListenerRemove() });
  }
  get event() {
    return this.emitter.event;
  }
  add(e) {
    const t = new G1(e);
    return this.sources.push(t), this.hasListeners && t.hook(this.emitter.fire, this.emitter), _e(Yi(() => {
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
}, V1 = class {
  constructor() {
    this.listening = false, this.inputEvent = Z.None, this.emitter = new k({ onDidAddFirstListener: () => {
      this.listening = true, this.inputEventListener?.dispose(), this.inputEventListener = new Xe(), this.inputEventListener.value = this.inputEvent(this.emitter.fire, this.emitter);
    }, onDidRemoveLastListener: () => {
      this.listening = false, this.inputEventListener?.dispose(), this.inputEventListener = void 0;
    } }), this.event = this.emitter.event;
  }
  set input(e) {
    this.inputEvent = e, this.listening && (this.inputEventListener ??= new Xe(), this.inputEventListener.value = e(this.emitter.fire, this.emitter));
  }
  dispose() {
    this.inputEventListener?.dispose(), this.inputEventListener = void 0, this.inputEvent = Z.None, this.emitter.dispose();
  }
}, Qr = Object.freeze(function(e, t) {
  const i = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(i);
  } };
}), Nt;
((e) => {
  function t(i) {
    return i === e.None || i === e.Cancelled || i instanceof bi ? true : !i || typeof i != "object" ? false : typeof i.isCancellationRequested == "boolean" && typeof i.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: Z.None }), e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: Qr });
})(Nt || (Nt = {}));
var bi = class {
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
    return this._isCancelled ? Qr : (this._emitter || (this._emitter = new k()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}, hs = class {
  constructor(e) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new bi()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof bi && this._token.cancel() : this._token = Nt.Cancelled;
  }
  dispose(e = false) {
    e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof bi && this._token.dispose() : this._token = Nt.None;
  }
};
function K1(e) {
  return e;
}
var j1 = class {
  constructor(e, t) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = K1) : (this._fn = t, this._computeKey = e.getCacheKey);
  }
  get(e) {
    const t = this._computeKey(e);
    return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
  }
};
p();
function X1(e) {
  return !e || typeof e != "string" ? true : e.trim().length === 0;
}
var Y1 = /{(\d+)}/g;
function mt(e, ...t) {
  return t.length === 0 ? e : e.replace(Y1, function(i, s) {
    const r = parseInt(s, 10);
    return isNaN(r) || r < 0 || r >= t.length ? i : t[r];
  });
}
function us(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function ds(e, t, i = 0, s = e.length, r = 0, n = t.length) {
  for (; i < s && r < n; i++, r++) {
    const l = e.charCodeAt(i), c = t.charCodeAt(r);
    if (l < c) return -1;
    if (l > c) return 1;
  }
  const o = s - i, a = n - r;
  return o < a ? -1 : o > a ? 1 : 0;
}
function Jr(e, t) {
  return Ft(e, t, 0, e.length, 0, t.length);
}
function Ft(e, t, i = 0, s = e.length, r = 0, n = t.length) {
  for (; i < s && r < n; i++, r++) {
    let l = e.charCodeAt(i), c = t.charCodeAt(r);
    if (l === c) continue;
    if (l >= 128 || c >= 128) return ds(e.toLowerCase(), t.toLowerCase(), i, s, r, n);
    Zr(l) && (l -= 32), Zr(c) && (c -= 32);
    const h = l - c;
    if (h !== 0) return h;
  }
  const o = s - i, a = n - r;
  return o < a ? -1 : o > a ? 1 : 0;
}
function Zr(e) {
  return e >= 97 && e <= 122;
}
function en(e) {
  return e >= 65 && e <= 90;
}
function Q1(e, t) {
  return e.length === t.length && Ft(e, t) === 0;
}
function J1(e) {
  return 55296 <= e && e <= 56319;
}
function tn(e) {
  return 56320 <= e && e <= 57343;
}
function Z1(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
var el = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, tl = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, il = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, sl = new RegExp("(?:" + [el.source, tl.source, il.source].join("|") + ")", "g");
function rl(e) {
  return e && (e = e.replace(sl, "")), e;
}
var nl = /\\\[.*?\\\]/g;
function ol(e) {
  return rl(e).replace(nl, "");
}
var Uu = "\uFEFF", al = class ni {
  static getInstance() {
    return ni._INSTANCE || (ni._INSTANCE = new ni()), ni._INSTANCE;
  }
  constructor() {
    this._data = ll();
  }
  getGraphemeBreakType(t) {
    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
    if (t < 127) return 0;
    const i = this._data, s = i.length / 3;
    let r = 1;
    for (; r <= s; ) if (t < i[3 * r]) r = 2 * r;
    else if (t > i[3 * r + 1]) r = 2 * r + 1;
    else return i[3 * r + 2];
    return 0;
  }
};
al._INSTANCE = null;
function ll() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var gt = class ar {
  constructor(t) {
    this.confusableDictionary = t;
  }
  static getInstance(t) {
    return ar.cache.get(Array.from(t).join(","));
  }
  static getLocales() {
    return ar._locales.value;
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
gt.ambiguousCharacterData = new ht(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), gt.cache = new j1((e) => {
  const t = e.split(",");
  function i(h) {
    const u = /* @__PURE__ */ new Map();
    for (let d = 0; d < h.length; d += 2) u.set(h[d], h[d + 1]);
    return u;
  }
  function s(h, u) {
    const d = new Map(h);
    for (const [f, _] of u) d.set(f, _);
    return d;
  }
  function r(h, u) {
    if (!h) return u;
    const d = /* @__PURE__ */ new Map();
    for (const [f, _] of h) u.has(f) && d.set(f, _);
    return d;
  }
  const n = gt.ambiguousCharacterData.value;
  let o = t.filter((h) => !h.startsWith("_") && h in n);
  o.length === 0 && (o = ["_default"]);
  let a;
  for (const h of o) {
    const u = i(n[h]);
    a = r(a, u);
  }
  const l = i(n._common), c = s(l, a);
  return new gt(c);
}), gt._locales = new ht(() => Object.keys(gt.ambiguousCharacterData.value).filter((e) => !e.startsWith("_")));
var cl = class oi {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(oi.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return oi.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let i = 0; i < t.length; i++) {
      const s = t.codePointAt(i);
      if (typeof s == "number" && (oi.isInvisibleCharacter(s) || s === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return oi.getData();
  }
};
cl._data = void 0;
var se;
((e) => {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})(se || (se = {}));
var hl = "tkn", ul = class {
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
    this._serverRootPath = W.join(t ?? "/", fl(e));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return W.join(this._serverRootPath, se.vscodeRemoteResource);
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
      return di(o), e;
    }
    const t = e.authority;
    let i = this._hosts[t];
    i && i.indexOf(":") !== -1 && i.indexOf("[") === -1 && (i = `[${i}]`);
    const s = this._ports[t], r = this._connectionTokens[t];
    let n = `path=${encodeURIComponent(e.path)}`;
    return typeof r == "string" && (n += `&${hl}=${encodeURIComponent(r)}`), H.from({ scheme: ns ? this._preferredWebSchema : se.vscodeRemoteResource, authority: `${i}:${s}`, path: this._remoteResourcesPath, query: n });
  }
}, dl = new ul();
function fl(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var _l = "vscode-app", sn = class Hi {
  asBrowserUri(t) {
    const i = this.toUri(t);
    return this.uriToBrowserUri(i);
  }
  uriToBrowserUri(t) {
    return t.scheme === se.vscodeRemote ? dl.rewrite(t) : t.scheme === se.file && (m1 || v1 === `${se.vscodeFileResource}://${Hi.FALLBACK_AUTHORITY}`) ? t.with({ scheme: se.vscodeFileResource, authority: t.authority || Hi.FALLBACK_AUTHORITY, query: null, fragment: null }) : t;
  }
  asFileUri(t) {
    const i = this.toUri(t);
    return this.uriToFileUri(i);
  }
  uriToFileUri(t) {
    return t.scheme === se.vscodeFileResource ? t.with({ scheme: se.file, authority: t.authority !== Hi.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
  }
  toUri(t) {
    if (H.isUri(t)) return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const i = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(i)) return H.joinPath(H.parse(i, true), t);
      const s = O(i, t);
      return H.file(s);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
sn.FALLBACK_AUTHORITY = _l;
var pl = sn, Bt = new pl(), Nu = Object.freeze({ "Cache-Control": "no-cache, no-store" }), Fu = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), rn;
((e) => {
  const t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const i = "vscode-coi";
  function s(n) {
    let o;
    typeof n == "string" ? o = new URL(n).searchParams : n instanceof URL ? o = n.searchParams : H.isUri(n) && (o = new URL(n.toString(true)).searchParams);
    const a = o?.get(i);
    if (a) return t.get(a);
  }
  e.getHeadersFromQuery = s;
  function r(n, o, a) {
    if (!globalThis.crossOriginIsolated) return;
    const l = o && a ? "3" : a ? "2" : "1";
    n instanceof URLSearchParams ? n.set(i, l) : n[i] = l;
  }
  e.addSearchParam = r;
})(rn || (rn = {}));
var ml = /^\w[\w\d+.-]*$/, gl = /^\//, vl = /^\/\//;
function yl(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !ml.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!gl.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (vl.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function wl(e, t) {
  return !e && !t ? "file" : e;
}
function bl(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== Se && (t = Se + t) : t = Se;
      break;
  }
  return t;
}
var Y = "", Se = "/", El = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, H = class qi {
  static isUri(t) {
    return t instanceof qi ? true : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : false;
  }
  constructor(t, i, s, r, n, o = false) {
    typeof t == "object" ? (this.scheme = t.scheme || Y, this.authority = t.authority || Y, this.path = t.path || Y, this.query = t.query || Y, this.fragment = t.fragment || Y) : (this.scheme = wl(t, o), this.authority = i || Y, this.path = bl(this.scheme, s || Y), this.query = r || Y, this.fragment = n || Y, yl(this, o));
  }
  get fsPath() {
    return Ei(this, false);
  }
  with(t) {
    if (!t) return this;
    let { scheme: i, authority: s, path: r, query: n, fragment: o } = t;
    return i === void 0 ? i = this.scheme : i === null && (i = Y), s === void 0 ? s = this.authority : s === null && (s = Y), r === void 0 ? r = this.path : r === null && (r = Y), n === void 0 ? n = this.query : n === null && (n = Y), o === void 0 ? o = this.fragment : o === null && (o = Y), i === this.scheme && s === this.authority && r === this.path && n === this.query && o === this.fragment ? this : new vt(i, s, r, n, o);
  }
  static parse(t, i = false) {
    const s = El.exec(t);
    return s ? new vt(s[2] || Y, Si(s[4] || Y), Si(s[5] || Y), Si(s[7] || Y), Si(s[9] || Y), i) : new vt(Y, Y, Y, Y, Y);
  }
  static file(t) {
    let i = Y;
    if (N && (t = t.replace(/\\/g, Se)), t[0] === Se && t[1] === Se) {
      const s = t.indexOf(Se, 2);
      s === -1 ? (i = t.substring(2), t = Se) : (i = t.substring(2, s), t = t.substring(s) || Se);
    }
    return new vt("file", i, t, Y, Y);
  }
  static from(t, i) {
    return new vt(t.scheme, t.authority, t.path, t.query, t.fragment, i);
  }
  static joinPath(t, ...i) {
    if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let s;
    return N && t.scheme === "file" ? s = qi.file(te.join(Ei(t, true), ...i)).path : s = W.join(t.path, ...i), t.with({ path: s });
  }
  toString(t = false) {
    return fs(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof qi) return t;
      {
        const i = new vt(t);
        return i._formatted = t.external ?? null, i._fsPath = t._sep === nn ? t.fsPath ?? null : null, i;
      }
    } else return t;
  }
  [/* @__PURE__ */ Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
}, nn = N ? 1 : void 0, vt = class extends H {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = Ei(this, false)), this._fsPath;
  }
  toString(e = false) {
    return e ? fs(this, true) : (this._formatted || (this._formatted = fs(this, false)), this._formatted);
  }
  toJSON() {
    const e = { $mid: 1 };
    return this._fsPath && (e.fsPath = this._fsPath, e._sep = nn), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
  }
}, on = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function an(e, t, i) {
  let s, r = -1;
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || i && o === 91 || i && o === 93 || i && o === 58) r !== -1 && (s += encodeURIComponent(e.substring(r, n)), r = -1), s !== void 0 && (s += e.charAt(n));
    else {
      s === void 0 && (s = e.substr(0, n));
      const a = on[o];
      a !== void 0 ? (r !== -1 && (s += encodeURIComponent(e.substring(r, n)), r = -1), s += a) : r === -1 && (r = n);
    }
  }
  return r !== -1 && (s += encodeURIComponent(e.substring(r))), s !== void 0 ? s : e;
}
function Sl(e) {
  let t;
  for (let i = 0; i < e.length; i++) {
    const s = e.charCodeAt(i);
    s === 35 || s === 63 ? (t === void 0 && (t = e.substr(0, i)), t += on[s]) : t !== void 0 && (t += e[i]);
  }
  return t !== void 0 ? t : e;
}
function Ei(e, t) {
  let i;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? i = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? i = e.path.substr(1) : i = e.path[1].toLowerCase() + e.path.substr(2) : i = e.path, N && (i = i.replace(/\//g, "\\")), i;
}
function fs(e, t) {
  const i = t ? Sl : an;
  let s = "", { scheme: r, authority: n, path: o, query: a, fragment: l } = e;
  if (r && (s += r, s += ":"), (n || r === "file") && (s += Se, s += Se), n) {
    let c = n.indexOf("@");
    if (c !== -1) {
      const h = n.substr(0, c);
      n = n.substr(c + 1), c = h.lastIndexOf(":"), c === -1 ? s += i(h, false, false) : (s += i(h.substr(0, c), false, false), s += ":", s += i(h.substr(c + 1), false, true)), s += "@";
    }
    n = n.toLowerCase(), c = n.lastIndexOf(":"), c === -1 ? s += i(n, false, true) : (s += i(n.substr(0, c), false, true), s += n.substr(c));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      const c = o.charCodeAt(1);
      c >= 65 && c <= 90 && (o = `/${String.fromCharCode(c + 32)}:${o.substr(3)}`);
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      const c = o.charCodeAt(0);
      c >= 65 && c <= 90 && (o = `${String.fromCharCode(c + 32)}:${o.substr(2)}`);
    }
    s += i(o, true, false);
  }
  return a && (s += "?", s += i(a, false, false)), l && (s += "#", s += t ? l : an(l, false, false)), s;
}
function ln(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + ln(e.substr(3)) : e;
  }
}
var cn = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function Si(e) {
  return e.match(cn) ? e.replace(cn, (t) => ln(t)) : e;
}
var kl = new class {
  transformIncoming(e) {
    return e;
  }
  transformOutgoing(e) {
    return e;
  }
  transformOutgoingURI(e) {
    return e;
  }
  transformOutgoingScheme(e) {
    return e;
  }
}();
p(), p(), p(), p();
function Ge(e) {
  return e === 47 || e === 92;
}
function hn(e) {
  return e.replace(/[\\/]/g, W.sep);
}
function xl(e) {
  return e.indexOf("/") === -1 && (e = hn(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function un(e, t = W.sep) {
  if (!e) return "";
  const i = e.length, s = e.charCodeAt(0);
  if (Ge(s)) {
    if (Ge(e.charCodeAt(1)) && !Ge(e.charCodeAt(2))) {
      let n = 3;
      const o = n;
      for (; n < i && !Ge(e.charCodeAt(n)); n++) ;
      if (o !== n && !Ge(e.charCodeAt(n + 1))) {
        for (n += 1; n < i; n++) if (Ge(e.charCodeAt(n))) return e.slice(0, n + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (dn(s) && e.charCodeAt(1) === 58) return Ge(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let r = e.indexOf("://");
  if (r !== -1) {
    for (r += 3; r < i; r++) if (Ge(e.charCodeAt(r))) return e.slice(0, r + 1);
  }
  return "";
}
function Ll(e, t, i) {
  return i === 0 ? true : e.charCodeAt(0) !== t.charCodeAt(0) ? false : i === 1 ? true : e.charCodeAt(i - 1) !== t.charCodeAt(i - 1) ? false : e.startsWith(t);
}
function Il(e, t, i) {
  for (let s = 0; s < i; s++) {
    let r = e.charCodeAt(s), n = t.charCodeAt(s);
    if (r !== n) {
      if (r >= 128 || n >= 128) return Ft(e, t, s, i, s, i) === 0;
      if (r >= 97 && r <= 122 && (r -= 32), n >= 97 && n <= 122 && (n -= 32), r !== n) return false;
    }
  }
  return true;
}
function _s(e, t, i, s = yi) {
  if (e === t) return true;
  if (!e || !t) return false;
  const r = e.length, n = t.length;
  if (n > r) return false;
  const o = s.charCodeAt(0), a = t.charCodeAt(n - 1) === o;
  if (n < r && !a && e.charCodeAt(n) !== o) return false;
  if (i) {
    if (!Il(e, t, n)) return false;
  } else if (!Ll(e, t, n)) return false;
  return n === r || a ? true : e.charCodeAt(n) === o;
}
function dn(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function Dl(e) {
  const t = Ot(e);
  return N ? e.length > 3 ? false : Rl(t) && (e.length === 2 || t.charCodeAt(2) === 92) : t === W.sep;
}
function Rl(e, t = N) {
  return t ? dn(e.charCodeAt(0)) && e.charCodeAt(1) === 58 : false;
}
var Tl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", Al = "BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";
function Pl(e, t, i = 8) {
  let s = "";
  for (let n = 0; n < i; n++) {
    let o;
    n === 0 && N && !t && (i === 3 || i === 4) ? o = Al : o = Tl, s += o.charAt(Math.floor(Math.random() * o.length));
  }
  let r;
  return t ? r = `${t}-${s}` : r = s, e ? O(e, r) : r;
}
function Pe(e) {
  return Ei(e, true);
}
var ps = class {
  constructor(e) {
    this._ignorePathCasing = e;
  }
  compare(e, t, i = false) {
    return e === t ? 0 : us(this.getComparisonKey(e, i), this.getComparisonKey(t, i));
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
      if (e.scheme === se.file) return _s(Pe(e), Pe(t), this._ignorePathCasing(e)) && e.query === t.query && (i || e.fragment === t.fragment);
      if (fn(e.authority, t.authority)) return _s(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (i || e.fragment === t.fragment);
    }
    return false;
  }
  joinPath(e, ...t) {
    return H.joinPath(e, ...t);
  }
  basenameOrAuthority(e) {
    return Ml(e) || e.authority;
  }
  basename(e) {
    return W.basename(e.path);
  }
  extname(e) {
    return W.extname(e.path);
  }
  dirname(e) {
    if (e.path.length === 0) return e;
    let t;
    return e.scheme === se.file ? t = H.file(Ut(Pe(e))).path : (t = W.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
  }
  normalizePath(e) {
    if (!e.path.length) return e;
    let t;
    return e.scheme === se.file ? t = H.file(Ot(Pe(e))).path : t = W.normalize(e.path), e.with({ path: t });
  }
  relativePath(e, t) {
    if (e.scheme !== t.scheme || !fn(e.authority, t.authority)) return;
    if (e.scheme === se.file) {
      const r = C1(Pe(e), Pe(t));
      return N ? hn(r) : r;
    }
    let i = e.path || "/";
    const s = t.path || "/";
    if (this._ignorePathCasing(e)) {
      let r = 0;
      for (const n = Math.min(i.length, s.length); r < n && !(i.charCodeAt(r) !== s.charCodeAt(r) && i.charAt(r).toLowerCase() !== s.charAt(r).toLowerCase()); r++) ;
      i = s.substr(0, r) + i.substr(r);
    }
    return W.relative(i, s);
  }
  resolvePath(e, t) {
    if (e.scheme === se.file) {
      const i = H.file(gi(Pe(e), t));
      return e.with({ authority: i.authority, path: i.path });
    }
    return t = xl(t), e.with({ path: W.resolve(e.path, t) });
  }
  isAbsolutePath(e) {
    return !!e.path && e.path[0] === "/";
  }
  isEqualAuthority(e, t) {
    return e === t || e !== void 0 && t !== void 0 && Q1(e, t);
  }
  hasTrailingPathSeparator(e, t = yi) {
    if (e.scheme === se.file) {
      const i = Pe(e);
      return i.length > un(i).length && i[i.length - 1] === t;
    } else {
      const i = e.path;
      return i.length > 1 && i.charCodeAt(i.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
    }
  }
  removeTrailingPathSeparator(e, t = yi) {
    return _n(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
  }
  addTrailingPathSeparator(e, t = yi) {
    let i = false;
    if (e.scheme === se.file) {
      const s = Pe(e);
      i = s !== void 0 && s.length === un(s).length && s[s.length - 1] === t;
    } else {
      t = "/";
      const s = e.path;
      i = s.length === 1 && s.charCodeAt(s.length - 1) === 47;
    }
    return !i && !_n(e, t) ? e.with({ path: e.path + "/" }) : e;
  }
}, $ = new ps(() => false), Cl = new ps((e) => e.scheme === se.file ? !pt : true), Bu = new ps((e) => true), $u = $.isEqual.bind($), Hu = $.isEqualOrParent.bind($), qu = $.getComparisonKey.bind($), Wu = $.basenameOrAuthority.bind($), Ml = $.basename.bind($), Gu = $.extname.bind($), zu = $.dirname.bind($), ke = $.joinPath.bind($), Vu = $.normalizePath.bind($), Ku = $.relativePath.bind($), ju = $.resolvePath.bind($), Xu = $.isAbsolutePath.bind($), fn = $.isEqualAuthority.bind($), _n = $.hasTrailingPathSeparator.bind($), Yu = $.removeTrailingPathSeparator.bind($), Qu = $.addTrailingPathSeparator.bind($), pn;
((e) => {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(i) {
    const s = /* @__PURE__ */ new Map();
    i.path.substring(i.path.indexOf(";") + 1, i.path.lastIndexOf(";")).split(";").forEach((o) => {
      const [a, l] = o.split(":");
      a && l && s.set(a, l);
    });
    const n = i.path.substring(0, i.path.indexOf(";"));
    return n && s.set(e.META_DATA_MIME, n), s;
  }
  e.parseMetaData = t;
})(pn || (pn = {})), p();
var Ju = /* @__PURE__ */ Symbol("MicrotaskDelay");
function ms(e) {
  const t = new hs(), i = e(t.token);
  let s = false;
  const r = new Promise((n, o) => {
    const a = t.token.onCancellationRequested(() => {
      s = true, a.dispose(), o(new $e());
    });
    Promise.resolve(i).then((l) => {
      a.dispose(), t.dispose(), s ? Va(l) && l.dispose() : n(l);
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
var Ol = class {
  constructor() {
    this._isOpen = false, this._promise = new Promise((e, t) => {
      this._completePromise = e;
    });
  }
  isOpen() {
    return this._isOpen;
  }
  open() {
    this._isOpen = true, this._completePromise(true);
  }
  wait() {
    return this._promise;
  }
}, Ul = class extends Ol {
  constructor(e) {
    super(), this._timeout = setTimeout(() => this.open(), e);
  }
  open() {
    clearTimeout(this._timeout), super.open();
  }
};
function ze(e, t) {
  return t ? new Promise((i, s) => {
    const r = setTimeout(() => {
      n.dispose(), i();
    }, e), n = t.onCancellationRequested(() => {
      clearTimeout(r), n.dispose(), s(new $e());
    });
  }) : ms((i) => ze(e, i));
}
function mn(e, t = 0, i) {
  const s = setTimeout(() => {
    e(), i && r.dispose();
  }, t), r = _e(() => {
    clearTimeout(s), i?.delete(r);
  });
  return i?.add(r), r;
}
var Nl = class {
  constructor(e) {
    this._size = 0, this._isDisposed = false, this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onDrained = new k();
  }
  whenIdle() {
    return this.size > 0 ? Z.toPromise(this.onDrained) : Promise.resolve();
  }
  get onDrained() {
    return this._onDrained.event;
  }
  get size() {
    return this._size;
  }
  queue(e) {
    if (this._isDisposed) throw new Error("Object has been disposed");
    return this._size++, new Promise((t, i) => {
      this.outstandingPromises.push({ factory: e, c: t, e: i }), this.consume();
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
}, gn = class extends Nl {
  constructor() {
    super(1);
  }
}, Fl = class {
  constructor() {
    this.queues = /* @__PURE__ */ new Map(), this.drainers = /* @__PURE__ */ new Set(), this.drainListeners = void 0, this.drainListenerCount = 0, this._isDisposed = false;
  }
  async whenDrained() {
    if (this.isDrained()) return;
    const e = new $l();
    return this.drainers.add(e), e.p;
  }
  isDrained() {
    for (const [, e] of this.queues) if (e.size > 0) return false;
    return true;
  }
  queueSize(e, t = $) {
    const i = t.getComparisonKey(e);
    return this.queues.get(i)?.size ?? 0;
  }
  queueFor(e, t, i = $) {
    if (this._isDisposed) return t();
    const s = i.getComparisonKey(e);
    let r = this.queues.get(s);
    if (!r) {
      r = new gn();
      const n = this.drainListenerCount++, o = Z.once(r.onDrained)(() => {
        r?.dispose(), this.queues.delete(s), this.onDidQueueDrain(), this.drainListeners?.deleteAndDispose(n), this.drainListeners?.size === 0 && (this.drainListeners.dispose(), this.drainListeners = void 0);
      });
      this.drainListeners || (this.drainListeners = new Xa()), this.drainListeners.set(n, o), this.queues.set(s, r);
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
}, gs = class {
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
}, vn = class {
  constructor(e, t) {
    t % 1e3 !== 0 && console.warn(`ProcessTimeRunOnceScheduler resolution is 1s, ${t}ms is not a multiple of 1000ms.`), this.runner = e, this.timeout = t, this.counter = 0, this.intervalToken = -1, this.intervalHandler = this.onInterval.bind(this);
  }
  dispose() {
    this.cancel(), this.runner = null;
  }
  cancel() {
    this.isScheduled() && (clearInterval(this.intervalToken), this.intervalToken = -1);
  }
  schedule(e = this.timeout) {
    e % 1e3 !== 0 && console.warn(`ProcessTimeRunOnceScheduler resolution is 1s, ${e}ms is not a multiple of 1000ms.`), this.cancel(), this.counter = Math.ceil(e / 1e3), this.intervalToken = setInterval(this.intervalHandler, 1e3);
  }
  isScheduled() {
    return this.intervalToken !== -1;
  }
  onInterval() {
    this.counter--, !(this.counter > 0) && (clearInterval(this.intervalToken), this.intervalToken = -1, this.runner?.());
  }
}, Bl, vs;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? vs = (e, t, i) => {
    b1(() => {
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
  } : vs = (e, t, i) => {
    const s = e.requestIdleCallback(t, typeof i == "number" ? { timeout: i } : void 0);
    let r = false;
    return { dispose() {
      r || (r = true, e.cancelIdleCallback(s));
    } };
  }, Bl = (e, t) => vs(globalThis, e, t);
})();
var $l = class Wo {
  static fromPromise(t) {
    const i = new Wo();
    return i.settleWith(t), i;
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
    this.p = new Promise((t, i) => {
      this.completeCallback = t, this.errorCallback = i;
    });
  }
  complete(t) {
    return new Promise((i) => {
      this.completeCallback(t), this.outcome = { outcome: 0, value: t }, i();
    });
  }
  error(t) {
    return new Promise((i) => {
      this.errorCallback(t), this.outcome = { outcome: 1, value: t }, i();
    });
  }
  settleWith(t) {
    return t.then((i) => this.complete(i), (i) => this.error(i));
  }
  cancel() {
    return this.error(new $e());
  }
}, ys;
((e) => {
  async function t(s) {
    let r;
    const n = await Promise.all(s.map((o) => o.then((a) => a, (a) => {
      r || (r = a);
    })));
    if (typeof r < "u") throw r;
    return n;
  }
  e.settled = t;
  function i(s) {
    return new Promise(async (r, n) => {
      try {
        await s(r, n);
      } catch (o) {
        n(o);
      }
    });
  }
  e.withAsyncBody = i;
})(ys || (ys = {}));
var yn = class we {
  static fromArray(t) {
    return new we((i) => {
      i.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new we(async (i) => {
      i.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new we(async (i) => {
      await Promise.all(t.map(async (s) => i.emitOne(await s)));
    });
  }
  static merge(t) {
    return new we(async (i) => {
      await Promise.all(t.map(async (s) => {
        for await (const r of s) i.emitOne(r);
      }));
    });
  }
  constructor(t, i) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = i, this._onStateChanged = new k(), queueMicrotask(async () => {
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
        await Z.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(t, i) {
    return new we(async (s) => {
      for await (const r of t) s.emitOne(i(r));
    });
  }
  map(t) {
    return we.map(this, t);
  }
  static filter(t, i) {
    return new we(async (s) => {
      for await (const r of t) i(r) && s.emitOne(r);
    });
  }
  filter(t) {
    return we.filter(this, t);
  }
  static coalesce(t) {
    return we.filter(t, (i) => !!i);
  }
  coalesce() {
    return we.coalesce(this);
  }
  static async toPromise(t) {
    const i = [];
    for await (const s of t) i.push(s);
    return i;
  }
  toPromise() {
    return we.toPromise(this);
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
yn.EMPTY = yn.fromArray([]), p(), p();
function wn(e) {
  return (t, i, s) => {
    let r = null, n = null;
    if (typeof s.value == "function" ? (r = "value", n = s.value) : typeof s.get == "function" && (r = "get", n = s.get), !n || typeof i == "symbol") throw new Error("not supported");
    s[r] = e(n, i);
  };
}
function q(e, t, i) {
  let s = null, r = null;
  if (typeof i.value == "function" ? (s = "value", r = i.value, r.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof i.get == "function" && (s = "get", r = i.get), !r) throw new Error("not supported");
  const n = `$memoize$${t}`;
  i[s] = function(...o) {
    return this.hasOwnProperty(n) || Object.defineProperty(this, n, { configurable: false, enumerable: false, writable: false, value: r.apply(this, o) }), this[n];
  };
}
function bn(e, t, i) {
  return wn((s, r) => {
    const n = `$debounce$${r}`, o = `$debounce$result$${r}`;
    return function(...a) {
      this[o] || (this[o] = i ? i() : void 0), clearTimeout(this[n]), t && (this[o] = t(this[o], ...a), a = [this[o]]), this[n] = setTimeout(() => {
        s.apply(this, a), this[o] = i ? i() : void 0;
      }, e);
    };
  });
}
function Hl(e, t, i) {
  return wn((s, r) => {
    const n = `$throttle$timer$${r}`, o = `$throttle$result$${r}`, a = `$throttle$lastRun$${r}`, l = `$throttle$pending$${r}`;
    return function(...c) {
      if (this[o] || (this[o] = i ? i() : void 0), (this[a] === null || this[a] === void 0) && (this[a] = -Number.MAX_VALUE), t && (this[o] = t(this[o], ...c)), this[l]) return;
      const h = this[a] + e;
      h <= Date.now() ? (this[a] = Date.now(), s.apply(this, [this[o]]), this[o] = i ? i() : void 0) : (this[l] = true, this[n] = setTimeout(() => {
        this[l] = false, this[a] = Date.now(), s.apply(this, [this[o]]), this[o] = i ? i() : void 0;
      }, h - Date.now()));
    };
  });
}
p();
var ql = Object.prototype.hasOwnProperty;
function ki(e, t = 0) {
  if (typeof e != "object" || e === null || t > 200) return e;
  switch (e.$mid) {
    case 1:
      return H.revive(e);
    case 2:
      return new RegExp(e.source, e.flags);
    case 17:
      return new Date(e.source);
  }
  if (Array.isArray(e)) for (let i = 0; i < e.length; ++i) {
    const s = e[i];
    if (s !== null && typeof s == "object") {
      const r = ki(s, t + 1);
      r !== s && (e[i] = r);
    }
  }
  else {
    if (e instanceof de || e instanceof Uint8Array) return e;
    for (const i in e) if (ql.call(e, i)) {
      const s = e[i];
      if (s !== null && typeof s == "object") {
        const r = ki(s, t + 1);
        r !== s && (e[i] = r);
      }
    }
  }
  return e;
}
var En = 50, Sn = false, kn;
function Ze(e) {
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
function $t(e) {
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
function et(e) {
  let t = 0;
  for (let i = 0; ; i += 7) {
    const s = e.readUInt8();
    if (t |= (s & 127) << i, !(s & 128)) return t;
  }
}
function tt(e, t) {
  if (t === 0) {
    e.writeUInt8(0);
    return;
  }
  do {
    let i = t & 127;
    t = t >>> 7, t > 0 && (i |= 128), e.writeUInt8(i);
  } while (t !== 0);
}
var ws = class {
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
}, xn = 4 * 1024, Wl = 512 * 1024, Gl = 64 * 1024, Ht, Ln = de.alloc(0), In = class {
  constructor() {
    this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0, Ht ? (this.data = Ht, Ht = void 0) : this.data = de.alloc(xn);
  }
  get buffer() {
    if (!this.fragments) {
      const e = de.alloc(this.length);
      return e.set(this.data.slice(0, this.length), 0), e;
    }
    return this.flushSegment(), de.concat(this.fragments, this.totalLength);
  }
  ensureCapacity(e) {
    const t = this.length + e;
    if (t <= this.data.byteLength) return;
    let i = Math.max(this.data.byteLength * 2, xn);
    for (; i < t; ) i *= 2;
    const s = de.alloc(i);
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
    if (e.byteLength < Gl) {
      this.write(e);
      return;
    }
    this.fragments || (this.fragments = []), this.flushSegment(), this.fragments.push(e), this.totalLength += e.byteLength;
  }
  dispose() {
    !Ht && this.data.byteLength <= Wl && this.data !== Ln && (Ht = this.data), this.data = Ln, this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0;
  }
}, Dn = typeof Buffer < "u", zl = 64 * 1024, Vl = 8;
function Kl(e) {
  return !(e === null || typeof e != "object" || Array.isArray(e) || e instanceof de || e instanceof Uint8Array || Dn && Buffer.isBuffer(e));
}
function jl(e) {
  if (e.length < Vl) return false;
  for (let t = 0; t < e.length; t++) if (!Kl(e[t])) return false;
  return true;
}
function bs(e, t) {
  if (t.length >= zl) {
    const i = de.fromString(t);
    tt(e, i.byteLength), e.writeReference(i);
    return;
  }
  de.withPooledString(t, (i) => {
    tt(e, i.byteLength), e.write(i);
  });
}
function qt(e, t) {
  if (typeof t > "u") e.writeUInt8(0);
  else if (typeof t == "string") e.writeUInt8(1), bs(e, t);
  else if (Dn && Buffer.isBuffer(t)) e.writeUInt8(2), tt(e, t.byteLength), e.writeReference(de.wrap(t));
  else if (t instanceof de) e.writeUInt8(3), tt(e, t.byteLength), e.writeReference(t);
  else if (Array.isArray(t)) {
    if (jl(t)) {
      const i = JSON.stringify(t);
      e.writeUInt8(5), bs(e, i);
      return;
    }
    e.writeUInt8(4), tt(e, t.length);
    for (const i of t) qt(e, i);
  } else if (typeof t == "number" && (t | 0) === t) e.writeUInt8(6), tt(e, t);
  else if (t instanceof Uint8Array) e.writeUInt8(7), tt(e, t.length), e.writeReference(de.wrap(t));
  else {
    const i = JSON.stringify(t);
    e.writeUInt8(5), bs(e, i);
  }
}
function yt(e) {
  switch (e.readUInt8()) {
    case 0:
      return;
    case 1:
      return e.read(et(e)).toString();
    case 2:
      return e.read(et(e)).buffer;
    case 3:
      return e.read(et(e));
    case 7:
      return e.read(et(e)).buffer;
    case 4: {
      const i = et(e), s = [];
      for (let r = 0; r < i; r++) s.push(yt(e));
      return s;
    }
    case 5:
      return JSON.parse(e.read(et(e)).toString());
    case 6:
      return et(e);
  }
}
var Rn = class {
  constructor(e, t, i = null, s = 1e3) {
    this.protocol = e, this.ctx = t, this.logger = i, this.timeoutDelay = s, this.channels = /* @__PURE__ */ new Map(), this.activeRequests = /* @__PURE__ */ new Map(), this.protocolListener = new Xe(), this.pendingRequests = /* @__PURE__ */ new Map(), this.protocolListener.value = this.protocol.onMessage((r) => this.onRawMessage(r)), this.sendResponse({ type: 200 });
  }
  registerChannel(e, t) {
    this.channels.set(e, t), setTimeout(() => this.flushPendingRequests(e), 0);
  }
  sendResponse(e) {
    switch (e.type) {
      case 200: {
        const t = this.send([e.type]);
        this.logger?.logOutgoing(t, 0, 1, $t(e.type));
        return;
      }
      case 201:
      case 202:
      case 204:
      case 203: {
        const t = this.send([e.type, e.id], e.data);
        this.logger?.logOutgoing(t, e.id, 1, $t(e.type), e.data);
        return;
      }
    }
  }
  send(e, t = void 0) {
    const i = new In();
    try {
      return qt(i, e), qt(i, t), this.sendBuffer(i.buffer);
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
    const t = new ws(e), i = Sn, s = i ? performance.now() : 0, r = yt(t), n = r[0];
    if (n !== 100 && n !== 101 && n !== 102 && n !== 103) return;
    const o = yt(t);
    if (i) {
      const a = performance.now() - s;
      a > En && kn?.({ durationMs: a, byteLength: e.byteLength, requestId: r[1] ?? 0, channelName: r[2], command: r[3], messageType: Ze(n) });
    }
    switch (n) {
      case 100:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${Ze(n)}: ${r[2]}.${r[3]}`, o), this.onPromise({ type: n, id: r[1], channelName: r[2], name: r[3], arg: o });
      case 102:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${Ze(n)}: ${r[2]}.${r[3]}`, o), this.onEventListen({ type: n, id: r[1], channelName: r[2], name: r[3], arg: o });
      case 101:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${Ze(n)}`), this.disposeActiveRequest({ type: n, id: r[1] });
      case 103:
        return this.logger?.logIncoming(e.byteLength, r[1], 1, `${Ze(n)}`), this.disposeActiveRequest({ type: n, id: r[1] });
    }
  }
  onPromise(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const i = new hs();
    let s;
    try {
      s = t.call(this.ctx, e.name, e.arg, i.token);
    } catch (o) {
      s = Promise.reject(o);
    }
    const r = e.id;
    s.then((o) => {
      this.sendResponse({ id: r, data: o, type: 201 });
    }, (o) => {
      o instanceof Error ? this.sendResponse({ id: r, data: { message: o.message, name: o.name, stack: o.stack ? o.stack.split(`
`) : void 0 }, type: 202 }) : this.sendResponse({ id: r, data: o, type: 203 });
    }).finally(() => {
      n.dispose(), this.activeRequests.delete(e.id);
    });
    const n = _e(() => i.cancel());
    this.activeRequests.set(e.id, n);
  }
  onEventListen(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const i = e.id, r = t.listen(this.ctx, e.name, e.arg)((n) => this.sendResponse({ id: i, data: n, type: 204 }));
    this.activeRequests.set(e.id, r);
  }
  disposeActiveRequest(e) {
    const t = this.activeRequests.get(e.id);
    t && (t.dispose(), this.activeRequests.delete(e.id));
  }
  collectPendingRequest(e) {
    let t = this.pendingRequests.get(e.channelName);
    t || (t = [], this.pendingRequests.set(e.channelName, t));
    const i = mn(() => {
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
    this.protocolListener.dispose(), je(this.activeRequests.values()), this.activeRequests.clear();
    for (const e of this.pendingRequests.values()) je(e.map((t) => t.timeoutTimer));
    this.pendingRequests.clear();
  }
}, Tn = class {
  constructor(e, t = null) {
    this.protocol = e, this.isDisposed = false, this.state = 0, this.activeRequests = new Ee(), this.handlers = /* @__PURE__ */ new Map(), this.lastRequestId = 0, this.protocolListener = new Xe(), this._pendingRPCDetails = /* @__PURE__ */ new Map(), this._onDidInitialize = new k(), this.onDidInitialize = this._onDidInitialize.event, this.initializeListener = new Ee(), this.protocolListener.value = this.protocol.onMessage((i) => this.onBuffer(i)), this.logger = t;
  }
  getChannel(e) {
    const t = this;
    return { call(i, s, r) {
      return t.isDisposed ? Promise.reject(new $e()) : t.requestPromise(e, i, s, r);
    }, listen(i, s) {
      return t.isDisposed ? Z.None : t.requestEvent(e, i, s);
    } };
  }
  requestPromise(e, t, i, s = Nt.None) {
    const r = this.lastRequestId++, o = { id: r, type: 100, channelName: e, name: t, arg: i };
    if (s.isCancellationRequested) return Promise.reject(new $e());
    let a, l;
    return new Promise((h, u) => {
      if (s.isCancellationRequested) return u(new $e());
      const d = () => {
        const E = (g) => {
          switch (g.type) {
            case 201:
              this.handlers.delete(r), this._pendingRPCDetails.delete(r), h(g.data);
              break;
            case 202: {
              this.handlers.delete(r), this._pendingRPCDetails.delete(r);
              const y = new Error(g.data.message);
              y.stack = Array.isArray(g.data.stack) ? g.data.stack.join(`
`) : g.data.stack, y.name = g.data.name, u(y);
              break;
            }
            case 203:
              this.handlers.delete(r), this._pendingRPCDetails.delete(r), u(g.data);
              break;
          }
        };
        this.handlers.set(r, E), this._pendingRPCDetails.set(r, { channelName: e, command: t });
        try {
          this.sendRequest(o);
        } catch (g) {
          this.handlers.delete(r), this._pendingRPCDetails.delete(r), u(g);
        }
      };
      let f = null;
      this.state === 1 ? d() : (f = ms((E) => this.whenInitialized()), f.then(() => {
        f = null, d();
      }, () => {
      }));
      const _ = () => {
        f ? (f.cancel(), f = null) : this.sendRequest({ id: r, type: 101 }), u(new $e());
      };
      a = s.onCancellationRequested(_), l = { dispose: Yi(() => {
        _(), a.dispose();
      }) }, this.activeRequests.add(l);
    }).finally(() => {
      a?.dispose(), this.activeRequests.deleteAndLeak(l), xr(l);
    });
  }
  requestEvent(e, t, i) {
    const s = this.lastRequestId++, n = { id: s, type: 102, channelName: e, name: t, arg: i };
    let o = null;
    const a = new k({ onWillAddFirstListener: () => {
      if (this.isDisposed) return;
      const l = (h) => a.fire(h.data);
      this.handlers.set(s, l);
      const c = () => {
        this.activeRequests.add(a), this._pendingRPCDetails.set(s, { channelName: e, command: t }), this.sendRequest(n);
      };
      this.state === 1 ? c() : (o = ms((h) => this.whenInitialized()), o.then(() => {
        o = null, c();
      }, () => {
      }));
    }, onDidRemoveLastListener: () => {
      const l = this.handlers.delete(s);
      o ? (o.cancel(), o = null) : l && (this.activeRequests.deleteAndLeak(a), xr(a), this._pendingRPCDetails.delete(s), this.sendRequest({ id: s, type: 103 }));
    } });
    return a.event;
  }
  sendRequest(e) {
    switch (e.type) {
      case 100:
      case 102: {
        const t = this.send([e.type, e.id, e.channelName, e.name], e.arg);
        this.logger?.logOutgoing(t, e.id, 0, `${Ze(e.type)}: ${e.channelName}.${e.name}`, e.arg);
        return;
      }
      case 101:
      case 103: {
        const t = this.send([e.type, e.id]);
        this.logger?.logOutgoing(t, e.id, 0, Ze(e.type));
        return;
      }
    }
  }
  send(e, t = void 0) {
    const i = new In();
    try {
      return qt(i, e), qt(i, t), this.sendBuffer(i.buffer);
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
    const t = new ws(e), i = Sn, s = i ? performance.now() : 0, r = yt(t), n = r[0];
    if (n !== 200 && n !== 201 && n !== 202 && n !== 203 && n !== 204) return;
    const o = yt(t);
    if (i) {
      const a = performance.now() - s;
      if (a > En) {
        const l = r[1] ?? 0, c = this._pendingRPCDetails.get(l);
        kn?.({ durationMs: a, byteLength: e.byteLength, requestId: l, channelName: c?.channelName, command: c?.command, messageType: $t(n) });
      }
    }
    switch (n) {
      case 200:
        return this.logger?.logIncoming(e.byteLength, 0, 0, $t(n)), this.onResponse({ type: r[0] });
      case 201:
      case 202:
      case 204:
      case 203:
        return this.logger?.logIncoming(e.byteLength, r[1], 0, $t(n), o), this.onResponse({ type: r[0], id: r[1], data: o });
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
    return Z.toPromise(this.onDidInitialize, this.initializeListener);
  }
  whenInitialized() {
    return this.state === 1 ? Promise.resolve() : this.onDidInitializePromise;
  }
  dispose() {
    this.isDisposed = true, this.protocolListener.dispose(), this.activeRequests.dispose(), this._pendingRPCDetails.clear(), this.handlers.clear(), this.initializeListener.dispose(), this._onDidInitialize.dispose();
  }
};
v([q], Tn.prototype, "onDidInitializePromise", null);
var Xl = class {
  constructor(e, t, i) {
    this.channels = /* @__PURE__ */ new Map(), this._connections = /* @__PURE__ */ new Set(), this._onDidAddConnection = new k(), this.onDidAddConnection = this._onDidAddConnection.event, this._onDidRemoveConnection = new k(), this.onDidRemoveConnection = this._onDidRemoveConnection.event, this.disposables = new Ee(), this.disposables.add(e(({ protocol: s, onDidClientDisconnect: r }) => {
      const n = Z.once(s.onMessage), o = new Ee(), a = n((l) => {
        const c = new ws(l), h = yt(c), u = new Rn(s, h, t, i), d = new Tn(s, t);
        this.channels.forEach((_, E) => u.registerChannel(E, _));
        const f = { channelServer: u, channelClient: d, ctx: h };
        this._connections.add(f), this._onDidAddConnection.fire(f), o.add(r(() => {
          u.dispose(), d.dispose(), this._connections.delete(f), this._onDidRemoveConnection.fire(f), this.disposables.delete(o), o.dispose();
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
    const i = this;
    return { call(s, r, n) {
      let o;
      if (Ji(t)) {
        const l = La(i.connections.filter(t));
        o = l ? Promise.resolve(l) : Z.toPromise(Z.filter(i.onDidAddConnection, t));
      } else o = t.routeCall(i, s, r);
      const a = o.then((l) => l.channelClient.getChannel(e));
      return An(a).call(s, r, n);
    }, listen(s, r) {
      if (Ji(t)) return i.getMulticastEvent(e, t, s, r);
      const n = t.routeEvent(i, s, r).then((o) => o.channelClient.getChannel(e));
      return An(n).listen(s, r);
    } };
  }
  getMulticastEvent(e, t, i, s) {
    const r = this;
    let n;
    const o = new k({ onWillAddFirstListener: () => {
      n = new Ee();
      const a = new z1(), l = /* @__PURE__ */ new Map(), c = (u) => {
        const f = u.channelClient.getChannel(e).listen(i, s), _ = a.add(f);
        l.set(u, _);
      }, h = (u) => {
        const d = l.get(u);
        d && (d.dispose(), l.delete(u));
      };
      r.connections.filter(t).forEach(c), Z.filter(r.onDidAddConnection, t)(c, void 0, n), r.onDidRemoveConnection(h, void 0, n), a.event(o.fire, o, n), n.add(a);
    }, onDidRemoveLastListener: () => {
      n?.dispose(), n = void 0;
    } });
    return r.disposables.add(o), o.event;
  }
  registerChannel(e, t) {
    this.channels.set(e, t);
    for (const i of this._connections) i.channelServer.registerChannel(e, t);
  }
  dispose() {
    this.disposables.dispose();
    for (const e of this._connections) e.channelClient.dispose(), e.channelServer.dispose();
    this._connections.clear(), this.channels.clear(), this._onDidAddConnection.dispose(), this._onDidRemoveConnection.dispose();
  }
};
function An(e) {
  return { call(t, i, s) {
    return e.then((r) => r.call(t, i, s));
  }, listen(t, i) {
    const s = new V1();
    return e.then((r) => s.input = r.listen(t, i)), s.event;
  } };
}
var xi;
((e) => {
  const t = () => {
  };
  function i(o, a, l) {
    const c = o, h = l && l.disableMarshalling, u = (f) => {
      const _ = c[f];
      return l?.disableEventBuffering ? _ : Z.buffer(_, true, void 0, a);
    }, d = /* @__PURE__ */ new Map();
    for (const f in c) r(f) && d.set(f, u(f));
    return new class {
      listen(f, _, E) {
        const g = d.get(_);
        if (g) return g;
        const y = c[_];
        if (typeof y == "function") {
          if (n(_)) return y.call(c, E);
          if (r(_)) return d.set(_, u(_)), d.get(_);
        }
        throw new ut(`Event not found: ${_}`);
      }
      call(f, _, E) {
        const g = c[_];
        if (typeof g == "function") {
          if (!h && Array.isArray(E)) for (let R = 0; R < E.length; R++) E[R] = ki(E[R]);
          let y = g.apply(c, E);
          return y instanceof Promise || (y = Promise.resolve(y)), y;
        }
        throw new ut(`Method not found: ${_}`);
      }
    }();
  }
  e.fromService = i;
  function s(o, a) {
    const l = a && a.disableMarshalling;
    return new Proxy({}, { get(c, h) {
      if (typeof h != "symbol") {
        if (typeof h == "string") return a?.properties?.has(h) ? a.properties.get(h) : h === "dispose" ? t : n(h) ? function(u) {
          return o.listen(h, u);
        } : r(h) ? o.listen(h) : async function(...u) {
          let d;
          a && !Ba(a.context) ? d = [a.context, ...u] : d = u;
          const f = await o.call(h, d);
          return l ? f : ki(f);
        };
        throw new ut(`Property not found: ${String(h)}`);
      }
    } });
  }
  e.toService = s;
  function r(o) {
    return o[0] === "o" && o[1] === "n" && en(o.charCodeAt(2));
  }
  function n(o) {
    return /^onDynamic/.test(o) && en(o.charCodeAt(9));
  }
})(xi || (xi = {})), p();
import "child_process";
p(), p();
function Li(e, t) {
  if (e === t) return true;
  if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t)) return false;
  let i, s;
  if (Array.isArray(e)) {
    if (e.length !== t.length) return false;
    for (i = 0; i < e.length; i++) if (!Li(e[i], t[i])) return false;
  } else {
    const r = [];
    for (s in e) r.push(s);
    r.sort();
    const n = [];
    for (s in t) n.push(s);
    if (n.sort(), !Li(r, n)) return false;
    for (i = 0; i < r.length; i++) if (!Li(e[r[i]], t[r[i]])) return false;
  }
  return true;
}
function Pn(e, t) {
  const i = t.toLowerCase(), s = Object.keys(e).find((r) => r.toLowerCase() === i);
  return s ? e[s] : e[t];
}
p();
import { promises as Cn } from "fs";
p(), p();
import * as K from "fs";
import { tmpdir as Yl } from "os";
import { promisify as Wt } from "util";
p();
var Ql = new Er(1e4);
function Mn(e) {
  return Zl(e, "NFC", Ql);
}
var r0 = new Er(1e4), Jl = /[^\u0000-\u0080]/;
function Zl(e, t, i) {
  if (!e) return e;
  const s = i.get(e);
  if (s) return s;
  let r;
  return Jl.test(e) ? r = e.normalize(t) : r = e, i.set(e, r), r;
}
async function On(e, t = 0, i) {
  if (Dl(e)) throw new Error("rimraf - will refuse to recursively delete root");
  return t === 0 ? Es(e) : ec(e, i);
}
async function ec(e, t = Pl(Yl())) {
  try {
    try {
      await K.promises.rename(e, t);
    } catch (i) {
      return i.code === "ENOENT" ? void 0 : Es(e);
    }
    Es(t).catch((i) => {
    });
  } catch (i) {
    if (i.code !== "ENOENT") throw i;
  }
}
async function Es(e) {
  return K.promises.rm(e, { recursive: true, force: true, maxRetries: 3 });
}
async function Ii(e, t) {
  return ic(await (t ? tc(e) : K.promises.readdir(e)));
}
async function tc(e) {
  try {
    return await K.promises.readdir(e, { withFileTypes: true });
  } catch (s) {
    console.warn("[node.js fs] readdir with filetypes failed with error: ", s);
  }
  const t = [], i = await Ii(e);
  for (const s of i) {
    let r = false, n = false, o = false;
    try {
      const a = await K.promises.lstat(O(e, s));
      r = a.isFile(), n = a.isDirectory(), o = a.isSymbolicLink();
    } catch (a) {
      console.warn("[node.js fs] unexpected error from lstat after readdir: ", a);
    }
    t.push({ name: s, isFile: () => r, isDirectory: () => n, isSymbolicLink: () => o });
  }
  return t;
}
function ic(e) {
  return e.map((t) => typeof t == "string" ? qe ? Mn(t) : t : (t.name = qe ? Mn(t.name) : t.name, t));
}
async function sc(e) {
  const t = await Ii(e), i = [];
  for (const s of t) await Ce.existsDirectory(O(e, s)) && i.push(s);
  return i;
}
var Ce;
((e) => {
  async function t(r) {
    let n;
    try {
      if (n = await K.promises.lstat(r), !n.isSymbolicLink()) return { stat: n };
    } catch {
    }
    try {
      return { stat: await K.promises.stat(r), symbolicLink: n?.isSymbolicLink() ? { dangling: false } : void 0 };
    } catch (o) {
      if (o.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: true } };
      if (N && o.code === "EACCES") try {
        return { stat: await K.promises.stat(await K.promises.readlink(r)), symbolicLink: { dangling: false } };
      } catch (a) {
        if (a.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: true } };
        throw a;
      }
      throw o;
    }
  }
  e.stat = t;
  async function i(r) {
    try {
      const { stat: n, symbolicLink: o } = await e.stat(r);
      return n.isFile() && o?.dangling !== true;
    } catch {
    }
    return false;
  }
  e.existsFile = i;
  async function s(r) {
    try {
      const { stat: n, symbolicLink: o } = await e.stat(r);
      return n.isDirectory() && o?.dangling !== true;
    } catch {
    }
    return false;
  }
  e.existsDirectory = s;
})(Ce || (Ce = {}));
var rc = new Fl();
function nc(e, t, i) {
  return rc.queueFor(H.file(e), () => {
    const s = lc(i);
    return new Promise((r, n) => ac(e, t, s, (o) => o ? n(o) : r()));
  }, Cl);
}
var Un = true;
function oc(e) {
  Un = e;
}
function ac(e, t, i, s) {
  if (!Un) return K.writeFile(e, t, { mode: i.mode, flag: i.flag }, s);
  K.open(e, i.flag, i.mode, (r, n) => {
    if (r) return s(r);
    K.writeFile(n, t, (o) => {
      if (o) return K.close(n, () => s(o));
      K.fdatasync(n, (a) => (a && (console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", a), oc(false)), K.close(n, (l) => s(l))));
    });
  });
}
function lc(e) {
  return e ? { mode: typeof e.mode == "number" ? e.mode : 438, flag: typeof e.flag == "string" ? e.flag : "w" } : { mode: 438, flag: "w" };
}
async function cc(e, t, i = 6e4) {
  if (e !== t) try {
    N && typeof i == "number" ? await Nn(e, t, Date.now(), i) : await K.promises.rename(e, t);
  } catch (s) {
    if (e.toLowerCase() !== t.toLowerCase() && s.code === "EXDEV" || e.endsWith(".")) await Fn(e, t, { preserveSymlinks: false }), await On(e, 1);
    else throw s;
  }
}
async function Nn(e, t, i, s, r = 0) {
  try {
    return await K.promises.rename(e, t);
  } catch (n) {
    if (n.code !== "EACCES" && n.code !== "EPERM" && n.code !== "EBUSY") throw n;
    if (Date.now() - i >= s) throw console.error(`[node.js fs] rename failed after ${r} retries with error: ${n}`), n;
    if (r === 0) {
      let o = false;
      try {
        const { stat: a } = await Ce.stat(t);
        a.isFile() || (o = true);
      } catch {
      }
      if (o) throw n;
    }
    return await ze(Math.min(100, r * 10)), Nn(e, t, i, s, r + 1);
  }
}
async function Fn(e, t, i) {
  return $n(e, t, { root: { source: e, target: t }, options: i, handledSourcePaths: /* @__PURE__ */ new Set() });
}
var Bn = 511;
async function $n(e, t, i) {
  if (i.handledSourcePaths.has(e)) return;
  i.handledSourcePaths.add(e);
  const { stat: s, symbolicLink: r } = await Ce.stat(e);
  if (r) {
    if (i.options.preserveSymlinks) try {
      return await dc(e, t, i);
    } catch {
    }
    if (r.dangling) return;
  }
  return s.isDirectory() ? hc(e, t, s.mode & Bn, i) : uc(e, t, s.mode & Bn);
}
async function hc(e, t, i, s) {
  await K.promises.mkdir(t, { recursive: true, mode: i });
  const r = await Ii(e);
  for (const n of r) await $n(O(e, n), O(t, n), s);
}
async function uc(e, t, i) {
  await K.promises.copyFile(e, t), await K.promises.chmod(t, i);
}
async function dc(e, t, i) {
  let s = await K.promises.readlink(e);
  _s(s, i.root.source, !pt) && (s = O(i.root.target, s.substr(i.root.source.length + 1))), await K.promises.symlink(s, t);
}
var Ss = new class {
  get read() {
    return (e, t, i, s, r) => new Promise((n, o) => {
      K.read(e, t, i, s, r, (a, l, c) => a ? o(a) : n({ bytesRead: l, buffer: c }));
    });
  }
  get write() {
    return (e, t, i, s, r) => new Promise((n, o) => {
      K.write(e, t, i, s, r, (a, l, c) => a ? o(a) : n({ bytesWritten: l, buffer: c }));
    });
  }
  get fdatasync() {
    return Wt(K.fdatasync);
  }
  get open() {
    return Wt(K.open);
  }
  get close() {
    return Wt(K.close);
  }
  get realpath() {
    return Wt(K.realpath);
  }
  get ftruncate() {
    return Wt(K.ftruncate);
  }
  async exists(e) {
    try {
      return await K.promises.access(e), true;
    } catch {
      return false;
    }
  }
  get readdir() {
    return Ii;
  }
  get readDirsInDir() {
    return sc;
  }
  get writeFile() {
    return nc;
  }
  get rm() {
    return On;
  }
  get rename() {
    return cc;
  }
  get copy() {
    return Fn;
  }
}();
function fc(e = Ie) {
  return e.comspec || "cmd.exe";
}
async function _c(e) {
  if (await Ss.exists(e)) {
    let t;
    try {
      t = await Cn.stat(e);
    } catch (i) {
      i.message.startsWith("EACCES") && (t = await Cn.lstat(e));
    }
    return t ? !t.isDirectory() : false;
  }
  return false;
}
async function pc(e, t, i, s = Ie, r = _c) {
  if (Wr(e)) return await r(e) ? e : void 0;
  if (t === void 0 && (t = Mt()), Ut(e) !== ".") {
    const a = O(t, e);
    return await r(a) ? a : void 0;
  }
  const o = Pn(s, "PATH");
  if (i === void 0 && dt(o) && (i = o.split(Gr)), !(i === void 0 || i.length === 0)) for (const a of i) {
    let l;
    if (Wr(a) ? l = O(a, e) : l = O(t, a, e), N) {
      const h = (Pn(s, "PATHEXT") || ".COM;.EXE;.BAT;.CMD").split(";").map(async (u) => {
        const d = l + u;
        return await r(d) ? d : void 0;
      });
      for (const u of h) {
        const d = await u;
        if (d) return d;
      }
    }
    if (await r(l)) return l;
  }
}
var mc = class extends Rn {
  constructor(e) {
    super({ send: (t) => {
      try {
        process.send?.(t.buffer);
      } catch {
      }
    }, onMessage: Z.fromNodeEventEmitter(process, "message", (t) => {
      if (t instanceof Uint8Array) return de.wrap(t);
      throw new Error("ipc.cp: expected Uint8Array IPC frame from parent");
    }) }, e), process.once("disconnect", () => this.dispose());
  }
};
p(), p();
function Hn(e) {
  return !!e.parentPort;
}
var gc = class {
  constructor(e) {
    this.port = e, this.onMessage = Z.fromNodeEventEmitter(this.port, "message", (t) => t.data ? de.wrap(t.data) : de.alloc(0)), e.start();
  }
  send(e) {
    this.port.postMessage(e.buffer);
  }
  disconnect() {
    this.port.close();
  }
}, vc = class Go extends Xl {
  static getOnDidClientConnect(t) {
    $a(Hn(process), "Electron Utility Process");
    const i = new k();
    return process.parentPort.on("message", (s) => {
      if (t?.handledClientConnection(s)) return;
      const r = s.ports.at(0);
      r && i.fire(r);
    }), Z.map(i.event, (s) => ({ protocol: new gc(s), onDidClientDisconnect: Z.fromNodeEventEmitter(s, "close") }));
  }
  constructor(t) {
    super(Go.getOnDidClientConnect(t));
  }
};
p();
var yc = fa(_a(), 1), n0 = { o: w(1860, null), e: w(1861, null), t: w(1862, null) }, ks = { tunnel: { type: "subcommand", description: "Make the current machine accessible from vscode.dev or other machines through a secure tunnel", options: { "cli-data-dir": { type: "string", args: "dir", description: w(1863, null) }, "disable-telemetry": { type: "boolean" }, "telemetry-level": { type: "string" }, user: { type: "subcommand", options: { login: { type: "subcommand", options: { provider: { type: "string" }, "access-token": { type: "string" } } } } } } }, diff: { type: "boolean", cat: "o", alias: "d", args: ["file", "file"], description: w(1864, null) }, merge: { type: "boolean", cat: "o", alias: "m", args: ["path1", "path2", "base", "result"], description: w(1865, null) }, add: { type: "boolean", cat: "o", alias: "a", args: "folder", description: w(1866, null) }, remove: { type: "boolean", cat: "o", args: "folder", description: w(1867, null) }, goto: { type: "boolean", cat: "o", alias: "g", args: "file:line[:character]", description: w(1868, null) }, "new-window": { type: "boolean", cat: "o", alias: "n", description: w(1869, null) }, "reuse-window": { type: "boolean", cat: "o", alias: "r", description: w(1870, null) }, "suppress-popups-on-startup": { type: "boolean", cat: "o", description: w(1871, null) }, "web-worker-exthost": { type: "boolean", cat: "o", description: w(1872, null) }, glass: { type: "boolean", cat: "o", description: w(1873, null) }, classic: { type: "boolean", cat: "o", description: w(1874, null) }, wait: { type: "boolean", cat: "o", alias: "w", description: w(1875, null) }, waitMarkerFilePath: { type: "string" }, locale: { type: "string", cat: "o", args: "locale", description: w(1876, null) }, "user-data-dir": { type: "string", cat: "o", args: "dir", description: w(1877, null) }, "local-mode-data-import-token": { type: "string" }, profile: { type: "string", cat: "o", args: "profileName", description: w(1878, null) }, help: { type: "boolean", cat: "o", alias: "h", description: w(1879, null) }, "extensions-dir": { type: "string", deprecates: ["extensionHomePath"], cat: "e", args: "dir", description: w(1880, null) }, "extensions-download-dir": { type: "string" }, "builtin-extensions-dir": { type: "string" }, "list-extensions": { type: "boolean", cat: "e", description: w(1881, null) }, "show-versions": { type: "boolean", cat: "e", description: w(1882, null) }, category: { type: "string", allowEmptyValue: true, cat: "e", description: w(1883, null), args: "category" }, "install-extension": { type: "string[]", cat: "e", args: "ext-id | path", description: w(1884, null) }, "pre-release": { type: "boolean", cat: "e", description: w(1885, null) }, "uninstall-extension": { type: "string[]", cat: "e", args: "ext-id", description: w(1886, null) }, "update-extensions": { type: "boolean", cat: "e", description: w(1887, null) }, "enable-proposed-api": { type: "string[]", allowEmptyValue: true, cat: "e", args: "ext-id", description: w(1888, null) }, "add-mcp": { type: "string[]", cat: "o", args: "json", description: w(1889, null) }, version: { type: "boolean", cat: "t", alias: "v", description: w(1890, null) }, verbose: { type: "boolean", cat: "t", global: true, description: w(1891, null) }, log: { type: "string[]", cat: "t", args: "level", global: true, description: w(1892, null) }, status: { type: "boolean", alias: "s", cat: "t", description: w(1893, null) }, "prof-startup": { type: "boolean", cat: "t", description: w(1894, null) }, "prof-append-timers": { type: "string" }, "prof-duration-markers": { type: "string[]" }, "prof-duration-markers-file": { type: "string" }, "no-cached-data": { type: "boolean" }, "prof-startup-prefix": { type: "string" }, "prof-v8-extensions": { type: "boolean" }, "disable-extensions": { type: "boolean", deprecates: ["disableExtensions"], cat: "t", description: w(1895, null) }, "disable-extension": { type: "string[]", cat: "t", args: "ext-id", description: w(1896, null) }, sync: { type: "string", cat: "t", description: w(1897, null), args: ["on | off"] }, "inspect-extensions": { type: "string", allowEmptyValue: true, deprecates: ["debugPluginHost"], args: "port", cat: "t", description: w(1898, null) }, "inspect-brk-extensions": { type: "string", allowEmptyValue: true, deprecates: ["debugBrkPluginHost"], args: "port", cat: "t", description: w(1899, null) }, "disable-lcd-text": { type: "boolean", cat: "t", description: w(1900, null) }, "disable-gpu": { type: "boolean", cat: "t", description: w(1901, null) }, "disable-chromium-sandbox": { type: "boolean", cat: "t", description: w(1902, null) }, sandbox: { type: "boolean" }, "locate-shell-integration-path": { type: "string", cat: "t", args: ["shell"], description: w(1903, null) }, telemetry: { type: "boolean", cat: "t", description: w(1904, null) }, remote: { type: "string", allowEmptyValue: true }, "folder-uri": { type: "string[]", cat: "o", args: "uri" }, "file-uri": { type: "string[]", cat: "o", args: "uri" }, "locate-extension": { type: "string[]" }, extensionDevelopmentPath: { type: "string[]" }, extensionDevelopmentKind: { type: "string[]" }, extensionTestsPath: { type: "string" }, extensionEnvironment: { type: "string" }, debugId: { type: "string" }, debugRenderer: { type: "boolean" }, "inspect-ptyhost": { type: "string", allowEmptyValue: true }, "inspect-brk-ptyhost": { type: "string", allowEmptyValue: true }, "inspect-search": { type: "string", deprecates: ["debugSearch"], allowEmptyValue: true }, "inspect-brk-search": { type: "string", deprecates: ["debugBrkSearch"], allowEmptyValue: true }, "inspect-sharedprocess": { type: "string", allowEmptyValue: true }, "inspect-brk-sharedprocess": { type: "string", allowEmptyValue: true }, "export-default-configuration": { type: "string" }, "install-source": { type: "string" }, "enable-smoke-test-driver": { type: "boolean" }, "telemetry-source": { type: "string" }, "smoke-test-use-real-agent-http": { type: "boolean" }, "smoke-test-nal-stream-timeout-ms": { type: "string" }, "smoke-test-nal-endless-retries": { type: "boolean" }, "smoke-test-nal-retry-delay-ms": { type: "string" }, "debug-slow-window-unload-ms": { type: "string" }, headless: { type: "boolean" }, "test-backend-url": { type: "string" }, "test-feature-flags": { type: "string" }, "test-experiments": { type: "string" }, "test-dynamic-configs": { type: "string" }, "test-layers": { type: "string" }, "test-composer-chat-script": { type: "string" }, logExtensionHostCommunication: { type: "boolean" }, "skip-release-notes": { type: "boolean" }, "skip-welcome": { type: "boolean" }, "skip-onboarding": { type: "boolean" }, "override-cursor-auth-token": { type: "string" }, "disable-telemetry": { type: "boolean" }, "disable-updates": { type: "boolean" }, "agent-harness-trust-dev-key": { type: "boolean" }, "use-inmemory-secretstorage": { type: "boolean", deprecates: ["disable-keytar"] }, "password-store": { type: "string" }, "disable-workspace-trust": { type: "boolean" }, "disable-crash-reporter": { type: "boolean" }, "crash-reporter-directory": { type: "string" }, "crash-reporter-id": { type: "string" }, "skip-add-to-recently-opened": { type: "boolean" }, "open-url": { type: "boolean" }, "file-write": { type: "boolean" }, "file-chmod": { type: "boolean" }, "install-builtin-extension": { type: "string[]" }, force: { type: "boolean" }, "do-not-sync": { type: "boolean" }, "do-not-include-pack-dependencies": { type: "boolean" }, trace: { type: "boolean" }, "trace-memory-infra": { type: "boolean" }, "trace-category-filter": { type: "string" }, "trace-options": { type: "string" }, "preserve-env": { type: "boolean" }, "force-user-env": { type: "boolean" }, "force-disable-user-env": { type: "boolean" }, "open-devtools": { type: "boolean" }, "enable-react-devtools": { type: "boolean" }, "disable-react-devtools": { type: "boolean" }, "react-production-bundles": { type: "boolean" }, "react-performance-tracks": { type: "boolean" }, "shadow-window-for-workspace-id": { type: "string" }, "is-vm-daemon-parallel-process": { type: "boolean" }, "disable-gpu-sandbox": { type: "boolean" }, logsPath: { type: "string" }, "__enable-file-policy": { type: "boolean" }, continueOn: { type: "string" }, "enable-coi": { type: "boolean" }, "unresponsive-sample-interval": { type: "string" }, "unresponsive-sample-period": { type: "string" }, "no-proxy-server": { type: "boolean" }, "no-sandbox": { type: "boolean", alias: "sandbox" }, "proxy-server": { type: "string" }, "proxy-bypass-list": { type: "string" }, "proxy-pac-url": { type: "string" }, "js-flags": { type: "string" }, inspect: { type: "string", allowEmptyValue: true }, "inspect-brk": { type: "string", allowEmptyValue: true }, nolazy: { type: "boolean" }, "force-device-scale-factor": { type: "string" }, "force-renderer-accessibility": { type: "boolean" }, "ignore-certificate-errors": { type: "boolean" }, "allow-insecure-localhost": { type: "boolean" }, "log-net-log": { type: "string" }, vmodule: { type: "string" }, _urls: { type: "string[]" }, "disable-dev-shm-usage": { type: "boolean" }, "profile-temp": { type: "boolean" }, "ozone-platform": { type: "string" }, "enable-tracing": { type: "string" }, "trace-startup-format": { type: "string" }, "trace-startup-file": { type: "string" }, "trace-startup-duration": { type: "string" }, "xdg-portal-required-version": { type: "string" }, hmr: { type: "boolean" }, chat: { type: "boolean", cat: "o", description: w(1905, null) }, _: { type: "string[]" } }, qn = { type: "subcommand", description: "Interact with chat threads in a running Cursor desktop app.", options: { json: { type: "boolean", description: "Machine-readable output" }, force: { type: "boolean", description: "Submit immediately, interrupting a running turn (send)" }, stdin: { type: "boolean", description: "Read message text from stdin (send)" }, help: { type: "boolean", alias: "h", description: "Print usage" }, _: { type: "string[]" } } }, wc = { agent: { type: "subcommand", description: "Start the Cursor agent in your terminal.", options: {} }, desktop: qn }, o0 = { ...ks, ...wc }, a0 = { ...ks, desktop: qn }, bc = { onUnknownOption: () => {
}, onMultipleValues: () => {
}, onEmptyValue: () => {
}, onDeprecatedOption: () => {
} };
function Wn(e, t, i = bc) {
  const s = e.find((d) => d.length > 0 && d[0] !== "-"), r = {}, n = ["_"], o = [], a = {};
  let l;
  for (const d in t) {
    const f = t[d];
    f.type === "subcommand" ? d === s && (l = f) : (f.alias && (r[d] = f.alias), f.type === "string" || f.type === "string[]" ? (n.push(d), f.deprecates && n.push(...f.deprecates)) : f.type === "boolean" && (o.push(d), f.deprecates && o.push(...f.deprecates)), f.global && (a[d] = f));
  }
  if (l && s) {
    const d = a;
    for (const g in l.options) d[g] = l.options[g];
    const f = [...e];
    f.splice(f.indexOf(s), 1);
    const _ = i.getSubcommandReporter ? i.getSubcommandReporter(s) : void 0, E = Wn(f, d, _);
    return { [s]: E, _: [] };
  }
  const c = (0, yc.default)(e, { string: n, boolean: o, alias: r }), h = {}, u = c;
  h._ = c._.map((d) => String(d)).filter((d) => d.length > 0), delete u._;
  for (const d in t) {
    const f = t[d];
    if (f.type === "subcommand") continue;
    f.alias && delete u[f.alias];
    let _ = u[d];
    if (f.deprecates) for (const E of f.deprecates) u.hasOwnProperty(E) && (_ || (_ = u[E], _ && i.onDeprecatedOption(E, f.deprecationMessage || w(1906, null, d))), delete u[E]);
    if (typeof _ < "u") {
      if (f.type === "string[]") {
        if (Array.isArray(_) || (_ = [_]), !f.allowEmptyValue) {
          const E = _.filter((g) => g.length > 0);
          E.length !== _.length && (i.onEmptyValue(d), _ = E.length > 0 ? E : void 0);
        }
      } else f.type === "string" && (Array.isArray(_) ? (_ = _.pop(), i.onMultipleValues(d, _)) : !_ && !f.allowEmptyValue && (i.onEmptyValue(d), _ = void 0));
      h[d] = _, f.deprecationMessage && i.onDeprecatedOption(d, f.deprecationMessage);
    }
    delete u[d];
  }
  for (const d in u) i.onUnknownOption(d);
  return h;
}
p();
import { homedir as Ec, tmpdir as Sc } from "os";
p(), p();
var kc = 60, xc = kc * 60, xs = xc * 24, c0 = xs * 7, h0 = xs * 30, u0 = xs * 365;
function Lc(e) {
  return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0") + "T" + String(e.getHours()).padStart(2, "0") + ":" + String(e.getMinutes()).padStart(2, "0") + ":" + String(e.getSeconds()).padStart(2, "0") + "." + (e.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
}
var Gn = /^([^.]+\..+)[:=](.+)$/, G = class {
  constructor(e, t, i) {
    this._args = e, this.paths = t, this.productService = i;
  }
  get appRoot() {
    return Ut(Bt.asFileUri("").fsPath);
  }
  get userHome() {
    return H.file(this.paths.homeDir);
  }
  get userDataPath() {
    return this.paths.userDataDir;
  }
  get appSettingsHome() {
    return H.file(O(this.userDataPath, "User"));
  }
  get tmpDir() {
    return H.file(this.paths.tmpDir);
  }
  get cacheHome() {
    return H.file(this.userDataPath);
  }
  get stateResource() {
    return ke(this.appSettingsHome, "globalStorage", "storage.json");
  }
  get userRoamingDataHome() {
    return this.appSettingsHome.with({ scheme: se.vscodeUserData });
  }
  get userDataSyncHome() {
    return ke(this.appSettingsHome, "sync");
  }
  get logsHome() {
    if (!this.args.logsPath) {
      const e = Lc(/* @__PURE__ */ new Date()).replace(/-|:|\.\d+Z$/g, "");
      this.args.logsPath = O(this.userDataPath, "logs", e);
    }
    return H.file(this.args.logsPath);
  }
  get sync() {
    return this.args.sync;
  }
  get machineSettingsResource() {
    return ke(H.file(O(this.userDataPath, "Machine")), "settings.json");
  }
  get workspaceStorageHome() {
    return ke(this.appSettingsHome, "workspaceStorage");
  }
  get localHistoryHome() {
    return ke(this.appSettingsHome, "History");
  }
  get keyboardLayoutResource() {
    return ke(this.userRoamingDataHome, "keyboardLayout.json");
  }
  get argvResource() {
    const e = Ie.VSCODE_PORTABLE;
    return e ? H.file(O(e, "argv.json")) : ke(this.userHome, this.productService.dataFolderName, "argv.json");
  }
  get isExtensionDevelopment() {
    return !!this.args.extensionDevelopmentPath;
  }
  get untitledWorkspacesHome() {
    return H.file(O(this.userDataPath, "Workspaces"));
  }
  get builtinExtensionsPath() {
    const e = this.args["builtin-extensions-dir"];
    return e ? gi(e) : Ot(O(Bt.asFileUri("").fsPath, "..", "extensions"));
  }
  get extensionsDownloadLocation() {
    const e = this.args["extensions-download-dir"];
    return e ? H.file(gi(e)) : H.file(O(this.userDataPath, "CachedExtensionVSIXs"));
  }
  get extensionsPath() {
    const e = this.args["extensions-dir"];
    if (e) return gi(e);
    const t = Ie.VSCODE_EXTENSIONS;
    if (t) return t;
    const i = Ie.VSCODE_PORTABLE;
    return i ? O(i, "extensions") : ke(this.userHome, this.productService.dataFolderName, "extensions").fsPath;
  }
  get extensionDevelopmentLocationURI() {
    const e = this.args.extensionDevelopmentPath;
    if (Array.isArray(e)) return e.map((t) => /^[^:/?#]+?:\/\//.test(t) ? H.parse(t) : H.file(Ot(t)));
  }
  get extensionDevelopmentKind() {
    return this.args.extensionDevelopmentKind?.map((e) => e === "ui" || e === "workspace" || e === "web" ? e : "workspace");
  }
  get extensionTestsLocationURI() {
    const e = this.args.extensionTestsPath;
    if (e) return /^[^:/?#]+?:\/\//.test(e) ? H.parse(e) : H.file(Ot(e));
  }
  get disableExtensions() {
    if (this.args["disable-extensions"]) return true;
    const e = this.args["disable-extension"];
    if (e) {
      if (typeof e == "string") return [e];
      if (Array.isArray(e) && e.length > 0) return e;
    }
    return false;
  }
  get debugExtensionHost() {
    return Ic(this.args, this.isBuilt);
  }
  get debugRenderer() {
    return !!this.args.debugRenderer;
  }
  get isBuilt() {
    return !Ie.VSCODE_DEV;
  }
  get verbose() {
    return !!this.args.verbose;
  }
  get logLevel() {
    return this.args.log?.find((e) => !Gn.test(e));
  }
  get extensionLogLevel() {
    const e = [];
    for (const t of this.args.log || []) {
      const i = Gn.exec(t);
      i && i[1] && i[2] && e.push([i[1], i[2]]);
    }
    return e.length ? e : void 0;
  }
  get serviceMachineIdResource() {
    return ke(H.file(this.userDataPath), "machineid");
  }
  get crashReporterId() {
    return this.args["crash-reporter-id"];
  }
  get crashReporterDirectory() {
    return this.args["crash-reporter-directory"];
  }
  get disableTelemetry() {
    return !!this.args["disable-telemetry"];
  }
  get disableWorkspaceTrust() {
    return !!this.args["disable-workspace-trust"];
  }
  get useInMemorySecretStorage() {
    return !!this.args["use-inmemory-secretstorage"];
  }
  get policyFile() {
    if (this.args["__enable-file-policy"] || pt) {
      const e = Ie.VSCODE_PORTABLE;
      return e ? H.file(O(e, "policy.json")) : ke(this.userHome, this.productService.dataFolderName, "policy.json");
    }
  }
  get continueOn() {
    return this.args.continueOn;
  }
  set continueOn(e) {
    this.args.continueOn = e;
  }
  get args() {
    return this._args;
  }
};
v([q], G.prototype, "appRoot", null), v([q], G.prototype, "userHome", null), v([q], G.prototype, "userDataPath", null), v([q], G.prototype, "appSettingsHome", null), v([q], G.prototype, "tmpDir", null), v([q], G.prototype, "cacheHome", null), v([q], G.prototype, "stateResource", null), v([q], G.prototype, "userRoamingDataHome", null), v([q], G.prototype, "userDataSyncHome", null), v([q], G.prototype, "sync", null), v([q], G.prototype, "machineSettingsResource", null), v([q], G.prototype, "workspaceStorageHome", null), v([q], G.prototype, "localHistoryHome", null), v([q], G.prototype, "keyboardLayoutResource", null), v([q], G.prototype, "argvResource", null), v([q], G.prototype, "isExtensionDevelopment", null), v([q], G.prototype, "untitledWorkspacesHome", null), v([q], G.prototype, "builtinExtensionsPath", null), v([q], G.prototype, "extensionsPath", null), v([q], G.prototype, "extensionDevelopmentLocationURI", null), v([q], G.prototype, "extensionDevelopmentKind", null), v([q], G.prototype, "extensionTestsLocationURI", null), v([q], G.prototype, "debugExtensionHost", null), v([q], G.prototype, "logLevel", null), v([q], G.prototype, "extensionLogLevel", null), v([q], G.prototype, "serviceMachineIdResource", null), v([q], G.prototype, "disableTelemetry", null), v([q], G.prototype, "disableWorkspaceTrust", null), v([q], G.prototype, "useInMemorySecretStorage", null), v([q], G.prototype, "policyFile", null);
function Ic(e, t) {
  return Dc(e["inspect-extensions"], e["inspect-brk-extensions"], 5870, t, e.debugId, e.extensionEnvironment);
}
function Dc(e, t, i, s, r, n) {
  const o = t || e, a = o !== void 0 && o !== "" ? Number(o) : NaN, l = Number.isNaN(a) ? s ? null : i : a, c = l !== null ? !!t : false;
  let h;
  if (n) try {
    h = JSON.parse(n);
  } catch {
  }
  return { port: l, break: c, debugId: r, env: h };
}
p();
import * as zn from "os";
import * as Ve from "path";
var Rc = process.env.VSCODE_CWD || process.cwd();
function Tc(e, t) {
  const i = Ac(e, t), s = [i];
  return Ve.isAbsolute(i) || s.unshift(Rc), Ve.resolve(...s);
}
function Ac(e, t) {
  process.env.VSCODE_DEV && (t = "code-oss-dev");
  const i = process.env.VSCODE_PORTABLE;
  if (i) return Ve.join(i, "user-data");
  let s = process.env.VSCODE_APPDATA;
  if (s) return Ve.join(s, t);
  const r = e["user-data-dir"];
  if (r) return r;
  switch (process.platform) {
    case "win32":
      if (s = process.env.APPDATA, !s) {
        const n = process.env.USERPROFILE;
        if (typeof n != "string") throw new Error("Windows: Unexpected undefined %USERPROFILE% environment variable");
        s = Ve.join(n, "AppData", "Roaming");
      }
      break;
    case "darwin":
      s = Ve.join(zn.homedir(), "Library", "Application Support");
      break;
    case "linux":
      s = process.env.XDG_CONFIG_HOME || Ve.join(zn.homedir(), ".config");
      break;
    default:
      throw new Error("Platform not supported");
  }
  return Ve.join(s, t);
}
var Pc = class extends G {
  constructor(e, t) {
    super(e, { homeDir: Ec(), tmpDir: Sc(), userDataDir: Tc(e, t.nameShort) }, t);
  }
};
p(), p();
function Ls(e, t) {
  return t && (e.stack || e.stacktrace) ? w(108, null, Kn(e), Vn(e.stack) || Vn(e.stacktrace)) : Kn(e);
}
function Vn(e) {
  return Array.isArray(e) ? e.join(`
`) : e;
}
function Kn(e) {
  return e.code === "ERR_UNC_HOST_NOT_ALLOWED" ? `${e.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.` : typeof e.code == "string" && typeof e.errno == "number" && typeof e.syscall == "string" ? w(109, null, e.message) : e.message || w(110, null);
}
function jn(e = null, t = false) {
  if (!e) return w(111, null);
  if (Array.isArray(e)) {
    const i = xa(e), s = jn(i[0], t);
    return i.length > 1 ? w(112, null, s, i.length) : s;
  }
  if (dt(e)) return e;
  if (e.detail) {
    const i = e.detail;
    if (i.error) return Ls(i.error, t);
    if (i.exception) return Ls(i.exception, t);
  }
  return e.stack ? Ls(e, t) : e.message ? e.message : w(113, null);
}
p();
function Cc(e) {
  return Is(e, 0);
}
function Is(e, t) {
  switch (typeof e) {
    case "object":
      return e === null ? Me(349, t) : Array.isArray(e) ? Oc(e, t) : Uc(e, t);
    case "string":
      return Xn(e, t);
    case "boolean":
      return Mc(e, t);
    case "number":
      return Me(e, t);
    case "undefined":
      return Me(937, t);
    default:
      return Me(617, t);
  }
}
function Me(e, t) {
  return (t << 5) - t + e | 0;
}
function Mc(e, t) {
  return Me(e ? 433 : 863, t);
}
function Xn(e, t) {
  t = Me(149417, t);
  for (let i = 0, s = e.length; i < s; i++) t = Me(e.charCodeAt(i), t);
  return t;
}
function Oc(e, t) {
  return t = Me(104579, t), e.reduce((i, s) => Is(s, i), t);
}
function Uc(e, t) {
  return t = Me(181387, t), Object.keys(e).sort().reduce((i, s) => (i = Xn(s, i), Is(e[s], i)), t);
}
function Ds(e, t, i = 32) {
  const s = i - t, r = ~((1 << s) - 1);
  return (e << t | (r & e) >>> s) >>> 0;
}
function Gt(e, t = 32) {
  return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((i) => i.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
var Nc = class zo {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
  }
  update(t) {
    const i = t.length;
    if (i === 0) return;
    const s = this._buff;
    let r = this._buffLen, n = this._leftoverHighSurrogate, o, a;
    for (n !== 0 ? (o = n, a = -1, n = 0) : (o = t.charCodeAt(0), a = 0); ; ) {
      let l = o;
      if (J1(o)) if (a + 1 < i) {
        const c = t.charCodeAt(a + 1);
        tn(c) ? (a++, l = Z1(o, c)) : l = 65533;
      } else {
        n = o;
        break;
      }
      else tn(o) && (l = 65533);
      if (r = this._push(s, r, l), a++, a < i) o = t.charCodeAt(a);
      else break;
    }
    this._buffLen = r, this._leftoverHighSurrogate = n;
  }
  _push(t, i, s) {
    return s < 128 ? t[i++] = s : s < 2048 ? (t[i++] = 192 | (s & 1984) >>> 6, t[i++] = 128 | (s & 63) >>> 0) : s < 65536 ? (t[i++] = 224 | (s & 61440) >>> 12, t[i++] = 128 | (s & 4032) >>> 6, t[i++] = 128 | (s & 63) >>> 0) : (t[i++] = 240 | (s & 1835008) >>> 18, t[i++] = 128 | (s & 258048) >>> 12, t[i++] = 128 | (s & 4032) >>> 6, t[i++] = 128 | (s & 63) >>> 0), i >= 64 && (this._step(), i -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), i;
  }
  digest() {
    return this._finished || (this._finished = true, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), Gt(this._h0) + Gt(this._h1) + Gt(this._h2) + Gt(this._h3) + Gt(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
    const t = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(t / 4294967296), false), this._buffDV.setUint32(60, t % 4294967296, false), this._step();
  }
  _step() {
    const t = zo._bigBlock32, i = this._buffDV;
    for (let u = 0; u < 64; u += 4) t.setUint32(u, i.getUint32(u, false), false);
    for (let u = 64; u < 320; u += 4) t.setUint32(u, Ds(t.getUint32(u - 12, false) ^ t.getUint32(u - 32, false) ^ t.getUint32(u - 56, false) ^ t.getUint32(u - 64, false), 1), false);
    let s = this._h0, r = this._h1, n = this._h2, o = this._h3, a = this._h4, l, c, h;
    for (let u = 0; u < 80; u++) u < 20 ? (l = r & n | ~r & o, c = 1518500249) : u < 40 ? (l = r ^ n ^ o, c = 1859775393) : u < 60 ? (l = r & n | r & o | n & o, c = 2400959708) : (l = r ^ n ^ o, c = 3395469782), h = Ds(s, 5) + l + a + c + t.getUint32(u * 4, false) & 4294967295, a = o, o = n, n = Ds(r, 30), r = s, s = h;
    this._h0 = this._h0 + s & 4294967295, this._h1 = this._h1 + r & 4294967295, this._h2 = this._h2 + n & 4294967295, this._h3 = this._h3 + o & 4294967295, this._h4 = this._h4 + a & 4294967295;
  }
};
Nc._bigBlock32 = new DataView(new ArrayBuffer(320)), p(), p();
var F = ((e) => (e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA", e))(F || {});
p();
function Rs(...e) {
  switch (e.length) {
    case 1:
      return w(1839, null, e[0]);
    case 2:
      return w(1840, null, e[0], e[1]);
    case 3:
      return w(1841, null, e[0], e[1], e[2]);
    default:
      return;
  }
}
var Fc = w(1842, null), Bc = w(1843, null), Ts = class lr {
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
        throw va(`unhandled token type: ${JSON.stringify(t)}; have you forgotten to add a case?`);
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
      case F.OpenParen:
        this._addToken(0);
        break;
      case F.CloseParen:
        this._addToken(1);
        break;
      case F.ExclamationMark:
        if (this._match(F.Equals)) {
          const i = this._match(F.Equals);
          this._tokens.push({ type: 4, offset: this._start, isTripleEq: i });
        } else this._addToken(2);
        break;
      case F.SingleQuote:
        this._quotedString();
        break;
      case F.Slash:
        this._regex();
        break;
      case F.Equals:
        if (this._match(F.Equals)) {
          const i = this._match(F.Equals);
          this._tokens.push({ type: 3, offset: this._start, isTripleEq: i });
        } else this._match(F.Tilde) ? this._addToken(9) : this._error(Rs("==", "=~"));
        break;
      case F.LessThan:
        this._addToken(this._match(F.Equals) ? 6 : 5);
        break;
      case F.GreaterThan:
        this._addToken(this._match(F.Equals) ? 8 : 7);
        break;
      case F.Ampersand:
        this._match(F.Ampersand) ? this._addToken(15) : this._error(Rs("&&"));
        break;
      case F.Pipe:
        this._match(F.Pipe) ? this._addToken(16) : this._error(Rs("||"));
        break;
      case F.Space:
      case F.CarriageReturn:
      case F.Tab:
      case F.LineFeed:
      case F.NoBreakSpace:
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
    return this._isAtEnd() ? F.Null : this._input.charCodeAt(this._current);
  }
  _addToken(t) {
    this._tokens.push({ type: t, offset: this._start });
  }
  _error(t) {
    const i = this._start, s = this._input.substring(this._start, this._current), r = { type: 19, offset: this._start, lexeme: s };
    this._errors.push({ offset: i, lexeme: s, additionalInfo: t }), this._tokens.push(r);
  }
  _string() {
    this.stringRe.lastIndex = this._start;
    const t = this.stringRe.exec(this._input);
    if (t) {
      this._current = this._start + t[0].length;
      const i = this._input.substring(this._start, this._current), s = lr._keywords.get(i);
      s ? this._addToken(s) : this._tokens.push({ type: 17, lexeme: i, offset: this._start });
    }
  }
  _quotedString() {
    for (; this._peek() !== F.SingleQuote && !this._isAtEnd(); ) this._advance();
    if (this._isAtEnd()) {
      this._error(Fc);
      return;
    }
    this._advance(), this._tokens.push({ type: 18, lexeme: this._input.substring(this._start + 1, this._current - 1), offset: this._start + 1 });
  }
  _regex() {
    let t = this._current, i = false, s = false;
    for (; ; ) {
      if (t >= this._input.length) {
        this._current = t, this._error(Bc);
        return;
      }
      const n = this._input.charCodeAt(t);
      if (i) i = false;
      else if (n === F.Slash && !s) {
        t++;
        break;
      } else n === F.OpenSquareBracket ? s = true : n === F.Backslash ? i = true : n === F.CloseSquareBracket && (s = false);
      t++;
    }
    for (; t < this._input.length && lr._regexFlags.has(this._input.charCodeAt(t)); ) t++;
    this._current = t;
    const r = this._input.substring(this._start, this._current);
    this._tokens.push({ type: 10, lexeme: r, offset: this._start });
  }
  _isAtEnd() {
    return this._current >= this._input.length;
  }
};
Ts._regexFlags = new Set(["i", "g", "s", "m", "y", "u"].map((e) => e.charCodeAt(0))), Ts._keywords = /* @__PURE__ */ new Map([["not", 14], ["in", 13], ["false", 12], ["true", 11]]);
var zt = Ts;
p();
var Oe;
((e) => {
  e.serviceIds = /* @__PURE__ */ new Map(), e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
  function t(i) {
    return i[e.DI_DEPENDENCIES] || [];
  }
  e.getServiceDependencies = t;
})(Oe || (Oe = {}));
var d0 = Ue("instantiationService");
function $c(e, t, i) {
  t[Oe.DI_TARGET] === t ? t[Oe.DI_DEPENDENCIES].push({ id: e, index: i }) : (t[Oe.DI_DEPENDENCIES] = [{ id: e, index: i }], t[Oe.DI_TARGET] = t);
}
function Ue(e) {
  if (Oe.serviceIds.has(e)) return Oe.serviceIds.get(e);
  const t = function(i, s, r) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    $c(t, i, r);
  };
  return t.toString = () => e, Oe.serviceIds.set(e, t), t;
}
var re = /* @__PURE__ */ new Map();
re.set("false", false), re.set("true", true), re.set("isMac", qe), re.set("isLinux", pt), re.set("isWindows", N), re.set("isWeb", ns), re.set("isMacNative", qe && !ns), re.set("isEdge", k1), re.set("isFirefox", E1), re.set("isChrome", Br), re.set("isSafari", S1);
var Vt = /* @__PURE__ */ new Map();
function Hc(e, t) {
  return Vt.has(e) && (console.warn(`A context key function with id '${e}' is already registered. Function collisions can lead to unexpected behavior.`), Vt.delete(e)), Vt.set(e, t), { dispose: () => {
    Vt.delete(e);
  } };
}
function Yn(e) {
  return Vt.get(e);
}
var qc = Object.prototype.hasOwnProperty, Wc = { regexParsingWithErrorRecovery: true }, Gc = w(1818, null), zc = w(1819, null), Vc = w(1820, null), Qn = w(1821, null), Kc = w(1822, null), jc = w(1823, null), Xc = w(1824, null), Yc = w(1825, null), Jn = class ai {
  constructor(t = Wc) {
    this._config = t, this._scanner = new zt(), this._tokens = [], this._current = 0, this._parsingErrors = [], this._flagsGYRe = /g|y/g;
  }
  get lexingErrors() {
    return this._scanner.errors;
  }
  get parsingErrors() {
    return this._parsingErrors;
  }
  parse(t) {
    if (t === "") {
      this._parsingErrors.push({ message: Gc, offset: 0, lexeme: "", additionalInfo: zc });
      return;
    }
    this._tokens = this._scanner.reset(t).scan(), this._current = 0, this._parsingErrors = [];
    try {
      const i = this._expr();
      if (!this._isAtEnd()) {
        const s = this._peek(), r = s.type === 17 ? jc : void 0;
        throw this._parsingErrors.push({ message: Kc, offset: s.offset, lexeme: zt.getLexeme(s), additionalInfo: r }), ai._parseError;
      }
      return i;
    } catch (i) {
      if (i !== ai._parseError) throw i;
      return;
    }
  }
  _expr() {
    return this._or();
  }
  _or() {
    const t = [this._and()];
    for (; this._matchOne(16); ) {
      const i = this._and();
      t.push(i);
    }
    return t.length === 1 ? t[0] : ae.or(...t);
  }
  _and() {
    const t = [this._term()];
    for (; this._matchOne(15); ) {
      const i = this._term();
      t.push(i);
    }
    return t.length === 1 ? t[0] : ae.and(...t);
  }
  _term() {
    if (this._matchOne(2)) {
      const t = this._peek();
      switch (t.type) {
        case 11:
          return this._advance(), fe.INSTANCE;
        case 12:
          return this._advance(), ge.INSTANCE;
        case 0: {
          this._advance();
          const i = this._expr();
          return this._consume(1, Qn), i?.negate();
        }
        case 17:
          return this._advance(), Xt.create(t.lexeme);
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
        return this._advance(), ae.true();
      case 12:
        return this._advance(), ae.false();
      case 0: {
        this._advance();
        const i = this._expr();
        return this._consume(1, Qn), i;
      }
      case 17: {
        if (t.lexeme.startsWith("@")) {
          this._advance();
          const r = t.lexeme.substring(1);
          if (r.startsWith("!")) {
            const o = r.substring(1), a = Yn(o);
            if (a) return As.createWithoutRegistration(r, () => !a());
          }
          const n = Yn(r) || (() => false);
          return As.createWithoutRegistration(r, n);
        }
        const i = t.lexeme;
        if (this._advance(), this._matchOne(9)) {
          const r = this._peek();
          if (!this._config.regexParsingWithErrorRecovery) {
            if (this._advance(), r.type !== 10) throw this._errExpectedButGot("REGEX", r);
            const n = r.lexeme, o = n.lastIndexOf("/"), a = o === n.length - 1 ? void 0 : this._removeFlagsGY(n.substring(o + 1));
            let l;
            try {
              l = new RegExp(n.substring(1, o), a);
            } catch {
              throw this._errExpectedButGot("REGEX", r);
            }
            return Bs.create(i, l);
          }
          switch (r.type) {
            case 10:
            case 19: {
              const n = [r.lexeme];
              this._advance();
              let o = this._peek(), a = 0;
              for (let d = 0; d < r.lexeme.length; d++) r.lexeme.charCodeAt(d) === F.OpenParen ? a++ : r.lexeme.charCodeAt(d) === F.CloseParen && a--;
              for (; !this._isAtEnd() && o.type !== 15 && o.type !== 16; ) {
                switch (o.type) {
                  case 0:
                    a++;
                    break;
                  case 1:
                    a--;
                    break;
                  case 10:
                  case 18:
                    for (let d = 0; d < o.lexeme.length; d++) o.lexeme.charCodeAt(d) === F.OpenParen ? a++ : r.lexeme.charCodeAt(d) === F.CloseParen && a--;
                }
                if (a < 0) break;
                n.push(zt.getLexeme(o)), this._advance(), o = this._peek();
              }
              const l = n.join(""), c = l.lastIndexOf("/"), h = c === l.length - 1 ? void 0 : this._removeFlagsGY(l.substring(c + 1));
              let u;
              try {
                u = new RegExp(l.substring(1, c), h);
              } catch {
                throw this._errExpectedButGot("REGEX", r);
              }
              return ae.regex(i, u);
            }
            case 18: {
              const n = r.lexeme;
              this._advance();
              let o = null;
              if (!X1(n)) {
                const a = n.indexOf("/"), l = n.lastIndexOf("/");
                if (a !== l && a >= 0) {
                  const c = n.slice(a + 1, l), h = n[l + 1] === "i" ? "i" : "";
                  try {
                    o = new RegExp(c, h);
                  } catch {
                    throw this._errExpectedButGot("REGEX", r);
                  }
                }
              }
              if (o === null) throw this._errExpectedButGot("REGEX", r);
              return Bs.create(i, o);
            }
            default:
              throw this._errExpectedButGot("REGEX", this._peek());
          }
        }
        if (this._matchOne(14)) {
          this._consume(13, Vc);
          const r = this._value();
          return ae.notIn(i, r);
        }
        switch (this._peek().type) {
          case 3: {
            this._advance();
            const r = this._value();
            if (this._previous().type === 18) return ae.equals(i, r);
            switch (r) {
              case "true":
                return ae.has(i);
              case "false":
                return ae.not(i);
              default:
                return ae.equals(i, r);
            }
          }
          case 4: {
            this._advance();
            const r = this._value();
            if (this._previous().type === 18) return ae.notEquals(i, r);
            switch (r) {
              case "true":
                return ae.not(i);
              case "false":
                return ae.has(i);
              default:
                return ae.notEquals(i, r);
            }
          }
          case 5:
            return this._advance(), Ns.create(i, this._value());
          case 6:
            return this._advance(), Fs.create(i, this._value());
          case 7:
            return this._advance(), Ri.create(i, this._value());
          case 8:
            return this._advance(), Us.create(i, this._value());
          case 13:
            return this._advance(), ae.in(i, this._value());
          default:
            return ae.has(i);
        }
      }
      case 20:
        throw this._parsingErrors.push({ message: Xc, offset: t.offset, lexeme: "", additionalInfo: Yc }), ai._parseError;
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
  _consume(t, i) {
    if (this._check(t)) return this._advance();
    throw this._errExpectedButGot(i, this._peek());
  }
  _errExpectedButGot(t, i, s) {
    const r = w(1826, null, t, zt.getLexeme(i)), n = i.offset, o = zt.getLexeme(i);
    return this._parsingErrors.push({ message: r, offset: n, lexeme: o, additionalInfo: s }), ai._parseError;
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
Jn._parseError = new Error();
var Qc = Jn, ae = class {
  static false() {
    return fe.INSTANCE;
  }
  static true() {
    return ge.INSTANCE;
  }
  static has(e) {
    return jt.create(e);
  }
  static equals(e, t) {
    return Ms.create(e, t);
  }
  static notEquals(e, t) {
    return Os.create(e, t);
  }
  static regex(e, t) {
    return Bs.create(e, t);
  }
  static in(e, t) {
    return Zn.create(e, t);
  }
  static notIn(e, t) {
    return eo.create(e, t);
  }
  static not(e) {
    return Xt.create(e);
  }
  static and(...e) {
    return io.create(e, null, true);
  }
  static or(...e) {
    return $s.create(e, null, true);
  }
  static greater(e, t) {
    return Ri.create(e, t);
  }
  static greaterEquals(e, t) {
    return Us.create(e, t);
  }
  static smaller(e, t) {
    return Ns.create(e, t);
  }
  static smallerEquals(e, t) {
    return Fs.create(e, t);
  }
  static function(e, t) {
    return As.create(e, t);
  }
  static deserialize(e) {
    return e == null ? void 0 : this._parser.parse(e);
  }
};
ae._parser = new Qc({ regexParsingWithErrorRecovery: false });
function Kt(e, t) {
  return e.cmp(t);
}
var As = class Wi {
  constructor(t, i) {
    this.type = 16, this.id = t, this.fn = i;
  }
  static create(t, i) {
    return Hc(t, i), new Wi(t, i);
  }
  static createWithoutRegistration(t, i) {
    return new Wi(t, i);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Hs(this.id, t.id);
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
    return Wi.createWithoutRegistration(`!${this.id}`, () => !this.fn());
  }
}, Ps = class {
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
    return ge.INSTANCE;
  }
};
Ps.INSTANCE = new Ps();
var fe = Ps, Cs = class {
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
    return fe.INSTANCE;
  }
};
Cs.INSTANCE = new Cs();
var ge = Cs, jt = class Vo {
  constructor(t, i) {
    this.key = t, this.negated = i, this.type = 2;
  }
  static create(t, i = null) {
    const s = re.get(t);
    return typeof s == "boolean" ? s ? ge.INSTANCE : fe.INSTANCE : new Vo(t, i);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Hs(this.key, t.key);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key : false;
  }
  substituteConstants() {
    const t = re.get(this.key);
    return typeof t == "boolean" ? t ? ge.INSTANCE : fe.INSTANCE : this;
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
    return this.negated || (this.negated = Xt.create(this.key, this)), this.negated;
  }
}, Ms = class Ko {
  constructor(t, i, s) {
    this.key = t, this.value = i, this.negated = s, this.type = 4;
  }
  static create(t, i, s = null) {
    if (typeof i == "boolean") return i ? jt.create(t, s) : Xt.create(t, s);
    const r = re.get(t);
    return typeof r == "boolean" ? i === (r ? "true" : "false") ? ge.INSTANCE : fe.INSTANCE : new Ko(t, i, s);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : it(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    const t = re.get(this.key);
    if (typeof t == "boolean") {
      const i = t ? "true" : "false";
      return this.value === i ? ge.INSTANCE : fe.INSTANCE;
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
    return this.negated || (this.negated = Os.create(this.key, this.value, this)), this.negated;
  }
}, Zn = class jo {
  constructor(t, i) {
    this.key = t, this.valueKey = i, this.type = 10, this.negated = null;
  }
  static create(t, i) {
    return new jo(t, i);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : it(this.key, this.valueKey, t.key, t.valueKey);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.valueKey === t.valueKey : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    const i = t.getValue(this.valueKey), s = t.getValue(this.key);
    return Array.isArray(i) ? i.includes(s) : typeof s == "string" && typeof i == "object" && i !== null ? qc.call(i, s) : false;
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
    return this.negated || (this.negated = eo.create(this.key, this.valueKey)), this.negated;
  }
}, eo = class Xo {
  constructor(t, i) {
    this.key = t, this.valueKey = i, this.type = 11, this._negated = Zn.create(t, i);
  }
  static create(t, i) {
    return new Xo(t, i);
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
}, Os = class Yo {
  constructor(t, i, s) {
    this.key = t, this.value = i, this.negated = s, this.type = 5;
  }
  static create(t, i, s = null) {
    if (typeof i == "boolean") return i ? Xt.create(t, s) : jt.create(t, s);
    const r = re.get(t);
    return typeof r == "boolean" ? i === (r ? "true" : "false") ? fe.INSTANCE : ge.INSTANCE : new Yo(t, i, s);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : it(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    const t = re.get(this.key);
    if (typeof t == "boolean") {
      const i = t ? "true" : "false";
      return this.value === i ? fe.INSTANCE : ge.INSTANCE;
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
    return this.negated || (this.negated = Ms.create(this.key, this.value, this)), this.negated;
  }
}, Xt = class Qo {
  constructor(t, i) {
    this.key = t, this.negated = i, this.type = 3;
  }
  static create(t, i = null) {
    const s = re.get(t);
    return typeof s == "boolean" ? s ? fe.INSTANCE : ge.INSTANCE : new Qo(t, i);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Hs(this.key, t.key);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key : false;
  }
  substituteConstants() {
    const t = re.get(this.key);
    return typeof t == "boolean" ? t ? fe.INSTANCE : ge.INSTANCE : this;
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
    return this.negated || (this.negated = jt.create(this.key, this)), this.negated;
  }
};
function Di(e, t) {
  if (typeof e == "string") {
    const i = parseFloat(e);
    isNaN(i) || (e = i);
  }
  return typeof e == "string" || typeof e == "number" ? t(e) : fe.INSTANCE;
}
var Ri = class Jo {
  constructor(t, i, s) {
    this.key = t, this.value = i, this.negated = s, this.type = 12;
  }
  static create(t, i, s = null) {
    return Di(i, (r) => new Jo(t, r, s));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : it(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = Fs.create(this.key, this.value, this)), this.negated;
  }
}, Us = class Zo {
  constructor(t, i, s) {
    this.key = t, this.value = i, this.negated = s, this.type = 13;
  }
  static create(t, i, s = null) {
    return Di(i, (r) => new Zo(t, r, s));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : it(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = Ns.create(this.key, this.value, this)), this.negated;
  }
}, Ns = class ea {
  constructor(t, i, s) {
    this.key = t, this.value = i, this.negated = s, this.type = 14;
  }
  static create(t, i, s = null) {
    return Di(i, (r) => new ea(t, r, s));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : it(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = Us.create(this.key, this.value, this)), this.negated;
  }
}, Fs = class ta {
  constructor(t, i, s) {
    this.key = t, this.value = i, this.negated = s, this.type = 15;
  }
  static create(t, i, s = null) {
    return Di(i, (r) => new ta(t, r, s));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : it(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = Ri.create(this.key, this.value, this)), this.negated;
  }
}, Bs = class ia {
  constructor(t, i) {
    this.key = t, this.regexp = i, this.type = 7, this.negated = null;
  }
  static create(t, i) {
    return new ia(t, i);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.key < t.key) return -1;
    if (this.key > t.key) return 1;
    const i = this.regexp ? this.regexp.source : "", s = t.regexp ? t.regexp.source : "";
    return i < s ? -1 : i > s ? 1 : 0;
  }
  equals(t) {
    if (t.type === this.type) {
      const i = this.regexp ? this.regexp.source : "", s = t.regexp ? t.regexp.source : "";
      return this.key === t.key && i === s;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    const i = t.getValue(this.key);
    return this.regexp ? this.regexp.test(i) : false;
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
    return this.negated || (this.negated = Jc.create(this)), this.negated;
  }
}, Jc = class cr {
  constructor(t) {
    this._actual = t, this.type = 8;
  }
  static create(t) {
    return new cr(t);
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
    return new cr(this._actual.map(t));
  }
  negate() {
    return this._actual;
  }
};
function to(e) {
  let t = null;
  for (let i = 0, s = e.length; i < s; i++) {
    const r = e[i].substituteConstants();
    if (e[i] !== r && t === null) {
      t = [];
      for (let n = 0; n < i; n++) t[n] = e[n];
    }
    t !== null && (t[i] = r);
  }
  return t === null ? e : t;
}
var io = class St {
  constructor(t, i) {
    this.expr = t, this.negated = i, this.type = 6;
  }
  static create(t, i, s) {
    return St._normalizeArr(t, i, s);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.expr.length < t.expr.length) return -1;
    if (this.expr.length > t.expr.length) return 1;
    for (let i = 0, s = this.expr.length; i < s; i++) {
      const r = Kt(this.expr[i], t.expr[i]);
      if (r !== 0) return r;
    }
    return 0;
  }
  equals(t) {
    if (t.type === this.type) {
      if (this.expr.length !== t.expr.length) return false;
      for (let i = 0, s = this.expr.length; i < s; i++) if (!this.expr[i].equals(t.expr[i])) return false;
      return true;
    }
    return false;
  }
  substituteConstants() {
    const t = to(this.expr);
    return t === this.expr ? this : St.create(t, this.negated, false);
  }
  evaluate(t) {
    for (let i = 0, s = this.expr.length; i < s; i++) if (!this.expr[i].evaluate(t)) return false;
    return true;
  }
  static _normalizeArr(t, i, s) {
    const r = [];
    let n = false;
    for (const o of t) if (o) {
      if (o.type === 1) {
        n = true;
        continue;
      }
      if (o.type === 0) return fe.INSTANCE;
      if (o.type === 6) {
        r.push(...o.expr);
        continue;
      }
      r.push(o);
    }
    if (r.length === 0 && n) return ge.INSTANCE;
    if (r.length !== 0) {
      if (r.length === 1) return r[0];
      r.sort(Kt);
      for (let o = 1; o < r.length; o++) r[o - 1].equals(r[o]) && (r.splice(o, 1), o--);
      if (r.length === 1) return r[0];
      for (; r.length > 1; ) {
        const o = r[r.length - 1];
        if (o.type !== 9) break;
        r.pop();
        const a = r.pop(), l = r.length === 0, c = $s.create(o.expr.map((h) => St.create([h, a], null, s)), null, l);
        c && (r.push(c), r.sort(Kt));
      }
      if (r.length === 1) return r[0];
      if (s) {
        for (let o = 0; o < r.length; o++) for (let a = o + 1; a < r.length; a++) if (r[o].negate().equals(r[a])) return fe.INSTANCE;
        if (r.length === 1) return r[0];
      }
      return new St(r, i);
    }
  }
  serialize() {
    return this.expr.map((t) => t.serialize()).join(" && ");
  }
  keys() {
    const t = [];
    for (const i of this.expr) t.push(...i.keys());
    return t;
  }
  map(t) {
    return new St(this.expr.map((i) => i.map(t)), null);
  }
  negate() {
    if (!this.negated) {
      const t = [];
      for (const i of this.expr) t.push(i.negate());
      this.negated = $s.create(t, this, true);
    }
    return this.negated;
  }
}, $s = class at {
  constructor(t, i) {
    this.expr = t, this.negated = i, this.type = 9;
  }
  static create(t, i, s) {
    return at._normalizeArr(t, i, s);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.expr.length < t.expr.length) return -1;
    if (this.expr.length > t.expr.length) return 1;
    for (let i = 0, s = this.expr.length; i < s; i++) {
      const r = Kt(this.expr[i], t.expr[i]);
      if (r !== 0) return r;
    }
    return 0;
  }
  equals(t) {
    if (t.type === this.type) {
      if (this.expr.length !== t.expr.length) return false;
      for (let i = 0, s = this.expr.length; i < s; i++) if (!this.expr[i].equals(t.expr[i])) return false;
      return true;
    }
    return false;
  }
  substituteConstants() {
    const t = to(this.expr);
    return t === this.expr ? this : at.create(t, this.negated, false);
  }
  evaluate(t) {
    for (let i = 0, s = this.expr.length; i < s; i++) if (this.expr[i].evaluate(t)) return true;
    return false;
  }
  static _normalizeArr(t, i, s) {
    let r = [], n = false;
    if (t) {
      for (let o = 0, a = t.length; o < a; o++) {
        const l = t[o];
        if (l) {
          if (l.type === 0) {
            n = true;
            continue;
          }
          if (l.type === 1) return ge.INSTANCE;
          if (l.type === 9) {
            r = r.concat(l.expr);
            continue;
          }
          r.push(l);
        }
      }
      if (r.length === 0 && n) return fe.INSTANCE;
      r.sort(Kt);
    }
    if (r.length !== 0) {
      if (r.length === 1) return r[0];
      for (let o = 1; o < r.length; o++) r[o - 1].equals(r[o]) && (r.splice(o, 1), o--);
      if (r.length === 1) return r[0];
      if (s) {
        for (let o = 0; o < r.length; o++) for (let a = o + 1; a < r.length; a++) if (r[o].negate().equals(r[a])) return ge.INSTANCE;
        if (r.length === 1) return r[0];
      }
      return new at(r, i);
    }
  }
  serialize() {
    return this.expr.map((t) => t.serialize()).join(" || ");
  }
  keys() {
    const t = [];
    for (const i of this.expr) t.push(...i.keys());
    return t;
  }
  map(t) {
    return new at(this.expr.map((i) => i.map(t)), null);
  }
  negate() {
    if (!this.negated) {
      const t = [];
      for (const i of this.expr) t.push(i.negate());
      for (; t.length > 1; ) {
        const i = t.shift(), s = t.shift(), r = [];
        for (const n of no(i)) for (const o of no(s)) r.push(io.create([n, o], null, false));
        t.unshift(at.create(r, null, false));
      }
      this.negated = at.create(t, this, true);
    }
    return this.negated;
  }
}, so = class Gi extends jt {
  static all() {
    return Gi._info.values();
  }
  constructor(t, i, s) {
    super(t, null), this._defaultValue = i, typeof s == "object" ? Gi._info.push({ ...s, key: t }) : s !== true && Gi._info.push({ key: t, description: s, type: i != null ? typeof i : void 0 });
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
    return Ms.create(this.key, t);
  }
  notEqualsTo(t) {
    return Os.create(this.key, t);
  }
  greater(t) {
    return Ri.create(this.key, t);
  }
};
so._info = [];
var ro = so, p0 = Ue("contextKeyService");
function Hs(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function it(e, t, i, s) {
  return e < i ? -1 : e > i ? 1 : t < s ? -1 : t > s ? 1 : 0;
}
function no(e) {
  return e.type === 9 ? e.expr : [e];
}
var st = Ue("logService"), m0 = Ue("loggerService");
function oo(e) {
  return Sr(e);
}
var ie = ((e) => (e[e.Off = 0] = "Off", e[e.Trace = 1] = "Trace", e[e.Debug = 2] = "Debug", e[e.Info = 3] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 5] = "Error", e))(ie || {}), ao = 3;
function Zc(e, t) {
  return e !== 0 && e <= t;
}
function wt(e, t = false) {
  let i = "";
  for (let s = 0; s < e.length; s++) {
    let r = e[s];
    if (r instanceof Error && (r = jn(r, t)), typeof r == "object") try {
      r = JSON.stringify(r);
    } catch {
    }
    i += (s > 0 ? " " : "") + r;
  }
  return i;
}
var lo = class extends X {
  constructor() {
    super(...arguments), this.level = ao, this._onDidChangeLogLevel = this._register(new k()), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event;
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
    return Zc(this.level, e);
  }
  canLog(e) {
    return this._store.isDisposed ? false : this.checkLogLevel(e);
  }
}, co = class extends lo {
  constructor(e) {
    super(), this.logAlways = e;
  }
  checkLogLevel(e) {
    return this.logAlways || super.checkLogLevel(e);
  }
  trace(e, ...t) {
    this.canLog(1) && this.log(1, wt([e, ...t], true));
  }
  debug(e, ...t) {
    this.canLog(2) && this.log(2, wt([e, ...t]));
  }
  info(e, ...t) {
    this.canLog(3) && this.log(3, wt([e, ...t]));
  }
  warn(e, ...t) {
    this.canLog(4) && this.log(4, wt([e, ...t]));
  }
  error(e, ...t) {
    if (this.canLog(5)) if (e instanceof Error) {
      const i = Array.prototype.slice.call(arguments);
      i[0] = e.stack, this.log(5, wt(i));
    } else this.log(5, wt([e, ...t]));
  }
  flush() {
  }
}, eh = class extends lo {
  constructor(e) {
    super(), this.loggers = e, e.length && this.setLevel(e[0].getLevel());
  }
  setLevel(e) {
    for (const t of this.loggers) t.setLevel(e);
    super.setLevel(e);
  }
  trace(e, ...t) {
    for (const i of this.loggers) i.trace(e, ...t);
  }
  debug(e, ...t) {
    for (const i of this.loggers) i.debug(e, ...t);
  }
  info(e, ...t) {
    for (const i of this.loggers) i.info(e, ...t);
  }
  warn(e, ...t) {
    for (const i of this.loggers) i.warn(e, ...t);
  }
  error(e, ...t) {
    for (const i of this.loggers) i.error(e, ...t);
  }
  flush() {
    for (const e of this.loggers) e.flush();
  }
  dispose() {
    for (const e of this.loggers) e.dispose();
    super.dispose();
  }
}, th = class extends X {
  constructor(e, t, i) {
    if (super(), this.logLevel = e, this.logsHome = t, this._loggers = new Xi(), this._onDidChangeLoggers = this._register(new k()), this.onDidChangeLoggers = this._onDidChangeLoggers.event, this._onDidChangeLogLevel = this._register(new k()), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event, this._onDidChangeVisibility = this._register(new k()), this.onDidChangeVisibility = this._onDidChangeVisibility.event, i) for (const s of i) this._loggers.set(s.resource, { logger: void 0, info: s });
  }
  getLoggerEntry(e) {
    return dt(e) ? [...this._loggers.values()].find((t) => t.info.id === e) : this._loggers.get(e);
  }
  getLogger(e) {
    return this.getLoggerEntry(e)?.logger;
  }
  createLogger(e, t) {
    const i = this.toResource(e), s = dt(e) ? e : t?.id ?? Cc(i.toString()).toString(16);
    let r = this._loggers.get(i)?.logger;
    const n = t?.logLevel === "always" ? 1 : t?.logLevel;
    r || (r = this.doCreateLogger(i, n ?? this.getLogLevel(i) ?? this.logLevel, { ...t, id: s }));
    const o = { logger: r, info: { resource: i, id: s, logLevel: n, name: t?.name, hidden: t?.hidden, group: t?.group, extensionId: t?.extensionId, workspaceId: t?.workspaceId, when: t?.when } };
    return this.registerLogger(o.info), this._loggers.set(i, o), r;
  }
  toResource(e) {
    return dt(e) ? ke(this.logsHome, `${e}.log`) : e;
  }
  setLogLevel(e, t) {
    if (H.isUri(e)) {
      const i = e, s = t, r = this._loggers.get(i);
      r && s !== r.info.logLevel && (r.info.logLevel = s === this.logLevel ? void 0 : s, r.logger?.setLevel(s), this._loggers.set(r.info.resource, r), this._onDidChangeLogLevel.fire([i, s]));
    } else {
      this.logLevel = e;
      for (const [i, s] of this._loggers.entries()) this._loggers.get(i)?.info.logLevel === void 0 && s.logger?.setLevel(this.logLevel);
      this._onDidChangeLogLevel.fire(this.logLevel);
    }
  }
  setVisibility(e, t) {
    const i = this.getLoggerEntry(e);
    i && t !== !i.info.hidden && (i.info.hidden = !t, this._loggers.set(i.info.resource, i), this._onDidChangeVisibility.fire([i.info.resource, t]));
  }
  getLogLevel(e) {
    let t;
    return e && (t = this._loggers.get(e)?.info.logLevel), t ?? this.logLevel;
  }
  registerLogger(e) {
    const t = this._loggers.get(e.resource);
    t ? t.info.hidden !== e.hidden && this.setVisibility(e.resource, !e.hidden) : (this._loggers.set(e.resource, { info: e, logger: void 0 }), this._onDidChangeLoggers.fire({ added: [e], removed: [] }));
  }
  deregisterLogger(e) {
    const t = this.toResource(e), i = this._loggers.get(t);
    i && (i.logger && i.logger.dispose(), this._loggers.delete(t), this._onDidChangeLoggers.fire({ added: [], removed: [i.info] }));
  }
  *getRegisteredLoggers() {
    for (const e of this._loggers.values()) yield e.info;
  }
  getRegisteredLogger(e) {
    return this._loggers.get(e)?.info;
  }
  dispose() {
    this._loggers.forEach((e) => e.logger?.dispose()), this._loggers.clear(), super.dispose();
  }
};
function ih(e) {
  if (e.verbose) return 1;
  if (typeof e.logLevel == "string") {
    const t = rh(e.logLevel.toLowerCase());
    if (t !== void 0) return t;
  }
  return ao;
}
function sh(e) {
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
function rh(e) {
  switch (e) {
    case "trace":
      return 1;
    case "debug":
      return 2;
    case "info":
      return 3;
    case "warn":
      return 4;
    case "error":
      return 5;
    case "critical":
      return 5;
    case "off":
      return 0;
  }
}
var g0 = new ro("logLevel", sh(3));
p();
var nh = class li extends co {
  constructor(t, i, s, r, n) {
    super(r?.logLevel === "always"), this.channel = t, this.file = i, this.isLoggerCreated = false, this.buffer = [], this.flushScheduled = false, this.setLevel(s), this.channel.call("createLogger", [i, r, n]).then(() => {
      this.isLoggerCreated = true, this.flush();
    });
  }
  log(t, i) {
    this.buffer.push([t, i]), this.isLoggerCreated && (this.buffer.length >= li.maxBatchSize ? this.flush() : this.flushScheduled || (this.flushScheduled = true, queueMicrotask(() => {
      this.flushScheduled = false, this.flush();
    })));
  }
  flush() {
    if (!this.isLoggerCreated || !this.buffer.length) return;
    const t = this.buffer;
    if (this.buffer = [], t.length <= li.maxBatchSize) this.doLog(t);
    else for (let i = 0; i < t.length; i += li.maxBatchSize) this.doLog(t.slice(i, i + li.maxBatchSize));
  }
  dispose() {
    this.flush(), super.dispose();
  }
  doLog(t) {
    this.channel.call("log", [this.file, t]);
  }
};
nh.maxBatchSize = 256;
var oh = class {
  constructor(e, t) {
    this.loggerService = e, this.getUriTransformer = t;
  }
  listen(e, t) {
    const i = this.getUriTransformer(e);
    switch (t) {
      case "onDidChangeLoggers":
        return Z.map(this.loggerService.onDidChangeLoggers, (s) => ({ added: [...s.added].map((r) => this.transformLogger(r, i)), removed: [...s.removed].map((r) => this.transformLogger(r, i)) }));
      case "onDidChangeVisibility":
        return Z.map(this.loggerService.onDidChangeVisibility, (s) => [i.transformOutgoingURI(s[0]), s[1]]);
      case "onDidChangeLogLevel":
        return Z.map(this.loggerService.onDidChangeLogLevel, (s) => oo(s) ? s : [i.transformOutgoingURI(s[0]), s[1]]);
    }
    throw new Error(`Event not found: ${t}`);
  }
  async call(e, t, i) {
    const s = this.getUriTransformer(e);
    switch (t) {
      case "setLogLevel":
        return oo(i[0]) ? this.loggerService.setLogLevel(i[0]) : this.loggerService.setLogLevel(H.revive(s.transformIncoming(i[0][0])), i[0][1]);
      case "getRegisteredLoggers":
        return Promise.resolve([...this.loggerService.getRegisteredLoggers()].map((r) => this.transformLogger(r, s)));
    }
    throw new Error(`Call not found: ${t}`);
  }
  transformLogger(e, t) {
    return { ...e, resource: t.transformOutgoingURI(e.resource) };
  }
};
p();
var ah = class extends X {
  get vscodeService() {
    return this;
  }
  get isDisposed() {
    return this._store.isDisposed;
  }
  constructor(e, t = []) {
    super(), this.logger = new eh([e, ...t]), e.isDisposed || this._register(e.onDidChangeLogLevel((i) => this.setLevel(i)));
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
};
p(), p();
var le = [];
for (let e = 0; e < 256; e++) le.push(e.toString(16).padStart(2, "0"));
var lh = (function() {
  if (typeof crypto.randomUUID == "function") return crypto.randomUUID.bind(crypto);
  const e = new Uint8Array(16);
  return function() {
    crypto.getRandomValues(e), e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
    let i = 0, s = "";
    return s += le[e[i++]], s += le[e[i++]], s += le[e[i++]], s += le[e[i++]], s += "-", s += le[e[i++]], s += le[e[i++]], s += "-", s += le[e[i++]], s += le[e[i++]], s += "-", s += le[e[i++]], s += le[e[i++]], s += "-", s += le[e[i++]], s += le[e[i++]], s += le[e[i++]], s += le[e[i++]], s += le[e[i++]], s += le[e[i++]], s;
  };
})();
p(), p(), p();
var ch = class {
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
}, hh = class {
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
    return this._caseSensitive ? ds(e, this._value, 0, e.length, this._from, this._to) : Ft(e, this._value, 0, e.length, this._from, this._to);
  }
  value() {
    return this._value.substring(this._from, this._to);
  }
}, ho = class {
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
    return this._caseSensitive ? ds(e, this._value, 0, e.length, this._from, this._to) : Ft(e, this._value, 0, e.length, this._from, this._to);
  }
  value() {
    return this._value.substring(this._from, this._to);
  }
}, uh = class {
  constructor(e, t) {
    this._ignorePathCasing = e, this._ignoreQueryAndFragment = t, this._states = [], this._stateIdx = 0;
  }
  reset(e) {
    return this._value = e, this._states = [], this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && (this._pathIterator = new ho(false, !this._ignorePathCasing(e)), this._pathIterator.reset(e.path), this._pathIterator.value() && this._states.push(3)), this._ignoreQueryAndFragment(e) || (this._value.query && this._states.push(4), this._value.fragment && this._states.push(5)), this._stateIdx = 0, this;
  }
  next() {
    return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() ? this._pathIterator.next() : this._stateIdx += 1, this;
  }
  hasNext() {
    return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
  }
  cmp(e) {
    if (this._states[this._stateIdx] === 1) return Jr(e, this._value.scheme);
    if (this._states[this._stateIdx] === 2) return Jr(e, this._value.authority);
    if (this._states[this._stateIdx] === 3) return this._pathIterator.cmp(e);
    if (this._states[this._stateIdx] === 4) return us(e, this._value.query);
    if (this._states[this._stateIdx] === 5) return us(e, this._value.fragment);
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
}, uo = class hr {
  static wrap(t) {
    return t === void 0 ? hr.Val : t;
  }
  static unwrap(t) {
    return t === hr.Val ? void 0 : t;
  }
};
uo.Val = /* @__PURE__ */ Symbol("undefined_placeholder");
var rt = uo, Ti = class {
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
}, qs = class ci {
  static forUris(t = () => false, i = () => false) {
    return new ci(new uh(t, i));
  }
  static forPaths(t = false) {
    return new ci(new ho(void 0, !t));
  }
  static forStrings() {
    return new ci(new ch());
  }
  static forConfigKeys() {
    return new ci(new hh());
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
      _r(s);
      for (const r of s) this.set(r, t);
    } else {
      const s = t.slice(0);
      _r(s);
      for (const r of s) this.set(r[0], r[1]);
    }
  }
  set(t, i) {
    const s = this._iter.reset(t);
    let r;
    this._root || (this._root = new Ti(), this._root.segment = s.value());
    const n = [];
    for (r = this._root; ; ) {
      const a = s.cmp(r.segment);
      if (a > 0) r.left || (r.left = new Ti(), r.left.segment = s.value()), n.push([-1, r]), r = r.left;
      else if (a < 0) r.right || (r.right = new Ti(), r.right.segment = s.value()), n.push([1, r]), r = r.right;
      else if (s.hasNext()) s.next(), r.mid || (r.mid = new Ti(), r.mid.segment = s.value()), n.push([0, r]), r = r.mid;
      else break;
    }
    const o = rt.unwrap(r.value);
    r.value = rt.wrap(i), r.key = t;
    for (let a = n.length - 1; a >= 0; a--) {
      const l = n[a][1];
      l.updateHeight();
      const c = l.balanceFactor();
      if (c < -1 || c > 1) {
        const h = n[a][0], u = n[a + 1][0];
        if (h === 1 && u === 1) n[a][1] = l.rotateLeft();
        else if (h === -1 && u === -1) n[a][1] = l.rotateRight();
        else if (h === 1 && u === -1) l.right = n[a + 1][1] = n[a + 1][1].rotateRight(), n[a][1] = l.rotateLeft();
        else if (h === -1 && u === 1) l.left = n[a + 1][1] = n[a + 1][1].rotateLeft(), n[a][1] = l.rotateRight();
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
    return rt.unwrap(this._getNode(t)?.value);
  }
  _getNode(t) {
    const i = this._iter.reset(t);
    let s = this._root;
    for (; s; ) {
      const r = i.cmp(s.segment);
      if (r > 0) s = s.left;
      else if (r < 0) s = s.right;
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
    const s = this._iter.reset(t), r = [];
    let n = this._root;
    for (; n; ) {
      const o = s.cmp(n.segment);
      if (o > 0) r.push([-1, n]), n = n.left;
      else if (o < 0) r.push([1, n]), n = n.right;
      else if (s.hasNext()) s.next(), r.push([0, n]), n = n.mid;
      else break;
    }
    if (n) {
      if (i ? (n.left = void 0, n.mid = void 0, n.right = void 0, n.height = 1) : (n.key = void 0, n.value = void 0), !n.mid && !n.value) if (n.left && n.right) {
        const o = this._min(n.right);
        if (o.key) {
          const { key: a, value: l, segment: c } = o;
          this._delete(o.key, false), n.key = a, n.value = l, n.segment = c;
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
    const i = this._iter.reset(t);
    let s = this._root, r;
    for (; s; ) {
      const n = i.cmp(s.segment);
      if (n > 0) s = s.left;
      else if (n < 0) s = s.right;
      else if (i.hasNext()) i.next(), r = rt.unwrap(s.value) || r, s = s.mid;
      else break;
    }
    return s && rt.unwrap(s.value) || r;
  }
  findSuperstr(t) {
    return this._findSuperstrOrElement(t, false);
  }
  _findSuperstrOrElement(t, i) {
    const s = this._iter.reset(t);
    let r = this._root;
    for (; r; ) {
      const n = s.cmp(r.segment);
      if (n > 0) r = r.left;
      else if (n < 0) r = r.right;
      else if (s.hasNext()) s.next(), r = r.mid;
      else return r.mid ? this._entries(r.mid) : i ? rt.unwrap(r.value) : void 0;
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
    t && (t.left && this._dfsEntries(t.left, i), t.value !== void 0 && i.push([t.key, rt.unwrap(t.value)]), t.mid && this._dfsEntries(t.mid, i), t.right && this._dfsEntries(t.right, i));
  }
  _isBalanced() {
    const t = (i) => {
      if (!i) return true;
      const s = i.balanceFactor();
      return s < -1 || s > 1 ? false : t(i.left) && t(i.right);
    };
    return t(this._root);
  }
}, v0 = Ue("fileService"), dh = class zi {
  constructor(t, i) {
    this.ignorePathCasing = i, this.correlationId = void 0, this.added = new ht(() => {
      const s = qs.forUris(() => this.ignorePathCasing);
      return s.fill(this.rawAdded.map((r) => [r, true])), s;
    }), this.updated = new ht(() => {
      const s = qs.forUris(() => this.ignorePathCasing);
      return s.fill(this.rawUpdated.map((r) => [r, true])), s;
    }), this.deleted = new ht(() => {
      const s = qs.forUris(() => this.ignorePathCasing);
      return s.fill(this.rawDeleted.map((r) => [r, true])), s;
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
      this.correlationId !== zi.MIXED_CORRELATION && (typeof s.cId == "number" ? this.correlationId === void 0 ? this.correlationId = s.cId : this.correlationId !== s.cId && (this.correlationId = zi.MIXED_CORRELATION) : this.correlationId !== void 0 && (this.correlationId = zi.MIXED_CORRELATION));
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
    const r = s.length > 0;
    return !!((!r || s.includes(1)) && (this.added.value.get(t) || i.includeChildren && this.added.value.findSuperstr(t)) || (!r || s.includes(0)) && (this.updated.value.get(t) || i.includeChildren && this.updated.value.findSuperstr(t)) || (!r || s.includes(2)) && (this.deleted.value.findSubstr(t) || i.includeChildren && this.deleted.value.findSuperstr(t)));
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
dh.MIXED_CORRELATION = null;
var xe = class Fe {
  static formatSize(t) {
    return Sr(t) || (t = 0), t < Fe.KB ? w(2024, null, t.toFixed(0)) : t < Fe.MB ? w(2025, null, (t / Fe.KB).toFixed(2)) : t < Fe.GB ? w(2026, null, (t / Fe.MB).toFixed(2)) : t < Fe.TB ? w(2027, null, (t / Fe.GB).toFixed(2)) : w(2028, null, (t / Fe.TB).toFixed(2));
  }
};
xe.KB = 1024, xe.MB = xe.KB * xe.KB, xe.GB = xe.MB * xe.KB, xe.TB = xe.GB * xe.KB;
var fh = xe;
async function _h(e, t, i, s, r) {
  try {
    const n = await import("@vscode/spdlog");
    n.setFlushOn(0);
    const o = await n.createAsyncRotatingLogger(e, t, i, s);
    return r ? o.clearFormatters() : o.setPattern("%Y-%m-%d %H:%M:%S.%e [%l] %v"), o;
  } catch (n) {
    console.error(n);
  }
  return null;
}
function fo(e, t, i) {
  switch (t) {
    case ie.Trace:
      e.trace(i);
      break;
    case ie.Debug:
      e.debug(i);
      break;
    case ie.Info:
      e.info(i);
      break;
    case ie.Warning:
      e.warn(i);
      break;
    case ie.Error:
      e.error(i);
      break;
    case ie.Off:
      break;
    default:
      throw new Error(`Invalid log level ${t}`);
  }
}
function _o(e, t) {
  switch (t) {
    case ie.Trace:
      e.setLevel(0);
      break;
    case ie.Debug:
      e.setLevel(1);
      break;
    case ie.Info:
      e.setLevel(2);
      break;
    case ie.Warning:
      e.setLevel(3);
      break;
    case ie.Error:
      e.setLevel(4);
      break;
    case ie.Off:
      e.setLevel(6);
      break;
    default:
      throw new Error(`Invalid log level ${t}`);
  }
}
var ph = class extends co {
  constructor(e, t, i, s, r) {
    super(), this.buffer = [], this.setLevel(r), this._loggerCreationPromise = this._createSpdLogLogger(e, t, i, s), this._register(this.onDidChangeLogLevel((n) => {
      this._logger && _o(this._logger, n);
    }));
  }
  async _createSpdLogLogger(e, t, i, s) {
    const r = i ? 6 : 1, n = 30 / r * fh.MB, o = await _h(e, t, n, r, s);
    if (o) {
      this._logger = o, _o(this._logger, this.getLevel());
      for (const { level: a, message: l } of this.buffer) fo(this._logger, a, l);
      this.buffer = [];
    }
  }
  log(e, t) {
    this._logger ? fo(this._logger, e, t) : this.getLevel() <= e && this.buffer.push({ level: e, message: t });
  }
  flush() {
    this._logger ? this.flushLogger() : this._loggerCreationPromise.then(() => this.flushLogger());
  }
  dispose() {
    this._logger ? this.disposeLogger() : this._loggerCreationPromise.then(() => this.disposeLogger()), super.dispose();
  }
  flushLogger() {
    this._logger && this._logger.flush();
  }
  disposeLogger() {
    this._logger && (this._logger.drop(), this._logger = void 0);
  }
}, mh = class extends th {
  doCreateLogger(e, t, i) {
    return new ph(lh(), e.fsPath, !i?.donotRotate, !!i?.donotUseFormatters, t);
  }
};
p();
var ve, Ws = globalThis.vscode;
if (typeof Ws < "u" && typeof Ws.context < "u") {
  const e = Ws.context.configuration();
  if (e) ve = e.product;
  else throw new Error("Sandbox: unable to resolve product configuration from preload script.");
} else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
  if (ve = globalThis._VSCODE_PRODUCT_JSON, Ie.VSCODE_DEV, Ie.VSCODE_DEV_ONBOARDING && Object.assign(ve, { nameShort: `${ve.nameShort} Onboarding`, nameLong: `${ve.nameLong} Onboarding`, dataFolderName: `${ve.dataFolderName}-onboarding`, serverDataFolderName: ve.serverDataFolderName ? `${ve.serverDataFolderName}-onboarding` : void 0 }), !ve.version) {
    const e = globalThis._VSCODE_PACKAGE_JSON;
    Object.assign(ve, { version: e.version });
  }
} else ve = {}, Object.keys(ve).length === 0 && Object.assign(ve, { version: "1.94.0-dev", nameShort: "Cursor Dev", nameLong: "Cursor Dev", applicationName: "cursor", dataFolderName: ".cursor", urlProtocol: "cursor", reportIssueUrl: "https://github.com/getcursor/cursor/issues/new", licenseName: "MIT", licenseUrl: "https://github.com/getcursor/cursor/", serverLicenseUrl: "https://github.com/getcursor/cursor/" });
var gh = ve;
p(), p();
var vh = class {
  constructor() {
    this.data = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    Qi(dt(e)), Qi(Ua(t)), Qi(!this.data.has(e), "There is already an extension with this id"), this.data.set(e, t);
  }
  knows(e) {
    return this.data.has(e);
  }
  as(e) {
    return this.data.get(e) || null;
  }
  dispose() {
    this.data.forEach((e) => {
      Ji(e.dispose) && e.dispose();
    }), this.data.clear();
  }
}, yh = new vh(), y0 = new ro("terminalTabFocusMode", false, true), Yt = ((e) => (e[e.Api = 0] = "Api", e[e.Process = 1] = "Process", e[e.Sequence = 2] = "Sequence", e[e.Config = 3] = "Config", e))(Yt || {}), bt = ((e) => (e.LocalPty = "localPty", e.PtyHost = "ptyHost", e.PtyHostWindow = "ptyHostWindow", e.Logger = "logger", e.Heartbeat = "heartbeat", e))(bt || {}), w0 = Ue("ptyService"), po = ((e) => (e[e.BeatInterval = 5e3] = "BeatInterval", e[e.ConnectingBeatInterval = 2e4] = "ConnectingBeatInterval", e[e.FirstWaitMultiplier = 1.2] = "FirstWaitMultiplier", e[e.SecondWaitMultiplier = 1] = "SecondWaitMultiplier", e[e.CreateProcessTimeout = 5e3] = "CreateProcessTimeout", e))(po || {}), wh = { Backend: "workbench.contributions.terminal.processBackend" }, bh = class {
  constructor() {
    this._backends = /* @__PURE__ */ new Map();
  }
  get backends() {
    return this._backends;
  }
  registerTerminalBackend(e) {
    const t = this._sanitizeRemoteAuthority(e.remoteAuthority);
    if (this._backends.has(t)) throw new Error(`A terminal backend with remote authority '${t}' was already registered.`);
    return this._backends.set(t, e), _e(() => {
      this._backends.get(t) === e && this._backends.delete(t);
    });
  }
  getTerminalBackend(e) {
    return this._backends.get(this._sanitizeRemoteAuthority(e));
  }
  _sanitizeRemoteAuthority(e) {
    return e?.toLowerCase() ?? "";
  }
};
yh.add(wh.Backend, new bh());
var b0 = Ue("localPtyService"), E0 = Ue("terminalLogService");
p();
var Eh = class extends X {
  constructor() {
    super(), this._onBeat = this._register(new k()), this.onBeat = this._onBeat.event;
    const e = setInterval(() => {
      this._onBeat.fire();
    }, po.BeatInterval);
    this._register(_e(() => clearInterval(e)));
  }
};
p();
import { execFile as mo, exec as Sh } from "child_process";
import * as kh from "fs";
p();
import { userInfo as xh } from "os";
p();
import * as go from "os";
var vo = /^\d+$/, Lh = /^Microsoft.PowerShell_.*/, Ih = /^Microsoft.PowerShellPreview_.*/, Qt;
switch (process.arch) {
  case "ia32":
    Qt = 1;
    break;
  case "arm":
  case "arm64":
    Qt = 2;
    break;
  default:
    Qt = 0;
    break;
}
var Et;
process.env.PROCESSOR_ARCHITEW6432 ? Et = process.env.PROCESSOR_ARCHITEW6432 === "ARM64" ? 2 : 0 : process.env.PROCESSOR_ARCHITECTURE === "ARM64" ? Et = 2 : process.env.PROCESSOR_ARCHITECTURE === "X86" ? Et = 1 : Et = 0;
var Jt = class {
  constructor(e, t, i) {
    this.exePath = e, this.displayName = t, this.knownToExist = i;
  }
  async exists() {
    return this.knownToExist === void 0 && (this.knownToExist = await Ce.existsFile(this.exePath)), this.knownToExist;
  }
};
function Dh({ useAlternateBitness: e = false } = {}) {
  return e ? Qt === 0 ? process.env["ProgramFiles(x86)"] || null : Et === 0 && process.env.ProgramW6432 || null : process.env.ProgramFiles || null;
}
async function Ai({ useAlternateBitness: e = false, findPreview: t = false } = {}) {
  const i = Dh({ useAlternateBitness: e });
  if (!i) return null;
  const s = O(i, "PowerShell");
  if (!await Ce.existsDirectory(s)) return null;
  let r = -1, n = null;
  for (const l of await Ss.readdir(s)) {
    let c = -1;
    if (t) {
      const u = l.indexOf("-");
      if (u < 0) continue;
      const d = l.substring(0, u);
      if (!vo.test(d) || l.substring(u + 1) !== "preview") continue;
      c = parseInt(d, 10);
    } else {
      if (!vo.test(l)) continue;
      c = parseInt(l, 10);
    }
    if (c <= r) continue;
    const h = O(s, l, "pwsh.exe");
    await Ce.existsFile(h) && (n = h, r = c);
  }
  if (!n) return null;
  const o = i.includes("x86") ? " (x86)" : "", a = t ? " Preview" : "";
  return new Jt(n, `PowerShell${a}${o}`, true);
}
async function yo({ findPreview: e } = {}) {
  if (!process.env.LOCALAPPDATA) return null;
  const t = O(process.env.LOCALAPPDATA, "Microsoft", "WindowsApps");
  if (!await Ce.existsDirectory(t)) return null;
  const { pwshMsixDirRegex: i, pwshMsixName: s } = e ? { pwshMsixDirRegex: Ih, pwshMsixName: "PowerShell Preview (Store)" } : { pwshMsixDirRegex: Lh, pwshMsixName: "PowerShell (Store)" };
  for (const r of await Ss.readdir(t)) if (i.test(r)) {
    const n = O(t, r, "pwsh.exe");
    return new Jt(n, s);
  }
  return null;
}
function Rh() {
  const e = O(go.homedir(), ".dotnet", "tools", "pwsh.exe");
  return new Jt(e, ".NET Core PowerShell Global Tool");
}
function Th() {
  const e = O(go.homedir(), "scoop", "apps"), t = O(e, "pwsh", "current", "pwsh.exe");
  return new Jt(t, "PowerShell (Scoop)");
}
function Ah() {
  const e = O(process.env.windir, Qt === 1 && Et !== 1 ? "SysNative" : "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
  return new Jt(e, "Windows PowerShell", true);
}
async function* Ph() {
  let e = await Ai();
  e && (yield e), e = await Ai({ useAlternateBitness: true }), e && (yield e), e = await yo(), e && (yield e), e = Rh(), e && (yield e), e = await Ai({ findPreview: true }), e && (yield e), e = await yo({ findPreview: true }), e && (yield e), e = await Ai({ useAlternateBitness: true, findPreview: true }), e && (yield e), e = await Th(), e && (yield e), e = Ah(), e && (yield e);
}
async function* Ch() {
  for await (const e of Ph()) await e.exists() && (yield e);
}
async function Mh() {
  for await (const e of Ch()) return e;
  return null;
}
async function Oh(e, t) {
  return e === Ct.Windows ? N ? Nh() : fc(t) : Uh(e, t);
}
var Gs = null;
function Uh(e, t) {
  if (pt && e === Ct.Macintosh || qe && e === Ct.Linux) return "/bin/bash";
  if (!Gs) {
    let i;
    if (N) i = "/bin/bash";
    else {
      if (i = t.SHELL, !i) try {
        i = xh().shell;
      } catch {
      }
      i || (i = "sh"), i === "/bin/false" && (i = "/bin/bash");
    }
    Gs = i;
  }
  return Gs;
}
var zs = null;
async function Nh() {
  return zs || (zs = (await Mh()).exePath), zs;
}
p();
var Vs = class extends X {
  constructor(e, t) {
    super(), this._logService = t, this._lastRequestId = 0, this._pendingRequests = /* @__PURE__ */ new Map(), this._pendingRequestDisposables = /* @__PURE__ */ new Map(), this._onCreateRequest = this._register(new k()), this.onCreateRequest = this._onCreateRequest.event, this._timeout = e === void 0 ? 15e3 : e, this._register(_e(() => {
      for (const i of this._pendingRequestDisposables.values()) je(i);
    }));
  }
  createRequest(e) {
    return new Promise((t, i) => {
      const s = ++this._lastRequestId;
      this._pendingRequests.set(s, t), this._onCreateRequest.fire({ requestId: s, ...e });
      const r = new hs();
      ze(this._timeout, r.token).then(() => i(`Request ${s} timed out (${this._timeout}ms)`)), this._pendingRequestDisposables.set(s, [_e(() => r.cancel())]);
    });
  }
  acceptReply(e, t) {
    const i = this._pendingRequests.get(e);
    i ? (this._pendingRequests.delete(e), je(this._pendingRequestDisposables.get(e) || []), this._pendingRequestDisposables.delete(e), i(t)) : this._logService.warn(`RequestStore#acceptReply was called without receiving a matching request ${e}`);
  }
};
Vs = v([Be(1, st)], Vs), p();
var Fh = class {
  constructor(e) {
    this._callback = e, this._terminalBufferMap = /* @__PURE__ */ new Map();
  }
  dispose() {
    for (const e of this._terminalBufferMap.values()) e.dispose();
  }
  startBuffering(e, t, i = 5) {
    const s = t((r) => {
      const n = typeof r == "string" ? r : r.data;
      let o = this._terminalBufferMap.get(e);
      if (o) {
        o.data.push(n);
        return;
      }
      const a = mn(() => this.flushBuffer(e), i);
      o = { data: [n], timeout: a, dispose: () => {
        a.dispose(), this.flushBuffer(e), s.dispose();
      } }, this._terminalBufferMap.set(e, o);
    });
    return s;
  }
  stopBuffering(e) {
    this._terminalBufferMap.get(e)?.dispose();
  }
  flushBuffer(e) {
    const t = this._terminalBufferMap.get(e);
    t && (this._terminalBufferMap.delete(e), t.timeout.dispose(), this._callback(e, t.data.join("")));
  }
};
p();
var Bh = /[\u0000-\u001F\u007F]/g;
function $h(e) {
  return e.replace(Bh, "");
}
function Hh(e, t) {
  let i = $h(e);
  i.includes("\\") && (i = i.replace(/\\/g, "\\\\"));
  let s;
  switch (t) {
    case "bash":
    case "sh":
    case "zsh":
    case "gitbash":
      s = { bothQuotes: (n) => `$'${n.replace(/'/g, "\\'")}'`, singleQuotes: (n) => `'${n.replace(/'/g, "\\'")}'`, noSingleQuotes: (n) => `'${n}'` };
      break;
    case "fish":
      s = { bothQuotes: (n) => `"${n.replace(/"/g, '\\"')}"`, singleQuotes: (n) => `'${n.replace(/'/g, "\\'")}'`, noSingleQuotes: (n) => `'${n}'` };
      break;
    case "pwsh":
      s = { bothQuotes: (n) => `"${n.replace(/"/g, '`"')}"`, singleQuotes: (n) => `'${n.replace(/'/g, "''")}'`, noSingleQuotes: (n) => `'${n}'` };
      break;
    default:
      s = { bothQuotes: (n) => `$'${n.replace(/'/g, "\\'")}'`, singleQuotes: (n) => `'${n.replace(/'/g, "\\'")}'`, noSingleQuotes: (n) => `'${n}'` };
      break;
  }
  const r = /[\`\$\|\&\>\~\#\!\^\*\;\<]/g;
  return i = i.replace(r, ""), i.includes("'") && i.includes('"') ? s.bothQuotes(i) : i.includes("'") ? s.singleQuotes(i) : s.noSingleQuotes(i);
}
function qh(e) {
  return e.match(/^['"].*['"]$/) && (e = e.substring(1, e.length - 1)), Fr === Ct.Windows && e && e[1] === ":" ? e[0].toUpperCase() + e.substring(1) : e;
}
p();
import * as Pi from "os";
p();
var Ne = ((e) => (e[e.Replace = 1] = "Replace", e[e.Append = 2] = "Append", e[e.Prepend = 3] = "Prepend", e))(Ne || {});
p();
function Wh(e) {
  return new Map(e);
}
function Gh(e) {
  return new Map(e ?? []);
}
function zh(e) {
  return new Map(e.map((t) => [t[0], { map: Wh(t[1]), descriptionMap: Gh(t[2]) }]));
}
p();
var Vh = /* @__PURE__ */ new Map([[Ne.Append, "APPEND"], [Ne.Prepend, "PREPEND"], [Ne.Replace, "REPLACE"]]), Kh = class {
  constructor(e) {
    this.collections = e, this.map = /* @__PURE__ */ new Map(), this.descriptionMap = /* @__PURE__ */ new Map(), e.forEach((t, i) => {
      this.populateDescriptionMap(t, i);
      const s = t.map.entries();
      let r = s.next();
      for (; !r.done; ) {
        const n = r.value[1], o = r.value[0];
        let a = this.map.get(o);
        if (a || (a = [], this.map.set(o, a)), a.length > 0 && a[0].type === Ne.Replace) {
          r = s.next();
          continue;
        }
        const l = { extensionIdentifier: i, value: n.value, type: n.type, scope: n.scope, variable: n.variable, options: n.options };
        l.scope || delete l.scope, a.unshift(l), r = s.next();
      }
    });
  }
  async applyToProcessEnvironment(e, t, i) {
    let s;
    N && (s = {}, Object.keys(e).forEach((r) => s[r.toLowerCase()] = r));
    for (const [r, n] of this.getVariableMap(t)) {
      const o = N && s[r.toLowerCase()] || r;
      for (const a of n) {
        const l = i ? await i(a.value) : a.value;
        if (a.options?.applyAtProcessCreation ?? true) switch (a.type) {
          case Ne.Append:
            e[o] = (e[o] || "") + l;
            break;
          case Ne.Prepend:
            e[o] = l + (e[o] || "");
            break;
          case Ne.Replace:
            e[o] = l;
            break;
        }
        if (a.options?.applyAtShellIntegration ?? false) {
          const c = `VSCODE_ENV_${Vh.get(a.type)}`;
          e[c] = (e[c] ? e[c] + ":" : "") + r + "=" + this._encodeColons(l);
        }
      }
    }
  }
  _encodeColons(e) {
    return e.replaceAll(":", "\\x3a");
  }
  diff(e, t) {
    const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    if (e.getVariableMap(t).forEach((n, o) => {
      const a = this.getVariableMap(t).get(o), l = bo(n, a);
      l && i.set(o, l);
    }), this.getVariableMap(t).forEach((n, o) => {
      const a = e.getVariableMap(t).get(o), l = bo(n, a);
      l && r.set(o, l);
    }), this.getVariableMap(t).forEach((n, o) => {
      const a = e.getVariableMap(t).get(o), l = jh(n, a);
      l && s.set(o, l);
    }), !(i.size === 0 && s.size === 0 && r.size === 0)) return { added: i, changed: s, removed: r };
  }
  getVariableMap(e) {
    const t = /* @__PURE__ */ new Map();
    for (const i of this.map.values()) {
      const s = i.filter((r) => wo(r, e));
      s.length > 0 && t.set(s[0].variable, s);
    }
    return t;
  }
  getDescriptionMap(e) {
    const t = /* @__PURE__ */ new Map();
    for (const i of this.descriptionMap.values()) {
      const s = i.filter((r) => wo(r, e, true));
      for (const r of s) t.set(r.extensionIdentifier, r.description);
    }
    return t;
  }
  populateDescriptionMap(e, t) {
    if (!e.descriptionMap) return;
    const i = e.descriptionMap.entries();
    let s = i.next();
    for (; !s.done; ) {
      const r = s.value[1], n = s.value[0];
      let o = this.descriptionMap.get(n);
      o || (o = [], this.descriptionMap.set(n, o));
      const a = { extensionIdentifier: t, scope: r.scope, description: r.description };
      a.scope || delete a.scope, o.push(a), s = i.next();
    }
  }
};
function wo(e, t, i = false) {
  return e.scope ? !!(e.scope.workspaceFolder && t?.workspaceFolder && e.scope.workspaceFolder.index === t.workspaceFolder.index) : i ? t === e.scope : true;
}
function bo(e, t) {
  if (!t) return e;
  const i = /* @__PURE__ */ new Set();
  t.forEach((r) => i.add(r.extensionIdentifier));
  const s = [];
  return e.forEach((r) => {
    i.has(r.extensionIdentifier) || s.push(r);
  }), s.length === 0 ? void 0 : s;
}
function jh(e, t) {
  if (!t) return;
  const i = /* @__PURE__ */ new Map();
  t.forEach((r) => i.set(r.extensionIdentifier, r));
  const s = [];
  return e.forEach((r) => {
    const n = i.get(r.extensionIdentifier);
    n && (r.type !== n.type || r.value !== n.value || r.scope?.workspaceFolder?.index !== n.scope?.workspaceFolder?.index) && s.push(n);
  }), s.length === 0 ? void 0 : s;
}
import { chmod as Eo, realpathSync as Xh, mkdirSync as Yh } from "fs";
import { promisify as So } from "util";
function nt() {
  const e = /(\d+)\.(\d+)\.(\d+)/g.exec(Pi.release());
  let t = 0;
  return e && e.length === 4 && (t = parseInt(e[3])), t;
}
async function Qh(e, t, i, s, r, n = false) {
  if (!t.shellIntegration.enabled) return { type: "failure", reason: "injectionSettingDisabled" };
  if (!e.executable) return { type: "failure", reason: "noExecutable" };
  if (e.isFeatureTerminal && !e.forceShellIntegration) return { type: "failure", reason: "featureTerminal" };
  if (e.ignoreShellIntegration) return { type: "failure", reason: "ignoreShellIntegrationFlag" };
  if (N && (!t.windowsEnableConpty || nt() < 18309)) return { type: "failure", reason: "winpty" };
  const o = e.args, a = $r === "win32" ? vi(e.executable).toLowerCase() : vi(e.executable), l = Ut(Bt.asFileUri("").fsPath), c = "injection";
  let h;
  const u = { VSCODE_INJECTION: "1" };
  t.shellIntegration.nonce && (u.VSCODE_NONCE = t.shellIntegration.nonce);
  const d = ["PATH", "VIRTUAL_ENV", "HOME", "SHELL", "PWD"];
  if (e.shellIntegrationEnvironmentReporting && (N ? (t.windowsUseConptyDll || t.windowsEnableConpty && nt() >= 22631 && a !== "bash.exe") && (u.VSCODE_SHELL_ENV_REPORTING = d.join(",")) : u.VSCODE_SHELL_ENV_REPORTING = d.join(",")), N) return a === "pwsh.exe" || a === "powershell.exe" ? (!o || Lo(o) ? h = Q.get("windows-pwsh") : xo(o) && (h = Q.get("windows-pwsh-login")), h ? (h = [...h], h[h.length - 1] = mt(h[h.length - 1], l, ""), u.VSCODE_STABLE = r.quality === "stable" ? "1" : "0", { type: c, newArgs: h, envMixin: u }) : { type: "failure", reason: "unsupportedArgs" }) : a === "bash.exe" ? (!o || o.length === 0 ? h = Q.get("bash") : Ui(o) && (u.VSCODE_SHELL_LOGIN = "1", Ci(t, u, a), h = Q.get("bash")), h ? (h = [...h], h[h.length - 1] = mt(h[h.length - 1], l), u.VSCODE_STABLE = r.quality === "stable" ? "1" : "0", { type: c, newArgs: h, envMixin: u }) : { type: "failure", reason: "unsupportedArgs" }) : (s.warn(`Shell integration cannot be enabled for executable "${e.executable}" and args`, e.args), { type: "failure", reason: "unsupportedShell" });
  switch (a) {
    case "bash":
      return !o || o.length === 0 ? h = Q.get("bash") : Ui(o) && (u.VSCODE_SHELL_LOGIN = "1", Ci(t, u, a), h = Q.get("bash")), h ? (h = [...h], h[h.length - 1] = mt(h[h.length - 1], l), u.VSCODE_STABLE = r.quality === "stable" ? "1" : "0", { type: c, newArgs: h, envMixin: u }) : { type: "failure", reason: "unsupportedArgs" };
    case "fish":
      return !o || o.length === 0 ? h = Q.get("fish") : Ui(o) ? h = Q.get("fish-login") : (o === Q.get("fish") || o === Q.get("fish-login")) && (h = o), h ? (Ci(t, u, a), h = [...h], h[h.length - 1] = mt(h[h.length - 1], l), { type: c, newArgs: h, envMixin: u }) : { type: "failure", reason: "unsupportedArgs" };
    case "pwsh":
      return !o || Lo(o) ? h = Q.get("pwsh") : xo(o) && (h = Q.get("pwsh-login")), h ? (h = [...h], h[h.length - 1] = mt(h[h.length - 1], l, ""), u.VSCODE_STABLE = r.quality === "stable" ? "1" : "0", { type: c, newArgs: h, envMixin: u }) : { type: "failure", reason: "unsupportedArgs" };
    case "zsh": {
      if (!o || o.length === 0 ? h = Q.get("zsh") : Ui(o) ? (h = Q.get("zsh-login"), Ci(t, u, a)) : (o === Q.get("zsh") || o === Q.get("zsh-login")) && (h = o), !h) return { type: "failure", reason: "unsupportedArgs" };
      h = [...h], h[h.length - 1] = mt(h[h.length - 1], l);
      let f;
      try {
        f = Pi.userInfo().username;
      } catch {
        f = "unknown";
      }
      const _ = Xh(Pi.tmpdir()), E = O(_, `${f}-${r.applicationName}-zsh`);
      if (!n) try {
        await So(Eo)(E, 960);
      } catch (R) {
        if (R.message.includes("ENOENT")) {
          try {
            Yh(E);
          } catch (U) {
            return s.error(`Failed to create zdotdir at ${E}: ${U}`), { type: "failure", reason: "failedToCreateTmpDir" };
          }
          try {
            await So(Eo)(E, 960);
          } catch {
            return s.error(`Failed to set sticky bit on ${E}: ${R}`), { type: "failure", reason: "failedToSetStickyBit" };
          }
        }
        return s.error(`Failed to set sticky bit on ${E}: ${R}`), { type: "failure", reason: "failedToSetStickyBit" };
      }
      u.ZDOTDIR = E;
      const g = i?.ZDOTDIR ?? Pi.homedir() ?? "~";
      u.USER_ZDOTDIR = g;
      const y = [];
      return y.push({ source: O(l, "out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-rc.zsh"), dest: O(E, ".zshrc") }), y.push({ source: O(l, "out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-profile.zsh"), dest: O(E, ".zprofile") }), y.push({ source: O(l, "out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-env.zsh"), dest: O(E, ".zshenv") }), y.push({ source: O(l, "out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-login.zsh"), dest: O(E, ".zlogin") }), { type: c, newArgs: h, envMixin: u, filesToCopy: y };
    }
  }
  return s.warn(`Shell integration cannot be enabled for executable "${e.executable}" and args`, e.args), { type: "failure", reason: "unsupportedShell" };
}
function Ci(e, t, i) {
  if ((qe || i === "fish") && e.environmentVariableCollections) {
    const s = zh(e.environmentVariableCollections), n = new Kh(s).getVariableMap({ workspaceFolder: e.workspaceFolder }).get("PATH"), o = [];
    if (n) for (const a of n) a.type === Ne.Prepend && o.push(a.value);
    o.length > 0 && (t.VSCODE_PATH_PREFIX = o.join(""));
  }
}
var Q = /* @__PURE__ */ new Map();
Q.set("windows-pwsh", ["-noexit", "-command", 'try { . "{0}\\out\\vs\\workbench\\contrib\\terminal\\common\\scripts\\shellIntegration.ps1" } catch {}{1}']), Q.set("windows-pwsh-login", ["-l", "-noexit", "-command", 'try { . "{0}\\out\\vs\\workbench\\contrib\\terminal\\common\\scripts\\shellIntegration.ps1" } catch {}{1}']), Q.set("pwsh", ["-noexit", "-command", '. "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration.ps1"{1}']), Q.set("pwsh-login", ["-l", "-noexit", "-command", '. "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration.ps1"']), Q.set("zsh", ["-i"]), Q.set("zsh-login", ["-il"]), Q.set("bash", ["--init-file", "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-bash.sh"]), Q.set("fish", ["--init-command", 'source "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration.fish"']), Q.set("fish-login", ["-l", "--init-command", 'source "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration.fish"']);
var Mi = ["-login", "-l"], ko = ["--login", "-l"], Jh = ["-i", "--interactive"], Oi = ["-nol", "-nologo"];
function xo(e) {
  return typeof e == "string" ? Mi.includes(e.toLowerCase()) : e.length === 1 && Mi.includes(e[0].toLowerCase()) || e.length === 2 && (Mi.includes(e[0].toLowerCase()) || Mi.includes(e[1].toLowerCase())) && (Oi.includes(e[0].toLowerCase()) || Oi.includes(e[1].toLowerCase()));
}
function Lo(e) {
  return typeof e == "string" ? Oi.includes(e.toLowerCase()) : e.length === 0 || e?.length === 1 && Oi.includes(e[0].toLowerCase());
}
function Ui(e) {
  return typeof e != "string" && (e = e.filter((t) => !Jh.includes(t.toLowerCase()))), e === "string" && ko.includes(e.toLowerCase()) || typeof e != "string" && e.length === 1 && ko.includes(e[0].toLowerCase());
}
p();
import * as Zt from "fs";
import { exec as Zh } from "child_process";
p();
var eu = Ue("productService");
p(), p();
import { exec as Ni } from "child_process";
function tu(e) {
  return new Promise((t, i) => {
    let s;
    const r = /* @__PURE__ */ new Map();
    function n(l, c, h, u, d) {
      const f = r.get(c);
      if (l === e || f) {
        const _ = { name: o(h), cmd: h, pid: l, ppid: c, load: u, mem: d };
        r.set(l, _), l === e && (s = _), f && (f.children || (f.children = []), f.children.push(_), f.children.length > 1 && (f.children = f.children.sort((E, g) => E.pid - g.pid)));
      }
    }
    function o(l) {
      const c = /--utility-sub-type=network/i, h = /--crashes-directory/i, u = /\\pipe\\winpty-control/i, d = /conhost\.exe.+--headless/i, f = /--type=([a-zA-Z-]+)/;
      if (h.exec(l)) return "electron-crash-reporter";
      if (u.exec(l)) return "winpty-agent";
      if (d.exec(l)) return "conpty-agent";
      let _ = f.exec(l);
      if (_ && _.length === 2) return _[1] === "renderer" ? "window" : _[1] === "utility" ? c.exec(l) ? "utility-network-service" : "utility-process" : _[1] === "extensionHost" ? "extension-host" : _[1] === "utilityHost" ? "utility-host" : _[1];
      const E = /[a-zA-Z-]+\.js/g;
      let g = "";
      do
        _ = E.exec(l), _ && (g += _ + " ");
      while (_);
      return g && l.indexOf("node ") < 0 && l.indexOf("node.exe") < 0 ? `electron-nodejs (${g})` : l;
    }
    if (process.platform === "win32") {
      const l = (c) => c.indexOf("\\\\?\\") === 0 || c.indexOf("\\??\\") === 0 ? c.substring(4) : c.indexOf('"\\\\?\\') === 0 || c.indexOf('"\\??\\') === 0 ? '"' + c.substring(5) : c;
      import("@vscode/windows-process-tree").then((c) => {
        c.getProcessList(e, (h) => {
          if (!h) {
            i(new Error(`Root process ${e} not found`));
            return;
          }
          c.getProcessCpuUsage(h, (u) => {
            const d = /* @__PURE__ */ new Map();
            u.forEach((f) => {
              const _ = l(f.commandLine || "");
              d.set(f.pid, { name: o(_), cmd: _, pid: f.pid, ppid: f.ppid, load: f.cpu || 0, mem: f.memory || 0 });
            }), s = d.get(e), s ? (d.forEach((f) => {
              const _ = d.get(f.ppid);
              _ && (_.children || (_.children = []), _.children.push(f));
            }), d.forEach((f) => {
              f.children && (f.children = f.children.sort((_, E) => _.pid - E.pid));
            }), t(s)) : i(new Error(`Root process ${e} not found`));
          });
        }, c.ProcessDataFlag.CommandLine | c.ProcessDataFlag.Memory);
      });
    } else {
      let l = function() {
        let c = [s];
        const h = [];
        for (; c.length; ) {
          const d = c.shift();
          d && (h.push(d.pid), d.children && (c = c.concat(d.children)));
        }
        let u = JSON.stringify(Bt.asFileUri("vs/base/node/cpuUsage.sh").fsPath);
        u += " " + h.join(" "), Ni(u, {}, (d, f, _) => {
          if (d || _) i(d || new Error(_.toString()));
          else {
            const E = f.toString().split(`
`);
            for (let g = 0; g < h.length; g++) {
              const y = r.get(h[g]);
              y.load = parseFloat(E[g]);
            }
            if (!s) {
              i(new Error(`Root process ${e} not found`));
              return;
            }
            t(s);
          }
        });
      };
      var a = l;
      Ni("which ps", {}, (c, h, u) => {
        if (c || u) if (process.platform !== "linux") i(c || new Error(u.toString()));
        else {
          const d = JSON.stringify(Bt.asFileUri("vs/base/node/ps.sh").fsPath);
          Ni(d, {}, (f, _, E) => {
            f || E ? i(f || new Error(E.toString())) : (Io(_, n), l());
          });
        }
        else {
          const d = h.toString().trim();
          Ni(`${d} -ax -o pid=,ppid=,pcpu=,pmem=,command=`, { maxBuffer: 1e3 * 1024, env: { LC_NUMERIC: "en_US.UTF-8" } }, (_, E, g) => {
            _ || g && !g.includes("screen size is bogus") ? i(_ || new Error(g.toString())) : (Io(E, n), process.platform === "linux" ? l() : s ? t(s) : i(new Error(`Root process ${e} not found`)));
          });
        }
      });
    }
  });
}
function Io(e, t) {
  const i = /^\s*([0-9]+)\s+([0-9]+)\s+([0-9]+\.[0-9]+)\s+([0-9]+\.[0-9]+)\s+(.+)$/, s = e.toString().split(`
`);
  for (const r of s) {
    const n = i.exec(r.trim());
    n && n.length === 6 && t(parseInt(n[1]), parseInt(n[2]), n[5], parseFloat(n[3]), parseFloat(n[4]));
  }
}
var Ks = [], js = class extends X {
  constructor(e, t) {
    super(), this._pid = e, this._logService = t, this._hasChildProcesses = false, this._onDidChangeHasChildProcesses = this._register(new k()), this.onDidChangeHasChildProcesses = this._onDidChangeHasChildProcesses.event, this._refreshActiveScheduler = this._register(new gs(() => this._refreshActive(), 1e3)), this._refreshInactiveScheduler = this._register(new gs(() => this._refreshInactive(), 5e3)), this._lastInactiveRefreshTime = -Number.MAX_VALUE;
  }
  set hasChildProcesses(e) {
    this._hasChildProcesses !== e && (this._hasChildProcesses = e, this._logService.debug("ChildProcessMonitor: Has child processes changed", e), this._onDidChangeHasChildProcesses.fire(e));
  }
  get hasChildProcesses() {
    return this._hasChildProcesses;
  }
  handleInput() {
    this._store.isDisposed || this._refreshActiveScheduler.schedule();
  }
  handleOutput() {
    if (this._store.isDisposed || this._refreshInactiveScheduler.isScheduled()) return;
    const e = this._lastInactiveRefreshTime + 5e3 - Date.now();
    e <= 0 ? this._refreshInactive() : this._refreshInactiveScheduler.schedule(e);
  }
  async _refreshActive() {
    if (!this._store.isDisposed) try {
      const e = await tu(this._pid);
      this.hasChildProcesses = this._processContainsChildren(e);
    } catch (e) {
      this._logService.debug("ChildProcessMonitor: Fetching process tree failed", e);
    }
  }
  _refreshInactive() {
    this._lastInactiveRefreshTime = Date.now(), this._refreshActiveScheduler.schedule();
  }
  _processContainsChildren(e) {
    if (!e.children) return false;
    if (e.children.length === 1) {
      const t = e.children[0];
      let i;
      if (t.cmd.startsWith('"')) i = t.cmd.substring(1, t.cmd.indexOf('"', 1));
      else {
        const s = t.cmd.indexOf(" ");
        s === -1 ? i = t.cmd : i = t.cmd.substring(0, s);
      }
      return Ks.indexOf(M1(i).name) === -1;
    }
    return e.children.length > 0;
  }
};
js = v([Be(1, st)], js), p();
var iu = ["cmd.exe", "powershell.exe", "pwsh.exe", "bash.exe", "git-cmd.exe", "wsl.exe", "ubuntu.exe", "ubuntu1804.exe", "kali.exe", "debian.exe", "opensuse-42.exe", "sles-12.exe", "julia.exe", "nu.exe", "node.exe"], su = [/^python(\d(\.\d{0,2})?)?\.exe$/], Xs, Do = class extends X {
  constructor(e) {
    if (super(), this._rootProcessId = e, this._shellTitle = "", this._onShellNameChanged = this._register(new k()), this._onShellTypeChanged = this._register(new k()), !N) throw new Error(`WindowsShellHelper cannot be instantiated on ${y1}`);
    this._startMonitoringShell();
  }
  get shellType() {
    return this._shellType;
  }
  get shellTitle() {
    return this._shellTitle;
  }
  get onShellNameChanged() {
    return this._onShellNameChanged.event;
  }
  get onShellTypeChanged() {
    return this._onShellTypeChanged.event;
  }
  async _startMonitoringShell() {
    this._store.isDisposed || this.checkShell();
  }
  async checkShell() {
    N && (await ze(300), this.getShellName().then((e) => {
      const t = this.getShellType(e);
      t !== this._shellType && (this._onShellTypeChanged.fire(t), this._onShellNameChanged.fire(e), this._shellType = t, this._shellTitle = e);
    }));
  }
  traverseTree(e) {
    if (!e) return "";
    if (iu.indexOf(e.name) === -1) return e.name;
    for (const i of su) if (e.name.match(i)) return e.name;
    if (!e.children || e.children.length === 0) return e.name;
    let t = 0;
    for (; t < e.children.length; t++) {
      const i = e.children[t];
      if (!i.children || i.children.length === 0 || i.children[0].name !== "conhost.exe") break;
    }
    return t >= e.children.length ? e.name : this.traverseTree(e.children[t]);
  }
  async getShellName() {
    return this._store.isDisposed ? Promise.resolve("") : this._currentRequest ? this._currentRequest : (Xs || (Xs = await import("@vscode/windows-process-tree")), this._currentRequest = new Promise((e) => {
      Xs.getProcessTree(this._rootProcessId, (t) => {
        const i = this.traverseTree(t);
        this._currentRequest = void 0, e(i);
      });
    }), this._currentRequest);
  }
  getShellType(e) {
    switch (e.toLowerCase()) {
      case "cmd.exe":
        return "cmd";
      case "powershell.exe":
      case "pwsh.exe":
        return "pwsh";
      case "bash.exe":
      case "git-cmd.exe":
        return "gitbash";
      case "julia.exe":
        return "julia";
      case "node.exe":
        return "node";
      case "nu.exe":
        return "nu";
      case "wsl.exe":
      case "ubuntu.exe":
      case "ubuntu1804.exe":
      case "kali.exe":
      case "debian.exe":
      case "opensuse-42.exe":
      case "sles-12.exe":
        return "wsl";
      default:
        return e.match(/python(\d(\.\d{0,2})?)?\.exe/) ? "python" : void 0;
    }
  }
};
v([bn(500)], Do.prototype, "checkShell", null);
import { spawn as ru } from "node-pty";
var Ro = /* @__PURE__ */ new Map([["bash", "bash"], ["csh", "csh"], ["fish", "fish"], ["ksh", "ksh"], ["sh", "sh"], ["zsh", "zsh"]]), To = /* @__PURE__ */ new Map([["pwsh", "pwsh"], ["powershell", "pwsh"], ["python", "python"], ["julia", "julia"], ["nu", "nu"], ["node", "node"]]), ot = class extends X {
  constructor(e, t, i, s, r, n, o, a, l) {
    super(), this.shellLaunchConfig = e, this._executableEnv = n, this._options = o, this._logService = a, this._productService = l, this.id = 0, this.shouldPersist = false, this._properties = { cwd: "", initialCwd: "", fixedDimensions: { cols: void 0, rows: void 0 }, title: "", shellType: void 0, hasChildProcesses: true, resolvedShellLaunchConfig: {}, overrideDimensions: void 0, failedShellIntegrationActivation: false, usedShellIntegrationInjection: void 0, shellIntegrationInjectionFailureReason: void 0 }, this._currentTitle = "", this._titleInterval = null, this._isPtyPaused = false, this._unacknowledgedCharCount = 0, this._onProcessData = this._register(new k()), this.onProcessData = this._onProcessData.event, this._onProcessReady = this._register(new k()), this.onProcessReady = this._onProcessReady.event, this._onDidChangeProperty = this._register(new k()), this.onDidChangeProperty = this._onDidChangeProperty.event, this._onProcessExit = this._register(new k()), this.onProcessExit = this._onProcessExit.event;
    let c;
    N ? c = vi(this.shellLaunchConfig.executable || "") : c = "xterm-256color", this._initialCwd = t, this._properties.initialCwd = this._initialCwd, this._properties.cwd = this._initialCwd;
    const h = this._options.windowsEnableConpty && process.platform === "win32" && nt() >= 18309, u = h && this._options.windowsUseConptyDll;
    this._ptyOptions = { name: c, cwd: t, env: r, cols: i, rows: s, useConpty: h, useConptyDll: u, conptyInheritCursor: h && !!e.initialText }, N && (h && i === 0 && s === 0 && this.shellLaunchConfig.executable?.endsWith("Git\\bin\\bash.exe") && (this._delayedResizer = this._register(new nu()), this._register(this._delayedResizer.onTrigger((d) => {
      this._delayedResizer?.dispose(), this._delayedResizer = void 0, d.cols && d.rows && this.resize(d.cols, d.rows);
    }))), this._register(this.onProcessReady((d) => {
      this._windowsShellHelper = this._register(new Do(d.pid)), this._register(this._windowsShellHelper.onShellTypeChanged((f) => this._onDidChangeProperty.fire({ type: "shellType", value: f }))), this._register(this._windowsShellHelper.onShellNameChanged((f) => this._onDidChangeProperty.fire({ type: "title", value: f })));
    }))), this._register(_e(() => {
      this._titleInterval && (clearInterval(this._titleInterval), this._titleInterval = null);
    })), this._register(_e(() => {
      this._ptyProcess = void 0, this._processStartupComplete = void 0;
    }));
  }
  get exitMessage() {
    return this._exitMessage;
  }
  get currentTitle() {
    return this._windowsShellHelper?.shellTitle || this._currentTitle;
  }
  get shellType() {
    return N ? this._windowsShellHelper?.shellType : Ro.get(this._currentTitle) || To.get(this._currentTitle);
  }
  get hasChildProcesses() {
    return this._childProcessMonitor?.hasChildProcesses || false;
  }
  async start() {
    const t = (await Promise.all([this._validateCwd(), this._validateExecutable()])).find((s) => s !== void 0);
    if (t) return t;
    const i = await Qh(this.shellLaunchConfig, this._options, this._ptyOptions.env, this._logService, this._productService);
    if (i.type === "injection") {
      if (this._onDidChangeProperty.fire({ type: "usedShellIntegrationInjection", value: true }), i.envMixin) for (const [s, r] of Object.entries(i.envMixin)) this._ptyOptions.env ||= {}, this._ptyOptions.env[s] = r;
      if (i.filesToCopy) for (const s of i.filesToCopy) try {
        await Zt.promises.mkdir(Ut(s.dest), { recursive: true }), await Zt.promises.copyFile(s.source, s.dest);
      } catch {
      }
    } else this._onDidChangeProperty.fire({ type: "failedShellIntegrationActivation", value: true }), this._onDidChangeProperty.fire({ type: "shellIntegrationInjectionFailureReason", value: i.reason }), this._options.shellIntegration.nonce && (this._ptyOptions.env ||= {}, this._ptyOptions.env.VSCODE_NONCE = this._options.shellIntegration.nonce);
    try {
      const s = i.type === "injection" ? i : void 0;
      return await this.setupPtyProcess(this.shellLaunchConfig, this._ptyOptions, s), s?.newArgs ? { injectedArgs: s.newArgs } : void 0;
    } catch (s) {
      return this._logService.trace("node-pty.node-pty.IPty#spawn native exception", s), { message: `A native exception occurred during launch (${s.message})` };
    }
  }
  async _validateCwd() {
    try {
      if (!(await Zt.promises.stat(this._initialCwd)).isDirectory()) return { message: w(2290, null, this._initialCwd.toString()) };
    } catch (e) {
      if (e?.code === "ENOENT") return { message: w(2291, null, this._initialCwd.toString()) };
    }
    this._onDidChangeProperty.fire({ type: "initialCwd", value: this._initialCwd });
  }
  async _validateExecutable() {
    const e = this.shellLaunchConfig;
    if (!e.executable) throw new Error("IShellLaunchConfig.executable not set");
    const t = e.cwd instanceof H ? e.cwd.path : e.cwd, i = e.env && e.env.PATH ? e.env.PATH.split(Gr) : void 0, s = await pc(e.executable, t, i, this._executableEnv);
    if (!s) return { message: w(2292, null, e.executable) };
    try {
      const r = await Zt.promises.stat(s);
      if (!r.isFile() && !r.isSymbolicLink()) return { message: w(2293, null, e.executable) };
      e.executable = s;
    } catch (r) {
      if (r?.code !== "EACCES") throw r;
    }
  }
  async setupPtyProcess(e, t, i) {
    const s = i?.newArgs || e.args || [];
    await this._throttleKillSpawn(), this._logService.trace("node-pty.IPty#spawn", e.executable, s, t);
    const r = ru(e.executable, s, t);
    this._ptyProcess = r, this._childProcessMonitor = this._register(new js(r.pid, this._logService)), this._register(this._childProcessMonitor.onDidChangeHasChildProcesses((n) => this._onDidChangeProperty.fire({ type: "hasChildProcesses", value: n }))), this._processStartupComplete = new Promise((n) => {
      this._register(this.onProcessReady(() => n()));
    }), this._register(r.onData((n) => {
      this._unacknowledgedCharCount += n.length, !this._isPtyPaused && this._unacknowledgedCharCount > 1e5 && (this._logService.trace(`Flow control: Pause (${this._unacknowledgedCharCount} > 100000)`), this._isPtyPaused = true, r.pause()), this._logService.trace("node-pty.IPty#onData", n), this._onProcessData.fire(n), this._closeTimeout && this._queueProcessExit(), this._windowsShellHelper?.checkShell(), this._childProcessMonitor?.handleOutput();
    })), this._register(r.onExit((n) => {
      this._exitCode = n.exitCode, this._queueProcessExit();
    })), this._sendProcessId(r.pid), this._setupTitlePolling(r);
  }
  _setupTitlePolling(e) {
    setTimeout(() => this._sendProcessTitle(e)), N || (this._titleInterval = setInterval(() => {
      this._currentTitle !== e.process && this._sendProcessTitle(e);
    }, 200));
  }
  _queueProcessExit() {
    this._logService.getLevel() === ie.Trace && this._logService.trace("TerminalProcess#_queueProcessExit", new Error().stack?.replace(/^Error/, "")), this._closeTimeout && clearTimeout(this._closeTimeout), this._closeTimeout = setTimeout(() => {
      this._closeTimeout = void 0, this._kill();
    }, 250);
  }
  async _kill() {
    if (await this._processStartupComplete, !this._store.isDisposed) {
      try {
        this._ptyProcess && (await this._throttleKillSpawn(), this._logService.trace("node-pty.IPty#kill"), this._ptyProcess.kill());
      } catch {
      }
      this._onProcessExit.fire(this._exitCode || 0), this.dispose();
    }
  }
  async _throttleKillSpawn() {
    if (!(!N || !("useConpty" in this._ptyOptions) || !this._ptyOptions.useConpty) && !this._ptyOptions.useConptyDll) {
      for (; Date.now() - ot._lastKillOrStart < 250; ) this._logService.trace("Throttling kill/spawn call"), await ze(250 - (Date.now() - ot._lastKillOrStart) + 50);
      ot._lastKillOrStart = Date.now();
    }
  }
  _sendProcessId(e) {
    this._onProcessReady.fire({ pid: e, cwd: this._initialCwd, windowsPty: this.getWindowsPty() });
  }
  _sendProcessTitle(e) {
    if (this._store.isDisposed) return;
    this._currentTitle = e.process ?? "", this._onDidChangeProperty.fire({ type: "title", value: this._currentTitle });
    let t = this.currentTitle.replace(/ \(figterm\)$/g, "");
    if (N || (t = vi(t)), t.toLowerCase().startsWith("python")) this._onDidChangeProperty.fire({ type: "shellType", value: "python" });
    else if (t.toLowerCase().startsWith("julia")) this._onDidChangeProperty.fire({ type: "shellType", value: "julia" });
    else {
      const i = Ro.get(t) || To.get(t);
      this._onDidChangeProperty.fire({ type: "shellType", value: i });
    }
  }
  shutdown(e) {
    this._logService.getLevel() === ie.Trace && this._logService.trace("TerminalProcess#shutdown", new Error().stack?.replace(/^Error/, "")), e && !N ? this._kill() : !this._closeTimeout && !this._store.isDisposed && (this._queueProcessExit(), setTimeout(() => {
      this._closeTimeout && !this._store.isDisposed && (this._closeTimeout = void 0, this._kill());
    }, 5e3));
  }
  input(e, t = false) {
    this._logService.trace("node-pty.IPty#write", e, t), t ? this._ptyProcess.write(Buffer.from(e, "binary")) : this._ptyProcess.write(e), this._childProcessMonitor?.handleInput();
  }
  sendSignal(e) {
    this._store.isDisposed || !this._ptyProcess || this._ptyProcess.kill(e);
  }
  async processBinary(e) {
    this.input(e, true);
  }
  async refreshProperty(e) {
    switch (e) {
      case "cwd": {
        const t = await this.getCwd();
        return t !== this._properties.cwd && (this._properties.cwd = t, this._onDidChangeProperty.fire({ type: "cwd", value: this._properties.cwd })), t;
      }
      case "initialCwd": {
        const t = await this.getInitialCwd();
        return t !== this._properties.initialCwd && (this._properties.initialCwd = t, this._onDidChangeProperty.fire({ type: "initialCwd", value: this._properties.initialCwd })), t;
      }
      case "title":
        return this.currentTitle;
      default:
        return this.shellType;
    }
  }
  async updateProperty(e, t) {
    e === "fixedDimensions" && (this._properties.fixedDimensions = t);
  }
  resize(e, t) {
    if (!this._store.isDisposed && !(typeof e != "number" || typeof t != "number" || isNaN(e) || isNaN(t)) && this._ptyProcess) {
      if (e = Math.max(e, 1), t = Math.max(t, 1), this._delayedResizer) {
        this._delayedResizer.cols = e, this._delayedResizer.rows = t;
        return;
      }
      this._logService.trace("node-pty.IPty#resize", e, t);
      try {
        this._ptyProcess.resize(e, t);
      } catch (i) {
        if (this._logService.trace("node-pty.IPty#resize exception " + i.message), this._exitCode !== void 0 && i.message !== "ioctl(2) failed, EBADF" && i.message !== "Cannot resize a pty that has already exited") throw i;
      }
    }
  }
  clearBuffer() {
    this._ptyProcess?.clear();
  }
  acknowledgeDataEvent(e) {
    this._unacknowledgedCharCount = Math.max(this._unacknowledgedCharCount - e, 0), this._logService.trace(`Flow control: Ack ${e} chars (unacknowledged: ${this._unacknowledgedCharCount})`), this._isPtyPaused && this._unacknowledgedCharCount < 5e3 && (this._logService.trace(`Flow control: Resume (${this._unacknowledgedCharCount} < 5000)`), this._ptyProcess?.resume(), this._isPtyPaused = false);
  }
  clearUnacknowledgedChars() {
    this._unacknowledgedCharCount = 0, this._logService.trace("Flow control: Cleared all unacknowledged chars, forcing resume"), this._isPtyPaused && (this._ptyProcess?.resume(), this._isPtyPaused = false);
  }
  async setUnicodeVersion(e) {
  }
  getInitialCwd() {
    return Promise.resolve(this._initialCwd);
  }
  async getCwd() {
    if (qe) return new Promise((e) => {
      if (!this._ptyProcess) {
        e(this._initialCwd);
        return;
      }
      this._logService.trace("node-pty.IPty#pid"), Zh("lsof -OPln -p " + this._ptyProcess.pid + " | grep cwd", { env: { ...process.env, LANG: "en_US.UTF-8" } }, (t, i, s) => {
        !t && i !== "" ? e(i.substring(i.indexOf("/"), i.length - 1)) : (this._logService.error("lsof did not run successfully, it may not be on the $PATH?", t, i, s), e(this._initialCwd));
      });
    });
    if (pt) {
      if (!this._ptyProcess) return this._initialCwd;
      this._logService.trace("node-pty.IPty#pid");
      try {
        return await Zt.promises.readlink(`/proc/${this._ptyProcess.pid}/cwd`);
      } catch {
        return this._initialCwd;
      }
    }
    return this._initialCwd;
  }
  getWindowsPty() {
    return N ? { backend: "useConpty" in this._ptyOptions && this._ptyOptions.useConpty ? "conpty" : "winpty", buildNumber: nt() } : void 0;
  }
};
ot._lastKillOrStart = 0, ot = v([Be(7, st), Be(8, eu)], ot);
var nu = class extends X {
  constructor() {
    super(), this._onTrigger = this._register(new k()), this._timeout = setTimeout(() => {
      this._onTrigger.fire({ rows: this.rows, cols: this.cols });
    }, 1e3), this._register(_e(() => clearTimeout(this._timeout)));
  }
  get onTrigger() {
    return this._onTrigger.event;
  }
};
p(), p();
var ou = class extends X {
  constructor() {
    super(...arguments), this._map = /* @__PURE__ */ new Map(), this._onDidRemoveCapabilityType = this._register(new k()), this.onDidRemoveCapabilityType = this._onDidRemoveCapabilityType.event, this._onDidAddCapabilityType = this._register(new k()), this.onDidAddCapabilityType = this._onDidAddCapabilityType.event, this._onDidRemoveCapability = this._register(new k()), this.onDidRemoveCapability = this._onDidRemoveCapability.event, this._onDidAddCapability = this._register(new k()), this.onDidAddCapability = this._onDidAddCapability.event;
  }
  get items() {
    return this._map.keys();
  }
  add(e, t) {
    this._map.set(e, t), this._onDidAddCapabilityType.fire(e), this._onDidAddCapability.fire({ id: e, capability: t });
  }
  get(e) {
    return this._map.get(e);
  }
  remove(e) {
    const t = this._map.get(e);
    t && (this._map.delete(e), this._onDidRemoveCapabilityType.fire(e), this._onDidRemoveCapability.fire({ id: e, capability: t }));
  }
  has(e) {
    return this._map.has(e);
  }
};
p(), p();
var Ao = class sa {
  constructor(t, i) {
    this._xterm = t, this._properties = i;
  }
  get command() {
    return this._properties.command;
  }
  get commandLineConfidence() {
    return this._properties.commandLineConfidence;
  }
  get isTrusted() {
    return this._properties.isTrusted;
  }
  get timestamp() {
    return this._properties.timestamp;
  }
  get duration() {
    return this._properties.duration;
  }
  get promptStartMarker() {
    return this._properties.promptStartMarker;
  }
  get marker() {
    return this._properties.marker;
  }
  get endMarker() {
    return this._properties.endMarker;
  }
  set endMarker(t) {
    this._properties.endMarker = t;
  }
  get executedMarker() {
    return this._properties.executedMarker;
  }
  get aliases() {
    return this._properties.aliases;
  }
  get wasReplayed() {
    return this._properties.wasReplayed;
  }
  get cwd() {
    return this._properties.cwd;
  }
  get exitCode() {
    return this._properties.exitCode;
  }
  get commandStartLineContent() {
    return this._properties.commandStartLineContent;
  }
  get markProperties() {
    return this._properties.markProperties;
  }
  get executedX() {
    return this._properties.executedX;
  }
  get startX() {
    return this._properties.startX;
  }
  dispose() {
    this._properties.promptStartMarker?.dispose(), this._properties.marker?.dispose(), this._properties.endMarker?.dispose(), this._properties.executedMarker?.dispose();
  }
  static deserialize(t, i, s) {
    const r = t.buffer.normal, n = i.startLine !== void 0 ? t.registerMarker(i.startLine - (r.baseY + r.cursorY)) : void 0;
    if (!n) return;
    const o = i.promptStartLine !== void 0 ? t.registerMarker(i.promptStartLine - (r.baseY + r.cursorY)) : void 0, a = i.endLine !== void 0 ? t.registerMarker(i.endLine - (r.baseY + r.cursorY)) : void 0, l = i.executedLine !== void 0 ? t.registerMarker(i.executedLine - (r.baseY + r.cursorY)) : void 0;
    return new sa(t, { command: s ? "" : i.command, commandLineConfidence: i.commandLineConfidence ?? "low", isTrusted: i.isTrusted, promptStartMarker: o, marker: n, startX: i.startX, endMarker: a, executedMarker: l, executedX: i.executedX, timestamp: i.timestamp, duration: i.duration, cwd: i.cwd, commandStartLineContent: i.commandStartLineContent, exitCode: i.exitCode, markProperties: i.markProperties, aliases: void 0, wasReplayed: true });
  }
  serialize(t) {
    return { promptStartLine: this.promptStartMarker?.line, startLine: this.marker?.line, startX: void 0, endLine: this.endMarker?.line, executedLine: this.executedMarker?.line, executedX: this.executedX, command: t ? "" : this.command, commandLineConfidence: t ? "low" : this.commandLineConfidence, isTrusted: this.isTrusted, cwd: this.cwd, exitCode: this.exitCode, commandStartLineContent: this.commandStartLineContent, timestamp: this.timestamp, duration: this.duration, markProperties: this.markProperties };
  }
  extractCommandLine() {
    return Co(this._xterm.buffer.active, this._xterm.cols, this.marker, this.startX, this.executedMarker, this.executedX);
  }
  getOutput() {
    if (!this.executedMarker || !this.endMarker) return;
    const t = this.executedMarker.line, i = this.endMarker.line;
    if (t === i) return;
    let s = "", r;
    for (let n = t; n < i; n++) {
      if (r = this._xterm.buffer.active.getLine(n), !r) continue;
      const o = (r.isWrapped ? "" : `
`) + r.translateToString(!r.isWrapped);
      s += o;
    }
    return s === "" ? void 0 : s;
  }
  getOutputMatch(t) {
    if (!this.executedMarker || !this.endMarker) return;
    const i = this.endMarker.line;
    if (i === -1) return;
    const s = this._xterm.buffer.active, r = Math.max(this.executedMarker.line, 0), n = t.lineMatcher, o = typeof n == "string" ? 1 : t.length || au(n), a = [];
    let l;
    if (t.anchor === "bottom") for (let c = i - (t.offset || 0); c >= r; c--) {
      let h = c;
      const u = c;
      for (; h >= r && s.getLine(h)?.isWrapped; ) h--;
      if (c = h, a.unshift(Mo(s, h, u, this._xterm.cols)), l || (l = a[0].match(n)), a.length >= o) break;
    }
    else for (let c = r + (t.offset || 0); c < i; c++) {
      const h = c;
      let u = c;
      for (; u + 1 < i && s.getLine(u + 1)?.isWrapped; ) u++;
      if (c = u, a.push(Mo(s, h, u, this._xterm.cols)), l || (l = a[a.length - 1].match(n)), a.length >= o) break;
    }
    return l ? { regexMatch: l, outputLines: a } : void 0;
  }
  hasOutput() {
    return !this.executedMarker?.isDisposed && !this.endMarker?.isDisposed && !!(this.executedMarker && this.endMarker && this.executedMarker.line < this.endMarker.line);
  }
  getPromptRowCount() {
    return Oo(this, this._xterm.buffer.active);
  }
  getCommandRowCount() {
    return Uo(this);
  }
}, Po = class {
  constructor(e) {
    this._xterm = e;
  }
  dispose() {
    if (this.promptStartMarker?.dispose(), this.commandStartMarker?.dispose(), this.commandLines?.dispose(), this.commandExecutedMarker?.dispose(), this.commandFinishedMarker?.dispose(), this.currentContinuationMarker?.dispose(), this.continuations) for (const e of this.continuations) e.marker.dispose();
  }
  serialize(e) {
    if (this.commandStartMarker) return { promptStartLine: this.promptStartMarker?.line, startLine: this.commandStartMarker.line, startX: this.commandStartX, endLine: void 0, executedLine: void 0, executedX: void 0, command: "", commandLineConfidence: "low", isTrusted: true, cwd: e, exitCode: void 0, commandStartLineContent: void 0, timestamp: 0, duration: 0, markProperties: void 0 };
  }
  promoteToFullCommand(e, t, i, s) {
    if (t === void 0 && this.command === void 0 && (this.command = ""), this.command !== void 0 && !this.command.startsWith("\\") || i) return new Ao(this._xterm, { command: i ? "" : this.command || "", commandLineConfidence: i ? "low" : this.commandLineConfidence || "low", isTrusted: !!this.isTrusted, promptStartMarker: this.promptStartMarker, marker: this.commandStartMarker, startX: this.commandStartX, endMarker: this.commandFinishedMarker, executedMarker: this.commandExecutedMarker, executedX: this.commandExecutedX, timestamp: Date.now(), duration: this.commandDuration || 0, cwd: e, exitCode: t, commandStartLineContent: this.commandStartLineContent, markProperties: s });
  }
  markExecutedTime() {
    this.commandExecutedTimestamp === void 0 && (this.commandExecutedTimestamp = Date.now());
  }
  markFinishedTime() {
    this.commandDuration === void 0 && this.commandExecutedTimestamp !== void 0 && (this.commandDuration = Date.now() - this.commandExecutedTimestamp);
  }
  extractCommandLine() {
    return Co(this._xterm.buffer.active, this._xterm.cols, this.commandStartMarker, this.commandStartX, this.commandExecutedMarker, this.commandExecutedX);
  }
  getPromptRowCount() {
    return Oo(this, this._xterm.buffer.active);
  }
  getCommandRowCount() {
    return Uo(this);
  }
};
function Co(e, t, i, s, r, n) {
  if (!i || !r || s === void 0 || n === void 0) return "";
  let o = "";
  for (let a = i.line; a <= r.line; a++) {
    const l = e.getLine(a);
    l && (o += l.translateToString(true, a === i.line ? s : 0, a === r.line ? n : t));
  }
  return o;
}
function Mo(e, t, i, s) {
  const r = Math.max(2048 / s * 2);
  i = Math.min(i, t + r);
  let n = "";
  for (let o = t; o <= i; o++) {
    const a = e.getLine(o);
    a && (n += a.translateToString(true, 0, s));
  }
  return n;
}
function au(e) {
  if (!e.multiline) return 1;
  const t = e.source;
  let i = 1, s = t.indexOf("\\n");
  for (; s !== -1; ) i++, s = t.indexOf("\\n", s + 1);
  return i;
}
function Oo(e, t) {
  const i = Fi(e) ? e.marker : e.commandStartMarker;
  if (!i || !e.promptStartMarker) return 1;
  let s = 1, r = e.promptStartMarker.line;
  for (; r < i.line && (t.getLine(r)?.translateToString(true) ?? "").length === 0; ) r++;
  return s = i.line - r + 1, s;
}
function Uo(e) {
  const t = Fi(e) ? e.marker : e.commandStartMarker, i = Fi(e) ? e.executedMarker : e.commandExecutedMarker;
  if (!t || !i) return 1;
  let r = Math.max(i.line, t.line) - t.line + 1;
  return (Fi(e) ? e.executedX : e.commandExecutedX) === 0 && r--, r;
}
function Fi(e) {
  return !!e.hasOutput;
}
p();
var Bi = class extends X {
  constructor(e, t, i, s, r) {
    super(), this._xterm = e, this._logService = r, this._state = 0, this._commandStartX = 0, this._lastUserInput = "", this._value = "", this._cursorIndex = 0, this._ghostTextIndex = -1, this._onDidStartInput = this._register(new k()), this.onDidStartInput = this._onDidStartInput.event, this._onDidChangeInput = this._register(new k()), this.onDidChangeInput = this._onDidChangeInput.event, this._onDidFinishInput = this._register(new k()), this.onDidFinishInput = this._onDidFinishInput.event, this._onDidInterrupt = this._register(new k()), this.onDidInterrupt = this._onDidInterrupt.event, this._register(Z.any(this._xterm.onCursorMove, this._xterm.onData, this._xterm.onWriteParsed)(() => this._sync())), this._register(this._xterm.onData((n) => this._handleUserInput(n))), this._register(t((n) => this._handleCommandStart(n))), this._register(i(() => this._handleCommandStartChanged())), this._register(s(() => this._handleCommandExecuted())), this._register(this.onDidStartInput(() => this._logCombinedStringIfTrace("PromptInputModel#onDidStartInput"))), this._register(this.onDidChangeInput(() => this._logCombinedStringIfTrace("PromptInputModel#onDidChangeInput"))), this._register(this.onDidFinishInput(() => this._logCombinedStringIfTrace("PromptInputModel#onDidFinishInput"))), this._register(this.onDidInterrupt(() => this._logCombinedStringIfTrace("PromptInputModel#onDidInterrupt")));
  }
  get value() {
    return this._value;
  }
  get prefix() {
    return this._value.substring(0, this._cursorIndex);
  }
  get suffix() {
    return this._value.substring(this._cursorIndex, this._ghostTextIndex === -1 ? void 0 : this._ghostTextIndex);
  }
  get cursorIndex() {
    return this._cursorIndex;
  }
  get ghostTextIndex() {
    return this._ghostTextIndex;
  }
  _logCombinedStringIfTrace(e) {
    this._logService.getLevel() === ie.Trace && this._logService.trace(e, this.getCombinedString());
  }
  setShellType(e) {
    this._shellType = e;
  }
  setContinuationPrompt(e) {
    this._continuationPrompt = e, this._sync();
  }
  setLastPromptLine(e) {
    this._lastPromptLine = e, this._sync();
  }
  setConfidentCommandLine(e) {
    this._value !== e && (this._value = e, this._cursorIndex = -1, this._ghostTextIndex = -1, this._onDidChangeInput.fire(this._createStateObject()));
  }
  getCombinedString(e) {
    const t = this._value.replaceAll(`
`, "⏎");
    if (this._cursorIndex === -1) return t;
    let i = `${t.substring(0, this.cursorIndex)}|`;
    return this.ghostTextIndex !== -1 ? (i += `${t.substring(this.cursorIndex, this.ghostTextIndex)}[`, i += `${t.substring(this.ghostTextIndex)}]`) : i += t.substring(this.cursorIndex), i === "|" && e ? "" : i;
  }
  serialize() {
    return { modelState: this._createStateObject(), commandStartX: this._commandStartX, lastPromptLine: this._lastPromptLine, continuationPrompt: this._continuationPrompt, lastUserInput: this._lastUserInput };
  }
  deserialize(e) {
    this._value = e.modelState.value, this._cursorIndex = e.modelState.cursorIndex, this._ghostTextIndex = e.modelState.ghostTextIndex, this._commandStartX = e.commandStartX, this._lastPromptLine = e.lastPromptLine, this._continuationPrompt = e.continuationPrompt, this._lastUserInput = e.lastUserInput;
  }
  _handleCommandStart(e) {
    this._state !== 1 && (this._state = 1, this._commandStartMarker = e.marker, this._commandStartX = this._xterm.buffer.active.cursorX, this._value = "", this._cursorIndex = 0, this._onDidStartInput.fire(this._createStateObject()), this._onDidChangeInput.fire(this._createStateObject()), this._lastPromptLine && this._commandStartX !== this._lastPromptLine.length && this._xterm.buffer.active.getLine(this._commandStartMarker.line)?.translateToString(true).startsWith(this._lastPromptLine) && (this._commandStartX = this._lastPromptLine.length, this._sync()));
  }
  _handleCommandStartChanged() {
    this._state === 1 && (this._commandStartX = this._xterm.buffer.active.cursorX, this._onDidChangeInput.fire(this._createStateObject()), this._sync());
  }
  _handleCommandExecuted() {
    if (this._state === 2) return;
    this._cursorIndex = -1, this._ghostTextIndex !== -1 && (this._value = this._value.substring(0, this._ghostTextIndex), this._ghostTextIndex = -1);
    const e = this._createStateObject();
    this._lastUserInput === "" && (this._lastUserInput = "", this._onDidInterrupt.fire(e)), this._state = 2, this._onDidFinishInput.fire(e), this._onDidChangeInput.fire(e);
  }
  _sync() {
    try {
      this._doSync();
    } catch (e) {
      this._logService.error("Error while syncing prompt input model", e);
    }
  }
  _doSync() {
    if (this._state !== 1) return;
    let e = this._commandStartMarker?.line;
    if (e === void 0) return;
    const t = this._xterm.buffer.active;
    let i = t.getLine(e);
    const s = t.baseY + t.cursorY;
    let r, n = i?.translateToString(true, this._commandStartX);
    if (this._shellType === "fish" && (!i || !n) && (e += 1, i = t.getLine(e), i && (n = i.translateToString(true), r = s === e ? t.cursorX : n?.trimEnd().length)), i === void 0 || n === void 0) {
      this._logService.trace("PromptInputModel#_sync: no line");
      return;
    }
    let o = n, a = -1;
    r === void 0 && (s === e ? r = this._getRelativeCursorIndex(this._commandStartX, t, i) : r = n.trimEnd().length);
    for (let l = e + 1; l <= s; l++) {
      const c = t.getLine(l), h = c?.translateToString(true);
      if (h && c) {
        if (c.isWrapped || s === l && this._continuationPrompt && !this._lineContainsContinuationPrompt(h)) {
          o += `${h}`;
          const u = this._getRelativeCursorIndex(0, t, c);
          s === l ? r += u : r += h.length;
        } else if (this._shellType === "fish") o.endsWith("\\") ? (o = o.substring(0, o.length - 1), o += `${h.trim()}`, r += h.trim().length - 1) : /^ {6,}/.test(h) ? (o += `
${h.trim()}`, r += h.trim().length + 1) : (o += h, r += h.length);
        else if (this._continuationPrompt === void 0 || this._lineContainsContinuationPrompt(h)) {
          const u = this._trimContinuationPrompt(h);
          if (o += `
${u}`, s === l) {
            const d = this._getContinuationPromptCellWidth(c, h), f = this._getRelativeCursorIndex(d, t, c);
            r += f + 1;
          } else r += u.length + 1;
        }
      }
    }
    for (let l = s + 1; l < t.baseY + this._xterm.rows; l++) {
      const c = t.getLine(l), h = c?.translateToString(true);
      if (h && c) this._shellType === "fish" ? o += `${h}` : this._continuationPrompt === void 0 || this._lineContainsContinuationPrompt(h) ? o += `
${this._trimContinuationPrompt(h)}` : o += h;
      else break;
    }
    this._logService.getLevel() === ie.Trace && this._logService.trace(`PromptInputModel#_sync: ${this.getCombinedString()}`);
    {
      let l = this._value.length - this._value.trimEnd().length;
      this._lastUserInput === "" && (this._lastUserInput = "", r === this._cursorIndex - 1 && (this._value.trimEnd().length > o.trimEnd().length && o.trimEnd().length <= r ? l = Math.max(this._value.length - 1 - o.trimEnd().length, 0) : l = Math.max(l - 1, 0))), this._lastUserInput === "\x1B[3~" && (this._lastUserInput = "", r === this._cursorIndex && (l = Math.max(l - 1, 0)));
      const c = o.split(`
`), h = c.length > 1, u = o.trimEnd();
      if (!h) {
        u.length < o.length && (this._lastUserInput === " " && (this._lastUserInput = "", r > u.length && r > this._cursorIndex && l++), l = Math.max(r - u.length, l, 0));
        const d = r === 0 ? "" : o[r - 1];
        l > 0 && r === this._cursorIndex + 1 && this._lastUserInput !== "" && d !== " " && (l = this._value.length - this._cursorIndex);
      }
      if (h) {
        c[c.length - 1] = c.at(-1)?.trimEnd() ?? "";
        const d = (c.length - 1) * (this._continuationPrompt?.length ?? 0);
        l = Math.max(0, r - o.length - d);
      }
      o = c.map((d) => d.trimEnd()).join(`
`) + " ".repeat(l);
    }
    a = this._scanForGhostText(t, i, r), (this._value !== o || this._cursorIndex !== r || this._ghostTextIndex !== a) && (this._value = o, this._cursorIndex = r, this._ghostTextIndex = a, this._onDidChangeInput.fire(this._createStateObject()));
  }
  _handleUserInput(e) {
    this._lastUserInput = e;
  }
  _scanForGhostText(e, t, i) {
    if (!this.value.trim().length) return -1;
    let s = -1, r = false, n = e.cursorX;
    for (; n > 0; ) {
      const o = t.getCell(--n);
      if (!o) break;
      if (o.getChars().trim().length > 0) {
        r = !this._isCellStyledLikeGhostText(o);
        break;
      }
    }
    if (r) {
      let o = 0, a = e.cursorX;
      for (; a < t.length; ) {
        const l = t.getCell(a++);
        if (!l || l.getCode() === 0) break;
        if (this._isCellStyledLikeGhostText(l)) {
          s = i + o;
          break;
        }
        o += l.getChars().length;
      }
    }
    return s === -1 && (s = this._scanForGhostTextAdvanced(e, t, i)), s > -1 && this.value.substring(s).endsWith(" ") && (this._value = this.value.trim(), this.value.substring(s) || (s = -1)), s;
  }
  _scanForGhostTextAdvanced(e, t, i) {
    let s = -1, r = e.cursorX;
    const n = /* @__PURE__ */ new Map();
    let o = t.getCell(r), a = o;
    for (; a && r < t.length; ) {
      const c = this._getCellStyleAsString(a);
      n.set(c, [...n.get(c) ?? [], r]), a = t.getCell(++r), a?.getChars().trim().length && (o = a);
    }
    if (!o?.getChars().trim().length || this._cellStylesMatch(t.getCell(this._commandStartX), o)) return -1;
    const l = n.get(this._getCellStyleAsString(o));
    if (l) {
      for (let c = 1; c < l.length; c++) if (l[c] !== l[c - 1] + 1) return -1;
      e.baseY + e.cursorY === this._commandStartMarker?.line ? s = l[0] - this._commandStartX : s = l[0];
    }
    if (s !== -1) for (let c = e.cursorX; c >= this._commandStartX; c--) {
      const h = t.getCell(c);
      if (h?.getChars.length && h && h.getCode() !== 0 && this._cellStylesMatch(o, h)) return -1;
    }
    return s >= i ? s : -1;
  }
  _getCellStyleAsString(e) {
    return `${e.getFgColor()}${e.getBgColor()}${e.isBold()}${e.isItalic()}${e.isDim()}${e.isUnderline()}${e.isBlink()}${e.isInverse()}${e.isInvisible()}${e.isStrikethrough()}${e.isOverline()}${e.getFgColorMode()}${e.getBgColorMode()}`;
  }
  _cellStylesMatch(e, t) {
    return !e || !t ? false : e.getFgColor() === t.getFgColor() && e.getBgColor() === t.getBgColor() && e.isBold() === t.isBold() && e.isItalic() === t.isItalic() && e.isDim() === t.isDim() && e.isUnderline() === t.isUnderline() && e.isBlink() === t.isBlink() && e.isInverse() === t.isInverse() && e.isInvisible() === t.isInvisible() && e.isStrikethrough() === t.isStrikethrough() && e.isOverline() === t.isOverline() && e?.getBgColorMode() === t?.getBgColorMode() && e?.getFgColorMode() === t?.getFgColorMode();
  }
  _trimContinuationPrompt(e) {
    return this._lineContainsContinuationPrompt(e) && (e = e.substring(this._continuationPrompt.length)), e;
  }
  _lineContainsContinuationPrompt(e) {
    return !!(this._continuationPrompt && e.startsWith(this._continuationPrompt.trimEnd()));
  }
  _getContinuationPromptCellWidth(e, t) {
    if (!this._continuationPrompt || !t.startsWith(this._continuationPrompt.trimEnd())) return 0;
    let i = "", s = 0, r;
    for (; i !== this._continuationPrompt && (r = e.getCell(s++), !!r); ) i += r.getChars();
    return s;
  }
  _getRelativeCursorIndex(e, t, i) {
    return i?.translateToString(true, e, t.cursorX).length ?? 0;
  }
  _isCellStyledLikeGhostText(e) {
    return !!(e.isItalic() || e.isDim());
  }
  _createStateObject() {
    return Object.freeze({ value: this._value, prefix: this.prefix, suffix: this.suffix, cursorIndex: this._cursorIndex, ghostTextIndex: this._ghostTextIndex });
  }
};
v([Hl(0)], Bi.prototype, "_sync", null), Bi = v([Be(4, st)], Bi);
var $i = class extends X {
  constructor(e, t) {
    super(), this._terminal = e, this._logService = t, this.type = 2, this._commands = [], this._commandMarkers = [], this.__isCommandStorageDisabled = false, this._hasRichCommandDetection = false, this._onCommandStarted = this._register(new k()), this.onCommandStarted = this._onCommandStarted.event, this._onCommandStartChanged = this._register(new k()), this.onCommandStartChanged = this._onCommandStartChanged.event, this._onBeforeCommandFinished = this._register(new k()), this.onBeforeCommandFinished = this._onBeforeCommandFinished.event, this._onCommandFinished = this._register(new k()), this.onCommandFinished = this._onCommandFinished.event, this._onCommandExecuted = this._register(new k()), this.onCommandExecuted = this._onCommandExecuted.event, this._onCommandInvalidated = this._register(new k()), this.onCommandInvalidated = this._onCommandInvalidated.event, this._onCurrentCommandInvalidated = this._register(new k()), this.onCurrentCommandInvalidated = this._onCurrentCommandInvalidated.event, this._onSetRichCommandDetection = this._register(new k()), this.onSetRichCommandDetection = this._onSetRichCommandDetection.event, this._currentCommand = new Po(this._terminal), this._promptInputModel = this._register(new Bi(this._terminal, this.onCommandStarted, this.onCommandStartChanged, this.onCommandExecuted, this._logService)), this._register(this.onCommandExecuted((s) => {
      if (s.commandLineConfidence !== "high") {
        const r = s;
        s.command = r.extractCommandLine(), s.commandLineConfidence = "low", "getOutput" in r ? r.promptStartMarker && r.marker && r.executedMarker && s.command.indexOf(`
`) === -1 && r.startX !== void 0 && r.startX > 0 && (s.commandLineConfidence = "medium") : r.promptStartMarker && r.commandStartMarker && r.commandExecutedMarker && s.command.indexOf(`
`) === -1 && r.commandStartX !== void 0 && r.commandStartX > 0 && (s.commandLineConfidence = "medium");
      }
    }));
    const i = this;
    this._ptyHeuristicsHooks = new class {
      get onCurrentCommandInvalidatedEmitter() {
        return i._onCurrentCommandInvalidated;
      }
      get onCommandStartedEmitter() {
        return i._onCommandStarted;
      }
      get onCommandExecutedEmitter() {
        return i._onCommandExecuted;
      }
      get dimensions() {
        return i._dimensions;
      }
      get isCommandStorageDisabled() {
        return i.__isCommandStorageDisabled;
      }
      get commandMarkers() {
        return i._commandMarkers;
      }
      set commandMarkers(s) {
        i._commandMarkers = s;
      }
      get clearCommandsInViewport() {
        return i._clearCommandsInViewport.bind(i);
      }
    }(), this._ptyHeuristics = this._register(new ja(new Ys(this._terminal, this, this._ptyHeuristicsHooks, this._logService))), this._dimensions = { cols: this._terminal.cols, rows: this._terminal.rows }, this._register(this._terminal.onResize((s) => this._handleResize(s))), this._register(this._terminal.onCursorMove(() => this._handleCursorMove()));
  }
  get promptInputModel() {
    return this._promptInputModel;
  }
  get hasRichCommandDetection() {
    return this._hasRichCommandDetection;
  }
  get commands() {
    return this._commands;
  }
  get executingCommand() {
    return this._currentCommand.command;
  }
  get executingCommandObject() {
    if (this._currentCommand.commandStartMarker) return this._currentCommand.promoteToFullCommand(this._cwd, void 0, this._handleCommandStartOptions?.ignoreCommandLine ?? false, void 0);
  }
  get executingCommandConfidence() {
    const e = this._currentCommand;
    return "commandLineConfidence" in e ? e.commandLineConfidence : void 0;
  }
  get currentCommand() {
    return this._currentCommand;
  }
  get cwd() {
    return this._cwd;
  }
  get promptTerminator() {
    return this._promptTerminator;
  }
  dispose() {
    for (const e of this._commands) e.dispose();
    this._commands.length = 0, this._currentCommand.dispose();
    for (const e of this._commandMarkers) e.dispose();
    this._commandMarkers.length = 0, super.dispose();
  }
  _handleResize(e) {
    this._ptyHeuristics.value.preHandleResize?.(e), this._dimensions.cols = e.cols, this._dimensions.rows = e.rows;
  }
  _handleCursorMove() {
    this._store.isDisposed || this._terminal.buffer.active === this._terminal.buffer.normal && this._currentCommand.commandStartMarker && this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY < this._currentCommand.commandStartMarker.line && (this._clearCommandsInViewport(), this._currentCommand.isInvalid = true, this._onCurrentCommandInvalidated.fire({ reason: "windows" }));
  }
  _clearCommandsInViewport() {
    let e = 0;
    for (let t = this._commands.length - 1; t >= 0; t--) {
      const i = this._commands[t].marker?.line;
      if (i && i < this._terminal.buffer.active.baseY) break;
      e++;
    }
    e > 0 && this._onCommandInvalidated.fire(this._commands.splice(this._commands.length - e, e));
  }
  clearCommands() {
    this._commands.length > 0 && this._onCommandInvalidated.fire(this._commands.splice(0));
  }
  setContinuationPrompt(e) {
    this._promptInputModel.setContinuationPrompt(e);
  }
  setPromptTerminator(e, t) {
    this._logService.debug("CommandDetectionCapability#setPromptTerminator", e), this._promptTerminator = e, this._promptInputModel.setLastPromptLine(t);
  }
  setCwd(e) {
    this._cwd = e;
  }
  setIsWindowsPty(e) {
    if (e && !(this._ptyHeuristics.value instanceof ei)) {
      const t = this;
      this._ptyHeuristics.value = new ei(this._terminal, this, new class {
        get onCurrentCommandInvalidatedEmitter() {
          return t._onCurrentCommandInvalidated;
        }
        get onCommandStartedEmitter() {
          return t._onCommandStarted;
        }
        get onCommandExecutedEmitter() {
          return t._onCommandExecuted;
        }
        get dimensions() {
          return t._dimensions;
        }
        get isCommandStorageDisabled() {
          return t.__isCommandStorageDisabled;
        }
        get commandMarkers() {
          return t._commandMarkers;
        }
        set commandMarkers(i) {
          t._commandMarkers = i;
        }
        get clearCommandsInViewport() {
          return t._clearCommandsInViewport.bind(t);
        }
      }(), this._logService);
    } else !e && !(this._ptyHeuristics.value instanceof Ys) && (this._ptyHeuristics.value = new Ys(this._terminal, this, this._ptyHeuristicsHooks, this._logService));
  }
  setHasRichCommandDetection(e) {
    this._hasRichCommandDetection = e, this._onSetRichCommandDetection.fire(e);
  }
  setIsCommandStorageDisabled() {
    this.__isCommandStorageDisabled = true;
  }
  getCommandForLine(e) {
    if (this._currentCommand.promptStartMarker && e >= this._currentCommand.promptStartMarker?.line) return this._currentCommand;
    if (this._commands.length !== 0 && !((this._commands[0].promptStartMarker ?? this._commands[0].marker).line > e)) {
      for (let t = this.commands.length - 1; t >= 0; t--) if ((this.commands[t].promptStartMarker ?? this.commands[t].marker).line <= e) return this.commands[t];
    }
  }
  getCwdForLine(e) {
    if (this._currentCommand.promptStartMarker && e >= this._currentCommand.promptStartMarker?.line) return this._cwd;
    const t = this.getCommandForLine(e);
    if (t && "cwd" in t) return t.cwd;
  }
  handlePromptStart(e) {
    const t = this.commands.at(-1);
    t?.endMarker && t?.executedMarker && t.endMarker.line === t.executedMarker.line && (this._logService.debug("CommandDetectionCapability#handlePromptStart adjusted commandFinished", `${t.endMarker.line} -> ${t.executedMarker.line + 1}`), t.endMarker = ti(this._terminal, t.executedMarker, 1)), this._currentCommand.promptStartMarker = e?.marker || (t?.endMarker ? ti(this._terminal, t.endMarker) : this._terminal.registerMarker(0)), this._logService.debug("CommandDetectionCapability#handlePromptStart", this._terminal.buffer.active.cursorX, this._currentCommand.promptStartMarker?.line);
  }
  handleContinuationStart() {
    this._currentCommand.currentContinuationMarker = this._terminal.registerMarker(0), this._logService.debug("CommandDetectionCapability#handleContinuationStart", this._currentCommand.currentContinuationMarker);
  }
  handleContinuationEnd() {
    if (!this._currentCommand.currentContinuationMarker) {
      this._logService.warn("CommandDetectionCapability#handleContinuationEnd Received continuation end without start");
      return;
    }
    this._currentCommand.continuations || (this._currentCommand.continuations = []), this._currentCommand.continuations.push({ marker: this._currentCommand.currentContinuationMarker, end: this._terminal.buffer.active.cursorX }), this._currentCommand.currentContinuationMarker = void 0, this._logService.debug("CommandDetectionCapability#handleContinuationEnd", this._currentCommand.continuations[this._currentCommand.continuations.length - 1]);
  }
  handleRightPromptStart() {
    this._currentCommand.commandRightPromptStartX = this._terminal.buffer.active.cursorX, this._logService.debug("CommandDetectionCapability#handleRightPromptStart", this._currentCommand.commandRightPromptStartX);
  }
  handleRightPromptEnd() {
    this._currentCommand.commandRightPromptEndX = this._terminal.buffer.active.cursorX, this._logService.debug("CommandDetectionCapability#handleRightPromptEnd", this._currentCommand.commandRightPromptEndX);
  }
  handleCommandStart(e) {
    if (this._handleCommandStartOptions = e, this._currentCommand.cwd = this._cwd, this._currentCommand.commandStartMarker = e?.marker || this._currentCommand.commandStartMarker, this._currentCommand.commandStartMarker?.line === this._terminal.buffer.active.cursorY) {
      this._currentCommand.commandStartX = this._terminal.buffer.active.cursorX, this._onCommandStartChanged.fire(), this._logService.debug("CommandDetectionCapability#handleCommandStart", this._currentCommand.commandStartX, this._currentCommand.commandStartMarker?.line);
      return;
    }
    this._ptyHeuristics.value.handleCommandStart(e);
  }
  handleCommandExecuted(e) {
    this._ptyHeuristics.value.handleCommandExecuted(e), this._currentCommand.markExecutedTime();
  }
  handleCommandFinished(e, t) {
    if (this._currentCommand.commandExecutedMarker || this.handleCommandExecuted(), this._currentCommand.markFinishedTime(), this._ptyHeuristics.value.preHandleCommandFinished?.(), this._logService.debug("CommandDetectionCapability#handleCommandFinished", this._terminal.buffer.active.cursorX, t?.marker?.line, this._currentCommand.command, this._currentCommand), e === void 0) {
      const s = this.commands.length > 0 ? this.commands[this.commands.length - 1] : void 0;
      this._currentCommand.command && this._currentCommand.command.length > 0 && s?.command === this._currentCommand.command && (e = s.exitCode);
    }
    if (this._currentCommand.commandStartMarker === void 0 || !this._terminal.buffer.active) return;
    this._currentCommand.commandFinishedMarker = t?.marker || this._terminal.registerMarker(0), this._ptyHeuristics.value.postHandleCommandFinished?.();
    const i = this._currentCommand.promoteToFullCommand(this._cwd, e, this._handleCommandStartOptions?.ignoreCommandLine ?? false, t?.markProperties);
    i && (this._commands.push(i), this._onBeforeCommandFinished.fire(i), this._logService.debug("CommandDetectionCapability#onCommandFinished", i), this._onCommandFinished.fire(i)), this._currentCommand = new Po(this._terminal), this._handleCommandStartOptions = void 0;
  }
  setCommandLine(e, t) {
    this._logService.debug("CommandDetectionCapability#setCommandLine", e, t), this._currentCommand.command = e, this._currentCommand.commandLineConfidence = "high", this._currentCommand.isTrusted = t, t && this._promptInputModel.setConfidentCommandLine(e);
  }
  serialize() {
    const e = this.commands.map((i) => i.serialize(this.__isCommandStorageDisabled)), t = this._currentCommand.serialize(this._cwd);
    return t && e.push(t), { isWindowsPty: this._ptyHeuristics.value instanceof ei, hasRichCommandDetection: this._hasRichCommandDetection, commands: e, promptInputModel: this._promptInputModel.serialize() };
  }
  deserialize(e) {
    e.isWindowsPty && this.setIsWindowsPty(e.isWindowsPty), e.hasRichCommandDetection && this.setHasRichCommandDetection(e.hasRichCommandDetection);
    const t = this._terminal.buffer.normal;
    for (const i of e.commands) {
      if (!i.endLine) {
        const r = i.startLine !== void 0 ? this._terminal.registerMarker(i.startLine - (t.baseY + t.cursorY)) : void 0;
        if (!r) continue;
        this._currentCommand.commandStartMarker = i.startLine !== void 0 ? this._terminal.registerMarker(i.startLine - (t.baseY + t.cursorY)) : void 0, this._currentCommand.commandStartX = i.startX, this._currentCommand.promptStartMarker = i.promptStartLine !== void 0 ? this._terminal.registerMarker(i.promptStartLine - (t.baseY + t.cursorY)) : void 0, this._cwd = i.cwd, this._onCommandStarted.fire({ marker: r });
        continue;
      }
      const s = Ao.deserialize(this._terminal, i, this.__isCommandStorageDisabled);
      s && (this._commands.push(s), this._logService.debug("CommandDetectionCapability#onCommandFinished", s), this._onCommandFinished.fire(s));
    }
    e.promptInputModel && this._promptInputModel.deserialize(e.promptInputModel);
  }
};
v([bn(500)], $i.prototype, "_handleCursorMove", null), $i = v([Be(1, st)], $i);
var Ys = class extends X {
  constructor(e, t, i, s) {
    super(), this._terminal = e, this._capability = t, this._hooks = i, this._logService = s, this._register(e.parser.registerCsiHandler({ final: "J" }, (r) => (r.length >= 1 && (r[0] === 2 || r[0] === 3) && i.clearCommandsInViewport(), false)));
  }
  handleCommandStart(e) {
    const t = this._capability.currentCommand;
    t.commandStartX = this._terminal.buffer.active.cursorX, t.commandStartMarker = e?.marker || this._terminal.registerMarker(0), t.commandExecutedMarker?.dispose(), t.commandExecutedMarker = void 0, t.commandExecutedX = void 0;
    for (const i of this._hooks.commandMarkers) i.dispose();
    this._hooks.commandMarkers.length = 0, this._hooks.onCommandStartedEmitter.fire({ marker: e?.marker || t.commandStartMarker, markProperties: e?.markProperties }), this._logService.debug("CommandDetectionCapability#handleCommandStart", t.commandStartX, t.commandStartMarker?.line);
  }
  handleCommandExecuted(e) {
    const t = this._capability.currentCommand;
    t.commandExecutedMarker = e?.marker || this._terminal.registerMarker(0), t.commandExecutedX = this._terminal.buffer.active.cursorX, this._logService.debug("CommandDetectionCapability#handleCommandExecuted", t.commandExecutedX, t.commandExecutedMarker?.line), !(!t.commandStartMarker || !t.commandExecutedMarker || t.commandStartX === void 0) && (t.command = this._capability.promptInputModel.ghostTextIndex > -1 ? this._capability.promptInputModel.value.substring(0, this._capability.promptInputModel.ghostTextIndex) : this._capability.promptInputModel.value, this._hooks.onCommandExecutedEmitter.fire(t));
  }
}, ei = class extends X {
  constructor(e, t, i, s) {
    super(), this._terminal = e, this._capability = t, this._hooks = i, this._logService = s, this._onCursorMoveListener = this._register(new Xe()), this._tryAdjustCommandStartMarkerScannedLineCount = 0, this._tryAdjustCommandStartMarkerPollCount = 0, this._register(e.parser.registerCsiHandler({ final: "J" }, (r) => (r.length >= 1 && (r[0] === 2 || r[0] === 3) && this._hooks.clearCommandsInViewport(), false))), this._register(this._capability.onBeforeCommandFinished((r) => {
      (r.command.trim().toLowerCase() === "clear" || r.command.trim().toLowerCase() === "cls") && (this._tryAdjustCommandStartMarkerScheduler?.cancel(), this._tryAdjustCommandStartMarkerScheduler = void 0, this._hooks.clearCommandsInViewport(), this._capability.currentCommand.isInvalid = true, this._hooks.onCurrentCommandInvalidatedEmitter.fire({ reason: "windows" }));
    }));
  }
  preHandleResize(e) {
    const t = this._terminal.buffer.active.baseY, i = e.rows - this._hooks.dimensions.rows;
    i > 0 && this._waitForCursorMove().then(() => {
      const s = Math.min(i, t);
      for (let r = this._capability.commands.length - 1; r >= 0; r--) {
        const n = this._capability.commands[r];
        if (!n.marker || n.marker.line < t || n.commandStartLineContent === void 0) break;
        const o = this._terminal.buffer.active.getLine(n.marker.line);
        if (!o || o.translateToString(true) === n.commandStartLineContent) continue;
        const a = n.marker.line - s;
        this._terminal.buffer.active.getLine(a)?.translateToString(true) === n.commandStartLineContent && this._terminal._core._bufferService.buffer.lines.onDeleteEmitter.fire({ index: this._terminal.buffer.active.baseY, amount: s });
      }
    });
  }
  handleCommandStart() {
    this._capability.currentCommand.commandStartX = this._terminal.buffer.active.cursorX, this._hooks.commandMarkers.length = 0;
    const e = this._capability.currentCommand.commandStartMarker = this._capability.currentCommand.promptStartMarker ? ti(this._terminal, this._capability.currentCommand.promptStartMarker) : this._terminal.registerMarker(0);
    this._capability.currentCommand.commandStartX = 0, this._tryAdjustCommandStartMarkerScannedLineCount = 0, this._tryAdjustCommandStartMarkerPollCount = 0, this._tryAdjustCommandStartMarkerScheduler = new gs(() => this._tryAdjustCommandStartMarker(e), 20), this._tryAdjustCommandStartMarkerScheduler.schedule();
  }
  _tryAdjustCommandStartMarker(e) {
    if (this._store.isDisposed) return;
    const t = this._terminal.buffer.active;
    let i = this._tryAdjustCommandStartMarkerScannedLineCount;
    for (; i < 10 && e.line + i < t.baseY + this._terminal.rows; ) {
      if (this._cursorOnNextLine()) {
        const s = this._getWindowsPrompt(e.line + i);
        if (s) {
          const r = typeof s == "string" ? s : s.prompt;
          if (this._capability.currentCommand.commandStartMarker = this._terminal.registerMarker(0), typeof s == "object" && s.likelySingleLine) {
            this._logService.debug("CommandDetectionCapability#_tryAdjustCommandStartMarker adjusted promptStart", `${this._capability.currentCommand.promptStartMarker?.line} -> ${this._capability.currentCommand.commandStartMarker.line}`), this._capability.currentCommand.promptStartMarker?.dispose(), this._capability.currentCommand.promptStartMarker = ti(this._terminal, this._capability.currentCommand.commandStartMarker);
            const n = this._capability.commands.at(-1);
            n && this._capability.currentCommand.commandStartMarker.line !== n.endMarker?.line && (n.endMarker?.dispose(), n.endMarker = ti(this._terminal, this._capability.currentCommand.commandStartMarker));
          }
          this._capability.currentCommand.commandStartX = r.length, this._logService.debug("CommandDetectionCapability#_tryAdjustCommandStartMarker adjusted commandStart", `${e.line} -> ${this._capability.currentCommand.commandStartMarker.line}:${this._capability.currentCommand.commandStartX}`), this._flushPendingHandleCommandStartTask();
          return;
        }
      }
      i++;
    }
    i < 10 ? (this._tryAdjustCommandStartMarkerScannedLineCount = i, ++this._tryAdjustCommandStartMarkerPollCount < 10 ? this._tryAdjustCommandStartMarkerScheduler?.schedule() : this._flushPendingHandleCommandStartTask()) : this._flushPendingHandleCommandStartTask();
  }
  _flushPendingHandleCommandStartTask() {
    if (this._tryAdjustCommandStartMarkerScheduler && (this._tryAdjustCommandStartMarkerPollCount = 10, this._tryAdjustCommandStartMarkerScheduler.flush(), this._tryAdjustCommandStartMarkerScheduler = void 0), this._capability.currentCommand.commandExecutedMarker || (this._onCursorMoveListener.value = this._terminal.onCursorMove(() => {
      if (this._hooks.commandMarkers.length === 0 || this._hooks.commandMarkers[this._hooks.commandMarkers.length - 1].line !== this._terminal.buffer.active.cursorY) {
        const e = this._terminal.registerMarker(0);
        e && this._hooks.commandMarkers.push(e);
      }
    })), this._capability.currentCommand.commandStartMarker) {
      const e = this._terminal.buffer.active.getLine(this._capability.currentCommand.commandStartMarker.line);
      e && (this._capability.currentCommand.commandStartLineContent = e.translateToString(true));
    }
    this._hooks.onCommandStartedEmitter.fire({ marker: this._capability.currentCommand.commandStartMarker }), this._logService.debug("CommandDetectionCapability#_handleCommandStartWindows", this._capability.currentCommand.commandStartX, this._capability.currentCommand.commandStartMarker?.line);
  }
  handleCommandExecuted(e) {
    this._tryAdjustCommandStartMarkerScheduler && this._flushPendingHandleCommandStartTask(), this._onCursorMoveListener.clear(), this._evaluateCommandMarkers(), this._capability.currentCommand.commandExecutedX = this._terminal.buffer.active.cursorX, this._hooks.onCommandExecutedEmitter.fire(this._capability.currentCommand), this._logService.debug("CommandDetectionCapability#handleCommandExecuted", this._capability.currentCommand.commandExecutedX, this._capability.currentCommand.commandExecutedMarker?.line);
  }
  preHandleCommandFinished() {
    this._capability.currentCommand.commandExecutedMarker || (this._hooks.commandMarkers.length === 0 && (this._capability.currentCommand.commandStartMarker || (this._capability.currentCommand.commandStartMarker = this._terminal.registerMarker(0)), this._capability.currentCommand.commandStartMarker && this._hooks.commandMarkers.push(this._capability.currentCommand.commandStartMarker)), this._evaluateCommandMarkers());
  }
  postHandleCommandFinished() {
    const e = this._capability.currentCommand, t = e.command, i = e.commandStartMarker?.line, s = e.commandExecutedMarker?.line;
    if (!t || t.length === 0 || i === void 0 || i === -1 || s === void 0 || s === -1) return;
    let r = 0, n = false;
    for (let o = i; o <= s; o++) {
      const a = this._terminal.buffer.active.getLine(o);
      if (!a) break;
      const l = a.translateToString(true);
      for (let c = 0; c < l.length; c++) {
        for (; t.length < r && t[r] === " "; ) r++;
        if (l[c] === t[r] && r++, r === t.length) {
          const h = c >= this._terminal.cols - 1;
          e.commandExecutedMarker = this._terminal.registerMarker(o - (this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY) + (h ? 1 : 0)), e.commandExecutedX = h ? 0 : c + 1, n = true;
          break;
        }
      }
      if (n) break;
    }
  }
  _evaluateCommandMarkers() {
    if (this._hooks.commandMarkers.length !== 0) {
      if (this._hooks.commandMarkers = this._hooks.commandMarkers.sort((e, t) => e.line - t.line), this._capability.currentCommand.commandStartMarker = this._hooks.commandMarkers[0], this._capability.currentCommand.commandStartMarker) {
        const e = this._terminal.buffer.active.getLine(this._capability.currentCommand.commandStartMarker.line);
        e && (this._capability.currentCommand.commandStartLineContent = e.translateToString(true));
      }
      this._capability.currentCommand.commandExecutedMarker = this._hooks.commandMarkers[this._hooks.commandMarkers.length - 1], this._hooks.onCommandExecutedEmitter.fire(this._capability.currentCommand);
    }
  }
  _cursorOnNextLine() {
    const e = this._capability.commands.at(-1);
    if (!e) return true;
    const t = this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY, i = (e.endMarker ? e.endMarker.line : e.marker?.line) ?? -1;
    return t > i;
  }
  _waitForCursorMove() {
    const e = this._terminal.buffer.active.cursorX, t = this._terminal.buffer.active.cursorY;
    let i = 0;
    return new Promise((s, r) => {
      const n = setInterval(() => {
        if (e !== this._terminal.buffer.active.cursorX || t !== this._terminal.buffer.active.cursorY) {
          s(), clearInterval(n);
          return;
        }
        i += 10, i > 1e3 && (clearInterval(n), s());
      }, 10);
    });
  }
  _getWindowsPrompt(e = this._terminal.buffer.active.baseY + this._terminal.buffer.active.cursorY) {
    const t = this._terminal.buffer.active.getLine(e);
    if (!t) return;
    const i = t.translateToString(true);
    if (!i) return;
    const s = i.match(/(?<prompt>(\(.+\)\s)?(?:PS.+>\s?))/)?.groups?.prompt;
    if (s) {
      const l = this._adjustPrompt(s, i, ">");
      if (l) return { prompt: l, likelySingleLine: true };
    }
    const r = i.match(/.*\u276f(?=[^\u276f]*$)/g)?.[0];
    if (r) {
      const l = this._adjustPrompt(r, i, "❯");
      if (l) return l;
    }
    const n = i.match(/^(?<prompt>\$)/)?.groups?.prompt;
    if (n) {
      const l = this._adjustPrompt(n, i, "$");
      if (l) return l;
    }
    const o = i.match(/^(?<prompt>>>> )/g)?.groups?.prompt;
    if (o) return { prompt: o, likelySingleLine: true };
    if (this._capability.promptTerminator && i.trim().endsWith(this._capability.promptTerminator)) {
      const l = this._adjustPrompt(i, i, this._capability.promptTerminator);
      if (l) return l;
    }
    const a = i.match(/^(?<prompt>(\(.+\)\s)?(?:[A-Z]:\\.*>))/);
    return a?.groups?.prompt ? { prompt: a.groups.prompt, likelySingleLine: true } : void 0;
  }
  _adjustPrompt(e, t, i) {
    if (e) return t === e && e.endsWith(i) && (e += " "), e;
  }
};
ei = v([Be(3, st)], ei);
function ti(e, t, i = 0) {
  return e.registerMarker(t.line - (e.buffer.active.baseY + e.buffer.active.cursorY) + i);
}
p();
var lu = class extends X {
  constructor() {
    super(...arguments), this.type = 0, this._cwd = "", this._cwds = /* @__PURE__ */ new Map(), this._onDidChangeCwd = this._register(new k()), this.onDidChangeCwd = this._onDidChangeCwd.event;
  }
  get cwds() {
    return Array.from(this._cwds.keys());
  }
  getCwd() {
    return this._cwd;
  }
  updateCwd(e) {
    const t = this._cwd !== e;
    this._cwd = e;
    const i = this._cwds.get(this._cwd) || 0;
    this._cwds.delete(this._cwd), this._cwds.set(this._cwd, i + 1), t && this._onDidChangeCwd.fire(e);
  }
};
p();
var cu = class extends Ee {
  constructor(e, t) {
    super(), this._terminal = e, this._onDidExecuteText = t, this.type = 3, this._commands = [], this._onCommandFinished = this.add(new k()), this.onCommandFinished = this._onCommandFinished.event, this.add(this._terminal.onData((i) => this._onData(i))), this.add(this._terminal.parser.registerCsiHandler({ final: "J" }, (i) => (i.length >= 1 && (i[0] === 2 || i[0] === 3) && this._clearCommandsInViewport(), false))), this._onDidExecuteText && this.add(this._onDidExecuteText(() => this._onEnter()));
  }
  get commands() {
    return this._commands;
  }
  _onData(e) {
    e === "\r" && this._onEnter();
  }
  _onEnter() {
    if (this._terminal && this._terminal.buffer.active.cursorX >= 2) {
      const e = this._terminal.registerMarker(0);
      e && (this._commands.push(e), this._onCommandFinished.fire(e));
    }
  }
  _clearCommandsInViewport() {
    let e = 0;
    for (let t = this._commands.length - 1; t >= 0 && !(this._commands[t].line < this._terminal.buffer.active.baseY); t--) e++;
    this._commands.splice(this._commands.length - e, e);
  }
  clearCommands() {
    this._commands.length = 0;
  }
};
p();
var hu = class extends X {
  constructor(e) {
    super(), this._terminal = e, this.type = 4, this._idToMarkerMap = /* @__PURE__ */ new Map(), this._anonymousMarkers = /* @__PURE__ */ new Map(), this._onMarkAdded = this._register(new k()), this.onMarkAdded = this._onMarkAdded.event;
  }
  *markers() {
    for (const e of this._idToMarkerMap.values()) yield e;
    for (const e of this._anonymousMarkers.values()) yield e;
  }
  addMark(e) {
    const t = e?.marker || this._terminal.registerMarker(), i = e?.id;
    t && (i ? (this._idToMarkerMap.set(i, t), t.onDispose(() => this._idToMarkerMap.delete(i))) : (this._anonymousMarkers.set(t.id, t), t.onDispose(() => this._anonymousMarkers.delete(t.id))), this._onMarkAdded.fire({ marker: t, id: i, hidden: e?.hidden, hoverMessage: e?.hoverMessage }));
  }
  getMark(e) {
    return this._idToMarkerMap.get(e);
  }
};
p();
var uu = class extends X {
  constructor() {
    super(...arguments), this.type = 5, this._env = { value: /* @__PURE__ */ new Map(), isTrusted: true }, this._onDidChangeEnv = this._register(new k()), this.onDidChangeEnv = this._onDidChangeEnv.event;
  }
  get env() {
    return this._createStateObject();
  }
  setEnvironment(e, t) {
    if (!Li(this.env.value, e)) {
      this._env.value.clear();
      for (const [i, s] of Object.entries(e)) s !== void 0 && this._env.value.set(i, s);
      this._env.isTrusted = t, this._fireEnvChange();
    }
  }
  startEnvironmentSingleVar(e, t) {
    e ? this._pendingEnv = { value: /* @__PURE__ */ new Map(), isTrusted: t } : this._pendingEnv = { value: new Map(this._env.value), isTrusted: this._env.isTrusted && t };
  }
  setEnvironmentSingleVar(e, t, i) {
    this._pendingEnv && e !== void 0 && t !== void 0 && (this._pendingEnv.value.set(e, t), this._pendingEnv.isTrusted &&= i);
  }
  endEnvironmentSingleVar(e) {
    if (!this._pendingEnv) return;
    this._pendingEnv.isTrusted &&= e, !Oa(this._env.value, this._pendingEnv.value) && (this._env = this._pendingEnv, this._fireEnvChange()), this._pendingEnv = void 0;
  }
  deleteEnvironmentSingleVar(e, t, i) {
    this._pendingEnv && e !== void 0 && t !== void 0 && (this._pendingEnv.value.delete(e), this._pendingEnv.isTrusted &&= i);
  }
  _fireEnvChange() {
    this._onDidChangeEnv.fire(this._createStateObject());
  }
  _createStateObject() {
    return { value: Object.fromEntries(this._env.value), isTrusted: this._env.isTrusted };
  }
};
p();
var du = class extends X {
  constructor() {
    super(...arguments), this.type = 6, this._onPromptTypeChanged = this._register(new k()), this.onPromptTypeChanged = this._onPromptTypeChanged.event;
  }
  get promptType() {
    return this._promptType;
  }
  setPromptType(e) {
    this._promptType = e, this._onPromptTypeChanged.fire(e);
  }
}, fu = class extends X {
  constructor(e, t, i, s) {
    super(), this._nonce = e, this._disableShellIntegrationReporting = t, this._onDidExecuteText = i, this._logService = s, this.capabilities = this._register(new ou()), this._seenSequences = /* @__PURE__ */ new Set(), this._status = 0, this._onDidChangeStatus = this._register(new k()), this.onDidChangeStatus = this._onDidChangeStatus.event, this._onDidChangeSeenSequences = this._register(new k()), this.onDidChangeSeenSequences = this._onDidChangeSeenSequences.event, this._register(_e(() => {
      this._clearActivationTimeout();
    }));
  }
  get seenSequences() {
    return this._seenSequences;
  }
  get status() {
    return this._status;
  }
  activate(e) {
    this._terminal = e, this.capabilities.add(3, this._register(new cu(this._terminal, this._onDidExecuteText))), this._register(e.parser.registerOscHandler(633, (t) => this._handleVSCodeSequence(t))), this._register(e.parser.registerOscHandler(1337, (t) => this._doHandleITermSequence(t))), this._register(e.parser.registerOscHandler(133, (t) => this._handleFinalTermSequence(t))), this._register(e.parser.registerOscHandler(7, (t) => this._doHandleSetCwd(t))), this._register(e.parser.registerOscHandler(9, (t) => this._doHandleSetWindowsFriendlyCwd(t))), this._ensureCapabilitiesOrLogFailure();
  }
  getMarkerId(e, t) {
    this._createOrGetBufferMarkDetection(e).getMark(t);
  }
  _markSequenceSeen(e) {
    this._seenSequences.has(e) || (this._seenSequences.add(e), this._onDidChangeSeenSequences.fire(this._seenSequences));
  }
  _handleFinalTermSequence(e) {
    const t = this._doHandleFinalTermSequence(e);
    return this._status === 0 && (this._status = 1, this._onDidChangeStatus.fire(this._status)), t;
  }
  _doHandleFinalTermSequence(e) {
    if (!this._terminal) return false;
    const [t, ...i] = e.split(";");
    switch (this._markSequenceSeen(t), t) {
      case "A":
        return this._createOrGetCommandDetection(this._terminal).handlePromptStart(), true;
      case "B":
        return this._createOrGetCommandDetection(this._terminal).handleCommandStart({ ignoreCommandLine: true }), true;
      case "C":
        return this._createOrGetCommandDetection(this._terminal).handleCommandExecuted(), true;
      case "D": {
        let s;
        if (i.length === 1) {
          const r = parseInt(i[0]);
          s = Number.isNaN(r) ? void 0 : r;
        }
        return this._createOrGetCommandDetection(this._terminal).handleCommandFinished(s), true;
      }
    }
    return false;
  }
  _handleVSCodeSequence(e) {
    const t = this._doHandleVSCodeSequence(e);
    return t && this._clearActivationTimeout(), this._status !== 2 && (this._status = 2, this._onDidChangeStatus.fire(this._status)), t;
  }
  _ensureCapabilitiesOrLogFailure() {
    this._disableShellIntegrationReporting || (this._activationTimeout = setTimeout(() => {
      !this.capabilities.get(2) && !this.capabilities.get(0) && this._logService.warn("Shell integration failed to add capabilities within 10 seconds");
    }, 1e4));
  }
  _clearActivationTimeout() {
    this._activationTimeout !== void 0 && (clearTimeout(this._activationTimeout), this._activationTimeout = void 0);
  }
  _doHandleVSCodeSequence(e) {
    if (!this._terminal) return false;
    const t = e.indexOf(";"), i = t === -1 ? e : e.substring(0, t);
    this._markSequenceSeen(i);
    const s = t === -1 ? [] : e.substring(t + 1).split(";");
    switch (i) {
      case "A":
        return this._createOrGetCommandDetection(this._terminal).handlePromptStart(), true;
      case "B":
        return this._createOrGetCommandDetection(this._terminal).handleCommandStart(), true;
      case "C":
        return this._createOrGetCommandDetection(this._terminal).handleCommandExecuted(), true;
      case "D": {
        const r = s[0];
        let n;
        if (r !== void 0) {
          const o = parseInt(r);
          n = Number.isNaN(o) ? void 0 : o;
        }
        return this._createOrGetCommandDetection(this._terminal).handleCommandFinished(n), true;
      }
      case "E": {
        const r = s[0], n = s[1];
        let o;
        return r !== void 0 ? o = ii(r) : o = "", this._createOrGetCommandDetection(this._terminal).setCommandLine(o, n === this._nonce), true;
      }
      case "F":
        return this._createOrGetCommandDetection(this._terminal).handleContinuationStart(), true;
      case "G":
        return this._createOrGetCommandDetection(this._terminal).handleContinuationEnd(), true;
      case "EnvJson": {
        const r = s[0], n = s[1];
        if (r !== void 0) try {
          const o = JSON.parse(ii(r));
          this._createOrGetShellEnvDetection().setEnvironment(o, n === this._nonce);
        } catch {
          this._logService.warn("Failed to parse environment from shell integration sequence", r);
        }
        return true;
      }
      case "EnvSingleStart":
        return this._createOrGetShellEnvDetection().startEnvironmentSingleVar(s[0] === "1", s[1] === this._nonce), true;
      case "EnvSingleDelete": {
        const r = s[0], n = s[1], o = s[2];
        if (r !== void 0 && n !== void 0) {
          const a = ii(n);
          this._createOrGetShellEnvDetection().deleteEnvironmentSingleVar(r, a, o === this._nonce);
        }
        return true;
      }
      case "EnvSingleEntry": {
        const r = s[0], n = s[1], o = s[2];
        if (r !== void 0 && n !== void 0) {
          const a = ii(n);
          this._createOrGetShellEnvDetection().setEnvironmentSingleVar(r, a, o === this._nonce);
        }
        return true;
      }
      case "EnvSingleEnd":
        return this._createOrGetShellEnvDetection().endEnvironmentSingleVar(s[0] === this._nonce), true;
      case "H":
        return this._createOrGetCommandDetection(this._terminal).handleRightPromptStart(), true;
      case "I":
        return this._createOrGetCommandDetection(this._terminal).handleRightPromptEnd(), true;
      case "P": {
        const r = s[0], n = r !== void 0 ? ii(r) : "", { key: o, value: a } = No(n);
        if (a === void 0) return true;
        switch (o) {
          case "ContinuationPrompt":
            return this._updateContinuationPrompt(ol(a)), true;
          case "Cwd":
            return this._updateCwd(a), true;
          case "IsWindows":
            return this._createOrGetCommandDetection(this._terminal).setIsWindowsPty(a === "True"), true;
          case "HasRichCommandDetection":
            return this._createOrGetCommandDetection(this._terminal).setHasRichCommandDetection(a === "True"), true;
          case "Prompt": {
            const l = a.replace(/\x1b\[[0-9;]*m/g, "");
            return this._updatePromptTerminator(l), true;
          }
          case "PromptType":
            return this._createOrGetPromptTypeDetection().setPromptType(a), true;
          case "Task":
            return this._createOrGetBufferMarkDetection(this._terminal), this.capabilities.get(2)?.setIsCommandStorageDisabled(), true;
        }
      }
      case "SetMark":
        return this._createOrGetBufferMarkDetection(this._terminal).addMark(_u(s)), true;
    }
    return false;
  }
  _updateContinuationPrompt(e) {
    this._terminal && this._createOrGetCommandDetection(this._terminal).setContinuationPrompt(e);
  }
  _updatePromptTerminator(e) {
    if (!this._terminal) return;
    const t = e.substring(e.lastIndexOf(`
`) + 1), i = t.substring(t.lastIndexOf(" "));
    i && this._createOrGetCommandDetection(this._terminal).setPromptTerminator(i, t);
  }
  _updateCwd(e) {
    e = qh(e), this._createOrGetCwdDetection().updateCwd(e), this.capabilities.get(2)?.setCwd(e);
  }
  _doHandleITermSequence(e) {
    if (!this._terminal) return false;
    const [t] = e.split(";");
    switch (this._markSequenceSeen(`1337;${t}`), t) {
      case "SetMark":
        this._createOrGetBufferMarkDetection(this._terminal).addMark();
      default: {
        const { key: i, value: s } = No(t);
        if (s === void 0) return true;
        switch (i) {
          case "CurrentDir":
            return this._updateCwd(s), true;
        }
      }
    }
    return false;
  }
  _doHandleSetWindowsFriendlyCwd(e) {
    if (!this._terminal) return false;
    const [t, ...i] = e.split(";");
    switch (this._markSequenceSeen(`9;${t}`), t) {
      case "9":
        return i.length && this._updateCwd(i[0]), true;
    }
    return false;
  }
  _doHandleSetCwd(e) {
    if (!this._terminal) return false;
    const [t] = e.split(";");
    if (this._markSequenceSeen(`7;${t}`), t.match(/^file:\/\/.*\//)) {
      const i = H.parse(t);
      if (i.path && i.path.length > 0) return this._updateCwd(i.path), true;
    }
    return false;
  }
  serialize() {
    return !this._terminal || !this.capabilities.has(2) ? { isWindowsPty: false, hasRichCommandDetection: false, commands: [], promptInputModel: void 0 } : this._createOrGetCommandDetection(this._terminal).serialize();
  }
  deserialize(e) {
    if (!this._terminal) throw new Error("Cannot restore commands before addon is activated");
    const t = this._createOrGetCommandDetection(this._terminal);
    t.deserialize(e), t.cwd && this._updateCwd(t.cwd);
  }
  _createOrGetCwdDetection() {
    let e = this.capabilities.get(0);
    return e || (e = this._register(new lu()), this.capabilities.add(0, e)), e;
  }
  _createOrGetCommandDetection(e) {
    let t = this.capabilities.get(2);
    return t || (t = this._register(new $i(e, this._logService)), this.capabilities.add(2, t)), t;
  }
  _createOrGetBufferMarkDetection(e) {
    let t = this.capabilities.get(4);
    return t || (t = this._register(new hu(e)), this.capabilities.add(4, t)), t;
  }
  _createOrGetShellEnvDetection() {
    let e = this.capabilities.get(5);
    return e || (e = this._register(new uu()), this.capabilities.add(5, e)), e;
  }
  _createOrGetPromptTypeDetection() {
    let e = this.capabilities.get(6);
    return e || (e = this._register(new du()), this.capabilities.add(6, e)), e;
  }
};
function ii(e) {
  return e.replaceAll(/\\(\\|x([0-9a-f]{2}))/gi, (t, i, s) => s ? String.fromCharCode(parseInt(s, 16)) : i);
}
function No(e) {
  const t = e.indexOf("=");
  return t === -1 ? { key: e, value: void 0 } : { key: e.substring(0, t), value: e.substring(1 + t) };
}
function _u(e) {
  let t, i = false;
  for (const s of e) s !== void 0 && (s === "Hidden" && (i = true), s.startsWith("Id=") && (t = s.substring(3)));
  return { id: t, hidden: i };
}
p();
function pu(e, t = {}) {
  let i = "";
  return t.excludeLeadingNewLine || (i += `\r
`), i += "\x1B[0m\x1B[7m * ", t.loudFormatting ? i += "\x1B[0;104m" : i += "\x1B[0m", i += ` ${e} \x1B[0m
\r`, i;
}
p();
function Qs(e) {
  const t = [];
  typeof e == "number" && t.push("code/timeOrigin", e);
  function i(n, o) {
    t.push(n, o?.startTime ?? Date.now());
  }
  function s() {
    const n = [];
    for (let o = 0; o < t.length; o += 2) n.push({ name: t[o], startTime: t[o + 1] });
    return n;
  }
  function r(n) {
    for (let o = t.length - 2; o >= 0; o -= 2) t[o] === n && t.splice(o, 2);
  }
  return { mark: i, getMarks: s, clearMarks: r };
}
function mu() {
  if (typeof performance == "object" && typeof performance.mark == "function" && !performance.nodeTiming) {
    if (typeof performance.timeOrigin != "number" && !performance.timing) return Qs();
    {
      const e = /* @__PURE__ */ new Map();
      return { mark(t, i) {
        if (!e.has(t)) {
          const [s] = performance.getEntriesByName(t, "mark");
          s && e.set(t, s.startTime);
        }
        e.has(t) && performance.clearMarks(t), performance.mark(t, i);
      }, clearMarks(t) {
        e.delete(t), performance.clearMarks(t);
      }, getMarks() {
        let t = performance.timeOrigin;
        typeof t != "number" && (t = performance.timing.navigationStart || performance.timing.redirectStart || performance.timing.fetchStart);
        const i = [];
        for (const [r, n] of e) i.push({ name: r, startTime: n });
        for (const r of performance.getEntriesByType("mark")) i.push({ name: r.name, startTime: r.startTime });
        i.sort((r, n) => r.startTime - n.startTime);
        const s = [{ name: "code/timeOrigin", startTime: Math.round(t) }];
        for (const r of i) s.push({ name: r.name, startTime: Math.round(t + r.startTime) });
        return s;
      } };
    }
  } else if (typeof process == "object") {
    const e = performance?.timeOrigin;
    return Qs(e);
  } else return console.trace("perf-util loaded in UNKNOWN environment"), Qs();
}
function gu(e) {
  return e.MonacoPerformanceMarks || (e.MonacoPerformanceMarks = mu()), e.MonacoPerformanceMarks;
}
var Js = gu(globalThis), si = Js.mark, vu = Js.getMarks, T0 = Js.clearMarks;
import yu from "@xterm/headless";
p(), p();
var wu = class extends X {
  constructor(e, t, i, s) {
    super(), this._pointer = 0, this._paused = false, this._throttled = false, this._register(e.onProcessData((r) => {
      if (this._paused || this._throttled) return;
      const n = typeof r == "string" ? r : r.data;
      for (let o = 0; o < n.length; o++) n[o] === t[this._pointer] ? this._pointer++ : this._reset(), this._pointer === t.length && (s.debug(`Auto reply match: "${t}", response: "${i}"`), e.input(i), this._throttled = true, ze(1e3).then(() => this._throttled = false), this._reset());
    }));
  }
  _reset() {
    this._pointer = 0;
  }
  handleResize() {
    N && (this._paused = true);
  }
  handleInput() {
    this._paused = false;
  }
}, Zs = class {
  constructor(e) {
    this._logService = e, this._autoReplies = /* @__PURE__ */ new Map(), this._terminalProcesses = /* @__PURE__ */ new Map(), this._autoResponders = /* @__PURE__ */ new Map();
  }
  async installAutoReply(e, t) {
    this._autoReplies.set(e, t);
    for (const i of this._autoResponders.keys()) {
      const s = this._terminalProcesses.get(i);
      if (!s) {
        this._logService.error("Could not find terminal process to install auto reply");
        continue;
      }
      this._processInstallAutoReply(i, s, e, t);
    }
  }
  async uninstallAllAutoReplies() {
    for (const e of this._autoReplies.keys()) for (const t of this._autoResponders.values()) t.get(e)?.dispose(), t.delete(e);
  }
  handleProcessReady(e, t) {
    const i = this._autoResponders.get(e);
    if (i) for (const s of i.values()) s.dispose();
    this._terminalProcesses.set(e, t), this._autoResponders.set(e, /* @__PURE__ */ new Map());
    for (const [s, r] of this._autoReplies.entries()) this._processInstallAutoReply(e, t, s, r);
  }
  handleProcessDispose(e) {
    const t = this._autoResponders.get(e);
    if (t) {
      for (const i of t.values()) i.dispose();
      t.clear();
    }
    this._autoResponders.delete(e), this._terminalProcesses.delete(e);
  }
  handleProcessInput(e, t) {
    const i = this._autoResponders.get(e);
    if (i) for (const s of i.values()) s.handleInput();
  }
  handleProcessResize(e, t, i) {
    const s = this._autoResponders.get(e);
    if (s) for (const r of s.values()) r.handleResize();
  }
  _processInstallAutoReply(e, t, i, s) {
    const r = this._autoResponders.get(e);
    r && (r.get(i)?.dispose(), r.set(i, new wu(t, i, s, this._logService)));
  }
};
Zs = v([Be(0, st)], Zs);
var { Terminal: bu } = yu;
function M(e, t, i) {
  if (typeof i.value != "function") throw new Error("not supported");
  const s = "value", r = i.value;
  i[s] = async function(...n) {
    this.traceRpcArgs.logService.getLevel() === ie.Trace && this.traceRpcArgs.logService.trace(`[RPC Request] PtyService#${r.name}(${n.map((a) => JSON.stringify(a)).join(", ")})`), this.traceRpcArgs.simulatedLatency && await ze(this.traceRpcArgs.simulatedLatency);
    let o;
    try {
      o = await r.apply(this, n);
    } catch (a) {
      throw this.traceRpcArgs.logService.error(`[RPC Response] PtyService#${r.name}`, a), a;
    }
    return this.traceRpcArgs.logService.getLevel() === ie.Trace && this.traceRpcArgs.logService.trace(`[RPC Response] PtyService#${r.name}`, o), o;
  };
}
var er, tr, C = class extends X {
  constructor(e, t, i, s) {
    super(), this._logService = e, this._productService = t, this._reconnectConstants = i, this._simulatedLatency = s, this._ptys = /* @__PURE__ */ new Map(), this._workspaceLayoutInfos = /* @__PURE__ */ new Map(), this._revivedPtyIdMap = /* @__PURE__ */ new Map(), this._prunedReviveIds = /* @__PURE__ */ new Set(), this._lastPtyId = 0, this._onHeartbeat = this._register(new k()), this.onHeartbeat = this._traceEvent("_onHeartbeat", this._onHeartbeat.event), this._onProcessData = this._register(new k()), this.onProcessData = this._traceEvent("_onProcessData", this._onProcessData.event), this._onProcessReplay = this._register(new k()), this.onProcessReplay = this._traceEvent("_onProcessReplay", this._onProcessReplay.event), this._onProcessReady = this._register(new k()), this.onProcessReady = this._traceEvent("_onProcessReady", this._onProcessReady.event), this._onProcessExit = this._register(new k()), this.onProcessExit = this._traceEvent("_onProcessExit", this._onProcessExit.event), this._onProcessOrphanQuestion = this._register(new k()), this.onProcessOrphanQuestion = this._traceEvent("_onProcessOrphanQuestion", this._onProcessOrphanQuestion.event), this._onDidRequestDetach = this._register(new k()), this.onDidRequestDetach = this._traceEvent("_onDidRequestDetach", this._onDidRequestDetach.event), this._onDidChangeProperty = this._register(new k()), this.onDidChangeProperty = this._traceEvent("_onDidChangeProperty", this._onDidChangeProperty.event), this._register(_e(() => {
      for (const r of this._ptys.values()) r.shutdown(true);
      this._ptys.clear();
    })), this._detachInstanceRequestStore = this._register(new Vs(void 0, this._logService)), this._detachInstanceRequestStore.onCreateRequest(this._onDidRequestDetach.fire, this._onDidRequestDetach), this._autoRepliesContribution = new Zs(this._logService), this._contributions = [this._autoRepliesContribution];
  }
  async installAutoReply(e, t) {
    await this._autoRepliesContribution.installAutoReply(e, t);
  }
  async uninstallAllAutoReplies() {
    await this._autoRepliesContribution.uninstallAllAutoReplies();
  }
  _traceEvent(e, t) {
    return t((i) => {
      this._logService.getLevel() === ie.Trace && this._logService.trace(`[RPC Event] PtyService#${e}.fire(${JSON.stringify(i)})`);
    }), t;
  }
  get traceRpcArgs() {
    return { logService: this._logService, simulatedLatency: this._simulatedLatency };
  }
  async refreshIgnoreProcessNames(e) {
    Ks.length = 0, Ks.push(...e);
  }
  async requestDetachInstance(e, t) {
    return this._detachInstanceRequestStore.createRequest({ workspaceId: e, instanceId: t });
  }
  async acceptDetachInstanceReply(e, t) {
    let i;
    const s = this._ptys.get(t);
    s && (i = await this._buildProcessDetails(t, s)), this._detachInstanceRequestStore.acceptReply(e, i);
  }
  async freePortKillProcess(e) {
    const i = (await new Promise((s, r) => {
      Sh(N ? `netstat -ano | findstr "${e}"` : `lsof -nP -iTCP -sTCP:LISTEN | grep ${e}`, {}, (n, o) => {
        if (n) return r("Problem occurred when listing active processes");
        s(o);
      });
    })).split(/\r?\n/).filter((s) => !!s.trim());
    if (i.length >= 1) {
      const s = /\s+(\d+)(?:\s+|$)/, r = i[0].match(s)?.[1];
      if (r) try {
        process.kill(Number.parseInt(r));
      } catch {
      }
      else throw new Error(`Processes for port ${e} were not found`);
      return { port: e, processId: r };
    }
    throw new Error(`Could not kill process with port ${e}`);
  }
  async serializeTerminalState(e) {
    const t = [];
    for (const [s, r] of this._ptys.entries()) r.hasWrittenData && e.indexOf(s) !== -1 && t.push(ys.withAsyncBody(async (n) => {
      n({ id: s, shellLaunchConfig: r.shellLaunchConfig, processDetails: await this._buildProcessDetails(s, r), processLaunchConfig: r.processLaunchOptions, unicodeVersion: r.unicodeVersion, replayEvent: await r.serializeNormalBuffer(), timestamp: Date.now() });
    }));
    const i = { version: 1, state: await Promise.all(t) };
    return JSON.stringify(i);
  }
  async reviveTerminalProcesses(e, t, i) {
    const s = [];
    for (const r of t) s.push(this._reviveTerminalProcess(e, r));
    await Promise.all(s);
  }
  async _reviveTerminalProcess(e, t) {
    const i = this._getRevivingProcessId(e, t.id);
    if (this._prunedReviveIds.delete(i), !await this._cwdExists(t.processDetails.cwd)) {
      this._prunedReviveIds.add(i), this._logService.info(`Skipped reviving terminal, old id ${i}, persisted cwd "${t.processDetails.cwd}" no longer exists`);
      return;
    }
    const s = w(2289, null);
    let r = "";
    if (N) {
      const o = t.replayEvent.events.length > 0 ? t.replayEvent.events.at(-1) : void 0;
      o && (r += `\r
`.repeat(o.rows - 1) + "\x1B[H");
    }
    const n = await this.createProcess({ ...t.shellLaunchConfig, cwd: t.processDetails.cwd, color: t.processDetails.color, icon: t.processDetails.icon, name: t.processDetails.titleSource === Yt.Api ? t.processDetails.title : void 0, initialText: t.replayEvent.events[0].data + pu(s, { loudFormatting: true }) + r }, t.processDetails.cwd, t.replayEvent.events[0].cols, t.replayEvent.events[0].rows, t.unicodeVersion, t.processLaunchConfig.env, t.processLaunchConfig.executableEnv, t.processLaunchConfig.options, true, t.processDetails.workspaceId, t.processDetails.workspaceName, true, t.replayEvent.events[0].data);
    this._revivedPtyIdMap.set(i, { newId: n, state: t }), this._logService.info(`Revived process, old id ${i} -> new id ${n}`);
  }
  async _cwdExists(e) {
    try {
      return (await kh.promises.stat(e)).isDirectory();
    } catch (t) {
      return !(t?.code === "ENOENT" || t?.code === "ENOTDIR");
    }
  }
  async shutdownAll() {
    this.dispose();
  }
  async shutdownAllForWorkspace(e) {
    for (const t of this._ptys.values()) t.workspaceId === e && t.shutdown(true);
  }
  async createProcess(e, t, i, s, r, n, o, a, l, c, h, u, d) {
    if (e.attachPersistentProcess) throw new Error("Attempt to create a process when attach object was provided");
    const f = ++this._lastPtyId, _ = new ot(e, t, i, s, n, o, a, this._logService, this._productService), E = { env: n, executableEnv: o, options: a }, g = new Eu(f, _, c, h, l, i, s, E, r, this._reconnectConstants, this._logService, u && typeof e.initialText == "string" ? e.initialText : void 0, d, e.icon, e.color, e.name, e.fixedDimensions);
    return _.onProcessExit((y) => {
      for (const R of this._contributions) R.handleProcessDispose(f);
      g.dispose(), this._ptys.delete(f), this._onProcessExit.fire({ id: f, event: y });
    }), g.onProcessData((y) => this._onProcessData.fire({ id: f, event: y })), g.onProcessReplay((y) => this._onProcessReplay.fire({ id: f, event: y })), g.onProcessReady((y) => this._onProcessReady.fire({ id: f, event: y })), g.onProcessOrphanQuestion(() => this._onProcessOrphanQuestion.fire({ id: f })), g.onDidChangeProperty((y) => this._onDidChangeProperty.fire({ id: f, property: y })), g.onPersistentProcessReady(() => {
      for (const y of this._contributions) y.handleProcessReady(f, _);
    }), this._ptys.set(f, g), f;
  }
  async attachToProcess(e) {
    try {
      await this._throwIfNoPty(e).attach(), this._logService.info(`Persistent process reconnection "${e}"`);
    } catch (t) {
      throw this._logService.warn(`Persistent process reconnection "${e}" failed`, t.message), t;
    }
  }
  async updateTitle(e, t, i) {
    this._throwIfNoPty(e).setTitle(t, i);
  }
  async updateIcon(e, t, i, s) {
    this._throwIfNoPty(e).setIcon(t, i, s);
  }
  async clearBuffer(e) {
    this._throwIfNoPty(e).clearBuffer();
  }
  async refreshProperty(e, t) {
    return this._throwIfNoPty(e).refreshProperty(t);
  }
  async updateProperty(e, t, i) {
    return this._throwIfNoPty(e).updateProperty(t, i);
  }
  async detachFromProcess(e, t) {
    return this._throwIfNoPty(e).detach(t);
  }
  async reduceConnectionGraceTime() {
    for (const e of this._ptys.values()) e.reduceGraceTime();
  }
  async listProcesses() {
    const e = Array.from(this._ptys.entries()).filter(([s, r]) => r.shouldPersistTerminal);
    this._logService.info(`Listing ${e.length} persistent terminals, ${this._ptys.size} total terminals`);
    const t = e.map(async ([s, r]) => this._buildProcessDetails(s, r));
    return (await Promise.all(t)).filter((s) => s.isOrphan);
  }
  async getPerformanceMarks() {
    return vu();
  }
  async start(e) {
    const t = this._ptys.get(e);
    return t ? t.start() : { message: `Could not find pty with id "${e}"` };
  }
  async shutdown(e, t) {
    return this._ptys.get(e)?.shutdown(t);
  }
  async input(e, t) {
    const i = this._throwIfNoPty(e);
    if (i) {
      for (const s of this._contributions) s.handleProcessInput(e, t);
      i.input(t);
    }
  }
  async sendSignal(e, t) {
    return this._throwIfNoPty(e).sendSignal(t);
  }
  async processBinary(e, t) {
    return this._throwIfNoPty(e).writeBinary(t);
  }
  async resize(e, t, i) {
    const s = this._throwIfNoPty(e);
    if (s) {
      for (const r of this._contributions) r.handleProcessResize(e, t, i);
      s.resize(t, i);
    }
  }
  async getInitialCwd(e) {
    return this._throwIfNoPty(e).getInitialCwd();
  }
  async getCwd(e) {
    return this._throwIfNoPty(e).getCwd();
  }
  async acknowledgeDataEvent(e, t) {
    return this._throwIfNoPty(e).acknowledgeDataEvent(t);
  }
  async setUnicodeVersion(e, t) {
    return this._throwIfNoPty(e).setUnicodeVersion(t);
  }
  async getLatency() {
    return [];
  }
  async orphanQuestionReply(e) {
    return this._throwIfNoPty(e).orphanQuestionReply();
  }
  async getDefaultSystemShell(e = Fr) {
    return Oh(e, process.env);
  }
  async getEnvironment() {
    return { ...process.env };
  }
  async getWslPath(e, t) {
    if (t === "win-to-unix") {
      if (!N) return e;
      if (nt() < 17063) return e.replace(/\\/g, "/");
      const i = this._getWSLExecutablePath();
      return i ? new Promise((s) => {
        mo(i, ["-e", "wslpath", e], {}, (n, o, a) => {
          s(n ? e : Hh(o.trim(), "bash"));
        }).stdin.end();
      }) : e;
    }
    if (t === "unix-to-win" && N) {
      if (nt() < 17063) return e;
      const i = this._getWSLExecutablePath();
      return i ? new Promise((s) => {
        mo(i, ["-e", "wslpath", "-w", e], {}, (n, o, a) => {
          s(n ? e : o.trim());
        }).stdin.end();
      }) : e;
    }
    return e;
  }
  _getWSLExecutablePath() {
    const e = nt() >= 16299, t = process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432"), i = process.env.SystemRoot;
    if (i) return O(i, t ? "Sysnative" : "System32", e ? "wsl.exe" : "bash.exe");
  }
  async getRevivedPtyNewId(e, t) {
    const i = this._getRevivingProcessId(e, t);
    if (this._prunedReviveIds.has(i)) return;
    const s = this._revivedPtyIdMap.get(i)?.newId;
    return s !== void 0 ? s : this._ptys.get(t)?.workspaceId === e ? t : void 0;
  }
  async setTerminalLayoutInfo(e) {
    this._workspaceLayoutInfos.set(e.workspaceId, e);
  }
  async getTerminalLayoutInfo(e) {
    si("code/willGetTerminalLayoutInfo");
    const t = this._workspaceLayoutInfos.get(e.workspaceId);
    if (t) {
      const i = /* @__PURE__ */ new Set(), r = (await Promise.all(t.tabs.map(async (n) => this._expandTerminalTab(e.workspaceId, n, i)))).filter((n) => n.terminals.length > 0);
      return si("code/didGetTerminalLayoutInfo"), { tabs: r };
    }
    si("code/didGetTerminalLayoutInfo");
  }
  async _expandTerminalTab(e, t, i) {
    const r = (await Promise.all(t.terminals.map((n) => this._expandTerminalInstance(e, n, i)))).filter((n) => n.terminal !== null);
    return { isActive: t.isActive, activePersistentProcessId: t.activePersistentProcessId, terminals: r };
  }
  async _expandTerminalInstance(e, t, i) {
    try {
      const s = this._getRevivingProcessId(e, t.terminal);
      if (this._prunedReviveIds.has(s)) return this._logService.info(`Expanding terminal instance, old id ${s} was pruned during revival`), { terminal: null, relativeSize: t.relativeSize };
      const r = this._revivedPtyIdMap.get(s)?.newId;
      this._logService.info(`Expanding terminal instance, old id ${s} -> new id ${r}`), this._revivedPtyIdMap.delete(s);
      const n = r ?? t.terminal;
      if (i.has(n)) throw new Error(`Terminal ${n} has already been expanded`);
      i.add(n);
      const o = this._throwIfNoPty(n);
      return { terminal: { ...o && await this._buildProcessDetails(t.terminal, o, r !== void 0), id: n }, relativeSize: t.relativeSize };
    } catch (s) {
      return this._logService.warn("Couldn't get layout info, a terminal was probably disconnected", s.message), this._logService.debug("Reattach to wrong terminal debug info - layout info by id", t), this._logService.debug("Reattach to wrong terminal debug info - _revivePtyIdMap", Array.from(this._revivedPtyIdMap.values())), this._logService.debug("Reattach to wrong terminal debug info - _ptys ids", Array.from(this._ptys.keys())), { terminal: null, relativeSize: t.relativeSize };
    }
  }
  _getRevivingProcessId(e, t) {
    return `${e}-${t}`;
  }
  async _buildProcessDetails(e, t, i = false) {
    si(`code/willBuildProcessDetails/${e}`);
    const [s, r] = await Promise.all([t.getCwd(), i ? true : t.isOrphaned()]), n = { id: e, title: t.title, titleSource: t.titleSource, pid: t.pid, workspaceId: t.workspaceId, workspaceName: t.workspaceName, cwd: s, isOrphan: r, icon: t.icon, color: t.color, fixedDimensions: t.fixedDimensions, environmentVariableCollections: t.processLaunchOptions.options.environmentVariableCollections, reconnectionProperties: t.shellLaunchConfig.reconnectionProperties, waitOnExit: t.shellLaunchConfig.waitOnExit, hideFromUser: t.shellLaunchConfig.hideFromUser, isFeatureTerminal: t.shellLaunchConfig.isFeatureTerminal, type: t.shellLaunchConfig.type, hasChildProcesses: t.hasChildProcesses, shellIntegrationNonce: t.processLaunchOptions.options.shellIntegration.nonce, tabActions: t.shellLaunchConfig.tabActions };
    return si(`code/didBuildProcessDetails/${e}`), n;
  }
  _throwIfNoPty(e) {
    const t = this._ptys.get(e);
    if (!t) throw new ut(`Could not find pty ${e} on pty host`);
    return t;
  }
};
v([M], C.prototype, "installAutoReply", null), v([M], C.prototype, "uninstallAllAutoReplies", null), v([q], C.prototype, "traceRpcArgs", null), v([M], C.prototype, "refreshIgnoreProcessNames", null), v([M], C.prototype, "requestDetachInstance", null), v([M], C.prototype, "acceptDetachInstanceReply", null), v([M], C.prototype, "freePortKillProcess", null), v([M], C.prototype, "serializeTerminalState", null), v([M], C.prototype, "reviveTerminalProcesses", null), v([M], C.prototype, "shutdownAll", null), v([M], C.prototype, "shutdownAllForWorkspace", null), v([M], C.prototype, "createProcess", null), v([M], C.prototype, "attachToProcess", null), v([M], C.prototype, "updateTitle", null), v([M], C.prototype, "updateIcon", null), v([M], C.prototype, "clearBuffer", null), v([M], C.prototype, "refreshProperty", null), v([M], C.prototype, "updateProperty", null), v([M], C.prototype, "detachFromProcess", null), v([M], C.prototype, "reduceConnectionGraceTime", null), v([M], C.prototype, "listProcesses", null), v([M], C.prototype, "getPerformanceMarks", null), v([M], C.prototype, "start", null), v([M], C.prototype, "shutdown", null), v([M], C.prototype, "input", null), v([M], C.prototype, "sendSignal", null), v([M], C.prototype, "processBinary", null), v([M], C.prototype, "resize", null), v([M], C.prototype, "getInitialCwd", null), v([M], C.prototype, "getCwd", null), v([M], C.prototype, "acknowledgeDataEvent", null), v([M], C.prototype, "setUnicodeVersion", null), v([M], C.prototype, "getLatency", null), v([M], C.prototype, "orphanQuestionReply", null), v([M], C.prototype, "getDefaultSystemShell", null), v([M], C.prototype, "getEnvironment", null), v([M], C.prototype, "getWslPath", null), v([M], C.prototype, "getRevivedPtyNewId", null), v([M], C.prototype, "setTerminalLayoutInfo", null), v([M], C.prototype, "getTerminalLayoutInfo", null);
var Eu = class extends X {
  constructor(e, t, i, s, r, n, o, a, l, c, h, u, d, f, _, E, g) {
    super(), this._persistentProcessId = e, this._terminalProcess = t, this.workspaceId = i, this.workspaceName = s, this.shouldPersistTerminal = r, this.processLaunchOptions = a, this.unicodeVersion = l, this._logService = h, this._icon = f, this._color = _, this._pendingCommands = /* @__PURE__ */ new Map(), this._isStarted = false, this._orphanRequestQueue = new gn(), this._onProcessReplay = this._register(new k()), this.onProcessReplay = this._onProcessReplay.event, this._onProcessReady = this._register(new k()), this.onProcessReady = this._onProcessReady.event, this._onPersistentProcessReady = this._register(new k()), this.onPersistentProcessReady = this._onPersistentProcessReady.event, this._onProcessData = this._register(new k()), this.onProcessData = this._onProcessData.event, this._onProcessOrphanQuestion = this._register(new k()), this.onProcessOrphanQuestion = this._onProcessOrphanQuestion.event, this._onDidChangeProperty = this._register(new k()), this.onDidChangeProperty = this._onDidChangeProperty.event, this._inReplay = false, this._pid = -1, this._cwd = "", this._titleSource = Yt.Process, this._interactionState = new Su(`Persistent process "${this._persistentProcessId}" interaction state`, "None", this._logService), this._wasRevived = u !== void 0, this._serializer = new ku(n, o, c.scrollback, l, u, a.options.shellIntegration.nonce, r ? d : void 0, this._logService), E && this.setTitle(E, Yt.Api), this._fixedDimensions = g, this._orphanQuestionBarrier = null, this._orphanQuestionReplyTime = 0, this._disconnectRunner1 = this._register(new vn(() => {
      this._logService.info(`Persistent process "${this._persistentProcessId}": The reconnection grace time of ${Fo(c.graceTime)} has expired, shutting down pid "${this._pid}"`), this.shutdown(true);
    }, c.graceTime)), this._disconnectRunner2 = this._register(new vn(() => {
      this._logService.info(`Persistent process "${this._persistentProcessId}": The short reconnection grace time of ${Fo(c.shortGraceTime)} has expired, shutting down pid ${this._pid}`), this.shutdown(true);
    }, c.shortGraceTime)), this._register(this._terminalProcess.onProcessExit(() => this._bufferer.stopBuffering(this._persistentProcessId))), this._register(this._terminalProcess.onProcessReady((y) => {
      this._pid = y.pid, this._cwd = y.cwd, this._onProcessReady.fire(y);
    })), this._register(this._terminalProcess.onDidChangeProperty((y) => {
      this._onDidChangeProperty.fire(y);
    })), this._bufferer = new Fh((y, R) => this._onProcessData.fire(R)), this._register(this._bufferer.startBuffering(this._persistentProcessId, this._terminalProcess.onProcessData)), this._register(this.onProcessData((y) => this._serializer.handleData(y)));
  }
  get pid() {
    return this._pid;
  }
  get shellLaunchConfig() {
    return this._terminalProcess.shellLaunchConfig;
  }
  get hasWrittenData() {
    return this._interactionState.value !== "None";
  }
  get title() {
    return this._title || this._terminalProcess.currentTitle;
  }
  get titleSource() {
    return this._titleSource;
  }
  get icon() {
    return this._icon;
  }
  get color() {
    return this._color;
  }
  get fixedDimensions() {
    return this._fixedDimensions;
  }
  get hasChildProcesses() {
    return this._terminalProcess.hasChildProcesses;
  }
  setTitle(e, t) {
    t === Yt.Api && (this._interactionState.setValue("Session", "setTitle"), this._serializer.freeRawReviveBuffer()), this._title = e, this._titleSource = t;
  }
  setIcon(e, t, i) {
    (!this._icon || "id" in t && "id" in this._icon && t.id !== this._icon.id || !this.color || i !== this._color) && (this._serializer.freeRawReviveBuffer(), e && this._interactionState.setValue("Session", "setIcon")), this._icon = t, this._color = i;
  }
  _setFixedDimensions(e) {
    this._fixedDimensions = e;
  }
  async attach() {
    !this._disconnectRunner1.isScheduled() && !this._disconnectRunner2.isScheduled() && this._logService.warn(`Persistent process "${this._persistentProcessId}": Process had no disconnect runners but was an orphan`), this._disconnectRunner1.cancel(), this._disconnectRunner2.cancel();
  }
  async detach(e) {
    this.shouldPersistTerminal && (this._interactionState.value !== "None" || e) ? this._disconnectRunner1.schedule() : this.shutdown(true);
  }
  serializeNormalBuffer() {
    return this._serializer.generateReplayEvent(true, this._interactionState.value !== "Session");
  }
  async refreshProperty(e) {
    return this._terminalProcess.refreshProperty(e);
  }
  async updateProperty(e, t) {
    if (e === "fixedDimensions") return this._setFixedDimensions(t);
  }
  async start() {
    if (!this._isStarted) {
      const e = await this._terminalProcess.start();
      return e && "message" in e || (this._isStarted = true, this._wasRevived ? this.triggerReplay() : this._onPersistentProcessReady.fire()), e;
    }
    this._onProcessReady.fire({ pid: this._pid, cwd: this._cwd, windowsPty: this._terminalProcess.getWindowsPty() }), this._onDidChangeProperty.fire({ type: "title", value: this._terminalProcess.currentTitle }), this._onDidChangeProperty.fire({ type: "shellType", value: this._terminalProcess.shellType }), this.triggerReplay();
  }
  shutdown(e) {
    return this._terminalProcess.shutdown(e);
  }
  input(e) {
    if (this._interactionState.setValue("Session", "input"), this._serializer.freeRawReviveBuffer(), !this._inReplay) return this._terminalProcess.input(e);
  }
  sendSignal(e) {
    if (!this._inReplay) return this._terminalProcess.sendSignal(e);
  }
  writeBinary(e) {
    return this._terminalProcess.processBinary(e);
  }
  resize(e, t) {
    if (!this._inReplay) return this._serializer.handleResize(e, t), this._bufferer.flushBuffer(this._persistentProcessId), this._terminalProcess.resize(e, t);
  }
  async clearBuffer() {
    this._serializer.clearBuffer(), this._terminalProcess.clearBuffer();
  }
  setUnicodeVersion(e) {
    this.unicodeVersion = e, this._serializer.setUnicodeVersion?.(e);
  }
  acknowledgeDataEvent(e) {
    if (!this._inReplay) return this._terminalProcess.acknowledgeDataEvent(e);
  }
  getInitialCwd() {
    return this._terminalProcess.getInitialCwd();
  }
  getCwd() {
    return this._terminalProcess.getCwd();
  }
  async triggerReplay() {
    this._interactionState.value === "None" && this._interactionState.setValue("ReplayOnly", "triggerReplay");
    const e = await this._serializer.generateReplayEvent();
    let t = 0;
    for (const i of e.events) t += i.data.length;
    this._logService.info(`Persistent process "${this._persistentProcessId}": Replaying ${t} chars and ${e.events.length} size events`), this._onProcessReplay.fire(e), this._terminalProcess.clearUnacknowledgedChars(), this._onPersistentProcessReady.fire();
  }
  sendCommandResult(e, t, i) {
    this._pendingCommands.get(e) && this._pendingCommands.delete(e);
  }
  orphanQuestionReply() {
    if (this._orphanQuestionReplyTime = Date.now(), this._orphanQuestionBarrier) {
      const e = this._orphanQuestionBarrier;
      this._orphanQuestionBarrier = null, e.open();
    }
  }
  reduceGraceTime() {
    this._disconnectRunner2.isScheduled() || this._disconnectRunner1.isScheduled() && this._disconnectRunner2.schedule();
  }
  async isOrphaned() {
    return await this._orphanRequestQueue.queue(async () => this._isOrphaned());
  }
  async _isOrphaned() {
    return this._disconnectRunner1.isScheduled() || this._disconnectRunner2.isScheduled() ? true : (this._orphanQuestionBarrier || (this._orphanQuestionBarrier = new Ul(4e3), this._orphanQuestionReplyTime = 0, this._onProcessOrphanQuestion.fire()), await this._orphanQuestionBarrier.wait(), Date.now() - this._orphanQuestionReplyTime > 500);
  }
}, Su = class {
  constructor(e, t, i) {
    this._name = e, this._value = t, this._logService = i, this._log("initialized");
  }
  get value() {
    return this._value;
  }
  setValue(e, t) {
    this._value !== e && (this._value = e, this._log(t));
  }
  _log(e) {
    this._logService.debug(`MutationLogger "${this._name}" set to "${this._value}", reason: ${e}`);
  }
}, ku = class {
  constructor(e, t, i, s, r, n, o, a) {
    this._rawReviveBuffer = o, this._xterm = new bu({ cols: e, rows: t, scrollback: i, allowProposedApi: true }), r && this._xterm.writeln(r), this.setUnicodeVersion(s), this._shellIntegrationAddon = new fu(n, true, void 0, a), this._xterm.loadAddon(this._shellIntegrationAddon);
  }
  freeRawReviveBuffer() {
    this._rawReviveBuffer = void 0;
  }
  handleData(e) {
    this._xterm.write(e);
  }
  handleResize(e, t) {
    this._xterm.resize(e, t);
  }
  clearBuffer() {
    this._xterm.clear();
  }
  async generateReplayEvent(e, t) {
    const i = new (await this._getSerializeConstructor())();
    this._xterm.loadAddon(i);
    const s = { scrollback: this._xterm.options.scrollback };
    e && (s.excludeAltBuffer = true, s.excludeModes = true);
    let r;
    try {
      t && this._rawReviveBuffer ? r = this._rawReviveBuffer : r = i.serialize(s);
    } finally {
      i.dispose();
    }
    return { events: [{ cols: this._xterm.cols, rows: this._xterm.rows, data: r }], commands: this._shellIntegrationAddon.serialize() };
  }
  async setUnicodeVersion(e) {
    this._xterm.unicode.activeVersion !== e && (e === "11" ? (this._unicodeAddon = new (await this._getUnicode11Constructor())(), this._xterm.loadAddon(this._unicodeAddon)) : (this._unicodeAddon?.dispose(), this._unicodeAddon = void 0), this._xterm.unicode.activeVersion = e);
  }
  async _getUnicode11Constructor() {
    return tr || (tr = (await import("@xterm/addon-unicode11")).Unicode11Addon), tr;
  }
  async _getSerializeConstructor() {
    return er || (er = (await import("@xterm/addon-serialize")).SerializeAddon), er;
  }
};
function Fo(e) {
  let t = 0, i = 0, s = 0;
  e >= 1e3 && (s = Math.floor(e / 1e3), e -= s * 1e3), s >= 60 && (i = Math.floor(s / 60), s -= i * 60), i >= 60 && (t = Math.floor(i / 60), i -= t * 60);
  const r = t ? `${t}h` : "", n = i ? `${i}m` : "", o = s ? `${s}s` : "", a = e ? `${e}ms` : "";
  return `${r}${n}${o}${a}`;
}
xu();
async function xu() {
  const e = parseInt(process.env.VSCODE_STARTUP_DELAY ?? "0"), t = parseInt(process.env.VSCODE_LATENCY ?? "0"), i = { graceTime: parseInt(process.env.VSCODE_RECONNECT_GRACE_TIME || "0"), shortGraceTime: parseInt(process.env.VSCODE_RECONNECT_SHORT_GRACE_TIME || "0"), scrollback: parseInt(process.env.VSCODE_RECONNECT_SCROLLBACK || "100") };
  delete process.env.VSCODE_RECONNECT_GRACE_TIME, delete process.env.VSCODE_RECONNECT_SHORT_GRACE_TIME, delete process.env.VSCODE_RECONNECT_SCROLLBACK, delete process.env.VSCODE_LATENCY, delete process.env.VSCODE_STARTUP_DELAY, e && await ze(e);
  const s = Hn(process);
  let r;
  s ? r = new vc() : r = new mc(bt.PtyHost);
  const n = { _serviceBrand: void 0, ...gh }, o = new Pc(Wn(process.argv, ks), n), a = new mh(ih(o), o.logsHome);
  r.registerChannel(bt.Logger, new oh(a, () => kl));
  const l = a.createLogger("ptyhost", { name: w(2288, null) }), c = new ah(l);
  e && c.warn(`Pty Host startup is delayed ${e}ms`), t && c.warn(`Pty host is simulating ${t}ms latency`);
  const h = new Ee(), u = new Eh();
  r.registerChannel(bt.Heartbeat, xi.fromService(u, h));
  const d = new C(c, n, i, t), f = xi.fromService(d, h);
  r.registerChannel(bt.PtyHost, f), s && r.registerChannel(bt.PtyHostWindow, f), process.once("exit", () => {
    c.trace("Pty host exiting"), c.dispose(), u.dispose(), d.dispose();
  });
}
