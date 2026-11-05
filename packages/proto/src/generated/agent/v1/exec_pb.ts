// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/exec_pb.js" range:701037..711279
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "./shell_exec_pb";
import * as __dep2 from "./write_exec_pb";
import * as __dep3 from "./delete_exec_pb";
import * as __dep4 from "./grep_exec_pb";
import * as __dep5 from "./read_exec_pb";
import * as __dep6 from "./ls_exec_pb";
import * as __dep7 from "./diagnostics_exec_pb";
import * as __dep8 from "./request_context_exec_pb";
import * as __dep9 from "./mcp_exec_pb";
import * as __dep10 from "./background_shell_exec_pb";
import * as __dep11 from "./fetch_exec_pb";
import * as __dep12 from "./record_screen_exec_pb";
import * as __dep13 from "./computer_use_tool_pb";
import * as __dep14 from "./subagent_exec_pb";
import * as __dep15 from "./smart_mode_classifier_exec_pb";
import * as __dep16 from "./canvas_diagnostics_exec_pb";
import * as __dep17 from "./shell_allowlist_precheck_exec_pb";
import * as __dep18 from "./mcp_allowlist_precheck_exec_pb";
import * as __dep19 from "./web_fetch_allowlist_precheck_exec_pb";
import * as __dep20 from "../../aiserver/v1/utils_pb";
import * as __dep21 from "./conversation_search_exec_pb";
import * as __dep22 from "./agent_store_conflict_exec_pb";
import * as __dep23 from "./hook_additional_context_pb";
import * as __dep24 from "./hooks_pb";
import * as __dep25 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1,
  i = __dep2,
  o = __dep3,
  a = __dep4,
  u = __dep5,
  c = __dep6,
  l = __dep7,
  m = __dep8,
  d = __dep9,
  p = __dep10,
  f = __dep11,
  h = __dep12,
  g = __dep13,
  _ = __dep14,
  w = __dep15,
  y = __dep16,
  J = __dep17,
  S = __dep18,
  q = __dep19,
  B = __dep20,
  b = __dep21,
  P = __dep22,
  I = __dep23,
  x = __dep24,
  v = __dep25;
