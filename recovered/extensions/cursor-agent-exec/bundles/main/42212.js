// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 42212 range:3207879..3208831
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42212: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.getUnwrappedFieldType = t.wrapField = void 0;
    const n = r(3408), s = r(62706);
    t.wrapField = function(e2, t2) {
      return (0, s.isMessage)(t2) || !e2.fieldWrapper ? t2 : e2.fieldWrapper.wrapField(t2);
    }, t.getUnwrappedFieldType = function(e2) {
      if ("message" === e2.fieldKind && !e2.repeated && null == e2.oneof) return o[e2.message.typeName];
    };
    const o = { "google.protobuf.DoubleValue": n.ScalarType.DOUBLE, "google.protobuf.FloatValue": n.ScalarType.FLOAT, "google.protobuf.Int64Value": n.ScalarType.INT64, "google.protobuf.UInt64Value": n.ScalarType.UINT64, "google.protobuf.Int32Value": n.ScalarType.INT32, "google.protobuf.UInt32Value": n.ScalarType.UINT32, "google.protobuf.BoolValue": n.ScalarType.BOOL, "google.protobuf.StringValue": n.ScalarType.STRING, "google.protobuf.BytesValue": n.ScalarType.BYTES };
  }