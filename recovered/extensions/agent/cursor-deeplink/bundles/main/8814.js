// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8814 range:793517..798606
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8814: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ListValue = t2.Value = t2.Struct = t2.NullValue = void 0;
    const n2 = A2(7599), r2 = A2(4193);
    var o2;
    !(function(e3) {
      e3[e3.NULL_VALUE = 0] = "NULL_VALUE";
    })(o2 || (t2.NullValue = o2 = {})), n2.proto3.util.setEnumType(o2, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class s extends r2.Message {
      constructor(e3) {
        super(), this.fields = {}, n2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        const t3 = {};
        for (const [A3, n3] of Object.entries(this.fields)) t3[A3] = n3.toJson(e3);
        return t3;
      }
      fromJson(e3, t3) {
        if ("object" != typeof e3 || null == e3 || Array.isArray(e3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + n2.proto3.json.debug(e3));
        for (const [t4, A3] of Object.entries(e3)) this.fields[t4] = i.fromJson(A3);
        return this;
      }
      static fromBinary(e3, t3) {
        return new s().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new s().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new s().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto3.util.equals(s, e3, t3);
      }
    }
    t2.Struct = s, s.runtime = n2.proto3, s.typeName = "google.protobuf.Struct", s.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: i } }]);
    class i extends r2.Message {
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
            null === e3 ? this.kind = { case: "nullValue", value: o2.NULL_VALUE } : Array.isArray(e3) ? this.kind = { case: "listValue", value: a.fromJson(e3) } : this.kind = { case: "structValue", value: s.fromJson(e3) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + n2.proto3.json.debug(e3));
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new i().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new i().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new i().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto3.util.equals(i, e3, t3);
      }
    }
    t2.Value = i, i.runtime = n2.proto3, i.typeName = "google.protobuf.Value", i.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: n2.proto3.getEnumType(o2), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: s, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: a, oneof: "kind" }]);
    class a extends r2.Message {
      constructor(e3) {
        super(), this.values = [], n2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.values.map((e4) => e4.toJson());
      }
      fromJson(e3, t3) {
        if (!Array.isArray(e3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + n2.proto3.json.debug(e3));
        for (let t4 of e3) this.values.push(i.fromJson(t4));
        return this;
      }
      static fromBinary(e3, t3) {
        return new a().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new a().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new a().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto3.util.equals(a, e3, t3);
      }
    }
    t2.ListValue = a, a.runtime = n2.proto3, a.typeName = "google.protobuf.ListValue", a.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: i, repeated: true }]);
  }