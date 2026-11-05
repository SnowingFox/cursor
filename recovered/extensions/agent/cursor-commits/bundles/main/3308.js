// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 3308 range:318372..328425
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3308: (e2, n2, a2) => {
    "use strict";
    const { InvalidArgumentError: t2, NotSupportedError: s2 } = a2(7902), o2 = a2(2613), { kHTTP2BuildRequest: r2, kHTTP2CopyHeaders: i2, kHTTP1BuildRequest: A } = a2(8832), l = a2(9361), c = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, m = /[^\t\x20-\x7e\x80-\xff]/, d = /[^\u0021-\u00ff]/, g = /* @__PURE__ */ Symbol("handler"), u = {};
    let E;
    try {
      const e3 = a2(1637);
      u.create = e3.channel("undici:request:create"), u.bodySent = e3.channel("undici:request:bodySent"), u.headers = e3.channel("undici:request:headers"), u.trailers = e3.channel("undici:request:trailers"), u.error = e3.channel("undici:request:error");
    } catch {
      u.create = { hasSubscribers: false }, u.bodySent = { hasSubscribers: false }, u.headers = { hasSubscribers: false }, u.trailers = { hasSubscribers: false }, u.error = { hasSubscribers: false };
    }
    class p {
      constructor(e3, { path: n3, method: s3, body: o3, headers: r3, query: i3, idempotent: A2, blocking: m2, upgrade: p2, headersTimeout: T2, bodyTimeout: I, reset: h, throwOnError: _, expectContinue: C }, f) {
        if ("string" != typeof n3) throw new t2("path must be a string");
        if ("/" !== n3[0] && !n3.startsWith("http://") && !n3.startsWith("https://") && "CONNECT" !== s3) throw new t2("path must be an absolute URL or start with a slash");
        if (null !== d.exec(n3)) throw new t2("invalid request path");
        if ("string" != typeof s3) throw new t2("method must be a string");
        if (null === c.exec(s3)) throw new t2("invalid request method");
        if (p2 && "string" != typeof p2) throw new t2("upgrade must be a string");
        if (null != T2 && (!Number.isFinite(T2) || T2 < 0)) throw new t2("invalid headersTimeout");
        if (null != I && (!Number.isFinite(I) || I < 0)) throw new t2("invalid bodyTimeout");
        if (null != h && "boolean" != typeof h) throw new t2("invalid reset");
        if (null != C && "boolean" != typeof C) throw new t2("invalid expectContinue");
        if (this.headersTimeout = T2, this.bodyTimeout = I, this.throwOnError = true === _, this.method = s3, this.abort = null, null == o3) this.body = null;
        else if (l.isStream(o3)) {
          this.body = o3;
          const e4 = this.body._readableState;
          e4 && e4.autoDestroy || (this.endHandler = function() {
            l.destroy(this);
          }, this.body.on("end", this.endHandler)), this.errorHandler = (e5) => {
            this.abort ? this.abort(e5) : this.error = e5;
          }, this.body.on("error", this.errorHandler);
        } else if (l.isBuffer(o3)) this.body = o3.byteLength ? o3 : null;
        else if (ArrayBuffer.isView(o3)) this.body = o3.buffer.byteLength ? Buffer.from(o3.buffer, o3.byteOffset, o3.byteLength) : null;
        else if (o3 instanceof ArrayBuffer) this.body = o3.byteLength ? Buffer.from(o3) : null;
        else if ("string" == typeof o3) this.body = o3.length ? Buffer.from(o3) : null;
        else {
          if (!(l.isFormDataLike(o3) || l.isIterable(o3) || l.isBlobLike(o3))) throw new t2("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
          this.body = o3;
        }
        if (this.completed = false, this.aborted = false, this.upgrade = p2 || null, this.path = i3 ? l.buildURL(n3, i3) : n3, this.origin = e3, this.idempotent = A2 ?? ("HEAD" === s3 || "GET" === s3), this.blocking = m2 ?? false, this.reset = h ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != C && C, Array.isArray(r3)) {
          if (r3.length % 2 != 0) throw new t2("headers array must be even");
          for (let e4 = 0; e4 < r3.length; e4 += 2) k(this, r3[e4], r3[e4 + 1]);
        } else if (r3 && "object" == typeof r3) {
          const e4 = Object.keys(r3);
          for (let n4 = 0; n4 < e4.length; n4++) {
            const a3 = e4[n4];
            k(this, a3, r3[a3]);
          }
        } else if (null != r3) throw new t2("headers must be an object or an array");
        if (l.isFormDataLike(this.body)) {
          if (l.nodeMajor < 16 || 16 === l.nodeMajor && l.nodeMinor < 8) throw new t2("Form-Data bodies are only supported in node v16.8 and newer.");
          E || (E = a2(7052).extractBody);
          const [e4, n4] = E(o3);
          null == this.contentType && (this.contentType = n4, this.headers += `content-type: ${n4}\r
`), this.body = e4.stream, this.contentLength = e4.length;
        } else l.isBlobLike(o3) && null == this.contentType && o3.type && (this.contentType = o3.type, this.headers += `content-type: ${o3.type}\r
`);
        l.validateHandler(f, s3, p2), this.servername = l.getServerName(this.host), this[g] = f, u.create.hasSubscribers && u.create.publish({ request: this });
      }
      onBodySent(e3) {
        if (this[g].onBodySent) try {
          return this[g].onBodySent(e3);
        } catch (e4) {
          this.abort(e4);
        }
      }
      onRequestSent() {
        if (u.bodySent.hasSubscribers && u.bodySent.publish({ request: this }), this[g].onRequestSent) try {
          return this[g].onRequestSent();
        } catch (e3) {
          this.abort(e3);
        }
      }
      onConnect(e3) {
        if (o2(!this.aborted), o2(!this.completed), !this.error) return this.abort = e3, this[g].onConnect(e3);
        e3(this.error);
      }
      onHeaders(e3, n3, a3, t3) {
        o2(!this.aborted), o2(!this.completed), u.headers.hasSubscribers && u.headers.publish({ request: this, response: { statusCode: e3, headers: n3, statusText: t3 } });
        try {
          return this[g].onHeaders(e3, n3, a3, t3);
        } catch (e4) {
          this.abort(e4);
        }
      }
      onData(e3) {
        o2(!this.aborted), o2(!this.completed);
        try {
          return this[g].onData(e3);
        } catch (e4) {
          return this.abort(e4), false;
        }
      }
      onUpgrade(e3, n3, a3) {
        return o2(!this.aborted), o2(!this.completed), this[g].onUpgrade(e3, n3, a3);
      }
      onComplete(e3) {
        this.onFinally(), o2(!this.aborted), this.completed = true, u.trailers.hasSubscribers && u.trailers.publish({ request: this, trailers: e3 });
        try {
          return this[g].onComplete(e3);
        } catch (e4) {
          this.onError(e4);
        }
      }
      onError(e3) {
        if (this.onFinally(), u.error.hasSubscribers && u.error.publish({ request: this, error: e3 }), !this.aborted) return this.aborted = true, this[g].onError(e3);
      }
      onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
      }
      addHeader(e3, n3) {
        return k(this, e3, n3), this;
      }
      static [A](e3, n3, a3) {
        return new p(e3, n3, a3);
      }
      static [r2](e3, n3, a3) {
        const s3 = n3.headers;
        n3 = { ...n3, headers: null };
        const o3 = new p(e3, n3, a3);
        if (o3.headers = {}, Array.isArray(s3)) {
          if (s3.length % 2 != 0) throw new t2("headers array must be even");
          for (let e4 = 0; e4 < s3.length; e4 += 2) k(o3, s3[e4], s3[e4 + 1], true);
        } else if (s3 && "object" == typeof s3) {
          const e4 = Object.keys(s3);
          for (let n4 = 0; n4 < e4.length; n4++) {
            const a4 = e4[n4];
            k(o3, a4, s3[a4], true);
          }
        } else if (null != s3) throw new t2("headers must be an object or an array");
        return o3;
      }
      static [i2](e3) {
        const n3 = e3.split("\r\n"), a3 = {};
        for (const e4 of n3) {
          const [n4, t3] = e4.split(": ");
          null != t3 && 0 !== t3.length && (a3[n4] ? a3[n4] += `,${t3}` : a3[n4] = t3);
        }
        return a3;
      }
    }
    function T(e3, n3, a3) {
      if (n3 && "object" == typeof n3) throw new t2(`invalid ${e3} header`);
      if (n3 = null != n3 ? `${n3}` : "", null !== m.exec(n3)) throw new t2(`invalid ${e3} header`);
      return a3 ? n3 : `${e3}: ${n3}\r
`;
    }
    function k(e3, n3, a3, o3 = false) {
      if (a3 && "object" == typeof a3 && !Array.isArray(a3)) throw new t2(`invalid ${n3} header`);
      if (void 0 !== a3) if (null === e3.host && 4 === n3.length && "host" === n3.toLowerCase()) {
        if (null !== m.exec(a3)) throw new t2(`invalid ${n3} header`);
        e3.host = a3;
      } else if (null === e3.contentLength && 14 === n3.length && "content-length" === n3.toLowerCase()) {
        if (e3.contentLength = parseInt(a3, 10), !Number.isFinite(e3.contentLength)) throw new t2("invalid content-length header");
      } else if (null === e3.contentType && 12 === n3.length && "content-type" === n3.toLowerCase()) e3.contentType = a3, o3 ? e3.headers[n3] = T(n3, a3, o3) : e3.headers += T(n3, a3);
      else {
        if (17 === n3.length && "transfer-encoding" === n3.toLowerCase()) throw new t2("invalid transfer-encoding header");
        if (10 === n3.length && "connection" === n3.toLowerCase()) {
          const n4 = "string" == typeof a3 ? a3.toLowerCase() : null;
          if ("close" !== n4 && "keep-alive" !== n4) throw new t2("invalid connection header");
          "close" === n4 && (e3.reset = true);
        } else {
          if (10 === n3.length && "keep-alive" === n3.toLowerCase()) throw new t2("invalid keep-alive header");
          if (7 === n3.length && "upgrade" === n3.toLowerCase()) throw new t2("invalid upgrade header");
          if (6 === n3.length && "expect" === n3.toLowerCase()) throw new s2("expect header not supported");
          if (null === c.exec(n3)) throw new t2("invalid header key");
          if (Array.isArray(a3)) for (let t3 = 0; t3 < a3.length; t3++) o3 ? e3.headers[n3] ? e3.headers[n3] += `,${T(n3, a3[t3], o3)}` : e3.headers[n3] = T(n3, a3[t3], o3) : e3.headers += T(n3, a3[t3]);
          else o3 ? e3.headers[n3] = T(n3, a3, o3) : e3.headers += T(n3, a3);
        }
      }
    }
    e2.exports = p;
  }