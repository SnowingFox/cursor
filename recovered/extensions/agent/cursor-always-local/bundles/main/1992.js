// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1992 range:647401..661720
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1992: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { k: () => O });
    var n2 = r2(328), s2 = r2(8032), i2 = r2(971), o2 = r2(6657), a = r2(6551), u = r2(3524);
    function c(t3, e3) {
      if (null === t3) return {};
      const r3 = /^(\d{1,8})([HMSmun])$/.exec(t3);
      if (null === r3) return { error: new n2.T(`protocol error: invalid grpc timeout value: ${t3}`, s2.C.InvalidArgument) };
      const i3 = { H: 36e5, M: 6e4, S: 1e3, m: 1, u: 1e-3, n: 1e-6 }[r3[2]] * parseInt(r3[1]);
      return i3 > e3 ? { timeoutMs: i3, error: new n2.T(`timeout ${i3}ms must be <= ${e3}`, s2.C.InvalidArgument) } : { timeoutMs: i3 };
    }
    var l = r2(1190), m = r2(8205), d = r2(3352), f = r2(6367), p = r2(7572), h = r2(719), g = r2(878), A = r2(8926), _ = r2(2083);
    const y = "grpc-web", w = "POST";
    function S(t3) {
      const e3 = (0, A.sO)(t3), r3 = (0, o2.A7)();
      function S2(t4) {
        const A2 = (function(t5, e4, r4) {
          const f2 = (0, g.Qg)(r4.method, t5.binaryOptions, t5.jsonOptions, t5);
          return async function(p2) {
            (0, _.s4)(p2);
            const g2 = (0, u.xk)(p2.header.get(a.Z_));
            if (null == g2 || g2.text) return _._L;
            if (p2.method !== w) return _.nZ;
            const A3 = c(p2.header.get(a.hR), t5.maxTimeoutMs), S3 = (0, i2.OD)(Object.assign(Object.assign({}, r4), { requestMethod: p2.method, protocolName: y, timeoutMs: A3.timeoutMs, shutdownSignal: t5.shutdownSignal, requestSignal: p2.signal, requestHeader: p2.header, url: p2.url, responseHeader: { [a.Z_]: g2.binary ? u.y : u.q2 }, responseTrailer: { [a.OJ]: l.P$ }, contextValues: p2.contextValues })), J2 = (0, d.B)(t5.acceptCompression, p2.header.get(a.LB), p2.header.get(a.JA), a.JA);
            J2.response && S3.responseHeader.set(a.LB, J2.response.name);
            const B2 = (0, m.Fs)(p2.body, (0, m.p_)(() => {
              if (J2.error) throw J2.error;
              if (A3.error) throw A3.error;
            }), (0, m.pY)(t5.readMaxBytes), (0, m.ew)(J2.request, t5.readMaxBytes), (0, m.uv)(f2.getI(g2.binary), o2.oK)), E2 = (0, h.H)(r4, S3, t5.interceptors)(B2)[Symbol.asyncIterator](), I2 = (0, m.Fs)({ [Symbol.asyncIterator]: () => ({ next: () => E2.next(), throw: (t6) => {
              var e5, r5;
              return S3.abort(t6), null !== (r5 = null === (e5 = E2.throw) || void 0 === e5 ? void 0 : e5.call(E2, t6)) && void 0 !== r5 ? r5 : Promise.reject({ done: true });
            }, return: (t6) => {
              var e5, r5;
              return S3.abort(), null !== (r5 = null === (e5 = E2.return) || void 0 === e5 ? void 0 : e5.call(E2, t6)) && void 0 !== r5 ? r5 : Promise.resolve({ done: true, value: t6 });
            } }) }, (0, m.XO)(f2.getO(g2.binary)), (0, m.du)((t6) => (S3.abort(), t6 instanceof n2.T ? (0, l.uW)(S3.responseTrailer, t6) : void 0 !== t6 && (0, l.uW)(S3.responseTrailer, new n2.T("internal error", s2.C.Internal, void 0, void 0, t6)), { flags: o2.oK, data: e4.serialize(S3.responseTrailer) })), (0, m.fM)(J2.response, t5.compressMinBytes), (0, m.yQ)(), { propagateDownStreamError: true });
            return Object.assign(Object.assign({}, _.rJ), { body: await (0, m.zm)(I2), header: S3.responseHeader });
          };
        })(e3, r3, t4);
        return Object.assign(A2, { protocolNames: [y], allowedMethods: [w], supportedContentType: (0, f.Y)(u.Bp), requestPath: (0, p.j)("/", t4.service, t4.method), service: t4.service, method: t4.method });
      }
      return S2.protocolName = y, S2;
    }
    var J = r2(6125);
    const B = "grpc", E = "POST";
    function I(t3) {
      const e3 = (0, A.sO)(t3);
      function r3(t4) {
        const r4 = (function(t5, e4) {
          const r5 = (0, g.Qg)(e4.method, t5.binaryOptions, t5.jsonOptions, t5);
          return async function(o3) {
            (0, _.s4)(o3);
            const u2 = (0, J.xk)(o3.header.get(a.Z_));
            if (null == u2) return _._L;
            if (o3.method !== E) return _.nZ;
            const f2 = c(o3.header.get(a.hR), t5.maxTimeoutMs), p2 = (0, i2.OD)(Object.assign(Object.assign({}, e4), { requestMethod: o3.method, protocolName: B, timeoutMs: f2.timeoutMs, shutdownSignal: t5.shutdownSignal, requestSignal: o3.signal, requestHeader: o3.header, url: o3.url, responseHeader: { [a.Z_]: u2.binary ? J.y : J.q2 }, responseTrailer: { [a.OJ]: l.P$ }, contextValues: o3.contextValues })), g2 = (0, d.B)(t5.acceptCompression, o3.header.get(a.LB), o3.header.get(a.JA), a.JA);
            g2.response && p2.responseHeader.set(a.LB, g2.response.name);
            const A2 = (0, m.Fs)(o3.body, (0, m.p_)(() => {
              if (g2.error) throw g2.error;
              if (f2.error) throw f2.error;
            }), (0, m.pY)(t5.readMaxBytes), (0, m.ew)(g2.request, t5.readMaxBytes), (0, m.uv)(r5.getI(u2.binary))), y2 = (0, h.H)(e4, p2, t5.interceptors)(A2)[Symbol.asyncIterator](), w2 = (0, m.Fs)({ [Symbol.asyncIterator]: () => ({ next: () => y2.next(), throw: (t6) => {
              var e5, r6;
              return p2.abort(t6), null !== (r6 = null === (e5 = y2.throw) || void 0 === e5 ? void 0 : e5.call(y2, t6)) && void 0 !== r6 ? r6 : Promise.reject({ done: true });
            }, return: (t6) => {
              var e5, r6;
              return p2.abort(), null !== (r6 = null === (e5 = y2.return) || void 0 === e5 ? void 0 : e5.call(y2, t6)) && void 0 !== r6 ? r6 : Promise.resolve({ done: true, value: t6 });
            } }) }, (0, m.XO)(r5.getO(u2.binary)), (0, m.fM)(g2.response, t5.compressMinBytes), (0, m.yQ)(), (0, m.du)((t6) => {
              p2.abort(), t6 instanceof n2.T ? (0, l.uW)(p2.responseTrailer, t6) : void 0 !== t6 && (0, l.uW)(p2.responseTrailer, new n2.T("internal error", s2.C.Internal, void 0, void 0, t6));
            }), { propagateDownStreamError: true });
            return Object.assign(Object.assign({}, _.rJ), { body: await (0, m.zm)(w2), header: p2.responseHeader, trailer: p2.responseTrailer });
          };
        })(e3, t4);
        return Object.assign(r4, { protocolNames: [B], allowedMethods: [E], supportedContentType: (0, f.Y)(J.Bp), requestPath: (0, p.j)("/", t4.service, t4.method), service: t4.service, method: t4.method });
      }
      return r3.protocolName = B, r3;
    }
    var C = r2(6038), b = r2(129), k = r2(685), v = r2(9726), q = r2(1187), R = r2(6536);
    function P(t3, e3) {
      if (null === t3) return {};
      const r3 = /^\d{1,10}$/.exec(t3);
      if (null === r3) return { error: new n2.T(`protocol error: invalid connect timeout value: ${t3}`, s2.C.InvalidArgument) };
      const i3 = parseInt(r3[0]);
      return i3 > e3 ? { timeoutMs: i3, error: new n2.T(`timeout ${i3}ms must be <= ${e3}`, s2.C.InvalidArgument) } : { timeoutMs: parseInt(r3[0]) };
    }
    var T = r2(216), x = r2(7645), N = r2(6229);
    const D = "connect", U = "POST", Q = "GET";
    function M(t3) {
      const e3 = (0, A.sO)(t3), r3 = (0, k.Q8)(e3.jsonOptions);
      function o3(t4) {
        let o4, a2;
        const u2 = (0, g.Qg)(t4.method, e3.binaryOptions, e3.jsonOptions, e3);
        if (t4.kind === C.MethodKind.Unary) a2 = b.aq, o4 = /* @__PURE__ */ (function(t5, e4, r4) {
          return async function(o5) {
            const a3 = o5.method == Q;
            if (a3 && e4.method.idempotency != C.MethodIdempotency.NoSideEffects) return _.nZ;
            const u3 = new URL(o5.url).searchParams, c3 = a3 ? u3.get(T.I7) : o5.header.get(q.kq), l2 = a3 ? (0, b.lZ)(u3.get(T.Bv)) : (0, b.xk)(o5.header.get(q.Z_));
            if (null == l2 || l2.stream) return _._L;
            const f2 = P(o5.header.get(q.hR), t5.maxTimeoutMs), p2 = (0, i2.OD)(Object.assign(Object.assign({}, e4), { requestMethod: o5.method, protocolName: D, timeoutMs: f2.timeoutMs, shutdownSignal: t5.shutdownSignal, requestSignal: o5.signal, requestHeader: o5.header, url: o5.url, responseHeader: { [q.Z_]: l2.binary ? b.Vs : b.Br }, contextValues: o5.contextValues })), g2 = (0, d.B)(t5.acceptCompression, c3, o5.header.get(q.Eu), q.Eu);
            let A2, y2 = _.rJ.status;
            try {
              if (t5.requireConnectProtocolHeader && (a3 ? (0, N.hi)(u3) : (0, N.B)(o5.header)), g2.error) throw g2.error;
              if (f2.error) throw f2.error;
              let i3;
              i3 = a3 ? await (async function(t6, e5, r5) {
                var n3;
                const s3 = r5.get(T.P1), i4 = null !== (n3 = r5.get(T.J8)) && void 0 !== n3 ? n3 : "";
                let o6;
                o6 = "1" === s3 ? C.protoBase64.dec(i4) : new TextEncoder().encode(i4);
                e5 && (o6 = await e5.decompress(o6, t6));
                return o6;
              })(t5.readMaxBytes, g2.request, u3) : await (async function(t6, e5, r5) {
                if ("object" == typeof r5.body && null !== r5.body && Symbol.asyncIterator in r5.body) {
                  let n3 = await (0, m.Xw)(r5.body, t6, r5.header.get(q.qs));
                  return e5 && (n3 = await e5.decompress(n3, t6)), n3;
                }
                return r5.body;
              })(t5.readMaxBytes, g2.request, o5);
              const c4 = (function(t6, e5, r5, i4) {
                if (i4 instanceof Uint8Array) return r5.getI(e5).parse(i4);
                if (e5) throw new n2.T("received parsed JSON request body, but content-type indicates binary format", s2.C.Internal);
                try {
                  return t6.I.fromJson(i4);
                } catch (t7) {
                  throw n2.T.from(t7, s2.C.InvalidArgument);
                }
              })(e4.method, l2.binary, r4, i3), d2 = await (0, h.s)(e4, p2, c4, t5.interceptors);
              A2 = r4.getO(l2.binary).serialize(d2);
            } catch (e5) {
              let r5;
              r5 = e5 instanceof n2.T ? e5 : new n2.T("internal error", s2.C.Internal, void 0, void 0, e5), y2 = (0, R.r)(r5.code), p2.responseHeader.set(q.Z_, b.Br), r5.metadata.forEach((t6, e6) => {
                p2.responseHeader.set(e6, t6);
              }), A2 = (0, v.Bm)(r5, t5.jsonOptions);
            } finally {
              p2.abort();
            }
            g2.response && A2.byteLength >= t5.compressMinBytes && (A2 = await g2.response.compress(A2), p2.responseHeader.set(q.kq, g2.response.name));
            const w2 = (0, x.E)(p2.responseHeader, p2.responseTrailer);
            return w2.set(q.qs, A2.byteLength.toString(10)), { status: y2, body: (0, m.T$)([A2]), header: w2 };
          };
        })(e3, t4, u2);
        else a2 = b.jE, o4 = /* @__PURE__ */ (function(t5, e4, r4, o5) {
          return async function(a3) {
            (0, _.s4)(a3);
            const u3 = (0, b.xk)(a3.header.get(q.Z_));
            if (null == u3 || !u3.stream) return _._L;
            if (a3.method !== U) return _.nZ;
            const c3 = P(a3.header.get(q.hR), t5.maxTimeoutMs), l2 = (0, i2.OD)(Object.assign(Object.assign({}, e4), { requestMethod: a3.method, protocolName: D, timeoutMs: c3.timeoutMs, shutdownSignal: t5.shutdownSignal, requestSignal: a3.signal, requestHeader: a3.header, url: a3.url, responseHeader: { [q.Z_]: u3.binary ? b.Sg : b.yU }, contextValues: a3.contextValues })), f2 = (0, d.B)(t5.acceptCompression, a3.header.get(q.jL), a3.header.get(q.dk), q.dk);
            f2.response && l2.responseHeader.set(q.jL, f2.response.name);
            const p2 = (0, m.Fs)(a3.body, (0, m.p_)(() => {
              if (t5.requireConnectProtocolHeader && (0, N.B)(a3.header), f2.error) throw f2.error;
              if (c3.error) throw c3.error;
            }), (0, m.pY)(t5.readMaxBytes), (0, m.ew)(f2.request, t5.readMaxBytes), (0, m.uv)(r4.getI(u3.binary), k.Cu)), g2 = (0, h.H)(e4, l2, t5.interceptors)(p2)[Symbol.asyncIterator](), A2 = (0, m.Fs)({ [Symbol.asyncIterator]: () => ({ next: () => g2.next(), throw: (t6) => {
              var e5, r5;
              return l2.abort(t6), null !== (r5 = null === (e5 = g2.throw) || void 0 === e5 ? void 0 : e5.call(g2, t6)) && void 0 !== r5 ? r5 : Promise.reject({ done: true });
            }, return: (t6) => {
              var e5, r5;
              return l2.abort(), null !== (r5 = null === (e5 = g2.return) || void 0 === e5 ? void 0 : e5.call(g2, t6)) && void 0 !== r5 ? r5 : Promise.resolve({ done: true, value: t6 });
            } }) }, (0, m.XO)(r4.getO(u3.binary)), (0, m.du)((t6) => {
              l2.abort();
              const e5 = { metadata: l2.responseTrailer };
              return t6 instanceof n2.T ? e5.error = t6 : void 0 !== t6 && (e5.error = new n2.T("internal error", s2.C.Internal, void 0, void 0, t6)), { flags: k.Cu, data: o5.serialize(e5) };
            }), (0, m.fM)(f2.response, t5.compressMinBytes), (0, m.yQ)(), { propagateDownStreamError: true });
            return Object.assign(Object.assign({}, _.rJ), { body: await (0, m.zm)(A2), header: l2.responseHeader });
          };
        })(e3, t4, u2, r3);
        const c2 = [U];
        return t4.method.idempotency === C.MethodIdempotency.NoSideEffects && c2.push(Q), Object.assign(o4, { protocolNames: [D], supportedContentType: (0, f.Y)(a2), allowedMethods: c2, requestPath: (0, p.j)("/", t4.service, t4.method), service: t4.service, method: t4.method });
      }
      return o3.protocolName = D, o3;
    }
    function O(t3) {
      const e3 = F(t3), r3 = [];
      return { handlers: r3, service(t4, n3, s3) {
        const { protocols: o3 } = F(s3, e3);
        return r3.push(...(0, A.SW)((0, i2.bz)(t4, n3), o3)), this;
      }, rpc(t4, n3, s3, o3) {
        let a2, u2, c2, l2;
        "typeName" in t4 ? (a2 = t4, u2 = n3, c2 = s3, l2 = o3) : (a2 = Object.assign(Object.assign({}, t4.service), { methods: {} }), u2 = t4, c2 = n3, l2 = s3);
        const { protocols: m2 } = F(l2, e3);
        return r3.push((0, A.JC)((0, i2.B8)(a2, u2, c2), m2)), this;
      } };
    }
    function F(t3, e3) {
      if (e3 && !t3) return e3;
      const r3 = e3 ? Object.assign(Object.assign({}, (0, A.sO)(e3.options)), t3) : Object.assign(Object.assign({}, t3), (0, A.sO)(null != t3 ? t3 : {})), i3 = [];
      if (false !== (null == t3 ? void 0 : t3.grpc) && i3.push(I(r3)), false !== (null == t3 ? void 0 : t3.grpcWeb) && i3.push(S(r3)), false !== (null == t3 ? void 0 : t3.connect) && i3.push(M(r3)), 0 === i3.length) throw new n2.T("cannot create handler, all protocols are disabled", s2.C.InvalidArgument);
      return { options: r3, protocols: i3 };
    }
  }