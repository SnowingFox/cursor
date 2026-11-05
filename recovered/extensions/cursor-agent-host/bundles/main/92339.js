// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 92339 range:13755616..13781607
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
92339: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { RemoteAgentHostPresenceService: () => X });
    var n = r(36038), s = r(8592);
    const o = "aiserver.v1.";
    class i extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return o;
      }
    }
    class a extends i {
      constructor(e2) {
        super(), this.id = "", this.method = "", this.data = new Uint8Array(0), this.kind = c.UNSPECIFIED, this.error = "", n.proto3.util.initPartial(e2, this);
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
        return ["RemoteAgentHostFrame|1 id 9|2 method 9|3 data 12|4 kind #0|5 error 9", c];
      }
    }
    var c = (0, s.QT)(n.proto3, o, "RemoteAgentHostFrame.Kind", [[0, "UNSPECIFIED"], [1, "REQUEST"], [2, "RESPONSE"], [3, "ERROR"]], 1);
    var l = r(60829);
    const u = "aiserver.v1.";
    class d extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return u;
      }
    }
    var p = (0, s.QT)(n.proto3, u, "RemoteAgentHostControllerMethod", [[0, "UNSPECIFIED"], [1, "LIST_SESSIONS"], [2, "WATCH_SESSIONS"], [3, "ATTACH_SESSION"], [4, "GET_SESSION_BLOBS"], [5, "SEND_MESSAGE"], [6, "INTERRUPT_TURN"], [7, "CANCEL_QUEUED_TURN"], [8, "CREATE_SESSION"], [9, "RESPOND_TO_INTERACTION"], [10, "LIST_WORKSPACES"], [12, "SEND_ACTION"], [13, "READ_FILE"], [14, "LIST_SKILLS"]], 1), m = (0, s.QT)(n.proto3, u, "RemoteAgentHostTargetPresence", [[0, "UNSPECIFIED"], [1, "ONLINE"], [2, "OFFLINE"]], 1), h = (0, s.QT)(n.proto3, u, "RemoteAgentHostControllerPairing", [[0, "UNSPECIFIED"], [1, "PAIRED"], [2, "PENDING"], [3, "UNPAIRED"], [4, "REVOKED"]], 1), f = (0, s.QT)(n.proto3, u, "RemoteControlV2RegistrationState", [[0, "UNSPECIFIED"], [1, "NOT_ENROLLED"], [2, "ENABLED"], [3, "DISABLED"]], 1), g = (0, s.QT)(n.proto3, u, "RemoteControlV2RegistrationReason", [[0, "UNSPECIFIED"], [1, "MANUAL"], [2, "AUTOMATIC"]], 1), y = (n.proto3, (0, s.QT)(n.proto3, u, "ControllerTrustStatus", [[0, "UNSPECIFIED"], [1, "PENDING"], [2, "TRUSTED"], [3, "REVOKED"], [4, "REJECTED"], [5, "NONE"]], 1));
    n.proto3, n.proto3;
    class w extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetRemoteControlV2UserSettingsRequest"];
      }
    }
    class v extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetRemoteControlV2UserSettingsResponse|1 settings #0|2 policy #1", l.WH, l.WJ];
      }
    }
    class _ extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["UpdateRemoteControlV2UserSettingsRequest|1 settings #0", l.WH];
      }
    }
    class A extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["UpdateRemoteControlV2UserSettingsResponse|1 settings #0|2 policy #1", l.WH, l.WJ];
      }
    }
    class S extends d {
      constructor(e2) {
        super(), this.targetId = "", this.method = p.UNSPECIFIED, this.data = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
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
        return ["CallAgentHostRequest|1 target_id 9|2 method #0|3 data 12", p];
      }
    }
    class b extends d {
      constructor(e2) {
        super(), this.data = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
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
        return ["CallAgentHostResponse|1 data 12"];
      }
    }
    class E extends d {
      constructor(e2) {
        super(), this.targetId = "", this.method = p.UNSPECIFIED, this.data = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
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
        return ["StreamAgentHostRequest|1 target_id 9|2 method #0|3 data 12", p];
      }
    }
    class I extends d {
      constructor(e2) {
        super(), this.data = new Uint8Array(0), this.keepalive = false, n.proto3.util.initPartial(e2, this);
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
        return ["StreamAgentHostResponse|1 data 12|2 keepalive 8"];
      }
    }
    class C extends d {
      constructor(e2) {
        super(), this.targetId = "", this.displayName = "", this.agentHostVersion = "", this.presence = m.UNSPECIFIED, this.enrollmentGeneration = 0, this.controllerPairing = h.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["SharedRemoteAgentHostTarget|1 target_id 9|2 display_name 9|3 agent_host_version 9|4 presence #0|5 enrollment_generation 5|6 controller_pairing #1|7 reset_at_ms 3?", m, h];
      }
    }
    class k extends d {
      constructor(e2) {
        super(), this.pageSize = 0, this.pageToken = "", this.controllerThumbprint = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListSharedTargetsRequest|1 page_size 5|2 page_token 9|3 controller_thumbprint 9"];
      }
    }
    class x extends d {
      constructor(e2) {
        super(), this.targets = [], this.nextPageToken = "", this.recentlyResetTargets = [], n.proto3.util.initPartial(e2, this);
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
        return ["ListSharedTargetsResponse|1 targets #0*|2 next_page_token 9|3 recently_reset_targets #0*", C];
      }
    }
    class T extends d {
      constructor(e2) {
        super(), this.targetId = "", n.proto3.util.initPartial(e2, this);
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
        return ["RevokeSharedTargetRequest|1 target_id 9|2 expected_enrollment_generation 5?"];
      }
    }
    class R extends d {
      constructor(e2) {
        super(), this.affectedGeneration = 0, this.currentGeneration = 0, n.proto3.util.initPartial(e2, this);
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
        return ["RevokeSharedTargetResponse|1 affected_generation 5|2 current_generation 5"];
      }
    }
    class B extends d {
      constructor(e2) {
        super(), this.targetId = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetSharedTargetRegistrationStateRequest|1 target_id 9"];
      }
    }
    class P extends d {
      constructor(e2) {
        super(), this.state = f.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["GetSharedTargetRegistrationStateResponse|1 state #0|2 enrollment_generation 5?|3 has_enrollment_history 8?", f];
      }
    }
    class J extends d {
      constructor(e2) {
        super(), this.targetId = "", this.displayName = "", this.agentHostVersion = "", n.proto3.util.initPartial(e2, this);
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
        return ["EnableSharedTargetRequest|1 target_id 9|2 display_name 9|3 agent_host_version 9|4 registration_reason #0?|5 public_key_jwk 9?", g];
      }
    }
    class M extends d {
      constructor(e2) {
        super(), this.enrollmentGeneration = 0, n.proto3.util.initPartial(e2, this);
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
        return ["EnableSharedTargetResponse|1 enrollment_generation 5|2 display_name 9?"];
      }
    }
    class q extends d {
      constructor(e2) {
        super(), this.publicKeyJwk = "", this.label = "", this.targetId = "", n.proto3.util.initPartial(e2, this);
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
        return ["TrustControllerRequest|1 public_key_jwk 9|2 label 9|3 target_id 9"];
      }
    }
    class D extends d {
      constructor(e2) {
        super(), this.status = y.UNSPECIFIED, this.thumbprint = "", this.verificationCode = "", n.proto3.util.initPartial(e2, this);
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
        return ["TrustControllerResponse|1 status #0|2 thumbprint 9|3 challenge_id 9?|4 verification_code 9", y];
      }
    }
    class O extends d {
      constructor(e2) {
        super(), this.key = { case: void 0 }, this.targetId = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetControllerTrustStatusRequest|1 public_key_jwk 9 key|2 thumbprint 9 key|3 target_id 9"];
      }
    }
    class N extends d {
      constructor(e2) {
        super(), this.status = y.UNSPECIFIED, this.thumbprint = "", this.verificationCode = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetControllerTrustStatusResponse|1 status #0|2 thumbprint 9|3 challenge_id 9?|4 verification_code 9", y];
      }
    }
    class F extends d {
      constructor(e2) {
        super(), this.targetId = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListPendingControllerApprovalsRequest|1 target_id 9"];
      }
    }
    class U extends d {
      constructor(e2) {
        super(), this.challengeId = "", this.challenge = "", this.label = "", this.thumbprint = "", this.createdAtUnix = 0, this.verificationCode = "", this.targetId = "", n.proto3.util.initPartial(e2, this);
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
        return ["PendingControllerApproval|1 challenge_id 9|2 challenge 9|3 label 9|4 thumbprint 9|5 created_at_unix 13|6 verification_code 9|7 target_id 9"];
      }
    }
    class L extends d {
      constructor(e2) {
        super(), this.approvals = [], n.proto3.util.initPartial(e2, this);
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
        return ["ListPendingControllerApprovalsResponse|1 approvals #0*", U];
      }
    }
    class $ extends d {
      constructor(e2) {
        super(), this.challengeId = "", this.signature = "", n.proto3.util.initPartial(e2, this);
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
        return ["ApproveControllerRequest|1 challenge_id 9|2 signature 9"];
      }
    }
    class Q extends d {
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
        return ["ApproveControllerResponse|1 controller #0", H];
      }
    }
    class j extends d {
      constructor(e2) {
        super(), this.challengeId = "", this.signature = "", n.proto3.util.initPartial(e2, this);
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
        return ["RejectControllerRequest|1 challenge_id 9|2 signature 9"];
      }
    }
    class G extends d {
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
        return ["RejectControllerResponse"];
      }
    }
    class H extends d {
      constructor(e2) {
        super(), this.thumbprint = "", this.label = "", this.createdAtUnix = 0, this.lastUsedAtUnix = 0, this.pairedTargetIds = [], n.proto3.util.initPartial(e2, this);
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
        return ["TrustedController|1 thumbprint 9|2 label 9|3 created_at_unix 13|4 last_used_at_unix 13|5 paired_target_ids 9*"];
      }
    }
    class z extends d {
      constructor(e2) {
        super(), this.targetId = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListControllersRequest|1 target_id 9"];
      }
    }
    class W extends d {
      constructor(e2) {
        super(), this.controllers = [], n.proto3.util.initPartial(e2, this);
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
        return ["ListControllersResponse|1 controllers #0*", H];
      }
    }
    class V extends d {
      constructor(e2) {
        super(), this.thumbprint = "", n.proto3.util.initPartial(e2, this);
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
        return ["RevokeControllerRequest|1 thumbprint 9"];
      }
    }
    class K extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RevokeControllerResponse"];
      }
    }
    class Y extends d {
      constructor(e2) {
        super(), this.thumbprint = "", this.targetId = "", n.proto3.util.initPartial(e2, this);
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
        return ["UnpairControllerRequest|1 thumbprint 9|2 target_id 9"];
      }
    }
    class Z extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["UnpairControllerResponse"];
      }
    }
    const X = { typeName: "aiserver.v1.RemoteAgentHostPresenceService", methods: { connectTarget: { name: "ConnectTarget", I: a, O: a, kind: n.MethodKind.BiDiStreaming }, listSharedTargets: { name: "ListSharedTargets", I: k, O: x, kind: n.MethodKind.Unary }, revokeSharedTarget: { name: "RevokeSharedTarget", I: T, O: R, kind: n.MethodKind.Unary }, getSharedTargetRegistrationState: { name: "GetSharedTargetRegistrationState", I: B, O: P, kind: n.MethodKind.Unary }, enableSharedTarget: { name: "EnableSharedTarget", I: J, O: M, kind: n.MethodKind.Unary }, callAgentHost: { name: "CallAgentHost", I: S, O: b, kind: n.MethodKind.Unary }, streamAgentHost: { name: "StreamAgentHost", I: E, O: I, kind: n.MethodKind.ServerStreaming }, trustController: { name: "TrustController", I: q, O: D, kind: n.MethodKind.Unary }, getControllerTrustStatus: { name: "GetControllerTrustStatus", I: O, O: N, kind: n.MethodKind.Unary }, listPendingControllerApprovals: { name: "ListPendingControllerApprovals", I: F, O: L, kind: n.MethodKind.Unary }, approveController: { name: "ApproveController", I: $, O: Q, kind: n.MethodKind.Unary }, rejectController: { name: "RejectController", I: j, O: G, kind: n.MethodKind.Unary }, listControllers: { name: "ListControllers", I: z, O: W, kind: n.MethodKind.Unary }, revokeController: { name: "RevokeController", I: V, O: K, kind: n.MethodKind.Unary }, unpairController: { name: "UnpairController", I: Y, O: Z, kind: n.MethodKind.Unary }, getRemoteControlV2UserSettings: { name: "GetRemoteControlV2UserSettings", I: w, O: v, kind: n.MethodKind.Unary }, updateRemoteControlV2UserSettings: { name: "UpdateRemoteControlV2UserSettings", I: _, O: A, kind: n.MethodKind.Unary } } };
  }