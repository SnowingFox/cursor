// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 8814 range:692122..697211
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8814: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.ListValue = n2.Value = n2.Struct = n2.NullValue = void 0;
    const a2 = t2(7599), s2 = t2(4193);
    var o2;
    !(function(e3) {
      e3[e3.NULL_VALUE = 0] = "NULL_VALUE";
    })(o2 || (n2.NullValue = o2 = {})), a2.proto3.util.setEnumType(o2, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class r extends s2.Message {
      constructor(e3) {
        super(), this.fields = {}, a2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        const n3 = {};
        for (const [t3, a3] of Object.entries(this.fields)) n3[t3] = a3.toJson(e3);
        return n3;
      }
      fromJson(e3, n3) {
        if ("object" != typeof e3 || null == e3 || Array.isArray(e3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + a2.proto3.json.debug(e3));
        for (const [n4, t3] of Object.entries(e3)) this.fields[n4] = i.fromJson(t3);
        return this;
      }
      static fromBinary(e3, n3) {
        return new r().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new r().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new r().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto3.util.equals(r, e3, n3);
      }
    }
    n2.Struct = r, r.runtime = a2.proto3, r.typeName = "google.protobuf.Struct", r.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: i } }]);
    class i extends s2.Message {
      constructor(e3) {
        super(), this.kind = { case: void 0 }, a2.proto3.util.initPartial(e3, this);
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
      fromJson(e3, n3) {
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
            null === e3 ? this.kind = { case: "nullValue", value: o2.NULL_VALUE } : Array.isArray(e3) ? this.kind = { case: "listValue", value: A.fromJson(e3) } : this.kind = { case: "structValue", value: r.fromJson(e3) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + a2.proto3.json.debug(e3));
        }
        return this;
      }
      static fromBinary(e3, n3) {
        return new i().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new i().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new i().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto3.util.equals(i, e3, n3);
      }
    }
    n2.Value = i, i.runtime = a2.proto3, i.typeName = "google.protobuf.Value", i.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: a2.proto3.getEnumType(o2), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: r, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: A, oneof: "kind" }]);
    class A extends s2.Message {
      constructor(e3) {
        super(), this.values = [], a2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.values.map((e4) => e4.toJson());
      }
      fromJson(e3, n3) {
        if (!Array.isArray(e3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + a2.proto3.json.debug(e3));
        for (let n4 of e3) this.values.push(i.fromJson(n4));
        return this;
      }
      static fromBinary(e3, n3) {
        return new A().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new A().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new A().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto3.util.equals(A, e3, n3);
      }
    }
    n2.ListValue = A, A.runtime = a2.proto3, A.typeName = "google.protobuf.ListValue", A.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: i, repeated: true }]);
  }