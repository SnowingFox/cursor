// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 8814 range:661528..666641
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8814: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.ListValue = n2.Value = n2.Struct = n2.NullValue = void 0;
    const t2 = a2(7599), s2 = a2(4193);
    var o2;
    !(function(e3) {
      e3[e3.NULL_VALUE = 0] = "NULL_VALUE";
    })(o2 || (n2.NullValue = o2 = {})), t2.proto3.util.setEnumType(o2, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class r2 extends s2.Message {
      constructor(e3) {
        super(), this.fields = {}, t2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        const n3 = {};
        for (const [a3, t3] of Object.entries(this.fields)) n3[a3] = t3.toJson(e3);
        return n3;
      }
      fromJson(e3, n3) {
        if ("object" != typeof e3 || null == e3 || Array.isArray(e3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + t2.proto3.json.debug(e3));
        for (const [n4, a3] of Object.entries(e3)) this.fields[n4] = i2.fromJson(a3);
        return this;
      }
      static fromBinary(e3, n3) {
        return new r2().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new r2().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new r2().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return t2.proto3.util.equals(r2, e3, n3);
      }
    }
    n2.Struct = r2, r2.runtime = t2.proto3, r2.typeName = "google.protobuf.Struct", r2.fields = t2.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: i2 } }]);
    class i2 extends s2.Message {
      constructor(e3) {
        super(), this.kind = { case: void 0 }, t2.proto3.util.initPartial(e3, this);
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
            null === e3 ? this.kind = { case: "nullValue", value: o2.NULL_VALUE } : Array.isArray(e3) ? this.kind = { case: "listValue", value: A.fromJson(e3) } : this.kind = { case: "structValue", value: r2.fromJson(e3) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + t2.proto3.json.debug(e3));
        }
        return this;
      }
      static fromBinary(e3, n3) {
        return new i2().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new i2().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new i2().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return t2.proto3.util.equals(i2, e3, n3);
      }
    }
    n2.Value = i2, i2.runtime = t2.proto3, i2.typeName = "google.protobuf.Value", i2.fields = t2.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: t2.proto3.getEnumType(o2), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: r2, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: A, oneof: "kind" }]);
    class A extends s2.Message {
      constructor(e3) {
        super(), this.values = [], t2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.values.map((e4) => e4.toJson());
      }
      fromJson(e3, n3) {
        if (!Array.isArray(e3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + t2.proto3.json.debug(e3));
        for (let n4 of e3) this.values.push(i2.fromJson(n4));
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
        return t2.proto3.util.equals(A, e3, n3);
      }
    }
    n2.ListValue = A, A.runtime = t2.proto3, A.typeName = "google.protobuf.ListValue", A.fields = t2.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: i2, repeated: true }]);
  }