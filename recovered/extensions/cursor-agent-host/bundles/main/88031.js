// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 88031 range:12248668..12340430
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
88031: (e, t, r) => {
    "use strict";
    r.d(t, { ng: () => Ke, uK: () => tt, Je: () => rt, $B: () => Xe, _x: () => Ye });
    var n = r(73024), s = r(65716), o = r(13874), i = r(95831), a = r(12257), c = r(23269), l = r(29017), u = r(81958);
    function d(e2) {
      var t2, r2;
      return null != (r2 = null == (t2 = null == e2 ? void 0 : e2.content) ? void 0 : t2.map(({ token: e3, logprob: t3, top_logprobs: r3 }) => ({ token: e3, logprob: t3, topLogprobs: r3 ? r3.map(({ token: e4, logprob: t4 }) => ({ token: e4, logprob: t4 })) : [] }))) ? r2 : void 0;
    }
    function p(e2) {
      switch (e2) {
        case "stop":
          return "stop";
        case "length":
          return "length";
        case "content_filter":
          return "content-filter";
        case "function_call":
        case "tool_calls":
          return "tool-calls";
        default:
          return "unknown";
      }
    }
    var m = u.Ik({ error: u.Ik({ message: u.Yj(), type: u.Yj().nullish(), param: u.bz().nullish(), code: u.KC([u.Yj(), u.ai()]).nullish() }) }), h = (0, c.sl)({ errorSchema: m, errorToMessage: (e2) => e2.error.message });
    function f({ id: e2, model: t2, created: r2 }) {
      return { id: null != e2 ? e2 : void 0, modelId: null != t2 ? t2 : void 0, timestamp: null != r2 ? new Date(1e3 * r2) : void 0 };
    }
    var g = class {
      constructor(e2, t2, r2) {
        this.specificationVersion = "v1", this.modelId = e2, this.settings = t2, this.config = r2;
      }
      get supportsStructuredOutputs() {
        var e2;
        return null != (e2 = this.settings.structuredOutputs) ? e2 : _(this.modelId);
      }
      get defaultObjectGenerationMode() {
        return this.modelId.startsWith("gpt-4o-audio-preview") ? "tool" : this.supportsStructuredOutputs ? "json" : "tool";
      }
      get provider() {
        return this.config.provider;
      }
      get supportsImageUrls() {
        return !this.settings.downloadImages;
      }
      getArgs({ mode: e2, prompt: t2, maxTokens: r2, temperature: n2, topP: s2, topK: o2, frequencyPenalty: i2, presencePenalty: a2, stopSequences: u2, responseFormat: d2, seed: p2, providerMetadata: m2 }) {
        var h2, f2, g2, y2, w2, v2, S2, b2;
        const E2 = e2.type, I2 = [];
        null != o2 && I2.push({ type: "unsupported-setting", setting: "topK" }), "json" !== (null == d2 ? void 0 : d2.type) || null == d2.schema || this.supportsStructuredOutputs || I2.push({ type: "unsupported-setting", setting: "responseFormat", details: "JSON response format schema is only supported with structuredOutputs" });
        const C2 = this.settings.useLegacyFunctionCalling;
        if (C2 && true === this.settings.parallelToolCalls) throw new l.b8({ functionality: "useLegacyFunctionCalling with parallelToolCalls" });
        if (C2 && this.supportsStructuredOutputs) throw new l.b8({ functionality: "structuredOutputs with useLegacyFunctionCalling" });
        const { messages: k2, warnings: x2 } = (function({ prompt: e3, useLegacyFunctionCalling: t3 = false, systemMessageMode: r3 = "system" }) {
          const n3 = [], s3 = [];
          for (const { role: o3, content: i3 } of e3) switch (o3) {
            case "system":
              switch (r3) {
                case "system":
                  n3.push({ role: "system", content: i3 });
                  break;
                case "developer":
                  n3.push({ role: "developer", content: i3 });
                  break;
                case "remove":
                  s3.push({ type: "other", message: "system messages are removed for this model" });
                  break;
                default:
                  throw new Error(`Unsupported system message mode: ${r3}`);
              }
              break;
            case "user":
              if (1 === i3.length && "text" === i3[0].type) {
                n3.push({ role: "user", content: i3[0].text });
                break;
              }
              n3.push({ role: "user", content: i3.map((e4, t4) => {
                var r4, n4, s4, o4;
                switch (e4.type) {
                  case "text":
                    return { type: "text", text: e4.text };
                  case "image":
                    return { type: "image_url", image_url: { url: e4.image instanceof URL ? e4.image.toString() : `data:${null != (r4 = e4.mimeType) ? r4 : "image/jpeg"};base64,${(0, c.n_)(e4.image)}`, detail: null == (s4 = null == (n4 = e4.providerMetadata) ? void 0 : n4.openai) ? void 0 : s4.imageDetail } };
                  case "file":
                    if (e4.data instanceof URL) throw new l.b8({ functionality: "'File content parts with URL data' functionality not supported." });
                    switch (e4.mimeType) {
                      case "audio/wav":
                        return { type: "input_audio", input_audio: { data: e4.data, format: "wav" } };
                      case "audio/mp3":
                      case "audio/mpeg":
                        return { type: "input_audio", input_audio: { data: e4.data, format: "mp3" } };
                      case "application/pdf":
                        return { type: "file", file: { filename: null != (o4 = e4.filename) ? o4 : `part-${t4}.pdf`, file_data: `data:application/pdf;base64,${e4.data}` } };
                      default:
                        throw new l.b8({ functionality: `File content part type ${e4.mimeType} in user messages` });
                    }
                }
              }) });
              break;
            case "assistant": {
              let e4 = "";
              const r4 = [];
              for (const t4 of i3) switch (t4.type) {
                case "text":
                  e4 += t4.text;
                  break;
                case "tool-call":
                  r4.push({ id: t4.toolCallId, type: "function", function: { name: t4.toolName, arguments: JSON.stringify(t4.args) } });
              }
              if (t3) {
                if (r4.length > 1) throw new l.b8({ functionality: "useLegacyFunctionCalling with multiple tool calls in one message" });
                n3.push({ role: "assistant", content: e4, function_call: r4.length > 0 ? r4[0].function : void 0 });
              } else n3.push({ role: "assistant", content: e4, tool_calls: r4.length > 0 ? r4 : void 0 });
              break;
            }
            case "tool":
              for (const e4 of i3) t3 ? n3.push({ role: "function", name: e4.toolName, content: "string" == typeof e4.result ? e4.result : JSON.stringify(e4.result) }) : n3.push({ role: "tool", tool_call_id: e4.toolCallId, content: "string" == typeof e4.result ? e4.result : JSON.stringify(e4.result) });
              break;
            default:
              throw new Error(`Unsupported role: ${o3}`);
          }
          return { messages: n3, warnings: s3 };
        })({ prompt: t2, useLegacyFunctionCalling: C2, systemMessageMode: A(this.modelId) });
        I2.push(...x2);
        const T2 = { model: this.modelId, logit_bias: this.settings.logitBias, logprobs: true === this.settings.logprobs || "number" == typeof this.settings.logprobs || void 0, top_logprobs: "number" == typeof this.settings.logprobs ? this.settings.logprobs : "boolean" == typeof this.settings.logprobs && this.settings.logprobs ? 0 : void 0, user: this.settings.user, parallel_tool_calls: this.settings.parallelToolCalls, max_tokens: r2, temperature: n2, top_p: s2, frequency_penalty: i2, presence_penalty: a2, response_format: "json" === (null == d2 ? void 0 : d2.type) ? this.supportsStructuredOutputs && null != d2.schema ? { type: "json_schema", json_schema: { schema: d2.schema, strict: true, name: null != (h2 = d2.name) ? h2 : "response", description: d2.description } } : { type: "json_object" } : void 0, stop: u2, seed: p2, max_completion_tokens: null == (f2 = null == m2 ? void 0 : m2.openai) ? void 0 : f2.maxCompletionTokens, store: null == (g2 = null == m2 ? void 0 : m2.openai) ? void 0 : g2.store, metadata: null == (y2 = null == m2 ? void 0 : m2.openai) ? void 0 : y2.metadata, prediction: null == (w2 = null == m2 ? void 0 : m2.openai) ? void 0 : w2.prediction, reasoning_effort: null != (S2 = null == (v2 = null == m2 ? void 0 : m2.openai) ? void 0 : v2.reasoningEffort) ? S2 : this.settings.reasoningEffort, messages: k2 };
        switch (_(this.modelId) ? (null != T2.temperature && (T2.temperature = void 0, I2.push({ type: "unsupported-setting", setting: "temperature", details: "temperature is not supported for reasoning models" })), null != T2.top_p && (T2.top_p = void 0, I2.push({ type: "unsupported-setting", setting: "topP", details: "topP is not supported for reasoning models" })), null != T2.frequency_penalty && (T2.frequency_penalty = void 0, I2.push({ type: "unsupported-setting", setting: "frequencyPenalty", details: "frequencyPenalty is not supported for reasoning models" })), null != T2.presence_penalty && (T2.presence_penalty = void 0, I2.push({ type: "unsupported-setting", setting: "presencePenalty", details: "presencePenalty is not supported for reasoning models" })), null != T2.logit_bias && (T2.logit_bias = void 0, I2.push({ type: "other", message: "logitBias is not supported for reasoning models" })), null != T2.logprobs && (T2.logprobs = void 0, I2.push({ type: "other", message: "logprobs is not supported for reasoning models" })), null != T2.top_logprobs && (T2.top_logprobs = void 0, I2.push({ type: "other", message: "topLogprobs is not supported for reasoning models" })), null != T2.max_tokens && (null == T2.max_completion_tokens && (T2.max_completion_tokens = T2.max_tokens), T2.max_tokens = void 0)) : (this.modelId.startsWith("gpt-4o-search-preview") || this.modelId.startsWith("gpt-4o-mini-search-preview")) && null != T2.temperature && (T2.temperature = void 0, I2.push({ type: "unsupported-setting", setting: "temperature", details: "temperature is not supported for the search preview models and has been removed." })), E2) {
          case "regular": {
            const { tools: t3, tool_choice: r3, functions: n3, function_call: s3, toolWarnings: o3 } = (function({ mode: e3, useLegacyFunctionCalling: t4 = false, structuredOutputs: r4 }) {
              var n4;
              const s4 = (null == (n4 = e3.tools) ? void 0 : n4.length) ? e3.tools : void 0, o4 = [];
              if (null == s4) return { tools: void 0, tool_choice: void 0, toolWarnings: o4 };
              const i3 = e3.toolChoice;
              if (t4) {
                const e4 = [];
                for (const t5 of s4) "provider-defined" === t5.type ? o4.push({ type: "unsupported-tool", tool: t5 }) : e4.push({ name: t5.name, description: t5.description, parameters: t5.parameters });
                if (null == i3) return { functions: e4, function_call: void 0, toolWarnings: o4 };
                switch (i3.type) {
                  case "auto":
                  case "none":
                  case void 0:
                    return { functions: e4, function_call: void 0, toolWarnings: o4 };
                  case "required":
                    throw new l.b8({ functionality: "useLegacyFunctionCalling and toolChoice: required" });
                  default:
                    return { functions: e4, function_call: { name: i3.toolName }, toolWarnings: o4 };
                }
              }
              const a3 = [];
              for (const e4 of s4) "provider-defined" === e4.type ? o4.push({ type: "unsupported-tool", tool: e4 }) : a3.push({ type: "function", function: { name: e4.name, description: e4.description, parameters: e4.parameters, strict: !!r4 || void 0 } });
              if (null == i3) return { tools: a3, tool_choice: void 0, toolWarnings: o4 };
              const c2 = i3.type;
              switch (c2) {
                case "auto":
                case "none":
                case "required":
                  return { tools: a3, tool_choice: c2, toolWarnings: o4 };
                case "tool":
                  return { tools: a3, tool_choice: { type: "function", function: { name: i3.toolName } }, toolWarnings: o4 };
                default: {
                  const e4 = c2;
                  throw new l.b8({ functionality: `Unsupported tool choice type: ${e4}` });
                }
              }
            })({ mode: e2, useLegacyFunctionCalling: C2, structuredOutputs: this.supportsStructuredOutputs });
            return { args: { ...T2, tools: t3, tool_choice: r3, functions: n3, function_call: s3 }, warnings: [...I2, ...o3] };
          }
          case "object-json":
            return { args: { ...T2, response_format: this.supportsStructuredOutputs && null != e2.schema ? { type: "json_schema", json_schema: { schema: e2.schema, strict: true, name: null != (b2 = e2.name) ? b2 : "response", description: e2.description } } : { type: "json_object" } }, warnings: I2 };
          case "object-tool":
            return { args: C2 ? { ...T2, function_call: { name: e2.tool.name }, functions: [{ name: e2.tool.name, description: e2.tool.description, parameters: e2.tool.parameters }] } : { ...T2, tool_choice: { type: "function", function: { name: e2.tool.name } }, tools: [{ type: "function", function: { name: e2.tool.name, description: e2.tool.description, parameters: e2.tool.parameters, strict: !!this.supportsStructuredOutputs || void 0 } }] }, warnings: I2 };
          default:
            throw new Error(`Unsupported type: ${E2}`);
        }
      }
      async doGenerate(e2) {
        var t2, r2, n2, s2, o2, i2, a2, l2;
        const { args: u2, warnings: m2 } = this.getArgs(e2), { responseHeaders: g2, value: y2, rawValue: v2 } = await (0, c.GU)({ url: this.config.url({ path: "/chat/completions", modelId: this.modelId }), headers: (0, c.m2)(this.config.headers(), e2.headers), body: u2, failedResponseHandler: h, successfulResponseHandler: (0, c.cV)(w), abortSignal: e2.abortSignal, fetch: this.config.fetch }), { messages: _2, ...A2 } = u2, S2 = y2.choices[0], b2 = null == (t2 = y2.usage) ? void 0 : t2.completion_tokens_details, E2 = null == (r2 = y2.usage) ? void 0 : r2.prompt_tokens_details, I2 = { openai: {} };
        return null != (null == b2 ? void 0 : b2.reasoning_tokens) && (I2.openai.reasoningTokens = null == b2 ? void 0 : b2.reasoning_tokens), null != (null == b2 ? void 0 : b2.accepted_prediction_tokens) && (I2.openai.acceptedPredictionTokens = null == b2 ? void 0 : b2.accepted_prediction_tokens), null != (null == b2 ? void 0 : b2.rejected_prediction_tokens) && (I2.openai.rejectedPredictionTokens = null == b2 ? void 0 : b2.rejected_prediction_tokens), null != (null == E2 ? void 0 : E2.cached_tokens) && (I2.openai.cachedPromptTokens = null == E2 ? void 0 : E2.cached_tokens), { text: null != (n2 = S2.message.content) ? n2 : void 0, toolCalls: this.settings.useLegacyFunctionCalling && S2.message.function_call ? [{ toolCallType: "function", toolCallId: (0, c.$C)(), toolName: S2.message.function_call.name, args: S2.message.function_call.arguments }] : null == (s2 = S2.message.tool_calls) ? void 0 : s2.map((e3) => {
          var t3;
          return { toolCallType: "function", toolCallId: null != (t3 = e3.id) ? t3 : (0, c.$C)(), toolName: e3.function.name, args: e3.function.arguments };
        }), finishReason: p(S2.finish_reason), usage: { promptTokens: null != (i2 = null == (o2 = y2.usage) ? void 0 : o2.prompt_tokens) ? i2 : NaN, completionTokens: null != (l2 = null == (a2 = y2.usage) ? void 0 : a2.completion_tokens) ? l2 : NaN }, rawCall: { rawPrompt: _2, rawSettings: A2 }, rawResponse: { headers: g2, body: v2 }, request: { body: JSON.stringify(u2) }, response: f(y2), warnings: m2, logprobs: d(S2.logprobs), providerMetadata: I2 };
      }
      async doStream(e2) {
        if (this.settings.simulateStreaming) {
          const t3 = await this.doGenerate(e2);
          return { stream: new ReadableStream({ start(e3) {
            if (e3.enqueue({ type: "response-metadata", ...t3.response }), t3.text && e3.enqueue({ type: "text-delta", textDelta: t3.text }), t3.toolCalls) for (const r3 of t3.toolCalls) e3.enqueue({ type: "tool-call-delta", toolCallType: "function", toolCallId: r3.toolCallId, toolName: r3.toolName, argsTextDelta: r3.args }), e3.enqueue({ type: "tool-call", ...r3 });
            e3.enqueue({ type: "finish", finishReason: t3.finishReason, usage: t3.usage, logprobs: t3.logprobs, providerMetadata: t3.providerMetadata }), e3.close();
          } }), rawCall: t3.rawCall, rawResponse: t3.rawResponse, warnings: t3.warnings };
        }
        const { args: t2, warnings: r2 } = this.getArgs(e2), n2 = { ...t2, stream: true, stream_options: "strict" === this.config.compatibility ? { include_usage: true } : void 0 }, { responseHeaders: s2, value: o2 } = await (0, c.GU)({ url: this.config.url({ path: "/chat/completions", modelId: this.modelId }), headers: (0, c.m2)(this.config.headers(), e2.headers), body: n2, failedResponseHandler: h, successfulResponseHandler: (0, c.Ds)(v), abortSignal: e2.abortSignal, fetch: this.config.fetch }), { messages: i2, ...a2 } = t2, u2 = [];
        let m2, g2 = "unknown", y2 = { promptTokens: void 0, completionTokens: void 0 }, w2 = true;
        const { useLegacyFunctionCalling: _2 } = this.settings, A2 = { openai: {} };
        return { stream: o2.pipeThrough(new TransformStream({ transform(e3, t3) {
          var r3, n3, s3, o3, i3, a3, h2, v2, S2, b2, E2, I2;
          if (!e3.success) return g2 = "error", void t3.enqueue({ type: "error", error: e3.error });
          const C2 = e3.value;
          if ("error" in C2) return g2 = "error", void t3.enqueue({ type: "error", error: C2.error });
          if (w2 && (w2 = false, t3.enqueue({ type: "response-metadata", ...f(C2) })), null != C2.usage) {
            const { prompt_tokens: e4, completion_tokens: t4, prompt_tokens_details: r4, completion_tokens_details: n4 } = C2.usage;
            y2 = { promptTokens: null != e4 ? e4 : void 0, completionTokens: null != t4 ? t4 : void 0 }, null != (null == n4 ? void 0 : n4.reasoning_tokens) && (A2.openai.reasoningTokens = null == n4 ? void 0 : n4.reasoning_tokens), null != (null == n4 ? void 0 : n4.accepted_prediction_tokens) && (A2.openai.acceptedPredictionTokens = null == n4 ? void 0 : n4.accepted_prediction_tokens), null != (null == n4 ? void 0 : n4.rejected_prediction_tokens) && (A2.openai.rejectedPredictionTokens = null == n4 ? void 0 : n4.rejected_prediction_tokens), null != (null == r4 ? void 0 : r4.cached_tokens) && (A2.openai.cachedPromptTokens = null == r4 ? void 0 : r4.cached_tokens);
          }
          const k2 = C2.choices[0];
          if (null != (null == k2 ? void 0 : k2.finish_reason) && (g2 = p(k2.finish_reason)), null == (null == k2 ? void 0 : k2.delta)) return;
          const x2 = k2.delta;
          null != x2.content && t3.enqueue({ type: "text-delta", textDelta: x2.content });
          const T2 = d(null == k2 ? void 0 : k2.logprobs);
          (null == T2 ? void 0 : T2.length) && (void 0 === m2 && (m2 = []), m2.push(...T2));
          const R2 = _2 && null != x2.function_call ? [{ type: "function", id: (0, c.$C)(), function: x2.function_call, index: 0 }] : x2.tool_calls;
          if (null != R2) for (const e4 of R2) {
            const d2 = e4.index;
            if (null == u2[d2]) {
              if ("function" !== e4.type) throw new l.xn({ data: e4, message: "Expected 'function' type." });
              if (null == e4.id) throw new l.xn({ data: e4, message: "Expected 'id' to be a string." });
              if (null == (null == (r3 = e4.function) ? void 0 : r3.name)) throw new l.xn({ data: e4, message: "Expected 'function.name' to be a string." });
              u2[d2] = { id: e4.id, type: "function", function: { name: e4.function.name, arguments: null != (n3 = e4.function.arguments) ? n3 : "" }, hasFinished: false };
              const a4 = u2[d2];
              null != (null == (s3 = a4.function) ? void 0 : s3.name) && null != (null == (o3 = a4.function) ? void 0 : o3.arguments) && (a4.function.arguments.length > 0 && t3.enqueue({ type: "tool-call-delta", toolCallType: "function", toolCallId: a4.id, toolName: a4.function.name, argsTextDelta: a4.function.arguments }), (0, c.v0)(a4.function.arguments) && (t3.enqueue({ type: "tool-call", toolCallType: "function", toolCallId: null != (i3 = a4.id) ? i3 : (0, c.$C)(), toolName: a4.function.name, args: a4.function.arguments }), a4.hasFinished = true));
              continue;
            }
            const p2 = u2[d2];
            p2.hasFinished || (null != (null == (a3 = e4.function) ? void 0 : a3.arguments) && (p2.function.arguments += null != (v2 = null == (h2 = e4.function) ? void 0 : h2.arguments) ? v2 : ""), t3.enqueue({ type: "tool-call-delta", toolCallType: "function", toolCallId: p2.id, toolName: p2.function.name, argsTextDelta: null != (S2 = e4.function.arguments) ? S2 : "" }), null != (null == (b2 = p2.function) ? void 0 : b2.name) && null != (null == (E2 = p2.function) ? void 0 : E2.arguments) && (0, c.v0)(p2.function.arguments) && (t3.enqueue({ type: "tool-call", toolCallType: "function", toolCallId: null != (I2 = p2.id) ? I2 : (0, c.$C)(), toolName: p2.function.name, args: p2.function.arguments }), p2.hasFinished = true));
          }
        }, flush(e3) {
          var t3, r3;
          e3.enqueue({ type: "finish", finishReason: g2, logprobs: m2, usage: { promptTokens: null != (t3 = y2.promptTokens) ? t3 : NaN, completionTokens: null != (r3 = y2.completionTokens) ? r3 : NaN }, ...null != A2 ? { providerMetadata: A2 } : {} });
        } })), rawCall: { rawPrompt: i2, rawSettings: a2 }, rawResponse: { headers: s2 }, request: { body: JSON.stringify(n2) }, warnings: r2 };
      }
    }, y = u.Ik({ prompt_tokens: u.ai().nullish(), completion_tokens: u.ai().nullish(), prompt_tokens_details: u.Ik({ cached_tokens: u.ai().nullish() }).nullish(), completion_tokens_details: u.Ik({ reasoning_tokens: u.ai().nullish(), accepted_prediction_tokens: u.ai().nullish(), rejected_prediction_tokens: u.ai().nullish() }).nullish() }).nullish(), w = u.Ik({ id: u.Yj().nullish(), created: u.ai().nullish(), model: u.Yj().nullish(), choices: u.YO(u.Ik({ message: u.Ik({ role: u.eu("assistant").nullish(), content: u.Yj().nullish(), function_call: u.Ik({ arguments: u.Yj(), name: u.Yj() }).nullish(), tool_calls: u.YO(u.Ik({ id: u.Yj().nullish(), type: u.eu("function"), function: u.Ik({ name: u.Yj(), arguments: u.Yj() }) })).nullish() }), index: u.ai(), logprobs: u.Ik({ content: u.YO(u.Ik({ token: u.Yj(), logprob: u.ai(), top_logprobs: u.YO(u.Ik({ token: u.Yj(), logprob: u.ai() })) })).nullable() }).nullish(), finish_reason: u.Yj().nullish() })), usage: y }), v = u.KC([u.Ik({ id: u.Yj().nullish(), created: u.ai().nullish(), model: u.Yj().nullish(), choices: u.YO(u.Ik({ delta: u.Ik({ role: u.k5(["assistant"]).nullish(), content: u.Yj().nullish(), function_call: u.Ik({ name: u.Yj().optional(), arguments: u.Yj().optional() }).nullish(), tool_calls: u.YO(u.Ik({ index: u.ai(), id: u.Yj().nullish(), type: u.eu("function").nullish(), function: u.Ik({ name: u.Yj().nullish(), arguments: u.Yj().nullish() }) })).nullish() }).nullish(), logprobs: u.Ik({ content: u.YO(u.Ik({ token: u.Yj(), logprob: u.ai(), top_logprobs: u.YO(u.Ik({ token: u.Yj(), logprob: u.ai() })) })).nullable() }).nullish(), finish_reason: u.Yj().nullish(), index: u.ai() })), usage: y }), m]);
    function _(e2) {
      return e2.startsWith("o");
    }
    function A(e2) {
      var t2, r2;
      return _(e2) ? null != (r2 = null == (t2 = S[e2]) ? void 0 : t2.systemMessageMode) ? r2 : "developer" : "system";
    }
    var S = { "o1-mini": { systemMessageMode: "remove" }, "o1-mini-2024-09-12": { systemMessageMode: "remove" }, "o1-preview": { systemMessageMode: "remove" }, "o1-preview-2024-09-12": { systemMessageMode: "remove" }, o3: { systemMessageMode: "developer" }, "o3-2025-04-16": { systemMessageMode: "developer" }, "o3-mini": { systemMessageMode: "developer" }, "o3-mini-2025-01-31": { systemMessageMode: "developer" }, "o4-mini": { systemMessageMode: "developer" }, "o4-mini-2025-04-16": { systemMessageMode: "developer" } };
    function b(e2) {
      return null == e2 ? void 0 : e2.tokens.map((t2, r2) => ({ token: t2, logprob: e2.token_logprobs[r2], topLogprobs: e2.top_logprobs ? Object.entries(e2.top_logprobs[r2]).map(([e3, t3]) => ({ token: e3, logprob: t3 })) : [] }));
    }
    var E = class {
      constructor(e2, t2, r2) {
        this.specificationVersion = "v1", this.defaultObjectGenerationMode = void 0, this.modelId = e2, this.settings = t2, this.config = r2;
      }
      get provider() {
        return this.config.provider;
      }
      getArgs({ mode: e2, inputFormat: t2, prompt: r2, maxTokens: n2, temperature: s2, topP: o2, topK: i2, frequencyPenalty: a2, presencePenalty: c2, stopSequences: u2, responseFormat: d2, seed: p2 }) {
        var m2;
        const h2 = e2.type, f2 = [];
        null != i2 && f2.push({ type: "unsupported-setting", setting: "topK" }), null != d2 && "text" !== d2.type && f2.push({ type: "unsupported-setting", setting: "responseFormat", details: "JSON response format is not supported." });
        const { prompt: g2, stopSequences: y2 } = (function({ prompt: e3, inputFormat: t3, user: r3 = "user", assistant: n3 = "assistant" }) {
          if ("prompt" === t3 && 1 === e3.length && "user" === e3[0].role && 1 === e3[0].content.length && "text" === e3[0].content[0].type) return { prompt: e3[0].content[0].text };
          let s3 = "";
          "system" === e3[0].role && (s3 += `${e3[0].content}

`, e3 = e3.slice(1));
          for (const { role: t4, content: o3 } of e3) switch (t4) {
            case "system":
              throw new l.M3({ message: "Unexpected system message in prompt: ${content}", prompt: e3 });
            case "user":
              s3 += `${r3}:
${o3.map((e4) => {
                switch (e4.type) {
                  case "text":
                    return e4.text;
                  case "image":
                    throw new l.b8({ functionality: "images" });
                }
              }).join("")}

`;
              break;
            case "assistant":
              s3 += `${n3}:
${o3.map((e4) => {
                switch (e4.type) {
                  case "text":
                    return e4.text;
                  case "tool-call":
                    throw new l.b8({ functionality: "tool-call messages" });
                }
              }).join("")}

`;
              break;
            case "tool":
              throw new l.b8({ functionality: "tool messages" });
            default:
              throw new Error(`Unsupported role: ${t4}`);
          }
          return s3 += `${n3}:
`, { prompt: s3, stopSequences: [`
${r3}:`] };
        })({ prompt: r2, inputFormat: t2 }), w2 = [...null != y2 ? y2 : [], ...null != u2 ? u2 : []], v2 = { model: this.modelId, echo: this.settings.echo, logit_bias: this.settings.logitBias, logprobs: "number" == typeof this.settings.logprobs ? this.settings.logprobs : "boolean" == typeof this.settings.logprobs && this.settings.logprobs ? 0 : void 0, suffix: this.settings.suffix, user: this.settings.user, max_tokens: n2, temperature: s2, top_p: o2, frequency_penalty: a2, presence_penalty: c2, seed: p2, prompt: g2, stop: w2.length > 0 ? w2 : void 0 };
        switch (h2) {
          case "regular":
            if (null == (m2 = e2.tools) ? void 0 : m2.length) throw new l.b8({ functionality: "tools" });
            if (e2.toolChoice) throw new l.b8({ functionality: "toolChoice" });
            return { args: v2, warnings: f2 };
          case "object-json":
            throw new l.b8({ functionality: "object-json mode" });
          case "object-tool":
            throw new l.b8({ functionality: "object-tool mode" });
          default:
            throw new Error(`Unsupported type: ${h2}`);
        }
      }
      async doGenerate(e2) {
        const { args: t2, warnings: r2 } = this.getArgs(e2), { responseHeaders: n2, value: s2, rawValue: o2 } = await (0, c.GU)({ url: this.config.url({ path: "/completions", modelId: this.modelId }), headers: (0, c.m2)(this.config.headers(), e2.headers), body: t2, failedResponseHandler: h, successfulResponseHandler: (0, c.cV)(I), abortSignal: e2.abortSignal, fetch: this.config.fetch }), { prompt: i2, ...a2 } = t2, l2 = s2.choices[0];
        return { text: l2.text, usage: { promptTokens: s2.usage.prompt_tokens, completionTokens: s2.usage.completion_tokens }, finishReason: p(l2.finish_reason), logprobs: b(l2.logprobs), rawCall: { rawPrompt: i2, rawSettings: a2 }, rawResponse: { headers: n2, body: o2 }, response: f(s2), warnings: r2, request: { body: JSON.stringify(t2) } };
      }
      async doStream(e2) {
        const { args: t2, warnings: r2 } = this.getArgs(e2), n2 = { ...t2, stream: true, stream_options: "strict" === this.config.compatibility ? { include_usage: true } : void 0 }, { responseHeaders: s2, value: o2 } = await (0, c.GU)({ url: this.config.url({ path: "/completions", modelId: this.modelId }), headers: (0, c.m2)(this.config.headers(), e2.headers), body: n2, failedResponseHandler: h, successfulResponseHandler: (0, c.Ds)(C), abortSignal: e2.abortSignal, fetch: this.config.fetch }), { prompt: i2, ...a2 } = t2;
        let l2, u2 = "unknown", d2 = { promptTokens: Number.NaN, completionTokens: Number.NaN }, m2 = true;
        return { stream: o2.pipeThrough(new TransformStream({ transform(e3, t3) {
          if (!e3.success) return u2 = "error", void t3.enqueue({ type: "error", error: e3.error });
          const r3 = e3.value;
          if ("error" in r3) return u2 = "error", void t3.enqueue({ type: "error", error: r3.error });
          m2 && (m2 = false, t3.enqueue({ type: "response-metadata", ...f(r3) })), null != r3.usage && (d2 = { promptTokens: r3.usage.prompt_tokens, completionTokens: r3.usage.completion_tokens });
          const n3 = r3.choices[0];
          null != (null == n3 ? void 0 : n3.finish_reason) && (u2 = p(n3.finish_reason)), null != (null == n3 ? void 0 : n3.text) && t3.enqueue({ type: "text-delta", textDelta: n3.text });
          const s3 = b(null == n3 ? void 0 : n3.logprobs);
          (null == s3 ? void 0 : s3.length) && (void 0 === l2 && (l2 = []), l2.push(...s3));
        }, flush(e3) {
          e3.enqueue({ type: "finish", finishReason: u2, logprobs: l2, usage: d2 });
        } })), rawCall: { rawPrompt: i2, rawSettings: a2 }, rawResponse: { headers: s2 }, warnings: r2, request: { body: JSON.stringify(n2) } };
      }
    }, I = u.Ik({ id: u.Yj().nullish(), created: u.ai().nullish(), model: u.Yj().nullish(), choices: u.YO(u.Ik({ text: u.Yj(), finish_reason: u.Yj(), logprobs: u.Ik({ tokens: u.YO(u.Yj()), token_logprobs: u.YO(u.ai()), top_logprobs: u.YO(u.g1(u.Yj(), u.ai())).nullable() }).nullish() })), usage: u.Ik({ prompt_tokens: u.ai(), completion_tokens: u.ai() }) }), C = u.KC([u.Ik({ id: u.Yj().nullish(), created: u.ai().nullish(), model: u.Yj().nullish(), choices: u.YO(u.Ik({ text: u.Yj(), finish_reason: u.Yj().nullish(), index: u.ai(), logprobs: u.Ik({ tokens: u.YO(u.Yj()), token_logprobs: u.YO(u.ai()), top_logprobs: u.YO(u.g1(u.Yj(), u.ai())).nullable() }).nullish() })), usage: u.Ik({ prompt_tokens: u.ai(), completion_tokens: u.ai() }).nullish() }), m]), k = class {
      constructor(e2, t2, r2) {
        this.specificationVersion = "v1", this.modelId = e2, this.settings = t2, this.config = r2;
      }
      get provider() {
        return this.config.provider;
      }
      get maxEmbeddingsPerCall() {
        var e2;
        return null != (e2 = this.settings.maxEmbeddingsPerCall) ? e2 : 2048;
      }
      get supportsParallelCalls() {
        var e2;
        return null == (e2 = this.settings.supportsParallelCalls) || e2;
      }
      async doEmbed({ values: e2, headers: t2, abortSignal: r2 }) {
        if (e2.length > this.maxEmbeddingsPerCall) throw new l.Ch({ provider: this.provider, modelId: this.modelId, maxEmbeddingsPerCall: this.maxEmbeddingsPerCall, values: e2 });
        const { responseHeaders: n2, value: s2 } = await (0, c.GU)({ url: this.config.url({ path: "/embeddings", modelId: this.modelId }), headers: (0, c.m2)(this.config.headers(), t2), body: { model: this.modelId, input: e2, encoding_format: "float", dimensions: this.settings.dimensions, user: this.settings.user }, failedResponseHandler: h, successfulResponseHandler: (0, c.cV)(x), abortSignal: r2, fetch: this.config.fetch });
        return { embeddings: s2.data.map((e3) => e3.embedding), usage: s2.usage ? { tokens: s2.usage.prompt_tokens } : void 0, rawResponse: { headers: n2 } };
      }
    }, x = u.Ik({ data: u.YO(u.Ik({ embedding: u.YO(u.ai()) })), usage: u.Ik({ prompt_tokens: u.ai() }).nullish() }), T = { "dall-e-3": 1, "dall-e-2": 10, "gpt-image-1": 10 }, R = /* @__PURE__ */ new Set(["gpt-image-1"]), B = class {
      constructor(e2, t2, r2) {
        this.modelId = e2, this.settings = t2, this.config = r2, this.specificationVersion = "v1";
      }
      get maxImagesPerCall() {
        var e2, t2;
        return null != (t2 = null != (e2 = this.settings.maxImagesPerCall) ? e2 : T[this.modelId]) ? t2 : 1;
      }
      get provider() {
        return this.config.provider;
      }
      async doGenerate({ prompt: e2, n: t2, size: r2, aspectRatio: n2, seed: s2, providerOptions: o2, headers: i2, abortSignal: a2 }) {
        var l2, u2, d2, p2;
        const m2 = [];
        null != n2 && m2.push({ type: "unsupported-setting", setting: "aspectRatio", details: "This model does not support aspect ratio. Use `size` instead." }), null != s2 && m2.push({ type: "unsupported-setting", setting: "seed" });
        const f2 = null != (d2 = null == (u2 = null == (l2 = this.config._internal) ? void 0 : l2.currentDate) ? void 0 : u2.call(l2)) ? d2 : /* @__PURE__ */ new Date(), { value: g2, responseHeaders: y2 } = await (0, c.GU)({ url: this.config.url({ path: "/images/generations", modelId: this.modelId }), headers: (0, c.m2)(this.config.headers(), i2), body: { model: this.modelId, prompt: e2, n: t2, size: r2, ...null != (p2 = o2.openai) ? p2 : {}, ...R.has(this.modelId) ? {} : { response_format: "b64_json" } }, failedResponseHandler: h, successfulResponseHandler: (0, c.cV)(P), abortSignal: a2, fetch: this.config.fetch });
        return { images: g2.data.map((e3) => e3.b64_json), warnings: m2, response: { timestamp: f2, modelId: this.modelId, headers: y2 } };
      }
    }, P = u.Ik({ data: u.YO(u.Ik({ b64_json: u.Yj() })) }), J = u.Ik({ include: u.YO(u.Yj()).nullish(), language: u.Yj().nullish(), prompt: u.Yj().nullish(), temperature: u.ai().min(0).max(1).nullish().default(0), timestampGranularities: u.YO(u.k5(["word", "segment"])).nullish().default(["segment"]) }), M = { afrikaans: "af", arabic: "ar", armenian: "hy", azerbaijani: "az", belarusian: "be", bosnian: "bs", bulgarian: "bg", catalan: "ca", chinese: "zh", croatian: "hr", czech: "cs", danish: "da", dutch: "nl", english: "en", estonian: "et", finnish: "fi", french: "fr", galician: "gl", german: "de", greek: "el", hebrew: "he", hindi: "hi", hungarian: "hu", icelandic: "is", indonesian: "id", italian: "it", japanese: "ja", kannada: "kn", kazakh: "kk", korean: "ko", latvian: "lv", lithuanian: "lt", macedonian: "mk", malay: "ms", marathi: "mr", maori: "mi", nepali: "ne", norwegian: "no", persian: "fa", polish: "pl", portuguese: "pt", romanian: "ro", russian: "ru", serbian: "sr", slovak: "sk", slovenian: "sl", spanish: "es", swahili: "sw", swedish: "sv", tagalog: "tl", tamil: "ta", thai: "th", turkish: "tr", ukrainian: "uk", urdu: "ur", vietnamese: "vi", welsh: "cy" }, q = class {
      constructor(e2, t2) {
        this.modelId = e2, this.config = t2, this.specificationVersion = "v1";
      }
      get provider() {
        return this.config.provider;
      }
      getArgs({ audio: e2, mediaType: t2, providerOptions: r2 }) {
        var n2, s2, o2, i2, a2;
        const l2 = (0, c.xI)({ provider: "openai", providerOptions: r2, schema: J }), u2 = new FormData(), d2 = e2 instanceof Uint8Array ? new Blob([e2]) : new Blob([(0, c.Z9)(e2)]);
        if (u2.append("model", this.modelId), u2.append("file", new File([d2], "audio", { type: t2 })), l2) {
          const e3 = { include: null != (n2 = l2.include) ? n2 : void 0, language: null != (s2 = l2.language) ? s2 : void 0, prompt: null != (o2 = l2.prompt) ? o2 : void 0, temperature: null != (i2 = l2.temperature) ? i2 : void 0, timestamp_granularities: null != (a2 = l2.timestampGranularities) ? a2 : void 0 };
          for (const t3 in e3) {
            const r3 = e3[t3];
            void 0 !== r3 && u2.append(t3, String(r3));
          }
        }
        return { formData: u2, warnings: [] };
      }
      async doGenerate(e2) {
        var t2, r2, n2, s2, o2, i2;
        const a2 = null != (n2 = null == (r2 = null == (t2 = this.config._internal) ? void 0 : t2.currentDate) ? void 0 : r2.call(t2)) ? n2 : /* @__PURE__ */ new Date(), { formData: l2, warnings: u2 } = this.getArgs(e2), { value: d2, responseHeaders: p2, rawValue: m2 } = await (0, c.S)({ url: this.config.url({ path: "/audio/transcriptions", modelId: this.modelId }), headers: (0, c.m2)(this.config.headers(), e2.headers), formData: l2, failedResponseHandler: h, successfulResponseHandler: (0, c.cV)(D), abortSignal: e2.abortSignal, fetch: this.config.fetch }), f2 = null != d2.language && d2.language in M ? M[d2.language] : void 0;
        return { text: d2.text, segments: null != (o2 = null == (s2 = d2.words) ? void 0 : s2.map((e3) => ({ text: e3.word, startSecond: e3.start, endSecond: e3.end }))) ? o2 : [], language: f2, durationInSeconds: null != (i2 = d2.duration) ? i2 : void 0, warnings: u2, response: { timestamp: a2, modelId: this.modelId, headers: p2, body: m2 } };
      }
    }, D = u.Ik({ text: u.Yj(), language: u.Yj().nullish(), duration: u.ai().nullish(), words: u.YO(u.Ik({ word: u.Yj(), start: u.ai(), end: u.ai() })).nullish() });
    function O(e2) {
      const t2 = Array.isArray(e2.content) ? e2.content : [];
      return t2.some((e3) => "image" === e3.type) ? t2.map((e3) => "image" === e3.type ? { type: "input_image", image_url: /^(data:|https?:\/\/)/.test(e3.data) ? e3.data : `data:${"string" == typeof e3.mimeType && "" !== e3.mimeType.trim() ? e3.mimeType : "image/png"};base64,${e3.data}`, detail: "auto" } : { type: "input_text", text: e3.text }) : void 0 === e2.result ? t2.filter((e3) => "text" === e3.type).map((e3) => e3.text).join("\n") : "string" == typeof e2.result ? e2.result : JSON.stringify(e2.result);
    }
    function N({ finishReason: e2, hasToolCalls: t2 }) {
      switch (e2) {
        case void 0:
        case null:
          return t2 ? "tool-calls" : "stop";
        case "max_output_tokens":
          return "length";
        case "content_filter":
          return "content-filter";
        default:
          return t2 ? "tool-calls" : "unknown";
      }
    }
    var F = class {
      constructor(e2, t2) {
        this.specificationVersion = "v1", this.defaultObjectGenerationMode = "json", this.supportsStructuredOutputs = true, this.modelId = e2, this.config = t2;
      }
      get provider() {
        return this.config.provider;
      }
      getArgs({ mode: e2, maxTokens: t2, temperature: r2, stopSequences: n2, topP: s2, topK: o2, presencePenalty: i2, frequencyPenalty: a2, seed: u2, prompt: d2, providerMetadata: p2, responseFormat: m2 }) {
        var h2, f2, g2;
        const y2 = [], w2 = (function(e3) {
          if (e3.startsWith("o")) return e3.startsWith("o1-mini") || e3.startsWith("o1-preview") ? { isReasoningModel: true, systemMessageMode: "remove", requiredAutoTruncation: false } : { isReasoningModel: true, systemMessageMode: "developer", requiredAutoTruncation: false };
          return { isReasoningModel: false, systemMessageMode: "system", requiredAutoTruncation: false };
        })(this.modelId), v2 = e2.type;
        null != o2 && y2.push({ type: "unsupported-setting", setting: "topK" }), null != u2 && y2.push({ type: "unsupported-setting", setting: "seed" }), null != i2 && y2.push({ type: "unsupported-setting", setting: "presencePenalty" }), null != a2 && y2.push({ type: "unsupported-setting", setting: "frequencyPenalty" }), null != n2 && y2.push({ type: "unsupported-setting", setting: "stopSequences" });
        const { messages: _2, warnings: A2 } = (function({ prompt: e3, systemMessageMode: t3 }) {
          const r3 = [], n3 = [];
          for (const { role: s3, content: o3 } of e3) switch (s3) {
            case "system":
              switch (t3) {
                case "system":
                  r3.push({ role: "system", content: o3 });
                  break;
                case "developer":
                  r3.push({ role: "developer", content: o3 });
                  break;
                case "remove":
                  n3.push({ type: "other", message: "system messages are removed for this model" });
                  break;
                default:
                  throw new Error(`Unsupported system message mode: ${t3}`);
              }
              break;
            case "user":
              r3.push({ role: "user", content: o3.map((e4, t4) => {
                var r4, n4, s4, o4;
                switch (e4.type) {
                  case "text":
                    return { type: "input_text", text: e4.text };
                  case "image":
                    return { type: "input_image", image_url: e4.image instanceof URL ? e4.image.toString() : `data:${null != (r4 = e4.mimeType) ? r4 : "image/jpeg"};base64,${(0, c.n_)(e4.image)}`, detail: null == (s4 = null == (n4 = e4.providerMetadata) ? void 0 : n4.openai) ? void 0 : s4.imageDetail };
                  case "file":
                    if (e4.data instanceof URL) throw new l.b8({ functionality: "File URLs in user messages" });
                    if ("application/pdf" === e4.mimeType) return { type: "input_file", filename: null != (o4 = e4.filename) ? o4 : `part-${t4}.pdf`, file_data: `data:application/pdf;base64,${e4.data}` };
                    throw new l.b8({ functionality: "Only PDF files are supported in user messages" });
                }
              }) });
              break;
            case "assistant":
              for (const e4 of o3) switch (e4.type) {
                case "text":
                  r3.push({ role: "assistant", content: [{ type: "output_text", text: e4.text }] });
                  break;
                case "tool-call":
                  r3.push({ type: "function_call", call_id: e4.toolCallId, name: e4.toolName, arguments: JSON.stringify(e4.args) });
              }
              break;
            case "tool":
              for (const e4 of o3) r3.push({ type: "function_call_output", call_id: e4.toolCallId, output: O(e4) });
              break;
            default:
              throw new Error(`Unsupported role: ${s3}`);
          }
          return { messages: r3, warnings: n3 };
        })({ prompt: d2, systemMessageMode: w2.systemMessageMode });
        y2.push(...A2);
        const S2 = (0, c.xI)({ provider: "openai", providerOptions: p2, schema: Y }), b2 = null == (h2 = null == S2 ? void 0 : S2.strictSchemas) || h2, E2 = { model: this.modelId, input: _2, temperature: r2, top_p: s2, max_output_tokens: t2, ..."json" === (null == m2 ? void 0 : m2.type) && { text: { format: null != m2.schema ? { type: "json_schema", strict: b2, name: null != (f2 = m2.name) ? f2 : "response", description: m2.description, schema: m2.schema } : { type: "json_object" } } }, metadata: null == S2 ? void 0 : S2.metadata, parallel_tool_calls: null == S2 ? void 0 : S2.parallelToolCalls, previous_response_id: null == S2 ? void 0 : S2.previousResponseId, store: null == S2 ? void 0 : S2.store, user: null == S2 ? void 0 : S2.user, instructions: null == S2 ? void 0 : S2.instructions, ...w2.isReasoningModel && (null != (null == S2 ? void 0 : S2.reasoningEffort) || null != (null == S2 ? void 0 : S2.reasoningSummary)) && { reasoning: { ...null != (null == S2 ? void 0 : S2.reasoningEffort) && { effort: S2.reasoningEffort }, ...null != (null == S2 ? void 0 : S2.reasoningSummary) && { summary: S2.reasoningSummary } } }, ...w2.requiredAutoTruncation && { truncation: "auto" } };
        switch (w2.isReasoningModel && (null != E2.temperature && (E2.temperature = void 0, y2.push({ type: "unsupported-setting", setting: "temperature", details: "temperature is not supported for reasoning models" })), null != E2.top_p && (E2.top_p = void 0, y2.push({ type: "unsupported-setting", setting: "topP", details: "topP is not supported for reasoning models" }))), v2) {
          case "regular": {
            const { tools: t3, tool_choice: r3, toolWarnings: n3 } = (function({ mode: e3, strict: t4 }) {
              var r4;
              const n4 = (null == (r4 = e3.tools) ? void 0 : r4.length) ? e3.tools : void 0, s3 = [];
              if (null == n4) return { tools: void 0, tool_choice: void 0, toolWarnings: s3 };
              const o3 = e3.toolChoice, i3 = [];
              for (const e4 of n4) switch (e4.type) {
                case "function":
                  i3.push({ type: "function", name: e4.name, description: e4.description, parameters: e4.parameters, strict: !!t4 || void 0 });
                  break;
                case "provider-defined":
                  "openai.web_search_preview" === e4.id ? i3.push({ type: "web_search_preview", search_context_size: e4.args.searchContextSize, user_location: e4.args.userLocation }) : s3.push({ type: "unsupported-tool", tool: e4 });
                  break;
                default:
                  s3.push({ type: "unsupported-tool", tool: e4 });
              }
              if (null == o3) return { tools: i3, tool_choice: void 0, toolWarnings: s3 };
              const a3 = o3.type;
              switch (a3) {
                case "auto":
                case "none":
                case "required":
                  return { tools: i3, tool_choice: a3, toolWarnings: s3 };
                case "tool":
                  return "web_search_preview" === o3.toolName ? { tools: i3, tool_choice: { type: "web_search_preview" }, toolWarnings: s3 } : { tools: i3, tool_choice: { type: "function", name: o3.toolName }, toolWarnings: s3 };
                default: {
                  const e4 = a3;
                  throw new l.b8({ functionality: `Unsupported tool choice type: ${e4}` });
                }
              }
            })({ mode: e2, strict: b2 });
            return { args: { ...E2, tools: t3, tool_choice: r3 }, warnings: [...y2, ...n3] };
          }
          case "object-json":
            return { args: { ...E2, text: { format: null != e2.schema ? { type: "json_schema", strict: b2, name: null != (g2 = e2.name) ? g2 : "response", description: e2.description, schema: e2.schema } : { type: "json_object" } } }, warnings: y2 };
          case "object-tool":
            return { args: { ...E2, tool_choice: { type: "function", name: e2.tool.name }, tools: [{ type: "function", name: e2.tool.name, description: e2.tool.description, parameters: e2.tool.parameters, strict: b2 }] }, warnings: y2 };
          default:
            throw new Error(`Unsupported type: ${v2}`);
        }
      }
      async doGenerate(e2) {
        var t2, r2, n2, s2, o2, i2, a2;
        const { args: d2, warnings: p2 } = this.getArgs(e2), m2 = this.config.url({ path: "/responses", modelId: this.modelId }), { responseHeaders: f2, value: g2, rawValue: y2 } = await (0, c.GU)({ url: m2, headers: (0, c.m2)(this.config.headers(), e2.headers), body: d2, failedResponseHandler: h, successfulResponseHandler: (0, c.cV)(u.Ik({ id: u.Yj(), created_at: u.ai(), error: u.Ik({ message: u.Yj(), code: u.Yj() }).nullish(), model: u.Yj(), output: u.YO(u.gM("type", [u.Ik({ type: u.eu("message"), role: u.eu("assistant"), content: u.YO(u.Ik({ type: u.eu("output_text"), text: u.Yj(), annotations: u.YO(u.Ik({ type: u.eu("url_citation"), start_index: u.ai(), end_index: u.ai(), url: u.Yj(), title: u.Yj() })) })) }), u.Ik({ type: u.eu("function_call"), call_id: u.Yj(), name: u.Yj(), arguments: u.Yj() }), u.Ik({ type: u.eu("web_search_call") }), u.Ik({ type: u.eu("computer_call") }), u.Ik({ type: u.eu("reasoning"), summary: u.YO(u.Ik({ type: u.eu("summary_text"), text: u.Yj() })) })])), incomplete_details: u.Ik({ reason: u.Yj() }).nullable(), usage: U })), abortSignal: e2.abortSignal, fetch: this.config.fetch });
        if (g2.error) throw new l.hL({ message: g2.error.message, url: m2, requestBodyValues: d2, statusCode: 400, responseHeaders: f2, responseBody: y2, isRetryable: false });
        const w2 = g2.output.filter((e3) => "message" === e3.type).flatMap((e3) => e3.content).filter((e3) => "output_text" === e3.type), v2 = g2.output.filter((e3) => "function_call" === e3.type).map((e3) => ({ toolCallType: "function", toolCallId: e3.call_id, toolName: e3.name, args: e3.arguments })), _2 = null != (r2 = null == (t2 = g2.output.find((e3) => "reasoning" === e3.type)) ? void 0 : t2.summary) ? r2 : null;
        return { text: w2.map((e3) => e3.text).join("\n"), sources: w2.flatMap((e3) => e3.annotations.map((e4) => {
          var t3, r3, n3;
          return { sourceType: "url", id: null != (n3 = null == (r3 = (t3 = this.config).generateId) ? void 0 : r3.call(t3)) ? n3 : (0, c.$C)(), url: e4.url, title: e4.title };
        })), finishReason: N({ finishReason: null == (n2 = g2.incomplete_details) ? void 0 : n2.reason, hasToolCalls: v2.length > 0 }), toolCalls: v2.length > 0 ? v2 : void 0, reasoning: _2 ? _2.map((e3) => ({ type: "text", text: e3.text })) : void 0, usage: { promptTokens: g2.usage.input_tokens, completionTokens: g2.usage.output_tokens }, rawCall: { rawPrompt: void 0, rawSettings: {} }, rawResponse: { headers: f2, body: y2 }, request: { body: JSON.stringify(d2) }, response: { id: g2.id, timestamp: new Date(1e3 * g2.created_at), modelId: g2.model }, providerMetadata: { openai: { responseId: g2.id, cachedPromptTokens: null != (o2 = null == (s2 = g2.usage.input_tokens_details) ? void 0 : s2.cached_tokens) ? o2 : null, reasoningTokens: null != (a2 = null == (i2 = g2.usage.output_tokens_details) ? void 0 : i2.reasoning_tokens) ? a2 : null } }, warnings: p2 };
      }
      async doStream(e2) {
        const { args: t2, warnings: r2 } = this.getArgs(e2), { responseHeaders: n2, value: s2 } = await (0, c.GU)({ url: this.config.url({ path: "/responses", modelId: this.modelId }), headers: (0, c.m2)(this.config.headers(), e2.headers), body: { ...t2, stream: true }, failedResponseHandler: h, successfulResponseHandler: (0, c.Ds)(K), abortSignal: e2.abortSignal, fetch: this.config.fetch }), o2 = this;
        let i2 = "unknown", a2 = NaN, l2 = NaN, u2 = null, d2 = null, p2 = null;
        const m2 = {};
        let f2 = false;
        const g2 = (e3, t3) => {
          if (0 === e3.argsText.length || t3 === e3.argsText) return t3;
          if (t3.startsWith(e3.argsText)) {
            const r3 = t3.slice(e3.argsText.length);
            if (0 === r3.length || e3.argsText.endsWith(r3)) return e3.argsText;
          }
          return t3;
        };
        return { stream: s2.pipeThrough(new TransformStream({ transform(e3, t3) {
          var r3, n3, s3, h2, y2, w2, v2, _2;
          if (!e3.success) return i2 = "error", void t3.enqueue({ type: "error", error: e3.error });
          null != o2.config.onResponseEvent && o2.config.onResponseEvent(e3.rawValue);
          const A2 = e3.value;
          if ((function(e4) {
            return "response.output_item.added" === e4.type;
          })(A2)) "function_call" === A2.item.type && (m2[A2.output_index] = { toolName: A2.item.name, toolCallId: A2.item.call_id, argsText: A2.item.arguments }, A2.item.arguments.length > 0 && t3.enqueue({ type: "tool-call-delta", toolCallType: "function", toolCallId: A2.item.call_id, toolName: A2.item.name, argsTextDelta: A2.item.arguments }));
          else if ((function(e4) {
            return "response.function_call_arguments.delta" === e4.type;
          })(A2)) {
            const e4 = m2[A2.output_index];
            if (null != e4) {
              const r4 = ((e5, t4) => 0 === t4.length ? "" : 0 === e5.argsText.length ? t4 : t4.startsWith(e5.argsText) ? t4.slice(e5.argsText.length) : t4)(e4, A2.delta);
              e4.argsText += r4, r4.length > 0 && t3.enqueue({ type: "tool-call-delta", toolCallType: "function", toolCallId: e4.toolCallId, toolName: e4.toolName, argsTextDelta: r4 });
            }
          } else if ((function(e4) {
            return "response.created" === e4.type;
          })(A2)) p2 = A2.response.id, t3.enqueue({ type: "response-metadata", id: A2.response.id, timestamp: new Date(1e3 * A2.response.created_at), modelId: A2.response.model });
          else if ((function(e4) {
            return "response.output_text.delta" === e4.type;
          })(A2)) t3.enqueue({ type: "text-delta", textDelta: A2.delta });
          else if ((function(e4) {
            return "response.reasoning_summary_text.delta" === e4.type;
          })(A2)) t3.enqueue({ type: "reasoning", textDelta: A2.delta });
          else if ((function(e4) {
            return "response.output_item.done" === e4.type;
          })(A2) && "function_call" === A2.item.type) {
            const e4 = m2[A2.output_index];
            m2[A2.output_index] = void 0, f2 = true, t3.enqueue({ type: "tool-call", toolCallType: "function", toolCallId: A2.item.call_id, toolName: A2.item.name, args: null != e4 ? g2(e4, A2.item.arguments) : A2.item.arguments });
          } else !(function(e4) {
            return "response.completed" === e4.type || "response.incomplete" === e4.type;
          })(A2) ? !(function(e4) {
            return "response.output_text.annotation.added" === e4.type;
          })(A2) ? (function(e4) {
            return "error" === e4.type;
          })(A2) && t3.enqueue({ type: "error", error: A2 }) : t3.enqueue({ type: "source", source: { sourceType: "url", id: null != (_2 = null == (v2 = (w2 = o2.config).generateId) ? void 0 : v2.call(w2)) ? _2 : (0, c.$C)(), url: A2.annotation.url, title: A2.annotation.title } }) : (i2 = N({ finishReason: null == (r3 = A2.response.incomplete_details) ? void 0 : r3.reason, hasToolCalls: f2 }), a2 = A2.response.usage.input_tokens, l2 = A2.response.usage.output_tokens, u2 = null != (s3 = null == (n3 = A2.response.usage.input_tokens_details) ? void 0 : n3.cached_tokens) ? s3 : u2, d2 = null != (y2 = null == (h2 = A2.response.usage.output_tokens_details) ? void 0 : h2.reasoning_tokens) ? y2 : d2);
        }, flush(e3) {
          e3.enqueue({ type: "finish", finishReason: i2, usage: { promptTokens: a2, completionTokens: l2 }, ...(null != u2 || null != d2) && { providerMetadata: { openai: { responseId: p2, cachedPromptTokens: u2, reasoningTokens: d2 } } } });
        } })), rawCall: { rawPrompt: void 0, rawSettings: {} }, rawResponse: { headers: n2 }, request: { body: JSON.stringify(t2) }, warnings: r2 };
      }
    }, U = u.Ik({ input_tokens: u.ai(), input_tokens_details: u.Ik({ cached_tokens: u.ai().nullish() }).nullish(), output_tokens: u.ai(), output_tokens_details: u.Ik({ reasoning_tokens: u.ai().nullish() }).nullish() }), L = u.Ik({ type: u.eu("response.output_text.delta"), delta: u.Yj() }), $ = u.Ik({ type: u.k5(["response.completed", "response.incomplete"]), response: u.Ik({ incomplete_details: u.Ik({ reason: u.Yj() }).nullish(), usage: U }) }), Q = u.Ik({ type: u.eu("response.created"), response: u.Ik({ id: u.Yj(), created_at: u.ai(), model: u.Yj() }) }), j = u.Ik({ type: u.eu("response.output_item.done"), output_index: u.ai(), item: u.gM("type", [u.Ik({ type: u.eu("message") }), u.Ik({ type: u.eu("function_call"), id: u.Yj(), call_id: u.Yj(), name: u.Yj(), arguments: u.Yj(), status: u.eu("completed") })]) }), G = u.Ik({ type: u.eu("response.function_call_arguments.delta"), item_id: u.Yj(), output_index: u.ai(), delta: u.Yj() }), H = u.Ik({ type: u.eu("response.output_item.added"), output_index: u.ai(), item: u.gM("type", [u.Ik({ type: u.eu("message") }), u.Ik({ type: u.eu("function_call"), id: u.Yj(), call_id: u.Yj(), name: u.Yj(), arguments: u.Yj() })]) }), z = u.Ik({ type: u.eu("response.output_text.annotation.added"), annotation: u.Ik({ type: u.eu("url_citation"), url: u.Yj(), title: u.Yj() }) }), W = u.Ik({ type: u.eu("response.reasoning_summary_text.delta"), item_id: u.Yj(), output_index: u.ai(), summary_index: u.ai(), delta: u.Yj() }), V = u.Ik({ type: u.eu("error"), code: u.Yj(), message: u.Yj(), param: u.Yj().nullish(), sequence_number: u.ai() }), K = u.KC([L, $, Q, j, G, H, z, W, V, u.Ik({ type: u.Yj() }).passthrough()]);
    var Y = u.Ik({ metadata: u.bz().nullish(), parallelToolCalls: u.zM().nullish(), previousResponseId: u.Yj().nullish(), store: u.zM().nullish(), user: u.Yj().nullish(), reasoningEffort: u.Yj().nullish(), strictSchemas: u.zM().nullish(), instructions: u.Yj().nullish(), reasoningSummary: u.Yj().nullish() }), Z = u.Ik({});
    var X = { webSearchPreview: function({ searchContextSize: e2, userLocation: t2 } = {}) {
      return { type: "provider-defined", id: "openai.web_search_preview", args: { searchContextSize: e2, userLocation: t2 }, parameters: Z };
    } }, ee = u.Ik({ instructions: u.Yj().nullish(), speed: u.ai().min(0.25).max(4).default(1).nullish() }), te = class {
      constructor(e2, t2) {
        this.modelId = e2, this.config = t2, this.specificationVersion = "v1";
      }
      get provider() {
        return this.config.provider;
      }
      getArgs({ text: e2, voice: t2 = "alloy", outputFormat: r2 = "mp3", speed: n2, instructions: s2, providerOptions: o2 }) {
        const i2 = [], a2 = (0, c.xI)({ provider: "openai", providerOptions: o2, schema: ee }), l2 = { model: this.modelId, input: e2, voice: t2, response_format: "mp3", speed: n2, instructions: s2 };
        if (r2 && (["mp3", "opus", "aac", "flac", "wav", "pcm"].includes(r2) ? l2.response_format = r2 : i2.push({ type: "unsupported-setting", setting: "outputFormat", details: `Unsupported output format: ${r2}. Using mp3 instead.` })), a2) {
          const e3 = {};
          for (const t3 in e3) {
            const r3 = e3[t3];
            void 0 !== r3 && (l2[t3] = r3);
          }
        }
        return { requestBody: l2, warnings: i2 };
      }
      async doGenerate(e2) {
        var t2, r2, n2;
        const s2 = null != (n2 = null == (r2 = null == (t2 = this.config._internal) ? void 0 : t2.currentDate) ? void 0 : r2.call(t2)) ? n2 : /* @__PURE__ */ new Date(), { requestBody: o2, warnings: i2 } = this.getArgs(e2), { value: a2, responseHeaders: l2, rawValue: u2 } = await (0, c.GU)({ url: this.config.url({ path: "/audio/speech", modelId: this.modelId }), headers: (0, c.m2)(this.config.headers(), e2.headers), body: o2, failedResponseHandler: h, successfulResponseHandler: (0, c.HD)(), abortSignal: e2.abortSignal, fetch: this.config.fetch });
        return { audio: a2, warnings: i2, request: { body: JSON.stringify(o2) }, response: { timestamp: s2, modelId: this.modelId, headers: l2, body: u2 } };
      }
    };
    function re(e2 = {}) {
      var t2, r2, n2;
      const s2 = null != (t2 = (0, c.ae)(e2.baseURL)) ? t2 : "https://api.openai.com/v1", o2 = null != (r2 = e2.compatibility) ? r2 : "compatible", i2 = null != (n2 = e2.name) ? n2 : "openai", a2 = () => ({ Authorization: `Bearer ${(0, c.WL)({ apiKey: e2.apiKey, environmentVariableName: "OPENAI_API_KEY", description: "OpenAI" })}`, "OpenAI-Organization": e2.organization, "OpenAI-Project": e2.project, ...e2.headers }), l2 = (t3, r3 = {}) => new g(t3, r3, { provider: `${i2}.chat`, url: ({ path: e3 }) => `${s2}${e3}`, headers: a2, compatibility: o2, fetch: e2.fetch }), u2 = (t3, r3 = {}) => new E(t3, r3, { provider: `${i2}.completion`, url: ({ path: e3 }) => `${s2}${e3}`, headers: a2, compatibility: o2, fetch: e2.fetch }), d2 = (t3, r3 = {}) => new k(t3, r3, { provider: `${i2}.embedding`, url: ({ path: e3 }) => `${s2}${e3}`, headers: a2, fetch: e2.fetch }), p2 = (t3, r3 = {}) => new B(t3, r3, { provider: `${i2}.image`, url: ({ path: e3 }) => `${s2}${e3}`, headers: a2, fetch: e2.fetch }), m2 = (t3) => new q(t3, { provider: `${i2}.transcription`, url: ({ path: e3 }) => `${s2}${e3}`, headers: a2, fetch: e2.fetch }), h2 = (t3) => new te(t3, { provider: `${i2}.speech`, url: ({ path: e3 }) => `${s2}${e3}`, headers: a2, fetch: e2.fetch }), f2 = (e3, t3) => {
        if (new.target) throw new Error("The OpenAI model function cannot be called with the new keyword.");
        return "gpt-3.5-turbo-instruct" === e3 ? u2(e3, t3) : l2(e3, t3);
      }, y2 = function(e3, t3) {
        return f2(e3, t3);
      };
      return y2.languageModel = f2, y2.chat = l2, y2.completion = u2, y2.responses = (t3) => new F(t3, { provider: `${i2}.responses`, url: ({ path: e3 }) => `${s2}${e3}`, headers: a2, fetch: e2.fetch, onResponseEvent: e2.onResponseEvent }), y2.embedding = d2, y2.textEmbedding = d2, y2.textEmbeddingModel = d2, y2.image = p2, y2.imageModel = p2, y2.transcription = m2, y2.transcriptionModel = m2, y2.speech = h2, y2.speechModel = h2, y2.tools = X, y2;
    }
    re({ compatibility: "strict" });
    var ne = r(6688), se = r(17392), oe = r(12595), ie = r(70569);
    function ae(e2, t2) {
      if ("object" == typeof e2 && null !== e2) {
        for (const [r2, n2] of Object.entries(e2)) if (r2 === t2) return n2;
      }
    }
    function ce(e2) {
      if ("reasoning" !== ae(e2, "type")) return;
      const t2 = ae(e2, "id"), r2 = ae(e2, "encrypted_content");
      return "string" == typeof t2 && "string" == typeof r2 ? { type: "reasoning", id: (0, oe.Be)(t2) ?? t2, encrypted_content: r2, summary: [] } : void 0;
    }
    function le(e2) {
      try {
        return JSON.parse(e2);
      } catch {
        return;
      }
    }
    function ue() {
      const e2 = /* @__PURE__ */ new Map();
      function t2(t3) {
        if ("response.output_item.done" !== ae(t3, "type")) return;
        const n2 = ae(t3, "item"), s2 = ce(n2);
        if (void 0 === s2) {
          if ("function_call" === ae(n2, "type")) {
            const t4 = ae(n2, "call_id");
            "string" == typeof t4 && void 0 !== r2 && (e2.set((0, oe.vc)(t4), r2), r2 = void 0);
          }
        } else r2 = s2;
      }
      let r2;
      return { rewriteRequestBody(t3) {
        if (0 === e2.size) return t3;
        let r3;
        try {
          r3 = JSON.parse(t3);
        } catch {
          return t3;
        }
        const n2 = ae(r3, "input");
        if (!Array.isArray(n2)) return t3;
        const s2 = /* @__PURE__ */ new Set();
        for (const e3 of n2) {
          const t4 = ce(e3);
          void 0 !== t4 && s2.add(t4.id);
        }
        const o2 = [];
        let i2 = false;
        for (const t4 of n2) {
          if ("function_call" === ae(t4, "type")) {
            const r4 = ae(t4, "call_id"), n3 = "string" == typeof r4 ? e2.get((0, oe.vc)(r4)) : void 0;
            void 0 === n3 || s2.has(n3.id) || (o2.push(n3), s2.add(n3.id), i2 = true);
          }
          o2.push(t4);
        }
        return i2 ? JSON.stringify({ ..."object" == typeof r3 && null !== r3 ? r3 : {}, input: o2 }) : t3;
      }, observeResponse(n2) {
        const s2 = n2.headers.get("content-type") ?? "";
        if (null === n2.body || !s2.includes("text/event-stream")) return n2;
        const o2 = n2.clone();
        return null !== o2.body && (async function(e3) {
          const r3 = e3.getReader(), n3 = new TextDecoder();
          let s3 = "";
          for (; ; ) {
            const { done: e4, value: o3 } = await r3.read();
            if (e4) break;
            for (s3 += n3.decode(o3, { stream: true }); ; ) {
              const e5 = s3.indexOf("\n");
              if (-1 === e5) break;
              const r4 = s3.slice(0, e5).trim();
              if (s3 = s3.slice(e5 + 1), !r4.startsWith("data: ")) continue;
              const n4 = le(r4.slice(6));
              void 0 !== n4 && t2(n4);
            }
          }
        })(o2.body).catch(() => {
          e2.clear(), r2 = void 0;
        }), n2;
      } };
    }
    var de = r(22189);
    class pe extends Error {
      constructor(e2) {
        super(`Provider stream ended without a terminal finish reason (finishReason=${e2 ?? "none"}) — connection likely dropped mid-stream`), this.name = "LocalIncompleteStreamError", this.finishReason = e2;
      }
    }
    const me = /* @__PURE__ */ new Set(["unknown"]);
    function he(e2, t2) {
      let r2 = 0;
      return { specificationVersion: e2.specificationVersion, provider: e2.provider, modelId: e2.modelId, defaultObjectGenerationMode: e2.defaultObjectGenerationMode, ...void 0 === e2.supportsImageUrls ? {} : { supportsImageUrls: e2.supportsImageUrls }, ...void 0 === e2.supportsStructuredOutputs ? {} : { supportsStructuredOutputs: e2.supportsStructuredOutputs }, ...void 0 === e2.supportsUrl ? {} : { supportsUrl: e2.supportsUrl.bind(e2) }, doGenerate: (t3) => e2.doGenerate(t3), doStream: async (n2) => {
        const s2 = await e2.doStream(n2);
        let o2, i2, a2 = false, c2 = false;
        const l2 = s2.stream.pipeThrough(new TransformStream({ transform(e3, t3) {
          switch (e3.type) {
            case "text-delta":
              e3.textDelta.trim().length > 0 && (a2 = true);
              break;
            case "tool-call":
              a2 = true;
              break;
            case "finish":
              o2 = e3.finishReason, i2 = Number.isFinite(e3.usage.completionTokens) ? e3.usage.completionTokens : void 0;
              break;
            case "error":
              c2 = true;
          }
          t3.enqueue(e3);
        }, flush() {
          if (!c2) {
            if ("length" === o2 && !a2) {
              if (r2 += 1, 1 === r2) throw new oe.YE(`Provider exceeded max output tokens: the gateway stopped the response at ${i2 ?? "its"} output tokens before any text or tool call`);
              throw r2 = 0, (function(e3) {
                const { model: t3, maxOutputTokens: r3, cutOffAt: n3 } = e3, s3 = `[model."${t3.id}"]`, o3 = void 0 === n3 ? "at its output limit" : `at ${fe(n3)} output tokens`;
                let i3;
                i3 = void 0 === r3 ? `Your gateway stopped ${t3.displayName} ${o3}, before it wrote a reply or a tool call, and stopped the retry that asked for smaller steps too. No output limit is set for this model, so the gateway's default applied. Set max_completion_tokens for ${s3} in your private inference config, or raise the gateway's default, then try again.` : void 0 !== n3 && n3 < r3 ? `Your gateway stopped ${t3.displayName} ${o3}, before it wrote a reply or a tool call, although Cursor asked for up to ${fe(r3)}. It stopped the retry that asked for smaller steps too. Raise this model's output token limit on the gateway, then try again.` : `${t3.displayName} used all ${fe(r3)} output tokens set for it before it wrote a reply or a tool call, and the retry that asked for smaller steps ran out too. Raise max_completion_tokens for ${s3} in your private inference config, and the gateway's limit if it is lower, then try again.`;
                return new se.SK(`Private inference response cut off at the output limit twice (model ${t3.id}, cut off at ${n3 ?? "unknown"} output tokens, requested ${r3 ?? "none"})`, { ...void 0 === e3.requestId ? {} : { requestId: e3.requestId }, displayInfo: { title: "Response cut off at the output limit", detail: i3, isRetryable: true } });
              })({ model: t2.model, maxOutputTokens: t2.maxOutputTokens, cutOffAt: i2, requestId: t2.requestId });
            }
            r2 = 0;
          }
        } }));
        return { ...s2, stream: l2 };
      } };
    }
    function fe(e2) {
      return e2.toLocaleString("en-US");
    }
    function ge(e2, t2, r2, n2 = false, s2) {
      if ("string" != typeof e2?.body) return e2;
      try {
        const o2 = JSON.parse(e2.body);
        if (!Ae(o2)) return e2;
        const i2 = { ...o2 };
        return delete i2.temperature, delete i2.reasoningEffort, (function(e3, t3, r3) {
          const n3 = (function(e4) {
            const t4 = e4?.find((e5) => ["reasoning", "effort", "thought_level"].includes(e5.id))?.value;
            return void 0 === t4 || "" === t4 || "none" === t4 ? void 0 : t4;
          })(t3);
          if (void 0 === n3) return;
          if (void 0 === r3 || !r3.includes(n3)) return delete e3.reasoning, void delete e3.reasoning_effort;
          e3.reasoning = { ...Ae(e3.reasoning) ? e3.reasoning : {}, effort: n3 }, delete e3.reasoning_effort;
        })(i2, t2, r2), void 0 !== s2 && void 0 === i2.max_output_tokens && (i2.max_output_tokens = s2), n2 && (function(e3) {
          const t3 = Array.isArray(e3.include) ? e3.include : [];
          e3.include = t3.includes("reasoning.encrypted_content") ? t3 : [...t3, "reasoning.encrypted_content"];
        })(i2), (function(e3) {
          const t3 = e3.input;
          if (!Array.isArray(t3)) return;
          for (const e4 of t3) Ae(e4) && "string" == typeof e4.call_id && (e4.call_id = (0, oe.vc)(e4.call_id));
        })(i2), { ...e2, body: JSON.stringify(i2) };
      } catch {
        return e2;
      }
    }
    function ye(e2, { imageNote: t2 }) {
      const r2 = _e(e2);
      if (void 0 === r2) return e2;
      let n2 = false;
      for (const e3 of r2.input) {
        if (!Ae(e3) || "function_call_output" !== e3.type) continue;
        const r3 = e3.output;
        Array.isArray(r3) && (e3.output = r3.map((e4) => ve(e4, t2)).join("\n"), n2 = true);
      }
      return n2 ? JSON.stringify(r2.body) : e2;
    }
    function we(e2) {
      return Ae(e2) && "function_call_output" === e2.type && Array.isArray(e2.output);
    }
    function ve(e2, t2) {
      return !Ae(e2) || "input_text" !== e2.type && "output_text" !== e2.type || "string" != typeof e2.text ? t2 : e2.text;
    }
    function _e(e2) {
      try {
        const t2 = JSON.parse(e2);
        if (!Ae(t2)) return;
        const r2 = t2.input;
        return Array.isArray(r2) ? { body: t2, input: r2 } : void 0;
      } catch {
        return;
      }
    }
    function Ae(e2) {
      return null !== e2 && "object" == typeof e2 && !Array.isArray(e2);
    }
    var Se = r(45904);
    class be extends se.SK {
      constructor(e2, t2) {
        super("Failed to record private inference usage", { ...t2 instanceof Error ? { cause: t2 } : {} }), this.usage = e2;
      }
    }
    function Ee(e2, t2) {
      if ("object" == typeof e2 && null !== e2) return Object.entries(e2).find(([e3]) => e3 === t2)?.[1];
    }
    function Ie(e2) {
      return "number" == typeof e2 && Number.isInteger(e2) && e2 >= 0 && e2 <= 2147483647 ? e2 : void 0;
    }
    function Ce(e2) {
      return null !== e2 && /^\d{1,10}$/.test(e2) ? Ie(Number(e2)) : void 0;
    }
    var ke = r(37949), xe = r(33002);
    const Te = 300, Re = "Re-run your credential helper's sign-in step (for example your SSO login), then send the message again.";
    function Be(e2) {
      if (!(e2 instanceof se.SK)) for (const t2 of (function* (e3) {
        const t3 = /* @__PURE__ */ new Set(), r2 = [e3];
        for (; r2.length > 0; ) {
          const e4 = r2.shift();
          e4 instanceof Error && !t3.has(e4) && (t3.add(e4), yield e4, r2.push(e4.cause), "lastError" in e4 && r2.push(e4.lastError), "errors" in e4 && Array.isArray(e4.errors) && r2.push(...e4.errors));
        }
      })(e2)) {
        if (t2 instanceof ie.xF) return new se.SK(t2.message, { cause: e2, displayInfo: { title: "Private inference credential helper failed", detail: Pe(t2.message, Re), isRetryable: false } });
        if (l.hL.isInstance(t2) && void 0 !== t2.statusCode && (0, de.V)(t2.statusCode)) {
          const r2 = Je(t2.url), n2 = Me(t2.responseBody);
          return new se.SK(`Private inference gateway rejected the credential (HTTP ${t2.statusCode})`, { cause: e2, displayInfo: { title: "Inference gateway rejected the credential", detail: Pe(`The private inference gateway${void 0 === r2 ? "" : ` at ${r2}`} returned HTTP ${t2.statusCode}${void 0 === n2 ? "" : `: ${n2}`}`, Re), isRetryable: false } });
        }
      }
    }
    function Pe(...e2) {
      return e2.map((e3) => e3.trim()).filter((e3) => e3.length > 0).map((e3) => /[.!?]$/u.test(e3) ? e3 : `${e3}.`).join(" ");
    }
    function Je(e2) {
      if (void 0 !== e2) try {
        return new URL(e2).host;
      } catch {
        return;
      }
    }
    function Me(e2) {
      const t2 = e2?.trim();
      if (t2) return (0, ie.rg)(t2).replace(/\s+/gu, " ").slice(0, Te);
    }
    const qe = (0, ke.h)("@anysphere/agent-host:provider-runtime");
    function De(e2) {
      return "number" == typeof e2 && Number.isFinite(e2) ? e2 : 0;
    }
    function Oe(e2, t2) {
      return { getExecutor: (r2) => (function(e3, t3) {
        return new class extends oe.uo {
          stream(...e4) {
            const [r3, n2, s2, o2] = e4, i2 = super.stream(r3, n2, s2, o2), a2 = (function() {
              let e5 = () => {
              };
              return { promise: new Promise((t4) => {
                e5 = t4;
              }), report: e5 };
            })(), c2 = Promise.race([i2.response.catch((e5) => {
              throw $e(Le(e5));
            }), a2.promise.then((e5) => {
              throw e5;
            })]), l2 = Promise.race([i2.invocationId, a2.promise.then(() => n2 ?? crypto.randomUUID())]);
            return Ne(r3 ?? (0, xe.q6)(), c2, "response"), Ne(r3 ?? (0, xe.q6)(), l2, "invocationId"), { ...i2, fullStream: Fe(i2.fullStream, a2.report), response: c2, usage: Promise.race([i2.usage, a2.promise.then(() => ({ promptTokens: 0, completionTokens: 0, totalTokens: 0 }))]).then((e5) => {
              const t4 = De(e5.promptTokens), r4 = De(e5.completionTokens);
              return { ...e5, promptTokens: t4, completionTokens: r4, totalTokens: De(e5.totalTokens) || t4 + r4 };
            }).catch(() => ({ promptTokens: 0, completionTokens: 0, totalTokens: 0 })), extendedUsage: Promise.all([Promise.race([i2.extendedUsage, a2.promise.then(() => ({ inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0, maxTokens: 0 }))]), Promise.race([i2.providerMetadata.catch((e5) => {
              qe.debug(r3 ?? (0, xe.q6)(), "Provider metadata unavailable", { error: String(e5) });
            }), a2.promise.then(() => {
            })])]).then(([e5, r4]) => {
              const n3 = r4?.openai?.cachedPromptTokens;
              return { inputTokens: De(e5.inputTokens), outputTokens: De(e5.outputTokens), cacheReadTokens: "number" == typeof n3 && Number.isFinite(n3) ? n3 : De(e5.cacheReadTokens), cacheWriteTokens: De(e5.cacheWriteTokens), maxTokens: t3 ?? De(e5.maxTokens) };
            }).catch(() => ({ inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0, maxTokens: t3 ?? 0 })), invocationId: l2 };
          }
        }(e3);
      })(e2.getExecutor(r2), t2), getModelId: () => e2.getModelId() };
    }
    function Ne(e2, t2, r2) {
      t2.catch((t3) => {
        qe.debug(e2, "Model call result rejected", { result: r2, error: String(t3) });
      });
    }
    async function* Fe(e2, t2) {
      try {
        for await (const t3 of e2) {
          if (null !== t3 && "object" == typeof t3 && "type" in t3 && "error" === t3.type) throw Ue(t3);
          yield t3;
        }
      } catch (e3) {
        const r2 = $e(Le(e3));
        throw t2(r2), r2;
      }
    }
    function Ue(e2) {
      if (!("error" in e2)) return new Error("Local agent stream error");
      const t2 = e2.error;
      return t2 instanceof Error ? t2 : null !== t2 && "object" == typeof t2 && "message" in t2 && "string" == typeof t2.message ? new Error(t2.message) : new Error("string" == typeof t2 ? t2 : "Local agent stream error");
    }
    function Le(e2) {
      return e2 instanceof Error ? e2 : new Error(String(e2));
    }
    function $e(e2) {
      if (e2 instanceof oe.R1) return e2;
      const t2 = Be(e2);
      if (void 0 !== t2) return t2;
      if (!(function(e3) {
        let t3 = e3;
        for (; t3 instanceof Error; ) {
          if ((0, oe.cc)(t3.message)) return true;
          if (l.hL.isInstance(t3)) {
            if (413 === t3.statusCode) return true;
            if ("string" == typeof t3.responseBody && (0, oe.cc)(t3.responseBody)) return true;
          }
          t3 = t3.cause;
        }
        return false;
      })(e2)) return e2;
      const r2 = new oe.R1(e2.message);
      return r2.cause = e2, r2;
    }
    const Qe = "[image omitted: this gateway accepts text tool results only]", je = "[image omitted: this model is not configured for image input; set vision = true on its private-inference.toml entry if it accepts images]";
    function Ge() {
      const e2 = /* @__PURE__ */ new Set(), t2 = ({ baseUrl: e3, modelId: t3 }) => `${e3} ${t3}`;
      return { isStrict: (r2) => e2.has(t2(r2)), markStrict: (r2) => {
        e2.add(t2(r2));
      } };
    }
    function He(e2, t2, r2) {
      return async (n2, s2) => {
        const o2 = s2?.body;
        if ("string" != typeof o2 || !(function(e3) {
          return _e(e3)?.input.some(we) ?? false;
        })(o2)) return e2(n2, s2);
        if (!t2.vision) return e2(n2, { ...s2, body: ye(o2, { imageNote: je }) });
        if (r2.isStrict(t2)) return e2(n2, { ...s2, body: ye(o2, { imageNote: Qe }) });
        const i2 = await e2(n2, s2);
        if (!await (async function(e3) {
          if (!ze.has(e3.status)) return false;
          const t3 = await e3.clone().text().catch(() => "");
          return /function_call_output|\boutput\b/.test(t3);
        })(i2)) return i2;
        i2.body?.cancel().catch((e3) => {
        });
        const a2 = await e2(n2, { ...s2, body: ye(o2, { imageNote: Qe }) });
        return a2.ok && r2.markStrict(t2), a2;
      };
    }
    const ze = /* @__PURE__ */ new Set([400, 422]);
    var We = r(9771);
    async function Ve(e2) {
      const t2 = (await (0, a.Kt)({ modelId: e2.modelId, baseUrl: e2.baseUrl, ...void 0 !== e2.apiKey ? { apiKey: e2.apiKey } : {}, ...void 0 !== e2.apiKeyHelper ? { apiKeyHelper: e2.apiKeyHelper } : {}, ...void 0 !== e2.userAgent ? { userAgent: e2.userAgent } : {}, ...void 0 !== e2.customHeaders ? { customHeaders: e2.customHeaders } : {} }))?.entry, r2 = t2?.modelId ?? e2.modelId, n2 = t2?.contextLength, s2 = he((function(e3) {
        return { specificationVersion: e3.specificationVersion, provider: e3.provider, modelId: e3.modelId, defaultObjectGenerationMode: e3.defaultObjectGenerationMode, ...void 0 === e3.supportsImageUrls ? {} : { supportsImageUrls: e3.supportsImageUrls }, ...void 0 === e3.supportsStructuredOutputs ? {} : { supportsStructuredOutputs: e3.supportsStructuredOutputs }, ...void 0 === e3.supportsUrl ? {} : { supportsUrl: e3.supportsUrl.bind(e3) }, doGenerate: (t3) => e3.doGenerate(t3), doStream: async (t3) => {
          const r3 = await e3.doStream(t3);
          let n3, s3 = false, o3 = false;
          const i3 = r3.stream.pipeThrough(new TransformStream({ transform(e4, t4) {
            "finish" === e4.type ? n3 = e4.finishReason : "error" === e4.type ? s3 = true : "reasoning" === e4.type ? o3 = true : "reasoning-signature" === e4.type ? (o3 || t4.enqueue({ type: "reasoning", textDelta: "" }), o3 = false) : "redacted-reasoning" === e4.type && (o3 = false), t4.enqueue(e4);
          }, flush() {
            if (!s3 && (void 0 === n3 || me.has(n3))) throw new pe(n3);
          } }));
          return { ...r3, stream: i3 };
        } };
      })((function(e3, t3) {
        const r3 = (function(e4, t4) {
          const r4 = void 0 === t4.gatewayTiming ? fetch : (0, se.wq)(fetch, { ...t4.gatewayTiming, modelId: t4.modelId }), n4 = (0, We.l2)(t4.userAgent, r4, void 0 === t4.gatewayRequestId ? t4.customHeaders : (0, se.oo)(t4.customHeaders, t4.gatewayRequestId)), s4 = void 0 !== t4.apiKeyHelper ? (0, de.G)(n4, (0, ie.xU)(t4.apiKeyHelper)) : n4, o4 = He(s4, { baseUrl: t4.baseUrl, modelId: e4, vision: t4.vision ?? true }, t4.toolOutputLatch ?? Ge()), i3 = true === t4.includeEncryptedReasoningContent ? ue() : void 0;
          return async (e5, r5) => {
            const n5 = ge(r5, t4.modelParameters, t4.configuredEffortValues, t4.includeEncryptedReasoningContent, t4.maxOutputTokens), s5 = void 0 !== i3 && "string" == typeof n5?.body ? { ...n5, body: i3.rewriteRequestBody(n5.body) } : n5, a2 = await o4(e5, s5);
            return void 0 !== i3 ? i3.observeResponse(a2) : a2;
          };
        })(e3, t3), n3 = { baseURL: t3.baseUrl, apiKey: t3.apiKey ?? "local-agent", fetch: r3 }, s3 = re(n3).responses(e3), o3 = t3.onUsage;
        if (void 0 === o3) return s3;
        return { specificationVersion: s3.specificationVersion, provider: s3.provider, modelId: s3.modelId, defaultObjectGenerationMode: s3.defaultObjectGenerationMode, ...void 0 === s3.supportsImageUrls ? {} : { supportsImageUrls: s3.supportsImageUrls }, ...void 0 === s3.supportsStructuredOutputs ? {} : { supportsStructuredOutputs: s3.supportsStructuredOutputs }, ...void 0 === s3.supportsUrl ? {} : { supportsUrl: s3.supportsUrl.bind(s3) }, doGenerate: (e4) => s3.doGenerate(e4), async doStream(t4) {
          const s4 = (function(e4, t5, r4) {
            const n4 = crypto.randomUUID(), s5 = new Se.kF();
            let o4, i3, a2, c2, l2 = e4, u2 = false, d2 = false, p2 = false;
            function m2(e5) {
              if (void 0 !== c2) return c2;
              if (p2 = true, !u2 && void 0 === o4) return c2 = Promise.resolve(), c2;
              const r5 = Date.now();
              Object.freeze(s5.inputTokensDetails), Object.freeze(s5.outputTokensDetails), Object.freeze(s5), Object.freeze(o4);
              const a3 = Object.freeze({ invocationId: n4, modelId: l2, get observedAt() {
                return new Date(r5);
              }, status: i3 ?? (d2 ? Se.Ts.ERRORED : e5), usage: s5, ...void 0 === o4 ? {} : { headerUsage: o4 } });
              return c2 = Promise.resolve().then(() => t5(a3)).catch((e6) => {
                throw new be(a3, e6);
              }), c2;
            }
            function h2(e5) {
              return m2(true === r4?.aborted || e5 instanceof Error && "AbortError" === e5.name ? Se.Ts.ABORTED : Se.Ts.ERRORED);
            }
            return { onResponseEvent: function(e5) {
              if (p2) return;
              const t6 = Ee(e5, "response"), r5 = Ee(t6, "model");
              "string" == typeof r5 && r5.length > 0 && r5.length <= 512 && !/[\s\p{Cc}]/u.test(r5) && (l2 = r5);
              const n5 = Ee(t6, "usage"), o5 = Ie(Ee(n5, "input_tokens")), a3 = Ie(Ee(n5, "output_tokens")), c3 = Ee(n5, "input_tokens_details"), d3 = Ie(Ee(c3, "cached_tokens")), m3 = Ie(Ee(c3, "cache_write_tokens")), h3 = Ie(Ee(Ee(n5, "output_tokens_details"), "reasoning_tokens"));
              if (void 0 !== o5 && (s5.inputTokens = o5, u2 = true), void 0 !== a3 && (s5.outputTokens = a3, u2 = true), void 0 === d3 && void 0 === m3 || (s5.inputTokensDetails ??= new Se.pH(), void 0 !== d3 && (s5.inputTokensDetails.cachedTokens = d3), void 0 !== m3 && (s5.inputTokensDetails.cacheWriteTokens = m3), u2 = true), void 0 !== h3 && (s5.outputTokensDetails = new Se.ah({ reasoningTokens: h3 }), u2 = true), void 0 === i3) {
                const r6 = Ee(e5, "type");
                if ("response.completed" === r6) i3 = Se.Ts.SUCCESS;
                else if ("response.failed" === r6 || "error" === r6) i3 = Se.Ts.ERRORED;
                else if ("response.cancelled" === r6) i3 = Se.Ts.ABORTED;
                else if ("response.incomplete" === r6) {
                  const e6 = Ee(Ee(t6, "incomplete_details"), "reason");
                  null != e6 && "max_output_tokens" !== e6 && "content_filter" !== e6 || (i3 = Se.Ts.SUCCESS);
                }
              }
            }, observeHeaders: function(e5) {
              if (p2) return;
              const t6 = Ce(e5.get("fireworks-prompt-tokens")), r5 = Ce(e5.get("fireworks-cached-prompt-tokens"));
              void 0 === t6 && void 0 === r5 || (o4 = new Se.f$({ ...void 0 === t6 ? {} : { promptTokens: t6 }, ...void 0 === r5 ? {} : { cachedPromptTokens: r5 } }));
            }, observeStream: function(e5) {
              const t6 = e5.getReader();
              let r5 = false;
              return new ReadableStream({ async pull(e6) {
                try {
                  const n5 = await t6.read();
                  if (r5) return;
                  if (n5.done) return await m2(void 0 !== a2 && "unknown" !== a2 && "error" !== a2 ? Se.Ts.SUCCESS : Se.Ts.ERRORED), t6.releaseLock(), void e6.close();
                  if ("error" === n5.value.type) return d2 = true, await t6.cancel(n5.value.error), await h2(n5.value.error), t6.releaseLock(), e6.enqueue(n5.value), void e6.close();
                  "finish" === n5.value.type && (a2 = n5.value.finishReason), e6.enqueue(n5.value);
                } catch (n5) {
                  if (r5) return;
                  let s6 = n5;
                  try {
                    await h2(n5);
                  } catch (e7) {
                    s6 = e7;
                  }
                  t6.releaseLock(), e6.error(s6);
                }
              }, async cancel(e6) {
                r5 = true;
                try {
                  await t6.cancel(e6);
                } finally {
                  try {
                    await m2(Se.Ts.ABORTED);
                  } finally {
                    t6.releaseLock();
                  }
                }
              } }, { highWaterMark: 0 });
            }, finishOnError: h2 };
          })(e3, o3, t4.abortSignal);
          try {
            const o4 = re({ ...n3, onResponseEvent: s4.onResponseEvent, fetch: async (e4, t5) => {
              const n4 = await r3(e4, t5);
              return s4.observeHeaders(n4.headers), n4;
            } }).responses(e3), i3 = await o4.doStream(t4);
            return { ...i3, stream: s4.observeStream(i3.stream) };
          } catch (e4) {
            try {
              await s4.finishOnError(e4);
            } catch (e5) {
              return { stream: new ReadableStream({ start(t5) {
                t5.error(e5);
              } }), rawCall: { rawPrompt: void 0, rawSettings: {} } };
            }
            throw e4;
          }
        } };
      })(r2, e2)), { model: e2.outputLimitModel ?? { id: e2.modelId, displayName: e2.modelId }, maxOutputTokens: e2.maxOutputTokens, requestId: e2.gatewayRequestId }), o2 = new oe.Uv(s2, void 0, { openai: { strictSchemas: false, store: false } }).getSession(e2.promptMiddleware), i2 = Oe(void 0 === e2.promptMiddleware ? (function(e3, t3) {
        return (function(e4) {
          const t4 = e4.toLowerCase(), r3 = t4.includes("opus") && ["4.6", "4-6", "4.7", "4-7", "4.8", "4-8"].some((e5) => t4.includes(e5)), n3 = t4.includes("sonnet") && (t4.includes("4.6") || t4.includes("4-6")), s3 = t4.includes("sonnet-5") || t4.includes("sonnet 5"), o3 = t4.includes("opus-5") || t4.includes("opus 5"), i3 = t4.includes("fable-5");
          return !(r3 || o3 || n3 || s3 || i3);
        })(t3) ? e3 : { getExecutor: (t4) => (0, oe.sk)()((0, oe.mf)()(e3.getExecutor(t4))), getModelId: () => e3.getModelId() };
      })(o2, r2) : o2, e2.contextWindow ?? n2);
      return { promptSession: i2, promptToolSession: { getExecutor: () => new ne.Ycw(i2.getExecutor()) }, ...void 0 === n2 ? {} : { contextLength: n2 } };
    }
    class Ke extends Error {
      constructor(e2) {
        super(`Could not reach your private inference gateway at ${e2}.`), this.baseUrl = e2, this.name = "PrivateInferenceGatewayUnreachableError";
      }
    }
    async function Ye(e2) {
      const t2 = e2.configFile?.path;
      let r2;
      if (void 0 !== t2) try {
        r2 = (0, n.readFileSync)(t2, "utf8");
      } catch {
        r2 = void 0;
      }
      const a2 = (0, i.rX)({ configFileContent: r2, configFilePath: t2, env: e2.env });
      if (void 0 === a2) throw new i.dM("Private inference config: no configuration present");
      e2.onCatalogParsed?.(a2);
      const c2 = /* @__PURE__ */ new Map(), l2 = /* @__PURE__ */ new Set(), u2 = await (0, s.PH)([...a2.models], async (t3) => ({ id: t3.id, probe: await Ze(t3.endpoint, t3.providerModelId, e2.probeTimeoutMs) }), { max: 8 });
      for (const { id: e3, probe: t3 } of u2) "no-answer" === t3 ? l2.add(e3) : "unusable-answer" !== t3 && c2.set(e3, t3);
      try {
        return (0, o._)(a2, c2);
      } catch (e3) {
        const t3 = a2.models.find((e4) => l2.has(e4.id) && !(function(e5) {
          try {
            return (0, i.yz)(e5, void 0), true;
          } catch {
            return false;
          }
        })(e4));
        if (void 0 !== t3) throw new Ke(t3.endpoint.baseUrl);
        throw e3;
      }
    }
    async function Ze(e2, t2, r2) {
      const n2 = await (0, a.g3)({ modelId: t2, baseUrl: e2.baseUrl, ...Xe(e2), ...void 0 === r2 ? {} : { timeoutMs: r2 } });
      if ("string" == typeof n2) return n2;
      const s2 = n2.entry;
      return { extendedCapabilities: n2.extendedCapabilitiesDetected, ...void 0 === s2 ? {} : { contextLength: s2.contextLength, longContextThresholdTokens: s2.longContextThresholdTokens, maxOutputTokens: s2.maxOutputTokens, supportsVision: s2.supportsVision, reasoningEffortValues: s2.reasoningEffortValues, advertisedDialect: (0, a.Nz)(s2.apiTypes) } };
    }
    function Xe(e2) {
      return { ...void 0 === e2.apiKey ? {} : { apiKey: e2.apiKey }, ...et(e2.apiKeyHelper), ...void 0 === e2.headers ? {} : { customHeaders: { ...e2.headers } } };
    }
    function et(e2) {
      return void 0 === e2 ? {} : { apiKeyHelper: { command: e2.command, ...void 0 === e2.args ? {} : { args: e2.args }, ...void 0 === e2.tokenTtlSecs ? {} : { tokenTtlMs: 1e3 * e2.tokenTtlSecs }, ...void 0 === e2.timeoutSecs ? {} : { timeoutMs: 1e3 * e2.timeoutSecs } } };
    }
    function tt(e2, t2 = {}) {
      const r2 = Ge();
      return async (e3) => {
        const n2 = await Ve({ modelId: e3.model.providerModelId, baseUrl: e3.model.endpoint.baseUrl, ...Xe(e3.model.endpoint), toolOutputLatch: r2, vision: e3.model.vision, gatewayRequestId: e3.originalRequestId, modelParameters: [...e3.modelParameters], contextWindow: e3.model.contextWindowTokens, ...void 0 === e3.model.maxOutputTokens ? {} : { maxOutputTokens: e3.model.maxOutputTokens }, outputLimitModel: { id: e3.model.id, displayName: e3.model.displayName }, ...void 0 === e3.onUsage ? {} : { onUsage: e3.onUsage }, ...void 0 === e3.promptMiddleware ? {} : { promptMiddleware: e3.promptMiddleware }, ...void 0 === e3.model.effort ? {} : { configuredEffortValues: e3.model.effort.tiers.map((e4) => e4.value) }, includeEncryptedReasoningContent: e3.model.supportsPersistedReasoning, ...void 0 === t2.onGatewayRequest ? {} : { gatewayTiming: { requestId: e3.originalRequestId, attempt: e3.attempt ?? 0, onTiming: t2.onGatewayRequest } } });
        return { promptSession: n2.promptSession, promptToolSession: n2.promptToolSession, ...void 0 === n2.contextLength ? {} : { contextLength: n2.contextLength } };
      };
    }
    function rt(e2) {
      const t2 = (0, i.$B)(e2), r2 = t2.length > 1, n2 = e2.models.map((t3) => {
        const n3 = t3.id === e2.defaultModelId ? " (default)" : "", s3 = t3.providerModelId === t3.id ? "" : ` -> ${t3.providerModelId}`, o2 = r2 ? ` on ${t3.endpoint.baseUrl}` : "", i2 = void 0 === t3.effort ? "off" : `${t3.effort.default} of [${t3.effort.tiers.map((e3) => e3.id).join(", ")}]`, a2 = void 0 === t3.maxOutputTokens ? "gateway default" : `${t3.maxOutputTokens} tokens`;
        return `"${t3.id}"${s3}${n3}${o2}: context ${t3.contextWindowTokens} tokens, max output ${a2}, vision ${t3.vision}, web search ${t3.webSearchTool ?? "off"}, reasoning ${i2}`;
      }), s2 = e2.models.length;
      return `${s2} model${1 === s2 ? "" : "s"} on ${t2.join(", ")} — ${n2.join("; ")}`;
    }
  }