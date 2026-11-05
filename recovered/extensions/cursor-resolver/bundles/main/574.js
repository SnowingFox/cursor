// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 574 range:152060..154375
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
574: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Duration = void 0;
    const r2 = n2(193), o2 = n2(498), a2 = n2(599);
    class s2 extends r2.Message {
      constructor(e3) {
        super(), this.seconds = o2.protoInt64.zero, this.nanos = 0, a2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, t3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${a2.proto3.json.debug(e3)}`);
        const n3 = e3.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === n3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${a2.proto3.json.debug(e3)}`);
        const r3 = Number(n3[1]);
        if (r3 > 315576e6 || r3 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${a2.proto3.json.debug(e3)}`);
        if (this.seconds = o2.protoInt64.parse(r3), "string" == typeof n3[2]) {
          const e4 = n3[2] + "0".repeat(9 - n3[2].length);
          this.nanos = parseInt(e4), (r3 < 0 || Object.is(r3, -0)) && (this.nanos = -this.nanos);
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
    t2.Duration = s2, s2.runtime = a2.proto3, s2.typeName = "google.protobuf.Duration", s2.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }