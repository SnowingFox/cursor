// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/915.js sha256:a047de6a109482b317cdb9ce470b0c1903b3caa8ebca06fe5218a9e9c369a526
// module: 3192 range:6014..16060
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3192: (e, t, n) => {
  n.r(t), n.d(t, { AgentWebSocketCancelRun: () => g, AgentWebSocketClientFrame: () => A, AgentWebSocketClientHalfClose: () => m, AgentWebSocketClientMessage: () => f, AgentWebSocketConnectCode: () => c, AgentWebSocketConnectError: () => S, AgentWebSocketConnectErrorDetail: () => b, AgentWebSocketHeader: () => u, AgentWebSocketHello: () => l, AgentWebSocketProtocolVersion: () => a, AgentWebSocketRunAccepted: () => v, AgentWebSocketRunEnd: () => k, AgentWebSocketRunIdentity: () => d, AgentWebSocketRunRejected: () => y, AgentWebSocketRunStart: () => h, AgentWebSocketServerFrame: () => w, AgentWebSocketServerMessage: () => p });
  var r = n(6038), o = n(8592);
  const i = "agent.v1.";
  class s extends o.HL {
    static get runtime() {
      return (0, o.kU)(this, "runtime", r.proto3);
    }
    static $p() {
      return i;
    }
  }
  var a = (0, o.QT)(r.proto3, i, "AgentWebSocketProtocolVersion", [[0, "UNSPECIFIED"], [1, "V1"]], 1), c = (0, o.QT)(r.proto3, i, "AgentWebSocketConnectCode", [[0, "UNSPECIFIED"], [1, "CANCELED"], [2, "UNKNOWN"], [3, "INVALID_ARGUMENT"], [4, "DEADLINE_EXCEEDED"], [5, "NOT_FOUND"], [6, "ALREADY_EXISTS"], [7, "PERMISSION_DENIED"], [8, "RESOURCE_EXHAUSTED"], [9, "FAILED_PRECONDITION"], [10, "ABORTED"], [11, "OUT_OF_RANGE"], [12, "UNIMPLEMENTED"], [13, "INTERNAL"], [14, "UNAVAILABLE"], [15, "DATA_LOSS"], [16, "UNAUTHENTICATED"]], 1);
  class l extends s {
    constructor(e2) {
      super(), this.protocolVersion = a.UNSPECIFIED, r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new l().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new l().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new l().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(l, e2, t2);
    }
    static $() {
      return ["AgentWebSocketHello|1 protocol_version #0", a];
    }
  }
  class d extends s {
    constructor(e2) {
      super(), this.runId = "", this.requestId = "", r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new d().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new d().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new d().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(d, e2, t2);
    }
    static $() {
      return ["AgentWebSocketRunIdentity|1 run_id 9|2 request_id 9"];
    }
  }
  class u extends s {
    constructor(e2) {
      super(), this.name = "", this.value = "", r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new u().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new u().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new u().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(u, e2, t2);
    }
    static $() {
      return ["AgentWebSocketHeader|1 name 9|2 value 9"];
    }
  }
  class h extends s {
    constructor(e2) {
      super(), this.headers = [], r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new h().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new h().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new h().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(h, e2, t2);
    }
    static $() {
      return ["AgentWebSocketRunStart|1 identity #0|2 headers #1*", d, u];
    }
  }
  class f extends s {
    constructor(e2) {
      super(), this.runId = "", this.sequence = r.protoInt64.zero, this.message = new Uint8Array(0), r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new f().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new f().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new f().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(f, e2, t2);
    }
    static $() {
      return ["AgentWebSocketClientMessage|1 run_id 9|2 sequence 4|3 message 12"];
    }
  }
  class m extends s {
    constructor(e2) {
      super(), this.runId = "", r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new m().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new m().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new m().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(m, e2, t2);
    }
    static $() {
      return ["AgentWebSocketClientHalfClose|1 run_id 9"];
    }
  }
  class g extends s {
    constructor(e2) {
      super(), this.runId = "", r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new g().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new g().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new g().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(g, e2, t2);
    }
    static $() {
      return ["AgentWebSocketCancelRun|1 run_id 9"];
    }
  }
  class v extends s {
    constructor(e2) {
      super(), this.headers = [], r.proto3.util.initPartial(e2, this);
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
      return r.proto3.util.equals(v, e2, t2);
    }
    static $() {
      return ["AgentWebSocketRunAccepted|1 identity #0|2 headers #1*", d, u];
    }
  }
  class p extends s {
    constructor(e2) {
      super(), this.runId = "", this.sequence = r.protoInt64.zero, this.message = new Uint8Array(0), r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new p().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new p().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new p().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(p, e2, t2);
    }
    static $() {
      return ["AgentWebSocketServerMessage|1 run_id 9|2 sequence 4|3 message 12"];
    }
  }
  class b extends s {
    constructor(e2) {
      super(), this.typeName = "", this.binaryValue = new Uint8Array(0), r.proto3.util.initPartial(e2, this);
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
      return r.proto3.util.equals(b, e2, t2);
    }
    static $() {
      return ["AgentWebSocketConnectErrorDetail|1 type_name 9|2 binary_value 12"];
    }
  }
  class S extends s {
    constructor(e2) {
      super(), this.code = c.UNSPECIFIED, this.rawMessage = "", this.metadata = [], this.details = [], r.proto3.util.initPartial(e2, this);
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
      return r.proto3.util.equals(S, e2, t2);
    }
    static $() {
      return ["AgentWebSocketConnectError|1 code #0|2 raw_message 9|3 metadata #1*|4 details #2*", c, u, b];
    }
  }
  class k extends s {
    constructor(e2) {
      super(), this.trailers = [], r.proto3.util.initPartial(e2, this);
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
      return r.proto3.util.equals(k, e2, t2);
    }
    static $() {
      return ["AgentWebSocketRunEnd|1 identity #0|2 trailers #1*|3 error #2?", d, u, S];
    }
  }
  class y extends s {
    constructor(e2) {
      super(), r.proto3.util.initPartial(e2, this);
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
      return r.proto3.util.equals(y, e2, t2);
    }
    static $() {
      return ["AgentWebSocketRunRejected|1 identity #0|2 error #1", d, S];
    }
  }
  class A extends s {
    constructor(e2) {
      super(), this.frame = { case: void 0 }, r.proto3.util.initPartial(e2, this);
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
      return r.proto3.util.equals(A, e2, t2);
    }
    static $() {
      return ["AgentWebSocketClientFrame|1 hello #0 frame|2 run_start #1 frame|3 client_message #2 frame|4 half_close #3 frame|5 cancel_run #4 frame", l, h, f, m, g];
    }
  }
  class w extends s {
    constructor(e2) {
      super(), this.frame = { case: void 0 }, r.proto3.util.initPartial(e2, this);
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
      return r.proto3.util.equals(w, e2, t2);
    }
    static $() {
      return ["AgentWebSocketServerFrame|1 hello #0 frame|2 run_accepted #1 frame|3 server_message #2 frame|4 run_end #3 frame|5 run_rejected #4 frame", l, v, p, k, y];
    }
  }
}