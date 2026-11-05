// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 94430 range:14485124..14487773
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
94430: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { HealthService: () => u });
    var n = r(36038), s = r(8592);
    class o extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class i extends o {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["HealthEmptyRequest"];
      }
    }
    class a extends o {
      constructor(e2) {
        super(), this.payload = "", n.proto3.util.initPartial(e2, this);
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
        return ["HealthRequest|1 payload 9|2 simulate_error 8?"];
      }
    }
    class c extends o {
      constructor(e2) {
        super(), this.payload = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(c, e2, t2);
      }
      static $() {
        return ["HealthResponse|1 payload 9"];
      }
    }
    var l = r(82537);
    const u = { typeName: "aiserver.v1.HealthService", methods: { ping: { name: "Ping", I: a, O: c, kind: n.MethodKind.Unary }, unary: { name: "Unary", I: i, O: c, kind: n.MethodKind.Unary }, stream: { name: "Stream", I: a, O: c, kind: n.MethodKind.ServerStreaming }, streamSSE: { name: "StreamSSE", I: a, O: c, kind: n.MethodKind.ServerStreaming }, streamBidi: { name: "StreamBidi", I: a, O: c, kind: n.MethodKind.BiDiStreaming }, streamBidiSSE: { name: "StreamBidiSSE", I: l.BidiRequestId, O: c, kind: n.MethodKind.ServerStreaming }, streamBidiPoll: { name: "StreamBidiPoll", I: l.BidiPollRequest, O: l.BidiPollResponse, kind: n.MethodKind.ServerStreaming } } };
  }