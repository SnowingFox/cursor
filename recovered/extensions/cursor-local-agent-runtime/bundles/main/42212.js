// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 42212 range:1271747..1272699
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42212: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.getUnwrappedFieldType = t.wrapField = void 0;
    const n = r(3408), o = r(62706);
    t.wrapField = function(e2, t2) {
      return (0, o.isMessage)(t2) || !e2.fieldWrapper ? t2 : e2.fieldWrapper.wrapField(t2);
    }, t.getUnwrappedFieldType = function(e2) {
      if ("message" === e2.fieldKind && !e2.repeated && null == e2.oneof) return s[e2.message.typeName];
    };
    const s = { "google.protobuf.DoubleValue": n.ScalarType.DOUBLE, "google.protobuf.FloatValue": n.ScalarType.FLOAT, "google.protobuf.Int64Value": n.ScalarType.INT64, "google.protobuf.UInt64Value": n.ScalarType.UINT64, "google.protobuf.Int32Value": n.ScalarType.INT32, "google.protobuf.UInt32Value": n.ScalarType.UINT32, "google.protobuf.BoolValue": n.ScalarType.BOOL, "google.protobuf.StringValue": n.ScalarType.STRING, "google.protobuf.BytesValue": n.ScalarType.BYTES };
  }