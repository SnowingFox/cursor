// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 814 range:185357..190460
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
814: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ListValue = t2.Value = t2.Struct = t2.NullValue = void 0;
    const r2 = n2(599), o2 = n2(193);
    var a2;
    !(function(e3) {
      e3[e3.NULL_VALUE = 0] = "NULL_VALUE";
    })(a2 || (t2.NullValue = a2 = {})), r2.proto3.util.setEnumType(a2, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class s2 extends o2.Message {
      constructor(e3) {
        super(), this.fields = {}, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        const t3 = {};
        for (const [n3, r3] of Object.entries(this.fields)) t3[n3] = r3.toJson(e3);
        return t3;
      }
      fromJson(e3, t3) {
        if ("object" != typeof e3 || null == e3 || Array.isArray(e3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + r2.proto3.json.debug(e3));
        for (const [t4, n3] of Object.entries(e3)) this.fields[t4] = i2.fromJson(n3);
        return this;
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
        return r2.proto3.util.equals(s2, e3, t3);
      }
    }
    t2.Struct = s2, s2.runtime = r2.proto3, s2.typeName = "google.protobuf.Struct", s2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: i2 } }]);
    class i2 extends o2.Message {
      constructor(e3) {
        super(), this.kind = { case: void 0 }, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        switch (this.kind.case) {
          case "nullValue":
            return null;
          case "numberValue":
            if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
            return this.kind.value;
          case "boolValue":
          case "stringValue":
            return this.kind.value;
          case "structValue":
          case "listValue":
            return this.kind.value.toJson(Object.assign(Object.assign({}, e3), { emitDefaultValues: true }));
        }
        throw new Error("google.protobuf.Value must have a value");
      }
      fromJson(e3, t3) {
        switch (typeof e3) {
          case "number":
            this.kind = { case: "numberValue", value: e3 };
            break;
          case "string":
            this.kind = { case: "stringValue", value: e3 };
            break;
          case "boolean":
            this.kind = { case: "boolValue", value: e3 };
            break;
          case "object":
            null === e3 ? this.kind = { case: "nullValue", value: a2.NULL_VALUE } : Array.isArray(e3) ? this.kind = { case: "listValue", value: l2.fromJson(e3) } : this.kind = { case: "structValue", value: s2.fromJson(e3) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + r2.proto3.json.debug(e3));
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new i2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new i2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new i2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(i2, e3, t3);
      }
    }
    t2.Value = i2, i2.runtime = r2.proto3, i2.typeName = "google.protobuf.Value", i2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: r2.proto3.getEnumType(a2), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: s2, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: l2, oneof: "kind" }]);
    class l2 extends o2.Message {
      constructor(e3) {
        super(), this.values = [], r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.values.map((e4) => e4.toJson());
      }
      fromJson(e3, t3) {
        if (!Array.isArray(e3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + r2.proto3.json.debug(e3));
        for (let t4 of e3) this.values.push(i2.fromJson(t4));
        return this;
      }
      static fromBinary(e3, t3) {
        return new l2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new l2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new l2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(l2, e3, t3);
      }
    }
    t2.ListValue = l2, l2.runtime = r2.proto3, l2.typeName = "google.protobuf.ListValue", l2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: i2, repeated: true }]);
  }