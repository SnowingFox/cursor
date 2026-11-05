// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 8245 range:952562..956266
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8245: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.Any = void 0;
    const t2 = n2(4193), s2 = n2(7599);
    class o2 extends t2.Message {
      constructor(e3) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        var a3;
        if ("" === this.typeUrl) return {};
        const n3 = this.typeUrlToName(this.typeUrl), t3 = null === (a3 = null == e3 ? void 0 : e3.typeRegistry) || void 0 === a3 ? void 0 : a3.findMessage(n3);
        if (!t3) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let s3 = t3.fromBinary(this.value).toJson(e3);
        return (n3.startsWith("google.protobuf.") || null === s3 || Array.isArray(s3) || "object" != typeof s3) && (s3 = { value: s3 }), s3["@type"] = this.typeUrl, s3;
      }
      fromJson(e3, a3) {
        var n3;
        if (null === e3 || Array.isArray(e3) || "object" != typeof e3) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e3 ? "null" : Array.isArray(e3) ? "array" : typeof e3));
        if (0 == Object.keys(e3).length) return this;
        const t3 = e3["@type"];
        if ("string" != typeof t3 || "" == t3) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const s3 = this.typeUrlToName(t3), o3 = null === (n3 = null == a3 ? void 0 : a3.typeRegistry) || void 0 === n3 ? void 0 : n3.findMessage(s3);
        if (!o3) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${t3} is not in the type registry`);
        let r2;
        if (s3.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e3, "value")) r2 = o3.fromJson(e3.value, a3);
        else {
          const n4 = Object.assign({}, e3);
          delete n4["@type"], r2 = o3.fromJson(n4, a3);
        }
        return this.packFrom(r2), this;
      }
      packFrom(e3) {
        this.value = e3.toBinary(), this.typeUrl = this.typeNameToUrl(e3.getType().typeName);
      }
      unpackTo(e3) {
        return !!this.is(e3.getType()) && (e3.fromBinary(this.value), true);
      }
      unpack(e3) {
        if ("" === this.typeUrl) return;
        const a3 = e3.findMessage(this.typeUrlToName(this.typeUrl));
        return a3 ? a3.fromBinary(this.value) : void 0;
      }
      is(e3) {
        if ("" === this.typeUrl) return false;
        const a3 = this.typeUrlToName(this.typeUrl);
        let n3 = "";
        return n3 = "string" == typeof e3 ? e3 : e3.typeName, a3 === n3;
      }
      typeNameToUrl(e3) {
        return `type.googleapis.com/${e3}`;
      }
      typeUrlToName(e3) {
        if (!e3.length) throw new Error(`invalid type url: ${e3}`);
        const a3 = e3.lastIndexOf("/"), n3 = a3 >= 0 ? e3.substring(a3 + 1) : e3;
        if (!n3.length) throw new Error(`invalid type url: ${e3}`);
        return n3;
      }
      static pack(e3) {
        const a3 = new o2();
        return a3.packFrom(e3), a3;
      }
      static fromBinary(e3, a3) {
        return new o2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new o2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new o2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(o2, e3, a3);
      }
    }
    a2.Any = o2, o2.runtime = s2.proto3, o2.typeName = "google.protobuf.Any", o2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  }