// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 22712 range:4463907..4468920
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22712: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { Code: () => s.C, ConnectError: () => n.T, appendHeaders: () => o.Pb, cors: () => w, createCallbackClient: () => u, createClient: () => p.UU, createConnectRouter: () => m.k, createContextKey: () => v.n, createContextValues: () => v.k, createHandlerContext: () => h.OD, createMethodImplSpec: () => h.B8, createPromiseClient: () => p.t0, createRouterTransport: () => S, createServiceImplSpec: () => h.bz, decodeBinaryHeader: () => o.by, encodeBinaryHeader: () => o.Zj, makeAnyClient: () => a.w });
    var n = r(40328), s = r(8032), o = r(86422), i = r(36038), a = r(85591), c = r(78205), l = function(e2) {
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
    };
    function u(e2, t2) {
      return (0, a.w)(e2, (r2) => {
        switch (r2.kind) {
          case i.MethodKind.Unary:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return function(o2, i2, a2) {
                const c2 = new AbortController();
                return a2 = d(c2, a2), e3.unary(t3, r3, c2.signal, a2.timeoutMs, a2.headers, o2, a2.contextValues).then((e4) => {
                  var t4, r4;
                  null === (t4 = a2.onHeader) || void 0 === t4 || t4.call(a2, e4.header), null === (r4 = a2.onTrailer) || void 0 === r4 || r4.call(a2, e4.trailer), i2(void 0, e4.message);
                }, (e4) => {
                  const t4 = n.T.from(e4, s.C.Internal);
                  t4.code === s.C.Canceled && c2.signal.aborted || i2(t4, new r3.O());
                }), () => c2.abort();
              };
            })(t2, e2, r2);
          case i.MethodKind.ServerStreaming:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return function(o2, i2, a2, u2) {
                const p2 = new AbortController();
                async function m2() {
                  var n2, s2, m3, h2, f2, g2;
                  u2 = d(p2, u2);
                  const y2 = await e3.stream(t3, r3, u2.signal, u2.timeoutMs, u2.headers, (0, c.T$)([o2]), u2.contextValues);
                  null === (f2 = u2.onHeader) || void 0 === f2 || f2.call(u2, y2.header);
                  try {
                    for (var w2, v2 = true, _2 = l(y2.message); !(n2 = (w2 = await _2.next()).done); v2 = true) {
                      h2 = w2.value, v2 = false;
                      i2(h2);
                    }
                  } catch (e4) {
                    s2 = { error: e4 };
                  } finally {
                    try {
                      v2 || n2 || !(m3 = _2.return) || await m3.call(_2);
                    } finally {
                      if (s2) throw s2.error;
                    }
                  }
                  null === (g2 = u2.onTrailer) || void 0 === g2 || g2.call(u2, y2.trailer), a2(void 0);
                }
                return m2().catch((e4) => {
                  const t4 = n.T.from(e4, s.C.Internal);
                  t4.code === s.C.Canceled && p2.signal.aborted ? a2(void 0) : a2(t4);
                }), () => p2.abort();
              };
            })(t2, e2, r2);
          default:
            return null;
        }
      });
    }
    function d(e2, t2) {
      return (null == t2 ? void 0 : t2.signal) && (t2.signal.addEventListener("abort", () => e2.abort()), t2.signal.aborted && e2.abort()), Object.assign(Object.assign({}, t2), { signal: e2.signal });
    }
    var p = r(34038), m = r(81992), h = r(971), f = r(21187), g = r(6551), y = r(71428);
    const w = { allowedMethods: ["POST", "GET"], allowedHeaders: [f.Z_, f._U, f.hR, f.jL, f.dk, f.kq, f.Eu, g.TW, y.E, y.SY, g.hR], exposedHeaders: [g.OJ, g.vw, g.P7, f.kq, f.jL] };
    var v = r(43621), _ = r(41303), A = r(2172);
    function S(e2, t2) {
      var r2, n2;
      const s2 = (0, m.k)(Object.assign(Object.assign({}, null !== (r2 = null == t2 ? void 0 : t2.router) && void 0 !== r2 ? r2 : {}), { connect: true }));
      return e2(s2), (0, _.o)(Object.assign({ httpClient: (0, A.N)(s2.handlers), baseUrl: "https://in-memory", useBinaryFormat: true, interceptors: [], acceptCompression: [], sendCompression: null, compressMinBytes: Number.MAX_SAFE_INTEGER, readMaxBytes: Number.MAX_SAFE_INTEGER, writeMaxBytes: Number.MAX_SAFE_INTEGER }, null !== (n2 = null == t2 ? void 0 : t2.transport) && void 0 !== n2 ? n2 : {}));
    }
  }