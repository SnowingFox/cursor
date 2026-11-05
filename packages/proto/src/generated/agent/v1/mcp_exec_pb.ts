// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/mcp_exec_pb.js" range:747312..762295
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "./utils_pb";
import * as __dep2 from "./mcp_pb";
import * as __dep3 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1,
  i = __dep2,
  o = __dep3;
const a = "agent.v1.";
class u extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return a;
  }
}
var c = (0, o.QT)(n.proto3, a, "McpRefreshPolicy", [[0, "UNSPECIFIED"], [1, "FORCE_IF_MISSING"], [2, "FORCE"]], 1),
  l = (0, o.QT)(n.proto3, a, "McpServerTransport", [[0, "UNSPECIFIED"], [1, "STDIO"], [2, "HTTP"]], 1);
class m extends u {
  constructor(t) {
    super(), this.name = "", this.args = {}, this.toolCallId = "", this.providerIdentifier = "", this.toolName = "", this.smartModeApprovalOnly = !1, this.skipApproval = !1, this.serverIdentifier = "", this.symbolicPathArguments = [], this.argumentsRepaired = !1, n.proto3.util.initPartial(t, this);
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
    return ["McpArgs|1 name 9|2 args 9,#0|3 tool_call_id 9|4 provider_identifier 9|5 tool_name 9|6 smart_mode_approval #1?|7 smart_mode_approval_only 8|8 skip_approval 8|9 server_identifier 9|10 symbolic_path_arguments #2*|11 arguments_repaired 8", n.Value, s.UC, d];
  }
}
class d extends u {
  constructor(t) {
    super(), this.path = "", this.sha256 = "", this.sizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
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
    return ["McpSymbolicPathArgument|1 path 9|2 sha256 9|3 size_bytes 3"];
  }
}
class p extends u {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["McpResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result|5 tool_not_found #4 result|6 server_not_found #5 result|7 approved #6 result", S, q, P, I, h, g, f];
  }
}
class f extends u {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["McpApproved"];
  }
}
class h extends u {
  constructor(t) {
    super(), this.name = "", this.availableTools = [], n.proto3.util.initPartial(t, this);
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
    return ["McpToolNotFound|1 name 9|2 available_tools 9*|3 recovery #0?", B];
  }
}
class g extends u {
  constructor(t) {
    super(), this.name = "", this.availableServers = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new g().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new g().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new g().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(g, t, r);
  }
  static $() {
    return ["McpServerNotFound|1 name 9|2 available_servers 9*"];
  }
}
class _ extends u {
  constructor(t) {
    super(), this.text = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_, t, r);
  }
  static $() {
    return ["McpTextContent|1 text 9|2 output_location #0?", s.pV];
  }
}
class w extends u {
  constructor(t) {
    super(), this.data = new Uint8Array(0), this.mimeType = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new w().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new w().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new w().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(w, t, r);
  }
  static $() {
    return ["McpImageContent|1 data 12|2 mime_type 9"];
  }
}
class y extends u {
  constructor(t) {
    super(), this.content = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new y().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new y().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new y().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(y, t, r);
  }
  static $() {
    return ["McpToolResultContentItem|1 text #0 content|2 image #1 content", _, w];
  }
}
class J extends u {
  constructor(t) {
    super(), this.body = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new J().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new J().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new J().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(J, t, r);
  }
  static $() {
    return ["SystemReminder|1 body 9"];
  }
}
class S extends u {
  constructor(t) {
    super(), this.content = [], this.isError = !1, this.systemReminders = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new S().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new S().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new S().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(S, t, r);
  }
  static $() {
    return ["McpSuccess|1 content #0*|2 is_error 8|3 structured_content #1|4 system_reminders #2*|5 result_meta #1", y, n.Struct, J];
  }
}
class q extends u {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new q().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new q().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new q().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(q, t, r);
  }
  static $() {
    return ["McpError|1 error 9|2 needs_auth 8?|3 recovery #0?|4 http_status 5?|5 retry_after_ms 13?|6 not_dialed 8?|7 bearer_error 9?", B];
  }
}
class B extends u {
  constructor(t) {
    super(), this.outcome = b.UNSPECIFIED, this.availableTools = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new B().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new B().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new B().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(B, t, r);
  }
  static $() {
    return ["McpRecovery|1 outcome #0|2 fresh_input_schema_json 9?|3 available_tools 9*", b];
  }
}
var b = (0, o.QT)(n.proto3, a, "McpRecovery.Outcome", [[0, "UNSPECIFIED"], [1, "CHANGED"], [2, "REMOVED"], [3, "UNCHANGED"], [4, "REFRESH_FAILED"]], 1);
class P extends u {
  constructor(t) {
    super(), this.reason = "", this.isReadonly = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new P().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new P().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new P().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(P, t, r);
  }
  static $() {
    return ["McpRejected|1 reason 9|2 is_readonly 8"];
  }
}
class I extends u {
  constructor(t) {
    super(), this.error = "", this.isReadonly = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new I().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new I().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new I().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(I, t, r);
  }
  static $() {
    return ["McpPermissionDenied|1 error 9|2 is_readonly 8"];
  }
}
class x extends u {
  constructor(t) {
    super(), this.serverIdentifiers = [], this.kickOnly = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new x().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new x().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new x().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(x, t, r);
  }
  static $() {
    return ["McpStateExecArgs|1 server_identifiers 9*|2 kick_only 8|3 refresh_policy #0?", c];
  }
}
class v extends u {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new v().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new v().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new v().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(v, t, r);
  }
  static $() {
    return ["McpStateExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result", E, k, T];
  }
}
class R extends u {
  constructor(t) {
    super(), this.serverName = "", this.serverIdentifier = "", this.tools = [], this.instructions = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new R().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new R().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new R().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(R, t, r);
  }
  static $() {
    return ["McpStateServer|1 server_name 9|2 server_identifier 9|3 plugin 9?|4 marketplace 9?|5 tools #0*|6 instructions #1*|7 status 9?|8 error_message 9?|9 pending_sign_in 8?|10 transport #2?|11 account_label 9?", i.gd, i.I0, l];
  }
}
class E extends u {
  constructor(t) {
    super(), this.servers = [], n.proto3.util.initPartial(t, this);
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
    return ["McpStateSuccess|1 servers #0*", R];
  }
}
class k extends u {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["McpStateError|1 error 9"];
  }
}
class T extends u {
  constructor(t) {
    super(), this.reason = "", n.proto3.util.initPartial(t, this);
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
    return ["McpStateRejected|1 reason 9"];
  }
}
class C extends u {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ListMcpResourcesExecArgs|1 server 9?"];
  }
}
class U extends u {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ListMcpResourcesExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result", $, O, j];
  }
}
class A extends u {
  constructor(t) {
    super(), this.uri = "", this.server = "", this.annotations = {}, n.proto3.util.initPartial(t, this);
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
    return ["ListMcpResourcesExecResult.McpResource|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 server 9|6 annotations 9,9"];
  }
}
class $ extends u {
  constructor(t) {
    super(), this.resources = [], n.proto3.util.initPartial(t, this);
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
    return ["ListMcpResourcesSuccess|1 resources #0*", A];
  }
}
class O extends u {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["ListMcpResourcesError|1 error 9"];
  }
}
class j extends u {
  constructor(t) {
    super(), this.reason = "", n.proto3.util.initPartial(t, this);
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
    return ["ListMcpResourcesRejected|1 reason 9"];
  }
}
class M extends u {
  constructor(t) {
    super(), this.server = "", this.uri = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
    return ["ReadMcpResourceExecArgs|1 server 9|2 uri 9|3 download_path 9?|4 tool_call_id 9|5 smart_mode_approval #0?", s.UC];
  }
}
class D extends u {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ReadMcpResourceExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 not_found #3 result", N, G, L, F];
  }
}
class N extends u {
  constructor(t) {
    super(), this.uri = "", this.content = {
      case: void 0
    }, this.annotations = {}, n.proto3.util.initPartial(t, this);
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
    return ["ReadMcpResourceSuccess|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 text 9 content|6 blob 12 content|7 annotations 9,9|8 download_path 9?|9 output_location #0?|10 meta_json 9?", s.pV];
  }
}
class G extends u {
  constructor(t) {
    super(), this.uri = "", this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["ReadMcpResourceError|1 uri 9|2 error 9"];
  }
}
class L extends u {
  constructor(t) {
    super(), this.uri = "", this.reason = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new L().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new L().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new L().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(L, t, r);
  }
  static $() {
    return ["ReadMcpResourceRejected|1 uri 9|2 reason 9"];
  }
}
class F extends u {
  constructor(t) {
    super(), this.uri = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new F().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new F().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new F().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(F, t, r);
  }
  static $() {
    return ["ReadMcpResourceNotFound|1 uri 9"];
  }
}
export { M as DI, L as Dh, m as E_, I as HQ, g as JL, G as Jx, N as KZ, f as Ke, x as Km, J as Kp, q as Nh, S as QW, $ as T2, h as WV, A as X2, R as XE, D as ZD, v as _W, y as _Z, w as do, c as ew, p as iz, U as kP, C as kj, F as ov, E as pv, O as w2, P as xo, _ as zN };
