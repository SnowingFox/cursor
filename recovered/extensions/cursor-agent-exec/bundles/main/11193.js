// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 11193 range:727662..729972
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11193: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Duration = void 0;
    const n = r(24193), s = r(11498), o = r(27599);
    class i extends n.Message {
      constructor(e2) {
        super(), this.seconds = s.protoInt64.zero, this.nanos = 0, o.proto3.util.initPartial(e2, this);
      }
      fromJson(e2, t2) {
        if ("string" != typeof e2) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.proto3.json.debug(e2)}`);
        const r2 = e2.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === r2) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.proto3.json.debug(e2)}`);
        const n2 = Number(r2[1]);
        if (n2 > 315576e6 || n2 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.proto3.json.debug(e2)}`);
        if (this.seconds = s.protoInt64.parse(n2), "string" == typeof r2[2]) {
          const e3 = r2[2] + "0".repeat(9 - r2[2].length);
          this.nanos = parseInt(e3), (n2 < 0 || Object.is(n2, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(e2) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let t2 = this.seconds.toString();
        if (0 !== this.nanos) {
          let e3 = Math.abs(this.nanos).toString();
          e3 = "0".repeat(9 - e3.length) + e3, "000000" === e3.substring(3) ? e3 = e3.substring(0, 3) : "000" === e3.substring(6) && (e3 = e3.substring(0, 6)), t2 += "." + e3, this.nanos < 0 && 0 == Number(this.seconds) && (t2 = "-" + t2);
        }
        return t2 + "s";
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
    t.Duration = i, i.runtime = o.proto3, i.typeName = "google.protobuf.Duration", i.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }