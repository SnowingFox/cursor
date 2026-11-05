// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 69997 range:10914579..10922290
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69997: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.RewindableAsyncIterable = void 0, t.shouldRetryOnError = c, t.createStreamRetryInterceptor = function(e2, t2) {
      const r2 = { maxRetries: t2?.maxRetries ?? 3, baseDelayMs: t2?.baseDelayMs ?? 1e3, maxDelayMs: t2?.maxDelayMs ?? 3e4 };
      return (t3) => async (n2) => {
        try {
          if (await e2.checkFeatureGate("retry_interceptor_disabled")) return t3(n2);
        } catch (r3) {
          return e2.debugLog.warn("[StreamRetryInterceptor] Failed to check feature gate, skipping retry logic", r3), t3(n2);
        }
        if (n2.method.kind !== s.MethodKind.BiDiStreaming && n2.method.kind !== s.MethodKind.ClientStreaming && n2.method.kind !== s.MethodKind.ServerStreaming) return t3(n2);
        const o2 = u(n2, r2);
        if (null === o2) return t3(n2);
        if (n2.method.kind === s.MethodKind.BiDiStreaming || n2.method.kind === s.MethodKind.ClientStreaming) {
          const e3 = new d(n2.message);
          n2 = { ...n2, message: e3 };
        }
        return p(e2, n2, o2, "StreamRetryInterceptor", () => t3(n2));
      };
    }, t.createUnaryRetryInterceptor = function(e2, t2) {
      const r2 = { maxRetries: t2?.maxRetries ?? 3, baseDelayMs: t2?.baseDelayMs ?? 1e3, maxDelayMs: t2?.maxDelayMs ?? 3e4 };
      return (t3) => async (n2) => {
        try {
          if (await e2.checkFeatureGate("retry_interceptor_disabled")) return t3(n2);
        } catch (r3) {
          return e2.debugLog.warn("[UnaryRetryInterceptor] Failed to check feature gate, skipping retry logic", r3), t3(n2);
        }
        if (n2.method.kind !== s.MethodKind.Unary) return t3(n2);
        const o2 = u(n2, r2);
        return null === o2 ? t3(n2) : p(e2, n2, o2, "UnaryRetryInterceptor", () => t3(n2));
      };
    };
    const n = r(96980), s = r(36038), o = r(22712), i = r(7126);
    function a(e2) {
      return new Promise((t2) => setTimeout(t2, e2));
    }
    function c(e2, t2, r2, n2) {
      if (n2.retriableErrors && n2.retriableErrors.length > 0) {
        const s2 = o.Code[e2];
        for (const e3 of n2.retriableErrors) if (e3.code === s2) {
          if (e3.method && e3.method !== r2) continue;
          if (!e3.errorMessage) return true;
          if (t2.includes(e3.errorMessage)) return true;
        }
      }
      return false;
    }
    function l(e2, t2) {
      if (!e2) return;
      const r2 = parseInt(e2, 10);
      return Number.isNaN(r2) || r2 < t2 ? void 0 : r2;
    }
    function u(e2, t2) {
      const r2 = e2.header, n2 = r2.get("X-Cursor-RetryInterceptor-Enabled");
      if (!n2 || "true" !== n2) return null;
      const s2 = r2.get("X-Cursor-RetryInterceptor-MaxRetries"), o2 = r2.get("X-Cursor-RetryInterceptor-BaseDelayMs"), i2 = r2.get("X-Cursor-RetryInterceptor-MaxDelayMs");
      return { maxRetries: l(s2, 0) ?? t2.maxRetries, baseDelayMs: l(o2, 1) ?? t2.baseDelayMs, maxDelayMs: l(i2, 1) ?? t2.maxDelayMs };
    }
    class d {
      constructor(e2) {
        this.buffer = [], this.sourceIterator = e2[Symbol.asyncIterator](), this.retryFinished = false, this.generation = 0;
      }
      onRetryFinished() {
        this.retryFinished = true;
      }
      async *[Symbol.asyncIterator]() {
        if (this.retryFinished) throw new Error("No new iterators can be created after retry finished; this is a bug");
        let e2 = 0;
        const t2 = this.generation;
        for (this.generation++; t2 === this.generation - 1; ) {
          if (e2 < this.buffer.length) {
            yield this.buffer[e2++];
            continue;
          }
          const r2 = await this.sourceIterator.next();
          if (r2.done) {
            if (e2 >= this.buffer.length) break;
          } else if (this.retryFinished && t2 === this.generation - 1) {
            for (; e2 < this.buffer.length; ) yield this.buffer[e2], e2++;
            yield r2.value;
          } else this.buffer.push(r2.value);
        }
      }
    }
    async function p(e2, t2, r2, s2, l2) {
      const { maxRetries: u2, baseDelayMs: p2, maxDelayMs: f } = r2, g = await (async function(e3, t3) {
        try {
          const t4 = await e3.getDynamicConfigValue("retry_interceptor_config");
          return t4 && "object" == typeof t4 && "retriableErrors" in t4 ? t4 : e3.getDynamicConfigFallbackValues("retry_interceptor_config");
        } catch (r3) {
          return e3.debugLog.error(`[${t3}] Failed to fetch retry_interceptor_config, using fallback defaults`, r3), e3.getDynamicConfigFallbackValues("retry_interceptor_config");
        }
      })(e2, s2), y = t2.method.name, w = "function" == typeof t2.header?.get ? t2.header.get("x-request-id") ?? void 0 : void 0;
      let v = 0, _ = new o.ConnectError("executeWithRetry: unknown error", o.Code.Unknown);
      for (; v <= u2; ) try {
        const r3 = await l2();
        return v > 0 && m(e2, s2, y, v, w), t2.message instanceof d && t2.message.onRetryFinished(), r3;
      } catch (t3) {
        if (_ = t3, !(t3 instanceof o.ConnectError)) throw t3;
        if (!c(t3.code, t3.message, y, g)) throw t3;
        const r3 = (0, n.calculateBackoffDelay)(v, p2, f);
        v++, v <= u2 && (h(e2, s2, y, v, u2, r3, t3.code, t3.message, w), await a(r3));
      }
      throw (function(e3, t3, r3, n2, s3, a2, c2, l3) {
        const u3 = s3 + 1;
        e3.debugLog.warn(`[${t3}] Max retries (${n2}) exhausted for ${r3} after ${u3} total requests made, giving up. Error: ${a2} - ${c2}`), i.StructuredLogProviderImpl.warn("transport", "Retry exhausted", { service: "retry_interceptor", subkey: "max_retries_exhausted", interceptor: t3, method: r3, requestId: l3, retryAttemptNumber: s3, totalRequestsMade: u3, errorCode: o.Code[a2], errorMessage: c2 });
      })(e2, s2, y, u2, v, _.code, _.message, w), _;
    }
    function m(e2, t2, r2, n2, s2) {
      const o2 = n2 + 1;
      e2.debugLog.info(`[${t2}] Successfully completed after ${n2} retries (${o2} total requests made) for ${r2}`), i.StructuredLogProviderImpl.info("transport", "Retry succeeded", { service: "retry_interceptor", subkey: "retry_success", interceptor: t2, method: r2, requestId: s2, retryAttemptNumber: n2, totalRequestsMade: o2 });
    }
    function h(e2, t2, r2, n2, s2, a2, c2, l2, u2) {
      const d2 = n2;
      e2.debugLog.info(`[${t2}] About to retry ${r2} (retry attempt ${n2}/${s2}, ${d2} requests made so far) after ${a2}ms delay. Error: ${c2} - ${l2}`), i.StructuredLogProviderImpl.info("transport", "Retry attempt", { service: "retry_interceptor", subkey: "retry_attempt", interceptor: t2, method: r2, requestId: u2, retryAttemptNumber: n2, totalRequestsMade: d2, maxRetries: s2, delayMs: a2, errorCode: o.Code[c2], errorMessage: l2 });
    }
    t.RewindableAsyncIterable = d;
  }, 7e4: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(68255), s = r(79657), o = r(95183), i = { keyword: "pattern", type: "string", schemaType: "string", $data: true, error: { message: ({ schemaCode: e2 }) => o.str`must match pattern "${e2}"`, params: ({ schemaCode: e2 }) => o._`{pattern: ${e2}}` }, code(e2) {
      const { gen: t2, data: r2, $data: i2, schema: a, schemaCode: c, it: l } = e2, u = l.opts.unicodeRegExp ? "u" : "";
      if (i2) {
        const { regExp: n2 } = l.opts.code, i3 = "new RegExp" === n2.code ? o._`new RegExp` : (0, s.useFunc)(t2, n2), a2 = t2.let("valid");
        t2.try(() => t2.assign(a2, o._`${i3}(${c}, ${u}).test(${r2})`), () => t2.assign(a2, false)), e2.fail$data(o._`!${a2}`);
      } else {
        const t3 = (0, n.usePattern)(e2, a);
        e2.fail$data(o._`!${t3}.test(${r2})`);
      }
    } };
    t.default = i;
  }