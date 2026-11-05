// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7924 range:732930..737153
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7924: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.reifyWkt = void 0;
    const n2 = A2(3408);
    t2.reifyWkt = function(e3) {
      switch (e3.typeName) {
        case "google.protobuf.Any": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.STRING), A3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.BYTES);
          if (t3 && A3) return { typeName: e3.typeName, typeUrl: t3, value: A3 };
          break;
        }
        case "google.protobuf.Timestamp": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT64), A3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT32);
          if (t3 && A3) return { typeName: e3.typeName, seconds: t3, nanos: A3 };
          break;
        }
        case "google.protobuf.Duration": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT64), A3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT32);
          if (t3 && A3) return { typeName: e3.typeName, seconds: t3, nanos: A3 };
          break;
        }
        case "google.protobuf.Struct": {
          const t3 = e3.fields.find((e4) => 1 == e4.number && !e4.repeated);
          if ("map" !== (null == t3 ? void 0 : t3.fieldKind) || "message" !== t3.mapValue.kind || "google.protobuf.Value" !== t3.mapValue.message.typeName) break;
          return { typeName: e3.typeName, fields: t3 };
        }
        case "google.protobuf.Value": {
          const t3 = e3.oneofs.find((e4) => "kind" === e4.name), A3 = e3.fields.find((e4) => 1 == e4.number && e4.oneof === t3);
          if ("enum" !== (null == A3 ? void 0 : A3.fieldKind) || "google.protobuf.NullValue" !== A3.enum.typeName) return;
          const r2 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.DOUBLE && e4.oneof === t3), o2 = e3.fields.find((e4) => 3 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.STRING && e4.oneof === t3), s = e3.fields.find((e4) => 4 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.BOOL && e4.oneof === t3), i = e3.fields.find((e4) => 5 == e4.number && e4.oneof === t3);
          if ("message" !== (null == i ? void 0 : i.fieldKind) || "google.protobuf.Struct" !== i.message.typeName) return;
          const a = e3.fields.find((e4) => 6 == e4.number && e4.oneof === t3);
          if ("message" !== (null == a ? void 0 : a.fieldKind) || "google.protobuf.ListValue" !== a.message.typeName) return;
          if (t3 && r2 && o2 && s) return { typeName: e3.typeName, kind: t3, nullValue: A3, numberValue: r2, stringValue: o2, boolValue: s, structValue: i, listValue: a };
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