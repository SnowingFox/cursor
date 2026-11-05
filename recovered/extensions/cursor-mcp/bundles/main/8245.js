// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8245 range:758205..761909
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8245: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Any = void 0;
    const n2 = r2(4193), o2 = r2(7599);
    class s2 extends n2.Message {
      constructor(e3) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        var t3;
        if ("" === this.typeUrl) return {};
        const r3 = this.typeUrlToName(this.typeUrl), n3 = null === (t3 = null == e3 ? void 0 : e3.typeRegistry) || void 0 === t3 ? void 0 : t3.findMessage(r3);
        if (!n3) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let o3 = n3.fromBinary(this.value).toJson(e3);
        return (r3.startsWith("google.protobuf.") || null === o3 || Array.isArray(o3) || "object" != typeof o3) && (o3 = { value: o3 }), o3["@type"] = this.typeUrl, o3;
      }
      fromJson(e3, t3) {
        var r3;
        if (null === e3 || Array.isArray(e3) || "object" != typeof e3) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e3 ? "null" : Array.isArray(e3) ? "array" : typeof e3));
        if (0 == Object.keys(e3).length) return this;
        const n3 = e3["@type"];
        if ("string" != typeof n3 || "" == n3) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const o3 = this.typeUrlToName(n3), s3 = null === (r3 = null == t3 ? void 0 : t3.typeRegistry) || void 0 === r3 ? void 0 : r3.findMessage(o3);
        if (!s3) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n3} is not in the type registry`);
        let i2;
        if (o3.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e3, "value")) i2 = s3.fromJson(e3.value, t3);
        else {
          const r4 = Object.assign({}, e3);
          delete r4["@type"], i2 = s3.fromJson(r4, t3);
        }
        return this.packFrom(i2), this;
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
        let r3 = "";
        return r3 = "string" == typeof e3 ? e3 : e3.typeName, t3 === r3;
      }
      typeNameToUrl(e3) {
        return `type.googleapis.com/${e3}`;
      }
      typeUrlToName(e3) {
        if (!e3.length) throw new Error(`invalid type url: ${e3}`);
        const t3 = e3.lastIndexOf("/"), r3 = t3 >= 0 ? e3.substring(t3 + 1) : e3;
        if (!r3.length) throw new Error(`invalid type url: ${e3}`);
        return r3;
      }
      static pack(e3) {
        const t3 = new s2();
        return t3.packFrom(e3), t3;
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
    t2.Any = s2, s2.runtime = o2.proto3, s2.typeName = "google.protobuf.Any", s2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  }