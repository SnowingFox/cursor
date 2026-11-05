// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2212 range:93102..94094
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2212: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.getUnwrappedFieldType = a10.wrapField = void 0;
    const s10 = n10(3408), o10 = n10(2706);
    a10.wrapField = function(e11, a11) {
      return (0, o10.isMessage)(a11) || !e11.fieldWrapper ? a11 : e11.fieldWrapper.wrapField(a11);
    }, a10.getUnwrappedFieldType = function(e11) {
      if ("message" === e11.fieldKind && !e11.repeated && null == e11.oneof) return r10[e11.message.typeName];
    };
    const r10 = { "google.protobuf.DoubleValue": s10.ScalarType.DOUBLE, "google.protobuf.FloatValue": s10.ScalarType.FLOAT, "google.protobuf.Int64Value": s10.ScalarType.INT64, "google.protobuf.UInt64Value": s10.ScalarType.UINT64, "google.protobuf.Int32Value": s10.ScalarType.INT32, "google.protobuf.UInt32Value": s10.ScalarType.UINT32, "google.protobuf.BoolValue": s10.ScalarType.BOOL, "google.protobuf.StringValue": s10.ScalarType.STRING, "google.protobuf.BytesValue": s10.ScalarType.BYTES };
  }