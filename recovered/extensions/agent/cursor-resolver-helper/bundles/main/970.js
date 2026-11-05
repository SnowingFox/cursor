// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 970 range:210423..212886
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
970: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.FieldMask = void 0;
    const o2 = n2(193), s2 = n2(599);
    class t2 extends o2.Message {
      constructor(e3) {
        super(), this.paths = [], s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.paths.map((e4) => {
          if (e4.match(/_[0-9]?_/g) || e4.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e4 + '" is irreversible');
          return (function(e5) {
            let a3 = false;
            const n3 = [];
            for (let o3 = 0; o3 < e5.length; o3++) {
              let s3 = e5.charAt(o3);
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
        return new t2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new t2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new t2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(t2, e3, a3);
      }
    }
    a2.FieldMask = t2, t2.runtime = s2.proto3, t2.typeName = "google.protobuf.FieldMask", t2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  }