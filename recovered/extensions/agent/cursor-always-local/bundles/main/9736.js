// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9736 range:6199135..6211373
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9736: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { PrivateInferenceService: () => b });
    var n2 = r2(6038), s2 = r2(8844), i2 = r2(8592);
    const o2 = "aiserver.v1.";
    class a extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return o2;
      }
    }
    var u = (0, i2.QT)(n2.proto3, o2, "PrivateInferenceInvocationStatus", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "ABORTED"], [3, "ERRORED"]], 1);
    class c extends a {
      constructor(t3) {
        super(), this.modelName = "", this.conversationId = "", this.clientTurnId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(c, t3, e3);
      }
      static $() {
        return ["AdmitRunRequest|1 model_name 9|2 conversation_id 9|3 client_turn_id 9|4 prompt_model_name 9?|5 prompt_model #0?", s2.RK];
      }
    }
    class l extends a {
      constructor(t3) {
        super(), this.usageUuid = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(l, t3, e3);
      }
      static $() {
        return ["AdmitRunResponse|1 usage_uuid 9|2 prompt_model_metadata #0", s2.Fw];
      }
    }
    class m extends a {
      constructor(t3) {
        super(), this.invocations = [], this.turns = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new m().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new m().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new m().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(m, t3, e3);
      }
      static $() {
        return ["ReportPrivateInferenceUsageRequest|1 invocations #0*|2 turns #1*", p, d];
      }
    }
    class d extends a {
      constructor(t3) {
        super(), this.usageUuid = "", this.invocationCount = 0, this.modelOutputDelivered = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new d().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new d().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new d().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(d, t3, e3);
      }
      static $() {
        return ["PrivateInferenceTurnOutcome|1 usage_uuid 9|2 finished_at #0|3 invocation_count 5|4 model_output_delivered 8", n2.Timestamp];
      }
    }
    class f extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new f().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new f().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new f().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(f, t3, e3);
      }
      static $() {
        return ["ReportPrivateInferenceUsageResponse"];
      }
    }
    class p extends a {
      constructor(t3) {
        super(), this.usageUuid = "", this.invocationId = "", this.modelId = "", this.status = u.UNSPECIFIED, this.usage = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new p().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new p().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new p().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(p, t3, e3);
      }
      static $() {
        return ["PrivateInferenceInvocationUsage|1 usage_uuid 9|2 invocation_id 9|3 model_id 9|4 observed_at #0|5 status #1|6 inference_reason 9?|7 header_usage #2|10 openai_chat_completions #3 usage|11 openai_responses #4 usage|12 anthropic_messages #5 usage|13 bedrock_converse #6 usage", n2.Timestamp, u, h, g, y, J, C];
      }
    }
    class h extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new h().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new h().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new h().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(h, t3, e3);
      }
      static $() {
        return ["PrivateInferenceHeaderUsage|1 prompt_tokens 5?|2 cached_prompt_tokens 5?"];
      }
    }
    class g extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new g().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new g().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new g().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(g, t3, e3);
      }
      static $() {
        return ["OpenAIChatCompletionsUsage|1 prompt_tokens 5?|2 completion_tokens 5?|3 prompt_tokens_details #0|4 completion_tokens_details #1|5 input_tokens 5?|6 output_tokens 5?|7 cache_read_input_tokens 5?|8 cache_creation_input_tokens 5?", A, _];
      }
    }
    class A extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new A().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new A().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new A().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(A, t3, e3);
      }
      static $() {
        return ["OpenAIPromptTokensDetails|1 cached_tokens 5?|2 cache_write_tokens 5?"];
      }
    }
    class _ extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_, t3, e3);
      }
      static $() {
        return ["OpenAICompletionTokensDetails|1 reasoning_tokens 5?"];
      }
    }
    class y extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new y().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new y().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new y().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(y, t3, e3);
      }
      static $() {
        return ["OpenAIResponsesUsage|1 input_tokens 5?|2 output_tokens 5?|3 input_tokens_details #0|4 output_tokens_details #1", w, S];
      }
    }
    class w extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new w().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new w().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new w().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(w, t3, e3);
      }
      static $() {
        return ["OpenAIInputTokensDetails|1 cached_tokens 5?|2 cache_write_tokens 5?"];
      }
    }
    class S extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new S().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new S().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new S().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(S, t3, e3);
      }
      static $() {
        return ["OpenAIOutputTokensDetails|1 reasoning_tokens 5?"];
      }
    }
    class J extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new J().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new J().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new J().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(J, t3, e3);
      }
      static $() {
        return ["AnthropicMessagesUsage|1 initial #0|2 final #0", B];
      }
    }
    class B extends a {
      constructor(t3) {
        super(), this.iterations = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new B().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new B().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new B().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(B, t3, e3);
      }
      static $() {
        return ["AnthropicUsage|1 input_tokens 5?|2 output_tokens 5?|3 cache_creation_input_tokens 5?|4 cache_read_input_tokens 5?|5 iterations #0*|6 cache_creation #1", E, I];
      }
    }
    class E extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new E().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new E().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new E().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(E, t3, e3);
      }
      static $() {
        return ["AnthropicUsageIteration|1 type 9?|2 model 9?|3 input_tokens 5?|4 output_tokens 5?|5 cache_creation_input_tokens 5?|6 cache_read_input_tokens 5?|7 cache_creation #0", I];
      }
    }
    class I extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new I().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new I().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new I().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(I, t3, e3);
      }
      static $() {
        return ["AnthropicCacheCreationUsage|1 ephemeral_5m_input_tokens 5?|2 ephemeral_1h_input_tokens 5?"];
      }
    }
    class C extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new C().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new C().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new C().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(C, t3, e3);
      }
      static $() {
        return ["BedrockConverseUsage|1 input_tokens 5?|2 output_tokens 5?|3 cache_read_input_tokens 5?|4 cache_write_input_tokens 5?"];
      }
    }
    const b = { typeName: "aiserver.v1.PrivateInferenceService", methods: { admitRun: { name: "AdmitRun", I: c, O: l, kind: n2.MethodKind.Unary }, reportUsage: { name: "ReportUsage", I: m, O: f, kind: n2.MethodKind.Unary } } };
  }