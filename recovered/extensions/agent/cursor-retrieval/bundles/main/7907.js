// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7907 range:919054..922241
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7907: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.Timestamp = void 0;
    const t2 = n2(4193), s2 = n2(1498), o2 = n2(7599);
    class r2 extends t2.Message {
      constructor(e3) {
        super(), this.seconds = s2.protoInt64.zero, this.nanos = 0, o2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, a3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${o2.proto3.json.debug(e3)}`);
        const n3 = e3.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!n3) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const t3 = Date.parse(n3[1] + "-" + n3[2] + "-" + n3[3] + "T" + n3[4] + ":" + n3[5] + ":" + n3[6] + (n3[8] ? n3[8] : "Z"));
        if (Number.isNaN(t3)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (t3 < Date.parse("0001-01-01T00:00:00Z") || t3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = s2.protoInt64.parse(t3 / 1e3), this.nanos = 0, n3[7] && (this.nanos = parseInt("1" + n3[7] + "0".repeat(9 - n3[7].length)) - 1e9), this;
      }
      toJson(e3) {
        const a3 = 1e3 * Number(this.seconds);
        if (a3 < Date.parse("0001-01-01T00:00:00Z") || a3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let n3 = "Z";
        if (this.nanos > 0) {
          const e4 = (this.nanos + 1e9).toString().substring(1);
          n3 = "000000" === e4.substring(3) ? "." + e4.substring(0, 3) + "Z" : "000" === e4.substring(6) ? "." + e4.substring(0, 6) + "Z" : "." + e4 + "Z";
        }
        return new Date(a3).toISOString().replace(".000Z", n3);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return r2.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(e3) {
        const a3 = e3.getTime();
        return new r2({ seconds: s2.protoInt64.parse(Math.floor(a3 / 1e3)), nanos: a3 % 1e3 * 1e6 });
      }
      static fromBinary(e3, a3) {
        return new r2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new r2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new r2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return o2.proto3.util.equals(r2, e3, a3);
      }
    }
    a2.Timestamp = r2, r2.runtime = o2.proto3, r2.typeName = "google.protobuf.Timestamp", r2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }