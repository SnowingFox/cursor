// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 2212 range:192804..193778
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2212: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.getUnwrappedFieldType = A2.wrapField = void 0;
    const n2 = t2(3408), r2 = t2(2706);
    A2.wrapField = function(e3, A3) {
      return (0, r2.isMessage)(A3) || !e3.fieldWrapper ? A3 : e3.fieldWrapper.wrapField(A3);
    }, A2.getUnwrappedFieldType = function(e3) {
      if ("message" === e3.fieldKind && !e3.repeated && null == e3.oneof) return o2[e3.message.typeName];
    };
    const o2 = { "google.protobuf.DoubleValue": n2.ScalarType.DOUBLE, "google.protobuf.FloatValue": n2.ScalarType.FLOAT, "google.protobuf.Int64Value": n2.ScalarType.INT64, "google.protobuf.UInt64Value": n2.ScalarType.UINT64, "google.protobuf.Int32Value": n2.ScalarType.INT32, "google.protobuf.UInt32Value": n2.ScalarType.UINT32, "google.protobuf.BoolValue": n2.ScalarType.BOOL, "google.protobuf.StringValue": n2.ScalarType.STRING, "google.protobuf.BytesValue": n2.ScalarType.BYTES };
  }