// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7907 range:294224..297485
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7907: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.Timestamp = void 0;
    const s10 = n10(4193), o10 = n10(1498), r10 = n10(7599);
    class t10 extends s10.Message {
      constructor(e11) {
        super(), this.seconds = o10.protoInt64.zero, this.nanos = 0, r10.proto3.util.initPartial(e11, this);
      }
      fromJson(e11, a11) {
        if ("string" != typeof e11) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${r10.proto3.json.debug(e11)}`);
        const n11 = e11.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!n11) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const s11 = Date.parse(n11[1] + "-" + n11[2] + "-" + n11[3] + "T" + n11[4] + ":" + n11[5] + ":" + n11[6] + (n11[8] ? n11[8] : "Z"));
        if (Number.isNaN(s11)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (s11 < Date.parse("0001-01-01T00:00:00Z") || s11 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = o10.protoInt64.parse(s11 / 1e3), this.nanos = 0, n11[7] && (this.nanos = parseInt("1" + n11[7] + "0".repeat(9 - n11[7].length)) - 1e9), this;
      }
      toJson(e11) {
        const a11 = 1e3 * Number(this.seconds);
        if (a11 < Date.parse("0001-01-01T00:00:00Z") || a11 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let n11 = "Z";
        if (this.nanos > 0) {
          const e12 = (this.nanos + 1e9).toString().substring(1);
          n11 = "000000" === e12.substring(3) ? "." + e12.substring(0, 3) + "Z" : "000" === e12.substring(6) ? "." + e12.substring(0, 6) + "Z" : "." + e12 + "Z";
        }
        return new Date(a11).toISOString().replace(".000Z", n11);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return t10.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(e11) {
        const a11 = e11.getTime();
        return new t10({ seconds: o10.protoInt64.parse(Math.floor(a11 / 1e3)), nanos: a11 % 1e3 * 1e6 });
      }
      static fromBinary(e11, a11) {
        return new t10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new t10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new t10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return r10.proto3.util.equals(t10, e11, a11);
      }
    }
    a10.Timestamp = t10, t10.runtime = r10.proto3, t10.typeName = "google.protobuf.Timestamp", t10.fields = r10.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }