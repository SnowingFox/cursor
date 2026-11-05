// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/88.js sha256:ada2371f3d8ec477769ade1f1156252eb3b227bb6ec8bbbeda01dedacce5366c
// module: 42862 range:71..21734
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42862: (e, t, r) => {
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
}