// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 88982 range:12362566..12949323
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
88982: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { OriginService: () => Xg });
    var n = r(36038), s = r(8592);
    class o extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class i extends o {
      constructor(e2) {
        super(), this.org = "", this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new i().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new i().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new i().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(i, e2, t2);
      }
      static $() {
        return ["ClientRepoIdentifier|1 org 9|2 name 9"];
      }
    }
    class a extends o {
      constructor(e2) {
        super(), this.owner = "", this.repo = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(a, e2, t2);
      }
      static $() {
        return ["GithubRepoIdentifier|1 owner 9|2 repo 9|3 enterprise_id 9?"];
      }
    }
    const c = "origin.v1.";
    class l extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return c;
      }
    }
    var u = (0, s.QT)(n.proto3, c, "ListHostedReposOrderBy", [[0, "UNSPECIFIED"], [1, "NAME_ASC"], [2, "NAME_DESC"], [3, "LAST_PUSHED_DESC"], [4, "LAST_PUSHED_ASC"], [5, "ID_ASC"], [6, "ID_DESC"]], 1), d = (0, s.QT)(n.proto3, c, "RepoKind", [[0, "UNSPECIFIED"], [1, "STANDARD"], [2, "CURSOR_MARKETPLACE"], [3, "ORIGIN_NATIVE_CURSOR_MARKETPLACE"], [4, "AGENT_TEMP"]], 1), p = (0, s.QT)(n.proto3, c, "RepoVisibility", [[0, "UNSPECIFIED"], [1, "INTERNAL"], [2, "PRIVATE"], [3, "PUBLIC"]], 1), m = (0, s.QT)(n.proto3, c, "RepoMirrorTransition", [[0, "UNSPECIFIED"], [1, "INBOUND_TO_OUTBOUND"], [2, "OUTBOUND_TO_INBOUND"], [3, "INITIAL_TO_INBOUND"]], 1), h = (0, s.QT)(n.proto3, c, "RepoMirrorTransitionJobStatus", [[0, "UNSPECIFIED"], [1, "QUEUED"], [2, "RUNNING"], [3, "SUCCEEDED"], [4, "FAILED_ROLLED_BACK"], [5, "REQUIRES_ATTENTION"], [6, "SUPERSEDED"]], 1), f = (0, s.QT)(n.proto3, c, "RepoMirrorTransitionJobPhase", [[0, "UNSPECIFIED"], [1, "QUEUED"], [2, "STARTING"], [3, "DRAINING_WRITES"], [4, "FINALIZING_MIRROR_FETCH"], [5, "FINALIZING_MIRROR_PUSH"], [6, "COMMITTING_TARGET_STATUS"], [7, "ROLLING_BACK"], [8, "COMPLETED"], [9, "INITIALIZING_MIRROR_FETCH"], [10, "ENABLING_GITHUB_FENCE"], [11, "VERIFYING_INTEGRITY"], [12, "REOPENING_INBOUND_MIRROR"], [13, "SNAPSHOTTING_REFS"]], 1), g = (0, s.QT)(n.proto3, c, "MirrorStatus", [[0, "UNSPECIFIED"], [1, "TRANSITIONING_TO_INBOUND"], [2, "INBOUND"], [3, "OUTBOUND"], [4, "TRANSITIONING_INBOUND_TO_OUTBOUND"], [5, "TRANSITIONING_OUTBOUND_TO_INBOUND"], [6, "INITIAL_SYNC_PENDING"]], 1), y = (0, s.QT)(n.proto3, c, "OriginNamespaceOwnerType", [[0, "UNSPECIFIED"], [1, "TEAM"], [2, "USER"]], 1), w = (0, s.QT)(n.proto3, c, "AuthorizedNamespaceAccessReason", [[0, "UNSPECIFIED"], [1, "TEAM_OWNERSHIP"], [2, "USER_OWNERSHIP"], [3, "EXPLICIT_GRANT"], [4, "NAMESPACE_GRANT"], [5, "REPOSITORY_GRANT"]], 1);
    class v extends l {
      constructor(e2) {
        super(), this.org = "", this.name = "", this.cloneUrl = "", this.defaultBranch = "", this.repoUuid = "", this.mirrorStatus = g.UNSPECIFIED, this.forgeEnvironment = "", this.originNamespaceId = "", this.allowMergeCommit = false, this.allowSquashMerge = false, this.visibility = p.UNSPECIFIED, this.repoKind = d.UNSPECIFIED, this.deleteBranchOnMerge = false, n.proto3.util.initPartial(e2, this);
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
        return ["RepoSummary|1 org 9|2 name 9|3 clone_url 9|4 default_branch 9|6 github_node_id 9?|7 github_enterprise_id 9?|8 repo_uuid 9|9 mirror_status #0|10 last_pushed_at #1?|11 forge_environment 9|12 origin_namespace_id 9|13 allow_merge_commit 8|14 allow_squash_merge 8|15 visibility #2|16 github_mirror_info #3?|17 deleted_at #1?|18 repo_kind #4|19 owner_type 9?|20 delete_branch_on_merge 8|21 created_at #1?|22 updated_at #1?|23 github_installation_id 4?", g, n.Timestamp, p, Ee, d];
      }
    }
    class _ extends l {
      constructor(e2) {
        super(), this.pageSize = 0, this.pageToken = "", this.search = "", this.orderBy = u.UNSPECIFIED, this.namespace = "", this.includeGithubMirrorInfo = false, this.applyRepositoryPickerPolicy = false, this.includeExternalCollaboratorRepos = false, n.proto3.util.initPartial(e2, this);
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
        return ["ListHostedReposRequest|1 page_size 13|2 page_token 9|3 search 9|4 order_by #0|5 namespace 9|6 include_github_mirror_info 8|7 apply_repository_picker_policy 8|8 include_external_collaborator_repos 8", u];
      }
    }
    class A extends l {
      constructor(e2) {
        super(), this.repositories = [], this.nextPageToken = "", this.totalCount = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ListHostedReposResponse|1 repositories #0*|2 next_page_token 9|3 total_count 13", v];
      }
    }
    class S extends l {
      constructor(e2) {
        super(), this.namespace = "", this.pageSize = 0, this.pageToken = "", this.search = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListReposForAppInstallRequest|1 namespace 9|2 page_size 13|3 page_token 9|4 search 9"];
      }
    }
    class b extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["CreateRepoRequest|1 identifier #0|2 default_branch 9?|6 forge_environment 9?|7 repo_kind #1?|8 visibility #2?", i, d, p];
      }
    }
    class E extends l {
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
        return ["CreateRepoResponse|3 repository #0", se];
      }
    }
    class I extends l {
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
        return ["PublishAgentTempRepoRequest|1 identifier #0|2 new_name 9?|3 visibility #1?", i, p];
      }
    }
    class C extends l {
      constructor(e2) {
        super(), this.published = false, n.proto3.util.initPartial(e2, this);
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
        return ["PublishAgentTempRepoResponse|1 published 8|2 repository #0", se];
      }
    }
    class k extends l {
      constructor(e2) {
        super(), this.targetNamespace = "", n.proto3.util.initPartial(e2, this);
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
        return ["CreateMirroredRepoRequest|1 github_source #0|2 target_namespace 9|3 forge_environment 9?|4 repo_kind #1?|6 github_installation_id 3?", a, d];
      }
    }
    class x extends l {
      constructor(e2) {
        super(), this.repos = [], n.proto3.util.initPartial(e2, this);
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
        return ["FilterMirrorableGithubReposRequest|1 repos #0*|2 org_admin_only 8?", a];
      }
    }
    class T extends l {
      constructor(e2) {
        super(), this.mirrorableRepos = [], n.proto3.util.initPartial(e2, this);
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
        return ["FilterMirrorableGithubReposResponse|1 mirrorable_repos #0*", a];
      }
    }
    class R extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["DetachRepoMirrorRequest|1 identifier #0", i];
      }
    }
    class B extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["DetachRepoMirrorResponse"];
      }
    }
    class P extends l {
      constructor(e2) {
        super(), this.dryRun = false, this.allowOverwrite = false, this.waitForCatchUp = false, n.proto3.util.initPartial(e2, this);
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
        return ["ReattachRepoMirrorRequest|1 identifier #0|2 dry_run 8|3 allow_overwrite 8|4 wait_for_catch_up 8", i];
      }
    }
    class J extends l {
      constructor(e2) {
        super(), this.inSync = false, this.totalMismatches = 0, this.localRefCount = 0, this.remoteRefCount = 0, this.divergedRefs = [], this.divergedRefCount = 0, this.sampleComplete = false, this.sampledMismatchCount = 0, n.proto3.util.initPartial(e2, this);
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
        return ["MirrorRefComparison|1 in_sync 8|2 total_mismatches 5|3 local_ref_count 5|4 remote_ref_count 5|5 diverged_refs 9*|6 diverged_ref_count 5|7 sample_complete 8|8 sampled_mismatch_count 5"];
      }
    }
    class M extends l {
      constructor(e2) {
        super(), this.deployKeyPresent = false, this.catchUpDispatched = false, this.catchUpCompleted = false, this.githubStateSkipped = false, n.proto3.util.initPartial(e2, this);
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
        return ["ReattachRepoMirrorResponse|1 repository #0|2 github_state #1|3 deploy_key_present 8|4 catch_up_dispatched 8|5 catch_up_completed 8|6 catch_up_error 9?|7 github_state_skipped 8", se, J];
      }
    }
    class q extends l {
      constructor(e2) {
        super(), this.publicKeyOpenssh = "", this.fingerprintSha256 = "", n.proto3.util.initPartial(e2, this);
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
        return ["RepoMirrorDeployKeyInfo|1 public_key_openssh 9|2 fingerprint_sha256 9|3 created_at #0|4 updated_at #0", n.Timestamp];
      }
    }
    class D extends l {
      constructor(e2) {
        super(), this.rotate = false, n.proto3.util.initPartial(e2, this);
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
        return ["CreateRepoMirrorDeployKeyRequest|1 identifier #0|2 rotate 8", i];
      }
    }
    class O extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["CreateRepoMirrorDeployKeyResponse|1 deploy_key #0", q];
      }
    }
    class N extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetRepoMirrorDeployKeyRequest|1 identifier #0", i];
      }
    }
    class F extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetRepoMirrorDeployKeyResponse|1 deploy_key #0?", q];
      }
    }
    class U extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["DeleteRepoMirrorDeployKeyRequest|1 identifier #0", i];
      }
    }
    class L extends l {
      constructor(e2) {
        super(), this.deleted = false, n.proto3.util.initPartial(e2, this);
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
        return ["DeleteRepoMirrorDeployKeyResponse|1 deleted 8"];
      }
    }
    class $ extends l {
      constructor(e2) {
        super(), this.transition = m.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["TransitionRepoMirrorStatusRequest|1 identifier #0|2 transition #1", i, m];
      }
    }
    class Q extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["TransitionRepoMirrorStatusResponse|1 repository #0|2 active_job_info #1", se, X];
      }
    }
    class j extends l {
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
        return ["ForceRepoMirrorCutoverRequest|1 identifier #0", i];
      }
    }
    class G extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ForceRepoMirrorCutoverResponse|1 repository #0|2 active_job_info #1", se, X];
      }
    }
    class H extends l {
      constructor(e2) {
        super(), this.ref = "", this.wait = false, this.sha = "", n.proto3.util.initPartial(e2, this);
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
        return ["SyncMirrorRequest|1 identifier #0|2 ref 9|3 wait 8|4 sha 9", i];
      }
    }
    class z extends l {
      constructor(e2) {
        super(), this.synced = false, n.proto3.util.initPartial(e2, this);
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
        return ["SyncMirrorResponse|1 synced 8"];
      }
    }
    class W extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetActiveMirrorTransitionJobRequest|1 identifier #0", i];
      }
    }
    class V extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetActiveMirrorTransitionJobResponse|1 active_job_info #0|2 last_job_info #0", X];
      }
    }
    class K extends l {
      constructor(e2) {
        super(), this.jobId = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetMirrorTransitionJobRequest|1 identifier #0|2 job_id 9", i];
      }
    }
    class Y extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetMirrorTransitionJobResponse|1 job #0|2 repository #1", X, se];
      }
    }
    class Z extends l {
      constructor(e2) {
        super(), this.subphase = "", n.proto3.util.initPartial(e2, this);
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
        return ["MirrorFetchProgress|1 subphase 9|2 bytes_received 4?|3 heartbeat_at #0?", n.Timestamp];
      }
    }
    class X extends l {
      constructor(e2) {
        super(), this.id = "", this.transition = m.UNSPECIFIED, this.mirrorStatus = g.UNSPECIFIED, this.status = h.UNSPECIFIED, this.phase = f.UNSPECIFIED, this.attemptCount = 0, this.createdAt = "", this.updatedAt = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new X().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new X().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new X().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(X, e2, t2);
      }
      static $() {
        return ["RepoMirrorTransitionJob|1 id 9|2 identifier #0|3 transition #1|4 mirror_status #2|5 status #3|6 phase #4|7 attempt_count 13|11 drain_until 9?|12 last_error_code 9?|13 last_error_message 9?|15 started_at 9?|16 completed_at 9?|17 created_at 9|18 updated_at 9|19 fetch_progress #5?", i, m, g, h, f, Z];
      }
    }
    class ee extends l {
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
        return ["DeleteRepoClientRequest|1 identifier #0", i];
      }
    }
    class te extends l {
      constructor(e2) {
        super(), this.repoUuid = "", n.proto3.util.initPartial(e2, this);
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
        return ["DeleteRepoClientResponse|1 repo_uuid 9"];
      }
    }
    class re extends l {
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
        return ["DeleteMirroredRepoRequest|1 identifier #0", i];
      }
    }
    class ne extends l {
      constructor(e2) {
        super(), this.repoUuid = "", n.proto3.util.initPartial(e2, this);
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
        return ["DeleteMirroredRepoResponse|1 repo_uuid 9"];
      }
    }
    class se extends l {
      constructor(e2) {
        super(), this.defaultBranch = "", this.mirrorStatus = g.UNSPECIFIED, this.repoUuid = "", this.forgeEnvironment = "", this.originNamespaceId = "", this.allowMergeCommit = false, this.allowSquashMerge = false, this.visibility = p.UNSPECIFIED, this.deleteBranchOnMerge = false, n.proto3.util.initPartial(e2, this);
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
        return ["Repo|1 identifier #0|2 default_branch 9|4 github_node_id 9?|5 github_enterprise_id 9?|6 mirror_status #1|7 active_mirror_transition_job_id 9?|8 repo_uuid 9|9 github_installation_id 4?|10 created_at #2?|11 updated_at #2?|12 last_pushed_at #2?|13 owner_entity_id 3?|14 owner_type 9?|15 forge_environment 9|16 origin_namespace_id 9|17 allow_merge_commit 8|18 allow_squash_merge 8|19 visibility #3|20 delete_branch_on_merge 8|21 deleted_at #2?", i, g, n.Timestamp, p];
      }
    }
    class oe extends l {
      constructor(e2) {
        super(), this.allowMergeCommit = false, this.allowSquashMerge = false, n.proto3.util.initPartial(e2, this);
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
        return ["UpdateRepoMergeSettingsRequest|1 identifier #0|2 allow_merge_commit 8|3 allow_squash_merge 8", i];
      }
    }
    class ie extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["UpdateRepoMergeSettingsResponse|1 repository #0", se];
      }
    }
    class ae extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["UpdateRepoBranchDeletionSettingRequest|1 identifier #0|2 delete_branch_on_merge 8?", i];
      }
    }
    class ce extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["UpdateRepoBranchDeletionSettingResponse|1 repository #0", se];
      }
    }
    class le extends l {
      constructor(e2) {
        super(), this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListRepoCloneKitsRequest|1 identifier #0|2 page_size 13|3 page_token 9", i];
      }
    }
    class ue extends l {
      constructor(e2) {
        super(), this.kits = [], this.nextPageToken = "", this.cloneKitEnabled = false, n.proto3.util.initPartial(e2, this);
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
        return ["ListRepoCloneKitsResponse|1 kits #0*|2 next_page_token 9|3 clone_kit_enabled 8", de];
      }
    }
    class de extends l {
      constructor(e2) {
        super(), this.packHash = "", this.tipCommit = "", this.packSizeBytes = n.protoInt64.zero, this.idxSizeBytes = n.protoInt64.zero, this.revSizeBytes = n.protoInt64.zero, this.kitVersion = "", this.isCurrent = false, this.packSha256 = "", this.idxSha256 = "", this.revSha256 = "", this.chunksSha256 = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new de().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new de().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new de().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(de, e2, t2);
      }
      static $() {
        return ["RepoCloneKitGeneration|1 pack_hash 9|2 tip_commit 9|3 pack_size_bytes 3|4 idx_size_bytes 3|5 rev_size_bytes 3|6 last_published_at #0|7 kit_version 9|8 is_current 8|9 pack_sha256 9|10 idx_sha256 9|11 rev_sha256 9|12 chunks_sha256 9", n.Timestamp];
      }
    }
    class pe extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["UpdateRepoVisibilityRequest|1 identifier #0|2 visibility #1?", i, p];
      }
    }
    class me extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["UpdateRepoVisibilityResponse|1 repository #0", se];
      }
    }
    class he extends l {
      constructor(e2) {
        super(), this.defaultBranch = "", n.proto3.util.initPartial(e2, this);
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
        return ["UpdateRepoDefaultBranchRequest|1 identifier #0|2 default_branch 9", i];
      }
    }
    class fe extends l {
      constructor(e2) {
        super(), this.defaultBranch = "", this.changed = false, n.proto3.util.initPartial(e2, this);
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
        return ["UpdateRepoDefaultBranchResponse|1 default_branch 9|2 changed 8|3 repository #0", se];
      }
    }
    class ge extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetRepoRequest|1 identifier #0|2 include_authenticated_viewer 8?|3 include_merge_queues 8?", i];
      }
    }
    class ye extends l {
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
        return ["AuthenticatedOriginViewer|1 identity #0|2 profile #1|3 gate #2|4 policy #3", ve, _e, Ae, Se];
      }
    }
    var we = (0, s.QT)(n.proto3, c, "AuthenticatedOriginViewer.OriginDisabledState", [[0, "UNSPECIFIED"], [1, "NOT_DISABLED"], [2, "DISABLED"], [3, "UNAVAILABLE"]], 1);
    class ve extends l {
      constructor(e2) {
        super(), this.authId = "", this.publicUserId = "", this.originAuthorIds = [], n.proto3.util.initPartial(e2, this);
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
        return ["AuthenticatedOriginViewer.Identity|1 auth_id 9|2 public_user_id 9|3 origin_author_ids 9*"];
      }
    }
    class _e extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AuthenticatedOriginViewer.Profile|1 email 9?|2 first_name 9?|3 last_name 9?|4 avatar_url 9?"];
      }
    }
    class Ae extends l {
      constructor(e2) {
        super(), this.isEnterpriseUser = false, n.proto3.util.initPartial(e2, this);
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
        return ["AuthenticatedOriginViewer.GateAttributes|1 team_id 5?|2 created_at_iso 9?|3 is_enterprise_user 8|4 email_domain_type 9?|5 country 9?|6 organization_id 3?|7 organization_public_id 9?|8 is_team_admin 8?"];
      }
    }
    class Se extends l {
      constructor(e2) {
        super(), this.originDisabled = we.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["AuthenticatedOriginViewer.ReviewPolicy|1 origin_disabled #0", we];
      }
    }
    class be extends l {
      constructor(e2) {
        super(), this.mergeQueueTargetRefs = [], this.mergeQueueAvailable = false, n.proto3.util.initPartial(e2, this);
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
        return ["GetRepoResponse|1 repository #0|2 github_mirror_info #1?|3 merge_queue_target_refs 9*|4 merge_queue_available 8", se, Ee];
      }
    }
    class Ee extends l {
      constructor(e2) {
        super(), this.githubOwner = "", this.githubRepo = "", this.githubRepoUrl = "", n.proto3.util.initPartial(e2, this);
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
        return ["RepoGithubMirrorInfo|1 github_owner 9|2 github_repo 9|3 github_repo_url 9"];
      }
    }
    class Ie extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetRepoWithMirrorInfoResponse|1 repository #0|2 github_mirror_info #1|3 viewer_can_write_changes 8?|4 authenticated_viewer #2?", se, Ee, ye];
      }
    }
    class Ce extends l {
      constructor(e2) {
        super(), this.githubNodeId = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetRepoByGithubMirrorRequest|1 github_node_id 9|2 github_enterprise_id 9?"];
      }
    }
    class ke extends l {
      constructor(e2) {
        super(), this.manifestMs = 0, this.downloadMs = 0, this.verifyMs = 0, this.fetchMs = 0, this.checkoutMs = 0, this.totalMs = 0, n.proto3.util.initPartial(e2, this);
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
        return ["CloneKitTimingsMs|1 manifest_ms 5|2 download_ms 5|3 verify_ms 5|4 fetch_ms 5|5 checkout_ms 5|6 total_ms 5"];
      }
    }
    class xe extends l {
      constructor(e2) {
        super(), this.invocationId = "", this.artifactBytes = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
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
        return ["RecordCloneKitUsageRequest|1 invocation_id 9|2 identifier #0|3 artifact_bytes 3|4 timings #1?", i, ke];
      }
    }
    class Te extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RecordCloneKitUsageResponse"];
      }
    }
    class Re extends l {
      constructor(e2) {
        super(), this.id = "", this.ownerType = y.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, this.namespace = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Re().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Re().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Re().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Re, e2, t2);
      }
      static $() {
        return ["OriginNamespace|1 id 9|2 owner_type #0|3 owner_entity_id 3|4 namespace 9", y];
      }
    }
    class Be extends l {
      constructor(e2) {
        super(), this.ownerType = y.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, this.namespace = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Be().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Be().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Be().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Be, e2, t2);
      }
      static $() {
        return ["CreateOriginNamespaceRequest|1 owner_type #0|2 owner_entity_id 3|3 namespace 9", y];
      }
    }
    class Pe extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["CreateOriginNamespaceResponse|1 origin_namespace #0", Re];
      }
    }
    class Je extends l {
      constructor(e2) {
        super(), this.ownerType = y.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, this.namespace = "", n.proto3.util.initPartial(e2, this);
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
        return ["SetupTeamNamespaceRequest|1 owner_type #0|2 owner_entity_id 3|3 namespace 9", y];
      }
    }
    class Me extends l {
      constructor(e2) {
        super(), this.namespaceCreated = false, this.grantsChanged = false, n.proto3.util.initPartial(e2, this);
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
        return ["SetupTeamNamespaceResponse|1 origin_namespace #0|2 namespace_created 8|3 grants_changed 8", Re];
      }
    }
    class qe extends l {
      constructor(e2) {
        super(), this.namespace = "", n.proto3.util.initPartial(e2, this);
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
        return ["SetupUserNamespaceRequest|1 namespace 9"];
      }
    }
    class De extends l {
      constructor(e2) {
        super(), this.preferredSlug = "", n.proto3.util.initPartial(e2, this);
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
        return ["SuggestOriginNamespaceRequest|1 preferred_slug 9"];
      }
    }
    class Oe extends l {
      constructor(e2) {
        super(), this.available = false, this.normalizedSlug = "", this.suggestedSlug = "", this.message = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Oe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Oe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Oe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Oe, e2, t2);
      }
      static $() {
        return ["SuggestOriginNamespaceResponse|1 available 8|2 normalized_slug 9|3 suggested_slug 9|4 message 9"];
      }
    }
    class Ne extends l {
      constructor(e2) {
        super(), this.namespaceCreated = false, this.grantsChanged = false, n.proto3.util.initPartial(e2, this);
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
        return ["SetupUserNamespaceResponse|1 origin_namespace #0|2 namespace_created 8|3 grants_changed 8", Re];
      }
    }
    class Fe extends l {
      constructor(e2) {
        super(), this.ownerType = y.UNSPECIFIED, this.ownerEntityId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
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
        return ["GetRepoNamespaceRequest|1 owner_type #0|2 owner_entity_id 3", y];
      }
    }
    class Ue extends l {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ue().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ue().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ue().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ue, e2, t2);
      }
      static $() {
        return ["GetRepoNamespaceResponse|1 origin_namespace #0", Re];
      }
    }
    class Le extends l {
      constructor(e2) {
        super(), this.teamId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
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
        return ["DoesNamespaceExistForTeamRequest|1 team_id 3"];
      }
    }
    class $e extends l {
      constructor(e2) {
        super(), this.exists = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $e().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $e().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $e().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($e, e2, t2);
      }
      static $() {
        return ["DoesNamespaceExistForTeamResponse|1 exists 8"];
      }
    }
    class Qe extends l {
      constructor(e2) {
        super(), this.includeExplicitGrantNamespaces = false, this.includeAllTeams = false, this.includeGrantedNamespaces = false, n.proto3.util.initPartial(e2, this);
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
        return ["GetAuthorizedNamespacesRequest|1 include_explicit_grant_namespaces 8|2 include_all_teams 8|3 include_granted_namespaces 8"];
      }
    }
    class je extends l {
      constructor(e2) {
        super(), this.namespaces = [], this.originDisabledForTeam = false, n.proto3.util.initPartial(e2, this);
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
        return ["GetAuthorizedNamespacesResponse|1 namespaces #0*|2 origin_disabled_for_team 8", Ge];
      }
    }
    class Ge extends l {
      constructor(e2) {
        super(), this.accessReason = w.UNSPECIFIED, this.originAllowPublicRepos = false, this.appWorkloadIdentityEnabled = false, n.proto3.util.initPartial(e2, this);
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
        return ["AuthorizedNamespace|1 namespace #0|2 access_reason #1|3 origin_allow_public_repos 8|4 app_workload_identity_enabled 8", Re, w];
      }
    }
    const He = "origin.v1.";
    class ze extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return He;
      }
    }
    var We = (0, s.QT)(n.proto3, He, "AuthPolicyAppliesTo", [[0, "UNSPECIFIED"], [1, "REPOSITORY"], [2, "NAMESPACE"], [4, "APP"]], 1), Ve = (0, s.QT)(n.proto3, He, "GroupScope", [[0, "UNSPECIFIED"], [1, "ORG"], [2, "TEAM"]], 1), Ke = (0, s.QT)(n.proto3, He, "TeamGroupKind", [[0, "UNSPECIFIED"], [1, "ADMINS"], [2, "MEMBERS"]], 1);
    class Ye extends ze {
      constructor(e2) {
        super(), this.resourceKind = "", this.action = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ye().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ye().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ye().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ye, e2, t2);
      }
      static $() {
        return ["AuthPolicyStatement|1 resource_kind 9|2 action 9"];
      }
    }
    class Ze extends ze {
      constructor(e2) {
        super(), this.scope = "", this.resource = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["HasOriginPermissionRequest|1 scope 9|2 namespace_slug 9 resource|3 repository #0 resource|4 app_id 9 resource", i];
      }
    }
    class Xe extends ze {
      constructor(e2) {
        super(), this.allowed = false, n.proto3.util.initPartial(e2, this);
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
        return ["HasOriginPermissionResponse|1 allowed 8"];
      }
    }
    class et extends ze {
      constructor(e2) {
        super(), this.name = "", this.displayName = "", this.description = "", this.appliesTo = We.UNSPECIFIED, this.isOriginManaged = false, this.isCustom = false, this.statements = [], this.userFacingScopeCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new et().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new et().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new et().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(et, e2, t2);
      }
      static $() {
        return ["AuthPolicySummary|1 name 9|2 display_name 9|3 description 9|4 applies_to #0|5 is_origin_managed 8|6 is_custom 8|7 statements #1*|8 user_facing_scope_count 5", We, Ye];
      }
    }
    class tt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tt, e2, t2);
      }
      static $() {
        return ["ListRepoAssignablePoliciesRequest|1 identifier #0", i];
      }
    }
    class rt extends ze {
      constructor(e2) {
        super(), this.policies = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rt, e2, t2);
      }
      static $() {
        return ["ListRepoAssignablePoliciesResponse|1 policies #0*", et];
      }
    }
    class nt extends ze {
      constructor(e2) {
        super(), this.name = "", this.displayName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nt, e2, t2);
      }
      static $() {
        return ["GrantPolicyRef|1 name 9|2 display_name 9"];
      }
    }
    class st extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new st().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new st().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new st().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(st, e2, t2);
      }
      static $() {
        return ["TeamGroupAccess|1 namespace_policy #0|2 repo_policy #0|3 effective_policy #0", nt];
      }
    }
    class ot extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ot().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ot().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ot().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ot, e2, t2);
      }
      static $() {
        return ["GetRepoTeamAccessRequest|1 identifier #0", i];
      }
    }
    class it extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new it().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new it().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new it().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(it, e2, t2);
      }
      static $() {
        return ["GetRepoTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1", Re, st];
      }
    }
    class at extends ze {
      constructor(e2) {
        super(), this.kind = "", this.externalId = "", this.displayName = "", this.email = "", this.groupAdminCount = 0, this.groupMemberCount = 0, this.groupScope = Ve.UNSPECIFIED, this.isIdpSynced = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new at().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new at().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new at().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(at, e2, t2);
      }
      static $() {
        return ["GrantPrincipal|1 kind 9|2 external_id 9|3 display_name 9|4 email 9|5 group_admin_count 5|6 group_member_count 5|7 group_scope #0|8 is_idp_synced 8", Ve];
      }
    }
    class ct extends ze {
      constructor(e2) {
        super(), this.isNamespaceOwned = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ct().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ct().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ct().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ct, e2, t2);
      }
      static $() {
        return ["RepoGrantRow|1 principal #0|2 namespace_policy #1|3 repo_policy #1|4 effective_policy #1|5 is_namespace_owned 8", at, nt];
      }
    }
    class lt extends ze {
      constructor(e2) {
        super(), this.page = 0, this.pageSize = 0, this.search = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lt, e2, t2);
      }
      static $() {
        return ["ListRepoGrantsRequest|1 identifier #0|2 page 5|3 page_size 5|4 search 9", i];
      }
    }
    class ut extends ze {
      constructor(e2) {
        super(), this.rows = [], this.totalCount = 0, this.listTruncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ut().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ut().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ut().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ut, e2, t2);
      }
      static $() {
        return ["ListRepoGrantsResponse|1 rows #0*|2 total_count 5|3 list_truncated 8", ct];
      }
    }
    class dt extends ze {
      constructor(e2) {
        super(), this.group = Ke.UNSPECIFIED, this.policyUpdate = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dt, e2, t2);
      }
      static $() {
        return ["SetRepoTeamAccessRequest|1 identifier #0|2 group #1|3 policy_name 9 policy_update|4 clear_override 8 policy_update", i, Ke];
      }
    }
    class pt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pt, e2, t2);
      }
      static $() {
        return ["SetRepoTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1", Re, st];
      }
    }
    class mt extends ze {
      constructor(e2) {
        super(), this.userId = "", this.policyUpdate = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mt, e2, t2);
      }
      static $() {
        return ["SetRepoUserAccessRequest|1 identifier #0|2 user_id 9|3 policy_name 9 policy_update|4 clear_access 8 policy_update", i];
      }
    }
    class ht extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ht().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ht().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ht().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ht, e2, t2);
      }
      static $() {
        return ["SetRepoUserAccessResponse"];
      }
    }
    class ft extends ze {
      constructor(e2) {
        super(), this.groupId = "", this.policyUpdate = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ft().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ft().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ft().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ft, e2, t2);
      }
      static $() {
        return ["SetRepoGroupAccessRequest|1 identifier #0|2 group_id 9|3 policy_name 9 policy_update|4 clear_access 8 policy_update", i];
      }
    }
    class gt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gt, e2, t2);
      }
      static $() {
        return ["SetRepoGroupAccessResponse"];
      }
    }
    class yt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yt, e2, t2);
      }
      static $() {
        return ["NamespaceTeamGroupAccess|1 policy #0", nt];
      }
    }
    class wt extends ze {
      constructor(e2) {
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wt, e2, t2);
      }
      static $() {
        return ["GetNamespaceTeamAccessRequest|1 namespace_slug 9"];
      }
    }
    class vt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vt, e2, t2);
      }
      static $() {
        return ["GetNamespaceTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1", Re, yt];
      }
    }
    class _t extends ze {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.group = Ke.UNSPECIFIED, this.policyUpdate = { case: void 0 }, this.retainSelfAdmin = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _t().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _t().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _t().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_t, e2, t2);
      }
      static $() {
        return ["SetNamespaceTeamAccessRequest|1 namespace_slug 9|2 group #0|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8", Ke];
      }
    }
    class At extends ze {
      constructor(e2) {
        super(), this.selfAdminGranted = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new At().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new At().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new At().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(At, e2, t2);
      }
      static $() {
        return ["SetNamespaceTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1|4 self_admin_granted 8", Re, yt];
      }
    }
    class St extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new St().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new St().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new St().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(St, e2, t2);
      }
      static $() {
        return ["NamespaceGrantRow|1 principal #0|2 policy #1", at, nt];
      }
    }
    class bt extends ze {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.page = 0, this.pageSize = 0, this.search = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bt, e2, t2);
      }
      static $() {
        return ["ListNamespaceGrantsRequest|1 namespace_slug 9|2 page 5|3 page_size 5|4 search 9"];
      }
    }
    class Et extends ze {
      constructor(e2) {
        super(), this.rows = [], this.totalCount = 0, this.listTruncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Et().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Et().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Et().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Et, e2, t2);
      }
      static $() {
        return ["ListNamespaceGrantsResponse|1 rows #0*|2 total_count 5|3 list_truncated 8", St];
      }
    }
    class It extends ze {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.userIds = [], this.policyUpdate = { case: void 0 }, this.retainSelfAdmin = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new It().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new It().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new It().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(It, e2, t2);
      }
      static $() {
        return ["SetNamespaceUserAccessRequest|1 namespace_slug 9|2 user_ids 9*|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8"];
      }
    }
    class Ct extends ze {
      constructor(e2) {
        super(), this.selfAdminGranted = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ct().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ct().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ct().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ct, e2, t2);
      }
      static $() {
        return ["SetNamespaceUserAccessResponse|1 namespace #0|2 self_admin_granted 8", Re];
      }
    }
    class kt extends ze {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.groupIds = [], this.policyUpdate = { case: void 0 }, this.retainSelfAdmin = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kt, e2, t2);
      }
      static $() {
        return ["SetNamespaceGroupAccessRequest|1 namespace_slug 9|2 group_ids 9*|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8"];
      }
    }
    class xt extends ze {
      constructor(e2) {
        super(), this.selfAdminGranted = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xt, e2, t2);
      }
      static $() {
        return ["SetNamespaceGroupAccessResponse|1 namespace #0|2 self_admin_granted 8", Re];
      }
    }
    class Tt extends ze {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.groupId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tt, e2, t2);
      }
      static $() {
        return ["ListGroupGrantsInNamespaceRequest|1 namespace_slug 9|2 group_id 9"];
      }
    }
    class Rt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rt, e2, t2);
      }
      static $() {
        return ["GroupRepoGrant|1 repository #0|2 namespace_policy #1|3 repo_policy #1|4 effective_policy #1", i, nt];
      }
    }
    class Bt extends ze {
      constructor(e2) {
        super(), this.repoGrants = [], this.listTruncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bt, e2, t2);
      }
      static $() {
        return ["ListGroupGrantsInNamespaceResponse|1 principal #0|2 namespace_policy #1|3 repo_grants #2*|4 list_truncated 8", at, nt, Rt];
      }
    }
    class Pt extends ze {
      constructor(e2) {
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pt, e2, t2);
      }
      static $() {
        return ["ListNamespaceAssignablePoliciesRequest|1 namespace_slug 9"];
      }
    }
    class Jt extends ze {
      constructor(e2) {
        super(), this.policies = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jt, e2, t2);
      }
      static $() {
        return ["ListNamespaceAssignablePoliciesResponse|1 policies #0*", et];
      }
    }
    class Mt extends ze {
      constructor(e2) {
        super(), this.id = "", this.inviteeEmail = "", this.policyName = "", this.invitedByPrincipalKind = "", this.invitedByPrincipalId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mt, e2, t2);
      }
      static $() {
        return ["RepoShareInvite|1 id 9|2 invitee_email 9|3 policy_name 9|4 expires_at #0|5 accepted_at #0|6 declined_at #0|7 revoked_at #0|8 created_at #0|9 invited_by_principal_kind 9|10 invited_by_principal_id 9", n.Timestamp];
      }
    }
    class qt extends ze {
      constructor(e2) {
        super(), this.inviteeEmail = "", this.policyName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qt, e2, t2);
      }
      static $() {
        return ["CreateRepoShareInviteRequest|1 identifier #0|2 invitee_email 9|3 policy_name 9", i];
      }
    }
    class Dt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dt, e2, t2);
      }
      static $() {
        return ["CreateRepoShareInviteResponse|1 invite #0", Mt];
      }
    }
    class Ot extends ze {
      constructor(e2) {
        super(), this.inviteeEmails = [], this.policyName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ot().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ot().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ot().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ot, e2, t2);
      }
      static $() {
        return ["CreateRepoShareBatchInvitesRequest|1 identifier #0|2 invitee_emails 9*|3 policy_name 9", i];
      }
    }
    class Nt extends ze {
      constructor(e2) {
        super(), this.message = "", this.code = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nt, e2, t2);
      }
      static $() {
        return ["RepoShareInviteAttemptError|1 message 9|2 code 5"];
      }
    }
    class Ft extends ze {
      constructor(e2) {
        super(), this.inviteeEmail = "", this.outcome = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ft().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ft().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ft().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ft, e2, t2);
      }
      static $() {
        return ["RepoShareInviteAttempt|1 invitee_email 9|2 invite #0 outcome|3 error #1 outcome", Mt, Nt];
      }
    }
    class Ut extends ze {
      constructor(e2) {
        super(), this.attempts = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ut().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ut().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ut().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ut, e2, t2);
      }
      static $() {
        return ["CreateRepoShareBatchInvitesResponse|1 attempts #0*", Ft];
      }
    }
    class Lt extends ze {
      constructor(e2) {
        super(), this.inviteId = "", this.rotateToken = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lt, e2, t2);
      }
      static $() {
        return ["UpdateRepoShareInviteRequest|1 identifier #0|2 invite_id 9|3 policy_name 9?|4 rotate_token 8", i];
      }
    }
    class $t extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $t().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $t().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $t().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($t, e2, t2);
      }
      static $() {
        return ["UpdateRepoShareInviteResponse|1 invite #0", Mt];
      }
    }
    class Qt extends ze {
      constructor(e2) {
        super(), this.inviteId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qt, e2, t2);
      }
      static $() {
        return ["RevokeRepoShareInviteRequest|1 identifier #0|2 invite_id 9", i];
      }
    }
    class jt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jt, e2, t2);
      }
      static $() {
        return ["RevokeRepoShareInviteResponse|1 invite #0", Mt];
      }
    }
    class Gt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gt, e2, t2);
      }
      static $() {
        return ["ListRepoShareInvitesRequest|1 identifier #0", i];
      }
    }
    class Ht extends ze {
      constructor(e2) {
        super(), this.invites = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ht().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ht().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ht().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ht, e2, t2);
      }
      static $() {
        return ["ListRepoShareInvitesResponse|1 invites #0*", Mt];
      }
    }
    class zt extends ze {
      constructor(e2) {
        super(), this.inviteeEmail = "", this.inviterDisplayName = "", this.policyName = "", this.inviteId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zt, e2, t2);
      }
      static $() {
        return ["RepoShareInviteDetails|1 invitee_email 9|2 repository #0|3 inviter_display_name 9|4 policy_name 9|5 expires_at #1|6 invite_id 9", i, n.Timestamp];
      }
    }
    class Wt extends ze {
      constructor(e2) {
        super(), this.token = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wt, e2, t2);
      }
      static $() {
        return ["GetShareInviteByTokenRequest|1 token 9"];
      }
    }
    class Vt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vt, e2, t2);
      }
      static $() {
        return ["GetShareInviteByTokenResponse|1 invite #0", zt];
      }
    }
    class Kt extends ze {
      constructor(e2) {
        super(), this.locator = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kt, e2, t2);
      }
      static $() {
        return ["DeclineShareInviteRequest|1 token 9 locator|2 invite_id 9 locator"];
      }
    }
    class Yt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yt, e2, t2);
      }
      static $() {
        return ["DeclineShareInviteResponse"];
      }
    }
    class Zt extends ze {
      constructor(e2) {
        super(), this.locator = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zt, e2, t2);
      }
      static $() {
        return ["AcceptShareInviteRequest|1 token 9 locator|2 invite_id 9 locator"];
      }
    }
    class Xt extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xt, e2, t2);
      }
      static $() {
        return ["AcceptShareInviteResponse|1 repository #0", i];
      }
    }
    class er extends ze {
      constructor(e2) {
        super(), this.inviteId = "", this.inviterDisplayName = "", this.policyName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new er().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new er().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new er().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(er, e2, t2);
      }
      static $() {
        return ["MyShareInvite|1 invite_id 9|2 repository #0|3 inviter_display_name 9|4 policy_name 9|5 expires_at #1|6 created_at #1", i, n.Timestamp];
      }
    }
    class tr extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tr, e2, t2);
      }
      static $() {
        return ["ListMyShareInvitesRequest"];
      }
    }
    class rr extends ze {
      constructor(e2) {
        super(), this.invites = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rr, e2, t2);
      }
      static $() {
        return ["ListMyShareInvitesResponse|1 invites #0*", er];
      }
    }
    class nr extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nr, e2, t2);
      }
      static $() {
        return ["MyExternalRepository|1 repository #0|2 policy #1|3 added_at #2", i, nt, n.Timestamp];
      }
    }
    class sr extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sr, e2, t2);
      }
      static $() {
        return ["ListMyExternalRepositoriesRequest"];
      }
    }
    class or extends ze {
      constructor(e2) {
        super(), this.repositories = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new or().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new or().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new or().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(or, e2, t2);
      }
      static $() {
        return ["ListMyExternalRepositoriesResponse|1 repositories #0*", nr];
      }
    }
    class ir extends ze {
      constructor(e2) {
        super(), this.userId = "", this.displayName = "", this.email = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ir().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ir().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ir().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ir, e2, t2);
      }
      static $() {
        return ["RepoExternalCollaboratorRow|1 user_id 9|2 display_name 9|3 email 9|4 policy #0|5 added_at #1", nt, n.Timestamp];
      }
    }
    class ar extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ar().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ar().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ar().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ar, e2, t2);
      }
      static $() {
        return ["ListRepoExternalCollaboratorsRequest|1 identifier #0", i];
      }
    }
    class cr extends ze {
      constructor(e2) {
        super(), this.rows = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cr, e2, t2);
      }
      static $() {
        return ["ListRepoExternalCollaboratorsResponse|1 rows #0*", ir];
      }
    }
    class lr extends ze {
      constructor(e2) {
        super(), this.userId = "", this.policyUpdate = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lr, e2, t2);
      }
      static $() {
        return ["SetRepoExternalCollaboratorAccessRequest|1 identifier #0|2 user_id 9|3 policy #1 policy_update|4 remove 8 policy_update", i, nt];
      }
    }
    class ur extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ur().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ur().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ur().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ur, e2, t2);
      }
      static $() {
        return ["SetRepoExternalCollaboratorAccessResponse"];
      }
    }
    class dr extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dr, e2, t2);
      }
      static $() {
        return ["LeaveMyExternalRepositoryRequest|1 identifier #0", i];
      }
    }
    class pr extends ze {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pr, e2, t2);
      }
      static $() {
        return ["LeaveMyExternalRepositoryResponse"];
      }
    }
    class mr extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class hr extends mr {
      constructor(e2) {
        super(), this.id = "", this.name = "", this.algo = "", this.fingerprint = "", this.publicKey = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hr, e2, t2);
      }
      static $() {
        return ["NamespaceSshCertificateAuthority|1 id 9|2 name 9|3 algo 9|4 fingerprint 9|5 public_key 9|6 created_at #0", n.Timestamp];
      }
    }
    class fr extends mr {
      constructor(e2) {
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fr, e2, t2);
      }
      static $() {
        return ["GetNamespaceSshCertificateAuthoritiesRequest|1 namespace_slug 9"];
      }
    }
    class gr extends mr {
      constructor(e2) {
        super(), this.certificateAuthorities = [], this.requireCertificates = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gr, e2, t2);
      }
      static $() {
        return ["GetNamespaceSshCertificateAuthoritiesResponse|1 certificate_authorities #0*|2 require_certificates 8", hr];
      }
    }
    class yr extends mr {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.publicKey = "", this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yr, e2, t2);
      }
      static $() {
        return ["AddNamespaceSshCertificateAuthorityRequest|1 namespace_slug 9|2 public_key 9|3 name 9"];
      }
    }
    class wr extends mr {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wr, e2, t2);
      }
      static $() {
        return ["AddNamespaceSshCertificateAuthorityResponse|1 certificate_authority #0", hr];
      }
    }
    class vr extends mr {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vr, e2, t2);
      }
      static $() {
        return ["RemoveNamespaceSshCertificateAuthorityRequest|1 namespace_slug 9|2 id 9"];
      }
    }
    class _r extends mr {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _r().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _r().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _r().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_r, e2, t2);
      }
      static $() {
        return ["RemoveNamespaceSshCertificateAuthorityResponse"];
      }
    }
    class Ar extends mr {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.requireCertificates = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ar().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ar().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ar().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ar, e2, t2);
      }
      static $() {
        return ["SetNamespaceSshRequireCertificatesRequest|1 namespace_slug 9|2 require_certificates 8"];
      }
    }
    class Sr extends mr {
      constructor(e2) {
        super(), this.requireCertificates = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sr, e2, t2);
      }
      static $() {
        return ["SetNamespaceSshRequireCertificatesResponse|1 require_certificates 8"];
      }
    }
    class br extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Er extends br {
      constructor(e2) {
        super(), this.cidr = "", this.description = "", this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Er().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Er().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Er().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Er, e2, t2);
      }
      static $() {
        return ["NamespaceInboundIpAllowlistEntry|1 cidr 9|2 description 9|3 enabled 8?|4 created_at #0|5 id 9", n.Timestamp];
      }
    }
    class Ir extends br {
      constructor(e2) {
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ir().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ir().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ir().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ir, e2, t2);
      }
      static $() {
        return ["GetNamespaceInboundIpAllowlistRequest|1 namespace_slug 9"];
      }
    }
    class Cr extends br {
      constructor(e2) {
        super(), this.enabled = false, this.entries = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cr, e2, t2);
      }
      static $() {
        return ["GetNamespaceInboundIpAllowlistResponse|1 enabled 8|2 entries #0*", Er];
      }
    }
    class kr extends br {
      constructor(e2) {
        super(), this.namespaceSlug = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kr, e2, t2);
      }
      static $() {
        return ["AddNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 entry #0", Er];
      }
    }
    class xr extends br {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xr, e2, t2);
      }
      static $() {
        return ["AddNamespaceInboundIpAllowlistEntryResponse|1 entry #0", Er];
      }
    }
    class Tr extends br {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.cidr = "", this.entryId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tr, e2, t2);
      }
      static $() {
        return ["UpdateNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 cidr 9|3 next_cidr 9?|4 description 9?|5 enabled 8?|6 entry_id 9"];
      }
    }
    class Rr extends br {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rr, e2, t2);
      }
      static $() {
        return ["UpdateNamespaceInboundIpAllowlistEntryResponse|1 entry #0", Er];
      }
    }
    class Br extends br {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.cidr = "", this.entryId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Br().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Br().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Br().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Br, e2, t2);
      }
      static $() {
        return ["DeleteNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 cidr 9|3 entry_id 9"];
      }
    }
    class Pr extends br {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pr, e2, t2);
      }
      static $() {
        return ["DeleteNamespaceInboundIpAllowlistEntryResponse"];
      }
    }
    class Jr extends br {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.enabled = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jr, e2, t2);
      }
      static $() {
        return ["SetNamespaceInboundIpAllowlistEnabledRequest|1 namespace_slug 9|2 enabled 8"];
      }
    }
    class Mr extends br {
      constructor(e2) {
        super(), this.enabled = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mr, e2, t2);
      }
      static $() {
        return ["SetNamespaceInboundIpAllowlistEnabledResponse|1 enabled 8"];
      }
    }
    class qr extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Dr extends qr {
      constructor(e2) {
        super(), this.id = "", this.name = "", this.algo = "", this.fingerprint = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dr, e2, t2);
      }
      static $() {
        return ["SshPublicKey|1 id 9|2 name 9|3 algo 9|4 fingerprint 9|5 created_at #0|6 last_used_at #0", n.Timestamp];
      }
    }
    class Or extends qr {
      constructor(e2) {
        super(), this.publicKey = "", this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Or().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Or().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Or().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Or, e2, t2);
      }
      static $() {
        return ["AddSshPublicKeyRequest|1 public_key 9|2 name 9"];
      }
    }
    class Nr extends qr {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nr, e2, t2);
      }
      static $() {
        return ["AddSshPublicKeyResponse|1 ssh_public_key #0", Dr];
      }
    }
    class Fr extends qr {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fr, e2, t2);
      }
      static $() {
        return ["ListSshPublicKeysRequest"];
      }
    }
    class Ur extends qr {
      constructor(e2) {
        super(), this.sshPublicKeys = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ur().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ur().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ur().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ur, e2, t2);
      }
      static $() {
        return ["ListSshPublicKeysResponse|1 ssh_public_keys #0*", Dr];
      }
    }
    class Lr extends qr {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lr, e2, t2);
      }
      static $() {
        return ["DeleteSshPublicKeyRequest|1 id 9"];
      }
    }
    class $r extends qr {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $r().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $r().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $r().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($r, e2, t2);
      }
      static $() {
        return ["DeleteSshPublicKeyResponse"];
      }
    }
    const Qr = "origin.v1.";
    class jr extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return Qr;
      }
    }
    var Gr = (0, s.QT)(n.proto3, Qr, "EventType", [[0, "UNSPECIFIED"], [1, "REVIEW_REQUESTED"], [2, "PULL_OPENED"], [3, "PULL_READY"], [4, "PULL_MERGED"], [5, "REVIEW_SUBMITTED"], [6, "COMMENT_CREATED"], [7, "MENTION"]], 1);
    class Hr extends jr {
      constructor(e2) {
        super(), this.id = "", this.originNamespaceId = "", this.slackTeamId = "", this.ignoreDrafts = false, this.events = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hr, e2, t2);
      }
      static $() {
        return ["OriginSlackNotification|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9|4 ignore_drafts 8|5 events #0*|8 notify_app_bots 8?|6 created_at #1|7 updated_at #1", Gr, n.Timestamp];
      }
    }
    class zr extends jr {
      constructor(e2) {
        super(), this.originNamespaceId = "", this.ignoreDrafts = false, this.events = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zr, e2, t2);
      }
      static $() {
        return ["UpsertOriginUserSlackNotificationRequest|1 origin_namespace_id 9|2 slack_team_id 9?|3 ignore_drafts 8|4 events #0*|5 notify_app_bots 8?", Gr];
      }
    }
    class Wr extends jr {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wr, e2, t2);
      }
      static $() {
        return ["UpsertOriginUserSlackNotificationResponse|1 notification #0", Hr];
      }
    }
    class Vr extends jr {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vr, e2, t2);
      }
      static $() {
        return ["DeleteOriginUserSlackNotificationRequest|1 id 9"];
      }
    }
    class Kr extends jr {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kr, e2, t2);
      }
      static $() {
        return ["DeleteOriginUserSlackNotificationResponse"];
      }
    }
    class Yr extends jr {
      constructor(e2) {
        super(), this.originNamespaceId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yr, e2, t2);
      }
      static $() {
        return ["GetOriginUserSlackNotificationRequest|1 slack_team_id 9?|2 origin_namespace_id 9"];
      }
    }
    class Zr extends jr {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zr, e2, t2);
      }
      static $() {
        return ["GetOriginUserSlackNotificationResponse|1 notification #0?", Hr];
      }
    }
    const Xr = "origin.v1.";
    class en extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return Xr;
      }
    }
    var tn = (0, s.QT)(n.proto3, Xr, "CommitEmailGithubState", [[0, "UNSPECIFIED"], [1, "UNKNOWN"], [2, "NOT_ADDED"], [3, "UNVERIFIED"], [4, "VERIFIED"], [5, "NOT_CONNECTED"]], 1), rn = (0, s.QT)(n.proto3, Xr, "CommitEmailVerificationState", [[0, "UNSPECIFIED"], [1, "NOT_STARTED"], [2, "WAITING_FOR_EMAIL"], [3, "READY_TO_VERIFY"], [4, "VERIFIED"], [5, "IDENTITY_MISMATCH"], [6, "EMAIL_NOT_RECEIVED"], [7, "EXPIRED"]], 1);
    class nn extends en {
      constructor(e2) {
        super(), this.noreplyEmail = "", this.eligible = false, this.connectedGithubLogin = "", this.githubState = tn.UNSPECIFIED, this.state = rn.UNSPECIFIED, this.verificationUrl = "", this.mismatchedGithubLogin = "", this.githubSettingsEmailsUrl = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nn, e2, t2);
      }
      static $() {
        return ["OriginCommitEmailVerification|1 noreply_email 9|2 eligible 8|3 connected_github_login 9|4 github_state #0|5 state #1|6 verification_url 9|7 mismatched_github_login 9|8 github_settings_emails_url 9|9 updated_at #2", tn, rn, n.Timestamp];
      }
    }
    class sn extends en {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sn, e2, t2);
      }
      static $() {
        return ["GetOriginCommitEmailVerificationRequest"];
      }
    }
    class on extends en {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new on().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new on().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new on().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(on, e2, t2);
      }
      static $() {
        return ["GetOriginCommitEmailVerificationResponse|1 verification #0", nn];
      }
    }
    class an extends en {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new an().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new an().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new an().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(an, e2, t2);
      }
      static $() {
        return ["StartOriginCommitEmailVerificationRequest"];
      }
    }
    class cn extends en {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cn, e2, t2);
      }
      static $() {
        return ["StartOriginCommitEmailVerificationResponse|1 verification #0", nn];
      }
    }
    const ln = "origin.v1.";
    class un extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return ln;
      }
    }
    var dn = (0, s.QT)(n.proto3, ln, "SlackReviewReminderDayOfWeek", [[0, "UNSPECIFIED"], [1, "MONDAY"], [2, "TUESDAY"], [3, "WEDNESDAY"], [4, "THURSDAY"], [5, "FRIDAY"], [6, "SATURDAY"], [7, "SUNDAY"]], 1);
    class pn extends un {
      constructor(e2) {
        super(), this.includeTeamReviewRequests = false, this.ignoreDrafts = false, this.requiredLabels = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pn, e2, t2);
      }
      static $() {
        return ["OriginSlackReviewReminderFilters|1 include_team_review_requests 8|2 ignore_drafts 8|3 require_review_request 8?|4 remind_authors_after_reviews 8?|5 ignore_approved_count 8?|6 required_labels 9*"];
      }
    }
    class mn extends un {
      constructor(e2) {
        super(), this.id = "", this.originNamespaceId = "", this.slackTeamId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", this.enabled = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mn, e2, t2);
      }
      static $() {
        return ["OriginSlackReviewReminder|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9|4 repo_ids 9*|5 days_of_week #0*|6 times_of_day 9*|7 time_zone 9|8 filters #1|9 enabled 8|10 last_sent_at #2?|11 last_outcome 9?|12 created_at #2|13 updated_at #2", dn, pn, n.Timestamp];
      }
    }
    class hn extends un {
      constructor(e2) {
        super(), this.originNamespaceId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hn, e2, t2);
      }
      static $() {
        return ["CreateOriginUserSlackReviewReminderRequest|1 origin_namespace_id 9|2 slack_team_id 9?|3 repo_ids 9*|4 days_of_week #0*|5 times_of_day 9*|6 time_zone 9|7 filters #1|8 enabled 8?", dn, pn];
      }
    }
    class fn extends un {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fn, e2, t2);
      }
      static $() {
        return ["CreateOriginUserSlackReviewReminderResponse|1 reminder #0", mn];
      }
    }
    class gn extends un {
      constructor(e2) {
        super(), this.id = "", this.originNamespaceId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gn, e2, t2);
      }
      static $() {
        return ["UpdateOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9?|4 repo_ids 9*|5 days_of_week #0*|6 times_of_day 9*|7 time_zone 9|8 filters #1|9 enabled 8?", dn, pn];
      }
    }
    class yn extends un {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yn, e2, t2);
      }
      static $() {
        return ["UpdateOriginUserSlackReviewReminderResponse|1 reminder #0", mn];
      }
    }
    class wn extends un {
      constructor(e2) {
        super(), this.originNamespaceId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wn, e2, t2);
      }
      static $() {
        return ["ListOriginUserSlackReviewRemindersRequest|1 origin_namespace_id 9|2 slack_team_id 9?"];
      }
    }
    class vn extends un {
      constructor(e2) {
        super(), this.reminders = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vn, e2, t2);
      }
      static $() {
        return ["ListOriginUserSlackReviewRemindersResponse|1 reminders #0*", mn];
      }
    }
    class _n extends un {
      constructor(e2) {
        super(), this.id = "", this.originNamespaceId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _n().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _n().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _n().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_n, e2, t2);
      }
      static $() {
        return ["GetOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9"];
      }
    }
    class An extends un {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new An().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new An().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new An().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(An, e2, t2);
      }
      static $() {
        return ["GetOriginUserSlackReviewReminderResponse|1 reminder #0", mn];
      }
    }
    class Sn extends un {
      constructor(e2) {
        super(), this.id = "", this.originNamespaceId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sn, e2, t2);
      }
      static $() {
        return ["DisableOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9"];
      }
    }
    class bn extends un {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bn, e2, t2);
      }
      static $() {
        return ["DisableOriginUserSlackReviewReminderResponse|1 reminder #0", mn];
      }
    }
    const En = "origin.v1.";
    class In extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return En;
      }
    }
    var Cn = (0, s.QT)(n.proto3, En, "OriginSlackChannelSubscriptionFeature", [[0, "UNSPECIFIED"], [1, "PULLS"], [2, "REVIEWS"], [3, "COMMENTS"], [4, "COMMITS"], [5, "BRANCHES"]], 1), kn = (0, s.QT)(n.proto3, En, "OriginSlackChannelExposureReason", [[0, "UNSPECIFIED"], [1, "SLACK_CONNECT"], [2, "ORG_SHARED"], [3, "GUESTS"]], 1), xn = (0, s.QT)(n.proto3, En, "OriginSlackChannelExposureStatus", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "EXPOSED"], [3, "UNKNOWN"]], 1);
    class Tn extends In {
      constructor(e2) {
        super(), this.id = "", this.slackTeamId = "", this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tn, e2, t2);
      }
      static $() {
        return ["OriginSlackChannelSubscription|1 id 9|2 slack_team_id 9|3 slack_channel_id 9|4 repo_owner 9|5 repo_name 9|6 features #0*|7 commit_ref_pattern 9?|8 required_labels 9*|9 created_at #1|10 updated_at #1", Cn, n.Timestamp];
      }
    }
    class Rn extends In {
      constructor(e2) {
        super(), this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rn, e2, t2);
      }
      static $() {
        return ["SubscribeOriginSlackChannelRequest|1 slack_channel_id 9|2 slack_team_id 9?|3 repo_owner 9|4 repo_name 9|5 features #0*|6 commit_ref_pattern 9?|7 required_labels 9*", Cn];
      }
    }
    class Bn extends In {
      constructor(e2) {
        super(), this.status = xn.UNSPECIFIED, this.reasons = [], this.repoVisibility = p.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bn, e2, t2);
      }
      static $() {
        return ["OriginSlackChannelExposure|1 status #0|2 reasons #1*|3 repo_visibility #2", xn, kn, p];
      }
    }
    class Pn extends In {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pn, e2, t2);
      }
      static $() {
        return ["SubscribeOriginSlackChannelResponse|1 subscription #0|2 exposure #1", Tn, Bn];
      }
    }
    class Jn extends In {
      constructor(e2) {
        super(), this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jn, e2, t2);
      }
      static $() {
        return ["UnsubscribeOriginSlackChannelRequest|1 slack_channel_id 9|2 slack_team_id 9?|3 repo_owner 9|4 repo_name 9|5 features #0*|6 required_labels 9*", Cn];
      }
    }
    class Mn extends In {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mn, e2, t2);
      }
      static $() {
        return ["UnsubscribeOriginSlackChannelResponse|1 subscription #0?", Tn];
      }
    }
    class qn extends In {
      constructor(e2) {
        super(), this.slackChannelId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qn, e2, t2);
      }
      static $() {
        return ["ListOriginSlackChannelSubscriptionsRequest|1 slack_channel_id 9|2 slack_team_id 9?"];
      }
    }
    class Dn extends In {
      constructor(e2) {
        super(), this.subscriptions = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dn, e2, t2);
      }
      static $() {
        return ["ListOriginSlackChannelSubscriptionsResponse|1 subscriptions #0*", Tn];
      }
    }
    const On = "git_forge.v1.";
    class Nn extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return On;
      }
    }
    var Fn = (0, s.QT)(n.proto3, On, "CommitActivityLineStats", [[0, "UNSPECIFIED"], [1, "INCLUDED"], [2, "OMITTED_TOO_MANY_COMMITS"]], 1), Un = (0, s.QT)(n.proto3, On, "CompareCommitsStatus", [[0, "UNSPECIFIED"], [1, "IDENTICAL"], [2, "AHEAD"], [3, "BEHIND"], [4, "DIVERGED"], [5, "NO_MERGE_BASE"]], 1), Ln = (0, s.QT)(n.proto3, On, "MergeMode", [[0, "UNSPECIFIED"], [1, "MERGE_COMMIT"], [2, "SQUASH"]], 1), $n = (n.proto3, (0, s.QT)(n.proto3, On, "MergeRenameMode", [[0, "UNSPECIFIED"], [1, "CAPPED"], [2, "CAPPED_WITH_LINEAGE_SHADOW"], [3, "LINEAGE"]], 1)), Qn = (0, s.QT)(n.proto3, On, "CanMergeCacheOnlyOutcome", [[0, "UNSPECIFIED"], [1, "HIT"], [2, "MISS"]], 1), jn = (n.proto3, n.proto3, (0, s.QT)(n.proto3, On, "CommitFileMode", [[0, "UNSPECIFIED"], [1, "REGULAR"], [2, "EXECUTABLE"], [3, "SYMLINK"]], 1)), Gn = (0, s.QT)(n.proto3, On, "GrepPriority", [[0, "UNSPECIFIED"], [1, "INTERACTIVE"], [2, "BACKGROUND"]], 1), Hn = (n.proto3, n.proto3, (0, s.QT)(n.proto3, On, "GrepLineKind", [[0, "UNSPECIFIED"], [1, "MATCH"], [2, "CONTEXT"]], 1)), zn = (0, s.QT)(n.proto3, On, "GeneratedAttributesRevision", [[0, "UNSPECIFIED"], [3, "OFF"], [1, "MERGE_BASE"], [2, "HEAD"]], 1), Wn = (0, s.QT)(n.proto3, On, "FileMode", [[0, "UNSPECIFIED"], [1, "REGULAR"], [2, "EXECUTABLE"], [3, "SYMLINK"], [4, "GITLINK"]], 1), Vn = (0, s.QT)(n.proto3, On, "ChangeKind", [[0, "UNSPECIFIED"], [1, "ADDED"], [2, "DELETED"], [3, "MODIFIED"], [4, "RENAMED"], [5, "COPIED"]], 1), Kn = (n.proto3, n.proto3, (0, s.QT)(n.proto3, On, "ListRefsFilter", [[0, "UNSPECIFIED"], [1, "ALL"], [2, "BRANCHES"], [3, "TAGS"]], 1));
    n.proto3, n.proto3;
    class Yn extends Nn {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yn, e2, t2);
      }
      static $() {
        return ["GetCommitResponse|1 commit #0", fs];
      }
    }
    class Zn extends Nn {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zn, e2, t2);
      }
      static $() {
        return ["GetBlobResponse|1 blob #0", ws];
      }
    }
    class Xn extends Nn {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xn, e2, t2);
      }
      static $() {
        return ["GetTagResponse|1 tag #0", ns];
      }
    }
    class es extends Nn {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new es().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new es().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new es().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(es, e2, t2);
      }
      static $() {
        return ["GetTreeResponse|1 tree #0", ts];
      }
    }
    class ts extends Nn {
      constructor(e2) {
        super(), this.sha = "", this.tree = [], this.truncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ts().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ts().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ts().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ts, e2, t2);
      }
      static $() {
        return ["Tree|1 sha 9|2 tree #0*|3 truncated 8", rs];
      }
    }
    class rs extends Nn {
      constructor(e2) {
        super(), this.path = "", this.mode = "", this.type = "", this.sha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rs, e2, t2);
      }
      static $() {
        return ["TreeEntry|1 path 9|2 mode 9|3 type 9|4 sha 9|5 size 4?"];
      }
    }
    class ns extends Nn {
      constructor(e2) {
        super(), this.sha = "", this.name = "", this.message = "", this.objectSha = "", this.objectType = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ns().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ns().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ns().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ns, e2, t2);
      }
      static $() {
        return ["Tag|1 sha 9|2 name 9|3 message 9|4 tagger #0|5 object_sha 9|6 object_type 9", gs];
      }
    }
    class ss extends Nn {
      constructor(e2) {
        super(), this.commits = [], this.truncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ss().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ss().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ss().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ss, e2, t2);
      }
      static $() {
        return ["LookupCommitsResponse|1 commits #0*|2 truncated 8", fs];
      }
    }
    class os extends Nn {
      constructor(e2) {
        super(), this.dayStart = n.protoInt64.zero, this.commits = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new os().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new os().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new os().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(os, e2, t2);
      }
      static $() {
        return ["CommitActivityDay|1 day_start 3|2 commits 13"];
      }
    }
    class is extends Nn {
      constructor(e2) {
        super(), this.weekStart = n.protoInt64.zero, this.commits = 0, this.additions = n.protoInt64.zero, this.deletions = n.protoInt64.zero, this.lineStatsPartialCommits = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new is().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new is().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new is().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(is, e2, t2);
      }
      static $() {
        return ["CommitActivityWeek|1 week_start 3|2 commits 13|3 additions 4|4 deletions 4|5 line_stats_partial_commits 13"];
      }
    }
    class as extends Nn {
      constructor(e2) {
        super(), this.name = "", this.email = "", this.commits = 0, this.weeks = [], this.additions = n.protoInt64.zero, this.deletions = n.protoInt64.zero, this.key = "", this.days = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new as().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new as().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new as().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(as, e2, t2);
      }
      static $() {
        return ["CommitActivityContributor|1 name 9|2 email 9|3 commits 13|4 weeks #0*|5 additions 4|6 deletions 4|7 key 9|8 days #1*", is, os];
      }
    }
    class cs extends Nn {
      constructor(e2) {
        super(), this.commitSha = "", this.weeks = [], this.contributors = [], this.totalCommits = 0, this.totalContributors = 0, this.truncated = false, this.lineStats = Fn.UNSPECIFIED, this.lineStatsPartialCommits = 0, this.baseIsAncestor = false, this.daysIncluded = false, this.rootCommitSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cs, e2, t2);
      }
      static $() {
        return ["GetCommitActivityResponse|1 commit_sha 9|2 weeks #0*|3 contributors #1*|4 total_commits 13|5 total_contributors 13|6 truncated 8|7 line_stats #2|8 line_stats_partial_commits 13|9 base_is_ancestor 8|10 days_included 8|11 root_commit_sha 9", is, as, Fn];
      }
    }
    class ls extends Nn {
      constructor(e2) {
        super(), this.commits = [], this.baseCommitSha = "", this.headCommitSha = "", this.mergeBaseCommitSha = "", this.truncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ls().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ls().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ls().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ls, e2, t2);
      }
      static $() {
        return ["ListCommitsInRangeResponse|1 commits #0*|2 base_commit_sha 9|3 head_commit_sha 9|4 merge_base_commit_sha 9|5 truncated 8", fs];
      }
    }
    class us extends Nn {
      constructor(e2) {
        super(), this.status = Un.UNSPECIFIED, this.aheadBy = 0, this.behindBy = 0, this.baseCommitSha = "", this.headCommitSha = "", this.mergeBaseCommitSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new us().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new us().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new us().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(us, e2, t2);
      }
      static $() {
        return ["CompareCommitsResponse|1 status #0|2 ahead_by 5|3 behind_by 5|4 base_commit_sha 9|5 head_commit_sha 9|6 merge_base_commit_sha 9", Un];
      }
    }
    class ds extends Nn {
      constructor(e2) {
        super(), this.canMergeWithoutConflicts = false, this.conflictedPaths = [], this.renameMode = $n.UNSPECIFIED, this.cacheOnlyOutcome = Qn.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ds().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ds().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ds().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ds, e2, t2);
      }
      static $() {
        return ["CanMergeResponse|1 can_merge_without_conflicts 8|2 merged_tree_sha 12?|3 conflicted_paths 9*|4 rename_mode #0|5 cache_only_outcome #1", $n, Qn];
      }
    }
    class ps extends Nn {
      constructor(e2) {
        super(), this.content = new Uint8Array(0), this.mode = jn.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ps().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ps().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ps().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ps, e2, t2);
      }
      static $() {
        return ["CommitFileUpsert|1 content 12|2 mode #0", jn];
      }
    }
    class ms extends Nn {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ms().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ms().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ms().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ms, e2, t2);
      }
      static $() {
        return ["CommitFileDelete"];
      }
    }
    class hs extends Nn {
      constructor(e2) {
        super(), this.path = "", this.operation = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hs, e2, t2);
      }
      static $() {
        return ["CommitFileOperation|1 path 9|2 upsert #0 operation|3 delete #1 operation", ps, ms];
      }
    }
    class fs extends Nn {
      constructor(e2) {
        super(), this.sha = "", this.message = "", this.parentShas = [], this.treeSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fs, e2, t2);
      }
      static $() {
        return ["Commit|1 sha 9|2 message 9|3 author #0|4 committer #0|5 parent_shas 9*|7 tree_sha 9|8 change_id 9?", gs];
      }
    }
    class gs extends Nn {
      constructor(e2) {
        super(), this.name = "", this.email = "", this.timestamp = n.protoInt64.zero, this.timezoneOffset = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gs, e2, t2);
      }
      static $() {
        return ["Signature|1 name 9|2 email 9|3 timestamp 3|4 timezone_offset 5"];
      }
    }
    class ys extends Nn {
      constructor(e2) {
        super(), this.revision = "", this.path = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ys().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ys().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ys().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ys, e2, t2);
      }
      static $() {
        return ["PathIdentifier|1 revision 9|2 path 9"];
      }
    }
    class ws extends Nn {
      constructor(e2) {
        super(), this.size = "", this.encoding = "", this.content = "", this.sha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ws().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ws().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ws().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ws, e2, t2);
      }
      static $() {
        return ["FileContent|1 size 9|2 encoding 9|3 content 9|4 sha 9"];
      }
    }
    class vs extends Nn {
      constructor(e2) {
        super(), this.entries = [], this.sha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vs, e2, t2);
      }
      static $() {
        return ["DirectoryContent|1 entries #0*|2 sha 9", Us];
      }
    }
    class _s extends Nn {
      constructor(e2) {
        super(), this.resolvedCommitSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _s().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _s().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _s().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_s, e2, t2);
      }
      static $() {
        return ["ResolveRefPathResponse|1 path_identifier #0|2 resolved_commit_sha 9", ys];
      }
    }
    class As extends Nn {
      constructor(e2) {
        super(), this.content = { case: void 0 }, this.resolvedCommitSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new As().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new As().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new As().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(As, e2, t2);
      }
      static $() {
        return ["GetRepoContentResponse|1 file_content #0 content|2 directory_content #1 content|3 path_identifier #2|4 resolved_commit_sha 9", ws, vs, ys];
      }
    }
    class Ss extends Nn {
      constructor(e2) {
        super(), this.path = "", this.found = false, this.content = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ss().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ss().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ss().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ss, e2, t2);
      }
      static $() {
        return ["BatchRepoContentResult|1 path 9|2 found 8|3 file_content #0 content|4 directory_content #1 content", ws, vs];
      }
    }
    class bs extends Nn {
      constructor(e2) {
        super(), this.results = [], this.resolvedCommitSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bs, e2, t2);
      }
      static $() {
        return ["BatchGetRepoContentResponse|1 results #0*|2 resolved_commit_sha 9", Ss];
      }
    }
    class Es extends Nn {
      constructor(e2) {
        super(), this.type = "", this.isBinary = false, this.tooLargeToIntrospect = false, this.sha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Es().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Es().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Es().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Es, e2, t2);
      }
      static $() {
        return ["RepoContentDetails|1 type 9|2 size 4?|3 is_binary 8|4 too_large_to_introspect 8|5 sha 9"];
      }
    }
    class Is extends Nn {
      constructor(e2) {
        super(), this.resolvedCommitSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Is().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Is().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Is().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Is, e2, t2);
      }
      static $() {
        return ["GetRepoContentDetailsResponse|1 details #0?|2 path_identifier #1|3 resolved_commit_sha 9", Es, ys];
      }
    }
    class Cs extends Nn {
      constructor(e2) {
        super(), this.commits = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cs, e2, t2);
      }
      static $() {
        return ["GetFileHistoryResponse|1 commits #0*", Fs];
      }
    }
    class ks extends Nn {
      constructor(e2) {
        super(), this.renameNotChecked = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ks().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ks().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ks().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ks, e2, t2);
      }
      static $() {
        return ["FileHistoryCommitEntry|1 commit #0|2 diff_base_commit_sha 9?|8 path_stats #1?|9 path 9?|10 renamed_from_path 9?|11 rename_not_checked 8", Fs, Ks];
      }
    }
    class xs extends Nn {
      constructor(e2) {
        super(), this.entries = [], this.hasMore = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xs, e2, t2);
      }
      static $() {
        return ["GetFileHistoryPageWithDiffStatsResponse|1 entries #0*|2 has_more 8|3 next_cursor 9?", ks];
      }
    }
    class Ts extends Nn {
      constructor(e2) {
        super(), this.commitSha = new Uint8Array(0), this.startInBlamedFile = 0, this.len = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ts().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ts().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ts().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ts, e2, t2);
      }
      static $() {
        return ["BlameLineRange|1 commit_sha 12|2 start_in_blamed_file 13|3 len 13"];
      }
    }
    class Rs extends Nn {
      constructor(e2) {
        super(), this.commits = [], this.lineRanges = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rs, e2, t2);
      }
      static $() {
        return ["BlameChunk|1 commits #0*|2 line_ranges #1*", Fs, Ts];
      }
    }
    class Bs extends Nn {
      constructor(e2) {
        super(), this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bs, e2, t2);
      }
      static $() {
        return ["TreeEntryBlame|1 name 9|2 last_commit #0", Fs];
      }
    }
    class Ps extends Nn {
      constructor(e2) {
        super(), this.entries = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ps().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ps().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ps().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ps, e2, t2);
      }
      static $() {
        return ["GetTreeBlameResponse|1 entries #0*", Bs];
      }
    }
    class Js extends Nn {
      constructor(e2) {
        super(), this.paths = [], this.hasMore = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Js().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Js().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Js().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Js, e2, t2);
      }
      static $() {
        return ["GetFuzzyPathsResponse|1 paths 9*|2 has_more 8"];
      }
    }
    class Ms extends Nn {
      constructor(e2) {
        super(), this.paths = [], this.hasMore = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ms().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ms().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ms().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ms, e2, t2);
      }
      static $() {
        return ["ListTreePathsResponse|1 paths 9*|2 has_more 8"];
      }
    }
    class qs extends Nn {
      constructor(e2) {
        super(), this.literal = false, this.caseInsensitive = false, this.wholeWord = false, this.contextBefore = 0, this.contextAfter = 0, this.includes = [], this.excludes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qs, e2, t2);
      }
      static $() {
        return ["GrepSearchOptions|1 literal 8|2 case_insensitive 8|3 whole_word 8|4 context_before 13|5 context_after 13|6 max_lines 4?|7 filter_path 9?|8 includes 9*|9 excludes 9*"];
      }
    }
    class Ds extends Nn {
      constructor(e2) {
        super(), this.start = 0, this.end = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ds().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ds().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ds().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ds, e2, t2);
      }
      static $() {
        return ["GrepSubmatch|1 start 13|2 end 13"];
      }
    }
    class Os extends Nn {
      constructor(e2) {
        super(), this.path = "", this.lines = "", this.lineNumber = 0, this.absoluteOffset = n.protoInt64.zero, this.submatches = [], this.kind = Hn.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Os().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Os().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Os().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Os, e2, t2);
      }
      static $() {
        return ["GrepMatch|1 path 9|2 lines 9|3 line_number 13|4 absolute_offset 4|5 submatches #0*|6 kind #1", Ds, Hn];
      }
    }
    class Ns extends Nn {
      constructor(e2) {
        super(), this.matches = [], this.limitHit = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ns().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ns().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ns().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ns, e2, t2);
      }
      static $() {
        return ["GrepRepoChunk|1 matches #0*|2 limit_hit 8", Os];
      }
    }
    class Fs extends Nn {
      constructor(e2) {
        super(), this.sha = new Uint8Array(0), this.summary = "", this.authorName = "", this.authorEmail = "", this.timestamp = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fs, e2, t2);
      }
      static $() {
        return ["ShortCommit|1 sha 12|2 summary 9|3 author_name 9|4 author_email 9|5 timestamp 3"];
      }
    }
    class Us extends Nn {
      constructor(e2) {
        super(), this.type = "", this.name = "", this.path = "", this.sha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Us().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Us().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Us().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Us, e2, t2);
      }
      static $() {
        return ["RepoContentEntry|1 type 9|2 name 9|3 path 9|4 sha 9|5 size 4?"];
      }
    }
    class Ls extends Nn {
      constructor(e2) {
        super(), this.entries = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ls().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ls().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ls().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ls, e2, t2);
      }
      static $() {
        return ["PullRequestDiffChunk|1 header #0?|3 entries #1*", Vs, Ys];
      }
    }
    class $s extends Nn {
      constructor(e2) {
        super(), this.hasMore = false, this.entries = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $s().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $s().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $s().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($s, e2, t2);
      }
      static $() {
        return ["CommitDiffHeader|1 commit #0|2 base_commit_sha 9?|3 stats #1|5 has_more 8|6 next_page_cursor 9?|7 entries #2*", fs, Zs, Ys];
      }
    }
    class Qs extends Nn {
      constructor(e2) {
        super(), this.entries = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qs, e2, t2);
      }
      static $() {
        return ["CommitDiffChunk|1 header #0?|3 entries #1*", $s, Ys];
      }
    }
    class js extends Nn {
      constructor(e2) {
        super(), this.entries = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new js().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new js().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new js().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(js, e2, t2);
      }
      static $() {
        return ["CommitDiff2Header|1 commit #0|2 base_commit_sha 9?|3 entries #1*", fs, Ys];
      }
    }
    class Gs extends Nn {
      constructor(e2) {
        super(), this.headerIndex = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gs, e2, t2);
      }
      static $() {
        return ["CommitDiff2Entry|1 header_index 13|2 stats #0|3 patch 9?", Ks];
      }
    }
    class Hs extends Nn {
      constructor(e2) {
        super(), this.entries = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hs, e2, t2);
      }
      static $() {
        return ["CommitDiff2Chunk|1 header #0?|2 entries #1*|3 trailer #2?", js, Gs, Zs];
      }
    }
    class zs extends Nn {
      constructor(e2) {
        super(), this.entries = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zs, e2, t2);
      }
      static $() {
        return ["GetCommitChangedPathsResponse|1 base_commit_sha 9?|2 entries #0*", Ys];
      }
    }
    class Ws extends Nn {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ws().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ws().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ws().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ws, e2, t2);
      }
      static $() {
        return ["GetCommitDiffStatsResponse|1 base_commit_sha 9?|2 stats #0", Zs];
      }
    }
    class Vs extends Nn {
      constructor(e2) {
        super(), this.mergeBaseCommitSha = "", this.hasMore = false, this.entries = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vs, e2, t2);
      }
      static $() {
        return ["DiffHeader|1 merge_base_commit_sha 9|4 has_more 8|5 next_page_cursor 9?|6 entries #0*", Ys];
      }
    }
    class Ks extends Nn {
      constructor(e2) {
        super(), this.additions = 0, this.deletions = 0, this.isBinary = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ks().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ks().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ks().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ks, e2, t2);
      }
      static $() {
        return ["FileStats|1 additions 5|2 deletions 5|3 is_binary 8"];
      }
    }
    class Ys extends Nn {
      constructor(e2) {
        super(), this.path = "", this.changeKind = Vn.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ys().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ys().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ys().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ys, e2, t2);
      }
      static $() {
        return ["DiffEntry|1 path 9|2 old_path 9?|3 change_kind #0|4 old_mode #1?|5 new_mode #1?|6 old_sha 9?|7 new_sha 9?|8 stats #2?|9 patch 9?|10 is_generated 8?", Vn, Wn, Ks];
      }
    }
    class Zs extends Nn {
      constructor(e2) {
        super(), this.filesChanged = 0, this.additions = 0, this.deletions = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zs, e2, t2);
      }
      static $() {
        return ["CommitDiffStats|1 files_changed 13|2 additions 5|3 deletions 5"];
      }
    }
    class Xs extends Nn {
      constructor(e2) {
        super(), this.name = "", this.targetSha = "", this.objectSha = "", this.objectType = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xs, e2, t2);
      }
      static $() {
        return ["RefInfo|1 name 9|2 target_sha 9|3 object_sha 9|4 object_type 9"];
      }
    }
    class eo extends Nn {
      constructor(e2) {
        super(), this.refs = [], this.refInfos = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new eo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new eo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new eo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(eo, e2, t2);
      }
      static $() {
        return ["ListRefsResponse|1 refs 9*|2 ref_infos #0*|5 next_page_token 9?", Xs];
      }
    }
    class to extends Nn {
      constructor(e2) {
        super(), this.refInfos = [], this.exactMatch = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new to().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new to().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new to().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(to, e2, t2);
      }
      static $() {
        return ["SearchRefsResponse|1 ref_infos #0*|2 exact_match 8", Xs];
      }
    }
    const ro = "origin.v1.";
    class no extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return ro;
      }
    }
    var so = (0, s.QT)(n.proto3, ro, "GithubCodeownersFileStatus", [[0, "UNSPECIFIED"], [1, "FOUND"], [2, "MISSING"], [3, "TOO_LARGE"], [4, "NOT_SERVED"], [5, "TOO_COMPLEX"]], 1), oo = (0, s.QT)(n.proto3, ro, "GithubCodeownerViewerMatch", [[0, "UNSPECIFIED"], [1, "MATCH"], [2, "NO_MATCH"], [3, "UNKNOWN"]], 1), io = (0, s.QT)(n.proto3, ro, "GithubCodeownersViewerMembershipUnknownReason", [[0, "UNSPECIFIED"], [1, "LOOKUP_DISABLED"], [2, "NOT_A_USER"], [3, "NO_LINKED_GITHUB_LOGIN"], [4, "ORGANIZATION_NOT_SYNCED"], [5, "GITHUB_ENTERPRISE_UNSUPPORTED"], [6, "CACHE_UNAVAILABLE"], [7, "TOO_MANY_OWNERS"], [8, "CACHE_CONTRACT_ERROR"], [9, "REPOSITORY_OWNER_UNRESOLVED"]], 1);
    class ao extends no {
      constructor(e2) {
        super(), this.refPath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ao().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ao().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ao().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ao, e2, t2);
      }
      static $() {
        return ["ResolveRepoPathClientRequest|1 identifier #0|2 ref_path 9", i];
      }
    }
    class co extends no {
      constructor(e2) {
        super(), this.refPath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new co().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new co().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new co().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(co, e2, t2);
      }
      static $() {
        return ["GetRepoContentClientRequest|1 identifier #0|2 ref_path 9|3 max_file_size 4?", i];
      }
    }
    class lo extends no {
      constructor(e2) {
        super(), this.refPath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lo, e2, t2);
      }
      static $() {
        return ["MintRawRepoFileLinkClientRequest|1 identifier #0|2 ref_path 9", i];
      }
    }
    class uo extends no {
      constructor(e2) {
        super(), this.token = "", this.rawOrigin = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new uo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new uo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new uo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(uo, e2, t2);
      }
      static $() {
        return ["MintRawRepoFileLinkClientResponse|1 token 9|2 path_identifier #0|3 raw_origin 9", ys];
      }
    }
    class po extends no {
      constructor(e2) {
        super(), this.ref = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new po().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new po().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new po().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(po, e2, t2);
      }
      static $() {
        return ["GetRepoTarballClientRequest|1 identifier #0|2 ref 9", i];
      }
    }
    class mo extends no {
      constructor(e2) {
        super(), this.downloadUrl = "", this.sha = "", this.filename = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mo, e2, t2);
      }
      static $() {
        return ["GetRepoTarballClientResponse|1 download_url 9|2 sha 9|3 filename 9"];
      }
    }
    class ho extends no {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ho().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ho().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ho().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ho, e2, t2);
      }
      static $() {
        return ["GetRepoContentAtShaClientRequest|1 identifier #0|2 path_identifier #1|3 max_file_size 4?", i, ys];
      }
    }
    class fo extends no {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fo, e2, t2);
      }
      static $() {
        return ["GetRepoContentDetailsAtShaClientRequest|1 identifier #0|2 path_identifier #1", i, ys];
      }
    }
    class go extends no {
      constructor(e2) {
        super(), this.revision = "", this.paths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new go().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new go().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new go().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(go, e2, t2);
      }
      static $() {
        return ["BatchGetRepoContentAtShaClientRequest|1 identifier #0|2 revision 9|3 paths 9*|4 max_file_size 4?", i];
      }
    }
    class yo extends no {
      constructor(e2) {
        super(), this.baseRef = "", this.paths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yo, e2, t2);
      }
      static $() {
        return ["GetRepoCodeownersClientRequest|1 identifier #0|2 base_ref 9|3 paths 9*", i];
      }
    }
    class wo extends no {
      constructor(e2) {
        super(), this.owners = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wo, e2, t2);
      }
      static $() {
        return ["CodeownersOwners|1 owners 9*"];
      }
    }
    class vo extends no {
      constructor(e2) {
        super(), this.codeownersByPath = {}, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vo, e2, t2);
      }
      static $() {
        return ["GetRepoCodeownersResponse|1 codeowners_by_path 9,#0", wo];
      }
    }
    class _o extends no {
      constructor(e2) {
        super(), this.baseSha = "", this.paths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _o().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _o().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _o().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_o, e2, t2);
      }
      static $() {
        return ["GetGithubRepoCodeownersClientRequest|1 identifier #0|2 base_sha 9|3 paths 9*", i];
      }
    }
    class Ao extends no {
      constructor(e2) {
        super(), this.codeownersByPath = {}, this.fileStatus = so.UNSPECIFIED, this.filePath = "", this.viewerMatchByOwner = {}, this.viewerMembershipKnown = false, this.viewerMembershipUnknownReason = io.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ao().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ao().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ao().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ao, e2, t2);
      }
      static $() {
        return ["GetGithubRepoCodeownersResponse|1 codeowners_by_path 9,#0|2 file_status #1|3 file_path 9|4 viewer_match_by_owner 9,#2|5 viewer_membership_known 8|6 viewer_membership_unknown_reason #3", wo, so, oo, io];
      }
    }
    class So extends no {
      constructor(e2) {
        super(), this.commitSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new So().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new So().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new So().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(So, e2, t2);
      }
      static $() {
        return ["GetCommitClientRequest|1 identifier #0|2 commit_sha 9", i];
      }
    }
    class bo extends no {
      constructor(e2) {
        super(), this.blobSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bo, e2, t2);
      }
      static $() {
        return ["GetBlobClientRequest|1 identifier #0|2 blob_sha 9", i];
      }
    }
    class Eo extends no {
      constructor(e2) {
        super(), this.tagSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Eo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Eo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Eo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Eo, e2, t2);
      }
      static $() {
        return ["GetTagClientRequest|1 identifier #0|2 tag_sha 9", i];
      }
    }
    class Io extends no {
      constructor(e2) {
        super(), this.treeSha = "", this.recursive = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Io().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Io().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Io().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Io, e2, t2);
      }
      static $() {
        return ["GetTreeClientRequest|1 identifier #0|2 tree_sha 9|3 recursive 8", i];
      }
    }
    class Co extends no {
      constructor(e2) {
        super(), this.startCommitSha = "", this.maxCommits = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Co().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Co().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Co().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Co, e2, t2);
      }
      static $() {
        return ["GetFileHistoryClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 max_commits 13", i];
      }
    }
    class ko extends no {
      constructor(e2) {
        super(), this.startCommitSha = "", this.pageSize = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ko().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ko().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ko().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ko, e2, t2);
      }
      static $() {
        return ["GetFileHistoryPageClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 page_size 13|5 next_cursor 9?", i];
      }
    }
    class xo extends no {
      constructor(e2) {
        super(), this.commits = [], this.hasMore = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xo, e2, t2);
      }
      static $() {
        return ["GetFileHistoryPageResponse|1 commits #0*|2 has_more 8|3 next_cursor 9?", Fs];
      }
    }
    class To extends no {
      constructor(e2) {
        super(), this.startCommitSha = "", this.pageSize = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new To().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new To().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new To().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(To, e2, t2);
      }
      static $() {
        return ["GetFileHistoryPageWithDiffStatsClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 page_size 13|5 next_cursor 9?", i];
      }
    }
    class Ro extends no {
      constructor(e2) {
        super(), this.startCommitSha = "", this.path = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ro().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ro().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ro().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ro, e2, t2);
      }
      static $() {
        return ["GetBlameClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9", i];
      }
    }
    class Bo extends no {
      constructor(e2) {
        super(), this.startCommitSha = "", this.path = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bo, e2, t2);
      }
      static $() {
        return ["GetTreeBlameClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9", i];
      }
    }
    class Po extends no {
      constructor(e2) {
        super(), this.commitSha = "", this.query = "", this.limit = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Po().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Po().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Po().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Po, e2, t2);
      }
      static $() {
        return ["GetFuzzyPathsClientRequest|1 identifier #0|2 commit_sha 9|3 query 9|4 limit 13", i];
      }
    }
    class Jo extends no {
      constructor(e2) {
        super(), this.revision = "", this.includes = [], this.excludes = [], this.limit = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jo, e2, t2);
      }
      static $() {
        return ["ListRepoPathsClientRequest|1 identifier #0|2 revision 9|3 includes 9*|4 excludes 9*|5 limit 13", i];
      }
    }
    class Mo extends no {
      constructor(e2) {
        super(), this.revision = "", this.query = "", this.maxResults = 0, this.maxTotalLines = 0, this.priority = Gn.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mo, e2, t2);
      }
      static $() {
        return ["GrepRepoClientRequest|1 identifier #0|2 revision 9|3 query 9|4 options #1|5 max_results 13|6 max_total_lines 13|7 priority #2", i, qs, Gn];
      }
    }
    class qo extends no {
      constructor(e2) {
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.contextLines = 0, this.generatedAttributesRevision = zn.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qo, e2, t2);
      }
      static $() {
        return ["GetPullRequestDiffClientRequest|1 identifier #0|2 head_commit_sha 9|3 base_commit_sha 9|4 include_patches 8?|5 include_file_stats 8?|6 page_size 13?|7 page_cursor 9?|8 context_lines 13|9 generated_attributes_revision #1", i, zn];
      }
    }
    class Do extends no {
      constructor(e2) {
        super(), this.commitSha = "", this.includePatches = false, this.paths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Do().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Do().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Do().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Do, e2, t2);
      }
      static $() {
        return ["GetCommitDiffClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?|4 include_patches 8|5 paths 9*|6 page_size 13?|7 page_cursor 9?", i];
      }
    }
    class Oo extends no {
      constructor(e2) {
        super(), this.commitSha = "", this.includePatches = false, this.paths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Oo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Oo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Oo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Oo, e2, t2);
      }
      static $() {
        return ["GetCommitDiff2ClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?|4 include_patches 8|5 paths 9*", i];
      }
    }
    class No extends no {
      constructor(e2) {
        super(), this.commitSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new No().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new No().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new No().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(No, e2, t2);
      }
      static $() {
        return ["GetCommitChangedPathsClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?", i];
      }
    }
    class Fo extends no {
      constructor(e2) {
        super(), this.commitSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fo, e2, t2);
      }
      static $() {
        return ["GetCommitDiffStatsClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?", i];
      }
    }
    class Uo extends no {
      constructor(e2) {
        super(), this.filter = Kn.UNSPECIFIED, this.namesOnly = false, this.prefix = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Uo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Uo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Uo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Uo, e2, t2);
      }
      static $() {
        return ["ListRefsClientRequest|1 identifier #0|2 filter #1|3 names_only 8|4 prefix 9|5 limit 13?|7 page_token 9?", i, Kn];
      }
    }
    class Lo extends no {
      constructor(e2) {
        super(), this.filter = Kn.UNSPECIFIED, this.query = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lo, e2, t2);
      }
      static $() {
        return ["SearchRefsClientRequest|1 identifier #0|2 filter #1|3 query 9|4 limit 13?", i, Kn];
      }
    }
    class $o extends no {
      constructor(e2) {
        super(), this.shaPrefix = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $o().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $o().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $o().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($o, e2, t2);
      }
      static $() {
        return ["LookupCommitsClientRequest|1 identifier #0|2 sha_prefix 9|3 limit 13?", i];
      }
    }
    class Qo extends no {
      constructor(e2) {
        super(), this.revision = "", this.includeLineStats = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qo, e2, t2);
      }
      static $() {
        return ["GetCommitActivityClientRequest|1 identifier #0|2 revision 9|3 since_timestamp 3?|4 max_contributors 13?|5 until_timestamp 3?|6 include_line_stats 8", i];
      }
    }
    class jo extends no {
      constructor(e2) {
        super(), this.usersByContributorKey = {}, this.pending = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jo, e2, t2);
      }
      static $() {
        return ["GetCommitActivityClientResponse|1 activity #0|2 users_by_contributor_key 9,#1|3 pending 8", cs, Go];
      }
    }
    class Go extends no {
      constructor(e2) {
        super(), this.userId = "", this.displayName = "", this.avatarUrl = "", this.profileHandle = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Go().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Go().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Go().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Go, e2, t2);
      }
      static $() {
        return ["CommitActivityContributorUser|1 user_id 9|2 display_name 9|3 avatar_url 9|4 profile_handle 9"];
      }
    }
    class Ho extends no {
      constructor(e2) {
        super(), this.ours = "", this.theirs = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ho().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ho().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ho().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ho, e2, t2);
      }
      static $() {
        return ["CanMergeClientRequest|1 identifier #0|2 ours 9|3 theirs 9", i];
      }
    }
    class zo extends no {
      constructor(e2) {
        super(), this.baseRevision = "", this.headRevision = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zo, e2, t2);
      }
      static $() {
        return ["CompareCommitsClientRequest|1 identifier #0|2 base_revision 9|3 head_revision 9", i];
      }
    }
    class Wo extends no {
      constructor(e2) {
        super(), this.baseRevision = "", this.headRevision = "", this.oldestFirst = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wo, e2, t2);
      }
      static $() {
        return ["ListCommitsInRangeClientRequest|1 identifier #0|2 base_revision 9|3 head_revision 9|4 max_commits 5?|5 oldest_first 8", i];
      }
    }
    class Vo extends no {
      constructor(e2) {
        super(), this.branch = "", this.message = "", this.files = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vo, e2, t2);
      }
      static $() {
        return ["CreateCommitFromFilesClientRequest|1 identifier #0|2 branch 9|3 expected_head_sha 9?|4 message 9|5 author #1|6 committer #1?|7 files #2*", i, gs, hs];
      }
    }
    class Ko extends no {
      constructor(e2) {
        super(), this.commitSha = "", this.treeSha = "", this.oldHeadSha = "", this.reverseMirrorPushFailed = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ko().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ko().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ko().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ko, e2, t2);
      }
      static $() {
        return ["CreateCommitFromFilesClientResponse|1 commit_sha 9|2 tree_sha 9|3 old_head_sha 9|4 reverse_mirror_push_failed 8"];
      }
    }
    class Yo extends no {
      constructor(e2) {
        super(), this.path = "", this.changeKind = Vn.UNSPECIFIED, this.isBinary = false, this.patch = "", this.additions = 0, this.deletions = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yo, e2, t2);
      }
      static $() {
        return ["CollectedFileDiff|1 path 9|2 old_path 9?|3 change_kind #0|4 is_binary 8|5 patch 9|6 additions 5|7 deletions 5|8 is_generated 8?|9 old_mode #1?|10 new_mode #1?", Vn, Wn];
      }
    }
    class Zo extends no {
      constructor(e2) {
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.contextLines = 0, this.generatedAttributesRevision = zn.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zo, e2, t2);
      }
      static $() {
        return ["GetCollectedPullRequestDiffRequest|1 identifier #0|2 head_commit_sha 9|3 base_commit_sha 9|4 include_patches 8?|5 include_file_stats 8?|6 page_size 13?|7 page_cursor 9?|8 change_number 4?|9 version_number 4?|10 context_lines 13|11 generated_attributes_revision #1|12 project_latest_version_base 8?", i, zn];
      }
    }
    class Xo extends no {
      constructor(e2) {
        super(), this.mergeBaseSha = "", this.files = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xo().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xo().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xo().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xo, e2, t2);
      }
      static $() {
        return ["GetCollectedPullRequestDiffResponse|1 merge_base_sha 9|2 files #0*|4 next_page_cursor 9?|5 resolved_head_sha 9?|6 resolved_base_sha 9?|7 resolved_version_number 4?", Yo];
      }
    }
    class ei extends no {
      constructor(e2) {
        super(), this.branch = "", this.expectedHeadSha = "", this.newHeadSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ei().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ei().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ei().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ei, e2, t2);
      }
      static $() {
        return ["FastForwardBranchClientRequest|1 identifier #0|2 branch 9|3 expected_head_sha 9|4 new_head_sha 9", i];
      }
    }
    class ti extends no {
      constructor(e2) {
        super(), this.oldHeadSha = "", this.newHeadSha = "", this.unchanged = false, this.reverseMirrorPushFailed = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ti().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ti().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ti().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ti, e2, t2);
      }
      static $() {
        return ["FastForwardBranchClientResponse|1 old_head_sha 9|2 new_head_sha 9|3 unchanged 8|4 reverse_mirror_push_failed 8"];
      }
    }
    const ri = "origin.v1.";
    class ni extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return ri;
      }
    }
    var si = (0, s.QT)(n.proto3, ri, "CodeIntelligenceProvenance", [[0, "UNSPECIFIED"], [1, "EXACT_SCIP"], [2, "HYBRID"], [3, "SEARCH"]], 1);
    class oi extends ni {
      constructor(e2) {
        super(), this.indexedCommitSha = "", this.provenance = si.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new oi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new oi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new oi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(oi, e2, t2);
      }
      static $() {
        return ["CodeIntelligenceIndex|1 indexed_commit_sha 9|2 provenance #0", si];
      }
    }
    class ii extends ni {
      constructor(e2) {
        super(), this.line = 0, this.utf16Column = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ii().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ii().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ii().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ii, e2, t2);
      }
      static $() {
        return ["CodeIntelligencePosition|1 line 13|2 utf16_column 13"];
      }
    }
    class ai extends ni {
      constructor(e2) {
        super(), this.startLine = 0, this.startUtf16Column = 0, this.endLine = 0, this.endUtf16Column = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ai().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ai().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ai().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ai, e2, t2);
      }
      static $() {
        return ["CodeIntelligenceRange|1 start_line 13|2 start_utf16_column 13|3 end_line 13|4 end_utf16_column 13"];
      }
    }
    class ci extends ni {
      constructor(e2) {
        super(), this.path = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ci().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ci().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ci().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ci, e2, t2);
      }
      static $() {
        return ["CodeIntelligenceLocation|1 path 9|2 range #0", ai];
      }
    }
    class li extends ni {
      constructor(e2) {
        super(), this.opaqueId = "", this.definitions = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new li().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new li().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new li().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(li, e2, t2);
      }
      static $() {
        return ["ResolvedCodeIntelligenceSymbol|1 opaque_id 9|2 occurrence_range #0|3 definition #1?|4 signature 9?|5 documentation 9?|6 definitions #1*|7 kind 9?", ai, ci];
      }
    }
    class ui extends ni {
      constructor(e2) {
        super(), this.commitSha = "", this.path = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ui().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ui().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ui().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ui, e2, t2);
      }
      static $() {
        return ["ResolveCodeIntelligenceSymbolAtPositionRequest|1 repo #0|2 commit_sha 9|3 path 9|4 position #1", i, ii];
      }
    }
    class di extends ni {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new di().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new di().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new di().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(di, e2, t2);
      }
      static $() {
        return ["ResolveCodeIntelligenceSymbolAtPositionResponse|1 index #0|2 symbol #1?", oi, li];
      }
    }
    class pi extends ni {
      constructor(e2) {
        super(), this.commitSha = "", this.path = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pi, e2, t2);
      }
      static $() {
        return ["FindCodeIntelligenceReferencesAtPositionRequest|1 repo #0|2 commit_sha 9|3 path 9|4 position #1", i, ii];
      }
    }
    class mi extends ni {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mi, e2, t2);
      }
      static $() {
        return ["FindCodeIntelligenceReferencesAtPositionHeader|1 index #0|2 symbol #1?", oi, li];
      }
    }
    class hi extends ni {
      constructor(e2) {
        super(), this.isDefinition = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hi, e2, t2);
      }
      static $() {
        return ["FindCodeIntelligenceReferencesAtPositionResult|1 location #0|2 is_definition 8", ci];
      }
    }
    class fi extends ni {
      constructor(e2) {
        super(), this.totalCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fi, e2, t2);
      }
      static $() {
        return ["FindCodeIntelligenceReferencesAtPositionTrailer|1 total_count 13"];
      }
    }
    class gi extends ni {
      constructor(e2) {
        super(), this.chunk = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gi, e2, t2);
      }
      static $() {
        return ["FindCodeIntelligenceReferencesAtPositionResponse|1 header #0 chunk|2 result #1 chunk|3 trailer #2 chunk", mi, hi, fi];
      }
    }
    const yi = "origin.v1.";
    class wi extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return yi;
      }
    }
    var vi = (0, s.QT)(n.proto3, yi, "DiffRelayOwnerPrivacyClass", [[0, "UNSPECIFIED"], [1, "NO_DURABLE"], [2, "NO_TRAINING"], [3, "TRAINING_ALLOWED"]], 1), _i = (0, s.QT)(n.proto3, yi, "DiffRelayContentEncoding", [[0, "UNSPECIFIED"], [1, "IDENTITY"]], 1), Ai = (0, s.QT)(n.proto3, yi, "DiffRelayNotServedReason", [[0, "UNSPECIFIED"], [1, "RELAY_DISABLED"], [2, "VIEWER_GATE_OFF"], [3, "REPO_KILL_SWITCH"], [4, "GITHUB_FACT_MISSING"], [5, "GITHUB_FACT_STALE"], [6, "MIRROR_INCOMPLETE"], [7, "MIRROR_STATE_CHANGED"], [8, "MIRROR_UNVERIFIED"]], 1);
    class Si extends wi {
      constructor(e2) {
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.baseIsMergeBase = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Si().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Si().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Si().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Si, e2, t2);
      }
      static $() {
        return ["DiffRelayTarget|1 identifier #0|2 change_number 4?|3 version_number 4?|4 head_commit_sha 9|5 base_commit_sha 9|6 base_is_merge_base 8|7 from #1?", i, bi];
      }
    }
    class bi extends wi {
      constructor(e2) {
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.baseIsMergeBase = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bi, e2, t2);
      }
      static $() {
        return ["DiffRelayCommitPair|1 head_commit_sha 9|2 base_commit_sha 9|3 base_is_merge_base 8"];
      }
    }
    class Ei extends wi {
      constructor(e2) {
        super(), this.serviceRequest = new Uint8Array(0), this.shadow = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ei().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ei().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ei().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ei, e2, t2);
      }
      static $() {
        return ["GetDiffListingClientRequest|1 target #0|2 service_request 12|3 shadow 8", Si];
      }
    }
    class Ii extends wi {
      constructor(e2) {
        super(), this.serviceRequest = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ii().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ii().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ii().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ii, e2, t2);
      }
      static $() {
        return ["StreamDiffFilesClientRequest|1 target #0|2 service_request 12|3 thread_anchors #1?", Si, Ci];
      }
    }
    class Ci extends wi {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ci().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ci().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ci().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ci, e2, t2);
      }
      static $() {
        return ["DiffRelayStreamThreadAnchorSource|1 change_number 4"];
      }
    }
    class ki extends wi {
      constructor(e2) {
        super(), this.serviceRequest = new Uint8Array(0), this.shadow = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ki().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ki().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ki().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ki, e2, t2);
      }
      static $() {
        return ["GetDiffFileClientRequest|1 target #0|2 service_request 12|3 shadow 8|4 thread_anchors #1?", Si, xi];
      }
    }
    class xi extends wi {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, this.fromPath = "", this.toPath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xi, e2, t2);
      }
      static $() {
        return ["DiffRelayThreadAnchorSource|1 change_number 4|2 from_path 9|3 to_path 9"];
      }
    }
    class Ti extends wi {
      constructor(e2) {
        super(), this.serviceRequest = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ti().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ti().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ti().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ti, e2, t2);
      }
      static $() {
        return ["GetDiffEngineInfoClientRequest|1 service_request 12"];
      }
    }
    class Ri extends wi {
      constructor(e2) {
        super(), this.serviceRequest = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ri().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ri().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ri().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ri, e2, t2);
      }
      static $() {
        return ["PortAnchorsClientRequest|1 target #0|2 source #0|3 service_request 12", Si];
      }
    }
    class Bi extends wi {
      constructor(e2) {
        super(), this.body = { case: void 0 }, this.contentEncoding = _i.UNSPECIFIED, this.chunkIndex = 0, this.done = false, this.ownerPrivacyClass = vi.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bi, e2, t2);
      }
      static $() {
        return ["OriginDiffEnvelope|1 payload 12 body|2 oversized #0 body|3 not_served #1 body|4 content_encoding #2|5 chunk_index 13|6 done 8|7 owner_privacy_class #3", Pi, Ji, _i, vi];
      }
    }
    class Pi extends wi {
      constructor(e2) {
        super(), this.sizeBytes = n.protoInt64.zero, this.maxBytes = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pi, e2, t2);
      }
      static $() {
        return ["DiffRelayOversized|1 size_bytes 4|2 max_bytes 4"];
      }
    }
    class Ji extends wi {
      constructor(e2) {
        super(), this.reason = Ai.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ji().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ji().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ji().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ji, e2, t2);
      }
      static $() {
        return ["DiffRelayNotServed|1 reason #0", Ai];
      }
    }
    class Mi extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class qi extends Mi {
      constructor(e2) {
        super(), this.id = "", this.kind = "", this.displayName = "", this.avatarUrl = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qi, e2, t2);
      }
      static $() {
        return ["ActorWithDisplay|1 id 9|2 kind 9|3 display_name 9|4 avatar_url 9|5 performed_via #0", qi];
      }
    }
    const Di = "origin.v1.";
    class Oi extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return Di;
      }
    }
    var Ni = (0, s.QT)(n.proto3, Di, "ChangeStatus", [[0, "UNSPECIFIED"], [1, "DRAFT"], [2, "OPEN"], [3, "MERGED"], [4, "CLOSED"]], 1), Fi = (0, s.QT)(n.proto3, Di, "VersionPotentialMergeCommitState", [[0, "UNSPECIFIED"], [1, "UNKNOWN"], [2, "PREPARED"], [3, "MERGE_CONFLICT"]], 1), Ui = (0, s.QT)(n.proto3, Di, "UpdateChangeBranchMethod", [[0, "UNSPECIFIED"], [1, "MERGE_COMMIT"]], 1), Li = (0, s.QT)(n.proto3, Di, "ReviewVerdict", [[0, "UNSPECIFIED"], [1, "APPROVE"], [2, "REQUEST_CHANGES"], [3, "COMMENT"]], 1), $i = (0, s.QT)(n.proto3, Di, "ChangeAssignmentKind", [[0, "UNSPECIFIED"], [1, "REVIEW_REQUEST"], [2, "ASSIGNEE"]], 1), Qi = (0, s.QT)(n.proto3, Di, "ChangeAssignmentCreatedVia", [[0, "UNSPECIFIED"], [1, "HUMAN"], [2, "CODEOWNERS"], [3, "SYSTEM"]], 1), ji = (0, s.QT)(n.proto3, Di, "ReviewRequestEventAction", [[0, "UNSPECIFIED"], [1, "REQUESTED"], [2, "REMOVED"]], 1), Gi = (0, s.QT)(n.proto3, Di, "ChangeCodeownersMatchPathReason", [[0, "UNSPECIFIED"], [1, "CURRENT_PATH"], [2, "DELETED_PATH"], [3, "RENAME_NEW_PATH"], [4, "RENAME_OLD_PATH"], [5, "COPY_SOURCE_PATH"]], 1), Hi = (0, s.QT)(n.proto3, Di, "StackMemberParentRelation", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "STRICT"], [3, "STALE"], [4, "PARENT_MERGED"], [5, "PARENT_CLOSED"]], 1), zi = (0, s.QT)(n.proto3, Di, "StackMemberRecommendedAction", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "RESTACK_ONTO_PARENT"], [3, "REBASE_ONTO_TRUNK_IF_CONFLICTS"], [4, "RETARGET_BASE_TO_TRUNK"]], 1), Wi = (0, s.QT)(n.proto3, Di, "SectionOfChangesSortField", [[0, "UNSPECIFIED"], [1, "UPDATED_AT"], [2, "CREATED_AT"], [3, "TITLE"], [4, "LINES_CHANGED"]], 1), Vi = (0, s.QT)(n.proto3, Di, "SectionOfChangesStatus", [[0, "UNSPECIFIED"], [1, "DRAFT"], [2, "OPEN"], [3, "MERGED"], [4, "CLOSED"]], 1), Ki = (0, s.QT)(n.proto3, Di, "SectionOfChangesVerdict", [[0, "UNSPECIFIED"], [1, "APPROVE"], [2, "COMMENT"], [3, "REQUEST_CHANGES"]], 1), Yi = (0, s.QT)(n.proto3, Di, "SectionOfChangesReviewStatusState", [[0, "UNSPECIFIED"], [1, "ONE_OR_MORE_APPROVALS"], [2, "IS_FULLY_APPROVED"], [3, "HAS_ACTIVE_REVIEW"], [4, "HAS_REQUESTED_REVIEWERS"], [5, "HAS_REREQUESTED_REVIEW"], [6, "HAS_UNADDRESSED_CHANGES_REQUESTED"], [7, "HAS_CHANGES_REQUESTED"]], 1);
    class Zi extends Oi {
      constructor(e2) {
        super(), this.id = "", this.repoUuid = "", this.number = n.protoInt64.zero, this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Ni.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zi, e2, t2);
      }
      static $() {
        return ["Change|1 id 9|2 repo_uuid 9|3 number 4|4 title 9|5 description 9|6 head_ref 9|7 base_ref 9|9 status #0|10 created_at #1|11 updated_at #1|12 merged_at #1?|13 closed_at #1?|14 parent_change_id 9?|15 stack_id 9?|16 merge_commit_sha 9?|22 author #2|23 merged_by #2|24 merged_version_id 9?", Ni, n.Timestamp, qi];
      }
    }
    class Xi extends Oi {
      constructor(e2) {
        super(), this.id = "", this.changeId = "", this.number = n.protoInt64.zero, this.headSha = "", this.baseSha = "", this.additions = 0, this.deletions = 0, this.changedFiles = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xi().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xi().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xi().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xi, e2, t2);
      }
      static $() {
        return ["Version|1 id 9|2 change_id 9|3 number 4|4 head_sha 9|5 base_sha 9|6 created_at #0|7 additions 5|8 deletions 5|9 changed_files 5|10 merge_base_sha 9?|11 ahead_by 5?|12 behind_by 5?|13 head_tree_oid 9?|14 merge_base_tree_oid 9?|15 potential_merge_commit #1|16 included_in_merge 8?", n.Timestamp, ea];
      }
    }
    class ea extends Oi {
      constructor(e2) {
        super(), this.state = Fi.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ea().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ea().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ea().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ea, e2, t2);
      }
      static $() {
        return ["VersionPotentialMergeCommit|1 state #0|2 sha 9?|3 base_sha 9?", Fi];
      }
    }
    class ta extends Oi {
      constructor(e2) {
        super(), this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Ni.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ta().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ta().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ta().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ta, e2, t2);
      }
      static $() {
        return ["CreateChangeRequest|1 identifier #0|2 title 9|3 description 9|4 head_ref 9|5 base_ref 9|6 status #1|7 parent_change #2", i, Ni, na];
      }
    }
    class ra extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ra().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ra().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ra().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ra, e2, t2);
      }
      static $() {
        return ["CreateChangeResponse|1 change #0|2 initial_version #1", Zi, Xi];
      }
    }
    class na extends Oi {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new na().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new na().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new na().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(na, e2, t2);
      }
      static $() {
        return ["ChangeIdentifier|1 identifier #0|2 change_number 4", i];
      }
    }
    class sa extends Oi {
      constructor(e2) {
        super(), this.draft = false, this.allowStackLandingRevert = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sa, e2, t2);
      }
      static $() {
        return ["RevertPullRequestRequest|1 change #0|2 title 9?|3 description 9?|4 draft 8|5 allow_stack_landing_revert 8", na];
      }
    }
    class oa extends Oi {
      constructor(e2) {
        super(), this.reverseMirrorPushFailed = false, this.revertedChangeNumbers = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new oa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new oa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new oa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(oa, e2, t2);
      }
      static $() {
        return ["RevertPullRequestResponse|1 change #0|2 reverse_mirror_push_failed 8|5 reverted_change_numbers 4*", Zi];
      }
    }
    class ia extends Oi {
      constructor(e2) {
        super(), this.parentUpdate = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ia().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ia().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ia().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ia, e2, t2);
      }
      static $() {
        return ["UpdateChangeRequest|1 change #0|2 head_ref 9?|3 base_ref 9?|4 parent_change #0 parent_update|5 clear_parent 8 parent_update", na];
      }
    }
    class aa extends Oi {
      constructor(e2) {
        super(), this.unchanged = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new aa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new aa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new aa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(aa, e2, t2);
      }
      static $() {
        return ["UpdateChangeResponse|1 change #0|2 latest_version #1|3 unchanged 8", Zi, Xi];
      }
    }
    class ca extends Oi {
      constructor(e2) {
        super(), this.method = Ui.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ca().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ca().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ca().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ca, e2, t2);
      }
      static $() {
        return ["UpdateChangeBranchRequest|1 change #0|2 method #1", na, Ui];
      }
    }
    class la extends Oi {
      constructor(e2) {
        super(), this.unchanged = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new la().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new la().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new la().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(la, e2, t2);
      }
      static $() {
        return ["UpdateChangeBranchResponse|1 change #0|2 latest_version #1|3 unchanged 8", Zi, Xi];
      }
    }
    class ua extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ua().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ua().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ua().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ua, e2, t2);
      }
      static $() {
        return ["DeleteChangeHeadBranchRequest|1 change #0", na];
      }
    }
    class da extends Oi {
      constructor(e2) {
        super(), this.alreadyDeleted = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new da().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new da().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new da().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(da, e2, t2);
      }
      static $() {
        return ["DeleteChangeHeadBranchResponse|1 already_deleted 8"];
      }
    }
    class pa extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pa, e2, t2);
      }
      static $() {
        return ["RestorePullRequestBranchRequest|1 change #0", na];
      }
    }
    class ma extends Oi {
      constructor(e2) {
        super(), this.alreadyRestored = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ma().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ma().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ma().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ma, e2, t2);
      }
      static $() {
        return ["RestorePullRequestBranchResponse|1 already_restored 8"];
      }
    }
    class ha extends Oi {
      constructor(e2) {
        super(), this.baseRef = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ha().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ha().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ha().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ha, e2, t2);
      }
      static $() {
        return ["RetargetChangeRequest|1 change #0|2 base_ref 9", na];
      }
    }
    class fa extends Oi {
      constructor(e2) {
        super(), this.unchanged = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fa, e2, t2);
      }
      static $() {
        return ["RetargetChangeResponse|1 change #0|2 latest_version #1|3 unchanged 8", Zi, Xi];
      }
    }
    class ga extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ga().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ga().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ga().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ga, e2, t2);
      }
      static $() {
        return ["FoldChangeRequest|1 change #0", na];
      }
    }
    class ya extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ya().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ya().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ya().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ya, e2, t2);
      }
      static $() {
        return ["FoldChangeResponse"];
      }
    }
    class wa extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wa, e2, t2);
      }
      static $() {
        return ["LandChangeTreePathRequest|1 tree #0|2 leaf #0", na];
      }
    }
    class va extends Oi {
      constructor(e2) {
        super(), this.oldTrunkSha = "", this.newTrunkSha = "", this.mergedChangeNumbers = [], this.closedChangeNumbers = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new va().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new va().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new va().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(va, e2, t2);
      }
      static $() {
        return ["LandChangeTreePathResponse|1 old_trunk_sha 9|2 new_trunk_sha 9|3 merged_change_numbers 4*|4 closed_change_numbers 4*"];
      }
    }
    class _a extends Oi {
      constructor(e2) {
        super(), this.expectedHeadSha = "", this.expectedBaseSha = "", this.groups = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_a, e2, t2);
      }
      static $() {
        return ["SplitChangeIntoStackRequest|1 change #0|2 expected_head_sha 9|3 expected_base_sha 9|4 groups #1*", na, Aa];
      }
    }
    class Aa extends Oi {
      constructor(e2) {
        super(), this.title = "", this.paths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Aa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Aa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Aa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Aa, e2, t2);
      }
      static $() {
        return ["SplitChangeStackGroup|1 title 9|2 paths 9*"];
      }
    }
    class Sa extends Oi {
      constructor(e2) {
        super(), this.changes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sa, e2, t2);
      }
      static $() {
        return ["SplitChangeIntoStackResponse|1 changes #0*", Zi];
      }
    }
    class ba extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ba().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ba().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ba().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ba, e2, t2);
      }
      static $() {
        return ["UpdateChangeMetadataRequest|1 change #0|2 title 9?|3 description 9?", na];
      }
    }
    class Ea extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ea().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ea().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ea().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ea, e2, t2);
      }
      static $() {
        return ["UpdateChangeMetadataResponse|1 change #0", Zi];
      }
    }
    class Ia extends Oi {
      constructor(e2) {
        super(), this.status = Ni.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ia().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ia().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ia().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ia, e2, t2);
      }
      static $() {
        return ["UpdateChangeStatusRequest|1 change #0|2 status #1|3 reset_base #2?", na, Ni, Ca];
      }
    }
    class Ca extends Oi {
      constructor(e2) {
        super(), this.expectedBaseTipSha = "", this.resetToSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ca().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ca().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ca().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ca, e2, t2);
      }
      static $() {
        return ["ReopenBaseReset|1 expected_base_tip_sha 9|2 reset_to_sha 9"];
      }
    }
    class ka extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ka().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ka().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ka().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ka, e2, t2);
      }
      static $() {
        return ["UpdateChangeStatusResponse|1 change #0", Zi];
      }
    }
    class xa extends Oi {
      constructor(e2) {
        super(), this.dismissalMessage = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xa, e2, t2);
      }
      static $() {
        return ["ReviewDismissal|1 dismissed_at #0|4 dismissal_message 9|5 dismissed_by #1", n.Timestamp, qi];
      }
    }
    class Ta extends Oi {
      constructor(e2) {
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n.protoInt64.zero, this.verdict = Li.UNSPECIFIED, this.body = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ta().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ta().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ta().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ta, e2, t2);
      }
      static $() {
        return ["Review|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|6 verdict #0|7 body 9|8 created_at #1|12 submitted_at #1?|13 dismissal #2?|14 author #3", Li, n.Timestamp, xa, qi];
      }
    }
    class Ra extends Oi {
      constructor(e2) {
        super(), this.id = "", this.eventType = "", this.actorDisplayName = "", this.actorAvatarUrl = "", this.subjectUserId = "", this.subjectUserDisplayName = "", this.subjectUserAvatarUrl = "", this.subjectGroupId = "", this.labelName = "", this.labelColor = "", this.previousBaseRef = "", this.newBaseRef = "", this.previousTitle = "", this.newTitle = "", this.previousHeadSha = "", this.newHeadSha = "", this.headRefName = "", this.reviewId = "", this.dismissalMessage = "", this.relatedChangeNumber = n.protoInt64.zero, this.mergeQueueEvictionReason = "", this.mergeQueueValidationSha = "", this.satisfierGates = [], this.stoodInOwnerRules = [], this.codeReviewGateReported = false, this.baseRefName = "", this.previousBaseSha = "", this.newBaseSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ra().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ra().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ra().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ra, e2, t2);
      }
      static $() {
        return ["ChangeTimelineEvent|1 id 9|2 event_type 9|3 created_at #0|6 actor_display_name 9|7 actor_avatar_url 9|8 subject_user_id 9|9 subject_user_display_name 9|10 subject_user_avatar_url 9|11 subject_group_id 9|12 label_name 9|13 label_color 9|14 previous_base_ref 9|15 new_base_ref 9|16 previous_title 9|17 new_title 9|18 previous_head_sha 9|19 new_head_sha 9|20 head_ref_name 9|21 review_id 9|22 dismissal_message 9|23 related_change_number 4|24 actor #1|25 merge_queue_eviction_reason 9|26 merge_queue_validation_sha 9|27 satisfier_gates #2*|28 stood_in_owner_rules #3*|29 code_review_gate_reported 8|30 base_ref_name 9|31 previous_base_sha 9|32 new_base_sha 9", n.Timestamp, qi, Ba, Pa];
      }
    }
    class Ba extends Oi {
      constructor(e2) {
        super(), this.gate = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ba().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ba().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ba().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ba, e2, t2);
      }
      static $() {
        return ["ChangesetApprovedGate|1 gate 9|2 report_url 9?"];
      }
    }
    class Pa extends Oi {
      constructor(e2) {
        super(), this.scope = "", this.reviewers = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pa, e2, t2);
      }
      static $() {
        return ["ChangeTimelineOwnerRule|1 scope 9|2 reviewers 9*"];
      }
    }
    class Ja extends Oi {
      constructor(e2) {
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n.protoInt64.zero, this.body = "", this.threadId = "", this.reactionGroups = [], this.reviewId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ja().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ja().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ja().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ja, e2, t2);
      }
      static $() {
        return ["Comment|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|6 body 9|7 created_at #0|8 updated_at #0|9 thread_id 9|13 reaction_groups #1*|14 author #2|15 review_id 9", n.Timestamp, Ma, qi];
      }
    }
    class Ma extends Oi {
      constructor(e2) {
        super(), this.emoji = "", this.count = 0, this.viewerHasReacted = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ma().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ma().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ma().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ma, e2, t2);
      }
      static $() {
        return ["CommentReactionGroup|1 emoji 9|2 count 13|3 viewer_has_reacted 8"];
      }
    }
    class qa extends Oi {
      constructor(e2) {
        super(), this.emoji = "", this.viewerIsReactor = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qa, e2, t2);
      }
      static $() {
        return ["CommentReaction|1 emoji 9|6 viewer_is_reactor 8|7 reactor #0", qi];
      }
    }
    class Da extends Oi {
      constructor(e2) {
        super(), this.verdict = Li.UNSPECIFIED, this.body = "", this.versionNumber = n.protoInt64.zero, this.requireLatestVersion = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Da().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Da().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Da().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Da, e2, t2);
      }
      static $() {
        return ["CreateReviewRequest|1 change #0|2 verdict #1|3 body 9|4 version_number 4|5 require_latest_version 8", na, Li];
      }
    }
    class Oa extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Oa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Oa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Oa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Oa, e2, t2);
      }
      static $() {
        return ["CreateReviewResponse|1 review #0", Ta];
      }
    }
    class Na extends Oi {
      constructor(e2) {
        super(), this.reviewId = "", this.body = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Na().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Na().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Na().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Na, e2, t2);
      }
      static $() {
        return ["UpdateReviewRequest|1 change #0|2 review_id 9|3 body 9", na];
      }
    }
    class Fa extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fa, e2, t2);
      }
      static $() {
        return ["UpdateReviewResponse|1 review #0", Ta];
      }
    }
    class Ua extends Oi {
      constructor(e2) {
        super(), this.reviewId = "", this.reason = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ua().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ua().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ua().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ua, e2, t2);
      }
      static $() {
        return ["DismissReviewRequest|1 change #0|2 review_id 9|3 reason 9", na];
      }
    }
    class La extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new La().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new La().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new La().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(La, e2, t2);
      }
      static $() {
        return ["DismissReviewResponse|1 review #0", Ta];
      }
    }
    class $a extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($a, e2, t2);
      }
      static $() {
        return ["ListReviewsRequest|1 change #0", na];
      }
    }
    class Qa extends Oi {
      constructor(e2) {
        super(), this.reviews = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qa, e2, t2);
      }
      static $() {
        return ["ListReviewsResponse|1 reviews #0*", Ta];
      }
    }
    class ja extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ja().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ja().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ja().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ja, e2, t2);
      }
      static $() {
        return ["ListChangeTimelineEventsRequest|1 change #0", na];
      }
    }
    class Ga extends Oi {
      constructor(e2) {
        super(), this.events = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ga().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ga().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ga().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ga, e2, t2);
      }
      static $() {
        return ["ListChangeTimelineEventsResponse|1 events #0*", Ra];
      }
    }
    class Ha extends Oi {
      constructor(e2) {
        super(), this.body = "", this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ha().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ha().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ha().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ha, e2, t2);
      }
      static $() {
        return ["CreateCommentRequest|1 change #0|2 body 9|3 version_number 4", na];
      }
    }
    class za extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new za().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new za().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new za().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(za, e2, t2);
      }
      static $() {
        return ["CreateCommentResponse|1 comment #0", Ja];
      }
    }
    class Wa extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wa, e2, t2);
      }
      static $() {
        return ["ListCommentsRequest|1 change #0", na];
      }
    }
    class Va extends Oi {
      constructor(e2) {
        super(), this.comments = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Va().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Va().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Va().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Va, e2, t2);
      }
      static $() {
        return ["ListCommentsResponse|1 comments #0*", Ja];
      }
    }
    class Ka extends Oi {
      constructor(e2) {
        super(), this.id = "", this.changeId = "", this.kind = $i.UNSPECIFIED, this.assignedGroupId = "", this.createdVia = Qi.UNSPECIFIED, this.cursorUserId = n.protoInt64.zero, this.cursorGroupId = n.protoInt64.zero, this.assignedServiceAccountId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ka().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ka().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ka().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ka, e2, t2);
      }
      static $() {
        return ["ChangeAssignment|1 id 9|2 change_id 9|3 kind #0|5 assigned_group_id 9|6 created_via #1|8 created_at #2|9 updated_at #2|10 cursor_user_id 3|11 cursor_group_id 3|12 assigned_user #3|13 assigned_group #4|14 created_by #5|15 assigned_service_account #6|16 assigned_service_account_id 9", $i, Qi, n.Timestamp, mc, hc, qi, gc];
      }
    }
    class Ya extends Oi {
      constructor(e2) {
        super(), this.id = "", this.changeId = "", this.kind = $i.UNSPECIFIED, this.action = ji.UNSPECIFIED, this.assignedUserId = "", this.assignedGroupId = "", this.createdVia = Qi.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ya().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ya().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ya().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ya, e2, t2);
      }
      static $() {
        return ["ReviewRequestEvent|1 id 9|2 change_id 9|3 kind #0|4 action #1|13 assigned_user_id 9|6 assigned_group_id 9|7 created_via #2|9 created_at #3|10 actor #4|11 assigned_user #5|12 assigned_group #6", $i, ji, Qi, n.Timestamp, qi, mc, hc];
      }
    }
    class Za extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Za().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Za().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Za().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Za, e2, t2);
      }
      static $() {
        return ["ListReviewRequestEventsRequest|1 change #0", na];
      }
    }
    class Xa extends Oi {
      constructor(e2) {
        super(), this.events = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xa().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xa().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xa().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xa, e2, t2);
      }
      static $() {
        return ["ListReviewRequestEventsResponse|1 events #0*", Ya];
      }
    }
    class ec extends Oi {
      constructor(e2) {
        super(), this.target = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ec().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ec().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ec().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ec, e2, t2);
      }
      static $() {
        return ["RequestReviewRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target|7 service_account_id 9 target", na];
      }
    }
    class tc extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tc, e2, t2);
      }
      static $() {
        return ["RequestReviewResponse|1 assignment #0", Ka];
      }
    }
    class rc extends Oi {
      constructor(e2) {
        super(), this.target = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rc, e2, t2);
      }
      static $() {
        return ["ReviewRequestTarget|2 group_id 9 target|3 cursor_user_id 3 target|4 cursor_group_id 3 target|5 user_id 9 target|6 service_account_id 9 target"];
      }
    }
    class nc extends Oi {
      constructor(e2) {
        super(), this.additions = [], this.removals = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nc, e2, t2);
      }
      static $() {
        return ["ApplyReviewRequestChangesRequest|1 change #0|2 additions #1*|3 removals #1*", na, rc];
      }
    }
    class sc extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sc, e2, t2);
      }
      static $() {
        return ["ApplyReviewRequestChangesResponse"];
      }
    }
    class oc extends Oi {
      constructor(e2) {
        super(), this.targets = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new oc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new oc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new oc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(oc, e2, t2);
      }
      static $() {
        return ["RequestReviewsRequest|1 change #0|2 targets #1*", na, rc];
      }
    }
    class ic extends Oi {
      constructor(e2) {
        super(), this.assignments = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ic().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ic().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ic().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ic, e2, t2);
      }
      static $() {
        return ["RequestReviewsResponse|1 assignments #0*", Ka];
      }
    }
    class ac extends Oi {
      constructor(e2) {
        super(), this.target = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ac().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ac().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ac().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ac, e2, t2);
      }
      static $() {
        return ["CloseReviewRequestRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target|7 service_account_id 9 target", na];
      }
    }
    class cc extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cc, e2, t2);
      }
      static $() {
        return ["CloseReviewRequestResponse"];
      }
    }
    class lc extends Oi {
      constructor(e2) {
        super(), this.target = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lc, e2, t2);
      }
      static $() {
        return ["AddAssigneeRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target", na];
      }
    }
    class uc extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new uc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new uc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new uc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(uc, e2, t2);
      }
      static $() {
        return ["AddAssigneeResponse|1 assignment #0", Ka];
      }
    }
    class dc extends Oi {
      constructor(e2) {
        super(), this.target = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dc, e2, t2);
      }
      static $() {
        return ["RemoveAssigneeRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target", na];
      }
    }
    class pc extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pc, e2, t2);
      }
      static $() {
        return ["RemoveAssigneeResponse"];
      }
    }
    class mc extends Oi {
      constructor(e2) {
        super(), this.firstName = "", this.lastName = "", this.email = "", this.avatarUrl = "", this.cursorUserId = n.protoInt64.zero, this.userId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mc, e2, t2);
      }
      static $() {
        return ["OriginReviewerCandidateUser|3 first_name 9|4 last_name 9|5 email 9|6 avatar_url 9|7 cursor_user_id 3|8 user_id 9"];
      }
    }
    class hc extends Oi {
      constructor(e2) {
        super(), this.groupPublicId = "", this.organizationSlug = "", this.groupSlug = "", this.name = "", this.cursorGroupId = n.protoInt64.zero, this.memberUserIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hc, e2, t2);
      }
      static $() {
        return ["OriginReviewerCandidateGroup|1 group_public_id 9|2 organization_slug 9|3 group_slug 9|4 name 9|6 cursor_group_id 3|7 member_user_ids 9*"];
      }
    }
    class fc extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fc, e2, t2);
      }
      static $() {
        return ["ListOriginRepoReviewerCandidatesRequest|1 repo #0", i];
      }
    }
    class gc extends Oi {
      constructor(e2) {
        super(), this.serviceAccountId = "", this.displayName = "", this.avatarUrl = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gc, e2, t2);
      }
      static $() {
        return ["OriginReviewerCandidateServiceAccount|1 service_account_id 9|2 display_name 9|3 avatar_url 9"];
      }
    }
    class yc extends Oi {
      constructor(e2) {
        super(), this.users = [], this.groups = [], this.serviceAccounts = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yc, e2, t2);
      }
      static $() {
        return ["ListOriginRepoReviewerCandidatesResponse|1 users #0*|2 groups #1*|3 service_accounts #2*", mc, hc, gc];
      }
    }
    class wc extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wc, e2, t2);
      }
      static $() {
        return ["GetChangeRequest|1 change #0|2 include_head_ref_exists 8?|3 include_merge_when_ready 8?|4 include_commits_behind_base 8?|5 include_viewer_capabilities 8?|6 include_merge_queue 8?", na];
      }
    }
    class vc extends Oi {
      constructor(e2) {
        super(), this.id = "", this.name = "", this.color = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vc, e2, t2);
      }
      static $() {
        return ["ChangeLabel|1 id 9|2 name 9|3 color 9|4 description 9?"];
      }
    }
    class _c extends Oi {
      constructor(e2) {
        super(), this.id = "", this.changeId = "", this.repoUuid = "", this.changeNumber = n.protoInt64.zero, this.status = "", this.source = "", this.trunkBranch = "", this.consecutiveFailedAttempts = 0, this.dev = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_c, e2, t2);
      }
      static $() {
        return ["ChangeMergeWhenReadySummary|1 id 9|2 change_id 9|3 repo_uuid 9|4 change_number 4|6 status 9|7 source 9|8 trunk_branch 9|9 lock_expires_at #0?|10 consecutive_failed_attempts 5|11 dev 8|12 repo_org 9?|13 repo_name 9?|14 enabled_by #1", n.Timestamp, qi];
      }
    }
    class Ac extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ac().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ac().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ac().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ac, e2, t2);
      }
      static $() {
        return ["ChangeViewerCapabilities|1 can_write_pull_requests 8?|2 can_write_contents 8?|3 can_write_reviews 8?|4 can_merge 8?|5 can_enable_merge_when_ready 8?|6 can_disable_merge_when_ready 8?"];
      }
    }
    class Sc extends Oi {
      constructor(e2) {
        super(), this.headSha = "", this.targetRef = "", this.status = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sc, e2, t2);
      }
      static $() {
        return ["ChangeMergeQueueSummary|1 head_sha 9|2 target_ref 9|3 status 9|4 ahead 13?|5 validation_sha 9?|6 eviction_reason 9?"];
      }
    }
    class bc extends Oi {
      constructor(e2) {
        super(), this.versions = [], this.assignments = [], this.labels = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bc, e2, t2);
      }
      static $() {
        return ["GetChangeResponse|1 change #0|2 versions #1*|3 assignments #2*|4 labels #3*|5 viewer_last_viewed_at #4?|6 viewer_timeline_viewed_at #4?|7 head_ref_exists 8?|8 merge_when_ready #5?|9 commits_behind_base 5?|12 commits_behind_base_as_of_version 4?|10 viewer_capabilities #6?|11 viewer_is_author 8?|13 merge_queue #7?|14 merge_queue_owns_landing 8?|15 head_ref_locked 8?", Zi, Xi, Ka, vc, n.Timestamp, _c, Ac, Sc];
      }
    }
    class Ec extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ec().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ec().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ec().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ec, e2, t2);
      }
      static $() {
        return ["GetChangeCodeownersApplicationRequest|1 change #0|2 version_number 4?", na];
      }
    }
    class Ic extends Oi {
      constructor(e2) {
        super(), this.checkedPaths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ic().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ic().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ic().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ic, e2, t2);
      }
      static $() {
        return ["ChangeCodeownersSnapshotMissing|1 checked_paths 9*"];
      }
    }
    class Cc extends Oi {
      constructor(e2) {
        super(), this.path = "", this.sizeBytes = n.protoInt64.zero, this.maxSizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cc, e2, t2);
      }
      static $() {
        return ["ChangeCodeownersSnapshotTooLarge|1 path 9|2 size_bytes 4|3 max_size_bytes 4"];
      }
    }
    class kc extends Oi {
      constructor(e2) {
        super(), this.path = "", this.sizeBytes = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kc, e2, t2);
      }
      static $() {
        return ["ChangeCodeownersSnapshotFound|1 path 9|2 size_bytes 4"];
      }
    }
    class xc extends Oi {
      constructor(e2) {
        super(), this.baseSha = "", this.status = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xc, e2, t2);
      }
      static $() {
        return ["ChangeCodeownersSnapshot|1 base_sha 9|2 missing #0 status|3 too_large #1 status|4 found #2 status", Ic, Cc, kc];
      }
    }
    class Tc extends Oi {
      constructor(e2) {
        super(), this.path = "", this.reason = Gi.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tc, e2, t2);
      }
      static $() {
        return ["ChangeCodeownersMatchPath|1 path 9|2 reason #0", Gi];
      }
    }
    class Rc extends Oi {
      constructor(e2) {
        super(), this.label = "", this.identity = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rc, e2, t2);
      }
      static $() {
        return ["ChangeCodeowner|1 label 9|2 user #0 identity|3 group #1 identity", Bc, Pc];
      }
    }
    class Bc extends Oi {
      constructor(e2) {
        super(), this.login = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bc, e2, t2);
      }
      static $() {
        return ["ChangeCodeowner.User|1 login 9"];
      }
    }
    class Pc extends Oi {
      constructor(e2) {
        super(), this.organizationSlug = "", this.groupSlug = "", this.groupPublicId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pc, e2, t2);
      }
      static $() {
        return ["ChangeCodeowner.Group|1 organization_slug 9|2 group_slug 9|3 group_public_id 9"];
      }
    }
    class Jc extends Oi {
      constructor(e2) {
        super(), this.owners = [], this.requirementGroupId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jc, e2, t2);
      }
      static $() {
        return ["ChangeCodeownersResolvedOwnerRule|1 match_path #0|2 owners #1*|3 requirement_group_id 9", Tc, Rc];
      }
    }
    class Mc extends Oi {
      constructor(e2) {
        super(), this.changeKind = Vn.UNSPECIFIED, this.canonicalPath = "", this.matchPaths = [], this.resolvedOwnerRules = [], this.agenticOwners = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mc, e2, t2);
      }
      static $() {
        return ["ChangeCodeownersChangedPath|1 change_kind #0|2 canonical_path 9|3 old_path 9?|4 match_paths #1*|5 resolved_owner_rules #2*|6 agentic_owners #3*", Vn, Tc, Jc, Rc];
      }
    }
    class qc extends Oi {
      constructor(e2) {
        super(), this.canonicalPath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qc, e2, t2);
      }
      static $() {
        return ["ChangeCodeownersRequirementPath|1 canonical_path 9|2 match_path #0", Tc];
      }
    }
    class Dc extends Oi {
      constructor(e2) {
        super(), this.id = "", this.owners = [], this.paths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dc, e2, t2);
      }
      static $() {
        return ["ChangeCodeownersRequirementGroup|1 id 9|2 owners #0*|3 paths #1*", Rc, qc];
      }
    }
    class Oc extends Oi {
      constructor(e2) {
        super(), this.changedPaths = [], this.requirementGroups = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Oc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Oc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Oc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Oc, e2, t2);
      }
      static $() {
        return ["GetChangeCodeownersApplicationResponse|1 snapshot #0|2 changed_paths #1*|3 requirement_groups #2*|4 undeterminable #3", xc, Mc, Dc, Nc];
      }
    }
    class Nc extends Oi {
      constructor(e2) {
        super(), this.detail = "", this.remediation = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nc, e2, t2);
      }
      static $() {
        return ["ChangeCodeownersUndeterminable|1 detail 9|2 remediation 9"];
      }
    }
    class Fc extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fc, e2, t2);
      }
      static $() {
        return ["GetChangeStackRequest|1 change #0", na];
      }
    }
    class Uc extends Oi {
      constructor(e2) {
        super(), this.changeId = "", this.headSha = "", this.recordedBaseSha = "", this.rootBaseRef = "", this.parentRelation = Hi.UNSPECIFIED, this.recommendedAction = zi.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Uc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Uc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Uc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Uc, e2, t2);
      }
      static $() {
        return ["StackMemberState|1 change_id 9|2 head_sha 9|3 recorded_base_sha 9|4 root_base_ref 9|5 parent_head_sha 9?|6 parent_relation #0|7 recommended_action #1", Hi, zi];
      }
    }
    class Lc extends Oi {
      constructor(e2) {
        super(), this.changes = [], this.convergenceConflictedPaths = [], this.memberStates = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lc, e2, t2);
      }
      static $() {
        return ["GetChangeStackResponse|1 changes #0*|6 stack_id 9?|2 convergence_state 9?|3 convergence_conflicted_change_number 4?|4 convergence_conflicted_paths 9*|5 convergence_blocked_reason 9?|7 member_states #1*", Zi, Uc];
      }
    }
    class $c extends Oi {
      constructor(e2) {
        super(), this.changeNumbers = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($c, e2, t2);
      }
      static $() {
        return ["GetProjectedLatestVersionsRequest|1 identifier #0|2 change_numbers 4*", i];
      }
    }
    class Qc extends Oi {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qc, e2, t2);
      }
      static $() {
        return ["ProjectedLatestVersionEntry|1 change_number 4|2 projected_latest_version #0", Xi];
      }
    }
    class jc extends Oi {
      constructor(e2) {
        super(), this.entries = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jc, e2, t2);
      }
      static $() {
        return ["GetProjectedLatestVersionsResponse|1 entries #0*", Qc];
      }
    }
    class Gc extends Oi {
      constructor(e2) {
        super(), this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gc, e2, t2);
      }
      static $() {
        return ["ListChangeCommitsRequest|1 change #0|2 version_number 4|3 max_commits 13?", na];
      }
    }
    class Hc extends Oi {
      constructor(e2) {
        super(), this.commits = [], this.mergeBaseSha = "", this.truncated = false, this.actorDisplaysBySha = {}, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hc, e2, t2);
      }
      static $() {
        return ["ListChangeCommitsResponse|1 commits #0*|2 merge_base_sha 9|3 truncated 8|4 actor_displays_by_sha 9,#1", fs, zc];
      }
    }
    class zc extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zc, e2, t2);
      }
      static $() {
        return ["CommitActorDisplays|1 author #0|2 committer #0", Wc];
      }
    }
    class Wc extends Oi {
      constructor(e2) {
        super(), this.displayName = "", this.avatarUrl = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wc, e2, t2);
      }
      static $() {
        return ["CommitActorDisplay|1 display_name 9|2 avatar_url 9"];
      }
    }
    class Vc extends Oi {
      constructor(e2) {
        super(), this.file = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vc, e2, t2);
      }
      static $() {
        return ["ListChangesRequest|1 identifier #0|2 status 9?|3 cursor 4?|4 limit 5?|5 author_id 9?|6 base_ref 9?|7 head_ref 9?|8 file 9*", i];
      }
    }
    class Kc extends Oi {
      constructor(e2) {
        super(), this.headRef = "", this.includeInactive = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kc, e2, t2);
      }
      static $() {
        return ["ListChangesByHeadRefRequest|1 identifier #0|2 head_ref 9|3 include_inactive 8", i];
      }
    }
    class Yc extends Oi {
      constructor(e2) {
        super(), this.changes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yc, e2, t2);
      }
      static $() {
        return ["ListChangesByHeadRefResponse|1 changes #0*", Zi];
      }
    }
    class Zc extends Oi {
      constructor(e2) {
        super(), this.sha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zc, e2, t2);
      }
      static $() {
        return ["GetCommitReferencesRequest|1 identifier #0|2 sha 9", i];
      }
    }
    class Xc extends Oi {
      constructor(e2) {
        super(), this.branchName = "", this.pullRequestNumber = n.protoInt64.zero, this.status = Ni.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xc().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xc().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xc().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xc, e2, t2);
      }
      static $() {
        return ["CommitReference|1 branch_name 9|2 pull_request_number 3|3 status #0", Ni];
      }
    }
    class el extends Oi {
      constructor(e2) {
        super(), this.references = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new el().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new el().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new el().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(el, e2, t2);
      }
      static $() {
        return ["GetCommitReferencesResponse|1 references #0*", Xc];
      }
    }
    class tl extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tl, e2, t2);
      }
      static $() {
        return ["ChangeWithLatestVersion|1 change #0|2 latest_version #1?", Zi, Xi];
      }
    }
    class rl extends Oi {
      constructor(e2) {
        super(), this.changeNumbers = [], this.headRefs = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rl, e2, t2);
      }
      static $() {
        return ["BatchGetChangesRequest|1 identifier #0|2 change_numbers 4*|3 head_refs 9*", i];
      }
    }
    class nl extends Oi {
      constructor(e2) {
        super(), this.changes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nl, e2, t2);
      }
      static $() {
        return ["BatchGetChangesResponse|1 changes #0*", tl];
      }
    }
    class sl extends Oi {
      constructor(e2) {
        super(), this.changes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sl, e2, t2);
      }
      static $() {
        return ["ListChangesResponse|1 changes #0*|2 next_cursor 4?", tl];
      }
    }
    class ol extends Oi {
      constructor(e2) {
        super(), this.repos = [], this.limit = 0, this.sortField = Wi.UNSPECIFIED, this.sortIsAsc = false, this.skipTotalCount = false, this.changeIds = [], this.dropUnauthorizedRepos = false, this.viewerScoped = false, this.includeStackMembers = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ol().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ol().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ol().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ol, e2, t2);
      }
      static $() {
        return ["GetSectionOfChangesRequest|1 repos #0*|2 filter #1|3 cursor 9?|4 limit 5|5 sort_field #2|6 sort_is_asc 8|7 skip_total_count 8|8 change_ids 9*|10 drop_unauthorized_repos 8|9 viewer_scoped 8|11 include_stack_members 8", i, yl, Wi];
      }
    }
    class il extends Oi {
      constructor(e2) {
        super(), this.changes = [], this.hasMore = false, this.totalCount = 0, this.droppedRepoCount = 0, this.stackMembers = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new il().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new il().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new il().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(il, e2, t2);
      }
      static $() {
        return ["GetSectionOfChangesResponse|1 changes #0*|2 has_more 8|3 total_count 5|4 dropped_repo_count 5|5 stack_members #1*", fl, al];
      }
    }
    class al extends Oi {
      constructor(e2) {
        super(), this.id = "", this.number = 0, this.stackId = "", this.baseRef = "", this.status = Ni.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new al().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new al().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new al().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(al, e2, t2);
      }
      static $() {
        return ["SectionOfChangesStackMember|1 id 9|2 number 5|3 stack_id 9|4 parent_change_id 9?|5 base_ref 9|6 status #0", Ni];
      }
    }
    class cl extends Oi {
      constructor(e2) {
        super(), this.query = "", this.limit = 0, this.includeLabels = false, this.includeAssignees = false, this.includeReviewRequests = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cl, e2, t2);
      }
      static $() {
        return ["SearchChangesRequest|1 identifier #0?|2 query 9|3 cursor 9?|4 limit 5|5 include_labels 8|6 include_assignees 8|7 include_review_requests 8", i];
      }
    }
    class ll extends Oi {
      constructor(e2) {
        super(), this.changes = [], this.hasMore = false, this.totalCount = 0, this.totalCountIsLowerBound = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ll().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ll().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ll().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ll, e2, t2);
      }
      static $() {
        return ["SearchChangesResponse|1 changes #0*|2 has_more 8|3 next_cursor 9?|4 total_count 5|5 total_count_is_lower_bound 8", fl];
      }
    }
    class ul extends Oi {
      constructor(e2) {
        super(), this.repos = [], this.filters = [], this.dropUnauthorizedRepos = false, this.viewerScoped = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ul().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ul().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ul().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ul, e2, t2);
      }
      static $() {
        return ["CountSectionsOfChangesRequest|1 repos #0*|2 filters #1*|3 drop_unauthorized_repos 8|4 viewer_scoped 8", i, yl];
      }
    }
    class dl extends Oi {
      constructor(e2) {
        super(), this.counts = [], this.droppedRepoCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dl, e2, t2);
      }
      static $() {
        return ["CountSectionsOfChangesResponse|1 counts 5*|2 dropped_repo_count 5"];
      }
    }
    class pl extends Oi {
      constructor(e2) {
        super(), this.cursorUserIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pl, e2, t2);
      }
      static $() {
        return ["ResolveSectionPersonalBotAuthorsRequest|1 cursor_user_ids 3*"];
      }
    }
    class ml extends Oi {
      constructor(e2) {
        super(), this.countsAsOwner = false, this.authors = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ml().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ml().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ml().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ml, e2, t2);
      }
      static $() {
        return ["ResolveSectionPersonalBotAuthorsResponse|1 counts_as_owner 8|2 authors #0*", hl];
      }
    }
    class hl extends Oi {
      constructor(e2) {
        super(), this.cursorUserId = n.protoInt64.zero, this.serviceAccountIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hl, e2, t2);
      }
      static $() {
        return ["SectionPersonalBotAuthor|1 cursor_user_id 3|2 service_account_ids 9*"];
      }
    }
    class fl extends Oi {
      constructor(e2) {
        super(), this.id = "", this.number = 0, this.repoId = "", this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Vi.UNSPECIFIED, this.headSha = "", this.baseSha = "", this.additions = 0, this.deletions = 0, this.changedFiles = 0, this.versionCount = 0, this.reviewers = [], this.totalThreadCount = 0, this.unresolvedThreadCount = 0, this.repoNamespace = "", this.repoName = "", this.labels = [], this.assignees = [], this.reviewRequests = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fl, e2, t2);
      }
      static $() {
        return ["SectionOfChanges|1 id 9|2 number 5|3 repo_id 9|4 title 9|5 description 9|6 head_ref 9|7 base_ref 9|9 status #0|10 created_at #1|11 updated_at #1|12 merged_at #1?|13 closed_at #1?|14 head_sha 9|15 base_sha 9|16 additions 5|17 deletions 5|18 changed_files 5|19 version_count 5|20 review_decision 9?|21 reviewers #2*|22 total_thread_count 5|23 unresolved_thread_count 5|24 parent_change_id 9?|25 stack_id 9?|26 repo_namespace 9|27 repo_name 9|31 author #3|32 viewer_last_viewed_at #1?|33 discussion_comment_count 5?|34 agent_wrote 8?|35 labels #4*|36 assignees #5*|37 review_requests #5*", Vi, n.Timestamp, gl, qi, vc, Ka];
      }
    }
    class gl extends Oi {
      constructor(e2) {
        super(), this.verdict = Ki.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesReviewer|2 verdict #0|3 reviewed_at #1|7 author #2", Ki, n.Timestamp, qi];
      }
    }
    class yl extends Oi {
      constructor(e2) {
        super(), this.kind = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilter|1 and #0 kind|2 or #1 kind|3 not #2 kind|4 consolidated_status #3 kind|5 title_contains #4 kind|6 description_contains #5 kind|7 merge_base #6 kind|8 trunk #7 kind|9 last_updated #8 kind|10 open_review_request_for #9 kind|11 reopened_review_request_for #10 kind|12 closed_review_request_from #11 kind|13 includes_direct_reviewer #12 kind|14 author_is #13 kind|15 review_status #14 kind|16 approved_by #15 kind|17 includes_past_reviewer #16 kind|18 has_label #17 kind|19 num_files_changed #18 kind|20 num_lines_changed #19 kind|21 includes_reviewer #20 kind|22 includes_assignee #21 kind|23 includes_direct_team_reviewer #22 kind|24 mentions #23 kind|25 merged_within #24 kind|100 unsupported #25 kind", wl, vl, _l, Al, Sl, bl, El, Il, Cl, kl, xl, Tl, Rl, Bl, Pl, Jl, Ml, ql, Dl, Ol, Nl, Ul, Ll, $l, Ql, jl];
      }
    }
    class wl extends Oi {
      constructor(e2) {
        super(), this.exprs = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterAnd|1 exprs #0*", yl];
      }
    }
    class vl extends Oi {
      constructor(e2) {
        super(), this.exprs = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterOr|1 exprs #0*", yl];
      }
    }
    class _l extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_l, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterNot|1 expr #0", yl];
      }
    }
    class Al extends Oi {
      constructor(e2) {
        super(), this.status = Vi.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Al().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Al().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Al().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Al, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterConsolidatedStatus|1 status #0", Vi];
      }
    }
    class Sl extends Oi {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterTitleContains|1 text 9"];
      }
    }
    class bl extends Oi {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterDescriptionContains|1 text 9"];
      }
    }
    class El extends Oi {
      constructor(e2) {
        super(), this.mergeBase = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new El().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new El().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new El().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(El, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterMergeBase|1 merge_base 9"];
      }
    }
    class Il extends Oi {
      constructor(e2) {
        super(), this.trunk = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Il().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Il().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Il().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Il, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterTrunk|1 trunk 9"];
      }
    }
    class Cl extends Oi {
      constructor(e2) {
        super(), this.hours = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterLastUpdated|1 hours 5"];
      }
    }
    class kl extends Oi {
      constructor(e2) {
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterOpenReviewRequestFor|2 cursor_user_id 3"];
      }
    }
    class xl extends Oi {
      constructor(e2) {
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterReopenedReviewRequestFor|2 cursor_user_id 3"];
      }
    }
    class Tl extends Oi {
      constructor(e2) {
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterClosedReviewRequestFrom|2 cursor_user_id 3"];
      }
    }
    class Rl extends Oi {
      constructor(e2) {
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterIncludesDirectReviewer|2 cursor_user_id 3"];
      }
    }
    class Bl extends Oi {
      constructor(e2) {
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterAuthorIs|2 cursor_user_id 3"];
      }
    }
    class Pl extends Oi {
      constructor(e2) {
        super(), this.state = Yi.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterReviewStatus|1 state #0", Yi];
      }
    }
    class Jl extends Oi {
      constructor(e2) {
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterApprovedBy|2 cursor_user_id 3"];
      }
    }
    class Ml extends Oi {
      constructor(e2) {
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ml().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ml().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ml().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ml, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterIncludesPastReviewer|2 cursor_user_id 3"];
      }
    }
    class ql extends Oi {
      constructor(e2) {
        super(), this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ql().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ql().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ql().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ql, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterHasLabel|1 name 9"];
      }
    }
    class Dl extends Oi {
      constructor(e2) {
        super(), this.numFiles = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterNumFilesChanged|1 num_files 5"];
      }
    }
    class Ol extends Oi {
      constructor(e2) {
        super(), this.numLines = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ol().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ol().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ol().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ol, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterNumLinesChanged|1 num_lines 5"];
      }
    }
    class Nl extends Oi {
      constructor(e2) {
        super(), this.groupPublicIds = [], this.cursorUserId = n.protoInt64.zero, this.groupMembers = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterIncludesReviewer|2 group_public_ids 9*|3 cursor_user_id 3|4 group_members #0*", Fl];
      }
    }
    class Fl extends Oi {
      constructor(e2) {
        super(), this.groupPublicId = "", this.cursorUserIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterReviewerGroupMembers|1 group_public_id 9|2 cursor_user_ids 3*"];
      }
    }
    class Ul extends Oi {
      constructor(e2) {
        super(), this.cursorUserId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ul().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ul().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ul().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ul, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterIncludesAssignee|2 cursor_user_id 3"];
      }
    }
    class Ll extends Oi {
      constructor(e2) {
        super(), this.slug = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ll().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ll().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ll().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ll, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterIncludesDirectTeamReviewer|1 slug 9"];
      }
    }
    class $l extends Oi {
      constructor(e2) {
        super(), this.username = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($l, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterMentions|1 username 9"];
      }
    }
    class Ql extends Oi {
      constructor(e2) {
        super(), this.hours = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ql().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ql().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ql().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ql, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterMergedWithin|1 hours 5"];
      }
    }
    class jl extends Oi {
      constructor(e2) {
        super(), this.kind = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jl, e2, t2);
      }
      static $() {
        return ["SectionOfChangesFilterUnsupported|1 kind 9"];
      }
    }
    class Gl extends Oi {
      constructor(e2) {
        super(), this.verdict = Li.UNSPECIFIED, this.body = "", this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gl, e2, t2);
      }
      static $() {
        return ["StartReviewRequest|1 change #0|2 verdict #1|3 body 9|4 version_number 4", na, Li];
      }
    }
    class Hl extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hl, e2, t2);
      }
      static $() {
        return ["StartReviewResponse|1 review #0", Ta];
      }
    }
    class zl extends Oi {
      constructor(e2) {
        super(), this.reviewId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zl, e2, t2);
      }
      static $() {
        return ["SubmitReviewRequest|1 change #0|2 review_id 9|3 verdict #1?|4 body 9?", na, Li];
      }
    }
    class Wl extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wl, e2, t2);
      }
      static $() {
        return ["SubmitReviewResponse|1 review #0", Ta];
      }
    }
    class Vl extends Oi {
      constructor(e2) {
        super(), this.reviewId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vl, e2, t2);
      }
      static $() {
        return ["DiscardPendingReviewRequest|1 change #0|2 review_id 9", na];
      }
    }
    class Kl extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kl, e2, t2);
      }
      static $() {
        return ["DiscardPendingReviewResponse"];
      }
    }
    class Yl extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yl, e2, t2);
      }
      static $() {
        return ["GetPendingReviewRequest|1 change #0", na];
      }
    }
    class Zl extends Oi {
      constructor(e2) {
        super(), this.threadCount = 0, this.hasPendingComments = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zl, e2, t2);
      }
      static $() {
        return ["GetPendingReviewResponse|1 review #0?|2 thread_count 13|3 has_pending_comments 8", Ta];
      }
    }
    class Xl extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xl().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xl().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xl().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xl, e2, t2);
      }
      static $() {
        return ["CheckChangeCreationAccessRequest|1 identifier #0", i];
      }
    }
    class eu extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new eu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new eu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new eu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(eu, e2, t2);
      }
      static $() {
        return ["CheckChangeCreationAccessResponse"];
      }
    }
    class tu extends Oi {
      constructor(e2) {
        super(), this.gate = "", this.headSha = "", this.verdict = "", this.summary = "", this.findings = [], this.gateFields = {}, this.links = [], this.rubricPath = "", this.lane = "", this.model = "", this.agent = "", this.transcriptUrl = "", this.transcriptId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tu, e2, t2);
      }
      static $() {
        return ["SubmitPullRequestGateReportRequest|1 change #0|2 gate 9|3 head_sha 9|4 verdict 9|5 summary 9|6 findings #1*|7 gate_fields 9,9|8 links #2*|9 rubric_path 9|10 lane 9|11 model 9|12 agent 9|13 transcript_url 9|14 transcript_id 9", na, ou, iu];
      }
    }
    class ru extends Oi {
      constructor(e2) {
        super(), this.headSha = "", this.mediaType = "", this.bodyGzip = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ru().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ru().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ru().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ru, e2, t2);
      }
      static $() {
        return ["UploadPullRequestGateTranscriptRequest|1 change #0|2 head_sha 9|3 media_type 9|4 body_gzip 12", na];
      }
    }
    class nu extends Oi {
      constructor(e2) {
        super(), this.outcome = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nu, e2, t2);
      }
      static $() {
        return ["UploadPullRequestGateTranscriptResponse|1 uploaded #0 outcome|2 refused #1 outcome", su, cu];
      }
    }
    class su extends Oi {
      constructor(e2) {
        super(), this.id = "", this.sha256 = "", this.byteSize = n.protoInt64.zero, this.mediaType = "", this.purged = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new su().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new su().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new su().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(su, e2, t2);
      }
      static $() {
        return ["PullRequestGateTranscript|1 id 9|2 sha256 9|3 byte_size 4|4 media_type 9|5 purged 8"];
      }
    }
    class ou extends Oi {
      constructor(e2) {
        super(), this.id = "", this.severity = "", this.status = "", this.title = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ou().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ou().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ou().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ou, e2, t2);
      }
      static $() {
        return ["PullRequestGateReportFinding|1 id 9|2 severity 9|3 status 9|4 title 9|5 path 9?|6 line 13?"];
      }
    }
    class iu extends Oi {
      constructor(e2) {
        super(), this.label = "", this.url = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new iu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new iu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new iu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(iu, e2, t2);
      }
      static $() {
        return ["PullRequestGateReportLink|1 label 9|2 url 9"];
      }
    }
    class au extends Oi {
      constructor(e2) {
        super(), this.outcome = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new au().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new au().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new au().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(au, e2, t2);
      }
      static $() {
        return ["SubmitPullRequestGateReportResponse|1 submitted #0 outcome|2 refused #1 outcome", lu, cu];
      }
    }
    class cu extends Oi {
      constructor(e2) {
        super(), this.reason = "", this.message = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cu, e2, t2);
      }
      static $() {
        return ["PullRequestGateReportRefusal|1 reason 9|2 message 9"];
      }
    }
    class lu extends Oi {
      constructor(e2) {
        super(), this.id = "", this.gate = "", this.verdict = "", this.headSha = "", this.baseSha = "", this.client = "", this.summary = "", this.findings = [], this.proof = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lu, e2, t2);
      }
      static $() {
        return ["PullRequestGateReport|1 id 9|2 gate 9|3 verdict 9|4 head_sha 9|5 base_sha 9|6 client 9|7 lane 9?|8 model 9?|9 agent 9?|10 run_id 9?|11 transcript_url 9?|12 summary 9|13 findings #0*|14 created_at #1|15 transcript #2?|16 proof 9|17 audit #3?", ou, n.Timestamp, su, uu];
      }
    }
    class uu extends Oi {
      constructor(e2) {
        super(), this.status = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new uu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new uu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new uu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(uu, e2, t2);
      }
      static $() {
        return ["PullRequestGateReportAudit|1 status 9|2 reason 9?|3 completed_at #0?", n.Timestamp];
      }
    }
    class du extends Oi {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new du().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new du().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new du().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(du, e2, t2);
      }
      static $() {
        return ["ListPullRequestGateReportsRequest|1 change #0|2 head_sha 9?", na];
      }
    }
    class pu extends Oi {
      constructor(e2) {
        super(), this.headSha = "", this.requiredGates = [], this.reports = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pu, e2, t2);
      }
      static $() {
        return ["ListPullRequestGateReportsResponse|1 head_sha 9|2 required_gates 9*|3 gates_file_unavailable_reason 9?|4 reports #0*", lu];
      }
    }
    const mu = "origin.v1.";
    class hu extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return mu;
      }
    }
    var fu = (0, s.QT)(n.proto3, mu, "ImportedGithubPullRequestState", [[0, "UNSPECIFIED"], [1, "OPEN"], [2, "CLOSED"], [3, "MERGED"]], 1), gu = (0, s.QT)(n.proto3, mu, "ImportedGithubReviewVerdict", [[0, "UNSPECIFIED"], [1, "APPROVE"], [2, "REQUEST_CHANGES"], [3, "COMMENT"]], 1), yu = (0, s.QT)(n.proto3, mu, "ImportedGithubCommentSide", [[0, "UNSPECIFIED"], [1, "LEFT"], [2, "RIGHT"]], 1);
    class wu extends hu {
      constructor(e2) {
        super(), this.allowDefaultActorFallback = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wu, e2, t2);
      }
      static $() {
        return ["ImportGithubPullRequestRequest|1 identifier #0|2 pull_request #1|3 allow_default_actor_fallback 8", i, _u];
      }
    }
    class vu extends hu {
      constructor(e2) {
        super(), this.changeId = "", this.number = 0, this.versionsCreated = 0, this.reviewsCreated = 0, this.threadsCreated = 0, this.commentsCreated = 0, this.timelineEventsCreated = 0, this.warnings = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vu, e2, t2);
      }
      static $() {
        return ["ImportGithubPullRequestResponse|1 change_id 9|2 number 5|3 versions_created 5|4 reviews_created 5|5 threads_created 5|6 comments_created 5|7 timeline_events_created 5|8 warnings 9*"];
      }
    }
    class _u extends hu {
      constructor(e2) {
        super(), this.number = 0, this.githubNodeId = "", this.title = "", this.description = "", this.state = fu.UNSPECIFIED, this.draft = false, this.authorLogin = "", this.headRef = "", this.headSha = "", this.baseRef = "", this.baseSha = "", this.mergeCommitSha = "", this.mergedByLogin = "", this.reviews = [], this.reviewComments = [], this.issueComments = [], this.timelineEvents = [], this.actors = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_u, e2, t2);
      }
      static $() {
        return ["ImportedGithubPullRequest|1 number 5|2 github_node_id 9|3 title 9|4 description 9|5 state #0|6 draft 8|7 author_login 9|8 head_ref 9|9 head_sha 9|10 base_ref 9|11 base_sha 9|12 created_at #1|13 merged_at #1?|14 closed_at #1?|15 merge_commit_sha 9|16 merged_by_login 9|17 reviews #2*|18 review_comments #3*|19 issue_comments #4*|20 timeline_events #5*|21 actors #6*", fu, n.Timestamp, Su, bu, Eu, Iu, Au];
      }
    }
    class Au extends hu {
      constructor(e2) {
        super(), this.login = "", this.githubUserNodeId = "", this.githubUserDatabaseId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Au().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Au().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Au().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Au, e2, t2);
      }
      static $() {
        return ["ImportedGithubActor|1 login 9|2 github_user_node_id 9|3 github_user_database_id 3"];
      }
    }
    class Su extends hu {
      constructor(e2) {
        super(), this.githubNodeId = "", this.authorLogin = "", this.verdict = gu.UNSPECIFIED, this.body = "", this.commitSha = "", this.dismissedByLogin = "", this.dismissalMessage = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Su().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Su().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Su().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Su, e2, t2);
      }
      static $() {
        return ["ImportedGithubReview|1 github_node_id 9|2 author_login 9|3 verdict #0|4 body 9|5 commit_sha 9|6 submitted_at #1|7 dismissed_at #1?|8 dismissed_by_login 9|9 dismissal_message 9", gu, n.Timestamp];
      }
    }
    class bu extends hu {
      constructor(e2) {
        super(), this.githubNodeId = "", this.reviewGithubNodeId = "", this.inReplyToGithubNodeId = "", this.authorLogin = "", this.body = "", this.path = "", this.commitSha = "", this.side = yu.UNSPECIFIED, this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bu, e2, t2);
      }
      static $() {
        return ["ImportedGithubReviewComment|1 github_node_id 9|2 review_github_node_id 9|3 in_reply_to_github_node_id 9|4 author_login 9|5 body 9|6 path 9|7 commit_sha 9|8 side #0|9 start_line 5|10 end_line 5|11 created_at #1", yu, n.Timestamp];
      }
    }
    class Eu extends hu {
      constructor(e2) {
        super(), this.githubNodeId = "", this.authorLogin = "", this.body = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Eu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Eu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Eu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Eu, e2, t2);
      }
      static $() {
        return ["ImportedGithubIssueComment|1 github_node_id 9|2 author_login 9|3 body 9|4 created_at #0", n.Timestamp];
      }
    }
    class Iu extends hu {
      constructor(e2) {
        super(), this.githubEvent = "", this.actorLogin = "", this.label = "", this.subjectLogin = "", this.previousTitle = "", this.newTitle = "", this.previousSha = "", this.newSha = "", this.previousBaseRef = "", this.newBaseRef = "", this.dismissedReviewGithubNodeId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Iu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Iu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Iu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Iu, e2, t2);
      }
      static $() {
        return ["ImportedGithubTimelineEvent|1 github_event 9|2 actor_login 9|3 created_at #0|4 label 9|5 subject_login 9|6 previous_title 9|7 new_title 9|8 previous_sha 9|9 new_sha 9|10 previous_base_ref 9|11 new_base_ref 9|12 dismissed_review_github_node_id 9", n.Timestamp];
      }
    }
    const Cu = "origin.v1.";
    class ku extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return Cu;
      }
    }
    var xu = (0, s.QT)(n.proto3, Cu, "MergeConflictResolutionState", [[0, "UNSPECIFIED"], [1, "UNAVAILABLE"], [2, "GENERATING"], [3, "READY"], [4, "NOT_CONFIDENT"], [5, "APPLIED"]], 1), Tu = (0, s.QT)(n.proto3, Cu, "MergeConflictResolutionStaleCause", [[0, "UNSPECIFIED"], [1, "BASE_MOVED"], [2, "HEAD_MOVED"]], 1), Ru = (0, s.QT)(n.proto3, Cu, "MergeConflictResolutionHunkKind", [[0, "UNSPECIFIED"], [1, "OURS"], [2, "THEIRS"], [3, "BASE"], [4, "UNION"], [5, "UNION_REVERSED"], [6, "DROP"], [7, "MERGED_LINES"], [8, "MERGED_TOKENS"], [9, "COMBINATION"], [10, "FORMATTER_MERGE"], [11, "STRUCTURAL"], [12, "CONTENT_SIDE"], [13, "KEEP_EDIT"], [14, "KEEP_DELETION"]], 1), Bu = (0, s.QT)(n.proto3, Cu, "MergeConflictResolutionLineSource", [[0, "UNSPECIFIED"], [1, "CONTEXT"], [2, "OURS"], [3, "THEIRS"], [4, "BOTH"], [5, "RESOLVED"]], 1), Pu = (0, s.QT)(n.proto3, Cu, "MergeConflictResolutionStepState", [[0, "UNSPECIFIED"], [1, "CLEAN"], [2, "RESOLVED"], [3, "UNRESOLVED"]], 1);
    class Ju extends ku {
      constructor(e2) {
        super(), this.landingRef = "", this.landingSha = "", this.changes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ju().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ju().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ju().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ju, e2, t2);
      }
      static $() {
        return ["MergeConflictResolutionPin|1 landing_ref 9|2 landing_sha 9|3 changes #0*", Mu];
      }
    }
    class Mu extends ku {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, this.headSha = "", this.baseRef = "", this.recordedBaseSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mu, e2, t2);
      }
      static $() {
        return ["MergeConflictResolutionPinnedChange|1 change_number 4|2 head_sha 9|3 base_ref 9|4 recorded_base_sha 9"];
      }
    }
    class qu extends ku {
      constructor(e2) {
        super(), this.path = "", this.hunkCount = 0, this.resolutionDigest = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qu, e2, t2);
      }
      static $() {
        return ["MergeConflictResolutionFile|1 path 9|2 hunk_count 13|3 resolution_digest 9"];
      }
    }
    class Du extends ku {
      constructor(e2) {
        super(), this.text = "", this.source = Bu.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Du().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Du().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Du().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Du, e2, t2);
      }
      static $() {
        return ["MergeConflictResolutionPreviewLine|1 text 9|2 source #0", Bu];
      }
    }
    class Ou extends ku {
      constructor(e2) {
        super(), this.path = "", this.startLine = 0, this.endLine = 0, this.kind = Ru.UNSPECIFIED, this.needsPerson = false, this.lines = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ou().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ou().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ou().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ou, e2, t2);
      }
      static $() {
        return ["MergeConflictResolutionPreviewHunk|1 path 9|2 start_line 13|3 end_line 13|4 kind #0|5 needs_person 8|6 lines #1*", Ru, Du];
      }
    }
    class Nu extends ku {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, this.title = "", this.state = Pu.UNSPECIFIED, this.merged = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nu, e2, t2);
      }
      static $() {
        return ["MergeConflictResolutionStackStep|1 change_number 4|2 title 9|3 author #0|4 state #1|5 merged 8", qi, Pu];
      }
    }
    class Fu extends ku {
      constructor(e2) {
        super(), this.owningChangeNumber = n.protoInt64.zero, this.steps = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fu, e2, t2);
      }
      static $() {
        return ["MergeConflictResolutionStackPlan|1 owning_change_number 4|2 steps #0*", Nu];
      }
    }
    class Uu extends ku {
      constructor(e2) {
        super(), this.state = xu.UNSPECIFIED, this.resolutionId = "", this.fileCount = 0, this.hunkCount = 0, this.reasonCode = "", this.reason = "", this.staleCause = Tu.UNSPECIFIED, this.files = [], this.previewHunks = [], this.appliedCommitSha = "", this.undoAvailable = false, this.appliedByViewer = false, this.appliedOnChangeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Uu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Uu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Uu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Uu, e2, t2);
      }
      static $() {
        return ["MergeConflictResolution|1 state #0|2 resolution_id 9|3 pin #1|4 file_count 13|5 hunk_count 13|6 reason_code 9|7 reason 9|8 stale_cause #2|9 files #3*|10 preview_hunks #4*|11 stack_plan #5?|12 applied_commit_sha 9|13 undo_available 8|14 applied_by_viewer 8|15 applied_by #6|16 applied_on_change_number 4", xu, Ju, Tu, qu, Ou, Fu, qi];
      }
    }
    class Lu extends ku {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lu, e2, t2);
      }
      static $() {
        return ["GetMergeConflictResolutionRequest|1 change #0", na];
      }
    }
    class $u extends ku {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($u, e2, t2);
      }
      static $() {
        return ["GetMergeConflictResolutionResponse|1 resolution #0", Uu];
      }
    }
    class Qu extends ku {
      constructor(e2) {
        super(), this.resolutionId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qu, e2, t2);
      }
      static $() {
        return ["ApplyMergeConflictResolutionRequest|1 change #0|2 resolution_id 9|3 expected #1", na, Ju];
      }
    }
    class ju extends ku {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ju().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ju().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ju().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ju, e2, t2);
      }
      static $() {
        return ["ApplyMergeConflictResolutionResponse|1 resolution #0", Uu];
      }
    }
    class Gu extends ku {
      constructor(e2) {
        super(), this.resolutionId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gu, e2, t2);
      }
      static $() {
        return ["UndoMergeConflictResolutionRequest|1 change #0|2 resolution_id 9", na];
      }
    }
    class Hu extends ku {
      constructor(e2) {
        super(), this.restoredHeadSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hu, e2, t2);
      }
      static $() {
        return ["UndoMergeConflictResolutionResponse|1 resolution #0|2 restored_head_sha 9", Uu];
      }
    }
    const zu = "origin.v1.";
    class Wu extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return zu;
      }
    }
    var Vu = (0, s.QT)(n.proto3, zu, "CommentSide", [[0, "UNSPECIFIED"], [1, "LEFT"], [2, "RIGHT"]], 1), Ku = (0, s.QT)(n.proto3, zu, "CommentThreadPortingStatus", [[0, "UNSPECIFIED"], [1, "PORTED"], [2, "ORPHANED"]], 1);
    class Yu extends Wu {
      constructor(e2) {
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n.protoInt64.zero, this.reviewId = "", this.path = "", this.side = Vu.UNSPECIFIED, this.startLine = 0, this.endLine = 0, this.externalId = "", this.comments = [], this.portedToVersionNumber = n.protoInt64.zero, this.portingStatus = Ku.UNSPECIFIED, this.portedPath = "", this.portedStartLine = 0, this.portedEndLine = 0, this.versionHeadSha = "", this.versionBaseSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yu, e2, t2);
      }
      static $() {
        return ["CommentThread|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|5 review_id 9|6 resolved_at #0|8 path 9|9 side #1|10 start_line 13|11 end_line 13|12 external_id 9|13 created_at #0|14 updated_at #0|15 comments #2*|19 resolved_by #3|20 ported_to_version_number 4|21 porting_status #4|22 ported_path 9|23 ported_start_line 13|24 ported_end_line 13|25 version_head_sha 9|26 version_base_sha 9|27 version_created_at #0", n.Timestamp, Vu, Ja, qi, Ku];
      }
    }
    class Zu extends Wu {
      constructor(e2) {
        super(), this.body = "", this.versionNumber = n.protoInt64.zero, this.path = "", this.side = Vu.UNSPECIFIED, this.startLine = 0, this.endLine = 0, this.reviewId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zu, e2, t2);
      }
      static $() {
        return ["CreateCommentThreadRequest|1 change #0|2 body 9|3 version_number 4|4 path 9|5 side #1|6 start_line 13|7 end_line 13|8 review_id 9", na, Vu];
      }
    }
    class Xu extends Wu {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xu().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xu().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xu().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xu, e2, t2);
      }
      static $() {
        return ["CreateCommentThreadResponse|1 thread #0", Yu];
      }
    }
    class ed extends Wu {
      constructor(e2) {
        super(), this.versionNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ed().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ed().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ed().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ed, e2, t2);
      }
      static $() {
        return ["ListCommentThreadsRequest|1 change #0|2 version_number 4", na];
      }
    }
    class td extends Wu {
      constructor(e2) {
        super(), this.threads = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new td().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new td().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new td().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(td, e2, t2);
      }
      static $() {
        return ["ListCommentThreadsResponse|1 threads #0*", Yu];
      }
    }
    class rd extends Wu {
      constructor(e2) {
        super(), this.threadId = "", this.body = "", this.reviewId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rd, e2, t2);
      }
      static $() {
        return ["AddCommentToThreadRequest|1 change #0|2 thread_id 9|3 body 9|4 review_id 9", na];
      }
    }
    class nd extends Wu {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nd, e2, t2);
      }
      static $() {
        return ["AddCommentToThreadResponse|1 comment #0", Ja];
      }
    }
    class sd extends Wu {
      constructor(e2) {
        super(), this.threadId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sd, e2, t2);
      }
      static $() {
        return ["ResolveCommentThreadRequest|1 change #0|2 thread_id 9", na];
      }
    }
    class od extends Wu {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new od().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new od().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new od().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(od, e2, t2);
      }
      static $() {
        return ["ResolveCommentThreadResponse|1 thread #0", Yu];
      }
    }
    class id extends Wu {
      constructor(e2) {
        super(), this.threadId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new id().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new id().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new id().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(id, e2, t2);
      }
      static $() {
        return ["ReopenCommentThreadRequest|1 change #0|2 thread_id 9", na];
      }
    }
    class ad extends Wu {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ad().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ad().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ad().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ad, e2, t2);
      }
      static $() {
        return ["ReopenCommentThreadResponse|1 thread #0", Yu];
      }
    }
    class cd extends Wu {
      constructor(e2) {
        super(), this.commentId = "", this.body = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cd, e2, t2);
      }
      static $() {
        return ["UpdateCommentRequest|1 comment_id 9|2 body 9"];
      }
    }
    class ld extends Wu {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ld().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ld().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ld().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ld, e2, t2);
      }
      static $() {
        return ["UpdateCommentResponse|1 comment #0", Ja];
      }
    }
    class ud extends Wu {
      constructor(e2) {
        super(), this.commentId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ud().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ud().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ud().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ud, e2, t2);
      }
      static $() {
        return ["DeleteCommentRequest|1 comment_id 9"];
      }
    }
    class dd extends Wu {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dd, e2, t2);
      }
      static $() {
        return ["DeleteCommentResponse"];
      }
    }
    class pd extends Wu {
      constructor(e2) {
        super(), this.commentId = "", this.emoji = "", this.active = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pd, e2, t2);
      }
      static $() {
        return ["SetCommentReactionRequest|1 comment_id 9|2 emoji 9|3 active 8"];
      }
    }
    class md extends Wu {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new md().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new md().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new md().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(md, e2, t2);
      }
      static $() {
        return ["SetCommentReactionResponse"];
      }
    }
    class hd extends Wu {
      constructor(e2) {
        super(), this.commentId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hd, e2, t2);
      }
      static $() {
        return ["ListCommentReactionsRequest|1 comment_id 9"];
      }
    }
    class fd extends Wu {
      constructor(e2) {
        super(), this.reactions = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fd, e2, t2);
      }
      static $() {
        return ["ListCommentReactionsResponse|1 reactions #0*", qa];
      }
    }
    class gd extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class yd extends gd {
      constructor(e2) {
        super(), this.filePath = "", this.versionId = "", this.headCommitSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yd, e2, t2);
      }
      static $() {
        return ["MarkFileAsViewedRequest|1 change #0|2 file_path 9|3 version_id 9|4 head_commit_sha 9", na];
      }
    }
    class wd extends gd {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wd, e2, t2);
      }
      static $() {
        return ["MarkFileAsViewedResponse"];
      }
    }
    class vd extends gd {
      constructor(e2) {
        super(), this.filePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vd, e2, t2);
      }
      static $() {
        return ["UnmarkFileAsViewedRequest|1 change #0|2 file_path 9", na];
      }
    }
    class _d extends gd {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _d().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _d().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _d().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_d, e2, t2);
      }
      static $() {
        return ["UnmarkFileAsViewedResponse"];
      }
    }
    class Ad extends gd {
      constructor(e2) {
        super(), this.directoryPath = "", this.filePaths = [], this.versionId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ad().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ad().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ad().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ad, e2, t2);
      }
      static $() {
        return ["MarkDirectoryAsViewedRequest|1 change #0|2 directory_path 9|3 file_paths 9*|4 version_id 9", na];
      }
    }
    class Sd extends gd {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sd, e2, t2);
      }
      static $() {
        return ["MarkDirectoryAsViewedResponse"];
      }
    }
    class bd extends gd {
      constructor(e2) {
        super(), this.filePaths = [], this.versionId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bd, e2, t2);
      }
      static $() {
        return ["MarkAllFilesAsViewedRequest|1 change #0|2 file_paths 9*|3 version_id 9", na];
      }
    }
    class Ed extends gd {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ed().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ed().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ed().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ed, e2, t2);
      }
      static $() {
        return ["MarkAllFilesAsViewedResponse"];
      }
    }
    class Id extends gd {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Id().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Id().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Id().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Id, e2, t2);
      }
      static $() {
        return ["UnmarkAllFilesAsViewedRequest|1 change #0", na];
      }
    }
    class Cd extends gd {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cd, e2, t2);
      }
      static $() {
        return ["UnmarkAllFilesAsViewedResponse"];
      }
    }
    class kd extends gd {
      constructor(e2) {
        super(), this.headCommitSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kd, e2, t2);
      }
      static $() {
        return ["ListFileViewedStatesRequest|1 change #0|2 head_commit_sha 9", na];
      }
    }
    class xd extends gd {
      constructor(e2) {
        super(), this.fileViewedStates = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xd, e2, t2);
      }
      static $() {
        return ["ListFileViewedStatesResponse|1 file_viewed_states #0*|2 head_version_id 9?", Td];
      }
    }
    class Td extends gd {
      constructor(e2) {
        super(), this.filePath = "", this.versionId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Td().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Td().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Td().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Td, e2, t2);
      }
      static $() {
        return ["FileViewedState|1 file_path 9|2 version_id 9|3 stale 8?"];
      }
    }
    const Rd = "origin.v1.";
    class Bd extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return Rd;
      }
    }
    var Pd = (0, s.QT)(n.proto3, Rd, "PullRequestViewedCursor", [[0, "UNSPECIFIED"], [1, "OPENED"], [2, "TIMELINE"]], 1);
    class Jd extends Bd {
      constructor(e2) {
        super(), this.cursor = Pd.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jd, e2, t2);
      }
      static $() {
        return ["MarkPullRequestAsViewedRequest|1 change #0|2 viewed_at #1|3 cursor #2", na, n.Timestamp, Pd];
      }
    }
    class Md extends Bd {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Md().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Md().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Md().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Md, e2, t2);
      }
      static $() {
        return ["MarkPullRequestAsViewedResponse|1 viewed_at #0|2 timeline_viewed_at #0?", n.Timestamp];
      }
    }
    class qd extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Dd extends qd {
      constructor(e2) {
        super(), this.prUrl = "", this.headSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dd, e2, t2);
      }
      static $() {
        return ["GeneratedCodeTourStackMember|1 pr_url 9|2 head_sha 9"];
      }
    }
    class Od extends qd {
      constructor(e2) {
        super(), this.id = "", this.storageKey = "", this.result = "", this.machineGenerated = false, this.updatedAtMs = n.protoInt64.zero, this.stackId = "", this.stackMembers = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Od().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Od().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Od().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Od, e2, t2);
      }
      static $() {
        return ["GeneratedCodeTour|1 id 9|2 storage_key 9|3 result 9|4 agentic_markdown 9?|5 agentic_error_message 9?|6 format_version 13?|7 prompt_revision 13?|8 machine_generated 8|9 updated_at_ms 3|10 stack_id 9|11 stack_members #0*", Dd];
      }
    }
    class Nd extends qd {
      constructor(e2) {
        super(), this.storageKey = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nd, e2, t2);
      }
      static $() {
        return ["GetGeneratedCodeTourRequest|1 change #0|2 storage_key 9", na];
      }
    }
    class Fd extends qd {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fd, e2, t2);
      }
      static $() {
        return ["GetGeneratedCodeTourResponse|1 tour #0?", Od];
      }
    }
    class Ud extends qd {
      constructor(e2) {
        super(), this.storageKey = "", this.headSha = "", this.result = "", this.featureConfigurationJson = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ud().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ud().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ud().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ud, e2, t2);
      }
      static $() {
        return ["UpsertGeneratedCodeTourRequest|1 change #0|2 storage_key 9|3 head_sha 9|4 result 9|5 agentic_markdown 9?|6 agentic_error_message 9?|7 feature_configuration_json 9|8 expected_agentic_markdown_sha256 9?", na];
      }
    }
    class Ld extends qd {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ld().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ld().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ld().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ld, e2, t2);
      }
      static $() {
        return ["UpsertGeneratedCodeTourResponse|1 tour #0", Od];
      }
    }
    class $d extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Qd extends $d {
      constructor(e2) {
        super(), this.id = "", this.changeId = "", this.repoUuid = "", this.changeNumber = n.protoInt64.zero, this.status = "", this.source = "", this.trunkBranch = "", this.consecutiveFailedAttempts = 0, this.dev = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qd, e2, t2);
      }
      static $() {
        return ["ChangeMergeWhenReady|1 id 9|2 change_id 9|3 repo_uuid 9|4 change_number 4|6 status 9|7 source 9|8 trunk_branch 9|9 lock_expires_at #0?|10 consecutive_failed_attempts 5|11 dev 8|12 repo_org 9?|13 repo_name 9?|14 enabled_by #1", n.Timestamp, qi];
      }
    }
    class jd extends $d {
      constructor(e2) {
        super(), this.trunkBranch = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jd, e2, t2);
      }
      static $() {
        return ["EnableChangeMergeWhenReadyRequest|1 change #0|2 trunk_branch 9|3 source 9?|4 dev 8?", na];
      }
    }
    class Gd extends $d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gd, e2, t2);
      }
      static $() {
        return ["EnableChangeMergeWhenReadyResponse|1 record #0", Qd];
      }
    }
    class Hd extends $d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hd, e2, t2);
      }
      static $() {
        return ["GetChangeMergeWhenReadyRequest|1 change #0|2 status 9?", na];
      }
    }
    class zd extends $d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zd, e2, t2);
      }
      static $() {
        return ["GetChangeMergeWhenReadyResponse|1 record #0?", Qd];
      }
    }
    class Wd extends $d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wd, e2, t2);
      }
      static $() {
        return ["DisableChangeMergeWhenReadyRequest|1 change #0", na];
      }
    }
    class Vd extends $d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vd().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vd().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vd().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vd, e2, t2);
      }
      static $() {
        return ["DisableChangeMergeWhenReadyResponse"];
      }
    }
    const Kd = "origin.v1.";
    var Yd = (0, s.QT)(n.proto3, Kd, "CheckRunLifecycleStatus", [[0, "CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED"], [1, "queued"], [2, "in_progress"], [3, "completed"], [4, "rerequested"], [5, "failing"]]), Zd = (0, s.QT)(n.proto3, Kd, "CheckRunConclusion", [[0, "CHECK_RUN_CONCLUSION_UNSPECIFIED"], [1, "success"], [2, "failure"], [3, "neutral"], [4, "cancelled"], [5, "skipped"], [6, "timed_out"], [7, "action_required"], [8, "stale"]]);
    const Xd = "origin.v1.";
    class ep extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return Xd;
      }
    }
    var tp = (0, s.QT)(n.proto3, Xd, "CommitCheckRollupState", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "SUCCESS"], [3, "PENDING"], [4, "FAILURE"]], 1), rp = (0, s.QT)(n.proto3, Xd, "CheckRunAnnotationLevel", [[0, "UNSPECIFIED"], [1, "NOTICE"], [2, "WARNING"], [3, "FAILURE"]], 1), np = (0, s.QT)(n.proto3, Xd, "MergeabilityScope", [[0, "UNSPECIFIED"], [1, "STACK"], [2, "SINGLE_CHANGE"]], 1), sp = (0, s.QT)(n.proto3, Xd, "RestackStackMemberOutcome", [[0, "UNSPECIFIED"], [1, "OK"], [2, "ALREADY_CURRENT"], [3, "CONFLICT"], [4, "SKIPPED"]], 1);
    class op extends ep {
      constructor(e2) {
        super(), this.sha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new op().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new op().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new op().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(op, e2, t2);
      }
      static $() {
        return ["GetCiStateRequest|1 identifier #0|2 sha 9|3 change_number 4?|4 version_number 4?|5 use_latest_version 8?|6 include_check_run_annotations 8?", i];
      }
    }
    class ip extends ep {
      constructor(e2) {
        super(), this.checkRunGroups = [], this.missingRequiredChecks = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ip().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ip().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ip().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ip, e2, t2);
      }
      static $() {
        return ["GetCiStateResponse|1 check_run_groups #0*|2 missing_required_checks #1*|3 resolved_head_sha 9?", Ap, gp];
      }
    }
    class ap extends ep {
      constructor(e2) {
        super(), this.shas = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ap().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ap().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ap().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ap, e2, t2);
      }
      static $() {
        return ["BatchGetCommitCheckRollupsRequest|1 identifier #0|2 shas 9*", i];
      }
    }
    class cp extends ep {
      constructor(e2) {
        super(), this.sha = "", this.state = tp.UNSPECIFIED, this.successCount = 0, this.pendingCount = 0, this.failureCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cp, e2, t2);
      }
      static $() {
        return ["CommitCheckRollup|1 sha 9|2 state #0|3 success_count 13|4 pending_count 13|5 failure_count 13", tp];
      }
    }
    class lp extends ep {
      constructor(e2) {
        super(), this.rollups = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lp, e2, t2);
      }
      static $() {
        return ["BatchGetCommitCheckRollupsResponse|1 rollups #0*", cp];
      }
    }
    class up extends ep {
      constructor(e2) {
        super(), this.checkRunId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new up().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new up().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new up().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(up, e2, t2);
      }
      static $() {
        return ["GetCheckRunRequest|1 identifier #0|2 check_run_id 9", i];
      }
    }
    class dp extends ep {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dp, e2, t2);
      }
      static $() {
        return ["GetCheckRunResponse|1 check_run #0", vp];
      }
    }
    class pp extends ep {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pp, e2, t2);
      }
      static $() {
        return ["ListRepoCheckSourcesRequest|1 identifier #0", i];
      }
    }
    class mp extends ep {
      constructor(e2) {
        super(), this.runKey = "", this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mp, e2, t2);
      }
      static $() {
        return ["RepoCheckSourceRun|1 run_key 9|2 name 9"];
      }
    }
    class hp extends ep {
      constructor(e2) {
        super(), this.groupKey = "", this.suiteName = "", this.runs = [], this.lastSeenAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hp, e2, t2);
      }
      static $() {
        return ["RepoCheckSource|1 actor #0|2 group_key 9|3 suite_name 9|4 runs #1*|5 last_seen_at_unix_ms 3", yp, mp];
      }
    }
    class fp extends ep {
      constructor(e2) {
        super(), this.sources = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fp, e2, t2);
      }
      static $() {
        return ["ListRepoCheckSourcesResponse|1 sources #0*", hp];
      }
    }
    class gp extends ep {
      constructor(e2) {
        super(), this.displayName = "", this.identityPath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gp, e2, t2);
      }
      static $() {
        return ["MissingRequiredCheck|1 display_name 9|2 identity_path 9"];
      }
    }
    class yp extends ep {
      constructor(e2) {
        super(), this.kind = "", this.id = "", this.displayName = "", this.iconUrl = "", this.appId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yp, e2, t2);
      }
      static $() {
        return ["CheckRunActor|1 kind 9|2 id 9|3 display_name 9|5 icon_url 9|6 app_id 9"];
      }
    }
    class wp extends ep {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wp, e2, t2);
      }
      static $() {
        return ["CheckRunOutput|1 title 9?|2 summary 9?|3 text 9?"];
      }
    }
    class vp extends ep {
      constructor(e2) {
        super(), this.id = "", this.name = "", this.status = Yd.CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED, this.externalId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vp, e2, t2);
      }
      static $() {
        return ["CheckRunStatus|1 id 9|2 name 9|4 details_url 9?|5 status #0|6 conclusion #1?|7 started_at_unix_ms 3?|8 completed_at_unix_ms 3?|9 external_id 9|10 required 8?|11 output #2?|12 deadline_at_unix_ms 3?|13 is_rerequestable 8?|14 rerequested_at_unix_ms 3?|15 annotations #3?|16 base_sha 9?", Yd, Zd, wp, _p];
      }
    }
    class _p extends ep {
      constructor(e2) {
        super(), this.annotations = [], this.truncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _p().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _p().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _p().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_p, e2, t2);
      }
      static $() {
        return ["CheckRunAnnotationBatch|1 annotations #0*|2 truncated 8", Rp];
      }
    }
    class Ap extends ep {
      constructor(e2) {
        super(), this.id = "", this.name = "", this.checkRuns = [], this.externalId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ap().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ap().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ap().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ap, e2, t2);
      }
      static $() {
        return ["CheckRunGroup|1 id 9|2 name 9|4 details_url 9?|5 check_runs #0*|6 actor #1|7 external_id 9|8 base_sha 9?", vp, yp];
      }
    }
    class Sp extends ep {
      constructor(e2) {
        super(), this.checkRunGroups = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sp, e2, t2);
      }
      static $() {
        return ["CiState|1 check_run_groups #0*", Ap];
      }
    }
    class bp extends ep {
      constructor(e2) {
        super(), this.headSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bp, e2, t2);
      }
      static $() {
        return ["PostCheckRunRequest|1 identifier #0|2 head_sha 9|3 group #1|4 check #2", i, Ep, Ip];
      }
    }
    class Ep extends ep {
      constructor(e2) {
        super(), this.key = "", this.name = "", this.externalId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ep().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ep().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ep().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ep, e2, t2);
      }
      static $() {
        return ["CheckRunGroupInput|1 key 9|2 name 9|3 external_id 9|4 details_url 9?"];
      }
    }
    class Ip extends ep {
      constructor(e2) {
        super(), this.key = "", this.name = "", this.externalId = "", this.status = Yd.CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED, this.externalUpdatedAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ip().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ip().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ip().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ip, e2, t2);
      }
      static $() {
        return ["CheckRunInput|1 key 9|2 name 9|3 external_id 9|4 status #0|5 conclusion #1?|6 external_updated_at_unix_ms 3|7 started_at_unix_ms 3?|8 completed_at_unix_ms 3?|10 details_url 9?|11 output #2?|12 deadline_at_unix_ms 3?|13 is_rerequestable 8?", Yd, Zd, wp];
      }
    }
    class Cp extends ep {
      constructor(e2) {
        super(), this.repoId = "", this.sha = "", this.checkRunGroupId = "", this.checkRunId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cp, e2, t2);
      }
      static $() {
        return ["PostCheckRunResponse|1 repo_id 9|2 sha 9|3 check_run_group_id 9|4 check_run_id 9"];
      }
    }
    class kp extends ep {
      constructor(e2) {
        super(), this.startColumn = 0, this.endColumn = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kp, e2, t2);
      }
      static $() {
        return ["CheckRunAnnotationColumnRange|1 start_column 5|2 end_column 5"];
      }
    }
    class xp extends ep {
      constructor(e2) {
        super(), this.path = "", this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xp, e2, t2);
      }
      static $() {
        return ["CheckRunAnnotationLocation|1 path 9|2 start_line 5|3 end_line 5|4 columns #0", kp];
      }
    }
    class Tp extends ep {
      constructor(e2) {
        super(), this.annotationLevel = rp.UNSPECIFIED, this.message = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tp, e2, t2);
      }
      static $() {
        return ["CheckRunAnnotationInput|4 annotation_level #0|5 message 9|8 title 9?|9 raw_details 9?|11 location #1", rp, xp];
      }
    }
    class Rp extends ep {
      constructor(e2) {
        super(), this.id = "", this.checkRunId = "", this.annotationLevel = rp.UNSPECIFIED, this.message = "", this.createdAtUnixMs = n.protoInt64.zero, this.updatedAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rp, e2, t2);
      }
      static $() {
        return ["CheckRunAnnotation|1 id 9|2 check_run_id 9|3 annotation_level #0|4 message 9|5 title 9?|6 raw_details 9?|7 created_at_unix_ms 3|8 updated_at_unix_ms 3|9 location #1", rp, xp];
      }
    }
    class Bp extends ep {
      constructor(e2) {
        super(), this.checkRunId = "", this.annotations = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bp, e2, t2);
      }
      static $() {
        return ["CreateCheckRunAnnotationsRequest|1 identifier #0|2 check_run_id 9|3 annotations #1*", i, Tp];
      }
    }
    class Pp extends ep {
      constructor(e2) {
        super(), this.annotations = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pp, e2, t2);
      }
      static $() {
        return ["CreateCheckRunAnnotationsResponse|1 annotations #0*", Rp];
      }
    }
    class Jp extends ep {
      constructor(e2) {
        super(), this.checkRunId = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jp, e2, t2);
      }
      static $() {
        return ["ListCheckRunAnnotationsRequest|1 identifier #0|2 check_run_id 9|3 page_size 5|4 page_token 9", i];
      }
    }
    class Mp extends ep {
      constructor(e2) {
        super(), this.annotations = [], this.nextPageToken = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mp, e2, t2);
      }
      static $() {
        return ["ListCheckRunAnnotationsResponse|1 annotations #0*|2 next_page_token 9", Rp];
      }
    }
    class qp extends ep {
      constructor(e2) {
        super(), this.checkRunId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qp, e2, t2);
      }
      static $() {
        return ["RerequestCheckRunRequest|1 change #0|2 check_run_id 9", na];
      }
    }
    class Dp extends ep {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dp, e2, t2);
      }
      static $() {
        return ["RerequestCheckRunResponse|1 check_run #0", vp];
      }
    }
    class Op extends ep {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, this.scope = np.UNSPECIFIED, this.previewRestackConflict = false, this.includeDefaultMergeMode = false, this.includeSummary = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Op().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Op().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Op().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Op, e2, t2);
      }
      static $() {
        return ["GetChangesetMergeabilityRequest|1 identifier #0|2 change_number 4|3 expected_head_sha 9?|4 scope #1|5 preview_restack_conflict 8|6 include_default_merge_mode 8|7 include_head_ref_exists 8?|8 include_summary 8", i, np];
      }
    }
    class Np extends ep {
      constructor(e2) {
        super(), this.mergeable = false, this.ciPassing = false, this.meetsApprovalRequirements = false, this.hasMergeConflicts = false, this.conflictedPaths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Np().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Np().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Np().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Np, e2, t2);
      }
      static $() {
        return ["GetChangesetMergeabilityResponse|1 mergeable 8|2 ci_passing 8|3 ci_state #0|4 meets_approval_requirements 8|5 has_merge_conflicts 8|6 mergeability #1|7 stack_mergeability #2?|8 conflicted_paths 9*|9 review_decision 9?|10 evaluated_head_sha 9?|11 evaluated_base_tip_sha 9?|12 default_merge_mode #3?|13 head_ref_exists 8?|15 target_rules_unread 8?|16 summary #4?", Sp, Lp, Kp, Ln, Fp];
      }
    }
    class Fp extends ep {
      constructor(e2) {
        super(), this.verdict = "", this.blockers = [], this.evaluatedChangeNumbers = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fp, e2, t2);
      }
      static $() {
        return ["ChangesetMergeabilitySummary|1 verdict 9|2 blockers #0*|3 evaluated_change_numbers 4*", Up];
      }
    }
    class Up extends ep {
      constructor(e2) {
        super(), this.kind = "", this.message = "", this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Up().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Up().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Up().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Up, e2, t2);
      }
      static $() {
        return ["ChangesetMergeabilitySummaryBlocker|1 kind 9|2 message 9|3 change_number 4|4 required_checks_state 9?|5 required_approval_count 13?|6 approved_count 13?|7 conflict_inherited_from_downstack 8?|8 invalid_stack_reason 9?"];
      }
    }
    class Lp extends ep {
      constructor(e2) {
        super(), this.verdict = "", this.evaluations = [], this.blockers = [], this.configurationDiagnostics = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lp, e2, t2);
      }
      static $() {
        return ["ChangesetMergeability|1 verdict 9|2 evaluations #0*|3 blockers #1*|4 configuration_diagnostics #2*", $p, Wp, Vp];
      }
    }
    class $p extends ep {
      constructor(e2) {
        super(), this.ruleType = "", this.rulesetId = "", this.rulesetName = "", this.ruleId = "", this.enforcement = "", this.result = "", this.message = "", this.category = "", this.violations = [], this.gatesWaivedChecks = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $p().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $p().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $p().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($p, e2, t2);
      }
      static $() {
        return ["ChangesetRuleEvaluation|1 rule_type 9|2 ruleset_id 9|3 ruleset_name 9|4 rule_id 9|5 enforcement 9|6 result 9|7 message 9|8 category 9|9 violations #0*|10 satisfied_by #1?|11 gates_waived_checks #2*", Hp, jp, Qp];
      }
    }
    class Qp extends ep {
      constructor(e2) {
        super(), this.name = "", this.checkRunIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qp, e2, t2);
      }
      static $() {
        return ["ChangesetGatesWaivedCheck|1 name 9|2 check_run_ids 9*"];
      }
    }
    class jp extends ep {
      constructor(e2) {
        super(), this.kind = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jp, e2, t2);
      }
      static $() {
        return ["ChangesetReviewSatisfaction|1 kind 9|2 gates #0?", Gp];
      }
    }
    class Gp extends ep {
      constructor(e2) {
        super(), this.headSha = "", this.landingBaseSha = "", this.gatesFileBlobOid = "", this.approved = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gp, e2, t2);
      }
      static $() {
        return ["ChangesetGatesResult|1 head_sha 9|2 landing_base_sha 9|3 gates_file_blob_oid 9|4 approved #0*|5 trunk_tip_gates_file_blob_oid 9?", Ba];
      }
    }
    class Hp extends ep {
      constructor(e2) {
        super(), this.ruleType = "", this.detail = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hp, e2, t2);
      }
      static $() {
        return ["ChangesetRuleViolation|1 rule_type 9|2 detail 9|3 remediation 9?|4 actionable_signal #0?", zp];
      }
    }
    class zp extends ep {
      constructor(e2) {
        super(), this.kind = "", this.checkNames = [], this.ownerLabels = [], this.paths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zp, e2, t2);
      }
      static $() {
        return ["ChangesetRuleActionableSignal|1 kind 9|2 check_names 9*|3 required_count 5?|4 actual_count 5?|5 owner_labels 9*|6 paths 9*"];
      }
    }
    class Wp extends ep {
      constructor(e2) {
        super(), this.kind = "", this.mergedChangeNumbers = [], this.openChangeNumbers = [], this.conflictedPaths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wp, e2, t2);
      }
      static $() {
        return ["ChangesetMergeBlocker|1 kind 9|2 rule_failure #0?|3 merge_ref_sha 9?|4 base_tip_sha_at_computation 9?|5 current_base_tip_sha 9?|6 ruleset_id 9?|7 rule_id 9?|8 enforcement 9?|9 message 9?|10 change_number 4?|11 merge_commit_oid 9?|12 merged_change_numbers 4*|13 open_change_numbers 4*|14 top_change_number 4?|15 downstack_change_number 4?|16 top_head_sha 9?|17 downstack_head_sha 9?|18 compare_status 9?|19 topology_reason 9?|20 root_base_ref 9?|21 conflicted_paths 9*|22 conflict_inherited_from_downstack 8?|23 recorded_base_sha 9?|24 target_base_ref 9?", $p];
      }
    }
    class Vp extends ep {
      constructor(e2) {
        super(), this.kind = "", this.severity = "", this.message = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vp, e2, t2);
      }
      static $() {
        return ["ChangesetRuleConfigurationDiagnostic|1 kind 9|2 severity 9|3 message 9|4 ruleset_id 9?|5 rule_id 9?|6 bypass_actor_id 9?|7 enforcement 9?"];
      }
    }
    class Kp extends ep {
      constructor(e2) {
        super(), this.targetChangeNumber = n.protoInt64.zero, this.prefixChangeNumbers = [], this.rootBaseRef = "", this.verdict = "", this.blockers = [], this.memberEvaluations = [], this.convergenceConflictedPaths = [], this.restackConflictedPaths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kp, e2, t2);
      }
      static $() {
        return ["StackMergeability|1 target_change_number 4|2 prefix_change_numbers 4*|3 root_base_ref 9|4 verdict 9|5 blockers #0*|6 member_evaluations #1*|7 convergence_state 9?|8 convergence_conflicted_change_number 4?|9 convergence_conflicted_paths 9*|10 convergence_updated_at 9?|11 restack_conflicted_change_number 4?|12 restack_conflicted_paths 9*|13 restack_preview_pending 8?", Wp, Yp];
      }
    }
    class Yp extends ep {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, this.role = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yp, e2, t2);
      }
      static $() {
        return ["StackMemberEvaluation|1 change_number 4|2 role 9|3 mergeability #0", Lp];
      }
    }
    class Zp extends ep {
      constructor(e2) {
        super(), this.topChangeNumber = n.protoInt64.zero, this.mode = Ln.UNSPECIFIED, this.expectedTargetHeadSha = "", this.expectedMemberHeadShas = {}, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zp, e2, t2);
      }
      static $() {
        return ["MergeStackRequest|1 identifier #0|2 top_change_number 4|3 mode #1|4 expected_target_head_sha 9|5 commit_title 9?|6 commit_message 9?|7 bypass_merge_queue 8?|8 allow_open_pull_request_base 8?|9 expected_member_head_shas 4,9", i, Ln];
      }
    }
    class Xp extends ep {
      constructor(e2) {
        super(), this.mergeCommitSha = "", this.mergedChangeNumbers = [], this.mergeQueueEntryId = "", this.mergeQueueSkipped = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xp().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xp().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xp().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xp, e2, t2);
      }
      static $() {
        return ["MergeStackResponse|1 merge_commit_sha 9|2 merged_change_numbers 4*|3 merge_queue_entry_id 9|4 merge_queue_skipped 8"];
      }
    }
    class em extends ep {
      constructor(e2) {
        super(), this.topChangeNumber = n.protoInt64.zero, this.dryRun = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new em().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new em().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new em().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(em, e2, t2);
      }
      static $() {
        return ["RestackStackRequest|1 identifier #0|2 top_change_number 4|3 dry_run 8", i];
      }
    }
    class tm extends ep {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, this.headSha = "", this.ontoRef = "", this.outcome = sp.UNSPECIFIED, this.conflictedPaths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tm, e2, t2);
      }
      static $() {
        return ["RestackStackDryRunMember|1 change_number 4|2 head_sha 9|3 onto_ref 9|4 onto_sha 9?|5 new_head_sha 9?|6 outcome #0|7 conflicted_paths 9*", sp];
      }
    }
    class rm extends ep {
      constructor(e2) {
        super(), this.restackedChangeNumbers = [], this.dryRunMembers = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rm, e2, t2);
      }
      static $() {
        return ["RestackStackResponse|1 restacked_change_numbers 4*|2 dry_run_members #0*", tm];
      }
    }
    class nm extends ep {
      constructor(e2) {
        super(), this.runId = "", this.jobName = "", this.headSha = "", this.cause = { case: void 0 }, this.runActive = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nm, e2, t2);
      }
      static $() {
        return ["OriginCiJob|1 run_id 9|2 job_name 9|3 head_sha 9|4 pull_request_number 4 cause|5 push_ref 9 cause|6 run_active 8|7 result #0?", sm];
      }
    }
    class sm extends ep {
      constructor(e2) {
        super(), this.conclusion = Zd.CHECK_RUN_CONCLUSION_UNSPECIFIED, this.completedAtUnixMs = n.protoInt64.zero, this.logTruncated = false, this.steps = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sm, e2, t2);
      }
      static $() {
        return ["OriginCiJobResult|1 conclusion #0|2 exit_code 5?|3 image 9?|4 note 9?|5 started_at_unix_ms 3?|6 completed_at_unix_ms 3|7 log_bytes 3?|8 log_truncated 8|9 steps #1*", Zd, om];
      }
    }
    class om extends ep {
      constructor(e2) {
        super(), this.index = 0, this.startedAtUnixMs = n.protoInt64.zero, this.completedAtUnixMs = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new om().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new om().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new om().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(om, e2, t2);
      }
      static $() {
        return ["OriginCiJobStep|1 index 13|2 started_at_unix_ms 3|3 completed_at_unix_ms 3"];
      }
    }
    class im extends ep {
      constructor(e2) {
        super(), this.runId = "", this.jobName = "", this.offset = n.protoInt64.zero, this.limit = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new im().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new im().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new im().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(im, e2, t2);
      }
      static $() {
        return ["GetOriginCiJobLogRequest|1 identifier #0|2 run_id 9|3 job_name 9|4 offset 3|5 limit 3|6 live_cursor 9?", i];
      }
    }
    class am extends ep {
      constructor(e2) {
        super(), this.data = new Uint8Array(0), this.offset = n.protoInt64.zero, this.totalBytes = n.protoInt64.zero, this.liveCursor = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new am().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new am().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new am().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(am, e2, t2);
      }
      static $() {
        return ["GetOriginCiJobLogResponse|1 job #0|2 data 12|3 offset 3|4 total_bytes 3|5 live_cursor 9", nm];
      }
    }
    const cm = "origin.v1.";
    class lm extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return cm;
      }
    }
    var um = (0, s.QT)(n.proto3, cm, "MergeQueueValidationCheckMode", [[0, "UNSPECIFIED"], [1, "ALL_TRUNK_RULESETS"], [2, "QUEUE_CHECKS_ONLY"]], 1), dm = (0, s.QT)(n.proto3, cm, "MergeQueueConfigOutcome", [[0, "UNSPECIFIED"], [1, "CREATED"], [2, "RE_ENABLED"], [3, "ALREADY_ENABLED"], [4, "DISABLED"], [5, "ALREADY_DISABLED"], [6, "UPDATED"], [7, "UNCHANGED"]], 1);
    class pm extends lm {
      constructor(e2) {
        super(), this.expectedHeadSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pm, e2, t2);
      }
      static $() {
        return ["EnqueueForMergeRequest|1 change #0|2 expected_head_sha 9", na];
      }
    }
    class mm extends lm {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mm, e2, t2);
      }
      static $() {
        return ["EnqueueForMergeResponse|1 entry #0", Nm];
      }
    }
    class hm extends lm {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hm, e2, t2);
      }
      static $() {
        return ["CancelMergeQueueEntryRequest|1 change #0", na];
      }
    }
    class fm extends lm {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fm, e2, t2);
      }
      static $() {
        return ["CancelMergeQueueEntryResponse|1 entry #0", Nm];
      }
    }
    class gm extends lm {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gm, e2, t2);
      }
      static $() {
        return ["GetMergeQueueStatusRequest|1 change #0", na];
      }
    }
    class ym extends lm {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ym().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ym().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ym().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ym, e2, t2);
      }
      static $() {
        return ["GetMergeQueueStatusResponse|1 entry #0", Nm];
      }
    }
    class wm extends lm {
      constructor(e2) {
        super(), this.targetRef = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wm, e2, t2);
      }
      static $() {
        return ["GetMergeQueueRequest|1 identifier #0|2 target_ref 9", i];
      }
    }
    class vm extends lm {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vm, e2, t2);
      }
      static $() {
        return ["GetMergeQueueResponse|1 queue #0", Pm];
      }
    }
    class _m extends lm {
      constructor(e2) {
        super(), this.queueId = "", this.targetRef = "", this.speculationDepth = 0, this.maxConcurrentValidations = 0, this.validationTimeoutMs = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _m().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _m().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _m().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_m, e2, t2);
      }
      static $() {
        return ["MergeQueueConfig|1 queue_id 9|2 target_ref 9|3 enabled 8?|4 speculation_depth 13|5 max_concurrent_validations 13|6 validation_timeout_ms 4|7 validation_checks #0", Sm];
      }
    }
    class Am extends lm {
      constructor(e2) {
        super(), this.actorKind = "", this.actorId = "", this.groupKey = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Am().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Am().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Am().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Am, e2, t2);
      }
      static $() {
        return ["MergeQueueRequiredCheck|1 actor_kind 9|2 actor_id 9|3 group_key 9|4 run_key 9?|5 name 9?"];
      }
    }
    class Sm extends lm {
      constructor(e2) {
        super(), this.mode = um.UNSPECIFIED, this.checks = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sm, e2, t2);
      }
      static $() {
        return ["MergeQueueValidationChecks|1 mode #0|2 checks #1*", um, Am];
      }
    }
    class bm extends lm {
      constructor(e2) {
        super(), this.targetRef = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bm, e2, t2);
      }
      static $() {
        return ["GetMergeQueueConfigRequest|1 identifier #0|2 target_ref 9", i];
      }
    }
    class Em extends lm {
      constructor(e2) {
        super(), this.inheritedChecks = [], this.unresolvedChecks = [], this.prOnlyChecks = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Em().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Em().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Em().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Em, e2, t2);
      }
      static $() {
        return ["GetMergeQueueConfigResponse|1 config #0|2 inherited_checks #1*|3 unresolved_checks #1*|4 pr_only_checks #2*", _m, Am, Im];
      }
    }
    class Im extends lm {
      constructor(e2) {
        super(), this.groupKey = "", this.runKey = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Im().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Im().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Im().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Im, e2, t2);
      }
      static $() {
        return ["MergeQueuePrOnlyCheck|1 group_key 9|2 run_key 9"];
      }
    }
    class Cm extends lm {
      constructor(e2) {
        super(), this.targetRef = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cm, e2, t2);
      }
      static $() {
        return ["EnableMergeQueueRequest|1 identifier #0|2 target_ref 9|3 speculation_depth 13?|4 max_concurrent_validations 13?|5 validation_timeout_ms 4?|6 validation_checks #1?", i, Sm];
      }
    }
    class km extends lm {
      constructor(e2) {
        super(), this.outcome = dm.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new km().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new km().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new km().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(km, e2, t2);
      }
      static $() {
        return ["EnableMergeQueueResponse|1 config #0|2 outcome #1", _m, dm];
      }
    }
    class xm extends lm {
      constructor(e2) {
        super(), this.targetRef = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xm, e2, t2);
      }
      static $() {
        return ["DisableMergeQueueRequest|1 identifier #0|2 target_ref 9", i];
      }
    }
    class Tm extends lm {
      constructor(e2) {
        super(), this.outcome = dm.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tm, e2, t2);
      }
      static $() {
        return ["DisableMergeQueueResponse|1 config #0|2 outcome #1", _m, dm];
      }
    }
    class Rm extends lm {
      constructor(e2) {
        super(), this.targetRef = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rm, e2, t2);
      }
      static $() {
        return ["UpdateMergeQueueConfigRequest|1 identifier #0|2 target_ref 9|3 speculation_depth 13?|4 max_concurrent_validations 13?|5 validation_timeout_ms 4?|6 validation_checks #1?", i, Sm];
      }
    }
    class Bm extends lm {
      constructor(e2) {
        super(), this.outcome = dm.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bm, e2, t2);
      }
      static $() {
        return ["UpdateMergeQueueConfigResponse|1 config #0|2 outcome #1", _m, dm];
      }
    }
    class Pm extends lm {
      constructor(e2) {
        super(), this.targetRef = "", this.epoch = n.protoInt64.zero, this.entries = [], this.nodes = [], this.lands = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pm, e2, t2);
      }
      static $() {
        return ["MergeQueueView|1 identifier #0|2 target_ref 9|3 epoch 4|4 entries #1*|5 nodes #2*|6 lands #3*", i, Jm, qm, Om];
      }
    }
    class Jm extends lm {
      constructor(e2) {
        super(), this.entryId = "", this.pullRequests = [], this.position = 0, this.ciCancelCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jm, e2, t2);
      }
      static $() {
        return ["MergeQueueViewEntry|1 entry_id 9|2 pull_requests #0*|3 position 13|4 status #1|5 enqueued_at #2|6 ci_cancel_count 13", Mm, Fm, n.Timestamp];
      }
    }
    class Mm extends lm {
      constructor(e2) {
        super(), this.number = n.protoInt64.zero, this.headSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mm, e2, t2);
      }
      static $() {
        return ["MergeQueueViewPullRequest|1 number 4|2 head_sha 9"];
      }
    }
    class qm extends lm {
      constructor(e2) {
        super(), this.nodeId = "", this.state = Dm.UNSPECIFIED, this.changeNumbers = [], this.assumedChangeNumbers = [], this.checkRunGroups = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qm, e2, t2);
      }
      static $() {
        return ["MergeQueueViewNode|1 node_id 9|2 state #0|3 tested_sha 9?|4 chain_ref 9?|5 started_at #1|6 change_numbers 4*|7 assumed_change_numbers 4*|8 check_run_groups #2*", Dm, n.Timestamp, Ap];
      }
    }
    var Dm = (0, s.QT)(n.proto3, cm, "MergeQueueViewNode.State", [[0, "UNSPECIFIED"], [1, "PREPARING"], [2, "CONFLICT"], [3, "RUNNING"], [4, "GREEN"], [5, "RED"], [6, "CANCELLING"], [7, "CANCELLED"]], 1);
    class Om extends lm {
      constructor(e2) {
        super(), this.moveId = "", this.expectedTrunkSha = "", this.landedSha = "", this.changeNumbers = [], this.bookedQueueEpoch = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Om().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Om().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Om().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Om, e2, t2);
      }
      static $() {
        return ["MergeQueueViewLand|1 move_id 9|2 expected_trunk_sha 9|3 landed_sha 9|4 change_numbers 4*|5 decided_at #0|6 landed_at #0|7 booked_queue_epoch 4", n.Timestamp];
      }
    }
    class Nm extends lm {
      constructor(e2) {
        super(), this.entryId = "", this.targetRef = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nm, e2, t2);
      }
      static $() {
        return ["MergeQueueEntry|1 entry_id 9|2 change #0|3 target_ref 9|4 status #1", na, Fm];
      }
    }
    class Fm extends lm {
      constructor(e2) {
        super(), this.kind = Um.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fm, e2, t2);
      }
      static $() {
        return ["MergeQueueEntryStatus|1 kind #0|2 position 13?|3 blocked_on 9?|4 tested_sha 9?|5 failure 9?|6 eviction_reason 9?", Um];
      }
    }
    var Um = (0, s.QT)(n.proto3, cm, "MergeQueueEntryStatus.Kind", [[0, "UNSPECIFIED"], [1, "QUEUED"], [2, "VALIDATING"], [3, "MERGING"], [4, "MERGED"], [5, "EVICTED"], [6, "CANCELLED"]], 1);
    class Lm extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class $m extends Lm {
      constructor(e2) {
        super(), this.previewRestackConflict = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $m().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $m().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $m().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($m, e2, t2);
      }
      static $() {
        return ["GetChangeStackPageDataRequest|1 change #0|2 preview_restack_conflict 8", na];
      }
    }
    class Qm extends Lm {
      constructor(e2) {
        super(), this.mirrorStatus = g.UNSPECIFIED, this.items = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qm, e2, t2);
      }
      static $() {
        return ["GetChangeStackPageDataResponse|1 mirror_status #0|2 items #1*|3 reviewer_candidates #2", g, jm, yc];
      }
    }
    class jm extends Lm {
      constructor(e2) {
        super(), this.versions = [], this.assignments = [], this.reviews = [], this.totalThreadCount = 0, this.unresolvedThreadCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jm, e2, t2);
      }
      static $() {
        return ["ChangeStackPageItem|1 change #0|2 versions #1*|3 assignments #2*|4 reviews #3*|5 mergeability #4|6 total_thread_count 5|7 unresolved_thread_count 5", Zi, Xi, Ka, Ta, Np];
      }
    }
    class Gm extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Hm extends Gm {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hm, e2, t2);
      }
      static $() {
        return ["GetReviewRequirementsRequest|1 change #0", na];
      }
    }
    class zm extends Gm {
      constructor(e2) {
        super(), this.headSha = "", this.codeReviewGates = [], this.approvals = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zm, e2, t2);
      }
      static $() {
        return ["GetReviewRequirementsResponse|1 head_sha 9|2 mergeability #0|3 gates #1|4 code_review_gates #2*|5 approvals #3*", Fp, Wm, eh, rh];
      }
    }
    class Wm extends Gm {
      constructor(e2) {
        super(), this.enrollment = "", this.headGatesFileErrors = [], this.requiredGates = [], this.gatesRequired = false, this.standInForChecks = [], this.gatesClearReview = false, this.humanOnlyPaths = [], this.cannotStandInPaths = [], this.uncoveredPaths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wm, e2, t2);
      }
      static $() {
        return ["ReviewRequirementsGates|1 enrollment 9|2 head_gates_file_errors 9*|3 gates_file #0?|4 required_gates #1*|5 gates_required 8|6 stand_in_for_checks 9*|7 gates_clear_review 8|8 human_only_paths #2*|9 cannot_stand_in_paths #2*|10 uncovered_paths 9*|11 owner_scope #3?|12 human_approval_latest_version_required 8?", Vm, Km, Ym, Zm];
      }
    }
    class Vm extends Gm {
      constructor(e2) {
        super(), this.status = "", this.validationErrors = [], this.landingBaseSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vm, e2, t2);
      }
      static $() {
        return ["ReviewRequirementsGatesFile|1 status 9|2 unavailable_reason 9?|3 validation_errors 9*|4 landing_base_sha 9|5 blob_oid 9?|6 trunk_tip_blob_oid 9?|7 landing_base_has_gates_file 8?"];
      }
    }
    class Km extends Gm {
      constructor(e2) {
        super(), this.gate = "", this.checkName = "", this.status = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Km().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Km().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Km().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Km, e2, t2);
      }
      static $() {
        return ["ReviewRequirementsGate|1 gate 9|2 check_name 9|3 status 9|4 report_url 9?|5 report_client 9?"];
      }
    }
    class Ym extends Gm {
      constructor(e2) {
        super(), this.path = "", this.reason = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ym().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ym().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ym().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ym, e2, t2);
      }
      static $() {
        return ["ReviewRequirementsPath|1 path 9|2 reason 9|3 cause 9?"];
      }
    }
    class Zm extends Gm {
      constructor(e2) {
        super(), this.kind = "", this.outside = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zm, e2, t2);
      }
      static $() {
        return ["ReviewRequirementsOwnerScope|1 kind 9|2 reason 9?|3 outside #0*", Xm];
      }
    }
    class Xm extends Gm {
      constructor(e2) {
        super(), this.source = "", this.anyHuman = false, this.owners = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xm().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xm().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xm().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xm, e2, t2);
      }
      static $() {
        return ["ReviewRequirementsOwnerRequirement|1 source 9|2 any_human 8|3 owners 9*"];
      }
    }
    class eh extends Gm {
      constructor(e2) {
        super(), this.checkName = "", this.state = "", this.waivedByGates = false, this.blocking = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new eh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new eh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new eh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(eh, e2, t2);
      }
      static $() {
        return ["ReviewRequirementsCodeReviewGate|1 check_name 9|2 state 9|3 waived_by_gates 8|4 blocking 8|5 report #0?|6 owners_unknown_reason 9?", th];
      }
    }
    class th extends Gm {
      constructor(e2) {
        super(), this.outcome = "", this.unblockReviewers = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new th().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new th().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new th().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(th, e2, t2);
      }
      static $() {
        return ["ReviewRequirementsCodeReviewGateReport|1 outcome 9|2 satisfied_policies 13?|3 total_policies 13?|4 unblock_reviewers 9*"];
      }
    }
    class rh extends Gm {
      constructor(e2) {
        super(), this.source = "", this.owners = [], this.anyHuman = false, this.paths = [], this.morePaths = 0, this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rh, e2, t2);
      }
      static $() {
        return ["ReviewRequirementsApproval|1 source 9|2 owners 9*|3 any_human 8|4 paths 9*|5 more_paths 13|6 check_name 9?|7 scope 9?|8 required_count 13?|9 approved_count 13?|10 change_number 4"];
      }
    }
    const nh = "origin.v1.";
    class sh extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return nh;
      }
    }
    var oh = (0, s.QT)(n.proto3, nh, "RepoSelectionMode", [[0, "UNSPECIFIED"], [1, "ALL"], [2, "SELECTED"]], 1), ih = (0, s.QT)(n.proto3, nh, "AppInstallRequestOutcome", [[0, "UNSPECIFIED"], [1, "CREATED"], [2, "ALREADY_PENDING"], [3, "DENIED_COOLDOWN"], [4, "ALREADY_INSTALLED"]], 1);
    class ah extends sh {
      constructor(e2) {
        super(), this.id = "", this.displayName = "", this.webhookUrl = "", this.isPublic = false, this.namespaceSlug = "", this.events = [], this.createdAt = "", this.updatedAt = "", this.installationRedirectUris = [], this.iconUrl = "", this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.webhookDisabledAt = "", this.webhookDeliveryState = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ah().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ah().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ah().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ah, e2, t2);
      }
      static $() {
        return ["App|1 id 9|3 display_name 9|4 webhook_url 9|6 is_public 8|7 namespace_slug 9|8 events 9*|10 created_at 9|11 updated_at 9|12 installation_redirect_uris 9*|13 icon_url 9|14 description 9|15 website_url 9|16 default_scopes 9*|17 created_by #0|18 updated_by #0|19 webhook_disabled_at 9|20 webhook_delivery_state 9|21 marketplace_listing #1", qi, _h];
      }
    }
    class ch extends sh {
      constructor(e2) {
        super(), this.installationCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ch().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ch().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ch().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ch, e2, t2);
      }
      static $() {
        return ["AppStats|1 installation_count 13"];
      }
    }
    class lh extends sh {
      constructor(e2) {
        super(), this.kid = "", this.createdAt = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lh, e2, t2);
      }
      static $() {
        return ["AppSigningKey|1 kid 9|2 created_at 9"];
      }
    }
    class uh extends sh {
      constructor(e2) {
        super(), this.displayName = "", this.webhookUrl = "", this.namespaceSlug = "", this.publicKey = "", this.events = [], this.installationRedirectUris = [], this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.workloadIdentityPolicies = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new uh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new uh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new uh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(uh, e2, t2);
      }
      static $() {
        return ["CreateAppRequest|2 display_name 9|3 webhook_url 9|6 namespace_slug 9|7 public_key 9|8 events 9*|10 installation_redirect_uris 9*|11 description 9|12 website_url 9|13 default_scopes 9*|14 workload_identity_policies #0*", Oh];
      }
    }
    class dh extends sh {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dh, e2, t2);
      }
      static $() {
        return ["CreateAppResponse|1 app #0", ah];
      }
    }
    class ph extends sh {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ph().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ph().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ph().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ph, e2, t2);
      }
      static $() {
        return ["GetAppRequest|1 id 9"];
      }
    }
    class mh extends sh {
      constructor(e2) {
        super(), this.signingKeys = [], this.workloadIdentityPolicies = [], this.workloadIdentityEnabled = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mh, e2, t2);
      }
      static $() {
        return ["GetAppResponse|1 app #0|2 stats #1|3 signing_keys #2*|4 workload_identity_policies #3*|5 workload_identity_enabled 8", ah, ch, lh, Oh];
      }
    }
    class hh extends sh {
      constructor(e2) {
        super(), this.appId = "", this.publicKey = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hh, e2, t2);
      }
      static $() {
        return ["AddAppSigningKeyRequest|1 app_id 9|2 public_key 9"];
      }
    }
    class fh extends sh {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fh, e2, t2);
      }
      static $() {
        return ["AddAppSigningKeyResponse|1 key #0", lh];
      }
    }
    class gh extends sh {
      constructor(e2) {
        super(), this.appId = "", this.kid = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gh, e2, t2);
      }
      static $() {
        return ["RevokeAppSigningKeyRequest|1 app_id 9|2 kid 9"];
      }
    }
    class yh extends sh {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yh, e2, t2);
      }
      static $() {
        return ["RevokeAppSigningKeyResponse"];
      }
    }
    class wh extends sh {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wh, e2, t2);
      }
      static $() {
        return ["ListNamespaceAppsRequest|1 namespace_slug 9|2 page_size 13|3 page_token 9"];
      }
    }
    class vh extends sh {
      constructor(e2) {
        super(), this.nextPageToken = "", this.appMetadata = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vh, e2, t2);
      }
      static $() {
        return ["ListNamespaceAppsResponse|2 next_page_token 9|3 app_metadata #0*", Ah];
      }
    }
    class _h extends sh {
      constructor(e2) {
        super(), this.slug = "", this.listedAt = "", this.tags = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _h().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _h().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _h().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_h, e2, t2);
      }
      static $() {
        return ["AppMarketplaceListing|1 slug 9|2 listed_at 9|3 tags 9*|4 publisher_id 3?"];
      }
    }
    class Ah extends sh {
      constructor(e2) {
        super(), this.id = "", this.displayName = "", this.ownerNamespace = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ah().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ah().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ah().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ah, e2, t2);
      }
      static $() {
        return ["AppDisplayMetadata|1 id 9|3 display_name 9|4 icon_url 9?|5 description 9?|7 marketplace_listing #0|8 owner_namespace 9", _h];
      }
    }
    class Sh extends sh {
      constructor(e2) {
        super(), this.pageSize = 0, this.pageToken = "", this.tag = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sh, e2, t2);
      }
      static $() {
        return ["ListPublicAppsRequest|1 page_size 13|2 page_token 9|3 tag 9"];
      }
    }
    class bh extends sh {
      constructor(e2) {
        super(), this.apps = [], this.nextPageToken = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bh, e2, t2);
      }
      static $() {
        return ["ListPublicAppsResponse|1 apps #0*|2 next_page_token 9", Ah];
      }
    }
    class Eh extends sh {
      constructor(e2) {
        super(), this.id = "", this.appId = "", this.namespaceSlug = "", this.createdAt = "", this.updatedAt = "", this.repoSelectionMode = oh.UNSPECIFIED, this.repoIds = [], this.acceptedScopes = [], this.reviewedDefaultScopes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Eh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Eh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Eh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Eh, e2, t2);
      }
      static $() {
        return ["Installation|1 id 9|2 app_id 9|3 namespace_slug 9|4 created_at 9|5 updated_at 9|6 repo_selection_mode #0|7 repo_ids 9*|8 accepted_scopes 9*|9 suspended_at 9?|10 reviewed_default_scopes 9*|11 installed_by #1|12 updated_by #1?|13 suspended_by #1?", oh, qi];
      }
    }
    class Ih extends sh {
      constructor(e2) {
        super(), this.id = "", this.appId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ih().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ih().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ih().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ih, e2, t2);
      }
      static $() {
        return ["InstallationReference|1 id 9|2 app_id 9|3 app_metadata #0", Ah];
      }
    }
    class Ch extends sh {
      constructor(e2) {
        super(), this.appId = "", this.namespaceSlug = "", this.repoIds = [], this.requestedScopes = [], this.reviewedDefaultScopes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ch().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ch().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ch().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ch, e2, t2);
      }
      static $() {
        return ["CreateInstallationRequest|1 app_id 9|2 namespace_slug 9|3 repo_ids 9*|4 requested_scopes 9*|5 state 9?|6 reviewed_default_scopes 9*"];
      }
    }
    class kh extends sh {
      constructor(e2) {
        super(), this.installationReceipt = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kh, e2, t2);
      }
      static $() {
        return ["CreateInstallationResponse|1 installation #0|2 installation_receipt 9", Eh];
      }
    }
    class xh extends sh {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xh, e2, t2);
      }
      static $() {
        return ["GetInstallationRequest|1 id 9"];
      }
    }
    class Th extends sh {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Th().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Th().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Th().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Th, e2, t2);
      }
      static $() {
        return ["GetInstallationResponse|1 installation #0", Eh];
      }
    }
    class Rh extends sh {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rh, e2, t2);
      }
      static $() {
        return ["ListNamespaceInstallationsRequest|1 namespace_slug 9|2 page_size 13|3 page_token 9"];
      }
    }
    class Bh extends sh {
      constructor(e2) {
        super(), this.installations = [], this.nextPageToken = "", this.installationReferences = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bh, e2, t2);
      }
      static $() {
        return ["ListNamespaceInstallationsResponse|1 installations #0*|2 next_page_token 9|3 installation_references #1*", Eh, Ih];
      }
    }
    class Ph extends sh {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ph().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ph().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ph().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ph, e2, t2);
      }
      static $() {
        return ["UpdateAppRequest|1 id 9|2 display_name 9?|3 webhook_url 9?|5 events #0?|6 is_public 8?|8 installation_redirect_uris #1?|9 description 9?|10 website_url 9?|11 default_scopes #2?|12 workload_identity_policies #3?", Jh, Mh, qh, Nh];
      }
    }
    class Jh extends sh {
      constructor(e2) {
        super(), this.events = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jh, e2, t2);
      }
      static $() {
        return ["AppEventsReplace|1 events 9*"];
      }
    }
    class Mh extends sh {
      constructor(e2) {
        super(), this.installationRedirectUris = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mh, e2, t2);
      }
      static $() {
        return ["AppInstallationRedirectUrisReplace|1 installation_redirect_uris 9*"];
      }
    }
    class qh extends sh {
      constructor(e2) {
        super(), this.scopes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qh, e2, t2);
      }
      static $() {
        return ["AppDefaultScopesReplace|1 scopes 9*"];
      }
    }
    class Dh extends sh {
      constructor(e2) {
        super(), this.path = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dh, e2, t2);
      }
      static $() {
        return ["AppWorkloadIdentityClaimMatcher|1 path 9|2 exact 9?|3 regex 9?"];
      }
    }
    class Oh extends sh {
      constructor(e2) {
        super(), this.issuerFamily = "", this.issuer = "", this.claims = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Oh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Oh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Oh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Oh, e2, t2);
      }
      static $() {
        return ["AppWorkloadIdentityPolicy|1 issuer_family 9|2 issuer 9|3 subject_exact 9?|4 subject_regex 9?|5 claims #0*|6 enabled 8?", Dh];
      }
    }
    class Nh extends sh {
      constructor(e2) {
        super(), this.policies = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nh, e2, t2);
      }
      static $() {
        return ["AppWorkloadIdentityPoliciesReplace|1 policies #0*", Oh];
      }
    }
    class Fh extends sh {
      constructor(e2) {
        super(), this.appId = "", this.enabled = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fh, e2, t2);
      }
      static $() {
        return ["SetAppWebhookDeliveryEnabledRequest|1 app_id 9|2 enabled 8"];
      }
    }
    class Uh extends sh {
      constructor(e2) {
        super(), this.transitioned = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Uh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Uh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Uh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Uh, e2, t2);
      }
      static $() {
        return ["SetAppWebhookDeliveryEnabledResponse|1 app #0|2 transitioned 8", ah];
      }
    }
    class Lh extends sh {
      constructor(e2) {
        super(), this.appId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lh, e2, t2);
      }
      static $() {
        return ["SendAppWebhookTestDeliveryRequest|1 app_id 9"];
      }
    }
    class $h extends sh {
      constructor(e2) {
        super(), this.delivered = false, this.responseStatusCode = 0, this.deliveryId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $h().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $h().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $h().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($h, e2, t2);
      }
      static $() {
        return ["SendAppWebhookTestDeliveryResponse|1 delivered 8|2 response_status_code 5|3 delivery_id 9"];
      }
    }
    class Qh extends sh {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qh, e2, t2);
      }
      static $() {
        return ["UpdateAppResponse|1 app #0", ah];
      }
    }
    class jh extends sh {
      constructor(e2) {
        super(), this.appId = "", this.icon = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jh, e2, t2);
      }
      static $() {
        return ["SetAppIconRequest|1 app_id 9|2 icon 12"];
      }
    }
    class Gh extends sh {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gh, e2, t2);
      }
      static $() {
        return ["SetAppIconResponse|1 app #0", ah];
      }
    }
    class Hh extends sh {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hh, e2, t2);
      }
      static $() {
        return ["DeleteAppRequest|1 id 9"];
      }
    }
    class zh extends sh {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zh, e2, t2);
      }
      static $() {
        return ["DeleteAppResponse"];
      }
    }
    class Wh extends sh {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wh, e2, t2);
      }
      static $() {
        return ["DeleteInstallationRequest|1 id 9"];
      }
    }
    class Vh extends sh {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vh, e2, t2);
      }
      static $() {
        return ["DeleteInstallationResponse"];
      }
    }
    class Kh extends sh {
      constructor(e2) {
        super(), this.includeGrantedScopes = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kh, e2, t2);
      }
      static $() {
        return ["PreviewAppInstallationOptions|1 include_granted_scopes 8"];
      }
    }
    class Yh extends sh {
      constructor(e2) {
        super(), this.namespaceSlug = "", this.appId = "", this.requestedScopes = [], this.summary = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yh, e2, t2);
      }
      static $() {
        return ["PreviewAppInstallationRequest|1 namespace_slug 9|2 app_id 9|3 requested_scopes 9*|4 summary 9|5 redirect_uri 9?|6 options #0", Kh];
      }
    }
    class Zh extends sh {
      constructor(e2) {
        super(), this.scope = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zh, e2, t2);
      }
      static $() {
        return ["PreviewAppInstallationScope|1 scope 9"];
      }
    }
    class Xh extends sh {
      constructor(e2) {
        super(), this.summary = "", this.requestedScopes = [], this.grantedScopes = [], this.appWebsiteUrl = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xh().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xh().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xh().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xh, e2, t2);
      }
      static $() {
        return ["PreviewAppInstallationResponse|12 app #0|5 summary 9|6 requested_scopes #1*|7 granted_scopes #1*|8 existing_installation #2|10 app_website_url 9", Ah, Zh, ef];
      }
    }
    class ef extends sh {
      constructor(e2) {
        super(), this.installationId = "", this.repoSelectionMode = oh.UNSPECIFIED, this.repoIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ef().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ef().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ef().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ef, e2, t2);
      }
      static $() {
        return ["ExistingInstallation|1 installation_id 9|2 repo_selection_mode #0|3 repo_ids 9*", oh];
      }
    }
    class tf extends sh {
      constructor(e2) {
        super(), this.id = "", this.displayName = "", this.namespaceSlug = "", this.iconUrl = "", this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.installRedirectUri = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tf, e2, t2);
      }
      static $() {
        return ["AppMetadata|1 id 9|3 display_name 9|4 namespace_slug 9|5 icon_url 9|6 description 9|7 website_url 9|8 default_scopes 9*|9 install_redirect_uri 9|10 is_public 8?|11 marketplace_listing #0", _h];
      }
    }
    class rf extends sh {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rf, e2, t2);
      }
      static $() {
        return ["GetAppMetadataRequest|1 id 9"];
      }
    }
    class nf extends sh {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nf, e2, t2);
      }
      static $() {
        return ["GetAppMetadataResponse|1 app #0|2 stats #1", tf, ch];
      }
    }
    class sf extends sh {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sf, e2, t2);
      }
      static $() {
        return ["SuspendInstallationRequest|1 id 9"];
      }
    }
    class of extends sh {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new of().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new of().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new of().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(of, e2, t2);
      }
      static $() {
        return ["SuspendInstallationResponse"];
      }
    }
    class af extends sh {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new af().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new af().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new af().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(af, e2, t2);
      }
      static $() {
        return ["UnsuspendInstallationRequest|1 id 9"];
      }
    }
    class cf extends sh {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cf, e2, t2);
      }
      static $() {
        return ["UnsuspendInstallationResponse"];
      }
    }
    class lf extends sh {
      constructor(e2) {
        super(), this.repoId = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lf, e2, t2);
      }
      static $() {
        return ["ListRepoInstallationsRequest|1 repo_id 9|2 page_size 13|3 page_token 9"];
      }
    }
    class uf extends sh {
      constructor(e2) {
        super(), this.installations = [], this.nextPageToken = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new uf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new uf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new uf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(uf, e2, t2);
      }
      static $() {
        return ["ListRepoInstallationsResponse|1 installations #0*|2 next_page_token 9", Ih];
      }
    }
    class df extends sh {
      constructor(e2) {
        super(), this.namespaceId = "", this.appId = "", this.repoIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new df().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new df().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new df().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(df, e2, t2);
      }
      static $() {
        return ["RequestAppInstallRequest|1 namespace_id 9|2 app_id 9|4 repo_ids 9*"];
      }
    }
    class pf extends sh {
      constructor(e2) {
        super(), this.outcome = ih.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pf, e2, t2);
      }
      static $() {
        return ["RequestAppInstallResponse|1 outcome #0|2 cool_down_expires_at 9?", ih];
      }
    }
    class mf extends sh {
      constructor(e2) {
        super(), this.namespaceId = "", this.appId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mf, e2, t2);
      }
      static $() {
        return ["GetMyAppInstallRequestRequest|1 namespace_id 9|2 app_id 9"];
      }
    }
    class hf extends sh {
      constructor(e2) {
        super(), this.hasPendingRequest = false, this.pendingRepoSelectionMode = oh.UNSPECIFIED, this.pendingRepoIds = [], this.hasCurrentInstallation = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hf, e2, t2);
      }
      static $() {
        return ["GetMyAppInstallRequestResponse|1 has_pending_request 8|2 pending_repo_selection_mode #0|3 pending_repo_ids 9*|4 has_current_installation 8|5 has_requestable_repositories 8?", oh];
      }
    }
    class ff extends sh {
      constructor(e2) {
        super(), this.namespaceId = "", this.appId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ff().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ff().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ff().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ff, e2, t2);
      }
      static $() {
        return ["CancelMyAppInstallRequestRequest|1 namespace_id 9|2 app_id 9"];
      }
    }
    class gf extends sh {
      constructor(e2) {
        super(), this.canceled = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gf, e2, t2);
      }
      static $() {
        return ["CancelMyAppInstallRequestResponse|1 canceled 8"];
      }
    }
    class yf extends sh {
      constructor(e2) {
        super(), this.id = "", this.createdAt = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yf, e2, t2);
      }
      static $() {
        return ["AppInstallRequest|1 id 9|2 requester #0|4 created_at 9", qi];
      }
    }
    class wf extends sh {
      constructor(e2) {
        super(), this.requests = [], this.requestedRepoSelectionMode = oh.UNSPECIFIED, this.requestedRepoIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wf, e2, t2);
      }
      static $() {
        return ["AppInstallRequestGroup|1 app #0|2 requests #1*|3 requested_repo_selection_mode #2|4 requested_repo_ids 9*", Ah, yf, oh];
      }
    }
    class vf extends sh {
      constructor(e2) {
        super(), this.namespaceId = "", this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vf, e2, t2);
      }
      static $() {
        return ["ListAppInstallRequestsRequest|1 namespace_id 9|2 page_size 13|3 page_token 9"];
      }
    }
    class _f extends sh {
      constructor(e2) {
        super(), this.groups = [], this.nextPageToken = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _f().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _f().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _f().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_f, e2, t2);
      }
      static $() {
        return ["ListAppInstallRequestsResponse|1 groups #0*|2 next_page_token 9", wf];
      }
    }
    class Af extends sh {
      constructor(e2) {
        super(), this.namespaceId = "", this.appId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Af().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Af().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Af().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Af, e2, t2);
      }
      static $() {
        return ["DenyAppInstallRequestsRequest|1 namespace_id 9|2 app_id 9"];
      }
    }
    class Sf extends sh {
      constructor(e2) {
        super(), this.deniedCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sf, e2, t2);
      }
      static $() {
        return ["DenyAppInstallRequestsResponse|1 denied_count 13"];
      }
    }
    class bf extends sh {
      constructor(e2) {
        super(), this.installationId = "", this.redirectUri = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bf, e2, t2);
      }
      static $() {
        return ["PreviewAppUserConfirmationRequest|1 installation_id 9|2 redirect_uri 9|3 state 9?"];
      }
    }
    class Ef extends sh {
      constructor(e2) {
        super(), this.userId = "", this.email = "", this.namespaceId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ef().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ef().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ef().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ef, e2, t2);
      }
      static $() {
        return ["AppUserConfirmationDisclosure|1 user_id 9|2 email 9|3 namespace_id 9"];
      }
    }
    class If extends sh {
      constructor(e2) {
        super(), this.installationId = "", this.namespaceSlug = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new If().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new If().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new If().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(If, e2, t2);
      }
      static $() {
        return ["PreviewAppUserConfirmationResponse|1 app #0|2 installation_id 9|3 namespace_slug 9|4 disclosure #1", Ah, Ef];
      }
    }
    class Cf extends sh {
      constructor(e2) {
        super(), this.installationId = "", this.redirectUri = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cf, e2, t2);
      }
      static $() {
        return ["ConfirmAppUserConfirmationRequest|1 installation_id 9|2 redirect_uri 9|3 state 9?"];
      }
    }
    class kf extends sh {
      constructor(e2) {
        super(), this.confirmationReceipt = "", this.redirectUri = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kf, e2, t2);
      }
      static $() {
        return ["ConfirmAppUserConfirmationResponse|1 confirmation_receipt 9|2 redirect_uri 9"];
      }
    }
    const xf = "origin.v1.";
    class Tf extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return xf;
      }
    }
    var Rf = (0, s.QT)(n.proto3, xf, "AtlasFreshness", [[0, "UNSPECIFIED"], [1, "EAGER"], [2, "BALANCED"], [3, "RELAXED"], [4, "MANUAL"]], 1);
    class Bf extends Tf {
      constructor(e2) {
        super(), this.path = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bf, e2, t2);
      }
      static $() {
        return ["GetAtlasNodeRequest|1 repo #0|2 path 9", i];
      }
    }
    class Pf extends Tf {
      constructor(e2) {
        super(), this.layer = "", this.label = "", this.contentMarkdown = "", this.digestJson = "", this.status = "", this.lastGenAt = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pf, e2, t2);
      }
      static $() {
        return ["AtlasNodeLayerContent|1 layer 9|2 label 9|3 content_markdown 9|4 digest_json 9|5 status 9|6 last_gen_at 9"];
      }
    }
    class Jf extends Tf {
      constructor(e2) {
        super(), this.lastCommit = "", this.layers = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jf, e2, t2);
      }
      static $() {
        return ["GetAtlasNodeResponse|1 last_commit 9|2 layers #0*", Pf];
      }
    }
    class Mf extends Tf {
      constructor(e2) {
        super(), this.layer = "", this.label = "", this.enabled = false, this.generatedNodes = 0, this.pendingNodes = 0, this.lastGenAt = "", this.failedNodes = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mf, e2, t2);
      }
      static $() {
        return ["AtlasLayerStatus|1 layer 9|2 label 9|3 enabled 8|4 generated_nodes 5|5 pending_nodes 5|6 last_gen_at 9|7 failed_nodes 5"];
      }
    }
    class qf extends Tf {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qf, e2, t2);
      }
      static $() {
        return ["GetAtlasRepoStatusRequest|1 repo #0", i];
      }
    }
    class Df extends Tf {
      constructor(e2) {
        super(), this.configured = false, this.enabled = false, this.model = "", this.nodeCount = 0, this.layers = [], this.refreshing = false, this.freshness = Rf.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Df().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Df().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Df().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Df, e2, t2);
      }
      static $() {
        return ["GetAtlasRepoStatusResponse|1 configured 8|2 enabled 8|3 model 9|4 node_count 5|5 layers #0*|6 refreshing 8|7 freshness #1", Mf, Rf];
      }
    }
    class Of extends Tf {
      constructor(e2) {
        super(), this.enabled = false, this.enabledLayers = [], this.freshness = Rf.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Of().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Of().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Of().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Of, e2, t2);
      }
      static $() {
        return ["SetAtlasRepoConfigRequest|1 repo #0|2 enabled 8|3 enabled_layers 9*|4 freshness #1", i, Rf];
      }
    }
    class Nf extends Tf {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nf, e2, t2);
      }
      static $() {
        return ["SetAtlasRepoConfigResponse|1 status #0", Df];
      }
    }
    class Ff extends Tf {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ff().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ff().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ff().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ff, e2, t2);
      }
      static $() {
        return ["RefreshAtlasRepoRequest|1 repo #0", i];
      }
    }
    class Uf extends Tf {
      constructor(e2) {
        super(), this.headSha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Uf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Uf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Uf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Uf, e2, t2);
      }
      static $() {
        return ["RefreshAtlasRepoResponse|1 head_sha 9"];
      }
    }
    class Lf extends Tf {
      constructor(e2) {
        super(), this.pageSize = 0, this.pageToken = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lf, e2, t2);
      }
      static $() {
        return ["ListAtlasNodePathsRequest|1 repo #0|2 page_size 13|3 page_token 9", i];
      }
    }
    class $f extends Tf {
      constructor(e2) {
        super(), this.path = "", this.diagramKinds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $f().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $f().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $f().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($f, e2, t2);
      }
      static $() {
        return ["AtlasNodePathEntry|1 path 9|2 diagram_kinds 9*"];
      }
    }
    class Qf extends Tf {
      constructor(e2) {
        super(), this.paths = [], this.nextPageToken = "", this.entries = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qf, e2, t2);
      }
      static $() {
        return ["ListAtlasNodePathsResponse|1 paths 9*|2 next_page_token 9|3 entries #0*", $f];
      }
    }
    const jf = "origin.v1.";
    class Gf extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return jf;
      }
    }
    var Hf = (0, s.QT)(n.proto3, jf, "RulesetEnforcement", [[0, "UNSPECIFIED"], [1, "ACTIVE"], [2, "EVALUATE"], [3, "DISABLED"]], 1), zf = (0, s.QT)(n.proto3, jf, "RulesetKind", [[0, "UNSPECIFIED"], [1, "MERGE_BRANCH"], [2, "PUSH_BRANCH"], [3, "PUSH_TAG"], [4, "PUSH_REPOSITORY"]], 1), Wf = (0, s.QT)(n.proto3, jf, "RulesetBypassMode", [[0, "UNSPECIFIED"], [1, "ALWAYS"], [2, "PULL_REQUEST_ONLY"]], 1), Vf = (0, s.QT)(n.proto3, jf, "RulesetBypassActorKind", [[0, "UNSPECIFIED"], [1, "USER"], [2, "TEAM"], [3, "APP"], [6, "ORIGIN_ROLE"]], 1);
    class Kf extends Gf {
      constructor(e2) {
        super(), this.id = "", this.ruleType = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kf, e2, t2);
      }
      static $() {
        return ["RulesetRule|1 id 9|2 rule_type 9|3 parameters #0", n.Struct];
      }
    }
    class Yf extends Gf {
      constructor(e2) {
        super(), this.id = "", this.bypassMode = Wf.UNSPECIFIED, this.actorKind = Vf.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yf, e2, t2);
      }
      static $() {
        return ["RulesetBypassActor|1 id 9|2 bypass_mode #0|3 actor_kind #1|4 actor_payload #2", Wf, Vf, n.Struct];
      }
    }
    class Zf extends Gf {
      constructor(e2) {
        super(), this.id = "", this.name = "", this.description = "", this.enforcement = Hf.UNSPECIFIED, this.kind = zf.UNSPECIFIED, this.includedRefNames = [], this.excludedRefNames = [], this.rules = [], this.bypassActors = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zf, e2, t2);
      }
      static $() {
        return ["Ruleset|1 id 9|2 repo #0|3 name 9|4 description 9|5 enforcement #1|6 kind #2|7 included_ref_names 9*|8 excluded_ref_names 9*|9 rules #3*|10 bypass_actors #4*", i, Hf, zf, Kf, Yf];
      }
    }
    class Xf extends Gf {
      constructor(e2) {
        super(), this.ruleType = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xf().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xf().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xf().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xf, e2, t2);
      }
      static $() {
        return ["RulesetRuleInput|1 rule_type 9|2 parameters #0", n.Struct];
      }
    }
    class eg extends Gf {
      constructor(e2) {
        super(), this.bypassMode = Wf.UNSPECIFIED, this.actorKind = Vf.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new eg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new eg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new eg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(eg, e2, t2);
      }
      static $() {
        return ["RulesetBypassActorInput|1 bypass_mode #0|2 actor_kind #1|3 actor_payload #2", Wf, Vf, n.Struct];
      }
    }
    class tg extends Gf {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tg, e2, t2);
      }
      static $() {
        return ["ListRulesetsRequest|1 repo #0", i];
      }
    }
    class rg extends Gf {
      constructor(e2) {
        super(), this.rulesets = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rg, e2, t2);
      }
      static $() {
        return ["ListRulesetsResponse|1 rulesets #0*", Zf];
      }
    }
    class ng extends Gf {
      constructor(e2) {
        super(), this.rulesetId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ng().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ng().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ng().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ng, e2, t2);
      }
      static $() {
        return ["GetRulesetRequest|1 repo #0|2 ruleset_id 9", i];
      }
    }
    class sg extends Gf {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sg, e2, t2);
      }
      static $() {
        return ["GetRulesetResponse|1 ruleset #0", Zf];
      }
    }
    class og extends Gf {
      constructor(e2) {
        super(), this.name = "", this.description = "", this.enforcement = Hf.UNSPECIFIED, this.kind = zf.UNSPECIFIED, this.includedRefNames = [], this.excludedRefNames = [], this.rules = [], this.bypassActors = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new og().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new og().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new og().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(og, e2, t2);
      }
      static $() {
        return ["UpsertRulesetRequest|1 repo #0|2 ruleset_id 9?|3 name 9|4 description 9|5 enforcement #1|6 kind #2|7 included_ref_names 9*|8 excluded_ref_names 9*|9 rules #3*|10 bypass_actors #4*", i, Hf, zf, Xf, eg];
      }
    }
    class ig extends Gf {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ig().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ig().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ig().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ig, e2, t2);
      }
      static $() {
        return ["UpsertRulesetResponse|1 ruleset #0", Zf];
      }
    }
    class ag extends Gf {
      constructor(e2) {
        super(), this.rulesetId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ag().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ag().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ag().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ag, e2, t2);
      }
      static $() {
        return ["DeleteRulesetRequest|1 repo #0|2 ruleset_id 9", i];
      }
    }
    class cg extends Gf {
      constructor(e2) {
        super(), this.rulesetId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cg, e2, t2);
      }
      static $() {
        return ["DeleteRulesetResponse|1 ruleset_id 9"];
      }
    }
    class lg extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class ug extends lg {
      constructor(e2) {
        super(), this.id = "", this.repoUuid = "", this.name = "", this.color = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ug().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ug().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ug().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ug, e2, t2);
      }
      static $() {
        return ["Label|1 id 9|2 repo_uuid 9|3 name 9|4 color 9|5 description 9?|6 created_at #0|7 updated_at #0", n.Timestamp];
      }
    }
    class dg extends lg {
      constructor(e2) {
        super(), this.name = "", this.color = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dg, e2, t2);
      }
      static $() {
        return ["CreateLabelRequest|1 repo #0|2 name 9|3 color 9|4 description 9?", i];
      }
    }
    class pg extends lg {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pg, e2, t2);
      }
      static $() {
        return ["CreateLabelResponse|1 label #0", ug];
      }
    }
    class mg extends lg {
      constructor(e2) {
        super(), this.labelId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mg, e2, t2);
      }
      static $() {
        return ["UpdateLabelRequest|1 repo #0|2 label_id 9|3 name 9?|4 color 9?|5 description 9?", i];
      }
    }
    class hg extends lg {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hg, e2, t2);
      }
      static $() {
        return ["UpdateLabelResponse|1 label #0", ug];
      }
    }
    class fg extends lg {
      constructor(e2) {
        super(), this.labelId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fg, e2, t2);
      }
      static $() {
        return ["DeleteLabelRequest|1 repo #0|2 label_id 9", i];
      }
    }
    class gg extends lg {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gg, e2, t2);
      }
      static $() {
        return ["DeleteLabelResponse"];
      }
    }
    class yg extends lg {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yg, e2, t2);
      }
      static $() {
        return ["ListLabelsRequest|1 repo #0|2 cursor 9?|3 limit 5?|4 search_query 9?", i];
      }
    }
    class wg extends lg {
      constructor(e2) {
        super(), this.labels = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wg, e2, t2);
      }
      static $() {
        return ["ListLabelsResponse|1 labels #0*|2 next_cursor 9?", ug];
      }
    }
    class vg extends lg {
      constructor(e2) {
        super(), this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vg, e2, t2);
      }
      static $() {
        return ["GetLabelByNameRequest|1 repo #0|2 name 9", i];
      }
    }
    class _g extends lg {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _g().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _g().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _g().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_g, e2, t2);
      }
      static $() {
        return ["GetLabelByNameResponse|1 label #0?", ug];
      }
    }
    class Ag extends lg {
      constructor(e2) {
        super(), this.labelId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ag().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ag().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ag().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ag, e2, t2);
      }
      static $() {
        return ["AddLabelToChangeRequest|1 change #0|2 label_id 9", na];
      }
    }
    class Sg extends lg {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sg, e2, t2);
      }
      static $() {
        return ["AddLabelToChangeResponse"];
      }
    }
    class bg extends lg {
      constructor(e2) {
        super(), this.labelId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bg, e2, t2);
      }
      static $() {
        return ["RemoveLabelFromChangeRequest|1 change #0|2 label_id 9", na];
      }
    }
    class Eg extends lg {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Eg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Eg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Eg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Eg, e2, t2);
      }
      static $() {
        return ["RemoveLabelFromChangeResponse"];
      }
    }
    class Ig extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Cg extends Ig {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cg, e2, t2);
      }
      static $() {
        return ["WatchChangeSyncEventsRequest|1 identifier #0|2 change_number 4", i];
      }
    }
    class kg extends Ig {
      constructor(e2) {
        super(), this.frame = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kg, e2, t2);
      }
      static $() {
        return ["WatchChangeSyncEventsResponse|1 snapshot_json 9 frame|2 event_json 9 frame|3 heartbeat #0 frame", xg];
      }
    }
    class xg extends Ig {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xg, e2, t2);
      }
      static $() {
        return ["SyncEventHeartbeat"];
      }
    }
    class Tg extends Ig {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tg, e2, t2);
      }
      static $() {
        return ["ChangeSyncTarget|1 identifier #0|2 change_number 4|3 resume #1?", i, Rg];
      }
    }
    class Rg extends Ig {
      constructor(e2) {
        super(), this.streamSeqs = {}, this.headSha = "", this.headVersionNumber = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rg, e2, t2);
      }
      static $() {
        return ["SyncResumeCursor|1 stream_seqs 9,4|2 head_sha 9|3 head_version_number 13"];
      }
    }
    class Bg extends Ig {
      constructor(e2) {
        super(), this.sha = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bg, e2, t2);
      }
      static $() {
        return ["ShaSyncTarget|1 identifier #0|2 sha 9", i];
      }
    }
    class Pg extends Ig {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pg, e2, t2);
      }
      static $() {
        return ["RepoSyncTarget|1 identifier #0", i];
      }
    }
    class Jg extends Ig {
      constructor(e2) {
        super(), this.ref = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jg, e2, t2);
      }
      static $() {
        return ["RefSyncTarget|1 identifier #0|2 ref 9", i];
      }
    }
    class Mg extends Ig {
      constructor(e2) {
        super(), this.targetRef = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mg, e2, t2);
      }
      static $() {
        return ["QueueSyncTarget|1 identifier #0|2 target_ref 9", i];
      }
    }
    class qg extends Ig {
      constructor(e2) {
        super(), this.kind = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qg, e2, t2);
      }
      static $() {
        return ["SyncTarget|1 sha #0 kind|2 repo #1 kind|3 ref #2 kind|4 queue #3 kind", Bg, Pg, Jg, Mg];
      }
    }
    class Dg extends Ig {
      constructor(e2) {
        super(), this.subscriptions = [], this.targets = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dg, e2, t2);
      }
      static $() {
        return ["WatchChangeSyncEventsV2Request|1 subscriptions #0*|2 targets #1*", Tg, qg];
      }
    }
    class Og extends Ig {
      constructor(e2) {
        super(), this.connectionId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Og().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Og().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Og().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Og, e2, t2);
      }
      static $() {
        return ["WatchSyncSessionStarted|1 connection_id 9"];
      }
    }
    class Ng extends Ig {
      constructor(e2) {
        super(), this.snapshotJson = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ng().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ng().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ng().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ng, e2, t2);
      }
      static $() {
        return ["TaggedSyncSnapshot|1 target #0|2 snapshot_json 9|3 sync_target #1", Tg, qg];
      }
    }
    class Fg extends Ig {
      constructor(e2) {
        super(), this.eventJson = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fg, e2, t2);
      }
      static $() {
        return ["TaggedSyncEvent|1 target #0|2 event_json 9|3 sync_target #1", Tg, qg];
      }
    }
    class Ug extends Ig {
      constructor(e2) {
        super(), this.reason = "", this.message = "", this.updateId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ug().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ug().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ug().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ug, e2, t2);
      }
      static $() {
        return ["WatchSyncSubscriptionNack|1 target #0|2 reason 9|3 message 9|4 sync_target #1|5 update_id 9", Tg, qg];
      }
    }
    class Lg extends Ig {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lg, e2, t2);
      }
      static $() {
        return ["WatchSyncSubscriptionRemoved|1 target #0|2 sync_target #1", Tg, qg];
      }
    }
    class $g extends Ig {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $g().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $g().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $g().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($g, e2, t2);
      }
      static $() {
        return ["WatchSyncSubscriptionResumed|1 target #0", Tg];
      }
    }
    class Qg extends Ig {
      constructor(e2) {
        super(), this.frame = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qg, e2, t2);
      }
      static $() {
        return ["WatchChangeSyncEventsV2Response|1 session #0 frame|2 snapshot #1 frame|3 event #2 frame|4 heartbeat #3 frame|5 nack #4 frame|6 removed #5 frame|7 resumed #6 frame", Og, Ng, Fg, xg, Ug, Lg, $g];
      }
    }
    class jg extends Ig {
      constructor(e2) {
        super(), this.connectionId = "", this.add = [], this.remove = [], this.addTargets = [], this.removeTargets = [], this.updateId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jg, e2, t2);
      }
      static $() {
        return ["UpdateWatchChangeSyncSubscriptionsRequest|1 connection_id 9|2 add #0*|3 remove #0*|4 add_targets #1*|5 remove_targets #1*|6 update_id 9", Tg, qg];
      }
    }
    class Gg extends Ig {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gg, e2, t2);
      }
      static $() {
        return ["UpdateWatchChangeSyncSubscriptionsResponse"];
      }
    }
    class Hg extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class zg extends Hg {
      constructor(e2) {
        super(), this.changeNumber = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zg, e2, t2);
      }
      static $() {
        return ["GetChangeSyncSnapshotRequest|1 identifier #0|2 change_number 4", i];
      }
    }
    class Wg extends Hg {
      constructor(e2) {
        super(), this.snapshotJson = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wg, e2, t2);
      }
      static $() {
        return ["GetChangeSyncSnapshotResponse|1 snapshot_json 9|2 viewer_state #0", Vg];
      }
    }
    class Vg extends Hg {
      constructor(e2) {
        super(), this.pendingReviews = [], this.pendingThreads = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vg, e2, t2);
      }
      static $() {
        return ["ChangeSyncViewerState|1 timeline_viewed_at #0?|2 pending_reviews #1*|3 pending_threads #2*", n.Timestamp, Ta, Yu];
      }
    }
    class Kg extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Yg extends Kg {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yg, e2, t2);
      }
      static $() {
        return ["GithubOutageDrillProbeRequest"];
      }
    }
    class Zg extends Kg {
      constructor(e2) {
        super(), this.intercepted = false, this.attemptCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zg().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zg().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zg().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zg, e2, t2);
      }
      static $() {
        return ["GithubOutageDrillProbeResponse|1 intercepted 8|2 attempt_count 13"];
      }
    }
    const Xg = { typeName: "origin.v1.OriginService", methods: { listHostedRepos: { name: "ListHostedRepos", I: _, O: A, kind: n.MethodKind.Unary }, createRepo: { name: "CreateRepo", I: b, O: E, kind: n.MethodKind.Unary }, createRepoAndEnsureUserNamespace: { name: "CreateRepoAndEnsureUserNamespace", I: b, O: E, kind: n.MethodKind.Unary }, publishAgentTempRepo: { name: "PublishAgentTempRepo", I, O: C, kind: n.MethodKind.Unary }, createMirroredRepo: { name: "CreateMirroredRepo", I: k, O: E, kind: n.MethodKind.Unary }, filterMirrorableGithubRepos: { name: "FilterMirrorableGithubRepos", I: x, O: T, kind: n.MethodKind.Unary }, deleteRepo: { name: "DeleteRepo", I: ee, O: te, kind: n.MethodKind.Unary }, deleteMirroredRepo: { name: "DeleteMirroredRepo", I: re, O: ne, kind: n.MethodKind.Unary }, getRepo: { name: "GetRepo", I: ge, O: be, kind: n.MethodKind.Unary }, getRepoWithMirrorInfo: { name: "GetRepoWithMirrorInfo", I: ge, O: Ie, kind: n.MethodKind.Unary }, getRepoByGithubMirror: { name: "GetRepoByGithubMirror", I: Ce, O: Ie, kind: n.MethodKind.Unary }, recordCloneKitUsage: { name: "RecordCloneKitUsage", I: xe, O: Te, kind: n.MethodKind.Unary }, updateRepoMergeSettings: { name: "UpdateRepoMergeSettings", I: oe, O: ie, kind: n.MethodKind.Unary }, updateRepoBranchDeletionSetting: { name: "UpdateRepoBranchDeletionSetting", I: ae, O: ce, kind: n.MethodKind.Unary }, listRepoCloneKits: { name: "ListRepoCloneKits", I: le, O: ue, kind: n.MethodKind.Unary }, updateRepoVisibility: { name: "UpdateRepoVisibility", I: pe, O: me, kind: n.MethodKind.Unary }, updateRepoDefaultBranch: { name: "UpdateRepoDefaultBranch", I: he, O: fe, kind: n.MethodKind.Unary }, detachRepoMirror: { name: "DetachRepoMirror", I: R, O: B, kind: n.MethodKind.Unary }, reattachRepoMirror: { name: "ReattachRepoMirror", I: P, O: M, kind: n.MethodKind.Unary }, transitionRepoMirrorStatus: { name: "TransitionRepoMirrorStatus", I: $, O: Q, kind: n.MethodKind.Unary }, forceRepoMirrorCutover: { name: "ForceRepoMirrorCutover", I: j, O: G, kind: n.MethodKind.Unary }, syncMirror: { name: "SyncMirror", I: H, O: z, kind: n.MethodKind.Unary }, createRepoMirrorDeployKey: { name: "CreateRepoMirrorDeployKey", I: D, O, kind: n.MethodKind.Unary }, getRepoMirrorDeployKey: { name: "GetRepoMirrorDeployKey", I: N, O: F, kind: n.MethodKind.Unary }, deleteRepoMirrorDeployKey: { name: "DeleteRepoMirrorDeployKey", I: U, O: L, kind: n.MethodKind.Unary }, getMirrorTransitionJob: { name: "GetMirrorTransitionJob", I: K, O: Y, kind: n.MethodKind.Unary }, getActiveMirrorTransitionJob: { name: "GetActiveMirrorTransitionJob", I: W, O: V, kind: n.MethodKind.Unary }, getRepoNamespace: { name: "GetRepoNamespace", I: Fe, O: Ue, kind: n.MethodKind.Unary }, doesNamespaceExistForTeam: { name: "DoesNamespaceExistForTeam", I: Le, O: $e, kind: n.MethodKind.Unary }, getAuthorizedNamespaces: { name: "GetAuthorizedNamespaces", I: Qe, O: je, kind: n.MethodKind.Unary }, createOriginNamespace: { name: "CreateOriginNamespace", I: Be, O: Pe, kind: n.MethodKind.Unary }, setupTeamNamespace: { name: "SetupTeamNamespace", I: Je, O: Me, kind: n.MethodKind.Unary }, setupUserNamespace: { name: "SetupUserNamespace", I: qe, O: Ne, kind: n.MethodKind.Unary }, suggestOriginNamespace: { name: "SuggestOriginNamespace", I: De, O: Oe, kind: n.MethodKind.Unary }, listRepoAssignablePolicies: { name: "ListRepoAssignablePolicies", I: tt, O: rt, kind: n.MethodKind.Unary }, getRepoTeamAccess: { name: "GetRepoTeamAccess", I: ot, O: it, kind: n.MethodKind.Unary }, listRepoGrants: { name: "ListRepoGrants", I: lt, O: ut, kind: n.MethodKind.Unary }, setRepoTeamAccess: { name: "SetRepoTeamAccess", I: dt, O: pt, kind: n.MethodKind.Unary }, setRepoUserAccess: { name: "SetRepoUserAccess", I: mt, O: ht, kind: n.MethodKind.Unary }, createRepoShareInvite: { name: "CreateRepoShareInvite", I: qt, O: Dt, kind: n.MethodKind.Unary }, createRepoShareBatchInvites: { name: "CreateRepoShareBatchInvites", I: Ot, O: Ut, kind: n.MethodKind.Unary }, updateRepoShareInvite: { name: "UpdateRepoShareInvite", I: Lt, O: $t, kind: n.MethodKind.Unary }, revokeRepoShareInvite: { name: "RevokeRepoShareInvite", I: Qt, O: jt, kind: n.MethodKind.Unary }, listRepoShareInvites: { name: "ListRepoShareInvites", I: Gt, O: Ht, kind: n.MethodKind.Unary }, getShareInviteByToken: { name: "GetShareInviteByToken", I: Wt, O: Vt, kind: n.MethodKind.Unary }, declineShareInvite: { name: "DeclineShareInvite", I: Kt, O: Yt, kind: n.MethodKind.Unary }, acceptShareInvite: { name: "AcceptShareInvite", I: Zt, O: Xt, kind: n.MethodKind.Unary }, listMyShareInvites: { name: "ListMyShareInvites", I: tr, O: rr, kind: n.MethodKind.Unary }, listMyExternalRepositories: { name: "ListMyExternalRepositories", I: sr, O: or, kind: n.MethodKind.Unary }, leaveMyExternalRepository: { name: "LeaveMyExternalRepository", I: dr, O: pr, kind: n.MethodKind.Unary }, setRepoGroupAccess: { name: "SetRepoGroupAccess", I: ft, O: gt, kind: n.MethodKind.Unary }, hasOriginPermission: { name: "HasOriginPermission", I: Ze, O: Xe, kind: n.MethodKind.Unary }, getNamespaceTeamAccess: { name: "GetNamespaceTeamAccess", I: wt, O: vt, kind: n.MethodKind.Unary }, setNamespaceTeamAccess: { name: "SetNamespaceTeamAccess", I: _t, O: At, kind: n.MethodKind.Unary }, listNamespaceGrants: { name: "ListNamespaceGrants", I: bt, O: Et, kind: n.MethodKind.Unary }, setNamespaceUserAccess: { name: "SetNamespaceUserAccess", I: It, O: Ct, kind: n.MethodKind.Unary }, setNamespaceGroupAccess: { name: "SetNamespaceGroupAccess", I: kt, O: xt, kind: n.MethodKind.Unary }, listNamespaceAssignablePolicies: { name: "ListNamespaceAssignablePolicies", I: Pt, O: Jt, kind: n.MethodKind.Unary }, listGroupGrantsInNamespace: { name: "ListGroupGrantsInNamespace", I: Tt, O: Bt, kind: n.MethodKind.Unary }, getNamespaceSshCertificateAuthorities: { name: "GetNamespaceSshCertificateAuthorities", I: fr, O: gr, kind: n.MethodKind.Unary }, addNamespaceSshCertificateAuthority: { name: "AddNamespaceSshCertificateAuthority", I: yr, O: wr, kind: n.MethodKind.Unary }, removeNamespaceSshCertificateAuthority: { name: "RemoveNamespaceSshCertificateAuthority", I: vr, O: _r, kind: n.MethodKind.Unary }, setNamespaceSshRequireCertificates: { name: "SetNamespaceSshRequireCertificates", I: Ar, O: Sr, kind: n.MethodKind.Unary }, getNamespaceInboundIpAllowlist: { name: "GetNamespaceInboundIpAllowlist", I: Ir, O: Cr, kind: n.MethodKind.Unary }, addNamespaceInboundIpAllowlistEntry: { name: "AddNamespaceInboundIpAllowlistEntry", I: kr, O: xr, kind: n.MethodKind.Unary }, updateNamespaceInboundIpAllowlistEntry: { name: "UpdateNamespaceInboundIpAllowlistEntry", I: Tr, O: Rr, kind: n.MethodKind.Unary }, deleteNamespaceInboundIpAllowlistEntry: { name: "DeleteNamespaceInboundIpAllowlistEntry", I: Br, O: Pr, kind: n.MethodKind.Unary }, setNamespaceInboundIpAllowlistEnabled: { name: "SetNamespaceInboundIpAllowlistEnabled", I: Jr, O: Mr, kind: n.MethodKind.Unary }, addSshPublicKey: { name: "AddSshPublicKey", I: Or, O: Nr, kind: n.MethodKind.Unary }, listSshPublicKeys: { name: "ListSshPublicKeys", I: Fr, O: Ur, kind: n.MethodKind.Unary }, deleteSshPublicKey: { name: "DeleteSshPublicKey", I: Lr, O: $r, kind: n.MethodKind.Unary }, upsertOriginUserSlackNotification: { name: "UpsertOriginUserSlackNotification", I: zr, O: Wr, kind: n.MethodKind.Unary }, deleteOriginUserSlackNotification: { name: "DeleteOriginUserSlackNotification", I: Vr, O: Kr, kind: n.MethodKind.Unary }, getOriginUserSlackNotification: { name: "GetOriginUserSlackNotification", I: Yr, O: Zr, kind: n.MethodKind.Unary }, getOriginCommitEmailVerification: { name: "GetOriginCommitEmailVerification", I: sn, O: on, kind: n.MethodKind.Unary }, startOriginCommitEmailVerification: { name: "StartOriginCommitEmailVerification", I: an, O: cn, kind: n.MethodKind.Unary }, createOriginUserSlackReviewReminder: { name: "CreateOriginUserSlackReviewReminder", I: hn, O: fn, kind: n.MethodKind.Unary }, updateOriginUserSlackReviewReminder: { name: "UpdateOriginUserSlackReviewReminder", I: gn, O: yn, kind: n.MethodKind.Unary }, listOriginUserSlackReviewReminders: { name: "ListOriginUserSlackReviewReminders", I: wn, O: vn, kind: n.MethodKind.Unary }, getOriginUserSlackReviewReminder: { name: "GetOriginUserSlackReviewReminder", I: _n, O: An, kind: n.MethodKind.Unary }, disableOriginUserSlackReviewReminder: { name: "DisableOriginUserSlackReviewReminder", I: Sn, O: bn, kind: n.MethodKind.Unary }, subscribeOriginSlackChannel: { name: "SubscribeOriginSlackChannel", I: Rn, O: Pn, kind: n.MethodKind.Unary }, unsubscribeOriginSlackChannel: { name: "UnsubscribeOriginSlackChannel", I: Jn, O: Mn, kind: n.MethodKind.Unary }, listOriginSlackChannelSubscriptions: { name: "ListOriginSlackChannelSubscriptions", I: qn, O: Dn, kind: n.MethodKind.Unary }, getCommit: { name: "GetCommit", I: So, O: Yn, kind: n.MethodKind.Unary }, getBlob: { name: "GetBlob", I: bo, O: Zn, kind: n.MethodKind.Unary }, getTag: { name: "GetTag", I: Eo, O: Xn, kind: n.MethodKind.Unary }, getTree: { name: "GetTree", I: Io, O: es, kind: n.MethodKind.Unary }, resolveRepoPath: { name: "ResolveRepoPath", I: ao, O: _s, kind: n.MethodKind.Unary }, getRepoContent: { name: "GetRepoContent", I: co, O: As, kind: n.MethodKind.Unary }, mintRawRepoFileLink: { name: "MintRawRepoFileLink", I: lo, O: uo, kind: n.MethodKind.Unary }, getRepoTarball: { name: "GetRepoTarball", I: po, O: mo, kind: n.MethodKind.Unary }, getRepoContentAtSha: { name: "GetRepoContentAtSha", I: ho, O: As, kind: n.MethodKind.Unary }, getRepoContentDetailsAtSha: { name: "GetRepoContentDetailsAtSha", I: fo, O: Is, kind: n.MethodKind.Unary }, batchGetRepoContentAtSha: { name: "BatchGetRepoContentAtSha", I: go, O: bs, kind: n.MethodKind.Unary }, resolveCodeIntelligenceSymbolAtPosition: { name: "ResolveCodeIntelligenceSymbolAtPosition", I: ui, O: di, kind: n.MethodKind.Unary }, findCodeIntelligenceReferencesAtPosition: { name: "FindCodeIntelligenceReferencesAtPosition", I: pi, O: gi, kind: n.MethodKind.ServerStreaming }, getRepoCodeowners: { name: "GetRepoCodeowners", I: yo, O: vo, kind: n.MethodKind.Unary }, getGithubRepoCodeowners: { name: "GetGithubRepoCodeowners", I: _o, O: Ao, kind: n.MethodKind.Unary }, getFileHistory: { name: "GetFileHistory", I: Co, O: Cs, kind: n.MethodKind.Unary }, getFileHistoryPage: { name: "GetFileHistoryPage", I: ko, O: xo, kind: n.MethodKind.Unary }, getFileHistoryPageWithDiffStats: { name: "GetFileHistoryPageWithDiffStats", I: To, O: xs, kind: n.MethodKind.Unary }, getFuzzyPaths: { name: "GetFuzzyPaths", I: Po, O: Js, kind: n.MethodKind.Unary }, listRepoPaths: { name: "ListRepoPaths", I: Jo, O: Ms, kind: n.MethodKind.Unary }, grepRepo: { name: "GrepRepo", I: Mo, O: Ns, kind: n.MethodKind.ServerStreaming }, getPullRequestDiff: { name: "GetPullRequestDiff", I: qo, O: Ls, kind: n.MethodKind.ServerStreaming }, getCommitDiff: { name: "GetCommitDiff", I: Do, O: Qs, kind: n.MethodKind.ServerStreaming }, getCommitDiff2: { name: "GetCommitDiff2", I: Oo, O: Hs, kind: n.MethodKind.ServerStreaming }, getCommitChangedPaths: { name: "GetCommitChangedPaths", I: No, O: zs, kind: n.MethodKind.Unary }, getCommitDiffStats: { name: "GetCommitDiffStats", I: Fo, O: Ws, kind: n.MethodKind.Unary }, getBlame: { name: "GetBlame", I: Ro, O: Rs, kind: n.MethodKind.ServerStreaming }, getTreeBlame: { name: "GetTreeBlame", I: Bo, O: Ps, kind: n.MethodKind.Unary }, listRefs: { name: "ListRefs", I: Uo, O: eo, kind: n.MethodKind.Unary }, searchRefs: { name: "SearchRefs", I: Lo, O: to, kind: n.MethodKind.Unary }, lookupCommits: { name: "LookupCommits", I: $o, O: ss, kind: n.MethodKind.Unary }, getCommitActivity: { name: "GetCommitActivity", I: Qo, O: jo, kind: n.MethodKind.Unary }, compareCommits: { name: "CompareCommits", I: zo, O: us, kind: n.MethodKind.Unary }, listCommitsInRange: { name: "ListCommitsInRange", I: Wo, O: ls, kind: n.MethodKind.Unary }, canMerge: { name: "CanMerge", I: Ho, O: ds, kind: n.MethodKind.Unary }, createCommitFromFiles: { name: "CreateCommitFromFiles", I: Vo, O: Ko, kind: n.MethodKind.Unary }, getCollectedPullRequestDiff: { name: "GetCollectedPullRequestDiff", I: Zo, O: Xo, kind: n.MethodKind.Unary }, getDiffListing: { name: "GetDiffListing", I: Ei, O: Bi, kind: n.MethodKind.Unary }, streamDiffFiles: { name: "StreamDiffFiles", I: Ii, O: Bi, kind: n.MethodKind.ServerStreaming }, getDiffFile: { name: "GetDiffFile", I: ki, O: Bi, kind: n.MethodKind.Unary }, getDiffEngineInfo: { name: "GetDiffEngineInfo", I: Ti, O: Bi, kind: n.MethodKind.Unary }, portAnchors: { name: "PortAnchors", I: Ri, O: Bi, kind: n.MethodKind.Unary }, createChange: { name: "CreateChange", I: ta, O: ra, kind: n.MethodKind.Unary }, importGithubPullRequest: { name: "ImportGithubPullRequest", I: wu, O: vu, kind: n.MethodKind.Unary }, updateChange: { name: "UpdateChange", I: ia, O: aa, kind: n.MethodKind.Unary }, updateChangeBranch: { name: "UpdateChangeBranch", I: ca, O: la, kind: n.MethodKind.Unary }, getMergeConflictResolution: { name: "GetMergeConflictResolution", I: Lu, O: $u, kind: n.MethodKind.Unary }, applyMergeConflictResolution: { name: "ApplyMergeConflictResolution", I: Qu, O: ju, kind: n.MethodKind.Unary }, undoMergeConflictResolution: { name: "UndoMergeConflictResolution", I: Gu, O: Hu, kind: n.MethodKind.Unary }, deleteChangeHeadBranch: { name: "DeleteChangeHeadBranch", I: ua, O: da, kind: n.MethodKind.Unary }, restorePullRequestBranch: { name: "RestorePullRequestBranch", I: pa, O: ma, kind: n.MethodKind.Unary }, retargetChange: { name: "RetargetChange", I: ha, O: fa, kind: n.MethodKind.Unary }, foldChange: { name: "FoldChange", I: ga, O: ya, kind: n.MethodKind.Unary }, landChangeTreePath: { name: "LandChangeTreePath", I: wa, O: va, kind: n.MethodKind.Unary }, splitChangeIntoStack: { name: "SplitChangeIntoStack", I: _a, O: Sa, kind: n.MethodKind.Unary }, updateChangeMetadata: { name: "UpdateChangeMetadata", I: ba, O: Ea, kind: n.MethodKind.Unary }, updateChangeStatus: { name: "UpdateChangeStatus", I: Ia, O: ka, kind: n.MethodKind.Unary }, createReview: { name: "CreateReview", I: Da, O: Oa, kind: n.MethodKind.Unary }, updateReview: { name: "UpdateReview", I: Na, O: Fa, kind: n.MethodKind.Unary }, dismissReview: { name: "DismissReview", I: Ua, O: La, kind: n.MethodKind.Unary }, listReviews: { name: "ListReviews", I: $a, O: Qa, kind: n.MethodKind.Unary }, listChangeTimelineEvents: { name: "ListChangeTimelineEvents", I: ja, O: Ga, kind: n.MethodKind.Unary }, startReview: { name: "StartReview", I: Gl, O: Hl, kind: n.MethodKind.Unary }, submitReview: { name: "SubmitReview", I: zl, O: Wl, kind: n.MethodKind.Unary }, discardPendingReview: { name: "DiscardPendingReview", I: Vl, O: Kl, kind: n.MethodKind.Unary }, getPendingReview: { name: "GetPendingReview", I: Yl, O: Zl, kind: n.MethodKind.Unary }, requestReview: { name: "RequestReview", I: ec, O: tc, kind: n.MethodKind.Unary }, applyReviewRequestChanges: { name: "ApplyReviewRequestChanges", I: nc, O: sc, kind: n.MethodKind.Unary }, requestReviews: { name: "RequestReviews", I: oc, O: ic, kind: n.MethodKind.Unary }, closeReviewRequest: { name: "CloseReviewRequest", I: ac, O: cc, kind: n.MethodKind.Unary }, listReviewRequestEvents: { name: "ListReviewRequestEvents", I: Za, O: Xa, kind: n.MethodKind.Unary }, addAssignee: { name: "AddAssignee", I: lc, O: uc, kind: n.MethodKind.Unary }, removeAssignee: { name: "RemoveAssignee", I: dc, O: pc, kind: n.MethodKind.Unary }, listOriginRepoReviewerCandidates: { name: "ListOriginRepoReviewerCandidates", I: fc, O: yc, kind: n.MethodKind.Unary }, createComment: { name: "CreateComment", I: Ha, O: za, kind: n.MethodKind.Unary }, listComments: { name: "ListComments", I: Wa, O: Va, kind: n.MethodKind.Unary }, createCommentThread: { name: "CreateCommentThread", I: Zu, O: Xu, kind: n.MethodKind.Unary }, submitPullRequestGateReport: { name: "SubmitPullRequestGateReport", I: tu, O: au, kind: n.MethodKind.Unary }, listPullRequestGateReports: { name: "ListPullRequestGateReports", I: du, O: pu, kind: n.MethodKind.Unary }, uploadPullRequestGateTranscript: { name: "UploadPullRequestGateTranscript", I: ru, O: nu, kind: n.MethodKind.Unary }, listCommentThreads: { name: "ListCommentThreads", I: ed, O: td, kind: n.MethodKind.Unary }, addCommentToThread: { name: "AddCommentToThread", I: rd, O: nd, kind: n.MethodKind.Unary }, resolveCommentThread: { name: "ResolveCommentThread", I: sd, O: od, kind: n.MethodKind.Unary }, reopenCommentThread: { name: "ReopenCommentThread", I: id, O: ad, kind: n.MethodKind.Unary }, updateComment: { name: "UpdateComment", I: cd, O: ld, kind: n.MethodKind.Unary }, deleteComment: { name: "DeleteComment", I: ud, O: dd, kind: n.MethodKind.Unary }, setCommentReaction: { name: "SetCommentReaction", I: pd, O: md, kind: n.MethodKind.Unary }, listCommentReactions: { name: "ListCommentReactions", I: hd, O: fd, kind: n.MethodKind.Unary }, markFileAsViewed: { name: "MarkFileAsViewed", I: yd, O: wd, kind: n.MethodKind.Unary }, unmarkFileAsViewed: { name: "UnmarkFileAsViewed", I: vd, O: _d, kind: n.MethodKind.Unary }, markDirectoryAsViewed: { name: "MarkDirectoryAsViewed", I: Ad, O: Sd, kind: n.MethodKind.Unary }, markAllFilesAsViewed: { name: "MarkAllFilesAsViewed", I: bd, O: Ed, kind: n.MethodKind.Unary }, unmarkAllFilesAsViewed: { name: "UnmarkAllFilesAsViewed", I: Id, O: Cd, kind: n.MethodKind.Unary }, listFileViewedStates: { name: "ListFileViewedStates", I: kd, O: xd, kind: n.MethodKind.Unary }, markPullRequestAsViewed: { name: "MarkPullRequestAsViewed", I: Jd, O: Md, kind: n.MethodKind.Unary }, getGeneratedCodeTour: { name: "GetGeneratedCodeTour", I: Nd, O: Fd, kind: n.MethodKind.Unary }, upsertGeneratedCodeTour: { name: "UpsertGeneratedCodeTour", I: Ud, O: Ld, kind: n.MethodKind.Unary }, enableChangeMergeWhenReady: { name: "EnableChangeMergeWhenReady", I: jd, O: Gd, kind: n.MethodKind.Unary }, getChangeMergeWhenReady: { name: "GetChangeMergeWhenReady", I: Hd, O: zd, kind: n.MethodKind.Unary }, disableChangeMergeWhenReady: { name: "DisableChangeMergeWhenReady", I: Wd, O: Vd, kind: n.MethodKind.Unary }, enqueueForMerge: { name: "EnqueueForMerge", I: pm, O: mm, kind: n.MethodKind.Unary }, cancelMergeQueueEntry: { name: "CancelMergeQueueEntry", I: hm, O: fm, kind: n.MethodKind.Unary }, getMergeQueueStatus: { name: "GetMergeQueueStatus", I: gm, O: ym, kind: n.MethodKind.Unary }, getMergeQueue: { name: "GetMergeQueue", I: wm, O: vm, kind: n.MethodKind.Unary }, getMergeQueueConfig: { name: "GetMergeQueueConfig", I: bm, O: Em, kind: n.MethodKind.Unary }, enableMergeQueue: { name: "EnableMergeQueue", I: Cm, O: km, kind: n.MethodKind.Unary }, disableMergeQueue: { name: "DisableMergeQueue", I: xm, O: Tm, kind: n.MethodKind.Unary }, updateMergeQueueConfig: { name: "UpdateMergeQueueConfig", I: Rm, O: Bm, kind: n.MethodKind.Unary }, getChange: { name: "GetChange", I: wc, O: bc, kind: n.MethodKind.Unary }, getChangeCodeownersApplication: { name: "GetChangeCodeownersApplication", I: Ec, O: Oc, kind: n.MethodKind.Unary }, getProjectedLatestVersions: { name: "GetProjectedLatestVersions", I: $c, O: jc, kind: n.MethodKind.Unary }, getChangeStackPageData: { name: "GetChangeStackPageData", I: $m, O: Qm, kind: n.MethodKind.Unary }, getChangeStack: { name: "GetChangeStack", I: Fc, O: Lc, kind: n.MethodKind.Unary }, listChangeCommits: { name: "ListChangeCommits", I: Gc, O: Hc, kind: n.MethodKind.Unary }, listChanges: { name: "ListChanges", I: Vc, O: sl, kind: n.MethodKind.Unary }, listChangesByHeadRef: { name: "ListChangesByHeadRef", I: Kc, O: Yc, kind: n.MethodKind.Unary }, getCommitReferences: { name: "GetCommitReferences", I: Zc, O: el, kind: n.MethodKind.Unary }, batchGetChanges: { name: "BatchGetChanges", I: rl, O: nl, kind: n.MethodKind.Unary }, searchChanges: { name: "SearchChanges", I: cl, O: ll, kind: n.MethodKind.Unary }, getSectionOfChanges: { name: "GetSectionOfChanges", I: ol, O: il, kind: n.MethodKind.Unary }, countSectionsOfChanges: { name: "CountSectionsOfChanges", I: ul, O: dl, kind: n.MethodKind.Unary }, resolveSectionPersonalBotAuthors: { name: "ResolveSectionPersonalBotAuthors", I: pl, O: ml, kind: n.MethodKind.Unary }, getCiState: { name: "GetCiState", I: op, O: ip, kind: n.MethodKind.Unary }, batchGetCommitCheckRollups: { name: "BatchGetCommitCheckRollups", I: ap, O: lp, kind: n.MethodKind.Unary }, getCheckRun: { name: "GetCheckRun", I: up, O: dp, kind: n.MethodKind.Unary }, listRepoCheckSources: { name: "ListRepoCheckSources", I: pp, O: fp, kind: n.MethodKind.Unary }, getOriginCiJobLog: { name: "GetOriginCiJobLog", I: im, O: am, kind: n.MethodKind.Unary }, postCheckRun: { name: "PostCheckRun", I: bp, O: Cp, kind: n.MethodKind.Unary }, createCheckRunAnnotations: { name: "CreateCheckRunAnnotations", I: Bp, O: Pp, kind: n.MethodKind.Unary }, listCheckRunAnnotations: { name: "ListCheckRunAnnotations", I: Jp, O: Mp, kind: n.MethodKind.Unary }, rerequestCheckRun: { name: "RerequestCheckRun", I: qp, O: Dp, kind: n.MethodKind.Unary }, getChangesetMergeability: { name: "GetChangesetMergeability", I: Op, O: Np, kind: n.MethodKind.Unary }, getReviewRequirements: { name: "GetReviewRequirements", I: Hm, O: zm, kind: n.MethodKind.Unary }, mergeStack: { name: "MergeStack", I: Zp, O: Xp, kind: n.MethodKind.Unary }, revertPullRequest: { name: "RevertPullRequest", I: sa, O: oa, kind: n.MethodKind.Unary }, restackStack: { name: "RestackStack", I: em, O: rm, kind: n.MethodKind.Unary }, getApp: { name: "GetApp", I: ph, O: mh, kind: n.MethodKind.Unary }, createApp: { name: "CreateApp", I: uh, O: dh, kind: n.MethodKind.Unary }, addAppSigningKey: { name: "AddAppSigningKey", I: hh, O: fh, kind: n.MethodKind.Unary }, revokeAppSigningKey: { name: "RevokeAppSigningKey", I: gh, O: yh, kind: n.MethodKind.Unary }, getAppMetadata: { name: "GetAppMetadata", I: rf, O: nf, kind: n.MethodKind.Unary }, listNamespaceApps: { name: "ListNamespaceApps", I: wh, O: vh, kind: n.MethodKind.Unary }, listPublicApps: { name: "ListPublicApps", I: Sh, O: bh, kind: n.MethodKind.Unary }, createInstallation: { name: "CreateInstallation", I: Ch, O: kh, kind: n.MethodKind.Unary }, getInstallation: { name: "GetInstallation", I: xh, O: Th, kind: n.MethodKind.Unary }, listNamespaceInstallations: { name: "ListNamespaceInstallations", I: Rh, O: Bh, kind: n.MethodKind.Unary }, listRepoInstallations: { name: "ListRepoInstallations", I: lf, O: uf, kind: n.MethodKind.Unary }, updateApp: { name: "UpdateApp", I: Ph, O: Qh, kind: n.MethodKind.Unary }, setAppWebhookDeliveryEnabled: { name: "SetAppWebhookDeliveryEnabled", I: Fh, O: Uh, kind: n.MethodKind.Unary }, sendAppWebhookTestDelivery: { name: "SendAppWebhookTestDelivery", I: Lh, O: $h, kind: n.MethodKind.Unary }, deleteApp: { name: "DeleteApp", I: Hh, O: zh, kind: n.MethodKind.Unary }, setAppIcon: { name: "SetAppIcon", I: jh, O: Gh, kind: n.MethodKind.Unary }, deleteInstallation: { name: "DeleteInstallation", I: Wh, O: Vh, kind: n.MethodKind.Unary }, suspendInstallation: { name: "SuspendInstallation", I: sf, O: of, kind: n.MethodKind.Unary }, unsuspendInstallation: { name: "UnsuspendInstallation", I: af, O: cf, kind: n.MethodKind.Unary }, listReposForAppInstall: { name: "ListReposForAppInstall", I: S, O: A, kind: n.MethodKind.Unary }, previewAppInstallation: { name: "PreviewAppInstallation", I: Yh, O: Xh, kind: n.MethodKind.Unary }, requestAppInstall: { name: "RequestAppInstall", I: df, O: pf, kind: n.MethodKind.Unary }, getMyAppInstallRequest: { name: "GetMyAppInstallRequest", I: mf, O: hf, kind: n.MethodKind.Unary }, cancelMyAppInstallRequest: { name: "CancelMyAppInstallRequest", I: ff, O: gf, kind: n.MethodKind.Unary }, listAppInstallRequests: { name: "ListAppInstallRequests", I: vf, O: _f, kind: n.MethodKind.Unary }, denyAppInstallRequests: { name: "DenyAppInstallRequests", I: Af, O: Sf, kind: n.MethodKind.Unary }, getAtlasNode: { name: "GetAtlasNode", I: Bf, O: Jf, kind: n.MethodKind.Unary }, listAtlasNodePaths: { name: "ListAtlasNodePaths", I: Lf, O: Qf, kind: n.MethodKind.Unary }, getAtlasRepoStatus: { name: "GetAtlasRepoStatus", I: qf, O: Df, kind: n.MethodKind.Unary }, setAtlasRepoConfig: { name: "SetAtlasRepoConfig", I: Of, O: Nf, kind: n.MethodKind.Unary }, refreshAtlasRepo: { name: "RefreshAtlasRepo", I: Ff, O: Uf, kind: n.MethodKind.Unary }, listRulesets: { name: "ListRulesets", I: tg, O: rg, kind: n.MethodKind.Unary }, getRuleset: { name: "GetRuleset", I: ng, O: sg, kind: n.MethodKind.Unary }, upsertRuleset: { name: "UpsertRuleset", I: og, O: ig, kind: n.MethodKind.Unary }, deleteRuleset: { name: "DeleteRuleset", I: ag, O: cg, kind: n.MethodKind.Unary }, createLabel: { name: "CreateLabel", I: dg, O: pg, kind: n.MethodKind.Unary }, updateLabel: { name: "UpdateLabel", I: mg, O: hg, kind: n.MethodKind.Unary }, deleteLabel: { name: "DeleteLabel", I: fg, O: gg, kind: n.MethodKind.Unary }, listLabels: { name: "ListLabels", I: yg, O: wg, kind: n.MethodKind.Unary }, getLabelByName: { name: "GetLabelByName", I: vg, O: _g, kind: n.MethodKind.Unary }, addLabelToChange: { name: "AddLabelToChange", I: Ag, O: Sg, kind: n.MethodKind.Unary }, removeLabelFromChange: { name: "RemoveLabelFromChange", I: bg, O: Eg, kind: n.MethodKind.Unary }, checkChangeCreationAccess: { name: "CheckChangeCreationAccess", I: Xl, O: eu, kind: n.MethodKind.Unary }, watchChangeSyncEvents: { name: "WatchChangeSyncEvents", I: Cg, O: kg, kind: n.MethodKind.ServerStreaming }, getChangeSyncSnapshot: { name: "GetChangeSyncSnapshot", I: zg, O: Wg, kind: n.MethodKind.Unary }, watchChangeSyncEventsV2: { name: "WatchChangeSyncEventsV2", I: Dg, O: Qg, kind: n.MethodKind.ServerStreaming }, updateWatchChangeSyncSubscriptions: { name: "UpdateWatchChangeSyncSubscriptions", I: jg, O: Gg, kind: n.MethodKind.Unary }, fastForwardBranch: { name: "FastForwardBranch", I: ei, O: ti, kind: n.MethodKind.Unary }, listRepoExternalCollaborators: { name: "ListRepoExternalCollaborators", I: ar, O: cr, kind: n.MethodKind.Unary }, setRepoExternalCollaboratorAccess: { name: "SetRepoExternalCollaboratorAccess", I: lr, O: ur, kind: n.MethodKind.Unary }, previewAppUserConfirmation: { name: "PreviewAppUserConfirmation", I: bf, O: If, kind: n.MethodKind.Unary }, confirmAppUserConfirmation: { name: "ConfirmAppUserConfirmation", I: Cf, O: kf, kind: n.MethodKind.Unary }, githubOutageDrillProbe: { name: "GithubOutageDrillProbe", I: Yg, O: Zg, kind: n.MethodKind.Unary } } };
  }