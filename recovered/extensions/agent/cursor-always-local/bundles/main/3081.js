// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3081 range:908913..912552
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3081: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { $m: () => u, pT: () => c });
    var n2 = r2(6038), s2 = r2(8592);
    const i2 = "agent.v1.";
    class o2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return i2;
      }
    }
    var a = (0, s2.QT)(n2.proto3, i2, "ConversationSearchSource", [[0, "UNSPECIFIED"], [1, "LOCAL"], [2, "CLOUD_CACHE"]], 1);
    class u extends o2 {
      constructor(t3) {
        super(), this.query = "", this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(u, t3, e3);
      }
      static $() {
        return ["ConversationSearchArgs|1 query 9|2 tool_call_id 9|3 limit 5?"];
      }
    }
    class c extends o2 {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(c, t3, e3);
      }
      static $() {
        return ["ConversationSearchResult|1 success #0 result|2 error #1 result", l, d];
      }
    }
    class l extends o2 {
      constructor(t3) {
        super(), this.hits = [], this.truncated = false, this.partial = false, this.rebuilding = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(l, t3, e3);
      }
      static $() {
        return ["ConversationSearchSuccess|1 hits #0*|2 truncated 8|3 partial 8|4 rebuilding 8", m];
      }
    }
    class m extends o2 {
      constructor(t3) {
        super(), this.conversationId = "", this.title = "", this.source = a.UNSPECIFIED, this.updatedAtMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new m().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new m().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new m().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(m, t3, e3);
      }
      static $() {
        return ["ConversationSearchHit|1 conversation_id 9|2 title 9|3 source #0|4 updated_at_ms 3|5 snippet 9?", a];
      }
    }
    class d extends o2 {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new d().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new d().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new d().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(d, t3, e3);
      }
      static $() {
        return ["ConversationSearchError|1 error 9"];
      }
    }
  }