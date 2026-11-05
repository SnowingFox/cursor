// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2212 range:673144..674118
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2212: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.getUnwrappedFieldType = e2.wrapField = void 0;
    const n2 = r2(3408), s2 = r2(2706);
    e2.wrapField = function(t3, e3) {
      return (0, s2.isMessage)(e3) || !t3.fieldWrapper ? e3 : t3.fieldWrapper.wrapField(e3);
    }, e2.getUnwrappedFieldType = function(t3) {
      if ("message" === t3.fieldKind && !t3.repeated && null == t3.oneof) return i2[t3.message.typeName];
    };
    const i2 = { "google.protobuf.DoubleValue": n2.ScalarType.DOUBLE, "google.protobuf.FloatValue": n2.ScalarType.FLOAT, "google.protobuf.Int64Value": n2.ScalarType.INT64, "google.protobuf.UInt64Value": n2.ScalarType.UINT64, "google.protobuf.Int32Value": n2.ScalarType.INT32, "google.protobuf.UInt32Value": n2.ScalarType.UINT32, "google.protobuf.BoolValue": n2.ScalarType.BOOL, "google.protobuf.StringValue": n2.ScalarType.STRING, "google.protobuf.BytesValue": n2.ScalarType.BYTES };
  }