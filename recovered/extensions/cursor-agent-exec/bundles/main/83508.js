// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 83508 range:10910551..10912009
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83508: (e, t, r) => {
    "use strict";
    r.d(t, { K: () => i, M: () => a });
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
        super(), this.url = "", n.proto3.util.initPartial(e2, this);
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
        return ["WebFetchAllowlistPrecheckArgs|1 url 9|2 tool_call_id 9?"];
      }
    }
    class a extends o {
      constructor(e2) {
        super(), this.allowlisted = false, n.proto3.util.initPartial(e2, this);
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
        return ["WebFetchAllowlistPrecheckResult|1 allowlisted 8"];
      }
    }
  }