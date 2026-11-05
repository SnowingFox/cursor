// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 8021 range:619003..630555
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8021: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.BytesValue = A2.StringValue = A2.BoolValue = A2.UInt32Value = A2.Int32Value = A2.UInt64Value = A2.Int64Value = A2.FloatValue = A2.DoubleValue = void 0;
    const n2 = t2(4193), r2 = t2(7599), o2 = t2(3408), s = t2(1498);
    class a extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.DOUBLE, this.value, true);
      }
      fromJson(e3, A3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.DOUBLE, e3);
        } catch (e4) {
          let A4 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (A4 += `: ${e4.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(e3, A3) {
        return new a().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new a().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new a().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto3.util.equals(a, e3, A3);
      }
    }
    A2.DoubleValue = a, a.runtime = r2.proto3, a.typeName = "google.protobuf.DoubleValue", a.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), a.fieldWrapper = { wrapField: (e3) => new a({ value: e3 }), unwrapField: (e3) => e3.value };
    class i extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.FLOAT, this.value, true);
      }
      fromJson(e3, A3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.FLOAT, e3);
        } catch (e4) {
          let A4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (A4 += `: ${e4.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(e3, A3) {
        return new i().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new i().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new i().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto3.util.equals(i, e3, A3);
      }
    }
    A2.FloatValue = i, i.runtime = r2.proto3, i.typeName = "google.protobuf.FloatValue", i.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), i.fieldWrapper = { wrapField: (e3) => new i({ value: e3 }), unwrapField: (e3) => e3.value };
    class c extends n2.Message {
      constructor(e3) {
        super(), this.value = s.protoInt64.zero, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.INT64, this.value, true);
      }
      fromJson(e3, A3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.INT64, e3);
        } catch (e4) {
          let A4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (A4 += `: ${e4.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(e3, A3) {
        return new c().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new c().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new c().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto3.util.equals(c, e3, A3);
      }
    }
    A2.Int64Value = c, c.runtime = r2.proto3, c.typeName = "google.protobuf.Int64Value", c.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), c.fieldWrapper = { wrapField: (e3) => new c({ value: e3 }), unwrapField: (e3) => e3.value };
    class l extends n2.Message {
      constructor(e3) {
        super(), this.value = s.protoInt64.zero, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.UINT64, this.value, true);
      }
      fromJson(e3, A3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.UINT64, e3);
        } catch (e4) {
          let A4 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (A4 += `: ${e4.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(e3, A3) {
        return new l().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new l().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new l().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto3.util.equals(l, e3, A3);
      }
    }
    A2.UInt64Value = l, l.runtime = r2.proto3, l.typeName = "google.protobuf.UInt64Value", l.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), l.fieldWrapper = { wrapField: (e3) => new l({ value: e3 }), unwrapField: (e3) => e3.value };
    class g extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.INT32, this.value, true);
      }
      fromJson(e3, A3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.INT32, e3);
        } catch (e4) {
          let A4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (A4 += `: ${e4.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(e3, A3) {
        return new g().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new g().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new g().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto3.util.equals(g, e3, A3);
      }
    }
    A2.Int32Value = g, g.runtime = r2.proto3, g.typeName = "google.protobuf.Int32Value", g.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), g.fieldWrapper = { wrapField: (e3) => new g({ value: e3 }), unwrapField: (e3) => e3.value };
    class E extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.UINT32, this.value, true);
      }
      fromJson(e3, A3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.UINT32, e3);
        } catch (e4) {
          let A4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (A4 += `: ${e4.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(e3, A3) {
        return new E().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new E().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new E().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto3.util.equals(E, e3, A3);
      }
    }
    A2.UInt32Value = E, E.runtime = r2.proto3, E.typeName = "google.protobuf.UInt32Value", E.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), E.fieldWrapper = { wrapField: (e3) => new E({ value: e3 }), unwrapField: (e3) => e3.value };
    class u extends n2.Message {
      constructor(e3) {
        super(), this.value = false, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.BOOL, this.value, true);
      }
      fromJson(e3, A3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.BOOL, e3);
        } catch (e4) {
          let A4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (A4 += `: ${e4.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(e3, A3) {
        return new u().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new u().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new u().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto3.util.equals(u, e3, A3);
      }
    }
    A2.BoolValue = u, u.runtime = r2.proto3, u.typeName = "google.protobuf.BoolValue", u.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), u.fieldWrapper = { wrapField: (e3) => new u({ value: e3 }), unwrapField: (e3) => e3.value };
    class d extends n2.Message {
      constructor(e3) {
        super(), this.value = "", r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.STRING, this.value, true);
      }
      fromJson(e3, A3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.STRING, e3);
        } catch (e4) {
          let A4 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (A4 += `: ${e4.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(e3, A3) {
        return new d().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new d().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new d().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto3.util.equals(d, e3, A3);
      }
    }
    A2.StringValue = d, d.runtime = r2.proto3, d.typeName = "google.protobuf.StringValue", d.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), d.fieldWrapper = { wrapField: (e3) => new d({ value: e3 }), unwrapField: (e3) => e3.value };
    class I extends n2.Message {
      constructor(e3) {
        super(), this.value = new Uint8Array(0), r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.BYTES, this.value, true);
      }
      fromJson(e3, A3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.BYTES, e3);
        } catch (e4) {
          let A4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (A4 += `: ${e4.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(e3, A3) {
        return new I().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new I().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new I().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return r2.proto3.util.equals(I, e3, A3);
      }
    }
    A2.BytesValue = I, I.runtime = r2.proto3, I.typeName = "google.protobuf.BytesValue", I.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), I.fieldWrapper = { wrapField: (e3) => new I({ value: e3 }), unwrapField: (e3) => e3.value };
  }