// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 3469 range:359811..367526
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3469: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.Option = n2.EnumValue = n2.Enum = n2.Field_Cardinality = n2.Field_Kind = n2.Field = n2.Type = n2.Syntax = void 0;
    const a2 = t2(7599), s2 = t2(4193), o2 = t2(7206), r = t2(8245);
    var i, A, c;
    !(function(e3) {
      e3[e3.PROTO2 = 0] = "PROTO2", e3[e3.PROTO3 = 1] = "PROTO3", e3[e3.EDITIONS = 2] = "EDITIONS";
    })(i || (n2.Syntax = i = {})), a2.proto3.util.setEnumType(i, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    class l extends s2.Message {
      constructor(e3) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = i.PROTO2, this.edition = "", a2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new l().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new l().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new l().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto3.util.equals(l, e3, n3);
      }
    }
    n2.Type = l, l.runtime = a2.proto3, l.typeName = "google.protobuf.Type", l.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: d, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: g, repeated: true }, { no: 5, name: "source_context", kind: "message", T: o2.SourceContext }, { no: 6, name: "syntax", kind: "enum", T: a2.proto3.getEnumType(i) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    class d extends s2.Message {
      constructor(e3) {
        super(), this.kind = A.TYPE_UNKNOWN, this.cardinality = c.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", a2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new d().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new d().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new d().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto3.util.equals(d, e3, n3);
      }
    }
    n2.Field = d, d.runtime = a2.proto3, d.typeName = "google.protobuf.Field", d.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: a2.proto3.getEnumType(A) }, { no: 2, name: "cardinality", kind: "enum", T: a2.proto3.getEnumType(c) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: g, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]), (function(e3) {
      e3[e3.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e3[e3.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e3[e3.TYPE_FLOAT = 2] = "TYPE_FLOAT", e3[e3.TYPE_INT64 = 3] = "TYPE_INT64", e3[e3.TYPE_UINT64 = 4] = "TYPE_UINT64", e3[e3.TYPE_INT32 = 5] = "TYPE_INT32", e3[e3.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e3[e3.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e3[e3.TYPE_BOOL = 8] = "TYPE_BOOL", e3[e3.TYPE_STRING = 9] = "TYPE_STRING", e3[e3.TYPE_GROUP = 10] = "TYPE_GROUP", e3[e3.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e3[e3.TYPE_BYTES = 12] = "TYPE_BYTES", e3[e3.TYPE_UINT32 = 13] = "TYPE_UINT32", e3[e3.TYPE_ENUM = 14] = "TYPE_ENUM", e3[e3.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e3[e3.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e3[e3.TYPE_SINT32 = 17] = "TYPE_SINT32", e3[e3.TYPE_SINT64 = 18] = "TYPE_SINT64";
    })(A || (n2.Field_Kind = A = {})), a2.proto3.util.setEnumType(A, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.UNKNOWN = 0] = "UNKNOWN", e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REQUIRED = 2] = "REQUIRED", e3[e3.REPEATED = 3] = "REPEATED";
    })(c || (n2.Field_Cardinality = c = {})), a2.proto3.util.setEnumType(c, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    class m extends s2.Message {
      constructor(e3) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = i.PROTO2, this.edition = "", a2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new m().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new m().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new m().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto3.util.equals(m, e3, n3);
      }
    }
    n2.Enum = m, m.runtime = a2.proto3, m.typeName = "google.protobuf.Enum", m.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: u, repeated: true }, { no: 3, name: "options", kind: "message", T: g, repeated: true }, { no: 4, name: "source_context", kind: "message", T: o2.SourceContext }, { no: 5, name: "syntax", kind: "enum", T: a2.proto3.getEnumType(i) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    class u extends s2.Message {
      constructor(e3) {
        super(), this.name = "", this.number = 0, this.options = [], a2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new u().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new u().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new u().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto3.util.equals(u, e3, n3);
      }
    }
    n2.EnumValue = u, u.runtime = a2.proto3, u.typeName = "google.protobuf.EnumValue", u.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: g, repeated: true }]);
    class g extends s2.Message {
      constructor(e3) {
        super(), this.name = "", a2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, n3) {
        return new g().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new g().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new g().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return a2.proto3.util.equals(g, e3, n3);
      }
    }
    n2.Option = g, g.runtime = a2.proto3, g.typeName = "google.protobuf.Option", g.fields = a2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: r.Any }]);
  }