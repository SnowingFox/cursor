// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2212 range:192933..193907
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2212: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.getUnwrappedFieldType = n2.wrapField = void 0;
    const t2 = a2(3408), s2 = a2(2706);
    n2.wrapField = function(e3, n3) {
      return (0, s2.isMessage)(n3) || !e3.fieldWrapper ? n3 : e3.fieldWrapper.wrapField(n3);
    }, n2.getUnwrappedFieldType = function(e3) {
      if ("message" === e3.fieldKind && !e3.repeated && null == e3.oneof) return o2[e3.message.typeName];
    };
    const o2 = { "google.protobuf.DoubleValue": t2.ScalarType.DOUBLE, "google.protobuf.FloatValue": t2.ScalarType.FLOAT, "google.protobuf.Int64Value": t2.ScalarType.INT64, "google.protobuf.UInt64Value": t2.ScalarType.UINT64, "google.protobuf.Int32Value": t2.ScalarType.INT32, "google.protobuf.UInt32Value": t2.ScalarType.UINT32, "google.protobuf.BoolValue": t2.ScalarType.BOOL, "google.protobuf.StringValue": t2.ScalarType.STRING, "google.protobuf.BytesValue": t2.ScalarType.BYTES };
  }