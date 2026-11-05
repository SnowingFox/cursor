// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1563 range:528979..584458
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1563: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { $C: () => xt, A8: () => lt, AY: () => gt, A_: () => ct, Ad: () => rt, B6: () => O, BO: () => kt, CR: () => bt, DS: () => K, Fp: () => Mt, GB: () => Ct, GX: () => Ht, L7: () => Qt, LO: () => vt, Lf: () => st, MD: () => _, P5: () => Dt, PT: () => pt, Ri: () => $, Ss: () => T, W$: () => dt, WS: () => Xt, XM: () => X, YH: () => Ft, bD: () => It, bn: () => Jt, bq: () => ft, do: () => v, eI: () => A, eh: () => ot, em: () => Zt, fP: () => z, fh: () => D, g$: () => Wt, hZ: () => tt, i$: () => at, ic: () => h, iq: () => nt, j1: () => At, jq: () => wt, jw: () => N, lm: () => et, lp: () => I, m1: () => Vt, p5: () => M, pD: () => it, qA: () => x, qO: () => y, rL: () => J, se: () => d, v0: () => S, wj: () => Gt, xq: () => p, yX: () => ht, yk: () => Yt });
    var n2 = r2(6038), s2 = r2(7918), i2 = r2(5035), o2 = r2(8592);
    const a = "aiserver.v1.";
    class u extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return a;
      }
    }
    var c = (0, o2.QT)(n2.proto3, a, "ChunkingStrategy", [[0, "UNSPECIFIED"], [1, "DEFAULT"]], 1), l = (0, o2.QT)(n2.proto3, a, "SimilarityMetricType", [[0, "UNSPECIFIED"], [1, "SIMHASH"]], 1), m = (0, o2.QT)(n2.proto3, a, "PathKeyHashType", [[0, "UNSPECIFIED"], [1, "SHA256"]], 1), d = (0, o2.QT)(n2.proto3, a, "RerankerAlgorithm", [[0, "UNSPECIFIED"], [1, "LULEA"], [2, "UMEA"], [3, "NONE"], [4, "LLAMA"], [5, "STARCODER_V1"], [6, "GPT_3_5_LOGPROBS"], [7, "LULEA_HAIKU"], [8, "COHERE"], [9, "VOYAGE"], [10, "VOYAGE_EMBEDS"], [11, "IDENTITY"], [12, "ADA_EMBEDS"]], 1), f = (0, o2.QT)(n2.proto3, a, "DatabaseProvider", [[0, "UNSPECIFIED"], [1, "AURORA"], [2, "PLANETSCALE"]], 1), p = (0, o2.QT)(n2.proto3, a, "RechunkerChoice", [[0, "RECHUNKER_CHOICE_UNSPECIFIED"], [1, "RECHUNKER_CHOICE_IDENTITY"], [2, "RECHUNKER_CHOICE_600_TOKS"], [3, "RECHUNKER_CHOICE_2400_TOKS"], [4, "RECHUNKER_CHOICE_4000_TOKS"]]);
    class h extends u {
      constructor(t3) {
        super(), this.readmes = [], this.topLevelRelativeWorkspacePaths = [], this.workspaceRootPath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetHighLevelFolderDescriptionRequest|1 readmes #0*|2 top_level_relative_workspace_paths 9*|4 workspace_root_path 9", g];
      }
    }
    class g extends u {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.contents = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetHighLevelFolderDescriptionRequest.Readme|1 relative_workspace_path 9|2 contents 9"];
      }
    }
    class A extends u {
      constructor(t3) {
        super(), this.description = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetHighLevelFolderDescriptionResponse|1 description 9"];
      }
    }
    class _ extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["EnsureIndexCreatedRequest|1 repository #0", Jt];
      }
    }
    class y extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["EnsureIndexCreatedResponse"];
      }
    }
    class w extends u {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.hashOfNode = "", n2.proto3.util.initPartial(t3, this);
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
        return ["PartialPathItem|1 relative_workspace_path 9|2 hash_of_node 9"];
      }
    }
    class S extends u {
      constructor(t3) {
        super(), this.rootHash = "", this.potentialLegacyRepoName = "", n2.proto3.util.initPartial(t3, this);
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
        return ["FastRepoInitHandshakeRequest|1 repository #0|2 root_hash 9|3 potential_legacy_repo_name 9", Jt];
      }
    }
    class J extends u {
      constructor(t3) {
        super(), this.status = B.UNSPECIFIED, this.repoName = "", n2.proto3.util.initPartial(t3, this);
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
        return ["FastRepoInitHandshakeResponse|1 status #0|2 repo_name 9", B];
      }
    }
    var B = (0, o2.QT)(n2.proto3, a, "FastRepoInitHandshakeResponse.Status", [[0, "UNSPECIFIED"], [1, "UP_TO_DATE"], [2, "OUT_OF_SYNC"], [3, "FAILURE"], [4, "EMPTY"]], 1);
    class E extends u {
      constructor(t3) {
        super(), this.encryptedRelativePath = "", this.hash = "", this.children = [], n2.proto3.util.initPartial(t3, this);
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
        return ["LocalCodebaseFileInfo|1 encrypted_relative_path 9|2 hash 9|3 children #0*|4 separator 9?", E];
      }
    }
    class I extends u {
      constructor(t3) {
        super(), this.rootHash = "", this.similarityMetricType = l.UNSPECIFIED, this.similarityMetric = [], this.pathKeyHash = "", this.pathKeyHashType = m.UNSPECIFIED, this.doCopy = false, this.pathKey = "", this.returnAfterBackgroundCopyStarted = false, n2.proto3.util.initPartial(t3, this);
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
        return ["FastRepoInitHandshakeV2Request|1 repository #0|2 root_hash 9|3 similarity_metric_type #1|4 similarity_metric 2*|5 path_key_hash 9|6 path_key_hash_type #2|7 do_copy 8|8 path_key 9|9 local_codebase_root_info #3|10 return_after_background_copy_started 8", Jt, l, m, E];
      }
    }
    class C extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["QueryOnlyRepositoryInfo|1 repository #0|2 query_only_repo_access #1", Jt, ft];
      }
    }
    class b extends u {
      constructor(t3) {
        super(), this.codebaseId = "", this.status = k.UNSPECIFIED, this.copyTaskHandle = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RepositoryCodebaseInfo|1 codebase_id 9|2 status #0|3 query_only_similar_repo #1|4 copy_task_handle 9", k, C];
      }
    }
    var k = (0, o2.QT)(n2.proto3, a, "RepositoryCodebaseInfo.Status", [[0, "UNSPECIFIED"], [1, "UP_TO_DATE"], [2, "OUT_OF_SYNC"], [3, "EMPTY"], [4, "EMPTY_WITH_COPY_AVAILABLE"], [5, "COPY_IN_PROGRESS"]], 1);
    class v extends u {
      constructor(t3) {
        super(), this.status = q.UNSPECIFIED, this.codebases = [], n2.proto3.util.initPartial(t3, this);
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
        return ["FastRepoInitHandshakeV2Response|1 status #0|2 codebases #1*", q, b];
      }
    }
    var q = (0, o2.QT)(n2.proto3, a, "FastRepoInitHandshakeV2Response.Status", [[0, "UNSPECIFIED"], [1, "FAILURE"], [2, "SUCCESS"]], 1);
    class R extends u {
      constructor(t3) {
        super(), this.codebaseId = "", this.status = P.UNSPECIFIED, this.similarityMetricType = l.UNSPECIFIED, this.similarityMetric = [], this.pathKeyHash = "", this.pathKeyHashType = m.UNSPECIFIED, this.failedUploadCount = 0, this.failedDeleteCount = 0, this.totalUploadCount = 0, this.totalDeleteCount = 0, this.failedSubtreeCount = 0, this.totalSubtreeCount = 0, this.hitIterationLimit = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RepositoryCodebaseSyncStatus|1 codebase_id 9|2 status #0|3 similarity_metric_type #1|4 similarity_metric 2*|5 path_key_hash 9|6 path_key_hash_type #2|7 failed_upload_count 5|8 failed_delete_count 5|9 total_upload_count 5|10 total_delete_count 5|11 failed_subtree_count 5|12 total_subtree_count 5|13 hit_iteration_limit 8", P, l, m];
      }
    }
    var P = (0, o2.QT)(n2.proto3, a, "RepositoryCodebaseSyncStatus.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"]], 1);
    class T extends u {
      constructor(t3) {
        super(), this.codebases = [], n2.proto3.util.initPartial(t3, this);
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
        return ["FastRepoSyncCompleteRequest|1 codebases #0*", R];
      }
    }
    class x extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["FastRepoSyncCompleteResponse"];
      }
    }
    class N extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["SyncMerkleSubtreeRequest|1 repository #0|2 local_partial_path #1", Jt, w];
      }
    }
    class D extends u {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["SyncMerkleSubtreeResponse|1 match 8 result|2 mismatch #0 result", U];
      }
    }
    class U extends u {
      constructor(t3) {
        super(), this.children = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SyncMerkleSubtreeResponse.Mismatch|1 children #0*", w];
      }
    }
    class Q extends u {
      constructor(t3) {
        super(), this.orthogonalTransformSeed = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ClientRepositoryInfo|1 orthogonal_transform_seed 1"];
      }
    }
    class M extends u {
      constructor(t3) {
        super(), this.codebaseId = "", this.localPartialPaths = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SyncMerkleSubtreeV2Request|1 client_repository_info #0|2 codebase_id 9|3 local_partial_path #1|4 local_partial_paths #1*", Q, w];
      }
    }
    class O extends u {
      constructor(t3) {
        super(), this.result = { case: void 0 }, this.results = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SyncMerkleSubtreeV2Response|1 match 8 result|2 mismatch #0 result|3 results #1*", F, L];
      }
    }
    class F extends u {
      constructor(t3) {
        super(), this.children = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SyncMerkleSubtreeV2Response.Mismatch|1 children #0*", w];
      }
    }
    class L extends u {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["SyncMerkleSubtreeV2Response.PartialPathResult|1 match 8 result|2 mismatch #0 result|3 response_size_limit_exceeded 8 result", F];
      }
    }
    class $ extends u {
      constructor(t3) {
        super(), this.partialPath = { case: void 0 }, this.ancestorSpline = [], this.updateType = G.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["FastUpdateFileRequest|1 repository #0|2 directory #1 partial_path|3 local_file #2 partial_path|4 ancestor_spline #1*|5 update_type #3", Jt, w, H, G];
      }
    }
    var G = (0, o2.QT)(n2.proto3, a, "FastUpdateFileRequest.UpdateType", [[0, "UNSPECIFIED"], [1, "ADD"], [2, "DELETE"], [3, "MODIFY"]], 1);
    class H extends u {
      constructor(t3) {
        super(), this.hash = "", this.unencryptedRelativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["FastUpdateFileRequest.LocalFile|1 file #0|2 hash 9|3 unencrypted_relative_workspace_path 9", s2.File];
      }
    }
    class K extends u {
      constructor(t3) {
        super(), this.status = V.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["FastUpdateFileResponse|1 status #0", V];
      }
    }
    var V = (0, o2.QT)(n2.proto3, a, "FastUpdateFileResponse.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"], [3, "EXPECTED_FAILURE"]], 1);
    class z extends u {
      constructor(t3) {
        super(), this.codebaseId = "", this.partialPath = { case: void 0 }, this.ancestorSpline = [], this.updateType = W.UNSPECIFIED, this.fileUpdates = [], n2.proto3.util.initPartial(t3, this);
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
        return ["FastUpdateFileV2Request|1 client_repository_info #0|2 codebase_id 9|3 directory #1 partial_path|4 local_file #2 partial_path|5 ancestor_spline #1*|6 update_type #3|7 file_updates #4*", Q, w, Y, W, j];
      }
    }
    var W = (0, o2.QT)(n2.proto3, a, "FastUpdateFileV2Request.UpdateType", [[0, "UNSPECIFIED"], [1, "ADD"], [2, "DELETE"], [3, "MODIFY"], [4, "BATCH"]], 1);
    class Y extends u {
      constructor(t3) {
        super(), this.hash = "", this.unencryptedRelativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["FastUpdateFileV2Request.LocalFile|1 file #0|2 hash 9|3 unencrypted_relative_workspace_path 9", s2.File];
      }
    }
    class j extends u {
      constructor(t3) {
        super(), this.partialPath = { case: void 0 }, this.ancestorSpline = [], this.updateType = W.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["FastUpdateFileV2Request.FileUpdate|1 directory #0 partial_path|2 local_file #1 partial_path|3 ancestor_spline #0*|4 update_type #2", w, Y, W];
      }
    }
    class X extends u {
      constructor(t3) {
        super(), this.status = Z.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["FastUpdateFileV2Response|1 status #0", Z];
      }
    }
    var Z = (0, o2.QT)(n2.proto3, a, "FastUpdateFileV2Response.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"], [3, "EXPECTED_FAILURE"]], 1);
    class tt extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetUploadLimitsRequest|1 repository #0?", Jt];
      }
    }
    class et extends u {
      constructor(t3) {
        super(), this.softLimit = 0, this.hardLimit = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["GetUploadLimitsResponse|1 soft_limit 5|2 hard_limit 5"];
      }
    }
    class rt extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetNumFilesToSendRequest|1 repository #0", Jt];
      }
    }
    class nt extends u {
      constructor(t3) {
        super(), this.numFiles = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["GetNumFilesToSendResponse|1 num_files 5"];
      }
    }
    class st extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetAvailableChunkingStrategiesRequest|1 repository #0", Jt];
      }
    }
    class it extends u {
      constructor(t3) {
        super(), this.chunkingStrategies = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GetAvailableChunkingStrategiesResponse|1 chunking_strategies #0*", c];
      }
    }
    class ot extends u {
      constructor(t3) {
        super(), this.texts = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GetEmbeddingsRequest|1 texts 9*"];
      }
    }
    class at extends u {
      constructor(t3) {
        super(), this.embeddings = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GetEmbeddingsResponse|2 embeddings #0*", ut];
      }
    }
    class ut extends u {
      constructor(t3) {
        super(), this.embedding = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GetEmbeddingsResponse.Embedding|1 embedding 2*"];
      }
    }
    n2.proto3;
    n2.proto3;
    n2.proto3;
    n2.proto3;
    n2.proto3;
    n2.proto3;
    n2.proto3;
    n2.proto3;
    class ct extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RemoveRepositoryRequest|1 repository #0", Jt];
      }
    }
    class lt extends u {
      constructor(t3) {
        super(), this.status = mt.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["RemoveRepositoryResponse|1 status #0", mt];
      }
    }
    var mt = (0, o2.QT)(n2.proto3, a, "RemoveRepositoryResponse.Status", [[0, "UNSPECIFIED"], [1, "NOT_FOUND"], [2, "NOT_AUTHORIZED"], [3, "STARTED"], [4, "SUCCESS"]], 1);
    n2.proto3;
    class dt extends u {
      constructor(t3) {
        super(), this.query = "", this.topK = 0, this.rerank = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dt, t3, e3);
      }
      static $() {
        return ["SearchRepositoryRequest|1 query 9|2 repository #0|3 top_k 5|4 model_details #1|5 rerank 8|6 context_cache_request 8?|7 glob_filter 9?|8 not_glob_filter 9?|9 race_n_requests 5?|10 query_only_repo_access #2", Jt, s2.ModelDetails, ft];
      }
    }
    class ft extends u {
      constructor(t3) {
        super(), this.ownerAuthId = "", this.accessToken = "", this.userRepoOwner = "", this.userRepoName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ft().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ft().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ft().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ft, t3, e3);
      }
      static $() {
        return ["QueryOnlyRepoAccess|1 owner_auth_id 9|2 access_token 9|3 user_repo_owner 9|4 user_repo_name 9"];
      }
    }
    class pt extends u {
      constructor(t3) {
        super(), this.score = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pt, t3, e3);
      }
      static $() {
        return ["CodeResult|1 code_block #0|2 score 2", s2.CodeBlock];
      }
    }
    class ht extends u {
      constructor(t3) {
        super(), this.score = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ht().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ht().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ht().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ht, t3, e3);
      }
      static $() {
        return ["FileResult|1 file #0|2 score 2", s2.File];
      }
    }
    class gt extends u {
      constructor(t3) {
        super(), this.codeResults = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gt, t3, e3);
      }
      static $() {
        return ["SearchRepositoryResponse|1 code_results #0*", pt];
      }
    }
    class At extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new At().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new At().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new At().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(At, t3, e3);
      }
      static $() {
        return ["SemSearchRequest|1 request #0", dt];
      }
    }
    class _t extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _t().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _t().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _t().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_t, t3, e3);
      }
      static $() {
        return ["CodeResultWithClassificationInfo|1 code_result #0|2 line_number_classification #1?", pt, yt];
      }
    }
    class yt extends u {
      constructor(t3) {
        super(), this.queryComputedFor = "", this.matchedStrings = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yt, t3, e3);
      }
      static $() {
        return ["CodeResultWithClassificationInfo.LineNumberClassification|1 detailed_line #0|2 query_computed_for 9|3 matched_strings 9*|4 highlight_range #1", s2.DetailedLine, s2.SimpleRange];
      }
    }
    class wt extends u {
      constructor(t3) {
        super(), this.codeResults = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wt, t3, e3);
      }
      static $() {
        return ["SemSearchResponse|1 response #0|2 metadata #1?|3 code_results #2*", gt, St, _t];
      }
    }
    class St extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new St().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new St().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new St().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(St, t3, e3);
      }
      static $() {
        return ["SemSearchResponse.SemSearchMetadata|1 query_embedding_model 9?|2 server_side_latency_ms 5?|3 embed_latency_ms 5?|4 knn_latency_ms 5?"];
      }
    }
    n2.proto3;
    n2.proto3;
    n2.proto3;
    class Jt extends u {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.remoteUrls = [], this.remoteNames = [], this.repoName = "", this.repoOwner = "", this.isTracked = false, this.isLocal = false, this.workspaceUri = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jt, t3, e3);
      }
      static $() {
        return ["RepositoryInfo|1 relative_workspace_path 9|2 remote_urls 9*|3 remote_names 9*|4 repo_name 9|5 repo_owner 9|6 is_tracked 8|7 is_local 8|8 num_files 5?|9 orthogonal_transform_seed 1?|10 preferred_embedding_model #0?|11 workspace_uri 9|12 preferred_db_provider #1?", s2.EmbeddingModel, f];
      }
    }
    class Bt extends u {
      constructor(t3) {
        super(), this.score = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bt, t3, e3);
      }
      static $() {
        return ["NodeResult|1 node #0|2 file #1|3 score 2", i2.qD, s2.File];
      }
    }
    class Et extends u {
      constructor(t3) {
        super(), this.score = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Et().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Et().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Et().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Et, t3, e3);
      }
      static $() {
        return ["ReflectionResult|1 reflection #0|2 score 2", i2.W2];
      }
    }
    class It extends u {
      constructor(t3) {
        super(), this.topNodes = [], this.reflections = [], this.indexId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new It().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new It().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new It().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(It, t3, e3);
      }
      static $() {
        return ["SearchRepositoryDeepContextResponse|1 top_nodes #0*|2 reflections #1*|3 index_id 9", Bt, Et];
      }
    }
    class Ct extends u {
      constructor(t3) {
        super(), this.query = "", this.codeResults = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ct().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ct().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ct().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ct, t3, e3);
      }
      static $() {
        return ["GetLineNumberClassificationsRequest|1 query 9|2 code_results #0*", pt];
      }
    }
    class bt extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bt, t3, e3);
      }
      static $() {
        return ["GetLineNumberClassificationsResponse|1 classified_result #0", _t];
      }
    }
    class kt extends u {
      constructor(t3) {
        super(), this.codebaseId = "", this.copyTaskHandle = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kt, t3, e3);
      }
      static $() {
        return ["GetCopyStatusRequest|1 codebase_id 9|2 copy_task_handle 9"];
      }
    }
    class vt extends u {
      constructor(t3) {
        super(), this.phase = qt.UNSPECIFIED, this.percentDone = 0, this.errorMessage = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vt, t3, e3);
      }
      static $() {
        return ["GetCopyStatusResponse|1 phase #0|2 percent_done 2|3 error_message 9|4 completed_status #1?", qt, Rt];
      }
    }
    var qt = (0, o2.QT)(n2.proto3, a, "GetCopyStatusResponse.Phase", [[0, "UNSPECIFIED"], [1, "INITIALIZING"], [2, "COPYING"], [3, "COMPLETED"], [4, "CREATING_SEARCH_FILTERS"], [5, "COPYING_SEARCH_STATE"], [6, "COPYING_TREE_STATE"], [7, "SYNCING_COPY"]], 1), Rt = (0, o2.QT)(n2.proto3, a, "GetCopyStatusResponse.CompletedStatus", [[0, "UNSPECIFIED"], [1, "UP_TO_DATE"], [2, "OUT_OF_SYNC"], [3, "FAILURE"]], 1);
    class Pt extends u {
      constructor(t3) {
        super(), this.path = "", this.diff = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pt, t3, e3);
      }
      static $() {
        return ["IndexedFile|1 path 9|2 diff 9*"];
      }
    }
    class Tt extends u {
      constructor(t3) {
        super(), this.prNumber = 0, this.sha = "", this.message = "", this.changedFiles = [], this.generation = 0, this.commitSecret = "", this.unixTimestamp = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tt, t3, e3);
      }
      static $() {
        return ["IndexedPullRequest|1 pr_number 13|2 sha 9|3 message 9|4 changed_files #0*|5 generation 13|6 commit_secret 9|7 unix_timestamp 3|8 title 9?|9 author 9?", Pt];
      }
    }
    class xt extends u {
      constructor(t3) {
        super(), this.origin = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xt, t3, e3);
      }
      static $() {
        return ["RepoHistoryInitHandshakeRequest|1 repository #0|2 origin 9|3 test_origin_commit 9?|4 test_origin_commit_secret 9?|5 send_copy_candidates 8?", Jt];
      }
    }
    class Nt extends u {
      constructor(t3) {
        super(), this.historyId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nt, t3, e3);
      }
      static $() {
        return ["RepoHistoryInfo|1 history_id 9|2 branch_name 9?|3 last_indexed_commit 9?|4 last_indexed_commit_generation 13?|5 sync_bitmap 12?"];
      }
    }
    class Dt extends u {
      constructor(t3) {
        super(), this.status = Ut.UNSPECIFIED, this.histories = [], this.copyCandidates = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dt, t3, e3);
      }
      static $() {
        return ["RepoHistoryInitHandshakeResponse|1 status #0|2 histories #1*|3 copy_candidate_nonce 9?|4 copy_candidates 9*|5 error_message 9?", Ut, Nt];
      }
    }
    var Ut = (0, o2.QT)(n2.proto3, a, "RepoHistoryInitHandshakeResponse.Status", [[0, "UNSPECIFIED"], [1, "FAILURE"], [2, "SUCCESS"], [3, "TEST_CANDIDATES"], [4, "NO_INDEXING"]], 1);
    class Qt extends u {
      constructor(t3) {
        super(), this.historyId = "", this.pullRequests = [], this.ignoreCommits = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qt, t3, e3);
      }
      static $() {
        return ["RepoHistorySyncOneRequest|1 history_id 9|2 pull_requests #0*|3 ignore_commits 13*", Tt];
      }
    }
    class Mt extends u {
      constructor(t3) {
        super(), this.status = Ot.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mt, t3, e3);
      }
      static $() {
        return ["RepoHistorySyncOneResponse|1 status #0", Ot];
      }
    }
    var Ot = (0, o2.QT)(n2.proto3, a, "RepoHistorySyncOneResponse.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"], [3, "PARTIAL_SUCCESS"], [4, "NOT_INDEXING"]], 1);
    class Ft extends u {
      constructor(t3) {
        super(), this.syncedHistories = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ft().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ft().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ft().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ft, t3, e3);
      }
      static $() {
        return ["RepoHistorySyncCompleteRequest|1 synced_histories #0*", $t];
      }
    }
    var Lt = (0, o2.QT)(n2.proto3, a, "RepoHistorySyncCompleteRequest.Status", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "FAILURE"], [3, "TOTAL_FAILURE"], [4, "INTERRUPTED"]], 1);
    class $t extends u {
      constructor(t3) {
        super(), this.historyId = "", this.status = Lt.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $t().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $t().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $t().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($t, t3, e3);
      }
      static $() {
        return ["RepoHistorySyncCompleteRequest.SyncedHistory|1 history_id 9|2 status #0|3 last_indexed_commit 9?|4 last_indexed_commit_secret 9?|5 last_indexed_commit_generation 13?", Lt];
      }
    }
    class Gt extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gt, t3, e3);
      }
      static $() {
        return ["RepoHistorySyncCompleteResponse"];
      }
    }
    class Ht extends u {
      constructor(t3) {
        super(), this.query = "", this.topK = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ht().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ht().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ht().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ht, t3, e3);
      }
      static $() {
        return ["SearchPRHistoryRequest|1 repository #0|2 query 9|3 top_k 5", Jt];
      }
    }
    class Kt extends u {
      constructor(t3) {
        super(), this.filePath = "", this.startLineNumberZeroIndexed = 0, this.endLineNumberZeroIndexedExclusive = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kt, t3, e3);
      }
      static $() {
        return ["PRDiffChunkPointer|1 file_path 9|2 start_line_number_zero_indexed 5|3 end_line_number_zero_indexed_exclusive 5"];
      }
    }
    class Vt extends u {
      constructor(t3) {
        super(), this.results = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vt, t3, e3);
      }
      static $() {
        return ["SearchPRHistoryResponse|1 results #0*|2 git_height 13?", zt];
      }
    }
    class zt extends u {
      constructor(t3) {
        super(), this.commitHash = "", this.score = 0, this.diffChunks = [], this.changedFiles = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zt, t3, e3);
      }
      static $() {
        return ["SearchPRHistoryResponse.PRSearchResult|1 commit_hash 9|2 score 2|3 diff_chunks #0*|4 title 9?|5 summary 9?|6 pr_number 13?|7 author 9?|8 date 9?|9 changed_files 9*", Kt];
      }
    }
    class Wt extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wt, t3, e3);
      }
      static $() {
        return ["RemoveRepoHistoryRequest|1 repository #0", Jt];
      }
    }
    class Yt extends u {
      constructor(t3) {
        super(), this.status = jt.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yt, t3, e3);
      }
      static $() {
        return ["RemoveRepoHistoryResponse|1 status #0", jt];
      }
    }
    var jt = (0, o2.QT)(n2.proto3, a, "RemoveRepoHistoryResponse.Status", [[0, "UNSPECIFIED"], [1, "NOT_FOUND"], [2, "NOT_AUTHORIZED"], [3, "PARTIAL_SUCCESS"], [4, "SUCCESS"]], 1);
    class Xt extends u {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xt, t3, e3);
      }
      static $() {
        return ["GetPRIndexingStatusRequest|1 repository #0", Jt];
      }
    }
    class Zt extends u {
      constructor(t3) {
        super(), this.status = te.UNSPECIFIED, this.syncPercentage = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zt, t3, e3);
      }
      static $() {
        return ["GetPRIndexingStatusResponse|1 status #0|2 sync_percentage 2|3 last_indexed_commit 9?|4 last_indexed_generation 13?|5 total_commits 13?|6 indexing_rate 2?|7 last_updated_timestamp 3?|8 index_version 13?", te];
      }
    }
    var te = (0, o2.QT)(n2.proto3, a, "GetPRIndexingStatusResponse.Status", [[0, "UNSPECIFIED"], [1, "EMPTY"], [2, "SYNCING"], [3, "SYNCED"], [4, "PARTIAL"]], 1);
  }