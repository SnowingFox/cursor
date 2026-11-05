// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/fetch_exec_pb.js" range:711338..713157
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
    super(), this.url = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
    return ["FetchArgs|1 url 9|2 tool_call_id 9"];
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
    return ["FetchResult|1 success #0 result|2 error #1 result", u, c];
  }
}
class u extends i {
  constructor(t) {
    super(), this.url = "", this.content = "", this.statusCode = 0, this.contentType = "", n.proto3.util.initPartial(t, this);
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
    return ["FetchSuccess|1 url 9|2 content 9|3 status_code 5|4 content_type 9"];
  }
}
class c extends i {
  constructor(t) {
    super(), this.url = "", this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["FetchError|1 url 9|2 error 9"];
  }
}
export { o as UM, u as Uk, c as fk, a as uN };
