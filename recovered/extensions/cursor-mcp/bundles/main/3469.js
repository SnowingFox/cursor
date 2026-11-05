// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3469 range:271681..279406
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3469: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Option = t2.EnumValue = t2.Enum = t2.Field_Cardinality = t2.Field_Kind = t2.Field = t2.Type = t2.Syntax = void 0;
    const n2 = r2(7599), o2 = r2(4193), s2 = r2(7206), i2 = r2(8245);
    var a2, c, u;
    !(function(e3) {
      e3[e3.PROTO2 = 0] = "PROTO2", e3[e3.PROTO3 = 1] = "PROTO3", e3[e3.EDITIONS = 2] = "EDITIONS";
    })(a2 || (t2.Syntax = a2 = {})), n2.proto3.util.setEnumType(a2, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    class l extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = a2.PROTO2, this.edition = "", n2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new l().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new l().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new l().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto3.util.equals(l, e3, t3);
      }
    }
    t2.Type = l, l.runtime = n2.proto3, l.typeName = "google.protobuf.Type", l.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: d, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: h, repeated: true }, { no: 5, name: "source_context", kind: "message", T: s2.SourceContext }, { no: 6, name: "syntax", kind: "enum", T: n2.proto3.getEnumType(a2) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    class d extends o2.Message {
      constructor(e3) {
        super(), this.kind = c.TYPE_UNKNOWN, this.cardinality = u.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", n2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new d().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new d().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new d().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto3.util.equals(d, e3, t3);
      }
    }
    t2.Field = d, d.runtime = n2.proto3, d.typeName = "google.protobuf.Field", d.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: n2.proto3.getEnumType(c) }, { no: 2, name: "cardinality", kind: "enum", T: n2.proto3.getEnumType(u) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: h, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]), (function(e3) {
      e3[e3.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e3[e3.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e3[e3.TYPE_FLOAT = 2] = "TYPE_FLOAT", e3[e3.TYPE_INT64 = 3] = "TYPE_INT64", e3[e3.TYPE_UINT64 = 4] = "TYPE_UINT64", e3[e3.TYPE_INT32 = 5] = "TYPE_INT32", e3[e3.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e3[e3.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e3[e3.TYPE_BOOL = 8] = "TYPE_BOOL", e3[e3.TYPE_STRING = 9] = "TYPE_STRING", e3[e3.TYPE_GROUP = 10] = "TYPE_GROUP", e3[e3.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e3[e3.TYPE_BYTES = 12] = "TYPE_BYTES", e3[e3.TYPE_UINT32 = 13] = "TYPE_UINT32", e3[e3.TYPE_ENUM = 14] = "TYPE_ENUM", e3[e3.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e3[e3.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e3[e3.TYPE_SINT32 = 17] = "TYPE_SINT32", e3[e3.TYPE_SINT64 = 18] = "TYPE_SINT64";
    })(c || (t2.Field_Kind = c = {})), n2.proto3.util.setEnumType(c, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.UNKNOWN = 0] = "UNKNOWN", e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REQUIRED = 2] = "REQUIRED", e3[e3.REPEATED = 3] = "REPEATED";
    })(u || (t2.Field_Cardinality = u = {})), n2.proto3.util.setEnumType(u, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    class p extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = a2.PROTO2, this.edition = "", n2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new p().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new p().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new p().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto3.util.equals(p, e3, t3);
      }
    }
    t2.Enum = p, p.runtime = n2.proto3, p.typeName = "google.protobuf.Enum", p.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: f, repeated: true }, { no: 3, name: "options", kind: "message", T: h, repeated: true }, { no: 4, name: "source_context", kind: "message", T: s2.SourceContext }, { no: 5, name: "syntax", kind: "enum", T: n2.proto3.getEnumType(a2) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    class f extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.number = 0, this.options = [], n2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new f().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new f().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new f().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto3.util.equals(f, e3, t3);
      }
    }
    t2.EnumValue = f, f.runtime = n2.proto3, f.typeName = "google.protobuf.EnumValue", f.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: h, repeated: true }]);
    class h extends o2.Message {
      constructor(e3) {
        super(), this.name = "", n2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new h().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new h().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new h().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return n2.proto3.util.equals(h, e3, t3);
      }
    }
    t2.Option = h, h.runtime = n2.proto3, h.typeName = "google.protobuf.Option", h.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: i2.Any }]);
  }