// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 81992 range:11839502..11853776
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81992: (e, t, r) => {
    "use strict";
    r.d(t, { k: () => U });
    var n = r(40328), s = r(8032), o = r(971), i = r(6657), a = r(6551), c = r(43524);
    function l(e2, t2) {
      if (null === e2) return {};
      const r2 = /^(\d{1,8})([HMSmun])$/.exec(e2);
      if (null === r2) return { error: new n.T(`protocol error: invalid grpc timeout value: ${e2}`, s.C.InvalidArgument) };
      const o2 = { H: 36e5, M: 6e4, S: 1e3, m: 1, u: 1e-3, n: 1e-6 }[r2[2]] * parseInt(r2[1]);
      return o2 > t2 ? { timeoutMs: o2, error: new n.T(`timeout ${o2}ms must be <= ${t2}`, s.C.InvalidArgument) } : { timeoutMs: o2 };
    }
    var u = r(81190), d = r(78205), p = r(13352), m = r(96367), h = r(67572), f = r(50719), g = r(40878), y = r(28926), w = r(22083);
    const v = "grpc-web", _ = "POST";
    function A(e2) {
      const t2 = (0, y.sO)(e2), r2 = (0, i.A7)();
      function A2(e3) {
        const y2 = (function(e4, t3, r3) {
          const m2 = (0, g.Qg)(r3.method, e4.binaryOptions, e4.jsonOptions, e4);
          return async function(h2) {
            (0, w.s4)(h2);
            const g2 = (0, c.xk)(h2.header.get(a.Z_));
            if (null == g2 || g2.text) return w._L;
            if (h2.method !== _) return w.nZ;
            const y3 = l(h2.header.get(a.hR), e4.maxTimeoutMs), A3 = (0, o.OD)(Object.assign(Object.assign({}, r3), { requestMethod: h2.method, protocolName: v, timeoutMs: y3.timeoutMs, shutdownSignal: e4.shutdownSignal, requestSignal: h2.signal, requestHeader: h2.header, url: h2.url, responseHeader: { [a.Z_]: g2.binary ? c.y : c.q2 }, responseTrailer: { [a.OJ]: u.P$ }, contextValues: h2.contextValues })), S2 = (0, p.B)(e4.acceptCompression, h2.header.get(a.LB), h2.header.get(a.JA), a.JA);
            S2.response && A3.responseHeader.set(a.LB, S2.response.name);
            const b2 = (0, d.Fs)(h2.body, (0, d.p_)(() => {
              if (S2.error) throw S2.error;
              if (y3.error) throw y3.error;
            }), (0, d.pY)(e4.readMaxBytes), (0, d.ew)(S2.request, e4.readMaxBytes), (0, d.uv)(m2.getI(g2.binary), i.oK)), E2 = (0, f.H)(r3, A3, e4.interceptors)(b2)[Symbol.asyncIterator](), I2 = (0, d.Fs)({ [Symbol.asyncIterator]: () => ({ next: () => E2.next(), throw: (e5) => {
              var t4, r4;
              return A3.abort(e5), null !== (r4 = null === (t4 = E2.throw) || void 0 === t4 ? void 0 : t4.call(E2, e5)) && void 0 !== r4 ? r4 : Promise.reject({ done: true });
            }, return: (e5) => {
              var t4, r4;
              return A3.abort(), null !== (r4 = null === (t4 = E2.return) || void 0 === t4 ? void 0 : t4.call(E2, e5)) && void 0 !== r4 ? r4 : Promise.resolve({ done: true, value: e5 });
            } }) }, (0, d.XO)(m2.getO(g2.binary)), (0, d.du)((e5) => (A3.abort(), e5 instanceof n.T ? (0, u.uW)(A3.responseTrailer, e5) : void 0 !== e5 && (0, u.uW)(A3.responseTrailer, new n.T("internal error", s.C.Internal, void 0, void 0, e5)), { flags: i.oK, data: t3.serialize(A3.responseTrailer) })), (0, d.fM)(S2.response, e4.compressMinBytes), (0, d.yQ)(), { propagateDownStreamError: true });
            return Object.assign(Object.assign({}, w.rJ), { body: await (0, d.zm)(I2), header: A3.responseHeader });
          };
        })(t2, r2, e3);
        return Object.assign(y2, { protocolNames: [v], allowedMethods: [_], supportedContentType: (0, m.Y)(c.Bp), requestPath: (0, h.j)("/", e3.service, e3.method), service: e3.service, method: e3.method });
      }
      return A2.protocolName = v, A2;
    }
    var S = r(6125);
    const b = "grpc", E = "POST";
    function I(e2) {
      const t2 = (0, y.sO)(e2);
      function r2(e3) {
        const r3 = (function(e4, t3) {
          const r4 = (0, g.Qg)(t3.method, e4.binaryOptions, e4.jsonOptions, e4);
          return async function(i2) {
            (0, w.s4)(i2);
            const c2 = (0, S.xk)(i2.header.get(a.Z_));
            if (null == c2) return w._L;
            if (i2.method !== E) return w.nZ;
            const m2 = l(i2.header.get(a.hR), e4.maxTimeoutMs), h2 = (0, o.OD)(Object.assign(Object.assign({}, t3), { requestMethod: i2.method, protocolName: b, timeoutMs: m2.timeoutMs, shutdownSignal: e4.shutdownSignal, requestSignal: i2.signal, requestHeader: i2.header, url: i2.url, responseHeader: { [a.Z_]: c2.binary ? S.y : S.q2 }, responseTrailer: { [a.OJ]: u.P$ }, contextValues: i2.contextValues })), g2 = (0, p.B)(e4.acceptCompression, i2.header.get(a.LB), i2.header.get(a.JA), a.JA);
            g2.response && h2.responseHeader.set(a.LB, g2.response.name);
            const y2 = (0, d.Fs)(i2.body, (0, d.p_)(() => {
              if (g2.error) throw g2.error;
              if (m2.error) throw m2.error;
            }), (0, d.pY)(e4.readMaxBytes), (0, d.ew)(g2.request, e4.readMaxBytes), (0, d.uv)(r4.getI(c2.binary))), v2 = (0, f.H)(t3, h2, e4.interceptors)(y2)[Symbol.asyncIterator](), _2 = (0, d.Fs)({ [Symbol.asyncIterator]: () => ({ next: () => v2.next(), throw: (e5) => {
              var t4, r5;
              return h2.abort(e5), null !== (r5 = null === (t4 = v2.throw) || void 0 === t4 ? void 0 : t4.call(v2, e5)) && void 0 !== r5 ? r5 : Promise.reject({ done: true });
            }, return: (e5) => {
              var t4, r5;
              return h2.abort(), null !== (r5 = null === (t4 = v2.return) || void 0 === t4 ? void 0 : t4.call(v2, e5)) && void 0 !== r5 ? r5 : Promise.resolve({ done: true, value: e5 });
            } }) }, (0, d.XO)(r4.getO(c2.binary)), (0, d.fM)(g2.response, e4.compressMinBytes), (0, d.yQ)(), (0, d.du)((e5) => {
              h2.abort(), e5 instanceof n.T ? (0, u.uW)(h2.responseTrailer, e5) : void 0 !== e5 && (0, u.uW)(h2.responseTrailer, new n.T("internal error", s.C.Internal, void 0, void 0, e5));
            }), { propagateDownStreamError: true });
            return Object.assign(Object.assign({}, w.rJ), { body: await (0, d.zm)(_2), header: h2.responseHeader, trailer: h2.responseTrailer });
          };
        })(t2, e3);
        return Object.assign(r3, { protocolNames: [b], allowedMethods: [E], supportedContentType: (0, m.Y)(S.Bp), requestPath: (0, h.j)("/", e3.service, e3.method), service: e3.service, method: e3.method });
      }
      return r2.protocolName = b, r2;
    }
    var C = r(36038), k = r(10129), x = r(30685), T = r(9726), R = r(21187), B = r(6536);
    function P(e2, t2) {
      if (null === e2) return {};
      const r2 = /^\d{1,10}$/.exec(e2);
      if (null === r2) return { error: new n.T(`protocol error: invalid connect timeout value: ${e2}`, s.C.InvalidArgument) };
      const o2 = parseInt(r2[0]);
      return o2 > t2 ? { timeoutMs: o2, error: new n.T(`timeout ${o2}ms must be <= ${t2}`, s.C.InvalidArgument) } : { timeoutMs: parseInt(r2[0]) };
    }
    var J = r(20216), M = r(97645), q = r(6229);
    const D = "connect", O = "POST", N = "GET";
    function F(e2) {
      const t2 = (0, y.sO)(e2), r2 = (0, x.Q8)(t2.jsonOptions);
      function i2(e3) {
        let i3, a2;
        const c2 = (0, g.Qg)(e3.method, t2.binaryOptions, t2.jsonOptions, t2);
        if (e3.kind === C.MethodKind.Unary) a2 = k.aq, i3 = /* @__PURE__ */ (function(e4, t3, r3) {
          return async function(i4) {
            const a3 = i4.method == N;
            if (a3 && t3.method.idempotency != C.MethodIdempotency.NoSideEffects) return w.nZ;
            const c3 = new URL(i4.url).searchParams, l3 = a3 ? c3.get(J.I7) : i4.header.get(R.kq), u2 = a3 ? (0, k.lZ)(c3.get(J.Bv)) : (0, k.xk)(i4.header.get(R.Z_));
            if (null == u2 || u2.stream) return w._L;
            const m2 = P(i4.header.get(R.hR), e4.maxTimeoutMs), h2 = (0, o.OD)(Object.assign(Object.assign({}, t3), { requestMethod: i4.method, protocolName: D, timeoutMs: m2.timeoutMs, shutdownSignal: e4.shutdownSignal, requestSignal: i4.signal, requestHeader: i4.header, url: i4.url, responseHeader: { [R.Z_]: u2.binary ? k.Vs : k.Br }, contextValues: i4.contextValues })), g2 = (0, p.B)(e4.acceptCompression, l3, i4.header.get(R.Eu), R.Eu);
            let y2, v2 = w.rJ.status;
            try {
              if (e4.requireConnectProtocolHeader && (a3 ? (0, q.hi)(c3) : (0, q.B)(i4.header)), g2.error) throw g2.error;
              if (m2.error) throw m2.error;
              let o2;
              o2 = a3 ? await (async function(e5, t4, r4) {
                var n2;
                const s2 = r4.get(J.P1), o3 = null !== (n2 = r4.get(J.J8)) && void 0 !== n2 ? n2 : "";
                let i5;
                i5 = "1" === s2 ? C.protoBase64.dec(o3) : new TextEncoder().encode(o3);
                t4 && (i5 = await t4.decompress(i5, e5));
                return i5;
              })(e4.readMaxBytes, g2.request, c3) : await (async function(e5, t4, r4) {
                if ("object" == typeof r4.body && null !== r4.body && Symbol.asyncIterator in r4.body) {
                  let n2 = await (0, d.Xw)(r4.body, e5, r4.header.get(R.qs));
                  return t4 && (n2 = await t4.decompress(n2, e5)), n2;
                }
                return r4.body;
              })(e4.readMaxBytes, g2.request, i4);
              const l4 = (function(e5, t4, r4, o3) {
                if (o3 instanceof Uint8Array) return r4.getI(t4).parse(o3);
                if (t4) throw new n.T("received parsed JSON request body, but content-type indicates binary format", s.C.Internal);
                try {
                  return e5.I.fromJson(o3);
                } catch (e6) {
                  throw n.T.from(e6, s.C.InvalidArgument);
                }
              })(t3.method, u2.binary, r3, o2), p2 = await (0, f.s)(t3, h2, l4, e4.interceptors);
              y2 = r3.getO(u2.binary).serialize(p2);
            } catch (t4) {
              let r4;
              r4 = t4 instanceof n.T ? t4 : new n.T("internal error", s.C.Internal, void 0, void 0, t4), v2 = (0, B.r)(r4.code), h2.responseHeader.set(R.Z_, k.Br), r4.metadata.forEach((e5, t5) => {
                h2.responseHeader.set(t5, e5);
              }), y2 = (0, T.Bm)(r4, e4.jsonOptions);
            } finally {
              h2.abort();
            }
            g2.response && y2.byteLength >= e4.compressMinBytes && (y2 = await g2.response.compress(y2), h2.responseHeader.set(R.kq, g2.response.name));
            const _2 = (0, M.E)(h2.responseHeader, h2.responseTrailer);
            return _2.set(R.qs, y2.byteLength.toString(10)), { status: v2, body: (0, d.T$)([y2]), header: _2 };
          };
        })(t2, e3, c2);
        else a2 = k.jE, i3 = /* @__PURE__ */ (function(e4, t3, r3, i4) {
          return async function(a3) {
            (0, w.s4)(a3);
            const c3 = (0, k.xk)(a3.header.get(R.Z_));
            if (null == c3 || !c3.stream) return w._L;
            if (a3.method !== O) return w.nZ;
            const l3 = P(a3.header.get(R.hR), e4.maxTimeoutMs), u2 = (0, o.OD)(Object.assign(Object.assign({}, t3), { requestMethod: a3.method, protocolName: D, timeoutMs: l3.timeoutMs, shutdownSignal: e4.shutdownSignal, requestSignal: a3.signal, requestHeader: a3.header, url: a3.url, responseHeader: { [R.Z_]: c3.binary ? k.Sg : k.yU }, contextValues: a3.contextValues })), m2 = (0, p.B)(e4.acceptCompression, a3.header.get(R.jL), a3.header.get(R.dk), R.dk);
            m2.response && u2.responseHeader.set(R.jL, m2.response.name);
            const h2 = (0, d.Fs)(a3.body, (0, d.p_)(() => {
              if (e4.requireConnectProtocolHeader && (0, q.B)(a3.header), m2.error) throw m2.error;
              if (l3.error) throw l3.error;
            }), (0, d.pY)(e4.readMaxBytes), (0, d.ew)(m2.request, e4.readMaxBytes), (0, d.uv)(r3.getI(c3.binary), x.Cu)), g2 = (0, f.H)(t3, u2, e4.interceptors)(h2)[Symbol.asyncIterator](), y2 = (0, d.Fs)({ [Symbol.asyncIterator]: () => ({ next: () => g2.next(), throw: (e5) => {
              var t4, r4;
              return u2.abort(e5), null !== (r4 = null === (t4 = g2.throw) || void 0 === t4 ? void 0 : t4.call(g2, e5)) && void 0 !== r4 ? r4 : Promise.reject({ done: true });
            }, return: (e5) => {
              var t4, r4;
              return u2.abort(), null !== (r4 = null === (t4 = g2.return) || void 0 === t4 ? void 0 : t4.call(g2, e5)) && void 0 !== r4 ? r4 : Promise.resolve({ done: true, value: e5 });
            } }) }, (0, d.XO)(r3.getO(c3.binary)), (0, d.du)((e5) => {
              u2.abort();
              const t4 = { metadata: u2.responseTrailer };
              return e5 instanceof n.T ? t4.error = e5 : void 0 !== e5 && (t4.error = new n.T("internal error", s.C.Internal, void 0, void 0, e5)), { flags: x.Cu, data: i4.serialize(t4) };
            }), (0, d.fM)(m2.response, e4.compressMinBytes), (0, d.yQ)(), { propagateDownStreamError: true });
            return Object.assign(Object.assign({}, w.rJ), { body: await (0, d.zm)(y2), header: u2.responseHeader });
          };
        })(t2, e3, c2, r2);
        const l2 = [O];
        return e3.method.idempotency === C.MethodIdempotency.NoSideEffects && l2.push(N), Object.assign(i3, { protocolNames: [D], supportedContentType: (0, m.Y)(a2), allowedMethods: l2, requestPath: (0, h.j)("/", e3.service, e3.method), service: e3.service, method: e3.method });
      }
      return i2.protocolName = D, i2;
    }
    function U(e2) {
      const t2 = L(e2), r2 = [];
      return { handlers: r2, service(e3, n2, s2) {
        const { protocols: i2 } = L(s2, t2);
        return r2.push(...(0, y.SW)((0, o.bz)(e3, n2), i2)), this;
      }, rpc(e3, n2, s2, i2) {
        let a2, c2, l2, u2;
        "typeName" in e3 ? (a2 = e3, c2 = n2, l2 = s2, u2 = i2) : (a2 = Object.assign(Object.assign({}, e3.service), { methods: {} }), c2 = e3, l2 = n2, u2 = s2);
        const { protocols: d2 } = L(u2, t2);
        return r2.push((0, y.JC)((0, o.B8)(a2, c2, l2), d2)), this;
      } };
    }
    function L(e2, t2) {
      if (t2 && !e2) return t2;
      const r2 = t2 ? Object.assign(Object.assign({}, (0, y.sO)(t2.options)), e2) : Object.assign(Object.assign({}, e2), (0, y.sO)(null != e2 ? e2 : {})), o2 = [];
      if (false !== (null == e2 ? void 0 : e2.grpc) && o2.push(I(r2)), false !== (null == e2 ? void 0 : e2.grpcWeb) && o2.push(A(r2)), false !== (null == e2 ? void 0 : e2.connect) && o2.push(F(r2)), 0 === o2.length) throw new n.T("cannot create handler, all protocols are disabled", s.C.InvalidArgument);
      return { options: r2, protocols: o2 };
    }
  }