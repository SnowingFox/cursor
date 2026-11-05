// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 212 range:59832..60785
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
212: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.getUnwrappedFieldType = a2.wrapField = void 0;
    const o2 = n2(408), s2 = n2(706);
    a2.wrapField = function(e3, a3) {
      return (0, s2.isMessage)(a3) || !e3.fieldWrapper ? a3 : e3.fieldWrapper.wrapField(a3);
    }, a2.getUnwrappedFieldType = function(e3) {
      if ("message" === e3.fieldKind && !e3.repeated && null == e3.oneof) return t2[e3.message.typeName];
    };
    const t2 = { "google.protobuf.DoubleValue": o2.ScalarType.DOUBLE, "google.protobuf.FloatValue": o2.ScalarType.FLOAT, "google.protobuf.Int64Value": o2.ScalarType.INT64, "google.protobuf.UInt64Value": o2.ScalarType.UINT64, "google.protobuf.Int32Value": o2.ScalarType.INT32, "google.protobuf.UInt32Value": o2.ScalarType.UINT32, "google.protobuf.BoolValue": o2.ScalarType.BOOL, "google.protobuf.StringValue": o2.ScalarType.STRING, "google.protobuf.BytesValue": o2.ScalarType.BYTES };
  }