// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8245 range:5150088..5153792
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8245: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Any = void 0;
    const n2 = r2(4193), s2 = r2(7599);
    class i2 extends n2.Message {
      constructor(t3) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), s2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        var e3;
        if ("" === this.typeUrl) return {};
        const r3 = this.typeUrlToName(this.typeUrl), n3 = null === (e3 = null == t3 ? void 0 : t3.typeRegistry) || void 0 === e3 ? void 0 : e3.findMessage(r3);
        if (!n3) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let s3 = n3.fromBinary(this.value).toJson(t3);
        return (r3.startsWith("google.protobuf.") || null === s3 || Array.isArray(s3) || "object" != typeof s3) && (s3 = { value: s3 }), s3["@type"] = this.typeUrl, s3;
      }
      fromJson(t3, e3) {
        var r3;
        if (null === t3 || Array.isArray(t3) || "object" != typeof t3) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === t3 ? "null" : Array.isArray(t3) ? "array" : typeof t3));
        if (0 == Object.keys(t3).length) return this;
        const n3 = t3["@type"];
        if ("string" != typeof n3 || "" == n3) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const s3 = this.typeUrlToName(n3), i3 = null === (r3 = null == e3 ? void 0 : e3.typeRegistry) || void 0 === r3 ? void 0 : r3.findMessage(s3);
        if (!i3) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n3} is not in the type registry`);
        let o2;
        if (s3.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(t3, "value")) o2 = i3.fromJson(t3.value, e3);
        else {
          const r4 = Object.assign({}, t3);
          delete r4["@type"], o2 = i3.fromJson(r4, e3);
        }
        return this.packFrom(o2), this;
      }
      packFrom(t3) {
        this.value = t3.toBinary(), this.typeUrl = this.typeNameToUrl(t3.getType().typeName);
      }
      unpackTo(t3) {
        return !!this.is(t3.getType()) && (t3.fromBinary(this.value), true);
      }
      unpack(t3) {
        if ("" === this.typeUrl) return;
        const e3 = t3.findMessage(this.typeUrlToName(this.typeUrl));
        return e3 ? e3.fromBinary(this.value) : void 0;
      }
      is(t3) {
        if ("" === this.typeUrl) return false;
        const e3 = this.typeUrlToName(this.typeUrl);
        let r3 = "";
        return r3 = "string" == typeof t3 ? t3 : t3.typeName, e3 === r3;
      }
      typeNameToUrl(t3) {
        return `type.googleapis.com/${t3}`;
      }
      typeUrlToName(t3) {
        if (!t3.length) throw new Error(`invalid type url: ${t3}`);
        const e3 = t3.lastIndexOf("/"), r3 = e3 >= 0 ? t3.substring(e3 + 1) : t3;
        if (!r3.length) throw new Error(`invalid type url: ${t3}`);
        return r3;
      }
      static pack(t3) {
        const e3 = new i2();
        return e3.packFrom(t3), e3;
      }
      static fromBinary(t3, e3) {
        return new i2().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new i2().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new i2().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(i2, t3, e3);
      }
    }
    e2.Any = i2, i2.runtime = s2.proto3, i2.typeName = "google.protobuf.Any", i2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  }