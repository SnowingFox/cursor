// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 970 range:115628..118111
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
970: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.FieldMask = void 0;
    const a2 = t2(4193), s2 = t2(7599);
    class o2 extends a2.Message {
      constructor(e3) {
        super(), this.paths = [], s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.paths.map((e4) => {
          if (e4.match(/_[0-9]?_/g) || e4.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e4 + '" is irreversible');
          return (function(e5) {
            let n3 = false;
            const t3 = [];
            for (let a3 = 0; a3 < e5.length; a3++) {
              let s3 = e5.charAt(a3);
              switch (s3) {
                case "_":
                  n3 = true;
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
                  t3.push(s3), n3 = false;
                  break;
                default:
                  n3 && (n3 = false, s3 = s3.toUpperCase()), t3.push(s3);
              }
            }
            return t3.join("");
          })(e4);
        }).join(",");
      }
      fromJson(e3, n3) {
        if ("string" != typeof e3) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + s2.proto3.json.debug(e3));
        if ("" === e3) return this;
        return this.paths = e3.split(",").map(function(e4) {
          if (e4.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const n4 = e4.replace(/[A-Z]/g, (e5) => "_" + e5.toLowerCase());
          return "_" === n4[0] ? n4.substring(1) : n4;
        }), this;
      }
      static fromBinary(e3, n3) {
        return new o2().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new o2().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new o2().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(o2, e3, n3);
      }
    }
    n2.FieldMask = o2, o2.runtime = s2.proto3, o2.typeName = "google.protobuf.FieldMask", o2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  }