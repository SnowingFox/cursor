// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3308 range:599657..609710
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3308: (e2, a2, n2) => {
    "use strict";
    const { InvalidArgumentError: t2, NotSupportedError: s2 } = n2(7902), o2 = n2(2613), { kHTTP2BuildRequest: r2, kHTTP2CopyHeaders: i2, kHTTP1BuildRequest: l } = n2(8832), d = n2(9361), m = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, c = /[^\t\x20-\x7e\x80-\xff]/, p = /[^\u0021-\u00ff]/, A = /* @__PURE__ */ Symbol("handler"), u = {};
    let g;
    try {
      const e3 = n2(1637);
      u.create = e3.channel("undici:request:create"), u.bodySent = e3.channel("undici:request:bodySent"), u.headers = e3.channel("undici:request:headers"), u.trailers = e3.channel("undici:request:trailers"), u.error = e3.channel("undici:request:error");
    } catch {
      u.create = { hasSubscribers: false }, u.bodySent = { hasSubscribers: false }, u.headers = { hasSubscribers: false }, u.trailers = { hasSubscribers: false }, u.error = { hasSubscribers: false };
    }
    class T {
      constructor(e3, { path: a3, method: s3, body: o3, headers: r3, query: i3, idempotent: l2, blocking: c2, upgrade: T2, headersTimeout: h2, bodyTimeout: _, reset: E, throwOnError: f, expectContinue: C }, I) {
        if ("string" != typeof a3) throw new t2("path must be a string");
        if ("/" !== a3[0] && !a3.startsWith("http://") && !a3.startsWith("https://") && "CONNECT" !== s3) throw new t2("path must be an absolute URL or start with a slash");
        if (null !== p.exec(a3)) throw new t2("invalid request path");
        if ("string" != typeof s3) throw new t2("method must be a string");
        if (null === m.exec(s3)) throw new t2("invalid request method");
        if (T2 && "string" != typeof T2) throw new t2("upgrade must be a string");
        if (null != h2 && (!Number.isFinite(h2) || h2 < 0)) throw new t2("invalid headersTimeout");
        if (null != _ && (!Number.isFinite(_) || _ < 0)) throw new t2("invalid bodyTimeout");
        if (null != E && "boolean" != typeof E) throw new t2("invalid reset");
        if (null != C && "boolean" != typeof C) throw new t2("invalid expectContinue");
        if (this.headersTimeout = h2, this.bodyTimeout = _, this.throwOnError = true === f, this.method = s3, this.abort = null, null == o3) this.body = null;
        else if (d.isStream(o3)) {
          this.body = o3;
          const e4 = this.body._readableState;
          e4 && e4.autoDestroy || (this.endHandler = function() {
            d.destroy(this);
          }, this.body.on("end", this.endHandler)), this.errorHandler = (e5) => {
            this.abort ? this.abort(e5) : this.error = e5;
          }, this.body.on("error", this.errorHandler);
        } else if (d.isBuffer(o3)) this.body = o3.byteLength ? o3 : null;
        else if (ArrayBuffer.isView(o3)) this.body = o3.buffer.byteLength ? Buffer.from(o3.buffer, o3.byteOffset, o3.byteLength) : null;
        else if (o3 instanceof ArrayBuffer) this.body = o3.byteLength ? Buffer.from(o3) : null;
        else if ("string" == typeof o3) this.body = o3.length ? Buffer.from(o3) : null;
        else {
          if (!(d.isFormDataLike(o3) || d.isIterable(o3) || d.isBlobLike(o3))) throw new t2("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
          this.body = o3;
        }
        if (this.completed = false, this.aborted = false, this.upgrade = T2 || null, this.path = i3 ? d.buildURL(a3, i3) : a3, this.origin = e3, this.idempotent = l2 ?? ("HEAD" === s3 || "GET" === s3), this.blocking = c2 ?? false, this.reset = E ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != C && C, Array.isArray(r3)) {
          if (r3.length % 2 != 0) throw new t2("headers array must be even");
          for (let e4 = 0; e4 < r3.length; e4 += 2) k(this, r3[e4], r3[e4 + 1]);
        } else if (r3 && "object" == typeof r3) {
          const e4 = Object.keys(r3);
          for (let a4 = 0; a4 < e4.length; a4++) {
            const n3 = e4[a4];
            k(this, n3, r3[n3]);
          }
        } else if (null != r3) throw new t2("headers must be an object or an array");
        if (d.isFormDataLike(this.body)) {
          if (d.nodeMajor < 16 || 16 === d.nodeMajor && d.nodeMinor < 8) throw new t2("Form-Data bodies are only supported in node v16.8 and newer.");
          g || (g = n2(7052).extractBody);
          const [e4, a4] = g(o3);
          null == this.contentType && (this.contentType = a4, this.headers += `content-type: ${a4}\r
`), this.body = e4.stream, this.contentLength = e4.length;
        } else d.isBlobLike(o3) && null == this.contentType && o3.type && (this.contentType = o3.type, this.headers += `content-type: ${o3.type}\r
`);
        d.validateHandler(I, s3, T2), this.servername = d.getServerName(this.host), this[A] = I, u.create.hasSubscribers && u.create.publish({ request: this });
      }
      onBodySent(e3) {
        if (this[A].onBodySent) try {
          return this[A].onBodySent(e3);
        } catch (e4) {
          this.abort(e4);
        }
      }
      onRequestSent() {
        if (u.bodySent.hasSubscribers && u.bodySent.publish({ request: this }), this[A].onRequestSent) try {
          return this[A].onRequestSent();
        } catch (e3) {
          this.abort(e3);
        }
      }
      onConnect(e3) {
        if (o2(!this.aborted), o2(!this.completed), !this.error) return this.abort = e3, this[A].onConnect(e3);
        e3(this.error);
      }
      onHeaders(e3, a3, n3, t3) {
        o2(!this.aborted), o2(!this.completed), u.headers.hasSubscribers && u.headers.publish({ request: this, response: { statusCode: e3, headers: a3, statusText: t3 } });
        try {
          return this[A].onHeaders(e3, a3, n3, t3);
        } catch (e4) {
          this.abort(e4);
        }
      }
      onData(e3) {
        o2(!this.aborted), o2(!this.completed);
        try {
          return this[A].onData(e3);
        } catch (e4) {
          return this.abort(e4), false;
        }
      }
      onUpgrade(e3, a3, n3) {
        return o2(!this.aborted), o2(!this.completed), this[A].onUpgrade(e3, a3, n3);
      }
      onComplete(e3) {
        this.onFinally(), o2(!this.aborted), this.completed = true, u.trailers.hasSubscribers && u.trailers.publish({ request: this, trailers: e3 });
        try {
          return this[A].onComplete(e3);
        } catch (e4) {
          this.onError(e4);
        }
      }
      onError(e3) {
        if (this.onFinally(), u.error.hasSubscribers && u.error.publish({ request: this, error: e3 }), !this.aborted) return this.aborted = true, this[A].onError(e3);
      }
      onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
      }
      addHeader(e3, a3) {
        return k(this, e3, a3), this;
      }
      static [l](e3, a3, n3) {
        return new T(e3, a3, n3);
      }
      static [r2](e3, a3, n3) {
        const s3 = a3.headers;
        a3 = { ...a3, headers: null };
        const o3 = new T(e3, a3, n3);
        if (o3.headers = {}, Array.isArray(s3)) {
          if (s3.length % 2 != 0) throw new t2("headers array must be even");
          for (let e4 = 0; e4 < s3.length; e4 += 2) k(o3, s3[e4], s3[e4 + 1], true);
        } else if (s3 && "object" == typeof s3) {
          const e4 = Object.keys(s3);
          for (let a4 = 0; a4 < e4.length; a4++) {
            const n4 = e4[a4];
            k(o3, n4, s3[n4], true);
          }
        } else if (null != s3) throw new t2("headers must be an object or an array");
        return o3;
      }
      static [i2](e3) {
        const a3 = e3.split("\r\n"), n3 = {};
        for (const e4 of a3) {
          const [a4, t3] = e4.split(": ");
          null != t3 && 0 !== t3.length && (n3[a4] ? n3[a4] += `,${t3}` : n3[a4] = t3);
        }
        return n3;
      }
    }
    function h(e3, a3, n3) {
      if (a3 && "object" == typeof a3) throw new t2(`invalid ${e3} header`);
      if (a3 = null != a3 ? `${a3}` : "", null !== c.exec(a3)) throw new t2(`invalid ${e3} header`);
      return n3 ? a3 : `${e3}: ${a3}\r
`;
    }
    function k(e3, a3, n3, o3 = false) {
      if (n3 && "object" == typeof n3 && !Array.isArray(n3)) throw new t2(`invalid ${a3} header`);
      if (void 0 !== n3) if (null === e3.host && 4 === a3.length && "host" === a3.toLowerCase()) {
        if (null !== c.exec(n3)) throw new t2(`invalid ${a3} header`);
        e3.host = n3;
      } else if (null === e3.contentLength && 14 === a3.length && "content-length" === a3.toLowerCase()) {
        if (e3.contentLength = parseInt(n3, 10), !Number.isFinite(e3.contentLength)) throw new t2("invalid content-length header");
      } else if (null === e3.contentType && 12 === a3.length && "content-type" === a3.toLowerCase()) e3.contentType = n3, o3 ? e3.headers[a3] = h(a3, n3, o3) : e3.headers += h(a3, n3);
      else {
        if (17 === a3.length && "transfer-encoding" === a3.toLowerCase()) throw new t2("invalid transfer-encoding header");
        if (10 === a3.length && "connection" === a3.toLowerCase()) {
          const a4 = "string" == typeof n3 ? n3.toLowerCase() : null;
          if ("close" !== a4 && "keep-alive" !== a4) throw new t2("invalid connection header");
          "close" === a4 && (e3.reset = true);
        } else {
          if (10 === a3.length && "keep-alive" === a3.toLowerCase()) throw new t2("invalid keep-alive header");
          if (7 === a3.length && "upgrade" === a3.toLowerCase()) throw new t2("invalid upgrade header");
          if (6 === a3.length && "expect" === a3.toLowerCase()) throw new s2("expect header not supported");
          if (null === m.exec(a3)) throw new t2("invalid header key");
          if (Array.isArray(n3)) for (let t3 = 0; t3 < n3.length; t3++) o3 ? e3.headers[a3] ? e3.headers[a3] += `,${h(a3, n3[t3], o3)}` : e3.headers[a3] = h(a3, n3[t3], o3) : e3.headers += h(a3, n3[t3]);
          else o3 ? e3.headers[a3] = h(a3, n3, o3) : e3.headers += h(a3, n3);
        }
      }
    }
    e2.exports = T;
  }