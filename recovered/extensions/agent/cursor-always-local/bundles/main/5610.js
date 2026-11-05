// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5610 range:1271384..1274743
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5610: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { KC: () => a, MZ: () => c, ci: () => u, wP: () => l });
    var n2 = r2(6038), s2 = r2(8592);
    const i2 = "aiserver.v1.";
    class o2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return i2;
      }
    }
    class a extends o2 {
      constructor(t3) {
        super(), this.prefixUrl = "", this.docName = "", this.isDifferentPrefixOrigin = false, this.truePrefixUrl = "", this.public = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(a, t3, e3);
      }
      static $() {
        return ["DocumentationMetadata|1 prefix_url 9|2 doc_name 9|3 is_different_prefix_origin 8|4 true_prefix_url 9|5 public 8|6 team_id 5?"];
      }
    }
    class u extends o2 {
      constructor(t3) {
        super(), this.docName = "", this.pageUrl = "", this.documentationChunk = "", this.score = 0, this.pageTitle = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DocumentationChunk|1 doc_name 9|2 page_url 9|3 documentation_chunk 9|4 score 2|5 page_title 9"];
      }
    }
    class c extends o2 {
      constructor(t3) {
        super(), this.docIdentifier = "", this.query = "", this.topK = 0, this.rerankResults = false, n2.proto3.util.initPartial(t3, this);
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
        return ["DocumentationQueryRequest|1 doc_identifier 9|2 query 9|3 top_k 13|4 rerank_results 8"];
      }
    }
    class l extends o2 {
      constructor(t3) {
        super(), this.docIdentifier = "", this.docName = "", this.docChunks = [], this.status = m.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["DocumentationQueryResponse|1 doc_identifier 9|2 doc_name 9|3 doc_chunks #0*|4 status #1", u, m];
      }
    }
    var m = (0, s2.QT)(n2.proto3, i2, "DocumentationQueryResponse.Status", [[0, "UNSPECIFIED"], [1, "NOT_FOUND"], [2, "SUCCESS"], [3, "FAILURE"]], 1);
  }