// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3469 range:932452..940169
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3469: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Option = e2.EnumValue = e2.Enum = e2.Field_Cardinality = e2.Field_Kind = e2.Field = e2.Type = e2.Syntax = void 0;
    const n2 = r2(7599), s2 = r2(4193), i2 = r2(7206), o2 = r2(8245);
    var a, u, c;
    !(function(t3) {
      t3[t3.PROTO2 = 0] = "PROTO2", t3[t3.PROTO3 = 1] = "PROTO3", t3[t3.EDITIONS = 2] = "EDITIONS";
    })(a || (e2.Syntax = a = {})), n2.proto3.util.setEnumType(a, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    class l extends s2.Message {
      constructor(t3) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = a.PROTO2, this.edition = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(l, t3, e3);
      }
    }
    e2.Type = l, l.runtime = n2.proto3, l.typeName = "google.protobuf.Type", l.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: m, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: p, repeated: true }, { no: 5, name: "source_context", kind: "message", T: i2.SourceContext }, { no: 6, name: "syntax", kind: "enum", T: n2.proto3.getEnumType(a) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    class m extends s2.Message {
      constructor(t3) {
        super(), this.kind = u.TYPE_UNKNOWN, this.cardinality = c.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new m().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new m().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new m().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(m, t3, e3);
      }
    }
    e2.Field = m, m.runtime = n2.proto3, m.typeName = "google.protobuf.Field", m.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: n2.proto3.getEnumType(u) }, { no: 2, name: "cardinality", kind: "enum", T: n2.proto3.getEnumType(c) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: p, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]), (function(t3) {
      t3[t3.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", t3[t3.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", t3[t3.TYPE_FLOAT = 2] = "TYPE_FLOAT", t3[t3.TYPE_INT64 = 3] = "TYPE_INT64", t3[t3.TYPE_UINT64 = 4] = "TYPE_UINT64", t3[t3.TYPE_INT32 = 5] = "TYPE_INT32", t3[t3.TYPE_FIXED64 = 6] = "TYPE_FIXED64", t3[t3.TYPE_FIXED32 = 7] = "TYPE_FIXED32", t3[t3.TYPE_BOOL = 8] = "TYPE_BOOL", t3[t3.TYPE_STRING = 9] = "TYPE_STRING", t3[t3.TYPE_GROUP = 10] = "TYPE_GROUP", t3[t3.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", t3[t3.TYPE_BYTES = 12] = "TYPE_BYTES", t3[t3.TYPE_UINT32 = 13] = "TYPE_UINT32", t3[t3.TYPE_ENUM = 14] = "TYPE_ENUM", t3[t3.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", t3[t3.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", t3[t3.TYPE_SINT32 = 17] = "TYPE_SINT32", t3[t3.TYPE_SINT64 = 18] = "TYPE_SINT64";
    })(u || (e2.Field_Kind = u = {})), n2.proto3.util.setEnumType(u, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(t3) {
      t3[t3.UNKNOWN = 0] = "UNKNOWN", t3[t3.OPTIONAL = 1] = "OPTIONAL", t3[t3.REQUIRED = 2] = "REQUIRED", t3[t3.REPEATED = 3] = "REPEATED";
    })(c || (e2.Field_Cardinality = c = {})), n2.proto3.util.setEnumType(c, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    class d extends s2.Message {
      constructor(t3) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = a.PROTO2, this.edition = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new d().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new d().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new d().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(d, t3, e3);
      }
    }
    e2.Enum = d, d.runtime = n2.proto3, d.typeName = "google.protobuf.Enum", d.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: f, repeated: true }, { no: 3, name: "options", kind: "message", T: p, repeated: true }, { no: 4, name: "source_context", kind: "message", T: i2.SourceContext }, { no: 5, name: "syntax", kind: "enum", T: n2.proto3.getEnumType(a) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    class f extends s2.Message {
      constructor(t3) {
        super(), this.name = "", this.number = 0, this.options = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new f().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new f().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new f().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(f, t3, e3);
      }
    }
    e2.EnumValue = f, f.runtime = n2.proto3, f.typeName = "google.protobuf.EnumValue", f.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: p, repeated: true }]);
    class p extends s2.Message {
      constructor(t3) {
        super(), this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new p().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new p().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new p().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(p, t3, e3);
      }
    }
    e2.Option = p, p.runtime = n2.proto3, p.typeName = "google.protobuf.Option", p.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: o2.Any }]);
  }