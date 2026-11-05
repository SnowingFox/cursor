// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 3308 range:318168..328217
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3308: (e2, A2, t2) => {
    "use strict";
    const { InvalidArgumentError: n2, NotSupportedError: r2 } = t2(7902), o2 = t2(2613), { kHTTP2BuildRequest: s, kHTTP2CopyHeaders: a, kHTTP1BuildRequest: i } = t2(8832), c = t2(9361), l = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, g = /[^\t\x20-\x7e\x80-\xff]/, E = /[^\u0021-\u00ff]/, u = /* @__PURE__ */ Symbol("handler"), d = {};
    let I;
    try {
      const e3 = t2(1637);
      d.create = e3.channel("undici:request:create"), d.bodySent = e3.channel("undici:request:bodySent"), d.headers = e3.channel("undici:request:headers"), d.trailers = e3.channel("undici:request:trailers"), d.error = e3.channel("undici:request:error");
    } catch {
      d.create = { hasSubscribers: false }, d.bodySent = { hasSubscribers: false }, d.headers = { hasSubscribers: false }, d.trailers = { hasSubscribers: false }, d.error = { hasSubscribers: false };
    }
    class h {
      constructor(e3, { path: A3, method: r3, body: o3, headers: s2, query: a2, idempotent: i2, blocking: g2, upgrade: h2, headersTimeout: Q2, bodyTimeout: C, reset: B, throwOnError: p, expectContinue: f }, y) {
        if ("string" != typeof A3) throw new n2("path must be a string");
        if ("/" !== A3[0] && !A3.startsWith("http://") && !A3.startsWith("https://") && "CONNECT" !== r3) throw new n2("path must be an absolute URL or start with a slash");
        if (null !== E.exec(A3)) throw new n2("invalid request path");
        if ("string" != typeof r3) throw new n2("method must be a string");
        if (null === l.exec(r3)) throw new n2("invalid request method");
        if (h2 && "string" != typeof h2) throw new n2("upgrade must be a string");
        if (null != Q2 && (!Number.isFinite(Q2) || Q2 < 0)) throw new n2("invalid headersTimeout");
        if (null != C && (!Number.isFinite(C) || C < 0)) throw new n2("invalid bodyTimeout");
        if (null != B && "boolean" != typeof B) throw new n2("invalid reset");
        if (null != f && "boolean" != typeof f) throw new n2("invalid expectContinue");
        if (this.headersTimeout = Q2, this.bodyTimeout = C, this.throwOnError = true === p, this.method = r3, this.abort = null, null == o3) this.body = null;
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
        if (this.completed = false, this.aborted = false, this.upgrade = h2 || null, this.path = a2 ? c.buildURL(A3, a2) : A3, this.origin = e3, this.idempotent = i2 ?? ("HEAD" === r3 || "GET" === r3), this.blocking = g2 ?? false, this.reset = B ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != f && f, Array.isArray(s2)) {
          if (s2.length % 2 != 0) throw new n2("headers array must be even");
          for (let e4 = 0; e4 < s2.length; e4 += 2) m(this, s2[e4], s2[e4 + 1]);
        } else if (s2 && "object" == typeof s2) {
          const e4 = Object.keys(s2);
          for (let A4 = 0; A4 < e4.length; A4++) {
            const t3 = e4[A4];
            m(this, t3, s2[t3]);
          }
        } else if (null != s2) throw new n2("headers must be an object or an array");
        if (c.isFormDataLike(this.body)) {
          if (c.nodeMajor < 16 || 16 === c.nodeMajor && c.nodeMinor < 8) throw new n2("Form-Data bodies are only supported in node v16.8 and newer.");
          I || (I = t2(7052).extractBody);
          const [e4, A4] = I(o3);
          null == this.contentType && (this.contentType = A4, this.headers += `content-type: ${A4}\r
`), this.body = e4.stream, this.contentLength = e4.length;
        } else c.isBlobLike(o3) && null == this.contentType && o3.type && (this.contentType = o3.type, this.headers += `content-type: ${o3.type}\r
`);
        c.validateHandler(y, r3, h2), this.servername = c.getServerName(this.host), this[u] = y, d.create.hasSubscribers && d.create.publish({ request: this });
      }
      onBodySent(e3) {
        if (this[u].onBodySent) try {
          return this[u].onBodySent(e3);
        } catch (e4) {
          this.abort(e4);
        }
      }
      onRequestSent() {
        if (d.bodySent.hasSubscribers && d.bodySent.publish({ request: this }), this[u].onRequestSent) try {
          return this[u].onRequestSent();
        } catch (e3) {
          this.abort(e3);
        }
      }
      onConnect(e3) {
        if (o2(!this.aborted), o2(!this.completed), !this.error) return this.abort = e3, this[u].onConnect(e3);
        e3(this.error);
      }
      onHeaders(e3, A3, t3, n3) {
        o2(!this.aborted), o2(!this.completed), d.headers.hasSubscribers && d.headers.publish({ request: this, response: { statusCode: e3, headers: A3, statusText: n3 } });
        try {
          return this[u].onHeaders(e3, A3, t3, n3);
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
      onUpgrade(e3, A3, t3) {
        return o2(!this.aborted), o2(!this.completed), this[u].onUpgrade(e3, A3, t3);
      }
      onComplete(e3) {
        this.onFinally(), o2(!this.aborted), this.completed = true, d.trailers.hasSubscribers && d.trailers.publish({ request: this, trailers: e3 });
        try {
          return this[u].onComplete(e3);
        } catch (e4) {
          this.onError(e4);
        }
      }
      onError(e3) {
        if (this.onFinally(), d.error.hasSubscribers && d.error.publish({ request: this, error: e3 }), !this.aborted) return this.aborted = true, this[u].onError(e3);
      }
      onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
      }
      addHeader(e3, A3) {
        return m(this, e3, A3), this;
      }
      static [i](e3, A3, t3) {
        return new h(e3, A3, t3);
      }
      static [s](e3, A3, t3) {
        const r3 = A3.headers;
        A3 = { ...A3, headers: null };
        const o3 = new h(e3, A3, t3);
        if (o3.headers = {}, Array.isArray(r3)) {
          if (r3.length % 2 != 0) throw new n2("headers array must be even");
          for (let e4 = 0; e4 < r3.length; e4 += 2) m(o3, r3[e4], r3[e4 + 1], true);
        } else if (r3 && "object" == typeof r3) {
          const e4 = Object.keys(r3);
          for (let A4 = 0; A4 < e4.length; A4++) {
            const t4 = e4[A4];
            m(o3, t4, r3[t4], true);
          }
        } else if (null != r3) throw new n2("headers must be an object or an array");
        return o3;
      }
      static [a](e3) {
        const A3 = e3.split("\r\n"), t3 = {};
        for (const e4 of A3) {
          const [A4, n3] = e4.split(": ");
          null != n3 && 0 !== n3.length && (t3[A4] ? t3[A4] += `,${n3}` : t3[A4] = n3);
        }
        return t3;
      }
    }
    function Q(e3, A3, t3) {
      if (A3 && "object" == typeof A3) throw new n2(`invalid ${e3} header`);
      if (A3 = null != A3 ? `${A3}` : "", null !== g.exec(A3)) throw new n2(`invalid ${e3} header`);
      return t3 ? A3 : `${e3}: ${A3}\r
`;
    }
    function m(e3, A3, t3, o3 = false) {
      if (t3 && "object" == typeof t3 && !Array.isArray(t3)) throw new n2(`invalid ${A3} header`);
      if (void 0 !== t3) if (null === e3.host && 4 === A3.length && "host" === A3.toLowerCase()) {
        if (null !== g.exec(t3)) throw new n2(`invalid ${A3} header`);
        e3.host = t3;
      } else if (null === e3.contentLength && 14 === A3.length && "content-length" === A3.toLowerCase()) {
        if (e3.contentLength = parseInt(t3, 10), !Number.isFinite(e3.contentLength)) throw new n2("invalid content-length header");
      } else if (null === e3.contentType && 12 === A3.length && "content-type" === A3.toLowerCase()) e3.contentType = t3, o3 ? e3.headers[A3] = Q(A3, t3, o3) : e3.headers += Q(A3, t3);
      else {
        if (17 === A3.length && "transfer-encoding" === A3.toLowerCase()) throw new n2("invalid transfer-encoding header");
        if (10 === A3.length && "connection" === A3.toLowerCase()) {
          const A4 = "string" == typeof t3 ? t3.toLowerCase() : null;
          if ("close" !== A4 && "keep-alive" !== A4) throw new n2("invalid connection header");
          "close" === A4 && (e3.reset = true);
        } else {
          if (10 === A3.length && "keep-alive" === A3.toLowerCase()) throw new n2("invalid keep-alive header");
          if (7 === A3.length && "upgrade" === A3.toLowerCase()) throw new n2("invalid upgrade header");
          if (6 === A3.length && "expect" === A3.toLowerCase()) throw new r2("expect header not supported");
          if (null === l.exec(A3)) throw new n2("invalid header key");
          if (Array.isArray(t3)) for (let n3 = 0; n3 < t3.length; n3++) o3 ? e3.headers[A3] ? e3.headers[A3] += `,${Q(A3, t3[n3], o3)}` : e3.headers[A3] = Q(A3, t3[n3], o3) : e3.headers += Q(A3, t3[n3]);
          else o3 ? e3.headers[A3] = Q(A3, t3, o3) : e3.headers += Q(A3, t3);
        }
      }
    }
    e2.exports = h;
  }