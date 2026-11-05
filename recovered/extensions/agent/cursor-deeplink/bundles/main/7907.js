// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7907 range:729644..732820
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7907: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Timestamp = void 0;
    const n2 = A2(4193), r2 = A2(1498), o2 = A2(7599);
    class s extends n2.Message {
      constructor(e3) {
        super(), this.seconds = r2.protoInt64.zero, this.nanos = 0, o2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, t3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${o2.proto3.json.debug(e3)}`);
        const A3 = e3.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!A3) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const n3 = Date.parse(A3[1] + "-" + A3[2] + "-" + A3[3] + "T" + A3[4] + ":" + A3[5] + ":" + A3[6] + (A3[8] ? A3[8] : "Z"));
        if (Number.isNaN(n3)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (n3 < Date.parse("0001-01-01T00:00:00Z") || n3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = r2.protoInt64.parse(n3 / 1e3), this.nanos = 0, A3[7] && (this.nanos = parseInt("1" + A3[7] + "0".repeat(9 - A3[7].length)) - 1e9), this;
      }
      toJson(e3) {
        const t3 = 1e3 * Number(this.seconds);
        if (t3 < Date.parse("0001-01-01T00:00:00Z") || t3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let A3 = "Z";
        if (this.nanos > 0) {
          const e4 = (this.nanos + 1e9).toString().substring(1);
          A3 = "000000" === e4.substring(3) ? "." + e4.substring(0, 3) + "Z" : "000" === e4.substring(6) ? "." + e4.substring(0, 6) + "Z" : "." + e4 + "Z";
        }
        return new Date(t3).toISOString().replace(".000Z", A3);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return s.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(e3) {
        const t3 = e3.getTime();
        return new s({ seconds: r2.protoInt64.parse(Math.floor(t3 / 1e3)), nanos: t3 % 1e3 * 1e6 });
      }
      static fromBinary(e3, t3) {
        return new s().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(s, e3, t3);
      }
    }
    t2.Timestamp = s, s.runtime = o2.proto3, s.typeName = "google.protobuf.Timestamp", s.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }