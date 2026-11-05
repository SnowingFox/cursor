// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 18114 range:949565..952841
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
18114: (e, t, r) => {
    "use strict";
    const n = { REQUEST_ID: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_REQUEST_ID"), X_RAY_TRACE_ID: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"), TENANT_ID: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_TENANT_ID"), TRACEPARENT: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_TRACEPARENT"), TRACESTATE: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_TRACESTATE"), BAGGAGE: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_BAGGAGE") }, s = ["true", "1"].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "");
    s || (globalThis.awslambda = globalThis.awslambda || {});
    class o {
      static PROTECTED_KEYS = n;
      isProtectedKey(e2) {
        return Object.values(n).includes(e2);
      }
      getRequestId() {
        return this.get(n.REQUEST_ID) ?? "-";
      }
      getXRayTraceId() {
        return this.get(n.X_RAY_TRACE_ID);
      }
      getTenantId() {
        return this.get(n.TENANT_ID);
      }
      getTraceparent() {
        return this.get(n.TRACEPARENT);
      }
      getTracestate() {
        return this.get(n.TRACESTATE);
      }
      getBaggage() {
        return this.get(n.BAGGAGE);
      }
    }
    class i extends o {
      currentContext;
      getContext() {
        return this.currentContext;
      }
      hasContext() {
        return void 0 !== this.currentContext;
      }
      get(e2) {
        return this.currentContext?.[e2];
      }
      set(e2, t2) {
        if (this.isProtectedKey(e2)) throw new Error(`Cannot modify protected Lambda context field: ${String(e2)}`);
        this.currentContext = this.currentContext || {}, this.currentContext[e2] = t2;
      }
      run(e2, t2) {
        return this.currentContext = e2, t2();
      }
    }
    class a extends o {
      als;
      static async create() {
        const e2 = new a(), t2 = await Promise.resolve().then(r.t.bind(r, 16698, 23));
        return e2.als = new t2.AsyncLocalStorage(), e2;
      }
      getContext() {
        return this.als.getStore();
      }
      hasContext() {
        return void 0 !== this.als.getStore();
      }
      get(e2) {
        return this.als.getStore()?.[e2];
      }
      set(e2, t2) {
        if (this.isProtectedKey(e2)) throw new Error(`Cannot modify protected Lambda context field: ${String(e2)}`);
        const r2 = this.als.getStore();
        if (!r2) throw new Error("No context available");
        r2[e2] = t2;
      }
      run(e2, t2) {
        return this.als.run(e2, t2);
      }
    }
    t.InvokeStore = void 0, (function(e2) {
      let t2 = null;
      e2.getInstanceAsync = async function(e3) {
        return t2 || (t2 = (async () => {
          const t3 = true === e3 || "AWS_LAMBDA_MAX_CONCURRENCY" in process.env ? await a.create() : new i();
          return !s && globalThis.awslambda?.InvokeStore ? globalThis.awslambda.InvokeStore : !s && globalThis.awslambda ? (globalThis.awslambda.InvokeStore = t3, t3) : t3;
        })()), t2;
      }, e2._testing = "1" === process.env.AWS_LAMBDA_BENCHMARK_MODE ? { reset: () => {
        t2 = null, globalThis.awslambda?.InvokeStore && delete globalThis.awslambda.InvokeStore, globalThis.awslambda = { InvokeStore: void 0 };
      } } : void 0;
    })(t.InvokeStore || (t.InvokeStore = {})), t.InvokeStoreBase = o;
  }