// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 83341 range:11926732..11929600
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83341: (e, t, r) => {
    "use strict";
    r.d(t, { i9: () => l });
    var n = r(36038), s = r(8592);
    class o extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class i extends o {
      constructor(e2) {
        super(), this.line = 0, this.character = 0, n.proto3.util.initPartial(e2, this);
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
        return ["LspSubgraphPosition|1 line 5|2 character 5"];
      }
    }
    class a extends o {
      constructor(e2) {
        super(), this.startLine = 0, this.startCharacter = 0, this.endLine = 0, this.endCharacter = 0, n.proto3.util.initPartial(e2, this);
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
        return ["LspSubgraphRange|1 start_line 5|2 start_character 5|3 end_line 5|4 end_character 5"];
      }
    }
    class c extends o {
      constructor(e2) {
        super(), this.type = "", this.content = "", n.proto3.util.initPartial(e2, this);
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
        return ["LspSubgraphContextItem|1 uri 9?|2 type 9|3 content 9|4 range #0?", a];
      }
    }
    class l extends o {
      constructor(e2) {
        super(), this.uri = "", this.symbolName = "", this.positions = [], this.contextItems = [], this.score = 0, n.proto3.util.initPartial(e2, this);
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
        return ["LspSubgraphFullContext|1 uri 9|2 symbol_name 9|3 positions #0*|4 context_items #1*|5 score 2", i, c];
      }
    }
  }