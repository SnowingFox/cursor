// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 60970 range:1887864..1890326
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60970: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.FieldMask = void 0;
    const n = r(24193), o = r(27599);
    class s extends n.Message {
      constructor(e2) {
        super(), this.paths = [], o.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return this.paths.map((e3) => {
          if (e3.match(/_[0-9]?_/g) || e3.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e3 + '" is irreversible');
          return (function(e4) {
            let t2 = false;
            const r2 = [];
            for (let n2 = 0; n2 < e4.length; n2++) {
              let o2 = e4.charAt(n2);
              switch (o2) {
                case "_":
                  t2 = true;
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
                  r2.push(o2), t2 = false;
                  break;
                default:
                  t2 && (t2 = false, o2 = o2.toUpperCase()), r2.push(o2);
              }
            }
            return r2.join("");
          })(e3);
        }).join(",");
      }
      fromJson(e2, t2) {
        if ("string" != typeof e2) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + o.proto3.json.debug(e2));
        if ("" === e2) return this;
        return this.paths = e2.split(",").map(function(e3) {
          if (e3.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const t3 = e3.replace(/[A-Z]/g, (e4) => "_" + e4.toLowerCase());
          return "_" === t3[0] ? t3.substring(1) : t3;
        }), this;
      }
      static fromBinary(e2, t2) {
        return new s().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new s().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new s().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(s, e2, t2);
      }
    }
    t.FieldMask = s, s.runtime = o.proto3, s.typeName = "google.protobuf.FieldMask", s.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  }