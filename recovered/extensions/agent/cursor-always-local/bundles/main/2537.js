// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2537 range:706045..709428
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2537: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { BidiAppendRequest: () => a, BidiAppendResponse: () => u, BidiPollRequest: () => c, BidiPollResponse: () => l, BidiRequestId: () => o2 });
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
        super(), this.requestId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BidiRequestId|1 request_id 9"];
      }
    }
    class a extends i2 {
      constructor(t3) {
        super(), this.data = "", this.appendSeqno = n2.protoInt64.zero, this.dataBinary = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
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
        return ["BidiAppendRequest|1 data 9|2 request_id #0|3 append_seqno 3|4 data_binary 12", o2];
      }
    }
    class u extends i2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["BidiAppendResponse"];
      }
    }
    class c extends i2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(c, t3, e3);
      }
      static $() {
        return ["BidiPollRequest|1 request_id #0|2 start_request 8?", o2];
      }
    }
    class l extends i2 {
      constructor(t3) {
        super(), this.seqno = n2.protoInt64.zero, this.data = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(l, t3, e3);
      }
      static $() {
        return ["BidiPollResponse|1 seqno 3|2 data 9|3 eof 8?"];
      }
    }
  }