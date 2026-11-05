// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 98691 range:15105640..15110478
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98691: (e, t, r) => {
    "use strict";
    r.d(t, { x: () => b });
    var n = r(17392), s = r(40328), o = r(8032), i = r(95212), a = r(80732), c = r(31774), l = r(80901), u = r(36672), d = r(77095), p = r(88031), m = r(81958), h = r(70569), f = r(22189), g = r(12257), y = r(9771);
    const w = m.Ik({ text: m.Yj().optional(), annotations: m.Ik({ title: m.Yj().optional(), url: m.Yj().optional() }).array().optional() }), v = m.Ik({ output_text: m.Yj().optional(), output: m.Ik({ content: w.array().optional() }).array().optional() });
    function _(e2) {
      return async (t2, r2) => {
        const n2 = { method: "POST", headers: { "content-type": "application/json", ...(0, y.AJ)(e2), ...void 0 !== e2.apiKey ? { authorization: `Bearer ${e2.apiKey}` } : {} }, body: JSON.stringify({ model: e2.modelId, input: `Search the web for the following query and return a concise answer with sources:
${r2.searchTerm}`, tools: [{ type: e2.toolType }] }), signal: t2.signal }, s2 = void 0 === e2.apiKey && void 0 !== e2.apiKeyHelper ? (0, f.G)(fetch, (0, h.xU)(e2.apiKeyHelper)) : fetch, o2 = await s2((0, g.nh)(e2.baseUrl, "/responses"), n2), i2 = await o2.text();
        if (!o2.ok) throw new Error(`Provider request failed: ${o2.status} ${o2.statusText}
${i2}`);
        const a2 = v.parse(JSON.parse(i2)), c2 = (a2.output ?? []).flatMap((e3) => e3.content ?? []), l2 = a2.output_text ?? c2.map((e3) => e3.text ?? "").filter(Boolean).join("\n"), u2 = /* @__PURE__ */ new Map();
        for (const e3 of c2) for (const { url: t3, title: r3 } of e3.annotations ?? []) t3 && u2.set(t3, { url: t3, title: r3 ?? t3, text: e3.text ?? "" });
        return { answer: l2 || void 0, documents: [...u2.values()] };
      };
    }
    const A = 'Private inference is enabled but has no endpoint configuration. Put private-inference.toml in the enterprise Cursor directory (a Grok Build config.toml: [model_providers.<name>] with base_url, api_backend = "responses" and env_key or [auth] auth_provider_command — an executable path that prints the bare token — one [model.<key>] per model, [models] default), or for development set CURSOR_PRIVATE_INFERENCE_CONFIG=<config.toml> or the CURSOR_PRIVATE_INFERENCE_BASE_URL / _MODEL shorthand, then restart, or ask your admin to disable private inference for your team.', S = "Private inference requires durable usage storage and an authenticated usage-reporting transport.";
    function b(e2) {
      const { sessionProvider: t2, catalog: r2, gatewayRetry: n2, usageAdmission: s2, promptQualityCaptures: o2 } = e2, i2 = (t3) => E((0, d.q1)(t3), () => {
      }, e2.getPrivacyModeEnum, e2.attachAttemptContext);
      return void 0 !== n2 ? void 0 === s2 ? i2(S) : E((0, u.rv)(n2, s2, o2), () => {
        const e3 = n2.state();
        return "active" === e3.kind ? e3.catalog : void 0;
      }, e2.getPrivacyModeEnum, e2.attachAttemptContext, o2) : void 0 === t2 || void 0 === r2 ? i2(e2.configErrorDetail ?? A) : void 0 === s2 ? i2(S) : E((0, d.Ti)(t2, r2, s2, o2), () => r2, e2.getPrivacyModeEnum, e2.attachAttemptContext, o2);
    }
    function E(e2, t2, r2, u2, m2) {
      const h2 = /* @__PURE__ */ (function() {
        const e3 = (e4) => new s.T(`${e4} is disabled in private inference: it would send content to Cursor's backend.`, o.C.Unimplemented);
        return { runWebSearch: async () => {
          throw e3("Web search");
        }, runWebFetch: async () => {
          throw e3("Web fetch");
        }, runGenerateImage: async () => {
          throw e3("Image generation");
        }, runGenerateVideo: async () => {
          throw e3("Video generation");
        }, runXSearch: async () => {
          throw e3("X search");
        } };
      })();
      return new i.o({ createAgentConfig: (e3) => {
        const r3 = t2(), s2 = void 0 === r3 ? void 0 : (0, d.gV)(r3, e3.resolvedModel ?? e3.requestedModel);
        return (0, a.A)(e3, h2, void 0 === s2 ? {} : (function(e4, t3) {
          if (void 0 === e4.webSearchTool) return {};
          const r4 = (0, p.$B)(e4.endpoint);
          return { webSearch: _({ baseUrl: e4.endpoint.baseUrl, modelId: e4.providerModelId, toolType: e4.webSearchTool, ...r4, customHeaders: (0, n.oo)(r4.customHeaders, t3) }) };
        })(s2, e3.originalRequestId), { webSearch: void 0 !== s2?.webSearchTool, webFetch: false, generateImage: false, connectScm: false, xSearch: false });
      }, createPromptSession: e2, getPrivacyMode: () => (0, l.a)(r2()), agentEvents: { unbound: { reason: "private inference: AdmitRun has no server stream for agent events; only usage is reported" } }, retryLogging: { tag: "private_inference_agent_retries" }, reconnectEndpoint: "private-inference-provider", prepareAttemptContext: (0, c.g)(u2), ...void 0 === m2 ? {} : { onRunFinished: (e3, t3) => m2.finishRun(e3, t3.requestId, t3.status) } });
    }
  }