// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 970 range:26471..29022
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
970: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.FieldMask = void 0;
    const s10 = n10(4193), o10 = n10(7599);
    class r10 extends s10.Message {
      constructor(e11) {
        super(), this.paths = [], o10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        return this.paths.map((e12) => {
          if (e12.match(/_[0-9]?_/g) || e12.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e12 + '" is irreversible');
          return (function(e13) {
            let a11 = false;
            const n11 = [];
            for (let s11 = 0; s11 < e13.length; s11++) {
              let o11 = e13.charAt(s11);
              switch (o11) {
                case "_":
                  a11 = true;
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
                  n11.push(o11), a11 = false;
                  break;
                default:
                  a11 && (a11 = false, o11 = o11.toUpperCase()), n11.push(o11);
              }
            }
            return n11.join("");
          })(e12);
        }).join(",");
      }
      fromJson(e11, a11) {
        if ("string" != typeof e11) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + o10.proto3.json.debug(e11));
        if ("" === e11) return this;
        return this.paths = e11.split(",").map(function(e12) {
          if (e12.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const a12 = e12.replace(/[A-Z]/g, (e13) => "_" + e13.toLowerCase());
          return "_" === a12[0] ? a12.substring(1) : a12;
        }), this;
      }
      static fromBinary(e11, a11) {
        return new r10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new r10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new r10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto3.util.equals(r10, e11, a11);
      }
    }
    a10.FieldMask = r10, r10.runtime = o10.proto3, r10.typeName = "google.protobuf.FieldMask", r10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  }