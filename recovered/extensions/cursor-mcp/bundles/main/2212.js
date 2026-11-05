// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2212 range:200000..200974
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2212: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.getUnwrappedFieldType = t2.wrapField = void 0;
    const n2 = r2(3408), o2 = r2(2706);
    t2.wrapField = function(e3, t3) {
      return (0, o2.isMessage)(t3) || !e3.fieldWrapper ? t3 : e3.fieldWrapper.wrapField(t3);
    }, t2.getUnwrappedFieldType = function(e3) {
      if ("message" === e3.fieldKind && !e3.repeated && null == e3.oneof) return s2[e3.message.typeName];
    };
    const s2 = { "google.protobuf.DoubleValue": n2.ScalarType.DOUBLE, "google.protobuf.FloatValue": n2.ScalarType.FLOAT, "google.protobuf.Int64Value": n2.ScalarType.INT64, "google.protobuf.UInt64Value": n2.ScalarType.UINT64, "google.protobuf.Int32Value": n2.ScalarType.INT32, "google.protobuf.UInt32Value": n2.ScalarType.UINT32, "google.protobuf.BoolValue": n2.ScalarType.BOOL, "google.protobuf.StringValue": n2.ScalarType.STRING, "google.protobuf.BytesValue": n2.ScalarType.BYTES };
  }