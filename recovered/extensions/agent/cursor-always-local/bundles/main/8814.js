// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8814 range:5336406..5341506
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8814: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.ListValue = e2.Value = e2.Struct = e2.NullValue = void 0;
    const n2 = r2(7599), s2 = r2(4193);
    var i2;
    !(function(t3) {
      t3[t3.NULL_VALUE = 0] = "NULL_VALUE";
    })(i2 || (e2.NullValue = i2 = {})), n2.proto3.util.setEnumType(i2, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class o2 extends s2.Message {
      constructor(t3) {
        super(), this.fields = {}, n2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        const e3 = {};
        for (const [r3, n3] of Object.entries(this.fields)) e3[r3] = n3.toJson(t3);
        return e3;
      }
      fromJson(t3, e3) {
        if ("object" != typeof t3 || null == t3 || Array.isArray(t3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + n2.proto3.json.debug(t3));
        for (const [e4, r3] of Object.entries(t3)) this.fields[e4] = a.fromJson(r3);
        return this;
      }
      static fromBinary(t3, e3) {
        return new o2().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new o2().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new o2().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(o2, t3, e3);
      }
    }
    e2.Struct = o2, o2.runtime = n2.proto3, o2.typeName = "google.protobuf.Struct", o2.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: a } }]);
    class a extends s2.Message {
      constructor(t3) {
        super(), this.kind = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
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
            return this.kind.value.toJson(Object.assign(Object.assign({}, t3), { emitDefaultValues: true }));
        }
        throw new Error("google.protobuf.Value must have a value");
      }
      fromJson(t3, e3) {
        switch (typeof t3) {
          case "number":
            this.kind = { case: "numberValue", value: t3 };
            break;
          case "string":
            this.kind = { case: "stringValue", value: t3 };
            break;
          case "boolean":
            this.kind = { case: "boolValue", value: t3 };
            break;
          case "object":
            null === t3 ? this.kind = { case: "nullValue", value: i2.NULL_VALUE } : Array.isArray(t3) ? this.kind = { case: "listValue", value: u.fromJson(t3) } : this.kind = { case: "structValue", value: o2.fromJson(t3) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + n2.proto3.json.debug(t3));
        }
        return this;
      }
      static fromBinary(t3, e3) {
        return new a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(a, t3, e3);
      }
    }
    e2.Value = a, a.runtime = n2.proto3, a.typeName = "google.protobuf.Value", a.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: n2.proto3.getEnumType(i2), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: o2, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: u, oneof: "kind" }]);
    class u extends s2.Message {
      constructor(t3) {
        super(), this.values = [], n2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        return this.values.map((t4) => t4.toJson());
      }
      fromJson(t3, e3) {
        if (!Array.isArray(t3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + n2.proto3.json.debug(t3));
        for (let e4 of t3) this.values.push(a.fromJson(e4));
        return this;
      }
      static fromBinary(t3, e3) {
        return new u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(u, t3, e3);
      }
    }
    e2.ListValue = u, u.runtime = n2.proto3, u.typeName = "google.protobuf.ListValue", u.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: a, repeated: true }]);
  }