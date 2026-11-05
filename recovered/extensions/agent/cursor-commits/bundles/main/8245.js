// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 8245 range:631528..635232
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8245: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.Any = void 0;
    const t2 = a2(4193), s2 = a2(7599);
    class o2 extends t2.Message {
      constructor(e3) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        var n3;
        if ("" === this.typeUrl) return {};
        const a3 = this.typeUrlToName(this.typeUrl), t3 = null === (n3 = null == e3 ? void 0 : e3.typeRegistry) || void 0 === n3 ? void 0 : n3.findMessage(a3);
        if (!t3) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let s3 = t3.fromBinary(this.value).toJson(e3);
        return (a3.startsWith("google.protobuf.") || null === s3 || Array.isArray(s3) || "object" != typeof s3) && (s3 = { value: s3 }), s3["@type"] = this.typeUrl, s3;
      }
      fromJson(e3, n3) {
        var a3;
        if (null === e3 || Array.isArray(e3) || "object" != typeof e3) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e3 ? "null" : Array.isArray(e3) ? "array" : typeof e3));
        if (0 == Object.keys(e3).length) return this;
        const t3 = e3["@type"];
        if ("string" != typeof t3 || "" == t3) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const s3 = this.typeUrlToName(t3), o3 = null === (a3 = null == n3 ? void 0 : n3.typeRegistry) || void 0 === a3 ? void 0 : a3.findMessage(s3);
        if (!o3) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${t3} is not in the type registry`);
        let r2;
        if (s3.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e3, "value")) r2 = o3.fromJson(e3.value, n3);
        else {
          const a4 = Object.assign({}, e3);
          delete a4["@type"], r2 = o3.fromJson(a4, n3);
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
        const n3 = e3.findMessage(this.typeUrlToName(this.typeUrl));
        return n3 ? n3.fromBinary(this.value) : void 0;
      }
      is(e3) {
        if ("" === this.typeUrl) return false;
        const n3 = this.typeUrlToName(this.typeUrl);
        let a3 = "";
        return a3 = "string" == typeof e3 ? e3 : e3.typeName, n3 === a3;
      }
      typeNameToUrl(e3) {
        return `type.googleapis.com/${e3}`;
      }
      typeUrlToName(e3) {
        if (!e3.length) throw new Error(`invalid type url: ${e3}`);
        const n3 = e3.lastIndexOf("/"), a3 = n3 >= 0 ? e3.substring(n3 + 1) : e3;
        if (!a3.length) throw new Error(`invalid type url: ${e3}`);
        return a3;
      }
      static pack(e3) {
        const n3 = new o2();
        return n3.packFrom(e3), n3;
      }
      static fromBinary(e3, n3) {
        return new o2().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new o2().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new o2().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(o2, e3, n3);
      }
    }
    n2.Any = o2, o2.runtime = s2.proto3, o2.typeName = "google.protobuf.Any", o2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  }