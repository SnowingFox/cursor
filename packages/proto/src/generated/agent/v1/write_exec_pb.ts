// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/write_exec_pb.js" range:893174..896480
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
    super(), this.path = "", this.fileText = "", this.toolCallId = "", this.returnFileContentAfterWrite = !1, this.fileBytes = new Uint8Array(0), n.proto3.util.initPartial(t, this);
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
    return ["WriteArgs|1 path 9|2 file_text 9|3 tool_call_id 9|4 return_file_content_after_write 8|5 file_bytes 12|6 encoding_hint 9?"];
  }
}
class a extends i {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["WriteResult|1 success #0 result|3 permission_denied #1 result|4 no_space #2 result|5 error #3 result|6 rejected #4 result", u, c, l, m, d];
  }
}
class u extends i {
  constructor(t) {
    super(), this.path = "", this.linesCreated = 0, this.fileSize = 0, n.proto3.util.initPartial(t, this);
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
    return ["WriteSuccess|1 path 9|2 lines_created 5|3 file_size 5|4 file_content_after_write 9?"];
  }
}
class c extends i {
  constructor(t) {
    super(), this.path = "", this.directory = "", this.operation = "", this.error = "", this.isReadonly = !1, n.proto3.util.initPartial(t, this);
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
    return ["WritePermissionDenied|1 path 9|2 directory 9|3 operation 9|4 error 9|5 is_readonly 8"];
  }
}
class l extends i {
  constructor(t) {
    super(), this.path = "", n.proto3.util.initPartial(t, this);
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
    return ["WriteNoSpace|1 path 9"];
  }
}
class m extends i {
  constructor(t) {
    super(), this.path = "", this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["WriteError|1 path 9|2 error 9"];
  }
}
class d extends i {
  constructor(t) {
    super(), this.path = "", this.reason = "", n.proto3.util.initPartial(t, this);
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
    return ["WriteRejected|1 path 9|2 reason 9"];
  }
}
export { m as QM, c as U7, l as bM, d as en, o as hY, u as j6, a as v3 };
