// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7158 range:4203149..4215038
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7158: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { UploadService: () => b });
    var n2 = r2(6038), s2 = r2(5610), i2 = r2(8592);
    const o2 = "aiserver.v1.";
    class a extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return o2;
      }
    }
    var u = (0, i2.QT)(n2.proto3, o2, "UploadStatus", [[0, "UNSPECIFIED"], [1, "IN_PROGRESS"], [2, "SUCCEEDED"], [3, "FAILED"], [4, "NOT_FOUND"]], 1);
    class c extends a {
      constructor(t3) {
        super(), this.docIdentifier = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RescrapeDocsRequest|1 doc_identifier 9|2 force_reupload 8?"];
      }
    }
    class l extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RescrapeDocsRequestV2|1 new_doc_req #0|2 force_reupload 8?", w];
      }
    }
    class m extends a {
      constructor(t3) {
        super(), this.success = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RescrapeDocsResponse|1 success 8|2 new_doc_identifier 9?"];
      }
    }
    class d extends a {
      constructor(t3) {
        super(), this.docIdentifier = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UploadedStatusRequest|1 doc_identifier 9"];
      }
    }
    class f extends a {
      constructor(t3) {
        super(), this.docIdentifier = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new f().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new f().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new f().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(f, t3, e3);
      }
      static $() {
        return ["UploadDocumentationRequest|1 doc_identifier 9"];
      }
    }
    class p extends a {
      constructor(t3) {
        super(), this.docIdentifier = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new p().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new p().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new p().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(p, t3, e3);
      }
      static $() {
        return ["GetPagesRequest|1 doc_identifier 9"];
      }
    }
    class h extends a {
      constructor(t3) {
        super(), this.docIdentifier = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new h().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new h().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new h().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(h, t3, e3);
      }
      static $() {
        return ["GetDocRequest|1 doc_identifier 9"];
      }
    }
    class g extends a {
      constructor(t3) {
        super(), this.id = 0, this.uuid = "", this.docIdentifier = "", this.docName = "", this.docUrlRoot = "", this.docUrlPrefix = "", this.isDifferentPrefix = false, this.createdAt = "", this.updatedAt = "", this.lastUploadedAt = "", this.showToAllUsers = false, this.teamId = 0, this.customInstructions = "", this.pages = [], this.publishToTeam = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new g().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new g().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new g().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(g, t3, e3);
      }
      static $() {
        return ["ProtoDoc|1 id 5|2 uuid 9|3 doc_identifier 9|4 doc_name 9|5 doc_url_root 9|6 doc_url_prefix 9|7 is_different_prefix 8|8 created_at 9|9 updated_at 9|10 last_uploaded_at 9|11 upload_status #0|12 show_to_all_users 8|13 team_id 5|14 custom_instructions 9|15 pages #1*|16 publish_to_team 8", B, A];
      }
    }
    class A extends a {
      constructor(t3) {
        super(), this.url = "", this.title = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new A().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new A().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new A().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(A, t3, e3);
      }
      static $() {
        return ["ProtoDocPage|1 url 9|2 title 9"];
      }
    }
    class _ extends a {
      constructor(t3) {
        super(), this.pages = [], this.pageUrls = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_, t3, e3);
      }
      static $() {
        return ["Pages|1 pages 9*|2 page_urls 9*"];
      }
    }
    class y extends a {
      constructor(t3) {
        super(), this.docIdentifier = "", this.password = "", this.docName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new y().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new y().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new y().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(y, t3, e3);
      }
      static $() {
        return ["MarkAsPublicRequest|1 doc_identifier 9|2 password 9|3 doc_name 9"];
      }
    }
    class w extends a {
      constructor(t3) {
        super(), this.docIdentifier = "", this.ignorePrefixes = [], this.ignoreUrls = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new w().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new w().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new w().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(w, t3, e3);
      }
      static $() {
        return ["NewDocumentationRequest|1 doc_identifier 9|2 metadata #0|4 ignore_prefixes 9*|5 ignore_urls 9*|6 custom_instructions 9?|7 publish_to_team 8?|8 client_handles_uuid 8?", s2.KC];
      }
    }
    class S extends a {
      constructor(t3) {
        super(), this.status = J.UNSPECIFIED, this.progress = 0, this.similarDocIdentifier = "", this.uploadedPages = [], this.docUuid = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new S().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new S().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new S().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(S, t3, e3);
      }
      static $() {
        return ["UploadResponse|1 status #0|2 progress 2|3 similar_doc_identifier 9|4 uploaded_pages 9*|5 doc_uuid 9", J];
      }
    }
    var J = (0, i2.QT)(n2.proto3, o2, "UploadResponse.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"], [3, "ALREADY_EXISTS"], [4, "SIMILAR_ALREADY_EXISTS"]], 1);
    class B extends a {
      constructor(t3) {
        super(), this.status = E.UNSPECIFIED, this.uploadedPages = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new B().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new B().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new B().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(B, t3, e3);
      }
      static $() {
        return ["UploadedStatus|1 status #0|2 uploaded_pages 9*", E];
      }
    }
    var E = (0, i2.QT)(n2.proto3, o2, "UploadedStatus.Status", [[0, "UNSPECIFIED"], [1, "IN_PROGRESS"], [2, "SUCCEEDED"], [3, "FAILED"], [4, "NOT_FOUND"]], 1);
    class I extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new I().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new I().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new I().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(I, t3, e3);
      }
      static $() {
        return ["UpsertDocsRequest|1 upload_status #0?|2 ignore_index_prefix 9?|3 doc_id 5?", u];
      }
    }
    class C extends a {
      constructor(t3) {
        super(), this.responses = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new C().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new C().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new C().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(C, t3, e3);
      }
      static $() {
        return ["UpsertDocsResponse|1 responses #0*", S];
      }
    }
    const b = { typeName: "aiserver.v1.UploadService", methods: { uploadDocumentation: { name: "UploadDocumentation", I: w, O: S, kind: n2.MethodKind.Unary }, uploadDocumentationStatus: { name: "UploadDocumentationStatus", I: f, O: B, kind: n2.MethodKind.Unary }, markAsPublic: { name: "MarkAsPublic", I: y, O: B, kind: n2.MethodKind.Unary }, uploadStatus: { name: "UploadStatus", I: d, O: B, kind: n2.MethodKind.Unary }, getPages: { name: "GetPages", I: p, O: _, kind: n2.MethodKind.Unary }, getDoc: { name: "GetDoc", I: h, O: g, kind: n2.MethodKind.Unary }, rescrapeDocs: { name: "RescrapeDocs", I: c, O: m, kind: n2.MethodKind.Unary }, rescrapeDocsV2: { name: "RescrapeDocsV2", I: l, O: m, kind: n2.MethodKind.Unary }, upsertAllDocs: { name: "UpsertAllDocs", I, O: C, kind: n2.MethodKind.Unary } } };
  }