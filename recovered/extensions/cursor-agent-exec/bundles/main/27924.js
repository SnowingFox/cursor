// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 27924 range:1327684..1331884
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27924: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.reifyWkt = void 0;
    const n = r(3408);
    t.reifyWkt = function(e2) {
      switch (e2.typeName) {
        case "google.protobuf.Any": {
          const t2 = e2.fields.find((e3) => 1 == e3.number && "scalar" == e3.fieldKind && e3.scalar === n.ScalarType.STRING), r2 = e2.fields.find((e3) => 2 == e3.number && "scalar" == e3.fieldKind && e3.scalar === n.ScalarType.BYTES);
          if (t2 && r2) return { typeName: e2.typeName, typeUrl: t2, value: r2 };
          break;
        }
        case "google.protobuf.Timestamp": {
          const t2 = e2.fields.find((e3) => 1 == e3.number && "scalar" == e3.fieldKind && e3.scalar === n.ScalarType.INT64), r2 = e2.fields.find((e3) => 2 == e3.number && "scalar" == e3.fieldKind && e3.scalar === n.ScalarType.INT32);
          if (t2 && r2) return { typeName: e2.typeName, seconds: t2, nanos: r2 };
          break;
        }
        case "google.protobuf.Duration": {
          const t2 = e2.fields.find((e3) => 1 == e3.number && "scalar" == e3.fieldKind && e3.scalar === n.ScalarType.INT64), r2 = e2.fields.find((e3) => 2 == e3.number && "scalar" == e3.fieldKind && e3.scalar === n.ScalarType.INT32);
          if (t2 && r2) return { typeName: e2.typeName, seconds: t2, nanos: r2 };
          break;
        }
        case "google.protobuf.Struct": {
          const t2 = e2.fields.find((e3) => 1 == e3.number && !e3.repeated);
          if ("map" !== (null == t2 ? void 0 : t2.fieldKind) || "message" !== t2.mapValue.kind || "google.protobuf.Value" !== t2.mapValue.message.typeName) break;
          return { typeName: e2.typeName, fields: t2 };
        }
        case "google.protobuf.Value": {
          const t2 = e2.oneofs.find((e3) => "kind" === e3.name), r2 = e2.fields.find((e3) => 1 == e3.number && e3.oneof === t2);
          if ("enum" !== (null == r2 ? void 0 : r2.fieldKind) || "google.protobuf.NullValue" !== r2.enum.typeName) return;
          const s = e2.fields.find((e3) => 2 == e3.number && "scalar" == e3.fieldKind && e3.scalar === n.ScalarType.DOUBLE && e3.oneof === t2), o = e2.fields.find((e3) => 3 == e3.number && "scalar" == e3.fieldKind && e3.scalar === n.ScalarType.STRING && e3.oneof === t2), i = e2.fields.find((e3) => 4 == e3.number && "scalar" == e3.fieldKind && e3.scalar === n.ScalarType.BOOL && e3.oneof === t2), a = e2.fields.find((e3) => 5 == e3.number && e3.oneof === t2);
          if ("message" !== (null == a ? void 0 : a.fieldKind) || "google.protobuf.Struct" !== a.message.typeName) return;
          const c = e2.fields.find((e3) => 6 == e3.number && e3.oneof === t2);
          if ("message" !== (null == c ? void 0 : c.fieldKind) || "google.protobuf.ListValue" !== c.message.typeName) return;
          if (t2 && s && o && i) return { typeName: e2.typeName, kind: t2, nullValue: r2, numberValue: s, stringValue: o, boolValue: i, structValue: a, listValue: c };
          break;
        }
        case "google.protobuf.ListValue": {
          const t2 = e2.fields.find((e3) => 1 == e3.number && e3.repeated);
          if ("message" != (null == t2 ? void 0 : t2.fieldKind) || "google.protobuf.Value" !== t2.message.typeName) break;
          return { typeName: e2.typeName, values: t2 };
        }
        case "google.protobuf.FieldMask": {
          const t2 = e2.fields.find((e3) => 1 == e3.number && "scalar" == e3.fieldKind && e3.scalar === n.ScalarType.STRING && e3.repeated);
          if (t2) return { typeName: e2.typeName, paths: t2 };
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
          const t2 = e2.fields.find((e3) => 1 == e3.number && "value" == e3.name);
          if (!t2) break;
          if ("scalar" !== t2.fieldKind) break;
          return { typeName: e2.typeName, value: t2 };
        }
      }
    };
  }