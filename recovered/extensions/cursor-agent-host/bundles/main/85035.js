// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 85035 range:12020928..12048549
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85035: (e, t, r) => {
    "use strict";
    r.d(t, { $P: () => p, Gk: () => I, HH: () => u, JP: () => d, Oz: () => c, W2: () => N, bs: () => b, cN: () => B, dG: () => J, eL: () => v, fq: () => m, g4: () => O, k7: () => S, l_: () => E, qD: () => U, uE: () => P, uv: () => l, xu: () => G, yy: () => A, zw: () => j });
    var n = r(36038), s = r(67918), o = r(8592);
    const i = "aiserver.v1.";
    class a extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return i;
      }
    }
    class c extends a {
      constructor(e2) {
        super(), this.files = [], this.targetDir = "", this.repo = "", n.proto3.util.initPartial(e2, this);
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
        return ["CreateExperimentalIndexRequest|1 files 9*|2 target_dir 9|3 repo 9"];
      }
    }
    class l extends a {
      constructor(e2) {
        super(), this.indexId = "", n.proto3.util.initPartial(e2, this);
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
        return ["CreateExperimentalIndexResponse|1 index_id 9"];
      }
    }
    class u extends a {
      constructor(e2) {
        super(), this.indexId = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListExperimentalIndexFilesRequest|1 index_id 9"];
      }
    }
    class d extends a {
      constructor(e2) {
        super(), this.indexId = "", this.files = [], n.proto3.util.initPartial(e2, this);
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
        return ["ListExperimentalIndexFilesResponse|1 index_id 9|2 files #0*", F];
      }
    }
    class p extends a {
      constructor(e2) {
        super(), this.indexId = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListenExperimentalIndexRequest|1 index_id 9"];
      }
    }
    class m extends a {
      constructor(e2) {
        super(), this.indexId = "", this.item = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["ListenExperimentalIndexResponse|1 index_id 9|2 ready #0 item|3 register #1 item|4 choose #2 item|5 summarize #3 item|6 error #4 item", h, f, g, y, w];
      }
    }
    class h extends a {
      constructor(e2) {
        super(), this.indexId = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListenExperimentalIndexResponse.ReadyItem|1 index_id 9|2 request #0", p];
      }
    }
    class f extends a {
      constructor(e2) {
        super(), this.reqUuid = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListenExperimentalIndexResponse.RegisterItem|1 response #0|2 request #1|3 req_uuid 9", _, v];
      }
    }
    class g extends a {
      constructor(e2) {
        super(), this.reqUuid = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListenExperimentalIndexResponse.ChooseItem|1 response #0|2 request #1|3 req_uuid 9", x, I];
      }
    }
    class y extends a {
      constructor(e2) {
        super(), this.reqUuid = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListenExperimentalIndexResponse.SummarizeItem|1 response #0|2 request #1|3 req_uuid 9", M, J];
      }
    }
    class w extends a {
      constructor(e2) {
        super(), this.message = "", this.statusCode = 0, this.request = { case: void 0 }, this.reqUuid = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListenExperimentalIndexResponse.ErrorItem|1 message 9|2 status_code 5|3 register #0 request|4 choose #1 request|5 summarize #2 request|6 req_uuid 9", v, I, J];
      }
    }
    class v extends a {
      constructor(e2) {
        super(), this.indexId = "", this.workspaceRelativePath = "", this.content = [], n.proto3.util.initPartial(e2, this);
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
        return ["RegisterFileToIndexRequest|1 index_id 9|2 workspace_relative_path 9|3 root_context_node #0|4 content 9*", L];
      }
    }
    class _ extends a {
      constructor(e2) {
        super(), this.fileId = "", this.rootContextNodeId = "", this.dependencyResolutionAttempts = [], n.proto3.util.initPartial(e2, this);
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
        return ["RegisterFileToIndexResponse|1 file_id 9|2 root_context_node_id 9|3 dependency_resolution_attempts #0*|4 file_data #1", $, F];
      }
    }
    class A extends a {
      constructor(e2) {
        super(), this.indexId = "", this.fileId = "", this.dependencyResolutionResults = [], n.proto3.util.initPartial(e2, this);
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
        return ["SetupIndexDependenciesRequest|1 index_id 9|3 file_id 9|2 dependency_resolution_results #0*", Q];
      }
    }
    class S extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new S().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new S().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new S().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(S, e2, t2);
      }
      static $() {
        return ["SetupIndexDependenciesResponse"];
      }
    }
    class b extends a {
      constructor(e2) {
        super(), this.indexId = "", n.proto3.util.initPartial(e2, this);
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
        return ["ComputeIndexTopoSortRequest|1 index_id 9"];
      }
    }
    class E extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new E().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new E().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new E().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(E, e2, t2);
      }
      static $() {
        return ["ComputeIndexTopoSortResponse"];
      }
    }
    class I extends a {
      constructor(e2) {
        super(), this.indexId = "", this.request = { case: void 0 }, this.recompute = false, n.proto3.util.initPartial(e2, this);
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
        return ["ChooseCodeReferencesRequest|1 index_id 9|2 file #0 request|3 node #1 request|4 recompute 8", C, k];
      }
    }
    class C extends a {
      constructor(e2) {
        super(), this.fileId = "", n.proto3.util.initPartial(e2, this);
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
        return ["ChooseCodeReferencesRequest.FileRequest|1 file_id 9"];
      }
    }
    class k extends a {
      constructor(e2) {
        super(), this.nodeId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new k().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new k().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new k().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(k, e2, t2);
      }
      static $() {
        return ["ChooseCodeReferencesRequest.NodeRequest|1 node_id 9"];
      }
    }
    class x extends a {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new x().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new x().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new x().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(x, e2, t2);
      }
      static $() {
        return ["ChooseCodeReferencesResponse|1 file #0 response|2 node #1 response", R, T];
      }
    }
    class T extends a {
      constructor(e2) {
        super(), this.nodeId = "", this.actions = [], this.skipped = false, this.dependencies = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new T().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new T().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new T().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(T, e2, t2);
      }
      static $() {
        return ["ChooseCodeReferencesResponse.NodeResponse|1 node_id 9|2 actions #0*|3 skipped 8|4 dependencies 9*", K];
      }
    }
    class R extends a {
      constructor(e2) {
        super(), this.fileId = "", this.nodeResponses = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new R().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new R().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new R().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(R, e2, t2);
      }
      static $() {
        return ["ChooseCodeReferencesResponse.FileResponse|1 file_id 9|2 node_responses #0*", T];
      }
    }
    class B extends a {
      constructor(e2) {
        super(), this.nodeId = "", this.references = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new B().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new B().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new B().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(B, e2, t2);
      }
      static $() {
        return ["RegisterCodeReferencesRequest|1 node_id 9|2 references #0*", H];
      }
    }
    class P extends a {
      constructor(e2) {
        super(), this.dependencies = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new P().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new P().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new P().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(P, e2, t2);
      }
      static $() {
        return ["RegisterCodeReferencesResponse|1 dependencies 9*"];
      }
    }
    class J extends a {
      constructor(e2) {
        super(), this.indexId = "", this.nodeId = "", this.recompute = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new J().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new J().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new J().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(J, e2, t2);
      }
      static $() {
        return ["SummarizeWithReferencesRequest|1 index_id 9|2 node_id 9|3 recompute 8"];
      }
    }
    class M extends a {
      constructor(e2) {
        super(), this.response = { case: void 0 }, this.nodeId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new M().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new M().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new M().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(M, e2, t2);
      }
      static $() {
        return ["SummarizeWithReferencesResponse|1 success #0 response|2 dependency #1 response|3 node_id 9", q, D];
      }
    }
    class q extends a {
      constructor(e2) {
        super(), this.summary = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new q().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new q().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new q().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(q, e2, t2);
      }
      static $() {
        return ["SummarizeWithReferencesResponse.Success|1 summary 9"];
      }
    }
    class D extends a {
      constructor(e2) {
        super(), this.nodes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new D().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new D().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new D().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(D, e2, t2);
      }
      static $() {
        return ["SummarizeWithReferencesResponse.Dependency|2 nodes 9*"];
      }
    }
    class O extends a {
      constructor(e2) {
        super(), this.reqUuid = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new O().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new O().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new O().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(O, e2, t2);
      }
      static $() {
        return ["RequestReceivedResponse|1 req_uuid 9"];
      }
    }
    class N extends a {
      constructor(e2) {
        super(), this.indexId = "", this.id = "", this.summary = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new N().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new N().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new N().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(N, e2, t2);
      }
      static $() {
        return ["ReflectionData|1 index_id 9|2 id 9|3 summary 9"];
      }
    }
    class F extends a {
      constructor(e2) {
        super(), this.indexId = "", this.workspaceRelativePath = "", this.stage = "", this.order = 0, this.nodes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new F().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new F().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new F().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(F, e2, t2);
      }
      static $() {
        return ["IndexFileData|1 index_id 9|2 workspace_relative_path 9|3 stage 9|4 order 5|5 nodes #0*", U];
      }
    }
    class U extends a {
      constructor(e2) {
        super(), this.nodeId = "", this.stage = "", this.content = "", this.summary = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new U().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new U().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new U().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(U, e2, t2);
      }
      static $() {
        return ["IndexFileData.NodeData|1 node_id 9|2 stage 9|3 content 9|4 summary 9"];
      }
    }
    class L extends a {
      constructor(e2) {
        super(), this.workspaceRelativePath = "", this.startLineNumber = 0, this.endLineNumber = 0, this.children = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new L().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new L().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new L().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(L, e2, t2);
      }
      static $() {
        return ["SerializedContextNode|1 workspace_relative_path 9|2 start_line_number 5|3 end_line_number 5|4 children #0*|5 node_snippets #1", L, W];
      }
    }
    class $ extends a {
      constructor(e2) {
        super(), this.workspaceRelativePath = "", this.nodeId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($, e2, t2);
      }
      static $() {
        return ["URIResolutionAttempt|1 workspace_relative_path 9|2 node_id 9|3 symbol #0", K];
      }
    }
    class Q extends a {
      constructor(e2) {
        super(), this.resolvedPaths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Q().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Q().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Q().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Q, e2, t2);
      }
      static $() {
        return ["URIResolutionResult|1 request #0|2 resolved_paths 9*", $];
      }
    }
    class j extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new j().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new j().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new j().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(j, e2, t2);
      }
      static $() {
        return ["ExtractPathsRequest|1 file_code_snippets #0", W];
      }
    }
    class G extends a {
      constructor(e2) {
        super(), this.paths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new G().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new G().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new G().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(G, e2, t2);
      }
      static $() {
        return ["ExtractPathsResponse|1 paths #0*", K];
      }
    }
    class H extends a {
      constructor(e2) {
        super(), this.references = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new H().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new H().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new H().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(H, e2, t2);
      }
      static $() {
        return ["SymbolActionResults|1 action #0|2 references #1*", K, z];
      }
    }
    class z extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new z().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new z().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new z().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(z, e2, t2);
      }
      static $() {
        return ["SymbolActionResultReference|1 range #0|2 reference #1", s.SimpleRange, W];
      }
    }
    class W extends a {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.totalLines = 0, this.snippets = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new W().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new W().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new W().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(W, e2, t2);
      }
      static $() {
        return ["FileCodeSnippets|1 relative_workspace_path 9|2 total_lines 5|3 snippets #0*", V];
      }
    }
    class V extends a {
      constructor(e2) {
        super(), this.startLineNumber = 0, this.endLineNumber = 0, this.lines = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new V().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new V().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new V().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(V, e2, t2);
      }
      static $() {
        return ["CodeSnippet|1 start_line_number 5|2 end_line_number 5|3 lines 9*"];
      }
    }
    class K extends a {
      constructor(e2) {
        super(), this.workspaceRelativePath = "", this.lineNumber = 0, this.symbolStartColumn = 0, this.symbolEndColumn = 0, this.action = Y.UNSPECIFIED, this.symbol = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new K().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new K().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new K().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(K, e2, t2);
      }
      static $() {
        return ["CodeSymbolWithAction|1 workspace_relative_path 9|2 line_number 5|3 symbol_start_column 5|4 symbol_end_column 5|5 action #0|6 symbol 9", Y];
      }
    }
    var Y = (0, o.QT)(n.proto3, i, "CodeSymbolWithAction.CodeSymbolAction", [[0, "UNSPECIFIED"], [1, "GO_TO_DEFINITION"], [2, "GO_TO_IMPLEMENTATION"], [3, "REFERENCES"]], 1);
  }