// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8245 range:763113..766813
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8245: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Any = void 0;
    const n2 = A2(4193), r2 = A2(7599);
    class o2 extends n2.Message {
      constructor(e3) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        var t3;
        if ("" === this.typeUrl) return {};
        const A3 = this.typeUrlToName(this.typeUrl), n3 = null === (t3 = null == e3 ? void 0 : e3.typeRegistry) || void 0 === t3 ? void 0 : t3.findMessage(A3);
        if (!n3) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let r3 = n3.fromBinary(this.value).toJson(e3);
        return (A3.startsWith("google.protobuf.") || null === r3 || Array.isArray(r3) || "object" != typeof r3) && (r3 = { value: r3 }), r3["@type"] = this.typeUrl, r3;
      }
      fromJson(e3, t3) {
        var A3;
        if (null === e3 || Array.isArray(e3) || "object" != typeof e3) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e3 ? "null" : Array.isArray(e3) ? "array" : typeof e3));
        if (0 == Object.keys(e3).length) return this;
        const n3 = e3["@type"];
        if ("string" != typeof n3 || "" == n3) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const r3 = this.typeUrlToName(n3), o3 = null === (A3 = null == t3 ? void 0 : t3.typeRegistry) || void 0 === A3 ? void 0 : A3.findMessage(r3);
        if (!o3) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n3} is not in the type registry`);
        let s;
        if (r3.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e3, "value")) s = o3.fromJson(e3.value, t3);
        else {
          const A4 = Object.assign({}, e3);
          delete A4["@type"], s = o3.fromJson(A4, t3);
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
        const t3 = e3.findMessage(this.typeUrlToName(this.typeUrl));
        return t3 ? t3.fromBinary(this.value) : void 0;
      }
      is(e3) {
        if ("" === this.typeUrl) return false;
        const t3 = this.typeUrlToName(this.typeUrl);
        let A3 = "";
        return A3 = "string" == typeof e3 ? e3 : e3.typeName, t3 === A3;
      }
      typeNameToUrl(e3) {
        return `type.googleapis.com/${e3}`;
      }
      typeUrlToName(e3) {
        if (!e3.length) throw new Error(`invalid type url: ${e3}`);
        const t3 = e3.lastIndexOf("/"), A3 = t3 >= 0 ? e3.substring(t3 + 1) : e3;
        if (!A3.length) throw new Error(`invalid type url: ${e3}`);
        return A3;
      }
      static pack(e3) {
        const t3 = new o2();
        return t3.packFrom(e3), t3;
      }
      static fromBinary(e3, t3) {
        return new o2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new o2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new o2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(o2, e3, t3);
      }
    }
    t2.Any = o2, o2.runtime = r2.proto3, o2.typeName = "google.protobuf.Any", o2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  }