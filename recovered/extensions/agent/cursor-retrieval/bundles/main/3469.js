// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3469 range:638079..645804
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3469: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.Option = a2.EnumValue = a2.Enum = a2.Field_Cardinality = a2.Field_Kind = a2.Field = a2.Type = a2.Syntax = void 0;
    const t2 = n2(7599), s2 = n2(4193), o2 = n2(7206), r2 = n2(8245);
    var i2, l, d;
    !(function(e3) {
      e3[e3.PROTO2 = 0] = "PROTO2", e3[e3.PROTO3 = 1] = "PROTO3", e3[e3.EDITIONS = 2] = "EDITIONS";
    })(i2 || (a2.Syntax = i2 = {})), t2.proto3.util.setEnumType(i2, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    class m extends s2.Message {
      constructor(e3) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = i2.PROTO2, this.edition = "", t2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new m().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new m().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new m().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto3.util.equals(m, e3, a3);
      }
    }
    a2.Type = m, m.runtime = t2.proto3, m.typeName = "google.protobuf.Type", m.fields = t2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: c, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: u, repeated: true }, { no: 5, name: "source_context", kind: "message", T: o2.SourceContext }, { no: 6, name: "syntax", kind: "enum", T: t2.proto3.getEnumType(i2) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    class c extends s2.Message {
      constructor(e3) {
        super(), this.kind = l.TYPE_UNKNOWN, this.cardinality = d.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", t2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new c().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new c().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new c().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto3.util.equals(c, e3, a3);
      }
    }
    a2.Field = c, c.runtime = t2.proto3, c.typeName = "google.protobuf.Field", c.fields = t2.proto3.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: t2.proto3.getEnumType(l) }, { no: 2, name: "cardinality", kind: "enum", T: t2.proto3.getEnumType(d) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: u, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]), (function(e3) {
      e3[e3.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e3[e3.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e3[e3.TYPE_FLOAT = 2] = "TYPE_FLOAT", e3[e3.TYPE_INT64 = 3] = "TYPE_INT64", e3[e3.TYPE_UINT64 = 4] = "TYPE_UINT64", e3[e3.TYPE_INT32 = 5] = "TYPE_INT32", e3[e3.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e3[e3.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e3[e3.TYPE_BOOL = 8] = "TYPE_BOOL", e3[e3.TYPE_STRING = 9] = "TYPE_STRING", e3[e3.TYPE_GROUP = 10] = "TYPE_GROUP", e3[e3.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e3[e3.TYPE_BYTES = 12] = "TYPE_BYTES", e3[e3.TYPE_UINT32 = 13] = "TYPE_UINT32", e3[e3.TYPE_ENUM = 14] = "TYPE_ENUM", e3[e3.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e3[e3.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e3[e3.TYPE_SINT32 = 17] = "TYPE_SINT32", e3[e3.TYPE_SINT64 = 18] = "TYPE_SINT64";
    })(l || (a2.Field_Kind = l = {})), t2.proto3.util.setEnumType(l, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.UNKNOWN = 0] = "UNKNOWN", e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REQUIRED = 2] = "REQUIRED", e3[e3.REPEATED = 3] = "REPEATED";
    })(d || (a2.Field_Cardinality = d = {})), t2.proto3.util.setEnumType(d, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    class p extends s2.Message {
      constructor(e3) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = i2.PROTO2, this.edition = "", t2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new p().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new p().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new p().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto3.util.equals(p, e3, a3);
      }
    }
    a2.Enum = p, p.runtime = t2.proto3, p.typeName = "google.protobuf.Enum", p.fields = t2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: A, repeated: true }, { no: 3, name: "options", kind: "message", T: u, repeated: true }, { no: 4, name: "source_context", kind: "message", T: o2.SourceContext }, { no: 5, name: "syntax", kind: "enum", T: t2.proto3.getEnumType(i2) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    class A extends s2.Message {
      constructor(e3) {
        super(), this.name = "", this.number = 0, this.options = [], t2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new A().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new A().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new A().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto3.util.equals(A, e3, a3);
      }
    }
    a2.EnumValue = A, A.runtime = t2.proto3, A.typeName = "google.protobuf.EnumValue", A.fields = t2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: u, repeated: true }]);
    class u extends s2.Message {
      constructor(e3) {
        super(), this.name = "", t2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new u().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new u().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new u().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return t2.proto3.util.equals(u, e3, a3);
      }
    }
    a2.Option = u, u.runtime = t2.proto3, u.typeName = "google.protobuf.Option", u.fields = t2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: r2.Any }]);
  }