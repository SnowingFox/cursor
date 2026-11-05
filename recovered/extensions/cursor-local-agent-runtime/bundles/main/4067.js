// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 4067 range:35092..43193
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4067: (e, t, r) => {
    "use strict";
    r.d(t, { PT: () => g, yX: () => y, bq: () => f, xq: () => m, bn: () => w, se: () => p, bD: () => S, AY: () => v });
    var n = r(36038), o = r(67918), s = r(8592);
    const i = "aiserver.v1.";
    class a extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return i;
      }
    }
    class l extends a {
      constructor(e2) {
        super(), this.indexId = "", this.id = "", this.summary = "", n.proto3.util.initPartial(e2, this);
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
        return ["ReflectionData|1 index_id 9|2 id 9|3 summary 9"];
      }
    }
    class c extends a {
      constructor(e2) {
        super(), this.nodeId = "", this.stage = "", this.content = "", this.summary = "", n.proto3.util.initPartial(e2, this);
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
        return ["IndexFileData.NodeData|1 node_id 9|2 stage 9|3 content 9|4 summary 9"];
      }
    }
    n.proto3;
    const u = "aiserver.v1.";
    class d extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return u;
      }
    }
    n.proto3, n.proto3, n.proto3;
    var p = (0, s.QT)(n.proto3, u, "RerankerAlgorithm", [[0, "UNSPECIFIED"], [1, "LULEA"], [2, "UMEA"], [3, "NONE"], [4, "LLAMA"], [5, "STARCODER_V1"], [6, "GPT_3_5_LOGPROBS"], [7, "LULEA_HAIKU"], [8, "COHERE"], [9, "VOYAGE"], [10, "VOYAGE_EMBEDS"], [11, "IDENTITY"], [12, "ADA_EMBEDS"]], 1), h = (0, s.QT)(n.proto3, u, "DatabaseProvider", [[0, "UNSPECIFIED"], [1, "AURORA"], [2, "PLANETSCALE"]], 1), m = (0, s.QT)(n.proto3, u, "RechunkerChoice", [[0, "RECHUNKER_CHOICE_UNSPECIFIED"], [1, "RECHUNKER_CHOICE_IDENTITY"], [2, "RECHUNKER_CHOICE_600_TOKS"], [3, "RECHUNKER_CHOICE_2400_TOKS"], [4, "RECHUNKER_CHOICE_4000_TOKS"]]);
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    class f extends d {
      constructor(e2) {
        super(), this.ownerAuthId = "", this.accessToken = "", this.userRepoOwner = "", this.userRepoName = "", n.proto3.util.initPartial(e2, this);
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
        return ["QueryOnlyRepoAccess|1 owner_auth_id 9|2 access_token 9|3 user_repo_owner 9|4 user_repo_name 9"];
      }
    }
    class g extends d {
      constructor(e2) {
        super(), this.score = 0, n.proto3.util.initPartial(e2, this);
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
        return ["CodeResult|1 code_block #0|2 score 2", o.NG];
      }
    }
    class y extends d {
      constructor(e2) {
        super(), this.score = 0, n.proto3.util.initPartial(e2, this);
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
        return ["FileResult|1 file #0|2 score 2", o.ZH];
      }
    }
    class v extends d {
      constructor(e2) {
        super(), this.codeResults = [], n.proto3.util.initPartial(e2, this);
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
        return ["SearchRepositoryResponse|1 code_results #0*", g];
      }
    }
    n.proto3;
    n.proto3;
    n.proto3;
    class w extends d {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.remoteUrls = [], this.remoteNames = [], this.repoName = "", this.repoOwner = "", this.isTracked = false, this.isLocal = false, this.workspaceUri = "", n.proto3.util.initPartial(e2, this);
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
        return ["RepositoryInfo|1 relative_workspace_path 9|2 remote_urls 9*|3 remote_names 9*|4 repo_name 9|5 repo_owner 9|6 is_tracked 8|7 is_local 8|8 num_files 5?|9 orthogonal_transform_seed 1?|10 preferred_embedding_model #0?|11 workspace_uri 9|12 preferred_db_provider #1?", o.Nj, h];
      }
    }
    class b extends d {
      constructor(e2) {
        super(), this.score = 0, n.proto3.util.initPartial(e2, this);
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
        return ["NodeResult|1 node #0|2 file #1|3 score 2", c, o.ZH];
      }
    }
    class _ extends d {
      constructor(e2) {
        super(), this.score = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ReflectionResult|1 reflection #0|2 score 2", l];
      }
    }
    class S extends d {
      constructor(e2) {
        super(), this.topNodes = [], this.reflections = [], this.indexId = "", n.proto3.util.initPartial(e2, this);
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
        return ["SearchRepositoryDeepContextResponse|1 top_nodes #0*|2 reflections #1*|3 index_id 9", b, _];
      }
    }
    n.proto3, n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
    n.proto3;
  }