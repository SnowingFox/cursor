// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/sandbox_pb.js" range:807479..809757
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
class a extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["NetworkPolicyLoggingConfig|1 decision_log_path 9?|2 log_format 9?"];
  }
}
class u extends o {
  constructor(t) {
    super(), this.deny = [], this.allow = [], n.proto3.util.initPartial(t, this);
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
    return ["NetworkPolicy|1 version 13?|2 default_action #0?|3 deny 9*|4 allow 9*|5 logging #1?", c, a];
  }
}
var c = (0, s.QT)(n.proto3, i, "NetworkPolicy.DefaultAction", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "DENY"]], 1);
class l extends o {
  constructor(t) {
    super(), this.type = m.UNSPECIFIED, this.additionalReadwritePaths = [], this.additionalReadonlyPaths = [], this.readBoundary = d.UNSPECIFIED, this.additionalReadPaths = [], n.proto3.util.initPartial(t, this);
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
    return ["SandboxPolicy|1 type #0|2 network_access 8?|3 additional_readwrite_paths 9*|4 additional_readonly_paths 9*|5 debug_output_dir 9?|7 disable_tmp_write 8?|8 allowlist_escalated 8?|9 enable_shared_build_cache 8?|10 network_policy #1?|11 network_policy_strict 8?|12 capture_denies 8?|13 skip_statsig_defaults 8?|14 read_boundary #2|15 additional_read_paths 9*|16 allow_user_override_read_paths 8?", m, u, d];
  }
}
var m = (0, s.QT)(n.proto3, i, "SandboxPolicy.Type", [[0, "UNSPECIFIED"], [1, "INSECURE_NONE"], [2, "WORKSPACE_READWRITE"], [3, "WORKSPACE_READONLY"]], 1),
  d = (0, s.QT)(n.proto3, i, "SandboxPolicy.ReadBoundaryMode", [[0, "UNSPECIFIED"], [1, "SYSTEM"], [2, "WORKSPACE"]], 1);
export { l as Mw, a as Qq, u as RB, d as Sz, c as h1, m as vc };
