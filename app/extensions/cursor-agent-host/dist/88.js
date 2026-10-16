"use strict";
exports.id = 88, exports.ids = [88], exports.modules = { 42862: (e, t, r) => {
  r.d(t, { DY: () => v, G1: () => d, Gv: () => q, Hl: () => w, I: () => H, M: () => J, MC: () => h, Rb: () => T, Zm: () => D, aB: () => S, ev: () => x, s6: () => B, vG: () => A, wC: () => z, wt: () => k });
  var s = r(36038), n = r(34175), i = r(32180), o = r(11197), a = r(24513), c = r(8592);
  const l = "aiserver.v1.";
  class u extends c.HL {
    static get runtime() {
      return (0, c.kU)(this, "runtime", s.proto3);
    }
    static $p() {
      return l;
    }
  }
  var d = (0, c.QT)(s.proto3, l, "McpToolCaller", [[0, "UNSPECIFIED"], [1, "IDE"], [2, "GLASS"], [3, "AGENT_HOST_LOCAL_LOOP"]], 1), h = (0, c.QT)(s.proto3, l, "McpPlacement", [[0, "UNSPECIFIED"], [1, "SERVER"], [2, "CLIENT"], [3, "UNDECIDED"]], 1), p = (0, c.QT)(s.proto3, l, "McpPlacementSource", [[0, "UNSPECIFIED"], [1, "EXPLICIT"], [2, "TEAM_DEFAULT"], [3, "PROBE"], [4, "MANUAL"], [5, "LOGIN"], [6, "CLIENT_PROBE"], [7, "NONE"]], 1), f = (0, c.QT)(s.proto3, l, "McpPlacementProbe", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "SERVER_CAPABLE"], [3, "UNREACHABLE"], [4, "INCONCLUSIVE"]], 1), g = (0, c.QT)(s.proto3, l, "McpPlacementRequestSource", [[0, "UNSPECIFIED"], [1, "MANUAL"], [2, "CLIENT_PROBE"]], 1), m = (0, c.QT)(s.proto3, l, "McpRowKind", [[0, "UNSPECIFIED"], [1, "PLUGIN"], [2, "CUSTOM"], [3, "TEAM"]], 1);
  class v extends u {
    constructor(e2) {
      super(), this.serverIdentifiers = [], s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(v, e2, t2);
    }
    static $() {
      return ["ListMcpToolsRequest|1 server_identifiers 9*|2 mcp_config_json 9?"];
    }
  }
  class w extends u {
    constructor(e2) {
      super(), this.servers = [], s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(w, e2, t2);
    }
    static $() {
      return ["ListMcpToolsResponse|1 servers #0*", y];
    }
  }
  class y extends u {
    constructor(e2) {
      super(), this.serverIdentifier = "", this.status = "", this.tools = [], this.accountLabel = "", this.rowServerIdentifier = "", this.servedBy = i.JLr.UNSPECIFIED, this.placement = h.UNSPECIFIED, this.url = "", this.placementSource = p.UNSPECIFIED, this.placementProbe = f.UNSPECIFIED, this.placementProbeReason = "", this.overriddenDeclaredPlacement = false, this.rowKind = m.UNSPECIFIED, this.displayName = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(y, e2, t2);
    }
    static $() {
      return ["ListMcpToolsResponse.Server|1 server_identifier 9|2 status 9|3 tools #0*|4 account_label 9|5 row_server_identifier 9|6 served_by #1|7 placement #2|8 url 9|9 placement_source #3|10 placement_probe #4|11 placement_probe_reason 9|12 overridden_declared_placement 8|13 row_kind #5|14 viewer_can_decide 8?|15 instructions 9?|16 plugin 9?|17 marketplace 9?|18 plugin_db_id 9?|19 marketplace_id 9?|20 display_name 9", n.gd, i.JLr, h, p, f, m];
    }
  }
  class S extends u {
    constructor(e2) {
      super(), this.serverIdentifier = "", this.toolName = "", this.accountKey = "", this.toolCallId = "", this.conversationId = "", this.caller = d.UNSPECIFIED, this.deviceTag = "", this.clientApproved = false, s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(S, e2, t2);
    }
    static $() {
      return ["CallMcpToolRequest|1 server_identifier 9|2 tool_name 9|3 args #0|4 account_key 9|5 tool_call_id 9|6 conversation_id 9|7 caller #1|8 device_tag 9|9 client_approved 8|10 mcp_config_json 9?", s.Struct, d];
    }
  }
  class I extends u {
    constructor(e2) {
      super(), this.progress = 0, s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(I, e2, t2);
    }
    static $() {
      return ["McpToolCallProgress|1 progress 1|2 total 1?|3 message 9?"];
    }
  }
  class C extends u {
    constructor(e2) {
      super(), this.requestId = "", this.message = "", this.requestedSchemaJson = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(C, e2, t2);
    }
    static $() {
      return ["McpElicitationRequest|1 request_id 9|2 message 9|3 requested_schema_json 9"];
    }
  }
  class P extends u {
    constructor(e2) {
      super(), this.reason = k.UNSPECIFIED, this.detail = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(P, e2, t2);
    }
    static $() {
      return ["NotReachableFromBackend|1 reason #0|2 detail 9", k];
    }
  }
  var k = (0, c.QT)(s.proto3, l, "NotReachableFromBackend.Reason", [[0, "UNSPECIFIED"], [1, "DNS"], [2, "CONNECTION_REFUSED"], [3, "TLS"], [4, "TIMEOUT"], [5, "HTTP_5XX"], [6, "OTHER"]], 1);
  class M extends u {
    constructor(e2) {
      super(), this.servedBy = i.JLr.UNSPECIFIED, this.detail = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(M, e2, t2);
    }
    static $() {
      return ["McpToolNeedsAuth|1 served_by #0|2 detail 9", i.JLr];
    }
  }
  class E extends u {
    constructor(e2) {
      super(), this.servedBy = i.JLr.UNSPECIFIED, this.detail = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(E, e2, t2);
    }
    static $() {
      return ["McpToolNotRoutable|1 served_by #0|2 detail 9", i.JLr];
    }
  }
  class _ extends u {
    constructor(e2) {
      super(), this.placement = h.UNSPECIFIED, this.detail = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(_, e2, t2);
    }
    static $() {
      return ["McpToolNotDialed|1 placement #0|2 detail 9", h];
    }
  }
  class b extends u {
    constructor(e2) {
      super(), this.outcome = { case: void 0 }, s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(b, e2, t2);
    }
    static $() {
      return ["CallMcpToolOutcome|1 result #0 outcome|2 not_reachable #1 outcome|3 needs_auth #2 outcome|4 not_routable #3 outcome|5 not_dialed #4 outcome", o.iz, P, M, E, _];
    }
  }
  class R extends u {
    constructor(e2) {
      super(), this.requestId = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(R, e2, t2);
    }
    static $() {
      return ["McpElicitationClosed|1 request_id 9"];
    }
  }
  class q extends u {
    constructor(e2) {
      super(), this.event = { case: void 0 }, s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(q, e2, t2);
    }
    static $() {
      return ["CallMcpToolResponse|1 progress #0 event|2 elicitation_request #1 event|3 outcome #2 event|4 elicitation_closed #3 event", I, C, b, R];
    }
  }
  class A extends u {
    constructor(e2) {
      super(), this.action = J.UNSPECIFIED, s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(A, e2, t2);
    }
    static $() {
      return ["McpElicitationResponse|1 action #0|2 content #1", J, s.Struct];
    }
  }
  var J = (0, c.QT)(s.proto3, l, "McpElicitationResponse.Action", [[0, "UNSPECIFIED"], [1, "ACCEPT"], [2, "DECLINE"], [3, "CANCEL"]], 1);
  class T extends u {
    constructor(e2) {
      super(), this.toolCallId = "", this.requestId = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(T, e2, t2);
    }
    static $() {
      return ["RespondToMcpElicitationRequest|1 tool_call_id 9|2 request_id 9|3 response #0", A];
    }
  }
  class D extends u {
    constructor(e2) {
      super(), this.status = N.UNSPECIFIED, s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(D, e2, t2);
    }
    static $() {
      return ["RespondToMcpElicitationResponse|1 status #0", N];
    }
  }
  var N = (0, c.QT)(s.proto3, l, "RespondToMcpElicitationResponse.Status", [[0, "UNSPECIFIED"], [1, "ACCEPTED"], [2, "NOT_FOUND"], [3, "ALREADY_RESOLVED"], [4, "NOT_IMPLEMENTED"]], 1);
  class x extends u {
    constructor(e2) {
      super(), this.serverUrl = "", this.refreshToken = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(x, e2, t2);
    }
    static $() {
      return ["MigrateMcpOAuthGrantRequest|1 server_url 9|2 refresh_token 9|3 client_information #0", a.Im];
    }
  }
  class L extends u {
    constructor(e2) {
      super(), this.method = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(L, e2, t2);
    }
    static $() {
      return ["McpToolServiceNotImplemented|1 method 9"];
    }
  }
  class B extends u {
    constructor(e2) {
      super(), this.outcome = { case: void 0 }, s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(B, e2, t2);
    }
    static $() {
      return ["MigrateMcpOAuthGrantResponse|1 migrated #0 outcome|2 server_copy_kept #1 outcome|3 invalid_grant #2 outcome|4 reuse_detected #3 outcome|5 provider_error #4 outcome|6 rejected_grok_row #5 outcome|7 not_implemented #6 outcome|8 persist_failed #7 outcome|9 rejected_client_placed #8 outcome", U, F, O, $, j, W, L, G, K];
    }
  }
  class U extends u {
    constructor(e2) {
      super(), s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(U, e2, t2);
    }
    static $() {
      return ["MigrateMcpOAuthGrantResponse.Migrated"];
    }
  }
  class F extends u {
    constructor(e2) {
      super(), s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(F, e2, t2);
    }
    static $() {
      return ["MigrateMcpOAuthGrantResponse.ServerCopyKept"];
    }
  }
  class O extends u {
    constructor(e2) {
      super(), this.detail = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(O, e2, t2);
    }
    static $() {
      return ["MigrateMcpOAuthGrantResponse.InvalidGrant|1 detail 9"];
    }
  }
  class $ extends u {
    constructor(e2) {
      super(), this.detail = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals($, e2, t2);
    }
    static $() {
      return ["MigrateMcpOAuthGrantResponse.ReuseDetected|1 detail 9"];
    }
  }
  class j extends u {
    constructor(e2) {
      super(), this.detail = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(j, e2, t2);
    }
    static $() {
      return ["MigrateMcpOAuthGrantResponse.ProviderError|1 detail 9"];
    }
  }
  class W extends u {
    constructor(e2) {
      super(), s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(W, e2, t2);
    }
    static $() {
      return ["MigrateMcpOAuthGrantResponse.RejectedGrokRow"];
    }
  }
  class G extends u {
    constructor(e2) {
      super(), this.detail = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(G, e2, t2);
    }
    static $() {
      return ["MigrateMcpOAuthGrantResponse.PersistFailed|1 detail 9"];
    }
  }
  class K extends u {
    constructor(e2) {
      super(), s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(K, e2, t2);
    }
    static $() {
      return ["MigrateMcpOAuthGrantResponse.RejectedClientPlaced"];
    }
  }
  class H extends u {
    constructor(e2) {
      super(), this.serverIdentifier = "", this.placement = h.UNSPECIFIED, this.source = g.UNSPECIFIED, s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(H, e2, t2);
    }
    static $() {
      return ["SetMcpServerPlacementRequest|1 server_identifier 9|2 placement #0|3 source #1", h, g];
    }
  }
  class z extends u {
    constructor(e2) {
      super(), this.outcome = { case: void 0 }, s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(z, e2, t2);
    }
    static $() {
      return ["SetMcpServerPlacementResponse|1 updated #0 outcome|2 precondition_failed #1 outcome|3 rejected_declared_placement #2 outcome|4 rejected_grok_row #3 outcome|5 not_implemented #4 outcome", Q, V, X, Y, L];
    }
  }
  class Q extends u {
    constructor(e2) {
      super(), this.placement = h.UNSPECIFIED, s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(Q, e2, t2);
    }
    static $() {
      return ["SetMcpServerPlacementResponse.Updated|1 placement #0", h];
    }
  }
  class V extends u {
    constructor(e2) {
      super(), this.detail = "", s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(V, e2, t2);
    }
    static $() {
      return ["SetMcpServerPlacementResponse.PreconditionFailed|1 detail 9"];
    }
  }
  class X extends u {
    constructor(e2) {
      super(), s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(X, e2, t2);
    }
    static $() {
      return ["SetMcpServerPlacementResponse.RejectedDeclaredPlacement"];
    }
  }
  class Y extends u {
    constructor(e2) {
      super(), s.proto3.util.initPartial(e2, this);
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
      return s.proto3.util.equals(Y, e2, t2);
    }
    static $() {
      return ["SetMcpServerPlacementResponse.RejectedGrokRow"];
    }
  }
}, 75088: (e, t, r) => {
  r.d(t, { SJ: () => gt, LD: () => ft, createAgentHostExec: () => rt, l_: () => wt, Qm: () => nt, xD: () => ht, Tr: () => vt, xX: () => k, N7: () => Ce });
  var s = r(91105), n = r(37949), i = r(77099), o = r(32180), a = r(42862), c = r(36038), l = r(77598), u = r(72187), d = r(33002), h = r(51108), p = r(8032), f = r(40328);
  class g extends Error {
    constructor(e2) {
      super(`MCP server "${e2.serverIdentifier}" requires authentication. Call mcp_auth for this server to authorize it, then retry.` + (e2.detail ? ` (${e2.detail})` : "")), this.name = "PlacementRoutingNeedsAuthError", this.serverIdentifier = e2.serverIdentifier, this.servedBy = e2.servedBy, this.detail = e2.detail;
    }
  }
  function m(e2) {
    return e2 instanceof Error && "PlacementRoutingNeedsAuthError" === e2.name;
  }
  class v extends Error {
    constructor(e2) {
      const t2 = (function(e3) {
        switch (e3) {
          case a.wt.DNS:
            return "dns";
          case a.wt.CONNECTION_REFUSED:
            return "connection refused";
          case a.wt.TLS:
            return "tls";
          case a.wt.TIMEOUT:
            return "timeout";
          case a.wt.HTTP_5XX:
            return "http 5xx";
          case a.wt.OTHER:
          case a.wt.UNSPECIFIED:
            return "other";
          default:
            return "unknown";
        }
      })(e2.notReachable.reason);
      super(`MCP server "${e2.serverIdentifier}" is not reachable from the Cursor backend (${t2})` + (e2.notReachable.detail ? `: ${e2.notReachable.detail}` : "") + ". It can be reclassified as client-placed in MCP settings."), this.name = "PlacementRoutingNotReachableError", this.serverIdentifier = e2.serverIdentifier, this.reason = e2.notReachable.reason, this.detail = e2.notReachable.detail;
    }
  }
  function w(e2) {
    return e2 instanceof Error && "PlacementRoutingNotReachableError" === e2.name;
  }
  class y extends Error {
    constructor(e2) {
      super(`MCP server "${e2.serverIdentifier}" is not dialed by the Cursor backend (placement ${a.MC[e2.notDialed.placement] ?? "UNSPECIFIED"})` + (e2.notDialed.detail ? `: ${e2.notDialed.detail}` : "")), this.name = "PlacementRoutingNotDialedError", this.serverIdentifier = e2.serverIdentifier, this.placement = e2.notDialed.placement, this.detail = e2.notDialed.detail;
    }
  }
  const S = (0, n.h)("placement-routing-mcp:call");
  function I(e2) {
    return (0, l.createHash)("sha256").update(e2).digest("hex").slice(0, 16);
  }
  const C = (0, d.cF)(/* @__PURE__ */ Symbol.for("cursor.agentStreamMetadata"), void 0);
  function P(e2) {
    const t2 = e2.get(C)?.conversationId;
    return "string" == typeof t2 ? t2 : "";
  }
  function k(e2 = a.G1.UNSPECIFIED) {
    return (t2) => "managed-local" === (0, u.LQ)(t2) ? a.G1.AGENT_HOST_LOCAL_LOOP : e2;
  }
  const M = k();
  function E(e2, t2) {
    return void 0 === e2 ? M(t2) : "function" == typeof e2 ? e2(t2) : e2;
  }
  function _(e2) {
    return m(e2) ? "needs_auth" : w(e2) ? "not_reachable" : e2 instanceof i.U$ ? "tool_not_found" : e2 instanceof i.bm ? "server_not_found" : e2 instanceof f.T ? (function(e3) {
      switch (e3.code) {
        case p.C.Unavailable:
          return "unavailable";
        case p.C.ResourceExhausted:
          return "rate_limited";
        case p.C.Unauthenticated:
          return "unauthenticated";
        case p.C.PermissionDenied:
          return "forbidden";
        case p.C.InvalidArgument:
          return "bad_request";
        case p.C.Canceled:
        case p.C.Aborted:
        case p.C.DeadlineExceeded:
          return "aborted";
        default:
          return "error";
      }
    })(e2) : "error";
  }
  function b(e2) {
    return true === e2.isError ? "tool_error" : "success";
  }
  function R(e2) {
    return (0, h.HHu)(e2.url);
  }
  function q(e2) {
    const t2 = e2?.config;
    return void 0 === t2 ? "unknown" : "url" in t2 ? (0, h.HHu)(t2.url) : "stdio";
  }
  function A(e2) {
    switch (e2.outcome.case) {
      case "result":
        return (function(e3) {
          switch (e3.result.case) {
            case "success":
            case "approved":
              return "none";
            case "error":
              return true === e3.result.value.needsAuth ? "server_needs_auth" : (0, h.vdi)(e3.result.value.error) ? "server_timeout" : "server_error";
            case "rejected":
              return "server_rejected";
            case "permissionDenied":
              return "server_permission_denied";
            case "toolNotFound":
              return "server_tool_not_found";
            case "serverNotFound":
              return "server_row_not_found";
            case void 0:
              return "server_empty_outcome";
            default:
              return "server_unknown_outcome";
          }
        })(e2.outcome.value);
      case "needsAuth":
        return "server_needs_auth";
      case "notReachable":
        return "server_not_reachable";
      case "notRoutable":
        return "server_not_routable";
      case "notDialed":
        return "server_not_dialed";
      case void 0:
        return "server_empty_outcome";
      default:
        return "server_unknown_outcome";
    }
  }
  function J(e2) {
    return e2 instanceof f.T ? (function(e3) {
      switch (e3) {
        case p.C.Canceled:
          return "connect_canceled";
        case p.C.Unknown:
          return "connect_unknown";
        case p.C.InvalidArgument:
          return "connect_invalid_argument";
        case p.C.DeadlineExceeded:
          return "connect_deadline_exceeded";
        case p.C.NotFound:
          return "connect_not_found";
        case p.C.AlreadyExists:
          return "connect_already_exists";
        case p.C.PermissionDenied:
          return "connect_permission_denied";
        case p.C.ResourceExhausted:
          return "connect_resource_exhausted";
        case p.C.FailedPrecondition:
          return "connect_failed_precondition";
        case p.C.Aborted:
          return "connect_aborted";
        case p.C.OutOfRange:
          return "connect_out_of_range";
        case p.C.Unimplemented:
          return "connect_unimplemented";
        case p.C.Internal:
          return "connect_internal";
        case p.C.Unavailable:
          return "connect_unavailable";
        case p.C.DataLoss:
          return "connect_data_loss";
        case p.C.Unauthenticated:
          return "connect_unauthenticated";
        default:
          return "connect_other";
      }
    })(e2.code) : m(e2) ? "needs_auth" : w(e2) ? "not_reachable" : e2 instanceof i.U$ ? "tool_not_found" : e2 instanceof i.bm ? "server_not_found" : e2 instanceof Error ? "AbortError" === e2.name ? "abort" : (0, h.vdi)(e2.message) ? "timeout" : "exception" : "exception";
  }
  function T(e2) {
    const t2 = (function(e3) {
      switch (e3) {
        case a.G1.IDE:
          return "ide";
        case a.G1.GLASS:
          return "glass";
        case a.G1.AGENT_HOST_LOCAL_LOOP:
          return "agent_host_local_loop";
        case a.G1.UNSPECIFIED:
          return "unspecified";
        default:
          return "unknown";
      }
    })(e2.caller), r2 = Math.round(e2.durationMs);
    if ("server" === e2.placement && S.info(e2.ctx, "Routed MCP tool call", { toolCallId: e2.toolCallId, conversationId: e2.conversationId, ...void 0 === e2.requestId ? {} : { requestId: e2.requestId }, serverIdentifierHash: I(e2.serverIdentifier), providerHost: e2.providerHost, callerKind: t2, outcome: e2.outcome, reason: e2.reason, durationMs: r2, elicitationCount: e2.elicitationCount }), void 0 !== e2.metrics) try {
      e2.metrics.distribution({ stat: "mcp_tool.client_call.duration_ms", value: r2, tags: { placement: e2.placement, outcome: e2.outcome, reason: e2.reason, caller_kind: t2, provider_host: e2.providerHost } });
    } catch (t3) {
      S.warn(e2.ctx, "MCP client call metrics sink threw", { error: t3 });
    }
  }
  const D = (0, n.h)("placement-routing-mcp:call"), N = { type: "object", properties: {} };
  function x(e2) {
    if (0 === e2.length) return N;
    try {
      const t2 = JSON.parse(e2);
      if (null === t2 || "object" != typeof t2 || Array.isArray(t2)) return N;
      const r2 = t2, s2 = r2.properties;
      return { type: "object", properties: null === s2 || "object" != typeof s2 || Array.isArray(s2) ? {} : s2, ...Array.isArray(r2.required) && r2.required.every((e3) => "string" == typeof e3) ? { required: r2.required } : {} };
    } catch {
      return N;
    }
  }
  function L(e2) {
    switch (e2) {
      case "accept":
        return a.M.ACCEPT;
      case "decline":
        return a.M.DECLINE;
      case "cancel":
        return a.M.CANCEL;
    }
  }
  async function B(e2) {
    let t2;
    if (void 0 === e2.elicitationProvider) t2 = new a.vG({ action: a.M.CANCEL });
    else try {
      const r2 = await e2.elicitationProvider.elicit({ message: e2.request.message, requestedSchema: x(e2.request.requestedSchemaJson) }, { signal: e2.signal });
      t2 = new a.vG({ action: L(r2.action), content: "accept" === r2.action && void 0 !== r2.content ? c.Struct.fromJson(r2.content) : void 0 });
    } catch (r2) {
      D.warn(e2.ctx, "MCP elicitation provider failed; cancelling", { toolCallId: e2.toolCallId, requestId: e2.request.requestId, error: r2 }), t2 = new a.vG({ action: a.M.CANCEL });
    }
    if (e2.signal.aborted) D.debug(e2.ctx, "Dropping elicitation answer for a closed form", { toolCallId: e2.toolCallId, requestId: e2.request.requestId });
    else try {
      await e2.client.respondToMcpElicitation(new a.Rb({ toolCallId: e2.toolCallId, requestId: e2.request.requestId, response: t2 }));
    } catch (t3) {
      D.warn(e2.ctx, "RespondToMcpElicitation failed", { toolCallId: e2.toolCallId, requestId: e2.request.requestId, error: t3 });
    }
  }
  function U(e2) {
    const t2 = [];
    for (const r2 of e2.content) switch (r2.content.case) {
      case "text": {
        const { text: e3, outputLocation: s2 } = r2.content.value;
        t2.push({ type: "text", text: void 0 !== s2 && 0 === e3.length ? `[output of ${s2.sizeBytes} bytes exceeded the inline limit and was not returned]` : e3 });
        break;
      }
      case "image":
        t2.push({ type: "image", data: Buffer.from(r2.content.value.data).toString("base64"), mimeType: r2.content.value.mimeType || void 0 });
    }
    return t2;
  }
  function F(e2, t2) {
    switch (t2.outcome.case) {
      case "result":
        return (function(e3, t3) {
          switch (t3.result.case) {
            case "success":
              return { content: U(t3.result.value), isError: t3.result.value.isError, structuredContent: void 0 !== t3.result.value.structuredContent ? t3.result.value.structuredContent.toJson() : void 0 };
            case "approved":
              return { content: [], isError: false };
            case "error":
              if (true === t3.result.value.needsAuth) throw new g({ serverIdentifier: e3, servedBy: o.JLr.CURSOR, detail: t3.result.value.error });
              throw new Error(t3.result.value.error);
            case "rejected":
              throw new Error(t3.result.value.reason ? `Tool rejected: ${t3.result.value.reason}` : "Tool rejected");
            case "permissionDenied":
              throw new Error(`Permission denied: ${t3.result.value.error}`);
            case "toolNotFound":
              throw new i.U$(t3.result.value.name, [...t3.result.value.availableTools]);
            case "serverNotFound":
              throw new i.bm(t3.result.value.name, [...t3.result.value.availableServers]);
            case void 0:
              throw new Error(`CallMcpTool returned an empty result for MCP server "${e3}"`);
          }
        })(e2, t2.outcome.value);
      case "needsAuth":
        throw new g({ serverIdentifier: e2, servedBy: t2.outcome.value.servedBy, detail: t2.outcome.value.detail });
      case "notReachable":
        throw new v({ serverIdentifier: e2, notReachable: t2.outcome.value });
      case "notRoutable":
        throw new Error(`MCP server "${e2}" is served by a backend this service cannot execute against` + (t2.outcome.value.detail ? `: ${t2.outcome.value.detail}` : ""));
      case "notDialed":
        throw new y({ serverIdentifier: e2, notDialed: t2.outcome.value });
      case void 0:
        throw new Error(`CallMcpTool returned an empty outcome for MCP server "${e2}"`);
    }
  }
  var O = r(50768);
  function $(e2) {
    return 0 === e2.trim().length ? void 0 : (0, O.Yl)(e2);
  }
  var j = r(24513);
  const W = (0, n.h)("placement-routing-mcp:grant-migration");
  function G(e2, t2) {
    const r2 = t2.map((e3) => ({ identifier: e3.serverIdentifier, serverUrl: e3.serverUrl, ref: e3 })), s2 = (function(e3, t3) {
      const r3 = /* @__PURE__ */ new Map(), s3 = /* @__PURE__ */ new Map(), n3 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), o2 = [], a2 = /* @__PURE__ */ new Map();
      for (const t4 of e3) {
        const e4 = t4.rowServerIdentifier || t4.serverIdentifier, r4 = a2.get(e4);
        (void 0 === r4 || r4.serverIdentifier !== e4 && t4.serverIdentifier === e4) && a2.set(e4, t4);
      }
      const c2 = [];
      for (const t4 of e3) a2.get(t4.rowServerIdentifier || t4.serverIdentifier) === t4 ? c2.push(t4) : s3.set(t4, { row: t4, reason: "duplicate_slot" });
      for (const e4 of c2) {
        const a3 = t3.filter((t4) => !(i2.has(t4) || n3.has(t4) || t4.identifier !== e4.rowServerIdentifier && t4.identifier !== e4.serverIdentifier));
        if (0 === a3.length) {
          o2.push(e4);
          continue;
        }
        const c3 = $(e4.url), l3 = void 0 === c3 ? [] : a3.filter((e5) => $(e5.serverUrl) === c3);
        if (0 === l3.length) {
          s3.set(e4, { row: e4, reason: "url_mismatch" });
          for (const e5 of a3) n3.set(e5, "url_mismatch");
          continue;
        }
        const u3 = l3[0];
        i2.add(u3), r3.set(e4, { row: e4, local: u3, matchedBy: "identifier", rpcServerUrl: e4.url });
      }
      for (const e4 of o2) {
        const o3 = $(e4.url);
        if (void 0 === o3) {
          s3.set(e4, { row: e4, reason: "row_has_no_url" });
          continue;
        }
        const a3 = t3.filter((e5) => !i2.has(e5) && "url_mismatch" !== n3.get(e5) && $(e5.serverUrl) === o3);
        if (0 !== a3.length) if (a3.length > 1) {
          s3.set(e4, { row: e4, reason: "ambiguous_url", candidates: a3.map((e5) => e5.identifier) });
          for (const e5 of a3) n3.set(e5, "ambiguous_url");
        } else i2.add(a3[0]), r3.set(e4, { row: e4, local: a3[0], matchedBy: "url", rpcServerUrl: e4.url });
        else s3.set(e4, { row: e4, reason: "no_local_match" });
      }
      const l2 = [], u2 = [];
      for (const t4 of e3) {
        const e4 = r3.get(t4);
        if (e4) {
          l2.push(e4);
          continue;
        }
        const n4 = s3.get(t4);
        n4 && u2.push(n4);
      }
      const d2 = [];
      for (const e4 of t3) i2.has(e4) || d2.push({ local: e4, reason: n3.get(e4) ?? "no_row" });
      return { bindings: l2, unboundRows: u2, unboundLocals: d2 };
    })(e2.map((e3) => ({ serverIdentifier: e3.serverIdentifier, rowServerIdentifier: e3.rowServerIdentifier, url: e3.url ?? "", row: e3 })), r2), n2 = /* @__PURE__ */ new Map();
    for (const e3 of s2.bindings) n2.set(e3.local.ref, { row: e3.row.row });
    for (const e3 of s2.unboundLocals) n2.set(e3.local.ref, { skipped: "no_row" === e3.reason ? "not_server_placed" : e3.reason });
    return n2;
  }
  async function K(e2, t2, r2) {
    if (e2.exhausted?.has(t2.authStorageKey)) return { kind: "skipped", reason: "already_attempted" };
    try {
      await e2.disconnect(t2);
    } catch (e3) {
      return { kind: "disconnect_failed", error: e3 };
    }
    if (false === e2.stillServerPlaced?.(r2)) return { kind: "skipped", reason: "not_server_placed" };
    const s2 = await e2.store.loadTokens(t2.authStorageKey), n2 = s2?.refresh_token;
    if (void 0 === n2 || 0 === n2.length) return { kind: "skipped", reason: "no_refresh_token" };
    const i2 = await e2.store.loadClientInformation(t2.authStorageKey);
    if (void 0 === i2) return { kind: "skipped", reason: "no_client_information" };
    let o2;
    try {
      o2 = await e2.client.migrateMcpOAuthGrant(new a.ev({ serverUrl: r2.url, refreshToken: n2, clientInformation: new j.Im({ clientId: i2.client_id, clientSecret: i2.client_secret, redirectUris: [...i2.redirect_uris ?? []] }) }));
    } catch (e3) {
      return { kind: "rpc_failed", error: e3 };
    }
    switch (o2.outcome.case) {
      case "migrated":
        return await e2.store.deleteCredentials(t2.authStorageKey), { kind: "migrated" };
      case "serverCopyKept":
        return await e2.store.deleteCredentials(t2.authStorageKey), { kind: "server_copy_kept" };
      default: {
        const r3 = (function(e3) {
          const t3 = e3.outcome;
          switch (t3.case) {
            case "invalidGrant":
              return { kind: "kept", reason: "invalid_grant", detail: t3.value.detail, retryable: false };
            case "reuseDetected":
              return { kind: "kept", reason: "reuse_detected", detail: t3.value.detail, retryable: false };
            case "providerError":
              return { kind: "kept", reason: "provider_error", detail: t3.value.detail, retryable: true };
            case "rejectedGrokRow":
              return { kind: "kept", reason: "rejected_grok_row", detail: "", retryable: false };
            case "notImplemented":
              return { kind: "kept", reason: "not_implemented", detail: t3.value.method, retryable: true };
            case "persistFailed":
              return { kind: "kept", reason: "persist_failed", detail: t3.value.detail, retryable: false };
            case "rejectedClientPlaced":
              return { kind: "kept", reason: "rejected_client_placed", detail: "", retryable: true };
            default:
              return { kind: "kept", reason: "unknown_outcome", detail: t3.case ?? "", retryable: true };
          }
        })(o2);
        return r3.retryable || e2.exhausted?.add(t2.authStorageKey), r3;
      }
    }
  }
  var H = r(9639), z = r(34175);
  const Q = { typeName: "aiserver.v1.McpToolService", methods: { listMcpTools: { name: "ListMcpTools", I: a.DY, O: a.Hl, kind: c.MethodKind.Unary }, callMcpTool: { name: "CallMcpTool", I: a.aB, O: a.Gv, kind: c.MethodKind.ServerStreaming }, respondToMcpElicitation: { name: "RespondToMcpElicitation", I: a.Rb, O: a.Zm, kind: c.MethodKind.Unary }, migrateMcpOAuthGrant: { name: "MigrateMcpOAuthGrant", I: a.ev, O: a.s6, kind: c.MethodKind.Unary }, setMcpServerPlacement: { name: "SetMcpServerPlacement", I: a.I, O: a.wC, kind: c.MethodKind.Unary } } };
  var V = r(34038);
  const X = "mcp_auth";
  function Y(e2) {
    return { clientKey: e2.serverIdentifier, providerIdentifier: e2.serverName, ...void 0 === e2.plugin ? {} : { plugin: e2.plugin }, ...void 0 === e2.marketplace ? {} : { marketplace: e2.marketplace }, ...void 0 === e2.pluginId ? {} : { pluginId: e2.pluginId }, ...void 0 === e2.marketplaceId ? {} : { marketplaceId: e2.marketplaceId }, toolName: X, name: (t2 = e2.serverIdentifier, `${t2}-${X}`), description: "Authenticate this MCP server. Call it with empty arguments when the server reports needsAuth or a tool call fails with an authentication error, then retry the original request.", inputSchema: { type: "object", properties: {}, additionalProperties: false } };
    var t2;
  }
  function Z(e2) {
    return e2.toolName === X;
  }
  const ee = "default", te = { rows: /* @__PURE__ */ new Map(), serverPlacedIdentifiers: /* @__PURE__ */ new Set(), serverPlacedUrls: /* @__PURE__ */ new Set() };
  function re(e2) {
    if (void 0 !== e2 && 0 !== e2.trim().length) return (0, h.Yl9)(e2);
  }
  function se(e2) {
    switch (e2) {
      case "connected":
      case "needsAuth":
      case "error":
      case "loading":
        return e2;
      default:
        return "loading";
    }
  }
  function ne(e2) {
    if (void 0 !== e2 && 0 !== e2.length) try {
      const t2 = JSON.parse(e2);
      return null === t2 || "object" != typeof t2 || Array.isArray(t2) ? void 0 : t2;
    } catch {
      return;
    }
  }
  function ie(e2) {
    return void 0 === e2 || 0 === e2.length ? void 0 : e2;
  }
  function oe(e2) {
    const t2 = (function(e3) {
      const t3 = ie(e3.plugin), r3 = ie(e3.marketplace), s3 = ie(e3.pluginDbId), n2 = ie(e3.marketplaceId);
      return { ...void 0 === t3 ? {} : { plugin: t3 }, ...void 0 === r3 ? {} : { marketplace: r3 }, ...void 0 === s3 ? {} : { pluginId: s3 }, ...void 0 === n2 ? {} : { marketplaceId: n2 } };
    })(e2), r2 = (function(e3) {
      return ie(e3.displayName) ?? e3.tools.find((e4) => e4.providerIdentifier.length > 0)?.providerIdentifier ?? e3.serverIdentifier;
    })(e2), s2 = e2.tools.map((s3) => (function(e3, t3, r3, s4) {
      const n2 = r3.toolName || r3.name;
      return { clientKey: e3.serverIdentifier, providerIdentifier: t3, ...s4, toolName: n2, name: r3.name || `${e3.serverIdentifier}-${n2}`, description: r3.description || void 0, inputSchema: (0, H.Hvh)(r3), outputSchema: (0, H.mku)(r3.outputSchemaJson), annotations: ne(r3.annotationsJson) };
    })(e2, r2, s3, t2));
    return { serverIdentifier: e2.serverIdentifier, rowServerIdentifier: e2.rowServerIdentifier || e2.serverIdentifier, serverName: r2, accountLabel: e2.accountLabel || ee, url: e2.url, normalizedUrl: re(e2.url), servedBy: e2.servedBy, status: se(e2.status), tools: s2, instructions: ie(e2.instructions), plugin: t2 };
  }
  function ae(e2) {
    return "needsAuth" === e2.status ? void 0 : e2.instructions;
  }
  function ce(e2, t2) {
    if (e2.serverPlacedIdentifiers.has(t2.identifier) || void 0 !== t2.authStorageKey && e2.serverPlacedIdentifiers.has(t2.authStorageKey)) return true;
    const r2 = re(t2.url);
    return void 0 !== r2 && e2.serverPlacedUrls.has(r2);
  }
  function le(e2, t2, r2) {
    const s2 = e2.rows.get(t2);
    if (void 0 === s2 || s2.status === r2) return e2;
    const n2 = new Map(e2.rows);
    return n2.set(t2, { ...s2, status: r2, tools: "needsAuth" === r2 ? [] : s2.tools }), { rows: n2, serverPlacedIdentifiers: e2.serverPlacedIdentifiers, serverPlacedUrls: e2.serverPlacedUrls };
  }
  function ue(e2, t2) {
    if (void 0 === e2.rows.get(t2)) return e2;
    const r2 = new Map(e2.rows);
    r2.delete(t2);
    const s2 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set();
    for (const e3 of r2.values()) s2.add(e3.serverIdentifier), s2.add(e3.rowServerIdentifier), void 0 !== e3.normalizedUrl && n2.add(e3.normalizedUrl);
    return { rows: r2, serverPlacedIdentifiers: s2, serverPlacedUrls: n2 };
  }
  function de(e2) {
    switch (e2) {
      case "connected":
        return "connected";
      case "needsAuth":
        return "needsAuth";
      case "error":
        return "error";
      case "loading":
        return "initializing";
    }
  }
  function he(e2) {
    const t2 = [...e2.serverPlacedIdentifiers].sort(), r2 = [...e2.serverPlacedUrls].sort();
    return `${t2.join("\0")}|${r2.join("\0")}`;
  }
  class pe {
    constructor(e2, t2) {
      this.row = e2, this.callTool_ = t2, this.config = void 0, this.serverName = e2.serverName, this.plugin = e2.plugin.plugin, this.marketplace = e2.plugin.marketplace, this.pluginId = e2.plugin.pluginId, this.marketplaceId = e2.plugin.marketplaceId;
    }
    async getTools(e2) {
      return this.row.tools.map((e3) => ({ name: e3.toolName, description: e3.description, inputSchema: e3.inputSchema, outputSchema: e3.outputSchema, title: e3.title, annotations: e3.annotations, _meta: e3._meta }));
    }
    callTool(e2, t2, r2, s2, n2) {
      const o2 = this.row.tools.find((e3) => e3.toolName === t2 || e3.name === t2);
      return void 0 === o2 ? Promise.reject(new i.U$(t2, this.row.tools.map((e3) => e3.toolName))) : this.callTool_(e2, this.row, o2.name, r2, s2, n2);
    }
    async getInstructions(e2) {
      return ae(this.row);
    }
    async getState(e2) {
      switch (this.row.status) {
        case "connected":
          return { kind: "ready" };
        case "needsAuth":
          return { kind: "requires_authentication", url: "", callback: async () => {
          } };
        case "error":
          return { kind: "error" };
        case "loading":
          return { kind: "loading" };
      }
    }
    async listResources(e2) {
      return { resources: [] };
    }
    async readResource(e2, t2) {
      throw new Error(`Resource ${t2.uri} is unavailable: server-placed MCP server "${this.row.serverIdentifier}" exposes tools only`);
    }
    async listPrompts(e2) {
      return [];
    }
    async getPrompt(e2, t2, r2) {
      throw new Error(`Prompt ${t2} is unavailable: server-placed MCP server "${this.row.serverIdentifier}" exposes tools only`);
    }
  }
  class fe {
    constructor(e2, t2) {
      this.message = t2, this.config = void 0, this.serverName = e2;
    }
    async getTools(e2) {
      return [];
    }
    async callTool() {
      throw new Error(this.message);
    }
    async getInstructions(e2) {
    }
    async getState(e2) {
      return { kind: "error", message: this.message };
    }
    async listResources(e2) {
      return { resources: [] };
    }
    async readResource() {
      throw new Error(this.message);
    }
    async listPrompts(e2) {
      return [];
    }
    async getPrompt() {
      throw new Error(this.message);
    }
  }
  const ge = (0, n.h)("placement-routing-mcp");
  function me(e2) {
    return JSON.stringify([e2.status, e2.instructions ?? null, [e2.plugin.plugin ?? null, e2.plugin.marketplace ?? null, e2.plugin.pluginId ?? null, e2.plugin.marketplaceId ?? null], e2.tools.map((e3) => [e3.name, e3.toolName, e3.providerIdentifier, e3.title ?? null, e3.description ?? null, e3.inputSchema ?? null, e3.outputSchema ?? null, e3.annotations ?? null])]);
  }
  class ve {
    constructor(e2) {
      this.options = e2, this.listeners = /* @__PURE__ */ new Set(), this.waitCapLogged = false, this.disposeCtx = (0, d.q6)(), this.snapshot = te, this.listingSeq = 0, this.appliedSeq = 0, this.pendingWaits = /* @__PURE__ */ new Set(), this.needsAuthMarks = /* @__PURE__ */ new Map(), this.needsAuthStreak = 0, this.needsAuthRowsKey = "", this.droppedRowMarks = /* @__PURE__ */ new Map(), this.withheldDefinitions = /* @__PURE__ */ new Map(), this.lastExcludedWrappedKeys = /* @__PURE__ */ new Set(), this.wrappedInputsSeq = 0, this.serializedTail = Promise.resolve(), this.loggedCollisions = /* @__PURE__ */ new Set(), this.pendingEvents = [], this.notifyScheduled = false, this.disposed = false, this.exhaustedGrantKeys = /* @__PURE__ */ new Set(), this.replacedLeases = [], this.client = e2.client ?? (void 0 !== e2.transport ? (0, V.UU)(Q, e2.transport) : void 0), this.listingTtlMs = e2.listingTtlMs ?? 3e4, this.listingRetryMs = e2.listingRetryMs ?? 5e3, this.listingWaitCapMs = e2.listingWaitCapMs, this.serveLastListingOnTtl = true === e2.serveLastListingOnTtl, this.serveLastListingOnChange = true === e2.serveLastListingOnChange, this.listingRefusedTtlMs = e2.listingRefusedTtlMs ?? 3e5, this.needsAuthBackoffMaxMs = e2.needsAuthBackoffMaxMs ?? 3e5, this.now = e2.now ?? (() => Date.now()), this.scheduleTimeout = e2.scheduleTimeout ?? ((e3, t2) => {
        const r2 = setTimeout(e3, t2);
        return () => clearTimeout(r2);
      });
    }
    getPlacementSnapshot() {
      return this.snapshot;
    }
    isPlacementKnown() {
      return void 0 === this.client || void 0 !== this.snapshotAt;
    }
    getListingError() {
      return this.listingError;
    }
    isServerPlaced(e2) {
      return this.snapshot.serverPlacedIdentifiers.has(e2);
    }
    async refreshPlacements(e2) {
      this.resetNeedsAuthBackoff(), await this.ensureSnapshot(e2, true);
      const { snapshot: t2 } = await this.ensureWrappedLease(e2);
      return t2;
    }
    noteGrantChanged(e2, t2) {
      this.disposed || (this.needsAuthMarks.delete(t2), this.markListingStale(), this.grantChangedSinceSeq = this.listingSeq, this.invalidateListing(e2));
    }
    async mergeSnapshots(e2, t2) {
      const { snapshot: r2, lease: s2 } = await this.resolve(e2), n2 = this.excludedWrappedKeys(r2, await this.wrappedClients(e2, s2));
      return this.lastExcludedWrappedKeys = n2, [...t2.filter((e3) => !n2.has(e3.serverIdentifier)), ...[...r2.rows.values()].map((e3) => (function(e4, t3) {
        return { serverIdentifier: e4.serverIdentifier, serverName: e4.serverName, ...e4.plugin, status: de(e4.status), tools: ("needsAuth" === e4.status ? [] : e4.tools).map((e5) => ({ name: e5.toolName, description: e5.description, inputSchema: e5.inputSchema, outputSchema: e5.outputSchema, title: e5.title, annotations: e5.annotations, _meta: e5._meta })), resources: [], prompts: [], instructions: ae(e4), snapshotGeneration: t3 };
      })(e3, this.appliedSeq))];
    }
    async migrateGrantsForServerPlaced(e2) {
      return await this.resolve(e2), this.pendingGrantMigration() ?? this.runGrantMigration(e2);
    }
    pendingGrantMigration() {
      return this.grantMigrationLatest;
    }
    async getTools(e2) {
      const { snapshot: t2, lease: r2 } = await this.resolve(e2);
      return (await this.buildCatalog(e2, t2, r2)).tools;
    }
    async buildCatalog(e2, t2, r2) {
      const s2 = await this.wrappedClients(e2, r2), n2 = this.excludedWrappedKeys(t2, s2);
      this.lastExcludedWrappedKeys = n2;
      const i2 = (await r2.getTools(e2)).filter((e3) => !n2.has(e3.clientKey)), o2 = await this.wrappedNeedsAuthTools(e2, s2, n2, i2), a2 = /* @__PURE__ */ new Map(), c2 = (e3, t3) => {
        const r3 = a2.get(e3.name);
        if (void 0 === r3) return void a2.set(e3.name, t3);
        const s3 = "ambiguous" === r3.kind ? r3.tools : [r3.tool];
        a2.set(e3.name, { kind: "ambiguous", tools: [...s3, e3] });
      };
      for (const e3 of [...i2, ...o2]) c2(e3, { kind: "wrapped", tool: e3, providerHost: q(s2[e3.clientKey]) });
      const l2 = [];
      for (const e3 of t2.rows.values()) {
        const t3 = "needsAuth" === e3.status ? [Y({ serverIdentifier: e3.serverIdentifier, serverName: e3.serverName, ...e3.plugin })] : e3.tools;
        for (const r3 of t3) l2.push(r3), c2(r3, { kind: "server", row: e3, tool: r3 });
      }
      const u2 = /* @__PURE__ */ new Set();
      for (const [t3, r3] of a2) {
        if ("ambiguous" !== r3.kind) continue;
        u2.add(t3);
        const s3 = r3.tools.map((e3) => e3.clientKey).sort(), n3 = `${t3}\0${s3.join("\0")}`;
        this.loggedCollisions.has(n3) || (this.loggedCollisions.add(n3), ge.warn(e2, "MCP tool name bound on more than one side; withholding it and failing closed on calls", { name: t3, servers: s3 }));
      }
      return { tools: [...i2, ...o2, ...l2].filter((e3) => !u2.has(e3.name)), bindings: a2 };
    }
    async getToolsForServers(e2, t2) {
      const r2 = new Set(t2);
      return (await this.getTools(e2)).filter((e3) => r2.has(e3.clientKey));
    }
    async getToolSet(e2) {
      const { snapshot: t2, lease: r2 } = await this.resolve(e2), s2 = await r2.getToolSet(e2), { bindings: n2 } = await this.buildCatalog(e2, t2, r2);
      return { execute: async (t3, r3, o2, a2) => {
        const c2 = n2.get(t3);
        if (void 0 === c2 || "ambiguous" === c2.kind) throw this.resetNeedsAuthBackoff(), this.invalidateListing(e2), new i.U$(t3, [...n2.keys()].filter((e3) => "ambiguous" !== n2.get(e3)?.kind));
        if (Z(c2.tool)) throw new Error(`${c2.tool.toolName} for MCP server "${c2.tool.clientKey}" is an interactive authentication step handled by the agent loop, not a callable tool`);
        if ("wrapped" === c2.kind) return this.callWrapped(e2, c2, o2, () => s2.execute(t3, r3, o2, a2));
        try {
          return await this.callServerPlaced(e2, c2.row, c2.tool.name, r3, o2, a2?.createProvider(c2.row.serverName, c2.tool.toolName, o2));
        } catch (t4) {
          if (!(function(e3) {
            return e3 instanceof Error && "PlacementRoutingNotDialedError" === e3.name;
          })(t4)) throw t4;
          return this.recoverFromNotDialed(e2, t4, c2.row, c2.tool, r3, o2, a2);
        }
      } };
    }
    async recoverFromNotDialed(e2, t2, r2, s2, n2, i2, o2) {
      const { serverIdentifier: a2 } = r2;
      ge.info(e2, "Routed MCP call refused as not dialed; dropping the row and re-listing placement", { serverIdentifierHash: I(a2), placement: t2.placement, toolCallId: i2 }), this.dropRow(a2), this.needsAuthMarks.delete(a2);
      const { landed: c2 } = await this.relistNow(e2);
      if (c2 && this.snapshot.rows.has(a2)) throw t2;
      const { snapshot: l2, lease: u2 } = await this.ensureWrappedLease(e2), { bindings: d2 } = await this.buildCatalog(e2, l2, u2), h2 = this.localKeysForRow(r2, await this.wrappedClients(e2, u2)), p2 = [...d2.values()].find((e3) => "wrapped" === e3.kind && !Z(e3.tool) && h2.has(e3.tool.clientKey) && e3.tool.toolName === s2.toolName);
      if (void 0 !== p2) {
        ge.info(e2, "Retrying refused MCP call through the wrapped lease", { serverIdentifierHash: I(a2), toolCallId: i2 });
        const t3 = await u2.getToolSet(e2);
        return this.callWrapped(e2, p2, i2, () => t3.execute(p2.tool.name, n2, i2, o2));
      }
      const f2 = [...d2.values()].find((e3) => "wrapped" === e3.kind && Z(e3.tool) && h2.has(e3.tool.clientKey));
      if (void 0 !== f2) throw new Error(`MCP server "${a2}" now runs on this machine and requires authentication here; call ${f2.tool.name} to sign in locally, then retry.`);
      if (!c2) throw new Error(`MCP server "${a2}" is no longer dialed by Cursor's servers and its placement is still being re-listed; retry "${s2.name}" on the next turn.`);
      throw new Error(`MCP server "${a2}" now runs on this machine; its tools are listed from this machine on the next turn, and "${s2.name}" is not among them yet.`);
    }
    localKeysForRow(e2, t2) {
      const r2 = /* @__PURE__ */ new Set([e2.serverIdentifier, e2.rowServerIdentifier]);
      if (void 0 === e2.normalizedUrl) return r2;
      for (const [s2, n2] of Object.entries(t2)) {
        const t3 = n2.config;
        re(void 0 !== t3 && "url" in t3 ? t3.url : void 0) === e2.normalizedUrl && r2.add(s2);
      }
      return r2;
    }
    async relistNow(e2) {
      this.markListingStale();
      const { landed: t2 } = await this.awaitListingBounded(e2, this.startOrJoinListing(e2), "refusal");
      return { landed: t2 };
    }
    markListingStale() {
      this.staleSinceSeq = this.listingSeq, this.resetNeedsAuthBackoff();
    }
    resetNeedsAuthBackoff() {
      this.needsAuthStreak = 0, this.needsAuthRowsKey = "";
    }
    noteNeedsAuthRows(e2, t2) {
      if (void 0 !== this.staleSinceSeq && t2 <= this.staleSinceSeq) return;
      const r2 = [...e2.rows.values()].filter((e3) => "needsAuth" === e3.status).map((e3) => e3.serverIdentifier).sort().join("\0");
      "" !== r2 ? (this.needsAuthStreak = r2 === this.needsAuthRowsKey ? this.needsAuthStreak + 1 : 1, this.needsAuthRowsKey = r2) : this.resetNeedsAuthBackoff();
    }
    needsAuthBackoffTtlMs() {
      return this.needsAuthStreak <= 1 || this.listingTtlMs >= this.needsAuthBackoffMaxMs ? this.listingTtlMs : Math.min(this.listingTtlMs * 2 ** (this.needsAuthStreak - 1), this.needsAuthBackoffMaxMs);
    }
    onWrappedChange(e2, t2, r2) {
      if (void 0 === this.snapshotAt) return;
      const s2 = r2?.serverIdentifiers;
      void 0 !== s2 && s2.some((e3) => this.snapshot.serverPlacedIdentifiers.has(e3) || this.lastExcludedWrappedKeys.has(e3) || this.withheldDefinitions.has(e3)) ? this.relistForWrappedChange(e2) : void 0 === s2 && r2?.reason === H.Jdl.Status || this.readWrappedInputs(e2, t2, "change");
    }
    relistForWrappedChange(e2) {
      this.markListingStale(), this.invalidateListing(e2, this.listingRetryMs);
    }
    readWrappedInputs(e2, t2, r2) {
      const s2 = ++this.wrappedInputsSeq;
      (async function(e3, t3) {
        const r3 = await t3.getClients(e3), s3 = /* @__PURE__ */ new Map();
        return await Promise.all(Object.entries(r3).map(async ([t4, r4]) => {
          const n2 = (function(e4) {
            const t5 = void 0 !== e4 && "url" in e4 ? e4.url.trim() : void 0;
            return void 0 !== t5 && /^https?:\/\//i.test(t5) ? t5 : void 0;
          })(r4.config);
          if (void 0 === n2) return;
          const i2 = await (async function(e4, t5) {
            try {
              const r5 = await t5.getState(e4);
              return "requires_authentication" === r5.kind || "error" === r5.kind ? r5.kind : "";
            } catch {
              return "unreadable";
            }
          })(e3, r4), o2 = (0, l.createHash)("sha256").update(JSON.stringify([(a2 = r4.config, JSON.stringify(a2, (e4, t5) => null === t5 || "object" != typeof t5 || Array.isArray(t5) ? t5 : Object.fromEntries(Object.entries(t5).sort(([e5], [t6]) => e5 < t6 ? -1 : e5 > t6 ? 1 : 0)))), i2])).digest("hex");
          var a2;
          s3.set(t4, { url: n2, inputs: o2 });
        })), s3;
      })(e2, t2).then((n2) => {
        const i2 = this.wrapped;
        if (this.disposed || i2?.lease !== t2) return;
        const o2 = this.wrappedInputs;
        if (void 0 !== o2 && o2.seq > s2) return;
        const a2 = { rows: n2, placementKnown: i2.placementKnown, snapshots: [this.snapshot, i2.snapshot], seq: s2 };
        this.wrappedInputs = a2;
        const c2 = void 0 === o2 ? "change" === r2 : o2.placementKnown === a2.placementKnown && (function(e3, t3) {
          const r3 = [...e3.snapshots, ...t3.snapshots], s3 = /* @__PURE__ */ new Set([...e3.rows.keys(), ...t3.rows.keys()]);
          for (const n3 of s3) {
            const s4 = e3.rows.get(n3), i3 = t3.rows.get(n3);
            if (s4?.inputs === i3?.inputs) continue;
            const o3 = i3?.url ?? s4?.url, a3 = r3.map((e4) => ce(e4, { identifier: n3, url: o3 }));
            if (a3.every((e4) => e4 === a3[0])) return true;
          }
          return false;
        })(o2, a2);
        c2 && this.relistForWrappedChange(e2);
      }, (s3) => {
        this.disposed || this.wrapped?.lease !== t2 || "build" === r2 || (ge.warn(e2, "Wrapped lease clients unavailable after a change; re-listing", { error: s3 }), this.relistForWrappedChange(e2));
      });
    }
    dropRow(e2) {
      this.droppedRowMarks.set(e2, this.listingSeq);
      const t2 = ue(this.snapshot, e2);
      t2 !== this.snapshot && this.applySnapshot(t2, false);
    }
    invalidateListing(e2, t2 = 0) {
      if (void 0 === this.client || this.disposed) return;
      const r2 = this.now();
      this.inListingBackoff(r2) || t2 > 0 && void 0 !== this.snapshotAt && r2 - this.snapshotAt < t2 || this.startOrJoinListing(e2);
    }
    async getClients(e2) {
      const { snapshot: t2, lease: r2 } = await this.resolve(e2), s2 = await r2.getClients(e2), n2 = this.excludedWrappedKeys(t2, s2), i2 = {};
      for (const [e3, t3] of Object.entries(s2)) n2.has(e3) || (i2[e3] = t3);
      for (const e3 of t2.rows.values()) i2[e3.serverIdentifier] = this.createServerPlacedClient(e3);
      for (const [e3, t3] of this.withheldDefinitions) i2[e3] ??= this.createWithheldClient(t3);
      return i2;
    }
    async getClient(e2, t2) {
      const { snapshot: r2, lease: s2 } = await this.resolve(e2), n2 = r2.rows.get(t2) ?? [...r2.rows.values()].find((e3) => e3.rowServerIdentifier === t2 && e3.accountLabel === ee);
      if (void 0 !== n2) return this.createServerPlacedClient(n2);
      if (r2.serverPlacedIdentifiers.has(t2)) return;
      const i2 = this.withheldDefinitions.get(t2);
      if (void 0 !== i2) return this.createWithheldClient(i2);
      const o2 = await s2.getClient(e2, t2);
      return void 0 !== o2 && this.excludedWrappedKeys(r2, { [t2]: o2 }).has(t2) ? void 0 : o2;
    }
    excludedWrappedKeys(e2, t2) {
      const r2 = /* @__PURE__ */ new Set();
      for (const [s2, n2] of Object.entries(t2)) {
        const t3 = n2.config;
        ce(e2, { identifier: s2, url: void 0 !== t3 && "url" in t3 ? t3.url : void 0 }) && r2.add(s2);
      }
      for (const t3 of e2.serverPlacedIdentifiers) r2.add(t3);
      return r2;
    }
    async wrappedClients(e2, t2) {
      try {
        return await t2.getClients(e2);
      } catch (t3) {
        return ge.warn(e2, "Wrapped MCP lease getClients failed", { error: t3 }), {};
      }
    }
    createWithheldClient(e2) {
      const t2 = this.listingError?.error, r2 = t2 instanceof Error ? t2.message : void 0 === t2 ? "" : String(t2);
      return new fe(e2.identifier, `MCP server "${e2.identifier}" is not connected: its placement is unknown because ListMcpTools failed` + (r2 ? ` (${r2})` : "") + ". It will connect once the backend answers.");
    }
    async getInstructions(e2) {
      const { snapshot: t2, lease: r2 } = await this.resolve(e2), s2 = this.excludedWrappedKeys(t2, await this.wrappedClients(e2, r2)), n2 = [...t2.rows.values()].flatMap((e3) => {
        const t3 = ae(e3);
        return void 0 === t3 ? [] : [new z.I0({ serverIdentifier: e3.serverIdentifier, serverName: e3.serverName, instructions: t3 })];
      });
      return [...(await r2.getInstructions(e2)).filter((e3) => !s2.has(e3.serverIdentifier)), ...n2];
    }
    onDidChange(e2) {
      return this.listeners.add(e2), { dispose: () => {
        this.listeners.delete(e2);
      } };
    }
    dispose() {
      if (!this.disposed) {
        this.disposed = true, this.listeners.clear();
        for (const e2 of [...this.pendingWaits]) e2("capped");
        this.serialized(async () => {
          const e2 = this.wrapped;
          this.wrapped = void 0, void 0 !== e2 && (e2.subscription.dispose(), await this.disposeWrappedLease(e2.lease));
        });
      }
    }
    serialized(e2) {
      const t2 = this.serializedTail.then(e2, e2);
      return this.serializedTail = t2.then(() => {
      }, () => {
      }), t2;
    }
    async resolve(e2) {
      this.assertNotDisposed(), await this.ensureSnapshot(e2, false);
      const { snapshot: t2, lease: r2 } = await this.ensureWrappedLease(e2);
      return { snapshot: t2, lease: r2 };
    }
    assertNotDisposed() {
      if (this.disposed) throw new Error("PlacementRoutingMcpProvider has been disposed");
    }
    listingDue(e2) {
      if (this.inListingBackoff(e2)) return false;
      if (void 0 === this.snapshotAt || void 0 !== this.staleSinceSeq) return true;
      if (void 0 !== this.listingError) return true;
      if (void 0 !== this.refusedAt) return e2 - this.snapshotAt >= this.listingRefusedTtlMs;
      const t2 = this.needsAuthMarks.size > 0 ? Math.min(this.listingTtlMs, this.listingRetryMs) : this.needsAuthBackoffTtlMs();
      return e2 - this.snapshotAt >= t2;
    }
    inListingBackoff(e2) {
      const t2 = this.listingError;
      return !(void 0 === t2 || e2 - t2.failedAt >= this.listingRetryMs) && (void 0 === this.staleSinceSeq || t2.requestSeq > this.staleSinceSeq);
    }
    ensureSnapshot(e2, t2) {
      if (void 0 === this.client) return Promise.resolve(this.snapshot);
      if (t2) return this.startOrJoinListing(e2).done.then(() => this.snapshot);
      if (!this.listingDue(this.now())) return Promise.resolve(this.snapshot);
      const r2 = this.startOrJoinListing(e2), s2 = void 0 === this.snapshotAt ? "cold" : void 0 !== this.staleSinceSeq ? "change" : void 0;
      return void 0 === s2 && this.serveLastListingOnTtl ? Promise.resolve(this.snapshot) : "change" === s2 && this.serveLastListingOnChange && void 0 === this.grantChangedSinceSeq ? (this.recordListingWait(e2, this.now(), s2, "served_last"), Promise.resolve(this.snapshot)) : this.awaitListingBounded(e2, r2, s2 ?? "cold").then(({ snapshot: e3 }) => e3);
    }
    awaitListingBounded(e2, t2, r2) {
      const s2 = this.now(), n2 = this.listingWaitCapMs;
      return new Promise((i2) => {
        let o2, a2 = false;
        const c2 = (t3) => {
          a2 || (a2 = true, o2?.(), this.pendingWaits.delete(c2), this.disposed || this.recordListingWait(e2, s2, r2, t3), i2({ snapshot: this.snapshot, landed: "listed" === t3 }));
        };
        this.pendingWaits.add(c2), void 0 !== n2 && (o2 = this.scheduleTimeout(() => c2("capped"), n2)), t2.done.then(() => c2(this.appliedSeq >= t2.seq ? "listed" : "failed"));
      });
    }
    recordListingWait(e2, t2, r2, s2) {
      "capped" !== s2 || this.waitCapLogged || (this.waitCapLogged = true, ge.warn(e2, "ListMcpTools did not answer within the read wait cap; proceeding on the last listing", { waitCapMs: this.listingWaitCapMs, trigger: r2, placementKnown: void 0 !== this.snapshotAt, rowsRetained: this.snapshot.rows.size })), (function(e3) {
        if (void 0 !== e3.metrics) try {
          e3.metrics.distribution({ stat: "mcp_tool.placement_listing.wait_ms", value: e3.waitedMs, tags: { trigger: e3.trigger, outcome: e3.outcome } });
        } catch (t3) {
          S.warn(e3.ctx, "MCP placement listing wait metrics sink threw", { error: t3 });
        }
      })({ ctx: e2, metrics: this.options.metrics, waitedMs: this.now() - t2, trigger: r2, outcome: s2 });
    }
    startOrJoinListing(e2) {
      const t2 = this.snapshotInFlight;
      if (void 0 !== t2 && (void 0 === this.staleSinceSeq || t2.seq > this.staleSinceSeq)) return t2;
      const r2 = this.client;
      if (void 0 === r2) return { seq: this.listingSeq, done: Promise.resolve() };
      const s2 = ++this.listingSeq, n2 = (async () => {
        try {
          const e3 = await r2.listMcpTools(new a.DY({ serverIdentifiers: [], mcpConfigJson: this.options.mcpConfigJson }));
          if (this.disposed || s2 <= this.appliedSeq) return;
          const t3 = this.withoutStaleDroppedRows(this.preserveNewerNeedsAuthMarks((function(e4) {
            const t4 = /* @__PURE__ */ new Map(), r3 = /* @__PURE__ */ new Set(), s3 = /* @__PURE__ */ new Set();
            for (const n4 of e4.servers) {
              if (n4.placement !== a.MC.SERVER) continue;
              if (0 === n4.serverIdentifier.length) continue;
              const e5 = oe(n4);
              t4.set(e5.serverIdentifier, e5), r3.add(e5.serverIdentifier), r3.add(e5.rowServerIdentifier), void 0 !== e5.normalizedUrl && s3.add(e5.normalizedUrl);
            }
            return { rows: t4, serverPlacedIdentifiers: r3, serverPlacedUrls: s3 };
          })(e3), s2), s2), n3 = void 0 === this.snapshotAt;
          this.listingError = void 0, this.waitCapLogged = false, this.refusedAt = void 0, this.noteNeedsAuthRows(t3, s2), this.snapshotAt = this.now(), this.appliedSeq = s2, this.clearMarksAnsweredBy(s2), this.applySnapshot(t3, n3);
        } catch (t3) {
          if (s2 <= this.appliedSeq) return;
          if (!this.disposed && (function(e3) {
            if (e3 instanceof f.T) return e3.code === p.C.PermissionDenied;
            if (!(e3 instanceof Error) || "ConnectError" !== e3.name) return false;
            const t4 = e3.code;
            return t4 === p.C.PermissionDenied || "PermissionDenied" === t4;
          })(t3)) {
            const t4 = this.withoutStaleDroppedRows(this.preserveNewerNeedsAuthMarks(te, s2), s2), r3 = void 0 === this.snapshotAt;
            return this.listingError = void 0, this.waitCapLogged = false, this.resetNeedsAuthBackoff(), this.snapshotAt = this.now(), this.refusedAt = this.snapshotAt, this.appliedSeq = s2, this.clearMarksAnsweredBy(s2), ge.info(e2, "ListMcpTools refused: hosted MCP is not enabled for this account", { rowsReleased: this.snapshot.rows.size }), void this.applySnapshot(t4, r3);
          }
          this.listingError = { error: t3, failedAt: this.now(), requestSeq: s2 }, ge.warn(e2, "ListMcpTools failed", { error: t3, placementKnown: void 0 !== this.snapshotAt, rowsRetained: this.snapshot.rows.size });
        } finally {
          this.snapshotInFlight?.seq === s2 && (this.snapshotInFlight = void 0);
        }
      })(), i2 = { seq: s2, done: n2 };
      return this.snapshotInFlight = i2, i2;
    }
    clearMarksAnsweredBy(e2) {
      void 0 !== this.staleSinceSeq && e2 > this.staleSinceSeq && (this.staleSinceSeq = void 0), void 0 !== this.grantChangedSinceSeq && e2 > this.grantChangedSinceSeq && (this.grantChangedSinceSeq = void 0);
    }
    preserveNewerNeedsAuthMarks(e2, t2) {
      let r2 = e2;
      for (const [s2, n2] of this.needsAuthMarks) !e2.rows.has(s2) || t2 > n2 ? this.needsAuthMarks.delete(s2) : r2 = le(r2, s2, "needsAuth");
      return r2;
    }
    withoutStaleDroppedRows(e2, t2) {
      let r2 = e2;
      for (const [e3, s2] of this.droppedRowMarks) t2 > s2 ? this.droppedRowMarks.delete(e3) : r2 = ue(r2, e3);
      return r2;
    }
    applySnapshot(e2, t2) {
      const r2 = this.snapshot;
      if (this.snapshot = e2, t2) return void this.scheduleNotify({ reason: H.Jdl.Snapshots });
      if (he(r2) !== he(e2)) return void this.scheduleNotify({ reason: H.Jdl.Snapshots });
      const s2 = (function(e3, t3) {
        const r3 = /* @__PURE__ */ new Set();
        for (const [s3, n2] of t3.rows) {
          const t4 = e3.rows.get(s3);
          void 0 !== t4 && me(t4) === me(n2) || r3.add(s3);
        }
        for (const s3 of e3.rows.keys()) t3.rows.has(s3) || r3.add(s3);
        return [...r3];
      })(r2, e2);
      s2.length > 0 && this.scheduleNotify({ serverIdentifiers: s2, reason: H.Jdl.Snapshots });
    }
    wrappedLeaseKey(e2, t2) {
      return `${t2 ? "known" : "unknown"}|${he(e2)}`;
    }
    async ensureWrappedLease(e2) {
      for (; ; ) {
        this.assertNotDisposed();
        const t2 = this.snapshot, r2 = this.wrapped;
        if (void 0 !== r2 && r2.key === this.wrappedLeaseKey(t2, this.isPlacementKnown())) return { snapshot: t2, lease: r2.lease };
        await this.serialized(() => this.rebuildWrappedLeaseIfStale(e2));
      }
    }
    async rebuildWrappedLeaseIfStale(e2) {
      this.assertNotDisposed();
      const t2 = this.snapshot, r2 = this.isPlacementKnown(), s2 = this.wrappedLeaseKey(t2, r2);
      void 0 !== this.wrapped && this.wrapped.key === s2 || await this.buildWrappedLease(e2, t2, s2, r2);
    }
    async buildWrappedLease(e2, t2, r2, s2) {
      const n2 = /* @__PURE__ */ new Map(), i2 = await this.options.createWrappedLease(e2, { placementKnown: s2, serverPlacedIdentifiers: t2.serverPlacedIdentifiers, serverPlacedUrls: t2.serverPlacedUrls, includeDefinition: (e3) => "http" !== e3.kind || s2 ? !ce(t2, e3) : (n2.set(e3.identifier, e3), false) });
      if (this.disposed) throw this.disposeWrappedLease(i2), new Error("PlacementRoutingMcpProvider has been disposed");
      const o2 = i2.onDidChange((t3) => {
        this.scheduleNotify(t3), this.onWrappedChange(e2, i2, t3);
      }), a2 = this.wrapped;
      return this.wrapped = { lease: i2, key: r2, placementKnown: s2, snapshot: t2, subscription: o2 }, this.withheldDefinitions = n2, this.readWrappedInputs(e2, i2, "build"), void 0 !== a2 && (a2.subscription.dispose(), this.replacedLeases.push({ lease: a2.lease, disposal: this.disposeWrappedLease(a2.lease) })), s2 && true === this.options.grantMigration?.migrationEnabled && t2.rows.size > 0 && this.runGrantMigration(e2).catch((t3) => {
        ge.warn(e2, "Automatic MCP grant migration pass failed", { error: t3 });
      }), i2;
    }
    runGrantMigration(e2) {
      const t2 = this.options.grantMigration;
      if (void 0 === t2 || !t2.migrationEnabled || void 0 === this.client) return Promise.resolve([]);
      if (void 0 !== this.grantMigrationQueued) return this.grantMigrationQueued;
      const r2 = this.client, s2 = this.serialized(() => (this.grantMigrationQueued === s2 && (this.grantMigrationQueued = void 0), this.disposed ? Promise.resolve([]) : this.executeGrantMigrationPass(e2, t2, r2)));
      return this.grantMigrationQueued = s2, this.grantMigrationLatest = s2, s2.then(() => this.forgetGrantMigration(s2), () => this.forgetGrantMigration(s2)), s2;
    }
    forgetGrantMigration(e2) {
      this.grantMigrationQueued === e2 && (this.grantMigrationQueued = void 0), this.grantMigrationLatest === e2 && (this.grantMigrationLatest = void 0);
    }
    async executeGrantMigrationPass(e2, t2, r2) {
      const s2 = this.snapshot;
      if (!(void 0 !== this.wrapped && this.wrapped.key === this.wrappedLeaseKey(s2, this.isPlacementKnown())) || 0 === s2.rows.size) return [];
      const n2 = await t2.listLocalGrants(e2), i2 = await (async function(e3, t3) {
        const r3 = [], s3 = t3.migrationEnabled ? G(t3.serverPlacedRows, t3.grants) : void 0;
        for (const n3 of t3.grants) {
          if (void 0 === s3) {
            r3.push({ ref: n3, outcome: { kind: "skipped", reason: "migration_disabled" } });
            continue;
          }
          const i3 = s3.get(n3) ?? { skipped: "not_server_placed" };
          if ("skipped" in i3) {
            "url_mismatch" === i3.skipped && W.warn(e3, "MCP grant not migrated: local definition names a server-placed row but dials a different URL", { serverIdentifierHash: I(n3.serverIdentifier) }), r3.push({ ref: n3, outcome: { kind: "skipped", reason: i3.skipped } });
            continue;
          }
          const o2 = await K(t3, n3, i3.row);
          "rpc_failed" === o2.kind || "disconnect_failed" === o2.kind ? W.warn(e3, "MCP grant migration step failed; keeping the local record", { serverIdentifierHash: I(n3.serverIdentifier), step: o2.kind, error: o2.error }) : W.info(e3, "MCP grant migration outcome", { serverIdentifierHash: I(n3.serverIdentifier), outcome: o2.kind, ..."reason" in o2 ? { reason: o2.reason } : {} }), r3.push({ ref: n3, outcome: o2 });
        }
        return r3;
      })(e2, { migrationEnabled: true, client: r2, store: t2.store, grants: n2, serverPlacedRows: [...s2.rows.values()], disconnect: async () => {
        if (!await this.settleReplacedLeases()) throw new Error("a replaced wrapped MCP lease did not dispose cleanly; the grant may still be in local use");
      }, stillServerPlaced: (e3) => {
        const t3 = this.snapshot.rows.get(e3.serverIdentifier);
        return void 0 !== t3 && t3.normalizedUrl === e3.normalizedUrl;
      }, exhausted: this.exhaustedGrantKeys });
      return i2.some((e3) => "migrated" === e3.outcome.kind || "server_copy_kept" === e3.outcome.kind) && !this.disposed && await this.ensureSnapshot(e2, true), i2;
    }
    async settleReplacedLeases() {
      for (; ; ) {
        const e2 = [...this.replacedLeases];
        if (0 === e2.length) return true;
        const t2 = /* @__PURE__ */ new Set();
        if (await Promise.all(e2.map(async (e3) => {
          let r2 = await e3.disposal;
          r2 || (e3.disposal = this.disposeWrappedLease(e3.lease), r2 = await e3.disposal), r2 && t2.add(e3);
        })), this.replacedLeases = this.replacedLeases.filter((e3) => !t2.has(e3)), !e2.every((e3) => t2.has(e3))) return false;
      }
    }
    async disposeWrappedLease(e2) {
      try {
        return await e2.dispose?.(), true;
      } catch (e3) {
        return ge.warn(this.disposeCtx, "Wrapped MCP lease dispose failed", { error: e3 }), false;
      }
    }
    scheduleNotify(e2) {
      this.disposed || (this.pendingEvents.push(e2), this.notifyScheduled || (this.notifyScheduled = true, queueMicrotask(() => {
        if (this.notifyScheduled = false, this.disposed) return;
        const e3 = (function(e4) {
          let t2, r2 = false;
          const s2 = /* @__PURE__ */ new Set();
          for (const n2 of e4) if (t2 ??= n2?.reason, (0, H._1u)(n2)) r2 = true;
          else for (const e5 of n2?.serverIdentifiers ?? []) s2.add(e5);
          return r2 ? void 0 === t2 ? void 0 : { reason: t2 } : { serverIdentifiers: [...s2], reason: t2 };
        })(this.pendingEvents);
        this.pendingEvents = [];
        for (const t2 of this.listeners) try {
          t2(e3);
        } catch (e4) {
          ge.warn(this.disposeCtx, "MCP lease change listener threw", { error: e4 });
        }
      })));
    }
    async wrappedNeedsAuthTools(e2, t2, r2, s2) {
      const n2 = new Set(s2.map((e3) => e3.clientKey)), i2 = [];
      for (const [s3, o2] of Object.entries(t2)) if (!n2.has(s3) && !r2.has(s3)) try {
        "requires_authentication" === (await o2.getState(e2)).kind && i2.push(Y({ serverIdentifier: s3, serverName: o2.serverName, plugin: o2.plugin, marketplace: o2.marketplace, pluginId: o2.pluginId, marketplaceId: o2.marketplaceId }));
      } catch {
      }
      return i2;
    }
    createServerPlacedClient(e2) {
      return new pe(e2, (e3, t2, r2, s2, n2, i2) => this.callServerPlaced(e3, t2, r2, s2, n2, i2));
    }
    async callWrapped(e2, t2, r2, s2) {
      const n2 = this.now();
      let i2 = "error", o2 = "none";
      try {
        const e3 = await s2();
        return i2 = b(e3), e3;
      } catch (e3) {
        throw i2 = _(e3), o2 = J(e3), e3;
      } finally {
        T({ ctx: e2, metrics: this.options.metrics, placement: "client", caller: E(this.options.caller, e2), providerHost: t2.providerHost, serverIdentifier: t2.tool.clientKey, toolCallId: r2 ?? "", conversationId: P(e2), outcome: i2, reason: o2, durationMs: this.now() - n2, elicitationCount: 0 });
      }
    }
    async callServerPlaced(e2, t2, r2, s2, n2, i2) {
      if (void 0 === this.client) throw new Error(`MCP server "${t2.serverIdentifier}" is server-placed but this host has no McpToolService transport`);
      const o2 = E(this.options.caller, e2), u2 = P(e2), d2 = new a.aB({ serverIdentifier: t2.serverIdentifier, toolName: r2, args: c.Struct.fromJson(s2), accountKey: t2.accountLabel, toolCallId: n2 ?? "", conversationId: u2, caller: o2, deviceTag: this.options.deviceTag ?? "", clientApproved: this.options.clientApproved ?? true, mcpConfigJson: this.options.mcpConfigJson }), h2 = (0, l.randomUUID)(), p2 = this.now();
      let f2, g2 = "error", v2 = 0;
      try {
        const r3 = await (async function(e3) {
          const t3 = e3.request.serverIdentifier, r4 = new AbortController(), s3 = /* @__PURE__ */ new Map();
          let n3;
          const i3 = void 0 === e3.requestId ? e3.client.callMcpTool(e3.request) : e3.client.callMcpTool(e3.request, { headers: { "x-request-id": e3.requestId } });
          try {
            for await (const t4 of i3) {
              const i4 = t4;
              switch (i4.event.case) {
                case "progress": {
                  const t5 = i4.event.value;
                  e3.onProgress?.({ progress: t5.progress, total: t5.total, message: t5.message });
                  break;
                }
                case "elicitationRequest": {
                  e3.onElicitationRequest?.();
                  const t5 = i4.event.value.requestId, n4 = new AbortController();
                  s3.set(t5, n4), B({ ctx: e3.ctx, client: e3.client, toolCallId: e3.request.toolCallId, request: i4.event.value, elicitationProvider: e3.elicitationProvider, signal: AbortSignal.any([r4.signal, n4.signal]) }).finally(() => {
                    s3.get(t5) === n4 && s3.delete(t5);
                  }).catch(() => {
                  });
                  break;
                }
                case "elicitationClosed":
                  s3.get(i4.event.value.requestId)?.abort(), s3.delete(i4.event.value.requestId);
                  break;
                case "outcome":
                  n3 = i4.event.value;
              }
            }
          } catch (n4) {
            throw r4.abort(), D.warn(e3.ctx, "CallMcpTool stream failed", { serverIdentifier: t3, toolCallId: e3.request.toolCallId, ...void 0 === e3.requestId ? {} : { requestId: e3.requestId }, openElicitations: s3.size, error: n4 }), n4;
          }
          if (r4.abort(), void 0 === n3) throw e3.onFailureReason?.("stream_no_outcome"), new Error(`CallMcpTool stream for MCP server "${t3}" ended without an outcome`);
          const o3 = A(n3);
          return "none" !== o3 && e3.onFailureReason?.(o3), F(t3, n3);
        })({ ctx: e2, client: this.client, request: d2, elicitationProvider: i2, requestId: h2, onFailureReason: (e3) => {
          f2 = e3;
        }, onProgress: (r4) => {
          ge.debug(e2, "CallMcpTool progress", { serverIdentifier: t2.serverIdentifier, toolCallId: n2, progress: r4.progress, total: r4.total, messageLength: r4.message?.length ?? 0 });
        }, onElicitationRequest: () => {
          v2 += 1;
        } });
        return g2 = b(r3), r3;
      } catch (e3) {
        throw g2 = _(e3), f2 ??= J(e3), m(e3) && this.markNeedsAuth(t2.serverIdentifier), e3;
      } finally {
        T({ ctx: e2, metrics: this.options.metrics, placement: "server", caller: o2, providerHost: R(t2), serverIdentifier: t2.serverIdentifier, toolCallId: n2 ?? "", conversationId: u2, outcome: g2, reason: f2 ?? "none", requestId: h2, durationMs: this.now() - p2, elicitationCount: v2 });
      }
    }
    markNeedsAuth(e2) {
      this.resetNeedsAuthBackoff(), this.needsAuthMarks.set(e2, this.listingSeq);
      const t2 = le(this.snapshot, e2, "needsAuth");
      t2 !== this.snapshot && (this.snapshot = t2, this.scheduleNotify({ serverIdentifiers: [e2], reason: H.Jdl.Status }));
    }
  }
  var we = r(51455), ye = r(76760);
  const Se = 3e4;
  async function Ie(e2) {
    await (0, we.mkdir)(e2.projectsDir, { recursive: true });
    const t2 = await (0, we.realpath)(e2.projectsDir), r2 = Date.now(), n2 = new Date(r2).toISOString().slice(0, 10), i2 = (0, ye.join)(t2, `.agent-data-cleanup-${n2}`);
    try {
      const e3 = await (0, we.open)(i2, "wx", 384);
      await e3.close();
    } catch (e3) {
      if (e3 instanceof Error && "code" in e3 && "EEXIST" === e3.code) return;
      throw e3;
    }
    return await (0, s.r5P)({ projectsDir: t2, nowMs: r2 });
  }
  function Ce(e2) {
    const t2 = e2.run ?? Ie, r2 = e2.initialDelayMs ?? Se, n2 = e2.intervalMs ?? s.BNF, i2 = e2.setTimeoutFn ?? setTimeout, o2 = e2.setIntervalFn ?? setInterval, a2 = e2.clearTimeoutFn ?? clearTimeout, c2 = e2.clearIntervalFn ?? clearInterval;
    let l2 = false;
    const u2 = async () => {
      try {
        const r3 = Date.now(), s2 = await t2({ projectsDir: e2.projectsDir });
        if (l2 || void 0 === s2) return;
        try {
          e2.onCompleted?.(s2, { projectsDir: e2.projectsDir, durationMs: Date.now() - r3 });
        } catch {
        }
      } catch (t3) {
        if (l2) return;
        try {
          e2.onFailed?.(t3, { projectsDir: e2.projectsDir });
        } catch {
        }
      }
    }, d2 = i2(() => {
      l2 || u2();
    }, r2), h2 = o2(() => {
      l2 || u2();
    }, n2);
    return () => {
      l2 || (l2 = true, a2(d2), c2(h2));
    };
  }
  var Pe = r(73024);
  function ke(e2) {
    return e2 instanceof Error && "code" in e2 && ("ENOENT" === e2.code || "ENOTDIR" === e2.code);
  }
  class Me {
    async requestApproval(e2) {
      return { approved: false, reason: "agent-host-exec denies local side effects by default. Interactive embedders must supply a pendingDecisionStore override." };
    }
  }
  function Ee(e2) {
    try {
      return (0, Pe.existsSync)(e2) ? (0, Pe.realpathSync)(e2) : (0, ye.resolve)(e2);
    } catch {
      return (0, ye.resolve)(e2);
    }
  }
  function _e(e2) {
    return "needsApproval" === e2.type ? { type: "permissionsConfig", isReadonly: true } : e2;
  }
  class be {
    constructor(e2, t2, r2) {
      var n2;
      this.workspaceRoots = e2.map(Ee), this.readRules = new s.khl(t2, new Me(), (n2 = r2?.permissions ?? { getPermissions: async () => ({ allow: [], deny: [], approvalMode: "ask-every-time", readBoundary: "workspace", userConfiguredPolicy: { type: "workspace_readonly" } }), updatePermissions: async () => {
      } }, { async getPermissions() {
        const e3 = await n2.getPermissions();
        return { ...e3, readBoundary: "workspace", approvalMode: "unrestricted" === e3.approvalMode ? "ask-every-time" : e3.approvalMode };
      }, updatePermissions: (e3) => n2.updatePermissions(e3) }), r2?.teamSettings ?? new s.waD({ getTeamAdminSettings: async () => {
      }, getTeamRepos: async () => {
      } }), [...this.workspaceRoots], false, { perUserSandboxConfigPath: r2?.perUserSandboxConfigPath ?? "/nonexistent/agent-host-exec-sandbox.json" });
    }
    async shouldBlockRead(e2, t2) {
      return this.applyHeadlessReadRules(e2, t2, false);
    }
    async shouldBlockFileRead(e2, t2) {
      return this.applyHeadlessReadRules(e2, t2, true);
    }
    async getFileReadBoundaryBlocker() {
      return async (e2, t2) => false !== await this.shouldBlockRead(e2) || t2 !== e2 && false !== await this.shouldBlockRead(t2);
    }
    async shouldBlockWrite(e2, t2, r2) {
      return { type: "permissionsConfig", isReadonly: true };
    }
    async shouldBlockShellCommand(e2, t2, r2, s2) {
      return { kind: "block", reason: { type: "permissionsConfig", isReadonly: true } };
    }
    async shouldEnforceShellInvariantBlocks() {
      return { kind: "block", reason: { type: "permissionsConfig", isReadonly: true } };
    }
    async isShellCommandFullyAllowlisted() {
      return false;
    }
    async shouldBlockMcp(e2, t2) {
      return { type: "permissionsConfig", isReadonly: true };
    }
    async isMcpFullyAllowlisted() {
      return false;
    }
    async isWebFetchFullyAllowlisted() {
      return false;
    }
    async addToAllowList() {
    }
    async addToDenyList() {
    }
    async applyHeadlessReadRules(e2, t2, r2) {
      const s2 = (e3) => r2 ? this.readRules.shouldBlockFileRead(e3, t2) : this.readRules.shouldBlockRead(e3, t2), n2 = await s2(e2);
      if (false !== n2) return _e(n2);
      const i2 = await this.resolvedPathIfDifferent(e2);
      if (void 0 !== i2) {
        const e3 = await s2(i2);
        if (false !== e3) return _e(e3);
      }
      return !await this.isInAnyWorkspace(e2) && { type: "permissionsConfig", isReadonly: true };
    }
    async resolvedPathIfDifferent(e2) {
      const t2 = (0, ye.resolve)(e2), r2 = await (0, s.yeE)(t2);
      if (null !== r2 && r2 !== t2) return r2;
    }
    async isInAnyWorkspace(e2) {
      for (const t2 of this.workspaceRoots) if (await this.isInWorkspace(t2, e2)) return true;
      return false;
    }
    async isInWorkspace(e2, t2) {
      let r2 = (0, ye.resolve)(e2, t2);
      for (; ; ) try {
        const t3 = await (0, we.realpath)(r2), s2 = (0, ye.relative)(e2, t3);
        return "" === s2 || ".." !== s2 && !s2.startsWith(`..${ye.sep}`) && !(0, ye.isAbsolute)(s2);
      } catch (e3) {
        if (!ke(e3)) return false;
        const t3 = (0, ye.dirname)(r2);
        if (t3 === r2) return false;
        r2 = t3;
      }
    }
  }
  class Re {
    async open(e2, t2) {
    }
    async getDiagnostics(e2, t2) {
      return [];
    }
  }
  class qe {
    async getCodebaseReference(e2, t2) {
    }
  }
  class Ae {
    async getAllCursorRules(e2) {
      return [];
    }
    reload(e2) {
    }
    dispose() {
    }
    onDidChangeRules(e2) {
      return () => {
      };
    }
  }
  const Je = {};
  function Te(e2) {
    for (const t2 of e2) {
      if ("string" != typeof t2 || 0 === t2.trim().length) throw new Error("agent-host-exec workspacePaths entries must be non-empty absolute paths");
      if (!(0, ye.isAbsolute)(t2)) throw new Error(`agent-host-exec workspace path must be absolute: ${t2}`);
    }
    return e2;
  }
  function De(e2) {
    if ("string" != typeof e2 || 0 === e2.trim().length) throw new Error("agent-host-exec requires a non-empty projectDir");
    if (!(0, ye.isAbsolute)(e2)) throw new Error(`agent-host-exec projectDir must be absolute: ${e2}`);
    return e2;
  }
  const Ne = /* @__PURE__ */ new WeakMap();
  let xe = 1;
  function Le(e2) {
    const t2 = Ne.get(e2);
    if (void 0 !== t2) return t2;
    const r2 = xe++;
    return Ne.set(e2, r2), r2;
  }
  function Be(e2) {
    if (void 0 === e2) return {};
    const t2 = {};
    for (const r2 of Object.keys(e2)) {
      const s2 = e2[r2];
      void 0 !== s2 && (t2[r2] = s2);
    }
    return t2;
  }
  class Ue {
    async requestApproval() {
      return { approved: true };
    }
    async requestReadApproval() {
      return { approved: true };
    }
  }
  var Fe = r(31489);
  function Oe() {
    return e2 = "Network fetch is disabled by agent-host-exec headless defaults", { execute: async (t2, r2) => $e(r2, e2) };
    var e2;
  }
  function $e(e2, t2) {
    return new Fe.uN({ result: { case: "error", value: new Fe.fk({ url: e2.url, error: t2 }) } });
  }
  function je(e2, t2) {
    return { async execute(r2, s2, n2) {
      const i2 = await e2.execute(r2, s2, n2), o2 = (function(e3) {
        switch (e3.result.case) {
          case "success":
          case "timeout":
            return e3.result.value.directoryTreeRoot;
          default:
            return;
        }
      })(i2);
      return void 0 !== o2 && await We(o2, t2, true), i2;
    } };
  }
  async function We(e2, t2, r2) {
    if (!r2) {
      const r3 = await (0, s.yeE)(e2.absPath);
      if (null === r3 || await t2.isCursorIgnored(r3)) return false;
    }
    const n2 = [];
    for (const r3 of e2.childrenFiles) {
      const i3 = (0, ye.join)(e2.absPath, r3.name), o2 = await (0, s.yeE)(i3);
      null !== o2 && (await t2.isCursorIgnored(o2) || n2.push(r3));
    }
    e2.childrenFiles = n2;
    const i2 = await Promise.all(e2.childrenDirs.map(async (e3) => ({ dir: e3, keep: await We(e3, t2, false) })));
    return e2.childrenDirs = i2.filter((e3) => e3.keep).map((e3) => e3.dir), e2.childrenWereProcessed || (e2.fullSubtreeExtensionCounts = {}, e2.numFiles = 0), !(!r2 && e2.childrenWereProcessed && 0 === e2.childrenFiles.length && 0 === e2.childrenDirs.length);
  }
  class Ge {
    constructor(e2) {
      this.delegate = e2;
    }
    isIgnoredByAny(e2) {
      return this.delegate.isIgnoredByAny(e2);
    }
    isGitIgnored(e2) {
      return this.delegate.isGitIgnored(e2);
    }
    isCursorIgnored(e2) {
      return this.delegate.isCursorIgnored(e2);
    }
    isRepoBlocked(e2) {
      return this.delegate.isRepoBlocked(e2);
    }
    async listCursorIgnoreFilesByRoot(e2) {
      return [];
    }
    getCursorIgnoreMapping() {
      return this.delegate.getCursorIgnoreMapping();
    }
    getGitIgnoreMapping() {
      return this.delegate.getGitIgnoreMapping();
    }
    getRepoBlockExcludeGlobs(e2) {
      return this.delegate.getRepoBlockExcludeGlobs(e2);
    }
  }
  function Ke(e2) {
    return "deny-all" === e2.policy.mode ? new be(e2.workspacePaths, e2.ignoreService, { permissions: e2.policy.permissions, teamSettings: e2.policy.teamSettings, perUserSandboxConfigPath: e2.policy.perUserSandboxConfigPath }) : new s.khl(e2.ignoreService, e2.policy.provider, e2.policy.permissions ?? { getPermissions: async () => ({ allow: [], deny: [], approvalMode: "ask-every-time", userConfiguredPolicy: { type: "workspace_readonly" } }), updatePermissions: async () => {
    } }, e2.policy.teamSettings ?? new s.waD({ getTeamAdminSettings: async () => {
    }, getTeamRepos: async () => {
    } }), [...e2.workspacePaths], false, { perUserSandboxConfigPath: e2.policy.perUserSandboxConfigPath });
  }
  var He = r(25925);
  function ze(e2) {
    try {
      return !!(0, Pe.statSync)(e2).isFile() && ((0, Pe.accessSync)(e2, Pe.constants.X_OK), true);
    } catch {
      return false;
    }
  }
  function Qe(e2) {
    try {
      const t3 = (0, Pe.statSync)(e2);
      if (t3.isFile()) return (0, Pe.accessSync)(e2, Pe.constants.X_OK), e2;
      if (!t3.isDirectory()) return;
    } catch {
      return;
    }
    const t2 = "win32" === process.platform ? ["rg.exe", "ripgrep.exe", "rg", "ripgrep"] : ["rg", "ripgrep"];
    for (const r2 of t2) {
      const t3 = (0, ye.join)(e2, r2);
      if (ze(t3)) return t3;
    }
  }
  function Ve() {
    const e2 = process.env.CURSOR_RIPGREP_RLOCATION;
    if (void 0 !== e2 && "" !== e2) for (const t2 of (function() {
      const e3 = [];
      for (const t3 of [process.env.RUNFILES_DIR, process.env.TEST_SRCDIR]) void 0 === t3 || "" === t3 || e3.includes(t3) || e3.push(t3);
      return e3;
    })()) {
      const r2 = Qe((0, ye.join)(t2, e2));
      if (void 0 !== r2) return r2;
    }
  }
  function Xe(e2) {
    if (e2) {
      try {
        if ((0, Pe.statSync)(e2).isDirectory()) {
          const t3 = Qe(e2);
          return void (void 0 !== t3 && (0, He.J)(t3));
        }
      } catch {
      }
      return void (0, He.J)(e2);
    }
    const t2 = Ve();
    if (void 0 !== t2) return void (0, He.J)(t2);
    if ((0, He.yo)()) return;
    const r2 = "win32" === process.platform ? "rg.exe" : "rg", s2 = process.argv[1];
    if (void 0 !== s2) {
      const e3 = (0, ye.join)((0, ye.dirname)(s2), r2);
      if (ze(e3)) return void (0, He.J)(e3);
    }
    if ("win32" !== process.platform) {
      const e3 = ["/usr/bin/rg", "/usr/local/bin/rg", "/home/linuxbrew/.linuxbrew/bin/rg", "/opt/homebrew/bin/rg"], t3 = process.env.HOME;
      t3 && e3.push((0, ye.join)(t3, ".cargo", "bin", "rg"));
      for (const t4 of e3) if (ze(t4)) return void (0, He.J)(t4);
    }
    const n2 = (0, He.xS)();
    n2 && (0, He.J)(n2);
  }
  const Ye = (0, n.h)("agent-host-exec"), Ze = "permissionsService and pendingDecisionStore must be overridden together", et = "configureSession.permissions cannot be combined with permissionsService or pendingDecisionStore overrides";
  function tt(e2) {
    if (void 0 !== e2.permissionsService !== (void 0 !== e2.pendingDecisionStore)) throw new Error(Ze);
    if (void 0 !== e2.permissionsService && void 0 !== e2.pendingDecisionStore) return { permissionsService: e2.permissionsService, pendingDecisionStore: e2.pendingDecisionStore };
  }
  function rt(e2) {
    void 0 === e2.configureSession ? (Te(e2.workspacePaths ?? []), De(e2.projectDir ?? "")) : (void 0 !== e2.workspacePaths && 0 !== e2.workspacePaths.length || void 0 !== e2.projectDir && 0 !== e2.projectDir.trim().length) && (void 0 !== e2.workspacePaths && e2.workspacePaths.length > 0 && Te(e2.workspacePaths), void 0 !== e2.projectDir && e2.projectDir.trim().length > 0 && De(e2.projectDir));
    const t2 = void 0 === e2.workspacePaths || 0 === e2.workspacePaths.length ? void 0 : Te(e2.workspacePaths), r2 = void 0 === e2.projectDir || 0 === e2.projectDir.trim().length ? void 0 : De(e2.projectDir);
    Xe(e2.ripgrepPath);
    const n2 = /* @__PURE__ */ new Map();
    let i2 = false;
    return { createResources: (o2) => {
      if (i2) throw new Error("createAgentHostExec has been disposed");
      const a2 = e2.configureSession?.(o2), c2 = Te(a2?.workspacePaths ?? t2 ?? []), l2 = Te(a2?.permissionWorkspacePaths ?? c2), u2 = De(a2?.projectDir ?? r2 ?? ""), h2 = Be(a2?.overrides), p2 = Be(e2.resourceDefaults), f2 = a2?.permissions?.teamSettings ?? e2.permissions?.teamSettings;
      let g2 = h2.ignoreService ?? p2.ignoreService;
      if (void 0 === g2) {
        const e3 = (function(e4, t3, r3) {
          const s2 = [...e4].map(Ee).sort(), n3 = void 0 === r3 ? "no-team" : `team:${Le(r3)}`;
          return `${s2.join("\0")}::${Object.prototype.toString.call(t3)}::${Le(t3)}::${n3}`;
        })(c2, o2.gitExecutor, f2);
        g2 = n2.get(e3), void 0 === g2 && (g2 = (function(e4, t3, r3) {
          const n3 = new s.E1e(e4, r3, [...t3]), i3 = t3[0];
          if (void 0 !== i3) {
            const e5 = (0, s.gMI)(i3);
            n3.isGitIgnored(e5).catch((e6) => {
              Ye.error((0, d.q6)(), "ignore service initialization failed", e6 instanceof Error ? e6 : new Error(String(e6)));
            });
          }
          return n3;
        })(o2.gitExecutor, c2, f2), n2.set(e3, g2));
      }
      if (void 0 !== a2?.permissions && (void 0 !== h2.permissionsService || void 0 !== h2.pendingDecisionStore)) throw new Error(et);
      const m2 = void 0 === a2?.permissions ? tt(h2) ?? tt(p2) : void 0, v2 = a2?.permissions ?? (void 0 === m2 ? e2.permissions ?? { mode: "deny-all" } : void 0), w2 = m2?.pendingDecisionStore ?? ("interactive" === v2?.mode ? v2.provider : (function(e3) {
        switch (e3) {
          case "deny":
          case "fail-closed":
            return new Me();
          case "auto-approve":
            return new Ue();
          default:
            return e3;
        }
      })("deny")), y2 = void 0 === m2 && "interactive" !== v2?.mode, S2 = y2 ? new Ge(g2) : g2, I2 = m2?.permissionsService ?? Ke({ policy: v2 ?? { mode: "deny-all" }, ignoreService: g2, workspacePaths: l2 }), C2 = a2?.wrapPermissionsService?.(I2) ?? I2, P2 = c2[0] ?? u2, k2 = { pendingDecisionStore: w2, fileChangeTracker: new s.$1H(P2), gitExecutor: o2.gitExecutor, ignoreService: S2, grepProvider: Je, permissionsService: C2, workspacePaths: [...c2], diagnosticsProvider: new Re(), mcpLease: o2.mcpLease, cursorRulesService: new Ae(), subagentsService: new s.KpW(), repositoryProvider: new qe(), projectDir: u2, backgroundWorkRegistry: o2.backgroundWorkRegistry, mcpMetaToolEnabled: true, _defaultSandboxPolicy: { type: "workspace_readonly" }, useStreamingRead: () => false }, M2 = new s.DvK({ ...k2, ...p2, ...h2, workspacePaths: [...c2], projectDir: u2, gitExecutor: o2.gitExecutor, mcpLease: o2.mcpLease, backgroundWorkRegistry: o2.backgroundWorkRegistry, wakeupOwnerConversationId: o2.rootSessionId, pendingDecisionStore: w2, permissionsService: C2, ignoreService: S2, rebuildRequestContextOnRulesChange: true }), E2 = e2.network ?? "deny";
      if ("inherit" !== E2) {
        const e3 = "deny" === E2 ? Oe() : /* @__PURE__ */ (function(e4, t3) {
          return { async execute(r3, s2, n3) {
            try {
              if (await t3.isWebFetchFullyAllowlisted(r3, { url: s2.url })) return e4.execute(r3, s2, n3);
            } catch {
            }
            return $e(s2, "Network fetch is not allowed by headless permissions");
          } };
        })(M2.get(H.IGA), C2);
        M2.register(H.IGA, e3);
      }
      let _2;
      y2 && M2.register(H.bL4, je(M2.get(H.bL4), S2));
      try {
        _2 = e2.wrapResources?.({ args: o2, provider: M2 });
      } catch (e3) {
        throw M2.dispose().catch((e4) => {
          Ye.error((0, d.q6)(), "provider cleanup after wrapResources failure", e4);
        }), e3;
      }
      const b2 = _2?.accessor ?? M2;
      return { register: (e3, t3) => M2.register(e3, t3), get: (e3) => b2.get(e3), entries: () => b2.entries(), dispose: async () => {
        let e3;
        try {
          await _2?.dispose?.();
        } catch (t3) {
          e3 = t3;
        }
        try {
          await M2.dispose();
        } catch (t3) {
          e3 ??= t3;
        }
        if (void 0 !== e3) throw e3;
      } };
    }, async dispose() {
      i2 = true, n2.clear();
    } };
  }
  var st = r(47462);
  function nt(e2) {
    const t2 = (function(e3) {
      if ("function" == typeof e3) return e3;
      return () => e3;
    })(e2.context);
    return { accessor: new st.ae(e2.provider, e2.hookExecutor, t2, e2.mcpLease) };
  }
  var it = r(48161);
  const ot = ["project", "user", "team", "mdm", "plugins"], at = /* @__PURE__ */ new Set([...ot, "all"]);
  function ct(e2) {
    const t2 = (function(e3) {
      if (void 0 === e3 || 0 === e3.length) return lt([]);
      for (const t3 of e3) if (!at.has(t3)) throw new Error(`Unsupported setting source "${String(t3)}"`);
      if (e3.includes("all")) {
        if (e3.length > 1) throw new Error('settingSources cannot mix "all" with individual setting sources');
        return { ...lt(ot), all: true };
      }
      return lt(e3);
    })(e2), r2 = ["team", "mdm", "plugins"].filter((e3) => t2[e3]);
    if (r2.length > 0) throw new Error(`Headless disk setting sources do not support: ${r2.join(", ")}`);
    return t2;
  }
  function lt(e2) {
    const t2 = new Set(e2);
    return { project: t2.has("project"), user: t2.has("user"), team: t2.has("team"), mdm: t2.has("mdm"), plugins: t2.has("plugins"), all: false };
  }
  i.uz;
  const ut = { getAllAgentSkills: async () => [], reload() {
  }, onDidChangeSkills: () => () => {
  }, dispose() {
  } };
  function dt() {
    return { cursorRulesService: new Ae(), subagentsService: new s.KpW(), agentSkillsService: ut, getAgentSkills: async () => [], reloadSkillRoots() {
    }, dispose() {
    } };
  }
  function ht(e2) {
    const t2 = ct(e2.sources);
    if ((function(e3) {
      return ot.every((t3) => !e3[t3]);
    })(t2)) return dt();
    const r2 = t2.project ? [...e2.workspacePaths] : [], n2 = true === t2.user;
    if (0 === r2.length && !n2) return dt();
    Xe(e2.ripgrepPath);
    const i2 = (0, d.q6)(), o2 = e2.getThirdPartyExtensibilityEnabled ?? (() => true), a2 = e2.userHome ?? (0, it.homedir)(), c2 = true === e2.allowExternalSubagentSymlinks, l2 = [];
    for (const t3 of r2) l2.push(new s.KOV(i2, e2.gitExecutor, t3, true, o2, e2.fileWatcher, e2.ignoreService));
    let u2;
    (r2.length > 0 || n2) && (u2 = new s.EVC(i2, r2, n2 ? a2 : `${r2[0]}/.agent-host-exec-no-user-home`, e2.gitExecutor, true, e2.fileWatcher, o2, e2.initialBuiltinSkillsSyncPromise ?? Promise.resolve(), e2.surface ?? "headless", void 0, () => e2.getAgentStoreSkillsContext?.().agentStoreSkillsDirs ?? [], e2.agentSkillsCatalogCache), l2.push(u2));
    const h2 = 0 === l2.length ? new Ae() : 1 === l2.length ? l2[0] : new s.Px0(l2, e2.getAgentStoreSkillsContext ?? (() => s.$3f)), p2 = [];
    if (t2.project) for (const e3 of r2) p2.push(new s.VzO(e3, o2, "workspace", c2));
    n2 && p2.push(new s.VzO(a2, o2, "user", c2));
    const f2 = 0 === p2.length ? new s.KpW() : 1 === p2.length ? p2[0] : new s.o_K(p2), g2 = u2 ?? ut;
    return { cursorRulesService: h2, subagentsService: f2, agentSkillsService: g2, getAgentSkills: (e3) => g2.getAllAgentSkills(e3), reloadSkillRoots() {
      u2?.reloadSkillRoots();
    }, dispose() {
      h2.dispose();
    } };
  }
  function pt(e2) {
    const t2 = /* @__PURE__ */ new Set();
    for (const r2 of e2) r2.length > 0 && t2.add(r2);
    return [...t2];
  }
  class ft {
    constructor(e2) {
      this.processRoutingEnabled = e2, this.sessions = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Set();
    }
    isRoutingEnabled() {
      if (this.processRoutingEnabled) return true;
      for (const e2 of this.sessions.values()) if (e2.enabled) return true;
      return false;
    }
    localGrantIdentifiers() {
      const e2 = /* @__PURE__ */ new Set();
      for (const t2 of this.sessions.values()) for (const r2 of t2.grantIdentifiers) e2.add(r2);
      return e2;
    }
    noteSession(e2, t2) {
      const r2 = { enabled: true === t2?.hostedMcpRoutingEnabled, grantIdentifiers: pt((t2?.hostedMcpLocalGrantIdentifiers ?? []).map((e3) => e3.trim())) }, s2 = this.fingerprint();
      this.sessions.set(e2, r2), this.fireIfChanged(s2);
    }
    forgetSession(e2) {
      if (!this.sessions.has(e2)) return;
      const t2 = this.fingerprint();
      this.sessions.delete(e2), this.fireIfChanged(t2);
    }
    onDidChange(e2) {
      return this.listeners.add(e2), { dispose: () => {
        this.listeners.delete(e2);
      } };
    }
    fingerprint() {
      return JSON.stringify([this.isRoutingEnabled(), [...this.localGrantIdentifiers()].sort()]);
    }
    fireIfChanged(e2) {
      if (this.fingerprint() !== e2) for (const e3 of this.listeners) e3();
    }
  }
  class gt {
    constructor(e2) {
      this.routingEnabled = e2, this.includeDefinition = (e3) => !this.routingEnabled() || (void 0 === this.routingFilter ? "stdio" === e3.kind : this.routingFilter(e3));
    }
    setRoutingFilter(e2) {
      this.routingFilter = e2;
    }
    clearRoutingFilter() {
      this.routingFilter = void 0;
    }
    hasRoutingFilter() {
      return void 0 !== this.routingFilter;
    }
  }
  class mt {
    constructor(e2) {
      this.listeners = /* @__PURE__ */ new Set(), this.subscriptions = [], this.flips = Promise.resolve(), this.disposed = false, this.lease = e2.lease, this.filter = e2.filter, this.state = e2.state, this.log = e2.log ?? (() => {
      });
      const t2 = e2.lease, r2 = e2.filter, s2 = e2.transport;
      this.canRoute = void 0 !== s2, this.createRouting = () => {
        let n2;
        return n2 = new ve({ transport: s2, caller: e2.caller, deviceTag: e2.deviceTag, metrics: e2.metrics, listingTtlMs: e2.listingTtlMs, listingWaitCapMs: e2.listingWaitCapMs, serveLastListingOnTtl: e2.serveLastListingOnTtl, serveLastListingOnChange: e2.serveLastListingOnChange, createWrappedLease: async (e3, s3) => {
          if (this.routingProvider !== n2 || this.disposed) throw new Error("hosted-mcp-routing: provider replaced before its placement listing finished");
          return r2.setRoutingFilter(s3.includeDefinition), await t2.rebuild(), /* @__PURE__ */ (function(e4) {
            return { getTools: (t3) => e4.getTools(t3), getToolSet: (t3) => e4.getToolSet(t3), getClients: (t3) => e4.getClients(t3), getClient: (t3, r3) => e4.getClient(t3, r3), getInstructions: (t3) => e4.getInstructions(t3), getToolsForServers: (t3, r3) => e4.getToolsForServers(t3, r3), onDidChange: (t3) => e4.onDidChange(t3), dispose: () => {
            } };
          })(t2);
        }, ...void 0 === e2.grantMigration ? {} : { grantMigration: { migrationEnabled: true === e2.grantMigration.migrationEnabled, store: e2.grantMigration.store, listLocalGrants: e2.grantMigration.listLocalGrants } } }), n2;
      }, this.active = this.canRoute && this.state.isRoutingEnabled(), this.active && this.startRouting(), this.subscriptions.push(this.state.onDidChange(() => {
        this.onGateChange();
      }), this.lease.onDidChange((e3) => {
        this.active || this.fire(e3);
      }));
    }
    get routing() {
      return this.routingProvider;
    }
    isRoutingActive() {
      return this.active;
    }
    settled() {
      return this.flips;
    }
    noteGrantChanged(e2, t2) {
      this.active && !this.disposed && this.routingProvider?.noteGrantChanged(e2, t2);
    }
    target() {
      return this.active && void 0 !== this.routingProvider ? this.routingProvider : this.lease;
    }
    startRouting() {
      const e2 = this.createRouting();
      this.routingProvider = e2, this.routingSubscription = e2.onDidChange((t2) => {
        this.active && this.routingProvider === e2 && this.fire(t2);
      });
    }
    stopRouting() {
      const e2 = this.routingProvider;
      return this.routingProvider = void 0, this.routingSubscription?.dispose(), this.routingSubscription = void 0, this.filter.clearRoutingFilter(), e2;
    }
    onGateChange() {
      const e2 = this.canRoute && this.state.isRoutingEnabled();
      if (e2 === this.active || this.disposed) return;
      let t2;
      e2 ? this.startRouting() : t2 = this.stopRouting(), this.active = e2;
      const r2 = this.routingProvider, s2 = async () => {
        try {
          await this.lease.rebuild();
        } catch (e3) {
          this.log(`hosted-mcp-routing: lease rebuild after gate change failed: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
        t2?.dispose(), e2 && void 0 !== r2 && !this.disposed && r2.refreshPlacements((0, d.q6)()).catch((e3) => {
          this.log(`hosted-mcp-routing: placement listing after gate change failed: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }), this.fire(void 0);
      };
      this.flips = this.flips.then(s2, s2);
    }
    async getTools(e2) {
      return await this.flips, this.target().getTools(e2);
    }
    async getToolSet(e2) {
      return await this.flips, this.target().getToolSet(e2);
    }
    async getClients(e2) {
      return await this.flips, this.target().getClients(e2);
    }
    async getClient(e2, t2) {
      return await this.flips, this.target().getClient(e2, t2);
    }
    async getInstructions(e2) {
      return await this.flips, this.target().getInstructions(e2);
    }
    async getToolsForServers(e2, t2) {
      return await this.flips, this.target().getToolsForServers(e2, t2);
    }
    onDidChange(e2) {
      return this.listeners.add(e2), { dispose: () => {
        this.listeners.delete(e2);
      } };
    }
    dispose() {
      if (!this.disposed) {
        this.disposed = true;
        for (const e2 of this.subscriptions.splice(0)) e2.dispose();
        this.listeners.clear(), this.stopRouting()?.dispose();
      }
    }
    fire(e2) {
      for (const t2 of this.listeners) t2(e2);
    }
  }
  function vt(e2) {
    return new mt(e2);
  }
  function wt() {
    let e2, t2;
    const r2 = new Promise((r3, s2) => {
      e2 = r3, t2 = s2;
    });
    return r2.catch(() => {
    }), { transport: { unary: async (e3, t3, s2, n2, i2, o2, a2) => (await r2).unary(e3, t3, s2, n2, i2, o2, a2), stream: async (e3, t3, s2, n2, i2, o2, a2) => (await r2).stream(e3, t3, s2, n2, i2, o2, a2) }, resolve: (r3) => {
      e2?.(r3), e2 = void 0, t2 = void 0;
    }, dispose: () => {
      t2?.(new Error("Connect transport was disposed before it was ready")), e2 = void 0, t2 = void 0;
    } };
  }
} };
