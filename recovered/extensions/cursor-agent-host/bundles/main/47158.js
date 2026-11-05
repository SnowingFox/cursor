// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 47158 range:7951130..7962953
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47158: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { UploadService: () => k });
    var n = r(36038), s = r(65610), o = r(8592);
    const i = "aiserver.v1.";
    class a extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return i;
      }
    }
    var c = (0, o.QT)(n.proto3, i, "UploadStatus", [[0, "UNSPECIFIED"], [1, "IN_PROGRESS"], [2, "SUCCEEDED"], [3, "FAILED"], [4, "NOT_FOUND"]], 1);
    class l extends a {
      constructor(e2) {
        super(), this.docIdentifier = "", n.proto3.util.initPartial(e2, this);
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
        return ["RescrapeDocsRequest|1 doc_identifier 9|2 force_reupload 8?"];
      }
    }
    class u extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RescrapeDocsRequestV2|1 new_doc_req #0|2 force_reupload 8?", _];
      }
    }
    class d extends a {
      constructor(e2) {
        super(), this.success = false, n.proto3.util.initPartial(e2, this);
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
        return ["RescrapeDocsResponse|1 success 8|2 new_doc_identifier 9?"];
      }
    }
    class p extends a {
      constructor(e2) {
        super(), this.docIdentifier = "", n.proto3.util.initPartial(e2, this);
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
        return ["UploadedStatusRequest|1 doc_identifier 9"];
      }
    }
    class m extends a {
      constructor(e2) {
        super(), this.docIdentifier = "", n.proto3.util.initPartial(e2, this);
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
        return ["UploadDocumentationRequest|1 doc_identifier 9"];
      }
    }
    class h extends a {
      constructor(e2) {
        super(), this.docIdentifier = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetPagesRequest|1 doc_identifier 9"];
      }
    }
    class f extends a {
      constructor(e2) {
        super(), this.docIdentifier = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new f().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new f().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new f().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(f, e2, t2);
      }
      static $() {
        return ["GetDocRequest|1 doc_identifier 9"];
      }
    }
    class g extends a {
      constructor(e2) {
        super(), this.id = 0, this.uuid = "", this.docIdentifier = "", this.docName = "", this.docUrlRoot = "", this.docUrlPrefix = "", this.isDifferentPrefix = false, this.createdAt = "", this.updatedAt = "", this.lastUploadedAt = "", this.showToAllUsers = false, this.teamId = 0, this.customInstructions = "", this.pages = [], this.publishToTeam = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new g().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new g().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new g().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(g, e2, t2);
      }
      static $() {
        return ["ProtoDoc|1 id 5|2 uuid 9|3 doc_identifier 9|4 doc_name 9|5 doc_url_root 9|6 doc_url_prefix 9|7 is_different_prefix 8|8 created_at 9|9 updated_at 9|10 last_uploaded_at 9|11 upload_status #0|12 show_to_all_users 8|13 team_id 5|14 custom_instructions 9|15 pages #1*|16 publish_to_team 8", b, y];
      }
    }
    class y extends a {
      constructor(e2) {
        super(), this.url = "", this.title = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new y().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new y().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new y().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(y, e2, t2);
      }
      static $() {
        return ["ProtoDocPage|1 url 9|2 title 9"];
      }
    }
    class w extends a {
      constructor(e2) {
        super(), this.pages = [], this.pageUrls = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new w().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new w().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new w().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(w, e2, t2);
      }
      static $() {
        return ["Pages|1 pages 9*|2 page_urls 9*"];
      }
    }
    class v extends a {
      constructor(e2) {
        super(), this.docIdentifier = "", this.password = "", this.docName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new v().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new v().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new v().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(v, e2, t2);
      }
      static $() {
        return ["MarkAsPublicRequest|1 doc_identifier 9|2 password 9|3 doc_name 9"];
      }
    }
    class _ extends a {
      constructor(e2) {
        super(), this.docIdentifier = "", this.ignorePrefixes = [], this.ignoreUrls = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_, e2, t2);
      }
      static $() {
        return ["NewDocumentationRequest|1 doc_identifier 9|2 metadata #0|4 ignore_prefixes 9*|5 ignore_urls 9*|6 custom_instructions 9?|7 publish_to_team 8?|8 client_handles_uuid 8?", s.KC];
      }
    }
    class A extends a {
      constructor(e2) {
        super(), this.status = S.UNSPECIFIED, this.progress = 0, this.similarDocIdentifier = "", this.uploadedPages = [], this.docUuid = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new A().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new A().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new A().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(A, e2, t2);
      }
      static $() {
        return ["UploadResponse|1 status #0|2 progress 2|3 similar_doc_identifier 9|4 uploaded_pages 9*|5 doc_uuid 9", S];
      }
    }
    var S = (0, o.QT)(n.proto3, i, "UploadResponse.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"], [3, "ALREADY_EXISTS"], [4, "SIMILAR_ALREADY_EXISTS"]], 1);
    class b extends a {
      constructor(e2) {
        super(), this.status = E.UNSPECIFIED, this.uploadedPages = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new b().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new b().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new b().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(b, e2, t2);
      }
      static $() {
        return ["UploadedStatus|1 status #0|2 uploaded_pages 9*", E];
      }
    }
    var E = (0, o.QT)(n.proto3, i, "UploadedStatus.Status", [[0, "UNSPECIFIED"], [1, "IN_PROGRESS"], [2, "SUCCEEDED"], [3, "FAILED"], [4, "NOT_FOUND"]], 1);
    class I extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new I().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new I().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new I().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(I, e2, t2);
      }
      static $() {
        return ["UpsertDocsRequest|1 upload_status #0?|2 ignore_index_prefix 9?|3 doc_id 5?", c];
      }
    }
    class C extends a {
      constructor(e2) {
        super(), this.responses = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new C().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new C().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new C().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(C, e2, t2);
      }
      static $() {
        return ["UpsertDocsResponse|1 responses #0*", A];
      }
    }
    const k = { typeName: "aiserver.v1.UploadService", methods: { uploadDocumentation: { name: "UploadDocumentation", I: _, O: A, kind: n.MethodKind.Unary }, uploadDocumentationStatus: { name: "UploadDocumentationStatus", I: m, O: b, kind: n.MethodKind.Unary }, markAsPublic: { name: "MarkAsPublic", I: v, O: b, kind: n.MethodKind.Unary }, uploadStatus: { name: "UploadStatus", I: p, O: b, kind: n.MethodKind.Unary }, getPages: { name: "GetPages", I: h, O: w, kind: n.MethodKind.Unary }, getDoc: { name: "GetDoc", I: f, O: g, kind: n.MethodKind.Unary }, rescrapeDocs: { name: "RescrapeDocs", I: l, O: d, kind: n.MethodKind.Unary }, rescrapeDocsV2: { name: "RescrapeDocsV2", I: u, O: d, kind: n.MethodKind.Unary }, upsertAllDocs: { name: "UpsertAllDocs", I, O: C, kind: n.MethodKind.Unary } } };
  }