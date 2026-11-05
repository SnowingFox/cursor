// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 212 range:59832..60785
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
212: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.getUnwrappedFieldType = t2.wrapField = void 0;
    const r2 = n2(408), o2 = n2(706);
    t2.wrapField = function(e3, t3) {
      return (0, o2.isMessage)(t3) || !e3.fieldWrapper ? t3 : e3.fieldWrapper.wrapField(t3);
    }, t2.getUnwrappedFieldType = function(e3) {
      if ("message" === e3.fieldKind && !e3.repeated && null == e3.oneof) return a2[e3.message.typeName];
    };
    const a2 = { "google.protobuf.DoubleValue": r2.ScalarType.DOUBLE, "google.protobuf.FloatValue": r2.ScalarType.FLOAT, "google.protobuf.Int64Value": r2.ScalarType.INT64, "google.protobuf.UInt64Value": r2.ScalarType.UINT64, "google.protobuf.Int32Value": r2.ScalarType.INT32, "google.protobuf.UInt32Value": r2.ScalarType.UINT32, "google.protobuf.BoolValue": r2.ScalarType.BOOL, "google.protobuf.StringValue": r2.ScalarType.STRING, "google.protobuf.BytesValue": r2.ScalarType.BYTES };
  }