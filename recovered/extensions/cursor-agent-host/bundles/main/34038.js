// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 34038 range:6608479..6614650
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34038: (e, t, r) => {
    "use strict";
    r.d(t, { UU: () => p, t0: () => m });
    var n = r(36038), s = r(85591), o = r(40328), i = r(8032), a = r(78205), c = function(e2) {
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
    }, l = function(e2) {
      return this instanceof l ? (this.v = e2, this) : new l(e2);
    }, u = function(e2) {
      var t2, r2;
      return t2 = {}, n2("next"), n2("throw", function(e3) {
        throw e3;
      }), n2("return"), t2[Symbol.iterator] = function() {
        return this;
      }, t2;
      function n2(n3, s2) {
        t2[n3] = e2[n3] ? function(t3) {
          return (r2 = !r2) ? { value: l(e2[n3](t3)), done: false } : s2 ? s2(t3) : t3;
        } : s2;
      }
    }, d = function(e2, t2, r2) {
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
          (r3 = s2[e3](t3)).value instanceof l ? Promise.resolve(r3.value.v).then(c2, u2) : d2(o2[0][2], r3);
        } catch (e4) {
          d2(o2[0][3], e4);
        }
        var r3;
      }
      function c2(e3) {
        a2("next", e3);
      }
      function u2(e3) {
        a2("throw", e3);
      }
      function d2(e3, t3) {
        e3(t3), o2.shift(), o2.length && a2(o2[0][0], o2[0][1]);
      }
    };
    function p(e2, t2) {
      return (0, s.w)(e2, (r2) => {
        switch (r2.kind) {
          case n.MethodKind.Unary:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return async function(n2, s2) {
                var o2, i2;
                const a2 = await e3.unary(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues);
                return null === (o2 = null == s2 ? void 0 : s2.onHeader) || void 0 === o2 || o2.call(s2, a2.header), null === (i2 = null == s2 ? void 0 : s2.onTrailer) || void 0 === i2 || i2.call(s2, a2.trailer), a2.message;
              };
            })(t2, e2, r2);
          case n.MethodKind.ServerStreaming:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return function(n2, s2) {
                return h(e3.stream(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, (0, a.T$)([n2]), null == s2 ? void 0 : s2.contextValues), s2);
              };
            })(t2, e2, r2);
          case n.MethodKind.ClientStreaming:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return async function(n2, s2) {
                var a2, l2, u2, d2, p2, m2;
                const h2 = await e3.stream(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues);
                let f;
                null === (p2 = null == s2 ? void 0 : s2.onHeader) || void 0 === p2 || p2.call(s2, h2.header);
                let g = 0;
                try {
                  for (var y, w = true, v = c(h2.message); !(a2 = (y = await v.next()).done); w = true) {
                    d2 = y.value, w = false;
                    f = d2, g++;
                  }
                } catch (e4) {
                  l2 = { error: e4 };
                } finally {
                  try {
                    w || a2 || !(u2 = v.return) || await u2.call(v);
                  } finally {
                    if (l2) throw l2.error;
                  }
                }
                if (!f) throw new o.T("protocol error: missing response message", i.C.Unimplemented);
                if (g > 1) throw new o.T("protocol error: received extra messages for client streaming method", i.C.Unimplemented);
                return null === (m2 = null == s2 ? void 0 : s2.onTrailer) || void 0 === m2 || m2.call(s2, h2.trailer), f;
              };
            })(t2, e2, r2);
          case n.MethodKind.BiDiStreaming:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return function(n2, s2) {
                return h(e3.stream(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues), s2);
              };
            })(t2, e2, r2);
          default:
            return null;
        }
      });
    }
    function m(e2, t2) {
      return p(e2, t2);
    }
    function h(e2, t2) {
      const r2 = (function() {
        return d(this, arguments, function* () {
          var r3, n2;
          const s2 = yield l(e2);
          null === (r3 = null == t2 ? void 0 : t2.onHeader) || void 0 === r3 || r3.call(t2, s2.header), yield l(yield* u(c(s2.message))), null === (n2 = null == t2 ? void 0 : t2.onTrailer) || void 0 === n2 || n2.call(t2, s2.trailer);
        });
      })()[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ next: () => r2.next() }) };
    }
  }