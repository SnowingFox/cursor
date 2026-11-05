// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 970 range:210423..212886
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
970: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.FieldMask = void 0;
    const r2 = n2(193), o2 = n2(599);
    class a2 extends r2.Message {
      constructor(e3) {
        super(), this.paths = [], o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.paths.map((e4) => {
          if (e4.match(/_[0-9]?_/g) || e4.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e4 + '" is irreversible');
          return (function(e5) {
            let t3 = false;
            const n3 = [];
            for (let r3 = 0; r3 < e5.length; r3++) {
              let o3 = e5.charAt(r3);
              switch (o3) {
                case "_":
                  t3 = true;
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
                  n3.push(o3), t3 = false;
                  break;
                default:
                  t3 && (t3 = false, o3 = o3.toUpperCase()), n3.push(o3);
              }
            }
            return n3.join("");
          })(e4);
        }).join(",");
      }
      fromJson(e3, t3) {
        if ("string" != typeof e3) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + o2.proto3.json.debug(e3));
        if ("" === e3) return this;
        return this.paths = e3.split(",").map(function(e4) {
          if (e4.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const t4 = e4.replace(/[A-Z]/g, (e5) => "_" + e5.toLowerCase());
          return "_" === t4[0] ? t4.substring(1) : t4;
        }), this;
      }
      static fromBinary(e3, t3) {
        return new a2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new a2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new a2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(a2, e3, t3);
      }
    }
    t2.FieldMask = a2, a2.runtime = o2.proto3, a2.typeName = "google.protobuf.FieldMask", a2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  }