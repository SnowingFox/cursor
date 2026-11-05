// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 63231 range:363887..373544
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
63231: (A, e, t) => {
  "use strict";
  const r = t(56970), { pipeline: s } = t(57075), o = t(55201), { RequestContentLengthMismatchError: n, RequestAbortedError: i, SocketError: a, InformationalError: Q } = t(38238), { kUrl: g, kReset: E, kClient: B, kRunning: c, kPending: I, kQueue: C, kPendingIdx: h, kRunningIdx: l, kError: u, kSocket: d, kStrictContentLength: f, kOnError: w, kMaxConcurrentStreams: y, kHTTP2Session: D, kResume: p, kSize: k, kHTTPContext: R } = t(76992), F = /* @__PURE__ */ Symbol("open streams");
  let m, b, N = false;
  try {
    b = t(32467);
  } catch {
    b = { constants: {} };
  }
  const { constants: { HTTP2_HEADER_AUTHORITY: S, HTTP2_HEADER_METHOD: M, HTTP2_HEADER_PATH: U, HTTP2_HEADER_SCHEME: L, HTTP2_HEADER_CONTENT_LENGTH: T, HTTP2_HEADER_EXPECT: Y, HTTP2_HEADER_STATUS: G } } = b;
  function J(A2) {
    r("ERR_TLS_CERT_ALTNAME_INVALID" !== A2.code), this[d][u] = A2, this[B][w](A2);
  }
  function v(A2, e2, t2) {
    if (0 === t2) {
      const t3 = new Q(`HTTP/2: "frameError" received - type ${A2}, code ${e2}`);
      this[d][u] = t3, this[B][w](t3);
    }
  }
  function H() {
    const A2 = new a("other side closed", o.getSocketInfo(this[d]));
    this.destroy(A2), o.destroy(this[d], A2);
  }
  function V(A2) {
    const e2 = this[u] || new a(`HTTP/2: "GOAWAY" frame received with code ${A2}`, o.getSocketInfo(this)), t2 = this[B];
    if (t2[d] = null, t2[R] = null, null != this[D] && (this[D].destroy(e2), this[D] = null), o.destroy(this[d], e2), t2[l] < t2[C].length) {
      const A3 = t2[C][t2[l]];
      t2[C][t2[l]++] = null, o.errorRequest(t2, A3, e2), t2[h] = t2[l];
    }
    r(0 === t2[c]), t2.emit("disconnect", t2[g], [t2], e2), t2[p]();
  }
  function x(A2, e2, t2, s2, n2, i2, a2, Q2) {
    try {
      null != t2 && o.isBuffer(t2) && (r(a2 === t2.byteLength, "buffer body must have content length"), e2.cork(), e2.write(t2), e2.uncork(), e2.end(), n2.onBodySent(t2)), Q2 || (i2[E] = true), n2.onRequestSent(), s2[p]();
    } catch (e3) {
      A2(e3);
    }
  }
  async function W(A2, e2, t2, s2, o2, n2, i2, a2) {
    r(0 !== i2 || 0 === s2[c], "iterator body cannot be pipelined");
    let Q2 = null;
    function g2() {
      if (Q2) {
        const A3 = Q2;
        Q2 = null, A3();
      }
    }
    const B2 = () => new Promise((A3, e3) => {
      r(null === Q2), n2[u] ? e3(n2[u]) : Q2 = A3;
    });
    e2.on("close", g2).on("drain", g2);
    try {
      for await (const A3 of t2) {
        if (n2[u]) throw n2[u];
        const t3 = e2.write(A3);
        o2.onBodySent(A3), t3 || await B2();
      }
      e2.end(), o2.onRequestSent(), a2 || (n2[E] = true), s2[p]();
    } catch (e3) {
      A2(e3);
    } finally {
      e2.off("close", g2).off("drain", g2);
    }
  }
  A.exports = async function(A2, e2) {
    A2[d] = e2, N || (N = true, process.emitWarning("H2 support is experimental, expect them to change at any time.", { code: "UNDICI-H2" }));
    const R2 = b.connect(A2[g], { createConnection: () => e2, peerMaxConcurrentStreams: A2[y] });
    R2[F] = 0, R2[B] = A2, R2[d] = e2, o.addListener(R2, "error", J), o.addListener(R2, "frameError", v), o.addListener(R2, "end", H), o.addListener(R2, "goaway", V), o.addListener(R2, "close", function() {
      const { [B]: A3 } = this, { [d]: e3 } = A3, t2 = this[d][u] || this[u] || new a("closed", o.getSocketInfo(e3));
      if (A3[D] = null, A3.destroyed) {
        r(0 === A3[I]);
        const e4 = A3[C].splice(A3[l]);
        for (let r2 = 0; r2 < e4.length; r2++) {
          const s2 = e4[r2];
          o.errorRequest(A3, s2, t2);
        }
      }
    }), R2.unref(), A2[D] = R2, e2[D] = R2, o.addListener(e2, "error", function(A3) {
      r("ERR_TLS_CERT_ALTNAME_INVALID" !== A3.code), this[u] = A3, this[B][w](A3);
    }), o.addListener(e2, "end", function() {
      o.destroy(this, new a("other side closed", o.getSocketInfo(this)));
    }), o.addListener(e2, "close", function() {
      const e3 = this[u] || new a("closed", o.getSocketInfo(this));
      A2[d] = null, null != this[D] && this[D].destroy(e3), A2[h] = A2[l], r(0 === A2[c]), A2.emit("disconnect", A2[g], [A2], e3), A2[p]();
    });
    let O = false;
    return e2.on("close", () => {
      O = true;
    }), { version: "h2", defaultPipelining: 1 / 0, write: (...e3) => (function(A3, e4) {
      const a2 = A3[D], { method: B2, path: I2, host: u2, upgrade: w2, expectContinue: y2, signal: k2, headers: R3 } = e4;
      let { body: b2 } = e4;
      if (w2) return o.errorRequest(A3, e4, new Error("Upgrade not supported for H2")), false;
      const N2 = {};
      for (let A4 = 0; A4 < R3.length; A4 += 2) {
        const e5 = R3[A4 + 0], t2 = R3[A4 + 1];
        if (Array.isArray(t2)) for (let A5 = 0; A5 < t2.length; A5++) N2[e5] ? N2[e5] += `,${t2[A5]}` : N2[e5] = t2[A5];
        else N2[e5] = t2;
      }
      let J2;
      const { hostname: v2, port: H2 } = A3[g];
      N2[S] = u2 || `${v2}${H2 ? `:${H2}` : ""}`, N2[M] = B2;
      const V2 = (t2) => {
        e4.aborted || e4.completed || (t2 = t2 || new i(), o.errorRequest(A3, e4, t2), null != J2 && o.destroy(J2, t2), o.destroy(b2, t2), A3[C][A3[l]++] = null, A3[p]());
      };
      try {
        e4.onConnect(V2);
      } catch (t2) {
        o.errorRequest(A3, e4, t2);
      }
      if (e4.aborted) return false;
      if ("CONNECT" === B2) return a2.ref(), J2 = a2.request(N2, { endStream: false, signal: k2 }), J2.id && !J2.pending ? (e4.onUpgrade(null, null, J2), ++a2[F], A3[C][A3[l]++] = null) : J2.once("ready", () => {
        e4.onUpgrade(null, null, J2), ++a2[F], A3[C][A3[l]++] = null;
      }), J2.once("close", () => {
        a2[F] -= 1, 0 === a2[F] && a2.unref();
      }), true;
      N2[U] = I2, N2[L] = "https";
      const O2 = "PUT" === B2 || "POST" === B2 || "PATCH" === B2;
      b2 && "function" == typeof b2.read && b2.read(0);
      let P = o.bodyLength(b2);
      if (o.isFormDataLike(b2)) {
        m ??= t(33095).extractBody;
        const [A4, e5] = m(b2);
        N2["content-type"] = e5, b2 = A4.stream, P = A4.length;
      }
      null == P && (P = e4.contentLength);
      0 !== P && O2 || (P = null);
      if (/* @__PURE__ */ (function(A4) {
        return "GET" !== A4 && "HEAD" !== A4 && "OPTIONS" !== A4 && "TRACE" !== A4 && "CONNECT" !== A4;
      })(B2) && P > 0 && null != e4.contentLength && e4.contentLength !== P) {
        if (A3[f]) return o.errorRequest(A3, e4, new n()), false;
        process.emitWarning(new n());
      }
      null != P && (r(b2, "no body must not have content length"), N2[T] = `${P}`);
      a2.ref();
      const q = "GET" === B2 || "HEAD" === B2 || null === b2;
      y2 ? (N2[Y] = "100-continue", J2 = a2.request(N2, { endStream: q, signal: k2 }), J2.once("continue", Z)) : (J2 = a2.request(N2, { endStream: q, signal: k2 }), Z());
      return ++a2[F], J2.once("response", (t2) => {
        const { [G]: r2, ...s2 } = t2;
        if (e4.onResponseStarted(), e4.aborted) {
          const t3 = new i();
          return o.errorRequest(A3, e4, t3), void o.destroy(J2, t3);
        }
        false === e4.onHeaders(Number(r2), (function(A4) {
          const e5 = [];
          for (const [t3, r3] of Object.entries(A4)) if (Array.isArray(r3)) for (const A5 of r3) e5.push(Buffer.from(t3), Buffer.from(A5));
          else e5.push(Buffer.from(t3), Buffer.from(r3));
          return e5;
        })(s2), J2.resume.bind(J2), "") && J2.pause(), J2.on("data", (A4) => {
          false === e4.onData(A4) && J2.pause();
        });
      }), J2.once("end", () => {
        (null == J2.state?.state || J2.state.state < 6) && e4.onComplete([]), 0 === a2[F] && a2.unref(), V2(new Q("HTTP/2: stream half-closed (remote)")), A3[C][A3[l]++] = null, A3[h] = A3[l], A3[p]();
      }), J2.once("close", () => {
        a2[F] -= 1, 0 === a2[F] && a2.unref();
      }), J2.once("error", function(A4) {
        V2(A4);
      }), J2.once("frameError", (A4, e5) => {
        V2(new Q(`HTTP/2: "frameError" received - type ${A4}, code ${e5}`));
      }), true;
      function Z() {
        b2 && 0 !== P ? o.isBuffer(b2) ? x(V2, J2, b2, A3, e4, A3[d], P, O2) : o.isBlobLike(b2) ? "function" == typeof b2.stream ? W(V2, J2, b2.stream(), A3, e4, A3[d], P, O2) : (async function(A4, e5, t2, s2, o2, i2, a3, Q2) {
          r(a3 === t2.size, "blob body must have content length");
          try {
            if (null != a3 && a3 !== t2.size) throw new n();
            const A5 = Buffer.from(await t2.arrayBuffer());
            e5.cork(), e5.write(A5), e5.uncork(), e5.end(), o2.onBodySent(A5), o2.onRequestSent(), Q2 || (i2[E] = true), s2[p]();
          } catch (e6) {
            A4(e6);
          }
        })(V2, J2, b2, A3, e4, A3[d], P, O2) : o.isStream(b2) ? (function(A4, e5, t2, n2, i2, a3, Q2, g2) {
          r(0 !== g2 || 0 === a3[c], "stream body cannot be pipelined");
          const B3 = s(i2, n2, (r2) => {
            r2 ? (o.destroy(B3, r2), A4(r2)) : (o.removeAllListeners(B3), Q2.onRequestSent(), t2 || (e5[E] = true), a3[p]());
          });
          function I3(A5) {
            Q2.onBodySent(A5);
          }
          o.addListener(B3, "data", I3);
        })(V2, A3[d], O2, J2, b2, A3, e4, P) : o.isIterable(b2) ? W(V2, J2, b2, A3, e4, A3[d], P, O2) : r(false) : x(V2, J2, null, A3, e4, A3[d], P, O2);
      }
    })(A2, ...e3), resume() {
      !(function(A3) {
        const e3 = A3[d];
        false === e3?.destroyed && (0 === A3[k] && 0 === A3[y] ? (e3.unref(), A3[D].unref()) : (e3.ref(), A3[D].ref()));
      })(A2);
    }, destroy(A3, t2) {
      O ? queueMicrotask(t2) : e2.destroy(A3).on("close", t2);
    }, get destroyed() {
      return e2.destroyed;
    }, busy: () => false };
  };
}