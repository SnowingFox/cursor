// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7924 range:4685913..4690139
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7924: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.reifyWkt = void 0;
    const n2 = r2(3408);
    e2.reifyWkt = function(t3) {
      switch (t3.typeName) {
        case "google.protobuf.Any": {
          const e3 = t3.fields.find((t4) => 1 == t4.number && "scalar" == t4.fieldKind && t4.scalar === n2.ScalarType.STRING), r3 = t3.fields.find((t4) => 2 == t4.number && "scalar" == t4.fieldKind && t4.scalar === n2.ScalarType.BYTES);
          if (e3 && r3) return { typeName: t3.typeName, typeUrl: e3, value: r3 };
          break;
        }
        case "google.protobuf.Timestamp": {
          const e3 = t3.fields.find((t4) => 1 == t4.number && "scalar" == t4.fieldKind && t4.scalar === n2.ScalarType.INT64), r3 = t3.fields.find((t4) => 2 == t4.number && "scalar" == t4.fieldKind && t4.scalar === n2.ScalarType.INT32);
          if (e3 && r3) return { typeName: t3.typeName, seconds: e3, nanos: r3 };
          break;
        }
        case "google.protobuf.Duration": {
          const e3 = t3.fields.find((t4) => 1 == t4.number && "scalar" == t4.fieldKind && t4.scalar === n2.ScalarType.INT64), r3 = t3.fields.find((t4) => 2 == t4.number && "scalar" == t4.fieldKind && t4.scalar === n2.ScalarType.INT32);
          if (e3 && r3) return { typeName: t3.typeName, seconds: e3, nanos: r3 };
          break;
        }
        case "google.protobuf.Struct": {
          const e3 = t3.fields.find((t4) => 1 == t4.number && !t4.repeated);
          if ("map" !== (null == e3 ? void 0 : e3.fieldKind) || "message" !== e3.mapValue.kind || "google.protobuf.Value" !== e3.mapValue.message.typeName) break;
          return { typeName: t3.typeName, fields: e3 };
        }
        case "google.protobuf.Value": {
          const e3 = t3.oneofs.find((t4) => "kind" === t4.name), r3 = t3.fields.find((t4) => 1 == t4.number && t4.oneof === e3);
          if ("enum" !== (null == r3 ? void 0 : r3.fieldKind) || "google.protobuf.NullValue" !== r3.enum.typeName) return;
          const s2 = t3.fields.find((t4) => 2 == t4.number && "scalar" == t4.fieldKind && t4.scalar === n2.ScalarType.DOUBLE && t4.oneof === e3), i2 = t3.fields.find((t4) => 3 == t4.number && "scalar" == t4.fieldKind && t4.scalar === n2.ScalarType.STRING && t4.oneof === e3), o2 = t3.fields.find((t4) => 4 == t4.number && "scalar" == t4.fieldKind && t4.scalar === n2.ScalarType.BOOL && t4.oneof === e3), a = t3.fields.find((t4) => 5 == t4.number && t4.oneof === e3);
          if ("message" !== (null == a ? void 0 : a.fieldKind) || "google.protobuf.Struct" !== a.message.typeName) return;
          const u = t3.fields.find((t4) => 6 == t4.number && t4.oneof === e3);
          if ("message" !== (null == u ? void 0 : u.fieldKind) || "google.protobuf.ListValue" !== u.message.typeName) return;
          if (e3 && s2 && i2 && o2) return { typeName: t3.typeName, kind: e3, nullValue: r3, numberValue: s2, stringValue: i2, boolValue: o2, structValue: a, listValue: u };
          break;
        }
        case "google.protobuf.ListValue": {
          const e3 = t3.fields.find((t4) => 1 == t4.number && t4.repeated);
          if ("message" != (null == e3 ? void 0 : e3.fieldKind) || "google.protobuf.Value" !== e3.message.typeName) break;
          return { typeName: t3.typeName, values: e3 };
        }
        case "google.protobuf.FieldMask": {
          const e3 = t3.fields.find((t4) => 1 == t4.number && "scalar" == t4.fieldKind && t4.scalar === n2.ScalarType.STRING && t4.repeated);
          if (e3) return { typeName: t3.typeName, paths: e3 };
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
          const e3 = t3.fields.find((t4) => 1 == t4.number && "value" == t4.name);
          if (!e3) break;
          if ("scalar" !== e3.fieldKind) break;
          return { typeName: t3.typeName, value: e3 };
        }
      }
    };
  }