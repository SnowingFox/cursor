// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3308 range:414590..424639
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3308: (e2, t2, A2) => {
    "use strict";
    const { InvalidArgumentError: n2, NotSupportedError: r2 } = A2(7902), o2 = A2(2613), { kHTTP2BuildRequest: s, kHTTP2CopyHeaders: i, kHTTP1BuildRequest: a } = A2(8832), c = A2(9361), l = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, u = /[^\t\x20-\x7e\x80-\xff]/, g = /[^\u0021-\u00ff]/, E = /* @__PURE__ */ Symbol("handler"), h = {};
    let d;
    try {
      const e3 = A2(1637);
      h.create = e3.channel("undici:request:create"), h.bodySent = e3.channel("undici:request:bodySent"), h.headers = e3.channel("undici:request:headers"), h.trailers = e3.channel("undici:request:trailers"), h.error = e3.channel("undici:request:error");
    } catch {
      h.create = { hasSubscribers: false }, h.bodySent = { hasSubscribers: false }, h.headers = { hasSubscribers: false }, h.trailers = { hasSubscribers: false }, h.error = { hasSubscribers: false };
    }
    class I {
      constructor(e3, { path: t3, method: r3, body: o3, headers: s2, query: i2, idempotent: a2, blocking: u2, upgrade: I2, headersTimeout: B2, bodyTimeout: f, reset: C, throwOnError: p, expectContinue: m }, y) {
        if ("string" != typeof t3) throw new n2("path must be a string");
        if ("/" !== t3[0] && !t3.startsWith("http://") && !t3.startsWith("https://") && "CONNECT" !== r3) throw new n2("path must be an absolute URL or start with a slash");
        if (null !== g.exec(t3)) throw new n2("invalid request path");
        if ("string" != typeof r3) throw new n2("method must be a string");
        if (null === l.exec(r3)) throw new n2("invalid request method");
        if (I2 && "string" != typeof I2) throw new n2("upgrade must be a string");
        if (null != B2 && (!Number.isFinite(B2) || B2 < 0)) throw new n2("invalid headersTimeout");
        if (null != f && (!Number.isFinite(f) || f < 0)) throw new n2("invalid bodyTimeout");
        if (null != C && "boolean" != typeof C) throw new n2("invalid reset");
        if (null != m && "boolean" != typeof m) throw new n2("invalid expectContinue");
        if (this.headersTimeout = B2, this.bodyTimeout = f, this.throwOnError = true === p, this.method = r3, this.abort = null, null == o3) this.body = null;
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
          if (!(c.isFormDataLike(o3) || c.isIterable(o3) || c.isBlobLike(o3))) throw new n2("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
          this.body = o3;
        }
        if (this.completed = false, this.aborted = false, this.upgrade = I2 || null, this.path = i2 ? c.buildURL(t3, i2) : t3, this.origin = e3, this.idempotent = a2 ?? ("HEAD" === r3 || "GET" === r3), this.blocking = u2 ?? false, this.reset = C ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != m && m, Array.isArray(s2)) {
          if (s2.length % 2 != 0) throw new n2("headers array must be even");
          for (let e4 = 0; e4 < s2.length; e4 += 2) Q(this, s2[e4], s2[e4 + 1]);
        } else if (s2 && "object" == typeof s2) {
          const e4 = Object.keys(s2);
          for (let t4 = 0; t4 < e4.length; t4++) {
            const A3 = e4[t4];
            Q(this, A3, s2[A3]);
          }
        } else if (null != s2) throw new n2("headers must be an object or an array");
        if (c.isFormDataLike(this.body)) {
          if (c.nodeMajor < 16 || 16 === c.nodeMajor && c.nodeMinor < 8) throw new n2("Form-Data bodies are only supported in node v16.8 and newer.");
          d || (d = A2(7052).extractBody);
          const [e4, t4] = d(o3);
          null == this.contentType && (this.contentType = t4, this.headers += `content-type: ${t4}\r
`), this.body = e4.stream, this.contentLength = e4.length;
        } else c.isBlobLike(o3) && null == this.contentType && o3.type && (this.contentType = o3.type, this.headers += `content-type: ${o3.type}\r
`);
        c.validateHandler(y, r3, I2), this.servername = c.getServerName(this.host), this[E] = y, h.create.hasSubscribers && h.create.publish({ request: this });
      }
      onBodySent(e3) {
        if (this[E].onBodySent) try {
          return this[E].onBodySent(e3);
        } catch (e4) {
          this.abort(e4);
        }
      }
      onRequestSent() {
        if (h.bodySent.hasSubscribers && h.bodySent.publish({ request: this }), this[E].onRequestSent) try {
          return this[E].onRequestSent();
        } catch (e3) {
          this.abort(e3);
        }
      }
      onConnect(e3) {
        if (o2(!this.aborted), o2(!this.completed), !this.error) return this.abort = e3, this[E].onConnect(e3);
        e3(this.error);
      }
      onHeaders(e3, t3, A3, n3) {
        o2(!this.aborted), o2(!this.completed), h.headers.hasSubscribers && h.headers.publish({ request: this, response: { statusCode: e3, headers: t3, statusText: n3 } });
        try {
          return this[E].onHeaders(e3, t3, A3, n3);
        } catch (e4) {
          this.abort(e4);
        }
      }
      onData(e3) {
        o2(!this.aborted), o2(!this.completed);
        try {
          return this[E].onData(e3);
        } catch (e4) {
          return this.abort(e4), false;
        }
      }
      onUpgrade(e3, t3, A3) {
        return o2(!this.aborted), o2(!this.completed), this[E].onUpgrade(e3, t3, A3);
      }
      onComplete(e3) {
        this.onFinally(), o2(!this.aborted), this.completed = true, h.trailers.hasSubscribers && h.trailers.publish({ request: this, trailers: e3 });
        try {
          return this[E].onComplete(e3);
        } catch (e4) {
          this.onError(e4);
        }
      }
      onError(e3) {
        if (this.onFinally(), h.error.hasSubscribers && h.error.publish({ request: this, error: e3 }), !this.aborted) return this.aborted = true, this[E].onError(e3);
      }
      onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
      }
      addHeader(e3, t3) {
        return Q(this, e3, t3), this;
      }
      static [a](e3, t3, A3) {
        return new I(e3, t3, A3);
      }
      static [s](e3, t3, A3) {
        const r3 = t3.headers;
        t3 = { ...t3, headers: null };
        const o3 = new I(e3, t3, A3);
        if (o3.headers = {}, Array.isArray(r3)) {
          if (r3.length % 2 != 0) throw new n2("headers array must be even");
          for (let e4 = 0; e4 < r3.length; e4 += 2) Q(o3, r3[e4], r3[e4 + 1], true);
        } else if (r3 && "object" == typeof r3) {
          const e4 = Object.keys(r3);
          for (let t4 = 0; t4 < e4.length; t4++) {
            const A4 = e4[t4];
            Q(o3, A4, r3[A4], true);
          }
        } else if (null != r3) throw new n2("headers must be an object or an array");
        return o3;
      }
      static [i](e3) {
        const t3 = e3.split("\r\n"), A3 = {};
        for (const e4 of t3) {
          const [t4, n3] = e4.split(": ");
          null != n3 && 0 !== n3.length && (A3[t4] ? A3[t4] += `,${n3}` : A3[t4] = n3);
        }
        return A3;
      }
    }
    function B(e3, t3, A3) {
      if (t3 && "object" == typeof t3) throw new n2(`invalid ${e3} header`);
      if (t3 = null != t3 ? `${t3}` : "", null !== u.exec(t3)) throw new n2(`invalid ${e3} header`);
      return A3 ? t3 : `${e3}: ${t3}\r
`;
    }
    function Q(e3, t3, A3, o3 = false) {
      if (A3 && "object" == typeof A3 && !Array.isArray(A3)) throw new n2(`invalid ${t3} header`);
      if (void 0 !== A3) if (null === e3.host && 4 === t3.length && "host" === t3.toLowerCase()) {
        if (null !== u.exec(A3)) throw new n2(`invalid ${t3} header`);
        e3.host = A3;
      } else if (null === e3.contentLength && 14 === t3.length && "content-length" === t3.toLowerCase()) {
        if (e3.contentLength = parseInt(A3, 10), !Number.isFinite(e3.contentLength)) throw new n2("invalid content-length header");
      } else if (null === e3.contentType && 12 === t3.length && "content-type" === t3.toLowerCase()) e3.contentType = A3, o3 ? e3.headers[t3] = B(t3, A3, o3) : e3.headers += B(t3, A3);
      else {
        if (17 === t3.length && "transfer-encoding" === t3.toLowerCase()) throw new n2("invalid transfer-encoding header");
        if (10 === t3.length && "connection" === t3.toLowerCase()) {
          const t4 = "string" == typeof A3 ? A3.toLowerCase() : null;
          if ("close" !== t4 && "keep-alive" !== t4) throw new n2("invalid connection header");
          "close" === t4 && (e3.reset = true);
        } else {
          if (10 === t3.length && "keep-alive" === t3.toLowerCase()) throw new n2("invalid keep-alive header");
          if (7 === t3.length && "upgrade" === t3.toLowerCase()) throw new n2("invalid upgrade header");
          if (6 === t3.length && "expect" === t3.toLowerCase()) throw new r2("expect header not supported");
          if (null === l.exec(t3)) throw new n2("invalid header key");
          if (Array.isArray(A3)) for (let n3 = 0; n3 < A3.length; n3++) o3 ? e3.headers[t3] ? e3.headers[t3] += `,${B(t3, A3[n3], o3)}` : e3.headers[t3] = B(t3, A3[n3], o3) : e3.headers += B(t3, A3[n3]);
          else o3 ? e3.headers[t3] = B(t3, A3, o3) : e3.headers += B(t3, A3);
        }
      }
    }
    e2.exports = I;
  }