// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/aiserver/v1/dashboard_connect.js" range:954367..1072455
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "./dashboard_pb";
import * as __dep1 from "@bufbuild/protobuf";
import * as __dep2 from "./unify_eligibility_pb";
import * as __dep3 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1,
  i = __dep2,
  o = __dep3;
class a extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", s.proto3);
  }
  static $p() {
    return "aiserver.v1.";
  }
}
class u extends a {
  constructor(t) {
    super(), this.subjectKey = "", this.score = 0, this.sampleCount = 0, s.proto3.util.initPartial(t, this);
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
    return s.proto3.util.equals(u, t, r);
  }
  static $() {
    return ["SubjectScore|1 subject_key 9|2 score 1|3 sample_count 1"];
  }
}
class c extends a {
  constructor(t) {
    super(), this.sourceWatermarkMs = s.protoInt64.zero, this.generatedAtMs = s.protoInt64.zero, this.expiresAtMs = s.protoInt64.zero, this.scores = [], s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new c().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new c().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new c().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(c, t, r);
  }
  static $() {
    return ["ProjectionScoreSet|1 source_watermark_ms 3|2 generated_at_ms 3|3 expires_at_ms 3|4 scores #0*", u];
  }
}
class l extends a {
  constructor(t) {
    super(), this.policyId = "", this.knownSnapshotVersion = s.protoInt64.zero, s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new l().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new l().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new l().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(l, t, r);
  }
  static $() {
    return ["GetProjectionSnapshotRequest|1 policy_id 9|2 known_snapshot_version 4"];
  }
}
class m extends a {
  constructor(t) {
    super(), this.policyId = "", this.policyVersion = 0, this.snapshotVersion = s.protoInt64.zero, this.notModified = !1, s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new m().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new m().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new m().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(m, t, r);
  }
  static $() {
    return ["GetProjectionSnapshotResponse|1 policy_id 9|2 policy_version 13|3 snapshot_version 4|4 team #0|5 not_modified 8", c];
  }
}
class d extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", s.proto3);
  }
  static $p() {
    return "aiserver.v1.";
  }
}
class p extends d {
  constructor(t) {
    super(), this.teamId = 0, s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new p().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new p().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new p().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(p, t, r);
  }
  static $() {
    return ["ListRepoLearnedRulesRequest|1 team_id 5"];
  }
}
class f extends d {
  constructor(t) {
    super(), this.enabled = !1, this.items = [], this.truncated = !1, this.hiddenCount = 0, this.live = !1, this.canEdit = !1, s.proto3.util.initPartial(t, this);
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
    return s.proto3.util.equals(f, t, r);
  }
  static $() {
    return ["ListRepoLearnedRulesResponse|1 enabled 8|2 items #0*|3 truncated 8|4 hidden_count 5|5 live 8|6 can_edit 8", h];
  }
}
class h extends d {
  constructor(t) {
    super(), this.id = "", this.repoId = "", this.gitRemoteOrigin = "", this.title = "", this.appliesWhen = "", this.content = "", this.kind = "", this.scopedPaths = [], this.status = "", this.importance = 0, s.proto3.util.initPartial(t, this);
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
    return s.proto3.util.equals(h, t, r);
  }
  static $() {
    return ["RepoLearnedRule|1 id 9|2 repo_id 9|3 git_remote_origin 9|4 title 9|5 applies_when 9|6 content 9|7 kind 9|8 item_class 9?|9 scoped_paths 9*|10 status 9|11 importance 5|12 would_promote_at #0|13 archived_at #0|14 archived_reason 9?|15 created_at #0|16 updated_at #0|17 source 9?", s.Timestamp];
  }
}
class g extends d {
  constructor(t) {
    super(), this.teamId = 0, this.id = "", s.proto3.util.initPartial(t, this);
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
    return s.proto3.util.equals(g, t, r);
  }
  static $() {
    return ["RemoveRepoLearnedRuleRequest|1 team_id 5|2 id 9"];
  }
}
class _ extends d {
  constructor(t) {
    super(), s.proto3.util.initPartial(t, this);
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
    return s.proto3.util.equals(_, t, r);
  }
  static $() {
    return ["RemoveRepoLearnedRuleResponse"];
  }
}
const w = "aiserver.v1.";
class y extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", s.proto3);
  }
  static $p() {
    return w;
  }
}
var J = (0, o.QT)(s.proto3, w, "RsiRecordKind", [[0, "UNSPECIFIED"], [1, "CONTROL"], [2, "BREAKER"], [3, "TICK"], [4, "META_RUN"], [5, "HARNESS"], [6, "JUDGEMENT"], [7, "SNAPSHOT"], [8, "DAY"], [9, "REPLY"]], 1),
  S = (0, o.QT)(s.proto3, w, "RsiLoop", [[0, "UNSPECIFIED"], [1, "TICK"], [2, "META"], [3, "FOLLOWUP"]], 1);
