// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 78205 range:11588007..11606489
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
78205: (e, t, r) => {
    "use strict";
    r.d(t, { Fs: () => h, Jt: () => T, LX: () => p, PS: () => y, Qe: () => f, SM: () => m, T$: () => R, WK: () => d, XO: () => _, Xw: () => C, bp: () => v, du: () => g, ew: () => b, fM: () => S, lG: () => x, pY: () => I, p_: () => w, uv: () => A, yQ: () => E, zm: () => k });
    var n = r(8032), s = r(40328), o = r(77684), i = r(10278), a = function(e2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t2, r2 = e2[Symbol.asyncIterator];
      return r2 ? r2.call(e2) : (e2 = "function" == typeof __values ? __values(e2) : e2[Symbol.iterator](), t2 = {}, n2("next"), n2("throw"), n2("return"), t2[Symbol.asyncIterator] = function() {
        return this;
      }, t2);
      function n2(r3) {
        t2[r3] = e2[r3] && function(t3) {
          return new Promise(function(n3, s2) {
            (function(e3, t4, r4, n4) {
              Promise.resolve(n4).then(function(t5) {
                e3({ value: t5, done: r4 });
              }, t4);
            })(n3, s2, (t3 = e2[r3](t3)).done, t3.value);
          });
        };
      }
    }, c = function(e2) {
      return this instanceof c ? (this.v = e2, this) : new c(e2);
    }, l = function(e2, t2, r2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, s2 = r2.apply(e2, t2 || []), o2 = [];
      return n2 = {}, i2("next"), i2("throw"), i2("return", function(e3) {
        return function(t3) {
          return Promise.resolve(t3).then(e3, u2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function i2(e3, t3) {
        s2[e3] && (n2[e3] = function(t4) {
          return new Promise(function(r3, n3) {
            o2.push([e3, t4, r3, n3]) > 1 || a2(e3, t4);
          });
        }, t3 && (n2[e3] = t3(n2[e3])));
      }
      function a2(e3, t3) {
        try {
          (r3 = s2[e3](t3)).value instanceof c ? Promise.resolve(r3.value.v).then(l2, u2) : d2(o2[0][2], r3);
        } catch (e4) {
          d2(o2[0][3], e4);
        }
        var r3;
      }
      function l2(e3) {
        a2("next", e3);
      }
      function u2(e3) {
        a2("throw", e3);
      }
      function d2(e3, t3) {
        e3(t3), o2.shift(), o2.length && a2(o2[0][0], o2[0][1]);
      }
    }, u = function(e2) {
      var t2, r2;
      return t2 = {}, n2("next"), n2("throw", function(e3) {
        throw e3;
      }), n2("return"), t2[Symbol.iterator] = function() {
        return this;
      }, t2;
      function n2(n3, s2) {
        t2[n3] = e2[n3] ? function(t3) {
          return (r2 = !r2) ? { value: c(e2[n3](t3)), done: false } : s2 ? s2(t3) : t3;
        } : s2;
      }
    };
    function d(e2, ...t2) {
      const [r2, n2, s2] = (function(e3) {
        let t3;
        "function" != typeof e3[e3.length - 1] && (t3 = e3.pop());
        const r3 = e3.pop();
        return [e3, r3, t3];
      })(t2);
      let o2, i2 = e2;
      return true === (null == s2 ? void 0 : s2.propagateDownStreamError) && (i2 = o2 = x(i2)), i2 = h(i2, ...r2, { propagateDownStreamError: false }), n2(i2).catch((e3) => o2 ? o2.abort(e3).then(() => Promise.reject(e3)) : Promise.reject(e3));
    }
    function p() {
      return async function(e2) {
        var t2, r2, n2, s2;
        const o2 = [];
        try {
          for (var i2, c2 = true, l2 = a(e2); !(t2 = (i2 = await l2.next()).done); c2 = true) {
            s2 = i2.value, c2 = false;
            const e3 = s2;
            o2.push(e3);
          }
        } catch (e3) {
          r2 = { error: e3 };
        } finally {
          try {
            c2 || t2 || !(n2 = l2.return) || await n2.call(l2);
          } finally {
            if (r2) throw r2.error;
          }
        }
        return o2;
      };
    }
    function m(e2, t2) {
      return async function(r2) {
        return await C(r2, e2, t2);
      };
    }
    function h(e2, ...t2) {
      return l(this, arguments, function* () {
        var r2;
        const [n2, s2] = (function(e3) {
          let t3;
          "function" != typeof e3[e3.length - 1] && (t3 = e3.pop());
          return [e3, t3];
        })(t2);
        let o2;
        const i2 = e2[Symbol.asyncIterator]();
        let a2 = { [Symbol.asyncIterator]: () => i2 };
        true === (null == s2 ? void 0 : s2.propagateDownStreamError) && (a2 = o2 = x(a2));
        for (const e3 of n2) a2 = e3(a2);
        const l2 = a2[Symbol.asyncIterator]();
        try {
          for (; ; ) {
            const e3 = yield c(l2.next());
            if (true === e3.done) break;
            if (o2) try {
              yield yield c(e3.value);
            } catch (e4) {
              throw yield c(o2.abort(e4)), e4;
            }
            else yield yield c(e3.value);
          }
        } finally {
          true === (null == s2 ? void 0 : s2.propagateDownStreamError) && (null === (r2 = i2.return) || void 0 === r2 || r2.call(i2).catch(() => {
          }));
        }
      });
    }
    function f(e2) {
      return function(t2) {
        return l(this, arguments, function* () {
          const r2 = t2[Symbol.asyncIterator]();
          for (; ; ) {
            let t3;
            try {
              t3 = yield c(r2.next());
            } catch (t4) {
              const r3 = yield c(e2(t4));
              void 0 !== r3 && (yield yield c(r3));
              break;
            }
            if (true === t3.done) break;
            yield yield c(t3.value);
          }
        });
      };
    }
    function g(e2) {
      return function(t2) {
        return l(this, arguments, function* () {
          let r2;
          const n2 = t2[Symbol.asyncIterator]();
          for (; ; ) {
            let e3;
            try {
              e3 = yield c(n2.next());
            } catch (e4) {
              r2 = e4;
              break;
            }
            if (true === e3.done) break;
            yield yield c(e3.value);
          }
          const s2 = yield c(e2(r2));
          void 0 !== s2 && (yield yield c(s2));
        });
      };
    }
    function y(e2) {
      return function(t2) {
        return l(this, arguments, function* () {
          var r2, n2, s2, o2;
          try {
            for (var i2, l2 = true, u2 = a(t2); !(r2 = (i2 = yield c(u2.next())).done); l2 = true) {
              o2 = i2.value, l2 = false;
              const e3 = o2;
              yield yield c(e3);
            }
          } catch (e3) {
            n2 = { error: e3 };
          } finally {
            try {
              l2 || r2 || !(s2 = u2.return) || (yield c(s2.call(u2)));
            } finally {
              if (n2) throw n2.error;
            }
          }
          const d2 = yield c(e2());
          void 0 !== d2 && (yield yield c(d2));
        });
      };
    }
    function w(e2) {
      return function(t2) {
        return l(this, arguments, function* () {
          var r2, n2, s2, o2;
          const i2 = yield c(e2());
          void 0 !== i2 && (yield yield c(i2));
          try {
            for (var l2, u2 = true, d2 = a(t2); !(r2 = (l2 = yield c(d2.next())).done); u2 = true) {
              o2 = l2.value, u2 = false;
              const e3 = o2;
              yield yield c(e3);
            }
          } catch (e3) {
            n2 = { error: e3 };
          } finally {
            try {
              u2 || r2 || !(s2 = d2.return) || (yield c(s2.call(d2)));
            } finally {
              if (n2) throw n2.error;
            }
          }
        });
      };
    }
    function v(e2, t2) {
      return function(r2) {
        return l(this, arguments, function* () {
          yield yield c(yield c(C(r2, e2, t2)));
        });
      };
    }
    function _(e2, t2, r2) {
      return void 0 === t2 || void 0 === r2 ? function(t3) {
        return l(this, arguments, function* () {
          var r3, n2, s2, o2;
          try {
            for (var i2, l2 = true, u2 = a(t3); !(r3 = (i2 = yield c(u2.next())).done); l2 = true) {
              o2 = i2.value, l2 = false;
              const t4 = o2, r4 = e2.serialize(t4);
              yield yield c({ flags: 0, data: r4 });
            }
          } catch (e3) {
            n2 = { error: e3 };
          } finally {
            try {
              l2 || r3 || !(s2 = u2.return) || (yield c(s2.call(u2)));
            } finally {
              if (n2) throw n2.error;
            }
          }
        });
      } : function(n2) {
        return l(this, arguments, function* () {
          var s2, o2, i2, l2;
          try {
            for (var u2, d2 = true, p2 = a(n2); !(s2 = (u2 = yield c(p2.next())).done); d2 = true) {
              l2 = u2.value, d2 = false;
              const n3 = l2;
              let s3, o3 = 0;
              n3.end ? (o3 |= t2, s3 = r2.serialize(n3.value)) : s3 = e2.serialize(n3.value), yield yield c({ flags: o3, data: s3 });
            }
          } catch (e3) {
            o2 = { error: e3 };
          } finally {
            try {
              d2 || s2 || !(i2 = p2.return) || (yield c(i2.call(p2)));
            } finally {
              if (o2) throw o2.error;
            }
          }
        });
      };
    }
    function A(e2, t2, r2) {
      return r2 && void 0 !== t2 ? function(n2) {
        return l(this, arguments, function* () {
          var s2, o2, i2, l2;
          try {
            for (var u2, d2 = true, p2 = a(n2); !(s2 = (u2 = yield c(p2.next())).done); d2 = true) {
              l2 = u2.value, d2 = false;
              const { flags: n3, data: s3 } = l2;
              (n3 & t2) === t2 ? yield yield c({ value: r2.parse(s3), end: true }) : yield yield c({ value: e2.parse(s3), end: false });
            }
          } catch (e3) {
            o2 = { error: e3 };
          } finally {
            try {
              d2 || s2 || !(i2 = p2.return) || (yield c(i2.call(p2)));
            } finally {
              if (o2) throw o2.error;
            }
          }
        });
      } : function(o2) {
        return l(this, arguments, function* () {
          var i2, l2, u2, d2;
          try {
            for (var p2, m2 = true, h2 = a(o2); !(i2 = (p2 = yield c(h2.next())).done); m2 = true) {
              d2 = p2.value, m2 = false;
              const { flags: o3, data: i3 } = d2;
              if (void 0 === t2 || (o3 & t2) !== t2) yield yield c(e2.parse(i3));
              else if (null === r2) throw new s.T("unexpected end flag", n.C.InvalidArgument);
            }
          } catch (e3) {
            l2 = { error: e3 };
          } finally {
            try {
              m2 || i2 || !(u2 = h2.return) || (yield c(u2.call(h2)));
            } finally {
              if (l2) throw l2.error;
            }
          }
        });
      };
    }
    function S(e2, t2) {
      return function(r2) {
        return l(this, arguments, function* () {
          var n2, s2, i2, l2;
          try {
            for (var u2, d2 = true, p2 = a(r2); !(n2 = (u2 = yield c(p2.next())).done); d2 = true) {
              l2 = u2.value, d2 = false;
              const r3 = l2;
              yield yield c(yield c((0, o.$t)(r3, e2, t2)));
            }
          } catch (e3) {
            s2 = { error: e3 };
          } finally {
            try {
              d2 || n2 || !(i2 = p2.return) || (yield c(i2.call(p2)));
            } finally {
              if (s2) throw s2.error;
            }
          }
        });
      };
    }
    function b(e2, t2) {
      return function(r2) {
        return l(this, arguments, function* () {
          var n2, s2, i2, l2;
          try {
            for (var u2, d2 = true, p2 = a(r2); !(n2 = (u2 = yield c(p2.next())).done); d2 = true) {
              l2 = u2.value, d2 = false;
              const r3 = l2;
              yield yield c(yield c((0, o.qb)(r3, e2, t2)));
            }
          } catch (e3) {
            s2 = { error: e3 };
          } finally {
            try {
              d2 || n2 || !(i2 = p2.return) || (yield c(i2.call(p2)));
            } finally {
              if (s2) throw s2.error;
            }
          }
        });
      };
    }
    function E() {
      return function(e2) {
        return l(this, arguments, function* () {
          var t2, r2, n2, s2;
          try {
            for (var i2, l2 = true, u2 = a(e2); !(t2 = (i2 = yield c(u2.next())).done); l2 = true) {
              s2 = i2.value, l2 = false;
              const { flags: e3, data: t3 } = s2;
              yield yield c((0, o.zK)(e3, t3));
            }
          } catch (e3) {
            r2 = { error: e3 };
          } finally {
            try {
              l2 || t2 || !(n2 = u2.return) || (yield c(n2.call(u2)));
            } finally {
              if (r2) throw r2.error;
            }
          }
        });
      };
    }
    function I(e2) {
      return function(t2) {
        return l(this, arguments, function* () {
          var r2, i2, l2, u2;
          const d2 = (0, o.Fn)(e2);
          try {
            for (var p2, m2 = true, h2 = a(t2); !(r2 = (p2 = yield c(h2.next())).done); m2 = true) {
              u2 = p2.value, m2 = false;
              const e3 = u2;
              for (const t3 of d2.decode(e3)) yield yield c(t3);
            }
          } catch (e3) {
            i2 = { error: e3 };
          } finally {
            try {
              m2 || r2 || !(l2 = h2.return) || (yield c(l2.call(h2)));
            } finally {
              if (i2) throw i2.error;
            }
          }
          if (d2.byteLength > 0) throw new s.T("protocol error: incomplete envelope", n.C.InvalidArgument);
        });
      };
    }
    async function C(e2, t2, r2) {
      var o2, c2, l2, u2, d2, p2, m2, h2;
      const [f2, g2] = (function(e3) {
        if (null == e3) return [false, 0];
        const t3 = "string" == typeof e3 ? parseInt(e3, 10) : e3;
        if (!Number.isSafeInteger(t3) || t3 < 0) return [false, t3];
        return [true, t3];
      })(r2);
      if (f2) {
        g2 > t2 && (0, i.kk)(t2, g2, true);
        const r3 = new Uint8Array(g2);
        let d3 = 0;
        try {
          for (var y2, w2 = true, v2 = a(e2); !(o2 = (y2 = await v2.next()).done); w2 = true) {
            u2 = y2.value, w2 = false;
            const e3 = u2;
            if (d3 + e3.byteLength > g2) throw new s.T(`protocol error: promised ${g2} bytes, received ${d3 + e3.byteLength}`, n.C.InvalidArgument);
            r3.set(e3, d3), d3 += e3.byteLength;
          }
        } catch (e3) {
          c2 = { error: e3 };
        } finally {
          try {
            w2 || o2 || !(l2 = v2.return) || await l2.call(v2);
          } finally {
            if (c2) throw c2.error;
          }
        }
        if (d3 < g2) throw new s.T(`protocol error: promised ${g2} bytes, received ${d3}`, n.C.InvalidArgument);
        return r3;
      }
      const _2 = [];
      let A2 = 0;
      try {
        for (var S2, b2 = true, E2 = a(e2); !(d2 = (S2 = await E2.next()).done); b2 = true) {
          h2 = S2.value, b2 = false;
          const e3 = h2;
          A2 += e3.byteLength, (0, i.kk)(t2, A2), _2.push(e3);
        }
      } catch (e3) {
        p2 = { error: e3 };
      } finally {
        try {
          b2 || d2 || !(m2 = E2.return) || await m2.call(E2);
        } finally {
          if (p2) throw p2.error;
        }
      }
      const I2 = new Uint8Array(A2);
      let C2 = 0;
      for (let e3 = _2.shift(); e3; e3 = _2.shift()) I2.set(e3, C2), C2 += e3.byteLength;
      return I2;
    }
    async function k(e2) {
      const t2 = e2[Symbol.asyncIterator]();
      let r2 = await t2.next();
      return { [Symbol.asyncIterator]() {
        const e3 = { async next() {
          if (null !== r2) {
            const e4 = r2;
            return r2 = null, e4;
          }
          return await t2.next();
        } };
        return void 0 !== t2.throw && (e3.throw = (e4) => t2.throw(e4)), void 0 !== t2.return && (e3.return = (e4) => t2.return(e4)), e3;
      } };
    }
    function x(e2) {
      const t2 = e2[Symbol.asyncIterator]();
      if (void 0 === t2.throw) throw new Error("AsyncIterable does not implement throw");
      const r2 = t2;
      let n2, s2, o2 = { next: () => (s2 = r2.next().finally(() => {
        s2 = void 0;
      }), s2), throw: (e3) => r2.throw(e3) };
      void 0 !== t2.return && (o2 = Object.assign(Object.assign({}, o2), { return: (e3) => r2.return(e3) }));
      let i2 = false;
      return { abort(e3) {
        if (n2) return n2.state;
        const t3 = () => r2.throw(e3).then((e4) => true === e4.done ? "completed" : "caught", () => "rethrown");
        return s2 ? (n2 = { reason: e3, state: s2.then(t3, t3) }, n2.state) : (n2 = { reason: e3, state: t3() }, n2.state);
      }, [Symbol.asyncIterator]() {
        if (i2) throw new Error("AsyncIterable cannot be re-used");
        return i2 = true, o2;
      } };
    }
    function T() {
      const e2 = [], t2 = [];
      let r2, n2, s2, o2 = new Promise((e3, t3) => {
        n2 = e3, s2 = t3;
      }), i2 = false;
      function a2() {
        for (const t3 of e2.splice(0, e2.length)) t3({ done: true, value: void 0 });
      }
      return { close() {
        i2 = true, a2();
      }, async write(n3) {
        if (i2) throw null != r2 ? r2 : new Error("cannot write, WritableIterable already closed");
        const s3 = e2.shift();
        if (void 0 === s3) t2.push(n3);
        else if (s3({ done: false, value: n3 }), e2.length > 0) return;
        const a3 = t2.length + 1;
        for (let e3 = 0; e3 < a3; e3++) await o2;
      }, [Symbol.asyncIterator]: () => ({ next() {
        n2(), o2 = new Promise((e3, t3) => {
          n2 = e3, s2 = t3;
        });
        const r3 = t2.shift();
        if (void 0 !== r3) return Promise.resolve({ done: false, value: r3 });
        if (i2) return Promise.resolve({ done: true, value: void 0 });
        let a3;
        const c2 = new Promise((e3) => a3 = e3);
        return e2.push(a3), c2;
      }, throw: (e3) => (r2 = e3, i2 = true, t2.splice(0, t2.length), o2.catch(() => {
      }), s2(r2), a2(), Promise.resolve({ done: true, value: void 0 })), return: () => (i2 = true, t2.splice(0, t2.length), n2(), o2 = Promise.reject(new Error("cannot write, consumer called return")), o2.catch(() => {
      }), a2(), Promise.resolve({ done: true, value: void 0 })) }) };
    }
    function R(e2) {
      return l(this, arguments, function* () {
        yield c(yield* u(a(e2)));
      });
    }
  }