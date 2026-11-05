// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 48245 range:8074042..8077720
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48245: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Any = void 0;
    const n = r(24193), s = r(27599);
    class o extends n.Message {
      constructor(e2) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), s.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        var t2;
        if ("" === this.typeUrl) return {};
        const r2 = this.typeUrlToName(this.typeUrl), n2 = null === (t2 = null == e2 ? void 0 : e2.typeRegistry) || void 0 === t2 ? void 0 : t2.findMessage(r2);
        if (!n2) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let s2 = n2.fromBinary(this.value).toJson(e2);
        return (r2.startsWith("google.protobuf.") || null === s2 || Array.isArray(s2) || "object" != typeof s2) && (s2 = { value: s2 }), s2["@type"] = this.typeUrl, s2;
      }
      fromJson(e2, t2) {
        var r2;
        if (null === e2 || Array.isArray(e2) || "object" != typeof e2) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e2 ? "null" : Array.isArray(e2) ? "array" : typeof e2));
        if (0 == Object.keys(e2).length) return this;
        const n2 = e2["@type"];
        if ("string" != typeof n2 || "" == n2) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const s2 = this.typeUrlToName(n2), o2 = null === (r2 = null == t2 ? void 0 : t2.typeRegistry) || void 0 === r2 ? void 0 : r2.findMessage(s2);
        if (!o2) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n2} is not in the type registry`);
        let i;
        if (s2.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e2, "value")) i = o2.fromJson(e2.value, t2);
        else {
          const r3 = Object.assign({}, e2);
          delete r3["@type"], i = o2.fromJson(r3, t2);
        }
        return this.packFrom(i), this;
      }
      packFrom(e2) {
        this.value = e2.toBinary(), this.typeUrl = this.typeNameToUrl(e2.getType().typeName);
      }
      unpackTo(e2) {
        return !!this.is(e2.getType()) && (e2.fromBinary(this.value), true);
      }
      unpack(e2) {
        if ("" === this.typeUrl) return;
        const t2 = e2.findMessage(this.typeUrlToName(this.typeUrl));
        return t2 ? t2.fromBinary(this.value) : void 0;
      }
      is(e2) {
        if ("" === this.typeUrl) return false;
        const t2 = this.typeUrlToName(this.typeUrl);
        let r2 = "";
        return r2 = "string" == typeof e2 ? e2 : e2.typeName, t2 === r2;
      }
      typeNameToUrl(e2) {
        return `type.googleapis.com/${e2}`;
      }
      typeUrlToName(e2) {
        if (!e2.length) throw new Error(`invalid type url: ${e2}`);
        const t2 = e2.lastIndexOf("/"), r2 = t2 >= 0 ? e2.substring(t2 + 1) : e2;
        if (!r2.length) throw new Error(`invalid type url: ${e2}`);
        return r2;
      }
      static pack(e2) {
        const t2 = new o();
        return t2.packFrom(e2), t2;
      }
      static fromBinary(e2, t2) {
        return new o().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new o().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new o().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return s.proto3.util.equals(o, e2, t2);
      }
    }
    t.Any = o, o.runtime = s.proto3, o.typeName = "google.protobuf.Any", o.fields = s.proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  }