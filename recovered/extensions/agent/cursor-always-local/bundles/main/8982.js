// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8982 range:5433653..6022903
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8982: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { OriginService: () => Zg });
    var n2 = r2(6038), s2 = r2(8592);
    class i2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class o2 extends i2 {
      constructor(t3) {
        super(), this.org = "", this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new o2().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new o2().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new o2().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(o2, t3, e3);
      }
      static $() {
        return ["ClientRepoIdentifier|1 org 9|2 name 9"];
      }
    }
    class a extends i2 {
      constructor(t3) {
        super(), this.owner = "", this.repo = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(a, t3, e3);
      }
      static $() {
        return ["GithubRepoIdentifier|1 owner 9|2 repo 9|3 enterprise_id 9?"];
      }
    }
    const u = "origin.v1.";
    class c extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return u;
      }
    }
    var l = (0, s2.QT)(n2.proto3, u, "ListHostedReposOrderBy", [[0, "UNSPECIFIED"], [1, "NAME_ASC"], [2, "NAME_DESC"], [3, "LAST_PUSHED_DESC"], [4, "LAST_PUSHED_ASC"], [5, "ID_ASC"], [6, "ID_DESC"]], 1), m = (0, s2.QT)(n2.proto3, u, "RepoKind", [[0, "UNSPECIFIED"], [1, "STANDARD"], [2, "CURSOR_MARKETPLACE"], [3, "ORIGIN_NATIVE_CURSOR_MARKETPLACE"], [4, "AGENT_TEMP"]], 1), d = (0, s2.QT)(n2.proto3, u, "RepoVisibility", [[0, "UNSPECIFIED"], [1, "INTERNAL"], [2, "PRIVATE"], [3, "PUBLIC"]], 1), f = (0, s2.QT)(n2.proto3, u, "RepoMirrorTransition", [[0, "UNSPECIFIED"], [1, "INBOUND_TO_OUTBOUND"], [2, "OUTBOUND_TO_INBOUND"], [3, "INITIAL_TO_INBOUND"]], 1), p = (0, s2.QT)(n2.proto3, u, "RepoMirrorTransitionJobStatus", [[0, "UNSPECIFIED"], [1, "QUEUED"], [2, "RUNNING"], [3, "SUCCEEDED"], [4, "FAILED_ROLLED_BACK"], [5, "REQUIRES_ATTENTION"], [6, "SUPERSEDED"]], 1), h = (0, s2.QT)(n2.proto3, u, "RepoMirrorTransitionJobPhase", [[0, "UNSPECIFIED"], [1, "QUEUED"], [2, "STARTING"], [3, "DRAINING_WRITES"], [4, "FINALIZING_MIRROR_FETCH"], [5, "FINALIZING_MIRROR_PUSH"], [6, "COMMITTING_TARGET_STATUS"], [7, "ROLLING_BACK"], [8, "COMPLETED"], [9, "INITIALIZING_MIRROR_FETCH"], [10, "ENABLING_GITHUB_FENCE"], [11, "VERIFYING_INTEGRITY"], [12, "REOPENING_INBOUND_MIRROR"], [13, "SNAPSHOTTING_REFS"]], 1), g = (0, s2.QT)(n2.proto3, u, "MirrorStatus", [[0, "UNSPECIFIED"], [1, "TRANSITIONING_TO_INBOUND"], [2, "INBOUND"], [3, "OUTBOUND"], [4, "TRANSITIONING_INBOUND_TO_OUTBOUND"], [5, "TRANSITIONING_OUTBOUND_TO_INBOUND"], [6, "INITIAL_SYNC_PENDING"]], 1), A = (0, s2.QT)(n2.proto3, u, "OriginNamespaceOwnerType", [[0, "UNSPECIFIED"], [1, "TEAM"], [2, "USER"]], 1), _ = (0, s2.QT)(n2.proto3, u, "AuthorizedNamespaceAccessReason", [[0, "UNSPECIFIED"], [1, "TEAM_OWNERSHIP"], [2, "USER_OWNERSHIP"], [3, "EXPLICIT_GRANT"], [4, "NAMESPACE_GRANT"], [5, "REPOSITORY_GRANT"]], 1);
    class y extends c {
      constructor(t3) {
        super(), this.org = "", this.name = "", this.cloneUrl = "", this.defaultBranch = "", this.repoUuid = "", this.mirrorStatus = g.UNSPECIFIED, this.forgeEnvironment = "", this.originNamespaceId = "", this.allowMergeCommit = false, this.allowSquashMerge = false, this.visibility = d.UNSPECIFIED, this.repoKind = m.UNSPECIFIED, this.deleteBranchOnMerge = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RepoSummary|1 org 9|2 name 9|3 clone_url 9|4 default_branch 9|6 github_node_id 9?|7 github_enterprise_id 9?|8 repo_uuid 9|9 mirror_status #0|10 last_pushed_at #1?|11 forge_environment 9|12 origin_namespace_id 9|13 allow_merge_commit 8|14 allow_squash_merge 8|15 visibility #2|16 github_mirror_info #3?|17 deleted_at #1?|18 repo_kind #4|19 owner_type 9?|20 delete_branch_on_merge 8|21 created_at #1?|22 updated_at #1?|23 github_installation_id 4?", g, n2.Timestamp, d, Et, m];
      }
    }
    class w extends c {
      constructor(t3) {
        super(), this.pageSize = 0, this.pageToken = "", this.search = "", this.orderBy = l.UNSPECIFIED, this.namespace = "", this.includeGithubMirrorInfo = false, this.applyRepositoryPickerPolicy = false, this.includeExternalCollaboratorRepos = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ListHostedReposRequest|1 page_size 13|2 page_token 9|3 search 9|4 order_by #0|5 namespace 9|6 include_github_mirror_info 8|7 apply_repository_picker_policy 8|8 include_external_collaborator_repos 8", l];
      }
    }
    class S extends c {
      constructor(t3) {
        super(), this.repositories = [], this.nextPageToken = "", this.totalCount = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ListHostedReposResponse|1 repositories #0*|2 next_page_token 9|3 total_count 13", y];
      }
    }
    class J extends c {
      constructor(t3) {
        super(), this.namespace = "", this.pageSize = 0, this.pageToken = "", this.search = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListReposForAppInstallRequest|1 namespace 9|2 page_size 13|3 page_token 9|4 search 9"];
      }
    }
    class B extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CreateRepoRequest|1 identifier #0|2 default_branch 9?|6 forge_environment 9?|7 repo_kind #1?|8 visibility #2?", o2, m, d];
      }
    }
    class E extends c {
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
        return ["CreateRepoResponse|3 repository #0", st];
      }
    }
    class I extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["PublishAgentTempRepoRequest|1 identifier #0|2 new_name 9?|3 visibility #1?", o2, d];
      }
    }
    class C extends c {
      constructor(t3) {
        super(), this.published = false, n2.proto3.util.initPartial(t3, this);
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
        return ["PublishAgentTempRepoResponse|1 published 8|2 repository #0", st];
      }
    }
    class b extends c {
      constructor(t3) {
        super(), this.targetNamespace = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CreateMirroredRepoRequest|1 github_source #0|2 target_namespace 9|3 forge_environment 9?|4 repo_kind #1?|6 github_installation_id 3?", a, m];
      }
    }
    class k extends c {
      constructor(t3) {
        super(), this.repos = [], n2.proto3.util.initPartial(t3, this);
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
        return ["FilterMirrorableGithubReposRequest|1 repos #0*|2 org_admin_only 8?", a];
      }
    }
    class v extends c {
      constructor(t3) {
        super(), this.mirrorableRepos = [], n2.proto3.util.initPartial(t3, this);
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
        return ["FilterMirrorableGithubReposResponse|1 mirrorable_repos #0*", a];
      }
    }
    class q extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["DetachRepoMirrorRequest|1 identifier #0", o2];
      }
    }
    class R extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["DetachRepoMirrorResponse"];
      }
    }
    class P extends c {
      constructor(t3) {
        super(), this.dryRun = false, this.allowOverwrite = false, this.waitForCatchUp = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ReattachRepoMirrorRequest|1 identifier #0|2 dry_run 8|3 allow_overwrite 8|4 wait_for_catch_up 8", o2];
      }
    }
    class T extends c {
      constructor(t3) {
        super(), this.inSync = false, this.totalMismatches = 0, this.localRefCount = 0, this.remoteRefCount = 0, this.divergedRefs = [], this.divergedRefCount = 0, this.sampleComplete = false, this.sampledMismatchCount = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["MirrorRefComparison|1 in_sync 8|2 total_mismatches 5|3 local_ref_count 5|4 remote_ref_count 5|5 diverged_refs 9*|6 diverged_ref_count 5|7 sample_complete 8|8 sampled_mismatch_count 5"];
      }
    }
    class x extends c {
      constructor(t3) {
        super(), this.deployKeyPresent = false, this.catchUpDispatched = false, this.catchUpCompleted = false, this.githubStateSkipped = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ReattachRepoMirrorResponse|1 repository #0|2 github_state #1|3 deploy_key_present 8|4 catch_up_dispatched 8|5 catch_up_completed 8|6 catch_up_error 9?|7 github_state_skipped 8", st, T];
      }
    }
    class N extends c {
      constructor(t3) {
        super(), this.publicKeyOpenssh = "", this.fingerprintSha256 = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RepoMirrorDeployKeyInfo|1 public_key_openssh 9|2 fingerprint_sha256 9|3 created_at #0|4 updated_at #0", n2.Timestamp];
      }
    }
    class D extends c {
      constructor(t3) {
        super(), this.rotate = false, n2.proto3.util.initPartial(t3, this);
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
        return ["CreateRepoMirrorDeployKeyRequest|1 identifier #0|2 rotate 8", o2];
      }
    }
    class U extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CreateRepoMirrorDeployKeyResponse|1 deploy_key #0", N];
      }
    }
    class Q extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetRepoMirrorDeployKeyRequest|1 identifier #0", o2];
      }
    }
    class M extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetRepoMirrorDeployKeyResponse|1 deploy_key #0?", N];
      }
    }
    class O extends c {
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
        return ["DeleteRepoMirrorDeployKeyRequest|1 identifier #0", o2];
      }
    }
    class F extends c {
      constructor(t3) {
        super(), this.deleted = false, n2.proto3.util.initPartial(t3, this);
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
        return ["DeleteRepoMirrorDeployKeyResponse|1 deleted 8"];
      }
    }
    class L extends c {
      constructor(t3) {
        super(), this.transition = f.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["TransitionRepoMirrorStatusRequest|1 identifier #0|2 transition #1", o2, f];
      }
    }
    class $ extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["TransitionRepoMirrorStatusResponse|1 repository #0|2 active_job_info #1", st, Z];
      }
    }
    class G extends c {
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
        return ["ForceRepoMirrorCutoverRequest|1 identifier #0", o2];
      }
    }
    class H extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ForceRepoMirrorCutoverResponse|1 repository #0|2 active_job_info #1", st, Z];
      }
    }
    class K extends c {
      constructor(t3) {
        super(), this.ref = "", this.wait = false, this.sha = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SyncMirrorRequest|1 identifier #0|2 ref 9|3 wait 8|4 sha 9", o2];
      }
    }
    class V extends c {
      constructor(t3) {
        super(), this.synced = false, n2.proto3.util.initPartial(t3, this);
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
        return ["SyncMirrorResponse|1 synced 8"];
      }
    }
    class z extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetActiveMirrorTransitionJobRequest|1 identifier #0", o2];
      }
    }
    class W extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetActiveMirrorTransitionJobResponse|1 active_job_info #0|2 last_job_info #0", Z];
      }
    }
    class Y extends c {
      constructor(t3) {
        super(), this.jobId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetMirrorTransitionJobRequest|1 identifier #0|2 job_id 9", o2];
      }
    }
    class j extends c {
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
        return ["GetMirrorTransitionJobResponse|1 job #0|2 repository #1", Z, st];
      }
    }
    class X extends c {
      constructor(t3) {
        super(), this.subphase = "", n2.proto3.util.initPartial(t3, this);
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
        return ["MirrorFetchProgress|1 subphase 9|2 bytes_received 4?|3 heartbeat_at #0?", n2.Timestamp];
      }
    }
    class Z extends c {
      constructor(t3) {
        super(), this.id = "", this.transition = f.UNSPECIFIED, this.mirrorStatus = g.UNSPECIFIED, this.status = p.UNSPECIFIED, this.phase = h.UNSPECIFIED, this.attemptCount = 0, this.createdAt = "", this.updatedAt = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RepoMirrorTransitionJob|1 id 9|2 identifier #0|3 transition #1|4 mirror_status #2|5 status #3|6 phase #4|7 attempt_count 13|11 drain_until 9?|12 last_error_code 9?|13 last_error_message 9?|15 started_at 9?|16 completed_at 9?|17 created_at 9|18 updated_at 9|19 fetch_progress #5?", o2, f, g, p, h, X];
      }
    }
    class tt extends c {
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
        return ["DeleteRepoClientRequest|1 identifier #0", o2];
      }
    }
    class et extends c {
      constructor(t3) {
        super(), this.repoUuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DeleteRepoClientResponse|1 repo_uuid 9"];
      }
    }
    class rt extends c {
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
        return ["DeleteMirroredRepoRequest|1 identifier #0", o2];
      }
    }
    class nt extends c {
      constructor(t3) {
        super(), this.repoUuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DeleteMirroredRepoResponse|1 repo_uuid 9"];
      }
    }
    class st extends c {
      constructor(t3) {
        super(), this.defaultBranch = "", this.mirrorStatus = g.UNSPECIFIED, this.repoUuid = "", this.forgeEnvironment = "", this.originNamespaceId = "", this.allowMergeCommit = false, this.allowSquashMerge = false, this.visibility = d.UNSPECIFIED, this.deleteBranchOnMerge = false, n2.proto3.util.initPartial(t3, this);
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
        return ["Repo|1 identifier #0|2 default_branch 9|4 github_node_id 9?|5 github_enterprise_id 9?|6 mirror_status #1|7 active_mirror_transition_job_id 9?|8 repo_uuid 9|9 github_installation_id 4?|10 created_at #2?|11 updated_at #2?|12 last_pushed_at #2?|13 owner_entity_id 3?|14 owner_type 9?|15 forge_environment 9|16 origin_namespace_id 9|17 allow_merge_commit 8|18 allow_squash_merge 8|19 visibility #3|20 delete_branch_on_merge 8|21 deleted_at #2?", o2, g, n2.Timestamp, d];
      }
    }
    class it extends c {
      constructor(t3) {
        super(), this.allowMergeCommit = false, this.allowSquashMerge = false, n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateRepoMergeSettingsRequest|1 identifier #0|2 allow_merge_commit 8|3 allow_squash_merge 8", o2];
      }
    }
    class ot extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateRepoMergeSettingsResponse|1 repository #0", st];
      }
    }
    class at extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateRepoBranchDeletionSettingRequest|1 identifier #0|2 delete_branch_on_merge 8?", o2];
      }
    }
    class ut extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateRepoBranchDeletionSettingResponse|1 repository #0", st];
      }
    }
    class ct extends c {
      constructor(t3) {
        super(), this.pageSize = 0, this.pageToken = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListRepoCloneKitsRequest|1 identifier #0|2 page_size 13|3 page_token 9", o2];
      }
    }
    class lt extends c {
      constructor(t3) {
        super(), this.kits = [], this.nextPageToken = "", this.cloneKitEnabled = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ListRepoCloneKitsResponse|1 kits #0*|2 next_page_token 9|3 clone_kit_enabled 8", mt];
      }
    }
    class mt extends c {
      constructor(t3) {
        super(), this.packHash = "", this.tipCommit = "", this.packSizeBytes = n2.protoInt64.zero, this.idxSizeBytes = n2.protoInt64.zero, this.revSizeBytes = n2.protoInt64.zero, this.kitVersion = "", this.isCurrent = false, this.packSha256 = "", this.idxSha256 = "", this.revSha256 = "", this.chunksSha256 = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mt, t3, e3);
      }
      static $() {
        return ["RepoCloneKitGeneration|1 pack_hash 9|2 tip_commit 9|3 pack_size_bytes 3|4 idx_size_bytes 3|5 rev_size_bytes 3|6 last_published_at #0|7 kit_version 9|8 is_current 8|9 pack_sha256 9|10 idx_sha256 9|11 rev_sha256 9|12 chunks_sha256 9", n2.Timestamp];
      }
    }
    class dt extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateRepoVisibilityRequest|1 identifier #0|2 visibility #1?", o2, d];
      }
    }
    class ft extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateRepoVisibilityResponse|1 repository #0", st];
      }
    }
    class pt extends c {
      constructor(t3) {
        super(), this.defaultBranch = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateRepoDefaultBranchRequest|1 identifier #0|2 default_branch 9", o2];
      }
    }
    class ht extends c {
      constructor(t3) {
        super(), this.defaultBranch = "", this.changed = false, n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateRepoDefaultBranchResponse|1 default_branch 9|2 changed 8|3 repository #0", st];
      }
    }
    class gt extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetRepoRequest|1 identifier #0|2 include_authenticated_viewer 8?|3 include_merge_queues 8?", o2];
      }
    }
    class At extends c {
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
        return ["AuthenticatedOriginViewer|1 identity #0|2 profile #1|3 gate #2|4 policy #3", yt, wt, St, Jt];
      }
    }
    var _t = (0, s2.QT)(n2.proto3, u, "AuthenticatedOriginViewer.OriginDisabledState", [[0, "UNSPECIFIED"], [1, "NOT_DISABLED"], [2, "DISABLED"], [3, "UNAVAILABLE"]], 1);
    class yt extends c {
      constructor(t3) {
        super(), this.authId = "", this.publicUserId = "", this.originAuthorIds = [], n2.proto3.util.initPartial(t3, this);
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
        return ["AuthenticatedOriginViewer.Identity|1 auth_id 9|2 public_user_id 9|3 origin_author_ids 9*"];
      }
    }
    class wt extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["AuthenticatedOriginViewer.Profile|1 email 9?|2 first_name 9?|3 last_name 9?|4 avatar_url 9?"];
      }
    }
    class St extends c {
      constructor(t3) {
        super(), this.isEnterpriseUser = false, n2.proto3.util.initPartial(t3, this);
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
        return ["AuthenticatedOriginViewer.GateAttributes|1 team_id 5?|2 created_at_iso 9?|3 is_enterprise_user 8|4 email_domain_type 9?|5 country 9?|6 organization_id 3?|7 organization_public_id 9?|8 is_team_admin 8?"];
      }
    }
    class Jt extends c {
      constructor(t3) {
        super(), this.originDisabled = _t.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["AuthenticatedOriginViewer.ReviewPolicy|1 origin_disabled #0", _t];
      }
    }
    class Bt extends c {
      constructor(t3) {
        super(), this.mergeQueueTargetRefs = [], this.mergeQueueAvailable = false, n2.proto3.util.initPartial(t3, this);
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
        return ["GetRepoResponse|1 repository #0|2 github_mirror_info #1?|3 merge_queue_target_refs 9*|4 merge_queue_available 8", st, Et];
      }
    }
    class Et extends c {
      constructor(t3) {
        super(), this.githubOwner = "", this.githubRepo = "", this.githubRepoUrl = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RepoGithubMirrorInfo|1 github_owner 9|2 github_repo 9|3 github_repo_url 9"];
      }
    }
    class It extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetRepoWithMirrorInfoResponse|1 repository #0|2 github_mirror_info #1|3 viewer_can_write_changes 8?|4 authenticated_viewer #2?", st, Et, At];
      }
    }
    class Ct extends c {
      constructor(t3) {
        super(), this.githubNodeId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetRepoByGithubMirrorRequest|1 github_node_id 9|2 github_enterprise_id 9?"];
      }
    }
    class bt extends c {
      constructor(t3) {
        super(), this.manifestMs = 0, this.downloadMs = 0, this.verifyMs = 0, this.fetchMs = 0, this.checkoutMs = 0, this.totalMs = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["CloneKitTimingsMs|1 manifest_ms 5|2 download_ms 5|3 verify_ms 5|4 fetch_ms 5|5 checkout_ms 5|6 total_ms 5"];
      }
    }
    class kt extends c {
      constructor(t3) {
        super(), this.invocationId = "", this.artifactBytes = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
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
        return ["RecordCloneKitUsageRequest|1 invocation_id 9|2 identifier #0|3 artifact_bytes 3|4 timings #1?", o2, bt];
      }
    }
    class vt extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RecordCloneKitUsageResponse"];
      }
    }
    class qt extends c {
      constructor(t3) {
        super(), this.id = "", this.ownerType = A.UNSPECIFIED, this.ownerEntityId = n2.protoInt64.zero, this.namespace = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qt, t3, e3);
      }
      static $() {
        return ["OriginNamespace|1 id 9|2 owner_type #0|3 owner_entity_id 3|4 namespace 9", A];
      }
    }
    class Rt extends c {
      constructor(t3) {
        super(), this.ownerType = A.UNSPECIFIED, this.ownerEntityId = n2.protoInt64.zero, this.namespace = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rt, t3, e3);
      }
      static $() {
        return ["CreateOriginNamespaceRequest|1 owner_type #0|2 owner_entity_id 3|3 namespace 9", A];
      }
    }
    class Pt extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CreateOriginNamespaceResponse|1 origin_namespace #0", qt];
      }
    }
    class Tt extends c {
      constructor(t3) {
        super(), this.ownerType = A.UNSPECIFIED, this.ownerEntityId = n2.protoInt64.zero, this.namespace = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SetupTeamNamespaceRequest|1 owner_type #0|2 owner_entity_id 3|3 namespace 9", A];
      }
    }
    class xt extends c {
      constructor(t3) {
        super(), this.namespaceCreated = false, this.grantsChanged = false, n2.proto3.util.initPartial(t3, this);
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
        return ["SetupTeamNamespaceResponse|1 origin_namespace #0|2 namespace_created 8|3 grants_changed 8", qt];
      }
    }
    class Nt extends c {
      constructor(t3) {
        super(), this.namespace = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SetupUserNamespaceRequest|1 namespace 9"];
      }
    }
    class Dt extends c {
      constructor(t3) {
        super(), this.preferredSlug = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SuggestOriginNamespaceRequest|1 preferred_slug 9"];
      }
    }
    class Ut extends c {
      constructor(t3) {
        super(), this.available = false, this.normalizedSlug = "", this.suggestedSlug = "", this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ut().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ut().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ut().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ut, t3, e3);
      }
      static $() {
        return ["SuggestOriginNamespaceResponse|1 available 8|2 normalized_slug 9|3 suggested_slug 9|4 message 9"];
      }
    }
    class Qt extends c {
      constructor(t3) {
        super(), this.namespaceCreated = false, this.grantsChanged = false, n2.proto3.util.initPartial(t3, this);
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
        return ["SetupUserNamespaceResponse|1 origin_namespace #0|2 namespace_created 8|3 grants_changed 8", qt];
      }
    }
    class Mt extends c {
      constructor(t3) {
        super(), this.ownerType = A.UNSPECIFIED, this.ownerEntityId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
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
        return ["GetRepoNamespaceRequest|1 owner_type #0|2 owner_entity_id 3", A];
      }
    }
    class Ot extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ot().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ot().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ot().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ot, t3, e3);
      }
      static $() {
        return ["GetRepoNamespaceResponse|1 origin_namespace #0", qt];
      }
    }
    class Ft extends c {
      constructor(t3) {
        super(), this.teamId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
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
        return ["DoesNamespaceExistForTeamRequest|1 team_id 3"];
      }
    }
    class Lt extends c {
      constructor(t3) {
        super(), this.exists = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lt, t3, e3);
      }
      static $() {
        return ["DoesNamespaceExistForTeamResponse|1 exists 8"];
      }
    }
    class $t extends c {
      constructor(t3) {
        super(), this.includeExplicitGrantNamespaces = false, this.includeAllTeams = false, this.includeGrantedNamespaces = false, n2.proto3.util.initPartial(t3, this);
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
        return ["GetAuthorizedNamespacesRequest|1 include_explicit_grant_namespaces 8|2 include_all_teams 8|3 include_granted_namespaces 8"];
      }
    }
    class Gt extends c {
      constructor(t3) {
        super(), this.namespaces = [], this.originDisabledForTeam = false, n2.proto3.util.initPartial(t3, this);
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
        return ["GetAuthorizedNamespacesResponse|1 namespaces #0*|2 origin_disabled_for_team 8", Ht];
      }
    }
    class Ht extends c {
      constructor(t3) {
        super(), this.accessReason = _.UNSPECIFIED, this.originAllowPublicRepos = false, this.appWorkloadIdentityEnabled = false, n2.proto3.util.initPartial(t3, this);
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
        return ["AuthorizedNamespace|1 namespace #0|2 access_reason #1|3 origin_allow_public_repos 8|4 app_workload_identity_enabled 8", qt, _];
      }
    }
    const Kt = "origin.v1.";
    class Vt extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return Kt;
      }
    }
    var zt = (0, s2.QT)(n2.proto3, Kt, "AuthPolicyAppliesTo", [[0, "UNSPECIFIED"], [1, "REPOSITORY"], [2, "NAMESPACE"], [4, "APP"]], 1), Wt = (0, s2.QT)(n2.proto3, Kt, "GroupScope", [[0, "UNSPECIFIED"], [1, "ORG"], [2, "TEAM"]], 1), Yt = (0, s2.QT)(n2.proto3, Kt, "TeamGroupKind", [[0, "UNSPECIFIED"], [1, "ADMINS"], [2, "MEMBERS"]], 1);
    class jt extends Vt {
      constructor(t3) {
        super(), this.resourceKind = "", this.action = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jt, t3, e3);
      }
      static $() {
        return ["AuthPolicyStatement|1 resource_kind 9|2 action 9"];
      }
    }
    class Xt extends Vt {
      constructor(t3) {
        super(), this.scope = "", this.resource = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["HasOriginPermissionRequest|1 scope 9|2 namespace_slug 9 resource|3 repository #0 resource|4 app_id 9 resource", o2];
      }
    }
    class Zt extends Vt {
      constructor(t3) {
        super(), this.allowed = false, n2.proto3.util.initPartial(t3, this);
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
        return ["HasOriginPermissionResponse|1 allowed 8"];
      }
    }
    class te extends Vt {
      constructor(t3) {
        super(), this.name = "", this.displayName = "", this.description = "", this.appliesTo = zt.UNSPECIFIED, this.isOriginManaged = false, this.isCustom = false, this.statements = [], this.userFacingScopeCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new te().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new te().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new te().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(te, t3, e3);
      }
      static $() {
        return ["AuthPolicySummary|1 name 9|2 display_name 9|3 description 9|4 applies_to #0|5 is_origin_managed 8|6 is_custom 8|7 statements #1*|8 user_facing_scope_count 5", zt, jt];
      }
    }
    class ee extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ee().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ee().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ee().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ee, t3, e3);
      }
      static $() {
        return ["ListRepoAssignablePoliciesRequest|1 identifier #0", o2];
      }
    }
    class re extends Vt {
      constructor(t3) {
        super(), this.policies = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new re().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new re().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new re().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(re, t3, e3);
      }
      static $() {
        return ["ListRepoAssignablePoliciesResponse|1 policies #0*", te];
      }
    }
    class ne extends Vt {
      constructor(t3) {
        super(), this.name = "", this.displayName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ne().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ne().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ne().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ne, t3, e3);
      }
      static $() {
        return ["GrantPolicyRef|1 name 9|2 display_name 9"];
      }
    }
    class se extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new se().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new se().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new se().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(se, t3, e3);
      }
      static $() {
        return ["TeamGroupAccess|1 namespace_policy #0|2 repo_policy #0|3 effective_policy #0", ne];
      }
    }
    class ie extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ie().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ie().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ie().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ie, t3, e3);
      }
      static $() {
        return ["GetRepoTeamAccessRequest|1 identifier #0", o2];
      }
    }
    class oe extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oe, t3, e3);
      }
      static $() {
        return ["GetRepoTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1", qt, se];
      }
    }
    class ae extends Vt {
      constructor(t3) {
        super(), this.kind = "", this.externalId = "", this.displayName = "", this.email = "", this.groupAdminCount = 0, this.groupMemberCount = 0, this.groupScope = Wt.UNSPECIFIED, this.isIdpSynced = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ae().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ae().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ae().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ae, t3, e3);
      }
      static $() {
        return ["GrantPrincipal|1 kind 9|2 external_id 9|3 display_name 9|4 email 9|5 group_admin_count 5|6 group_member_count 5|7 group_scope #0|8 is_idp_synced 8", Wt];
      }
    }
    class ue extends Vt {
      constructor(t3) {
        super(), this.isNamespaceOwned = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ue().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ue().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ue().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ue, t3, e3);
      }
      static $() {
        return ["RepoGrantRow|1 principal #0|2 namespace_policy #1|3 repo_policy #1|4 effective_policy #1|5 is_namespace_owned 8", ae, ne];
      }
    }
    class ce extends Vt {
      constructor(t3) {
        super(), this.page = 0, this.pageSize = 0, this.search = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ce().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ce().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ce().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ce, t3, e3);
      }
      static $() {
        return ["ListRepoGrantsRequest|1 identifier #0|2 page 5|3 page_size 5|4 search 9", o2];
      }
    }
    class le extends Vt {
      constructor(t3) {
        super(), this.rows = [], this.totalCount = 0, this.listTruncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new le().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new le().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new le().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(le, t3, e3);
      }
      static $() {
        return ["ListRepoGrantsResponse|1 rows #0*|2 total_count 5|3 list_truncated 8", ue];
      }
    }
    class me extends Vt {
      constructor(t3) {
        super(), this.group = Yt.UNSPECIFIED, this.policyUpdate = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new me().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new me().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new me().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(me, t3, e3);
      }
      static $() {
        return ["SetRepoTeamAccessRequest|1 identifier #0|2 group #1|3 policy_name 9 policy_update|4 clear_override 8 policy_update", o2, Yt];
      }
    }
    class de extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new de().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new de().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new de().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(de, t3, e3);
      }
      static $() {
        return ["SetRepoTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1", qt, se];
      }
    }
    class fe extends Vt {
      constructor(t3) {
        super(), this.userId = "", this.policyUpdate = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fe, t3, e3);
      }
      static $() {
        return ["SetRepoUserAccessRequest|1 identifier #0|2 user_id 9|3 policy_name 9 policy_update|4 clear_access 8 policy_update", o2];
      }
    }
    class pe extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pe, t3, e3);
      }
      static $() {
        return ["SetRepoUserAccessResponse"];
      }
    }
    class he extends Vt {
      constructor(t3) {
        super(), this.groupId = "", this.policyUpdate = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new he().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new he().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new he().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(he, t3, e3);
      }
      static $() {
        return ["SetRepoGroupAccessRequest|1 identifier #0|2 group_id 9|3 policy_name 9 policy_update|4 clear_access 8 policy_update", o2];
      }
    }
    class ge extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ge().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ge().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ge().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ge, t3, e3);
      }
      static $() {
        return ["SetRepoGroupAccessResponse"];
      }
    }
    class Ae extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ae().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ae().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ae().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ae, t3, e3);
      }
      static $() {
        return ["NamespaceTeamGroupAccess|1 policy #0", ne];
      }
    }
    class _e extends Vt {
      constructor(t3) {
        super(), this.namespaceSlug = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _e().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _e().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _e().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_e, t3, e3);
      }
      static $() {
        return ["GetNamespaceTeamAccessRequest|1 namespace_slug 9"];
      }
    }
    class ye extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ye().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ye().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ye().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ye, t3, e3);
      }
      static $() {
        return ["GetNamespaceTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1", qt, Ae];
      }
    }
    class we extends Vt {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.group = Yt.UNSPECIFIED, this.policyUpdate = { case: void 0 }, this.retainSelfAdmin = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new we().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new we().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new we().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(we, t3, e3);
      }
      static $() {
        return ["SetNamespaceTeamAccessRequest|1 namespace_slug 9|2 group #0|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8", Yt];
      }
    }
    class Se extends Vt {
      constructor(t3) {
        super(), this.selfAdminGranted = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Se().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Se().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Se().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Se, t3, e3);
      }
      static $() {
        return ["SetNamespaceTeamAccessResponse|1 namespace #0|2 team_admins #1|3 team_members #1|4 self_admin_granted 8", qt, Ae];
      }
    }
    class Je extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Je().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Je().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Je().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Je, t3, e3);
      }
      static $() {
        return ["NamespaceGrantRow|1 principal #0|2 policy #1", ae, ne];
      }
    }
    class Be extends Vt {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.page = 0, this.pageSize = 0, this.search = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Be().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Be().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Be().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Be, t3, e3);
      }
      static $() {
        return ["ListNamespaceGrantsRequest|1 namespace_slug 9|2 page 5|3 page_size 5|4 search 9"];
      }
    }
    class Ee extends Vt {
      constructor(t3) {
        super(), this.rows = [], this.totalCount = 0, this.listTruncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ee().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ee().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ee().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ee, t3, e3);
      }
      static $() {
        return ["ListNamespaceGrantsResponse|1 rows #0*|2 total_count 5|3 list_truncated 8", Je];
      }
    }
    class Ie extends Vt {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.userIds = [], this.policyUpdate = { case: void 0 }, this.retainSelfAdmin = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ie().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ie().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ie().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ie, t3, e3);
      }
      static $() {
        return ["SetNamespaceUserAccessRequest|1 namespace_slug 9|2 user_ids 9*|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8"];
      }
    }
    class Ce extends Vt {
      constructor(t3) {
        super(), this.selfAdminGranted = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ce().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ce().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ce().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ce, t3, e3);
      }
      static $() {
        return ["SetNamespaceUserAccessResponse|1 namespace #0|2 self_admin_granted 8", qt];
      }
    }
    class be extends Vt {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.groupIds = [], this.policyUpdate = { case: void 0 }, this.retainSelfAdmin = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new be().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new be().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new be().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(be, t3, e3);
      }
      static $() {
        return ["SetNamespaceGroupAccessRequest|1 namespace_slug 9|2 group_ids 9*|3 policy_name 9 policy_update|4 clear_access 8 policy_update|5 retain_self_admin 8"];
      }
    }
    class ke extends Vt {
      constructor(t3) {
        super(), this.selfAdminGranted = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ke().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ke().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ke().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ke, t3, e3);
      }
      static $() {
        return ["SetNamespaceGroupAccessResponse|1 namespace #0|2 self_admin_granted 8", qt];
      }
    }
    class ve extends Vt {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.groupId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ve().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ve().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ve().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ve, t3, e3);
      }
      static $() {
        return ["ListGroupGrantsInNamespaceRequest|1 namespace_slug 9|2 group_id 9"];
      }
    }
    class qe extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qe, t3, e3);
      }
      static $() {
        return ["GroupRepoGrant|1 repository #0|2 namespace_policy #1|3 repo_policy #1|4 effective_policy #1", o2, ne];
      }
    }
    class Re extends Vt {
      constructor(t3) {
        super(), this.repoGrants = [], this.listTruncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Re().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Re().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Re().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Re, t3, e3);
      }
      static $() {
        return ["ListGroupGrantsInNamespaceResponse|1 principal #0|2 namespace_policy #1|3 repo_grants #2*|4 list_truncated 8", ae, ne, qe];
      }
    }
    class Pe extends Vt {
      constructor(t3) {
        super(), this.namespaceSlug = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pe, t3, e3);
      }
      static $() {
        return ["ListNamespaceAssignablePoliciesRequest|1 namespace_slug 9"];
      }
    }
    class Te extends Vt {
      constructor(t3) {
        super(), this.policies = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Te().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Te().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Te().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Te, t3, e3);
      }
      static $() {
        return ["ListNamespaceAssignablePoliciesResponse|1 policies #0*", te];
      }
    }
    class xe extends Vt {
      constructor(t3) {
        super(), this.id = "", this.inviteeEmail = "", this.policyName = "", this.invitedByPrincipalKind = "", this.invitedByPrincipalId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xe, t3, e3);
      }
      static $() {
        return ["RepoShareInvite|1 id 9|2 invitee_email 9|3 policy_name 9|4 expires_at #0|5 accepted_at #0|6 declined_at #0|7 revoked_at #0|8 created_at #0|9 invited_by_principal_kind 9|10 invited_by_principal_id 9", n2.Timestamp];
      }
    }
    class Ne extends Vt {
      constructor(t3) {
        super(), this.inviteeEmail = "", this.policyName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ne().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ne().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ne().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ne, t3, e3);
      }
      static $() {
        return ["CreateRepoShareInviteRequest|1 identifier #0|2 invitee_email 9|3 policy_name 9", o2];
      }
    }
    class De extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new De().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new De().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new De().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(De, t3, e3);
      }
      static $() {
        return ["CreateRepoShareInviteResponse|1 invite #0", xe];
      }
    }
    class Ue extends Vt {
      constructor(t3) {
        super(), this.inviteeEmails = [], this.policyName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ue().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ue().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ue().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ue, t3, e3);
      }
      static $() {
        return ["CreateRepoShareBatchInvitesRequest|1 identifier #0|2 invitee_emails 9*|3 policy_name 9", o2];
      }
    }
    class Qe extends Vt {
      constructor(t3) {
        super(), this.message = "", this.code = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qe, t3, e3);
      }
      static $() {
        return ["RepoShareInviteAttemptError|1 message 9|2 code 5"];
      }
    }
    class Me extends Vt {
      constructor(t3) {
        super(), this.inviteeEmail = "", this.outcome = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Me().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Me().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Me().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Me, t3, e3);
      }
      static $() {
        return ["RepoShareInviteAttempt|1 invitee_email 9|2 invite #0 outcome|3 error #1 outcome", xe, Qe];
      }
    }
    class Oe extends Vt {
      constructor(t3) {
        super(), this.attempts = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Oe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Oe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Oe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Oe, t3, e3);
      }
      static $() {
        return ["CreateRepoShareBatchInvitesResponse|1 attempts #0*", Me];
      }
    }
    class Fe extends Vt {
      constructor(t3) {
        super(), this.inviteId = "", this.rotateToken = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fe, t3, e3);
      }
      static $() {
        return ["UpdateRepoShareInviteRequest|1 identifier #0|2 invite_id 9|3 policy_name 9?|4 rotate_token 8", o2];
      }
    }
    class Le extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Le().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Le().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Le().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Le, t3, e3);
      }
      static $() {
        return ["UpdateRepoShareInviteResponse|1 invite #0", xe];
      }
    }
    class $e extends Vt {
      constructor(t3) {
        super(), this.inviteId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $e().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $e().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $e().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($e, t3, e3);
      }
      static $() {
        return ["RevokeRepoShareInviteRequest|1 identifier #0|2 invite_id 9", o2];
      }
    }
    class Ge extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ge().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ge().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ge().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ge, t3, e3);
      }
      static $() {
        return ["RevokeRepoShareInviteResponse|1 invite #0", xe];
      }
    }
    class He extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new He().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new He().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new He().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(He, t3, e3);
      }
      static $() {
        return ["ListRepoShareInvitesRequest|1 identifier #0", o2];
      }
    }
    class Ke extends Vt {
      constructor(t3) {
        super(), this.invites = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ke().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ke().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ke().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ke, t3, e3);
      }
      static $() {
        return ["ListRepoShareInvitesResponse|1 invites #0*", xe];
      }
    }
    class Ve extends Vt {
      constructor(t3) {
        super(), this.inviteeEmail = "", this.inviterDisplayName = "", this.policyName = "", this.inviteId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ve().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ve().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ve().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ve, t3, e3);
      }
      static $() {
        return ["RepoShareInviteDetails|1 invitee_email 9|2 repository #0|3 inviter_display_name 9|4 policy_name 9|5 expires_at #1|6 invite_id 9", o2, n2.Timestamp];
      }
    }
    class ze extends Vt {
      constructor(t3) {
        super(), this.token = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ze().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ze().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ze().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ze, t3, e3);
      }
      static $() {
        return ["GetShareInviteByTokenRequest|1 token 9"];
      }
    }
    class We extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new We().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new We().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new We().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(We, t3, e3);
      }
      static $() {
        return ["GetShareInviteByTokenResponse|1 invite #0", Ve];
      }
    }
    class Ye extends Vt {
      constructor(t3) {
        super(), this.locator = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ye().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ye().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ye().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ye, t3, e3);
      }
      static $() {
        return ["DeclineShareInviteRequest|1 token 9 locator|2 invite_id 9 locator"];
      }
    }
    class je extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new je().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new je().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new je().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(je, t3, e3);
      }
      static $() {
        return ["DeclineShareInviteResponse"];
      }
    }
    class Xe extends Vt {
      constructor(t3) {
        super(), this.locator = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xe, t3, e3);
      }
      static $() {
        return ["AcceptShareInviteRequest|1 token 9 locator|2 invite_id 9 locator"];
      }
    }
    class Ze extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ze().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ze().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ze().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ze, t3, e3);
      }
      static $() {
        return ["AcceptShareInviteResponse|1 repository #0", o2];
      }
    }
    class tr extends Vt {
      constructor(t3) {
        super(), this.inviteId = "", this.inviterDisplayName = "", this.policyName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tr, t3, e3);
      }
      static $() {
        return ["MyShareInvite|1 invite_id 9|2 repository #0|3 inviter_display_name 9|4 policy_name 9|5 expires_at #1|6 created_at #1", o2, n2.Timestamp];
      }
    }
    class er extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new er().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new er().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new er().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(er, t3, e3);
      }
      static $() {
        return ["ListMyShareInvitesRequest"];
      }
    }
    class rr extends Vt {
      constructor(t3) {
        super(), this.invites = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rr, t3, e3);
      }
      static $() {
        return ["ListMyShareInvitesResponse|1 invites #0*", tr];
      }
    }
    class nr extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nr, t3, e3);
      }
      static $() {
        return ["MyExternalRepository|1 repository #0|2 policy #1|3 added_at #2", o2, ne, n2.Timestamp];
      }
    }
    class sr extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sr, t3, e3);
      }
      static $() {
        return ["ListMyExternalRepositoriesRequest"];
      }
    }
    class ir extends Vt {
      constructor(t3) {
        super(), this.repositories = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ir().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ir().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ir().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ir, t3, e3);
      }
      static $() {
        return ["ListMyExternalRepositoriesResponse|1 repositories #0*", nr];
      }
    }
    class or extends Vt {
      constructor(t3) {
        super(), this.userId = "", this.displayName = "", this.email = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new or().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new or().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new or().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(or, t3, e3);
      }
      static $() {
        return ["RepoExternalCollaboratorRow|1 user_id 9|2 display_name 9|3 email 9|4 policy #0|5 added_at #1", ne, n2.Timestamp];
      }
    }
    class ar extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ar().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ar().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ar().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ar, t3, e3);
      }
      static $() {
        return ["ListRepoExternalCollaboratorsRequest|1 identifier #0", o2];
      }
    }
    class ur extends Vt {
      constructor(t3) {
        super(), this.rows = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ur().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ur().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ur().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ur, t3, e3);
      }
      static $() {
        return ["ListRepoExternalCollaboratorsResponse|1 rows #0*", or];
      }
    }
    class cr extends Vt {
      constructor(t3) {
        super(), this.userId = "", this.policyUpdate = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cr, t3, e3);
      }
      static $() {
        return ["SetRepoExternalCollaboratorAccessRequest|1 identifier #0|2 user_id 9|3 policy #1 policy_update|4 remove 8 policy_update", o2, ne];
      }
    }
    class lr extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lr, t3, e3);
      }
      static $() {
        return ["SetRepoExternalCollaboratorAccessResponse"];
      }
    }
    class mr extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mr, t3, e3);
      }
      static $() {
        return ["LeaveMyExternalRepositoryRequest|1 identifier #0", o2];
      }
    }
    class dr extends Vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dr, t3, e3);
      }
      static $() {
        return ["LeaveMyExternalRepositoryResponse"];
      }
    }
    class fr extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class pr extends fr {
      constructor(t3) {
        super(), this.id = "", this.name = "", this.algo = "", this.fingerprint = "", this.publicKey = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pr, t3, e3);
      }
      static $() {
        return ["NamespaceSshCertificateAuthority|1 id 9|2 name 9|3 algo 9|4 fingerprint 9|5 public_key 9|6 created_at #0", n2.Timestamp];
      }
    }
    class hr extends fr {
      constructor(t3) {
        super(), this.namespaceSlug = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hr, t3, e3);
      }
      static $() {
        return ["GetNamespaceSshCertificateAuthoritiesRequest|1 namespace_slug 9"];
      }
    }
    class gr extends fr {
      constructor(t3) {
        super(), this.certificateAuthorities = [], this.requireCertificates = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gr, t3, e3);
      }
      static $() {
        return ["GetNamespaceSshCertificateAuthoritiesResponse|1 certificate_authorities #0*|2 require_certificates 8", pr];
      }
    }
    class Ar extends fr {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.publicKey = "", this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ar().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ar().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ar().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ar, t3, e3);
      }
      static $() {
        return ["AddNamespaceSshCertificateAuthorityRequest|1 namespace_slug 9|2 public_key 9|3 name 9"];
      }
    }
    class _r extends fr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _r().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _r().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _r().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_r, t3, e3);
      }
      static $() {
        return ["AddNamespaceSshCertificateAuthorityResponse|1 certificate_authority #0", pr];
      }
    }
    class yr extends fr {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yr, t3, e3);
      }
      static $() {
        return ["RemoveNamespaceSshCertificateAuthorityRequest|1 namespace_slug 9|2 id 9"];
      }
    }
    class wr extends fr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wr, t3, e3);
      }
      static $() {
        return ["RemoveNamespaceSshCertificateAuthorityResponse"];
      }
    }
    class Sr extends fr {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.requireCertificates = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sr, t3, e3);
      }
      static $() {
        return ["SetNamespaceSshRequireCertificatesRequest|1 namespace_slug 9|2 require_certificates 8"];
      }
    }
    class Jr extends fr {
      constructor(t3) {
        super(), this.requireCertificates = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jr, t3, e3);
      }
      static $() {
        return ["SetNamespaceSshRequireCertificatesResponse|1 require_certificates 8"];
      }
    }
    class Br extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Er extends Br {
      constructor(t3) {
        super(), this.cidr = "", this.description = "", this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Er().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Er().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Er().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Er, t3, e3);
      }
      static $() {
        return ["NamespaceInboundIpAllowlistEntry|1 cidr 9|2 description 9|3 enabled 8?|4 created_at #0|5 id 9", n2.Timestamp];
      }
    }
    class Ir extends Br {
      constructor(t3) {
        super(), this.namespaceSlug = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ir().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ir().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ir().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ir, t3, e3);
      }
      static $() {
        return ["GetNamespaceInboundIpAllowlistRequest|1 namespace_slug 9"];
      }
    }
    class Cr extends Br {
      constructor(t3) {
        super(), this.enabled = false, this.entries = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cr, t3, e3);
      }
      static $() {
        return ["GetNamespaceInboundIpAllowlistResponse|1 enabled 8|2 entries #0*", Er];
      }
    }
    class br extends Br {
      constructor(t3) {
        super(), this.namespaceSlug = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new br().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new br().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new br().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(br, t3, e3);
      }
      static $() {
        return ["AddNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 entry #0", Er];
      }
    }
    class kr extends Br {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kr, t3, e3);
      }
      static $() {
        return ["AddNamespaceInboundIpAllowlistEntryResponse|1 entry #0", Er];
      }
    }
    class vr extends Br {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.cidr = "", this.entryId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vr, t3, e3);
      }
      static $() {
        return ["UpdateNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 cidr 9|3 next_cidr 9?|4 description 9?|5 enabled 8?|6 entry_id 9"];
      }
    }
    class qr extends Br {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qr, t3, e3);
      }
      static $() {
        return ["UpdateNamespaceInboundIpAllowlistEntryResponse|1 entry #0", Er];
      }
    }
    class Rr extends Br {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.cidr = "", this.entryId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rr, t3, e3);
      }
      static $() {
        return ["DeleteNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 cidr 9|3 entry_id 9"];
      }
    }
    class Pr extends Br {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pr, t3, e3);
      }
      static $() {
        return ["DeleteNamespaceInboundIpAllowlistEntryResponse"];
      }
    }
    class Tr extends Br {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.enabled = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tr, t3, e3);
      }
      static $() {
        return ["SetNamespaceInboundIpAllowlistEnabledRequest|1 namespace_slug 9|2 enabled 8"];
      }
    }
    class xr extends Br {
      constructor(t3) {
        super(), this.enabled = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xr, t3, e3);
      }
      static $() {
        return ["SetNamespaceInboundIpAllowlistEnabledResponse|1 enabled 8"];
      }
    }
    class Nr extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Dr extends Nr {
      constructor(t3) {
        super(), this.id = "", this.name = "", this.algo = "", this.fingerprint = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dr, t3, e3);
      }
      static $() {
        return ["SshPublicKey|1 id 9|2 name 9|3 algo 9|4 fingerprint 9|5 created_at #0|6 last_used_at #0", n2.Timestamp];
      }
    }
    class Ur extends Nr {
      constructor(t3) {
        super(), this.publicKey = "", this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ur().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ur().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ur().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ur, t3, e3);
      }
      static $() {
        return ["AddSshPublicKeyRequest|1 public_key 9|2 name 9"];
      }
    }
    class Qr extends Nr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qr, t3, e3);
      }
      static $() {
        return ["AddSshPublicKeyResponse|1 ssh_public_key #0", Dr];
      }
    }
    class Mr extends Nr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mr, t3, e3);
      }
      static $() {
        return ["ListSshPublicKeysRequest"];
      }
    }
    class Or extends Nr {
      constructor(t3) {
        super(), this.sshPublicKeys = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Or().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Or().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Or().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Or, t3, e3);
      }
      static $() {
        return ["ListSshPublicKeysResponse|1 ssh_public_keys #0*", Dr];
      }
    }
    class Fr extends Nr {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fr, t3, e3);
      }
      static $() {
        return ["DeleteSshPublicKeyRequest|1 id 9"];
      }
    }
    class Lr extends Nr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lr, t3, e3);
      }
      static $() {
        return ["DeleteSshPublicKeyResponse"];
      }
    }
    const $r = "origin.v1.";
    class Gr extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return $r;
      }
    }
    var Hr = (0, s2.QT)(n2.proto3, $r, "EventType", [[0, "UNSPECIFIED"], [1, "REVIEW_REQUESTED"], [2, "PULL_OPENED"], [3, "PULL_READY"], [4, "PULL_MERGED"], [5, "REVIEW_SUBMITTED"], [6, "COMMENT_CREATED"], [7, "MENTION"]], 1);
    class Kr extends Gr {
      constructor(t3) {
        super(), this.id = "", this.originNamespaceId = "", this.slackTeamId = "", this.ignoreDrafts = false, this.events = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kr, t3, e3);
      }
      static $() {
        return ["OriginSlackNotification|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9|4 ignore_drafts 8|5 events #0*|8 notify_app_bots 8?|6 created_at #1|7 updated_at #1", Hr, n2.Timestamp];
      }
    }
    class Vr extends Gr {
      constructor(t3) {
        super(), this.originNamespaceId = "", this.ignoreDrafts = false, this.events = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vr, t3, e3);
      }
      static $() {
        return ["UpsertOriginUserSlackNotificationRequest|1 origin_namespace_id 9|2 slack_team_id 9?|3 ignore_drafts 8|4 events #0*|5 notify_app_bots 8?", Hr];
      }
    }
    class zr extends Gr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zr, t3, e3);
      }
      static $() {
        return ["UpsertOriginUserSlackNotificationResponse|1 notification #0", Kr];
      }
    }
    class Wr extends Gr {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wr, t3, e3);
      }
      static $() {
        return ["DeleteOriginUserSlackNotificationRequest|1 id 9"];
      }
    }
    class Yr extends Gr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yr, t3, e3);
      }
      static $() {
        return ["DeleteOriginUserSlackNotificationResponse"];
      }
    }
    class jr extends Gr {
      constructor(t3) {
        super(), this.originNamespaceId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jr, t3, e3);
      }
      static $() {
        return ["GetOriginUserSlackNotificationRequest|1 slack_team_id 9?|2 origin_namespace_id 9"];
      }
    }
    class Xr extends Gr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xr, t3, e3);
      }
      static $() {
        return ["GetOriginUserSlackNotificationResponse|1 notification #0?", Kr];
      }
    }
    const Zr = "origin.v1.";
    class tn extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return Zr;
      }
    }
    var en = (0, s2.QT)(n2.proto3, Zr, "CommitEmailGithubState", [[0, "UNSPECIFIED"], [1, "UNKNOWN"], [2, "NOT_ADDED"], [3, "UNVERIFIED"], [4, "VERIFIED"], [5, "NOT_CONNECTED"]], 1), rn = (0, s2.QT)(n2.proto3, Zr, "CommitEmailVerificationState", [[0, "UNSPECIFIED"], [1, "NOT_STARTED"], [2, "WAITING_FOR_EMAIL"], [3, "READY_TO_VERIFY"], [4, "VERIFIED"], [5, "IDENTITY_MISMATCH"], [6, "EMAIL_NOT_RECEIVED"], [7, "EXPIRED"]], 1);
    class nn extends tn {
      constructor(t3) {
        super(), this.noreplyEmail = "", this.eligible = false, this.connectedGithubLogin = "", this.githubState = en.UNSPECIFIED, this.state = rn.UNSPECIFIED, this.verificationUrl = "", this.mismatchedGithubLogin = "", this.githubSettingsEmailsUrl = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nn, t3, e3);
      }
      static $() {
        return ["OriginCommitEmailVerification|1 noreply_email 9|2 eligible 8|3 connected_github_login 9|4 github_state #0|5 state #1|6 verification_url 9|7 mismatched_github_login 9|8 github_settings_emails_url 9|9 updated_at #2", en, rn, n2.Timestamp];
      }
    }
    class sn extends tn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sn, t3, e3);
      }
      static $() {
        return ["GetOriginCommitEmailVerificationRequest"];
      }
    }
    class on extends tn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new on().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new on().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new on().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(on, t3, e3);
      }
      static $() {
        return ["GetOriginCommitEmailVerificationResponse|1 verification #0", nn];
      }
    }
    class an extends tn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new an().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new an().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new an().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(an, t3, e3);
      }
      static $() {
        return ["StartOriginCommitEmailVerificationRequest"];
      }
    }
    class un extends tn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new un().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new un().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new un().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(un, t3, e3);
      }
      static $() {
        return ["StartOriginCommitEmailVerificationResponse|1 verification #0", nn];
      }
    }
    const cn = "origin.v1.";
    class ln extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return cn;
      }
    }
    var mn = (0, s2.QT)(n2.proto3, cn, "SlackReviewReminderDayOfWeek", [[0, "UNSPECIFIED"], [1, "MONDAY"], [2, "TUESDAY"], [3, "WEDNESDAY"], [4, "THURSDAY"], [5, "FRIDAY"], [6, "SATURDAY"], [7, "SUNDAY"]], 1);
    class dn extends ln {
      constructor(t3) {
        super(), this.includeTeamReviewRequests = false, this.ignoreDrafts = false, this.requiredLabels = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dn, t3, e3);
      }
      static $() {
        return ["OriginSlackReviewReminderFilters|1 include_team_review_requests 8|2 ignore_drafts 8|3 require_review_request 8?|4 remind_authors_after_reviews 8?|5 ignore_approved_count 8?|6 required_labels 9*"];
      }
    }
    class fn extends ln {
      constructor(t3) {
        super(), this.id = "", this.originNamespaceId = "", this.slackTeamId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", this.enabled = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fn, t3, e3);
      }
      static $() {
        return ["OriginSlackReviewReminder|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9|4 repo_ids 9*|5 days_of_week #0*|6 times_of_day 9*|7 time_zone 9|8 filters #1|9 enabled 8|10 last_sent_at #2?|11 last_outcome 9?|12 created_at #2|13 updated_at #2", mn, dn, n2.Timestamp];
      }
    }
    class pn extends ln {
      constructor(t3) {
        super(), this.originNamespaceId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pn, t3, e3);
      }
      static $() {
        return ["CreateOriginUserSlackReviewReminderRequest|1 origin_namespace_id 9|2 slack_team_id 9?|3 repo_ids 9*|4 days_of_week #0*|5 times_of_day 9*|6 time_zone 9|7 filters #1|8 enabled 8?", mn, dn];
      }
    }
    class hn extends ln {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hn, t3, e3);
      }
      static $() {
        return ["CreateOriginUserSlackReviewReminderResponse|1 reminder #0", fn];
      }
    }
    class gn extends ln {
      constructor(t3) {
        super(), this.id = "", this.originNamespaceId = "", this.repoIds = [], this.daysOfWeek = [], this.timesOfDay = [], this.timeZone = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gn, t3, e3);
      }
      static $() {
        return ["UpdateOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9|3 slack_team_id 9?|4 repo_ids 9*|5 days_of_week #0*|6 times_of_day 9*|7 time_zone 9|8 filters #1|9 enabled 8?", mn, dn];
      }
    }
    class An extends ln {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new An().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new An().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new An().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(An, t3, e3);
      }
      static $() {
        return ["UpdateOriginUserSlackReviewReminderResponse|1 reminder #0", fn];
      }
    }
    class _n extends ln {
      constructor(t3) {
        super(), this.originNamespaceId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _n().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _n().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _n().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_n, t3, e3);
      }
      static $() {
        return ["ListOriginUserSlackReviewRemindersRequest|1 origin_namespace_id 9|2 slack_team_id 9?"];
      }
    }
    class yn extends ln {
      constructor(t3) {
        super(), this.reminders = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yn, t3, e3);
      }
      static $() {
        return ["ListOriginUserSlackReviewRemindersResponse|1 reminders #0*", fn];
      }
    }
    class wn extends ln {
      constructor(t3) {
        super(), this.id = "", this.originNamespaceId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wn, t3, e3);
      }
      static $() {
        return ["GetOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9"];
      }
    }
    class Sn extends ln {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sn, t3, e3);
      }
      static $() {
        return ["GetOriginUserSlackReviewReminderResponse|1 reminder #0", fn];
      }
    }
    class Jn extends ln {
      constructor(t3) {
        super(), this.id = "", this.originNamespaceId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jn, t3, e3);
      }
      static $() {
        return ["DisableOriginUserSlackReviewReminderRequest|1 id 9|2 origin_namespace_id 9"];
      }
    }
    class Bn extends ln {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bn, t3, e3);
      }
      static $() {
        return ["DisableOriginUserSlackReviewReminderResponse|1 reminder #0", fn];
      }
    }
    const En = "origin.v1.";
    class In extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return En;
      }
    }
    var Cn = (0, s2.QT)(n2.proto3, En, "OriginSlackChannelSubscriptionFeature", [[0, "UNSPECIFIED"], [1, "PULLS"], [2, "REVIEWS"], [3, "COMMENTS"], [4, "COMMITS"], [5, "BRANCHES"]], 1), bn = (0, s2.QT)(n2.proto3, En, "OriginSlackChannelExposureReason", [[0, "UNSPECIFIED"], [1, "SLACK_CONNECT"], [2, "ORG_SHARED"], [3, "GUESTS"]], 1), kn = (0, s2.QT)(n2.proto3, En, "OriginSlackChannelExposureStatus", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "EXPOSED"], [3, "UNKNOWN"]], 1);
    class vn extends In {
      constructor(t3) {
        super(), this.id = "", this.slackTeamId = "", this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vn, t3, e3);
      }
      static $() {
        return ["OriginSlackChannelSubscription|1 id 9|2 slack_team_id 9|3 slack_channel_id 9|4 repo_owner 9|5 repo_name 9|6 features #0*|7 commit_ref_pattern 9?|8 required_labels 9*|9 created_at #1|10 updated_at #1", Cn, n2.Timestamp];
      }
    }
    class qn extends In {
      constructor(t3) {
        super(), this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qn, t3, e3);
      }
      static $() {
        return ["SubscribeOriginSlackChannelRequest|1 slack_channel_id 9|2 slack_team_id 9?|3 repo_owner 9|4 repo_name 9|5 features #0*|6 commit_ref_pattern 9?|7 required_labels 9*", Cn];
      }
    }
    class Rn extends In {
      constructor(t3) {
        super(), this.status = kn.UNSPECIFIED, this.reasons = [], this.repoVisibility = d.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rn, t3, e3);
      }
      static $() {
        return ["OriginSlackChannelExposure|1 status #0|2 reasons #1*|3 repo_visibility #2", kn, bn, d];
      }
    }
    class Pn extends In {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pn, t3, e3);
      }
      static $() {
        return ["SubscribeOriginSlackChannelResponse|1 subscription #0|2 exposure #1", vn, Rn];
      }
    }
    class Tn extends In {
      constructor(t3) {
        super(), this.slackChannelId = "", this.repoOwner = "", this.repoName = "", this.features = [], this.requiredLabels = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tn, t3, e3);
      }
      static $() {
        return ["UnsubscribeOriginSlackChannelRequest|1 slack_channel_id 9|2 slack_team_id 9?|3 repo_owner 9|4 repo_name 9|5 features #0*|6 required_labels 9*", Cn];
      }
    }
    class xn extends In {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xn, t3, e3);
      }
      static $() {
        return ["UnsubscribeOriginSlackChannelResponse|1 subscription #0?", vn];
      }
    }
    class Nn extends In {
      constructor(t3) {
        super(), this.slackChannelId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nn, t3, e3);
      }
      static $() {
        return ["ListOriginSlackChannelSubscriptionsRequest|1 slack_channel_id 9|2 slack_team_id 9?"];
      }
    }
    class Dn extends In {
      constructor(t3) {
        super(), this.subscriptions = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dn, t3, e3);
      }
      static $() {
        return ["ListOriginSlackChannelSubscriptionsResponse|1 subscriptions #0*", vn];
      }
    }
    const Un = "git_forge.v1.";
    class Qn extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return Un;
      }
    }
    var Mn = (0, s2.QT)(n2.proto3, Un, "CommitActivityLineStats", [[0, "UNSPECIFIED"], [1, "INCLUDED"], [2, "OMITTED_TOO_MANY_COMMITS"]], 1), On = (0, s2.QT)(n2.proto3, Un, "CompareCommitsStatus", [[0, "UNSPECIFIED"], [1, "IDENTICAL"], [2, "AHEAD"], [3, "BEHIND"], [4, "DIVERGED"], [5, "NO_MERGE_BASE"]], 1), Fn = (0, s2.QT)(n2.proto3, Un, "MergeMode", [[0, "UNSPECIFIED"], [1, "MERGE_COMMIT"], [2, "SQUASH"]], 1), Ln = (n2.proto3, (0, s2.QT)(n2.proto3, Un, "MergeRenameMode", [[0, "UNSPECIFIED"], [1, "CAPPED"], [2, "CAPPED_WITH_LINEAGE_SHADOW"], [3, "LINEAGE"]], 1)), $n = (0, s2.QT)(n2.proto3, Un, "CanMergeCacheOnlyOutcome", [[0, "UNSPECIFIED"], [1, "HIT"], [2, "MISS"]], 1), Gn = (n2.proto3, n2.proto3, (0, s2.QT)(n2.proto3, Un, "CommitFileMode", [[0, "UNSPECIFIED"], [1, "REGULAR"], [2, "EXECUTABLE"], [3, "SYMLINK"]], 1)), Hn = (0, s2.QT)(n2.proto3, Un, "GrepPriority", [[0, "UNSPECIFIED"], [1, "INTERACTIVE"], [2, "BACKGROUND"]], 1), Kn = (n2.proto3, n2.proto3, (0, s2.QT)(n2.proto3, Un, "GrepLineKind", [[0, "UNSPECIFIED"], [1, "MATCH"], [2, "CONTEXT"]], 1)), Vn = (0, s2.QT)(n2.proto3, Un, "GeneratedAttributesRevision", [[0, "UNSPECIFIED"], [3, "OFF"], [1, "MERGE_BASE"], [2, "HEAD"]], 1), zn = (0, s2.QT)(n2.proto3, Un, "FileMode", [[0, "UNSPECIFIED"], [1, "REGULAR"], [2, "EXECUTABLE"], [3, "SYMLINK"], [4, "GITLINK"]], 1), Wn = (0, s2.QT)(n2.proto3, Un, "ChangeKind", [[0, "UNSPECIFIED"], [1, "ADDED"], [2, "DELETED"], [3, "MODIFIED"], [4, "RENAMED"], [5, "COPIED"]], 1), Yn = (n2.proto3, n2.proto3, (0, s2.QT)(n2.proto3, Un, "ListRefsFilter", [[0, "UNSPECIFIED"], [1, "ALL"], [2, "BRANCHES"], [3, "TAGS"]], 1));
    n2.proto3, n2.proto3;
    class jn extends Qn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jn, t3, e3);
      }
      static $() {
        return ["GetCommitResponse|1 commit #0", hs];
      }
    }
    class Xn extends Qn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xn, t3, e3);
      }
      static $() {
        return ["GetBlobResponse|1 blob #0", _s];
      }
    }
    class Zn extends Qn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zn, t3, e3);
      }
      static $() {
        return ["GetTagResponse|1 tag #0", ns];
      }
    }
    class ts extends Qn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ts().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ts().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ts().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ts, t3, e3);
      }
      static $() {
        return ["GetTreeResponse|1 tree #0", es];
      }
    }
    class es extends Qn {
      constructor(t3) {
        super(), this.sha = "", this.tree = [], this.truncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new es().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new es().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new es().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(es, t3, e3);
      }
      static $() {
        return ["Tree|1 sha 9|2 tree #0*|3 truncated 8", rs];
      }
    }
    class rs extends Qn {
      constructor(t3) {
        super(), this.path = "", this.mode = "", this.type = "", this.sha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rs, t3, e3);
      }
      static $() {
        return ["TreeEntry|1 path 9|2 mode 9|3 type 9|4 sha 9|5 size 4?"];
      }
    }
    class ns extends Qn {
      constructor(t3) {
        super(), this.sha = "", this.name = "", this.message = "", this.objectSha = "", this.objectType = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ns().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ns().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ns().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ns, t3, e3);
      }
      static $() {
        return ["Tag|1 sha 9|2 name 9|3 message 9|4 tagger #0|5 object_sha 9|6 object_type 9", gs];
      }
    }
    class ss extends Qn {
      constructor(t3) {
        super(), this.commits = [], this.truncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ss().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ss().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ss().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ss, t3, e3);
      }
      static $() {
        return ["LookupCommitsResponse|1 commits #0*|2 truncated 8", hs];
      }
    }
    class is extends Qn {
      constructor(t3) {
        super(), this.dayStart = n2.protoInt64.zero, this.commits = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new is().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new is().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new is().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(is, t3, e3);
      }
      static $() {
        return ["CommitActivityDay|1 day_start 3|2 commits 13"];
      }
    }
    class os extends Qn {
      constructor(t3) {
        super(), this.weekStart = n2.protoInt64.zero, this.commits = 0, this.additions = n2.protoInt64.zero, this.deletions = n2.protoInt64.zero, this.lineStatsPartialCommits = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new os().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new os().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new os().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(os, t3, e3);
      }
      static $() {
        return ["CommitActivityWeek|1 week_start 3|2 commits 13|3 additions 4|4 deletions 4|5 line_stats_partial_commits 13"];
      }
    }
    class as extends Qn {
      constructor(t3) {
        super(), this.name = "", this.email = "", this.commits = 0, this.weeks = [], this.additions = n2.protoInt64.zero, this.deletions = n2.protoInt64.zero, this.key = "", this.days = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new as().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new as().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new as().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(as, t3, e3);
      }
      static $() {
        return ["CommitActivityContributor|1 name 9|2 email 9|3 commits 13|4 weeks #0*|5 additions 4|6 deletions 4|7 key 9|8 days #1*", os, is];
      }
    }
    class us extends Qn {
      constructor(t3) {
        super(), this.commitSha = "", this.weeks = [], this.contributors = [], this.totalCommits = 0, this.totalContributors = 0, this.truncated = false, this.lineStats = Mn.UNSPECIFIED, this.lineStatsPartialCommits = 0, this.baseIsAncestor = false, this.daysIncluded = false, this.rootCommitSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new us().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new us().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new us().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(us, t3, e3);
      }
      static $() {
        return ["GetCommitActivityResponse|1 commit_sha 9|2 weeks #0*|3 contributors #1*|4 total_commits 13|5 total_contributors 13|6 truncated 8|7 line_stats #2|8 line_stats_partial_commits 13|9 base_is_ancestor 8|10 days_included 8|11 root_commit_sha 9", os, as, Mn];
      }
    }
    class cs extends Qn {
      constructor(t3) {
        super(), this.commits = [], this.baseCommitSha = "", this.headCommitSha = "", this.mergeBaseCommitSha = "", this.truncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cs, t3, e3);
      }
      static $() {
        return ["ListCommitsInRangeResponse|1 commits #0*|2 base_commit_sha 9|3 head_commit_sha 9|4 merge_base_commit_sha 9|5 truncated 8", hs];
      }
    }
    class ls extends Qn {
      constructor(t3) {
        super(), this.status = On.UNSPECIFIED, this.aheadBy = 0, this.behindBy = 0, this.baseCommitSha = "", this.headCommitSha = "", this.mergeBaseCommitSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ls().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ls().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ls().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ls, t3, e3);
      }
      static $() {
        return ["CompareCommitsResponse|1 status #0|2 ahead_by 5|3 behind_by 5|4 base_commit_sha 9|5 head_commit_sha 9|6 merge_base_commit_sha 9", On];
      }
    }
    class ms extends Qn {
      constructor(t3) {
        super(), this.canMergeWithoutConflicts = false, this.conflictedPaths = [], this.renameMode = Ln.UNSPECIFIED, this.cacheOnlyOutcome = $n.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ms().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ms().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ms().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ms, t3, e3);
      }
      static $() {
        return ["CanMergeResponse|1 can_merge_without_conflicts 8|2 merged_tree_sha 12?|3 conflicted_paths 9*|4 rename_mode #0|5 cache_only_outcome #1", Ln, $n];
      }
    }
    class ds extends Qn {
      constructor(t3) {
        super(), this.content = new Uint8Array(0), this.mode = Gn.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ds().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ds().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ds().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ds, t3, e3);
      }
      static $() {
        return ["CommitFileUpsert|1 content 12|2 mode #0", Gn];
      }
    }
    class fs extends Qn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fs, t3, e3);
      }
      static $() {
        return ["CommitFileDelete"];
      }
    }
    class ps extends Qn {
      constructor(t3) {
        super(), this.path = "", this.operation = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ps().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ps().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ps().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ps, t3, e3);
      }
      static $() {
        return ["CommitFileOperation|1 path 9|2 upsert #0 operation|3 delete #1 operation", ds, fs];
      }
    }
    class hs extends Qn {
      constructor(t3) {
        super(), this.sha = "", this.message = "", this.parentShas = [], this.treeSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hs, t3, e3);
      }
      static $() {
        return ["Commit|1 sha 9|2 message 9|3 author #0|4 committer #0|5 parent_shas 9*|7 tree_sha 9|8 change_id 9?", gs];
      }
    }
    class gs extends Qn {
      constructor(t3) {
        super(), this.name = "", this.email = "", this.timestamp = n2.protoInt64.zero, this.timezoneOffset = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gs, t3, e3);
      }
      static $() {
        return ["Signature|1 name 9|2 email 9|3 timestamp 3|4 timezone_offset 5"];
      }
    }
    class As extends Qn {
      constructor(t3) {
        super(), this.revision = "", this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new As().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new As().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new As().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(As, t3, e3);
      }
      static $() {
        return ["PathIdentifier|1 revision 9|2 path 9"];
      }
    }
    class _s extends Qn {
      constructor(t3) {
        super(), this.size = "", this.encoding = "", this.content = "", this.sha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _s().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _s().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _s().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_s, t3, e3);
      }
      static $() {
        return ["FileContent|1 size 9|2 encoding 9|3 content 9|4 sha 9"];
      }
    }
    class ys extends Qn {
      constructor(t3) {
        super(), this.entries = [], this.sha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ys().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ys().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ys().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ys, t3, e3);
      }
      static $() {
        return ["DirectoryContent|1 entries #0*|2 sha 9", Os];
      }
    }
    class ws extends Qn {
      constructor(t3) {
        super(), this.resolvedCommitSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ws().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ws().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ws().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ws, t3, e3);
      }
      static $() {
        return ["ResolveRefPathResponse|1 path_identifier #0|2 resolved_commit_sha 9", As];
      }
    }
    class Ss extends Qn {
      constructor(t3) {
        super(), this.content = { case: void 0 }, this.resolvedCommitSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ss().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ss().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ss().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ss, t3, e3);
      }
      static $() {
        return ["GetRepoContentResponse|1 file_content #0 content|2 directory_content #1 content|3 path_identifier #2|4 resolved_commit_sha 9", _s, ys, As];
      }
    }
    class Js extends Qn {
      constructor(t3) {
        super(), this.path = "", this.found = false, this.content = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Js().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Js().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Js().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Js, t3, e3);
      }
      static $() {
        return ["BatchRepoContentResult|1 path 9|2 found 8|3 file_content #0 content|4 directory_content #1 content", _s, ys];
      }
    }
    class Bs extends Qn {
      constructor(t3) {
        super(), this.results = [], this.resolvedCommitSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bs, t3, e3);
      }
      static $() {
        return ["BatchGetRepoContentResponse|1 results #0*|2 resolved_commit_sha 9", Js];
      }
    }
    class Es extends Qn {
      constructor(t3) {
        super(), this.type = "", this.isBinary = false, this.tooLargeToIntrospect = false, this.sha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Es().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Es().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Es().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Es, t3, e3);
      }
      static $() {
        return ["RepoContentDetails|1 type 9|2 size 4?|3 is_binary 8|4 too_large_to_introspect 8|5 sha 9"];
      }
    }
    class Is extends Qn {
      constructor(t3) {
        super(), this.resolvedCommitSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Is().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Is().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Is().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Is, t3, e3);
      }
      static $() {
        return ["GetRepoContentDetailsResponse|1 details #0?|2 path_identifier #1|3 resolved_commit_sha 9", Es, As];
      }
    }
    class Cs extends Qn {
      constructor(t3) {
        super(), this.commits = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cs, t3, e3);
      }
      static $() {
        return ["GetFileHistoryResponse|1 commits #0*", Ms];
      }
    }
    class bs extends Qn {
      constructor(t3) {
        super(), this.renameNotChecked = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bs, t3, e3);
      }
      static $() {
        return ["FileHistoryCommitEntry|1 commit #0|2 diff_base_commit_sha 9?|8 path_stats #1?|9 path 9?|10 renamed_from_path 9?|11 rename_not_checked 8", Ms, Ys];
      }
    }
    class ks extends Qn {
      constructor(t3) {
        super(), this.entries = [], this.hasMore = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ks().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ks().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ks().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ks, t3, e3);
      }
      static $() {
        return ["GetFileHistoryPageWithDiffStatsResponse|1 entries #0*|2 has_more 8|3 next_cursor 9?", bs];
      }
    }
    class vs extends Qn {
      constructor(t3) {
        super(), this.commitSha = new Uint8Array(0), this.startInBlamedFile = 0, this.len = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vs, t3, e3);
      }
      static $() {
        return ["BlameLineRange|1 commit_sha 12|2 start_in_blamed_file 13|3 len 13"];
      }
    }
    class qs extends Qn {
      constructor(t3) {
        super(), this.commits = [], this.lineRanges = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qs, t3, e3);
      }
      static $() {
        return ["BlameChunk|1 commits #0*|2 line_ranges #1*", Ms, vs];
      }
    }
    class Rs extends Qn {
      constructor(t3) {
        super(), this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rs, t3, e3);
      }
      static $() {
        return ["TreeEntryBlame|1 name 9|2 last_commit #0", Ms];
      }
    }
    class Ps extends Qn {
      constructor(t3) {
        super(), this.entries = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ps().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ps().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ps().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ps, t3, e3);
      }
      static $() {
        return ["GetTreeBlameResponse|1 entries #0*", Rs];
      }
    }
    class Ts extends Qn {
      constructor(t3) {
        super(), this.paths = [], this.hasMore = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ts().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ts().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ts().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ts, t3, e3);
      }
      static $() {
        return ["GetFuzzyPathsResponse|1 paths 9*|2 has_more 8"];
      }
    }
    class xs extends Qn {
      constructor(t3) {
        super(), this.paths = [], this.hasMore = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xs, t3, e3);
      }
      static $() {
        return ["ListTreePathsResponse|1 paths 9*|2 has_more 8"];
      }
    }
    class Ns extends Qn {
      constructor(t3) {
        super(), this.literal = false, this.caseInsensitive = false, this.wholeWord = false, this.contextBefore = 0, this.contextAfter = 0, this.includes = [], this.excludes = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ns().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ns().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ns().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ns, t3, e3);
      }
      static $() {
        return ["GrepSearchOptions|1 literal 8|2 case_insensitive 8|3 whole_word 8|4 context_before 13|5 context_after 13|6 max_lines 4?|7 filter_path 9?|8 includes 9*|9 excludes 9*"];
      }
    }
    class Ds extends Qn {
      constructor(t3) {
        super(), this.start = 0, this.end = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ds().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ds().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ds().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ds, t3, e3);
      }
      static $() {
        return ["GrepSubmatch|1 start 13|2 end 13"];
      }
    }
    class Us extends Qn {
      constructor(t3) {
        super(), this.path = "", this.lines = "", this.lineNumber = 0, this.absoluteOffset = n2.protoInt64.zero, this.submatches = [], this.kind = Kn.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Us().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Us().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Us().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Us, t3, e3);
      }
      static $() {
        return ["GrepMatch|1 path 9|2 lines 9|3 line_number 13|4 absolute_offset 4|5 submatches #0*|6 kind #1", Ds, Kn];
      }
    }
    class Qs extends Qn {
      constructor(t3) {
        super(), this.matches = [], this.limitHit = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qs, t3, e3);
      }
      static $() {
        return ["GrepRepoChunk|1 matches #0*|2 limit_hit 8", Us];
      }
    }
    class Ms extends Qn {
      constructor(t3) {
        super(), this.sha = new Uint8Array(0), this.summary = "", this.authorName = "", this.authorEmail = "", this.timestamp = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ms().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ms().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ms().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ms, t3, e3);
      }
      static $() {
        return ["ShortCommit|1 sha 12|2 summary 9|3 author_name 9|4 author_email 9|5 timestamp 3"];
      }
    }
    class Os extends Qn {
      constructor(t3) {
        super(), this.type = "", this.name = "", this.path = "", this.sha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Os().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Os().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Os().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Os, t3, e3);
      }
      static $() {
        return ["RepoContentEntry|1 type 9|2 name 9|3 path 9|4 sha 9|5 size 4?"];
      }
    }
    class Fs extends Qn {
      constructor(t3) {
        super(), this.entries = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fs, t3, e3);
      }
      static $() {
        return ["PullRequestDiffChunk|1 header #0?|3 entries #1*", Ws, js];
      }
    }
    class Ls extends Qn {
      constructor(t3) {
        super(), this.hasMore = false, this.entries = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ls().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ls().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ls().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ls, t3, e3);
      }
      static $() {
        return ["CommitDiffHeader|1 commit #0|2 base_commit_sha 9?|3 stats #1|5 has_more 8|6 next_page_cursor 9?|7 entries #2*", hs, Xs, js];
      }
    }
    class $s extends Qn {
      constructor(t3) {
        super(), this.entries = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $s().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $s().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $s().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($s, t3, e3);
      }
      static $() {
        return ["CommitDiffChunk|1 header #0?|3 entries #1*", Ls, js];
      }
    }
    class Gs extends Qn {
      constructor(t3) {
        super(), this.entries = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gs, t3, e3);
      }
      static $() {
        return ["CommitDiff2Header|1 commit #0|2 base_commit_sha 9?|3 entries #1*", hs, js];
      }
    }
    class Hs extends Qn {
      constructor(t3) {
        super(), this.headerIndex = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hs, t3, e3);
      }
      static $() {
        return ["CommitDiff2Entry|1 header_index 13|2 stats #0|3 patch 9?", Ys];
      }
    }
    class Ks extends Qn {
      constructor(t3) {
        super(), this.entries = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ks().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ks().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ks().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ks, t3, e3);
      }
      static $() {
        return ["CommitDiff2Chunk|1 header #0?|2 entries #1*|3 trailer #2?", Gs, Hs, Xs];
      }
    }
    class Vs extends Qn {
      constructor(t3) {
        super(), this.entries = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vs, t3, e3);
      }
      static $() {
        return ["GetCommitChangedPathsResponse|1 base_commit_sha 9?|2 entries #0*", js];
      }
    }
    class zs extends Qn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zs, t3, e3);
      }
      static $() {
        return ["GetCommitDiffStatsResponse|1 base_commit_sha 9?|2 stats #0", Xs];
      }
    }
    class Ws extends Qn {
      constructor(t3) {
        super(), this.mergeBaseCommitSha = "", this.hasMore = false, this.entries = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ws().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ws().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ws().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ws, t3, e3);
      }
      static $() {
        return ["DiffHeader|1 merge_base_commit_sha 9|4 has_more 8|5 next_page_cursor 9?|6 entries #0*", js];
      }
    }
    class Ys extends Qn {
      constructor(t3) {
        super(), this.additions = 0, this.deletions = 0, this.isBinary = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ys().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ys().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ys().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ys, t3, e3);
      }
      static $() {
        return ["FileStats|1 additions 5|2 deletions 5|3 is_binary 8"];
      }
    }
    class js extends Qn {
      constructor(t3) {
        super(), this.path = "", this.changeKind = Wn.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new js().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new js().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new js().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(js, t3, e3);
      }
      static $() {
        return ["DiffEntry|1 path 9|2 old_path 9?|3 change_kind #0|4 old_mode #1?|5 new_mode #1?|6 old_sha 9?|7 new_sha 9?|8 stats #2?|9 patch 9?|10 is_generated 8?", Wn, zn, Ys];
      }
    }
    class Xs extends Qn {
      constructor(t3) {
        super(), this.filesChanged = 0, this.additions = 0, this.deletions = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xs, t3, e3);
      }
      static $() {
        return ["CommitDiffStats|1 files_changed 13|2 additions 5|3 deletions 5"];
      }
    }
    class Zs extends Qn {
      constructor(t3) {
        super(), this.name = "", this.targetSha = "", this.objectSha = "", this.objectType = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zs, t3, e3);
      }
      static $() {
        return ["RefInfo|1 name 9|2 target_sha 9|3 object_sha 9|4 object_type 9"];
      }
    }
    class ti extends Qn {
      constructor(t3) {
        super(), this.refs = [], this.refInfos = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ti().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ti().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ti().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ti, t3, e3);
      }
      static $() {
        return ["ListRefsResponse|1 refs 9*|2 ref_infos #0*|5 next_page_token 9?", Zs];
      }
    }
    class ei extends Qn {
      constructor(t3) {
        super(), this.refInfos = [], this.exactMatch = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ei().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ei().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ei().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ei, t3, e3);
      }
      static $() {
        return ["SearchRefsResponse|1 ref_infos #0*|2 exact_match 8", Zs];
      }
    }
    const ri = "origin.v1.";
    class ni extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return ri;
      }
    }
    var si = (0, s2.QT)(n2.proto3, ri, "GithubCodeownersFileStatus", [[0, "UNSPECIFIED"], [1, "FOUND"], [2, "MISSING"], [3, "TOO_LARGE"], [4, "NOT_SERVED"], [5, "TOO_COMPLEX"]], 1), ii = (0, s2.QT)(n2.proto3, ri, "GithubCodeownerViewerMatch", [[0, "UNSPECIFIED"], [1, "MATCH"], [2, "NO_MATCH"], [3, "UNKNOWN"]], 1), oi = (0, s2.QT)(n2.proto3, ri, "GithubCodeownersViewerMembershipUnknownReason", [[0, "UNSPECIFIED"], [1, "LOOKUP_DISABLED"], [2, "NOT_A_USER"], [3, "NO_LINKED_GITHUB_LOGIN"], [4, "ORGANIZATION_NOT_SYNCED"], [5, "GITHUB_ENTERPRISE_UNSUPPORTED"], [6, "CACHE_UNAVAILABLE"], [7, "TOO_MANY_OWNERS"], [8, "CACHE_CONTRACT_ERROR"], [9, "REPOSITORY_OWNER_UNRESOLVED"]], 1);
    class ai extends ni {
      constructor(t3) {
        super(), this.refPath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ai().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ai().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ai().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ai, t3, e3);
      }
      static $() {
        return ["ResolveRepoPathClientRequest|1 identifier #0|2 ref_path 9", o2];
      }
    }
    class ui extends ni {
      constructor(t3) {
        super(), this.refPath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ui().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ui().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ui().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ui, t3, e3);
      }
      static $() {
        return ["GetRepoContentClientRequest|1 identifier #0|2 ref_path 9|3 max_file_size 4?", o2];
      }
    }
    class ci extends ni {
      constructor(t3) {
        super(), this.refPath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ci().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ci().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ci().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ci, t3, e3);
      }
      static $() {
        return ["MintRawRepoFileLinkClientRequest|1 identifier #0|2 ref_path 9", o2];
      }
    }
    class li extends ni {
      constructor(t3) {
        super(), this.token = "", this.rawOrigin = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new li().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new li().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new li().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(li, t3, e3);
      }
      static $() {
        return ["MintRawRepoFileLinkClientResponse|1 token 9|2 path_identifier #0|3 raw_origin 9", As];
      }
    }
    class mi extends ni {
      constructor(t3) {
        super(), this.ref = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mi, t3, e3);
      }
      static $() {
        return ["GetRepoTarballClientRequest|1 identifier #0|2 ref 9", o2];
      }
    }
    class di extends ni {
      constructor(t3) {
        super(), this.downloadUrl = "", this.sha = "", this.filename = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new di().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new di().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new di().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(di, t3, e3);
      }
      static $() {
        return ["GetRepoTarballClientResponse|1 download_url 9|2 sha 9|3 filename 9"];
      }
    }
    class fi extends ni {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fi, t3, e3);
      }
      static $() {
        return ["GetRepoContentAtShaClientRequest|1 identifier #0|2 path_identifier #1|3 max_file_size 4?", o2, As];
      }
    }
    class pi extends ni {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pi, t3, e3);
      }
      static $() {
        return ["GetRepoContentDetailsAtShaClientRequest|1 identifier #0|2 path_identifier #1", o2, As];
      }
    }
    class hi extends ni {
      constructor(t3) {
        super(), this.revision = "", this.paths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hi, t3, e3);
      }
      static $() {
        return ["BatchGetRepoContentAtShaClientRequest|1 identifier #0|2 revision 9|3 paths 9*|4 max_file_size 4?", o2];
      }
    }
    class gi extends ni {
      constructor(t3) {
        super(), this.baseRef = "", this.paths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gi, t3, e3);
      }
      static $() {
        return ["GetRepoCodeownersClientRequest|1 identifier #0|2 base_ref 9|3 paths 9*", o2];
      }
    }
    class Ai extends ni {
      constructor(t3) {
        super(), this.owners = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ai().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ai().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ai().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ai, t3, e3);
      }
      static $() {
        return ["CodeownersOwners|1 owners 9*"];
      }
    }
    class _i extends ni {
      constructor(t3) {
        super(), this.codeownersByPath = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _i().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _i().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _i().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_i, t3, e3);
      }
      static $() {
        return ["GetRepoCodeownersResponse|1 codeowners_by_path 9,#0", Ai];
      }
    }
    class yi extends ni {
      constructor(t3) {
        super(), this.baseSha = "", this.paths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yi, t3, e3);
      }
      static $() {
        return ["GetGithubRepoCodeownersClientRequest|1 identifier #0|2 base_sha 9|3 paths 9*", o2];
      }
    }
    class wi extends ni {
      constructor(t3) {
        super(), this.codeownersByPath = {}, this.fileStatus = si.UNSPECIFIED, this.filePath = "", this.viewerMatchByOwner = {}, this.viewerMembershipKnown = false, this.viewerMembershipUnknownReason = oi.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wi, t3, e3);
      }
      static $() {
        return ["GetGithubRepoCodeownersResponse|1 codeowners_by_path 9,#0|2 file_status #1|3 file_path 9|4 viewer_match_by_owner 9,#2|5 viewer_membership_known 8|6 viewer_membership_unknown_reason #3", Ai, si, ii, oi];
      }
    }
    class Si extends ni {
      constructor(t3) {
        super(), this.commitSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Si().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Si().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Si().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Si, t3, e3);
      }
      static $() {
        return ["GetCommitClientRequest|1 identifier #0|2 commit_sha 9", o2];
      }
    }
    class Ji extends ni {
      constructor(t3) {
        super(), this.blobSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ji().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ji().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ji().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ji, t3, e3);
      }
      static $() {
        return ["GetBlobClientRequest|1 identifier #0|2 blob_sha 9", o2];
      }
    }
    class Bi extends ni {
      constructor(t3) {
        super(), this.tagSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bi, t3, e3);
      }
      static $() {
        return ["GetTagClientRequest|1 identifier #0|2 tag_sha 9", o2];
      }
    }
    class Ei extends ni {
      constructor(t3) {
        super(), this.treeSha = "", this.recursive = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ei().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ei().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ei().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ei, t3, e3);
      }
      static $() {
        return ["GetTreeClientRequest|1 identifier #0|2 tree_sha 9|3 recursive 8", o2];
      }
    }
    class Ii extends ni {
      constructor(t3) {
        super(), this.startCommitSha = "", this.maxCommits = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ii().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ii().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ii().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ii, t3, e3);
      }
      static $() {
        return ["GetFileHistoryClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 max_commits 13", o2];
      }
    }
    class Ci extends ni {
      constructor(t3) {
        super(), this.startCommitSha = "", this.pageSize = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ci().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ci().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ci().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ci, t3, e3);
      }
      static $() {
        return ["GetFileHistoryPageClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 page_size 13|5 next_cursor 9?", o2];
      }
    }
    class bi extends ni {
      constructor(t3) {
        super(), this.commits = [], this.hasMore = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bi, t3, e3);
      }
      static $() {
        return ["GetFileHistoryPageResponse|1 commits #0*|2 has_more 8|3 next_cursor 9?", Ms];
      }
    }
    class ki extends ni {
      constructor(t3) {
        super(), this.startCommitSha = "", this.pageSize = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ki().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ki().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ki().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ki, t3, e3);
      }
      static $() {
        return ["GetFileHistoryPageWithDiffStatsClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9?|4 page_size 13|5 next_cursor 9?", o2];
      }
    }
    class vi extends ni {
      constructor(t3) {
        super(), this.startCommitSha = "", this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vi, t3, e3);
      }
      static $() {
        return ["GetBlameClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9", o2];
      }
    }
    class qi extends ni {
      constructor(t3) {
        super(), this.startCommitSha = "", this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qi, t3, e3);
      }
      static $() {
        return ["GetTreeBlameClientRequest|1 identifier #0|2 start_commit_sha 9|3 path 9", o2];
      }
    }
    class Ri extends ni {
      constructor(t3) {
        super(), this.commitSha = "", this.query = "", this.limit = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ri().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ri().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ri().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ri, t3, e3);
      }
      static $() {
        return ["GetFuzzyPathsClientRequest|1 identifier #0|2 commit_sha 9|3 query 9|4 limit 13", o2];
      }
    }
    class Pi extends ni {
      constructor(t3) {
        super(), this.revision = "", this.includes = [], this.excludes = [], this.limit = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pi, t3, e3);
      }
      static $() {
        return ["ListRepoPathsClientRequest|1 identifier #0|2 revision 9|3 includes 9*|4 excludes 9*|5 limit 13", o2];
      }
    }
    class Ti extends ni {
      constructor(t3) {
        super(), this.revision = "", this.query = "", this.maxResults = 0, this.maxTotalLines = 0, this.priority = Hn.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ti().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ti().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ti().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ti, t3, e3);
      }
      static $() {
        return ["GrepRepoClientRequest|1 identifier #0|2 revision 9|3 query 9|4 options #1|5 max_results 13|6 max_total_lines 13|7 priority #2", o2, Ns, Hn];
      }
    }
    class xi extends ni {
      constructor(t3) {
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.contextLines = 0, this.generatedAttributesRevision = Vn.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xi, t3, e3);
      }
      static $() {
        return ["GetPullRequestDiffClientRequest|1 identifier #0|2 head_commit_sha 9|3 base_commit_sha 9|4 include_patches 8?|5 include_file_stats 8?|6 page_size 13?|7 page_cursor 9?|8 context_lines 13|9 generated_attributes_revision #1", o2, Vn];
      }
    }
    class Ni extends ni {
      constructor(t3) {
        super(), this.commitSha = "", this.includePatches = false, this.paths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ni().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ni().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ni().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ni, t3, e3);
      }
      static $() {
        return ["GetCommitDiffClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?|4 include_patches 8|5 paths 9*|6 page_size 13?|7 page_cursor 9?", o2];
      }
    }
    class Di extends ni {
      constructor(t3) {
        super(), this.commitSha = "", this.includePatches = false, this.paths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Di().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Di().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Di().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Di, t3, e3);
      }
      static $() {
        return ["GetCommitDiff2ClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?|4 include_patches 8|5 paths 9*", o2];
      }
    }
    class Ui extends ni {
      constructor(t3) {
        super(), this.commitSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ui().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ui().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ui().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ui, t3, e3);
      }
      static $() {
        return ["GetCommitChangedPathsClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?", o2];
      }
    }
    class Qi extends ni {
      constructor(t3) {
        super(), this.commitSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qi, t3, e3);
      }
      static $() {
        return ["GetCommitDiffStatsClientRequest|1 identifier #0|2 commit_sha 9|3 base_commit_sha 9?", o2];
      }
    }
    class Mi extends ni {
      constructor(t3) {
        super(), this.filter = Yn.UNSPECIFIED, this.namesOnly = false, this.prefix = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mi, t3, e3);
      }
      static $() {
        return ["ListRefsClientRequest|1 identifier #0|2 filter #1|3 names_only 8|4 prefix 9|5 limit 13?|7 page_token 9?", o2, Yn];
      }
    }
    class Oi extends ni {
      constructor(t3) {
        super(), this.filter = Yn.UNSPECIFIED, this.query = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Oi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Oi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Oi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Oi, t3, e3);
      }
      static $() {
        return ["SearchRefsClientRequest|1 identifier #0|2 filter #1|3 query 9|4 limit 13?", o2, Yn];
      }
    }
    class Fi extends ni {
      constructor(t3) {
        super(), this.shaPrefix = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fi, t3, e3);
      }
      static $() {
        return ["LookupCommitsClientRequest|1 identifier #0|2 sha_prefix 9|3 limit 13?", o2];
      }
    }
    class Li extends ni {
      constructor(t3) {
        super(), this.revision = "", this.includeLineStats = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Li().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Li().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Li().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Li, t3, e3);
      }
      static $() {
        return ["GetCommitActivityClientRequest|1 identifier #0|2 revision 9|3 since_timestamp 3?|4 max_contributors 13?|5 until_timestamp 3?|6 include_line_stats 8", o2];
      }
    }
    class $i extends ni {
      constructor(t3) {
        super(), this.usersByContributorKey = {}, this.pending = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $i().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $i().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $i().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($i, t3, e3);
      }
      static $() {
        return ["GetCommitActivityClientResponse|1 activity #0|2 users_by_contributor_key 9,#1|3 pending 8", us, Gi];
      }
    }
    class Gi extends ni {
      constructor(t3) {
        super(), this.userId = "", this.displayName = "", this.avatarUrl = "", this.profileHandle = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gi, t3, e3);
      }
      static $() {
        return ["CommitActivityContributorUser|1 user_id 9|2 display_name 9|3 avatar_url 9|4 profile_handle 9"];
      }
    }
    class Hi extends ni {
      constructor(t3) {
        super(), this.ours = "", this.theirs = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hi, t3, e3);
      }
      static $() {
        return ["CanMergeClientRequest|1 identifier #0|2 ours 9|3 theirs 9", o2];
      }
    }
    class Ki extends ni {
      constructor(t3) {
        super(), this.baseRevision = "", this.headRevision = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ki().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ki().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ki().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ki, t3, e3);
      }
      static $() {
        return ["CompareCommitsClientRequest|1 identifier #0|2 base_revision 9|3 head_revision 9", o2];
      }
    }
    class Vi extends ni {
      constructor(t3) {
        super(), this.baseRevision = "", this.headRevision = "", this.oldestFirst = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vi, t3, e3);
      }
      static $() {
        return ["ListCommitsInRangeClientRequest|1 identifier #0|2 base_revision 9|3 head_revision 9|4 max_commits 5?|5 oldest_first 8", o2];
      }
    }
    class zi extends ni {
      constructor(t3) {
        super(), this.branch = "", this.message = "", this.files = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zi, t3, e3);
      }
      static $() {
        return ["CreateCommitFromFilesClientRequest|1 identifier #0|2 branch 9|3 expected_head_sha 9?|4 message 9|5 author #1|6 committer #1?|7 files #2*", o2, gs, ps];
      }
    }
    class Wi extends ni {
      constructor(t3) {
        super(), this.commitSha = "", this.treeSha = "", this.oldHeadSha = "", this.reverseMirrorPushFailed = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wi, t3, e3);
      }
      static $() {
        return ["CreateCommitFromFilesClientResponse|1 commit_sha 9|2 tree_sha 9|3 old_head_sha 9|4 reverse_mirror_push_failed 8"];
      }
    }
    class Yi extends ni {
      constructor(t3) {
        super(), this.path = "", this.changeKind = Wn.UNSPECIFIED, this.isBinary = false, this.patch = "", this.additions = 0, this.deletions = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yi, t3, e3);
      }
      static $() {
        return ["CollectedFileDiff|1 path 9|2 old_path 9?|3 change_kind #0|4 is_binary 8|5 patch 9|6 additions 5|7 deletions 5|8 is_generated 8?|9 old_mode #1?|10 new_mode #1?", Wn, zn];
      }
    }
    class ji extends ni {
      constructor(t3) {
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.contextLines = 0, this.generatedAttributesRevision = Vn.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ji().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ji().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ji().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ji, t3, e3);
      }
      static $() {
        return ["GetCollectedPullRequestDiffRequest|1 identifier #0|2 head_commit_sha 9|3 base_commit_sha 9|4 include_patches 8?|5 include_file_stats 8?|6 page_size 13?|7 page_cursor 9?|8 change_number 4?|9 version_number 4?|10 context_lines 13|11 generated_attributes_revision #1|12 project_latest_version_base 8?", o2, Vn];
      }
    }
    class Xi extends ni {
      constructor(t3) {
        super(), this.mergeBaseSha = "", this.files = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xi, t3, e3);
      }
      static $() {
        return ["GetCollectedPullRequestDiffResponse|1 merge_base_sha 9|2 files #0*|4 next_page_cursor 9?|5 resolved_head_sha 9?|6 resolved_base_sha 9?|7 resolved_version_number 4?", Yi];
      }
    }
    class Zi extends ni {
      constructor(t3) {
        super(), this.branch = "", this.expectedHeadSha = "", this.newHeadSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zi, t3, e3);
      }
      static $() {
        return ["FastForwardBranchClientRequest|1 identifier #0|2 branch 9|3 expected_head_sha 9|4 new_head_sha 9", o2];
      }
    }
    class to extends ni {
      constructor(t3) {
        super(), this.oldHeadSha = "", this.newHeadSha = "", this.unchanged = false, this.reverseMirrorPushFailed = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new to().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new to().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new to().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(to, t3, e3);
      }
      static $() {
        return ["FastForwardBranchClientResponse|1 old_head_sha 9|2 new_head_sha 9|3 unchanged 8|4 reverse_mirror_push_failed 8"];
      }
    }
    const eo = "origin.v1.";
    class ro extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return eo;
      }
    }
    var no = (0, s2.QT)(n2.proto3, eo, "CodeIntelligenceProvenance", [[0, "UNSPECIFIED"], [1, "EXACT_SCIP"], [2, "HYBRID"], [3, "SEARCH"]], 1);
    class so extends ro {
      constructor(t3) {
        super(), this.indexedCommitSha = "", this.provenance = no.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new so().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new so().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new so().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(so, t3, e3);
      }
      static $() {
        return ["CodeIntelligenceIndex|1 indexed_commit_sha 9|2 provenance #0", no];
      }
    }
    class io extends ro {
      constructor(t3) {
        super(), this.line = 0, this.utf16Column = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new io().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new io().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new io().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(io, t3, e3);
      }
      static $() {
        return ["CodeIntelligencePosition|1 line 13|2 utf16_column 13"];
      }
    }
    class oo extends ro {
      constructor(t3) {
        super(), this.startLine = 0, this.startUtf16Column = 0, this.endLine = 0, this.endUtf16Column = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oo, t3, e3);
      }
      static $() {
        return ["CodeIntelligenceRange|1 start_line 13|2 start_utf16_column 13|3 end_line 13|4 end_utf16_column 13"];
      }
    }
    class ao extends ro {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ao().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ao().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ao().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ao, t3, e3);
      }
      static $() {
        return ["CodeIntelligenceLocation|1 path 9|2 range #0", oo];
      }
    }
    class uo extends ro {
      constructor(t3) {
        super(), this.opaqueId = "", this.definitions = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new uo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new uo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new uo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(uo, t3, e3);
      }
      static $() {
        return ["ResolvedCodeIntelligenceSymbol|1 opaque_id 9|2 occurrence_range #0|3 definition #1?|4 signature 9?|5 documentation 9?|6 definitions #1*|7 kind 9?", oo, ao];
      }
    }
    class co extends ro {
      constructor(t3) {
        super(), this.commitSha = "", this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new co().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new co().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new co().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(co, t3, e3);
      }
      static $() {
        return ["ResolveCodeIntelligenceSymbolAtPositionRequest|1 repo #0|2 commit_sha 9|3 path 9|4 position #1", o2, io];
      }
    }
    class lo extends ro {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lo, t3, e3);
      }
      static $() {
        return ["ResolveCodeIntelligenceSymbolAtPositionResponse|1 index #0|2 symbol #1?", so, uo];
      }
    }
    class mo extends ro {
      constructor(t3) {
        super(), this.commitSha = "", this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mo, t3, e3);
      }
      static $() {
        return ["FindCodeIntelligenceReferencesAtPositionRequest|1 repo #0|2 commit_sha 9|3 path 9|4 position #1", o2, io];
      }
    }
    class fo extends ro {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fo, t3, e3);
      }
      static $() {
        return ["FindCodeIntelligenceReferencesAtPositionHeader|1 index #0|2 symbol #1?", so, uo];
      }
    }
    class po extends ro {
      constructor(t3) {
        super(), this.isDefinition = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new po().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new po().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new po().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(po, t3, e3);
      }
      static $() {
        return ["FindCodeIntelligenceReferencesAtPositionResult|1 location #0|2 is_definition 8", ao];
      }
    }
    class ho extends ro {
      constructor(t3) {
        super(), this.totalCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ho().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ho().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ho().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ho, t3, e3);
      }
      static $() {
        return ["FindCodeIntelligenceReferencesAtPositionTrailer|1 total_count 13"];
      }
    }
    class go extends ro {
      constructor(t3) {
        super(), this.chunk = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new go().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new go().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new go().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(go, t3, e3);
      }
      static $() {
        return ["FindCodeIntelligenceReferencesAtPositionResponse|1 header #0 chunk|2 result #1 chunk|3 trailer #2 chunk", fo, po, ho];
      }
    }
    const Ao = "origin.v1.";
    class _o extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return Ao;
      }
    }
    var yo = (0, s2.QT)(n2.proto3, Ao, "DiffRelayOwnerPrivacyClass", [[0, "UNSPECIFIED"], [1, "NO_DURABLE"], [2, "NO_TRAINING"], [3, "TRAINING_ALLOWED"]], 1), wo = (0, s2.QT)(n2.proto3, Ao, "DiffRelayContentEncoding", [[0, "UNSPECIFIED"], [1, "IDENTITY"]], 1), So = (0, s2.QT)(n2.proto3, Ao, "DiffRelayNotServedReason", [[0, "UNSPECIFIED"], [1, "RELAY_DISABLED"], [2, "VIEWER_GATE_OFF"], [3, "REPO_KILL_SWITCH"], [4, "GITHUB_FACT_MISSING"], [5, "GITHUB_FACT_STALE"], [6, "MIRROR_INCOMPLETE"], [7, "MIRROR_STATE_CHANGED"], [8, "MIRROR_UNVERIFIED"]], 1);
    class Jo extends _o {
      constructor(t3) {
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.baseIsMergeBase = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jo, t3, e3);
      }
      static $() {
        return ["DiffRelayTarget|1 identifier #0|2 change_number 4?|3 version_number 4?|4 head_commit_sha 9|5 base_commit_sha 9|6 base_is_merge_base 8|7 from #1?", o2, Bo];
      }
    }
    class Bo extends _o {
      constructor(t3) {
        super(), this.headCommitSha = "", this.baseCommitSha = "", this.baseIsMergeBase = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bo, t3, e3);
      }
      static $() {
        return ["DiffRelayCommitPair|1 head_commit_sha 9|2 base_commit_sha 9|3 base_is_merge_base 8"];
      }
    }
    class Eo extends _o {
      constructor(t3) {
        super(), this.serviceRequest = new Uint8Array(0), this.shadow = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Eo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Eo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Eo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Eo, t3, e3);
      }
      static $() {
        return ["GetDiffListingClientRequest|1 target #0|2 service_request 12|3 shadow 8", Jo];
      }
    }
    class Io extends _o {
      constructor(t3) {
        super(), this.serviceRequest = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Io().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Io().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Io().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Io, t3, e3);
      }
      static $() {
        return ["StreamDiffFilesClientRequest|1 target #0|2 service_request 12|3 thread_anchors #1?", Jo, Co];
      }
    }
    class Co extends _o {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Co().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Co().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Co().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Co, t3, e3);
      }
      static $() {
        return ["DiffRelayStreamThreadAnchorSource|1 change_number 4"];
      }
    }
    class bo extends _o {
      constructor(t3) {
        super(), this.serviceRequest = new Uint8Array(0), this.shadow = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bo, t3, e3);
      }
      static $() {
        return ["GetDiffFileClientRequest|1 target #0|2 service_request 12|3 shadow 8|4 thread_anchors #1?", Jo, ko];
      }
    }
    class ko extends _o {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, this.fromPath = "", this.toPath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ko().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ko().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ko().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ko, t3, e3);
      }
      static $() {
        return ["DiffRelayThreadAnchorSource|1 change_number 4|2 from_path 9|3 to_path 9"];
      }
    }
    class vo extends _o {
      constructor(t3) {
        super(), this.serviceRequest = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vo, t3, e3);
      }
      static $() {
        return ["GetDiffEngineInfoClientRequest|1 service_request 12"];
      }
    }
    class qo extends _o {
      constructor(t3) {
        super(), this.serviceRequest = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qo, t3, e3);
      }
      static $() {
        return ["PortAnchorsClientRequest|1 target #0|2 source #0|3 service_request 12", Jo];
      }
    }
    class Ro extends _o {
      constructor(t3) {
        super(), this.body = { case: void 0 }, this.contentEncoding = wo.UNSPECIFIED, this.chunkIndex = 0, this.done = false, this.ownerPrivacyClass = yo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ro().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ro().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ro().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ro, t3, e3);
      }
      static $() {
        return ["OriginDiffEnvelope|1 payload 12 body|2 oversized #0 body|3 not_served #1 body|4 content_encoding #2|5 chunk_index 13|6 done 8|7 owner_privacy_class #3", Po, To, wo, yo];
      }
    }
    class Po extends _o {
      constructor(t3) {
        super(), this.sizeBytes = n2.protoInt64.zero, this.maxBytes = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Po().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Po().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Po().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Po, t3, e3);
      }
      static $() {
        return ["DiffRelayOversized|1 size_bytes 4|2 max_bytes 4"];
      }
    }
    class To extends _o {
      constructor(t3) {
        super(), this.reason = So.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new To().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new To().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new To().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(To, t3, e3);
      }
      static $() {
        return ["DiffRelayNotServed|1 reason #0", So];
      }
    }
    class xo extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class No extends xo {
      constructor(t3) {
        super(), this.id = "", this.kind = "", this.displayName = "", this.avatarUrl = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new No().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new No().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new No().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(No, t3, e3);
      }
      static $() {
        return ["ActorWithDisplay|1 id 9|2 kind 9|3 display_name 9|4 avatar_url 9|5 performed_via #0", No];
      }
    }
    const Do = "origin.v1.";
    class Uo extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return Do;
      }
    }
    var Qo = (0, s2.QT)(n2.proto3, Do, "ChangeStatus", [[0, "UNSPECIFIED"], [1, "DRAFT"], [2, "OPEN"], [3, "MERGED"], [4, "CLOSED"]], 1), Mo = (0, s2.QT)(n2.proto3, Do, "VersionPotentialMergeCommitState", [[0, "UNSPECIFIED"], [1, "UNKNOWN"], [2, "PREPARED"], [3, "MERGE_CONFLICT"]], 1), Oo = (0, s2.QT)(n2.proto3, Do, "UpdateChangeBranchMethod", [[0, "UNSPECIFIED"], [1, "MERGE_COMMIT"]], 1), Fo = (0, s2.QT)(n2.proto3, Do, "ReviewVerdict", [[0, "UNSPECIFIED"], [1, "APPROVE"], [2, "REQUEST_CHANGES"], [3, "COMMENT"]], 1), Lo = (0, s2.QT)(n2.proto3, Do, "ChangeAssignmentKind", [[0, "UNSPECIFIED"], [1, "REVIEW_REQUEST"], [2, "ASSIGNEE"]], 1), $o = (0, s2.QT)(n2.proto3, Do, "ChangeAssignmentCreatedVia", [[0, "UNSPECIFIED"], [1, "HUMAN"], [2, "CODEOWNERS"], [3, "SYSTEM"]], 1), Go = (0, s2.QT)(n2.proto3, Do, "ReviewRequestEventAction", [[0, "UNSPECIFIED"], [1, "REQUESTED"], [2, "REMOVED"]], 1), Ho = (0, s2.QT)(n2.proto3, Do, "ChangeCodeownersMatchPathReason", [[0, "UNSPECIFIED"], [1, "CURRENT_PATH"], [2, "DELETED_PATH"], [3, "RENAME_NEW_PATH"], [4, "RENAME_OLD_PATH"], [5, "COPY_SOURCE_PATH"]], 1), Ko = (0, s2.QT)(n2.proto3, Do, "StackMemberParentRelation", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "STRICT"], [3, "STALE"], [4, "PARENT_MERGED"], [5, "PARENT_CLOSED"]], 1), Vo = (0, s2.QT)(n2.proto3, Do, "StackMemberRecommendedAction", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "RESTACK_ONTO_PARENT"], [3, "REBASE_ONTO_TRUNK_IF_CONFLICTS"], [4, "RETARGET_BASE_TO_TRUNK"]], 1), zo = (0, s2.QT)(n2.proto3, Do, "SectionOfChangesSortField", [[0, "UNSPECIFIED"], [1, "UPDATED_AT"], [2, "CREATED_AT"], [3, "TITLE"], [4, "LINES_CHANGED"]], 1), Wo = (0, s2.QT)(n2.proto3, Do, "SectionOfChangesStatus", [[0, "UNSPECIFIED"], [1, "DRAFT"], [2, "OPEN"], [3, "MERGED"], [4, "CLOSED"]], 1), Yo = (0, s2.QT)(n2.proto3, Do, "SectionOfChangesVerdict", [[0, "UNSPECIFIED"], [1, "APPROVE"], [2, "COMMENT"], [3, "REQUEST_CHANGES"]], 1), jo = (0, s2.QT)(n2.proto3, Do, "SectionOfChangesReviewStatusState", [[0, "UNSPECIFIED"], [1, "ONE_OR_MORE_APPROVALS"], [2, "IS_FULLY_APPROVED"], [3, "HAS_ACTIVE_REVIEW"], [4, "HAS_REQUESTED_REVIEWERS"], [5, "HAS_REREQUESTED_REVIEW"], [6, "HAS_UNADDRESSED_CHANGES_REQUESTED"], [7, "HAS_CHANGES_REQUESTED"]], 1);
    class Xo extends Uo {
      constructor(t3) {
        super(), this.id = "", this.repoUuid = "", this.number = n2.protoInt64.zero, this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Qo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xo, t3, e3);
      }
      static $() {
        return ["Change|1 id 9|2 repo_uuid 9|3 number 4|4 title 9|5 description 9|6 head_ref 9|7 base_ref 9|9 status #0|10 created_at #1|11 updated_at #1|12 merged_at #1?|13 closed_at #1?|14 parent_change_id 9?|15 stack_id 9?|16 merge_commit_sha 9?|22 author #2|23 merged_by #2|24 merged_version_id 9?", Qo, n2.Timestamp, No];
      }
    }
    class Zo extends Uo {
      constructor(t3) {
        super(), this.id = "", this.changeId = "", this.number = n2.protoInt64.zero, this.headSha = "", this.baseSha = "", this.additions = 0, this.deletions = 0, this.changedFiles = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zo, t3, e3);
      }
      static $() {
        return ["Version|1 id 9|2 change_id 9|3 number 4|4 head_sha 9|5 base_sha 9|6 created_at #0|7 additions 5|8 deletions 5|9 changed_files 5|10 merge_base_sha 9?|11 ahead_by 5?|12 behind_by 5?|13 head_tree_oid 9?|14 merge_base_tree_oid 9?|15 potential_merge_commit #1|16 included_in_merge 8?", n2.Timestamp, ta];
      }
    }
    class ta extends Uo {
      constructor(t3) {
        super(), this.state = Mo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ta().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ta().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ta().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ta, t3, e3);
      }
      static $() {
        return ["VersionPotentialMergeCommit|1 state #0|2 sha 9?|3 base_sha 9?", Mo];
      }
    }
    class ea extends Uo {
      constructor(t3) {
        super(), this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Qo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ea().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ea().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ea().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ea, t3, e3);
      }
      static $() {
        return ["CreateChangeRequest|1 identifier #0|2 title 9|3 description 9|4 head_ref 9|5 base_ref 9|6 status #1|7 parent_change #2", o2, Qo, na];
      }
    }
    class ra extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ra().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ra().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ra().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ra, t3, e3);
      }
      static $() {
        return ["CreateChangeResponse|1 change #0|2 initial_version #1", Xo, Zo];
      }
    }
    class na extends Uo {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new na().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new na().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new na().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(na, t3, e3);
      }
      static $() {
        return ["ChangeIdentifier|1 identifier #0|2 change_number 4", o2];
      }
    }
    class sa extends Uo {
      constructor(t3) {
        super(), this.draft = false, this.allowStackLandingRevert = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sa, t3, e3);
      }
      static $() {
        return ["RevertPullRequestRequest|1 change #0|2 title 9?|3 description 9?|4 draft 8|5 allow_stack_landing_revert 8", na];
      }
    }
    class ia extends Uo {
      constructor(t3) {
        super(), this.reverseMirrorPushFailed = false, this.revertedChangeNumbers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ia().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ia().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ia().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ia, t3, e3);
      }
      static $() {
        return ["RevertPullRequestResponse|1 change #0|2 reverse_mirror_push_failed 8|5 reverted_change_numbers 4*", Xo];
      }
    }
    class oa extends Uo {
      constructor(t3) {
        super(), this.parentUpdate = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oa, t3, e3);
      }
      static $() {
        return ["UpdateChangeRequest|1 change #0|2 head_ref 9?|3 base_ref 9?|4 parent_change #0 parent_update|5 clear_parent 8 parent_update", na];
      }
    }
    class aa extends Uo {
      constructor(t3) {
        super(), this.unchanged = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new aa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new aa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new aa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(aa, t3, e3);
      }
      static $() {
        return ["UpdateChangeResponse|1 change #0|2 latest_version #1|3 unchanged 8", Xo, Zo];
      }
    }
    class ua extends Uo {
      constructor(t3) {
        super(), this.method = Oo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ua().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ua().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ua().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ua, t3, e3);
      }
      static $() {
        return ["UpdateChangeBranchRequest|1 change #0|2 method #1", na, Oo];
      }
    }
    class ca extends Uo {
      constructor(t3) {
        super(), this.unchanged = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ca().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ca().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ca().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ca, t3, e3);
      }
      static $() {
        return ["UpdateChangeBranchResponse|1 change #0|2 latest_version #1|3 unchanged 8", Xo, Zo];
      }
    }
    class la extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new la().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new la().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new la().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(la, t3, e3);
      }
      static $() {
        return ["DeleteChangeHeadBranchRequest|1 change #0", na];
      }
    }
    class ma extends Uo {
      constructor(t3) {
        super(), this.alreadyDeleted = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ma().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ma().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ma().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ma, t3, e3);
      }
      static $() {
        return ["DeleteChangeHeadBranchResponse|1 already_deleted 8"];
      }
    }
    class da extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new da().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new da().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new da().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(da, t3, e3);
      }
      static $() {
        return ["RestorePullRequestBranchRequest|1 change #0", na];
      }
    }
    class fa extends Uo {
      constructor(t3) {
        super(), this.alreadyRestored = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fa, t3, e3);
      }
      static $() {
        return ["RestorePullRequestBranchResponse|1 already_restored 8"];
      }
    }
    class pa extends Uo {
      constructor(t3) {
        super(), this.baseRef = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pa, t3, e3);
      }
      static $() {
        return ["RetargetChangeRequest|1 change #0|2 base_ref 9", na];
      }
    }
    class ha extends Uo {
      constructor(t3) {
        super(), this.unchanged = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ha().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ha().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ha().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ha, t3, e3);
      }
      static $() {
        return ["RetargetChangeResponse|1 change #0|2 latest_version #1|3 unchanged 8", Xo, Zo];
      }
    }
    class ga extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ga().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ga().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ga().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ga, t3, e3);
      }
      static $() {
        return ["FoldChangeRequest|1 change #0", na];
      }
    }
    class Aa extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Aa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Aa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Aa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Aa, t3, e3);
      }
      static $() {
        return ["FoldChangeResponse"];
      }
    }
    class _a extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_a, t3, e3);
      }
      static $() {
        return ["LandChangeTreePathRequest|1 tree #0|2 leaf #0", na];
      }
    }
    class ya extends Uo {
      constructor(t3) {
        super(), this.oldTrunkSha = "", this.newTrunkSha = "", this.mergedChangeNumbers = [], this.closedChangeNumbers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ya().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ya().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ya().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ya, t3, e3);
      }
      static $() {
        return ["LandChangeTreePathResponse|1 old_trunk_sha 9|2 new_trunk_sha 9|3 merged_change_numbers 4*|4 closed_change_numbers 4*"];
      }
    }
    class wa extends Uo {
      constructor(t3) {
        super(), this.expectedHeadSha = "", this.expectedBaseSha = "", this.groups = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wa, t3, e3);
      }
      static $() {
        return ["SplitChangeIntoStackRequest|1 change #0|2 expected_head_sha 9|3 expected_base_sha 9|4 groups #1*", na, Sa];
      }
    }
    class Sa extends Uo {
      constructor(t3) {
        super(), this.title = "", this.paths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sa, t3, e3);
      }
      static $() {
        return ["SplitChangeStackGroup|1 title 9|2 paths 9*"];
      }
    }
    class Ja extends Uo {
      constructor(t3) {
        super(), this.changes = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ja().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ja().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ja().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ja, t3, e3);
      }
      static $() {
        return ["SplitChangeIntoStackResponse|1 changes #0*", Xo];
      }
    }
    class Ba extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ba().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ba().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ba().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ba, t3, e3);
      }
      static $() {
        return ["UpdateChangeMetadataRequest|1 change #0|2 title 9?|3 description 9?", na];
      }
    }
    class Ea extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ea().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ea().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ea().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ea, t3, e3);
      }
      static $() {
        return ["UpdateChangeMetadataResponse|1 change #0", Xo];
      }
    }
    class Ia extends Uo {
      constructor(t3) {
        super(), this.status = Qo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ia().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ia().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ia().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ia, t3, e3);
      }
      static $() {
        return ["UpdateChangeStatusRequest|1 change #0|2 status #1|3 reset_base #2?", na, Qo, Ca];
      }
    }
    class Ca extends Uo {
      constructor(t3) {
        super(), this.expectedBaseTipSha = "", this.resetToSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ca().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ca().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ca().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ca, t3, e3);
      }
      static $() {
        return ["ReopenBaseReset|1 expected_base_tip_sha 9|2 reset_to_sha 9"];
      }
    }
    class ba extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ba().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ba().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ba().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ba, t3, e3);
      }
      static $() {
        return ["UpdateChangeStatusResponse|1 change #0", Xo];
      }
    }
    class ka extends Uo {
      constructor(t3) {
        super(), this.dismissalMessage = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ka().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ka().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ka().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ka, t3, e3);
      }
      static $() {
        return ["ReviewDismissal|1 dismissed_at #0|4 dismissal_message 9|5 dismissed_by #1", n2.Timestamp, No];
      }
    }
    class va extends Uo {
      constructor(t3) {
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n2.protoInt64.zero, this.verdict = Fo.UNSPECIFIED, this.body = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new va().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new va().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new va().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(va, t3, e3);
      }
      static $() {
        return ["Review|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|6 verdict #0|7 body 9|8 created_at #1|12 submitted_at #1?|13 dismissal #2?|14 author #3", Fo, n2.Timestamp, ka, No];
      }
    }
    class qa extends Uo {
      constructor(t3) {
        super(), this.id = "", this.eventType = "", this.actorDisplayName = "", this.actorAvatarUrl = "", this.subjectUserId = "", this.subjectUserDisplayName = "", this.subjectUserAvatarUrl = "", this.subjectGroupId = "", this.labelName = "", this.labelColor = "", this.previousBaseRef = "", this.newBaseRef = "", this.previousTitle = "", this.newTitle = "", this.previousHeadSha = "", this.newHeadSha = "", this.headRefName = "", this.reviewId = "", this.dismissalMessage = "", this.relatedChangeNumber = n2.protoInt64.zero, this.mergeQueueEvictionReason = "", this.mergeQueueValidationSha = "", this.satisfierGates = [], this.stoodInOwnerRules = [], this.codeReviewGateReported = false, this.baseRefName = "", this.previousBaseSha = "", this.newBaseSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qa, t3, e3);
      }
      static $() {
        return ["ChangeTimelineEvent|1 id 9|2 event_type 9|3 created_at #0|6 actor_display_name 9|7 actor_avatar_url 9|8 subject_user_id 9|9 subject_user_display_name 9|10 subject_user_avatar_url 9|11 subject_group_id 9|12 label_name 9|13 label_color 9|14 previous_base_ref 9|15 new_base_ref 9|16 previous_title 9|17 new_title 9|18 previous_head_sha 9|19 new_head_sha 9|20 head_ref_name 9|21 review_id 9|22 dismissal_message 9|23 related_change_number 4|24 actor #1|25 merge_queue_eviction_reason 9|26 merge_queue_validation_sha 9|27 satisfier_gates #2*|28 stood_in_owner_rules #3*|29 code_review_gate_reported 8|30 base_ref_name 9|31 previous_base_sha 9|32 new_base_sha 9", n2.Timestamp, No, Ra, Pa];
      }
    }
    class Ra extends Uo {
      constructor(t3) {
        super(), this.gate = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ra().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ra().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ra().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ra, t3, e3);
      }
      static $() {
        return ["ChangesetApprovedGate|1 gate 9|2 report_url 9?"];
      }
    }
    class Pa extends Uo {
      constructor(t3) {
        super(), this.scope = "", this.reviewers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pa, t3, e3);
      }
      static $() {
        return ["ChangeTimelineOwnerRule|1 scope 9|2 reviewers 9*"];
      }
    }
    class Ta extends Uo {
      constructor(t3) {
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n2.protoInt64.zero, this.body = "", this.threadId = "", this.reactionGroups = [], this.reviewId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ta().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ta().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ta().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ta, t3, e3);
      }
      static $() {
        return ["Comment|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|6 body 9|7 created_at #0|8 updated_at #0|9 thread_id 9|13 reaction_groups #1*|14 author #2|15 review_id 9", n2.Timestamp, xa, No];
      }
    }
    class xa extends Uo {
      constructor(t3) {
        super(), this.emoji = "", this.count = 0, this.viewerHasReacted = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xa, t3, e3);
      }
      static $() {
        return ["CommentReactionGroup|1 emoji 9|2 count 13|3 viewer_has_reacted 8"];
      }
    }
    class Na extends Uo {
      constructor(t3) {
        super(), this.emoji = "", this.viewerIsReactor = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Na().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Na().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Na().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Na, t3, e3);
      }
      static $() {
        return ["CommentReaction|1 emoji 9|6 viewer_is_reactor 8|7 reactor #0", No];
      }
    }
    class Da extends Uo {
      constructor(t3) {
        super(), this.verdict = Fo.UNSPECIFIED, this.body = "", this.versionNumber = n2.protoInt64.zero, this.requireLatestVersion = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Da().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Da().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Da().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Da, t3, e3);
      }
      static $() {
        return ["CreateReviewRequest|1 change #0|2 verdict #1|3 body 9|4 version_number 4|5 require_latest_version 8", na, Fo];
      }
    }
    class Ua extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ua().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ua().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ua().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ua, t3, e3);
      }
      static $() {
        return ["CreateReviewResponse|1 review #0", va];
      }
    }
    class Qa extends Uo {
      constructor(t3) {
        super(), this.reviewId = "", this.body = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qa, t3, e3);
      }
      static $() {
        return ["UpdateReviewRequest|1 change #0|2 review_id 9|3 body 9", na];
      }
    }
    class Ma extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ma().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ma().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ma().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ma, t3, e3);
      }
      static $() {
        return ["UpdateReviewResponse|1 review #0", va];
      }
    }
    class Oa extends Uo {
      constructor(t3) {
        super(), this.reviewId = "", this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Oa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Oa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Oa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Oa, t3, e3);
      }
      static $() {
        return ["DismissReviewRequest|1 change #0|2 review_id 9|3 reason 9", na];
      }
    }
    class Fa extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fa, t3, e3);
      }
      static $() {
        return ["DismissReviewResponse|1 review #0", va];
      }
    }
    class La extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new La().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new La().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new La().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(La, t3, e3);
      }
      static $() {
        return ["ListReviewsRequest|1 change #0", na];
      }
    }
    class $a extends Uo {
      constructor(t3) {
        super(), this.reviews = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($a, t3, e3);
      }
      static $() {
        return ["ListReviewsResponse|1 reviews #0*", va];
      }
    }
    class Ga extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ga().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ga().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ga().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ga, t3, e3);
      }
      static $() {
        return ["ListChangeTimelineEventsRequest|1 change #0", na];
      }
    }
    class Ha extends Uo {
      constructor(t3) {
        super(), this.events = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ha().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ha().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ha().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ha, t3, e3);
      }
      static $() {
        return ["ListChangeTimelineEventsResponse|1 events #0*", qa];
      }
    }
    class Ka extends Uo {
      constructor(t3) {
        super(), this.body = "", this.versionNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ka().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ka().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ka().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ka, t3, e3);
      }
      static $() {
        return ["CreateCommentRequest|1 change #0|2 body 9|3 version_number 4", na];
      }
    }
    class Va extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Va().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Va().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Va().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Va, t3, e3);
      }
      static $() {
        return ["CreateCommentResponse|1 comment #0", Ta];
      }
    }
    class za extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new za().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new za().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new za().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(za, t3, e3);
      }
      static $() {
        return ["ListCommentsRequest|1 change #0", na];
      }
    }
    class Wa extends Uo {
      constructor(t3) {
        super(), this.comments = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wa, t3, e3);
      }
      static $() {
        return ["ListCommentsResponse|1 comments #0*", Ta];
      }
    }
    class Ya extends Uo {
      constructor(t3) {
        super(), this.id = "", this.changeId = "", this.kind = Lo.UNSPECIFIED, this.assignedGroupId = "", this.createdVia = $o.UNSPECIFIED, this.cursorUserId = n2.protoInt64.zero, this.cursorGroupId = n2.protoInt64.zero, this.assignedServiceAccountId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ya().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ya().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ya().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ya, t3, e3);
      }
      static $() {
        return ["ChangeAssignment|1 id 9|2 change_id 9|3 kind #0|5 assigned_group_id 9|6 created_via #1|8 created_at #2|9 updated_at #2|10 cursor_user_id 3|11 cursor_group_id 3|12 assigned_user #3|13 assigned_group #4|14 created_by #5|15 assigned_service_account #6|16 assigned_service_account_id 9", Lo, $o, n2.Timestamp, fu, pu, No, gu];
      }
    }
    class ja extends Uo {
      constructor(t3) {
        super(), this.id = "", this.changeId = "", this.kind = Lo.UNSPECIFIED, this.action = Go.UNSPECIFIED, this.assignedUserId = "", this.assignedGroupId = "", this.createdVia = $o.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ja().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ja().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ja().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ja, t3, e3);
      }
      static $() {
        return ["ReviewRequestEvent|1 id 9|2 change_id 9|3 kind #0|4 action #1|13 assigned_user_id 9|6 assigned_group_id 9|7 created_via #2|9 created_at #3|10 actor #4|11 assigned_user #5|12 assigned_group #6", Lo, Go, $o, n2.Timestamp, No, fu, pu];
      }
    }
    class Xa extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xa, t3, e3);
      }
      static $() {
        return ["ListReviewRequestEventsRequest|1 change #0", na];
      }
    }
    class Za extends Uo {
      constructor(t3) {
        super(), this.events = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Za().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Za().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Za().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Za, t3, e3);
      }
      static $() {
        return ["ListReviewRequestEventsResponse|1 events #0*", ja];
      }
    }
    class tu extends Uo {
      constructor(t3) {
        super(), this.target = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tu, t3, e3);
      }
      static $() {
        return ["RequestReviewRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target|7 service_account_id 9 target", na];
      }
    }
    class eu extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new eu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new eu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new eu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(eu, t3, e3);
      }
      static $() {
        return ["RequestReviewResponse|1 assignment #0", Ya];
      }
    }
    class ru extends Uo {
      constructor(t3) {
        super(), this.target = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ru().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ru().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ru().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ru, t3, e3);
      }
      static $() {
        return ["ReviewRequestTarget|2 group_id 9 target|3 cursor_user_id 3 target|4 cursor_group_id 3 target|5 user_id 9 target|6 service_account_id 9 target"];
      }
    }
    class nu extends Uo {
      constructor(t3) {
        super(), this.additions = [], this.removals = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nu, t3, e3);
      }
      static $() {
        return ["ApplyReviewRequestChangesRequest|1 change #0|2 additions #1*|3 removals #1*", na, ru];
      }
    }
    class su extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new su().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new su().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new su().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(su, t3, e3);
      }
      static $() {
        return ["ApplyReviewRequestChangesResponse"];
      }
    }
    class iu extends Uo {
      constructor(t3) {
        super(), this.targets = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new iu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new iu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new iu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(iu, t3, e3);
      }
      static $() {
        return ["RequestReviewsRequest|1 change #0|2 targets #1*", na, ru];
      }
    }
    class ou extends Uo {
      constructor(t3) {
        super(), this.assignments = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ou().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ou().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ou().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ou, t3, e3);
      }
      static $() {
        return ["RequestReviewsResponse|1 assignments #0*", Ya];
      }
    }
    class au extends Uo {
      constructor(t3) {
        super(), this.target = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new au().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new au().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new au().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(au, t3, e3);
      }
      static $() {
        return ["CloseReviewRequestRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target|7 service_account_id 9 target", na];
      }
    }
    class uu extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new uu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new uu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new uu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(uu, t3, e3);
      }
      static $() {
        return ["CloseReviewRequestResponse"];
      }
    }
    class cu extends Uo {
      constructor(t3) {
        super(), this.target = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cu, t3, e3);
      }
      static $() {
        return ["AddAssigneeRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target", na];
      }
    }
    class lu extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lu, t3, e3);
      }
      static $() {
        return ["AddAssigneeResponse|1 assignment #0", Ya];
      }
    }
    class mu extends Uo {
      constructor(t3) {
        super(), this.target = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mu, t3, e3);
      }
      static $() {
        return ["RemoveAssigneeRequest|1 change #0|3 group_id 9 target|4 cursor_user_id 3 target|5 cursor_group_id 3 target|6 user_id 9 target", na];
      }
    }
    class du extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new du().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new du().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new du().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(du, t3, e3);
      }
      static $() {
        return ["RemoveAssigneeResponse"];
      }
    }
    class fu extends Uo {
      constructor(t3) {
        super(), this.firstName = "", this.lastName = "", this.email = "", this.avatarUrl = "", this.cursorUserId = n2.protoInt64.zero, this.userId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fu, t3, e3);
      }
      static $() {
        return ["OriginReviewerCandidateUser|3 first_name 9|4 last_name 9|5 email 9|6 avatar_url 9|7 cursor_user_id 3|8 user_id 9"];
      }
    }
    class pu extends Uo {
      constructor(t3) {
        super(), this.groupPublicId = "", this.organizationSlug = "", this.groupSlug = "", this.name = "", this.cursorGroupId = n2.protoInt64.zero, this.memberUserIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pu, t3, e3);
      }
      static $() {
        return ["OriginReviewerCandidateGroup|1 group_public_id 9|2 organization_slug 9|3 group_slug 9|4 name 9|6 cursor_group_id 3|7 member_user_ids 9*"];
      }
    }
    class hu extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hu, t3, e3);
      }
      static $() {
        return ["ListOriginRepoReviewerCandidatesRequest|1 repo #0", o2];
      }
    }
    class gu extends Uo {
      constructor(t3) {
        super(), this.serviceAccountId = "", this.displayName = "", this.avatarUrl = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gu, t3, e3);
      }
      static $() {
        return ["OriginReviewerCandidateServiceAccount|1 service_account_id 9|2 display_name 9|3 avatar_url 9"];
      }
    }
    class Au extends Uo {
      constructor(t3) {
        super(), this.users = [], this.groups = [], this.serviceAccounts = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Au().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Au().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Au().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Au, t3, e3);
      }
      static $() {
        return ["ListOriginRepoReviewerCandidatesResponse|1 users #0*|2 groups #1*|3 service_accounts #2*", fu, pu, gu];
      }
    }
    class _u extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_u, t3, e3);
      }
      static $() {
        return ["GetChangeRequest|1 change #0|2 include_head_ref_exists 8?|3 include_merge_when_ready 8?|4 include_commits_behind_base 8?|5 include_viewer_capabilities 8?|6 include_merge_queue 8?", na];
      }
    }
    class yu extends Uo {
      constructor(t3) {
        super(), this.id = "", this.name = "", this.color = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yu, t3, e3);
      }
      static $() {
        return ["ChangeLabel|1 id 9|2 name 9|3 color 9|4 description 9?"];
      }
    }
    class wu extends Uo {
      constructor(t3) {
        super(), this.id = "", this.changeId = "", this.repoUuid = "", this.changeNumber = n2.protoInt64.zero, this.status = "", this.source = "", this.trunkBranch = "", this.consecutiveFailedAttempts = 0, this.dev = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wu, t3, e3);
      }
      static $() {
        return ["ChangeMergeWhenReadySummary|1 id 9|2 change_id 9|3 repo_uuid 9|4 change_number 4|6 status 9|7 source 9|8 trunk_branch 9|9 lock_expires_at #0?|10 consecutive_failed_attempts 5|11 dev 8|12 repo_org 9?|13 repo_name 9?|14 enabled_by #1", n2.Timestamp, No];
      }
    }
    class Su extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Su().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Su().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Su().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Su, t3, e3);
      }
      static $() {
        return ["ChangeViewerCapabilities|1 can_write_pull_requests 8?|2 can_write_contents 8?|3 can_write_reviews 8?|4 can_merge 8?|5 can_enable_merge_when_ready 8?|6 can_disable_merge_when_ready 8?"];
      }
    }
    class Ju extends Uo {
      constructor(t3) {
        super(), this.headSha = "", this.targetRef = "", this.status = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ju().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ju().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ju().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ju, t3, e3);
      }
      static $() {
        return ["ChangeMergeQueueSummary|1 head_sha 9|2 target_ref 9|3 status 9|4 ahead 13?|5 validation_sha 9?|6 eviction_reason 9?"];
      }
    }
    class Bu extends Uo {
      constructor(t3) {
        super(), this.versions = [], this.assignments = [], this.labels = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bu, t3, e3);
      }
      static $() {
        return ["GetChangeResponse|1 change #0|2 versions #1*|3 assignments #2*|4 labels #3*|5 viewer_last_viewed_at #4?|6 viewer_timeline_viewed_at #4?|7 head_ref_exists 8?|8 merge_when_ready #5?|9 commits_behind_base 5?|12 commits_behind_base_as_of_version 4?|10 viewer_capabilities #6?|11 viewer_is_author 8?|13 merge_queue #7?|14 merge_queue_owns_landing 8?|15 head_ref_locked 8?", Xo, Zo, Ya, yu, n2.Timestamp, wu, Su, Ju];
      }
    }
    class Eu extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Eu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Eu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Eu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Eu, t3, e3);
      }
      static $() {
        return ["GetChangeCodeownersApplicationRequest|1 change #0|2 version_number 4?", na];
      }
    }
    class Iu extends Uo {
      constructor(t3) {
        super(), this.checkedPaths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Iu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Iu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Iu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Iu, t3, e3);
      }
      static $() {
        return ["ChangeCodeownersSnapshotMissing|1 checked_paths 9*"];
      }
    }
    class Cu extends Uo {
      constructor(t3) {
        super(), this.path = "", this.sizeBytes = n2.protoInt64.zero, this.maxSizeBytes = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cu, t3, e3);
      }
      static $() {
        return ["ChangeCodeownersSnapshotTooLarge|1 path 9|2 size_bytes 4|3 max_size_bytes 4"];
      }
    }
    class bu extends Uo {
      constructor(t3) {
        super(), this.path = "", this.sizeBytes = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bu, t3, e3);
      }
      static $() {
        return ["ChangeCodeownersSnapshotFound|1 path 9|2 size_bytes 4"];
      }
    }
    class ku extends Uo {
      constructor(t3) {
        super(), this.baseSha = "", this.status = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ku().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ku().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ku().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ku, t3, e3);
      }
      static $() {
        return ["ChangeCodeownersSnapshot|1 base_sha 9|2 missing #0 status|3 too_large #1 status|4 found #2 status", Iu, Cu, bu];
      }
    }
    class vu extends Uo {
      constructor(t3) {
        super(), this.path = "", this.reason = Ho.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vu, t3, e3);
      }
      static $() {
        return ["ChangeCodeownersMatchPath|1 path 9|2 reason #0", Ho];
      }
    }
    class qu extends Uo {
      constructor(t3) {
        super(), this.label = "", this.identity = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qu, t3, e3);
      }
      static $() {
        return ["ChangeCodeowner|1 label 9|2 user #0 identity|3 group #1 identity", Ru, Pu];
      }
    }
    class Ru extends Uo {
      constructor(t3) {
        super(), this.login = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ru().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ru().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ru().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ru, t3, e3);
      }
      static $() {
        return ["ChangeCodeowner.User|1 login 9"];
      }
    }
    class Pu extends Uo {
      constructor(t3) {
        super(), this.organizationSlug = "", this.groupSlug = "", this.groupPublicId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pu, t3, e3);
      }
      static $() {
        return ["ChangeCodeowner.Group|1 organization_slug 9|2 group_slug 9|3 group_public_id 9"];
      }
    }
    class Tu extends Uo {
      constructor(t3) {
        super(), this.owners = [], this.requirementGroupId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tu, t3, e3);
      }
      static $() {
        return ["ChangeCodeownersResolvedOwnerRule|1 match_path #0|2 owners #1*|3 requirement_group_id 9", vu, qu];
      }
    }
    class xu extends Uo {
      constructor(t3) {
        super(), this.changeKind = Wn.UNSPECIFIED, this.canonicalPath = "", this.matchPaths = [], this.resolvedOwnerRules = [], this.agenticOwners = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xu, t3, e3);
      }
      static $() {
        return ["ChangeCodeownersChangedPath|1 change_kind #0|2 canonical_path 9|3 old_path 9?|4 match_paths #1*|5 resolved_owner_rules #2*|6 agentic_owners #3*", Wn, vu, Tu, qu];
      }
    }
    class Nu extends Uo {
      constructor(t3) {
        super(), this.canonicalPath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nu, t3, e3);
      }
      static $() {
        return ["ChangeCodeownersRequirementPath|1 canonical_path 9|2 match_path #0", vu];
      }
    }
    class Du extends Uo {
      constructor(t3) {
        super(), this.id = "", this.owners = [], this.paths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Du().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Du().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Du().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Du, t3, e3);
      }
      static $() {
        return ["ChangeCodeownersRequirementGroup|1 id 9|2 owners #0*|3 paths #1*", qu, Nu];
      }
    }
    class Uu extends Uo {
      constructor(t3) {
        super(), this.changedPaths = [], this.requirementGroups = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Uu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Uu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Uu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Uu, t3, e3);
      }
      static $() {
        return ["GetChangeCodeownersApplicationResponse|1 snapshot #0|2 changed_paths #1*|3 requirement_groups #2*|4 undeterminable #3", ku, xu, Du, Qu];
      }
    }
    class Qu extends Uo {
      constructor(t3) {
        super(), this.detail = "", this.remediation = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qu, t3, e3);
      }
      static $() {
        return ["ChangeCodeownersUndeterminable|1 detail 9|2 remediation 9"];
      }
    }
    class Mu extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mu, t3, e3);
      }
      static $() {
        return ["GetChangeStackRequest|1 change #0", na];
      }
    }
    class Ou extends Uo {
      constructor(t3) {
        super(), this.changeId = "", this.headSha = "", this.recordedBaseSha = "", this.rootBaseRef = "", this.parentRelation = Ko.UNSPECIFIED, this.recommendedAction = Vo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ou().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ou().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ou().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ou, t3, e3);
      }
      static $() {
        return ["StackMemberState|1 change_id 9|2 head_sha 9|3 recorded_base_sha 9|4 root_base_ref 9|5 parent_head_sha 9?|6 parent_relation #0|7 recommended_action #1", Ko, Vo];
      }
    }
    class Fu extends Uo {
      constructor(t3) {
        super(), this.changes = [], this.convergenceConflictedPaths = [], this.memberStates = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fu, t3, e3);
      }
      static $() {
        return ["GetChangeStackResponse|1 changes #0*|6 stack_id 9?|2 convergence_state 9?|3 convergence_conflicted_change_number 4?|4 convergence_conflicted_paths 9*|5 convergence_blocked_reason 9?|7 member_states #1*", Xo, Ou];
      }
    }
    class Lu extends Uo {
      constructor(t3) {
        super(), this.changeNumbers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lu, t3, e3);
      }
      static $() {
        return ["GetProjectedLatestVersionsRequest|1 identifier #0|2 change_numbers 4*", o2];
      }
    }
    class $u extends Uo {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($u, t3, e3);
      }
      static $() {
        return ["ProjectedLatestVersionEntry|1 change_number 4|2 projected_latest_version #0", Zo];
      }
    }
    class Gu extends Uo {
      constructor(t3) {
        super(), this.entries = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gu, t3, e3);
      }
      static $() {
        return ["GetProjectedLatestVersionsResponse|1 entries #0*", $u];
      }
    }
    class Hu extends Uo {
      constructor(t3) {
        super(), this.versionNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hu, t3, e3);
      }
      static $() {
        return ["ListChangeCommitsRequest|1 change #0|2 version_number 4|3 max_commits 13?", na];
      }
    }
    class Ku extends Uo {
      constructor(t3) {
        super(), this.commits = [], this.mergeBaseSha = "", this.truncated = false, this.actorDisplaysBySha = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ku().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ku().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ku().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ku, t3, e3);
      }
      static $() {
        return ["ListChangeCommitsResponse|1 commits #0*|2 merge_base_sha 9|3 truncated 8|4 actor_displays_by_sha 9,#1", hs, Vu];
      }
    }
    class Vu extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vu, t3, e3);
      }
      static $() {
        return ["CommitActorDisplays|1 author #0|2 committer #0", zu];
      }
    }
    class zu extends Uo {
      constructor(t3) {
        super(), this.displayName = "", this.avatarUrl = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zu, t3, e3);
      }
      static $() {
        return ["CommitActorDisplay|1 display_name 9|2 avatar_url 9"];
      }
    }
    class Wu extends Uo {
      constructor(t3) {
        super(), this.file = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wu, t3, e3);
      }
      static $() {
        return ["ListChangesRequest|1 identifier #0|2 status 9?|3 cursor 4?|4 limit 5?|5 author_id 9?|6 base_ref 9?|7 head_ref 9?|8 file 9*", o2];
      }
    }
    class Yu extends Uo {
      constructor(t3) {
        super(), this.headRef = "", this.includeInactive = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yu, t3, e3);
      }
      static $() {
        return ["ListChangesByHeadRefRequest|1 identifier #0|2 head_ref 9|3 include_inactive 8", o2];
      }
    }
    class ju extends Uo {
      constructor(t3) {
        super(), this.changes = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ju().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ju().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ju().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ju, t3, e3);
      }
      static $() {
        return ["ListChangesByHeadRefResponse|1 changes #0*", Xo];
      }
    }
    class Xu extends Uo {
      constructor(t3) {
        super(), this.sha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xu, t3, e3);
      }
      static $() {
        return ["GetCommitReferencesRequest|1 identifier #0|2 sha 9", o2];
      }
    }
    class Zu extends Uo {
      constructor(t3) {
        super(), this.branchName = "", this.pullRequestNumber = n2.protoInt64.zero, this.status = Qo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zu, t3, e3);
      }
      static $() {
        return ["CommitReference|1 branch_name 9|2 pull_request_number 3|3 status #0", Qo];
      }
    }
    class tc extends Uo {
      constructor(t3) {
        super(), this.references = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tc, t3, e3);
      }
      static $() {
        return ["GetCommitReferencesResponse|1 references #0*", Zu];
      }
    }
    class ec extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ec().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ec().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ec().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ec, t3, e3);
      }
      static $() {
        return ["ChangeWithLatestVersion|1 change #0|2 latest_version #1?", Xo, Zo];
      }
    }
    class rc extends Uo {
      constructor(t3) {
        super(), this.changeNumbers = [], this.headRefs = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rc, t3, e3);
      }
      static $() {
        return ["BatchGetChangesRequest|1 identifier #0|2 change_numbers 4*|3 head_refs 9*", o2];
      }
    }
    class nc extends Uo {
      constructor(t3) {
        super(), this.changes = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nc, t3, e3);
      }
      static $() {
        return ["BatchGetChangesResponse|1 changes #0*", ec];
      }
    }
    class sc extends Uo {
      constructor(t3) {
        super(), this.changes = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sc, t3, e3);
      }
      static $() {
        return ["ListChangesResponse|1 changes #0*|2 next_cursor 4?", ec];
      }
    }
    class ic extends Uo {
      constructor(t3) {
        super(), this.repos = [], this.limit = 0, this.sortField = zo.UNSPECIFIED, this.sortIsAsc = false, this.skipTotalCount = false, this.changeIds = [], this.dropUnauthorizedRepos = false, this.viewerScoped = false, this.includeStackMembers = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ic().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ic().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ic().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ic, t3, e3);
      }
      static $() {
        return ["GetSectionOfChangesRequest|1 repos #0*|2 filter #1|3 cursor 9?|4 limit 5|5 sort_field #2|6 sort_is_asc 8|7 skip_total_count 8|8 change_ids 9*|10 drop_unauthorized_repos 8|9 viewer_scoped 8|11 include_stack_members 8", o2, Ac, zo];
      }
    }
    class oc extends Uo {
      constructor(t3) {
        super(), this.changes = [], this.hasMore = false, this.totalCount = 0, this.droppedRepoCount = 0, this.stackMembers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oc, t3, e3);
      }
      static $() {
        return ["GetSectionOfChangesResponse|1 changes #0*|2 has_more 8|3 total_count 5|4 dropped_repo_count 5|5 stack_members #1*", hc, ac];
      }
    }
    class ac extends Uo {
      constructor(t3) {
        super(), this.id = "", this.number = 0, this.stackId = "", this.baseRef = "", this.status = Qo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ac().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ac().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ac().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ac, t3, e3);
      }
      static $() {
        return ["SectionOfChangesStackMember|1 id 9|2 number 5|3 stack_id 9|4 parent_change_id 9?|5 base_ref 9|6 status #0", Qo];
      }
    }
    class uc extends Uo {
      constructor(t3) {
        super(), this.query = "", this.limit = 0, this.includeLabels = false, this.includeAssignees = false, this.includeReviewRequests = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new uc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new uc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new uc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(uc, t3, e3);
      }
      static $() {
        return ["SearchChangesRequest|1 identifier #0?|2 query 9|3 cursor 9?|4 limit 5|5 include_labels 8|6 include_assignees 8|7 include_review_requests 8", o2];
      }
    }
    class cc extends Uo {
      constructor(t3) {
        super(), this.changes = [], this.hasMore = false, this.totalCount = 0, this.totalCountIsLowerBound = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cc, t3, e3);
      }
      static $() {
        return ["SearchChangesResponse|1 changes #0*|2 has_more 8|3 next_cursor 9?|4 total_count 5|5 total_count_is_lower_bound 8", hc];
      }
    }
    class lc extends Uo {
      constructor(t3) {
        super(), this.repos = [], this.filters = [], this.dropUnauthorizedRepos = false, this.viewerScoped = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lc, t3, e3);
      }
      static $() {
        return ["CountSectionsOfChangesRequest|1 repos #0*|2 filters #1*|3 drop_unauthorized_repos 8|4 viewer_scoped 8", o2, Ac];
      }
    }
    class mc extends Uo {
      constructor(t3) {
        super(), this.counts = [], this.droppedRepoCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mc, t3, e3);
      }
      static $() {
        return ["CountSectionsOfChangesResponse|1 counts 5*|2 dropped_repo_count 5"];
      }
    }
    class dc extends Uo {
      constructor(t3) {
        super(), this.cursorUserIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dc, t3, e3);
      }
      static $() {
        return ["ResolveSectionPersonalBotAuthorsRequest|1 cursor_user_ids 3*"];
      }
    }
    class fc extends Uo {
      constructor(t3) {
        super(), this.countsAsOwner = false, this.authors = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fc, t3, e3);
      }
      static $() {
        return ["ResolveSectionPersonalBotAuthorsResponse|1 counts_as_owner 8|2 authors #0*", pc];
      }
    }
    class pc extends Uo {
      constructor(t3) {
        super(), this.cursorUserId = n2.protoInt64.zero, this.serviceAccountIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pc, t3, e3);
      }
      static $() {
        return ["SectionPersonalBotAuthor|1 cursor_user_id 3|2 service_account_ids 9*"];
      }
    }
    class hc extends Uo {
      constructor(t3) {
        super(), this.id = "", this.number = 0, this.repoId = "", this.title = "", this.description = "", this.headRef = "", this.baseRef = "", this.status = Wo.UNSPECIFIED, this.headSha = "", this.baseSha = "", this.additions = 0, this.deletions = 0, this.changedFiles = 0, this.versionCount = 0, this.reviewers = [], this.totalThreadCount = 0, this.unresolvedThreadCount = 0, this.repoNamespace = "", this.repoName = "", this.labels = [], this.assignees = [], this.reviewRequests = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hc, t3, e3);
      }
      static $() {
        return ["SectionOfChanges|1 id 9|2 number 5|3 repo_id 9|4 title 9|5 description 9|6 head_ref 9|7 base_ref 9|9 status #0|10 created_at #1|11 updated_at #1|12 merged_at #1?|13 closed_at #1?|14 head_sha 9|15 base_sha 9|16 additions 5|17 deletions 5|18 changed_files 5|19 version_count 5|20 review_decision 9?|21 reviewers #2*|22 total_thread_count 5|23 unresolved_thread_count 5|24 parent_change_id 9?|25 stack_id 9?|26 repo_namespace 9|27 repo_name 9|31 author #3|32 viewer_last_viewed_at #1?|33 discussion_comment_count 5?|34 agent_wrote 8?|35 labels #4*|36 assignees #5*|37 review_requests #5*", Wo, n2.Timestamp, gc, No, yu, Ya];
      }
    }
    class gc extends Uo {
      constructor(t3) {
        super(), this.verdict = Yo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesReviewer|2 verdict #0|3 reviewed_at #1|7 author #2", Yo, n2.Timestamp, No];
      }
    }
    class Ac extends Uo {
      constructor(t3) {
        super(), this.kind = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ac().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ac().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ac().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ac, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilter|1 and #0 kind|2 or #1 kind|3 not #2 kind|4 consolidated_status #3 kind|5 title_contains #4 kind|6 description_contains #5 kind|7 merge_base #6 kind|8 trunk #7 kind|9 last_updated #8 kind|10 open_review_request_for #9 kind|11 reopened_review_request_for #10 kind|12 closed_review_request_from #11 kind|13 includes_direct_reviewer #12 kind|14 author_is #13 kind|15 review_status #14 kind|16 approved_by #15 kind|17 includes_past_reviewer #16 kind|18 has_label #17 kind|19 num_files_changed #18 kind|20 num_lines_changed #19 kind|21 includes_reviewer #20 kind|22 includes_assignee #21 kind|23 includes_direct_team_reviewer #22 kind|24 mentions #23 kind|25 merged_within #24 kind|100 unsupported #25 kind", _c, yc, wc, Sc, Jc, Bc, Ec, Ic, Cc, bc, kc, vc, qc, Rc, Pc, Tc, xc, Nc, Dc, Uc, Qc, Oc, Fc, Lc, $c, Gc];
      }
    }
    class _c extends Uo {
      constructor(t3) {
        super(), this.exprs = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_c, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterAnd|1 exprs #0*", Ac];
      }
    }
    class yc extends Uo {
      constructor(t3) {
        super(), this.exprs = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterOr|1 exprs #0*", Ac];
      }
    }
    class wc extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterNot|1 expr #0", Ac];
      }
    }
    class Sc extends Uo {
      constructor(t3) {
        super(), this.status = Wo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterConsolidatedStatus|1 status #0", Wo];
      }
    }
    class Jc extends Uo {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterTitleContains|1 text 9"];
      }
    }
    class Bc extends Uo {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterDescriptionContains|1 text 9"];
      }
    }
    class Ec extends Uo {
      constructor(t3) {
        super(), this.mergeBase = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ec().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ec().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ec().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ec, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterMergeBase|1 merge_base 9"];
      }
    }
    class Ic extends Uo {
      constructor(t3) {
        super(), this.trunk = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ic().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ic().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ic().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ic, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterTrunk|1 trunk 9"];
      }
    }
    class Cc extends Uo {
      constructor(t3) {
        super(), this.hours = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterLastUpdated|1 hours 5"];
      }
    }
    class bc extends Uo {
      constructor(t3) {
        super(), this.cursorUserId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterOpenReviewRequestFor|2 cursor_user_id 3"];
      }
    }
    class kc extends Uo {
      constructor(t3) {
        super(), this.cursorUserId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterReopenedReviewRequestFor|2 cursor_user_id 3"];
      }
    }
    class vc extends Uo {
      constructor(t3) {
        super(), this.cursorUserId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterClosedReviewRequestFrom|2 cursor_user_id 3"];
      }
    }
    class qc extends Uo {
      constructor(t3) {
        super(), this.cursorUserId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterIncludesDirectReviewer|2 cursor_user_id 3"];
      }
    }
    class Rc extends Uo {
      constructor(t3) {
        super(), this.cursorUserId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterAuthorIs|2 cursor_user_id 3"];
      }
    }
    class Pc extends Uo {
      constructor(t3) {
        super(), this.state = jo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterReviewStatus|1 state #0", jo];
      }
    }
    class Tc extends Uo {
      constructor(t3) {
        super(), this.cursorUserId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterApprovedBy|2 cursor_user_id 3"];
      }
    }
    class xc extends Uo {
      constructor(t3) {
        super(), this.cursorUserId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterIncludesPastReviewer|2 cursor_user_id 3"];
      }
    }
    class Nc extends Uo {
      constructor(t3) {
        super(), this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterHasLabel|1 name 9"];
      }
    }
    class Dc extends Uo {
      constructor(t3) {
        super(), this.numFiles = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterNumFilesChanged|1 num_files 5"];
      }
    }
    class Uc extends Uo {
      constructor(t3) {
        super(), this.numLines = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Uc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Uc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Uc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Uc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterNumLinesChanged|1 num_lines 5"];
      }
    }
    class Qc extends Uo {
      constructor(t3) {
        super(), this.groupPublicIds = [], this.cursorUserId = n2.protoInt64.zero, this.groupMembers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterIncludesReviewer|2 group_public_ids 9*|3 cursor_user_id 3|4 group_members #0*", Mc];
      }
    }
    class Mc extends Uo {
      constructor(t3) {
        super(), this.groupPublicId = "", this.cursorUserIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterReviewerGroupMembers|1 group_public_id 9|2 cursor_user_ids 3*"];
      }
    }
    class Oc extends Uo {
      constructor(t3) {
        super(), this.cursorUserId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Oc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Oc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Oc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Oc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterIncludesAssignee|2 cursor_user_id 3"];
      }
    }
    class Fc extends Uo {
      constructor(t3) {
        super(), this.slug = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterIncludesDirectTeamReviewer|1 slug 9"];
      }
    }
    class Lc extends Uo {
      constructor(t3) {
        super(), this.username = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterMentions|1 username 9"];
      }
    }
    class $c extends Uo {
      constructor(t3) {
        super(), this.hours = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($c, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterMergedWithin|1 hours 5"];
      }
    }
    class Gc extends Uo {
      constructor(t3) {
        super(), this.kind = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gc, t3, e3);
      }
      static $() {
        return ["SectionOfChangesFilterUnsupported|1 kind 9"];
      }
    }
    class Hc extends Uo {
      constructor(t3) {
        super(), this.verdict = Fo.UNSPECIFIED, this.body = "", this.versionNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hc, t3, e3);
      }
      static $() {
        return ["StartReviewRequest|1 change #0|2 verdict #1|3 body 9|4 version_number 4", na, Fo];
      }
    }
    class Kc extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kc, t3, e3);
      }
      static $() {
        return ["StartReviewResponse|1 review #0", va];
      }
    }
    class Vc extends Uo {
      constructor(t3) {
        super(), this.reviewId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vc, t3, e3);
      }
      static $() {
        return ["SubmitReviewRequest|1 change #0|2 review_id 9|3 verdict #1?|4 body 9?", na, Fo];
      }
    }
    class zc extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zc, t3, e3);
      }
      static $() {
        return ["SubmitReviewResponse|1 review #0", va];
      }
    }
    class Wc extends Uo {
      constructor(t3) {
        super(), this.reviewId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wc, t3, e3);
      }
      static $() {
        return ["DiscardPendingReviewRequest|1 change #0|2 review_id 9", na];
      }
    }
    class Yc extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yc, t3, e3);
      }
      static $() {
        return ["DiscardPendingReviewResponse"];
      }
    }
    class jc extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jc, t3, e3);
      }
      static $() {
        return ["GetPendingReviewRequest|1 change #0", na];
      }
    }
    class Xc extends Uo {
      constructor(t3) {
        super(), this.threadCount = 0, this.hasPendingComments = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xc, t3, e3);
      }
      static $() {
        return ["GetPendingReviewResponse|1 review #0?|2 thread_count 13|3 has_pending_comments 8", va];
      }
    }
    class Zc extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zc, t3, e3);
      }
      static $() {
        return ["CheckChangeCreationAccessRequest|1 identifier #0", o2];
      }
    }
    class tl extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tl, t3, e3);
      }
      static $() {
        return ["CheckChangeCreationAccessResponse"];
      }
    }
    class el extends Uo {
      constructor(t3) {
        super(), this.gate = "", this.headSha = "", this.verdict = "", this.summary = "", this.findings = [], this.gateFields = {}, this.links = [], this.rubricPath = "", this.lane = "", this.model = "", this.agent = "", this.transcriptUrl = "", this.transcriptId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new el().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new el().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new el().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(el, t3, e3);
      }
      static $() {
        return ["SubmitPullRequestGateReportRequest|1 change #0|2 gate 9|3 head_sha 9|4 verdict 9|5 summary 9|6 findings #1*|7 gate_fields 9,9|8 links #2*|9 rubric_path 9|10 lane 9|11 model 9|12 agent 9|13 transcript_url 9|14 transcript_id 9", na, il, ol];
      }
    }
    class rl extends Uo {
      constructor(t3) {
        super(), this.headSha = "", this.mediaType = "", this.bodyGzip = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rl, t3, e3);
      }
      static $() {
        return ["UploadPullRequestGateTranscriptRequest|1 change #0|2 head_sha 9|3 media_type 9|4 body_gzip 12", na];
      }
    }
    class nl extends Uo {
      constructor(t3) {
        super(), this.outcome = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nl, t3, e3);
      }
      static $() {
        return ["UploadPullRequestGateTranscriptResponse|1 uploaded #0 outcome|2 refused #1 outcome", sl, ul];
      }
    }
    class sl extends Uo {
      constructor(t3) {
        super(), this.id = "", this.sha256 = "", this.byteSize = n2.protoInt64.zero, this.mediaType = "", this.purged = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sl, t3, e3);
      }
      static $() {
        return ["PullRequestGateTranscript|1 id 9|2 sha256 9|3 byte_size 4|4 media_type 9|5 purged 8"];
      }
    }
    class il extends Uo {
      constructor(t3) {
        super(), this.id = "", this.severity = "", this.status = "", this.title = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new il().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new il().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new il().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(il, t3, e3);
      }
      static $() {
        return ["PullRequestGateReportFinding|1 id 9|2 severity 9|3 status 9|4 title 9|5 path 9?|6 line 13?"];
      }
    }
    class ol extends Uo {
      constructor(t3) {
        super(), this.label = "", this.url = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ol().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ol().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ol().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ol, t3, e3);
      }
      static $() {
        return ["PullRequestGateReportLink|1 label 9|2 url 9"];
      }
    }
    class al extends Uo {
      constructor(t3) {
        super(), this.outcome = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new al().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new al().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new al().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(al, t3, e3);
      }
      static $() {
        return ["SubmitPullRequestGateReportResponse|1 submitted #0 outcome|2 refused #1 outcome", cl, ul];
      }
    }
    class ul extends Uo {
      constructor(t3) {
        super(), this.reason = "", this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ul().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ul().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ul().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ul, t3, e3);
      }
      static $() {
        return ["PullRequestGateReportRefusal|1 reason 9|2 message 9"];
      }
    }
    class cl extends Uo {
      constructor(t3) {
        super(), this.id = "", this.gate = "", this.verdict = "", this.headSha = "", this.baseSha = "", this.client = "", this.summary = "", this.findings = [], this.proof = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cl, t3, e3);
      }
      static $() {
        return ["PullRequestGateReport|1 id 9|2 gate 9|3 verdict 9|4 head_sha 9|5 base_sha 9|6 client 9|7 lane 9?|8 model 9?|9 agent 9?|10 run_id 9?|11 transcript_url 9?|12 summary 9|13 findings #0*|14 created_at #1|15 transcript #2?|16 proof 9|17 audit #3?", il, n2.Timestamp, sl, ll];
      }
    }
    class ll extends Uo {
      constructor(t3) {
        super(), this.status = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ll().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ll().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ll().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ll, t3, e3);
      }
      static $() {
        return ["PullRequestGateReportAudit|1 status 9|2 reason 9?|3 completed_at #0?", n2.Timestamp];
      }
    }
    class ml extends Uo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ml().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ml().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ml().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ml, t3, e3);
      }
      static $() {
        return ["ListPullRequestGateReportsRequest|1 change #0|2 head_sha 9?", na];
      }
    }
    class dl extends Uo {
      constructor(t3) {
        super(), this.headSha = "", this.requiredGates = [], this.reports = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dl, t3, e3);
      }
      static $() {
        return ["ListPullRequestGateReportsResponse|1 head_sha 9|2 required_gates 9*|3 gates_file_unavailable_reason 9?|4 reports #0*", cl];
      }
    }
    const fl = "origin.v1.";
    class pl extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return fl;
      }
    }
    var hl = (0, s2.QT)(n2.proto3, fl, "ImportedGithubPullRequestState", [[0, "UNSPECIFIED"], [1, "OPEN"], [2, "CLOSED"], [3, "MERGED"]], 1), gl = (0, s2.QT)(n2.proto3, fl, "ImportedGithubReviewVerdict", [[0, "UNSPECIFIED"], [1, "APPROVE"], [2, "REQUEST_CHANGES"], [3, "COMMENT"]], 1), Al = (0, s2.QT)(n2.proto3, fl, "ImportedGithubCommentSide", [[0, "UNSPECIFIED"], [1, "LEFT"], [2, "RIGHT"]], 1);
    class _l extends pl {
      constructor(t3) {
        super(), this.allowDefaultActorFallback = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_l, t3, e3);
      }
      static $() {
        return ["ImportGithubPullRequestRequest|1 identifier #0|2 pull_request #1|3 allow_default_actor_fallback 8", o2, wl];
      }
    }
    class yl extends pl {
      constructor(t3) {
        super(), this.changeId = "", this.number = 0, this.versionsCreated = 0, this.reviewsCreated = 0, this.threadsCreated = 0, this.commentsCreated = 0, this.timelineEventsCreated = 0, this.warnings = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yl, t3, e3);
      }
      static $() {
        return ["ImportGithubPullRequestResponse|1 change_id 9|2 number 5|3 versions_created 5|4 reviews_created 5|5 threads_created 5|6 comments_created 5|7 timeline_events_created 5|8 warnings 9*"];
      }
    }
    class wl extends pl {
      constructor(t3) {
        super(), this.number = 0, this.githubNodeId = "", this.title = "", this.description = "", this.state = hl.UNSPECIFIED, this.draft = false, this.authorLogin = "", this.headRef = "", this.headSha = "", this.baseRef = "", this.baseSha = "", this.mergeCommitSha = "", this.mergedByLogin = "", this.reviews = [], this.reviewComments = [], this.issueComments = [], this.timelineEvents = [], this.actors = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wl, t3, e3);
      }
      static $() {
        return ["ImportedGithubPullRequest|1 number 5|2 github_node_id 9|3 title 9|4 description 9|5 state #0|6 draft 8|7 author_login 9|8 head_ref 9|9 head_sha 9|10 base_ref 9|11 base_sha 9|12 created_at #1|13 merged_at #1?|14 closed_at #1?|15 merge_commit_sha 9|16 merged_by_login 9|17 reviews #2*|18 review_comments #3*|19 issue_comments #4*|20 timeline_events #5*|21 actors #6*", hl, n2.Timestamp, Jl, Bl, El, Il, Sl];
      }
    }
    class Sl extends pl {
      constructor(t3) {
        super(), this.login = "", this.githubUserNodeId = "", this.githubUserDatabaseId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sl, t3, e3);
      }
      static $() {
        return ["ImportedGithubActor|1 login 9|2 github_user_node_id 9|3 github_user_database_id 3"];
      }
    }
    class Jl extends pl {
      constructor(t3) {
        super(), this.githubNodeId = "", this.authorLogin = "", this.verdict = gl.UNSPECIFIED, this.body = "", this.commitSha = "", this.dismissedByLogin = "", this.dismissalMessage = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jl, t3, e3);
      }
      static $() {
        return ["ImportedGithubReview|1 github_node_id 9|2 author_login 9|3 verdict #0|4 body 9|5 commit_sha 9|6 submitted_at #1|7 dismissed_at #1?|8 dismissed_by_login 9|9 dismissal_message 9", gl, n2.Timestamp];
      }
    }
    class Bl extends pl {
      constructor(t3) {
        super(), this.githubNodeId = "", this.reviewGithubNodeId = "", this.inReplyToGithubNodeId = "", this.authorLogin = "", this.body = "", this.path = "", this.commitSha = "", this.side = Al.UNSPECIFIED, this.startLine = 0, this.endLine = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bl, t3, e3);
      }
      static $() {
        return ["ImportedGithubReviewComment|1 github_node_id 9|2 review_github_node_id 9|3 in_reply_to_github_node_id 9|4 author_login 9|5 body 9|6 path 9|7 commit_sha 9|8 side #0|9 start_line 5|10 end_line 5|11 created_at #1", Al, n2.Timestamp];
      }
    }
    class El extends pl {
      constructor(t3) {
        super(), this.githubNodeId = "", this.authorLogin = "", this.body = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new El().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new El().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new El().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(El, t3, e3);
      }
      static $() {
        return ["ImportedGithubIssueComment|1 github_node_id 9|2 author_login 9|3 body 9|4 created_at #0", n2.Timestamp];
      }
    }
    class Il extends pl {
      constructor(t3) {
        super(), this.githubEvent = "", this.actorLogin = "", this.label = "", this.subjectLogin = "", this.previousTitle = "", this.newTitle = "", this.previousSha = "", this.newSha = "", this.previousBaseRef = "", this.newBaseRef = "", this.dismissedReviewGithubNodeId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Il().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Il().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Il().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Il, t3, e3);
      }
      static $() {
        return ["ImportedGithubTimelineEvent|1 github_event 9|2 actor_login 9|3 created_at #0|4 label 9|5 subject_login 9|6 previous_title 9|7 new_title 9|8 previous_sha 9|9 new_sha 9|10 previous_base_ref 9|11 new_base_ref 9|12 dismissed_review_github_node_id 9", n2.Timestamp];
      }
    }
    const Cl = "origin.v1.";
    class bl extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return Cl;
      }
    }
    var kl = (0, s2.QT)(n2.proto3, Cl, "MergeConflictResolutionState", [[0, "UNSPECIFIED"], [1, "UNAVAILABLE"], [2, "GENERATING"], [3, "READY"], [4, "NOT_CONFIDENT"], [5, "APPLIED"]], 1), vl = (0, s2.QT)(n2.proto3, Cl, "MergeConflictResolutionStaleCause", [[0, "UNSPECIFIED"], [1, "BASE_MOVED"], [2, "HEAD_MOVED"]], 1), ql = (0, s2.QT)(n2.proto3, Cl, "MergeConflictResolutionHunkKind", [[0, "UNSPECIFIED"], [1, "OURS"], [2, "THEIRS"], [3, "BASE"], [4, "UNION"], [5, "UNION_REVERSED"], [6, "DROP"], [7, "MERGED_LINES"], [8, "MERGED_TOKENS"], [9, "COMBINATION"], [10, "FORMATTER_MERGE"], [11, "STRUCTURAL"], [12, "CONTENT_SIDE"], [13, "KEEP_EDIT"], [14, "KEEP_DELETION"]], 1), Rl = (0, s2.QT)(n2.proto3, Cl, "MergeConflictResolutionLineSource", [[0, "UNSPECIFIED"], [1, "CONTEXT"], [2, "OURS"], [3, "THEIRS"], [4, "BOTH"], [5, "RESOLVED"]], 1), Pl = (0, s2.QT)(n2.proto3, Cl, "MergeConflictResolutionStepState", [[0, "UNSPECIFIED"], [1, "CLEAN"], [2, "RESOLVED"], [3, "UNRESOLVED"]], 1);
    class Tl extends bl {
      constructor(t3) {
        super(), this.landingRef = "", this.landingSha = "", this.changes = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tl, t3, e3);
      }
      static $() {
        return ["MergeConflictResolutionPin|1 landing_ref 9|2 landing_sha 9|3 changes #0*", xl];
      }
    }
    class xl extends bl {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, this.headSha = "", this.baseRef = "", this.recordedBaseSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xl, t3, e3);
      }
      static $() {
        return ["MergeConflictResolutionPinnedChange|1 change_number 4|2 head_sha 9|3 base_ref 9|4 recorded_base_sha 9"];
      }
    }
    class Nl extends bl {
      constructor(t3) {
        super(), this.path = "", this.hunkCount = 0, this.resolutionDigest = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nl, t3, e3);
      }
      static $() {
        return ["MergeConflictResolutionFile|1 path 9|2 hunk_count 13|3 resolution_digest 9"];
      }
    }
    class Dl extends bl {
      constructor(t3) {
        super(), this.text = "", this.source = Rl.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dl, t3, e3);
      }
      static $() {
        return ["MergeConflictResolutionPreviewLine|1 text 9|2 source #0", Rl];
      }
    }
    class Ul extends bl {
      constructor(t3) {
        super(), this.path = "", this.startLine = 0, this.endLine = 0, this.kind = ql.UNSPECIFIED, this.needsPerson = false, this.lines = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ul().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ul().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ul().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ul, t3, e3);
      }
      static $() {
        return ["MergeConflictResolutionPreviewHunk|1 path 9|2 start_line 13|3 end_line 13|4 kind #0|5 needs_person 8|6 lines #1*", ql, Dl];
      }
    }
    class Ql extends bl {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, this.title = "", this.state = Pl.UNSPECIFIED, this.merged = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ql().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ql().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ql().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ql, t3, e3);
      }
      static $() {
        return ["MergeConflictResolutionStackStep|1 change_number 4|2 title 9|3 author #0|4 state #1|5 merged 8", No, Pl];
      }
    }
    class Ml extends bl {
      constructor(t3) {
        super(), this.owningChangeNumber = n2.protoInt64.zero, this.steps = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ml().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ml().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ml().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ml, t3, e3);
      }
      static $() {
        return ["MergeConflictResolutionStackPlan|1 owning_change_number 4|2 steps #0*", Ql];
      }
    }
    class Ol extends bl {
      constructor(t3) {
        super(), this.state = kl.UNSPECIFIED, this.resolutionId = "", this.fileCount = 0, this.hunkCount = 0, this.reasonCode = "", this.reason = "", this.staleCause = vl.UNSPECIFIED, this.files = [], this.previewHunks = [], this.appliedCommitSha = "", this.undoAvailable = false, this.appliedByViewer = false, this.appliedOnChangeNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ol().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ol().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ol().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ol, t3, e3);
      }
      static $() {
        return ["MergeConflictResolution|1 state #0|2 resolution_id 9|3 pin #1|4 file_count 13|5 hunk_count 13|6 reason_code 9|7 reason 9|8 stale_cause #2|9 files #3*|10 preview_hunks #4*|11 stack_plan #5?|12 applied_commit_sha 9|13 undo_available 8|14 applied_by_viewer 8|15 applied_by #6|16 applied_on_change_number 4", kl, Tl, vl, Nl, Ul, Ml, No];
      }
    }
    class Fl extends bl {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fl, t3, e3);
      }
      static $() {
        return ["GetMergeConflictResolutionRequest|1 change #0", na];
      }
    }
    class Ll extends bl {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ll().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ll().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ll().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ll, t3, e3);
      }
      static $() {
        return ["GetMergeConflictResolutionResponse|1 resolution #0", Ol];
      }
    }
    class $l extends bl {
      constructor(t3) {
        super(), this.resolutionId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($l, t3, e3);
      }
      static $() {
        return ["ApplyMergeConflictResolutionRequest|1 change #0|2 resolution_id 9|3 expected #1", na, Tl];
      }
    }
    class Gl extends bl {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gl, t3, e3);
      }
      static $() {
        return ["ApplyMergeConflictResolutionResponse|1 resolution #0", Ol];
      }
    }
    class Hl extends bl {
      constructor(t3) {
        super(), this.resolutionId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hl, t3, e3);
      }
      static $() {
        return ["UndoMergeConflictResolutionRequest|1 change #0|2 resolution_id 9", na];
      }
    }
    class Kl extends bl {
      constructor(t3) {
        super(), this.restoredHeadSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kl, t3, e3);
      }
      static $() {
        return ["UndoMergeConflictResolutionResponse|1 resolution #0|2 restored_head_sha 9", Ol];
      }
    }
    const Vl = "origin.v1.";
    class zl extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return Vl;
      }
    }
    var Wl = (0, s2.QT)(n2.proto3, Vl, "CommentSide", [[0, "UNSPECIFIED"], [1, "LEFT"], [2, "RIGHT"]], 1), Yl = (0, s2.QT)(n2.proto3, Vl, "CommentThreadPortingStatus", [[0, "UNSPECIFIED"], [1, "PORTED"], [2, "ORPHANED"]], 1);
    class jl extends zl {
      constructor(t3) {
        super(), this.id = "", this.changeId = "", this.versionId = "", this.versionNumber = n2.protoInt64.zero, this.reviewId = "", this.path = "", this.side = Wl.UNSPECIFIED, this.startLine = 0, this.endLine = 0, this.externalId = "", this.comments = [], this.portedToVersionNumber = n2.protoInt64.zero, this.portingStatus = Yl.UNSPECIFIED, this.portedPath = "", this.portedStartLine = 0, this.portedEndLine = 0, this.versionHeadSha = "", this.versionBaseSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jl, t3, e3);
      }
      static $() {
        return ["CommentThread|1 id 9|2 change_id 9|3 version_id 9|4 version_number 4|5 review_id 9|6 resolved_at #0|8 path 9|9 side #1|10 start_line 13|11 end_line 13|12 external_id 9|13 created_at #0|14 updated_at #0|15 comments #2*|19 resolved_by #3|20 ported_to_version_number 4|21 porting_status #4|22 ported_path 9|23 ported_start_line 13|24 ported_end_line 13|25 version_head_sha 9|26 version_base_sha 9|27 version_created_at #0", n2.Timestamp, Wl, Ta, No, Yl];
      }
    }
    class Xl extends zl {
      constructor(t3) {
        super(), this.body = "", this.versionNumber = n2.protoInt64.zero, this.path = "", this.side = Wl.UNSPECIFIED, this.startLine = 0, this.endLine = 0, this.reviewId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xl, t3, e3);
      }
      static $() {
        return ["CreateCommentThreadRequest|1 change #0|2 body 9|3 version_number 4|4 path 9|5 side #1|6 start_line 13|7 end_line 13|8 review_id 9", na, Wl];
      }
    }
    class Zl extends zl {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zl().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zl().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zl().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zl, t3, e3);
      }
      static $() {
        return ["CreateCommentThreadResponse|1 thread #0", jl];
      }
    }
    class tm extends zl {
      constructor(t3) {
        super(), this.versionNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tm, t3, e3);
      }
      static $() {
        return ["ListCommentThreadsRequest|1 change #0|2 version_number 4", na];
      }
    }
    class em extends zl {
      constructor(t3) {
        super(), this.threads = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new em().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new em().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new em().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(em, t3, e3);
      }
      static $() {
        return ["ListCommentThreadsResponse|1 threads #0*", jl];
      }
    }
    class rm extends zl {
      constructor(t3) {
        super(), this.threadId = "", this.body = "", this.reviewId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rm, t3, e3);
      }
      static $() {
        return ["AddCommentToThreadRequest|1 change #0|2 thread_id 9|3 body 9|4 review_id 9", na];
      }
    }
    class nm extends zl {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nm, t3, e3);
      }
      static $() {
        return ["AddCommentToThreadResponse|1 comment #0", Ta];
      }
    }
    class sm extends zl {
      constructor(t3) {
        super(), this.threadId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sm, t3, e3);
      }
      static $() {
        return ["ResolveCommentThreadRequest|1 change #0|2 thread_id 9", na];
      }
    }
    class im extends zl {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new im().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new im().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new im().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(im, t3, e3);
      }
      static $() {
        return ["ResolveCommentThreadResponse|1 thread #0", jl];
      }
    }
    class om extends zl {
      constructor(t3) {
        super(), this.threadId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new om().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new om().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new om().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(om, t3, e3);
      }
      static $() {
        return ["ReopenCommentThreadRequest|1 change #0|2 thread_id 9", na];
      }
    }
    class am extends zl {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new am().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new am().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new am().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(am, t3, e3);
      }
      static $() {
        return ["ReopenCommentThreadResponse|1 thread #0", jl];
      }
    }
    class um extends zl {
      constructor(t3) {
        super(), this.commentId = "", this.body = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new um().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new um().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new um().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(um, t3, e3);
      }
      static $() {
        return ["UpdateCommentRequest|1 comment_id 9|2 body 9"];
      }
    }
    class cm extends zl {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cm, t3, e3);
      }
      static $() {
        return ["UpdateCommentResponse|1 comment #0", Ta];
      }
    }
    class lm extends zl {
      constructor(t3) {
        super(), this.commentId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lm, t3, e3);
      }
      static $() {
        return ["DeleteCommentRequest|1 comment_id 9"];
      }
    }
    class mm extends zl {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mm, t3, e3);
      }
      static $() {
        return ["DeleteCommentResponse"];
      }
    }
    class dm extends zl {
      constructor(t3) {
        super(), this.commentId = "", this.emoji = "", this.active = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dm, t3, e3);
      }
      static $() {
        return ["SetCommentReactionRequest|1 comment_id 9|2 emoji 9|3 active 8"];
      }
    }
    class fm extends zl {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fm, t3, e3);
      }
      static $() {
        return ["SetCommentReactionResponse"];
      }
    }
    class pm extends zl {
      constructor(t3) {
        super(), this.commentId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pm, t3, e3);
      }
      static $() {
        return ["ListCommentReactionsRequest|1 comment_id 9"];
      }
    }
    class hm extends zl {
      constructor(t3) {
        super(), this.reactions = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hm, t3, e3);
      }
      static $() {
        return ["ListCommentReactionsResponse|1 reactions #0*", Na];
      }
    }
    class gm extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Am extends gm {
      constructor(t3) {
        super(), this.filePath = "", this.versionId = "", this.headCommitSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Am().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Am().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Am().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Am, t3, e3);
      }
      static $() {
        return ["MarkFileAsViewedRequest|1 change #0|2 file_path 9|3 version_id 9|4 head_commit_sha 9", na];
      }
    }
    class _m extends gm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _m().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _m().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _m().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_m, t3, e3);
      }
      static $() {
        return ["MarkFileAsViewedResponse"];
      }
    }
    class ym extends gm {
      constructor(t3) {
        super(), this.filePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ym().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ym().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ym().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ym, t3, e3);
      }
      static $() {
        return ["UnmarkFileAsViewedRequest|1 change #0|2 file_path 9", na];
      }
    }
    class wm extends gm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wm, t3, e3);
      }
      static $() {
        return ["UnmarkFileAsViewedResponse"];
      }
    }
    class Sm extends gm {
      constructor(t3) {
        super(), this.directoryPath = "", this.filePaths = [], this.versionId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sm, t3, e3);
      }
      static $() {
        return ["MarkDirectoryAsViewedRequest|1 change #0|2 directory_path 9|3 file_paths 9*|4 version_id 9", na];
      }
    }
    class Jm extends gm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jm, t3, e3);
      }
      static $() {
        return ["MarkDirectoryAsViewedResponse"];
      }
    }
    class Bm extends gm {
      constructor(t3) {
        super(), this.filePaths = [], this.versionId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bm, t3, e3);
      }
      static $() {
        return ["MarkAllFilesAsViewedRequest|1 change #0|2 file_paths 9*|3 version_id 9", na];
      }
    }
    class Em extends gm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Em().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Em().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Em().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Em, t3, e3);
      }
      static $() {
        return ["MarkAllFilesAsViewedResponse"];
      }
    }
    class Im extends gm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Im().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Im().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Im().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Im, t3, e3);
      }
      static $() {
        return ["UnmarkAllFilesAsViewedRequest|1 change #0", na];
      }
    }
    class Cm extends gm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cm, t3, e3);
      }
      static $() {
        return ["UnmarkAllFilesAsViewedResponse"];
      }
    }
    class bm extends gm {
      constructor(t3) {
        super(), this.headCommitSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bm, t3, e3);
      }
      static $() {
        return ["ListFileViewedStatesRequest|1 change #0|2 head_commit_sha 9", na];
      }
    }
    class km extends gm {
      constructor(t3) {
        super(), this.fileViewedStates = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new km().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new km().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new km().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(km, t3, e3);
      }
      static $() {
        return ["ListFileViewedStatesResponse|1 file_viewed_states #0*|2 head_version_id 9?", vm];
      }
    }
    class vm extends gm {
      constructor(t3) {
        super(), this.filePath = "", this.versionId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vm, t3, e3);
      }
      static $() {
        return ["FileViewedState|1 file_path 9|2 version_id 9|3 stale 8?"];
      }
    }
    const qm = "origin.v1.";
    class Rm extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return qm;
      }
    }
    var Pm = (0, s2.QT)(n2.proto3, qm, "PullRequestViewedCursor", [[0, "UNSPECIFIED"], [1, "OPENED"], [2, "TIMELINE"]], 1);
    class Tm extends Rm {
      constructor(t3) {
        super(), this.cursor = Pm.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tm, t3, e3);
      }
      static $() {
        return ["MarkPullRequestAsViewedRequest|1 change #0|2 viewed_at #1|3 cursor #2", na, n2.Timestamp, Pm];
      }
    }
    class xm extends Rm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xm, t3, e3);
      }
      static $() {
        return ["MarkPullRequestAsViewedResponse|1 viewed_at #0|2 timeline_viewed_at #0?", n2.Timestamp];
      }
    }
    class Nm extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Dm extends Nm {
      constructor(t3) {
        super(), this.prUrl = "", this.headSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dm, t3, e3);
      }
      static $() {
        return ["GeneratedCodeTourStackMember|1 pr_url 9|2 head_sha 9"];
      }
    }
    class Um extends Nm {
      constructor(t3) {
        super(), this.id = "", this.storageKey = "", this.result = "", this.machineGenerated = false, this.updatedAtMs = n2.protoInt64.zero, this.stackId = "", this.stackMembers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Um().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Um().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Um().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Um, t3, e3);
      }
      static $() {
        return ["GeneratedCodeTour|1 id 9|2 storage_key 9|3 result 9|4 agentic_markdown 9?|5 agentic_error_message 9?|6 format_version 13?|7 prompt_revision 13?|8 machine_generated 8|9 updated_at_ms 3|10 stack_id 9|11 stack_members #0*", Dm];
      }
    }
    class Qm extends Nm {
      constructor(t3) {
        super(), this.storageKey = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qm, t3, e3);
      }
      static $() {
        return ["GetGeneratedCodeTourRequest|1 change #0|2 storage_key 9", na];
      }
    }
    class Mm extends Nm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mm, t3, e3);
      }
      static $() {
        return ["GetGeneratedCodeTourResponse|1 tour #0?", Um];
      }
    }
    class Om extends Nm {
      constructor(t3) {
        super(), this.storageKey = "", this.headSha = "", this.result = "", this.featureConfigurationJson = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Om().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Om().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Om().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Om, t3, e3);
      }
      static $() {
        return ["UpsertGeneratedCodeTourRequest|1 change #0|2 storage_key 9|3 head_sha 9|4 result 9|5 agentic_markdown 9?|6 agentic_error_message 9?|7 feature_configuration_json 9|8 expected_agentic_markdown_sha256 9?", na];
      }
    }
    class Fm extends Nm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fm, t3, e3);
      }
      static $() {
        return ["UpsertGeneratedCodeTourResponse|1 tour #0", Um];
      }
    }
    class Lm extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class $m extends Lm {
      constructor(t3) {
        super(), this.id = "", this.changeId = "", this.repoUuid = "", this.changeNumber = n2.protoInt64.zero, this.status = "", this.source = "", this.trunkBranch = "", this.consecutiveFailedAttempts = 0, this.dev = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $m().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $m().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $m().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($m, t3, e3);
      }
      static $() {
        return ["ChangeMergeWhenReady|1 id 9|2 change_id 9|3 repo_uuid 9|4 change_number 4|6 status 9|7 source 9|8 trunk_branch 9|9 lock_expires_at #0?|10 consecutive_failed_attempts 5|11 dev 8|12 repo_org 9?|13 repo_name 9?|14 enabled_by #1", n2.Timestamp, No];
      }
    }
    class Gm extends Lm {
      constructor(t3) {
        super(), this.trunkBranch = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gm, t3, e3);
      }
      static $() {
        return ["EnableChangeMergeWhenReadyRequest|1 change #0|2 trunk_branch 9|3 source 9?|4 dev 8?", na];
      }
    }
    class Hm extends Lm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hm, t3, e3);
      }
      static $() {
        return ["EnableChangeMergeWhenReadyResponse|1 record #0", $m];
      }
    }
    class Km extends Lm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Km().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Km().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Km().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Km, t3, e3);
      }
      static $() {
        return ["GetChangeMergeWhenReadyRequest|1 change #0|2 status 9?", na];
      }
    }
    class Vm extends Lm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vm, t3, e3);
      }
      static $() {
        return ["GetChangeMergeWhenReadyResponse|1 record #0?", $m];
      }
    }
    class zm extends Lm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zm, t3, e3);
      }
      static $() {
        return ["DisableChangeMergeWhenReadyRequest|1 change #0", na];
      }
    }
    class Wm extends Lm {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wm().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wm().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wm().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wm, t3, e3);
      }
      static $() {
        return ["DisableChangeMergeWhenReadyResponse"];
      }
    }
    const Ym = "origin.v1.";
    var jm = (0, s2.QT)(n2.proto3, Ym, "CheckRunLifecycleStatus", [[0, "CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED"], [1, "queued"], [2, "in_progress"], [3, "completed"], [4, "rerequested"], [5, "failing"]]), Xm = (0, s2.QT)(n2.proto3, Ym, "CheckRunConclusion", [[0, "CHECK_RUN_CONCLUSION_UNSPECIFIED"], [1, "success"], [2, "failure"], [3, "neutral"], [4, "cancelled"], [5, "skipped"], [6, "timed_out"], [7, "action_required"], [8, "stale"]]);
    const Zm = "origin.v1.";
    class td extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return Zm;
      }
    }
    var ed = (0, s2.QT)(n2.proto3, Zm, "CommitCheckRollupState", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "SUCCESS"], [3, "PENDING"], [4, "FAILURE"]], 1), rd = (0, s2.QT)(n2.proto3, Zm, "CheckRunAnnotationLevel", [[0, "UNSPECIFIED"], [1, "NOTICE"], [2, "WARNING"], [3, "FAILURE"]], 1), nd = (0, s2.QT)(n2.proto3, Zm, "MergeabilityScope", [[0, "UNSPECIFIED"], [1, "STACK"], [2, "SINGLE_CHANGE"]], 1), sd = (0, s2.QT)(n2.proto3, Zm, "RestackStackMemberOutcome", [[0, "UNSPECIFIED"], [1, "OK"], [2, "ALREADY_CURRENT"], [3, "CONFLICT"], [4, "SKIPPED"]], 1);
    class id extends td {
      constructor(t3) {
        super(), this.sha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new id().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new id().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new id().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(id, t3, e3);
      }
      static $() {
        return ["GetCiStateRequest|1 identifier #0|2 sha 9|3 change_number 4?|4 version_number 4?|5 use_latest_version 8?|6 include_check_run_annotations 8?", o2];
      }
    }
    class od extends td {
      constructor(t3) {
        super(), this.checkRunGroups = [], this.missingRequiredChecks = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new od().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new od().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new od().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(od, t3, e3);
      }
      static $() {
        return ["GetCiStateResponse|1 check_run_groups #0*|2 missing_required_checks #1*|3 resolved_head_sha 9?", Sd, gd];
      }
    }
    class ad extends td {
      constructor(t3) {
        super(), this.shas = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ad().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ad().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ad().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ad, t3, e3);
      }
      static $() {
        return ["BatchGetCommitCheckRollupsRequest|1 identifier #0|2 shas 9*", o2];
      }
    }
    class ud extends td {
      constructor(t3) {
        super(), this.sha = "", this.state = ed.UNSPECIFIED, this.successCount = 0, this.pendingCount = 0, this.failureCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ud().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ud().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ud().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ud, t3, e3);
      }
      static $() {
        return ["CommitCheckRollup|1 sha 9|2 state #0|3 success_count 13|4 pending_count 13|5 failure_count 13", ed];
      }
    }
    class cd extends td {
      constructor(t3) {
        super(), this.rollups = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cd, t3, e3);
      }
      static $() {
        return ["BatchGetCommitCheckRollupsResponse|1 rollups #0*", ud];
      }
    }
    class ld extends td {
      constructor(t3) {
        super(), this.checkRunId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ld().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ld().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ld().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ld, t3, e3);
      }
      static $() {
        return ["GetCheckRunRequest|1 identifier #0|2 check_run_id 9", o2];
      }
    }
    class md extends td {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new md().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new md().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new md().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(md, t3, e3);
      }
      static $() {
        return ["GetCheckRunResponse|1 check_run #0", yd];
      }
    }
    class dd extends td {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dd, t3, e3);
      }
      static $() {
        return ["ListRepoCheckSourcesRequest|1 identifier #0", o2];
      }
    }
    class fd extends td {
      constructor(t3) {
        super(), this.runKey = "", this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fd, t3, e3);
      }
      static $() {
        return ["RepoCheckSourceRun|1 run_key 9|2 name 9"];
      }
    }
    class pd extends td {
      constructor(t3) {
        super(), this.groupKey = "", this.suiteName = "", this.runs = [], this.lastSeenAtUnixMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pd, t3, e3);
      }
      static $() {
        return ["RepoCheckSource|1 actor #0|2 group_key 9|3 suite_name 9|4 runs #1*|5 last_seen_at_unix_ms 3", Ad, fd];
      }
    }
    class hd extends td {
      constructor(t3) {
        super(), this.sources = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hd, t3, e3);
      }
      static $() {
        return ["ListRepoCheckSourcesResponse|1 sources #0*", pd];
      }
    }
    class gd extends td {
      constructor(t3) {
        super(), this.displayName = "", this.identityPath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gd, t3, e3);
      }
      static $() {
        return ["MissingRequiredCheck|1 display_name 9|2 identity_path 9"];
      }
    }
    class Ad extends td {
      constructor(t3) {
        super(), this.kind = "", this.id = "", this.displayName = "", this.iconUrl = "", this.appId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ad().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ad().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ad().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ad, t3, e3);
      }
      static $() {
        return ["CheckRunActor|1 kind 9|2 id 9|3 display_name 9|5 icon_url 9|6 app_id 9"];
      }
    }
    class _d extends td {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _d().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _d().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _d().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_d, t3, e3);
      }
      static $() {
        return ["CheckRunOutput|1 title 9?|2 summary 9?|3 text 9?"];
      }
    }
    class yd extends td {
      constructor(t3) {
        super(), this.id = "", this.name = "", this.status = jm.CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED, this.externalId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yd, t3, e3);
      }
      static $() {
        return ["CheckRunStatus|1 id 9|2 name 9|4 details_url 9?|5 status #0|6 conclusion #1?|7 started_at_unix_ms 3?|8 completed_at_unix_ms 3?|9 external_id 9|10 required 8?|11 output #2?|12 deadline_at_unix_ms 3?|13 is_rerequestable 8?|14 rerequested_at_unix_ms 3?|15 annotations #3?|16 base_sha 9?", jm, Xm, _d, wd];
      }
    }
    class wd extends td {
      constructor(t3) {
        super(), this.annotations = [], this.truncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wd, t3, e3);
      }
      static $() {
        return ["CheckRunAnnotationBatch|1 annotations #0*|2 truncated 8", qd];
      }
    }
    class Sd extends td {
      constructor(t3) {
        super(), this.id = "", this.name = "", this.checkRuns = [], this.externalId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sd, t3, e3);
      }
      static $() {
        return ["CheckRunGroup|1 id 9|2 name 9|4 details_url 9?|5 check_runs #0*|6 actor #1|7 external_id 9|8 base_sha 9?", yd, Ad];
      }
    }
    class Jd extends td {
      constructor(t3) {
        super(), this.checkRunGroups = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jd, t3, e3);
      }
      static $() {
        return ["CiState|1 check_run_groups #0*", Sd];
      }
    }
    class Bd extends td {
      constructor(t3) {
        super(), this.headSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bd, t3, e3);
      }
      static $() {
        return ["PostCheckRunRequest|1 identifier #0|2 head_sha 9|3 group #1|4 check #2", o2, Ed, Id];
      }
    }
    class Ed extends td {
      constructor(t3) {
        super(), this.key = "", this.name = "", this.externalId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ed().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ed().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ed().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ed, t3, e3);
      }
      static $() {
        return ["CheckRunGroupInput|1 key 9|2 name 9|3 external_id 9|4 details_url 9?"];
      }
    }
    class Id extends td {
      constructor(t3) {
        super(), this.key = "", this.name = "", this.externalId = "", this.status = jm.CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED, this.externalUpdatedAtUnixMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Id().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Id().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Id().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Id, t3, e3);
      }
      static $() {
        return ["CheckRunInput|1 key 9|2 name 9|3 external_id 9|4 status #0|5 conclusion #1?|6 external_updated_at_unix_ms 3|7 started_at_unix_ms 3?|8 completed_at_unix_ms 3?|10 details_url 9?|11 output #2?|12 deadline_at_unix_ms 3?|13 is_rerequestable 8?", jm, Xm, _d];
      }
    }
    class Cd extends td {
      constructor(t3) {
        super(), this.repoId = "", this.sha = "", this.checkRunGroupId = "", this.checkRunId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cd, t3, e3);
      }
      static $() {
        return ["PostCheckRunResponse|1 repo_id 9|2 sha 9|3 check_run_group_id 9|4 check_run_id 9"];
      }
    }
    class bd extends td {
      constructor(t3) {
        super(), this.startColumn = 0, this.endColumn = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bd, t3, e3);
      }
      static $() {
        return ["CheckRunAnnotationColumnRange|1 start_column 5|2 end_column 5"];
      }
    }
    class kd extends td {
      constructor(t3) {
        super(), this.path = "", this.startLine = 0, this.endLine = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kd, t3, e3);
      }
      static $() {
        return ["CheckRunAnnotationLocation|1 path 9|2 start_line 5|3 end_line 5|4 columns #0", bd];
      }
    }
    class vd extends td {
      constructor(t3) {
        super(), this.annotationLevel = rd.UNSPECIFIED, this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vd, t3, e3);
      }
      static $() {
        return ["CheckRunAnnotationInput|4 annotation_level #0|5 message 9|8 title 9?|9 raw_details 9?|11 location #1", rd, kd];
      }
    }
    class qd extends td {
      constructor(t3) {
        super(), this.id = "", this.checkRunId = "", this.annotationLevel = rd.UNSPECIFIED, this.message = "", this.createdAtUnixMs = n2.protoInt64.zero, this.updatedAtUnixMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qd, t3, e3);
      }
      static $() {
        return ["CheckRunAnnotation|1 id 9|2 check_run_id 9|3 annotation_level #0|4 message 9|5 title 9?|6 raw_details 9?|7 created_at_unix_ms 3|8 updated_at_unix_ms 3|9 location #1", rd, kd];
      }
    }
    class Rd extends td {
      constructor(t3) {
        super(), this.checkRunId = "", this.annotations = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rd, t3, e3);
      }
      static $() {
        return ["CreateCheckRunAnnotationsRequest|1 identifier #0|2 check_run_id 9|3 annotations #1*", o2, vd];
      }
    }
    class Pd extends td {
      constructor(t3) {
        super(), this.annotations = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pd, t3, e3);
      }
      static $() {
        return ["CreateCheckRunAnnotationsResponse|1 annotations #0*", qd];
      }
    }
    class Td extends td {
      constructor(t3) {
        super(), this.checkRunId = "", this.pageSize = 0, this.pageToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Td().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Td().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Td().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Td, t3, e3);
      }
      static $() {
        return ["ListCheckRunAnnotationsRequest|1 identifier #0|2 check_run_id 9|3 page_size 5|4 page_token 9", o2];
      }
    }
    class xd extends td {
      constructor(t3) {
        super(), this.annotations = [], this.nextPageToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xd, t3, e3);
      }
      static $() {
        return ["ListCheckRunAnnotationsResponse|1 annotations #0*|2 next_page_token 9", qd];
      }
    }
    class Nd extends td {
      constructor(t3) {
        super(), this.checkRunId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nd, t3, e3);
      }
      static $() {
        return ["RerequestCheckRunRequest|1 change #0|2 check_run_id 9", na];
      }
    }
    class Dd extends td {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dd, t3, e3);
      }
      static $() {
        return ["RerequestCheckRunResponse|1 check_run #0", yd];
      }
    }
    class Ud extends td {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, this.scope = nd.UNSPECIFIED, this.previewRestackConflict = false, this.includeDefaultMergeMode = false, this.includeSummary = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ud().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ud().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ud().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ud, t3, e3);
      }
      static $() {
        return ["GetChangesetMergeabilityRequest|1 identifier #0|2 change_number 4|3 expected_head_sha 9?|4 scope #1|5 preview_restack_conflict 8|6 include_default_merge_mode 8|7 include_head_ref_exists 8?|8 include_summary 8", o2, nd];
      }
    }
    class Qd extends td {
      constructor(t3) {
        super(), this.mergeable = false, this.ciPassing = false, this.meetsApprovalRequirements = false, this.hasMergeConflicts = false, this.conflictedPaths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qd, t3, e3);
      }
      static $() {
        return ["GetChangesetMergeabilityResponse|1 mergeable 8|2 ci_passing 8|3 ci_state #0|4 meets_approval_requirements 8|5 has_merge_conflicts 8|6 mergeability #1|7 stack_mergeability #2?|8 conflicted_paths 9*|9 review_decision 9?|10 evaluated_head_sha 9?|11 evaluated_base_tip_sha 9?|12 default_merge_mode #3?|13 head_ref_exists 8?|15 target_rules_unread 8?|16 summary #4?", Jd, Fd, Yd, Fn, Md];
      }
    }
    class Md extends td {
      constructor(t3) {
        super(), this.verdict = "", this.blockers = [], this.evaluatedChangeNumbers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Md().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Md().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Md().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Md, t3, e3);
      }
      static $() {
        return ["ChangesetMergeabilitySummary|1 verdict 9|2 blockers #0*|3 evaluated_change_numbers 4*", Od];
      }
    }
    class Od extends td {
      constructor(t3) {
        super(), this.kind = "", this.message = "", this.changeNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Od().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Od().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Od().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Od, t3, e3);
      }
      static $() {
        return ["ChangesetMergeabilitySummaryBlocker|1 kind 9|2 message 9|3 change_number 4|4 required_checks_state 9?|5 required_approval_count 13?|6 approved_count 13?|7 conflict_inherited_from_downstack 8?|8 invalid_stack_reason 9?"];
      }
    }
    class Fd extends td {
      constructor(t3) {
        super(), this.verdict = "", this.evaluations = [], this.blockers = [], this.configurationDiagnostics = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fd, t3, e3);
      }
      static $() {
        return ["ChangesetMergeability|1 verdict 9|2 evaluations #0*|3 blockers #1*|4 configuration_diagnostics #2*", Ld, zd, Wd];
      }
    }
    class Ld extends td {
      constructor(t3) {
        super(), this.ruleType = "", this.rulesetId = "", this.rulesetName = "", this.ruleId = "", this.enforcement = "", this.result = "", this.message = "", this.category = "", this.violations = [], this.gatesWaivedChecks = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ld().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ld().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ld().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ld, t3, e3);
      }
      static $() {
        return ["ChangesetRuleEvaluation|1 rule_type 9|2 ruleset_id 9|3 ruleset_name 9|4 rule_id 9|5 enforcement 9|6 result 9|7 message 9|8 category 9|9 violations #0*|10 satisfied_by #1?|11 gates_waived_checks #2*", Kd, Gd, $d];
      }
    }
    class $d extends td {
      constructor(t3) {
        super(), this.name = "", this.checkRunIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $d().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $d().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $d().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($d, t3, e3);
      }
      static $() {
        return ["ChangesetGatesWaivedCheck|1 name 9|2 check_run_ids 9*"];
      }
    }
    class Gd extends td {
      constructor(t3) {
        super(), this.kind = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gd, t3, e3);
      }
      static $() {
        return ["ChangesetReviewSatisfaction|1 kind 9|2 gates #0?", Hd];
      }
    }
    class Hd extends td {
      constructor(t3) {
        super(), this.headSha = "", this.landingBaseSha = "", this.gatesFileBlobOid = "", this.approved = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hd, t3, e3);
      }
      static $() {
        return ["ChangesetGatesResult|1 head_sha 9|2 landing_base_sha 9|3 gates_file_blob_oid 9|4 approved #0*|5 trunk_tip_gates_file_blob_oid 9?", Ra];
      }
    }
    class Kd extends td {
      constructor(t3) {
        super(), this.ruleType = "", this.detail = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kd, t3, e3);
      }
      static $() {
        return ["ChangesetRuleViolation|1 rule_type 9|2 detail 9|3 remediation 9?|4 actionable_signal #0?", Vd];
      }
    }
    class Vd extends td {
      constructor(t3) {
        super(), this.kind = "", this.checkNames = [], this.ownerLabels = [], this.paths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vd, t3, e3);
      }
      static $() {
        return ["ChangesetRuleActionableSignal|1 kind 9|2 check_names 9*|3 required_count 5?|4 actual_count 5?|5 owner_labels 9*|6 paths 9*"];
      }
    }
    class zd extends td {
      constructor(t3) {
        super(), this.kind = "", this.mergedChangeNumbers = [], this.openChangeNumbers = [], this.conflictedPaths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zd, t3, e3);
      }
      static $() {
        return ["ChangesetMergeBlocker|1 kind 9|2 rule_failure #0?|3 merge_ref_sha 9?|4 base_tip_sha_at_computation 9?|5 current_base_tip_sha 9?|6 ruleset_id 9?|7 rule_id 9?|8 enforcement 9?|9 message 9?|10 change_number 4?|11 merge_commit_oid 9?|12 merged_change_numbers 4*|13 open_change_numbers 4*|14 top_change_number 4?|15 downstack_change_number 4?|16 top_head_sha 9?|17 downstack_head_sha 9?|18 compare_status 9?|19 topology_reason 9?|20 root_base_ref 9?|21 conflicted_paths 9*|22 conflict_inherited_from_downstack 8?|23 recorded_base_sha 9?|24 target_base_ref 9?", Ld];
      }
    }
    class Wd extends td {
      constructor(t3) {
        super(), this.kind = "", this.severity = "", this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wd, t3, e3);
      }
      static $() {
        return ["ChangesetRuleConfigurationDiagnostic|1 kind 9|2 severity 9|3 message 9|4 ruleset_id 9?|5 rule_id 9?|6 bypass_actor_id 9?|7 enforcement 9?"];
      }
    }
    class Yd extends td {
      constructor(t3) {
        super(), this.targetChangeNumber = n2.protoInt64.zero, this.prefixChangeNumbers = [], this.rootBaseRef = "", this.verdict = "", this.blockers = [], this.memberEvaluations = [], this.convergenceConflictedPaths = [], this.restackConflictedPaths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yd, t3, e3);
      }
      static $() {
        return ["StackMergeability|1 target_change_number 4|2 prefix_change_numbers 4*|3 root_base_ref 9|4 verdict 9|5 blockers #0*|6 member_evaluations #1*|7 convergence_state 9?|8 convergence_conflicted_change_number 4?|9 convergence_conflicted_paths 9*|10 convergence_updated_at 9?|11 restack_conflicted_change_number 4?|12 restack_conflicted_paths 9*|13 restack_preview_pending 8?", zd, jd];
      }
    }
    class jd extends td {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, this.role = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jd, t3, e3);
      }
      static $() {
        return ["StackMemberEvaluation|1 change_number 4|2 role 9|3 mergeability #0", Fd];
      }
    }
    class Xd extends td {
      constructor(t3) {
        super(), this.topChangeNumber = n2.protoInt64.zero, this.mode = Fn.UNSPECIFIED, this.expectedTargetHeadSha = "", this.expectedMemberHeadShas = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xd, t3, e3);
      }
      static $() {
        return ["MergeStackRequest|1 identifier #0|2 top_change_number 4|3 mode #1|4 expected_target_head_sha 9|5 commit_title 9?|6 commit_message 9?|7 bypass_merge_queue 8?|8 allow_open_pull_request_base 8?|9 expected_member_head_shas 4,9", o2, Fn];
      }
    }
    class Zd extends td {
      constructor(t3) {
        super(), this.mergeCommitSha = "", this.mergedChangeNumbers = [], this.mergeQueueEntryId = "", this.mergeQueueSkipped = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zd().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zd().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zd().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zd, t3, e3);
      }
      static $() {
        return ["MergeStackResponse|1 merge_commit_sha 9|2 merged_change_numbers 4*|3 merge_queue_entry_id 9|4 merge_queue_skipped 8"];
      }
    }
    class tf extends td {
      constructor(t3) {
        super(), this.topChangeNumber = n2.protoInt64.zero, this.dryRun = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tf, t3, e3);
      }
      static $() {
        return ["RestackStackRequest|1 identifier #0|2 top_change_number 4|3 dry_run 8", o2];
      }
    }
    class ef extends td {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, this.headSha = "", this.ontoRef = "", this.outcome = sd.UNSPECIFIED, this.conflictedPaths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ef().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ef().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ef().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ef, t3, e3);
      }
      static $() {
        return ["RestackStackDryRunMember|1 change_number 4|2 head_sha 9|3 onto_ref 9|4 onto_sha 9?|5 new_head_sha 9?|6 outcome #0|7 conflicted_paths 9*", sd];
      }
    }
    class rf extends td {
      constructor(t3) {
        super(), this.restackedChangeNumbers = [], this.dryRunMembers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rf, t3, e3);
      }
      static $() {
        return ["RestackStackResponse|1 restacked_change_numbers 4*|2 dry_run_members #0*", ef];
      }
    }
    class nf extends td {
      constructor(t3) {
        super(), this.runId = "", this.jobName = "", this.headSha = "", this.cause = { case: void 0 }, this.runActive = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nf, t3, e3);
      }
      static $() {
        return ["OriginCiJob|1 run_id 9|2 job_name 9|3 head_sha 9|4 pull_request_number 4 cause|5 push_ref 9 cause|6 run_active 8|7 result #0?", sf];
      }
    }
    class sf extends td {
      constructor(t3) {
        super(), this.conclusion = Xm.CHECK_RUN_CONCLUSION_UNSPECIFIED, this.completedAtUnixMs = n2.protoInt64.zero, this.logTruncated = false, this.steps = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sf, t3, e3);
      }
      static $() {
        return ["OriginCiJobResult|1 conclusion #0|2 exit_code 5?|3 image 9?|4 note 9?|5 started_at_unix_ms 3?|6 completed_at_unix_ms 3|7 log_bytes 3?|8 log_truncated 8|9 steps #1*", Xm, of];
      }
    }
    class of extends td {
      constructor(t3) {
        super(), this.index = 0, this.startedAtUnixMs = n2.protoInt64.zero, this.completedAtUnixMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new of().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new of().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new of().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(of, t3, e3);
      }
      static $() {
        return ["OriginCiJobStep|1 index 13|2 started_at_unix_ms 3|3 completed_at_unix_ms 3"];
      }
    }
    class af extends td {
      constructor(t3) {
        super(), this.runId = "", this.jobName = "", this.offset = n2.protoInt64.zero, this.limit = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new af().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new af().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new af().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(af, t3, e3);
      }
      static $() {
        return ["GetOriginCiJobLogRequest|1 identifier #0|2 run_id 9|3 job_name 9|4 offset 3|5 limit 3|6 live_cursor 9?", o2];
      }
    }
    class uf extends td {
      constructor(t3) {
        super(), this.data = new Uint8Array(0), this.offset = n2.protoInt64.zero, this.totalBytes = n2.protoInt64.zero, this.liveCursor = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new uf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new uf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new uf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(uf, t3, e3);
      }
      static $() {
        return ["GetOriginCiJobLogResponse|1 job #0|2 data 12|3 offset 3|4 total_bytes 3|5 live_cursor 9", nf];
      }
    }
    const cf = "origin.v1.";
    class lf extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return cf;
      }
    }
    var mf = (0, s2.QT)(n2.proto3, cf, "MergeQueueValidationCheckMode", [[0, "UNSPECIFIED"], [1, "ALL_TRUNK_RULESETS"], [2, "QUEUE_CHECKS_ONLY"]], 1), df = (0, s2.QT)(n2.proto3, cf, "MergeQueueConfigOutcome", [[0, "UNSPECIFIED"], [1, "CREATED"], [2, "RE_ENABLED"], [3, "ALREADY_ENABLED"], [4, "DISABLED"], [5, "ALREADY_DISABLED"], [6, "UPDATED"], [7, "UNCHANGED"]], 1);
    class ff extends lf {
      constructor(t3) {
        super(), this.expectedHeadSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ff().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ff().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ff().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ff, t3, e3);
      }
      static $() {
        return ["EnqueueForMergeRequest|1 change #0|2 expected_head_sha 9", na];
      }
    }
    class pf extends lf {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pf, t3, e3);
      }
      static $() {
        return ["EnqueueForMergeResponse|1 entry #0", Mf];
      }
    }
    class hf extends lf {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hf, t3, e3);
      }
      static $() {
        return ["CancelMergeQueueEntryRequest|1 change #0", na];
      }
    }
    class gf extends lf {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gf, t3, e3);
      }
      static $() {
        return ["CancelMergeQueueEntryResponse|1 entry #0", Mf];
      }
    }
    class Af extends lf {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Af().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Af().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Af().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Af, t3, e3);
      }
      static $() {
        return ["GetMergeQueueStatusRequest|1 change #0", na];
      }
    }
    class _f extends lf {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _f().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _f().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _f().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_f, t3, e3);
      }
      static $() {
        return ["GetMergeQueueStatusResponse|1 entry #0", Mf];
      }
    }
    class yf extends lf {
      constructor(t3) {
        super(), this.targetRef = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yf, t3, e3);
      }
      static $() {
        return ["GetMergeQueueRequest|1 identifier #0|2 target_ref 9", o2];
      }
    }
    class wf extends lf {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wf, t3, e3);
      }
      static $() {
        return ["GetMergeQueueResponse|1 queue #0", Tf];
      }
    }
    class Sf extends lf {
      constructor(t3) {
        super(), this.queueId = "", this.targetRef = "", this.speculationDepth = 0, this.maxConcurrentValidations = 0, this.validationTimeoutMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sf, t3, e3);
      }
      static $() {
        return ["MergeQueueConfig|1 queue_id 9|2 target_ref 9|3 enabled 8?|4 speculation_depth 13|5 max_concurrent_validations 13|6 validation_timeout_ms 4|7 validation_checks #0", Bf];
      }
    }
    class Jf extends lf {
      constructor(t3) {
        super(), this.actorKind = "", this.actorId = "", this.groupKey = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jf, t3, e3);
      }
      static $() {
        return ["MergeQueueRequiredCheck|1 actor_kind 9|2 actor_id 9|3 group_key 9|4 run_key 9?|5 name 9?"];
      }
    }
    class Bf extends lf {
      constructor(t3) {
        super(), this.mode = mf.UNSPECIFIED, this.checks = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bf, t3, e3);
      }
      static $() {
        return ["MergeQueueValidationChecks|1 mode #0|2 checks #1*", mf, Jf];
      }
    }
    class Ef extends lf {
      constructor(t3) {
        super(), this.targetRef = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ef().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ef().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ef().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ef, t3, e3);
      }
      static $() {
        return ["GetMergeQueueConfigRequest|1 identifier #0|2 target_ref 9", o2];
      }
    }
    class If extends lf {
      constructor(t3) {
        super(), this.inheritedChecks = [], this.unresolvedChecks = [], this.prOnlyChecks = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new If().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new If().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new If().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(If, t3, e3);
      }
      static $() {
        return ["GetMergeQueueConfigResponse|1 config #0|2 inherited_checks #1*|3 unresolved_checks #1*|4 pr_only_checks #2*", Sf, Jf, Cf];
      }
    }
    class Cf extends lf {
      constructor(t3) {
        super(), this.groupKey = "", this.runKey = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cf, t3, e3);
      }
      static $() {
        return ["MergeQueuePrOnlyCheck|1 group_key 9|2 run_key 9"];
      }
    }
    class bf extends lf {
      constructor(t3) {
        super(), this.targetRef = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bf, t3, e3);
      }
      static $() {
        return ["EnableMergeQueueRequest|1 identifier #0|2 target_ref 9|3 speculation_depth 13?|4 max_concurrent_validations 13?|5 validation_timeout_ms 4?|6 validation_checks #1?", o2, Bf];
      }
    }
    class kf extends lf {
      constructor(t3) {
        super(), this.outcome = df.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kf, t3, e3);
      }
      static $() {
        return ["EnableMergeQueueResponse|1 config #0|2 outcome #1", Sf, df];
      }
    }
    class vf extends lf {
      constructor(t3) {
        super(), this.targetRef = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vf, t3, e3);
      }
      static $() {
        return ["DisableMergeQueueRequest|1 identifier #0|2 target_ref 9", o2];
      }
    }
    class qf extends lf {
      constructor(t3) {
        super(), this.outcome = df.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qf, t3, e3);
      }
      static $() {
        return ["DisableMergeQueueResponse|1 config #0|2 outcome #1", Sf, df];
      }
    }
    class Rf extends lf {
      constructor(t3) {
        super(), this.targetRef = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rf, t3, e3);
      }
      static $() {
        return ["UpdateMergeQueueConfigRequest|1 identifier #0|2 target_ref 9|3 speculation_depth 13?|4 max_concurrent_validations 13?|5 validation_timeout_ms 4?|6 validation_checks #1?", o2, Bf];
      }
    }
    class Pf extends lf {
      constructor(t3) {
        super(), this.outcome = df.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pf, t3, e3);
      }
      static $() {
        return ["UpdateMergeQueueConfigResponse|1 config #0|2 outcome #1", Sf, df];
      }
    }
    class Tf extends lf {
      constructor(t3) {
        super(), this.targetRef = "", this.epoch = n2.protoInt64.zero, this.entries = [], this.nodes = [], this.lands = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tf, t3, e3);
      }
      static $() {
        return ["MergeQueueView|1 identifier #0|2 target_ref 9|3 epoch 4|4 entries #1*|5 nodes #2*|6 lands #3*", o2, xf, Df, Qf];
      }
    }
    class xf extends lf {
      constructor(t3) {
        super(), this.entryId = "", this.pullRequests = [], this.position = 0, this.ciCancelCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xf, t3, e3);
      }
      static $() {
        return ["MergeQueueViewEntry|1 entry_id 9|2 pull_requests #0*|3 position 13|4 status #1|5 enqueued_at #2|6 ci_cancel_count 13", Nf, Of, n2.Timestamp];
      }
    }
    class Nf extends lf {
      constructor(t3) {
        super(), this.number = n2.protoInt64.zero, this.headSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nf, t3, e3);
      }
      static $() {
        return ["MergeQueueViewPullRequest|1 number 4|2 head_sha 9"];
      }
    }
    class Df extends lf {
      constructor(t3) {
        super(), this.nodeId = "", this.state = Uf.UNSPECIFIED, this.changeNumbers = [], this.assumedChangeNumbers = [], this.checkRunGroups = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Df().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Df().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Df().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Df, t3, e3);
      }
      static $() {
        return ["MergeQueueViewNode|1 node_id 9|2 state #0|3 tested_sha 9?|4 chain_ref 9?|5 started_at #1|6 change_numbers 4*|7 assumed_change_numbers 4*|8 check_run_groups #2*", Uf, n2.Timestamp, Sd];
      }
    }
    var Uf = (0, s2.QT)(n2.proto3, cf, "MergeQueueViewNode.State", [[0, "UNSPECIFIED"], [1, "PREPARING"], [2, "CONFLICT"], [3, "RUNNING"], [4, "GREEN"], [5, "RED"], [6, "CANCELLING"], [7, "CANCELLED"]], 1);
    class Qf extends lf {
      constructor(t3) {
        super(), this.moveId = "", this.expectedTrunkSha = "", this.landedSha = "", this.changeNumbers = [], this.bookedQueueEpoch = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qf, t3, e3);
      }
      static $() {
        return ["MergeQueueViewLand|1 move_id 9|2 expected_trunk_sha 9|3 landed_sha 9|4 change_numbers 4*|5 decided_at #0|6 landed_at #0|7 booked_queue_epoch 4", n2.Timestamp];
      }
    }
    class Mf extends lf {
      constructor(t3) {
        super(), this.entryId = "", this.targetRef = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mf, t3, e3);
      }
      static $() {
        return ["MergeQueueEntry|1 entry_id 9|2 change #0|3 target_ref 9|4 status #1", na, Of];
      }
    }
    class Of extends lf {
      constructor(t3) {
        super(), this.kind = Ff.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Of().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Of().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Of().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Of, t3, e3);
      }
      static $() {
        return ["MergeQueueEntryStatus|1 kind #0|2 position 13?|3 blocked_on 9?|4 tested_sha 9?|5 failure 9?|6 eviction_reason 9?", Ff];
      }
    }
    var Ff = (0, s2.QT)(n2.proto3, cf, "MergeQueueEntryStatus.Kind", [[0, "UNSPECIFIED"], [1, "QUEUED"], [2, "VALIDATING"], [3, "MERGING"], [4, "MERGED"], [5, "EVICTED"], [6, "CANCELLED"]], 1);
    class Lf extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class $f extends Lf {
      constructor(t3) {
        super(), this.previewRestackConflict = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $f().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $f().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $f().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($f, t3, e3);
      }
      static $() {
        return ["GetChangeStackPageDataRequest|1 change #0|2 preview_restack_conflict 8", na];
      }
    }
    class Gf extends Lf {
      constructor(t3) {
        super(), this.mirrorStatus = g.UNSPECIFIED, this.items = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gf, t3, e3);
      }
      static $() {
        return ["GetChangeStackPageDataResponse|1 mirror_status #0|2 items #1*|3 reviewer_candidates #2", g, Hf, Au];
      }
    }
    class Hf extends Lf {
      constructor(t3) {
        super(), this.versions = [], this.assignments = [], this.reviews = [], this.totalThreadCount = 0, this.unresolvedThreadCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hf, t3, e3);
      }
      static $() {
        return ["ChangeStackPageItem|1 change #0|2 versions #1*|3 assignments #2*|4 reviews #3*|5 mergeability #4|6 total_thread_count 5|7 unresolved_thread_count 5", Xo, Zo, Ya, va, Qd];
      }
    }
    class Kf extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Vf extends Kf {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vf, t3, e3);
      }
      static $() {
        return ["GetReviewRequirementsRequest|1 change #0", na];
      }
    }
    class zf extends Kf {
      constructor(t3) {
        super(), this.headSha = "", this.codeReviewGates = [], this.approvals = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zf, t3, e3);
      }
      static $() {
        return ["GetReviewRequirementsResponse|1 head_sha 9|2 mergeability #0|3 gates #1|4 code_review_gates #2*|5 approvals #3*", Md, Wf, ep, np];
      }
    }
    class Wf extends Kf {
      constructor(t3) {
        super(), this.enrollment = "", this.headGatesFileErrors = [], this.requiredGates = [], this.gatesRequired = false, this.standInForChecks = [], this.gatesClearReview = false, this.humanOnlyPaths = [], this.cannotStandInPaths = [], this.uncoveredPaths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wf, t3, e3);
      }
      static $() {
        return ["ReviewRequirementsGates|1 enrollment 9|2 head_gates_file_errors 9*|3 gates_file #0?|4 required_gates #1*|5 gates_required 8|6 stand_in_for_checks 9*|7 gates_clear_review 8|8 human_only_paths #2*|9 cannot_stand_in_paths #2*|10 uncovered_paths 9*|11 owner_scope #3?|12 human_approval_latest_version_required 8?", Yf, jf, Xf, Zf];
      }
    }
    class Yf extends Kf {
      constructor(t3) {
        super(), this.status = "", this.validationErrors = [], this.landingBaseSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yf, t3, e3);
      }
      static $() {
        return ["ReviewRequirementsGatesFile|1 status 9|2 unavailable_reason 9?|3 validation_errors 9*|4 landing_base_sha 9|5 blob_oid 9?|6 trunk_tip_blob_oid 9?|7 landing_base_has_gates_file 8?"];
      }
    }
    class jf extends Kf {
      constructor(t3) {
        super(), this.gate = "", this.checkName = "", this.status = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jf, t3, e3);
      }
      static $() {
        return ["ReviewRequirementsGate|1 gate 9|2 check_name 9|3 status 9|4 report_url 9?|5 report_client 9?"];
      }
    }
    class Xf extends Kf {
      constructor(t3) {
        super(), this.path = "", this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xf, t3, e3);
      }
      static $() {
        return ["ReviewRequirementsPath|1 path 9|2 reason 9|3 cause 9?"];
      }
    }
    class Zf extends Kf {
      constructor(t3) {
        super(), this.kind = "", this.outside = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zf().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zf().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zf().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zf, t3, e3);
      }
      static $() {
        return ["ReviewRequirementsOwnerScope|1 kind 9|2 reason 9?|3 outside #0*", tp];
      }
    }
    class tp extends Kf {
      constructor(t3) {
        super(), this.source = "", this.anyHuman = false, this.owners = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tp, t3, e3);
      }
      static $() {
        return ["ReviewRequirementsOwnerRequirement|1 source 9|2 any_human 8|3 owners 9*"];
      }
    }
    class ep extends Kf {
      constructor(t3) {
        super(), this.checkName = "", this.state = "", this.waivedByGates = false, this.blocking = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ep().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ep().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ep().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ep, t3, e3);
      }
      static $() {
        return ["ReviewRequirementsCodeReviewGate|1 check_name 9|2 state 9|3 waived_by_gates 8|4 blocking 8|5 report #0?|6 owners_unknown_reason 9?", rp];
      }
    }
    class rp extends Kf {
      constructor(t3) {
        super(), this.outcome = "", this.unblockReviewers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rp, t3, e3);
      }
      static $() {
        return ["ReviewRequirementsCodeReviewGateReport|1 outcome 9|2 satisfied_policies 13?|3 total_policies 13?|4 unblock_reviewers 9*"];
      }
    }
    class np extends Kf {
      constructor(t3) {
        super(), this.source = "", this.owners = [], this.anyHuman = false, this.paths = [], this.morePaths = 0, this.changeNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new np().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new np().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new np().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(np, t3, e3);
      }
      static $() {
        return ["ReviewRequirementsApproval|1 source 9|2 owners 9*|3 any_human 8|4 paths 9*|5 more_paths 13|6 check_name 9?|7 scope 9?|8 required_count 13?|9 approved_count 13?|10 change_number 4"];
      }
    }
    const sp = "origin.v1.";
    class ip extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return sp;
      }
    }
    var op = (0, s2.QT)(n2.proto3, sp, "RepoSelectionMode", [[0, "UNSPECIFIED"], [1, "ALL"], [2, "SELECTED"]], 1), ap = (0, s2.QT)(n2.proto3, sp, "AppInstallRequestOutcome", [[0, "UNSPECIFIED"], [1, "CREATED"], [2, "ALREADY_PENDING"], [3, "DENIED_COOLDOWN"], [4, "ALREADY_INSTALLED"]], 1);
    class up extends ip {
      constructor(t3) {
        super(), this.id = "", this.displayName = "", this.webhookUrl = "", this.isPublic = false, this.namespaceSlug = "", this.events = [], this.createdAt = "", this.updatedAt = "", this.installationRedirectUris = [], this.iconUrl = "", this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.webhookDisabledAt = "", this.webhookDeliveryState = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new up().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new up().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new up().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(up, t3, e3);
      }
      static $() {
        return ["App|1 id 9|3 display_name 9|4 webhook_url 9|6 is_public 8|7 namespace_slug 9|8 events 9*|10 created_at 9|11 updated_at 9|12 installation_redirect_uris 9*|13 icon_url 9|14 description 9|15 website_url 9|16 default_scopes 9*|17 created_by #0|18 updated_by #0|19 webhook_disabled_at 9|20 webhook_delivery_state 9|21 marketplace_listing #1", No, Sp];
      }
    }
    class cp extends ip {
      constructor(t3) {
        super(), this.installationCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cp, t3, e3);
      }
      static $() {
        return ["AppStats|1 installation_count 13"];
      }
    }
    class lp extends ip {
      constructor(t3) {
        super(), this.kid = "", this.createdAt = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lp, t3, e3);
      }
      static $() {
        return ["AppSigningKey|1 kid 9|2 created_at 9"];
      }
    }
    class mp extends ip {
      constructor(t3) {
        super(), this.displayName = "", this.webhookUrl = "", this.namespaceSlug = "", this.publicKey = "", this.events = [], this.installationRedirectUris = [], this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.workloadIdentityPolicies = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mp, t3, e3);
      }
      static $() {
        return ["CreateAppRequest|2 display_name 9|3 webhook_url 9|6 namespace_slug 9|7 public_key 9|8 events 9*|10 installation_redirect_uris 9*|11 description 9|12 website_url 9|13 default_scopes 9*|14 workload_identity_policies #0*", Qp];
      }
    }
    class dp extends ip {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dp, t3, e3);
      }
      static $() {
        return ["CreateAppResponse|1 app #0", up];
      }
    }
    class fp extends ip {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fp, t3, e3);
      }
      static $() {
        return ["GetAppRequest|1 id 9"];
      }
    }
    class pp extends ip {
      constructor(t3) {
        super(), this.signingKeys = [], this.workloadIdentityPolicies = [], this.workloadIdentityEnabled = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pp, t3, e3);
      }
      static $() {
        return ["GetAppResponse|1 app #0|2 stats #1|3 signing_keys #2*|4 workload_identity_policies #3*|5 workload_identity_enabled 8", up, cp, lp, Qp];
      }
    }
    class hp extends ip {
      constructor(t3) {
        super(), this.appId = "", this.publicKey = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hp, t3, e3);
      }
      static $() {
        return ["AddAppSigningKeyRequest|1 app_id 9|2 public_key 9"];
      }
    }
    class gp extends ip {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gp, t3, e3);
      }
      static $() {
        return ["AddAppSigningKeyResponse|1 key #0", lp];
      }
    }
    class Ap extends ip {
      constructor(t3) {
        super(), this.appId = "", this.kid = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ap().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ap().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ap().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ap, t3, e3);
      }
      static $() {
        return ["RevokeAppSigningKeyRequest|1 app_id 9|2 kid 9"];
      }
    }
    class _p extends ip {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _p().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _p().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _p().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_p, t3, e3);
      }
      static $() {
        return ["RevokeAppSigningKeyResponse"];
      }
    }
    class yp extends ip {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.pageSize = 0, this.pageToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yp, t3, e3);
      }
      static $() {
        return ["ListNamespaceAppsRequest|1 namespace_slug 9|2 page_size 13|3 page_token 9"];
      }
    }
    class wp extends ip {
      constructor(t3) {
        super(), this.nextPageToken = "", this.appMetadata = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wp, t3, e3);
      }
      static $() {
        return ["ListNamespaceAppsResponse|2 next_page_token 9|3 app_metadata #0*", Jp];
      }
    }
    class Sp extends ip {
      constructor(t3) {
        super(), this.slug = "", this.listedAt = "", this.tags = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sp, t3, e3);
      }
      static $() {
        return ["AppMarketplaceListing|1 slug 9|2 listed_at 9|3 tags 9*|4 publisher_id 3?"];
      }
    }
    class Jp extends ip {
      constructor(t3) {
        super(), this.id = "", this.displayName = "", this.ownerNamespace = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jp, t3, e3);
      }
      static $() {
        return ["AppDisplayMetadata|1 id 9|3 display_name 9|4 icon_url 9?|5 description 9?|7 marketplace_listing #0|8 owner_namespace 9", Sp];
      }
    }
    class Bp extends ip {
      constructor(t3) {
        super(), this.pageSize = 0, this.pageToken = "", this.tag = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bp, t3, e3);
      }
      static $() {
        return ["ListPublicAppsRequest|1 page_size 13|2 page_token 9|3 tag 9"];
      }
    }
    class Ep extends ip {
      constructor(t3) {
        super(), this.apps = [], this.nextPageToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ep().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ep().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ep().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ep, t3, e3);
      }
      static $() {
        return ["ListPublicAppsResponse|1 apps #0*|2 next_page_token 9", Jp];
      }
    }
    class Ip extends ip {
      constructor(t3) {
        super(), this.id = "", this.appId = "", this.namespaceSlug = "", this.createdAt = "", this.updatedAt = "", this.repoSelectionMode = op.UNSPECIFIED, this.repoIds = [], this.acceptedScopes = [], this.reviewedDefaultScopes = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ip().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ip().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ip().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ip, t3, e3);
      }
      static $() {
        return ["Installation|1 id 9|2 app_id 9|3 namespace_slug 9|4 created_at 9|5 updated_at 9|6 repo_selection_mode #0|7 repo_ids 9*|8 accepted_scopes 9*|9 suspended_at 9?|10 reviewed_default_scopes 9*|11 installed_by #1|12 updated_by #1?|13 suspended_by #1?", op, No];
      }
    }
    class Cp extends ip {
      constructor(t3) {
        super(), this.id = "", this.appId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cp, t3, e3);
      }
      static $() {
        return ["InstallationReference|1 id 9|2 app_id 9|3 app_metadata #0", Jp];
      }
    }
    class bp extends ip {
      constructor(t3) {
        super(), this.appId = "", this.namespaceSlug = "", this.repoIds = [], this.requestedScopes = [], this.reviewedDefaultScopes = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bp, t3, e3);
      }
      static $() {
        return ["CreateInstallationRequest|1 app_id 9|2 namespace_slug 9|3 repo_ids 9*|4 requested_scopes 9*|5 state 9?|6 reviewed_default_scopes 9*"];
      }
    }
    class kp extends ip {
      constructor(t3) {
        super(), this.installationReceipt = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kp, t3, e3);
      }
      static $() {
        return ["CreateInstallationResponse|1 installation #0|2 installation_receipt 9", Ip];
      }
    }
    class vp extends ip {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vp, t3, e3);
      }
      static $() {
        return ["GetInstallationRequest|1 id 9"];
      }
    }
    class qp extends ip {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qp, t3, e3);
      }
      static $() {
        return ["GetInstallationResponse|1 installation #0", Ip];
      }
    }
    class Rp extends ip {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.pageSize = 0, this.pageToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rp, t3, e3);
      }
      static $() {
        return ["ListNamespaceInstallationsRequest|1 namespace_slug 9|2 page_size 13|3 page_token 9"];
      }
    }
    class Pp extends ip {
      constructor(t3) {
        super(), this.installations = [], this.nextPageToken = "", this.installationReferences = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pp, t3, e3);
      }
      static $() {
        return ["ListNamespaceInstallationsResponse|1 installations #0*|2 next_page_token 9|3 installation_references #1*", Ip, Cp];
      }
    }
    class Tp extends ip {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tp, t3, e3);
      }
      static $() {
        return ["UpdateAppRequest|1 id 9|2 display_name 9?|3 webhook_url 9?|5 events #0?|6 is_public 8?|8 installation_redirect_uris #1?|9 description 9?|10 website_url 9?|11 default_scopes #2?|12 workload_identity_policies #3?", xp, Np, Dp, Mp];
      }
    }
    class xp extends ip {
      constructor(t3) {
        super(), this.events = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xp, t3, e3);
      }
      static $() {
        return ["AppEventsReplace|1 events 9*"];
      }
    }
    class Np extends ip {
      constructor(t3) {
        super(), this.installationRedirectUris = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Np().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Np().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Np().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Np, t3, e3);
      }
      static $() {
        return ["AppInstallationRedirectUrisReplace|1 installation_redirect_uris 9*"];
      }
    }
    class Dp extends ip {
      constructor(t3) {
        super(), this.scopes = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dp, t3, e3);
      }
      static $() {
        return ["AppDefaultScopesReplace|1 scopes 9*"];
      }
    }
    class Up extends ip {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Up().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Up().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Up().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Up, t3, e3);
      }
      static $() {
        return ["AppWorkloadIdentityClaimMatcher|1 path 9|2 exact 9?|3 regex 9?"];
      }
    }
    class Qp extends ip {
      constructor(t3) {
        super(), this.issuerFamily = "", this.issuer = "", this.claims = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qp, t3, e3);
      }
      static $() {
        return ["AppWorkloadIdentityPolicy|1 issuer_family 9|2 issuer 9|3 subject_exact 9?|4 subject_regex 9?|5 claims #0*|6 enabled 8?", Up];
      }
    }
    class Mp extends ip {
      constructor(t3) {
        super(), this.policies = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mp, t3, e3);
      }
      static $() {
        return ["AppWorkloadIdentityPoliciesReplace|1 policies #0*", Qp];
      }
    }
    class Op extends ip {
      constructor(t3) {
        super(), this.appId = "", this.enabled = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Op().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Op().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Op().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Op, t3, e3);
      }
      static $() {
        return ["SetAppWebhookDeliveryEnabledRequest|1 app_id 9|2 enabled 8"];
      }
    }
    class Fp extends ip {
      constructor(t3) {
        super(), this.transitioned = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fp, t3, e3);
      }
      static $() {
        return ["SetAppWebhookDeliveryEnabledResponse|1 app #0|2 transitioned 8", up];
      }
    }
    class Lp extends ip {
      constructor(t3) {
        super(), this.appId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lp, t3, e3);
      }
      static $() {
        return ["SendAppWebhookTestDeliveryRequest|1 app_id 9"];
      }
    }
    class $p extends ip {
      constructor(t3) {
        super(), this.delivered = false, this.responseStatusCode = 0, this.deliveryId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $p().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $p().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $p().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($p, t3, e3);
      }
      static $() {
        return ["SendAppWebhookTestDeliveryResponse|1 delivered 8|2 response_status_code 5|3 delivery_id 9"];
      }
    }
    class Gp extends ip {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gp, t3, e3);
      }
      static $() {
        return ["UpdateAppResponse|1 app #0", up];
      }
    }
    class Hp extends ip {
      constructor(t3) {
        super(), this.appId = "", this.icon = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hp, t3, e3);
      }
      static $() {
        return ["SetAppIconRequest|1 app_id 9|2 icon 12"];
      }
    }
    class Kp extends ip {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kp, t3, e3);
      }
      static $() {
        return ["SetAppIconResponse|1 app #0", up];
      }
    }
    class Vp extends ip {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vp, t3, e3);
      }
      static $() {
        return ["DeleteAppRequest|1 id 9"];
      }
    }
    class zp extends ip {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zp, t3, e3);
      }
      static $() {
        return ["DeleteAppResponse"];
      }
    }
    class Wp extends ip {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wp, t3, e3);
      }
      static $() {
        return ["DeleteInstallationRequest|1 id 9"];
      }
    }
    class Yp extends ip {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yp, t3, e3);
      }
      static $() {
        return ["DeleteInstallationResponse"];
      }
    }
    class jp extends ip {
      constructor(t3) {
        super(), this.includeGrantedScopes = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jp, t3, e3);
      }
      static $() {
        return ["PreviewAppInstallationOptions|1 include_granted_scopes 8"];
      }
    }
    class Xp extends ip {
      constructor(t3) {
        super(), this.namespaceSlug = "", this.appId = "", this.requestedScopes = [], this.summary = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xp, t3, e3);
      }
      static $() {
        return ["PreviewAppInstallationRequest|1 namespace_slug 9|2 app_id 9|3 requested_scopes 9*|4 summary 9|5 redirect_uri 9?|6 options #0", jp];
      }
    }
    class Zp extends ip {
      constructor(t3) {
        super(), this.scope = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zp().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zp().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zp().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zp, t3, e3);
      }
      static $() {
        return ["PreviewAppInstallationScope|1 scope 9"];
      }
    }
    class th extends ip {
      constructor(t3) {
        super(), this.summary = "", this.requestedScopes = [], this.grantedScopes = [], this.appWebsiteUrl = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new th().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new th().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new th().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(th, t3, e3);
      }
      static $() {
        return ["PreviewAppInstallationResponse|12 app #0|5 summary 9|6 requested_scopes #1*|7 granted_scopes #1*|8 existing_installation #2|10 app_website_url 9", Jp, Zp, eh];
      }
    }
    class eh extends ip {
      constructor(t3) {
        super(), this.installationId = "", this.repoSelectionMode = op.UNSPECIFIED, this.repoIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new eh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new eh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new eh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(eh, t3, e3);
      }
      static $() {
        return ["ExistingInstallation|1 installation_id 9|2 repo_selection_mode #0|3 repo_ids 9*", op];
      }
    }
    class rh extends ip {
      constructor(t3) {
        super(), this.id = "", this.displayName = "", this.namespaceSlug = "", this.iconUrl = "", this.description = "", this.websiteUrl = "", this.defaultScopes = [], this.installRedirectUri = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rh, t3, e3);
      }
      static $() {
        return ["AppMetadata|1 id 9|3 display_name 9|4 namespace_slug 9|5 icon_url 9|6 description 9|7 website_url 9|8 default_scopes 9*|9 install_redirect_uri 9|10 is_public 8?|11 marketplace_listing #0", Sp];
      }
    }
    class nh extends ip {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nh, t3, e3);
      }
      static $() {
        return ["GetAppMetadataRequest|1 id 9"];
      }
    }
    class sh extends ip {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sh, t3, e3);
      }
      static $() {
        return ["GetAppMetadataResponse|1 app #0|2 stats #1", rh, cp];
      }
    }
    class ih extends ip {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ih().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ih().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ih().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ih, t3, e3);
      }
      static $() {
        return ["SuspendInstallationRequest|1 id 9"];
      }
    }
    class oh extends ip {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oh, t3, e3);
      }
      static $() {
        return ["SuspendInstallationResponse"];
      }
    }
    class ah extends ip {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ah().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ah().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ah().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ah, t3, e3);
      }
      static $() {
        return ["UnsuspendInstallationRequest|1 id 9"];
      }
    }
    class uh extends ip {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new uh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new uh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new uh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(uh, t3, e3);
      }
      static $() {
        return ["UnsuspendInstallationResponse"];
      }
    }
    class ch extends ip {
      constructor(t3) {
        super(), this.repoId = "", this.pageSize = 0, this.pageToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ch().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ch().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ch().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ch, t3, e3);
      }
      static $() {
        return ["ListRepoInstallationsRequest|1 repo_id 9|2 page_size 13|3 page_token 9"];
      }
    }
    class lh extends ip {
      constructor(t3) {
        super(), this.installations = [], this.nextPageToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lh, t3, e3);
      }
      static $() {
        return ["ListRepoInstallationsResponse|1 installations #0*|2 next_page_token 9", Cp];
      }
    }
    class mh extends ip {
      constructor(t3) {
        super(), this.namespaceId = "", this.appId = "", this.repoIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mh, t3, e3);
      }
      static $() {
        return ["RequestAppInstallRequest|1 namespace_id 9|2 app_id 9|4 repo_ids 9*"];
      }
    }
    class dh extends ip {
      constructor(t3) {
        super(), this.outcome = ap.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dh, t3, e3);
      }
      static $() {
        return ["RequestAppInstallResponse|1 outcome #0|2 cool_down_expires_at 9?", ap];
      }
    }
    class fh extends ip {
      constructor(t3) {
        super(), this.namespaceId = "", this.appId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fh, t3, e3);
      }
      static $() {
        return ["GetMyAppInstallRequestRequest|1 namespace_id 9|2 app_id 9"];
      }
    }
    class ph extends ip {
      constructor(t3) {
        super(), this.hasPendingRequest = false, this.pendingRepoSelectionMode = op.UNSPECIFIED, this.pendingRepoIds = [], this.hasCurrentInstallation = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ph().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ph().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ph().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ph, t3, e3);
      }
      static $() {
        return ["GetMyAppInstallRequestResponse|1 has_pending_request 8|2 pending_repo_selection_mode #0|3 pending_repo_ids 9*|4 has_current_installation 8|5 has_requestable_repositories 8?", op];
      }
    }
    class hh extends ip {
      constructor(t3) {
        super(), this.namespaceId = "", this.appId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hh, t3, e3);
      }
      static $() {
        return ["CancelMyAppInstallRequestRequest|1 namespace_id 9|2 app_id 9"];
      }
    }
    class gh extends ip {
      constructor(t3) {
        super(), this.canceled = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gh, t3, e3);
      }
      static $() {
        return ["CancelMyAppInstallRequestResponse|1 canceled 8"];
      }
    }
    class Ah extends ip {
      constructor(t3) {
        super(), this.id = "", this.createdAt = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ah().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ah().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ah().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ah, t3, e3);
      }
      static $() {
        return ["AppInstallRequest|1 id 9|2 requester #0|4 created_at 9", No];
      }
    }
    class _h extends ip {
      constructor(t3) {
        super(), this.requests = [], this.requestedRepoSelectionMode = op.UNSPECIFIED, this.requestedRepoIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _h().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _h().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _h().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_h, t3, e3);
      }
      static $() {
        return ["AppInstallRequestGroup|1 app #0|2 requests #1*|3 requested_repo_selection_mode #2|4 requested_repo_ids 9*", Jp, Ah, op];
      }
    }
    class yh extends ip {
      constructor(t3) {
        super(), this.namespaceId = "", this.pageSize = 0, this.pageToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yh, t3, e3);
      }
      static $() {
        return ["ListAppInstallRequestsRequest|1 namespace_id 9|2 page_size 13|3 page_token 9"];
      }
    }
    class wh extends ip {
      constructor(t3) {
        super(), this.groups = [], this.nextPageToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wh, t3, e3);
      }
      static $() {
        return ["ListAppInstallRequestsResponse|1 groups #0*|2 next_page_token 9", _h];
      }
    }
    class Sh extends ip {
      constructor(t3) {
        super(), this.namespaceId = "", this.appId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sh, t3, e3);
      }
      static $() {
        return ["DenyAppInstallRequestsRequest|1 namespace_id 9|2 app_id 9"];
      }
    }
    class Jh extends ip {
      constructor(t3) {
        super(), this.deniedCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jh, t3, e3);
      }
      static $() {
        return ["DenyAppInstallRequestsResponse|1 denied_count 13"];
      }
    }
    class Bh extends ip {
      constructor(t3) {
        super(), this.installationId = "", this.redirectUri = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bh, t3, e3);
      }
      static $() {
        return ["PreviewAppUserConfirmationRequest|1 installation_id 9|2 redirect_uri 9|3 state 9?"];
      }
    }
    class Eh extends ip {
      constructor(t3) {
        super(), this.userId = "", this.email = "", this.namespaceId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Eh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Eh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Eh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Eh, t3, e3);
      }
      static $() {
        return ["AppUserConfirmationDisclosure|1 user_id 9|2 email 9|3 namespace_id 9"];
      }
    }
    class Ih extends ip {
      constructor(t3) {
        super(), this.installationId = "", this.namespaceSlug = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ih().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ih().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ih().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ih, t3, e3);
      }
      static $() {
        return ["PreviewAppUserConfirmationResponse|1 app #0|2 installation_id 9|3 namespace_slug 9|4 disclosure #1", Jp, Eh];
      }
    }
    class Ch extends ip {
      constructor(t3) {
        super(), this.installationId = "", this.redirectUri = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ch().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ch().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ch().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ch, t3, e3);
      }
      static $() {
        return ["ConfirmAppUserConfirmationRequest|1 installation_id 9|2 redirect_uri 9|3 state 9?"];
      }
    }
    class bh extends ip {
      constructor(t3) {
        super(), this.confirmationReceipt = "", this.redirectUri = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bh, t3, e3);
      }
      static $() {
        return ["ConfirmAppUserConfirmationResponse|1 confirmation_receipt 9|2 redirect_uri 9"];
      }
    }
    const kh = "origin.v1.";
    class vh extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return kh;
      }
    }
    var qh = (0, s2.QT)(n2.proto3, kh, "AtlasFreshness", [[0, "UNSPECIFIED"], [1, "EAGER"], [2, "BALANCED"], [3, "RELAXED"], [4, "MANUAL"]], 1);
    class Rh extends vh {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rh, t3, e3);
      }
      static $() {
        return ["GetAtlasNodeRequest|1 repo #0|2 path 9", o2];
      }
    }
    class Ph extends vh {
      constructor(t3) {
        super(), this.layer = "", this.label = "", this.contentMarkdown = "", this.digestJson = "", this.status = "", this.lastGenAt = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ph().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ph().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ph().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ph, t3, e3);
      }
      static $() {
        return ["AtlasNodeLayerContent|1 layer 9|2 label 9|3 content_markdown 9|4 digest_json 9|5 status 9|6 last_gen_at 9"];
      }
    }
    class Th extends vh {
      constructor(t3) {
        super(), this.lastCommit = "", this.layers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Th().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Th().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Th().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Th, t3, e3);
      }
      static $() {
        return ["GetAtlasNodeResponse|1 last_commit 9|2 layers #0*", Ph];
      }
    }
    class xh extends vh {
      constructor(t3) {
        super(), this.layer = "", this.label = "", this.enabled = false, this.generatedNodes = 0, this.pendingNodes = 0, this.lastGenAt = "", this.failedNodes = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xh, t3, e3);
      }
      static $() {
        return ["AtlasLayerStatus|1 layer 9|2 label 9|3 enabled 8|4 generated_nodes 5|5 pending_nodes 5|6 last_gen_at 9|7 failed_nodes 5"];
      }
    }
    class Nh extends vh {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nh, t3, e3);
      }
      static $() {
        return ["GetAtlasRepoStatusRequest|1 repo #0", o2];
      }
    }
    class Dh extends vh {
      constructor(t3) {
        super(), this.configured = false, this.enabled = false, this.model = "", this.nodeCount = 0, this.layers = [], this.refreshing = false, this.freshness = qh.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dh, t3, e3);
      }
      static $() {
        return ["GetAtlasRepoStatusResponse|1 configured 8|2 enabled 8|3 model 9|4 node_count 5|5 layers #0*|6 refreshing 8|7 freshness #1", xh, qh];
      }
    }
    class Uh extends vh {
      constructor(t3) {
        super(), this.enabled = false, this.enabledLayers = [], this.freshness = qh.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Uh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Uh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Uh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Uh, t3, e3);
      }
      static $() {
        return ["SetAtlasRepoConfigRequest|1 repo #0|2 enabled 8|3 enabled_layers 9*|4 freshness #1", o2, qh];
      }
    }
    class Qh extends vh {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qh, t3, e3);
      }
      static $() {
        return ["SetAtlasRepoConfigResponse|1 status #0", Dh];
      }
    }
    class Mh extends vh {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mh, t3, e3);
      }
      static $() {
        return ["RefreshAtlasRepoRequest|1 repo #0", o2];
      }
    }
    class Oh extends vh {
      constructor(t3) {
        super(), this.headSha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Oh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Oh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Oh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Oh, t3, e3);
      }
      static $() {
        return ["RefreshAtlasRepoResponse|1 head_sha 9"];
      }
    }
    class Fh extends vh {
      constructor(t3) {
        super(), this.pageSize = 0, this.pageToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fh, t3, e3);
      }
      static $() {
        return ["ListAtlasNodePathsRequest|1 repo #0|2 page_size 13|3 page_token 9", o2];
      }
    }
    class Lh extends vh {
      constructor(t3) {
        super(), this.path = "", this.diagramKinds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lh, t3, e3);
      }
      static $() {
        return ["AtlasNodePathEntry|1 path 9|2 diagram_kinds 9*"];
      }
    }
    class $h extends vh {
      constructor(t3) {
        super(), this.paths = [], this.nextPageToken = "", this.entries = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $h().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $h().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $h().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($h, t3, e3);
      }
      static $() {
        return ["ListAtlasNodePathsResponse|1 paths 9*|2 next_page_token 9|3 entries #0*", Lh];
      }
    }
    const Gh = "origin.v1.";
    class Hh extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return Gh;
      }
    }
    var Kh = (0, s2.QT)(n2.proto3, Gh, "RulesetEnforcement", [[0, "UNSPECIFIED"], [1, "ACTIVE"], [2, "EVALUATE"], [3, "DISABLED"]], 1), Vh = (0, s2.QT)(n2.proto3, Gh, "RulesetKind", [[0, "UNSPECIFIED"], [1, "MERGE_BRANCH"], [2, "PUSH_BRANCH"], [3, "PUSH_TAG"], [4, "PUSH_REPOSITORY"]], 1), zh = (0, s2.QT)(n2.proto3, Gh, "RulesetBypassMode", [[0, "UNSPECIFIED"], [1, "ALWAYS"], [2, "PULL_REQUEST_ONLY"]], 1), Wh = (0, s2.QT)(n2.proto3, Gh, "RulesetBypassActorKind", [[0, "UNSPECIFIED"], [1, "USER"], [2, "TEAM"], [3, "APP"], [6, "ORIGIN_ROLE"]], 1);
    class Yh extends Hh {
      constructor(t3) {
        super(), this.id = "", this.ruleType = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yh, t3, e3);
      }
      static $() {
        return ["RulesetRule|1 id 9|2 rule_type 9|3 parameters #0", n2.Struct];
      }
    }
    class jh extends Hh {
      constructor(t3) {
        super(), this.id = "", this.bypassMode = zh.UNSPECIFIED, this.actorKind = Wh.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jh, t3, e3);
      }
      static $() {
        return ["RulesetBypassActor|1 id 9|2 bypass_mode #0|3 actor_kind #1|4 actor_payload #2", zh, Wh, n2.Struct];
      }
    }
    class Xh extends Hh {
      constructor(t3) {
        super(), this.id = "", this.name = "", this.description = "", this.enforcement = Kh.UNSPECIFIED, this.kind = Vh.UNSPECIFIED, this.includedRefNames = [], this.excludedRefNames = [], this.rules = [], this.bypassActors = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xh, t3, e3);
      }
      static $() {
        return ["Ruleset|1 id 9|2 repo #0|3 name 9|4 description 9|5 enforcement #1|6 kind #2|7 included_ref_names 9*|8 excluded_ref_names 9*|9 rules #3*|10 bypass_actors #4*", o2, Kh, Vh, Yh, jh];
      }
    }
    class Zh extends Hh {
      constructor(t3) {
        super(), this.ruleType = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zh().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zh().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zh().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zh, t3, e3);
      }
      static $() {
        return ["RulesetRuleInput|1 rule_type 9|2 parameters #0", n2.Struct];
      }
    }
    class tg extends Hh {
      constructor(t3) {
        super(), this.bypassMode = zh.UNSPECIFIED, this.actorKind = Wh.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tg, t3, e3);
      }
      static $() {
        return ["RulesetBypassActorInput|1 bypass_mode #0|2 actor_kind #1|3 actor_payload #2", zh, Wh, n2.Struct];
      }
    }
    class eg extends Hh {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new eg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new eg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new eg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(eg, t3, e3);
      }
      static $() {
        return ["ListRulesetsRequest|1 repo #0", o2];
      }
    }
    class rg extends Hh {
      constructor(t3) {
        super(), this.rulesets = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rg, t3, e3);
      }
      static $() {
        return ["ListRulesetsResponse|1 rulesets #0*", Xh];
      }
    }
    class ng extends Hh {
      constructor(t3) {
        super(), this.rulesetId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ng().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ng().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ng().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ng, t3, e3);
      }
      static $() {
        return ["GetRulesetRequest|1 repo #0|2 ruleset_id 9", o2];
      }
    }
    class sg extends Hh {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sg, t3, e3);
      }
      static $() {
        return ["GetRulesetResponse|1 ruleset #0", Xh];
      }
    }
    class ig extends Hh {
      constructor(t3) {
        super(), this.name = "", this.description = "", this.enforcement = Kh.UNSPECIFIED, this.kind = Vh.UNSPECIFIED, this.includedRefNames = [], this.excludedRefNames = [], this.rules = [], this.bypassActors = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ig().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ig().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ig().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ig, t3, e3);
      }
      static $() {
        return ["UpsertRulesetRequest|1 repo #0|2 ruleset_id 9?|3 name 9|4 description 9|5 enforcement #1|6 kind #2|7 included_ref_names 9*|8 excluded_ref_names 9*|9 rules #3*|10 bypass_actors #4*", o2, Kh, Vh, Zh, tg];
      }
    }
    class og extends Hh {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new og().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new og().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new og().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(og, t3, e3);
      }
      static $() {
        return ["UpsertRulesetResponse|1 ruleset #0", Xh];
      }
    }
    class ag extends Hh {
      constructor(t3) {
        super(), this.rulesetId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ag().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ag().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ag().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ag, t3, e3);
      }
      static $() {
        return ["DeleteRulesetRequest|1 repo #0|2 ruleset_id 9", o2];
      }
    }
    class ug extends Hh {
      constructor(t3) {
        super(), this.rulesetId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ug().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ug().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ug().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ug, t3, e3);
      }
      static $() {
        return ["DeleteRulesetResponse|1 ruleset_id 9"];
      }
    }
    class cg extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class lg extends cg {
      constructor(t3) {
        super(), this.id = "", this.repoUuid = "", this.name = "", this.color = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lg, t3, e3);
      }
      static $() {
        return ["Label|1 id 9|2 repo_uuid 9|3 name 9|4 color 9|5 description 9?|6 created_at #0|7 updated_at #0", n2.Timestamp];
      }
    }
    class mg extends cg {
      constructor(t3) {
        super(), this.name = "", this.color = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mg, t3, e3);
      }
      static $() {
        return ["CreateLabelRequest|1 repo #0|2 name 9|3 color 9|4 description 9?", o2];
      }
    }
    class dg extends cg {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dg, t3, e3);
      }
      static $() {
        return ["CreateLabelResponse|1 label #0", lg];
      }
    }
    class fg extends cg {
      constructor(t3) {
        super(), this.labelId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fg, t3, e3);
      }
      static $() {
        return ["UpdateLabelRequest|1 repo #0|2 label_id 9|3 name 9?|4 color 9?|5 description 9?", o2];
      }
    }
    class pg extends cg {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pg, t3, e3);
      }
      static $() {
        return ["UpdateLabelResponse|1 label #0", lg];
      }
    }
    class hg extends cg {
      constructor(t3) {
        super(), this.labelId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hg, t3, e3);
      }
      static $() {
        return ["DeleteLabelRequest|1 repo #0|2 label_id 9", o2];
      }
    }
    class gg extends cg {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gg, t3, e3);
      }
      static $() {
        return ["DeleteLabelResponse"];
      }
    }
    class Ag extends cg {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ag().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ag().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ag().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ag, t3, e3);
      }
      static $() {
        return ["ListLabelsRequest|1 repo #0|2 cursor 9?|3 limit 5?|4 search_query 9?", o2];
      }
    }
    class _g extends cg {
      constructor(t3) {
        super(), this.labels = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _g().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _g().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _g().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_g, t3, e3);
      }
      static $() {
        return ["ListLabelsResponse|1 labels #0*|2 next_cursor 9?", lg];
      }
    }
    class yg extends cg {
      constructor(t3) {
        super(), this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yg, t3, e3);
      }
      static $() {
        return ["GetLabelByNameRequest|1 repo #0|2 name 9", o2];
      }
    }
    class wg extends cg {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wg, t3, e3);
      }
      static $() {
        return ["GetLabelByNameResponse|1 label #0?", lg];
      }
    }
    class Sg extends cg {
      constructor(t3) {
        super(), this.labelId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sg, t3, e3);
      }
      static $() {
        return ["AddLabelToChangeRequest|1 change #0|2 label_id 9", na];
      }
    }
    class Jg extends cg {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jg, t3, e3);
      }
      static $() {
        return ["AddLabelToChangeResponse"];
      }
    }
    class Bg extends cg {
      constructor(t3) {
        super(), this.labelId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bg, t3, e3);
      }
      static $() {
        return ["RemoveLabelFromChangeRequest|1 change #0|2 label_id 9", na];
      }
    }
    class Eg extends cg {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Eg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Eg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Eg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Eg, t3, e3);
      }
      static $() {
        return ["RemoveLabelFromChangeResponse"];
      }
    }
    class Ig extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Cg extends Ig {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cg, t3, e3);
      }
      static $() {
        return ["WatchChangeSyncEventsRequest|1 identifier #0|2 change_number 4", o2];
      }
    }
    class bg extends Ig {
      constructor(t3) {
        super(), this.frame = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bg, t3, e3);
      }
      static $() {
        return ["WatchChangeSyncEventsResponse|1 snapshot_json 9 frame|2 event_json 9 frame|3 heartbeat #0 frame", kg];
      }
    }
    class kg extends Ig {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kg, t3, e3);
      }
      static $() {
        return ["SyncEventHeartbeat"];
      }
    }
    class vg extends Ig {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vg, t3, e3);
      }
      static $() {
        return ["ChangeSyncTarget|1 identifier #0|2 change_number 4|3 resume #1?", o2, qg];
      }
    }
    class qg extends Ig {
      constructor(t3) {
        super(), this.streamSeqs = {}, this.headSha = "", this.headVersionNumber = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qg, t3, e3);
      }
      static $() {
        return ["SyncResumeCursor|1 stream_seqs 9,4|2 head_sha 9|3 head_version_number 13"];
      }
    }
    class Rg extends Ig {
      constructor(t3) {
        super(), this.sha = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rg, t3, e3);
      }
      static $() {
        return ["ShaSyncTarget|1 identifier #0|2 sha 9", o2];
      }
    }
    class Pg extends Ig {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pg, t3, e3);
      }
      static $() {
        return ["RepoSyncTarget|1 identifier #0", o2];
      }
    }
    class Tg extends Ig {
      constructor(t3) {
        super(), this.ref = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tg, t3, e3);
      }
      static $() {
        return ["RefSyncTarget|1 identifier #0|2 ref 9", o2];
      }
    }
    class xg extends Ig {
      constructor(t3) {
        super(), this.targetRef = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xg, t3, e3);
      }
      static $() {
        return ["QueueSyncTarget|1 identifier #0|2 target_ref 9", o2];
      }
    }
    class Ng extends Ig {
      constructor(t3) {
        super(), this.kind = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ng().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ng().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ng().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ng, t3, e3);
      }
      static $() {
        return ["SyncTarget|1 sha #0 kind|2 repo #1 kind|3 ref #2 kind|4 queue #3 kind", Rg, Pg, Tg, xg];
      }
    }
    class Dg extends Ig {
      constructor(t3) {
        super(), this.subscriptions = [], this.targets = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dg, t3, e3);
      }
      static $() {
        return ["WatchChangeSyncEventsV2Request|1 subscriptions #0*|2 targets #1*", vg, Ng];
      }
    }
    class Ug extends Ig {
      constructor(t3) {
        super(), this.connectionId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ug().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ug().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ug().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ug, t3, e3);
      }
      static $() {
        return ["WatchSyncSessionStarted|1 connection_id 9"];
      }
    }
    class Qg extends Ig {
      constructor(t3) {
        super(), this.snapshotJson = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qg, t3, e3);
      }
      static $() {
        return ["TaggedSyncSnapshot|1 target #0|2 snapshot_json 9|3 sync_target #1", vg, Ng];
      }
    }
    class Mg extends Ig {
      constructor(t3) {
        super(), this.eventJson = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mg, t3, e3);
      }
      static $() {
        return ["TaggedSyncEvent|1 target #0|2 event_json 9|3 sync_target #1", vg, Ng];
      }
    }
    class Og extends Ig {
      constructor(t3) {
        super(), this.reason = "", this.message = "", this.updateId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Og().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Og().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Og().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Og, t3, e3);
      }
      static $() {
        return ["WatchSyncSubscriptionNack|1 target #0|2 reason 9|3 message 9|4 sync_target #1|5 update_id 9", vg, Ng];
      }
    }
    class Fg extends Ig {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fg, t3, e3);
      }
      static $() {
        return ["WatchSyncSubscriptionRemoved|1 target #0|2 sync_target #1", vg, Ng];
      }
    }
    class Lg extends Ig {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lg, t3, e3);
      }
      static $() {
        return ["WatchSyncSubscriptionResumed|1 target #0", vg];
      }
    }
    class $g extends Ig {
      constructor(t3) {
        super(), this.frame = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $g().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $g().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $g().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($g, t3, e3);
      }
      static $() {
        return ["WatchChangeSyncEventsV2Response|1 session #0 frame|2 snapshot #1 frame|3 event #2 frame|4 heartbeat #3 frame|5 nack #4 frame|6 removed #5 frame|7 resumed #6 frame", Ug, Qg, Mg, kg, Og, Fg, Lg];
      }
    }
    class Gg extends Ig {
      constructor(t3) {
        super(), this.connectionId = "", this.add = [], this.remove = [], this.addTargets = [], this.removeTargets = [], this.updateId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gg, t3, e3);
      }
      static $() {
        return ["UpdateWatchChangeSyncSubscriptionsRequest|1 connection_id 9|2 add #0*|3 remove #0*|4 add_targets #1*|5 remove_targets #1*|6 update_id 9", vg, Ng];
      }
    }
    class Hg extends Ig {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hg, t3, e3);
      }
      static $() {
        return ["UpdateWatchChangeSyncSubscriptionsResponse"];
      }
    }
    class Kg extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class Vg extends Kg {
      constructor(t3) {
        super(), this.changeNumber = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vg, t3, e3);
      }
      static $() {
        return ["GetChangeSyncSnapshotRequest|1 identifier #0|2 change_number 4", o2];
      }
    }
    class zg extends Kg {
      constructor(t3) {
        super(), this.snapshotJson = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zg, t3, e3);
      }
      static $() {
        return ["GetChangeSyncSnapshotResponse|1 snapshot_json 9|2 viewer_state #0", Wg];
      }
    }
    class Wg extends Kg {
      constructor(t3) {
        super(), this.pendingReviews = [], this.pendingThreads = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wg, t3, e3);
      }
      static $() {
        return ["ChangeSyncViewerState|1 timeline_viewed_at #0?|2 pending_reviews #1*|3 pending_threads #2*", n2.Timestamp, va, jl];
      }
    }
    class Yg extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "origin.v1.";
      }
    }
    class jg extends Yg {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jg, t3, e3);
      }
      static $() {
        return ["GithubOutageDrillProbeRequest"];
      }
    }
    class Xg extends Yg {
      constructor(t3) {
        super(), this.intercepted = false, this.attemptCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xg().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xg().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xg().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xg, t3, e3);
      }
      static $() {
        return ["GithubOutageDrillProbeResponse|1 intercepted 8|2 attempt_count 13"];
      }
    }
    const Zg = { typeName: "origin.v1.OriginService", methods: { listHostedRepos: { name: "ListHostedRepos", I: w, O: S, kind: n2.MethodKind.Unary }, createRepo: { name: "CreateRepo", I: B, O: E, kind: n2.MethodKind.Unary }, createRepoAndEnsureUserNamespace: { name: "CreateRepoAndEnsureUserNamespace", I: B, O: E, kind: n2.MethodKind.Unary }, publishAgentTempRepo: { name: "PublishAgentTempRepo", I, O: C, kind: n2.MethodKind.Unary }, createMirroredRepo: { name: "CreateMirroredRepo", I: b, O: E, kind: n2.MethodKind.Unary }, filterMirrorableGithubRepos: { name: "FilterMirrorableGithubRepos", I: k, O: v, kind: n2.MethodKind.Unary }, deleteRepo: { name: "DeleteRepo", I: tt, O: et, kind: n2.MethodKind.Unary }, deleteMirroredRepo: { name: "DeleteMirroredRepo", I: rt, O: nt, kind: n2.MethodKind.Unary }, getRepo: { name: "GetRepo", I: gt, O: Bt, kind: n2.MethodKind.Unary }, getRepoWithMirrorInfo: { name: "GetRepoWithMirrorInfo", I: gt, O: It, kind: n2.MethodKind.Unary }, getRepoByGithubMirror: { name: "GetRepoByGithubMirror", I: Ct, O: It, kind: n2.MethodKind.Unary }, recordCloneKitUsage: { name: "RecordCloneKitUsage", I: kt, O: vt, kind: n2.MethodKind.Unary }, updateRepoMergeSettings: { name: "UpdateRepoMergeSettings", I: it, O: ot, kind: n2.MethodKind.Unary }, updateRepoBranchDeletionSetting: { name: "UpdateRepoBranchDeletionSetting", I: at, O: ut, kind: n2.MethodKind.Unary }, listRepoCloneKits: { name: "ListRepoCloneKits", I: ct, O: lt, kind: n2.MethodKind.Unary }, updateRepoVisibility: { name: "UpdateRepoVisibility", I: dt, O: ft, kind: n2.MethodKind.Unary }, updateRepoDefaultBranch: { name: "UpdateRepoDefaultBranch", I: pt, O: ht, kind: n2.MethodKind.Unary }, detachRepoMirror: { name: "DetachRepoMirror", I: q, O: R, kind: n2.MethodKind.Unary }, reattachRepoMirror: { name: "ReattachRepoMirror", I: P, O: x, kind: n2.MethodKind.Unary }, transitionRepoMirrorStatus: { name: "TransitionRepoMirrorStatus", I: L, O: $, kind: n2.MethodKind.Unary }, forceRepoMirrorCutover: { name: "ForceRepoMirrorCutover", I: G, O: H, kind: n2.MethodKind.Unary }, syncMirror: { name: "SyncMirror", I: K, O: V, kind: n2.MethodKind.Unary }, createRepoMirrorDeployKey: { name: "CreateRepoMirrorDeployKey", I: D, O: U, kind: n2.MethodKind.Unary }, getRepoMirrorDeployKey: { name: "GetRepoMirrorDeployKey", I: Q, O: M, kind: n2.MethodKind.Unary }, deleteRepoMirrorDeployKey: { name: "DeleteRepoMirrorDeployKey", I: O, O: F, kind: n2.MethodKind.Unary }, getMirrorTransitionJob: { name: "GetMirrorTransitionJob", I: Y, O: j, kind: n2.MethodKind.Unary }, getActiveMirrorTransitionJob: { name: "GetActiveMirrorTransitionJob", I: z, O: W, kind: n2.MethodKind.Unary }, getRepoNamespace: { name: "GetRepoNamespace", I: Mt, O: Ot, kind: n2.MethodKind.Unary }, doesNamespaceExistForTeam: { name: "DoesNamespaceExistForTeam", I: Ft, O: Lt, kind: n2.MethodKind.Unary }, getAuthorizedNamespaces: { name: "GetAuthorizedNamespaces", I: $t, O: Gt, kind: n2.MethodKind.Unary }, createOriginNamespace: { name: "CreateOriginNamespace", I: Rt, O: Pt, kind: n2.MethodKind.Unary }, setupTeamNamespace: { name: "SetupTeamNamespace", I: Tt, O: xt, kind: n2.MethodKind.Unary }, setupUserNamespace: { name: "SetupUserNamespace", I: Nt, O: Qt, kind: n2.MethodKind.Unary }, suggestOriginNamespace: { name: "SuggestOriginNamespace", I: Dt, O: Ut, kind: n2.MethodKind.Unary }, listRepoAssignablePolicies: { name: "ListRepoAssignablePolicies", I: ee, O: re, kind: n2.MethodKind.Unary }, getRepoTeamAccess: { name: "GetRepoTeamAccess", I: ie, O: oe, kind: n2.MethodKind.Unary }, listRepoGrants: { name: "ListRepoGrants", I: ce, O: le, kind: n2.MethodKind.Unary }, setRepoTeamAccess: { name: "SetRepoTeamAccess", I: me, O: de, kind: n2.MethodKind.Unary }, setRepoUserAccess: { name: "SetRepoUserAccess", I: fe, O: pe, kind: n2.MethodKind.Unary }, createRepoShareInvite: { name: "CreateRepoShareInvite", I: Ne, O: De, kind: n2.MethodKind.Unary }, createRepoShareBatchInvites: { name: "CreateRepoShareBatchInvites", I: Ue, O: Oe, kind: n2.MethodKind.Unary }, updateRepoShareInvite: { name: "UpdateRepoShareInvite", I: Fe, O: Le, kind: n2.MethodKind.Unary }, revokeRepoShareInvite: { name: "RevokeRepoShareInvite", I: $e, O: Ge, kind: n2.MethodKind.Unary }, listRepoShareInvites: { name: "ListRepoShareInvites", I: He, O: Ke, kind: n2.MethodKind.Unary }, getShareInviteByToken: { name: "GetShareInviteByToken", I: ze, O: We, kind: n2.MethodKind.Unary }, declineShareInvite: { name: "DeclineShareInvite", I: Ye, O: je, kind: n2.MethodKind.Unary }, acceptShareInvite: { name: "AcceptShareInvite", I: Xe, O: Ze, kind: n2.MethodKind.Unary }, listMyShareInvites: { name: "ListMyShareInvites", I: er, O: rr, kind: n2.MethodKind.Unary }, listMyExternalRepositories: { name: "ListMyExternalRepositories", I: sr, O: ir, kind: n2.MethodKind.Unary }, leaveMyExternalRepository: { name: "LeaveMyExternalRepository", I: mr, O: dr, kind: n2.MethodKind.Unary }, setRepoGroupAccess: { name: "SetRepoGroupAccess", I: he, O: ge, kind: n2.MethodKind.Unary }, hasOriginPermission: { name: "HasOriginPermission", I: Xt, O: Zt, kind: n2.MethodKind.Unary }, getNamespaceTeamAccess: { name: "GetNamespaceTeamAccess", I: _e, O: ye, kind: n2.MethodKind.Unary }, setNamespaceTeamAccess: { name: "SetNamespaceTeamAccess", I: we, O: Se, kind: n2.MethodKind.Unary }, listNamespaceGrants: { name: "ListNamespaceGrants", I: Be, O: Ee, kind: n2.MethodKind.Unary }, setNamespaceUserAccess: { name: "SetNamespaceUserAccess", I: Ie, O: Ce, kind: n2.MethodKind.Unary }, setNamespaceGroupAccess: { name: "SetNamespaceGroupAccess", I: be, O: ke, kind: n2.MethodKind.Unary }, listNamespaceAssignablePolicies: { name: "ListNamespaceAssignablePolicies", I: Pe, O: Te, kind: n2.MethodKind.Unary }, listGroupGrantsInNamespace: { name: "ListGroupGrantsInNamespace", I: ve, O: Re, kind: n2.MethodKind.Unary }, getNamespaceSshCertificateAuthorities: { name: "GetNamespaceSshCertificateAuthorities", I: hr, O: gr, kind: n2.MethodKind.Unary }, addNamespaceSshCertificateAuthority: { name: "AddNamespaceSshCertificateAuthority", I: Ar, O: _r, kind: n2.MethodKind.Unary }, removeNamespaceSshCertificateAuthority: { name: "RemoveNamespaceSshCertificateAuthority", I: yr, O: wr, kind: n2.MethodKind.Unary }, setNamespaceSshRequireCertificates: { name: "SetNamespaceSshRequireCertificates", I: Sr, O: Jr, kind: n2.MethodKind.Unary }, getNamespaceInboundIpAllowlist: { name: "GetNamespaceInboundIpAllowlist", I: Ir, O: Cr, kind: n2.MethodKind.Unary }, addNamespaceInboundIpAllowlistEntry: { name: "AddNamespaceInboundIpAllowlistEntry", I: br, O: kr, kind: n2.MethodKind.Unary }, updateNamespaceInboundIpAllowlistEntry: { name: "UpdateNamespaceInboundIpAllowlistEntry", I: vr, O: qr, kind: n2.MethodKind.Unary }, deleteNamespaceInboundIpAllowlistEntry: { name: "DeleteNamespaceInboundIpAllowlistEntry", I: Rr, O: Pr, kind: n2.MethodKind.Unary }, setNamespaceInboundIpAllowlistEnabled: { name: "SetNamespaceInboundIpAllowlistEnabled", I: Tr, O: xr, kind: n2.MethodKind.Unary }, addSshPublicKey: { name: "AddSshPublicKey", I: Ur, O: Qr, kind: n2.MethodKind.Unary }, listSshPublicKeys: { name: "ListSshPublicKeys", I: Mr, O: Or, kind: n2.MethodKind.Unary }, deleteSshPublicKey: { name: "DeleteSshPublicKey", I: Fr, O: Lr, kind: n2.MethodKind.Unary }, upsertOriginUserSlackNotification: { name: "UpsertOriginUserSlackNotification", I: Vr, O: zr, kind: n2.MethodKind.Unary }, deleteOriginUserSlackNotification: { name: "DeleteOriginUserSlackNotification", I: Wr, O: Yr, kind: n2.MethodKind.Unary }, getOriginUserSlackNotification: { name: "GetOriginUserSlackNotification", I: jr, O: Xr, kind: n2.MethodKind.Unary }, getOriginCommitEmailVerification: { name: "GetOriginCommitEmailVerification", I: sn, O: on, kind: n2.MethodKind.Unary }, startOriginCommitEmailVerification: { name: "StartOriginCommitEmailVerification", I: an, O: un, kind: n2.MethodKind.Unary }, createOriginUserSlackReviewReminder: { name: "CreateOriginUserSlackReviewReminder", I: pn, O: hn, kind: n2.MethodKind.Unary }, updateOriginUserSlackReviewReminder: { name: "UpdateOriginUserSlackReviewReminder", I: gn, O: An, kind: n2.MethodKind.Unary }, listOriginUserSlackReviewReminders: { name: "ListOriginUserSlackReviewReminders", I: _n, O: yn, kind: n2.MethodKind.Unary }, getOriginUserSlackReviewReminder: { name: "GetOriginUserSlackReviewReminder", I: wn, O: Sn, kind: n2.MethodKind.Unary }, disableOriginUserSlackReviewReminder: { name: "DisableOriginUserSlackReviewReminder", I: Jn, O: Bn, kind: n2.MethodKind.Unary }, subscribeOriginSlackChannel: { name: "SubscribeOriginSlackChannel", I: qn, O: Pn, kind: n2.MethodKind.Unary }, unsubscribeOriginSlackChannel: { name: "UnsubscribeOriginSlackChannel", I: Tn, O: xn, kind: n2.MethodKind.Unary }, listOriginSlackChannelSubscriptions: { name: "ListOriginSlackChannelSubscriptions", I: Nn, O: Dn, kind: n2.MethodKind.Unary }, getCommit: { name: "GetCommit", I: Si, O: jn, kind: n2.MethodKind.Unary }, getBlob: { name: "GetBlob", I: Ji, O: Xn, kind: n2.MethodKind.Unary }, getTag: { name: "GetTag", I: Bi, O: Zn, kind: n2.MethodKind.Unary }, getTree: { name: "GetTree", I: Ei, O: ts, kind: n2.MethodKind.Unary }, resolveRepoPath: { name: "ResolveRepoPath", I: ai, O: ws, kind: n2.MethodKind.Unary }, getRepoContent: { name: "GetRepoContent", I: ui, O: Ss, kind: n2.MethodKind.Unary }, mintRawRepoFileLink: { name: "MintRawRepoFileLink", I: ci, O: li, kind: n2.MethodKind.Unary }, getRepoTarball: { name: "GetRepoTarball", I: mi, O: di, kind: n2.MethodKind.Unary }, getRepoContentAtSha: { name: "GetRepoContentAtSha", I: fi, O: Ss, kind: n2.MethodKind.Unary }, getRepoContentDetailsAtSha: { name: "GetRepoContentDetailsAtSha", I: pi, O: Is, kind: n2.MethodKind.Unary }, batchGetRepoContentAtSha: { name: "BatchGetRepoContentAtSha", I: hi, O: Bs, kind: n2.MethodKind.Unary }, resolveCodeIntelligenceSymbolAtPosition: { name: "ResolveCodeIntelligenceSymbolAtPosition", I: co, O: lo, kind: n2.MethodKind.Unary }, findCodeIntelligenceReferencesAtPosition: { name: "FindCodeIntelligenceReferencesAtPosition", I: mo, O: go, kind: n2.MethodKind.ServerStreaming }, getRepoCodeowners: { name: "GetRepoCodeowners", I: gi, O: _i, kind: n2.MethodKind.Unary }, getGithubRepoCodeowners: { name: "GetGithubRepoCodeowners", I: yi, O: wi, kind: n2.MethodKind.Unary }, getFileHistory: { name: "GetFileHistory", I: Ii, O: Cs, kind: n2.MethodKind.Unary }, getFileHistoryPage: { name: "GetFileHistoryPage", I: Ci, O: bi, kind: n2.MethodKind.Unary }, getFileHistoryPageWithDiffStats: { name: "GetFileHistoryPageWithDiffStats", I: ki, O: ks, kind: n2.MethodKind.Unary }, getFuzzyPaths: { name: "GetFuzzyPaths", I: Ri, O: Ts, kind: n2.MethodKind.Unary }, listRepoPaths: { name: "ListRepoPaths", I: Pi, O: xs, kind: n2.MethodKind.Unary }, grepRepo: { name: "GrepRepo", I: Ti, O: Qs, kind: n2.MethodKind.ServerStreaming }, getPullRequestDiff: { name: "GetPullRequestDiff", I: xi, O: Fs, kind: n2.MethodKind.ServerStreaming }, getCommitDiff: { name: "GetCommitDiff", I: Ni, O: $s, kind: n2.MethodKind.ServerStreaming }, getCommitDiff2: { name: "GetCommitDiff2", I: Di, O: Ks, kind: n2.MethodKind.ServerStreaming }, getCommitChangedPaths: { name: "GetCommitChangedPaths", I: Ui, O: Vs, kind: n2.MethodKind.Unary }, getCommitDiffStats: { name: "GetCommitDiffStats", I: Qi, O: zs, kind: n2.MethodKind.Unary }, getBlame: { name: "GetBlame", I: vi, O: qs, kind: n2.MethodKind.ServerStreaming }, getTreeBlame: { name: "GetTreeBlame", I: qi, O: Ps, kind: n2.MethodKind.Unary }, listRefs: { name: "ListRefs", I: Mi, O: ti, kind: n2.MethodKind.Unary }, searchRefs: { name: "SearchRefs", I: Oi, O: ei, kind: n2.MethodKind.Unary }, lookupCommits: { name: "LookupCommits", I: Fi, O: ss, kind: n2.MethodKind.Unary }, getCommitActivity: { name: "GetCommitActivity", I: Li, O: $i, kind: n2.MethodKind.Unary }, compareCommits: { name: "CompareCommits", I: Ki, O: ls, kind: n2.MethodKind.Unary }, listCommitsInRange: { name: "ListCommitsInRange", I: Vi, O: cs, kind: n2.MethodKind.Unary }, canMerge: { name: "CanMerge", I: Hi, O: ms, kind: n2.MethodKind.Unary }, createCommitFromFiles: { name: "CreateCommitFromFiles", I: zi, O: Wi, kind: n2.MethodKind.Unary }, getCollectedPullRequestDiff: { name: "GetCollectedPullRequestDiff", I: ji, O: Xi, kind: n2.MethodKind.Unary }, getDiffListing: { name: "GetDiffListing", I: Eo, O: Ro, kind: n2.MethodKind.Unary }, streamDiffFiles: { name: "StreamDiffFiles", I: Io, O: Ro, kind: n2.MethodKind.ServerStreaming }, getDiffFile: { name: "GetDiffFile", I: bo, O: Ro, kind: n2.MethodKind.Unary }, getDiffEngineInfo: { name: "GetDiffEngineInfo", I: vo, O: Ro, kind: n2.MethodKind.Unary }, portAnchors: { name: "PortAnchors", I: qo, O: Ro, kind: n2.MethodKind.Unary }, createChange: { name: "CreateChange", I: ea, O: ra, kind: n2.MethodKind.Unary }, importGithubPullRequest: { name: "ImportGithubPullRequest", I: _l, O: yl, kind: n2.MethodKind.Unary }, updateChange: { name: "UpdateChange", I: oa, O: aa, kind: n2.MethodKind.Unary }, updateChangeBranch: { name: "UpdateChangeBranch", I: ua, O: ca, kind: n2.MethodKind.Unary }, getMergeConflictResolution: { name: "GetMergeConflictResolution", I: Fl, O: Ll, kind: n2.MethodKind.Unary }, applyMergeConflictResolution: { name: "ApplyMergeConflictResolution", I: $l, O: Gl, kind: n2.MethodKind.Unary }, undoMergeConflictResolution: { name: "UndoMergeConflictResolution", I: Hl, O: Kl, kind: n2.MethodKind.Unary }, deleteChangeHeadBranch: { name: "DeleteChangeHeadBranch", I: la, O: ma, kind: n2.MethodKind.Unary }, restorePullRequestBranch: { name: "RestorePullRequestBranch", I: da, O: fa, kind: n2.MethodKind.Unary }, retargetChange: { name: "RetargetChange", I: pa, O: ha, kind: n2.MethodKind.Unary }, foldChange: { name: "FoldChange", I: ga, O: Aa, kind: n2.MethodKind.Unary }, landChangeTreePath: { name: "LandChangeTreePath", I: _a, O: ya, kind: n2.MethodKind.Unary }, splitChangeIntoStack: { name: "SplitChangeIntoStack", I: wa, O: Ja, kind: n2.MethodKind.Unary }, updateChangeMetadata: { name: "UpdateChangeMetadata", I: Ba, O: Ea, kind: n2.MethodKind.Unary }, updateChangeStatus: { name: "UpdateChangeStatus", I: Ia, O: ba, kind: n2.MethodKind.Unary }, createReview: { name: "CreateReview", I: Da, O: Ua, kind: n2.MethodKind.Unary }, updateReview: { name: "UpdateReview", I: Qa, O: Ma, kind: n2.MethodKind.Unary }, dismissReview: { name: "DismissReview", I: Oa, O: Fa, kind: n2.MethodKind.Unary }, listReviews: { name: "ListReviews", I: La, O: $a, kind: n2.MethodKind.Unary }, listChangeTimelineEvents: { name: "ListChangeTimelineEvents", I: Ga, O: Ha, kind: n2.MethodKind.Unary }, startReview: { name: "StartReview", I: Hc, O: Kc, kind: n2.MethodKind.Unary }, submitReview: { name: "SubmitReview", I: Vc, O: zc, kind: n2.MethodKind.Unary }, discardPendingReview: { name: "DiscardPendingReview", I: Wc, O: Yc, kind: n2.MethodKind.Unary }, getPendingReview: { name: "GetPendingReview", I: jc, O: Xc, kind: n2.MethodKind.Unary }, requestReview: { name: "RequestReview", I: tu, O: eu, kind: n2.MethodKind.Unary }, applyReviewRequestChanges: { name: "ApplyReviewRequestChanges", I: nu, O: su, kind: n2.MethodKind.Unary }, requestReviews: { name: "RequestReviews", I: iu, O: ou, kind: n2.MethodKind.Unary }, closeReviewRequest: { name: "CloseReviewRequest", I: au, O: uu, kind: n2.MethodKind.Unary }, listReviewRequestEvents: { name: "ListReviewRequestEvents", I: Xa, O: Za, kind: n2.MethodKind.Unary }, addAssignee: { name: "AddAssignee", I: cu, O: lu, kind: n2.MethodKind.Unary }, removeAssignee: { name: "RemoveAssignee", I: mu, O: du, kind: n2.MethodKind.Unary }, listOriginRepoReviewerCandidates: { name: "ListOriginRepoReviewerCandidates", I: hu, O: Au, kind: n2.MethodKind.Unary }, createComment: { name: "CreateComment", I: Ka, O: Va, kind: n2.MethodKind.Unary }, listComments: { name: "ListComments", I: za, O: Wa, kind: n2.MethodKind.Unary }, createCommentThread: { name: "CreateCommentThread", I: Xl, O: Zl, kind: n2.MethodKind.Unary }, submitPullRequestGateReport: { name: "SubmitPullRequestGateReport", I: el, O: al, kind: n2.MethodKind.Unary }, listPullRequestGateReports: { name: "ListPullRequestGateReports", I: ml, O: dl, kind: n2.MethodKind.Unary }, uploadPullRequestGateTranscript: { name: "UploadPullRequestGateTranscript", I: rl, O: nl, kind: n2.MethodKind.Unary }, listCommentThreads: { name: "ListCommentThreads", I: tm, O: em, kind: n2.MethodKind.Unary }, addCommentToThread: { name: "AddCommentToThread", I: rm, O: nm, kind: n2.MethodKind.Unary }, resolveCommentThread: { name: "ResolveCommentThread", I: sm, O: im, kind: n2.MethodKind.Unary }, reopenCommentThread: { name: "ReopenCommentThread", I: om, O: am, kind: n2.MethodKind.Unary }, updateComment: { name: "UpdateComment", I: um, O: cm, kind: n2.MethodKind.Unary }, deleteComment: { name: "DeleteComment", I: lm, O: mm, kind: n2.MethodKind.Unary }, setCommentReaction: { name: "SetCommentReaction", I: dm, O: fm, kind: n2.MethodKind.Unary }, listCommentReactions: { name: "ListCommentReactions", I: pm, O: hm, kind: n2.MethodKind.Unary }, markFileAsViewed: { name: "MarkFileAsViewed", I: Am, O: _m, kind: n2.MethodKind.Unary }, unmarkFileAsViewed: { name: "UnmarkFileAsViewed", I: ym, O: wm, kind: n2.MethodKind.Unary }, markDirectoryAsViewed: { name: "MarkDirectoryAsViewed", I: Sm, O: Jm, kind: n2.MethodKind.Unary }, markAllFilesAsViewed: { name: "MarkAllFilesAsViewed", I: Bm, O: Em, kind: n2.MethodKind.Unary }, unmarkAllFilesAsViewed: { name: "UnmarkAllFilesAsViewed", I: Im, O: Cm, kind: n2.MethodKind.Unary }, listFileViewedStates: { name: "ListFileViewedStates", I: bm, O: km, kind: n2.MethodKind.Unary }, markPullRequestAsViewed: { name: "MarkPullRequestAsViewed", I: Tm, O: xm, kind: n2.MethodKind.Unary }, getGeneratedCodeTour: { name: "GetGeneratedCodeTour", I: Qm, O: Mm, kind: n2.MethodKind.Unary }, upsertGeneratedCodeTour: { name: "UpsertGeneratedCodeTour", I: Om, O: Fm, kind: n2.MethodKind.Unary }, enableChangeMergeWhenReady: { name: "EnableChangeMergeWhenReady", I: Gm, O: Hm, kind: n2.MethodKind.Unary }, getChangeMergeWhenReady: { name: "GetChangeMergeWhenReady", I: Km, O: Vm, kind: n2.MethodKind.Unary }, disableChangeMergeWhenReady: { name: "DisableChangeMergeWhenReady", I: zm, O: Wm, kind: n2.MethodKind.Unary }, enqueueForMerge: { name: "EnqueueForMerge", I: ff, O: pf, kind: n2.MethodKind.Unary }, cancelMergeQueueEntry: { name: "CancelMergeQueueEntry", I: hf, O: gf, kind: n2.MethodKind.Unary }, getMergeQueueStatus: { name: "GetMergeQueueStatus", I: Af, O: _f, kind: n2.MethodKind.Unary }, getMergeQueue: { name: "GetMergeQueue", I: yf, O: wf, kind: n2.MethodKind.Unary }, getMergeQueueConfig: { name: "GetMergeQueueConfig", I: Ef, O: If, kind: n2.MethodKind.Unary }, enableMergeQueue: { name: "EnableMergeQueue", I: bf, O: kf, kind: n2.MethodKind.Unary }, disableMergeQueue: { name: "DisableMergeQueue", I: vf, O: qf, kind: n2.MethodKind.Unary }, updateMergeQueueConfig: { name: "UpdateMergeQueueConfig", I: Rf, O: Pf, kind: n2.MethodKind.Unary }, getChange: { name: "GetChange", I: _u, O: Bu, kind: n2.MethodKind.Unary }, getChangeCodeownersApplication: { name: "GetChangeCodeownersApplication", I: Eu, O: Uu, kind: n2.MethodKind.Unary }, getProjectedLatestVersions: { name: "GetProjectedLatestVersions", I: Lu, O: Gu, kind: n2.MethodKind.Unary }, getChangeStackPageData: { name: "GetChangeStackPageData", I: $f, O: Gf, kind: n2.MethodKind.Unary }, getChangeStack: { name: "GetChangeStack", I: Mu, O: Fu, kind: n2.MethodKind.Unary }, listChangeCommits: { name: "ListChangeCommits", I: Hu, O: Ku, kind: n2.MethodKind.Unary }, listChanges: { name: "ListChanges", I: Wu, O: sc, kind: n2.MethodKind.Unary }, listChangesByHeadRef: { name: "ListChangesByHeadRef", I: Yu, O: ju, kind: n2.MethodKind.Unary }, getCommitReferences: { name: "GetCommitReferences", I: Xu, O: tc, kind: n2.MethodKind.Unary }, batchGetChanges: { name: "BatchGetChanges", I: rc, O: nc, kind: n2.MethodKind.Unary }, searchChanges: { name: "SearchChanges", I: uc, O: cc, kind: n2.MethodKind.Unary }, getSectionOfChanges: { name: "GetSectionOfChanges", I: ic, O: oc, kind: n2.MethodKind.Unary }, countSectionsOfChanges: { name: "CountSectionsOfChanges", I: lc, O: mc, kind: n2.MethodKind.Unary }, resolveSectionPersonalBotAuthors: { name: "ResolveSectionPersonalBotAuthors", I: dc, O: fc, kind: n2.MethodKind.Unary }, getCiState: { name: "GetCiState", I: id, O: od, kind: n2.MethodKind.Unary }, batchGetCommitCheckRollups: { name: "BatchGetCommitCheckRollups", I: ad, O: cd, kind: n2.MethodKind.Unary }, getCheckRun: { name: "GetCheckRun", I: ld, O: md, kind: n2.MethodKind.Unary }, listRepoCheckSources: { name: "ListRepoCheckSources", I: dd, O: hd, kind: n2.MethodKind.Unary }, getOriginCiJobLog: { name: "GetOriginCiJobLog", I: af, O: uf, kind: n2.MethodKind.Unary }, postCheckRun: { name: "PostCheckRun", I: Bd, O: Cd, kind: n2.MethodKind.Unary }, createCheckRunAnnotations: { name: "CreateCheckRunAnnotations", I: Rd, O: Pd, kind: n2.MethodKind.Unary }, listCheckRunAnnotations: { name: "ListCheckRunAnnotations", I: Td, O: xd, kind: n2.MethodKind.Unary }, rerequestCheckRun: { name: "RerequestCheckRun", I: Nd, O: Dd, kind: n2.MethodKind.Unary }, getChangesetMergeability: { name: "GetChangesetMergeability", I: Ud, O: Qd, kind: n2.MethodKind.Unary }, getReviewRequirements: { name: "GetReviewRequirements", I: Vf, O: zf, kind: n2.MethodKind.Unary }, mergeStack: { name: "MergeStack", I: Xd, O: Zd, kind: n2.MethodKind.Unary }, revertPullRequest: { name: "RevertPullRequest", I: sa, O: ia, kind: n2.MethodKind.Unary }, restackStack: { name: "RestackStack", I: tf, O: rf, kind: n2.MethodKind.Unary }, getApp: { name: "GetApp", I: fp, O: pp, kind: n2.MethodKind.Unary }, createApp: { name: "CreateApp", I: mp, O: dp, kind: n2.MethodKind.Unary }, addAppSigningKey: { name: "AddAppSigningKey", I: hp, O: gp, kind: n2.MethodKind.Unary }, revokeAppSigningKey: { name: "RevokeAppSigningKey", I: Ap, O: _p, kind: n2.MethodKind.Unary }, getAppMetadata: { name: "GetAppMetadata", I: nh, O: sh, kind: n2.MethodKind.Unary }, listNamespaceApps: { name: "ListNamespaceApps", I: yp, O: wp, kind: n2.MethodKind.Unary }, listPublicApps: { name: "ListPublicApps", I: Bp, O: Ep, kind: n2.MethodKind.Unary }, createInstallation: { name: "CreateInstallation", I: bp, O: kp, kind: n2.MethodKind.Unary }, getInstallation: { name: "GetInstallation", I: vp, O: qp, kind: n2.MethodKind.Unary }, listNamespaceInstallations: { name: "ListNamespaceInstallations", I: Rp, O: Pp, kind: n2.MethodKind.Unary }, listRepoInstallations: { name: "ListRepoInstallations", I: ch, O: lh, kind: n2.MethodKind.Unary }, updateApp: { name: "UpdateApp", I: Tp, O: Gp, kind: n2.MethodKind.Unary }, setAppWebhookDeliveryEnabled: { name: "SetAppWebhookDeliveryEnabled", I: Op, O: Fp, kind: n2.MethodKind.Unary }, sendAppWebhookTestDelivery: { name: "SendAppWebhookTestDelivery", I: Lp, O: $p, kind: n2.MethodKind.Unary }, deleteApp: { name: "DeleteApp", I: Vp, O: zp, kind: n2.MethodKind.Unary }, setAppIcon: { name: "SetAppIcon", I: Hp, O: Kp, kind: n2.MethodKind.Unary }, deleteInstallation: { name: "DeleteInstallation", I: Wp, O: Yp, kind: n2.MethodKind.Unary }, suspendInstallation: { name: "SuspendInstallation", I: ih, O: oh, kind: n2.MethodKind.Unary }, unsuspendInstallation: { name: "UnsuspendInstallation", I: ah, O: uh, kind: n2.MethodKind.Unary }, listReposForAppInstall: { name: "ListReposForAppInstall", I: J, O: S, kind: n2.MethodKind.Unary }, previewAppInstallation: { name: "PreviewAppInstallation", I: Xp, O: th, kind: n2.MethodKind.Unary }, requestAppInstall: { name: "RequestAppInstall", I: mh, O: dh, kind: n2.MethodKind.Unary }, getMyAppInstallRequest: { name: "GetMyAppInstallRequest", I: fh, O: ph, kind: n2.MethodKind.Unary }, cancelMyAppInstallRequest: { name: "CancelMyAppInstallRequest", I: hh, O: gh, kind: n2.MethodKind.Unary }, listAppInstallRequests: { name: "ListAppInstallRequests", I: yh, O: wh, kind: n2.MethodKind.Unary }, denyAppInstallRequests: { name: "DenyAppInstallRequests", I: Sh, O: Jh, kind: n2.MethodKind.Unary }, getAtlasNode: { name: "GetAtlasNode", I: Rh, O: Th, kind: n2.MethodKind.Unary }, listAtlasNodePaths: { name: "ListAtlasNodePaths", I: Fh, O: $h, kind: n2.MethodKind.Unary }, getAtlasRepoStatus: { name: "GetAtlasRepoStatus", I: Nh, O: Dh, kind: n2.MethodKind.Unary }, setAtlasRepoConfig: { name: "SetAtlasRepoConfig", I: Uh, O: Qh, kind: n2.MethodKind.Unary }, refreshAtlasRepo: { name: "RefreshAtlasRepo", I: Mh, O: Oh, kind: n2.MethodKind.Unary }, listRulesets: { name: "ListRulesets", I: eg, O: rg, kind: n2.MethodKind.Unary }, getRuleset: { name: "GetRuleset", I: ng, O: sg, kind: n2.MethodKind.Unary }, upsertRuleset: { name: "UpsertRuleset", I: ig, O: og, kind: n2.MethodKind.Unary }, deleteRuleset: { name: "DeleteRuleset", I: ag, O: ug, kind: n2.MethodKind.Unary }, createLabel: { name: "CreateLabel", I: mg, O: dg, kind: n2.MethodKind.Unary }, updateLabel: { name: "UpdateLabel", I: fg, O: pg, kind: n2.MethodKind.Unary }, deleteLabel: { name: "DeleteLabel", I: hg, O: gg, kind: n2.MethodKind.Unary }, listLabels: { name: "ListLabels", I: Ag, O: _g, kind: n2.MethodKind.Unary }, getLabelByName: { name: "GetLabelByName", I: yg, O: wg, kind: n2.MethodKind.Unary }, addLabelToChange: { name: "AddLabelToChange", I: Sg, O: Jg, kind: n2.MethodKind.Unary }, removeLabelFromChange: { name: "RemoveLabelFromChange", I: Bg, O: Eg, kind: n2.MethodKind.Unary }, checkChangeCreationAccess: { name: "CheckChangeCreationAccess", I: Zc, O: tl, kind: n2.MethodKind.Unary }, watchChangeSyncEvents: { name: "WatchChangeSyncEvents", I: Cg, O: bg, kind: n2.MethodKind.ServerStreaming }, getChangeSyncSnapshot: { name: "GetChangeSyncSnapshot", I: Vg, O: zg, kind: n2.MethodKind.Unary }, watchChangeSyncEventsV2: { name: "WatchChangeSyncEventsV2", I: Dg, O: $g, kind: n2.MethodKind.ServerStreaming }, updateWatchChangeSyncSubscriptions: { name: "UpdateWatchChangeSyncSubscriptions", I: Gg, O: Hg, kind: n2.MethodKind.Unary }, fastForwardBranch: { name: "FastForwardBranch", I: Zi, O: to, kind: n2.MethodKind.Unary }, listRepoExternalCollaborators: { name: "ListRepoExternalCollaborators", I: ar, O: ur, kind: n2.MethodKind.Unary }, setRepoExternalCollaboratorAccess: { name: "SetRepoExternalCollaboratorAccess", I: cr, O: lr, kind: n2.MethodKind.Unary }, previewAppUserConfirmation: { name: "PreviewAppUserConfirmation", I: Bh, O: Ih, kind: n2.MethodKind.Unary }, confirmAppUserConfirmation: { name: "ConfirmAppUserConfirmation", I: Ch, O: bh, kind: n2.MethodKind.Unary }, githubOutageDrillProbe: { name: "GithubOutageDrillProbe", I: jg, O: Xg, kind: n2.MethodKind.Unary } } };
  }