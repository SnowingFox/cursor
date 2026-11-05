// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7907 range:4617057..4620244
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7907: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Timestamp = void 0;
    const n2 = r2(4193), s2 = r2(1498), i2 = r2(7599);
    class o2 extends n2.Message {
      constructor(t3) {
        super(), this.seconds = s2.protoInt64.zero, this.nanos = 0, i2.proto3.util.initPartial(t3, this);
      }
      fromJson(t3, e3) {
        if ("string" != typeof t3) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${i2.proto3.json.debug(t3)}`);
        const r3 = t3.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!r3) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const n3 = Date.parse(r3[1] + "-" + r3[2] + "-" + r3[3] + "T" + r3[4] + ":" + r3[5] + ":" + r3[6] + (r3[8] ? r3[8] : "Z"));
        if (Number.isNaN(n3)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (n3 < Date.parse("0001-01-01T00:00:00Z") || n3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = s2.protoInt64.parse(n3 / 1e3), this.nanos = 0, r3[7] && (this.nanos = parseInt("1" + r3[7] + "0".repeat(9 - r3[7].length)) - 1e9), this;
      }
      toJson(t3) {
        const e3 = 1e3 * Number(this.seconds);
        if (e3 < Date.parse("0001-01-01T00:00:00Z") || e3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let r3 = "Z";
        if (this.nanos > 0) {
          const t4 = (this.nanos + 1e9).toString().substring(1);
          r3 = "000000" === t4.substring(3) ? "." + t4.substring(0, 3) + "Z" : "000" === t4.substring(6) ? "." + t4.substring(0, 6) + "Z" : "." + t4 + "Z";
        }
        return new Date(e3).toISOString().replace(".000Z", r3);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return o2.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(t3) {
        const e3 = t3.getTime();
        return new o2({ seconds: s2.protoInt64.parse(Math.floor(e3 / 1e3)), nanos: e3 % 1e3 * 1e6 });
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
        return i2.proto3.util.equals(o2, t3, e3);
      }
    }
    e2.Timestamp = o2, o2.runtime = i2.proto3, o2.typeName = "google.protobuf.Timestamp", o2.fields = i2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }