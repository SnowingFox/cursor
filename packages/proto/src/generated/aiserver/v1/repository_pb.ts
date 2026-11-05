// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/aiserver/v1/repository_pb.js" range:2278440..2283742
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "./utils_pb";
import * as __dep2 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1,
  i = __dep2;
class o extends i.HL {
  static get runtime() {
    return (0, i.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "aiserver.v1.";
  }
}
class a extends o {
  constructor(t) {
    super(), this.indexId = "", this.id = "", this.summary = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new a().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new a().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new a().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(a, t, r);
  }
  static $() {
    return ["ReflectionData|1 index_id 9|2 id 9|3 summary 9"];
  }
}
class u extends o {
  constructor(t) {
    super(), this.nodeId = "", this.stage = "", this.content = "", this.summary = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new u().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new u().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new u().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(u, t, r);
  }
  static $() {
    return ["IndexFileData.NodeData|1 node_id 9|2 stage 9|3 content 9|4 summary 9"];
  }
}
n.proto3;
const c = "aiserver.v1.";
class l extends i.HL {
  static get runtime() {
    return (0, i.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return c;
  }
}
n.proto3, n.proto3, n.proto3;
var m = (0, i.QT)(n.proto3, c, "RerankerAlgorithm", [[0, "UNSPECIFIED"], [1, "LULEA"], [2, "UMEA"], [3, "NONE"], [4, "LLAMA"], [5, "STARCODER_V1"], [6, "GPT_3_5_LOGPROBS"], [7, "LULEA_HAIKU"], [8, "COHERE"], [9, "VOYAGE"], [10, "VOYAGE_EMBEDS"], [11, "IDENTITY"], [12, "ADA_EMBEDS"]], 1),
  d = (0, i.QT)(n.proto3, c, "DatabaseProvider", [[0, "UNSPECIFIED"], [1, "AURORA"], [2, "PLANETSCALE"]], 1),
  p = (0, i.QT)(n.proto3, c, "RechunkerChoice", [[0, "RECHUNKER_CHOICE_UNSPECIFIED"], [1, "RECHUNKER_CHOICE_IDENTITY"], [2, "RECHUNKER_CHOICE_600_TOKS"], [3, "RECHUNKER_CHOICE_2400_TOKS"], [4, "RECHUNKER_CHOICE_4000_TOKS"]]);
n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3;
class f extends l {
  constructor(t) {
    super(), this.ownerAuthId = "", this.accessToken = "", this.userRepoOwner = "", this.userRepoName = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new f().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new f().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new f().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(f, t, r);
  }
  static $() {
    return ["QueryOnlyRepoAccess|1 owner_auth_id 9|2 access_token 9|3 user_repo_owner 9|4 user_repo_name 9"];
  }
}
class h extends l {
  constructor(t) {
    super(), this.score = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new h().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new h().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new h().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(h, t, r);
  }
  static $() {
    return ["CodeResult|1 code_block #0|2 score 2", s.NG];
  }
}
class g extends l {
  constructor(t) {
    super(), this.score = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new g().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new g().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new g().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(g, t, r);
  }
  static $() {
    return ["FileResult|1 file #0|2 score 2", s.ZH];
  }
}
n.proto3, n.proto3, n.proto3;
class _ extends l {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.remoteUrls = [], this.remoteNames = [], this.repoName = "", this.repoOwner = "", this.isTracked = !1, this.isLocal = !1, this.workspaceUri = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_, t, r);
  }
  static $() {
    return ["RepositoryInfo|1 relative_workspace_path 9|2 remote_urls 9*|3 remote_names 9*|4 repo_name 9|5 repo_owner 9|6 is_tracked 8|7 is_local 8|8 num_files 5?|9 orthogonal_transform_seed 1?|10 preferred_embedding_model #0?|11 workspace_uri 9|12 preferred_db_provider #1?", s.Nj, d];
  }
}
class w extends l {
  constructor(t) {
    super(), this.score = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new w().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new w().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new w().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(w, t, r);
  }
  static $() {
    return ["NodeResult|1 node #0|2 file #1|3 score 2", u, s.ZH];
  }
}
class y extends l {
  constructor(t) {
    super(), this.score = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new y().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new y().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new y().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(y, t, r);
  }
  static $() {
    return ["ReflectionResult|1 reflection #0|2 score 2", a];
  }
}
class J extends l {
  constructor(t) {
    super(), this.topNodes = [], this.reflections = [], this.indexId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new J().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new J().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new J().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(J, t, r);
  }
  static $() {
    return ["SearchRepositoryDeepContextResponse|1 top_nodes #0*|2 reflections #1*|3 index_id 9", w, y];
  }
}
n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3, n.proto3;
export { h as PT, g as yX, f as bq, p as xq, _ as bn, m as se, J as bD };
