// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 45904 range:7849973..7862024
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
45904: (e, t, r) => {
    "use strict";
    r.d(t, { L0: () => m, Ln: () => d, Ts: () => c, YN: () => p, a4: () => u, ah: () => A, f$: () => f, kF: () => v, pH: () => _, u: () => l, u0: () => h });
    var n = r(36038), s = r(8844), o = r(8592);
    const i = "aiserver.v1.";
    class a extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return i;
      }
    }
    var c = (0, o.QT)(n.proto3, i, "PrivateInferenceInvocationStatus", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "ABORTED"], [3, "ERRORED"]], 1);
    class l extends a {
      constructor(e2) {
        super(), this.modelName = "", this.conversationId = "", this.clientTurnId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(l, e2, t2);
      }
      static $() {
        return ["AdmitRunRequest|1 model_name 9|2 conversation_id 9|3 client_turn_id 9|4 prompt_model_name 9?|5 prompt_model #0?", s.RK];
      }
    }
    class u extends a {
      constructor(e2) {
        super(), this.usageUuid = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(u, e2, t2);
      }
      static $() {
        return ["AdmitRunResponse|1 usage_uuid 9|2 prompt_model_metadata #0", s.Fw];
      }
    }
    class d extends a {
      constructor(e2) {
        super(), this.invocations = [], this.turns = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new d().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new d().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new d().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(d, e2, t2);
      }
      static $() {
        return ["ReportPrivateInferenceUsageRequest|1 invocations #0*|2 turns #1*", h, p];
      }
    }
    class p extends a {
      constructor(e2) {
        super(), this.usageUuid = "", this.invocationCount = 0, this.modelOutputDelivered = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new p().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new p().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new p().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(p, e2, t2);
      }
      static $() {
        return ["PrivateInferenceTurnOutcome|1 usage_uuid 9|2 finished_at #0|3 invocation_count 5|4 model_output_delivered 8", n.Timestamp];
      }
    }
    class m extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new m().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new m().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new m().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(m, e2, t2);
      }
      static $() {
        return ["ReportPrivateInferenceUsageResponse"];
      }
    }
    class h extends a {
      constructor(e2) {
        super(), this.usageUuid = "", this.invocationId = "", this.modelId = "", this.status = c.UNSPECIFIED, this.usage = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new h().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new h().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new h().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(h, e2, t2);
      }
      static $() {
        return ["PrivateInferenceInvocationUsage|1 usage_uuid 9|2 invocation_id 9|3 model_id 9|4 observed_at #0|5 status #1|6 inference_reason 9?|7 header_usage #2|10 openai_chat_completions #3 usage|11 openai_responses #4 usage|12 anthropic_messages #5 usage|13 bedrock_converse #6 usage", n.Timestamp, c, f, g, v, S, C];
      }
    }
    class f extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new f().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new f().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new f().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(f, e2, t2);
      }
      static $() {
        return ["PrivateInferenceHeaderUsage|1 prompt_tokens 5?|2 cached_prompt_tokens 5?"];
      }
    }
    class g extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new g().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new g().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new g().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(g, e2, t2);
      }
      static $() {
        return ["OpenAIChatCompletionsUsage|1 prompt_tokens 5?|2 completion_tokens 5?|3 prompt_tokens_details #0|4 completion_tokens_details #1|5 input_tokens 5?|6 output_tokens 5?|7 cache_read_input_tokens 5?|8 cache_creation_input_tokens 5?", y, w];
      }
    }
    class y extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new y().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new y().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new y().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(y, e2, t2);
      }
      static $() {
        return ["OpenAIPromptTokensDetails|1 cached_tokens 5?|2 cache_write_tokens 5?"];
      }
    }
    class w extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new w().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new w().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new w().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(w, e2, t2);
      }
      static $() {
        return ["OpenAICompletionTokensDetails|1 reasoning_tokens 5?"];
      }
    }
    class v extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new v().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new v().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new v().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(v, e2, t2);
      }
      static $() {
        return ["OpenAIResponsesUsage|1 input_tokens 5?|2 output_tokens 5?|3 input_tokens_details #0|4 output_tokens_details #1", _, A];
      }
    }
    class _ extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_, e2, t2);
      }
      static $() {
        return ["OpenAIInputTokensDetails|1 cached_tokens 5?|2 cache_write_tokens 5?"];
      }
    }
    class A extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new A().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new A().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new A().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(A, e2, t2);
      }
      static $() {
        return ["OpenAIOutputTokensDetails|1 reasoning_tokens 5?"];
      }
    }
    class S extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new S().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new S().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new S().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(S, e2, t2);
      }
      static $() {
        return ["AnthropicMessagesUsage|1 initial #0|2 final #0", b];
      }
    }
    class b extends a {
      constructor(e2) {
        super(), this.iterations = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new b().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new b().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new b().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(b, e2, t2);
      }
      static $() {
        return ["AnthropicUsage|1 input_tokens 5?|2 output_tokens 5?|3 cache_creation_input_tokens 5?|4 cache_read_input_tokens 5?|5 iterations #0*|6 cache_creation #1", E, I];
      }
    }
    class E extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new E().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new E().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new E().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(E, e2, t2);
      }
      static $() {
        return ["AnthropicUsageIteration|1 type 9?|2 model 9?|3 input_tokens 5?|4 output_tokens 5?|5 cache_creation_input_tokens 5?|6 cache_read_input_tokens 5?|7 cache_creation #0", I];
      }
    }
    class I extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new I().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new I().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new I().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(I, e2, t2);
      }
      static $() {
        return ["AnthropicCacheCreationUsage|1 ephemeral_5m_input_tokens 5?|2 ephemeral_1h_input_tokens 5?"];
      }
    }
    class C extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new C().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new C().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new C().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(C, e2, t2);
      }
      static $() {
        return ["BedrockConverseUsage|1 input_tokens 5?|2 output_tokens 5?|3 cache_read_input_tokens 5?|4 cache_write_input_tokens 5?"];
      }
    }
  }