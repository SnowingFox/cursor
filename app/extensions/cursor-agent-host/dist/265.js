"use strict";
exports.id = 265, exports.ids = [265], exports.modules = { 96265: (o, e, r) => {
  r.d(e, { createIdeHooksWrap: () => y });
  var t = r(75088), s = r(33002), i = r(13920), n = r(91398);
  function c(...o2) {
    for (const e2 of o2) {
      const o3 = e2?.trim() ?? "";
      if (o3.length > 0) return o3;
    }
  }
  var a = r(98875), u = r(91022), p = r(15599), d = (o2, e2) => (e2 = Symbol[o2]) ? e2 : /* @__PURE__ */ Symbol.for("Symbol." + o2), h = (o2) => {
    throw TypeError(o2);
  }, f = (o2, e2, r2) => {
    var t2, s2;
    null != e2 ? ("object" != typeof e2 && "function" != typeof e2 && h("Object expected"), r2 && (t2 = e2[d("asyncDispose")]), void 0 === t2 && (t2 = e2[d("dispose")], r2 && (s2 = t2)), "function" != typeof t2 && h("Object not disposable"), s2 && (t2 = function() {
      try {
        s2.call(this);
      } catch (o3) {
        return Promise.reject(o3);
      }
    }), o2.push([r2, t2, e2])) : r2 && o2.push([r2]);
    return e2;
  }, l = (o2, e2, r2) => {
    var t2 = "function" == typeof SuppressedError ? SuppressedError : function(o3, e3, r3, t3) {
      return (t3 = Error(r3)).name = "SuppressedError", t3.error = o3, t3.suppressed = e3, t3;
    }, s2 = (o3) => e2 = r2 ? new t2(o3, e2, "An error was suppressed during disposal") : (r2 = true, o3), i2 = (t3) => {
      for (; t3 = o2.pop(); ) try {
        var n2 = t3[1] && t3[1].call(t3[2]);
        if (t3[0]) return Promise.resolve(n2).then(i2, (o3) => (s2(o3), i2()));
      } catch (o3) {
        s2(o3);
      }
      if (r2) throw e2;
    };
    return i2();
  };
  class g {
    constructor(o2) {
      this.configuredHooks = [], this.configuredSteps = /* @__PURE__ */ new Set(), this.subscription = n.cursor.onDidChangeHooks((o3) => {
        this.configuredHooks = o3, this.configuredSteps = new Set(o3.map((o4) => o4.step));
      }), this.initPromise = (async () => {
        var e2 = [];
        try {
          const r3 = o2 ? o2.withName("HooksConfigTracker.constructorInit") : (0, s.q6)().withName("HooksConfigTracker.constructorInit"), t3 = f(e2, (0, a.VI)(r3)), i2 = (0, p.K)(t3.ctx), c2 = await n.cursor.getConfiguredHooks(i2);
          this.configuredHooks = c2, this.configuredSteps = new Set(c2.map((o3) => o3.step));
        } catch (o3) {
          var r2 = o3, t2 = true;
        } finally {
          l(e2, r2, t2);
        }
      })();
    }
    async initialize(o2) {
      var e2 = [];
      try {
        f(e2, (0, a.VI)(o2.withName("HooksConfigTracker.initialize")));
        await this.initPromise;
      } catch (o3) {
        var r2 = o3, t2 = true;
      } finally {
        l(e2, r2, t2);
      }
    }
    hasHookForStep(o2) {
      return this.configuredSteps.has(o2);
    }
    hasHookForRequest(o2, e2) {
      const r2 = (0, u.bi)(o2, e2);
      return this.configuredHooks.some((e3) => e3.step === o2 && (0, u.Qk)(e3.scripts, r2).length > 0);
    }
    getConfiguredHooks() {
      return [...this.configuredHooks];
    }
    getConfiguredSteps() {
      return new Set(this.configuredSteps);
    }
    dispose() {
      this.subscription.dispose();
    }
  }
  var k = r(42358);
  class m {
    constructor(o2, e2) {
      this.vscodeHookExecutor = o2, this.configTracker = e2;
    }
    async executeHookForStep(o2, e2) {
      if (!this.configTracker.hasHookForRequest(o2, e2)) return;
      return await this.vscodeHookExecutor.executeHookForStep(o2, e2);
    }
  }
  async function y(o2) {
    const e2 = o2.parentCtx ?? (0, s.q6)(), r2 = new g(e2);
    await r2.initialize(e2);
    const a2 = new m(n.cursor.getHookExecutor(), r2);
    return { wrapResources: ({ args: e3, provider: r3 }) => {
      const s2 = (0, k.Qr)(o2.sessionOverlayDisposables, e3.sessionId);
      try {
        return { accessor: (0, t.Qm)({ provider: r3, hookExecutor: a2, mcpLease: e3.mcpLease, context: (o3) => (function(o4, e4, r4) {
          const t2 = c(e4?.parentToolCallId);
          return { conversation_id: c(e4?.conversationId, r4) ?? "", generation_id: c(e4?.requestId) ?? "", model: c(e4?.modelName) ?? "", ...t2 ? { parent_tool_call_id: t2 } : {} };
        })(0, o3.get(i.zN), e3.rootSessionId) }).accessor, dispose: () => {
          s2?.();
        } };
      } catch (o3) {
        throw s2?.(), o3;
      }
    }, dispose: () => {
      r2.dispose();
    } };
  }
} };
