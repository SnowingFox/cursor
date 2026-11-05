// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 52588 range:279507..287425
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
52588: (A, e, t) => {
  "use strict";
  const { InvalidArgumentError: r, NotSupportedError: s } = t(38238), o = t(56970), { isValidHTTPToken: n, isValidHeaderValue: i, isStream: a, destroy: Q, isBuffer: g, isFormDataLike: E, isIterable: B, isBlobLike: c, buildURL: I, validateHandler: C, getServerName: h, normalizedMethodRecords: l } = t(55201), { channels: u } = t(98565), { headerNameLowerCasedRecord: d } = t(71648), f = /[^\u0021-\u00ff]/, w = /* @__PURE__ */ Symbol("handler");
  function y(A2, e2, t2) {
    if (t2 && "object" == typeof t2 && !Array.isArray(t2)) throw new r(`invalid ${e2} header`);
    if (void 0 === t2) return;
    let o2 = d[e2];
    if (void 0 === o2 && (o2 = e2.toLowerCase(), void 0 === d[o2] && !n(o2))) throw new r("invalid header key");
    if (Array.isArray(t2)) {
      const A3 = [];
      for (let s2 = 0; s2 < t2.length; s2++) if ("string" == typeof t2[s2]) {
        if (!i(t2[s2])) throw new r(`invalid ${e2} header`);
        A3.push(t2[s2]);
      } else if (null === t2[s2]) A3.push("");
      else {
        if ("object" == typeof t2[s2]) throw new r(`invalid ${e2} header`);
        {
          const o3 = `${t2[s2]}`;
          if (!i(o3)) throw new r(`invalid ${e2} header`);
          A3.push(o3);
        }
      }
      t2 = A3;
    } else if ("string" == typeof t2) {
      if (!i(t2)) throw new r(`invalid ${e2} header`);
    } else if (null === t2) t2 = "";
    else if (!i(t2 = `${t2}`)) throw new r(`invalid ${e2} header`);
    if ("host" === o2) {
      if (null !== A2.host) throw new r("duplicate host header");
      if ("string" != typeof t2) throw new r("invalid host header");
      A2.host = t2;
    } else if ("content-length" === o2) {
      if (null !== A2.contentLength) throw new r("duplicate content-length header");
      if (A2.contentLength = parseInt(t2, 10), !Number.isFinite(A2.contentLength)) throw new r("invalid content-length header");
    } else if (null === A2.contentType && "content-type" === o2) A2.contentType = t2, A2.headers.push(e2, t2);
    else {
      if ("transfer-encoding" === o2 || "keep-alive" === o2 || "upgrade" === o2) throw new r(`invalid ${o2} header`);
      if ("connection" === o2) {
        const e3 = "string" == typeof t2 ? t2.toLowerCase() : null;
        if ("close" !== e3 && "keep-alive" !== e3) throw new r("invalid connection header");
        "close" === e3 && (A2.reset = true);
      } else {
        if ("expect" === o2) throw new s("expect header not supported");
        A2.headers.push(e2, t2);
      }
    }
  }
  A.exports = class {
    constructor(A2, { path: e2, method: t2, body: s2, headers: o2, query: d2, idempotent: D, blocking: p, upgrade: k, headersTimeout: R, bodyTimeout: F, reset: m, throwOnError: b, expectContinue: N, servername: S }, M) {
      if ("string" != typeof e2) throw new r("path must be a string");
      if ("/" !== e2[0] && !e2.startsWith("http://") && !e2.startsWith("https://") && "CONNECT" !== t2) throw new r("path must be an absolute URL or start with a slash");
      if (f.test(e2)) throw new r("invalid request path");
      if ("string" != typeof t2) throw new r("method must be a string");
      if (void 0 === l[t2] && !n(t2)) throw new r("invalid request method");
      if (k && "string" != typeof k) throw new r("upgrade must be a string");
      if (k && !i(k)) throw new r("invalid upgrade header");
      if (null != R && (!Number.isFinite(R) || R < 0)) throw new r("invalid headersTimeout");
      if (null != F && (!Number.isFinite(F) || F < 0)) throw new r("invalid bodyTimeout");
      if (null != m && "boolean" != typeof m) throw new r("invalid reset");
      if (null != N && "boolean" != typeof N) throw new r("invalid expectContinue");
      if (this.headersTimeout = R, this.bodyTimeout = F, this.throwOnError = true === b, this.method = t2, this.abort = null, null == s2) this.body = null;
      else if (a(s2)) {
        this.body = s2;
        const A3 = this.body._readableState;
        A3 && A3.autoDestroy || (this.endHandler = function() {
          Q(this);
        }, this.body.on("end", this.endHandler)), this.errorHandler = (A4) => {
          this.abort ? this.abort(A4) : this.error = A4;
        }, this.body.on("error", this.errorHandler);
      } else if (g(s2)) this.body = s2.byteLength ? s2 : null;
      else if (ArrayBuffer.isView(s2)) this.body = s2.buffer.byteLength ? Buffer.from(s2.buffer, s2.byteOffset, s2.byteLength) : null;
      else if (s2 instanceof ArrayBuffer) this.body = s2.byteLength ? Buffer.from(s2) : null;
      else if ("string" == typeof s2) this.body = s2.length ? Buffer.from(s2) : null;
      else {
        if (!(E(s2) || B(s2) || c(s2))) throw new r("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
        this.body = s2;
      }
      if (this.completed = false, this.aborted = false, this.upgrade = k || null, this.path = d2 ? I(e2, d2) : e2, this.origin = A2, this.idempotent = D ?? ("HEAD" === t2 || "GET" === t2), this.blocking = p ?? false, this.reset = m ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = [], this.expectContinue = null != N && N, Array.isArray(o2)) {
        if (o2.length % 2 != 0) throw new r("headers array must be even");
        for (let A3 = 0; A3 < o2.length; A3 += 2) y(this, o2[A3], o2[A3 + 1]);
      } else if (o2 && "object" == typeof o2) if (o2[Symbol.iterator]) for (const A3 of o2) {
        if (!Array.isArray(A3) || 2 !== A3.length) throw new r("headers must be in key-value pair format");
        y(this, A3[0], A3[1]);
      }
      else {
        const A3 = Object.keys(o2);
        for (let e3 = 0; e3 < A3.length; ++e3) y(this, A3[e3], o2[A3[e3]]);
      }
      else if (null != o2) throw new r("headers must be an object or an array");
      C(M, t2, k), this.servername = S || h(this.host), this[w] = M, u.create.hasSubscribers && u.create.publish({ request: this });
    }
    onBodySent(A2) {
      if (this[w].onBodySent) try {
        return this[w].onBodySent(A2);
      } catch (A3) {
        this.abort(A3);
      }
    }
    onRequestSent() {
      if (u.bodySent.hasSubscribers && u.bodySent.publish({ request: this }), this[w].onRequestSent) try {
        return this[w].onRequestSent();
      } catch (A2) {
        this.abort(A2);
      }
    }
    onConnect(A2) {
      if (o(!this.aborted), o(!this.completed), !this.error) return this.abort = A2, this[w].onConnect(A2);
      A2(this.error);
    }
    onResponseStarted() {
      return this[w].onResponseStarted?.();
    }
    onHeaders(A2, e2, t2, r2) {
      o(!this.aborted), o(!this.completed), u.headers.hasSubscribers && u.headers.publish({ request: this, response: { statusCode: A2, headers: e2, statusText: r2 } });
      try {
        return this[w].onHeaders(A2, e2, t2, r2);
      } catch (A3) {
        this.abort(A3);
      }
    }
    onData(A2) {
      o(!this.aborted), o(!this.completed);
      try {
        return this[w].onData(A2);
      } catch (A3) {
        return this.abort(A3), false;
      }
    }
    onUpgrade(A2, e2, t2) {
      return o(!this.aborted), o(!this.completed), this[w].onUpgrade(A2, e2, t2);
    }
    onComplete(A2) {
      this.onFinally(), o(!this.aborted), this.completed = true, u.trailers.hasSubscribers && u.trailers.publish({ request: this, trailers: A2 });
      try {
        return this[w].onComplete(A2);
      } catch (A3) {
        this.onError(A3);
      }
    }
    onError(A2) {
      if (this.onFinally(), u.error.hasSubscribers && u.error.publish({ request: this, error: A2 }), !this.aborted) return this.aborted = true, this[w].onError(A2);
    }
    onFinally() {
      this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
    }
    addHeader(A2, e2) {
      return y(this, A2, e2), this;
    }
  };
}