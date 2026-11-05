// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7907 range:597279..600455
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7907: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.Timestamp = void 0;
    const n2 = t2(4193), r2 = t2(1498), o2 = t2(7599);
    class s extends n2.Message {
      constructor(e3) {
        super(), this.seconds = r2.protoInt64.zero, this.nanos = 0, o2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, A3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${o2.proto3.json.debug(e3)}`);
        const t3 = e3.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!t3) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const n3 = Date.parse(t3[1] + "-" + t3[2] + "-" + t3[3] + "T" + t3[4] + ":" + t3[5] + ":" + t3[6] + (t3[8] ? t3[8] : "Z"));
        if (Number.isNaN(n3)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (n3 < Date.parse("0001-01-01T00:00:00Z") || n3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = r2.protoInt64.parse(n3 / 1e3), this.nanos = 0, t3[7] && (this.nanos = parseInt("1" + t3[7] + "0".repeat(9 - t3[7].length)) - 1e9), this;
      }
      toJson(e3) {
        const A3 = 1e3 * Number(this.seconds);
        if (A3 < Date.parse("0001-01-01T00:00:00Z") || A3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let t3 = "Z";
        if (this.nanos > 0) {
          const e4 = (this.nanos + 1e9).toString().substring(1);
          t3 = "000000" === e4.substring(3) ? "." + e4.substring(0, 3) + "Z" : "000" === e4.substring(6) ? "." + e4.substring(0, 6) + "Z" : "." + e4 + "Z";
        }
        return new Date(A3).toISOString().replace(".000Z", t3);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return s.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(e3) {
        const A3 = e3.getTime();
        return new s({ seconds: r2.protoInt64.parse(Math.floor(A3 / 1e3)), nanos: A3 % 1e3 * 1e6 });
      }
      static fromBinary(e3, A3) {
        return new s().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new s().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new s().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return o2.proto3.util.equals(s, e3, A3);
      }
    }
    A2.Timestamp = s, s.runtime = o2.proto3, s.typeName = "google.protobuf.Timestamp", s.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }