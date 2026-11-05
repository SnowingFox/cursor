// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 48245 range:1425404..1429082
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48245: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Any = void 0;
    const n = r(24193), o = r(27599);
    class s extends n.Message {
      constructor(e2) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), o.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        var t2;
        if ("" === this.typeUrl) return {};
        const r2 = this.typeUrlToName(this.typeUrl), n2 = null === (t2 = null == e2 ? void 0 : e2.typeRegistry) || void 0 === t2 ? void 0 : t2.findMessage(r2);
        if (!n2) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let o2 = n2.fromBinary(this.value).toJson(e2);
        return (r2.startsWith("google.protobuf.") || null === o2 || Array.isArray(o2) || "object" != typeof o2) && (o2 = { value: o2 }), o2["@type"] = this.typeUrl, o2;
      }
      fromJson(e2, t2) {
        var r2;
        if (null === e2 || Array.isArray(e2) || "object" != typeof e2) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e2 ? "null" : Array.isArray(e2) ? "array" : typeof e2));
        if (0 == Object.keys(e2).length) return this;
        const n2 = e2["@type"];
        if ("string" != typeof n2 || "" == n2) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const o2 = this.typeUrlToName(n2), s2 = null === (r2 = null == t2 ? void 0 : t2.typeRegistry) || void 0 === r2 ? void 0 : r2.findMessage(o2);
        if (!s2) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n2} is not in the type registry`);
        let i;
        if (o2.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e2, "value")) i = s2.fromJson(e2.value, t2);
        else {
          const r3 = Object.assign({}, e2);
          delete r3["@type"], i = s2.fromJson(r3, t2);
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
        const t2 = new s();
        return t2.packFrom(e2), t2;
      }
      static fromBinary(e2, t2) {
        return new s().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new s().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new s().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(s, e2, t2);
      }
    }
    t.Any = s, s.runtime = o.proto3, s.typeName = "google.protobuf.Any", s.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  }