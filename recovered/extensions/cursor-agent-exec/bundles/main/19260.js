// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 19260 range:987410..993278
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
19260: (e, t, r) => {
    "use strict";
    r.d(t, { GU: () => h, LX: () => u, Pi: () => a, QG: () => d, dn: () => i, fl: () => c, iq: () => m, n0: () => l, vX: () => p });
    var n = r(36038), s = r(8592);
    class o extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class i extends o {
      constructor(e2) {
        super(), this.path = "", this.toolCallId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new i().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new i().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new i().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(i, e2, t2);
      }
      static $() {
        return ["DeleteArgs|1 path 9|2 tool_call_id 9"];
      }
    }
    class a extends o {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(a, e2, t2);
      }
      static $() {
        return ["DeleteResult|1 success #0 result|2 file_not_found #1 result|3 not_file #2 result|4 permission_denied #3 result|5 file_busy #4 result|6 rejected #5 result|7 error #6 result", c, l, u, d, p, m, h];
      }
    }
    class c extends o {
      constructor(e2) {
        super(), this.path = "", this.deletedFile = "", this.fileSize = n.protoInt64.zero, this.prevContent = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(c, e2, t2);
      }
      static $() {
        return ["DeleteSuccess|1 path 9|2 deleted_file 9|3 file_size 3|4 prev_content 9"];
      }
    }
    class l extends o {
      constructor(e2) {
        super(), this.path = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(l, e2, t2);
      }
      static $() {
        return ["DeleteFileNotFound|1 path 9"];
      }
    }
    class u extends o {
      constructor(e2) {
        super(), this.path = "", this.actualType = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(u, e2, t2);
      }
      static $() {
        return ["DeleteNotFile|1 path 9|2 actual_type 9"];
      }
    }
    class d extends o {
      constructor(e2) {
        super(), this.path = "", this.clientVisibleError = "", this.isReadonly = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new d().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new d().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new d().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(d, e2, t2);
      }
      static $() {
        return ["DeletePermissionDenied|1 path 9|2 client_visible_error 9|3 is_readonly 8"];
      }
    }
    class p extends o {
      constructor(e2) {
        super(), this.path = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new p().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new p().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new p().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(p, e2, t2);
      }
      static $() {
        return ["DeleteFileBusy|1 path 9"];
      }
    }
    class m extends o {
      constructor(e2) {
        super(), this.path = "", this.reason = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new m().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new m().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new m().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(m, e2, t2);
      }
      static $() {
        return ["DeleteRejected|1 path 9|2 reason 9"];
      }
    }
    class h extends o {
      constructor(e2) {
        super(), this.path = "", this.error = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new h().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new h().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new h().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(h, e2, t2);
      }
      static $() {
        return ["DeleteError|1 path 9|2 error 9"];
      }
    }
  }