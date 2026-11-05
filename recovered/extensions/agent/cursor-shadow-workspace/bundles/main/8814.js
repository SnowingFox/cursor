// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 8814 range:660609..665698
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8814: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.ListValue = A2.Value = A2.Struct = A2.NullValue = void 0;
    const n2 = t2(7599), r2 = t2(4193);
    var o2;
    !(function(e3) {
      e3[e3.NULL_VALUE = 0] = "NULL_VALUE";
    })(o2 || (A2.NullValue = o2 = {})), n2.proto3.util.setEnumType(o2, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class s extends r2.Message {
      constructor(e3) {
        super(), this.fields = {}, n2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        const A3 = {};
        for (const [t3, n3] of Object.entries(this.fields)) A3[t3] = n3.toJson(e3);
        return A3;
      }
      fromJson(e3, A3) {
        if ("object" != typeof e3 || null == e3 || Array.isArray(e3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + n2.proto3.json.debug(e3));
        for (const [A4, t3] of Object.entries(e3)) this.fields[A4] = a.fromJson(t3);
        return this;
      }
      static fromBinary(e3, A3) {
        return new s().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new s().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new s().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto3.util.equals(s, e3, A3);
      }
    }
    A2.Struct = s, s.runtime = n2.proto3, s.typeName = "google.protobuf.Struct", s.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: a } }]);
    class a extends r2.Message {
      constructor(e3) {
        super(), this.kind = { case: void 0 }, n2.proto3.util.initPartial(e3, this);
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
      fromJson(e3, A3) {
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
            null === e3 ? this.kind = { case: "nullValue", value: o2.NULL_VALUE } : Array.isArray(e3) ? this.kind = { case: "listValue", value: i.fromJson(e3) } : this.kind = { case: "structValue", value: s.fromJson(e3) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + n2.proto3.json.debug(e3));
        }
        return this;
      }
      static fromBinary(e3, A3) {
        return new a().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new a().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new a().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto3.util.equals(a, e3, A3);
      }
    }
    A2.Value = a, a.runtime = n2.proto3, a.typeName = "google.protobuf.Value", a.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: n2.proto3.getEnumType(o2), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: s, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: i, oneof: "kind" }]);
    class i extends r2.Message {
      constructor(e3) {
        super(), this.values = [], n2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.values.map((e4) => e4.toJson());
      }
      fromJson(e3, A3) {
        if (!Array.isArray(e3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + n2.proto3.json.debug(e3));
        for (let A4 of e3) this.values.push(a.fromJson(A4));
        return this;
      }
      static fromBinary(e3, A3) {
        return new i().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new i().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new i().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return n2.proto3.util.equals(i, e3, A3);
      }
    }
    A2.ListValue = i, i.runtime = n2.proto3, i.typeName = "google.protobuf.ListValue", i.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: a, repeated: true }]);
  }