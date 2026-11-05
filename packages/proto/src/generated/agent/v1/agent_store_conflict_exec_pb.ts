// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/agent_store_conflict_exec_pb.js" range:648888..651857
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
    super(), this.journalEpoch = "", this.seq = n.protoInt64.zero, this.lastEventId = "", n.proto3.util.initPartial(t, this);
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
    return ["AgentStoreConflictCursor|1 journal_epoch 9|2 seq 4|3 last_event_id 9"];
  }
}
class a extends i {
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
    return ["AgentStoreConflictArgs|1 cursor #0?|2 advance 8?|3 include_quota_notices 8?", o];
  }
}
class u extends i {
  constructor(t) {
    super(), this.v = 0, this.eventId = "", this.journalEpoch = "", this.seq = n.protoInt64.zero, this.tsMs = n.protoInt64.zero, this.kind = "", n.proto3.util.initPartial(t, this);
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
    return ["AgentStoreConflictEvent|1 v 13|2 event_id 9|3 journal_epoch 9|4 seq 4|5 ts_ms 4|6 kind 9|7 store_id 9?|8 original_rel_path 9?|9 conflict_rel_path 9?|10 original_abs_path 9?|11 conflict_abs_path 9?|12 preserved_bytes 4?|13 scope_kind 9?|14 limit_bytes 4?|15 usage_bytes 4?"];
  }
}
class c extends i {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["AgentStoreConflictResult|1 success #0 result|2 error #1 result", l, m];
  }
}
class l extends i {
  constructor(t) {
    super(), this.events = [], this.gap = !1, n.proto3.util.initPartial(t, this);
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
    return ["AgentStoreConflictSuccess|1 events #0*|2 next_cursor #1|3 gap 8", u, o];
  }
}
class m extends i {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["AgentStoreConflictError|1 error 9"];
  }
}
export { c as Ev, o as LK, u as RZ, a as Uz, m as h6, l as iS };
