// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9582 range:6130951..6167328
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9582: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { AW: () => U, Ps: () => N, xv: () => rt });
    var n2 = r2(6038), s2 = r2(4500), i2 = r2(2730), o2 = r2(3955), a = r2(3133), u = r2(8592);
    const c = "agent.v1.";
    class l extends u.HL {
      static get runtime() {
        return (0, u.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return c;
      }
    }
    var m = (0, u.QT)(n2.proto3, c, "SelectedPluginCapabilityType", [[0, "UNSPECIFIED"], [1, "COMMAND"], [2, "SKILL"], [3, "SUBAGENT"]], 1);
    class d extends l {
      constructor(t3) {
        super(), this.dataOrBlobId = { case: void 0 }, this.uuid = "", this.path = "", this.mimeType = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SelectedImage|1 blob_id 12 data_or_blob_id|8 data 12 data_or_blob_id|9 blob_id_with_data #0 data_or_blob_id|10 prompt_upload_ref #1 data_or_blob_id|2 uuid 9|3 path 9|4 dimension #2|7 mime_type 9", f, h, p];
      }
    }
    class f extends l {
      constructor(t3) {
        super(), this.blobId = new Uint8Array(0), this.data = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
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
        return ["SelectedImage.BlobIdWithData|1 blob_id 12|2 data 12"];
      }
    }
    class p extends l {
      constructor(t3) {
        super(), this.width = 0, this.height = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["SelectedImage.Dimension|1 width 5|2 height 5"];
      }
    }
    class h extends l {
      constructor(t3) {
        super(), this.uploadId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["PromptUploadRef|1 upload_id 9"];
      }
    }
    class g extends l {
      constructor(t3) {
        super(), this.dataOrBlobId = { case: void 0 }, this.uuid = "", this.filename = "", this.mimeType = "", this.path = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SelectedDocument|1 blob_id 12 data_or_blob_id|8 data 12 data_or_blob_id|9 blob_id_with_data #0 data_or_blob_id|10 prompt_upload_ref #1 data_or_blob_id|2 uuid 9|3 filename 9|4 mime_type 9|7 path 9", A, h];
      }
    }
    class A extends l {
      constructor(t3) {
        super(), this.blobId = new Uint8Array(0), this.data = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
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
        return ["SelectedDocument.BlobIdWithData|1 blob_id 12|2 data 12"];
      }
    }
    class _ extends l {
      constructor(t3) {
        super(), this.dataOrBlobId = { case: void 0 }, this.uuid = "", this.path = "", this.mimeType = "", this.filename = "", this.materializeToFilesystem = false, n2.proto3.util.initPartial(t3, this);
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
        return ["SelectedVideo|1 blob_id 12 data_or_blob_id|8 data 12 data_or_blob_id|9 blob_id_with_data #0 data_or_blob_id|11 signed_url #1 data_or_blob_id|2 uuid 9|3 path 9|4 fps 2?|7 mime_type 9|10 filename 9|12 materialize_to_filesystem 8", y, w];
      }
    }
    class y extends l {
      constructor(t3) {
        super(), this.blobId = new Uint8Array(0), this.data = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
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
        return ["SelectedVideo.BlobIdWithData|1 blob_id 12|2 data 12"];
      }
    }
    class w extends l {
      constructor(t3) {
        super(), this.url = "", this.key = "", this.expiresAtUnixMs = n2.protoInt64.zero, this.refreshAfterUnixMs = n2.protoInt64.zero, this.conversationId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SelectedVideo.SignedUrl|1 url 9|2 key 9|3 expires_at_unix_ms 3|4 refresh_after_unix_ms 3|5 conversation_id 9"];
      }
    }
    class S extends l {
      constructor(t3) {
        super(), this.dataOrBlobId = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ExtraContextEntry|1 data 9 data_or_blob_id|2 blob_id 12 data_or_blob_id"];
      }
    }
    class J extends l {
      constructor(t3) {
        super(), this.content = "", this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new J().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new J().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new J().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(J, t3, e3);
      }
      static $() {
        return ["SelectedFile|1 content 9|2 path 9|3 relative_path 9?"];
      }
    }
    class B extends l {
      constructor(t3) {
        super(), this.content = "", this.path = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SelectedCodeSelection|1 content 9|2 path 9|3 relative_path 9?|4 range #0", s2.Q6];
      }
    }
    class E extends l {
      constructor(t3) {
        super(), this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new E().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new E().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new E().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(E, t3, e3);
      }
      static $() {
        return ["SelectedTerminal|1 content 9|2 title 9?|3 path 9?"];
      }
    }
    class I extends l {
      constructor(t3) {
        super(), this.content = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SelectedTerminalSelection|1 content 9|2 title 9?|3 path 9?|4 range #0", s2.Q6];
      }
    }
    class C extends l {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SelectedFolder|1 path 9|2 relative_path 9?|3 directory_tree #0", i2.vq];
      }
    }
    class b extends l {
      constructor(t3) {
        super(), this.url = "", this.uuid = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new b().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new b().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new b().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(b, t3, e3);
      }
      static $() {
        return ["SelectedExternalLink|1 url 9|2 uuid 9|3 pdf_content 9?|4 is_pdf 8?|5 filename 9?|6 blob_id 12?"];
      }
    }
    class k extends l {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new k().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new k().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new k().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(k, t3, e3);
      }
      static $() {
        return ["SelectedCursorRule|1 rule #0", o2.DX];
      }
    }
    class v extends l {
      constructor(t3) {
        super(), this.content = "", this.fullContentLengthCharCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new v().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new v().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new v().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(v, t3, e3);
      }
      static $() {
        return ["SelectedGitDiff|1 content 9|2 full_content_length_char_count 5"];
      }
    }
    class q extends l {
      constructor(t3) {
        super(), this.content = "", this.fullContentLengthCharCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(q, t3, e3);
      }
      static $() {
        return ["SelectedGitDiffFromBranchToMain|1 content 9|2 full_content_length_char_count 5"];
      }
    }
    class R extends l {
      constructor(t3) {
        super(), this.sha = "", this.message = "", this.diff = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new R().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new R().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new R().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(R, t3, e3);
      }
      static $() {
        return ["SelectedGitCommit|1 sha 9|2 message 9|3 description 9?|4 diff 9"];
      }
    }
    class P extends l {
      constructor(t3) {
        super(), this.number = 0, this.url = "", this.folderPath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new P().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new P().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new P().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(P, t3, e3);
      }
      static $() {
        return ["SelectedPullRequest|1 number 5|2 url 9|3 title 9?|4 folder_path 9|5 summary_json 9?|6 description 9?|7 blob_id 12?"];
      }
    }
    class T extends l {
      constructor(t3) {
        super(), this.prUrl = "", this.filePath = "", this.startLine = 0, this.endLine = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new T().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new T().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new T().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(T, t3, e3);
      }
      static $() {
        return ["SelectedGitPRDiffSelection|1 pr_url 9|2 file_path 9|3 start_line 5|4 end_line 5|5 diff_content 9?|6 blob_id 12?"];
      }
    }
    class x extends l {
      constructor(t3) {
        super(), this.pluginId = "", this.capabilityType = m.UNSPECIFIED, this.sourcePath = "", this.snapshotToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new x().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new x().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new x().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(x, t3, e3);
      }
      static $() {
        return ["SelectedPluginCapabilityRef|1 plugin_id 9|2 capability_type #0|3 source_path 9|4 snapshot_token 9|5 resolved_commit_sha 9?", m];
      }
    }
    class N extends l {
      constructor(t3) {
        super(), this.name = "", this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new N().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new N().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new N().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(N, t3, e3);
      }
      static $() {
        return ["SelectedCursorCommand|1 name 9|2 content 9|3 plugin_capability #0?|4 full_path 9?|5 display_name 9?", x];
      }
    }
    class D extends l {
      constructor(t3) {
        super(), this.docId = "", this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new D().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new D().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new D().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(D, t3, e3);
      }
      static $() {
        return ["SelectedDocumentation|1 doc_id 9|2 name 9"];
      }
    }
    class U extends l {
      constructor(t3) {
        super(), this.agentId = "", this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new U().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new U().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new U().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(U, t3, e3);
      }
      static $() {
        return ["SelectedPastChat|1 agent_id 9|2 name 9"];
      }
    }
    class Q extends l {
      constructor(t3) {
        super(), this.name = "", this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Q, t3, e3);
      }
      static $() {
        return ["RecentAgent|1 name 9|2 path 9|3 overview 9?"];
      }
    }
    class M extends l {
      constructor(t3) {
        super(), this.recentAgents = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new M().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new M().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new M().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(M, t3, e3);
      }
      static $() {
        return ["RecentAgentsContext|1 recent_agents #0*", Q];
      }
    }
    class O extends l {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new O().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new O().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new O().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(O, t3, e3);
      }
      static $() {
        return ["CallFrame|1 function_name 9?|2 url 9?|3 line_number 5?|4 column_number 5?"];
      }
    }
    class F extends l {
      constructor(t3) {
        super(), this.callFrames = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new F().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new F().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new F().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(F, t3, e3);
      }
      static $() {
        return ["StackTrace|1 call_frames #0*|2 raw_stack_trace 9?", O];
      }
    }
    class L extends l {
      constructor(t3) {
        super(), this.message = "", this.timestamp = 0, this.level = "", this.clientName = "", this.sessionId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new L().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new L().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new L().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(L, t3, e3);
      }
      static $() {
        return ["SelectedConsoleLog|1 message 9|2 timestamp 1|3 level 9|4 client_name 9|5 session_id 9|6 stack_trace #0?|7 object_data_json 9?", F];
      }
    }
    class $ extends l {
      constructor(t3) {
        super(), this.element = "", this.xpath = "", this.textContent = "", this.extra = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($, t3, e3);
      }
      static $() {
        return ["SelectedUIElement|1 element 9|2 xpath 9|3 text_content 9|4 extra 9|5 component 9?|6 component_props_json 9?"];
      }
    }
    class G extends l {
      constructor(t3) {
        super(), this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new G().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new G().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new G().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(G, t3, e3);
      }
      static $() {
        return ["SelectedSubagent|1 name 9"];
      }
    }
    class H extends l {
      constructor(t3) {
        super(), this.browserId = "", this.url = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new H().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new H().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new H().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(H, t3, e3);
      }
      static $() {
        return ["SelectedBrowser|1 browser_id 9|2 url 9|3 page_title 9?"];
      }
    }
    class K extends l {
      constructor(t3) {
        super(), this.filesToCommit = [], this.filesToExcludeFromCommit = [], this.shouldStageAllChanges = false, this.filesToCommitWithStatus = [], this.filesToExcludeFromCommitWithStatus = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new K().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new K().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new K().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(K, t3, e3);
      }
      static $() {
        return ["SelectedAgenticGitActionCommitParams|1 files_to_commit 9*|2 files_to_exclude_from_commit 9*|3 should_stage_all_changes 8|4 create_pr_draft 8?|5 files_to_commit_with_status #0*|6 files_to_exclude_from_commit_with_status #0*", z];
      }
    }
    class V extends l {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new V().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new V().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new V().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(V, t3, e3);
      }
      static $() {
        return ["SelectedAgenticGitActionCreateBranchParams"];
      }
    }
    class z extends l {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new z().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new z().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new z().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(z, t3, e3);
      }
      static $() {
        return ["SelectedAgenticGitFileWithStatus|1 path 9|2 status 9?"];
      }
    }
    class W extends l {
      constructor(t3) {
        super(), this.filesToPush = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new W().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new W().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new W().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(W, t3, e3);
      }
      static $() {
        return ["SelectedAgenticGitActionPushParams|1 files_to_push 9*|2 create_pr_draft 8?"];
      }
    }
    class Y extends l {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Y().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Y().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Y().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Y, t3, e3);
      }
      static $() {
        return ["SelectedAgenticGitActionFixMergeConflictsParams|1 base_branch 9?|2 pr_url 9?"];
      }
    }
    class j extends l {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new j().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new j().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new j().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(j, t3, e3);
      }
      static $() {
        return ["SelectedAgenticGitActionBabysitPrInCloudParams|1 base_branch 9?"];
      }
    }
    class X extends l {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new X().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new X().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new X().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(X, t3, e3);
      }
      static $() {
        return ["SelectedAgenticGitActionUpdateBranchParams|1 base_branch 9?"];
      }
    }
    class Z extends l {
      constructor(t3) {
        super(), this.remoteBranch = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Z().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Z().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Z().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Z, t3, e3);
      }
      static $() {
        return ["SelectedAgenticGitActionPullLocallyParams|1 remote_branch 9"];
      }
    }
    class tt extends l {
      constructor(t3) {
        super(), this.params = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tt, t3, e3);
      }
      static $() {
        return ["SelectedAgenticGitAction|2 commit_params #0 params|6 commit_and_push_params #0 params|3 push_params #1 params|7 create_pr_params #1 params|8 create_pr_with_changes_params #0 params|4 fix_merge_conflicts_params #2 params|11 babysit_pr_in_cloud_params #3 params|14 apply_locally_params #4 params|15 checkout_branch_params #4 params|12 create_branch_and_commit_params #0 params|13 create_branch_commit_and_push_params #0 params|16 update_branch_params #5 params|17 create_branch_params #6 params|5 branch_context #7?|9 path_to_template_file 9?|10 path_to_template_dir 9?", K, W, Y, j, Z, X, V, et];
      }
    }
    class et extends l {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new et().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new et().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new et().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(et, t3, e3);
      }
      static $() {
        return ["SelectedGitBranchContext|1 current_branch 9?|2 base_branch 9?|3 agent_branch_prefix 9?"];
      }
    }
    class rt extends l {
      constructor(t3) {
        super(), this.selectedImages = [], this.extraContext = [], this.extraContextEntries = [], this.files = [], this.codeSelections = [], this.terminals = [], this.terminalSelections = [], this.folders = [], this.externalLinks = [], this.cursorRules = [], this.cursorCommands = [], this.documentations = [], this.uiElements = [], this.consoleLogs = [], this.gitCommits = [], this.pastChats = [], this.gitPrDiffSelections = [], this.selectedPullRequests = [], this.selectedSubagents = [], this.selectedVideos = [], this.selectedBrowsers = [], this.selectedDocuments = [], this.selectedSkills = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rt, t3, e3);
      }
      static $() {
        return ["SelectedContext|1 selected_images #0*|2 invocation_context #1?|3 extra_context 9*|16 extra_context_entries #2*|4 files #3*|5 code_selections #4*|6 terminals #5*|7 terminal_selections #6*|8 folders #7*|9 external_links #8*|10 cursor_rules #9*|18 git_diff #10?|11 git_diff_from_branch_to_main #11?|12 cursor_commands #12*|13 documentations #13*|14 ui_elements #14*|15 console_logs #15*|17 git_commits #16*|19 past_chats #17*|20 git_pr_diff_selections #18*|21 selected_pull_requests #19*|22 selected_subagents #20*|23 selected_videos #21*|24 selected_browsers #22*|25 selected_documents #23*|26 selected_skills #24*|27 recent_agents_context #25?|34 selected_agentic_git_action #26?", d, nt, S, J, B, E, I, C, b, k, v, q, N, D, $, L, R, U, T, P, G, _, H, g, a.N, M, tt];
      }
    }
    class nt extends l {
      constructor(t3) {
        super(), this.data = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nt, t3, e3);
      }
      static $() {
        return ["InvocationContext|1 slack_thread #0 data|2 github_pr #1 data|3 ide_state #2 data|4 microsoft_teams_thread #3 data|10 blob_id 12 data", st, ot, at, it];
      }
    }
    class st extends l {
      constructor(t3) {
        super(), this.thread = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new st().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new st().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new st().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(st, t3, e3);
      }
      static $() {
        return ["InvocationContext.SlackThread|1 thread 9|2 channel_name 9?|3 channel_purpose 9?|4 channel_topic 9?|5 sender_name 9?|6 sender_id 9?|7 sender_type 9?|8 is_directly_addressed 8?"];
      }
    }
    class it extends l {
      constructor(t3) {
        super(), this.thread = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new it().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new it().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new it().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(it, t3, e3);
      }
      static $() {
        return ["InvocationContext.MicrosoftTeamsThread|1 thread 9|2 channel_name 9?|3 team_name 9?|4 channel_description 9?|5 team_description 9?"];
      }
    }
    class ot extends l {
      constructor(t3) {
        super(), this.title = "", this.description = "", this.comments = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ot().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ot().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ot().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ot, t3, e3);
      }
      static $() {
        return ["InvocationContext.GithubPR|1 title 9|2 description 9|3 comments 9|4 ci_failures 9?"];
      }
    }
    class at extends l {
      constructor(t3) {
        super(), this.visibleFiles = [], this.recentlyViewedFiles = [], this.currentlyViewedPrs = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new at().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new at().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new at().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(at, t3, e3);
      }
      static $() {
        return ["InvocationContext.IdeState|1 visible_files #0*|2 recently_viewed_files #0*|3 currently_viewed_prs #1*", ut, lt];
      }
    }
    class ut extends l {
      constructor(t3) {
        super(), this.path = "", this.totalLines = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ut().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ut().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ut().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ut, t3, e3);
      }
      static $() {
        return ["InvocationContext.IdeState.File|1 path 9|2 relative_path 9?|3 cursor_position #0?|4 total_lines 5|5 active_command 9?", ct];
      }
    }
    class ct extends l {
      constructor(t3) {
        super(), this.line = 0, this.text = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ct().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ct().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ct().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ct, t3, e3);
      }
      static $() {
        return ["InvocationContext.IdeState.File.CursorPosition|1 line 5|2 text 9"];
      }
    }
    class lt extends l {
      constructor(t3) {
        super(), this.number = 0, this.url = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lt, t3, e3);
      }
      static $() {
        return ["InvocationContext.IdeState.ViewedPullRequest|1 number 5|2 url 9|3 title 9?|4 folder_path 9?|5 summary_json 9?|6 description 9?"];
      }
    }
  }