// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 73469 range:11122176..11129835
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
73469: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Option = t.EnumValue = t.Enum = t.Field_Cardinality = t.Field_Kind = t.Field = t.Type = t.Syntax = void 0;
    const n = r(27599), s = r(24193), o = r(77206), i = r(48245);
    var a, c, l;
    !(function(e2) {
      e2[e2.PROTO2 = 0] = "PROTO2", e2[e2.PROTO3 = 1] = "PROTO3", e2[e2.EDITIONS = 2] = "EDITIONS";
    })(a || (t.Syntax = a = {})), n.proto3.util.setEnumType(a, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    class u extends s.Message {
      constructor(e2) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = a.PROTO2, this.edition = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(u, e2, t2);
      }
    }
    t.Type = u, u.runtime = n.proto3, u.typeName = "google.protobuf.Type", u.fields = n.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: d, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: h, repeated: true }, { no: 5, name: "source_context", kind: "message", T: o.SourceContext }, { no: 6, name: "syntax", kind: "enum", T: n.proto3.getEnumType(a) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    class d extends s.Message {
      constructor(e2) {
        super(), this.kind = c.TYPE_UNKNOWN, this.cardinality = l.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new d().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new d().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new d().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(d, e2, t2);
      }
    }
    t.Field = d, d.runtime = n.proto3, d.typeName = "google.protobuf.Field", d.fields = n.proto3.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: n.proto3.getEnumType(c) }, { no: 2, name: "cardinality", kind: "enum", T: n.proto3.getEnumType(l) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: h, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]), (function(e2) {
      e2[e2.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e2[e2.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e2[e2.TYPE_FLOAT = 2] = "TYPE_FLOAT", e2[e2.TYPE_INT64 = 3] = "TYPE_INT64", e2[e2.TYPE_UINT64 = 4] = "TYPE_UINT64", e2[e2.TYPE_INT32 = 5] = "TYPE_INT32", e2[e2.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e2[e2.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e2[e2.TYPE_BOOL = 8] = "TYPE_BOOL", e2[e2.TYPE_STRING = 9] = "TYPE_STRING", e2[e2.TYPE_GROUP = 10] = "TYPE_GROUP", e2[e2.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e2[e2.TYPE_BYTES = 12] = "TYPE_BYTES", e2[e2.TYPE_UINT32 = 13] = "TYPE_UINT32", e2[e2.TYPE_ENUM = 14] = "TYPE_ENUM", e2[e2.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e2[e2.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e2[e2.TYPE_SINT32 = 17] = "TYPE_SINT32", e2[e2.TYPE_SINT64 = 18] = "TYPE_SINT64";
    })(c || (t.Field_Kind = c = {})), n.proto3.util.setEnumType(c, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e2) {
      e2[e2.UNKNOWN = 0] = "UNKNOWN", e2[e2.OPTIONAL = 1] = "OPTIONAL", e2[e2.REQUIRED = 2] = "REQUIRED", e2[e2.REPEATED = 3] = "REPEATED";
    })(l || (t.Field_Cardinality = l = {})), n.proto3.util.setEnumType(l, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    class p extends s.Message {
      constructor(e2) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = a.PROTO2, this.edition = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new p().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new p().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new p().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(p, e2, t2);
      }
    }
    t.Enum = p, p.runtime = n.proto3, p.typeName = "google.protobuf.Enum", p.fields = n.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: m, repeated: true }, { no: 3, name: "options", kind: "message", T: h, repeated: true }, { no: 4, name: "source_context", kind: "message", T: o.SourceContext }, { no: 5, name: "syntax", kind: "enum", T: n.proto3.getEnumType(a) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    class m extends s.Message {
      constructor(e2) {
        super(), this.name = "", this.number = 0, this.options = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new m().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new m().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new m().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(m, e2, t2);
      }
    }
    t.EnumValue = m, m.runtime = n.proto3, m.typeName = "google.protobuf.EnumValue", m.fields = n.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: h, repeated: true }]);
    class h extends s.Message {
      constructor(e2) {
        super(), this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new h().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new h().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new h().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(h, e2, t2);
      }
    }
    t.Option = h, h.runtime = n.proto3, h.typeName = "google.protobuf.Option", h.fields = n.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: i.Any }]);
  }