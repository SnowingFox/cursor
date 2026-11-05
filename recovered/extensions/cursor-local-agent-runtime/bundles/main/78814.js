// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 78814 range:7342580..7347630
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
78814: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ListValue = t.Value = t.Struct = t.NullValue = void 0;
    const n = r(27599), o = r(24193);
    var s;
    !(function(e2) {
      e2[e2.NULL_VALUE = 0] = "NULL_VALUE";
    })(s || (t.NullValue = s = {})), n.proto3.util.setEnumType(s, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class i extends o.Message {
      constructor(e2) {
        super(), this.fields = {}, n.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        const t2 = {};
        for (const [r2, n2] of Object.entries(this.fields)) t2[r2] = n2.toJson(e2);
        return t2;
      }
      fromJson(e2, t2) {
        if ("object" != typeof e2 || null == e2 || Array.isArray(e2)) throw new Error("cannot decode google.protobuf.Struct from JSON " + n.proto3.json.debug(e2));
        for (const [t3, r2] of Object.entries(e2)) this.fields[t3] = a.fromJson(r2);
        return this;
      }
      static fromBinary(e2, t2) {
        return new i().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new i().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new i().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(i, e2, t2);
      }
    }
    t.Struct = i, i.runtime = n.proto3, i.typeName = "google.protobuf.Struct", i.fields = n.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: a } }]);
    class a extends o.Message {
      constructor(e2) {
        super(), this.kind = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
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
            return this.kind.value.toJson(Object.assign(Object.assign({}, e2), { emitDefaultValues: true }));
        }
        throw new Error("google.protobuf.Value must have a value");
      }
      fromJson(e2, t2) {
        switch (typeof e2) {
          case "number":
            this.kind = { case: "numberValue", value: e2 };
            break;
          case "string":
            this.kind = { case: "stringValue", value: e2 };
            break;
          case "boolean":
            this.kind = { case: "boolValue", value: e2 };
            break;
          case "object":
            null === e2 ? this.kind = { case: "nullValue", value: s.NULL_VALUE } : Array.isArray(e2) ? this.kind = { case: "listValue", value: l.fromJson(e2) } : this.kind = { case: "structValue", value: i.fromJson(e2) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + n.proto3.json.debug(e2));
        }
        return this;
      }
      static fromBinary(e2, t2) {
        return new a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(a, e2, t2);
      }
    }
    t.Value = a, a.runtime = n.proto3, a.typeName = "google.protobuf.Value", a.fields = n.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: n.proto3.getEnumType(s), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: i, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: l, oneof: "kind" }]);
    class l extends o.Message {
      constructor(e2) {
        super(), this.values = [], n.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return this.values.map((e3) => e3.toJson());
      }
      fromJson(e2, t2) {
        if (!Array.isArray(e2)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + n.proto3.json.debug(e2));
        for (let t3 of e2) this.values.push(a.fromJson(t3));
        return this;
      }
      static fromBinary(e2, t2) {
        return new l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(l, e2, t2);
      }
    }
    t.ListValue = l, l.runtime = n.proto3, l.typeName = "google.protobuf.ListValue", l.fields = n.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: a, repeated: true }]);
  }