// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2339 range:678111..704227
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2339: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { RemoteAgentHostPresenceService: () => Z });
    var n2 = r2(6038), s2 = r2(8592);
    const i2 = "aiserver.v1.";
    class o2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return i2;
      }
    }
    class a extends o2 {
      constructor(t3) {
        super(), this.id = "", this.method = "", this.data = new Uint8Array(0), this.kind = u.UNSPECIFIED, this.error = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RemoteAgentHostFrame|1 id 9|2 method 9|3 data 12|4 kind #0|5 error 9", u];
      }
    }
    var u = (0, s2.QT)(n2.proto3, i2, "RemoteAgentHostFrame.Kind", [[0, "UNSPECIFIED"], [1, "REQUEST"], [2, "RESPONSE"], [3, "ERROR"]], 1);
    var c = r2(829);
    const l = "aiserver.v1.";
    class m extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return l;
      }
    }
    var d = (0, s2.QT)(n2.proto3, l, "RemoteAgentHostControllerMethod", [[0, "UNSPECIFIED"], [1, "LIST_SESSIONS"], [2, "WATCH_SESSIONS"], [3, "ATTACH_SESSION"], [4, "GET_SESSION_BLOBS"], [5, "SEND_MESSAGE"], [6, "INTERRUPT_TURN"], [7, "CANCEL_QUEUED_TURN"], [8, "CREATE_SESSION"], [9, "RESPOND_TO_INTERACTION"], [10, "LIST_WORKSPACES"], [12, "SEND_ACTION"], [13, "READ_FILE"], [14, "LIST_SKILLS"]], 1), f = (0, s2.QT)(n2.proto3, l, "RemoteAgentHostTargetPresence", [[0, "UNSPECIFIED"], [1, "ONLINE"], [2, "OFFLINE"]], 1), p = (0, s2.QT)(n2.proto3, l, "RemoteAgentHostControllerPairing", [[0, "UNSPECIFIED"], [1, "PAIRED"], [2, "PENDING"], [3, "UNPAIRED"], [4, "REVOKED"]], 1), h = (0, s2.QT)(n2.proto3, l, "RemoteControlV2RegistrationState", [[0, "UNSPECIFIED"], [1, "NOT_ENROLLED"], [2, "ENABLED"], [3, "DISABLED"]], 1), g = (0, s2.QT)(n2.proto3, l, "RemoteControlV2RegistrationReason", [[0, "UNSPECIFIED"], [1, "MANUAL"], [2, "AUTOMATIC"]], 1), A = (n2.proto3, (0, s2.QT)(n2.proto3, l, "ControllerTrustStatus", [[0, "UNSPECIFIED"], [1, "PENDING"], [2, "TRUSTED"], [3, "REVOKED"], [4, "REJECTED"], [5, "NONE"]], 1));
    n2.proto3, n2.proto3;
    class _ extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_, t3, e3);
      }
      static $() {
        return ["GetRemoteControlV2UserSettingsRequest"];
      }
    }
    class y extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetRemoteControlV2UserSettingsResponse|1 settings #0|2 policy #1", c.WH, c.WJ];
      }
    }
    class w extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateRemoteControlV2UserSettingsRequest|1 settings #0", c.WH];
      }
    }
    class S extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateRemoteControlV2UserSettingsResponse|1 settings #0|2 policy #1", c.WH, c.WJ];
      }
    }
    class J extends m {
      constructor(t3) {
        super(), this.targetId = "", this.method = d.UNSPECIFIED, this.data = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
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
        return ["CallAgentHostRequest|1 target_id 9|2 method #0|3 data 12", d];
      }
    }
    class B extends m {
      constructor(t3) {
        super(), this.data = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
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
        return ["CallAgentHostResponse|1 data 12"];
      }
    }
    class E extends m {
      constructor(t3) {
        super(), this.targetId = "", this.method = d.UNSPECIFIED, this.data = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
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
        return ["StreamAgentHostRequest|1 target_id 9|2 method #0|3 data 12", d];
      }
    }
    class I extends m {
      constructor(t3) {
        super(), this.data = new Uint8Array(0), this.keepalive = false, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamAgentHostResponse|1 data 12|2 keepalive 8"];
      }
    }
    class C extends m {
      constructor(t3) {
        super(), this.targetId = "", this.displayName = "", this.agentHostVersion = "", this.presence = f.UNSPECIFIED, this.enrollmentGeneration = 0, this.controllerPairing = p.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["SharedRemoteAgentHostTarget|1 target_id 9|2 display_name 9|3 agent_host_version 9|4 presence #0|5 enrollment_generation 5|6 controller_pairing #1|7 reset_at_ms 3?", f, p];
      }
    }
    class b extends m {
      constructor(t3) {
        super(), this.pageSize = 0, this.pageToken = "", this.controllerThumbprint = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListSharedTargetsRequest|1 page_size 5|2 page_token 9|3 controller_thumbprint 9"];
      }
    }
    class k extends m {
      constructor(t3) {
        super(), this.targets = [], this.nextPageToken = "", this.recentlyResetTargets = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ListSharedTargetsResponse|1 targets #0*|2 next_page_token 9|3 recently_reset_targets #0*", C];
      }
    }
    class v extends m {
      constructor(t3) {
        super(), this.targetId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RevokeSharedTargetRequest|1 target_id 9|2 expected_enrollment_generation 5?"];
      }
    }
    class q extends m {
      constructor(t3) {
        super(), this.affectedGeneration = 0, this.currentGeneration = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["RevokeSharedTargetResponse|1 affected_generation 5|2 current_generation 5"];
      }
    }
    class R extends m {
      constructor(t3) {
        super(), this.targetId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetSharedTargetRegistrationStateRequest|1 target_id 9"];
      }
    }
    class P extends m {
      constructor(t3) {
        super(), this.state = h.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["GetSharedTargetRegistrationStateResponse|1 state #0|2 enrollment_generation 5?|3 has_enrollment_history 8?", h];
      }
    }
    class T extends m {
      constructor(t3) {
        super(), this.targetId = "", this.displayName = "", this.agentHostVersion = "", n2.proto3.util.initPartial(t3, this);
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
        return ["EnableSharedTargetRequest|1 target_id 9|2 display_name 9|3 agent_host_version 9|4 registration_reason #0?|5 public_key_jwk 9?", g];
      }
    }
    class x extends m {
      constructor(t3) {
        super(), this.enrollmentGeneration = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["EnableSharedTargetResponse|1 enrollment_generation 5|2 display_name 9?"];
      }
    }
    class N extends m {
      constructor(t3) {
        super(), this.publicKeyJwk = "", this.label = "", this.targetId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["TrustControllerRequest|1 public_key_jwk 9|2 label 9|3 target_id 9"];
      }
    }
    class D extends m {
      constructor(t3) {
        super(), this.status = A.UNSPECIFIED, this.thumbprint = "", this.verificationCode = "", n2.proto3.util.initPartial(t3, this);
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
        return ["TrustControllerResponse|1 status #0|2 thumbprint 9|3 challenge_id 9?|4 verification_code 9", A];
      }
    }
    class U extends m {
      constructor(t3) {
        super(), this.key = { case: void 0 }, this.targetId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetControllerTrustStatusRequest|1 public_key_jwk 9 key|2 thumbprint 9 key|3 target_id 9"];
      }
    }
    class Q extends m {
      constructor(t3) {
        super(), this.status = A.UNSPECIFIED, this.thumbprint = "", this.verificationCode = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetControllerTrustStatusResponse|1 status #0|2 thumbprint 9|3 challenge_id 9?|4 verification_code 9", A];
      }
    }
    class M extends m {
      constructor(t3) {
        super(), this.targetId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListPendingControllerApprovalsRequest|1 target_id 9"];
      }
    }
    class O extends m {
      constructor(t3) {
        super(), this.challengeId = "", this.challenge = "", this.label = "", this.thumbprint = "", this.createdAtUnix = 0, this.verificationCode = "", this.targetId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["PendingControllerApproval|1 challenge_id 9|2 challenge 9|3 label 9|4 thumbprint 9|5 created_at_unix 13|6 verification_code 9|7 target_id 9"];
      }
    }
    class F extends m {
      constructor(t3) {
        super(), this.approvals = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ListPendingControllerApprovalsResponse|1 approvals #0*", O];
      }
    }
    class L extends m {
      constructor(t3) {
        super(), this.challengeId = "", this.signature = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ApproveControllerRequest|1 challenge_id 9|2 signature 9"];
      }
    }
    class $ extends m {
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
        return ["ApproveControllerResponse|1 controller #0", K];
      }
    }
    class G extends m {
      constructor(t3) {
        super(), this.challengeId = "", this.signature = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RejectControllerRequest|1 challenge_id 9|2 signature 9"];
      }
    }
    class H extends m {
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
        return ["RejectControllerResponse"];
      }
    }
    class K extends m {
      constructor(t3) {
        super(), this.thumbprint = "", this.label = "", this.createdAtUnix = 0, this.lastUsedAtUnix = 0, this.pairedTargetIds = [], n2.proto3.util.initPartial(t3, this);
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
        return ["TrustedController|1 thumbprint 9|2 label 9|3 created_at_unix 13|4 last_used_at_unix 13|5 paired_target_ids 9*"];
      }
    }
    class V extends m {
      constructor(t3) {
        super(), this.targetId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListControllersRequest|1 target_id 9"];
      }
    }
    class z extends m {
      constructor(t3) {
        super(), this.controllers = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ListControllersResponse|1 controllers #0*", K];
      }
    }
    class W extends m {
      constructor(t3) {
        super(), this.thumbprint = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RevokeControllerRequest|1 thumbprint 9"];
      }
    }
    class Y extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RevokeControllerResponse"];
      }
    }
    class j extends m {
      constructor(t3) {
        super(), this.thumbprint = "", this.targetId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UnpairControllerRequest|1 thumbprint 9|2 target_id 9"];
      }
    }
    class X extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["UnpairControllerResponse"];
      }
    }
    const Z = { typeName: "aiserver.v1.RemoteAgentHostPresenceService", methods: { connectTarget: { name: "ConnectTarget", I: a, O: a, kind: n2.MethodKind.BiDiStreaming }, listSharedTargets: { name: "ListSharedTargets", I: b, O: k, kind: n2.MethodKind.Unary }, revokeSharedTarget: { name: "RevokeSharedTarget", I: v, O: q, kind: n2.MethodKind.Unary }, getSharedTargetRegistrationState: { name: "GetSharedTargetRegistrationState", I: R, O: P, kind: n2.MethodKind.Unary }, enableSharedTarget: { name: "EnableSharedTarget", I: T, O: x, kind: n2.MethodKind.Unary }, callAgentHost: { name: "CallAgentHost", I: J, O: B, kind: n2.MethodKind.Unary }, streamAgentHost: { name: "StreamAgentHost", I: E, O: I, kind: n2.MethodKind.ServerStreaming }, trustController: { name: "TrustController", I: N, O: D, kind: n2.MethodKind.Unary }, getControllerTrustStatus: { name: "GetControllerTrustStatus", I: U, O: Q, kind: n2.MethodKind.Unary }, listPendingControllerApprovals: { name: "ListPendingControllerApprovals", I: M, O: F, kind: n2.MethodKind.Unary }, approveController: { name: "ApproveController", I: L, O: $, kind: n2.MethodKind.Unary }, rejectController: { name: "RejectController", I: G, O: H, kind: n2.MethodKind.Unary }, listControllers: { name: "ListControllers", I: V, O: z, kind: n2.MethodKind.Unary }, revokeController: { name: "RevokeController", I: W, O: Y, kind: n2.MethodKind.Unary }, unpairController: { name: "UnpairController", I: j, O: X, kind: n2.MethodKind.Unary }, getRemoteControlV2UserSettings: { name: "GetRemoteControlV2UserSettings", I: _, O: y, kind: n2.MethodKind.Unary }, updateRemoteControlV2UserSettings: { name: "UpdateRemoteControlV2UserSettings", I: w, O: S, kind: n2.MethodKind.Unary } } };
  }