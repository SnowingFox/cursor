// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 41303 range:7650584..7660051
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41303: (e, t, r) => {
    "use strict";
    r.d(t, { o: () => C });
    var n = r(36038), s = r(21187), o = r(6229), i = r(10129);
    function a(e2, t2, r2, a2, c2, l2, u2) {
      const d2 = (function(e3, t3, r3, a3, c3) {
        const l3 = new Headers(null != a3 ? a3 : {});
        return void 0 !== r3 && l3.set(s.hR, `${r3}`), l3.set(s.Z_, e3 == n.MethodKind.Unary ? t3 ? i.Vs : i.Br : t3 ? i.Sg : i.yU), l3.set(s._U, o.Xg), c3 && l3.set(s.qy, "connect-es/1.6.1"), l3;
      })(e2, t2, r2, a2, u2);
      if (null != l2) {
        const t3 = e2 == n.MethodKind.Unary ? s.kq : s.jL;
        d2.set(t3, l2.name);
      }
      if (c2.length > 0) {
        const t3 = e2 == n.MethodKind.Unary ? s.Eu : s.dk;
        d2.set(t3, c2.map((e3) => e3.name).join(","));
      }
      return d2;
    }
    var c = r(8032), l = r(6536), u = r(40328);
    function d(e2, t2, r2, o2, a2) {
      let d2;
      const p2 = a2.get(e2 == n.MethodKind.Unary ? s.kq : s.jL);
      if (null != p2 && "identity" !== p2.toLowerCase() && (d2 = t2.find((e3) => e3.name === p2), !d2)) throw new u.T(`unsupported response encoding "${p2}"`, c.C.Internal, a2);
      return Object.assign({ compression: d2 }, (function(e3, t3, r3, o3) {
        const a3 = o3.get(s.Z_), d3 = (0, i.xk)(a3);
        if (200 !== r3) {
          const t4 = new u.T(`HTTP ${r3}`, (0, l.q)(r3), o3);
          if (e3 == n.MethodKind.Unary && d3 && !d3.binary) return { isUnaryError: true, unaryError: t4 };
          throw t4;
        }
        const p3 = t3, m2 = e3 !== n.MethodKind.Unary;
        if ((null == d3 ? void 0 : d3.binary) !== p3 || d3.stream !== m2) throw new u.T(`unsupported content type ${a3}`, void 0 === d3 ? c.C.Unknown : c.C.Internal, o3);
        return { isUnaryError: false };
      })(e2, r2, o2, a2));
    }
    var p = r(97645), m = r(9726), h = r(30685);
    const f = "application/";
    function g(e2, t2, r2) {
      let i2 = `?connect=v${o.Xg}`;
      const a2 = e2.header.get(s.Z_);
      0 === (null == a2 ? void 0 : a2.indexOf(f)) && (i2 += "&encoding=" + encodeURIComponent(a2.slice(f.length)));
      const c2 = e2.header.get(s.kq);
      null !== c2 && "identity" !== c2 && (i2 += "&compression=" + encodeURIComponent(c2), r2 = true), r2 && (i2 += "&base64=1"), i2 += "&message=" + (function(e3, t3) {
        return t3 ? n.protoBase64.enc(e3).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encodeURIComponent(new TextDecoder().decode(e3));
      })(t2, r2);
      const l2 = e2.url + i2, u2 = new Headers(e2.header);
      return [s._U, s.Z_, s.qs, s.kq, s.Eu].forEach((e3) => u2.delete(e3)), Object.assign(Object.assign({}, e2), { init: Object.assign(Object.assign({}, e2.init), { method: "GET" }), url: l2, header: u2 });
    }
    var y = r(86422), w = r(78205), v = r(67572), _ = r(41304), A = r(40878), S = r(43621), b = function(e2) {
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
    }, E = function(e2) {
      return this instanceof E ? (this.v = e2, this) : new E(e2);
    }, I = function(e2, t2, r2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, s2 = r2.apply(e2, t2 || []), o2 = [];
      return n2 = {}, i2("next"), i2("throw"), i2("return", function(e3) {
        return function(t3) {
          return Promise.resolve(t3).then(e3, l2);
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
          (r3 = s2[e3](t3)).value instanceof E ? Promise.resolve(r3.value.v).then(c2, l2) : u2(o2[0][2], r3);
        } catch (e4) {
          u2(o2[0][3], e4);
        }
        var r3;
      }
      function c2(e3) {
        a2("next", e3);
      }
      function l2(e3) {
        a2("throw", e3);
      }
      function u2(e3, t3) {
        e3(t3), o2.shift(), o2.length && a2(o2[0][0], o2[0][1]);
      }
    };
    function C(e2) {
      return { async unary(t2, r2, o2, i2, c2, l2, u2) {
        const h2 = (0, A.Qg)(r2, e2.binaryOptions, e2.jsonOptions, e2);
        return i2 = void 0 === i2 ? e2.defaultTimeoutMs : i2 <= 0 ? void 0 : i2, await (0, _.L)({ interceptors: e2.interceptors, signal: o2, timeoutMs: i2, req: { stream: false, service: t2, method: r2, url: (0, v.j)(e2.baseUrl, t2, r2), init: {}, header: a(r2.kind, e2.useBinaryFormat, i2, c2, e2.acceptCompression, e2.sendCompression, true), contextValues: null != u2 ? u2 : (0, S.k)(), message: l2 }, next: async (o3) => {
          var i3;
          let a2 = h2.getI(e2.useBinaryFormat).serialize(o3.message);
          e2.sendCompression && a2.byteLength > e2.compressMinBytes ? (a2 = await e2.sendCompression.compress(a2), o3.header.set(s.kq, e2.sendCompression.name)) : o3.header.delete(s.kq);
          let c3;
          true === e2.useHttpGet && r2.idempotency === n.MethodIdempotency.NoSideEffects ? o3 = g(o3, a2, e2.useBinaryFormat) : (c3 = (0, w.T$)([a2]), 0 === a2.length && o3.header.set("Content-Length", "0"));
          const l3 = await e2.httpClient({ url: o3.url, method: null !== (i3 = o3.init.method) && void 0 !== i3 ? i3 : "POST", header: o3.header, signal: o3.signal, body: c3 }), { compression: u3, isUnaryError: f2, unaryError: v2 } = d(r2.kind, e2.acceptCompression, e2.useBinaryFormat, l3.status, l3.header), [_2, A2] = (0, p.z)(l3.header);
          let S2 = await (0, w.WK)(l3.body, (0, w.SM)(e2.readMaxBytes, l3.header.get(s.qs)), { propagateDownStreamError: false });
          if (u3 && (S2 = await u3.decompress(S2, e2.readMaxBytes)), f2) throw (0, m.O1)(S2, (0, y.Pb)(_2, A2), v2);
          return { stream: false, service: t2, method: r2, header: _2, message: h2.getO(e2.useBinaryFormat).parse(S2), trailer: A2 };
        } });
      }, async stream(t2, r2, n2, s2, o2, i2, l2) {
        const p2 = (0, A.Qg)(r2, e2.binaryOptions, e2.jsonOptions, e2), m2 = (0, h.Q8)(e2.jsonOptions);
        return s2 = void 0 === s2 ? e2.defaultTimeoutMs : s2 <= 0 ? void 0 : s2, (0, _.u)({ interceptors: e2.interceptors, signal: n2, timeoutMs: s2, req: { stream: true, service: t2, method: r2, url: (0, v.j)(e2.baseUrl, t2, r2), init: { method: "POST", redirect: "error", mode: "cors" }, header: a(r2.kind, e2.useBinaryFormat, s2, o2, e2.acceptCompression, e2.sendCompression, true), contextValues: null != l2 ? l2 : (0, S.k)(), message: i2 }, next: async (t3) => {
          const n3 = await e2.httpClient({ url: t3.url, method: "POST", header: t3.header, signal: t3.signal, body: (0, w.Fs)(t3.message, (0, w.XO)(p2.getI(e2.useBinaryFormat)), (0, w.fM)(e2.sendCompression, e2.compressMinBytes), (0, w.yQ)(), { propagateDownStreamError: true }) }), { compression: s3 } = d(r2.kind, e2.acceptCompression, e2.useBinaryFormat, n3.status, n3.header), o3 = Object.assign(Object.assign({}, t3), { header: n3.header, trailer: new Headers(), message: (0, w.Fs)(n3.body, (0, w.pY)(e2.readMaxBytes), (0, w.ew)(null != s3 ? s3 : null, e2.readMaxBytes), (0, w.uv)(p2.getO(e2.useBinaryFormat), h.Cu, m2), function(e3) {
            return I(this, arguments, function* () {
              var t4, r3, s4, i3;
              let a2 = false;
              try {
                for (var l3, d2 = true, p3 = b(e3); !(t4 = (l3 = yield E(p3.next())).done); d2 = true) {
                  i3 = l3.value, d2 = false;
                  const e4 = i3;
                  if (e4.end) {
                    if (a2) throw new u.T("protocol error: received extra EndStreamResponse", c.C.InvalidArgument);
                    if (a2 = true, e4.value.error) {
                      const t5 = e4.value.error;
                      throw n3.header.forEach((e5, r4) => {
                        t5.metadata.append(r4, e5);
                      }), t5;
                    }
                    e4.value.metadata.forEach((e5, t5) => o3.trailer.set(t5, e5));
                  } else {
                    if (a2) throw new u.T("protocol error: received extra message after EndStreamResponse", c.C.InvalidArgument);
                    yield yield E(e4.value);
                  }
                }
              } catch (e4) {
                r3 = { error: e4 };
              } finally {
                try {
                  d2 || t4 || !(s4 = p3.return) || (yield E(s4.call(p3)));
                } finally {
                  if (r3) throw r3.error;
                }
              }
              if (!a2) throw new u.T("protocol error: missing EndStreamResponse", c.C.InvalidArgument);
            });
          }, { propagateDownStreamError: true }) });
          return o3;
        } });
      } };
    }
  }