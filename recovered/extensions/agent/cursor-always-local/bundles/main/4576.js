// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4576 range:1173172..1183223
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4576: (t2, e2, r2) => {
    "use strict";
    const { InvalidArgumentError: n2, NotSupportedError: s2 } = r2(8762), i2 = r2(2613), { kHTTP2BuildRequest: o2, kHTTP2CopyHeaders: a, kHTTP1BuildRequest: u } = r2(5532), c = r2(3589), l = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, m = /[^\t\x20-\x7e\x80-\xff]/, d = /[^\u0021-\u00ff]/, f = /* @__PURE__ */ Symbol("handler"), p = {};
    let h;
    try {
      const t3 = r2(1637);
      p.create = t3.channel("undici:request:create"), p.bodySent = t3.channel("undici:request:bodySent"), p.headers = t3.channel("undici:request:headers"), p.trailers = t3.channel("undici:request:trailers"), p.error = t3.channel("undici:request:error");
    } catch {
      p.create = { hasSubscribers: false }, p.bodySent = { hasSubscribers: false }, p.headers = { hasSubscribers: false }, p.trailers = { hasSubscribers: false }, p.error = { hasSubscribers: false };
    }
    class g {
      constructor(t3, { path: e3, method: s3, body: i3, headers: o3, query: a2, idempotent: u2, blocking: m2, upgrade: g2, headersTimeout: A2, bodyTimeout: y, reset: w, throwOnError: S, expectContinue: J }, B) {
        if ("string" != typeof e3) throw new n2("path must be a string");
        if ("/" !== e3[0] && !e3.startsWith("http://") && !e3.startsWith("https://") && "CONNECT" !== s3) throw new n2("path must be an absolute URL or start with a slash");
        if (null !== d.exec(e3)) throw new n2("invalid request path");
        if ("string" != typeof s3) throw new n2("method must be a string");
        if (null === l.exec(s3)) throw new n2("invalid request method");
        if (g2 && "string" != typeof g2) throw new n2("upgrade must be a string");
        if (null != A2 && (!Number.isFinite(A2) || A2 < 0)) throw new n2("invalid headersTimeout");
        if (null != y && (!Number.isFinite(y) || y < 0)) throw new n2("invalid bodyTimeout");
        if (null != w && "boolean" != typeof w) throw new n2("invalid reset");
        if (null != J && "boolean" != typeof J) throw new n2("invalid expectContinue");
        if (this.headersTimeout = A2, this.bodyTimeout = y, this.throwOnError = true === S, this.method = s3, this.abort = null, null == i3) this.body = null;
        else if (c.isStream(i3)) {
          this.body = i3;
          const t4 = this.body._readableState;
          t4 && t4.autoDestroy || (this.endHandler = function() {
            c.destroy(this);
          }, this.body.on("end", this.endHandler)), this.errorHandler = (t5) => {
            this.abort ? this.abort(t5) : this.error = t5;
          }, this.body.on("error", this.errorHandler);
        } else if (c.isBuffer(i3)) this.body = i3.byteLength ? i3 : null;
        else if (ArrayBuffer.isView(i3)) this.body = i3.buffer.byteLength ? Buffer.from(i3.buffer, i3.byteOffset, i3.byteLength) : null;
        else if (i3 instanceof ArrayBuffer) this.body = i3.byteLength ? Buffer.from(i3) : null;
        else if ("string" == typeof i3) this.body = i3.length ? Buffer.from(i3) : null;
        else {
          if (!(c.isFormDataLike(i3) || c.isIterable(i3) || c.isBlobLike(i3))) throw new n2("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
          this.body = i3;
        }
        if (this.completed = false, this.aborted = false, this.upgrade = g2 || null, this.path = a2 ? c.buildURL(e3, a2) : e3, this.origin = t3, this.idempotent = u2 ?? ("HEAD" === s3 || "GET" === s3), this.blocking = m2 ?? false, this.reset = w ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != J && J, Array.isArray(o3)) {
          if (o3.length % 2 != 0) throw new n2("headers array must be even");
          for (let t4 = 0; t4 < o3.length; t4 += 2) _(this, o3[t4], o3[t4 + 1]);
        } else if (o3 && "object" == typeof o3) {
          const t4 = Object.keys(o3);
          for (let e4 = 0; e4 < t4.length; e4++) {
            const r3 = t4[e4];
            _(this, r3, o3[r3]);
          }
        } else if (null != o3) throw new n2("headers must be an object or an array");
        if (c.isFormDataLike(this.body)) {
          if (c.nodeMajor < 16 || 16 === c.nodeMajor && c.nodeMinor < 8) throw new n2("Form-Data bodies are only supported in node v16.8 and newer.");
          h || (h = r2(9608).extractBody);
          const [t4, e4] = h(i3);
          null == this.contentType && (this.contentType = e4, this.headers += `content-type: ${e4}\r
`), this.body = t4.stream, this.contentLength = t4.length;
        } else c.isBlobLike(i3) && null == this.contentType && i3.type && (this.contentType = i3.type, this.headers += `content-type: ${i3.type}\r
`);
        c.validateHandler(B, s3, g2), this.servername = c.getServerName(this.host), this[f] = B, p.create.hasSubscribers && p.create.publish({ request: this });
      }
      onBodySent(t3) {
        if (this[f].onBodySent) try {
          return this[f].onBodySent(t3);
        } catch (t4) {
          this.abort(t4);
        }
      }
      onRequestSent() {
        if (p.bodySent.hasSubscribers && p.bodySent.publish({ request: this }), this[f].onRequestSent) try {
          return this[f].onRequestSent();
        } catch (t3) {
          this.abort(t3);
        }
      }
      onConnect(t3) {
        if (i2(!this.aborted), i2(!this.completed), !this.error) return this.abort = t3, this[f].onConnect(t3);
        t3(this.error);
      }
      onHeaders(t3, e3, r3, n3) {
        i2(!this.aborted), i2(!this.completed), p.headers.hasSubscribers && p.headers.publish({ request: this, response: { statusCode: t3, headers: e3, statusText: n3 } });
        try {
          return this[f].onHeaders(t3, e3, r3, n3);
        } catch (t4) {
          this.abort(t4);
        }
      }
      onData(t3) {
        i2(!this.aborted), i2(!this.completed);
        try {
          return this[f].onData(t3);
        } catch (t4) {
          return this.abort(t4), false;
        }
      }
      onUpgrade(t3, e3, r3) {
        return i2(!this.aborted), i2(!this.completed), this[f].onUpgrade(t3, e3, r3);
      }
      onComplete(t3) {
        this.onFinally(), i2(!this.aborted), this.completed = true, p.trailers.hasSubscribers && p.trailers.publish({ request: this, trailers: t3 });
        try {
          return this[f].onComplete(t3);
        } catch (t4) {
          this.onError(t4);
        }
      }
      onError(t3) {
        if (this.onFinally(), p.error.hasSubscribers && p.error.publish({ request: this, error: t3 }), !this.aborted) return this.aborted = true, this[f].onError(t3);
      }
      onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
      }
      addHeader(t3, e3) {
        return _(this, t3, e3), this;
      }
      static [u](t3, e3, r3) {
        return new g(t3, e3, r3);
      }
      static [o2](t3, e3, r3) {
        const s3 = e3.headers;
        e3 = { ...e3, headers: null };
        const i3 = new g(t3, e3, r3);
        if (i3.headers = {}, Array.isArray(s3)) {
          if (s3.length % 2 != 0) throw new n2("headers array must be even");
          for (let t4 = 0; t4 < s3.length; t4 += 2) _(i3, s3[t4], s3[t4 + 1], true);
        } else if (s3 && "object" == typeof s3) {
          const t4 = Object.keys(s3);
          for (let e4 = 0; e4 < t4.length; e4++) {
            const r4 = t4[e4];
            _(i3, r4, s3[r4], true);
          }
        } else if (null != s3) throw new n2("headers must be an object or an array");
        return i3;
      }
      static [a](t3) {
        const e3 = t3.split("\r\n"), r3 = {};
        for (const t4 of e3) {
          const [e4, n3] = t4.split(": ");
          null != n3 && 0 !== n3.length && (r3[e4] ? r3[e4] += `,${n3}` : r3[e4] = n3);
        }
        return r3;
      }
    }
    function A(t3, e3, r3) {
      if (e3 && "object" == typeof e3) throw new n2(`invalid ${t3} header`);
      if (e3 = null != e3 ? `${e3}` : "", null !== m.exec(e3)) throw new n2(`invalid ${t3} header`);
      return r3 ? e3 : `${t3}: ${e3}\r
`;
    }
    function _(t3, e3, r3, i3 = false) {
      if (r3 && "object" == typeof r3 && !Array.isArray(r3)) throw new n2(`invalid ${e3} header`);
      if (void 0 !== r3) if (null === t3.host && 4 === e3.length && "host" === e3.toLowerCase()) {
        if (null !== m.exec(r3)) throw new n2(`invalid ${e3} header`);
        t3.host = r3;
      } else if (null === t3.contentLength && 14 === e3.length && "content-length" === e3.toLowerCase()) {
        if (t3.contentLength = parseInt(r3, 10), !Number.isFinite(t3.contentLength)) throw new n2("invalid content-length header");
      } else if (null === t3.contentType && 12 === e3.length && "content-type" === e3.toLowerCase()) t3.contentType = r3, i3 ? t3.headers[e3] = A(e3, r3, i3) : t3.headers += A(e3, r3);
      else {
        if (17 === e3.length && "transfer-encoding" === e3.toLowerCase()) throw new n2("invalid transfer-encoding header");
        if (10 === e3.length && "connection" === e3.toLowerCase()) {
          const e4 = "string" == typeof r3 ? r3.toLowerCase() : null;
          if ("close" !== e4 && "keep-alive" !== e4) throw new n2("invalid connection header");
          "close" === e4 && (t3.reset = true);
        } else {
          if (10 === e3.length && "keep-alive" === e3.toLowerCase()) throw new n2("invalid keep-alive header");
          if (7 === e3.length && "upgrade" === e3.toLowerCase()) throw new n2("invalid upgrade header");
          if (6 === e3.length && "expect" === e3.toLowerCase()) throw new s2("expect header not supported");
          if (null === l.exec(e3)) throw new n2("invalid header key");
          if (Array.isArray(r3)) for (let n3 = 0; n3 < r3.length; n3++) i3 ? t3.headers[e3] ? t3.headers[e3] += `,${A(e3, r3[n3], i3)}` : t3.headers[e3] = A(e3, r3[n3], i3) : t3.headers += A(e3, r3[n3]);
          else i3 ? t3.headers[e3] = A(e3, r3, i3) : t3.headers += A(e3, r3);
        }
      }
    }
    t2.exports = g;
  }