// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 907 range:201423..204588
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
907: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Timestamp = void 0;
    const r2 = n2(193), o2 = n2(498), a2 = n2(599);
    class s2 extends r2.Message {
      constructor(e3) {
        super(), this.seconds = o2.protoInt64.zero, this.nanos = 0, a2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, t3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${a2.proto3.json.debug(e3)}`);
        const n3 = e3.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!n3) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const r3 = Date.parse(n3[1] + "-" + n3[2] + "-" + n3[3] + "T" + n3[4] + ":" + n3[5] + ":" + n3[6] + (n3[8] ? n3[8] : "Z"));
        if (Number.isNaN(r3)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (r3 < Date.parse("0001-01-01T00:00:00Z") || r3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = o2.protoInt64.parse(r3 / 1e3), this.nanos = 0, n3[7] && (this.nanos = parseInt("1" + n3[7] + "0".repeat(9 - n3[7].length)) - 1e9), this;
      }
      toJson(e3) {
        const t3 = 1e3 * Number(this.seconds);
        if (t3 < Date.parse("0001-01-01T00:00:00Z") || t3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let n3 = "Z";
        if (this.nanos > 0) {
          const e4 = (this.nanos + 1e9).toString().substring(1);
          n3 = "000000" === e4.substring(3) ? "." + e4.substring(0, 3) + "Z" : "000" === e4.substring(6) ? "." + e4.substring(0, 6) + "Z" : "." + e4 + "Z";
        }
        return new Date(t3).toISOString().replace(".000Z", n3);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return s2.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(e3) {
        const t3 = e3.getTime();
        return new s2({ seconds: o2.protoInt64.parse(Math.floor(t3 / 1e3)), nanos: t3 % 1e3 * 1e6 });
      }
      static fromBinary(e3, t3) {
        return new s2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return a2.proto3.util.equals(s2, e3, t3);
      }
    }
    t2.Timestamp = s2, s2.runtime = a2.proto3, s2.typeName = "google.protobuf.Timestamp", s2.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }