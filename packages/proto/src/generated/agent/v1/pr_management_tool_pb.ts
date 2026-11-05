// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/pr_management_tool_pb.js" range:765978..774908
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1;
const i = "agent.v1.";
class o extends s.HL {
  static get runtime() {
    return (0, s.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return i;
  }
}
var a = (0, s.QT)(n.proto3, i, "MergePrMode", [[0, "UNSPECIFIED"], [1, "MERGE"], [2, "AUTO"], [3, "DISABLE_AUTO"]], 1),
  u = (0, s.QT)(n.proto3, i, "MergePrMethod", [[0, "UNSPECIFIED"], [1, "MERGE"], [2, "SQUASH"]], 1),
  c = (0, s.QT)(n.proto3, i, "PullRequestStatus", [[0, "UNSPECIFIED"], [1, "OPEN"], [2, "CLOSED"]], 1);
class l extends o {
  constructor(t) {
    super(), this.toolCallId = "", this.action = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["PrManagementArgs|1 tool_call_id 9|2 create_pr #0 action|3 update_pr #1 action|4 post_comment #2 action|5 resolve_comment #3 action|6 get_ci_status #4 action|7 set_pr_status #5 action|8 merge_pr #6 action|9 list_prs #7 action|10 get_pr #8 action", m, d, p, f, h, g, _, w, y];
  }
}
class m extends o {
  constructor(t) {
    super(), this.title = "", this.body = "", this.branchName = "", this.addLabels = [], n.proto3.util.initPartial(t, this);
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
    return ["CreatePrAction|1 title 9|2 body 9|3 base_branch 9?|4 draft 8?|5 branch_name 9|6 add_labels 9*|7 repo_url 9?|8 skip_branch_prefix_check 8?|9 stack_on_pr_number 3?"];
  }
}
class d extends o {
  constructor(t) {
    super(), this.addLabels = [], this.removeLabels = [], n.proto3.util.initPartial(t, this);
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
    return ["UpdatePrAction|1 pr_url 9?|2 title 9?|3 body 9?|4 base_branch 9?|5 branch_name 9?|6 add_labels 9*|7 remove_labels 9*|8 repo_url 9?|9 stack_on_pr_number 3?|10 clear_stack 8?|11 draft 8?"];
  }
}
class p extends o {
  constructor(t) {
    super(), this.body = "", n.proto3.util.initPartial(t, this);
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
    return ["PostCommentAction|1 pr_url 9?|2 branch_name 9?|3 body 9|4 repo_url 9?|5 in_reply_to 3?|6 path 9?|7 line 5?|8 start_line 5?|9 side 9?|10 reply_to_reference 9?"];
  }
}
class f extends o {
  constructor(t) {
    super(), this.commentId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
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
    return ["ResolveCommentAction|1 pr_url 9?|2 branch_name 9?|3 comment_id 3|4 repo_url 9?|5 comment_reference 9?"];
  }
}
class h extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["GetCiStatusAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?"];
  }
}
class g extends o {
  constructor(t) {
    super(), this.status = c.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
    return ["SetPrStatusAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?|4 status #0", c];
  }
}
class _ extends o {
  constructor(t) {
    super(), this.mode = a.UNSPECIFIED, this.method = u.UNSPECIFIED, this.expectedMemberHeadShas = {}, this.downstack = !1, n.proto3.util.initPartial(t, this);
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
    return ["MergePrAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?|4 mode #0|5 method #1|6 expected_head_sha 9?|7 expected_member_head_shas 9,9|8 downstack 8", a, u];
  }
}
class w extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ListPrsArgs|1 limit 5?"];
  }
}
class y extends o {
  constructor(t) {
    super(), this.prUrl = "", n.proto3.util.initPartial(t, this);
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
    return ["GetPrArgs|1 pr_url 9"];
  }
}
class J extends o {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["PrManagementResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 registered #3 result|5 needs_confirmation #4 result|6 read #5 result", q, B, b, P, I, S];
  }
}
class S extends o {
  constructor(t) {
    super(), this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["PrManagementRead|1 message 9"];
  }
}
class q extends o {
  constructor(t) {
    super(), this.prUrl = "", this.prNumber = 0, this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["PrManagementSuccess|1 pr_url 9|2 pr_number 5|3 message 9"];
  }
}
class B extends o {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["PrManagementError|1 error 9"];
  }
}
class b extends o {
  constructor(t) {
    super(), this.reason = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new b().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new b().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new b().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(b, t, r);
  }
  static $() {
    return ["PrManagementRejected|1 reason 9"];
  }
}
class P extends o {
  constructor(t) {
    super(), this.message = "", this.title = "", this.body = "", this.branchName = "", n.proto3.util.initPartial(t, this);
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
    return ["PrManagementRegistered|1 message 9|2 title 9|3 body 9|4 base_branch 9?|5 draft 8?|6 branch_name 9"];
  }
}
class I extends o {
  constructor(t) {
    super(), this.message = "", this.discoveredPrUrl = "", this.discoveredPrNumber = 0, this.discoveredPrTitle = "", this.branchName = "", n.proto3.util.initPartial(t, this);
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
    return ["PrManagementNeedsConfirmation|1 message 9|2 discovered_pr_url 9|3 discovered_pr_number 5|4 discovered_pr_title 9|5 branch_name 9"];
  }
}
class x extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["PrManagementToolCall|1 args #0|2 result #1", l, J];
  }
}
class v extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["PrManagementRequestQuery|1 args #0", l];
  }
}
export { x as AU, v as DY, J as HL, B as K$ };
