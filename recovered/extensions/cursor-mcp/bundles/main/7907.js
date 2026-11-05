// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7907 range:712350..715537
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7907: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Timestamp = void 0;
    const n2 = r2(4193), o2 = r2(1498), s2 = r2(7599);
    class i2 extends n2.Message {
      constructor(e3) {
        super(), this.seconds = o2.protoInt64.zero, this.nanos = 0, s2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, t3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${s2.proto3.json.debug(e3)}`);
        const r3 = e3.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!r3) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const n3 = Date.parse(r3[1] + "-" + r3[2] + "-" + r3[3] + "T" + r3[4] + ":" + r3[5] + ":" + r3[6] + (r3[8] ? r3[8] : "Z"));
        if (Number.isNaN(n3)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (n3 < Date.parse("0001-01-01T00:00:00Z") || n3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = o2.protoInt64.parse(n3 / 1e3), this.nanos = 0, r3[7] && (this.nanos = parseInt("1" + r3[7] + "0".repeat(9 - r3[7].length)) - 1e9), this;
      }
      toJson(e3) {
        const t3 = 1e3 * Number(this.seconds);
        if (t3 < Date.parse("0001-01-01T00:00:00Z") || t3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let r3 = "Z";
        if (this.nanos > 0) {
          const e4 = (this.nanos + 1e9).toString().substring(1);
          r3 = "000000" === e4.substring(3) ? "." + e4.substring(0, 3) + "Z" : "000" === e4.substring(6) ? "." + e4.substring(0, 6) + "Z" : "." + e4 + "Z";
        }
        return new Date(t3).toISOString().replace(".000Z", r3);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return i2.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(e3) {
        const t3 = e3.getTime();
        return new i2({ seconds: o2.protoInt64.parse(Math.floor(t3 / 1e3)), nanos: t3 % 1e3 * 1e6 });
      }
      static fromBinary(e3, t3) {
        return new i2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new i2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new i2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return s2.proto3.util.equals(i2, e3, t3);
      }
    }
    t2.Timestamp = i2, i2.runtime = s2.proto3, i2.typeName = "google.protobuf.Timestamp", i2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }