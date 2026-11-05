// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 42212 range:7731121..7732073
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