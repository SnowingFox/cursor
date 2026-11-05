// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 8814 range:1009469..1014582
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8814: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.ListValue = a2.Value = a2.Struct = a2.NullValue = void 0;
    const t2 = n2(7599), s2 = n2(4193);
    var o2;
    !(function(e3) {
      e3[e3.NULL_VALUE = 0] = "NULL_VALUE";
    })(o2 || (a2.NullValue = o2 = {})), t2.proto3.util.setEnumType(o2, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class r2 extends s2.Message {
      constructor(e3) {
        super(), this.fields = {}, t2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        const a3 = {};
        for (const [n3, t3] of Object.entries(this.fields)) a3[n3] = t3.toJson(e3);
        return a3;
      }
      fromJson(e3, a3) {
        if ("object" != typeof e3 || null == e3 || Array.isArray(e3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + t2.proto3.json.debug(e3));
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
        return t2.proto3.util.equals(r2, e3, a3);
      }
    }
    a2.Struct = r2, r2.runtime = t2.proto3, r2.typeName = "google.protobuf.Struct", r2.fields = t2.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: i2 } }]);
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
            null === e3 ? this.kind = { case: "nullValue", value: o2.NULL_VALUE } : Array.isArray(e3) ? this.kind = { case: "listValue", value: l.fromJson(e3) } : this.kind = { case: "structValue", value: r2.fromJson(e3) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + t2.proto3.json.debug(e3));
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
        return t2.proto3.util.equals(i2, e3, a3);
      }
    }
    a2.Value = i2, i2.runtime = t2.proto3, i2.typeName = "google.protobuf.Value", i2.fields = t2.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: t2.proto3.getEnumType(o2), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: r2, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: l, oneof: "kind" }]);
    class l extends s2.Message {
      constructor(e3) {
        super(), this.values = [], t2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.values.map((e4) => e4.toJson());
      }
      fromJson(e3, a3) {
        if (!Array.isArray(e3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + t2.proto3.json.debug(e3));
        for (let a4 of e3) this.values.push(i2.fromJson(a4));
        return this;
      }
      static fromBinary(e3, a3) {
        return new l().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new l().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new l().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto3.util.equals(l, e3, a3);
      }
    }
    a2.ListValue = l, l.runtime = t2.proto3, l.typeName = "google.protobuf.ListValue", l.fields = t2.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: i2, repeated: true }]);
  }