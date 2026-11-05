// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2212 range:199159..200133
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2212: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.getUnwrappedFieldType = t2.wrapField = void 0;
    const n2 = A2(3408), r2 = A2(2706);
    t2.wrapField = function(e3, t3) {
      return (0, r2.isMessage)(t3) || !e3.fieldWrapper ? t3 : e3.fieldWrapper.wrapField(t3);
    }, t2.getUnwrappedFieldType = function(e3) {
      if ("message" === e3.fieldKind && !e3.repeated && null == e3.oneof) return o2[e3.message.typeName];
    };
    const o2 = { "google.protobuf.DoubleValue": n2.ScalarType.DOUBLE, "google.protobuf.FloatValue": n2.ScalarType.FLOAT, "google.protobuf.Int64Value": n2.ScalarType.INT64, "google.protobuf.UInt64Value": n2.ScalarType.UINT64, "google.protobuf.Int32Value": n2.ScalarType.INT32, "google.protobuf.UInt32Value": n2.ScalarType.UINT32, "google.protobuf.BoolValue": n2.ScalarType.BOOL, "google.protobuf.StringValue": n2.ScalarType.STRING, "google.protobuf.BytesValue": n2.ScalarType.BYTES };
  }