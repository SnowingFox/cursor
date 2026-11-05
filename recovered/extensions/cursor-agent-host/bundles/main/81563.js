// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 81563 range:11710000..11765243
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81563: (e, t, r) => {
    "use strict";
    r.d(t, { $C: () => Me, A8: () => ue, AY: () => ge, A_: () => le, Ad: () => re, B6: () => U, BO: () => xe, CR: () => ke, DS: () => H, Fp: () => Fe, GB: () => Ce, GX: () => Ge, L7: () => Ne, LO: () => Te, Lf: () => se, MD: () => w, P5: () => De, PT: () => he, Ri: () => Q, Ss: () => J, W$: () => pe, WS: () => Ze, XM: () => Z, YH: () => Le, bD: () => Ie, bn: () => Se, bq: () => me, do: () => T, eI: () => y, eh: () => ie, em: () => Xe, fP: () => W, fh: () => D, g$: () => Ve, hZ: () => ee, i$: () => ae, ic: () => f, iq: () => ne, j1: () => ye, jq: () => _e, jw: () => q, lm: () => te, lp: () => I, m1: () => ze, p5: () => F, pD: () => oe, qA: () => M, qO: () => v, rL: () => S, se: () => p, v0: () => A, wj: () => je, xq: () => h, yX: () => fe, yk: () => Ke });
    var n = r(36038), s = r(67918), o = r(85035), i = r(8592);
    const a = "aiserver.v1.";
    class c extends i.HL {
      static get runtime() {
        return (0, i.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return a;
      }
    }
    var l = (0, i.QT)(n.proto3, a, "ChunkingStrategy", [[0, "UNSPECIFIED"], [1, "DEFAULT"]], 1), u = (0, i.QT)(n.proto3, a, "SimilarityMetricType", [[0, "UNSPECIFIED"], [1, "SIMHASH"]], 1), d = (0, i.QT)(n.proto3, a, "PathKeyHashType", [[0, "UNSPECIFIED"], [1, "SHA256"]], 1), p = (0, i.QT)(n.proto3, a, "RerankerAlgorithm", [[0, "UNSPECIFIED"], [1, "LULEA"], [2, "UMEA"], [3, "NONE"], [4, "LLAMA"], [5, "STARCODER_V1"], [6, "GPT_3_5_LOGPROBS"], [7, "LULEA_HAIKU"], [8, "COHERE"], [9, "VOYAGE"], [10, "VOYAGE_EMBEDS"], [11, "IDENTITY"], [12, "ADA_EMBEDS"]], 1), m = (0, i.QT)(n.proto3, a, "DatabaseProvider", [[0, "UNSPECIFIED"], [1, "AURORA"], [2, "PLANETSCALE"]], 1), h = (0, i.QT)(n.proto3, a, "RechunkerChoice", [[0, "RECHUNKER_CHOICE_UNSPECIFIED"], [1, "RECHUNKER_CHOICE_IDENTITY"], [2, "RECHUNKER_CHOICE_600_TOKS"], [3, "RECHUNKER_CHOICE_2400_TOKS"], [4, "RECHUNKER_CHOICE_4000_TOKS"]]);
    class f extends c {
      constructor(e2) {
        super(), this.readmes = [], this.topLevelRelativeWorkspacePaths = [], this.workspaceRootPath = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetHighLevelFolderDescriptionRequest|1 readmes #0*|2 top_level_relative_workspace_paths 9*|4 workspace_root_path 9", g];
      }
    }
    class g extends c {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetHighLevelFolderDescriptionRequest.Readme|1 relative_workspace_path 9|2 contents 9"];
      }
    }
    class y extends c {
      constructor(e2) {
        super(), this.description = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetHighLevelFolderDescriptionResponse|1 description 9"];
      }
    }
    class w extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["EnsureIndexCreatedRequest|1 repository #0", Se];
      }
    }
    class v extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["EnsureIndexCreatedResponse"];
      }
    }
    class _ extends c {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.hashOfNode = "", n.proto3.util.initPartial(e2, this);
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
        return ["PartialPathItem|1 relative_workspace_path 9|2 hash_of_node 9"];
      }
    }
    class A extends c {
      constructor(e2) {
        super(), this.rootHash = "", this.potentialLegacyRepoName = "", n.proto3.util.initPartial(e2, this);
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
        return ["FastRepoInitHandshakeRequest|1 repository #0|2 root_hash 9|3 potential_legacy_repo_name 9", Se];
      }
    }
    class S extends c {
      constructor(e2) {
        super(), this.status = b.UNSPECIFIED, this.repoName = "", n.proto3.util.initPartial(e2, this);
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
        return ["FastRepoInitHandshakeResponse|1 status #0|2 repo_name 9", b];
      }
    }
    var b = (0, i.QT)(n.proto3, a, "FastRepoInitHandshakeResponse.Status", [[0, "UNSPECIFIED"], [1, "UP_TO_DATE"], [2, "OUT_OF_SYNC"], [3, "FAILURE"], [4, "EMPTY"]], 1);
    class E extends c {
      constructor(e2) {
        super(), this.encryptedRelativePath = "", this.hash = "", this.children = [], n.proto3.util.initPartial(e2, this);
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
        return ["LocalCodebaseFileInfo|1 encrypted_relative_path 9|2 hash 9|3 children #0*|4 separator 9?", E];
      }
    }
    class I extends c {
      constructor(e2) {
        super(), this.rootHash = "", this.similarityMetricType = u.UNSPECIFIED, this.similarityMetric = [], this.pathKeyHash = "", this.pathKeyHashType = d.UNSPECIFIED, this.doCopy = false, this.pathKey = "", this.returnAfterBackgroundCopyStarted = false, n.proto3.util.initPartial(e2, this);
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
        return ["FastRepoInitHandshakeV2Request|1 repository #0|2 root_hash 9|3 similarity_metric_type #1|4 similarity_metric 2*|5 path_key_hash 9|6 path_key_hash_type #2|7 do_copy 8|8 path_key 9|9 local_codebase_root_info #3|10 return_after_background_copy_started 8", Se, u, d, E];
      }
    }
    class C extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["QueryOnlyRepositoryInfo|1 repository #0|2 query_only_repo_access #1", Se, me];
      }
    }
    class k extends c {
      constructor(e2) {
        super(), this.codebaseId = "", this.status = x.UNSPECIFIED, this.copyTaskHandle = "", n.proto3.util.initPartial(e2, this);
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
        return ["RepositoryCodebaseInfo|1 codebase_id 9|2 status #0|3 query_only_similar_repo #1|4 copy_task_handle 9", x, C];
      }
    }
    var x = (0, i.QT)(n.proto3, a, "RepositoryCodebaseInfo.Status", [[0, "UNSPECIFIED"], [1, "UP_TO_DATE"], [2, "OUT_OF_SYNC"], [3, "EMPTY"], [4, "EMPTY_WITH_COPY_AVAILABLE"], [5, "COPY_IN_PROGRESS"]], 1);
    class T extends c {
      constructor(e2) {
        super(), this.status = R.UNSPECIFIED, this.codebases = [], n.proto3.util.initPartial(e2, this);
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
        return ["FastRepoInitHandshakeV2Response|1 status #0|2 codebases #1*", R, k];
      }
    }
    var R = (0, i.QT)(n.proto3, a, "FastRepoInitHandshakeV2Response.Status", [[0, "UNSPECIFIED"], [1, "FAILURE"], [2, "SUCCESS"]], 1);
    class B extends c {
      constructor(e2) {
        super(), this.codebaseId = "", this.status = P.UNSPECIFIED, this.similarityMetricType = u.UNSPECIFIED, this.similarityMetric = [], this.pathKeyHash = "", this.pathKeyHashType = d.UNSPECIFIED, this.failedUploadCount = 0, this.failedDeleteCount = 0, this.totalUploadCount = 0, this.totalDeleteCount = 0, this.failedSubtreeCount = 0, this.totalSubtreeCount = 0, this.hitIterationLimit = false, n.proto3.util.initPartial(e2, this);
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
        return ["RepositoryCodebaseSyncStatus|1 codebase_id 9|2 status #0|3 similarity_metric_type #1|4 similarity_metric 2*|5 path_key_hash 9|6 path_key_hash_type #2|7 failed_upload_count 5|8 failed_delete_count 5|9 total_upload_count 5|10 total_delete_count 5|11 failed_subtree_count 5|12 total_subtree_count 5|13 hit_iteration_limit 8", P, u, d];
      }
    }
    var P = (0, i.QT)(n.proto3, a, "RepositoryCodebaseSyncStatus.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"]], 1);
    class J extends c {
      constructor(e2) {
        super(), this.codebases = [], n.proto3.util.initPartial(e2, this);
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
        return ["FastRepoSyncCompleteRequest|1 codebases #0*", B];
      }
    }
    class M extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["FastRepoSyncCompleteResponse"];
      }
    }
    class q extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SyncMerkleSubtreeRequest|1 repository #0|2 local_partial_path #1", Se, _];
      }
    }
    class D extends c {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["SyncMerkleSubtreeResponse|1 match 8 result|2 mismatch #0 result", O];
      }
    }
    class O extends c {
      constructor(e2) {
        super(), this.children = [], n.proto3.util.initPartial(e2, this);
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
        return ["SyncMerkleSubtreeResponse.Mismatch|1 children #0*", _];
      }
    }
    class N extends c {
      constructor(e2) {
        super(), this.orthogonalTransformSeed = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ClientRepositoryInfo|1 orthogonal_transform_seed 1"];
      }
    }
    class F extends c {
      constructor(e2) {
        super(), this.codebaseId = "", this.localPartialPaths = [], n.proto3.util.initPartial(e2, this);
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
        return ["SyncMerkleSubtreeV2Request|1 client_repository_info #0|2 codebase_id 9|3 local_partial_path #1|4 local_partial_paths #1*", N, _];
      }
    }
    class U extends c {
      constructor(e2) {
        super(), this.result = { case: void 0 }, this.results = [], n.proto3.util.initPartial(e2, this);
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
        return ["SyncMerkleSubtreeV2Response|1 match 8 result|2 mismatch #0 result|3 results #1*", L, $];
      }
    }
    class L extends c {
      constructor(e2) {
        super(), this.children = [], n.proto3.util.initPartial(e2, this);
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
        return ["SyncMerkleSubtreeV2Response.Mismatch|1 children #0*", _];
      }
    }
    class $ extends c {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["SyncMerkleSubtreeV2Response.PartialPathResult|1 match 8 result|2 mismatch #0 result|3 response_size_limit_exceeded 8 result", L];
      }
    }
    class Q extends c {
      constructor(e2) {
        super(), this.partialPath = { case: void 0 }, this.ancestorSpline = [], this.updateType = j.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["FastUpdateFileRequest|1 repository #0|2 directory #1 partial_path|3 local_file #2 partial_path|4 ancestor_spline #1*|5 update_type #3", Se, _, G, j];
      }
    }
    var j = (0, i.QT)(n.proto3, a, "FastUpdateFileRequest.UpdateType", [[0, "UNSPECIFIED"], [1, "ADD"], [2, "DELETE"], [3, "MODIFY"]], 1);
    class G extends c {
      constructor(e2) {
        super(), this.hash = "", this.unencryptedRelativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["FastUpdateFileRequest.LocalFile|1 file #0|2 hash 9|3 unencrypted_relative_workspace_path 9", s.File];
      }
    }
    class H extends c {
      constructor(e2) {
        super(), this.status = z.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["FastUpdateFileResponse|1 status #0", z];
      }
    }
    var z = (0, i.QT)(n.proto3, a, "FastUpdateFileResponse.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"], [3, "EXPECTED_FAILURE"]], 1);
    class W extends c {
      constructor(e2) {
        super(), this.codebaseId = "", this.partialPath = { case: void 0 }, this.ancestorSpline = [], this.updateType = V.UNSPECIFIED, this.fileUpdates = [], n.proto3.util.initPartial(e2, this);
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
        return ["FastUpdateFileV2Request|1 client_repository_info #0|2 codebase_id 9|3 directory #1 partial_path|4 local_file #2 partial_path|5 ancestor_spline #1*|6 update_type #3|7 file_updates #4*", N, _, K, V, Y];
      }
    }
    var V = (0, i.QT)(n.proto3, a, "FastUpdateFileV2Request.UpdateType", [[0, "UNSPECIFIED"], [1, "ADD"], [2, "DELETE"], [3, "MODIFY"], [4, "BATCH"]], 1);
    class K extends c {
      constructor(e2) {
        super(), this.hash = "", this.unencryptedRelativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["FastUpdateFileV2Request.LocalFile|1 file #0|2 hash 9|3 unencrypted_relative_workspace_path 9", s.File];
      }
    }
    class Y extends c {
      constructor(e2) {
        super(), this.partialPath = { case: void 0 }, this.ancestorSpline = [], this.updateType = V.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Y().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Y().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Y().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Y, e2, t2);
      }
      static $() {
        return ["FastUpdateFileV2Request.FileUpdate|1 directory #0 partial_path|2 local_file #1 partial_path|3 ancestor_spline #0*|4 update_type #2", _, K, V];
      }
    }
    class Z extends c {
      constructor(e2) {
        super(), this.status = X.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Z().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Z().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Z().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Z, e2, t2);
      }
      static $() {
        return ["FastUpdateFileV2Response|1 status #0", X];
      }
    }
    var X = (0, i.QT)(n.proto3, a, "FastUpdateFileV2Response.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"], [3, "EXPECTED_FAILURE"]], 1);
    class ee extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ee().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ee().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ee().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ee, e2, t2);
      }
      static $() {
        return ["GetUploadLimitsRequest|1 repository #0?", Se];
      }
    }
    class te extends c {
      constructor(e2) {
        super(), this.softLimit = 0, this.hardLimit = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new te().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new te().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new te().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(te, e2, t2);
      }
      static $() {
        return ["GetUploadLimitsResponse|1 soft_limit 5|2 hard_limit 5"];
      }
    }
    class re extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new re().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new re().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new re().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(re, e2, t2);
      }
      static $() {
        return ["GetNumFilesToSendRequest|1 repository #0", Se];
      }
    }
    class ne extends c {
      constructor(e2) {
        super(), this.numFiles = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ne().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ne().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ne().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ne, e2, t2);
      }
      static $() {
        return ["GetNumFilesToSendResponse|1 num_files 5"];
      }
    }
    class se extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new se().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new se().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new se().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(se, e2, t2);
      }
      static $() {
        return ["GetAvailableChunkingStrategiesRequest|1 repository #0", Se];
      }
    }
    class oe extends c {
      constructor(e2) {
        super(), this.chunkingStrategies = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new oe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new oe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new oe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(oe, e2, t2);
      }
      static $() {
        return ["GetAvailableChunkingStrategiesResponse|1 chunking_strategies #0*", l];
      }
    }
    class ie extends c {
      constructor(e2) {
        super(), this.texts = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ie().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ie().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ie().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ie, e2, t2);
      }
      static $() {
        return ["GetEmbeddingsRequest|1 texts 9*"];
      }
    }
    class ae extends c {
      constructor(e2) {
        super(), this.embeddings = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ae().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ae().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ae().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ae, e2, t2);
      }
      static $() {
        return ["GetEmbeddingsResponse|2 embeddings #0*", ce];
      }
    }
    class ce extends c {
      constructor(e2) {
        super(), this.embedding = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ce().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ce().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ce().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ce, e2, t2);
      }
      static $() {
        return ["GetEmbeddingsResponse.Embedding|1 embedding 2*"];
      }
    }
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    class le extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new le().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new le().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new le().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(le, e2, t2);
      }
      static $() {
        return ["RemoveRepositoryRequest|1 repository #0", Se];
      }
    }
    class ue extends c {
      constructor(e2) {
        super(), this.status = de.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ue().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ue().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ue().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ue, e2, t2);
      }
      static $() {
        return ["RemoveRepositoryResponse|1 status #0", de];
      }
    }
    var de = (0, i.QT)(n.proto3, a, "RemoveRepositoryResponse.Status", [[0, "UNSPECIFIED"], [1, "NOT_FOUND"], [2, "NOT_AUTHORIZED"], [3, "STARTED"], [4, "SUCCESS"]], 1);
    n.proto3;
    class pe extends c {
      constructor(e2) {
        super(), this.query = "", this.topK = 0, this.rerank = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pe, e2, t2);
      }
      static $() {
        return ["SearchRepositoryRequest|1 query 9|2 repository #0|3 top_k 5|4 model_details #1|5 rerank 8|6 context_cache_request 8?|7 glob_filter 9?|8 not_glob_filter 9?|9 race_n_requests 5?|10 query_only_repo_access #2", Se, s.ModelDetails, me];
      }
    }
    class me extends c {
      constructor(e2) {
        super(), this.ownerAuthId = "", this.accessToken = "", this.userRepoOwner = "", this.userRepoName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new me().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new me().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new me().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(me, e2, t2);
      }
      static $() {
        return ["QueryOnlyRepoAccess|1 owner_auth_id 9|2 access_token 9|3 user_repo_owner 9|4 user_repo_name 9"];
      }
    }
    class he extends c {
      constructor(e2) {
        super(), this.score = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new he().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new he().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new he().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(he, e2, t2);
      }
      static $() {
        return ["CodeResult|1 code_block #0|2 score 2", s.CodeBlock];
      }
    }
    class fe extends c {
      constructor(e2) {
        super(), this.score = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fe, e2, t2);
      }
      static $() {
        return ["FileResult|1 file #0|2 score 2", s.File];
      }
    }
    class ge extends c {
      constructor(e2) {
        super(), this.codeResults = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ge().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ge().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ge().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ge, e2, t2);
      }
      static $() {
        return ["SearchRepositoryResponse|1 code_results #0*", he];
      }
    }
    class ye extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ye().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ye().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ye().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ye, e2, t2);
      }
      static $() {
        return ["SemSearchRequest|1 request #0", pe];
      }
    }
    class we extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new we().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new we().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new we().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(we, e2, t2);
      }
      static $() {
        return ["CodeResultWithClassificationInfo|1 code_result #0|2 line_number_classification #1?", he, ve];
      }
    }
    class ve extends c {
      constructor(e2) {
        super(), this.queryComputedFor = "", this.matchedStrings = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ve().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ve().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ve().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ve, e2, t2);
      }
      static $() {
        return ["CodeResultWithClassificationInfo.LineNumberClassification|1 detailed_line #0|2 query_computed_for 9|3 matched_strings 9*|4 highlight_range #1", s.DetailedLine, s.SimpleRange];
      }
    }
    class _e extends c {
      constructor(e2) {
        super(), this.codeResults = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _e().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _e().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _e().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_e, e2, t2);
      }
      static $() {
        return ["SemSearchResponse|1 response #0|2 metadata #1?|3 code_results #2*", ge, Ae, we];
      }
    }
    class Ae extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ae().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ae().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ae().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ae, e2, t2);
      }
      static $() {
        return ["SemSearchResponse.SemSearchMetadata|1 query_embedding_model 9?|2 server_side_latency_ms 5?|3 embed_latency_ms 5?|4 knn_latency_ms 5?"];
      }
    }
    n.proto3;
    n.proto3;
    n.proto3;
    class Se extends c {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.remoteUrls = [], this.remoteNames = [], this.repoName = "", this.repoOwner = "", this.isTracked = false, this.isLocal = false, this.workspaceUri = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Se().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Se().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Se().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Se, e2, t2);
      }
      static $() {
        return ["RepositoryInfo|1 relative_workspace_path 9|2 remote_urls 9*|3 remote_names 9*|4 repo_name 9|5 repo_owner 9|6 is_tracked 8|7 is_local 8|8 num_files 5?|9 orthogonal_transform_seed 1?|10 preferred_embedding_model #0?|11 workspace_uri 9|12 preferred_db_provider #1?", s.EmbeddingModel, m];
      }
    }
    class be extends c {
      constructor(e2) {
        super(), this.score = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new be().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new be().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new be().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(be, e2, t2);
      }
      static $() {
        return ["NodeResult|1 node #0|2 file #1|3 score 2", o.qD, s.File];
      }
    }
    class Ee extends c {
      constructor(e2) {
        super(), this.score = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ee().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ee().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ee().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ee, e2, t2);
      }
      static $() {
        return ["ReflectionResult|1 reflection #0|2 score 2", o.W2];
      }
    }
    class Ie extends c {
      constructor(e2) {
        super(), this.topNodes = [], this.reflections = [], this.indexId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ie().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ie().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ie().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ie, e2, t2);
      }
      static $() {
        return ["SearchRepositoryDeepContextResponse|1 top_nodes #0*|2 reflections #1*|3 index_id 9", be, Ee];
      }
    }
    class Ce extends c {
      constructor(e2) {
        super(), this.query = "", this.codeResults = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ce().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ce().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ce().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ce, e2, t2);
      }
      static $() {
        return ["GetLineNumberClassificationsRequest|1 query 9|2 code_results #0*", he];
      }
    }
    class ke extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ke().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ke().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ke().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ke, e2, t2);
      }
      static $() {
        return ["GetLineNumberClassificationsResponse|1 classified_result #0", we];
      }
    }
    class xe extends c {
      constructor(e2) {
        super(), this.codebaseId = "", this.copyTaskHandle = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xe, e2, t2);
      }
      static $() {
        return ["GetCopyStatusRequest|1 codebase_id 9|2 copy_task_handle 9"];
      }
    }
    class Te extends c {
      constructor(e2) {
        super(), this.phase = Re.UNSPECIFIED, this.percentDone = 0, this.errorMessage = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Te().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Te().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Te().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Te, e2, t2);
      }
      static $() {
        return ["GetCopyStatusResponse|1 phase #0|2 percent_done 2|3 error_message 9|4 completed_status #1?", Re, Be];
      }
    }
    var Re = (0, i.QT)(n.proto3, a, "GetCopyStatusResponse.Phase", [[0, "UNSPECIFIED"], [1, "INITIALIZING"], [2, "COPYING"], [3, "COMPLETED"], [4, "CREATING_SEARCH_FILTERS"], [5, "COPYING_SEARCH_STATE"], [6, "COPYING_TREE_STATE"], [7, "SYNCING_COPY"]], 1), Be = (0, i.QT)(n.proto3, a, "GetCopyStatusResponse.CompletedStatus", [[0, "UNSPECIFIED"], [1, "UP_TO_DATE"], [2, "OUT_OF_SYNC"], [3, "FAILURE"]], 1);
    class Pe extends c {
      constructor(e2) {
        super(), this.path = "", this.diff = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pe, e2, t2);
      }
      static $() {
        return ["IndexedFile|1 path 9|2 diff 9*"];
      }
    }
    class Je extends c {
      constructor(e2) {
        super(), this.prNumber = 0, this.sha = "", this.message = "", this.changedFiles = [], this.generation = 0, this.commitSecret = "", this.unixTimestamp = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Je().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Je().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Je().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Je, e2, t2);
      }
      static $() {
        return ["IndexedPullRequest|1 pr_number 13|2 sha 9|3 message 9|4 changed_files #0*|5 generation 13|6 commit_secret 9|7 unix_timestamp 3|8 title 9?|9 author 9?", Pe];
      }
    }
    class Me extends c {
      constructor(e2) {
        super(), this.origin = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Me().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Me().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Me().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Me, e2, t2);
      }
      static $() {
        return ["RepoHistoryInitHandshakeRequest|1 repository #0|2 origin 9|3 test_origin_commit 9?|4 test_origin_commit_secret 9?|5 send_copy_candidates 8?", Se];
      }
    }
    class qe extends c {
      constructor(e2) {
        super(), this.historyId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qe, e2, t2);
      }
      static $() {
        return ["RepoHistoryInfo|1 history_id 9|2 branch_name 9?|3 last_indexed_commit 9?|4 last_indexed_commit_generation 13?|5 sync_bitmap 12?"];
      }
    }
    class De extends c {
      constructor(e2) {
        super(), this.status = Oe.UNSPECIFIED, this.histories = [], this.copyCandidates = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new De().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new De().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new De().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(De, e2, t2);
      }
      static $() {
        return ["RepoHistoryInitHandshakeResponse|1 status #0|2 histories #1*|3 copy_candidate_nonce 9?|4 copy_candidates 9*|5 error_message 9?", Oe, qe];
      }
    }
    var Oe = (0, i.QT)(n.proto3, a, "RepoHistoryInitHandshakeResponse.Status", [[0, "UNSPECIFIED"], [1, "FAILURE"], [2, "SUCCESS"], [3, "TEST_CANDIDATES"], [4, "NO_INDEXING"]], 1);
    class Ne extends c {
      constructor(e2) {
        super(), this.historyId = "", this.pullRequests = [], this.ignoreCommits = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ne().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ne().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ne().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ne, e2, t2);
      }
      static $() {
        return ["RepoHistorySyncOneRequest|1 history_id 9|2 pull_requests #0*|3 ignore_commits 13*", Je];
      }
    }
    class Fe extends c {
      constructor(e2) {
        super(), this.status = Ue.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fe, e2, t2);
      }
      static $() {
        return ["RepoHistorySyncOneResponse|1 status #0", Ue];
      }
    }
    var Ue = (0, i.QT)(n.proto3, a, "RepoHistorySyncOneResponse.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"], [3, "PARTIAL_SUCCESS"], [4, "NOT_INDEXING"]], 1);
    class Le extends c {
      constructor(e2) {
        super(), this.syncedHistories = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Le().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Le().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Le().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Le, e2, t2);
      }
      static $() {
        return ["RepoHistorySyncCompleteRequest|1 synced_histories #0*", Qe];
      }
    }
    var $e = (0, i.QT)(n.proto3, a, "RepoHistorySyncCompleteRequest.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"], [3, "TOTAL_FAILURE"], [4, "INTERRUPTED"]], 1);
    class Qe extends c {
      constructor(e2) {
        super(), this.historyId = "", this.status = $e.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qe, e2, t2);
      }
      static $() {
        return ["RepoHistorySyncCompleteRequest.SyncedHistory|1 history_id 9|2 status #0|3 last_indexed_commit 9?|4 last_indexed_commit_secret 9?|5 last_indexed_commit_generation 13?", $e];
      }
    }
    class je extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new je().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new je().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new je().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(je, e2, t2);
      }
      static $() {
        return ["RepoHistorySyncCompleteResponse"];
      }
    }
    class Ge extends c {
      constructor(e2) {
        super(), this.query = "", this.topK = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ge().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ge().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ge().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ge, e2, t2);
      }
      static $() {
        return ["SearchPRHistoryRequest|1 repository #0|2 query 9|3 top_k 5", Se];
      }
    }
    class He extends c {
      constructor(e2) {
        super(), this.filePath = "", this.startLineNumberZeroIndexed = 0, this.endLineNumberZeroIndexedExclusive = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new He().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new He().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new He().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(He, e2, t2);
      }
      static $() {
        return ["PRDiffChunkPointer|1 file_path 9|2 start_line_number_zero_indexed 5|3 end_line_number_zero_indexed_exclusive 5"];
      }
    }
    class ze extends c {
      constructor(e2) {
        super(), this.results = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ze().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ze().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ze().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ze, e2, t2);
      }
      static $() {
        return ["SearchPRHistoryResponse|1 results #0*|2 git_height 13?", We];
      }
    }
    class We extends c {
      constructor(e2) {
        super(), this.commitHash = "", this.score = 0, this.diffChunks = [], this.changedFiles = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new We().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new We().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new We().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(We, e2, t2);
      }
      static $() {
        return ["SearchPRHistoryResponse.PRSearchResult|1 commit_hash 9|2 score 2|3 diff_chunks #0*|4 title 9?|5 summary 9?|6 pr_number 13?|7 author 9?|8 date 9?|9 changed_files 9*", He];
      }
    }
    class Ve extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ve().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ve().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ve().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ve, e2, t2);
      }
      static $() {
        return ["RemoveRepoHistoryRequest|1 repository #0", Se];
      }
    }
    class Ke extends c {
      constructor(e2) {
        super(), this.status = Ye.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ke().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ke().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ke().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ke, e2, t2);
      }
      static $() {
        return ["RemoveRepoHistoryResponse|1 status #0", Ye];
      }
    }
    var Ye = (0, i.QT)(n.proto3, a, "RemoveRepoHistoryResponse.Status", [[0, "UNSPECIFIED"], [1, "NOT_FOUND"], [2, "NOT_AUTHORIZED"], [3, "PARTIAL_SUCCESS"], [4, "SUCCESS"]], 1);
    class Ze extends c {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ze().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ze().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ze().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ze, e2, t2);
      }
      static $() {
        return ["GetPRIndexingStatusRequest|1 repository #0", Se];
      }
    }
    class Xe extends c {
      constructor(e2) {
        super(), this.status = et.UNSPECIFIED, this.syncPercentage = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xe, e2, t2);
      }
      static $() {
        return ["GetPRIndexingStatusResponse|1 status #0|2 sync_percentage 2|3 last_indexed_commit 9?|4 last_indexed_generation 13?|5 total_commits 13?|6 indexing_rate 2?|7 last_updated_timestamp 3?|8 index_version 13?", et];
      }
    }
    var et = (0, i.QT)(n.proto3, a, "GetPRIndexingStatusResponse.Status", [[0, "UNSPECIFIED"], [1, "EMPTY"], [2, "SYNCING"], [3, "SYNCED"], [4, "PARTIAL"]], 1);
  }