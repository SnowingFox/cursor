// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8814 range:815774..820887
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8814: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ListValue = t2.Value = t2.Struct = t2.NullValue = void 0;
    const n2 = r2(7599), o2 = r2(4193);
    var s2;
    !(function(e3) {
      e3[e3.NULL_VALUE = 0] = "NULL_VALUE";
    })(s2 || (t2.NullValue = s2 = {})), n2.proto3.util.setEnumType(s2, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class i2 extends o2.Message {
      constructor(e3) {
        super(), this.fields = {}, n2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        const t3 = {};
        for (const [r3, n3] of Object.entries(this.fields)) t3[r3] = n3.toJson(e3);
        return t3;
      }
      fromJson(e3, t3) {
        if ("object" != typeof e3 || null == e3 || Array.isArray(e3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + n2.proto3.json.debug(e3));
        for (const [t4, r3] of Object.entries(e3)) this.fields[t4] = a2.fromJson(r3);
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
        return n2.proto3.util.equals(i2, e3, t3);
      }
    }
    t2.Struct = i2, i2.runtime = n2.proto3, i2.typeName = "google.protobuf.Struct", i2.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: a2 } }]);
    class a2 extends o2.Message {
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
            null === e3 ? this.kind = { case: "nullValue", value: s2.NULL_VALUE } : Array.isArray(e3) ? this.kind = { case: "listValue", value: c.fromJson(e3) } : this.kind = { case: "structValue", value: i2.fromJson(e3) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + n2.proto3.json.debug(e3));
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new a2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new a2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new a2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto3.util.equals(a2, e3, t3);
      }
    }
    t2.Value = a2, a2.runtime = n2.proto3, a2.typeName = "google.protobuf.Value", a2.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: n2.proto3.getEnumType(s2), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: i2, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: c, oneof: "kind" }]);
    class c extends o2.Message {
      constructor(e3) {
        super(), this.values = [], n2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return this.values.map((e4) => e4.toJson());
      }
      fromJson(e3, t3) {
        if (!Array.isArray(e3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + n2.proto3.json.debug(e3));
        for (let t4 of e3) this.values.push(a2.fromJson(t4));
        return this;
      }
      static fromBinary(e3, t3) {
        return new c().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new c().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new c().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto3.util.equals(c, e3, t3);
      }
    }
    t2.ListValue = c, c.runtime = n2.proto3, c.typeName = "google.protobuf.ListValue", c.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: a2, repeated: true }]);
  }