class R extends v.HL {
  static get runtime() {
    return (0, v.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class E extends R {
  constructor(t) {
    super(), this.id = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new E().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new E().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new E().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(E, t, r);
  }
  static $() {
    return ["ExecClientStreamClose|1 id 13"];
  }
}
class k extends R {
  constructor(t) {
    super(), this.id = 0, this.error = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new k().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new k().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new k().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(k, t, r);
  }
  static $() {
    return ["ExecClientThrow|1 id 13|2 error 9|3 stack_trace 9?|4 error_code 9?"];
  }
}
class T extends R {
  constructor(t) {
    super(), this.id = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new T().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new T().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new T().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(T, t, r);
  }
  static $() {
    return ["ExecClientHeartbeat|1 id 13"];
  }
}
class C extends R {
  constructor(t) {
    super(), this.message = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new C().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new C().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new C().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(C, t, r);
  }
  static $() {
    return ["ExecClientControlMessage|1 stream_close #0 message|2 throw #1 message|3 heartbeat #2 message", E, k, T];
  }
}
class U extends R {
  constructor(t) {
    super(), this.id = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new U().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new U().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new U().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(U, t, r);
  }
  static $() {
    return ["ExecServerAbort|1 id 13"];
  }
}
class A extends R {
  constructor(t) {
    super(), this.message = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new A().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new A().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new A().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(A, t, r);
  }
  static $() {
    return ["ExecServerControlMessage|1 abort #0 message", U];
  }
}
class $ extends R {
  constructor(t) {
    super(), this.traceId = "", this.spanId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new $().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new $().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new $().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals($, t, r);
  }
  static $() {
    return ["SpanContext|1 trace_id 9|2 span_id 9|3 trace_flags 13?|4 trace_state 9?"];
  }
}
class O extends R {
  constructor(t) {
    super(), this.id = 0, this.execId = "", this.message = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new O().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new O().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new O().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(O, t, r);
  }
  static $() {
    return ["ExecServerMessage|1 id 13|15 exec_id 9|57 machine_id 9?|2 shell_args #0 message|3 write_args #1 message|4 delete_args #2 message|5 grep_args #3 message|7 read_args #4 message|29 redacted_read_args #4 message|8 ls_args #5 message|9 diagnostics_args #6 message|10 request_context_args #7 message|11 mcp_args #8 message|14 shell_stream_args #0 message|16 background_shell_spawn_args #9 message|17 list_mcp_resources_exec_args #10 message|18 read_mcp_resource_exec_args #11 message|36 mcp_state_exec_args #12 message|20 fetch_args #13 message|21 record_screen_args #14 message|22 computer_use_args #15 message|23 write_shell_stdin_args #16 message|27 execute_hook_args #17 message|28 subagent_args #18 message|30 force_background_shell_args #19 message|31 force_background_subagent_args #20 message|37 subagent_await_args #21 message|38 smart_mode_classifier_args #22 message|40 canvas_diagnostics_args #23 message|41 shell_allowlist_precheck_args #24 message|42 mcp_allowlist_precheck_args #25 message|43 web_fetch_allowlist_precheck_args #26 message|44 git_diff_request #27 message|52 mini_swe_agent_bash_args #0 message|53 conversation_search_args #28 message|54 agent_store_conflict_args #29 message|19 span_context #30?|55 accept_hook_additional_contexts 8?", s.a, i.hY, o.dn, a.Qj, u.a2, c.xe, l._B, m._K, d.E_, p.$P, d.kj, d.DI, d.Km, f.UM, h.zH, g.K5, p.LL, M, _.Pw, s.Hu, _.S3, _.TN, w.Th, y.yN, J.C, S.c, q.K, B.Vq, b.$m, P.Uz, $];
  }
}
class j extends R {
  constructor(t) {
    super(), this.id = 0, this.execId = "", this.hookAdditionalContexts = [], this.message = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new j().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new j().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new j().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(j, t, r);
  }
  static $() {
    return ["ExecClientMessage|1 id 13|15 exec_id 9|39 local_execution_time_ms 5?|45 hook_additional_contexts #0*|2 shell_result #1 message|3 write_result #2 message|4 delete_result #3 message|5 grep_result #4 message|7 read_result #5 message|29 redacted_read_result #5 message|8 ls_result #6 message|9 diagnostics_result #7 message|10 request_context_result #8 message|11 mcp_result #9 message|14 shell_stream #10 message|16 background_shell_spawn_result #11 message|17 list_mcp_resources_exec_result #12 message|18 read_mcp_resource_exec_result #13 message|36 mcp_state_exec_result #14 message|20 fetch_result #15 message|21 record_screen_result #16 message|22 computer_use_result #17 message|23 write_shell_stdin_result #18 message|27 execute_hook_result #19 message|28 subagent_result #20 message|30 force_background_shell_result #21 message|31 force_background_subagent_result #22 message|37 subagent_await_result #23 message|38 smart_mode_classifier_result #24 message|40 canvas_diagnostics_result #25 message|41 shell_allowlist_precheck_result #26 message|42 mcp_allowlist_precheck_result #27 message|43 web_fetch_allowlist_precheck_result #28 message|44 git_diff_response #29 message|53 conversation_search_result #30 message|54 agent_store_conflict_result #31 message|55 mini_swe_agent_bash_result #1 message", I.C, s.W4, i.v3, o.Pi, a.Ud, u.sV, c.fv, l.Ek, m._G, d.iz, s.FI, p.Lt, d.kP, d.ZD, d._W, f.uN, h.Tj, g.ks, p.nt, D, _.vS, s.jK, _.a3, _.zJ, w.bN, y.GL, J.e, S.M, q.M, B.df, b.pT, P.Ev];
  }
}
class M extends R {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new M().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new M().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new M().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(M, t, r);
  }
  static $() {
    return ["ExecuteHookArgs|1 request #0", N];
  }
}
class D extends R {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new D().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new D().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new D().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(D, t, r);
  }
  static $() {
    return ["ExecuteHookResult|1 response #0", G];
  }
}
class N extends R {
  constructor(t) {
    super(), this.request = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new N().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new N().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new N().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(N, t, r);
  }
  static $() {
    return ["ExecuteHookRequest|1 pre_compact #0 request|2 subagent_start #1 request|3 subagent_stop #2 request|4 pre_tool_use #3 request|5 post_tool_use #4 request|6 post_tool_use_failure #5 request|7 before_submit_prompt #6 request|8 after_agent_response #7 request|9 after_agent_thought #8 request|11 stop #9 request", x.Ks, x.b3, x.ty, x.CI, x.rY, x.hy, x.D2, x.mL, x.AL, x.Od];
  }
}
class G extends R {
  constructor(t) {
    super(), this.response = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new G().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new G().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new G().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(G, t, r);
  }
  static $() {
    return ["ExecuteHookResponse|1 pre_compact #0 response|2 subagent_start #1 response|3 subagent_stop #2 response|4 pre_tool_use #3 response|5 post_tool_use #4 response|6 post_tool_use_failure #5 response|7 before_submit_prompt #6 response|8 after_agent_response #7 response|9 after_agent_thought #8 response|11 stop #9 response", x.$_, x.W0, x.AH, x.Wn, x.uB, x.U1, x.u1, x.FW, x.H, x.rT];
  }
}
export { C as $Y, E as D9, k as Fu, $ as Kg, A as Nv, D as S1, T as VA, O as Ye, G as w5, j as yT };
