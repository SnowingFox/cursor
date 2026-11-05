// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8245 range:317661..321492
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8245: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.Any = void 0;
    const s10 = n10(4193), o10 = n10(7599);
    class r10 extends s10.Message {
      constructor(e11) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), o10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        var a11;
        if ("" === this.typeUrl) return {};
        const n11 = this.typeUrlToName(this.typeUrl), s11 = null === (a11 = null == e11 ? void 0 : e11.typeRegistry) || void 0 === a11 ? void 0 : a11.findMessage(n11);
        if (!s11) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let o11 = s11.fromBinary(this.value).toJson(e11);
        return (n11.startsWith("google.protobuf.") || null === o11 || Array.isArray(o11) || "object" != typeof o11) && (o11 = { value: o11 }), o11["@type"] = this.typeUrl, o11;
      }
      fromJson(e11, a11) {
        var n11;
        if (null === e11 || Array.isArray(e11) || "object" != typeof e11) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e11 ? "null" : Array.isArray(e11) ? "array" : typeof e11));
        if (0 == Object.keys(e11).length) return this;
        const s11 = e11["@type"];
        if ("string" != typeof s11 || "" == s11) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const o11 = this.typeUrlToName(s11), r11 = null === (n11 = null == a11 ? void 0 : a11.typeRegistry) || void 0 === n11 ? void 0 : n11.findMessage(o11);
        if (!r11) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${s11} is not in the type registry`);
        let t10;
        if (o11.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e11, "value")) t10 = r11.fromJson(e11.value, a11);
        else {
          const n12 = Object.assign({}, e11);
          delete n12["@type"], t10 = r11.fromJson(n12, a11);
        }
        return this.packFrom(t10), this;
      }
      packFrom(e11) {
        this.value = e11.toBinary(), this.typeUrl = this.typeNameToUrl(e11.getType().typeName);
      }
      unpackTo(e11) {
        return !!this.is(e11.getType()) && (e11.fromBinary(this.value), true);
      }
      unpack(e11) {
        if ("" === this.typeUrl) return;
        const a11 = e11.findMessage(this.typeUrlToName(this.typeUrl));
        return a11 ? a11.fromBinary(this.value) : void 0;
      }
      is(e11) {
        if ("" === this.typeUrl) return false;
        const a11 = this.typeUrlToName(this.typeUrl);
        let n11 = "";
        return n11 = "string" == typeof e11 ? e11 : e11.typeName, a11 === n11;
      }
      typeNameToUrl(e11) {
        return `type.googleapis.com/${e11}`;
      }
      typeUrlToName(e11) {
        if (!e11.length) throw new Error(`invalid type url: ${e11}`);
        const a11 = e11.lastIndexOf("/"), n11 = a11 >= 0 ? e11.substring(a11 + 1) : e11;
        if (!n11.length) throw new Error(`invalid type url: ${e11}`);
        return n11;
      }
      static pack(e11) {
        const a11 = new r10();
        return a11.packFrom(e11), a11;
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
    a10.Any = r10, r10.runtime = o10.proto3, r10.typeName = "google.protobuf.Any", r10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  }