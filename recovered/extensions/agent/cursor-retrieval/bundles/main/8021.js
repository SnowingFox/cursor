// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 8021 range:940911..952477
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8021: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.BytesValue = a2.StringValue = a2.BoolValue = a2.UInt32Value = a2.Int32Value = a2.UInt64Value = a2.Int64Value = a2.FloatValue = a2.DoubleValue = void 0;
    const t2 = n2(4193), s2 = n2(7599), o2 = n2(3408), r2 = n2(1498);
    class i2 extends t2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.DOUBLE, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.DOUBLE, e3);
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
    class l extends t2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.FLOAT, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.FLOAT, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new l().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new l().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new l().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(l, e3, a3);
      }
    }
    a2.FloatValue = l, l.runtime = s2.proto3, l.typeName = "google.protobuf.FloatValue", l.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), l.fieldWrapper = { wrapField: (e3) => new l({ value: e3 }), unwrapField: (e3) => e3.value };
    class d extends t2.Message {
      constructor(e3) {
        super(), this.value = r2.protoInt64.zero, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.INT64, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.INT64, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new d().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new d().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new d().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(d, e3, a3);
      }
    }
    a2.Int64Value = d, d.runtime = s2.proto3, d.typeName = "google.protobuf.Int64Value", d.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), d.fieldWrapper = { wrapField: (e3) => new d({ value: e3 }), unwrapField: (e3) => e3.value };
    class m extends t2.Message {
      constructor(e3) {
        super(), this.value = r2.protoInt64.zero, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.UINT64, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.UINT64, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new m().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new m().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new m().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(m, e3, a3);
      }
    }
    a2.UInt64Value = m, m.runtime = s2.proto3, m.typeName = "google.protobuf.UInt64Value", m.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), m.fieldWrapper = { wrapField: (e3) => new m({ value: e3 }), unwrapField: (e3) => e3.value };
    class c extends t2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.INT32, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.INT32, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new c().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new c().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new c().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(c, e3, a3);
      }
    }
    a2.Int32Value = c, c.runtime = s2.proto3, c.typeName = "google.protobuf.Int32Value", c.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), c.fieldWrapper = { wrapField: (e3) => new c({ value: e3 }), unwrapField: (e3) => e3.value };
    class p extends t2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.UINT32, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.UINT32, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new p().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new p().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new p().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(p, e3, a3);
      }
    }
    a2.UInt32Value = p, p.runtime = s2.proto3, p.typeName = "google.protobuf.UInt32Value", p.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), p.fieldWrapper = { wrapField: (e3) => new p({ value: e3 }), unwrapField: (e3) => e3.value };
    class A extends t2.Message {
      constructor(e3) {
        super(), this.value = false, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.BOOL, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.BOOL, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new A().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new A().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new A().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(A, e3, a3);
      }
    }
    a2.BoolValue = A, A.runtime = s2.proto3, A.typeName = "google.protobuf.BoolValue", A.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), A.fieldWrapper = { wrapField: (e3) => new A({ value: e3 }), unwrapField: (e3) => e3.value };
    class u extends t2.Message {
      constructor(e3) {
        super(), this.value = "", s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.STRING, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.STRING, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new u().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new u().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new u().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(u, e3, a3);
      }
    }
    a2.StringValue = u, u.runtime = s2.proto3, u.typeName = "google.protobuf.StringValue", u.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), u.fieldWrapper = { wrapField: (e3) => new u({ value: e3 }), unwrapField: (e3) => e3.value };
    class g extends t2.Message {
      constructor(e3) {
        super(), this.value = new Uint8Array(0), s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.BYTES, this.value, true);
      }
      fromJson(e3, a3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.BYTES, e3);
        } catch (e4) {
          let a4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (a4 += `: ${e4.message}`), new Error(a4);
        }
        return this;
      }
      static fromBinary(e3, a3) {
        return new g().fromBinary(e3, a3);
      }
      static fromJson(e3, a3) {
        return new g().fromJson(e3, a3);
      }
      static fromJsonString(e3, a3) {
        return new g().fromJsonString(e3, a3);
      }
      static equals(e3, a3) {
        return s2.proto3.util.equals(g, e3, a3);
      }
    }
    a2.BytesValue = g, g.runtime = s2.proto3, g.typeName = "google.protobuf.BytesValue", g.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), g.fieldWrapper = { wrapField: (e3) => new g({ value: e3 }), unwrapField: (e3) => e3.value };
  }