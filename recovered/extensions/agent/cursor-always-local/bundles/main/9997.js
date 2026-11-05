// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9997 range:6241070..6247884
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9997: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.RewindableAsyncIterable = void 0, e2.shouldRetryOnError = u, e2.createStreamRetryInterceptor = function(t3, e3) {
      const r3 = { maxRetries: e3?.maxRetries ?? 3, baseDelayMs: e3?.baseDelayMs ?? 1e3, maxDelayMs: e3?.maxDelayMs ?? 3e4 };
      return (e4) => async (n3) => {
        try {
          if (await t3.checkFeatureGate("retry_interceptor_disabled")) return e4(n3);
        } catch (r4) {
          return t3.debugLog.warn("[StreamRetryInterceptor] Failed to check feature gate, skipping retry logic", r4), e4(n3);
        }
        if (n3.method.kind !== s2.MethodKind.BiDiStreaming && n3.method.kind !== s2.MethodKind.ClientStreaming && n3.method.kind !== s2.MethodKind.ServerStreaming) return e4(n3);
        const i3 = l(n3, r3);
        if (null === i3) return e4(n3);
        if (n3.method.kind === s2.MethodKind.BiDiStreaming || n3.method.kind === s2.MethodKind.ClientStreaming) {
          const t4 = new m(n3.message);
          n3 = { ...n3, message: t4 };
        }
        return d(t3, n3, i3, "StreamRetryInterceptor", () => e4(n3));
      };
    }, e2.createUnaryRetryInterceptor = function(t3, e3) {
      const r3 = { maxRetries: e3?.maxRetries ?? 3, baseDelayMs: e3?.baseDelayMs ?? 1e3, maxDelayMs: e3?.maxDelayMs ?? 3e4 };
      return (e4) => async (n3) => {
        try {
          if (await t3.checkFeatureGate("retry_interceptor_disabled")) return e4(n3);
        } catch (r4) {
          return t3.debugLog.warn("[UnaryRetryInterceptor] Failed to check feature gate, skipping retry logic", r4), e4(n3);
        }
        if (n3.method.kind !== s2.MethodKind.Unary) return e4(n3);
        const i3 = l(n3, r3);
        return null === i3 ? e4(n3) : d(t3, n3, i3, "UnaryRetryInterceptor", () => e4(n3));
      };
    };
    const n2 = r2(6402), s2 = r2(6038), i2 = r2(8394), o2 = r2(7126);
    function a(t3) {
      return new Promise((e3) => setTimeout(e3, t3));
    }
    function u(t3, e3, r3, n3) {
      if (n3.retriableErrors && n3.retriableErrors.length > 0) {
        const s3 = i2.Code[t3];
        for (const t4 of n3.retriableErrors) if (t4.code === s3) {
          if (t4.method && t4.method !== r3) continue;
          if (!t4.errorMessage) return true;
          if (e3.includes(t4.errorMessage)) return true;
        }
      }
      return false;
    }
    function c(t3, e3) {
      if (!t3) return;
      const r3 = parseInt(t3, 10);
      return Number.isNaN(r3) || r3 < e3 ? void 0 : r3;
    }
    function l(t3, e3) {
      const r3 = t3.header, n3 = r3.get("X-Cursor-RetryInterceptor-Enabled");
      if (!n3 || "true" !== n3) return null;
      const s3 = r3.get("X-Cursor-RetryInterceptor-MaxRetries"), i3 = r3.get("X-Cursor-RetryInterceptor-BaseDelayMs"), o3 = r3.get("X-Cursor-RetryInterceptor-MaxDelayMs");
      return { maxRetries: c(s3, 0) ?? e3.maxRetries, baseDelayMs: c(i3, 1) ?? e3.baseDelayMs, maxDelayMs: c(o3, 1) ?? e3.maxDelayMs };
    }
    class m {
      constructor(t3) {
        this.buffer = [], this.sourceIterator = t3[Symbol.asyncIterator](), this.retryFinished = false, this.generation = 0;
      }
      onRetryFinished() {
        this.retryFinished = true;
      }
      async *[Symbol.asyncIterator]() {
        if (this.retryFinished) throw new Error("No new iterators can be created after retry finished; this is a bug");
        let t3 = 0;
        const e3 = this.generation;
        for (this.generation++; e3 === this.generation - 1; ) {
          if (t3 < this.buffer.length) {
            yield this.buffer[t3++];
            continue;
          }
          const r3 = await this.sourceIterator.next();
          if (r3.done) {
            if (t3 >= this.buffer.length) break;
          } else if (this.retryFinished && e3 === this.generation - 1) {
            for (; t3 < this.buffer.length; ) yield this.buffer[t3], t3++;
            yield r3.value;
          } else this.buffer.push(r3.value);
        }
      }
    }
    async function d(t3, e3, r3, s3, c2) {
      const { maxRetries: l2, baseDelayMs: d2, maxDelayMs: h } = r3, g = await (async function(t4, e4) {
        try {
          const e5 = await t4.getDynamicConfigValue("retry_interceptor_config");
          return e5 && "object" == typeof e5 && "retriableErrors" in e5 ? e5 : t4.getDynamicConfigFallbackValues("retry_interceptor_config");
        } catch (r4) {
          return t4.debugLog.error(`[${e4}] Failed to fetch retry_interceptor_config, using fallback defaults`, r4), t4.getDynamicConfigFallbackValues("retry_interceptor_config");
        }
      })(t3, s3), A = e3.method.name, _ = "function" == typeof e3.header?.get ? e3.header.get("x-request-id") ?? void 0 : void 0;
      let y = 0, w = new i2.ConnectError("executeWithRetry: unknown error", i2.Code.Unknown);
      for (; y <= l2; ) try {
        const r4 = await c2();
        return y > 0 && f(t3, s3, A, y, _), e3.message instanceof m && e3.message.onRetryFinished(), r4;
      } catch (e4) {
        if (w = e4, !(e4 instanceof i2.ConnectError)) throw e4;
        if (!u(e4.code, e4.message, A, g)) throw e4;
        const r4 = (0, n2.calculateBackoffDelay)(y, d2, h);
        y++, y <= l2 && (p(t3, s3, A, y, l2, r4, e4.code, e4.message, _), await a(r4));
      }
      throw (function(t4, e4, r4, n3, s4, a2, u2, c3) {
        const l3 = s4 + 1;
        t4.debugLog.warn(`[${e4}] Max retries (${n3}) exhausted for ${r4} after ${l3} total requests made, giving up. Error: ${a2} - ${u2}`), o2.StructuredLogProviderImpl.warn("transport", "Retry exhausted", { service: "retry_interceptor", subkey: "max_retries_exhausted", interceptor: e4, method: r4, requestId: c3, retryAttemptNumber: s4, totalRequestsMade: l3, errorCode: i2.Code[a2], errorMessage: u2 });
      })(t3, s3, A, l2, y, w.code, w.message, _), w;
    }
    function f(t3, e3, r3, n3, s3) {
      const i3 = n3 + 1;
      t3.debugLog.info(`[${e3}] Successfully completed after ${n3} retries (${i3} total requests made) for ${r3}`), o2.StructuredLogProviderImpl.info("transport", "Retry succeeded", { service: "retry_interceptor", subkey: "retry_success", interceptor: e3, method: r3, requestId: s3, retryAttemptNumber: n3, totalRequestsMade: i3 });
    }
    function p(t3, e3, r3, n3, s3, a2, u2, c2, l2) {
      const m2 = n3;
      t3.debugLog.info(`[${e3}] About to retry ${r3} (retry attempt ${n3}/${s3}, ${m2} requests made so far) after ${a2}ms delay. Error: ${u2} - ${c2}`), o2.StructuredLogProviderImpl.info("transport", "Retry attempt", { service: "retry_interceptor", subkey: "retry_attempt", interceptor: e3, method: r3, requestId: l2, retryAttemptNumber: n3, totalRequestsMade: m2, maxRetries: s3, delayMs: a2, errorCode: i2.Code[u2], errorMessage: c2 });
    }
    e2.RewindableAsyncIterable = m;
  }