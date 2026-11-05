// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 924 range:204590..208806
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
924: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.reifyWkt = void 0;
    const o2 = n2(408);
    a2.reifyWkt = function(e3) {
      switch (e3.typeName) {
        case "google.protobuf.Any": {
          const a3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === o2.ScalarType.STRING), n3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === o2.ScalarType.BYTES);
          if (a3 && n3) return { typeName: e3.typeName, typeUrl: a3, value: n3 };
          break;
        }
        case "google.protobuf.Timestamp": {
          const a3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === o2.ScalarType.INT64), n3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === o2.ScalarType.INT32);
          if (a3 && n3) return { typeName: e3.typeName, seconds: a3, nanos: n3 };
          break;
        }
        case "google.protobuf.Duration": {
          const a3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === o2.ScalarType.INT64), n3 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === o2.ScalarType.INT32);
          if (a3 && n3) return { typeName: e3.typeName, seconds: a3, nanos: n3 };
          break;
        }
        case "google.protobuf.Struct": {
          const a3 = e3.fields.find((e4) => 1 == e4.number && !e4.repeated);
          if ("map" !== (null == a3 ? void 0 : a3.fieldKind) || "message" !== a3.mapValue.kind || "google.protobuf.Value" !== a3.mapValue.message.typeName) break;
          return { typeName: e3.typeName, fields: a3 };
        }
        case "google.protobuf.Value": {
          const a3 = e3.oneofs.find((e4) => "kind" === e4.name), n3 = e3.fields.find((e4) => 1 == e4.number && e4.oneof === a3);
          if ("enum" !== (null == n3 ? void 0 : n3.fieldKind) || "google.protobuf.NullValue" !== n3.enum.typeName) return;
          const s2 = e3.fields.find((e4) => 2 == e4.number && "scalar" == e4.fieldKind && e4.scalar === o2.ScalarType.DOUBLE && e4.oneof === a3), t2 = e3.fields.find((e4) => 3 == e4.number && "scalar" == e4.fieldKind && e4.scalar === o2.ScalarType.STRING && e4.oneof === a3), r2 = e3.fields.find((e4) => 4 == e4.number && "scalar" == e4.fieldKind && e4.scalar === o2.ScalarType.BOOL && e4.oneof === a3), i2 = e3.fields.find((e4) => 5 == e4.number && e4.oneof === a3);
          if ("message" !== (null == i2 ? void 0 : i2.fieldKind) || "google.protobuf.Struct" !== i2.message.typeName) return;
          const m2 = e3.fields.find((e4) => 6 == e4.number && e4.oneof === a3);
          if ("message" !== (null == m2 ? void 0 : m2.fieldKind) || "google.protobuf.ListValue" !== m2.message.typeName) return;
          if (a3 && s2 && t2 && r2) return { typeName: e3.typeName, kind: a3, nullValue: n3, numberValue: s2, stringValue: t2, boolValue: r2, structValue: i2, listValue: m2 };
          break;
        }
        case "google.protobuf.ListValue": {
          const a3 = e3.fields.find((e4) => 1 == e4.number && e4.repeated);
          if ("message" != (null == a3 ? void 0 : a3.fieldKind) || "google.protobuf.Value" !== a3.message.typeName) break;
          return { typeName: e3.typeName, values: a3 };
        }
        case "google.protobuf.FieldMask": {
          const a3 = e3.fields.find((e4) => 1 == e4.number && "scalar" == e4.fieldKind && e4.scalar === o2.ScalarType.STRING && e4.repeated);
          if (a3) return { typeName: e3.typeName, paths: a3 };
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
          const a3 = e3.fields.find((e4) => 1 == e4.number && "value" == e4.name);
          if (!a3) break;
          if ("scalar" !== a3.fieldKind) break;
          return { typeName: e3.typeName, value: a3 };
        }
      }
    };
  }