// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 245 range:62104..65787
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
245: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Any = void 0;
    const r2 = n2(193), o2 = n2(599);
    class a2 extends r2.Message {
      constructor(e3) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        var t3;
        if ("" === this.typeUrl) return {};
        const n3 = this.typeUrlToName(this.typeUrl), r3 = null === (t3 = null == e3 ? void 0 : e3.typeRegistry) || void 0 === t3 ? void 0 : t3.findMessage(n3);
        if (!r3) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let o3 = r3.fromBinary(this.value).toJson(e3);
        return (n3.startsWith("google.protobuf.") || null === o3 || Array.isArray(o3) || "object" != typeof o3) && (o3 = { value: o3 }), o3["@type"] = this.typeUrl, o3;
      }
      fromJson(e3, t3) {
        var n3;
        if (null === e3 || Array.isArray(e3) || "object" != typeof e3) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e3 ? "null" : Array.isArray(e3) ? "array" : typeof e3));
        if (0 == Object.keys(e3).length) return this;
        const r3 = e3["@type"];
        if ("string" != typeof r3 || "" == r3) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const o3 = this.typeUrlToName(r3), a3 = null === (n3 = null == t3 ? void 0 : t3.typeRegistry) || void 0 === n3 ? void 0 : n3.findMessage(o3);
        if (!a3) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${r3} is not in the type registry`);
        let s2;
        if (o3.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e3, "value")) s2 = a3.fromJson(e3.value, t3);
        else {
          const n4 = Object.assign({}, e3);
          delete n4["@type"], s2 = a3.fromJson(n4, t3);
        }
        return this.packFrom(s2), this;
      }
      packFrom(e3) {
        this.value = e3.toBinary(), this.typeUrl = this.typeNameToUrl(e3.getType().typeName);
      }
      unpackTo(e3) {
        return !!this.is(e3.getType()) && (e3.fromBinary(this.value), true);
      }
      unpack(e3) {
        if ("" === this.typeUrl) return;
        const t3 = e3.findMessage(this.typeUrlToName(this.typeUrl));
        return t3 ? t3.fromBinary(this.value) : void 0;
      }
      is(e3) {
        if ("" === this.typeUrl) return false;
        const t3 = this.typeUrlToName(this.typeUrl);
        let n3 = "";
        return n3 = "string" == typeof e3 ? e3 : e3.typeName, t3 === n3;
      }
      typeNameToUrl(e3) {
        return `type.googleapis.com/${e3}`;
      }
      typeUrlToName(e3) {
        if (!e3.length) throw new Error(`invalid type url: ${e3}`);
        const t3 = e3.lastIndexOf("/"), n3 = t3 >= 0 ? e3.substring(t3 + 1) : e3;
        if (!n3.length) throw new Error(`invalid type url: ${e3}`);
        return n3;
      }
      static pack(e3) {
        const t3 = new a2();
        return t3.packFrom(e3), t3;
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
    t2.Any = a2, a2.runtime = o2.proto3, a2.typeName = "google.protobuf.Any", a2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  }