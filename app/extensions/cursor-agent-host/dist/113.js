"use strict";
exports.id = 113, exports.ids = [113], exports.modules = { 85113: (t, r, n) => {
  n.d(r, { pB: () => at, Xn: () => qt, ww: () => lt, wb: () => ut, HG: () => ct, DL: () => St, pj: () => dt, a: () => gt, q_: () => Jt });
  var s = n(36038), e = n(13574), o = n(43081), i = n(55094), a = n(67918), u = n(91448), c = n(8592);
  const l = "agent.v1.";
  class m extends c.HL {
    static get runtime() {
      return (0, c.kU)(this, "runtime", s.proto3);
    }
    static $p() {
      return l;
    }
  }
  var f = (0, c.QT)(s.proto3, l, "AgentHostPluginSource", [[0, "UNSPECIFIED"], [1, "CLAUDE_PLUGIN"], [2, "CURSOR_FIRST_PARTY"], [3, "CURSOR_THIRD_PARTY"], [4, "USER_LOCAL"], [5, "EXTENSION"]], 1), p = (0, c.QT)(s.proto3, l, "AgentHostCCPluginSourceType", [[0, "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_UNSPECIFIED"], [1, "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_MARKETPLACE"], [2, "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_GITHUB"], [3, "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_URL"], [4, "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_LOCAL"]]), g = (0, c.QT)(s.proto3, l, "AgentHostPluginLoadFailureErrorType", [[0, "UNSPECIFIED"], [1, "CLONE"], [2, "INSTALL"], [3, "PARSE"], [4, "MANIFEST"], [5, "TIMEOUT"], [6, "UNKNOWN"]], 1);
  class J extends m {
    constructor(t2) {
      super(), this.name = "", this.sourceType = p.AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_UNSPECIFIED, this.raw = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new J().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new J().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new J().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(J, t2, r2);
    }
    static $() {
      return ["AgentHostCCPluginSourceInfo|1 name 9|2 source_type #0|3 marketplace 9?|4 github_repo 9?|5 git_url 9?|6 local_path 9?|7 version 9?|8 raw 9", p];
    }
  }
  class S extends m {
    constructor(t2) {
      super(), this.name = "", this.version = "", this.configuredVariables = {}, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new S().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new S().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new S().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(S, t2, r2);
    }
    static $() {
      return ["AgentHostCursorPluginSourceInfo|1 name 9|2 version 9|3 plugin_db_id 9?|4 configured_variables 9,9|5 marketplace 9?|6 marketplace_db_id 9?|7 is_team_required 8?"];
    }
  }
  class d extends m {
    constructor(t2) {
      super(), this.name = "", this.localPath = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new d().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new d().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new d().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(d, t2, r2);
    }
    static $() {
      return ["AgentHostUserLocalPluginSourceInfo|1 name 9|2 local_path 9"];
    }
  }
  class w extends m {
    constructor(t2) {
      super(), this.name = "", this.localPath = "", this.extensionId = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new w().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new w().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new w().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(w, t2, r2);
    }
    static $() {
      return ["AgentHostExtensionPluginSourceInfo|1 name 9|2 local_path 9|3 extension_id 9"];
    }
  }
  class _ extends m {
    constructor(t2) {
      super(), this.source = f.UNSPECIFIED, this.sourceInfo = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new _().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new _().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new _().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(_, t2, r2);
    }
    static $() {
      return ["AgentHostPluginIdentifier|1 source #0|2 claude_plugin #1 source_info|3 cursor_marketplace #2 source_info|4 user_local #3 source_info|5 extension #4 source_info", f, J, S, d, w];
    }
  }
  class h extends m {
    constructor(t2) {
      super(), this.installPath = "", this.configuredVariables = {}, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new h().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new h().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new h().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(h, t2, r2);
    }
    static $() {
      return ["AgentHostPluginDescriptor|1 identifier #0|2 install_path 9|3 load_error 9?|4 display_name 9?|5 version 9?|6 description 9?|7 author_name 9?|8 configured_variables 9,9", _];
    }
  }
  class q extends m {
    constructor(t2) {
      super(), this.pluginName = "", this.errorMessage = "", this.errorType = g.UNSPECIFIED, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new q().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new q().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new q().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(q, t2, r2);
    }
    static $() {
      return ["AgentHostPluginLoadFailure|1 plugin_name 9|2 plugin_id 9?|3 plugin_db_id 9?|4 marketplace_name 9?|5 error_message 9|6 error_type #0", g];
    }
  }
  class y extends m {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new y().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new y().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new y().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(y, t2, r2);
    }
    static $() {
      return ["AgentHostPluginsSnapshotArgs"];
    }
  }
  class B extends m {
    constructor(t2) {
      super(), this.plugins = [], this.incomplete = false, this.failures = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new B().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new B().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new B().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(B, t2, r2);
    }
    static $() {
      return ["AgentHostPluginsSnapshotResult|1 plugins #0*|2 incomplete 8|3 failures #1*", h, q];
    }
  }
  class A extends m {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new A().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new A().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new A().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(A, t2, r2);
    }
    static $() {
      return ["AgentHostPluginsReloadArgs"];
    }
  }
  class P extends m {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new P().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new P().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new P().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(P, t2, r2);
    }
    static $() {
      return ["AgentHostPluginsReloadResult|1 snapshot #0", B];
    }
  }
  class x extends c.HL {
    static get runtime() {
      return (0, c.kU)(this, "runtime", s.proto3);
    }
    static $p() {
      return "agent.v1.";
    }
  }
  class H extends x {
    constructor(t2) {
      super(), this.sessionId = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new H().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new H().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new H().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(H, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreExtraEnvArgs|1 session_id 9|2 conversation_id 9?"];
    }
  }
  class C extends x {
    constructor(t2) {
      super(), this.env = {}, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new C().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new C().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new C().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(C, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreExtraEnvResult|1 env 9,9"];
    }
  }
  class v extends x {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new v().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new v().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new v().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(v, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreSkillRootsArgs"];
    }
  }
  class $ extends x {
    constructor(t2) {
      super(), this.skillDirs = [], this.userHomeDirectory = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new $().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new $().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new $().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals($, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreSkillRootsResult|1 skill_dirs 9*|2 user_home_directory 9"];
    }
  }
  class R extends x {
    constructor(t2) {
      super(), this.parentConversationId = "", this.childConversationId = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new R().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new R().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new R().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(R, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreApplySubagentMountsArgs|1 parent_conversation_id 9|2 child_conversation_id 9|3 register_local_shell_mounts 8?"];
    }
  }
  class b extends x {
    constructor(t2) {
      super(), this.applied = false, this.inheritedSourceIds = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new b().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new b().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new b().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(b, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreApplySubagentMountsResult|1 applied 8|2 inherited_source_ids 9*"];
    }
  }
  class I extends x {
    constructor(t2) {
      super(), this.childConversationId = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new I().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new I().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new I().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(I, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreClearSubagentMountsArgs|1 child_conversation_id 9"];
    }
  }
  class E extends x {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new E().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new E().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new E().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(E, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreClearSubagentMountsResult"];
    }
  }
  class k extends x {
    constructor(t2) {
      super(), this.agentIds = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new k().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new k().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new k().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(k, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreFlushSubagentArgs|1 agent_ids 9*"];
    }
  }
  class N extends x {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new N().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new N().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new N().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(N, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreFlushSubagentResult"];
    }
  }
  class T extends x {
    constructor(t2) {
      super(), this.agentId = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new T().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new T().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new T().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(T, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreScopePathsArgs|1 agent_id 9|2 mount 9?|3 sync_agent_path 9?|4 is_project_store 8?"];
    }
  }
  class U extends x {
    constructor(t2) {
      super(), this.scope = "", this.path = "", this.rootLinkPolicy = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new U().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new U().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new U().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(U, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreScopeDescriptor|1 scope 9|2 path 9|3 root_link_policy 9"];
    }
  }
  class L extends x {
    constructor(t2) {
      super(), this.scope = "", this.reason = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new L().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new L().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new L().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(L, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreScopeUnavailable|1 scope 9|2 reason 9"];
    }
  }
  class O extends x {
    constructor(t2) {
      super(), this.scopes = [], this.unavailableScopes = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new O().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new O().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new O().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(O, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreScopePathsResult|1 scopes #0*|2 unavailable_scopes #1*", U, L];
    }
  }
  class D extends x {
    constructor(t2) {
      super(), this.v = 0, this.eventId = "", this.journalEpoch = "", this.seq = s.protoInt64.zero, this.tsMs = s.protoInt64.zero, this.kind = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new D().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new D().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new D().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(D, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticeEvent|1 v 13|2 event_id 9|3 journal_epoch 9|4 seq 4|5 ts_ms 4|6 kind 9|7 store_id 9?|8 original_rel_path 9?|9 conflict_rel_path 9?|10 original_abs_path 9?|11 conflict_abs_path 9?|12 preserved_bytes 4?|13 scope_kind 9?|14 limit_bytes 4?|15 usage_bytes 4?|16 source 9?|17 remote_only 8?"];
    }
  }
  class G extends x {
    constructor(t2) {
      super(), this.writtenPaths = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new G().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new G().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new G().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(G, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticeSyncAndPeekArgs|1 conversation_id 9?|2 written_paths 9*|3 timeout_ms 13?|4 eager 8?"];
    }
  }
  class F extends x {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new F().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new F().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new F().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(F, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticePeekArgs|1 conversation_id 9?"];
    }
  }
  class M extends x {
    constructor(t2) {
      super(), this.eventIds = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new M().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new M().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new M().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(M, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticeAckArgs|1 event_ids 9*|2 conversation_id 9?"];
    }
  }
  class Y extends x {
    constructor(t2) {
      super(), this.eventIds = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Y().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Y().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Y().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Y, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticeReleaseArgs|1 event_ids 9*|2 conversation_id 9?"];
    }
  }
  class K extends x {
    constructor(t2) {
      super(), this.writtenPaths = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new K().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new K().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new K().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(K, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticeNoteDeferredArgs|1 conversation_id 9?|2 written_paths 9*"];
    }
  }
  class W extends x {
    constructor(t2) {
      super(), this.events = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new W().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new W().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new W().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(W, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticeCompleted|1 events #0*|2 reminder 9?|3 gap 8?", D];
    }
  }
  class j extends x {
    constructor(t2) {
      super(), this.events = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new j().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new j().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new j().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(j, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticeTimedOut|1 events #0*|2 reminder 9?", D];
    }
  }
  class Q extends x {
    constructor(t2) {
      super(), this.error = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Q().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Q().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Q().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Q, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticeFailed|1 error 9"];
    }
  }
  class z extends x {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new z().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new z().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new z().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(z, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticeEmpty"];
    }
  }
  class V extends x {
    constructor(t2) {
      super(), this.count = 0, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new V().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new V().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new V().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(V, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticeCount|1 count 13"];
    }
  }
  class X extends x {
    constructor(t2) {
      super(), this.result = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new X().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new X().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new X().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(X, t2, r2);
    }
    static $() {
      return ["AgentHostAgentStoreConflictNoticeResult|1 completed #0 result|2 not_applicable #1 result|3 mount_passive #1 result|4 timed_out #2 result|5 failed #3 result|6 acked #4 result|7 released #4 result|8 noted #4 result", W, z, j, Q, V];
    }
  }
  var Z = n(11197), tt = n(88107), rt = n(12544), nt = n(11491), st = n(86209), et = n(89396);
  const ot = "agent.v1.";
  class it extends c.HL {
    static get runtime() {
      return (0, c.kU)(this, "runtime", s.proto3);
    }
    static $p() {
      return ot;
    }
  }
  var at = (0, c.QT)(s.proto3, ot, "AgentExecApprovalMode", [[0, "UNSPECIFIED"], [1, "UNRESTRICTED"], [2, "ALLOWLIST"], [3, "ASK_EVERY_TIME"]], 1), ut = (0, c.QT)(s.proto3, ot, "AgentReadBoundary", [[0, "UNSPECIFIED"], [1, "SYSTEM"], [2, "WORKSPACE"]], 1);
  s.proto3;
  class ct extends it {
    constructor(t2) {
      super(), this.clientInstanceId = "", this.workspacePaths = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new ct().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new ct().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new ct().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(ct, t2, r2);
    }
    static $() {
      return ["OpenAgentHostSurfaceChannelRequest|1 client_instance_id 9|2 workspace_paths 9*"];
    }
  }
  class lt extends it {
    constructor(t2) {
      super(), this.event = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new lt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new lt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new lt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(lt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceChannelEvent|1 invocation #0 event|2 heartbeat #1 event|3 auth_refresh #2 event", pt, mt, ft];
    }
  }
  class mt extends it {
    constructor(t2) {
      super(), this.epochMs = s.protoInt64.zero, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new mt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new mt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new mt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(mt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceChannelHeartbeat|1 epoch_ms 4"];
    }
  }
  class ft extends it {
    constructor(t2) {
      super(), this.reason = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new ft().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new ft().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new ft().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(ft, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceAuthRefreshRequest|1 reason 9"];
    }
  }
  class pt extends it {
    constructor(t2) {
      super(), this.callbackId = "", this.sessionId = "", this.targetClientInstanceId = "", this.kind = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new pt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new pt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new pt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(pt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCallbackInvocation|1 callback_id 9|2 session_id 9|3 target_client_instance_id 9|4 root_session_id 9?|12 permissions_pull #0 kind|14 conversation_search #1 kind|15 file_change_notify #2 kind|16 hook #3 kind|17 git #4 kind|18 canvas #5 kind|19 agent_host_plugins #6 kind|20 agent_host_agent_store #7 kind|21 mcp_writer #8 kind|22 cloud_subagent #9 kind|24 saved_model_parameters #10 kind|25 required_global_commands #11 kind|26 find_subagent #12 kind|27 request_context #13 kind", _t, yt, At, Pt, Ht, vt, Rt, It, kt, Lt, Wt, Qt, Vt, tr];
    }
  }
  class gt extends it {
    constructor(t2) {
      super(), this.callbackId = "", this.clientInstanceId = "", this.result = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new gt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new gt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new gt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(gt, t2, r2);
    }
    static $() {
      return ["RespondAgentHostSurfaceCallbackRequest|1 callback_id 9|2 client_instance_id 9|12 permissions #0 result|13 conversation_search #1 result|14 hook #2 result|15 git #3 result|16 canvas #4 result|17 agent_host_plugins #5 result|18 agent_host_agent_store #6 result|19 mcp_writer #7 result|20 cloud_subagent #8 result|22 saved_model_parameters #9 result|23 required_global_commands #10 result|24 find_subagent #11 result|25 request_context #12 result|99 error #13 result", ht, Bt, xt, Ct, $t, bt, Et, Nt, Kt, jt, zt, Xt, rr, wt];
    }
  }
  class Jt extends it {
    constructor(t2) {
      super(), this.accepted = false, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Jt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Jt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Jt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Jt, t2, r2);
    }
    static $() {
      return ["RespondAgentHostSurfaceCallbackResponse|1 accepted 8"];
    }
  }
  class St extends it {
    constructor(t2) {
      super(), this.sessionId = "", this.clientInstanceId = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new St().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new St().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new St().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(St, t2, r2);
    }
    static $() {
      return ["PushAgentHostSessionPermissionsRequest|1 session_id 9|2 client_instance_id 9|3 permissions #0", qt];
    }
  }
  class dt extends it {
    constructor(t2) {
      super(), this.accepted = false, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new dt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new dt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new dt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(dt, t2, r2);
    }
    static $() {
      return ["PushAgentHostSessionPermissionsResponse|1 accepted 8"];
    }
  }
  class wt extends it {
    constructor(t2) {
      super(), this.message = "", this.code = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new wt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new wt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new wt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(wt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCallbackError|1 message 9|2 code 9"];
    }
  }
  class _t extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new _t().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new _t().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new _t().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(_t, t2, r2);
    }
    static $() {
      return ["AgentHostSurfacePermissionsPullRequest"];
    }
  }
  class ht extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new ht().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new ht().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new ht().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(ht, t2, r2);
    }
    static $() {
      return ["AgentHostSurfacePermissionsSnapshot|1 permissions #0", qt];
    }
  }
  class qt extends it {
    constructor(t2) {
      super(), this.allow = [], this.deny = [], this.approvalMode = at.UNSPECIFIED, this.smartAllowlistDenylist = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new qt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new qt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new qt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(qt, t2, r2);
    }
    static $() {
      return ["AgentExecPermissions|1 allow 9*|2 deny 9*|3 approval_mode #0|4 read_boundary #1?|5 user_sandbox_data_folder_name 9?|6 user_configured_policy #2|7 dashboard_terminal_allowlist_overridden_by_permissions_file 8?|8 smart_allowlist_enabled 8?|9 smart_allowlist_denylist 9*|10 prompt_workspace_writes 8?", at, ut, e.Mw];
    }
  }
  class yt extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new yt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new yt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new yt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(yt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceConversationSearchRequest|1 args #0", o.$m];
    }
  }
  class Bt extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Bt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Bt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Bt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Bt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceConversationSearchResult|1 result #0", o.pT];
    }
  }
  class At extends it {
    constructor(t2) {
      super(), this.path = "", this.toolCallId = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new At().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new At().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new At().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(At, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceFileChangeNotify|1 path 9|2 before 9?|3 after 9?|4 tool_call_id 9"];
    }
  }
  class Pt extends it {
    constructor(t2) {
      super(), this.step = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Pt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Pt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Pt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Pt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceHookRequest|1 step 9|2 request #0", i.Kw];
    }
  }
  class xt extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new xt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new xt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new xt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(xt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceHookResult|1 response #0", i.w5];
    }
  }
  class Ht extends it {
    constructor(t2) {
      super(), this.request = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Ht().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Ht().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Ht().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Ht, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceGitRequest|1 git_diff #0 request", a.GetDiffRequest];
    }
  }
  class Ct extends it {
    constructor(t2) {
      super(), this.result = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Ct().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Ct().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Ct().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Ct, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceGitResult|1 git_diff #0 result", a.GetDiffResponse];
    }
  }
  class vt extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new vt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new vt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new vt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(vt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCanvasRequest|1 args #0", u.yN];
    }
  }
  class $t extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new $t().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new $t().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new $t().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals($t, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCanvasResult|1 result #0", u.GL];
    }
  }
  class Rt extends it {
    constructor(t2) {
      super(), this.operation = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Rt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Rt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Rt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Rt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfacePluginsRequest|1 snapshot #0 operation|2 reload #1 operation", y, A];
    }
  }
  class bt extends it {
    constructor(t2) {
      super(), this.result = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new bt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new bt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new bt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(bt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfacePluginsResult|1 snapshot #0 result|2 reload #1 result", B, P];
    }
  }
  class It extends it {
    constructor(t2) {
      super(), this.operation = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new It().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new It().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new It().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(It, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceAgentStoreRequest|1 extra_env #0 operation|2 skill_roots #1 operation|3 conflict_notice_sync_and_peek #2 operation|4 conflict_notice_peek #3 operation|5 conflict_notice_ack #4 operation|6 conflict_notice_release #5 operation|7 conflict_notice_note_deferred #6 operation|8 apply_subagent_mounts #7 operation|9 clear_subagent_mounts #8 operation|10 flush_subagent #9 operation|11 scope_paths #10 operation", H, v, G, F, M, Y, K, R, I, k, T];
    }
  }
  class Et extends it {
    constructor(t2) {
      super(), this.result = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Et().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Et().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Et().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Et, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceAgentStoreResult|1 extra_env #0 result|2 skill_roots #1 result|3 conflict_notice #2 result|4 apply_subagent_mounts #3 result|5 clear_subagent_mounts #4 result|6 flush_subagent #5 result|7 scope_paths #6 result", C, $, X, b, E, N, O];
    }
  }
  class kt extends it {
    constructor(t2) {
      super(), this.operation = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new kt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new kt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new kt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(kt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceMcpWriterRequest|1 mcp #0 operation|2 list_mcp_resources #1 operation|3 read_mcp_resource #2 operation|4 mcp_allowlist_precheck #3 operation|5 mcp_state #4 operation", Z.E_, Z.kj, Z.DI, tt.c, Z.Km];
    }
  }
  class Nt extends it {
    constructor(t2) {
      super(), this.result = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Nt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Nt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Nt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Nt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceMcpWriterResult|1 mcp #0 result|2 list_mcp_resources #1 result|3 read_mcp_resource #2 result|4 mcp_allowlist_precheck #3 result|5 mcp_state #4 result", Z.iz, Z.kP, Z.ZD, tt.M, Z._W];
    }
  }
  class Tt extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Tt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Tt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Tt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Tt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCloudSubagentCreateOrResume|1 args #0", rt.Pw];
    }
  }
  class Ut extends it {
    constructor(t2) {
      super(), this.agentId = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Ut().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Ut().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Ut().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Ut, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCloudSubagentRun|1 agent_id 9|2 args #0", rt.Pw];
    }
  }
  class Lt extends it {
    constructor(t2) {
      super(), this.operation = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Lt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Lt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Lt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Lt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCloudSubagentRequest|1 create_or_resume #0 operation|2 run #1 operation", Tt, Ut];
    }
  }
  class Ot extends it {
    constructor(t2) {
      super(), this.agentId = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Ot().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Ot().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Ot().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Ot, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCloudSubagentCreateOrResumeResult|1 agent_id 9"];
    }
  }
  class Dt extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Dt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Dt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Dt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Dt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCloudSubagentCompleted|1 final_message 9?|2 tool_call_count 5?"];
    }
  }
  class Gt extends it {
    constructor(t2) {
      super(), this.backgroundReason = nt.qL.UNSPECIFIED, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Gt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Gt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Gt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Gt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCloudSubagentBackground|1 background_reason #0|2 transcript_path 9?|3 final_message 9?|4 tool_call_count 5?", nt.qL];
    }
  }
  class Ft extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Ft().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Ft().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Ft().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Ft, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCloudSubagentAborted|1 error 9?"];
    }
  }
  class Mt extends it {
    constructor(t2) {
      super(), this.error = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Mt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Mt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Mt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Mt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCloudSubagentFailed|1 error 9"];
    }
  }
  class Yt extends it {
    constructor(t2) {
      super(), this.outcome = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Yt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Yt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Yt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Yt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCloudSubagentRunResult|1 completed #0 outcome|2 background #1 outcome|3 aborted #2 outcome|4 failed #3 outcome", Dt, Gt, Ft, Mt];
    }
  }
  class Kt extends it {
    constructor(t2) {
      super(), this.result = { case: void 0 }, s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Kt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Kt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Kt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Kt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceCloudSubagentResult|1 create_or_resume #0 result|2 run #1 result", Ot, Yt];
    }
  }
  class Wt extends it {
    constructor(t2) {
      super(), this.modelId = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Wt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Wt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Wt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Wt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceSavedModelParametersRequest|1 model_id 9|2 max_mode 8?|3 root_session_id 9?"];
    }
  }
  class jt extends it {
    constructor(t2) {
      super(), this.parameters = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new jt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new jt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new jt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(jt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceSavedModelParametersResult|1 parameters #0*", st.SR];
    }
  }
  class Qt extends it {
    constructor(t2) {
      super(), this.subagentType = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Qt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Qt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Qt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Qt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceRequiredGlobalCommandsRequest|1 subagent_type 9|2 root_session_id 9?"];
    }
  }
  class zt extends it {
    constructor(t2) {
      super(), this.commands = [], s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new zt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new zt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new zt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(zt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceRequiredGlobalCommandsResult|1 commands #0*", Zt];
    }
  }
  class Vt extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Vt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Vt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Vt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Vt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceFindSubagentRequest"];
    }
  }
  class Xt extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Xt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Xt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Xt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Xt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceFindSubagentResult"];
    }
  }
  class Zt extends it {
    constructor(t2) {
      super(), this.name = "", this.content = "", s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new Zt().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new Zt().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new Zt().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(Zt, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceGlobalCommand|1 name 9|2 content 9"];
    }
  }
  class tr extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new tr().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new tr().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new tr().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(tr, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceRequestContextRequest|1 args #0", et._K];
    }
  }
  class rr extends it {
    constructor(t2) {
      super(), s.proto3.util.initPartial(t2, this);
    }
    static fromBinary(t2, r2) {
      return new rr().fromBinary(t2, r2);
    }
    static fromJson(t2, r2) {
      return new rr().fromJson(t2, r2);
    }
    static fromJsonString(t2, r2) {
      return new rr().fromJsonString(t2, r2);
    }
    static equals(t2, r2) {
      return s.proto3.util.equals(rr, t2, r2);
    }
    static $() {
      return ["AgentHostSurfaceRequestContextResult|1 request_context #0", et.bb];
    }
  }
} };
