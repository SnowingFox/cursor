// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8814 range:333871..339154
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8814: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.ListValue = a10.Value = a10.Struct = a10.NullValue = void 0;
    const s10 = n10(7599), o10 = n10(4193);
    var r10;
    !(function(e11) {
      e11[e11.NULL_VALUE = 0] = "NULL_VALUE";
    })(r10 || (a10.NullValue = r10 = {})), s10.proto3.util.setEnumType(r10, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    class t10 extends o10.Message {
      constructor(e11) {
        super(), this.fields = {}, s10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        const a11 = {};
        for (const [n11, s11] of Object.entries(this.fields)) a11[n11] = s11.toJson(e11);
        return a11;
      }
      fromJson(e11, a11) {
        if ("object" != typeof e11 || null == e11 || Array.isArray(e11)) throw new Error("cannot decode google.protobuf.Struct from JSON " + s10.proto3.json.debug(e11));
        for (const [a12, n11] of Object.entries(e11)) this.fields[a12] = i10.fromJson(n11);
        return this;
      }
      static fromBinary(e11, a11) {
        return new t10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new t10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new t10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto3.util.equals(t10, e11, a11);
      }
    }
    a10.Struct = t10, t10.runtime = s10.proto3, t10.typeName = "google.protobuf.Struct", t10.fields = s10.proto3.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: i10 } }]);
    class i10 extends o10.Message {
      constructor(e11) {
        super(), this.kind = { case: void 0 }, s10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
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
            return this.kind.value.toJson(Object.assign(Object.assign({}, e11), { emitDefaultValues: true }));
        }
        throw new Error("google.protobuf.Value must have a value");
      }
      fromJson(e11, a11) {
        switch (typeof e11) {
          case "number":
            this.kind = { case: "numberValue", value: e11 };
            break;
          case "string":
            this.kind = { case: "stringValue", value: e11 };
            break;
          case "boolean":
            this.kind = { case: "boolValue", value: e11 };
            break;
          case "object":
            null === e11 ? this.kind = { case: "nullValue", value: r10.NULL_VALUE } : Array.isArray(e11) ? this.kind = { case: "listValue", value: m10.fromJson(e11) } : this.kind = { case: "structValue", value: t10.fromJson(e11) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + s10.proto3.json.debug(e11));
        }
        return this;
      }
      static fromBinary(e11, a11) {
        return new i10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new i10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new i10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto3.util.equals(i10, e11, a11);
      }
    }
    a10.Value = i10, i10.runtime = s10.proto3, i10.typeName = "google.protobuf.Value", i10.fields = s10.proto3.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: s10.proto3.getEnumType(r10), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: t10, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: m10, oneof: "kind" }]);
    class m10 extends o10.Message {
      constructor(e11) {
        super(), this.values = [], s10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        return this.values.map((e12) => e12.toJson());
      }
      fromJson(e11, a11) {
        if (!Array.isArray(e11)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + s10.proto3.json.debug(e11));
        for (let a12 of e11) this.values.push(i10.fromJson(a12));
        return this;
      }
      static fromBinary(e11, a11) {
        return new m10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new m10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new m10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto3.util.equals(m10, e11, a11);
      }
    }
    a10.ListValue = m10, m10.runtime = s10.proto3, m10.typeName = "google.protobuf.ListValue", m10.fields = s10.proto3.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: i10, repeated: true }]);
  }