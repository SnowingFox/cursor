// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1303 range:472162..481673
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1303: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { o: () => C });
    var n2 = r2(6038), s2 = r2(1187), i2 = r2(6229), o2 = r2(129);
    function a(t3, e3, r3, a2, u2, c2, l2) {
      const m2 = (function(t4, e4, r4, a3, u3) {
        const c3 = new Headers(null != a3 ? a3 : {});
        return void 0 !== r4 && c3.set(s2.hR, `${r4}`), c3.set(s2.Z_, t4 == n2.MethodKind.Unary ? e4 ? o2.Vs : o2.Br : e4 ? o2.Sg : o2.yU), c3.set(s2._U, i2.Xg), u3 && c3.set(s2.qy, "connect-es/1.6.1"), c3;
      })(t3, e3, r3, a2, l2);
      if (null != c2) {
        const e4 = t3 == n2.MethodKind.Unary ? s2.kq : s2.jL;
        m2.set(e4, c2.name);
      }
      if (u2.length > 0) {
        const e4 = t3 == n2.MethodKind.Unary ? s2.Eu : s2.dk;
        m2.set(e4, u2.map((t4) => t4.name).join(","));
      }
      return m2;
    }
    var u = r2(8032), c = r2(6536), l = r2(328);
    function m(t3, e3, r3, i3, a2) {
      let m2;
      const d2 = a2.get(t3 == n2.MethodKind.Unary ? s2.kq : s2.jL);
      if (null != d2 && "identity" !== d2.toLowerCase() && (m2 = e3.find((t4) => t4.name === d2), !m2)) throw new l.T(`unsupported response encoding "${d2}"`, u.C.Internal, a2);
      return Object.assign({ compression: m2 }, (function(t4, e4, r4, i4) {
        const a3 = i4.get(s2.Z_), m3 = (0, o2.xk)(a3);
        if (200 !== r4) {
          const e5 = new l.T(`HTTP ${r4}`, (0, c.q)(r4), i4);
          if (t4 == n2.MethodKind.Unary && m3 && !m3.binary) return { isUnaryError: true, unaryError: e5 };
          throw e5;
        }
        const d3 = e4, f2 = t4 !== n2.MethodKind.Unary;
        if ((null == m3 ? void 0 : m3.binary) !== d3 || m3.stream !== f2) throw new l.T(`unsupported content type ${a3}`, void 0 === m3 ? u.C.Unknown : u.C.Internal, i4);
        return { isUnaryError: false };
      })(t3, r3, i3, a2));
    }
    var d = r2(7645), f = r2(9726), p = r2(685);
    const h = "application/";
    function g(t3, e3, r3) {
      let o3 = `?connect=v${i2.Xg}`;
      const a2 = t3.header.get(s2.Z_);
      0 === (null == a2 ? void 0 : a2.indexOf(h)) && (o3 += "&encoding=" + encodeURIComponent(a2.slice(h.length)));
      const u2 = t3.header.get(s2.kq);
      null !== u2 && "identity" !== u2 && (o3 += "&compression=" + encodeURIComponent(u2), r3 = true), r3 && (o3 += "&base64=1"), o3 += "&message=" + (function(t4, e4) {
        return e4 ? n2.protoBase64.enc(t4).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encodeURIComponent(new TextDecoder().decode(t4));
      })(e3, r3);
      const c2 = t3.url + o3, l2 = new Headers(t3.header);
      return [s2._U, s2.Z_, s2.qs, s2.kq, s2.Eu].forEach((t4) => l2.delete(t4)), Object.assign(Object.assign({}, t3), { init: Object.assign(Object.assign({}, t3.init), { method: "GET" }), url: c2, header: l2 });
    }
    var A = r2(6422), _ = r2(8205), y = r2(7572), w = r2(1304), S = r2(878), J = r2(3621), B = function(t3) {
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
    }, E = function(t3) {
      return this instanceof E ? (this.v = t3, this) : new E(t3);
    }, I = function(t3, e3, r3) {
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
          (r4 = s3[t4](e4)).value instanceof E ? Promise.resolve(r4.value.v).then(u2, c2) : l2(i3[0][2], r4);
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
    function C(t3) {
      return { async unary(e3, r3, i3, o3, u2, c2, l2) {
        const p2 = (0, S.Qg)(r3, t3.binaryOptions, t3.jsonOptions, t3);
        return o3 = void 0 === o3 ? t3.defaultTimeoutMs : o3 <= 0 ? void 0 : o3, await (0, w.L)({ interceptors: t3.interceptors, signal: i3, timeoutMs: o3, req: { stream: false, service: e3, method: r3, url: (0, y.j)(t3.baseUrl, e3, r3), init: {}, header: a(r3.kind, t3.useBinaryFormat, o3, u2, t3.acceptCompression, t3.sendCompression, true), contextValues: null != l2 ? l2 : (0, J.k)(), message: c2 }, next: async (i4) => {
          var o4;
          let a2 = p2.getI(t3.useBinaryFormat).serialize(i4.message);
          t3.sendCompression && a2.byteLength > t3.compressMinBytes ? (a2 = await t3.sendCompression.compress(a2), i4.header.set(s2.kq, t3.sendCompression.name)) : i4.header.delete(s2.kq);
          let u3;
          true === t3.useHttpGet && r3.idempotency === n2.MethodIdempotency.NoSideEffects ? i4 = g(i4, a2, t3.useBinaryFormat) : (u3 = (0, _.T$)([a2]), 0 === a2.length && i4.header.set("Content-Length", "0"));
          const c3 = await t3.httpClient({ url: i4.url, method: null !== (o4 = i4.init.method) && void 0 !== o4 ? o4 : "POST", header: i4.header, signal: i4.signal, body: u3 }), { compression: l3, isUnaryError: h2, unaryError: y2 } = m(r3.kind, t3.acceptCompression, t3.useBinaryFormat, c3.status, c3.header), [w2, S2] = (0, d.z)(c3.header);
          let J2 = await (0, _.WK)(c3.body, (0, _.SM)(t3.readMaxBytes, c3.header.get(s2.qs)), { propagateDownStreamError: false });
          if (l3 && (J2 = await l3.decompress(J2, t3.readMaxBytes)), h2) throw (0, f.O1)(J2, (0, A.Pb)(w2, S2), y2);
          return { stream: false, service: e3, method: r3, header: w2, message: p2.getO(t3.useBinaryFormat).parse(J2), trailer: S2 };
        } });
      }, async stream(e3, r3, n3, s3, i3, o3, c2) {
        const d2 = (0, S.Qg)(r3, t3.binaryOptions, t3.jsonOptions, t3), f2 = (0, p.Q8)(t3.jsonOptions);
        return s3 = void 0 === s3 ? t3.defaultTimeoutMs : s3 <= 0 ? void 0 : s3, (0, w.u)({ interceptors: t3.interceptors, signal: n3, timeoutMs: s3, req: { stream: true, service: e3, method: r3, url: (0, y.j)(t3.baseUrl, e3, r3), init: { method: "POST", redirect: "error", mode: "cors" }, header: a(r3.kind, t3.useBinaryFormat, s3, i3, t3.acceptCompression, t3.sendCompression, true), contextValues: null != c2 ? c2 : (0, J.k)(), message: o3 }, next: async (e4) => {
          const n4 = await t3.httpClient({ url: e4.url, method: "POST", header: e4.header, signal: e4.signal, body: (0, _.Fs)(e4.message, (0, _.XO)(d2.getI(t3.useBinaryFormat)), (0, _.fM)(t3.sendCompression, t3.compressMinBytes), (0, _.yQ)(), { propagateDownStreamError: true }) }), { compression: s4 } = m(r3.kind, t3.acceptCompression, t3.useBinaryFormat, n4.status, n4.header), i4 = Object.assign(Object.assign({}, e4), { header: n4.header, trailer: new Headers(), message: (0, _.Fs)(n4.body, (0, _.pY)(t3.readMaxBytes), (0, _.ew)(null != s4 ? s4 : null, t3.readMaxBytes), (0, _.uv)(d2.getO(t3.useBinaryFormat), p.Cu, f2), function(t4) {
            return I(this, arguments, function* () {
              var e5, r4, s5, o4;
              let a2 = false;
              try {
                for (var c3, m2 = true, d3 = B(t4); !(e5 = (c3 = yield E(d3.next())).done); m2 = true) {
                  o4 = c3.value, m2 = false;
                  const t5 = o4;
                  if (t5.end) {
                    if (a2) throw new l.T("protocol error: received extra EndStreamResponse", u.C.InvalidArgument);
                    if (a2 = true, t5.value.error) {
                      const e6 = t5.value.error;
                      throw n4.header.forEach((t6, r5) => {
                        e6.metadata.append(r5, t6);
                      }), e6;
                    }
                    t5.value.metadata.forEach((t6, e6) => i4.trailer.set(e6, t6));
                  } else {
                    if (a2) throw new l.T("protocol error: received extra message after EndStreamResponse", u.C.InvalidArgument);
                    yield yield E(t5.value);
                  }
                }
              } catch (t5) {
                r4 = { error: t5 };
              } finally {
                try {
                  m2 || e5 || !(s5 = d3.return) || (yield E(s5.call(d3)));
                } finally {
                  if (r4) throw r4.error;
                }
              }
              if (!a2) throw new l.T("protocol error: missing EndStreamResponse", u.C.InvalidArgument);
            });
          }, { propagateDownStreamError: true }) });
          return i4;
        } });
      } };
    }
  }