// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/web_search_tool_pb.js" range:888736..893115
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
    super(), this.searchTerm = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
    return ["WebSearchArgs|1 search_term 9|2 tool_call_id 9"];
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
    return ["WebSearchResult|1 success #0 result|2 error #1 result|3 rejected #2 result", u, c, l];
  }
}
class u extends i {
  constructor(t) {
    super(), this.references = [], n.proto3.util.initPartial(t, this);
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
    return ["WebSearchSuccess|1 references #0*", m];
  }
}
class c extends i {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["WebSearchError|1 error 9"];
  }
}
class l extends i {
  constructor(t) {
    super(), this.reason = "", n.proto3.util.initPartial(t, this);
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
    return ["WebSearchRejected|1 reason 9"];
  }
}
class m extends i {
  constructor(t) {
    super(), this.title = "", this.url = "", this.chunk = "", n.proto3.util.initPartial(t, this);
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
    return ["WebSearchReference|1 title 9|2 url 9|3 chunk 9"];
  }
}
class d extends i {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["WebSearchToolCall|1 args #0|2 result #1", o, a];
  }
}
class p extends i {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["WebSearchRequestQuery|1 args #0", o];
  }
}
class f extends i {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["WebSearchRequestResponse|1 approved #0 result|2 rejected #1 result", h, g];
  }
}
class h extends i {
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
    return ["WebSearchRequestResponse.Approved"];
  }
}
class g extends i {
  constructor(t) {
    super(), this.reason = "", n.proto3.util.initPartial(t, this);
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
    return ["WebSearchRequestResponse.Rejected|1 reason 9"];
  }
}
export { p as KL, h as XJ, f as lI, d as pn, g as yc };
