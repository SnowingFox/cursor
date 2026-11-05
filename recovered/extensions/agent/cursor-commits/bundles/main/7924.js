// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 7924 range:601209..605440
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7924: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.reifyWkt = void 0;
    const t2 = a2(3408);
    n2.reifyWkt = function(e3) {
      switch (e3.typeName) {
        case "google.protobuf.Any": {
          const n3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === t2.ScalarType.STRING), a3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === t2.ScalarType.BYTES);
          if (n3 && a3) return { typeName: e3.typeName, typeUrl: n3, value: a3 };
          break;
        }
        case "google.protobuf.Timestamp": {
          const n3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === t2.ScalarType.INT64), a3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === t2.ScalarType.INT32);
          if (n3 && a3) return { typeName: e3.typeName, seconds: n3, nanos: a3 };
          break;
        }
        case "google.protobuf.Duration": {
          const n3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === t2.ScalarType.INT64), a3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === t2.ScalarType.INT32);
          if (n3 && a3) return { typeName: e3.typeName, seconds: n3, nanos: a3 };
          break;
        }
        case "google.protobuf.Struct": {
          const n3 = e3.fields.find((e4) => 1 == e4.number && !e4.repeated);
          if ("map" !== (null == n3 ? void 0 : n3.fieldKind) || "message" !== n3.mapValue.kind || "google.protobuf.Value" !== n3.mapValue.message.typeName) break;
          return { typeName: e3.typeName, fields: n3 };
        }
        case "google.protobuf.Value": {
          const n3 = e3.oneofs.find((e4) => "kind" === e4.name), a3 = e3.fields.find((e4) => 1 == e4.number && e4.oneof === n3);
          if ("enum" !== (null == a3 ? void 0 : a3.fieldKind) || "google.protobuf.NullValue" !== a3.enum.typeName) return;
          const s2 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === t2.ScalarType.DOUBLE && e4.oneof === n3), o2 = e3.fields.find((e4) => 3 == e4.number && "scalar" == e4.fieldKind && e4.scalar === t2.ScalarType.STRING && e4.oneof === n3), r2 = e3.fields.find((e4) => 4 == e4.number && "scalar" == e4.fieldKind && e4.scalar === t2.ScalarType.BOOL && e4.oneof === n3), i2 = e3.fields.find((e4) => 5 == e4.number && e4.oneof === n3);
          if ("message" !== (null == i2 ? void 0 : i2.fieldKind) || "google.protobuf.Struct" !== i2.message.typeName) return;
          const A = e3.fields.find((e4) => 6 == e4.number && e4.oneof === n3);
          if ("message" !== (null == A ? void 0 : A.fieldKind) || "google.protobuf.ListValue" !== A.message.typeName) return;
          if (n3 && s2 && o2 && r2) return { typeName: e3.typeName, kind: n3, nullValue: a3, numberValue: s2, stringValue: o2, boolValue: r2, structValue: i2, listValue: A };
          break;
        }
        case "google.protobuf.ListValue": {
          const n3 = e3.fields.find((e4) => 1 == e4.number && e4.repeated);
          if ("message" != (null == n3 ? void 0 : n3.fieldKind) || "google.protobuf.Value" !== n3.message.typeName) break;
          return { typeName: e3.typeName, values: n3 };
        }
        case "google.protobuf.FieldMask": {
          const n3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === t2.ScalarType.STRING && e4.repeated);
          if (n3) return { typeName: e3.typeName, paths: n3 };
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
          const n3 = e3.fields.find((e4) => 1 == e4.number && "value" == e4.name);
          if (!n3) break;
          if ("scalar" !== n3.fieldKind) break;
          return { typeName: e3.typeName, value: n3 };
        }
      }
    };
  }