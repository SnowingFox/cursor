// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1193 range:69682..72088
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1193: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.Duration = void 0;
    const s10 = n10(4193), o10 = n10(1498), r10 = n10(7599);
    class t10 extends s10.Message {
      constructor(e11) {
        super(), this.seconds = o10.protoInt64.zero, this.nanos = 0, r10.proto3.util.initPartial(e11, this);
      }
      fromJson(e11, a11) {
        if ("string" != typeof e11) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${r10.proto3.json.debug(e11)}`);
        const n11 = e11.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === n11) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${r10.proto3.json.debug(e11)}`);
        const s11 = Number(n11[1]);
        if (s11 > 315576e6 || s11 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${r10.proto3.json.debug(e11)}`);
        if (this.seconds = o10.protoInt64.parse(s11), "string" == typeof n11[2]) {
          const e12 = n11[2] + "0".repeat(9 - n11[2].length);
          this.nanos = parseInt(e12), (s11 < 0 || Object.is(s11, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(e11) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let a11 = this.seconds.toString();
        if (0 !== this.nanos) {
          let e12 = Math.abs(this.nanos).toString();
          e12 = "0".repeat(9 - e12.length) + e12, "000000" === e12.substring(3) ? e12 = e12.substring(0, 3) : "000" === e12.substring(6) && (e12 = e12.substring(0, 6)), a11 += "." + e12, this.nanos < 0 && 0 == Number(this.seconds) && (a11 = "-" + a11);
        }
        return a11 + "s";
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
    a10.Duration = t10, t10.runtime = r10.proto3, t10.typeName = "google.protobuf.Duration", t10.fields = r10.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }