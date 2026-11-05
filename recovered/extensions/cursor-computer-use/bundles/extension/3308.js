// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 3308 range:322359..332408
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3308: (e2, n2, t2) => {
    "use strict";
    const { InvalidArgumentError: a2, NotSupportedError: s2 } = t2(7902), o2 = t2(2613), { kHTTP2BuildRequest: r, kHTTP2CopyHeaders: i, kHTTP1BuildRequest: A } = t2(8832), c = t2(9361), l = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, d = /[^\t\x20-\x7e\x80-\xff]/, m = /[^\u0021-\u00ff]/, u = /* @__PURE__ */ Symbol("handler"), g = {};
    let p;
    try {
      const e3 = t2(1637);
      g.create = e3.channel("undici:request:create"), g.bodySent = e3.channel("undici:request:bodySent"), g.headers = e3.channel("undici:request:headers"), g.trailers = e3.channel("undici:request:trailers"), g.error = e3.channel("undici:request:error");
    } catch {
      g.create = { hasSubscribers: false }, g.bodySent = { hasSubscribers: false }, g.headers = { hasSubscribers: false }, g.trailers = { hasSubscribers: false }, g.error = { hasSubscribers: false };
    }
    class E {
      constructor(e3, { path: n3, method: s3, body: o3, headers: r2, query: i2, idempotent: A2, blocking: d2, upgrade: E2, headersTimeout: h2, bodyTimeout: k, reset: f, throwOnError: _, expectContinue: I }, C) {
        if ("string" != typeof n3) throw new a2("path must be a string");
        if ("/" !== n3[0] && !n3.startsWith("http://") && !n3.startsWith("https://") && "CONNECT" !== s3) throw new a2("path must be an absolute URL or start with a slash");
        if (null !== m.exec(n3)) throw new a2("invalid request path");
        if ("string" != typeof s3) throw new a2("method must be a string");
        if (null === l.exec(s3)) throw new a2("invalid request method");
        if (E2 && "string" != typeof E2) throw new a2("upgrade must be a string");
        if (null != h2 && (!Number.isFinite(h2) || h2 < 0)) throw new a2("invalid headersTimeout");
        if (null != k && (!Number.isFinite(k) || k < 0)) throw new a2("invalid bodyTimeout");
        if (null != f && "boolean" != typeof f) throw new a2("invalid reset");
        if (null != I && "boolean" != typeof I) throw new a2("invalid expectContinue");
        if (this.headersTimeout = h2, this.bodyTimeout = k, this.throwOnError = true === _, this.method = s3, this.abort = null, null == o3) this.body = null;
        else if (c.isStream(o3)) {
          this.body = o3;
          const e4 = this.body._readableState;
          e4 && e4.autoDestroy || (this.endHandler = function() {
            c.destroy(this);
          }, this.body.on("end", this.endHandler)), this.errorHandler = (e5) => {
            this.abort ? this.abort(e5) : this.error = e5;
          }, this.body.on("error", this.errorHandler);
        } else if (c.isBuffer(o3)) this.body = o3.byteLength ? o3 : null;
        else if (ArrayBuffer.isView(o3)) this.body = o3.buffer.byteLength ? Buffer.from(o3.buffer, o3.byteOffset, o3.byteLength) : null;
        else if (o3 instanceof ArrayBuffer) this.body = o3.byteLength ? Buffer.from(o3) : null;
        else if ("string" == typeof o3) this.body = o3.length ? Buffer.from(o3) : null;
        else {
          if (!(c.isFormDataLike(o3) || c.isIterable(o3) || c.isBlobLike(o3))) throw new a2("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
          this.body = o3;
        }
        if (this.completed = false, this.aborted = false, this.upgrade = E2 || null, this.path = i2 ? c.buildURL(n3, i2) : n3, this.origin = e3, this.idempotent = A2 ?? ("HEAD" === s3 || "GET" === s3), this.blocking = d2 ?? false, this.reset = f ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != I && I, Array.isArray(r2)) {
          if (r2.length % 2 != 0) throw new a2("headers array must be even");
          for (let e4 = 0; e4 < r2.length; e4 += 2) T(this, r2[e4], r2[e4 + 1]);
        } else if (r2 && "object" == typeof r2) {
          const e4 = Object.keys(r2);
          for (let n4 = 0; n4 < e4.length; n4++) {
            const t3 = e4[n4];
            T(this, t3, r2[t3]);
          }
        } else if (null != r2) throw new a2("headers must be an object or an array");
        if (c.isFormDataLike(this.body)) {
          if (c.nodeMajor < 16 || 16 === c.nodeMajor && c.nodeMinor < 8) throw new a2("Form-Data bodies are only supported in node v16.8 and newer.");
          p || (p = t2(7052).extractBody);
          const [e4, n4] = p(o3);
          null == this.contentType && (this.contentType = n4, this.headers += `content-type: ${n4}\r
`), this.body = e4.stream, this.contentLength = e4.length;
        } else c.isBlobLike(o3) && null == this.contentType && o3.type && (this.contentType = o3.type, this.headers += `content-type: ${o3.type}\r
`);
        c.validateHandler(C, s3, E2), this.servername = c.getServerName(this.host), this[u] = C, g.create.hasSubscribers && g.create.publish({ request: this });
      }
      onBodySent(e3) {
        if (this[u].onBodySent) try {
          return this[u].onBodySent(e3);
        } catch (e4) {
          this.abort(e4);
        }
      }
      onRequestSent() {
        if (g.bodySent.hasSubscribers && g.bodySent.publish({ request: this }), this[u].onRequestSent) try {
          return this[u].onRequestSent();
        } catch (e3) {
          this.abort(e3);
        }
      }
      onConnect(e3) {
        if (o2(!this.aborted), o2(!this.completed), !this.error) return this.abort = e3, this[u].onConnect(e3);
        e3(this.error);
      }
      onHeaders(e3, n3, t3, a3) {
        o2(!this.aborted), o2(!this.completed), g.headers.hasSubscribers && g.headers.publish({ request: this, response: { statusCode: e3, headers: n3, statusText: a3 } });
        try {
          return this[u].onHeaders(e3, n3, t3, a3);
        } catch (e4) {
          this.abort(e4);
        }
      }
      onData(e3) {
        o2(!this.aborted), o2(!this.completed);
        try {
          return this[u].onData(e3);
        } catch (e4) {
          return this.abort(e4), false;
        }
      }
      onUpgrade(e3, n3, t3) {
        return o2(!this.aborted), o2(!this.completed), this[u].onUpgrade(e3, n3, t3);
      }
      onComplete(e3) {
        this.onFinally(), o2(!this.aborted), this.completed = true, g.trailers.hasSubscribers && g.trailers.publish({ request: this, trailers: e3 });
        try {
          return this[u].onComplete(e3);
        } catch (e4) {
          this.onError(e4);
        }
      }
      onError(e3) {
        if (this.onFinally(), g.error.hasSubscribers && g.error.publish({ request: this, error: e3 }), !this.aborted) return this.aborted = true, this[u].onError(e3);
      }
      onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
      }
      addHeader(e3, n3) {
        return T(this, e3, n3), this;
      }
      static [A](e3, n3, t3) {
        return new E(e3, n3, t3);
      }
      static [r](e3, n3, t3) {
        const s3 = n3.headers;
        n3 = { ...n3, headers: null };
        const o3 = new E(e3, n3, t3);
        if (o3.headers = {}, Array.isArray(s3)) {
          if (s3.length % 2 != 0) throw new a2("headers array must be even");
          for (let e4 = 0; e4 < s3.length; e4 += 2) T(o3, s3[e4], s3[e4 + 1], true);
        } else if (s3 && "object" == typeof s3) {
          const e4 = Object.keys(s3);
          for (let n4 = 0; n4 < e4.length; n4++) {
            const t4 = e4[n4];
            T(o3, t4, s3[t4], true);
          }
        } else if (null != s3) throw new a2("headers must be an object or an array");
        return o3;
      }
      static [i](e3) {
        const n3 = e3.split("\r\n"), t3 = {};
        for (const e4 of n3) {
          const [n4, a3] = e4.split(": ");
          null != a3 && 0 !== a3.length && (t3[n4] ? t3[n4] += `,${a3}` : t3[n4] = a3);
        }
        return t3;
      }
    }
    function h(e3, n3, t3) {
      if (n3 && "object" == typeof n3) throw new a2(`invalid ${e3} header`);
      if (n3 = null != n3 ? `${n3}` : "", null !== d.exec(n3)) throw new a2(`invalid ${e3} header`);
      return t3 ? n3 : `${e3}: ${n3}\r
`;
    }
    function T(e3, n3, t3, o3 = false) {
      if (t3 && "object" == typeof t3 && !Array.isArray(t3)) throw new a2(`invalid ${n3} header`);
      if (void 0 !== t3) if (null === e3.host && 4 === n3.length && "host" === n3.toLowerCase()) {
        if (null !== d.exec(t3)) throw new a2(`invalid ${n3} header`);
        e3.host = t3;
      } else if (null === e3.contentLength && 14 === n3.length && "content-length" === n3.toLowerCase()) {
        if (e3.contentLength = parseInt(t3, 10), !Number.isFinite(e3.contentLength)) throw new a2("invalid content-length header");
      } else if (null === e3.contentType && 12 === n3.length && "content-type" === n3.toLowerCase()) e3.contentType = t3, o3 ? e3.headers[n3] = h(n3, t3, o3) : e3.headers += h(n3, t3);
      else {
        if (17 === n3.length && "transfer-encoding" === n3.toLowerCase()) throw new a2("invalid transfer-encoding header");
        if (10 === n3.length && "connection" === n3.toLowerCase()) {
          const n4 = "string" == typeof t3 ? t3.toLowerCase() : null;
          if ("close" !== n4 && "keep-alive" !== n4) throw new a2("invalid connection header");
          "close" === n4 && (e3.reset = true);
        } else {
          if (10 === n3.length && "keep-alive" === n3.toLowerCase()) throw new a2("invalid keep-alive header");
          if (7 === n3.length && "upgrade" === n3.toLowerCase()) throw new a2("invalid upgrade header");
          if (6 === n3.length && "expect" === n3.toLowerCase()) throw new s2("expect header not supported");
          if (null === l.exec(n3)) throw new a2("invalid header key");
          if (Array.isArray(t3)) for (let a3 = 0; a3 < t3.length; a3++) o3 ? e3.headers[n3] ? e3.headers[n3] += `,${h(n3, t3[a3], o3)}` : e3.headers[n3] = h(n3, t3[a3], o3) : e3.headers += h(n3, t3[a3]);
          else o3 ? e3.headers[n3] = h(n3, t3, o3) : e3.headers += h(n3, t3);
        }
      }
    }
    e2.exports = E;
  }