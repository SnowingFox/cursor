// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2534 range:228376..233722
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2534: (e2, t2, A2) => {
    const n2 = A2(2613), { kRetryHandlerDefaultRetry: r2 } = A2(8832), { RequestRetryError: o2 } = A2(7902), { isDisturbed: s, parseHeaders: i, parseRangeHeader: a } = A2(9361);
    class c {
      constructor(e3, t3) {
        const { retryOptions: A3, ...n3 } = e3, { retry: o3, maxRetries: s2, maxTimeout: i2, minTimeout: a2, timeoutFactor: l, methods: u, errorCodes: g, retryAfter: E, statusCodes: h } = A3 ?? {};
        this.dispatch = t3.dispatch, this.handler = t3.handler, this.opts = n3, this.abort = null, this.aborted = false, this.retryOpts = { retry: o3 ?? c[r2], retryAfter: E ?? true, maxTimeout: i2 ?? 3e4, timeout: a2 ?? 500, timeoutFactor: l ?? 2, maxRetries: s2 ?? 5, methods: u ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"], statusCodes: h ?? [500, 502, 503, 504, 429], errorCodes: g ?? ["ECONNRESET", "ECONNREFUSED", "ENOTFOUND", "ENETDOWN", "ENETUNREACH", "EHOSTDOWN", "EHOSTUNREACH", "EPIPE"] }, this.retryCount = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((e4) => {
          this.aborted = true, this.abort ? this.abort(e4) : this.reason = e4;
        });
      }
      onRequestSent() {
        this.handler.onRequestSent && this.handler.onRequestSent();
      }
      onUpgrade(e3, t3, A3) {
        this.handler.onUpgrade && this.handler.onUpgrade(e3, t3, A3);
      }
      onConnect(e3) {
        this.aborted ? e3(this.reason) : this.abort = e3;
      }
      onBodySent(e3) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e3);
      }
      static [r2](e3, { state: t3, opts: A3 }, n3) {
        const { statusCode: r3, code: o3, headers: s2 } = e3, { method: i2, retryOptions: a2 } = A3, { maxRetries: c2, timeout: l, maxTimeout: u, timeoutFactor: g, statusCodes: E, errorCodes: h, methods: d } = a2;
        let { counter: I, currentTimeout: B } = t3;
        if (B = null != B && B > 0 ? B : l, o3 && "UND_ERR_REQ_RETRY" !== o3 && "UND_ERR_SOCKET" !== o3 && !h.includes(o3)) return void n3(e3);
        if (Array.isArray(d) && !d.includes(i2)) return void n3(e3);
        if (null != r3 && Array.isArray(E) && !E.includes(r3)) return void n3(e3);
        if (I > c2) return void n3(e3);
        let Q = null != s2 && s2["retry-after"];
        Q && (Q = Number(Q), Q = isNaN(Q) ? (function(e4) {
          const t4 = Date.now();
          return new Date(e4).getTime() - t4;
        })(Q) : 1e3 * Q);
        const f = Q > 0 ? Math.min(Q, u) : Math.min(B * g ** I, u);
        t3.currentTimeout = f, setTimeout(() => n3(null), f);
      }
      onHeaders(e3, t3, A3, r3) {
        const s2 = i(t3);
        if (this.retryCount += 1, e3 >= 300) return this.abort(new o2("Request failed", e3, { headers: s2, count: this.retryCount })), false;
        if (null != this.resume) {
          if (this.resume = null, 206 !== e3) return true;
          const t4 = a(s2["content-range"]);
          if (!t4) return this.abort(new o2("Content-Range mismatch", e3, { headers: s2, count: this.retryCount })), false;
          if (null != this.etag && this.etag !== s2.etag) return this.abort(new o2("ETag mismatch", e3, { headers: s2, count: this.retryCount })), false;
          const { start: r4, size: i2, end: c3 = i2 } = t4;
          return n2(this.start === r4, "content-range mismatch"), n2(null == this.end || this.end === c3, "content-range mismatch"), this.resume = A3, true;
        }
        if (null == this.end) {
          if (206 === e3) {
            const o3 = a(s2["content-range"]);
            if (null == o3) return this.handler.onHeaders(e3, t3, A3, r3);
            const { start: i2, size: c3, end: l = c3 } = o3;
            n2(null != i2 && Number.isFinite(i2) && this.start !== i2, "content-range mismatch"), n2(Number.isFinite(i2)), n2(null != l && Number.isFinite(l) && this.end !== l, "invalid content-length"), this.start = i2, this.end = l;
          }
          if (null == this.end) {
            const e4 = s2["content-length"];
            this.end = null != e4 ? Number(e4) : null;
          }
          return n2(Number.isFinite(this.start)), n2(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = A3, this.etag = null != s2.etag ? s2.etag : null, this.handler.onHeaders(e3, t3, A3, r3);
        }
        const c2 = new o2("Request failed", e3, { headers: s2, count: this.retryCount });
        return this.abort(c2), false;
      }
      onData(e3) {
        return this.start += e3.length, this.handler.onData(e3);
      }
      onComplete(e3) {
        return this.retryCount = 0, this.handler.onComplete(e3);
      }
      onError(e3) {
        if (this.aborted || s(this.opts.body)) return this.handler.onError(e3);
        this.retryOpts.retry(e3, { state: { counter: this.retryCount++, currentTimeout: this.retryAfter }, opts: { retryOptions: this.retryOpts, ...this.opts } }, function(e4) {
          if (null != e4 || this.aborted || s(this.opts.body)) return this.handler.onError(e4);
          0 !== this.start && (this.opts = { ...this.opts, headers: { ...this.opts.headers, range: `bytes=${this.start}-${this.end ?? ""}` } });
          try {
            this.dispatch(this.opts, this);
          } catch (e5) {
            this.handler.onError(e5);
          }
        }.bind(this));
      }
    }
    e2.exports = c;
  }