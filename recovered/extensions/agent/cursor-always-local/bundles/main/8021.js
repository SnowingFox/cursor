// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8021 range:4707059..4718614
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8021: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.BytesValue = e2.StringValue = e2.BoolValue = e2.UInt32Value = e2.Int32Value = e2.UInt64Value = e2.Int64Value = e2.FloatValue = e2.DoubleValue = void 0;
    const n2 = r2(4193), s2 = r2(7599), i2 = r2(3408), o2 = r2(1498);
    class a extends n2.Message {
      constructor(t3) {
        super(), this.value = 0, s2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        return s2.proto3.json.writeScalar(i2.ScalarType.DOUBLE, this.value, true);
      }
      fromJson(t3, e3) {
        try {
          this.value = s2.proto3.json.readScalar(i2.ScalarType.DOUBLE, t3);
        } catch (t4) {
          let e4 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw t4 instanceof Error && t4.message.length > 0 && (e4 += `: ${t4.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(t3, e3) {
        return new a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(a, t3, e3);
      }
    }
    e2.DoubleValue = a, a.runtime = s2.proto3, a.typeName = "google.protobuf.DoubleValue", a.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), a.fieldWrapper = { wrapField: (t3) => new a({ value: t3 }), unwrapField: (t3) => t3.value };
    class u extends n2.Message {
      constructor(t3) {
        super(), this.value = 0, s2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        return s2.proto3.json.writeScalar(i2.ScalarType.FLOAT, this.value, true);
      }
      fromJson(t3, e3) {
        try {
          this.value = s2.proto3.json.readScalar(i2.ScalarType.FLOAT, t3);
        } catch (t4) {
          let e4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw t4 instanceof Error && t4.message.length > 0 && (e4 += `: ${t4.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(t3, e3) {
        return new u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(u, t3, e3);
      }
    }
    e2.FloatValue = u, u.runtime = s2.proto3, u.typeName = "google.protobuf.FloatValue", u.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), u.fieldWrapper = { wrapField: (t3) => new u({ value: t3 }), unwrapField: (t3) => t3.value };
    class c extends n2.Message {
      constructor(t3) {
        super(), this.value = o2.protoInt64.zero, s2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        return s2.proto3.json.writeScalar(i2.ScalarType.INT64, this.value, true);
      }
      fromJson(t3, e3) {
        try {
          this.value = s2.proto3.json.readScalar(i2.ScalarType.INT64, t3);
        } catch (t4) {
          let e4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw t4 instanceof Error && t4.message.length > 0 && (e4 += `: ${t4.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(t3, e3) {
        return new c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(c, t3, e3);
      }
    }
    e2.Int64Value = c, c.runtime = s2.proto3, c.typeName = "google.protobuf.Int64Value", c.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), c.fieldWrapper = { wrapField: (t3) => new c({ value: t3 }), unwrapField: (t3) => t3.value };
    class l extends n2.Message {
      constructor(t3) {
        super(), this.value = o2.protoInt64.zero, s2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        return s2.proto3.json.writeScalar(i2.ScalarType.UINT64, this.value, true);
      }
      fromJson(t3, e3) {
        try {
          this.value = s2.proto3.json.readScalar(i2.ScalarType.UINT64, t3);
        } catch (t4) {
          let e4 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw t4 instanceof Error && t4.message.length > 0 && (e4 += `: ${t4.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(l, t3, e3);
      }
    }
    e2.UInt64Value = l, l.runtime = s2.proto3, l.typeName = "google.protobuf.UInt64Value", l.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), l.fieldWrapper = { wrapField: (t3) => new l({ value: t3 }), unwrapField: (t3) => t3.value };
    class m extends n2.Message {
      constructor(t3) {
        super(), this.value = 0, s2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        return s2.proto3.json.writeScalar(i2.ScalarType.INT32, this.value, true);
      }
      fromJson(t3, e3) {
        try {
          this.value = s2.proto3.json.readScalar(i2.ScalarType.INT32, t3);
        } catch (t4) {
          let e4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw t4 instanceof Error && t4.message.length > 0 && (e4 += `: ${t4.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(t3, e3) {
        return new m().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new m().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new m().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(m, t3, e3);
      }
    }
    e2.Int32Value = m, m.runtime = s2.proto3, m.typeName = "google.protobuf.Int32Value", m.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), m.fieldWrapper = { wrapField: (t3) => new m({ value: t3 }), unwrapField: (t3) => t3.value };
    class d extends n2.Message {
      constructor(t3) {
        super(), this.value = 0, s2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        return s2.proto3.json.writeScalar(i2.ScalarType.UINT32, this.value, true);
      }
      fromJson(t3, e3) {
        try {
          this.value = s2.proto3.json.readScalar(i2.ScalarType.UINT32, t3);
        } catch (t4) {
          let e4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw t4 instanceof Error && t4.message.length > 0 && (e4 += `: ${t4.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(t3, e3) {
        return new d().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new d().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new d().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(d, t3, e3);
      }
    }
    e2.UInt32Value = d, d.runtime = s2.proto3, d.typeName = "google.protobuf.UInt32Value", d.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), d.fieldWrapper = { wrapField: (t3) => new d({ value: t3 }), unwrapField: (t3) => t3.value };
    class f extends n2.Message {
      constructor(t3) {
        super(), this.value = false, s2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        return s2.proto3.json.writeScalar(i2.ScalarType.BOOL, this.value, true);
      }
      fromJson(t3, e3) {
        try {
          this.value = s2.proto3.json.readScalar(i2.ScalarType.BOOL, t3);
        } catch (t4) {
          let e4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw t4 instanceof Error && t4.message.length > 0 && (e4 += `: ${t4.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(t3, e3) {
        return new f().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new f().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new f().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(f, t3, e3);
      }
    }
    e2.BoolValue = f, f.runtime = s2.proto3, f.typeName = "google.protobuf.BoolValue", f.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), f.fieldWrapper = { wrapField: (t3) => new f({ value: t3 }), unwrapField: (t3) => t3.value };
    class p extends n2.Message {
      constructor(t3) {
        super(), this.value = "", s2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        return s2.proto3.json.writeScalar(i2.ScalarType.STRING, this.value, true);
      }
      fromJson(t3, e3) {
        try {
          this.value = s2.proto3.json.readScalar(i2.ScalarType.STRING, t3);
        } catch (t4) {
          let e4 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw t4 instanceof Error && t4.message.length > 0 && (e4 += `: ${t4.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(t3, e3) {
        return new p().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new p().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new p().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(p, t3, e3);
      }
    }
    e2.StringValue = p, p.runtime = s2.proto3, p.typeName = "google.protobuf.StringValue", p.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), p.fieldWrapper = { wrapField: (t3) => new p({ value: t3 }), unwrapField: (t3) => t3.value };
    class h extends n2.Message {
      constructor(t3) {
        super(), this.value = new Uint8Array(0), s2.proto3.util.initPartial(t3, this);
      }
      toJson(t3) {
        return s2.proto3.json.writeScalar(i2.ScalarType.BYTES, this.value, true);
      }
      fromJson(t3, e3) {
        try {
          this.value = s2.proto3.json.readScalar(i2.ScalarType.BYTES, t3);
        } catch (t4) {
          let e4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw t4 instanceof Error && t4.message.length > 0 && (e4 += `: ${t4.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(t3, e3) {
        return new h().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new h().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new h().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return s2.proto3.util.equals(h, t3, e3);
      }
    }
    e2.BytesValue = h, h.runtime = s2.proto3, h.typeName = "google.protobuf.BytesValue", h.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), h.fieldWrapper = { wrapField: (t3) => new h({ value: t3 }), unwrapField: (t3) => t3.value };
  }