class q extends y {
  constructor(t) {
    super(), this.org = "", this.name = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new q().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new q().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new q().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(q, t, r);
  }
  static $() {
    return ["RsiRepo|1 org 9|2 name 9"];
  }
}
class B extends y {
  constructor(t) {
    super(), this.id = "", this.kind = J.UNSPECIFIED, this.recordKey = "", this.day = "", this.writerBcId = "", this.createdAt = "", this.updatedAt = "", this.bodyJson = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new B().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new B().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new B().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(B, t, r);
  }
  static $() {
    return ["RsiRecord|1 id 9|2 kind #0|3 record_key 9|4 day 9|5 writer_bc_id 9|6 created_at 9|7 updated_at 9|8 body_json 9", J];
  }
}
class b extends y {
  constructor(t) {
    super(), this.teamId = 0, this.kind = J.UNSPECIFIED, this.recordKey = "", this.day = "", this.bodyJson = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new b().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new b().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new b().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(b, t, r);
  }
  static $() {
    return ["AppendRsiRecordRequest|1 team_id 5|2 repo #0|3 kind #1|4 record_key 9|5 day 9|6 body_json 9", q, J];
  }
}
class P extends y {
  constructor(t) {
    super(), this.id = "", this.created = !1, s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new P().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new P().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new P().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(P, t, r);
  }
  static $() {
    return ["AppendRsiRecordResponse|1 id 9|2 created 8"];
  }
}
class I extends y {
  constructor(t) {
    super(), this.teamId = 0, this.kind = J.UNSPECIFIED, this.recordKey = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new I().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new I().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new I().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(I, t, r);
  }
  static $() {
    return ["GetRsiRecordRequest|1 team_id 5|2 repo #0|3 kind #1|4 record_key 9", q, J];
  }
}
class x extends y {
  constructor(t) {
    super(), s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new x().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new x().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new x().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(x, t, r);
  }
  static $() {
    return ["GetRsiRecordResponse|1 record #0", B];
  }
}
class v extends y {
  constructor(t) {
    super(), this.teamId = 0, this.kind = J.UNSPECIFIED, this.dayFrom = "", this.dayTo = "", this.pageSize = 0, this.pageToken = "", this.includeBody = !1, s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new v().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new v().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new v().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(v, t, r);
  }
  static $() {
    return ["ListRsiRecordsRequest|1 team_id 5|2 repo #0|3 kind #1|4 day_from 9|5 day_to 9|6 page_size 5|7 page_token 9|8 include_body 8", q, J];
  }
}
class R extends y {
  constructor(t) {
    super(), this.records = [], this.nextPageToken = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new R().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new R().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new R().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(R, t, r);
  }
  static $() {
    return ["ListRsiRecordsResponse|1 records #0*|2 next_page_token 9", B];
  }
}
class E extends y {
  constructor(t) {
    super(), this.teamId = 0, this.day = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new E().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new E().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new E().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(E, t, r);
  }
  static $() {
    return ["GetRsiSnapshotRequest|1 team_id 5|2 repo #0|3 day 9", q];
  }
}
class k extends y {
  constructor(t) {
    super(), this.snapshotJson = "", this.dayJson = "", this.snapshotUpdatedAt = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new k().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new k().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new k().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(k, t, r);
  }
  static $() {
    return ["GetRsiSnapshotResponse|1 snapshot_json 9|2 day_json 9|3 snapshot_updated_at 9"];
  }
}
class T extends y {
  constructor(t) {
    super(), this.workflowId = "", this.scheduledAt = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new T().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new T().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new T().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(T, t, r);
  }
  static $() {
    return ["RsiAdminScheduleRun|1 workflow_id 9|2 scheduled_at 9"];
  }
}
class C extends y {
  constructor(t) {
    super(), this.loop = S.UNSPECIFIED, this.scheduleId = "", this.launchEnabled = !1, this.scheduleFound = !1, this.paused = !1, this.note = "", this.nextFireTimes = [], this.recentRuns = [], s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new C().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new C().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new C().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(C, t, r);
  }
  static $() {
    return ["RsiAdminLoop|1 loop #0|2 schedule_id 9|3 launch_enabled 8|4 schedule_found 8|5 paused 8|6 note 9|7 next_fire_times 9*|8 recent_runs #1*", S, T];
  }
}
class U extends y {
  constructor(t) {
    super(), this.kind = J.UNSPECIFIED, this.recordKey = "", this.day = "", this.writerBcId = "", this.updatedAt = "", this.summaryJson = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new U().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new U().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new U().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(U, t, r);
  }
  static $() {
    return ["RsiAdminRecord|1 kind #0|2 record_key 9|3 day 9|4 writer_bc_id 9|5 updated_at 9|6 summary_json 9", J];
  }
}
class A extends y {
  constructor(t) {
    super(), s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new A().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new A().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new A().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(A, t, r);
  }
  static $() {
    return ["GetRsiAdminStatusInternalRequest"];
  }
}
class $ extends y {
  constructor(t) {
    super(), this.controlConfigJson = "", this.controlRefusal = "", this.controlError = "", this.loops = [], this.records = [], s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new $().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new $().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new $().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals($, t, r);
  }
  static $() {
    return ["GetRsiAdminStatusInternalResponse|1 repo #0|2 control_config_json 9|3 control_refusal 9|4 control_error 9|5 loops #1*|6 records #2*", q, C, U];
  }
}
class O extends y {
  constructor(t) {
    super(), this.loop = S.UNSPECIFIED, s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new O().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new O().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new O().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(O, t, r);
  }
  static $() {
    return ["RunRsiLoopNowInternalRequest|1 loop #0", S];
  }
}
class j extends y {
  constructor(t) {
    super(), this.workflowId = "", this.outcome = "", this.slot = "", this.bcId = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new j().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new j().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new j().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(j, t, r);
  }
  static $() {
    return ["RunRsiLoopNowInternalResponse|1 workflow_id 9|2 outcome 9|3 slot 9|4 bc_id 9"];
  }
}
class M extends y {
  constructor(t) {
    super(), this.loop = S.UNSPECIFIED, this.paused = !1, s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new M().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new M().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new M().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(M, t, r);
  }
  static $() {
    return ["SetRsiLoopPausedInternalRequest|1 loop #0|2 paused 8", S];
  }
}
class D extends y {
  constructor(t) {
    super(), s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new D().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new D().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new D().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(D, t, r);
  }
  static $() {
    return ["SetRsiLoopPausedInternalResponse|1 loop #0", C];
  }
}
class N extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", s.proto3);
  }
  static $p() {
    return "aiserver.v1.";
  }
}
class G extends N {
  constructor(t) {
    super(), this.teamId = 0, this.serviceAccountId = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new G().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new G().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new G().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(G, t, r);
  }
  static $() {
    return ["SuspendTeamServiceAccountRequest|1 team_id 5|2 service_account_id 9"];
  }
}
class L extends N {
  constructor(t) {
    super(), s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new L().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new L().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new L().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(L, t, r);
  }
  static $() {
    return ["SuspendTeamServiceAccountResponse"];
  }
}
class F extends N {
  constructor(t) {
    super(), this.teamId = 0, this.serviceAccountId = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new F().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new F().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new F().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(F, t, r);
  }
  static $() {
    return ["ResumeTeamServiceAccountRequest|1 team_id 5|2 service_account_id 9"];
  }
}
class K extends N {
  constructor(t) {
    super(), s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new K().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new K().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new K().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(K, t, r);
  }
  static $() {
    return ["ResumeTeamServiceAccountResponse"];
  }
}
const z = "aiserver.v1.";
class W extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", s.proto3);
  }
  static $p() {
    return z;
  }
}
var H = (0, o.QT)(s.proto3, z, "XaiSubscriptionPlan", [[0, "UNSPECIFIED"], [1, "XPASS_PLUS"], [2, "XPASS_PREMIUM"], [3, "XPASS_SUPER"], [4, "XPASS_ULTRA"]], 1);
class V extends W {
  constructor(t) {
    super(), this.cursorUserId = 0, this.plan = H.UNSPECIFIED, this.endsAt = "", this.idempotencyKey = "", this.grantedBy = "", this.reason = "", this.cursorTeamId = 0, this.seats = 0, s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new V().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new V().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new V().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(V, t, r);
  }
  static $() {
    return ["GrantSubscriptionRequest|1 cursor_user_id 5|2 plan #0|3 ends_at 9|4 idempotency_key 9|5 granted_by 9|6 reason 9|7 cursor_team_id 5|8 seats 5", H];
  }
}
class Q extends W {
  constructor(t) {
    super(), this.outcome = {
      case: void 0
    }, s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Q().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Q().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Q().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(Q, t, r);
  }
  static $() {
    return ["GrantSubscriptionResponse|1 result #0 outcome|2 error #1 outcome", X, Y];
  }
}
class X extends W {
  constructor(t) {
    super(), this.xaiUserId = "", this.subscriptionId = "", this.alreadyGranted = !1, s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new X().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new X().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new X().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(X, t, r);
  }
  static $() {
    return ["GrantSubscriptionResult|1 xai_user_id 9|2 subscription_id 9|3 already_granted 8"];
  }
}
class Y extends W {
  constructor(t) {
    super(), this.code = "", this.message = "", s.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Y().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Y().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Y().fromJsonString(t, r);
  }
  static equals(t, r) {
    return s.proto3.util.equals(Y, t, r);
  }
  static $() {
    return ["GrantSubscriptionError|1 code 9|2 message 9"];
  }
}
const Z = {
  typeName: "aiserver.v1.DashboardService",
  methods: {
    getTeams: {
      name: "GetTeams",
      I: n.EZo,
      O: n.m0q,
      kind: s.MethodKind.Unary
    },
    getMe: {
      name: "GetMe",
      I: n.Ewt,
      O: n.S7I,
      kind: s.MethodKind.Unary
    },
    getUnificationLegacySuperGrokPlan: {
      name: "GetUnificationLegacySuperGrokPlan",
      I: n.BLW,
      O: n.jpO,
      kind: s.MethodKind.Unary
    },
    getUnifyEligibility: {
      name: "GetUnifyEligibility",
      I: i.uo,
      O: i.uS,
      kind: s.MethodKind.Unary
    },
    getUnifyPendingMerge: {
      name: "GetUnifyPendingMerge",
      I: i.EV,
      O: i.IN,
      kind: s.MethodKind.Unary
    },
    getPostPurchaseMergeOffer: {
      name: "GetPostPurchaseMergeOffer",
      I: n.t4U,
      O: n.nyq,
      kind: s.MethodKind.Unary
    },
    getUnifyMergeNowBanner: {
      name: "GetUnifyMergeNowBanner",
      I: n.VUw,
      O: n.tFR,
      kind: s.MethodKind.Unary
    },
    getUnifyWaitlistStatus: {
      name: "GetUnifyWaitlistStatus",
      I: n.A4e,
      O: n.K78,
      kind: s.MethodKind.Unary
    },
    joinUnifyWaitlist: {
      name: "JoinUnifyWaitlist",
      I: n.I6O,
      O: n.ipl,
      kind: s.MethodKind.Unary
    },
    listCollapseCandidates: {
      name: "ListCollapseCandidates",
      I: n.jlg,
      O: n.xL7,
      kind: s.MethodKind.Unary
    },
    getUnificationIntent: {
      name: "GetUnificationIntent",
      I: n.jiH,
      O: n.fTn,
      kind: s.MethodKind.Unary
    },
    getStoreSubscriptionsToCancel: {
      name: "GetStoreSubscriptionsToCancel",
      I: n.I2q,
      O: n.YeL,
      kind: s.MethodKind.Unary
    },
    getIndividualUnificationPrepaidPreview: {
      name: "GetIndividualUnificationPrepaidPreview",
      I: n.XB2,
      O: n.FTr,
      kind: s.MethodKind.Unary
    },
    upsertUnificationIntent: {
      name: "UpsertUnificationIntent",
      I: n.M4l,
      O: n.M_7,
      kind: s.MethodKind.Unary
    },
    startUnifyGrokOAuth: {
      name: "StartUnifyGrokOAuth",
      I: n.VMe,
      O: n.BRO,
      kind: s.MethodKind.Unary
    },
    completeUnifyGrokOAuth: {
      name: "CompleteUnifyGrokOAuth",
      I: n.O78,
      O: n.azJ,
      kind: s.MethodKind.Unary
    },
    startTeamInviteGrokBind: {
      name: "StartTeamInviteGrokBind",
      I: n.QzW,
      O: n.clf,
      kind: s.MethodKind.Unary
    },
    getTeamInviteGrokBindStatus: {
      name: "GetTeamInviteGrokBindStatus",
      I: n.qJm,
      O: n.IIg,
      kind: s.MethodKind.Unary
    },
    parkUnifyGrokOAuthForAppSheet: {
      name: "ParkUnifyGrokOAuthForAppSheet",
      I: n.oZm,
      O: n.CKQ,
      kind: s.MethodKind.Unary
    },
    completeUnifyGrokOAuthFromAppSheet: {
      name: "CompleteUnifyGrokOAuthFromAppSheet",
      I: n.obd,
      O: n.azJ,
      kind: s.MethodKind.Unary
    },
    getUnifyAlreadyUnifiedMergeOffer: {
      name: "GetUnifyAlreadyUnifiedMergeOffer",
      I: n.P0R,
      O: n.ZSQ,
      kind: s.MethodKind.Unary
    },
    startUnifyAlreadyUnifiedMerge: {
      name: "StartUnifyAlreadyUnifiedMerge",
      I: n.Ptb,
      O: n.tdj,
      kind: s.MethodKind.Unary
    },
    cancelUnifyAlreadyUnifiedMerge: {
      name: "CancelUnifyAlreadyUnifiedMerge",
      I: n.f3h,
      O: n.Ftj,
      kind: s.MethodKind.Unary
    },
    startUnifyXLogin: {
      name: "StartUnifyXLogin",
      I: n.GMY,
      O: n.eQV,
      kind: s.MethodKind.Unary
    },
    completeUnifyXLogin: {
      name: "CompleteUnifyXLogin",
      I: n.VE0,
      O: n.hbz,
      kind: s.MethodKind.Unary
    },
    verifyUnifyXLoginEmail: {
      name: "VerifyUnifyXLoginEmail",
      I: n.D24,
      O: n.hbz,
      kind: s.MethodKind.Unary
    },
    parkUnifyXLoginForAppSheet: {
      name: "ParkUnifyXLoginForAppSheet",
      I: n.ziZ,
      O: n.TjJ,
      kind: s.MethodKind.Unary
    },
    completeUnifyXLoginFromAppSheet: {
      name: "CompleteUnifyXLoginFromAppSheet",
      I: n.ZP$,
      O: n.hbz,
      kind: s.MethodKind.Unary
    },
    startCollapseSourceProof: {
      name: "StartCollapseSourceProof",
      I: n.kQE,
      O: n.G$Z,
      kind: s.MethodKind.Unary
    },
    completeCollapseSourceProof: {
      name: "CompleteCollapseSourceProof",
      I: n.x$b,
      O: n.N_h,
      kind: s.MethodKind.Unary
    },
    revokeCollapseSourceProof: {
      name: "RevokeCollapseSourceProof",
      I: n.A8S,
      O: n.j8g,
      kind: s.MethodKind.Unary
    },
    provisionUnifyGrokAccount: {
      name: "ProvisionUnifyGrokAccount",
      I: n.I7k,
      O: n.O8p,
      kind: s.MethodKind.Unary
    },
    finalizeIndividualUnification: {
      name: "FinalizeIndividualUnification",
      I: n.mpn,
      O: n.UsM,
      kind: s.MethodKind.Unary
    },
    getUnifyCta: {
      name: "GetUnifyCta",
      I: n.bfP,
      O: n.Jvy,
      kind: s.MethodKind.Unary
    },
    startUnifiedCheckout: {
      name: "StartUnifiedCheckout",
      I: n.gR6,
      O: n.aIw,
      kind: s.MethodKind.Unary
    },
    resolveUnifiedTeamStart: {
      name: "ResolveUnifiedTeamStart",
      I: n.nQN,
      O: n.tWf,
      kind: s.MethodKind.Unary
    },
    startUnifiedTeamCheckout: {
      name: "StartUnifiedTeamCheckout",
      I: n.ToG,
      O: n.Hx0,
      kind: s.MethodKind.Unary
    },
    createGrokSignInLink: {
      name: "CreateGrokSignInLink",
      I: n.lqG,
      O: n.Ps6,
      kind: s.MethodKind.Unary
    },
    getOrCreateXaiUnificationIntent: {
      name: "GetOrCreateXaiUnificationIntent",
      I: n.GCT,
      O: n.CG1,
      kind: s.MethodKind.Unary
    },
    getXaiUnificationIntent: {
      name: "GetXaiUnificationIntent",
      I: n.djX,
      O: n.pww,
      kind: s.MethodKind.Unary
    },
    selectXaiUnificationCursorAccount: {
      name: "SelectXaiUnificationCursorAccount",
      I: n.gpr,
      O: n.QV4,
      kind: s.MethodKind.Unary
    },
    deselectXaiUnificationCursorAccount: {
      name: "DeselectXaiUnificationCursorAccount",
      I: n.dv2,
      O: n.dSk,
      kind: s.MethodKind.Unary
    },
    unlinkXaiUnificationCursorAccount: {
      name: "UnlinkXaiUnificationCursorAccount",
      I: n.LHn,
      O: n.tR5,
      kind: s.MethodKind.Unary
    },
    listXaiUnificationCollapseCandidates: {
      name: "ListXaiUnificationCollapseCandidates",
      I: n.K28,
      O: n.xL7,
      kind: s.MethodKind.Unary
    },
    startXaiUnificationCursorAccountProof: {
      name: "StartXaiUnificationCursorAccountProof",
      I: n.wQY,
      O: n.M8c,
      kind: s.MethodKind.Unary
    },
    completeXaiUnificationCursorAccountProof: {
      name: "CompleteXaiUnificationCursorAccountProof",
      I: n.lWf,
      O: n.Tm1,
      kind: s.MethodKind.Unary
    },
    advanceXaiUnificationIntent: {
      name: "AdvanceXaiUnificationIntent",
      I: n.Tnz,
      O: n.lVO,
      kind: s.MethodKind.Unary
    },
    startXaiCursorAccountLink: {
      name: "StartXaiCursorAccountLink",
      I: n.vRE,
      O: n.N7y,
      kind: s.MethodKind.Unary
    },
    completeXaiCursorAccountLink: {
      name: "CompleteXaiCursorAccountLink",
      I: n.UmB,
      O: n.Ie5,
      kind: s.MethodKind.Unary
    },
    peekXaiCursorAccountLinkContinuation: {
      name: "PeekXaiCursorAccountLinkContinuation",
      I: n.$MF,
      O: n.Z4D,
      kind: s.MethodKind.Unary
    },
    getAgenticOnboardingConfig: {
      name: "GetAgenticOnboardingConfig",
      I: n.CQB,
      O: n.WQf,
      kind: s.MethodKind.Unary
    },
    getUserOrganizations: {
      name: "GetUserOrganizations",
      I: n.V2d,
      O: n.NjL,
      kind: s.MethodKind.Unary
    },
    getTeamLinkedOrganization: {
      name: "GetTeamLinkedOrganization",
      I: n.Pxo,
      O: n.RR2,
      kind: s.MethodKind.Unary
    },
    setUserDefaultTeam: {
      name: "SetUserDefaultTeam",
      I: n.tol,
      O: n.b0C,
      kind: s.MethodKind.Unary
    },
    getOrganizationMembers: {
      name: "GetOrganizationMembers",
      I: n.cF_,
      O: n.SY0,
      kind: s.MethodKind.Unary
    },
    getOrganizationMember: {
      name: "GetOrganizationMember",
      I: n.lN3,
      O: n.vBH,
      kind: s.MethodKind.Unary
    },
    listOrganizationIdentityProviders: {
      name: "ListOrganizationIdentityProviders",
      I: n.rq6,
      O: n.dSe,
      kind: s.MethodKind.Unary
    },
    updateOrganizationIdentityProviderSsoSettings: {
      name: "UpdateOrganizationIdentityProviderSsoSettings",
      I: n.XwO,
      O: n.BDH,
      kind: s.MethodKind.Unary
    },
    setOrganizationIdentityProviderAllowDomainJoin: {
      name: "SetOrganizationIdentityProviderAllowDomainJoin",
      I: n.bpP,
      O: n.BDH,
      kind: s.MethodKind.Unary
    },
    addOrganizationIdentityProviderDomainJoin: {
      name: "AddOrganizationIdentityProviderDomainJoin",
      I: n.$n5,
      O: n.BDH,
      kind: s.MethodKind.Unary
    },
    removeOrganizationIdentityProviderDomainJoin: {
      name: "RemoveOrganizationIdentityProviderDomainJoin",
      I: n.SFI,
      O: n.BDH,
      kind: s.MethodKind.Unary
    },
    mergeOrganizationIdentityProvider: {
      name: "MergeOrganizationIdentityProvider",
      I: n.SAH,
      O: n.mOD,
      kind: s.MethodKind.Unary
    },
    preflightMergeOrganizationIdentityProvider: {
      name: "PreflightMergeOrganizationIdentityProvider",
      I: n.FMO,
      O: n.PUH,
      kind: s.MethodKind.Unary
    },
    getOrganizationMergeIdpRequest: {
      name: "GetOrganizationMergeIdpRequest",
      I: n.bXT,
      O: n.TQ7,
      kind: s.MethodKind.Unary
    },
    listOrganizationMergeIdpRequests: {
      name: "ListOrganizationMergeIdpRequests",
      I: n.Y1Y,
      O: n.G2s,
      kind: s.MethodKind.Unary
    },
    moveOrganizationMemberToTeam: {
      name: "MoveOrganizationMemberToTeam",
      I: n.kiI,
      O: n.gqE,
      kind: s.MethodKind.Unary
    },
    setOrganizationMemberTeams: {
      name: "SetOrganizationMemberTeams",
      I: n.NW8,
      O: n.tP0,
      kind: s.MethodKind.Unary
    },
    removeOrganizationMember: {
      name: "RemoveOrganizationMember",
      I: n.rLu,
      O: n.Puo,
      kind: s.MethodKind.Unary
    },
    bulkMoveOrganizationMembers: {
      name: "BulkMoveOrganizationMembers",
      I: n.VN4,
      O: n.nPy,
      kind: s.MethodKind.Unary
    },
    startBulkMoveOrganizationMembers: {
      name: "StartBulkMoveOrganizationMembers",
      I: n.piC,
      O: n.T_o,
      kind: s.MethodKind.Unary
    },
    getBackgroundJob: {
      name: "GetBackgroundJob",
      I: n.Nbg,
      O: n.xel,
      kind: s.MethodKind.Unary
    },
    setOrganizationMemberRole: {
      name: "SetOrganizationMemberRole",
      I: n.xBJ,
      O: n.jFq,
      kind: s.MethodKind.Unary
    },
    updateOrganization: {
      name: "UpdateOrganization",
      I: n.SC0,
      O: n.kz1,
      kind: s.MethodKind.Unary
    },
    uploadOrganizationIcon: {
      name: "UploadOrganizationIcon",
      I: n.Jt2,
      O: n.Fmo,
      kind: s.MethodKind.Unary
    },
    updateOrganizationIcon: {
      name: "UpdateOrganizationIcon",
      I: n.DqU,
      O: n.X99,
      kind: s.MethodKind.Unary
    },
    updateOrganizationTeam: {
      name: "UpdateOrganizationTeam",
      I: n.Dmk,
      O: n.RAD,
      kind: s.MethodKind.Unary
    },
    createOrganizationTeam: {
      name: "CreateOrganizationTeam",
      I: n.iQx,
      O: n.uYE,
      kind: s.MethodKind.Unary
    },
    startEnterpriseGrokMigration: {
      name: "StartEnterpriseGrokMigration",
      I: n.uRp,
      O: n.Cf7,
      kind: s.MethodKind.Unary
    },
    getEnterpriseGrokMigrationStatus: {
      name: "GetEnterpriseGrokMigrationStatus",
      I: n.OyF,
      O: n.igd,
      kind: s.MethodKind.Unary
    },
    checkEnterpriseGrokMigrationEligibility: {
      name: "CheckEnterpriseGrokMigrationEligibility",
      I: n.LYD,
      O: n.jt6,
      kind: s.MethodKind.Unary
    },
    previewOrganizationTeamSettingsCopy: {
      name: "PreviewOrganizationTeamSettingsCopy",
      I: n.CrG,
      O: n.YQr,
      kind: s.MethodKind.Unary
    },
    copyOrganizationTeamSettingsToTeam: {
      name: "CopyOrganizationTeamSettingsToTeam",
      I: n.ign,
      O: n.WSJ,
      kind: s.MethodKind.Unary
    },
    listOrganizationTeamSettingsCopySources: {
      name: "ListOrganizationTeamSettingsCopySources",
      I: n.YNI,
      O: n.yaP,
      kind: s.MethodKind.Unary
    },
    getOrganizationTeamAdminCandidates: {
      name: "GetOrganizationTeamAdminCandidates",
      I: n.rgp,
      O: n.xa_,
      kind: s.MethodKind.Unary
    },
    getDirectoryGroups: {
      name: "GetDirectoryGroups",
      I: n.LYo,
      O: n.PJy,
      kind: s.MethodKind.Unary
    },
    updateDirectoryGroupSettings: {
      name: "UpdateDirectoryGroupSettings",
      I: n.kFu,
      O: n.Mpk,
      kind: s.MethodKind.Unary
    },
    getOrganizationGroups: {
      name: "GetOrganizationGroups",
      I: n.f5k,
      O: n.ZJV,
      kind: s.MethodKind.Unary
    },
    getOrganizationGroup: {
      name: "GetOrganizationGroup",
      I: n.wH4,
      O: n.uwp,
      kind: s.MethodKind.Unary
    },
    getOrganizationGroupMembers: {
      name: "GetOrganizationGroupMembers",
      I: n.nQH,
      O: n.rd8,
      kind: s.MethodKind.Unary
    },
    createOrganizationGroup: {
      name: "CreateOrganizationGroup",
      I: n.ed4,
      O: n.urU,
      kind: s.MethodKind.Unary
    },
    updateOrganizationGroup: {
      name: "UpdateOrganizationGroup",
      I: n.Bhj,
      O: n.LBR,
      kind: s.MethodKind.Unary
    },
    deleteOrganizationGroup: {
      name: "DeleteOrganizationGroup",
      I: n.pe4,
      O: n.Huq,
      kind: s.MethodKind.Unary
    },
    addOrganizationGroupMembers: {
      name: "AddOrganizationGroupMembers",
      I: n.U8V,
      O: n.mf3,
      kind: s.MethodKind.Unary
    },
    removeOrganizationGroupMembers: {
      name: "RemoveOrganizationGroupMembers",
      I: n.xQP,
      O: n.TGX,
      kind: s.MethodKind.Unary
    },
    updateOrganizationGroupMember: {
      name: "UpdateOrganizationGroupMember",
      I: n.rj1,
      O: n.jWT,
      kind: s.MethodKind.Unary
    },
    getOrganizationGroupServiceAccountMembers: {
      name: "GetOrganizationGroupServiceAccountMembers",
      I: n.bPz,
      O: n.H0j,
      kind: s.MethodKind.Unary
    },
    getOrganizationServiceAccounts: {
      name: "GetOrganizationServiceAccounts",
      I: n.Exr,
      O: n.aYg,
      kind: s.MethodKind.Unary
    },
    addOrganizationGroupServiceAccounts: {
      name: "AddOrganizationGroupServiceAccounts",
      I: n.ggo,
      O: n.aHm,
      kind: s.MethodKind.Unary
    },
    removeOrganizationGroupServiceAccounts: {
      name: "RemoveOrganizationGroupServiceAccounts",
      I: n.dSX,
      O: n.nS1,
      kind: s.MethodKind.Unary
    },
    getOrganizationGroupAutorunSettings: {
      name: "GetOrganizationGroupAutorunSettings",
      I: n.ZKL,
      O: n.f43,
      kind: s.MethodKind.Unary
    },
    updateOrganizationGroupAutorunSettings: {
      name: "UpdateOrganizationGroupAutorunSettings",
      I: n.Cwp,
      O: n._i8,
      kind: s.MethodKind.Unary
    },
    getOrganizationGroupMcpSettings: {
      name: "GetOrganizationGroupMcpSettings",
      I: n.z1R,
      O: n.Jrb,
      kind: s.MethodKind.Unary
    },
    updateOrganizationGroupMcpSettings: {
      name: "UpdateOrganizationGroupMcpSettings",
      I: n.qMG,
      O: n.AbB,
      kind: s.MethodKind.Unary
    },
    exportOrganizationGroupMcpAllowlist: {
      name: "ExportOrganizationGroupMcpAllowlist",
      I: n.DI3,
      O: n.zhf,
      kind: s.MethodKind.Unary
    },
    importOrganizationGroupMcpAllowlist: {
      name: "ImportOrganizationGroupMcpAllowlist",
      I: n.YJq,
      O: n.WWg,
      kind: s.MethodKind.Unary
    },
    exportTeamMcpAllowlist: {
      name: "ExportTeamMcpAllowlist",
      I: n.m0D,
      O: n.wpF,
      kind: s.MethodKind.Unary
    },
    importTeamMcpAllowlist: {
      name: "ImportTeamMcpAllowlist",
      I: n.fVs,
      O: n.xxr,
      kind: s.MethodKind.Unary
    },
    getTeamCloudAgentMcpAllowlist: {
      name: "GetTeamCloudAgentMcpAllowlist",
      I: n.Cbg,
      O: n.StK,
      kind: s.MethodKind.Unary
    },
    updateTeamCloudAgentMcpAllowlist: {
      name: "UpdateTeamCloudAgentMcpAllowlist",
      I: n.ZZ6,
      O: n.hiw,
      kind: s.MethodKind.Unary
    },
    resetOrganizationGroupAgentRunModeToAutoReview: {
      name: "ResetOrganizationGroupAgentRunModeToAutoReview",
      I: n.ePV,
      O: n.EuD,
      kind: s.MethodKind.Unary
    },
    getOrganizationGroupModelAllowlist: {
      name: "GetOrganizationGroupModelAllowlist",
      I: n.M89,
      O: n.qlA,
      kind: s.MethodKind.Unary
    },
    updateOrganizationGroupModelAllowlist: {
      name: "UpdateOrganizationGroupModelAllowlist",
      I: n.$bH,
      O: n.nCl,
      kind: s.MethodKind.Unary
    },
    getOrganizationGroupAutoReviewSettings: {
      name: "GetOrganizationGroupAutoReviewSettings",
      I: n.QOh,
      O: n.qbQ,
      kind: s.MethodKind.Unary
    },
    updateOrganizationGroupAutoReviewSettings: {
      name: "UpdateOrganizationGroupAutoReviewSettings",
      I: n.DtR,
      O: n.dDc,
      kind: s.MethodKind.Unary
    },
    getOrganizationGroupSmartAutoSettings: {
      name: "GetOrganizationGroupSmartAutoSettings",
      I: n.H8G,
      O: n.rt0,
      kind: s.MethodKind.Unary
    },
    updateOrganizationGroupSmartAutoSettings: {
      name: "UpdateOrganizationGroupSmartAutoSettings",
      I: n.Yir,
      O: n.GDG,
      kind: s.MethodKind.Unary
    },
    createOrganizationGroupAnthropicCyberEnrollmentUrl: {
      name: "CreateOrganizationGroupAnthropicCyberEnrollmentUrl",
      I: n.C1F,
      O: n.wqi,
      kind: s.MethodKind.Unary
    },
    requestOrganizationGroupAnthropicEfs: {
      name: "RequestOrganizationGroupAnthropicEfs",
      I: n.rF_,
      O: n.DmQ,
      kind: s.MethodKind.Unary
    },
    requestOrganizationAnthropicEfs: {
      name: "RequestOrganizationAnthropicEfs",
      I: n.Y6P,
      O: n.QeE,
      kind: s.MethodKind.Unary
    },
    getOrganizationAnthropicEfsStatus: {
      name: "GetOrganizationAnthropicEfsStatus",
      I: n.BHf,
      O: n.lqZ,
      kind: s.MethodKind.Unary
    },
    reviewAnthropicEfsRequestInternal: {
      name: "ReviewAnthropicEfsRequestInternal",
      I: n.ovZ,
      O: n.gdR,
      kind: s.MethodKind.Unary
    },
    getTeamGroups: {
      name: "GetTeamGroups",
      I: n.JbB,
      O: n.nrv,
      kind: s.MethodKind.Unary
    },
    getTeamGroup: {
      name: "GetTeamGroup",
      I: n.UQh,
      O: n.cUB,
      kind: s.MethodKind.Unary
    },
    getTeamGroupMembers: {
      name: "GetTeamGroupMembers",
      I: n.J67,
      O: n.VBR,
      kind: s.MethodKind.Unary
    },
    getTeamGroupServiceAccountMembers: {
      name: "GetTeamGroupServiceAccountMembers",
      I: n.DWT,
      O: n.hSD,
      kind: s.MethodKind.Unary
    },
    createTeamGroup: {
      name: "CreateTeamGroup",
      I: n.cbD,
      O: n.CiW,
      kind: s.MethodKind.Unary
    },
    updateTeamGroup: {
      name: "UpdateTeamGroup",
      I: n.NS0,
      O: n.JL8,
      kind: s.MethodKind.Unary
    },
    deleteTeamGroup: {
      name: "DeleteTeamGroup",
      I: n.p9b,
      O: n.VyS,
      kind: s.MethodKind.Unary
    },
    addTeamGroupMembers: {
      name: "AddTeamGroupMembers",
      I: n.yqO,
      O: n.Gc8,
      kind: s.MethodKind.Unary
    },
    removeTeamGroupMembers: {
      name: "RemoveTeamGroupMembers",
      I: n.rA4,
      O: n.lER,
      kind: s.MethodKind.Unary
    },
    addTeamGroupServiceAccounts: {
      name: "AddTeamGroupServiceAccounts",
      I: n.Ipj,
      O: n.a0c,
      kind: s.MethodKind.Unary
    },
    removeTeamGroupServiceAccounts: {
      name: "RemoveTeamGroupServiceAccounts",
      I: n.X6C,
      O: n.$Fl,
      kind: s.MethodKind.Unary
    },
    updateTeamGroupMember: {
      name: "UpdateTeamGroupMember",
      I: n.jG,
      O: n.jFj,
      kind: s.MethodKind.Unary
    },
    getTeamGroupAutorunSettings: {
      name: "GetTeamGroupAutorunSettings",
      I: n.bK1,
      O: n.bJ,
      kind: s.MethodKind.Unary
    },
    updateTeamGroupAutorunSettings: {
      name: "UpdateTeamGroupAutorunSettings",
      I: n.KTu,
      O: n._$O,
      kind: s.MethodKind.Unary
    },
    getTeamGroupMcpSettings: {
      name: "GetTeamGroupMcpSettings",
      I: n.P6l,
      O: n.zL5,
      kind: s.MethodKind.Unary
    },
    updateTeamGroupMcpSettings: {
      name: "UpdateTeamGroupMcpSettings",
      I: n.uFn,
      O: n.mjT,
      kind: s.MethodKind.Unary
    },
    listBuiltinMcpServerTools: {
      name: "ListBuiltinMcpServerTools",
      I: n.FXL,
      O: n.hiE,
      kind: s.MethodKind.Unary
    },
    exportTeamGroupMcpAllowlist: {
      name: "ExportTeamGroupMcpAllowlist",
      I: n.dMQ,
      O: n.$gS,
      kind: s.MethodKind.Unary
    },
    importTeamGroupMcpAllowlist: {
      name: "ImportTeamGroupMcpAllowlist",
      I: n.sMu,
      O: n.osZ,
      kind: s.MethodKind.Unary
    },
    resetTeamGroupAgentRunModeToAutoReview: {
      name: "ResetTeamGroupAgentRunModeToAutoReview",
      I: n.I3c,
      O: n.Qnc,
      kind: s.MethodKind.Unary
    },
    getTeamGroupModelAllowlist: {
      name: "GetTeamGroupModelAllowlist",
      I: n.s$M,
      O: n.MJ,
      kind: s.MethodKind.Unary
    },
    updateTeamGroupModelAllowlist: {
      name: "UpdateTeamGroupModelAllowlist",
      I: n.pbs,
      O: n.PD$,
      kind: s.MethodKind.Unary
    },
    getTeamGroupAutoReviewSettings: {
      name: "GetTeamGroupAutoReviewSettings",
      I: n.Mx4,
      O: n.gDX,
      kind: s.MethodKind.Unary
    },
    updateTeamGroupAutoReviewSettings: {
      name: "UpdateTeamGroupAutoReviewSettings",
      I: n.dXc,
      O: n.zF8,
      kind: s.MethodKind.Unary
    },
    getTeamSandNetworkSettings: {
      name: "GetTeamSandNetworkSettings",
      I: n.oTS,
      O: n.eU6,
      kind: s.MethodKind.Unary
    },
    getTeamGrokBotTrial: {
      name: "GetTeamGrokBotTrial",
      I: n.ve,
      O: n.HDB,
      kind: s.MethodKind.Unary
    },
    listTeamGrokBotAgentsAdmin: {
      name: "ListTeamGrokBotAgentsAdmin",
      I: n.Kbt,
      O: n.kAL,
      kind: s.MethodKind.Unary
    },
    updateTeamSandNetworkSettings: {
      name: "UpdateTeamSandNetworkSettings",
      I: n.NNm,
      O: n.pII,
      kind: s.MethodKind.Unary
    },
    getTeamSandTrustedCaCertificates: {
      name: "GetTeamSandTrustedCaCertificates",
      I: n.CKW,
      O: n.m2K,
      kind: s.MethodKind.Unary
    },
    updateTeamSandTrustedCaCertificates: {
      name: "UpdateTeamSandTrustedCaCertificates",
      I: n.Bth,
      O: n.JYk,
      kind: s.MethodKind.Unary
    },
    getTeamSandLocalEgressPrivateDestinations: {
      name: "GetTeamSandLocalEgressPrivateDestinations",
      I: n.pfH,
      O: n.rDT,
      kind: s.MethodKind.Unary
    },
    updateTeamSandLocalEgressPrivateDestinations: {
      name: "UpdateTeamSandLocalEgressPrivateDestinations",
      I: n.o_w,
      O: n.scB,
      kind: s.MethodKind.Unary
    },
    getTeamIngressIpAllowlist: {
      name: "GetTeamIngressIpAllowlist",
      I: n.Y44,
      O: n.kE_,
      kind: s.MethodKind.Unary
    },
    updateTeamIngressIpAllowlist: {
      name: "UpdateTeamIngressIpAllowlist",
      I: n.vq0,
      O: n.npe,
      kind: s.MethodKind.Unary
    },
    getOrganizationIngressIpAllowlist: {
      name: "GetOrganizationIngressIpAllowlist",
      I: n.UvC,
      O: n.SkP,
      kind: s.MethodKind.Unary
    },
    updateOrganizationIngressIpAllowlist: {
      name: "UpdateOrganizationIngressIpAllowlist",
      I: n.vvr,
      O: n.J3N,
      kind: s.MethodKind.Unary
    },
    copyTeamIngressIpAllowlistToOrganization: {
      name: "CopyTeamIngressIpAllowlistToOrganization",
      I: n.bZ3,
      O: n.z2Y,
      kind: s.MethodKind.Unary
    },
    getTeamSandEgressHttpRules: {
      name: "GetTeamSandEgressHttpRules",
      I: n.TIU,
      O: n.p_t,
      kind: s.MethodKind.Unary
    },
    updateTeamSandEgressHttpRules: {
      name: "UpdateTeamSandEgressHttpRules",
      I: n.Q7C,
      O: n.knM,
      kind: s.MethodKind.Unary
    },
    getTeamTailnet: {
      name: "GetTeamTailnet",
      I: n.YZZ,
      O: n.GyS,
      kind: s.MethodKind.Unary
    },
    updateTeamTailnet: {
      name: "UpdateTeamTailnet",
      I: n.pZT,
      O: n.Xhy,
      kind: s.MethodKind.Unary
    },
    updateTeamTailnetCompanyCa: {
      name: "UpdateTeamTailnetCompanyCa",
      I: n.oEX,
      O: n.K3G,
      kind: s.MethodKind.Unary
    },
    updateTeamTailnetBoxAccess: {
      name: "UpdateTeamTailnetBoxAccess",
      I: n.YKB,
      O: n.GXt,
      kind: s.MethodKind.Unary
    },
    discoverTeamTailnetSuffix: {
      name: "DiscoverTeamTailnetSuffix",
      I: n.Yms,
      O: n.C$e,
      kind: s.MethodKind.Unary
    },
    setActiveTailnet: {
      name: "SetActiveTailnet",
      I: n.F$O,
      O: n.T59,
      kind: s.MethodKind.Unary
    },
    getTeamGroupSandNetworkSettings: {
      name: "GetTeamGroupSandNetworkSettings",
      I: n.pfR,
      O: n.rDR,
      kind: s.MethodKind.Unary
    },
    updateTeamGroupSandNetworkSettings: {
      name: "UpdateTeamGroupSandNetworkSettings",
      I: n.owH,
      O: n.KVq,
      kind: s.MethodKind.Unary
    },
    getTeamGroupGrokBotCapabilities: {
      name: "GetTeamGroupGrokBotCapabilities",
      I: n.gsc,
      O: n.Eyr,
      kind: s.MethodKind.Unary
    },
    updateTeamGroupGrokBotCapabilities: {
      name: "UpdateTeamGroupGrokBotCapabilities",
      I: n.Nl7,
      O: n.lu1,
      kind: s.MethodKind.Unary
    },
    getTeamGroupSmartAutoSettings: {
      name: "GetTeamGroupSmartAutoSettings",
      I: n.hu7,
      O: n.BPt,
      kind: s.MethodKind.Unary
    },
    updateTeamGroupSmartAutoSettings: {
      name: "UpdateTeamGroupSmartAutoSettings",
      I: n.Gor,
      O: n.WWO,
      kind: s.MethodKind.Unary
    },
    createTeamGroupAnthropicCyberEnrollmentUrl: {
      name: "CreateTeamGroupAnthropicCyberEnrollmentUrl",
      I: n.oJv,
      O: n.UPX,
      kind: s.MethodKind.Unary
    },
    requestTeamGroupAnthropicEfs: {
      name: "RequestTeamGroupAnthropicEfs",
      I: n.be7,
      O: n.THz,
      kind: s.MethodKind.Unary
    },
    getTeamAnthropicEfsStatus: {
      name: "GetTeamAnthropicEfsStatus",
      I: n.TdK,
      O: n.v6H,
      kind: s.MethodKind.Unary
    },
    listTeamGroupScimDirectories: {
      name: "ListTeamGroupScimDirectories",
      I: n.DEE,
      O: n.xUt,
      kind: s.MethodKind.Unary
    },
    listTeamGroupScimGroupsFromUpstream: {
      name: "ListTeamGroupScimGroupsFromUpstream",
      I: n.nsd,
      O: n.xYI,
      kind: s.MethodKind.Unary
    },
    listTeamGroupScimTargetMappings: {
      name: "ListTeamGroupScimTargetMappings",
      I: n.QE,
      O: n.gsU,
      kind: s.MethodKind.Unary
    },
    createTeamGroupScimTargetMapping: {
      name: "CreateTeamGroupScimTargetMapping",
      I: n.lW,
      O: n.$a1,
      kind: s.MethodKind.Unary
    },
    deleteTeamGroupScimTargetMapping: {
      name: "DeleteTeamGroupScimTargetMapping",
      I: n.mA,
      O: n.U1k,
      kind: s.MethodKind.Unary
    },
    getGroups: {
      name: "GetGroups",
      I: n.CY$,
      O: n.WsC,
      kind: s.MethodKind.Unary
    },
    getGroupMembers: {
      name: "GetGroupMembers",
      I: n.i$e,
      O: n.StO,
      kind: s.MethodKind.Unary
    },
    createGroup: {
      name: "CreateGroup",
      I: n.p8r,
      O: n.Dsz,
      kind: s.MethodKind.Unary
    },
    updateGroup: {
      name: "UpdateGroup",
      I: n.Eh9,
      O: n.wrT,
      kind: s.MethodKind.Unary
    },
    deleteGroup: {
      name: "DeleteGroup",
      I: n.SBx,
      O: n.uDb,
      kind: s.MethodKind.Unary
    },
    addGroupMembers: {
      name: "AddGroupMembers",
      I: n.Hcr,
      O: n.he9,
      kind: s.MethodKind.Unary
    },
    removeGroupMembers: {
      name: "RemoveGroupMembers",
      I: n.im6,
      O: n.SSe,
      kind: s.MethodKind.Unary
    },
    bulkAssignGroupMembers: {
      name: "BulkAssignGroupMembers",
      I: n.t3S,
      O: n.PXK,
      kind: s.MethodKind.Unary
    },
    previewAttachGroupToDirectory: {
      name: "PreviewAttachGroupToDirectory",
      I: n.OeX,
      O: n.Wow,
      kind: s.MethodKind.Unary
    },
    detachGroupFromDirectory: {
      name: "DetachGroupFromDirectory",
      I: n.tm2,
      O: n.prK,
      kind: s.MethodKind.Unary
    },
    getScimConflicts: {
      name: "GetScimConflicts",
      I: n.l9M,
      O: n.nPZ,
      kind: s.MethodKind.Unary
    },
    listScimDirectories: {
      name: "ListScimDirectories",
      I: n.Dxu,
      O: n.LM8,
      kind: s.MethodKind.Unary
    },
    getOrganizationScimConfigurationLinks: {
      name: "GetOrganizationScimConfigurationLinks",
      I: n.Dxu,
      O: n.C61,
      kind: s.MethodKind.Unary
    },
    createScimDirectory: {
      name: "CreateScimDirectory",
      I: n.BwS,
      O: n.dnd,
      kind: s.MethodKind.Unary
    },
    updateScimDirectorySyncSettings: {
      name: "UpdateScimDirectorySyncSettings",
      I: n.Spq,
      O: n.YCH,
      kind: s.MethodKind.Unary
    },
    deleteScimDirectory: {
      name: "DeleteScimDirectory",
      I: n.gwk,
      O: n.CN_,
      kind: s.MethodKind.Unary
    },
    listScimGroupsFromUpstream: {
      name: "ListScimGroupsFromUpstream",
      I: n.lmw,
      O: n.na4,
      kind: s.MethodKind.Unary
    },
    listScimTargetMappings: {
      name: "ListScimTargetMappings",
      I: n.OWn,
      O: n.c3u,
      kind: s.MethodKind.Unary
    },
    listOrganizationGroupTargetMappings: {
      name: "ListOrganizationGroupTargetMappings",
      I: n.UTl,
      O: n.i4X,
      kind: s.MethodKind.Unary
    },
    createScimTargetMapping: {
      name: "CreateScimTargetMapping",
      I: n.PwZ,
      O: n.vFW,
      kind: s.MethodKind.Unary
    },
    deleteScimTargetMapping: {
      name: "DeleteScimTargetMapping",
      I: n.gFI,
      O: n.c7s,
      kind: s.MethodKind.Unary
    },
    getActivationCheckoutUrl: {
      name: "GetActivationCheckoutUrl",
      I: n.hWx,
      O: n.dr7,
      kind: s.MethodKind.Unary
    },
    checkPromotionEligibility: {
      name: "CheckPromotionEligibility",
      I: n.yD0,
      O: n.MEI,
      kind: s.MethodKind.Unary
    },
    activatePromotion: {
      name: "ActivatePromotion",
      I: n.uHx,
      O: n.yDS,
      kind: s.MethodKind.Unary
    },
    getTeamCustomerPortalUrl: {
      name: "GetTeamCustomerPortalUrl",
      I: n.qjo,
      O: n.M_,
      kind: s.MethodKind.Unary
    },
    cancelPendingTeamSubscriptionNow: {
      name: "CancelPendingTeamSubscriptionNow",
      I: n.v_r,
      O: n.$n,
      kind: s.MethodKind.Unary
    },
    createPendingTeamProCheckout: {
      name: "CreatePendingTeamProCheckout",
      I: n.PTe,
      O: n.pF3,
      kind: s.MethodKind.Unary
    },
    getTeamPrepaidBilling: {
      name: "GetTeamPrepaidBilling",
      I: n.FcH,
      O: n.$qn,
      kind: s.MethodKind.Unary
    },
    setTeamPrepaidAutoTopUp: {
      name: "SetTeamPrepaidAutoTopUp",
      I: n.$ty,
      O: n.VN6,
      kind: s.MethodKind.Unary
    },
    createPrepaidTopUp: {
      name: "CreatePrepaidTopUp",
      I: n.XAW,
      O: n.bTQ,
      kind: s.MethodKind.Unary
    },
    getUserPrepaidBilling: {
      name: "GetUserPrepaidBilling",
      I: n.b4u,
      O: n.$H_,
      kind: s.MethodKind.Unary
    },
    setUserPrepaidAutoTopUp: {
      name: "SetUserPrepaidAutoTopUp",
      I: n.h3x,
      O: n.D9s,
      kind: s.MethodKind.Unary
    },
    createUserPrepaidTopUp: {
      name: "CreateUserPrepaidTopUp",
      I: n.uDD,
      O: n.EO4,
      kind: s.MethodKind.Unary
    },
    getTeamMembers: {
      name: "GetTeamMembers",
      I: n.Imd,
      O: n.QI7,
      kind: s.MethodKind.Unary
    },
    sendTeamInvite: {
      name: "SendTeamInvite",
      I: n.cn,
      O: n.YBJ,
      kind: s.MethodKind.Unary
    },
    getTeamInviteLink: {
      name: "GetTeamInviteLink",
      I: n.C4p,
      O: n.gRj,
      kind: s.MethodKind.Unary
    },
    acceptInvite: {
      name: "AcceptInvite",
      I: n.LRJ,
      O: n.bCe,
      kind: s.MethodKind.Unary
    },
    getTeamInviteMetadata: {
      name: "GetTeamInviteMetadata",
      I: n.h1G,
      O: n.doQ,
      kind: s.MethodKind.Unary
    },
    listContactImportConnections: {
      name: "ListContactImportConnections",
      I: n.Ezc,
      O: n.cDB,
      kind: s.MethodKind.Unary
    },
    getGoogleContactImportAuthUrl: {
      name: "GetGoogleContactImportAuthUrl",
      I: n.$7Y,
      O: n.LoC,
      kind: s.MethodKind.Unary
    },
    connectGoogleContactImportCallback: {
      name: "ConnectGoogleContactImportCallback",
      I: n.X38,
      O: n.tZA,
      kind: s.MethodKind.Unary
    },
    listContactImportContacts: {
      name: "ListContactImportContacts",
      I: n.gNW,
      O: n.SuV,
      kind: s.MethodKind.Unary
    },
    getContactImportAvatar: {
      name: "GetContactImportAvatar",
      I: n.mPq,
      O: n.i5j,
      kind: s.MethodKind.Unary
    },
    disconnectContactImportConnection: {
      name: "DisconnectContactImportConnection",
      I: n.jzf,
      O: n.zu1,
      kind: s.MethodKind.Unary
    },
    createTeam: {
      name: "CreateTeam",
      I: n.nxO,
      O: n.vgA,
      kind: s.MethodKind.Unary
    },
    getJoinableTeamsByDomain: {
      name: "GetJoinableTeamsByDomain",
      I: n.ND4,
      O: n.Rkv,
      kind: s.MethodKind.Unary
    },
    joinTeamByDomain: {
      name: "JoinTeamByDomain",
      I: n.E2N,
      O: n.iX6,
      kind: s.MethodKind.Unary
    },
    updateTeamDomainJoinSetting: {
      name: "UpdateTeamDomainJoinSetting",
      I: n.yog,
      O: n.K_o,
      kind: s.MethodKind.Unary
    },
    getTeamMemberDomains: {
      name: "GetTeamMemberDomains",
      I: n.Obu,
      O: n.S5H,
      kind: s.MethodKind.Unary
    },
    getTeamIdForReactivation: {
      name: "GetTeamIdForReactivation",
      I: n._CN,
      O: n.Kww,
      kind: s.MethodKind.Unary
    },
    changeSeat: {
      name: "ChangeSeat",
      I: n.HZm,
      O: n.lRG,
      kind: s.MethodKind.Unary
    },
    changeTeamSubscription: {
      name: "ChangeTeamSubscription",
      I: n.oOo,
      O: n.MIx,
      kind: s.MethodKind.Unary
    },
    connectGithubCallback: {
      name: "ConnectGithubCallback",
      I: n.SH9,
      O: n._$M,
      kind: s.MethodKind.Unary
    },
    registerGithubCursorCode: {
      name: "RegisterGithubCursorCode",
      I: n.H1p,
      O: n.DUo,
      kind: s.MethodKind.Unary
    },
    prepareGithubConnectFlow: {
      name: "PrepareGithubConnectFlow",
      I: n.uif,
      O: n.EJq,
      kind: s.MethodKind.Unary
    },
    completeGithubConnectFlow: {
      name: "CompleteGithubConnectFlow",
      I: n.OjU,
      O: n.Ohd,
      kind: s.MethodKind.Unary
    },
    disconnectGithub: {
      name: "DisconnectGithub",
      I: n.D57,
      O: n.llV,
      kind: s.MethodKind.Unary
    },
    prepareSetupGithubEnterpriseApp: {
      name: "PrepareSetupGithubEnterpriseApp",
      I: n.jPV,
      O: n.lP,
      kind: s.MethodKind.Unary
    },
    finishSetupGithubEnterpriseApp: {
      name: "FinishSetupGithubEnterpriseApp",
      I: n.jiB,
      O: n.Z48,
      kind: s.MethodKind.Unary
    },
    listGithubEnterpriseApps: {
      name: "ListGithubEnterpriseApps",
      I: n.k6E,
      O: n.a$2,
      kind: s.MethodKind.Unary
    },
    deleteGithubEnterpriseApp: {
      name: "DeleteGithubEnterpriseApp",
      I: n.mZ$,
      O: n.WBx,
      kind: s.MethodKind.Unary
    },
    setupGitlabEnterpriseInstance: {
      name: "SetupGitlabEnterpriseInstance",
      I: n.MS0,
      O: n.k09,
      kind: s.MethodKind.Unary
    },
    listGitlabEnterpriseInstances: {
      name: "ListGitlabEnterpriseInstances",
      I: n.gvC,
      O: n.WaG,
      kind: s.MethodKind.Unary
    },
    setGitlabEnterpriseHostControlledServiceAccountToken: {
      name: "SetGitlabEnterpriseHostControlledServiceAccountToken",
      I: n.Rns,
      O: n.PFp,
      kind: s.MethodKind.Unary
    },
    rotateGitlabEnterpriseWebhookSecret: {
      name: "RotateGitlabEnterpriseWebhookSecret",
      I: n.eor,
      O: n.oTi,
      kind: s.MethodKind.Unary
    },
    deleteGitlabEnterpriseInstance: {
      name: "DeleteGitlabEnterpriseInstance",
      I: n.iVu,
      O: n.wuD,
      kind: s.MethodKind.Unary
    },
    setupBitbucketServerInstance: {
      name: "SetupBitbucketServerInstance",
      I: n.w9j,
      O: n.c1o,
      kind: s.MethodKind.Unary
    },
    listBitbucketServerInstances: {
      name: "ListBitbucketServerInstances",
      I: n.Q3t,
      O: n.Oef,
      kind: s.MethodKind.Unary
    },
    updateBitbucketServerInstanceToken: {
      name: "UpdateBitbucketServerInstanceToken",
      I: n.fKS,
      O: n.tkR,
      kind: s.MethodKind.Unary
    },
    deleteBitbucketServerInstance: {
      name: "DeleteBitbucketServerInstance",
      I: n.opt,
      O: n.ABq,
      kind: s.MethodKind.Unary
    },
    syncGitlabRepos: {
      name: "SyncGitlabRepos",
      I: n.ZrD,
      O: n.ffl,
      kind: s.MethodKind.Unary
    },
    getGitlabReposSyncStatus: {
      name: "GetGitlabReposSyncStatus",
      I: n.jp5,
      O: n.dpH,
      kind: s.MethodKind.Unary
    },
    updateRole: {
      name: "UpdateRole",
      I: n.$ht,
      O: n.BrS,
      kind: s.MethodKind.Unary
    },
    removeMember: {
      name: "RemoveMember",
      I: n.mig,
      O: n.sX9,
      kind: s.MethodKind.Unary
    },
    getMemberRemovalInsights: {
      name: "GetMemberRemovalInsights",
      I: n.BF8,
      O: n.t__,
      kind: s.MethodKind.Unary
    },
    getSignUpType: {
      name: "GetSignUpType",
      I: n.u_Q,
      O: n.WsA,
      kind: s.MethodKind.Unary
    },
    getHardLimit: {
      name: "GetHardLimit",
      I: n.g6R,
      O: n.oyU,
      kind: s.MethodKind.Unary
    },
    setHardLimit: {
      name: "SetHardLimit",
      I: n.yL5,
      O: n.se9,
      kind: s.MethodKind.Unary
    },
    getSpendLimitPolicy: {
      name: "GetSpendLimitPolicy",
      I: n.zEV,
      O: n.pig,
      kind: s.MethodKind.Unary
    },
    setSpendLimitPolicy: {
      name: "SetSpendLimitPolicy",
      I: n.LMY,
      O: n.LLB,
      kind: s.MethodKind.Unary
    },
    getOrgTeamBudgets: {
      name: "GetOrgTeamBudgets",
      I: n.DXb,
      O: n.D42,
      kind: s.MethodKind.Unary
    },
    setOrgTeamBudget: {
      name: "SetOrgTeamBudget",
      I: n.yWy,
      O: n.as5,
      kind: s.MethodKind.Unary
    },
    getOrgDailySpendByCategory: {
      name: "GetOrgDailySpendByCategory",
      I: n.ubJ,
      O: n.GlZ,
      kind: s.MethodKind.Unary
    },
    enableOnDemandSpend: {
      name: "EnableOnDemandSpend",
      I: n.toG,
      O: n.V$m,
      kind: s.MethodKind.Unary
    },
    deleteAccount: {
      name: "DeleteAccount",
      I: n.gqj,
      O: n.wER,
      kind: s.MethodKind.Unary
    },
    getAccountSettings: {
      name: "GetAccountSettings",
      I: n.oNu,
      O: n.Hdf,
      kind: s.MethodKind.Unary
    },
    getAccountDeletionSummary: {
      name: "GetAccountDeletionSummary",
      I: n.RwL,
      O: n.MSh,
      kind: s.MethodKind.Unary
    },
    createAccountHandoff: {
      name: "CreateAccountHandoff",
      I: n.vaB,
      O: n.rzz,
      kind: s.MethodKind.Unary
    },
    startAccountCollapseRun: {
      name: "StartAccountCollapseRun",
      I: n.Dyp,
      O: n.V4V,
      kind: s.MethodKind.Unary
    },
    getAccountCollapseRun: {
      name: "GetAccountCollapseRun",
      I: n.DSj,
      O: n.LZR,
      kind: s.MethodKind.Unary
    },
    startAccountCollapseRunInternal: {
      name: "StartAccountCollapseRunInternal",
      I: n.Dyp,
      O: n.V4V,
      kind: s.MethodKind.Unary
    },
    getAccountCollapseRunInternal: {
      name: "GetAccountCollapseRunInternal",
      I: n.DSj,
      O: n.LZR,
      kind: s.MethodKind.Unary
    },
    startCursorAccountCollapse: {
      name: "StartCursorAccountCollapse",
      I: n.o9R,
      O: n.Kot,
      kind: s.MethodKind.Unary
    },
    getCursorAccountCollapseByTarget: {
      name: "GetCursorAccountCollapseByTarget",
      I: n.EBP,
      O: n.m85,
      kind: s.MethodKind.Unary
    },
    startCursorSessionAccountCollapse: {
      name: "StartCursorSessionAccountCollapse",
      I: n.kgd,
      O: n.Kot,
      kind: s.MethodKind.Unary
    },
    getCursorSessionAccountCollapse: {
      name: "GetCursorSessionAccountCollapse",
      I: n.kYK,
      O: n.m85,
      kind: s.MethodKind.Unary
    },
    listCursorSessionAccountCollapseCandidates: {
      name: "ListCursorSessionAccountCollapseCandidates",
      I: n.SFZ,
      O: n.xL7,
      kind: s.MethodKind.Unary
    },
    startCursorSessionAccountCollapseProof: {
      name: "StartCursorSessionAccountCollapseProof",
      I: n.CHM,
      O: n.G$Z,
      kind: s.MethodKind.Unary
    },
    completeCursorSessionAccountCollapseProof: {
      name: "CompleteCursorSessionAccountCollapseProof",
      I: n.baZ,
      O: n.N_h,
      kind: s.MethodKind.Unary
    },
    sendDownloadEmail: {
      name: "SendDownloadEmail",
      I: n.e5r,
      O: n.C3d,
      kind: s.MethodKind.Unary
    },
    getMonthlyInvoice: {
      name: "GetMonthlyInvoice",
      I: n.yO3,
      O: n.Si_,
      kind: s.MethodKind.Unary
    },
    listInvoiceCycles: {
      name: "ListInvoiceCycles",
      I: n.yMo,
      O: n.G8V,
      kind: s.MethodKind.Unary
    },
    getDailySpendByCategory: {
      name: "GetDailySpendByCategory",
      I: n.irI,
      O: n.GlZ,
      kind: s.MethodKind.Unary
    },
    getPricingHistory: {
      name: "GetPricingHistory",
      I: n.Akd,
      O: n.i7t,
      kind: s.MethodKind.Unary
    },
    listBackgroundComposerSecrets: {
      name: "ListBackgroundComposerSecrets",
      I: n.$F$,
      O: n.dnq,
      kind: s.MethodKind.Unary
    },
    createBackgroundComposerSecret: {
      name: "CreateBackgroundComposerSecret",
      I: n.sJl,
      O: n.ukh,
      kind: s.MethodKind.Unary
    },
    createBackgroundComposerSecretBatch: {
      name: "CreateBackgroundComposerSecretBatch",
      I: n.S3E,
      O: n.o6Z,
      kind: s.MethodKind.Unary
    },
    revokeBackgroundComposerSecret: {
      name: "RevokeBackgroundComposerSecret",
      I: n.AU3,
      O: n.keR,
      kind: s.MethodKind.Unary
    },
    updateBackgroundComposerSecret: {
      name: "UpdateBackgroundComposerSecret",
      I: n.zYv,
      O: n.FmW,
      kind: s.MethodKind.Unary
    },
    getMcpConfig: {
      name: "GetMcpConfig",
      I: n.glW,
      O: n.o9t,
      kind: s.MethodKind.Unary
    },
    getEffectiveMcpConfigForUser: {
      name: "GetEffectiveMcpConfigForUser",
      I: n.trz,
      O: n.J43,
      kind: s.MethodKind.Unary
    },
    getAvailableMcpServers: {
      name: "GetAvailableMcpServers",
      I: n.J$f,
      O: n.Bw0,
      kind: s.MethodKind.Unary
    },
    getMcpServerUsageSummary: {
      name: "GetMcpServerUsageSummary",
      I: n.YVG,
      O: n.czg,
      kind: s.MethodKind.Unary
    },
    setMcpConfig: {
      name: "SetMcpConfig",
      I: n.mK6,
      O: n.EZs,
      kind: s.MethodKind.Unary
    },
    updateUserDefaultMcpSettings: {
      name: "UpdateUserDefaultMcpSettings",
      I: n.osn,
      O: n.Acq,
      kind: s.MethodKind.Unary
    },
    setGrokConnectorEnabled: {
      name: "SetGrokConnectorEnabled",
      I: n.$ZN,
      O: n.NtP,
      kind: s.MethodKind.Unary
    },
    markMcpServersSeen: {
      name: "MarkMcpServersSeen",
      I: n.umz,
      O: n.Mdf,
      kind: s.MethodKind.Unary
    },
    storeMcpOAuthToken: {
      name: "StoreMcpOAuthToken",
      I: n.vg1,
      O: n.dWE,
      kind: s.MethodKind.Unary
    },
    getMcpOAuthTokens: {
      name: "GetMcpOAuthTokens",
      I: n.h3R,
      O: n.bhd,
      kind: s.MethodKind.Unary
    },
    listSandMcpTools: {
      name: "ListSandMcpTools",
      I: n.Hrg,
      O: n.ZbR,
      kind: s.MethodKind.Unary
    },
    previewTeamMcpTools: {
      name: "PreviewTeamMcpTools",
      I: n.wCe,
      O: n.Q87,
      kind: s.MethodKind.Unary
    },
    executeSandMcpTool: {
      name: "ExecuteSandMcpTool",
      I: n.BCh,
      O: n.xPw,
      kind: s.MethodKind.Unary
    },
    readSandMcpResource: {
      name: "ReadSandMcpResource",
      I: n.cOC,
      O: n.wu6,
      kind: s.MethodKind.Unary
    },
    classifySandAutoReview: {
      name: "ClassifySandAutoReview",
      I: n.jaI,
      O: n.lSE,
      kind: s.MethodKind.Unary
    },
    recordSandAuditEvents: {
      name: "RecordSandAuditEvents",
      I: n.b7M,
      O: n.J$G,
      kind: s.MethodKind.Unary
    },
    mcpOAuthRefreshLockBegin: {
      name: "McpOAuthRefreshLockBegin",
      I: n.yoJ,
      O: n.mIz,
      kind: s.MethodKind.Unary
    },
    mcpOAuthRefreshLockRelease: {
      name: "McpOAuthRefreshLockRelease",
      I: n.iCJ,
      O: n.sZ0,
      kind: s.MethodKind.Unary
    },
    deleteMcpOAuthToken: {
      name: "DeleteMcpOAuthToken",
      I: n.f8d,
      O: n.pO3,
      kind: s.MethodKind.Unary
    },
    validateMcpOAuthTokens: {
      name: "ValidateMcpOAuthTokens",
      I: n.jQX,
      O: n.ANG,
      kind: s.MethodKind.Unary
    },
    checkHttpMcpStatus: {
      name: "CheckHttpMcpStatus",
      I: n.esH,
      O: n.A3J,
      kind: s.MethodKind.Unary
    },
    storeMcpOAuthPendingState: {
      name: "StoreMcpOAuthPendingState",
      I: n._tH,
      O: n.IeM,
      kind: s.MethodKind.Unary
    },
    getMcpOAuthPendingState: {
      name: "GetMcpOAuthPendingState",
      I: n.RSA,
      O: n.veH,
      kind: s.MethodKind.Unary
    },
    renameMcpOAuthAccount: {
      name: "RenameMcpOAuthAccount",
      I: n.kX,
      O: n.qon,
      kind: s.MethodKind.Unary
    },
    deleteMcpOAuthAccount: {
      name: "DeleteMcpOAuthAccount",
      I: n.Bg_,
      O: n.nEl,
      kind: s.MethodKind.Unary
    },
    completeMcpOAuth: {
      name: "CompleteMcpOAuth",
      I: n.Ag,
      O: n.qdS,
      kind: s.MethodKind.Unary
    },
    handOffMcpOAuthCode: {
      name: "HandOffMcpOAuthCode",
      I: n.Y1$,
      O: n.WEh,
      kind: s.MethodKind.Unary
    },
    getPluginMcpConfig: {
      name: "GetPluginMcpConfig",
      I: n.RTM,
      O: n.v90,
      kind: s.MethodKind.Unary
    },
    batchGetPluginMcpConfig: {
      name: "BatchGetPluginMcpConfig",
      I: n.XRL,
      O: n.Jxy,
      kind: s.MethodKind.Unary
    },
    addMcpServersFromPlugin: {
      name: "AddMcpServersFromPlugin",
      I: n.awl,
      O: n.GG3,
      kind: s.MethodKind.Unary
    },
    moveUserMcpServerToTeam: {
      name: "MoveUserMcpServerToTeam",
      I: n.Jfv,
      O: n.FcC,
      kind: s.MethodKind.Unary
    },
    getTeamMcpPlacementDefault: {
      name: "GetTeamMcpPlacementDefault",
      I: n.dXJ,
      O: n.D5E,
      kind: s.MethodKind.Unary
    },
    updateTeamMcpPlacementDefault: {
      name: "UpdateTeamMcpPlacementDefault",
      I: n.eEB,
      O: n.yEd,
      kind: s.MethodKind.Unary
    },
    migrateTeamMcpServersToDefaultMarketplace: {
      name: "MigrateTeamMcpServersToDefaultMarketplace",
      I: n.dLd,
      O: n.lWb,
      kind: s.MethodKind.Unary
    },
    probeMcpUrl: {
      name: "ProbeMcpUrl",
      I: n.due,
      O: n.BpA,
      kind: s.MethodKind.Unary
    },
    getMcpBackendAccessToken: {
      name: "GetMcpBackendAccessToken",
      I: n.$aF,
      O: n.$ZH,
      kind: s.MethodKind.Unary
    },
    createTeamWithFreeTrial: {
      name: "CreateTeamWithFreeTrial",
      I: n.LAq,
      O: n.x2A,
      kind: s.MethodKind.Unary
    },
    createTeamWithOrg: {
      name: "CreateTeamWithOrg",
      I: n.BlC,
      O: n.Dd7,
      kind: s.MethodKind.Unary
    },
    getTeamHasValidPaymentMethod: {
      name: "GetTeamHasValidPaymentMethod",
      I: n.MrA,
      O: n.gJp,
      kind: s.MethodKind.Unary
    },
    getTeamPrivacyModeForced: {
      name: "GetTeamPrivacyModeForced",
      I: n.lKh,
      O: n.rsP,
      kind: s.MethodKind.Unary
    },
    getTeamXaiDataRetention: {
      name: "GetTeamXaiDataRetention",
      I: n.rcf,
      O: n.Jcx,
      kind: s.MethodKind.Unary
    },
    switchTeamPrivacyMode: {
      name: "SwitchTeamPrivacyMode",
      I: n.SmK,
      O: n.kjp,
      kind: s.MethodKind.Unary
    },
    updateFastRequests: {
      name: "UpdateFastRequests",
      I: n.rjZ,
      O: n.FFm,
      kind: s.MethodKind.Unary
    },
    getFastRequests: {
      name: "GetFastRequests",
      I: n.iSm,
      O: n.aUJ,
      kind: s.MethodKind.Unary
    },
    getDownloadLink: {
      name: "GetDownloadLink",
      I: n.Upy,
      O: n.AlS,
      kind: s.MethodKind.Unary
    },
    getCliDownloadUrl: {
      name: "GetCliDownloadUrl",
      I: n.Xhp,
      O: n.JRd,
      kind: s.MethodKind.Unary
    },
    getSsoConfigurationLinks: {
      name: "GetSsoConfigurationLinks",
      I: n._$o,
      O: n.Opj,
      kind: s.MethodKind.Unary
    },
    getScimConfigurationLinks: {
      name: "GetScimConfigurationLinks",
      I: n.n$I,
      O: n.fMg,
      kind: s.MethodKind.Unary
    },
    setAdminOnlyUsagePricing: {
      name: "SetAdminOnlyUsagePricing",
      I: n.SAF,
      O: n.Ix8,
      kind: s.MethodKind.Unary
    },
    getYearlyUpgradeEligibility: {
      name: "GetYearlyUpgradeEligibility",
      I: n.DLp,
      O: n.R$$,
      kind: s.MethodKind.Unary
    },
    upgradeToYearly: {
      name: "UpgradeToYearly",
      I: n.bBp,
      O: n.rk2,
      kind: s.MethodKind.Unary
    },
    getEnterpriseCTAEligibility: {
      name: "GetEnterpriseCTAEligibility",
      I: n.i6G,
      O: n.i0P,
      kind: s.MethodKind.Unary
    },
    getUsageBasedPremiumRequests: {
      name: "GetUsageBasedPremiumRequests",
      I: n.nDb,
      O: n.n8L,
      kind: s.MethodKind.Unary
    },
    setUsageBasedPremiumRequests: {
      name: "SetUsageBasedPremiumRequests",
      I: n.ZU_,
      O: n.X8H,
      kind: s.MethodKind.Unary
    },
    getReferrals: {
      name: "GetReferrals",
      I: n.Gch,
      O: n.gBX,
      kind: s.MethodKind.Unary
    },
    getReferralCodes: {
      name: "GetReferralCodes",
      I: n.bT6,
      O: n.D2n,
      kind: s.MethodKind.Unary
    },
    createP2PReferralLink: {
      name: "CreateP2PReferralLink",
      I: n.bhY,
      O: n.XEQ,
      kind: s.MethodKind.Unary
    },
    getP2PReferralStatus: {
      name: "GetP2PReferralStatus",
      I: n.pGh,
      O: n.XWY,
      kind: s.MethodKind.Unary
    },
    sendP2PReferralInvites: {
      name: "SendP2PReferralInvites",
      I: n.ZKX,
      O: n.tZb,
      kind: s.MethodKind.Unary
    },
    getP2PReferralHistory: {
      name: "GetP2PReferralHistory",
      I: n.EcQ,
      O: n.nd7,
      kind: s.MethodKind.Unary
    },
    checkReferralAllowlist: {
      name: "CheckReferralAllowlist",
      I: n.ukN,
      O: n.cRU,
      kind: s.MethodKind.Unary
    },
    checkReferralCode: {
      name: "CheckReferralCode",
      I: n.MRM,
      O: n.wb2,
      kind: s.MethodKind.Unary
    },
    redeemGiftCode: {
      name: "RedeemGiftCode",
      I: n.ziV,
      O: n.lme,
      kind: s.MethodKind.Unary
    },
    getEventCodeInfo: {
      name: "GetEventCodeInfo",
      I: n.RiQ,
      O: n.XUY,
      kind: s.MethodKind.Unary
    },
    redeemEventCode: {
      name: "RedeemEventCode",
      I: n.VF8,
      O: n.Djf,
      kind: s.MethodKind.Unary
    },
    getTeamRepos: {
      name: "GetTeamRepos",
      I: n.aYW,
      O: n.k1F,
      kind: s.MethodKind.Unary
    },
    getTeamReposOrEmptyIfNotInTeam: {
      name: "GetTeamReposOrEmptyIfNotInTeam",
      I: n.aYW,
      O: n.k1F,
      kind: s.MethodKind.Unary
    },
    getTeamRules: {
      name: "GetTeamRules",
      I: n.yds,
      O: n.KZ$,
      kind: s.MethodKind.Unary
    },
    createTeamRule: {
      name: "CreateTeamRule",
      I: n.J7F,
      O: n.vZv,
      kind: s.MethodKind.Unary
    },
    updateTeamRule: {
      name: "UpdateTeamRule",
      I: n.qEG,
      O: n.CMB,
      kind: s.MethodKind.Unary
    },
    deleteTeamRule: {
      name: "DeleteTeamRule",
      I: n.Ch8,
      O: n.uzD,
      kind: s.MethodKind.Unary
    },
    getTeamGroupRules: {
      name: "GetTeamGroupRules",
      I: n.vdM,
      O: n.Xu9,
      kind: s.MethodKind.Unary
    },
    createTeamGroupRule: {
      name: "CreateTeamGroupRule",
      I: n.WxI,
      O: n.AkX,
      kind: s.MethodKind.Unary
    },
    updateTeamGroupRule: {
      name: "UpdateTeamGroupRule",
      I: n.dpZ,
      O: n.Lxb,
      kind: s.MethodKind.Unary
    },
    deleteTeamGroupRule: {
      name: "DeleteTeamGroupRule",
      I: n.lIO,
      O: n.jqE,
      kind: s.MethodKind.Unary
    },
    getTeamHooks: {
      name: "GetTeamHooks",
      I: n.$kg,
      O: n.PtB,
      kind: s.MethodKind.Unary
    },
    createTeamHook: {
      name: "CreateTeamHook",
      I: n.wT7,
      O: n.a4I,
      kind: s.MethodKind.Unary
    },
    updateTeamHook: {
      name: "UpdateTeamHook",
      I: n.TeW,
      O: n.$lk,
      kind: s.MethodKind.Unary
    },
    deleteTeamHook: {
      name: "DeleteTeamHook",
      I: n.x4u,
      O: n.FNs,
      kind: s.MethodKind.Unary
    },
    getTeamCommands: {
      name: "GetTeamCommands",
      I: n.XDt,
      O: n.lzR,
      kind: s.MethodKind.Unary
    },
    createTeamCommand: {
      name: "CreateTeamCommand",
      I: n.Ctq,
      O: n.CXw,
      kind: s.MethodKind.Unary
    },
    updateTeamCommand: {
      name: "UpdateTeamCommand",
      I: n.XQ_,
      O: n.DZr,
      kind: s.MethodKind.Unary
    },
    deleteTeamCommand: {
      name: "DeleteTeamCommand",
      I: n.xo6,
      O: n.atP,
      kind: s.MethodKind.Unary
    },
    getGlobalCommands: {
      name: "GetGlobalCommands",
      I: n.YSR,
      O: n.rL_,
      kind: s.MethodKind.Unary
    },
    getRepoSlashCommands: {
      name: "GetRepoSlashCommands",
      I: n.LM4,
      O: n.hcQ,
      kind: s.MethodKind.Unary
    },
    getBackgroundComposerSlashCommands: {
      name: "GetBackgroundComposerSlashCommands",
      I: n.T1q,
      O: n.RNi,
      kind: s.MethodKind.Unary
    },
    getCloudAgentPluginsSnapshot: {
      name: "GetCloudAgentPluginsSnapshot",
      I: n.G24,
      O: n.gNl,
      kind: s.MethodKind.Unary
    },
    getBugbotTeamRules: {
      name: "GetBugbotTeamRules",
      I: n.N8K,
      O: n.RP_,
      kind: s.MethodKind.Unary
    },
    createBugbotTeamRule: {
      name: "CreateBugbotTeamRule",
      I: n.CHh,
      O: n.GL9,
      kind: s.MethodKind.Unary
    },
    updateBugbotTeamRule: {
      name: "UpdateBugbotTeamRule",
      I: n.rtb,
      O: n.v0c,
      kind: s.MethodKind.Unary
    },
    deleteBugbotTeamRule: {
      name: "DeleteBugbotTeamRule",
      I: n.pj7,
      O: n.rP9,
      kind: s.MethodKind.Unary
    },
    getBugbotLearnedRules: {
      name: "GetBugbotLearnedRules",
      I: n.hp9,
      O: n.z7W,
      kind: s.MethodKind.Unary
    },
    updateBugbotLearnedRule: {
      name: "UpdateBugbotLearnedRule",
      I: n.BIT,
      O: n.Xmf,
      kind: s.MethodKind.Unary
    },
    deleteBugbotLearnedRule: {
      name: "DeleteBugbotLearnedRule",
      I: n.hnR,
      O: n.Ld4,
      kind: s.MethodKind.Unary
    },
    createBugbotManualRepositoryRule: {
      name: "CreateBugbotManualRepositoryRule",
      I: n.Bdx,
      O: n.Zk6,
      kind: s.MethodKind.Unary
    },
    getBugbotManualRepositoryRules: {
      name: "GetBugbotManualRepositoryRules",
      I: n.qF$,
      O: n.azW,
      kind: s.MethodKind.Unary
    },
    updateBugbotManualRepositoryRule: {
      name: "UpdateBugbotManualRepositoryRule",
      I: n.UBx,
      O: n.ead,
      kind: s.MethodKind.Unary
    },
    deleteBugbotManualRepositoryRule: {
      name: "DeleteBugbotManualRepositoryRule",
      I: n.ONG,
      O: n.YYN,
      kind: s.MethodKind.Unary
    },
    runDiamondToBugbotMigration: {
      name: "RunDiamondToBugbotMigration",
      I: n.rb7,
      O: n.DkK,
      kind: s.MethodKind.Unary
    },
    getBugbotRuleAnalytics: {
      name: "GetBugbotRuleAnalytics",
      I: n.lvI,
      O: n.RK5,
      kind: s.MethodKind.Unary
    },
    getBugbotRuleById: {
      name: "GetBugbotRuleById",
      I: n.TOm,
      O: n.tkD,
      kind: s.MethodKind.Unary
    },
    createTeamRepo: {
      name: "CreateTeamRepo",
      I: n.J4c,
      O: n.fCO,
      kind: s.MethodKind.Unary
    },
    deleteTeamRepo: {
      name: "DeleteTeamRepo",
      I: n.m0x,
      O: n.Cw0,
      kind: s.MethodKind.Unary
    },
    addRepoPattern: {
      name: "AddRepoPattern",
      I: n.pji,
      O: n.D3c,
      kind: s.MethodKind.Unary
    },
    removeRepoPattern: {
      name: "RemoveRepoPattern",
      I: n.MEU,
      O: n.U0s,
      kind: s.MethodKind.Unary
    },
    setTeamRepoType: {
      name: "SetTeamRepoType",
      I: n.HeY,
      O: n.V_5,
      kind: s.MethodKind.Unary
    },
    getTeamAdminSettings: {
      name: "GetTeamAdminSettings",
      I: n.Byz,
      O: n.V5U,
      kind: s.MethodKind.Unary
    },
    getTeamAdminSettingsOrEmptyIfNotInTeam: {
      name: "GetTeamAdminSettingsOrEmptyIfNotInTeam",
      I: n.Byz,
      O: n.V5U,
      kind: s.MethodKind.Unary
    },
    getBaseTeamAdminSettings: {
      name: "GetBaseTeamAdminSettings",
      I: n.Qrr,
      O: n.V5U,
      kind: s.MethodKind.Unary
    },
    getTeamOriginDisabled: {
      name: "GetTeamOriginDisabled",
      I: n.NES,
      O: n.Fj9,
      kind: s.MethodKind.Unary
    },
    listUnlistedMemberServers: {
      name: "ListUnlistedMemberServers",
      I: n.esR,
      O: n.eiD,
      kind: s.MethodKind.Unary
    },
    updateTeamAdminSettings: {
      name: "UpdateTeamAdminSettings",
      I: n.sCz,
      O: n.aP5,
      kind: s.MethodKind.Unary
    },
    getTeamCustomerTelemetryDestinations: {
      name: "GetTeamCustomerTelemetryDestinations",
      I: n.n$w,
      O: n.R9K,
      kind: s.MethodKind.Unary
    },
    createTeamCustomerTelemetryDestination: {
      name: "CreateTeamCustomerTelemetryDestination",
      I: n.qxp,
      O: n.uts,
      kind: s.MethodKind.Unary
    },
    updateTeamCustomerTelemetryDestination: {
      name: "UpdateTeamCustomerTelemetryDestination",
      I: n.LJ3,
      O: n.Hen,
      kind: s.MethodKind.Unary
    },
    deleteTeamCustomerTelemetryDestination: {
      name: "DeleteTeamCustomerTelemetryDestination",
      I: n.t1u,
      O: n.rFi,
      kind: s.MethodKind.Unary
    },
    testTeamCustomerTelemetryDestinationConnection: {
      name: "TestTeamCustomerTelemetryDestinationConnection",
      I: n.ybE,
      O: n.YiF,
      kind: s.MethodKind.Unary
    },
    getTeamCustomerTelemetryDestinationHealth: {
      name: "GetTeamCustomerTelemetryDestinationHealth",
      I: n.mD_,
      O: n.wGo,
      kind: s.MethodKind.Unary
    },
    getTeamCustomerTelemetryContentExportOptIn: {
      name: "GetTeamCustomerTelemetryContentExportOptIn",
      I: n.LWe,
      O: n.F8Y,
      kind: s.MethodKind.Unary
    },
    updateTeamCustomerTelemetryContentExportOptIn: {
      name: "UpdateTeamCustomerTelemetryContentExportOptIn",
      I: n.UvX,
      O: n.G8P,
      kind: s.MethodKind.Unary
    },
    getTeamInferenceHookConfig: {
      name: "GetTeamInferenceHookConfig",
      I: n.TB_,
      O: n.nE8,
      kind: s.MethodKind.Unary
    },
    updateTeamInferenceHookConfig: {
      name: "UpdateTeamInferenceHookConfig",
      I: n.qJd,
      O: n.IIB,
      kind: s.MethodKind.Unary
    },
    rotateTeamInferenceHookSigningSecret: {
      name: "RotateTeamInferenceHookSigningSecret",
      I: n.B8P,
      O: n.HQR,
      kind: s.MethodKind.Unary
    },
    getTeamInferenceHookHealth: {
      name: "GetTeamInferenceHookHealth",
      I: n.lax,
      O: n.rM7,
      kind: s.MethodKind.Unary
    },
    resetTeamInferenceHookBreaker: {
      name: "ResetTeamInferenceHookBreaker",
      I: n._dj,
      O: n.Mob,
      kind: s.MethodKind.Unary
    },
    getTeamLlmGatewayCredentialStatus: {
      name: "GetTeamLlmGatewayCredentialStatus",
      I: n.v8R,
      O: n.dsv,
      kind: s.MethodKind.Unary
    },
    setTeamLlmGatewayCredential: {
      name: "SetTeamLlmGatewayCredential",
      I: n.JQv,
      O: n.LQe,
      kind: s.MethodKind.Unary
    },
    replaceTeamLlmGatewayCredential: {
      name: "ReplaceTeamLlmGatewayCredential",
      I: n.Bwq,
      O: n.nUL,
      kind: s.MethodKind.Unary
    },
    clearTeamLlmGatewayCredential: {
      name: "ClearTeamLlmGatewayCredential",
      I: n.uBx,
      O: n._rf,
      kind: s.MethodKind.Unary
    },
    updateTeamLlmGatewayModelDiscovery: {
      name: "UpdateTeamLlmGatewayModelDiscovery",
      I: n.i_X,
      O: n.wBS,
      kind: s.MethodKind.Unary
    },
    updateTeamLlmGatewayProviderEndpoints: {
      name: "UpdateTeamLlmGatewayProviderEndpoints",
      I: n.moj,
      O: n.k3$,
      kind: s.MethodKind.Unary
    },
    setTeamNoZdrModelConsent: {
      name: "SetTeamNoZdrModelConsent",
      I: n.HOq,
      O: n.xEn,
      kind: s.MethodKind.Unary
    },
    setOrganizationNoZdrModelConsent: {
      name: "SetOrganizationNoZdrModelConsent",
      I: n.xO$,
      O: n.b07,
      kind: s.MethodKind.Unary
    },
    getOrganizationPrivateInferencePolicy: {
      name: "GetOrganizationPrivateInferencePolicy",
      I: n.Vie,
      O: n.vsf,
      kind: s.MethodKind.Unary
    },
    updateOrganizationPrivateInferencePolicy: {
      name: "UpdateOrganizationPrivateInferencePolicy",
      I: n.Tjf,
      O: n.eWF,
      kind: s.MethodKind.Unary
    },
    getOrganizationPrivateInferenceTeamGroups: {
      name: "GetOrganizationPrivateInferenceTeamGroups",
      I: n.Ok7,
      O: n.Ajm,
      kind: s.MethodKind.Unary
    },
    getTeamPrivateInferencePolicy: {
      name: "GetTeamPrivateInferencePolicy",
      I: n.VNQ,
      O: n.NYc,
      kind: s.MethodKind.Unary
    },
    updateTeamPrivateInferencePolicy: {
      name: "UpdateTeamPrivateInferencePolicy",
      I: n.Ozh,
      O: n.wcT,
      kind: s.MethodKind.Unary
    },
    getOrganizationOnDemandSpendDisabled: {
      name: "GetOrganizationOnDemandSpendDisabled",
      I: n.Twg,
      O: n.$H2,
      kind: s.MethodKind.Unary
    },
    setOrganizationOnDemandSpendDisabled: {
      name: "SetOrganizationOnDemandSpendDisabled",
      I: n.zYy,
      O: n.dwD,
      kind: s.MethodKind.Unary
    },
    getOrganizationCreditRequestButtonHidden: {
      name: "GetOrganizationCreditRequestButtonHidden",
      I: n.jIe,
      O: n.JEj,
      kind: s.MethodKind.Unary
    },
    setOrganizationCreditRequestButtonHidden: {
      name: "SetOrganizationCreditRequestButtonHidden",
      I: n.v_8,
      O: n.VgQ,
      kind: s.MethodKind.Unary
    },
    getOrganizationSsoJitAutoEnrollment: {
      name: "GetOrganizationSsoJitAutoEnrollment",
      I: n._v$,
      O: n.yj0,
      kind: s.MethodKind.Unary
    },
    setOrganizationSsoJitAutoEnrollment: {
      name: "SetOrganizationSsoJitAutoEnrollment",
      I: n.yjV,
      O: n.c4k,
      kind: s.MethodKind.Unary
    },
    getTeamSsoJitAutoEnrollment: {
      name: "GetTeamSsoJitAutoEnrollment",
      I: n.WsN,
      O: n.Afl,
      kind: s.MethodKind.Unary
    },
    setTeamSsoJitAutoEnrollment: {
      name: "SetTeamSsoJitAutoEnrollment",
      I: n.O8H,
      O: n.wDw,
      kind: s.MethodKind.Unary
    },
    getTeamXAccountLinking: {
      name: "GetTeamXAccountLinking",
      I: n.ScF,
      O: n.bZb,
      kind: s.MethodKind.Unary
    },
    setTeamXAccountLinking: {
      name: "SetTeamXAccountLinking",
      I: n.WUm,
      O: n.bZb,
      kind: s.MethodKind.Unary
    },
    getOrganizationRemoteControlSettings: {
      name: "GetOrganizationRemoteControlSettings",
      I: n.ZPB,
      O: n.vfT,
      kind: s.MethodKind.Unary
    },
    updateOrganizationRemoteControlSettings: {
      name: "UpdateOrganizationRemoteControlSettings",
      I: n.AL,
      O: n.EDv,
      kind: s.MethodKind.Unary
    },
    getOrganizationSlackManagedWorkspaces: {
      name: "GetOrganizationSlackManagedWorkspaces",
      I: n.kxz,
      O: n.wFu,
      kind: s.MethodKind.Unary
    },
    updateOrganizationSlackManagedWorkspaces: {
      name: "UpdateOrganizationSlackManagedWorkspaces",
      I: n.pmc,
      O: n.PW,
      kind: s.MethodKind.Unary
    },
    getOrganizationSlackInboundInstallPolicy: {
      name: "GetOrganizationSlackInboundInstallPolicy",
      I: n.pPB,
      O: n.DxY,
      kind: s.MethodKind.Unary
    },
    updateOrganizationSlackInboundInstallPolicy: {
      name: "UpdateOrganizationSlackInboundInstallPolicy",
      I: n.aam,
      O: n.AF,
      kind: s.MethodKind.Unary
    },
    getOrganizationGoogleDriveBlockedSharedDrives: {
      name: "GetOrganizationGoogleDriveBlockedSharedDrives",
      I: n.iS1,
      O: n._ax,
      kind: s.MethodKind.Unary
    },
    updateOrganizationGoogleDriveBlockedSharedDrives: {
      name: "UpdateOrganizationGoogleDriveBlockedSharedDrives",
      I: n.b3B,
      O: n.vym,
      kind: s.MethodKind.Unary
    },
    getTeamRemoteControlSettings: {
      name: "GetTeamRemoteControlSettings",
      I: n.DVl,
      O: n.V$7,
      kind: s.MethodKind.Unary
    },
    updateTeamRemoteControlSettings: {
      name: "UpdateTeamRemoteControlSettings",
      I: n.ORt,
      O: n.yL9,
      kind: s.MethodKind.Unary
    },
    setUserNoZdrModelConsent: {
      name: "SetUserNoZdrModelConsent",
      I: n.hk4,
      O: n.ZpC,
      kind: s.MethodKind.Unary
    },
    setTeamMemberNoZdrModelConsent: {
      name: "SetTeamMemberNoZdrModelConsent",
      I: n.npU,
      O: n.PGd,
      kind: s.MethodKind.Unary
    },
    getNoZdrModelConsentStatus: {
      name: "GetNoZdrModelConsentStatus",
      I: n.Udp,
      O: n._am,
      kind: s.MethodKind.Unary
    },
    updateTeamInviteLinkTTLSetting: {
      name: "UpdateTeamInviteLinkTTLSetting",
      I: n.Lr1,
      O: n.Bpu,
      kind: s.MethodKind.Unary
    },
    updateTeamMemberInviteSetting: {
      name: "UpdateTeamMemberInviteSetting",
      I: n.tdz,
      O: n.N4Y,
      kind: s.MethodKind.Unary
    },
    updateTeamPersonalApiKeyCreationSetting: {
      name: "UpdateTeamPersonalApiKeyCreationSetting",
      I: n.izj,
      O: n.Qul,
      kind: s.MethodKind.Unary
    },
    updateTeamDefaultMemberBillingTier: {
      name: "UpdateTeamDefaultMemberBillingTier",
      I: n.gPk,
      O: n.wZY,
      kind: s.MethodKind.Unary
    },
    updateTeamSandOnboardingCompleted: {
      name: "UpdateTeamSandOnboardingCompleted",
      I: n.s9W,
      O: n.sZP,
      kind: s.MethodKind.Unary
    },
    updateTeamSandSetupChecklistItem: {
      name: "UpdateTeamSandSetupChecklistItem",
      I: n.aQI,
      O: n.sHw,
      kind: s.MethodKind.Unary
    },
    markTeamSandOnboardingSeen: {
      name: "MarkTeamSandOnboardingSeen",
      I: n.mNt,
      O: n.mnS,
      kind: s.MethodKind.Unary
    },
    getTeamGrokBotEligibleUserIds: {
      name: "GetTeamGrokBotEligibleUserIds",
      I: n.R$Q,
      O: n.LRw,
      kind: s.MethodKind.Unary
    },
    sendTeamSandOnboardingInvites: {
      name: "SendTeamSandOnboardingInvites",
      I: n.u$0,
      O: n.CrU,
      kind: s.MethodKind.Unary
    },
    getProtectedGitScopes: {
      name: "GetProtectedGitScopes",
      I: n.TXH,
      O: n.P_k,
      kind: s.MethodKind.Unary
    },
    createProtectedGitScope: {
      name: "CreateProtectedGitScope",
      I: n.IW3,
      O: n.wmn,
      kind: s.MethodKind.Unary
    },
    deleteProtectedGitScope: {
      name: "DeleteProtectedGitScope",
      I: n.tE7,
      O: n.R1c,
      kind: s.MethodKind.Unary
    },
    createTeamFreeTrialCode: {
      name: "CreateTeamFreeTrialCode",
      I: n.Qx5,
      O: n.M3e,
      kind: s.MethodKind.Unary
    },
    createTeamFreeTrialCodeInternal: {
      name: "CreateTeamFreeTrialCodeInternal",
      I: n.Qx5,
      O: n.M3e,
      kind: s.MethodKind.Unary
    },
    setTrialSpendLimitOverrideInternal: {
      name: "SetTrialSpendLimitOverrideInternal",
      I: n.IHq,
      O: n.qks,
      kind: s.MethodKind.Unary
    },
    getTrialSpendLimitInternal: {
      name: "GetTrialSpendLimitInternal",
      I: n.yIy,
      O: n.C2K,
      kind: s.MethodKind.Unary
    },
    getOrganizationEnterpriseTrialExtendContextInternal: {
      name: "GetOrganizationEnterpriseTrialExtendContextInternal",
      I: n.Yeg,
      O: n.eBq,
      kind: s.MethodKind.Unary
    },
    applyOrganizationEnterpriseTrialEndInternal: {
      name: "ApplyOrganizationEnterpriseTrialEndInternal",
      I: n.mi9,
      O: n.Izq,
      kind: s.MethodKind.Unary
    },
    getXaiUserUsageSnapshot: {
      name: "GetXaiUserUsageSnapshot",
      I: n.WAE,
      O: n.qSX,
      kind: s.MethodKind.Unary
    },
    getXaiUserPrepaidBilling: {
      name: "GetXaiUserPrepaidBilling",
      I: n.b4u,
      O: n.$H_,
      kind: s.MethodKind.Unary
    },
    setXaiUserPrepaidAutoTopUp: {
      name: "SetXaiUserPrepaidAutoTopUp",
      I: n.h3x,
      O: n.D9s,
      kind: s.MethodKind.Unary
    },
    getXaiCommerceBearerToken: {
      name: "GetXaiCommerceBearerToken",
      I: n.hD2,
      O: n.ZoF,
      kind: s.MethodKind.Unary
    },
    getTeamOffboardingConfigInternal: {
      name: "GetTeamOffboardingConfigInternal",
      I: n.XRZ,
      O: n.pv1,
      kind: s.MethodKind.Unary
    },
    updateTeamOffboardingConfigInternal: {
      name: "UpdateTeamOffboardingConfigInternal",
      I: n.AKO,
      O: n.C7S,
      kind: s.MethodKind.Unary
    },
    createTeamCreditGrantInternal: {
      name: "CreateTeamCreditGrantInternal",
      I: n.BEg,
      O: n.Rz7,
      kind: s.MethodKind.Unary
    },
    listTeamCreditGrantsInternal: {
      name: "ListTeamCreditGrantsInternal",
      I: n.CAc,
      O: n.GYk,
      kind: s.MethodKind.Unary
    },
    createTeamsTrialV2ReferralCode: {
      name: "CreateTeamsTrialV2ReferralCode",
      I: n.cj_,
      O: n.SyP,
      kind: s.MethodKind.Unary
    },
    getTeamAnalytics: {
      name: "GetTeamAnalytics",
      I: n.FFq,
      O: n.LLA,
      kind: s.MethodKind.Unary
    },
    getUserAnalytics: {
      name: "GetUserAnalytics",
      I: n.dcL,
      O: n.n24,
      kind: s.MethodKind.Unary
    },
    getTeamRawData: {
      name: "GetTeamRawData",
      I: n.hUh,
      O: n.dZ5,
      kind: s.MethodKind.Unary
    },
    getClientUsageData: {
      name: "GetClientUsageData",
      I: n.u_0,
      O: n.gHM,
      kind: s.MethodKind.Unary
    },
    getCurrentPeriodUsage: {
      name: "GetCurrentPeriodUsage",
      I: n.Dl4,
      O: n.bO3,
      kind: s.MethodKind.Unary
    },
    useSandBankedReset: {
      name: "UseSandBankedReset",
      I: n.RMZ,
      O: n.rWQ,
      kind: s.MethodKind.Unary
    },
    listSandBankedResets: {
      name: "ListSandBankedResets",
      I: n.pE6,
      O: n.pfj,
      kind: s.MethodKind.Unary
    },
    getSandUsageStatus: {
      name: "GetSandUsageStatus",
      I: n.rAv,
      O: n.Pb2,
      kind: s.MethodKind.Unary
    },
    requestSandSeatTierUpgrade: {
      name: "RequestSandSeatTierUpgrade",
      I: n.W_K,
      O: n.EJm,
      kind: s.MethodKind.Unary
    },
    listBankedUsageResets: {
      name: "ListBankedUsageResets",
      I: n.kCx,
      O: n.izO,
      kind: s.MethodKind.Unary
    },
    redeemTeamBankedUsageReset: {
      name: "RedeemTeamBankedUsageReset",
      I: n.J_n,
      O: n.BLE,
      kind: s.MethodKind.Unary
    },
    redeemUserBankedUsageReset: {
      name: "RedeemUserBankedUsageReset",
      I: n.J_n,
      O: n.BLE,
      kind: s.MethodKind.Unary
    },
    startSandTrial: {
      name: "StartSandTrial",
      I: n.Go7,
      O: n.yuQ,
      kind: s.MethodKind.Unary
    },
    claimSandTrialWithDeviceAttestation: {
      name: "ClaimSandTrialWithDeviceAttestation",
      I: n.yLo,
      O: n.KzH,
      kind: s.MethodKind.Unary
    },
    resetSandTrialDeviceAttestation: {
      name: "ResetSandTrialDeviceAttestation",
      I: n.BXh,
      O: n.nnW,
      kind: s.MethodKind.Unary
    },
    isEligibleForSandTrial: {
      name: "IsEligibleForSandTrial",
      I: n.wfW,
      O: n.q4z,
      kind: s.MethodKind.Unary
    },
    getSandTrialClaimStatus: {
      name: "GetSandTrialClaimStatus",
      I: n.i0h,
      O: n._OB,
      kind: s.MethodKind.Unary
    },
    cancelSandTrial: {
      name: "CancelSandTrial",
      I: n.qu8,
      O: n.of0,
      kind: s.MethodKind.Unary
    },
    getSandAccessStatus: {
      name: "GetSandAccessStatus",
      I: n.o0l,
      O: n.Wxf,
      kind: s.MethodKind.Unary
    },
    shouldShowGrokBotTrainingOptInPopup: {
      name: "ShouldShowGrokBotTrainingOptInPopup",
      I: n.wDH,
      O: n.qq8,
      kind: s.MethodKind.Unary
    },
    markGrokBotTrainingOptInPromptSeen: {
      name: "MarkGrokBotTrainingOptInPromptSeen",
      I: n.UGG,
      O: n.caw,
      kind: s.MethodKind.Unary
    },
    getSandMarketingIdentity: {
      name: "GetSandMarketingIdentity",
      I: n.M2r,
      O: n.Grk,
      kind: s.MethodKind.Unary
    },
    getBonfireStatus: {
      name: "GetBonfireStatus",
      I: n.DrQ,
      O: n.ZhM,
      kind: s.MethodKind.Unary
    },
    createBonfireInvite: {
      name: "CreateBonfireInvite",
      I: n._do,
      O: n.EAb,
      kind: s.MethodKind.Unary
    },
    sendBonfireInvite: {
      name: "SendBonfireInvite",
      I: n.EiN,
      O: n.e0Y,
      kind: s.MethodKind.Unary
    },
    registerSandMachine: {
      name: "RegisterSandMachine",
      I: n.aQT,
      O: n.sHN,
      kind: s.MethodKind.Unary
    },
    listSandMachines: {
      name: "ListSandMachines",
      I: n.yXx,
      O: n.k0O,
      kind: s.MethodKind.Unary
    },
    updateSandMachineLabel: {
      name: "UpdateSandMachineLabel",
      I: n.wJL,
      O: n.IVI,
      kind: s.MethodKind.Unary
    },
    updateSandMachineLocalToolPermission: {
      name: "UpdateSandMachineLocalToolPermission",
      I: n.s1d,
      O: n.eq0,
      kind: s.MethodKind.Unary
    },
    getSandMachineMessagesEnabled: {
      name: "GetSandMachineMessagesEnabled",
      I: n.cnC,
      O: n.cJ_,
      kind: s.MethodKind.Unary
    },
    updateSandMachineMessagesEnabled: {
      name: "UpdateSandMachineMessagesEnabled",
      I: n.dAp,
      O: n.nox,
      kind: s.MethodKind.Unary
    },
    retrySandMessagesPermission: {
      name: "RetrySandMessagesPermission",
      I: n.R8r,
      O: n.pnU,
      kind: s.MethodKind.Unary
    },
    removeSandMachine: {
      name: "RemoveSandMachine",
      I: n.hEd,
      O: n.VbN,
      kind: s.MethodKind.Unary
    },
    requestSandTeamAccess: {
      name: "RequestSandTeamAccess",
      I: n.y_T,
      O: n.yGu,
      kind: s.MethodKind.Unary
    },
    listPendingUserAccessRequests: {
      name: "ListPendingUserAccessRequests",
      I: n._YH,
      O: n._i_,
      kind: s.MethodKind.Unary
    },
    getUsageSignalsProjectionSnapshot: {
      name: "GetUsageSignalsProjectionSnapshot",
      I: l,
      O: m,
      kind: s.MethodKind.Unary
    },
    getPlanInfo: {
      name: "GetPlanInfo",
      I: n.V4G,
      O: n.noV,
      kind: s.MethodKind.Unary
    },
    verifyAppleTransaction: {
      name: "VerifyAppleTransaction",
      I: n.Ll_,
      O: n.rKG,
      kind: s.MethodKind.Unary
    },
    verifyGooglePlayPurchase: {
      name: "VerifyGooglePlayPurchase",
      I: n.rG0,
      O: n.lWs,
      kind: s.MethodKind.Unary
    },
    getGooglePlayBillingAccountId: {
      name: "GetGooglePlayBillingAccountId",
      I: n.wcH,
      O: n.cQ7,
      kind: s.MethodKind.Unary
    },
    inventoryGooglePlayPurchaseTokens: {
      name: "InventoryGooglePlayPurchaseTokens",
      I: n.WCl,
      O: n.GYE,
      kind: s.MethodKind.Unary
    },
    restoreCommerceStorePurchases: {
      name: "RestoreCommerceStorePurchases",
      I: n.Eg0,
      O: n.c6S,
      kind: s.MethodKind.Unary
    },
    inspectGooglePlaySubscriptionInternal: {
      name: "InspectGooglePlaySubscriptionInternal",
      I: n.NNb,
      O: n.Zm8,
      kind: s.MethodKind.Unary
    },
    inspectGooglePlayTransactionsInternal: {
      name: "InspectGooglePlayTransactionsInternal",
      I: n.B5B,
      O: n.bh8,
      kind: s.MethodKind.Unary
    },
    getCursorReviewEntitlement: {
      name: "GetCursorReviewEntitlement",
      I: n.pmk,
      O: n.LwP,
      kind: s.MethodKind.Unary
    },
    searchOriginReviewPeople: {
      name: "SearchOriginReviewPeople",
      I: n.PBS,
      O: n.JZ6,
      kind: s.MethodKind.Unary
    },
    getOriginReviewPreferences: {
      name: "GetOriginReviewPreferences",
      I: n.q9G,
      O: n.MQS,
      kind: s.MethodKind.Unary
    },
    setOriginReviewPreferences: {
      name: "SetOriginReviewPreferences",
      I: n.CLT,
      O: n.q5s,
      kind: s.MethodKind.Unary
    },
    getMergeBotSettings: {
      name: "GetMergeBotSettings",
      I: n._GX,
      O: n.Q50,
      kind: s.MethodKind.Unary
    },
    setMergeBotConsent: {
      name: "SetMergeBotConsent",
      I: n.Ldy,
      O: n.BDC,
      kind: s.MethodKind.Unary
    },
    getPullRequestDraftPreference: {
      name: "GetPullRequestDraftPreference",
      I: n.KN6,
      O: n.sWp,
      kind: s.MethodKind.Unary
    },
    setPullRequestDraftPreference: {
      name: "SetPullRequestDraftPreference",
      I: n.ejY,
      O: n.E0R,
      kind: s.MethodKind.Unary
    },
    getSyncedClientSettings: {
      name: "GetSyncedClientSettings",
      I: n.ody,
      O: n.AhZ,
      kind: s.MethodKind.Unary
    },
    updateSyncedClientSettings: {
      name: "UpdateSyncedClientSettings",
      I: n.jJ,
      O: n.L4Y,
      kind: s.MethodKind.Unary
    },
    syncClientSettings: {
      name: "SyncClientSettings",
      I: n.L7H,
      O: n.jGg,
      kind: s.MethodKind.Unary
    },
    listRepoLearnedRules: {
      name: "ListRepoLearnedRules",
      I: p,
      O: f,
      kind: s.MethodKind.Unary
    },
    removeRepoLearnedRule: {
      name: "RemoveRepoLearnedRule",
      I: g,
      O: _,
      kind: s.MethodKind.Unary
    },
    appendRsiRecord: {
      name: "AppendRsiRecord",
      I: b,
      O: P,
      kind: s.MethodKind.Unary
    },
    getRsiRecord: {
      name: "GetRsiRecord",
      I,
      O: x,
      kind: s.MethodKind.Unary
    },
    listRsiRecords: {
      name: "ListRsiRecords",
      I: v,
      O: R,
      kind: s.MethodKind.Unary
    },
    getRsiSnapshot: {
      name: "GetRsiSnapshot",
      I: E,
      O: k,
      kind: s.MethodKind.Unary
    },
    getRsiAdminStatusInternal: {
      name: "GetRsiAdminStatusInternal",
      I: A,
      O: $,
      kind: s.MethodKind.Unary
    },
    runRsiLoopNowInternal: {
      name: "RunRsiLoopNowInternal",
      I: O,
      O: j,
      kind: s.MethodKind.Unary
    },
    setRsiLoopPausedInternal: {
      name: "SetRsiLoopPausedInternal",
      I: M,
      O: D,
      kind: s.MethodKind.Unary
    },
    getUsageLimitPolicyStatus: {
      name: "GetUsageLimitPolicyStatus",
      I: n.qhH,
      O: n.I_D,
      kind: s.MethodKind.Unary
    },
    getUsageLimitStatusAndActiveGrants: {
      name: "GetUsageLimitStatusAndActiveGrants",
      I: n.S9t,
      O: n._ty,
      kind: s.MethodKind.Unary
    },
    getCreditGrantsBalance: {
      name: "GetCreditGrantsBalance",
      I: n.MjR,
      O: n.CkD,
      kind: s.MethodKind.Unary
    },
    getClientVisibleCreditGrants: {
      name: "GetClientVisibleCreditGrants",
      I: n.V8e,
      O: n.Pqo,
      kind: s.MethodKind.Unary
    },
    getAdvancedAnalyticsEnabled: {
      name: "GetAdvancedAnalyticsEnabled",
      I: n.P1T,
      O: n.VxL,
      kind: s.MethodKind.Unary
    },
    getTokenUsage: {
      name: "GetTokenUsage",
      I: n.SK5,
      O: n.I9h,
      kind: s.MethodKind.Unary
    },
    validateBedrockIamRole: {
      name: "ValidateBedrockIamRole",
      I: n.Z8m,
      O: n.mzW,
      kind: s.MethodKind.Unary
    },
    getTeamSpend: {
      name: "GetTeamSpend",
      I: n.$Sc,
      O: n.R2E,
      kind: s.MethodKind.Unary
    },
    getTeamSeatUpgradeRecommendations: {
      name: "GetTeamSeatUpgradeRecommendations",
      I: n.Y$T,
      O: n.o35,
      kind: s.MethodKind.Unary
    },
    getPendingSeatTierUpgradeRequests: {
      name: "GetPendingSeatTierUpgradeRequests",
      I: n.qWG,
      O: n.YJY,
      kind: s.MethodKind.Unary
    },
    getTeamSeatCapacity: {
      name: "GetTeamSeatCapacity",
      I: n.e6P,
      O: n.SuY,
      kind: s.MethodKind.Unary
    },
    startMergedTeamSeatChange: {
      name: "StartMergedTeamSeatChange",
      I: n.IFS,
      O: n.UpX,
      kind: s.MethodKind.Unary
    },
    changeMergedTeamSeat: {
      name: "ChangeMergedTeamSeat",
      I: n._1N,
      O: n.yPU,
      kind: s.MethodKind.Unary
    },
    getMergedTeamSeatChanges: {
      name: "GetMergedTeamSeatChanges",
      I: n.JOC,
      O: n.DOt,
      kind: s.MethodKind.Unary
    },
    getXaiTeamPlanManagement: {
      name: "GetXaiTeamPlanManagement",
      I: n.jq0,
      O: n.f1t,
      kind: s.MethodKind.Unary
    },
    changeXaiTeamPlan: {
      name: "ChangeXaiTeamPlan",
      I: n.IV$,
      O: n.yW5,
      kind: s.MethodKind.Unary
    },
    getCurrentBillingCycle: {
      name: "GetCurrentBillingCycle",
      I: n.yI7,
      O: n.cTj,
      kind: s.MethodKind.Unary
    },
    getMonthlyBillingCycle: {
      name: "GetMonthlyBillingCycle",
      I: n.iaP,
      O: n.KuC,
      kind: s.MethodKind.Unary
    },
    getBugbotSettings: {
      name: "GetBugbotSettings",
      I: n.Ioc,
      O: n.GNy,
      kind: s.MethodKind.Unary
    },
    getBugbotAnalyticsV2: {
      name: "GetBugbotAnalyticsV2",
      I: n.JWI,
      O: n.NXG,
      kind: s.MethodKind.Unary
    },
    getBugBotPRAnalytics: {
      name: "GetBugBotPRAnalytics",
      I: n.Jns,
      O: n.Fkp,
      kind: s.MethodKind.Unary
    },
    getGithubInstallations: {
      name: "GetGithubInstallations",
      I: n.kcC,
      O: n.UYU,
      kind: s.MethodKind.Unary
    },
    getGithubInstallationTenantGrants: {
      name: "GetGithubInstallationTenantGrants",
      I: n.Owv,
      O: n.yq_,
      kind: s.MethodKind.Unary
    },
    grantGithubInstallationTenant: {
      name: "GrantGithubInstallationTenant",
      I: n.hvD,
      O: n.p84,
      kind: s.MethodKind.Unary
    },
    revokeGithubInstallationTenant: {
      name: "RevokeGithubInstallationTenant",
      I: n.Rig,
      O: n.neC,
      kind: s.MethodKind.Unary
    },
    getBugbotSuggestedRepos: {
      name: "GetBugbotSuggestedRepos",
      I: n.nTs,
      O: n.ZJ6,
      kind: s.MethodKind.Unary
    },
    getSecurityAgentSuggestedRepos: {
      name: "GetSecurityAgentSuggestedRepos",
      I: n.ZPw,
      O: n.ZOX,
      kind: s.MethodKind.Unary
    },
    getScmConnectionStatus: {
      name: "GetScmConnectionStatus",
      I: n.Lys,
      O: n.VS9,
      kind: s.MethodKind.Unary
    },
    getGithubRepoAccessStatus: {
      name: "GetGithubRepoAccessStatus",
      I: n.XT3,
      O: n.HyV,
      kind: s.MethodKind.Unary
    },
    getScmConnectionStatuses: {
      name: "GetScmConnectionStatuses",
      I: n.tJ9,
      O: n.lIF,
      kind: s.MethodKind.Unary
    },
    getInstallationRepos: {
      name: "GetInstallationRepos",
      I: n.L$Y,
      O: n.ljc,
      kind: s.MethodKind.Unary
    },
    fetchAllInstallationRepos: {
      name: "FetchAllInstallationRepos",
      I: n.UfC,
      O: n.gJO,
      kind: s.MethodKind.Unary
    },
    getInstallationGithubUsers: {
      name: "GetInstallationGithubUsers",
      I: n.toQ,
      O: n.P4d,
      kind: s.MethodKind.Unary
    },
    getUserAdminOrganizations: {
      name: "GetUserAdminOrganizations",
      I: n._V,
      O: n.KLX,
      kind: s.MethodKind.Unary
    },
    getTeamGithubUsers: {
      name: "GetTeamGithubUsers",
      I: n.yk8,
      O: n.ecN,
      kind: s.MethodKind.Unary
    },
    addGithubUsersToTeam: {
      name: "AddGithubUsersToTeam",
      I: n.gMg,
      O: n.yD7,
      kind: s.MethodKind.Unary
    },
    resolveGithubIdentities: {
      name: "ResolveGithubIdentities",
      I: n.lpG,
      O: n.LlT,
      kind: s.MethodKind.Unary
    },
    getUserPullRequests: {
      name: "GetUserPullRequests",
      I: n.Mq,
      O: n.M2w,
      kind: s.MethodKind.Unary
    },
    getUserReviewRequests: {
      name: "GetUserReviewRequests",
      I: n.Jjk,
      O: n.$DS,
      kind: s.MethodKind.Unary
    },
    getPullRequestForBranch: {
      name: "GetPullRequestForBranch",
      I: n.xGV,
      O: n.$EH,
      kind: s.MethodKind.Unary
    },
    updateGithubRepoSettings: {
      name: "UpdateGithubRepoSettings",
      I: n.NZ_,
      O: n.l8$,
      kind: s.MethodKind.Unary
    },
    updateGithubInstallationSettings: {
      name: "UpdateGithubInstallationSettings",
      I: n.J9i,
      O: n.T1W,
      kind: s.MethodKind.Unary
    },
    updateAllGithubRepoSettings: {
      name: "UpdateAllGithubRepoSettings",
      I: n.CNn,
      O: n.QOJ,
      kind: s.MethodKind.Unary
    },
    updateGithubInstallationTeamScope: {
      name: "UpdateGithubInstallationTeamScope",
      I: n.hxG,
      O: n.Lre,
      kind: s.MethodKind.Unary
    },
    updateSelfGithubAllowlist: {
      name: "UpdateSelfGithubAllowlist",
      I: n.pNh,
      O: n.vTx,
      kind: s.MethodKind.Unary
    },
    getTeamBugbotSettings: {
      name: "GetTeamBugbotSettings",
      I: n.LRN,
      O: n.Lg7,
      kind: s.MethodKind.Unary
    },
    updateTeamBugbotSettings: {
      name: "UpdateTeamBugbotSettings",
      I: n.sNl,
      O: n.Mlf,
      kind: s.MethodKind.Unary
    },
    migrateTeamBugbotToUsageBasedBilling: {
      name: "MigrateTeamBugbotToUsageBasedBilling",
      I: n.LIs,
      O: n.lW1,
      kind: s.MethodKind.Unary
    },
    getBugbotMergedPrScanSummary: {
      name: "GetBugbotMergedPrScanSummary",
      I: n.wS2,
      O: n.sWv,
      kind: s.MethodKind.Unary
    },
    getBugbotMode: {
      name: "GetBugbotMode",
      I: n.sVJ,
      O: n.YHh,
      kind: s.MethodKind.Unary
    },
    updateBugbotMode: {
      name: "UpdateBugbotMode",
      I: n.NQP,
      O: n.LK4,
      kind: s.MethodKind.Unary
    },
    getBugBotProUserMode: {
      name: "GetBugBotProUserMode",
      I: n.meH,
      O: n.ym8,
      kind: s.MethodKind.Unary
    },
    updateBugBotProUserMode: {
      name: "UpdateBugBotProUserMode",
      I: n.dj5,
      O: n.PFI,
      kind: s.MethodKind.Unary
    },
    getBugbotUserSettings: {
      name: "GetBugbotUserSettings",
      I: n.BHX,
      O: n.DLm,
      kind: s.MethodKind.Unary
    },
    updateBugbotUserSettings: {
      name: "UpdateBugbotUserSettings",
      I: n.QWx,
      O: n.Qsl,
      kind: s.MethodKind.Unary
    },
    getFullSelfDrivingUserSettings: {
      name: "GetFullSelfDrivingUserSettings",
      I: n.y$W,
      O: n.Ik0,
      kind: s.MethodKind.Unary
    },
    updateFullSelfDrivingUserSettings: {
      name: "UpdateFullSelfDrivingUserSettings",
      I: n.DrI,
      O: n.BRX,
      kind: s.MethodKind.Unary
    },
    listFullSelfDrivingRepoSettings: {
      name: "ListFullSelfDrivingRepoSettings",
      I: n.LdP,
      O: n.l1H,
      kind: s.MethodKind.Unary
    },
    setFullSelfDrivingRepoEnabled: {
      name: "SetFullSelfDrivingRepoEnabled",
      I: n.V6X,
      O: n.tJA,
      kind: s.MethodKind.Unary
    },
    getFullSelfDrivingTeamSettings: {
      name: "GetFullSelfDrivingTeamSettings",
      I: n.i20,
      O: n.M7A,
      kind: s.MethodKind.Unary
    },
    updateFullSelfDrivingTeamSettings: {
      name: "UpdateFullSelfDrivingTeamSettings",
      I: n.zuZ,
      O: n.Dfi,
      kind: s.MethodKind.Unary
    },
    listFullSelfDrivingTeamRepoSettings: {
      name: "ListFullSelfDrivingTeamRepoSettings",
      I: n.CXL,
      O: n.ybH,
      kind: s.MethodKind.Unary
    },
    setFullSelfDrivingTeamRepoEnabled: {
      name: "SetFullSelfDrivingTeamRepoEnabled",
      I: n.YBO,
      O: n.Soi,
      kind: s.MethodKind.Unary
    },
    listFullSelfDrivingActiveAgents: {
      name: "ListFullSelfDrivingActiveAgents",
      I: n.KHx,
      O: n.GPC,
      kind: s.MethodKind.Unary
    },
    listFullSelfDrivingTeamActiveAgents: {
      name: "ListFullSelfDrivingTeamActiveAgents",
      I: n.Hrn,
      O: n.pxf,
      kind: s.MethodKind.Unary
    },
    updateFullSelfDrivingPrConfig: {
      name: "UpdateFullSelfDrivingPrConfig",
      I: n.DWR,
      O: n.pGw,
      kind: s.MethodKind.Unary
    },
    getBugBotProUserSettings: {
      name: "GetBugBotProUserSettings",
      I: n.I6A,
      O: n.aBI,
      kind: s.MethodKind.Unary
    },
    updateBugBotProUserSettings: {
      name: "UpdateBugBotProUserSettings",
      I: n.hSh,
      O: n.P8G,
      kind: s.MethodKind.Unary
    },
    migrateBugBotProUserToUsageBasedBilling: {
      name: "MigrateBugBotProUserToUsageBasedBilling",
      I: n.E3$,
      O: n.MPB,
      kind: s.MethodKind.Unary
    },
    getGlassEarlyPreviewEnrollment: {
      name: "GetGlassEarlyPreviewEnrollment",
      I: n.Ryr,
      O: n.FPs,
      kind: s.MethodKind.Unary
    },
    enrollInGlassEarlyPreview: {
      name: "EnrollInGlassEarlyPreview",
      I: n.Cul,
      O: n.Y9v,
      kind: s.MethodKind.Unary
    },
    unenrollFromGlassEarlyPreview: {
      name: "UnenrollFromGlassEarlyPreview",
      I: n.UHP,
      O: n.UBK,
      kind: s.MethodKind.Unary
    },
    recordBugbotDeeplinkEvent: {
      name: "RecordBugbotDeeplinkEvent",
      I: n.sDp,
      O: n.Uj4,
      kind: s.MethodKind.Unary
    },
    recordBugbotDeeplinkEventUnauthenticated: {
      name: "RecordBugbotDeeplinkEventUnauthenticated",
      I: n.sDp,
      O: n.Uj4,
      kind: s.MethodKind.Unary
    },
    revokeBugBotLicenses: {
      name: "RevokeBugBotLicenses",
      I: n.H5R,
      O: n.Tcn,
      kind: s.MethodKind.Unary
    },
    revokeUserBugbotLicense: {
      name: "RevokeUserBugbotLicense",
      I: n.Z$K,
      O: n.FOE,
      kind: s.MethodKind.Unary
    },
    startBugbotBackfillLearning: {
      name: "StartBugbotBackfillLearning",
      I: n.NS4,
      O: n.xx6,
      kind: s.MethodKind.Unary
    },
    getBugbotBackfillStatus: {
      name: "GetBugbotBackfillStatus",
      I: n.Nux,
      O: n.hxv,
      kind: s.MethodKind.Unary
    },
    setSlackAuth: {
      name: "SetSlackAuth",
      I: n.WKP,
      O: n.mys,
      kind: s.MethodKind.Unary
    },
    getSlackTeamSettings: {
      name: "GetSlackTeamSettings",
      I: n.YAE,
      O: n.YyD,
      kind: s.MethodKind.Unary
    },
    updateSlackTeamSettings: {
      name: "UpdateSlackTeamSettings",
      I: n.HFD,
      O: n.Fr4,
      kind: s.MethodKind.Unary
    },
    getSlackSettings: {
      name: "GetSlackSettings",
      I: n.tcG,
      O: n.no,
      kind: s.MethodKind.Unary
    },
    getDeploymentIntegrationAvailability: {
      name: "GetDeploymentIntegrationAvailability",
      I: n.aPV,
      O: n.w_Q,
      kind: s.MethodKind.Unary
    },
    getSlackModelOptions: {
      name: "GetSlackModelOptions",
      I: n.lym,
      O: n.ddf,
      kind: s.MethodKind.Unary
    },
    getSlackInstallUrl: {
      name: "GetSlackInstallUrl",
      I: n.St,
      O: n.QKj,
      kind: s.MethodKind.Unary
    },
    getSlackInstallUrlPublic: {
      name: "GetSlackInstallUrlPublic",
      I: n.Xoe,
      O: n.ZoZ,
      kind: s.MethodKind.Unary
    },
    getSlackInstallUrlPublicWithUserScopes: {
      name: "GetSlackInstallUrlPublicWithUserScopes",
      I: n.Vqj,
      O: n.pty,
      kind: s.MethodKind.Unary
    },
    getFilteredUsageEvents: {
      name: "GetFilteredUsageEvents",
      I: n.FHO,
      O: n.TpA,
      kind: s.MethodKind.Unary
    },
    getAggregatedUsageEvents: {
      name: "GetAggregatedUsageEvents",
      I: n.l4W,
      O: n.JZY,
      kind: s.MethodKind.Unary
    },
    getAuditLogs: {
      name: "GetAuditLogs",
      I: n.Mq$,
      O: n.mTp,
      kind: s.MethodKind.Unary
    },
    getOrganizationAuditLogs: {
      name: "GetOrganizationAuditLogs",
      I: n.dIX,
      O: n.fIK,
      kind: s.MethodKind.Unary
    },
    listTeamDataExports: {
      name: "ListTeamDataExports",
      I: n.qC3,
      O: n.wHV,
      kind: s.MethodKind.Unary
    },
    createTeamDataExportDownloadUrl: {
      name: "CreateTeamDataExportDownloadUrl",
      I: n.eW$,
      O: n.eQk,
      kind: s.MethodKind.Unary
    },
    getUserPrivacyMode: {
      name: "GetUserPrivacyMode",
      I: n.KoG,
      O: n.mWk,
      kind: s.MethodKind.Unary
    },
    setUserPrivacyMode: {
      name: "SetUserPrivacyMode",
      I: n.eWf,
      O: n.Wig,
      kind: s.MethodKind.Unary
    },
    webAcknowledgeGracePeriodDisclaimer: {
      name: "WebAcknowledgeGracePeriodDisclaimer",
      I: n.sRz,
      O: n.mEf,
      kind: s.MethodKind.Unary
    },
    skipPrivacyModeGracePeriod: {
      name: "SkipPrivacyModeGracePeriod",
      I: n.jOB,
      O: n.dGI,
      kind: s.MethodKind.Unary
    },
    needsPrivacyModeMigration: {
      name: "NeedsPrivacyModeMigration",
      I: n.WWi,
      O: n.U5k,
      kind: s.MethodKind.Unary
    },
    updateTeamPrivacyModeMigrationOptOut: {
      name: "UpdateTeamPrivacyModeMigrationOptOut",
      I: n.es2,
      O: n.CKk,
      kind: s.MethodKind.Unary
    },
    shareConversation: {
      name: "ShareConversation",
      I: n.kHo,
      O: n.QhI,
      kind: s.MethodKind.Unary
    },
    getSharedConversation: {
      name: "GetSharedConversation",
      I: n.MyJ,
      O: n.mvz,
      kind: s.MethodKind.Unary
    },
    getPublicSharedConversation: {
      name: "GetPublicSharedConversation",
      I: n.ROu,
      O: n.xfP,
      kind: s.MethodKind.Unary
    },
    listSharedConversations: {
      name: "ListSharedConversations",
      I: n.R28,
      O: n.nMz,
      kind: s.MethodKind.Unary
    },
    deleteSharedConversation: {
      name: "DeleteSharedConversation",
      I: n.FUz,
      O: n.Z36,
      kind: s.MethodKind.Unary
    },
    updateSharedConversationVisibility: {
      name: "UpdateSharedConversationVisibility",
      I: n.NPW,
      O: n.JAL,
      kind: s.MethodKind.Unary
    },
    shareCanvas: {
      name: "ShareCanvas",
      I: n.tE3,
      O: n.lL7,
      kind: s.MethodKind.Unary
    },
    getSharedCanvas: {
      name: "GetSharedCanvas",
      I: n.JF,
      O: n.B2G,
      kind: s.MethodKind.Unary
    },
    getPublicSharedCanvas: {
      name: "GetPublicSharedCanvas",
      I: n.aE$,
      O: n.OCF,
      kind: s.MethodKind.Unary
    },
    listSharedCanvases: {
      name: "ListSharedCanvases",
      I: n.xos,
      O: n.xTz,
      kind: s.MethodKind.Unary
    },
    deleteSharedCanvas: {
      name: "DeleteSharedCanvas",
      I: n.shm,
      O: n._Md,
      kind: s.MethodKind.Unary
    },
    lookupSharedCanvasByKey: {
      name: "LookupSharedCanvasByKey",
      I: n.ptC,
      O: n.$bK,
      kind: s.MethodKind.Unary
    },
    listUserCanvases: {
      name: "ListUserCanvases",
      I: n.P_7,
      O: n.H1r,
      kind: s.MethodKind.Unary
    },
    getCanvasMetadata: {
      name: "GetCanvasMetadata",
      I: n.zyT,
      O: n.hcJ,
      kind: s.MethodKind.Unary
    },
    getCanvasPayload: {
      name: "GetCanvasPayload",
      I: n.gDx,
      O: n.K6f,
      kind: s.MethodKind.Unary
    },
    refreshCanvasSources: {
      name: "RefreshCanvasSources",
      I: n.TGZ,
      O: n.d6S,
      kind: s.MethodKind.Unary
    },
    runCanvasConnectorAction: {
      name: "RunCanvasConnectorAction",
      I: n.Ebu,
      O: n.E7l,
      kind: s.MethodKind.Unary
    },
    getCanvasPageBrand: {
      name: "GetCanvasPageBrand",
      I: n.SNZ,
      O: n.wEJ,
      kind: s.MethodKind.Unary
    },
    getDocumentPayload: {
      name: "GetDocumentPayload",
      I: n.r$m,
      O: n.ZB$,
      kind: s.MethodKind.Unary
    },
    setCanvasVisibility: {
      name: "SetCanvasVisibility",
      I: n.uKx,
      O: n._w7,
      kind: s.MethodKind.Unary
    },
    getCanvasShareAccess: {
      name: "GetCanvasShareAccess",
      I: n.dAQ,
      O: n.$sY,
      kind: s.MethodKind.Unary
    },
    updateCanvasShareAccess: {
      name: "UpdateCanvasShareAccess",
      I: n.YG,
      O: n.uNt,
      kind: s.MethodKind.Unary
    },
    setPageAddress: {
      name: "SetPageAddress",
      I: n.rhB,
      O: n.p5Q,
      kind: s.MethodKind.Unary
    },
    deleteCanvas: {
      name: "DeleteCanvas",
      I: n.J5_,
      O: n.xQH,
      kind: s.MethodKind.Unary
    },
    renameCanvas: {
      name: "RenameCanvas",
      I: n.k5b,
      O: n.icQ,
      kind: s.MethodKind.Unary
    },
    getTeamSharedConversationSettings: {
      name: "GetTeamSharedConversationSettings",
      I: n._b6,
      O: n.yTb,
      kind: s.MethodKind.Unary
    },
    updateTeamSharedConversationSettings: {
      name: "UpdateTeamSharedConversationSettings",
      I: n.TIw,
      O: n.rRJ,
      kind: s.MethodKind.Unary
    },
    getTeamSharedCanvasSettings: {
      name: "GetTeamSharedCanvasSettings",
      I: n.LWu,
      O: n.fZU,
      kind: s.MethodKind.Unary
    },
    updateTeamSharedCanvasSettings: {
      name: "UpdateTeamSharedCanvasSettings",
      I: n.iXm,
      O: n.k8Q,
      kind: s.MethodKind.Unary
    },
    getTeamProjectsSettings: {
      name: "GetTeamProjectsSettings",
      I: n.aJE,
      O: n.SRO,
      kind: s.MethodKind.Unary
    },
    updateTeamProjectsSettings: {
      name: "UpdateTeamProjectsSettings",
      I: n.xvP,
      O: n.nhk,
      kind: s.MethodKind.Unary
    },
    getTeamAppsSettings: {
      name: "GetTeamAppsSettings",
      I: n.OmT,
      O: n.GoT,
      kind: s.MethodKind.Unary
    },
    updateTeamAppsSettings: {
      name: "UpdateTeamAppsSettings",
      I: n.da6,
      O: n.zwl,
      kind: s.MethodKind.Unary
    },
    getTeamAppsReviewRules: {
      name: "GetTeamAppsReviewRules",
      I: n.CNw,
      O: n.iR7,
      kind: s.MethodKind.Unary
    },
    listTeamAppsReviewRulesVersions: {
      name: "ListTeamAppsReviewRulesVersions",
      I: n.pbO,
      O: n.xim,
      kind: s.MethodKind.Unary
    },
    getTeamAppsReviewRulesVersion: {
      name: "GetTeamAppsReviewRulesVersion",
      I: n.kfB,
      O: n.iwy,
      kind: s.MethodKind.Unary
    },
    saveTeamAppsReviewRules: {
      name: "SaveTeamAppsReviewRules",
      I: n.XRd,
      O: n.joE,
      kind: s.MethodKind.Unary
    },
    activateTeamAppsReviewRulesVersion: {
      name: "ActivateTeamAppsReviewRulesVersion",
      I: n.fdV,
      O: n.VVb,
      kind: s.MethodKind.Unary
    },
    getTeamPublicProfileSettings: {
      name: "GetTeamPublicProfileSettings",
      I: n.K$9,
      O: n.yVw,
      kind: s.MethodKind.Unary
    },
    updateTeamPublicProfileSettings: {
      name: "UpdateTeamPublicProfileSettings",
      I: n.VIg,
      O: n.lxh,
      kind: s.MethodKind.Unary
    },
    getTeamSandShareBotExportSettings: {
      name: "GetTeamSandShareBotExportSettings",
      I: n.Goo,
      O: n.yut,
      kind: s.MethodKind.Unary
    },
    updateTeamSandShareBotExportSettings: {
      name: "UpdateTeamSandShareBotExportSettings",
      I: n.D$M,
      O: n.zGC,
      kind: s.MethodKind.Unary
    },
    updateTeamGrokBotCapabilities: {
      name: "UpdateTeamGrokBotCapabilities",
      I: n.ybT,
      O: n.y$h,
      kind: s.MethodKind.Unary
    },
    getTeamSandHibernatedOwnerVmTerminationSettings: {
      name: "GetTeamSandHibernatedOwnerVmTerminationSettings",
      I: n.W2U,
      O: n.iSU,
      kind: s.MethodKind.Unary
    },
    updateTeamSandHibernatedOwnerVmTerminationSettings: {
      name: "UpdateTeamSandHibernatedOwnerVmTerminationSettings",
      I: n.BMC,
      O: n.jK0,
      kind: s.MethodKind.Unary
    },
    getTeamDataRetentionPolicy: {
      name: "GetTeamDataRetentionPolicy",
      I: n.ZvO,
      O: n.bhm,
      kind: s.MethodKind.Unary
    },
    updateTeamDataRetentionPolicy: {
      name: "UpdateTeamDataRetentionPolicy",
      I: n.bLK,
      O: n.YbK,
      kind: s.MethodKind.Unary
    },
    getTeamGrokBotSlackWorkspaceAccess: {
      name: "GetTeamGrokBotSlackWorkspaceAccess",
      I: n.w0A,
      O: n.i3T,
      kind: s.MethodKind.Unary
    },
    setTeamGrokBotSlackWorkspaceAccess: {
      name: "SetTeamGrokBotSlackWorkspaceAccess",
      I: n.UwA,
      O: n.skD,
      kind: s.MethodKind.Unary
    },
    listTeamGrokBotDefaultAgents: {
      name: "ListTeamGrokBotDefaultAgents",
      I: n.S8L,
      O: n.ayS,
      kind: s.MethodKind.Unary
    },
    setTeamGrokBotDefaultAudience: {
      name: "SetTeamGrokBotDefaultAudience",
      I: n.GP0,
      O: n.qN3,
      kind: s.MethodKind.Unary
    },
    listTeamGrokBotAgentAccess: {
      name: "ListTeamGrokBotAgentAccess",
      I: n.gDB,
      O: n.sL8,
      kind: s.MethodKind.Unary
    },
    setTeamGrokBotAgentAccess: {
      name: "SetTeamGrokBotAgentAccess",
      I: n.Emz,
      O: n.yR0,
      kind: s.MethodKind.Unary
    },
    listTeamGrokBotAccessTeams: {
      name: "ListTeamGrokBotAccessTeams",
      I: n.tI0,
      O: n.dnO,
      kind: s.MethodKind.Unary
    },
    previewTeamGrokBotAgentTransfer: {
      name: "PreviewTeamGrokBotAgentTransfer",
      I: n.xwV,
      O: n.X_4,
      kind: s.MethodKind.Unary
    },
    transferTeamGrokBotAgents: {
      name: "TransferTeamGrokBotAgents",
      I: n.kX8,
      O: n.uOW,
      kind: s.MethodKind.Unary
    },
    getTeamGrokBotAgentTransfers: {
      name: "GetTeamGrokBotAgentTransfers",
      I: n.yFZ,
      O: n.g0E,
      kind: s.MethodKind.Unary
    },
    listTeamGrokBotTransferDestinations: {
      name: "ListTeamGrokBotTransferDestinations",
      I: n.lxN,
      O: n.FST,
      kind: s.MethodKind.Unary
    },
    getTeamSmartAutoSettings: {
      name: "GetTeamSmartAutoSettings",
      I: n.WjG,
      O: n.OBF,
      kind: s.MethodKind.Unary
    },
    updateTeamSmartAutoSettings: {
      name: "UpdateTeamSmartAutoSettings",
      I: n.Xtc,
      O: n.bIg,
      kind: s.MethodKind.Unary
    },
    getTeamPromptCachingSettings: {
      name: "GetTeamPromptCachingSettings",
      I: n.H1L,
      O: n.P8_,
      kind: s.MethodKind.Unary
    },
    updateTeamPromptCachingSettings: {
      name: "UpdateTeamPromptCachingSettings",
      I: n.omy,
      O: n.wgB,
      kind: s.MethodKind.Unary
    },
    resetTeamAgentRunModeToAutoReview: {
      name: "ResetTeamAgentRunModeToAutoReview",
      I: n.L2q,
      O: n.Jiu,
      kind: s.MethodKind.Unary
    },
    getUserSmartAutoSettings: {
      name: "GetUserSmartAutoSettings",
      I: n.c$y,
      O: n.cHR,
      kind: s.MethodKind.Unary
    },
    updateUserSmartAutoSettings: {
      name: "UpdateUserSmartAutoSettings",
      I: n.ZVF,
      O: n.zri,
      kind: s.MethodKind.Unary
    },
    getTeamBackgroundAgentSettings: {
      name: "GetTeamBackgroundAgentSettings",
      I: n.fQ,
      O: n.bNb,
      kind: s.MethodKind.Unary
    },
    getTeamGrokBotPublishedWorkerImage: {
      name: "GetTeamGrokBotPublishedWorkerImage",
      I: n.aKS,
      O: n.e8,
      kind: s.MethodKind.Unary
    },
    updateTeamBackgroundAgentSettings: {
      name: "UpdateTeamBackgroundAgentSettings",
      I: n.QRZ,
      O: n.Iz5,
      kind: s.MethodKind.Unary
    },
    listTeamGrokBotCustomerHostedWorkers: {
      name: "ListTeamGrokBotCustomerHostedWorkers",
      I: n.fSk,
      O: n.dkb,
      kind: s.MethodKind.Unary
    },
    getRepoSourcePreference: {
      name: "GetRepoSourcePreference",
      I: n.qc8,
      O: n.Mtj,
      kind: s.MethodKind.Unary
    },
    updateUserRepoSourcePreference: {
      name: "UpdateUserRepoSourcePreference",
      I: n.G6u,
      O: n._E_,
      kind: s.MethodKind.Unary
    },
    updateTeamRepoSourcePreference: {
      name: "UpdateTeamRepoSourcePreference",
      I: n.gez,
      O: n.MYI,
      kind: s.MethodKind.Unary
    },
    resolvePrCreationForge: {
      name: "ResolvePrCreationForge",
      I: n.OaX,
      O: n.MX_,
      kind: s.MethodKind.Unary
    },
    revokeTeamInviteLink: {
      name: "RevokeTeamInviteLink",
      I: n.yKm,
      O: n.mmN,
      kind: s.MethodKind.Unary
    },
    listTeamInviteLinks: {
      name: "ListTeamInviteLinks",
      I: n.$WS,
      O: n.Rc0,
      kind: s.MethodKind.Unary
    },
    listTeamPendingInvites: {
      name: "ListTeamPendingInvites",
      I: n.E7o,
      O: n.MLT,
      kind: s.MethodKind.Unary
    },
    revokeTeamPendingInvite: {
      name: "RevokeTeamPendingInvite",
      I: n.BaU,
      O: n.tRU,
      kind: s.MethodKind.Unary
    },
    resendTeamPendingInvite: {
      name: "ResendTeamPendingInvite",
      I: n.Y53,
      O: n.Ip9,
      kind: s.MethodKind.Unary
    },
    updateUserName: {
      name: "UpdateUserName",
      I: n.bjc,
      O: n.lLB,
      kind: s.MethodKind.Unary
    },
    uploadUserProfilePicture: {
      name: "UploadUserProfilePicture",
      I: n.J3_,
      O: n.jzZ,
      kind: s.MethodKind.Unary
    },
    updateUserProfilePicture: {
      name: "UpdateUserProfilePicture",
      I: n.hLX,
      O: n.lYk,
      kind: s.MethodKind.Unary
    },
    listInvoices: {
      name: "ListInvoices",
      I: n.WXZ,
      O: n.YeS,
      kind: s.MethodKind.Unary
    },
    listUnifiedInvoices: {
      name: "ListUnifiedInvoices",
      I: n.sAj,
      O: n.eD4,
      kind: s.MethodKind.Unary
    },
    getComplatCreditBalance: {
      name: "GetComplatCreditBalance",
      I: n.Hdt,
      O: n.F9z,
      kind: s.MethodKind.Unary
    },
    listBlockingCheckoutInvoices: {
      name: "ListBlockingCheckoutInvoices",
      I: n.hHX,
      O: n.D7O,
      kind: s.MethodKind.Unary
    },
    listPayableTeamInvoices: {
      name: "ListPayableTeamInvoices",
      I: n.Z_i,
      O: n.jiy,
      kind: s.MethodKind.Unary
    },
    listUnpaidUsageInvoices: {
      name: "ListUnpaidUsageInvoices",
      I: n.QBt,
      O: n.SQ3,
      kind: s.MethodKind.Unary
    },
    getRemainingRefunds: {
      name: "GetRemainingRefunds",
      I: n.Xdv,
      O: n.hzd,
      kind: s.MethodKind.Unary
    },
    getServiceAccountSpendLimit: {
      name: "GetServiceAccountSpendLimit",
      I: n.f_r,
      O: n.bJx,
      kind: s.MethodKind.Unary
    },
    setServiceAccountSpendLimit: {
      name: "SetServiceAccountSpendLimit",
      I: n.bkm,
      O: n.Vau,
      kind: s.MethodKind.Unary
    },
    setUserHardLimit: {
      name: "SetUserHardLimit",
      I: n.H16,
      O: n.Tw9,
      kind: s.MethodKind.Unary
    },
    setUserMonthlyLimit: {
      name: "SetUserMonthlyLimit",
      I: n.lEN,
      O: n.Z1Y,
      kind: s.MethodKind.Unary
    },
    toggleMarketingEmailOpt: {
      name: "ToggleMarketingEmailOpt",
      I: n.bQB,
      O: n.Z6E,
      kind: s.MethodKind.Unary
    },
    getMarketingEmailOpt: {
      name: "GetMarketingEmailOpt",
      I: n.fZH,
      O: n.hBo,
      kind: s.MethodKind.Unary
    },
    getGlobalLeaderboardOptIn: {
      name: "GetGlobalLeaderboardOptIn",
      I: n.A9x,
      O: n.u01,
      kind: s.MethodKind.Unary
    },
    setGlobalLeaderboardOptIn: {
      name: "SetGlobalLeaderboardOptIn",
      I: n.AB3,
      O: n.IXm,
      kind: s.MethodKind.Unary
    },
    createTeamApiKey: {
      name: "CreateTeamApiKey",
      I: n._C2,
      O: n.Mdl,
      kind: s.MethodKind.Unary
    },
    revokeTeamApiKey: {
      name: "RevokeTeamApiKey",
      I: n._Rg,
      O: n.ubM,
      kind: s.MethodKind.Unary
    },
    listTeamApiKeys: {
      name: "ListTeamApiKeys",
      I: n.dMs,
      O: n.Tsf,
      kind: s.MethodKind.Unary
    },
    listGrokApiKeys: {
      name: "ListGrokApiKeys",
      I: n.V5S,
      O: n.lc$,
      kind: s.MethodKind.Unary
    },
    getPersonalGrokApiKeyTeam: {
      name: "GetPersonalGrokApiKeyTeam",
      I: n.jWS,
      O: n.J41,
      kind: s.MethodKind.Unary
    },
    listGrokApiKeyAclOptions: {
      name: "ListGrokApiKeyAclOptions",
      I: n.yeW,
      O: n.ANW,
      kind: s.MethodKind.Unary
    },
    getGrokApiKeyAccess: {
      name: "GetGrokApiKeyAccess",
      I: n.Muw,
      O: n.OFG,
      kind: s.MethodKind.Unary
    },
    getGrokApiKeyPropagation: {
      name: "GetGrokApiKeyPropagation",
      I: n.yED,
      O: n._2X,
      kind: s.MethodKind.Unary
    },
    createGrokApiKey: {
      name: "CreateGrokApiKey",
      I: n.m5V,
      O: n.MSw,
      kind: s.MethodKind.Unary
    },
    deleteGrokApiKey: {
      name: "DeleteGrokApiKey",
      I: n.nG3,
      O: n.T78,
      kind: s.MethodKind.Unary
    },
    updateGrokApiKey: {
      name: "UpdateGrokApiKey",
      I: n.laE,
      O: n.TCm,
      kind: s.MethodKind.Unary
    },
    setGrokApiKeyAcls: {
      name: "SetGrokApiKeyAcls",
      I: n.RDD,
      O: n.lmF,
      kind: s.MethodKind.Unary
    },
    rotateGrokApiKey: {
      name: "RotateGrokApiKey",
      I: n.pTw,
      O: n.DZc,
      kind: s.MethodKind.Unary
    },
    getGrokAdminFeatureControls: {
      name: "GetGrokAdminFeatureControls",
      I: n._NS,
      O: n.eTm,
      kind: s.MethodKind.Unary
    },
    updateGrokAdminFeatureControls: {
      name: "UpdateGrokAdminFeatureControls",
      I: n.XKz,
      O: n.H7s,
      kind: s.MethodKind.Unary
    },
    getGrokUserDataControls: {
      name: "GetGrokUserDataControls",
      I: n.eNQ,
      O: n.efP,
      kind: s.MethodKind.Unary
    },
    updateGrokUserDataControls: {
      name: "UpdateGrokUserDataControls",
      I: n.$yS,
      O: n.XrM,
      kind: s.MethodKind.Unary
    },
    getGrokAdminTeamSettings: {
      name: "GetGrokAdminTeamSettings",
      I: n.SuU,
      O: n.yms,
      kind: s.MethodKind.Unary
    },
    updateGrokAdminTeamSettings: {
      name: "UpdateGrokAdminTeamSettings",
      I: n.rCL,
      O: n.nbk,
      kind: s.MethodKind.Unary
    },
    getGrokAdminOrganizationControls: {
      name: "GetGrokAdminOrganizationControls",
      I: n.lxC,
      O: n.nxh,
      kind: s.MethodKind.Unary
    },
    updateGrokAdminOrganizationControls: {
      name: "UpdateGrokAdminOrganizationControls",
      I: n.GKl,
      O: n.GIW,
      kind: s.MethodKind.Unary
    },
    listGrokAdminGuardrails: {
      name: "ListGrokAdminGuardrails",
      I: n.OOr,
      O: n.iwb,
      kind: s.MethodKind.Unary
    },
    getGrokAdminGuardrail: {
      name: "GetGrokAdminGuardrail",
      I: n.nxD,
      O: n.Hux,
      kind: s.MethodKind.Unary
    },
    createGrokAdminGuardrail: {
      name: "CreateGrokAdminGuardrail",
      I: n.ZN0,
      O: n.DdV,
      kind: s.MethodKind.Unary
    },
    updateGrokAdminGuardrail: {
      name: "UpdateGrokAdminGuardrail",
      I: n.uuc,
      O: n.eo$,
      kind: s.MethodKind.Unary
    },
    removeGrokAdminGuardrail: {
      name: "RemoveGrokAdminGuardrail",
      I: n.RJA,
      O: n.$ph,
      kind: s.MethodKind.Unary
    },
    setGrokAdminGuardrailActive: {
      name: "SetGrokAdminGuardrailActive",
      I: n.dhe,
      O: n.PjD,
      kind: s.MethodKind.Unary
    },
    deactivateGrokAdminGuardrail: {
      name: "DeactivateGrokAdminGuardrail",
      I: n.rhR,
      O: n.RVM,
      kind: s.MethodKind.Unary
    },
    getGrokAdminBlockedUrls: {
      name: "GetGrokAdminBlockedUrls",
      I: n.ovf,
      O: n._oI,
      kind: s.MethodKind.Unary
    },
    uploadGrokAdminBlockedUrls: {
      name: "UploadGrokAdminBlockedUrls",
      I: n.fRF,
      O: n.TkS,
      kind: s.MethodKind.Unary
    },
    deleteGrokAdminBlockedUrls: {
      name: "DeleteGrokAdminBlockedUrls",
      I: n.nc6,
      O: n.Hdd,
      kind: s.MethodKind.Unary
    },
    listGrokAdminOnboardingPrompts: {
      name: "ListGrokAdminOnboardingPrompts",
      I: n.cl3,
      O: n.cf9,
      kind: s.MethodKind.Unary
    },
    createGrokAdminOnboardingPrompt: {
      name: "CreateGrokAdminOnboardingPrompt",
      I: n.byf,
      O: n.vXf,
      kind: s.MethodKind.Unary
    },
    updateGrokAdminOnboardingPrompt: {
      name: "UpdateGrokAdminOnboardingPrompt",
      I: n.wOq,
      O: n.M2G,
      kind: s.MethodKind.Unary
    },
    deleteGrokAdminOnboardingPrompt: {
      name: "DeleteGrokAdminOnboardingPrompt",
      I: n.aW7,
      O: n._yh,
      kind: s.MethodKind.Unary
    },
    listXaiManagementApiKeys: {
      name: "ListXaiManagementApiKeys",
      I: n.ruw,
      O: n.xAe,
      kind: s.MethodKind.Unary
    },
    createXaiManagementApiKey: {
      name: "CreateXaiManagementApiKey",
      I: n.azC,
      O: n.cSQ,
      kind: s.MethodKind.Unary
    },
    updateXaiManagementApiKey: {
      name: "UpdateXaiManagementApiKey",
      I: n.dR6,
      O: n.P1K,
      kind: s.MethodKind.Unary
    },
    deleteXaiManagementApiKey: {
      name: "DeleteXaiManagementApiKey",
      I: n.hSg,
      O: n.rGX,
      kind: s.MethodKind.Unary
    },
    listXaiManagementApiKeyEndpointAcls: {
      name: "ListXaiManagementApiKeyEndpointAcls",
      I: n._Br,
      O: n.ylO,
      kind: s.MethodKind.Unary
    },
    createOrganizationApiKey: {
      name: "CreateOrganizationApiKey",
      I: n.KFb,
      O: n.WRW,
      kind: s.MethodKind.Unary
    },
    revokeOrganizationApiKey: {
      name: "RevokeOrganizationApiKey",
      I: n.W6d,
      O: n.G0c,
      kind: s.MethodKind.Unary
    },
    listOrganizationApiKeys: {
      name: "ListOrganizationApiKeys",
      I: n.bC9,
      O: n.Xtv,
      kind: s.MethodKind.Unary
    },
    createAutomationWebhookApiKey: {
      name: "CreateAutomationWebhookApiKey",
      I: n.nL6,
      O: n.rEt,
      kind: s.MethodKind.Unary
    },
    createTeamServiceAccount: {
      name: "CreateTeamServiceAccount",
      I: n.HYO,
      O: n.loJ,
      kind: s.MethodKind.Unary
    },
    listTeamServiceAccounts: {
      name: "ListTeamServiceAccounts",
      I: n.SMM,
      O: n.AhK,
      kind: s.MethodKind.Unary
    },
    deleteTeamServiceAccount: {
      name: "DeleteTeamServiceAccount",
      I: n.IaO,
      O: n.WLQ,
      kind: s.MethodKind.Unary
    },
    archiveTeamServiceAccount: {
      name: "ArchiveTeamServiceAccount",
      I: n.X2v,
      O: n.B6m,
      kind: s.MethodKind.Unary
    },
    updateTeamServiceAccount: {
      name: "UpdateTeamServiceAccount",
      I: n.Ca8,
      O: n.m6C,
      kind: s.MethodKind.Unary
    },
    suspendTeamServiceAccount: {
      name: "SuspendTeamServiceAccount",
      I: G,
      O: L,
      kind: s.MethodKind.Unary
    },
    resumeTeamServiceAccount: {
      name: "ResumeTeamServiceAccount",
      I: F,
      O: K,
      kind: s.MethodKind.Unary
    },
    rotateServiceAccountApiKey: {
      name: "RotateServiceAccountApiKey",
      I: n.OCy,
      O: n.sJP,
      kind: s.MethodKind.Unary
    },
    getTeamRepositoriesForServiceAccountScope: {
      name: "GetTeamRepositoriesForServiceAccountScope",
      I: n.EwB,
      O: n.Eav,
      kind: s.MethodKind.Unary
    },
    updateServiceAccountRepoScope: {
      name: "UpdateServiceAccountRepoScope",
      I: n.RZf,
      O: n.d6k,
      kind: s.MethodKind.Unary
    },
    createUserApiKey: {
      name: "CreateUserApiKey",
      I: n.cEg,
      O: n.Aa9,
      kind: s.MethodKind.Unary
    },
    revokeUserApiKey: {
      name: "RevokeUserApiKey",
      I: n.GOY,
      O: n.yQR,
      kind: s.MethodKind.Unary
    },
    listUserApiKeys: {
      name: "ListUserApiKeys",
      I: n.juR,
      O: n.ZCs,
      kind: s.MethodKind.Unary
    },
    listMemberPersonalApiKeys: {
      name: "ListMemberPersonalApiKeys",
      I: n.Cl5,
      O: n.UEj,
      kind: s.MethodKind.Unary
    },
    revokeMemberPersonalApiKeys: {
      name: "RevokeMemberPersonalApiKeys",
      I: n.Gci,
      O: n.K_N,
      kind: s.MethodKind.Unary
    },
    listTeamMemberSessions: {
      name: "ListTeamMemberSessions",
      I: n.Ifk,
      O: n.NsN,
      kind: s.MethodKind.Unary
    },
    revokeTeamMemberSession: {
      name: "RevokeTeamMemberSession",
      I: n.vDi,
      O: n.ElN,
      kind: s.MethodKind.Unary
    },
    listOrganizationMemberSessions: {
      name: "ListOrganizationMemberSessions",
      I: n.AUt,
      O: n.NsN,
      kind: s.MethodKind.Unary
    },
    revokeOrganizationMemberSession: {
      name: "RevokeOrganizationMemberSession",
      I: n.fOQ,
      O: n.ElN,
      kind: s.MethodKind.Unary
    },
    createServiceToken: {
      name: "CreateServiceToken",
      I: n.C10,
      O: n.e7b,
      kind: s.MethodKind.Unary
    },
    listServiceTokens: {
      name: "ListServiceTokens",
      I: n.v0n,
      O: n.X1$,
      kind: s.MethodKind.Unary
    },
    updateServiceTokenPermissions: {
      name: "UpdateServiceTokenPermissions",
      I: n.Fo6,
      O: n.rA8,
      kind: s.MethodKind.Unary
    },
    revokeServiceToken: {
      name: "RevokeServiceToken",
      I: n.yYY,
      O: n.w$r,
      kind: s.MethodKind.Unary
    },
    rotateServiceToken: {
      name: "RotateServiceToken",
      I: n.Rbl,
      O: n.t8U,
      kind: s.MethodKind.Unary
    },
    confirmGithubInstallation: {
      name: "ConfirmGithubInstallation",
      I: n.tI8,
      O: n.xpT,
      kind: s.MethodKind.Unary
    },
    updateTeamName: {
      name: "UpdateTeamName",
      I: n.l5I,
      O: n.FsH,
      kind: s.MethodKind.Unary
    },
    uploadTeamIcon: {
      name: "UploadTeamIcon",
      I: n.DLo,
      O: n.zQx,
      kind: s.MethodKind.Unary
    },
    updateTeamIcon: {
      name: "UpdateTeamIcon",
      I: n.Hdl,
      O: n.hHL,
      kind: s.MethodKind.Unary
    },
    updateTeamDashboardAnalyticsSetting: {
      name: "UpdateTeamDashboardAnalyticsSetting",
      I: n.CoZ,
      O: n.YZV,
      kind: s.MethodKind.Unary
    },
    updateTeamOriginSetting: {
      name: "UpdateTeamOriginSetting",
      I: n.YgU,
      O: n.G3W,
      kind: s.MethodKind.Unary
    },
    updateTeamScimRequireUserDirectorySetting: {
      name: "UpdateTeamScimRequireUserDirectorySetting",
      I: n.zul,
      O: n.L5U,
      kind: s.MethodKind.Unary
    },
    getTeamScimRequireUserDirectoryPreview: {
      name: "GetTeamScimRequireUserDirectoryPreview",
      I: n.Uto,
      O: n.EHd,
      kind: s.MethodKind.Unary
    },
    getEffectiveUserAgentStoreSkillsSettings: {
      name: "GetEffectiveUserAgentStoreSkillsSettings",
      I: n.hVj,
      O: n.b$E,
      kind: s.MethodKind.Unary
    },
    updateUserAgentStoreSkillsSettings: {
      name: "UpdateUserAgentStoreSkillsSettings",
      I: n.Vry,
      O: n.nNe,
      kind: s.MethodKind.Unary
    },
    getSlackUserSettings: {
      name: "GetSlackUserSettings",
      I: n.e0r,
      O: n.ewI,
      kind: s.MethodKind.Unary
    },
    updateSlackUserSettings: {
      name: "UpdateSlackUserSettings",
      I: n.F5_,
      O: n.Lt9,
      kind: s.MethodKind.Unary
    },
    setSlackCursorTeam: {
      name: "SetSlackCursorTeam",
      I: n.GLj,
      O: n.deZ,
      kind: s.MethodKind.Unary
    },
    getSlackRepoRoutingRules: {
      name: "GetSlackRepoRoutingRules",
      I: n.hE5,
      O: n.LGY,
      kind: s.MethodKind.Unary
    },
    createSlackRepoRoutingRule: {
      name: "CreateSlackRepoRoutingRule",
      I: n.EMn,
      O: n.QEY,
      kind: s.MethodKind.Unary
    },
    updateSlackRepoRoutingRule: {
      name: "UpdateSlackRepoRoutingRule",
      I: n.xcI,
      O: n.hbx,
      kind: s.MethodKind.Unary
    },
    deleteSlackRepoRoutingRule: {
      name: "DeleteSlackRepoRoutingRule",
      I: n.Bz7,
      O: n.Tfn,
      kind: s.MethodKind.Unary
    },
    getSlackDefaultWorkerRules: {
      name: "GetSlackDefaultWorkerRules",
      I: n.eOv,
      O: n.gpX,
      kind: s.MethodKind.Unary
    },
    setSlackDefaultWorkerRule: {
      name: "SetSlackDefaultWorkerRule",
      I: n.dn0,
      O: n.P7l,
      kind: s.MethodKind.Unary
    },
    deleteSlackDefaultWorkerRule: {
      name: "DeleteSlackDefaultWorkerRule",
      I: n.CGB,
      O: n.sHT,
      kind: s.MethodKind.Unary
    },
    isOnNewPricing: {
      name: "IsOnNewPricing",
      I: n.HxK,
      O: n.jAL,
      kind: s.MethodKind.Unary
    },
    getLinearAuthUrl: {
      name: "GetLinearAuthUrl",
      I: n._9N,
      O: n.wet,
      kind: s.MethodKind.Unary
    },
    connectLinearCallback: {
      name: "ConnectLinearCallback",
      I: n.wlK,
      O: n.Adp,
      kind: s.MethodKind.Unary
    },
    getMicrosoftTeamsLinkContext: {
      name: "GetMicrosoftTeamsLinkContext",
      I: n.vDB,
      O: n.bIf,
      kind: s.MethodKind.Unary
    },
    setMicrosoftTeamsAuth: {
      name: "SetMicrosoftTeamsAuth",
      I: n.ak0,
      O: n.YrR,
      kind: s.MethodKind.Unary
    },
    getLinearStatus: {
      name: "GetLinearStatus",
      I: n.xGO,
      O: n.zOq,
      kind: s.MethodKind.Unary
    },
    disconnectLinear: {
      name: "DisconnectLinear",
      I: n.Xqi,
      O: n.vXd,
      kind: s.MethodKind.Unary
    },
    getLinearTeams: {
      name: "GetLinearTeams",
      I: n.v5z,
      O: n.HMD,
      kind: s.MethodKind.Unary
    },
    getLinearSettings: {
      name: "GetLinearSettings",
      I: n.MFi,
      O: n.C0g,
      kind: s.MethodKind.Unary
    },
    updateLinearTeamSetting: {
      name: "UpdateLinearTeamSetting",
      I: n.$H8,
      O: n.XMd,
      kind: s.MethodKind.Unary
    },
    updateLinearProjectSetting: {
      name: "UpdateLinearProjectSetting",
      I: n.tJW,
      O: n.RYJ,
      kind: s.MethodKind.Unary
    },
    getLinearLabels: {
      name: "GetLinearLabels",
      I: n.a3w,
      O: n.eZU,
      kind: s.MethodKind.Unary
    },
    getLinearIssues: {
      name: "GetLinearIssues",
      I: n.PG$,
      O: n.bBu,
      kind: s.MethodKind.Unary
    },
    batchGetLinearIssueSummaries: {
      name: "BatchGetLinearIssueSummaries",
      I: n.aFD,
      O: n.W5r,
      kind: s.MethodKind.Unary
    },
    getXaiTeamLinkStatus: {
      name: "GetXaiTeamLinkStatus",
      I: n.$TS,
      O: n.$0p,
      kind: s.MethodKind.Unary
    },
    startXaiTeamLink: {
      name: "StartXaiTeamLink",
      I: n.ptw,
      O: n.zlM,
      kind: s.MethodKind.Unary
    },
    confirmXaiTeamLink: {
      name: "ConfirmXaiTeamLink",
      I: n.bWR,
      O: n.FQR,
      kind: s.MethodKind.Unary
    },
    cancelXaiTeamLinkProposal: {
      name: "CancelXaiTeamLinkProposal",
      I: n.pAq,
      O: n.LOM,
      kind: s.MethodKind.Unary
    },
    unlinkXaiTeam: {
      name: "UnlinkXaiTeam",
      I: n.GTA,
      O: n.ev7,
      kind: s.MethodKind.Unary
    },
    getXaiCursorTeamMergeStatus: {
      name: "GetXaiCursorTeamMergeStatus",
      I: n.GhV,
      O: n.XLd,
      kind: s.MethodKind.Unary
    },
    getXaiCursorTeamMembershipPreview: {
      name: "GetXaiCursorTeamMembershipPreview",
      I: n.R0Z,
      O: n.JNH,
      kind: s.MethodKind.Unary
    },
    updateXaiCursorTeamMemberRoles: {
      name: "UpdateXaiCursorTeamMemberRoles",
      I: n.XJ2,
      O: n.HcF,
      kind: s.MethodKind.Unary
    },
    startXaiCursorTeamMerge: {
      name: "StartXaiCursorTeamMerge",
      I: n.hoi,
      O: n.lhf,
      kind: s.MethodKind.Unary
    },
    getXaiCursorTeamMergeGrokTeams: {
      name: "GetXaiCursorTeamMergeGrokTeams",
      I: n.IPQ,
      O: n.Ood,
      kind: s.MethodKind.Unary
    },
    selectXaiCursorTeamMergeGrokTeam: {
      name: "SelectXaiCursorTeamMergeGrokTeam",
      I: n.TTI,
      O: n.pPp,
      kind: s.MethodKind.Unary
    },
    confirmXaiCursorTeamMerge: {
      name: "ConfirmXaiCursorTeamMerge",
      I: n.RqP,
      O: n.X2R,
      kind: s.MethodKind.Unary
    },
    prepareXaiCursorTeamMergeCheckout: {
      name: "PrepareXaiCursorTeamMergeCheckout",
      I: n.Ybi,
      O: n.kBz,
      kind: s.MethodKind.Unary
    },
    unprepareXaiCursorTeamMergeCheckout: {
      name: "UnprepareXaiCursorTeamMergeCheckout",
      I: n.xbn,
      O: n.jrF,
      kind: s.MethodKind.Unary
    },
    finalizeXaiCursorTeamMergeCheckout: {
      name: "FinalizeXaiCursorTeamMergeCheckout",
      I: n.hih,
      O: n.bCj,
      kind: s.MethodKind.Unary
    },
    ensureXaiCursorTeamForMerge: {
      name: "EnsureXaiCursorTeamForMerge",
      I: n._nC,
      O: n.kgP,
      kind: s.MethodKind.Unary
    },
    getXaiCursorTeamMergePrepaidPreview: {
      name: "GetXaiCursorTeamMergePrepaidPreview",
      I: n.AQb,
      O: n.aNf,
      kind: s.MethodKind.Unary
    },
    cancelXaiCursorTeamMergeProposal: {
      name: "CancelXaiCursorTeamMergeProposal",
      I: n.pX4,
      O: n.j9U,
      kind: s.MethodKind.Unary
    },
    transferXaiCredits: {
      name: "TransferXaiCredits",
      I: n.hDl,
      O: n.hWK,
      kind: s.MethodKind.Unary
    },
    grantXaiSubscription: {
      name: "GrantXaiSubscription",
      I: V,
      O: Q,
      kind: s.MethodKind.Unary
    },
    getXaiCreditTransferStatus: {
      name: "GetXaiCreditTransferStatus",
      I: n.yq2,
      O: n.hWK,
      kind: s.MethodKind.Unary
    },
    listXaiCreditTransfers: {
      name: "ListXaiCreditTransfers",
      I: n.R_i,
      O: n.hN$,
      kind: s.MethodKind.Unary
    },
    getPagerDutyAuthUrl: {
      name: "GetPagerDutyAuthUrl",
      I: n.Ig_,
      O: n.Esv,
      kind: s.MethodKind.Unary
    },
    connectPagerDutyCallback: {
      name: "ConnectPagerDutyCallback",
      I: n.ecT,
      O: n.YdR,
      kind: s.MethodKind.Unary
    },
    getPagerDutyStatus: {
      name: "GetPagerDutyStatus",
      I: n.JmO,
      O: n.bUD,
      kind: s.MethodKind.Unary
    },
    getPagerDutyServices: {
      name: "GetPagerDutyServices",
      I: n.bo4,
      O: n.twU,
      kind: s.MethodKind.Unary
    },
    disconnectPagerDuty: {
      name: "DisconnectPagerDuty",
      I: n.dBq,
      O: n.VS,
      kind: s.MethodKind.Unary
    },
    getJiraInstallUrl: {
      name: "GetJiraInstallUrl",
      I: n.m8H,
      O: n.G4o,
      kind: s.MethodKind.Unary
    },
    linkJiraInstallation: {
      name: "LinkJiraInstallation",
      I: n.Uao,
      O: n.Gdv,
      kind: s.MethodKind.Unary
    },
    getJiraStatus: {
      name: "GetJiraStatus",
      I: n.CJ0,
      O: n.qZs,
      kind: s.MethodKind.Unary
    },
    listJiraInstallations: {
      name: "ListJiraInstallations",
      I: n.LuE,
      O: n.VG3,
      kind: s.MethodKind.Unary
    },
    getBitbucketForgeStatus: {
      name: "GetBitbucketForgeStatus",
      I: n.y90,
      O: n.YmN,
      kind: s.MethodKind.Unary
    },
    disconnectJira: {
      name: "DisconnectJira",
      I: n.KQv,
      O: n.S0I,
      kind: s.MethodKind.Unary
    },
    disconnectBitbucketForge: {
      name: "DisconnectBitbucketForge",
      I: n.I5D,
      O: n.e0h,
      kind: s.MethodKind.Unary
    },
    getJiraProjects: {
      name: "GetJiraProjects",
      I: n.k0s,
      O: n.EGh,
      kind: s.MethodKind.Unary
    },
    getJiraTeamSettings: {
      name: "GetJiraTeamSettings",
      I: n.WCk,
      O: n.CyC,
      kind: s.MethodKind.Unary
    },
    updateJiraTeamSettings: {
      name: "UpdateJiraTeamSettings",
      I: n.Fuf,
      O: n.HCj,
      kind: s.MethodKind.Unary
    },
    getJiraRoutingRules: {
      name: "GetJiraRoutingRules",
      I: n.XUt,
      O: n.ZU4,
      kind: s.MethodKind.Unary
    },
    createJiraRoutingRule: {
      name: "CreateJiraRoutingRule",
      I: n.OoP,
      O: n.gZI,
      kind: s.MethodKind.Unary
    },
    updateJiraRoutingRule: {
      name: "UpdateJiraRoutingRule",
      I: n.zFs,
      O: n.bQQ,
      kind: s.MethodKind.Unary
    },
    deleteJiraRoutingRule: {
      name: "DeleteJiraRoutingRule",
      I: n.XeB,
      O: n.zNr,
      kind: s.MethodKind.Unary
    },
    linkJiraUser: {
      name: "LinkJiraUser",
      I: n.DWb,
      O: n.Fi2,
      kind: s.MethodKind.Unary
    },
    listJiraUserLinks: {
      name: "ListJiraUserLinks",
      I: n.KaV,
      O: n.ySt,
      kind: s.MethodKind.Unary
    },
    unlinkJiraUser: {
      name: "UnlinkJiraUser",
      I: n.ceB,
      O: n.WXO,
      kind: s.MethodKind.Unary
    },
    deleteBedrockIamRole: {
      name: "DeleteBedrockIamRole",
      I: n.o0f,
      O: n.mTO,
      kind: s.MethodKind.Unary
    },
    unlinkSlackAccess: {
      name: "UnlinkSlackAccess",
      I: n.h0F,
      O: n.dTt,
      kind: s.MethodKind.Unary
    },
    listSlackLinkedWorkspaces: {
      name: "ListSlackLinkedWorkspaces",
      I: n.N8I,
      O: n.pZm,
      kind: s.MethodKind.Unary
    },
    setSandAutomationSlackWorkspace: {
      name: "SetSandAutomationSlackWorkspace",
      I: n.eI8,
      O: n._qO,
      kind: s.MethodKind.Unary
    },
    getSlackLinkPreview: {
      name: "GetSlackLinkPreview",
      I: n.aew,
      O: n.gjm,
      kind: s.MethodKind.Unary
    },
    listSlackConversations: {
      name: "ListSlackConversations",
      I: n.iHk,
      O: n.gsv,
      kind: s.MethodKind.Unary
    },
    listSlackConnectedWorkspaces: {
      name: "ListSlackConnectedWorkspaces",
      I: n.vV7,
      O: n.vcR,
      kind: s.MethodKind.Unary
    },
    listOrganizationSlackConnectedWorkspaces: {
      name: "ListOrganizationSlackConnectedWorkspaces",
      I: n.quH,
      O: n.eK8,
      kind: s.MethodKind.Unary
    },
    listMicrosoftTeamsChannels: {
      name: "ListMicrosoftTeamsChannels",
      I: n.wLf,
      O: n.Sot,
      kind: s.MethodKind.Unary
    },
    getSlackConversationsByIds: {
      name: "GetSlackConversationsByIds",
      I: n.BaG,
      O: n.zYR,
      kind: s.MethodKind.Unary
    },
    logSlackbotAuthConversionFunnel: {
      name: "LogSlackbotAuthConversionFunnel",
      I: n.HOD,
      O: n.pQL,
      kind: s.MethodKind.Unary
    },
    logClickedConnectSlack: {
      name: "LogClickedConnectSlack",
      I: n.Not,
      O: n.T0x,
      kind: s.MethodKind.Unary
    },
    checkUserApiKeyAccess: {
      name: "CheckUserApiKeyAccess",
      I: n.QKN,
      O: n.wmq,
      kind: s.MethodKind.Unary
    },
    isAllowedFreeTrialUsage: {
      name: "IsAllowedFreeTrialUsage",
      I: n.p$r,
      O: n.Jag,
      kind: s.MethodKind.Unary
    },
    isNextSetupRunFree: {
      name: "IsNextSetupRunFree",
      I: n.vfb,
      O: n.$8m,
      kind: s.MethodKind.Unary
    },
    completedLinkSlackAccount: {
      name: "CompletedLinkSlackAccount",
      I: n.wm7,
      O: n.O$A,
      kind: s.MethodKind.Unary
    },
    notifyBugbotTeamAdmins: {
      name: "NotifyBugbotTeamAdmins",
      I: n.anf,
      O: n.WJW,
      kind: s.MethodKind.Unary
    },
    getAdminNotificationStatus: {
      name: "GetAdminNotificationStatus",
      I: n.gJU,
      O: n.mib,
      kind: s.MethodKind.Unary
    },
    optOutNewPricing: {
      name: "OptOutNewPricing",
      I: n.P4,
      O: n.HdK,
      kind: s.MethodKind.Unary
    },
    submitFeedback: {
      name: "SubmitFeedback",
      I: n.h5c,
      O: n.b9h,
      kind: s.MethodKind.Unary
    },
    submitFeedbackAnon: {
      name: "SubmitFeedbackAnon",
      I: n.h5c,
      O: n.b9h,
      kind: s.MethodKind.Unary
    },
    submitRepositoryProtectionClaim: {
      name: "SubmitRepositoryProtectionClaim",
      I: n.zuj,
      O: n.NMG,
      kind: s.MethodKind.Unary
    },
    activateRepositoryProtectionInvite: {
      name: "ActivateRepositoryProtectionInvite",
      I: n.bo5,
      O: n.xWW,
      kind: s.MethodKind.Unary
    },
    getActiveOffboardingBanner: {
      name: "GetActiveOffboardingBanner",
      I: n.pg$,
      O: n.fSY,
      kind: s.MethodKind.Unary
    },
    clientAction: {
      name: "ClientAction",
      I: n.H5i,
      O: n.zah,
      kind: s.MethodKind.Unary
    },
    listUsageAlerts: {
      name: "ListUsageAlerts",
      I: n.dUM,
      O: n.UB9,
      kind: s.MethodKind.Unary
    },
    createUsageAlerts: {
      name: "CreateUsageAlerts",
      I: n.Q1P,
      O: n.kJb,
      kind: s.MethodKind.Unary
    },
    deleteUsageAlerts: {
      name: "DeleteUsageAlerts",
      I: n.LME,
      O: n.rJY,
      kind: s.MethodKind.Unary
    },
    updateUsageAlerts: {
      name: "UpdateUsageAlerts",
      I: n.D3G,
      O: n.rew,
      kind: s.MethodKind.Unary
    },
    requestIndividualLimitsOptOut: {
      name: "RequestIndividualLimitsOptOut",
      I: n.JrS,
      O: n.HJo,
      kind: s.MethodKind.Unary
    },
    listMarketplacePlugins: {
      name: "ListMarketplacePlugins",
      I: n.ZMX,
      O: n.vEP,
      kind: s.MethodKind.Unary
    },
    listPublisherPublicPlugins: {
      name: "ListPublisherPublicPlugins",
      I: n.nMU,
      O: n.lqq,
      kind: s.MethodKind.Unary
    },
    getUserProfile: {
      name: "GetUserProfile",
      I: n.mH6,
      O: n.CZF,
      kind: s.MethodKind.Unary
    },
    updateUserProfile: {
      name: "UpdateUserProfile",
      I: n.LjR,
      O: n.Hoz,
      kind: s.MethodKind.Unary
    },
    claimUserProfileHandle: {
      name: "ClaimUserProfileHandle",
      I: n.iOH,
      O: n.g5C,
      kind: s.MethodKind.Unary
    },
    getPublicProfileByHandle: {
      name: "GetPublicProfileByHandle",
      I: n.dwF,
      O: n.t5n,
      kind: s.MethodKind.Unary
    },
    getViewableProfileByHandle: {
      name: "GetViewableProfileByHandle",
      I: n.hsE,
      O: n.vuk,
      kind: s.MethodKind.Unary
    },
    getTeamMemberProfileByHandle: {
      name: "GetTeamMemberProfileByHandle",
      I: n.jcw,
      O: n.X5_,
      kind: s.MethodKind.Unary
    },
    getProfileOriginContributions: {
      name: "GetProfileOriginContributions",
      I: n.kSp,
      O: n.O5b,
      kind: s.MethodKind.Unary
    },
    getPlugin: {
      name: "GetPlugin",
      I: n.vVx,
      O: n.fAb,
      kind: s.MethodKind.Unary
    },
    createPlugin: {
      name: "CreatePlugin",
      I: n.hzU,
      O: n.rfl,
      kind: s.MethodKind.Unary
    },
    updatePluginMcpConfig: {
      name: "UpdatePluginMcpConfig",
      I: n.oVF,
      O: n.GcM,
      kind: s.MethodKind.Unary
    },
    publishPlugin: {
      name: "PublishPlugin",
      I: n.qkO,
      O: n.YPJ,
      kind: s.MethodKind.Unary
    },
    unpublishPlugin: {
      name: "UnpublishPlugin",
      I: n.VJo,
      O: n.ZuH,
      kind: s.MethodKind.Unary
    },
    parseGitHubRepoForPlugins: {
      name: "ParseGitHubRepoForPlugins",
      I: n.ggh,
      O: n.nXe,
      kind: s.MethodKind.Unary
    },
    parsePluginPublisherRepoInternal: {
      name: "ParsePluginPublisherRepoInternal",
      I: n.VWM,
      O: n.HiH,
      kind: s.MethodKind.Unary
    },
    previewReindexPluginRepoInternal: {
      name: "PreviewReindexPluginRepoInternal",
      I: n.dOz,
      O: n.smL,
      kind: s.MethodKind.Unary
    },
    applyReindexPluginRepoInternal: {
      name: "ApplyReindexPluginRepoInternal",
      I: n.flJ,
      O: n.SZm,
      kind: s.MethodKind.Unary
    },
    previewMigrateReindexPluginRepoInternal: {
      name: "PreviewMigrateReindexPluginRepoInternal",
      I: n.Q66,
      O: n.b48,
      kind: s.MethodKind.Unary
    },
    applyMigrateReindexPluginRepoInternal: {
      name: "ApplyMigrateReindexPluginRepoInternal",
      I: n.GJd,
      O: n.LmS,
      kind: s.MethodKind.Unary
    },
    updateTeamMarketplaceOriginDistributionInternal: {
      name: "UpdateTeamMarketplaceOriginDistributionInternal",
      I: n.WFw,
      O: n.gqu,
      kind: s.MethodKind.Unary
    },
    getXaiEmailEligibilityInternal: {
      name: "GetXaiEmailEligibilityInternal",
      I: n.SCd,
      O: n.YDS,
      kind: s.MethodKind.Unary
    },
    createSupportImpersonationSessionInternal: {
      name: "CreateSupportImpersonationSessionInternal",
      I: n.Cbz,
      O: n.Gf$,
      kind: s.MethodKind.Unary
    },
    removeOrganizationMemberInternal: {
      name: "RemoveOrganizationMemberInternal",
      I: n.sw6,
      O: n.qVu,
      kind: s.MethodKind.Unary
    },
    submitPluginForApproval: {
      name: "SubmitPluginForApproval",
      I: n.vCC,
      O: n.D7h,
      kind: s.MethodKind.Unary
    },
    approvePlugin: {
      name: "ApprovePlugin",
      I: n.c2n,
      O: n.ISv,
      kind: s.MethodKind.Unary
    },
    rejectPlugin: {
      name: "RejectPlugin",
      I: n.WZo,
      O: n.oGE,
      kind: s.MethodKind.Unary
    },
    listUserPluginInstalls: {
      name: "ListUserPluginInstalls",
      I: n.OHt,
      O: n.UgB,
      kind: s.MethodKind.Unary
    },
    installUserPlugin: {
      name: "InstallUserPlugin",
      I: n.Bi3,
      O: n.jsr,
      kind: s.MethodKind.Unary
    },
    updateUserPluginInstall: {
      name: "UpdateUserPluginInstall",
      I: n.__V,
      O: n.c3q,
      kind: s.MethodKind.Unary
    },
    uninstallUserPlugin: {
      name: "UninstallUserPlugin",
      I: n.w66,
      O: n.Mmr,
      kind: s.MethodKind.Unary
    },
    getTeamPluginPopularity: {
      name: "GetTeamPluginPopularity",
      I: n.LGu,
      O: n.PnF,
      kind: s.MethodKind.Unary
    },
    getTeamPluginPrimitiveUsage: {
      name: "GetTeamPluginPrimitiveUsage",
      I: n.i9d,
      O: n.sev,
      kind: s.MethodKind.Unary
    },
    listTeamAvailableMarketplacePlugins: {
      name: "ListTeamAvailableMarketplacePlugins",
      I: n.$_i,
      O: n.B0l,
      kind: s.MethodKind.Unary
    },
    getTeamPinnedMarketplacePlugins: {
      name: "GetTeamPinnedMarketplacePlugins",
      I: n.ax8,
      O: n._lt,
      kind: s.MethodKind.Unary
    },
    updateTeamPinnedMarketplacePlugins: {
      name: "UpdateTeamPinnedMarketplacePlugins",
      I: n.hLv,
      O: n.VCH,
      kind: s.MethodKind.Unary
    },
    installTeamPlugin: {
      name: "InstallTeamPlugin",
      I: n.Jjf,
      O: n.hsS,
      kind: s.MethodKind.Unary
    },
    updateTeamPluginInstall: {
      name: "UpdateTeamPluginInstall",
      I: n.iRP,
      O: n.y13,
      kind: s.MethodKind.Unary
    },
    uninstallTeamPlugin: {
      name: "UninstallTeamPlugin",
      I: n.m,
      O: n.E3F,
      kind: s.MethodKind.Unary
    },
    getEffectiveUserPlugins: {
      name: "GetEffectiveUserPlugins",
      I: n.EwF,
      O: n.KhO,
      kind: s.MethodKind.Unary
    },
    listInstalledPlugins: {
      name: "ListInstalledPlugins",
      I: n.AB7,
      O: n.g7m,
      kind: s.MethodKind.Unary,
      idempotency: s.MethodIdempotency.NoSideEffects
    },
    getInstalledPluginDetail: {
      name: "GetInstalledPluginDetail",
      I: n.E8o,
      O: n.C17,
      kind: s.MethodKind.Unary,
      idempotency: s.MethodIdempotency.NoSideEffects
    },
    listStorefrontPlugins: {
      name: "ListStorefrontPlugins",
      I: n.W22,
      O: n.SwX,
      kind: s.MethodKind.Unary,
      idempotency: s.MethodIdempotency.NoSideEffects
    },
    resolvePluginsByRef: {
      name: "ResolvePluginsByRef",
      I: n.WvV,
      O: n.UgI,
      kind: s.MethodKind.Unary
    },
    listMarketplaces: {
      name: "ListMarketplaces",
      I: n.iPX,
      O: n.A8F,
      kind: s.MethodKind.Unary
    },
    addMarketplace: {
      name: "AddMarketplace",
      I: n.Y9_,
      O: n.CeW,
      kind: s.MethodKind.Unary
    },
    getOrCreateDefaultTeamMarketplace: {
      name: "GetOrCreateDefaultTeamMarketplace",
      I: n.q$3,
      O: n.mht,
      kind: s.MethodKind.Unary
    },
    updateMarketplace: {
      name: "UpdateMarketplace",
      I: n.UJO,
      O: n.Cel,
      kind: s.MethodKind.Unary
    },
    removeMarketplace: {
      name: "RemoveMarketplace",
      I: n.Bqo,
      O: n.PQd,
      kind: s.MethodKind.Unary
    },
    refreshMarketplace: {
      name: "RefreshMarketplace",
      I: n.YDo,
      O: n.cBR,
      kind: s.MethodKind.Unary
    },
    reindexAndApplyTeamMarketplaceChanges: {
      name: "ReindexAndApplyTeamMarketplaceChanges",
      I: n.BRM,
      O: n.loc,
      kind: s.MethodKind.Unary
    },
    registerMarketplaceAndPlugins: {
      name: "RegisterMarketplaceAndPlugins",
      I: n.Dxc,
      O: n.ZHm,
      kind: s.MethodKind.Unary
    },
    updateTeamMarketplaceConfig: {
      name: "UpdateTeamMarketplaceConfig",
      I: n.Vpq,
      O: n.vfz,
      kind: s.MethodKind.Unary
    },
    setTeamMarketplaceRepository: {
      name: "SetTeamMarketplaceRepository",
      I: n.kMn,
      O: n.YOY,
      kind: s.MethodKind.Unary
    },
    setMarketplaceOriginDistribution: {
      name: "SetMarketplaceOriginDistribution",
      I: n.xHb,
      O: n.fxk,
      kind: s.MethodKind.Unary
    },
    getMarketplaceOriginDistributionStatus: {
      name: "GetMarketplaceOriginDistributionStatus",
      I: n.pUz,
      O: n.hHr,
      kind: s.MethodKind.Unary
    },
    setTeamMarketplacePluginPolicies: {
      name: "SetTeamMarketplacePluginPolicies",
      I: n.rJW,
      O: n.RZJ,
      kind: s.MethodKind.Unary
    },
    completeSharepointOauth: {
      name: "CompleteSharepointOauth",
      I: n.vJq,
      O: n.PaT,
      kind: s.MethodKind.Unary
    },
    getTeamSharepointConnector: {
      name: "GetTeamSharepointConnector",
      I: n.FO$,
      O: n.hFv,
      kind: s.MethodKind.Unary
    },
    disconnectTeamSharepoint: {
      name: "DisconnectTeamSharepoint",
      I: n.sg4,
      O: n.a3K,
      kind: s.MethodKind.Unary
    },
    setTeamSharepointAllowedSites: {
      name: "SetTeamSharepointAllowedSites",
      I: n.kau,
      O: n.YMP,
      kind: s.MethodKind.Unary
    },
    setTeamMarketplacePluginPolicyVariables: {
      name: "SetTeamMarketplacePluginPolicyVariables",
      I: n.sst,
      O: n.Kfp,
      kind: s.MethodKind.Unary
    },
    linkPluginsToTeamMarketplace: {
      name: "LinkPluginsToTeamMarketplace",
      I: n.PuH,
      O: n.n1r,
      kind: s.MethodKind.Unary
    },
    unlinkPluginsFromTeamMarketplace: {
      name: "UnlinkPluginsFromTeamMarketplace",
      I: n.nun,
      O: n.bzo,
      kind: s.MethodKind.Unary
    },
    previewTeamMarketplaceMcpImpact: {
      name: "PreviewTeamMarketplaceMcpImpact",
      I: n.ObP,
      O: n.qdL,
      kind: s.MethodKind.Unary
    },
    getManagedSkills: {
      name: "GetManagedSkills",
      I: n.X8g,
      O: n.p_E,
      kind: s.MethodKind.Unary
    },
    getCursorUserState: {
      name: "GetCursorUserState",
      I: n.y4P,
      O: n.WY9,
      kind: s.MethodKind.Unary
    },
    setJobData: {
      name: "SetJobData",
      I: n.B$8,
      O: n.JgL,
      kind: s.MethodKind.Unary
    },
    listFinancialConnections: {
      name: "ListFinancialConnections",
      I: n.mbE,
      O: n.y5v,
      kind: s.MethodKind.Unary
    },
    listFinancialAccounts: {
      name: "ListFinancialAccounts",
      I: n.bHh,
      O: n.jWD,
      kind: s.MethodKind.Unary
    },
    deleteFinancialConnection: {
      name: "DeleteFinancialConnection",
      I: n.Yiy,
      O: n.YY6,
      kind: s.MethodKind.Unary
    },
    startFinancialLink: {
      name: "StartFinancialLink",
      I: n.tVV,
      O: n.zHj,
      kind: s.MethodKind.Unary
    },
    updateBitbucketServerInstanceOauthApp: {
      name: "UpdateBitbucketServerInstanceOauthApp",
      I: n.KEO,
      O: n.qA0,
      kind: s.MethodKind.Unary
    },
    disconnectBitbucketServerAccount: {
      name: "DisconnectBitbucketServerAccount",
      I: n.ru_,
      O: n.dyp,
      kind: s.MethodKind.Unary
    },
    listDashboardApps: {
      name: "ListDashboardApps",
      I: n.CCH,
      O: n.EdW,
      kind: s.MethodKind.Unary
    },
    getDashboardApp: {
      name: "GetDashboardApp",
      I: n.hst,
      O: n.zUO,
      kind: s.MethodKind.Unary
    },
    listAppReviewOverrides: {
      name: "ListAppReviewOverrides",
      I: n.upR,
      O: n.U2t,
      kind: s.MethodKind.Unary
    },
    decideAppReviewOverride: {
      name: "DecideAppReviewOverride",
      I: n.ndP,
      O: n.FRR,
      kind: s.MethodKind.Unary
    },
    revokeAppReviewOverride: {
      name: "RevokeAppReviewOverride",
      I: n.HCf,
      O: n.x6X,
      kind: s.MethodKind.Unary
    },
    grantAppReviewOverride: {
      name: "GrantAppReviewOverride",
      I: n.Pt$,
      O: n.Tmx,
      kind: s.MethodKind.Unary
    },
    listServiceTokenApps: {
      name: "ListServiceTokenApps",
      I: n.A_u,
      O: n.IWi,
      kind: s.MethodKind.Unary
    },
    setServiceTokenApps: {
      name: "SetServiceTokenApps",
      I: n.gNG,
      O: n.QNN,
      kind: s.MethodKind.Unary
    },
    listAppMemberAppsApiKeys: {
      name: "ListAppMemberAppsApiKeys",
      I: n.pVr,
      O: n.jNM,
      kind: s.MethodKind.Unary
    },
    listTeamAppsApiKeys: {
      name: "ListTeamAppsApiKeys",
      I: n.l2q,
      O: n.Lsm,
      kind: s.MethodKind.Unary
    }
  }
};
export { Z as I };
