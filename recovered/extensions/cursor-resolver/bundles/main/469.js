// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 469 range:126020..133785
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
469: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Option = t2.EnumValue = t2.Enum = t2.Field_Cardinality = t2.Field_Kind = t2.Field = t2.Type = t2.Syntax = void 0;
    const r2 = n2(599), o2 = n2(193), a2 = n2(206), s2 = n2(245);
    var i2, l2, u2;
    !(function(e3) {
      e3[e3.PROTO2 = 0] = "PROTO2", e3[e3.PROTO3 = 1] = "PROTO3", e3[e3.EDITIONS = 2] = "EDITIONS";
    })(i2 || (t2.Syntax = i2 = {})), r2.proto3.util.setEnumType(i2, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    class c2 extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = i2.PROTO2, this.edition = "", r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new c2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new c2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new c2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(c2, e3, t3);
      }
    }
    t2.Type = c2, c2.runtime = r2.proto3, c2.typeName = "google.protobuf.Type", c2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: m2, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: f2, repeated: true }, { no: 5, name: "source_context", kind: "message", T: a2.SourceContext }, { no: 6, name: "syntax", kind: "enum", T: r2.proto3.getEnumType(i2) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    class m2 extends o2.Message {
      constructor(e3) {
        super(), this.kind = l2.TYPE_UNKNOWN, this.cardinality = u2.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new m2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new m2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new m2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(m2, e3, t3);
      }
    }
    t2.Field = m2, m2.runtime = r2.proto3, m2.typeName = "google.protobuf.Field", m2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: r2.proto3.getEnumType(l2) }, { no: 2, name: "cardinality", kind: "enum", T: r2.proto3.getEnumType(u2) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: f2, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]), (function(e3) {
      e3[e3.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e3[e3.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e3[e3.TYPE_FLOAT = 2] = "TYPE_FLOAT", e3[e3.TYPE_INT64 = 3] = "TYPE_INT64", e3[e3.TYPE_UINT64 = 4] = "TYPE_UINT64", e3[e3.TYPE_INT32 = 5] = "TYPE_INT32", e3[e3.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e3[e3.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e3[e3.TYPE_BOOL = 8] = "TYPE_BOOL", e3[e3.TYPE_STRING = 9] = "TYPE_STRING", e3[e3.TYPE_GROUP = 10] = "TYPE_GROUP", e3[e3.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e3[e3.TYPE_BYTES = 12] = "TYPE_BYTES", e3[e3.TYPE_UINT32 = 13] = "TYPE_UINT32", e3[e3.TYPE_ENUM = 14] = "TYPE_ENUM", e3[e3.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e3[e3.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e3[e3.TYPE_SINT32 = 17] = "TYPE_SINT32", e3[e3.TYPE_SINT64 = 18] = "TYPE_SINT64";
    })(l2 || (t2.Field_Kind = l2 = {})), r2.proto3.util.setEnumType(l2, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.UNKNOWN = 0] = "UNKNOWN", e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REQUIRED = 2] = "REQUIRED", e3[e3.REPEATED = 3] = "REPEATED";
    })(u2 || (t2.Field_Cardinality = u2 = {})), r2.proto3.util.setEnumType(u2, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    class p2 extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = i2.PROTO2, this.edition = "", r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new p2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new p2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new p2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(p2, e3, t3);
      }
    }
    t2.Enum = p2, p2.runtime = r2.proto3, p2.typeName = "google.protobuf.Enum", p2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: d2, repeated: true }, { no: 3, name: "options", kind: "message", T: f2, repeated: true }, { no: 4, name: "source_context", kind: "message", T: a2.SourceContext }, { no: 5, name: "syntax", kind: "enum", T: r2.proto3.getEnumType(i2) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    class d2 extends o2.Message {
      constructor(e3) {
        super(), this.name = "", this.number = 0, this.options = [], r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new d2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new d2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new d2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(d2, e3, t3);
      }
    }
    t2.EnumValue = d2, d2.runtime = r2.proto3, d2.typeName = "google.protobuf.EnumValue", d2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: f2, repeated: true }]);
    class f2 extends o2.Message {
      constructor(e3) {
        super(), this.name = "", r2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new f2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new f2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new f2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(f2, e3, t3);
      }
    }
    t2.Option = f2, f2.runtime = r2.proto3, f2.typeName = "google.protobuf.Option", f2.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: s2.Any }]);
  }