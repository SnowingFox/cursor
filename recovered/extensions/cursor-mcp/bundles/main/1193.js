// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1193 range:145028..147365
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1193: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Duration = void 0;
    const n2 = r2(4193), o2 = r2(1498), s2 = r2(7599);
    class i2 extends n2.Message {
      constructor(e3) {
        super(), this.seconds = o2.protoInt64.zero, this.nanos = 0, s2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, t3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s2.proto3.json.debug(e3)}`);
        const r3 = e3.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === r3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s2.proto3.json.debug(e3)}`);
        const n3 = Number(r3[1]);
        if (n3 > 315576e6 || n3 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s2.proto3.json.debug(e3)}`);
        if (this.seconds = o2.protoInt64.parse(n3), "string" == typeof r3[2]) {
          const e4 = r3[2] + "0".repeat(9 - r3[2].length);
          this.nanos = parseInt(e4), (n3 < 0 || Object.is(n3, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(e3) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let t3 = this.seconds.toString();
        if (0 !== this.nanos) {
          let e4 = Math.abs(this.nanos).toString();
          e4 = "0".repeat(9 - e4.length) + e4, "000000" === e4.substring(3) ? e4 = e4.substring(0, 3) : "000" === e4.substring(6) && (e4 = e4.substring(0, 6)), t3 += "." + e4, this.nanos < 0 && 0 == Number(this.seconds) && (t3 = "-" + t3);
        }
        return t3 + "s";
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
    t2.Duration = i2, i2.runtime = s2.proto3, i2.typeName = "google.protobuf.Duration", i2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }