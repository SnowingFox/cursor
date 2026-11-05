// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 970 range:116216..118699
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
970: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.FieldMask = void 0;
    const n2 = A2(4193), r2 = A2(7599);
    class o2 extends n2.Message {
      constructor(e3) {
        super(), this.paths = [], r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.paths.map((e4) => {
          if (e4.match(/_[0-9]?_/g) || e4.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e4 + '" is irreversible');
          return (function(e5) {
            let t3 = false;
            const A3 = [];
            for (let n3 = 0; n3 < e5.length; n3++) {
              let r3 = e5.charAt(n3);
              switch (r3) {
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
                  A3.push(r3), t3 = false;
                  break;
                default:
                  t3 && (t3 = false, r3 = r3.toUpperCase()), A3.push(r3);
              }
            }
            return A3.join("");
          })(e4);
        }).join(",");
      }
      fromJson(e3, t3) {
        if ("string" != typeof e3) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + r2.proto3.json.debug(e3));
        if ("" === e3) return this;
        return this.paths = e3.split(",").map(function(e4) {
          if (e4.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const t4 = e4.replace(/[A-Z]/g, (e5) => "_" + e5.toLowerCase());
          return "_" === t4[0] ? t4.substring(1) : t4;
        }), this;
      }
      static fromBinary(e3, t3) {
        return new o2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new o2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new o2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(o2, e3, t3);
      }
    }
    t2.FieldMask = o2, o2.runtime = r2.proto3, o2.typeName = "google.protobuf.FieldMask", o2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  }