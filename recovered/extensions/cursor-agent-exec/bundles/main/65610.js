// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 65610 range:6025165..6026962
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
65610: (e, t, r) => {
    "use strict";
    r.d(t, { KC: () => a, ci: () => c });
    var n = r(36038), s = r(8592);
    const o = "aiserver.v1.";
    class i extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return o;
      }
    }
    class a extends i {
      constructor(e2) {
        super(), this.prefixUrl = "", this.docName = "", this.isDifferentPrefixOrigin = false, this.truePrefixUrl = "", this.public = false, n.proto3.util.initPartial(e2, this);
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
        return ["DocumentationMetadata|1 prefix_url 9|2 doc_name 9|3 is_different_prefix_origin 8|4 true_prefix_url 9|5 public 8|6 team_id 5?"];
      }
    }
    class c extends i {
      constructor(e2) {
        super(), this.docName = "", this.pageUrl = "", this.documentationChunk = "", this.score = 0, this.pageTitle = "", n.proto3.util.initPartial(e2, this);
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
        return ["DocumentationChunk|1 doc_name 9|2 page_url 9|3 documentation_chunk 9|4 score 2|5 page_title 9"];
      }
    }
    n.proto3;
  }