// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 74576 range:11143136..11153143
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74576: (e, t, r) => {
    "use strict";
    const { InvalidArgumentError: n, NotSupportedError: s } = r(48762), o = r(42613), { kHTTP2BuildRequest: i, kHTTP2CopyHeaders: a, kHTTP1BuildRequest: c } = r(15532), l = r(83589), u = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, d = /[^\t\x20-\x7e\x80-\xff]/, p = /[^\u0021-\u00ff]/, m = /* @__PURE__ */ Symbol("handler"), h = {};
    let f;
    try {
      const e2 = r(31637);
      h.create = e2.channel("undici:request:create"), h.bodySent = e2.channel("undici:request:bodySent"), h.headers = e2.channel("undici:request:headers"), h.trailers = e2.channel("undici:request:trailers"), h.error = e2.channel("undici:request:error");
    } catch {
      h.create = { hasSubscribers: false }, h.bodySent = { hasSubscribers: false }, h.headers = { hasSubscribers: false }, h.trailers = { hasSubscribers: false }, h.error = { hasSubscribers: false };
    }
    class g {
      constructor(e2, { path: t2, method: s2, body: o2, headers: i2, query: a2, idempotent: c2, blocking: d2, upgrade: g2, headersTimeout: y2, bodyTimeout: v, reset: _, throwOnError: A, expectContinue: S }, b) {
        if ("string" != typeof t2) throw new n("path must be a string");
        if ("/" !== t2[0] && !t2.startsWith("http://") && !t2.startsWith("https://") && "CONNECT" !== s2) throw new n("path must be an absolute URL or start with a slash");
        if (null !== p.exec(t2)) throw new n("invalid request path");
        if ("string" != typeof s2) throw new n("method must be a string");
        if (null === u.exec(s2)) throw new n("invalid request method");
        if (g2 && "string" != typeof g2) throw new n("upgrade must be a string");
        if (null != y2 && (!Number.isFinite(y2) || y2 < 0)) throw new n("invalid headersTimeout");
        if (null != v && (!Number.isFinite(v) || v < 0)) throw new n("invalid bodyTimeout");
        if (null != _ && "boolean" != typeof _) throw new n("invalid reset");
        if (null != S && "boolean" != typeof S) throw new n("invalid expectContinue");
        if (this.headersTimeout = y2, this.bodyTimeout = v, this.throwOnError = true === A, this.method = s2, this.abort = null, null == o2) this.body = null;
        else if (l.isStream(o2)) {
          this.body = o2;
          const e3 = this.body._readableState;
          e3 && e3.autoDestroy || (this.endHandler = function() {
            l.destroy(this);
          }, this.body.on("end", this.endHandler)), this.errorHandler = (e4) => {
            this.abort ? this.abort(e4) : this.error = e4;
          }, this.body.on("error", this.errorHandler);
        } else if (l.isBuffer(o2)) this.body = o2.byteLength ? o2 : null;
        else if (ArrayBuffer.isView(o2)) this.body = o2.buffer.byteLength ? Buffer.from(o2.buffer, o2.byteOffset, o2.byteLength) : null;
        else if (o2 instanceof ArrayBuffer) this.body = o2.byteLength ? Buffer.from(o2) : null;
        else if ("string" == typeof o2) this.body = o2.length ? Buffer.from(o2) : null;
        else {
          if (!(l.isFormDataLike(o2) || l.isIterable(o2) || l.isBlobLike(o2))) throw new n("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
          this.body = o2;
        }
        if (this.completed = false, this.aborted = false, this.upgrade = g2 || null, this.path = a2 ? l.buildURL(t2, a2) : t2, this.origin = e2, this.idempotent = c2 ?? ("HEAD" === s2 || "GET" === s2), this.blocking = d2 ?? false, this.reset = _ ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = null != S && S, Array.isArray(i2)) {
          if (i2.length % 2 != 0) throw new n("headers array must be even");
          for (let e3 = 0; e3 < i2.length; e3 += 2) w(this, i2[e3], i2[e3 + 1]);
        } else if (i2 && "object" == typeof i2) {
          const e3 = Object.keys(i2);
          for (let t3 = 0; t3 < e3.length; t3++) {
            const r2 = e3[t3];
            w(this, r2, i2[r2]);
          }
        } else if (null != i2) throw new n("headers must be an object or an array");
        if (l.isFormDataLike(this.body)) {
          if (l.nodeMajor < 16 || 16 === l.nodeMajor && l.nodeMinor < 8) throw new n("Form-Data bodies are only supported in node v16.8 and newer.");
          f || (f = r(29608).extractBody);
          const [e3, t3] = f(o2);
          null == this.contentType && (this.contentType = t3, this.headers += `content-type: ${t3}\r
`), this.body = e3.stream, this.contentLength = e3.length;
        } else l.isBlobLike(o2) && null == this.contentType && o2.type && (this.contentType = o2.type, this.headers += `content-type: ${o2.type}\r
`);
        l.validateHandler(b, s2, g2), this.servername = l.getServerName(this.host), this[m] = b, h.create.hasSubscribers && h.create.publish({ request: this });
      }
      onBodySent(e2) {
        if (this[m].onBodySent) try {
          return this[m].onBodySent(e2);
        } catch (e3) {
          this.abort(e3);
        }
      }
      onRequestSent() {
        if (h.bodySent.hasSubscribers && h.bodySent.publish({ request: this }), this[m].onRequestSent) try {
          return this[m].onRequestSent();
        } catch (e2) {
          this.abort(e2);
        }
      }
      onConnect(e2) {
        if (o(!this.aborted), o(!this.completed), !this.error) return this.abort = e2, this[m].onConnect(e2);
        e2(this.error);
      }
      onHeaders(e2, t2, r2, n2) {
        o(!this.aborted), o(!this.completed), h.headers.hasSubscribers && h.headers.publish({ request: this, response: { statusCode: e2, headers: t2, statusText: n2 } });
        try {
          return this[m].onHeaders(e2, t2, r2, n2);
        } catch (e3) {
          this.abort(e3);
        }
      }
      onData(e2) {
        o(!this.aborted), o(!this.completed);
        try {
          return this[m].onData(e2);
        } catch (e3) {
          return this.abort(e3), false;
        }
      }
      onUpgrade(e2, t2, r2) {
        return o(!this.aborted), o(!this.completed), this[m].onUpgrade(e2, t2, r2);
      }
      onComplete(e2) {
        this.onFinally(), o(!this.aborted), this.completed = true, h.trailers.hasSubscribers && h.trailers.publish({ request: this, trailers: e2 });
        try {
          return this[m].onComplete(e2);
        } catch (e3) {
          this.onError(e3);
        }
      }
      onError(e2) {
        if (this.onFinally(), h.error.hasSubscribers && h.error.publish({ request: this, error: e2 }), !this.aborted) return this.aborted = true, this[m].onError(e2);
      }
      onFinally() {
        this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
      }
      addHeader(e2, t2) {
        return w(this, e2, t2), this;
      }
      static [c](e2, t2, r2) {
        return new g(e2, t2, r2);
      }
      static [i](e2, t2, r2) {
        const s2 = t2.headers;
        t2 = { ...t2, headers: null };
        const o2 = new g(e2, t2, r2);
        if (o2.headers = {}, Array.isArray(s2)) {
          if (s2.length % 2 != 0) throw new n("headers array must be even");
          for (let e3 = 0; e3 < s2.length; e3 += 2) w(o2, s2[e3], s2[e3 + 1], true);
        } else if (s2 && "object" == typeof s2) {
          const e3 = Object.keys(s2);
          for (let t3 = 0; t3 < e3.length; t3++) {
            const r3 = e3[t3];
            w(o2, r3, s2[r3], true);
          }
        } else if (null != s2) throw new n("headers must be an object or an array");
        return o2;
      }
      static [a](e2) {
        const t2 = e2.split("\r\n"), r2 = {};
        for (const e3 of t2) {
          const [t3, n2] = e3.split(": ");
          null != n2 && 0 !== n2.length && (r2[t3] ? r2[t3] += `,${n2}` : r2[t3] = n2);
        }
        return r2;
      }
    }
    function y(e2, t2, r2) {
      if (t2 && "object" == typeof t2) throw new n(`invalid ${e2} header`);
      if (t2 = null != t2 ? `${t2}` : "", null !== d.exec(t2)) throw new n(`invalid ${e2} header`);
      return r2 ? t2 : `${e2}: ${t2}\r
`;
    }
    function w(e2, t2, r2, o2 = false) {
      if (r2 && "object" == typeof r2 && !Array.isArray(r2)) throw new n(`invalid ${t2} header`);
      if (void 0 !== r2) if (null === e2.host && 4 === t2.length && "host" === t2.toLowerCase()) {
        if (null !== d.exec(r2)) throw new n(`invalid ${t2} header`);
        e2.host = r2;
      } else if (null === e2.contentLength && 14 === t2.length && "content-length" === t2.toLowerCase()) {
        if (e2.contentLength = parseInt(r2, 10), !Number.isFinite(e2.contentLength)) throw new n("invalid content-length header");
      } else if (null === e2.contentType && 12 === t2.length && "content-type" === t2.toLowerCase()) e2.contentType = r2, o2 ? e2.headers[t2] = y(t2, r2, o2) : e2.headers += y(t2, r2);
      else {
        if (17 === t2.length && "transfer-encoding" === t2.toLowerCase()) throw new n("invalid transfer-encoding header");
        if (10 === t2.length && "connection" === t2.toLowerCase()) {
          const t3 = "string" == typeof r2 ? r2.toLowerCase() : null;
          if ("close" !== t3 && "keep-alive" !== t3) throw new n("invalid connection header");
          "close" === t3 && (e2.reset = true);
        } else {
          if (10 === t2.length && "keep-alive" === t2.toLowerCase()) throw new n("invalid keep-alive header");
          if (7 === t2.length && "upgrade" === t2.toLowerCase()) throw new n("invalid upgrade header");
          if (6 === t2.length && "expect" === t2.toLowerCase()) throw new s("expect header not supported");
          if (null === u.exec(t2)) throw new n("invalid header key");
          if (Array.isArray(r2)) for (let n2 = 0; n2 < r2.length; n2++) o2 ? e2.headers[t2] ? e2.headers[t2] += `,${y(t2, r2[n2], o2)}` : e2.headers[t2] = y(t2, r2[n2], o2) : e2.headers += y(t2, r2[n2]);
          else o2 ? e2.headers[t2] = y(t2, r2, o2) : e2.headers += y(t2, r2);
        }
      }
    }
    e.exports = g;
  }