// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8021 range:751476..763028
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8021: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.BytesValue = t2.StringValue = t2.BoolValue = t2.UInt32Value = t2.Int32Value = t2.UInt64Value = t2.Int64Value = t2.FloatValue = t2.DoubleValue = void 0;
    const n2 = A2(4193), r2 = A2(7599), o2 = A2(3408), s = A2(1498);
    class i extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.DOUBLE, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.DOUBLE, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new i().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new i().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new i().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(i, e3, t3);
      }
    }
    t2.DoubleValue = i, i.runtime = r2.proto3, i.typeName = "google.protobuf.DoubleValue", i.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), i.fieldWrapper = { wrapField: (e3) => new i({ value: e3 }), unwrapField: (e3) => e3.value };
    class a extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.FLOAT, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.FLOAT, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new a().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new a().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new a().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(a, e3, t3);
      }
    }
    t2.FloatValue = a, a.runtime = r2.proto3, a.typeName = "google.protobuf.FloatValue", a.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), a.fieldWrapper = { wrapField: (e3) => new a({ value: e3 }), unwrapField: (e3) => e3.value };
    class c extends n2.Message {
      constructor(e3) {
        super(), this.value = s.protoInt64.zero, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.INT64, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.INT64, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
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
        return r2.proto3.util.equals(c, e3, t3);
      }
    }
    t2.Int64Value = c, c.runtime = r2.proto3, c.typeName = "google.protobuf.Int64Value", c.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), c.fieldWrapper = { wrapField: (e3) => new c({ value: e3 }), unwrapField: (e3) => e3.value };
    class l extends n2.Message {
      constructor(e3) {
        super(), this.value = s.protoInt64.zero, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.UINT64, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.UINT64, e3);
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
        return r2.proto3.util.equals(l, e3, t3);
      }
    }
    t2.UInt64Value = l, l.runtime = r2.proto3, l.typeName = "google.protobuf.UInt64Value", l.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), l.fieldWrapper = { wrapField: (e3) => new l({ value: e3 }), unwrapField: (e3) => e3.value };
    class u extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.INT32, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.INT32, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
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
        return r2.proto3.util.equals(u, e3, t3);
      }
    }
    t2.Int32Value = u, u.runtime = r2.proto3, u.typeName = "google.protobuf.Int32Value", u.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), u.fieldWrapper = { wrapField: (e3) => new u({ value: e3 }), unwrapField: (e3) => e3.value };
    class g extends n2.Message {
      constructor(e3) {
        super(), this.value = 0, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.UINT32, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.UINT32, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new g().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new g().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new g().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(g, e3, t3);
      }
    }
    t2.UInt32Value = g, g.runtime = r2.proto3, g.typeName = "google.protobuf.UInt32Value", g.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), g.fieldWrapper = { wrapField: (e3) => new g({ value: e3 }), unwrapField: (e3) => e3.value };
    class E extends n2.Message {
      constructor(e3) {
        super(), this.value = false, r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.BOOL, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.BOOL, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(e3, t3) {
        return new E().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new E().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new E().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return r2.proto3.util.equals(E, e3, t3);
      }
    }
    t2.BoolValue = E, E.runtime = r2.proto3, E.typeName = "google.protobuf.BoolValue", E.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), E.fieldWrapper = { wrapField: (e3) => new E({ value: e3 }), unwrapField: (e3) => e3.value };
    class h extends n2.Message {
      constructor(e3) {
        super(), this.value = "", r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.STRING, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.STRING, e3);
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
        return r2.proto3.util.equals(h, e3, t3);
      }
    }
    t2.StringValue = h, h.runtime = r2.proto3, h.typeName = "google.protobuf.StringValue", h.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), h.fieldWrapper = { wrapField: (e3) => new h({ value: e3 }), unwrapField: (e3) => e3.value };
    class d extends n2.Message {
      constructor(e3) {
        super(), this.value = new Uint8Array(0), r2.proto3.util.initPartial(e3, this);
      }
      toJson(e3) {
        return r2.proto3.json.writeScalar(o2.ScalarType.BYTES, this.value, true);
      }
      fromJson(e3, t3) {
        try {
          this.value = r2.proto3.json.readScalar(o2.ScalarType.BYTES, e3);
        } catch (e4) {
          let t4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
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
        return r2.proto3.util.equals(d, e3, t3);
      }
    }
    t2.BytesValue = d, d.runtime = r2.proto3, d.typeName = "google.protobuf.BytesValue", d.fields = r2.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), d.fieldWrapper = { wrapField: (e3) => new d({ value: e3 }), unwrapField: (e3) => e3.value };
  }