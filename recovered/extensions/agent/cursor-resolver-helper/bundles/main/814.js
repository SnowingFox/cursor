// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 814 range:185357..190460
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
814: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.ListValue = a2.Value = a2.Struct = a2.NullValue = void 0;
    const o2 = n2(599), s2 = n2(193);
    var t2;
    !(function(e3) {
      e3[e3.NULL_VALUE = 0] = "NULL_VALUE";
    })(t2 || (a2.NullValue = t2 = {})), o2.proto3.util.setEnumType(t2, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class r2 extends s2.Message {
      constructor(e3) {
        super(), this.fields = {}, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        const a3 = {};
        for (const [n3, o3] of Object.entries(this.fields)) a3[n3] = o3.toJson(e3);
        return a3;
      }
      fromJson(e3, a3) {
        if ("object" != typeof e3 || null == e3 || Array.isArray(e3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + o2.proto3.json.debug(e3));
        for (const [a4, n3] of Object.entries(e3)) this.fields[a4] = i2.fromJson(n3);
        return this;
      }
      static fromBinary(e3, a3) {
        return new r2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new r2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new r2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return o2.proto3.util.equals(r2, e3, a3);
      }
    }
    a2.Struct = r2, r2.runtime = o2.proto3, r2.typeName = "google.protobuf.Struct", r2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: i2 } }]);
    class i2 extends s2.Message {
      constructor(e3) {
        super(), this.kind = { case: void 0 }, o2.proto3.util.initPartial(e3, this);
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
      fromJson(e3, a3) {
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
            null === e3 ? this.kind = { case: "nullValue", value: t2.NULL_VALUE } : Array.isArray(e3) ? this.kind = { case: "listValue", value: m2.fromJson(e3) } : this.kind = { case: "structValue", value: r2.fromJson(e3) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + o2.proto3.json.debug(e3));
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new i2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new i2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new i2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return o2.proto3.util.equals(i2, e3, a3);
      }
    }
    a2.Value = i2, i2.runtime = o2.proto3, i2.typeName = "google.protobuf.Value", i2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: o2.proto3.getEnumType(t2), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: r2, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: m2, oneof: "kind" }]);
    class m2 extends s2.Message {
      constructor(e3) {
        super(), this.values = [], o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.values.map((e4) => e4.toJson());
      }
      fromJson(e3, a3) {
        if (!Array.isArray(e3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + o2.proto3.json.debug(e3));
        for (let a4 of e3) this.values.push(i2.fromJson(a4));
        return this;
      }
      static fromBinary(e3, a3) {
        return new m2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new m2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new m2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return o2.proto3.util.equals(m2, e3, a3);
      }
    }
    a2.ListValue = m2, m2.runtime = o2.proto3, m2.typeName = "google.protobuf.ListValue", m2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: i2, repeated: true }]);
  }