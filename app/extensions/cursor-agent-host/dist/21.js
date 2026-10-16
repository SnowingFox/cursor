"use strict";
exports.id = 21, exports.ids = [21], exports.modules = { 18021: (t, e, n) => {
  n.d(e, { UU: () => f });
  var r = n(36038);
  var o = n(42761), i = n(47777), a = n(53131), l = function(t2) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e2, n2 = t2[Symbol.asyncIterator];
    return n2 ? n2.call(t2) : (t2 = "function" == typeof __values ? __values(t2) : t2[Symbol.iterator](), e2 = {}, r2("next"), r2("throw"), r2("return"), e2[Symbol.asyncIterator] = function() {
      return this;
    }, e2);
    function r2(n3) {
      e2[n3] = t2[n3] && function(e3) {
        return new Promise(function(r3, o2) {
          (function(t3, e4, n4, r4) {
            Promise.resolve(r4).then(function(e5) {
              t3({ value: e5, done: n4 });
            }, e4);
          })(r3, o2, (e3 = t2[n3](e3)).done, e3.value);
        });
      };
    }
  }, u = function(t2) {
    return this instanceof u ? (this.v = t2, this) : new u(t2);
  }, s = function(t2) {
    var e2, n2;
    return e2 = {}, r2("next"), r2("throw", function(t3) {
      throw t3;
    }), r2("return"), e2[Symbol.iterator] = function() {
      return this;
    }, e2;
    function r2(r3, o2) {
      e2[r3] = t2[r3] ? function(e3) {
        return (n2 = !n2) ? { value: u(t2[r3](e3)), done: false } : o2 ? o2(e3) : e3;
      } : o2;
    }
  }, c = function(t2, e2, n2) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r2, o2 = n2.apply(t2, e2 || []), i2 = [];
    return r2 = {}, a2("next"), a2("throw"), a2("return", function(t3) {
      return function(e3) {
        return Promise.resolve(e3).then(t3, c2);
      };
    }), r2[Symbol.asyncIterator] = function() {
      return this;
    }, r2;
    function a2(t3, e3) {
      o2[t3] && (r2[t3] = function(e4) {
        return new Promise(function(n3, r3) {
          i2.push([t3, e4, n3, r3]) > 1 || l2(t3, e4);
        });
      }, e3 && (r2[t3] = e3(r2[t3])));
    }
    function l2(t3, e3) {
      try {
        (n3 = o2[t3](e3)).value instanceof u ? Promise.resolve(n3.value.v).then(s2, c2) : f2(i2[0][2], n3);
      } catch (t4) {
        f2(i2[0][3], t4);
      }
      var n3;
    }
    function s2(t3) {
      l2("next", t3);
    }
    function c2(t3) {
      l2("throw", t3);
    }
    function f2(t3, e3) {
      t3(e3), i2.shift(), i2.length && l2(i2[0][0], i2[0][1]);
    }
  };
  function f(t2, e2) {
    return (function(t3, e3) {
      const n2 = {};
      for (const [r2, o2] of Object.entries(t3.methods)) {
        const i2 = e3(Object.assign(Object.assign({}, o2), { localName: r2, service: t3 }));
        null != i2 && (n2[r2] = i2);
      }
      return n2;
    })(t2, (n2) => {
      switch (n2.kind) {
        case r.MethodKind.Unary:
          return /* @__PURE__ */ (function(t3, e3, n3) {
            return async function(r2, o2) {
              var i2, a2;
              const l2 = await t3.unary(e3, n3, null == o2 ? void 0 : o2.signal, null == o2 ? void 0 : o2.timeoutMs, null == o2 ? void 0 : o2.headers, r2, null == o2 ? void 0 : o2.contextValues);
              return null === (i2 = null == o2 ? void 0 : o2.onHeader) || void 0 === i2 || i2.call(o2, l2.header), null === (a2 = null == o2 ? void 0 : o2.onTrailer) || void 0 === a2 || a2.call(o2, l2.trailer), l2.message;
            };
          })(e2, t2, n2);
        case r.MethodKind.ServerStreaming:
          return /* @__PURE__ */ (function(t3, e3, n3) {
            return function(r2, o2) {
              return d(t3.stream(e3, n3, null == o2 ? void 0 : o2.signal, null == o2 ? void 0 : o2.timeoutMs, null == o2 ? void 0 : o2.headers, (0, a.T$)([r2]), null == o2 ? void 0 : o2.contextValues), o2);
            };
          })(e2, t2, n2);
        case r.MethodKind.ClientStreaming:
          return /* @__PURE__ */ (function(t3, e3, n3) {
            return async function(r2, a2) {
              var u2, s2, c2, f2, d2, y;
              const h = await t3.stream(e3, n3, null == a2 ? void 0 : a2.signal, null == a2 ? void 0 : a2.timeoutMs, null == a2 ? void 0 : a2.headers, r2, null == a2 ? void 0 : a2.contextValues);
              let v;
              null === (d2 = null == a2 ? void 0 : a2.onHeader) || void 0 === d2 || d2.call(a2, h.header);
              let w = 0;
              try {
                for (var m, g = true, b = l(h.message); !(u2 = (m = await b.next()).done); g = true) {
                  f2 = m.value, g = false;
                  v = f2, w++;
                }
              } catch (t4) {
                s2 = { error: t4 };
              } finally {
                try {
                  g || u2 || !(c2 = b.return) || await c2.call(b);
                } finally {
                  if (s2) throw s2.error;
                }
              }
              if (!v) throw new o.T("protocol error: missing response message", i.C.Unimplemented);
              if (w > 1) throw new o.T("protocol error: received extra messages for client streaming method", i.C.Unimplemented);
              return null === (y = null == a2 ? void 0 : a2.onTrailer) || void 0 === y || y.call(a2, h.trailer), v;
            };
          })(e2, t2, n2);
        case r.MethodKind.BiDiStreaming:
          return /* @__PURE__ */ (function(t3, e3, n3) {
            return function(r2, o2) {
              return d(t3.stream(e3, n3, null == o2 ? void 0 : o2.signal, null == o2 ? void 0 : o2.timeoutMs, null == o2 ? void 0 : o2.headers, r2, null == o2 ? void 0 : o2.contextValues), o2);
            };
          })(e2, t2, n2);
        default:
          return null;
      }
    });
  }
  function d(t2, e2) {
    const n2 = (function() {
      return c(this, arguments, function* () {
        var n3, r2;
        const o2 = yield u(t2);
        null === (n3 = null == e2 ? void 0 : e2.onHeader) || void 0 === n3 || n3.call(e2, o2.header), yield u(yield* s(l(o2.message))), null === (r2 = null == e2 ? void 0 : e2.onTrailer) || void 0 === r2 || r2.call(e2, o2.trailer);
      });
    })()[Symbol.asyncIterator]();
    return { [Symbol.asyncIterator]: () => ({ next: () => n2.next() }) };
  }
}, 53009: (t, e, n) => {
  n.d(e, { NL: () => u, Tw: () => s, kk: () => c });
  var r = n(42761), o = n(47777);
  const i = 4294967295, a = i, l = 1024;
  function u(t2, e2, n2) {
    if (null != e2 || (e2 = a), null != t2 || (t2 = i), null != n2 || (n2 = l), e2 < 1 || e2 > a) throw new r.T(`writeMaxBytes ${e2} must be >= 1 and <= ${a}`, o.C.Internal);
    if (t2 < 1 || t2 > i) throw new r.T(`readMaxBytes ${t2} must be >= 1 and <= ${i}`, o.C.Internal);
    return { readMaxBytes: t2, writeMaxBytes: e2, compressMinBytes: n2 };
  }
  function s(t2, e2) {
    if (e2 > t2) throw new r.T(`message size ${e2} is larger than configured writeMaxBytes ${t2}`, o.C.ResourceExhausted);
  }
  function c(t2, e2, n2 = false) {
    if (e2 > t2) {
      let i2 = `message size is larger than configured readMaxBytes ${t2}`;
      throw n2 && (i2 = `message size ${e2} is larger than configured readMaxBytes ${t2}`), new r.T(i2, o.C.ResourceExhausted);
    }
  }
}, 53131: (t, e, n) => {
  n.d(e, { T$: () => M, Fs: () => m, WK: () => w, fM: () => p, ew: () => x, yQ: () => S, uv: () => b, XO: () => g, pY: () => I });
  var r = n(47777), o = n(42761);
  const i = 1;
  var a = n(53009);
  function l(t2) {
    return new u(t2);
  }
  class u {
    constructor(t2) {
      this.readMaxBytes = t2, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
    }
    get byteLength() {
      return this.buf.reduce((t2, e2) => t2 + e2.byteLength, 0);
    }
    decode(t2) {
      this.buf.push(t2);
      const e2 = [];
      for (; ; ) {
        let t3 = this.pop();
        if (!t3) break;
        e2.push(t3);
      }
      return e2;
    }
    pop() {
      if ((this.env || (this.env = this.head(), this.env)) && this.cons(this.env.data)) {
        const t2 = this.env;
        return this.env = void 0, t2;
      }
    }
    head() {
      if (!this.cons(this.header)) return;
      const t2 = this.headerView.getUint8(0), e2 = this.headerView.getUint32(1);
      return (0, a.kk)(this.readMaxBytes, e2, true), { flags: t2, data: new Uint8Array(e2) };
    }
    cons(t2) {
      const e2 = t2.byteLength;
      if (this.byteLength < e2) return false;
      let n2 = 0;
      for (; n2 < e2; ) {
        const r2 = this.buf.shift();
        r2.byteLength > e2 - n2 ? (t2.set(r2.subarray(0, e2 - n2), n2), this.buf.unshift(r2.subarray(e2 - n2)), n2 += e2 - n2) : (t2.set(r2, n2), n2 += r2.byteLength);
      }
      return true;
    }
  }
  async function s(t2, e2, n2) {
    let { flags: a2, data: l2 } = t2;
    if ((a2 & i) === i) throw new o.T("invalid envelope, already compressed", r.C.Internal);
    return e2 && l2.byteLength >= n2 && (l2 = await e2.compress(l2), a2 |= i), { data: l2, flags: a2 };
  }
  async function c(t2, e2, n2) {
    let { flags: a2, data: l2 } = t2;
    if ((a2 & i) === i) {
      if (!e2) throw new o.T("received compressed envelope, but do not know how to decompress", r.C.Internal);
      l2 = await e2.decompress(l2, n2), a2 ^= i;
    }
    return { data: l2, flags: a2 };
  }
  function f(t2, e2) {
    const n2 = new Uint8Array(e2.length + 5);
    n2.set(e2, 5);
    const r2 = new DataView(n2.buffer, n2.byteOffset, n2.byteLength);
    return r2.setUint8(0, t2), r2.setUint32(1, e2.length), n2;
  }
  var d = function(t2) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e2, n2 = t2[Symbol.asyncIterator];
    return n2 ? n2.call(t2) : (t2 = "function" == typeof __values ? __values(t2) : t2[Symbol.iterator](), e2 = {}, r2("next"), r2("throw"), r2("return"), e2[Symbol.asyncIterator] = function() {
      return this;
    }, e2);
    function r2(n3) {
      e2[n3] = t2[n3] && function(e3) {
        return new Promise(function(r3, o2) {
          (function(t3, e4, n4, r4) {
            Promise.resolve(r4).then(function(e5) {
              t3({ value: e5, done: n4 });
            }, e4);
          })(r3, o2, (e3 = t2[n3](e3)).done, e3.value);
        });
      };
    }
  }, y = function(t2) {
    return this instanceof y ? (this.v = t2, this) : new y(t2);
  }, h = function(t2, e2, n2) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r2, o2 = n2.apply(t2, e2 || []), i2 = [];
    return r2 = {}, a2("next"), a2("throw"), a2("return", function(t3) {
      return function(e3) {
        return Promise.resolve(e3).then(t3, s2);
      };
    }), r2[Symbol.asyncIterator] = function() {
      return this;
    }, r2;
    function a2(t3, e3) {
      o2[t3] && (r2[t3] = function(e4) {
        return new Promise(function(n3, r3) {
          i2.push([t3, e4, n3, r3]) > 1 || l2(t3, e4);
        });
      }, e3 && (r2[t3] = e3(r2[t3])));
    }
    function l2(t3, e3) {
      try {
        (n3 = o2[t3](e3)).value instanceof y ? Promise.resolve(n3.value.v).then(u2, s2) : c2(i2[0][2], n3);
      } catch (t4) {
        c2(i2[0][3], t4);
      }
      var n3;
    }
    function u2(t3) {
      l2("next", t3);
    }
    function s2(t3) {
      l2("throw", t3);
    }
    function c2(t3, e3) {
      t3(e3), i2.shift(), i2.length && l2(i2[0][0], i2[0][1]);
    }
  }, v = function(t2) {
    var e2, n2;
    return e2 = {}, r2("next"), r2("throw", function(t3) {
      throw t3;
    }), r2("return"), e2[Symbol.iterator] = function() {
      return this;
    }, e2;
    function r2(r3, o2) {
      e2[r3] = t2[r3] ? function(e3) {
        return (n2 = !n2) ? { value: y(t2[r3](e3)), done: false } : o2 ? o2(e3) : e3;
      } : o2;
    }
  };
  function w(t2, ...e2) {
    const [n2, r2, o2] = (function(t3) {
      let e3;
      "function" != typeof t3[t3.length - 1] && (e3 = t3.pop());
      const n3 = t3.pop();
      return [t3, n3, e3];
    })(e2);
    let i2, a2 = t2;
    return true === (null == o2 ? void 0 : o2.propagateDownStreamError) && (a2 = i2 = T(a2)), a2 = m(a2, ...n2, { propagateDownStreamError: false }), r2(a2).catch((t3) => i2 ? i2.abort(t3).then(() => Promise.reject(t3)) : Promise.reject(t3));
  }
  function m(t2, ...e2) {
    return h(this, arguments, function* () {
      var n2;
      const [r2, o2] = (function(t3) {
        let e3;
        "function" != typeof t3[t3.length - 1] && (e3 = t3.pop());
        return [t3, e3];
      })(e2);
      let i2;
      const a2 = t2[Symbol.asyncIterator]();
      let l2 = { [Symbol.asyncIterator]: () => a2 };
      true === (null == o2 ? void 0 : o2.propagateDownStreamError) && (l2 = i2 = T(l2));
      for (const t3 of r2) l2 = t3(l2);
      const u2 = l2[Symbol.asyncIterator]();
      try {
        for (; ; ) {
          const t3 = yield y(u2.next());
          if (true === t3.done) break;
          if (i2) try {
            yield yield y(t3.value);
          } catch (t4) {
            throw yield y(i2.abort(t4)), t4;
          }
          else yield yield y(t3.value);
        }
      } finally {
        true === (null == o2 ? void 0 : o2.propagateDownStreamError) && (null === (n2 = a2.return) || void 0 === n2 || n2.call(a2).catch(() => {
        }));
      }
    });
  }
  function g(t2, e2, n2) {
    return void 0 === e2 || void 0 === n2 ? function(e3) {
      return h(this, arguments, function* () {
        var n3, r2, o2, i2;
        try {
          for (var a2, l2 = true, u2 = d(e3); !(n3 = (a2 = yield y(u2.next())).done); l2 = true) {
            i2 = a2.value, l2 = false;
            const e4 = i2, n4 = t2.serialize(e4);
            yield yield y({ flags: 0, data: n4 });
          }
        } catch (t3) {
          r2 = { error: t3 };
        } finally {
          try {
            l2 || n3 || !(o2 = u2.return) || (yield y(o2.call(u2)));
          } finally {
            if (r2) throw r2.error;
          }
        }
      });
    } : function(r2) {
      return h(this, arguments, function* () {
        var o2, i2, a2, l2;
        try {
          for (var u2, s2 = true, c2 = d(r2); !(o2 = (u2 = yield y(c2.next())).done); s2 = true) {
            l2 = u2.value, s2 = false;
            const r3 = l2;
            let o3, i3 = 0;
            r3.end ? (i3 |= e2, o3 = n2.serialize(r3.value)) : o3 = t2.serialize(r3.value), yield yield y({ flags: i3, data: o3 });
          }
        } catch (t3) {
          i2 = { error: t3 };
        } finally {
          try {
            s2 || o2 || !(a2 = c2.return) || (yield y(a2.call(c2)));
          } finally {
            if (i2) throw i2.error;
          }
        }
      });
    };
  }
  function b(t2, e2, n2) {
    return n2 && void 0 !== e2 ? function(r2) {
      return h(this, arguments, function* () {
        var o2, i2, a2, l2;
        try {
          for (var u2, s2 = true, c2 = d(r2); !(o2 = (u2 = yield y(c2.next())).done); s2 = true) {
            l2 = u2.value, s2 = false;
            const { flags: r3, data: o3 } = l2;
            (r3 & e2) === e2 ? yield yield y({ value: n2.parse(o3), end: true }) : yield yield y({ value: t2.parse(o3), end: false });
          }
        } catch (t3) {
          i2 = { error: t3 };
        } finally {
          try {
            s2 || o2 || !(a2 = c2.return) || (yield y(a2.call(c2)));
          } finally {
            if (i2) throw i2.error;
          }
        }
      });
    } : function(i2) {
      return h(this, arguments, function* () {
        var a2, l2, u2, s2;
        try {
          for (var c2, f2 = true, h2 = d(i2); !(a2 = (c2 = yield y(h2.next())).done); f2 = true) {
            s2 = c2.value, f2 = false;
            const { flags: i3, data: a3 } = s2;
            if (void 0 === e2 || (i3 & e2) !== e2) yield yield y(t2.parse(a3));
            else if (null === n2) throw new o.T("unexpected end flag", r.C.InvalidArgument);
          }
        } catch (t3) {
          l2 = { error: t3 };
        } finally {
          try {
            f2 || a2 || !(u2 = h2.return) || (yield y(u2.call(h2)));
          } finally {
            if (l2) throw l2.error;
          }
        }
      });
    };
  }
  function p(t2, e2) {
    return function(n2) {
      return h(this, arguments, function* () {
        var r2, o2, i2, a2;
        try {
          for (var l2, u2 = true, c2 = d(n2); !(r2 = (l2 = yield y(c2.next())).done); u2 = true) {
            a2 = l2.value, u2 = false;
            const n3 = a2;
            yield yield y(yield y(s(n3, t2, e2)));
          }
        } catch (t3) {
          o2 = { error: t3 };
        } finally {
          try {
            u2 || r2 || !(i2 = c2.return) || (yield y(i2.call(c2)));
          } finally {
            if (o2) throw o2.error;
          }
        }
      });
    };
  }
  function x(t2, e2) {
    return function(n2) {
      return h(this, arguments, function* () {
        var r2, o2, i2, a2;
        try {
          for (var l2, u2 = true, s2 = d(n2); !(r2 = (l2 = yield y(s2.next())).done); u2 = true) {
            a2 = l2.value, u2 = false;
            const n3 = a2;
            yield yield y(yield y(c(n3, t2, e2)));
          }
        } catch (t3) {
          o2 = { error: t3 };
        } finally {
          try {
            u2 || r2 || !(i2 = s2.return) || (yield y(i2.call(s2)));
          } finally {
            if (o2) throw o2.error;
          }
        }
      });
    };
  }
  function S() {
    return function(t2) {
      return h(this, arguments, function* () {
        var e2, n2, r2, o2;
        try {
          for (var i2, a2 = true, l2 = d(t2); !(e2 = (i2 = yield y(l2.next())).done); a2 = true) {
            o2 = i2.value, a2 = false;
            const { flags: t3, data: e3 } = o2;
            yield yield y(f(t3, e3));
          }
        } catch (t3) {
          n2 = { error: t3 };
        } finally {
          try {
            a2 || e2 || !(r2 = l2.return) || (yield y(r2.call(l2)));
          } finally {
            if (n2) throw n2.error;
          }
        }
      });
    };
  }
  function I(t2) {
    return function(e2) {
      return h(this, arguments, function* () {
        var n2, i2, a2, u2;
        const s2 = l(t2);
        try {
          for (var c2, f2 = true, h2 = d(e2); !(n2 = (c2 = yield y(h2.next())).done); f2 = true) {
            u2 = c2.value, f2 = false;
            const t3 = u2;
            for (const e3 of s2.decode(t3)) yield yield y(e3);
          }
        } catch (t3) {
          i2 = { error: t3 };
        } finally {
          try {
            f2 || n2 || !(a2 = h2.return) || (yield y(a2.call(h2)));
          } finally {
            if (i2) throw i2.error;
          }
        }
        if (s2.byteLength > 0) throw new o.T("protocol error: incomplete envelope", r.C.InvalidArgument);
      });
    };
  }
  function T(t2) {
    const e2 = t2[Symbol.asyncIterator]();
    if (void 0 === e2.throw) throw new Error("AsyncIterable does not implement throw");
    const n2 = e2;
    let r2, o2, i2 = { next: () => (o2 = n2.next().finally(() => {
      o2 = void 0;
    }), o2), throw: (t3) => n2.throw(t3) };
    void 0 !== e2.return && (i2 = Object.assign(Object.assign({}, i2), { return: (t3) => n2.return(t3) }));
    let a2 = false;
    return { abort(t3) {
      if (r2) return r2.state;
      const e3 = () => n2.throw(t3).then((t4) => true === t4.done ? "completed" : "caught", () => "rethrown");
      return o2 ? (r2 = { reason: t3, state: o2.then(e3, e3) }, r2.state) : (r2 = { reason: t3, state: e3() }, r2.state);
    }, [Symbol.asyncIterator]() {
      if (a2) throw new Error("AsyncIterable cannot be re-used");
      return a2 = true, i2;
    } };
  }
  function M(t2) {
    return h(this, arguments, function* () {
      yield y(yield* v(d(t2)));
    });
  }
} };
