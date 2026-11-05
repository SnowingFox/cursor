// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/ask_question_tool_pb.js" range:657089..661395
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1;
class i extends s.HL {
  static get runtime() {
    return (0, s.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class o extends i {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new o().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new o().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new o().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(o, t, r);
  }
  static $() {
    return ["AskQuestionToolCall|1 args #0|2 result #1", a, m];
  }
}
class a extends i {
  constructor(t) {
    super(), this.title = "", this.questions = [], this.runAsync = !1, this.asyncOriginalToolCallId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new a().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new a().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new a().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(a, t, r);
  }
  static $() {
    return ["AskQuestionArgs|1 title 9|2 questions #0*|5 run_async 8|6 async_original_tool_call_id 9", u];
  }
}
class u extends i {
  constructor(t) {
    super(), this.id = "", this.prompt = "", this.options = [], this.allowMultiple = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new u().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new u().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new u().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(u, t, r);
  }
  static $() {
    return ["AskQuestionArgs.Question|1 id 9|2 prompt 9|3 options #0*|4 allow_multiple 8|5 prompt_markdown 9?", c];
  }
}
class c extends i {
  constructor(t) {
    super(), this.id = "", this.label = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new c().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new c().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new c().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(c, t, r);
  }
  static $() {
    return ["AskQuestionArgs.Option|1 id 9|2 label 9"];
  }
}
class l extends i {
  constructor(t) {
    super(), this.interactionId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new l().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new l().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new l().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(l, t, r);
  }
  static $() {
    return ["AskQuestionAsync|1 interaction_id 9"];
  }
}
class m extends i {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new m().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new m().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new m().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(m, t, r);
  }
  static $() {
    return ["AskQuestionResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 async #3 result", d, f, h, l];
  }
}
class d extends i {
  constructor(t) {
    super(), this.answers = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new d().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new d().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new d().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(d, t, r);
  }
  static $() {
    return ["AskQuestionSuccess|1 answers #0*", p];
  }
}
class p extends i {
  constructor(t) {
    super(), this.questionId = "", this.selectedOptionIds = [], this.freeformText = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new p().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new p().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new p().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(p, t, r);
  }
  static $() {
    return ["AskQuestionSuccess.Answer|1 question_id 9|2 selected_option_ids 9*|3 freeform_text 9"];
  }
}
class f extends i {
  constructor(t) {
    super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new f().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new f().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new f().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(f, t, r);
  }
  static $() {
    return ["AskQuestionError|1 error_message 9"];
  }
}
class h extends i {
  constructor(t) {
    super(), this.reason = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new h().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new h().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new h().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(h, t, r);
  }
  static $() {
    return ["AskQuestionRejected|1 reason 9"];
  }
}
export { o as OU, a as ju, h as ox, m as tz };
