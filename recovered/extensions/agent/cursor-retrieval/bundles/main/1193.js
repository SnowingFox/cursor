// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1193 range:161910..164247
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1193: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.Duration = void 0;
    const t2 = n2(4193), s2 = n2(1498), o2 = n2(7599);
    class r2 extends t2.Message {
      constructor(e3) {
        super(), this.seconds = s2.protoInt64.zero, this.nanos = 0, o2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, a3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o2.proto3.json.debug(e3)}`);
        const n3 = e3.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === n3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o2.proto3.json.debug(e3)}`);
        const t3 = Number(n3[1]);
        if (t3 > 315576e6 || t3 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o2.proto3.json.debug(e3)}`);
        if (this.seconds = s2.protoInt64.parse(t3), "string" == typeof n3[2]) {
          const e4 = n3[2] + "0".repeat(9 - n3[2].length);
          this.nanos = parseInt(e4), (t3 < 0 || Object.is(t3, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(e3) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let a3 = this.seconds.toString();
        if (0 !== this.nanos) {
          let e4 = Math.abs(this.nanos).toString();
          e4 = "0".repeat(9 - e4.length) + e4, "000000" === e4.substring(3) ? e4 = e4.substring(0, 3) : "000" === e4.substring(6) && (e4 = e4.substring(0, 6)), a3 += "." + e4, this.nanos < 0 && 0 == Number(this.seconds) && (a3 = "-" + a3);
        }
        return a3 + "s";
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
    a2.Duration = r2, r2.runtime = o2.proto3, r2.typeName = "google.protobuf.Duration", r2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }