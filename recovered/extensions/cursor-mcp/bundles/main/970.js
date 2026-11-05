// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 970 range:70103..72586
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
970: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.FieldMask = void 0;
    const n2 = r2(4193), o2 = r2(7599);
    class s2 extends n2.Message {
      constructor(e3) {
        super(), this.paths = [], o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.paths.map((e4) => {
          if (e4.match(/_[0-9]?_/g) || e4.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e4 + '" is irreversible');
          return (function(e5) {
            let t3 = false;
            const r3 = [];
            for (let n3 = 0; n3 < e5.length; n3++) {
              let o3 = e5.charAt(n3);
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
                  r3.push(o3), t3 = false;
                  break;
                default:
                  t3 && (t3 = false, o3 = o3.toUpperCase()), r3.push(o3);
              }
            }
            return r3.join("");
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
        return new s2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(s2, e3, t3);
      }
    }
    t2.FieldMask = s2, s2.runtime = o2.proto3, s2.typeName = "google.protobuf.FieldMask", s2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  }