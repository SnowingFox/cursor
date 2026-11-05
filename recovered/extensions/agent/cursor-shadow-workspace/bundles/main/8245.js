// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 8245 range:630640..634340
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8245: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.Any = void 0;
    const n2 = t2(4193), r2 = t2(7599);
    class o2 extends n2.Message {
      constructor(e3) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        var A3;
        if ("" === this.typeUrl) return {};
        const t3 = this.typeUrlToName(this.typeUrl), n3 = null === (A3 = null == e3 ? void 0 : e3.typeRegistry) || void 0 === A3 ? void 0 : A3.findMessage(t3);
        if (!n3) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let r3 = n3.fromBinary(this.value).toJson(e3);
        return (t3.startsWith("google.protobuf.") || null === r3 || Array.isArray(r3) || "object" != typeof r3) && (r3 = { value: r3 }), r3["@type"] = this.typeUrl, r3;
      }
      fromJson(e3, A3) {
        var t3;
        if (null === e3 || Array.isArray(e3) || "object" != typeof e3) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e3 ? "null" : Array.isArray(e3) ? "array" : typeof e3));
        if (0 == Object.keys(e3).length) return this;
        const n3 = e3["@type"];
        if ("string" != typeof n3 || "" == n3) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const r3 = this.typeUrlToName(n3), o3 = null === (t3 = null == A3 ? void 0 : A3.typeRegistry) || void 0 === t3 ? void 0 : t3.findMessage(r3);
        if (!o3) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n3} is not in the type registry`);
        let s;
        if (r3.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e3, "value")) s = o3.fromJson(e3.value, A3);
        else {
          const t4 = Object.assign({}, e3);
          delete t4["@type"], s = o3.fromJson(t4, A3);
        }
        return this.packFrom(s), this;
      }
      packFrom(e3) {
        this.value = e3.toBinary(), this.typeUrl = this.typeNameToUrl(e3.getType().typeName);
      }
      unpackTo(e3) {
        return !!this.is(e3.getType()) && (e3.fromBinary(this.value), true);
      }
      unpack(e3) {
        if ("" === this.typeUrl) return;
        const A3 = e3.findMessage(this.typeUrlToName(this.typeUrl));
        return A3 ? A3.fromBinary(this.value) : void 0;
      }
      is(e3) {
        if ("" === this.typeUrl) return false;
        const A3 = this.typeUrlToName(this.typeUrl);
        let t3 = "";
        return t3 = "string" == typeof e3 ? e3 : e3.typeName, A3 === t3;
      }
      typeNameToUrl(e3) {
        return `type.googleapis.com/${e3}`;
      }
      typeUrlToName(e3) {
        if (!e3.length) throw new Error(`invalid type url: ${e3}`);
        const A3 = e3.lastIndexOf("/"), t3 = A3 >= 0 ? e3.substring(A3 + 1) : e3;
        if (!t3.length) throw new Error(`invalid type url: ${e3}`);
        return t3;
      }
      static pack(e3) {
        const A3 = new o2();
        return A3.packFrom(e3), A3;
      }
      static fromBinary(e3, A3) {
        return new o2().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new o2().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new o2().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto3.util.equals(o2, e3, A3);
      }
    }
    A2.Any = o2, o2.runtime = r2.proto3, o2.typeName = "google.protobuf.Any", o2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  }