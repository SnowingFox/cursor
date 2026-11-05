// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5035 range:1186016..1213740
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5035: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { $P: () => d, Gk: () => I, HH: () => l, JP: () => m, Oz: () => u, W2: () => Q, bs: () => B, cN: () => R, dG: () => T, eL: () => y, fq: () => f, g4: () => U, k7: () => J, l_: () => E, qD: () => O, uE: () => P, uv: () => c, xu: () => H, yy: () => S, zw: () => G });
    var n2 = r2(6038), s2 = r2(7918), i2 = r2(8592);
    const o2 = "aiserver.v1.";
    class a extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return o2;
      }
    }
    class u extends a {
      constructor(t3) {
        super(), this.files = [], this.targetDir = "", this.repo = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CreateExperimentalIndexRequest|1 files 9*|2 target_dir 9|3 repo 9"];
      }
    }
    class c extends a {
      constructor(t3) {
        super(), this.indexId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CreateExperimentalIndexResponse|1 index_id 9"];
      }
    }
    class l extends a {
      constructor(t3) {
        super(), this.indexId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListExperimentalIndexFilesRequest|1 index_id 9"];
      }
    }
    class m extends a {
      constructor(t3) {
        super(), this.indexId = "", this.files = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ListExperimentalIndexFilesResponse|1 index_id 9|2 files #0*", M];
      }
    }
    class d extends a {
      constructor(t3) {
        super(), this.indexId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListenExperimentalIndexRequest|1 index_id 9"];
      }
    }
    class f extends a {
      constructor(t3) {
        super(), this.indexId = "", this.item = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ListenExperimentalIndexResponse|1 index_id 9|2 ready #0 item|3 register #1 item|4 choose #2 item|5 summarize #3 item|6 error #4 item", p, h, g, A, _];
      }
    }
    class p extends a {
      constructor(t3) {
        super(), this.indexId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListenExperimentalIndexResponse.ReadyItem|1 index_id 9|2 request #0", d];
      }
    }
    class h extends a {
      constructor(t3) {
        super(), this.reqUuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListenExperimentalIndexResponse.RegisterItem|1 response #0|2 request #1|3 req_uuid 9", w, y];
      }
    }
    class g extends a {
      constructor(t3) {
        super(), this.reqUuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListenExperimentalIndexResponse.ChooseItem|1 response #0|2 request #1|3 req_uuid 9", k, I];
      }
    }
    class A extends a {
      constructor(t3) {
        super(), this.reqUuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListenExperimentalIndexResponse.SummarizeItem|1 response #0|2 request #1|3 req_uuid 9", x, T];
      }
    }
    class _ extends a {
      constructor(t3) {
        super(), this.message = "", this.statusCode = 0, this.request = { case: void 0 }, this.reqUuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListenExperimentalIndexResponse.ErrorItem|1 message 9|2 status_code 5|3 register #0 request|4 choose #1 request|5 summarize #2 request|6 req_uuid 9", y, I, T];
      }
    }
    class y extends a {
      constructor(t3) {
        super(), this.indexId = "", this.workspaceRelativePath = "", this.content = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RegisterFileToIndexRequest|1 index_id 9|2 workspace_relative_path 9|3 root_context_node #0|4 content 9*", F];
      }
    }
    class w extends a {
      constructor(t3) {
        super(), this.fileId = "", this.rootContextNodeId = "", this.dependencyResolutionAttempts = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RegisterFileToIndexResponse|1 file_id 9|2 root_context_node_id 9|3 dependency_resolution_attempts #0*|4 file_data #1", L, M];
      }
    }
    class S extends a {
      constructor(t3) {
        super(), this.indexId = "", this.fileId = "", this.dependencyResolutionResults = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SetupIndexDependenciesRequest|1 index_id 9|3 file_id 9|2 dependency_resolution_results #0*", $];
      }
    }
    class J extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["SetupIndexDependenciesResponse"];
      }
    }
    class B extends a {
      constructor(t3) {
        super(), this.indexId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ComputeIndexTopoSortRequest|1 index_id 9"];
      }
    }
    class E extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ComputeIndexTopoSortResponse"];
      }
    }
    class I extends a {
      constructor(t3) {
        super(), this.indexId = "", this.request = { case: void 0 }, this.recompute = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ChooseCodeReferencesRequest|1 index_id 9|2 file #0 request|3 node #1 request|4 recompute 8", C, b];
      }
    }
    class C extends a {
      constructor(t3) {
        super(), this.fileId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ChooseCodeReferencesRequest.FileRequest|1 file_id 9"];
      }
    }
    class b extends a {
      constructor(t3) {
        super(), this.nodeId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ChooseCodeReferencesRequest.NodeRequest|1 node_id 9"];
      }
    }
    class k extends a {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ChooseCodeReferencesResponse|1 file #0 response|2 node #1 response", q, v];
      }
    }
    class v extends a {
      constructor(t3) {
        super(), this.nodeId = "", this.actions = [], this.skipped = false, this.dependencies = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ChooseCodeReferencesResponse.NodeResponse|1 node_id 9|2 actions #0*|3 skipped 8|4 dependencies 9*", Y];
      }
    }
    class q extends a {
      constructor(t3) {
        super(), this.fileId = "", this.nodeResponses = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ChooseCodeReferencesResponse.FileResponse|1 file_id 9|2 node_responses #0*", v];
      }
    }
    class R extends a {
      constructor(t3) {
        super(), this.nodeId = "", this.references = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RegisterCodeReferencesRequest|1 node_id 9|2 references #0*", K];
      }
    }
    class P extends a {
      constructor(t3) {
        super(), this.dependencies = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RegisterCodeReferencesResponse|1 dependencies 9*"];
      }
    }
    class T extends a {
      constructor(t3) {
        super(), this.indexId = "", this.nodeId = "", this.recompute = false, n2.proto3.util.initPartial(t3, this);
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
        return ["SummarizeWithReferencesRequest|1 index_id 9|2 node_id 9|3 recompute 8"];
      }
    }
    class x extends a {
      constructor(t3) {
        super(), this.response = { case: void 0 }, this.nodeId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SummarizeWithReferencesResponse|1 success #0 response|2 dependency #1 response|3 node_id 9", N, D];
      }
    }
    class N extends a {
      constructor(t3) {
        super(), this.summary = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SummarizeWithReferencesResponse.Success|1 summary 9"];
      }
    }
    class D extends a {
      constructor(t3) {
        super(), this.nodes = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SummarizeWithReferencesResponse.Dependency|2 nodes 9*"];
      }
    }
    class U extends a {
      constructor(t3) {
        super(), this.reqUuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RequestReceivedResponse|1 req_uuid 9"];
      }
    }
    class Q extends a {
      constructor(t3) {
        super(), this.indexId = "", this.id = "", this.summary = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReflectionData|1 index_id 9|2 id 9|3 summary 9"];
      }
    }
    class M extends a {
      constructor(t3) {
        super(), this.indexId = "", this.workspaceRelativePath = "", this.stage = "", this.order = 0, this.nodes = [], n2.proto3.util.initPartial(t3, this);
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
        return ["IndexFileData|1 index_id 9|2 workspace_relative_path 9|3 stage 9|4 order 5|5 nodes #0*", O];
      }
    }
    class O extends a {
      constructor(t3) {
        super(), this.nodeId = "", this.stage = "", this.content = "", this.summary = "", n2.proto3.util.initPartial(t3, this);
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
        return ["IndexFileData.NodeData|1 node_id 9|2 stage 9|3 content 9|4 summary 9"];
      }
    }
    class F extends a {
      constructor(t3) {
        super(), this.workspaceRelativePath = "", this.startLineNumber = 0, this.endLineNumber = 0, this.children = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SerializedContextNode|1 workspace_relative_path 9|2 start_line_number 5|3 end_line_number 5|4 children #0*|5 node_snippets #1", F, z];
      }
    }
    class L extends a {
      constructor(t3) {
        super(), this.workspaceRelativePath = "", this.nodeId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["URIResolutionAttempt|1 workspace_relative_path 9|2 node_id 9|3 symbol #0", Y];
      }
    }
    class $ extends a {
      constructor(t3) {
        super(), this.resolvedPaths = [], n2.proto3.util.initPartial(t3, this);
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
        return ["URIResolutionResult|1 request #0|2 resolved_paths 9*", L];
      }
    }
    class G extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ExtractPathsRequest|1 file_code_snippets #0", z];
      }
    }
    class H extends a {
      constructor(t3) {
        super(), this.paths = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ExtractPathsResponse|1 paths #0*", Y];
      }
    }
    class K extends a {
      constructor(t3) {
        super(), this.references = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SymbolActionResults|1 action #0|2 references #1*", Y, V];
      }
    }
    class V extends a {
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
        return ["SymbolActionResultReference|1 range #0|2 reference #1", s2.SimpleRange, z];
      }
    }
    class z extends a {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.totalLines = 0, this.snippets = [], n2.proto3.util.initPartial(t3, this);
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
        return ["FileCodeSnippets|1 relative_workspace_path 9|2 total_lines 5|3 snippets #0*", W];
      }
    }
    class W extends a {
      constructor(t3) {
        super(), this.startLineNumber = 0, this.endLineNumber = 0, this.lines = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CodeSnippet|1 start_line_number 5|2 end_line_number 5|3 lines 9*"];
      }
    }
    class Y extends a {
      constructor(t3) {
        super(), this.workspaceRelativePath = "", this.lineNumber = 0, this.symbolStartColumn = 0, this.symbolEndColumn = 0, this.action = j.UNSPECIFIED, this.symbol = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CodeSymbolWithAction|1 workspace_relative_path 9|2 line_number 5|3 symbol_start_column 5|4 symbol_end_column 5|5 action #0|6 symbol 9", j];
      }
    }
    var j = (0, i2.QT)(n2.proto3, o2, "CodeSymbolWithAction.CodeSymbolAction", [[0, "UNSPECIFIED"], [1, "GO_TO_DEFINITION"], [2, "GO_TO_IMPLEMENTATION"], [3, "REFERENCES"]], 1);
  }