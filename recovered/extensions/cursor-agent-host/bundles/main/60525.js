// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 60525 range:9227944..9314973
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60525: (e, t, r) => {
    "use strict";
    r.d(t, { $b: () => ke, AY: () => re, BZ: () => D, CD: () => v, D7: () => yt, EM: () => at, Ev: () => ot, F0: () => qt, Fg: () => et, G_: () => be, Gb: () => Me, H0: () => wt, Ht: () => b, Hz: () => R, IO: () => _t, J3: () => Ie, J4: () => ge, J6: () => ne, JK: () => pt, JW: () => Ct, Jn: () => le, LX: () => K, Lk: () => Bt, M: () => Je, Ml: () => je, Mt: () => Fe, N9: () => F, NX: () => E, NY: () => ut, OZ: () => gt, Ot: () => ce, P4: () => Pt, PF: () => Nt, PY: () => Jt, Pg: () => bt, Pi: () => T, Qf: () => it, Qk: () => N, R1: () => M, TQ: () => x, Th: () => De, To: () => he, Wn: () => At, X: () => Ge, X7: () => Ne, XO: () => V, Xi: () => dt, Yv: () => oe, ZS: () => fe, Ze: () => A, Zg: () => Dt, Zi: () => vt, aq: () => St, bq: () => U, bt: () => Tt, cK: () => O, c_: () => Ke, cj: () => S, cp: () => Et, cy: () => j, dC: () => we, fF: () => Xe, g6: () => y, gW: () => Rt, hV: () => se, hq: () => Y, j$: () => Qe, j2: () => ye, jz: () => k, k2: () => Re, k4: () => Ye, k9: () => tt, kc: () => ie, kr: () => _, ky: () => ae, lX: () => ze, m$: () => He, mX: () => xt, mY: () => de, mq: () => ue, n4: () => me, nK: () => qe, nP: () => X, oX: () => Te, pI: () => L, re: () => Z, s: () => Ce, tP: () => Mt, ty: () => pe, uQ: () => Ot, vC: () => Ze, vG: () => Pe, vb: () => Be, vq: () => Se, w3: () => g, wy: () => I, x5: () => Ee, yu: () => xe, z4: () => ct, zF: () => q, zU: () => kt });
    var n = r(36038), s = r(69584), o = r(83133), i = r(86209), a = r(43955), c = r(89396), l = r(89582), u = r(5289), d = r(67918), p = r(38427), m = r(8592);
    const h = "agent.v1.";
    class f extends m.HL {
      static get runtime() {
        return (0, m.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return h;
      }
    }
    var g = (0, m.QT)(n.proto3, h, "SubagentInteractionPolicy", [[0, "UNSPECIFIED"], [1, "AUTO_REJECT"], [2, "BUBBLE_TO_PARENT"], [3, "SURFACE_TO_USER"]], 1), y = (0, m.QT)(n.proto3, h, "AgentHostSessionStatus", [[0, "UNSPECIFIED"], [1, "IDLE"], [2, "RUNNING"], [3, "AWAITING_INPUT"]], 1), w = (0, m.QT)(n.proto3, h, "AgentHostSkillSource", [[0, "UNSPECIFIED"], [1, "USER"], [2, "WORKSPACE"], [3, "NESTED_WORKSPACE"], [4, "TEAM"], [5, "BUILT_IN"], [6, "PLUGIN"]], 1), v = (0, m.QT)(n.proto3, h, "AgentHostSendDelivery", [[0, "UNSPECIFIED"], [1, "QUEUE"], [2, "NOW"], [3, "STEERED"], [4, "INTERRUPTED"]], 1), _ = (0, m.QT)(n.proto3, h, "AgentHostApprovalBlockReason", [[0, "UNSPECIFIED"], [1, "OUT_OF_WORKSPACE"], [2, "PROTECTED_CONFIG"], [3, "WORKSPACE_WRITE"]], 1), A = (0, m.QT)(n.proto3, h, "AgentHostApprovalHookSource", [[0, "UNSPECIFIED"], [1, "USER"], [2, "PROJECT"], [3, "ENTERPRISE"], [4, "TEAM"]], 1), S = (0, m.QT)(n.proto3, h, "AgentHostApprovalOperationType", [[0, "UNSPECIFIED"], [1, "WRITE"], [2, "READ"], [3, "SHELL"], [4, "DELETE"], [5, "MCP"]], 1), b = (0, m.QT)(n.proto3, h, "AgentHostInteractionResponseStatus", [[0, "UNSPECIFIED"], [1, "ACCEPTED"], [2, "ALREADY_RESOLVED"], [3, "NOT_FOUND"]], 1), E = (0, m.QT)(n.proto3, h, "AgentHostBackgroundWorkKind", [[0, "UNSPECIFIED"], [1, "SHELL"], [2, "SUBAGENT"]], 1), I = (0, m.QT)(n.proto3, h, "AgentHostBackgroundWorkState", [[0, "UNSPECIFIED"], [1, "RUNNING"], [2, "QUEUED"]], 1), C = (0, m.QT)(n.proto3, h, "AgentHostShellLifecycleState", [[0, "UNSPECIFIED"], [1, "STARTING"], [2, "RUNNING"], [3, "EXITED"], [4, "ABORTED"]], 1), k = (0, m.QT)(n.proto3, h, "AgentHostTurnOutcome", [[0, "UNSPECIFIED"], [1, "COMPLETED"], [2, "INTERRUPTED"], [3, "FAILED"]], 1), x = (0, m.QT)(n.proto3, h, "AgentHostTurnInterruptInitiator", [[0, "UNSPECIFIED"], [1, "USER_STOP"], [2, "FOLLOW_UP"], [3, "CLIENT_ERROR"], [4, "HOST"]], 1), T = (0, m.QT)(n.proto3, h, "AgentHostTurnStopReason", [[0, "UNSPECIFIED"], [1, "MAX_STEPS_REACHED"]], 1);
    class R extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.clientInstanceId = "", n.proto3.util.initPartial(e2, this);
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
        return ["CreateAgentHostSessionRequest|1 session_id 9|2 initial_history #0?|3 session_options #1?|4 client_instance_id 9", s.Y9z, B];
      }
    }
    class B extends f {
      constructor(e2) {
        super(), this.workspacePaths = [], this.hostedMcpLocalGrantIdentifiers = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSessionOptions|1 workspace_paths 9*|2 worktree_main_path 9?|3 is_glass_root 8?|4 interaction_policy #0?|5 owning_project #1?|6 local_subagent_limits #2?|7 hosted_mcp_routing_enabled 8?|8 hosted_mcp_local_grant_identifiers 9*", g, J, P];
      }
    }
    class P extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostLocalSubagentLimits|1 max_running 13?"];
      }
    }
    class J extends f {
      constructor(e2) {
        super(), this.projectAgentId = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostOwningProject|1 project_agent_id 9|2 project_name 9?"];
      }
    }
    class M extends f {
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
        return ["CreateAgentHostSessionResponse"];
      }
    }
    class q extends f {
      constructor(e2) {
        super(), this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["ForkAgentHostSessionRequest|1 session_id 9|2 through_turn_id 9?"];
      }
    }
    class D extends f {
      constructor(e2) {
        super(), this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["ForkAgentHostSessionResponse|1 session_id 9"];
      }
    }
    class O extends f {
      constructor(e2) {
        super(), this.workspacePathsFilter = [], this.matchAnyWorkspaceRoot = false, n.proto3.util.initPartial(e2, this);
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
        return ["ListAgentHostSessionsRequest|1 include_children 8?|2 parent_session_id 9?|3 limit 13?|4 workspace_paths_filter 9*|5 match_any_workspace_root 8|6 owner_client_instance_id 9?|7 include_owner_unrooted_sessions 8?"];
      }
    }
    class N extends f {
      constructor(e2) {
        super(), this.sessions = [], n.proto3.util.initPartial(e2, this);
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
        return ["ListAgentHostSessionsResponse|1 sessions #0*", Q];
      }
    }
    class F extends f {
      constructor(e2) {
        super(), this.workspacePathsFilter = [], this.matchAnyWorkspaceRoot = false, n.proto3.util.initPartial(e2, this);
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
        return ["WatchAgentHostSessionsRequest|1 workspace_paths_filter 9*|2 match_any_workspace_root 8|3 owner_client_instance_id 9?|4 include_owner_unrooted_sessions 8?"];
      }
    }
    class U extends f {
      constructor(e2) {
        super(), this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["HasAgentHostSessionRequest|1 session_id 9"];
      }
    }
    class L extends f {
      constructor(e2) {
        super(), this.exists = false, n.proto3.util.initPartial(e2, this);
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
        return ["HasAgentHostSessionResponse|1 exists 8"];
      }
    }
    class $ extends f {
      constructor(e2) {
        super(), this.parentSessionId = "", this.parentToolCallId = "", this.rootSessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["SessionParent|1 parent_session_id 9|2 parent_tool_call_id 9|3 root_session_id 9"];
      }
    }
    class Q extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.status = y.UNSPECIFIED, this.lastEventId = n.protoInt64.zero, this.queuedTurnIds = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSession|1 session_id 9|2 status #0|3 last_event_id 4|4 forked_from_session_id 9?|5 parent #1?|6 title 9?|7 updated_at #2?|8 model_id 9?|11 running_turn_id 9?|12 queued_turn_ids 9*|13 workspace #3?", y, $, n.Timestamp, Y];
      }
    }
    class j extends f {
      constructor(e2) {
        super(), this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["WatchAgentHostSessionsEvent|1 snapshot #0 event|2 added #1 event|3 updated #2 event|4 deleted #3 event|5 keepalive 8?", G, H, z, W];
      }
    }
    class G extends f {
      constructor(e2) {
        super(), this.sessions = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSessionsSnapshot|1 sessions #0*", Q];
      }
    }
    class H extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSessionAdded|1 session #0", Q];
      }
    }
    class z extends f {
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
        return ["AgentHostSessionUpdated|1 session #0", Q];
      }
    }
    class W extends f {
      constructor(e2) {
        super(), this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSessionDeleted|1 session_id 9"];
      }
    }
    class V extends f {
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
        return ["ListAgentHostWorkspacesRequest"];
      }
    }
    class K extends f {
      constructor(e2) {
        super(), this.workspaces = [], n.proto3.util.initPartial(e2, this);
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
        return ["ListAgentHostWorkspacesResponse|1 workspaces #0*", Y];
      }
    }
    class Y extends f {
      constructor(e2) {
        super(), this.workspacePaths = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostWorkspace|1 workspace_paths 9*|2 worktree_main_path 9?|3 display_path 9?"];
      }
    }
    class Z extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.workspacePaths = [], this.refresh = false, n.proto3.util.initPartial(e2, this);
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
        return ["ListAgentHostSkillsRequest|1 session_id 9|2 workspace_paths 9*|3 refresh 8"];
      }
    }
    class X extends f {
      constructor(e2) {
        super(), this.skills = [], this.scanErrors = [], this.workspacePaths = [], n.proto3.util.initPartial(e2, this);
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
        return ["ListAgentHostSkillsResponse|1 skills #0*|2 scan_errors #1*|3 workspace_paths 9*", ee, te];
      }
    }
    class ee extends f {
      constructor(e2) {
        super(), this.qualifiedName = "", this.isDefault = false, this.source = w.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSkill|1 skill #0|2 qualified_name 9|3 is_default 8|4 source #1", o.Q, w];
      }
    }
    class te extends f {
      constructor(e2) {
        super(), this.path = "", this.message = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSkillScanError|1 path 9|2 message 9"];
      }
    }
    class re extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["SendAgentHostMessageRequest|1 session_id 9|2 text 9|3 model_id 9?|4 model_details #0?|5 turn_options #1?|6 requested_model #2?|7 message_id 9?", s.Gmx, Wt, i.G4];
      }
    }
    class ne extends f {
      constructor(e2) {
        super(), this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["SendAgentHostActionRequest|1 session_id 9|2 action #0|3 model_id 9?|4 model_details #1?|5 turn_options #2?|6 requested_model #3?|7 base_history #4?|8 request_context_decoration #5?|9 delivery #6?|10 replace_queued_turn_id 9?", s.QFf, s.Gmx, Wt, i.G4, s.Y9z, se, v];
      }
    }
    class se extends f {
      constructor(e2) {
        super(), this.disabledTeamRules = [], this.appendedRules = [], this.filteredBrowserMcpProviderIds = [], this.prefetchFileUris = [], n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextDecoration|1 smart_mode_classifier_auto_mode_enabled 8?|2 disabled_team_rules 9*|3 admin_command_denylist #0?|4 commit_attribution_message 9?|5 pr_attribution_message 9?|6 mounted_agent_stores #1?|7 web_search_enabled 8?|8 web_fetch_enabled 8?|9 read_lints_enabled 8?|10 search_conversations_enabled 8?|11 appended_rules #2*|12 filtered_browser_mcp_provider_ids 9*|13 git_repo_branch_ancestry #3?|14 admin_permissions_auto_run #4?|15 user_permissions_auto_run #4?|16 project_permissions_auto_run #4?|17 hooks_config #5?|18 hooks_additional_context 9?|19 debug_mode_config #6?|20 recently_added_plugin #7?|21 prefetch_file_uris 9*|22 sandbox_enabled 8?", oe, ie, a.DX, ae, c.ag, c.Jy, c.TT, c.iT];
      }
    }
    class oe extends f {
      constructor(e2) {
        super(), this.values = [], n.proto3.util.initPartial(e2, this);
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
        return ["StringListOverlay|1 values 9*"];
      }
    }
    class ie extends f {
      constructor(e2) {
        super(), this.values = [], n.proto3.util.initPartial(e2, this);
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
        return ["MountedAgentStoreListOverlay|1 values #0*", c.Lz];
      }
    }
    class ae extends f {
      constructor(e2) {
        super(), this.repoPath = "", this.currentBranch = "", this.isAncestor = false, n.proto3.util.initPartial(e2, this);
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
        return ["GitRepoBranchAncestry|1 repo_path 9|2 current_branch 9|3 is_ancestor 8"];
      }
    }
    class ce extends f {
      constructor(e2) {
        super(), this.turnId = "", n.proto3.util.initPartial(e2, this);
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
        return ["SendAgentHostMessageResponse|1 turn_id 9|2 delivered_as #0?", v];
      }
    }
    class le extends f {
      constructor(e2) {
        super(), this.turnId = "", n.proto3.util.initPartial(e2, this);
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
        return ["SendAgentHostActionResponse|1 turn_id 9|2 delivered_as #0?", v];
      }
    }
    class ue extends f {
      constructor(e2) {
        super(), this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["DeleteAgentHostSessionRequest|1 session_id 9"];
      }
    }
    class de extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["DeleteAgentHostSessionResponse"];
      }
    }
    class pe extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.turnId = "", n.proto3.util.initPartial(e2, this);
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
        return ["InterruptAgentHostTurnRequest|1 session_id 9|2 turn_id 9|3 reason 9?|4 session_tree 8?|5 initiated_by #0?", x];
      }
    }
    class me extends f {
      constructor(e2) {
        super(), this.interrupted = false, n.proto3.util.initPartial(e2, this);
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
        return ["InterruptAgentHostTurnResponse|1 interrupted 8"];
      }
    }
    class he extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.turnId = "", n.proto3.util.initPartial(e2, this);
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
        return ["CancelQueuedAgentHostTurnRequest|1 session_id 9|2 turn_id 9|3 reason 9?|4 initiated_by #0?", x];
      }
    }
    class fe extends f {
      constructor(e2) {
        super(), this.cancelled = false, n.proto3.util.initPartial(e2, this);
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
        return ["CancelQueuedAgentHostTurnResponse|1 cancelled 8"];
      }
    }
    class ge extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.turnIds = [], n.proto3.util.initPartial(e2, this);
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
        return ["ReorderQueuedAgentHostTurnsRequest|1 session_id 9|2 turn_ids 9*"];
      }
    }
    class ye extends f {
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
        return ["ReorderQueuedAgentHostTurnsResponse"];
      }
    }
    class we extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.turnId = "", this.edit = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["EditQueuedAgentHostTurnRequest|1 session_id 9|2 turn_id 9|3 user_message #0 edit|4 shell_command #1 edit", ve, Ae];
      }
    }
    class ve extends f {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["QueuedAgentHostUserMessageEdit|1 text 9|2 images #0?", _e];
      }
    }
    class _e extends f {
      constructor(e2) {
        super(), this.images = [], n.proto3.util.initPartial(e2, this);
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
        return ["QueuedAgentHostImages|1 images #0*", l.d];
      }
    }
    class Ae extends f {
      constructor(e2) {
        super(), this.command = "", n.proto3.util.initPartial(e2, this);
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
        return ["QueuedAgentHostShellCommandEdit|1 command 9"];
      }
    }
    class Se extends f {
      constructor(e2) {
        super(), this.edited = false, n.proto3.util.initPartial(e2, this);
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
        return ["EditQueuedAgentHostTurnResponse|1 edited 8"];
      }
    }
    class be extends f {
      constructor(e2) {
        super(), this.path = "", this.reason = "", this.isNewFile = false, this.diffString = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostApprovalWriteDetails|1 path 9|2 reason 9|3 is_new_file 8|4 diff_string 9|5 before 9?|6 after 9?|7 block_reason #0?", _];
      }
    }
    class Ee extends f {
      constructor(e2) {
        super(), this.path = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostApprovalReadDetails|1 path 9|2 reason 9?"];
      }
    }
    class Ie extends f {
      constructor(e2) {
        super(), this.command = "", this.workingDirectory = "", this.timeout = 0, this.notAllowedCommands = [], this.suggestedAllowlistEntries = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostApprovalShellDetails|1 command 9|2 working_directory 9|3 timeout 13|4 reason 9?|5 hook_source #0?|6 is_sandbox_available 8?|7 is_sandbox_enabled 8?|8 can_allowlist 8?|9 not_allowed_commands 9*|10 suggested_allowlist_entries 9*|11 smart_mode_approval_reason 9?|12 smart_mode_approval_request_id 9?", A];
      }
    }
    class Ce extends f {
      constructor(e2) {
        super(), this.path = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostApprovalDeleteDetails|1 path 9"];
      }
    }
    class ke extends f {
      constructor(e2) {
        super(), this.name = "", this.toolName = "", this.providerIdentifier = "", this.args = {}, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostApprovalMcpDetails|1 name 9|2 tool_name 9|3 provider_identifier 9|4 args 9,#0|5 source 9?|6 reason 9?|7 hook_source #1?|8 can_allowlist 8?|9 smart_mode_approval_reason 9?|10 smart_mode_approval_request_id 9?", n.Value, A];
      }
    }
    class xe extends f {
      constructor(e2) {
        super(), this.type = S.UNSPECIFIED, this.details = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostApprovalOperation|1 type #0|2 write #1 details|3 read #2 details|4 shell #3 details|5 delete #4 details|6 mcp #5 details", S, be, Ee, Ie, Ce, ke];
      }
    }
    class Te extends f {
      constructor(e2) {
        super(), this.toolCallId = "", this.offeredAllowlistEntries = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostApprovalRequest|1 tool_call_id 9|2 operation #0|3 offered_allowlist_entries 9*", xe];
      }
    }
    class Re extends f {
      constructor(e2) {
        super(), this.approved = false, this.allowlistEntries = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostApprovalResult|1 approved 8|2 reason 9?|3 allowlist_entries 9*"];
      }
    }
    class Be extends f {
      constructor(e2) {
        super(), this.requestId = "", this.message = "", this.requestedSchemaJson = "", n.proto3.util.initPartial(e2, this);
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
        return ["McpElicitationRequest|1 request_id 9|2 message 9|3 requested_schema_json 9"];
      }
    }
    class Pe extends f {
      constructor(e2) {
        super(), this.action = Je.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["McpElicitationResponse|1 action #0|2 content #1", Je, n.Struct];
      }
    }
    var Je = (0, m.QT)(n.proto3, h, "McpElicitationResponse.Action", [[0, "UNSPECIFIED"], [1, "ACCEPT"], [2, "DECLINE"], [3, "CANCEL"]], 1);
    class Me extends f {
      constructor(e2) {
        super(), this.serverName = "", this.toolName = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostMcpElicitationRequest|1 server_name 9|2 tool_name 9|3 tool_call_id 9?|4 elicitation #0", Be];
      }
    }
    class qe extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.interactionId = "", this.answer = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["RespondToAgentHostInteractionRequest|1 session_id 9|2 interaction_id 9|3 interaction_response #0 answer|4 exec_approval #1 answer|5 mcp_elicitation #2 answer", s.Y5, Re, Pe];
      }
    }
    class De extends f {
      constructor(e2) {
        super(), this.status = b.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["RespondToAgentHostInteractionResponse|1 status #0", b];
      }
    }
    class Oe extends f {
      constructor(e2) {
        super(), this.interactionId = "", this.turnId = "", this.question = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostPendingInteraction|1 interaction_id 9|2 turn_id 9|3 interaction_query #0 question|4 exec_approval #1 question|5 mcp_elicitation #2 question", s.Pd7, Te, Me];
      }
    }
    class Ne extends f {
      constructor(e2) {
        super(), this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["WatchAgentHostSessionInteractionsRequest|1 session_id 9"];
      }
    }
    class Fe extends f {
      constructor(e2) {
        super(), this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["WatchAgentHostSessionInteractionsEvent|1 snapshot #0 event|2 state #1 event", Ue, Le];
      }
    }
    class Ue extends f {
      constructor(e2) {
        super(), this.interactions = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSessionInteractionsSnapshot|1 interactions #0*", Oe];
      }
    }
    class Le extends f {
      constructor(e2) {
        super(), this.interactions = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSessionInteractionsState|1 interactions #0*", Oe];
      }
    }
    class $e extends f {
      constructor(e2) {
        super(), this.id = "", this.kind = E.UNSPECIFIED, this.state = I.UNSPECIFIED, this.hasAbort = false, this.metadata = {}, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostBackgroundWork|1 id 9|2 kind #0|3 state #1|4 owner_id 9?|5 has_abort 8|6 metadata 9,9", E, I];
      }
    }
    class Qe extends f {
      constructor(e2) {
        super(), this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["WatchAgentHostSessionBackgroundWorkRequest|1 session_id 9|2 kind #0?|3 state #1?|4 owner_id 9?", E, I];
      }
    }
    class je extends f {
      constructor(e2) {
        super(), this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["WatchAgentHostSessionBackgroundWorkEvent|1 snapshot #0 event|2 state #1 event", We, Ve];
      }
    }
    class Ge extends f {
      constructor(e2) {
        super(), this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["WatchAgentHostSessionTurnLifecycleRequest|1 session_id 9"];
      }
    }
    class He extends f {
      constructor(e2) {
        super(), this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["WatchAgentHostSessionTurnLifecycleEvent|1 ready #0 event|2 lifecycle #1 event", ze, Ct];
      }
    }
    class ze extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostTurnLifecycleWatchReady"];
      }
    }
    class We extends f {
      constructor(e2) {
        super(), this.work = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSessionBackgroundWorkSnapshot|1 work #0*", $e];
      }
    }
    class Ve extends f {
      constructor(e2) {
        super(), this.work = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSessionBackgroundWorkState|1 work #0*", $e];
      }
    }
    class Ke extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.workId = "", n.proto3.util.initPartial(e2, this);
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
        return ["AbortAgentHostBackgroundWorkRequest|1 session_id 9|2 work_id 9"];
      }
    }
    class Ye extends f {
      constructor(e2) {
        super(), this.aborted = false, n.proto3.util.initPartial(e2, this);
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
        return ["AbortAgentHostBackgroundWorkResponse|1 aborted 8"];
      }
    }
    class Ze extends f {
      constructor(e2) {
        super(), this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["AbortAllAgentHostBackgroundWorkRequest|1 session_id 9|2 kind #0?|3 state #1?|4 owner_id 9?", E, I];
      }
    }
    class Xe extends f {
      constructor(e2) {
        super(), this.abortedCount = 0, n.proto3.util.initPartial(e2, this);
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
        return ["AbortAllAgentHostBackgroundWorkResponse|1 aborted_count 13"];
      }
    }
    class et extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.shellId = "", n.proto3.util.initPartial(e2, this);
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
        return ["WatchAgentHostSessionShellOutputRequest|1 session_id 9|2 shell_id 9|3 include_snapshot 8?|4 from_output_offset 4?"];
      }
    }
    class tt extends f {
      constructor(e2) {
        super(), this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["WatchAgentHostSessionShellOutputEvent|1 snapshot #0 event|2 output #1 event|3 lifecycle #2 event", rt, nt, st];
      }
    }
    class rt extends f {
      constructor(e2) {
        super(), this.shellId = "", this.command = "", this.cwd = "", this.state = C.UNSPECIFIED, this.bufferedOutput = new Uint8Array(0), this.nextOutputOffset = n.protoInt64.zero, this.adopted = false, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostShellOutputSnapshot|1 shell_id 9|2 command 9|3 cwd 9|4 state #0|5 buffered_output 12|6 next_output_offset 4|7 tool_call_id 9?|8 title 9?|9 adopted 8", C];
      }
    }
    class nt extends f {
      constructor(e2) {
        super(), this.shellId = "", this.outputOffset = n.protoInt64.zero, this.stream = { case: void 0 }, this.isBackpressured = false, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostShellOutputChunk|1 shell_id 9|2 output_offset 4|3 stdout 12 stream|4 stderr 12 stream|5 is_backpressured 8"];
      }
    }
    class st extends f {
      constructor(e2) {
        super(), this.shellId = "", this.state = C.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostShellLifecycle|1 shell_id 9|2 state #0|3 exit_code 5?|4 abort_reason 9?", C];
      }
    }
    class ot extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.shellId = "", this.data = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
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
        return ["WriteAgentHostSessionShellInputRequest|1 session_id 9|2 shell_id 9|3 data 12"];
      }
    }
    class it extends f {
      constructor(e2) {
        super(), this.bytesAccepted = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
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
        return ["WriteAgentHostSessionShellInputResponse|1 bytes_accepted 4"];
      }
    }
    class at extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.clientInstanceId = "", n.proto3.util.initPartial(e2, this);
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
        return ["AttachAgentHostSessionRequest|1 session_id 9|2 last_event_id 4?|3 background_task_completions_only 8?|4 client_instance_id 9"];
      }
    }
    class ct extends f {
      constructor(e2) {
        super(), this.sessionId = "", this.blobIds = [], n.proto3.util.initPartial(e2, this);
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
        return ["GetAgentHostSessionBlobsRequest|1 session_id 9|2 blob_ids 12*|3 max_response_bytes 4?"];
      }
    }
    class lt extends f {
      constructor(e2) {
        super(), this.blobId = new Uint8Array(0), this.data = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSessionBlob|1 blob_id 12|2 data 12"];
      }
    }
    class ut extends f {
      constructor(e2) {
        super(), this.blobs = [], this.missingBlobIds = [], this.oversizeBlobIds = [], this.remainingBlobIds = [], n.proto3.util.initPartial(e2, this);
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
        return ["GetAgentHostSessionBlobsResponse|1 blobs #0*|2 missing_blob_ids 12*|4 oversize_blob_ids 12*|3 remaining_blob_ids 12*", lt];
      }
    }
    class dt extends f {
      constructor(e2) {
        super(), this.path = "", this.readOffset = n.protoInt64.zero, this.readLimit = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
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
        return ["ReadAgentHostFileRequest|1 path 9|2 read_offset 4|3 read_limit 4|4 cached_mtime_ms 3?"];
      }
    }
    class pt extends f {
      constructor(e2) {
        super(), this.totalBytes = n.protoInt64.zero, this.mtimeMs = n.protoInt64.zero, this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["ReadAgentHostFileResponse|1 total_bytes 4|2 mtime_ms 3|3 chunk #0 result|4 not_modified #1 result|5 too_large #2 result", mt, ht, ft];
      }
    }
    class mt extends f {
      constructor(e2) {
        super(), this.offset = n.protoInt64.zero, this.data = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostFileChunk|1 offset 4|2 data 12"];
      }
    }
    class ht extends f {
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
        return ["AgentHostFileNotModified"];
      }
    }
    class ft extends f {
      constructor(e2) {
        super(), this.maxBytes = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostFileTooLarge|1 max_bytes 4"];
      }
    }
    class gt extends f {
      constructor(e2) {
        super(), this.expectedApiSchemaRevision = "", this.desiredLocalLoopEnabled = false, n.proto3.util.initPartial(e2, this);
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
        return ["GetAgentHostDaemonInfoRequest|1 expected_api_schema_revision 9|2 desired_local_loop_enabled 8|3 allow_newer_schema 8?"];
      }
    }
    class yt extends f {
      constructor(e2) {
        super(), this.daemonVersion = "", this.apiSchemaRevision = "", this.localLoopEnabled = false, this.listenAddress = "", this.processPid = 0, this.runningSessionCount = 0, this.buildIdentity = "", this.capabilities = [], n.proto3.util.initPartial(e2, this);
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
        return ["GetAgentHostDaemonInfoResponse|1 daemon_version 9|2 api_schema_revision 9|3 local_loop_enabled 8|4 listen_address 9|5 process_pid 13|6 running_session_count 13|7 build_identity 9|8 capabilities 9*"];
      }
    }
    class wt extends f {
      constructor(e2) {
        super(), this.reason = "", this.onlyIfIdle = false, n.proto3.util.initPartial(e2, this);
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
        return ["ShutdownAgentHostDaemonRequest|1 reason 9|2 only_if_idle 8"];
      }
    }
    class vt extends f {
      constructor(e2) {
        super(), this.shutdownScheduled = false, n.proto3.util.initPartial(e2, this);
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
        return ["ShutdownAgentHostDaemonResponse|1 shutdown_scheduled 8"];
      }
    }
    class _t extends f {
      constructor(e2) {
        super(), this.accessToken = "", this.issuedAtMs = n.protoInt64.zero, this.clientInstanceId = "", this.signedOut = false, n.proto3.util.initPartial(e2, this);
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
        return ["UpdateAgentHostDaemonAuthRequest|1 access_token 9|2 issued_at_ms 4|3 expires_at_ms 4?|4 client_instance_id 9|5 signed_out 8"];
      }
    }
    class At extends f {
      constructor(e2) {
        super(), this.accepted = false, this.privacyMode = u.PrivacyMode.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["UpdateAgentHostDaemonAuthResponse|1 accepted 8|2 rejection_reason 9?|3 privacy_mode #0", u.PrivacyMode];
      }
    }
    class St extends f {
      constructor(e2) {
        super(), this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["SetAgentHostSessionTitleRequest|1 session_id 9|2 title 9?"];
      }
    }
    class bt extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SetAgentHostSessionTitleResponse"];
      }
    }
    class Et extends f {
      constructor(e2) {
        super(), this.eventId = n.protoInt64.zero, this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSessionEvent|1 event_id 4|14 keepalive 8?|2 interaction_update #0 event|3 conversation_state #1 event|4 turn_started #2 event|8 turn_awaiting_input #3 event|9 turn_settled #4 event|10 interaction_resolved #5 event|11 subagent_started #6 event|12 background_task_completed #7 event|13 turn_interactions_superseded #8 event", s.Uq, s.Y9z, Ut, $t, Ht, Gt, Ft, It, Lt];
      }
    }
    class It extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostBackgroundTaskCompleted|1 completion #0", s.KFq];
      }
    }
    class Ct extends f {
      constructor(e2) {
        super(), this.turnId = "", this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostTurnLifecycle|1 turn_id 9|2 network_phase_started #0 event|3 response_metadata #1 event|4 connection_state_changed #2 event|5 first_message #3 event|6 first_message_network #4 event|7 first_non_heartbeat_response #5 event|8 ttft_breakdown #6 event|9 finished #7 event|10 turn_runtime_selected #8 event", xt, Rt, Pt, qt, Dt, Ot, Nt, kt, Tt];
      }
    }
    class kt extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostTurnLifecycleFinished"];
      }
    }
    class xt extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostNetworkPhaseStarted"];
      }
    }
    class Tt extends f {
      constructor(e2) {
        super(), this.runtime = "", this.reason = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostTurnRuntimeSelected|1 runtime 9|2 reason 9"];
      }
    }
    class Rt extends f {
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
        return ["AgentHostResponseMetadata|1 server_region 9?|2 transport_mode 9?"];
      }
    }
    class Bt extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostReconnectTrigger|1 error_class 9?|2 connect_code 13?|3 connect_code_name 9?|4 error_code 13?|5 count_as_server_error 8?|6 count_as_transport_error 8?|7 stall_aborted 8?|8 originating_request_id 9?|9 attempt_request_id 9?|10 endpoint_url 9?|11 transport_failure_kind 9?|12 transport_mode 9?|13 loop 9?"];
      }
    }
    class Pt extends f {
      constructor(e2) {
        super(), this.state = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostConnectionStateChanged|1 connected #0 state|2 reconnecting #1 state", Jt, Mt];
      }
    }
    class Jt extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostConnected"];
      }
    }
    class Mt extends f {
      constructor(e2) {
        super(), this.attempt = 0, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostReconnecting|1 attempt 13|2 trigger #0?", Bt];
      }
    }
    class qt extends f {
      constructor(e2) {
        super(), this.elapsedMs = 0, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostFirstMessage|1 elapsed_ms 1"];
      }
    }
    class Dt extends f {
      constructor(e2) {
        super(), this.elapsedMs = 0, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostFirstMessageNetwork|1 elapsed_ms 1"];
      }
    }
    class Ot extends f {
      constructor(e2) {
        super(), this.handshakeMs = 0, this.attempt = 0, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostFirstNonHeartbeatResponse|1 handshake_ms 1|2 attempt 13"];
      }
    }
    class Nt extends f {
      constructor(e2) {
        super(), this.serverFirstTokenMs = 0, this.preStreamSetupMs = 0, this.waitForFirstEventMs = 0, this.slowPoolWaitMs = 0, this.attempt = 0, this.clientClock = false, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostTtftBreakdown|1 server_first_token_ms 1|2 pre_stream_setup_ms 1|3 wait_for_first_event_ms 1|4 provider_ttft_ms 1?|5 slow_pool_wait_ms 1|6 attempt 13|7 client_prep_ms 1?|8 client_clock 8"];
      }
    }
    class Ft extends f {
      constructor(e2) {
        super(), this.turnId = "", this.parentToolCallId = "", this.childSessionId = "", this.rootSessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostSubagentStarted|1 turn_id 9|2 parent_tool_call_id 9|3 child_session_id 9|4 root_session_id 9"];
      }
    }
    class Ut extends f {
      constructor(e2) {
        super(), this.turnId = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostTurnStarted|1 turn_id 9"];
      }
    }
    class Lt extends f {
      constructor(e2) {
        super(), this.turnId = "", this.continuation = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostTurnInteractionsSuperseded|1 turn_id 9|2 replay_action_from_state #0 continuation|3 resume_from_checkpoint #0 continuation", s.Y9z];
      }
    }
    class $t extends f {
      constructor(e2) {
        super(), this.turnId = "", this.requestId = "", this.interactionId = "", this.question = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostTurnAwaitingInput|1 turn_id 9|2 request_id 9|3 interaction_id 9|4 interaction_query #0 question|5 exec_approval #1 question|6 mcp_elicitation #2 question", s.Pd7, Te, Me];
      }
    }
    class Qt extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostInteractionCancelled|1 reason 9?"];
      }
    }
    class jt extends f {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostInteractionFailed|1 error 9"];
      }
    }
    class Gt extends f {
      constructor(e2) {
        super(), this.turnId = "", this.interactionId = "", this.resolution = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostInteractionResolved|1 turn_id 9|2 interaction_id 9|3 responded #0 resolution|4 cancelled #1 resolution|5 failed #2 resolution|6 exec_approval #3 resolution|7 mcp_elicitation #4 resolution", s.Y5, Qt, jt, Re, Pe];
      }
    }
    class Ht extends f {
      constructor(e2) {
        super(), this.turnId = "", this.outcome = k.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostTurnSettled|1 turn_id 9|2 outcome #0|3 detail 9?|4 error #1?|5 interrupted_by #2?|6 stop_reason #3?", k, zt, x, T];
      }
    }
    class zt extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostTurnError|1 kind 9?|2 title 9?|3 detail 9?|4 is_retryable 8?|5 connect_code 13?|6 inference_request_error_type 9?|7 request_id 9?|8 error_details #0?|9 action 9?", d.ErrorDetails];
      }
    }
    class Wt extends f {
      constructor(e2) {
        super(), this.selectedSubagentModels = [], this.subagentModelOverrides = [], this.requestHeaders = {}, this.allowedTools = [], this.excludedTools = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentHostTurnOptions|1 generation_uuid 9?|2 custom_system_prompt 9?|3 exclude_workspace_context 8?|4 enable_agent_retries 8?|5 fixed_retry_delay_ms 13?|6 endless_retries 8?|7 agent_session_id 9?|8 is_running_in_test 8?|9 stall_advisory_timeout_ms 13?|10 stall_fail_timeout_ms 13?|11 selected_subagent_models #0*|12 subagent_model_overrides #1*|13 request_context_blob_transport_mode 9?|14 request_context_blob_max_bytes 13?|15 request_context_dynamic_inline_max_bytes 13?|16 suggest_next_prompt 8?|17 blob_encryption_key 9?|18 client_supports_inline_images 8?|19 client_supports_preview_card 8?|20 client_supports_send_to_user 8?|22 client_supports_routed_model_update 8?|23 request_headers 9,9|24 system_prompt_spec #2?|25 max_steps 13?|26 allowed_tools 9*|27 excluded_tools 9*|28 can_create_cloud_subagents 8?|29 started_as_new_project 8?|30 first_project_onboarding 8?|31 harness 9?|32 subagent_smart_mode_auto_run 8?|33 local_loop_gate_enabled 8?", i.G4, s.Bjv, p.$];
      }
    }
  }