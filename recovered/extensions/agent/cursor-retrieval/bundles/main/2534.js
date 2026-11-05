// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 2534 range:483131..488482
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2534: (e2, a2, n2) => {
    const t2 = n2(2613), { kRetryHandlerDefaultRetry: s2 } = n2(8832), { RequestRetryError: o2 } = n2(7902), { isDisturbed: r2, parseHeaders: i2, parseRangeHeader: l } = n2(9361);
    class d {
      constructor(e3, a3) {
        const { retryOptions: n3, ...t3 } = e3, { retry: o3, maxRetries: r3, maxTimeout: i3, minTimeout: l2, timeoutFactor: m, methods: c, errorCodes: p, retryAfter: A, statusCodes: u } = n3 ?? {};
        this.dispatch = a3.dispatch, this.handler = a3.handler, this.opts = t3, this.abort = null, this.aborted = false, this.retryOpts = { retry: o3 ?? d[s2], retryAfter: A ?? true, maxTimeout: i3 ?? 3e4, timeout: l2 ?? 500, timeoutFactor: m ?? 2, maxRetries: r3 ?? 5, methods: c ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"], statusCodes: u ?? [500, 502, 503, 504, 429], errorCodes: p ?? ["ECONNRESET", "ECONNREFUSED", "ENOTFOUND", "ENETDOWN", "ENETUNREACH", "EHOSTDOWN", "EHOSTUNREACH", "EPIPE"] }, this.retryCount = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((e4) => {
          this.aborted = true, this.abort ? this.abort(e4) : this.reason = e4;
        });
      }
      onRequestSent() {
        this.handler.onRequestSent && this.handler.onRequestSent();
      }
      onUpgrade(e3, a3, n3) {
        this.handler.onUpgrade && this.handler.onUpgrade(e3, a3, n3);
      }
      onConnect(e3) {
        this.aborted ? e3(this.reason) : this.abort = e3;
      }
      onBodySent(e3) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e3);
      }
      static [s2](e3, { state: a3, opts: n3 }, t3) {
        const { statusCode: s3, code: o3, headers: r3 } = e3, { method: i3, retryOptions: l2 } = n3, { maxRetries: d2, timeout: m, maxTimeout: c, timeoutFactor: p, statusCodes: A, errorCodes: u, methods: g } = l2;
        let { counter: T, currentTimeout: h } = a3;
        if (h = null != h && h > 0 ? h : m, o3 && "UND_ERR_REQ_RETRY" !== o3 && "UND_ERR_SOCKET" !== o3 && !u.includes(o3)) return void t3(e3);
        if (Array.isArray(g) && !g.includes(i3)) return void t3(e3);
        if (null != s3 && Array.isArray(A) && !A.includes(s3)) return void t3(e3);
        if (T > d2) return void t3(e3);
        let k = null != r3 && r3["retry-after"];
        k && (k = Number(k), k = isNaN(k) ? (function(e4) {
          const a4 = Date.now();
          return new Date(e4).getTime() - a4;
        })(k) : 1e3 * k);
        const _ = k > 0 ? Math.min(k, c) : Math.min(h * p ** T, c);
        a3.currentTimeout = _, setTimeout(() => t3(null), _);
      }
      onHeaders(e3, a3, n3, s3) {
        const r3 = i2(a3);
        if (this.retryCount += 1, e3 >= 300) return this.abort(new o2("Request failed", e3, { headers: r3, count: this.retryCount })), false;
        if (null != this.resume) {
          if (this.resume = null, 206 !== e3) return true;
          const a4 = l(r3["content-range"]);
          if (!a4) return this.abort(new o2("Content-Range mismatch", e3, { headers: r3, count: this.retryCount })), false;
          if (null != this.etag && this.etag !== r3.etag) return this.abort(new o2("ETag mismatch", e3, { headers: r3, count: this.retryCount })), false;
          const { start: s4, size: i3, end: d3 = i3 } = a4;
          return t2(this.start === s4, "content-range mismatch"), t2(null == this.end || this.end === d3, "content-range mismatch"), this.resume = n3, true;
        }
        if (null == this.end) {
          if (206 === e3) {
            const o3 = l(r3["content-range"]);
            if (null == o3) return this.handler.onHeaders(e3, a3, n3, s3);
            const { start: i3, size: d3, end: m = d3 } = o3;
            t2(null != i3 && Number.isFinite(i3) && this.start !== i3, "content-range mismatch"), t2(Number.isFinite(i3)), t2(null != m && Number.isFinite(m) && this.end !== m, "invalid content-length"), this.start = i3, this.end = m;
          }
          if (null == this.end) {
            const e4 = r3["content-length"];
            this.end = null != e4 ? Number(e4) : null;
          }
          return t2(Number.isFinite(this.start)), t2(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = n3, this.etag = null != r3.etag ? r3.etag : null, this.handler.onHeaders(e3, a3, n3, s3);
        }
        const d2 = new o2("Request failed", e3, { headers: r3, count: this.retryCount });
        return this.abort(d2), false;
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
    e2.exports = d;
  }