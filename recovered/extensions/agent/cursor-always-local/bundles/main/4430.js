// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4430 range:1155596..1158280
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4430: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { HealthService: () => l });
    var n2 = r2(6038), s2 = r2(8592);
    class i2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class o2 extends i2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["HealthEmptyRequest"];
      }
    }
    class a extends i2 {
      constructor(t3) {
        super(), this.payload = "", n2.proto3.util.initPartial(t3, this);
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
        return ["HealthRequest|1 payload 9|2 simulate_error 8?"];
      }
    }
    class u extends i2 {
      constructor(t3) {
        super(), this.payload = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(u, t3, e3);
      }
      static $() {
        return ["HealthResponse|1 payload 9"];
      }
    }
    var c = r2(2537);
    const l = { typeName: "aiserver.v1.HealthService", methods: { ping: { name: "Ping", I: a, O: u, kind: n2.MethodKind.Unary }, unary: { name: "Unary", I: o2, O: u, kind: n2.MethodKind.Unary }, stream: { name: "Stream", I: a, O: u, kind: n2.MethodKind.ServerStreaming }, streamSSE: { name: "StreamSSE", I: a, O: u, kind: n2.MethodKind.ServerStreaming }, streamBidi: { name: "StreamBidi", I: a, O: u, kind: n2.MethodKind.BiDiStreaming }, streamBidiSSE: { name: "StreamBidiSSE", I: c.BidiRequestId, O: u, kind: n2.MethodKind.ServerStreaming }, streamBidiPoll: { name: "StreamBidiPoll", I: c.BidiPollRequest, O: c.BidiPollResponse, kind: n2.MethodKind.ServerStreaming } } };
  }