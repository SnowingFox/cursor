// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 87907 range:12245226..12248385
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
87907: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Timestamp = void 0;
    const n = r(24193), s = r(11498), o = r(27599);
    class i extends n.Message {
      constructor(e2) {
        super(), this.seconds = s.protoInt64.zero, this.nanos = 0, o.proto3.util.initPartial(e2, this);
      }
      fromJson(e2, t2) {
        if ("string" != typeof e2) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${o.proto3.json.debug(e2)}`);
        const r2 = e2.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!r2) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const n2 = Date.parse(r2[1] + "-" + r2[2] + "-" + r2[3] + "T" + r2[4] + ":" + r2[5] + ":" + r2[6] + (r2[8] ? r2[8] : "Z"));
        if (Number.isNaN(n2)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (n2 < Date.parse("0001-01-01T00:00:00Z") || n2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = s.protoInt64.parse(n2 / 1e3), this.nanos = 0, r2[7] && (this.nanos = parseInt("1" + r2[7] + "0".repeat(9 - r2[7].length)) - 1e9), this;
      }
      toJson(e2) {
        const t2 = 1e3 * Number(this.seconds);
        if (t2 < Date.parse("0001-01-01T00:00:00Z") || t2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let r2 = "Z";
        if (this.nanos > 0) {
          const e3 = (this.nanos + 1e9).toString().substring(1);
          r2 = "000000" === e3.substring(3) ? "." + e3.substring(0, 3) + "Z" : "000" === e3.substring(6) ? "." + e3.substring(0, 6) + "Z" : "." + e3 + "Z";
        }
        return new Date(t2).toISOString().replace(".000Z", r2);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return i.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(e2) {
        const t2 = e2.getTime();
        return new i({ seconds: s.protoInt64.parse(Math.floor(t2 / 1e3)), nanos: t2 % 1e3 * 1e6 });
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
        return o.proto3.util.equals(i, e2, t2);
      }
    }
    t.Timestamp = i, i.runtime = o.proto3, i.typeName = "google.protobuf.Timestamp", i.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }