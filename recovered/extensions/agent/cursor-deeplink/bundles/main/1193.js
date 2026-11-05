// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1193 range:152917..155245
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1193: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Duration = void 0;
    const n2 = A2(4193), r2 = A2(1498), o2 = A2(7599);
    class s extends n2.Message {
      constructor(e3) {
        super(), this.seconds = r2.protoInt64.zero, this.nanos = 0, o2.proto3.util.initPartial(e3, this);
      }
      fromJson(e3, t3) {
        if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o2.proto3.json.debug(e3)}`);
        const A3 = e3.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === A3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o2.proto3.json.debug(e3)}`);
        const n3 = Number(A3[1]);
        if (n3 > 315576e6 || n3 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o2.proto3.json.debug(e3)}`);
        if (this.seconds = r2.protoInt64.parse(n3), "string" == typeof A3[2]) {
          const e4 = A3[2] + "0".repeat(9 - A3[2].length);
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
        return new s().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(s, e3, t3);
      }
    }
    t2.Duration = s, s.runtime = o2.proto3, s.typeName = "google.protobuf.Duration", s.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  }