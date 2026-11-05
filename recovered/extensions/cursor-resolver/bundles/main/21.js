// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 21 range:37..11667
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
21: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.BytesValue = t2.StringValue = t2.BoolValue = t2.UInt32Value = t2.Int32Value = t2.UInt64Value = t2.Int64Value = t2.FloatValue = t2.DoubleValue = void 0;
    const r2 = n2(193), o2 = n2(599), a2 = n2(408), s2 = n2(498);
    class i2 extends r2.Message {
      constructor(e3) {
        super(), this.value = 0, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(a2.ScalarType.DOUBLE, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(a2.ScalarType.DOUBLE, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new i2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new i2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new i2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(i2, e3, t3);
      }
    }
    t2.DoubleValue = i2, i2.runtime = o2.proto3, i2.typeName = "google.protobuf.DoubleValue", i2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), i2.fieldWrapper = { wrapField: (e3) => new i2({ value: e3 }), unwrapField: (e3) => e3.value };
    class l2 extends r2.Message {
      constructor(e3) {
        super(), this.value = 0, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(a2.ScalarType.FLOAT, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(a2.ScalarType.FLOAT, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new l2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new l2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new l2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(l2, e3, t3);
      }
    }
    t2.FloatValue = l2, l2.runtime = o2.proto3, l2.typeName = "google.protobuf.FloatValue", l2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), l2.fieldWrapper = { wrapField: (e3) => new l2({ value: e3 }), unwrapField: (e3) => e3.value };
    class u2 extends r2.Message {
      constructor(e3) {
        super(), this.value = s2.protoInt64.zero, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(a2.ScalarType.INT64, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(a2.ScalarType.INT64, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new u2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new u2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new u2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(u2, e3, t3);
      }
    }
    t2.Int64Value = u2, u2.runtime = o2.proto3, u2.typeName = "google.protobuf.Int64Value", u2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), u2.fieldWrapper = { wrapField: (e3) => new u2({ value: e3 }), unwrapField: (e3) => e3.value };
    class c2 extends r2.Message {
      constructor(e3) {
        super(), this.value = s2.protoInt64.zero, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(a2.ScalarType.UINT64, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(a2.ScalarType.UINT64, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new c2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new c2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new c2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(c2, e3, t3);
      }
    }
    t2.UInt64Value = c2, c2.runtime = o2.proto3, c2.typeName = "google.protobuf.UInt64Value", c2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), c2.fieldWrapper = { wrapField: (e3) => new c2({ value: e3 }), unwrapField: (e3) => e3.value };
    class m2 extends r2.Message {
      constructor(e3) {
        super(), this.value = 0, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(a2.ScalarType.INT32, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(a2.ScalarType.INT32, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new m2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new m2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new m2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(m2, e3, t3);
      }
    }
    t2.Int32Value = m2, m2.runtime = o2.proto3, m2.typeName = "google.protobuf.Int32Value", m2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), m2.fieldWrapper = { wrapField: (e3) => new m2({ value: e3 }), unwrapField: (e3) => e3.value };
    class p2 extends r2.Message {
      constructor(e3) {
        super(), this.value = 0, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(a2.ScalarType.UINT32, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(a2.ScalarType.UINT32, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new p2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new p2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new p2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(p2, e3, t3);
      }
    }
    t2.UInt32Value = p2, p2.runtime = o2.proto3, p2.typeName = "google.protobuf.UInt32Value", p2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), p2.fieldWrapper = { wrapField: (e3) => new p2({ value: e3 }), unwrapField: (e3) => e3.value };
    class d2 extends r2.Message {
      constructor(e3) {
        super(), this.value = false, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(a2.ScalarType.BOOL, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(a2.ScalarType.BOOL, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new d2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new d2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new d2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(d2, e3, t3);
      }
    }
    t2.BoolValue = d2, d2.runtime = o2.proto3, d2.typeName = "google.protobuf.BoolValue", d2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), d2.fieldWrapper = { wrapField: (e3) => new d2({ value: e3 }), unwrapField: (e3) => e3.value };
    class f2 extends r2.Message {
      constructor(e3) {
        super(), this.value = "", o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(a2.ScalarType.STRING, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(a2.ScalarType.STRING, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new f2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new f2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new f2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(f2, e3, t3);
      }
    }
    t2.StringValue = f2, f2.runtime = o2.proto3, f2.typeName = "google.protobuf.StringValue", f2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), f2.fieldWrapper = { wrapField: (e3) => new f2({ value: e3 }), unwrapField: (e3) => e3.value };
    class T2 extends r2.Message {
      constructor(e3) {
        super(), this.value = new Uint8Array(0), o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(a2.ScalarType.BYTES, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(a2.ScalarType.BYTES, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new T2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new T2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new T2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(T2, e3, t3);
      }
    }
    t2.BytesValue = T2, T2.runtime = o2.proto3, T2.typeName = "google.protobuf.BytesValue", T2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), T2.fieldWrapper = { wrapField: (e3) => new T2({ value: e3 }), unwrapField: (e3) => e3.value };
  }