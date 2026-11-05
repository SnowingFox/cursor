// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 8021 range:650423..661975
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8021: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.BytesValue = n2.StringValue = n2.BoolValue = n2.UInt32Value = n2.Int32Value = n2.UInt64Value = n2.Int64Value = n2.FloatValue = n2.DoubleValue = void 0;
    const a2 = t2(4193), s2 = t2(7599), o2 = t2(3408), r = t2(1498);
    class i extends a2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.DOUBLE, this.value, true);
      }
      fromJson(e3, n3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.DOUBLE, e3);
        } catch (e4) {
          let n4 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(e3, n3) {
        return new i().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new i().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new i().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(i, e3, n3);
      }
    }
    n2.DoubleValue = i, i.runtime = s2.proto3, i.typeName = "google.protobuf.DoubleValue", i.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), i.fieldWrapper = { wrapField: (e3) => new i({ value: e3 }), unwrapField: (e3) => e3.value };
    class A extends a2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.FLOAT, this.value, true);
      }
      fromJson(e3, n3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.FLOAT, e3);
        } catch (e4) {
          let n4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(e3, n3) {
        return new A().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new A().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new A().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(A, e3, n3);
      }
    }
    n2.FloatValue = A, A.runtime = s2.proto3, A.typeName = "google.protobuf.FloatValue", A.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), A.fieldWrapper = { wrapField: (e3) => new A({ value: e3 }), unwrapField: (e3) => e3.value };
    class c extends a2.Message {
      constructor(e3) {
        super(), this.value = r.protoInt64.zero, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.INT64, this.value, true);
      }
      fromJson(e3, n3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.INT64, e3);
        } catch (e4) {
          let n4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(e3, n3) {
        return new c().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new c().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new c().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(c, e3, n3);
      }
    }
    n2.Int64Value = c, c.runtime = s2.proto3, c.typeName = "google.protobuf.Int64Value", c.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), c.fieldWrapper = { wrapField: (e3) => new c({ value: e3 }), unwrapField: (e3) => e3.value };
    class l extends a2.Message {
      constructor(e3) {
        super(), this.value = r.protoInt64.zero, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.UINT64, this.value, true);
      }
      fromJson(e3, n3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.UINT64, e3);
        } catch (e4) {
          let n4 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(e3, n3) {
        return new l().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new l().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new l().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(l, e3, n3);
      }
    }
    n2.UInt64Value = l, l.runtime = s2.proto3, l.typeName = "google.protobuf.UInt64Value", l.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), l.fieldWrapper = { wrapField: (e3) => new l({ value: e3 }), unwrapField: (e3) => e3.value };
    class d extends a2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.INT32, this.value, true);
      }
      fromJson(e3, n3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.INT32, e3);
        } catch (e4) {
          let n4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(e3, n3) {
        return new d().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new d().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new d().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(d, e3, n3);
      }
    }
    n2.Int32Value = d, d.runtime = s2.proto3, d.typeName = "google.protobuf.Int32Value", d.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), d.fieldWrapper = { wrapField: (e3) => new d({ value: e3 }), unwrapField: (e3) => e3.value };
    class m extends a2.Message {
      constructor(e3) {
        super(), this.value = 0, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.UINT32, this.value, true);
      }
      fromJson(e3, n3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.UINT32, e3);
        } catch (e4) {
          let n4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(e3, n3) {
        return new m().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new m().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new m().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(m, e3, n3);
      }
    }
    n2.UInt32Value = m, m.runtime = s2.proto3, m.typeName = "google.protobuf.UInt32Value", m.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), m.fieldWrapper = { wrapField: (e3) => new m({ value: e3 }), unwrapField: (e3) => e3.value };
    class u extends a2.Message {
      constructor(e3) {
        super(), this.value = false, s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.BOOL, this.value, true);
      }
      fromJson(e3, n3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.BOOL, e3);
        } catch (e4) {
          let n4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(e3, n3) {
        return new u().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new u().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new u().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(u, e3, n3);
      }
    }
    n2.BoolValue = u, u.runtime = s2.proto3, u.typeName = "google.protobuf.BoolValue", u.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), u.fieldWrapper = { wrapField: (e3) => new u({ value: e3 }), unwrapField: (e3) => e3.value };
    class g extends a2.Message {
      constructor(e3) {
        super(), this.value = "", s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.STRING, this.value, true);
      }
      fromJson(e3, n3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.STRING, e3);
        } catch (e4) {
          let n4 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(e3, n3) {
        return new g().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new g().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new g().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(g, e3, n3);
      }
    }
    n2.StringValue = g, g.runtime = s2.proto3, g.typeName = "google.protobuf.StringValue", g.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), g.fieldWrapper = { wrapField: (e3) => new g({ value: e3 }), unwrapField: (e3) => e3.value };
    class p extends a2.Message {
      constructor(e3) {
        super(), this.value = new Uint8Array(0), s2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return s2.proto3.json.writeScalar(o2.ScalarType.BYTES, this.value, true);
      }
      fromJson(e3, n3) {
        try {
          this.value = s2.proto3.json.readScalar(o2.ScalarType.BYTES, e3);
        } catch (e4) {
          let n4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (n4 += `: ${e4.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(e3, n3) {
        return new p().fromBinary(e3, n3);
      }
      static fromJson(e3, n3) {
        return new p().fromJson(e3, n3);
      }
      static fromJsonString(e3, n3) {
        return new p().fromJsonString(e3, n3);
      }
      static equals(e3, n3) {
        return s2.proto3.util.equals(p, e3, n3);
      }
    }
    n2.BytesValue = p, p.runtime = s2.proto3, p.typeName = "google.protobuf.BytesValue", p.fields = s2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), p.fieldWrapper = { wrapField: (e3) => new p({ value: e3 }), unwrapField: (e3) => e3.value };
  }