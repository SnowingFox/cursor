// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 28021 range:906742..918188
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28021: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.BytesValue = t.StringValue = t.BoolValue = t.UInt32Value = t.Int32Value = t.UInt64Value = t.Int64Value = t.FloatValue = t.DoubleValue = void 0;
    const n = r(24193), o = r(27599), s = r(3408), i = r(11498);
    class a extends n.Message {
      constructor(e2) {
        super(), this.value = 0, o.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return o.proto3.json.writeScalar(s.ScalarType.DOUBLE, this.value, true);
      }
      fromJson(e2, t2) {
        try {
          this.value = o.proto3.json.readScalar(s.ScalarType.DOUBLE, e2);
        } catch (e3) {
          let t3 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw e3 instanceof Error && e3.message.length > 0 && (t3 += `: ${e3.message}`), new Error(t3);
        }
        return this;
      }
      static fromBinary(e2, t2) {
        return new a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(a, e2, t2);
      }
    }
    t.DoubleValue = a, a.runtime = o.proto3, a.typeName = "google.protobuf.DoubleValue", a.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), a.fieldWrapper = { wrapField: (e2) => new a({ value: e2 }), unwrapField: (e2) => e2.value };
    class l extends n.Message {
      constructor(e2) {
        super(), this.value = 0, o.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return o.proto3.json.writeScalar(s.ScalarType.FLOAT, this.value, true);
      }
      fromJson(e2, t2) {
        try {
          this.value = o.proto3.json.readScalar(s.ScalarType.FLOAT, e2);
        } catch (e3) {
          let t3 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e3 instanceof Error && e3.message.length > 0 && (t3 += `: ${e3.message}`), new Error(t3);
        }
        return this;
      }
      static fromBinary(e2, t2) {
        return new l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(l, e2, t2);
      }
    }
    t.FloatValue = l, l.runtime = o.proto3, l.typeName = "google.protobuf.FloatValue", l.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), l.fieldWrapper = { wrapField: (e2) => new l({ value: e2 }), unwrapField: (e2) => e2.value };
    class c extends n.Message {
      constructor(e2) {
        super(), this.value = i.protoInt64.zero, o.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return o.proto3.json.writeScalar(s.ScalarType.INT64, this.value, true);
      }
      fromJson(e2, t2) {
        try {
          this.value = o.proto3.json.readScalar(s.ScalarType.INT64, e2);
        } catch (e3) {
          let t3 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw e3 instanceof Error && e3.message.length > 0 && (t3 += `: ${e3.message}`), new Error(t3);
        }
        return this;
      }
      static fromBinary(e2, t2) {
        return new c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(c, e2, t2);
      }
    }
    t.Int64Value = c, c.runtime = o.proto3, c.typeName = "google.protobuf.Int64Value", c.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), c.fieldWrapper = { wrapField: (e2) => new c({ value: e2 }), unwrapField: (e2) => e2.value };
    class u extends n.Message {
      constructor(e2) {
        super(), this.value = i.protoInt64.zero, o.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return o.proto3.json.writeScalar(s.ScalarType.UINT64, this.value, true);
      }
      fromJson(e2, t2) {
        try {
          this.value = o.proto3.json.readScalar(s.ScalarType.UINT64, e2);
        } catch (e3) {
          let t3 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw e3 instanceof Error && e3.message.length > 0 && (t3 += `: ${e3.message}`), new Error(t3);
        }
        return this;
      }
      static fromBinary(e2, t2) {
        return new u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(u, e2, t2);
      }
    }
    t.UInt64Value = u, u.runtime = o.proto3, u.typeName = "google.protobuf.UInt64Value", u.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), u.fieldWrapper = { wrapField: (e2) => new u({ value: e2 }), unwrapField: (e2) => e2.value };
    class d extends n.Message {
      constructor(e2) {
        super(), this.value = 0, o.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return o.proto3.json.writeScalar(s.ScalarType.INT32, this.value, true);
      }
      fromJson(e2, t2) {
        try {
          this.value = o.proto3.json.readScalar(s.ScalarType.INT32, e2);
        } catch (e3) {
          let t3 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw e3 instanceof Error && e3.message.length > 0 && (t3 += `: ${e3.message}`), new Error(t3);
        }
        return this;
      }
      static fromBinary(e2, t2) {
        return new d().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new d().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new d().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(d, e2, t2);
      }
    }
    t.Int32Value = d, d.runtime = o.proto3, d.typeName = "google.protobuf.Int32Value", d.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), d.fieldWrapper = { wrapField: (e2) => new d({ value: e2 }), unwrapField: (e2) => e2.value };
    class p extends n.Message {
      constructor(e2) {
        super(), this.value = 0, o.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return o.proto3.json.writeScalar(s.ScalarType.UINT32, this.value, true);
      }
      fromJson(e2, t2) {
        try {
          this.value = o.proto3.json.readScalar(s.ScalarType.UINT32, e2);
        } catch (e3) {
          let t3 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e3 instanceof Error && e3.message.length > 0 && (t3 += `: ${e3.message}`), new Error(t3);
        }
        return this;
      }
      static fromBinary(e2, t2) {
        return new p().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new p().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new p().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(p, e2, t2);
      }
    }
    t.UInt32Value = p, p.runtime = o.proto3, p.typeName = "google.protobuf.UInt32Value", p.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), p.fieldWrapper = { wrapField: (e2) => new p({ value: e2 }), unwrapField: (e2) => e2.value };
    class h extends n.Message {
      constructor(e2) {
        super(), this.value = false, o.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return o.proto3.json.writeScalar(s.ScalarType.BOOL, this.value, true);
      }
      fromJson(e2, t2) {
        try {
          this.value = o.proto3.json.readScalar(s.ScalarType.BOOL, e2);
        } catch (e3) {
          let t3 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e3 instanceof Error && e3.message.length > 0 && (t3 += `: ${e3.message}`), new Error(t3);
        }
        return this;
      }
      static fromBinary(e2, t2) {
        return new h().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new h().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new h().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(h, e2, t2);
      }
    }
    t.BoolValue = h, h.runtime = o.proto3, h.typeName = "google.protobuf.BoolValue", h.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), h.fieldWrapper = { wrapField: (e2) => new h({ value: e2 }), unwrapField: (e2) => e2.value };
    class m extends n.Message {
      constructor(e2) {
        super(), this.value = "", o.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return o.proto3.json.writeScalar(s.ScalarType.STRING, this.value, true);
      }
      fromJson(e2, t2) {
        try {
          this.value = o.proto3.json.readScalar(s.ScalarType.STRING, e2);
        } catch (e3) {
          let t3 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw e3 instanceof Error && e3.message.length > 0 && (t3 += `: ${e3.message}`), new Error(t3);
        }
        return this;
      }
      static fromBinary(e2, t2) {
        return new m().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new m().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new m().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(m, e2, t2);
      }
    }
    t.StringValue = m, m.runtime = o.proto3, m.typeName = "google.protobuf.StringValue", m.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), m.fieldWrapper = { wrapField: (e2) => new m({ value: e2 }), unwrapField: (e2) => e2.value };
    class f extends n.Message {
      constructor(e2) {
        super(), this.value = new Uint8Array(0), o.proto3.util.initPartial(e2, this);
      }
      toJson(e2) {
        return o.proto3.json.writeScalar(s.ScalarType.BYTES, this.value, true);
      }
      fromJson(e2, t2) {
        try {
          this.value = o.proto3.json.readScalar(s.ScalarType.BYTES, e2);
        } catch (e3) {
          let t3 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw e3 instanceof Error && e3.message.length > 0 && (t3 += `: ${e3.message}`), new Error(t3);
        }
        return this;
      }
      static fromBinary(e2, t2) {
        return new f().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new f().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new f().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return o.proto3.util.equals(f, e2, t2);
      }
    }
    t.BytesValue = f, f.runtime = o.proto3, f.typeName = "google.protobuf.BytesValue", f.fields = o.proto3.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), f.fieldWrapper = { wrapField: (e2) => new f({ value: e2 }), unwrapField: (e2) => e2.value };
  }