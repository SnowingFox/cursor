// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 60970 range:9330914..9333376
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60970: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.FieldMask = void 0;
    const n = r(24193), s = r(27599);
    class o extends n.Message {
      constructor(e2) {
        super(), this.paths = [], s.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return this.paths.map((e3) => {
          if (e3.match(/_[0-9]?_/g) || e3.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e3 + '" is irreversible');
          return (function(e4) {
            let t2 = false;
            const r2 = [];
            for (let n2 = 0; n2 < e4.length; n2++) {
              let s2 = e4.charAt(n2);
              switch (s2) {
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
                  r2.push(s2), t2 = false;
                  break;
                default:
                  t2 && (t2 = false, s2 = s2.toUpperCase()), r2.push(s2);
              }
            }
            return r2.join("");
          })(e3);
        }).join(",");
      }
      fromJson(e2, t2) {
        if ("string" != typeof e2) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + s.proto3.json.debug(e2));
        if ("" === e2) return this;
        return this.paths = e2.split(",").map(function(e3) {
          if (e3.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const t3 = e3.replace(/[A-Z]/g, (e4) => "_" + e4.toLowerCase());
          return "_" === t3[0] ? t3.substring(1) : t3;
        }), this;
      }
      static fromBinary(e2, t2) {
        return new o().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new o().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new o().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return s.proto3.util.equals(o, e2, t2);
      }
    }
    t.FieldMask = o, o.runtime = s.proto3, o.typeName = "google.protobuf.FieldMask", o.fields = s.proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  }