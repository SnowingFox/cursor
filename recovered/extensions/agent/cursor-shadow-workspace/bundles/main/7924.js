// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7924 range:600457..604680
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7924: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.reifyWkt = void 0;
    const n2 = t2(3408);
    A2.reifyWkt = function(e3) {
      switch (e3.typeName) {
        case "google.protobuf.Any": {
          const A3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.STRING), t3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.BYTES);
          if (A3 && t3) return { typeName: e3.typeName, typeUrl: A3, value: t3 };
          break;
        }
        case "google.protobuf.Timestamp": {
          const A3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT64), t3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT32);
          if (A3 && t3) return { typeName: e3.typeName, seconds: A3, nanos: t3 };
          break;
        }
        case "google.protobuf.Duration": {
          const A3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT64), t3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.INT32);
          if (A3 && t3) return { typeName: e3.typeName, seconds: A3, nanos: t3 };
          break;
        }
        case "google.protobuf.Struct": {
          const A3 = e3.fields.find((e4) => 1 == e4.number && !e4.repeated);
          if ("map" !== (null == A3 ? void 0 : A3.fieldKind) || "message" !== A3.mapValue.kind || "google.protobuf.Value" !== A3.mapValue.message.typeName) break;
          return { typeName: e3.typeName, fields: A3 };
        }
        case "google.protobuf.Value": {
          const A3 = e3.oneofs.find((e4) => "kind" === e4.name), t3 = e3.fields.find((e4) => 1 == e4.number && e4.oneof === A3);
          if ("enum" !== (null == t3 ? void 0 : t3.fieldKind) || "google.protobuf.NullValue" !== t3.enum.typeName) return;
          const r2 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.DOUBLE && e4.oneof === A3), o2 = e3.fields.find((e4) => 3 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.STRING && e4.oneof === A3), s = e3.fields.find((e4) => 4 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.BOOL && e4.oneof === A3), a = e3.fields.find((e4) => 5 == e4.number && e4.oneof === A3);
          if ("message" !== (null == a ? void 0 : a.fieldKind) || "google.protobuf.Struct" !== a.message.typeName) return;
          const i = e3.fields.find((e4) => 6 == e4.number && e4.oneof === A3);
          if ("message" !== (null == i ? void 0 : i.fieldKind) || "google.protobuf.ListValue" !== i.message.typeName) return;
          if (A3 && r2 && o2 && s) return { typeName: e3.typeName, kind: A3, nullValue: t3, numberValue: r2, stringValue: o2, boolValue: s, structValue: a, listValue: i };
          break;
        }
        case "google.protobuf.ListValue": {
          const A3 = e3.fields.find((e4) => 1 == e4.number && e4.repeated);
          if ("message" != (null == A3 ? void 0 : A3.fieldKind) || "google.protobuf.Value" !== A3.message.typeName) break;
          return { typeName: e3.typeName, values: A3 };
        }
        case "google.protobuf.FieldMask": {
          const A3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === n2.ScalarType.STRING && e4.repeated);
          if (A3) return { typeName: e3.typeName, paths: A3 };
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
          const A3 = e3.fields.find((e4) => 1 == e4.number && "value" == e4.name);
          if (!A3) break;
          if ("scalar" !== A3.fieldKind) break;
          return { typeName: e3.typeName, value: A3 };
        }
      }
    };
  }