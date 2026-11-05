// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 970 range:126327..128810
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
970: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.FieldMask = void 0;
    const t2 = n2(4193), s2 = n2(7599);
    class o2 extends t2.Message {
      constructor(e3) {
        super(), this.paths = [], s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.paths.map((e4) => {
          if (e4.match(/_[0-9]?_/g) || e4.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e4 + '" is irreversible');
          return (function(e5) {
            let a3 = false;
            const n3 = [];
            for (let t3 = 0; t3 < e5.length; t3++) {
              let s3 = e5.charAt(t3);
              switch (s3) {
                case "_":
                  a3 = true;
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
                  n3.push(s3), a3 = false;
                  break;
                default:
                  a3 && (a3 = false, s3 = s3.toUpperCase()), n3.push(s3);
              }
            }
            return n3.join("");
          })(e4);
        }).join(",");
      }
      fromJson(e3, a3) {
        if ("string" != typeof e3) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + s2.proto3.json.debug(e3));
        if ("" === e3) return this;
        return this.paths = e3.split(",").map(function(e4) {
          if (e4.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const a4 = e4.replace(/[A-Z]/g, (e5) => "_" + e5.toLowerCase());
          return "_" === a4[0] ? a4.substring(1) : a4;
        }), this;
      }
      static fromBinary(e3, a3) {
        return new o2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new o2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new o2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(o2, e3, a3);
      }
    }
    a2.FieldMask = o2, o2.runtime = s2.proto3, o2.typeName = "google.protobuf.FieldMask", o2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  }