// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 66948 range:2004204..2025199
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66948: (e, t, r) => {
    const { Readable: n } = r(57075), { NoOpLogger: o, normalizeProvider: s } = r(42997), { HttpResponse: i, HttpRequest: a } = r(73931), { parseRfc7231DateTime: l, v4: c } = r(96851), { hasOwn: u } = r(11255), d = (e2) => e2?.body instanceof n || "undefined" != typeof ReadableStream && e2?.body instanceof ReadableStream, p = ["AccessDeniedException", "AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"], h = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"], m = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"], f = [500, 502, 503, 504], g = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"], y = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND", "EAI_AGAIN"], v = (e2) => void 0 !== e2?.$retryable, w = (e2) => p.includes(e2.name), b = (e2) => e2.$metadata?.clockSkewCorrected, _ = (e2) => {
      const t2 = /* @__PURE__ */ new Set(["Failed to fetch", "NetworkError when attempting to fetch resource", "The Internet connection appears to be offline", "Load failed", "Network request failed"]);
      return !!(e2 && e2 instanceof TypeError) && t2.has(e2.message);
    }, S = (e2) => 429 === e2.$metadata?.httpStatusCode || h.includes(e2.name) || 1 == e2.$retryable?.throttling, x = (e2, t2 = 0) => v(e2) || b(e2) || "InvalidSignatureException" === e2.name && e2.message?.includes("Signature expired") || m.includes(e2.name) || g.includes(e2?.code || "") || y.includes(e2?.code || "") || f.includes(e2.$metadata?.httpStatusCode || 0) || _(e2) || E(e2) || void 0 !== e2.cause && t2 <= 10 && x(e2.cause, t2 + 1), k = (e2) => {
      if (void 0 !== e2.$metadata?.httpStatusCode) {
        const t2 = e2.$metadata.httpStatusCode;
        return 500 <= t2 && t2 <= 599 && !x(e2);
      }
      return false;
    };
    function E(e2) {
      return "ERR_HTTP2_STREAM_ERROR" === e2.code && e2.message.includes("NGHTTP2_REFUSED_STREAM");
    }
    const T = 2e4, C = 500, I = "amz-sdk-invocation-id", A = "amz-sdk-request";
    function P(e2, t2) {
      if (i.isInstance(e2)) for (const r2 in e2.headers) {
        if (!u(e2.headers, r2)) continue;
        const n2 = r2.toLowerCase();
        if ("retry-after" === n2) {
          const n3 = e2.headers[r2];
          let o2 = NaN;
          if (n3.endsWith("GMT")) try {
            o2 = (l(n3).getTime() - Date.now()) / 1e3;
          } catch (e3) {
            t2?.trace?.("Failed to parse retry-after header"), t2?.trace?.(e3);
          }
          else n3.match(/ GMT, ((\d+)|(\d+\.\d+))$/) ? o2 = Number(n3.match(/ GMT, ([\d.]+)$/)?.[1]) : n3.match(/^((\d+)|(\d+\.\d+))$/) ? o2 = Number(n3) : Date.parse(n3) >= Date.now() && (o2 = (Date.parse(n3) - Date.now()) / 1e3);
          if (isNaN(o2)) return;
          return new Date(Date.now() + 1e3 * o2);
        }
        if ("x-amz-retry-after" === n2) {
          const n3 = e2.headers[r2], o2 = Number(n3);
          return isNaN(o2) ? void t2?.trace?.(`Failed to parse x-amz-retry-after=${n3}`) : new Date(Date.now() + o2);
        }
      }
    }
    const M = (e2) => e2 instanceof Error ? e2 : e2 instanceof Object ? Object.assign(new Error(), e2) : "string" == typeof e2 ? new Error(e2) : new Error(`AWS SDK error wrapper for ${e2}`);
    function R(e2) {
      return (t2) => (r2, n2) => async (s2) => {
        let i2 = await t2.retryStrategy();
        const l2 = await t2.maxAttempts();
        if (!D(i2)) return i2?.mode && (n2.userAgent = [...n2.userAgent || [], ["cfg/retry-mode", i2.mode]]), i2.retry(r2, s2);
        {
          let u2 = await i2.acquireInitialRetryToken((n2.partition_id ?? "") + (n2.__retryLongPoll ? ":longpoll" : "")), d2 = new Error(), p2 = 0, h2 = 0;
          const { request: m2 } = s2, f2 = a.isInstance(m2);
          for (f2 && (m2.headers[I] = c()); ; ) try {
            f2 && (m2.headers[A] = `attempt=${p2 + 1}; max=${l2}`);
            const { response: e3, output: t3 } = await r2(s2);
            return i2.recordSuccess(u2), t3.$metadata.attempts = p2 + 1, t3.$metadata.totalRetryDelay = h2, { response: e3, output: t3 };
          } catch (r3) {
            const s3 = N(r3, t2.logger);
            if (d2 = M(r3), f2 && e2(m2)) throw (n2.logger instanceof o ? console : n2.logger)?.warn("An error was encountered in a non-retryable streaming request."), d2;
            try {
              u2 = await i2.refreshRetryTokenForRetry(u2, s3);
            } catch (e3) {
              throw d2.$metadata || (d2.$metadata = {}), d2.$metadata.attempts = p2 + 1, d2.$metadata.totalRetryDelay = h2, d2;
            }
            p2 = u2.getRetryCount();
            const a2 = u2.getRetryDelay();
            h2 += (u2?.$retryLog?.acquisitionDelay ?? 0) + a2, a2 > 0 && await O(a2);
          }
        }
      };
    }
    const O = (e2) => new Promise((t2) => setTimeout(t2, e2)), D = (e2) => void 0 !== e2.acquireInitialRetryToken && void 0 !== e2.refreshRetryTokenForRetry && void 0 !== e2.recordSuccess, N = (e2, t2) => {
      const r2 = { error: e2, errorType: F(e2) }, n2 = P(e2.$response, t2);
      return n2 && (r2.retryAfterHint = n2), r2;
    }, F = (e2) => S(e2) ? "THROTTLING" : x(e2) ? "TRANSIENT" : k(e2) ? "SERVER_ERROR" : "CLIENT_ERROR", L = { name: "retryMiddleware", tags: ["RETRY"], step: "finalizeRequest", priority: "high", override: true };
    class U {
      static setTimeoutFn = (e2, t2) => setTimeout(e2, t2);
      beta;
      minCapacity;
      minFillRate;
      scaleConstant;
      smooth;
      enabled = false;
      availableTokens = 0;
      lastMaxRate = 0;
      measuredTxRate = 0;
      requestCount = 0;
      fillRate;
      lastThrottleTime;
      lastTimestamp = 0;
      lastTxRateBucket;
      maxCapacity;
      timeWindow = 0;
      constructor(e2) {
        this.beta = e2?.beta ?? 0.7, this.minCapacity = e2?.minCapacity ?? 1, this.minFillRate = e2?.minFillRate ?? 0.5, this.scaleConstant = e2?.scaleConstant ?? 0.4, this.smooth = e2?.smooth ?? 0.8, this.lastThrottleTime = this.getCurrentTimeInSeconds(), this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      updateClientSendingRate(e2) {
        let t2;
        this.updateMeasuredRate();
        const r2 = e2;
        if ("THROTTLING" === r2?.errorType || S(r2?.error ?? e2)) {
          const e3 = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
          this.lastMaxRate = e3, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), t2 = this.cubicThrottle(e3), this.enableTokenBucket();
        } else this.calculateTimeWindow(), t2 = this.cubicSuccess(this.getCurrentTimeInSeconds());
        const n2 = Math.min(t2, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(n2);
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async acquireTokenBucket(e2) {
        if (this.enabled) {
          for (this.refillTokenBucket(); e2 > this.availableTokens; ) {
            const t2 = (e2 - this.availableTokens) / this.fillRate * 1e3;
            await new Promise((e3) => U.setTimeoutFn(e3, t2)), this.refillTokenBucket();
          }
          this.availableTokens = this.availableTokens - e2;
        }
      }
      refillTokenBucket() {
        const e2 = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) return void (this.lastTimestamp = e2);
        const t2 = (e2 - this.lastTimestamp) * this.fillRate;
        this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + t2), this.lastTimestamp = e2;
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(e2) {
        return this.getPrecise(e2 * this.beta);
      }
      cubicSuccess(e2) {
        return this.getPrecise(this.scaleConstant * Math.pow(e2 - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
      }
      enableTokenBucket() {
        this.enabled = true;
      }
      updateTokenBucketRate(e2) {
        this.refillTokenBucket(), this.fillRate = Math.max(e2, this.minFillRate), this.maxCapacity = Math.max(e2, this.minCapacity), this.availableTokens = Math.min(this.availableTokens, this.maxCapacity);
      }
      updateMeasuredRate() {
        const e2 = this.getCurrentTimeInSeconds(), t2 = Math.floor(2 * e2) / 2;
        if (this.requestCount++, t2 > this.lastTxRateBucket) {
          const e3 = this.requestCount / (t2 - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(e3 * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = t2;
        }
      }
      getPrecise(e2) {
        return parseFloat(e2.toFixed(8));
      }
    }
    class B {
      static v2026 = "undefined" != typeof process && "true" === process.env?.SMITHY_NEW_RETRIES_2026;
      static delay() {
        return B.v2026 ? 50 : 100;
      }
      static throttlingDelay() {
        return B.v2026 ? 1e3 : 500;
      }
      static cost() {
        return B.v2026 ? 14 : 5;
      }
      static throttlingCost() {
        return B.v2026 ? 5 : 10;
      }
      static modifiedCostType() {
        return B.v2026 ? "THROTTLING" : "TRANSIENT";
      }
    }
    class $ {
      x = B.delay();
      computeNextBackoffDelay(e2) {
        const t2 = Math.random() * Math.min(this.x * 2 ** e2, T);
        return Math.floor(t2);
      }
      setDelayBase(e2) {
        this.x = e2;
      }
    }
    class q {
      delay;
      count;
      cost;
      longPoll;
      $retryLog = { acquisitionDelay: 0 };
      constructor(e2, t2, r2, n2) {
        this.delay = e2, this.count = t2, this.cost = r2, this.longPoll = n2;
      }
      getRetryCount() {
        return this.count;
      }
      getRetryDelay() {
        return Math.min(T, this.delay);
      }
      getRetryCost() {
        return this.cost;
      }
      isLongPoll() {
        return this.longPoll;
      }
    }
    var j;
    !(function(e2) {
      e2.STANDARD = "standard", e2.ADAPTIVE = "adaptive";
    })(j || (j = {}));
    const J = 3, z = j.STANDARD, H = 1, W = 2, G = 3;
    let Y = class {
      mode = j.STANDARD;
      retryBackoffStrategy;
      capacity = C;
      maxAttemptsProvider;
      baseDelay;
      constructor(e2) {
        "number" == typeof e2 ? this.maxAttemptsProvider = async () => e2 : "function" == typeof e2 ? this.maxAttemptsProvider = e2 : e2 && "object" == typeof e2 && (this.maxAttemptsProvider = async () => e2.maxAttempts, this.baseDelay = e2.baseDelay, this.retryBackoffStrategy = e2.backoff), this.maxAttemptsProvider ??= async () => J, this.baseDelay ??= B.delay(), this.retryBackoffStrategy ??= new $();
      }
      async acquireInitialRetryToken(e2) {
        return new q(B.delay(), 0, void 0, B.v2026 && e2.includes(":longpoll"));
      }
      async refreshRetryTokenForRetry(e2, t2) {
        const r2 = await this.getMaxAttempts(), n2 = this.retryCode(e2, t2, r2), o2 = 0 === n2, s2 = e2.isLongPoll?.();
        if (o2 || s2) {
          const r3 = t2.errorType;
          this.retryBackoffStrategy.setDelayBase("THROTTLING" === r3 ? B.throttlingDelay() : this.baseDelay);
          const i2 = this.retryBackoffStrategy.computeNextBackoffDelay(e2.getRetryCount());
          let a2 = i2;
          if (t2.retryAfterHint instanceof Date && (a2 = Math.max(i2, Math.min(t2.retryAfterHint.getTime() - Date.now(), i2 + 5e3))), o2) {
            const t3 = this.getCapacityCost(r3);
            this.capacity -= t3;
            const n3 = new q(0, e2.getRetryCount() + 1, t3, e2.isLongPoll?.() ?? false);
            return await new Promise((e3) => setTimeout(e3, a2)), n3.$retryLog.acquisitionDelay = a2, n3;
          }
          {
            const e3 = B.v2026 && n2 === G && s2 ? a2 : 0;
            e3 > 0 && await new Promise((t3) => setTimeout(t3, e3));
          }
        }
        throw new Error("No retry token available");
      }
      recordSuccess(e2) {
        this.capacity = Math.min(C, this.capacity + (e2.getRetryCost() ?? 1));
      }
      getCapacity() {
        return this.capacity;
      }
      async maxAttempts() {
        return this.maxAttemptsProvider();
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch (e2) {
          return console.warn(`Max attempts provider could not resolve. Using default of ${J}`), J;
        }
      }
      retryCode(e2, t2, r2) {
        const n2 = e2.getRetryCount() + 1, o2 = this.isRetryableError(t2.errorType) ? 0 : H, s2 = n2 < r2 ? 0 : W, i2 = this.capacity >= this.getCapacityCost(t2.errorType) ? 0 : G;
        return o2 || s2 || i2;
      }
      getCapacityCost(e2) {
        return e2 === B.modifiedCostType() ? B.throttlingCost() : B.cost();
      }
      isRetryableError(e2) {
        return "THROTTLING" === e2 || "TRANSIENT" === e2;
      }
    }, V = class {
      mode = j.ADAPTIVE;
      rateLimiter;
      standardRetryStrategy;
      constructor(e2, t2) {
        const { rateLimiter: r2 } = t2 ?? {};
        this.rateLimiter = r2 ?? new U(), this.standardRetryStrategy = new Y(t2 ? { maxAttempts: "number" == typeof e2 ? e2 : 3, ...t2 } : e2);
      }
      async acquireInitialRetryToken(e2) {
        const t2 = await this.standardRetryStrategy.acquireInitialRetryToken(e2);
        return await this.rateLimiter.getSendToken(), t2;
      }
      async refreshRetryTokenForRetry(e2, t2) {
        this.rateLimiter.updateClientSendingRate(t2);
        const r2 = await this.standardRetryStrategy.refreshRetryTokenForRetry(e2, t2);
        return await this.rateLimiter.getSendToken(), r2;
      }
      recordSuccess(e2) {
        this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e2);
      }
      async maxAttemptsProvider() {
        return this.standardRetryStrategy.maxAttempts();
      }
    };
    const K = (e2, t2) => Math.floor(Math.min(T, Math.random() * 2 ** t2 * e2)), Z = (e2) => !!e2 && (v(e2) || w(e2) || S(e2) || x(e2));
    class X {
      maxAttemptsProvider;
      retryDecider;
      delayDecider;
      retryQuota;
      mode = j.STANDARD;
      constructor(e2, t2) {
        this.maxAttemptsProvider = e2, this.retryDecider = t2?.retryDecider ?? Z, this.delayDecider = t2?.delayDecider ?? K, this.retryQuota = t2?.retryQuota ?? ((e3) => {
          const t3 = e3;
          let r2 = e3;
          const n2 = (e4) => "TimeoutError" === e4.name ? 10 : 5, o2 = (e4) => n2(e4) <= r2;
          return Object.freeze({ hasRetryTokens: o2, retrieveRetryTokens: (e4) => {
            if (!o2(e4)) throw new Error("No retry token available");
            const t4 = n2(e4);
            return r2 -= t4, t4;
          }, releaseRetryTokens: (e4) => {
            r2 += e4 ?? 1, r2 = Math.min(r2, t3);
          } });
        })(C);
      }
      shouldRetry(e2, t2, r2) {
        return t2 < r2 && this.retryDecider(e2) && this.retryQuota.hasRetryTokens(e2);
      }
      async getMaxAttempts() {
        let e2;
        try {
          e2 = await this.maxAttemptsProvider();
        } catch (t2) {
          e2 = J;
        }
        return e2;
      }
      async retry(e2, t2, r2) {
        let n2, o2 = 0, s2 = 0;
        const i2 = await this.getMaxAttempts(), { request: l2 } = t2;
        for (a.isInstance(l2) && (l2.headers[I] = c()); ; ) try {
          a.isInstance(l2) && (l2.headers[A] = `attempt=${o2 + 1}; max=${i2}`), r2?.beforeRequest && await r2.beforeRequest();
          const { response: c2, output: u2 } = await e2(t2);
          return r2?.afterRequest && r2.afterRequest(c2), this.retryQuota.releaseRetryTokens(n2), u2.$metadata.attempts = o2 + 1, u2.$metadata.totalRetryDelay = s2, { response: c2, output: u2 };
        } catch (e3) {
          const t3 = M(e3);
          if (o2++, this.shouldRetry(t3, o2, i2)) {
            n2 = this.retryQuota.retrieveRetryTokens(t3);
            const e4 = this.delayDecider(S(t3) ? 500 : 100, o2), r3 = Q(t3.$response), i3 = Math.max(r3 || 0, e4);
            s2 += i3, await new Promise((e5) => setTimeout(e5, i3));
            continue;
          }
          throw t3.$metadata || (t3.$metadata = {}), t3.$metadata.attempts = o2, t3.$metadata.totalRetryDelay = s2, t3;
        }
      }
    }
    const Q = (e2) => {
      if (!i.isInstance(e2)) return;
      const t2 = Object.keys(e2.headers).find((e3) => "retry-after" === e3.toLowerCase());
      if (!t2) return;
      const r2 = e2.headers[t2], n2 = Number(r2);
      if (!Number.isNaN(n2)) return Math.min(1e3 * n2, 2e4);
      const o2 = new Date(r2);
      return Math.min(o2.getTime() - Date.now(), 2e4);
    };
    const ee = "AWS_MAX_ATTEMPTS", te = "max_attempts", re = { environmentVariableSelector: (e2) => {
      const t2 = e2[ee];
      if (!t2) return;
      const r2 = parseInt(t2);
      if (Number.isNaN(r2)) throw new Error(`Environment variable ${ee} mast be a number, got "${t2}"`);
      return r2;
    }, configFileSelector: (e2) => {
      const t2 = e2[te];
      if (!t2) return;
      const r2 = parseInt(t2);
      if (Number.isNaN(r2)) throw new Error(`Shared config file entry ${te} mast be a number, got "${t2}"`);
      return r2;
    }, default: J }, ne = "AWS_RETRY_MODE", oe = "retry_mode", se = { environmentVariableSelector: (e2) => e2[ne], configFileSelector: (e2) => e2[oe], default: z }, ie = () => (e2) => async (t2) => {
      const { request: r2 } = t2;
      return a.isInstance(r2) && (delete r2.headers[I], delete r2.headers[A]), e2(t2);
    }, ae = { name: "omitRetryHeadersMiddleware", tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"], relation: "before", toMiddleware: "awsAuthMiddleware", override: true }, le = R(d), ce = (function(e2) {
      const t2 = R(e2);
      return (e3) => ({ applyToStack: (r2) => {
        r2.add(t2(e3), L);
      } });
    })(d);
    t.AdaptiveRetryStrategy = V, t.CONFIG_MAX_ATTEMPTS = te, t.CONFIG_RETRY_MODE = oe, t.ConfiguredRetryStrategy = class extends Y {
      computeNextBackoffDelay;
      constructor(e2, t2 = B.delay()) {
        super("function" == typeof e2 ? e2 : async () => e2), this.computeNextBackoffDelay = "number" == typeof t2 ? () => t2 : t2, this.retryBackoffStrategy.computeNextBackoffDelay = (e3) => {
          const t3 = e3 + 1;
          return this.computeNextBackoffDelay(t3);
        };
      }
    }, t.DEFAULT_MAX_ATTEMPTS = J, t.DEFAULT_RETRY_DELAY_BASE = 100, t.DEFAULT_RETRY_MODE = z, t.DefaultRateLimiter = U, t.DeprecatedAdaptiveRetryStrategy = class extends X {
      rateLimiter;
      constructor(e2, t2) {
        const { rateLimiter: r2, ...n2 } = t2 ?? {};
        super(e2, n2), this.rateLimiter = r2 ?? new U(), this.mode = j.ADAPTIVE;
      }
      async retry(e2, t2) {
        return super.retry(e2, t2, { beforeRequest: async () => this.rateLimiter.getSendToken(), afterRequest: (e3) => {
          this.rateLimiter.updateClientSendingRate(e3);
        } });
      }
    }, t.DeprecatedStandardRetryStrategy = X, t.ENV_MAX_ATTEMPTS = ee, t.ENV_RETRY_MODE = ne, t.INITIAL_RETRY_TOKENS = C, t.INVOCATION_ID_HEADER = I, t.MAXIMUM_RETRY_DELAY = T, t.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = re, t.NODE_RETRY_MODE_CONFIG_OPTIONS = se, t.NO_RETRY_INCREMENT = 1, t.REQUEST_HEADER = A, t.RETRY_COST = 5, t.RETRY_MODES = j, t.Retry = B, t.StandardRetryStrategy = Y, t.THROTTLING_RETRY_DELAY_BASE = 500, t.TIMEOUT_RETRY_COST = 10, t.defaultDelayDecider = K, t.defaultRetryDecider = Z, t.getOmitRetryHeadersPlugin = (e2) => ({ applyToStack: (e3) => {
      e3.addRelativeTo(ie(), ae);
    } }), t.getRetryAfterHint = function(e2, t2) {
      return P(e2, t2);
    }, t.getRetryPlugin = ce, t.isBrowserNetworkError = _, t.isClockSkewCorrectedError = b, t.isClockSkewError = w, t.isNodeJsHttp2TransientError = E, t.isRetryableByTrait = v, t.isServerError = k, t.isThrottlingError = S, t.isTransientError = x, t.omitRetryHeadersMiddleware = ie, t.omitRetryHeadersMiddlewareOptions = ae, t.resolveRetryConfig = (e2, t2) => {
      const { retryStrategy: r2, retryMode: n2 } = e2, { defaultMaxAttempts: o2 = J, defaultBaseDelay: i2 = B.delay() } = t2 ?? {}, a2 = s(e2.maxAttempts ?? o2);
      let l2 = r2 ? Promise.resolve(r2) : void 0;
      return Object.assign(e2, { maxAttempts: a2, retryStrategy: () => l2 ??= (async () => {
        const e3 = await a2();
        return await s(n2)() === j.ADAPTIVE ? new V(a2, { maxAttempts: e3, baseDelay: i2 }) : new Y({ maxAttempts: e3, baseDelay: i2 });
      })() });
    }, t.retryMiddleware = le, t.retryMiddlewareOptions = L;
  }