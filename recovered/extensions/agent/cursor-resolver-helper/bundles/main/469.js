// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 469 range:126020..133785
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
469: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.Option = a2.EnumValue = a2.Enum = a2.Field_Cardinality = a2.Field_Kind = a2.Field = a2.Type = a2.Syntax = void 0;
    const o2 = n2(599), s2 = n2(193), t2 = n2(206), r2 = n2(245);
    var i2, m2, l2;
    !(function(e3) {
      e3[e3.PROTO2 = 0] = "PROTO2", e3[e3.PROTO3 = 1] = "PROTO3", e3[e3.EDITIONS = 2] = "EDITIONS";
    })(i2 || (a2.Syntax = i2 = {})), o2.proto3.util.setEnumType(i2, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    class d2 extends s2.Message {
      constructor(e3) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = i2.PROTO2, this.edition = "", o2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new d2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new d2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new d2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return o2.proto3.util.equals(d2, e3, a3);
      }
    }
    a2.Type = d2, d2.runtime = o2.proto3, d2.typeName = "google.protobuf.Type", d2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: c2, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: p2, repeated: true }, { no: 5, name: "source_context", kind: "message", T: t2.SourceContext }, { no: 6, name: "syntax", kind: "enum", T: o2.proto3.getEnumType(i2) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    class c2 extends s2.Message {
      constructor(e3) {
        super(), this.kind = m2.TYPE_UNKNOWN, this.cardinality = l2.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", o2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new c2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new c2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new c2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return o2.proto3.util.equals(c2, e3, a3);
      }
    }
    a2.Field = c2, c2.runtime = o2.proto3, c2.typeName = "google.protobuf.Field", c2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: o2.proto3.getEnumType(m2) }, { no: 2, name: "cardinality", kind: "enum", T: o2.proto3.getEnumType(l2) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: p2, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]), (function(e3) {
      e3[e3.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e3[e3.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e3[e3.TYPE_FLOAT = 2] = "TYPE_FLOAT", e3[e3.TYPE_INT64 = 3] = "TYPE_INT64", e3[e3.TYPE_UINT64 = 4] = "TYPE_UINT64", e3[e3.TYPE_INT32 = 5] = "TYPE_INT32", e3[e3.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e3[e3.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e3[e3.TYPE_BOOL = 8] = "TYPE_BOOL", e3[e3.TYPE_STRING = 9] = "TYPE_STRING", e3[e3.TYPE_GROUP = 10] = "TYPE_GROUP", e3[e3.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e3[e3.TYPE_BYTES = 12] = "TYPE_BYTES", e3[e3.TYPE_UINT32 = 13] = "TYPE_UINT32", e3[e3.TYPE_ENUM = 14] = "TYPE_ENUM", e3[e3.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e3[e3.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e3[e3.TYPE_SINT32 = 17] = "TYPE_SINT32", e3[e3.TYPE_SINT64 = 18] = "TYPE_SINT64";
    })(m2 || (a2.Field_Kind = m2 = {})), o2.proto3.util.setEnumType(m2, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e3) {
      e3[e3.UNKNOWN = 0] = "UNKNOWN", e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REQUIRED = 2] = "REQUIRED", e3[e3.REPEATED = 3] = "REPEATED";
    })(l2 || (a2.Field_Cardinality = l2 = {})), o2.proto3.util.setEnumType(l2, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    class T2 extends s2.Message {
      constructor(e3) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = i2.PROTO2, this.edition = "", o2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new T2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new T2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new T2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return o2.proto3.util.equals(T2, e3, a3);
      }
    }
    a2.Enum = T2, T2.runtime = o2.proto3, T2.typeName = "google.protobuf.Enum", T2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: _2, repeated: true }, { no: 3, name: "options", kind: "message", T: p2, repeated: true }, { no: 4, name: "source_context", kind: "message", T: t2.SourceContext }, { no: 5, name: "syntax", kind: "enum", T: o2.proto3.getEnumType(i2) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    class _2 extends s2.Message {
      constructor(e3) {
        super(), this.name = "", this.number = 0, this.options = [], o2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new _2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new _2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new _2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return o2.proto3.util.equals(_2, e3, a3);
      }
    }
    a2.EnumValue = _2, _2.runtime = o2.proto3, _2.typeName = "google.protobuf.EnumValue", _2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: p2, repeated: true }]);
    class p2 extends s2.Message {
      constructor(e3) {
        super(), this.name = "", o2.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, a3) {
        return new p2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new p2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new p2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return o2.proto3.util.equals(p2, e3, a3);
      }
    }
    a2.Option = p2, p2.runtime = o2.proto3, p2.typeName = "google.protobuf.Option", p2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: r2.Any }]);
  }