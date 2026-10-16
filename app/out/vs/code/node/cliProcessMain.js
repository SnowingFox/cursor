/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "23335020-5594-5542-a22b-2f8d53674d44");
  } catch (e3) {
  }
})();
var pd = Object.create, Ul = Object.defineProperty, gd = Object.getOwnPropertyDescriptor, qn = Object.getOwnPropertyNames, md = Object.getPrototypeOf, vd = Object.prototype.hasOwnProperty, yd = (e, t) => function() {
  return e && (t = (0, e[qn(e)[0]])(e = 0)), t;
}, wd = (e, t) => function() {
  return t || (0, e[qn(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, _d = (e, t, i, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of qn(t)) !vd.call(e, s) && s !== i && Ul(e, s, { get: () => t[s], enumerable: !(r = gd(t, s)) || r.enumerable });
  return e;
}, Ed = (e, t, i) => (i = e != null ? pd(md(e)) : {}, _d(t || !e || !e.__esModule ? Ul(i, "default", { value: e, enumerable: true }) : i, e));
function N(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, i, n) : o(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
function x(e, t) {
  return function(i, r) {
    t(i, r, e);
  };
}
var b = yd({ "tslib.es6.js"() {
} }), Sd = wd({ "index.js"(e, t) {
  "use strict";
  b();
  function i(n, o) {
    var a = n;
    o.slice(0, -1).forEach(function(c) {
      a = a[c] || {};
    });
    var l = o[o.length - 1];
    return l in a;
  }
  function r(n) {
    return typeof n == "number" || /^0x[0-9a-f]+$/i.test(n) ? true : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n);
  }
  function s(n, o) {
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
      return l[T].some(function(ie) {
        return a.bools[ie];
      });
    }
    Object.keys(o.alias || {}).forEach(function(T) {
      l[T] = [].concat(o.alias[T]), l[T].forEach(function(ie) {
        l[ie] = [T].concat(l[T].filter(function(Me) {
          return ie !== Me;
        }));
      });
    }), [].concat(o.string).filter(Boolean).forEach(function(T) {
      a.strings[T] = true, l[T] && [].concat(l[T]).forEach(function(ie) {
        a.strings[ie] = true;
      });
    });
    var h = o.default || {}, f = { _: [] };
    function d(T, ie) {
      return a.allBools && /^--[^=]+$/.test(ie) || a.strings[T] || a.bools[T] || l[T];
    }
    function p(T, ie, Me) {
      for (var B = T, at = 0; at < ie.length - 1; at++) {
        var re = ie[at];
        if (s(B, re)) return;
        B[re] === void 0 && (B[re] = {}), (B[re] === Object.prototype || B[re] === Number.prototype || B[re] === String.prototype) && (B[re] = {}), B[re] === Array.prototype && (B[re] = []), B = B[re];
      }
      var L = ie[ie.length - 1];
      s(B, L) || ((B === Object.prototype || B === Number.prototype || B === String.prototype) && (B = {}), B === Array.prototype && (B = []), B[L] === void 0 || a.bools[L] || typeof B[L] == "boolean" ? B[L] = Me : Array.isArray(B[L]) ? B[L].push(Me) : B[L] = [B[L], Me]);
    }
    function v(T, ie, Me) {
      if (!(Me && a.unknownFn && !d(T, Me) && a.unknownFn(Me) === false)) {
        var B = !a.strings[T] && r(ie) ? Number(ie) : ie;
        p(f, T.split("."), B), (l[T] || []).forEach(function(at) {
          p(f, at.split("."), B);
        });
      }
    }
    Object.keys(a.bools).forEach(function(T) {
      v(T, h[T] === void 0 ? false : h[T]);
    });
    var y = [];
    n.indexOf("--") !== -1 && (y = n.slice(n.indexOf("--") + 1), n = n.slice(0, n.indexOf("--")));
    for (var E = 0; E < n.length; E++) {
      var _ = n[E], I, D;
      if (/^--.+=/.test(_)) {
        var W = _.match(/^--([^=]+)=([\s\S]*)$/);
        I = W[1];
        var R = W[2];
        a.bools[I] && (R = R !== "false"), v(I, R, _);
      } else if (/^--no-.+/.test(_)) I = _.match(/^--no-(.+)/)[1], v(I, false, _);
      else if (/^--.+/.test(_)) I = _.match(/^--(.+)/)[1], D = n[E + 1], D !== void 0 && !/^(-|--)[^-]/.test(D) && !a.bools[I] && !a.allBools && (!l[I] || !c(I)) ? (v(I, D, _), E += 1) : /^(true|false)$/.test(D) ? (v(I, D === "true", _), E += 1) : v(I, a.strings[I] ? "" : true, _);
      else if (/^-[^-]+/.test(_)) {
        for (var C = _.slice(1, -1).split(""), F = false, Z = 0; Z < C.length; Z++) {
          if (D = _.slice(Z + 2), D === "-") {
            v(C[Z], D, _);
            continue;
          }
          if (/[A-Za-z]/.test(C[Z]) && D[0] === "=") {
            v(C[Z], D.slice(1), _), F = true;
            break;
          }
          if (/[A-Za-z]/.test(C[Z]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(D)) {
            v(C[Z], D, _), F = true;
            break;
          }
          if (C[Z + 1] && C[Z + 1].match(/\W/)) {
            v(C[Z], _.slice(Z + 2), _), F = true;
            break;
          } else v(C[Z], a.strings[C[Z]] ? "" : true, _);
        }
        I = _.slice(-1)[0], !F && I !== "-" && (n[E + 1] && !/^(-|--)[^-]/.test(n[E + 1]) && !a.bools[I] && (!l[I] || !c(I)) ? (v(I, n[E + 1], _), E += 1) : n[E + 1] && /^(true|false)$/.test(n[E + 1]) ? (v(I, n[E + 1] === "true", _), E += 1) : v(I, a.strings[I] ? "" : true, _));
      } else if ((!a.unknownFn || a.unknownFn(_) !== false) && f._.push(a.strings._ || !r(_) ? _ : Number(_)), o.stopEarly) {
        f._.push.apply(f._, n.slice(E + 1));
        break;
      }
    }
    return Object.keys(h).forEach(function(T) {
      i(f, T.split(".")) || (p(f, T.split("."), h[T]), (l[T] || []).forEach(function(ie) {
        p(f, ie.split("."), h[T]);
      }));
    }), o["--"] ? f["--"] = y.slice() : y.forEach(function(T) {
      f._.push(T);
    }), f;
  };
} });
b();
import * as bd from "fs";
import { hostname as xd, release as Id } from "os";
b(), b(), b(), b();
var Nl, Fl;
function Pd(e, t) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const r of e) {
    const s = t(r);
    let n = i[s];
    n || (n = i[s] = []), n.push(r);
  }
  return i;
}
var Yy = class {
  constructor(e, t) {
    this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[Nl] = "SetWithKey";
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
  [(Fl = Symbol.iterator, Nl = Symbol.toStringTag, Fl)]() {
    return this.values();
  }
};
b();
var Rd = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        throw e.stack ? ji.isErrorNoTelemetry(e) ? new ji(e.message + `

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
}, Ml = new Rd();
function Ad(e) {
  Ml.setUnexpectedErrorHandler(e);
}
function kd(e) {
  if (!e || typeof e != "object") return false;
  const t = e;
  return t.code === "EPIPE" && t.syscall?.toUpperCase() === "WRITE";
}
function vt(e) {
  bi(e) || Ml.onUnexpectedError(e);
}
var Is = "Canceled";
function bi(e) {
  return e instanceof Le ? true : e instanceof Error && e.name === Is && e.message === Is;
}
var Le = class extends Error {
  constructor() {
    if (super(Is), this.name = this.message, Ud && typeof console < "u" && Od()) {
      const e = new Error().stack ?? "";
      Td.some((t) => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
    }
  }
};
function Vl() {
  const e = new Error(Is);
  return e.name = e.message, e;
}
function Dd(e) {
  return e ? new Error(`Illegal argument: ${e}`) : new Error("Illegal argument");
}
function Wl(e) {
  return e ? new Error(`Illegal state: ${e}`) : new Error("Illegal state");
}
function q(e) {
  return e ? e.message ? e.message : e.stack ? e.stack.split(`
`)[0] : String(e) : "Error";
}
var ji = class El extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof El) return t;
    const i = new El();
    return i.message = t.message, i.stack = t.stack, i;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}, Ld = class zf extends Error {
  constructor(t) {
    super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, zf.prototype);
  }
}, Td = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], Cd = 5e3, $l = 0;
function Od() {
  const e = Date.now();
  return e < $l ? false : ($l = e + Cd, true);
}
var Ud = false;
b();
function Bl(e, t) {
  const i = this;
  let r = false, s;
  return function() {
    if (r) return s;
    if (r = true, t) try {
      s = e.apply(i, arguments);
    } finally {
      t();
    }
    else s = e.apply(i, arguments);
    return s;
  };
}
b(), b(), b();
function Nd(e, t, i = 0, r = e.length) {
  let s = i, n = r;
  for (; s < n; ) {
    const o = Math.floor((s + n) / 2);
    t(e[o]) ? s = o + 1 : n = o;
  }
  return s - 1;
}
var Fd = class Gf {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (Gf.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const r of this._array) if (this._prevFindLastPredicate(r) && !t(r)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = t;
    }
    const i = Nd(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = i + 1, i === -1 ? void 0 : this._array[i];
  }
};
Fd.assertInvariants = false;
function Hi(e, t, i = (r, s) => r === s) {
  if (e === t) return true;
  if (!e || !t || e.length !== t.length) return false;
  for (let r = 0, s = e.length; r < s; r++) if (!i(e[r], t[r])) return false;
  return true;
}
function Xi(e) {
  return e.filter((t) => !!t);
}
function ql(e) {
  return Array.isArray(e) && e.length > 0;
}
function $t(e, t = (i) => i) {
  const i = /* @__PURE__ */ new Set();
  return e.filter((r) => {
    const s = t(r);
    return i.has(s) ? false : (i.add(s), true);
  });
}
function zl(e, t) {
  let i;
  if (typeof t == "number") {
    let r = t;
    i = () => {
      const s = Math.sin(r++) * 179426549;
      return s - Math.floor(s);
    };
  } else i = Math.random;
  for (let r = e.length - 1; r > 0; r -= 1) {
    const s = Math.floor(i() * (r + 1)), n = e[r];
    e[r] = e[s], e[s] = n;
  }
}
var zn;
((e) => {
  function t(n) {
    return n < 0;
  }
  e.isLessThan = t;
  function i(n) {
    return n <= 0;
  }
  e.isLessThanOrEqual = i;
  function r(n) {
    return n > 0;
  }
  e.isGreaterThan = r;
  function s(n) {
    return n === 0;
  }
  e.isNeitherLessOrGreaterThan = s, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(zn || (zn = {}));
function Md(e, t) {
  return (i, r) => t(e(i), e(r));
}
var Vd = (e, t) => e - t, Gl = class Sl {
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
    return new Sl((i) => this.iterate((r) => t(r) ? i(r) : true));
  }
  map(t) {
    return new Sl((i) => this.iterate((r) => i(t(r))));
  }
  some(t) {
    let i = false;
    return this.iterate((r) => (i = t(r), !i)), i;
  }
  findFirst(t) {
    let i;
    return this.iterate((r) => t(r) ? (i = r, false) : true), i;
  }
  findLast(t) {
    let i;
    return this.iterate((r) => (t(r) && (i = r), true)), i;
  }
  findLastMaxBy(t) {
    let i, r = true;
    return this.iterate((s) => ((r || zn.isGreaterThan(t(s, i))) && (r = false, i = s), true)), i;
  }
};
Gl.empty = new Gl((e) => {
}), b();
var Kl, jl, Hl, Wd = class {
  constructor(e, t) {
    this.uri = e, this.value = t;
  }
};
function $d(e) {
  return Array.isArray(e);
}
var Xl = class ws {
  constructor(t, i) {
    if (this[Kl] = "ResourceMap", t instanceof ws) this.map = new Map(t.map), this.toKey = i ?? ws.defaultToKey;
    else if ($d(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = i ?? ws.defaultToKey;
      for (const [r, s] of t) this.set(r, s);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? ws.defaultToKey;
  }
  set(t, i) {
    return this.map.set(this.toKey(t), new Wd(t, i)), this;
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
    for (const [r, s] of this.map) t(s.value, s.uri, this);
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
  *[(Kl = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map) yield [t.uri, t.value];
  }
};
Xl.defaultToKey = (e) => e.toString();
var Ye = Xl, Gn = class {
  constructor(e, t) {
    this[jl] = "ResourceSet", !e || typeof e == "function" ? this._map = new Ye(e) : (this._map = new Ye(t), e.forEach(this.add, this));
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
    this._map.forEach((i, r) => e.call(t, r, r, this));
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
  [(jl = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
}, Bd = class {
  constructor() {
    this[Hl] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
    let r = this._map.get(e);
    if (r) r.value = t, i !== 0 && this.touch(r, i);
    else {
      switch (r = { key: e, value: t, next: void 0, previous: void 0 }, i) {
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
      this._map.set(e, r), this._size++;
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
    let r = this._head;
    for (; r; ) {
      if (t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this), this._state !== i) throw new Error("LinkedMap got modified during iteration.");
      r = r.next;
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
      const r = i(t);
      t = t.next, yield r;
    }
  }
  [(Hl = Symbol.toStringTag, Symbol.iterator)]() {
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
        const i = e.next, r = e.previous;
        e === this._tail ? (r.next = void 0, this._tail = r) : (i.previous = r, r.next = i), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
      } else if (t === 2) {
        if (e === this._tail) return;
        const i = e.next, r = e.previous;
        e === this._head ? (i.previous = void 0, this._head = i) : (i.previous = r, r.next = i), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
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
}, qd = class extends Bd {
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
}, Ps = class extends qd {
  constructor(e, t = 1) {
    super(e, t);
  }
  trim(e) {
    this.trimOld(e);
  }
  set(e, t) {
    return super.set(e, t), this.checkTrim(), this;
  }
}, zd = class {
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
b(), b(), b();
function Kn(e, t) {
  if (!e) throw new Error(t ? `Assertion failed (${t})` : "Assertion Failed");
}
function Gd(e, t = "unexpected state") {
  if (!e) throw typeof t == "string" ? new Ld(`Assertion Failed: ${t}`) : t;
}
function Te(e) {
  return typeof e == "string";
}
function Ne(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}
function Kd(e) {
  const t = Object.getPrototypeOf(Uint8Array);
  return typeof e == "object" && e instanceof t;
}
function jn(e) {
  return typeof e == "number" && !isNaN(e);
}
function jd(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
function It(e) {
  return e === true || e === false;
}
function _t(e) {
  return typeof e > "u";
}
function Hd(e) {
  return !Ze(e);
}
function Ze(e) {
  return _t(e) || e === null;
}
function Ql(e) {
  return Gd(e != null, "Argument is `undefined` or `null`."), e;
}
var Xd = Object.prototype.hasOwnProperty;
function Jl(e) {
  if (!Ne(e)) return false;
  for (const t in e) if (Xd.call(e, t)) return false;
  return true;
}
function Qd(e) {
  return typeof e == "function";
}
var xi;
((e) => {
  function t(R) {
    return R && typeof R == "object" && typeof R[Symbol.iterator] == "function";
  }
  e.is = t;
  const i = Object.freeze([]);
  function r() {
    return i;
  }
  e.empty = r;
  function* s(R) {
    yield R;
  }
  e.single = s;
  function n(R) {
    return t(R) ? R : s(R);
  }
  e.wrap = n;
  function o(R) {
    return R || i;
  }
  e.from = o;
  function* a(R) {
    for (let C = R.length - 1; C >= 0; C--) yield R[C];
  }
  e.reverse = a;
  function l(R) {
    return !R || R[Symbol.iterator]().next().done === true;
  }
  e.isEmpty = l;
  function c(R) {
    return R[Symbol.iterator]().next().value;
  }
  e.first = c;
  function h(R, C) {
    let F = 0;
    for (const Z of R) if (C(Z, F++)) return true;
    return false;
  }
  e.some = h;
  function f(R, C) {
    for (const F of R) if (C(F)) return F;
  }
  e.find = f;
  function* d(R, C) {
    for (const F of R) C(F) && (yield F);
  }
  e.filter = d;
  function* p(R, C) {
    let F = 0;
    for (const Z of R) yield C(Z, F++);
  }
  e.map = p;
  function* v(R, C) {
    let F = 0;
    for (const Z of R) yield* C(Z, F++);
  }
  e.flatMap = v;
  function* y(...R) {
    for (const C of R) jd(C) ? yield* C : yield C;
  }
  e.concat = y;
  function E(R, C, F) {
    let Z = F;
    for (const T of R) Z = C(Z, T);
    return Z;
  }
  e.reduce = E;
  function _(R) {
    let C = 0;
    for (const F of R) C++;
    return C;
  }
  e.length = _;
  function* I(R, C, F = R.length) {
    for (C < -R.length && (C = 0), C < 0 && (C += R.length), F < 0 ? F += R.length : F > R.length && (F = R.length); C < F; C++) yield R[C];
  }
  e.slice = I;
  function D(R, C = Number.POSITIVE_INFINITY) {
    const F = [];
    if (C === 0) return [F, R];
    const Z = R[Symbol.iterator]();
    for (let T = 0; T < C; T++) {
      const ie = Z.next();
      if (ie.done) return [F, e.empty()];
      F.push(ie.value);
    }
    return [F, { [Symbol.iterator]() {
      return Z;
    } }];
  }
  e.consume = D;
  async function W(R) {
    const C = [];
    for await (const F of R) C.push(F);
    return Promise.resolve(C);
  }
  e.asyncToArray = W;
})(xi || (xi = {}));
var Yl = void 0, Hn = /* @__PURE__ */ new Set(), Jd = 50;
function Rr(e, t) {
  if (oi?.onLifecycleMisuse?.(e, t), !Yl) return;
  const i = `${t}\0${e.stack ?? ""}`;
  Hn.has(i) || Hn.size >= Jd || (Hn.add(i), Yl(e, t));
}
function Xn(e) {
  Rr(e, "disposable_post_dispose_set");
}
var Yd = false, oi = null, Zd = class Kf {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let i = this.livingDisposables.get(t);
    return i || (i = { parent: null, source: null, isSingleton: false, value: t, idx: Kf.idx++ }, this.livingDisposables.set(t, i)), i;
  }
  trackDisposable(t) {
    const i = this.getDisposableData(t);
    i.source || (i.source = new Error().stack);
  }
  setParent(t, i) {
    const r = this.getDisposableData(t);
    r.parent = i;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = true;
  }
  getRootParent(t, i) {
    const r = i.get(t);
    if (r) return r;
    const s = t.parent ? this.getRootParent(this.getDisposableData(t.parent), i) : t;
    return i.set(t, s), s;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, r]) => r.source !== null && !this.getRootParent(r, t).isSingleton).flatMap(([r]) => r);
  }
  computeLeakingDisposables(t = 10, i) {
    let r;
    if (i) r = i;
    else {
      const l = /* @__PURE__ */ new Map(), c = [...this.livingDisposables.values()].filter((f) => f.source !== null && !this.getRootParent(f, l).isSingleton);
      if (c.length === 0) return;
      const h = new Set(c.map((f) => f.value));
      if (r = c.filter((f) => !(f.parent && h.has(f.parent))), r.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!r) return;
    function s(l) {
      function c(f, d) {
        for (; f.length > 0 && d.some((p) => typeof p == "string" ? p === f[0] : f[0].match(p)); ) f.shift();
      }
      const h = l.source.split(`
`).map((f) => f.trim().replace("at ", "")).filter((f) => f !== "");
      return c(h, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), h.reverse();
    }
    const n = new zd();
    for (const l of r) {
      const c = s(l);
      for (let h = 0; h <= c.length; h++) n.add(c.slice(0, h).join(`
`), l);
    }
    r.sort(Md((l) => l.idx, Vd));
    let o = "", a = 0;
    for (const l of r.slice(0, t)) {
      a++;
      const c = s(l), h = [];
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        d = `(shared with ${n.get(c.slice(0, f + 1).join(`
`)).size}/${r.length} leaks) at ${d}`;
        const v = n.get(c.slice(0, f).join(`
`)), y = Pd([...v].map((E) => s(E)[f]), (E) => E);
        delete y[c[f]];
        for (const [E, _] of Object.entries(y)) h.unshift(`    - stacktraces of ${_.length} other leaks continue with ${E}`);
        h.unshift(d);
      }
      o += `


==================== Leaking disposable ${a}/${r.length}: ${l.value.constructor.name} ====================
${h.join(`
`)}
============================================================

`;
    }
    return r.length > t && (o += `


... and ${r.length - t} more leaking disposables

`), { leaks: r, details: o };
  }
};
Zd.idx = 0;
function e1(e) {
  oi = e;
}
if (Yd) {
  const e = "__is_disposable_tracked__";
  e1(new class {
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
function Ar(e) {
  return oi?.trackDisposable(e), e;
}
function kr(e) {
  oi?.markAsDisposed(e);
}
function Dr(e, t) {
  oi?.setParent(e, t);
}
function t1(e, t) {
  if (oi) for (const i of e) oi.setParent(i, t);
}
function Zl(e) {
  return oi?.markAsSingleton(e), e;
}
function Qn(e) {
  return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
function ai(e) {
  if (xi.is(e)) {
    let t;
    for (const i of e) if (i) try {
      i.dispose();
    } catch (r) {
      (t ??= []).push(r);
    }
    if (t !== void 0) throw t.length === 1 ? t[0] : new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function ec(...e) {
  const t = Ee(() => ai(e));
  return t1(e, t), t;
}
function Ee(e) {
  const t = Ar({ dispose: Bl(() => {
    kr(t), e();
  }) });
  return t;
}
var tc = class bl {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = false, Ar(this);
  }
  dispose() {
    this._isDisposed || (kr(this), this._isDisposed = true, this.clear());
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
      ai(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(t) {
    if (!t) return t;
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    if (Dr(t, this), this._isDisposed) {
      const i = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      bl.DISABLE_DISPOSED_WARNING || console.warn(i.stack), Xn(i);
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
    t && this._toDispose.has(t) && (this._toDispose.delete(t), Dr(t, null));
  }
  transferOut(t) {
    if (this._isDisposed) {
      const i = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      bl.DISABLE_DISPOSED_WARNING || console.warn(i.stack), Rr(i, "disposable_use_after_dispose");
    }
    return this.deleteAndLeak(t), t;
  }
};
tc.DISABLE_DISPOSED_WARNING = false;
var Ve = tc, X = class {
  constructor() {
    this._store = new Ve(), Ar(this), Dr(this._store, this);
  }
  dispose() {
    kr(this), this._store.dispose();
  }
  _register(e) {
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(e);
  }
};
X.None = Object.freeze({ dispose() {
} });
var li = class {
  constructor() {
    this._isDisposed = false, Ar(this);
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(e) {
    if (this._isDisposed) {
      if (e) {
        const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
        Ve.DISABLE_DISPOSED_WARNING || console.warn(t.stack), Xn(t), e.dispose();
      }
      return;
    }
    e !== this._value && (this._value?.dispose(), e && Dr(e, this), this._value = e);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, kr(this), this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    const e = this._value;
    return this._value = void 0, e && Dr(e, null), e;
  }
}, Rs = class {
  constructor(e = /* @__PURE__ */ new Map()) {
    this._isDisposed = false, this._store = e, Ar(this);
  }
  dispose() {
    kr(this), this._isDisposed = true, this.clearAndDisposeAll();
  }
  clearAndDisposeAll() {
    if (this._store.size) try {
      ai(this._store.values());
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
      const r = new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!");
      console.warn(r.stack), Xn(r);
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
};
function Jn(e, t) {
  return e.then((i) => (t.isDisposed ? i.dispose() : t.add(i), i));
}
b();
var Yn = class xl {
  constructor(t) {
    this.element = t, this.next = xl.Undefined, this.prev = xl.Undefined;
  }
};
Yn.Undefined = new Yn(void 0);
var Pe = Yn, ic = class {
  constructor() {
    this._first = Pe.Undefined, this._last = Pe.Undefined, this._size = 0;
  }
  get size() {
    return this._size;
  }
  get first() {
    return this._first;
  }
  isEmpty() {
    return this._first === Pe.Undefined;
  }
  clear() {
    let e = this._first;
    for (; e !== Pe.Undefined; ) {
      const t = e.next;
      e.prev = Pe.Undefined, e.next = Pe.Undefined, e = t;
    }
    this._first = Pe.Undefined, this._last = Pe.Undefined, this._size = 0;
  }
  unshift(e) {
    return this._insert(e, false);
  }
  push(e) {
    return this._insert(e, true);
  }
  _insert(e, t) {
    const i = new Pe(e);
    if (this._first === Pe.Undefined) this._first = i, this._last = i;
    else if (t) {
      const s = this._last;
      this._last = i, i.prev = s, s.next = i;
    } else {
      const s = this._first;
      this._first = i, i.next = s, s.prev = i;
    }
    this._size += 1;
    let r = false;
    return () => {
      r || (r = true, this._remove(i));
    };
  }
  shift() {
    if (this._first !== Pe.Undefined) {
      const e = this._first.element;
      return this._remove(this._first), e;
    }
  }
  pop() {
    if (this._last !== Pe.Undefined) {
      const e = this._last.element;
      return this._remove(this._last), e;
    }
  }
  remove(e) {
    this._remove(e);
  }
  _remove(e) {
    if (e.prev !== Pe.Undefined && e.next !== Pe.Undefined) {
      const t = e.prev;
      t.next = e.next, e.next.prev = t;
    } else e.prev === Pe.Undefined && e.next === Pe.Undefined ? (this._first = Pe.Undefined, this._last = Pe.Undefined) : e.next === Pe.Undefined ? (this._last = this._last.prev, this._last.next = Pe.Undefined) : e.prev === Pe.Undefined && (this._first = this._first.next, this._first.prev = Pe.Undefined);
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let e = this._first;
    for (; e !== Pe.Undefined; ) yield e.element, e = e.next;
  }
};
b();
var i1 = globalThis.performance && typeof globalThis.performance.now == "function", r1 = class jf {
  static create(t) {
    return new jf(t);
  }
  constructor(t) {
    this._now = i1 && t === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
}, rc = false, s1 = false, ne;
((e) => {
  e.None = () => X.None;
  function t(L) {
    if (s1) {
      const { onDidAddListener: A } = L, U = eo.create();
      let O = 0;
      L.onDidAddListener = () => {
        ++O === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), U.print()), A?.();
      };
    }
  }
  function i(L, A) {
    return p(L, () => {
    }, 0, void 0, true, void 0, A);
  }
  e.defer = i;
  function r(L) {
    return (A, U = null, O) => {
      let V = false, G;
      return G = L((g) => {
        if (!V) return G ? G.dispose() : V = true, A.call(U, g);
      }, null, O), V && G.dispose(), G;
    };
  }
  e.once = r;
  function s(L, A) {
    return e.once(e.filter(L, A));
  }
  e.onceIf = s;
  function n(L, A, U) {
    return f((O, V = null, G) => L((g) => O.call(V, A(g)), null, G), U);
  }
  e.map = n;
  function o(L, A, U) {
    return f((O, V = null, G) => L((g) => {
      A(g), O.call(V, g);
    }, null, G), U);
  }
  e.forEach = o;
  function a(L, A, U) {
    return f((O, V = null, G) => L((g) => A(g) && O.call(V, g), null, G), U);
  }
  e.filter = a;
  function l(L) {
    return L;
  }
  e.signal = l;
  function c(...L) {
    return (A, U = null, O) => {
      const V = ec(...L.map((G) => G((g) => A.call(U, g))));
      return d(V, O);
    };
  }
  e.any = c;
  function h(L, A, U, O) {
    let V = U;
    return n(L, (G) => (V = A(V, G), V), O);
  }
  e.reduce = h;
  function f(L, A) {
    let U;
    const O = { onWillAddFirstListener() {
      U = L(V.fire, V);
    }, onDidRemoveLastListener() {
      U?.dispose();
    } };
    A || t(O);
    const V = new M(O);
    return A?.add(V), V.event;
  }
  function d(L, A) {
    return A instanceof Array ? A.push(L) : A && A.add(L), L;
  }
  function p(L, A, U = 100, O = false, V = false, G, g) {
    let w, S, P, K = 0, se;
    const Q = { leakWarningThreshold: G, onWillAddFirstListener() {
      w = L((xe) => {
        K++, S = A(S, xe), O && !P && (Ue.fire(S), S = void 0), se ??= () => {
          const $e = S;
          S = void 0, P = void 0, (!O || K > 1) && Ue.fire($e), K = 0;
        }, typeof U == "number" ? (clearTimeout(P), P = setTimeout(se, U)) : P === void 0 && (P = 0, queueMicrotask(se));
      });
    }, onWillRemoveListener() {
      V && K > 0 && se?.();
    }, onDidRemoveLastListener() {
      se = void 0, w.dispose();
    } };
    g || t(Q);
    const Ue = new M(Q);
    return g?.add(Ue), Ue.event;
  }
  e.debounce = p;
  function v(L, A = 0, U) {
    return e.debounce(L, (O, V) => O ? (O.push(V), O) : [V], A, void 0, true, void 0, U);
  }
  e.accumulate = v;
  function y(L, A = (O, V) => O === V, U) {
    let O = true, V;
    return a(L, (G) => {
      const g = O || !A(G, V);
      return O = false, V = G, g;
    }, U);
  }
  e.latch = y;
  function E(L, A, U) {
    return [e.filter(L, A, U), e.filter(L, (O) => !A(O), U)];
  }
  e.split = E;
  function _(L, A = false, U = [], O) {
    let V = U.slice(), G = L((S) => {
      V ? V.push(S) : w.fire(S);
    });
    O && O.add(G);
    const g = () => {
      V?.forEach((S) => w.fire(S)), V = null;
    }, w = new M({ onWillAddFirstListener() {
      G || (G = L((S) => w.fire(S)), O && O.add(G));
    }, onDidAddFirstListener() {
      V && (A ? setTimeout(g) : g());
    }, onDidRemoveLastListener() {
      G && G.dispose(), G = null;
    } });
    return O && O.add(w), w.event;
  }
  e.buffer = _;
  function I(L, A) {
    return (O, V, G) => {
      const g = A(new W());
      return L(function(w) {
        const S = g.evaluate(w);
        S !== D && O.call(V, S);
      }, void 0, G);
    };
  }
  e.chain = I;
  const D = /* @__PURE__ */ Symbol("HaltChainable");
  class W {
    constructor() {
      this.steps = [];
    }
    map(A) {
      return this.steps.push(A), this;
    }
    forEach(A) {
      return this.steps.push((U) => (A(U), U)), this;
    }
    filter(A) {
      return this.steps.push((U) => A(U) ? U : D), this;
    }
    reduce(A, U) {
      let O = U;
      return this.steps.push((V) => (O = A(O, V), O)), this;
    }
    latch(A = (U, O) => U === O) {
      let U = true, O;
      return this.steps.push((V) => {
        const G = U || !A(V, O);
        return U = false, O = V, G ? V : D;
      }), this;
    }
    evaluate(A) {
      for (const U of this.steps) if (A = U(A), A === D) break;
      return A;
    }
  }
  function R(L, A, U = (O) => O) {
    const O = (...w) => g.fire(U(...w)), V = () => L.on(A, O), G = () => L.removeListener(A, O), g = new M({ onWillAddFirstListener: V, onDidRemoveLastListener: G });
    return g.event;
  }
  e.fromNodeEventEmitter = R;
  function C(L) {
    let A;
    const U = () => {
      A = L.subscribe((G) => V.fire(G));
    }, O = () => {
      A?.unsubscribe(), A = void 0;
    }, V = new M({ onWillAddFirstListener: U, onDidRemoveLastListener: O });
    return V.event;
  }
  e.fromRxJS = C;
  function F(L, A, U = (O) => O) {
    const O = (...w) => g.fire(U(...w)), V = () => L.addEventListener(A, O), G = () => L.removeEventListener(A, O), g = new M({ onWillAddFirstListener: V, onDidRemoveLastListener: G });
    return g.event;
  }
  e.fromDOMEventEmitter = F;
  function Z(L, A) {
    return new Promise((U) => r(L)(U, null, A));
  }
  e.toPromise = Z;
  function T(L) {
    const A = new M();
    return L.then((U) => {
      A.fire(U);
    }, () => {
      A.fire(void 0);
    }).finally(() => {
      A.dispose();
    }), A.event;
  }
  e.fromPromise = T;
  function ie(L, A) {
    return L((U) => A.fire(U));
  }
  e.forward = ie;
  function Me(L, A, U) {
    return A(U), L((O) => A(O));
  }
  e.runAndSubscribe = Me;
  class B {
    constructor(A, U) {
      this._observable = A, this._counter = 0, this._hasChanged = false;
      const O = { onWillAddFirstListener: () => {
        A.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        A.removeObserver(this);
      } };
      U || t(O), this.emitter = new M(O), U && U.add(this.emitter);
    }
    beginUpdate(A) {
      this._counter++;
    }
    handlePossibleChange(A) {
    }
    handleChange(A, U) {
      this._hasChanged = true;
    }
    endUpdate(A) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function at(L, A) {
    return new B(L, A).emitter.event;
  }
  e.fromObservable = at;
  function re(L) {
    return (A, U, O) => {
      let V = 0, G = false;
      const g = { beginUpdate() {
        V++;
      }, endUpdate() {
        V--, V === 0 && (L.reportChanges(), G && (G = false, A.call(U)));
      }, handlePossibleChange() {
      }, handleChange() {
        G = true;
      } };
      L.addObserver(g), L.reportChanges();
      const w = { dispose() {
        L.removeObserver(g);
      } };
      return O instanceof Ve ? O.add(w) : Array.isArray(O) && O.push(w), w;
    };
  }
  e.fromObservableLight = re;
})(ne || (ne = {}));
var Zn = class Il {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${Il._idPool++}`, Il.all.add(this);
  }
  start(t) {
    this._stopWatch = new r1(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
Zn.all = /* @__PURE__ */ new Set(), Zn._idPool = 0;
var n1 = Zn, sc = -1, o1 = 1;
function nc() {
  return (o1++).toString(16).padStart(3, "0");
}
var a1 = class {
  constructor(e, t, i = nc()) {
    this._errorHandler = e, this.threshold = t, this.name = i, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    const i = this.threshold;
    if (i <= 0 || t < i) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const r = e.value, s = this._stacks.get(r) || 0;
    if (this._stacks.set(r, s + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = i * 0.5;
      const [n, o] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${o}):`;
      console.warn(a), console.warn(n);
      const l = o / t > 0.3 ? "dominated" : "popular", c = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, h = new oc(l, a, n, t, c);
      this._errorHandler(h), Rr(h, "emitter_listener_leak");
    }
    return () => {
      const n = this._stacks.get(r) || 0;
      n <= 1 ? this._stacks.delete(r) : this._stacks.set(r, n - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (const [i, r] of this._stacks) (!e || t < r) && (e = [i, r], t = r);
    return e;
  }
}, eo = class Hf {
  constructor(t) {
    this.value = t;
  }
  static create() {
    const t = new Error();
    return new Hf(t.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, oc = class extends Error {
  constructor(e, t, i, r, s) {
    super(s ? `[${s}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = r, this.details = t, this.stack = i;
  }
}, l1 = class extends oc {
  constructor(e, t, i, r, s) {
    super(e, t, i, r, s), this.name = "ListenerRefusalError";
  }
}, As = class {
  constructor(e) {
    this.value = e;
  }
}, c1 = 2, ac = (e, t) => {
  if (e instanceof As) t(e);
  else for (let i = 0; i < e.length; i++) {
    const r = e[i];
    r && t(r);
  }
}, M = class {
  constructor(e) {
    this._size = 0, this._options = e, (sc > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? sc, this._leakWarningName = this._options?.leakWarningName ?? nc(), this._leakWarningErrorHandler = this._options?.onListenerError ?? vt), this._perfMon = this._options?._profName ? new n1(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  _getLeakageMonitor() {
    if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new a1(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (rc) {
          const e = this._listeners;
          queueMicrotask(() => {
            ac(e, (t) => t.stack?.print());
          });
        }
        ac(this._listeners, (e) => {
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
          const c = a.getMostFrequentStack() ?? ["UNKNOWN stack", -1], h = c[1] / this._size > 0.3 ? "dominated" : "popular", f = new l1(h, `${l}. HINT: Stack shows most frequent listener (${c[1]}-times)`, c[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || vt)(f), Rr(f, "emitter_listener_refusal"), X.None;
        }
      }
      if (this._disposed) {
        const a = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return Rr(a, "emitter_use_after_dispose"), X.None;
      }
      t && (e = e.bind(t));
      const r = new As(e);
      let s, n;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const a = this._getLeakageMonitor();
        a && (r.stack = eo.create(), s = a.check(r.stack, this._size + 1));
      }
      rc && (r.stack = n ?? eo.create()), this._listeners ? this._listeners instanceof As ? (this._deliveryQueue ??= new u1(), this._listeners = [this._listeners, r]) : this._listeners.push(r) : (this._options?.onWillAddFirstListener?.(this), this._listeners = r, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const o = Ee(() => {
        s?.(), this._removeListener(r);
      });
      return i instanceof Ve ? i.add(o) : Array.isArray(i) && i.push(o), o;
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
    const r = this._deliveryQueue.current === this;
    if (this._size * c1 <= t.length) {
      let s = 0;
      for (let n = 0; n < t.length; n++) t[n] ? t[s++] = t[n] : r && s < this._deliveryQueue.end && (this._deliveryQueue.end--, s < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = s;
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
    } catch (r) {
      i(r);
    }
  }
  _deliverQueue(e) {
    const t = e.current._listeners;
    for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
    e.reset();
  }
  fire(e) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof As) this._deliver(this._listeners, e);
    else {
      const t = this._deliveryQueue;
      t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
}, u1 = class {
  constructor() {
    this.i = -1, this.end = 0;
  }
  enqueue(e, t, i) {
    this.i = 0, this.end = i, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
}, to = class extends M {
  constructor(e) {
    super(e), this._isPaused = 0, this._eventQueue = new ic(), this._mergeFn = e?.merge;
  }
  get isPaused() {
    return this._isPaused !== 0;
  }
  pause() {
    this._isPaused++;
  }
  resume() {
    if (this._isPaused !== 0 && --this._isPaused === 0) if (this._mergeFn) {
      if (this._eventQueue.size > 0) {
        const e = Array.from(this._eventQueue);
        this._eventQueue.clear(), super.fire(this._mergeFn(e));
      }
    } else for (; !this._isPaused && this._eventQueue.size !== 0; ) super.fire(this._eventQueue.shift());
  }
  fire(e) {
    this._size && (this._isPaused !== 0 ? this._eventQueue.push(e) : super.fire(e));
  }
}, h1 = class {
  constructor() {
    this.listening = false, this.inputEvent = ne.None, this.emitter = new M({ onDidAddFirstListener: () => {
      this.listening = true, this.inputEventListener?.dispose(), this.inputEventListener = new li(), this.inputEventListener.value = this.inputEvent(this.emitter.fire, this.emitter);
    }, onDidRemoveLastListener: () => {
      this.listening = false, this.inputEventListener?.dispose(), this.inputEventListener = void 0;
    } }), this.event = this.emitter.event;
  }
  set input(e) {
    this.inputEvent = e, this.listening && (this.inputEventListener ??= new li(), this.inputEventListener.value = e(this.emitter.fire, this.emitter));
  }
  dispose() {
    this.inputEventListener?.dispose(), this.inputEventListener = void 0, this.inputEvent = ne.None, this.emitter.dispose();
  }
}, lc = Object.freeze(function(e, t) {
  const i = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(i);
  } };
}), ve;
((e) => {
  function t(i) {
    return i === e.None || i === e.Cancelled || i instanceof ks ? true : !i || typeof i != "object" ? false : typeof i.isCancellationRequested == "boolean" && typeof i.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: ne.None }), e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: lc });
})(ve || (ve = {}));
var ks = class {
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
    return this._isCancelled ? lc : (this._emitter || (this._emitter = new M()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}, Ii = class {
  constructor(e) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new ks()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof ks && this._token.cancel() : this._token = ve.Cancelled;
  }
  dispose(e = false) {
    e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof ks && this._token.dispose() : this._token = ve.None;
  }
};
b(), b(), b(), b(), b(), b(), b();
function f1() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function cc() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var d1 = cc() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function Ds(e, t) {
  let i;
  return t.length === 0 ? i = e : i = e.replace(/\{(\d+)\}/g, (r, s) => {
    const n = parseInt(s, 10), o = t[n];
    let a = r;
    return typeof o == "string" ? a = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a;
  }), d1 && (i = "［" + i.replace(/[aouei]/g, "$&$&") + "］"), i;
}
function m(e, t, ...i) {
  return Ds(typeof e == "number" ? uc(e, t) : t, i);
}
function uc(e, t) {
  const i = f1()?.[e];
  if (typeof i != "string") {
    if (typeof t == "string") return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return i;
}
function hc(e, t, ...i) {
  let r;
  typeof e == "number" ? r = uc(e, t) : r = t;
  const s = Ds(r, i);
  return { value: s, original: t === r ? s : Ds(t, i) };
}
var Qi = "en", Lr = false, Tr = false, Cr = false, fc = false, dc = false, io = false, p1 = false, pc = false, g1 = false, m1 = false, Ls = void 0, Ts = Qi, gc = Qi, mc = void 0, Bt = void 0, qt = globalThis, et = void 0;
typeof qt.vscode < "u" && typeof qt.vscode.process < "u" ? et = qt.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (et = process);
var vc = typeof et?.versions?.electron == "string", v1 = vc && et?.type === "renderer";
if (typeof et == "object") {
  Lr = et.platform === "win32", Tr = et.platform === "darwin", Cr = et.platform === "linux", fc = Cr && !!et.env.SNAP && !!et.env.SNAP_REVISION, p1 = vc, g1 = !!et.env.CI || !!et.env.BUILD_ARTIFACTSTAGINGDIRECTORY, Ls = Qi, Ts = Qi;
  const e = et.env.VSCODE_NLS_CONFIG;
  if (e) try {
    const t = JSON.parse(e);
    Ls = t.userLocale, gc = t.osLocale, Ts = t.resolvedLanguage || Qi, mc = t.languagePack?.translationsConfigFile;
  } catch {
  }
  dc = true;
} else typeof navigator == "object" && !v1 ? (Bt = navigator.userAgent, Lr = Bt.indexOf("Windows") >= 0, Tr = Bt.indexOf("Macintosh") >= 0, pc = (Bt.indexOf("Macintosh") >= 0 || Bt.indexOf("iPad") >= 0 || Bt.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Cr = Bt.indexOf("Linux") >= 0, m1 = Bt?.indexOf("Mobi") >= 0, io = true, Ts = cc() || Qi, Ls = navigator.language.toLowerCase(), gc = Ls) : console.error("Unable to resolve platform.");
var Ji = ((e) => (e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows", e))(Ji || {});
function y1(e) {
  switch (e) {
    case 0:
      return "Web";
    case 1:
      return "Mac";
    case 2:
      return "Linux";
    case 3:
      return "Windows";
  }
}
var Cs = 0;
Tr ? Cs = 1 : Lr ? Cs = 3 : Cr && (Cs = 2);
var Re = Lr, Tt = Tr, tt = Cr, w1 = fc, _1 = dc, zt = io, E1 = io && typeof qt.importScripts == "function", S1 = E1 ? qt.origin : void 0, Os = Cs, Ct = Bt, Ot = Ts, yc;
((e) => {
  function t() {
    return Ot;
  }
  e.value = t;
  function i() {
    return Ot.length === 2 ? Ot === "en" : Ot.length >= 3 ? Ot[0] === "e" && Ot[1] === "n" && Ot[2] === "-" : false;
  }
  e.isDefaultVariant = i;
  function r() {
    return Ot === "en";
  }
  e.isDefault = r;
})(yc || (yc = {}));
var wc = mc, b1 = typeof qt.postMessage == "function" && !qt.importScripts, x1 = (() => {
  if (b1) {
    const e = [];
    qt.addEventListener("message", (i) => {
      if (i.data && i.data.vscodeScheduleAsyncWork) for (let r = 0, s = e.length; r < s; r++) {
        const n = e[r];
        if (n.id === i.data.vscodeScheduleAsyncWork) {
          e.splice(r, 1), n.callback();
          return;
        }
      }
    });
    let t = 0;
    return (i) => {
      const r = ++t;
      e.push({ id: r, callback: i }), qt.postMessage({ vscodeScheduleAsyncWork: r }, "*");
    };
  }
  return (e) => setTimeout(e);
})(), Yi = ((e) => (e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux", e))(Yi || {}), ro = Tr || pc ? 2 : Lr ? 1 : 3, _c = !!(Ct && Ct.indexOf("Chrome") >= 0), I1 = !!(Ct && Ct.indexOf("Firefox") >= 0), P1 = !!(!_c && Ct && Ct.indexOf("Safari") >= 0), R1 = !!(Ct && Ct.indexOf("Edg/") >= 0), Zy = !!(Ct && Ct.indexOf("Android") >= 0), ew = et?.arch, tw = et?.platform, iw = et?.versions?.node, Pi, so = globalThis.vscode;
if (typeof so < "u" && typeof so.process < "u") {
  const e = so.process;
  Pi = { get platform() {
    return e.platform;
  }, get arch() {
    return e.arch;
  }, get env() {
    return e.env;
  }, cwd() {
    return e.cwd();
  } };
} else typeof process < "u" && typeof process?.versions?.node == "string" ? Pi = { get platform() {
  return process.platform;
}, get arch() {
  return process.arch;
}, get env() {
  return process.env;
}, cwd() {
  return process.env.VSCODE_CWD || process.cwd();
} } : Pi = { get platform() {
  return Re ? "win32" : Tt ? "darwin" : "linux";
}, get arch() {
}, get env() {
  return {};
}, cwd() {
  return "/";
} };
var Or = Pi.cwd, Ut = Pi.env, Ec = Pi.platform, Sc = Pi.arch, A1 = 65, k1 = 97, D1 = 90, L1 = 122, Ri = 46, ze = 47, ct = 92, Gt = 58, T1 = 63, bc = class extends Error {
  constructor(e, t, i) {
    let r;
    typeof t == "string" && t.indexOf("not ") === 0 ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be";
    const s = e.indexOf(".") !== -1 ? "property" : "argument";
    let n = `The "${e}" ${s} ${r} of type ${t}`;
    n += `. Received type ${typeof i}`, super(n), this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function C1(e, t) {
  if (e === null || typeof e != "object") throw new bc(t, "Object", e);
}
function Ae(e, t) {
  if (typeof e != "string") throw new bc(t, "string", e);
}
var ut = Ec === "win32";
function J(e) {
  return e === ze || e === ct;
}
function no(e) {
  return e === ze;
}
function Kt(e) {
  return e >= A1 && e <= D1 || e >= k1 && e <= L1;
}
function Us(e, t, i, r) {
  let s = "", n = 0, o = -1, a = 0, l = 0;
  for (let c = 0; c <= e.length; ++c) {
    if (c < e.length) l = e.charCodeAt(c);
    else {
      if (r(l)) break;
      l = ze;
    }
    if (r(l)) {
      if (!(o === c - 1 || a === 1)) if (a === 2) {
        if (s.length < 2 || n !== 2 || s.charCodeAt(s.length - 1) !== Ri || s.charCodeAt(s.length - 2) !== Ri) {
          if (s.length > 2) {
            const h = s.lastIndexOf(i);
            h === -1 ? (s = "", n = 0) : (s = s.slice(0, h), n = s.length - 1 - s.lastIndexOf(i)), o = c, a = 0;
            continue;
          } else if (s.length !== 0) {
            s = "", n = 0, o = c, a = 0;
            continue;
          }
        }
        t && (s += s.length > 0 ? `${i}..` : "..", n = 2);
      } else s.length > 0 ? s += `${i}${e.slice(o + 1, c)}` : s = e.slice(o + 1, c), n = c - o - 1;
      o = c, a = 0;
    } else l === Ri && a !== -1 ? ++a : a = -1;
  }
  return s;
}
function O1(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function xc(e, t) {
  C1(t, "pathObject");
  const i = t.dir || t.root, r = t.base || `${t.name || ""}${O1(t.ext)}`;
  return i ? i === t.root ? `${i}${r}` : `${i}${e}${r}` : r;
}
var Ce = { resolve(...e) {
  let t = "", i = "", r = false;
  for (let s = e.length - 1; s >= -1; s--) {
    let n;
    if (s >= 0) {
      if (n = e[s], Ae(n, `paths[${s}]`), n.length === 0) continue;
    } else t.length === 0 ? n = Or() : (n = Ut[`=${t}`] || Or(), (n === void 0 || n.slice(0, 2).toLowerCase() !== t.toLowerCase() && n.charCodeAt(2) === ct) && (n = `${t}\\`));
    const o = n.length;
    let a = 0, l = "", c = false;
    const h = n.charCodeAt(0);
    if (o === 1) J(h) && (a = 1, c = true);
    else if (J(h)) if (c = true, J(n.charCodeAt(1))) {
      let f = 2, d = f;
      for (; f < o && !J(n.charCodeAt(f)); ) f++;
      if (f < o && f !== d) {
        const p = n.slice(d, f);
        for (d = f; f < o && J(n.charCodeAt(f)); ) f++;
        if (f < o && f !== d) {
          for (d = f; f < o && !J(n.charCodeAt(f)); ) f++;
          (f === o || f !== d) && (l = `\\\\${p}\\${n.slice(d, f)}`, a = f);
        }
      }
    } else a = 1;
    else Kt(h) && n.charCodeAt(1) === Gt && (l = n.slice(0, 2), a = 2, o > 2 && J(n.charCodeAt(2)) && (c = true, a = 3));
    if (l.length > 0) if (t.length > 0) {
      if (l.toLowerCase() !== t.toLowerCase()) continue;
    } else t = l;
    if (r) {
      if (t.length > 0) break;
    } else if (i = `${n.slice(a)}\\${i}`, r = c, c && t.length > 0) break;
  }
  return i = Us(i, !r, "\\", J), r ? `${t}\\${i}` : `${t}${i}` || ".";
}, normalize(e) {
  Ae(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let i = 0, r, s = false;
  const n = e.charCodeAt(0);
  if (t === 1) return no(n) ? "\\" : e;
  if (J(n)) if (s = true, J(e.charCodeAt(1))) {
    let a = 2, l = a;
    for (; a < t && !J(e.charCodeAt(a)); ) a++;
    if (a < t && a !== l) {
      const c = e.slice(l, a);
      for (l = a; a < t && J(e.charCodeAt(a)); ) a++;
      if (a < t && a !== l) {
        for (l = a; a < t && !J(e.charCodeAt(a)); ) a++;
        if (a === t) return `\\\\${c}\\${e.slice(l)}\\`;
        a !== l && (r = `\\\\${c}\\${e.slice(l, a)}`, i = a);
      }
    }
  } else i = 1;
  else Kt(n) && e.charCodeAt(1) === Gt && (r = e.slice(0, 2), i = 2, t > 2 && J(e.charCodeAt(2)) && (s = true, i = 3));
  let o = i < t ? Us(e.slice(i), !s, "\\", J) : "";
  if (o.length === 0 && !s && (o = "."), o.length > 0 && J(e.charCodeAt(t - 1)) && (o += "\\"), !s && r === void 0 && e.includes(":")) {
    if (o.length >= 2 && Kt(o.charCodeAt(0)) && o.charCodeAt(1) === Gt) return `.\\${o}`;
    let a = e.indexOf(":");
    do
      if (a === t - 1 || J(e.charCodeAt(a + 1))) return `.\\${o}`;
    while ((a = e.indexOf(":", a + 1)) !== -1);
  }
  return r === void 0 ? s ? `\\${o}` : o : s ? `${r}\\${o}` : `${r}${o}`;
}, isAbsolute(e) {
  Ae(e, "path");
  const t = e.length;
  if (t === 0) return false;
  const i = e.charCodeAt(0);
  return J(i) || t > 2 && Kt(i) && e.charCodeAt(1) === Gt && J(e.charCodeAt(2));
}, join(...e) {
  if (e.length === 0) return ".";
  let t, i;
  for (let n = 0; n < e.length; ++n) {
    const o = e[n];
    Ae(o, "path"), o.length > 0 && (t === void 0 ? t = i = o : t += `\\${o}`);
  }
  if (t === void 0) return ".";
  let r = true, s = 0;
  if (typeof i == "string" && J(i.charCodeAt(0))) {
    ++s;
    const n = i.length;
    n > 1 && J(i.charCodeAt(1)) && (++s, n > 2 && (J(i.charCodeAt(2)) ? ++s : r = false));
  }
  if (r) {
    for (; s < t.length && J(t.charCodeAt(s)); ) s++;
    s >= 2 && (t = `\\${t.slice(s)}`);
  }
  return Ce.normalize(t);
}, relative(e, t) {
  if (Ae(e, "from"), Ae(t, "to"), e === t) return "";
  const i = Ce.resolve(e), r = Ce.resolve(t);
  if (i === r || (e = i.toLowerCase(), t = r.toLowerCase(), e === t)) return "";
  if (i.length !== e.length || r.length !== t.length) {
    const v = i.split("\\"), y = r.split("\\");
    v[v.length - 1] === "" && v.pop(), y[y.length - 1] === "" && y.pop();
    const E = v.length, _ = y.length, I = E < _ ? E : _;
    let D;
    for (D = 0; D < I && v[D].toLowerCase() === y[D].toLowerCase(); D++) ;
    return D === 0 ? r : D === I ? _ > I ? y.slice(D).join("\\") : E > I ? "..\\".repeat(E - 1 - D) + ".." : "" : "..\\".repeat(E - D) + y.slice(D).join("\\");
  }
  let s = 0;
  for (; s < e.length && e.charCodeAt(s) === ct; ) s++;
  let n = e.length;
  for (; n - 1 > s && e.charCodeAt(n - 1) === ct; ) n--;
  const o = n - s;
  let a = 0;
  for (; a < t.length && t.charCodeAt(a) === ct; ) a++;
  let l = t.length;
  for (; l - 1 > a && t.charCodeAt(l - 1) === ct; ) l--;
  const c = l - a, h = o < c ? o : c;
  let f = -1, d = 0;
  for (; d < h; d++) {
    const v = e.charCodeAt(s + d);
    if (v !== t.charCodeAt(a + d)) break;
    v === ct && (f = d);
  }
  if (d !== h) {
    if (f === -1) return r;
  } else {
    if (c > h) {
      if (t.charCodeAt(a + d) === ct) return r.slice(a + d + 1);
      if (d === 2) return r.slice(a + d);
    }
    o > h && (e.charCodeAt(s + d) === ct ? f = d : d === 2 && (f = 3)), f === -1 && (f = 0);
  }
  let p = "";
  for (d = s + f + 1; d <= n; ++d) (d === n || e.charCodeAt(d) === ct) && (p += p.length === 0 ? ".." : "\\..");
  return a += f, p.length > 0 ? `${p}${r.slice(a, l)}` : (r.charCodeAt(a) === ct && ++a, r.slice(a, l));
}, toNamespacedPath(e) {
  if (typeof e != "string" || e.length === 0) return e;
  const t = Ce.resolve(e);
  if (t.length <= 2) return e;
  if (t.charCodeAt(0) === ct) {
    if (t.charCodeAt(1) === ct) {
      const i = t.charCodeAt(2);
      if (i !== T1 && i !== Ri) return `\\\\?\\UNC\\${t.slice(2)}`;
    }
  } else if (Kt(t.charCodeAt(0)) && t.charCodeAt(1) === Gt && t.charCodeAt(2) === ct) return `\\\\?\\${t}`;
  return t;
}, dirname(e) {
  Ae(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let i = -1, r = 0;
  const s = e.charCodeAt(0);
  if (t === 1) return J(s) ? e : ".";
  if (J(s)) {
    if (i = r = 1, J(e.charCodeAt(1))) {
      let a = 2, l = a;
      for (; a < t && !J(e.charCodeAt(a)); ) a++;
      if (a < t && a !== l) {
        for (l = a; a < t && J(e.charCodeAt(a)); ) a++;
        if (a < t && a !== l) {
          for (l = a; a < t && !J(e.charCodeAt(a)); ) a++;
          if (a === t) return e;
          a !== l && (i = r = a + 1);
        }
      }
    }
  } else Kt(s) && e.charCodeAt(1) === Gt && (i = t > 2 && J(e.charCodeAt(2)) ? 3 : 2, r = i);
  let n = -1, o = true;
  for (let a = t - 1; a >= r; --a) if (J(e.charCodeAt(a))) {
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
  t !== void 0 && Ae(t, "suffix"), Ae(e, "path");
  let i = 0, r = -1, s = true, n;
  if (e.length >= 2 && Kt(e.charCodeAt(0)) && e.charCodeAt(1) === Gt && (i = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (n = e.length - 1; n >= i; --n) {
      const l = e.charCodeAt(n);
      if (J(l)) {
        if (!s) {
          i = n + 1;
          break;
        }
      } else a === -1 && (s = false, a = n + 1), o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (r = n) : (o = -1, r = a));
    }
    return i === r ? r = a : r === -1 && (r = e.length), e.slice(i, r);
  }
  for (n = e.length - 1; n >= i; --n) if (J(e.charCodeAt(n))) {
    if (!s) {
      i = n + 1;
      break;
    }
  } else r === -1 && (s = false, r = n + 1);
  return r === -1 ? "" : e.slice(i, r);
}, extname(e) {
  Ae(e, "path");
  let t = 0, i = -1, r = 0, s = -1, n = true, o = 0;
  e.length >= 2 && e.charCodeAt(1) === Gt && Kt(e.charCodeAt(0)) && (t = r = 2);
  for (let a = e.length - 1; a >= t; --a) {
    const l = e.charCodeAt(a);
    if (J(l)) {
      if (!n) {
        r = a + 1;
        break;
      }
      continue;
    }
    s === -1 && (n = false, s = a + 1), l === Ri ? i === -1 ? i = a : o !== 1 && (o = 1) : i !== -1 && (o = -1);
  }
  return i === -1 || s === -1 || o === 0 || o === 1 && i === s - 1 && i === r + 1 ? "" : e.slice(i, s);
}, format: xc.bind(null, "\\"), parse(e) {
  Ae(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const i = e.length;
  let r = 0, s = e.charCodeAt(0);
  if (i === 1) return J(s) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
  if (J(s)) {
    if (r = 1, J(e.charCodeAt(1))) {
      let f = 2, d = f;
      for (; f < i && !J(e.charCodeAt(f)); ) f++;
      if (f < i && f !== d) {
        for (d = f; f < i && J(e.charCodeAt(f)); ) f++;
        if (f < i && f !== d) {
          for (d = f; f < i && !J(e.charCodeAt(f)); ) f++;
          f === i ? r = f : f !== d && (r = f + 1);
        }
      }
    }
  } else if (Kt(s) && e.charCodeAt(1) === Gt) {
    if (i <= 2) return t.root = t.dir = e, t;
    if (r = 2, J(e.charCodeAt(2))) {
      if (i === 3) return t.root = t.dir = e, t;
      r = 3;
    }
  }
  r > 0 && (t.root = e.slice(0, r));
  let n = -1, o = r, a = -1, l = true, c = e.length - 1, h = 0;
  for (; c >= r; --c) {
    if (s = e.charCodeAt(c), J(s)) {
      if (!l) {
        o = c + 1;
        break;
      }
      continue;
    }
    a === -1 && (l = false, a = c + 1), s === Ri ? n === -1 ? n = c : h !== 1 && (h = 1) : n !== -1 && (h = -1);
  }
  return a !== -1 && (n === -1 || h === 0 || h === 1 && n === a - 1 && n === o + 1 ? t.base = t.name = e.slice(o, a) : (t.name = e.slice(o, n), t.base = e.slice(o, a), t.ext = e.slice(n, a))), o > 0 && o !== r ? t.dir = e.slice(0, o - 1) : t.dir = t.root, t;
}, sep: "\\", delimiter: ";", win32: null, posix: null }, U1 = (() => {
  if (ut) {
    const e = /\\/g;
    return () => {
      const t = Or().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => Or();
})(), ce = { resolve(...e) {
  let t = "", i = false;
  for (let r = e.length - 1; r >= 0 && !i; r--) {
    const s = e[r];
    Ae(s, `paths[${r}]`), s.length !== 0 && (t = `${s}/${t}`, i = s.charCodeAt(0) === ze);
  }
  if (!i) {
    const r = U1();
    t = `${r}/${t}`, i = r.charCodeAt(0) === ze;
  }
  return t = Us(t, !i, "/", no), i ? `/${t}` : t.length > 0 ? t : ".";
}, normalize(e) {
  if (Ae(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === ze, i = e.charCodeAt(e.length - 1) === ze;
  return e = Us(e, !t, "/", no), e.length === 0 ? t ? "/" : i ? "./" : "." : (i && (e += "/"), t ? `/${e}` : e);
}, isAbsolute(e) {
  return Ae(e, "path"), e.length > 0 && e.charCodeAt(0) === ze;
}, join(...e) {
  if (e.length === 0) return ".";
  const t = [];
  for (let i = 0; i < e.length; ++i) {
    const r = e[i];
    Ae(r, "path"), r.length > 0 && t.push(r);
  }
  return t.length === 0 ? "." : ce.normalize(t.join("/"));
}, relative(e, t) {
  if (Ae(e, "from"), Ae(t, "to"), e === t || (e = ce.resolve(e), t = ce.resolve(t), e === t)) return "";
  const i = 1, r = e.length, s = r - i, n = 1, o = t.length - n, a = s < o ? s : o;
  let l = -1, c = 0;
  for (; c < a; c++) {
    const f = e.charCodeAt(i + c);
    if (f !== t.charCodeAt(n + c)) break;
    f === ze && (l = c);
  }
  if (c === a) if (o > a) {
    if (t.charCodeAt(n + c) === ze) return t.slice(n + c + 1);
    if (c === 0) return t.slice(n + c);
  } else s > a && (e.charCodeAt(i + c) === ze ? l = c : c === 0 && (l = 0));
  let h = "";
  for (c = i + l + 1; c <= r; ++c) (c === r || e.charCodeAt(c) === ze) && (h += h.length === 0 ? ".." : "/..");
  return `${h}${t.slice(n + l)}`;
}, toNamespacedPath(e) {
  return e;
}, dirname(e) {
  if (Ae(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === ze;
  let i = -1, r = true;
  for (let s = e.length - 1; s >= 1; --s) if (e.charCodeAt(s) === ze) {
    if (!r) {
      i = s;
      break;
    }
  } else r = false;
  return i === -1 ? t ? "/" : "." : t && i === 1 ? "//" : e.slice(0, i);
}, basename(e, t) {
  t !== void 0 && Ae(t, "suffix"), Ae(e, "path");
  let i = 0, r = -1, s = true, n;
  if (t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (n = e.length - 1; n >= 0; --n) {
      const l = e.charCodeAt(n);
      if (l === ze) {
        if (!s) {
          i = n + 1;
          break;
        }
      } else a === -1 && (s = false, a = n + 1), o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (r = n) : (o = -1, r = a));
    }
    return i === r ? r = a : r === -1 && (r = e.length), e.slice(i, r);
  }
  for (n = e.length - 1; n >= 0; --n) if (e.charCodeAt(n) === ze) {
    if (!s) {
      i = n + 1;
      break;
    }
  } else r === -1 && (s = false, r = n + 1);
  return r === -1 ? "" : e.slice(i, r);
}, extname(e) {
  Ae(e, "path");
  let t = -1, i = 0, r = -1, s = true, n = 0;
  for (let o = e.length - 1; o >= 0; --o) {
    const a = e[o];
    if (a === "/") {
      if (!s) {
        i = o + 1;
        break;
      }
      continue;
    }
    r === -1 && (s = false, r = o + 1), a === "." ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1);
  }
  return t === -1 || r === -1 || n === 0 || n === 1 && t === r - 1 && t === i + 1 ? "" : e.slice(t, r);
}, format: xc.bind(null, "/"), parse(e) {
  Ae(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const i = e.charCodeAt(0) === ze;
  let r;
  i ? (t.root = "/", r = 1) : r = 0;
  let s = -1, n = 0, o = -1, a = true, l = e.length - 1, c = 0;
  for (; l >= r; --l) {
    const h = e.charCodeAt(l);
    if (h === ze) {
      if (!a) {
        n = l + 1;
        break;
      }
      continue;
    }
    o === -1 && (a = false, o = l + 1), h === Ri ? s === -1 ? s = l : c !== 1 && (c = 1) : s !== -1 && (c = -1);
  }
  if (o !== -1) {
    const h = n === 0 && i ? 1 : n;
    s === -1 || c === 0 || c === 1 && s === o - 1 && s === n + 1 ? t.base = t.name = e.slice(h, o) : (t.name = e.slice(h, s), t.base = e.slice(h, o), t.ext = e.slice(s, o));
  }
  return n > 0 ? t.dir = e.slice(0, n - 1) : i && (t.dir = "/"), t;
}, sep: "/", delimiter: ":", win32: null, posix: null };
ce.win32 = Ce.win32 = Ce, ce.posix = Ce.posix = ce;
var ci = ut ? Ce.normalize : ce.normalize, Ic = ut ? Ce.isAbsolute : ce.isAbsolute, H = ut ? Ce.join : ce.join, Ai = ut ? Ce.resolve : ce.resolve, Pc = ut ? Ce.relative : ce.relative, ui = ut ? Ce.dirname : ce.dirname, Pt = ut ? Ce.basename : ce.basename, N1 = ut ? Ce.extname : ce.extname, rw = ut ? Ce.format : ce.format, sw = ut ? Ce.parse : ce.parse, nw = ut ? Ce.toNamespacedPath : ce.toNamespacedPath, it = ut ? Ce.sep : ce.sep, ow = ut ? Ce.delimiter : ce.delimiter;
b(), b();
function F1(e) {
  return e;
}
var M1 = class {
  constructor(e, t) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = F1) : (this._fn = t, this._computeKey = e.getCacheKey);
  }
  get(e) {
    const t = this._computeKey(e);
    return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
  }
};
b();
var hi = class {
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
b();
function V1(e) {
  return !e || typeof e != "string" ? true : e.trim().length === 0;
}
var W1 = /{([^}]+)}/g;
function Zi(e, t) {
  return Object.keys(t).length === 0 ? e : e.replace(W1, (i, r) => t[r] ?? i);
}
function er(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function oo(e, t) {
  if (!e || !t) return e;
  const i = t.length, r = e.length;
  if (i === 1) {
    let n = r;
    const o = t.charCodeAt(0);
    for (; n > 0 && e.charCodeAt(n - 1) === o; ) n--;
    return e.substring(0, n);
  }
  let s = r;
  for (; s > 0 && e.endsWith(t, s); ) s -= i;
  return e.substring(0, s);
}
function ao(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function lo(e, t, i = 0, r = e.length, s = 0, n = t.length) {
  for (; i < r && s < n; i++, s++) {
    const l = e.charCodeAt(i), c = t.charCodeAt(s);
    if (l < c) return -1;
    if (l > c) return 1;
  }
  const o = r - i, a = n - s;
  return o < a ? -1 : o > a ? 1 : 0;
}
function Ns(e, t) {
  return ki(e, t, 0, e.length, 0, t.length);
}
function ki(e, t, i = 0, r = e.length, s = 0, n = t.length) {
  for (; i < r && s < n; i++, s++) {
    let l = e.charCodeAt(i), c = t.charCodeAt(s);
    if (l === c) continue;
    if (l >= 128 || c >= 128) return lo(e.toLowerCase(), t.toLowerCase(), i, r, s, n);
    Rc(l) && (l -= 32), Rc(c) && (c -= 32);
    const h = l - c;
    if (h !== 0) return h;
  }
  const o = r - i, a = n - s;
  return o < a ? -1 : o > a ? 1 : 0;
}
function Rc(e) {
  return e >= 97 && e <= 122;
}
function Ac(e) {
  return e >= 65 && e <= 90;
}
function jt(e, t) {
  return e.length === t.length && ki(e, t) === 0;
}
function kc(e, t) {
  const i = t.length;
  return t.length > e.length ? false : ki(e, t, 0, i) === 0;
}
function $1(e, t) {
  const i = e.length, r = i - t.length;
  return r >= 0 && ki(e, t, r, i) === 0;
}
function B1(e) {
  return 55296 <= e && e <= 56319;
}
function Dc(e) {
  return 56320 <= e && e <= 57343;
}
function q1(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
var z1 = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, G1 = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, K1 = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, aw = new RegExp("(?:" + [z1.source, G1.source, K1.source].join("|") + ")", "g"), lw = "\uFEFF", j1 = class _s {
  static getInstance() {
    return _s._INSTANCE || (_s._INSTANCE = new _s()), _s._INSTANCE;
  }
  constructor() {
    this._data = H1();
  }
  getGraphemeBreakType(t) {
    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
    if (t < 127) return 0;
    const i = this._data, r = i.length / 3;
    let s = 1;
    for (; s <= r; ) if (t < i[3 * s]) s = 2 * s;
    else if (t > i[3 * s + 1]) s = 2 * s + 1;
    else return i[3 * s + 2];
    return 0;
  }
};
j1._INSTANCE = null;
function H1() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var tr = class Pl {
  constructor(t) {
    this.confusableDictionary = t;
  }
  static getInstance(t) {
    return Pl.cache.get(Array.from(t).join(","));
  }
  static getLocales() {
    return Pl._locales.value;
  }
  isAmbiguous(t) {
    return this.confusableDictionary.has(t);
  }
  containsAmbiguousCharacter(t) {
    for (let i = 0; i < t.length; i++) {
      const r = t.codePointAt(i);
      if (typeof r == "number" && this.isAmbiguous(r)) return true;
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
tr.ambiguousCharacterData = new hi(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), tr.cache = new M1((e) => {
  const t = e.split(",");
  function i(h) {
    const f = /* @__PURE__ */ new Map();
    for (let d = 0; d < h.length; d += 2) f.set(h[d], h[d + 1]);
    return f;
  }
  function r(h, f) {
    const d = new Map(h);
    for (const [p, v] of f) d.set(p, v);
    return d;
  }
  function s(h, f) {
    if (!h) return f;
    const d = /* @__PURE__ */ new Map();
    for (const [p, v] of h) f.has(p) && d.set(p, v);
    return d;
  }
  const n = tr.ambiguousCharacterData.value;
  let o = t.filter((h) => !h.startsWith("_") && h in n);
  o.length === 0 && (o = ["_default"]);
  let a;
  for (const h of o) {
    const f = i(n[h]);
    a = s(a, f);
  }
  const l = i(n._common), c = r(l, a);
  return new tr(c);
}), tr._locales = new hi(() => Object.keys(tr.ambiguousCharacterData.value).filter((e) => !e.startsWith("_")));
var X1 = class Es {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(Es.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return Es.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let i = 0; i < t.length; i++) {
      const r = t.codePointAt(i);
      if (typeof r == "number" && (Es.isInvisibleCharacter(r) || r === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return Es.getData();
  }
};
X1._data = void 0;
function fi(e) {
  return e === 47 || e === 92;
}
function Lc(e) {
  return e.replace(/[\\/]/g, ce.sep);
}
function Q1(e) {
  return e.indexOf("/") === -1 && (e = Lc(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function Tc(e, t = ce.sep) {
  if (!e) return "";
  const i = e.length, r = e.charCodeAt(0);
  if (fi(r)) {
    if (fi(e.charCodeAt(1)) && !fi(e.charCodeAt(2))) {
      let n = 3;
      const o = n;
      for (; n < i && !fi(e.charCodeAt(n)); n++) ;
      if (o !== n && !fi(e.charCodeAt(n + 1))) {
        for (n += 1; n < i; n++) if (fi(e.charCodeAt(n))) return e.slice(0, n + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (Cc(r) && e.charCodeAt(1) === 58) return fi(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let s = e.indexOf("://");
  if (s !== -1) {
    for (s += 3; s < i; s++) if (fi(e.charCodeAt(s))) return e.slice(0, s + 1);
  }
  return "";
}
function Fs(e, t, i) {
  const r = e === t;
  return !i || r ? r : !e || !t ? false : jt(e, t);
}
function J1(e, t, i) {
  return i === 0 ? true : e.charCodeAt(0) !== t.charCodeAt(0) ? false : i === 1 ? true : e.charCodeAt(i - 1) !== t.charCodeAt(i - 1) ? false : e.startsWith(t);
}
function Y1(e, t, i) {
  for (let r = 0; r < i; r++) {
    let s = e.charCodeAt(r), n = t.charCodeAt(r);
    if (s !== n) {
      if (s >= 128 || n >= 128) return ki(e, t, r, i, r, i) === 0;
      if (s >= 97 && s <= 122 && (s -= 32), n >= 97 && n <= 122 && (n -= 32), s !== n) return false;
    }
  }
  return true;
}
function Ht(e, t, i, r = it) {
  if (e === t) return true;
  if (!e || !t) return false;
  const s = e.length, n = t.length;
  if (n > s) return false;
  const o = r.charCodeAt(0), a = t.charCodeAt(n - 1) === o;
  if (n < s && !a && e.charCodeAt(n) !== o) return false;
  if (i) {
    if (!Y1(e, t, n)) return false;
  } else if (!J1(e, t, n)) return false;
  return n === s || a ? true : e.charCodeAt(n) === o;
}
function Cc(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function Z1(e) {
  return Re ? (e = oo(e, it), e.endsWith(":") && (e += it)) : (e = oo(e, it), e || (e = it)), e;
}
function ep(e) {
  const t = ci(e);
  return Re ? e.length > 3 ? false : tp(t) && (e.length === 2 || t.charCodeAt(2) === 92) : t === ce.sep;
}
function tp(e, t = Re) {
  return t ? Cc(e.charCodeAt(0)) && e.charCodeAt(1) === 58 : false;
}
var ip = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", rp = "BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";
function sp(e, t, i = 8) {
  let r = "";
  for (let n = 0; n < i; n++) {
    let o;
    n === 0 && Re && !t && (i === 3 || i === 4) ? o = rp : o = ip, r += o.charAt(Math.floor(Math.random() * o.length));
  }
  let s;
  return t ? s = `${t}-${r}` : s = r, e ? H(e, s) : s;
}
b(), b(), b(), b();
function Ms(e) {
  const t = e;
  return t ? [t.on, t.pause, t.resume, t.destroy].every((i) => typeof i == "function") : false;
}
function co(e) {
  const t = e;
  return t ? Ms(t.stream) && Array.isArray(t.buffer) && typeof t.ended == "boolean" : false;
}
function Vs(e, t) {
  return new np(e, t);
}
var np = class {
  constructor(e, t) {
    this.reducer = e, this.options = t, this.state = { flowing: false, ended: false, destroyed: false }, this.buffer = { data: [], error: [] }, this.listeners = { data: [], error: [], end: [] }, this.pendingWritePromises = [];
  }
  pause() {
    this.state.destroyed || (this.state.flowing = false);
  }
  resume() {
    this.state.destroyed || this.state.flowing || (this.state.flowing = true, this.flowData(), this.flowErrors(), this.flowEnd());
  }
  write(e) {
    if (!this.state.destroyed) {
      if (this.state.flowing) this.emitData(e);
      else if (this.buffer.data.push(e), typeof this.options?.highWaterMark == "number" && this.buffer.data.length > this.options.highWaterMark) return new Promise((t) => this.pendingWritePromises.push(t));
    }
  }
  error(e) {
    this.state.destroyed || (this.state.flowing ? this.emitError(e) : this.buffer.error.push(e));
  }
  end(e) {
    this.state.destroyed || (typeof e < "u" && this.write(e), this.state.flowing ? (this.emitEnd(), this.destroy()) : this.state.ended = true);
  }
  emitData(e) {
    this.listeners.data.slice(0).forEach((t) => t(e));
  }
  emitError(e) {
    this.listeners.error.length === 0 ? vt(e) : this.listeners.error.slice(0).forEach((t) => t(e));
  }
  emitEnd() {
    this.listeners.end.slice(0).forEach((e) => e());
  }
  on(e, t) {
    if (!this.state.destroyed) switch (e) {
      case "data":
        this.listeners.data.push(t), this.resume();
        break;
      case "end":
        this.listeners.end.push(t), this.state.flowing && this.flowEnd() && this.destroy();
        break;
      case "error":
        this.listeners.error.push(t), this.state.flowing && this.flowErrors();
        break;
    }
  }
  removeListener(e, t) {
    if (this.state.destroyed) return;
    let i;
    switch (e) {
      case "data":
        i = this.listeners.data;
        break;
      case "end":
        i = this.listeners.end;
        break;
      case "error":
        i = this.listeners.error;
        break;
    }
    if (i) {
      const r = i.indexOf(t);
      r >= 0 && i.splice(r, 1);
    }
  }
  flowData() {
    if (this.buffer.data.length === 0) return;
    if (typeof this.reducer == "function") {
      const t = this.buffer.data.length === 1 ? this.buffer.data[0] : this.reducer(this.buffer.data);
      this.emitData(t);
    } else for (const t of this.buffer.data) this.emitData(t);
    this.buffer.data.length = 0;
    const e = [...this.pendingWritePromises];
    this.pendingWritePromises.length = 0, e.forEach((t) => t());
  }
  flowErrors() {
    if (this.listeners.error.length > 0) {
      for (const e of this.buffer.error) this.emitError(e);
      this.buffer.error.length = 0;
    }
  }
  flowEnd() {
    return this.state.ended ? (this.emitEnd(), this.listeners.end.length > 0) : false;
  }
  destroy() {
    this.state.destroyed || (this.state.destroyed = true, this.state.ended = true, this.buffer.data.length = 0, this.buffer.error.length = 0, this.listeners.data.length = 0, this.listeners.error.length = 0, this.listeners.end.length = 0, this.pendingWritePromises.length = 0);
  }
};
function op(e, t) {
  const i = [];
  let r;
  for (; (r = e.read()) !== null; ) i.push(r);
  return t(i);
}
function ap(e, t, i) {
  const r = [];
  let s;
  for (; (s = e.read()) !== null && r.length < i; ) r.push(s);
  return s === null && r.length > 0 ? t(r) : { read: () => {
    if (r.length > 0) return r.shift();
    if (typeof s < "u") {
      const n = s;
      return s = void 0, n;
    }
    return e.read();
  } };
}
function Oc(e, t) {
  return new Promise((i, r) => {
    const s = [];
    uo(e, { onData: (n) => {
      t && s.push(n);
    }, onError: (n) => {
      t ? r(n) : i(void 0);
    }, onEnd: () => {
      i(t ? t(s) : void 0);
    } });
  });
}
function uo(e, t, i) {
  e.on("error", (r) => {
    i?.isCancellationRequested || t.onError(r);
  }), e.on("end", () => {
    i?.isCancellationRequested || t.onEnd();
  }), e.on("data", (r) => {
    i?.isCancellationRequested || t.onData(r);
  });
}
function lp(e, t) {
  return new Promise((i, r) => {
    const s = new Ve(), n = [], o = (c) => {
      if (n.push(c), n.length > t) return s.dispose(), e.pause(), i({ stream: e, buffer: n, ended: false });
    }, a = (c) => (s.dispose(), r(c)), l = () => (s.dispose(), i({ stream: e, buffer: n, ended: true }));
    s.add(Ee(() => e.removeListener("error", a))), e.on("error", a), s.add(Ee(() => e.removeListener("end", l))), e.on("end", l), s.add(Ee(() => e.removeListener("data", o))), e.on("data", o);
  });
}
function cp(e) {
  let t = false;
  return { read: () => t ? null : (t = true, e) };
}
function Uc(e, t, i) {
  const r = Vs(i);
  return uo(e, { onData: (s) => r.write(t.data(s)), onError: (s) => r.error(t.error ? t.error(s) : s), onEnd: () => r.end() }), r;
}
var Ur = typeof Buffer < "u", up = new hi(() => new Uint8Array(256)), ir, ho, hp = 512 * 1024, Di = null, fo = false, Nc = false, fp = 1 / 0, Fc, dp = 1 / 0, Mc, po;
function Vc(e, t) {
  const i = po;
  po = e;
  try {
    return t();
  } finally {
    po = i;
  }
}
function Wc(e, t) {
  if (Mc && e.byteLength >= dp) try {
    Mc({ buffer: e, byteLength: e.byteLength, source: t });
  } catch {
  }
}
var $ = class rt {
  static alloc(t) {
    let i;
    return Ur ? i = new rt(Buffer.allocUnsafe(t)) : i = new rt(new Uint8Array(t)), Wc(i, "alloc"), i;
  }
  static wrap(t) {
    Ur && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength));
    const i = new rt(t);
    return Wc(i, "wrap"), i;
  }
  static fromString(t, i) {
    return !(i?.dontUseNodeBuffer || false) && Ur ? new rt(Buffer.from(t)) : (ir || (ir = new TextEncoder()), new rt(ir.encode(t)));
  }
  static withPooledString(t, i) {
    if (Ur) return i(rt.fromString(t));
    if (fo) return Nc || (Nc = true, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), i(rt.fromString(t));
    const r = t.length * 3;
    if (r > hp) return i(rt.fromString(t));
    if (ir || (ir = new TextEncoder()), !Di || Di.byteLength < r) {
      let n = Di ? Di.byteLength * 2 : 16384;
      for (; n < r; ) n *= 2;
      Di = new Uint8Array(n);
    }
    const s = ir.encodeInto(t, Di).written;
    fo = true;
    try {
      return i(new rt(Di.subarray(0, s)));
    } finally {
      fo = false;
    }
  }
  static fromByteArray(t) {
    const i = rt.alloc(t.length);
    for (let r = 0, s = t.length; r < s; r++) i.buffer[r] = t[r];
    return i;
  }
  static concat(t, i) {
    if (typeof i > "u") {
      i = 0;
      for (let n = 0, o = t.length; n < o; n++) i += t[n].byteLength;
    }
    const r = rt.alloc(i);
    let s = 0;
    for (let n = 0, o = t.length; n < o; n++) {
      const a = t[n];
      r.set(a, s), s += a.byteLength;
    }
    return r;
  }
  constructor(t) {
    this.buffer = t, this.byteLength = this.buffer.byteLength;
  }
  clone() {
    const t = rt.alloc(this.byteLength);
    return t.set(this), t;
  }
  toString() {
    if (Ur) return this.buffer.toString();
    if (Fc && this.buffer.byteLength > fp) try {
      Fc(this.buffer.byteLength);
    } catch {
    }
    return ho || (ho = new TextDecoder()), ho.decode(this.buffer);
  }
  slice(t, i) {
    return new rt(this.buffer.subarray(t, i));
  }
  set(t, i) {
    if (t instanceof rt) this.buffer.set(t.buffer, i);
    else if (t instanceof Uint8Array) this.buffer.set(t, i);
    else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), i);
    else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), i);
    else throw new Error("Unknown argument 'array'");
  }
  readUInt32BE(t) {
    return gp(this.buffer, t);
  }
  writeUInt32BE(t, i) {
    mp(this.buffer, t, i);
  }
  readUInt32LE(t) {
    return vp(this.buffer, t);
  }
  writeUInt32LE(t, i) {
    yp(this.buffer, t, i);
  }
  readUInt8(t) {
    return wp(this.buffer, t);
  }
  writeUInt8(t, i) {
    _p(this.buffer, t, i);
  }
  indexOf(t, i = 0) {
    return pp(this.buffer, t instanceof rt ? t.buffer : t, i);
  }
  equals(t) {
    return this === t ? true : this.byteLength !== t.byteLength ? false : this.buffer.every((i, r) => i === t.buffer[r]);
  }
};
function pp(e, t, i = 0) {
  const r = t.byteLength, s = e.byteLength;
  if (r === 0) return 0;
  if (r === 1) return e.indexOf(t[0]);
  if (r > s - i) return -1;
  const n = up.value;
  n.fill(t.length);
  for (let c = 0; c < t.length; c++) n[t[c]] = t.length - c - 1;
  let o = i + t.length - 1, a = o, l = -1;
  for (; o < s; ) if (e[o] === t[a]) {
    if (a === 0) {
      l = o;
      break;
    }
    o--, a--;
  } else o += Math.max(t.length - a, n[e[o]]), a = t.length - 1;
  return l;
}
function gp(e, t) {
  return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function mp(e, t, i) {
  e[i + 3] = t, t = t >>> 8, e[i + 2] = t, t = t >>> 8, e[i + 1] = t, t = t >>> 8, e[i] = t;
}
function vp(e, t) {
  return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function yp(e, t, i) {
  e[i + 0] = t & 255, t = t >>> 8, e[i + 1] = t & 255, t = t >>> 8, e[i + 2] = t & 255, t = t >>> 8, e[i + 3] = t & 255;
}
function wp(e, t) {
  return e[t];
}
function _p(e, t, i) {
  e[i] = t;
}
function Ep(e) {
  return op(e, (t) => $.concat(t));
}
function Sp(e) {
  return cp(e);
}
function rr(e) {
  return Oc(e, (t) => t.length === 1 ? t[0] : $.concat(t));
}
async function bp(e) {
  return e.ended ? $.concat(e.buffer) : $.concat([...e.buffer, await rr(e.stream)]);
}
function xp(e) {
  return Uc(e, { data: (t) => typeof t == "string" ? $.fromString(t) : $.wrap(t) }, (t) => $.concat(t));
}
function Ip(e) {
  return Vs((t) => $.concat(t), e);
}
var Pp = /^\w[\w\d+.-]*$/, Rp = /^\//, Ap = /^\/\//;
function kp(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !Pp.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!Rp.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (Ap.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function Dp(e, t) {
  return !e && !t ? "file" : e;
}
function Lp(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== Rt && (t = Rt + t) : t = Rt;
      break;
  }
  return t;
}
var we = "", Rt = "/", Tp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, k = class Nn {
  static isUri(t) {
    return t instanceof Nn ? true : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : false;
  }
  constructor(t, i, r, s, n, o = false) {
    typeof t == "object" ? (this.scheme = t.scheme || we, this.authority = t.authority || we, this.path = t.path || we, this.query = t.query || we, this.fragment = t.fragment || we) : (this.scheme = Dp(t, o), this.authority = i || we, this.path = Lp(this.scheme, r || we), this.query = s || we, this.fragment = n || we, kp(this, o));
  }
  get fsPath() {
    return Ws(this, false);
  }
  with(t) {
    if (!t) return this;
    let { scheme: i, authority: r, path: s, query: n, fragment: o } = t;
    return i === void 0 ? i = this.scheme : i === null && (i = we), r === void 0 ? r = this.authority : r === null && (r = we), s === void 0 ? s = this.path : s === null && (s = we), n === void 0 ? n = this.query : n === null && (n = we), o === void 0 ? o = this.fragment : o === null && (o = we), i === this.scheme && r === this.authority && s === this.path && n === this.query && o === this.fragment ? this : new sr(i, r, s, n, o);
  }
  static parse(t, i = false) {
    const r = Tp.exec(t);
    return r ? new sr(r[2] || we, $s(r[4] || we), $s(r[5] || we), $s(r[7] || we), $s(r[9] || we), i) : new sr(we, we, we, we, we);
  }
  static file(t) {
    let i = we;
    if (Re && (t = t.replace(/\\/g, Rt)), t[0] === Rt && t[1] === Rt) {
      const r = t.indexOf(Rt, 2);
      r === -1 ? (i = t.substring(2), t = Rt) : (i = t.substring(2, r), t = t.substring(r) || Rt);
    }
    return new sr("file", i, t, we, we);
  }
  static from(t, i) {
    return new sr(t.scheme, t.authority, t.path, t.query, t.fragment, i);
  }
  static joinPath(t, ...i) {
    if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let r;
    return Re && t.scheme === "file" ? r = Nn.file(Ce.join(Ws(t, true), ...i)).path : r = ce.join(t.path, ...i), t.with({ path: r });
  }
  toString(t = false) {
    return go(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof Nn) return t;
      {
        const i = new sr(t);
        return i._formatted = t.external ?? null, i._fsPath = t._sep === $c ? t.fsPath ?? null : null, i;
      }
    } else return t;
  }
  [/* @__PURE__ */ Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
}, $c = Re ? 1 : void 0, sr = class extends k {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = Ws(this, false)), this._fsPath;
  }
  toString(e = false) {
    return e ? go(this, true) : (this._formatted || (this._formatted = go(this, false)), this._formatted);
  }
  toJSON() {
    const e = { $mid: 1 };
    return this._fsPath && (e.fsPath = this._fsPath, e._sep = $c), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
  }
}, Bc = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function qc(e, t, i) {
  let r, s = -1;
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || i && o === 91 || i && o === 93 || i && o === 58) s !== -1 && (r += encodeURIComponent(e.substring(s, n)), s = -1), r !== void 0 && (r += e.charAt(n));
    else {
      r === void 0 && (r = e.substr(0, n));
      const a = Bc[o];
      a !== void 0 ? (s !== -1 && (r += encodeURIComponent(e.substring(s, n)), s = -1), r += a) : s === -1 && (s = n);
    }
  }
  return s !== -1 && (r += encodeURIComponent(e.substring(s))), r !== void 0 ? r : e;
}
function Cp(e) {
  let t;
  for (let i = 0; i < e.length; i++) {
    const r = e.charCodeAt(i);
    r === 35 || r === 63 ? (t === void 0 && (t = e.substr(0, i)), t += Bc[r]) : t !== void 0 && (t += e[i]);
  }
  return t !== void 0 ? t : e;
}
function Ws(e, t) {
  let i;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? i = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? i = e.path.substr(1) : i = e.path[1].toLowerCase() + e.path.substr(2) : i = e.path, Re && (i = i.replace(/\//g, "\\")), i;
}
function go(e, t) {
  const i = t ? Cp : qc;
  let r = "", { scheme: s, authority: n, path: o, query: a, fragment: l } = e;
  if (s && (r += s, r += ":"), (n || s === "file") && (r += Rt, r += Rt), n) {
    let c = n.indexOf("@");
    if (c !== -1) {
      const h = n.substr(0, c);
      n = n.substr(c + 1), c = h.lastIndexOf(":"), c === -1 ? r += i(h, false, false) : (r += i(h.substr(0, c), false, false), r += ":", r += i(h.substr(c + 1), false, true)), r += "@";
    }
    n = n.toLowerCase(), c = n.lastIndexOf(":"), c === -1 ? r += i(n, false, true) : (r += i(n.substr(0, c), false, true), r += n.substr(c));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      const c = o.charCodeAt(1);
      c >= 65 && c <= 90 && (o = `/${String.fromCharCode(c + 32)}:${o.substr(3)}`);
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      const c = o.charCodeAt(0);
      c >= 65 && c <= 90 && (o = `${String.fromCharCode(c + 32)}:${o.substr(2)}`);
    }
    r += i(o, true, false);
  }
  return a && (r += "?", r += i(a, false, false)), l && (r += "#", r += t ? l : qc(l, false, false)), r;
}
function zc(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + zc(e.substr(3)) : e;
  }
}
var Gc = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function $s(e) {
  return e.match(Gc) ? e.replace(Gc, (t) => zc(t)) : e;
}
var le;
((e) => {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})(le || (le = {}));
var Op = "tkn", Up = class {
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
    this._serverRootPath = ce.join(t ?? "/", Fp(e));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return ce.join(this._serverRootPath, le.vscodeRemoteResource);
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
    const r = this._ports[t], s = this._connectionTokens[t];
    let n = `path=${encodeURIComponent(e.path)}`;
    return typeof s == "string" && (n += `&${Op}=${encodeURIComponent(s)}`), k.from({ scheme: zt ? this._preferredWebSchema : le.vscodeRemoteResource, authority: `${i}:${r}`, path: this._remoteResourcesPath, query: n });
  }
}, Np = new Up();
function Fp(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var Mp = "vscode-app", Kc = class Fn {
  asBrowserUri(t) {
    const i = this.toUri(t);
    return this.uriToBrowserUri(i);
  }
  uriToBrowserUri(t) {
    return t.scheme === le.vscodeRemote ? Np.rewrite(t) : t.scheme === le.file && (_1 || S1 === `${le.vscodeFileResource}://${Fn.FALLBACK_AUTHORITY}`) ? t.with({ scheme: le.vscodeFileResource, authority: t.authority || Fn.FALLBACK_AUTHORITY, query: null, fragment: null }) : t;
  }
  asFileUri(t) {
    const i = this.toUri(t);
    return this.uriToFileUri(i);
  }
  uriToFileUri(t) {
    return t.scheme === le.vscodeFileResource ? t.with({ scheme: le.file, authority: t.authority !== Fn.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
  }
  toUri(t) {
    if (k.isUri(t)) return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const i = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(i)) return k.joinPath(k.parse(i, true), t);
      const r = H(i, t);
      return k.file(r);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
Kc.FALLBACK_AUTHORITY = Mp;
var Vp = Kc, Bs = new Vp(), cw = Object.freeze({ "Cache-Control": "no-cache, no-store" }), uw = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), jc;
((e) => {
  const t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const i = "vscode-coi";
  function r(n) {
    let o;
    typeof n == "string" ? o = new URL(n).searchParams : n instanceof URL ? o = n.searchParams : k.isUri(n) && (o = new URL(n.toString(true)).searchParams);
    const a = o?.get(i);
    if (a) return t.get(a);
  }
  e.getHeadersFromQuery = r;
  function s(n, o, a) {
    if (!globalThis.crossOriginIsolated) return;
    const l = o && a ? "3" : a ? "2" : "1";
    n instanceof URLSearchParams ? n.set(i, l) : n[i] = l;
  }
  e.addSearchParam = s;
})(jc || (jc = {}));
function Xt(e) {
  return Ws(e, true);
}
var qs = class {
  constructor(e) {
    this._ignorePathCasing = e;
  }
  compare(e, t, i = false) {
    return e === t ? 0 : ao(this.getComparisonKey(e, i), this.getComparisonKey(t, i));
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
      if (e.scheme === le.file) return Ht(Xt(e), Xt(t), this._ignorePathCasing(e)) && e.query === t.query && (i || e.fragment === t.fragment);
      if (Qc(e.authority, t.authority)) return Ht(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (i || e.fragment === t.fragment);
    }
    return false;
  }
  joinPath(e, ...t) {
    return k.joinPath(e, ...t);
  }
  basenameOrAuthority(e) {
    return nr(e) || e.authority;
  }
  basename(e) {
    return ce.basename(e.path);
  }
  extname(e) {
    return ce.extname(e.path);
  }
  dirname(e) {
    if (e.path.length === 0) return e;
    let t;
    return e.scheme === le.file ? t = k.file(ui(Xt(e))).path : (t = ce.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
  }
  normalizePath(e) {
    if (!e.path.length) return e;
    let t;
    return e.scheme === le.file ? t = k.file(ci(Xt(e))).path : t = ce.normalize(e.path), e.with({ path: t });
  }
  relativePath(e, t) {
    if (e.scheme !== t.scheme || !Qc(e.authority, t.authority)) return;
    if (e.scheme === le.file) {
      const s = Pc(Xt(e), Xt(t));
      return Re ? Lc(s) : s;
    }
    let i = e.path || "/";
    const r = t.path || "/";
    if (this._ignorePathCasing(e)) {
      let s = 0;
      for (const n = Math.min(i.length, r.length); s < n && !(i.charCodeAt(s) !== r.charCodeAt(s) && i.charAt(s).toLowerCase() !== r.charAt(s).toLowerCase()); s++) ;
      i = r.substr(0, s) + i.substr(s);
    }
    return ce.relative(i, r);
  }
  resolvePath(e, t) {
    if (e.scheme === le.file) {
      const i = k.file(Ai(Xt(e), t));
      return e.with({ authority: i.authority, path: i.path });
    }
    return t = Q1(t), e.with({ path: ce.resolve(e.path, t) });
  }
  isAbsolutePath(e) {
    return !!e.path && e.path[0] === "/";
  }
  isEqualAuthority(e, t) {
    return e === t || e !== void 0 && t !== void 0 && jt(e, t);
  }
  hasTrailingPathSeparator(e, t = it) {
    if (e.scheme === le.file) {
      const i = Xt(e);
      return i.length > Tc(i).length && i[i.length - 1] === t;
    } else {
      const i = e.path;
      return i.length > 1 && i.charCodeAt(i.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
    }
  }
  removeTrailingPathSeparator(e, t = it) {
    return Jc(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
  }
  addTrailingPathSeparator(e, t = it) {
    let i = false;
    if (e.scheme === le.file) {
      const r = Xt(e);
      i = r !== void 0 && r.length === Tc(r).length && r[r.length - 1] === t;
    } else {
      t = "/";
      const r = e.path;
      i = r.length === 1 && r.charCodeAt(r.length - 1) === 47;
    }
    return !i && !Jc(e, t) ? e.with({ path: e.path + "/" }) : e;
  }
}, oe = new qs(() => false), mo = new qs((e) => e.scheme === le.file ? !tt : true), Wp = new qs((e) => true), Hc = oe.isEqual.bind(oe), Xc = oe.isEqualOrParent.bind(oe), hw = oe.getComparisonKey.bind(oe), fw = oe.basenameOrAuthority.bind(oe), nr = oe.basename.bind(oe), dw = oe.extname.bind(oe), $p = oe.dirname.bind(oe), z = oe.joinPath.bind(oe), Bp = oe.normalizePath.bind(oe), pw = oe.relativePath.bind(oe), gw = oe.resolvePath.bind(oe), qp = oe.isAbsolutePath.bind(oe), Qc = oe.isEqualAuthority.bind(oe), Jc = oe.hasTrailingPathSeparator.bind(oe), mw = oe.removeTrailingPathSeparator.bind(oe), vw = oe.addTrailingPathSeparator.bind(oe), Yc;
((e) => {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(i) {
    const r = /* @__PURE__ */ new Map();
    i.path.substring(i.path.indexOf(";") + 1, i.path.lastIndexOf(";")).split(";").forEach((o) => {
      const [a, l] = o.split(":");
      a && l && r.set(a, l);
    });
    const n = i.path.substring(0, i.path.indexOf(";"));
    return n && r.set(e.META_DATA_MIME, n), r;
  }
  e.parseMetaData = t;
})(Yc || (Yc = {})), b();
var zp = /* @__PURE__ */ Symbol("MicrotaskDelay");
function Zc(e) {
  return !!e && typeof e.then == "function";
}
function Qt(e) {
  const t = new Ii(), i = e(t.token);
  let r = false;
  const s = new Promise((n, o) => {
    const a = t.token.onCancellationRequested(() => {
      r = true, a.dispose(), o(new Le());
    });
    Promise.resolve(i).then((l) => {
      a.dispose(), t.dispose(), r ? Qn(l) && l.dispose() : n(l);
    }, (l) => {
      a.dispose(), t.dispose(), o(l);
    });
  });
  return new class {
    cancel() {
      t.cancel(), t.dispose();
    }
    then(n, o) {
      return s.then(n, o);
    }
    catch(n) {
      return this.then(void 0, n);
    }
    finally(n) {
      return s.finally(n);
    }
  }();
}
function Gp(e, t) {
  return new Promise((i, r) => {
    const s = t.onCancellationRequested(() => {
      s.dispose(), r(new Le());
    });
    e.then(i, r).finally(() => s.dispose());
  });
}
function Kp(e, t, i) {
  let r;
  const s = setTimeout(() => {
    r?.(void 0), i?.();
  }, t);
  return Promise.race([e.finally(() => clearTimeout(s)), new Promise((n) => r = n)]);
}
var eu = class {
  constructor() {
    this.isDisposed = false, this.activePromise = null, this.queuedPromise = null, this.queuedPromiseFactory = null;
  }
  queue(e) {
    if (this.isDisposed) return Promise.reject(new Error("Throttler is disposed"));
    if (this.activePromise) {
      if (this.queuedPromiseFactory = e, !this.queuedPromise) {
        const t = () => {
          if (this.queuedPromise = null, this.isDisposed) return;
          const i = this.queue(this.queuedPromiseFactory);
          return this.queuedPromiseFactory = null, i;
        };
        this.queuedPromise = new Promise((i) => {
          this.activePromise.then(t, t).then(i);
        });
      }
      return new Promise((t, i) => {
        this.queuedPromise.then(t, i);
      });
    }
    return this.activePromise = e(), new Promise((t, i) => {
      this.activePromise.then((r) => {
        this.activePromise = null, t(r);
      }, (r) => {
        this.activePromise = null, i(r);
      });
    });
  }
  dispose() {
    this.isDisposed = true;
  }
}, jp = class {
  constructor() {
    this.current = Promise.resolve(null);
  }
  queue(e) {
    return this.current = this.current.then(() => e(), () => e());
  }
}, Hp = (e, t) => {
  let i = true;
  const r = setTimeout(() => {
    i = false, t();
  }, e);
  return { isTriggered: () => i, dispose: () => {
    clearTimeout(r), i = false;
  } };
}, Xp = (e) => {
  let t = true;
  return queueMicrotask(() => {
    t && (t = false, e());
  }), { isTriggered: () => t, dispose: () => {
    t = false;
  } };
}, tu = class {
  constructor(e) {
    this.defaultDelay = e, this._isDisposed = false, this.deferred = null, this.completionPromise = null, this.doResolve = null, this.doReject = null, this.task = null;
  }
  trigger(e, t = this.defaultDelay) {
    if (this._isDisposed) return Promise.reject(new Le());
    this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((r, s) => {
      this.doResolve = r, this.doReject = s;
    }).then(() => {
      if (this.completionPromise = null, this.doResolve = null, this.task) {
        const r = this.task;
        return this.task = null, r();
      }
    }));
    const i = () => {
      this.deferred = null, this.doResolve?.(null);
    };
    return this.deferred = t === zp ? Xp(i) : Hp(t, i), this.completionPromise;
  }
  isTriggered() {
    return !!this.deferred?.isTriggered();
  }
  cancel() {
    this.cancelTimeout(), this.completionPromise && (this.doReject?.(new Le()), this.completionPromise = null);
  }
  cancelTimeout() {
    this.deferred?.dispose(), this.deferred = null;
  }
  dispose() {
    this._isDisposed = true, this.cancel();
  }
}, Li = class {
  constructor(e) {
    this.delayer = new tu(e), this.throttler = new eu();
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
}, iu = class {
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
};
function Nr(e, t) {
  return t ? new Promise((i, r) => {
    const s = setTimeout(() => {
      n.dispose(), i();
    }, e), n = t.onCancellationRequested(() => {
      clearTimeout(s), n.dispose(), r(new Le());
    });
  }) : Qt((i) => Nr(e, i));
}
var ru = class {
  constructor(e) {
    this._size = 0, this._isDisposed = false, this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onDrained = new M();
  }
  whenIdle() {
    return this.size > 0 ? ne.toPromise(this.onDrained) : Promise.resolve();
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
}, Fr = class extends ru {
  constructor() {
    super(1);
  }
}, su = class {
  constructor() {
    this.queues = /* @__PURE__ */ new Map(), this.drainers = /* @__PURE__ */ new Set(), this.drainListeners = void 0, this.drainListenerCount = 0, this._isDisposed = false;
  }
  async whenDrained() {
    if (this.isDrained()) return;
    const e = new vo();
    return this.drainers.add(e), e.p;
  }
  isDrained() {
    for (const [, e] of this.queues) if (e.size > 0) return false;
    return true;
  }
  queueSize(e, t = oe) {
    const i = t.getComparisonKey(e);
    return this.queues.get(i)?.size ?? 0;
  }
  queueFor(e, t, i = oe) {
    if (this._isDisposed) return t();
    const r = i.getComparisonKey(e);
    let s = this.queues.get(r);
    if (!s) {
      s = new Fr();
      const n = this.drainListenerCount++, o = ne.once(s.onDrained)(() => {
        s?.dispose(), this.queues.delete(r), this.onDidQueueDrain(), this.drainListeners?.deleteAndDispose(n), this.drainListeners?.size === 0 && (this.drainListeners.dispose(), this.drainListeners = void 0);
      });
      this.drainListeners || (this.drainListeners = new Rs()), this.drainListeners.set(n, o), this.queues.set(r, s);
    }
    return s.queue(t);
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
}, zs = class {
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
}, Qp = class extends zs {
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
}, nu = class extends X {
  constructor(e, t) {
    super(), this.options = e, this.handler = t, this.pendingWork = [], this.throttler = this._register(new li()), this.disposed = false, this.lastExecutionTime = 0;
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
    for (const i of e) this.pendingWork.push(i);
    const t = Date.now() - this.lastExecutionTime;
    return !this.throttler.value && (!this.options.waitThrottleDelayBetweenWorkUnits || t >= this.options.throttleDelay) ? this.doWork() : !this.throttler.value && this.options.waitThrottleDelayBetweenWorkUnits && this.scheduleThrottler(Math.max(this.options.throttleDelay - t, 0)), true;
  }
  doWork() {
    this.lastExecutionTime = Date.now(), this.handler(this.pendingWork.splice(0, this.options.maxWorkChunkSize)), this.pendingWork.length > 0 && this.scheduleThrottler();
  }
  scheduleThrottler(e = this.options.throttleDelay) {
    this.throttler.value = new zs(() => {
      this.throttler.clear(), this.doWork();
    }, e), this.throttler.value.schedule();
  }
  dispose() {
    super.dispose(), this.pendingWork.length = 0, this.disposed = true;
  }
}, ou, Gs;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? Gs = (e, t, i) => {
    x1(() => {
      if (r) return;
      const s = Date.now() + 15;
      t(Object.freeze({ didTimeout: true, timeRemaining() {
        return Math.max(0, s - Date.now());
      } }));
    });
    let r = false;
    return { dispose() {
      r || (r = true);
    } };
  } : Gs = (e, t, i) => {
    const r = e.requestIdleCallback(t, typeof i == "number" ? { timeout: i } : void 0);
    let s = false;
    return { dispose() {
      s || (s = true, e.cancelIdleCallback(r));
    } };
  }, ou = (e, t) => Gs(globalThis, e, t);
})();
var Jp = class {
  constructor(e, t) {
    this._didRun = false, this._executor = () => {
      try {
        this._value = t();
      } catch (i) {
        this._error = i;
      } finally {
        this._didRun = true;
      }
    }, this._handle = Gs(e, () => this._executor());
  }
  dispose() {
    this._handle.dispose();
  }
  get value() {
    if (this._didRun || (this._handle.dispose(), this._executor()), this._error) throw this._error;
    return this._value;
  }
  get isInitialized() {
    return this._didRun;
  }
}, Yp = class extends Jp {
  constructor(e) {
    super(globalThis, e);
  }
};
async function Zp(e, t, i) {
  let r;
  for (let s = 0; s < i; s++) try {
    return await e();
  } catch (n) {
    r = n, await Nr(t);
  }
  throw r;
}
var vo = class Xf {
  static fromPromise(t) {
    const i = new Xf();
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
    return this.error(new Le());
  }
}, ht;
((e) => {
  async function t(r) {
    let s;
    const n = await Promise.all(r.map((o) => o.then((a) => a, (a) => {
      s || (s = a);
    })));
    if (typeof s < "u") throw s;
    return n;
  }
  e.settled = t;
  function i(r) {
    return new Promise(async (s, n) => {
      try {
        await r(s, n);
      } catch (o) {
        n(o);
      }
    });
  }
  e.withAsyncBody = i;
})(ht || (ht = {}));
var au = class bt {
  static fromArray(t) {
    return new bt((i) => {
      i.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new bt(async (i) => {
      i.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new bt(async (i) => {
      await Promise.all(t.map(async (r) => i.emitOne(await r)));
    });
  }
  static merge(t) {
    return new bt(async (i) => {
      await Promise.all(t.map(async (r) => {
        for await (const s of r) i.emitOne(s);
      }));
    });
  }
  constructor(t, i) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = i, this._onStateChanged = new M(), queueMicrotask(async () => {
      const r = { emitOne: (s) => this.emitOne(s), emitMany: (s) => this.emitMany(s), reject: (s) => this.reject(s) };
      try {
        await Promise.resolve(t(r)), this.resolve();
      } catch (s) {
        this.reject(s);
      } finally {
        r.emitOne = void 0, r.emitMany = void 0, r.reject = void 0;
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
        await ne.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(t, i) {
    return new bt(async (r) => {
      for await (const s of t) r.emitOne(i(s));
    });
  }
  map(t) {
    return bt.map(this, t);
  }
  static filter(t, i) {
    return new bt(async (r) => {
      for await (const s of t) i(s) && r.emitOne(s);
    });
  }
  filter(t) {
    return bt.filter(this, t);
  }
  static coalesce(t) {
    return bt.filter(t, (i) => !!i);
  }
  coalesce() {
    return bt.coalesce(this);
  }
  static async toPromise(t) {
    const i = [];
    for await (const r of t) i.push(r);
    return i;
  }
  toPromise() {
    return bt.toPromise(this);
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
au.EMPTY = au.fromArray([]), b();
function yo(e, t) {
  return t && (e.stack || e.stacktrace) ? m(108, null, cu(e), lu(e.stack) || lu(e.stacktrace)) : cu(e);
}
function lu(e) {
  return Array.isArray(e) ? e.join(`
`) : e;
}
function cu(e) {
  return e.code === "ERR_UNC_HOST_NOT_ALLOWED" ? `${e.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.` : typeof e.code == "string" && typeof e.errno == "number" && typeof e.syscall == "string" ? m(109, null, e.message) : e.message || m(110, null);
}
function Ti(e = null, t = false) {
  if (!e) return m(111, null);
  if (Array.isArray(e)) {
    const i = Xi(e), r = Ti(i[0], t);
    return i.length > 1 ? m(112, null, r, i.length) : r;
  }
  if (Te(e)) return e;
  if (e.detail) {
    const i = e.detail;
    if (i.error) return yo(i.error, t);
    if (i.exception) return yo(i.exception, t);
  }
  return e.stack ? yo(e, t) : e.message ? e.message : m(113, null);
}
b(), b();
var At;
((e) => {
  e.serviceIds = /* @__PURE__ */ new Map(), e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
  function t(i) {
    return i[e.DI_DEPENDENCIES] || [];
  }
  e.getServiceDependencies = t;
})(At || (At = {}));
var Ks = ue("instantiationService");
function eg(e, t, i) {
  t[At.DI_TARGET] === t ? t[At.DI_DEPENDENCIES].push({ id: e, index: i }) : (t[At.DI_DEPENDENCIES] = [{ id: e, index: i }], t[At.DI_TARGET] = t);
}
function ue(e) {
  if (At.serviceIds.has(e)) return At.serviceIds.get(e);
  const t = function(i, r, s) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    eg(t, i, s);
  };
  return t.toString = () => e, At.serviceIds.set(e, t), t;
}
function yw(e) {
  return e;
}
var Jt = ue("configurationService");
function wo(e) {
  return e && typeof e == "object" && (!e.overrideIdentifier || typeof e.overrideIdentifier == "string") && (!e.resource || e.resource instanceof k);
}
function tg(e) {
  return e && typeof e == "object" && (!e.overrideIdentifiers || Array.isArray(e.overrideIdentifiers)) && !e.overrideIdentifier && (!e.resource || e.resource instanceof k);
}
function _o(e, t) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const r in e) uu(i, r, e[r], t);
  return i;
}
function uu(e, t, i, r) {
  const s = t.split("."), n = s.pop();
  let o = e;
  for (let a = 0; a < s.length; a++) {
    const l = s[a];
    let c = o[l];
    switch (typeof c) {
      case "undefined":
        c = o[l] = /* @__PURE__ */ Object.create(null);
        break;
      case "object":
        if (c === null) {
          r(`Ignoring ${t} as ${s.slice(0, a + 1).join(".")} is null`);
          return;
        }
        break;
      default:
        r(`Ignoring ${t} as ${s.slice(0, a + 1).join(".")} is ${JSON.stringify(c)}`);
        return;
    }
    o = c;
  }
  if (typeof o == "object" && o !== null) try {
    o[n] = i;
  } catch {
    r(`Ignoring ${t} as ${s.join(".")} is ${JSON.stringify(o)}`);
  }
  else r(`Ignoring ${t} as ${s.join(".")} is ${JSON.stringify(o)}`);
}
function ig(e, t) {
  const i = t.split(".");
  hu(e, i);
}
function hu(e, t) {
  if (!e) return;
  const i = t.shift();
  if (t.length === 0) {
    delete e[i];
    return;
  }
  if (Object.keys(e).indexOf(i) !== -1) {
    const r = e[i];
    typeof r == "object" && !Array.isArray(r) && (hu(r, t), Object.keys(r).length === 0 && delete e[i]);
  }
}
function js(e, t, i) {
  function r(o, a) {
    let l = o;
    for (const c of a) {
      if (typeof l != "object" || l === null) return;
      l = l[c];
    }
    return l;
  }
  const s = t.split("."), n = r(e, s);
  return typeof n > "u" ? i : n;
}
function rg(e) {
  return e.replace(/[\[\]]/g, "");
}
b(), b();
var Mr;
((e) => {
  e.DEFAULT = { allowTrailingComma: true };
})(Mr || (Mr = {}));
function fu(e, t = false) {
  let i = 0;
  const r = e.length;
  let s = "", n = 0, o = 16, a = 0;
  function l(y) {
    let E = 0, _ = 0;
    for (; E < y; ) {
      const I = e.charCodeAt(i);
      if (I >= 48 && I <= 57) _ = _ * 16 + I - 48;
      else if (I >= 65 && I <= 70) _ = _ * 16 + I - 65 + 10;
      else if (I >= 97 && I <= 102) _ = _ * 16 + I - 97 + 10;
      else break;
      i++, E++;
    }
    return E < y && (_ = -1), _;
  }
  function c(y) {
    i = y, s = "", n = 0, o = 16, a = 0;
  }
  function h() {
    const y = i;
    if (e.charCodeAt(i) === 48) i++;
    else for (i++; i < e.length && or(e.charCodeAt(i)); ) i++;
    if (i < e.length && e.charCodeAt(i) === 46) if (i++, i < e.length && or(e.charCodeAt(i))) for (i++; i < e.length && or(e.charCodeAt(i)); ) i++;
    else return a = 3, e.substring(y, i);
    let E = i;
    if (i < e.length && (e.charCodeAt(i) === 69 || e.charCodeAt(i) === 101)) if (i++, (i < e.length && e.charCodeAt(i) === 43 || e.charCodeAt(i) === 45) && i++, i < e.length && or(e.charCodeAt(i))) {
      for (i++; i < e.length && or(e.charCodeAt(i)); ) i++;
      E = i;
    } else a = 3;
    return e.substring(y, E);
  }
  function f() {
    let y = "", E = i;
    for (; ; ) {
      if (i >= r) {
        y += e.substring(E, i), a = 2;
        break;
      }
      const _ = e.charCodeAt(i);
      if (_ === 34) {
        y += e.substring(E, i), i++;
        break;
      }
      if (_ === 92) {
        if (y += e.substring(E, i), i++, i >= r) {
          a = 2;
          break;
        }
        switch (e.charCodeAt(i++)) {
          case 34:
            y += '"';
            break;
          case 92:
            y += "\\";
            break;
          case 47:
            y += "/";
            break;
          case 98:
            y += "\b";
            break;
          case 102:
            y += "\f";
            break;
          case 110:
            y += `
`;
            break;
          case 114:
            y += "\r";
            break;
          case 116:
            y += "	";
            break;
          case 117: {
            const D = l(4);
            D >= 0 ? y += String.fromCharCode(D) : a = 4;
            break;
          }
          default:
            a = 5;
        }
        E = i;
        continue;
      }
      if (_ >= 0 && _ <= 31) if (Hs(_)) {
        y += e.substring(E, i), a = 2;
        break;
      } else a = 6;
      i++;
    }
    return y;
  }
  function d() {
    if (s = "", a = 0, n = i, i >= r) return n = r, o = 17;
    let y = e.charCodeAt(i);
    if (Eo(y)) {
      do
        i++, s += String.fromCharCode(y), y = e.charCodeAt(i);
      while (Eo(y));
      return o = 15;
    }
    if (Hs(y)) return i++, s += String.fromCharCode(y), y === 13 && e.charCodeAt(i) === 10 && (i++, s += `
`), o = 14;
    switch (y) {
      case 123:
        return i++, o = 1;
      case 125:
        return i++, o = 2;
      case 91:
        return i++, o = 3;
      case 93:
        return i++, o = 4;
      case 58:
        return i++, o = 6;
      case 44:
        return i++, o = 5;
      case 34:
        return i++, s = f(), o = 10;
      case 47: {
        const E = i - 1;
        if (e.charCodeAt(i + 1) === 47) {
          for (i += 2; i < r && !Hs(e.charCodeAt(i)); ) i++;
          return s = e.substring(E, i), o = 12;
        }
        if (e.charCodeAt(i + 1) === 42) {
          i += 2;
          const _ = r - 1;
          let I = false;
          for (; i < _; ) {
            if (e.charCodeAt(i) === 42 && e.charCodeAt(i + 1) === 47) {
              i += 2, I = true;
              break;
            }
            i++;
          }
          return I || (i++, a = 1), s = e.substring(E, i), o = 13;
        }
        return s += String.fromCharCode(y), i++, o = 16;
      }
      case 45:
        if (s += String.fromCharCode(y), i++, i === r || !or(e.charCodeAt(i))) return o = 16;
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return s += h(), o = 11;
      default:
        for (; i < r && p(y); ) i++, y = e.charCodeAt(i);
        if (n !== i) {
          switch (s = e.substring(n, i), s) {
            case "true":
              return o = 8;
            case "false":
              return o = 9;
            case "null":
              return o = 7;
          }
          return o = 16;
        }
        return s += String.fromCharCode(y), i++, o = 16;
    }
  }
  function p(y) {
    if (Eo(y) || Hs(y)) return false;
    switch (y) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return false;
    }
    return true;
  }
  function v() {
    let y;
    do
      y = d();
    while (y >= 12 && y <= 15);
    return y;
  }
  return { setPosition: c, getPosition: () => i, scan: t ? v : d, getToken: () => o, getTokenValue: () => s, getTokenOffset: () => n, getTokenLength: () => i - n, getTokenError: () => a };
}
function Eo(e) {
  return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function Hs(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function or(e) {
  return e >= 48 && e <= 57;
}
function Vr(e, t = [], i = Mr.DEFAULT) {
  let r = null, s = [];
  const n = [];
  function o(l) {
    Array.isArray(s) ? s.push(l) : r !== null && (s[r] = l);
  }
  return Xs(e, { onObjectBegin: () => {
    const l = {};
    o(l), n.push(s), s = l, r = null;
  }, onObjectProperty: (l) => {
    r = l;
  }, onObjectEnd: () => {
    s = n.pop();
  }, onArrayBegin: () => {
    const l = [];
    o(l), n.push(s), s = l, r = null;
  }, onArrayEnd: () => {
    s = n.pop();
  }, onLiteralValue: o, onError: (l, c, h) => {
    t.push({ error: l, offset: c, length: h });
  } }, i), s[0];
}
function sg(e, t = [], i = Mr.DEFAULT) {
  let r = { type: "array", offset: -1, length: -1, children: [], parent: void 0 };
  function s(l) {
    r.type === "property" && (r.length = l - r.offset, r = r.parent);
  }
  function n(l) {
    return r.children.push(l), l;
  }
  Xs(e, { onObjectBegin: (l) => {
    r = n({ type: "object", offset: l, length: -1, parent: r, children: [] });
  }, onObjectProperty: (l, c, h) => {
    r = n({ type: "property", offset: c, length: -1, parent: r, children: [] }), r.children.push({ type: "string", value: l, offset: c, length: h, parent: r });
  }, onObjectEnd: (l, c) => {
    r.length = l + c - r.offset, r = r.parent, s(l + c);
  }, onArrayBegin: (l, c) => {
    r = n({ type: "array", offset: l, length: -1, parent: r, children: [] });
  }, onArrayEnd: (l, c) => {
    r.length = l + c - r.offset, r = r.parent, s(l + c);
  }, onLiteralValue: (l, c, h) => {
    n({ type: Wr(l), offset: c, length: h, parent: r, value: l }), s(c + h);
  }, onSeparator: (l, c, h) => {
    r.type === "property" && (l === ":" ? r.colonOffset = c : l === "," && s(c));
  }, onError: (l, c, h) => {
    t.push({ error: l, offset: c, length: h });
  } }, i);
  const a = r.children[0];
  return a && delete a.parent, a;
}
function du(e, t) {
  if (!e) return;
  let i = e;
  for (const r of t) if (typeof r == "string") {
    if (i.type !== "object" || !Array.isArray(i.children)) return;
    let s = false;
    for (const n of i.children) if (Array.isArray(n.children) && n.children[0].value === r) {
      i = n.children[1], s = true;
      break;
    }
    if (!s) return;
  } else {
    const s = r;
    if (i.type !== "array" || s < 0 || !Array.isArray(i.children) || s >= i.children.length) return;
    i = i.children[s];
  }
  return i;
}
function Xs(e, t, i = Mr.DEFAULT) {
  const r = fu(e, false);
  function s(T) {
    return T ? () => T(r.getTokenOffset(), r.getTokenLength()) : () => true;
  }
  function n(T) {
    return T ? (ie) => T(ie, r.getTokenOffset(), r.getTokenLength()) : () => true;
  }
  const o = s(t.onObjectBegin), a = n(t.onObjectProperty), l = s(t.onObjectEnd), c = s(t.onArrayBegin), h = s(t.onArrayEnd), f = n(t.onLiteralValue), d = n(t.onSeparator), p = s(t.onComment), v = n(t.onError), y = i && i.disallowComments, E = i && i.allowTrailingComma;
  function _() {
    for (; ; ) {
      const T = r.scan();
      switch (r.getTokenError()) {
        case 4:
          I(14);
          break;
        case 5:
          I(15);
          break;
        case 3:
          I(13);
          break;
        case 1:
          y || I(11);
          break;
        case 2:
          I(12);
          break;
        case 6:
          I(16);
          break;
      }
      switch (T) {
        case 12:
        case 13:
          y ? I(10) : p();
          break;
        case 16:
          I(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return T;
      }
    }
  }
  function I(T, ie = [], Me = []) {
    if (v(T), ie.length + Me.length > 0) {
      let B = r.getToken();
      for (; B !== 17; ) {
        if (ie.indexOf(B) !== -1) {
          _();
          break;
        } else if (Me.indexOf(B) !== -1) break;
        B = _();
      }
    }
  }
  function D(T) {
    const ie = r.getTokenValue();
    return T ? f(ie) : a(ie), _(), true;
  }
  function W() {
    switch (r.getToken()) {
      case 11: {
        let T = 0;
        try {
          T = JSON.parse(r.getTokenValue()), typeof T != "number" && (I(2), T = 0);
        } catch {
          I(2);
        }
        f(T);
        break;
      }
      case 7:
        f(null);
        break;
      case 8:
        f(true);
        break;
      case 9:
        f(false);
        break;
      default:
        return false;
    }
    return _(), true;
  }
  function R() {
    return r.getToken() !== 10 ? (I(3, [], [2, 5]), false) : (D(false), r.getToken() === 6 ? (d(":"), _(), Z() || I(4, [], [2, 5])) : I(5, [], [2, 5]), true);
  }
  function C() {
    o(), _();
    let T = false;
    for (; r.getToken() !== 2 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (T || I(4, [], []), d(","), _(), r.getToken() === 2 && E) break;
      } else T && I(6, [], []);
      R() || I(4, [], [2, 5]), T = true;
    }
    return l(), r.getToken() !== 2 ? I(7, [2], []) : _(), true;
  }
  function F() {
    c(), _();
    let T = false;
    for (; r.getToken() !== 4 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (T || I(4, [], []), d(","), _(), r.getToken() === 4 && E) break;
      } else T && I(6, [], []);
      Z() || I(4, [], [4, 5]), T = true;
    }
    return h(), r.getToken() !== 4 ? I(8, [4], []) : _(), true;
  }
  function Z() {
    switch (r.getToken()) {
      case 3:
        return F();
      case 1:
        return C();
      case 10:
        return D(true);
      default:
        return W();
    }
  }
  return _(), r.getToken() === 17 ? i.allowEmptyContent ? true : (I(4, [], []), false) : Z() ? (r.getToken() !== 17 && I(9, [], []), true) : (I(4, [], []), false);
}
function Wr(e) {
  switch (typeof e) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object": {
      if (e) {
        if (Array.isArray(e)) return "array";
      } else return "null";
      return "object";
    }
    default:
      return "null";
  }
}
b(), b();
function ng(e, t, i) {
  let r, s, n, o, a;
  if (t) {
    for (o = t.offset, a = o + t.length, n = o; n > 0 && !Qs(e, n - 1); ) n--;
    let D = a;
    for (; D < e.length && !Qs(e, D); ) D++;
    s = e.substring(n, D), r = og(s, i);
  } else s = e, r = 0, n = 0, o = 0, a = e.length;
  const l = ag(i, e);
  let c = false, h = 0, f;
  i.insertSpaces ? f = So(" ", i.tabSize || 4) : f = "	";
  const d = fu(s, false);
  let p = false;
  function v() {
    return l + So(f, r + h);
  }
  function y() {
    let D = d.scan();
    for (c = false; D === 15 || D === 14; ) c = c || D === 14, D = d.scan();
    return p = D === 16 || d.getTokenError() !== 0, D;
  }
  const E = [];
  function _(D, W, R) {
    !p && W < a && R > o && e.substring(W, R) !== D && E.push({ offset: W, length: R - W, content: D });
  }
  let I = y();
  if (I !== 17) {
    const D = d.getTokenOffset() + n, W = So(f, r);
    _(W, n, D);
  }
  for (; I !== 17; ) {
    let D = d.getTokenOffset() + d.getTokenLength() + n, W = y(), R = "";
    for (; !c && (W === 12 || W === 13); ) {
      const F = d.getTokenOffset() + n;
      _(" ", D, F), D = d.getTokenOffset() + d.getTokenLength() + n, R = W === 12 ? v() : "", W = y();
    }
    if (W === 2) I !== 1 && (h--, R = v());
    else if (W === 4) I !== 3 && (h--, R = v());
    else {
      switch (I) {
        case 3:
        case 1:
          h++, R = v();
          break;
        case 5:
        case 12:
          R = v();
          break;
        case 13:
          c ? R = v() : R = " ";
          break;
        case 6:
          R = " ";
          break;
        case 10:
          if (W === 6) {
            R = "";
            break;
          }
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          W === 12 || W === 13 ? R = " " : W !== 5 && W !== 17 && (p = true);
          break;
        case 16:
          p = true;
          break;
      }
      c && (W === 12 || W === 13) && (R = v());
    }
    const C = d.getTokenOffset() + n;
    _(R, D, C), I = W;
  }
  return E;
}
function So(e, t) {
  let i = "";
  for (let r = 0; r < t; r++) i += e;
  return i;
}
function og(e, t) {
  let i = 0, r = 0;
  const s = t.tabSize || 4;
  for (; i < e.length; ) {
    const n = e.charAt(i);
    if (n === " ") r++;
    else if (n === "	") r += s;
    else break;
    i++;
  }
  return Math.floor(r / s);
}
function ag(e, t) {
  for (let i = 0; i < t.length; i++) {
    const r = t.charAt(i);
    if (r === "\r") return i + 1 < t.length && t.charAt(i + 1) === `
` ? `\r
` : "\r";
    if (r === `
`) return `
`;
  }
  return e && e.eol || `
`;
}
function Qs(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}
function lg(e, t, i, r, s) {
  const n = t.slice(), a = sg(e, []);
  let l, c;
  for (; n.length > 0 && (c = n.pop(), l = du(a, n), l === void 0 && i !== void 0); ) typeof c == "string" ? i = { [c]: i } : i = [i];
  if (l) if (l.type === "object" && typeof c == "string" && Array.isArray(l.children)) {
    const h = du(l, [c]);
    if (h !== void 0) if (i === void 0) {
      if (!h.parent) throw new Error("Malformed AST");
      const f = l.children.indexOf(h.parent);
      let d, p = h.parent.offset + h.parent.length;
      if (f > 0) {
        const v = l.children[f - 1];
        d = v.offset + v.length;
      } else d = l.offset + 1, l.children.length > 1 && (p = l.children[1].offset);
      return ar(e, { offset: d, length: p - d, content: "" }, r);
    } else return ar(e, { offset: h.offset, length: h.length, content: JSON.stringify(i) }, r);
    else {
      if (i === void 0) return [];
      const f = `${JSON.stringify(c)}: ${JSON.stringify(i)}`, d = s ? s(l.children.map((v) => v.children[0].value)) : l.children.length;
      let p;
      if (d > 0) {
        const v = l.children[d - 1];
        p = { offset: v.offset + v.length, length: 0, content: "," + f };
      } else l.children.length === 0 ? p = { offset: l.offset + 1, length: 0, content: f } : p = { offset: l.offset + 1, length: 0, content: f + "," };
      return ar(e, p, r);
    }
  } else if (l.type === "array" && typeof c == "number" && Array.isArray(l.children)) if (i !== void 0) {
    const h = `${JSON.stringify(i)}`;
    let f;
    if (l.children.length === 0 || c === 0) f = { offset: l.offset + 1, length: 0, content: l.children.length === 0 ? h : h + "," };
    else {
      const d = c === -1 || c > l.children.length ? l.children.length : c, p = l.children[d - 1];
      f = { offset: p.offset + p.length, length: 0, content: "," + h };
    }
    return ar(e, f, r);
  } else {
    const h = c, f = l.children[h];
    let d;
    if (l.children.length === 1) d = { offset: l.offset + 1, length: l.length - 2, content: "" };
    else if (l.children.length - 1 === h) {
      const p = l.children[h - 1], v = p.offset + p.length, y = l.offset + l.length;
      d = { offset: v, length: y - 2 - v, content: "" };
    } else d = { offset: f.offset, length: l.children[h + 1].offset - f.offset, content: "" };
    return ar(e, d, r);
  }
  else throw new Error(`Can not add ${typeof c != "number" ? "index" : "property"} to parent of type ${l.type}`);
  else return i === void 0 ? [] : ar(e, { offset: a ? a.offset : 0, length: a ? a.length : 0, content: JSON.stringify(i) }, r);
}
function ar(e, t, i) {
  let r = bo(e, t), s = t.offset, n = t.offset + t.content.length;
  if (t.length === 0 || t.content.length === 0) {
    for (; s > 0 && !Qs(r, s - 1); ) s--;
    for (; n < r.length && !Qs(r, n); ) n++;
  }
  const o = ng(r, { offset: s, length: n - s }, i);
  for (let l = o.length - 1; l >= 0; l--) {
    const c = o[l];
    r = bo(r, c), s = Math.min(s, c.offset), n = Math.max(n, c.offset + c.length), n += c.content.length - c.length;
  }
  const a = e.length - (r.length - n) - s;
  return [{ offset: s, length: a, content: r.substring(s, n) }];
}
function bo(e, t) {
  return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
}
function cg(e, t) {
  const i = t.slice(0).sort((s, n) => {
    const o = s.offset - n.offset;
    return o === 0 ? s.length - n.length : o;
  });
  let r = e.length;
  for (let s = i.length - 1; s >= 0; s--) {
    const n = i[s];
    if (n.offset + n.length <= r) e = bo(e, n);
    else throw new Error("Overlapping edit");
    r = n.offset;
  }
  return e;
}
b();
function Yt(e) {
  if (!e || typeof e != "object" || e instanceof RegExp) return e;
  const t = Array.isArray(e) ? [] : {};
  return Object.entries(e).forEach(([i, r]) => {
    t[i] = r && typeof r == "object" ? Yt(r) : r;
  }), t;
}
function ug(e) {
  if (!e || typeof e != "object") return e;
  const t = [e];
  for (; t.length > 0; ) {
    const i = t.shift();
    Object.freeze(i);
    for (const r in i) if (pu.call(i, r)) {
      const s = i[r];
      typeof s == "object" && !Object.isFrozen(s) && !Kd(s) && t.push(s);
    }
  }
  return e;
}
var pu = Object.prototype.hasOwnProperty;
function hg(e, t) {
  return xo(e, t, /* @__PURE__ */ new Set());
}
function xo(e, t, i) {
  if (Ze(e)) return e;
  const r = t(e);
  if (typeof r < "u") return r;
  if (Array.isArray(e)) {
    const s = [];
    for (const n of e) s.push(xo(n, t, i));
    return s;
  }
  if (Ne(e)) {
    if (i.has(e)) throw new Error("Cannot clone recursive data-structure");
    i.add(e);
    const s = {};
    for (const n in e) pu.call(e, n) && (s[n] = xo(e[n], t, i));
    return i.delete(e), s;
  }
  return e;
}
function $r(e, t, i = true) {
  return Ne(e) ? (Ne(t) && Object.keys(t).forEach((r) => {
    r in e ? i && (Ne(e[r]) && Ne(t[r]) ? $r(e[r], t[r], i) : e[r] = t[r]) : e[r] = t[r];
  }), e) : t;
}
function Nt(e, t) {
  if (e === t) return true;
  if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t)) return false;
  let i, r;
  if (Array.isArray(e)) {
    if (e.length !== t.length) return false;
    for (i = 0; i < e.length; i++) if (!Nt(e[i], t[i])) return false;
  } else {
    const s = [];
    for (r in e) s.push(r);
    s.sort();
    const n = [];
    for (r in t) n.push(r);
    if (n.sort(), !Nt(s, n)) return false;
    for (i = 0; i < s.length; i++) if (!Nt(e[s[i]], t[s[i]])) return false;
  }
  return true;
}
b(), b(), b(), b();
function fg(e) {
  let t = false;
  const i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  if (dg(e, (h) => {
    if (e === h) return true;
    const f = JSON.stringify(h);
    if (f.length < 30) return true;
    const d = i.get(f);
    if (!d) {
      const p = { schemas: [h] };
      return i.set(f, p), r.set(h, p), true;
    }
    return d.schemas.push(h), r.set(h, d), t = true, false;
  }), i.clear(), !t) return JSON.stringify(e);
  let n = "$defs";
  for (; e.hasOwnProperty(n); ) n += "_";
  const o = [];
  function a(h) {
    return JSON.stringify(h, (f, d) => {
      if (d !== h) {
        const p = r.get(d);
        if (p && p.schemas.length > 1) return p.id || (p.id = `_${o.length}`, o.push(p.schemas[0])), { $ref: `#/${n}/${p.id}` };
      }
      return d;
    });
  }
  const l = a(e), c = [];
  for (let h = 0; h < o.length; h++) c.push(`"_${h}":${a(o[h])}`);
  return c.length ? `${l.substring(0, l.length - 1)},"${n}":{${c.join(",")}}}` : l;
}
function lr(e) {
  return typeof e == "object" && e !== null;
}
function dg(e, t) {
  if (!e || typeof e != "object") return;
  const i = (...l) => {
    for (const c of l) lr(c) && o.push(c);
  }, r = (...l) => {
    for (const c of l) if (lr(c)) for (const h in c) {
      const f = c[h];
      lr(f) && o.push(f);
    }
  }, s = (...l) => {
    for (const c of l) if (Array.isArray(c)) for (const h of c) lr(h) && o.push(h);
  }, n = (l) => {
    if (Array.isArray(l)) for (const c of l) lr(c) && o.push(c);
    else lr(l) && o.push(l);
  }, o = [e];
  let a = o.pop();
  for (; a; ) t(a) && (i(a.additionalItems, a.additionalProperties, a.not, a.contains, a.propertyNames, a.if, a.then, a.else, a.unevaluatedItems, a.unevaluatedProperties), r(a.definitions, a.$defs, a.properties, a.patternProperties, a.dependencies, a.dependentSchemas), s(a.anyOf, a.allOf, a.oneOf, a.prefixItems), n(a.items)), a = o.pop();
}
b();
var pg = class {
  constructor() {
    this.data = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    Kn(Te(e)), Kn(Ne(t)), Kn(!this.data.has(e), "There is already an extension with this id"), this.data.set(e, t);
  }
  knows(e) {
    return this.data.has(e);
  }
  as(e) {
    return this.data.get(e) || null;
  }
  dispose() {
    this.data.forEach((e) => {
      Qd(e.dispose) && e.dispose();
    }), this.data.clear();
  }
}, Ft = new pg(), gu = { JSONContribution: "base.contributions.json" };
function mu(e) {
  return e.length > 0 && e.charAt(e.length - 1) === "#" ? e.substring(0, e.length - 1) : e;
}
var gg = class extends X {
  constructor() {
    super(...arguments), this.schemasById = {}, this.schemaAssociations = {}, this._onDidChangeSchema = this._register(new M()), this.onDidChangeSchema = this._onDidChangeSchema.event, this._onDidChangeSchemaAssociations = this._register(new M()), this.onDidChangeSchemaAssociations = this._onDidChangeSchemaAssociations.event;
  }
  registerSchema(e, t, i) {
    const r = mu(e);
    this.schemasById[r] = t, this._onDidChangeSchema.fire(e), i && i.add(Ee(() => {
      delete this.schemasById[r], this._onDidChangeSchema.fire(e);
    }));
  }
  registerSchemaAssociation(e, t) {
    const i = mu(e);
    return this.schemaAssociations[i] || (this.schemaAssociations[i] = []), this.schemaAssociations[i].includes(t) || (this.schemaAssociations[i].push(t), this._onDidChangeSchemaAssociations.fire()), Ee(() => {
      const r = this.schemaAssociations[i];
      if (r) {
        const s = r.indexOf(t);
        s !== -1 && (r.splice(s, 1), r.length === 0 && delete this.schemaAssociations[i], this._onDidChangeSchemaAssociations.fire());
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
    return t ? fg(t) : void 0;
  }
  hasSchemaContent(e) {
    return !!this.schemasById[e];
  }
  getSchemaAssociations() {
    return this.schemaAssociations;
  }
}, mg = new gg();
Ft.add(gu.JSONContribution, mg);
var di = { Configuration: "base.contributions.configuration" }, Js = { properties: {}, patternProperties: {} }, Ys = { properties: {}, patternProperties: {} }, Zs = { properties: {}, patternProperties: {} }, en = { properties: {}, patternProperties: {} }, tn = { properties: {}, patternProperties: {} }, rn = { properties: {}, patternProperties: {} }, Br = { properties: {}, patternProperties: {} }, Ci = "vscode://schemas/settings/resourceLanguage", sn = Ft.as(gu.JSONContribution), vg = class extends X {
  constructor() {
    super(), this.registeredConfigurationDefaults = [], this.overrideIdentifiers = /* @__PURE__ */ new Set(), this._onDidSchemaChange = this._register(new M()), this.onDidSchemaChange = this._onDidSchemaChange.event, this._onDidUpdateConfiguration = this._register(new M()), this.onDidUpdateConfiguration = this._onDidUpdateConfiguration.event, this.configurationDefaultsOverrides = /* @__PURE__ */ new Map(), this.defaultLanguageConfigurationOverridesNode = { id: "defaultOverrides", title: m(1807, null), properties: {} }, this.configurationContributors = [this.defaultLanguageConfigurationOverridesNode], this.resourceLanguageSettingsSchema = { properties: {}, patternProperties: {}, additionalProperties: true, allowTrailingCommas: true, allowComments: true }, this.configurationProperties = {}, this.policyConfigurations = /* @__PURE__ */ new Map(), this.excludedConfigurationProperties = {}, sn.registerSchema(Ci, this.resourceLanguageSettingsSchema), this.registerOverridePropertyPatternKey();
  }
  registerConfiguration(e, t = true) {
    return this.registerConfigurations([e], t), e;
  }
  registerConfigurations(e, t = true) {
    const i = /* @__PURE__ */ new Set();
    this.doRegisterConfigurations(e, t, i), sn.registerSchema(Ci, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({ properties: i });
  }
  deregisterConfigurations(e) {
    const t = /* @__PURE__ */ new Set();
    this.doDeregisterConfigurations(e, t), sn.registerSchema(Ci, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({ properties: t });
  }
  updateConfigurations({ add: e, remove: t }) {
    const i = /* @__PURE__ */ new Set();
    this.doDeregisterConfigurations(t, i), this.doRegisterConfigurations(e, false, i), sn.registerSchema(Ci, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({ properties: i });
  }
  registerDefaultConfigurations(e) {
    const t = /* @__PURE__ */ new Set();
    this.doRegisterDefaultConfigurations(e, t), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({ properties: t, defaultsOverrides: true });
  }
  doRegisterDefaultConfigurations(e, t) {
    this.registeredConfigurationDefaults.push(...e);
    const i = [];
    for (const { overrides: r, source: s } of e) for (const n in r) {
      t.add(n);
      const o = this.configurationDefaultsOverrides.get(n) ?? this.configurationDefaultsOverrides.set(n, { configurationDefaultOverrides: [] }).get(n), a = r[n];
      if (o.configurationDefaultOverrides.push({ value: a, source: s }), Zt.test(n)) {
        const l = this.mergeDefaultConfigurationsForOverrideIdentifier(n, a, s, o.configurationDefaultOverrideValue);
        if (!l) continue;
        o.configurationDefaultOverrideValue = l, this.updateDefaultOverrideProperty(n, l, s), i.push(...qr(n));
      } else {
        const l = this.mergeDefaultConfigurationsForConfigurationProperty(n, a, s, o.configurationDefaultOverrideValue);
        if (!l) continue;
        o.configurationDefaultOverrideValue = l;
        const c = this.configurationProperties[n];
        c && (this.updatePropertyDefaultValue(n, c), this.updateSchema(n, c));
      }
    }
    this.doRegisterOverrideIdentifiers(i);
  }
  deregisterDefaultConfigurations(e) {
    const t = /* @__PURE__ */ new Set();
    this.doDeregisterDefaultConfigurations(e, t), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({ properties: t, defaultsOverrides: true });
  }
  doDeregisterDefaultConfigurations(e, t) {
    for (const i of e) {
      const r = this.registeredConfigurationDefaults.indexOf(i);
      r !== -1 && this.registeredConfigurationDefaults.splice(r, 1);
    }
    for (const { overrides: i, source: r } of e) for (const s in i) {
      const n = this.configurationDefaultsOverrides.get(s);
      if (!n) continue;
      const o = n.configurationDefaultOverrides.findIndex((a) => r ? a.source?.id === r.id : a.value === i[s]);
      if (o !== -1) {
        if (n.configurationDefaultOverrides.splice(o, 1), n.configurationDefaultOverrides.length === 0 && this.configurationDefaultsOverrides.delete(s), Zt.test(s)) {
          let a;
          for (const l of n.configurationDefaultOverrides) a = this.mergeDefaultConfigurationsForOverrideIdentifier(s, l.value, l.source, a);
          a && !Jl(a.value) ? (n.configurationDefaultOverrideValue = a, this.updateDefaultOverrideProperty(s, a, r)) : (this.configurationDefaultsOverrides.delete(s), delete this.configurationProperties[s], delete this.defaultLanguageConfigurationOverridesNode.properties[s]);
        } else {
          let a;
          for (const c of n.configurationDefaultOverrides) a = this.mergeDefaultConfigurationsForConfigurationProperty(s, c.value, c.source, a);
          n.configurationDefaultOverrideValue = a;
          const l = this.configurationProperties[s];
          l && (this.updatePropertyDefaultValue(s, l), this.updateSchema(s, l));
        }
        t.add(s);
      }
    }
    this.updateOverridePropertyPatternKey();
  }
  updateDefaultOverrideProperty(e, t, i) {
    const r = { type: "object", default: t.value, description: m(1808, null, rg(e)), $ref: Ci, defaultDefaultValue: t.value, source: i, defaultValueSource: i };
    this.configurationProperties[e] = r, this.defaultLanguageConfigurationOverridesNode.properties[e] = r;
  }
  mergeDefaultConfigurationsForOverrideIdentifier(e, t, i, r) {
    const s = r?.value || {}, n = r?.source ?? /* @__PURE__ */ new Map();
    if (!(n instanceof Map)) {
      console.error("objectConfigurationSources is not a Map");
      return;
    }
    for (const o of Object.keys(t)) {
      const a = t[o];
      if (Ne(a) && (_t(s[o]) || Ne(s[o]))) {
        if (s[o] = { ...s[o] ?? {}, ...a }, i) for (const c in a) n.set(`${o}.${c}`, i);
      } else s[o] = a, i ? n.set(o, i) : n.delete(o);
    }
    return { value: s, source: n };
  }
  mergeDefaultConfigurationsForConfigurationProperty(e, t, i, r) {
    const s = this.configurationProperties[e], n = r?.value ?? s?.defaultDefaultValue;
    let o = i;
    if (Ne(t) && (s !== void 0 && s.type === "object" || s === void 0 && (_t(n) || Ne(n)))) {
      if (o = r?.source ?? /* @__PURE__ */ new Map(), !(o instanceof Map)) {
        console.error("defaultValueSource is not a Map");
        return;
      }
      for (const l in t) i && o.set(`${e}.${l}`, i);
      t = { ...Ne(n) ? n : {}, ...t };
    }
    return { value: t, source: o };
  }
  deltaConfiguration(e) {
    let t = false;
    const i = /* @__PURE__ */ new Set();
    e.removedDefaults && (this.doDeregisterDefaultConfigurations(e.removedDefaults, i), t = true), e.addedDefaults && (this.doRegisterDefaultConfigurations(e.addedDefaults, i), t = true), e.removedConfigurations && this.doDeregisterConfigurations(e.removedConfigurations, i), e.addedConfigurations && this.doRegisterConfigurations(e.addedConfigurations, false, i), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({ properties: i, defaultsOverrides: t });
  }
  notifyConfigurationSchemaUpdated(...e) {
    this._onDidSchemaChange.fire();
  }
  registerOverrideIdentifiers(e) {
    this.doRegisterOverrideIdentifiers(e), this._onDidSchemaChange.fire();
  }
  doRegisterOverrideIdentifiers(e) {
    for (const t of e) this.overrideIdentifiers.add(t);
    this.updateOverridePropertyPatternKey();
  }
  doRegisterConfigurations(e, t, i) {
    e.forEach((r) => {
      this.validateAndRegisterProperties(r, t, r.extensionInfo, r.restrictedProperties, void 0, i), this.configurationContributors.push(r), this.registerJSONConfiguration(r);
    });
  }
  doDeregisterConfigurations(e, t) {
    const i = (r) => {
      if (r.properties) for (const s in r.properties) {
        t.add(s);
        const n = this.configurationProperties[s];
        n?.policy?.name && this.policyConfigurations.delete(n.policy.name), delete this.configurationProperties[s], this.removeFromSchema(s, r.properties[s]);
      }
      r.allOf?.forEach((s) => i(s));
    };
    for (const r of e) {
      i(r);
      const s = this.configurationContributors.indexOf(r);
      s !== -1 && this.configurationContributors.splice(s, 1);
    }
  }
  validateAndRegisterProperties(e, t = true, i, r, s = 4, n) {
    s = Ze(e.scope) ? s : e.scope;
    const o = e.properties;
    if (o) for (const l in o) {
      const c = o[l];
      if (t && Eg(l, c)) {
        delete o[l];
        continue;
      }
      c.source = i, c.defaultDefaultValue = o[l].default, this.updatePropertyDefaultValue(l, c), Zt.test(l) ? c.scope = void 0 : (c.scope = Ze(c.scope) ? s : c.scope, c.restricted = Ze(c.restricted) ? !!r?.includes(l) : c.restricted);
      const h = o[l].hasOwnProperty("included") && !o[l].included, f = o[l].policy?.name;
      h ? (this.excludedConfigurationProperties[l] = o[l], f && (this.policyConfigurations.set(f, l), n.add(l)), delete o[l]) : (n.add(l), f && this.policyConfigurations.set(f, l), this.configurationProperties[l] = o[l], !o[l].deprecationMessage && o[l].markdownDeprecationMessage && (o[l].deprecationMessage = o[l].markdownDeprecationMessage));
    }
    const a = e.allOf;
    if (a) for (const l of a) this.validateAndRegisterProperties(l, t, i, r, s, n);
  }
  getConfigurations() {
    return this.configurationContributors;
  }
  getConfigurationProperties() {
    return this.configurationProperties;
  }
  getPolicyConfigurations() {
    return this.policyConfigurations;
  }
  getExcludedConfigurationProperties() {
    return this.excludedConfigurationProperties;
  }
  getRegisteredDefaultConfigurations() {
    return [...this.registeredConfigurationDefaults];
  }
  getConfigurationDefaultsOverrides() {
    const e = /* @__PURE__ */ new Map();
    for (const [t, i] of this.configurationDefaultsOverrides) i.configurationDefaultOverrideValue && e.set(t, i.configurationDefaultOverrideValue);
    return e;
  }
  registerJSONConfiguration(e) {
    const t = (i) => {
      const r = i.properties;
      if (r) for (const n in r) this.updateSchema(n, r[n]);
      i.allOf?.forEach(t);
    };
    t(e);
  }
  updateSchema(e, t) {
    switch (Js.properties[e] = t, t.scope) {
      case 1:
        Ys.properties[e] = t;
        break;
      case 2:
        en.properties[e] = t;
        break;
      case 3:
        Zs.properties[e] = t;
        break;
      case 7:
        tn.properties[e] = t;
        break;
      case 4:
        rn.properties[e] = t;
        break;
      case 5:
        Br.properties[e] = t;
        break;
      case 6:
        Br.properties[e] = t, this.resourceLanguageSettingsSchema.properties[e] = t;
        break;
    }
  }
  removeFromSchema(e, t) {
    switch (delete Js.properties[e], t.scope) {
      case 1:
        delete Ys.properties[e];
        break;
      case 2:
        delete en.properties[e];
        break;
      case 3:
        delete Zs.properties[e];
        break;
      case 7:
        delete tn.properties[e];
        break;
      case 4:
        delete rn.properties[e];
        break;
      case 5:
      case 6:
        delete Br.properties[e], delete this.resourceLanguageSettingsSchema.properties[e];
        break;
    }
  }
  updateOverridePropertyPatternKey() {
    for (const e of this.overrideIdentifiers.values()) {
      const t = `[${e}]`, i = { type: "object", description: m(1809, null), errorMessage: m(1810, null), $ref: Ci };
      this.updatePropertyDefaultValue(t, i), Js.properties[t] = i, Ys.properties[t] = i, Zs.properties[t] = i, en.properties[t] = i, tn.properties[t] = i, rn.properties[t] = i, Br.properties[t] = i;
    }
  }
  registerOverridePropertyPatternKey() {
    const e = { type: "object", description: m(1811, null), errorMessage: m(1812, null), $ref: Ci };
    Js.patternProperties[pi] = e, Ys.patternProperties[pi] = e, Zs.patternProperties[pi] = e, en.patternProperties[pi] = e, tn.patternProperties[pi] = e, rn.patternProperties[pi] = e, Br.patternProperties[pi] = e, this._onDidSchemaChange.fire();
  }
  updatePropertyDefaultValue(e, t) {
    const i = this.configurationDefaultsOverrides.get(e)?.configurationDefaultOverrideValue;
    let r, s;
    i && (!t.disallowConfigurationDefault || !i.source) && (r = i.value, s = i.source), _t(r) && (r = t.defaultDefaultValue, s = void 0), _t(r) && (r = _g(t.type)), t.default = r, t.defaultValueSource = s;
  }
}, vu = "\\[([^\\]]+)\\]", yu = new RegExp(vu, "g"), pi = `^(${vu})+$`, Zt = new RegExp(pi), wu = "glob:";
function _u(e) {
  return e.startsWith(wu);
}
function yg(e) {
  return _u(e) ? e.substring(wu.length) : null;
}
function qr(e) {
  const t = [];
  if (Zt.test(e)) {
    let i = yu.exec(e);
    for (; i?.length; ) {
      const r = i[1].trim();
      r && t.push(r), i = yu.exec(e);
    }
  }
  return $t(t);
}
function wg(e) {
  return e.reduce((t, i) => `${t}[${i}]`, "");
}
function _g(e) {
  switch (Array.isArray(e) ? e[0] : e) {
    case "boolean":
      return false;
    case "integer":
    case "number":
      return 0;
    case "string":
      return "";
    case "array":
      return [];
    case "object":
      return {};
    default:
      return null;
  }
}
var nn = new vg();
Ft.add(di.Configuration, nn);
function Eg(e, t) {
  return e.trim() ? Zt.test(e) ? m(1814, null, e) : nn.getConfigurationProperties()[e] !== void 0 ? m(1815, null, e) : t.policy?.name && nn.getPolicyConfigurations().get(t.policy?.name) !== void 0 ? m(1816, null, e, t.policy?.name, nn.getPolicyConfigurations().get(t.policy?.name)) : null : m(1813, null);
}
b();
var zr = "**", Eu = "/", on = "[/\\\\]", an = "[^/\\\\]", Sg = /\//g;
function Su(e, t) {
  switch (e) {
    case 0:
      return "";
    case 1:
      return `${an}*?`;
    default:
      return `(?:${on}|${an}+${on}${t ? `|${on}${an}+` : ""})*?`;
  }
}
function bu(e, t) {
  if (!e) return [];
  const i = [];
  let r = false, s = false, n = "";
  for (const o of e) {
    switch (o) {
      case t:
        if (!r && !s) {
          i.push(n), n = "";
          continue;
        }
        break;
      case "{":
        r = true;
        break;
      case "}":
        r = false;
        break;
      case "[":
        s = true;
        break;
      case "]":
        s = false;
        break;
    }
    n += o;
  }
  return n && i.push(n), i;
}
function xu(e) {
  if (!e) return "";
  let t = "";
  const i = bu(e, Eu);
  if (i.every((r) => r === zr)) t = ".*";
  else {
    let r = false;
    i.forEach((s, n) => {
      if (s === zr) {
        if (r) return;
        t += Su(2, n === i.length - 1);
      } else {
        let o = false, a = "", l = false, c = "";
        for (const h of s) {
          if (h !== "}" && o) {
            a += h;
            continue;
          }
          if (l && (h !== "]" || !c)) {
            let f;
            h === "-" ? f = h : (h === "^" || h === "!") && !c ? f = "^" : h === Eu ? f = "" : f = er(h), c += f;
            continue;
          }
          switch (h) {
            case "{":
              o = true;
              continue;
            case "[":
              l = true;
              continue;
            case "}": {
              const d = `(?:${bu(a, ",").map((p) => xu(p)).join("|")})`;
              t += d, o = false, a = "";
              break;
            }
            case "]": {
              t += "[" + c + "]", l = false, c = "";
              break;
            }
            case "?":
              t += an;
              continue;
            case "*":
              t += Su(1);
              continue;
            default:
              t += er(h);
          }
        }
        n < i.length - 1 && (i[n + 1] !== zr || n + 2 < i.length) && (t += on);
      }
      r = s === zr;
    });
  }
  return t;
}
var bg = /^\*\*\/\*\.[\w\.-]+$/, xg = /^\*\*\/([\w\.-]+)\/?$/, Ig = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/, Pg = /^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/, Rg = /^\*\*((\/[\w\.-]+)+)\/?$/, Ag = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/, Iu = new Ps(1e4), Pu = function() {
  return false;
}, Mt = function() {
  return null;
};
function Io(e, t) {
  if (!e) return Mt;
  let i;
  typeof e != "string" ? i = e.pattern : i = e, i = i.trim();
  const r = t.ignoreCase ?? false, s = t.ignoreCase ?? !tt, n = { ...t, equals: r ? jt : (c, h) => c === h, endsWith: r ? $1 : (c, h) => c.endsWith(h), isEqualOrParent: (c, h) => Ht(c, h, s) }, o = `${r ? i.toLowerCase() : i}_${!!t.trimForExclusions}_${r}`;
  let a = Iu.get(o);
  if (a) return Ru(a, e, n);
  let l;
  return bg.test(i) ? a = Dg(i.substring(4), i, n) : (l = xg.exec(Po(i, n))) ? a = Lg(l[1], i, n) : (t.trimForExclusions ? Pg : Ig).test(i) ? a = Tg(i, n) : (l = Rg.exec(Po(i, n))) ? a = Au(l[1].substring(1), i, true, n) : (l = Ag.exec(Po(i, n))) ? a = Au(l[1], i, false, n) : a = Cg(i, n), Iu.set(o, a), Ru(a, e, n);
}
function kg(e, t) {
  const i = t.length;
  if (i === 0) return { ...e, isEqualOrParent: () => false };
  const r = it.charCodeAt(0), s = t.charCodeAt(i - 1) === r;
  let n = true;
  for (let o = 0; o < i; o++) if (t.charCodeAt(o) > 127) {
    n = false;
    break;
  }
  if (n) {
    const o = t.toLowerCase(), a = (h) => h >= 65 && h <= 90 ? h + 32 : h, l = a(o.charCodeAt(0)), c = i > 1 ? a(o.charCodeAt(i - 1)) : l;
    return { ...e, isEqualOrParent(h, f) {
      if (h.length < i) return false;
      if (h.length > i) {
        const p = s ? i - 1 : i;
        if (h.charCodeAt(p) !== r) return false;
      }
      let d = h.charCodeAt(0);
      if (d !== l) {
        if (d > 127) return Ht(h, t, true);
        if (d = a(d), d !== l) return false;
      }
      if (i > 1) {
        let p = h.charCodeAt(i - 1);
        if (p !== c) {
          if (p > 127) return Ht(h, t, true);
          if (p = a(p), p !== c) return false;
        }
      }
      for (let p = 0; p < i; p++) {
        const v = h.charCodeAt(p), y = o.charCodeAt(p);
        if (v === y) continue;
        if (v > 127) return Ht(h, t, true);
        let E = v;
        if (E >= 65 && E <= 90 && (E += 32), E !== y) return false;
      }
      return true;
    } };
  }
  return { ...e, isEqualOrParent(o, a) {
    return Ht(o, t, true);
  } };
}
function Ru(e, t, i) {
  if (typeof t == "string") return e;
  const r = t.base, s = r.length, o = i.ignoreCase ?? !tt ? kg(i, r) : i, a = it.charCodeAt(0), l = function(c, h) {
    if (!o.isEqualOrParent(c, r)) return null;
    let f = s;
    for (; f < c.length && c.charCodeAt(f) === a; ) f++;
    return e(c.substring(f), h);
  };
  return l.allBasenames = e.allBasenames, l.allPaths = e.allPaths, l.basenames = e.basenames, l.patterns = e.patterns, l;
}
function Po(e, t) {
  return t.trimForExclusions && e.endsWith("/**") ? e.substring(0, e.length - 2) : e;
}
function Dg(e, t, i) {
  return function(r, s) {
    return typeof r == "string" && i.endsWith(r, e) ? t : null;
  };
}
function Lg(e, t, i) {
  const r = `/${e}`, s = `\\${e}`, n = function(a, l) {
    return typeof a != "string" ? null : l ? i.equals(l, e) ? t : null : i.equals(a, e) || i.endsWith(a, r) || i.endsWith(a, s) ? t : null;
  }, o = [e];
  return n.basenames = o, n.patterns = [t], n.allBasenames = o, n;
}
function Tg(e, t) {
  const i = ku(e.slice(1, -1).split(",").map((a) => Io(a, t)).filter((a) => a !== Mt), e), r = i.length;
  if (!r) return Mt;
  if (r === 1) return i[0];
  const s = function(a, l) {
    for (let c = 0, h = i.length; c < h; c++) if (i[c](a, l)) return e;
    return null;
  }, n = i.find((a) => !!a.allBasenames);
  n && (s.allBasenames = n.allBasenames);
  const o = i.reduce((a, l) => l.allPaths ? a.concat(l.allPaths) : a, []);
  return o.length && (s.allPaths = o), s;
}
function Au(e, t, i, r) {
  const s = it === ce.sep, n = s ? e : e.replace(Sg, it), o = it + n, a = ce.sep + e;
  let l;
  return i ? l = function(c, h) {
    return typeof c == "string" && (r.equals(c, n) || r.endsWith(c, o) || !s && (r.equals(c, e) || r.endsWith(c, a))) ? t : null;
  } : l = function(c, h) {
    return typeof c == "string" && (r.equals(c, n) || !s && r.equals(c, e)) ? t : null;
  }, l.allPaths = [(i ? "*/" : "./") + e], l;
}
function Cg(e, t) {
  try {
    const i = new RegExp(`^${xu(e)}$`, t.ignoreCase ? "i" : void 0);
    return function(r) {
      return i.lastIndex = 0, typeof r == "string" && i.test(r) ? e : null;
    };
  } catch {
    return Mt;
  }
}
function Og(e, t, i) {
  return !e || typeof t != "string" ? false : typeof i == "function" ? Ro(e)(t, void 0, i) : Ro(e, i)(t);
}
function Ro(e, t = {}) {
  if (!e) return Pu;
  if (typeof e == "string" || Ug(e)) {
    const i = Io(e, t);
    if (i === Mt) return Pu;
    const r = function(s, n) {
      return !!i(s, n);
    };
    return i.allBasenames && (r.allBasenames = i.allBasenames), i.allPaths && (r.allPaths = i.allPaths), r;
  }
  return Ng(e, t);
}
function Ug(e) {
  const t = e;
  return t ? typeof t.base == "string" && typeof t.pattern == "string" : false;
}
function Ng(e, t) {
  const i = ku(Object.getOwnPropertyNames(e).map((a) => Fg(a, e[a], t)).filter((a) => a !== Mt)), r = i.length;
  if (!r) return Mt;
  if (!i.some((a) => !!a.requiresSiblings)) {
    if (r === 1) return i[0];
    const a = function(h, f) {
      for (let d = 0, p = i.length; d < p; d++) {
        const v = i[d](h, f);
        if (typeof v == "string") return v;
      }
      return null;
    }, l = i.find((h) => !!h.allBasenames);
    l && (a.allBasenames = l.allBasenames);
    const c = i.reduce((h, f) => f.allPaths ? h.concat(f.allPaths) : h, []);
    return c.length && (a.allPaths = c), a;
  }
  const s = function(a, l, c) {
    let h, f;
    for (let d = 0, p = i.length; d < p; d++) {
      const v = i[d];
      v.requiresSiblings && c && (l || (l = Pt(a)), h || (h = l.substr(0, l.length - N1(a).length)));
      const y = v(a, l, h, c);
      if (typeof y == "string") return y;
      Zc(y) && (f || (f = []), f.push(y));
    }
    return f ? (async () => {
      for (const d of f) {
        const p = await d;
        if (typeof p == "string") return p;
      }
      return null;
    })() : null;
  }, n = i.find((a) => !!a.allBasenames);
  n && (s.allBasenames = n.allBasenames);
  const o = i.reduce((a, l) => l.allPaths ? a.concat(l.allPaths) : a, []);
  return o.length && (s.allPaths = o), s;
}
function Fg(e, t, i) {
  if (t === false) return Mt;
  const r = Io(e, i);
  if (r === Mt) return Mt;
  if (typeof t == "boolean") return r;
  if (t) {
    const s = t.when;
    if (typeof s == "string") {
      const n = (o, a, l, c) => {
        if (!c || !r(o, a)) return null;
        const h = s.replace("$(basename)", () => l), f = c(h);
        return Zc(f) ? f.then((d) => d ? e : null) : f ? e : null;
      };
      return n.requiresSiblings = true, n;
    }
  }
  return r;
}
function ku(e, t) {
  const i = e.filter((a) => !!a.basenames);
  if (i.length < 2) return e;
  const r = i.reduce((a, l) => {
    const c = l.basenames;
    return c ? a.concat(c) : a;
  }, []);
  let s;
  if (t) {
    s = [];
    for (let a = 0, l = r.length; a < l; a++) s.push(t);
  } else s = i.reduce((a, l) => {
    const c = l.patterns;
    return c ? a.concat(c) : a;
  }, []);
  const n = function(a, l) {
    if (typeof a != "string") return null;
    if (!l) {
      let h;
      for (h = a.length; h > 0; h--) {
        const f = a.charCodeAt(h - 1);
        if (f === 47 || f === 92) break;
      }
      l = a.substr(h);
    }
    const c = r.indexOf(l);
    return c !== -1 ? s[c] : null;
  };
  n.basenames = r, n.patterns = s, n.allBasenames = r;
  const o = e.filter((a) => !a.basenames);
  return o.push(n), o;
}
function Du(e, t) {
  return Hi(e, t, (i, r) => typeof i == "string" && typeof r == "string" ? i === r : typeof i != "string" && typeof r != "string" ? i.base === r.base && i.pattern === r.pattern : false);
}
function Gr(e) {
  return Object.isFrozen(e) ? e : ug(e);
}
var Oe = class Gi {
  constructor(t, i, r, s, n) {
    this._contents = t, this._keys = i, this._overrides = r, this.raw = s, this.logService = n, this.overrideConfigurations = /* @__PURE__ */ new Map();
  }
  static createEmptyModel(t) {
    return new Gi({}, [], [], void 0, t);
  }
  get rawConfiguration() {
    if (!this._rawConfiguration) if (this.raw) {
      const t = (Array.isArray(this.raw) ? this.raw : [this.raw]).map((i) => {
        if (i instanceof Gi) return i;
        const r = new Lu("", this.logService);
        return r.parseRaw(i), r.configurationModel;
      });
      this._rawConfiguration = t.reduce((i, r) => r === i ? r : i.merge(r), t[0]);
    } else this._rawConfiguration = this;
    return this._rawConfiguration;
  }
  get contents() {
    return this._contents;
  }
  get overrides() {
    return this._overrides;
  }
  get keys() {
    return this._keys;
  }
  isEmpty() {
    return this._keys.length === 0 && Object.keys(this._contents).length === 0 && this._overrides.length === 0;
  }
  getValue(t) {
    return t ? js(this.contents, t) : this.contents;
  }
  inspect(t, i) {
    const r = this;
    return { get value() {
      return Gr(r.rawConfiguration.getValue(t));
    }, get override() {
      return i ? Gr(r.rawConfiguration.getOverrideValue(t, i)) : void 0;
    }, get merged() {
      return Gr(i ? r.rawConfiguration.override(i).getValue(t) : r.rawConfiguration.getValue(t));
    }, get overrides() {
      const s = [];
      for (const { contents: n, identifiers: o, keys: a } of r.rawConfiguration.overrides) {
        const l = new Gi(n, a, [], void 0, r.logService).getValue(t);
        l !== void 0 && s.push({ identifiers: o, value: l });
      }
      return s.length ? Gr(s) : void 0;
    } };
  }
  getOverrideValue(t, i) {
    const r = this.getContentsForOverrideIdentifer(i);
    return r ? t ? js(r, t) : r : void 0;
  }
  getKeysForOverrideIdentifier(t) {
    const i = [];
    for (const r of this.overrides) r.identifiers.includes(t) && i.push(...r.keys);
    return $t(i);
  }
  getAllOverrideIdentifiers() {
    const t = [];
    for (const i of this.overrides) t.push(...i.identifiers);
    return $t(t);
  }
  override(t) {
    let i = this.overrideConfigurations.get(t);
    return i || (i = this.createOverrideConfigurationModel(t), this.overrideConfigurations.set(t, i)), i;
  }
  overrideWithGlobs(t, i) {
    const r = this.getAllOverrideIdentifiers().filter(_u);
    if (r.length === 0) return this;
    let s;
    if (i) {
      const a = i.folders.find((l) => t.toString().startsWith(l.uri.toString()));
      a ? (s = t.path.substring(a.uri.path.length), s.startsWith("/") && (s = s.substring(1))) : s = t.path;
    } else s = t.path;
    const n = [];
    for (const a of r) {
      const l = yg(a);
      l && Og(l, s) && n.push(a);
    }
    if (n.length === 0) return this;
    let o = this;
    for (const a of n) o = o.override(a);
    return o;
  }
  merge(...t) {
    const i = Yt(this.contents), r = Yt(this.overrides), s = [...this.keys], n = this.raw ? Array.isArray(this.raw) ? [...this.raw] : [this.raw] : [this];
    for (const o of t) if (n.push(...o.raw ? Array.isArray(o.raw) ? o.raw : [o.raw] : [o]), !o.isEmpty()) {
      this.mergeContents(i, o.contents);
      for (const a of o.overrides) {
        const [l] = r.filter((c) => Hi(c.identifiers, a.identifiers));
        l ? (this.mergeContents(l.contents, a.contents), l.keys.push(...a.keys), l.keys = $t(l.keys)) : r.push(Yt(a));
      }
      for (const a of o.keys) s.indexOf(a) === -1 && s.push(a);
    }
    return new Gi(i, s, r, !n.length || n.every((o) => o instanceof Gi) ? void 0 : n, this.logService);
  }
  createOverrideConfigurationModel(t) {
    const i = this.getContentsForOverrideIdentifer(t);
    if (!i || typeof i != "object" || !Object.keys(i).length) return this;
    const r = {};
    for (const s of $t([...Object.keys(this.contents), ...Object.keys(i)])) {
      let n = this.contents[s];
      const o = i[s];
      o && (typeof n == "object" && typeof o == "object" ? (n = Yt(n), this.mergeContents(n, o)) : n = o), r[s] = n;
    }
    return new Gi(r, this.keys, this.overrides, void 0, this.logService);
  }
  mergeContents(t, i) {
    for (const r of Object.keys(i)) {
      if (r in t && Ne(t[r]) && Ne(i[r])) {
        this.mergeContents(t[r], i[r]);
        continue;
      }
      t[r] = Yt(i[r]);
    }
  }
  getContentsForOverrideIdentifer(t) {
    let i = null, r = null;
    const s = (n) => {
      n && (r ? this.mergeContents(r, n) : r = Yt(n));
    };
    for (const n of this.overrides) n.identifiers.length === 1 && n.identifiers[0] === t ? i = n.contents : n.identifiers.includes(t) && s(n.contents);
    return s(i), r;
  }
  toJSON() {
    return { contents: this.contents, overrides: this.overrides, keys: this.keys };
  }
  addValue(t, i) {
    this.updateValue(t, i, true);
  }
  setValue(t, i) {
    this.updateValue(t, i, false);
  }
  removeValue(t) {
    const i = this.keys.indexOf(t);
    i !== -1 && (this.keys.splice(i, 1), ig(this.contents, t), Zt.test(t) && this.overrides.splice(this.overrides.findIndex((r) => Hi(r.identifiers, qr(t))), 1));
  }
  updateValue(t, i, r) {
    if (uu(this.contents, t, i, (s) => this.logService.error(s)), r = r || this.keys.indexOf(t) === -1, r && this.keys.push(t), Zt.test(t)) {
      const s = qr(t), n = { identifiers: s, keys: Object.keys(this.contents[t]), contents: _o(this.contents[t], (a) => this.logService.error(a)) }, o = this.overrides.findIndex((a) => Hi(a.identifiers, s));
      o !== -1 ? this.overrides[o] = n : this.overrides.push(n);
    }
  }
}, Lu = class {
  constructor(e, t) {
    this._name = e, this.logService = t, this._raw = null, this._configurationModel = null, this._restrictedConfigurations = [], this._parseErrors = [];
  }
  get configurationModel() {
    return this._configurationModel || Oe.createEmptyModel(this.logService);
  }
  get restrictedConfigurations() {
    return this._restrictedConfigurations;
  }
  get errors() {
    return this._parseErrors;
  }
  parse(e, t) {
    if (!Ze(e)) {
      const i = this.doParseContent(e);
      this.parseRaw(i, t);
    }
  }
  reparse(e) {
    this._raw && this.parseRaw(this._raw, e);
  }
  parseRaw(e, t) {
    this._raw = e;
    const { contents: i, keys: r, overrides: s, restricted: n, hasExcludedProperties: o } = this.doParseRaw(e, t);
    this._configurationModel = new Oe(i, r, s, o ? [e] : void 0, this.logService), this._restrictedConfigurations = n || [];
  }
  doParseContent(e) {
    let t = {}, i = null, r = [];
    const s = [], n = [];
    function o(l) {
      Array.isArray(r) ? r.push(l) : i !== null && (r[i] = l);
    }
    const a = { onObjectBegin: () => {
      const l = {};
      o(l), s.push(r), r = l, i = null;
    }, onObjectProperty: (l) => {
      i = l;
    }, onObjectEnd: () => {
      r = s.pop();
    }, onArrayBegin: () => {
      const l = [];
      o(l), s.push(r), r = l, i = null;
    }, onArrayEnd: () => {
      r = s.pop();
    }, onLiteralValue: o, onError: (l, c, h) => {
      n.push({ error: l, offset: c, length: h });
    } };
    if (e) try {
      Xs(e, a), t = r[0] || {};
    } catch (l) {
      this.logService.error(`Error while parsing settings file ${this._name}: ${l}`), this._parseErrors = [l];
    }
    return t;
  }
  doParseRaw(e, t) {
    const i = Ft.as(di.Configuration).getConfigurationProperties(), r = this.filter(e, i, true, t);
    e = r.raw;
    const s = _o(e, (a) => this.logService.error(`Conflict in settings file ${this._name}: ${a}`)), n = Object.keys(e), o = this.toOverrides(e, (a) => this.logService.error(`Conflict in settings file ${this._name}: ${a}`));
    return { contents: s, keys: n, overrides: o, restricted: r.restricted, hasExcludedProperties: r.hasExcludedProperties };
  }
  filter(e, t, i, r) {
    let s = false;
    if (!r?.scopes && !r?.skipRestricted && !r?.exclude?.length) return { raw: e, restricted: [], hasExcludedProperties: s };
    const n = {}, o = [];
    for (const a in e) if (Zt.test(a) && i) {
      const l = this.filter(e[a], t, false, r);
      n[a] = l.raw, s = s || l.hasExcludedProperties, o.push(...l.restricted);
    } else {
      const l = this.filterProperty(a, e[a], t, r);
      o.push(...l.restricted), s = s || l.hasExcludedProperties, l.included ? n[a] = l.value : s = true;
    }
    return { raw: n, restricted: o, hasExcludedProperties: s };
  }
  filterProperty(e, t, i, r) {
    const s = i[e];
    if (s) return { included: this.shouldInclude(e, s, r), value: t, restricted: s.restricted ? [e] : [], hasExcludedProperties: false };
    if (!Ne(t) || Array.isArray(t)) return { included: this.shouldInclude(e, s, r), value: t, restricted: [], hasExcludedProperties: false };
    if (r.exclude?.includes(e)) return { included: false, value: t, restricted: [], hasExcludedProperties: false };
    const n = Object.keys(t);
    if (n.length === 0) return { included: this.shouldInclude(e, s, r), value: t, restricted: [], hasExcludedProperties: false };
    const o = {}, a = [];
    let l = false, c = false;
    for (const h of n) {
      const f = this.filterProperty(`${e}.${h}`, t[h], i, r);
      f.restricted.length && a.push(...f.restricted), c = c || f.hasExcludedProperties, f.included ? (o[h] = f.value, l = true) : c = true;
    }
    return { included: l, value: o, restricted: a, hasExcludedProperties: c };
  }
  shouldInclude(e, t, i) {
    if (i.exclude?.includes(e)) return false;
    if (i.include?.includes(e)) return true;
    if (i.skipRestricted && t?.restricted || i.skipUnregistered && !t) return false;
    const r = t ? typeof t.scope < "u" ? t.scope : 4 : void 0;
    return r === void 0 || i.scopes === void 0 ? true : i.scopes.includes(r);
  }
  toOverrides(e, t) {
    const i = [];
    for (const r of Object.keys(e)) if (Zt.test(r)) {
      const s = {};
      for (const n in e[r]) s[n] = e[r][n];
      i.push({ identifiers: qr(r), keys: Object.keys(s), contents: _o(s, t) });
    }
    return i;
  }
}, Mg = class extends X {
  constructor(e, t, i, r, s) {
    super(), this.userSettingsResource = e, this.parseOptions = t, this.fileService = r, this.logService = s, this._onDidChange = this._register(new M()), this.onDidChange = this._onDidChange.event, this.parser = new Lu(this.userSettingsResource.toString(), s), this._register(this.fileService.watch(i.dirname(this.userSettingsResource))), this._register(this.fileService.watch(this.userSettingsResource)), this._register(ne.any(ne.filter(this.fileService.onDidFilesChange, (n) => n.contains(this.userSettingsResource)), ne.filter(this.fileService.onDidRunOperation, (n) => (n.isOperation(0) || n.isOperation(3) || n.isOperation(1) || n.isOperation(4)) && i.isEqual(n.resource, e)))(() => this._onDidChange.fire()));
  }
  async loadConfiguration() {
    try {
      const e = await this.fileService.readFile(this.userSettingsResource);
      return this.parser.parse(e.value.toString() || "{}", this.parseOptions), this.parser.configurationModel;
    } catch {
      return Oe.createEmptyModel(this.logService);
    }
  }
  reparse(e) {
    return e && (this.parseOptions = e), this.parser.reparse(this.parseOptions), this.parser.configurationModel;
  }
  getRestrictedSettings() {
    return this.parser.restrictedConfigurations;
  }
}, Vg = class {
  constructor(e, t, i, r, s, n, o, a, l, c, h, f, d) {
    this.key = e, this.overrides = t, this._value = i, this.overrideIdentifiers = r, this.defaultConfiguration = s, this.policyConfiguration = n, this.applicationConfiguration = o, this.userConfiguration = a, this.localUserConfiguration = l, this.remoteUserConfiguration = c, this.workspaceConfiguration = h, this.folderConfigurationModel = f, this.memoryConfigurationModel = d;
  }
  get value() {
    return Gr(this._value);
  }
  toInspectValue(e) {
    return e?.value !== void 0 || e?.override !== void 0 || e?.overrides !== void 0 ? e : void 0;
  }
  get defaultInspectValue() {
    return this._defaultInspectValue || (this._defaultInspectValue = this.defaultConfiguration.inspect(this.key, this.overrides.overrideIdentifier)), this._defaultInspectValue;
  }
  get defaultValue() {
    return this.defaultInspectValue.merged;
  }
  get default() {
    return this.toInspectValue(this.defaultInspectValue);
  }
  get policyInspectValue() {
    return this._policyInspectValue === void 0 && (this._policyInspectValue = this.policyConfiguration ? this.policyConfiguration.inspect(this.key) : null), this._policyInspectValue;
  }
  get policyValue() {
    return this.policyInspectValue?.merged;
  }
  get policy() {
    return this.policyInspectValue?.value !== void 0 ? { value: this.policyInspectValue.value } : void 0;
  }
  get applicationInspectValue() {
    return this._applicationInspectValue === void 0 && (this._applicationInspectValue = this.applicationConfiguration ? this.applicationConfiguration.inspect(this.key) : null), this._applicationInspectValue;
  }
  get applicationValue() {
    return this.applicationInspectValue?.merged;
  }
  get application() {
    return this.toInspectValue(this.applicationInspectValue);
  }
  get userInspectValue() {
    return this._userInspectValue || (this._userInspectValue = this.userConfiguration.inspect(this.key, this.overrides.overrideIdentifier)), this._userInspectValue;
  }
  get userValue() {
    return this.userInspectValue.merged;
  }
  get user() {
    return this.toInspectValue(this.userInspectValue);
  }
  get userLocalInspectValue() {
    return this._userLocalInspectValue || (this._userLocalInspectValue = this.localUserConfiguration.inspect(this.key, this.overrides.overrideIdentifier)), this._userLocalInspectValue;
  }
  get userLocalValue() {
    return this.userLocalInspectValue.merged;
  }
  get userLocal() {
    return this.toInspectValue(this.userLocalInspectValue);
  }
  get userRemoteInspectValue() {
    return this._userRemoteInspectValue || (this._userRemoteInspectValue = this.remoteUserConfiguration.inspect(this.key, this.overrides.overrideIdentifier)), this._userRemoteInspectValue;
  }
  get userRemoteValue() {
    return this.userRemoteInspectValue.merged;
  }
  get userRemote() {
    return this.toInspectValue(this.userRemoteInspectValue);
  }
  get workspaceInspectValue() {
    return this._workspaceInspectValue === void 0 && (this._workspaceInspectValue = this.workspaceConfiguration ? this.workspaceConfiguration.inspect(this.key, this.overrides.overrideIdentifier) : null), this._workspaceInspectValue;
  }
  get workspaceValue() {
    return this.workspaceInspectValue?.merged;
  }
  get workspace() {
    return this.toInspectValue(this.workspaceInspectValue);
  }
  get workspaceFolderInspectValue() {
    return this._workspaceFolderInspectValue === void 0 && (this._workspaceFolderInspectValue = this.folderConfigurationModel ? this.folderConfigurationModel.inspect(this.key, this.overrides.overrideIdentifier) : null), this._workspaceFolderInspectValue;
  }
  get workspaceFolderValue() {
    return this.workspaceFolderInspectValue?.merged;
  }
  get workspaceFolder() {
    return this.toInspectValue(this.workspaceFolderInspectValue);
  }
  get memoryInspectValue() {
    return this._memoryInspectValue === void 0 && (this._memoryInspectValue = this.memoryConfigurationModel.inspect(this.key, this.overrides.overrideIdentifier)), this._memoryInspectValue;
  }
  get memoryValue() {
    return this.memoryInspectValue.merged;
  }
  get memory() {
    return this.toInspectValue(this.memoryInspectValue);
  }
}, Ao = class Qf {
  constructor(t, i, r, s, n, o, a, l, c, h) {
    this._defaultConfiguration = t, this._policyConfiguration = i, this._applicationConfiguration = r, this._localUserConfiguration = s, this._remoteUserConfiguration = n, this._workspaceConfiguration = o, this._folderConfigurations = a, this._memoryConfiguration = l, this._memoryConfigurationByResource = c, this.logService = h, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations = new Ye(), this._userConfiguration = null;
  }
  getValue(t, i, r) {
    return this.getConsolidatedConfigurationModel(t, i, r).getValue(t);
  }
  updateValue(t, i, r = {}) {
    let s;
    r.resource ? (s = this._memoryConfigurationByResource.get(r.resource), s || (s = Oe.createEmptyModel(this.logService), this._memoryConfigurationByResource.set(r.resource, s))) : s = this._memoryConfiguration, i === void 0 ? s.removeValue(t) : s.setValue(t, i), r.resource || (this._workspaceConsolidatedConfiguration = null);
  }
  inspect(t, i, r) {
    const s = this.getConsolidatedConfigurationModel(t, i, r), n = this.getFolderConfigurationModelForResource(i.resource, r), o = i.resource ? this._memoryConfigurationByResource.get(i.resource) || this._memoryConfiguration : this._memoryConfiguration, a = /* @__PURE__ */ new Set();
    for (const l of s.overrides) for (const c of l.identifiers) s.getOverrideValue(t, c) !== void 0 && a.add(c);
    return new Vg(t, i, s.getValue(t), a.size ? [...a] : void 0, this._defaultConfiguration, this._policyConfiguration.isEmpty() ? void 0 : this._policyConfiguration, this.applicationConfiguration.isEmpty() ? void 0 : this.applicationConfiguration, this.userConfiguration, this.localUserConfiguration, this.remoteUserConfiguration, r ? this._workspaceConfiguration : void 0, n || void 0, o);
  }
  keys(t) {
    const i = this.getFolderConfigurationModelForResource(void 0, t);
    return { default: this._defaultConfiguration.keys.slice(0), user: this.userConfiguration.keys.slice(0), workspace: this._workspaceConfiguration.keys.slice(0), workspaceFolder: i ? i.keys.slice(0) : [] };
  }
  updateDefaultConfiguration(t) {
    this._defaultConfiguration = t, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear();
  }
  updatePolicyConfiguration(t) {
    this._policyConfiguration = t;
  }
  updateApplicationConfiguration(t) {
    this._applicationConfiguration = t, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear();
  }
  updateLocalUserConfiguration(t) {
    this._localUserConfiguration = t, this._userConfiguration = null, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear();
  }
  updateRemoteUserConfiguration(t) {
    this._remoteUserConfiguration = t, this._userConfiguration = null, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear();
  }
  updateWorkspaceConfiguration(t) {
    this._workspaceConfiguration = t, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear();
  }
  updateFolderConfiguration(t, i) {
    this._folderConfigurations.set(t, i), this._foldersConsolidatedConfigurations.delete(t);
  }
  deleteFolderConfiguration(t) {
    this.folderConfigurations.delete(t), this._foldersConsolidatedConfigurations.delete(t);
  }
  compareAndUpdateDefaultConfiguration(t, i) {
    const r = [];
    if (!i) {
      const { added: s, updated: n, removed: o } = gi(this._defaultConfiguration, t);
      i = [...s, ...n, ...o];
    }
    for (const s of i) for (const n of qr(s)) {
      const o = this._defaultConfiguration.getKeysForOverrideIdentifier(n), a = t.getKeysForOverrideIdentifier(n), l = [...a.filter((c) => o.indexOf(c) === -1), ...o.filter((c) => a.indexOf(c) === -1), ...o.filter((c) => !Nt(this._defaultConfiguration.override(n).getValue(c), t.override(n).getValue(c)))];
      r.push([n, l]);
    }
    return this.updateDefaultConfiguration(t), { keys: i, overrides: r };
  }
  compareAndUpdatePolicyConfiguration(t) {
    const { added: i, updated: r, removed: s } = gi(this._policyConfiguration, t), n = [...i, ...r, ...s];
    return n.length && this.updatePolicyConfiguration(t), { keys: n, overrides: [] };
  }
  compareAndUpdateApplicationConfiguration(t) {
    const { added: i, updated: r, removed: s, overrides: n } = gi(this.applicationConfiguration, t), o = [...i, ...r, ...s];
    return o.length && this.updateApplicationConfiguration(t), { keys: o, overrides: n };
  }
  compareAndUpdateLocalUserConfiguration(t) {
    const { added: i, updated: r, removed: s, overrides: n } = gi(this.localUserConfiguration, t), o = [...i, ...r, ...s];
    return o.length && this.updateLocalUserConfiguration(t), { keys: o, overrides: n };
  }
  compareAndUpdateRemoteUserConfiguration(t) {
    const { added: i, updated: r, removed: s, overrides: n } = gi(this.remoteUserConfiguration, t), o = [...i, ...r, ...s];
    return o.length && this.updateRemoteUserConfiguration(t), { keys: o, overrides: n };
  }
  compareAndUpdateWorkspaceConfiguration(t) {
    const { added: i, updated: r, removed: s, overrides: n } = gi(this.workspaceConfiguration, t), o = [...i, ...r, ...s];
    return o.length && this.updateWorkspaceConfiguration(t), { keys: o, overrides: n };
  }
  compareAndUpdateFolderConfiguration(t, i) {
    const r = this.folderConfigurations.get(t), { added: s, updated: n, removed: o, overrides: a } = gi(r, i), l = [...s, ...n, ...o];
    return (l.length || !r) && this.updateFolderConfiguration(t, i), { keys: l, overrides: a };
  }
  compareAndDeleteFolderConfiguration(t) {
    const i = this.folderConfigurations.get(t);
    if (!i) throw new Error("Unknown folder");
    this.deleteFolderConfiguration(t);
    const { added: r, updated: s, removed: n, overrides: o } = gi(i, void 0);
    return { keys: [...r, ...s, ...n], overrides: o };
  }
  get defaults() {
    return this._defaultConfiguration;
  }
  get applicationConfiguration() {
    return this._applicationConfiguration;
  }
  get userConfiguration() {
    if (!this._userConfiguration) if (this._remoteUserConfiguration.isEmpty()) this._userConfiguration = this._localUserConfiguration;
    else {
      const t = this._localUserConfiguration.merge(this._remoteUserConfiguration);
      this._userConfiguration = new Oe(t.contents, t.keys, t.overrides, void 0, this.logService);
    }
    return this._userConfiguration;
  }
  get localUserConfiguration() {
    return this._localUserConfiguration;
  }
  get remoteUserConfiguration() {
    return this._remoteUserConfiguration;
  }
  get workspaceConfiguration() {
    return this._workspaceConfiguration;
  }
  get folderConfigurations() {
    return this._folderConfigurations;
  }
  getConsolidatedConfigurationModel(t, i, r) {
    let s = this.getConsolidatedConfigurationModelForResource(i, r);
    if (i.overrideIdentifier && (s = s.override(i.overrideIdentifier)), i.resource && (s = s.overrideWithGlobs(i.resource, r)), !this._policyConfiguration.isEmpty() && this._policyConfiguration.getValue(t) !== void 0) {
      s = s.merge();
      for (const n of this._policyConfiguration.keys) s.setValue(n, this._policyConfiguration.getValue(n));
    }
    return s;
  }
  getConsolidatedConfigurationModelForResource({ resource: t }, i) {
    let r = this.getWorkspaceConsolidatedConfiguration();
    if (i && t) {
      const s = i.getFolder(t);
      s && (r = this.getFolderConsolidatedConfiguration(s.uri) || r);
      const n = this._memoryConfigurationByResource.get(t);
      n && (r = r.merge(n));
    }
    return r;
  }
  getWorkspaceConsolidatedConfiguration() {
    return this._workspaceConsolidatedConfiguration || (this._workspaceConsolidatedConfiguration = this._defaultConfiguration.merge(this.applicationConfiguration, this.userConfiguration, this._workspaceConfiguration, this._memoryConfiguration)), this._workspaceConsolidatedConfiguration;
  }
  getFolderConsolidatedConfiguration(t) {
    let i = this._foldersConsolidatedConfigurations.get(t);
    if (!i) {
      const r = this.getWorkspaceConsolidatedConfiguration(), s = this._folderConfigurations.get(t);
      s ? (i = r.merge(s), this._foldersConsolidatedConfigurations.set(t, i)) : i = r;
    }
    return i;
  }
  getFolderConfigurationModelForResource(t, i) {
    if (i && t) {
      const r = i.getFolder(t);
      if (r) return this._folderConfigurations.get(r.uri);
    }
  }
  toData() {
    return { defaults: { contents: this._defaultConfiguration.contents, overrides: this._defaultConfiguration.overrides, keys: this._defaultConfiguration.keys }, policy: { contents: this._policyConfiguration.contents, overrides: this._policyConfiguration.overrides, keys: this._policyConfiguration.keys }, application: { contents: this.applicationConfiguration.contents, overrides: this.applicationConfiguration.overrides, keys: this.applicationConfiguration.keys, raw: Array.isArray(this.applicationConfiguration.raw) ? void 0 : this.applicationConfiguration.raw }, userLocal: { contents: this.localUserConfiguration.contents, overrides: this.localUserConfiguration.overrides, keys: this.localUserConfiguration.keys, raw: Array.isArray(this.localUserConfiguration.raw) ? void 0 : this.localUserConfiguration.raw }, userRemote: { contents: this.remoteUserConfiguration.contents, overrides: this.remoteUserConfiguration.overrides, keys: this.remoteUserConfiguration.keys, raw: Array.isArray(this.remoteUserConfiguration.raw) ? void 0 : this.remoteUserConfiguration.raw }, workspace: { contents: this._workspaceConfiguration.contents, overrides: this._workspaceConfiguration.overrides, keys: this._workspaceConfiguration.keys }, folders: [...this._folderConfigurations.keys()].reduce((t, i) => {
      const { contents: r, overrides: s, keys: n } = this._folderConfigurations.get(i);
      return t.push([i, { contents: r, overrides: s, keys: n }]), t;
    }, []) };
  }
  allKeys() {
    const t = /* @__PURE__ */ new Set();
    return this._defaultConfiguration.keys.forEach((i) => t.add(i)), this.userConfiguration.keys.forEach((i) => t.add(i)), this._workspaceConfiguration.keys.forEach((i) => t.add(i)), this._folderConfigurations.forEach((i) => i.keys.forEach((r) => t.add(r))), [...t.values()];
  }
  allOverrideIdentifiers() {
    const t = /* @__PURE__ */ new Set();
    return this._defaultConfiguration.getAllOverrideIdentifiers().forEach((i) => t.add(i)), this.userConfiguration.getAllOverrideIdentifiers().forEach((i) => t.add(i)), this._workspaceConfiguration.getAllOverrideIdentifiers().forEach((i) => t.add(i)), this._folderConfigurations.forEach((i) => i.getAllOverrideIdentifiers().forEach((r) => t.add(r))), [...t.values()];
  }
  getAllKeysForOverrideIdentifier(t) {
    const i = /* @__PURE__ */ new Set();
    return this._defaultConfiguration.getKeysForOverrideIdentifier(t).forEach((r) => i.add(r)), this.userConfiguration.getKeysForOverrideIdentifier(t).forEach((r) => i.add(r)), this._workspaceConfiguration.getKeysForOverrideIdentifier(t).forEach((r) => i.add(r)), this._folderConfigurations.forEach((r) => r.getKeysForOverrideIdentifier(t).forEach((s) => i.add(s))), [...i.values()];
  }
  static parse(t, i) {
    const r = this.parseConfigurationModel(t.defaults, i), s = this.parseConfigurationModel(t.policy, i), n = this.parseConfigurationModel(t.application, i), o = this.parseConfigurationModel(t.userLocal, i), a = this.parseConfigurationModel(t.userRemote, i), l = this.parseConfigurationModel(t.workspace, i), c = t.folders.reduce((h, f) => (h.set(k.revive(f[0]), this.parseConfigurationModel(f[1], i)), h), new Ye());
    return new Qf(r, s, n, o, a, l, c, Oe.createEmptyModel(i), new Ye(), i);
  }
  static parseConfigurationModel(t, i) {
    return new Oe(t.contents, t.keys, t.overrides, t.raw, i);
  }
}, Wg = class {
  constructor(e, t, i, r, s) {
    this.change = e, this.previous = t, this.currentConfiguraiton = i, this.currentWorkspace = r, this.logService = s, this._marker = `
`, this._markerCode1 = this._marker.charCodeAt(0), this._markerCode2 = 46, this.affectedKeys = /* @__PURE__ */ new Set(), this._previousConfiguration = void 0;
    for (const n of e.keys) this.affectedKeys.add(n);
    for (const [, n] of e.overrides) for (const o of n) this.affectedKeys.add(o);
    this._affectsConfigStr = this._marker;
    for (const n of this.affectedKeys) this._affectsConfigStr += n + this._marker;
  }
  get previousConfiguration() {
    return !this._previousConfiguration && this.previous && (this._previousConfiguration = Ao.parse(this.previous.data, this.logService)), this._previousConfiguration;
  }
  affectsConfiguration(e, t) {
    const i = this._marker + e, r = this._affectsConfigStr.indexOf(i);
    if (r < 0) return false;
    const s = r + i.length;
    if (s >= this._affectsConfigStr.length) return false;
    const n = this._affectsConfigStr.charCodeAt(s);
    if (n !== this._markerCode1 && n !== this._markerCode2) return false;
    if (t) {
      const o = this.previousConfiguration ? this.previousConfiguration.getValue(e, t, this.previous?.workspace) : void 0, a = this.currentConfiguraiton.getValue(e, t, this.currentWorkspace);
      return !Nt(o, a);
    }
    return true;
  }
};
function gi(e, t) {
  const { added: i, removed: r, updated: s } = Tu(t?.rawConfiguration, e?.rawConfiguration), n = [], o = e?.getAllOverrideIdentifiers() || [], a = t?.getAllOverrideIdentifiers() || [];
  if (t) {
    const l = a.filter((c) => !o.includes(c));
    for (const c of l) n.push([c, t.getKeysForOverrideIdentifier(c)]);
  }
  if (e) {
    const l = o.filter((c) => !a.includes(c));
    for (const c of l) n.push([c, e.getKeysForOverrideIdentifier(c)]);
  }
  if (t && e) {
    for (const l of o) if (a.includes(l)) {
      const c = Tu({ contents: e.getOverrideValue(void 0, l) || {}, keys: e.getKeysForOverrideIdentifier(l) }, { contents: t.getOverrideValue(void 0, l) || {}, keys: t.getKeysForOverrideIdentifier(l) });
      n.push([l, [...c.added, ...c.removed, ...c.updated]]);
    }
  }
  return { added: i, removed: r, updated: s, overrides: n };
}
function Tu(e, t) {
  const i = e ? t ? e.keys.filter((n) => t.keys.indexOf(n) === -1) : [...e.keys] : [], r = t ? e ? t.keys.filter((n) => e.keys.indexOf(n) === -1) : [...t.keys] : [], s = [];
  if (e && t) {
    for (const n of t.keys) if (e.keys.indexOf(n) !== -1) {
      const o = js(t.contents, n), a = js(e.contents, n);
      Nt(o, a) || s.push(n);
    }
  }
  return { added: i, removed: r, updated: s };
}
b(), b(), b();
function cr(e) {
  return ko(e, 0);
}
function ko(e, t) {
  switch (typeof e) {
    case "object":
      return e === null ? ei(349, t) : Array.isArray(e) ? Bg(e, t) : qg(e, t);
    case "string":
      return Cu(e, t);
    case "boolean":
      return $g(e, t);
    case "number":
      return ei(e, t);
    case "undefined":
      return ei(937, t);
    default:
      return ei(617, t);
  }
}
function ei(e, t) {
  return (t << 5) - t + e | 0;
}
function $g(e, t) {
  return ei(e ? 433 : 863, t);
}
function Cu(e, t) {
  t = ei(149417, t);
  for (let i = 0, r = e.length; i < r; i++) t = ei(e.charCodeAt(i), t);
  return t;
}
function Bg(e, t) {
  return t = ei(104579, t), e.reduce((i, r) => ko(r, i), t);
}
function qg(e, t) {
  return t = ei(181387, t), Object.keys(e).sort().reduce((i, r) => (i = Cu(r, i), ko(e[r], i)), t);
}
function Do(e, t, i = 32) {
  const r = i - t, s = ~((1 << r) - 1);
  return (e << t | (s & e) >>> r) >>> 0;
}
function Kr(e, t = 32) {
  return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((i) => i.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
var zg = class Jf {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
  }
  update(t) {
    const i = t.length;
    if (i === 0) return;
    const r = this._buff;
    let s = this._buffLen, n = this._leftoverHighSurrogate, o, a;
    for (n !== 0 ? (o = n, a = -1, n = 0) : (o = t.charCodeAt(0), a = 0); ; ) {
      let l = o;
      if (B1(o)) if (a + 1 < i) {
        const c = t.charCodeAt(a + 1);
        Dc(c) ? (a++, l = q1(o, c)) : l = 65533;
      } else {
        n = o;
        break;
      }
      else Dc(o) && (l = 65533);
      if (s = this._push(r, s, l), a++, a < i) o = t.charCodeAt(a);
      else break;
    }
    this._buffLen = s, this._leftoverHighSurrogate = n;
  }
  _push(t, i, r) {
    return r < 128 ? t[i++] = r : r < 2048 ? (t[i++] = 192 | (r & 1984) >>> 6, t[i++] = 128 | (r & 63) >>> 0) : r < 65536 ? (t[i++] = 224 | (r & 61440) >>> 12, t[i++] = 128 | (r & 4032) >>> 6, t[i++] = 128 | (r & 63) >>> 0) : (t[i++] = 240 | (r & 1835008) >>> 18, t[i++] = 128 | (r & 258048) >>> 12, t[i++] = 128 | (r & 4032) >>> 6, t[i++] = 128 | (r & 63) >>> 0), i >= 64 && (this._step(), i -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), i;
  }
  digest() {
    return this._finished || (this._finished = true, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), Kr(this._h0) + Kr(this._h1) + Kr(this._h2) + Kr(this._h3) + Kr(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
    const t = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(t / 4294967296), false), this._buffDV.setUint32(60, t % 4294967296, false), this._step();
  }
  _step() {
    const t = Jf._bigBlock32, i = this._buffDV;
    for (let f = 0; f < 64; f += 4) t.setUint32(f, i.getUint32(f, false), false);
    for (let f = 64; f < 320; f += 4) t.setUint32(f, Do(t.getUint32(f - 12, false) ^ t.getUint32(f - 32, false) ^ t.getUint32(f - 56, false) ^ t.getUint32(f - 64, false), 1), false);
    let r = this._h0, s = this._h1, n = this._h2, o = this._h3, a = this._h4, l, c, h;
    for (let f = 0; f < 80; f++) f < 20 ? (l = s & n | ~s & o, c = 1518500249) : f < 40 ? (l = s ^ n ^ o, c = 1859775393) : f < 60 ? (l = s & n | s & o | n & o, c = 2400959708) : (l = s ^ n ^ o, c = 3395469782), h = Do(r, 5) + l + a + c + t.getUint32(f * 4, false) & 4294967295, a = o, o = n, n = Do(s, 30), s = r, r = h;
    this._h0 = this._h0 + r & 4294967295, this._h1 = this._h1 + s & 4294967295, this._h2 = this._h2 + n & 4294967295, this._h3 = this._h3 + o & 4294967295, this._h4 = this._h4 + a & 4294967295;
  }
};
zg._bigBlock32 = new DataView(new ArrayBuffer(320)), b(), b();
var ae = ((e) => (e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA", e))(ae || {});
b();
function Lo(...e) {
  switch (e.length) {
    case 1:
      return m(1839, null, e[0]);
    case 2:
      return m(1840, null, e[0], e[1]);
    case 3:
      return m(1841, null, e[0], e[1], e[2]);
    default:
      return;
  }
}
var Gg = m(1842, null), Kg = m(1843, null), To = class Rl {
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
        throw Wl(`unhandled token type: ${JSON.stringify(t)}; have you forgotten to add a case?`);
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
      case ae.OpenParen:
        this._addToken(0);
        break;
      case ae.CloseParen:
        this._addToken(1);
        break;
      case ae.ExclamationMark:
        if (this._match(ae.Equals)) {
          const i = this._match(ae.Equals);
          this._tokens.push({ type: 4, offset: this._start, isTripleEq: i });
        } else this._addToken(2);
        break;
      case ae.SingleQuote:
        this._quotedString();
        break;
      case ae.Slash:
        this._regex();
        break;
      case ae.Equals:
        if (this._match(ae.Equals)) {
          const i = this._match(ae.Equals);
          this._tokens.push({ type: 3, offset: this._start, isTripleEq: i });
        } else this._match(ae.Tilde) ? this._addToken(9) : this._error(Lo("==", "=~"));
        break;
      case ae.LessThan:
        this._addToken(this._match(ae.Equals) ? 6 : 5);
        break;
      case ae.GreaterThan:
        this._addToken(this._match(ae.Equals) ? 8 : 7);
        break;
      case ae.Ampersand:
        this._match(ae.Ampersand) ? this._addToken(15) : this._error(Lo("&&"));
        break;
      case ae.Pipe:
        this._match(ae.Pipe) ? this._addToken(16) : this._error(Lo("||"));
        break;
      case ae.Space:
      case ae.CarriageReturn:
      case ae.Tab:
      case ae.LineFeed:
      case ae.NoBreakSpace:
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
    return this._isAtEnd() ? ae.Null : this._input.charCodeAt(this._current);
  }
  _addToken(t) {
    this._tokens.push({ type: t, offset: this._start });
  }
  _error(t) {
    const i = this._start, r = this._input.substring(this._start, this._current), s = { type: 19, offset: this._start, lexeme: r };
    this._errors.push({ offset: i, lexeme: r, additionalInfo: t }), this._tokens.push(s);
  }
  _string() {
    this.stringRe.lastIndex = this._start;
    const t = this.stringRe.exec(this._input);
    if (t) {
      this._current = this._start + t[0].length;
      const i = this._input.substring(this._start, this._current), r = Rl._keywords.get(i);
      r ? this._addToken(r) : this._tokens.push({ type: 17, lexeme: i, offset: this._start });
    }
  }
  _quotedString() {
    for (; this._peek() !== ae.SingleQuote && !this._isAtEnd(); ) this._advance();
    if (this._isAtEnd()) {
      this._error(Gg);
      return;
    }
    this._advance(), this._tokens.push({ type: 18, lexeme: this._input.substring(this._start + 1, this._current - 1), offset: this._start + 1 });
  }
  _regex() {
    let t = this._current, i = false, r = false;
    for (; ; ) {
      if (t >= this._input.length) {
        this._current = t, this._error(Kg);
        return;
      }
      const n = this._input.charCodeAt(t);
      if (i) i = false;
      else if (n === ae.Slash && !r) {
        t++;
        break;
      } else n === ae.OpenSquareBracket ? r = true : n === ae.Backslash ? i = true : n === ae.CloseSquareBracket && (r = false);
      t++;
    }
    for (; t < this._input.length && Rl._regexFlags.has(this._input.charCodeAt(t)); ) t++;
    this._current = t;
    const s = this._input.substring(this._start, this._current);
    this._tokens.push({ type: 10, lexeme: s, offset: this._start });
  }
  _isAtEnd() {
    return this._current >= this._input.length;
  }
};
To._regexFlags = new Set(["i", "g", "s", "m", "y", "u"].map((e) => e.charCodeAt(0))), To._keywords = /* @__PURE__ */ new Map([["not", 14], ["in", 13], ["false", 12], ["true", 11]]);
var jr = To, We = /* @__PURE__ */ new Map();
We.set("false", false), We.set("true", true), We.set("isMac", Tt), We.set("isLinux", tt), We.set("isWindows", Re), We.set("isWeb", zt), We.set("isMacNative", Tt && !zt), We.set("isEdge", R1), We.set("isFirefox", I1), We.set("isChrome", _c), We.set("isSafari", P1);
var Hr = /* @__PURE__ */ new Map();
function jg(e, t) {
  return Hr.has(e) && (console.warn(`A context key function with id '${e}' is already registered. Function collisions can lead to unexpected behavior.`), Hr.delete(e)), Hr.set(e, t), { dispose: () => {
    Hr.delete(e);
  } };
}
function Ou(e) {
  return Hr.get(e);
}
var Hg = Object.prototype.hasOwnProperty, Xg = { regexParsingWithErrorRecovery: true }, Qg = m(1818, null), Jg = m(1819, null), Yg = m(1820, null), Uu = m(1821, null), Zg = m(1822, null), e0 = m(1823, null), t0 = m(1824, null), i0 = m(1825, null), Nu = class Ss {
  constructor(t = Xg) {
    this._config = t, this._scanner = new jr(), this._tokens = [], this._current = 0, this._parsingErrors = [], this._flagsGYRe = /g|y/g;
  }
  get lexingErrors() {
    return this._scanner.errors;
  }
  get parsingErrors() {
    return this._parsingErrors;
  }
  parse(t) {
    if (t === "") {
      this._parsingErrors.push({ message: Qg, offset: 0, lexeme: "", additionalInfo: Jg });
      return;
    }
    this._tokens = this._scanner.reset(t).scan(), this._current = 0, this._parsingErrors = [];
    try {
      const i = this._expr();
      if (!this._isAtEnd()) {
        const r = this._peek(), s = r.type === 17 ? e0 : void 0;
        throw this._parsingErrors.push({ message: Zg, offset: r.offset, lexeme: jr.getLexeme(r), additionalInfo: s }), Ss._parseError;
      }
      return i;
    } catch (i) {
      if (i !== Ss._parseError) throw i;
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
    return t.length === 1 ? t[0] : Xe.or(...t);
  }
  _and() {
    const t = [this._term()];
    for (; this._matchOne(15); ) {
      const i = this._term();
      t.push(i);
    }
    return t.length === 1 ? t[0] : Xe.and(...t);
  }
  _term() {
    if (this._matchOne(2)) {
      const t = this._peek();
      switch (t.type) {
        case 11:
          return this._advance(), st.INSTANCE;
        case 12:
          return this._advance(), ft.INSTANCE;
        case 0: {
          this._advance();
          const i = this._expr();
          return this._consume(1, Uu), i?.negate();
        }
        case 17:
          return this._advance(), Jr.create(t.lexeme);
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
        return this._advance(), Xe.true();
      case 12:
        return this._advance(), Xe.false();
      case 0: {
        this._advance();
        const i = this._expr();
        return this._consume(1, Uu), i;
      }
      case 17: {
        if (t.lexeme.startsWith("@")) {
          this._advance();
          const s = t.lexeme.substring(1);
          if (s.startsWith("!")) {
            const o = s.substring(1), a = Ou(o);
            if (a) return Co.createWithoutRegistration(s, () => !a());
          }
          const n = Ou(s) || (() => false);
          return Co.createWithoutRegistration(s, n);
        }
        const i = t.lexeme;
        if (this._advance(), this._matchOne(9)) {
          const s = this._peek();
          if (!this._config.regexParsingWithErrorRecovery) {
            if (this._advance(), s.type !== 10) throw this._errExpectedButGot("REGEX", s);
            const n = s.lexeme, o = n.lastIndexOf("/"), a = o === n.length - 1 ? void 0 : this._removeFlagsGY(n.substring(o + 1));
            let l;
            try {
              l = new RegExp(n.substring(1, o), a);
            } catch {
              throw this._errExpectedButGot("REGEX", s);
            }
            return $o.create(i, l);
          }
          switch (s.type) {
            case 10:
            case 19: {
              const n = [s.lexeme];
              this._advance();
              let o = this._peek(), a = 0;
              for (let d = 0; d < s.lexeme.length; d++) s.lexeme.charCodeAt(d) === ae.OpenParen ? a++ : s.lexeme.charCodeAt(d) === ae.CloseParen && a--;
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
                    for (let d = 0; d < o.lexeme.length; d++) o.lexeme.charCodeAt(d) === ae.OpenParen ? a++ : s.lexeme.charCodeAt(d) === ae.CloseParen && a--;
                }
                if (a < 0) break;
                n.push(jr.getLexeme(o)), this._advance(), o = this._peek();
              }
              const l = n.join(""), c = l.lastIndexOf("/"), h = c === l.length - 1 ? void 0 : this._removeFlagsGY(l.substring(c + 1));
              let f;
              try {
                f = new RegExp(l.substring(1, c), h);
              } catch {
                throw this._errExpectedButGot("REGEX", s);
              }
              return Xe.regex(i, f);
            }
            case 18: {
              const n = s.lexeme;
              this._advance();
              let o = null;
              if (!V1(n)) {
                const a = n.indexOf("/"), l = n.lastIndexOf("/");
                if (a !== l && a >= 0) {
                  const c = n.slice(a + 1, l), h = n[l + 1] === "i" ? "i" : "";
                  try {
                    o = new RegExp(c, h);
                  } catch {
                    throw this._errExpectedButGot("REGEX", s);
                  }
                }
              }
              if (o === null) throw this._errExpectedButGot("REGEX", s);
              return $o.create(i, o);
            }
            default:
              throw this._errExpectedButGot("REGEX", this._peek());
          }
        }
        if (this._matchOne(14)) {
          this._consume(13, Yg);
          const s = this._value();
          return Xe.notIn(i, s);
        }
        switch (this._peek().type) {
          case 3: {
            this._advance();
            const s = this._value();
            if (this._previous().type === 18) return Xe.equals(i, s);
            switch (s) {
              case "true":
                return Xe.has(i);
              case "false":
                return Xe.not(i);
              default:
                return Xe.equals(i, s);
            }
          }
          case 4: {
            this._advance();
            const s = this._value();
            if (this._previous().type === 18) return Xe.notEquals(i, s);
            switch (s) {
              case "true":
                return Xe.not(i);
              case "false":
                return Xe.has(i);
              default:
                return Xe.notEquals(i, s);
            }
          }
          case 5:
            return this._advance(), Vo.create(i, this._value());
          case 6:
            return this._advance(), Wo.create(i, this._value());
          case 7:
            return this._advance(), cn.create(i, this._value());
          case 8:
            return this._advance(), Mo.create(i, this._value());
          case 13:
            return this._advance(), Xe.in(i, this._value());
          default:
            return Xe.has(i);
        }
      }
      case 20:
        throw this._parsingErrors.push({ message: t0, offset: t.offset, lexeme: "", additionalInfo: i0 }), Ss._parseError;
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
  _errExpectedButGot(t, i, r) {
    const s = m(1826, null, t, jr.getLexeme(i)), n = i.offset, o = jr.getLexeme(i);
    return this._parsingErrors.push({ message: s, offset: n, lexeme: o, additionalInfo: r }), Ss._parseError;
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
Nu._parseError = new Error();
var r0 = Nu, Xe = class {
  static false() {
    return st.INSTANCE;
  }
  static true() {
    return ft.INSTANCE;
  }
  static has(e) {
    return Qr.create(e);
  }
  static equals(e, t) {
    return No.create(e, t);
  }
  static notEquals(e, t) {
    return Fo.create(e, t);
  }
  static regex(e, t) {
    return $o.create(e, t);
  }
  static in(e, t) {
    return Fu.create(e, t);
  }
  static notIn(e, t) {
    return Mu.create(e, t);
  }
  static not(e) {
    return Jr.create(e);
  }
  static and(...e) {
    return Wu.create(e, null, true);
  }
  static or(...e) {
    return Bo.create(e, null, true);
  }
  static greater(e, t) {
    return cn.create(e, t);
  }
  static greaterEquals(e, t) {
    return Mo.create(e, t);
  }
  static smaller(e, t) {
    return Vo.create(e, t);
  }
  static smallerEquals(e, t) {
    return Wo.create(e, t);
  }
  static function(e, t) {
    return Co.create(e, t);
  }
  static deserialize(e) {
    return e == null ? void 0 : this._parser.parse(e);
  }
};
Xe._parser = new r0({ regexParsingWithErrorRecovery: false });
function Xr(e, t) {
  return e.cmp(t);
}
var Co = class Mn {
  constructor(t, i) {
    this.type = 16, this.id = t, this.fn = i;
  }
  static create(t, i) {
    return jg(t, i), new Mn(t, i);
  }
  static createWithoutRegistration(t, i) {
    return new Mn(t, i);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : qo(this.id, t.id);
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
    return Mn.createWithoutRegistration(`!${this.id}`, () => !this.fn());
  }
}, Oo = class {
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
    return ft.INSTANCE;
  }
};
Oo.INSTANCE = new Oo();
var st = Oo, Uo = class {
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
    return st.INSTANCE;
  }
};
Uo.INSTANCE = new Uo();
var ft = Uo, Qr = class Yf {
  constructor(t, i) {
    this.key = t, this.negated = i, this.type = 2;
  }
  static create(t, i = null) {
    const r = We.get(t);
    return typeof r == "boolean" ? r ? ft.INSTANCE : st.INSTANCE : new Yf(t, i);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : qo(this.key, t.key);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key : false;
  }
  substituteConstants() {
    const t = We.get(this.key);
    return typeof t == "boolean" ? t ? ft.INSTANCE : st.INSTANCE : this;
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
    return this.negated || (this.negated = Jr.create(this.key, this)), this.negated;
  }
}, No = class Zf {
  constructor(t, i, r) {
    this.key = t, this.value = i, this.negated = r, this.type = 4;
  }
  static create(t, i, r = null) {
    if (typeof i == "boolean") return i ? Qr.create(t, r) : Jr.create(t, r);
    const s = We.get(t);
    return typeof s == "boolean" ? i === (s ? "true" : "false") ? ft.INSTANCE : st.INSTANCE : new Zf(t, i, r);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Oi(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    const t = We.get(this.key);
    if (typeof t == "boolean") {
      const i = t ? "true" : "false";
      return this.value === i ? ft.INSTANCE : st.INSTANCE;
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
    return this.negated || (this.negated = Fo.create(this.key, this.value, this)), this.negated;
  }
}, Fu = class ed {
  constructor(t, i) {
    this.key = t, this.valueKey = i, this.type = 10, this.negated = null;
  }
  static create(t, i) {
    return new ed(t, i);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Oi(this.key, this.valueKey, t.key, t.valueKey);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.valueKey === t.valueKey : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    const i = t.getValue(this.valueKey), r = t.getValue(this.key);
    return Array.isArray(i) ? i.includes(r) : typeof r == "string" && typeof i == "object" && i !== null ? Hg.call(i, r) : false;
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
    return this.negated || (this.negated = Mu.create(this.key, this.valueKey)), this.negated;
  }
}, Mu = class td {
  constructor(t, i) {
    this.key = t, this.valueKey = i, this.type = 11, this._negated = Fu.create(t, i);
  }
  static create(t, i) {
    return new td(t, i);
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
}, Fo = class id {
  constructor(t, i, r) {
    this.key = t, this.value = i, this.negated = r, this.type = 5;
  }
  static create(t, i, r = null) {
    if (typeof i == "boolean") return i ? Jr.create(t, r) : Qr.create(t, r);
    const s = We.get(t);
    return typeof s == "boolean" ? i === (s ? "true" : "false") ? st.INSTANCE : ft.INSTANCE : new id(t, i, r);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Oi(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    const t = We.get(this.key);
    if (typeof t == "boolean") {
      const i = t ? "true" : "false";
      return this.value === i ? st.INSTANCE : ft.INSTANCE;
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
    return this.negated || (this.negated = No.create(this.key, this.value, this)), this.negated;
  }
}, Jr = class rd {
  constructor(t, i) {
    this.key = t, this.negated = i, this.type = 3;
  }
  static create(t, i = null) {
    const r = We.get(t);
    return typeof r == "boolean" ? r ? st.INSTANCE : ft.INSTANCE : new rd(t, i);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : qo(this.key, t.key);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key : false;
  }
  substituteConstants() {
    const t = We.get(this.key);
    return typeof t == "boolean" ? t ? st.INSTANCE : ft.INSTANCE : this;
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
    return this.negated || (this.negated = Qr.create(this.key, this)), this.negated;
  }
};
function ln(e, t) {
  if (typeof e == "string") {
    const i = parseFloat(e);
    isNaN(i) || (e = i);
  }
  return typeof e == "string" || typeof e == "number" ? t(e) : st.INSTANCE;
}
var cn = class sd {
  constructor(t, i, r) {
    this.key = t, this.value = i, this.negated = r, this.type = 12;
  }
  static create(t, i, r = null) {
    return ln(i, (s) => new sd(t, s, r));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Oi(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = Wo.create(this.key, this.value, this)), this.negated;
  }
}, Mo = class nd {
  constructor(t, i, r) {
    this.key = t, this.value = i, this.negated = r, this.type = 13;
  }
  static create(t, i, r = null) {
    return ln(i, (s) => new nd(t, s, r));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Oi(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = Vo.create(this.key, this.value, this)), this.negated;
  }
}, Vo = class od {
  constructor(t, i, r) {
    this.key = t, this.value = i, this.negated = r, this.type = 14;
  }
  static create(t, i, r = null) {
    return ln(i, (s) => new od(t, s, r));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Oi(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = Mo.create(this.key, this.value, this)), this.negated;
  }
}, Wo = class ad {
  constructor(t, i, r) {
    this.key = t, this.value = i, this.negated = r, this.type = 15;
  }
  static create(t, i, r = null) {
    return ln(i, (s) => new ad(t, s, r));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Oi(this.key, this.value, t.key, t.value);
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
    return this.negated || (this.negated = cn.create(this.key, this.value, this)), this.negated;
  }
}, $o = class ld {
  constructor(t, i) {
    this.key = t, this.regexp = i, this.type = 7, this.negated = null;
  }
  static create(t, i) {
    return new ld(t, i);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.key < t.key) return -1;
    if (this.key > t.key) return 1;
    const i = this.regexp ? this.regexp.source : "", r = t.regexp ? t.regexp.source : "";
    return i < r ? -1 : i > r ? 1 : 0;
  }
  equals(t) {
    if (t.type === this.type) {
      const i = this.regexp ? this.regexp.source : "", r = t.regexp ? t.regexp.source : "";
      return this.key === t.key && i === r;
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
    return this.negated || (this.negated = s0.create(this)), this.negated;
  }
}, s0 = class Al {
  constructor(t) {
    this._actual = t, this.type = 8;
  }
  static create(t) {
    return new Al(t);
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
    return new Al(this._actual.map(t));
  }
  negate() {
    return this._actual;
  }
};
function Vu(e) {
  let t = null;
  for (let i = 0, r = e.length; i < r; i++) {
    const s = e[i].substituteConstants();
    if (e[i] !== s && t === null) {
      t = [];
      for (let n = 0; n < i; n++) t[n] = e[n];
    }
    t !== null && (t[i] = s);
  }
  return t === null ? e : t;
}
var Wu = class xr {
  constructor(t, i) {
    this.expr = t, this.negated = i, this.type = 6;
  }
  static create(t, i, r) {
    return xr._normalizeArr(t, i, r);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.expr.length < t.expr.length) return -1;
    if (this.expr.length > t.expr.length) return 1;
    for (let i = 0, r = this.expr.length; i < r; i++) {
      const s = Xr(this.expr[i], t.expr[i]);
      if (s !== 0) return s;
    }
    return 0;
  }
  equals(t) {
    if (t.type === this.type) {
      if (this.expr.length !== t.expr.length) return false;
      for (let i = 0, r = this.expr.length; i < r; i++) if (!this.expr[i].equals(t.expr[i])) return false;
      return true;
    }
    return false;
  }
  substituteConstants() {
    const t = Vu(this.expr);
    return t === this.expr ? this : xr.create(t, this.negated, false);
  }
  evaluate(t) {
    for (let i = 0, r = this.expr.length; i < r; i++) if (!this.expr[i].evaluate(t)) return false;
    return true;
  }
  static _normalizeArr(t, i, r) {
    const s = [];
    let n = false;
    for (const o of t) if (o) {
      if (o.type === 1) {
        n = true;
        continue;
      }
      if (o.type === 0) return st.INSTANCE;
      if (o.type === 6) {
        s.push(...o.expr);
        continue;
      }
      s.push(o);
    }
    if (s.length === 0 && n) return ft.INSTANCE;
    if (s.length !== 0) {
      if (s.length === 1) return s[0];
      s.sort(Xr);
      for (let o = 1; o < s.length; o++) s[o - 1].equals(s[o]) && (s.splice(o, 1), o--);
      if (s.length === 1) return s[0];
      for (; s.length > 1; ) {
        const o = s[s.length - 1];
        if (o.type !== 9) break;
        s.pop();
        const a = s.pop(), l = s.length === 0, c = Bo.create(o.expr.map((h) => xr.create([h, a], null, r)), null, l);
        c && (s.push(c), s.sort(Xr));
      }
      if (s.length === 1) return s[0];
      if (r) {
        for (let o = 0; o < s.length; o++) for (let a = o + 1; a < s.length; a++) if (s[o].negate().equals(s[a])) return st.INSTANCE;
        if (s.length === 1) return s[0];
      }
      return new xr(s, i);
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
    return new xr(this.expr.map((i) => i.map(t)), null);
  }
  negate() {
    if (!this.negated) {
      const t = [];
      for (const i of this.expr) t.push(i.negate());
      this.negated = Bo.create(t, this, true);
    }
    return this.negated;
  }
}, Bo = class Ki {
  constructor(t, i) {
    this.expr = t, this.negated = i, this.type = 9;
  }
  static create(t, i, r) {
    return Ki._normalizeArr(t, i, r);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.expr.length < t.expr.length) return -1;
    if (this.expr.length > t.expr.length) return 1;
    for (let i = 0, r = this.expr.length; i < r; i++) {
      const s = Xr(this.expr[i], t.expr[i]);
      if (s !== 0) return s;
    }
    return 0;
  }
  equals(t) {
    if (t.type === this.type) {
      if (this.expr.length !== t.expr.length) return false;
      for (let i = 0, r = this.expr.length; i < r; i++) if (!this.expr[i].equals(t.expr[i])) return false;
      return true;
    }
    return false;
  }
  substituteConstants() {
    const t = Vu(this.expr);
    return t === this.expr ? this : Ki.create(t, this.negated, false);
  }
  evaluate(t) {
    for (let i = 0, r = this.expr.length; i < r; i++) if (this.expr[i].evaluate(t)) return true;
    return false;
  }
  static _normalizeArr(t, i, r) {
    let s = [], n = false;
    if (t) {
      for (let o = 0, a = t.length; o < a; o++) {
        const l = t[o];
        if (l) {
          if (l.type === 0) {
            n = true;
            continue;
          }
          if (l.type === 1) return ft.INSTANCE;
          if (l.type === 9) {
            s = s.concat(l.expr);
            continue;
          }
          s.push(l);
        }
      }
      if (s.length === 0 && n) return st.INSTANCE;
      s.sort(Xr);
    }
    if (s.length !== 0) {
      if (s.length === 1) return s[0];
      for (let o = 1; o < s.length; o++) s[o - 1].equals(s[o]) && (s.splice(o, 1), o--);
      if (s.length === 1) return s[0];
      if (r) {
        for (let o = 0; o < s.length; o++) for (let a = o + 1; a < s.length; a++) if (s[o].negate().equals(s[a])) return ft.INSTANCE;
        if (s.length === 1) return s[0];
      }
      return new Ki(s, i);
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
    return new Ki(this.expr.map((i) => i.map(t)), null);
  }
  negate() {
    if (!this.negated) {
      const t = [];
      for (const i of this.expr) t.push(i.negate());
      for (; t.length > 1; ) {
        const i = t.shift(), r = t.shift(), s = [];
        for (const n of Bu(i)) for (const o of Bu(r)) s.push(Wu.create([n, o], null, false));
        t.unshift(Ki.create(s, null, false));
      }
      this.negated = Ki.create(t, this, true);
    }
    return this.negated;
  }
}, $u = class Vn extends Qr {
  static all() {
    return Vn._info.values();
  }
  constructor(t, i, r) {
    super(t, null), this._defaultValue = i, typeof r == "object" ? Vn._info.push({ ...r, key: t }) : r !== true && Vn._info.push({ key: t, description: r, type: i != null ? typeof i : void 0 });
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
    return No.create(this.key, t);
  }
  notEqualsTo(t) {
    return Fo.create(this.key, t);
  }
  greater(t) {
    return cn.create(this.key, t);
  }
};
$u._info = [];
var n0 = $u, Ew = ue("contextKeyService");
function qo(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Oi(e, t, i, r) {
  return e < i ? -1 : e > i ? 1 : t < r ? -1 : t > r ? 1 : 0;
}
function Bu(e) {
  return e.type === 9 ? e.expr : [e];
}
var pe = ue("logService"), o0 = ue("loggerService"), Se = ((e) => (e[e.Off = 0] = "Off", e[e.Trace = 1] = "Trace", e[e.Debug = 2] = "Debug", e[e.Info = 3] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 5] = "Error", e))(Se || {}), zo = 3;
function a0(e, t) {
  return e !== 0 && e <= t;
}
function ur(e, t = false) {
  let i = "";
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s instanceof Error && (s = Ti(s, t)), typeof s == "object") try {
      s = JSON.stringify(s);
    } catch {
    }
    i += (r > 0 ? " " : "") + s;
  }
  return i;
}
var Go = class extends X {
  constructor() {
    super(...arguments), this.level = zo, this._onDidChangeLogLevel = this._register(new M()), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event;
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
    return a0(this.level, e);
  }
  canLog(e) {
    return this._store.isDisposed ? false : this.checkLogLevel(e);
  }
}, l0 = class extends Go {
  constructor(e) {
    super(), this.logAlways = e;
  }
  checkLogLevel(e) {
    return this.logAlways || super.checkLogLevel(e);
  }
  trace(e, ...t) {
    this.canLog(1) && this.log(1, ur([e, ...t], true));
  }
  debug(e, ...t) {
    this.canLog(2) && this.log(2, ur([e, ...t]));
  }
  info(e, ...t) {
    this.canLog(3) && this.log(3, ur([e, ...t]));
  }
  warn(e, ...t) {
    this.canLog(4) && this.log(4, ur([e, ...t]));
  }
  error(e, ...t) {
    if (this.canLog(5)) if (e instanceof Error) {
      const i = Array.prototype.slice.call(arguments);
      i[0] = e.stack, this.log(5, ur(i));
    } else this.log(5, ur([e, ...t]));
  }
  flush() {
  }
}, Ui = class extends Go {
  constructor(e = zo, t = true) {
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
}, c0 = class extends Go {
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
}, u0 = class extends X {
  constructor(e, t, i) {
    if (super(), this.logLevel = e, this.logsHome = t, this._loggers = new Ye(), this._onDidChangeLoggers = this._register(new M()), this.onDidChangeLoggers = this._onDidChangeLoggers.event, this._onDidChangeLogLevel = this._register(new M()), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event, this._onDidChangeVisibility = this._register(new M()), this.onDidChangeVisibility = this._onDidChangeVisibility.event, i) for (const r of i) this._loggers.set(r.resource, { logger: void 0, info: r });
  }
  getLoggerEntry(e) {
    return Te(e) ? [...this._loggers.values()].find((t) => t.info.id === e) : this._loggers.get(e);
  }
  getLogger(e) {
    return this.getLoggerEntry(e)?.logger;
  }
  createLogger(e, t) {
    const i = this.toResource(e), r = Te(e) ? e : t?.id ?? cr(i.toString()).toString(16);
    let s = this._loggers.get(i)?.logger;
    const n = t?.logLevel === "always" ? 1 : t?.logLevel;
    s || (s = this.doCreateLogger(i, n ?? this.getLogLevel(i) ?? this.logLevel, { ...t, id: r }));
    const o = { logger: s, info: { resource: i, id: r, logLevel: n, name: t?.name, hidden: t?.hidden, group: t?.group, extensionId: t?.extensionId, workspaceId: t?.workspaceId, when: t?.when } };
    return this.registerLogger(o.info), this._loggers.set(i, o), s;
  }
  toResource(e) {
    return Te(e) ? z(this.logsHome, `${e}.log`) : e;
  }
  setLogLevel(e, t) {
    if (k.isUri(e)) {
      const i = e, r = t, s = this._loggers.get(i);
      s && r !== s.info.logLevel && (s.info.logLevel = r === this.logLevel ? void 0 : r, s.logger?.setLevel(r), this._loggers.set(s.info.resource, s), this._onDidChangeLogLevel.fire([i, r]));
    } else {
      this.logLevel = e;
      for (const [i, r] of this._loggers.entries()) this._loggers.get(i)?.info.logLevel === void 0 && r.logger?.setLevel(this.logLevel);
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
}, h0 = class {
  constructor() {
    this._isDisposed = false, this.onDidChangeLogLevel = new M().event;
  }
  get isDisposed() {
    return this._isDisposed;
  }
  setLevel(e) {
  }
  getLevel() {
    return 3;
  }
  trace(e, ...t) {
  }
  debug(e, ...t) {
  }
  info(e, ...t) {
  }
  warn(e, ...t) {
  }
  error(e, ...t) {
  }
  critical(e, ...t) {
  }
  dispose() {
    this._isDisposed = true;
  }
  flush() {
  }
}, f0 = class extends h0 {
  get vscodeService() {
    return this;
  }
};
function d0(e) {
  if (e.verbose) return 1;
  if (typeof e.logLevel == "string") {
    const t = g0(e.logLevel.toLowerCase());
    if (t !== void 0) return t;
  }
  return zo;
}
function p0(e) {
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
function g0(e) {
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
var Sw = new n0("logLevel", p0(3));
b();
var qu = ue("policy"), zu = class extends X {
  constructor() {
    super(...arguments), this.policyDefinitions = {}, this.policies = /* @__PURE__ */ new Map(), this._onDidChange = this._register(new M()), this.onDidChange = this._onDidChange.event;
  }
  async updatePolicyDefinitions(e) {
    const t = Object.keys(this.policyDefinitions).length;
    return this.policyDefinitions = { ...e, ...this.policyDefinitions }, t !== Object.keys(this.policyDefinitions).length && await this._updatePolicyDefinitions(this.policyDefinitions), xi.reduce(this.policies.entries(), (i, [r, s]) => ({ ...i, [r]: s }), {});
  }
  getPolicyValue(e) {
    return this.policies.get(e);
  }
  serialize() {
    return xi.reduce(Object.entries(this.policyDefinitions), (e, [t, i]) => ({ ...e, [t]: { definition: i, value: this.policies.get(t) } }), {});
  }
}, Gu = class {
  constructor() {
    this.onDidChange = ne.None, this.policyDefinitions = {};
  }
  async updatePolicyDefinitions() {
    return {};
  }
  getPolicyValue() {
  }
  serialize() {
  }
}, m0 = class extends X {
  constructor(e) {
    super(), this.logService = e, this._onDidChangeConfiguration = this._register(new M()), this.onDidChangeConfiguration = this._onDidChangeConfiguration.event, this._configurationModel = Oe.createEmptyModel(this.logService);
  }
  get configurationModel() {
    return this._configurationModel;
  }
  async initialize() {
    return this.resetConfigurationModel(), this._register(Ft.as(di.Configuration).onDidUpdateConfiguration(({ properties: e, defaultsOverrides: t }) => this.onDidUpdateConfiguration(Array.from(e), t))), this.configurationModel;
  }
  reload() {
    return this.resetConfigurationModel(), this.configurationModel;
  }
  onDidUpdateConfiguration(e, t) {
    this.updateConfigurationModel(e, Ft.as(di.Configuration).getConfigurationProperties()), this._onDidChangeConfiguration.fire({ defaults: this.configurationModel, properties: e });
  }
  getConfigurationDefaultOverrides() {
    return {};
  }
  resetConfigurationModel() {
    this._configurationModel = Oe.createEmptyModel(this.logService);
    const e = Ft.as(di.Configuration).getConfigurationProperties();
    this.updateConfigurationModel(Object.keys(e), e);
  }
  updateConfigurationModel(e, t) {
    const i = this.getConfigurationDefaultOverrides();
    for (const r of e) {
      const s = i[r], n = t[r];
      s !== void 0 ? this._configurationModel.setValue(r, s) : n ? this._configurationModel.setValue(r, Yt(n.default)) : this._configurationModel.removeValue(r);
    }
  }
}, v0 = class {
  constructor() {
    this.onDidChangeConfiguration = ne.None, this.configurationModel = Oe.createEmptyModel(new f0());
  }
  async initialize() {
    return this.configurationModel;
  }
}, Ko = class extends X {
  constructor(e, t, i) {
    super(), this.defaultConfiguration = e, this.policyService = t, this.logService = i, this._onDidChangeConfiguration = this._register(new M()), this.onDidChangeConfiguration = this._onDidChangeConfiguration.event, this._configurationModel = Oe.createEmptyModel(this.logService), this.configurationRegistry = Ft.as(di.Configuration);
  }
  get configurationModel() {
    return this._configurationModel;
  }
  async initialize() {
    return this.logService.trace("PolicyConfiguration#initialize"), this.update(await this.updatePolicyDefinitions(this.defaultConfiguration.configurationModel.keys), false), this.update(await this.updatePolicyDefinitions(Object.keys(this.configurationRegistry.getExcludedConfigurationProperties())), false), this._register(this.policyService.onDidChange((e) => this.onDidChangePolicies(e))), this._register(this.defaultConfiguration.onDidChangeConfiguration(async ({ properties: e }) => this.update(await this.updatePolicyDefinitions(e), true))), this._configurationModel;
  }
  async updatePolicyDefinitions(e) {
    this.logService.trace("PolicyConfiguration#updatePolicyDefinitions", e);
    const t = {}, i = [], r = this.configurationRegistry.getConfigurationProperties(), s = this.configurationRegistry.getExcludedConfigurationProperties();
    for (const n of e) {
      const o = r[n] ?? s[n];
      if (!o) {
        i.push(n);
        continue;
      }
      if (o.policy) {
        if (o.type !== "string" && o.type !== "number" && o.type !== "array" && o.type !== "object" && o.type !== "boolean") {
          this.logService.warn(`Policy ${o.policy.name} has unsupported type ${o.type}`);
          continue;
        }
        const { defaultValue: a, previewFeature: l } = o.policy;
        i.push(n), t[o.policy.name] = { type: o.type === "number" ? "number" : o.type === "boolean" ? "boolean" : "string", previewFeature: l, defaultValue: a };
      }
    }
    return Jl(t) || await this.policyService.updatePolicyDefinitions(t), i;
  }
  onDidChangePolicies(e) {
    this.logService.trace("PolicyConfiguration#onDidChangePolicies", e);
    const t = this.configurationRegistry.getPolicyConfigurations(), i = Xi(e.map((r) => t.get(r)));
    this.update(i, true);
  }
  update(e, t) {
    this.logService.trace("PolicyConfiguration#update", e);
    const i = this.configurationRegistry.getConfigurationProperties(), r = this.configurationRegistry.getExcludedConfigurationProperties(), s = [], n = this._configurationModel.isEmpty();
    for (const o of e) {
      const a = i[o] ?? r[o], l = a?.policy?.name;
      if (l) {
        let c = this.policyService.getPolicyValue(l);
        if (Te(c) && a.type !== "string") try {
          c = this.parse(c);
        } catch (h) {
          this.logService.error(`Error parsing policy value ${l}:`, q(h));
          continue;
        }
        (n ? c !== void 0 : !Nt(this._configurationModel.getValue(o), c)) && s.push([o, c]);
      } else this._configurationModel.getValue(o) !== void 0 && s.push([o, void 0]);
    }
    if (s.length) {
      this.logService.trace("PolicyConfiguration#changed", s);
      const o = this._configurationModel;
      this._configurationModel = Oe.createEmptyModel(this.logService);
      for (const a of o.keys) this._configurationModel.setValue(a, o.getValue(a));
      for (const [a, l] of s) l === void 0 ? this._configurationModel.removeValue(a) : this._configurationModel.setValue(a, l);
      t && this._onDidChangeConfiguration.fire(this._configurationModel);
    }
  }
  parse(e) {
    let t = {}, i = null, r = [];
    const s = [], n = [];
    function o(l) {
      if (Array.isArray(r)) r.push(l);
      else if (i !== null) {
        if (r[i] !== void 0) throw new Error(`Duplicate property found: ${i}`);
        r[i] = l;
      }
    }
    if (e && (Xs(e, { onObjectBegin: () => {
      const l = {};
      o(l), s.push(r), r = l, i = null;
    }, onObjectProperty: (l) => {
      i = l;
    }, onObjectEnd: () => {
      r = s.pop();
    }, onArrayBegin: () => {
      const l = [];
      o(l), s.push(r), r = l, i = null;
    }, onArrayEnd: () => {
      r = s.pop();
    }, onLiteralValue: o, onError: (l, c, h) => {
      n.push({ error: l, offset: c, length: h });
    } }), t = r[0] || {}), n.length > 0) throw new Error(n.map((l) => q(l.error)).join(`
`));
    return t;
  }
};
Ko = N([x(1, qu), x(2, pe)], Ko);
var y0 = class extends X {
  constructor(e, t, i, r) {
    super(), this.settingsResource = e, this.logService = r, this._onDidChangeConfiguration = this._register(new M()), this.onDidChangeConfiguration = this._onDidChangeConfiguration.event, this.defaultConfiguration = this._register(new m0(r)), this.policyConfiguration = i instanceof Gu ? new v0() : this._register(new Ko(this.defaultConfiguration, i, r)), this.userConfiguration = this._register(new Mg(this.settingsResource, {}, mo, t, r)), this.configuration = new Ao(this.defaultConfiguration.configurationModel, this.policyConfiguration.configurationModel, Oe.createEmptyModel(r), Oe.createEmptyModel(r), Oe.createEmptyModel(r), Oe.createEmptyModel(r), new Ye(), Oe.createEmptyModel(r), new Ye(), r), this.configurationEditing = new w0(e, t, this), this.reloadConfigurationScheduler = this._register(new zs(() => this.reloadConfiguration(), 50)), this._register(this.defaultConfiguration.onDidChangeConfiguration(({ defaults: s, properties: n }) => this.onDidDefaultConfigurationChange(s, n))), this._register(this.policyConfiguration.onDidChangeConfiguration((s) => this.onDidPolicyConfigurationChange(s))), this._register(this.userConfiguration.onDidChange(() => this.reloadConfigurationScheduler.schedule()));
  }
  get isDisposed() {
    return this._store.isDisposed;
  }
  async initialize() {
    const [e, t, i] = await Promise.all([this.defaultConfiguration.initialize(), this.policyConfiguration.initialize(), this.userConfiguration.loadConfiguration()]);
    this.configuration = new Ao(e, t, Oe.createEmptyModel(this.logService), i, Oe.createEmptyModel(this.logService), Oe.createEmptyModel(this.logService), new Ye(), Oe.createEmptyModel(this.logService), new Ye(), this.logService);
  }
  getConfigurationData() {
    return this.configuration.toData();
  }
  getValue(e, t) {
    const i = typeof e == "string" ? e : void 0, r = wo(e) ? e : wo(t) ? t : {};
    return this.configuration.getValue(i, r, void 0);
  }
  async updateValue(e, t, i, r, s) {
    const n = tg(i) ? i : wo(i) ? { resource: i.resource, overrideIdentifiers: i.overrideIdentifier ? [i.overrideIdentifier] : void 0 } : void 0, o = n ? r : i;
    if (o !== void 0 && o !== 3 && o !== 2) throw new Error(`Unable to write ${e} to target ${o}.`);
    n?.overrideIdentifiers && (n.overrideIdentifiers = $t(n.overrideIdentifiers), n.overrideIdentifiers = n.overrideIdentifiers.length ? n.overrideIdentifiers : void 0);
    const a = this.inspect(e, { resource: n?.resource, overrideIdentifier: n?.overrideIdentifiers ? n.overrideIdentifiers[0] : void 0 });
    if (a.policyValue !== void 0) throw new Error(`Unable to write ${e} because it is configured in system policy.`);
    if (Nt(t, a.defaultValue) && (t = void 0), n?.overrideIdentifiers?.length && n.overrideIdentifiers.length > 1) {
      const c = n.overrideIdentifiers.sort(), h = this.configuration.localUserConfiguration.overrides.find((f) => Hi([...f.identifiers].sort(), c));
      h && (n.overrideIdentifiers = h.identifiers);
    }
    const l = n?.overrideIdentifiers?.length ? [wg(n.overrideIdentifiers), e] : [e];
    await this.configurationEditing.write(l, t), await this.reloadConfiguration();
  }
  inspect(e, t = {}) {
    return this.configuration.inspect(e, t, void 0);
  }
  keys() {
    return this.configuration.keys(void 0);
  }
  async reloadConfiguration() {
    const e = await this.userConfiguration.loadConfiguration();
    this.onDidChangeUserConfiguration(e);
  }
  onDidChangeUserConfiguration(e) {
    const t = this.configuration.toData(), i = this.configuration.compareAndUpdateLocalUserConfiguration(e);
    this.trigger(i, t, 2);
  }
  onDidDefaultConfigurationChange(e, t) {
    const i = this.configuration.toData(), r = this.configuration.compareAndUpdateDefaultConfiguration(e, t);
    this.trigger(r, i, 7);
  }
  onDidPolicyConfigurationChange(e) {
    const t = this.configuration.toData(), i = this.configuration.compareAndUpdatePolicyConfiguration(e);
    this.trigger(i, t, 7);
  }
  trigger(e, t, i) {
    const r = new Wg(e, { data: t }, this.configuration, void 0, this.logService);
    r.source = i, this._onDidChangeConfiguration.fire(r);
  }
}, w0 = class {
  constructor(e, t, i) {
    this.settingsResource = e, this.fileService = t, this.configurationService = i, this.queue = new Fr();
  }
  write(e, t) {
    return this.queue.queue(() => this.doWriteConfiguration(e, t));
  }
  async doWriteConfiguration(e, t) {
    let i;
    try {
      i = (await this.fileService.readFile(this.settingsResource)).value.toString();
    } catch (n) {
      if (n.fileOperationResult === 1) i = "{}";
      else throw n;
    }
    const r = [];
    if (Vr(i, r, { allowTrailingComma: true, allowEmptyContent: true }), r.length > 0) throw new Error("Unable to write into the settings file. Please open the file to correct errors/warnings in the file and try again.");
    const s = this.getEdits(i, e, t);
    i = cg(i, s), await this.fileService.writeFile(this.settingsResource, $.fromString(i));
  }
  getEdits(e, t, i) {
    const { tabSize: r, insertSpaces: s, eol: n } = this.formattingOptions;
    if (!t.length) {
      const o = JSON.stringify(i, null, s ? " ".repeat(r) : "	");
      return [{ content: o, length: o.length, offset: 0 }];
    }
    return lg(e, t, i, { tabSize: r, insertSpaces: s, eol: n });
  }
  get formattingOptions() {
    if (!this._formattingOptions) {
      let e = ro === Yi.Linux || ro === Yi.Macintosh ? `
` : `\r
`;
      const t = this.configurationService.getValue("files.eol", { overrideIdentifier: "jsonc" });
      t && typeof t == "string" && t !== "auto" && (e = t), this._formattingOptions = { eol: e, insertSpaces: !!this.configurationService.getValue("editor.insertSpaces", { overrideIdentifier: "jsonc" }), tabSize: this.configurationService.getValue("editor.tabSize", { overrideIdentifier: "jsonc" }) };
    }
    return this._formattingOptions;
  }
};
b();
var Ku = ue("downloadService");
b(), b(), b();
var _0 = class {
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
}, E0 = class {
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
    return this._caseSensitive ? lo(e, this._value, 0, e.length, this._from, this._to) : ki(e, this._value, 0, e.length, this._from, this._to);
  }
  value() {
    return this._value.substring(this._from, this._to);
  }
}, ju = class {
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
    return this._caseSensitive ? lo(e, this._value, 0, e.length, this._from, this._to) : ki(e, this._value, 0, e.length, this._from, this._to);
  }
  value() {
    return this._value.substring(this._from, this._to);
  }
}, S0 = class {
  constructor(e, t) {
    this._ignorePathCasing = e, this._ignoreQueryAndFragment = t, this._states = [], this._stateIdx = 0;
  }
  reset(e) {
    return this._value = e, this._states = [], this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && (this._pathIterator = new ju(false, !this._ignorePathCasing(e)), this._pathIterator.reset(e.path), this._pathIterator.value() && this._states.push(3)), this._ignoreQueryAndFragment(e) || (this._value.query && this._states.push(4), this._value.fragment && this._states.push(5)), this._stateIdx = 0, this;
  }
  next() {
    return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() ? this._pathIterator.next() : this._stateIdx += 1, this;
  }
  hasNext() {
    return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
  }
  cmp(e) {
    if (this._states[this._stateIdx] === 1) return Ns(e, this._value.scheme);
    if (this._states[this._stateIdx] === 2) return Ns(e, this._value.authority);
    if (this._states[this._stateIdx] === 3) return this._pathIterator.cmp(e);
    if (this._states[this._stateIdx] === 4) return ao(e, this._value.query);
    if (this._states[this._stateIdx] === 5) return ao(e, this._value.fragment);
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
}, Hu = class kl {
  static wrap(t) {
    return t === void 0 ? kl.Val : t;
  }
  static unwrap(t) {
    return t === kl.Val ? void 0 : t;
  }
};
Hu.Val = /* @__PURE__ */ Symbol("undefined_placeholder");
var Ni = Hu, un = class {
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
}, hr = class bs {
  static forUris(t = () => false, i = () => false) {
    return new bs(new S0(t, i));
  }
  static forPaths(t = false) {
    return new bs(new ju(void 0, !t));
  }
  static forStrings() {
    return new bs(new _0());
  }
  static forConfigKeys() {
    return new bs(new E0());
  }
  constructor(t) {
    this._iter = t;
  }
  clear() {
    this._root = void 0;
  }
  fill(t, i) {
    if (i) {
      const r = i.slice(0);
      zl(r);
      for (const s of r) this.set(s, t);
    } else {
      const r = t.slice(0);
      zl(r);
      for (const s of r) this.set(s[0], s[1]);
    }
  }
  set(t, i) {
    const r = this._iter.reset(t);
    let s;
    this._root || (this._root = new un(), this._root.segment = r.value());
    const n = [];
    for (s = this._root; ; ) {
      const a = r.cmp(s.segment);
      if (a > 0) s.left || (s.left = new un(), s.left.segment = r.value()), n.push([-1, s]), s = s.left;
      else if (a < 0) s.right || (s.right = new un(), s.right.segment = r.value()), n.push([1, s]), s = s.right;
      else if (r.hasNext()) r.next(), s.mid || (s.mid = new un(), s.mid.segment = r.value()), n.push([0, s]), s = s.mid;
      else break;
    }
    const o = Ni.unwrap(s.value);
    s.value = Ni.wrap(i), s.key = t;
    for (let a = n.length - 1; a >= 0; a--) {
      const l = n[a][1];
      l.updateHeight();
      const c = l.balanceFactor();
      if (c < -1 || c > 1) {
        const h = n[a][0], f = n[a + 1][0];
        if (h === 1 && f === 1) n[a][1] = l.rotateLeft();
        else if (h === -1 && f === -1) n[a][1] = l.rotateRight();
        else if (h === 1 && f === -1) l.right = n[a + 1][1] = n[a + 1][1].rotateRight(), n[a][1] = l.rotateLeft();
        else if (h === -1 && f === 1) l.left = n[a + 1][1] = n[a + 1][1].rotateLeft(), n[a][1] = l.rotateRight();
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
    return Ni.unwrap(this._getNode(t)?.value);
  }
  _getNode(t) {
    const i = this._iter.reset(t);
    let r = this._root;
    for (; r; ) {
      const s = i.cmp(r.segment);
      if (s > 0) r = r.left;
      else if (s < 0) r = r.right;
      else if (i.hasNext()) i.next(), r = r.mid;
      else break;
    }
    return r;
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
    const r = this._iter.reset(t), s = [];
    let n = this._root;
    for (; n; ) {
      const o = r.cmp(n.segment);
      if (o > 0) s.push([-1, n]), n = n.left;
      else if (o < 0) s.push([1, n]), n = n.right;
      else if (r.hasNext()) r.next(), s.push([0, n]), n = n.mid;
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
        if (s.length > 0) {
          const [a, l] = s[s.length - 1];
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
      for (let o = s.length - 1; o >= 0; o--) {
        const a = s[o][1];
        a.updateHeight();
        const l = a.balanceFactor();
        if (l > 1 ? (a.right.balanceFactor() >= 0 || (a.right = a.right.rotateRight()), s[o][1] = a.rotateLeft()) : l < -1 && (a.left.balanceFactor() <= 0 || (a.left = a.left.rotateLeft()), s[o][1] = a.rotateRight()), o > 0) switch (s[o - 1][0]) {
          case -1:
            s[o - 1][1].left = s[o][1];
            break;
          case 1:
            s[o - 1][1].right = s[o][1];
            break;
          case 0:
            s[o - 1][1].mid = s[o][1];
            break;
        }
        else this._root = s[0][1];
      }
    }
  }
  _min(t) {
    for (; t.left; ) t = t.left;
    return t;
  }
  findSubstr(t) {
    const i = this._iter.reset(t);
    let r = this._root, s;
    for (; r; ) {
      const n = i.cmp(r.segment);
      if (n > 0) r = r.left;
      else if (n < 0) r = r.right;
      else if (i.hasNext()) i.next(), s = Ni.unwrap(r.value) || s, r = r.mid;
      else break;
    }
    return r && Ni.unwrap(r.value) || s;
  }
  findSuperstr(t) {
    return this._findSuperstrOrElement(t, false);
  }
  _findSuperstrOrElement(t, i) {
    const r = this._iter.reset(t);
    let s = this._root;
    for (; s; ) {
      const n = r.cmp(s.segment);
      if (n > 0) s = s.left;
      else if (n < 0) s = s.right;
      else if (r.hasNext()) r.next(), s = s.mid;
      else return s.mid ? this._entries(s.mid) : i ? Ni.unwrap(s.value) : void 0;
    }
  }
  hasElementOrSubtree(t) {
    return this._findSuperstrOrElement(t, true) !== void 0;
  }
  forEach(t) {
    for (const [i, r] of this) t(r, i);
  }
  *[Symbol.iterator]() {
    yield* this._entries(this._root);
  }
  _entries(t) {
    const i = [];
    return this._dfsEntries(t, i), i[Symbol.iterator]();
  }
  _dfsEntries(t, i) {
    t && (t.left && this._dfsEntries(t.left, i), t.value !== void 0 && i.push([t.key, Ni.unwrap(t.value)]), t.mid && this._dfsEntries(t.mid, i), t.right && this._dfsEntries(t.right, i));
  }
  _isBalanced() {
    const t = (i) => {
      if (!i) return true;
      const r = i.balanceFactor();
      return r < -1 || r > 1 ? false : t(i.left) && t(i.right);
    };
    return t(this._root);
  }
}, ke = ue("fileService");
function fr(e) {
  return e.create === true;
}
var yt = ((e) => (e[e.Unknown = 0] = "Unknown", e[e.File = 1] = "File", e[e.Directory = 2] = "Directory", e[e.SymbolicLink = 64] = "SymbolicLink", e))(yt || {}), Yr = ((e) => (e[e.Readonly = 1] = "Readonly", e[e.Locked = 2] = "Locked", e))(Yr || {});
function Et(e) {
  return !!(e.capabilities & 2);
}
function jo(e) {
  return !!(e.capabilities & 262144) && typeof e.readdirWithMetadata == "function";
}
function Ho(e) {
  return !!(e.capabilities & 8);
}
function Xu(e) {
  return !!(e.capabilities & 131072);
}
function mi(e) {
  return !!(e.capabilities & 4);
}
function Xo(e) {
  return !!(e.capabilities & 16);
}
function Qo(e) {
  return Et(e) ? !!(e.capabilities & 16384) : false;
}
function Qu(e) {
  return Et(e) ? !!(e.capabilities & 32768) : false;
}
function b0(e) {
  return !!(e.capabilities & 65536);
}
var Fe = ((e) => (e.FileExists = "EntryExists", e.FileNotFound = "EntryNotFound", e.FileNotADirectory = "EntryNotADirectory", e.FileIsADirectory = "EntryIsADirectory", e.FileExceedsStorageQuota = "EntryExceedsStorageQuota", e.FileTooLarge = "EntryTooLarge", e.FileWriteLocked = "EntryWriteLocked", e.NoPermissions = "NoPermissions", e.Unavailable = "Unavailable", e.Unknown = "Unknown", e))(Fe || {}), Jo = class cd extends Error {
  constructor(t, i) {
    super(t), this.code = i;
  }
  static create(t, i) {
    const r = new cd(t.toString(), i);
    return x0(r, i), r;
  }
};
function Vt(e, t) {
  return Jo.create(e, t);
}
function Fi(e) {
  return e || Vt(m(2023, null), "Unknown");
}
function x0(e, t) {
  return e.name = t ? `${t} (FileSystemError)` : "FileSystemError", e;
}
function hn(e) {
  if (!e) return "Unknown";
  if (e instanceof Jo) return e.code;
  const t = /^(.+) \(FileSystemError\)$/.exec(e.name);
  if (!t) return "Unknown";
  switch (t[1]) {
    case "EntryExists":
      return "EntryExists";
    case "EntryIsADirectory":
      return "EntryIsADirectory";
    case "EntryNotADirectory":
      return "EntryNotADirectory";
    case "EntryNotFound":
      return "EntryNotFound";
    case "EntryTooLarge":
      return "EntryTooLarge";
    case "EntryWriteLocked":
      return "EntryWriteLocked";
    case "NoPermissions":
      return "NoPermissions";
    case "Unavailable":
      return "Unavailable";
  }
  return "Unknown";
}
function Ge(e) {
  if (e instanceof nt) return e.fileOperationResult;
  if (bi(e)) return 11;
  switch (hn(e)) {
    case "EntryNotFound":
      return 1;
    case "EntryIsADirectory":
      return 0;
    case "EntryNotADirectory":
      return 9;
    case "EntryWriteLocked":
      return 5;
    case "NoPermissions":
      return 6;
    case "EntryExists":
      return 4;
    case "EntryTooLarge":
      return 7;
    default:
      return 10;
  }
}
var dr = class {
  constructor(e, t, i) {
    this.resource = e, this.operation = t, this.target = i;
  }
  isOperation(e) {
    return this.operation === e;
  }
}, Ju = class Wn {
  constructor(t, i) {
    this.ignorePathCasing = i, this.correlationId = void 0, this.added = new hi(() => {
      const r = hr.forUris(() => this.ignorePathCasing);
      return r.fill(this.rawAdded.map((s) => [s, true])), r;
    }), this.updated = new hi(() => {
      const r = hr.forUris(() => this.ignorePathCasing);
      return r.fill(this.rawUpdated.map((s) => [s, true])), r;
    }), this.deleted = new hi(() => {
      const r = hr.forUris(() => this.ignorePathCasing);
      return r.fill(this.rawDeleted.map((s) => [s, true])), r;
    }), this.rawAdded = [], this.rawUpdated = [], this.rawDeleted = [];
    for (const r of t) {
      switch (r.type) {
        case 1:
          this.rawAdded.push(r.resource);
          break;
        case 0:
          this.rawUpdated.push(r.resource);
          break;
        case 2:
          this.rawDeleted.push(r.resource);
          break;
      }
      this.correlationId !== Wn.MIXED_CORRELATION && (typeof r.cId == "number" ? this.correlationId === void 0 ? this.correlationId = r.cId : this.correlationId !== r.cId && (this.correlationId = Wn.MIXED_CORRELATION) : this.correlationId !== void 0 && (this.correlationId = Wn.MIXED_CORRELATION));
    }
  }
  contains(t, ...i) {
    return this.doContains(t, { includeChildren: false }, ...i);
  }
  affects(t, ...i) {
    return this.doContains(t, { includeChildren: true }, ...i);
  }
  doContains(t, i, ...r) {
    if (!t) return false;
    const s = r.length > 0;
    return !!((!s || r.includes(1)) && (this.added.value.get(t) || i.includeChildren && this.added.value.findSuperstr(t)) || (!s || r.includes(0)) && (this.updated.value.get(t) || i.includeChildren && this.updated.value.findSuperstr(t)) || (!s || r.includes(2)) && (this.deleted.value.findSubstr(t) || i.includeChildren && this.deleted.value.findSuperstr(t)));
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
Ju.MIXED_CORRELATION = null;
var I0 = Ju;
function P0(e, t, i) {
  return !e || !t || e === t || t.length > e.length ? false : (t.charAt(t.length - 1) !== it && (t += it), i ? kc(e, t) : e.indexOf(t) === 0);
}
var nt = class extends Error {
  constructor(e, t, i) {
    super(e), this.fileOperationResult = t, this.options = i;
  }
}, Yo = class extends nt {
  constructor(e, t, i, r) {
    super(e, t, r), this.fileOperationResult = t, this.size = i;
  }
}, Zo = class extends nt {
  constructor(e, t, i) {
    super(e, 2, i), this.stat = t;
  }
}, ea = "";
function Yu(e) {
  if (!(typeof e.size != "number" || typeof e.mtime != "number")) return e.mtime.toString(29) + e.size.toString(31);
}
var kt = class si {
  static formatSize(t) {
    return jn(t) || (t = 0), t < si.KB ? m(2024, null, t.toFixed(0)) : t < si.MB ? m(2025, null, (t / si.KB).toFixed(2)) : t < si.GB ? m(2026, null, (t / si.MB).toFixed(2)) : t < si.TB ? m(2027, null, (t / si.GB).toFixed(2)) : m(2028, null, (t / si.TB).toFixed(2));
  }
};
kt.KB = 1024, kt.MB = kt.KB * kt.KB, kt.GB = kt.MB * kt.KB, kt.TB = kt.GB * kt.KB;
var R0 = kt;
b();
var Zr = ue("requestService"), A0 = class {
  constructor(e) {
    this.original = e;
  }
  toJSON() {
    if (!this.headers) {
      const e = /* @__PURE__ */ Object.create(null);
      for (const t in this.original) t.toLowerCase() === "authorization" || t.toLowerCase() === "proxy-authorization" ? e[t] = "*****" : e[t] = this.original[t];
      this.headers = e;
    }
    return this.headers;
  }
}, k0 = class extends X {
  constructor(e) {
    super(), this.logService = e, this.counter = 0;
  }
  async logAndRequest(e, t) {
    const i = `#${++this.counter}: ${e.url}`;
    this.logService.trace(`${i} - begin`, e.type, new A0(e.headers ?? {}));
    try {
      const r = await t();
      return this.logService.trace(`${i} - end`, e.type, r.res.statusCode, r.res.headers), r;
    } catch (r) {
      throw this.logService.error(`${i} - error`, e.type, q(r)), r;
    }
  }
};
function Zu(e) {
  return e.res.statusCode && e.res.statusCode >= 200 && e.res.statusCode < 300 || e.res.statusCode === 1223;
}
function eh(e) {
  return e.res.statusCode === 204;
}
async function D0(e, t) {
  if (eh(e)) return null;
  const i = await rr(e.stream);
  return Vc(t ?? { source: "http" }, () => i.toString());
}
async function pr(e, t) {
  if (!Zu(e)) throw new Error("Server returned " + e.res.statusCode);
  return D0(e, t);
}
async function fn(e, t) {
  if (!Zu(e)) throw new Error("Server returned " + e.res.statusCode);
  if (eh(e)) return null;
  const i = await rr(e.stream), r = Vc(t ?? { source: "http" }, () => i.toString());
  try {
    return JSON.parse(r);
  } catch (s) {
    throw s.message += `:
` + r, s;
  }
}
var ta = [], th = void 0, ih = void 0;
function L0(e = true, t = true) {
  if (th === e && ih === t) return;
  th = e, ih = t;
  const i = Ft.as(di.Configuration), r = ta;
  ta = [{ id: "http", order: 15, title: m(2221, null), type: "object", scope: 2, properties: { "http.useLocalProxyConfiguration": { type: "boolean", default: t, markdownDescription: m(2222, null), restricted: true } } }, { id: "http", order: 15, title: m(2223, null), type: "object", scope: 1, properties: { "http.electronFetch": { type: "boolean", default: false, description: m(2224, null), restricted: true } } }, { id: "http", order: 15, title: m(2225, null), type: "object", scope: e ? 1 : 2, properties: { "http.proxy": { type: "string", pattern: "^(https?|socks|socks4a?|socks5h?)://([^:]*(:[^@]*)?@)?([^:]+|\\[[:0-9a-fA-F]+\\])(:\\d+)?/?$|^$", markdownDescription: m(2226, null, "`#http.useLocalProxyConfiguration#`"), restricted: true }, "http.proxyStrictSSL": { type: "boolean", default: true, markdownDescription: m(2227, null, "`#http.useLocalProxyConfiguration#`"), restricted: true }, "http.proxyKerberosServicePrincipal": { type: "string", markdownDescription: m(2228, null, "`#http.useLocalProxyConfiguration#`"), restricted: true }, "http.noProxy": { type: "array", items: { type: "string" }, markdownDescription: m(2229, null, "`#http.useLocalProxyConfiguration#`"), restricted: true }, "http.proxyAuthorization": { type: ["null", "string"], default: null, markdownDescription: m(2230, null, "`#http.useLocalProxyConfiguration#`"), restricted: true }, "http.proxySupport": { type: "string", enum: ["off", "on", "fallback", "override"], enumDescriptions: [m(2231, null), m(2232, null), m(2233, null), m(2234, null)], default: "override", markdownDescription: m(2235, null, "`#http.useLocalProxyConfiguration#`"), restricted: true }, "http.systemCertificates": { type: "boolean", default: true, markdownDescription: m(2236, null, "`#http.useLocalProxyConfiguration#`"), restricted: true }, "http.experimental.systemCertificatesV2": { type: "boolean", tags: ["experimental"], default: false, markdownDescription: m(2237, null, "`#http.useLocalProxyConfiguration#`"), restricted: true }, "http.fetchAdditionalSupport": { type: "boolean", default: true, markdownDescription: m(2238, null, "`#http.useLocalProxyConfiguration#`", "`#http.proxySupport#`", "`#http.systemCertificates#`"), restricted: true } } }], i.updateConfigurations({ add: ta, remove: r });
}
L0();
var ia = class {
  constructor(e, t) {
    this.requestService = e, this.fileService = t;
  }
  async download(e, t, i = ve.None) {
    if (e.scheme === le.file || e.scheme === le.vscodeRemote) {
      await this.fileService.copy(e, t);
      return;
    }
    const r = { type: "GET", url: e.toString(true) }, s = await this.requestService.request(r, i);
    if (s.res.statusCode === 200) await this.fileService.writeFile(t, s.stream);
    else {
      const n = await pr(s);
      throw new Error(`Expected 200, got back ${s.res.statusCode} instead.

${n}`);
    }
  }
};
ia = N([x(0, Zr), x(1, ke)], ia), b();
var ti = ue("environmentService"), St = ti;
b();
import { homedir as T0, tmpdir as C0 } from "os";
b(), b();
var O0 = 60, U0 = O0 * 60, ra = U0 * 24, xw = ra * 7, Iw = ra * 30, Pw = ra * 365;
function N0(e) {
  return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0") + "T" + String(e.getHours()).padStart(2, "0") + ":" + String(e.getMinutes()).padStart(2, "0") + ":" + String(e.getSeconds()).padStart(2, "0") + "." + (e.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
}
b(), b();
function he(e, t, i) {
  let r = null, s = null;
  if (typeof i.value == "function" ? (r = "value", s = i.value, s.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof i.get == "function" && (r = "get", s = i.get), !s) throw new Error("not supported");
  const n = `$memoize$${t}`;
  i[r] = function(...o) {
    return this.hasOwnProperty(n) || Object.defineProperty(this, n, { configurable: false, enumerable: false, writable: false, value: s.apply(this, o) }), this[n];
  };
}
var rh = /^([^.]+\..+)[:=](.+)$/, fe = class {
  constructor(e, t, i) {
    this._args = e, this.paths = t, this.productService = i;
  }
  get appRoot() {
    return ui(Bs.asFileUri("").fsPath);
  }
  get userHome() {
    return k.file(this.paths.homeDir);
  }
  get userDataPath() {
    return this.paths.userDataDir;
  }
  get appSettingsHome() {
    return k.file(H(this.userDataPath, "User"));
  }
  get tmpDir() {
    return k.file(this.paths.tmpDir);
  }
  get cacheHome() {
    return k.file(this.userDataPath);
  }
  get stateResource() {
    return z(this.appSettingsHome, "globalStorage", "storage.json");
  }
  get userRoamingDataHome() {
    return this.appSettingsHome.with({ scheme: le.vscodeUserData });
  }
  get userDataSyncHome() {
    return z(this.appSettingsHome, "sync");
  }
  get logsHome() {
    if (!this.args.logsPath) {
      const e = N0(/* @__PURE__ */ new Date()).replace(/-|:|\.\d+Z$/g, "");
      this.args.logsPath = H(this.userDataPath, "logs", e);
    }
    return k.file(this.args.logsPath);
  }
  get sync() {
    return this.args.sync;
  }
  get machineSettingsResource() {
    return z(k.file(H(this.userDataPath, "Machine")), "settings.json");
  }
  get workspaceStorageHome() {
    return z(this.appSettingsHome, "workspaceStorage");
  }
  get localHistoryHome() {
    return z(this.appSettingsHome, "History");
  }
  get keyboardLayoutResource() {
    return z(this.userRoamingDataHome, "keyboardLayout.json");
  }
  get argvResource() {
    const e = Ut.VSCODE_PORTABLE;
    return e ? k.file(H(e, "argv.json")) : z(this.userHome, this.productService.dataFolderName, "argv.json");
  }
  get isExtensionDevelopment() {
    return !!this.args.extensionDevelopmentPath;
  }
  get untitledWorkspacesHome() {
    return k.file(H(this.userDataPath, "Workspaces"));
  }
  get builtinExtensionsPath() {
    const e = this.args["builtin-extensions-dir"];
    return e ? Ai(e) : ci(H(Bs.asFileUri("").fsPath, "..", "extensions"));
  }
  get extensionsDownloadLocation() {
    const e = this.args["extensions-download-dir"];
    return e ? k.file(Ai(e)) : k.file(H(this.userDataPath, "CachedExtensionVSIXs"));
  }
  get extensionsPath() {
    const e = this.args["extensions-dir"];
    if (e) return Ai(e);
    const t = Ut.VSCODE_EXTENSIONS;
    if (t) return t;
    const i = Ut.VSCODE_PORTABLE;
    return i ? H(i, "extensions") : z(this.userHome, this.productService.dataFolderName, "extensions").fsPath;
  }
  get extensionDevelopmentLocationURI() {
    const e = this.args.extensionDevelopmentPath;
    if (Array.isArray(e)) return e.map((t) => /^[^:/?#]+?:\/\//.test(t) ? k.parse(t) : k.file(ci(t)));
  }
  get extensionDevelopmentKind() {
    return this.args.extensionDevelopmentKind?.map((e) => e === "ui" || e === "workspace" || e === "web" ? e : "workspace");
  }
  get extensionTestsLocationURI() {
    const e = this.args.extensionTestsPath;
    if (e) return /^[^:/?#]+?:\/\//.test(e) ? k.parse(e) : k.file(ci(e));
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
    return F0(this.args, this.isBuilt);
  }
  get debugRenderer() {
    return !!this.args.debugRenderer;
  }
  get isBuilt() {
    return !Ut.VSCODE_DEV;
  }
  get verbose() {
    return !!this.args.verbose;
  }
  get logLevel() {
    return this.args.log?.find((e) => !rh.test(e));
  }
  get extensionLogLevel() {
    const e = [];
    for (const t of this.args.log || []) {
      const i = rh.exec(t);
      i && i[1] && i[2] && e.push([i[1], i[2]]);
    }
    return e.length ? e : void 0;
  }
  get serviceMachineIdResource() {
    return z(k.file(this.userDataPath), "machineid");
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
    if (this.args["__enable-file-policy"] || tt) {
      const e = Ut.VSCODE_PORTABLE;
      return e ? k.file(H(e, "policy.json")) : z(this.userHome, this.productService.dataFolderName, "policy.json");
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
N([he], fe.prototype, "appRoot", null), N([he], fe.prototype, "userHome", null), N([he], fe.prototype, "userDataPath", null), N([he], fe.prototype, "appSettingsHome", null), N([he], fe.prototype, "tmpDir", null), N([he], fe.prototype, "cacheHome", null), N([he], fe.prototype, "stateResource", null), N([he], fe.prototype, "userRoamingDataHome", null), N([he], fe.prototype, "userDataSyncHome", null), N([he], fe.prototype, "sync", null), N([he], fe.prototype, "machineSettingsResource", null), N([he], fe.prototype, "workspaceStorageHome", null), N([he], fe.prototype, "localHistoryHome", null), N([he], fe.prototype, "keyboardLayoutResource", null), N([he], fe.prototype, "argvResource", null), N([he], fe.prototype, "isExtensionDevelopment", null), N([he], fe.prototype, "untitledWorkspacesHome", null), N([he], fe.prototype, "builtinExtensionsPath", null), N([he], fe.prototype, "extensionsPath", null), N([he], fe.prototype, "extensionDevelopmentLocationURI", null), N([he], fe.prototype, "extensionDevelopmentKind", null), N([he], fe.prototype, "extensionTestsLocationURI", null), N([he], fe.prototype, "debugExtensionHost", null), N([he], fe.prototype, "logLevel", null), N([he], fe.prototype, "extensionLogLevel", null), N([he], fe.prototype, "serviceMachineIdResource", null), N([he], fe.prototype, "disableTelemetry", null), N([he], fe.prototype, "disableWorkspaceTrust", null), N([he], fe.prototype, "useInMemorySecretStorage", null), N([he], fe.prototype, "policyFile", null);
function F0(e, t) {
  return M0(e["inspect-extensions"], e["inspect-brk-extensions"], 5870, t, e.debugId, e.extensionEnvironment);
}
function M0(e, t, i, r, s, n) {
  const o = t || e, a = o !== void 0 && o !== "" ? Number(o) : NaN, l = Number.isNaN(a) ? r ? null : i : a, c = l !== null ? !!t : false;
  let h;
  if (n) try {
    h = JSON.parse(n);
  } catch {
  }
  return { port: l, break: c, debugId: s, env: h };
}
b();
import * as sh from "os";
import * as vi from "path";
var V0 = process.env.VSCODE_CWD || process.cwd();
function W0(e, t) {
  const i = $0(e, t), r = [i];
  return vi.isAbsolute(i) || r.unshift(V0), vi.resolve(...r);
}
function $0(e, t) {
  process.env.VSCODE_DEV && (t = "code-oss-dev");
  const i = process.env.VSCODE_PORTABLE;
  if (i) return vi.join(i, "user-data");
  let r = process.env.VSCODE_APPDATA;
  if (r) return vi.join(r, t);
  const s = e["user-data-dir"];
  if (s) return s;
  switch (process.platform) {
    case "win32":
      if (r = process.env.APPDATA, !r) {
        const n = process.env.USERPROFILE;
        if (typeof n != "string") throw new Error("Windows: Unexpected undefined %USERPROFILE% environment variable");
        r = vi.join(n, "AppData", "Roaming");
      }
      break;
    case "darwin":
      r = vi.join(sh.homedir(), "Library", "Application Support");
      break;
    case "linux":
      r = process.env.XDG_CONFIG_HOME || vi.join(sh.homedir(), ".config");
      break;
    default:
      throw new Error("Platform not supported");
  }
  return vi.join(r, t);
}
var B0 = class extends fe {
  constructor(e, t) {
    super(e, { homeDir: T0(), tmpDir: C0(), userDataDir: W0(e, t.nameShort) }, t);
  }
};
b(), b();
var Rw = Date.now(), Aw = 1800 * 1e3, q0 = ["vscode.typescript", "vscode.javascript", "vscode.python", "vscode.json", "vscode.html", "vscode.css", "vscode.markdown", "vscode.yaml", "vscode.xml", "vscode.go", "vscode.rust", "vscode.cpp", "vscode.java", "vscode.csharp", "vscode.ruby", "vscode.sql", "vscode.shellscript", "vscode.swift", "vscode.dart", "vscode.scss", "vscode.less", "vscode.lua", "vscode.perl", "vscode.r", "vscode.php", "vscode.docker", "vscode.ini", "vscode.dotenv", "vscode.diff", "vscode.make", "vscode.log", "mechatroner.rainbow-csv"], nh = ["anysphere.cursor-resolver", "anysphere.cursor-always-local", "anysphere.cursor-agent-worker", "anysphere.cursor-agent-exec", "anysphere.cursor-agent-host", "anysphere.cursor-local-agent-runtime", "anysphere.cursor-checkout", "anysphere.cursor-explorer", "anysphere.cursor-commits", "anysphere.cursor-mcp", "anysphere.cursor-ndjson-ingest", "anysphere.cursor-retrieval", "cursor.cursor-browser-automation", "vscode.git", "vscode.git-base", "vscode.vscode-theme-seti", "undefined_publisher.cursor-themes", ...q0, "vscodevim.vim", "asvetliakov.vscode-neovim", "tuttieee.emacs-mcx"], z0 = "typescriptteam.native-preview", dn = ["typescriptteam.vscode-typescript", z0], oh = ["vscode.css-language-features", "vscode.html-language-features", "vscode.json-language-features", "vscode.php-language-features", "vscode.typescript-language-features", ...dn, "dbaeumer.vscode-eslint", "esbenp.prettier-vscode", "biomejs.biome", "denoland.vscode-deno", "vue.volar", "svelte.svelte-vscode", "astro-build.astro-vscode", "angular.ng-template", "bradlc.vscode-tailwindcss", "stylelint.vscode-stylelint", "unifiedjs.vscode-mdx", "ms-python.python", "ms-python.vscode-pylance", "charliermarsh.ruff", "golang.go", "rust-lang.rust-analyzer", "ms-vscode.cpptools", "llvm-vs-code-extensions.vscode-clangd", "ms-vscode.cmake-tools", "twxs.cmake", "ms-dotnettools.csharp", "jetbrains.resharper-code", "redhat.java", "vscjava.vscode-gradle", "jetbrains.intellij-server", "jetbrains.kotlin-server", "fwcd.kotlin", "mathiasfrohlich.kotlin", "scalameta.metals", "scala-lang.scala", "swiftlang.swift-vscode", "sswg.swift-lang", "bmewburn.vscode-intelephense-client", "devsense.phptools-vscode", "shopify.ruby-lsp", "dart-code.dart-code", "dart-code.flutter", "jakebecker.elixir-ls", "pgourlain.erlang", "betterthantomorrow.calva", "ziglang.vscode-zig", "sumneko.lua", "geequlim.godot-tools", "julialang.language-julia", "reditorsupport.r", "haskell.haskell", "ocamllabs.ocaml-platform", "fortran-lang.linter-gfortran", "ms-vscode.powershell", "timonwong.shellcheck", "mads-hartmann.bash-ide-vscode", "juanblanco.solidity", "nomicfoundation.hardhat-solidity", "james-yu.latex-workshop", "graphql.vscode-graphql", "graphql.vscode-graphql-syntax", "prisma.prisma", "hashicorp.terraform", "hashicorp.hcl", "ms-azuretools.vscode-bicep", "ms-azuretools.vscode-docker", "docker.docker", "redhat.vscode-yaml", "redhat.vscode-xml", "tamasfe.even-better-toml", "tombi-toml.tombi", "wholroyd.jinja", "samuelcolvin.jinjahtml", "zxh404.vscode-proto3", "bufbuild.vscode-buf", "jnoortheen.nix-ide", "bbenoist.nix"], kw = [...oh], G0 = [...nh, "anysphere.cursor-deeplink", "anysphere.cursor-resolver-helper", "anysphere.cursor-socket", "cursor.cursor-computer-use", "vscode.github-authentication"], K0 = [...nh, "anysphere.remote-ssh", "anysphere.remote-wsl", "anysphere.remote-containers", "anysphere.cursor-polyfills-remote"], j0 = [...K0, ...oh], Dw = [...j0, ...G0], ah = "src.vs.platform.reactivestorage.browser.reactiveStorageServiceImpl.persistentStorage", Lw = `${ah}.applicationUser`, Tw = `${ah}.applicationUser.subscription`, H0 = "workbench.panel.aichat.view", Cw = H0 + ".aichat.chatdata", X0 = [0.85, 1, 1.15, 1.3], Q0 = "default", Ow = [Q0, ...X0.map((e) => `${e}`)], J0 = ["aichat.newchataction", "composer.focusComposer", "aiSettings.action.open", "workbench.action.openSettings", "workbench.action.showCommands", "workbench.action.togglePanel", "workbench.action.toggleSidebarVisibility", "workbench.action.toggleUnifiedSidebar", "workbench.action.toggleAuxiliaryBar", "workbench.action.toggleFullScreen", "workbench.action.terminal.toggleTerminal", "workbench.action.terminal.new", "workbench.action.quickOpen", "workbench.action.closeActiveEditor", "workbench.action.newBrowserTab", "workbench.action.reloadBrowserTab", "workbench.action.focusBrowserLocationBar"], Y0 = ["glass.newAgentFromKeyboard", "glass.newBrowser", "glass.newTab", "glass.openEditorPanelNewTabMenu", "glass.nextTab", "glass.previousTab", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.focusBrowserLocationBar", "glass.hardReloadBrowserTab", "glass.showBrowserFind", "glass.hideBrowserFind", "glass.toggleDesignMode", "glass.togglePanel", "glass.toggleSidebar", "glass.toggleSidebarFromKeyboard", "glass.toggleTerminal", "glass.focusInput", "glass.openFilePrioritizedPalette", "glass.openActionsPalette"], Uw = /* @__PURE__ */ new Set([...J0, ...Y0]);
b();
var sa = "Offline";
function Z0(e) {
  return e instanceof em ? true : e instanceof Error && e.name === sa && e.message === sa;
}
var em = class extends Error {
  constructor() {
    super(sa), this.name = this.message;
  }
};
b();
var tm = "^([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$", na = new RegExp(tm), im = "__web_extension", rm = "skipPublisherTrust", sm = "dependecyOrPackExtensionInstall", nm = "clientTargetPlatform";
function lh(e) {
  switch (e) {
    case "win32-x64":
      return "Windows 64 bit";
    case "win32-arm64":
      return "Windows ARM";
    case "linux-x64":
      return "Linux 64 bit";
    case "linux-arm64":
      return "Linux ARM 64";
    case "linux-armhf":
      return "Linux ARM";
    case "alpine-x64":
      return "Alpine Linux 64 bit";
    case "alpine-arm64":
      return "Alpine ARM 64";
    case "darwin-x64":
      return "Mac";
    case "darwin-arm64":
      return "Mac Silicon";
    case "web":
      return "Web";
    case "universal":
      return "universal";
    case "unknown":
      return "unknown";
    case "undefined":
      return "undefined";
  }
}
function om(e) {
  switch (e) {
    case "win32-x64":
      return "win32-x64";
    case "win32-arm64":
      return "win32-arm64";
    case "linux-x64":
      return "linux-x64";
    case "linux-arm64":
      return "linux-arm64";
    case "linux-armhf":
      return "linux-armhf";
    case "alpine-x64":
      return "alpine-x64";
    case "alpine-arm64":
      return "alpine-arm64";
    case "darwin-x64":
      return "darwin-x64";
    case "darwin-arm64":
      return "darwin-arm64";
    case "web":
      return "web";
    case "universal":
      return "universal";
    default:
      return "unknown";
  }
}
function ch(e, t) {
  switch (e) {
    case Ji.Windows:
      return t === "x64" ? "win32-x64" : t === "arm64" ? "win32-arm64" : "unknown";
    case Ji.Linux:
      return t === "x64" ? "linux-x64" : t === "arm64" ? "linux-arm64" : t === "arm" ? "linux-armhf" : "unknown";
    case "alpine":
      return t === "x64" ? "alpine-x64" : t === "arm64" ? "alpine-arm64" : "unknown";
    case Ji.Mac:
      return t === "x64" ? "darwin-x64" : t === "arm64" ? "darwin-arm64" : "unknown";
    case Ji.Web:
      return "web";
  }
}
function gr(e, t) {
  return t === "web" && !e.includes("web");
}
function oa(e, t, i) {
  return gr(t, i) ? false : e === "undefined" || e === "universal" ? true : e === "unknown" ? false : e === i;
}
function am(e) {
  return e && typeof e == "object" && typeof e.id == "string" && (!e.uuid || typeof e.uuid == "string");
}
var yi = ue("extensionGalleryService"), pn = class extends Error {
  constructor(e, t) {
    super(e), this.code = t, this.name = t;
  }
}, uh = ((e) => (e.NotFound = "NotFound", e.Unsupported = "Unsupported", e.Deprecated = "Deprecated", e.Malicious = "Malicious", e.Incompatible = "Incompatible", e.IncompatibleApi = "IncompatibleApi", e.IncompatibleTargetPlatform = "IncompatibleTargetPlatform", e.ReleaseVersionNotFound = "ReleaseVersionNotFound", e.Invalid = "Invalid", e.Download = "Download", e.DownloadSignature = "DownloadSignature", e.DownloadFailedWriting = "DownloadFailedWriting", e.UpdateMetadata = "UpdateMetadata", e.Extract = "Extract", e.Scanning = "Scanning", e.ScanningExtension = "ScanningExtension", e.ReadRemoved = "ReadRemoved", e.UnsetRemoved = "UnsetRemoved", e.Delete = "Delete", e.Rename = "Rename", e.IntializeDefaultProfile = "IntializeDefaultProfile", e.AddToProfile = "AddToProfile", e.InstalledExtensionNotFound = "InstalledExtensionNotFound", e.PostInstall = "PostInstall", e.CorruptZip = "CorruptZip", e.IncompleteZip = "IncompleteZip", e.PackageNotSigned = "PackageNotSigned", e.SignatureVerificationInternal = "SignatureVerificationInternal", e.SignatureVerificationFailed = "SignatureVerificationFailed", e.NotAllowed = "NotAllowed", e.Gallery = "Gallery", e.Cancelled = "Cancelled", e.Unknown = "Unknown", e.Internal = "Internal", e))(uh || {}), ge = ((e) => (e.NotSigned = "NotSigned", e.Success = "Success", e.RequiredArgumentMissing = "RequiredArgumentMissing", e.InvalidArgument = "InvalidArgument", e.PackageIsUnreadable = "PackageIsUnreadable", e.UnhandledException = "UnhandledException", e.SignatureManifestIsMissing = "SignatureManifestIsMissing", e.SignatureManifestIsUnreadable = "SignatureManifestIsUnreadable", e.SignatureIsMissing = "SignatureIsMissing", e.SignatureIsUnreadable = "SignatureIsUnreadable", e.CertificateIsUnreadable = "CertificateIsUnreadable", e.SignatureArchiveIsUnreadable = "SignatureArchiveIsUnreadable", e.FileAlreadyExists = "FileAlreadyExists", e.SignatureArchiveIsInvalidZip = "SignatureArchiveIsInvalidZip", e.SignatureArchiveHasSameSignatureFile = "SignatureArchiveHasSameSignatureFile", e.PackageIntegrityCheckFailed = "PackageIntegrityCheckFailed", e.SignatureIsInvalid = "SignatureIsInvalid", e.SignatureManifestIsInvalid = "SignatureManifestIsInvalid", e.SignatureIntegrityCheckFailed = "SignatureIntegrityCheckFailed", e.EntryIsMissing = "EntryIsMissing", e.EntryIsTampered = "EntryIsTampered", e.Untrusted = "Untrusted", e.CertificateRevoked = "CertificateRevoked", e.SignatureIsNotValid = "SignatureIsNotValid", e.UnknownError = "UnknownError", e.PackageIsInvalidZip = "PackageIsInvalidZip", e.SignatureArchiveHasTooManyEntries = "SignatureArchiveHasTooManyEntries", e))(ge || {}), _e = class extends Error {
  constructor(e, t) {
    super(e), this.code = t, this.name = t;
  }
}, aa = ue("extensionManagementService"), Nw = ue("IGlobalExtensionEnablementService"), Fw = ue("IExtensionTipsService"), Mi = ue("IAllowedExtensionsService");
async function la(e, t) {
  let i;
  try {
    i = await t.resolve(e);
  } catch (r) {
    if (r.fileOperationResult === 1) return 0;
    throw r;
  }
  return i.children ? (await Promise.all(i.children.map((s) => la(s.resource, t)))).reduce((s, n) => s + n, 0) : i.size ?? 0;
}
var Mw = hc(1942, "Extensions"), Vw = hc(1943, "Preferences"), lm = "extensions.gallery.useUnpkgResourceApi", cm = "extensions.requestTimeout", ca = "extensions.allowed", um = "extensions.installCooldownHours";
b(), b(), b();
var hh = "extensions.user.cache", hm = "extensions.builtin.cache", fh = "undefined_publisher", fm = ["AI", "Azure", "Chat", "Data Science", "Debuggers", "Extension Packs", "Education", "Formatters", "Keymaps", "Language Packs", "Linters", "Machine Learning", "Notebooks", "Programming Languages", "SCM Providers", "Snippets", "Testing", "Themes", "Visualization", "Other"], mr = class {
  constructor(e) {
    this.value = e, this._lower = e.toLowerCase();
  }
  static equals(e, t) {
    if (typeof e > "u" || e === null) return typeof t > "u" || t === null;
    if (typeof t > "u" || t === null) return false;
    if (typeof e == "string" || typeof t == "string") {
      const i = typeof e == "string" ? e : e.value, r = typeof t == "string" ? t : t.value;
      return jt(i, r);
    }
    return e._lower === t._lower;
  }
  static toKey(e) {
    return typeof e == "string" ? e.toLowerCase() : e._lower;
  }
}, dm = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map();
  }
  clear() {
    this._map.clear();
  }
  delete(e) {
    this._map.delete(mr.toKey(e));
  }
  get(e) {
    return this._map.get(mr.toKey(e));
  }
  has(e) {
    return this._map.has(mr.toKey(e));
  }
  set(e, t) {
    this._map.set(mr.toKey(e), t);
  }
  values() {
    return this._map.values();
  }
  forEach(e) {
    this._map.forEach(e);
  }
  [Symbol.iterator]() {
    return this._map[Symbol.iterator]();
  }
};
function dh(e) {
  return pm(e);
}
function pm(e) {
  return e.contributes && e.contributes.localizations ? e.contributes.localizations.length > 0 : false;
}
function gm(e) {
  return e.map((t) => {
    const [i, r] = t.split("@");
    return { proposalName: i, version: r ? parseInt(r) : void 0 };
  });
}
function mm(e) {
  return e.map((t) => t.split("@")[0]);
}
var Ww = ue("IBuiltinExtensionsScannerService");
b(), b(), b();
var vm = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function ym(e) {
  return vm.test(e);
}
var Qe = [];
for (let e = 0; e < 256; e++) Qe.push(e.toString(16).padStart(2, "0"));
var dt = (function() {
  if (typeof crypto.randomUUID == "function") return crypto.randomUUID.bind(crypto);
  const e = new Uint8Array(16);
  return function() {
    crypto.getRandomValues(e), e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
    let i = 0, r = "";
    return r += Qe[e[i++]], r += Qe[e[i++]], r += Qe[e[i++]], r += Qe[e[i++]], r += "-", r += Qe[e[i++]], r += Qe[e[i++]], r += "-", r += Qe[e[i++]], r += Qe[e[i++]], r += "-", r += Qe[e[i++]], r += Qe[e[i++]], r += "-", r += Qe[e[i++]], r += Qe[e[i++]], r += Qe[e[i++]], r += Qe[e[i++]], r += Qe[e[i++]], r += Qe[e[i++]], r;
  };
})();
function wm(e) {
  if (Os === Ji.Linux && /^penguin(\.|$)/i.test(e)) return "chromebook";
}
function _m(e, t, i, r, s, n, o, a, l, c, h) {
  const f = /* @__PURE__ */ Object.create(null);
  f["common.machineId"] = n, f["common.macMachineId"] = o, f["common.sqmId"] = a, f["common.devDeviceId"] = l, f.sessionID = dt() + Date.now(), f.commitHash = r, f.version = s, f["common.platformVersion"] = (e || "").replace(/^(\d+)(\.\d+)?(\.\d+)?(.*)/, "$1$2$3"), f["common.platform"] = y1(Os), f["common.nodePlatform"] = Ec, f["common.nodeArch"] = i, f["common.product"] = h || "desktop", c && (f["common.msftInternal"] = c);
  let d = 0;
  const p = Date.now();
  Object.defineProperties(f, { timestamp: { get: () => /* @__PURE__ */ new Date(), enumerable: true }, "common.timesincesessionstart": { get: () => Date.now() - p, enumerable: true }, "common.sequence": { get: () => d++, enumerable: true } }), w1 && (f["common.snap"] = "true");
  const v = wm(t);
  return v && (f["common.platformDetail"] = v), f;
}
function Em(e) {
  const t = Ut.USERDNSDOMAIN;
  if (!t) return false;
  const i = t.toLowerCase();
  return e.some((r) => i === r);
}
b();
var ii = ue("telemetryService"), $w = ue("customEndpointTelemetryService"), Sm = "telemetry.machineId", bm = "telemetry.macMachineId", xm = "telemetry.sqmId", Im = "telemetry.devDeviceId", Pm = "crashReporting", gn = "crashReporting.enabled", ph = "telemetry.enableCrashReporter", ua = "telemetry.enableTelemetry", Bw = ue("mainProcessPerformanceTelemetryService"), Rm = class {
  constructor(e) {
    this.value = e, this.isTrustedTelemetryValue = true;
  }
}, Am = class {
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
}, km = new Am(), Dm = "telemetry", qw = { id: Dm, name: m(2254, null) }, Lm = { registerAuthId: () => null, log: () => null, flush: () => Promise.resolve(null), capture: () => null };
function gh(e, t) {
  return !t.isBuilt && !t.disableTelemetry ? true : !(t.disableTelemetry || !e.enableTelemetry);
}
function mh(e) {
  const t = e.getValue(gn), i = e.getValue(ph);
  if (e.getValue(ua) === false || i === false) return 0;
  switch (t ?? "all") {
    case "all":
      return 3;
    case "off":
      return 0;
  }
}
function Tm(e, t) {
  const i = e.msftInternalDomains || [], r = t.getValue("telemetry.internalTesting");
  return Em(i) || r;
}
function Cm(e) {
  return [e.appRoot, e.extensionsPath, e.userHome.fsPath, e.tmpDir.fsPath, e.userDataPath];
}
function Om(e, t) {
  if (!e || !e.includes("/") && !e.includes("\\")) return e;
  let i = e;
  const r = [];
  for (const a of t) for (; ; ) {
    const l = a.exec(e);
    if (!l) break;
    r.push([l.index, a.lastIndex]);
  }
  const s = /^[\\\/]?(node_modules|node_modules\.asar)[\\\/]/, n = /(file:\/\/)?([a-zA-Z]:(\\\\|\\|\/)|(\\\\|\\|\/))?([\w-\._]+(\\\\|\\|\/))+[\w-\._]*/g;
  let o = 0;
  for (i = ""; ; ) {
    const a = n.exec(e);
    if (!a) break;
    const l = r.some(([c, h]) => a.index < h && c < n.lastIndex);
    !s.test(a[0]) && !l && (i += e.substring(o, a.index) + "<REDACTED: user-file-path>", o = n.lastIndex);
  }
  return o < e.length && (i += e.substr(o)), i;
}
function Um(e) {
  if (!e) return e;
  const t = [{ label: "Google API Key", regex: /AIza[A-Za-z0-9_\\\-]{35}/ }, { label: "Slack Token", regex: /xox[pbar]\-[A-Za-z0-9]/ }, { label: "GitHub Token", regex: /(gh[psuro]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})/ }, { label: "Generic Secret", regex: /(key|token|sig|secret|signature|password|passwd|pwd|android:value)[^a-zA-Z0-9]/i }, { label: "CLI Credentials", regex: /((login|psexec|(certutil|psexec)\.exe).{1,50}(\s-u(ser(name)?)?\s+.{3,100})?\s-(admin|user|vm|root)?p(ass(word)?)?\s+["']?[^$\-\/\s]|(^|[\s\r\n\\])net(\.exe)?.{1,5}(user\s+|share\s+\/user:| user -? secrets ? set) \s + [^ $\s \/])/ }, { label: "Microsoft Entra ID", regex: /eyJ(?:0eXAiOiJKV1Qi|hbGci|[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.)/ }, { label: "Email", regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ }];
  for (const i of t) if (i.regex.test(e)) return `<REDACTED: ${i.label}>`;
  return e;
}
function vh(e, t) {
  return hg(e, (i) => {
    if (i instanceof Rm || Object.hasOwnProperty.call(i, "isTrustedTelemetryValue")) return i.value;
    if (typeof i == "string") {
      let r = i.replaceAll("%20", " ");
      r = Om(r, t);
      for (const s of t) r = r.replace(s, "");
      return r = Um(r), r;
    }
  });
}
function Y(e, t) {
  return e.uuid && t.uuid ? e.uuid === t.uuid : e.id === t.id ? true : Ns(e.id, t.id) === 0;
}
var Nm = /^([^.]+\..+)-(\d+\.\d+\.\d+)(-(.+))?$/, pt = class $n {
  constructor(t, i, r = "undefined") {
    this.identifier = t, this.version = i, this.targetPlatform = r, this.id = t.id;
  }
  static create(t) {
    const i = t.manifest ? t.manifest.version : t.version, r = t.manifest ? t.targetPlatform : t.properties.targetPlatform;
    return new $n(t.identifier, i, r);
  }
  static parse(t) {
    const i = Nm.exec(t);
    return i && i[1] && i[2] ? new $n({ id: i[1] }, i[2], i[4] || void 0) : null;
  }
  toString() {
    return `${this.id}-${this.version}${this.targetPlatform !== "undefined" ? `-${this.targetPlatform}` : ""}`;
  }
  equals(t) {
    return t instanceof $n ? Y(this, t) && this.version === t.version && this.targetPlatform === t.targetPlatform : false;
  }
}, Fm = /^([^.]+\..+)@((prerelease)|(\d+\.\d+\.\d+(-.*)?))$/;
function ha(e) {
  const t = Fm.exec(e);
  return t && t[1] ? [mn(t[1]), t[2]] : [mn(e), void 0];
}
function yh(e, t) {
  return `${e}.${t}`;
}
function mn(e) {
  return e.toLowerCase();
}
function wt(e, t) {
  return mn(yh(e ?? fh, t));
}
function wh(e, t) {
  const i = [], r = (s) => {
    for (const n of i) if (n.some((o) => Y(t(o), t(s)))) return n;
    return null;
  };
  for (const s of e) {
    const n = r(s);
    n ? n.push(s) : i.push([s]);
  }
  return i;
}
var zw = new mr("pprice.better-merge");
async function Mm(e, t) {
  if (!tt) return false;
  let i;
  try {
    i = (await e.readFile(k.file("/etc/os-release"))).value.toString();
  } catch {
    try {
      i = (await e.readFile(k.file("/usr/lib/os-release"))).value.toString();
    } catch (s) {
      t.debug("Error while getting the os-release file.", q(s));
    }
  }
  return !!i && (i.match(/^ID=([^\u001b\r\n]*)/m) || [])[1] === "alpine";
}
async function _h(e, t) {
  const i = await Mm(e, t), r = ch(i ? "alpine" : Os, Sc);
  return t.debug("ComputeTargetPlatform:", r), r;
}
function Vm(e, t) {
  return t.some((i) => Te(i) ? Ns(e.id.split(".")[0], i) === 0 : Y(e, i));
}
b(), b();
async function Wm(e, t, i) {
  let r = i && i.get("storage.serviceMachineId", -1) || null;
  if (r) return r;
  try {
    const n = (await t.readFile(e.serviceMachineIdResource)).value.toString();
    r = ym(n) ? n : null;
  } catch {
    r = null;
  }
  if (!r) {
    r = dt();
    try {
      await t.writeFile(e.serviceMachineIdResource, $.fromString(r));
    } catch {
    }
  }
  return i?.store("storage.serviceMachineId", r, -1, 1), r;
}
async function $m(e, t, i, r, s, n) {
  const o = { "X-Market-Client-Id": `VSCode ${Eh(e)}`, "User-Agent": `VSCode ${Eh(e)} (Code)` };
  if (gh(e, t) && mh(i) === 3) {
    const a = await Wm(t, r, s);
    o["X-Market-User-Id"] = a, o["VSCode-SessionId"] = n.machineId || a;
  }
  return o;
}
function Eh(e) {
  return e.vscodeVersion;
}
b(), b();
var vn = ((e) => (e[e.Ignore = 0] = "Ignore", e[e.Info = 1] = "Info", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error", e[e.AI = 4] = "AI", e[e.Success = 5] = "Success", e))(vn || {});
((e) => {
  const t = "error", i = "warning", r = "warn", s = "info", n = "ignore", o = "success";
  function a(c) {
    return c ? jt(t, c) ? 3 : jt(i, c) || jt(r, c) ? 2 : jt(s, c) ? 1 : jt(o, c) ? 5 : 0 : 0;
  }
  e.fromValue = a;
  function l(c) {
    switch (c) {
      case 3:
        return t;
      case 2:
        return i;
      case 1:
        return s;
      case 5:
        return o;
      default:
        return n;
    }
  }
  e.toString = l;
})(vn || (vn = {}));
var Ke = vn;
b();
var yn = {}, ee = { exports: yn };
(function(e, t) {
  if (typeof yn == "object" && typeof ee == "object") ee.exports = t();
  else if (typeof define == "function" && define.amd) define([], t);
  else {
    var i = t();
    for (var r in i) (typeof yn == "object" ? yn : e)[r] = i[r];
  }
})(Object(typeof self < "u" ? self : void 0), () => {
  return e = { 97(i, r, s) {
    i.exports = s(345);
  }, 345(i, r) {
    var s;
    r = i.exports = _, s = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? function() {
      var g = Array.prototype.slice.call(arguments, 0);
      g.unshift("SEMVER"), console.log.apply(console, g);
    } : function() {
    }, r.SEMVER_SPEC_VERSION = "2.0.0";
    var n = Number.MAX_SAFE_INTEGER || 9007199254740991, o = r.re = [], a = r.safeRe = [], l = r.src = [], c = r.tokens = {}, h = 0;
    function f(g) {
      c[g] = h++;
    }
    var d = "[a-zA-Z0-9-]", p = [["\\s", 1], ["\\d", 256], [d, 250]];
    function v(g) {
      for (var w = 0; w < p.length; w++) {
        var S = p[w][0], P = p[w][1];
        g = g.split(S + "*").join(S + "{0," + P + "}").split(S + "+").join(S + "{1," + P + "}");
      }
      return g;
    }
    f("NUMERICIDENTIFIER"), l[c.NUMERICIDENTIFIER] = "0|[1-9]\\d*", f("NUMERICIDENTIFIERLOOSE"), l[c.NUMERICIDENTIFIERLOOSE] = "\\d+", f("NONNUMERICIDENTIFIER"), l[c.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-]" + d + "*", f("MAINVERSION"), l[c.MAINVERSION] = "(" + l[c.NUMERICIDENTIFIER] + ")\\.(" + l[c.NUMERICIDENTIFIER] + ")\\.(" + l[c.NUMERICIDENTIFIER] + ")", f("MAINVERSIONLOOSE"), l[c.MAINVERSIONLOOSE] = "(" + l[c.NUMERICIDENTIFIERLOOSE] + ")\\.(" + l[c.NUMERICIDENTIFIERLOOSE] + ")\\.(" + l[c.NUMERICIDENTIFIERLOOSE] + ")", f("PRERELEASEIDENTIFIER"), l[c.PRERELEASEIDENTIFIER] = "(?:" + l[c.NUMERICIDENTIFIER] + "|" + l[c.NONNUMERICIDENTIFIER] + ")", f("PRERELEASEIDENTIFIERLOOSE"), l[c.PRERELEASEIDENTIFIERLOOSE] = "(?:" + l[c.NUMERICIDENTIFIERLOOSE] + "|" + l[c.NONNUMERICIDENTIFIER] + ")", f("PRERELEASE"), l[c.PRERELEASE] = "(?:-(" + l[c.PRERELEASEIDENTIFIER] + "(?:\\." + l[c.PRERELEASEIDENTIFIER] + ")*))", f("PRERELEASELOOSE"), l[c.PRERELEASELOOSE] = "(?:-?(" + l[c.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + l[c.PRERELEASEIDENTIFIERLOOSE] + ")*))", f("BUILDIDENTIFIER"), l[c.BUILDIDENTIFIER] = d + "+", f("BUILD"), l[c.BUILD] = "(?:\\+(" + l[c.BUILDIDENTIFIER] + "(?:\\." + l[c.BUILDIDENTIFIER] + ")*))", f("FULL"), f("FULLPLAIN"), l[c.FULLPLAIN] = "v?" + l[c.MAINVERSION] + l[c.PRERELEASE] + "?" + l[c.BUILD] + "?", l[c.FULL] = "^" + l[c.FULLPLAIN] + "$", f("LOOSEPLAIN"), l[c.LOOSEPLAIN] = "[v=\\s]*" + l[c.MAINVERSIONLOOSE] + l[c.PRERELEASELOOSE] + "?" + l[c.BUILD] + "?", f("LOOSE"), l[c.LOOSE] = "^" + l[c.LOOSEPLAIN] + "$", f("GTLT"), l[c.GTLT] = "((?:<|>)?=?)", f("XRANGEIDENTIFIERLOOSE"), l[c.XRANGEIDENTIFIERLOOSE] = l[c.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*", f("XRANGEIDENTIFIER"), l[c.XRANGEIDENTIFIER] = l[c.NUMERICIDENTIFIER] + "|x|X|\\*", f("XRANGEPLAIN"), l[c.XRANGEPLAIN] = "[v=\\s]*(" + l[c.XRANGEIDENTIFIER] + ")(?:\\.(" + l[c.XRANGEIDENTIFIER] + ")(?:\\.(" + l[c.XRANGEIDENTIFIER] + ")(?:" + l[c.PRERELEASE] + ")?" + l[c.BUILD] + "?)?)?", f("XRANGEPLAINLOOSE"), l[c.XRANGEPLAINLOOSE] = "[v=\\s]*(" + l[c.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + l[c.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + l[c.XRANGEIDENTIFIERLOOSE] + ")(?:" + l[c.PRERELEASELOOSE] + ")?" + l[c.BUILD] + "?)?)?", f("XRANGE"), l[c.XRANGE] = "^" + l[c.GTLT] + "\\s*" + l[c.XRANGEPLAIN] + "$", f("XRANGELOOSE"), l[c.XRANGELOOSE] = "^" + l[c.GTLT] + "\\s*" + l[c.XRANGEPLAINLOOSE] + "$", f("COERCE"), l[c.COERCE] = "(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])", f("COERCERTL"), o[c.COERCERTL] = new RegExp(l[c.COERCE], "g"), a[c.COERCERTL] = new RegExp(v(l[c.COERCE]), "g"), f("LONETILDE"), l[c.LONETILDE] = "(?:~>?)", f("TILDETRIM"), l[c.TILDETRIM] = "(\\s*)" + l[c.LONETILDE] + "\\s+", o[c.TILDETRIM] = new RegExp(l[c.TILDETRIM], "g"), a[c.TILDETRIM] = new RegExp(v(l[c.TILDETRIM]), "g"), f("TILDE"), l[c.TILDE] = "^" + l[c.LONETILDE] + l[c.XRANGEPLAIN] + "$", f("TILDELOOSE"), l[c.TILDELOOSE] = "^" + l[c.LONETILDE] + l[c.XRANGEPLAINLOOSE] + "$", f("LONECARET"), l[c.LONECARET] = "(?:\\^)", f("CARETTRIM"), l[c.CARETTRIM] = "(\\s*)" + l[c.LONECARET] + "\\s+", o[c.CARETTRIM] = new RegExp(l[c.CARETTRIM], "g"), a[c.CARETTRIM] = new RegExp(v(l[c.CARETTRIM]), "g"), f("CARET"), l[c.CARET] = "^" + l[c.LONECARET] + l[c.XRANGEPLAIN] + "$", f("CARETLOOSE"), l[c.CARETLOOSE] = "^" + l[c.LONECARET] + l[c.XRANGEPLAINLOOSE] + "$", f("COMPARATORLOOSE"), l[c.COMPARATORLOOSE] = "^" + l[c.GTLT] + "\\s*(" + l[c.LOOSEPLAIN] + ")$|^$", f("COMPARATOR"), l[c.COMPARATOR] = "^" + l[c.GTLT] + "\\s*(" + l[c.FULLPLAIN] + ")$|^$", f("COMPARATORTRIM"), l[c.COMPARATORTRIM] = "(\\s*)" + l[c.GTLT] + "\\s*(" + l[c.LOOSEPLAIN] + "|" + l[c.XRANGEPLAIN] + ")", o[c.COMPARATORTRIM] = new RegExp(l[c.COMPARATORTRIM], "g"), a[c.COMPARATORTRIM] = new RegExp(v(l[c.COMPARATORTRIM]), "g"), f("HYPHENRANGE"), l[c.HYPHENRANGE] = "^\\s*(" + l[c.XRANGEPLAIN] + ")\\s+-\\s+(" + l[c.XRANGEPLAIN] + ")\\s*$", f("HYPHENRANGELOOSE"), l[c.HYPHENRANGELOOSE] = "^\\s*(" + l[c.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + l[c.XRANGEPLAINLOOSE] + ")\\s*$", f("STAR"), l[c.STAR] = "(<|>)?=?\\s*\\*";
    for (var y = 0; y < h; y++) s(y, l[y]), o[y] || (o[y] = new RegExp(l[y]), a[y] = new RegExp(v(l[y])));
    function E(g, w) {
      if (w && typeof w == "object" || (w = { loose: !!w, includePrerelease: false }), g instanceof _) return g;
      if (typeof g != "string" || g.length > 256 || !(w.loose ? a[c.LOOSE] : a[c.FULL]).test(g)) return null;
      try {
        return new _(g, w);
      } catch {
        return null;
      }
    }
    function _(g, w) {
      if (w && typeof w == "object" || (w = { loose: !!w, includePrerelease: false }), g instanceof _) {
        if (g.loose === w.loose) return g;
        g = g.version;
      } else if (typeof g != "string") throw new TypeError("Invalid Version: " + g);
      if (g.length > 256) throw new TypeError("version is longer than 256 characters");
      if (!(this instanceof _)) return new _(g, w);
      s("SemVer", g, w), this.options = w, this.loose = !!w.loose;
      var S = g.trim().match(w.loose ? a[c.LOOSE] : a[c.FULL]);
      if (!S) throw new TypeError("Invalid Version: " + g);
      if (this.raw = g, this.major = +S[1], this.minor = +S[2], this.patch = +S[3], this.major > n || this.major < 0) throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0) throw new TypeError("Invalid patch version");
      S[4] ? this.prerelease = S[4].split(".").map(function(P) {
        if (/^[0-9]+$/.test(P)) {
          var K = +P;
          if (K >= 0 && K < n) return K;
        }
        return P;
      }) : this.prerelease = [], this.build = S[5] ? S[5].split(".") : [], this.format();
    }
    r.parse = E, r.valid = function(g, w) {
      var S = E(g, w);
      return S ? S.version : null;
    }, r.clean = function(g, w) {
      var S = E(g.trim().replace(/^[=v]+/, ""), w);
      return S ? S.version : null;
    }, r.SemVer = _, _.prototype.format = function() {
      return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version;
    }, _.prototype.toString = function() {
      return this.version;
    }, _.prototype.compare = function(g) {
      return s("SemVer.compare", this.version, this.options, g), g instanceof _ || (g = new _(g, this.options)), this.compareMain(g) || this.comparePre(g);
    }, _.prototype.compareMain = function(g) {
      return g instanceof _ || (g = new _(g, this.options)), D(this.major, g.major) || D(this.minor, g.minor) || D(this.patch, g.patch);
    }, _.prototype.comparePre = function(g) {
      if (g instanceof _ || (g = new _(g, this.options)), this.prerelease.length && !g.prerelease.length) return -1;
      if (!this.prerelease.length && g.prerelease.length) return 1;
      if (!this.prerelease.length && !g.prerelease.length) return 0;
      var w = 0;
      do {
        var S = this.prerelease[w], P = g.prerelease[w];
        if (s("prerelease compare", w, S, P), S === void 0 && P === void 0) return 0;
        if (P === void 0) return 1;
        if (S === void 0) return -1;
        if (S !== P) return D(S, P);
      } while (++w);
    }, _.prototype.compareBuild = function(g) {
      g instanceof _ || (g = new _(g, this.options));
      var w = 0;
      do {
        var S = this.build[w], P = g.build[w];
        if (s("prerelease compare", w, S, P), S === void 0 && P === void 0) return 0;
        if (P === void 0) return 1;
        if (S === void 0) return -1;
        if (S !== P) return D(S, P);
      } while (++w);
    }, _.prototype.inc = function(g, w) {
      switch (g) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", w);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", w);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", w), this.inc("pre", w);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", w), this.inc("pre", w);
          break;
        case "major":
          this.minor === 0 && this.patch === 0 && this.prerelease.length !== 0 || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          this.patch === 0 && this.prerelease.length !== 0 || this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre":
          if (this.prerelease.length === 0) this.prerelease = [0];
          else {
            for (var S = this.prerelease.length; --S >= 0; ) typeof this.prerelease[S] == "number" && (this.prerelease[S]++, S = -2);
            S === -1 && this.prerelease.push(0);
          }
          w && (this.prerelease[0] === w ? isNaN(this.prerelease[1]) && (this.prerelease = [w, 0]) : this.prerelease = [w, 0]);
          break;
        default:
          throw new Error("invalid increment argument: " + g);
      }
      return this.format(), this.raw = this.version, this;
    }, r.inc = function(g, w, S, P) {
      typeof S == "string" && (P = S, S = void 0);
      try {
        return new _(g, S).inc(w, P).version;
      } catch {
        return null;
      }
    }, r.diff = function(g, w) {
      if (F(g, w)) return null;
      var S = E(g), P = E(w), K = "";
      if (S.prerelease.length || P.prerelease.length) {
        K = "pre";
        var se = "prerelease";
      }
      for (var Q in S) if ((Q === "major" || Q === "minor" || Q === "patch") && S[Q] !== P[Q]) return K + Q;
      return se;
    }, r.compareIdentifiers = D;
    var I = /^[0-9]+$/;
    function D(g, w) {
      var S = I.test(g), P = I.test(w);
      return S && P && (g = +g, w = +w), g === w ? 0 : S && !P ? -1 : P && !S ? 1 : g < w ? -1 : 1;
    }
    function W(g, w, S) {
      return new _(g, S).compare(new _(w, S));
    }
    function R(g, w, S) {
      return W(g, w, S) > 0;
    }
    function C(g, w, S) {
      return W(g, w, S) < 0;
    }
    function F(g, w, S) {
      return W(g, w, S) === 0;
    }
    function Z(g, w, S) {
      return W(g, w, S) !== 0;
    }
    function T(g, w, S) {
      return W(g, w, S) >= 0;
    }
    function ie(g, w, S) {
      return W(g, w, S) <= 0;
    }
    function Me(g, w, S, P) {
      switch (w) {
        case "===":
          return typeof g == "object" && (g = g.version), typeof S == "object" && (S = S.version), g === S;
        case "!==":
          return typeof g == "object" && (g = g.version), typeof S == "object" && (S = S.version), g !== S;
        case "":
        case "=":
        case "==":
          return F(g, S, P);
        case "!=":
          return Z(g, S, P);
        case ">":
          return R(g, S, P);
        case ">=":
          return T(g, S, P);
        case "<":
          return C(g, S, P);
        case "<=":
          return ie(g, S, P);
        default:
          throw new TypeError("Invalid operator: " + w);
      }
    }
    function B(g, w) {
      if (w && typeof w == "object" || (w = { loose: !!w, includePrerelease: false }), g instanceof B) {
        if (g.loose === !!w.loose) return g;
        g = g.value;
      }
      if (!(this instanceof B)) return new B(g, w);
      g = g.trim().split(/\s+/).join(" "), s("comparator", g, w), this.options = w, this.loose = !!w.loose, this.parse(g), this.semver === at ? this.value = "" : this.value = this.operator + this.semver.version, s("comp", this);
    }
    r.rcompareIdentifiers = function(g, w) {
      return D(w, g);
    }, r.major = function(g, w) {
      return new _(g, w).major;
    }, r.minor = function(g, w) {
      return new _(g, w).minor;
    }, r.patch = function(g, w) {
      return new _(g, w).patch;
    }, r.compare = W, r.compareLoose = function(g, w) {
      return W(g, w, true);
    }, r.compareBuild = function(g, w, S) {
      var P = new _(g, S), K = new _(w, S);
      return P.compare(K) || P.compareBuild(K);
    }, r.rcompare = function(g, w, S) {
      return W(w, g, S);
    }, r.sort = function(g, w) {
      return g.sort(function(S, P) {
        return r.compareBuild(S, P, w);
      });
    }, r.rsort = function(g, w) {
      return g.sort(function(S, P) {
        return r.compareBuild(P, S, w);
      });
    }, r.gt = R, r.lt = C, r.eq = F, r.neq = Z, r.gte = T, r.lte = ie, r.cmp = Me, r.Comparator = B;
    var at = {};
    function re(g, w) {
      if (w && typeof w == "object" || (w = { loose: !!w, includePrerelease: false }), g instanceof re) return g.loose === !!w.loose && g.includePrerelease === !!w.includePrerelease ? g : new re(g.raw, w);
      if (g instanceof B) return new re(g.value, w);
      if (!(this instanceof re)) return new re(g, w);
      if (this.options = w, this.loose = !!w.loose, this.includePrerelease = !!w.includePrerelease, this.raw = g.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map(function(S) {
        return this.parseRange(S.trim());
      }, this).filter(function(S) {
        return S.length;
      }), !this.set.length) throw new TypeError("Invalid SemVer Range: " + this.raw);
      this.format();
    }
    function L(g, w) {
      for (var S = true, P = g.slice(), K = P.pop(); S && P.length; ) S = P.every(function(se) {
        return K.intersects(se, w);
      }), K = P.pop();
      return S;
    }
    function A(g) {
      return !g || g.toLowerCase() === "x" || g === "*";
    }
    function U(g, w, S, P, K, se, Q, Ue, xe, $e, Lt, De, Be) {
      return ((w = A(S) ? "" : A(P) ? ">=" + S + ".0.0" : A(K) ? ">=" + S + "." + P + ".0" : ">=" + w) + " " + (Ue = A(xe) ? "" : A($e) ? "<" + (+xe + 1) + ".0.0" : A(Lt) ? "<" + xe + "." + (+$e + 1) + ".0" : De ? "<=" + xe + "." + $e + "." + Lt + "-" + De : "<=" + Ue)).trim();
    }
    function O(g, w, S) {
      for (var P = 0; P < g.length; P++) if (!g[P].test(w)) return false;
      if (w.prerelease.length && !S.includePrerelease) {
        for (P = 0; P < g.length; P++) if (s(g[P].semver), g[P].semver !== at && g[P].semver.prerelease.length > 0) {
          var K = g[P].semver;
          if (K.major === w.major && K.minor === w.minor && K.patch === w.patch) return true;
        }
        return false;
      }
      return true;
    }
    function V(g, w, S) {
      try {
        w = new re(w, S);
      } catch {
        return false;
      }
      return w.test(g);
    }
    function G(g, w, S, P) {
      var K, se, Q, Ue, xe;
      switch (g = new _(g, P), w = new re(w, P), S) {
        case ">":
          K = R, se = ie, Q = C, Ue = ">", xe = ">=";
          break;
        case "<":
          K = C, se = T, Q = R, Ue = "<", xe = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (V(g, w, P)) return false;
      for (var $e = 0; $e < w.set.length; ++$e) {
        var Lt = w.set[$e], De = null, Be = null;
        if (Lt.forEach(function(lt) {
          lt.semver === at && (lt = new B(">=0.0.0")), De = De || lt, Be = Be || lt, K(lt.semver, De.semver, P) ? De = lt : Q(lt.semver, Be.semver, P) && (Be = lt);
        }), De.operator === Ue || De.operator === xe || (!Be.operator || Be.operator === Ue) && se(g, Be.semver) || Be.operator === xe && Q(g, Be.semver)) return false;
      }
      return true;
    }
    B.prototype.parse = function(g) {
      var w = this.options.loose ? a[c.COMPARATORLOOSE] : a[c.COMPARATOR], S = g.match(w);
      if (!S) throw new TypeError("Invalid comparator: " + g);
      this.operator = S[1] !== void 0 ? S[1] : "", this.operator === "=" && (this.operator = ""), S[2] ? this.semver = new _(S[2], this.options.loose) : this.semver = at;
    }, B.prototype.toString = function() {
      return this.value;
    }, B.prototype.test = function(g) {
      if (s("Comparator.test", g, this.options.loose), this.semver === at || g === at) return true;
      if (typeof g == "string") try {
        g = new _(g, this.options);
      } catch {
        return false;
      }
      return Me(g, this.operator, this.semver, this.options);
    }, B.prototype.intersects = function(g, w) {
      if (!(g instanceof B)) throw new TypeError("a Comparator is required");
      var S;
      if (w && typeof w == "object" || (w = { loose: !!w, includePrerelease: false }), this.operator === "") return this.value === "" || (S = new re(g.value, w), V(this.value, S, w));
      if (g.operator === "") return g.value === "" || (S = new re(this.value, w), V(g.semver, S, w));
      var P = !(this.operator !== ">=" && this.operator !== ">" || g.operator !== ">=" && g.operator !== ">"), K = !(this.operator !== "<=" && this.operator !== "<" || g.operator !== "<=" && g.operator !== "<"), se = this.semver.version === g.semver.version, Q = !(this.operator !== ">=" && this.operator !== "<=" || g.operator !== ">=" && g.operator !== "<="), Ue = Me(this.semver, "<", g.semver, w) && (this.operator === ">=" || this.operator === ">") && (g.operator === "<=" || g.operator === "<"), xe = Me(this.semver, ">", g.semver, w) && (this.operator === "<=" || this.operator === "<") && (g.operator === ">=" || g.operator === ">");
      return P || K || se && Q || Ue || xe;
    }, r.Range = re, re.prototype.format = function() {
      return this.range = this.set.map(function(g) {
        return g.join(" ").trim();
      }).join("||").trim(), this.range;
    }, re.prototype.toString = function() {
      return this.range;
    }, re.prototype.parseRange = function(g) {
      var w = this.options.loose, S = w ? a[c.HYPHENRANGELOOSE] : a[c.HYPHENRANGE];
      g = g.replace(S, U), s("hyphen replace", g), g = g.replace(a[c.COMPARATORTRIM], "$1$2$3"), s("comparator trim", g, a[c.COMPARATORTRIM]), g = (g = (g = g.replace(a[c.TILDETRIM], "$1~")).replace(a[c.CARETTRIM], "$1^")).split(/\s+/).join(" ");
      var P = w ? a[c.COMPARATORLOOSE] : a[c.COMPARATOR], K = g.split(" ").map(function(se) {
        return (function(Q, Ue) {
          return s("comp", Q, Ue), Q = (function(xe, $e) {
            return xe.trim().split(/\s+/).map(function(Lt) {
              return (function(De, Be) {
                s("caret", De, Be);
                var lt = Be.loose ? a[c.CARETLOOSE] : a[c.CARET];
                return De.replace(lt, function(xt, j, te, ye, qe) {
                  var Ie;
                  return s("caret", De, xt, j, te, ye, qe), A(j) ? Ie = "" : A(te) ? Ie = ">=" + j + ".0.0 <" + (+j + 1) + ".0.0" : A(ye) ? Ie = j === "0" ? ">=" + j + "." + te + ".0 <" + j + "." + (+te + 1) + ".0" : ">=" + j + "." + te + ".0 <" + (+j + 1) + ".0.0" : qe ? (s("replaceCaret pr", qe), Ie = j === "0" ? te === "0" ? ">=" + j + "." + te + "." + ye + "-" + qe + " <" + j + "." + te + "." + (+ye + 1) : ">=" + j + "." + te + "." + ye + "-" + qe + " <" + j + "." + (+te + 1) + ".0" : ">=" + j + "." + te + "." + ye + "-" + qe + " <" + (+j + 1) + ".0.0") : (s("no pr"), Ie = j === "0" ? te === "0" ? ">=" + j + "." + te + "." + ye + " <" + j + "." + te + "." + (+ye + 1) : ">=" + j + "." + te + "." + ye + " <" + j + "." + (+te + 1) + ".0" : ">=" + j + "." + te + "." + ye + " <" + (+j + 1) + ".0.0"), s("caret return", Ie), Ie;
                });
              })(Lt, $e);
            }).join(" ");
          })(Q, Ue), s("caret", Q), Q = (function(xe, $e) {
            return xe.trim().split(/\s+/).map(function(Lt) {
              return (function(De, Be) {
                var lt = Be.loose ? a[c.TILDELOOSE] : a[c.TILDE];
                return De.replace(lt, function(xt, j, te, ye, qe) {
                  var Ie;
                  return s("tilde", De, xt, j, te, ye, qe), A(j) ? Ie = "" : A(te) ? Ie = ">=" + j + ".0.0 <" + (+j + 1) + ".0.0" : A(ye) ? Ie = ">=" + j + "." + te + ".0 <" + j + "." + (+te + 1) + ".0" : qe ? (s("replaceTilde pr", qe), Ie = ">=" + j + "." + te + "." + ye + "-" + qe + " <" + j + "." + (+te + 1) + ".0") : Ie = ">=" + j + "." + te + "." + ye + " <" + j + "." + (+te + 1) + ".0", s("tilde return", Ie), Ie;
                });
              })(Lt, $e);
            }).join(" ");
          })(Q, Ue), s("tildes", Q), Q = (function(xe, $e) {
            return s("replaceXRanges", xe, $e), xe.split(/\s+/).map(function(Lt) {
              return (function(De, Be) {
                De = De.trim();
                var lt = Be.loose ? a[c.XRANGELOOSE] : a[c.XRANGE];
                return De.replace(lt, function(xt, j, te, ye, qe, Ie) {
                  s("xRange", De, xt, j, te, ye, qe, Ie);
                  var Tl = A(te), Pr = Tl || A(ye), Cl = Pr || A(qe), Ol = Cl;
                  return j === "=" && Ol && (j = ""), Ie = Be.includePrerelease ? "-0" : "", Tl ? xt = j === ">" || j === "<" ? "<0.0.0-0" : "*" : j && Ol ? (Pr && (ye = 0), qe = 0, j === ">" ? (j = ">=", Pr ? (te = +te + 1, ye = 0, qe = 0) : (ye = +ye + 1, qe = 0)) : j === "<=" && (j = "<", Pr ? te = +te + 1 : ye = +ye + 1), xt = j + te + "." + ye + "." + qe + Ie) : Pr ? xt = ">=" + te + ".0.0" + Ie + " <" + (+te + 1) + ".0.0" + Ie : Cl && (xt = ">=" + te + "." + ye + ".0" + Ie + " <" + te + "." + (+ye + 1) + ".0" + Ie), s("xRange return", xt), xt;
                });
              })(Lt, $e);
            }).join(" ");
          })(Q, Ue), s("xrange", Q), Q = (function(xe, $e) {
            return s("replaceStars", xe, $e), xe.trim().replace(a[c.STAR], "");
          })(Q, Ue), s("stars", Q), Q;
        })(se, this.options);
      }, this).join(" ").split(/\s+/);
      return this.options.loose && (K = K.filter(function(se) {
        return !!se.match(P);
      })), K.map(function(se) {
        return new B(se, this.options);
      }, this);
    }, re.prototype.intersects = function(g, w) {
      if (!(g instanceof re)) throw new TypeError("a Range is required");
      return this.set.some(function(S) {
        return L(S, w) && g.set.some(function(P) {
          return L(P, w) && S.every(function(K) {
            return P.every(function(se) {
              return K.intersects(se, w);
            });
          });
        });
      });
    }, r.toComparators = function(g, w) {
      return new re(g, w).set.map(function(S) {
        return S.map(function(P) {
          return P.value;
        }).join(" ").trim().split(" ");
      });
    }, re.prototype.test = function(g) {
      if (!g) return false;
      if (typeof g == "string") try {
        g = new _(g, this.options);
      } catch {
        return false;
      }
      for (var w = 0; w < this.set.length; w++) if (O(this.set[w], g, this.options)) return true;
      return false;
    }, r.satisfies = V, r.maxSatisfying = function(g, w, S) {
      var P = null, K = null;
      try {
        var se = new re(w, S);
      } catch {
        return null;
      }
      return g.forEach(function(Q) {
        se.test(Q) && (P && K.compare(Q) !== -1 || (K = new _(P = Q, S)));
      }), P;
    }, r.minSatisfying = function(g, w, S) {
      var P = null, K = null;
      try {
        var se = new re(w, S);
      } catch {
        return null;
      }
      return g.forEach(function(Q) {
        se.test(Q) && (P && K.compare(Q) !== 1 || (K = new _(P = Q, S)));
      }), P;
    }, r.minVersion = function(g, w) {
      g = new re(g, w);
      var S = new _("0.0.0");
      if (g.test(S) || (S = new _("0.0.0-0"), g.test(S))) return S;
      S = null;
      for (var P = 0; P < g.set.length; ++P) g.set[P].forEach(function(K) {
        var se = new _(K.semver.version);
        switch (K.operator) {
          case ">":
            se.prerelease.length === 0 ? se.patch++ : se.prerelease.push(0), se.raw = se.format();
          case "":
          case ">=":
            S && !R(S, se) || (S = se);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error("Unexpected operation: " + K.operator);
        }
      });
      return S && g.test(S) ? S : null;
    }, r.validRange = function(g, w) {
      try {
        return new re(g, w).range || "*";
      } catch {
        return null;
      }
    }, r.ltr = function(g, w, S) {
      return G(g, w, "<", S);
    }, r.gtr = function(g, w, S) {
      return G(g, w, ">", S);
    }, r.outside = G, r.prerelease = function(g, w) {
      var S = E(g, w);
      return S && S.prerelease.length ? S.prerelease : null;
    }, r.intersects = function(g, w, S) {
      return g = new re(g, S), w = new re(w, S), g.intersects(w);
    }, r.coerce = function(g, w) {
      if (g instanceof _) return g;
      if (typeof g == "number" && (g = String(g)), typeof g != "string") return null;
      var S = null;
      if ((w = w || {}).rtl) {
        for (var P; (P = a[c.COERCERTL].exec(g)) && (!S || S.index + S[0].length !== g.length); ) S && P.index + P[0].length === S.index + S[0].length || (S = P), a[c.COERCERTL].lastIndex = P.index + P[1].length + P[2].length;
        a[c.COERCERTL].lastIndex = -1;
      } else S = g.match(a[c.COERCE]);
      return S === null ? null : E(S[2] + "." + (S[3] || "0") + "." + (S[4] || "0"), w);
    };
  } }, t = {}, (function i(r) {
    var s = t[r];
    if (s !== void 0) return s.exports;
    var n = t[r] = { exports: {} };
    return e[r](n, n.exports, i), n.exports;
  })(97);
  var e, t;
});
var Gw = ee.exports.SEMVER_SPEC_VERSION, Kw = ee.exports.parse, Bm = ee.exports.valid, jw = ee.exports.coerce, Hw = ee.exports.clean, Xw = ee.exports.inc, Qw = ee.exports.major, Jw = ee.exports.minor, Yw = ee.exports.patch, Zw = ee.exports.prerelease, fa = ee.exports.gt, qm = ee.exports.gte, e5 = ee.exports.lt, Sh = ee.exports.lte, zm = ee.exports.eq, t5 = ee.exports.neq, i5 = ee.exports.cmp, r5 = ee.exports.compare, bh = ee.exports.rcompare, s5 = ee.exports.compareIdentifiers, n5 = ee.exports.rcompareIdentifiers, o5 = ee.exports.compareBuild, a5 = ee.exports.sort, l5 = ee.exports.rsort, c5 = ee.exports.diff, u5 = ee.exports.validRange, h5 = ee.exports.satisfies, f5 = ee.exports.maxSatisfying, d5 = ee.exports.minSatisfying, p5 = ee.exports.minVersion, g5 = ee.exports.gtr, m5 = ee.exports.ltr, v5 = ee.exports.outside, y5 = ee.exports.intersects, w5 = ee.exports.SemVer, _5 = ee.exports.Comparator, E5 = ee.exports.Range;
b();
var Gm = { activeComment: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.activeComment.d.ts" }, aiRelatedInformation: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.aiRelatedInformation.d.ts" }, aiTextSearchProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.aiTextSearchProvider.d.ts", version: 2 }, authLearnMore: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.authLearnMore.d.ts" }, authSession: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.authSession.d.ts" }, canonicalUriProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.canonicalUriProvider.d.ts" }, chatContextProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatContextProvider.d.ts" }, chatEditing: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatEditing.d.ts" }, chatParticipantAdditions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatParticipantAdditions.d.ts" }, chatParticipantPrivate: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatParticipantPrivate.d.ts", version: 6 }, chatProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatProvider.d.ts", version: 4 }, chatReferenceBinaryData: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatReferenceBinaryData.d.ts" }, chatReferenceDiagnostic: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatReferenceDiagnostic.d.ts" }, chatSessionsProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatSessionsProvider.d.ts" }, chatStatusItem: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatStatusItem.d.ts" }, chatTab: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatTab.d.ts" }, codeActionAI: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.codeActionAI.d.ts" }, codeActionRanges: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.codeActionRanges.d.ts" }, codiconDecoration: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.codiconDecoration.d.ts" }, commentReactor: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentReactor.d.ts" }, commentReveal: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentReveal.d.ts" }, commentThreadApplicability: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentThreadApplicability.d.ts" }, commentingRangeHint: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentingRangeHint.d.ts" }, commentsDraftState: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentsDraftState.d.ts" }, contribAccessibilityHelpContent: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribAccessibilityHelpContent.d.ts" }, contribChatParticipantDetection: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribChatParticipantDetection.d.ts" }, contribCommentEditorActionsMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribCommentEditorActionsMenu.d.ts" }, contribCommentPeekContext: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribCommentPeekContext.d.ts" }, contribCommentThreadAdditionalMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribCommentThreadAdditionalMenu.d.ts" }, contribCommentsViewThreadMenus: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribCommentsViewThreadMenus.d.ts" }, contribDebugCreateConfiguration: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribDebugCreateConfiguration.d.ts" }, contribDiffEditorGutterToolBarMenus: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribDiffEditorGutterToolBarMenus.d.ts" }, contribEditSessions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribEditSessions.d.ts" }, contribEditorContentMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribEditorContentMenu.d.ts" }, contribLabelFormatterWorkspaceTooltip: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribLabelFormatterWorkspaceTooltip.d.ts" }, contribMenuBarHome: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribMenuBarHome.d.ts" }, contribMergeEditorMenus: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribMergeEditorMenus.d.ts" }, contribMultiDiffEditorMenus: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribMultiDiffEditorMenus.d.ts" }, contribNotebookStaticPreloads: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribNotebookStaticPreloads.d.ts" }, contribRemoteHelp: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribRemoteHelp.d.ts" }, contribShareMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribShareMenu.d.ts" }, contribSourceControlHistoryItemMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribSourceControlHistoryItemMenu.d.ts" }, contribSourceControlHistoryTitleMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribSourceControlHistoryTitleMenu.d.ts" }, contribSourceControlInputBoxMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribSourceControlInputBoxMenu.d.ts" }, contribSourceControlTitleMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribSourceControlTitleMenu.d.ts" }, contribStatusBarItems: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribStatusBarItems.d.ts" }, contribViewContainerTitle: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribViewContainerTitle.d.ts" }, contribViewsRemote: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribViewsRemote.d.ts" }, contribViewsWelcome: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribViewsWelcome.d.ts" }, control: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.control.d.ts" }, cursor: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursor.d.ts" }, cursorAgentHost: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorAgentHost.d.ts" }, cursorNoDeps: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorNoDeps.d.ts" }, cursorPseudoterminal: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorPseudoterminal.d.ts" }, cursorPublic: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorPublic.d.ts" }, cursorTracing: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorTracing.d.ts" }, customEditorMove: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.customEditorMove.d.ts" }, debugVisualization: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.debugVisualization.d.ts" }, defaultChatParticipant: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.defaultChatParticipant.d.ts", version: 3 }, diffCommand: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.diffCommand.d.ts" }, diffContentOptions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.diffContentOptions.d.ts" }, documentFiltersExclusive: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.documentFiltersExclusive.d.ts" }, editSessionIdentityProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.editSessionIdentityProvider.d.ts" }, editorHoverVerbosityLevel: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.editorHoverVerbosityLevel.d.ts" }, editorInsets: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.editorInsets.d.ts" }, embeddings: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.embeddings.d.ts" }, extensionRuntime: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.extensionRuntime.d.ts" }, extensionsAny: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.extensionsAny.d.ts" }, externalUriOpener: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.externalUriOpener.d.ts" }, fileSearchProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.fileSearchProvider.d.ts" }, fileSearchProvider2: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.fileSearchProvider2.d.ts" }, findFiles2: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.findFiles2.d.ts", version: 2 }, findTextInFiles: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.findTextInFiles.d.ts" }, findTextInFiles2: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.findTextInFiles2.d.ts" }, fsChunks: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.fsChunks.d.ts" }, idToken: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.idToken.d.ts" }, inlineCompletionsAdditions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.inlineCompletionsAdditions.d.ts" }, inlineEdit: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.inlineEdit.d.ts" }, interactive: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.interactive.d.ts" }, interactiveWindow: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.interactiveWindow.d.ts" }, ipc: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.ipc.d.ts" }, languageModelCapabilities: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.languageModelCapabilities.d.ts" }, languageModelSystem: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.languageModelSystem.d.ts" }, languageModelThinkingPart: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.languageModelThinkingPart.d.ts", version: 1 }, languageModelToolResultAudience: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.languageModelToolResultAudience.d.ts" }, languageModelToolsForAgent: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.languageModelToolsForAgent.d.ts" }, languageStatusText: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.languageStatusText.d.ts" }, mappedEditsProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.mappedEditsProvider.d.ts" }, markdownAlertSyntax: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.markdownAlertSyntax.d.ts" }, mcpConfigurationProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.mcpConfigurationProvider.d.ts" }, multiDocumentHighlightProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.multiDocumentHighlightProvider.d.ts" }, nativeWindowHandle: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.nativeWindowHandle.d.ts" }, newSymbolNamesProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.newSymbolNamesProvider.d.ts" }, notebookCellExecution: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookCellExecution.d.ts" }, notebookCellExecutionState: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookCellExecutionState.d.ts" }, notebookControllerAffinityHidden: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookControllerAffinityHidden.d.ts" }, notebookDeprecated: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookDeprecated.d.ts" }, notebookExecution: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookExecution.d.ts" }, notebookKernelSource: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookKernelSource.d.ts" }, notebookLiveShare: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookLiveShare.d.ts" }, notebookMessaging: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookMessaging.d.ts" }, notebookMime: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookMime.d.ts" }, notebookReplDocument: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookReplDocument.d.ts" }, notebookVariableProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookVariableProvider.d.ts" }, portsAttributes: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.portsAttributes.d.ts" }, profileContentHandlers: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.profileContentHandlers.d.ts" }, quickDiffProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.quickDiffProvider.d.ts" }, quickPickItemTooltip: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.quickPickItemTooltip.d.ts" }, quickPickSortByLabel: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.quickPickSortByLabel.d.ts" }, remoteCodingAgents: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.remoteCodingAgents.d.ts" }, resolvers: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.resolvers.d.ts" }, scmActionButton: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmActionButton.d.ts" }, scmHistoryProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmHistoryProvider.d.ts" }, scmMultiDiffEditor: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmMultiDiffEditor.d.ts" }, scmRemotes: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmRemotes.d.ts" }, scmSelectedProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmSelectedProvider.d.ts" }, scmTextDocument: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmTextDocument.d.ts" }, scmValidation: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmValidation.d.ts" }, shareProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.shareProvider.d.ts" }, speech: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.speech.d.ts" }, statusBarItemTooltip: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.statusBarItemTooltip.d.ts" }, tabInputMultiDiff: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.tabInputMultiDiff.d.ts" }, tabInputTextMerge: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.tabInputTextMerge.d.ts" }, taskPresentationGroup: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.taskPresentationGroup.d.ts" }, taskProblemMatcherStatus: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.taskProblemMatcherStatus.d.ts" }, telemetry: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.telemetry.d.ts" }, terminalCompletionProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalCompletionProvider.d.ts" }, terminalDataWriteEvent: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalDataWriteEvent.d.ts" }, terminalDimensions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalDimensions.d.ts" }, terminalExecuteCommandEvent: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalExecuteCommandEvent.d.ts" }, terminalQuickFixProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalQuickFixProvider.d.ts" }, terminalSelection: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalSelection.d.ts" }, terminalShellEnv: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalShellEnv.d.ts" }, testObserver: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.testObserver.d.ts" }, testRelatedCode: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.testRelatedCode.d.ts" }, textDocumentTextLength: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.textDocumentTextLength.d.ts" }, textEditorDiffInformation: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.textEditorDiffInformation.d.ts" }, textSearchComplete2: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.textSearchComplete2.d.ts" }, textSearchProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.textSearchProvider.d.ts" }, textSearchProvider2: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.textSearchProvider2.d.ts" }, timeline: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.timeline.d.ts" }, tokenInformation: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.tokenInformation.d.ts" }, treeItemMarkdownLabel: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.treeItemMarkdownLabel.d.ts" }, treeViewActiveItem: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.treeViewActiveItem.d.ts" }, treeViewMarkdownMessage: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.treeViewMarkdownMessage.d.ts" }, treeViewReveal: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.treeViewReveal.d.ts" }, tunnelFactory: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.tunnelFactory.d.ts" }, tunnels: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.tunnels.d.ts" }, valueSelectionInQuickPick: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.valueSelectionInQuickPick.d.ts" }, workspaceTrust: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.workspaceTrust.d.ts" } }, Km = Object.freeze(Gm), xh = /^(\^|>=)?((\d+)|x)\.((\d+)|x)\.((\d+)|x)(\-.*)?$/, jm = /^-(\d{4})(\d{2})(\d{2})$/;
function Hm(e) {
  return e = e.trim(), e === "*" || xh.test(e);
}
function da(e) {
  if (!Hm(e)) return null;
  if (e = e.trim(), e === "*") return { hasCaret: false, hasGreaterEquals: false, majorBase: 0, majorMustEqual: false, minorBase: 0, minorMustEqual: false, patchBase: 0, patchMustEqual: false, preRelease: null };
  const t = e.match(xh);
  return t ? { hasCaret: t[1] === "^", hasGreaterEquals: t[1] === ">=", majorBase: t[2] === "x" ? 0 : parseInt(t[2], 10), majorMustEqual: t[2] !== "x", minorBase: t[4] === "x" ? 0 : parseInt(t[4], 10), minorMustEqual: t[4] !== "x", patchBase: t[6] === "x" ? 0 : parseInt(t[6], 10), patchMustEqual: t[6] !== "x", preRelease: t[8] || null } : null;
}
function pa(e) {
  if (!e) return null;
  const t = e.majorBase, i = e.majorMustEqual, r = e.minorBase;
  let s = e.minorMustEqual;
  const n = e.patchBase;
  let o = e.patchMustEqual;
  e.hasCaret && (t === 0 || (s = false), o = false);
  let a = 0;
  if (e.preRelease) {
    const l = jm.exec(e.preRelease);
    if (l) {
      const [, c, h, f] = l;
      a = Date.UTC(Number(c), Number(h) - 1, Number(f));
    }
  }
  return { majorBase: t, majorMustEqual: i, minorBase: r, minorMustEqual: s, patchBase: n, patchMustEqual: o, isMinimum: e.hasGreaterEquals, notBefore: a };
}
function Xm(e, t, i) {
  let r;
  typeof e == "string" ? r = pa(da(e)) : r = e;
  let s;
  t instanceof Date ? s = t.getTime() : typeof t == "string" && (s = new Date(t).getTime());
  let n;
  if (typeof i == "string" ? n = pa(da(i)) : n = i, !r || !n) return false;
  const o = r.majorBase, a = r.minorBase, l = r.patchBase;
  let c = n.majorBase, h = n.minorBase, f = n.patchBase;
  const d = n.notBefore;
  let p = n.majorMustEqual, v = n.minorMustEqual, y = n.patchMustEqual;
  return n.isMinimum ? o > c ? true : o < c ? false : a > h ? true : a < h || s && s < d ? false : l >= f : (o === 1 && c === 0 && (!p || !v || !y) && (c = 1, h = 0, f = 0, p = true, v = false, y = false), o < c ? false : o > c ? !p : a < h ? false : a > h ? !v : l < f ? false : l > f ? !y : !(s && s < d));
}
function Qm(e, t, i, r, s, n) {
  const o = [];
  if (typeof r.publisher < "u" && typeof r.publisher != "string") return o.push([Ke.Error, m(1996, null)]), o;
  if (typeof r.name != "string") return o.push([Ke.Error, m(1997, null, "name")]), o;
  if (typeof r.version != "string") return o.push([Ke.Error, m(1998, null, "version")]), o;
  if (!r.engines) return o.push([Ke.Error, m(1999, null, "engines")]), o;
  if (typeof r.engines.vscode != "string") return o.push([Ke.Error, m(2e3, null, "engines.vscode")]), o;
  if (typeof r.extensionDependencies < "u" && !Ph(r.extensionDependencies)) return o.push([Ke.Error, m(2001, null, "extensionDependencies")]), o;
  if (typeof r.activationEvents < "u") {
    if (!Ph(r.activationEvents)) return o.push([Ke.Error, m(2002, null, "activationEvents")]), o;
    if (typeof r.main > "u" && typeof r.browser > "u") return o.push([Ke.Error, m(2003, null, "activationEvents", "main", "browser")]), o;
  }
  if (typeof r.extensionKind < "u" && typeof r.main > "u" && o.push([Ke.Warning, m(2004, null, "extensionKind")]), typeof r.main < "u") {
    if (typeof r.main != "string") return o.push([Ke.Error, m(2005, null, "main")]), o;
    {
      const c = z(i, r.main);
      Xc(c, i) || o.push([Ke.Warning, m(2006, null, c.path, i.path)]);
    }
  }
  if (typeof r.browser < "u") {
    if (typeof r.browser != "string") return o.push([Ke.Error, m(2007, null, "browser")]), o;
    {
      const c = z(i, r.browser);
      Xc(c, i) || o.push([Ke.Warning, m(2008, null, c.path, i.path)]);
    }
  }
  if (!Bm(r.version)) return o.push([Ke.Error, m(2009, null)]), o;
  const a = [];
  if (!Jm(e, t, r, s, a)) for (const c of a) o.push([Ke.Error, c]);
  if (n && r.enabledApiProposals?.length) {
    const c = [];
    if (!ga([...r.enabledApiProposals], c)) for (const h of c) o.push([Ke.Error, h]);
  }
  return o;
}
function Jm(e, t, i, r, s) {
  return r || typeof i.main > "u" && typeof i.browser > "u" || dn.includes(`${i.publisher}.${i.name}`.toLowerCase()) ? true : Ih(e, t, i.engines.vscode, s);
}
function es(e, t, i) {
  return e === "*" || Ih(t, i, e);
}
function ga(e, t) {
  if (e.length === 0) return true;
  const i = Array.isArray(t) ? t : void 0, r = (i ? void 0 : t) ?? Km, s = [], n = gm(e);
  for (const { proposalName: o, version: a } of n) {
    if (!a) continue;
    r[o]?.version !== a && s.push(o);
  }
  return s.length ? (i && (s.length === 1 ? i.push(m(2010, null, s[0])) : i.push(m(2011, null, s.slice(0, s.length - 1).map((o) => `'${o}'`).join(", "), s[s.length - 1]))), false) : true;
}
function Ih(e, t, i, r = []) {
  const s = pa(da(i));
  if (!s) return r.push(m(2012, null, i)), false;
  if (s.majorBase === 0) {
    if (!s.majorMustEqual || !s.minorMustEqual) return r.push(m(2013, null, i)), false;
  } else if (!s.majorMustEqual) return r.push(m(2014, null, i)), false;
  return Xm(e, t, s) ? true : (r.push(m(2015, null, e, i)), false);
}
function Ph(e) {
  if (!Array.isArray(e)) return false;
  for (let t = 0, i = e.length; t < i; t++) if (typeof e[t] != "string") return false;
  return true;
}
b();
var ot = ue("productService");
b(), b();
function ma(e) {
  const t = [];
  typeof e == "number" && t.push("code/timeOrigin", e);
  function i(n, o) {
    t.push(n, o?.startTime ?? Date.now());
  }
  function r() {
    const n = [];
    for (let o = 0; o < t.length; o += 2) n.push({ name: t[o], startTime: t[o + 1] });
    return n;
  }
  function s(n) {
    for (let o = t.length - 2; o >= 0; o -= 2) t[o] === n && t.splice(o, 2);
  }
  return { mark: i, getMarks: r, clearMarks: s };
}
function Ym() {
  if (typeof performance == "object" && typeof performance.mark == "function" && !performance.nodeTiming) {
    if (typeof performance.timeOrigin != "number" && !performance.timing) return ma();
    {
      const e = /* @__PURE__ */ new Map();
      return { mark(t, i) {
        if (!e.has(t)) {
          const [r] = performance.getEntriesByName(t, "mark");
          r && e.set(t, r.startTime);
        }
        e.has(t) && performance.clearMarks(t), performance.mark(t, i);
      }, clearMarks(t) {
        e.delete(t), performance.clearMarks(t);
      }, getMarks() {
        let t = performance.timeOrigin;
        typeof t != "number" && (t = performance.timing.navigationStart || performance.timing.redirectStart || performance.timing.fetchStart);
        const i = [];
        for (const [s, n] of e) i.push({ name: s, startTime: n });
        for (const s of performance.getEntriesByType("mark")) i.push({ name: s.name, startTime: s.startTime });
        i.sort((s, n) => s.startTime - n.startTime);
        const r = [{ name: "code/timeOrigin", startTime: Math.round(t) }];
        for (const s of i) r.push({ name: s.name, startTime: Math.round(t + s.startTime) });
        return r;
      } };
    }
  } else if (typeof process == "object") {
    const e = performance?.timeOrigin;
    return ma(e);
  } else return console.trace("perf-util loaded in UNKNOWN environment"), ma();
}
function Zm(e) {
  return e.MonacoPerformanceMarks || (e.MonacoPerformanceMarks = Ym()), e.MonacoPerformanceMarks;
}
var va = Zm(globalThis), ya = va.mark, S5 = va.getMarks, b5 = va.clearMarks;
b(), b();
function ev(e) {
  return JSON.stringify(e, iv);
}
function tv(e) {
  let t = JSON.parse(e);
  return t = vr(t), t;
}
function iv(e, t) {
  return t instanceof RegExp ? { $mid: 2, source: t.source, flags: t.flags } : t;
}
var rv = Object.prototype.hasOwnProperty;
function vr(e, t = 0) {
  if (typeof e != "object" || e === null || t > 200) return e;
  switch (e.$mid) {
    case 1:
      return k.revive(e);
    case 2:
      return new RegExp(e.source, e.flags);
    case 17:
      return new Date(e.source);
  }
  if (Array.isArray(e)) for (let i = 0; i < e.length; ++i) {
    const r = e[i];
    if (r !== null && typeof r == "object") {
      const s = vr(r, t + 1);
      s !== r && (e[i] = s);
    }
  }
  else {
    if (e instanceof $ || e instanceof Uint8Array) return e;
    for (const i in e) if (rv.call(e, i)) {
      const r = e[i];
      if (r !== null && typeof r == "object") {
        const s = vr(r, t + 1);
        s !== r && (e[i] = s);
      }
    }
  }
  return e;
}
b();
var Rh = ["chats", "messages", "agentBlobs", "agentCheckpoints", "agentArtifacts", "checkpoints", "diffs", "cloudAgents", "composerIndex", "settings", "otherKv", "sqliteOverhead", "wal", "sqliteFree"], x5 = new Map(Rh.map((e, t) => [e, t])), I5 = Rh.filter((e) => e !== "wal" && e !== "sqliteFree" && e !== "sqliteOverhead"), sv = ["cloudAgents", "diffs", "checkpoints", "agentArtifacts", "agentCheckpoints"], nv = ["chats", "messages", "agentBlobs", "otherKv"], ov = ["settings", "composerIndex", ...sv], P5 = [...ov, ...nv], R5 = 3600 * 1e3, A5 = 1024 * 1024, k5 = 512 * 1024 * 1024, D5 = 900 * 1e3, av = class ud extends X {
  constructor(t, i = /* @__PURE__ */ Object.create(null)) {
    super(), this.database = t, this.options = i, this._onDidChangeStorage = this._register(new to()), this.onDidChangeStorage = this._onDidChangeStorage.event, this.state = 0, this.cache = /* @__PURE__ */ new Map(), this.flushDelayer = this._register(new Li(ud.DEFAULT_FLUSH_DELAY)), this.pendingDeletes = /* @__PURE__ */ new Set(), this.pendingInserts = /* @__PURE__ */ new Map(), this.unacknowledgedKeys = /* @__PURE__ */ new Set(), this.pendingClose = void 0, this.whenFlushedCallbacks = [], this.registerListeners();
  }
  registerListeners() {
    this._register(this.database.onDidChangeItemsExternal((t) => this.onDidChangeItemsExternal(t)));
  }
  onDidChangeItemsExternal(t) {
    this._onDidChangeStorage.pause();
    try {
      t.changed?.forEach((i, r) => this.acceptExternal(r, i)), t.deleted?.forEach((i) => this.acceptExternal(i, void 0));
    } finally {
      this._onDidChangeStorage.resume();
    }
  }
  acceptExternal(t, i) {
    if (this.state === 2 || this.hasUnacknowledgedWrite(t)) return;
    let r = false;
    Ze(i) ? r = this.cache.delete(t) : this.cache.get(t) !== i && (this.cache.set(t, i), r = true), r && this._onDidChangeStorage.fire({ key: t, external: true });
  }
  get items() {
    return this.cache;
  }
  get size() {
    return this.cache.size;
  }
  async init() {
    this.state === 0 && (this.state = 1, this.options.hint !== 0 && (this.cache = await this.database.getItems()));
  }
  collectionBulkInsert(t, i) {
    return this.database.collectionBulkInsert(t, i);
  }
  collectionUpsertIfPreferred(t, i) {
    return this.database.collectionUpsertIfPreferred(t, i);
  }
  collectionDeleteMany(t, i) {
    return this.database.collectionDeleteMany(t, i);
  }
  collectionQuery(t, i) {
    return this.database.collectionQuery(t, i);
  }
  cursorDiskKVGet(t, i) {
    return this.database.cursorDiskKVGet(t, i);
  }
  cursorDiskKVGetWithLogs(t) {
    return this.database.cursorDiskKVGetWithLogs(t);
  }
  cursorDiskKVGetBatch(t) {
    return this.database.cursorDiskKVGetBatch(t);
  }
  cursorDiskKVSet(t, i) {
    return this.database.cursorDiskKVSet(t, i);
  }
  cursorDiskKVSetIfAbsent(t, i) {
    return this.database.cursorDiskKVSetIfAbsent(t, i);
  }
  cursorDiskKVReplaceIfEquals(t, i, r) {
    return this.database.cursorDiskKVReplaceIfEquals(t, i, r);
  }
  cursorDiskKVSetBinary(t, i) {
    return this.database.cursorDiskKVSetBinary(t, i);
  }
  cursorDiskKVSetBinaryBatch(t) {
    return this.database.cursorDiskKVSetBinaryBatch(t);
  }
  cursorDiskKVSetBatch(t, i) {
    return this.database.cursorDiskKVSetBatch(t, i);
  }
  cursorDiskKVGetBinary(t) {
    return this.database.cursorDiskKVGetBinary(t);
  }
  cursorDiskKVDelete(t, i) {
    return this.database.cursorDiskKVDelete(t, i);
  }
  cursorDiskKVClearPrefix(t) {
    return this.database.cursorDiskKVClearPrefix(t);
  }
  cursorDiskKVGetPrefix(t) {
    return this.database.cursorDiskKVGetPrefix(t);
  }
  cursorDiskKVGetPrefixKeys(t) {
    return this.database.cursorDiskKVGetPrefixKeys(t);
  }
  cursorDiskKVGetPrefixBinary(t) {
    return this.database.cursorDiskKVGetPrefixBinary(t);
  }
  get(t, i) {
    const r = this.cache.get(t);
    return Ze(r) ? i : r;
  }
  getBoolean(t, i) {
    const r = this.get(t);
    return Ze(r) ? i : r === "true";
  }
  getNumber(t, i) {
    const r = this.get(t);
    return Ze(r) ? i : parseFloat(r);
  }
  getObject(t, i) {
    const r = this.get(t);
    return Ze(r) ? i : tv(r);
  }
  async set(t, i, r = false) {
    if (this.state === 2) return;
    if (Ze(i)) return this.delete(t, r);
    const s = Ne(i) || Array.isArray(i) ? ev(i) : String(i);
    if (this.cache.get(t) !== s) return this.cache.set(t, s), this.pendingInserts.set(t, s), this.pendingDeletes.delete(t), this._onDidChangeStorage.fire({ key: t, external: r }), this.doFlush();
  }
  async delete(t, i = false) {
    if (!(this.state === 2 || !this.cache.delete(t))) return this.pendingDeletes.has(t) || this.pendingDeletes.add(t), this.pendingInserts.delete(t), this._onDidChangeStorage.fire({ key: t, external: i }), this.doFlush();
  }
  async optimize(t) {
    if (this.state !== 2) return await this.flush(0), this.database.optimize(t);
  }
  async getStorageStats() {
    return this.database.getStorageStats?.();
  }
  async getStorageSizeBreakdown(t) {
    return this.database.getStorageSizeBreakdown?.(t);
  }
  async cancelStorageSizeBreakdown() {
    await this.database.cancelStorageSizeBreakdown?.();
  }
  async close() {
    return this.pendingClose || (this.pendingClose = this.doClose()), this.pendingClose;
  }
  async doClose() {
    this.state = 2;
    try {
      await this.doFlush(0);
    } catch {
    }
    await this.database.close(() => this.cache), this.cache = /* @__PURE__ */ new Map(), this.pendingInserts = /* @__PURE__ */ new Map(), this.pendingDeletes = /* @__PURE__ */ new Set();
  }
  get hasPending() {
    return this.pendingInserts.size > 0 || this.pendingDeletes.size > 0;
  }
  hasUnacknowledgedWrite(t) {
    return this.pendingInserts.has(t) || this.pendingDeletes.has(t) || this.unacknowledgedKeys.has(t);
  }
  markAcknowledged(t) {
    t.insert?.forEach((i, r) => this.unacknowledgedKeys.delete(r)), t.delete?.forEach((i) => this.unacknowledgedKeys.delete(i));
  }
  async flushPending() {
    if (!this.hasPending) return;
    const t = { insert: this.pendingInserts, delete: this.pendingDeletes };
    return this.pendingDeletes = /* @__PURE__ */ new Set(), this.pendingInserts = /* @__PURE__ */ new Map(), t.insert.forEach((i, r) => this.unacknowledgedKeys.add(r)), t.delete.forEach((i) => this.unacknowledgedKeys.add(i)), this.database.updateItems(t, (i) => this.markAcknowledged(i)).finally(() => {
      if (this.markAcknowledged(t), !this.hasPending) for (; this.whenFlushedCallbacks.length; ) this.whenFlushedCallbacks.pop()?.();
    });
  }
  async flush(t) {
    if (!(this.state === 2 || this.pendingClose)) return this.doFlush(t);
  }
  async doFlush(t) {
    return this.options.hint === 1 ? this.flushPending() : this.flushDelayer.trigger(() => this.flushPending(), t);
  }
  async whenFlushed() {
    if (this.hasPending) return new Promise((t) => this.whenFlushedCallbacks.push(t));
  }
  isInMemory() {
    return this.options.hint === 1;
  }
};
av.DEFAULT_FLUSH_DELAY = 100, b(), b();
var L5 = ue("contextService");
function lv(e) {
  const t = e;
  return typeof t?.id == "string" && k.isUri(t.uri);
}
function cv(e) {
  const t = e;
  return typeof t?.id == "string" && k.isUri(t.configPath);
}
var Ah = "code-workspace", T5 = `.${Ah}`, C5 = [{ name: m(2692, null), extensions: [Ah] }];
b();
var je = ue("IUriIdentityService");
function uv(e) {
  const t = e;
  return !!(t && typeof t == "object" && typeof t.id == "string" && typeof t.isDefault == "boolean" && typeof t.name == "string" && k.isUri(t.location) && k.isUri(t.globalStorageHome) && k.isUri(t.settingsResource) && k.isUri(t.keybindingsResource) && k.isUri(t.tasksResource) && k.isUri(t.snippetsHome) && k.isUri(t.promptsHome) && k.isUri(t.extensionsResource));
}
var Dt = ue("IUserDataProfilesService");
function wn(e, t, i, r, s, n) {
  return { id: e, name: t, location: i, isDefault: false, icon: s?.icon, globalStorageHome: n && s?.useDefaultFlags?.globalState ? n.globalStorageHome : z(i, "globalStorage"), settingsResource: n && s?.useDefaultFlags?.settings ? n.settingsResource : z(i, "settings.json"), keybindingsResource: n && s?.useDefaultFlags?.keybindings ? n.keybindingsResource : z(i, "keybindings.json"), tasksResource: n && s?.useDefaultFlags?.tasks ? n.tasksResource : z(i, "tasks.json"), snippetsHome: n && s?.useDefaultFlags?.snippets ? n.snippetsHome : z(i, "snippets"), promptsHome: n && s?.useDefaultFlags?.prompts ? n.promptsHome : z(i, "prompts"), extensionsResource: n && s?.useDefaultFlags?.extensions ? n.extensionsResource : z(i, "extensions.json"), cacheHome: z(r, e), useDefaultFlags: s?.useDefaultFlags, isTransient: s?.transient, workspaces: s?.workspaces };
}
var ts = class extends X {
  constructor(e, t, i, r) {
    super(), this.environmentService = e, this.fileService = t, this.uriIdentityService = i, this.logService = r, this._onDidChangeProfiles = this._register(new M()), this.onDidChangeProfiles = this._onDidChangeProfiles.event, this._onWillCreateProfile = this._register(new M()), this.onWillCreateProfile = this._onWillCreateProfile.event, this._onWillRemoveProfile = this._register(new M()), this.onWillRemoveProfile = this._onWillRemoveProfile.event, this._onDidResetWorkspaces = this._register(new M()), this.onDidResetWorkspaces = this._onDidResetWorkspaces.event, this.profileCreationPromises = /* @__PURE__ */ new Map(), this.transientProfilesObject = { profiles: [], emptyWindows: /* @__PURE__ */ new Map() }, this.profilesHome = z(this.environmentService.userRoamingDataHome, "profiles"), this.profilesCacheHome = z(this.environmentService.cacheHome, "CachedProfilesData");
  }
  get defaultProfile() {
    return this.profiles[0];
  }
  get profiles() {
    return [...this.profilesObject.profiles, ...this.transientProfilesObject.profiles];
  }
  init() {
    this._profilesObject = void 0;
  }
  get profilesObject() {
    if (!this._profilesObject) {
      const e = this.createDefaultProfile(), t = [e];
      try {
        for (const r of this.getStoredProfiles()) {
          if (!r.name || !Te(r.name) || !r.location) {
            this.logService.warn("Skipping the invalid stored profile", r.location || r.name);
            continue;
          }
          t.push(wn(nr(r.location), r.name, r.location, this.profilesCacheHome, { icon: r.icon, useDefaultFlags: r.useDefaultFlags }, e));
        }
      } catch (r) {
        this.logService.error(r);
      }
      const i = /* @__PURE__ */ new Map();
      if (t.length) try {
        const r = this.getStoredProfileAssociations();
        if (r.workspaces) for (const [s, n] of Object.entries(r.workspaces)) {
          const o = k.parse(s), a = t.find((l) => l.id === n);
          if (a) {
            const l = a.workspaces ? a.workspaces.slice(0) : [];
            l.push(o), a.workspaces = l;
          }
        }
        if (r.emptyWindows) for (const [s, n] of Object.entries(r.emptyWindows)) {
          const o = t.find((a) => a.id === n);
          o && i.set(s, o);
        }
      } catch (r) {
        this.logService.error(r);
      }
      this._profilesObject = { profiles: t, emptyWindows: i };
    }
    return this._profilesObject;
  }
  createDefaultProfile() {
    const e = wn("__default__profile__", m(2635, null), this.environmentService.userRoamingDataHome, this.profilesCacheHome);
    return { ...e, extensionsResource: this.getDefaultProfileExtensionsLocation() ?? e.extensionsResource, isDefault: true };
  }
  async createTransientProfile(e) {
    const t = "Temp", i = new RegExp(`${er(t)}\\s(\\d+)`);
    let r = 0;
    for (const n of this.profiles) {
      const o = i.exec(n.name), a = o ? parseInt(o[1]) : 0;
      r = a > r ? a : r;
    }
    const s = `${t} ${r + 1}`;
    return this.createProfile(cr(dt()).toString(16), s, { transient: true }, e);
  }
  async createNamedProfile(e, t, i) {
    return this.createProfile(cr(dt()).toString(16), e, t, i);
  }
  async createProfile(e, t, i, r) {
    return await this.doCreateProfile(e, t, i, r);
  }
  async doCreateProfile(e, t, i, r) {
    if (!Te(t) || !t) throw new Error("Name of the profile is mandatory and must be of type `string`");
    let s = this.profileCreationPromises.get(t);
    return s || (s = (async () => {
      try {
        if (this.profiles.find((c) => c.id === e || !c.isTransient && !i?.transient && c.name === t)) throw new Error(`Profile with ${t} name already exists`);
        const o = r ? this.getWorkspace(r) : void 0;
        k.isUri(o) && (i = { ...i, workspaces: [o] });
        const a = wn(e, t, z(this.profilesHome, e), this.profilesCacheHome, i, this.defaultProfile);
        await this.fileService.createFolder(a.location);
        const l = [];
        return this._onWillCreateProfile.fire({ profile: a, join(c) {
          l.push(c);
        } }), await ht.settled(l), o && !k.isUri(o) && this.updateEmptyWindowAssociation(o, a, !!a.isTransient), this.updateProfiles([a], [], []), a;
      } finally {
        this.profileCreationPromises.delete(t);
      }
    })(), this.profileCreationPromises.set(t, s)), s;
  }
  async updateProfile(e, t) {
    const i = [];
    for (const s of this.profiles) {
      let n;
      if (e.id === s.id) s.isDefault ? t.workspaces && (n = s, n.workspaces = t.workspaces) : n = wn(s.id, t.name ?? s.name, s.location, this.profilesCacheHome, { icon: t.icon === null ? void 0 : t.icon ?? s.icon, transient: t.transient ?? s.isTransient, useDefaultFlags: t.useDefaultFlags ?? s.useDefaultFlags, workspaces: t.workspaces ?? s.workspaces }, this.defaultProfile);
      else if (t.workspaces) {
        const o = s.workspaces?.filter((a) => !t.workspaces?.some((l) => this.uriIdentityService.extUri.isEqual(a, l)));
        s.workspaces?.length !== o?.length && (n = s, n.workspaces = o);
      }
      n && i.push(n);
    }
    if (!i.length) throw e.isDefault ? new Error("Cannot update default profile") : new Error(`Profile '${e.name}' does not exist`);
    this.updateProfiles([], [], i);
    const r = this.profiles.find((s) => s.id === e.id);
    if (!r) throw new Error(`Profile '${e.name}' was not updated`);
    return r;
  }
  async removeProfile(e) {
    if (e.isDefault) throw new Error("Cannot remove default profile");
    const t = this.profiles.find((r) => r.id === e.id);
    if (!t) throw new Error(`Profile '${e.name}' does not exist`);
    const i = [];
    this._onWillRemoveProfile.fire({ profile: t, join(r) {
      i.push(r);
    } });
    try {
      await Promise.allSettled(i);
    } catch (r) {
      this.logService.error(r);
    }
    this.updateProfiles([], [t], []);
    try {
      await this.fileService.del(t.cacheHome, { recursive: true });
    } catch (r) {
      Ge(r) !== 1 && this.logService.error(r);
    }
  }
  async setProfileForWorkspace(e, t) {
    const i = this.profiles.find((s) => s.id === t.id);
    if (!i) throw new Error(`Profile '${t.name}' does not exist`);
    const r = this.getWorkspace(e);
    if (k.isUri(r)) {
      const s = i.workspaces ? [...i.workspaces] : [];
      s.some((n) => this.uriIdentityService.extUri.isEqual(n, r)) || (s.push(r), await this.updateProfile(i, { workspaces: s }));
    } else this.updateEmptyWindowAssociation(r, i, false), this.updateStoredProfiles(this.profiles);
  }
  unsetWorkspace(e, t = false) {
    const i = this.getWorkspace(e);
    if (k.isUri(i)) {
      const r = this.getProfileForWorkspace(e);
      r && this.updateProfile(r, { workspaces: r.workspaces?.filter((s) => !this.uriIdentityService.extUri.isEqual(s, i)) });
    } else this.updateEmptyWindowAssociation(i, void 0, t), this.updateStoredProfiles(this.profiles);
  }
  async resetWorkspaces() {
    this.transientProfilesObject.emptyWindows.clear(), this.profilesObject.emptyWindows.clear();
    for (const e of this.profiles) e.workspaces = void 0;
    this.updateProfiles([], [], this.profiles), this._onDidResetWorkspaces.fire();
  }
  async cleanUp() {
    if (await this.fileService.exists(this.profilesHome)) {
      const e = await this.fileService.resolve(this.profilesHome);
      await Promise.all((e.children || []).filter((t) => t.isDirectory && this.profiles.every((i) => !this.uriIdentityService.extUri.isEqual(i.location, t.resource))).map((t) => this.fileService.del(t.resource, { recursive: true })));
    }
  }
  async cleanUpTransientProfiles() {
    const e = this.transientProfilesObject.profiles.filter((t) => !this.isProfileAssociatedToWorkspace(t));
    await Promise.allSettled(e.map((t) => this.removeProfile(t)));
  }
  getProfileForWorkspace(e) {
    const t = this.getWorkspace(e);
    return k.isUri(t) ? this.profiles.find((i) => i.workspaces?.some((r) => this.uriIdentityService.extUri.isEqual(r, t))) : this.profilesObject.emptyWindows.get(t) ?? this.transientProfilesObject.emptyWindows.get(t);
  }
  getWorkspace(e) {
    return lv(e) ? e.uri : cv(e) ? e.configPath : e.id;
  }
  isProfileAssociatedToWorkspace(e) {
    return !!(e.workspaces?.length || [...this.profilesObject.emptyWindows.values()].some((t) => this.uriIdentityService.extUri.isEqual(t.location, e.location)) || [...this.transientProfilesObject.emptyWindows.values()].some((t) => this.uriIdentityService.extUri.isEqual(t.location, e.location)));
  }
  updateProfiles(e, t, i) {
    const r = [...this.profiles, ...e], s = this.transientProfilesObject.profiles;
    this.transientProfilesObject.profiles = [];
    const n = [];
    for (let o of r) {
      if (t.some((a) => o.id === a.id)) {
        for (const a of [...this.profilesObject.emptyWindows.keys()]) o.id === this.profilesObject.emptyWindows.get(a)?.id && this.profilesObject.emptyWindows.delete(a);
        continue;
      }
      if (!o.isDefault) {
        o = i.find((l) => o.id === l.id) ?? o;
        const a = s.find((l) => o.id === l.id);
        if (o.isTransient) this.transientProfilesObject.profiles.push(o);
        else if (a) {
          for (const [l, c] of this.transientProfilesObject.emptyWindows.entries()) if (o.id === c.id) {
            this.transientProfilesObject.emptyWindows.delete(l), this.profilesObject.emptyWindows.set(l, o);
            break;
          }
        }
      }
      o.workspaces?.length === 0 && (o.workspaces = void 0), n.push(o);
    }
    this.updateStoredProfiles(n), this.triggerProfilesChanges(e, t, i);
  }
  triggerProfilesChanges(e, t, i) {
    this._onDidChangeProfiles.fire({ added: e, removed: t, updated: i, all: this.profiles });
  }
  updateEmptyWindowAssociation(e, t, i) {
    i = t?.isTransient ? true : i, i ? t ? this.transientProfilesObject.emptyWindows.set(e, t) : this.transientProfilesObject.emptyWindows.delete(e) : (this.transientProfilesObject.emptyWindows.delete(e), t ? this.profilesObject.emptyWindows.set(e, t) : this.profilesObject.emptyWindows.delete(e));
  }
  updateStoredProfiles(e) {
    const t = [], i = {}, r = {};
    for (const s of e) if (!s.isTransient && (s.isDefault || t.push({ location: s.location, name: s.name, icon: s.icon, useDefaultFlags: s.useDefaultFlags }), s.workspaces)) for (const n of s.workspaces) i[n.toString()] = s.id;
    for (const [s, n] of this.profilesObject.emptyWindows.entries()) r[s.toString()] = n.id;
    this.saveStoredProfileAssociations({ workspaces: i, emptyWindows: r }), this.saveStoredProfiles(t), this._profilesObject = void 0;
  }
  getStoredProfiles() {
    return [];
  }
  saveStoredProfiles(e) {
    throw new Error("not implemented");
  }
  getStoredProfileAssociations() {
    return {};
  }
  saveStoredProfileAssociations(e) {
    throw new Error("not implemented");
  }
  getDefaultProfileExtensionsLocation() {
  }
};
ts.PROFILES_KEY = "userDataProfiles", ts.PROFILE_ASSOCIATIONS_KEY = "profileAssociations", ts = N([x(0, ti), x(1, ke), x(2, je), x(3, pe)], ts);
var hv = "__$__isNewStorageMarker", _n = "__$__targetStorageMarker", fv = ue("storageService");
function dv(e) {
  const t = e.get(_n);
  if (t) try {
    return JSON.parse(t);
  } catch {
  }
  return /* @__PURE__ */ Object.create(null);
}
var pv = class hd extends X {
  constructor(t = { flushInterval: hd.DEFAULT_FLUSH_INTERVAL }) {
    super(), this._onDidChangeValue = this._register(new to()), this._onDidChangeTarget = this._register(new to()), this.onDidChangeTarget = this._onDidChangeTarget.event, this._onWillSaveState = this._register(new M()), this.onWillSaveState = this._onWillSaveState.event, this.runFlushWhenIdle = this._register(new li()), this._workspaceKeyTargets = void 0, this._profileKeyTargets = void 0, this._applicationKeyTargets = void 0, this.onDiskShouldSaveCallbacks = [], this.flushWhenIdleScheduler = this._register(new zs(() => this.doFlushWhenIdle(), t.flushInterval));
  }
  get vscodeService() {
    return this;
  }
  onDidChangeValue(t, i, r) {
    return ne.filter(this._onDidChangeValue.event, (s) => s.scope === t && (i === void 0 || s.key === i), r);
  }
  doFlushWhenIdle() {
    this.runFlushWhenIdle.value = ou(() => {
      this.shouldFlushWhenIdle() && this.flush(), this.flushWhenIdleScheduler.schedule();
    });
  }
  shouldFlushWhenIdle() {
    return true;
  }
  stopFlushWhenIdle() {
    ai([this.runFlushWhenIdle, this.flushWhenIdleScheduler]);
  }
  initialize() {
    return this.initializationPromise || (this.initializationPromise = (async () => {
      ya("code/willInitStorage");
      try {
        await this.doInitialize();
      } finally {
        ya("code/didInitStorage");
      }
      this.flushWhenIdleScheduler.schedule();
    })()), this.initializationPromise;
  }
  emitDidChangeValue(t, i) {
    const { key: r, external: s } = i;
    if (r === _n) {
      switch (t) {
        case -1:
          this._applicationKeyTargets = void 0;
          break;
        case 0:
          this._profileKeyTargets = void 0;
          break;
        case 1:
          this._workspaceKeyTargets = void 0;
          break;
      }
      this._onDidChangeTarget.fire({ scope: t });
    } else this._onDidChangeValue.fire({ scope: t, key: r, target: this.getKeyTargets(t)[r], external: s });
  }
  emitWillSaveState(t) {
    this._onWillSaveState.fire({ reason: t });
  }
  get(t, i, r) {
    return this.getStorage(i)?.get(t, r) ?? r;
  }
  getBoolean(t, i, r) {
    return this.getStorage(i)?.getBoolean(t, r) ?? r;
  }
  getNumber(t, i, r) {
    return this.getStorage(i)?.getNumber(t, r) ?? r;
  }
  getObject(t, i, r) {
    return this.getStorage(i)?.getObject(t, r) ?? r;
  }
  storeAll(t, i) {
    this.withPausedEmitters(() => {
      for (const r of t) this.store(r.key, r.value, r.scope, r.target, i);
    });
  }
  store(t, i, r, s, n = false) {
    if (Ze(i)) {
      this.remove(t, r, n);
      return;
    }
    this.withPausedEmitters(() => {
      this.updateKeyTarget(t, r, s), this.getStorage(r)?.set(t, i, n);
    });
  }
  remove(t, i, r = false) {
    this.withPausedEmitters(() => {
      this.updateKeyTarget(t, i, void 0), this.getStorage(i)?.delete(t, r);
    });
  }
  withPausedEmitters(t) {
    this._onDidChangeValue.pause(), this._onDidChangeTarget.pause();
    try {
      t();
    } finally {
      this._onDidChangeValue.resume(), this._onDidChangeTarget.resume();
    }
  }
  keys(t, i) {
    const r = [], s = this.getKeyTargets(t);
    for (const n of Object.keys(s)) s[n] === i && r.push(n);
    return r;
  }
  updateKeyTarget(t, i, r, s = false) {
    const n = this.getKeyTargets(i);
    typeof r == "number" ? n[t] !== r && (n[t] = r, this.getStorage(i)?.set(_n, JSON.stringify(n), s)) : typeof n[t] == "number" && (delete n[t], this.getStorage(i)?.set(_n, JSON.stringify(n), s));
  }
  get workspaceKeyTargets() {
    return this._workspaceKeyTargets || (this._workspaceKeyTargets = this.loadKeyTargets(1)), this._workspaceKeyTargets;
  }
  get profileKeyTargets() {
    return this._profileKeyTargets || (this._profileKeyTargets = this.loadKeyTargets(0)), this._profileKeyTargets;
  }
  get applicationKeyTargets() {
    return this._applicationKeyTargets || (this._applicationKeyTargets = this.loadKeyTargets(-1)), this._applicationKeyTargets;
  }
  getKeyTargets(t) {
    switch (t) {
      case -1:
        return this.applicationKeyTargets;
      case 0:
        return this.profileKeyTargets;
      default:
        return this.workspaceKeyTargets;
    }
  }
  loadKeyTargets(t) {
    const i = this.getStorage(t);
    return i ? dv(i) : /* @__PURE__ */ Object.create(null);
  }
  isNew(t) {
    return this.getBoolean(hv, t) === true;
  }
  async collectionBulkInsert(t, i) {
    return this.getStorage(-1)?.collectionBulkInsert(t, i);
  }
  async collectionUpsertIfPreferred(t, i) {
    return this.getStorage(-1)?.collectionUpsertIfPreferred(t, i) ?? { applied: 0, rejected: i.map((r) => r.pk) };
  }
  async collectionDeleteMany(t, i) {
    return this.getStorage(-1)?.collectionDeleteMany(t, i);
  }
  async collectionQuery(t, i) {
    return this.getStorage(-1)?.collectionQuery(t, i) ?? [];
  }
  async cursorDiskKVGet(t, i) {
    return this.getStorage(-1)?.cursorDiskKVGet(t, i);
  }
  async cursorDiskKVGetWithLogs(t) {
    return await this.getStorage(-1)?.cursorDiskKVGetWithLogs(t) ?? { result: void 0, logs: [`[storage] StorageService.cursorDiskKVGetWithLogs: ${t} undefined storage`] };
  }
  async cursorDiskKVGetBatch(t) {
    return await this.getStorage(-1)?.cursorDiskKVGetBatch(t) ?? [];
  }
  async cursorDiskKVSet(t, i) {
    return this.getStorage(-1)?.cursorDiskKVSet(t, i);
  }
  async cursorDiskKVSetIfAbsent(t, i) {
    return this.getStorage(-1)?.cursorDiskKVSetIfAbsent(t, i) ?? false;
  }
  async cursorDiskKVReplaceIfEquals(t, i, r) {
    return this.getStorage(-1)?.cursorDiskKVReplaceIfEquals(t, i, r) ?? false;
  }
  async cursorDiskKVSetBinary(t, i) {
    return this.getStorage(-1)?.cursorDiskKVSetBinary(t, i);
  }
  async cursorDiskKVSetBinaryBatch(t) {
    return this.getStorage(-1)?.cursorDiskKVSetBinaryBatch(t);
  }
  async cursorDiskKVSetBatch(t, i) {
    return await this.getStorage(-1)?.cursorDiskKVSetBatch(t, i) ?? false;
  }
  async cursorDiskKVGetBinary(t) {
    return this.getStorage(-1)?.cursorDiskKVGetBinary(t);
  }
  async cursorDiskKVDelete(t, i) {
    return this.getStorage(-1)?.cursorDiskKVDelete(t, i);
  }
  async cursorDiskKVClearPrefix(t) {
    return this.getStorage(-1)?.cursorDiskKVClearPrefix(t);
  }
  async cursorDiskKVGetPrefix(t) {
    return this.getStorage(-1)?.cursorDiskKVGetPrefix(t) ?? [];
  }
  async cursorDiskKVGetPrefixKeys(t) {
    return this.getStorage(-1)?.cursorDiskKVGetPrefixKeys(t) ?? [];
  }
  async cursorDiskKVGetPrefixBinary(t) {
    return this.getStorage(-1)?.cursorDiskKVGetPrefixBinary(t) ?? [];
  }
  cursorDiskKVOnShouldSave(t) {
    return this.onDiskShouldSaveCallbacks.push(t), { dispose: () => {
      this.onDiskShouldSaveCallbacks = this.onDiskShouldSaveCallbacks.filter((i) => i !== t);
    } };
  }
  async flushStorage(t) {
    await this.getStorage(t)?.flush(0);
  }
  async flush(t = 0) {
    this._onWillSaveState.fire({ reason: t });
    const i = this.getStorage(-1), r = this.getStorage(0), s = this.getStorage(1);
    switch (t) {
      case 0:
        for (const n of this.onDiskShouldSaveCallbacks) try {
          n(t).catch(console.error);
        } catch {
        }
        await ht.settled([i?.whenFlushed() ?? Promise.resolve(), r?.whenFlushed() ?? Promise.resolve(), s?.whenFlushed() ?? Promise.resolve()]);
        break;
      case 1:
        for (const n of this.onDiskShouldSaveCallbacks) try {
          await n(t);
        } catch (o) {
          console.error(o);
        }
        await ht.settled([i?.flush(0) ?? Promise.resolve(), r?.flush(0) ?? Promise.resolve(), s?.flush(0) ?? Promise.resolve()]);
        break;
    }
  }
  async log() {
    const t = this.getStorage(-1)?.items ?? /* @__PURE__ */ new Map(), i = this.getStorage(0)?.items ?? /* @__PURE__ */ new Map(), r = this.getStorage(1)?.items ?? /* @__PURE__ */ new Map();
    return gv(t, i, r, this.getLogDetails(-1) ?? "", this.getLogDetails(0) ?? "", this.getLogDetails(1) ?? "");
  }
  async optimize(t, i) {
    return await this.flush(), this.getStorage(t)?.optimize(i);
  }
  async getStorageStats(t) {
    return this.getStorage(t)?.getStorageStats();
  }
  async getStorageSizeBreakdown(t, i) {
    return this.getStorage(t)?.getStorageSizeBreakdown(i);
  }
  async cancelStorageSizeBreakdown(t) {
    await this.getStorage(t)?.cancelStorageSizeBreakdown();
  }
  async switch(t, i) {
    return this.emitWillSaveState(0), uv(t) ? this.switchToProfile(t, i) : this.switchToWorkspace(t, i);
  }
  canSwitchProfile(t, i) {
    return !(t.id === i.id || kh(i) && kh(t));
  }
  switchData(t, i, r) {
    this.withPausedEmitters(() => {
      const s = /* @__PURE__ */ new Set();
      for (const [n, o] of t) s.add(n), i.get(n) !== o && this.emitDidChangeValue(r, { key: n, external: true });
      for (const [n] of i.items) s.has(n) || this.emitDidChangeValue(r, { key: n, external: true });
    });
  }
};
pv.DEFAULT_FLUSH_INTERVAL = 60 * 1e3;
function kh(e) {
  return e.isDefault || !!e.useDefaultFlags?.globalState;
}
async function gv(e, t, i, r, s, n) {
  const o = (y) => {
    try {
      return JSON.parse(y);
    } catch {
      return y;
    }
  }, a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  e.forEach((y, E) => {
    a.set(E, y), l.set(E, o(y));
  });
  const c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
  t.forEach((y, E) => {
    c.set(E, y), h.set(E, o(y));
  });
  const f = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
  i.forEach((y, E) => {
    f.set(E, y), d.set(E, o(y));
  }), console.group(r !== s ? `Storage: Application (path: ${r})` : `Storage: Application & Profile (path: ${r}, default profile)`);
  const p = [];
  if (a.forEach((y, E) => {
    p.push({ key: E, value: y });
  }), console.table(p), console.groupEnd(), console.log(l), r !== s) {
    console.group(`Storage: Profile (path: ${s}, profile specific)`);
    const y = [];
    c.forEach((E, _) => {
      y.push({ key: _, value: E });
    }), console.table(y), console.groupEnd(), console.log(h);
  }
  console.group(`Storage: Workspace (path: ${n})`);
  const v = [];
  f.forEach((y, E) => {
    v.push({ key: E, value: y });
  }), console.table(v), console.groupEnd(), console.log(d);
}
b();
var is = ue("IExtensionGalleryManifestService");
function Vi(e, t) {
  const [i, r] = t.split("/");
  for (const s of e.resources) {
    const [n, o] = s.type.split("/");
    if (n === i) {
      if (!r || o === r) return s.id;
      break;
    }
  }
}
var wa = zt ? "web" : ch(Os, Sc), mv = "https://marketplace.cursorapi.com/", vv = "https://localhost:8000/", Dh = "2025.6.1", _a = "ms-python.python", yv = ["https://open-vsx.org", "https://marketplace.cursorapi.com"];
function wv(e) {
  return yv.some((t) => e.startsWith(t));
}
var _v = ["39a52826-2472-403d-8410-37905302f26a", "94d8b289-9db0-4c3c-b4f3-a3294c789678", "d7f9f831-2239-4783-9d06-18d27f285818", "033f8d91-0c9e-44cd-a3d2-b35fc4fd12da", "73a45d83-83c7-4b22-bebf-c9130b0ab3f3", "5dfd8b1d-4334-491c-87dc-399d73599a8a", "1b129845-b202-4b23-8fe1-724f80b0bdc6"], Ev = "1b129845-b202-4b23-8fe1-724f80b0", rs = "X-Market-Search-Activity-Id", Je = { Icon: "Microsoft.VisualStudio.Services.Icons.Default", Details: "Microsoft.VisualStudio.Services.Content.Details", Changelog: "Microsoft.VisualStudio.Services.Content.Changelog", Manifest: "Microsoft.VisualStudio.Code.Manifest", VSIX: "Microsoft.VisualStudio.Services.VSIXPackage", License: "Microsoft.VisualStudio.Services.Content.License", Repository: "Microsoft.VisualStudio.Services.Links.Source", Signature: "Microsoft.VisualStudio.Services.VsixSignature" }, Wt = { Dependency: "Microsoft.VisualStudio.Code.ExtensionDependencies", ExtensionPack: "Microsoft.VisualStudio.Code.ExtensionPack", Engine: "Microsoft.VisualStudio.Code.Engine", PreRelease: "Microsoft.VisualStudio.Code.PreRelease", EnabledApiProposals: "Microsoft.VisualStudio.Code.EnabledApiProposals", LocalizedLanguages: "Microsoft.VisualStudio.Code.LocalizedLanguages", WebExtension: "Microsoft.VisualStudio.Code.WebExtension", SponsorLink: "Microsoft.VisualStudio.Code.SponsorLink", SupportLink: "Microsoft.VisualStudio.Services.Links.Support", ExecutesCode: "Microsoft.VisualStudio.Code.ExecutesCode", Private: "PrivateMarketplace" }, Sv = 10, bv = 50, Lh = 5, xv = { pageNumber: 1, pageSize: Sv, sortBy: "NoneOrRelevance", sortOrder: 0, flags: [], criteria: [], assetTypes: [] };
function Iv(e, t, i = Date.now()) {
  if (!isFinite(t) || t <= 0 || e === void 0 || !isFinite(e) || isNaN(e)) return true;
  const r = i - e;
  if (r < 0) return true;
  const s = Math.floor(t) * 60 * 60 * 1e3;
  return r >= s;
}
var ss = class Si {
  constructor(t = xv) {
    this.state = t;
  }
  get pageNumber() {
    return this.state.pageNumber;
  }
  get pageSize() {
    return this.state.pageSize;
  }
  get sortBy() {
    return this.state.sortBy;
  }
  get sortOrder() {
    return this.state.sortOrder;
  }
  get flags() {
    return this.state.flags;
  }
  get criteria() {
    return this.state.criteria;
  }
  get assetTypes() {
    return this.state.assetTypes;
  }
  get source() {
    return this.state.source;
  }
  get searchText() {
    const t = this.state.criteria.filter((i) => i.filterType === "SearchText")[0];
    return t && t.value ? t.value : "";
  }
  withPage(t, i = this.state.pageSize) {
    return new Si({ ...this.state, pageNumber: t, pageSize: i });
  }
  withFilter(t, ...i) {
    const r = [...this.state.criteria, ...i.length ? i.map((s) => ({ filterType: t, value: s })) : [{ filterType: t }]];
    return new Si({ ...this.state, criteria: r });
  }
  withSortBy(t) {
    return new Si({ ...this.state, sortBy: t });
  }
  withSortOrder(t) {
    return new Si({ ...this.state, sortOrder: t });
  }
  withFlags(...t) {
    return new Si({ ...this.state, flags: $t(t) });
  }
  withAssetTypes(...t) {
    return new Si({ ...this.state, assetTypes: t });
  }
  withSource(t) {
    return new Si({ ...this.state, source: t });
  }
};
function Ea(e, t) {
  const i = (e || []).filter((r) => r.statisticName === t)[0];
  return i ? i.value : 0;
}
function Pv(e) {
  const t = "Microsoft.VisualStudio.Code.Translation.";
  return e.files.filter((r) => r.assetType.indexOf(t) === 0).reduce((r, s) => {
    const n = ri(e, s.assetType);
    return n && r.push([s.assetType.substring(t.length), n]), r;
  }, []);
}
function Rv(e) {
  if (e.properties) {
    const t = e.properties.filter((s) => s.key === Je.Repository), i = new RegExp("((git|ssh|http(s)?)|(git@[\\w.]+))(:(//)?)([\\w.@:/\\-~]+)(.git)(/)?"), r = t.filter((s) => i.test(s.value))[0];
    return r ? { uri: r.value, fallbackUri: r.value } : null;
  }
  return ri(e, Je.Repository);
}
function Av(e) {
  return { uri: `${e.fallbackAssetUri}/${Je.VSIX}?redirect=true${e.targetPlatform ? `&targetPlatform=${e.targetPlatform}` : ""}`, fallbackUri: `${e.fallbackAssetUri}/${Je.VSIX}${e.targetPlatform ? `?targetPlatform=${e.targetPlatform}` : ""}` };
}
function ri(e, t) {
  return e.files.filter((r) => r.assetType === t)[0] ? { uri: `${e.assetUri}/${t}${e.targetPlatform ? `?targetPlatform=${e.targetPlatform}` : ""}`, fallbackUri: `${e.fallbackAssetUri}/${t}${e.targetPlatform ? `?targetPlatform=${e.targetPlatform}` : ""}` } : null;
}
function Th(e, t) {
  const i = e.properties ? e.properties.filter((s) => s.key === t) : [], r = i.length > 0 && i[0].value;
  return r ? r.split(",").map((s) => mn(s)) : [];
}
function kv(e) {
  return Th(e, Wt.Dependency);
}
function Sa(e) {
  const t = e.properties ? e.properties.filter((i) => i.key === Wt.Engine) : [];
  return t.length > 0 && t[0].value || "";
}
function ns(e) {
  const t = e.properties ? e.properties.filter((i) => i.key === Wt.PreRelease) : [];
  return t.length > 0 && t[0].value === "true";
}
function Dv(e) {
  const t = e.properties ? e.properties.filter((i) => i.key === Wt.Private) : [];
  return t.length > 0 && t[0].value === "true";
}
function Lv(e) {
  const t = e.properties ? e.properties.filter((i) => i.key === Wt.ExecutesCode) : [];
  return t.length > 0 ? t[0].value === "true" : void 0;
}
function ba(e) {
  const t = e.properties ? e.properties.filter((r) => r.key === Wt.EnabledApiProposals) : [], i = t.length > 0 && t[0].value || "";
  return i ? i.split(",") : [];
}
function Tv(e) {
  const t = e.properties ? e.properties.filter((r) => r.key === Wt.LocalizedLanguages) : [], i = t.length > 0 && t[0].value || "";
  return i ? i.split(",") : [];
}
function Cv(e) {
  return e.properties?.find((t) => t.key === Wt.SponsorLink)?.value;
}
function Ov(e) {
  return e.properties?.find((t) => t.key === Wt.SupportLink)?.value;
}
function Uv(e) {
  return e.indexOf("preview") !== -1;
}
function En(e) {
  return e.targetPlatform ? om(e.targetPlatform) : "undefined";
}
function os(e) {
  const t = $t(e.versions.map(En)), i = !!e.tags?.includes(im), r = t.indexOf("web");
  return i ? r === -1 && t.push("web") : r !== -1 && t.splice(r, 1), t;
}
function Ch(e, t) {
  let i = 0;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (s.version !== e[r - 1]?.version) i = r;
    else if (En(s) === t) {
      for (let n = r; n > i; n--) e[n] = e[n - 1];
      e[i] = s;
    }
  }
  return e;
}
function Oh(e, t, i) {
  e.telemetryData = { index: t, querySource: i, queryActivityId: e.queryContext?.[rs] };
}
function Sn(e, t, i, r, s) {
  const n = e.versions[0], o = { manifest: ri(t, Je.Manifest), readme: ri(t, Je.Details), changelog: ri(t, Je.Changelog), license: ri(t, Je.License), repository: Rv(t), download: Av(t), icon: ri(t, Je.Icon), signature: ri(t, Je.Signature), coreTranslations: Pv(t) }, a = Vi(r, "ExtensionDetailsViewUriTemplate"), l = Vi(r, "PublisherViewUriTemplate"), c = Vi(r, "ExtensionRatingViewUriTemplate");
  return { type: "gallery", identifier: { id: wt(e.publisher.publisherName, e.extensionName), uuid: e.extensionId }, name: e.extensionName, version: t.version, displayName: e.displayName, publisherId: e.publisher.publisherId, publisher: e.publisher.publisherName, publisherDisplayName: e.publisher.displayName, publisherDomain: e.publisher.domain ? { link: e.publisher.domain, verified: !!e.publisher.isDomainVerified } : void 0, publisherSponsorLink: Cv(n), description: e.shortDescription ?? "", installCount: Ea(e.statistics, "install"), rating: Ea(e.statistics, "averagerating"), ratingCount: Ea(e.statistics, "ratingcount"), categories: e.categories || [], tags: e.tags || [], releaseDate: Date.parse(e.releaseDate), lastUpdated: Date.parse(e.lastUpdated), allTargetPlatforms: i, assets: o, properties: { dependencies: kv(t), extensionPack: Th(t, Wt.ExtensionPack), engine: Sa(t), enabledApiProposals: ba(t), localizedLanguages: Tv(t), targetPlatform: En(t), isPreReleaseVersion: ns(t), executesCode: Lv(t) }, hasPreReleaseVersion: ns(n), hasReleaseVersion: true, private: Dv(n), preview: Uv(e.flags), isSigned: !!o.signature, queryContext: s, supportLink: Ov(n), detailsLink: a ? Zi(a, { publisher: e.publisher.publisherName, name: e.extensionName }) : void 0, publisherLink: l ? Zi(l, { publisher: e.publisher.publisherName }) : void 0, ratingLink: c ? Zi(c, { publisher: e.publisher.publisherName, name: e.extensionName }) : void 0 };
}
var bn = class {
  constructor(e, t, i, r, s, n, o, a, l, c, h) {
    this.assignmentService = t, this.requestService = i, this.logService = r, this.environmentService = s, this.telemetryService = n, this.fileService = o, this.productService = a, this.configurationService = l, this.allowedExtensionsService = c, this.extensionGalleryManifestService = h, this.bearerTokenProvider = () => Promise.resolve(void 0), this.isPylanceInstalled = true, this.extensionsControlUrl = a.extensionsGallery?.controlUrl, this.unpkgResourceApi = a.extensionsGallery?.extensionUrlTemplate, this.extensionsEnabledWithApiProposalVersion = a.extensionsEnabledWithApiProposalVersion?.map((f) => f.toLowerCase()) ?? [], this.commonHeadersPromise = $m(a, this.environmentService, this.configurationService, this.fileService, e, this.telemetryService), this.minMaxVersionExtensionIds = (a.extensionMaxVersions ? Object.keys(a.extensionMaxVersions) : []).map((f) => f.toLowerCase());
  }
  setIsPylanceInstalled(e) {
    this.isPylanceInstalled = e;
  }
  hasMinMaxExtensionVersion(e) {
    const t = this.productService.extensionMaxVersions;
    return e.toLowerCase() === _a ? true : t ? t[e.toLowerCase()] !== void 0 : false;
  }
  getMaxExtensionVersion(e) {
    const t = this.productService.extensionMaxVersions;
    if (e.toLowerCase() === _a && this.isPylanceInstalled) return Dh;
    if (t) return t?.[e.toLowerCase()]?.maxVersion;
  }
  getInstallCooldownHours() {
    const e = this.configurationService.getValue(um);
    return typeof e == "number" && isFinite(e) && e > 0 ? Math.floor(e) : 0;
  }
  hasPassedInstallCooldown(e) {
    return Iv(e, this.getInstallCooldownHours());
  }
  minMaxExtensionVersionFilter(e) {
    const t = this.productService.extensionMaxVersions;
    if (!t) return true;
    const i = wt(e.publisher, e.name).toLowerCase();
    if (i === _a && this.isPylanceInstalled) return Sh(e.version, Dh);
    for (const r of this.minMaxVersionExtensionIds) if (r === i) {
      const s = t[r].maxVersion, n = s === void 0 ? true : Sh(e.version, s), o = t[r].minVersion, a = o === void 0 ? true : qm(e.version, o);
      return n && a;
    }
    return true;
  }
  registerBearerTokenProvider(e) {
    this.bearerTokenProvider = e;
  }
  isEnabled() {
    return this.extensionGalleryManifestService.isEnabled();
  }
  async getExtensions(e, t, i) {
    const r = await this.extensionGalleryManifestService.getExtensionGalleryManifest();
    if (!r) throw new Error("No extension gallery service configured.");
    const s = ve.isCancellationToken(t) ? {} : t, n = ve.isCancellationToken(t) ? t : i, o = s.preferResourceApi && (this.configurationService.getValue(lm) ?? false) ? await this.getResourceApi(r) : void 0, a = o ? await this.getExtensionsUsingResourceApi(e, s, o, r, n) : await this.getExtensionsUsingQueryApi(e, s, r, n), l = a.map((h) => h.identifier.uuid), c = [];
    for (const h of e) h.uuid && !l.includes(h.uuid) && c.push({ ...h, uuid: void 0 });
    if (c.length) {
      const h = await this.getExtensionsUsingQueryApi(c, s, r, n);
      a.push(...h);
    }
    return a;
  }
  async getResourceApi(e) {
    const t = Vi(e, "ExtensionLatestVersionUriTemplate");
    if (!t) return;
    if (this.productService.quality !== "stable") return { uri: t, fallback: this.unpkgResourceApi };
    const i = await this.assignmentService?.getTreatment("extensions.gallery.useResourceApi") ?? "unpkg";
    if (i === "marketplace") return { uri: t, fallback: this.unpkgResourceApi };
    if (i === "unpkg" && this.unpkgResourceApi) return { uri: this.unpkgResourceApi };
  }
  async getExtensionsUsingQueryApi(e, t, i, r) {
    const s = e.every((a) => !!a.hasPreRelease && !a.preRelease), n = [], o = this.getExtensionQueryBatchSize(e.length);
    for (let a = 0; a < e.length; a += o) {
      const l = await this.doGetExtensionsUsingQueryApi(e.slice(a, a + o), t, i, s, r);
      n.push(...l);
    }
    return t.source && n.forEach((a, l) => Oh(a, l, t.source)), n;
  }
  getExtensionQueryBatchSize(e, t = bv) {
    return this.shouldChunkExtensionQueries() ? t : e;
  }
  async doGetExtensionsUsingQueryApi(e, t, i, r, s) {
    const n = [], o = [], a = [], l = [];
    for (const f of e) f.uuid ? o.push(f.uuid) : n.push(f.id), f.version ? l.push({ id: f.id, uuid: f.uuid, version: f.version }) : a.push({ id: f.id, uuid: f.uuid, includePreRelease: !!f.preRelease });
    if (!o.length && !n.length) return [];
    let c = new ss().withPage(1, e.length);
    o.length && (c = c.withFilter("ExtensionId", ...o)), n.length && (c = c.withFilter("ExtensionName", ...n)), t.queryAllVersions && (c = c.withFlags(...c.flags, "IncludeVersions")), t.source && (c = c.withSource(t.source));
    const { extensions: h } = await this.queryGalleryExtensions(c, { targetPlatform: t.targetPlatform ?? wa, includePreRelease: a, versions: l, compatible: !!t.compatible, productVersion: t.productVersion ?? { version: this.productService.version, date: this.productService.date, vscodeVersion: this.productService.vscodeVersion }, isQueryForReleaseVersionFromPreReleaseVersion: r }, i, s);
    return h;
  }
  async getExtensionsUsingResourceApi(e, t, i, r, s) {
    const n = [], o = [], a = [];
    for (const l of e) na.test(l.id) && (l.version ? o.push(l) : a.push(l));
    if (await Promise.allSettled(a.map(async (l) => {
      let c;
      try {
        try {
          c = await this.getLatestGalleryExtension(l, t, i.uri, r, s);
        } catch (h) {
          if (!i.fallback) throw h;
          this.logService.error(`Error while getting the latest version for the extension ${l.id} from ${i.uri}. Trying the fallback ${i.fallback}`, q(h)), c = await this.getLatestGalleryExtension(l, t, i.fallback, r, s);
        }
        if (c === "NOT_FOUND") {
          l.uuid && o.push(l);
          return;
        }
        c && n.push(c);
      } catch (h) {
        this.logService.error(`Error while getting the latest version for the extension ${l.id}.`, q(h)), o.push(l);
      }
    })), o.length) {
      const l = await this.getExtensionsUsingQueryApi(o, t, r, s);
      n.push(...l);
    }
    return n;
  }
  async getLatestGalleryExtension(e, t, i, r, s) {
    const [n, o] = e.id.split("."), a = k.parse(Zi(i, { publisher: n, name: o })), l = await this.getLatestRawGalleryExtension(e.id, a, s);
    if (!l) return "NOT_FOUND";
    const c = os(l), h = await this.getRawGalleryExtensionVersion(l, { targetPlatform: t.targetPlatform ?? wa, compatible: !!t.compatible, productVersion: t.productVersion ?? { version: this.productService.version, date: this.productService.date, vscodeVersion: this.productService.vscodeVersion }, version: e.preRelease ? 1 : 0 }, c);
    return h ? Sn(l, h, c, r) : null;
  }
  async getCompatibleExtension(e, t, i, r = { version: this.productService.version, date: this.productService.date, vscodeVersion: this.productService.vscodeVersion }) {
    return gr(e.allTargetPlatforms, i) ? null : await this.isExtensionCompatible(e, t, i) ? e : this.allowedExtensionsService.isAllowed({ id: e.identifier.id, publisherDisplayName: e.publisherDisplayName }) !== true ? null : (await this.getExtensions([{ ...e.identifier, preRelease: t, hasPreRelease: e.hasPreReleaseVersion }], { compatible: true, productVersion: r, queryAllVersions: true, targetPlatform: i }, ve.None))[0] ?? null;
  }
  async isExtensionCompatible(e, t, i, r = { version: this.productService.version, date: this.productService.date, vscodeVersion: this.productService.vscodeVersion }) {
    if (!this.minMaxExtensionVersionFilter(e) || this.allowedExtensionsService.isAllowed(e) !== true || !this.hasPassedInstallCooldown(e.lastUpdated) || !oa(e.properties.targetPlatform, e.allTargetPlatforms, i) || !t && e.properties.isPreReleaseVersion) return false;
    let s = e.properties.engine;
    if (!s) {
      const n = await this.getManifest(e, ve.None);
      if (!n) throw new Error("Manifest was not found");
      s = n.engines.vscode;
    }
    return dn.includes(e.identifier.id.toLowerCase()) ? true : !(!es(s, r.vscodeVersion, r.date) || !this.areApiProposalsCompatible(e.identifier, e.properties.enabledApiProposals));
  }
  areApiProposalsCompatible(e, t) {
    return !t || !this.extensionsEnabledWithApiProposalVersion.includes(e.id.toLowerCase()) ? true : ga(t);
  }
  async isValidVersion(e, t, { targetPlatform: i, compatible: r, productVersion: s, version: n }, o, a) {
    if (Te(n)) {
      if (t.version !== n) return false;
    } else if ((n === 0 || n === 1) && ns(t) !== (n === 1)) return false;
    if (!this.hasPassedInstallCooldown(Date.parse(t.lastUpdated))) return false;
    const l = En(t);
    if (!oa(l, a, i)) return false;
    if (r) {
      if (this.allowedExtensionsService.isAllowed({ id: e, publisherDisplayName: o, version: t.version, prerelease: ns(t), targetPlatform: l }) !== true) return false;
      try {
        const c = await this.getEngine(e, t);
        if (!es(c, s.vscodeVersion, s.date)) return false;
      } catch (c) {
        return this.logService.error(`Error while getting the engine for the version ${t.version}.`, q(c)), false;
      }
    }
    return true;
  }
  async query(e, t) {
    const i = await this.extensionGalleryManifestService.getExtensionGalleryManifest();
    if (!i) throw new Error("No extension gallery service configured.");
    let r = e.text || "";
    const s = e.pageSize ?? 50;
    let n = new ss().withPage(1, s);
    r ? (r = r.replace(/\bcategory:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g, (h, f, d) => (n = n.withFilter("Category", d || f), "")), r = r.replace(/\btag:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g, (h, f, d) => (n = n.withFilter("Tag", d || f), "")), r = r.replace(/\bfeatured(\s+|\b|$)/g, () => (n = n.withFilter("Featured"), "")), r = r.trim(), r && (r = r.length < 200 ? r : r.substring(0, 200), n = n.withFilter("SearchText", r)), i.capabilities.extensionQuery.sorting?.some((h) => h.name === "NoneOrRelevance") && (n = n.withSortBy("NoneOrRelevance"))) : i.capabilities.extensionQuery.sorting?.some((h) => h.name === "InstallCount") && (n = n.withSortBy("InstallCount")), e.sortBy && i.capabilities.extensionQuery.sorting?.some((h) => h.name === e.sortBy) && (n = n.withSortBy(e.sortBy)), typeof e.sortOrder == "number" && (n = n.withSortOrder(e.sortOrder)), e.source && (n = n.withSource(e.source));
    const o = async (h, f) => {
      const { extensions: d, total: p } = await this.queryGalleryExtensions(h, { targetPlatform: wa, compatible: false, includePreRelease: !!e.includePreRelease, productVersion: e.productVersion ?? { version: this.productService.version, date: this.productService.date, vscodeVersion: this.productService.vscodeVersion } }, i, f);
      return d.forEach((v, y) => Oh(v, (h.pageNumber - 1) * h.pageSize + y, e.source)), { extensions: d, total: p };
    }, { extensions: a, total: l } = await o(n, t), c = async (h, f) => {
      if (f.isCancellationRequested) throw new Le();
      const { extensions: d } = await o(n.withPage(h + 1), f);
      return d;
    };
    return { firstPage: a, total: l, pageSize: n.pageSize, getPage: c };
  }
  async shouldUseLatestPrereleaseAndStableVersionQuery() {
    return false;
  }
  shouldChunkExtensionQueries() {
    return false;
  }
  async queryGalleryExtensions(e, t, i, r) {
    return await this.shouldUseLatestPrereleaseAndStableVersionQuery() ? this.queryGalleryExtensionsUsingIncludeLatestPrereleaseAndStableVersionFlag(e, t, i, r) : this.queryGalleryExtensionsWithAllVersionsAsFallback(e, t, i, r);
  }
  async queryGalleryExtensionsWithAllVersionsAsFallback(e, t, i, r) {
    const s = e.flags;
    e.flags.includes("IncludeLatestVersionOnly") && e.flags.includes("IncludeVersions") && (e = e.withFlags(...e.flags.filter((f) => f !== "IncludeVersions"))), !e.flags.includes("IncludeLatestVersionOnly") && !e.flags.includes("IncludeVersions") && (e = e.withFlags(...e.flags, "IncludeLatestVersionOnly")), (t.versions?.length || t.isQueryForReleaseVersionFromPreReleaseVersion) && (e = e.withFlags(...e.flags.filter((f) => f !== "IncludeLatestVersionOnly"), "IncludeVersions")), e = e.withFlags(...e.flags, "IncludeAssetUri", "IncludeCategoryAndTags", "IncludeFiles", "IncludeStatistics", "IncludeVersionProperties");
    const { galleryExtensions: n, total: o, context: a } = await this.queryRawGalleryExtensions(e, i, r);
    if (!e.flags.includes("IncludeLatestVersionOnly")) {
      const f = [];
      for (const d of n) {
        const p = os(d), v = { id: wt(d.publisher.publisherName, d.extensionName), uuid: d.extensionId }, y = It(t.includePreRelease) ? t.includePreRelease : !!t.includePreRelease.find((_) => Y(_, v))?.includePreRelease, E = await this.getRawGalleryExtensionVersion(d, { compatible: t.compatible, targetPlatform: t.targetPlatform, productVersion: t.productVersion, version: t.versions?.find((_) => Y(_, v))?.version ?? (y ? 2 : 0) }, p);
        E && f.push(Sn(d, E, p, i, a));
      }
      return { extensions: f, total: o };
    }
    const c = [], h = /* @__PURE__ */ new Map();
    for (let f = 0; f < n.length; f++) {
      const d = n[f], p = { id: wt(d.publisher.publisherName, d.extensionName), uuid: d.extensionId }, v = It(t.includePreRelease) ? t.includePreRelease : !!t.includePreRelease.find((I) => Y(I, p))?.includePreRelease, y = os(d);
      if (t.compatible && (gr(y, t.targetPlatform) || this.allowedExtensionsService.isAllowed({ id: p.id, publisherDisplayName: d.publisher.displayName }) !== true)) continue;
      const E = await this.getRawGalleryExtensionVersion(d, { compatible: t.compatible, targetPlatform: t.targetPlatform, productVersion: t.productVersion, version: t.versions?.find((I) => Y(I, p))?.version ?? (v ? 2 : 0) }, y), _ = E ? Sn(d, E, y, i, a) : null;
      !_ || _.properties.isPreReleaseVersion && (!v || !_.hasReleaseVersion) || !_.properties.isPreReleaseVersion && _.properties.targetPlatform !== t.targetPlatform && _.hasPreReleaseVersion ? h.set(d.extensionId, f) : c.push([f, _]);
    }
    if (h.size) {
      const f = [...h.keys()], d = this.getExtensionQueryBatchSize(f.length, Lh);
      for (let p = 0; p < f.length; p += d) {
        const v = f.slice(p, p + d), y = new ss().withFlags(...s.filter((_) => _ !== "IncludeLatestVersionOnly"), "IncludeVersions").withPage(1, v.length).withFilter("ExtensionId", ...v), { extensions: E } = await this.queryGalleryExtensions(y, t, i, r);
        for (const _ of E) {
          const I = h.get(_.identifier.uuid);
          c.push([I, _]);
        }
      }
    }
    return { extensions: c.sort((f, d) => f[0] - d[0]).map(([, f]) => f), total: o };
  }
  async queryGalleryExtensionsUsingIncludeLatestPrereleaseAndStableVersionFlag(e, t, i, r) {
    t.versions?.length ? e = e.withFlags(...e.flags.filter((c) => c !== "IncludeLatestVersionOnly" && c !== "IncludeLatestPrereleaseAndStableVersionOnly"), "IncludeVersions") : e.flags.includes("IncludeVersions") || (e = (It(t.includePreRelease) ? t.includePreRelease : t.includePreRelease.every(({ includePreRelease: h }) => h)) ? e.withFlags(...e.flags.filter((h) => h !== "IncludeLatestPrereleaseAndStableVersionOnly"), "IncludeLatestVersionOnly") : e.withFlags(...e.flags.filter((h) => h !== "IncludeLatestVersionOnly"), "IncludeLatestPrereleaseAndStableVersionOnly")), e.flags.includes("IncludeVersions") && (e.flags.includes("IncludeLatestVersionOnly") || e.flags.includes("IncludeLatestPrereleaseAndStableVersionOnly")) && (e = e.withFlags(...e.flags.filter((c) => c !== "IncludeLatestVersionOnly" && c !== "IncludeLatestPrereleaseAndStableVersionOnly"), "IncludeVersions")), e = e.withFlags(...e.flags, "IncludeAssetUri", "IncludeCategoryAndTags", "IncludeFiles", "IncludeStatistics", "IncludeVersionProperties");
    const { galleryExtensions: s, total: n, context: o } = await this.queryRawGalleryExtensions(e, i, r), a = [], l = /* @__PURE__ */ new Map();
    for (let c = 0; c < s.length; c++) {
      const h = s[c], f = { id: wt(h.publisher.publisherName, h.extensionName), uuid: h.extensionId }, d = It(t.includePreRelease) ? t.includePreRelease : !!t.includePreRelease.find((E) => Y(E, f))?.includePreRelease, p = os(h);
      if (t.compatible && (gr(p, t.targetPlatform) || this.allowedExtensionsService.isAllowed({ id: f.id, publisherDisplayName: h.publisher.displayName }) !== true)) continue;
      const v = await this.getRawGalleryExtensionVersion(h, { compatible: t.compatible, targetPlatform: t.targetPlatform, productVersion: t.productVersion, version: t.versions?.find((E) => Y(E, f))?.version ?? (d ? 2 : 0) }, p), y = v ? Sn(h, v, p, i, o) : null;
      !y || y.properties.isPreReleaseVersion && (!d || !y.hasReleaseVersion) || !y.properties.isPreReleaseVersion && y.properties.targetPlatform !== t.targetPlatform && y.hasPreReleaseVersion ? l.set(h.extensionId, c) : a.push([c, y]);
    }
    if (l.size) {
      const c = [...l.keys()], h = this.getExtensionQueryBatchSize(c.length, Lh);
      for (let f = 0; f < c.length; f += h) {
        const d = c.slice(f, f + h), p = new ss().withFlags(...e.flags.filter((y) => y !== "IncludeLatestVersionOnly" && y !== "IncludeLatestPrereleaseAndStableVersionOnly"), "IncludeVersions").withPage(1, d.length).withFilter("ExtensionId", ...d), { extensions: v } = await this.queryGalleryExtensionsWithAllVersionsAsFallback(p, t, i, r);
        for (const y of v) {
          const E = l.get(y.identifier.uuid);
          a.push([E, y]);
        }
      }
    }
    return { extensions: a.sort((c, h) => c[0] - h[0]).map(([, c]) => c), total: n };
  }
  async getRawGalleryExtensionVersion(e, t, i) {
    const r = { id: wt(e.publisher.publisherName, e.extensionName), uuid: e.extensionId }, s = Ch(e.versions, t.targetPlatform);
    if (t.compatible && gr(i, t.targetPlatform)) return null;
    const n = Te(t.version) ? t.version : void 0;
    for (let a = 0; a < s.length; a++) {
      const l = s[a];
      if (await this.isValidVersion(r.id, l, t, e.publisher.displayName, i)) {
        if (t.compatible && !this.areApiProposalsCompatible(r, ba(l))) continue;
        return l;
      }
      if (n && l.version === n) return null;
    }
    if (n || t.compatible) return null;
    const o = e.versions[0];
    return o && !this.hasPassedInstallCooldown(Date.parse(o.lastUpdated)) ? null : o;
  }
  isCursorMarketplaceUrlForAuthHeaders(e) {
    return e.startsWith(mv) ? true : this.environmentService.isBuilt ? false : e.startsWith(vv) ? (this.logService.info("isCursorMarketplaceUrlForAuthHeaders: permitting localhost authentication for dev build", e), true) : false;
  }
  async queryRawGalleryExtensions(e, t, i) {
    const r = Vi(t, "ExtensionQueryService");
    if (!r) throw new Error("No extension gallery query service configured.");
    e = e.withFlags(...e.flags, "ExcludeNonValidated").withFilter("Target", "Microsoft.VisualStudio.Code");
    const s = t.capabilities.extensionQuery.flags?.find((f) => f.name === "Unpublished");
    s && (e = e.withFilter("ExcludeWithFlags", String(s.value)));
    const n = { filters: [{ criteria: e.criteria.reduce((f, d) => {
      const p = t.capabilities.extensionQuery.filtering?.find((v) => v.name === d.filterType);
      return p && f.push({ filterType: p.value, value: d.value }), f;
    }, []), pageNumber: e.pageNumber, pageSize: e.pageSize, sortBy: t.capabilities.extensionQuery.sorting?.find((f) => f.name === e.sortBy)?.value, sortOrder: e.sortOrder }], assetTypes: e.assetTypes, flags: e.flags.reduce((f, d) => {
      const p = t.capabilities.extensionQuery.flags?.find((v) => v.name === d);
      return p && (f |= p.value), f;
    }, 0) };
    this.isCursorMarketplaceUrlForAuthHeaders(r) || n.filters.forEach((f) => {
      f.criteria = f.criteria.filter((d) => {
        const p = d.value;
        if (!p) return true;
        const v = t.capabilities.extensionQuery.filtering?.find((y) => y.value === d.filterType);
        return !(v?.name === "ExtensionName" && p.toLowerCase().startsWith("anysphere.") || v?.name === "ExtensionId" && (_v.includes(p.toLowerCase()) || p.toLowerCase().startsWith(Ev)));
      });
    });
    const o = JSON.stringify(n), l = { ...await this.commonHeadersPromise, "Content-Type": "application/json", Accept: "application/json;api-version=3.0-preview.1", "Accept-Encoding": "gzip", "Content-Length": String(o.length) };
    if (this.isCursorMarketplaceUrlForAuthHeaders(r)) {
      const f = await this.bearerTokenProvider();
      f && (l.Authorization = `Bearer ${f}`), l["x-cursor-client-version"] = this.productService.version;
    }
    let c, h = 0;
    try {
      if (c = await this.requestService.request({ type: "POST", url: r, data: o, headers: l }, i), c.res.statusCode && c.res.statusCode >= 400 && c.res.statusCode < 500) return { galleryExtensions: [], total: h };
      const f = await fn(c, { source: "http", requestType: e.flags.includes("IncludeLatestVersionOnly") ? "gallery-query-latest" : "gallery-query-all-versions", url: r });
      if (f) {
        const d = f.results[0];
        let p = d.extensions;
        const v = d.resultMetadata && d.resultMetadata.filter((E) => E.metadataType === "ResultCount")[0];
        h = v && v.metadataItems.filter((E) => E.name === "TotalCount")[0].count || 0;
        const y = /* @__PURE__ */ new Map();
        return p.forEach((E, _) => {
          let I = E.versions;
          this.hasMinMaxExtensionVersion(wt(E.publisher.publisherName, E.extensionName)) && I.find((W) => this.minMaxExtensionVersionFilter({ name: E.extensionName, publisher: E.publisher.publisherName, version: W.version })) !== void 0 && (I = I.filter((W) => this.minMaxExtensionVersionFilter({ name: E.extensionName, publisher: E.publisher.publisherName, version: W.version })), I.length > 0 && (p[_] = { ...E, versions: I }));
          const D = I.filter((W) => {
            const R = Sa(W);
            if (R === "") return true;
            let C = y.get(R);
            return C === void 0 && (C = es(R, this.productService.vscodeVersion, this.productService.date), y.set(R, C)), C;
          });
          D.length < I.length && (I = D, I.length > 0 && (p[_] = { ...E, versions: I }));
        }), { galleryExtensions: p, total: h, context: c.res.headers.activityid ? { [rs]: c.res.headers.activityid } : {} };
      }
      return { galleryExtensions: [], total: h };
    } catch (f) {
      if (bi(f)) throw f;
      {
        const d = q(f), p = Z0(f) ? "Offline" : d.startsWith("XHR timeout") ? "Timeout" : "Failed";
        throw new pn(d, p);
      }
    }
  }
  async getLatestRawGalleryExtension(e, t, i) {
    const s = { ...await this.commonHeadersPromise, "Content-Type": "application/json", Accept: "application/json;api-version=7.2-preview", "Accept-Encoding": "gzip" }, n = await this.requestService.request({ type: "GET", url: t.toString(true), headers: s, timeout: this.getRequestTimeout() }, i);
    if (n.res.statusCode === 404) return null;
    if (n.res.statusCode && n.res.statusCode !== 200) throw new Error("Unexpected HTTP response: " + n.res.statusCode);
    return await fn(n);
  }
  async reportStatistic(e, t, i, r) {
    const s = await this.extensionGalleryManifestService.getExtensionGalleryManifest();
    if (!s) return;
    let n;
    if (zt) {
      const c = Vi(s, "WebExtensionStatisticsUriTemplate");
      if (!c) return;
      n = Zi(c, { publisher: e, name: t, version: i, statTypeValue: r === "install" ? "1" : "3" });
    } else {
      const c = Vi(s, "ExtensionStatisticsUriTemplate");
      if (!c) return;
      n = Zi(c, { publisher: e, name: t, version: i, statTypeName: r });
    }
    if (!this.isCursorMarketplaceUrlForAuthHeaders(n)) return;
    const o = zt ? "api-version=6.1-preview.1" : "*/*;api-version=4.0-preview.1", l = { ...await this.commonHeadersPromise, Accept: o };
    try {
      await this.requestService.request({ type: "POST", url: n, headers: l }, ve.None);
    } catch {
    }
  }
  async download(e, t, i) {
    this.logService.trace("ExtensionGalleryService#download", e.identifier.id);
    const r = i === 2 ? "install" : i === 3 ? "update" : "", s = r ? { uri: `${e.assets.download.uri}${k.parse(e.assets.download.uri).query ? "&" : "?"}${r}=true`, fallbackUri: `${e.assets.download.fallbackUri}${k.parse(e.assets.download.fallbackUri).query ? "&" : "?"}${r}=true` } : e.assets.download, n = e.queryContext?.[rs] ? { [rs]: e.queryContext[rs] } : void 0, o = await this.getAsset(e.identifier.id, s, Je.VSIX, e.version, n ? { headers: n } : void 0);
    try {
      await this.fileService.writeFile(t, o.stream);
    } catch (a) {
      try {
        await this.fileService.del(t);
      } catch (l) {
        this.logService.warn(`Error while deleting the file ${t.toString()}`, q(l));
      }
      throw new pn(q(a), "DownloadFailedWriting");
    }
  }
  async downloadSignatureArchive(e, t) {
    if (!e.assets.signature) throw new Error("No signature asset found");
    this.logService.trace("ExtensionGalleryService#downloadSignatureArchive", e.identifier.id);
    const i = await this.getAsset(e.identifier.id, e.assets.signature, Je.Signature, e.version);
    try {
      await this.fileService.writeFile(t, i.stream);
    } catch (r) {
      try {
        await this.fileService.del(t);
      } catch (s) {
        this.logService.warn(`Error while deleting the file ${t.toString()}`, q(s));
      }
      throw new pn(q(r), "DownloadFailedWriting");
    }
  }
  async getReadme(e, t) {
    if (e.assets.readme) {
      const i = await this.getAsset(e.identifier.id, e.assets.readme, Je.Details, e.version, {}, t);
      return await pr(i) || "";
    }
    return "";
  }
  async getManifest(e, t) {
    if (e.assets.manifest) {
      const i = await this.getAsset(e.identifier.id, e.assets.manifest, Je.Manifest, e.version, {}, t), r = await pr(i);
      return r ? JSON.parse(r) : null;
    }
    return null;
  }
  async getManifestFromRawExtensionVersion(e, t, i) {
    const r = ri(t, Je.Manifest);
    if (!r) throw new Error("Manifest was not found");
    const s = { "Accept-Encoding": "gzip" }, n = await this.getAsset(e, r, Je.Manifest, t.version, { headers: s });
    return await fn(n);
  }
  async getCoreTranslation(e, t) {
    const i = e.assets.coreTranslations.filter((r) => r[0] === t.toUpperCase())[0];
    if (i) {
      const r = await this.getAsset(e.identifier.id, i[1], i[0], e.version), s = await pr(r);
      return s ? JSON.parse(s) : null;
    }
    return null;
  }
  async getChangelog(e, t) {
    if (e.assets.changelog) {
      const i = await this.getAsset(e.identifier.id, e.assets.changelog, Je.Changelog, e.version, {}, t);
      return await pr(i) || "";
    }
    return "";
  }
  async getAllCompatibleVersions(e, t, i) {
    const r = await this.extensionGalleryManifestService.getExtensionGalleryManifest();
    if (!r) throw new Error("No extension gallery service configured.");
    let s = new ss().withFlags("IncludeVersions", "IncludeCategoryAndTags", "IncludeFiles", "IncludeVersionProperties").withPage(1, 1);
    e.uuid ? s = s.withFilter("ExtensionId", e.uuid) : s = s.withFilter("ExtensionName", e.id);
    const { galleryExtensions: n } = await this.queryRawGalleryExtensions(s, r, ve.None);
    if (!n.length) return [];
    const o = os(n[0]);
    if (gr(o, i)) return [];
    const a = [], l = { version: this.productService.version, date: this.productService.date, vscodeVersion: this.productService.vscodeVersion };
    await Promise.all(n[0].versions.map(async (f) => {
      try {
        await this.isValidVersion(e.id, f, { compatible: true, productVersion: l, targetPlatform: i, version: t ? 2 : 0 }, n[0].publisher.displayName, o) && this.areApiProposalsCompatible(e, ba(f)) && a.push(f);
      } catch {
      }
    }));
    const c = [], h = /* @__PURE__ */ new Set();
    for (const f of Ch(a, i)) h.has(f.version) || (h.add(f.version), c.push({ version: f.version, date: f.lastUpdated, isPreReleaseVersion: ns(f) }));
    return c;
  }
  async getAsset(e, t, i, r, s = {}, n = ve.None) {
    const o = await this.commonHeadersPromise, a = { type: "GET" }, l = { ...o, ...s.headers || {} };
    s = { ...s, ...a, headers: l };
    const c = t.uri, h = t.fallbackUri, f = { ...s, url: c, timeout: this.getRequestTimeout() };
    let d;
    try {
      if (d = await this.requestService.request(f, n), d.res.statusCode === 200) return d;
      const p = await pr(d);
      throw new Error(`Expected 200, got back ${d.res.statusCode} instead.

${p}`);
    } catch (p) {
      if (bi(p) && n.isCancellationRequested) throw p;
      const v = { ...s, url: h, timeout: this.getRequestTimeout() };
      return this.requestService.request(v, n);
    }
  }
  getRequestTimeout() {
    const e = this.configurationService.getValue(cm);
    return jn(e) && e >= 0 ? e : 6e4;
  }
  async getEngine(e, t) {
    let i = Sa(t);
    if (!i) {
      const r = await this.getManifestFromRawExtensionVersion(e, t, ve.None);
      if (!r) throw new Error("Manifest was not found");
      i = r.engines.vscode;
    }
    return i;
  }
  async getExtensionsControlManifest() {
    if (!this.isEnabled()) throw new Error("No extension gallery service configured.");
    if (!this.extensionsControlUrl) return { malicious: [], deprecated: {}, search: [] };
    let e;
    this.logService.info("Getting extensions control");
    try {
      let o;
      if (e = await Promise.race([this.requestService.request({ type: "GET", url: this.extensionsControlUrl, timeout: 3e3 }, ve.None), new Promise((a, l) => {
        o = setTimeout(() => {
          l(new Error("Timeout getting extensions control"));
        }, 3e3);
      })]).finally(() => {
        clearTimeout(o);
      }), e.res.statusCode !== 200) throw new Error("Could not get extensions report.");
    } catch (o) {
      return this.logService.error("Error getting extensions control manifest", o), { malicious: [], deprecated: {}, search: [] };
    }
    const t = await fn(e), i = [], r = {}, s = [], n = [];
    if (t) {
      for (const o of t.malicious) na.test(o) ? i.push({ id: o }) : i.push(o);
      if (t.migrateToPreRelease) for (const [o, a] of Object.entries(t.migrateToPreRelease)) (!a.engine || es(a.engine, this.productService.vscodeVersion, this.productService.date)) && (r[o.toLowerCase()] = { disallowInstall: true, extension: { id: a.id, displayName: a.displayName, autoMigrate: { storage: !!a.migrateStorage }, preRelease: true } });
      if (t.deprecated) for (const [o, a] of Object.entries(t.deprecated)) a && (r[o.toLowerCase()] = It(a) ? {} : a);
      if (t.search) for (const o of t.search) s.push(o);
      if (Array.isArray(t.extensionsEnabledWithPreRelease)) for (const o of t.extensionsEnabledWithPreRelease) n.push(o.toLowerCase());
    }
    return { malicious: i, deprecated: r, search: s, extensionsEnabledWithPreRelease: n };
  }
};
bn = N([x(2, Zr), x(3, pe), x(4, ti), x(5, ii), x(6, ke), x(7, ot), x(8, Jt), x(9, Mi), x(10, is)], bn);
var Uh = class extends bn {
  constructor(e, t, i, r, s, n, o, a, l, c) {
    super(e, void 0, t, i, r, s, n, o, a, l, c);
  }
};
Uh = N([x(0, fv), x(1, Zr), x(2, pe), x(3, ti), x(4, ii), x(5, ke), x(6, ot), x(7, Jt), x(8, Mi), x(9, is)], Uh);
var xa = class extends bn {
  constructor(e, t, i, r, s, n, o, a, l) {
    super(void 0, void 0, e, t, i, r, s, n, o, a, l);
  }
};
xa = N([x(0, Zr), x(1, pe), x(2, ti), x(3, ii), x(4, ke), x(5, ot), x(6, Jt), x(7, Mi), x(8, is)], xa), b();
var Nh = ue("IExtensionSignatureVerificationService"), as = class {
  constructor(e, t) {
    this.logService = e, this.productService = t, this.configureRegistryUrl();
  }
  configureRegistryUrl() {
    if (process.env.OVSX_REGISTRY_URL) return;
    const e = this.productService.extensionsGallery?.serviceUrl;
    if (e) try {
      const t = new URL(e), i = t.host, r = as.SIGNING_REGISTRY_MAP[i];
      if (r) process.env.OVSX_REGISTRY_URL = r;
      else {
        const s = `${t.protocol}//${t.host}`;
        process.env.OVSX_REGISTRY_URL = s;
      }
    } catch (t) {
      this.logService.warn(`Failed to parse gallery URL ${e}: ${q(t)}`);
    }
  }
  getSignModule() {
    return this.moduleLoadingPromise || (this.moduleLoadingPromise = this.resolveSignModule()), this.moduleLoadingPromise;
  }
  async resolveSignModule() {
    return import("node-ovsx-sign");
  }
  mapErrorCode(e) {
    if (!e) return ge.UnknownError;
    switch (e) {
      case "PackageIsInvalidZip":
        return ge.PackageIsInvalidZip;
      case "SignatureArchiveIsInvalidZip":
        return ge.SignatureArchiveIsInvalidZip;
      case "SignatureIsMissing":
        return ge.SignatureIsMissing;
      case "SignatureManifestIsMissing":
        return ge.SignatureManifestIsMissing;
      case "SignatureManifestIsInvalid":
        return ge.SignatureManifestIsInvalid;
      case "ExtensionManifestIsInvalid":
        return ge.PackageIsUnreadable;
      case "SignatureIsInvalid":
      case "SignatureIsNotValid":
        return ge.SignatureIsInvalid;
      default:
        return Object.values(ge).includes(e) ? e : (this.logService.warn(`Unknown signature verification error code: ${e}`), ge.UnknownError);
    }
  }
  async verify(e, t, i, r, s) {
    let n;
    try {
      n = await this.getSignModule();
    } catch (c) {
      this.logService.error("Could not load node-ovsx-sign module", q(c));
      return;
    }
    const o = (/* @__PURE__ */ new Date()).getTime();
    let a;
    try {
      await n.verify(i, r, this.logService.getLevel() === Se.Trace), a = { code: ge.Success, didExecute: true };
    } catch (c) {
      const h = c;
      a = { code: this.mapErrorCode(h.code), didExecute: h.didExecute ?? false, output: h.output ?? h.message ?? q(c) };
    }
    const l = (/* @__PURE__ */ new Date()).getTime() - o;
    return this.logService.info(`Extension signature verification result for ${e}: ${a.code}. Executed: ${a.didExecute}. Duration: ${l}ms.`), this.logService.trace(`Extension signature verification output for ${e}:
${a.output}`), { code: a.code };
  }
};
as.SIGNING_REGISTRY_MAP = { "marketplace.cursorapi.com": "https://open-vsx.org", "open-vsx.org": "https://open-vsx.org" }, as = N([x(0, pe), x(1, ot)], as), b();
var Nv = (e) => m(1944, null, e), Fh = m(1945, null, "anysphere.csharp"), Wi = class {
  constructor(e, t, i) {
    this.logger = e, this.extensionManagementService = t, this.extensionGalleryService = i;
  }
  get location() {
  }
  async listExtensions(e, t, i) {
    let r = await this.extensionManagementService.getInstalled(1, i);
    const s = fm.map((o) => o.toLowerCase());
    if (t && t !== "") {
      if (s.indexOf(t.toLowerCase()) < 0) {
        this.logger.info("Invalid category please enter a valid category. To list valid categories run --category without a category specified");
        return;
      }
      r = r.filter((o) => o.manifest.categories ? o.manifest.categories.map((l) => l.toLowerCase()).indexOf(t.toLowerCase()) > -1 : false);
    } else if (t === "") {
      this.logger.info("Possible Categories: "), s.forEach((o) => {
        this.logger.info(o);
      });
      return;
    }
    this.location && this.logger.info(m(1946, null, this.location)), r = r.sort((o, a) => o.identifier.id.localeCompare(a.identifier.id));
    let n;
    for (const o of r) n !== o.identifier.id && (n = o.identifier.id, this.logger.info(e ? `${n}@${o.manifest.version}` : n));
  }
  async installExtensions(e, t, i, r) {
    const s = [];
    try {
      e.length && this.logger.info(this.location ? m(1947, null, this.location) : m(1948, null));
      const n = [], o = [], a = (c, h, f) => {
        o.push({ id: c, version: h !== "prerelease" ? h : void 0, installOptions: { ...i, isBuiltin: f, installPreReleaseVersion: h === "prerelease" || i.installPreReleaseVersion } });
      };
      for (const c of e) if (c instanceof k) n.push({ vsix: c, installOptions: i });
      else {
        const [h, f] = ha(c);
        a(h, f, false);
      }
      for (const c of t) if (c instanceof k) n.push({ vsix: c, installOptions: { ...i, isBuiltin: true, donotIncludePackAndDependencies: true } });
      else {
        const [h, f] = ha(c);
        a(h, f, true);
      }
      const l = await this.extensionManagementService.getInstalled(void 0, i.profileLocation);
      if (n.length && await Promise.all(n.map(async ({ vsix: c, installOptions: h }) => {
        try {
          await this.installVSIX(c, h, r, l);
        } catch (f) {
          this.logger.error(f), s.push(c.toString());
        }
      })), o.length) {
        const c = await this.installGalleryExtensions(o, l, r);
        s.push(...c);
      }
    } catch (n) {
      throw this.logger.error(m(1949, null, q(n))), n;
    }
    if (s.length) throw new Error(m(1950, null, s.join(", ")));
  }
  async updateExtensions(e) {
    const t = await this.extensionManagementService.getInstalled(1, e), i = [];
    for (const o of t) o.identifier.uuid && i.push({ ...o.identifier, preRelease: o.preRelease });
    this.logger.trace(m(1951, null, i.length));
    const r = await this.extensionGalleryService.getExtensions(i, { compatible: true }, ve.None), s = [];
    for (const o of r) for (const a of t) Y(a.identifier, o.identifier) && fa(o.version, a.manifest.version) && s.push({ extension: o, options: { operation: 3, installPreReleaseVersion: a.preRelease, profileLocation: e, isApplicationScoped: a.isApplicationScoped } });
    if (!s.length) {
      this.logger.info(m(1952, null));
      return;
    }
    this.logger.info(m(1953, null, s.map((o) => o.extension.identifier.id).join(", ")));
    const n = await this.extensionManagementService.installGalleryExtensions(s);
    for (const o of n) o.error ? this.logger.error(m(1954, null, o.identifier.id, q(o.error))) : this.logger.info(m(1955, null, o.identifier.id, o.local?.manifest.version));
  }
  async installGalleryExtensions(e, t, i) {
    if (e = e.filter((o) => {
      const { id: a, version: l, installOptions: c } = o, h = t.find((f) => Y(f.identifier, { id: a }));
      if (h) {
        if (!i && (!l || l === "prerelease" && h.preRelease)) return this.logger.info(m(1956, null, a, h.manifest.version, a)), false;
        if (l && h.manifest.version === l) return this.logger.info(m(1957, null, `${a}@${l}`)), false;
        h.preRelease && l !== "prerelease" && (c.preRelease = false);
      }
      return true;
    }), !e.length) return [];
    const r = [], s = [], n = await this.getGalleryExtensions(e);
    if (await Promise.all(e.map(async ({ id: o, version: a, installOptions: l }) => {
      const c = n.get(o.toLowerCase());
      if (!c) {
        this.logger.error(`${Nv(a ? `${o}@${a}` : o)}
${Fh}`), r.push(o);
        return;
      }
      try {
        const f = await this.extensionGalleryService.getManifest(c, ve.None);
        if (f && !this.validateExtensionKind(f)) return;
      } catch (f) {
        this.logger.error(f.message || f.stack || f), r.push(o);
        return;
      }
      const h = t.find((f) => Y(f.identifier, c.identifier));
      if (h) {
        if (c.version === h.manifest.version) {
          this.logger.info(m(1958, null, a ? `${o}@${a}` : o));
          return;
        }
        this.logger.info(m(1959, null, o, c.version));
      }
      l.isBuiltin ? this.logger.info(a ? m(1960, null, o, a) : m(1961, null, o)) : this.logger.info(a ? m(1962, null, o, a) : m(1963, null, o)), s.push({ extension: c, options: { ...l, installGivenVersion: !!a, isApplicationScoped: l.isApplicationScoped || h?.isApplicationScoped } });
    })), s.length) {
      const o = await this.extensionManagementService.installGalleryExtensions(s);
      for (const a of o) a.error ? (this.logger.error(m(1964, null, a.identifier.id, q(a.error))), r.push(a.identifier.id)) : this.logger.info(m(1965, null, a.identifier.id, a.local?.manifest.version));
    }
    return r;
  }
  async installVSIX(e, t, i, r) {
    const s = await this.extensionManagementService.getManifest(e);
    if (!s) throw new Error("Invalid vsix");
    if (await this.validateVSIX(s, i, t.profileLocation, r)) try {
      await this.extensionManagementService.install(e, { ...t, installGivenVersion: true }), this.logger.info(m(1966, null, nr(e)));
    } catch (o) {
      if (bi(o)) this.logger.info(m(1967, null, nr(e)));
      else throw o;
    }
  }
  async getGalleryExtensions(e) {
    const t = /* @__PURE__ */ new Map(), i = e.some((s) => s.installOptions.installPreReleaseVersion), r = await this.extensionManagementService.getTargetPlatform();
    for (const s of e) if (na.test(s.id)) {
      const n = await this.extensionGalleryService.getExtensions([{ ...s, preRelease: i }], { targetPlatform: r }, ve.None);
      for (const o of n) t.set(o.identifier.id.toLowerCase(), o), t.set(s.id.toLowerCase(), o);
    }
    return t;
  }
  validateExtensionKind(e) {
    return true;
  }
  async validateVSIX(e, t, i, r) {
    if (!t) {
      const s = { id: wt(e.publisher, e.name) }, n = r.find((o) => Y(s, o.identifier) && fa(o.manifest.version, e.version));
      if (n) return this.logger.info(m(1968, null, n.identifier.id, n.manifest.version, e.version)), false;
    }
    return this.validateExtensionKind(e);
  }
  async uninstallExtensions(e, t, i) {
    const r = async (n) => {
      if (n instanceof k) {
        const o = await this.extensionManagementService.getManifest(n);
        return yh(o.publisher, o.name);
      }
      return n;
    }, s = [];
    for (const n of e) {
      const o = await r(n), l = (await this.extensionManagementService.getInstalled(void 0, i)).filter((c) => Y(c.identifier, { id: o }));
      if (!l.length) throw new Error(`${this.notInstalled(o)}
${Fh}`);
      if (l.some((c) => c.type === 0)) {
        this.logger.info(m(1969, null, o));
        return;
      }
      if (!t && l.some((c) => c.isBuiltin)) {
        this.logger.info(m(1970, null, o));
        return;
      }
      this.logger.info(m(1971, null, o));
      for (const c of l) await this.extensionManagementService.uninstall(c, { profileLocation: i }), s.push(c);
      this.location ? this.logger.info(m(1972, null, o, this.location)) : this.logger.info(m(1973, null, o));
    }
  }
  async locateExtension(e) {
    const t = await this.extensionManagementService.getInstalled();
    e.forEach((i) => {
      t.forEach((r) => {
        if (r.identifier.id === i && r.location.scheme === le.file) {
          this.logger.info(r.location.fsPath);
          return;
        }
      });
    });
  }
  notInstalled(e) {
    return this.location ? m(1974, null, e, this.location) : m(1975, null, e);
  }
};
Wi = N([x(1, aa), x(2, yi)], Wi), b();
var xn = class extends Error {
  constructor(e, t) {
    super(e), this.code = t;
  }
}, wi = ue("IExtensionsProfileScannerService"), Ia = class extends X {
  constructor(e, t, i, r, s) {
    super(), this.extensionsLocation = e, this.fileService = t, this.userDataProfilesService = i, this.uriIdentityService = r, this.logService = s, this._onAddExtensions = this._register(new M()), this.onAddExtensions = this._onAddExtensions.event, this._onDidAddExtensions = this._register(new M()), this.onDidAddExtensions = this._onDidAddExtensions.event, this._onRemoveExtensions = this._register(new M()), this.onRemoveExtensions = this._onRemoveExtensions.event, this._onDidRemoveExtensions = this._register(new M()), this.onDidRemoveExtensions = this._onDidRemoveExtensions.event, this.resourcesAccessQueueMap = new Ye();
  }
  scanProfileExtensions(e, t) {
    return this.withProfileExtensions(e, void 0, t);
  }
  async addExtensionsToProfile(e, t, i) {
    const r = [], s = [];
    try {
      return await this.withProfileExtensions(t, (n) => {
        const o = [];
        if (i) o.push(...n);
        else for (const a of n) e.some(([l]) => Y(l.identifier, a.identifier) && (l.manifest.version !== a.version || l.location.toString() !== a.location.toString())) ? r.push(a) : o.push(a);
        for (const [a, l] of e) {
          const c = o.findIndex((f) => Y(f.identifier, a.identifier) && f.version === a.manifest.version && f.location.toString() === a.location.toString()), h = { identifier: a.identifier, version: a.manifest.version, location: a.location, metadata: l };
          c === -1 ? (s.push(h), o.push(h)) : o.splice(c, 1, h);
        }
        return s.length && this._onAddExtensions.fire({ extensions: s, profileLocation: t }), r.length && this._onRemoveExtensions.fire({ extensions: r, profileLocation: t }), o;
      }), s.length && this._onDidAddExtensions.fire({ extensions: s, profileLocation: t }), r.length && this._onDidRemoveExtensions.fire({ extensions: r, profileLocation: t }), s;
    } catch (n) {
      throw s.length && this._onDidAddExtensions.fire({ extensions: s, error: n, profileLocation: t }), r.length && this._onDidRemoveExtensions.fire({ extensions: r, error: n, profileLocation: t }), n;
    }
  }
  async updateMetadata(e, t) {
    const i = [];
    return await this.withProfileExtensions(t, (r) => {
      const s = [];
      for (const n of r) {
        const o = e.find(([a]) => Y(a.identifier, n.identifier) && a.manifest.version === n.version);
        o && (n.metadata = { ...n.metadata, ...o[1] }, i.push(n)), s.push(n);
      }
      return s;
    }), i;
  }
  async removeExtensionsFromProfile(e, t) {
    const i = [];
    try {
      await this.withProfileExtensions(t, (r) => {
        const s = [];
        for (const n of r) e.some((o) => Y(n.identifier, o)) ? i.push(n) : s.push(n);
        return i.length && this._onRemoveExtensions.fire({ extensions: i, profileLocation: t }), s;
      }), i.length && this._onDidRemoveExtensions.fire({ extensions: i, profileLocation: t });
    } catch (r) {
      throw i.length && this._onDidRemoveExtensions.fire({ extensions: i, error: r, profileLocation: t }), r;
    }
  }
  async withProfileExtensions(e, t, i) {
    return this.getResourceAccessQueue(e).queue(async () => {
      let r = [], s;
      try {
        const n = await this.fileService.readFile(e);
        s = JSON.parse(n.value.toString().trim() || "[]");
      } catch (n) {
        if (Ge(n) !== 1) throw n;
        if (this.uriIdentityService.extUri.isEqual(e, this.userDataProfilesService.defaultProfile.extensionsResource) && (s = await this.migrateFromOldDefaultProfileExtensionsLocation()), !s && i?.bailOutWhenFileNotFound) throw new xn(q(n), "ERROR_PROFILE_NOT_FOUND");
      }
      if (s) {
        Array.isArray(s) || this.throwInvalidConentError(e);
        let n = false;
        for (const o of s) {
          Mh(o) || this.throwInvalidConentError(e);
          let a;
          if (Te(o.relativeLocation) && o.relativeLocation) a = this.resolveExtensionLocation(o.relativeLocation);
          else if (Te(o.location)) {
            this.logService.warn(`Extensions profile: Ignoring extension with invalid location: ${o.location}`);
            continue;
          } else {
            a = k.revive(o.location);
            const c = this.toRelativePath(a);
            c && (n = true, o.relativeLocation = c);
          }
          _t(o.metadata?.hasPreReleaseVersion) && o.metadata?.preRelease && (n = true, o.metadata.hasPreReleaseVersion = true);
          const l = o.metadata?.id ?? o.identifier.uuid;
          r.push({ identifier: l ? { id: o.identifier.id, uuid: l } : { id: o.identifier.id }, location: a, version: o.version, metadata: o.metadata });
        }
        n && await this.fileService.writeFile(e, $.fromString(JSON.stringify(s)));
      }
      if (t) {
        r = t(r);
        const n = r.map((o) => ({ identifier: o.identifier, version: o.version, location: o.location.toJSON(), relativeLocation: this.toRelativePath(o.location), metadata: o.metadata }));
        await this.fileService.writeFile(e, $.fromString(JSON.stringify(n)));
      }
      return r;
    });
  }
  throwInvalidConentError(e) {
    throw new xn(`Invalid extensions content in ${e.toString()}`, "ERROR_INVALID_CONTENT");
  }
  toRelativePath(e) {
    return this.uriIdentityService.extUri.isEqual(this.uriIdentityService.extUri.dirname(e), this.extensionsLocation) ? this.uriIdentityService.extUri.basename(e) : void 0;
  }
  resolveExtensionLocation(e) {
    return this.uriIdentityService.extUri.joinPath(this.extensionsLocation, e);
  }
  async migrateFromOldDefaultProfileExtensionsLocation() {
    return this._migrationPromise || (this._migrationPromise = (async () => {
      const e = this.uriIdentityService.extUri.joinPath(this.userDataProfilesService.defaultProfile.location, "extensions.json"), t = this.uriIdentityService.extUri.joinPath(this.extensionsLocation, ".init-default-profile-extensions");
      let i;
      try {
        i = (await this.fileService.readFile(e)).value.toString();
      } catch (s) {
        if (Ge(s) === 1) return;
        throw s;
      }
      this.logService.info("Migrating extensions from old default profile location", e.toString());
      let r;
      try {
        const s = JSON.parse(i);
        Array.isArray(s) && s.every((n) => Mh(n)) ? r = s : this.logService.warn("Skipping migrating from old default profile locaiton: Found invalid data", s);
      } catch (s) {
        this.logService.error(s);
      }
      if (r) try {
        await this.fileService.createFile(this.userDataProfilesService.defaultProfile.extensionsResource, $.fromString(JSON.stringify(r)), { overwrite: false }), this.logService.info("Migrated extensions from old default profile location to new location", e.toString(), this.userDataProfilesService.defaultProfile.extensionsResource.toString());
      } catch (s) {
        if (Ge(s) === 3) this.logService.info("Migration from old default profile location to new location is done by another window", e.toString(), this.userDataProfilesService.defaultProfile.extensionsResource.toString());
        else throw s;
      }
      try {
        await this.fileService.del(e);
      } catch (s) {
        Ge(s) !== 1 && this.logService.error(s);
      }
      try {
        await this.fileService.del(t);
      } catch (s) {
        Ge(s) !== 1 && this.logService.error(s);
      }
      return r;
    })()), this._migrationPromise;
  }
  getResourceAccessQueue(e) {
    let t = this.resourcesAccessQueueMap.get(e);
    return t || (t = new Fr(), this.resourcesAccessQueueMap.set(e, t)), t;
  }
};
Ia = N([x(1, ke), x(2, Dt), x(3, je), x(4, pe)], Ia);
function Mh(e) {
  return Ne(e) && am(e.identifier) && (Fv(e.location) || Te(e.location) && e.location) && (_t(e.relativeLocation) || Te(e.relativeLocation)) && e.version && Te(e.version);
}
function Fv(e) {
  return e ? Te(e.path) && Te(e.scheme) : false;
}
b(), b();
function Pa(e) {
  switch (e) {
    case 1:
      return m(114, null);
    case 2:
      return m(115, null);
    case 3:
      return m(116, null);
    case 4:
      return m(117, null);
    case 5:
      return m(118, null);
    case 6:
      return m(119, null);
    case 7:
      return m(120, null);
    case 8:
      return m(121, null);
    case 9:
      return m(122, null);
    default:
      return "";
  }
}
b();
function Mv(e, t, i, r) {
  try {
    Vv(e, t, i, r);
  } catch (s) {
    e.error(s?.message ?? s);
  }
  return t;
}
function Vv(e, t, i, r) {
  const s = (n, o, a) => {
    const l = n[o];
    if (Te(l)) {
      const c = l, h = c.length;
      if (h > 1 && c[0] === "%" && c[h - 1] === "%") {
        const f = c.substr(1, h - 2);
        let d = i[f];
        d === void 0 && r && (d = r[f]);
        const p = typeof d == "string" ? d : d?.message, v = r?.[f], y = typeof v == "string" ? v : v?.message;
        if (!p) {
          y || e.warn(`[${t.name}]: ${m(1976, null, f)}`);
          return;
        }
        if (a && (o === "title" || o === "category") && y && y !== p) {
          const E = { value: p, original: y };
          n[o] = E;
        } else n[o] = p;
      }
    } else if (Ne(l)) for (const c in l) l.hasOwnProperty(c) && (c === "commands" ? s(l, c, true) : s(l, c, a));
    else if (Array.isArray(l)) for (let c = 0; c < l.length; c++) s(l, c, a);
  };
  for (const n in t) t.hasOwnProperty(n) && s(t, n);
}
var Ra;
((e) => {
  function t(i, r) {
    if (i === r) return true;
    const s = Object.keys(i), n = /* @__PURE__ */ new Set();
    for (const o of Object.keys(r)) n.add(o);
    if (s.length !== n.size) return false;
    for (const o of s) {
      if (i[o] !== r[o]) return false;
      n.delete(o);
    }
    return n.size === 0;
  }
  e.equals = t;
})(Ra || (Ra = {}));
var Wv = ".obsolete", In = ue("IExtensionsScannerService"), Aa = class extends X {
  constructor(e, t, i, r, s, n, o, a, l, c, h, f) {
    super(), this.systemExtensionsLocation = e, this.userExtensionsLocation = t, this.extensionsControlLocation = i, this.currentProfile = r, this.userDataProfilesService = s, this.extensionsProfileScannerService = n, this.fileService = o, this.logService = a, this.environmentService = l, this.productService = c, this.uriIdentityService = h, this.instantiationService = f, this._onDidChangeCache = this._register(new M()), this.onDidChangeCache = this._onDidChangeCache.event, this.initializeDefaultProfileExtensionsPromise = void 0, this.systemExtensionsCachedScanner = this._register(this.instantiationService.createInstance(Rn, this.currentProfile)), this.userExtensionsCachedScanner = this._register(this.instantiationService.createInstance(Rn, this.currentProfile)), this.extensionsScanner = this._register(this.instantiationService.createInstance(Pn)), this._register(this.systemExtensionsCachedScanner.onDidChangeCache(() => this._onDidChangeCache.fire(0))), this._register(this.userExtensionsCachedScanner.onDidChangeCache(() => this._onDidChangeCache.fire(1)));
  }
  getTargetPlatform() {
    return this._targetPlatformPromise || (this._targetPlatformPromise = _h(this.fileService, this.logService)), this._targetPlatformPromise;
  }
  async scanAllExtensions(e, t) {
    const [i, r] = await Promise.all([this.scanSystemExtensions(e), this.scanUserExtensions(t)]);
    return this.dedupExtensions(i, r, [], await this.getTargetPlatform(), true);
  }
  async scanSystemExtensions(e) {
    const t = [];
    t.push(this.scanDefaultSystemExtensions(e.language)), t.push(this.scanDevSystemExtensions(e.language, !!e.checkControlFile));
    const [i, r] = await Promise.all(t);
    return this.applyScanOptions([...i, ...r], 0, { pickLatest: false });
  }
  async scanUserExtensions(e) {
    this.logService.trace("Started scanning user extensions", e.profileLocation);
    const t = this.uriIdentityService.extUri.isEqual(e.profileLocation, this.userDataProfilesService.defaultProfile.extensionsResource) ? { bailOutWhenFileNotFound: true } : void 0, i = await this.createExtensionScannerInput(e.profileLocation, true, 1, e.language, true, t, e.productVersion ?? this.getProductVersion()), r = e.useCache && !i.devMode ? this.userExtensionsCachedScanner : this.extensionsScanner;
    let s;
    try {
      s = await r.scanExtensions(i);
    } catch (n) {
      if (n instanceof xn && n.code === "ERROR_PROFILE_NOT_FOUND") await this.doInitializeDefaultProfileExtensions(), s = await r.scanExtensions(i);
      else throw n;
    }
    return s = await this.filterExtensionsMarkedForRemoval(s), s = await this.applyScanOptions(s, 1, { includeInvalid: e.includeInvalid, pickLatest: true }), this.logService.trace("Scanned user extensions:", s.length), s;
  }
  async scanAllUserExtensions(e = { includeInvalid: true, includeAllVersions: true }) {
    const t = await this.createExtensionScannerInput(this.userExtensionsLocation, false, 1, void 0, true, void 0, this.getProductVersion()), i = await this.extensionsScanner.scanExtensions(t);
    return this.applyScanOptions(i, 1, { includeAllVersions: e.includeAllVersions, includeInvalid: e.includeInvalid });
  }
  async scanExtensionsUnderDevelopment(e, t) {
    if (this.environmentService.isExtensionDevelopment && this.environmentService.extensionDevelopmentLocationURI) {
      const i = (await Promise.all(this.environmentService.extensionDevelopmentLocationURI.filter((r) => r.scheme === le.file).map(async (r) => {
        const s = await this.createExtensionScannerInput(r, false, 1, t.language, false, void 0, this.getProductVersion());
        return (await this.extensionsScanner.scanOneOrMultipleExtensions(s)).map((o) => (o.type = e.find((a) => Y(a.identifier, o.identifier))?.type ?? o.type, this.extensionsScanner.validate(o, s)));
      }))).flat();
      return this.applyScanOptions(i, "development", { includeInvalid: t.includeInvalid, pickLatest: true });
    }
    return [];
  }
  async scanExistingExtension(e, t, i) {
    const r = await this.createExtensionScannerInput(e, false, t, i.language, true, void 0, this.getProductVersion()), s = await this.extensionsScanner.scanExtension(r);
    return !s || !i.includeInvalid && !s.isValid ? null : s;
  }
  async scanOneOrMultipleExtensions(e, t, i) {
    const r = await this.createExtensionScannerInput(e, false, t, i.language, true, void 0, this.getProductVersion()), s = await this.extensionsScanner.scanOneOrMultipleExtensions(r);
    return this.applyScanOptions(s, t, { includeInvalid: i.includeInvalid, pickLatest: true });
  }
  async scanMultipleExtensions(e, t, i) {
    const r = [];
    return await Promise.all(e.map(async (s) => {
      const n = await this.scanOneOrMultipleExtensions(s, t, i);
      r.push(...n);
    })), this.applyScanOptions(r, t, { includeInvalid: i.includeInvalid, pickLatest: true });
  }
  async updateManifestMetadata(e, t) {
    const i = z(e, "package.json"), r = (await this.fileService.readFile(i)).value.toString(), s = JSON.parse(r);
    s.__metadata = { ...s.__metadata, ...t }, await this.fileService.writeFile(z(e, "package.json"), $.fromString(JSON.stringify(s, null, "	")));
  }
  async initializeDefaultProfileExtensions() {
    try {
      await this.extensionsProfileScannerService.scanProfileExtensions(this.userDataProfilesService.defaultProfile.extensionsResource, { bailOutWhenFileNotFound: true });
    } catch (e) {
      if (e instanceof xn && e.code === "ERROR_PROFILE_NOT_FOUND") await this.doInitializeDefaultProfileExtensions();
      else throw e;
    }
  }
  async doInitializeDefaultProfileExtensions() {
    return this.initializeDefaultProfileExtensionsPromise || (this.initializeDefaultProfileExtensionsPromise = (async () => {
      try {
        this.logService.info("Started initializing default profile extensions in extensions installation folder.", this.userExtensionsLocation.toString());
        const e = await this.scanAllUserExtensions({ includeInvalid: true });
        if (e.length) await this.extensionsProfileScannerService.addExtensionsToProfile(e.map((t) => [t, t.metadata]), this.userDataProfilesService.defaultProfile.extensionsResource);
        else try {
          await this.fileService.createFile(this.userDataProfilesService.defaultProfile.extensionsResource, $.fromString(JSON.stringify([])));
        } catch (t) {
          Ge(t) !== 1 && this.logService.warn("Failed to create default profile extensions manifest in extensions installation folder.", this.userExtensionsLocation.toString(), q(t));
        }
        this.logService.info("Completed initializing default profile extensions in extensions installation folder.", this.userExtensionsLocation.toString());
      } catch (e) {
        this.logService.error(e);
      } finally {
        this.initializeDefaultProfileExtensionsPromise = void 0;
      }
    })()), this.initializeDefaultProfileExtensionsPromise;
  }
  async applyScanOptions(e, t, i = {}) {
    return i.includeAllVersions || (e = this.dedupExtensions(t === 0 ? e : void 0, t === 1 ? e : void 0, t === "development" ? e : void 0, await this.getTargetPlatform(), !!i.pickLatest)), i.includeInvalid || (e = e.filter((r) => r.isValid)), e.sort((r, s) => {
      const n = Pt(r.location.fsPath), o = Pt(s.location.fsPath);
      return n < o ? -1 : n > o ? 1 : 0;
    });
  }
  dedupExtensions(e, t, i, r, s) {
    const n = (a, l, c) => {
      if (a.isValid && !l.isValid) return false;
      if (a.isValid === l.isValid) {
        if (s && fa(a.manifest.version, l.manifest.version)) return this.logService.debug(`Skipping extension ${l.location.path} with lower version ${l.manifest.version} in favour of ${a.location.path} with version ${a.manifest.version}`), false;
        if (zm(a.manifest.version, l.manifest.version)) {
          if (a.type === 0) return this.logService.debug(`Skipping extension ${l.location.path} in favour of system extension ${a.location.path} with same version`), false;
          if (a.targetPlatform === r) return this.logService.debug(`Skipping extension ${l.location.path} from different target platform ${l.targetPlatform}`), false;
        }
      }
      return c ? this.logService.warn(`Overwriting user extension ${a.location.path} with ${l.location.path}.`) : this.logService.debug(`Overwriting user extension ${a.location.path} with ${l.location.path}.`), true;
    }, o = new dm();
    return e?.forEach((a) => {
      const l = o.get(a.identifier.id);
      (!l || n(l, a, false)) && o.set(a.identifier.id, a);
    }), t?.forEach((a) => {
      const l = o.get(a.identifier.id);
      if (!l && e && a.type === 0) {
        this.logService.debug(`Skipping obsolete system extension ${a.location.path}.`);
        return;
      }
      (!l || n(l, a, false)) && o.set(a.identifier.id, a);
    }), i?.forEach((a) => {
      const l = o.get(a.identifier.id);
      (!l || n(l, a, true)) && o.set(a.identifier.id, a), o.set(a.identifier.id, a);
    }), [...o.values()];
  }
  async scanDefaultSystemExtensions(e) {
    this.logService.trace("Started scanning system extensions");
    const t = await this.createExtensionScannerInput(this.systemExtensionsLocation, false, 0, e, true, void 0, this.getProductVersion()), r = await (t.devMode ? this.extensionsScanner : this.systemExtensionsCachedScanner).scanExtensions(t);
    return this.logService.trace("Scanned system extensions:", r.length), r;
  }
  async scanDevSystemExtensions(e, t) {
    const i = this.environmentService.isBuilt ? [] : this.productService.builtInExtensions;
    if (!i?.length) return [];
    this.logService.trace("Started scanning dev system extensions");
    const r = t ? await this.getBuiltInExtensionControl() : {}, s = [], n = k.file(ci(H(Bs.asFileUri("").fsPath, "..", ".build", "builtInExtensions")));
    for (const a of i) {
      const l = r[a.name] || "marketplace";
      switch (l) {
        case "disabled":
          break;
        case "marketplace":
          s.push(z(n, a.name));
          break;
        default:
          s.push(k.file(l));
          break;
      }
    }
    const o = await Promise.all(s.map(async (a) => this.extensionsScanner.scanExtension(await this.createExtensionScannerInput(a, false, 0, e, true, void 0, this.getProductVersion()))));
    return this.logService.trace("Scanned dev system extensions:", o.length), Xi(o);
  }
  async getBuiltInExtensionControl() {
    try {
      const e = await this.fileService.readFile(this.extensionsControlLocation);
      return JSON.parse(e.value.toString());
    } catch {
      return {};
    }
  }
  async createExtensionScannerInput(e, t, i, r, s, n, o) {
    const a = await this.getTranslations(r ?? Ot), l = await this.getMtime(e), c = t && !this.uriIdentityService.extUri.isEqual(e, this.userDataProfilesService.defaultProfile.extensionsResource) ? this.userDataProfilesService.defaultProfile.extensionsResource : void 0, h = c ? await this.getMtime(c) : void 0;
    return new ls(e, l, c, h, t, n, i, s, o.vscodeVersion, o.date, this.productService.commit, !this.environmentService.isBuilt, r, a);
  }
  async getMtime(e) {
    try {
      const t = await this.fileService.stat(e);
      if (typeof t.mtime == "number") return t.mtime;
    } catch {
    }
  }
  getProductVersion() {
    return { vscodeVersion: this.productService.vscodeVersion, version: this.productService.version, date: this.productService.date };
  }
  async filterExtensionsMarkedForRemoval(e) {
    if (!e.length) return e;
    const t = await this.readExtensionsMarkedForRemoval();
    if (!t.size) return e;
    const i = e.filter((s) => !t.has(this.toExtensionKey(s))), r = e.length - i.length;
    return r > 0 && this.logService.info(`Ignoring ${r} user extension(s) marked for removal while scanning installed extensions.`), i;
  }
  toExtensionKey(e) {
    return `${e.identifier.id}-${e.manifest.version}${e.targetPlatform !== "undefined" ? `-${e.targetPlatform}` : ""}`;
  }
  async readExtensionsMarkedForRemoval() {
    try {
      const e = z(this.userExtensionsLocation, Wv), t = await this.fileService.readFile(e), i = JSON.parse(t.value.toString());
      if (typeof i != "object" || i === null || Array.isArray(i)) return /* @__PURE__ */ new Set();
      const r = /* @__PURE__ */ new Set();
      for (const [s, n] of Object.entries(i)) n === true && r.add(s);
      return r;
    } catch (e) {
      return Ge(e) !== 1 && this.logService.debug("Error while reading extensions marked for removal:", q(e)), /* @__PURE__ */ new Set();
    }
  }
};
Aa = N([x(4, Dt), x(5, wi), x(6, ke), x(7, pe), x(8, ti), x(9, ot), x(10, je), x(11, Ks)], Aa);
var ls = class {
  constructor(e, t, i, r, s, n, o, a, l, c, h, f, d, p) {
    this.location = e, this.mtime = t, this.applicationExtensionslocation = i, this.applicationExtensionslocationMtime = r, this.profile = s, this.profileScanOptions = n, this.type = o, this.validate = a, this.productVersion = l, this.productDate = c, this.productCommit = h, this.devMode = f, this.language = d, this.translations = p;
  }
  static createNlsConfiguration(e) {
    return { language: e.language, pseudo: e.language === "pseudo", devMode: e.devMode, translations: e.translations };
  }
  static equals(e, t) {
    return Hc(e.location, t.location) && e.mtime === t.mtime && Hc(e.applicationExtensionslocation, t.applicationExtensionslocation) && e.applicationExtensionslocationMtime === t.applicationExtensionslocationMtime && e.profile === t.profile && Nt(e.profileScanOptions, t.profileScanOptions) && e.type === t.type && e.validate === t.validate && e.productVersion === t.productVersion && e.productDate === t.productDate && e.productCommit === t.productCommit && e.devMode === t.devMode && e.language === t.language && Ra.equals(e.translations, t.translations);
  }
}, Pn = class extends X {
  constructor(e, t, i, r, s, n) {
    super(), this.extensionsProfileScannerService = e, this.uriIdentityService = t, this.fileService = i, this.environmentService = s, this.logService = n, this.extensionsEnabledWithApiProposalVersion = r.extensionsEnabledWithApiProposalVersion?.map((o) => o.toLowerCase()) ?? [];
  }
  async scanExtensions(e) {
    return e.profile ? this.scanExtensionsFromProfile(e) : this.scanExtensionsFromLocation(e);
  }
  async scanExtensionsFromLocation(e) {
    const t = await this.fileService.resolve(e.location);
    if (!t.children?.length) return [];
    const i = await Promise.all(t.children.map(async (r) => {
      if (!r.isDirectory || e.type === 1 && nr(r.resource).indexOf(".") === 0) return null;
      const s = new ls(r.resource, e.mtime, e.applicationExtensionslocation, e.applicationExtensionslocationMtime, e.profile, e.profileScanOptions, e.type, e.validate, e.productVersion, e.productDate, e.productCommit, e.devMode, e.language, e.translations);
      return this.scanExtension(s);
    }));
    return Xi(i).sort((r, s) => r.location.path < s.location.path ? -1 : 1);
  }
  async scanExtensionsFromProfile(e) {
    let t = await this.scanExtensionsFromProfileResource(e.location, () => true, e);
    if (e.applicationExtensionslocation && !this.uriIdentityService.extUri.isEqual(e.location, e.applicationExtensionslocation)) {
      t = t.filter((r) => !r.metadata?.isApplicationScoped);
      const i = await this.scanExtensionsFromProfileResource(e.applicationExtensionslocation, (r) => !!r.metadata?.isBuiltin || !!r.metadata?.isApplicationScoped, e);
      t.push(...i);
    }
    return t;
  }
  async scanExtensionsFromProfileResource(e, t, i) {
    const r = await this.extensionsProfileScannerService.scanProfileExtensions(e, i.profileScanOptions);
    if (!r.length) return [];
    const s = await Promise.all(r.map(async (n) => {
      if (t(n)) {
        const o = new ls(n.location, i.mtime, i.applicationExtensionslocation, i.applicationExtensionslocationMtime, i.profile, i.profileScanOptions, i.type, i.validate, i.productVersion, i.productDate, i.productCommit, i.devMode, i.language, i.translations);
        return this.scanExtension(o, n);
      }
      return null;
    }));
    return Xi(s);
  }
  async scanOneOrMultipleExtensions(e) {
    try {
      if (await this.fileService.exists(z(e.location, "package.json"))) {
        const t = await this.scanExtension(e);
        return t ? [t] : [];
      } else return await this.scanExtensions(e);
    } catch (t) {
      return this.logService.error(`Error scanning extensions at ${e.location.path}:`, q(t)), [];
    }
  }
  async scanExtension(e, t) {
    const i = [];
    let r = true, s;
    try {
      s = await this.scanExtensionManifest(e.location);
    } catch (f) {
      if (t) {
        i.push([Ke.Error, q(f)]), r = false;
        const [d, p] = t.identifier.id.split(".");
        s = { name: p, publisher: d, version: t.version, engines: { vscode: "" } };
      } else return e.type !== 0 && this.logService.error(f), null;
    }
    s.publisher || (s.publisher = fh);
    let n;
    t ? n = { ...t.metadata, size: s.__metadata?.size } : s.__metadata && (n = { installedTimestamp: s.__metadata.installedTimestamp, size: s.__metadata.size, targetPlatform: s.__metadata.targetPlatform }), delete s.__metadata;
    const o = wt(s.publisher, s.name), a = n?.id ? { id: o, uuid: n.id } : { id: o }, l = n?.isSystem ? 0 : e.type, c = l === 0 || !!n?.isBuiltin;
    try {
      s = await this.translateManifest(e.location, s, ls.createNlsConfiguration(e));
    } catch (f) {
      this.logService.warn("Failed to translate manifest", q(f));
    }
    let h = { type: l, identifier: a, manifest: s, location: e.location, isBuiltin: c, targetPlatform: n?.targetPlatform ?? "undefined", publisherDisplayName: n?.publisherDisplayName, metadata: n, isValid: r, validations: i, preRelease: !!n?.preRelease };
    return e.validate && (h = this.validate(h, e)), s.enabledApiProposals && (!this.environmentService.isBuilt || this.extensionsEnabledWithApiProposalVersion.includes(o.toLowerCase())) && (s.originalEnabledApiProposals = s.enabledApiProposals, s.enabledApiProposals = mm([...s.enabledApiProposals])), h;
  }
  validate(e, t) {
    let i = e.isValid;
    const r = this.environmentService.isBuilt && this.extensionsEnabledWithApiProposalVersion.includes(e.identifier.id.toLowerCase()), s = Qm(t.productVersion, t.productDate, t.location, e.manifest, e.isBuiltin, r);
    for (const [n, o] of s) n === Ke.Error && (i = false, this.logService.error(this.formatMessage(t.location, o)));
    return e.isValid = i, e.validations = [...e.validations, ...s], e;
  }
  async scanExtensionManifest(e) {
    const t = z(e, "package.json");
    let i;
    try {
      i = (await this.fileService.readFile(t)).value.toString();
    } catch (s) {
      throw Ge(s) !== 1 && this.logService.error(this.formatMessage(e, m(1977, null, t.path, s.message))), s;
    }
    let r;
    try {
      r = JSON.parse(i);
    } catch (s) {
      const n = [];
      Vr(i, n);
      for (const o of n) this.logService.error(this.formatMessage(e, m(1978, null, t.path, o.offset, o.length, Pa(o.error))));
      throw s;
    }
    if (Wr(r) !== "object") {
      const s = this.formatMessage(e, m(1979, null, t.path));
      throw this.logService.error(s), new Error(s);
    }
    return r;
  }
  async translateManifest(e, t, i) {
    const r = await this.getLocalizedMessages(e, t, i);
    if (r) try {
      const s = [], n = await this.resolveOriginalMessageBundle(r.default, s);
      if (s.length > 0) return s.forEach((a) => {
        this.logService.error(this.formatMessage(e, m(1980, null, r.default?.path, Pa(a.error))));
      }), t;
      if (Wr(r) !== "object") return this.logService.error(this.formatMessage(e, m(1981, null, r.default?.path))), t;
      const o = r.values || /* @__PURE__ */ Object.create(null);
      return Mv(this.logService, t, o, n);
    } catch {
    }
    return t;
  }
  async getLocalizedMessages(e, t, i) {
    const r = z(e, "package.nls.json"), s = (l, c) => {
      c.forEach((h) => {
        this.logService.error(this.formatMessage(e, m(1982, null, l?.path, Pa(h.error))));
      });
    }, n = (l) => {
      this.logService.error(this.formatMessage(e, m(1983, null, l?.path)));
    }, o = `${t.publisher}.${t.name}`, a = i.translations[o];
    if (a) try {
      const l = k.file(a), c = (await this.fileService.readFile(l)).value.toString(), h = [], f = Vr(c, h);
      return h.length > 0 ? (s(l, h), { values: void 0, default: r }) : Wr(f) !== "object" ? (n(l), { values: void 0, default: r }) : { values: f.contents ? f.contents.package : void 0, default: r };
    } catch {
      return { values: void 0, default: r };
    }
    else {
      if (!await this.fileService.exists(r)) return;
      let c;
      try {
        c = await this.findMessageBundles(e, i);
      } catch {
        return;
      }
      if (!c.localized) return { values: void 0, default: c.original };
      try {
        const h = (await this.fileService.readFile(c.localized)).value.toString(), f = [], d = Vr(h, f);
        return f.length > 0 ? (s(c.localized, f), { values: void 0, default: c.original }) : Wr(d) !== "object" ? (n(c.localized), { values: void 0, default: c.original }) : { values: d, default: c.original };
      } catch {
        return { values: void 0, default: c.original };
      }
    }
  }
  async resolveOriginalMessageBundle(e, t) {
    if (e) try {
      const i = (await this.fileService.readFile(e)).value.toString();
      return Vr(i, t);
    } catch {
    }
  }
  findMessageBundles(e, t) {
    return new Promise((i, r) => {
      const s = (n) => {
        const o = z(e, `package.nls.${n}.json`);
        this.fileService.exists(o).then((a) => {
          a && i({ localized: o, original: z(e, "package.nls.json") });
          const l = n.lastIndexOf("-");
          l === -1 ? i({ localized: z(e, "package.nls.json"), original: null }) : (n = n.substring(0, l), s(n));
        });
      };
      if (t.devMode || t.pseudo || !t.language) return i({ localized: z(e, "package.nls.json"), original: null });
      s(t.language);
    });
  }
  formatMessage(e, t) {
    return `[${e.path}]: ${t}`;
  }
};
Pn = N([x(0, wi), x(1, je), x(2, ke), x(3, ot), x(4, ti), x(5, pe)], Pn);
var Rn = class extends Pn {
  constructor(e, t, i, r, s, n, o, a) {
    super(i, r, s, n, o, a), this.currentProfile = e, this.userDataProfilesService = t, this.cacheValidatorThrottler = this._register(new Li(3e3)), this._onDidChangeCache = this._register(new M()), this.onDidChangeCache = this._onDidChangeCache.event;
  }
  async scanExtensions(e) {
    const t = this.getCacheFile(e), i = await this.readExtensionCache(t);
    if (this.input = e, i && i.input && ls.equals(i.input, this.input)) return this.logService.debug("Using cached extensions scan result", e.type === 0 ? "system" : "user", e.location.toString()), this.cacheValidatorThrottler.trigger(() => this.validateCache()), i.result.map((s) => (s.location = k.revive(s.location), s));
    const r = await super.scanExtensions(e);
    return await this.writeExtensionCache(t, { input: e, result: r }), r;
  }
  async readExtensionCache(e) {
    try {
      const t = await this.fileService.readFile(e), i = JSON.parse(t.value.toString());
      return { result: i.result, input: vr(i.input) };
    } catch (t) {
      this.logService.debug("Error while reading the extension cache file:", e.path, q(t));
    }
    return null;
  }
  async writeExtensionCache(e, t) {
    try {
      await this.fileService.writeFile(e, $.fromString(JSON.stringify(t)));
    } catch (i) {
      this.logService.debug("Error while writing the extension cache file:", e.path, q(i));
    }
  }
  async validateCache() {
    if (!this.input) return;
    const e = this.getCacheFile(this.input), t = await this.readExtensionCache(e);
    if (!t) return;
    const i = t.result, r = JSON.parse(JSON.stringify(await super.scanExtensions(this.input)));
    if (!Nt(r, i)) try {
      this.logService.info("Invalidating Cache", i, r), await this.fileService.del(e), this._onDidChangeCache.fire();
    } catch (s) {
      this.logService.error(s);
    }
  }
  getCacheFile(e) {
    const t = this.getProfile(e);
    return this.uriIdentityService.extUri.joinPath(t.cacheHome, e.type === 0 ? hm : hh);
  }
  getProfile(e) {
    return e.type === 0 ? this.userDataProfilesService.defaultProfile : e.profile ? this.uriIdentityService.extUri.isEqual(e.location, this.currentProfile.extensionsResource) ? this.currentProfile : this.userDataProfilesService.profiles.find((t) => this.uriIdentityService.extUri.isEqual(e.location, t.extensionsResource)) ?? this.currentProfile : this.userDataProfilesService.defaultProfile;
  }
};
Rn = N([x(1, Dt), x(2, wi), x(3, je), x(4, ke), x(5, ot), x(6, ti), x(7, pe)], Rn);
var $v = class extends Aa {
  constructor(e, t, i, r, s, n, o, a, l, c, h, f) {
    super(e, t, z(i, ".cursor-dev", "extensions", "control.json"), r, s, n, o, a, l, c, h, f), this.translationsPromise = (async () => {
      if (wc) try {
        const d = await this.fileService.readFile(k.file(wc));
        return JSON.parse(d.value.toString());
      } catch {
      }
      return /* @__PURE__ */ Object.create(null);
    })();
  }
  getTranslations(e) {
    return this.translationsPromise;
  }
};
b();
import * as Bv from "crypto";
import * as Vh from "fs";
b();
import * as me from "fs";
import { tmpdir as qv } from "os";
import { promisify as cs } from "util";
b();
var zv = new Ps(1e4);
function ka(e) {
  return Kv(e, "NFC", zv);
}
var N5 = new Ps(1e4), Gv = /[^\u0000-\u0080]/;
function Kv(e, t, i) {
  if (!e) return e;
  const r = i.get(e);
  if (r) return r;
  let s;
  return Gv.test(e) ? s = e.normalize(t) : s = e, i.set(e, s), s;
}
var Wh = ((e) => (e[e.UNLINK = 0] = "UNLINK", e[e.MOVE = 1] = "MOVE", e))(Wh || {});
async function $h(e, t = 0, i) {
  if (ep(e)) throw new Error("rimraf - will refuse to recursively delete root");
  return t === 0 ? Da(e) : jv(e, i);
}
async function jv(e, t = sp(qv())) {
  try {
    try {
      await me.promises.rename(e, t);
    } catch (i) {
      return i.code === "ENOENT" ? void 0 : Da(e);
    }
    Da(t).catch((i) => {
    });
  } catch (i) {
    if (i.code !== "ENOENT") throw i;
  }
}
async function Da(e) {
  return me.promises.rm(e, { recursive: true, force: true, maxRetries: 3 });
}
async function An(e, t) {
  return Xv(await (t ? Hv(e) : me.promises.readdir(e)));
}
async function Hv(e) {
  try {
    return await me.promises.readdir(e, { withFileTypes: true });
  } catch (r) {
    console.warn("[node.js fs] readdir with filetypes failed with error: ", r);
  }
  const t = [], i = await An(e);
  for (const r of i) {
    let s = false, n = false, o = false;
    try {
      const a = await me.promises.lstat(H(e, r));
      s = a.isFile(), n = a.isDirectory(), o = a.isSymbolicLink();
    } catch (a) {
      console.warn("[node.js fs] unexpected error from lstat after readdir: ", a);
    }
    t.push({ name: r, isFile: () => s, isDirectory: () => n, isSymbolicLink: () => o });
  }
  return t;
}
function Xv(e) {
  return e.map((t) => typeof t == "string" ? Tt ? ka(t) : t : (t.name = Tt ? ka(t.name) : t.name, t));
}
async function Qv(e) {
  const t = await An(e), i = [];
  for (const r of t) await gt.existsDirectory(H(e, r)) && i.push(r);
  return i;
}
var gt;
((e) => {
  async function t(s) {
    let n;
    try {
      if (n = await me.promises.lstat(s), !n.isSymbolicLink()) return { stat: n };
    } catch {
    }
    try {
      return { stat: await me.promises.stat(s), symbolicLink: n?.isSymbolicLink() ? { dangling: false } : void 0 };
    } catch (o) {
      if (o.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: true } };
      if (Re && o.code === "EACCES") try {
        return { stat: await me.promises.stat(await me.promises.readlink(s)), symbolicLink: { dangling: false } };
      } catch (a) {
        if (a.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: true } };
        throw a;
      }
      throw o;
    }
  }
  e.stat = t;
  async function i(s) {
    try {
      const { stat: n, symbolicLink: o } = await e.stat(s);
      return n.isFile() && o?.dangling !== true;
    } catch {
    }
    return false;
  }
  e.existsFile = i;
  async function r(s) {
    try {
      const { stat: n, symbolicLink: o } = await e.stat(s);
      return n.isDirectory() && o?.dangling !== true;
    } catch {
    }
    return false;
  }
  e.existsDirectory = r;
})(gt || (gt = {}));
var Jv = new su();
function Yv(e, t, i) {
  return Jv.queueFor(k.file(e), () => {
    const r = t4(i);
    return new Promise((s, n) => e4(e, t, r, (o) => o ? n(o) : s()));
  }, mo);
}
var Bh = true;
function Zv(e) {
  Bh = e;
}
function e4(e, t, i, r) {
  if (!Bh) return me.writeFile(e, t, { mode: i.mode, flag: i.flag }, r);
  me.open(e, i.flag, i.mode, (s, n) => {
    if (s) return r(s);
    me.writeFile(n, t, (o) => {
      if (o) return me.close(n, () => r(o));
      me.fdatasync(n, (a) => (a && (console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", a), Zv(false)), me.close(n, (l) => r(l))));
    });
  });
}
function t4(e) {
  return e ? { mode: typeof e.mode == "number" ? e.mode : 438, flag: typeof e.flag == "string" ? e.flag : "w" } : { mode: 438, flag: "w" };
}
async function i4(e, t, i = 6e4) {
  if (e !== t) try {
    Re && typeof i == "number" ? await qh(e, t, Date.now(), i) : await me.promises.rename(e, t);
  } catch (r) {
    if (e.toLowerCase() !== t.toLowerCase() && r.code === "EXDEV" || e.endsWith(".")) await zh(e, t, { preserveSymlinks: false }), await $h(e, 1);
    else throw r;
  }
}
async function qh(e, t, i, r, s = 0) {
  try {
    return await me.promises.rename(e, t);
  } catch (n) {
    if (n.code !== "EACCES" && n.code !== "EPERM" && n.code !== "EBUSY") throw n;
    if (Date.now() - i >= r) throw console.error(`[node.js fs] rename failed after ${s} retries with error: ${n}`), n;
    if (s === 0) {
      let o = false;
      try {
        const { stat: a } = await gt.stat(t);
        a.isFile() || (o = true);
      } catch {
      }
      if (o) throw n;
    }
    return await Nr(Math.min(100, s * 10)), qh(e, t, i, r, s + 1);
  }
}
async function zh(e, t, i) {
  return Kh(e, t, { root: { source: e, target: t }, options: i, handledSourcePaths: /* @__PURE__ */ new Set() });
}
var Gh = 511;
async function Kh(e, t, i) {
  if (i.handledSourcePaths.has(e)) return;
  i.handledSourcePaths.add(e);
  const { stat: r, symbolicLink: s } = await gt.stat(e);
  if (s) {
    if (i.options.preserveSymlinks) try {
      return await n4(e, t, i);
    } catch {
    }
    if (s.dangling) return;
  }
  return r.isDirectory() ? r4(e, t, r.mode & Gh, i) : s4(e, t, r.mode & Gh);
}
async function r4(e, t, i, r) {
  await me.promises.mkdir(t, { recursive: true, mode: i });
  const s = await An(e);
  for (const n of s) await Kh(H(e, n), H(t, n), r);
}
async function s4(e, t, i) {
  await me.promises.copyFile(e, t), await me.promises.chmod(t, i);
}
async function n4(e, t, i) {
  let r = await me.promises.readlink(e);
  Ht(r, i.root.source, !tt) && (r = H(i.root.target, r.substr(i.root.source.length + 1))), await me.promises.symlink(r, t);
}
var de = new class {
  get read() {
    return (e, t, i, r, s) => new Promise((n, o) => {
      me.read(e, t, i, r, s, (a, l, c) => a ? o(a) : n({ bytesRead: l, buffer: c }));
    });
  }
  get write() {
    return (e, t, i, r, s) => new Promise((n, o) => {
      me.write(e, t, i, r, s, (a, l, c) => a ? o(a) : n({ bytesWritten: l, buffer: c }));
    });
  }
  get fdatasync() {
    return cs(me.fdatasync);
  }
  get open() {
    return cs(me.open);
  }
  get close() {
    return cs(me.close);
  }
  get realpath() {
    return cs(me.realpath);
  }
  get ftruncate() {
    return cs(me.ftruncate);
  }
  async exists(e) {
    try {
      return await me.promises.access(e), true;
    } catch {
      return false;
    }
  }
  get readdir() {
    return An;
  }
  get readDirsInDir() {
    return Qv;
  }
  get writeFile() {
    return Yv;
  }
  get rm() {
    return $h;
  }
  get rename() {
    return i4;
  }
  get copy() {
    return zh;
  }
}();
b();
import { createWriteStream as jh, promises as Hh } from "fs";
var Xh = "end of central directory record signature not found", o4 = new RegExp(Xh), kn = class extends Error {
  constructor(e, t) {
    let i = t.message;
    switch (e) {
      case "CorruptZip":
        i = `Corrupt ZIP: ${i}`;
        break;
    }
    super(i), this.type = e, this.cause = t;
  }
};
function a4(e) {
  const t = e.externalFileAttributes >> 16 || 33188;
  return [448, 56, 7].map((i) => t & i).reduce((i, r) => i + r, t & 61440);
}
function Qh(e) {
  if (e instanceof kn) return e;
  let t;
  return o4.test(e.message) && (t = "CorruptZip"), new kn(t, e);
}
function l4(e, t, i, r, s, n) {
  const o = ui(t), a = H(r, o);
  if (!a.startsWith(r)) return Promise.reject(new Error(m(143, null, t)));
  const l = H(r, t);
  let c;
  return n.onCancellationRequested(() => {
    c?.destroy();
  }), Promise.resolve(Hh.mkdir(a, { recursive: true })).then(() => new Promise((h, f) => {
    if (!n.isCancellationRequested) try {
      c = jh(l, { mode: i }), c.once("close", () => h()), c.once("error", f), e.once("error", f), e.pipe(c);
    } catch (d) {
      f(d);
    }
  }));
}
function c4(e, t, i, r) {
  let s = Qt(() => Promise.resolve()), n = 0;
  const o = r.onCancellationRequested(() => {
    s.cancel(), e.close();
  });
  return new Promise((a, l) => {
    const c = new jp(), h = (f) => {
      f.isCancellationRequested || (n++, e.readEntry());
    };
    e.once("error", l), e.once("close", () => s.then(() => {
      r.isCancellationRequested || e.entryCount === n ? a() : l(new kn("Incomplete", new Error(m(144, null, n, e.entryCount))));
    }, l)), e.readEntry(), e.on("entry", (f) => {
      if (r.isCancellationRequested) return;
      if (!i.sourcePathRegex.test(f.fileName)) {
        h(r);
        return;
      }
      const d = f.fileName.replace(i.sourcePathRegex, "");
      if (/\/$/.test(d)) {
        const y = H(t, d);
        s = Qt((E) => Hh.mkdir(y, { recursive: true }).then(() => h(E)).then(void 0, l));
        return;
      }
      const p = Yh(e, f), v = a4(f);
      s = Qt((y) => c.queue(() => p.then((E) => l4(E, d, v, t, i, y).then(() => h(y)))).then(null, l));
    });
  }).finally(() => o.dispose());
}
async function Jh(e, t = false) {
  const { open: i } = await import("yauzl");
  return new Promise((r, s) => {
    i(e, t ? { lazyEntries: true } : void 0, (n, o) => {
      n ? s(Qh(n)) : r(Ql(o));
    });
  });
}
function Yh(e, t) {
  return new Promise((i, r) => {
    e.openReadStream(t, (s, n) => {
      s ? r(Qh(s)) : i(Ql(n));
    });
  });
}
async function u4(e, t) {
  const { ZipFile: i } = await import("yazl");
  return new Promise((r, s) => {
    const n = new i();
    t.forEach((a) => {
      a.contents ? n.addBuffer(typeof a.contents == "string" ? Buffer.from(a.contents, "utf8") : a.contents, a.path) : a.localPath && n.addFile(a.localPath, a.path);
    }), n.end();
    const o = jh(e);
    n.outputStream.pipe(o), n.outputStream.once("error", s), o.once("error", s), o.once("finish", () => r(e));
  });
}
function h4(e, t, i = {}, r) {
  const s = new RegExp(i.sourcePath ? `^${i.sourcePath}` : "");
  let n = Jh(e, true);
  return i.overwrite && (n = n.then((o) => de.rm(t).then(() => o))), n.then((o) => c4(o, t, { sourcePathRegex: s }, r));
}
function f4(e, t) {
  return Jh(e).then((i) => new Promise((r, s) => {
    i.on("entry", (n) => {
      n.fileName === t && Yh(i, n).then((o) => r(o), (o) => s(o));
    }), i.once("close", () => s(new Error(m(145, null, t))));
  }));
}
function Zh(e, t) {
  return f4(e, t).then((i) => new Promise((r, s) => {
    const n = [];
    i.once("error", s), i.on("data", (o) => n.push(o)), i.on("end", () => r(Buffer.concat(n)));
  }));
}
b(), b(), b(), b(), b();
var M5 = new Uint32Array(10), V5 = new Uint8Array([114, 82, 115, 101, 69, 102, 97, 113, 81, 116, 84, 100, 119, 87, 99, 122, 120, 118, 103]), W5 = new Uint16Array([107, 111, 105, 79, 106, 112, 117, 80, 104, 27496, 28520, 27752, 121, 110, 27246, 28782, 27758, 98, 109, 27757, 108]), $5 = new Uint16Array([114, 82, 29810, 115, 30579, 26483, 101, 102, 29286, 24934, 29030, 29798, 30822, 30310, 26470, 97, 113, 29809, 116, 84, 100, 119, 99, 122, 120, 118, 103]), B5 = new Uint16Array([114, 82, 29810, 115, 30579, 26483, 101, 69, 102, 29286, 24934, 29030, 29798, 30822, 30310, 26470, 97, 113, 81, 29809, 116, 84, 100, 119, 87, 99, 122, 120, 118, 103, 107, 111, 105, 79, 106, 112, 117, 80, 104, 27496, 28520, 27752, 121, 110, 27246, 28782, 27758, 98, 109, 27757, 108]);
function ef(...e) {
  return function(t, i) {
    for (let r = 0, s = e.length; r < s; r++) {
      const n = e[r](t, i);
      if (n) return n;
    }
    return null;
  };
}
var q5 = rf.bind(void 0, false), tf = rf.bind(void 0, true);
function rf(e, t, i) {
  if (!i || i.length < t.length) return null;
  let r;
  return e ? r = kc(i, t) : r = i.indexOf(t) === 0, r ? t.length > 0 ? [{ start: 0, end: t.length }] : [] : null;
}
function d4(e, t) {
  const i = t.toLowerCase().indexOf(e.toLowerCase());
  return i === -1 ? null : [{ start: i, end: i + e.length }];
}
function p4(e, t) {
  return La(e.toLowerCase(), t.toLowerCase(), 0, 0);
}
function La(e, t, i, r) {
  if (i === e.length) return [];
  if (r === t.length) return null;
  if (e[i] === t[r]) {
    let s = null;
    return (s = La(e, t, i + 1, r + 1)) ? nf({ start: r, end: r + 1 }, s) : null;
  }
  return La(e, t, i, r + 1);
}
function Ta(e) {
  return 97 <= e && e <= 122;
}
function Dn(e) {
  return 65 <= e && e <= 90;
}
function Ca(e) {
  return 48 <= e && e <= 57;
}
function g4(e) {
  return e === 32 || e === 9 || e === 10 || e === 13;
}
var m4 = /* @__PURE__ */ new Set();
"()[]{}<>`'\"-/;:,.?!".split("").forEach((e) => m4.add(e.charCodeAt(0)));
function sf(e) {
  return Ta(e) || Dn(e) || Ca(e);
}
function nf(e, t) {
  return t.length === 0 ? t = [e] : e.end === t[0].start ? t[0].start = e.start : t.unshift(e), t;
}
function of(e, t) {
  for (let i = t; i < e.length; i++) {
    const r = e.charCodeAt(i);
    if (Dn(r) || Ca(r) || i > 0 && !sf(e.charCodeAt(i - 1))) return i;
  }
  return e.length;
}
function Oa(e, t, i, r) {
  if (i === e.length) return [];
  if (r === t.length) return null;
  if (e[i] !== t[r].toLowerCase()) return null;
  {
    let s = null, n = r + 1;
    for (s = Oa(e, t, i + 1, r + 1); !s && (n = of(t, n)) < t.length; ) s = Oa(e, t, i + 1, n), n++;
    return s === null ? null : nf({ start: r, end: r + 1 }, s);
  }
}
function v4(e) {
  let t = 0, i = 0, r = 0, s = 0, n = 0;
  for (let h = 0; h < e.length; h++) n = e.charCodeAt(h), Dn(n) && t++, Ta(n) && i++, sf(n) && r++, Ca(n) && s++;
  const o = t / e.length, a = i / e.length, l = r / e.length, c = s / e.length;
  return { upperPercent: o, lowerPercent: a, alphaPercent: l, numericPercent: c };
}
function y4(e) {
  const { upperPercent: t, lowerPercent: i } = e;
  return i === 0 && t > 0.6;
}
function w4(e) {
  const { upperPercent: t, lowerPercent: i, alphaPercent: r, numericPercent: s } = e;
  return i > 0.2 && t < 0.8 && r > 0.6 && s < 0.2;
}
function _4(e) {
  let t = 0, i = 0, r = 0, s = 0;
  for (let n = 0; n < e.length; n++) r = e.charCodeAt(n), Dn(r) && t++, Ta(r) && i++, g4(r) && s++;
  return (t === 0 || i === 0) && s === 0 ? e.length <= 30 : t <= 5;
}
function af(e, t) {
  if (!t || (t = t.trim(), t.length === 0) || !_4(e)) return null;
  t.length > 60 && (t = t.substring(0, 60));
  const i = v4(t);
  if (!w4(i)) {
    if (!y4(i)) return null;
    t = t.toLowerCase();
  }
  let r = null, s = 0;
  for (e = e.toLowerCase(); s < t.length && (r = Oa(e, t, 0, s)) === null; ) s = of(t, s + 1);
  return r;
}
var z5 = ef(tf, af, d4), G5 = ef(tf, af, p4), K5 = new Ps(1e4), Ln = 128;
function Ua() {
  const e = [], t = [];
  for (let i = 0; i <= Ln; i++) t[i] = 0;
  for (let i = 0; i <= Ln; i++) e.push(t.slice(0));
  return e;
}
function lf(e) {
  const t = [];
  for (let i = 0; i <= e; i++) t[i] = 0;
  return t;
}
var j5 = lf(2 * Ln), H5 = lf(2 * Ln), X5 = Ua(), Q5 = Ua(), J5 = Ua(), cf;
((e) => {
  e.Default = [-100, 0];
  function t(i) {
    return !i || i.length === 2 && i[0] === -100 && i[1] === 0;
  }
  e.isDefault = t;
})(cf || (cf = {}));
var E4 = class {
  constructor(e, t) {
    this.firstMatchCanBeWeak = e, this.boostFullMatch = t;
  }
};
E4.default = { boostFullMatch: true, firstMatchCanBeWeak: false }, b(), b(), b();
var uf = /* @__PURE__ */ Object.create(null);
function u(e, t) {
  if (Te(t)) {
    const i = uf[t];
    if (i === void 0) throw new Error(`${e} references an unknown codicon: ${t}`);
    t = i;
  }
  return uf[e] = t, { id: e };
}
b();
var S4 = { semantic: u("semantic", 62e3), githubCopilot: u("github-copilot", 62001), plusCircle: u("plus-circle", 62002), smileySad: u("smiley-sad", 62003), smileyHappy: u("smiley-happy", 62004), smileyMedium: u("smiley-medium", 62005), sparkleStrikethrough: u("sparkle-strikethrough", 62006), keyPlusSparkle: u("key-plus-sparkle", 62007), paperclip: u("paperclip", 60500), atSign: u("at-sign", 60501), image: u("image", 60502), logo: u("logo", 60503), sparkleTwo: u("sparkle-two", 60504), logoSlash: u("logo-slash", 60505), arrowsExpand: u("arrows-expand", 60506), arrowsContract: u("arrows-contract", 60507), expandDiffUp: u("expand-diff-up", 60508), expandDiffDown: u("expand-diff-down", 60509), add: u("add", 6e4), plus: u("plus", 6e4), gistNew: u("gist-new", 6e4), repoCreate: u("repo-create", 6e4), lightbulb: u("lightbulb", 60001), lightBulb: u("light-bulb", 60001), repo: u("repo", 60002), repoDelete: u("repo-delete", 60002), gistFork: u("gist-fork", 60003), repoForked: u("repo-forked", 60003), gitPullRequest: u("git-pull-request", 60004), gitPullRequestAbandoned: u("git-pull-request-abandoned", 60004), recordKeys: u("record-keys", 60005), keyboard: u("keyboard", 60005), tag: u("tag", 60006), gitPullRequestLabel: u("git-pull-request-label", 60006), tagAdd: u("tag-add", 60006), tagRemove: u("tag-remove", 60006), person: u("person", 60007), personFollow: u("person-follow", 60007), personOutline: u("person-outline", 60007), personFilled: u("person-filled", 60007), gitBranch: u("git-branch", 60008), gitBranchCreate: u("git-branch-create", 60008), gitBranchDelete: u("git-branch-delete", 60008), sourceControl: u("source-control", 60008), mirror: u("mirror", 60009), mirrorPublic: u("mirror-public", 60009), star: u("star", 60010), starAdd: u("star-add", 60010), starDelete: u("star-delete", 60010), starEmpty: u("star-empty", 60010), comment: u("comment", 60011), commentAdd: u("comment-add", 60011), alert: u("alert", 60012), warning: u("warning", 60012), search: u("search", 60013), searchSave: u("search-save", 60013), logOut: u("log-out", 60014), signOut: u("sign-out", 60014), logIn: u("log-in", 60015), signIn: u("sign-in", 60015), eye: u("eye", 60016), eyeUnwatch: u("eye-unwatch", 60016), eyeWatch: u("eye-watch", 60016), circleFilled: u("circle-filled", 60017), primitiveDot: u("primitive-dot", 60017), closeDirty: u("close-dirty", 60017), debugBreakpoint: u("debug-breakpoint", 60017), debugBreakpointDisabled: u("debug-breakpoint-disabled", 60017), debugHint: u("debug-hint", 60017), terminalDecorationSuccess: u("terminal-decoration-success", 60017), primitiveSquare: u("primitive-square", 60018), edit: u("edit", 60019), pencil: u("pencil", 60019), info: u("info", 60020), issueOpened: u("issue-opened", 60020), gistPrivate: u("gist-private", 60021), gitForkPrivate: u("git-fork-private", 60021), lock: u("lock", 60021), mirrorPrivate: u("mirror-private", 60021), close: u("close", 60022), removeClose: u("remove-close", 60022), x: u("x", 60022), repoSync: u("repo-sync", 60023), sync: u("sync", 60023), clone: u("clone", 60024), desktopDownload: u("desktop-download", 60024), beaker: u("beaker", 60025), microscope: u("microscope", 60025), vm: u("vm", 60026), deviceDesktop: u("device-desktop", 60026), file: u("file", 60027), fileText: u("file-text", 60027), more: u("more", 60028), ellipsis: u("ellipsis", 60028), kebabHorizontal: u("kebab-horizontal", 60028), mailReply: u("mail-reply", 60029), reply: u("reply", 60029), organization: u("organization", 60030), organizationFilled: u("organization-filled", 60030), organizationOutline: u("organization-outline", 60030), newFile: u("new-file", 60031), fileAdd: u("file-add", 60031), newFolder: u("new-folder", 60032), fileDirectoryCreate: u("file-directory-create", 60032), trash: u("trash", 60033), trashcan: u("trashcan", 60033), history: u("history", 60034), clock: u("clock", 60034), folder: u("folder", 60035), fileDirectory: u("file-directory", 60035), symbolFolder: u("symbol-folder", 60035), logoGithub: u("logo-github", 60036), markGithub: u("mark-github", 60036), github: u("github", 60036), terminal: u("terminal", 60037), console: u("console", 60037), repl: u("repl", 60037), zap: u("zap", 60038), symbolEvent: u("symbol-event", 60038), error: u("error", 60039), stop: u("stop", 60039), variable: u("variable", 60040), symbolVariable: u("symbol-variable", 60040), array: u("array", 60042), symbolArray: u("symbol-array", 60042), symbolModule: u("symbol-module", 60043), symbolPackage: u("symbol-package", 60043), symbolNamespace: u("symbol-namespace", 60043), symbolObject: u("symbol-object", 60043), symbolMethod: u("symbol-method", 60044), symbolFunction: u("symbol-function", 60044), symbolConstructor: u("symbol-constructor", 60044), symbolBoolean: u("symbol-boolean", 60047), symbolNull: u("symbol-null", 60047), symbolNumeric: u("symbol-numeric", 60048), symbolNumber: u("symbol-number", 60048), symbolStructure: u("symbol-structure", 60049), symbolStruct: u("symbol-struct", 60049), symbolParameter: u("symbol-parameter", 60050), symbolTypeParameter: u("symbol-type-parameter", 60050), symbolKey: u("symbol-key", 60051), symbolText: u("symbol-text", 60051), symbolReference: u("symbol-reference", 60052), goToFile: u("go-to-file", 60052), symbolEnum: u("symbol-enum", 60053), symbolValue: u("symbol-value", 60053), symbolRuler: u("symbol-ruler", 60054), symbolUnit: u("symbol-unit", 60054), activateBreakpoints: u("activate-breakpoints", 60055), archive: u("archive", 60056), arrowBoth: u("arrow-both", 60057), arrowDown: u("arrow-down", 60058), arrowLeft: u("arrow-left", 60059), arrowRight: u("arrow-right", 60060), arrowSmallDown: u("arrow-small-down", 60061), arrowSmallLeft: u("arrow-small-left", 60062), arrowSmallRight: u("arrow-small-right", 60063), arrowSmallUp: u("arrow-small-up", 60064), arrowUp: u("arrow-up", 60065), bell: u("bell", 60066), bold: u("bold", 60067), book: u("book", 60068), bookmark: u("bookmark", 60069), debugBreakpointConditionalUnverified: u("debug-breakpoint-conditional-unverified", 60070), debugBreakpointConditional: u("debug-breakpoint-conditional", 60071), debugBreakpointConditionalDisabled: u("debug-breakpoint-conditional-disabled", 60071), debugBreakpointDataUnverified: u("debug-breakpoint-data-unverified", 60072), debugBreakpointData: u("debug-breakpoint-data", 60073), debugBreakpointDataDisabled: u("debug-breakpoint-data-disabled", 60073), debugBreakpointLogUnverified: u("debug-breakpoint-log-unverified", 60074), debugBreakpointLog: u("debug-breakpoint-log", 60075), debugBreakpointLogDisabled: u("debug-breakpoint-log-disabled", 60075), briefcase: u("briefcase", 60076), broadcast: u("broadcast", 60077), browser: u("browser", 60078), bug: u("bug", 60079), calendar: u("calendar", 60080), caseSensitive: u("case-sensitive", 60081), check: u("check", 60082), checklist: u("checklist", 60083), chevronDown: u("chevron-down", 60084), chevronLeft: u("chevron-left", 60085), chevronRight: u("chevron-right", 60086), chevronUp: u("chevron-up", 60087), chromeClose: u("chrome-close", 60088), chromeMaximize: u("chrome-maximize", 60089), chromeMinimize: u("chrome-minimize", 60090), chromeRestore: u("chrome-restore", 60091), circleOutline: u("circle-outline", 60092), circle: u("circle", 60092), debugBreakpointUnverified: u("debug-breakpoint-unverified", 60092), terminalDecorationIncomplete: u("terminal-decoration-incomplete", 60092), circleSlash: u("circle-slash", 60093), circuitBoard: u("circuit-board", 60094), clearAll: u("clear-all", 60095), clippy: u("clippy", 60096), closeAll: u("close-all", 60097), cloudDownload: u("cloud-download", 60098), cloudUpload: u("cloud-upload", 60099), code: u("code", 60100), collapseAll: u("collapse-all", 60101), colorMode: u("color-mode", 60102), commentDiscussion: u("comment-discussion", 60103), creditCard: u("credit-card", 60105), dash: u("dash", 60108), dashboard: u("dashboard", 60109), database: u("database", 60110), debugContinue: u("debug-continue", 60111), debugDisconnect: u("debug-disconnect", 60112), debugPause: u("debug-pause", 60113), debugRestart: u("debug-restart", 60114), debugStart: u("debug-start", 60115), debugStepInto: u("debug-step-into", 60116), debugStepOut: u("debug-step-out", 60117), debugStepOver: u("debug-step-over", 60118), debugStop: u("debug-stop", 60119), debug: u("debug", 60120), deviceCameraVideo: u("device-camera-video", 60121), deviceCamera: u("device-camera", 60122), deviceMobile: u("device-mobile", 60123), diffAdded: u("diff-added", 60124), diffIgnored: u("diff-ignored", 60125), diffModified: u("diff-modified", 60126), diffRemoved: u("diff-removed", 60127), diffRenamed: u("diff-renamed", 60128), diff: u("diff", 60129), diffSidebyside: u("diff-sidebyside", 60129), discard: u("discard", 60130), editorLayout: u("editor-layout", 60131), emptyWindow: u("empty-window", 60132), exclude: u("exclude", 60133), extensions: u("extensions", 60134), eyeClosed: u("eye-closed", 60135), fileBinary: u("file-binary", 60136), fileCode: u("file-code", 60137), fileMedia: u("file-media", 60138), filePdf: u("file-pdf", 60139), fileSubmodule: u("file-submodule", 60140), fileSymlinkDirectory: u("file-symlink-directory", 60141), fileSymlinkFile: u("file-symlink-file", 60142), fileZip: u("file-zip", 60143), files: u("files", 60144), filter: u("filter", 60145), flame: u("flame", 60146), foldDown: u("fold-down", 60147), foldUp: u("fold-up", 60148), fold: u("fold", 60149), folderActive: u("folder-active", 60150), folderOpened: u("folder-opened", 60151), gear: u("gear", 60152), gift: u("gift", 60153), gistSecret: u("gist-secret", 60154), gist: u("gist", 60155), gitCommit: u("git-commit", 60156), gitCompare: u("git-compare", 60157), compareChanges: u("compare-changes", 60157), gitMerge: u("git-merge", 60158), githubAction: u("github-action", 60159), githubAlt: u("github-alt", 60160), globe: u("globe", 60161), grabber: u("grabber", 60162), graph: u("graph", 60163), gripper: u("gripper", 60164), heart: u("heart", 60165), home: u("home", 60166), horizontalRule: u("horizontal-rule", 60167), hubot: u("hubot", 60168), inbox: u("inbox", 60169), issueReopened: u("issue-reopened", 60171), issues: u("issues", 60172), italic: u("italic", 60173), jersey: u("jersey", 60174), json: u("json", 60175), kebabVertical: u("kebab-vertical", 60176), key: u("key", 60177), law: u("law", 60178), lightbulbAutofix: u("lightbulb-autofix", 60179), linkExternal: u("link-external", 60180), link: u("link", 60181), listOrdered: u("list-ordered", 60182), listUnordered: u("list-unordered", 60183), liveShare: u("live-share", 60184), loading: u("loading", 60185), location: u("location", 60186), mailRead: u("mail-read", 60187), mail: u("mail", 60188), markdown: u("markdown", 60189), megaphone: u("megaphone", 60190), mention: u("mention", 60191), milestone: u("milestone", 60192), gitPullRequestMilestone: u("git-pull-request-milestone", 60192), mortarBoard: u("mortar-board", 60193), move: u("move", 60194), multipleWindows: u("multiple-windows", 60195), mute: u("mute", 60196), noNewline: u("no-newline", 60197), note: u("note", 60198), octoface: u("octoface", 60199), openPreview: u("open-preview", 60200), package: u("package", 60201), paintcan: u("paintcan", 60202), pin: u("pin", 60203), play: u("play", 60204), run: u("run", 60204), plug: u("plug", 60205), preserveCase: u("preserve-case", 60206), preview: u("preview", 60207), project: u("project", 60208), pulse: u("pulse", 60209), question: u("question", 60210), quote: u("quote", 60211), radioTower: u("radio-tower", 60212), reactions: u("reactions", 60213), references: u("references", 60214), refresh: u("refresh", 60215), regex: u("regex", 60216), remoteExplorer: u("remote-explorer", 60217), remote: u("remote", 60218), remove: u("remove", 60219), replaceAll: u("replace-all", 60220), replace: u("replace", 60221), repoClone: u("repo-clone", 60222), repoForcePush: u("repo-force-push", 60223), repoPull: u("repo-pull", 60224), repoPush: u("repo-push", 60225), report: u("report", 60226), requestChanges: u("request-changes", 60227), rocket: u("rocket", 60228), rootFolderOpened: u("root-folder-opened", 60229), rootFolder: u("root-folder", 60230), rss: u("rss", 60231), ruby: u("ruby", 60232), saveAll: u("save-all", 60233), saveAs: u("save-as", 60234), save: u("save", 60235), screenFull: u("screen-full", 60236), screenNormal: u("screen-normal", 60237), searchStop: u("search-stop", 60238), server: u("server", 60240), settingsGear: u("settings-gear", 60241), settings: u("settings", 60242), shield: u("shield", 60243), smiley: u("smiley", 60244), sortPrecedence: u("sort-precedence", 60245), splitHorizontal: u("split-horizontal", 60246), splitVertical: u("split-vertical", 60247), squirrel: u("squirrel", 60248), starFull: u("star-full", 60249), starHalf: u("star-half", 60250), symbolClass: u("symbol-class", 60251), symbolColor: u("symbol-color", 60252), symbolConstant: u("symbol-constant", 60253), symbolEnumMember: u("symbol-enum-member", 60254), symbolField: u("symbol-field", 60255), symbolFile: u("symbol-file", 60256), symbolInterface: u("symbol-interface", 60257), symbolKeyword: u("symbol-keyword", 60258), symbolMisc: u("symbol-misc", 60259), symbolOperator: u("symbol-operator", 60260), symbolProperty: u("symbol-property", 60261), wrench: u("wrench", 60261), wrenchSubaction: u("wrench-subaction", 60261), symbolSnippet: u("symbol-snippet", 60262), tasklist: u("tasklist", 60263), telescope: u("telescope", 60264), textSize: u("text-size", 60265), threeBars: u("three-bars", 60266), thumbsdown: u("thumbsdown", 60267), thumbsup: u("thumbsup", 60268), tools: u("tools", 60269), triangleDown: u("triangle-down", 60270), triangleLeft: u("triangle-left", 60271), triangleRight: u("triangle-right", 60272), triangleUp: u("triangle-up", 60273), twitter: u("twitter", 60274), unfold: u("unfold", 60275), unlock: u("unlock", 60276), unmute: u("unmute", 60277), unverified: u("unverified", 60278), verified: u("verified", 60279), versions: u("versions", 60280), vmActive: u("vm-active", 60281), vmOutline: u("vm-outline", 60282), vmRunning: u("vm-running", 60283), watch: u("watch", 60284), whitespace: u("whitespace", 60285), wholeWord: u("whole-word", 60286), window: u("window", 60287), wordWrap: u("word-wrap", 60288), zoomIn: u("zoom-in", 60289), zoomOut: u("zoom-out", 60290), listFilter: u("list-filter", 60291), listFlat: u("list-flat", 60292), listSelection: u("list-selection", 60293), selection: u("selection", 60293), listTree: u("list-tree", 60294), debugBreakpointFunctionUnverified: u("debug-breakpoint-function-unverified", 60295), debugBreakpointFunction: u("debug-breakpoint-function", 60296), debugBreakpointFunctionDisabled: u("debug-breakpoint-function-disabled", 60296), debugStackframeActive: u("debug-stackframe-active", 60297), circleSmallFilled: u("circle-small-filled", 60298), debugStackframeDot: u("debug-stackframe-dot", 60298), terminalDecorationMark: u("terminal-decoration-mark", 60298), debugStackframe: u("debug-stackframe", 60299), debugStackframeFocused: u("debug-stackframe-focused", 60299), debugBreakpointUnsupported: u("debug-breakpoint-unsupported", 60300), symbolString: u("symbol-string", 60301), debugReverseContinue: u("debug-reverse-continue", 60302), debugStepBack: u("debug-step-back", 60303), debugRestartFrame: u("debug-restart-frame", 60304), debugAlt: u("debug-alt", 60305), callIncoming: u("call-incoming", 60306), callOutgoing: u("call-outgoing", 60307), menu: u("menu", 60308), expandAll: u("expand-all", 60309), feedback: u("feedback", 60310), gitPullRequestReviewer: u("git-pull-request-reviewer", 60310), groupByRefType: u("group-by-ref-type", 60311), ungroupByRefType: u("ungroup-by-ref-type", 60312), account: u("account", 60313), gitPullRequestAssignee: u("git-pull-request-assignee", 60313), bellDot: u("bell-dot", 60314), debugConsole: u("debug-console", 60315), library: u("library", 60316), output: u("output", 60317), runAll: u("run-all", 60318), syncIgnored: u("sync-ignored", 60319), pinned: u("pinned", 60320), githubInverted: u("github-inverted", 60321), serverProcess: u("server-process", 60322), serverEnvironment: u("server-environment", 60323), pass: u("pass", 60324), issueClosed: u("issue-closed", 60324), stopCircle: u("stop-circle", 60325), playCircle: u("play-circle", 60326), record: u("record", 60327), debugAltSmall: u("debug-alt-small", 60328), vmConnect: u("vm-connect", 60329), cloud: u("cloud", 60330), merge: u("merge", 60331), export: u("export", 60332), graphLeft: u("graph-left", 60333), magnet: u("magnet", 60334), notebook: u("notebook", 60335), redo: u("redo", 60336), checkAll: u("check-all", 60337), pinnedDirty: u("pinned-dirty", 60338), passFilled: u("pass-filled", 60339), circleLargeFilled: u("circle-large-filled", 60340), circleLarge: u("circle-large", 60341), circleLargeOutline: u("circle-large-outline", 60341), combine: u("combine", 60342), gather: u("gather", 60342), table: u("table", 60343), variableGroup: u("variable-group", 60344), typeHierarchy: u("type-hierarchy", 60345), typeHierarchySub: u("type-hierarchy-sub", 60346), typeHierarchySuper: u("type-hierarchy-super", 60347), gitPullRequestCreate: u("git-pull-request-create", 60348), runAbove: u("run-above", 60349), runBelow: u("run-below", 60350), notebookTemplate: u("notebook-template", 60351), debugRerun: u("debug-rerun", 60352), workspaceTrusted: u("workspace-trusted", 60353), workspaceUntrusted: u("workspace-untrusted", 60354), workspaceUnknown: u("workspace-unknown", 60355), terminalCmd: u("terminal-cmd", 60356), terminalDebian: u("terminal-debian", 60357), terminalLinux: u("terminal-linux", 60358), terminalPowershell: u("terminal-powershell", 60359), terminalTmux: u("terminal-tmux", 60360), terminalUbuntu: u("terminal-ubuntu", 60361), terminalBash: u("terminal-bash", 60362), arrowSwap: u("arrow-swap", 60363), copy: u("copy", 60364), personAdd: u("person-add", 60365), filterFilled: u("filter-filled", 60366), wand: u("wand", 60367), debugLineByLine: u("debug-line-by-line", 60368), inspect: u("inspect", 60369), layers: u("layers", 60370), layersDot: u("layers-dot", 60371), layersActive: u("layers-active", 60372), compass: u("compass", 60373), compassDot: u("compass-dot", 60374), compassActive: u("compass-active", 60375), azure: u("azure", 60376), issueDraft: u("issue-draft", 60377), gitPullRequestClosed: u("git-pull-request-closed", 60378), gitPullRequestDraft: u("git-pull-request-draft", 60379), debugAll: u("debug-all", 60380), debugCoverage: u("debug-coverage", 60381), runErrors: u("run-errors", 60382), folderLibrary: u("folder-library", 60383), debugContinueSmall: u("debug-continue-small", 60384), beakerStop: u("beaker-stop", 60385), graphLine: u("graph-line", 60386), graphScatter: u("graph-scatter", 60387), pieChart: u("pie-chart", 60388), bracket: u("bracket", 60175), bracketDot: u("bracket-dot", 60389), bracketError: u("bracket-error", 60390), lockSmall: u("lock-small", 60391), azureDevops: u("azure-devops", 60392), verifiedFilled: u("verified-filled", 60393), newline: u("newline", 60394), layout: u("layout", 60395), layoutActivitybarLeft: u("layout-activitybar-left", 60396), layoutActivitybarRight: u("layout-activitybar-right", 60397), layoutPanelLeft: u("layout-panel-left", 60398), layoutPanelCenter: u("layout-panel-center", 60399), layoutPanelJustify: u("layout-panel-justify", 60400), layoutPanelRight: u("layout-panel-right", 60401), layoutPanel: u("layout-panel", 60402), layoutSidebarLeft: u("layout-sidebar-left", 60403), layoutSidebarRight: u("layout-sidebar-right", 60404), layoutStatusbar: u("layout-statusbar", 60405), layoutMenubar: u("layout-menubar", 60406), layoutCentered: u("layout-centered", 60407), target: u("target", 60408), indent: u("indent", 60409), recordSmall: u("record-small", 60410), errorSmall: u("error-small", 60411), terminalDecorationError: u("terminal-decoration-error", 60411), arrowCircleDown: u("arrow-circle-down", 60412), arrowCircleLeft: u("arrow-circle-left", 60413), arrowCircleRight: u("arrow-circle-right", 60414), arrowCircleUp: u("arrow-circle-up", 60415), layoutSidebarRightOff: u("layout-sidebar-right-off", 60416), layoutPanelOff: u("layout-panel-off", 60417), layoutSidebarLeftOff: u("layout-sidebar-left-off", 60418), blank: u("blank", 60419), heartFilled: u("heart-filled", 60420), map: u("map", 60421), mapHorizontal: u("map-horizontal", 60421), foldHorizontal: u("fold-horizontal", 60421), mapFilled: u("map-filled", 60422), mapHorizontalFilled: u("map-horizontal-filled", 60422), foldHorizontalFilled: u("fold-horizontal-filled", 60422), circleSmall: u("circle-small", 60423), bellSlash: u("bell-slash", 60424), bellSlashDot: u("bell-slash-dot", 60425), commentUnresolved: u("comment-unresolved", 60426), gitPullRequestGoToChanges: u("git-pull-request-go-to-changes", 60427), gitPullRequestNewChanges: u("git-pull-request-new-changes", 60428), searchFuzzy: u("search-fuzzy", 60429), commentDraft: u("comment-draft", 60430), send: u("send", 60431), sparkle: u("sparkle", 60432), insert: u("insert", 60433), mic: u("mic", 60434), thumbsdownFilled: u("thumbsdown-filled", 60435), thumbsupFilled: u("thumbsup-filled", 60436), coffee: u("coffee", 60437), snake: u("snake", 60438), game: u("game", 60439), vr: u("vr", 60440), chip: u("chip", 60441), piano: u("piano", 60442), music: u("music", 60443), micFilled: u("mic-filled", 60444), repoFetch: u("repo-fetch", 60445), copilot: u("copilot", 60446), lightbulbSparkle: u("lightbulb-sparkle", 60447), robot: u("robot", 60448), sparkleFilled: u("sparkle-filled", 60449), diffSingle: u("diff-single", 60450), diffMultiple: u("diff-multiple", 60451), surroundWith: u("surround-with", 60452), share: u("share", 60453), gitStash: u("git-stash", 60454), gitStashApply: u("git-stash-apply", 60455), gitStashPop: u("git-stash-pop", 60456), vscode: u("vscode", 60457), vscodeInsiders: u("vscode-insiders", 60458), codeOss: u("code-oss", 60459), runCoverage: u("run-coverage", 60460), runAllCoverage: u("run-all-coverage", 60461), coverage: u("coverage", 60462), githubProject: u("github-project", 60463), mapVertical: u("map-vertical", 60464), foldVertical: u("fold-vertical", 60464), mapVerticalFilled: u("map-vertical-filled", 60465), foldVerticalFilled: u("fold-vertical-filled", 60465), goToSearch: u("go-to-search", 60466), percentage: u("percentage", 60467), sortPercentage: u("sort-percentage", 60467), attach: u("attach", 60468), goToEditingSession: u("go-to-editing-session", 60469), editSession: u("edit-session", 60470), codeReview: u("code-review", 60471), copilotWarning: u("copilot-warning", 60472), python: u("python", 60473), copilotLarge: u("copilot-large", 60474), copilotWarningLarge: u("copilot-warning-large", 60475), keyboardTab: u("keyboard-tab", 60476), copilotBlocked: u("copilot-blocked", 60477), copilotNotConnected: u("copilot-not-connected", 60478), flag: u("flag", 60479), lightbulbEmpty: u("lightbulb-empty", 60480), symbolMethodArrow: u("symbol-method-arrow", 60481), copilotUnavailable: u("copilot-unavailable", 60482), repoPinned: u("repo-pinned", 60483), keyboardTabAbove: u("keyboard-tab-above", 60484), keyboardTabBelow: u("keyboard-tab-below", 60485), gitPullRequestDone: u("git-pull-request-done", 60486), mcp: u("mcp", 60487), extensionsLarge: u("extensions-large", 60488), layoutPanelDock: u("layout-panel-dock", 60489), layoutSidebarLeftDock: u("layout-sidebar-left-dock", 60490), layoutSidebarRightDock: u("layout-sidebar-right-dock", 60491), terminalTwo: u("terminal-two", 60800), checkTwo: u("check-two", 60801), xTwo: u("x-two", 60802), expander: u("expander", 60803), restore: u("restore", 60804), pinTwo: u("pin-two", 60805), stopTwo: u("stop-two", 60806), brain: u("brain", 60807), magnifyingGlass: u("magnifying-glass", 60808), imageTwo: u("image-two", 60809), microphone: u("microphone", 60810), submit: u("submit", 60811), running: u("running", 60812), fileAddTwo: u("file-add-two", 60813), infinity: u("infinity", 60814), editTwo: u("edit-two", 60815), stopThree: u("stop-three", 60816), warningTwo: u("warning-two", 60817), arrowLeftTwo: u("arrow-left-two", 60818), redoTwo: u("redo-two", 60819), infoTwo: u("info-two", 60820), chat: u("chat", 60821), thumbsDown: u("thumbs-down", 60822), thumbsUp: u("thumbs-up", 60823), thumbsDownFilled: u("thumbs-down-filled", 60824), thumbsUpFilled: u("thumbs-up-filled", 60825), copyTwo: u("copy-two", 60826), ellipsisTwo: u("ellipsis-two", 60827), eyeTwo: u("eye-two", 60828), globeTwo: u("globe-two", 60829), reload: u("reload", 60830), folderTwo: u("folder-two", 60831), eraser: u("eraser", 60832), swirlSparkle: u("swirl-sparkle", 60833), sendTwo: u("send-two", 60834), inboxTwo: u("inbox-two", 60835), fileTwo: u("file-two", 60836), list: u("list", 60837), calendarTwo: u("calendar-two", 60838), openNotebook: u("open-notebook", 60839), paperWords: u("paper-words", 60840), mortarboard: u("mortarboard", 60841), lightning: u("lightning", 60842), hammer: u("hammer", 60843), keyboardTwo: u("keyboard-two", 60844), arrowUpTwo: u("arrow-up-two", 60845), import: u("import", 60846), targetTwo: u("target-two", 60847), tab: u("tab", 60848), magic: u("magic", 60849), cloneTwo: u("clone-two", 60850), brush: u("brush", 60851), branch: u("branch", 60852), addTwo: u("add-two", 60853), historyTwo: u("history-two", 60854), cloudTwo: u("cloud-two", 60855), review: u("review", 60856), plusSquare: u("plus-square", 60857), checkCircled: u("check-circled", 60858), dottedCircle: u("dotted-circle", 60859), warnCircle: u("warn-circle", 60860), downLocalMachine: u("down-local-machine", 60861), mergeUpwards: u("merge-upwards", 60862), asterisk: u("asterisk", 60863), time: u("time", 60864), arrowUpRight: u("arrow-up-right", 60865), arrowUpRightSquare: u("arrow-up-right-square", 60866), bubbleAndPencil: u("bubble-and-pencil", 60867), downloadOnSquare: u("download-on-square", 60868), shippingBox: u("shipping-box", 60869), chevronForwardDotted: u("chevron-forward-dotted", 60870), cylinderSplit: u("cylinder-split", 60871), cubeNodes: u("cube-nodes", 60872), clipboardList: u("clipboard-list", 60873), circleShine: u("circle-shine", 60874), chevronUpDown: u("chevron-up-down", 60875), cube: u("cube", 60876), telecom: u("telecom", 60877), micTwo: u("mic-two", 60878), hourglass: u("hourglass", 60879), todos: u("todos", 60880), hourglassTwo: u("hourglass-two", 60881), laptop: u("laptop", 60882), grep: u("grep", 60883), chevronDblLeft: u("chevron-dbl-left", 60884), chevronDblRight: u("chevron-dbl-right", 62237), squareAndPencil: u("square-and-pencil", 60885), doubleTerminal: u("double-terminal", 60886), sidebarLeft: u("sidebar-left", 60887), filesTwo: u("files-two", 60888), cursor: u("cursor", 60889), testIcon3: u("test-icon-3", 60890), testIcon4: u("test-icon-4", 60891), testIconic: u("test-iconic", 60892), compose: u("compose", 60893), composeTwo: u("compose-two", 60894), cursorOutlineTransparent: u("cursor-outline-transparent", 60895), cursorFrame: u("cursor-frame", 60896), cursorFrames: u("cursor-frames", 60897), cursorBigger: u("cursor-bigger", 60898), cursorBiggest: u("cursor-biggest", 60899), terminalFilled: u("terminal-filled", 60900), rectangleDashed: u("rectangle-dashed", 60901), squareArrow: u("square-arrow", 60902), unfoldVertical: u("unfold-vertical", 60903), unfoldDashed: u("unfold-dashed", 60904), foldDashed: u("fold-dashed", 60905), playwright: u("playwright", 60906), searchSparkle: u("search-sparkle", 60496), settingsRound: u("settings-round", 60497), panelRounded: u("panel-rounded", 60498), fileList: u("file-list", 60499), rectangleArrow: u("rectangle-arrow", 60500), rectangleGlobe: u("rectangle-globe", 60501), rules: u("rules", 60502), squaresArrow: u("squares-arrow", 60504), bugbot: u("bugbot", 60505), thinking: u("thinking", 60506), splitDashed: u("split-dashed", 60507), splitPanel: u("split-panel", 60508), splitFile: u("split-file", 62008), splitDash: u("split-dash", 62009), panelExpand: u("panel-expand", 62010), panelCollapse: u("panel-collapse", 62011), chatQuestion: u("chat-question", 62012), branchDot: u("branch-dot", 62013), gitBranchDot: u("git-branch-dot", 62014), alignTop: u("align-top", 62023), alignHcenter: u("align-hcenter", 62024), alignVcenter: u("align-vcenter", 62025), alignBottom: u("align-bottom", 62026), alignRight: u("align-right", 62027), alignLeft: u("align-left", 62028), angle: u("angle", 62029), alignBottomfill: u("align-bottomfill", 62030), alignHcenterfill: u("align-hcenterfill", 62031), alignLeftfill: u("align-leftfill", 62032), alignRightfill: u("align-rightfill", 62033), alignTopfill: u("align-topfill", 62034), alignVcenterfill: u("align-vcenterfill", 62035), freeform: u("freeform", 62036), layoutGrid: u("layout-grid", 62037), corners: u("corners", 62038), opacity: u("opacity", 62039), maximize: u("maximize", 62040), minimize: u("minimize", 62041), panelBottomon: u("panel-bottomon", 62042), panelBottomoff: u("panel-bottomoff", 62043), panelFrame: u("panel-frame", 62044), panelBottomOverlay: u("panel-bottom-overlay", 62045), panelRightOverlay: u("panel-right-overlay", 62046), panelLeftOverlay: u("panel-left-overlay", 62047), chatRounded: u("chat-rounded", 62048), fileRounded: u("file-rounded", 62049), judge: u("judge", 62050), minmize: u("minmize", 62051), borderAll: u("border-all", 62052), borderBottom: u("border-bottom", 62053), borderLeft: u("border-left", 62054), borderRight: u("border-right", 62055), borderTop: u("border-top", 62056), rotate: u("rotate", 62057), flipVertical: u("flip-vertical", 62058), flipHorizontal: u("flip-horizontal", 62059), padVertical: u("pad-vertical", 62060), padHorizontal: u("pad-horizontal", 62061), padTop: u("pad-top", 62062), padLeft: u("pad-left", 62063), padRight: u("pad-right", 62064), padBottom: u("pad-bottom", 62065), weight: u("weight", 62066), padAll: u("pad-all", 62067), absolutePosition: u("absolute-position", 62068), minWidth: u("min-width", 62069), maxWidth: u("max-width", 62070), hug: u("hug", 62071), fixed: u("fixed", 62072), removeWidth: u("remove-width", 62073), fillWidth: u("fill-width", 62074), letterSpacing: u("letter-spacing", 62075), lineHeight: u("line-height", 62076), leftAlign: u("left-align", 62077), centerAlign: u("center-align", 62078), rightAlign: u("right-align", 62079), textTop: u("text-top", 62080), textCenter: u("text-center", 62081), textBottom: u("text-bottom", 62082), layerBlur: u("layer-blur", 62083), backgroundBlur: u("background-blur", 62084), cornerTl: u("corner-tl", 62085), cornerTr: u("corner-tr", 62086), cornerBl: u("corner-bl", 62087), cornerBr: u("corner-br", 62088), flowCol: u("flow-col", 62089), flowRow: u("flow-row", 62090), gap: u("gap", 62091), gridCol: u("grid-col", 62092), gridRow: u("grid-row", 62093), sun: u("sun", 62094), unlink: u("unlink", 62095), arrowFilled: u("arrow-filled", 62096) }, b4 = { dialogError: u("dialog-error", "error"), dialogWarning: u("dialog-warning", "warning"), dialogInfo: u("dialog-info", "info"), dialogClose: u("dialog-close", "close"), treeItemExpanded: u("tree-item-expanded", "chevron-down"), treeFilterOnTypeOn: u("tree-filter-on-type-on", "list-filter"), treeFilterOnTypeOff: u("tree-filter-on-type-off", "list-selection"), treeFilterClear: u("tree-filter-clear", "close"), treeItemLoading: u("tree-item-loading", "loading"), menuSelection: u("menu-selection", "check"), menuSubmenu: u("menu-submenu", "chevron-right"), menuBarMore: u("menubar-more", "more"), scrollbarButtonLeft: u("scrollbar-button-left", "triangle-left"), scrollbarButtonRight: u("scrollbar-button-right", "triangle-right"), scrollbarButtonUp: u("scrollbar-button-up", "triangle-up"), scrollbarButtonDown: u("scrollbar-button-down", "triangle-down"), toolBarMore: u("toolbar-more", "more"), quickInputBack: u("quick-input-back", "arrow-left"), dropDownButton: u("drop-down-button", 60084), symbolCustomColor: u("symbol-customcolor", 60252), exportIcon: u("export", 60332), workspaceUnspecified: u("workspace-unspecified", 60355), newLine: u("newline", 60394), gitFetch: u("git-fetch", 60445), lightbulbSparkleAutofix: u("lightbulb-sparkle-autofix", 60447), debugBreakpointPending: u("debug-breakpoint-pending", 60377), circles: u("circles", 62352) }, yr = { ...S4, ...b4 }, Na;
((e) => {
  function t(i) {
    return i && typeof i == "object" && typeof i.id == "string";
  }
  e.isThemeColor = t;
})(Na || (Na = {}));
var us;
((e) => {
  e.iconNameSegment = "[A-Za-z0-9]+", e.iconNameExpression = "[A-Za-z0-9-]+", e.iconModifierExpression = "~[A-Za-z]+", e.iconNameCharacter = "[A-Za-z0-9~-]";
  const t = new RegExp(`^(${e.iconNameExpression})(${e.iconModifierExpression})?$`);
  function i(d) {
    if (!d) return i(yr.error);
    const p = t.exec(d.id);
    if (!p) return i(yr.error);
    const [, v, y] = p, E = ["codicon", "codicon-" + v];
    return y && E.push("codicon-modifier-" + y.substring(1)), E;
  }
  e.asClassNameArray = i;
  function r(d) {
    if (!d) return r(yr.error);
    const p = t.exec(d.id);
    if (!p) return r(yr.error);
    const [, v, y] = p;
    let E = `codicon codicon-${v}`;
    return y && (E += ` codicon-modifier-${y.substring(1)}`), E;
  }
  e.asClassName = r;
  function s(d) {
    if (!d) return s(yr.error);
    const p = t.exec(d.id);
    if (!p) return s(yr.error);
    const [, v, y] = p;
    let E = `.codicon.codicon-${v}`;
    return y && (E += `.codicon-modifier-${y.substring(1)}`), E;
  }
  e.asCSSSelector = s;
  function n(d) {
    return d && typeof d == "object" && typeof d.id == "string" && (typeof d.color > "u" || Na.isThemeColor(d.color));
  }
  e.isThemeIcon = n;
  const o = new RegExp(`^\\$\\((${e.iconNameExpression}(?:${e.iconModifierExpression})?)\\)$`);
  function a(d) {
    const p = o.exec(d);
    if (!p) return;
    const [, v] = p;
    return { id: v };
  }
  e.fromString = a;
  function l(d) {
    return { id: d };
  }
  e.fromId = l;
  function c(d, p) {
    let v = d.id;
    const y = v.lastIndexOf("~");
    return y !== -1 && (v = v.substring(0, y)), p && (v = `${v}~${p}`), { id: v };
  }
  e.modify = c;
  function h(d) {
    const p = d.id.lastIndexOf("~");
    if (p !== -1) return d.id.substring(p + 1);
  }
  e.getModifier = h;
  function f(d, p) {
    return d.id === p.id && d.color?.id === p.color?.id;
  }
  e.isEqual = f;
})(us || (us = {}));
var Fa = new RegExp(`\\$\\(${us.iconNameExpression}(?:${us.iconModifierExpression})?\\)`, "g"), x4 = new RegExp(`(\\\\)?${Fa.source}`, "g");
function I4(e) {
  return e.replace(x4, (t, i) => i ? t : `\\${t}`);
}
var Y5 = new RegExp(`\\\\${Fa.source}`, "g"), Z5 = new RegExp(`(\\s)?(\\\\)?${Fa.source}(\\s)?`, "g"), e6 = new RegExp(`\\$\\(${us.iconNameCharacter}+\\)`, "g"), $i = class fd {
  static lift(t) {
    const i = new fd(t.value, t);
    return i.uris = t.uris, i.baseUri = t.baseUri ? k.revive(t.baseUri) : void 0, i;
  }
  constructor(t = "", i = false) {
    if (this.value = t, typeof this.value != "string") throw Dd("value");
    typeof i == "boolean" ? (this.isTrusted = i, this.supportThemeIcons = false, this.supportHtml = false) : (this.isTrusted = i.isTrusted ?? void 0, this.supportThemeIcons = i.supportThemeIcons ?? false, this.supportHtml = i.supportHtml ?? false);
  }
  appendText(t, i = 0) {
    return this.value += P4(this.supportThemeIcons ? I4(t) : t).replace(/([ \t]+)/g, (r, s) => "&nbsp;".repeat(s.length)).replace(/\>/gm, "\\>").replace(/\n/g, i === 1 ? `\\
` : `

`), this;
  }
  appendMarkdown(t) {
    return this.value += t, this;
  }
  appendCodeblock(t, i) {
    return this.value += `
${R4(i, t)}
`, this;
  }
  appendLink(t, i, r) {
    return this.value += "[", this.value += this._escape(i, "]"), this.value += "](", this.value += this._escape(String(t), ")"), r && (this.value += ` "${this._escape(this._escape(r, '"'), ")")}"`), this.value += ")", this;
  }
  _escape(t, i) {
    const r = new RegExp(er(i), "g");
    return t.replace(r, (s, n) => t.charAt(n - 1) !== "\\" ? `\\${s}` : s);
  }
};
function P4(e) {
  return e.replace(/[\\`*_{}[\]()#+\-!~]/g, "\\$&");
}
function R4(e, t) {
  const i = e.match(/^`+/gm)?.reduce((s, n) => s.length > n.length ? s : n).length ?? 0, r = i >= 3 ? i + 1 : 3;
  return [`${"`".repeat(r)}${t}`, e, `${"`".repeat(r)}`].join(`
`);
}
var Ma = class extends X {
  constructor(e, t) {
    super(), this.productService = e, this.allowedExtensionsService = t;
  }
  async canInstall(e) {
    const t = this.allowedExtensionsService.isAllowed({ id: e.identifier.id, publisherDisplayName: e.publisherDisplayName });
    if (t !== true) return new $i(m(1921, null, t.value));
    if (!await this.isExtensionPlatformCompatible(e)) {
      const i = zt ? "https://aka.ms/vscode-web-extensions-guide" : "https://aka.ms/vscode-platform-specific-extensions";
      return new $i(`${m(1922, null, e.displayName ?? e.identifier.id, this.productService.nameLong, lh(await this.getTargetPlatform()))} [${m(1923, null)}](${i})`);
    }
    return true;
  }
  async isExtensionPlatformCompatible(e) {
    const t = await this.getTargetPlatform();
    return e.allTargetPlatforms.some((i) => oa(i, e.allTargetPlatforms, t));
  }
  createImportInstallOptions(e) {
    return { ...e, context: { ...e?.context, [rm]: true } };
  }
};
Ma = N([x(0, ot), x(1, Mi)], Ma);
var Va = class extends Ma {
  constructor(e, t, i, r, s, n, o) {
    super(s, n), this.galleryService = e, this.telemetryService = t, this.uriIdentityService = i, this.logService = r, this.userDataProfilesService = o, this.lastReportTimestamp = 0, this.installingExtensions = /* @__PURE__ */ new Map(), this.uninstallingExtensions = /* @__PURE__ */ new Map(), this.disposeCancellationTokenSource = new Ii(), this._onInstallExtension = this._register(new M()), this._onDidInstallExtensions = this._register(new M()), this._onUninstallExtension = this._register(new M()), this._onDidUninstallExtension = this._register(new M()), this._onDidUpdateExtensionMetadata = this._register(new M()), this.participants = [], this._register(Ee(() => {
      this.disposeCancellationTokenSource.cancel(), this.installingExtensions.forEach(({ task: l }) => l.cancel()), this.uninstallingExtensions.forEach((l) => l.cancel()), this.installingExtensions.clear(), this.uninstallingExtensions.clear();
    }));
    const a = async () => {
      const c = (await this.getInstalled()).some((h) => h.identifier.id.toLowerCase() === "ms-python.vscode-pylance");
      this.galleryService.setIsPylanceInstalled(c);
    };
    setImmediate(() => {
      a().catch((l) => this.logService.error("Error while checking installed extensions", l.stack ?? l.message));
    });
  }
  get onInstallExtension() {
    return this._onInstallExtension.event;
  }
  get onDidInstallExtensions() {
    return this._onDidInstallExtensions.event;
  }
  get onUninstallExtension() {
    return this._onUninstallExtension.event;
  }
  get onDidUninstallExtension() {
    return this._onDidUninstallExtension.event;
  }
  get onDidUpdateExtensionMetadata() {
    return this._onDidUpdateExtensionMetadata.event;
  }
  async installFromGallery(e, t = {}) {
    try {
      const r = (await this.installGalleryExtensions([{ extension: e, options: t }])).find(({ identifier: s }) => Y(s, e.identifier));
      if (r?.local) return r?.local;
      throw r?.error ? r.error : r ? new _e(`Install of extension ${e.identifier.id} finished without producing a local extension or error`, "Internal") : new _e(`Install of extension ${e.identifier.id} returned no result (another install may have been in progress and its outcome was not recorded)`, "Internal");
    } catch (i) {
      throw be(i);
    }
  }
  async installGalleryExtensions(e) {
    if (!this.galleryService.isEnabled()) throw new _e(m(1924, null), "NotAllowed");
    const t = [], i = [];
    return await Promise.allSettled(e.map(async ({ extension: r, options: s }) => {
      try {
        const n = await this.checkAndGetCompatibleVersion(r, !!s?.installGivenVersion, !!s?.installPreReleaseVersion, s.productVersion ?? { version: this.productService.version, date: this.productService.date, vscodeVersion: this.productService.vscodeVersion });
        i.push({ ...n, options: s });
      } catch (n) {
        t.push({ identifier: r.identifier, operation: 2, source: r, error: n, profileLocation: s.profileLocation ?? this.getCurrentExtensionsManifestLocation() });
      }
    })), i.length && t.push(...await this.installExtensions(i)), t;
  }
  async uninstall(e, t) {
    return this.logService.trace("ExtensionManagementService#uninstall", e.identifier.id), this.uninstallExtensions([{ extension: e, options: t }]);
  }
  async toggleAppliationScope(e, t) {
    if (dh(e.manifest) || e.isBuiltin) return e;
    if (e.isApplicationScoped) {
      let i = await this.updateMetadata(e, { isApplicationScoped: false }, this.userDataProfilesService.defaultProfile.extensionsResource);
      this.uriIdentityService.extUri.isEqual(t, this.userDataProfilesService.defaultProfile.extensionsResource) || (i = await this.copyExtension(e, this.userDataProfilesService.defaultProfile.extensionsResource, t));
      for (const r of this.userDataProfilesService.profiles) {
        const s = (await this.getInstalled(1, r.extensionsResource)).find((n) => Y(n.identifier, e.identifier));
        s ? this._onDidUpdateExtensionMetadata.fire({ local: s, profileLocation: r.extensionsResource }) : this._onDidUninstallExtension.fire({ identifier: e.identifier, profileLocation: r.extensionsResource });
      }
      return i;
    } else {
      const i = this.uriIdentityService.extUri.isEqual(t, this.userDataProfilesService.defaultProfile.extensionsResource) ? await this.updateMetadata(e, { isApplicationScoped: true }, this.userDataProfilesService.defaultProfile.extensionsResource) : await this.copyExtension(e, t, this.userDataProfilesService.defaultProfile.extensionsResource, { isApplicationScoped: true });
      return this._onDidInstallExtensions.fire([{ identifier: i.identifier, operation: 2, local: i, profileLocation: this.userDataProfilesService.defaultProfile.extensionsResource, applicationScoped: true }]), i;
    }
  }
  getExtensionsControlManifest() {
    const e = (/* @__PURE__ */ new Date()).getTime();
    return (!this.extensionsControlManifest || e - this.lastReportTimestamp > 1e3 * 60 * 5) && (this.extensionsControlManifest = this.updateControlCache(), this.lastReportTimestamp = e), this.extensionsControlManifest;
  }
  registerParticipant(e) {
    this.participants.push(e);
  }
  async resetPinnedStateForAllUserExtensions(e) {
    try {
      await this.joinAllSettled(this.userDataProfilesService.profiles.map(async (t) => {
        const i = await this.getInstalled(1, t.extensionsResource);
        await this.joinAllSettled(i.map(async (r) => {
          r.pinned !== e && await this.updateMetadata(r, { pinned: e }, t.extensionsResource);
        }));
      }));
    } catch (t) {
      throw this.logService.error("Error while resetting pinned state for all user extensions", q(t)), t;
    }
  }
  async installExtensions(e) {
    const t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r = [], s = [], n = [], o = (c, h) => `${pt.create(c).toString()}-${h.toString()}`, a = (c, h, f, d) => {
      if (!k.isUri(h)) {
        if (i.has(`${h.identifier.id.toLowerCase()}-${f.profileLocation.toString()}`)) return;
        const y = this.installingExtensions.get(o(h, f.profileLocation));
        if (y) {
          if (d && this.canWaitForTask(d, y.task)) {
            const E = y.task.identifier;
            this.logService.info("Waiting for already requested installing extension", E.id, d.identifier.id, f.profileLocation.toString()), y.waitingTasks.push(d), r.push(ne.toPromise(ne.filter(this.onDidInstallExtensions, (_) => _.some((I) => Y(I.identifier, E)))).then((_) => {
              if (this.logService.info("Finished waiting for already requested installing extension", E.id, d.identifier.id, f.profileLocation.toString()), !_.find((D) => Y(D.identifier, E))?.local) throw new Error(`Extension ${E.id} is not installed`);
            }));
          }
          return;
        }
      }
      const p = this.createInstallExtensionTask(c, h, f), v = `${wt(c.publisher, c.name)}-${f.profileLocation.toString()}`;
      i.set(v, { task: p, root: d }), this._onInstallExtension.fire({ identifier: p.identifier, source: h, profileLocation: f.profileLocation }), this.logService.info("Installing extension:", p.identifier.id, f), k.isUri(h) || this.installingExtensions.set(o(h, f.profileLocation), { task: p, waitingTasks: [] });
    };
    try {
      for (const { manifest: h, extension: f, options: d } of e) {
        const p = d.isApplicationScoped || d.isBuiltin || dh(h), v = { ...d, installOnlyNewlyAddedFromExtensionPack: d.installOnlyNewlyAddedFromExtensionPack ?? !k.isUri(f), isApplicationScoped: p, profileLocation: p ? this.userDataProfilesService.defaultProfile.extensionsResource : d.profileLocation ?? this.getCurrentExtensionsManifestLocation(), productVersion: d.productVersion ?? { version: this.productService.version, date: this.productService.date, vscodeVersion: this.productService.vscodeVersion } }, y = k.isUri(f) ? void 0 : this.installingExtensions.get(o(f, v.profileLocation));
        if (y) {
          this.logService.info("Extension is already requested to install", y.task.identifier.id, v.profileLocation.toString());
          const E = y.task, _ = E.identifier, I = `${_.id.toLowerCase()}-${v.profileLocation.toString()}`;
          if (!i.has(I)) {
            const D = v.profileLocation, W = (F) => Y(F.identifier, _) && this.uriIdentityService.extUri.isEqual(F.profileLocation, D), R = new Ve(), C = ne.toPromise(ne.filter(this.onDidInstallExtensions, (F) => F.some(W), R), R);
            s.push((async () => {
              let F;
              try {
                await E.waitUntilTaskIsFinished();
                const T = (await Gp(C, this.disposeCancellationTokenSource.token)).find(W);
                T && (F = { ...T, profileLocation: D });
              } catch (Z) {
                F = { error: be(Z), identifier: _, operation: E.operation, source: E.source, context: E.options.context, profileLocation: D, applicationScoped: v.isApplicationScoped };
              } finally {
                R.dispose();
              }
              F && n.push(F);
            })());
          }
        } else a(h, f, v, void 0);
      }
      await Promise.all([...i.values()].map(async ({ task: h }) => {
        if (h.options.donotIncludePackAndDependencies) this.logService.info("Installing the extension without checking dependencies and pack", h.identifier.id);
        else try {
          const f = await this.getAllDepsAndPackExtensions(h.identifier, h.manifest, !!h.options.installOnlyNewlyAddedFromExtensionPack, !!h.options.installPreReleaseVersion, h.options.productVersion, k.isUri(h.source) ? void 0 : h.source.queryContext), d = await this.getInstalled(void 0, h.options.profileLocation, h.options.productVersion), p = { ...h.options, context: { ...h.options.context, [sm]: true } };
          for (const { gallery: v, manifest: y } of $t(f, ({ gallery: E }) => E.identifier.id)) {
            const E = d.find((_) => Y(_.identifier, v.identifier));
            E && E.isApplicationScoped === !!p.isApplicationScoped || a(y, v, p, h);
          }
        } catch (f) {
          if (k.isUri(h.source)) ql(h.manifest.extensionDependencies) && this.logService.warn("Cannot install dependencies of extension:", h.identifier.id, f.message), ql(h.manifest.extensionPack) && this.logService.warn("Cannot install packed extensions of extension:", h.identifier.id, f.message);
          else throw this.logService.error("Error while preparing to install dependencies and extension packs of the extension:", h.identifier.id), f;
        }
      }));
      const c = await this.getOtherProfilesToUpdateExtension([...i.values()].map(({ task: h }) => h));
      for (const [h, f] of c) a(f.manifest, f.source, { ...f.options, profileLocation: h }, void 0);
      await this.joinAllSettled([...i.entries()].map(async ([h, { task: f }]) => {
        let d;
        try {
          d = await f.run(), await this.joinAllSettled(this.participants.map((p) => p.postInstall(d, f.source, f.options, ve.None)), "PostInstall");
        } catch (p) {
          const v = be(p);
          throw t.set(h, { error: v, identifier: f.identifier, operation: f.operation, source: f.source, context: f.options.context, profileLocation: f.options.profileLocation, applicationScoped: f.options.isApplicationScoped }), this.logService.error("Error while installing the extension", f.identifier.id, q(v), f.options.profileLocation.toString()), v;
        }
        if (!k.isUri(f.source) && zt && f.operation !== 3) try {
          await this.galleryService.reportStatistic(d.manifest.publisher, d.manifest.name, d.manifest.version, "install");
        } catch {
        }
        t.set(h, { local: d, identifier: f.identifier, operation: f.operation, source: f.source, context: f.options.context, profileLocation: f.options.profileLocation, applicationScoped: d.isApplicationScoped });
      })), r.length && await this.joinAllSettled(r);
    } catch (c) {
      const h = (p, v, y) => {
        const E = [];
        p.manifest.extensionDependencies?.length && E.push(...p.manifest.extensionDependencies), p.manifest.extensionPack?.length && E.push(...p.manifest.extensionPack);
        for (const _ of E) {
          if (y.includes(_.toLowerCase())) continue;
          y.push(_.toLowerCase());
          const I = t.get(`${_.toLowerCase()}-${v.toString()}`);
          I?.local && (y = h(I.local, v, y));
        }
        return y;
      }, f = (p) => ({ identifier: p.identifier, operation: 2, source: p.source, context: p.options.context, profileLocation: p.options.profileLocation, error: c }), d = [];
      for (const [p, { task: v, root: y }] of i) {
        const E = t.get(p);
        E ? E.local && y && !t.get(`${y.identifier.id.toLowerCase()}-${v.options.profileLocation.toString()}`)?.local && (d.push(this.createUninstallExtensionTask(E.local, { versionOnly: true, profileLocation: v.options.profileLocation })), t.set(p, f(v))) : (v.cancel(), t.set(p, f(v)));
      }
      for (const [p, { task: v }] of i) {
        const y = t.get(p);
        if (!y?.local || v.options.donotIncludePackAndDependencies) continue;
        h(y.local, v.options.profileLocation, [y.local.identifier.id.toLowerCase()]).slice(1).some((_) => i.has(`${_.toLowerCase()}-${v.options.profileLocation.toString()}`) && !t.get(`${_.toLowerCase()}-${v.options.profileLocation.toString()}`)?.local) && (d.push(this.createUninstallExtensionTask(y.local, { versionOnly: true, profileLocation: v.options.profileLocation })), t.set(p, f(v)));
      }
      d.length && await Promise.allSettled(d.map(async (p) => {
        try {
          await p.run(), this.logService.info("Rollback: Uninstalled extension", p.extension.identifier.id);
        } catch (v) {
          this.logService.warn("Rollback: Error while uninstalling extension", p.extension.identifier.id, q(v));
        }
      }));
    } finally {
      for (const { task: c } of i.values()) c.source && !k.isUri(c.source) && this.installingExtensions.delete(o(c.source, c.options.profileLocation));
    }
    const l = [...t.values()];
    for (const c of l) c.local && this.logService.info("Extension installed successfully:", c.identifier.id, c.profileLocation.toString());
    return this._onDidInstallExtensions.fire(l), s.length && await Promise.allSettled(s), [...l, ...n];
  }
  async getOtherProfilesToUpdateExtension(e) {
    const t = [], i = new Ye();
    for (const r of e) if (!(r.operation !== 3 || r.options.isApplicationScoped || r.options.pinned || r.options.installGivenVersion || k.isUri(r.source))) for (const s of this.userDataProfilesService.profiles) {
      if (this.uriIdentityService.extUri.isEqual(s.extensionsResource, r.options.profileLocation)) continue;
      let n = i.get(s.extensionsResource);
      n || (n = await this.getInstalled(1, s.extensionsResource), i.set(s.extensionsResource, n));
      const o = n.find((a) => Y(a.identifier, r.identifier));
      o && !o.pinned && t.push([s.extensionsResource, r]);
    }
    return t;
  }
  canWaitForTask(e, t) {
    for (const [, { task: i, waitingTasks: r }] of this.installingExtensions.entries()) if (i === e && (r.includes(t) || r.some((s) => this.canWaitForTask(s, t))) || i === t && r[0] && !this.canWaitForTask(e, r[0])) return false;
    return true;
  }
  async joinAllSettled(e, t) {
    const i = [], r = [], s = await Promise.allSettled(e);
    for (const o of s) o.status === "fulfilled" ? i.push(o.value) : r.push(be(o.reason, t));
    if (!r.length) return i;
    if (r.length === 1) throw r[0];
    let n = new _e("", "Unknown");
    for (const o of r) n = new _e(n.message ? `${n.message}, ${o.message}` : o.message, o.code !== "Unknown" && o.code !== "Internal" ? o.code : n.code);
    throw n;
  }
  async getAllDepsAndPackExtensions(e, t, i, r, s, n) {
    if (!this.galleryService.isEnabled()) return [];
    const o = [], a = [], l = async (c, h) => {
      o.push(c);
      let f = h.extensionDependencies || [];
      const d = [...f];
      if (h.extensionPack) for (const p of h.extensionPack) d.every((v) => !Y({ id: v }, { id: p })) && d.push(p);
      if (d.length) {
        const p = d.filter((v) => o.every((y) => !Y(y, { id: v })));
        if (p.length) {
          const v = await this.galleryService.getExtensions(p.map((y) => ({ id: y, preRelease: r })), {}, ve.None, n);
          for (const y of v) {
            if (o.find((I) => Y(I, y.identifier))) continue;
            const E = f.some((I) => Y({ id: I }, y.identifier));
            let _;
            try {
              _ = await this.checkAndGetCompatibleVersion(y, false, r, s);
            } catch (I) {
              if (E) throw I;
              this.logService.info("Skipping the packed extension as it cannot be installed", y.identifier.id, q(I));
              continue;
            }
            a.push({ gallery: _.extension, manifest: _.manifest }), await l(_.extension.identifier, _.manifest);
          }
        }
      }
    };
    return await l(e, t), a;
  }
  async checkAndGetCompatibleVersion(e, t, i, r) {
    let s;
    const n = await this.getExtensionsControlManifest();
    if (Vm(e.identifier, n.malicious)) throw new _e(m(1925, null, e.identifier.id), "Malicious");
    const o = n.deprecated[e.identifier.id.toLowerCase()];
    if (o?.extension?.autoMigrate) {
      if (this.logService.info(`The '${e.identifier.id}' extension is deprecated, fetching the compatible '${o.extension.id}' extension instead.`), s = (await this.galleryService.getExtensions([{ id: o.extension.id, preRelease: o.extension.preRelease }], { targetPlatform: await this.getTargetPlatform(), compatible: true, productVersion: r }, ve.None))[0], !s) throw new _e(m(1926, null, e.identifier.id, o.extension.id), "Deprecated");
    } else {
      if (await this.canInstall(e) !== true) {
        const l = await this.getTargetPlatform();
        throw new _e(m(1927, null, e.identifier.id, this.productService.nameLong, lh(l)), "IncompatibleTargetPlatform");
      }
      if (s = await this.getCompatibleVersion(e, t, i, r), !s) {
        const l = [];
        throw ga(e.properties.enabledApiProposals ?? [], l) ? !i && e.properties.isPreReleaseVersion && (await this.galleryService.getExtensions([e.identifier], {}, ve.None, e.queryContext))[0] ? new _e(m(1929, null, e.displayName ?? e.identifier.id), "ReleaseVersionNotFound") : new _e(m(1930, null, e.identifier.id, this.productService.nameLong, this.productService.version, this.productService.vscodeVersion), "Incompatible") : new _e(m(1928, null, e.displayName ?? e.identifier.id, l[0]), "IncompatibleApi");
      }
    }
    this.logService.info("Getting Manifest...", s.identifier.id);
    const a = await this.galleryService.getManifest(s, ve.None);
    if (a === null) throw new _e(`Missing manifest for extension ${s.identifier.id}`, "Invalid");
    if (a.version !== s.version) throw new _e(`Cannot install '${s.identifier.id}' extension because of version mismatch in Marketplace`, "Invalid");
    return { extension: s, manifest: a };
  }
  async getCompatibleVersion(e, t, i, r) {
    const s = await this.getTargetPlatform();
    let n = null;
    return !t && e.hasPreReleaseVersion && e.properties.isPreReleaseVersion !== i && (n = (await this.galleryService.getExtensions([{ ...e.identifier, preRelease: i }], { targetPlatform: s, compatible: true, productVersion: r }, ve.None, e.queryContext)).filter((o) => this.galleryService.minMaxExtensionVersionFilter(o))[0] || null), !n && await this.galleryService.isExtensionCompatible(e, i, s, r) && (n = e), n || (t ? n = (await this.galleryService.getExtensions([{ ...e.identifier, version: e.version }], { targetPlatform: s, compatible: true, productVersion: r }, ve.None, e.queryContext)).filter((o) => this.galleryService.minMaxExtensionVersionFilter(o))[0] || null : n = await this.galleryService.getCompatibleExtension(e, i, s, r)), n;
  }
  async uninstallExtensions(e) {
    const t = (h, f) => `${h.identifier.id.toLowerCase()}${f.versionOnly ? `-${h.manifest.version}` : ""}@${f.profileLocation.toString()}`, i = (h, f) => {
      const d = this.createUninstallExtensionTask(h, f);
      return this.uninstallingExtensions.set(t(d.extension, f), d), this.logService.info("Uninstalling extension from the profile:", `${h.identifier.id}@${h.manifest.version}`, f.profileLocation.toString()), this._onUninstallExtension.fire({ identifier: h.identifier, profileLocation: f.profileLocation, applicationScoped: h.isApplicationScoped }), d;
    }, r = (h, f, d) => {
      d ? this.logService.error("Failed to uninstall extension from the profile:", `${h.identifier.id}@${h.manifest.version}`, f.profileLocation.toString(), d.message) : this.logService.info("Successfully uninstalled extension from the profile", `${h.identifier.id}@${h.manifest.version}`, f.profileLocation.toString()), this._onDidUninstallExtension.fire({ identifier: h.identifier, error: d?.code, profileLocation: f.profileLocation, applicationScoped: h.isApplicationScoped });
    }, s = [], n = [], o = [], a = [], l = new Ye(), c = async (h) => {
      let f = l.get(h);
      return f || l.set(h, f = await this.getInstalled(1, h)), f;
    };
    for (const { extension: h, options: f } of e) {
      const d = { ...f, profileLocation: h.isApplicationScoped ? this.userDataProfilesService.defaultProfile.extensionsResource : f?.profileLocation ?? this.getCurrentExtensionsManifestLocation() }, p = this.uninstallingExtensions.get(t(h, d));
      if (p ? (this.logService.info("Extensions is already requested to uninstall", h.identifier.id), o.push(p.waitUntilTaskIsFinished())) : s.push(i(h, d)), d.remove) {
        a.push(h);
        for (const v of this.userDataProfilesService.profiles) {
          if (this.uriIdentityService.extUri.isEqual(v.extensionsResource, d.profileLocation)) continue;
          const E = (await c(v.extensionsResource)).find((_) => Y(_.identifier, h.identifier));
          if (E) {
            const _ = { ...d, profileLocation: v.extensionsResource }, I = this.uninstallingExtensions.get(t(E, _));
            I ? (this.logService.info("Extensions is already requested to uninstall", E.identifier.id), o.push(I.waitUntilTaskIsFinished())) : s.push(i(E, _));
          }
        }
      }
    }
    try {
      for (const h of s.slice(0)) {
        const f = await c(h.options.profileLocation);
        if (h.options.donotIncludePack) this.logService.info("Uninstalling the extension without including packed extension", `${h.extension.identifier.id}@${h.extension.manifest.version}`);
        else {
          const d = this.getAllPackExtensionsToUninstall(h.extension, f);
          for (const p of d) this.uninstallingExtensions.has(t(p, h.options)) ? this.logService.info("Extensions is already requested to uninstall", p.identifier.id) : s.push(i(p, h.options));
        }
        h.options.donotCheckDependents ? this.logService.info("Uninstalling the extension without checking dependents", `${h.extension.identifier.id}@${h.extension.manifest.version}`) : this.checkForDependents(s.map((d) => d.extension), f, h.extension);
      }
      await this.joinAllSettled(s.map(async (h) => {
        try {
          if (await h.run(), await this.joinAllSettled(this.participants.map((f) => f.postUninstall(h.extension, h.options, ve.None))), h.extension.identifier.uuid) try {
            await this.galleryService.reportStatistic(h.extension.manifest.publisher, h.extension.manifest.name, h.extension.manifest.version, "uninstall");
          } catch {
          }
        } catch (f) {
          const d = be(f);
          throw r(h.extension, h.options, d), d;
        } finally {
          n.push(h);
        }
      })), o.length && await this.joinAllSettled(o);
      for (const h of s) r(h.extension, h.options);
      a.length && await this.joinAllSettled(a.map((h) => this.removeExtension(h)));
    } catch (h) {
      const f = be(h);
      for (const d of s) {
        try {
          d.cancel();
        } catch {
        }
        n.includes(d) || r(d.extension, d.options, f);
      }
      throw f;
    } finally {
      for (const h of s) this.uninstallingExtensions.delete(t(h.extension, h.options)) || this.logService.warn("Uninstallation task is not found in the cache", h.extension.identifier.id);
    }
  }
  checkForDependents(e, t, i) {
    for (const r of e) {
      const s = this.getDependents(r, t);
      if (s.length) {
        const n = s.filter((o) => !e.some((a) => Y(a.identifier, o.identifier)));
        if (n.length) throw new Error(this.getDependentsErrorMessage(r, n, i));
      }
    }
  }
  getDependentsErrorMessage(e, t, i) {
    return i === e ? t.length === 1 ? m(1931, null, i.manifest.displayName || i.manifest.name, t[0].manifest.displayName || t[0].manifest.name) : t.length === 2 ? m(1932, null, i.manifest.displayName || i.manifest.name, t[0].manifest.displayName || t[0].manifest.name, t[1].manifest.displayName || t[1].manifest.name) : m(1933, null, i.manifest.displayName || i.manifest.name, t[0].manifest.displayName || t[0].manifest.name, t[1].manifest.displayName || t[1].manifest.name) : t.length === 1 ? m(1934, null, i.manifest.displayName || i.manifest.name, e.manifest.displayName || e.manifest.name, t[0].manifest.displayName || t[0].manifest.name) : t.length === 2 ? m(1935, null, i.manifest.displayName || i.manifest.name, e.manifest.displayName || e.manifest.name, t[0].manifest.displayName || t[0].manifest.name, t[1].manifest.displayName || t[1].manifest.name) : m(1936, null, i.manifest.displayName || i.manifest.name, e.manifest.displayName || e.manifest.name, t[0].manifest.displayName || t[0].manifest.name, t[1].manifest.displayName || t[1].manifest.name);
  }
  getAllPackExtensionsToUninstall(e, t, i = []) {
    if (i.indexOf(e) !== -1) return [];
    i.push(e);
    const r = e.manifest.extensionPack ? e.manifest.extensionPack : [];
    if (r.length) {
      const s = t.filter((o) => !o.isBuiltin && r.some((a) => Y({ id: a }, o.identifier))), n = [];
      for (const o of s) n.push(...this.getAllPackExtensionsToUninstall(o, t, i));
      return [...s, ...n];
    }
    return [];
  }
  getDependents(e, t) {
    return t.filter((i) => i.manifest.extensionDependencies && i.manifest.extensionDependencies.some((r) => Y({ id: r }, e.identifier)));
  }
  async updateControlCache() {
    try {
      return this.logService.trace("ExtensionManagementService.updateControlCache"), await this.galleryService.getExtensionsControlManifest();
    } catch (e) {
      return this.logService.trace("ExtensionManagementService.refreshControlCache - failed to get extension control manifest", q(e)), { malicious: [], deprecated: {}, search: [] };
    }
  }
};
Va = N([x(0, yi), x(1, ii), x(2, je), x(3, pe), x(4, ot), x(5, Mi), x(6, Dt)], Va);
function be(e, t) {
  if (e instanceof _e) return e;
  let i;
  return e instanceof pn ? i = new _e(e.message, e.code === "DownloadFailedWriting" ? uh.DownloadFailedWriting : "Gallery") : i = new _e(e.message, bi(e) ? "Cancelled" : t ?? "Internal"), i.stack = e.stack, i;
}
var hf = class {
  constructor() {
    this.barrier = new iu();
  }
  async waitUntilTaskIsFinished() {
    return await this.barrier.wait(), this.cancellablePromise;
  }
  run() {
    return this.cancellablePromise || (this.cancellablePromise = Qt((e) => this.doRun(e))), this.barrier.open(), this.cancellablePromise;
  }
  cancel() {
    this.cancellablePromise || (this.cancellablePromise = Qt((e) => new Promise((t, i) => {
      const r = e.onCancellationRequested(() => {
        r.dispose(), i(new Le());
      });
    })), this.barrier.open()), this.cancellablePromise.cancel();
  }
};
b(), b();
function Wa(e) {
  let t = "Extract";
  return e instanceof kn && (e.type === "CorruptZip" ? t = "CorruptZip" : e.type === "Incomplete" && (t = "IncompleteZip")), be(e, t);
}
async function $a(e) {
  let t;
  try {
    t = await Zh(e, "extension/package.json");
  } catch (i) {
    throw Wa(i);
  }
  try {
    return JSON.parse(t.toString("utf8"));
  } catch {
    throw new _e(m(1995, null), "Invalid");
  }
}
var wr = class extends X {
  constructor(e, t, i, r, s, n, o) {
    super(), this.fileService = t, this.extensionGalleryService = i, this.extensionSignatureVerificationService = r, this.uriIdentityService = n, this.logService = o, this.extensionsDownloadDir = e.extensionsDownloadLocation, this.extensionsTrashDir = n.extUri.joinPath(e.extensionsDownloadLocation, ".trash"), this.cache = 20, this.cleanUpPromise = this.cleanUp();
  }
  async download(e, t, i, r) {
    await this.cleanUpPromise;
    const s = await this.downloadVSIX(e, t);
    if (!i) return { location: s, verificationStatus: void 0, signatureArchiveLocation: void 0 };
    if (!e.isSigned) return { location: s, verificationStatus: ge.NotSigned, signatureArchiveLocation: void 0 };
    let n;
    try {
      n = await this.downloadSignatureArchive(e);
      const o = (await this.extensionSignatureVerificationService.verify(e.identifier.id, e.version, s.fsPath, n.fsPath, r))?.code;
      if (o === ge.PackageIsInvalidZip || o === ge.SignatureArchiveIsInvalidZip) {
        try {
          await this.delete(s);
        } catch (a) {
          this.logService.error(a);
        }
        try {
          await this.delete(n);
        } catch (a) {
          this.logService.error(a);
        }
        throw new _e(Xh, "CorruptZip");
      }
      return { location: s, verificationStatus: o, signatureArchiveLocation: n };
    } catch (o) {
      try {
        await this.delete(s);
      } catch (a) {
        this.logService.error(a);
      }
      if (n) try {
        await this.delete(n);
      } catch (a) {
        this.logService.error(a);
      }
      throw o;
    }
  }
  async downloadVSIX(e, t) {
    try {
      const i = z(this.extensionsDownloadDir, this.getName(e));
      return await this.doDownload(e, "vsix", async () => {
        await this.downloadFile(e, i, (r) => this.extensionGalleryService.download(e, r, t));
        try {
          await this.validate(i.fsPath, "extension/package.json");
        } catch (r) {
          try {
            await this.fileService.del(i);
          } catch (s) {
            this.logService.warn(`Error while deleting: ${i.path}`, q(s));
          }
          throw r;
        }
      }, 2), i;
    } catch (i) {
      throw be(i, "Download");
    }
  }
  async downloadSignatureArchive(e) {
    try {
      const t = z(this.extensionsDownloadDir, `${this.getName(e)}${wr.SignatureArchiveExtension}`);
      return await this.doDownload(e, "sigzip", async () => {
        await this.extensionGalleryService.downloadSignatureArchive(e, t);
        try {
          await this.validate(t.fsPath, ".signature.p7s");
        } catch (i) {
          try {
            await this.fileService.del(t);
          } catch (r) {
            this.logService.warn(`Error while deleting: ${t.path}`, q(r));
          }
          throw i;
        }
      }, 2), t;
    } catch (t) {
      throw be(t, "DownloadSignature");
    }
  }
  async downloadFile(e, t, i) {
    if (this.logService.info("Started downloading extension:", e.identifier.id, e.version, t.toString()), await this.fileService.exists(t)) {
      this.logService.info("No need to download extension as it exists already.", e.identifier.id, e.version, t.toString());
      return;
    }
    if (t.scheme !== le.file) {
      this.logService.info("Downloading extension from web:", e.identifier.id, e.version, t.toString()), await i(t);
      return;
    }
    const r = z(this.extensionsDownloadDir, `.${dt()}`);
    try {
      await i(r);
    } catch (s) {
      try {
        await this.fileService.del(r);
      } catch {
      }
      throw s;
    }
    try {
      await de.rename(r.fsPath, t.fsPath, 120 * 1e3);
    } catch (s) {
      try {
        await this.fileService.del(r);
      } catch {
      }
      let n = false;
      try {
        n = await this.fileService.exists(t);
      } catch {
      }
      if (n) this.logService.info("Rename failed because the file was downloaded by another source. So ignoring renaming.", e.identifier.id, t.path);
      else throw this.logService.info(`Rename failed because of ${q(s)}. Deleted the file from downloaded location`, r.path), s;
    }
  }
  async doDownload(e, t, i, r) {
    let s = 1;
    for (; ; ) try {
      return await i(), s;
    } catch (n) {
      if (s++ > r) throw n;
      this.logService.warn(`Failed downloading ${t}. ${q(n)}. Retry again...`, e.identifier.id);
    }
  }
  async validate(e, t) {
    try {
      await Zh(e, t);
    } catch (i) {
      throw Wa(i);
    }
  }
  async delete(e) {
    await this.cleanUpPromise;
    const t = this.uriIdentityService.extUri.relativePath(this.extensionsDownloadDir, e);
    t ? await this.fileService.move(e, this.uriIdentityService.extUri.joinPath(this.extensionsTrashDir, t), true) : await this.fileService.del(e);
  }
  async cleanUp() {
    try {
      if (!await this.fileService.exists(this.extensionsDownloadDir)) {
        this.logService.trace("Extension VSIX downloads cache dir does not exist");
        return;
      }
      try {
        await this.fileService.del(this.extensionsTrashDir, { recursive: true });
      } catch (t) {
        Ge(t) !== 1 && this.logService.error(t);
      }
      const e = await this.fileService.resolve(this.extensionsDownloadDir, { resolveMetadata: true });
      if (e.children) {
        const t = [], i = [], r = [];
        for (const o of e.children) if (o.name.endsWith(wr.SignatureArchiveExtension)) r.push(o.resource);
        else {
          const a = pt.parse(o.name);
          a && i.push([a, o]);
        }
        const s = wh(i, ([o]) => o), n = [];
        for (const o of s) o.sort((a, l) => bh(a[0].version, l[0].version)), t.push(...o.slice(1).map((a) => a[1].resource)), n.push(o[0][1]);
        n.sort((o, a) => o.mtime - a.mtime), t.push(...n.slice(0, Math.max(0, n.length - this.cache)).map((o) => o.resource)), t.push(...r), await ht.settled(t.map((o) => (this.logService.trace("Deleting from cache", o.path), this.fileService.del(o))));
      }
    } catch (e) {
      this.logService.error(e);
    }
  }
  getName(e) {
    return pt.create(e).toString().toLowerCase();
  }
};
wr.SignatureArchiveExtension = ".sigzip", wr = N([x(0, St), x(1, ke), x(2, yi), x(3, Nh), x(4, ii), x(5, je), x(6, pe)], wr), b();
import { fork as A4 } from "child_process";
var Ba = class extends X {
  constructor(e, t) {
    super(), this.userDataProfilesService = e, this.logService = t, this.processesLimiter = new ru(5);
  }
  async postUninstall(e) {
    const t = this.parseScript(e, "uninstall");
    t && (this.logService.info(e.identifier.id, e.manifest.version, "Running post uninstall script"), await this.processesLimiter.queue(async () => {
      try {
        await this.runLifecycleHook(t.script, "uninstall", t.args, true, e), this.logService.info("Finished running post uninstall script", e.identifier.id, e.manifest.version);
      } catch (i) {
        this.logService.error("Failed to run post uninstall script", e.identifier.id, e.manifest.version), this.logService.error(i);
      }
    }));
    try {
      await de.rm(this.getExtensionStoragePath(e));
    } catch (i) {
      this.logService.error("Error while removing extension storage path", e.identifier.id), this.logService.error(i);
    }
  }
  parseScript(e, t) {
    const i = `vscode:${t}`;
    if (e.location.scheme === le.file && e.manifest && e.manifest.scripts && typeof e.manifest.scripts[i] == "string") {
      const r = e.manifest.scripts[i].split(" ");
      return r.length < 2 || r[0] !== "node" || !r[1] ? (this.logService.warn(e.identifier.id, e.manifest.version, `${i} should be a node script`), null) : { script: H(e.location.fsPath, r[1]), args: r.slice(2) || [] };
    }
    return null;
  }
  runLifecycleHook(e, t, i, r, s) {
    return new Promise((n, o) => {
      const a = this.start(e, t, i, s);
      let l;
      const c = (h) => {
        l && (clearTimeout(l), l = null), h ? o(h) : n(void 0);
      };
      a.on("error", (h) => {
        c(Ti(h) || "Unknown");
      }), a.on("exit", (h, f) => {
        c(h ? `post-${t} process exited with code ${h}` : void 0);
      }), r && (l = setTimeout(() => {
        l = null, a.kill(), o("timed out");
      }, 5e3));
    });
  }
  start(e, t, i, r) {
    const s = { silent: true, execArgv: void 0 }, n = A4(e, [`--type=extension-post-${t}`, ...i], s);
    n.stdout.setEncoding("utf8"), n.stderr.setEncoding("utf8");
    const o = ne.fromNodeEventEmitter(n.stdout, "data"), a = ne.fromNodeEventEmitter(n.stderr, "data");
    this._register(o((h) => this.logService.info(r.identifier.id, r.manifest.version, `post-${t}`, h))), this._register(a((h) => this.logService.error(r.identifier.id, r.manifest.version, `post-${t}`, h)));
    const l = ne.any(ne.map(o, (h) => ({ data: `%c${h}`, format: [""] }), this._store), ne.map(a, (h) => ({ data: `%c${h}`, format: ["color: red"] }), this._store));
    return ne.debounce(l, (h, f) => h ? { data: h.data + f.data, format: [...h.format, ...f.format] } : { data: f.data, format: f.format }, 100, void 0, void 0, void 0, this._store)((h) => {
      console.group(r.identifier.id), console.log(h.data, ...h.format), console.groupEnd();
    }), n;
  }
  getExtensionStoragePath(e) {
    return H(this.userDataProfilesService.defaultProfile.globalStorageHome.fsPath, e.identifier.id.toLowerCase());
  }
};
Ba = N([x(0, Dt), x(1, pe)], Ba), b();
var k4 = class extends X {
  constructor(e, t, i, r, s) {
    super(), this.userDataProfilesService = e, this.fileService = t, this.uriIdentityService = i, this.logService = s, this._register(r.onDidInstallExtensions((n) => this.onDidInstallExtensions(n))), this._register(r.onDidUninstallExtension((n) => this.onDidUnInstallExtension(n)));
  }
  onDidInstallExtensions(e) {
    for (const t of e) t.local && this.invalidate(t.profileLocation);
  }
  onDidUnInstallExtension(e) {
    e.error || this.invalidate(e.profileLocation);
  }
  async invalidate(e) {
    if (e) for (const t of this.userDataProfilesService.profiles) this.uriIdentityService.extUri.isEqual(t.extensionsResource, e) && await this.deleteUserCacheFile(t);
    else await this.deleteUserCacheFile(this.userDataProfilesService.defaultProfile);
  }
  async deleteUserCacheFile(e) {
    try {
      await this.fileService.del(this.uriIdentityService.extUri.joinPath(e.cacheHome, hh));
    } catch (t) {
      Ge(t) !== 1 && this.logService.error(t);
    }
  }
};
b();
var D4 = class extends X {
  constructor(e, t, i, r, s, n, o) {
    super(), this.extensionManagementService = e, this.extensionsScannerService = t, this.userDataProfilesService = i, this.extensionsProfileScannerService = r, this.uriIdentityService = s, this.fileService = n, this.logService = o, this._onDidChangeExtensionsByAnotherSource = this._register(new M()), this.onDidChangeExtensionsByAnotherSource = this._onDidChangeExtensionsByAnotherSource.event, this.allExtensions = /* @__PURE__ */ new Map(), this.extensionsProfileWatchDisposables = this._register(new Rs()), this.initialize().then(null, (a) => o.error("Error while initializing Extensions Watcher", q(a)));
  }
  async initialize() {
    await this.extensionsScannerService.initializeDefaultProfileExtensions(), await this.onDidChangeProfiles(this.userDataProfilesService.profiles), this.registerListeners(), await this.deleteExtensionsNotInProfiles();
  }
  registerListeners() {
    this._register(this.userDataProfilesService.onDidChangeProfiles((e) => this.onDidChangeProfiles(e.added))), this._register(this.extensionsProfileScannerService.onAddExtensions((e) => this.onAddExtensions(e))), this._register(this.extensionsProfileScannerService.onDidAddExtensions((e) => this.onDidAddExtensions(e))), this._register(this.extensionsProfileScannerService.onRemoveExtensions((e) => this.onRemoveExtensions(e))), this._register(this.extensionsProfileScannerService.onDidRemoveExtensions((e) => this.onDidRemoveExtensions(e))), this._register(this.fileService.onDidFilesChange((e) => this.onDidFilesChange(e)));
  }
  async onDidChangeProfiles(e) {
    try {
      e.length && await Promise.all(e.map((t) => (this.extensionsProfileWatchDisposables.set(t.id, ec(this.fileService.watch(this.uriIdentityService.extUri.dirname(t.extensionsResource)), this.fileService.watch(t.extensionsResource))), this.populateExtensionsFromProfile(t.extensionsResource))));
    } catch (t) {
      throw this.logService.error(t), t;
    }
  }
  async onAddExtensions(e) {
    for (const t of e.extensions) this.addExtensionWithKey(this.getKey(t.identifier, t.version), e.profileLocation);
  }
  async onDidAddExtensions(e) {
    for (const t of e.extensions) {
      const i = this.getKey(t.identifier, t.version);
      e.error ? this.removeExtensionWithKey(i, e.profileLocation) : this.addExtensionWithKey(i, e.profileLocation);
    }
  }
  async onRemoveExtensions(e) {
    for (const t of e.extensions) this.removeExtensionWithKey(this.getKey(t.identifier, t.version), e.profileLocation);
  }
  async onDidRemoveExtensions(e) {
    const t = [], i = [];
    for (const r of e.extensions) {
      const s = this.getKey(r.identifier, r.version);
      e.error ? this.addExtensionWithKey(s, e.profileLocation) : (this.removeExtensionWithKey(s, e.profileLocation), this.allExtensions.has(s) || (this.logService.debug("Extension is removed from all profiles", r.identifier.id, r.version), i.push(this.extensionManagementService.scanInstalledExtensionAtLocation(r.location).then((n) => {
        n ? t.push(n) : this.logService.info("Extension not found at the location", r.location.toString());
      }, (n) => this.logService.error(n)))));
    }
    try {
      await Promise.all(i), t.length && await this.deleteExtensionsNotInProfiles(t);
    } catch (r) {
      this.logService.error(r);
    }
  }
  onDidFilesChange(e) {
    for (const t of this.userDataProfilesService.profiles) e.contains(t.extensionsResource, 0, 1) && this.onDidExtensionsProfileChange(t.extensionsResource);
  }
  async onDidExtensionsProfileChange(e) {
    const t = [], i = [], r = await this.extensionsProfileScannerService.scanProfileExtensions(e), s = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
    for (const [o, a] of this.allExtensions) a.has(e) && n.add(o);
    for (const o of r) {
      const a = this.getKey(o.identifier, o.version);
      s.add(a), n.has(a) || (t.push(o.identifier), this.addExtensionWithKey(a, e));
    }
    for (const o of n) if (!s.has(o)) {
      const a = this.fromKey(o);
      a && (i.push(a.identifier), this.removeExtensionWithKey(o, e));
    }
    (t.length || i.length) && this._onDidChangeExtensionsByAnotherSource.fire({ added: t.length ? { extensions: t, profileLocation: e } : void 0, removed: i.length ? { extensions: i, profileLocation: e } : void 0 });
  }
  async populateExtensionsFromProfile(e) {
    const t = await this.extensionsProfileScannerService.scanProfileExtensions(e);
    for (const i of t) this.addExtensionWithKey(this.getKey(i.identifier, i.version), e);
  }
  async deleteExtensionsNotInProfiles(e) {
    e || (e = (await this.extensionManagementService.scanAllUserInstalledExtensions()).filter((i) => !this.allExtensions.has(this.getKey(i.identifier, i.manifest.version)))), e.length && await this.extensionManagementService.deleteExtensions(...e);
  }
  addExtensionWithKey(e, t) {
    let i = this.allExtensions.get(e);
    i || this.allExtensions.set(e, i = new Gn((r) => this.uriIdentityService.extUri.getComparisonKey(r))), i.add(t);
  }
  removeExtensionWithKey(e, t) {
    const i = this.allExtensions.get(e);
    i && i.delete(t), i?.size || this.allExtensions.delete(e);
  }
  getKey(e, t) {
    return `${mr.toKey(e.id)}@${t}`;
  }
  fromKey(e) {
    const [t, i] = ha(e);
    return i ? { identifier: { id: t }, version: i } : void 0;
  }
}, L4 = aa, qa = ".vsctmp", za = class extends Va {
  constructor(e, t, i, r, s, n, o, a, l, c, h, f, d, p, v) {
    super(e, t, p, i, f, d, v), this.environmentService = r, this.extensionsScannerService = s, this.extensionsProfileScannerService = n, this.downloadService = o, this.instantiationService = a, this.fileService = l, this.configurationService = c, this.extensionGalleryManifestService = h, this.extractingGalleryExtensions = /* @__PURE__ */ new Map(), this.knownDirectories = new Gn();
    const y = this._register(a.createInstance(Ba));
    this.extensionsScanner = this._register(a.createInstance(Ga, (_) => y.postUninstall(_))), this.manifestCache = this._register(new k4(v, l, p, this, this.logService)), this.extensionsDownloader = this._register(a.createInstance(wr));
    const E = this._register(new D4(this, this.extensionsScannerService, v, n, p, l, i));
    this._register(E.onDidChangeExtensionsByAnotherSource((_) => this.onDidChangeExtensionsFromAnotherSource(_))), this.watchForExtensionsNotInstalledBySystem();
  }
  getTargetPlatform() {
    return this._targetPlatformPromise || (this._targetPlatformPromise = _h(this.fileService, this.logService)), this._targetPlatformPromise;
  }
  async zip(e) {
    this.logService.trace("ExtensionManagementService#zip", e.identifier.id);
    const t = await this.collectFiles(e), i = await u4(z(this.extensionsDownloader.extensionsDownloadDir, dt()).fsPath, t);
    return k.file(i);
  }
  async getManifest(e) {
    const { location: t, cleanup: i } = await this.downloadVsix(e), r = Ai(t.fsPath);
    try {
      return await $a(r);
    } finally {
      await i();
    }
  }
  getInstalled(e, t = this.userDataProfilesService.defaultProfile.extensionsResource, i = { version: this.productService.version, date: this.productService.date, vscodeVersion: this.productService.vscodeVersion }) {
    return this.extensionsScanner.scanExtensions(e ?? null, t, i);
  }
  scanAllUserInstalledExtensions() {
    return this.extensionsScanner.scanAllUserExtensions();
  }
  scanInstalledExtensionAtLocation(e) {
    return this.extensionsScanner.scanUserExtensionAtLocation(e);
  }
  async computeExtensionHash(e) {
    const t = e.fsPath, i = async (n, o = "") => {
      const a = await de.readdir(n, { withFileTypes: true }), l = [];
      for (const c of a) {
        const h = H(n, c.name), f = o ? `${o}/${c.name}` : c.name;
        if (!(c.name === ".signature.sigzip" || c.name === ".cursor-integrity.json")) {
          if (c.isDirectory()) {
            const d = await i(h, f);
            l.push(...d);
          } else if (c.isFile()) try {
            const d = await Vh.promises.readFile(h);
            l.push({ path: f, content: d });
          } catch {
            this.logService.warn(`Could not read file for hashing: ${h}`);
          }
        }
      }
      return l;
    }, r = await i(t);
    r.sort((n, o) => n.path.localeCompare(o.path));
    const s = Bv.createHash("sha256");
    for (const n of r) s.update(n.path), s.update(n.content);
    return s.digest("hex");
  }
  async install(e, t = {}) {
    this.logService.trace("ExtensionManagementService#install", e.toString());
    const { location: i, cleanup: r } = await this.downloadVsix(e);
    try {
      const s = await $a(Ai(i.fsPath)), n = wt(s.publisher, s.name);
      if (!dn.includes(n)) {
        if (s.engines && s.engines.vscode && !es(s.engines.vscode, this.productService.vscodeVersion, this.productService.date)) throw new Error(m(1984, null, n, this.productService.vscodeVersion));
      }
      const o = this.allowedExtensionsService.isAllowed({ id: n, version: s.version, publisherDisplayName: void 0 });
      if (o !== true) throw new Error(m(1985, null, o.value));
      const l = (await this.installExtensions([{ manifest: s, extension: i, options: t }])).find(({ identifier: c }) => Y(c, { id: n }));
      if (l?.local) return l.local;
      throw l?.error ? l.error : be(l ? new Error(`Install of extension ${n} finished without producing a local extension or error`) : new Error(`Install of extension ${n} returned no result (another install may have been in progress and its outcome was not recorded)`));
    } finally {
      await r();
    }
  }
  async installFromLocation(e, t) {
    this.logService.trace("ExtensionManagementService#installFromLocation", e.toString());
    const i = await this.extensionsScanner.scanUserExtensionAtLocation(e);
    if (!i || !i.manifest.name || !i.manifest.version) throw new Error(`Cannot find a valid extension from the location ${e.toString()}`);
    return await this.addExtensionsToProfile([[i, { source: "resource" }]], t), this.logService.info("Successfully installed extension", i.identifier.id, t.toString()), i;
  }
  async installExtensionsFromProfile(e, t, i) {
    this.logService.trace("ExtensionManagementService#installExtensionsFromProfile", e, t.toString(), i.toString());
    const r = (await this.getInstalled(1, t)).filter((s) => e.some((n) => Y(n, s.identifier)));
    if (r.length) {
      const s = await Promise.all(r.map((n) => this.extensionsScanner.scanMetadata(n, t)));
      await this.addExtensionsToProfile(r.map((n, o) => [n, s[o]]), i), this.logService.info("Successfully installed extensions", r.map((n) => n.identifier.id), i.toString());
    }
    return r;
  }
  async updateMetadata(e, t, i) {
    return this.logService.trace("ExtensionManagementService#updateMetadata", e.identifier.id), t.isPreReleaseVersion && (t.preRelease = true, t.hasPreReleaseVersion = true), t.isMachineScoped === false && (t.isMachineScoped = void 0), t.isBuiltin === false && (t.isBuiltin = void 0), t.pinned === false && (t.pinned = void 0), e = await this.extensionsScanner.updateMetadata(e, t, i), this.manifestCache.invalidate(i), this._onDidUpdateExtensionMetadata.fire({ local: e, profileLocation: i }), e;
  }
  removeExtension(e) {
    return this.extensionsScanner.deleteExtension(e, "remove");
  }
  copyExtension(e, t, i, r) {
    return this.extensionsScanner.copyExtension(e, t, i, r);
  }
  copyExtensions(e, t) {
    return this.extensionsScanner.copyExtensions(e, t, { version: this.productService.version, date: this.productService.date, vscodeVersion: this.productService.vscodeVersion });
  }
  deleteExtensions(...e) {
    return this.extensionsScanner.setExtensionsForRemoval(...e);
  }
  async cleanUp() {
    this.logService.trace("ExtensionManagementService#cleanUp");
    try {
      await this.extensionsScanner.cleanUp();
    } catch (e) {
      this.logService.error(e);
    }
  }
  async download(e, t, i) {
    const { location: r } = await this.downloadExtension(e, t, !i);
    return r;
  }
  async downloadVsix(e) {
    if (e.scheme === le.file) return { location: e, async cleanup() {
    } };
    this.logService.trace("Downloading extension from", e.toString());
    const t = z(this.extensionsDownloader.extensionsDownloadDir, dt());
    return await this.downloadService.download(e, t), this.logService.info("Downloaded extension to", t.toString()), { location: t, cleanup: async () => {
      try {
        await this.fileService.del(t);
      } catch (r) {
        this.logService.error(r);
      }
    } };
  }
  getCurrentExtensionsManifestLocation() {
    return this.userDataProfilesService.defaultProfile.extensionsResource;
  }
  createInstallExtensionTask(e, t, i) {
    const r = t instanceof k ? new pt({ id: wt(e.publisher, e.name) }, e.version) : pt.create(t);
    return this.instantiationService.createInstance(Ka, r, e, t, i, (s, n) => {
      if (t instanceof k) return this.extractVSIX(r, t, i, n);
      let o = this.extractingGalleryExtensions.get(r.toString());
      return o || (this.extractingGalleryExtensions.set(r.toString(), o = this.downloadAndExtractGalleryExtension(r, t, s, i, n)), o.finally(() => this.extractingGalleryExtensions.delete(r.toString()))), o;
    }, this.extensionsScanner);
  }
  createUninstallExtensionTask(e, t) {
    return new T4(e, t, this.extensionsProfileScannerService);
  }
  async downloadAndExtractGalleryExtension(e, t, i, r, s) {
    const n = r.donotVerifySignature === false, { verificationStatus: o, location: a, signatureArchiveLocation: l } = await this.downloadExtension(t, i, n, r.context?.[nm]);
    try {
      if (s.isCancellationRequested) throw new Le();
      const c = await $a(a.fsPath);
      if (!new pt(t.identifier, t.version).equals(new pt({ id: wt(c.publisher, c.name) }, c.version))) throw new _e(m(1986, null, t.identifier.id), "Invalid");
      const h = await this.extensionsScanner.extractUserExtension(e, a.fsPath, false, s);
      if (l && o === ge.Success) try {
        const f = z(h.location, ".signature.sigzip");
        await this.fileService.copy(l, f, true), this.logService.info(`Stored signature archive for ${t.identifier.id} at ${f.fsPath}`);
      } catch (f) {
        this.logService.warn(`Failed to store signature archive for ${t.identifier.id}:`, q(f));
      }
      if (o !== ge.Success && this.environmentService.isBuilt) try {
        await this.extensionsDownloader.delete(a);
      } catch (f) {
        this.logService.warn("Error while deleting the downloaded file", a.toString(), q(f));
      }
      if (l) try {
        await this.extensionsDownloader.delete(l);
      } catch (f) {
        this.logService.warn("Error while deleting signature archive", l.toString(), q(f));
      }
      return { local: h, verificationStatus: o };
    } catch (c) {
      try {
        await this.extensionsDownloader.delete(a);
      } catch (h) {
        this.logService.warn("Error while deleting the downloaded file", a.toString(), q(h));
      }
      if (l) try {
        await this.extensionsDownloader.delete(l);
      } catch (h) {
        this.logService.warn("Error while deleting signature archive", l.toString(), q(h));
      }
      throw be(c);
    }
  }
  async downloadExtension(e, t, i, r) {
    if (i) {
      const l = this.productService.extensionsGallery?.serviceUrl ?? "";
      wv(l) || (this.logService.info(`Extension signature verification skipped: gallery does not support signature verification (${l})`), i = false);
    }
    const { location: s, verificationStatus: n, signatureArchiveLocation: o } = await this.extensionsDownloader.download(e, t, i, r), a = (await this.extensionGalleryManifestService.getExtensionGalleryManifest())?.capabilities.signing?.allRepositorySigned;
    if (n !== ge.Success && !(n === ge.NotSigned && !a) && i && this.environmentService.isBuilt && !(tt && this.productService.quality === "stable")) {
      try {
        await this.extensionsDownloader.delete(s);
      } catch (l) {
        this.logService.warn("Error while deleting the downloaded file", s.toString(), q(l));
      }
      if (o) try {
        await this.extensionsDownloader.delete(o);
      } catch (l) {
        this.logService.warn("Error while deleting signature archive", o.toString(), q(l));
      }
      if (!n) throw new _e(m(1987, null), "SignatureVerificationInternal");
      switch (n) {
        case ge.NotSigned:
          throw new _e(m(1988, null), "PackageNotSigned");
        case ge.PackageIntegrityCheckFailed:
        case ge.SignatureIsInvalid:
        case ge.SignatureManifestIsInvalid:
        case ge.SignatureIntegrityCheckFailed:
        case ge.EntryIsMissing:
        case ge.EntryIsTampered:
        case ge.Untrusted:
        case ge.CertificateRevoked:
        case ge.SignatureIsNotValid:
        case ge.SignatureArchiveHasTooManyEntries:
          throw new _e(m(1989, null, n), "SignatureVerificationFailed");
      }
      throw new _e(m(1990, null, n), "SignatureVerificationInternal");
    }
    return { location: s, verificationStatus: n, signatureArchiveLocation: o };
  }
  async extractVSIX(e, t, i, r) {
    return { local: await this.extensionsScanner.extractUserExtension(e, Ai(t.fsPath), It(i.keepExisting) ? !i.keepExisting : true, r) };
  }
  async collectFiles(e) {
    const t = async (r) => {
      let s = await de.readdir(r);
      s = s.map((a) => H(r, a));
      const n = await Promise.all(s.map((a) => Vh.promises.stat(a)));
      let o = Promise.resolve([]);
      return n.forEach((a, l) => {
        const c = s[l];
        a.isFile() && (o = o.then((h) => [...h, c])), a.isDirectory() && (o = o.then((h) => t(c).then((f) => [...h, ...f])));
      }), o;
    };
    return (await t(e.location.fsPath)).map((r) => ({ path: `extension/${Pc(e.location.fsPath, r)}`, localPath: r }));
  }
  async onDidChangeExtensionsFromAnotherSource({ added: e, removed: t }) {
    if (t) {
      const i = e && this.uriIdentityService.extUri.isEqual(t.profileLocation, e.profileLocation) ? t.extensions.filter((r) => e.extensions.every((s) => !Y(s, r))) : t.extensions;
      for (const r of i) this.logService.info("Extensions removed from another source", r.id, t.profileLocation.toString()), this._onDidUninstallExtension.fire({ identifier: r, profileLocation: t.profileLocation });
    }
    if (e) {
      const r = (await this.getInstalled(1, e.profileLocation)).filter((s) => e.extensions.some((n) => Y(n, s.identifier)));
      this._onDidInstallExtensions.fire(r.map((s) => (this.logService.info("Extensions added from another source", s.identifier.id, e.profileLocation.toString()), { identifier: s.identifier, local: s, profileLocation: e.profileLocation, operation: 1 })));
    }
  }
  async watchForExtensionsNotInstalledBySystem() {
    this._register(this.extensionsScanner.onExtract((t) => this.knownDirectories.add(t)));
    const e = await this.fileService.resolve(this.extensionsScannerService.userExtensionsLocation);
    for (const t of e.children ?? []) t.isDirectory && this.knownDirectories.add(t.resource);
    this._register(this.fileService.watch(this.extensionsScannerService.userExtensionsLocation)), this._register(this.fileService.onDidFilesChange((t) => this.onDidFilesChange(t)));
  }
  async onDidFilesChange(e) {
    if (!e.affects(this.extensionsScannerService.userExtensionsLocation, 1)) return;
    const t = [];
    for (const i of e.rawAdded) {
      if (this.knownDirectories.has(i) || !this.uriIdentityService.extUri.isEqual(this.uriIdentityService.extUri.dirname(i), this.extensionsScannerService.userExtensionsLocation) || this.uriIdentityService.extUri.isEqual(i, this.uriIdentityService.extUri.joinPath(this.extensionsScannerService.userExtensionsLocation, ".obsolete")) || this.uriIdentityService.extUri.basename(i).startsWith(".") || this.uriIdentityService.extUri.basename(i).endsWith(qa)) continue;
      try {
        if (!(await this.fileService.stat(i)).isDirectory) continue;
      } catch (s) {
        Ge(s) !== 1 && this.logService.error(s);
        continue;
      }
      const r = await this.extensionsScanner.scanUserExtensionAtLocation(i);
      r && r.installedTimestamp === void 0 && (this.knownDirectories.add(i), t.push(r));
    }
    t.length && (await this.addExtensionsToProfile(t.map((i) => [i, void 0]), this.userDataProfilesService.defaultProfile.extensionsResource), this.logService.info("Added extensions to default profile from external source", t.map((i) => i.identifier.id)));
  }
  async addExtensionsToProfile(e, t) {
    const i = e.map((r) => r[0]);
    await this.extensionsScanner.unsetExtensionsForRemoval(...i.map((r) => pt.create(r))), await this.extensionsProfileScannerService.addExtensionsToProfile(e, t), this._onDidInstallExtensions.fire(i.map((r) => ({ local: r, identifier: r.identifier, operation: 1, profileLocation: t })));
  }
};
za = N([x(0, yi), x(1, ii), x(2, pe), x(3, St), x(4, In), x(5, wi), x(6, Ku), x(7, Ks), x(8, ke), x(9, Jt), x(10, is), x(11, ot), x(12, Mi), x(13, je), x(14, Dt)], za);
var Ga = class extends X {
  constructor(e, t, i, r, s, n, o) {
    super(), this.beforeRemovingExtension = e, this.fileService = t, this.extensionsScannerService = i, this.extensionsProfileScannerService = r, this.uriIdentityService = s, this.logService = o, this._onExtract = this._register(new M()), this.onExtract = this._onExtract.event, this.scanAllExtensionPromise = new Ye(), this.scanUserExtensionsPromise = new Ye(), this.obsoletedResource = z(this.extensionsScannerService.userExtensionsLocation, ".obsolete"), this.obsoleteFileLimiter = new Fr();
  }
  async cleanUp() {
    await this.removeTemporarilyDeletedFolders(), await this.deleteExtensionsMarkedForRemoval(), await this.initializeExtensionSize();
  }
  async scanExtensions(e, t, i) {
    try {
      const r = { includeInvalid: true, profileLocation: t, productVersion: i };
      let s = [];
      if (e === null || e === 0) {
        let n = this.scanAllExtensionPromise.get(t);
        n || (n = this.extensionsScannerService.scanAllExtensions({}, r).finally(() => this.scanAllExtensionPromise.delete(t)), this.scanAllExtensionPromise.set(t, n)), s.push(...await n);
      } else if (e === 1) {
        let n = this.scanUserExtensionsPromise.get(t);
        n || (n = this.extensionsScannerService.scanUserExtensions(r).finally(() => this.scanUserExtensionsPromise.delete(t)), this.scanUserExtensionsPromise.set(t, n)), s.push(...await n);
      }
      return s = e !== null ? s.filter((n) => n.type === e) : s, await Promise.all(s.map((n) => this.toLocalExtension(n)));
    } catch (r) {
      throw be(r, "Scanning");
    }
  }
  async scanAllUserExtensions() {
    try {
      const e = await this.extensionsScannerService.scanAllUserExtensions();
      return await Promise.all(e.map((t) => this.toLocalExtension(t)));
    } catch (e) {
      throw be(e, "Scanning");
    }
  }
  async scanUserExtensionAtLocation(e) {
    try {
      const t = await this.extensionsScannerService.scanExistingExtension(e, 1, { includeInvalid: true });
      if (t) return await this.toLocalExtension(t);
    } catch (t) {
      this.logService.error(t);
    }
    return null;
  }
  async extractUserExtension(e, t, i, r) {
    const s = e.toString(), n = k.file(H(this.extensionsScannerService.userExtensionsLocation.fsPath, `.${dt()}`)), o = k.file(H(this.extensionsScannerService.userExtensionsLocation.fsPath, s));
    if (await this.fileService.exists(o)) {
      if (!i) try {
        return await this.scanLocalExtension(o, 1);
      } catch (a) {
        this.logService.warn(`Error while scanning the existing extension at ${o.path}. Deleting the existing extension and extracting it.`, q(a));
      }
      try {
        await this.deleteExtensionFromLocation(e.id, o, "removeExisting");
      } catch {
        throw new _e(m(1991, null, o.fsPath, e.id), "Delete");
      }
    }
    try {
      if (r.isCancellationRequested) throw new Le();
      try {
        this.logService.trace(`Started extracting the extension from ${t} to ${o.fsPath}`), await h4(t, n.fsPath, { sourcePath: "extension", overwrite: true }, r), this.logService.info(`Extracted extension to ${o}:`, e.id);
      } catch (l) {
        throw Wa(l);
      }
      const a = { installedTimestamp: Date.now(), targetPlatform: e.targetPlatform };
      try {
        a.size = await la(n, this.fileService);
      } catch (l) {
        this.logService.warn(`Error while getting the size of the extracted extension : ${n.fsPath}`, q(l));
      }
      try {
        await this.extensionsScannerService.updateManifestMetadata(n, a);
      } catch (l) {
        throw be(l, "UpdateMetadata");
      }
      if (r.isCancellationRequested) throw new Le();
      try {
        this.logService.trace(`Started renaming the extension from ${n.fsPath} to ${o.fsPath}`), await this.rename(n.fsPath, o.fsPath), this.logService.info("Renamed to", o.fsPath);
      } catch (l) {
        if (l.code === "ENOTEMPTY") {
          this.logService.info("Rename failed because extension was installed by another source. So ignoring renaming.", e.id);
          try {
            await this.fileService.del(n, { recursive: true });
          } catch {
          }
        } else throw this.logService.info(`Rename failed because of ${q(l)}. Deleted from extracted location`, n), l;
      }
      this._onExtract.fire(o);
    } catch (a) {
      try {
        await this.fileService.del(n, { recursive: true });
      } catch {
      }
      throw a;
    }
    return this.scanLocalExtension(o, 1);
  }
  async scanMetadata(e, t) {
    return (await this.getScannedExtension(e, t))?.metadata;
  }
  async getScannedExtension(e, t) {
    return (await this.extensionsProfileScannerService.scanProfileExtensions(t)).find((r) => Y(r.identifier, e.identifier));
  }
  async updateMetadata(e, t, i) {
    try {
      await this.extensionsProfileScannerService.updateMetadata([[e, t]], i);
    } catch (r) {
      throw be(r, "UpdateMetadata");
    }
    return this.scanLocalExtension(e.location, e.type, i);
  }
  async setExtensionsForRemoval(...e) {
    const t = [];
    for (const r of e) await this.fileService.exists(r.location) && t.push(r);
    const i = t.map((r) => pt.create(r));
    await this.withRemovedExtensions((r) => i.forEach((s) => {
      r[s.toString()] = true, this.logService.info("Marked extension as removed", s.toString());
    }));
  }
  async unsetExtensionsForRemoval(...e) {
    try {
      const t = [];
      return await this.withRemovedExtensions((i) => e.forEach((r) => {
        i[r.toString()] ? (t.push(true), delete i[r.toString()]) : t.push(false);
      })), t;
    } catch (t) {
      throw be(t, "UnsetRemoved");
    }
  }
  async deleteExtension(e, t) {
    this.uriIdentityService.extUri.isEqualOrParent(e.location, this.extensionsScannerService.userExtensionsLocation) && (await this.deleteExtensionFromLocation(e.identifier.id, e.location, t), await this.unsetExtensionsForRemoval(pt.create(e)));
  }
  async copyExtension(e, t, i, r) {
    const s = await this.getScannedExtension(e, t), n = await this.getScannedExtension(e, i);
    if (r = { ...s?.metadata, ...r }, n) if (this.uriIdentityService.extUri.isEqual(n.location, e.location)) await this.extensionsProfileScannerService.updateMetadata([[e, { ...n.metadata, ...r }]], i);
    else {
      const o = await this.scanLocalExtension(n.location, e.type, i);
      await this.extensionsProfileScannerService.removeExtensionsFromProfile([o.identifier], i), await this.extensionsProfileScannerService.addExtensionsToProfile([[e, { ...n.metadata, ...r }]], i);
    }
    else await this.extensionsProfileScannerService.addExtensionsToProfile([[e, r]], i);
    return this.scanLocalExtension(e.location, e.type, i);
  }
  async copyExtensions(e, t, i) {
    const r = await this.scanExtensions(1, e, i), s = await Promise.all(r.filter((n) => !n.isApplicationScoped).map(async (n) => [n, await this.scanMetadata(n, e)]));
    await this.extensionsProfileScannerService.addExtensionsToProfile(s, t);
  }
  async deleteExtensionFromLocation(e, t, i) {
    this.logService.trace(`Deleting ${i} extension from disk`, e, t.fsPath);
    const r = this.uriIdentityService.extUri.joinPath(this.uriIdentityService.extUri.dirname(t), `${this.uriIdentityService.extUri.basename(t)}.${cr(dt()).toString(16)}${qa}`);
    await this.rename(t.fsPath, r.fsPath), await this.fileService.del(r, { recursive: true }), this.logService.info(`Deleted ${i} extension from disk`, e, t.fsPath);
  }
  withRemovedExtensions(e) {
    return this.obsoleteFileLimiter.queue(async () => {
      let t;
      try {
        t = (await this.fileService.readFile(this.obsoletedResource, "utf8")).value.toString();
      } catch (r) {
        if (Ge(r) !== 1) throw r;
      }
      let i = {};
      if (t) try {
        i = JSON.parse(t);
      } catch {
      }
      if (e) if (e(i), Object.keys(i).length) await this.fileService.writeFile(this.obsoletedResource, $.fromString(JSON.stringify(i)));
      else try {
        await this.fileService.del(this.obsoletedResource);
      } catch (r) {
        if (Ge(r) !== 1) throw r;
      }
      return i;
    });
  }
  async rename(e, t) {
    try {
      await de.rename(e, t, 120 * 1e3);
    } catch (i) {
      throw be(i, "Rename");
    }
  }
  async scanLocalExtension(e, t, i) {
    try {
      if (i) {
        const s = (await this.extensionsScannerService.scanUserExtensions({ profileLocation: i })).find((n) => this.uriIdentityService.extUri.isEqual(n.location, e));
        if (s) return await this.toLocalExtension(s);
      } else {
        const r = await this.extensionsScannerService.scanExistingExtension(e, t, { includeInvalid: true });
        if (r) return await this.toLocalExtension(r);
      }
      throw new _e(m(1992, null, e.path), "ScanningExtension");
    } catch (r) {
      throw be(r, "ScanningExtension");
    }
  }
  async toLocalExtension(e) {
    let t;
    try {
      t = await this.fileService.resolve(e.location);
    } catch {
    }
    let i, r;
    return t?.children && (i = t.children.find(({ name: s }) => /^readme(\.txt|\.md|)$/i.test(s))?.resource, r = t.children.find(({ name: s }) => /^changelog(\.txt|\.md|)$/i.test(s))?.resource), { identifier: e.identifier, type: e.type, isBuiltin: e.isBuiltin || !!e.metadata?.isBuiltin, location: e.location, manifest: e.manifest, targetPlatform: e.targetPlatform, validations: e.validations, isValid: e.isValid, readmeUrl: i, changelogUrl: r, publisherDisplayName: e.metadata?.publisherDisplayName, publisherId: e.metadata?.publisherId || null, isApplicationScoped: !!e.metadata?.isApplicationScoped, isMachineScoped: !!e.metadata?.isMachineScoped, isPreReleaseVersion: !!e.metadata?.isPreReleaseVersion, hasPreReleaseVersion: !!e.metadata?.hasPreReleaseVersion, preRelease: e.preRelease, installedTimestamp: e.metadata?.installedTimestamp, updated: !!e.metadata?.updated, pinned: !!e.metadata?.pinned, private: !!e.metadata?.private, isWorkspaceScoped: false, source: e.metadata?.source ?? (e.identifier.uuid ? "gallery" : "vsix"), size: e.metadata?.size ?? 0 };
  }
  async initializeExtensionSize() {
    const e = await this.extensionsScannerService.scanAllUserExtensions();
    await Promise.all(e.map(async (t) => {
      if (Hd(t.metadata?.installedTimestamp) && _t(t.metadata?.size)) {
        const i = await la(t.location, this.fileService);
        await this.extensionsScannerService.updateManifestMetadata(t.location, { size: i });
      }
    }));
  }
  async deleteExtensionsMarkedForRemoval() {
    let e;
    try {
      e = await this.withRemovedExtensions();
    } catch (s) {
      throw be(s, "ReadRemoved");
    }
    if (Object.keys(e).length === 0) {
      this.logService.debug("No extensions are marked as removed.");
      return;
    }
    this.logService.debug("Deleting extensions marked as removed:", Object.keys(e));
    const t = await this.scanAllUserExtensions(), i = /* @__PURE__ */ new Set();
    for (const s of t) e[pt.create(s).toString()] || i.add(s.identifier.id.toLowerCase());
    try {
      const s = wh(t, (n) => n.identifier);
      await ht.settled(s.map(async (n) => {
        const o = n.sort((a, l) => bh(a.manifest.version, l.manifest.version))[0];
        i.has(o.identifier.id.toLowerCase()) || await this.beforeRemovingExtension(o);
      }));
    } catch (s) {
      this.logService.error(s);
    }
    const r = t.filter((s) => s.installedTimestamp && e[pt.create(s).toString()]);
    await Promise.allSettled(r.map((s) => this.deleteExtension(s, "marked for removal")));
  }
  async removeTemporarilyDeletedFolders() {
    this.logService.trace("ExtensionManagementService#removeTempDeleteFolders");
    let e;
    try {
      e = await this.fileService.resolve(this.extensionsScannerService.userExtensionsLocation);
    } catch (t) {
      Ge(t) !== 1 && this.logService.error(t);
      return;
    }
    if (e?.children) try {
      await Promise.allSettled(e.children.map(async (t) => {
        if (!(!t.isDirectory || !t.name.endsWith(qa))) {
          this.logService.trace("Deleting the temporarily deleted folder", t.resource.toString());
          try {
            await this.fileService.del(t.resource, { recursive: true }), this.logService.trace("Deleted the temporarily deleted folder", t.resource.toString());
          } catch (i) {
            Ge(i) !== 1 && this.logService.error(i);
          }
        }
      }));
    } catch {
    }
  }
};
Ga = N([x(1, ke), x(2, In), x(3, wi), x(4, je), x(5, ii), x(6, pe)], Ga);
var Ka = class extends hf {
  constructor(e, t, i, r, s, n, o, a, l, c, h, f) {
    super(), this.extensionKey = e, this.manifest = t, this.source = i, this.options = r, this.extractExtensionFn = s, this.extensionsScanner = n, this.uriIdentityService = o, this.galleryService = a, this.userDataProfilesService = l, this.extensionsScannerService = c, this.extensionsProfileScannerService = h, this.logService = f, this._operation = 2, this.identifier = this.extensionKey.identifier;
  }
  get operation() {
    return this.options.operation ?? this._operation;
  }
  get verificationStatus() {
    return this._verificationStatus;
  }
  async doRun(e) {
    const i = (await this.extensionsScanner.scanExtensions(1, this.options.profileLocation, this.options.productVersion)).find((o) => Y(o.identifier, this.identifier));
    i && (this._operation = 3);
    const r = { isApplicationScoped: this.options.isApplicationScoped || i?.isApplicationScoped, isMachineScoped: this.options.isMachineScoped || i?.isMachineScoped, isBuiltin: this.options.isBuiltin || i?.isBuiltin, isSystem: i?.type === 0 ? true : void 0, installedTimestamp: Date.now(), pinned: this.options.installGivenVersion ? true : this.options.pinned ?? i?.pinned, source: this.source instanceof k ? "vsix" : "gallery" };
    let s;
    if (this.source instanceof k) {
      if (i && this.extensionKey.equals(new pt(i.identifier, i.manifest.version))) try {
        await this.extensionsScanner.deleteExtension(i, "existing");
      } catch {
        throw new Error(m(1993, null, this.manifest.displayName || this.manifest.name));
      }
      const o = await this.unsetIfRemoved(this.extensionKey);
      if (o) try {
        await this.extensionsScanner.deleteExtension(o, "existing");
      } catch {
        throw new Error(m(1994, null, this.manifest.displayName || this.manifest.name));
      }
    } else {
      if (r.id = this.source.identifier.uuid, r.publisherId = this.source.publisherId, r.publisherDisplayName = this.source.publisherDisplayName, r.targetPlatform = this.source.properties.targetPlatform, r.updated = !!i, r.private = this.source.private, r.isPreReleaseVersion = this.source.properties.isPreReleaseVersion, r.hasPreReleaseVersion = i?.hasPreReleaseVersion || this.source.properties.isPreReleaseVersion, r.preRelease = It(this.options.preRelease) ? this.options.preRelease : this.options.installPreReleaseVersion || this.source.properties.isPreReleaseVersion || i?.preRelease, i && i.type !== 0 && i.manifest.version === this.source.version && !(!["undefined", "web"].includes(i.targetPlatform) && this.source.properties.targetPlatform !== "web" && i.targetPlatform !== this.source.properties.targetPlatform)) return this.extensionsScanner.updateMetadata(i, r, this.options.profileLocation);
      s = await this.unsetIfRemoved(this.extensionKey);
    }
    if (e.isCancellationRequested) throw be(new Le());
    if (!s) {
      const o = await this.extractExtensionFn(this.operation, e);
      s = o.local, this._verificationStatus = o.verificationStatus;
    }
    if (this.uriIdentityService.extUri.isEqual(this.userDataProfilesService.defaultProfile.extensionsResource, this.options.profileLocation)) try {
      await this.extensionsScannerService.initializeDefaultProfileExtensions();
    } catch (o) {
      throw be(o, "IntializeDefaultProfile");
    }
    if (e.isCancellationRequested) throw be(new Le());
    try {
      await this.extensionsProfileScannerService.addExtensionsToProfile([[s, r]], this.options.profileLocation, !s.isValid);
    } catch (o) {
      throw be(o, "AddToProfile");
    }
    const n = await this.extensionsScanner.scanLocalExtension(s.location, 1, this.options.profileLocation);
    if (!n) throw new _e("Cannot find the installed extension", "InstalledExtensionNotFound");
    return this.source instanceof k && this.updateMetadata(s, e), n;
  }
  async unsetIfRemoved(e) {
    const [t] = await this.extensionsScanner.unsetExtensionsForRemoval(e);
    if (t) return this.logService.info("Removed the extension from removed list:", e.id), (await this.extensionsScanner.scanAllUserExtensions()).find((r) => pt.create(r).equals(e));
  }
  async updateMetadata(e, t) {
    try {
      let [i] = await this.galleryService.getExtensions([{ id: e.identifier.id, version: e.manifest.version }], t);
      if (i || ([i] = await this.galleryService.getExtensions([{ id: e.identifier.id }], t)), i) {
        const r = { id: i.identifier.uuid, publisherDisplayName: i.publisherDisplayName, publisherId: i.publisherId, isPreReleaseVersion: i.properties.isPreReleaseVersion, hasPreReleaseVersion: e.hasPreReleaseVersion || i.properties.isPreReleaseVersion, preRelease: i.properties.isPreReleaseVersion || this.options.installPreReleaseVersion };
        await this.extensionsScanner.updateMetadata(e, r, this.options.profileLocation);
      }
    } catch {
    }
  }
};
Ka = N([x(6, je), x(7, yi), x(8, Dt), x(9, In), x(10, wi), x(11, pe)], Ka);
var T4 = class extends hf {
  constructor(e, t, i) {
    super(), this.extension = e, this.options = t, this.extensionsProfileScannerService = i;
  }
  doRun(e) {
    return this.extensionsProfileScannerService.removeExtensionsFromProfile([this.extension.identifier], this.options.profileLocation);
  }
};
b();
var ja = class extends $v {
  constructor(e, t, i, r, s, n, o, a) {
    super(k.file(s.builtinExtensionsPath), k.file(s.extensionsPath), s.userHome, e.defaultProfile, e, t, i, r, s, n, o, a);
  }
};
ja = N([x(0, Dt), x(1, wi), x(2, ke), x(3, pe), x(4, St), x(5, ot), x(6, je), x(7, Ks)], ja), b(), b();
async function ff(e, t, i, r, s, n) {
  let o;
  try {
    await C4(e, t, i, r, s, n);
  } catch (a) {
    o = a;
  } finally {
    o && s.errorTransformer && (o = s.errorTransformer(o)), typeof o < "u" && i.error(o), i.end();
  }
}
async function C4(e, t, i, r, s, n) {
  Ha(n);
  const o = await e.open(t, { create: false });
  try {
    Ha(n);
    let a = 0, l = 0, c = s && typeof s.length == "number" ? s.length : void 0, h = $.alloc(Math.min(s.bufferSize, typeof c == "number" ? c : s.bufferSize)), f = s && typeof s.position == "number" ? s.position : 0, d = 0;
    do
      l = await e.read(o, f, h.buffer, d, h.byteLength - d), f += l, d += l, a += l, typeof c == "number" && (c -= l), d === h.byteLength && (await i.write(r(h)), h = $.alloc(Math.min(s.bufferSize, typeof c == "number" ? c : s.bufferSize)), d = 0);
    while (l > 0 && (typeof c != "number" || c > 0) && Ha(n) && O4(a, s));
    if (d > 0) {
      let p = d;
      typeof c == "number" && (p = Math.min(d, c)), i.write(r(h.slice(0, p)));
    }
  } catch (a) {
    throw Fi(a);
  } finally {
    await e.close(o);
  }
}
function Ha(e) {
  if (e.isCancellationRequested) throw Vl();
  return true;
}
function O4(e, t) {
  if (typeof t?.limits?.size == "number" && e > t.limits.size) throw Vt(m(2057, null), Fe.FileTooLarge);
  return true;
}
b();
function U4(e) {
  return (e.scheme === "file" || e.scheme === "vscode-remote") && e.path.endsWith(".mdc");
}
var N4 = `---
alwaysApply: true
---
`, hs = class extends X {
  constructor(e) {
    super(), this.logService = e, this.BUFFER_SIZE = 256 * 1024, this._onDidChangeFileSystemProviderRegistrations = this._register(new M()), this.onDidChangeFileSystemProviderRegistrations = this._onDidChangeFileSystemProviderRegistrations.event, this._onWillActivateFileSystemProvider = this._register(new M()), this.onWillActivateFileSystemProvider = this._onWillActivateFileSystemProvider.event, this._onDidChangeFileSystemProviderCapabilities = this._register(new M()), this.onDidChangeFileSystemProviderCapabilities = this._onDidChangeFileSystemProviderCapabilities.event, this.providers = new Rs(), this._disposingProviders = false, this._onDidRunOperation = this._register(new M()), this.onDidRunOperation = this._onDidRunOperation.event, this.internalOnDidFilesChange = this._register(new M()), this._onDidUncorrelatedFilesChange = this._register(new M()), this.onDidFilesChange = this._onDidUncorrelatedFilesChange.event, this._onDidWatchError = this._register(new M()), this.onDidWatchError = this._onDidWatchError.event, this.activeWatchers = /* @__PURE__ */ new Map(), this.writeQueue = this._register(new su());
  }
  get isDisposed() {
    return this._store.isDisposed;
  }
  registerNotebookCellChecker(e) {
    return this.notebookCellExistsChecker = e, Ee(() => {
      this.notebookCellExistsChecker = void 0;
    });
  }
  registerProvider(e, t) {
    if (this.providers.has(e)) throw new Error(`A filesystem provider for the scheme '${e}' is already registered.`);
    ya(`code/registerFilesystem/${e}`);
    const i = new F4(t);
    i.add(t.onDidChangeFile((s) => {
      const n = new I0(s, !this.isPathCaseSensitive(t));
      this.internalOnDidFilesChange.fire(n), n.hasCorrelation() || this._onDidUncorrelatedFilesChange.fire(n);
    })), typeof t.onDidWatchError == "function" && i.add(t.onDidWatchError((s) => this._onDidWatchError.fire(new Error(s)))), i.add(t.onDidChangeCapabilities(() => this._onDidChangeFileSystemProviderCapabilities.fire({ provider: t, scheme: e }))), this.providers.set(e, i), this._onDidChangeFileSystemProviderRegistrations.fire({ added: true, scheme: e, provider: t });
    const r = Ee(() => this.unregisterProvider(e));
    return i.add(r), r;
  }
  unregisterProvider(e) {
    const t = this.providers.deleteAndLeak(e);
    t && (this._disposingProviders || this._onDidChangeFileSystemProviderRegistrations.fire({ added: false, scheme: e, provider: t.provider }), t.dispose());
  }
  getProvider(e) {
    return this.providers.get(e)?.provider;
  }
  async activateProvider(e) {
    const t = [];
    this._onWillActivateFileSystemProvider.fire({ scheme: e, join(i) {
      t.push(i);
    } }), !this.providers.has(e) && await ht.settled(t);
  }
  async canHandleResource(e) {
    return await this.activateProvider(e.scheme), this.hasProvider(e);
  }
  hasProvider(e) {
    return this.providers.has(e.scheme);
  }
  hasCapability(e, t) {
    const i = this.getProvider(e.scheme);
    return !!(i && i.capabilities & t);
  }
  listCapabilities() {
    return xi.map(this.providers, ([e, t]) => ({ scheme: e, capabilities: t.provider.capabilities }));
  }
  async withProvider(e) {
    if (!qp(e)) throw new nt(m(2029, null, this.resourceForError(e)), 8);
    await this.activateProvider(e.scheme);
    const t = this.getProvider(e.scheme);
    if (!t) {
      const i = new ji();
      throw i.message = m(2030, null, e.toString()), i;
    }
    return t;
  }
  async withReadProvider(e) {
    const t = await this.withProvider(e);
    if (mi(t) || Et(t) || Xo(t)) return t;
    throw new Error(`Filesystem provider for scheme '${e.scheme}' neither has FileReadWrite, FileReadStream nor FileOpenReadWriteClose capability which is needed for the read operation.`);
  }
  async withWriteProvider(e) {
    const t = await this.withProvider(e);
    if (mi(t) || Et(t)) return t;
    throw new Error(`Filesystem provider for scheme '${e.scheme}' neither has FileReadWrite nor FileOpenReadWriteClose capability which is needed for the write operation.`);
  }
  async resolve(e, t) {
    try {
      return await this.doResolveFile(e, t);
    } catch (i) {
      throw hn(i) === Fe.FileNotFound ? new nt(m(2031, null, this.resourceForError(e)), 1) : Fi(i);
    }
  }
  async doResolveFile(e, t) {
    const i = await this.withProvider(e), r = this.isPathCaseSensitive(i), s = t?.resolveTo, n = t?.resolveSingleChildDescendants, o = t?.resolveMetadata, a = await i.stat(e);
    let l;
    return this.toFileStat(i, e, a, void 0, !!o, (c, h) => (l || (l = hr.forUris(() => !r), l.set(e, true), s && l.fill(true, s)), l.get(c.resource) || l.findSuperstr(c.resource.with({ query: null, fragment: null })) ? true : c.isDirectory && n ? h === 1 : false));
  }
  async toFileStat(e, t, i, r, s, n) {
    if (!i || typeof i.type != "number") throw Vt(m(2032, null), Fe.Unknown);
    const { providerExtUri: o } = this.getExtUri(e), a = { resource: t, name: o.basename(t), isFile: (i.type & yt.File) !== 0, isDirectory: (i.type & yt.Directory) !== 0, isSymbolicLink: (i.type & yt.SymbolicLink) !== 0, mtime: i.mtime, ctime: i.ctime, size: i.size, readonly: !!((i.permissions ?? 0) & Yr.Readonly) || !!(e.capabilities & 2048), locked: !!((i.permissions ?? 0) & Yr.Locked), etag: Yu({ mtime: i.mtime, size: i.size }), children: void 0 };
    if (a.isDirectory && n(a, r)) {
      try {
        const l = s && jo(e), c = l ? await e.readdirWithMetadata(t) : (await e.readdir(t)).map(([f, d]) => [f, { type: d }]), h = await ht.settled(c.map(async ([f, d]) => {
          try {
            const p = o.joinPath(t, f), v = s && !l ? await e.stat(p) : d;
            return await this.toFileStat(e, p, v, c.length, s, n);
          } catch (p) {
            return this.logService.trace(p), null;
          }
        }));
        a.children = Xi(h);
      } catch (l) {
        this.logService.trace(l), a.children = [];
      }
      return a;
    }
    return a;
  }
  async resolveAll(e) {
    return ht.settled(e.map(async (t) => {
      try {
        return { stat: await this.doResolveFile(t.resource, t.options), success: true };
      } catch (i) {
        return this.logService.trace(i), { stat: void 0, success: false };
      }
    }));
  }
  async stat(e) {
    const t = await this.withProvider(e), i = await t.stat(e);
    return this.toFileStat(t, e, i, void 0, true, () => false);
  }
  async exists(e) {
    if (e.scheme === le.vscodeNotebookCell) return this.notebookCellExistsChecker ? await this.notebookCellExistsChecker(e) : (console.log(`[fileService.exists] Can't check if notebook cell exists: ${e.toString()}`), false);
    const t = await this.withProvider(e);
    try {
      return !!await t.stat(e);
    } catch {
      return false;
    }
  }
  async canCreateFile(e, t) {
    try {
      await this.doValidateCreateFile(e, t);
    } catch (i) {
      return i;
    }
    return true;
  }
  async doValidateCreateFile(e, t) {
    if (!t?.overwrite && await this.exists(e)) throw new nt(m(2033, null, this.resourceForError(e)), 3, t);
  }
  async createFile(e, t = $.fromString(""), i) {
    U4(e) && t.toString().trim() === "" && (t = $.fromString(N4)), await this.doValidateCreateFile(e, i);
    const r = await this.writeFile(e, t);
    return this._onDidRunOperation.fire(new dr(e, 0, r)), r;
  }
  async writeFile(e, t, i) {
    const r = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(e), e), { providerExtUri: s } = this.getExtUri(r);
    let n = i;
    if (Qu(r) && !n?.atomic) {
      const a = r.enforceAtomicWriteFile?.(e);
      a && (n = { ...i, atomic: a });
    }
    let o;
    try {
      let { stat: a, buffer: l } = await this.validateWriteFile(r, e, t, n);
      a || await this.mkdirp(r, s.dirname(e)), l || (l = await this.peekBufferForWriting(r, t)), !mi(r) || Et(r) && l instanceof $ || Et(r) && Qu(r) && n?.atomic ? o = await this.doWriteUnbuffered(r, e, n, l) : await this.doWriteBuffered(r, e, n, l instanceof $ ? Sp(l) : l), this._onDidRunOperation.fire(new dr(e, 4));
    } catch (a) {
      throw new nt(m(2034, null, this.resourceForError(e), Fi(a).toString()), Ge(a), n);
    }
    return o && typeof o.type == "number" ? this.toFileStat(r, e, o, void 0, true, () => false) : this.resolve(e, { resolveMetadata: true });
  }
  async peekBufferForWriting(e, t) {
    let i;
    if (Et(e) && !(t instanceof $)) if (Ms(t)) {
      const r = await lp(t, 3);
      r.ended ? i = $.concat(r.buffer) : i = r;
    } else i = ap(t, (r) => $.concat(r), 3);
    else i = t;
    return i;
  }
  async validateWriteFile(e, t, i, r) {
    const s = !!r?.unlock;
    if (s && !(e.capabilities & 8192)) throw new Error(m(2035, null, this.resourceForError(t)));
    if (!!r?.atomic) {
      if (!(e.capabilities & 32768)) throw new Error(m(2036, null, this.resourceForError(t)));
      if (!(e.capabilities & 2)) throw new Error(m(2037, null, this.resourceForError(t)));
      if (s) throw new Error(m(2038, null, this.resourceForError(t)));
    }
    let o;
    try {
      o = await e.stat(t);
    } catch {
      return /* @__PURE__ */ Object.create(null);
    }
    if (!o || typeof o.type != "number") return /* @__PURE__ */ Object.create(null);
    if ((o.type & yt.Directory) !== 0) throw new nt(m(2039, null, this.resourceForError(t)), 0, r);
    this.throwIfFileIsReadonly(t, o);
    let a;
    if (typeof r?.mtime == "number" && typeof r.etag == "string" && r.etag !== ea && typeof o.mtime == "number" && typeof o.size == "number" && r.mtime < o.mtime && r.etag !== Yu({ mtime: r.mtime, size: o.size })) {
      if (a = await this.peekBufferForWriting(e, i), a instanceof $ && a.byteLength === o.size) try {
        const { value: l } = await this.readFile(t, { limits: { size: o.size } });
        if (a.equals(l)) return { stat: o, buffer: a };
      } catch {
      }
      throw new nt(m(2040, null), 3, r);
    }
    return { stat: o, buffer: a };
  }
  async readFile(e, t, i) {
    const r = await this.withReadProvider(e);
    return t?.atomic ? this.doReadFileAtomic(r, e, t, i) : this.doReadFile(r, e, t, i);
  }
  async doReadFileAtomic(e, t, i, r) {
    return new Promise((s, n) => {
      this.writeQueue.queueFor(t, async () => {
        try {
          const o = await this.doReadFile(e, t, i, r);
          s(o);
        } catch (o) {
          n(o);
        }
      }, this.getExtUri(e).providerExtUri);
    });
  }
  async doReadFile(e, t, i, r) {
    const s = await this.doReadFileStream(e, t, { ...i, preferUnbuffered: true }, r);
    return { ...s, value: await rr(s.value) };
  }
  async readFileStream(e, t, i) {
    const r = await this.withReadProvider(e);
    return this.doReadFileStream(r, e, t, i);
  }
  async doReadFileStream(e, t, i, r) {
    const s = new Ii(r);
    let n = i;
    Qo(e) && e.enforceAtomicReadFile?.(t) && (n = { ...i, atomic: true });
    const o = this.validateReadFile(t, n).then((l) => l, (l) => {
      throw s.dispose(true), l;
    });
    let a;
    try {
      return typeof n?.etag == "string" && n.etag !== ea && await o, n?.atomic && Qo(e) || !(mi(e) || Xo(e)) || Et(e) && n?.preferUnbuffered ? a = this.readFileUnbuffered(e, t, n) : Xo(e) ? a = this.readFileStreamed(e, t, s.token, n) : a = this.readFileBuffered(e, t, s.token, n), a.on("end", () => s.dispose()), a.on("error", () => s.dispose()), { ...await o, value: a };
    } catch (l) {
      throw a && await Oc(a), this.restoreReadError(l, t, n);
    }
  }
  restoreReadError(e, t, i) {
    const r = m(2041, null, this.resourceForError(t), Fi(e).toString());
    return e instanceof Zo ? new Zo(r, e.stat, i) : e instanceof Yo ? new Yo(r, e.fileOperationResult, e.size, e.options) : new nt(r, Ge(e), i);
  }
  readFileStreamed(e, t, i, r = /* @__PURE__ */ Object.create(null)) {
    const s = e.readFileStream(t, r, i);
    return Uc(s, { data: (n) => n instanceof $ ? n : $.wrap(n), error: (n) => this.restoreReadError(n, t, r) }, (n) => $.concat(n));
  }
  readFileBuffered(e, t, i, r = /* @__PURE__ */ Object.create(null)) {
    const s = Ip();
    return ff(e, t, s, (n) => n, { ...r, bufferSize: this.BUFFER_SIZE, errorTransformer: (n) => this.restoreReadError(n, t, r) }, i), s;
  }
  readFileUnbuffered(e, t, i) {
    const r = Vs((s) => $.concat(s));
    return (async () => {
      try {
        let s;
        i?.atomic && Qo(e) ? s = await e.readFile(t, { atomic: true }) : s = await e.readFile(t), typeof i?.position == "number" && (s = s.slice(i.position)), typeof i?.length == "number" && (s = s.slice(0, i.length)), this.validateReadFileLimits(t, s.byteLength, i), r.end($.wrap(s));
      } catch (s) {
        r.error(s), r.end();
      }
    })(), r;
  }
  async validateReadFile(e, t) {
    const i = await this.resolve(e, { resolveMetadata: true });
    if (i.isDirectory) throw new nt(m(2042, null, this.resourceForError(e)), 0, t);
    if (typeof t?.etag == "string" && t.etag !== ea && t.etag === i.etag) throw new Zo(m(2043, null), i, t);
    return this.validateReadFileLimits(e, i.size, t), i;
  }
  validateReadFileLimits(e, t, i) {
    if (typeof i?.limits?.size == "number" && t > i.limits.size) throw new Yo(m(2044, null, this.resourceForError(e)), 7, t, i);
  }
  async canMove(e, t, i) {
    return this.doCanMoveCopy(e, t, "move", i);
  }
  async canCopy(e, t, i) {
    return this.doCanMoveCopy(e, t, "copy", i);
  }
  async doCanMoveCopy(e, t, i, r) {
    if (e.toString() !== t.toString()) try {
      const s = i === "move" ? this.throwIfFileSystemIsReadonly(await this.withWriteProvider(e), e) : await this.withReadProvider(e), n = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(t), t);
      await this.doValidateMoveCopy(s, e, n, t, i, r);
    } catch (s) {
      return s;
    }
    return true;
  }
  async move(e, t, i) {
    const r = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(e), e), s = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(t), t), n = await this.doMoveCopy(r, e, s, t, "move", !!i), o = await this.resolve(t, { resolveMetadata: true });
    return this._onDidRunOperation.fire(new dr(e, n === "move" ? 2 : 3, o)), o;
  }
  async copy(e, t, i) {
    const r = await this.withReadProvider(e), s = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(t), t), n = await this.doMoveCopy(r, e, s, t, "copy", !!i), o = await this.resolve(t, { resolveMetadata: true });
    return this._onDidRunOperation.fire(new dr(e, n === "copy" ? 3 : 2, o)), o;
  }
  async doMoveCopy(e, t, i, r, s, n) {
    if (t.toString() === r.toString()) return s;
    const { exists: o, isSameResourceWithDifferentPathCase: a } = await this.doValidateMoveCopy(e, t, i, r, s, n);
    if (o && !a && n && await this.del(r, { recursive: true }), await this.mkdirp(i, this.getExtUri(i).providerExtUri.dirname(r)), s === "copy") {
      if (e === i && Ho(e)) await e.copy(t, r, { overwrite: n });
      else {
        const l = await this.resolve(t);
        l.isDirectory ? await this.doCopyFolder(e, l, i, r) : await this.doCopyFile(e, t, i, r);
      }
      return s;
    } else return e === i ? (await e.rename(t, r, { overwrite: n }), s) : (await this.doMoveCopy(e, t, i, r, "copy", n), await this.del(t, { recursive: true }), "copy");
  }
  async doCopyFile(e, t, i, r) {
    if (mi(e) && mi(i)) return this.doPipeBuffered(e, t, i, r);
    if (mi(e) && Et(i)) return this.doPipeBufferedToUnbuffered(e, t, i, r);
    if (Et(e) && mi(i)) return this.doPipeUnbufferedToBuffered(e, t, i, r);
    if (Et(e) && Et(i)) return this.doPipeUnbuffered(e, t, i, r);
  }
  async doCopyFolder(e, t, i, r) {
    await i.mkdir(r), Array.isArray(t.children) && await ht.settled(t.children.map(async (s) => {
      const n = this.getExtUri(i).providerExtUri.joinPath(r, s.name);
      return s.isDirectory ? this.doCopyFolder(e, await this.resolve(s.resource), i, n) : this.doCopyFile(e, s.resource, i, n);
    }));
  }
  async doValidateMoveCopy(e, t, i, r, s, n) {
    let o = false;
    if (e === i) {
      const { providerExtUri: l, isPathCaseSensitive: c } = this.getExtUri(e);
      if (c || (o = l.isEqual(t, r)), o && s === "copy") throw new Error(m(2045, null, this.resourceForError(t), this.resourceForError(r)));
      if (!o && l.isEqualOrParent(r, t)) throw new Error(m(2046, null, this.resourceForError(t), this.resourceForError(r)));
    }
    const a = await this.exists(r);
    if (a && !o) {
      if (!n) throw new nt(m(2047, null, this.resourceForError(t), this.resourceForError(r)), 4);
      if (e === i) {
        const { providerExtUri: l } = this.getExtUri(e);
        if (l.isEqualOrParent(t, r)) throw new Error(m(2048, null, this.resourceForError(t), this.resourceForError(r)));
      }
    }
    return { exists: a, isSameResourceWithDifferentPathCase: o };
  }
  getExtUri(e) {
    const t = this.isPathCaseSensitive(e);
    return { providerExtUri: t ? oe : Wp, isPathCaseSensitive: t };
  }
  isPathCaseSensitive(e) {
    return !!(e.capabilities & 1024);
  }
  async createFolder(e) {
    const t = this.throwIfFileSystemIsReadonly(await this.withProvider(e), e);
    await this.mkdirp(t, e);
    const i = await this.resolve(e, { resolveMetadata: true });
    return this._onDidRunOperation.fire(new dr(e, 0, i)), i;
  }
  async mkdirp(e, t) {
    const i = [], { providerExtUri: r } = this.getExtUri(e);
    for (; !r.isEqual(t, r.dirname(t)); ) try {
      const s = await e.stat(t);
      if (!s || typeof s.type != "number") {
        i.push(r.basename(t)), t = r.dirname(t);
        continue;
      }
      if ((s.type & yt.Directory) === 0) throw new Error(m(2049, null, this.resourceForError(t)));
      break;
    } catch (s) {
      if (hn(s) !== Fe.FileNotFound) throw s;
      i.push(r.basename(t)), t = r.dirname(t);
    }
    for (let s = i.length - 1; s >= 0; s--) {
      t = r.joinPath(t, i[s]);
      try {
        await e.mkdir(t);
      } catch (n) {
        if (hn(n) !== Fe.FileExists) throw n;
      }
    }
  }
  async canDelete(e, t) {
    try {
      await this.doValidateDelete(e, t);
    } catch (i) {
      return i;
    }
    return true;
  }
  async doValidateDelete(e, t) {
    const i = this.throwIfFileSystemIsReadonly(await this.withProvider(e), e), r = !!t?.useTrash;
    if (r && !(i.capabilities & 4096)) throw new Error(m(2050, null, this.resourceForError(e)));
    const s = t?.atomic;
    if (s && !(i.capabilities & 65536)) throw new Error(m(2051, null, this.resourceForError(e)));
    if (r && s) throw new Error(m(2052, null, this.resourceForError(e)));
    let n;
    try {
      n = await i.stat(e);
    } catch {
    }
    if (n) this.throwIfFileIsReadonly(e, n);
    else throw new nt(m(2053, null, this.resourceForError(e)), 1);
    if (!!!t?.recursive) {
      const a = await this.resolve(e);
      if (a.isDirectory && Array.isArray(a.children) && a.children.length > 0) throw new Error(m(2054, null, this.resourceForError(e)));
    }
    return i;
  }
  async del(e, t) {
    const i = await this.doValidateDelete(e, t);
    let r = t;
    if (b0(i) && !r?.atomic) {
      const a = i.enforceAtomicDelete?.(e);
      a && (r = { ...t, atomic: a });
    }
    const s = !!r?.useTrash, n = !!r?.recursive, o = r?.atomic ?? false;
    await i.delete(e, { recursive: n, useTrash: s, atomic: o }), this._onDidRunOperation.fire(new dr(e, 1));
  }
  async cloneFile(e, t) {
    const i = await this.withProvider(e), r = this.throwIfFileSystemIsReadonly(await this.withWriteProvider(t), t);
    if (!(i === r && this.getExtUri(i).providerExtUri.isEqual(e, t))) return i === r && Xu(i) ? i.cloneFile(e, t) : (await this.mkdirp(r, this.getExtUri(r).providerExtUri.dirname(t)), i === r && Ho(i) ? this.writeQueue.queueFor(e, () => i.copy(e, t, { overwrite: true }), this.getExtUri(i).providerExtUri) : this.writeQueue.queueFor(e, () => this.doCopyFile(i, e, r, t), this.getExtUri(i).providerExtUri));
  }
  createWatcher(e, t) {
    return this.watch(e, { ...t, correlationId: hs.WATCHER_CORRELATION_IDS++ });
  }
  watch(e, t = { recursive: false, excludes: [] }) {
    const i = new Ve();
    let r = false, s = () => {
      r = true;
    };
    i.add(Ee(() => s())), (async () => {
      try {
        const o = await this.doWatch(e, t);
        r ? ai(o) : s = () => ai(o);
      } catch (o) {
        this.logService.error(o);
      }
    })();
    const n = t.correlationId;
    if (typeof n == "number") {
      const o = i.add(new M());
      return i.add(this.internalOnDidFilesChange.event((l) => {
        l.correlates(n) && o.fire(l);
      })), { onDidChange: o.event, dispose: () => i.dispose() };
    }
    return i;
  }
  async doWatch(e, t) {
    const i = await this.withProvider(e), r = cr([this.getExtUri(i).providerExtUri.getComparisonKey(e), t]);
    let s = this.activeWatchers.get(r);
    return s || (s = { count: 0, disposable: i.watch(e, t) }, this.activeWatchers.set(r, s)), s.count += 1, Ee(() => {
      s && (s.count--, s.count === 0 && (ai(s.disposable), this.activeWatchers.delete(r)));
    });
  }
  dispose() {
    this._disposingProviders = true, this.providers.dispose(), super.dispose();
    for (const [, e] of this.activeWatchers) ai(e.disposable);
    this.activeWatchers.clear();
  }
  async doWriteBuffered(e, t, i, r) {
    return this.writeQueue.queueFor(t, async () => {
      const s = await e.open(t, { create: true, unlock: i?.unlock ?? false });
      try {
        Ms(r) || co(r) ? await this.doWriteStreamBufferedQueued(e, s, r) : await this.doWriteReadableBufferedQueued(e, s, r);
      } catch (n) {
        throw Fi(n);
      } finally {
        await e.close(s);
      }
    }, this.getExtUri(e).providerExtUri);
  }
  async doWriteStreamBufferedQueued(e, t, i) {
    let r = 0, s;
    if (co(i)) {
      if (i.buffer.length > 0) {
        const n = $.concat(i.buffer);
        await this.doWriteBuffer(e, t, n, n.byteLength, r, 0), r += n.byteLength;
      }
      if (i.ended) return;
      s = i.stream;
    } else s = i;
    return new Promise((n, o) => {
      uo(s, { onData: async (a) => {
        s.pause();
        try {
          await this.doWriteBuffer(e, t, a, a.byteLength, r, 0);
        } catch (l) {
          return o(l);
        }
        r += a.byteLength, setTimeout(() => s.resume());
      }, onError: (a) => o(a), onEnd: () => n() });
    });
  }
  async doWriteReadableBufferedQueued(e, t, i) {
    let r = 0, s;
    for (; (s = i.read()) !== null; ) await this.doWriteBuffer(e, t, s, s.byteLength, r, 0), r += s.byteLength;
  }
  async doWriteBuffer(e, t, i, r, s, n) {
    let o = 0;
    for (; o < r; ) {
      const a = await e.write(t, s + o, i.buffer, n + o, r - o);
      o += a;
    }
  }
  async doWriteUnbuffered(e, t, i, r) {
    let s;
    return await this.writeQueue.queueFor(t, async () => {
      s = await this.doWriteUnbufferedQueued(e, t, i, r);
    }, this.getExtUri(e).providerExtUri), s;
  }
  async doWriteUnbufferedQueued(e, t, i, r) {
    let s;
    return r instanceof $ ? s = r : Ms(r) ? s = await rr(r) : co(r) ? s = await bp(r) : s = Ep(r), e.writeFile(t, s.buffer, { create: true, overwrite: true, unlock: i?.unlock ?? false, atomic: i?.atomic ?? false });
  }
  async doPipeBuffered(e, t, i, r) {
    return this.writeQueue.queueFor(r, () => this.doPipeBufferedQueued(e, t, i, r), this.getExtUri(i).providerExtUri);
  }
  async doPipeBufferedQueued(e, t, i, r) {
    let s, n;
    try {
      s = await e.open(t, { create: false }), n = await i.open(r, { create: true, unlock: false });
      const o = $.alloc(this.BUFFER_SIZE);
      let a = 0, l = 0, c = 0;
      do
        c = await e.read(s, a, o.buffer, l, o.byteLength - l), await this.doWriteBuffer(i, n, o, c, a, l), a += c, l += c, l === o.byteLength && (l = 0);
      while (c > 0);
    } catch (o) {
      throw Fi(o);
    } finally {
      await ht.settled([typeof s == "number" ? e.close(s) : Promise.resolve(), typeof n == "number" ? i.close(n) : Promise.resolve()]);
    }
  }
  async doPipeUnbuffered(e, t, i, r) {
    return this.writeQueue.queueFor(r, () => this.doPipeUnbufferedQueued(e, t, i, r), this.getExtUri(i).providerExtUri);
  }
  async doPipeUnbufferedQueued(e, t, i, r) {
    await i.writeFile(r, await e.readFile(t), { create: true, overwrite: true, unlock: false, atomic: false });
  }
  async doPipeUnbufferedToBuffered(e, t, i, r) {
    return this.writeQueue.queueFor(r, () => this.doPipeUnbufferedToBufferedQueued(e, t, i, r), this.getExtUri(i).providerExtUri);
  }
  async doPipeUnbufferedToBufferedQueued(e, t, i, r) {
    const s = await i.open(r, { create: true, unlock: false });
    try {
      const n = await e.readFile(t);
      await this.doWriteBuffer(i, s, $.wrap(n), n.byteLength, 0, 0);
    } catch (n) {
      throw Fi(n);
    } finally {
      await i.close(s);
    }
  }
  async doPipeBufferedToUnbuffered(e, t, i, r) {
    const s = await rr(this.readFileBuffered(e, t, ve.None));
    await this.doWriteUnbuffered(i, r, void 0, s);
  }
  throwIfFileSystemIsReadonly(e, t) {
    if (e.capabilities & 2048) throw new nt(m(2055, null, this.resourceForError(t)), 6);
    return e;
  }
  throwIfFileIsReadonly(e, t) {
    if ((t.permissions ?? 0) & Yr.Readonly) throw new nt(m(2056, null, this.resourceForError(e)), 6);
  }
  resourceForError(e) {
    return e.scheme === le.file ? e.fsPath : e.toString(true);
  }
  async realpath(e) {
    try {
      const t = await this.withProvider(e);
      return "realpath" in t && typeof t.realpath == "function" ? t.realpath(e) : e;
    } catch {
      return e;
    }
  }
};
hs.WATCHER_CORRELATION_IDS = 0, hs = N([x(0, pe)], hs);
var F4 = class extends Ve {
  constructor(e) {
    super(), this.provider = e;
  }
};
b();
import { promises as _i } from "fs";
b();
import * as df from "fs";
async function pf(e) {
  try {
    return await de.realpath(e);
  } catch {
    const i = M4(e);
    return await df.promises.access(i, df.constants.R_OK), i;
  }
}
function M4(e) {
  return oo(ci(e), it);
}
b(), b();
function gf(e) {
  return typeof e.correlationId == "number";
}
function V4(e) {
  return e.recursive === true;
}
var mf = class dd extends X {
  constructor(t, i, r, s) {
    super(), this.onFileChanges = t, this.onLogMessage = i, this.verboseLogging = r, this.options = s, this.watcherDisposables = this._register(new li()), this.requests = void 0, this.restartCounter = 0;
  }
  init() {
    const t = new Ve();
    this.watcherDisposables.value = t, this.watcher = this.createWatcher(t), this.watcher.setVerboseLogging(this.verboseLogging), t.add(this.watcher.onDidChangeFile((i) => this.onFileChanges(i))), t.add(this.watcher.onDidLogMessage((i) => this.onLogMessage(i))), t.add(this.watcher.onDidError((i) => this.onError(i.error, i.request)));
  }
  onError(t, i) {
    this._store.isDisposed || (this.canRestart(t, i) ? this.restartCounter < dd.MAX_RESTARTS && this.requests ? (this.error(`restarting watcher after unexpected error: ${t}`), this.restart(this.requests)) : this.error(`gave up attempting to restart watcher after unexpected error: ${t}`) : this.error(t));
  }
  canRestart(t, i) {
    return !(!this.options.restartOnError || i || t.indexOf("No space left on device") !== -1 || t.indexOf("EMFILE") !== -1);
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
mf.MAX_RESTARTS = 5;
var vf = mf, W4 = class extends vf {
  constructor(e, t, i) {
    super(e, t, i, { type: "node.js", restartOnError: false });
  }
}, $4 = class extends vf {
  constructor(e, t, i) {
    super(e, t, i, { type: "universal", restartOnError: true });
  }
};
function yf(e) {
  return e.map((t) => ({ type: t.type, resource: k.revive(t.resource), cId: t.cId }));
}
function B4(e) {
  const t = new z4();
  for (const i of e) t.processEvent(i);
  return t.coalesce();
}
function q4(e, t) {
  return typeof t == "string" && !t.startsWith(zr) && !Ic(t) ? { base: e, pattern: t } : t;
}
function wf(e, t) {
  const i = [];
  for (const r of t) i.push(Ro(q4(e, r)));
  return i;
}
var z4 = class {
  constructor() {
    this.coalesced = /* @__PURE__ */ new Set(), this.mapPathToChange = /* @__PURE__ */ new Map();
  }
  toKey(e) {
    return tt ? e.resource.fsPath : e.resource.fsPath.toLowerCase();
  }
  processEvent(e) {
    const t = this.mapPathToChange.get(this.toKey(e));
    let i = false;
    if (t) {
      const r = t.type, s = e.type;
      t.resource.fsPath !== e.resource.fsPath && (e.type === 2 || e.type === 1) ? i = true : r === 1 && s === 2 ? (this.mapPathToChange.delete(this.toKey(e)), this.coalesced.delete(t)) : r === 2 && s === 1 ? t.type = 0 : r === 1 && s === 0 || (t.type = s);
    } else i = true;
    i && (this.coalesced.add(e), this.mapPathToChange.set(this.toKey(e), e));
  }
  coalesce() {
    const e = [], t = [];
    return Array.from(this.coalesced).filter((i) => i.type !== 2 ? (e.push(i), false) : true).sort((i, r) => i.resource.fsPath.length - r.resource.fsPath.length).filter((i) => t.some((r) => P0(i.resource.fsPath, r, !tt)) ? false : (t.push(i.resource.fsPath), true)).concat(e);
  }
};
function G4(e, t) {
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
function K4(e) {
  if (typeof e == "number") {
    const t = [];
    return e & 4 && t.push("Added"), e & 8 && t.push("Deleted"), e & 2 && t.push("Updated"), t.length === 0 ? "<all>" : `[${t.join(", ")}]`;
  }
  return "<none>";
}
var j4 = class extends X {
  constructor(e, t) {
    super(), this.logService = e, this.options = t, this._onDidChangeFile = this._register(new M()), this.onDidChangeFile = this._onDidChangeFile.event, this._onDidWatchError = this._register(new M()), this.onDidWatchError = this._onDidWatchError.event, this.universalWatchRequests = /* @__PURE__ */ new Set(), this.universalWatchRequestDelayer = this._register(new Li(this.getRefreshWatchersDelay(this.universalWatchRequests.size))), this.nonRecursiveWatchRequests = /* @__PURE__ */ new Set(), this.nonRecursiveWatchRequestDelayer = this._register(new Li(this.getRefreshWatchersDelay(this.nonRecursiveWatchRequests.size)));
  }
  watch(e, t) {
    return t.recursive || this.options?.watcher?.forceUniversal ? this.watchUniversal(e, t) : this.watchNonRecursive(e, t);
  }
  getRefreshWatchersDelay(e) {
    return e > 200 ? 500 : 0;
  }
  watchUniversal(e, t) {
    const i = this.toWatchRequest(e, t);
    return this.universalWatchRequests.add(i), this.refreshUniversalWatchers(), Ee(() => {
      this.universalWatchRequests.delete(i), this.refreshUniversalWatchers();
    });
  }
  toWatchRequest(e, t) {
    const i = { path: this.toWatchPath(e), excludes: t.excludes, includes: t.includes, recursive: t.recursive, filter: t.filter, correlationId: t.correlationId };
    if (V4(i)) {
      const r = this.options?.watcher?.recursive?.usePolling;
      r === true ? i.pollingInterval = this.options?.watcher?.recursive?.pollingInterval ?? 5e3 : Array.isArray(r) && r.includes(i.path) && (i.pollingInterval = this.options?.watcher?.recursive?.pollingInterval ?? 5e3);
    }
    return i;
  }
  refreshUniversalWatchers() {
    this.universalWatchRequestDelayer.trigger(() => this.doRefreshUniversalWatchers(), this.getRefreshWatchersDelay(this.universalWatchRequests.size)).catch((e) => vt(e));
  }
  doRefreshUniversalWatchers() {
    return this.universalWatcher || (this.universalWatcher = this._register(this.createUniversalWatcher((e) => this._onDidChangeFile.fire(yf(e)), (e) => this.onWatcherLogMessage(e), this.logService.getLevel() === Se.Trace)), this._register(this.logService.onDidChangeLogLevel(() => {
      this.universalWatcher?.setVerboseLogging(this.logService.getLevel() === Se.Trace);
    }))), this.universalWatcher.watch(Array.from(this.universalWatchRequests));
  }
  watchNonRecursive(e, t) {
    const i = { path: this.toWatchPath(e), excludes: t.excludes, includes: t.includes, recursive: false, filter: t.filter, correlationId: t.correlationId };
    return this.nonRecursiveWatchRequests.add(i), this.refreshNonRecursiveWatchers(), Ee(() => {
      this.nonRecursiveWatchRequests.delete(i), this.refreshNonRecursiveWatchers();
    });
  }
  refreshNonRecursiveWatchers() {
    this.nonRecursiveWatchRequestDelayer.trigger(() => this.doRefreshNonRecursiveWatchers(), this.getRefreshWatchersDelay(this.nonRecursiveWatchRequests.size)).catch((e) => vt(e));
  }
  doRefreshNonRecursiveWatchers() {
    return this.nonRecursiveWatcher || (this.nonRecursiveWatcher = this._register(this.createNonRecursiveWatcher((e) => this._onDidChangeFile.fire(yf(e)), (e) => this.onWatcherLogMessage(e), this.logService.getLevel() === Se.Trace)), this._register(this.logService.onDidChangeLogLevel(() => {
      this.nonRecursiveWatcher?.setVerboseLogging(this.logService.getLevel() === Se.Trace);
    }))), this.nonRecursiveWatcher.watch(Array.from(this.nonRecursiveWatchRequests));
  }
  onWatcherLogMessage(e) {
    e.type === "error" && this._onDidWatchError.fire(e.message), this.logWatcherMessage(e);
  }
  logWatcherMessage(e) {
    this.logService[e.type](e.message);
  }
  toFilePath(e) {
    return ci(e.fsPath);
  }
  toWatchPath(e) {
    const t = this.toFilePath(e);
    return Z1(t);
  }
};
b(), b();
var H4 = 50, X4 = false, Q4;
function _f(e) {
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
function Xa(e) {
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
function Bi(e) {
  let t = 0;
  for (let i = 0; ; i += 7) {
    const r = e.readUInt8();
    if (t |= (r & 127) << i, !(r & 128)) return t;
  }
}
function qi(e, t) {
  if (t === 0) {
    e.writeUInt8(0);
    return;
  }
  do {
    let i = t & 127;
    t = t >>> 7, t > 0 && (i |= 128), e.writeUInt8(i);
  } while (t !== 0);
}
var J4 = class {
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
}, Ef = 4 * 1024, Y4 = 512 * 1024, Z4 = 64 * 1024, fs, Sf = $.alloc(0), e2 = class {
  constructor() {
    this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0, fs ? (this.data = fs, fs = void 0) : this.data = $.alloc(Ef);
  }
  get buffer() {
    if (!this.fragments) {
      const e = $.alloc(this.length);
      return e.set(this.data.slice(0, this.length), 0), e;
    }
    return this.flushSegment(), $.concat(this.fragments, this.totalLength);
  }
  ensureCapacity(e) {
    const t = this.length + e;
    if (t <= this.data.byteLength) return;
    let i = Math.max(this.data.byteLength * 2, Ef);
    for (; i < t; ) i *= 2;
    const r = $.alloc(i);
    this.length > 0 && r.set(this.data.slice(0, this.length), 0), this.data = r;
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
    !fs && this.data.byteLength <= Y4 && this.data !== Sf && (fs = this.data), this.data = Sf, this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0;
  }
}, bf = typeof Buffer < "u", t2 = 64 * 1024, i2 = 8;
function r2(e) {
  return !(e === null || typeof e != "object" || Array.isArray(e) || e instanceof $ || e instanceof Uint8Array || bf && Buffer.isBuffer(e));
}
function s2(e) {
  if (e.length < i2) return false;
  for (let t = 0; t < e.length; t++) if (!r2(e[t])) return false;
  return true;
}
function Qa(e, t) {
  if (t.length >= t2) {
    const i = $.fromString(t);
    qi(e, i.byteLength), e.writeReference(i);
    return;
  }
  $.withPooledString(t, (i) => {
    qi(e, i.byteLength), e.write(i);
  });
}
function Ja(e, t) {
  if (typeof t > "u") e.writeUInt8(0);
  else if (typeof t == "string") e.writeUInt8(1), Qa(e, t);
  else if (bf && Buffer.isBuffer(t)) e.writeUInt8(2), qi(e, t.byteLength), e.writeReference($.wrap(t));
  else if (t instanceof $) e.writeUInt8(3), qi(e, t.byteLength), e.writeReference(t);
  else if (Array.isArray(t)) {
    if (s2(t)) {
      const i = JSON.stringify(t);
      e.writeUInt8(5), Qa(e, i);
      return;
    }
    e.writeUInt8(4), qi(e, t.length);
    for (const i of t) Ja(e, i);
  } else if (typeof t == "number" && (t | 0) === t) e.writeUInt8(6), qi(e, t);
  else if (t instanceof Uint8Array) e.writeUInt8(7), qi(e, t.length), e.writeReference($.wrap(t));
  else {
    const i = JSON.stringify(t);
    e.writeUInt8(5), Qa(e, i);
  }
}
function Ya(e) {
  switch (e.readUInt8()) {
    case 0:
      return;
    case 1:
      return e.read(Bi(e)).toString();
    case 2:
      return e.read(Bi(e)).buffer;
    case 3:
      return e.read(Bi(e));
    case 7:
      return e.read(Bi(e)).buffer;
    case 4: {
      const i = Bi(e), r = [];
      for (let s = 0; s < i; s++) r.push(Ya(e));
      return r;
    }
    case 5:
      return JSON.parse(e.read(Bi(e)).toString());
    case 6:
      return Bi(e);
  }
}
var xf = class {
  constructor(e, t = null) {
    this.protocol = e, this.isDisposed = false, this.state = 0, this.activeRequests = new Ve(), this.handlers = /* @__PURE__ */ new Map(), this.lastRequestId = 0, this.protocolListener = new li(), this._pendingRPCDetails = /* @__PURE__ */ new Map(), this._onDidInitialize = new M(), this.onDidInitialize = this._onDidInitialize.event, this.initializeListener = new Ve(), this.protocolListener.value = this.protocol.onMessage((i) => this.onBuffer(i)), this.logger = t;
  }
  getChannel(e) {
    const t = this;
    return { call(i, r, s) {
      return t.isDisposed ? Promise.reject(new Le()) : t.requestPromise(e, i, r, s);
    }, listen(i, r) {
      return t.isDisposed ? ne.None : t.requestEvent(e, i, r);
    } };
  }
  requestPromise(e, t, i, r = ve.None) {
    const s = this.lastRequestId++, o = { id: s, type: 100, channelName: e, name: t, arg: i };
    if (r.isCancellationRequested) return Promise.reject(new Le());
    let a, l;
    return new Promise((h, f) => {
      if (r.isCancellationRequested) return f(new Le());
      const d = () => {
        const y = (E) => {
          switch (E.type) {
            case 201:
              this.handlers.delete(s), this._pendingRPCDetails.delete(s), h(E.data);
              break;
            case 202: {
              this.handlers.delete(s), this._pendingRPCDetails.delete(s);
              const _ = new Error(E.data.message);
              _.stack = Array.isArray(E.data.stack) ? E.data.stack.join(`
`) : E.data.stack, _.name = E.data.name, f(_);
              break;
            }
            case 203:
              this.handlers.delete(s), this._pendingRPCDetails.delete(s), f(E.data);
              break;
          }
        };
        this.handlers.set(s, y), this._pendingRPCDetails.set(s, { channelName: e, command: t });
        try {
          this.sendRequest(o);
        } catch (E) {
          this.handlers.delete(s), this._pendingRPCDetails.delete(s), f(E);
        }
      };
      let p = null;
      this.state === 1 ? d() : (p = Qt((y) => this.whenInitialized()), p.then(() => {
        p = null, d();
      }, () => {
      }));
      const v = () => {
        p ? (p.cancel(), p = null) : this.sendRequest({ id: s, type: 101 }), f(new Le());
      };
      a = r.onCancellationRequested(v), l = { dispose: Bl(() => {
        v(), a.dispose();
      }) }, this.activeRequests.add(l);
    }).finally(() => {
      a?.dispose(), this.activeRequests.deleteAndLeak(l), Zl(l);
    });
  }
  requestEvent(e, t, i) {
    const r = this.lastRequestId++, n = { id: r, type: 102, channelName: e, name: t, arg: i };
    let o = null;
    const a = new M({ onWillAddFirstListener: () => {
      if (this.isDisposed) return;
      const l = (h) => a.fire(h.data);
      this.handlers.set(r, l);
      const c = () => {
        this.activeRequests.add(a), this._pendingRPCDetails.set(r, { channelName: e, command: t }), this.sendRequest(n);
      };
      this.state === 1 ? c() : (o = Qt((h) => this.whenInitialized()), o.then(() => {
        o = null, c();
      }, () => {
      }));
    }, onDidRemoveLastListener: () => {
      const l = this.handlers.delete(r);
      o ? (o.cancel(), o = null) : l && (this.activeRequests.deleteAndLeak(a), Zl(a), this._pendingRPCDetails.delete(r), this.sendRequest({ id: r, type: 103 }));
    } });
    return a.event;
  }
  sendRequest(e) {
    switch (e.type) {
      case 100:
      case 102: {
        const t = this.send([e.type, e.id, e.channelName, e.name], e.arg);
        this.logger?.logOutgoing(t, e.id, 0, `${_f(e.type)}: ${e.channelName}.${e.name}`, e.arg);
        return;
      }
      case 101:
      case 103: {
        const t = this.send([e.type, e.id]);
        this.logger?.logOutgoing(t, e.id, 0, _f(e.type));
        return;
      }
    }
  }
  send(e, t = void 0) {
    const i = new e2();
    try {
      return Ja(i, e), Ja(i, t), this.sendBuffer(i.buffer);
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
    const t = new J4(e), i = X4, r = i ? performance.now() : 0, s = Ya(t), n = s[0];
    if (n !== 200 && n !== 201 && n !== 202 && n !== 203 && n !== 204) return;
    const o = Ya(t);
    if (i) {
      const a = performance.now() - r;
      if (a > H4) {
        const l = s[1] ?? 0, c = this._pendingRPCDetails.get(l);
        Q4?.({ durationMs: a, byteLength: e.byteLength, requestId: l, channelName: c?.channelName, command: c?.command, messageType: Xa(n) });
      }
    }
    switch (n) {
      case 200:
        return this.logger?.logIncoming(e.byteLength, 0, 0, Xa(n)), this.onResponse({ type: s[0] });
      case 201:
      case 202:
      case 204:
      case 203:
        return this.logger?.logIncoming(e.byteLength, s[1], 0, Xa(n), o), this.onResponse({ type: s[0], id: s[1], data: o });
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
    return ne.toPromise(this.onDidInitialize, this.initializeListener);
  }
  whenInitialized() {
    return this.state === 1 ? Promise.resolve() : this.onDidInitializePromise;
  }
  dispose() {
    this.isDisposed = true, this.protocolListener.dispose(), this.activeRequests.dispose(), this._pendingRPCDetails.clear(), this.handlers.clear(), this.initializeListener.dispose(), this._onDidInitialize.dispose();
  }
};
N([he], xf.prototype, "onDidInitializePromise", null);
function n2(e) {
  let t = false;
  return { call(i, r, s) {
    return t ? e.call(i, r, s) : Nr(0).then(() => t = true).then(() => e.call(i, r, s));
  }, listen(i, r) {
    if (t) return e.listen(i, r);
    const s = new h1();
    return Nr(0).then(() => t = true).then(() => s.input = e.listen(i, r)), s.event;
  } };
}
var Za;
((e) => {
  const t = () => {
  };
  function i(o, a, l) {
    const c = o, h = l && l.disableMarshalling, f = (p) => {
      const v = c[p];
      return l?.disableEventBuffering ? v : ne.buffer(v, true, void 0, a);
    }, d = /* @__PURE__ */ new Map();
    for (const p in c) s(p) && d.set(p, f(p));
    return new class {
      listen(p, v, y) {
        const E = d.get(v);
        if (E) return E;
        const _ = c[v];
        if (typeof _ == "function") {
          if (n(v)) return _.call(c, y);
          if (s(v)) return d.set(v, f(v)), d.get(v);
        }
        throw new ji(`Event not found: ${v}`);
      }
      call(p, v, y) {
        const E = c[v];
        if (typeof E == "function") {
          if (!h && Array.isArray(y)) for (let I = 0; I < y.length; I++) y[I] = vr(y[I]);
          let _ = E.apply(c, y);
          return _ instanceof Promise || (_ = Promise.resolve(_)), _;
        }
        throw new ji(`Method not found: ${v}`);
      }
    }();
  }
  e.fromService = i;
  function r(o, a) {
    const l = a && a.disableMarshalling;
    return new Proxy({}, { get(c, h) {
      if (typeof h != "symbol") {
        if (typeof h == "string") return a?.properties?.has(h) ? a.properties.get(h) : h === "dispose" ? t : n(h) ? function(f) {
          return o.listen(h, f);
        } : s(h) ? o.listen(h) : async function(...f) {
          let d;
          a && !Ze(a.context) ? d = [a.context, ...f] : d = f;
          const p = await o.call(h, d);
          return l ? p : vr(p);
        };
        throw new ji(`Property not found: ${String(h)}`);
      }
    } });
  }
  e.toService = r;
  function s(o) {
    return o[0] === "o" && o[1] === "n" && Ac(o.charCodeAt(2));
  }
  function n(o) {
    return /^onDynamic/.test(o) && Ac(o.charCodeAt(9));
  }
})(Za || (Za = {})), b();
import { fork as o2 } from "child_process";
b();
function a2(e) {
  const t = e;
  return t && typeof t.type == "string" && typeof t.severity == "string";
}
function l2(e) {
  const t = [];
  let i;
  try {
    const r = JSON.parse(e.arguments), s = r[r.length - 1];
    s && s.__$stack && (r.pop(), i = s.__$stack), t.push(...r);
  } catch {
    t.push("Unable to log remote console arguments", e.arguments);
  }
  return { args: t, stack: i };
}
function c2(e) {
  if (!e) return e;
  const t = e.indexOf(`
`);
  return t === -1 ? e : e.substring(0, t);
}
function u2(e, t) {
  const { args: i, stack: r } = l2(e), s = typeof i[0] == "string" && i.length === 1;
  let n = c2(r);
  n && (n = `(${n.trim()})`);
  let o = [];
  if (typeof i[0] == "string" ? n && s ? o = [`%c[${t}] %c${i[0]} %c${n}`, _r("blue"), _r(""), _r("grey")] : o = [`%c[${t}] %c${i[0]}`, _r("blue"), _r(""), ...i.slice(1)] : o = [`%c[${t}]%`, _r("blue"), ...i], n && !s && o.push(n), typeof console[e.severity] != "function") throw new Error("Unknown console method");
  console[e.severity].apply(console, o);
}
function _r(e) {
  return `color: ${e}`;
}
b();
import "fs";
b();
function h2(e) {
  if (!e) return;
  const t = /* @__PURE__ */ new Set(["DEBUG", "NODE_OPTIONS", "VSCODE_NODE_OPTIONS", "LD_PRELOAD", "DYLD_INSERT_LIBRARIES"]);
  for (const i of Object.keys(e)) t.has(i.toUpperCase()) && delete e[i];
}
function f2(e = Ut) {
  return e.comspec || "cmd.exe";
}
function d2(e) {
  let t = [], i = false;
  const r = function(s) {
    if (i) {
      t.push(s);
      return;
    }
    (!e.send(s, (o) => {
      if (o && console.error(o), i = false, t.length > 0) {
        const a = t.slice(0);
        t = [], a.forEach((l) => r(l));
      }
    }) || Re) && (i = true);
  };
  return { send: r };
}
var p2 = class {
  constructor(e, t) {
    this.modulePath = e, this.options = t, this.activeRequests = new Ve(), this.channels = /* @__PURE__ */ new Map(), this._onDidProcessExit = new M(), this.onDidProcessExit = this._onDidProcessExit.event;
    const i = t && t.timeout ? t.timeout : 6e4;
    this.disposeDelayer = new tu(i), this.child = null, this._client = null;
  }
  getChannel(e) {
    const t = this;
    return { call(i, r, s) {
      return t.requestPromise(e, i, r, s);
    }, listen(i, r) {
      return t.requestEvent(e, i, r);
    } };
  }
  requestPromise(e, t, i, r = ve.None) {
    if (!this.disposeDelayer) return Promise.reject(new Error("disposed"));
    if (r.isCancellationRequested) return Promise.reject(Vl());
    this.disposeDelayer.cancel();
    const s = this.getCachedChannel(e), n = Qt((c) => s.call(t, i, c)), o = r.onCancellationRequested(() => n.cancel()), a = Ee(() => n.cancel());
    this.activeRequests.add(a);
    const l = () => {
      o.dispose(), this.activeRequests.deleteAndLeak(a), this.activeRequests.size === 0 && this.disposeDelayer && this.disposeDelayer.trigger(() => this.disposeClient());
    };
    return n.then(l, l), n;
  }
  requestEvent(e, t, i) {
    if (!this.disposeDelayer) return ne.None;
    this.disposeDelayer.cancel();
    let r;
    const s = new M({ onWillAddFirstListener: () => {
      r = this.getCachedChannel(e).listen(t, i)(s.fire, s), this.activeRequests.add(r);
    }, onDidRemoveLastListener: () => {
      this.activeRequests.delete(r), this.activeRequests.size === 0 && this.disposeDelayer && this.disposeDelayer.trigger(() => this.disposeClient());
    } });
    return s.event;
  }
  get client() {
    if (!this._client) {
      const e = this.options && this.options.args ? this.options.args : [], t = /* @__PURE__ */ Object.create(null);
      t.env = { ...Yt(process.env), VSCODE_PARENT_PID: String(process.pid) }, this.options && this.options.env && (t.env = { ...t.env, ...this.options.env }), this.options && this.options.freshExecArgv && (t.execArgv = []), this.options && typeof this.options.debug == "number" && (t.execArgv = ["--nolazy", "--inspect=" + this.options.debug]), this.options && typeof this.options.debugBrk == "number" && (t.execArgv = ["--nolazy", "--inspect-brk=" + this.options.debugBrk]), t.execArgv === void 0 && (t.execArgv = process.execArgv.filter((h) => !/^--inspect(-brk)?=/.test(h)).filter((h) => !h.startsWith("--vscode-"))), t.serialization = "advanced", h2(t.env), this.child = o2(this.modulePath, e, t);
      const i = new M(), s = ne.fromNodeEventEmitter(this.child, "message", (h) => h)((h) => {
        if (a2(h)) {
          u2(h, `IPC Library: ${this.options.serverName}`);
          return;
        }
        h instanceof Uint8Array ? i.fire($.wrap(h)) : console.warn(`IPC "${this.options.serverName}" dropped an unexpected non-binary message`);
      }), n = this.options.useQueue ? d2(this.child) : this.child, o = (h) => this.child && this.child.connected && n.send(h.buffer), a = i.event, l = { send: o, onMessage: a };
      this._client = new xf(l);
      const c = () => this.disposeClient();
      process.once("exit", c), this.child.on("error", (h) => console.warn('IPC "' + this.options.serverName + '" errored with ' + h)), this.child.on("exit", (h, f) => {
        process.removeListener("exit", c), s.dispose(), this.activeRequests.clear(), h !== 0 && f !== "SIGTERM" && console.warn('IPC "' + this.options.serverName + '" crashed with exit code ' + h + " and signal " + f), this.disposeDelayer?.cancel(), this.disposeClient(), this._onDidProcessExit.fire({ code: h, signal: f });
      });
    }
    return this._client;
  }
  getCachedChannel(e) {
    let t = this.channels.get(e);
    return t || (t = this.client.getChannel(e), this.channels.set(e, t)), t;
  }
  disposeClient() {
    this._client && (this.child && (this.child.kill(), this.child = null), this._client = null, this.channels.clear());
  }
  dispose() {
    this._onDidProcessExit.dispose(), this.disposeDelayer?.cancel(), this.disposeDelayer = void 0, this.disposeClient(), this.activeRequests.dispose();
  }
}, g2 = class extends $4 {
  constructor(e, t, i) {
    super(e, t, i), this.init();
  }
  createWatcher(e) {
    const t = e.add(new p2(Bs.asFileUri("bootstrap-fork").fsPath, { serverName: "File Watcher", args: ["--type=fileWatcher"], env: { VSCODE_ESM_ENTRYPOINT: "vs/platform/files/node/watcher/watcherMain", VSCODE_PIPE_LOGGING: "true", VSCODE_VERBOSE_LOGGING: "true" } }));
    return e.add(t.onDidProcessExit(({ code: i, signal: r }) => this.onError(`terminated by itself with code ${i}, signal: ${r} (ETERM)`))), Za.toService(n2(t.getChannel("watcher")));
  }
};
b(), b(), b();
import { watchFile as m2, unwatchFile as v2 } from "fs";
var y2 = class extends X {
  constructor() {
    super(), this._onDidChangeFile = this._register(new M()), this.onDidChangeFile = this._onDidChangeFile.event, this._onDidLogMessage = this._register(new M()), this.onDidLogMessage = this._onDidLogMessage.event, this._onDidWatchFail = this._register(new M()), this.onDidWatchFail = this._onDidWatchFail.event, this.correlatedWatchRequests = /* @__PURE__ */ new Map(), this.nonCorrelatedWatchRequests = /* @__PURE__ */ new Map(), this.suspendedWatchRequests = this._register(new Rs()), this.suspendedWatchRequestsWithPolling = /* @__PURE__ */ new Set(), this.updateWatchersDelayer = this._register(new Li(this.getUpdateWatchersDelay())), this.suspendedWatchRequestPollingInterval = 5007, this.joinWatch = new vo(), this.verboseLogging = false, this._register(this.onDidWatchFail((e) => this.suspendWatchRequest({ id: this.computeId(e), correlationId: this.isCorrelated(e) ? e.correlationId : void 0, path: e.path })));
  }
  isCorrelated(e) {
    return gf(e);
  }
  computeId(e) {
    return this.isCorrelated(e) ? e.correlationId : cr(e);
  }
  async watch(e) {
    this.joinWatch.isSettled || this.joinWatch.complete(), this.joinWatch = new vo();
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
    for (const [i, r] of [...this.nonCorrelatedWatchRequests, ...this.correlatedWatchRequests]) this.suspendedWatchRequests.has(i) || t.push(r);
    return this.updateWatchersDelayer.trigger(() => this.doWatch(t), e ? this.getUpdateWatchersDelay() : 0).catch((i) => vt(i));
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
    const t = new Ve();
    this.suspendedWatchRequests.set(e.id, t), await this.joinWatch.p, !t.isDisposed && (this.monitorSuspendedWatchRequest(e, t), this.updateWatchers(true));
  }
  resumeWatchRequest(e) {
    this.suspendedWatchRequests.deleteAndDispose(e.id), this.suspendedWatchRequestsWithPolling.delete(e.id), this.updateWatchers(false);
  }
  monitorSuspendedWatchRequest(e, t) {
    this.doMonitorWithExistingWatcher(e, t) ? (this.trace(`reusing an existing recursive watcher to monitor ${e.path}`), this.suspendedWatchRequestsWithPolling.delete(e.id)) : (this.doMonitorWithNodeJS(e, t), this.suspendedWatchRequestsWithPolling.add(e.id));
  }
  doMonitorWithExistingWatcher(e, t) {
    const i = this.recursiveWatcher?.subscribe(e.path, (r, s) => {
      t.isDisposed || (r ? this.monitorSuspendedWatchRequest(e, t) : s?.type === 1 && this.onMonitoredPathAdded(e));
    });
    return i ? (t.add(i), true) : false;
  }
  doMonitorWithNodeJS(e, t) {
    let i = false;
    const r = (s, n) => {
      if (t.isDisposed) return;
      const o = this.isPathNotFound(s), a = this.isPathNotFound(n), l = i;
      i = o, !o && (a || l) && this.onMonitoredPathAdded(e);
    };
    this.trace(`starting fs.watchFile() on ${e.path} (correlationId: ${e.correlationId})`);
    try {
      m2(e.path, { persistent: false, interval: this.suspendedWatchRequestPollingInterval }, r);
    } catch (s) {
      this.warn(`fs.watchFile() failed with error ${s} on path ${e.path} (correlationId: ${e.correlationId})`);
    }
    t.add(Ee(() => {
      this.trace(`stopping fs.watchFile() on ${e.path} (correlationId: ${e.correlationId})`);
      try {
        v2(e.path, r);
      } catch (s) {
        this.warn(`fs.unwatchFile() failed with error ${s} on path ${e.path} (correlationId: ${e.correlationId})`);
      }
    }));
  }
  onMonitoredPathAdded(e) {
    this.trace(`detected ${e.path} exists again, resuming watcher (correlationId: ${e.correlationId})`);
    const t = { resource: k.file(e.path), type: 1, cId: e.correlationId };
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
      const i = ` >> normalized ${e.type === 1 ? "[ADDED]" : e.type === 2 ? "[DELETED]" : "[CHANGED]"} ${e.resource.fsPath}`;
      this.traceWithCorrelation(i, t);
    }
  }
  traceWithCorrelation(e, t) {
    this.verboseLogging && this.trace(`${e}${typeof t.correlationId == "number" ? ` <${t.correlationId}> ` : ""}`);
  }
  requestToString(e) {
    return `${e.path} (excludes: ${e.excludes.length > 0 ? e.excludes : "<none>"}, includes: ${e.includes && e.includes.length > 0 ? JSON.stringify(e.includes) : "<all>"}, filter: ${K4(e.filter)}, correlationId: ${typeof e.correlationId == "number" ? e.correlationId : "<none>"})`;
  }
  async setVerboseLogging(e) {
    this.verboseLogging = e;
  }
};
b();
import { watch as w2, promises as _2 } from "fs";
b();
var Ei, If = /* @__PURE__ */ new Set();
function E2(e) {
  return If.add(e), Ee(() => If.delete(e));
}
var el = class Bn extends X {
  constructor(t, i, r, s, n, o) {
    super(), this.request = t, this.recursiveWatcher = i, this.onDidFilesChange = r, this.onDidWatchFail = s, this.onLogMessage = n, this.verboseLogging = o, this.throttledFileChangesEmitter = this._register(new nu({ maxWorkChunkSize: 100, throttleDelay: 200, maxBufferedWork: 1e4 }, (a) => this.onDidFilesChange(a))), this.fileChangesAggregator = this._register(new Qp((a) => this.handleFileChanges(a), Bn.FILE_CHANGES_HANDLER_DELAY)), this.watchedKind = "file", this.inDeletedPathFlush = false, this.cts = new Ii(), this.realPath = new hi(async () => {
      let a = this.request.path;
      try {
        a = await pf(this.request.path), this.request.path !== a && this.trace(`correcting a path to watch that seems to be a symbolic link (original: ${this.request.path}, real: ${a})`);
      } catch {
      }
      return a;
    }), this._isReusingRecursiveWatcher = false, this.didFail = false, this.excludes = wf(this.request.path, this.request.excludes), this.includes = this.request.includes ? wf(this.request.path, this.request.includes) : void 0, this.filter = gf(this.request) ? this.request.filter : void 0, this.ready = this.watch();
  }
  get isReusingRecursiveWatcher() {
    return this._isReusingRecursiveWatcher;
  }
  get failed() {
    return this.didFail;
  }
  async watch() {
    try {
      const t = await _2.stat(this.request.path);
      if (this.cts.token.isCancellationRequested) return;
      await Jn(this.doWatch(t.isDirectory()), this._store);
    } catch (t) {
      t.code !== "ENOENT" ? this.error(t) : this.trace(`ignoring a path for watching who's stat info failed to resolve: ${this.request.path} (error: ${t})`), this.notifyWatchFailed();
    }
  }
  notifyWatchFailed() {
    this.didFail = true, this.onDidWatchFail?.();
  }
  async doWatch(t) {
    const i = new Ve();
    return this.doWatchWithExistingWatcher(t, i) ? (this.trace(`reusing an existing recursive watcher for ${this.request.path}`), this._isReusingRecursiveWatcher = true) : (this._isReusingRecursiveWatcher = false, await this.doWatchWithNodeJS(t, i)), i;
  }
  doWatchWithExistingWatcher(t, i) {
    if (t) return false;
    const r = k.file(this.request.path), s = this.recursiveWatcher?.subscribe(this.request.path, async (n, o) => {
      i.isDisposed || (n ? await Jn(this.doWatch(t), i) : o && (typeof o.cId == "number" || typeof this.request.correlationId == "number") && this.onFileChange({ resource: r, type: o.type, cId: this.request.correlationId }, true));
    });
    return s ? (i.add(s), true) : false;
  }
  async doWatchWithNodeJS(t, i) {
    const r = await this.realPath.value;
    if (this.cts.token.isCancellationRequested) return;
    if (Tt && Ht(r, "/Volumes/", true)) {
      this.error(`Refusing to watch ${r} for changes using fs.watch() for possibly being a network share where watching is unreliable and unstable.`);
      return;
    }
    const s = new Ii(this.cts.token);
    i.add(Ee(() => s.dispose(true)));
    const n = new Ve();
    i.add(n);
    try {
      const o = k.file(this.request.path), a = Pt(r), l = w2(r);
      n.add(Ee(() => {
        l.removeAllListeners(), l.close();
      })), this.trace(`Started watching: '${r}'`);
      const c = /* @__PURE__ */ new Set();
      if (this.watchedKind = t ? "folder" : "file", t) try {
        for (const f of await de.readdir(r)) c.add(f);
      } catch (f) {
        this.error(f);
      }
      if (this.folderChildren = c, s.token.isCancellationRequested) return;
      const h = /* @__PURE__ */ new Map();
      n.add(Ee(() => {
        for (const [, f] of h) f.dispose();
        h.clear();
      })), l.on("error", (f, d) => {
        s.token.isCancellationRequested || (this.error(`Failed to watch ${r} for changes using fs.watch() (${f}, ${d})`), this.notifyWatchFailed());
      }), l.on("change", (f, d) => {
        if (s.token.isCancellationRequested) return;
        Ei?.onRawEvent(), this.verboseLogging && this.traceWithCorrelation(`[raw] ["${f}"] ${d}`);
        let p = "";
        if (d && (p = d.toString(), Tt && (p = ka(p))), !(!p || f !== "change" && f !== "rename")) if (t) if (f === "rename") {
          h.get(p)?.dispose(), Ei?.onProbeScheduled();
          const v = setTimeout(async () => {
            if (h.delete(p), Fs(p, a, !tt) && !await de.exists(r)) {
              this.onWatchedPathDeleted(o);
              return;
            }
            if (s.token.isCancellationRequested) return;
            const y = Ei?.active ? performance.now() : void 0, E = await this.existsChildStrictCase(H(r, p));
            if (y !== void 0 && Ei?.onProbeCompleted(performance.now() - y), s.token.isCancellationRequested) return;
            let _;
            E ? c.has(p) ? _ = 0 : (_ = 1, c.add(p)) : (c.delete(p), _ = 2), this.onFileChange({ resource: z(o, p), type: _, cId: this.request.correlationId });
          }, Bn.FILE_DELETE_HANDLER_DELAY);
          h.set(p, Ee(() => clearTimeout(v)));
        } else {
          let v;
          c.has(p) ? v = 0 : (v = 1, c.add(p)), this.onFileChange({ resource: z(o, p), type: v, cId: this.request.correlationId });
        }
        else if (f === "rename" || !Fs(p, a, !tt)) {
          const v = setTimeout(async () => {
            const y = await de.exists(r);
            s.token.isCancellationRequested || (y ? (this.onFileChange({ resource: o, type: 0, cId: this.request.correlationId }, true), await Jn(this.doWatch(false), n)) : this.onWatchedPathDeleted(o));
          }, Bn.FILE_DELETE_HANDLER_DELAY);
          n.clear(), n.add(Ee(() => clearTimeout(v)));
        } else this.onFileChange({ resource: o, type: 0, cId: this.request.correlationId }, true);
      });
    } catch (o) {
      if (s.token.isCancellationRequested) return;
      this.error(`Failed to watch ${r} for changes using fs.watch() (${o.toString()})`), this.notifyWatchFailed();
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
  onFileChange(t, i = false) {
    this.cts.token.isCancellationRequested || (this.verboseLogging && this.traceWithCorrelation(`${t.type === 1 ? "[ADDED]" : t.type === 2 ? "[DELETED]" : "[CHANGED]"} ${t.resource.fsPath}`), !i && this.excludes.some((r) => r(t.resource.fsPath)) ? this.verboseLogging && this.traceWithCorrelation(` >> ignored (excluded) ${t.resource.fsPath}`) : !i && this.includes && this.includes.length > 0 && !this.includes.some((r) => r(t.resource.fsPath)) ? this.verboseLogging && this.traceWithCorrelation(` >> ignored (not included) ${t.resource.fsPath}`) : this.fileChangesAggregator.work(t));
  }
  handleFileChanges(t) {
    const i = Ei?.active ? performance.now() : void 0, r = B4(t), s = i !== void 0 ? performance.now() : 0, n = [];
    for (const l of r) {
      if (G4(l, this.filter)) {
        this.verboseLogging && this.traceWithCorrelation(` >> ignored (filtered) ${l.resource.fsPath}`);
        continue;
      }
      n.push(l);
    }
    if (n.length === 0) {
      i !== void 0 && this.reportFlush({ flushStart: i, coalesceDone: s, emitStart: 0, fileChanges: t, filteredEvents: n, emitted: false });
      return;
    }
    if (this.verboseLogging) for (const l of n) this.traceWithCorrelation(` >> normalized ${l.type === 1 ? "[ADDED]" : l.type === 2 ? "[DELETED]" : "[CHANGED]"} ${l.resource.fsPath}`);
    const o = i !== void 0 ? performance.now() : 0, a = this.throttledFileChangesEmitter.work(n);
    i !== void 0 && this.reportFlush({ flushStart: i, coalesceDone: s, emitStart: o, fileChanges: t, filteredEvents: n, emitted: a }), a ? this.throttledFileChangesEmitter.pending > 0 && this.trace(`started throttling events due to large amount of file change events at once (pending: ${this.throttledFileChangesEmitter.pending}, most recent change: ${n[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`) : this.warn(`started ignoring events due to too many file change events at once (incoming: ${n.length}, most recent change: ${n[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`);
  }
  reportFlush(t) {
    const i = performance.now();
    Ei?.onFlush({ flushMs: i - t.flushStart, coalesceMs: t.coalesceDone - t.flushStart, emitMs: t.emitStart ? i - t.emitStart : 0, inEvents: t.fileChanges.length, outEvents: t.filteredEvents.length, emitted: t.emitted, pending: this.throttledFileChangesEmitter.pending, entry: this.inDeletedPathFlush ? "deleted_path_flush" : "timer", request: this.request, targetKind: this.watchedKind, folderChildren: this.folderChildren?.size ?? 0, fileChanges: t.fileChanges });
  }
  async existsChildStrictCase(t) {
    if (tt) return de.exists(t);
    try {
      const i = Pt(t);
      return (await de.readdir(ui(t))).some((s) => s === i);
    } catch (i) {
      return this.trace(i), false;
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
el.FILE_DELETE_HANDLER_DELAY = 100, el.FILE_CHANGES_HANDLER_DELAY = 75;
var S2 = el, b2 = class extends y2 {
  constructor(e) {
    super(), this.recursiveWatcher = e, this.onDidError = ne.None, this._watchers = /* @__PURE__ */ new Map(), this.worker = this._register(new li()), this._register(E2(() => this._watchers.size));
  }
  get watchers() {
    return this._watchers.values();
  }
  async doWatch(e) {
    e = this.removeDuplicateRequests(e);
    const t = [], i = new Set(Array.from(this.watchers));
    for (const r of e) {
      const s = this._watchers.get(this.requestToWatcherKey(r));
      s && Du(s.request.excludes, r.excludes) && Du(s.request.includes, r.includes) ? i.delete(s) : t.push(r);
    }
    t.length && this.trace(`Request to start watching: ${t.map((r) => this.requestToString(r)).join(",")}`), i.size && this.trace(`Request to stop watching: ${Array.from(i).map((r) => this.requestToString(r.request)).join(",")}`), this.worker.clear();
    for (const r of i) this.stopWatching(r);
    this.createWatchWorker().work(t);
  }
  createWatchWorker() {
    return this.worker.value = new nu({ maxWorkChunkSize: 100, throttleDelay: 100, maxBufferedWork: Number.MAX_VALUE }, (e) => {
      for (const t of e) this.startWatching(t);
    }), this.worker.value;
  }
  requestToWatcherKey(e) {
    return typeof e.correlationId == "number" ? e.correlationId : this.pathToWatcherKey(e.path);
  }
  pathToWatcherKey(e) {
    return tt ? e : e.toLowerCase();
  }
  startWatching(e) {
    const t = new S2(e, this.recursiveWatcher, (r) => this._onDidChangeFile.fire(r), () => this._onDidWatchFail.fire(e), (r) => this._onDidLogMessage.fire(r), this.verboseLogging), i = { request: e, instance: t };
    this._watchers.set(this.requestToWatcherKey(e), i), Ei?.onWatcherStart();
  }
  async stop() {
    await super.stop();
    for (const e of this.watchers) this.stopWatching(e);
  }
  stopWatching(e) {
    this.trace("stopping file watcher", e), this._watchers.delete(this.requestToWatcherKey(e.request)), e.instance.dispose(), Ei?.onWatcherStop();
  }
  removeDuplicateRequests(e) {
    const t = /* @__PURE__ */ new Map();
    for (const i of e) {
      let r = t.get(i.correlationId);
      r || (r = /* @__PURE__ */ new Map(), t.set(i.correlationId, r));
      const s = this.pathToWatcherKey(i.path);
      r.has(s) && this.trace(`ignoring a request for watching who's path is already watched: ${this.requestToString(i)}`), r.set(s, i);
    }
    return Array.from(t.values()).map((i) => Array.from(i.values())).flat();
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
}, x2 = class extends W4 {
  constructor(e, t, i) {
    super(e, t, i), this.init();
  }
  createWatcher(e) {
    return e.add(new b2(void 0));
  }
}, tl = class xs extends j4 {
  constructor(t, i) {
    super(t, i), this.onDidChangeCapabilities = ne.None, this.resourceLocks = new Ye((r) => mo.getComparisonKey(r)), this.mapHandleToPos = /* @__PURE__ */ new Map(), this.mapHandleToLock = /* @__PURE__ */ new Map(), this.writeHandles = /* @__PURE__ */ new Map();
  }
  get capabilities() {
    return this._capabilities || (this._capabilities = 516126, tt && (this._capabilities |= 1024)), this._capabilities;
  }
  async stat(t) {
    try {
      return await this.doStat(this.toFilePath(t));
    } catch (i) {
      throw this.toFileSystemProviderError(i);
    }
  }
  async doStat(t) {
    const { stat: i, symbolicLink: r } = await gt.stat(t);
    return { type: this.toType(i, r), ctime: i.birthtime.getTime(), mtime: i.mtime.getTime(), size: i.size, permissions: (i.mode & 128) === 0 ? Yr.Locked : void 0 };
  }
  async statIgnoreError(t) {
    try {
      return await this.stat(t);
    } catch {
      return;
    }
  }
  async realpath(t) {
    try {
      const i = this.toFilePath(t), r = await pf(i);
      return k.file(r);
    } catch (i) {
      throw this.toFileSystemProviderError(i);
    }
  }
  async readdir(t) {
    try {
      const i = await de.readdir(this.toFilePath(t), { withFileTypes: true }), r = [];
      return await Promise.all(i.map(async (s) => {
        try {
          let n;
          s.isSymbolicLink() ? n = (await this.stat(z(t, s.name))).type : n = this.toType(s), r.push([s.name, n]);
        } catch (n) {
          this.logService.trace(n);
        }
      })), r;
    } catch (i) {
      throw this.toFileSystemProviderError(i);
    }
  }
  async readdirWithMetadata(t) {
    try {
      const i = this.toFilePath(t), r = await de.readdir(i, { withFileTypes: true }), s = [];
      return await Promise.all(r.map(async (n) => {
        try {
          s.push([n.name, await this.doStat(H(i, n.name))]);
        } catch (o) {
          this.logService.trace(o);
        }
      })), s;
    } catch (i) {
      throw this.toFileSystemProviderError(i);
    }
  }
  toType(t, i) {
    let r;
    return i?.dangling ? r = yt.Unknown : t.isFile() ? r = yt.File : t.isDirectory() ? r = yt.Directory : r = yt.Unknown, i && (r |= yt.SymbolicLink), r;
  }
  async createResourceLock(t) {
    const i = this.toFilePath(t);
    this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - request to acquire resource lock (${i})`);
    let r;
    for (; r = this.resourceLocks.get(t); ) this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - waiting for resource lock to be released (${i})`), await r.wait();
    const s = new iu();
    return this.resourceLocks.set(t, s), this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - new resource lock created (${i})`), Ee(() => {
      this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - resource lock dispose() (${i})`), this.resourceLocks.get(t) === s && (this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - resource lock removed from resource-lock map (${i})`), this.resourceLocks.delete(t)), this.traceLock(`[Disk FileSystemProvider]: createResourceLock() - resource lock barrier open() (${i})`), s.open();
    });
  }
  async readFile(t, i) {
    let r;
    try {
      i?.atomic && (this.traceLock(`[Disk FileSystemProvider]: atomic read operation started (${this.toFilePath(t)})`), r = await this.createResourceLock(t));
      const s = this.toFilePath(t);
      return await _i.readFile(s);
    } catch (s) {
      throw this.toFileSystemProviderError(s);
    } finally {
      r?.dispose();
    }
  }
  traceLock(t) {
    xs.TRACE_LOG_RESOURCE_LOCKS && this.logService.trace(t);
  }
  readFileStream(t, i, r) {
    const s = Vs((n) => $.concat(n.map((o) => $.wrap(o))).buffer);
    return ff(this, t, s, (n) => n.buffer, { ...i, bufferSize: 256 * 1024 }, r), s;
  }
  async writeFile(t, i, r) {
    return r?.atomic !== false && r?.atomic?.postfix && await this.canWriteFileAtomic(t) ? this.doWriteFileAtomic(t, z($p(t), `${nr(t)}${r.atomic.postfix}`), i, r) : this.doWriteFile(t, i, r);
  }
  async canWriteFileAtomic(t) {
    try {
      const i = this.toFilePath(t), { symbolicLink: r } = await gt.stat(i);
      if (r) return false;
    } catch {
    }
    return true;
  }
  async doWriteFileAtomic(t, i, r, s) {
    const n = new Ve();
    try {
      n.add(await this.createResourceLock(t)), n.add(await this.createResourceLock(i)), await this.doWriteFile(i, r, s, true);
      try {
        await this.rename(i, t, { overwrite: true });
      } catch (o) {
        try {
          await this.delete(i, { recursive: false, useTrash: false, atomic: false });
        } catch {
        }
        throw o;
      }
    } finally {
      n.dispose();
    }
  }
  async doWriteFile(t, i, r, s) {
    let n;
    try {
      const o = this.toFilePath(t);
      if (!r.create || !r.overwrite) {
        if (await de.exists(o)) {
          if (!r.overwrite) throw Vt(m(2060, null), Fe.FileExists);
        } else if (!r.create) throw Vt(m(2061, null), Fe.FileNotFound);
      }
      if (n = await this.open(t, { create: true, unlock: r.unlock }, s), await this.write(n, 0, i, 0, i.byteLength), o.endsWith(".cursor/mcp.json") && !Re) try {
        await _i.chmod(o, 384), this.logService.trace(`Set secure permissions on MCP config file: ${o}`);
      } catch (a) {
        this.logService.error(`Failed to set secure permissions on MCP config file: ${o}`, a);
      }
    } catch (o) {
      throw await this.toFileSystemProviderWriteError(t, o);
    } finally {
      typeof n == "number" && await this.close(n);
    }
  }
  static configureFlushOnWrite(t) {
    xs.canFlush = t;
  }
  async open(t, i, r) {
    const s = this.toFilePath(t);
    let n;
    fr(i) && !r && (n = await this.createResourceLock(t));
    let o;
    try {
      if (fr(i) && i.unlock) try {
        const { stat: a } = await gt.stat(s);
        a.mode & 128 || await _i.chmod(s, a.mode | 128);
      } catch (a) {
        a.code !== "ENOENT" && this.logService.trace(a);
      }
      if (Re && fr(i)) try {
        o = await de.open(s, "r+"), await de.ftruncate(o, 0);
      } catch (a) {
        if (a.code !== "ENOENT" && this.logService.trace(a), typeof o == "number") {
          try {
            await de.close(o);
          } catch (l) {
            this.logService.trace(l);
          }
          o = void 0;
        }
      }
      typeof o != "number" && (o = await de.open(s, fr(i) ? "w" : "r"));
    } catch (a) {
      throw n?.dispose(), fr(i) ? await this.toFileSystemProviderWriteError(t, a) : this.toFileSystemProviderError(a);
    }
    if (this.mapHandleToPos.set(o, 0), fr(i) && this.writeHandles.set(o, t), n) {
      const a = this.mapHandleToLock.get(o);
      this.traceLock(`[Disk FileSystemProvider]: open() - storing lock for handle ${o} (${s})`), this.mapHandleToLock.set(o, n), a && (this.traceLock(`[Disk FileSystemProvider]: open() - disposing a previous lock that was still stored on same handle ${o} (${s})`), a.dispose());
    }
    return o;
  }
  async close(t) {
    const i = this.mapHandleToLock.get(t);
    try {
      if (this.mapHandleToPos.delete(t), this.writeHandles.delete(t) && xs.canFlush) try {
        await de.fdatasync(t);
      } catch (r) {
        xs.configureFlushOnWrite(false), this.logService.error(r);
      }
      return await de.close(t);
    } catch (r) {
      throw this.toFileSystemProviderError(r);
    } finally {
      i && (this.mapHandleToLock.get(t) === i && (this.traceLock(`[Disk FileSystemProvider]: close() - resource lock removed from handle-lock map ${t}`), this.mapHandleToLock.delete(t)), this.traceLock(`[Disk FileSystemProvider]: close() - disposing lock for handle ${t}`), i.dispose());
    }
  }
  async read(t, i, r, s, n) {
    const o = this.normalizePos(t, i);
    let a = null;
    try {
      a = (await de.read(t, r, s, n, o)).bytesRead;
    } catch (l) {
      throw this.toFileSystemProviderError(l);
    } finally {
      this.updatePos(t, o, a);
    }
    return a;
  }
  normalizePos(t, i) {
    return i === this.mapHandleToPos.get(t) ? null : i;
  }
  updatePos(t, i, r) {
    const s = this.mapHandleToPos.get(t);
    typeof s == "number" && (typeof i == "number" || (typeof r == "number" ? this.mapHandleToPos.set(t, s + r) : this.mapHandleToPos.delete(t)));
  }
  async write(t, i, r, s, n) {
    return Zp(() => this.doWrite(t, i, r, s, n), 100, 3);
  }
  async doWrite(t, i, r, s, n) {
    const o = this.normalizePos(t, i);
    let a = null;
    try {
      a = (await de.write(t, r, s, n, o)).bytesWritten;
    } catch (l) {
      throw await this.toFileSystemProviderWriteError(this.writeHandles.get(t), l);
    } finally {
      this.updatePos(t, o, a);
    }
    return a;
  }
  async mkdir(t) {
    try {
      await _i.mkdir(this.toFilePath(t));
    } catch (i) {
      throw this.toFileSystemProviderError(i);
    }
  }
  async delete(t, i) {
    try {
      const r = this.toFilePath(t);
      if (i.recursive) {
        let s;
        i?.atomic !== false && i.atomic.postfix && (s = H(ui(r), `${Pt(r)}${i.atomic.postfix}`)), await de.rm(r, Wh.MOVE, s);
      } else try {
        await _i.unlink(r);
      } catch (s) {
        if (s.code === "EPERM" || s.code === "EISDIR") {
          let n = false;
          try {
            const { stat: o, symbolicLink: a } = await gt.stat(r);
            n = o.isDirectory() && !a;
          } catch {
          }
          if (n) await _i.rmdir(r);
          else throw s;
        } else throw s;
      }
    } catch (r) {
      throw this.toFileSystemProviderError(r);
    }
  }
  async rename(t, i, r) {
    const s = this.toFilePath(t), n = this.toFilePath(i);
    if (s !== n) try {
      await this.validateMoveCopy(t, i, "move", r.overwrite), await de.rename(s, n);
    } catch (o) {
      throw (o.code === "EINVAL" || o.code === "EBUSY" || o.code === "ENAMETOOLONG") && (o = new Error(m(2062, null, Pt(s), Pt(ui(n)), o.toString()))), this.toFileSystemProviderError(o);
    }
  }
  async copy(t, i, r) {
    const s = this.toFilePath(t), n = this.toFilePath(i);
    if (s !== n) try {
      await this.validateMoveCopy(t, i, "copy", r.overwrite), await de.copy(s, n, { preserveSymlinks: true });
    } catch (o) {
      throw (o.code === "EINVAL" || o.code === "EBUSY" || o.code === "ENAMETOOLONG") && (o = new Error(m(2063, null, Pt(s), Pt(ui(n)), o.toString()))), this.toFileSystemProviderError(o);
    }
  }
  async validateMoveCopy(t, i, r, s) {
    const n = this.toFilePath(t), o = this.toFilePath(i);
    let a = false;
    if (!!(this.capabilities & 1024) || (a = Fs(n, o, true)), a) {
      if (r === "copy") throw Vt(m(2064, null), Fe.FileExists);
      if (r === "move") return;
    }
    const c = await this.statIgnoreError(t);
    if (!c) throw Vt(m(2065, null), Fe.FileNotFound);
    const h = await this.statIgnoreError(i);
    if (h) {
      if (!s) throw Vt(m(2066, null), Fe.FileExists);
      (c.type & yt.File) !== 0 && (h.type & yt.File) !== 0 || await this.delete(i, { recursive: true, useTrash: false, atomic: false });
    }
  }
  async cloneFile(t, i) {
    return this.doCloneFile(t, i, false);
  }
  async doCloneFile(t, i, r) {
    const s = this.toFilePath(t), n = this.toFilePath(i), o = !!(this.capabilities & 1024);
    if (Fs(s, n, !o)) return;
    const a = new Ve();
    try {
      a.add(await this.createResourceLock(t)), a.add(await this.createResourceLock(i)), r && await _i.mkdir(ui(n), { recursive: true }), await _i.copyFile(s, n);
    } catch (l) {
      if (l.code === "ENOENT" && !r) return this.doCloneFile(t, i, true);
      throw this.toFileSystemProviderError(l);
    } finally {
      a.dispose();
    }
  }
  createUniversalWatcher(t, i, r) {
    return new g2((s) => t(s), (s) => i(s), r);
  }
  createNonRecursiveWatcher(t, i, r) {
    return new x2((s) => t(s), (s) => i(s), r);
  }
  toFileSystemProviderError(t) {
    if (t instanceof Jo) return t;
    let i = t, r;
    switch (t.code) {
      case "ENOENT":
        r = Fe.FileNotFound;
        break;
      case "EISDIR":
        r = Fe.FileIsADirectory;
        break;
      case "ENOTDIR":
        r = Fe.FileNotADirectory;
        break;
      case "EEXIST":
        r = Fe.FileExists;
        break;
      case "EPERM":
      case "EACCES":
        r = Fe.NoPermissions;
        break;
      case "ERR_UNC_HOST_NOT_ALLOWED":
        i = `${t.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.`, r = Fe.Unknown;
        break;
      default:
        r = Fe.Unknown;
    }
    return Vt(i, r);
  }
  async toFileSystemProviderWriteError(t, i) {
    let r = this.toFileSystemProviderError(i);
    if (t && r.code === Fe.NoPermissions) try {
      const { stat: s } = await gt.stat(this.toFilePath(t));
      s.mode & 128 || (r = Vt(i, Fe.FileWriteLocked));
    } catch (s) {
      this.logService.trace(s);
    }
    return r;
  }
};
tl.TRACE_LOG_RESOURCE_LOCKS = false, tl.canFlush = true;
var I2 = tl;
b();
var He = class {
  constructor(e, t = [], i = false, r = false) {
    this.ctor = e, this.staticArguments = t, this.supportsDelayedInstantiation = i, this.supportsLazyInstantiation = r;
  }
};
b(), b();
var P2 = class {
  constructor(e, t) {
    this.key = e, this.data = t, this.incoming = /* @__PURE__ */ new Map(), this.outgoing = /* @__PURE__ */ new Map();
  }
}, Pf = class {
  constructor(e) {
    this._hashFn = e, this._nodes = /* @__PURE__ */ new Map();
  }
  roots() {
    const e = [];
    for (const t of this._nodes.values()) t.outgoing.size === 0 && e.push(t);
    return e;
  }
  insertEdge(e, t) {
    const i = this.lookupOrInsertNode(e), r = this.lookupOrInsertNode(t);
    i.outgoing.set(r.key, r), r.incoming.set(i.key, i);
  }
  removeNode(e) {
    const t = this._hashFn(e);
    this._nodes.delete(t);
    for (const i of this._nodes.values()) i.outgoing.delete(t), i.incoming.delete(t);
  }
  lookupOrInsertNode(e) {
    const t = this._hashFn(e);
    let i = this._nodes.get(t);
    return i || (i = new P2(t, e), this._nodes.set(t, i)), i;
  }
  lookup(e) {
    return this._nodes.get(this._hashFn(e));
  }
  isEmpty() {
    return this._nodes.size === 0;
  }
  toString() {
    const e = [];
    for (const [t, i] of this._nodes) e.push(`${t}
	(-> incoming)[${[...i.incoming.keys()].join(", ")}]
	(outgoing ->)[${[...i.outgoing.keys()].join(",")}]
`);
    return e.join(`
`);
  }
  findCycleSlow() {
    for (const [e, t] of this._nodes) {
      const i = /* @__PURE__ */ new Set([e]), r = this._findCycle(t, i);
      if (r) return r;
    }
  }
  _findCycle(e, t) {
    for (const [i, r] of e.outgoing) {
      if (t.has(i)) return [...t, i].join(" -> ");
      t.add(i);
      const s = this._findCycle(r, t);
      if (s) return s;
      t.delete(i);
    }
  }
};
b();
var Rf = class {
  constructor(...e) {
    this._entries = /* @__PURE__ */ new Map();
    for (const [t, i] of e) this.set(t, i);
  }
  set(e, t) {
    const i = this._entries.get(e);
    return this._entries.set(e, t), i;
  }
  has(e) {
    return this._entries.has(e);
  }
  get(e) {
    return this._entries.get(e);
  }
}, R2 = class {
  constructor(e) {
    this._lazy = new hi(e);
  }
  get value() {
    return this._lazy.value;
  }
  get isInitialized() {
    return this._lazy.hasValue;
  }
  dispose() {
  }
}, A2 = false, Af = class extends Error {
  constructor(e, t) {
    super("cyclic dependency between services"), this.message = `REASON: ${t}
` + (e.findCycleSlow() ?? `UNABLE to detect cycle, dumping graph: 
${e.toString()}`);
  }
}, k2 = class Dl {
  constructor(t = new Rf(), i = false, r, s = A2, n = false, o) {
    this._services = t, this._strict = i, this._parent = r, this._enableTracing = s, this._enableLazyInstantiation = n, this._label = o, this._isDisposed = false, this._servicesToMaybeDispose = /* @__PURE__ */ new Set(), this._children = /* @__PURE__ */ new Set(), this._activeInstantiations = /* @__PURE__ */ new Set(), this._services.set(Ks, this), this._globalGraph = s ? r?._globalGraph ?? new Pf((a) => a) : void 0;
  }
  dispose() {
    if (!this._isDisposed) {
      this._isDisposed = true, this._disposedAt = new Error("InstantiationService disposed here");
      for (const t of [...this._children]) try {
        t.dispose();
      } catch (i) {
        vt(i);
      }
      this._children.clear();
      for (const t of this._servicesToMaybeDispose) if (Qn(t)) try {
        t.dispose();
      } catch (i) {
        vt(i);
      }
      this._servicesToMaybeDispose.clear();
    }
  }
  _throwIfDisposed() {
    if (this._isDisposed) {
      const t = this._findLabel();
      let i = t ? `InstantiationService has been disposed (${t})` : "InstantiationService has been disposed";
      throw this._disposedAt?.stack && (i += `
--- disposed at: ---
${this._disposedAt.stack}
---`), new Error(i);
    }
  }
  _findLabel() {
    return this._label ?? this._parent?._findLabel();
  }
  createChild(t, i) {
    this._throwIfDisposed();
    const r = this, s = new class extends Dl {
      dispose() {
        r._children.delete(s), super.dispose();
      }
    }(t, this._strict, this, this._enableTracing, this._enableLazyInstantiation);
    return this._children.add(s), i?.add(s), s;
  }
  invokeFunction(t, ...i) {
    this._throwIfDisposed();
    const r = il.traceInvocation(this._enableTracing, t);
    let s = false;
    try {
      return t({ get: (o) => {
        if (s) throw Wl("service accessor is only valid during the invocation of its target method");
        const a = this._getOrCreateServiceInstance(o, r);
        if (!a) throw new Error(`[invokeFunction] unknown service '${o}'`);
        return a;
      } }, ...i);
    } finally {
      s = true, r.stop();
    }
  }
  createInstance(t, ...i) {
    this._throwIfDisposed();
    let r, s;
    return t instanceof He ? (r = il.traceCreation(this._enableTracing, t.ctor), s = this._createInstance(t.ctor, t.staticArguments.concat(i), r)) : (r = il.traceCreation(this._enableTracing, t), s = this._createInstance(t, i, r)), r.stop(), s;
  }
  _createInstance(t, i = [], r) {
    const s = At.getServiceDependencies(t).sort((a, l) => a.index - l.index), n = [];
    for (const a of s) {
      const l = this._getOrCreateServiceInstance(a.id, r);
      l || this._throwIfStrict(`[createInstance] ${t.name} depends on UNKNOWN service ${a.id}.`, false), n.push(l);
    }
    const o = s.length > 0 ? s[0].index : i.length;
    if (i.length !== o) {
      console.trace(`[createInstance] First service dependency of ${t.name} at position ${o + 1} conflicts with ${i.length} static arguments`);
      const a = o - i.length;
      a > 0 ? i = i.concat(new Array(a)) : i = i.slice(0, o);
    }
    return Reflect.construct(t, i.concat(n));
  }
  _setCreatedServiceInstance(t, i) {
    if (this._services.get(t) instanceof He) this._services.set(t, i);
    else if (this._parent) this._parent._setCreatedServiceInstance(t, i);
    else throw new Error("illegalState - setting UNKNOWN service instance");
  }
  _getServiceInstanceOrDescriptor(t) {
    const i = this._services.get(t);
    return !i && this._parent ? this._parent._getServiceInstanceOrDescriptor(t) : i;
  }
  _getOrCreateServiceInstance(t, i) {
    this._globalGraph && this._globalGraphImplicitDependency && this._globalGraph.insertEdge(this._globalGraphImplicitDependency, String(t));
    const r = this._getServiceInstanceOrDescriptor(t);
    return r instanceof He ? this._safeCreateAndCacheServiceInstance(t, r, i.branch(t, true)) : (i.branch(t, false), r);
  }
  _safeCreateAndCacheServiceInstance(t, i, r) {
    if (this._activeInstantiations.has(t)) throw new Error(`illegal state - RECURSIVELY instantiating service '${t}'`);
    this._activeInstantiations.add(t);
    try {
      return this._createAndCacheServiceInstance(t, i, r);
    } finally {
      this._activeInstantiations.delete(t);
    }
  }
  _createAndCacheServiceInstance(t, i, r) {
    const s = new Pf((l) => l.id.toString());
    let n = 0;
    const o = [{ id: t, desc: i, _trace: r }], a = /* @__PURE__ */ new Set();
    for (; o.length; ) {
      const l = o.pop();
      if (!a.has(String(l.id))) {
        if (a.add(String(l.id)), s.lookupOrInsertNode(l), n++ > 1e4) throw new Af(s, "cycle count more than 1000");
        for (const c of At.getServiceDependencies(l.desc.ctor)) {
          const h = this._getServiceInstanceOrDescriptor(c.id);
          if (h || this._throwIfStrict(`[createInstance] ${t} depends on ${c.id} which is NOT registered.`, true), this._globalGraph?.insertEdge(String(l.id), String(c.id)), h instanceof He) {
            const f = { id: c.id, desc: h, _trace: l._trace.branch(c.id, true) };
            s.insertEdge(l, f), o.push(f);
          }
        }
      }
    }
    for (; ; ) {
      const l = s.roots();
      if (l.length === 0) {
        if (!s.isEmpty()) throw new Af(s, "no more roots but still nodes in the graph");
        break;
      }
      for (const { data: c } of l) {
        if (this._getServiceInstanceOrDescriptor(c.id) instanceof He) {
          const f = this._createServiceInstanceWithOwner(c.id, c.desc.ctor, c.desc.staticArguments, c.desc.supportsDelayedInstantiation, c.desc.supportsLazyInstantiation, c._trace);
          this._setCreatedServiceInstance(c.id, f);
        }
        s.removeNode(c);
      }
    }
    return this._getServiceInstanceOrDescriptor(t);
  }
  _createServiceInstanceWithOwner(t, i, r = [], s, n, o) {
    if (this._services.get(t) instanceof He) return this._createServiceInstance(t, i, r, s, n, o, this._servicesToMaybeDispose);
    if (this._parent) return this._parent._createServiceInstanceWithOwner(t, i, r, s, n, o);
    throw new Error(`illegalState - creating UNKNOWN service instance ${i.name}`);
  }
  _createServiceInstance(t, i, r = [], s, n, o, a) {
    if (s) {
      const l = new Dl(void 0, this._strict, this, this._enableTracing, this._enableLazyInstantiation);
      l._globalGraphImplicitDependency = String(t);
      const c = /* @__PURE__ */ new Map(), h = n && this._enableLazyInstantiation, f = () => {
        if (this._isDisposed) {
          c.clear();
          return;
        }
        const p = l._createInstance(i, r, o);
        if (this._isDisposed) {
          if (Qn(p)) try {
            p.dispose();
          } catch (v) {
            vt(v);
          }
          c.clear();
          return;
        }
        for (const [v, y] of c) {
          const E = p[v];
          if (typeof E == "function") for (const _ of y) _.disposable = E.apply(p, _.listener);
        }
        return c.clear(), a.add(p), p;
      }, d = h ? new R2(f) : new Yp(f);
      return a.add(d), new Proxy(/* @__PURE__ */ Object.create(null), { get(p, v) {
        if (!d.isInitialized && typeof v == "string" && (v.startsWith("onDid") || v.startsWith("onWill"))) {
          let _ = c.get(v);
          return _ || (_ = new ic(), c.set(v, _)), (D, W, R) => {
            if (d.isInitialized) {
              const C = d.value;
              return C ? C[v](D, W, R) : ne.None(D, W, R);
            } else {
              const C = { listener: [D, W, R], disposable: void 0 }, F = _.push(C);
              return Ee(() => {
                F(), C.disposable?.dispose();
              });
            }
          };
        }
        if (v in p) return p[v];
        const y = d.value;
        if (!y) return;
        let E = y[v];
        return typeof E != "function" || (E = E.bind(y), p[v] = E), E;
      }, set(p, v, y) {
        const E = d.value;
        return E && (E[v] = y), true;
      }, getPrototypeOf(p) {
        return i.prototype;
      } });
    } else {
      const l = this._createInstance(i, r, o);
      return a.add(l), l;
    }
  }
  _throwIfStrict(t, i) {
    if (i && console.warn(t), this._strict) throw new Error(t);
  }
}, ds = class ni {
  constructor(t, i) {
    this.type = t, this.name = i, this._start = Date.now(), this._dep = [];
  }
  static traceInvocation(t, i) {
    return t ? new ni(2, i.name || new Error().stack.split(`
`).slice(3, 4).join(`
`)) : ni._None;
  }
  static traceCreation(t, i) {
    return t ? new ni(1, i.name) : ni._None;
  }
  branch(t, i) {
    const r = new ni(3, t.toString());
    return this._dep.push([t, i, r]), r;
  }
  stop() {
    const t = Date.now() - this._start;
    ni._totals += t;
    let i = false;
    function r(n, o) {
      const a = [], l = new Array(n + 1).join("	");
      for (const [c, h, f] of o._dep) if (h && f) {
        i = true, a.push(`${l}CREATES -> ${c}`);
        const d = r(n + 1, f);
        d && a.push(d);
      } else a.push(`${l}uses -> ${c}`);
      return a.join(`
`);
    }
    const s = [`${this.type === 1 ? "CREATE" : "CALL"} ${this.name}`, `${r(1, this)}`, `DONE, took ${t.toFixed(2)}ms (grand total ${ni._totals.toFixed(2)}ms)`];
    (t > 2 || i) && ni.all.add(s.join(`
`));
  }
};
ds.all = /* @__PURE__ */ new Set(), ds._None = new class extends ds {
  constructor() {
    super(0, null);
  }
  stop() {
  }
  branch() {
    return this;
  }
}(), ds._totals = 0;
var il = ds;
b();
function D2(e) {
  return e.tags.find((t) => t.startsWith("lp-"))?.split("lp-")[1];
}
var L2 = ue("languagePackService"), rl = class extends X {
  constructor(e) {
    super(), this.extensionGalleryService = e;
  }
  async getAvailableLanguages() {
    const e = new Ii();
    setTimeout(() => e.cancel(), 1e3);
    let t;
    try {
      t = await this.extensionGalleryService.query({ text: 'category:"language packs"', pageSize: 20 }, e.token);
    } catch {
      return [];
    }
    const r = t.firstPage.filter((s) => s.properties.localizedLanguages?.length && s.tags.some((n) => n.startsWith("lp-"))).map((s) => {
      const n = s.properties.localizedLanguages?.[0], o = D2(s);
      return { ...this.createQuickPickItem(o, n, s), extensionId: s.identifier.id, galleryExtension: s };
    });
    return r.push(this.createQuickPickItem("en", "English")), r;
  }
  createQuickPickItem(e, t, i) {
    const r = t ?? e;
    let s;
    if (r !== e && (s = `(${e})`), e.toLowerCase() === Ot.toLowerCase() && (s ??= "", s += m(2075, null)), i?.installCount) {
      s ??= "";
      const n = i.installCount;
      let o;
      n > 1e6 ? o = `${Math.floor(n / 1e5) / 10}M` : n > 1e3 ? o = `${Math.floor(n / 1e3)}K` : o = String(n), s += ` $(cloud-download) ${o}`;
    }
    return { id: e, label: r, description: s };
  }
};
rl = N([x(0, yi)], rl), b();
import * as T2 from "fs";
import { createHash as C2 } from "crypto";
var sl = class extends rl {
  constructor(e, t, i, r) {
    super(i), this.extensionManagementService = e, this.logService = r, this.cache = this._register(new nl(t, r)), this.extensionManagementService.registerParticipant({ postInstall: async (s) => this.postInstallExtension(s), postUninstall: async (s) => this.postUninstallExtension(s) });
  }
  async getBuiltInExtensionTranslationsUri(e, t) {
    const r = (await this.cache.getLanguagePacks())[t];
    if (!r) {
      this.logService.warn(`No language pack found for ${t}`);
      return;
    }
    const s = r.translations[e];
    return s ? k.file(s) : void 0;
  }
  async getInstalledLanguages() {
    const e = await this.cache.getLanguagePacks(), t = Object.keys(e).map((i) => {
      const r = e[i];
      return { ...this.createQuickPickItem(i, r.label), extensionId: r.extensions[0].extensionIdentifier.id };
    });
    return t.push(this.createQuickPickItem("en", "English")), t.sort((i, r) => i.label.localeCompare(r.label)), t;
  }
  async postInstallExtension(e) {
    e && e.manifest && e.manifest.contributes && e.manifest.contributes.localizations && e.manifest.contributes.localizations.length && (this.logService.info("Adding language packs from the extension", e.identifier.id), await this.update());
  }
  async postUninstallExtension(e) {
    const t = await this.cache.getLanguagePacks();
    Object.keys(t).some((i) => t[i] && t[i].extensions.some((r) => Y(r.extensionIdentifier, e.identifier))) && (this.logService.info("Removing language packs from the extension", e.identifier.id), await this.update());
  }
  async update() {
    const [e, t] = await Promise.all([this.cache.getLanguagePacks(), this.extensionManagementService.getInstalled()]), i = await this.cache.update(t);
    return !Hi(Object.keys(e), Object.keys(i));
  }
};
sl = N([x(0, aa), x(1, St), x(2, yi), x(3, pe)], sl);
var nl = class extends X {
  constructor(e, t) {
    super(), this.logService = t, this.languagePacks = {}, this.languagePacksFilePath = H(e.userDataPath, "languagepacks.json"), this.languagePacksFileLimiter = new Fr();
  }
  getLanguagePacks() {
    return this.languagePacksFileLimiter.size || !this.initializedCache ? this.withLanguagePacks().then(() => this.languagePacks) : Promise.resolve(this.languagePacks);
  }
  update(e) {
    return this.withLanguagePacks((t) => {
      Object.keys(t).forEach((i) => delete t[i]), this.createLanguagePacksFromExtensions(t, ...e);
    }).then(() => this.languagePacks);
  }
  createLanguagePacksFromExtensions(e, ...t) {
    for (const i of t) i && i.manifest && i.manifest.contributes && i.manifest.contributes.localizations && i.manifest.contributes.localizations.length && this.createLanguagePacksFromExtension(e, i);
    Object.keys(e).forEach((i) => this.updateHash(e[i]));
  }
  createLanguagePacksFromExtension(e, t) {
    const i = t.identifier, r = t.manifest.contributes && t.manifest.contributes.localizations ? t.manifest.contributes.localizations : [];
    for (const s of r) if (t.location.scheme === le.file && O2(s)) {
      let n = e[s.languageId];
      n || (n = { hash: "", extensions: [], translations: {}, label: s.localizedLanguageName ?? s.languageName }, e[s.languageId] = n);
      const o = n.extensions.filter((a) => Y(a.extensionIdentifier, i))[0];
      o ? o.version = t.manifest.version : n.extensions.push({ extensionIdentifier: i, version: t.manifest.version });
      for (const a of s.translations) n.translations[a.id] = H(t.location.fsPath, a.path);
    }
  }
  updateHash(e) {
    if (e) {
      const t = C2("md5");
      for (const i of e.extensions) t.update(i.extensionIdentifier.uuid || i.extensionIdentifier.id).update(i.version);
      e.hash = t.digest("hex");
    }
  }
  withLanguagePacks(e = () => null) {
    return this.languagePacksFileLimiter.queue(() => {
      let t = null;
      return T2.promises.readFile(this.languagePacksFilePath, "utf8").then(void 0, (i) => i.code === "ENOENT" ? Promise.resolve("{}") : Promise.reject(i)).then((i) => {
        try {
          return JSON.parse(i);
        } catch {
          return {};
        }
      }).then((i) => (t = e(i), i)).then((i) => {
        for (const s of Object.keys(i)) i[s] || delete i[s];
        this.languagePacks = i, this.initializedCache = true;
        const r = JSON.stringify(this.languagePacks);
        return this.logService.debug("Writing language packs", r), de.writeFile(this.languagePacksFilePath, r);
      }).then(() => t, (i) => this.logService.error(i));
    });
  }
};
nl = N([x(0, St), x(1, pe)], nl);
function O2(e) {
  if (typeof e.languageId != "string" || !Array.isArray(e.translations) || e.translations.length === 0) return false;
  for (const t of e.translations) if (typeof t.id != "string" || typeof t.path != "string") return false;
  return !(e.languageName && typeof e.languageName != "string" || e.localizedLanguageName && typeof e.localizedLanguageName != "string");
}
b();
function U2(e, t) {
  const i = [];
  for (const r of new Set(xi.concat(e.keys(), t.keys()))) e.get(r) !== t.get(r) && i.push(r);
  return i;
}
var ol = class extends zu {
  constructor(e, t, i) {
    super(), this.file = e, this.fileService = t, this.logService = i, this.throttledDelayer = this._register(new Li(500));
    const r = ne.filter(t.onDidFilesChange, (s) => s.affects(e));
    this._register(t.watch(e)), this._register(r(() => this.throttledDelayer.trigger(() => this.refresh())));
  }
  async _updatePolicyDefinitions() {
    await this.refresh();
  }
  async read() {
    const e = /* @__PURE__ */ new Map();
    try {
      const t = await this.fileService.readFile(this.file), i = JSON.parse(t.value.toString());
      if (!Ne(i)) throw new Error("Policy file isn't a JSON object");
      for (const r of Object.keys(i)) this.policyDefinitions[r] && e.set(r, i[r]);
    } catch (t) {
      t.fileOperationResult !== 1 && this.logService.error("[FilePolicyService] Failed to read policies", t);
    }
    return e;
  }
  async refresh() {
    const e = await this.read(), t = U2(this.policies, e);
    this.policies = e, t.length > 0 && this._onDidChange.fire(t);
  }
};
ol = N([x(1, ke), x(2, pe)], ol), b();
var Tn = class extends zu {
  constructor(e, t) {
    super(), this.logService = e, this.productName = t, this.throttler = new eu(), this.watcher = this._register(new li());
  }
  async _updatePolicyDefinitions(e) {
    this.logService.trace(`NativePolicyService#_updatePolicyDefinitions - Found ${Object.keys(e).length} policy definitions`);
    const { createWatcher: t } = await import("@anysphere/policy-watcher");
    await this.throttler.queue(() => new Promise((i, r) => {
      try {
        this.watcher.value = t(this.productName, e, (s) => {
          this._onDidPolicyChange(s), i();
        });
      } catch (s) {
        this.logService.error("NativePolicyService#_updatePolicyDefinitions - Error creating watcher:", s), r(s);
      }
    }));
  }
  _onDidPolicyChange(e) {
    this.logService.trace(`NativePolicyService#_onDidPolicyChange - Updated policy values: ${JSON.stringify(e)}`);
    for (const t in e) {
      const i = e[t];
      i === void 0 ? this.policies.delete(t) : this.policies.set(t, i);
    }
    this._onDidChange.fire(Object.keys(e));
  }
};
Tn = N([x(0, pe)], Tn), b();
var mt, al = globalThis.vscode;
if (typeof al < "u" && typeof al.context < "u") {
  const e = al.context.configuration();
  if (e) mt = e.product;
  else throw new Error("Sandbox: unable to resolve product configuration from preload script.");
} else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
  if (mt = globalThis._VSCODE_PRODUCT_JSON, Ut.VSCODE_DEV, Ut.VSCODE_DEV_ONBOARDING && Object.assign(mt, { nameShort: `${mt.nameShort} Onboarding`, nameLong: `${mt.nameLong} Onboarding`, dataFolderName: `${mt.dataFolderName}-onboarding`, serverDataFolderName: mt.serverDataFolderName ? `${mt.serverDataFolderName}-onboarding` : void 0 }), !mt.version) {
    const e = globalThis._VSCODE_PACKAGE_JSON;
    Object.assign(mt, { version: e.version });
  }
} else mt = {}, Object.keys(mt).length === 0 && Object.assign(mt, { version: "1.94.0-dev", nameShort: "Cursor Dev", nameLong: "Cursor Dev", applicationName: "cursor", dataFolderName: ".cursor", urlProtocol: "cursor", reportIssueUrl: "https://github.com/getcursor/cursor/issues/new", licenseName: "MIT", licenseUrl: "https://github.com/getcursor/cursor/", serverLicenseUrl: "https://github.com/getcursor/cursor/" });
var Er = mt;
b();
import * as N2 from "tls";
import { parse as kf } from "url";
b();
import { spawn as F2 } from "child_process";
b();
import { userInfo as M2 } from "os";
b();
import * as Df from "os";
var Lf = /^\d+$/, V2 = /^Microsoft.PowerShell_.*/, W2 = /^Microsoft.PowerShellPreview_.*/, ps;
switch (process.arch) {
  case "ia32":
    ps = 1;
    break;
  case "arm":
  case "arm64":
    ps = 2;
    break;
  default:
    ps = 0;
    break;
}
var Sr;
process.env.PROCESSOR_ARCHITEW6432 ? Sr = process.env.PROCESSOR_ARCHITEW6432 === "ARM64" ? 2 : 0 : process.env.PROCESSOR_ARCHITECTURE === "ARM64" ? Sr = 2 : process.env.PROCESSOR_ARCHITECTURE === "X86" ? Sr = 1 : Sr = 0;
var gs = class {
  constructor(e, t, i) {
    this.exePath = e, this.displayName = t, this.knownToExist = i;
  }
  async exists() {
    return this.knownToExist === void 0 && (this.knownToExist = await gt.existsFile(this.exePath)), this.knownToExist;
  }
};
function $2({ useAlternateBitness: e = false } = {}) {
  return e ? ps === 0 ? process.env["ProgramFiles(x86)"] || null : Sr === 0 && process.env.ProgramW6432 || null : process.env.ProgramFiles || null;
}
async function Cn({ useAlternateBitness: e = false, findPreview: t = false } = {}) {
  const i = $2({ useAlternateBitness: e });
  if (!i) return null;
  const r = H(i, "PowerShell");
  if (!await gt.existsDirectory(r)) return null;
  let s = -1, n = null;
  for (const l of await de.readdir(r)) {
    let c = -1;
    if (t) {
      const f = l.indexOf("-");
      if (f < 0) continue;
      const d = l.substring(0, f);
      if (!Lf.test(d) || l.substring(f + 1) !== "preview") continue;
      c = parseInt(d, 10);
    } else {
      if (!Lf.test(l)) continue;
      c = parseInt(l, 10);
    }
    if (c <= s) continue;
    const h = H(r, l, "pwsh.exe");
    await gt.existsFile(h) && (n = h, s = c);
  }
  if (!n) return null;
  const o = i.includes("x86") ? " (x86)" : "", a = t ? " Preview" : "";
  return new gs(n, `PowerShell${a}${o}`, true);
}
async function Tf({ findPreview: e } = {}) {
  if (!process.env.LOCALAPPDATA) return null;
  const t = H(process.env.LOCALAPPDATA, "Microsoft", "WindowsApps");
  if (!await gt.existsDirectory(t)) return null;
  const { pwshMsixDirRegex: i, pwshMsixName: r } = e ? { pwshMsixDirRegex: W2, pwshMsixName: "PowerShell Preview (Store)" } : { pwshMsixDirRegex: V2, pwshMsixName: "PowerShell (Store)" };
  for (const s of await de.readdir(t)) if (i.test(s)) {
    const n = H(t, s, "pwsh.exe");
    return new gs(n, r);
  }
  return null;
}
function B2() {
  const e = H(Df.homedir(), ".dotnet", "tools", "pwsh.exe");
  return new gs(e, ".NET Core PowerShell Global Tool");
}
function q2() {
  const e = H(Df.homedir(), "scoop", "apps"), t = H(e, "pwsh", "current", "pwsh.exe");
  return new gs(t, "PowerShell (Scoop)");
}
function z2() {
  const e = H(process.env.windir, ps === 1 && Sr !== 1 ? "SysNative" : "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
  return new gs(e, "Windows PowerShell", true);
}
async function* G2() {
  let e = await Cn();
  e && (yield e), e = await Cn({ useAlternateBitness: true }), e && (yield e), e = await Tf(), e && (yield e), e = B2(), e && (yield e), e = await Cn({ findPreview: true }), e && (yield e), e = await Tf({ findPreview: true }), e && (yield e), e = await Cn({ useAlternateBitness: true, findPreview: true }), e && (yield e), e = await q2(), e && (yield e), e = z2(), e && (yield e);
}
async function* K2() {
  for await (const e of G2()) await e.exists() && (yield e);
}
async function j2() {
  for await (const e of K2()) return e;
  return null;
}
async function H2(e, t) {
  return e === Yi.Windows ? Re ? Q2() : f2(t) : X2(e, t);
}
var ll = null;
function X2(e, t) {
  if (tt && e === Yi.Macintosh || Tt && e === Yi.Linux) return "/bin/bash";
  if (!ll) {
    let i;
    if (Re) i = "/bin/bash";
    else {
      if (i = t.SHELL, !i) try {
        i = M2().shell;
      } catch {
      }
      i || (i = "sh"), i === "/bin/false" && (i = "/bin/bash");
    }
    ll = i;
  }
  return ll;
}
var cl = null;
async function Q2() {
  return cl || (cl = (await j2()).exePath), cl;
}
b();
import "assert";
b(), b();
var p6 = Ed(Sd(), 1), g6 = { o: m(1860, null), e: m(1861, null), t: m(1862, null) }, Cf = { tunnel: { type: "subcommand", description: "Make the current machine accessible from vscode.dev or other machines through a secure tunnel", options: { "cli-data-dir": { type: "string", args: "dir", description: m(1863, null) }, "disable-telemetry": { type: "boolean" }, "telemetry-level": { type: "string" }, user: { type: "subcommand", options: { login: { type: "subcommand", options: { provider: { type: "string" }, "access-token": { type: "string" } } } } } } }, diff: { type: "boolean", cat: "o", alias: "d", args: ["file", "file"], description: m(1864, null) }, merge: { type: "boolean", cat: "o", alias: "m", args: ["path1", "path2", "base", "result"], description: m(1865, null) }, add: { type: "boolean", cat: "o", alias: "a", args: "folder", description: m(1866, null) }, remove: { type: "boolean", cat: "o", args: "folder", description: m(1867, null) }, goto: { type: "boolean", cat: "o", alias: "g", args: "file:line[:character]", description: m(1868, null) }, "new-window": { type: "boolean", cat: "o", alias: "n", description: m(1869, null) }, "reuse-window": { type: "boolean", cat: "o", alias: "r", description: m(1870, null) }, "suppress-popups-on-startup": { type: "boolean", cat: "o", description: m(1871, null) }, "web-worker-exthost": { type: "boolean", cat: "o", description: m(1872, null) }, glass: { type: "boolean", cat: "o", description: m(1873, null) }, classic: { type: "boolean", cat: "o", description: m(1874, null) }, wait: { type: "boolean", cat: "o", alias: "w", description: m(1875, null) }, waitMarkerFilePath: { type: "string" }, locale: { type: "string", cat: "o", args: "locale", description: m(1876, null) }, "user-data-dir": { type: "string", cat: "o", args: "dir", description: m(1877, null) }, "local-mode-data-import-token": { type: "string" }, profile: { type: "string", cat: "o", args: "profileName", description: m(1878, null) }, help: { type: "boolean", cat: "o", alias: "h", description: m(1879, null) }, "extensions-dir": { type: "string", deprecates: ["extensionHomePath"], cat: "e", args: "dir", description: m(1880, null) }, "extensions-download-dir": { type: "string" }, "builtin-extensions-dir": { type: "string" }, "list-extensions": { type: "boolean", cat: "e", description: m(1881, null) }, "show-versions": { type: "boolean", cat: "e", description: m(1882, null) }, category: { type: "string", allowEmptyValue: true, cat: "e", description: m(1883, null), args: "category" }, "install-extension": { type: "string[]", cat: "e", args: "ext-id | path", description: m(1884, null) }, "pre-release": { type: "boolean", cat: "e", description: m(1885, null) }, "uninstall-extension": { type: "string[]", cat: "e", args: "ext-id", description: m(1886, null) }, "update-extensions": { type: "boolean", cat: "e", description: m(1887, null) }, "enable-proposed-api": { type: "string[]", allowEmptyValue: true, cat: "e", args: "ext-id", description: m(1888, null) }, "add-mcp": { type: "string[]", cat: "o", args: "json", description: m(1889, null) }, version: { type: "boolean", cat: "t", alias: "v", description: m(1890, null) }, verbose: { type: "boolean", cat: "t", global: true, description: m(1891, null) }, log: { type: "string[]", cat: "t", args: "level", global: true, description: m(1892, null) }, status: { type: "boolean", alias: "s", cat: "t", description: m(1893, null) }, "prof-startup": { type: "boolean", cat: "t", description: m(1894, null) }, "prof-append-timers": { type: "string" }, "prof-duration-markers": { type: "string[]" }, "prof-duration-markers-file": { type: "string" }, "no-cached-data": { type: "boolean" }, "prof-startup-prefix": { type: "string" }, "prof-v8-extensions": { type: "boolean" }, "disable-extensions": { type: "boolean", deprecates: ["disableExtensions"], cat: "t", description: m(1895, null) }, "disable-extension": { type: "string[]", cat: "t", args: "ext-id", description: m(1896, null) }, sync: { type: "string", cat: "t", description: m(1897, null), args: ["on | off"] }, "inspect-extensions": { type: "string", allowEmptyValue: true, deprecates: ["debugPluginHost"], args: "port", cat: "t", description: m(1898, null) }, "inspect-brk-extensions": { type: "string", allowEmptyValue: true, deprecates: ["debugBrkPluginHost"], args: "port", cat: "t", description: m(1899, null) }, "disable-lcd-text": { type: "boolean", cat: "t", description: m(1900, null) }, "disable-gpu": { type: "boolean", cat: "t", description: m(1901, null) }, "disable-chromium-sandbox": { type: "boolean", cat: "t", description: m(1902, null) }, sandbox: { type: "boolean" }, "locate-shell-integration-path": { type: "string", cat: "t", args: ["shell"], description: m(1903, null) }, telemetry: { type: "boolean", cat: "t", description: m(1904, null) }, remote: { type: "string", allowEmptyValue: true }, "folder-uri": { type: "string[]", cat: "o", args: "uri" }, "file-uri": { type: "string[]", cat: "o", args: "uri" }, "locate-extension": { type: "string[]" }, extensionDevelopmentPath: { type: "string[]" }, extensionDevelopmentKind: { type: "string[]" }, extensionTestsPath: { type: "string" }, extensionEnvironment: { type: "string" }, debugId: { type: "string" }, debugRenderer: { type: "boolean" }, "inspect-ptyhost": { type: "string", allowEmptyValue: true }, "inspect-brk-ptyhost": { type: "string", allowEmptyValue: true }, "inspect-search": { type: "string", deprecates: ["debugSearch"], allowEmptyValue: true }, "inspect-brk-search": { type: "string", deprecates: ["debugBrkSearch"], allowEmptyValue: true }, "inspect-sharedprocess": { type: "string", allowEmptyValue: true }, "inspect-brk-sharedprocess": { type: "string", allowEmptyValue: true }, "export-default-configuration": { type: "string" }, "install-source": { type: "string" }, "enable-smoke-test-driver": { type: "boolean" }, "telemetry-source": { type: "string" }, "smoke-test-use-real-agent-http": { type: "boolean" }, "smoke-test-nal-stream-timeout-ms": { type: "string" }, "smoke-test-nal-endless-retries": { type: "boolean" }, "smoke-test-nal-retry-delay-ms": { type: "string" }, "debug-slow-window-unload-ms": { type: "string" }, headless: { type: "boolean" }, "test-backend-url": { type: "string" }, "test-feature-flags": { type: "string" }, "test-experiments": { type: "string" }, "test-dynamic-configs": { type: "string" }, "test-layers": { type: "string" }, "test-composer-chat-script": { type: "string" }, logExtensionHostCommunication: { type: "boolean" }, "skip-release-notes": { type: "boolean" }, "skip-welcome": { type: "boolean" }, "skip-onboarding": { type: "boolean" }, "override-cursor-auth-token": { type: "string" }, "disable-telemetry": { type: "boolean" }, "disable-updates": { type: "boolean" }, "agent-harness-trust-dev-key": { type: "boolean" }, "use-inmemory-secretstorage": { type: "boolean", deprecates: ["disable-keytar"] }, "password-store": { type: "string" }, "disable-workspace-trust": { type: "boolean" }, "disable-crash-reporter": { type: "boolean" }, "crash-reporter-directory": { type: "string" }, "crash-reporter-id": { type: "string" }, "skip-add-to-recently-opened": { type: "boolean" }, "open-url": { type: "boolean" }, "file-write": { type: "boolean" }, "file-chmod": { type: "boolean" }, "install-builtin-extension": { type: "string[]" }, force: { type: "boolean" }, "do-not-sync": { type: "boolean" }, "do-not-include-pack-dependencies": { type: "boolean" }, trace: { type: "boolean" }, "trace-memory-infra": { type: "boolean" }, "trace-category-filter": { type: "string" }, "trace-options": { type: "string" }, "preserve-env": { type: "boolean" }, "force-user-env": { type: "boolean" }, "force-disable-user-env": { type: "boolean" }, "open-devtools": { type: "boolean" }, "enable-react-devtools": { type: "boolean" }, "disable-react-devtools": { type: "boolean" }, "react-production-bundles": { type: "boolean" }, "react-performance-tracks": { type: "boolean" }, "shadow-window-for-workspace-id": { type: "string" }, "is-vm-daemon-parallel-process": { type: "boolean" }, "disable-gpu-sandbox": { type: "boolean" }, logsPath: { type: "string" }, "__enable-file-policy": { type: "boolean" }, continueOn: { type: "string" }, "enable-coi": { type: "boolean" }, "unresponsive-sample-interval": { type: "string" }, "unresponsive-sample-period": { type: "string" }, "no-proxy-server": { type: "boolean" }, "no-sandbox": { type: "boolean", alias: "sandbox" }, "proxy-server": { type: "string" }, "proxy-bypass-list": { type: "string" }, "proxy-pac-url": { type: "string" }, "js-flags": { type: "string" }, inspect: { type: "string", allowEmptyValue: true }, "inspect-brk": { type: "string", allowEmptyValue: true }, nolazy: { type: "boolean" }, "force-device-scale-factor": { type: "string" }, "force-renderer-accessibility": { type: "boolean" }, "ignore-certificate-errors": { type: "boolean" }, "allow-insecure-localhost": { type: "boolean" }, "log-net-log": { type: "string" }, vmodule: { type: "string" }, _urls: { type: "string[]" }, "disable-dev-shm-usage": { type: "boolean" }, "profile-temp": { type: "boolean" }, "ozone-platform": { type: "string" }, "enable-tracing": { type: "string" }, "trace-startup-format": { type: "string" }, "trace-startup-file": { type: "string" }, "trace-startup-duration": { type: "string" }, "xdg-portal-required-version": { type: "string" }, hmr: { type: "boolean" }, chat: { type: "boolean", cat: "o", description: m(1905, null) }, _: { type: "string[]" } }, Of = { type: "subcommand", description: "Interact with chat threads in a running Cursor desktop app.", options: { json: { type: "boolean", description: "Machine-readable output" }, force: { type: "boolean", description: "Submit immediately, interrupting a running turn (send)" }, stdin: { type: "boolean", description: "Read message text from stdin (send)" }, help: { type: "boolean", alias: "h", description: "Print usage" }, _: { type: "string[]" } } }, J2 = { agent: { type: "subcommand", description: "Start the Cursor agent in your terminal.", options: {} }, desktop: Of }, m6 = { ...Cf, ...J2 }, v6 = { ...Cf, desktop: Of };
function Uf(e) {
  return e.VSCODE_CLI === "1";
}
b();
function Y2(e, t, i) {
  return Math.min(Math.max(e, t), i);
}
var ul = void 0;
async function Z2(e, t, i, r) {
  return i["force-disable-user-env"] ? (t.trace("resolveShellEnv(): skipped (--force-disable-user-env)"), {}) : Re ? (t.trace("resolveShellEnv(): skipped (Windows)"), {}) : Uf(r) && !i["force-user-env"] ? (t.trace("resolveShellEnv(): skipped (VSCODE_CLI is set)"), {}) : (Uf(r) ? t.trace("resolveShellEnv(): running (--force-user-env)") : t.trace("resolveShellEnv(): running (macOS/Linux)"), ul || (ul = ht.withAsyncBody(async (s, n) => {
    const o = new Ii();
    let a = 1e4;
    const l = e.getValue("application.shellEnvironmentResolutionTimeout");
    typeof l == "number" && (a = Y2(l, 1, 120) * 1e3);
    const c = setTimeout(() => {
      o.dispose(true), n(new Error(m(2239, null)));
    }, a);
    try {
      s(await ey(t, o.token));
    } catch (h) {
      !bi(h) && !o.token.isCancellationRequested ? n(new Error(m(2240, null, Ti(h)))) : s({});
    } finally {
      clearTimeout(c), o.dispose();
    }
  })), ul);
}
async function ey(e, t) {
  const i = process.env.ELECTRON_RUN_AS_NODE;
  e.trace("getUnixShellEnvironment#runAsNode", i);
  const r = process.env.ELECTRON_NO_ATTACH_CONSOLE;
  e.trace("getUnixShellEnvironment#noAttach", r);
  const s = dt().replace(/-/g, "").substr(0, 12), n = new RegExp(s + "({.*})" + s), o = { ...process.env, ELECTRON_RUN_AS_NODE: "1", ELECTRON_NO_ATTACH_CONSOLE: "1", VSCODE_RESOLVING_ENVIRONMENT: "1" };
  e.trace("getUnixShellEnvironment#env", o);
  const a = await H2(ro, o);
  return e.trace("getUnixShellEnvironment#shell", a), new Promise((l, c) => {
    if (t.isCancellationRequested) return c(new Le());
    const h = Pt(a);
    let f, d;
    const p = "";
    /^(?:pwsh|powershell)(?:-preview)?$/.test(h) ? (f = `& '${process.execPath}' ${p} -p '''${s}'' + JSON.stringify(process.env) + ''${s}'''`, d = ["-Login", "-Command"]) : h === "nu" ? (f = `^'${process.execPath}' ${p} -p '"${s}" + JSON.stringify(process.env) + "${s}"'`, d = ["-i", "-l", "-c"]) : h === "xonsh" ? (f = `import os, json; print("${s}", json.dumps(dict(os.environ)), "${s}")`, d = ["-i", "-l", "-c"]) : (f = `'${process.execPath}' ${p} -p '"${s}" + JSON.stringify(process.env) + "${s}"'`, h === "tcsh" || h === "csh" ? d = ["-ic"] : d = ["-i", "-l", "-c"]), e.trace("getUnixShellEnvironment#spawn", JSON.stringify(d), f);
    const v = F2(a, [...d, f], { detached: true, stdio: ["ignore", "pipe", "pipe"], env: o });
    t.onCancellationRequested(() => (v.kill(), c(new Le()))), v.on("error", (_) => {
      e.error("getUnixShellEnvironment#errorChildProcess", Ti(_)), c(_);
    });
    const y = [];
    v.stdout.on("data", (_) => y.push(_));
    const E = [];
    v.stderr.on("data", (_) => E.push(_)), v.on("close", (_, I) => {
      const D = Buffer.concat(y).toString("utf8");
      e.trace("getUnixShellEnvironment#raw", D);
      const W = Buffer.concat(E).toString("utf8");
      if (W.trim() && e.trace("getUnixShellEnvironment#stderr", W), _ || I) return c(new Error(m(2241, null, _, I)));
      const R = n.exec(D), C = R ? R[1] : "{}";
      try {
        const F = JSON.parse(C);
        i ? F.ELECTRON_RUN_AS_NODE = i : delete F.ELECTRON_RUN_AS_NODE, r ? F.ELECTRON_NO_ATTACH_CONSOLE = r : delete F.ELECTRON_NO_ATTACH_CONSOLE, delete F.VSCODE_RESOLVING_ENVIRONMENT, delete F.XDG_RUNTIME_DIR, e.trace("getUnixShellEnvironment#result", F), l(F);
      } catch (F) {
        e.error("getUnixShellEnvironment#errorCaught", Ti(F)), c(F);
      }
    });
  });
}
b();
import { parse as Nf } from "url";
function ty(e, t) {
  return e.protocol === "http:" ? t.HTTP_PROXY || t.http_proxy || null : e.protocol === "https:" && (t.HTTPS_PROXY || t.https_proxy || t.HTTP_PROXY || t.http_proxy) || null;
}
async function iy(e, t, i = {}) {
  const r = Nf(e), s = i.proxyUrl || ty(r, t);
  if (!s) return null;
  const n = Nf(s);
  if (!/^https?:$/.test(n.protocol || "")) return null;
  const o = { host: n.hostname || "", port: (n.port ? +n.port : 0) || (n.protocol === "https" ? 443 : 80), auth: n.auth, rejectUnauthorized: It(i.strictSSL) ? i.strictSSL : true };
  if (r.protocol === "http:") {
    const { default: a } = await import("http-proxy-agent");
    return new a.HttpProxyAgent(s, o);
  } else {
    const { default: a } = await import("https-proxy-agent");
    return new a.HttpsProxyAgent(s, o);
  }
}
import { createGunzip as ry } from "zlib";
var hl = class extends k0 {
  constructor(e, t, i, r) {
    super(r), this.machine = e, this.configurationService = t, this.environmentService = i, this.configure(), this._register(t.onDidChangeConfiguration((s) => {
      s.affectsConfiguration("http") && this.configure();
    }));
  }
  configure() {
    this.proxyUrl = this.getConfigValue("http.proxy"), this.strictSSL = !!this.getConfigValue("http.proxyStrictSSL"), this.authorization = this.getConfigValue("http.proxyAuthorization");
  }
  async request(e, t) {
    const { proxyUrl: i, strictSSL: r } = this;
    let s;
    try {
      s = await Z2(this.configurationService, this.logService, this.environmentService.args, process.env);
    } catch (a) {
      this.shellEnvErrorLogged || (this.shellEnvErrorLogged = true, this.logService.error("resolving shell environment failed", q(a)));
    }
    const n = { ...process.env, ...s }, o = e.agent ? e.agent : await iy(e.url || "", n, { proxyUrl: i, strictSSL: r });
    return e.agent = o, e.strictSSL = r, this.authorization && (e.headers = { ...e.headers || {}, "Proxy-Authorization": this.authorization }), this.logAndRequest(e, () => fl(e, t));
  }
  async resolveProxy(e) {
  }
  async lookupAuthorization(e) {
  }
  async lookupKerberosAuthorization(e) {
    try {
      const t = this.getConfigValue("http.proxyKerberosServicePrincipal");
      return "Negotiate " + await sy(e, t, this.logService, "RequestService#lookupKerberosAuthorization");
    } catch (t) {
      this.logService.debug("RequestService#lookupKerberosAuthorization Kerberos authentication failed", t);
      return;
    }
  }
  loadCertificates() {
    return this.certificatesPromise ??= this.doLoadCertificates(), this.certificatesPromise;
  }
  async doLoadCertificates() {
    const e = await import("@vscode/proxy-agent"), t = await e.loadSystemCertificates({ log: this.logService, loadSystemCertificatesFromNode: () => false });
    if (typeof N2.getCACertificates != "function") return t;
    try {
      const i = await e.loadSystemCertificates({ log: this.logService, loadSystemCertificatesFromNode: () => true });
      return Array.from(/* @__PURE__ */ new Set([...t, ...i]));
    } catch (i) {
      return this.logService.warn(`RequestService#loadCertificates failed to read Node system certificates: ${q(i)}`), t;
    }
  }
  getConfigValue(e) {
    if (this.machine === "remote") return this.configurationService.getValue(e);
    const t = this.configurationService.inspect(e);
    return t.userLocalValue || t.defaultValue;
  }
};
hl = N([x(1, Jt), x(2, St), x(3, pe)], hl);
async function sy(e, t, i, r) {
  const s = await import("kerberos"), n = s.default || s, o = new URL(e), a = t || (process.platform === "win32" ? `HTTP/${o.hostname}` : `HTTP@${o.hostname}`);
  return i.debug(`${r} Kerberos authentication lookup`, `proxyURL:${o}`, `spn:${a}`), (await n.initializeClient(a)).step("");
}
async function ny(e) {
  return (kf(e.url).protocol === "https:" ? await import("https") : await import("http")).request;
}
async function fl(e, t) {
  return ht.withAsyncBody(async (i, r) => {
    const s = kf(e.url), n = e.getRawRequest ? e.getRawRequest(e) : await ny(e), o = { hostname: s.hostname, port: s.port ? parseInt(s.port) : s.protocol === "https:" ? 443 : 80, protocol: s.protocol, path: s.path, method: e.type || "GET", headers: e.headers, agent: e.agent, rejectUnauthorized: It(e.strictSSL) ? e.strictSSL : true };
    e.user && e.password && (o.auth = e.user + ":" + e.password), e.disableCache && (o.cache = "no-store"), e.isChromiumNetwork && e.followRedirects === 0 && (o.redirect = "error");
    const a = n(o, (l) => {
      const c = jn(e.followRedirects) ? e.followRedirects : 3;
      if (l.statusCode && l.statusCode >= 300 && l.statusCode < 400 && c > 0 && l.headers.location) l.statusCode === 303 ? fl({ ...e, url: l.headers.location, type: "GET", followRedirects: c - 1 }, t).then(i, r) : fl({ ...e, url: l.headers.location, followRedirects: c - 1 }, t).then(i, r);
      else {
        let h = l;
        if (!e.isChromiumNetwork && l.headers["content-encoding"] === "gzip") {
          const f = ry();
          l.on("error", (d) => f.destroy(d)), h = l.pipe(f);
        }
        i({ res: l, stream: xp(h) });
      }
    });
    if (a.on("error", r), e.timeout) if (e.isChromiumNetwork) {
      const l = setTimeout(() => {
        a.abort(), r(new Error(`Request timeout after ${e.timeout}ms`));
      }, e.timeout);
      a.on("response", () => clearTimeout(l)), a.on("error", () => clearTimeout(l)), a.on("abort", () => clearTimeout(l));
    } else a.setTimeout(e.timeout);
    e.isChromiumNetwork && a.removeHeader("Content-Length"), e.data && typeof e.data == "string" && a.write(e.data), a.end(), t.onCancellationRequested(() => {
      a.abort(), r(new Le());
    });
  });
}
b();
var oy = class extends X {
  constructor(e, t, i, r) {
    super(), this.storagePath = e, this.logService = i, this.fileService = r, this.storage = /* @__PURE__ */ Object.create(null), this.lastSavedStorageContents = "", this.initializing = void 0, this.closing = void 0, this.flushDelayer = this._register(new Li(t === 0 ? 0 : 100));
  }
  init() {
    return this.initializing || (this.initializing = this.doInit()), this.initializing;
  }
  async doInit() {
    try {
      this.lastSavedStorageContents = (await this.fileService.readFile(this.storagePath)).value.toString(), this.storage = JSON.parse(this.lastSavedStorageContents);
    } catch (e) {
      e.fileOperationResult !== 1 && this.logService.error(e);
    }
  }
  getItem(e, t) {
    const i = this.storage[e];
    return Ze(i) ? t : i;
  }
  setItem(e, t) {
    this.setItems([{ key: e, data: t }]);
  }
  setItems(e) {
    let t = false;
    for (const { key: i, data: r } of e) this.storage[i] !== r && (Ze(r) ? _t(this.storage[i]) || (this.storage[i] = void 0, t = true) : (this.storage[i] = r, t = true));
    t && this.save();
  }
  removeItem(e) {
    _t(this.storage[e]) || (this.storage[e] = void 0, this.save());
  }
  async save() {
    if (!this.closing) return this.flushDelayer.trigger(() => this.doSave());
  }
  async doSave() {
    if (!this.initializing) return;
    await this.initializing;
    const e = JSON.stringify(this.storage, null, 4);
    if (e !== this.lastSavedStorageContents) try {
      await this.fileService.writeFile(this.storagePath, $.fromString(e), { atomic: { postfix: ".vsctmp" } }), this.lastSavedStorageContents = e;
    } catch (t) {
      this.logService.error(t);
    }
  }
  async close() {
    return this.closing || (this.closing = this.flushDelayer.trigger(() => this.doSave(), 0)), this.closing;
  }
}, On = class extends X {
  constructor(e, t, i, r) {
    super(), this.fileStorage = this._register(new oy(t.stateResource, e, i, r));
  }
  async init() {
    await this.fileStorage.init();
  }
  getItem(e, t) {
    return this.fileStorage.getItem(e, t);
  }
};
On = N([x(1, ti), x(2, pe), x(3, ke)], On);
var ay = class extends On {
  setItem(e, t) {
    this.fileStorage.setItem(e, t);
  }
  setItems(e) {
    this.fileStorage.setItems(e);
  }
  removeItem(e) {
    this.fileStorage.removeItem(e);
  }
  close() {
    return this.fileStorage.close();
  }
};
b();
var ms = class {
  constructor(e, t, i) {
    this._configurationService = t, this._productService = i, this._experimentProperties = {}, this._disposables = new Ve(), this._cleanupPatterns = [], this._appenders = e.appenders, this._commonProperties = e.commonProperties ?? /* @__PURE__ */ Object.create(null), this.sessionId = this._commonProperties.sessionID, this.machineId = this._commonProperties["common.machineId"], this.macMachineId = this._commonProperties["common.macMachineId"], this.sqmId = this._commonProperties["common.sqmId"], this.devDeviceId = this._commonProperties["common.devDeviceId"], this.firstSessionDate = this._commonProperties["common.firstSessionDate"], this.msftInternal = this._commonProperties["common.msftInternal"], this._piiPaths = e.piiPaths || [], this._telemetryLevel = 3, this._sendErrorTelemetry = !!e.sendErrorTelemetry, this._cleanupPatterns = [/(vscode-)?file:\/\/\/.*?\/resources\/app\//gi];
    for (const r of this._piiPaths) this._cleanupPatterns.push(new RegExp(er(r), "gi")), r.indexOf("\\") >= 0 && this._cleanupPatterns.push(new RegExp(er(r.replace(/\\/g, "/")), "gi"));
    this._updateTelemetryLevel(), this._disposables.add(this._configurationService.onDidChangeConfiguration((r) => {
      (r.affectsConfiguration(gn) || r.affectsConfiguration(ua) || r.affectsConfiguration(ph)) && this._updateTelemetryLevel();
    }));
  }
  setExperimentProperty(e, t) {
    this._experimentProperties[e] = t;
  }
  _updateTelemetryLevel() {
    let e = mh(this._configurationService);
    const t = this._productService.enabledTelemetryLevels;
    if (t) {
      this._sendErrorTelemetry = this.sendErrorTelemetry ? t.error : false;
      const i = t.usage ? 3 : t.error ? 2 : 0;
      e = Math.min(e, i);
    }
    this._telemetryLevel = e;
  }
  get sendErrorTelemetry() {
    return this._sendErrorTelemetry;
  }
  get telemetryLevel() {
    return this._telemetryLevel;
  }
  dispose() {
    this._disposables.dispose();
  }
  _log(e, t, i) {
    this._telemetryLevel < t || (i = $r(i, this._experimentProperties), i = vh(i, this._cleanupPatterns), i = $r(i, this._commonProperties), this._appenders.forEach((r) => r.log(e, i)));
  }
  _capture(e, t, i) {
    this._telemetryLevel < t || (i = $r(i, this._experimentProperties), i = vh(i, this._cleanupPatterns), i = $r(i, this._commonProperties), this._appenders.forEach((r) => {
      r.capture(e, i);
    }));
  }
  registerAuthId(e) {
    this._appenders.forEach((t) => t.registerAuthId(e));
  }
  publicLog(e, t) {
    this._log(e, 3, t);
  }
  publicLogError(e, t) {
    this._sendErrorTelemetry && this._log(e, 2, t);
  }
  publicLogError2(e, t) {
    this.publicLogError(e, t);
  }
  publicLogCapture(e, t) {
    this._capture(e, 3, t);
  }
};
ms.IDLE_START_EVENT_NAME = "UserIdleStart", ms.IDLE_STOP_EVENT_NAME = "UserIdleStop", ms = N([x(1, Jt), x(2, ot)], ms);
function ly() {
  const e = m(2248, null, Er.nameLong), t = m(2249, null, "https://cursor.com/privacy", "https://cursor.com/security"), i = zt ? "" : m(2250, null);
  return `
${e} ${t} ${i}
`;
}
var cy = Ft.as(di.Configuration);
cy.registerConfiguration({ id: Pm, order: 1, type: "object", title: "Crash Reporting", properties: { [gn]: { type: "string", enum: ["all", "off"], enumDescriptions: ["Send OS-level crash reports.", "Disable crash reporting."], markdownDescription: ly(), default: "all", restricted: true, scope: 1, tags: ["usesOnlineServices", "telemetry"] }, [ua]: { type: "boolean", markdownDescription: Er.privacyStatementUrl ? m(2252, null, Er.nameLong, Er.privacyStatementUrl) : m(2251, null, Er.nameLong), default: true, restricted: true, markdownDeprecationMessage: m(2253, null, `\`#${gn}#\``), scope: 1, tags: ["usesOnlineServices", "telemetry"] } } }), b();
import * as Un from "fs";
async function uy(e, t) {
  const i = /* @__PURE__ */ Object.create(null), r = (n, o) => {
    const a = JSON.parse(n);
    i[o] = a;
  };
  if (t) {
    const n = [], o = await de.readdir(t);
    for (const l of o) try {
      (await Un.promises.stat(H(t, l))).isDirectory() && n.push(l);
    } catch {
    }
    const a = [];
    for (const l of n) (await de.readdir(H(t, l))).filter((h) => h === "telemetry.json").length === 1 && a.push(l);
    for (const l of a) {
      const c = (await Un.promises.readFile(H(t, l, "telemetry.json"))).toString();
      r(c, l);
    }
  }
  let s = (await Un.promises.readFile(H(e, "telemetry-core.json"))).toString();
  return r(s, "vscode-core"), s = (await Un.promises.readFile(H(e, "telemetry-extensions.json"))).toString(), r(s, "vscode-extensions"), JSON.stringify(i, null, 4);
}
b(), b();
var hy = [], fy = /* @__PURE__ */ new Set();
function dy(e, t, i, r) {
  t instanceof He || (t = new He(t, [], !!i, i === 2)), hy.push([e, t]), r === 1 && fy.add(e);
}
b();
var Ff, dl = class {
  constructor(e, t, i) {
    this.level = e, this.key = t, this.value = i, this.forward = [];
  }
}, vs = void 0, py = class Ir {
  constructor(t, i = 2 ** 16) {
    this.comparator = t, this[Ff] = "SkipList", this._level = 0, this._size = 0, this._maxLevel = Math.max(1, Math.log2(i) | 0), this._header = new dl(this._maxLevel, vs, vs);
  }
  get size() {
    return this._size;
  }
  clear() {
    this._header = new dl(this._maxLevel, vs, vs), this._size = 0;
  }
  has(t) {
    return !!Ir._search(this, t, this.comparator);
  }
  get(t) {
    return Ir._search(this, t, this.comparator)?.value;
  }
  set(t, i) {
    return Ir._insert(this, t, i, this.comparator) && (this._size += 1), this;
  }
  delete(t) {
    const i = Ir._delete(this, t, this.comparator);
    return i && (this._size -= 1), i;
  }
  forEach(t, i) {
    let r = this._header.forward[0];
    for (; r; ) t.call(i, r.value, r.key, this), r = r.forward[0];
  }
  [(Ff = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  *entries() {
    let t = this._header.forward[0];
    for (; t; ) yield [t.key, t.value], t = t.forward[0];
  }
  *keys() {
    let t = this._header.forward[0];
    for (; t; ) yield t.key, t = t.forward[0];
  }
  *values() {
    let t = this._header.forward[0];
    for (; t; ) yield t.value, t = t.forward[0];
  }
  toString() {
    let t = "[SkipList]:", i = this._header.forward[0];
    for (; i; ) t += `node(${i.key}, ${i.value}, lvl:${i.level})`, i = i.forward[0];
    return t;
  }
  static _search(t, i, r) {
    let s = t._header;
    for (let n = t._level - 1; n >= 0; n--) for (; s.forward[n] && r(s.forward[n].key, i) < 0; ) s = s.forward[n];
    if (s = s.forward[0], s && r(s.key, i) === 0) return s;
  }
  static _insert(t, i, r, s) {
    const n = [];
    let o = t._header;
    for (let a = t._level - 1; a >= 0; a--) {
      for (; o.forward[a] && s(o.forward[a].key, i) < 0; ) o = o.forward[a];
      n[a] = o;
    }
    if (o = o.forward[0], o && s(o.key, i) === 0) return o.value = r, false;
    {
      const a = Ir._randomLevel(t);
      if (a > t._level) {
        for (let l = t._level; l < a; l++) n[l] = t._header;
        t._level = a;
      }
      o = new dl(a, i, r);
      for (let l = 0; l < a; l++) o.forward[l] = n[l].forward[l], n[l].forward[l] = o;
      return true;
    }
  }
  static _randomLevel(t, i = 0.5) {
    let r = 1;
    for (; Math.random() < i && r < t._maxLevel; ) r += 1;
    return r;
  }
  static _delete(t, i, r) {
    const s = [];
    let n = t._header;
    for (let o = t._level - 1; o >= 0; o--) {
      for (; n.forward[o] && r(n.forward[o].key, i) < 0; ) n = n.forward[o];
      s[o] = n;
    }
    if (n = n.forward[0], !n || r(n.key, i) !== 0) return false;
    for (let o = 0; o < t._level && s[o].forward[o] === n; o++) s[o].forward[o] = n.forward[o];
    for (; t._level > 0 && t._header.forward[t._level - 1] === vs; ) t._level -= 1;
    return true;
  }
}, Mf = class Ll {
  constructor(t) {
    this.uri = t, this.time = Ll._clock++;
  }
  touch() {
    return this.time = Ll._clock++, this;
  }
};
Mf._clock = 0;
var Vf = Mf, ys = class {
  constructor(e) {
    this._fileService = e, this._dispooables = new Ve(), this._limit = 2 ** 16, this._comparisonKeys = /* @__PURE__ */ new WeakMap();
    const t = /* @__PURE__ */ new Map(), i = (r) => {
      let s = t.get(r.scheme);
      return s === void 0 && (s = e.hasProvider(r) && !this._fileService.hasCapability(r, 1024), t.set(r.scheme, s)), s;
    };
    this._dispooables.add(ne.any(e.onDidChangeFileSystemProviderRegistrations, e.onDidChangeFileSystemProviderCapabilities)((r) => {
      t.delete(r.scheme), this._comparisonKeys = /* @__PURE__ */ new WeakMap();
    })), this.extUri = new qs(i), this._canonicalUris = new py((r, s) => {
      if (r === s) return 0;
      const n = this._getComparisonKey(r), o = this._getComparisonKey(s);
      return n < o ? -1 : n > o ? 1 : 0;
    }, this._limit);
  }
  _getComparisonKey(e) {
    let t = this._comparisonKeys.get(e);
    return t === void 0 && (t = this.extUri.getComparisonKey(e, true), this._comparisonKeys.set(e, t)), t;
  }
  dispose() {
    this._dispooables.dispose(), this._canonicalUris.clear();
  }
  asCanonicalUri(e) {
    this._fileService.hasProvider(e) && (e = Bp(e));
    const t = this._canonicalUris.get(e);
    return t ? t.touch().uri.with({ fragment: e.fragment }) : (this._canonicalUris.set(e, new Vf(e)), this._checkTrim(), e);
  }
  _checkTrim() {
    if (this._canonicalUris.size < this._limit) return;
    const e = [...this._canonicalUris.entries()].sort((i, r) => i[1].time < r[1].time ? 1 : i[1].time > r[1].time ? -1 : 0);
    Vf._clock = 0, this._canonicalUris.clear();
    const t = this._limit * 0.5;
    for (let i = 0; i < t; i++) this._canonicalUris.set(e[i][0], e[i][1].touch());
  }
};
ys = N([x(0, ke)], ys), dy(je, ys, 1), b(), b();
var gy = ue("stateReadService"), my = ue("stateService"), br = class extends ts {
  constructor(e, t, i, r, s) {
    super(i, r, t, s), this.stateReadonlyService = e, this.nativeEnvironmentService = i;
  }
  getStoredProfiles() {
    return this.stateReadonlyService.getItem(br.PROFILES_KEY, []).map((t) => ({ ...t, location: Te(t.location) ? this.uriIdentityService.extUri.joinPath(this.profilesHome, t.location) : k.revive(t.location) }));
  }
  getStoredProfileAssociations() {
    return this.stateReadonlyService.getItem(br.PROFILE_ASSOCIATIONS_KEY, {});
  }
  getDefaultProfileExtensionsLocation() {
    return this.uriIdentityService.extUri.joinPath(k.file(this.nativeEnvironmentService.extensionsPath).with({ scheme: this.profilesHome.scheme }), "extensions.json");
  }
};
br = N([x(0, gy), x(1, je), x(2, St), x(3, ke), x(4, pe)], br);
var zi = class extends br {
  constructor(e, t, i, r, s) {
    super(e, t, i, r, s), this.stateService = e;
  }
  saveStoredProfiles(e) {
    e.length ? this.stateService.setItem(zi.PROFILES_KEY, e.map((t) => ({ ...t, location: this.uriIdentityService.extUri.basename(t.location) }))) : this.stateService.removeItem(zi.PROFILES_KEY);
  }
  saveStoredProfileAssociations(e) {
    e.emptyWindows || e.workspaces ? this.stateService.setItem(zi.PROFILE_ASSOCIATIONS_KEY, e) : this.stateService.removeItem(zi.PROFILE_ASSOCIATIONS_KEY);
  }
};
zi = N([x(0, my), x(1, je), x(2, St), x(3, ke), x(4, pe)], zi);
var Wf = class extends zi {
  constructor(e, t, i, r) {
    super(new ay(0, t, r, i), e, t, i, r);
  }
  async init() {
    return await this.stateService.init(), super.init();
  }
};
Wf = N([x(0, je), x(1, St), x(2, ke), x(3, pe)], Wf), b(), b();
import { networkInterfaces as vy } from "os";
b();
import { networkInterfaces as yy } from "os";
var wy = /* @__PURE__ */ new Set(["00:00:00:00:00:00", "ff:ff:ff:ff:ff:ff", "ac:de:48:00:11:22"]);
function _y(e) {
  const t = e.replace(/\-/g, ":").toLowerCase();
  return !wy.has(t);
}
function Ey() {
  const e = yy();
  for (const t in e) {
    const i = e[t];
    if (i) {
      for (const { mac: r } of i) if (_y(r)) return r;
    }
  }
  throw new Error("Unable to retrieve mac address (unexpected format)");
}
import { platform as pl } from "process";
import { execSync as Sy } from "child_process";
var x6 = new class {
  _isVirtualMachineMacAddress(e) {
    return this._virtualMachineOUIs || (this._virtualMachineOUIs = hr.forStrings(), this._virtualMachineOUIs.set("00-50-56", true), this._virtualMachineOUIs.set("00-0C-29", true), this._virtualMachineOUIs.set("00-05-69", true), this._virtualMachineOUIs.set("00-03-FF", true), this._virtualMachineOUIs.set("00-1C-42", true), this._virtualMachineOUIs.set("00-16-3E", true), this._virtualMachineOUIs.set("08-00-27", true), this._virtualMachineOUIs.set("00:50:56", true), this._virtualMachineOUIs.set("00:0C:29", true), this._virtualMachineOUIs.set("00:05:69", true), this._virtualMachineOUIs.set("00:03:FF", true), this._virtualMachineOUIs.set("00:1C:42", true), this._virtualMachineOUIs.set("00:16:3E", true), this._virtualMachineOUIs.set("08:00:27", true)), !!this._virtualMachineOUIs.findSubstr(e);
  }
  value() {
    if (this._value === void 0) {
      let e = 0, t = 0;
      const i = vy();
      for (const r in i) {
        const s = i[r];
        if (s) for (const { mac: n, internal: o } of s) o || (t += 1, this._isVirtualMachineMacAddress(n.toUpperCase()) && (e += 1));
      }
      this._value = t > 0 ? e / t : 0;
    }
    return this._value;
  }
}(), gl;
async function by(e) {
  return gl || (gl = (async () => {
    let t;
    try {
      t = await ky(false);
    } catch (i) {
      e(i);
    }
    return t || dt();
  })()), gl;
}
async function xy(e) {
  try {
    const t = await import("crypto"), i = Ey();
    return t.createHash("sha256").update(i, "utf8").digest("hex");
  } catch (t) {
    e(t);
    return;
  }
}
var Iy = { native: "%windir%\\System32", mixed: "%windir%\\sysnative\\cmd.exe /c %windir%\\System32", notdefined: "" }, Py = { darwin: "ioreg -rd1 -c IOPlatformExpertDevice", win32: `${Iy[Ry()]}\\REG.exe QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`, linux: "( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :", freebsd: "kenv -q smbios.system.uuid || sysctl -n kern.hostuuid" };
function Ry() {
  return pl !== "win32" ? "notdefined" : process.arch === "ia32" && process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432") ? "mixed" : "native";
}
function Ay(e) {
  switch (pl) {
    case "darwin":
      return e.split("IOPlatformUUID")[1].split(`
`)[0].replace(/\=|\s+|\"/ig, "").toLowerCase();
    case "win32":
      return e.toString().split("REG_SZ")[1].replace(/\r+|\n+|\s+/ig, "").toLowerCase();
    case "linux":
      return e.toString().replace(/\r+|\n+|\s+/ig, "").toLowerCase();
    case "freebsd":
      return e.toString().replace(/\r+|\n+|\s+/ig, "").toLowerCase();
    default:
      throw new Error(`Unsupported platform: ${process.platform}`);
  }
}
async function ky(e) {
  let t = Ay(Sy(Py[pl], { timeout: 5e3 }).toString()), i;
  try {
    i = (await import("crypto")).createHash("sha256").update(t, "utf8").digest("hex");
  } catch {
    i = dt();
  }
  return e ? t : i;
}
var Dy = "Software\\Microsoft\\SQMClient";
async function Ly(e) {
  if (Re) {
    const t = await import("@vscode/windows-registry");
    try {
      return t.GetStringRegKey("HKEY_LOCAL_MACHINE", Dy, "MachineId") || "";
    } catch (i) {
      return e(i), "";
    }
  }
  return "";
}
async function Ty(e) {
  try {
    return await (await import("@vscode/deviceid")).getDeviceId();
  } catch (t) {
    return e(t), dt();
  }
}
async function Cy(e, t) {
  let i = e.getItem(Sm);
  return (typeof i != "string" || Tt && i === "6c9d2bc8f91b89624add29c0abeae7fb42bf539fa1cdb2e3e57cd668fa9bcead") && (i = await by(t.error.bind(t))), i;
}
async function Oy(e, t) {
  let i = e.getItem(bm);
  return typeof i != "string" && (i = await xy(t.error.bind(t))), i;
}
async function Uy(e, t) {
  let i = e.getItem(xm);
  return typeof i != "string" && (i = await Ly(t.error.bind(t))), i;
}
async function Ny(e, t) {
  let i = e.getItem(Im);
  return typeof i != "string" && (i = await Ty(t.error.bind(t))), i;
}
b();
var ml = class extends Ia {
  constructor(e, t, i, r, s) {
    super(k.file(e.extensionsPath), t, i, r, s);
  }
};
ml = N([x(0, St), x(1, ke), x(2, Dt), x(3, je), x(4, pe)], ml), b();
var Fy = class extends X {
  get vscodeService() {
    return this;
  }
  get isDisposed() {
    return this._store.isDisposed;
  }
  constructor(e, t = []) {
    super(), this.logger = new c0([e, ...t]), e.isDisposed || this._register(e.onDidChangeLogLevel((i) => this.setLevel(i)));
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
b(), b();
async function My(e, t, i, r, s) {
  try {
    const n = await import("@vscode/spdlog");
    n.setFlushOn(0);
    const o = await n.createAsyncRotatingLogger(e, t, i, r);
    return s ? o.clearFormatters() : o.setPattern("%Y-%m-%d %H:%M:%S.%e [%l] %v"), o;
  } catch (n) {
    console.error(n);
  }
  return null;
}
function $f(e, t, i) {
  switch (t) {
    case Se.Trace:
      e.trace(i);
      break;
    case Se.Debug:
      e.debug(i);
      break;
    case Se.Info:
      e.info(i);
      break;
    case Se.Warning:
      e.warn(i);
      break;
    case Se.Error:
      e.error(i);
      break;
    case Se.Off:
      break;
    default:
      throw new Error(`Invalid log level ${t}`);
  }
}
function Bf(e, t) {
  switch (t) {
    case Se.Trace:
      e.setLevel(0);
      break;
    case Se.Debug:
      e.setLevel(1);
      break;
    case Se.Info:
      e.setLevel(2);
      break;
    case Se.Warning:
      e.setLevel(3);
      break;
    case Se.Error:
      e.setLevel(4);
      break;
    case Se.Off:
      e.setLevel(6);
      break;
    default:
      throw new Error(`Invalid log level ${t}`);
  }
}
var Vy = class extends l0 {
  constructor(e, t, i, r, s) {
    super(), this.buffer = [], this.setLevel(s), this._loggerCreationPromise = this._createSpdLogLogger(e, t, i, r), this._register(this.onDidChangeLogLevel((n) => {
      this._logger && Bf(this._logger, n);
    }));
  }
  async _createSpdLogLogger(e, t, i, r) {
    const s = i ? 6 : 1, n = 30 / s * R0.MB, o = await My(e, t, n, s, r);
    if (o) {
      this._logger = o, Bf(this._logger, this.getLevel());
      for (const { level: a, message: l } of this.buffer) $f(this._logger, a, l);
      this.buffer = [];
    }
  }
  log(e, t) {
    this._logger ? $f(this._logger, e, t) : this.getLevel() <= e && this.buffer.push({ level: e, message: t });
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
}, Wy = class extends u0 {
  doCreateLogger(e, t, i) {
    return new Vy(dt(), e.fsPath, !i?.donotRotate, !!i?.donotUseFormatters, t);
  }
};
b();
var $y = class extends X {
  constructor(e, t, i, r, s, n) {
    super(), this.fileSystemScheme = e, this.fileSystemProvider = t, this.userDataScheme = i, this.userDataProfilesService = r, this.uriIdentityService = s, this.logService = n, this.capabilities = jo(this.fileSystemProvider) ? this.fileSystemProvider.capabilities : this.fileSystemProvider.capabilities & -262145, this.onDidChangeCapabilities = this.fileSystemProvider.onDidChangeCapabilities, this._onDidChangeFile = this._register(new M()), this.onDidChangeFile = this._onDidChangeFile.event, this.watchResources = hr.forUris(() => !(this.capabilities & 1024)), this.atomicReadWriteResources = new Gn((o) => this.uriIdentityService.extUri.getComparisonKey(this.toFileSystemResource(o))), this.updateAtomicReadWritesResources(), this._register(r.onDidChangeProfiles(() => this.updateAtomicReadWritesResources())), this._register(this.fileSystemProvider.onDidChangeFile((o) => this.handleFileChanges(o)));
  }
  updateAtomicReadWritesResources() {
    this.atomicReadWriteResources.clear();
    for (const e of this.userDataProfilesService.profiles) this.atomicReadWriteResources.add(e.settingsResource), this.atomicReadWriteResources.add(e.keybindingsResource), this.atomicReadWriteResources.add(e.tasksResource), this.atomicReadWriteResources.add(e.extensionsResource);
  }
  open(e, t) {
    return this.fileSystemProvider.open(this.toFileSystemResource(e), t);
  }
  close(e) {
    return this.fileSystemProvider.close(e);
  }
  read(e, t, i, r, s) {
    return this.fileSystemProvider.read(e, t, i, r, s);
  }
  write(e, t, i, r, s) {
    return this.fileSystemProvider.write(e, t, i, r, s);
  }
  watch(e, t) {
    this.watchResources.set(e, e);
    const i = this.fileSystemProvider.watch(this.toFileSystemResource(e), t);
    return Ee(() => {
      this.watchResources.delete(e), i.dispose();
    });
  }
  stat(e) {
    return this.fileSystemProvider.stat(this.toFileSystemResource(e));
  }
  mkdir(e) {
    return this.fileSystemProvider.mkdir(this.toFileSystemResource(e));
  }
  rename(e, t, i) {
    return this.fileSystemProvider.rename(this.toFileSystemResource(e), this.toFileSystemResource(t), i);
  }
  readFile(e, t) {
    return this.fileSystemProvider.readFile(this.toFileSystemResource(e), t);
  }
  readFileStream(e, t, i) {
    return this.fileSystemProvider.readFileStream(this.toFileSystemResource(e), t, i);
  }
  readdir(e) {
    return this.fileSystemProvider.readdir(this.toFileSystemResource(e));
  }
  readdirWithMetadata(e) {
    if (jo(this.fileSystemProvider)) return this.fileSystemProvider.readdirWithMetadata(this.toFileSystemResource(e));
    throw new Error("readdirWithMetadata not supported");
  }
  enforceAtomicReadFile(e) {
    return this.atomicReadWriteResources.has(e);
  }
  writeFile(e, t, i) {
    return this.fileSystemProvider.writeFile(this.toFileSystemResource(e), t, i);
  }
  enforceAtomicWriteFile(e) {
    return this.atomicReadWriteResources.has(e) ? { postfix: ".vsctmp" } : false;
  }
  delete(e, t) {
    return this.fileSystemProvider.delete(this.toFileSystemResource(e), t);
  }
  copy(e, t, i) {
    if (Ho(this.fileSystemProvider)) return this.fileSystemProvider.copy(this.toFileSystemResource(e), this.toFileSystemResource(t), i);
    throw new Error("copy not supported");
  }
  cloneFile(e, t) {
    if (Xu(this.fileSystemProvider)) return this.fileSystemProvider.cloneFile(this.toFileSystemResource(e), this.toFileSystemResource(t));
    throw new Error("clone not supported");
  }
  handleFileChanges(e) {
    const t = [];
    for (const i of e) {
      if (i.resource.scheme !== this.fileSystemScheme) continue;
      const r = this.toUserDataResource(i.resource);
      this.watchResources.findSubstr(r) && t.push({ resource: r, type: i.type, cId: i.cId });
    }
    t.length && (this.logService.debug("User data changed"), this._onDidChangeFile.fire(t));
  }
  toFileSystemResource(e) {
    return e.with({ scheme: this.fileSystemScheme });
  }
  toUserDataResource(e) {
    return e.with({ scheme: this.userDataScheme });
  }
};
b();
function By() {
  return process.uncHostAllowlist;
}
function qf(e) {
  if (process.platform !== "win32") return;
  const t = By();
  if (t) if (typeof e == "string") t.add(e.toLowerCase());
  else for (const i of qy(e)) qf(i);
}
function qy(e) {
  const t = /* @__PURE__ */ new Set();
  if (Array.isArray(e)) for (const i of e) typeof i == "string" && t.add(i);
  return Array.from(t);
}
function zy(e) {
  if (typeof e != "string") return;
  const t = ["\\\\.\\UNC\\", "\\\\?\\UNC\\", "\\\\"];
  let i;
  for (const r of t) {
    if (e.indexOf(r) !== 0) continue;
    const n = e.indexOf("\\", r.length);
    if (n === -1) continue;
    const o = e.substring(r.length, n);
    if (o) {
      i = o;
      break;
    }
  }
  return i;
}
b();
function Gy(e) {
  return e.type === "gallery";
}
function Ky(e) {
  return e.type === 1 || e.type === 0;
}
var jy = /^(?<version>\d+\.\d+\.\d+(-.*)?)(@(?<platform>.+))?$/, vl = class extends X {
  constructor(e, t) {
    super(), this.configurationService = t, this._onDidChangeAllowedExtensions = this._register(new M()), this.onDidChangeAllowedExtensionsConfigValue = this._onDidChangeAllowedExtensions.event, this.publisherOrgs = e.extensionPublisherOrgs?.map((i) => i.toLowerCase()) ?? [], this._allowedExtensionsConfigValue = this.getAllowedExtensionsValue(), this._register(this.configurationService.onDidChangeConfiguration((i) => {
      i.affectsConfiguration(ca) && (this._allowedExtensionsConfigValue = this.getAllowedExtensionsValue(), this._onDidChangeAllowedExtensions.fire());
    }));
  }
  get allowedExtensionsConfigValue() {
    return this._allowedExtensionsConfigValue;
  }
  getAllowedExtensionsValue() {
    const e = this.configurationService.getValue(ca);
    if (!Ne(e) || Array.isArray(e)) return;
    const t = Object.entries(e).map(([i, r]) => [i.toLowerCase(), r]);
    if (!(t.length === 1 && t[0][0] === "*" && t[0][1] === true)) return Object.fromEntries(t);
  }
  isAllowed(e) {
    if (!this._allowedExtensionsConfigValue) return true;
    let t, i, r, s, n, o;
    Gy(e) ? (t = e.identifier.id.toLowerCase(), i = e.version, s = e.properties.isPreReleaseVersion, n = e.publisher.toLowerCase(), o = e.publisherDisplayName.toLowerCase(), r = e.properties.targetPlatform) : Ky(e) ? (t = e.identifier.id.toLowerCase(), i = e.manifest.version, s = e.preRelease, n = e.manifest.publisher.toLowerCase(), o = e.publisherDisplayName?.toLowerCase(), r = e.targetPlatform) : (t = e.id.toLowerCase(), i = e.version ?? "*", r = e.targetPlatform ?? "universal", s = e.prerelease ?? false, n = e.id.substring(0, e.id.indexOf(".")).toLowerCase(), o = e.publisherDisplayName?.toLowerCase());
    const a = k.parse(`command:workbench.action.openSettings?${encodeURIComponent(JSON.stringify({ query: `@id:${ca}` }))}`).toString(), l = this._allowedExtensionsConfigValue[t], c = new $i(m(1937, null, a));
    if (!_t(l)) return It(l) ? l ? true : c : l === "stable" && s ? new $i(m(1938, null, a)) : i !== "*" && Array.isArray(l) && !l.some((d) => {
      const p = jy.exec(d);
      if (p && p.groups) {
        const { platform: v, version: y } = p.groups;
        return !(y !== i || r !== "universal" && v && r !== v);
      }
      return false;
    }) ? new $i(m(1939, null, i, a)) : true;
    const h = o && this.publisherOrgs.includes(o) ? o : n, f = this._allowedExtensionsConfigValue[h];
    return _t(f) ? this._allowedExtensionsConfigValue["*"] === true ? true : c : It(f) ? f ? true : new $i(m(1940, null, h, a)) : f === "stable" && s ? new $i(m(1941, null, h, a)) : true;
  }
};
vl = N([x(0, ot), x(1, Jt)], vl), b();
var yl = class {
  constructor(e, t) {
    this._logger = e, this._userConfigurationService = t;
  }
  async addMcpDefinitions(e) {
    const t = e.map((i) => this.validateConfiguration(i));
    await this.updateMcpInConfig(this._userConfigurationService, t), this._logger.info(`Added MCP servers: ${t.map((i) => i.name).join(", ")}`);
  }
  async updateMcpInConfig(e, t) {
    const i = e.getValue("mcp") || { servers: {} };
    i.servers ??= {};
    for (const r of t) i.servers[r.name] = r.config;
    await e.updateValue("mcp", i);
  }
  validateConfiguration(e) {
    let t;
    try {
      t = JSON.parse(e);
    } catch (s) {
      throw new wl(`Invalid JSON '${e}': ${s}`);
    }
    if (!t.name) throw new wl(`Missing name property in ${e}`);
    if (!("command" in t) && !("url" in t)) throw new wl(`Missing command or URL property in ${e}`);
    const { name: i, ...r } = t;
    return { name: i, config: r };
  }
};
yl = N([x(1, Jt)], yl);
var wl = class extends Error {
  constructor(e) {
    super(e), this.stack = e;
  }
};
b();
function Hy(e) {
  if (!e?.serviceUrl) return null;
  const t = [{ id: `${e.serviceUrl}/extensionquery`, type: "ExtensionQueryService" }, { id: `${e.serviceUrl}/vscode/{publisher}/{name}/latest`, type: "ExtensionLatestVersionUriTemplate" }, { id: `${e.serviceUrl}/publishers/{publisher}/extensions/{name}/{version}/stats?statType={statTypeName}`, type: "ExtensionStatisticsUriTemplate" }, { id: `${e.serviceUrl}/itemName/{publisher}.{name}/version/{version}/statType/{statTypeValue}/vscodewebextension`, type: "WebExtensionStatisticsUriTemplate" }];
  return e.publisherUrl && t.push({ id: `${e.publisherUrl}/{publisher}`, type: "PublisherViewUriTemplate" }), e.itemUrl && (t.push({ id: `${e.itemUrl}/?itemName={publisher}.{name}`, type: "ExtensionDetailsViewUriTemplate" }), t.push({ id: `${e.itemUrl}/?itemName={publisher}.{name}&ssr=false#review-details`, type: "ExtensionRatingViewUriTemplate" })), e.resourceUrlTemplate && t.push({ id: e.resourceUrlTemplate, type: "ExtensionResourceUriTemplate" }), { version: "", resources: t, capabilities: { extensionQuery: { filtering: [{ name: "Tag", value: 1 }, { name: "ExtensionId", value: 4 }, { name: "Category", value: 5 }, { name: "ExtensionName", value: 7 }, { name: "Target", value: 8 }, { name: "Featured", value: 9 }, { name: "SearchText", value: 10 }, { name: "ExcludeWithFlags", value: 12 }], sorting: [{ name: "NoneOrRelevance", value: 0 }, { name: "LastUpdatedDate", value: 1 }, { name: "Title", value: 2 }, { name: "PublisherName", value: 3 }, { name: "InstallCount", value: 4 }, { name: "AverageRating", value: 6 }, { name: "PublishedDate", value: 10 }, { name: "WeightedRating", value: 12 }], flags: [{ name: "None", value: 0 }, { name: "IncludeVersions", value: 1 }, { name: "IncludeFiles", value: 2 }, { name: "IncludeCategoryAndTags", value: 4 }, { name: "IncludeSharedAccounts", value: 8 }, { name: "IncludeVersionProperties", value: 16 }, { name: "ExcludeNonValidated", value: 32 }, { name: "IncludeInstallationTargets", value: 64 }, { name: "IncludeAssetUri", value: 128 }, { name: "IncludeStatistics", value: 256 }, { name: "IncludeLatestVersionOnly", value: 512 }, { name: "Unpublished", value: 4096 }, { name: "IncludeNameConflictInfo", value: 32768 }, { name: "IncludeLatestPrereleaseAndStableVersionOnly", value: 65536 }] }, signing: { allRepositorySigned: true, allPublicRepositorySigned: true } } };
}
var _l = class extends X {
  constructor(e) {
    super(), this.productService = e, this.onDidChangeExtensionGalleryManifest = ne.None;
  }
  isEnabled() {
    return !!this.productService.extensionsGallery?.serviceUrl;
  }
  async getExtensionGalleryManifest() {
    return Hy(this.productService.extensionsGallery);
  }
};
_l = N([x(0, ot)], _l);
var Xy = class extends X {
  constructor(e) {
    super(), this.argv = e, this.registerListeners();
  }
  registerListeners() {
    process.once("exit", () => this.dispose());
  }
  async run() {
    const [e, t] = await this.initServices();
    return e.invokeFunction(async (i) => {
      const r = i.get(pe), s = i.get(ke), n = i.get(St), o = i.get(Dt);
      r.info("CLI main", this.argv), this.registerErrorHandler(r), await this.doRun(n, s, o, e), await Promise.all(t.map((a) => {
        Kp(a.flush(), 1e3);
      }));
    });
  }
  async initServices() {
    const e = new Rf(), t = { _serviceBrand: void 0, ...Er };
    e.set(ot, t);
    const i = new B0(this.argv, t);
    e.set(St, i), await Promise.all([this.allowWindowsUNCPath(i.appSettingsHome.with({ scheme: le.file }).fsPath), this.allowWindowsUNCPath(i.extensionsPath)].map((R) => R ? bd.promises.mkdir(R, { recursive: true }) : void 0));
    const r = new Wy(d0(i), i.logsHome);
    e.set(o0, r);
    const s = this._register(r.createLogger("cli", { name: m(180, null) })), n = [];
    r.getLogLevel() === Se.Trace && n.push(new Ui(r.getLogLevel()));
    const o = this._register(new Fy(s, n));
    e.set(pe, o);
    const a = this._register(new hs(o));
    e.set(ke, a);
    const l = this._register(new I2(o));
    a.registerProvider(le.file, l);
    const c = new ys(a);
    e.set(je, c);
    const h = new On(1, i, o, a), f = new br(h, c, i, a, o);
    e.set(Dt, f), a.registerProvider(le.vscodeUserData, new $y(le.file, l, le.vscodeUserData, f, c, o));
    let d;
    Re && t.win32RegValueName ? d = this._register(new Tn(o, t.win32RegValueName)) : Tt && t.darwinBundleIdentifier ? d = this._register(new Tn(o, t.darwinBundleIdentifier)) : i.policyFile ? d = this._register(new ol(i.policyFile, a, o)) : d = new Gu(), e.set(qu, d);
    const p = this._register(new y0(f.defaultProfile.settingsResource, a, d, o));
    e.set(Jt, p), await Promise.all([h.init(), p.initialize()]);
    let v;
    try {
      v = await Cy(h, o);
    } catch (R) {
      R.code !== "ENOENT" && o.error(R);
    }
    const y = await Oy(h, o), E = await Uy(h, o), _ = await Ny(h, o);
    f.init(), e.set(je, new ys(a));
    const I = new hl("local", p, i, o);
    e.set(Zr, I), e.set(Ku, new He(ia, void 0, true)), e.set(wi, new He(ml, void 0, true)), e.set(In, new He(ja, void 0, true)), e.set(Nh, new He(as, void 0, true)), e.set(Mi, new He(vl, void 0, true)), e.set(L4, new He(za, void 0, true)), e.set(is, new He(_l)), e.set(yi, new He(xa, void 0, true)), e.set(L2, new He(sl, void 0, false));
    const D = [], W = Tm(t, p);
    if (gh(t, i)) {
      D.push(Lm);
      const R = { appenders: D, sendErrorTelemetry: false, commonProperties: _m(Id(), xd(), process.arch, t.commit, t.version, v, y, E, _, W), piiPaths: Cm(i) };
      e.set(ii, new He(ms, [R], false));
    } else e.set(ii, km);
    return [new k2(e), D];
  }
  allowWindowsUNCPath(e) {
    if (Re) {
      const t = zy(e);
      t && qf(t);
    }
    return e;
  }
  registerErrorHandler(e) {
    Ad((t) => {
      const i = Ti(t, true);
      i && e.error(`[uncaught exception in CLI]: ${i}`);
    }), process.on("uncaughtException", (t) => {
      kd(t) || vt(t);
    }), process.on("unhandledRejection", (t) => vt(t));
  }
  async doRun(e, t, i, r) {
    let s;
    if (e.args.profile && (s = i.profiles.find((o) => o.name === e.args.profile), !s)) throw new Error(`Profile '${e.args.profile}' not found.`);
    const n = (s ?? i.defaultProfile).extensionsResource;
    if (this.argv["list-extensions"]) return r.createInstance(Wi, new Ui(Se.Info, false)).listExtensions(!!this.argv["show-versions"], this.argv.category, n);
    if (this.argv["install-extension"] || this.argv["install-builtin-extension"]) {
      const o = { isMachineScoped: !!this.argv["do-not-sync"], installPreReleaseVersion: !!this.argv["pre-release"], donotIncludePackAndDependencies: !!this.argv["do-not-include-pack-dependencies"], profileLocation: n };
      return r.createInstance(Wi, new Ui(Se.Info, false)).installExtensions(this.asExtensionIdOrVSIX(this.argv["install-extension"] || []), this.asExtensionIdOrVSIX(this.argv["install-builtin-extension"] || []), o, !!this.argv.force);
    } else {
      if (this.argv["uninstall-extension"]) return r.createInstance(Wi, new Ui(Se.Info, false)).uninstallExtensions(this.asExtensionIdOrVSIX(this.argv["uninstall-extension"]), !!this.argv.force, n);
      if (this.argv["update-extensions"]) return r.createInstance(Wi, new Ui(Se.Info, false)).updateExtensions(n);
      if (this.argv["locate-extension"]) return r.createInstance(Wi, new Ui(Se.Info, false)).locateExtension(this.argv["locate-extension"]);
      if (this.argv["add-mcp"]) return r.createInstance(yl, new Ui(Se.Info, false)).addMcpDefinitions(this.argv["add-mcp"]);
      this.argv.telemetry && console.log(await uy(e.appRoot, e.extensionsPath));
    }
  }
  asExtensionIdOrVSIX(e) {
    return e.map((t) => /\.vsix$/i.test(t) ? k.file(Ic(t) ? t : H(Or(), t)) : t);
  }
};
async function Qy(e) {
  const t = new Xy(e);
  try {
    await t.run();
  } finally {
    t.dispose();
  }
}
export { Qy as main };
