// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7924 range:297487..301883
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7924: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.reifyWkt = void 0;
    const s10 = n10(3408);
    a10.reifyWkt = function(e11) {
      switch (e11.typeName) {
        case "google.protobuf.Any": {
          const a11 = e11.fields.find((e12) => 1 == e12.number && "scalar" == e12.fieldKind && e12.scalar === s10.ScalarType.STRING), n11 = e11.fields.find((e12) => 2 == e12.number && "scalar" == e12.fieldKind && e12.scalar === s10.ScalarType.BYTES);
          if (a11 && n11) return { typeName: e11.typeName, typeUrl: a11, value: n11 };
          break;
        }
        case "google.protobuf.Timestamp": {
          const a11 = e11.fields.find((e12) => 1 == e12.number && "scalar" == e12.fieldKind && e12.scalar === s10.ScalarType.INT64), n11 = e11.fields.find((e12) => 2 == e12.number && "scalar" == e12.fieldKind && e12.scalar === s10.ScalarType.INT32);
          if (a11 && n11) return { typeName: e11.typeName, seconds: a11, nanos: n11 };
          break;
        }
        case "google.protobuf.Duration": {
          const a11 = e11.fields.find((e12) => 1 == e12.number && "scalar" == e12.fieldKind && e12.scalar === s10.ScalarType.INT64), n11 = e11.fields.find((e12) => 2 == e12.number && "scalar" == e12.fieldKind && e12.scalar === s10.ScalarType.INT32);
          if (a11 && n11) return { typeName: e11.typeName, seconds: a11, nanos: n11 };
          break;
        }
        case "google.protobuf.Struct": {
          const a11 = e11.fields.find((e12) => 1 == e12.number && !e12.repeated);
          if ("map" !== (null == a11 ? void 0 : a11.fieldKind) || "message" !== a11.mapValue.kind || "google.protobuf.Value" !== a11.mapValue.message.typeName) break;
          return { typeName: e11.typeName, fields: a11 };
        }
        case "google.protobuf.Value": {
          const a11 = e11.oneofs.find((e12) => "kind" === e12.name), n11 = e11.fields.find((e12) => 1 == e12.number && e12.oneof === a11);
          if ("enum" !== (null == n11 ? void 0 : n11.fieldKind) || "google.protobuf.NullValue" !== n11.enum.typeName) return;
          const o10 = e11.fields.find((e12) => 2 == e12.number && "scalar" == e12.fieldKind && e12.scalar === s10.ScalarType.DOUBLE && e12.oneof === a11), r10 = e11.fields.find((e12) => 3 == e12.number && "scalar" == e12.fieldKind && e12.scalar === s10.ScalarType.STRING && e12.oneof === a11), t10 = e11.fields.find((e12) => 4 == e12.number && "scalar" == e12.fieldKind && e12.scalar === s10.ScalarType.BOOL && e12.oneof === a11), i10 = e11.fields.find((e12) => 5 == e12.number && e12.oneof === a11);
          if ("message" !== (null == i10 ? void 0 : i10.fieldKind) || "google.protobuf.Struct" !== i10.message.typeName) return;
          const m10 = e11.fields.find((e12) => 6 == e12.number && e12.oneof === a11);
          if ("message" !== (null == m10 ? void 0 : m10.fieldKind) || "google.protobuf.ListValue" !== m10.message.typeName) return;
          if (a11 && o10 && r10 && t10) return { typeName: e11.typeName, kind: a11, nullValue: n11, numberValue: o10, stringValue: r10, boolValue: t10, structValue: i10, listValue: m10 };
          break;
        }
        case "google.protobuf.ListValue": {
          const a11 = e11.fields.find((e12) => 1 == e12.number && e12.repeated);
          if ("message" != (null == a11 ? void 0 : a11.fieldKind) || "google.protobuf.Value" !== a11.message.typeName) break;
          return { typeName: e11.typeName, values: a11 };
        }
        case "google.protobuf.FieldMask": {
          const a11 = e11.fields.find((e12) => 1 == e12.number && "scalar" == e12.fieldKind && e12.scalar === s10.ScalarType.STRING && e12.repeated);
          if (a11) return { typeName: e11.typeName, paths: a11 };
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
          const a11 = e11.fields.find((e12) => 1 == e12.number && "value" == e12.name);
          if (!a11) break;
          if ("scalar" !== a11.fieldKind) break;
          return { typeName: e11.typeName, value: a11 };
        }
      }
    };
  }