// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8394 range:5165757..5177063
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8394: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { Code: () => s2.C, ConnectError: () => n2.T, appendHeaders: () => i2.Pb, cors: () => E, createCallbackClient: () => l, createClient: () => g, createConnectRouter: () => y.k, createContextKey: () => I.n, createContextValues: () => I.k, createHandlerContext: () => w.OD, createMethodImplSpec: () => w.B8, createPromiseClient: () => A, createRouterTransport: () => k, createServiceImplSpec: () => w.bz, decodeBinaryHeader: () => i2.by, encodeBinaryHeader: () => i2.Zj, makeAnyClient: () => a });
    var n2 = r2(328), s2 = r2(8032), i2 = r2(6422), o2 = r2(6038);
    function a(t3, e3) {
      const r3 = {};
      for (const [n3, s3] of Object.entries(t3.methods)) {
        const i3 = e3(Object.assign(Object.assign({}, s3), { localName: n3, service: t3 }));
        null != i3 && (r3[n3] = i3);
      }
      return r3;
    }
    var u = r2(8205), c = function(t3) {
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
    };
    function l(t3, e3) {
      return a(t3, (r3) => {
        switch (r3.kind) {
          case o2.MethodKind.Unary:
            return /* @__PURE__ */ (function(t4, e4, r4) {
              return function(i3, o3, a2) {
                const u2 = new AbortController();
                return a2 = m(u2, a2), t4.unary(e4, r4, u2.signal, a2.timeoutMs, a2.headers, i3, a2.contextValues).then((t5) => {
                  var e5, r5;
                  null === (e5 = a2.onHeader) || void 0 === e5 || e5.call(a2, t5.header), null === (r5 = a2.onTrailer) || void 0 === r5 || r5.call(a2, t5.trailer), o3(void 0, t5.message);
                }, (t5) => {
                  const e5 = n2.T.from(t5, s2.C.Internal);
                  e5.code === s2.C.Canceled && u2.signal.aborted || o3(e5, new r4.O());
                }), () => u2.abort();
              };
            })(e3, t3, r3);
          case o2.MethodKind.ServerStreaming:
            return /* @__PURE__ */ (function(t4, e4, r4) {
              return function(i3, o3, a2, l2) {
                const d2 = new AbortController();
                async function f2() {
                  var n3, s3, f3, p2, h2, g2;
                  l2 = m(d2, l2);
                  const A2 = await t4.stream(e4, r4, l2.signal, l2.timeoutMs, l2.headers, (0, u.T$)([i3]), l2.contextValues);
                  null === (h2 = l2.onHeader) || void 0 === h2 || h2.call(l2, A2.header);
                  try {
                    for (var _2, y2 = true, w2 = c(A2.message); !(n3 = (_2 = await w2.next()).done); y2 = true) {
                      p2 = _2.value, y2 = false;
                      o3(p2);
                    }
                  } catch (t5) {
                    s3 = { error: t5 };
                  } finally {
                    try {
                      y2 || n3 || !(f3 = w2.return) || await f3.call(w2);
                    } finally {
                      if (s3) throw s3.error;
                    }
                  }
                  null === (g2 = l2.onTrailer) || void 0 === g2 || g2.call(l2, A2.trailer), a2(void 0);
                }
                return f2().catch((t5) => {
                  const e5 = n2.T.from(t5, s2.C.Internal);
                  e5.code === s2.C.Canceled && d2.signal.aborted ? a2(void 0) : a2(e5);
                }), () => d2.abort();
              };
            })(e3, t3, r3);
          default:
            return null;
        }
      });
    }
    function m(t3, e3) {
      return (null == e3 ? void 0 : e3.signal) && (e3.signal.addEventListener("abort", () => t3.abort()), e3.signal.aborted && t3.abort()), Object.assign(Object.assign({}, e3), { signal: t3.signal });
    }
    var d = function(t3) {
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
    }, f = function(t3) {
      return this instanceof f ? (this.v = t3, this) : new f(t3);
    }, p = function(t3) {
      var e3, r3;
      return e3 = {}, n3("next"), n3("throw", function(t4) {
        throw t4;
      }), n3("return"), e3[Symbol.iterator] = function() {
        return this;
      }, e3;
      function n3(n4, s3) {
        e3[n4] = t3[n4] ? function(e4) {
          return (r3 = !r3) ? { value: f(t3[n4](e4)), done: false } : s3 ? s3(e4) : e4;
        } : s3;
      }
    }, h = function(t3, e3, r3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, s3 = r3.apply(t3, e3 || []), i3 = [];
      return n3 = {}, o3("next"), o3("throw"), o3("return", function(t4) {
        return function(e4) {
          return Promise.resolve(e4).then(t4, c2);
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
          (r4 = s3[t4](e4)).value instanceof f ? Promise.resolve(r4.value.v).then(u2, c2) : l2(i3[0][2], r4);
        } catch (t5) {
          l2(i3[0][3], t5);
        }
        var r4;
      }
      function u2(t4) {
        a2("next", t4);
      }
      function c2(t4) {
        a2("throw", t4);
      }
      function l2(t4, e4) {
        t4(e4), i3.shift(), i3.length && a2(i3[0][0], i3[0][1]);
      }
    };
    function g(t3, e3) {
      return a(t3, (r3) => {
        switch (r3.kind) {
          case o2.MethodKind.Unary:
            return /* @__PURE__ */ (function(t4, e4, r4) {
              return async function(n3, s3) {
                var i3, o3;
                const a2 = await t4.unary(e4, r4, null == s3 ? void 0 : s3.signal, null == s3 ? void 0 : s3.timeoutMs, null == s3 ? void 0 : s3.headers, n3, null == s3 ? void 0 : s3.contextValues);
                return null === (i3 = null == s3 ? void 0 : s3.onHeader) || void 0 === i3 || i3.call(s3, a2.header), null === (o3 = null == s3 ? void 0 : s3.onTrailer) || void 0 === o3 || o3.call(s3, a2.trailer), a2.message;
              };
            })(e3, t3, r3);
          case o2.MethodKind.ServerStreaming:
            return /* @__PURE__ */ (function(t4, e4, r4) {
              return function(n3, s3) {
                return _(t4.stream(e4, r4, null == s3 ? void 0 : s3.signal, null == s3 ? void 0 : s3.timeoutMs, null == s3 ? void 0 : s3.headers, (0, u.T$)([n3]), null == s3 ? void 0 : s3.contextValues), s3);
              };
            })(e3, t3, r3);
          case o2.MethodKind.ClientStreaming:
            return /* @__PURE__ */ (function(t4, e4, r4) {
              return async function(i3, o3) {
                var a2, u2, c2, l2, m2, f2;
                const p2 = await t4.stream(e4, r4, null == o3 ? void 0 : o3.signal, null == o3 ? void 0 : o3.timeoutMs, null == o3 ? void 0 : o3.headers, i3, null == o3 ? void 0 : o3.contextValues);
                let h2;
                null === (m2 = null == o3 ? void 0 : o3.onHeader) || void 0 === m2 || m2.call(o3, p2.header);
                let g2 = 0;
                try {
                  for (var A2, _2 = true, y2 = d(p2.message); !(a2 = (A2 = await y2.next()).done); _2 = true) {
                    l2 = A2.value, _2 = false;
                    h2 = l2, g2++;
                  }
                } catch (t5) {
                  u2 = { error: t5 };
                } finally {
                  try {
                    _2 || a2 || !(c2 = y2.return) || await c2.call(y2);
                  } finally {
                    if (u2) throw u2.error;
                  }
                }
                if (!h2) throw new n2.T("protocol error: missing response message", s2.C.Unimplemented);
                if (g2 > 1) throw new n2.T("protocol error: received extra messages for client streaming method", s2.C.Unimplemented);
                return null === (f2 = null == o3 ? void 0 : o3.onTrailer) || void 0 === f2 || f2.call(o3, p2.trailer), h2;
              };
            })(e3, t3, r3);
          case o2.MethodKind.BiDiStreaming:
            return /* @__PURE__ */ (function(t4, e4, r4) {
              return function(n3, s3) {
                return _(t4.stream(e4, r4, null == s3 ? void 0 : s3.signal, null == s3 ? void 0 : s3.timeoutMs, null == s3 ? void 0 : s3.headers, n3, null == s3 ? void 0 : s3.contextValues), s3);
              };
            })(e3, t3, r3);
          default:
            return null;
        }
      });
    }
    function A(t3, e3) {
      return g(t3, e3);
    }
    function _(t3, e3) {
      const r3 = (function() {
        return h(this, arguments, function* () {
          var r4, n3;
          const s3 = yield f(t3);
          null === (r4 = null == e3 ? void 0 : e3.onHeader) || void 0 === r4 || r4.call(e3, s3.header), yield f(yield* p(d(s3.message))), null === (n3 = null == e3 ? void 0 : e3.onTrailer) || void 0 === n3 || n3.call(e3, s3.trailer);
        });
      })()[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ next: () => r3.next() }) };
    }
    var y = r2(1992), w = r2(971), S = r2(1187), J = r2(6551), B = r2(1428);
    const E = { allowedMethods: ["POST", "GET"], allowedHeaders: [S.Z_, S._U, S.hR, S.jL, S.dk, S.kq, S.Eu, J.TW, B.E, B.SY, J.hR], exposedHeaders: [J.OJ, J.vw, J.P7, S.kq, S.jL] };
    var I = r2(3621), C = r2(1303), b = r2(2172);
    function k(t3, e3) {
      var r3, n3;
      const s3 = (0, y.k)(Object.assign(Object.assign({}, null !== (r3 = null == e3 ? void 0 : e3.router) && void 0 !== r3 ? r3 : {}), { connect: true }));
      return t3(s3), (0, C.o)(Object.assign({ httpClient: (0, b.N)(s3.handlers), baseUrl: "https://in-memory", useBinaryFormat: true, interceptors: [], acceptCompression: [], sendCompression: null, compressMinBytes: Number.MAX_SAFE_INTEGER, readMaxBytes: Number.MAX_SAFE_INTEGER, writeMaxBytes: Number.MAX_SAFE_INTEGER }, null !== (n3 = null == e3 ? void 0 : e3.transport) && void 0 !== n3 ? n3 : {}));
    }
  }