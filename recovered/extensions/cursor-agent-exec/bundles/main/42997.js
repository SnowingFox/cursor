// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 42997 range:3217325..3241972
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42997: (e, t, r) => {
    const { hasOwn: n } = r(11255), { getSmithyContext: s, normalizeProvider: o } = r(11255);
    t.getSmithyContext = s, t.normalizeProvider = o;
    const { SMITHY_CONTEXT_KEY: i, AlgorithmId: a } = r(52391);
    t.AlgorithmId = a;
    const { NormalizedSchema: c } = r(93353), l = (e2, t2) => {
      const r2 = [];
      if (e2 && r2.push(e2), t2) for (const e3 of t2) r2.push(e3);
      return r2;
    }, u = (e2, t2) => `${e2 || "anonymous"}${t2 && t2.length > 0 ? ` (a.k.a. ${t2.join(",")})` : ""}`, d = () => {
      let e2 = [], t2 = [], r2 = false;
      const n2 = /* @__PURE__ */ new Set(), s2 = (r3) => (e2.forEach((e3) => {
        r3.add(e3.middleware, { ...e3 });
      }), t2.forEach((e3) => {
        r3.addRelativeTo(e3.middleware, { ...e3 });
      }), r3.identifyOnResolve?.(a2.identifyOnResolve()), r3), o2 = (e3) => {
        const t3 = [];
        return e3.before.forEach((e4) => {
          0 === e4.before.length && 0 === e4.after.length ? t3.push(e4) : t3.push(...o2(e4));
        }), t3.push(e3), e3.after.reverse().forEach((e4) => {
          0 === e4.before.length && 0 === e4.after.length ? t3.push(e4) : t3.push(...o2(e4));
        }), t3;
      }, i2 = (r3 = false) => {
        const n3 = [], s3 = [], i3 = {};
        e2.forEach((e3) => {
          const t3 = { ...e3, before: [], after: [] };
          for (const e4 of l(t3.name, t3.aliases)) i3[e4] = t3;
          n3.push(t3);
        }), t2.forEach((e3) => {
          const t3 = { ...e3, before: [], after: [] };
          for (const e4 of l(t3.name, t3.aliases)) i3[e4] = t3;
          s3.push(t3);
        }), s3.forEach((e3) => {
          if (e3.toMiddleware) {
            const t3 = i3[e3.toMiddleware];
            if (void 0 === t3) {
              if (r3) return;
              throw new Error(`${e3.toMiddleware} is not found when adding ${u(e3.name, e3.aliases)} middleware ${e3.relation} ${e3.toMiddleware}`);
            }
            "after" === e3.relation && t3.after.push(e3), "before" === e3.relation && t3.before.push(e3);
          }
        });
        var a3;
        return (a3 = n3, a3.sort((e3, t3) => p[t3.step] - p[e3.step] || m[t3.priority || "normal"] - m[e3.priority || "normal"])).map(o2).reduce((e3, t3) => (e3.push(...t3), e3), []);
      }, a2 = { add: (t3, r3 = {}) => {
        const { name: s3, override: o3, aliases: i3 } = r3, a3 = { step: "initialize", priority: "normal", middleware: t3, ...r3 }, c2 = l(s3, i3);
        if (c2.length > 0) {
          if (c2.some((e3) => n2.has(e3))) {
            if (!o3) throw new Error(`Duplicate middleware name '${u(s3, i3)}'`);
            for (const t4 of c2) {
              const r4 = e2.findIndex((e3) => e3.name === t4 || e3.aliases?.some((e4) => e4 === t4));
              if (-1 === r4) continue;
              const n3 = e2[r4];
              if (n3.step !== a3.step || a3.priority !== n3.priority) throw new Error(`"${u(n3.name, n3.aliases)}" middleware with ${n3.priority} priority in ${n3.step} step cannot be overridden by "${u(s3, i3)}" middleware with ${a3.priority} priority in ${a3.step} step.`);
              e2.splice(r4, 1);
            }
          }
          for (const e3 of c2) n2.add(e3);
        }
        e2.push(a3);
      }, addRelativeTo: (e3, r3) => {
        const { name: s3, override: o3, aliases: i3 } = r3, a3 = { middleware: e3, ...r3 }, c2 = l(s3, i3);
        if (c2.length > 0) {
          if (c2.some((e4) => n2.has(e4))) {
            if (!o3) throw new Error(`Duplicate middleware name '${u(s3, i3)}'`);
            for (const e4 of c2) {
              const r4 = t2.findIndex((t3) => t3.name === e4 || t3.aliases?.some((t4) => t4 === e4));
              if (-1 === r4) continue;
              const n3 = t2[r4];
              if (n3.toMiddleware !== a3.toMiddleware || n3.relation !== a3.relation) throw new Error(`"${u(n3.name, n3.aliases)}" middleware ${n3.relation} "${n3.toMiddleware}" middleware cannot be overridden by "${u(s3, i3)}" middleware ${a3.relation} "${a3.toMiddleware}" middleware.`);
              t2.splice(r4, 1);
            }
          }
          for (const e4 of c2) n2.add(e4);
        }
        t2.push(a3);
      }, clone: () => s2(d()), use: (e3) => {
        e3.applyToStack(a2);
      }, remove: (r3) => "string" == typeof r3 ? ((r4) => {
        let s3 = false;
        const o3 = (e3) => {
          const t3 = l(e3.name, e3.aliases);
          if (t3.includes(r4)) {
            s3 = true;
            for (const e4 of t3) n2.delete(e4);
            return false;
          }
          return true;
        };
        return e2 = e2.filter(o3), t2 = t2.filter(o3), s3;
      })(r3) : ((r4) => {
        let s3 = false;
        const o3 = (e3) => {
          if (e3.middleware === r4) {
            s3 = true;
            for (const t3 of l(e3.name, e3.aliases)) n2.delete(t3);
            return false;
          }
          return true;
        };
        return e2 = e2.filter(o3), t2 = t2.filter(o3), s3;
      })(r3), removeByTag: (r3) => {
        let s3 = false;
        const o3 = (e3) => {
          const { tags: t3, name: o4, aliases: i3 } = e3;
          if (t3 && t3.includes(r3)) {
            const e4 = l(o4, i3);
            for (const t4 of e4) n2.delete(t4);
            return s3 = true, false;
          }
          return true;
        };
        return e2 = e2.filter(o3), t2 = t2.filter(o3), s3;
      }, concat: (e3) => {
        const t3 = s2(d());
        return t3.use(e3), t3.identifyOnResolve(r2 || t3.identifyOnResolve() || (e3.identifyOnResolve?.() ?? false)), t3;
      }, applyToStack: s2, identify: () => i2(true).map((e3) => {
        const t3 = e3.step ?? e3.relation + " " + e3.toMiddleware;
        return u(e3.name, e3.aliases) + " - " + t3;
      }), identifyOnResolve: (e3) => ("boolean" == typeof e3 && (r2 = e3), r2), resolve: (e3, t3) => {
        for (const r3 of i2().map((e4) => e4.middleware).reverse()) e3 = r3(e3, t3);
        return r2 && console.log(a2.identify()), e3;
      } };
      return a2;
    }, p = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 }, m = { high: 3, normal: 2, low: 1 }, h = () => {
      const e2 = /* @__PURE__ */ new WeakSet();
      return (t2, r2) => {
        if ("object" == typeof r2 && null !== r2) {
          if (e2.has(r2)) return "[Circular]";
          e2.add(r2);
        }
        return r2;
      };
    }, f = (e2) => new Promise((t2) => setTimeout(t2, 1e3 * e2)), g = { minDelay: 2, maxDelay: 120 };
    var y;
    !(function(e2) {
      e2.ABORTED = "ABORTED", e2.FAILURE = "FAILURE", e2.SUCCESS = "SUCCESS", e2.RETRY = "RETRY", e2.TIMEOUT = "TIMEOUT";
    })(y || (y = {}));
    const w = async ({ minDelay: e2, maxDelay: t2, maxWaitTime: r2, abortController: n2, client: s2, abortSignal: o2 }, i2, a2) => {
      const c2 = {}, [l2, u2] = [1e3 * e2, 1e3 * t2];
      let d2 = 0;
      const p2 = Date.now() + 1e3 * r2, m2 = Date.now() + 6e4;
      let h2 = false;
      for (; ; ) {
        if (d2 > 0) {
          const e4 = b(l2, u2, d2, p2);
          if (n2?.signal?.aborted || o2?.aborted) {
            const e5 = "AbortController signal aborted.";
            return c2[e5] |= 0, c2[e5] += 1, { state: y.ABORTED, observedResponses: c2 };
          }
          if (Date.now() + e4 > p2) return { state: y.TIMEOUT, observedResponses: c2 };
          await f(e4 / 1e3);
        }
        const { state: e3, reason: t3 } = await a2(s2, i2);
        if (t3) {
          const e4 = _(t3);
          c2[e4] |= 0, c2[e4] += 1;
        }
        if (e3 !== y.RETRY) return { state: e3, reason: t3, final: t3, observedResponses: c2 };
        d2 += 1, !h2 && Date.now() >= m2 && (v(c2, s2), h2 = true);
      }
    }, v = (e2 = {}, t2) => {
      const r2 = Object.keys(e2);
      let n2 = 0;
      for (const t3 of r2) {
        const r3 = 0 | e2[t3];
        t3.startsWith("403:") && (n2 += r3);
      }
      const s2 = t2?.config?.logger, o2 = "function" != typeof s2?.warn || s2.constructor?.name?.includes?.("NoOpLogger") ? console : s2;
      (n2 >= 3 || r2[r2.length - 1]?.startsWith("403:")) && o2.warn("@smithy/util-waiter WARN - 403 status code encountered during waiter polling.");
    }, _ = (e2) => {
      const t2 = e2?.$response?.statusCode ?? e2?.$metadata?.httpStatusCode;
      return e2?.$responseBodyText ? `${t2 ? t2 + ": " : ""}Deserialization error for body: ${e2.$responseBodyText}` : t2 ? e2?.$response || e2?.message ? `${t2 ?? "Unknown"}: ${e2?.message}` : `${t2}: OK` : String(e2?.message ?? JSON.stringify(e2, h()) ?? "Unknown");
    }, b = (e2, t2, r2, n2) => {
      if (r2 > Math.log(t2 / e2) / Math.log(2) + 1) return t2;
      const s2 = e2 * 2 ** (r2 - 1), o2 = Math.min(s2, t2), i2 = S(e2, o2);
      if (Date.now() + i2 > n2) {
        const e3 = n2 - Date.now();
        return Math.max(0, e3 - 500);
      }
      return i2;
    }, S = (e2, t2) => e2 + Math.random() * (t2 - e2), k = (e2) => {
      let t2;
      const r2 = new Promise((r3) => {
        t2 = () => r3({ state: y.ABORTED }), "function" == typeof e2.addEventListener ? e2.addEventListener("abort", t2) : e2.onabort = t2;
      });
      return { clearListener() {
        "function" == typeof e2.removeEventListener && e2.removeEventListener("abort", t2);
      }, aborted: r2 };
    };
    const x = "***SensitiveInformation***";
    function E(e2, t2) {
      if (null == t2) return t2;
      const r2 = c.of(e2);
      if (r2.getMergedTraits().sensitive) return x;
      if (r2.isListSchema()) {
        if (!!r2.getValueSchema().getMergedTraits().sensitive) return x;
      } else if (r2.isMapSchema()) {
        if (!!r2.getKeySchema().getMergedTraits().sensitive || !!r2.getValueSchema().getMergedTraits().sensitive) return x;
      } else if (r2.isStructSchema() && "object" == typeof t2) {
        const e3 = t2, n2 = {};
        for (const [t3, s2] of r2.structIterator()) null != e3[t3] && (n2[t3] = E(s2, e3[t3]));
        return n2;
      }
      return t2;
    }
    class I {
      middlewareStack = d();
      schema;
      static classBuilder() {
        return new T();
      }
      resolveMiddlewareWithContext(e2, t2, r2, { middlewareFn: n2, clientName: s2, commandName: o2, inputFilterSensitiveLog: a2, outputFilterSensitiveLog: c2, smithyContext: l2, additionalContext: u2, CommandCtor: d2 }) {
        for (const s3 of n2.bind(this)(d2, e2, t2, r2)) this.middlewareStack.use(s3);
        const p2 = e2.concat(this.middlewareStack), { logger: m2 } = t2, h2 = { logger: m2, clientName: s2, commandName: o2, inputFilterSensitiveLog: a2, outputFilterSensitiveLog: c2, [i]: { commandInstance: this, ...l2 }, ...u2 }, { requestHandler: f2 } = t2;
        let g2 = r2 ?? {};
        return l2.eventStream && (g2 = { isEventStream: true, ...g2 }), p2.resolve((e3) => f2.handle(e3.request, g2), h2);
      }
    }
    class T {
      _init = () => {
      };
      _ep = {};
      _middlewareFn = () => [];
      _commandName = "";
      _clientName = "";
      _additionalContext = {};
      _smithyContext = {};
      _inputFilterSensitiveLog = void 0;
      _outputFilterSensitiveLog = void 0;
      _serializer = null;
      _deserializer = null;
      _operationSchema;
      init(e2) {
        this._init = e2;
      }
      ep(e2) {
        return this._ep = e2, this;
      }
      m(e2) {
        return this._middlewareFn = e2, this;
      }
      s(e2, t2, r2 = {}) {
        return this._smithyContext = { service: e2, operation: t2, ...r2 }, this;
      }
      c(e2 = {}) {
        return this._additionalContext = e2, this;
      }
      n(e2, t2) {
        return this._clientName = e2, this._commandName = t2, this;
      }
      f(e2 = (e3) => e3, t2 = (e3) => e3) {
        return this._inputFilterSensitiveLog = e2, this._outputFilterSensitiveLog = t2, this;
      }
      ser(e2) {
        return this._serializer = e2, this;
      }
      de(e2) {
        return this._deserializer = e2, this;
      }
      sc(e2) {
        return this._operationSchema = e2, this._smithyContext.operationSchema = e2, this;
      }
      build() {
        const e2 = this;
        let t2;
        return t2 = class extends I {
          input;
          static getEndpointParameterInstructions() {
            return e2._ep;
          }
          constructor(...[t3]) {
            super(), this.input = t3 ?? {}, e2._init(this), this.schema = e2._operationSchema;
          }
          resolveMiddleware(r2, n2, s2) {
            const o2 = e2._operationSchema, i2 = o2?.[4] ?? o2?.input, a2 = o2?.[5] ?? o2?.output;
            return this.resolveMiddlewareWithContext(r2, n2, s2, { CommandCtor: t2, middlewareFn: e2._middlewareFn, clientName: e2._clientName, commandName: e2._commandName, inputFilterSensitiveLog: e2._inputFilterSensitiveLog ?? (o2 ? E.bind(null, i2) : (e3) => e3), outputFilterSensitiveLog: e2._outputFilterSensitiveLog ?? (o2 ? E.bind(null, a2) : (e3) => e3), smithyContext: e2._smithyContext, additionalContext: e2._additionalContext });
          }
          serialize = e2._serializer;
          deserialize = e2._deserializer;
        };
      }
    }
    class C extends Error {
      $fault;
      $response;
      $retryable;
      $metadata;
      constructor(e2) {
        super(e2.message), Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = e2.name, this.$fault = e2.$fault, this.$metadata = e2.$metadata;
      }
      static isInstance(e2) {
        if (!e2) return false;
        const t2 = e2;
        return C.prototype.isPrototypeOf(t2) || Boolean(t2.$fault) && Boolean(t2.$metadata) && ("client" === t2.$fault || "server" === t2.$fault);
      }
      static [Symbol.hasInstance](e2) {
        if (!e2) return false;
        const t2 = e2;
        return this === C ? C.isInstance(e2) : !!C.isInstance(e2) && (t2.name && this.name ? this.prototype.isPrototypeOf(e2) || t2.name === this.name : this.prototype.isPrototypeOf(e2));
      }
    }
    const P = (e2, t2 = {}) => {
      Object.entries(t2).filter(([, e3]) => void 0 !== e3).forEach(([t3, r3]) => {
        null != e2[t3] && "" !== e2[t3] || (e2[t3] = r3);
      });
      const r2 = e2.message || e2.Message || "UnknownError";
      return e2.message = r2, delete e2.Message, e2;
    }, A = ({ output: e2, parsedBody: t2, exceptionCtor: r2, errorCode: n2 }) => {
      const s2 = R(e2), o2 = s2.httpStatusCode ? s2.httpStatusCode + "" : void 0, i2 = new r2({ name: t2?.code || t2?.Code || n2 || o2 || "UnknownError", $fault: "client", $metadata: s2 });
      throw P(i2, t2);
    }, R = (e2) => ({ httpStatusCode: e2.statusCode, requestId: e2.headers["x-amzn-requestid"] ?? e2.headers["x-amzn-request-id"] ?? e2.headers["x-amz-request-id"], extendedRequestId: e2.headers["x-amz-id-2"], cfId: e2.headers["x-amz-cf-id"] });
    let M = false;
    const J = Object.values(a), O = (e2) => {
      const t2 = [];
      for (const r2 in a) {
        if (!n(a, r2)) continue;
        const s2 = a[r2];
        void 0 !== e2[s2] && t2.push({ algorithmId: () => s2, checksumConstructor: () => e2[s2] });
      }
      for (const [r2, n2] of Object.entries(e2.checksumAlgorithms ?? {})) t2.push({ algorithmId: () => r2, checksumConstructor: () => n2 });
      return { addChecksumAlgorithm(r2) {
        e2.checksumAlgorithms = e2.checksumAlgorithms ?? {};
        const n2 = r2.algorithmId(), s2 = r2.checksumConstructor();
        J.includes(n2) ? e2.checksumAlgorithms[n2.toUpperCase()] = s2 : e2.checksumAlgorithms[n2] = s2, t2.push(r2);
      }, checksumAlgorithms: () => t2 };
    }, B = (e2) => {
      const t2 = {};
      return e2.checksumAlgorithms().forEach((e3) => {
        const r2 = e3.algorithmId();
        J.includes(r2) && (t2[r2] = e3.checksumConstructor());
      }), t2;
    }, D = (e2) => ({ setRetryStrategy(t2) {
      e2.retryStrategy = t2;
    }, retryStrategy: () => e2.retryStrategy }), q = (e2) => {
      const t2 = {};
      return t2.retryStrategy = e2.retryStrategy(), t2;
    }, N = (e2) => Object.assign(O(e2), D(e2)), F = N, U = (e2) => {
      const t2 = "#text";
      for (const r2 in e2) n(e2, r2) && (void 0 !== e2[r2][t2] ? e2[r2] = e2[r2][t2] : "object" == typeof e2[r2] && null !== e2[r2] && (e2[r2] = U(e2[r2])));
      return e2;
    };
    function L(e2, t2, r2) {
      let s2, o2, i2;
      if (void 0 === t2 && void 0 === r2) s2 = {}, i2 = e2;
      else {
        if (s2 = e2, "function" == typeof t2) return o2 = t2, i2 = r2, $(s2, o2, i2);
        i2 = t2;
      }
      for (const e3 in i2) n(i2, e3) && (Array.isArray(i2[e3]) ? j(s2, null, i2, e3) : s2[e3] = i2[e3]);
      return s2;
    }
    const $ = (e2, t2, r2) => L(e2, Object.entries(r2).reduce((e3, [r3, n2]) => (Array.isArray(n2) ? e3[r3] = n2 : e3[r3] = "function" == typeof n2 ? [t2, n2()] : [t2, n2], e3), {})), j = (e2, t2, r2, n2) => {
      if (null !== t2) {
        let s3 = r2[n2];
        "function" == typeof s3 && (s3 = [, s3]);
        const [o3 = G, i2 = z, a2 = n2] = s3;
        return void (("function" == typeof o3 && o3(t2[a2]) || "function" != typeof o3 && o3) && (e2[n2] = i2(t2[a2])));
      }
      let [s2, o2] = r2[n2];
      if ("function" == typeof o2) {
        let t3;
        const r3 = void 0 === s2 && null != (t3 = o2()), i2 = "function" == typeof s2 && !!s2(void 0) || "function" != typeof s2 && !!s2;
        r3 ? e2[n2] = t3 : i2 && (e2[n2] = o2());
      } else {
        const t3 = void 0 === s2 && null != o2, r3 = "function" == typeof s2 && !!s2(o2) || "function" != typeof s2 && !!s2;
        (t3 || r3) && (e2[n2] = o2);
      }
    }, G = (e2) => null != e2, z = (e2) => e2, W = (e2) => {
      if (null == e2) return {};
      if (Array.isArray(e2)) return e2.filter((e3) => null != e3).map(W);
      if ("object" == typeof e2) {
        const t2 = {};
        for (const r2 in e2) n(e2, r2) && null != e2[r2] && (t2[r2] = W(e2[r2]));
        return t2;
      }
      return e2;
    };
    t.Client = class {
      config;
      middlewareStack = d();
      initConfig;
      handlers;
      constructor(e2) {
        this.config = e2;
        const { protocol: t2, protocolSettings: r2 } = e2;
        r2 && "function" == typeof t2 && (e2.protocol = new t2(r2));
      }
      send(e2, t2, r2) {
        const n2 = "function" != typeof t2 ? t2 : void 0, s2 = "function" == typeof t2 ? t2 : r2;
        let o2;
        if (void 0 === n2 && true === this.config.cacheMiddleware) {
          this.handlers || (this.handlers = /* @__PURE__ */ new WeakMap());
          const t3 = this.handlers;
          t3.has(e2.constructor) ? o2 = t3.get(e2.constructor) : (o2 = e2.resolveMiddleware(this.middlewareStack, this.config, n2), t3.set(e2.constructor, o2));
        } else delete this.handlers, o2 = e2.resolveMiddleware(this.middlewareStack, this.config, n2);
        if (!s2) return o2(e2).then((e3) => e3.output);
        o2(e2).then((e3) => s2(null, e3.output), (e3) => s2(e3)).catch(() => {
        });
      }
      destroy() {
        this.config?.requestHandler?.destroy?.(), delete this.handlers;
      }
    }, t.Command = I, t.NoOpLogger = class {
      trace() {
      }
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
    }, t.SENSITIVE_STRING = "***SensitiveInformation***", t.ServiceException = C, t.WaiterState = y, t._json = W, t.checkExceptions = (e2) => {
      if (e2.state === y.ABORTED) {
        const t2 = new Error(`${JSON.stringify({ ...e2, reason: "Request was aborted" }, h())}`);
        throw t2.name = "AbortError", t2;
      }
      if (e2.state === y.TIMEOUT) {
        const t2 = new Error(`${JSON.stringify({ ...e2, reason: "Waiter has timed out" }, h())}`);
        throw t2.name = "TimeoutError", t2;
      }
      if (e2.state !== y.SUCCESS) throw new Error(`${JSON.stringify(e2, h())}`);
      return e2;
    }, t.constructStack = d, t.convertMap = (e2) => {
      const t2 = {};
      for (const [r2, n2] of Object.entries(e2 || {})) t2[r2] = [, n2];
      return t2;
    }, t.createAggregatedClient = (e2, t2, r2) => {
      for (const [r3, n3] of Object.entries(e2)) {
        const e3 = async function(e4, t3, r4) {
          const s4 = new n3(e4);
          if ("function" == typeof t3) this.send(s4, t3);
          else {
            if ("function" != typeof r4) return this.send(s4, t3);
            if ("object" != typeof t3) throw new Error("Expected http options but got " + typeof t3);
            this.send(s4, t3 || {}, r4);
          }
        }, s3 = (r3[0].toLowerCase() + r3.slice(1)).replace(/Command$/, "");
        t2.prototype[s3] = e3;
      }
      const { paginators: n2 = {}, waiters: s2 = {} } = r2 ?? {};
      for (const [e3, r3] of Object.entries(n2)) void 0 === t2.prototype[e3] && (t2.prototype[e3] = function(e4 = {}, t3, ...n3) {
        return r3({ ...t3, client: this }, e4, ...n3);
      });
      for (const [e3, r3] of Object.entries(s2)) void 0 === t2.prototype[e3] && (t2.prototype[e3] = async function(e4 = {}, t3, ...n3) {
        let s3 = t3;
        return "number" == typeof t3 && (s3 = { maxWaitTime: t3 }), r3({ ...s3, client: this }, e4, ...n3);
      });
    }, t.createWaiter = async (e2, t2, r2) => {
      const n2 = { ...g, ...e2 };
      ((e3) => {
        if (e3.maxWaitTime <= 0) throw new Error("WaiterConfiguration.maxWaitTime must be greater than 0");
        if (e3.minDelay <= 0) throw new Error("WaiterConfiguration.minDelay must be greater than 0");
        if (e3.maxDelay <= 0) throw new Error("WaiterConfiguration.maxDelay must be greater than 0");
        if (e3.maxWaitTime <= e3.minDelay) throw new Error(`WaiterConfiguration.maxWaitTime [${e3.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${e3.minDelay}] for this waiter`);
        if (e3.maxDelay < e3.minDelay) throw new Error(`WaiterConfiguration.maxDelay [${e3.maxDelay}] must be greater than WaiterConfiguration.minDelay [${e3.minDelay}] for this waiter`);
      })(n2);
      const s2 = [w(n2, t2, r2)], o2 = [];
      if (e2.abortSignal) {
        const { aborted: t3, clearListener: r3 } = k(e2.abortSignal);
        o2.push(r3), s2.push(t3);
      }
      if (e2.abortController?.signal) {
        const { aborted: t3, clearListener: r3 } = k(e2.abortController.signal);
        o2.push(r3), s2.push(t3);
      }
      return Promise.race(s2).then((e3) => {
        for (const e4 of o2) e4();
        return e3;
      });
    }, t.decorateServiceException = P, t.emitWarningIfUnsupportedVersion = (e2) => {
      e2 && !M && parseInt(e2.substring(1, e2.indexOf("."))) < 16 && (M = true);
    }, t.getArrayIfSingleItem = (e2) => Array.isArray(e2) ? e2 : [e2], t.getChecksumConfiguration = O, t.getDefaultClientConfiguration = F, t.getDefaultExtensionConfiguration = N, t.getRetryConfiguration = D, t.getValueFromTextNode = U, t.invalidFunction = (e2) => () => {
      throw new Error(e2);
    }, t.invalidProvider = (e2) => () => Promise.reject(e2), t.isSerializableHeaderValue = (e2) => null != e2, t.loadConfigsForDefaultMode = (e2) => {
      switch (e2) {
        case "standard":
        case "cross-region":
          return { retryMode: "standard", connectionTimeout: 3100 };
        case "in-region":
          return { retryMode: "standard", connectionTimeout: 1100 };
        case "mobile":
          return { retryMode: "standard", connectionTimeout: 3e4 };
        default:
          return {};
      }
    }, t.makeBuilder = function(e2, t2, r2, n2) {
      return function(s2, o2, i2, a2, c2 = {}) {
        const l2 = Object.assign({}, e2, s2);
        return I.classBuilder().ep(l2).m(function(e3, t3, r3, s3) {
          const i3 = o2.call(this, e3, t3, r3, s3);
          return i3.unshift(n2(r3, e3.getEndpointParameterInstructions())), i3;
        }).s(t2, i2, c2).n(r2, i2.charAt(0).toUpperCase() + i2.slice(1) + "Command").sc(a2).build();
      };
    }, t.map = L, t.resolveChecksumRuntimeConfig = B, t.resolveDefaultRuntimeConfig = (e2) => Object.assign(B(e2), q(e2)), t.resolveRetryRuntimeConfig = q, t.schemaLogFilter = E, t.serializeDateTime = (e2) => e2.toISOString().replace(".000Z", "Z"), t.serializeFloat = (e2) => {
      if (e2 != e2) return "NaN";
      switch (e2) {
        case 1 / 0:
          return "Infinity";
        case -1 / 0:
          return "-Infinity";
        default:
          return e2;
      }
    }, t.take = (e2, t2) => {
      const r2 = {};
      for (const s2 in t2) n(t2, s2) && j(r2, e2, t2, s2);
      return r2;
    }, t.throwDefaultError = A, t.waiterServiceDefaults = g, t.withBaseException = (e2) => ({ output: t2, parsedBody: r2, errorCode: n2 }) => {
      A({ output: t2, parsedBody: r2, exceptionCtor: e2, errorCode: n2 });
    };
  }