// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8021 range:303095..315240
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8021: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.BytesValue = a10.StringValue = a10.BoolValue = a10.UInt32Value = a10.Int32Value = a10.UInt64Value = a10.Int64Value = a10.FloatValue = a10.DoubleValue = void 0;
    const s10 = n10(4193), o10 = n10(7599), r10 = n10(3408), t10 = n10(1498);
    class i10 extends s10.Message {
      constructor(e11) {
        super(), this.value = 0, o10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        return o10.proto3.json.writeScalar(r10.ScalarType.DOUBLE, this.value, true);
      }
      fromJson(e11, a11) {
        try {
          this.value = o10.proto3.json.readScalar(r10.ScalarType.DOUBLE, e11);
        } catch (e12) {
          let a12 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw e12 instanceof Error && e12.message.length > 0 && (a12 += `: ${e12.message}`), new Error(a12);
        }
        return this;
      }
      static fromBinary(e11, a11) {
        return new i10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new i10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new i10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto3.util.equals(i10, e11, a11);
      }
    }
    a10.DoubleValue = i10, i10.runtime = o10.proto3, i10.typeName = "google.protobuf.DoubleValue", i10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), i10.fieldWrapper = { wrapField: (e11) => new i10({ value: e11 }), unwrapField: (e11) => e11.value };
    class m10 extends s10.Message {
      constructor(e11) {
        super(), this.value = 0, o10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        return o10.proto3.json.writeScalar(r10.ScalarType.FLOAT, this.value, true);
      }
      fromJson(e11, a11) {
        try {
          this.value = o10.proto3.json.readScalar(r10.ScalarType.FLOAT, e11);
        } catch (e12) {
          let a12 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e12 instanceof Error && e12.message.length > 0 && (a12 += `: ${e12.message}`), new Error(a12);
        }
        return this;
      }
      static fromBinary(e11, a11) {
        return new m10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new m10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new m10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto3.util.equals(m10, e11, a11);
      }
    }
    a10.FloatValue = m10, m10.runtime = o10.proto3, m10.typeName = "google.protobuf.FloatValue", m10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), m10.fieldWrapper = { wrapField: (e11) => new m10({ value: e11 }), unwrapField: (e11) => e11.value };
    class l10 extends s10.Message {
      constructor(e11) {
        super(), this.value = t10.protoInt64.zero, o10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        return o10.proto3.json.writeScalar(r10.ScalarType.INT64, this.value, true);
      }
      fromJson(e11, a11) {
        try {
          this.value = o10.proto3.json.readScalar(r10.ScalarType.INT64, e11);
        } catch (e12) {
          let a12 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw e12 instanceof Error && e12.message.length > 0 && (a12 += `: ${e12.message}`), new Error(a12);
        }
        return this;
      }
      static fromBinary(e11, a11) {
        return new l10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new l10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new l10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto3.util.equals(l10, e11, a11);
      }
    }
    a10.Int64Value = l10, l10.runtime = o10.proto3, l10.typeName = "google.protobuf.Int64Value", l10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), l10.fieldWrapper = { wrapField: (e11) => new l10({ value: e11 }), unwrapField: (e11) => e11.value };
    class d10 extends s10.Message {
      constructor(e11) {
        super(), this.value = t10.protoInt64.zero, o10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        return o10.proto3.json.writeScalar(r10.ScalarType.UINT64, this.value, true);
      }
      fromJson(e11, a11) {
        try {
          this.value = o10.proto3.json.readScalar(r10.ScalarType.UINT64, e11);
        } catch (e12) {
          let a12 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw e12 instanceof Error && e12.message.length > 0 && (a12 += `: ${e12.message}`), new Error(a12);
        }
        return this;
      }
      static fromBinary(e11, a11) {
        return new d10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new d10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new d10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto3.util.equals(d10, e11, a11);
      }
    }
    a10.UInt64Value = d10, d10.runtime = o10.proto3, d10.typeName = "google.protobuf.UInt64Value", d10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), d10.fieldWrapper = { wrapField: (e11) => new d10({ value: e11 }), unwrapField: (e11) => e11.value };
    class c10 extends s10.Message {
      constructor(e11) {
        super(), this.value = 0, o10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        return o10.proto3.json.writeScalar(r10.ScalarType.INT32, this.value, true);
      }
      fromJson(e11, a11) {
        try {
          this.value = o10.proto3.json.readScalar(r10.ScalarType.INT32, e11);
        } catch (e12) {
          let a12 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw e12 instanceof Error && e12.message.length > 0 && (a12 += `: ${e12.message}`), new Error(a12);
        }
        return this;
      }
      static fromBinary(e11, a11) {
        return new c10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new c10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new c10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto3.util.equals(c10, e11, a11);
      }
    }
    a10.Int32Value = c10, c10.runtime = o10.proto3, c10.typeName = "google.protobuf.Int32Value", c10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), c10.fieldWrapper = { wrapField: (e11) => new c10({ value: e11 }), unwrapField: (e11) => e11.value };
    class T10 extends s10.Message {
      constructor(e11) {
        super(), this.value = 0, o10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        return o10.proto3.json.writeScalar(r10.ScalarType.UINT32, this.value, true);
      }
      fromJson(e11, a11) {
        try {
          this.value = o10.proto3.json.readScalar(r10.ScalarType.UINT32, e11);
        } catch (e12) {
          let a12 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e12 instanceof Error && e12.message.length > 0 && (a12 += `: ${e12.message}`), new Error(a12);
        }
        return this;
      }
      static fromBinary(e11, a11) {
        return new T10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new T10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new T10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto3.util.equals(T10, e11, a11);
      }
    }
    a10.UInt32Value = T10, T10.runtime = o10.proto3, T10.typeName = "google.protobuf.UInt32Value", T10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), T10.fieldWrapper = { wrapField: (e11) => new T10({ value: e11 }), unwrapField: (e11) => e11.value };
    class p10 extends s10.Message {
      constructor(e11) {
        super(), this.value = false, o10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        return o10.proto3.json.writeScalar(r10.ScalarType.BOOL, this.value, true);
      }
      fromJson(e11, a11) {
        try {
          this.value = o10.proto3.json.readScalar(r10.ScalarType.BOOL, e11);
        } catch (e12) {
          let a12 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e12 instanceof Error && e12.message.length > 0 && (a12 += `: ${e12.message}`), new Error(a12);
        }
        return this;
      }
      static fromBinary(e11, a11) {
        return new p10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new p10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new p10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto3.util.equals(p10, e11, a11);
      }
    }
    a10.BoolValue = p10, p10.runtime = o10.proto3, p10.typeName = "google.protobuf.BoolValue", p10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), p10.fieldWrapper = { wrapField: (e11) => new p10({ value: e11 }), unwrapField: (e11) => e11.value };
    class _10 extends s10.Message {
      constructor(e11) {
        super(), this.value = "", o10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        return o10.proto3.json.writeScalar(r10.ScalarType.STRING, this.value, true);
      }
      fromJson(e11, a11) {
        try {
          this.value = o10.proto3.json.readScalar(r10.ScalarType.STRING, e11);
        } catch (e12) {
          let a12 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw e12 instanceof Error && e12.message.length > 0 && (a12 += `: ${e12.message}`), new Error(a12);
        }
        return this;
      }
      static fromBinary(e11, a11) {
        return new _10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new _10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new _10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto3.util.equals(_10, e11, a11);
      }
    }
    a10.StringValue = _10, _10.runtime = o10.proto3, _10.typeName = "google.protobuf.StringValue", _10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), _10.fieldWrapper = { wrapField: (e11) => new _10({ value: e11 }), unwrapField: (e11) => e11.value };
    class k10 extends s10.Message {
      constructor(e11) {
        super(), this.value = new Uint8Array(0), o10.proto3.util.initPartial(e11, this);
      }
      toJson(e11) {
        return o10.proto3.json.writeScalar(r10.ScalarType.BYTES, this.value, true);
      }
      fromJson(e11, a11) {
        try {
          this.value = o10.proto3.json.readScalar(r10.ScalarType.BYTES, e11);
        } catch (e12) {
          let a12 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw e12 instanceof Error && e12.message.length > 0 && (a12 += `: ${e12.message}`), new Error(a12);
        }
        return this;
      }
      static fromBinary(e11, a11) {
        return new k10().fromBinary(e11, a11);
      }
      static fromJson(e11, a11) {
        return new k10().fromJson(e11, a11);
      }
      static fromJsonString(e11, a11) {
        return new k10().fromJsonString(e11, a11);
      }
      static equals(e11, a11) {
        return o10.proto3.util.equals(k10, e11, a11);
      }
    }
    a10.BytesValue = k10, k10.runtime = o10.proto3, k10.typeName = "google.protobuf.BytesValue", k10.fields = o10.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), k10.fieldWrapper = { wrapField: (e11) => new k10({ value: e11 }), unwrapField: (e11) => e11.value };
  }