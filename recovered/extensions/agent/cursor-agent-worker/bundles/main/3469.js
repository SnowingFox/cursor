// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3469 range:120785..128834
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3469: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.Option = a10.EnumValue = a10.Enum = a10.Field_Cardinality = a10.Field_Kind = a10.Field = a10.Type = a10.Syntax = void 0;
    const s10 = n10(7599), o10 = n10(4193), r10 = n10(7206), t10 = n10(8245);
    var i10, m10, l10;
    !(function(e11) {
      e11[e11.PROTO2 = 0] = "PROTO2", e11[e11.PROTO3 = 1] = "PROTO3", e11[e11.EDITIONS = 2] = "EDITIONS";
    })(i10 || (a10.Syntax = i10 = {})), s10.proto3.util.setEnumType(i10, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    class d10 extends o10.Message {
      constructor(e11) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = i10.PROTO2, this.edition = "", s10.proto3.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new d10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new d10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new d10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto3.util.equals(d10, e11, a11);
      }
    }
    a10.Type = d10, d10.runtime = s10.proto3, d10.typeName = "google.protobuf.Type", d10.fields = s10.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: c10, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: _10, repeated: true }, { no: 5, name: "source_context", kind: "message", T: r10.SourceContext }, { no: 6, name: "syntax", kind: "enum", T: s10.proto3.getEnumType(i10) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    class c10 extends o10.Message {
      constructor(e11) {
        super(), this.kind = m10.TYPE_UNKNOWN, this.cardinality = l10.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", s10.proto3.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new c10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new c10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new c10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto3.util.equals(c10, e11, a11);
      }
    }
    a10.Field = c10, c10.runtime = s10.proto3, c10.typeName = "google.protobuf.Field", c10.fields = s10.proto3.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: s10.proto3.getEnumType(m10) }, { no: 2, name: "cardinality", kind: "enum", T: s10.proto3.getEnumType(l10) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: _10, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]), (function(e11) {
      e11[e11.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e11[e11.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e11[e11.TYPE_FLOAT = 2] = "TYPE_FLOAT", e11[e11.TYPE_INT64 = 3] = "TYPE_INT64", e11[e11.TYPE_UINT64 = 4] = "TYPE_UINT64", e11[e11.TYPE_INT32 = 5] = "TYPE_INT32", e11[e11.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e11[e11.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e11[e11.TYPE_BOOL = 8] = "TYPE_BOOL", e11[e11.TYPE_STRING = 9] = "TYPE_STRING", e11[e11.TYPE_GROUP = 10] = "TYPE_GROUP", e11[e11.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e11[e11.TYPE_BYTES = 12] = "TYPE_BYTES", e11[e11.TYPE_UINT32 = 13] = "TYPE_UINT32", e11[e11.TYPE_ENUM = 14] = "TYPE_ENUM", e11[e11.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e11[e11.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e11[e11.TYPE_SINT32 = 17] = "TYPE_SINT32", e11[e11.TYPE_SINT64 = 18] = "TYPE_SINT64";
    })(m10 || (a10.Field_Kind = m10 = {})), s10.proto3.util.setEnumType(m10, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]), (function(e11) {
      e11[e11.UNKNOWN = 0] = "UNKNOWN", e11[e11.OPTIONAL = 1] = "OPTIONAL", e11[e11.REQUIRED = 2] = "REQUIRED", e11[e11.REPEATED = 3] = "REPEATED";
    })(l10 || (a10.Field_Cardinality = l10 = {})), s10.proto3.util.setEnumType(l10, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    class T10 extends o10.Message {
      constructor(e11) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = i10.PROTO2, this.edition = "", s10.proto3.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new T10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new T10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new T10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto3.util.equals(T10, e11, a11);
      }
    }
    a10.Enum = T10, T10.runtime = s10.proto3, T10.typeName = "google.protobuf.Enum", T10.fields = s10.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: p10, repeated: true }, { no: 3, name: "options", kind: "message", T: _10, repeated: true }, { no: 4, name: "source_context", kind: "message", T: r10.SourceContext }, { no: 5, name: "syntax", kind: "enum", T: s10.proto3.getEnumType(i10) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    class p10 extends o10.Message {
      constructor(e11) {
        super(), this.name = "", this.number = 0, this.options = [], s10.proto3.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new p10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new p10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new p10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto3.util.equals(p10, e11, a11);
      }
    }
    a10.EnumValue = p10, p10.runtime = s10.proto3, p10.typeName = "google.protobuf.EnumValue", p10.fields = s10.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: _10, repeated: true }]);
    class _10 extends o10.Message {
      constructor(e11) {
        super(), this.name = "", s10.proto3.util.initPartial(e11, this);
      }
      static fromBinary(e11, a11) {
        return new _10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new _10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new _10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return s10.proto3.util.equals(_10, e11, a11);
      }
    }
    a10.Option = _10, _10.runtime = s10.proto3, _10.typeName = "google.protobuf.Option", _10.fields = s10.proto3.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: t10.Any }]);
  }