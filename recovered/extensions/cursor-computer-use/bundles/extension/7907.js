// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7907 range:628699..631875
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7907: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.Timestamp = void 0;
    const a2 = t2(4193), s2 = t2(1498), o2 = t2(7599);
    class r extends a2.Message {
      constructor(e3) {
        super(), this.seconds = s2.protoInt64.zero, this.nanos = 0, o2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, n3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${o2.proto3.json.debug(e3)}`);
        const t3 = e3.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!t3) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const a3 = Date.parse(t3[1] + "-" + t3[2] + "-" + t3[3] + "T" + t3[4] + ":" + t3[5] + ":" + t3[6] + (t3[8] ? t3[8] : "Z"));
        if (Number.isNaN(a3)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (a3 < Date.parse("0001-01-01T00:00:00Z") || a3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = s2.protoInt64.parse(a3 / 1e3), this.nanos = 0, t3[7] && (this.nanos = parseInt("1" + t3[7] + "0".repeat(9 - t3[7].length)) - 1e9), this;
      }
      toJson(e3) {
        const n3 = 1e3 * Number(this.seconds);
        if (n3 < Date.parse("0001-01-01T00:00:00Z") || n3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let t3 = "Z";
        if (this.nanos > 0) {
          const e4 = (this.nanos + 1e9).toString().substring(1);
          t3 = "000000" === e4.substring(3) ? "." + e4.substring(0, 3) + "Z" : "000" === e4.substring(6) ? "." + e4.substring(0, 6) + "Z" : "." + e4 + "Z";
        }
        return new Date(n3).toISOString().replace(".000Z", t3);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return r.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(e3) {
        const n3 = e3.getTime();
        return new r({ seconds: s2.protoInt64.parse(Math.floor(n3 / 1e3)), nanos: n3 % 1e3 * 1e6 });
      }
      static fromBinary(e3, n3) {
        return new r().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new r().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new r().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return o2.proto3.util.equals(r, e3, n3);
      }
    }
    n2.Timestamp = r, r.runtime = o2.proto3, r.typeName = "google.protobuf.Timestamp", r.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }