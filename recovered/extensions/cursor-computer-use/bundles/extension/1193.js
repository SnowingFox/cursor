// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1193 range:151200..153528
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1193: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.Duration = void 0;
    const a2 = t2(4193), s2 = t2(1498), o2 = t2(7599);
    class r extends a2.Message {
      constructor(e3) {
        super(), this.seconds = s2.protoInt64.zero, this.nanos = 0, o2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, n3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o2.proto3.json.debug(e3)}`);
        const t3 = e3.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === t3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o2.proto3.json.debug(e3)}`);
        const a3 = Number(t3[1]);
        if (a3 > 315576e6 || a3 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o2.proto3.json.debug(e3)}`);
        if (this.seconds = s2.protoInt64.parse(a3), "string" == typeof t3[2]) {
          const e4 = t3[2] + "0".repeat(9 - t3[2].length);
          this.nanos = parseInt(e4), (a3 < 0 || Object.is(a3, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(e3) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let n3 = this.seconds.toString();
        if (0 !== this.nanos) {
          let e4 = Math.abs(this.nanos).toString();
          e4 = "0".repeat(9 - e4.length) + e4, "000000" === e4.substring(3) ? e4 = e4.substring(0, 3) : "000" === e4.substring(6) && (e4 = e4.substring(0, 6)), n3 += "." + e4, this.nanos < 0 && 0 == Number(this.seconds) && (n3 = "-" + n3);
        }
        return n3 + "s";
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
    n2.Duration = r, r.runtime = o2.proto3, r.typeName = "google.protobuf.Duration", r.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }