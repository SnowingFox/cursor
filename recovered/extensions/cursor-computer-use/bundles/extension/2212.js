// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2212 range:196995..197969
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2212: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.getUnwrappedFieldType = n2.wrapField = void 0;
    const a2 = t2(3408), s2 = t2(2706);
    n2.wrapField = function(e3, n3) {
      return (0, s2.isMessage)(n3) || !e3.fieldWrapper ? n3 : e3.fieldWrapper.wrapField(n3);
    }, n2.getUnwrappedFieldType = function(e3) {
      if ("message" === e3.fieldKind && !e3.repeated && null == e3.oneof) return o2[e3.message.typeName];
    };
    const o2 = { "google.protobuf.DoubleValue": a2.ScalarType.DOUBLE, "google.protobuf.FloatValue": a2.ScalarType.FLOAT, "google.protobuf.Int64Value": a2.ScalarType.INT64, "google.protobuf.UInt64Value": a2.ScalarType.UINT64, "google.protobuf.Int32Value": a2.ScalarType.INT32, "google.protobuf.UInt32Value": a2.ScalarType.UINT32, "google.protobuf.BoolValue": a2.ScalarType.BOOL, "google.protobuf.StringValue": a2.ScalarType.STRING, "google.protobuf.BytesValue": a2.ScalarType.BYTES };
  }