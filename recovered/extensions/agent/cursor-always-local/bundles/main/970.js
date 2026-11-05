// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 970 range:370109..372592
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
970: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.FieldMask = void 0;
    const n2 = r2(4193), s2 = r2(7599);
    class i2 extends n2.Message {
      constructor(t3) {
        super(), this.paths = [], s2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        return this.paths.map((t4) => {
          if (t4.match(/_[0-9]?_/g) || t4.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + t4 + '" is irreversible');
          return (function(t5) {
            let e3 = false;
            const r3 = [];
            for (let n3 = 0; n3 < t5.length; n3++) {
              let s3 = t5.charAt(n3);
              switch (s3) {
                case "_":
                  e3 = true;
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  r3.push(s3), e3 = false;
                  break;
                default:
                  e3 && (e3 = false, s3 = s3.toUpperCase()), r3.push(s3);
              }
            }
            return r3.join("");
          })(t4);
        }).join(",");
      }
      fromJson(t3, e3) {
        if ("string" != typeof t3) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + s2.proto3.json.debug(t3));
        if ("" === t3) return this;
        return this.paths = t3.split(",").map(function(t4) {
          if (t4.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const e4 = t4.replace(/[A-Z]/g, (t5) => "_" + t5.toLowerCase());
          return "_" === e4[0] ? e4.substring(1) : e4;
        }), this;
      }
      static fromBinary(t3, e3) {
        return new i2().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new i2().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new i2().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(i2, t3, e3);
      }
    }
    e2.FieldMask = i2, i2.runtime = s2.proto3, i2.typeName = "google.protobuf.FieldMask", i2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  }