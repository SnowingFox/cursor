// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 2212 range:467996..468970
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2212: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.getUnwrappedFieldType = a2.wrapField = void 0;
    const t2 = n2(3408), s2 = n2(2706);
    a2.wrapField = function(e3, a3) {
      return (0, s2.isMessage)(a3) || !e3.fieldWrapper ? a3 : e3.fieldWrapper.wrapField(a3);
    }, a2.getUnwrappedFieldType = function(e3) {
      if ("message" === e3.fieldKind && !e3.repeated && null == e3.oneof) return o2[e3.message.typeName];
    };
    const o2 = { "google.protobuf.DoubleValue": t2.ScalarType.DOUBLE, "google.protobuf.FloatValue": t2.ScalarType.FLOAT, "google.protobuf.Int64Value": t2.ScalarType.INT64, "google.protobuf.UInt64Value": t2.ScalarType.UINT64, "google.protobuf.Int32Value": t2.ScalarType.INT32, "google.protobuf.UInt32Value": t2.ScalarType.UINT32, "google.protobuf.BoolValue": t2.ScalarType.BOOL, "google.protobuf.StringValue": t2.ScalarType.STRING, "google.protobuf.BytesValue": t2.ScalarType.BYTES };
  }