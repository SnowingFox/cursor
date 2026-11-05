// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8205 range:5131583..5150086
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8205: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Fs: () => p, Jt: () => v, LX: () => d, PS: () => A, Qe: () => h, SM: () => f, T$: () => q, WK: () => m, XO: () => w, Xw: () => C, bp: () => y, du: () => g, ew: () => B, fM: () => J, lG: () => k, pY: () => I, p_: () => _, uv: () => S, yQ: () => E, zm: () => b });
    var n2 = r2(8032), s2 = r2(328), i2 = r2(7684), o2 = r2(278), a = function(t3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e3, r3 = t3[Symbol.asyncIterator];
      return r3 ? r3.call(t3) : (t3 = "function" == typeof __values ? __values(t3) : t3[Symbol.iterator](), e3 = {}, n3("next"), n3("throw"), n3("return"), e3[Symbol.asyncIterator] = function() {
        return this;
      }, e3);
      function n3(r4) {
        e3[r4] = t3[r4] && function(e4) {
          return new Promise(function(n4, s3) {
            (function(t4, e5, r5, n5) {
              Promise.resolve(n5).then(function(e6) {
                t4({ value: e6, done: r5 });
              }, e5);
            })(n4, s3, (e4 = t3[r4](e4)).done, e4.value);
          });
        };
      }
    }, u = function(t3) {
      return this instanceof u ? (this.v = t3, this) : new u(t3);
    }, c = function(t3, e3, r3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, s3 = r3.apply(t3, e3 || []), i3 = [];
      return n3 = {}, o3("next"), o3("throw"), o3("return", function(t4) {
        return function(e4) {
          return Promise.resolve(e4).then(t4, l2);
        };
      }), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3;
      function o3(t4, e4) {
        s3[t4] && (n3[t4] = function(e5) {
          return new Promise(function(r4, n4) {
            i3.push([t4, e5, r4, n4]) > 1 || a2(t4, e5);
          });
        }, e4 && (n3[t4] = e4(n3[t4])));
      }
      function a2(t4, e4) {
        try {
          (r4 = s3[t4](e4)).value instanceof u ? Promise.resolve(r4.value.v).then(c2, l2) : m2(i3[0][2], r4);
        } catch (t5) {
          m2(i3[0][3], t5);
        }
        var r4;
      }
      function c2(t4) {
        a2("next", t4);
      }
      function l2(t4) {
        a2("throw", t4);
      }
      function m2(t4, e4) {
        t4(e4), i3.shift(), i3.length && a2(i3[0][0], i3[0][1]);
      }
    }, l = function(t3) {
      var e3, r3;
      return e3 = {}, n3("next"), n3("throw", function(t4) {
        throw t4;
      }), n3("return"), e3[Symbol.iterator] = function() {
        return this;
      }, e3;
      function n3(n4, s3) {
        e3[n4] = t3[n4] ? function(e4) {
          return (r3 = !r3) ? { value: u(t3[n4](e4)), done: false } : s3 ? s3(e4) : e4;
        } : s3;
      }
    };
    function m(t3, ...e3) {
      const [r3, n3, s3] = (function(t4) {
        let e4;
        "function" != typeof t4[t4.length - 1] && (e4 = t4.pop());
        const r4 = t4.pop();
        return [t4, r4, e4];
      })(e3);
      let i3, o3 = t3;
      return true === (null == s3 ? void 0 : s3.propagateDownStreamError) && (o3 = i3 = k(o3)), o3 = p(o3, ...r3, { propagateDownStreamError: false }), n3(o3).catch((t4) => i3 ? i3.abort(t4).then(() => Promise.reject(t4)) : Promise.reject(t4));
    }
    function d() {
      return async function(t3) {
        var e3, r3, n3, s3;
        const i3 = [];
        try {
          for (var o3, u2 = true, c2 = a(t3); !(e3 = (o3 = await c2.next()).done); u2 = true) {
            s3 = o3.value, u2 = false;
            const t4 = s3;
            i3.push(t4);
          }
        } catch (t4) {
          r3 = { error: t4 };
        } finally {
          try {
            u2 || e3 || !(n3 = c2.return) || await n3.call(c2);
          } finally {
            if (r3) throw r3.error;
          }
        }
        return i3;
      };
    }
    function f(t3, e3) {
      return async function(r3) {
        return await C(r3, t3, e3);
      };
    }
    function p(t3, ...e3) {
      return c(this, arguments, function* () {
        var r3;
        const [n3, s3] = (function(t4) {
          let e4;
          "function" != typeof t4[t4.length - 1] && (e4 = t4.pop());
          return [t4, e4];
        })(e3);
        let i3;
        const o3 = t3[Symbol.asyncIterator]();
        let a2 = { [Symbol.asyncIterator]: () => o3 };
        true === (null == s3 ? void 0 : s3.propagateDownStreamError) && (a2 = i3 = k(a2));
        for (const t4 of n3) a2 = t4(a2);
        const c2 = a2[Symbol.asyncIterator]();
        try {
          for (; ; ) {
            const t4 = yield u(c2.next());
            if (true === t4.done) break;
            if (i3) try {
              yield yield u(t4.value);
            } catch (t5) {
              throw yield u(i3.abort(t5)), t5;
            }
            else yield yield u(t4.value);
          }
        } finally {
          true === (null == s3 ? void 0 : s3.propagateDownStreamError) && (null === (r3 = o3.return) || void 0 === r3 || r3.call(o3).catch(() => {
          }));
        }
      });
    }
    function h(t3) {
      return function(e3) {
        return c(this, arguments, function* () {
          const r3 = e3[Symbol.asyncIterator]();
          for (; ; ) {
            let e4;
            try {
              e4 = yield u(r3.next());
            } catch (e5) {
              const r4 = yield u(t3(e5));
              void 0 !== r4 && (yield yield u(r4));
              break;
            }
            if (true === e4.done) break;
            yield yield u(e4.value);
          }
        });
      };
    }
    function g(t3) {
      return function(e3) {
        return c(this, arguments, function* () {
          let r3;
          const n3 = e3[Symbol.asyncIterator]();
          for (; ; ) {
            let t4;
            try {
              t4 = yield u(n3.next());
            } catch (t5) {
              r3 = t5;
              break;
            }
            if (true === t4.done) break;
            yield yield u(t4.value);
          }
          const s3 = yield u(t3(r3));
          void 0 !== s3 && (yield yield u(s3));
        });
      };
    }
    function A(t3) {
      return function(e3) {
        return c(this, arguments, function* () {
          var r3, n3, s3, i3;
          try {
            for (var o3, c2 = true, l2 = a(e3); !(r3 = (o3 = yield u(l2.next())).done); c2 = true) {
              i3 = o3.value, c2 = false;
              const t4 = i3;
              yield yield u(t4);
            }
          } catch (t4) {
            n3 = { error: t4 };
          } finally {
            try {
              c2 || r3 || !(s3 = l2.return) || (yield u(s3.call(l2)));
            } finally {
              if (n3) throw n3.error;
            }
          }
          const m2 = yield u(t3());
          void 0 !== m2 && (yield yield u(m2));
        });
      };
    }
    function _(t3) {
      return function(e3) {
        return c(this, arguments, function* () {
          var r3, n3, s3, i3;
          const o3 = yield u(t3());
          void 0 !== o3 && (yield yield u(o3));
          try {
            for (var c2, l2 = true, m2 = a(e3); !(r3 = (c2 = yield u(m2.next())).done); l2 = true) {
              i3 = c2.value, l2 = false;
              const t4 = i3;
              yield yield u(t4);
            }
          } catch (t4) {
            n3 = { error: t4 };
          } finally {
            try {
              l2 || r3 || !(s3 = m2.return) || (yield u(s3.call(m2)));
            } finally {
              if (n3) throw n3.error;
            }
          }
        });
      };
    }
    function y(t3, e3) {
      return function(r3) {
        return c(this, arguments, function* () {
          yield yield u(yield u(C(r3, t3, e3)));
        });
      };
    }
    function w(t3, e3, r3) {
      return void 0 === e3 || void 0 === r3 ? function(e4) {
        return c(this, arguments, function* () {
          var r4, n3, s3, i3;
          try {
            for (var o3, c2 = true, l2 = a(e4); !(r4 = (o3 = yield u(l2.next())).done); c2 = true) {
              i3 = o3.value, c2 = false;
              const e5 = i3, r5 = t3.serialize(e5);
              yield yield u({ flags: 0, data: r5 });
            }
          } catch (t4) {
            n3 = { error: t4 };
          } finally {
            try {
              c2 || r4 || !(s3 = l2.return) || (yield u(s3.call(l2)));
            } finally {
              if (n3) throw n3.error;
            }
          }
        });
      } : function(n3) {
        return c(this, arguments, function* () {
          var s3, i3, o3, c2;
          try {
            for (var l2, m2 = true, d2 = a(n3); !(s3 = (l2 = yield u(d2.next())).done); m2 = true) {
              c2 = l2.value, m2 = false;
              const n4 = c2;
              let s4, i4 = 0;
              n4.end ? (i4 |= e3, s4 = r3.serialize(n4.value)) : s4 = t3.serialize(n4.value), yield yield u({ flags: i4, data: s4 });
            }
          } catch (t4) {
            i3 = { error: t4 };
          } finally {
            try {
              m2 || s3 || !(o3 = d2.return) || (yield u(o3.call(d2)));
            } finally {
              if (i3) throw i3.error;
            }
          }
        });
      };
    }
    function S(t3, e3, r3) {
      return r3 && void 0 !== e3 ? function(n3) {
        return c(this, arguments, function* () {
          var s3, i3, o3, c2;
          try {
            for (var l2, m2 = true, d2 = a(n3); !(s3 = (l2 = yield u(d2.next())).done); m2 = true) {
              c2 = l2.value, m2 = false;
              const { flags: n4, data: s4 } = c2;
              (n4 & e3) === e3 ? yield yield u({ value: r3.parse(s4), end: true }) : yield yield u({ value: t3.parse(s4), end: false });
            }
          } catch (t4) {
            i3 = { error: t4 };
          } finally {
            try {
              m2 || s3 || !(o3 = d2.return) || (yield u(o3.call(d2)));
            } finally {
              if (i3) throw i3.error;
            }
          }
        });
      } : function(i3) {
        return c(this, arguments, function* () {
          var o3, c2, l2, m2;
          try {
            for (var d2, f2 = true, p2 = a(i3); !(o3 = (d2 = yield u(p2.next())).done); f2 = true) {
              m2 = d2.value, f2 = false;
              const { flags: i4, data: o4 } = m2;
              if (void 0 === e3 || (i4 & e3) !== e3) yield yield u(t3.parse(o4));
              else if (null === r3) throw new s2.T("unexpected end flag", n2.C.InvalidArgument);
            }
          } catch (t4) {
            c2 = { error: t4 };
          } finally {
            try {
              f2 || o3 || !(l2 = p2.return) || (yield u(l2.call(p2)));
            } finally {
              if (c2) throw c2.error;
            }
          }
        });
      };
    }
    function J(t3, e3) {
      return function(r3) {
        return c(this, arguments, function* () {
          var n3, s3, o3, c2;
          try {
            for (var l2, m2 = true, d2 = a(r3); !(n3 = (l2 = yield u(d2.next())).done); m2 = true) {
              c2 = l2.value, m2 = false;
              const r4 = c2;
              yield yield u(yield u((0, i2.$t)(r4, t3, e3)));
            }
          } catch (t4) {
            s3 = { error: t4 };
          } finally {
            try {
              m2 || n3 || !(o3 = d2.return) || (yield u(o3.call(d2)));
            } finally {
              if (s3) throw s3.error;
            }
          }
        });
      };
    }
    function B(t3, e3) {
      return function(r3) {
        return c(this, arguments, function* () {
          var n3, s3, o3, c2;
          try {
            for (var l2, m2 = true, d2 = a(r3); !(n3 = (l2 = yield u(d2.next())).done); m2 = true) {
              c2 = l2.value, m2 = false;
              const r4 = c2;
              yield yield u(yield u((0, i2.qb)(r4, t3, e3)));
            }
          } catch (t4) {
            s3 = { error: t4 };
          } finally {
            try {
              m2 || n3 || !(o3 = d2.return) || (yield u(o3.call(d2)));
            } finally {
              if (s3) throw s3.error;
            }
          }
        });
      };
    }
    function E() {
      return function(t3) {
        return c(this, arguments, function* () {
          var e3, r3, n3, s3;
          try {
            for (var o3, c2 = true, l2 = a(t3); !(e3 = (o3 = yield u(l2.next())).done); c2 = true) {
              s3 = o3.value, c2 = false;
              const { flags: t4, data: e4 } = s3;
              yield yield u((0, i2.zK)(t4, e4));
            }
          } catch (t4) {
            r3 = { error: t4 };
          } finally {
            try {
              c2 || e3 || !(n3 = l2.return) || (yield u(n3.call(l2)));
            } finally {
              if (r3) throw r3.error;
            }
          }
        });
      };
    }
    function I(t3) {
      return function(e3) {
        return c(this, arguments, function* () {
          var r3, o3, c2, l2;
          const m2 = (0, i2.Fn)(t3);
          try {
            for (var d2, f2 = true, p2 = a(e3); !(r3 = (d2 = yield u(p2.next())).done); f2 = true) {
              l2 = d2.value, f2 = false;
              const t4 = l2;
              for (const e4 of m2.decode(t4)) yield yield u(e4);
            }
          } catch (t4) {
            o3 = { error: t4 };
          } finally {
            try {
              f2 || r3 || !(c2 = p2.return) || (yield u(c2.call(p2)));
            } finally {
              if (o3) throw o3.error;
            }
          }
          if (m2.byteLength > 0) throw new s2.T("protocol error: incomplete envelope", n2.C.InvalidArgument);
        });
      };
    }
    async function C(t3, e3, r3) {
      var i3, u2, c2, l2, m2, d2, f2, p2;
      const [h2, g2] = (function(t4) {
        if (null == t4) return [false, 0];
        const e4 = "string" == typeof t4 ? parseInt(t4, 10) : t4;
        if (!Number.isSafeInteger(e4) || e4 < 0) return [false, e4];
        return [true, e4];
      })(r3);
      if (h2) {
        g2 > e3 && (0, o2.kk)(e3, g2, true);
        const r4 = new Uint8Array(g2);
        let m3 = 0;
        try {
          for (var A2, _2 = true, y2 = a(t3); !(i3 = (A2 = await y2.next()).done); _2 = true) {
            l2 = A2.value, _2 = false;
            const t4 = l2;
            if (m3 + t4.byteLength > g2) throw new s2.T(`protocol error: promised ${g2} bytes, received ${m3 + t4.byteLength}`, n2.C.InvalidArgument);
            r4.set(t4, m3), m3 += t4.byteLength;
          }
        } catch (t4) {
          u2 = { error: t4 };
        } finally {
          try {
            _2 || i3 || !(c2 = y2.return) || await c2.call(y2);
          } finally {
            if (u2) throw u2.error;
          }
        }
        if (m3 < g2) throw new s2.T(`protocol error: promised ${g2} bytes, received ${m3}`, n2.C.InvalidArgument);
        return r4;
      }
      const w2 = [];
      let S2 = 0;
      try {
        for (var J2, B2 = true, E2 = a(t3); !(m2 = (J2 = await E2.next()).done); B2 = true) {
          p2 = J2.value, B2 = false;
          const t4 = p2;
          S2 += t4.byteLength, (0, o2.kk)(e3, S2), w2.push(t4);
        }
      } catch (t4) {
        d2 = { error: t4 };
      } finally {
        try {
          B2 || m2 || !(f2 = E2.return) || await f2.call(E2);
        } finally {
          if (d2) throw d2.error;
        }
      }
      const I2 = new Uint8Array(S2);
      let C2 = 0;
      for (let t4 = w2.shift(); t4; t4 = w2.shift()) I2.set(t4, C2), C2 += t4.byteLength;
      return I2;
    }
    async function b(t3) {
      const e3 = t3[Symbol.asyncIterator]();
      let r3 = await e3.next();
      return { [Symbol.asyncIterator]() {
        const t4 = { async next() {
          if (null !== r3) {
            const t5 = r3;
            return r3 = null, t5;
          }
          return await e3.next();
        } };
        return void 0 !== e3.throw && (t4.throw = (t5) => e3.throw(t5)), void 0 !== e3.return && (t4.return = (t5) => e3.return(t5)), t4;
      } };
    }
    function k(t3) {
      const e3 = t3[Symbol.asyncIterator]();
      if (void 0 === e3.throw) throw new Error("AsyncIterable does not implement throw");
      const r3 = e3;
      let n3, s3, i3 = { next: () => (s3 = r3.next().finally(() => {
        s3 = void 0;
      }), s3), throw: (t4) => r3.throw(t4) };
      void 0 !== e3.return && (i3 = Object.assign(Object.assign({}, i3), { return: (t4) => r3.return(t4) }));
      let o3 = false;
      return { abort(t4) {
        if (n3) return n3.state;
        const e4 = () => r3.throw(t4).then((t5) => true === t5.done ? "completed" : "caught", () => "rethrown");
        return s3 ? (n3 = { reason: t4, state: s3.then(e4, e4) }, n3.state) : (n3 = { reason: t4, state: e4() }, n3.state);
      }, [Symbol.asyncIterator]() {
        if (o3) throw new Error("AsyncIterable cannot be re-used");
        return o3 = true, i3;
      } };
    }
    function v() {
      const t3 = [], e3 = [];
      let r3, n3, s3, i3 = new Promise((t4, e4) => {
        n3 = t4, s3 = e4;
      }), o3 = false;
      function a2() {
        for (const e4 of t3.splice(0, t3.length)) e4({ done: true, value: void 0 });
      }
      return { close() {
        o3 = true, a2();
      }, async write(n4) {
        if (o3) throw null != r3 ? r3 : new Error("cannot write, WritableIterable already closed");
        const s4 = t3.shift();
        if (void 0 === s4) e3.push(n4);
        else if (s4({ done: false, value: n4 }), t3.length > 0) return;
        const a3 = e3.length + 1;
        for (let t4 = 0; t4 < a3; t4++) await i3;
      }, [Symbol.asyncIterator]: () => ({ next() {
        n3(), i3 = new Promise((t4, e4) => {
          n3 = t4, s3 = e4;
        });
        const r4 = e3.shift();
        if (void 0 !== r4) return Promise.resolve({ done: false, value: r4 });
        if (o3) return Promise.resolve({ done: true, value: void 0 });
        let a3;
        const u2 = new Promise((t4) => a3 = t4);
        return t3.push(a3), u2;
      }, throw: (t4) => (r3 = t4, o3 = true, e3.splice(0, e3.length), i3.catch(() => {
      }), s3(r3), a2(), Promise.resolve({ done: true, value: void 0 })), return: () => (o3 = true, e3.splice(0, e3.length), n3(), i3 = Promise.reject(new Error("cannot write, consumer called return")), i3.catch(() => {
      }), a2(), Promise.resolve({ done: true, value: void 0 })) }) };
    }
    function q(t3) {
      return c(this, arguments, function* () {
        yield u(yield* l(a(t3)));
      });
    }
  }