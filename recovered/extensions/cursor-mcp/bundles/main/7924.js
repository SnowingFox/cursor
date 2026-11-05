// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7924 range:715539..719770
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7924: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.reifyWkt = void 0;
    const n2 = r2(3408);
    t2.reifyWkt = function(e3) {
      switch (e3.typeName) {
        case "google.protobuf.Any": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.STRING), r3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.BYTES);
          if (t3 && r3) return { typeName: e3.typeName, typeUrl: t3, value: r3 };
          break;
        }
        case "google.protobuf.Timestamp": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT64), r3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT32);
          if (t3 && r3) return { typeName: e3.typeName, seconds: t3, nanos: r3 };
          break;
        }
        case "google.protobuf.Duration": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT64), r3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT32);
          if (t3 && r3) return { typeName: e3.typeName, seconds: t3, nanos: r3 };
          break;
        }
        case "google.protobuf.Struct": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && !e4.repeated);
          if ("map" !== (null == t3 ? void 0 : t3.fieldKind) || "message" !== t3.mapValue.kind || "google.protobuf.Value" !== t3.mapValue.message.typeName) break;
          return { typeName: e3.typeName, fields: t3 };
        }
        case "google.protobuf.Value": {
          const t3 = e3.oneofs.find((e4) => "kind" === e4.name), r3 = e3.fields.find((e4) => 1 == e4.number && e4.oneof === t3);
          if ("enum" !== (null == r3 ? void 0 : r3.fieldKind) || "google.protobuf.NullValue" !== r3.enum.typeName) return;
          const o2 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.DOUBLE && e4.oneof === t3), s2 = e3.fields.find((e4) => 3 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.STRING && e4.oneof === t3), i2 = e3.fields.find((e4) => 4 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.BOOL && e4.oneof === t3), a2 = e3.fields.find((e4) => 5 == e4.number && e4.oneof === t3);
          if ("message" !== (null == a2 ? void 0 : a2.fieldKind) || "google.protobuf.Struct" !== a2.message.typeName) return;
          const c = e3.fields.find((e4) => 6 == e4.number && e4.oneof === t3);
          if ("message" !== (null == c ? void 0 : c.fieldKind) || "google.protobuf.ListValue" !== c.message.typeName) return;
          if (t3 && o2 && s2 && i2) return { typeName: e3.typeName, kind: t3, nullValue: r3, numberValue: o2, stringValue: s2, boolValue: i2, structValue: a2, listValue: c };
          break;
        }
        case "google.protobuf.ListValue": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && e4.repeated);
          if ("message" != (null == t3 ? void 0 : t3.fieldKind) || "google.protobuf.Value" !== t3.message.typeName) break;
          return { typeName: e3.typeName, values: t3 };
        }
        case "google.protobuf.FieldMask": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.STRING && e4.repeated);
          if (t3) return { typeName: e3.typeName, paths: t3 };
          break;
        }
        case "google.protobuf.DoubleValue":
        case "google.protobuf.FloatValue":
        case "google.protobuf.Int64Value":
        case "google.protobuf.UInt64Value":
        case "google.protobuf.Int32Value":
        case "google.protobuf.UInt32Value":
        case "google.protobuf.BoolValue":
        case "google.protobuf.StringValue":
        case "google.protobuf.BytesValue": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "value" == e4.name);
          if (!t3) break;
          if ("scalar" !== t3.fieldKind) break;
          return { typeName: e3.typeName, value: t3 };
        }
      }
    };
  }