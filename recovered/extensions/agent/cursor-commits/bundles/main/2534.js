// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2534 range:208068..213419
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2534: (e2, n2, a2) => {
    const t2 = a2(2613), { kRetryHandlerDefaultRetry: s2 } = a2(8832), { RequestRetryError: o2 } = a2(7902), { isDisturbed: r2, parseHeaders: i2, parseRangeHeader: A } = a2(9361);
    class l {
      constructor(e3, n3) {
        const { retryOptions: a3, ...t3 } = e3, { retry: o3, maxRetries: r3, maxTimeout: i3, minTimeout: A2, timeoutFactor: c, methods: m, errorCodes: d, retryAfter: g, statusCodes: u } = a3 ?? {};
        this.dispatch = n3.dispatch, this.handler = n3.handler, this.opts = t3, this.abort = null, this.aborted = false, this.retryOpts = { retry: o3 ?? l[s2], retryAfter: g ?? true, maxTimeout: i3 ?? 3e4, timeout: A2 ?? 500, timeoutFactor: c ?? 2, maxRetries: r3 ?? 5, methods: m ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"], statusCodes: u ?? [500, 502, 503, 504, 429], errorCodes: d ?? ["ECONNRESET", "ECONNREFUSED", "ENOTFOUND", "ENETDOWN", "ENETUNREACH", "EHOSTDOWN", "EHOSTUNREACH", "EPIPE"] }, this.retryCount = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((e4) => {
          this.aborted = true, this.abort ? this.abort(e4) : this.reason = e4;
        });
      }
      onRequestSent() {
        this.handler.onRequestSent && this.handler.onRequestSent();
      }
      onUpgrade(e3, n3, a3) {
        this.handler.onUpgrade && this.handler.onUpgrade(e3, n3, a3);
      }
      onConnect(e3) {
        this.aborted ? e3(this.reason) : this.abort = e3;
      }
      onBodySent(e3) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e3);
      }
      static [s2](e3, { state: n3, opts: a3 }, t3) {
        const { statusCode: s3, code: o3, headers: r3 } = e3, { method: i3, retryOptions: A2 } = a3, { maxRetries: l2, timeout: c, maxTimeout: m, timeoutFactor: d, statusCodes: g, errorCodes: u, methods: E } = A2;
        let { counter: p, currentTimeout: T } = n3;
        if (T = null != T && T > 0 ? T : c, o3 && "UND_ERR_REQ_RETRY" !== o3 && "UND_ERR_SOCKET" !== o3 && !u.includes(o3)) return void t3(e3);
        if (Array.isArray(E) && !E.includes(i3)) return void t3(e3);
        if (null != s3 && Array.isArray(g) && !g.includes(s3)) return void t3(e3);
        if (p > l2) return void t3(e3);
        let k = null != r3 && r3["retry-after"];
        k && (k = Number(k), k = isNaN(k) ? (function(e4) {
          const n4 = Date.now();
          return new Date(e4).getTime() - n4;
        })(k) : 1e3 * k);
        const I = k > 0 ? Math.min(k, m) : Math.min(T * d ** p, m);
        n3.currentTimeout = I, setTimeout(() => t3(null), I);
      }
      onHeaders(e3, n3, a3, s3) {
        const r3 = i2(n3);
        if (this.retryCount += 1, e3 >= 300) return this.abort(new o2("Request failed", e3, { headers: r3, count: this.retryCount })), false;
        if (null != this.resume) {
          if (this.resume = null, 206 !== e3) return true;
          const n4 = A(r3["content-range"]);
          if (!n4) return this.abort(new o2("Content-Range mismatch", e3, { headers: r3, count: this.retryCount })), false;
          if (null != this.etag && this.etag !== r3.etag) return this.abort(new o2("ETag mismatch", e3, { headers: r3, count: this.retryCount })), false;
          const { start: s4, size: i3, end: l3 = i3 } = n4;
          return t2(this.start === s4, "content-range mismatch"), t2(null == this.end || this.end === l3, "content-range mismatch"), this.resume = a3, true;
        }
        if (null == this.end) {
          if (206 === e3) {
            const o3 = A(r3["content-range"]);
            if (null == o3) return this.handler.onHeaders(e3, n3, a3, s3);
            const { start: i3, size: l3, end: c = l3 } = o3;
            t2(null != i3 && Number.isFinite(i3) && this.start !== i3, "content-range mismatch"), t2(Number.isFinite(i3)), t2(null != c && Number.isFinite(c) && this.end !== c, "invalid content-length"), this.start = i3, this.end = c;
          }
          if (null == this.end) {
            const e4 = r3["content-length"];
            this.end = null != e4 ? Number(e4) : null;
          }
          return t2(Number.isFinite(this.start)), t2(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = a3, this.etag = null != r3.etag ? r3.etag : null, this.handler.onHeaders(e3, n3, a3, s3);
        }
        const l2 = new o2("Request failed", e3, { headers: r3, count: this.retryCount });
        return this.abort(l2), false;
      }
      onData(e3) {
        return this.start += e3.length, this.handler.onData(e3);
      }
      onComplete(e3) {
        return this.retryCount = 0, this.handler.onComplete(e3);
      }
      onError(e3) {
        if (this.aborted || r2(this.opts.body)) return this.handler.onError(e3);
        this.retryOpts.retry(e3, { state: { counter: this.retryCount++, currentTimeout: this.retryAfter }, opts: { retryOptions: this.retryOpts, ...this.opts } }, function(e4) {
          if (null != e4 || this.aborted || r2(this.opts.body)) return this.handler.onError(e4);
          0 !== this.start && (this.opts = { ...this.opts, headers: { ...this.opts.headers, range: `bytes=${this.start}-${this.end ?? ""}` } });
          try {
            this.dispatch(this.opts, this);
          } catch (e5) {
            this.handler.onError(e5);
          }
        }.bind(this));
      }
    }
    e2.exports = l;
  }