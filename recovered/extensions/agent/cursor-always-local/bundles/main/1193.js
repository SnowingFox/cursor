// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1193 range:433063..435400
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1193: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Duration = void 0;
    const n2 = r2(4193), s2 = r2(1498), i2 = r2(7599);
    class o2 extends n2.Message {
      constructor(t3) {
        super(), this.seconds = s2.protoInt64.zero, this.nanos = 0, i2.proto3.util.initPartial(t3, this);
      }
      fromJson(t3, e3) {
        if ("string" != typeof t3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${i2.proto3.json.debug(t3)}`);
        const r3 = t3.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === r3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${i2.proto3.json.debug(t3)}`);
        const n3 = Number(r3[1]);
        if (n3 > 315576e6 || n3 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${i2.proto3.json.debug(t3)}`);
        if (this.seconds = s2.protoInt64.parse(n3), "string" == typeof r3[2]) {
          const t4 = r3[2] + "0".repeat(9 - r3[2].length);
          this.nanos = parseInt(t4), (n3 < 0 || Object.is(n3, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(t3) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let e3 = this.seconds.toString();
        if (0 !== this.nanos) {
          let t4 = Math.abs(this.nanos).toString();
          t4 = "0".repeat(9 - t4.length) + t4, "000000" === t4.substring(3) ? t4 = t4.substring(0, 3) : "000" === t4.substring(6) && (t4 = t4.substring(0, 6)), e3 += "." + t4, this.nanos < 0 && 0 == Number(this.seconds) && (e3 = "-" + e3);
        }
        return e3 + "s";
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
    e2.Duration = o2, o2.runtime = i2.proto3, o2.typeName = "google.protobuf.Duration", o2.fields = i2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }