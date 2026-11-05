// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 21 range:37..11667
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
21: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.BytesValue = a2.StringValue = a2.BoolValue = a2.UInt32Value = a2.Int32Value = a2.UInt64Value = a2.Int64Value = a2.FloatValue = a2.DoubleValue = void 0;
    const o2 = n2(193), s2 = n2(599), t2 = n2(408), r2 = n2(498);
    class i2 extends o2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(t2.ScalarType.DOUBLE, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(t2.ScalarType.DOUBLE, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new i2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new i2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new i2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(i2, e3, a3);
      }
    }
    a2.DoubleValue = i2, i2.runtime = s2.proto3, i2.typeName = "google.protobuf.DoubleValue", i2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), i2.fieldWrapper = { wrapField: (e3) => new i2({ value: e3 }), unwrapField: (e3) => e3.value };
    class m2 extends o2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(t2.ScalarType.FLOAT, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(t2.ScalarType.FLOAT, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new m2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new m2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new m2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(m2, e3, a3);
      }
    }
    a2.FloatValue = m2, m2.runtime = s2.proto3, m2.typeName = "google.protobuf.FloatValue", m2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), m2.fieldWrapper = { wrapField: (e3) => new m2({ value: e3 }), unwrapField: (e3) => e3.value };
    class l2 extends o2.Message {
      constructor(e3) {
        super(), this.value = r2.protoInt64.zero, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(t2.ScalarType.INT64, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(t2.ScalarType.INT64, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new l2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new l2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new l2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(l2, e3, a3);
      }
    }
    a2.Int64Value = l2, l2.runtime = s2.proto3, l2.typeName = "google.protobuf.Int64Value", l2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), l2.fieldWrapper = { wrapField: (e3) => new l2({ value: e3 }), unwrapField: (e3) => e3.value };
    class d2 extends o2.Message {
      constructor(e3) {
        super(), this.value = r2.protoInt64.zero, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(t2.ScalarType.UINT64, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(t2.ScalarType.UINT64, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new d2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new d2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new d2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(d2, e3, a3);
      }
    }
    a2.UInt64Value = d2, d2.runtime = s2.proto3, d2.typeName = "google.protobuf.UInt64Value", d2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), d2.fieldWrapper = { wrapField: (e3) => new d2({ value: e3 }), unwrapField: (e3) => e3.value };
    class c2 extends o2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(t2.ScalarType.INT32, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(t2.ScalarType.INT32, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new c2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new c2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new c2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(c2, e3, a3);
      }
    }
    a2.Int32Value = c2, c2.runtime = s2.proto3, c2.typeName = "google.protobuf.Int32Value", c2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), c2.fieldWrapper = { wrapField: (e3) => new c2({ value: e3 }), unwrapField: (e3) => e3.value };
    class T2 extends o2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(t2.ScalarType.UINT32, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(t2.ScalarType.UINT32, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new T2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new T2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new T2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(T2, e3, a3);
      }
    }
    a2.UInt32Value = T2, T2.runtime = s2.proto3, T2.typeName = "google.protobuf.UInt32Value", T2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), T2.fieldWrapper = { wrapField: (e3) => new T2({ value: e3 }), unwrapField: (e3) => e3.value };
    class _2 extends o2.Message {
      constructor(e3) {
        super(), this.value = false, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(t2.ScalarType.BOOL, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(t2.ScalarType.BOOL, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new _2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new _2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new _2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(_2, e3, a3);
      }
    }
    a2.BoolValue = _2, _2.runtime = s2.proto3, _2.typeName = "google.protobuf.BoolValue", _2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), _2.fieldWrapper = { wrapField: (e3) => new _2({ value: e3 }), unwrapField: (e3) => e3.value };
    class p2 extends o2.Message {
      constructor(e3) {
        super(), this.value = "", s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(t2.ScalarType.STRING, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(t2.ScalarType.STRING, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new p2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new p2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new p2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(p2, e3, a3);
      }
    }
    a2.StringValue = p2, p2.runtime = s2.proto3, p2.typeName = "google.protobuf.StringValue", p2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), p2.fieldWrapper = { wrapField: (e3) => new p2({ value: e3 }), unwrapField: (e3) => e3.value };
    class u2 extends o2.Message {
      constructor(e3) {
        super(), this.value = new Uint8Array(0), s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(t2.ScalarType.BYTES, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(t2.ScalarType.BYTES, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new u2().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new u2().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new u2().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(u2, e3, a3);
      }
    }
    a2.BytesValue = u2, u2.runtime = s2.proto3, u2.typeName = "google.protobuf.BytesValue", u2.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), u2.fieldWrapper = { wrapField: (e3) => new u2({ value: e3 }), unwrapField: (e3) => e3.value };
  }