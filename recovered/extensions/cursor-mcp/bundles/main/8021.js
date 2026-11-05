// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8021 range:738787..750353
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8021: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.BytesValue = t2.StringValue = t2.BoolValue = t2.UInt32Value = t2.Int32Value = t2.UInt64Value = t2.Int64Value = t2.FloatValue = t2.DoubleValue = void 0;
    const n2 = r2(4193), o2 = r2(7599), s2 = r2(3408), i2 = r2(1498);
    class a2 extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(s2.ScalarType.DOUBLE, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(s2.ScalarType.DOUBLE, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new a2().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new a2().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new a2().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(a2, e3, t3);
      }
    }
    t2.DoubleValue = a2, a2.runtime = o2.proto3, a2.typeName = "google.protobuf.DoubleValue", a2.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), a2.fieldWrapper = { wrapField: (e3) => new a2({ value: e3 }), unwrapField: (e3) => e3.value };
    class c extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(s2.ScalarType.FLOAT, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(s2.ScalarType.FLOAT, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new c().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new c().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new c().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(c, e3, t3);
      }
    }
    t2.FloatValue = c, c.runtime = o2.proto3, c.typeName = "google.protobuf.FloatValue", c.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), c.fieldWrapper = { wrapField: (e3) => new c({ value: e3 }), unwrapField: (e3) => e3.value };
    class u extends n2.Message {
      constructor(e3) {
        super(), this.value = i2.protoInt64.zero, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(s2.ScalarType.INT64, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(s2.ScalarType.INT64, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new u().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new u().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new u().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(u, e3, t3);
      }
    }
    t2.Int64Value = u, u.runtime = o2.proto3, u.typeName = "google.protobuf.Int64Value", u.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), u.fieldWrapper = { wrapField: (e3) => new u({ value: e3 }), unwrapField: (e3) => e3.value };
    class l extends n2.Message {
      constructor(e3) {
        super(), this.value = i2.protoInt64.zero, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(s2.ScalarType.UINT64, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(s2.ScalarType.UINT64, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new l().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new l().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new l().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(l, e3, t3);
      }
    }
    t2.UInt64Value = l, l.runtime = o2.proto3, l.typeName = "google.protobuf.UInt64Value", l.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), l.fieldWrapper = { wrapField: (e3) => new l({ value: e3 }), unwrapField: (e3) => e3.value };
    class d extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(s2.ScalarType.INT32, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(s2.ScalarType.INT32, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new d().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new d().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new d().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(d, e3, t3);
      }
    }
    t2.Int32Value = d, d.runtime = o2.proto3, d.typeName = "google.protobuf.Int32Value", d.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), d.fieldWrapper = { wrapField: (e3) => new d({ value: e3 }), unwrapField: (e3) => e3.value };
    class p extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(s2.ScalarType.UINT32, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(s2.ScalarType.UINT32, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new p().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new p().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new p().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(p, e3, t3);
      }
    }
    t2.UInt32Value = p, p.runtime = o2.proto3, p.typeName = "google.protobuf.UInt32Value", p.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), p.fieldWrapper = { wrapField: (e3) => new p({ value: e3 }), unwrapField: (e3) => e3.value };
    class f extends n2.Message {
      constructor(e3) {
        super(), this.value = false, o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(s2.ScalarType.BOOL, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(s2.ScalarType.BOOL, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new f().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new f().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new f().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(f, e3, t3);
      }
    }
    t2.BoolValue = f, f.runtime = o2.proto3, f.typeName = "google.protobuf.BoolValue", f.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), f.fieldWrapper = { wrapField: (e3) => new f({ value: e3 }), unwrapField: (e3) => e3.value };
    class h extends n2.Message {
      constructor(e3) {
        super(), this.value = "", o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(s2.ScalarType.STRING, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(s2.ScalarType.STRING, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new h().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new h().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new h().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(h, e3, t3);
      }
    }
    t2.StringValue = h, h.runtime = o2.proto3, h.typeName = "google.protobuf.StringValue", h.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), h.fieldWrapper = { wrapField: (e3) => new h({ value: e3 }), unwrapField: (e3) => e3.value };
    class m extends n2.Message {
      constructor(e3) {
        super(), this.value = new Uint8Array(0), o2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return o2.proto3.json.writeScalar(s2.ScalarType.BYTES, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = o2.proto3.json.readScalar(s2.ScalarType.BYTES, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new m().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new m().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new m().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return o2.proto3.util.equals(m, e3, t3);
      }
    }
    t2.BytesValue = m, m.runtime = o2.proto3, m.typeName = "google.protobuf.BytesValue", m.fields = o2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), m.fieldWrapper = { wrapField: (e3) => new m({ value: e3 }), unwrapField: (e3) => e3.value };
  }