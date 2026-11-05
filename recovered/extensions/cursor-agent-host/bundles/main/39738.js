// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 39738 range:7495628..7502586
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39738: (e, t, r) => {
    "use strict";
    r.d(t, { Cz: () => y, NN: () => v, RM: () => m, S_: () => h, Wy: () => _, ZX: () => p, cR: () => w, ic: () => g, l4: () => d, or: () => f, x1: () => A });
    var n = r(69584), s = r(90028), o = r(48170), i = r(97747), a = r(16821), c = r(70682), l = r(337), u = r(32325);
    class d extends Error {
      constructor(e2) {
        super(`Deferred interaction response requested for query ${e2.id} (${e2.query.case ?? "unknown"})`), this.query = e2, this.name = "DeferredInteractionResponseError", Object.setPrototypeOf(this, new.target.prototype);
      }
    }
    async function p(e2, t2, r2) {
      const s2 = await e2.query(t2, new n.Pd7({ query: { case: "webSearchRequestQuery", value: new u.KL({ args: r2 }) } }));
      if ("webSearchRequestResponse" !== s2.result.case || !s2.result.value) throw new Error(`Unexpected response for web search query: ${s2.result.case}`);
      return s2.result.value;
    }
    async function m(e2, t2, r2, s2) {
      const o2 = "boolean" == typeof s2 ? { skipApproval: s2 } : s2 ?? {}, i2 = await e2.query(t2, new n.Pd7({ query: { case: "webFetchRequestQuery", value: new l.Un({ args: r2, skipApproval: o2.skipApproval ?? false, smartModeApproval: o2.smartModeApproval }) } }));
      if ("webFetchRequestResponse" !== i2.result.case || !i2.result.value) throw new Error(`Unexpected response for web fetch query: ${i2.result.case}`);
      return i2.result.value;
    }
    async function h(e2, t2, r2, s2) {
      const o2 = await e2.query(t2, new n.Pd7({ query: { case: "askQuestionInteractionQuery", value: new n.qZY({ args: r2, toolCallId: s2 }) } }));
      if ("askQuestionInteractionResponse" !== o2.result.case || !o2.result.value) throw new Error(`Unexpected response for ask question query: ${o2.result.case}`);
      return o2.result.value;
    }
    async function f(e2, t2, r2) {
      const s2 = await e2.query(t2, new n.Pd7({ query: { case: "switchModeRequestQuery", value: new c.Nc({ args: r2 }) } }));
      if ("switchModeRequestResponse" !== s2.result.case || !s2.result.value) throw new Error(`Unexpected response for switch mode query: ${s2.result.case}`);
      return s2.result.value;
    }
    async function g(e2, t2, r2, s2) {
      const i2 = await e2.query(t2, new n.Pd7({ query: { case: "createPlanRequestQuery", value: new o.vR({ args: r2, toolCallId: s2 }) } }));
      if ("createPlanRequestResponse" !== i2.result.case || !i2.result.value) throw new Error(`Unexpected response for create plan query: ${i2.result.case}`);
      return i2.result.value;
    }
    async function y(e2, t2, r2) {
      const s2 = await e2.query(t2, new n.Pd7({ query: { case: "setupVmEnvironmentArgs", value: r2 } }));
      if ("setupVmEnvironmentResult" !== s2.result.case || !s2.result.value) throw new Error(`Unexpected response for setup VM environment query: ${s2.result.case}`);
      return s2.result.value;
    }
    async function w(e2, t2, r2) {
      const s2 = await e2.query(t2, new n.Pd7({ query: { case: "replaceEnvArgs", value: r2 } }));
      if ("replaceEnvResult" !== s2.result.case || !s2.result.value) throw new Error(`Unexpected response for replace env query: ${s2.result.case}`);
      return s2.result.value;
    }
    async function v(e2, t2, r2) {
      const s2 = await e2.query(t2, new n.Pd7({ query: { case: "mcpAuthRequestQuery", value: new a.uL({ args: r2 }) } }));
      if ("mcpAuthRequestResponse" !== s2.result.case || !s2.result.value) throw new Error(`Unexpected response for MCP auth query: ${s2.result.case}`);
      return s2.result.value;
    }
    async function _(e2, t2, r2) {
      const o2 = await e2.query(t2, new n.Pd7({ query: { case: "connectScmRequestQuery", value: new s.$1({ args: r2 }) } }));
      if ("connectScmRequestResponse" !== o2.result.case || !o2.result.value) throw new Error(`Unexpected response for connect SCM query: ${o2.result.case}`);
      return o2.result.value;
    }
    const A = { webSearchApproved: (e2) => new n.Y5({ id: e2, result: { case: "webSearchRequestResponse", value: new u.lI({ result: { case: "approved", value: new u.XJ() } }) } }), webSearchRejected: (e2, t2) => new n.Y5({ id: e2, result: { case: "webSearchRequestResponse", value: new u.lI({ result: { case: "rejected", value: new u.yc({ reason: t2 ?? "" }) } }) } }), webFetchApproved: (e2) => new n.Y5({ id: e2, result: { case: "webFetchRequestResponse", value: new l.fS({ result: { case: "approved", value: new l.Hs() } }) } }), webFetchRejected: (e2, t2) => new n.Y5({ id: e2, result: { case: "webFetchRequestResponse", value: new l.fS({ result: { case: "rejected", value: new l.m$({ reason: t2 ?? "" }) } }) } }), askQuestion: (e2, t2) => new n.Y5({ id: e2, result: { case: "askQuestionInteractionResponse", value: new n.zT({ result: t2 }) } }), switchModeApproved: (e2) => new n.Y5({ id: e2, result: { case: "switchModeRequestResponse", value: new c.w$({ result: { case: "approved", value: new c.q5() } }) } }), switchModeRejected: (e2, t2) => new n.Y5({ id: e2, result: { case: "switchModeRequestResponse", value: new c.w$({ result: { case: "rejected", value: new c.rA({ reason: t2 ?? "" }) } }) } }), createPlan: (e2, t2) => new n.Y5({ id: e2, result: { case: "createPlanRequestResponse", value: new o.gz({ result: t2 }) } }), setupVmEnvironment: (e2, t2) => new n.Y5({ id: e2, result: { case: "setupVmEnvironmentResult", value: t2 } }), replaceEnv: (e2, t2) => new n.Y5({ id: e2, result: { case: "replaceEnvResult", value: t2 } }), prManagement: (e2, t2) => new n.Y5({ id: e2, result: { case: "prManagementResult", value: t2 } }), mcpAuthApproved: (e2) => new n.Y5({ id: e2, result: { case: "mcpAuthRequestResponse", value: new a.h({ result: { case: "approved", value: new a.D5() } }) } }), mcpAuthRejected: (e2, t2) => new n.Y5({ id: e2, result: { case: "mcpAuthRequestResponse", value: new a.h({ result: { case: "rejected", value: new a.OI({ reason: t2 ?? "Authentication was rejected" }) } }) } }), connectScmApproved: (e2) => new n.Y5({ id: e2, result: { case: "connectScmRequestResponse", value: new s.qG({ result: { case: "approved", value: new s.O9() } }) } }), connectScmRejected: (e2, t2) => new n.Y5({ id: e2, result: { case: "connectScmRequestResponse", value: new s.qG({ result: { case: "rejected", value: new s.lB({ reason: t2 ?? "Connecting GitHub was skipped" }) } }) } }), connectScmFailed: (e2, t2) => new n.Y5({ id: e2, result: { case: "connectScmRequestResponse", value: new s.qG({ result: { case: "failed", value: new s.ik({ error: t2 ?? "Failed to connect GitHub" }) } }) } }), generateImageApproved: (e2, t2) => new n.Y5({ id: e2, result: { case: "generateImageRequestResponse", value: new i.vW({ result: { case: "approved", value: new i.l3({ description: t2 ?? "" }) } }) } }), generateImageRejected: (e2, t2) => new n.Y5({ id: e2, result: { case: "generateImageRequestResponse", value: new i.vW({ result: { case: "rejected", value: new i.Uq({ reason: t2 ?? "" }) } }) } }) };
  }