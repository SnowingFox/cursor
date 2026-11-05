// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 12257 range:3790716..3798306
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12257: (e, t, r) => {
    "use strict";
    r.d(t, { Nz: () => x, Kt: () => C, nh: () => T, g3: () => k });
    var n = r(65716), s = r(70569), o = r(22189), i = r(81958);
    function a(e2) {
      if (!f(e2) || "string" != typeof e2.id) return;
      const t2 = p(e2.api_types), r2 = (function(e3, t3) {
        if (void 0 !== e3?.context_length || void 0 === t3) return e3;
        return { ...e3, context_length: t3 };
      })((function(e3) {
        if (!f(e3)) return;
        const t3 = p(e3.reasoning_effort);
        return { ...h(e3.context_length) ? { context_length: e3.context_length } : {}, ...h(e3.max_output_tokens) ? { max_output_tokens: e3.max_output_tokens } : {}, ..."boolean" == typeof e3.supports_vision ? { supports_vision: e3.supports_vision } : {}, ...void 0 !== t3 ? { reasoning_effort: t3 } : {} };
      })(e2.capabilities), h(e2.context_length) ? e2.context_length : void 0), n2 = m(e2.cost) ?? m(f(e2.capabilities) ? e2.capabilities.cost : void 0);
      return { id: e2.id, ...void 0 !== t2 ? { api_types: t2 } : {}, ...void 0 !== r2 ? { capabilities: r2 } : {}, ...void 0 !== n2 ? { long_context_threshold_tokens: n2 } : {} };
    }
    function c(e2) {
      return f(e2) && Array.isArray(e2.data) ? e2.data : Array.isArray(e2) ? e2 : [];
    }
    const l = /* @__PURE__ */ new Set(["chat_completions", "responses", "openai_chat", "openai_responses"]), u = i.KC([i.g1(i.L5()), i.YO(i.g1(i.L5()))]), d = i.Ik({ api_types: i.YO(i.Yj().min(1)).min(1).refine((e2) => e2.some((e3) => l.has(e3))), capabilities: i.Ik({ context_length: i.ai().finite().positive().optional(), max_output_tokens: i.ai().finite().positive().optional(), output_modalities: i.YO(i.Yj()).optional(), input_modalities: i.YO(i.Yj()).optional(), supports_tool_use: i.zM().optional(), supports_streaming: i.zM().optional(), supports_reasoning: i.zM().optional(), supports_vision: i.zM().optional(), reasoning_effort: i.YO(i.Yj()).optional(), cost: u.optional() }).optional(), cost: u.optional() });
    function p(e2) {
      if (Array.isArray(e2)) return e2.filter((e3) => "string" == typeof e3);
    }
    function m(e2) {
      const t2 = Array.isArray(e2) ? e2 : [e2];
      for (const e3 of t2) {
        if (!f(e3) || !f(e3.long_context)) continue;
        const t3 = e3.long_context.threshold_tokens;
        if (h(t3) && t3 > 0) return Math.floor(t3);
      }
    }
    function h(e2) {
      return "number" == typeof e2 && Number.isFinite(e2);
    }
    function f(e2) {
      return null !== e2 && "object" == typeof e2 && !Array.isArray(e2);
    }
    const g = /* @__PURE__ */ new Set(["preview"]);
    function y(e2, t2) {
      const r2 = e2.trim();
      if (!r2 || 0 === t2.length) return;
      if (void 0 !== w(t2, r2)) return r2;
      for (const e3 of (function(e4) {
        switch (e4) {
          case "composer-2":
            return ["grok-composer-2"];
          case "composer-2.5":
            return ["grok-composer-2.5"];
          default:
            return [];
        }
      })(r2)) if (void 0 !== w(t2, e3)) return e3;
      return (function(e3, t3) {
        const r3 = v(e3, t3, A);
        if (r3.length > 0) return _(r3);
        return _(v(e3, t3, S));
      })(t2, r2);
    }
    function w(e2, t2) {
      for (const r2 of e2) if (r2.id === t2) return r2;
    }
    function v(e2, t2, r2) {
      const n2 = [];
      for (const s2 of e2) r2(t2, s2.id) && n2.push(s2.id);
      return n2;
    }
    function _(e2) {
      if (1 === e2.length) return e2[0];
    }
    function A(e2, t2) {
      if (t2 === e2) return false;
      const r2 = b(e2);
      return b(t2) === r2;
    }
    function S(e2, t2) {
      const r2 = b(e2), n2 = b(t2), s2 = n2.slice(r2.length + 1);
      return n2.startsWith(`${r2}-`) && (function(e3) {
        const t3 = e3.split("-")[0];
        return g.has(t3);
      })(s2);
    }
    function b(e2) {
      const t2 = e2.lastIndexOf("/");
      return -1 === t2 ? e2 : e2.slice(t2 + 1);
    }
    var E = r(9771);
    const I = 2e3;
    async function C(e2) {
      const t2 = await k(e2);
      return "string" == typeof t2 ? void 0 : t2;
    }
    async function k(e2) {
      const t2 = await (async function(e3) {
        const t3 = (function(e4) {
          const t4 = Object.entries(e4.customHeaders ?? {}).map(([e5, t5]) => `${e5.toLowerCase()}:${t5}`).sort(P).join("\n");
          return [e4.baseUrl, e4.apiKey ?? "", void 0 === e4.apiKeyHelper ? "" : (0, s.il)(e4.apiKeyHelper), t4].join("\0");
        })(e3), r3 = R.get(t3);
        if (void 0 !== r3) return r3;
        const i2 = B.get(t3);
        if (void 0 !== i2) return i2;
        const a2 = (async function(e4) {
          const t4 = new AbortController();
          try {
            const r4 = { method: "GET", headers: { ...(0, E.AJ)(e4), ...void 0 !== e4.apiKey ? { authorization: `Bearer ${e4.apiKey}` } : {} }, signal: t4.signal }, i3 = await (async function(e5) {
              const t5 = e5.fetchImpl ?? fetch;
              if (void 0 !== e5.apiKey || void 0 === e5.apiKeyHelper) return t5;
              const r5 = (0, s.xU)(e5.apiKeyHelper);
              return await r5.getApiKey(), (0, o.G)(t5, r5);
            })(e4), a3 = async () => {
              const t5 = await i3(T(e4.baseUrl, "/models"), r4);
              if (!t5.ok) return t5.status >= 500 ? "no-answer" : "unusable-answer";
              return (function(e5) {
                return f(e5) && Array.isArray(e5.data) ? e5.data : void 0;
              })(await t5.json()) ?? "unusable-answer";
            };
            return await (0, n.wj)(a3(), e4.timeoutMs ?? I, "gateway /models probe timed out");
          } catch {
            return t4.abort(), "no-answer";
          }
        })(e3).then((e4) => ("string" != typeof e4 && R.set(t3, e4), e4)).finally(() => {
          B.delete(t3);
        });
        return B.set(t3, a2), a2;
      })(e2);
      return "string" == typeof t2 ? t2 : { entry: J(t2, e2.modelId), extendedCapabilitiesDetected: (r2 = t2, c(r2).some((e3) => d.safeParse(e3).success)) };
      var r2;
    }
    function x(e2) {
      return e2.includes("responses") || e2.includes("openai_responses") ? "responses" : e2.includes("chat_completions") || e2.includes("openai_chat") ? "chat_completions" : void 0;
    }
    function T(e2, t2) {
      return `${e2.replace(/\/+$/u, "").replace(/\/chat\/completions$/u, "").replace(/\/responses$/u, "").replace(/\/messages$/u, "")}${t2}`;
    }
    const R = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map();
    function P(e2, t2) {
      return e2 < t2 ? -1 : e2 > t2 ? 1 : 0;
    }
    function J(e2, t2) {
      const r2 = (function(e3) {
        return c(e3).flatMap((e4) => {
          const t3 = a(e4);
          return void 0 !== t3 ? [t3] : [];
        });
      })(e2), n2 = y(t2, r2.map((e3) => ({ id: e3.id.trim() })));
      if (void 0 === n2) return;
      const s2 = r2.find((e3) => e3.id.trim() === n2);
      return void 0 !== s2 ? (function(e3, t3) {
        return { modelId: t3, apiTypes: e3.api_types ?? [], contextLength: M(e3.capabilities?.context_length), longContextThresholdTokens: M(e3.long_context_threshold_tokens), maxOutputTokens: M(e3.capabilities?.max_output_tokens), ...void 0 !== e3.capabilities?.supports_vision ? { supportsVision: e3.capabilities.supports_vision } : {}, ...void 0 !== e3.capabilities?.reasoning_effort ? { reasoningEffortValues: [...e3.capabilities.reasoning_effort] } : {} };
      })(s2, n2) : void 0;
    }
    function M(e2) {
      return "number" == typeof e2 && Number.isFinite(e2) && e2 > 0 ? Math.floor(e2) : void 0;
    }
  }